<h1 id="shipengine-api">ShipEngine API v1.1.202303022103</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

ShipEngine's easy-to-use REST API lets you manage all of your shipping needs without worrying about the complexities of different carrier APIs and protocols. We handle all the heavy lifting so you can focus on providing a first-class shipping experience for your customers at the best possible prices.

Each of ShipEngine's features can be used by itself or in conjunction with each other to build powerful shipping functionality into your application or service.

## Getting Started
If you're new to REST APIs then be sure to read our [introduction to REST](https://www.shipengine.com/docs/rest/) to understand the basics.  Learn how to [authenticate yourself to ShipEngine](https://www.shipengine.com/docs/auth/), and then use our [sandbox environment](https://www.shipengine.com/docs/sandbox/) to kick the tires and get familiar with our API. If you run into any problems, then be sure to check the [error handling guide](https://www.shipengine.com/docs/errors/) for tips.

Here are some step-by-step **tutorials** to get you started:

  - [Learn how to create your first shipping label](https://www.shipengine.com/docs/labels/create-a-label/)
  - [Calculate shipping costs and compare rates across carriers](https://www.shipengine.com/docs/rates/)
  - [Track packages on-demand or in real time](https://www.shipengine.com/docs/tracking/)
  - [Validate mailing addresses anywhere on Earth](https://www.shipengine.com/docs/addresses/validation/)


## Shipping Labels for Every Major Carrier
ShipEngine makes it easy to [create shipping labels for any carrier](https://www.shipengine.com/docs/labels/create-a-label/) and [download them](https://www.shipengine.com/docs/labels/downloading/) in a [variety of file formats](https://www.shipengine.com/docs/labels/formats/). You can even customize labels with your own [messages](https://www.shipengine.com/docs/labels/messages/) and [images](https://www.shipengine.com/docs/labels/branding/).


## Real-Time Package Tracking
With ShipEngine you can [get the current status of a package](https://www.shipengine.com/docs/tracking/) or [subscribe to real-time tracking updates](https://www.shipengine.com/docs/tracking/webhooks/) via webhooks. You can also create [custimized tracking pages](https://www.shipengine.com/docs/tracking/branded-tracking-page/) with your own branding so your customers will always know where their package is.


## Compare Shipping Costs Across Carriers
Make sure you ship as cost-effectively as possible by [comparing rates across carriers](https://www.shipengine.com/docs/rates/get-shipment-rates/) using the ShipEngine Rates API. Or if you don't know the full shipment details yet, then you can [get rate estimates](https://www.shipengine.com/docs/rates/estimate/) with limited address info.


## Worldwide Address Validation
ShipEngine supports [address validation](https://www.shipengine.com/docs/addresses/validation/) for virtually [every country on Earth](https://www.shipengine.com/docs/addresses/validation/countries/), including the United States, Canada, Great Britain, Australia, Germany, France, Norway, Spain, Sweden, Israel, Italy, and over 160 others.

Base URLs:

* <a href="https://api.shipengine.com">https://api.shipengine.com</a>

<a href="https://www.shipengine.com/terms-of-service/">Terms of service</a>
Email: <a href="mailto:sales@shipengine.com">ShipEngine Sales &amp; Support</a> 
Web: <a href="https://www.shipengine.com/contact/">ShipEngine Sales &amp; Support</a> 

<a href="https://www.shipengine.com/docs/">ShipEngine's documentation is designed to help you start shipping as quickly as possible. With easy-to-follow tutorials, detailed reference docs, and ready-made recipes for common use cases, you'll see real results in no time at all.</a>

# Authentication

* API Key (api_key)
    - Parameter Name: **API-Key**, in: header. To authenticate yourself to ShipEngine, you need to include an `API-Key` header in each API call. If you don't include a key when making an API request, or if you use an incorrect or expired key, then ShipEngine will respond with a `401 Unauthorized` error.

Learn more about API keys in our [authentication guide](https://www.shipengine.com/docs/auth/).

<h1 id="shipengine-api-addresses">addresses</h1>

No matter your shipping volume, failed deliveries and address change surcharges cut into your bottom line and damage perception with customers. Our address validation services ensure your packages make it to the right place the first time. [Learn how to leverage our address validation services here.](https://www.shipengine.com/docs/addresses/validation/)

ShipEngine supports address validation for virtually every country on Earth, including the United States, Canada, Great Britain, Australia, Germany, France, Norway, Spain, Sweden, Israel, Italy, and over 160 others.


<a href="https://www.shipengine.com/docs/addresses/validation/">Address validation ensures accurate addresses and can lead to reduced shipping costs by preventing address correction surcharges. ShipEngine cross references multiple databases to validate addresses and identify potential deliverability issues.</a>

## Parse an address

<a id="opIdparse_address"></a>

> Code samples

```bash
curl https://example.com/v1/addresses/recognize \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "API-Key: ${API_KEY}" \
  -d '{
    "address": {
      "address_residential_indicator": "yes",
      "country_code": "US"
    },
    "text": "Margie McMiller at 3800 North Lamar suite 200 in austin, tx.  The zip code there is 78652."
  }'
```

`PUT /v1/addresses/recognize`

The address-recognition API makes it easy for you to extract address data from unstructured text, including the recipient name, line 1, line 2, city, postal code, and more.

Data often enters your system as unstructured text (for example: emails, SMS messages, support tickets, or other documents). ShipEngine's address-recognition API helps you extract meaningful, structured data from this unstructured text. The parsed address data is returned in the same structure that's used for other ShipEngine APIs, such as address validation, rate quotes, and shipping labels.

> **Note:** Address recognition is currently supported for the United States, Canada, Australia, New Zealand, the United Kingdom, and Ireland.


> Body parameter

```json
{
  "address": {
    "address_residential_indicator": "yes",
    "country_code": "US"
  },
  "text": "Margie McMiller at 3800 North Lamar suite 200 in austin, tx.  The zip code there is 78652."
}
```

<h3 id="parse-an-address-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[parse_address_request_body](#schemaparse_address_request_body)|true|The only required field is `text`, which is the text to be parsed. You can optionally also provide an `address` containing already-known values. For example, you may already know the recipient's name, city, and country, and only want to parse the street address into separate lines.<br>|
|» address|body|object|false|You can optionally provide any already-known address values. For example, you may already know the recipient's name, city, and country, and only want to parse the street address into separate lines.<br>|
|» » address_line1|body|string|false|The first line of the street address.  For some addresses, this may be the only line.  Other addresses may require 2 or 3 lines.<br>|
|» » address_line2|body|string \| null|false|The second line of the street address.  For some addresses, this line may not be needed.<br>|
|» » address_line3|body|string \| null|false|The third line of the street address.  For some addresses, this line may not be needed.<br>|
|» » address_residential_indicator|body|object|false|Indicates whether this is a residential address.|
|» » city_locality|body|string|false|The name of the city or locality|
|» » company_name|body|string \| null|false|If this is a business address, then the company name should be specified here.<br>|
|» » country_code|body|object|false|The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)<br>|
|» » email|body|string \| null|false|Email for the address owner.<br>|
|» » name|body|string|false|The name of a contact person at this address.  This field may be set instead of - or in addition to - the `company_name` field.<br>|
|» » phone|body|string|false|The phone number of a contact person at this address.  The format of this phone number varies depending on the country.<br>|
|» » postal_code|body|object|false|none|
|» » state_province|body|string|false|The state or province.  For some countries (including the U.S.) only abbreviations are allowed.  Other countries allow the full name or abbreviation.<br>|
|» text|body|string|true|The unstructured text that contains address-related entities|

> Example responses

> 200 Response

```json
{
  "address": {
    "address_line1": "3800 North Lamar",
    "address_line2": "Suite 200",
    "address_residential_indicator": "yes",
    "city_locality": "Austin",
    "country_code": "US",
    "name": "Margie McMiller",
    "postal_code": 78652,
    "state_province": "TX"
  },
  "entities": [
    {
      "end_index": 14,
      "result": {
        "value": "Margie McMiller"
      },
      "score": 0.9519646137063122,
      "start_index": 0,
      "text": "Margie McMiller",
      "type": "person"
    },
    {
      "end_index": 34,
      "result": {
        "line": 1,
        "value": "3800 North Lamar"
      },
      "score": 0.9805313966503588,
      "start_index": 19,
      "text": "3800 North Lamar",
      "type": "address_line"
    },
    {
      "end_index": 22,
      "result": {
        "type": "cardinal",
        "value": 3800
      },
      "score": 0.9805313966503588,
      "start_index": 19,
      "text": 3800,
      "type": "number"
    },
    {
      "end_index": 44,
      "result": {
        "line": 2,
        "value": "Suite 200"
      },
      "score": 1,
      "start_index": 36,
      "text": "suite 200",
      "type": "address_line"
    },
    {
      "end_index": 44,
      "result": {
        "type": "cardinal",
        "value": 200
      },
      "score": 0.9805313966503588,
      "start_index": 42,
      "text": 200,
      "type": "number"
    },
    {
      "end_index": 54,
      "result": {
        "value": "Austin"
      },
      "score": 0.9805313966503588,
      "start_index": 49,
      "text": "austin",
      "type": "city_locality"
    },
    {
      "end_index": 58,
      "result": {
        "name": "Texas",
        "value": "TX"
      },
      "score": 0.6082904353940255,
      "start_index": 57,
      "text": "tx",
      "type": "state_province"
    },
    {
      "end_index": 88,
      "result": {
        "value": 78652
      },
      "score": 0.9519646137063122,
      "start_index": 84,
      "text": 78652,
      "type": "postal_code"
    }
  ],
  "score": 0.9122137426845613
}
```

> 400 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 500 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

<h3 id="parse-an-address-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the parsed address, as well as a confidence score and a list of all the entities that were recognized in the text.<br>|[parse_address_response_body](#schemaparse_address_response_body)|
|400|Bad Request|The request contained errors.|[error_response_body](#schemaerror_response_body)|
|500|Internal Server Error|An error occurred on ShipEngine's side.<br><br>> This error will automatically be reported to our engineers.<br>|[error_response_body](#schemaerror_response_body)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Validate An Address

<a id="opIdvalidate_address"></a>

> Code samples

```bash
curl https://example.com/v1/addresses/validate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "API-Key: ${API_KEY}" \
  -d '[
    {
      "address_line1": "500 South Buena Vista Street",
      "city_locality": "Burbank",
      "company_name": "The Walt Disney Company",
      "country_code": "US",
      "name": "Mickey and Minnie Mouse",
      "phone": "714-781-4565",
      "postal_code": 91521,
      "state_province": "CA"
    }
  ]'
```

`POST /v1/addresses/validate`

Address validation ensures accurate addresses and can lead to reduced shipping costs by preventing address correction surcharges.
ShipEngine cross references multiple databases to validate addresses and identify potential deliverability issues.


> Body parameter

```json
[
  {
    "address_line1": "500 South Buena Vista Street",
    "city_locality": "Burbank",
    "company_name": "The Walt Disney Company",
    "country_code": "US",
    "name": "Mickey and Minnie Mouse",
    "phone": "714-781-4565",
    "postal_code": 91521,
    "state_province": "CA"
  }
]
```

<h3 id="validate-an-address-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[validate_address_request_body](#schemavalidate_address_request_body)|true|none|
|» address_line1|body|string|true|The first line of the street address.  For some addresses, this may be the only line.  Other addresses may require 2 or 3 lines.<br>|
|» address_line2|body|string \| null|false|The second line of the street address.  For some addresses, this line may not be needed.<br>|
|» address_line3|body|string \| null|false|The third line of the street address.  For some addresses, this line may not be needed.<br>|
|» address_residential_indicator|body|object|false|Indicates whether this is a residential address.|
|» city_locality|body|string|true|The name of the city or locality|
|» company_name|body|string \| null|false|If this is a business address, then the company name should be specified here.<br>|
|» country_code|body|object|true|The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)<br>|
|» email|body|string \| null|false|Email for the address owner.<br>|
|» name|body|string|false|The name of a contact person at this address.  This field may be set instead of - or in addition to - the `company_name` field.<br>|
|» phone|body|string|false|The phone number of a contact person at this address.  The format of this phone number varies depending on the country.<br>|
|» postal_code|body|object|false|none|
|» state_province|body|string|true|The state or province.  For some countries (including the U.S.) only abbreviations are allowed.  Other countries allow the full name or abbreviation.<br>|

> Example responses

> 200 Response

```json
[
  {
    "matched_address": {
      "address_line1": "500 S BUENA VISTA ST",
      "address_line2": null,
      "address_line3": null,
      "address_residential_indicator": "no",
      "city_locality": "BURBANK",
      "company_name": "THE WALT DISNEY COMPANY",
      "country_code": "US",
      "name": "MICKEY AND MINNIE MOUSE",
      "phone": "714-781-4565",
      "postal_code": "91521-0007",
      "state_province": "CA"
    },
    "messages": [],
    "original_address": {
      "address_line1": "500 South Buena Vista Street",
      "address_line2": null,
      "address_line3": null,
      "address_residential_indicator": "unknown",
      "city_locality": "Burbank",
      "company_name": "The Walt Disney Company",
      "country_code": "US",
      "name": "Mickey and Minnie Mouse",
      "phone": "714-781-4565",
      "postal_code": 91521,
      "state_province": "CA"
    },
    "status": "verified"
  }
]
```

> 400 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 500 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

<h3 id="validate-an-address-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request was a success.|[validate_address_response_body](#schemavalidate_address_response_body)|
|400|Bad Request|The request contained errors.|[error_response_body](#schemaerror_response_body)|
|500|Internal Server Error|An error occurred on ShipEngine's side.<br><br>> This error will automatically be reported to our engineers.<br>|[error_response_body](#schemaerror_response_body)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

<h1 id="shipengine-api-batches">batches</h1>

batches


## List Batches

<a id="opIdlist_batches"></a>

> Code samples

```bash
curl https://example.com/v1/batches \
  -H 'Accept: application/json' \
  -H "API-Key: ${API_KEY}"
```

`GET /v1/batches`

List Batches associated with your Shipengine account

<h3 id="list-batches-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|status|query|[batch_status](#schemabatch_status)|false|none|
|page|query|integer(int32)|false|Return a specific page of results. Defaults to the first page. If set to a number that's greater than the number of pages of results, an empty page is returned.<br>|
|page_size|query|integer(int32)|false|The number of results to return per response.|
|sort_dir|query|object|false|Controls the sort order of the query.|
|batch_number|query|string|false|Batch Number|
|sort_by|query|[batches_sort_by](#schemabatches_sort_by)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|status|open|
|status|queued|
|status|processing|
|status|completed|
|status|completed_with_errors|
|status|archived|
|status|notifying|
|status|invalid|
|sort_by|ship_date|
|sort_by|processed_at|
|sort_by|created_at|

> Example responses

> 200 Response

```json
{
  "batches": [
    {
      "batch_errors_url": {
        "href": {},
        "type": "string"
      },
      "batch_id": {},
      "batch_labels_url": {
        "href": {},
        "type": "string"
      },
      "batch_notes": "Batch for morning shipment",
      "batch_number": "string",
      "batch_shipments_url": {
        "href": {},
        "type": "string"
      },
      "completed": 1,
      "count": 2,
      "created_at": {},
      "errors": 2,
      "external_batch_id": "string",
      "form_download": {
        "href": {},
        "type": "string"
      },
      "forms": 3,
      "label_download": {
        "href": {},
        "pdf": {},
        "png": {},
        "zpl": {}
      },
      "label_format": "pdf",
      "label_layout": "4x6",
      "processed_at": {},
      "status": {},
      "warnings": 1
    }
  ],
  "links": {
    "first": {
      "href": {},
      "type": "string"
    },
    "last": {
      "href": {},
      "type": "string"
    },
    "next": {
      "href": {},
      "type": "string"
    },
    "prev": {
      "href": {},
      "type": "string"
    }
  },
  "page": 1,
  "pages": 10,
  "total": 10
}
```

> 404 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 500 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

<h3 id="list-batches-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request was a success.|[list_batches_response_body](#schemalist_batches_response_body)|
|404|Not Found|The specified resource does not exist.|[error_response_body](#schemaerror_response_body)|
|500|Internal Server Error|An error occurred on ShipEngine's side.<br><br>> This error will automatically be reported to our engineers.<br>|[error_response_body](#schemaerror_response_body)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Create A Batch

<a id="opIdcreate_batch"></a>

> Code samples

```bash
curl https://example.com/v1/batches \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "API-Key: ${API_KEY}" \
  -d '{
    "batch_notes": "This is my batch",
    "external_batch_id": {},
    "rate_ids": [
      {}
    ],
    "shipment_ids": [
      {}
    ]
  }'
```

`POST /v1/batches`

Create a Batch

> Body parameter

```json
{
  "batch_notes": "This is my batch",
  "external_batch_id": {},
  "rate_ids": [
    {}
  ],
  "shipment_ids": [
    {}
  ]
}
```

<h3 id="create-a-batch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[create_batch_request_body](#schemacreate_batch_request_body)|true|none|
|» batch_notes|body|string|false|Add custom messages for a particular batch|
|» external_batch_id|body|object|false|A string that uniquely identifies the external batch|
|» rate_ids|body|[string]|false|Array of rate IDs used in the batch|
|» shipment_ids|body|[object]|false|Array of shipment IDs used in the batch|

> Example responses

> 200 Response

```json
{
  "batch_errors_url": {
    "href": {},
    "type": "string"
  },
  "batch_id": {},
  "batch_labels_url": {
    "href": {},
    "type": "string"
  },
  "batch_notes": "Batch for morning shipment",
  "batch_number": "string",
  "batch_shipments_url": {
    "href": {},
    "type": "string"
  },
  "completed": 1,
  "count": 2,
  "created_at": {},
  "errors": 2,
  "external_batch_id": "string",
  "form_download": {
    "href": {},
    "type": "string"
  },
  "forms": 3,
  "label_download": {
    "href": {},
    "pdf": {},
    "png": {},
    "zpl": {}
  },
  "label_format": "pdf",
  "label_layout": "4x6",
  "processed_at": {},
  "status": {},
  "warnings": 1
}
```

> 400 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 500 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

<h3 id="create-a-batch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The requested object creation was a success.|[create_batch_response_body](#schemacreate_batch_response_body)|
|400|Bad Request|The request contained errors.|[error_response_body](#schemaerror_response_body)|
|500|Internal Server Error|An error occurred on ShipEngine's side.<br><br>> This error will automatically be reported to our engineers.<br>|[error_response_body](#schemaerror_response_body)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Get Batch By External ID

<a id="opIdget_batch_by_external_id"></a>

> Code samples

```bash
curl https://example.com/v1/batches/external_batch_id/13553d7f-3c87-4771-bae1-c49bacef11cb \
  -H 'Accept: application/json' \
  -H "API-Key: ${API_KEY}"
```

`GET /v1/batches/external_batch_id/{external_batch_id}`

Get Batch By External ID

<h3 id="get-batch-by-external-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|external_batch_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "batch_errors_url": {
    "href": {},
    "type": "string"
  },
  "batch_id": {},
  "batch_labels_url": {
    "href": {},
    "type": "string"
  },
  "batch_notes": "Batch for morning shipment",
  "batch_number": "string",
  "batch_shipments_url": {
    "href": {},
    "type": "string"
  },
  "completed": 1,
  "count": 2,
  "created_at": {},
  "errors": 2,
  "external_batch_id": "string",
  "form_download": {
    "href": {},
    "type": "string"
  },
  "forms": 3,
  "label_download": {
    "href": {},
    "pdf": {},
    "png": {},
    "zpl": {}
  },
  "label_format": "pdf",
  "label_layout": "4x6",
  "processed_at": {},
  "status": {},
  "warnings": 1
}
```

> 400 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 404 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 500 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

<h3 id="get-batch-by-external-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request was a success.|[get_batch_by_external_id_response_body](#schemaget_batch_by_external_id_response_body)|
|400|Bad Request|The request contained errors.|[error_response_body](#schemaerror_response_body)|
|404|Not Found|The specified resource does not exist.|[error_response_body](#schemaerror_response_body)|
|500|Internal Server Error|An error occurred on ShipEngine's side.<br><br>> This error will automatically be reported to our engineers.<br>|[error_response_body](#schemaerror_response_body)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Get Batch By ID

<a id="opIdget_batch_by_id"></a>

> Code samples

```bash
curl https://example.com/v1/batches/se-28529731 \
  -H 'Accept: application/json' \
  -H "API-Key: ${API_KEY}"
```

`GET /v1/batches/{batch_id}`

Get Batch By ID

<h3 id="get-batch-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|batch_id|path|[se_id](#schemase_id)|true|Batch ID|

> Example responses

> 200 Response

```json
{
  "batch_errors_url": {
    "href": {},
    "type": "string"
  },
  "batch_id": {},
  "batch_labels_url": {
    "href": {},
    "type": "string"
  },
  "batch_notes": "Batch for morning shipment",
  "batch_number": "string",
  "batch_shipments_url": {
    "href": {},
    "type": "string"
  },
  "completed": 1,
  "count": 2,
  "created_at": {},
  "errors": 2,
  "external_batch_id": "string",
  "form_download": {
    "href": {},
    "type": "string"
  },
  "forms": 3,
  "label_download": {
    "href": {},
    "pdf": {},
    "png": {},
    "zpl": {}
  },
  "label_format": "pdf",
  "label_layout": "4x6",
  "processed_at": {},
  "status": {},
  "warnings": 1
}
```

> 400 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 404 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 500 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

<h3 id="get-batch-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request was a success.|[get_batch_by_id_response_body](#schemaget_batch_by_id_response_body)|
|400|Bad Request|The request contained errors.|[error_response_body](#schemaerror_response_body)|
|404|Not Found|The specified resource does not exist.|[error_response_body](#schemaerror_response_body)|
|500|Internal Server Error|An error occurred on ShipEngine's side.<br><br>> This error will automatically be reported to our engineers.<br>|[error_response_body](#schemaerror_response_body)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Update Batch By Id

<a id="opIdupdate_batch"></a>

> Code samples

```bash
curl https://example.com/v1/batches/se-28529731 \
  -X PUT \
  -H 'Accept: application/json' \
  -H "API-Key: ${API_KEY}"
```

`PUT /v1/batches/{batch_id}`

Update Batch By Id

<h3 id="update-batch-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|batch_id|path|[se_id](#schemase_id)|true|Batch ID|

> Example responses

> 204 Response

```json
""
```

> 400 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 404 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 500 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

<h3 id="update-batch-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The request was successful.|[empty_response_body](#schemaempty_response_body)|
|400|Bad Request|The request contained errors.|[error_response_body](#schemaerror_response_body)|
|404|Not Found|The specified resource does not exist.|[error_response_body](#schemaerror_response_body)|
|500|Internal Server Error|An error occurred on ShipEngine's side.<br><br>> This error will automatically be reported to our engineers.<br>|[error_response_body](#schemaerror_response_body)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Delete Batch By Id

<a id="opIddelete_batch"></a>

> Code samples

```bash
curl https://example.com/v1/batches/se-28529731 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "API-Key: ${API_KEY}"
```

`DELETE /v1/batches/{batch_id}`

Delete Batch By Id

<h3 id="delete-batch-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|batch_id|path|[se_id](#schemase_id)|true|Batch ID|

> Example responses

> 204 Response

```json
""
```

> 400 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 404 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 500 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

<h3 id="delete-batch-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The request was successful.|[empty_response_body](#schemaempty_response_body)|
|400|Bad Request|The request contained errors.|[error_response_body](#schemaerror_response_body)|
|404|Not Found|The specified resource does not exist.|[error_response_body](#schemaerror_response_body)|
|500|Internal Server Error|An error occurred on ShipEngine's side.<br><br>> This error will automatically be reported to our engineers.<br>|[error_response_body](#schemaerror_response_body)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Add to a Batch

<a id="opIdadd_to_batch"></a>

> Code samples

```bash
curl https://example.com/v1/batches/se-28529731/add \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "API-Key: ${API_KEY}" \
  -d '{
    "rate_ids": [
      {}
    ],
    "shipment_ids": [
      {}
    ]
  }'
```

`POST /v1/batches/{batch_id}/add`

Add a Shipment or Rate to a Batch

> Body parameter

```json
{
  "rate_ids": [
    {}
  ],
  "shipment_ids": [
    {}
  ]
}
```

<h3 id="add-to-a-batch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|batch_id|path|[se_id](#schemase_id)|true|Batch ID|
|body|body|[add_to_batch_request_body](#schemaadd_to_batch_request_body)|true|none|
|» rate_ids|body|[object]|false|Array of Rate IDs to be modifed on the batch|
|» shipment_ids|body|[object]|false|The Shipment Ids to be modified on the batch|

> Example responses

> 204 Response

```json
""
```

> 400 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 404 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 500 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

<h3 id="add-to-a-batch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The request was successful.|[empty_response_body](#schemaempty_response_body)|
|400|Bad Request|The request contained errors.|[error_response_body](#schemaerror_response_body)|
|404|Not Found|The specified resource does not exist.|[error_response_body](#schemaerror_response_body)|
|500|Internal Server Error|An error occurred on ShipEngine's side.<br><br>> This error will automatically be reported to our engineers.<br>|[error_response_body](#schemaerror_response_body)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Get Batch Errors

<a id="opIdlist_batch_errors"></a>

> Code samples

```bash
curl https://example.com/v1/batches/se-28529731/errors \
  -H 'Accept: application/json' \
  -H "API-Key: ${API_KEY}"
```

`GET /v1/batches/{batch_id}/errors`

Error handling in batches are handled differently than in a single synchronous request.
You must retrieve the status of your batch by [getting a batch](https://www.shipengine.com/docs/reference/get-batch-by-id/) and getting an overview of the statuses or you can list errors directly here below to get detailed information about the errors.


<h3 id="get-batch-errors-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer(int32)|false|Return a specific page of results. Defaults to the first page. If set to a number that's greater than the number of pages of results, an empty page is returned.<br>|
|pagesize|query|integer(int32)|false|none|
|batch_id|path|[se_id](#schemase_id)|true|Batch ID|

> Example responses

> 200 Response

```json
{
  "errors": [],
  "links": {
    "first": {
      "href": {},
      "type": "string"
    },
    "last": {
      "href": {},
      "type": "string"
    },
    "next": {
      "href": {},
      "type": "string"
    },
    "prev": {
      "href": {},
      "type": "string"
    }
  }
}
```

> 400 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 404 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 500 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

<h3 id="get-batch-errors-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request was a success.|[list_batch_errors_response_body](#schemalist_batch_errors_response_body)|
|400|Bad Request|The request contained errors.|[error_response_body](#schemaerror_response_body)|
|404|Not Found|The specified resource does not exist.|[error_response_body](#schemaerror_response_body)|
|500|Internal Server Error|An error occurred on ShipEngine's side.<br><br>> This error will automatically be reported to our engineers.<br>|[error_response_body](#schemaerror_response_body)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Process Batch ID Labels

<a id="opIdprocess_batch"></a>

> Code samples

```bash
curl https://example.com/v1/batches/se-28529731/process/labels \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "API-Key: ${API_KEY}" \
  -d '{
    "display_scheme": "label",
    "label_format": "pdf",
    "label_layout": "4x6",
    "ship_date": {}
  }'
```

`POST /v1/batches/{batch_id}/process/labels`

Process Batch ID Labels

> Body parameter

```json
{
  "display_scheme": "label",
  "label_format": "pdf",
  "label_layout": "4x6",
  "ship_date": {}
}
```

<h3 id="process-batch-id-labels-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|batch_id|path|[se_id](#schemase_id)|true|Batch ID|
|body|body|[process_batch_request_body](#schemaprocess_batch_request_body)|true|none|
|» display_scheme|body|object|false|The display format that the label should be shown in.|
|» label_format|body|object|false|none|
|» label_layout|body|string|false|none|
|» ship_date|body|object|false|The Ship date the batch is being processed for|

> Example responses

> 204 Response

```json
""
```

> 400 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 404 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 500 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

<h3 id="process-batch-id-labels-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The request was successful.|[empty_response_body](#schemaempty_response_body)|
|400|Bad Request|The request contained errors.|[error_response_body](#schemaerror_response_body)|
|404|Not Found|The specified resource does not exist.|[error_response_body](#schemaerror_response_body)|
|500|Internal Server Error|An error occurred on ShipEngine's side.<br><br>> This error will automatically be reported to our engineers.<br>|[error_response_body](#schemaerror_response_body)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Remove From Batch

<a id="opIdremove_from_batch"></a>

> Code samples

```bash
curl https://example.com/v1/batches/se-28529731/remove \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "API-Key: ${API_KEY}" \
  -d '{
    "rate_ids": [
      {}
    ],
    "shipment_ids": [
      {}
    ]
  }'
```

`POST /v1/batches/{batch_id}/remove`

Remove a shipment or rate from a batch

> Body parameter

```json
{
  "rate_ids": [
    {}
  ],
  "shipment_ids": [
    {}
  ]
}
```

<h3 id="remove-from-batch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|batch_id|path|[se_id](#schemase_id)|true|Batch ID|
|body|body|[remove_from_batch_request_body](#schemaremove_from_batch_request_body)|true|none|
|» rate_ids|body|[object]|false|Array of Rate IDs to be modifed on the batch|
|» shipment_ids|body|[object]|false|The Shipment Ids to be modified on the batch|

> Example responses

> 204 Response

```json
""
```

> 400 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 404 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 500 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

<h3 id="remove-from-batch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The request was successful.|[empty_response_body](#schemaempty_response_body)|
|400|Bad Request|The request contained errors.|[error_response_body](#schemaerror_response_body)|
|404|Not Found|The specified resource does not exist.|[error_response_body](#schemaerror_response_body)|
|500|Internal Server Error|An error occurred on ShipEngine's side.<br><br>> This error will automatically be reported to our engineers.<br>|[error_response_body](#schemaerror_response_body)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

<h1 id="shipengine-api-carrieraccounts">carrier_accounts</h1>

carrier accounts


## Connect a carrier account

<a id="opIdconnect_carrier"></a>

> Code samples

```bash
curl https://example.com/v1/connections/carriers/dhl_express \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "API-Key: ${API_KEY}" \
  -d '{
    "nickname": "Stamps.com",
    "password": "string",
    "username": "string"
  }'
```

`POST /v1/connections/carriers/{carrier_name}`

Connect a carrier account

> Body parameter

```json
{
  "nickname": "Stamps.com",
  "password": "string",
  "username": "string"
}
```

<h3 id="connect-a-carrier-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|carrier_name|path|[carrier_name](#schemacarrier_name)|true|The carrier name, such as `stamps_com`, `ups`, `fedex`, or `dhl_express`.|
|body|body|[connect_carrier_request_body](#schemaconnect_carrier_request_body)|true|none|
|» *oneOf*|body|[connect_access_worldwide_request_body](#schemaconnect_access_worldwide_request_body)|false|An Access Worldwide account information request body|
|» *oneOf*|body|[connect_amazon_buy_shipping_request_body](#schemaconnect_amazon_buy_shipping_request_body)|false|An Amazon account information request body|
|» *oneOf*|body|[connect_amazon_shipping_uk](#schemaconnect_amazon_shipping_uk)|false|An Amazon Shipping UK account information request body|
|» *oneOf*|body|[connect_apc_request_body](#schemaconnect_apc_request_body)|false|An APC account information request body|
|» *oneOf*|body|[connect_asendia_request_body](#schemaconnect_asendia_request_body)|false|An Asendia account information request body|
|» *oneOf*|body|[connect_australia_post_request_body](#schemaconnect_australia_post_request_body)|false|An Australia Post account information request body|
|» *oneOf*|body|[connect_canada_post_request_body](#schemaconnect_canada_post_request_body)|false|A Canada Post account information request body|
|» *oneOf*|body|[connect_dhl_ecommerce_request_body](#schemaconnect_dhl_ecommerce_request_body)|false|A DHL Ecommerce account information request body|
|» *oneOf*|body|[connect_dhl_express_request_body](#schemaconnect_dhl_express_request_body)|false|A DHL express account information request body|
|» *oneOf*|body|[connect_dhl_express_au_request_body](#schemaconnect_dhl_express_au_request_body)|false|A DHL Express AU account information request body|
|» *oneOf*|body|[connect_dhl_express_ca_request_body](#schemaconnect_dhl_express_ca_request_body)|false|A DHL Express CA account information request body|
|» *oneOf*|body|[connect_dhl_express_uk_request_body](#schemaconnect_dhl_express_uk_request_body)|false|A DHL Express UK account information request body|
|» *oneOf*|body|[connect_dpd_request_body](#schemaconnect_dpd_request_body)|false|A DPD account information request body|
|» *oneOf*|body|[connect_endicia_request_body](#schemaconnect_endicia_request_body)|false|An Endicia account information request body|
|» *oneOf*|body|[connect_fedex_request_body](#schemaconnect_fedex_request_body)|false|A Fedex account information request body|
|» *oneOf*|body|[connect_fedex_uk_request_body](#schemaconnect_fedex_uk_request_body)|false|A Fedex UK account information request body|
|» *oneOf*|body|[connect_firstmile_request_body](#schemaconnect_firstmile_request_body)|false|A First Mile account information request body|
|» *oneOf*|body|[connect_imex_request_body](#schemaconnect_imex_request_body)|false|An Imex account information request body|
|» *oneOf*|body|[connect_newgistics_request_body](#schemaconnect_newgistics_request_body)|false|A Newgistics account information request body|
|» *oneOf*|body|[connect_ontrac_request_body](#schemaconnect_ontrac_request_body)|false|An Ontrac account information request body|
|» *oneOf*|body|[connect_purolator_request_body](#schemaconnect_purolator_request_body)|false|A Purolator account information request body|
|» *oneOf*|body|[connect_royal_mail_request_body](#schemaconnect_royal_mail_request_body)|false|A Royal Mail account information request body|
|» *oneOf*|body|[connect_rr_donnelley_request_body](#schemaconnect_rr_donnelley_request_body)|false|A RR Donnelley account information request body|
|» *oneOf*|body|[connect_seko_request_body](#schemaconnect_seko_request_body)|false|A SEKO account information request body|
|» *oneOf*|body|[connect_sendle_request_body](#schemaconnect_sendle_request_body)|false|A Sendle account information request body|
|» *oneOf*|body|[connect_stamps_request_body](#schemaconnect_stamps_request_body)|false|A Stamps account information request body|
|» *oneOf*|body|[connect_ups_request_body](#schemaconnect_ups_request_body)|false|A UPS account information request body|

#### Enumerated Values

|Parameter|Value|
|---|---|
|carrier_name|access_worldwide|
|carrier_name|amazon_buy_shipping|
|carrier_name|amazon_shipping_uk|
|carrier_name|apc|
|carrier_name|asendia|
|carrier_name|australia_post|
|carrier_name|canada_post|
|carrier_name|dhl_ecommerce|
|carrier_name|dhl_express|
|carrier_name|dhl_express_au|
|carrier_name|dhl_express_ca|
|carrier_name|dhl_express_uk|
|carrier_name|dpd|
|carrier_name|endicia|
|carrier_name|fedex|
|carrier_name|fedex_uk|
|carrier_name|firstmile|
|carrier_name|imex|
|carrier_name|newgistics|
|carrier_name|ontrac|
|carrier_name|purolator_canada|
|carrier_name|royal_mail|
|carrier_name|rr_donnelley|
|carrier_name|seko|
|carrier_name|sendle|
|carrier_name|stamps_com|
|carrier_name|ups|

> Example responses

> 200 Response

```json
{
  "carrier_id": {}
}
```

> 400 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 404 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 500 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

<h3 id="connect-a-carrier-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request was a success.|[connect_carrier_response_body](#schemaconnect_carrier_response_body)|
|400|Bad Request|The request contained errors.|[error_response_body](#schemaerror_response_body)|
|404|Not Found|The specified resource does not exist.|[error_response_body](#schemaerror_response_body)|
|500|Internal Server Error|An error occurred on ShipEngine's side.<br><br>> This error will automatically be reported to our engineers.<br>|[error_response_body](#schemaerror_response_body)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Disconnect a carrier

<a id="opIddisconnect_carrier"></a>

> Code samples

```bash
curl https://example.com/v1/connections/carriers/dhl_express/se-28529731 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "API-Key: ${API_KEY}"
```

`DELETE /v1/connections/carriers/{carrier_name}/{carrier_id}`

Disconnect a carrier

<h3 id="disconnect-a-carrier-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|carrier_name|path|[carrier_name](#schemacarrier_name)|true|The carrier name, such as `stamps_com`, `ups`, `fedex`, or `dhl_express`.|
|carrier_id|path|[se_id](#schemase_id)|true|Carrier ID|

#### Enumerated Values

|Parameter|Value|
|---|---|
|carrier_name|access_worldwide|
|carrier_name|amazon_buy_shipping|
|carrier_name|amazon_shipping_uk|
|carrier_name|apc|
|carrier_name|asendia|
|carrier_name|australia_post|
|carrier_name|canada_post|
|carrier_name|dhl_ecommerce|
|carrier_name|dhl_express|
|carrier_name|dhl_express_au|
|carrier_name|dhl_express_ca|
|carrier_name|dhl_express_uk|
|carrier_name|dpd|
|carrier_name|endicia|
|carrier_name|fedex|
|carrier_name|fedex_uk|
|carrier_name|firstmile|
|carrier_name|imex|
|carrier_name|newgistics|
|carrier_name|ontrac|
|carrier_name|purolator_canada|
|carrier_name|royal_mail|
|carrier_name|rr_donnelley|
|carrier_name|seko|
|carrier_name|sendle|
|carrier_name|stamps_com|
|carrier_name|ups|

> Example responses

> 204 Response

```json
""
```

> 404 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 500 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

<h3 id="disconnect-a-carrier-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The request was successful.|[empty_response_body](#schemaempty_response_body)|
|404|Not Found|The specified resource does not exist.|[error_response_body](#schemaerror_response_body)|
|500|Internal Server Error|An error occurred on ShipEngine's side.<br><br>> This error will automatically be reported to our engineers.<br>|[error_response_body](#schemaerror_response_body)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Get carrier settings

<a id="opIdget_carrier_settings"></a>

> Code samples

```bash
curl https://example.com/v1/connections/carriers/dhl_express/se-28529731/settings \
  -H 'Accept: application/json' \
  -H "API-Key: ${API_KEY}"
```

`GET /v1/connections/carriers/{carrier_name}/{carrier_id}/settings`

Get carrier settings

<h3 id="get-carrier-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|carrier_name|path|[carrier_name_with_settings](#schemacarrier_name_with_settings)|true|The carrier name, such as `ups`, `fedex`, or `dhl_express`.|
|carrier_id|path|[se_id](#schemase_id)|true|Carrier ID|

#### Enumerated Values

|Parameter|Value|
|---|---|
|carrier_name|dhl_express|
|carrier_name|fedex|
|carrier_name|newgistics|
|carrier_name|ups|

> Example responses

> 200 Response

```json
{
  "is_primary_account": true,
  "nickname": "string",
  "should_hide_account_number_on_archive_doc": true
}
```

> 404 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 500 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

<h3 id="get-carrier-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request was a success.|[get_carrier_settings_response_body](#schemaget_carrier_settings_response_body)|
|404|Not Found|The specified resource does not exist.|[error_response_body](#schemaerror_response_body)|
|500|Internal Server Error|An error occurred on ShipEngine's side.<br><br>> This error will automatically be reported to our engineers.<br>|[error_response_body](#schemaerror_response_body)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Update carrier settings

<a id="opIdupdate_carrier_settings"></a>

> Code samples

```bash
curl https://example.com/v1/connections/carriers/dhl_express/se-28529731/settings \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "API-Key: ${API_KEY}" \
  -d '{
    "is_primary_account": true,
    "nickname": "string",
    "should_hide_account_number_on_archive_doc": true
  }'
```

`PUT /v1/connections/carriers/{carrier_name}/{carrier_id}/settings`

Update carrier settings

> Body parameter

```json
{
  "is_primary_account": true,
  "nickname": "string",
  "should_hide_account_number_on_archive_doc": true
}
```

<h3 id="update-carrier-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|carrier_name|path|[carrier_name_with_settings](#schemacarrier_name_with_settings)|true|The carrier name, such as `ups`, `fedex`, or `dhl_express`.|
|carrier_id|path|[se_id](#schemase_id)|true|Carrier ID|
|body|body|[update_carrier_settings_request_body](#schemaupdate_carrier_settings_request_body)|true|none|
|» *oneOf*|body|[update_dhl_express_settings_request_body](#schemaupdate_dhl_express_settings_request_body)|false|An update dhl express settings request body|
|» *oneOf*|body|[update_fedex_settings_request_body](#schemaupdate_fedex_settings_request_body)|false|An update Fedex settings request body|
|» *oneOf*|body|[update_newgistics_settings_request_body](#schemaupdate_newgistics_settings_request_body)|false|A newgistics account settings request body|
|» *oneOf*|body|[update_ups_settings_request_body](#schemaupdate_ups_settings_request_body)|false|An update UPS settings request body|
|» *oneOf*|body|[update_amazon_buy_shipping_request_body](#schemaupdate_amazon_buy_shipping_request_body)|false|An amazon buy shipping account settings request body|

#### Enumerated Values

|Parameter|Value|
|---|---|
|carrier_name|dhl_express|
|carrier_name|fedex|
|carrier_name|newgistics|
|carrier_name|ups|

> Example responses

> 204 Response

```json
""
```

> 404 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 500 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

<h3 id="update-carrier-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The request was successful.|[empty_response_body](#schemaempty_response_body)|
|404|Not Found|The specified resource does not exist.|[error_response_body](#schemaerror_response_body)|
|500|Internal Server Error|An error occurred on ShipEngine's side.<br><br>> This error will automatically be reported to our engineers.<br>|[error_response_body](#schemaerror_response_body)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

<h1 id="shipengine-api-carriers">carriers</h1>

carriers


## List Carriers

<a id="opIdlist_carriers"></a>

> Code samples

```bash
curl https://example.com/v1/carriers \
  -H 'Accept: application/json' \
  -H "API-Key: ${API_KEY}"
```

`GET /v1/carriers`

List all carriers that have been added to this account

> Example responses

> 200 Response

```json
{
  "carriers": [
    {
      "account_number": "account_570827",
      "balance": 3799.52,
      "carrier_code": {},
      "carrier_id": {},
      "friendly_name": "Stamps.com",
      "has_multi_package_supporting_services": true,
      "nickname": "ShipEngine Account - Stamps.com",
      "options": [
        {
          "default_value": false,
          "description": "string",
          "name": "contains_alcohol"
        }
      ],
      "packages": [
        {
          "description": "Packaging for laptops",
          "dimensions": {
            "height": 0,
            "length": 0,
            "unit": "inch",
            "width": 0
          },
          "name": "laptop_box",
          "package_code": {},
          "package_id": {}
        }
      ],
      "primary": true,
      "requires_funded_amount": true,
      "services": [
        {
          "carrier_code": {},
          "carrier_id": {},
          "domestic": true,
          "international": true,
          "is_multi_package_supported": true,
          "name": "USPS First Class Mail",
          "service_code": "usps_media_mail"
        }
      ],
      "supports_label_messages": true
    }
  ],
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 207 Response

```json
{
  "carriers": [
    {
      "account_number": "account_570827",
      "balance": 3799.52,
      "carrier_code": {},
      "carrier_id": {},
      "friendly_name": "Stamps.com",
      "has_multi_package_supporting_services": true,
      "nickname": "ShipEngine Account - Stamps.com",
      "options": [
        {
          "default_value": false,
          "description": "string",
          "name": "contains_alcohol"
        }
      ],
      "packages": [
        {
          "description": "Packaging for laptops",
          "dimensions": {
            "height": 0,
            "length": 0,
            "unit": "inch",
            "width": 0
          },
          "name": "laptop_box",
          "package_code": {},
          "package_id": {}
        }
      ],
      "primary": true,
      "requires_funded_amount": true,
      "services": [
        {
          "carrier_code": {},
          "carrier_id": {},
          "domestic": true,
          "international": true,
          "is_multi_package_supported": true,
          "name": "USPS First Class Mail",
          "service_code": "usps_media_mail"
        }
      ],
      "supports_label_messages": true
    }
  ],
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 400 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 404 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 500 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

<h3 id="list-carriers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request was a success.|[get_carriers_response_body](#schemaget_carriers_response_body)|
|207|Multi-Status|The request was a partial success. It contains results, as well as errors.|[get_carriers_response_body](#schemaget_carriers_response_body)|
|400|Bad Request|The request contained errors.|[error_response_body](#schemaerror_response_body)|
|404|Not Found|The specified resource does not exist.|[error_response_body](#schemaerror_response_body)|
|500|Internal Server Error|An error occurred on ShipEngine's side.<br><br>> This error will automatically be reported to our engineers.<br>|[error_response_body](#schemaerror_response_body)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Get Carrier By ID

<a id="opIdget_carrier_by_id"></a>

> Code samples

```bash
curl https://example.com/v1/carriers/se-28529731 \
  -H 'Accept: application/json' \
  -H "API-Key: ${API_KEY}"
```

`GET /v1/carriers/{carrier_id}`

Retrive carrier info by ID

<h3 id="get-carrier-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|carrier_id|path|[se_id](#schemase_id)|true|Carrier ID|

> Example responses

> 200 Response

```json
{
  "account_number": "account_570827",
  "balance": 3799.52,
  "carrier_code": {},
  "carrier_id": {},
  "friendly_name": "Stamps.com",
  "has_multi_package_supporting_services": true,
  "nickname": "ShipEngine Account - Stamps.com",
  "options": [
    {
      "default_value": false,
      "description": "string",
      "name": "contains_alcohol"
    }
  ],
  "packages": [
    {
      "description": "Packaging for laptops",
      "dimensions": {
        "height": 0,
        "length": 0,
        "unit": "inch",
        "width": 0
      },
      "name": "laptop_box",
      "package_code": {},
      "package_id": {}
    }
  ],
  "primary": true,
  "requires_funded_amount": true,
  "services": [
    {
      "carrier_code": {},
      "carrier_id": {},
      "domestic": true,
      "international": true,
      "is_multi_package_supported": true,
      "name": "USPS First Class Mail",
      "service_code": "usps_media_mail"
    }
  ],
  "supports_label_messages": true
}
```

> 400 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 404 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 500 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

<h3 id="get-carrier-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request was a success.|[get_carrier_by_id_response_body](#schemaget_carrier_by_id_response_body)|
|400|Bad Request|The request contained errors.|[error_response_body](#schemaerror_response_body)|
|404|Not Found|The specified resource does not exist.|[error_response_body](#schemaerror_response_body)|
|500|Internal Server Error|An error occurred on ShipEngine's side.<br><br>> This error will automatically be reported to our engineers.<br>|[error_response_body](#schemaerror_response_body)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Add Funds To Carrier

<a id="opIdadd_funds_to_carrier"></a>

> Code samples

```bash
curl https://example.com/v1/carriers/se-28529731/add_funds \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "API-Key: ${API_KEY}" \
  -d '{
    "amount": 0,
    "currency": {}
  }'
```

`PUT /v1/carriers/{carrier_id}/add_funds`

Add Funds To A Carrier

> Body parameter

```json
{
  "amount": 0,
  "currency": {}
}
```

<h3 id="add-funds-to-carrier-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|carrier_id|path|[se_id](#schemase_id)|true|Carrier ID|
|body|body|[add_funds_to_carrier_request_body](#schemaadd_funds_to_carrier_request_body)|true|none|
|» amount|body|number(double)|true|The monetary amount, in the specified currency.|
|» currency|body|object|true|none|

> Example responses

> 200 Response

```json
{
  "balance": {
    "amount": 0,
    "currency": {}
  }
}
```

> 400 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 404 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 500 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

<h3 id="add-funds-to-carrier-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request was a success.|[add_funds_to_carrier_response_body](#schemaadd_funds_to_carrier_response_body)|
|400|Bad Request|The request contained errors.|[error_response_body](#schemaerror_response_body)|
|404|Not Found|The specified resource does not exist.|[error_response_body](#schemaerror_response_body)|
|500|Internal Server Error|An error occurred on ShipEngine's side.<br><br>> This error will automatically be reported to our engineers.<br>|[error_response_body](#schemaerror_response_body)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Get Carrier Options

<a id="opIdget_carrier_options"></a>

> Code samples

```bash
curl https://example.com/v1/carriers/se-28529731/options \
  -H 'Accept: application/json' \
  -H "API-Key: ${API_KEY}"
```

`GET /v1/carriers/{carrier_id}/options`

Get a list of the options available for the carrier

<h3 id="get-carrier-options-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|carrier_id|path|[se_id](#schemase_id)|true|Carrier ID|

> Example responses

> 200 Response

```json
{
  "options": [
    {
      "default_value": false,
      "description": "string",
      "name": "contains_alcohol"
    }
  ]
}
```

> 400 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 404 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 500 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

<h3 id="get-carrier-options-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request was a success.|[get_carrier_options_response_body](#schemaget_carrier_options_response_body)|
|400|Bad Request|The request contained errors.|[error_response_body](#schemaerror_response_body)|
|404|Not Found|The specified resource does not exist.|[error_response_body](#schemaerror_response_body)|
|500|Internal Server Error|An error occurred on ShipEngine's side.<br><br>> This error will automatically be reported to our engineers.<br>|[error_response_body](#schemaerror_response_body)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## List Carrier Package Types

<a id="opIdlist_carrier_package_types"></a>

> Code samples

```bash
curl https://example.com/v1/carriers/se-28529731/packages \
  -H 'Accept: application/json' \
  -H "API-Key: ${API_KEY}"
```

`GET /v1/carriers/{carrier_id}/packages`

List the package types associated with the carrier

<h3 id="list-carrier-package-types-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|carrier_id|path|[se_id](#schemase_id)|true|Carrier ID|

> Example responses

> 200 Response

```json
{
  "packages": [
    {
      "description": "Packaging for laptops",
      "dimensions": {
        "height": 0,
        "length": 0,
        "unit": "inch",
        "width": 0
      },
      "name": "laptop_box",
      "package_code": {},
      "package_id": {}
    }
  ]
}
```

> 400 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 404 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 500 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

<h3 id="list-carrier-package-types-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request was a success.|[list_carrier_package_types_response_body](#schemalist_carrier_package_types_response_body)|
|400|Bad Request|The request contained errors.|[error_response_body](#schemaerror_response_body)|
|404|Not Found|The specified resource does not exist.|[error_response_body](#schemaerror_response_body)|
|500|Internal Server Error|An error occurred on ShipEngine's side.<br><br>> This error will automatically be reported to our engineers.<br>|[error_response_body](#schemaerror_response_body)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## List Carrier Services

<a id="opIdlist_carrier_services"></a>

> Code samples

```bash
curl https://example.com/v1/carriers/se-28529731/services \
  -H 'Accept: application/json' \
  -H "API-Key: ${API_KEY}"
```

`GET /v1/carriers/{carrier_id}/services`

List the services associated with the carrier ID

<h3 id="list-carrier-services-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|carrier_id|path|[se_id](#schemase_id)|true|Carrier ID|

> Example responses

> 200 Response

```json
{
  "services": [
    {
      "carrier_code": {},
      "carrier_id": {},
      "domestic": true,
      "international": true,
      "is_multi_package_supported": true,
      "name": "USPS First Class Mail",
      "service_code": "usps_media_mail"
    }
  ]
}
```

> 400 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 404 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 500 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

<h3 id="list-carrier-services-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request was a success.|[list_carrier_services_response_body](#schemalist_carrier_services_response_body)|
|400|Bad Request|The request contained errors.|[error_response_body](#schemaerror_response_body)|
|404|Not Found|The specified resource does not exist.|[error_response_body](#schemaerror_response_body)|
|500|Internal Server Error|An error occurred on ShipEngine's side.<br><br>> This error will automatically be reported to our engineers.<br>|[error_response_body](#schemaerror_response_body)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

<h1 id="shipengine-api-downloads">downloads</h1>

downloads


## Download File

<a id="opIddownload_file"></a>

> Code samples

```bash
curl https://example.com/v1/downloads/string/string/string \
  -H 'Accept: application/json' \
  -H "API-Key: ${API_KEY}"
```

`GET /v1/downloads/{dir}/{subdir}/{filename}`

Get File

<h3 id="download-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|download|query|string|false|none|
|rotation|query|integer(int32)|false|none|
|subdir|path|string|true|none|
|filename|path|string|true|none|
|dir|path|string|true|none|

> Example responses

> 400 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 404 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 500 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

<h3 id="download-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request was a success|[download_file_pdf_response_body](#schemadownload_file_pdf_response_body)|
|400|Bad Request|The request contained errors.|[error_response_body](#schemaerror_response_body)|
|404|Not Found|The specified resource does not exist.|[error_response_body](#schemaerror_response_body)|
|500|Internal Server Error|An error occurred on ShipEngine's side.<br><br>> This error will automatically be reported to our engineers.<br>|[error_response_body](#schemaerror_response_body)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

<h1 id="shipengine-api-insurance">insurance</h1>

insurance


## Connect a Shipsurance Account

<a id="opIdconnect_insurer"></a>

> Code samples

```bash
curl https://example.com/v1/connections/insurance/shipsurance \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "API-Key: ${API_KEY}" \
  -d '{
    "email": {},
    "policy_id": "string"
  }'
```

`POST /v1/connections/insurance/shipsurance`

Connect a Shipsurance Account

> Body parameter

```json
{
  "email": {},
  "policy_id": "string"
}
```

<h3 id="connect-a-shipsurance-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[connect_insurer_request_body](#schemaconnect_insurer_request_body)|true|none|
|» email|body|object|true|none|
|» policy_id|body|string|true|none|

> Example responses

> 200 Response

```json
{}
```

> 400 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 500 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

<h3 id="connect-a-shipsurance-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request was a success|[connect_insurer_response_body](#schemaconnect_insurer_response_body)|
|400|Bad Request|The request contained errors.|[error_response_body](#schemaerror_response_body)|
|500|Internal Server Error|An error occurred on ShipEngine's side.<br><br>> This error will automatically be reported to our engineers.<br>|[error_response_body](#schemaerror_response_body)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Disconnect a Shipsurance Account

<a id="opIddisconnect_insurer"></a>

> Code samples

```bash
curl https://example.com/v1/connections/insurance/shipsurance \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "API-Key: ${API_KEY}"
```

`DELETE /v1/connections/insurance/shipsurance`

Disconnect a Shipsurance Account

> Example responses

> 200 Response

```json
{}
```

> 400 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 500 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

<h3 id="disconnect-a-shipsurance-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request was a success|[disconnect_insurer_response_body](#schemadisconnect_insurer_response_body)|
|400|Bad Request|The request contained errors.|[error_response_body](#schemaerror_response_body)|
|500|Internal Server Error|An error occurred on ShipEngine's side.<br><br>> This error will automatically be reported to our engineers.<br>|[error_response_body](#schemaerror_response_body)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Add Funds To Insurance

<a id="opIdadd_funds_to_insurance"></a>

> Code samples

```bash
curl https://example.com/v1/insurance/shipsurance/add_funds \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "API-Key: ${API_KEY}" \
  -d '{
    "amount": 0,
    "currency": {}
  }'
```

`PATCH /v1/insurance/shipsurance/add_funds`

You may need to auto fund your account from time to time. For example, if you don't normally ship items over $100,
and may want to add funds to insurance rather than keeping the account funded.


> Body parameter

```json
{
  "amount": 0,
  "currency": {}
}
```

<h3 id="add-funds-to-insurance-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[add_funds_to_insurance_request_body](#schemaadd_funds_to_insurance_request_body)|true|none|
|» amount|body|number(double)|true|The monetary amount, in the specified currency.|
|» currency|body|object|true|none|

> Example responses

> 200 Response

```json
{
  "amount": 0,
  "currency": {}
}
```

> 400 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 500 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

<h3 id="add-funds-to-insurance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request was a success.|[add_funds_to_insurance_response_body](#schemaadd_funds_to_insurance_response_body)|
|400|Bad Request|The request contained errors.|[error_response_body](#schemaerror_response_body)|
|500|Internal Server Error|An error occurred on ShipEngine's side.<br><br>> This error will automatically be reported to our engineers.<br>|[error_response_body](#schemaerror_response_body)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Get Insurance Funds Balance

<a id="opIdget_insurance_balance"></a>

> Code samples

```bash
curl https://example.com/v1/insurance/shipsurance/balance \
  -H 'Accept: application/json' \
  -H "API-Key: ${API_KEY}"
```

`GET /v1/insurance/shipsurance/balance`

Retrieve the balance of your Shipsurance account.

> Example responses

> 200 Response

```json
{
  "amount": 0,
  "currency": {}
}
```

> 400 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 500 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

<h3 id="get-insurance-funds-balance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request was a success.|[get_insurance_balance_response_body](#schemaget_insurance_balance_response_body)|
|400|Bad Request|The request contained errors.|[error_response_body](#schemaerror_response_body)|
|500|Internal Server Error|An error occurred on ShipEngine's side.<br><br>> This error will automatically be reported to our engineers.<br>|[error_response_body](#schemaerror_response_body)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

<h1 id="shipengine-api-labels">labels</h1>

Print shipping labels for any of the top global carriers in minutes—instead of weeks. Simply [connect your existing carrier accounts](https://www.shipengine.com/docs/carriers/setup/) in the API dashboard, and then [begin creating labels](https://www.shipengine.com/docs/shipping/use-a-carrier-service/).


<a href="https://www.shipengine.com/docs/labels/create-a-label/">Follow this quick start guide to create your first shipping label with ShipEngine</a>

## List labels

<a id="opIdlist_labels"></a>

> Code samples

```bash
curl https://example.com/v1/labels \
  -H 'Accept: application/json' \
  -H "API-Key: ${API_KEY}"
```

`GET /v1/labels`

This endpoint returns a list of labels that you've [created](https://www.shipengine.com/docs/labels/create-a-label/). You can optionally filter the results as well as control their sort order and the number of results returned at a time.

By default, all labels are returned, 25 at a time, starting with the most recently created ones.  You can combine multiple filter options to narrow-down the results.  For example, if you only want to get your UPS labels for your east coast warehouse you could query by both `warehouse_id` and `carrier_id`


<h3 id="list-labels-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|label_status|query|[label_status](#schemalabel_status)|false|Only return labels that are currently in the specified status|
|service_code|query|[service_code](#schemaservice_code)|false|Only return labels for a specific [carrier service](https://www.shipengine.com/docs/shipping/use-a-carrier-service/)|
|carrier_id|query|[se_id](#schemase_id)|false|Only return labels for a specific [carrier account](https://www.shipengine.com/docs/carriers/setup/)|
|tracking_number|query|string|false|Only return labels with a specific tracking number|
|batch_id|query|[se_id](#schemase_id)|false|Only return labels that were created in a specific [batch](https://www.shipengine.com/docs/labels/bulk/)|
|rate_id|query|[se_id](#schemase_id)|false|Rate ID|
|shipment_id|query|[se_id](#schemase_id)|false|Shipment ID|
|warehouse_id|query|[se_id](#schemase_id)|false|Only return labels that originate from a specific [warehouse](https://www.shipengine.com/docs/shipping/ship-from-a-warehouse/)|
|created_at_start|query|string(date-time)|false|Only return labels that were created on or after a specific date/time|
|created_at_end|query|string(date-time)|false|Only return labels that were created on or before a specific date/time|
|page|query|integer(int32)|false|Return a specific page of results. Defaults to the first page. If set to a number that's greater than the number of pages of results, an empty page is returned.<br>|
|page_size|query|integer(int32)|false|The number of results to return per response.|
|sort_dir|query|object|false|Controls the sort order of the query.|
|sort_by|query|string|false|Controls which field the query is sorted by.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|label_status|processing|
|label_status|completed|
|label_status|error|
|label_status|voided|
|sort_by|modified_at|
|sort_by|created_at|

> Example responses

> 200 Response

```json
{
  "links": {
    "first": {
      "href": {},
      "type": "string"
    },
    "last": {
      "href": {},
      "type": "string"
    },
    "next": {
      "href": {},
      "type": "string"
    },
    "prev": {
      "href": {},
      "type": "string"
    }
  },
  "page": 1,
  "pages": 4,
  "total": 2750,
  "labels": [
    {
      "alternative_identifiers": [
        {
          "type": "last_mile_tracking_number",
          "value": "12345678912345678912"
        }
      ],
      "batch_id": {},
      "carrier_code": {},
      "carrier_id": {},
      "charge_event": {},
      "created_at": {},
      "display_scheme": "label",
      "form_download": {
        "href": {},
        "type": "string"
      },
      "insurance_claim": {
        "href": {},
        "type": "string"
      },
      "insurance_cost": {
        "amount": 0,
        "currency": {}
      },
      "is_international": true,
      "is_return_label": true,
      "label_download": {
        "href": {},
        "pdf": {},
        "png": {},
        "zpl": {}
      },
      "label_format": "pdf",
      "label_id": {},
      "label_image_id": {},
      "label_layout": "4x6",
      "package_code": {},
      "packages": [
        {
          "content_description": "Hand knitted wool socks",
          "dimensions": {
            "height": 0,
            "length": 0,
            "unit": "inch",
            "width": 0
          },
          "external_package_id": "string",
          "form_download": {
            "href": {},
            "type": "string"
          },
          "insured_value": [
            {
              "amount": 0,
              "currency": "usd"
            }
          ],
          "label_download": {
            "href": {},
            "pdf": {},
            "png": {},
            "zpl": {}
          },
          "label_messages": {
            "reference1": null,
            "reference2": null,
            "reference3": null
          },
          "package_code": {},
          "package_id": {},
          "sequence": 0,
          "tracking_number": {},
          "weight": {
            "unit": {},
            "value": 0.1
          }
        }
      ],
      "rma_number": "string",
      "service_code": {},
      "ship_date": {},
      "shipment_cost": {
        "amount": 0,
        "currency": {}
      },
      "shipment_id": {},
      "status": {},
      "trackable": true,
      "tracking_number": "782758401696",
      "tracking_status": {},
      "voided": true,
      "voided_at": {}
    }
  ]
}
```

> 400 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 500 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

<h3 id="list-labels-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The response includes a `labels` array containing a page of results (as determined by the `page_size` query parameter).  It also includes other useful information, such as the total number of labels that match the query criteria, the number of pages of results, and the URLs of the first, last, next, and previous pages of results.<br>|[list_labels_response_body](#schemalist_labels_response_body)|
|400|Bad Request|The request contained errors.|[error_response_body](#schemaerror_response_body)|
|500|Internal Server Error|An error occurred on ShipEngine's side.<br><br>> This error will automatically be reported to our engineers.<br>|[error_response_body](#schemaerror_response_body)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Purchase Label

<a id="opIdcreate_label"></a>

> Code samples

```bash
curl https://example.com/v1/labels \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "API-Key: ${API_KEY}" \
  -d '{
    "charge_event": {},
    "display_scheme": "label",
    "is_return_label": true,
    "label_download_type": "url",
    "label_format": "pdf",
    "label_image_id": {},
    "label_layout": "4x6",
    "outbound_label_id": {},
    "rma_number": "string",
    "shipment": {
      "advanced_options": {
        "bill_to_account": null,
        "bill_to_country_code": null,
        "bill_to_party": null,
        "bill_to_postal_code": null,
        "collect_on_delivery": {
          "payment_amount": {
            "amount": 0,
            "currency": {}
          },
          "payment_type": {}
        },
        "contains_alcohol": false,
        "custom_field1": null,
        "custom_field2": null,
        "custom_field3": null,
        "delivered_duty_paid": false,
        "dry_ice": false,
        "dry_ice_weight": {
          "unit": {},
          "value": 0.1
        },
        "fedex_freight": {
          "booking_confirmation": "string",
          "shipper_load_and_count": "string"
        },
        "freight_class": 77.5,
        "non_machinable": false,
        "origin_type": null,
        "saturday_delivery": false,
        "shipper_release": null,
        "third_party_consignee": false,
        "use_ups_ground_freight_pricing": null
      },
      "carrier_id": {},
      "confirmation": "none",
      "customs": null,
      "external_order_id": "string",
      "external_shipment_id": "string",
      "insurance_provider": "none",
      "items": [],
      "order_source_code": {},
      "origin_type": {},
      "packages": [
        {
          "content_description": "Hand knitted wool socks",
          "dimensions": {
            "height": 0,
            "length": 0,
            "unit": "inch",
            "width": 0
          },
          "external_package_id": "string",
          "insured_value": [
            {
              "amount": 0,
              "currency": "usd"
            }
          ],
          "label_messages": {
            "reference1": null,
            "reference2": null,
            "reference3": null
          },
          "package_code": {},
          "package_id": {},
          "weight": {
            "unit": {},
            "value": 0.1
          }
        }
      ],
      "return_to": {
        "address_line1": "1999 Bishop Grandin Blvd.",
        "address_line2": "Unit 408",
        "address_line3": "Building #7",
        "address_residential_indicator": "no",
        "city_locality": "Winnipeg",
        "company_name": "The Home Depot",
        "country_code": {},
        "email": "example@example.com",
        "name": "John Doe",
        "phone": "+1 204-253-9411 ext. 123",
        "postal_code": {},
        "state_province": "Manitoba",
        "instructions": "string"
      },
      "service_code": {},
      "ship_date": {},
      "ship_from": {
        "address_line1": "1999 Bishop Grandin Blvd.",
        "address_line2": "Unit 408",
        "address_line3": "Building #7",
        "address_residential_indicator": "no",
        "city_locality": "Winnipeg",
        "company_name": "The Home Depot",
        "country_code": {},
        "email": "example@example.com",
        "name": "John Doe",
        "phone": "+1 204-253-9411 ext. 123",
        "postal_code": {},
        "state_province": "Manitoba",
        "instructions": "string"
      },
      "ship_to": {
        "address_line1": "1999 Bishop Grandin Blvd.",
        "address_line2": "Unit 408",
        "address_line3": "Building #7",
        "address_residential_indicator": "no",
        "city_locality": "Winnipeg",
        "company_name": "The Home Depot",
        "country_code": {},
        "email": "example@example.com",
        "name": "John Doe",
        "phone": "+1 204-253-9411 ext. 123",
        "postal_code": {},
        "state_province": "Manitoba",
        "instructions": "string"
      },
      "shipment_number": "string",
      "tax_identifiers": [
        {
          "identifier_type": {},
          "issuing_authority": "string",
          "taxable_entity_type": {},
          "value": "string"
        }
      ],
      "warehouse_id": null
    },
    "test_label": false,
    "validate_address": "validate_and_clean",
    "ship_from_service_point_id": "614940",
    "ship_to_service_point_id": "614940"
  }'
```

`POST /v1/labels`

Purchase and print a label for shipment

> Body parameter

```json
{
  "charge_event": {},
  "display_scheme": "label",
  "is_return_label": true,
  "label_download_type": "url",
  "label_format": "pdf",
  "label_image_id": {},
  "label_layout": "4x6",
  "outbound_label_id": {},
  "rma_number": "string",
  "shipment": {
    "advanced_options": {
      "bill_to_account": null,
      "bill_to_country_code": null,
      "bill_to_party": null,
      "bill_to_postal_code": null,
      "collect_on_delivery": {
        "payment_amount": {
          "amount": 0,
          "currency": {}
        },
        "payment_type": {}
      },
      "contains_alcohol": false,
      "custom_field1": null,
      "custom_field2": null,
      "custom_field3": null,
      "delivered_duty_paid": false,
      "dry_ice": false,
      "dry_ice_weight": {
        "unit": {},
        "value": 0.1
      },
      "fedex_freight": {
        "booking_confirmation": "string",
        "shipper_load_and_count": "string"
      },
      "freight_class": 77.5,
      "non_machinable": false,
      "origin_type": null,
      "saturday_delivery": false,
      "shipper_release": null,
      "third_party_consignee": false,
      "use_ups_ground_freight_pricing": null
    },
    "carrier_id": {},
    "confirmation": "none",
    "customs": null,
    "external_order_id": "string",
    "external_shipment_id": "string",
    "insurance_provider": "none",
    "items": [],
    "order_source_code": {},
    "origin_type": {},
    "packages": [
      {
        "content_description": "Hand knitted wool socks",
        "dimensions": {
          "height": 0,
          "length": 0,
          "unit": "inch",
          "width": 0
        },
        "external_package_id": "string",
        "insured_value": [
          {
            "amount": 0,
            "currency": "usd"
          }
        ],
        "label_messages": {
          "reference1": null,
          "reference2": null,
          "reference3": null
        },
        "package_code": {},
        "package_id": {},
        "weight": {
          "unit": {},
          "value": 0.1
        }
      }
    ],
    "return_to": {
      "address_line1": "1999 Bishop Grandin Blvd.",
      "address_line2": "Unit 408",
      "address_line3": "Building #7",
      "address_residential_indicator": "no",
      "city_locality": "Winnipeg",
      "company_name": "The Home Depot",
      "country_code": {},
      "email": "example@example.com",
      "name": "John Doe",
      "phone": "+1 204-253-9411 ext. 123",
      "postal_code": {},
      "state_province": "Manitoba",
      "instructions": "string"
    },
    "service_code": {},
    "ship_date": {},
    "ship_from": {
      "address_line1": "1999 Bishop Grandin Blvd.",
      "address_line2": "Unit 408",
      "address_line3": "Building #7",
      "address_residential_indicator": "no",
      "city_locality": "Winnipeg",
      "company_name": "The Home Depot",
      "country_code": {},
      "email": "example@example.com",
      "name": "John Doe",
      "phone": "+1 204-253-9411 ext. 123",
      "postal_code": {},
      "state_province": "Manitoba",
      "instructions": "string"
    },
    "ship_to": {
      "address_line1": "1999 Bishop Grandin Blvd.",
      "address_line2": "Unit 408",
      "address_line3": "Building #7",
      "address_residential_indicator": "no",
      "city_locality": "Winnipeg",
      "company_name": "The Home Depot",
      "country_code": {},
      "email": "example@example.com",
      "name": "John Doe",
      "phone": "+1 204-253-9411 ext. 123",
      "postal_code": {},
      "state_province": "Manitoba",
      "instructions": "string"
    },
    "shipment_number": "string",
    "tax_identifiers": [
      {
        "identifier_type": {},
        "issuing_authority": "string",
        "taxable_entity_type": {},
        "value": "string"
      }
    ],
    "warehouse_id": null
  },
  "test_label": false,
  "validate_address": "validate_and_clean",
  "ship_from_service_point_id": "614940",
  "ship_to_service_point_id": "614940"
}
```

<h3 id="purchase-label-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[create_label_request_body](#schemacreate_label_request_body)|true|none|
|» charge_event|body|object|false|The label charge event.<br>|
|» display_scheme|body|object|false|The display format that the label should be shown in.|
|» is_return_label|body|boolean|false|Indicates whether this is a return label.  You may also want to set the `rma_number` so you know what is being returned.<br>|
|» label_download_type|body|object|false|none|
|» label_format|body|object|false|The file format that you want the label to be in.  We recommend `pdf` format because it is supported by all carriers, whereas some carriers do not support the `png` or `zpl` formats.<br>|
|» label_image_id|body|object \| null|false|The label image resource that was used to create a custom label image.|
|» label_layout|body|object|false|The layout (size) that you want the label to be in.  The `label_format` determines which sizes are allowed.  `4x6` is supported for all label formats, whereas `letter` (8.5" x 11") is only supported for `pdf` format.<br>|
|» outbound_label_id|body|object|false|The `label_id` of the original (outgoing) label that the return label is for. This associates the two labels together, which is<br>required by some carriers.<br>|
|» rma_number|body|string \| null|false|An optional Return Merchandise Authorization number.  This field is useful for return labels.  You can set it to any string value.<br>|
|» shipment|body|object|true|The shipment information used to generate the label|
|» » advanced_options|body|object|true|Advanced shipment options.  These are entirely optional.|
|» » » bill_to_account|body|string \| null|false|This field is used to [bill shipping costs to a third party](https://www.shipengine.com/docs/shipping/bill-to-third-party/).  This field must be used in conjunction with the `bill_to_country_code`, `bill_to_party`, and `bill_to_postal_code` fields.<br>|
|» » » bill_to_country_code|body|object \| null|false|The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1) of the third-party that is responsible for shipping costs.<br>|
|» » » bill_to_party|body|object \| null|false|Indicates whether to bill shipping costs to the recipient or to a third-party.  When billing to a third-party, the `bill_to_account`, `bill_to_country_code`, and `bill_to_postal_code` fields must also be set.<br>|
|» » » bill_to_postal_code|body|string \| null|false|The postal code of the third-party that is responsible for shipping costs.<br>|
|» » » collect_on_delivery|body|[collect_on_delivery](#schemacollect_on_delivery)|false|Defer payment until package is delivered, instead of when it is ordered.|
|» » » contains_alcohol|body|boolean|false|Indicates that the shipment contains alcohol.|
|» » » custom_field1|body|string \| null|false|An arbitrary field that can be used to store information about the shipment.<br>|
|» » » custom_field2|body|string \| null|false|An arbitrary field that can be used to store information about the shipment.<br>|
|» » » custom_field3|body|string \| null|false|An arbitrary field that can be used to store information about the shipment.<br>|
|» » » delivered_duty_paid|body|boolean|false|Indicates that the shipper is paying the international delivery duties for this shipment.  This option is supported by UPS, FedEx, and DHL Express.<br>|
|» » » dry_ice|body|boolean|false|Indicates if the shipment contain dry ice|
|» » » dry_ice_weight|body|object \| null|false|The weight of the dry ice in the shipment|
|» » » » unit|body|object|true|none|
|» » » » value|body|number(double)|true|The weight, in the specified unit|
|» » » fedex_freight|body|object|false|Provide details for the Fedex freight service|
|» » » » booking_confirmation|body|string|false|none|
|» » » » shipper_load_and_count|body|string|false|none|
|» » » freight_class|body|string \| null|false|The National Motor Freight Traffic Association [freight class](http://www.nmfta.org/pages/nmfc?AspxAutoDetectCookieSupport=1), such as "77.5", "110", or "250".<br>|
|» » » non_machinable|body|boolean|false|Indicates that the package cannot be processed automatically because it is too large or irregularly shaped. This is primarily for USPS shipments.  See [Section 1.2 of the USPS parcel standards](https://pe.usps.com/text/dmm300/101.htm#ep1047495) for details.<br>|
|» » » origin_type|body|object \| null|false|none|
|» » » saturday_delivery|body|boolean|false|Enables Saturday delivery, if supported by the carrier.|
|» » » shipper_release|body|boolean \| null|false|none|
|» » » third_party_consignee|body|boolean|false|Third Party Consignee option is a value-added service that allows the shipper to supply goods without commercial invoices being attached|
|» » » use_ups_ground_freight_pricing|body|boolean \| null|false|Whether to use [UPS Ground Freight pricing](https://www.shipengine.com/docs/shipping/ups-ground-freight/).  If enabled, then a `freight_class` must also be specified.<br>|
|» » carrier_id|body|object|true|The carrier account that is billed for the shipping charges|
|» » confirmation|body|object|true|The type of delivery confirmation that is required for this shipment.|
|» » customs|body|object \| null|true|Customs information.  This is usually only needed for international shipments.<br>|
|» » » contents|body|object|true|The type of contents in this shipment.  This may impact import duties or customs treatment.|
|» » » customs_items|body|[[customs_item](#schemacustoms_item)]|false|Customs declarations for each item in the shipment.|
|» » » non_delivery|body|object|true|Indicates what to do if a package is unable to be delivered.|
|» » external_order_id|body|string \| null|false|ID that the Order Source assigned|
|» » external_shipment_id|body|string \| null|false|A unique user-defined key to identify a shipment.  This can be used to retrieve the shipment.<br><br>> **Warning:** The `external_shipment_id` is limited to 50 characters. Any additional characters will be truncated.<br>|
|» » insurance_provider|body|object|true|The insurance provider to use for any insured packages in the shipment.<br>|
|» » items|body|[object]|false|Describe the packages included in this shipment as related to potential metadata that was imported from<br>external order sources<br>|
|» » » asin|body|string \| null|false|Amazon Standard Identification Number|
|» » » external_order_id|body|string \| null|false|external order id|
|» » » external_order_item_id|body|string \| null|false|external order item id|
|» » » name|body|string|false|item name|
|» » » order_source_code|body|object|false|none|
|» » » quantity|body|integer(int32)|false|The quantity of this item included in the shipment|
|» » » sales_order_id|body|string \| null|false|sales order id|
|» » » sales_order_item_id|body|string \| null|false|sales order item id|
|» » » sku|body|string \| null|false|Item Stock Keeping Unit|
|» » order_source_code|body|object|false|none|
|» » origin_type|body|object \| null|false|Indicates if the package will be picked up or dropped off by the carrier|
|» » packages|body|[object]|true|The packages in the shipment.<br><br>> **Note:** Some carriers only allow one package per shipment.  If you attempt to create a multi-package shipment for a carrier that doesn't allow it, an error will be returned.<br>|
|» » » content_description|body|string \| null|false|A short description of the package content. Required for shipments moving to, from, and through Mexico.<br>|
|» » » dimensions|body|object|false|The package dimensions|
|» » » » height|body|number(double)|true|The length of the package, in the specified unit|
|» » » » length|body|number(double)|true|The length of the package, in the specified unit|
|» » » » unit|body|object|true|none|
|» » » » width|body|number(double)|true|The width of the package, in the specified unit|
|» » » external_package_id|body|string|false|An external package id.|
|» » » insured_value|body|object|false|The insured value of the package.  Requires the `insurance_provider` field of the shipment to be set.<br>|
|» » » » amount|body|number(double)|true|The monetary amount, in the specified currency.|
|» » » » currency|body|object|true|none|
|» » » label_messages|body|object|false|none|
|» » » » reference1|body|string \| null|true|The first line of the custom label message.  Some carriers may prefix this line with something like "REF", "Reference", "Trx Ref No.", etc.<br>|
|» » » » reference2|body|string \| null|true|The second line of the custom label message.  Some carriers may prefix this line with something like "INV", "Reference 2", "Trx Ref No.", etc.<br>|
|» » » » reference3|body|string \| null|true|The third line of the custom label message.  Some carriers may prefix this line with something like "PO", "Reference 3", etc.<br>|
|» » » package_code|body|object|false|The [package type](https://www.shipengine.com/docs/reference/list-carrier-packages/), such as `thick_envelope`, `small_flat_rate_box`, `large_package`, etc.  The code `package` indicates a custom or unknown package type.<br>|
|» » » package_id|body|object|false|A string that uniquely identifies this [package type](https://www.shipengine.com/docs/reference/list-carrier-packages/)|
|» » » weight|body|object|true|The package weight|
|» » » » unit|body|object|true|none|
|» » » » value|body|number(double)|true|The weight, in the specified unit|
|» » return_to|body|object|true|The return address for this shipment.  Defaults to the `ship_from` address.<br>|
|» » » address_line1|body|string|true|The first line of the street address.  For some addresses, this may be the only line.  Other addresses may require 2 or 3 lines.<br>|
|» » » address_line2|body|string \| null|false|The second line of the street address.  For some addresses, this line may not be needed.<br>|
|» » » address_line3|body|string \| null|false|The third line of the street address.  For some addresses, this line may not be needed.<br>|
|» » » address_residential_indicator|body|object|true|Indicates whether this is a residential address.|
|» » » city_locality|body|string|true|The name of the city or locality|
|» » » company_name|body|string \| null|false|If this is a business address, then the company name should be specified here.<br>|
|» » » country_code|body|object|true|The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)<br>|
|» » » email|body|string \| null|false|Email for the address owner.<br>|
|» » » name|body|string|true|The name of a contact person at this address.  This field may be set instead of - or in addition to - the `company_name` field.<br>|
|» » » phone|body|string|true|The phone number of a contact person at this address.  The format of this phone number varies depending on the country.<br>|
|» » » postal_code|body|object|true|none|
|» » » state_province|body|string|true|The state or province.  For some countries (including the U.S.) only abbreviations are allowed.  Other countries allow the full name or abbreviation.<br>|
|» » » instructions|body|string \| null|false|Additional text about how to handle the shipment at this address.<br>|
|» » service_code|body|object|true|The [carrier service](https://www.shipengine.com/docs/shipping/use-a-carrier-service/) used to ship the package, such as `fedex_ground`, `usps_first_class_mail`, `flat_rate_envelope`, etc.<br>|
|» » ship_date|body|object|true|The date that the shipment was (or will be) shippped.  ShipEngine will take the day of week into consideration. For example, if the carrier does not operate on Sundays, then a package that would have shipped on Sunday will ship on Monday instead.<br>|
|» » ship_from|body|object|true|The shipment's origin address. If you frequently ship from the same location, consider [creating a warehouse](https://www.shipengine.com/docs/reference/create-warehouse/).  Then you can simply specify the `warehouse_id` rather than the complete address each time.<br>|
|» » » address_line1|body|string|true|The first line of the street address.  For some addresses, this may be the only line.  Other addresses may require 2 or 3 lines.<br>|
|» » » address_line2|body|string \| null|false|The second line of the street address.  For some addresses, this line may not be needed.<br>|
|» » » address_line3|body|string \| null|false|The third line of the street address.  For some addresses, this line may not be needed.<br>|
|» » » address_residential_indicator|body|object|true|Indicates whether this is a residential address.|
|» » » city_locality|body|string|true|The name of the city or locality|
|» » » company_name|body|string \| null|false|If this is a business address, then the company name should be specified here.<br>|
|» » » country_code|body|object|true|The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)<br>|
|» » » email|body|string \| null|false|Email for the address owner.<br>|
|» » » name|body|string|true|The name of a contact person at this address.  This field may be set instead of - or in addition to - the `company_name` field.<br>|
|» » » phone|body|string|true|The phone number of a contact person at this address.  The format of this phone number varies depending on the country.<br>|
|» » » postal_code|body|object|true|none|
|» » » state_province|body|string|true|The state or province.  For some countries (including the U.S.) only abbreviations are allowed.  Other countries allow the full name or abbreviation.<br>|
|» » » instructions|body|string \| null|false|Additional text about how to handle the shipment at this address.<br>|
|» » ship_to|body|object|true|The recipient's mailing address|
|» » » address_line1|body|string|true|The first line of the street address.  For some addresses, this may be the only line.  Other addresses may require 2 or 3 lines.<br>|
|» » » address_line2|body|string \| null|false|The second line of the street address.  For some addresses, this line may not be needed.<br>|
|» » » address_line3|body|string \| null|false|The third line of the street address.  For some addresses, this line may not be needed.<br>|
|» » » address_residential_indicator|body|object|true|Indicates whether this is a residential address.|
|» » » city_locality|body|string|true|The name of the city or locality|
|» » » company_name|body|string \| null|false|If this is a business address, then the company name should be specified here.<br>|
|» » » country_code|body|object|true|The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)<br>|
|» » » email|body|string \| null|false|Email for the address owner.<br>|
|» » » name|body|string|true|The name of a contact person at this address.  This field may be set instead of - or in addition to - the `company_name` field.<br>|
|» » » phone|body|string|true|The phone number of a contact person at this address.  The format of this phone number varies depending on the country.<br>|
|» » » postal_code|body|object|true|none|
|» » » state_province|body|string|true|The state or province.  For some countries (including the U.S.) only abbreviations are allowed.  Other countries allow the full name or abbreviation.<br>|
|» » » instructions|body|string \| null|false|Additional text about how to handle the shipment at this address.<br>|
|» » shipment_number|body|string \| null|false|A non-unique user-defined number used to identify a shipment.  If undefined, this will match the external_shipment_id of the shipment.<br><br>> **Warning:** The `shipment_number` is limited to 50 characters. Any additional characters will be truncated.<br>|
|» » tax_identifiers|body|[object]|false|none|
|» » » identifier_type|body|object|true|none|
|» » » issuing_authority|body|string|true|The authority that issued this tax. This must be a valid 2 character ISO 3166 Alpha 2 country code.|
|» » » taxable_entity_type|body|object|true|none|
|» » » value|body|string|true|The value of the identifier|
|» » warehouse_id|body|object \| null|true|The [warehouse](https://www.shipengine.com/docs/shipping/ship-from-a-warehouse/) that the shipment is being shipped from.  Either `warehouse_id` or `ship_from` must be specified.<br>|
|» test_label|body|boolean|false|**Deprecated.** Indicate if this label is being used only for testing purposes. If true, then no charge will be added to your account.|
|» validate_address|body|object|false|none|
|» ship_from_service_point_id|body|string \| null|false|A unique identifier for a carrier drop off point where a merchant plans to deliver packages. This will take precedence over a shipment's ship from address.|
|» ship_to_service_point_id|body|string \| null|false|A unique identifier for a carrier service point where the shipment will be delivered by the carrier. This will take precedence over a shipment's ship to address.|

> Example responses

> 200 Response

```json
{
  "alternative_identifiers": [
    {
      "type": "last_mile_tracking_number",
      "value": "12345678912345678912"
    }
  ],
  "batch_id": {},
  "carrier_code": {},
  "carrier_id": {},
  "charge_event": {},
  "created_at": {},
  "display_scheme": "label",
  "form_download": {
    "href": {},
    "type": "string"
  },
  "insurance_claim": {
    "href": {},
    "type": "string"
  },
  "insurance_cost": {
    "amount": 0,
    "currency": {}
  },
  "is_international": true,
  "is_return_label": true,
  "label_download": {
    "href": {},
    "pdf": {},
    "png": {},
    "zpl": {}
  },
  "label_format": "pdf",
  "label_id": {},
  "label_image_id": {},
  "label_layout": "4x6",
  "package_code": {},
  "packages": [
    {
      "content_description": "Hand knitted wool socks",
      "dimensions": {
        "height": 0,
        "length": 0,
        "unit": "inch",
        "width": 0
      },
      "external_package_id": "string",
      "form_download": {
        "href": {},
        "type": "string"
      },
      "insured_value": [
        {
          "amount": 0,
          "currency": "usd"
        }
      ],
      "label_download": {
        "href": {},
        "pdf": {},
        "png": {},
        "zpl": {}
      },
      "label_messages": {
        "reference1": null,
        "reference2": null,
        "reference3": null
      },
      "package_code": {},
      "package_id": {},
      "sequence": 0,
      "tracking_number": {},
      "weight": {
        "unit": {},
        "value": 0.1
      }
    }
  ],
  "rma_number": "string",
  "service_code": {},
  "ship_date": {},
  "shipment_cost": {
    "amount": 0,
    "currency": {}
  },
  "shipment_id": {},
  "status": {},
  "trackable": true,
  "tracking_number": "782758401696",
  "tracking_status": {},
  "voided": true,
  "voided_at": {}
}
```

> 400 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 404 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 500 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

<h3 id="purchase-label-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The requested object creation was a success.|[create_label_response_body](#schemacreate_label_response_body)|
|400|Bad Request|The request contained errors.|[error_response_body](#schemaerror_response_body)|
|404|Not Found|The specified resource does not exist.|[error_response_body](#schemaerror_response_body)|
|500|Internal Server Error|An error occurred on ShipEngine's side.<br><br>> This error will automatically be reported to our engineers.<br>|[error_response_body](#schemaerror_response_body)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Get Label By External Shipment ID

<a id="opIdget_label_by_external_shipment_id"></a>

> Code samples

```bash
curl https://example.com/v1/labels/external_shipment_id/0bcb569d-1727-4ff9-ab49-b2fec0cee5ae \
  -H 'Accept: application/json' \
  -H "API-Key: ${API_KEY}"
```

`GET /v1/labels/external_shipment_id/{external_shipment_id}`

Find a label by using the external shipment id that was used during label creation


<h3 id="get-label-by-external-shipment-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|label_download_type|query|[label_download_type](#schemalabel_download_type)|false|none|
|external_shipment_id|path|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|label_download_type|url|
|label_download_type|inline|

> Example responses

> 200 Response

```json
{
  "alternative_identifiers": [
    {
      "type": "last_mile_tracking_number",
      "value": "12345678912345678912"
    }
  ],
  "batch_id": {},
  "carrier_code": {},
  "carrier_id": {},
  "charge_event": {},
  "created_at": {},
  "display_scheme": "label",
  "form_download": {
    "href": {},
    "type": "string"
  },
  "insurance_claim": {
    "href": {},
    "type": "string"
  },
  "insurance_cost": {
    "amount": 0,
    "currency": {}
  },
  "is_international": true,
  "is_return_label": true,
  "label_download": {
    "href": {},
    "pdf": {},
    "png": {},
    "zpl": {}
  },
  "label_format": "pdf",
  "label_id": {},
  "label_image_id": {},
  "label_layout": "4x6",
  "package_code": {},
  "packages": [
    {
      "content_description": "Hand knitted wool socks",
      "dimensions": {
        "height": 0,
        "length": 0,
        "unit": "inch",
        "width": 0
      },
      "external_package_id": "string",
      "form_download": {
        "href": {},
        "type": "string"
      },
      "insured_value": [
        {
          "amount": 0,
          "currency": "usd"
        }
      ],
      "label_download": {
        "href": {},
        "pdf": {},
        "png": {},
        "zpl": {}
      },
      "label_messages": {
        "reference1": null,
        "reference2": null,
        "reference3": null
      },
      "package_code": {},
      "package_id": {},
      "sequence": 0,
      "tracking_number": {},
      "weight": {
        "unit": {},
        "value": 0.1
      }
    }
  ],
  "rma_number": "string",
  "service_code": {},
  "ship_date": {},
  "shipment_cost": {
    "amount": 0,
    "currency": {}
  },
  "shipment_id": {},
  "status": {},
  "trackable": true,
  "tracking_number": "782758401696",
  "tracking_status": {},
  "voided": true,
  "voided_at": {}
}
```

> 400 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 404 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 500 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

<h3 id="get-label-by-external-shipment-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The requested object creation was a success.|[get_label_by_external_shipment_id_response_body](#schemaget_label_by_external_shipment_id_response_body)|
|400|Bad Request|The request contained errors.|[error_response_body](#schemaerror_response_body)|
|404|Not Found|The specified resource does not exist.|[error_response_body](#schemaerror_response_body)|
|500|Internal Server Error|An error occurred on ShipEngine's side.<br><br>> This error will automatically be reported to our engineers.<br>|[error_response_body](#schemaerror_response_body)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Purchase Label with Rate ID

<a id="opIdcreate_label_from_rate"></a>

> Code samples

```bash
curl https://example.com/v1/labels/rates/se-28529731 \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "API-Key: ${API_KEY}" \
  -d '{
    "display_scheme": "label",
    "label_download_type": {},
    "label_format": "pdf",
    "label_layout": "4x6",
    "validate_address": {}
  }'
```

`POST /v1/labels/rates/{rate_id}`

When retrieving rates for shipments using the `/rates` endpoint, the returned information contains a `rate_id` property that can be used
to generate a label without having to refill in the shipment information repeatedly.


> Body parameter

```json
{
  "display_scheme": "label",
  "label_download_type": {},
  "label_format": "pdf",
  "label_layout": "4x6",
  "validate_address": {}
}
```

<h3 id="purchase-label-with-rate-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rate_id|path|[se_id](#schemase_id)|true|Rate ID|
|body|body|[create_label_from_rate_request_body](#schemacreate_label_from_rate_request_body)|true|none|
|» display_scheme|body|object|false|The display format that the label should be shown in.|
|» label_download_type|body|object|false|none|
|» label_format|body|object|false|none|
|» label_layout|body|object|false|none|
|» validate_address|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "alternative_identifiers": [
    {
      "type": "last_mile_tracking_number",
      "value": "12345678912345678912"
    }
  ],
  "batch_id": {},
  "carrier_code": {},
  "carrier_id": {},
  "charge_event": {},
  "created_at": {},
  "display_scheme": "label",
  "form_download": {
    "href": {},
    "type": "string"
  },
  "insurance_claim": {
    "href": {},
    "type": "string"
  },
  "insurance_cost": {
    "amount": 0,
    "currency": {}
  },
  "is_international": true,
  "is_return_label": true,
  "label_download": {
    "href": {},
    "pdf": {},
    "png": {},
    "zpl": {}
  },
  "label_format": "pdf",
  "label_id": {},
  "label_image_id": {},
  "label_layout": "4x6",
  "package_code": {},
  "packages": [
    {
      "content_description": "Hand knitted wool socks",
      "dimensions": {
        "height": 0,
        "length": 0,
        "unit": "inch",
        "width": 0
      },
      "external_package_id": "string",
      "form_download": {
        "href": {},
        "type": "string"
      },
      "insured_value": [
        {
          "amount": 0,
          "currency": "usd"
        }
      ],
      "label_download": {
        "href": {},
        "pdf": {},
        "png": {},
        "zpl": {}
      },
      "label_messages": {
        "reference1": null,
        "reference2": null,
        "reference3": null
      },
      "package_code": {},
      "package_id": {},
      "sequence": 0,
      "tracking_number": {},
      "weight": {
        "unit": {},
        "value": 0.1
      }
    }
  ],
  "rma_number": "string",
  "service_code": {},
  "ship_date": {},
  "shipment_cost": {
    "amount": 0,
    "currency": {}
  },
  "shipment_id": {},
  "status": {},
  "trackable": true,
  "tracking_number": "782758401696",
  "tracking_status": {},
  "voided": true,
  "voided_at": {}
}
```

> 400 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 404 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 500 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

<h3 id="purchase-label-with-rate-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The requested object creation was a success.|[create_label_from_rate_response_body](#schemacreate_label_from_rate_response_body)|
|400|Bad Request|The request contained errors.|[error_response_body](#schemaerror_response_body)|
|404|Not Found|The specified resource does not exist.|[error_response_body](#schemaerror_response_body)|
|500|Internal Server Error|An error occurred on ShipEngine's side.<br><br>> This error will automatically be reported to our engineers.<br>|[error_response_body](#schemaerror_response_body)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Purchase Label with Shipment ID

<a id="opIdcreate_label_from_shipment"></a>

> Code samples

```bash
curl https://example.com/v1/labels/shipment/se-28529731 \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "API-Key: ${API_KEY}" \
  -d '{
    "display_scheme": "label",
    "label_download_type": {},
    "label_format": "pdf",
    "label_layout": "4x6",
    "validate_address": {}
  }'
```

`POST /v1/labels/shipment/{shipment_id}`

Purchase a label using a shipment ID that has already been created with the desired address and
package info.


> Body parameter

```json
{
  "display_scheme": "label",
  "label_download_type": {},
  "label_format": "pdf",
  "label_layout": "4x6",
  "validate_address": {}
}
```

<h3 id="purchase-label-with-shipment-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|shipment_id|path|[se_id](#schemase_id)|true|Shipment ID|
|body|body|[create_label_from_shipment_request_body](#schemacreate_label_from_shipment_request_body)|true|none|
|» display_scheme|body|object|false|The display format that the label should be shown in.|
|» label_download_type|body|object|false|none|
|» label_format|body|object|false|none|
|» label_layout|body|object|false|none|
|» validate_address|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "alternative_identifiers": [
    {
      "type": "last_mile_tracking_number",
      "value": "12345678912345678912"
    }
  ],
  "batch_id": {},
  "carrier_code": {},
  "carrier_id": {},
  "charge_event": {},
  "created_at": {},
  "display_scheme": "label",
  "form_download": {
    "href": {},
    "type": "string"
  },
  "insurance_claim": {
    "href": {},
    "type": "string"
  },
  "insurance_cost": {
    "amount": 0,
    "currency": {}
  },
  "is_international": true,
  "is_return_label": true,
  "label_download": {
    "href": {},
    "pdf": {},
    "png": {},
    "zpl": {}
  },
  "label_format": "pdf",
  "label_id": {},
  "label_image_id": {},
  "label_layout": "4x6",
  "package_code": {},
  "packages": [
    {
      "content_description": "Hand knitted wool socks",
      "dimensions": {
        "height": 0,
        "length": 0,
        "unit": "inch",
        "width": 0
      },
      "external_package_id": "string",
      "form_download": {
        "href": {},
        "type": "string"
      },
      "insured_value": [
        {
          "amount": 0,
          "currency": "usd"
        }
      ],
      "label_download": {
        "href": {},
        "pdf": {},
        "png": {},
        "zpl": {}
      },
      "label_messages": {
        "reference1": null,
        "reference2": null,
        "reference3": null
      },
      "package_code": {},
      "package_id": {},
      "sequence": 0,
      "tracking_number": {},
      "weight": {
        "unit": {},
        "value": 0.1
      }
    }
  ],
  "rma_number": "string",
  "service_code": {},
  "ship_date": {},
  "shipment_cost": {
    "amount": 0,
    "currency": {}
  },
  "shipment_id": {},
  "status": {},
  "trackable": true,
  "tracking_number": "782758401696",
  "tracking_status": {},
  "voided": true,
  "voided_at": {}
}
```

> 400 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 404 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 500 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

<h3 id="purchase-label-with-shipment-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The requested object creation was a success.|[create_label_from_shipment_response_body](#schemacreate_label_from_shipment_response_body)|
|400|Bad Request|The request contained errors.|[error_response_body](#schemaerror_response_body)|
|404|Not Found|The specified resource does not exist.|[error_response_body](#schemaerror_response_body)|
|500|Internal Server Error|An error occurred on ShipEngine's side.<br><br>> This error will automatically be reported to our engineers.<br>|[error_response_body](#schemaerror_response_body)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Get Label By ID

<a id="opIdget_label_by_id"></a>

> Code samples

```bash
curl https://example.com/v1/labels/se-28529731 \
  -H 'Accept: application/json' \
  -H "API-Key: ${API_KEY}"
```

`GET /v1/labels/{label_id}`

Retrieve information for individual labels.

<h3 id="get-label-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|label_download_type|query|[label_download_type](#schemalabel_download_type)|false|none|
|label_id|path|[se_id](#schemase_id)|true|Label ID|

#### Enumerated Values

|Parameter|Value|
|---|---|
|label_download_type|url|
|label_download_type|inline|

> Example responses

> 200 Response

```json
{
  "alternative_identifiers": [
    {
      "type": "last_mile_tracking_number",
      "value": "12345678912345678912"
    }
  ],
  "batch_id": {},
  "carrier_code": {},
  "carrier_id": {},
  "charge_event": {},
  "created_at": {},
  "display_scheme": "label",
  "form_download": {
    "href": {},
    "type": "string"
  },
  "insurance_claim": {
    "href": {},
    "type": "string"
  },
  "insurance_cost": {
    "amount": 0,
    "currency": {}
  },
  "is_international": true,
  "is_return_label": true,
  "label_download": {
    "href": {},
    "pdf": {},
    "png": {},
    "zpl": {}
  },
  "label_format": "pdf",
  "label_id": {},
  "label_image_id": {},
  "label_layout": "4x6",
  "package_code": {},
  "packages": [
    {
      "content_description": "Hand knitted wool socks",
      "dimensions": {
        "height": 0,
        "length": 0,
        "unit": "inch",
        "width": 0
      },
      "external_package_id": "string",
      "form_download": {
        "href": {},
        "type": "string"
      },
      "insured_value": [
        {
          "amount": 0,
          "currency": "usd"
        }
      ],
      "label_download": {
        "href": {},
        "pdf": {},
        "png": {},
        "zpl": {}
      },
      "label_messages": {
        "reference1": null,
        "reference2": null,
        "reference3": null
      },
      "package_code": {},
      "package_id": {},
      "sequence": 0,
      "tracking_number": {},
      "weight": {
        "unit": {},
        "value": 0.1
      }
    }
  ],
  "rma_number": "string",
  "service_code": {},
  "ship_date": {},
  "shipment_cost": {
    "amount": 0,
    "currency": {}
  },
  "shipment_id": {},
  "status": {},
  "trackable": true,
  "tracking_number": "782758401696",
  "tracking_status": {},
  "voided": true,
  "voided_at": {}
}
```

> 400 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 404 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 500 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

<h3 id="get-label-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request was a success.|[get_label_by_id_response_body](#schemaget_label_by_id_response_body)|
|400|Bad Request|The request contained errors.|[error_response_body](#schemaerror_response_body)|
|404|Not Found|The specified resource does not exist.|[error_response_body](#schemaerror_response_body)|
|500|Internal Server Error|An error occurred on ShipEngine's side.<br><br>> This error will automatically be reported to our engineers.<br>|[error_response_body](#schemaerror_response_body)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Create a return label

<a id="opIdcreate_return_label"></a>

> Code samples

```bash
curl https://example.com/v1/labels/se-28529731/return \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "API-Key: ${API_KEY}" \
  -d '{
    "charge_event": {},
    "display_scheme": "label",
    "label_download_type": "url",
    "label_format": "pdf",
    "label_image_id": {},
    "label_layout": "4x6"
  }'
```

`POST /v1/labels/{label_id}/return`

Create a return label

> Body parameter

```json
{
  "charge_event": {},
  "display_scheme": "label",
  "label_download_type": "url",
  "label_format": "pdf",
  "label_image_id": {},
  "label_layout": "4x6"
}
```

<h3 id="create-a-return-label-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|label_id|path|[se_id](#schemase_id)|true|Label ID|
|body|body|[create_return_label_request_body](#schemacreate_return_label_request_body)|true|none|
|» charge_event|body|object|false|The label charge event.<br>|
|» display_scheme|body|object|false|The display format that the label should be shown in.|
|» label_download_type|body|object|false|none|
|» label_format|body|object|false|The file format that you want the label to be in.  We recommend `pdf` format because it is supported by all carriers, whereas some carriers do not support the `png` or `zpl` formats.<br>|
|» label_image_id|body|object \| null|false|The label image resource that was used to create a custom label image.|
|» label_layout|body|object|false|The layout (size) that you want the label to be in.  The `label_format` determines which sizes are allowed.  `4x6` is supported for all label formats, whereas `letter` (8.5" x 11") is only supported for `pdf` format.<br>|

> Example responses

> 200 Response

```json
{
  "alternative_identifiers": [
    {
      "type": "last_mile_tracking_number",
      "value": "12345678912345678912"
    }
  ],
  "batch_id": {},
  "carrier_code": {},
  "carrier_id": {},
  "charge_event": {},
  "created_at": {},
  "display_scheme": "label",
  "form_download": {
    "href": {},
    "type": "string"
  },
  "insurance_claim": {
    "href": {},
    "type": "string"
  },
  "insurance_cost": {
    "amount": 0,
    "currency": {}
  },
  "is_international": true,
  "is_return_label": true,
  "label_download": {
    "href": {},
    "pdf": {},
    "png": {},
    "zpl": {}
  },
  "label_format": "pdf",
  "label_id": {},
  "label_image_id": {},
  "label_layout": "4x6",
  "package_code": {},
  "packages": [
    {
      "content_description": "Hand knitted wool socks",
      "dimensions": {
        "height": 0,
        "length": 0,
        "unit": "inch",
        "width": 0
      },
      "external_package_id": "string",
      "form_download": {
        "href": {},
        "type": "string"
      },
      "insured_value": [
        {
          "amount": 0,
          "currency": "usd"
        }
      ],
      "label_download": {
        "href": {},
        "pdf": {},
        "png": {},
        "zpl": {}
      },
      "label_messages": {
        "reference1": null,
        "reference2": null,
        "reference3": null
      },
      "package_code": {},
      "package_id": {},
      "sequence": 0,
      "tracking_number": {},
      "weight": {
        "unit": {},
        "value": 0.1
      }
    }
  ],
  "rma_number": "string",
  "service_code": {},
  "ship_date": {},
  "shipment_cost": {
    "amount": 0,
    "currency": {}
  },
  "shipment_id": {},
  "status": {},
  "trackable": true,
  "tracking_number": "782758401696",
  "tracking_status": {},
  "voided": true,
  "voided_at": {}
}
```

> 400 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 404 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 500 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

<h3 id="create-a-return-label-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request was a success.|[create_return_label_response_body](#schemacreate_return_label_response_body)|
|400|Bad Request|The request contained errors.|[error_response_body](#schemaerror_response_body)|
|404|Not Found|The specified resource does not exist.|[error_response_body](#schemaerror_response_body)|
|500|Internal Server Error|An error occurred on ShipEngine's side.<br><br>> This error will automatically be reported to our engineers.<br>|[error_response_body](#schemaerror_response_body)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Get Label Tracking Information

<a id="opIdget_tracking_log_from_label"></a>

> Code samples

```bash
curl https://example.com/v1/labels/se-28529731/track \
  -H 'Accept: application/json' \
  -H "API-Key: ${API_KEY}"
```

`GET /v1/labels/{label_id}/track`

Retrieve the label's tracking information

<h3 id="get-label-tracking-information-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|label_id|path|[se_id](#schemase_id)|true|Label ID|

> Example responses

> 200 Response

```json
{
  "actual_delivery_date": {},
  "carrier_code": {},
  "carrier_detail_code": "OT",
  "carrier_id": {},
  "carrier_status_code": 1,
  "carrier_status_description": "Your item was delivered in or at the mailbox at 9:10 am on March",
  "estimated_delivery_date": {},
  "events": [
    {
      "carrier_detail_code": "OT",
      "carrier_occurred_at": {},
      "carrier_status_code": 1,
      "carrier_status_description": "Your item was delivered in or at the mailbox at 9:10 am on March",
      "city_locality": "AUSTIN",
      "company_name": "Stamps.com",
      "country_code": {},
      "description": "Delivered, In/At Mailbox",
      "event_code": "string",
      "latitude": -90,
      "longitude": -180,
      "occurred_at": {},
      "postal_code": 78756,
      "signer": "string",
      "state_province": "TX",
      "status_code": {},
      "status_description": "In Transit"
    }
  ],
  "exception_description": "string",
  "ship_date": {},
  "status_code": {},
  "status_description": "Delivered",
  "tracking_number": {},
  "tracking_url": "https://www.fedex.com/fedextrack/?action=track&trackingnumber=1234"
}
```

> 400 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 404 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 500 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

<h3 id="get-label-tracking-information-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request was a success.|[get_tracking_log_from_label_response_body](#schemaget_tracking_log_from_label_response_body)|
|400|Bad Request|The request contained errors.|[error_response_body](#schemaerror_response_body)|
|404|Not Found|The specified resource does not exist.|[error_response_body](#schemaerror_response_body)|
|500|Internal Server Error|An error occurred on ShipEngine's side.<br><br>> This error will automatically be reported to our engineers.<br>|[error_response_body](#schemaerror_response_body)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Void a Label By ID

<a id="opIdvoid_label"></a>

> Code samples

```bash
curl https://example.com/v1/labels/se-28529731/void \
  -X PUT \
  -H 'Accept: application/json' \
  -H "API-Key: ${API_KEY}"
```

`PUT /v1/labels/{label_id}/void`

Void a label by ID to get a refund.

<h3 id="void-a-label-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|label_id|path|[se_id](#schemase_id)|true|Label ID|

> Example responses

> 200 Response

```json
{
  "approved": true,
  "message": "Request for refund submitted.  This label has been voided."
}
```

> 400 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 404 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 500 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

<h3 id="void-a-label-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request was a success.|[void_label_response_body](#schemavoid_label_response_body)|
|400|Bad Request|The request contained errors.|[error_response_body](#schemaerror_response_body)|
|404|Not Found|The specified resource does not exist.|[error_response_body](#schemaerror_response_body)|
|500|Internal Server Error|An error occurred on ShipEngine's side.<br><br>> This error will automatically be reported to our engineers.<br>|[error_response_body](#schemaerror_response_body)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

<h1 id="shipengine-api-manifests">manifests</h1>

manifests


## List Manifests

<a id="opIdlist_manifests"></a>

> Code samples

```bash
curl https://example.com/v1/manifests \
  -H 'Accept: application/json' \
  -H "API-Key: ${API_KEY}"
```

`GET /v1/manifests`

Similar to querying shipments, we allow you to query manifests since there will likely be a large number over a long period of time.

<h3 id="list-manifests-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|warehouse_id|query|[se_id](#schemase_id)|false|Warehouse ID|
|ship_date_start|query|string(date-time)|false|ship date start range|
|ship_date_end|query|string(date-time)|false|ship date end range|
|created_at_start|query|string(date-time)|false|Used to create a filter for when a resource was created (ex. A shipment that was created after a certain time)|
|created_at_end|query|string(date-time)|false|Used to create a filter for when a resource was created, (ex. A shipment that was created before a certain time)|
|carrier_id|query|[se_id](#schemase_id)|false|Carrier ID|
|page|query|integer(int32)|false|Return a specific page of results. Defaults to the first page. If set to a number that's greater than the number of pages of results, an empty page is returned.<br>|
|page_size|query|integer(int32)|false|The number of results to return per response.|
|label_ids|query|[string]|false|none|

> Example responses

> 200 Response

```json
{
  "links": {
    "first": {
      "href": {},
      "type": "string"
    },
    "last": {
      "href": {},
      "type": "string"
    },
    "next": {
      "href": {},
      "type": "string"
    },
    "prev": {
      "href": {},
      "type": "string"
    }
  },
  "manifests": [],
  "page": 3,
  "pages": 4,
  "total": 3
}
```

> 400 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 404 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 500 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

<h3 id="list-manifests-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request was a success.|[list_manifests_response_body](#schemalist_manifests_response_body)|
|400|Bad Request|The request contained errors.|[error_response_body](#schemaerror_response_body)|
|404|Not Found|The specified resource does not exist.|[error_response_body](#schemaerror_response_body)|
|500|Internal Server Error|An error occurred on ShipEngine's side.<br><br>> This error will automatically be reported to our engineers.<br>|[error_response_body](#schemaerror_response_body)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Create Manifest

<a id="opIdcreate_manifest"></a>

> Code samples

```bash
curl https://example.com/v1/manifests \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "API-Key: ${API_KEY}" \
  -d '{
    "carrier_id": {},
    "excluded_label_ids": [
      {}
    ],
    "label_ids": [
      {}
    ],
    "ship_date": "2018-09-23T15:00:00.000Z",
    "warehouse_id": {}
  }'
```

`POST /v1/manifests`

Each ShipEngine manifest is created for a specific warehouse, so you'll need to provide the warehouse_id
rather than the ship_from address. You can create a warehouse for each location that you want to create manifests for.


> Body parameter

```json
{
  "carrier_id": {},
  "excluded_label_ids": [
    {}
  ],
  "label_ids": [
    {}
  ],
  "ship_date": "2018-09-23T15:00:00.000Z",
  "warehouse_id": {}
}
```

<h3 id="create-manifest-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[create_manifest_request_body](#schemacreate_manifest_request_body)|true|none|
|» *oneOf*|body|[create_manifest_by_object_request_body](#schemacreate_manifest_by_object_request_body)|false|A create manifest request body|
|» *oneOf*|body|[create_manifest_label_ids_request_body](#schemacreate_manifest_label_ids_request_body)|false|A create manifest request body|

> Example responses

> 200 Response

```json
{
  "manifests": [
    {
      "carrier_id": {},
      "created_at": "2019-07-12T13:37:39.050Z",
      "form_id": {},
      "label_ids": [
        {}
      ],
      "manifest_download": {
        "href": {}
      },
      "manifest_id": {},
      "ship_date": "2019-07-12T13:37:39.050Z",
      "shipments": 100,
      "submission_id": "9475711899564878915476",
      "warehouse_id": {}
    }
  ],
  "manifest_requests": [
    {
      "manifest_request_id": {},
      "status": {}
    }
  ],
  "carrier_id": {},
  "created_at": "2019-07-12T13:37:39.050Z",
  "form_id": {},
  "label_ids": [
    {}
  ],
  "manifest_download": {
    "href": {}
  },
  "manifest_id": {},
  "ship_date": "2019-07-12T13:37:39.050Z",
  "shipments": 100,
  "submission_id": "9475711899564878915476",
  "warehouse_id": {},
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 400 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 500 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

<h3 id="create-manifest-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request was a success.|[create_manifest_response_body](#schemacreate_manifest_response_body)|
|400|Bad Request|The request contained errors.|[error_response_body](#schemaerror_response_body)|
|500|Internal Server Error|An error occurred on ShipEngine's side.<br><br>> This error will automatically be reported to our engineers.<br>|[error_response_body](#schemaerror_response_body)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Get Manifest Request By Id

<a id="opIdget_manifest_request_by_id"></a>

> Code samples

```bash
curl https://example.com/v1/manifests/requests/se-28529731 \
  -H 'Accept: application/json' \
  -H "API-Key: ${API_KEY}"
```

`GET /v1/manifests/requests/{manifest_request_id}`

Get Manifest Request By Id

<h3 id="get-manifest-request-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|manifest_request_id|path|[se_id](#schemase_id)|true|The Manifest Request Id|

> Example responses

> 200 Response

```json
{
  "manifests": [
    {
      "carrier_id": {},
      "created_at": "2019-07-12T13:37:39.050Z",
      "form_id": {},
      "label_ids": [
        {}
      ],
      "manifest_download": {
        "href": {}
      },
      "manifest_id": {},
      "ship_date": "2019-07-12T13:37:39.050Z",
      "shipments": 100,
      "submission_id": "9475711899564878915476",
      "warehouse_id": {}
    }
  ],
  "manifest_requests": [
    {
      "manifest_request_id": {},
      "status": {}
    }
  ],
  "carrier_id": {},
  "created_at": "2019-07-12T13:37:39.050Z",
  "form_id": {},
  "label_ids": [
    {}
  ],
  "manifest_download": {
    "href": {}
  },
  "manifest_id": {},
  "ship_date": "2019-07-12T13:37:39.050Z",
  "shipments": 100,
  "submission_id": "9475711899564878915476",
  "warehouse_id": {},
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 400 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 404 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 500 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

<h3 id="get-manifest-request-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request was a success.|[create_manifest_response_body](#schemacreate_manifest_response_body)|
|400|Bad Request|The request contained errors.|[error_response_body](#schemaerror_response_body)|
|404|Not Found|The specified resource does not exist.|[error_response_body](#schemaerror_response_body)|
|500|Internal Server Error|An error occurred on ShipEngine's side.<br><br>> This error will automatically be reported to our engineers.<br>|[error_response_body](#schemaerror_response_body)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Get Manifest By Id

<a id="opIdget_manifest_by_id"></a>

> Code samples

```bash
curl https://example.com/v1/manifests/se-28529731 \
  -H 'Accept: application/json' \
  -H "API-Key: ${API_KEY}"
```

`GET /v1/manifests/{manifest_id}`

Get Manifest By Id

<h3 id="get-manifest-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|manifest_id|path|[se_id](#schemase_id)|true|The Manifest Id|

> Example responses

> 200 Response

```json
{
  "carrier_id": {},
  "created_at": "2019-07-12T13:37:39.050Z",
  "form_id": {},
  "label_ids": [
    {}
  ],
  "manifest_download": {
    "href": {}
  },
  "manifest_id": {},
  "ship_date": "2019-07-12T13:37:39.050Z",
  "shipments": 100,
  "submission_id": "9475711899564878915476",
  "warehouse_id": {}
}
```

> 400 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 404 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 500 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

<h3 id="get-manifest-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request was a success.|[get_manifest_by_id_response_body](#schemaget_manifest_by_id_response_body)|
|400|Bad Request|The request contained errors.|[error_response_body](#schemaerror_response_body)|
|404|Not Found|The specified resource does not exist.|[error_response_body](#schemaerror_response_body)|
|500|Internal Server Error|An error occurred on ShipEngine's side.<br><br>> This error will automatically be reported to our engineers.<br>|[error_response_body](#schemaerror_response_body)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

<h1 id="shipengine-api-packagepickups">package_pickups</h1>

Scheduled package pickups

## List Scheduled Pickups

<a id="opIdlist_scheduled_pickups"></a>

> Code samples

```bash
curl https://example.com/v1/pickups \
  -H 'Accept: application/json' \
  -H "API-Key: ${API_KEY}"
```

`GET /v1/pickups`

List all pickups that have been scheduled for this carrier

<h3 id="list-scheduled-pickups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|carrier_id|query|[se_id](#schemase_id)|false|Carrier ID|
|warehouse_id|query|[se_id](#schemase_id)|false|Warehouse ID|
|created_at_start|query|string(date-time)|false|Only return scheduled pickups that were created on or after a specific date/time|
|created_at_end|query|string(date-time)|false|Only return scheduled pickups that were created on or before a specific date/time|
|page|query|integer(int32)|false|Return a specific page of results. Defaults to the first page. If set to a number that's greater than the number of pages of results, an empty page is returned.<br>|
|page_size|query|integer(int32)|false|The number of results to return per response.|

> Example responses

> 200 Response

```json
{
  "links": {
    "first": {
      "href": {},
      "type": "string"
    },
    "last": {
      "href": {},
      "type": "string"
    },
    "next": {
      "href": {},
      "type": "string"
    },
    "prev": {
      "href": {},
      "type": "string"
    }
  },
  "page": 3,
  "pages": 4,
  "pickups": [
    {
      "cancelled_at": {},
      "carrier_id": {},
      "confirmation_number": "292513CL4A3",
      "contact_details": {
        "email": {},
        "name": "string",
        "phone": "strings"
      },
      "created_at": {},
      "label_ids": [
        {}
      ],
      "pickup_address": {
        "address_line1": "1999 Bishop Grandin Blvd.",
        "address_line2": "Unit 408",
        "address_line3": "Building #7",
        "address_residential_indicator": "no",
        "city_locality": "Winnipeg",
        "company_name": "The Home Depot",
        "country_code": {},
        "email": "example@example.com",
        "name": "John Doe",
        "phone": "+1 204-253-9411 ext. 123",
        "postal_code": {},
        "state_province": "Manitoba"
      },
      "pickup_id": {},
      "pickup_notes": "string",
      "pickup_windows": [
        {
          "end_at": {},
          "start_at": {}
        }
      ],
      "warehouse_id": {}
    }
  ],
  "total": 3,
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 400 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 404 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 500 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

<h3 id="list-scheduled-pickups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request was a success.|[get_pickups_response_body](#schemaget_pickups_response_body)|
|400|Bad Request|The request contained errors.|[error_response_body](#schemaerror_response_body)|
|404|Not Found|The specified resource does not exist.|[error_response_body](#schemaerror_response_body)|
|500|Internal Server Error|An error occurred on ShipEngine's side.<br><br>> This error will automatically be reported to our engineers.<br>|[error_response_body](#schemaerror_response_body)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Schedule a Pickup

<a id="opIdschedule_pickup"></a>

> Code samples

```bash
curl https://example.com/v1/pickups \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "API-Key: ${API_KEY}" \
  -d '{
    "contact_details": {
      "email": {},
      "name": "string",
      "phone": "strings"
    },
    "label_ids": [
      {}
    ],
    "pickup_notes": "string",
    "pickup_window": {
      "end_at": {},
      "start_at": {}
    }
  }'
```

`POST /v1/pickups`

Schedule a package pickup with a carrier

> Body parameter

```json
{
  "contact_details": {
    "email": {},
    "name": "string",
    "phone": "strings"
  },
  "label_ids": [
    {}
  ],
  "pickup_notes": "string",
  "pickup_window": {
    "end_at": {},
    "start_at": {}
  }
}
```

<h3 id="schedule-a-pickup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[schedule_pickup_request_body](#schemaschedule_pickup_request_body)|true|none|
|» contact_details|body|[contact_details](#schemacontact_details)|true|none|
|» label_ids|body|[object]|true|Label IDs that will be included in the pickup request|
|» pickup_notes|body|string|false|Used by some carriers to give special instructions for a package pickup|
|» pickup_window|body|[pickup_window](#schemapickup_window)|true|The desired time range for the package pickup.|

> Example responses

> 200 Response

```json
{
  "cancelled_at": {},
  "carrier_id": {},
  "confirmation_number": "292513CL4A3",
  "contact_details": {
    "email": {},
    "name": "string",
    "phone": "strings"
  },
  "created_at": {},
  "label_ids": [
    {}
  ],
  "pickup_address": {
    "address_line1": "1999 Bishop Grandin Blvd.",
    "address_line2": "Unit 408",
    "address_line3": "Building #7",
    "address_residential_indicator": "no",
    "city_locality": "Winnipeg",
    "company_name": "The Home Depot",
    "country_code": {},
    "email": "example@example.com",
    "name": "John Doe",
    "phone": "+1 204-253-9411 ext. 123",
    "postal_code": {},
    "state_province": "Manitoba"
  },
  "pickup_id": {},
  "pickup_notes": "string",
  "pickup_windows": [
    {
      "end_at": {},
      "start_at": {}
    }
  ],
  "warehouse_id": {},
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 400 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 404 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 500 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

<h3 id="schedule-a-pickup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request was a success.|[schedule_pickup_response_body](#schemaschedule_pickup_response_body)|
|400|Bad Request|The request contained errors.|[error_response_body](#schemaerror_response_body)|
|404|Not Found|The specified resource does not exist.|[error_response_body](#schemaerror_response_body)|
|500|Internal Server Error|An error occurred on ShipEngine's side.<br><br>> This error will automatically be reported to our engineers.<br>|[error_response_body](#schemaerror_response_body)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Get Pickup By ID

<a id="opIdget_pickup_by_id"></a>

> Code samples

```bash
curl https://example.com/v1/pickups/pik_3YcKU5zdtJuCqoeNwyqqbW \
  -H 'Accept: application/json' \
  -H "API-Key: ${API_KEY}"
```

`GET /v1/pickups/{pickup_id}`

Get Pickup By ID

<h3 id="get-pickup-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pickup_id|path|[pickup_resource_id](#schemapickup_resource_id)|true|none|

> Example responses

> 200 Response

```json
{
  "cancelled_at": {},
  "carrier_id": {},
  "confirmation_number": "292513CL4A3",
  "contact_details": {
    "email": {},
    "name": "string",
    "phone": "strings"
  },
  "created_at": {},
  "label_ids": [
    {}
  ],
  "pickup_address": {
    "address_line1": "1999 Bishop Grandin Blvd.",
    "address_line2": "Unit 408",
    "address_line3": "Building #7",
    "address_residential_indicator": "no",
    "city_locality": "Winnipeg",
    "company_name": "The Home Depot",
    "country_code": {},
    "email": "example@example.com",
    "name": "John Doe",
    "phone": "+1 204-253-9411 ext. 123",
    "postal_code": {},
    "state_province": "Manitoba"
  },
  "pickup_id": {},
  "pickup_notes": "string",
  "pickup_windows": [
    {
      "end_at": {},
      "start_at": {}
    }
  ],
  "warehouse_id": {},
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 400 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 404 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 500 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

<h3 id="get-pickup-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request was a success.|[get_pickup_by_id_response_body](#schemaget_pickup_by_id_response_body)|
|400|Bad Request|The request contained errors.|[error_response_body](#schemaerror_response_body)|
|404|Not Found|The specified resource does not exist.|[error_response_body](#schemaerror_response_body)|
|500|Internal Server Error|An error occurred on ShipEngine's side.<br><br>> This error will automatically be reported to our engineers.<br>|[error_response_body](#schemaerror_response_body)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Delete a Scheduled Pickup

<a id="opIddelete_scheduled_pickup"></a>

> Code samples

```bash
curl https://example.com/v1/pickups/pik_3YcKU5zdtJuCqoeNwyqqbW \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "API-Key: ${API_KEY}"
```

`DELETE /v1/pickups/{pickup_id}`

Delete a previously-scheduled pickup by ID

<h3 id="delete-a-scheduled-pickup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pickup_id|path|[pickup_resource_id](#schemapickup_resource_id)|true|none|

> Example responses

> 200 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {},
  "pickup_id": {}
}
```

> 400 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 404 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 500 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

<h3 id="delete-a-scheduled-pickup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Return the `pickup_id` of the scheduled pickup that was successfully deleted<br>|[delete_pickup_by_id_response_body](#schemadelete_pickup_by_id_response_body)|
|400|Bad Request|The request contained errors.|[error_response_body](#schemaerror_response_body)|
|404|Not Found|The specified resource does not exist.|[error_response_body](#schemaerror_response_body)|
|500|Internal Server Error|An error occurred on ShipEngine's side.<br><br>> This error will automatically be reported to our engineers.<br>|[error_response_body](#schemaerror_response_body)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

<h1 id="shipengine-api-packagetypes">package_types</h1>

custom package types


## List Custom Package Types

<a id="opIdlist_package_types"></a>

> Code samples

```bash
curl https://example.com/v1/packages \
  -H 'Accept: application/json' \
  -H "API-Key: ${API_KEY}"
```

`GET /v1/packages`

List the custom package types associated with the account

> Example responses

> 200 Response

```json
{
  "packages": [
    {
      "description": "Packaging for laptops",
      "dimensions": {
        "height": 0,
        "length": 0,
        "unit": "inch",
        "width": 0
      },
      "name": "laptop_box",
      "package_code": {},
      "package_id": {}
    }
  ]
}
```

> 400 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 404 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 500 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

<h3 id="list-custom-package-types-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request was a success.|[list_package_types_response_body](#schemalist_package_types_response_body)|
|400|Bad Request|The request contained errors.|[error_response_body](#schemaerror_response_body)|
|404|Not Found|The specified resource does not exist.|[error_response_body](#schemaerror_response_body)|
|500|Internal Server Error|An error occurred on ShipEngine's side.<br><br>> This error will automatically be reported to our engineers.<br>|[error_response_body](#schemaerror_response_body)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Create Custom Package Type

<a id="opIdcreate_package_type"></a>

> Code samples

```bash
curl https://example.com/v1/packages \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "API-Key: ${API_KEY}" \
  -d '{
    "description": "Packaging for laptops",
    "dimensions": {
      "height": 0,
      "length": 0,
      "unit": "inch",
      "width": 0
    },
    "name": "laptop_box",
    "package_code": {},
    "package_id": {}
  }'
```

`POST /v1/packages`

Create a custom package type to better assist in getting accurate rate estimates

> Body parameter

```json
{
  "description": "Packaging for laptops",
  "dimensions": {
    "height": 0,
    "length": 0,
    "unit": "inch",
    "width": 0
  },
  "name": "laptop_box",
  "package_code": {},
  "package_id": {}
}
```

<h3 id="create-custom-package-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[create_package_type_request_body](#schemacreate_package_type_request_body)|true|none|
|» description|body|string \| null|false|Provides a helpful description for the custom package.|
|» dimensions|body|object|false|The custom dimensions for the package.|
|» » height|body|number(double)|true|The length of the package, in the specified unit|
|» » length|body|number(double)|true|The length of the package, in the specified unit|
|» » unit|body|object|true|none|
|» » width|body|number(double)|true|The width of the package, in the specified unit|
|» name|body|string|true|none|
|» package_code|body|object|true|none|
|» package_id|body|object|false|A string that uniquely identifies the package.|

> Example responses

> 200 Response

```json
{
  "description": "Packaging for laptops",
  "dimensions": {
    "height": 0,
    "length": 0,
    "unit": "inch",
    "width": 0
  },
  "name": "laptop_box",
  "package_code": {},
  "package_id": {}
}
```

> 400 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 500 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

<h3 id="create-custom-package-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request was a success.|[create_package_type_response_body](#schemacreate_package_type_response_body)|
|400|Bad Request|The request contained errors.|[error_response_body](#schemaerror_response_body)|
|500|Internal Server Error|An error occurred on ShipEngine's side.<br><br>> This error will automatically be reported to our engineers.<br>|[error_response_body](#schemaerror_response_body)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Get Custom Package Type By ID

<a id="opIdget_package_type_by_id"></a>

> Code samples

```bash
curl https://example.com/v1/packages/se-28529731 \
  -H 'Accept: application/json' \
  -H "API-Key: ${API_KEY}"
```

`GET /v1/packages/{package_id}`

Get Custom Package Type by ID

<h3 id="get-custom-package-type-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|package_id|path|[se_id](#schemase_id)|true|Package ID|

> Example responses

> 200 Response

```json
{
  "description": "Packaging for laptops",
  "dimensions": {
    "height": 0,
    "length": 0,
    "unit": "inch",
    "width": 0
  },
  "name": "laptop_box",
  "package_code": {},
  "package_id": {}
}
```

> 400 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 404 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 500 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

<h3 id="get-custom-package-type-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request was a success.|[get_package_type_by_id_response_body](#schemaget_package_type_by_id_response_body)|
|400|Bad Request|The request contained errors.|[error_response_body](#schemaerror_response_body)|
|404|Not Found|The specified resource does not exist.|[error_response_body](#schemaerror_response_body)|
|500|Internal Server Error|An error occurred on ShipEngine's side.<br><br>> This error will automatically be reported to our engineers.<br>|[error_response_body](#schemaerror_response_body)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Update Custom Package Type By ID

<a id="opIdupdate_package_type"></a>

> Code samples

```bash
curl https://example.com/v1/packages/se-28529731 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "API-Key: ${API_KEY}" \
  -d '{
    "description": "Packaging for laptops",
    "dimensions": {
      "height": 0,
      "length": 0,
      "unit": "inch",
      "width": 0
    },
    "name": "laptop_box",
    "package_code": {},
    "package_id": {}
  }'
```

`PUT /v1/packages/{package_id}`

Update the custom package type object by ID

> Body parameter

```json
{
  "description": "Packaging for laptops",
  "dimensions": {
    "height": 0,
    "length": 0,
    "unit": "inch",
    "width": 0
  },
  "name": "laptop_box",
  "package_code": {},
  "package_id": {}
}
```

<h3 id="update-custom-package-type-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|package_id|path|[se_id](#schemase_id)|true|Package ID|
|body|body|[update_package_type_request_body](#schemaupdate_package_type_request_body)|true|none|
|» description|body|string \| null|false|Provides a helpful description for the custom package.|
|» dimensions|body|object|false|The custom dimensions for the package.|
|» » height|body|number(double)|true|The length of the package, in the specified unit|
|» » length|body|number(double)|true|The length of the package, in the specified unit|
|» » unit|body|object|true|none|
|» » width|body|number(double)|true|The width of the package, in the specified unit|
|» name|body|string|true|none|
|» package_code|body|object|true|none|
|» package_id|body|object|false|A string that uniquely identifies the package.|

> Example responses

> 204 Response

```json
""
```

> 400 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 404 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 500 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

<h3 id="update-custom-package-type-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The request was successful.|[empty_response_body](#schemaempty_response_body)|
|400|Bad Request|The request contained errors.|[error_response_body](#schemaerror_response_body)|
|404|Not Found|The specified resource does not exist.|[error_response_body](#schemaerror_response_body)|
|500|Internal Server Error|An error occurred on ShipEngine's side.<br><br>> This error will automatically be reported to our engineers.<br>|[error_response_body](#schemaerror_response_body)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Delete A Custom Package By ID

<a id="opIddelete_package_type"></a>

> Code samples

```bash
curl https://example.com/v1/packages/se-28529731 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "API-Key: ${API_KEY}"
```

`DELETE /v1/packages/{package_id}`

Delete a custom package using the ID

<h3 id="delete-a-custom-package-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|package_id|path|[se_id](#schemase_id)|true|Package ID|

> Example responses

> 204 Response

```json
""
```

> 400 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 404 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 500 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

<h3 id="delete-a-custom-package-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The request was successful.|[empty_response_body](#schemaempty_response_body)|
|400|Bad Request|The request contained errors.|[error_response_body](#schemaerror_response_body)|
|404|Not Found|The specified resource does not exist.|[error_response_body](#schemaerror_response_body)|
|500|Internal Server Error|An error occurred on ShipEngine's side.<br><br>> This error will automatically be reported to our engineers.<br>|[error_response_body](#schemaerror_response_body)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

<h1 id="shipengine-api-rates">rates</h1>

Make sure you ship as cost-effectively as possible by [quickly comparing rates](https://www.shipengine.com/docs/rates/) using the ShipEngine Rates API. As long as you have the carrier connected to your account, you'll be able to see and compare different rates and services.


<a href="https://www.shipengine.com/docs/rates/">This quick start guide shows you how to get shipping rates for multiple carriers so you can choose the fastest, cheapest, or most reliable option.</a>

## Get Shipping Rates

<a id="opIdcalculate_rates"></a>

> Code samples

```bash
curl https://example.com/v1/rates \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "API-Key: ${API_KEY}" \
  -d '{
    "rate_options": {
      "calculate_tax_amount": true,
      "carrier_ids": [
        {}
      ],
      "is_return": true,
      "package_types": [
        "string"
      ],
      "preferred_currency": {},
      "service_codes": [
        "string"
      ]
    },
    "shipment_id": {}
  }'
```

`POST /v1/rates`

It's not uncommon that you want to give your customer the choice between whether they want to ship the fastest, cheapest, or the most trusted route. Most companies don't solely ship things using a single shipping option;
so we provide functionality to show you all your options!


> Body parameter

```json
{
  "rate_options": {
    "calculate_tax_amount": true,
    "carrier_ids": [
      {}
    ],
    "is_return": true,
    "package_types": [
      "string"
    ],
    "preferred_currency": {},
    "service_codes": [
      "string"
    ]
  },
  "shipment_id": {}
}
```

<h3 id="get-shipping-rates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[calculate_rates_request_body](#schemacalculate_rates_request_body)|true|none|
|» rate_options|body|object|false|The rate options|
|» » calculate_tax_amount|body|boolean|false|Calculate the duties and tariffs for cross border shipments.|
|» » carrier_ids|body|[object]|true|Array of carrier ids to get rates for|
|» » is_return|body|boolean|false|Indicate if it's a return shipment|
|» » package_types|body|[string]|false|none|
|» » preferred_currency|body|object|false|none|
|» » service_codes|body|[string]|false|none|
|» *oneOf*|body|[shipment_id_request](#schemashipment_id_request)|false|none|
|» *oneOf*|body|[shipment_request](#schemashipment_request)|false|none|

> Example responses

> 200 Response

```json
{
  "advanced_options": {
    "bill_to_account": null,
    "bill_to_country_code": null,
    "bill_to_party": null,
    "bill_to_postal_code": null,
    "collect_on_delivery": {
      "payment_amount": {
        "amount": 0,
        "currency": {}
      },
      "payment_type": {}
    },
    "contains_alcohol": false,
    "custom_field1": null,
    "custom_field2": null,
    "custom_field3": null,
    "delivered_duty_paid": false,
    "dry_ice": false,
    "dry_ice_weight": {
      "unit": {},
      "value": 0.1
    },
    "fedex_freight": {
      "booking_confirmation": "string",
      "shipper_load_and_count": "string"
    },
    "freight_class": 77.5,
    "non_machinable": false,
    "origin_type": null,
    "saturday_delivery": false,
    "shipper_release": null,
    "third_party_consignee": false,
    "use_ups_ground_freight_pricing": null
  },
  "carrier_id": {},
  "confirmation": "none",
  "created_at": {},
  "customs": null,
  "external_order_id": "string",
  "external_shipment_id": "string",
  "insurance_provider": "none",
  "items": [],
  "modified_at": {},
  "order_source_code": {},
  "origin_type": {},
  "packages": [
    {
      "content_description": "Hand knitted wool socks",
      "dimensions": {
        "height": 0,
        "length": 0,
        "unit": "inch",
        "width": 0
      },
      "external_package_id": "string",
      "form_download": {
        "href": {},
        "type": "string"
      },
      "insured_value": [
        {
          "amount": 0,
          "currency": "usd"
        }
      ],
      "label_download": {
        "href": {},
        "pdf": {},
        "png": {},
        "zpl": {}
      },
      "label_messages": {
        "reference1": null,
        "reference2": null,
        "reference3": null
      },
      "package_code": {},
      "package_id": {},
      "sequence": 0,
      "tracking_number": {},
      "weight": {
        "unit": {},
        "value": 0.1
      }
    }
  ],
  "return_to": {
    "address_line1": "1999 Bishop Grandin Blvd.",
    "address_line2": "Unit 408",
    "address_line3": "Building #7",
    "address_residential_indicator": "no",
    "city_locality": "Winnipeg",
    "company_name": "The Home Depot",
    "country_code": {},
    "email": "example@example.com",
    "name": "John Doe",
    "phone": "+1 204-253-9411 ext. 123",
    "postal_code": {},
    "state_province": "Manitoba",
    "instructions": "string"
  },
  "service_code": {},
  "ship_date": {},
  "ship_from": {
    "address_line1": "1999 Bishop Grandin Blvd.",
    "address_line2": "Unit 408",
    "address_line3": "Building #7",
    "address_residential_indicator": "no",
    "city_locality": "Winnipeg",
    "company_name": "The Home Depot",
    "country_code": {},
    "email": "example@example.com",
    "name": "John Doe",
    "phone": "+1 204-253-9411 ext. 123",
    "postal_code": {},
    "state_province": "Manitoba",
    "instructions": "string"
  },
  "ship_to": {
    "address_line1": "1999 Bishop Grandin Blvd.",
    "address_line2": "Unit 408",
    "address_line3": "Building #7",
    "address_residential_indicator": "no",
    "city_locality": "Winnipeg",
    "company_name": "The Home Depot",
    "country_code": {},
    "email": "example@example.com",
    "name": "John Doe",
    "phone": "+1 204-253-9411 ext. 123",
    "postal_code": {},
    "state_province": "Manitoba",
    "instructions": "string"
  },
  "shipment_id": {},
  "shipment_number": "string",
  "shipment_status": "pending",
  "tags": [],
  "tax_identifiers": [
    {
      "identifier_type": {},
      "issuing_authority": "string",
      "taxable_entity_type": {},
      "value": "string"
    }
  ],
  "total_weight": {
    "unit": {},
    "value": 0.1
  },
  "warehouse_id": null,
  "rate_response": {
    "created_at": {},
    "errors": [
      {
        "error_code": {},
        "error_source": {},
        "error_type": {},
        "message": "Body of request cannot be null."
      }
    ],
    "invalid_rates": [],
    "rate_request_id": {},
    "rates": [
      {
        "carrier_code": "string",
        "carrier_delivery_days": "string",
        "carrier_friendly_name": "string",
        "carrier_id": {},
        "carrier_nickname": "string",
        "confirmation_amount": {
          "amount": 0,
          "currency": {}
        },
        "delivery_days": 5,
        "error_messages": [
          "string"
        ],
        "estimated_delivery_date": {},
        "guaranteed_service": true,
        "insurance_amount": {
          "amount": 0,
          "currency": {}
        },
        "negotiated_rate": true,
        "other_amount": {
          "amount": 0,
          "currency": {}
        },
        "package_type": "package",
        "rate_id": {},
        "rate_type": {},
        "service_code": "string",
        "service_type": "string",
        "ship_date": "1970-01-01T00:00:00Z",
        "shipping_amount": {
          "amount": 0,
          "currency": {}
        },
        "tax_amount": {
          "amount": 0,
          "currency": {}
        },
        "trackable": true,
        "validation_status": {},
        "warning_messages": [
          "string"
        ],
        "zone": 6
      }
    ],
    "shipment_id": {},
    "status": {}
  }
}
```

> 400 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 500 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

<h3 id="get-shipping-rates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request was a success.|[calculate_rates_response_body](#schemacalculate_rates_response_body)|
|400|Bad Request|The request contained errors.|[error_response_body](#schemaerror_response_body)|
|500|Internal Server Error|An error occurred on ShipEngine's side.<br><br>> This error will automatically be reported to our engineers.<br>|[error_response_body](#schemaerror_response_body)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Get Bulk Rates

<a id="opIdcompare_bulk_rates"></a>

> Code samples

```bash
curl https://example.com/v1/rates/bulk \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "API-Key: ${API_KEY}" \
  -d '{
    "rate_options": {
      "calculate_tax_amount": true,
      "carrier_ids": [
        {}
      ],
      "is_return": true,
      "package_types": [
        "string"
      ],
      "preferred_currency": {},
      "service_codes": [
        "string"
      ]
    },
    "shipment_ids": [
      {}
    ]
  }'
```

`POST /v1/rates/bulk`

Get Bulk Shipment Rates

> Body parameter

```json
{
  "rate_options": {
    "calculate_tax_amount": true,
    "carrier_ids": [
      {}
    ],
    "is_return": true,
    "package_types": [
      "string"
    ],
    "preferred_currency": {},
    "service_codes": [
      "string"
    ]
  },
  "shipment_ids": [
    {}
  ]
}
```

<h3 id="get-bulk-rates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[compare_bulk_rates_request_body](#schemacompare_bulk_rates_request_body)|true|none|
|» rate_options|body|object|true|The rate options|
|» » calculate_tax_amount|body|boolean|false|Calculate the duties and tariffs for cross border shipments.|
|» » carrier_ids|body|[object]|true|Array of carrier ids to get rates for|
|» » is_return|body|boolean|false|Indicate if it's a return shipment|
|» » package_types|body|[string]|false|none|
|» » preferred_currency|body|object|false|none|
|» » service_codes|body|[string]|false|none|
|» *oneOf*|body|[rate_request_by_shipment_ids](#schemarate_request_by_shipment_ids)|false|none|
|» *oneOf*|body|[rate_request_by_shipments](#schemarate_request_by_shipments)|false|none|

> Example responses

> 200 Response

```json
[
  {
    "created_at": {},
    "errors": [
      {
        "error_code": {},
        "error_source": {},
        "error_type": {},
        "message": "Body of request cannot be null."
      }
    ],
    "rate_request_id": {},
    "shipment_id": {},
    "status": {}
  }
]
```

> 400 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 500 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

<h3 id="get-bulk-rates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request was a success.|[compare_bulk_rates_response_body](#schemacompare_bulk_rates_response_body)|
|400|Bad Request|The request contained errors.|[error_response_body](#schemaerror_response_body)|
|500|Internal Server Error|An error occurred on ShipEngine's side.<br><br>> This error will automatically be reported to our engineers.<br>|[error_response_body](#schemaerror_response_body)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Estimate Rates

<a id="opIdestimate_rates"></a>

> Code samples

```bash
curl https://example.com/v1/rates/estimate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "API-Key: ${API_KEY}" \
  -d '{
    "address_residential_indicator": {},
    "confirmation": {},
    "dimensions": {
      "height": 0,
      "length": 0,
      "unit": "inch",
      "width": 0
    },
    "from_city_locality": "Austin",
    "from_country_code": {},
    "from_postal_code": {},
    "from_state_province": "Austin",
    "ship_date": {},
    "to_city_locality": "Austin",
    "to_country_code": {},
    "to_postal_code": {},
    "to_state_province": "Houston",
    "weight": {
      "unit": {},
      "value": 0.1
    },
    "carrier_id": {}
  }'
```

`POST /v1/rates/estimate`

Get Rate Estimates

> Body parameter

```json
{
  "address_residential_indicator": {},
  "confirmation": {},
  "dimensions": {
    "height": 0,
    "length": 0,
    "unit": "inch",
    "width": 0
  },
  "from_city_locality": "Austin",
  "from_country_code": {},
  "from_postal_code": {},
  "from_state_province": "Austin",
  "ship_date": {},
  "to_city_locality": "Austin",
  "to_country_code": {},
  "to_postal_code": {},
  "to_state_province": "Houston",
  "weight": {
    "unit": {},
    "value": 0.1
  },
  "carrier_id": {}
}
```

<h3 id="estimate-rates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[estimate_rates_request_body](#schemaestimate_rates_request_body)|true|none|
|» address_residential_indicator|body|object|false|none|
|» confirmation|body|object|false|none|
|» dimensions|body|object|false|The dimensions of the package|
|» » height|body|number(double)|true|The length of the package, in the specified unit|
|» » length|body|number(double)|true|The length of the package, in the specified unit|
|» » unit|body|object|true|none|
|» » width|body|number(double)|true|The width of the package, in the specified unit|
|» from_city_locality|body|string|true|from postal code|
|» from_country_code|body|object|true|none|
|» from_postal_code|body|object|true|none|
|» from_state_province|body|string|true|From state province|
|» ship_date|body|string|true|ship date|
|» to_city_locality|body|string|true|The city locality the package is being shipped to|
|» to_country_code|body|object|true|none|
|» to_postal_code|body|object|true|none|
|» to_state_province|body|string|true|To state province|
|» weight|body|object|true|The weight of the package|
|» » unit|body|object|true|none|
|» » value|body|number(double)|true|The weight, in the specified unit|
|» *oneOf*|body|[rate_estimate_by_carrier_id](#schemarate_estimate_by_carrier_id)|false|none|
|» *oneOf*|body|[rate_estimate_by_carrier_ids](#schemarate_estimate_by_carrier_ids)|false|none|

> Example responses

> 200 Response

```json
[
  {
    "carrier_code": "string",
    "carrier_delivery_days": "string",
    "carrier_friendly_name": "string",
    "carrier_id": {},
    "carrier_nickname": "string",
    "confirmation_amount": {
      "amount": 0,
      "currency": {}
    },
    "delivery_days": 5,
    "error_messages": [
      "string"
    ],
    "estimated_delivery_date": {},
    "guaranteed_service": true,
    "insurance_amount": {
      "amount": 0,
      "currency": {}
    },
    "negotiated_rate": true,
    "other_amount": {
      "amount": 0,
      "currency": {}
    },
    "package_type": "package",
    "rate_type": {},
    "service_code": "string",
    "service_type": "string",
    "ship_date": "1970-01-01T00:00:00Z",
    "shipping_amount": {
      "amount": 0,
      "currency": {}
    },
    "tax_amount": {
      "amount": 0,
      "currency": {}
    },
    "trackable": true,
    "validation_status": {},
    "warning_messages": [
      "string"
    ],
    "zone": 6
  }
]
```

> 400 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 500 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

<h3 id="estimate-rates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request was a success.|[estimate_rates_response_body](#schemaestimate_rates_response_body)|
|400|Bad Request|The request contained errors.|[error_response_body](#schemaerror_response_body)|
|500|Internal Server Error|An error occurred on ShipEngine's side.<br><br>> This error will automatically be reported to our engineers.<br>|[error_response_body](#schemaerror_response_body)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Get Rate By ID

<a id="opIdget_rate_by_id"></a>

> Code samples

```bash
curl https://example.com/v1/rates/se-28529731 \
  -H 'Accept: application/json' \
  -H "API-Key: ${API_KEY}"
```

`GET /v1/rates/{rate_id}`

Retrieve a previously queried rate by its ID

<h3 id="get-rate-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rate_id|path|[se_id](#schemase_id)|true|Rate ID|

> Example responses

> 200 Response

```json
{
  "carrier_code": "string",
  "carrier_delivery_days": "string",
  "carrier_friendly_name": "string",
  "carrier_id": {},
  "carrier_nickname": "string",
  "confirmation_amount": {
    "amount": 0,
    "currency": {}
  },
  "delivery_days": 5,
  "error_messages": [
    "string"
  ],
  "estimated_delivery_date": {},
  "guaranteed_service": true,
  "insurance_amount": {
    "amount": 0,
    "currency": {}
  },
  "negotiated_rate": true,
  "other_amount": {
    "amount": 0,
    "currency": {}
  },
  "package_type": "package",
  "rate_id": {},
  "rate_type": {},
  "service_code": "string",
  "service_type": "string",
  "ship_date": "1970-01-01T00:00:00Z",
  "shipping_amount": {
    "amount": 0,
    "currency": {}
  },
  "tax_amount": {
    "amount": 0,
    "currency": {}
  },
  "trackable": true,
  "validation_status": {},
  "warning_messages": [
    "string"
  ],
  "zone": 6
}
```

> 400 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 404 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 500 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

<h3 id="get-rate-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request was a success.|[get_rate_by_id_response_body](#schemaget_rate_by_id_response_body)|
|400|Bad Request|The request contained errors.|[error_response_body](#schemaerror_response_body)|
|404|Not Found|The specified resource does not exist.|[error_response_body](#schemaerror_response_body)|
|500|Internal Server Error|An error occurred on ShipEngine's side.<br><br>> This error will automatically be reported to our engineers.<br>|[error_response_body](#schemaerror_response_body)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

<h1 id="shipengine-api-servicepoints">service_points</h1>

## List Service Points

<a id="opIdservice_points_list"></a>

> Code samples

```bash
curl https://example.com/v1/service_points/list \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "API-Key: ${API_KEY}" \
  -d '{
    "address": {
      "address_line1": "string",
      "address_line2": "string",
      "address_line3": "string",
      "city_locality": "string",
      "country_code": "string",
      "postal_code": "string",
      "state_province": "string"
    },
    "address_query": "177A Bleecker Street New York",
    "lat": 48.874518928233094,
    "long": 2.3591775711639404,
    "max_results": 25,
    "providers": [
      {
        "carrier_id": "se-123456",
        "service_code": [
          "chronoclassic"
        ]
      }
    ],
    "radius": 500
  }'
```

`POST /v1/service_points/list`

List carrier service points by location

> Body parameter

```json
{
  "address": {
    "address_line1": "string",
    "address_line2": "string",
    "address_line3": "string",
    "city_locality": "string",
    "country_code": "string",
    "postal_code": "string",
    "state_province": "string"
  },
  "address_query": "177A Bleecker Street New York",
  "lat": 48.874518928233094,
  "long": 2.3591775711639404,
  "max_results": 25,
  "providers": [
    {
      "carrier_id": "se-123456",
      "service_code": [
        "chronoclassic"
      ]
    }
  ],
  "radius": 500
}
```

<h3 id="list-service-points-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[get_service_points_request](#schemaget_service_points_request)|true|none|
|» *oneOf*|body|[get_service_points_request_body](#schemaget_service_points_request_body)|false|A get service points request body. Caller must provide exactly one of address_query, address, or lat / long pair.|

> Example responses

> 200 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "lat": 48.842608,
  "long": 0.032875,
  "service_points": [
    {
      "address_line1": "PLACE DU CANADA",
      "carrier_code": "chronopost",
      "city_locality": "TRUN",
      "company_name": "My fancy company name",
      "country_code": "FR",
      "distance_in_meters": 728.9959308847579,
      "features": [
        "drop_off_point"
      ],
      "hours_of_operation": {
        "friday": [
          {
            "close": "12:00",
            "open": "09:15"
          }
        ],
        "monday": [
          {
            "close": "12:00",
            "open": "09:15"
          }
        ],
        "saturday": [
          {
            "close": "12:00",
            "open": "09:15"
          }
        ],
        "sunday": [
          {
            "close": "12:00",
            "open": "09:15"
          }
        ],
        "thursday": [
          {
            "close": "12:00",
            "open": "09:15"
          }
        ],
        "tuesday": [
          {
            "close": "12:00",
            "open": "09:15"
          }
        ],
        "wednesday": [
          {
            "close": "12:00",
            "open": "09:15"
          }
        ]
      },
      "lat": 48.842608,
      "long": 0.032875,
      "phone_number": "555-555-5555",
      "postal_code": "61160",
      "service_codes": [
        "chronoclassic"
      ],
      "service_point_id": "614940",
      "state_province": "TRUN"
    }
  ]
}
```

> 400 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 404 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 500 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

<h3 id="list-service-points-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request was a success.|[list_service_points_response_body](#schemalist_service_points_response_body)|
|400|Bad Request|The request contained errors.|[error_response_body](#schemaerror_response_body)|
|404|Not Found|The specified resource does not exist.|[error_response_body](#schemaerror_response_body)|
|500|Internal Server Error|An error occurred on ShipEngine's side.<br><br>> This error will automatically be reported to our engineers.<br>|[error_response_body](#schemaerror_response_body)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Get Service Point By ID

<a id="opIdservice_points_get_by_id"></a>

> Code samples

```bash
curl https://example.com/v1/service_points/stamps_com/CA/614940 \
  -H 'Accept: application/json' \
  -H "API-Key: ${API_KEY}"
```

`GET /v1/service_points/{carrier_code}/{country_code}/{service_point_id}`

Returns a carrier service point by using the service_point_id

<h3 id="get-service-point-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|carrier_code|path|string|true|Carrier code|
|country_code|path|string|true|A two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)<br>|
|service_point_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "service_point": {
    "address_line1": "PLACE DU CANADA",
    "carrier_code": "chronopost",
    "city_locality": "TRUN",
    "company_name": "My fancy company name",
    "country_code": "FR",
    "features": [
      "drop_off_point"
    ],
    "hours_of_operation": {
      "friday": [
        {
          "close": "12:00",
          "open": "09:15"
        }
      ],
      "monday": [
        {
          "close": "12:00",
          "open": "09:15"
        }
      ],
      "saturday": [
        {
          "close": "12:00",
          "open": "09:15"
        }
      ],
      "sunday": [
        {
          "close": "12:00",
          "open": "09:15"
        }
      ],
      "thursday": [
        {
          "close": "12:00",
          "open": "09:15"
        }
      ],
      "tuesday": [
        {
          "close": "12:00",
          "open": "09:15"
        }
      ],
      "wednesday": [
        {
          "close": "12:00",
          "open": "09:15"
        }
      ]
    },
    "lat": 48.842608,
    "long": 0.032875,
    "phone_number": "555-555-5555",
    "postal_code": "61160",
    "service_codes": [
      "string"
    ],
    "service_point_id": "614940",
    "state_province": "TRUN"
  }
}
```

> 400 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 404 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 500 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

<h3 id="get-service-point-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request was a success.|[get_service_point_by_id_response_body](#schemaget_service_point_by_id_response_body)|
|400|Bad Request|The request contained errors.|[error_response_body](#schemaerror_response_body)|
|404|Not Found|The specified resource does not exist.|[error_response_body](#schemaerror_response_body)|
|500|Internal Server Error|An error occurred on ShipEngine's side.<br><br>> This error will automatically be reported to our engineers.<br>|[error_response_body](#schemaerror_response_body)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

<h1 id="shipengine-api-shipments">shipments</h1>

Shipments are at the center of the ShipEngine API.  A shipment is the first step in [creating a shipping label](https://www.shipengine.com/docs/labels/create-a-label/), or [creating a manifest](https://www.shipengine.com/docs/shipping/manifests/).  It's also essential for [getting shipping rates](https://www.shipengine.com/docs/rates/).


<a href="https://www.shipengine.com/docs/shipping/create-a-shipment/">Learn about the shipment object model concept, and how to persist and re-use shipment data inside ShipEngine.</a>

## List Shipments

<a id="opIdlist_shipments"></a>

> Code samples

```bash
curl https://example.com/v1/shipments \
  -H 'Accept: application/json' \
  -H "API-Key: ${API_KEY}"
```

`GET /v1/shipments`

Get list of Shipments

<h3 id="list-shipments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|shipment_status|query|[shipment_status](#schemashipment_status)|false|none|
|batch_id|query|[se_id](#schemase_id)|false|Batch ID|
|tag|query|string|false|Search for shipments based on the custom tag added to the shipment object|
|created_at_start|query|string(date-time)|false|Used to create a filter for when a resource was created (ex. A shipment that was created after a certain time)|
|created_at_end|query|string(date-time)|false|Used to create a filter for when a resource was created, (ex. A shipment that was created before a certain time)|
|modified_at_start|query|string(date-time)|false|Used to create a filter for when a resource was modified (ex. A shipment that was modified after a certain time)|
|modified_at_end|query|string(date-time)|false|Used to create a filter for when a resource was modified (ex. A shipment that was modified before a certain time)|
|page|query|integer(int32)|false|Return a specific page of results. Defaults to the first page. If set to a number that's greater than the number of pages of results, an empty page is returned.<br>|
|page_size|query|integer(int32)|false|The number of results to return per response.|
|sales_order_id|query|string|false|Sales Order ID|
|sort_dir|query|object|false|Controls the sort order of the query.|
|sort_by|query|[shipments_sort_by](#schemashipments_sort_by)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|shipment_status|pending|
|shipment_status|processing|
|shipment_status|label_purchased|
|shipment_status|cancelled|
|sort_by|modified_at|
|sort_by|created_at|

> Example responses

> 200 Response

```json
{
  "links": {
    "first": {
      "href": {},
      "type": "string"
    },
    "last": {
      "href": {},
      "type": "string"
    },
    "next": {
      "href": {},
      "type": "string"
    },
    "prev": {
      "href": {},
      "type": "string"
    }
  },
  "page": "????",
  "pages": 1,
  "shipments": [
    {
      "advanced_options": {
        "bill_to_account": null,
        "bill_to_country_code": null,
        "bill_to_party": null,
        "bill_to_postal_code": null,
        "collect_on_delivery": {
          "payment_amount": {
            "amount": 0,
            "currency": {}
          },
          "payment_type": {}
        },
        "contains_alcohol": false,
        "custom_field1": null,
        "custom_field2": null,
        "custom_field3": null,
        "delivered_duty_paid": false,
        "dry_ice": false,
        "dry_ice_weight": {
          "unit": {},
          "value": 0.1
        },
        "fedex_freight": {
          "booking_confirmation": "string",
          "shipper_load_and_count": "string"
        },
        "freight_class": 77.5,
        "non_machinable": false,
        "origin_type": null,
        "saturday_delivery": false,
        "shipper_release": null,
        "third_party_consignee": false,
        "use_ups_ground_freight_pricing": null
      },
      "carrier_id": {},
      "confirmation": "none",
      "created_at": {},
      "customs": null,
      "external_order_id": "string",
      "external_shipment_id": "string",
      "insurance_provider": "none",
      "items": [],
      "modified_at": {},
      "order_source_code": {},
      "origin_type": {},
      "packages": [
        {
          "content_description": "Hand knitted wool socks",
          "dimensions": {
            "height": 0,
            "length": 0,
            "unit": "inch",
            "width": 0
          },
          "external_package_id": "string",
          "form_download": {
            "href": {},
            "type": "string"
          },
          "insured_value": [
            {
              "amount": 0,
              "currency": "usd"
            }
          ],
          "label_download": {
            "href": {},
            "pdf": {},
            "png": {},
            "zpl": {}
          },
          "label_messages": {
            "reference1": null,
            "reference2": null,
            "reference3": null
          },
          "package_code": {},
          "package_id": {},
          "sequence": 0,
          "tracking_number": {},
          "weight": {
            "unit": {},
            "value": 0.1
          }
        }
      ],
      "return_to": {
        "address_line1": "1999 Bishop Grandin Blvd.",
        "address_line2": "Unit 408",
        "address_line3": "Building #7",
        "address_residential_indicator": "no",
        "city_locality": "Winnipeg",
        "company_name": "The Home Depot",
        "country_code": {},
        "email": "example@example.com",
        "name": "John Doe",
        "phone": "+1 204-253-9411 ext. 123",
        "postal_code": {},
        "state_province": "Manitoba",
        "instructions": "string"
      },
      "service_code": {},
      "ship_date": {},
      "ship_from": {
        "address_line1": "1999 Bishop Grandin Blvd.",
        "address_line2": "Unit 408",
        "address_line3": "Building #7",
        "address_residential_indicator": "no",
        "city_locality": "Winnipeg",
        "company_name": "The Home Depot",
        "country_code": {},
        "email": "example@example.com",
        "name": "John Doe",
        "phone": "+1 204-253-9411 ext. 123",
        "postal_code": {},
        "state_province": "Manitoba",
        "instructions": "string"
      },
      "ship_to": {
        "address_line1": "1999 Bishop Grandin Blvd.",
        "address_line2": "Unit 408",
        "address_line3": "Building #7",
        "address_residential_indicator": "no",
        "city_locality": "Winnipeg",
        "company_name": "The Home Depot",
        "country_code": {},
        "email": "example@example.com",
        "name": "John Doe",
        "phone": "+1 204-253-9411 ext. 123",
        "postal_code": {},
        "state_province": "Manitoba",
        "instructions": "string"
      },
      "shipment_id": {},
      "shipment_number": "string",
      "shipment_status": "pending",
      "tags": [],
      "tax_identifiers": [
        {
          "identifier_type": {},
          "issuing_authority": "string",
          "taxable_entity_type": {},
          "value": "string"
        }
      ],
      "total_weight": {
        "unit": {},
        "value": 0.1
      },
      "warehouse_id": null
    }
  ],
  "total": 1990
}
```

> 400 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 404 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 500 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

<h3 id="list-shipments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request was a success.|[list_shipments_response_body](#schemalist_shipments_response_body)|
|400|Bad Request|The request contained errors.|[error_response_body](#schemaerror_response_body)|
|404|Not Found|The specified resource does not exist.|[error_response_body](#schemaerror_response_body)|
|500|Internal Server Error|An error occurred on ShipEngine's side.<br><br>> This error will automatically be reported to our engineers.<br>|[error_response_body](#schemaerror_response_body)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Create Shipments

<a id="opIdcreate_shipments"></a>

> Code samples

```bash
curl https://example.com/v1/shipments \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "API-Key: ${API_KEY}" \
  -d '{
    "shipments": [
      {
        "validate_address": "no_validation",
        "advanced_options": {
          "bill_to_account": null,
          "bill_to_country_code": null,
          "bill_to_party": null,
          "bill_to_postal_code": null,
          "collect_on_delivery": {
            "payment_amount": {
              "amount": 0,
              "currency": {}
            },
            "payment_type": {}
          },
          "contains_alcohol": false,
          "custom_field1": null,
          "custom_field2": null,
          "custom_field3": null,
          "delivered_duty_paid": false,
          "dry_ice": false,
          "dry_ice_weight": {
            "unit": {},
            "value": 0.1
          },
          "fedex_freight": {
            "booking_confirmation": "string",
            "shipper_load_and_count": "string"
          },
          "freight_class": 77.5,
          "non_machinable": false,
          "origin_type": null,
          "saturday_delivery": false,
          "shipper_release": null,
          "third_party_consignee": false,
          "use_ups_ground_freight_pricing": null
        },
        "carrier_id": {},
        "confirmation": "none",
        "customs": null,
        "external_order_id": "string",
        "external_shipment_id": "string",
        "insurance_provider": "none",
        "items": [],
        "order_source_code": {},
        "origin_type": {},
        "packages": [
          {
            "content_description": "Hand knitted wool socks",
            "dimensions": {
              "height": 0,
              "length": 0,
              "unit": "inch",
              "width": 0
            },
            "external_package_id": "string",
            "insured_value": [
              {
                "amount": 0,
                "currency": "usd"
              }
            ],
            "label_messages": {
              "reference1": null,
              "reference2": null,
              "reference3": null
            },
            "package_code": {},
            "package_id": {},
            "weight": {
              "unit": {},
              "value": 0.1
            }
          }
        ],
        "return_to": {
          "address_line1": "1999 Bishop Grandin Blvd.",
          "address_line2": "Unit 408",
          "address_line3": "Building #7",
          "address_residential_indicator": "no",
          "city_locality": "Winnipeg",
          "company_name": "The Home Depot",
          "country_code": {},
          "email": "example@example.com",
          "name": "John Doe",
          "phone": "+1 204-253-9411 ext. 123",
          "postal_code": {},
          "state_province": "Manitoba",
          "instructions": "string"
        },
        "service_code": {},
        "ship_date": {},
        "ship_from": {
          "address_line1": "1999 Bishop Grandin Blvd.",
          "address_line2": "Unit 408",
          "address_line3": "Building #7",
          "address_residential_indicator": "no",
          "city_locality": "Winnipeg",
          "company_name": "The Home Depot",
          "country_code": {},
          "email": "example@example.com",
          "name": "John Doe",
          "phone": "+1 204-253-9411 ext. 123",
          "postal_code": {},
          "state_province": "Manitoba",
          "instructions": "string"
        },
        "ship_to": {
          "address_line1": "1999 Bishop Grandin Blvd.",
          "address_line2": "Unit 408",
          "address_line3": "Building #7",
          "address_residential_indicator": "no",
          "city_locality": "Winnipeg",
          "company_name": "The Home Depot",
          "country_code": {},
          "email": "example@example.com",
          "name": "John Doe",
          "phone": "+1 204-253-9411 ext. 123",
          "postal_code": {},
          "state_province": "Manitoba",
          "instructions": "string"
        },
        "shipment_number": "string",
        "tax_identifiers": [
          {
            "identifier_type": {},
            "issuing_authority": "string",
            "taxable_entity_type": {},
            "value": "string"
          }
        ],
        "warehouse_id": null
      }
    ]
  }'
```

`POST /v1/shipments`

Create one or multiple shipments.

> Body parameter

```json
{
  "shipments": [
    {
      "validate_address": "no_validation",
      "advanced_options": {
        "bill_to_account": null,
        "bill_to_country_code": null,
        "bill_to_party": null,
        "bill_to_postal_code": null,
        "collect_on_delivery": {
          "payment_amount": {
            "amount": 0,
            "currency": {}
          },
          "payment_type": {}
        },
        "contains_alcohol": false,
        "custom_field1": null,
        "custom_field2": null,
        "custom_field3": null,
        "delivered_duty_paid": false,
        "dry_ice": false,
        "dry_ice_weight": {
          "unit": {},
          "value": 0.1
        },
        "fedex_freight": {
          "booking_confirmation": "string",
          "shipper_load_and_count": "string"
        },
        "freight_class": 77.5,
        "non_machinable": false,
        "origin_type": null,
        "saturday_delivery": false,
        "shipper_release": null,
        "third_party_consignee": false,
        "use_ups_ground_freight_pricing": null
      },
      "carrier_id": {},
      "confirmation": "none",
      "customs": null,
      "external_order_id": "string",
      "external_shipment_id": "string",
      "insurance_provider": "none",
      "items": [],
      "order_source_code": {},
      "origin_type": {},
      "packages": [
        {
          "content_description": "Hand knitted wool socks",
          "dimensions": {
            "height": 0,
            "length": 0,
            "unit": "inch",
            "width": 0
          },
          "external_package_id": "string",
          "insured_value": [
            {
              "amount": 0,
              "currency": "usd"
            }
          ],
          "label_messages": {
            "reference1": null,
            "reference2": null,
            "reference3": null
          },
          "package_code": {},
          "package_id": {},
          "weight": {
            "unit": {},
            "value": 0.1
          }
        }
      ],
      "return_to": {
        "address_line1": "1999 Bishop Grandin Blvd.",
        "address_line2": "Unit 408",
        "address_line3": "Building #7",
        "address_residential_indicator": "no",
        "city_locality": "Winnipeg",
        "company_name": "The Home Depot",
        "country_code": {},
        "email": "example@example.com",
        "name": "John Doe",
        "phone": "+1 204-253-9411 ext. 123",
        "postal_code": {},
        "state_province": "Manitoba",
        "instructions": "string"
      },
      "service_code": {},
      "ship_date": {},
      "ship_from": {
        "address_line1": "1999 Bishop Grandin Blvd.",
        "address_line2": "Unit 408",
        "address_line3": "Building #7",
        "address_residential_indicator": "no",
        "city_locality": "Winnipeg",
        "company_name": "The Home Depot",
        "country_code": {},
        "email": "example@example.com",
        "name": "John Doe",
        "phone": "+1 204-253-9411 ext. 123",
        "postal_code": {},
        "state_province": "Manitoba",
        "instructions": "string"
      },
      "ship_to": {
        "address_line1": "1999 Bishop Grandin Blvd.",
        "address_line2": "Unit 408",
        "address_line3": "Building #7",
        "address_residential_indicator": "no",
        "city_locality": "Winnipeg",
        "company_name": "The Home Depot",
        "country_code": {},
        "email": "example@example.com",
        "name": "John Doe",
        "phone": "+1 204-253-9411 ext. 123",
        "postal_code": {},
        "state_province": "Manitoba",
        "instructions": "string"
      },
      "shipment_number": "string",
      "tax_identifiers": [
        {
          "identifier_type": {},
          "issuing_authority": "string",
          "taxable_entity_type": {},
          "value": "string"
        }
      ],
      "warehouse_id": null
    }
  ]
}
```

<h3 id="create-shipments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[create_shipments_request_body](#schemacreate_shipments_request_body)|true|none|
|» shipments|body|[object]|true|An array of shipments to be created.|
|» » validate_address|body|object|false|none|
|» » advanced_options|body|object|false|Advanced shipment options.  These are entirely optional.|
|» » » bill_to_account|body|string \| null|false|This field is used to [bill shipping costs to a third party](https://www.shipengine.com/docs/shipping/bill-to-third-party/).  This field must be used in conjunction with the `bill_to_country_code`, `bill_to_party`, and `bill_to_postal_code` fields.<br>|
|» » » bill_to_country_code|body|object \| null|false|The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1) of the third-party that is responsible for shipping costs.<br>|
|» » » bill_to_party|body|object \| null|false|Indicates whether to bill shipping costs to the recipient or to a third-party.  When billing to a third-party, the `bill_to_account`, `bill_to_country_code`, and `bill_to_postal_code` fields must also be set.<br>|
|» » » bill_to_postal_code|body|string \| null|false|The postal code of the third-party that is responsible for shipping costs.<br>|
|» » » collect_on_delivery|body|[collect_on_delivery](#schemacollect_on_delivery)|false|Defer payment until package is delivered, instead of when it is ordered.|
|» » » contains_alcohol|body|boolean|false|Indicates that the shipment contains alcohol.|
|» » » custom_field1|body|string \| null|false|An arbitrary field that can be used to store information about the shipment.<br>|
|» » » custom_field2|body|string \| null|false|An arbitrary field that can be used to store information about the shipment.<br>|
|» » » custom_field3|body|string \| null|false|An arbitrary field that can be used to store information about the shipment.<br>|
|» » » delivered_duty_paid|body|boolean|false|Indicates that the shipper is paying the international delivery duties for this shipment.  This option is supported by UPS, FedEx, and DHL Express.<br>|
|» » » dry_ice|body|boolean|false|Indicates if the shipment contain dry ice|
|» » » dry_ice_weight|body|object \| null|false|The weight of the dry ice in the shipment|
|» » » » unit|body|object|true|none|
|» » » » value|body|number(double)|true|The weight, in the specified unit|
|» » » fedex_freight|body|object|false|Provide details for the Fedex freight service|
|» » » » booking_confirmation|body|string|false|none|
|» » » » shipper_load_and_count|body|string|false|none|
|» » » freight_class|body|string \| null|false|The National Motor Freight Traffic Association [freight class](http://www.nmfta.org/pages/nmfc?AspxAutoDetectCookieSupport=1), such as "77.5", "110", or "250".<br>|
|» » » non_machinable|body|boolean|false|Indicates that the package cannot be processed automatically because it is too large or irregularly shaped. This is primarily for USPS shipments.  See [Section 1.2 of the USPS parcel standards](https://pe.usps.com/text/dmm300/101.htm#ep1047495) for details.<br>|
|» » » origin_type|body|object \| null|false|none|
|» » » saturday_delivery|body|boolean|false|Enables Saturday delivery, if supported by the carrier.|
|» » » shipper_release|body|boolean \| null|false|none|
|» » » third_party_consignee|body|boolean|false|Third Party Consignee option is a value-added service that allows the shipper to supply goods without commercial invoices being attached|
|» » » use_ups_ground_freight_pricing|body|boolean \| null|false|Whether to use [UPS Ground Freight pricing](https://www.shipengine.com/docs/shipping/ups-ground-freight/).  If enabled, then a `freight_class` must also be specified.<br>|
|» » carrier_id|body|object|true|The carrier account that is billed for the shipping charges|
|» » confirmation|body|object|false|The type of delivery confirmation that is required for this shipment.|
|» » customs|body|object \| null|false|Customs information.  This is usually only needed for international shipments.<br>|
|» » » contents|body|object|true|The type of contents in this shipment.  This may impact import duties or customs treatment.|
|» » » customs_items|body|[[customs_item](#schemacustoms_item)]|false|Customs declarations for each item in the shipment.|
|» » » non_delivery|body|object|true|Indicates what to do if a package is unable to be delivered.|
|» » external_order_id|body|string \| null|false|ID that the Order Source assigned|
|» » external_shipment_id|body|string \| null|false|A unique user-defined key to identify a shipment.  This can be used to retrieve the shipment.<br><br>> **Warning:** The `external_shipment_id` is limited to 50 characters. Any additional characters will be truncated.<br>|
|» » insurance_provider|body|object|false|The insurance provider to use for any insured packages in the shipment.<br>|
|» » items|body|[object]|false|Describe the packages included in this shipment as related to potential metadata that was imported from<br>external order sources<br>|
|» » » asin|body|string \| null|false|Amazon Standard Identification Number|
|» » » external_order_id|body|string \| null|false|external order id|
|» » » external_order_item_id|body|string \| null|false|external order item id|
|» » » name|body|string|false|item name|
|» » » order_source_code|body|object|false|none|
|» » » quantity|body|integer(int32)|false|The quantity of this item included in the shipment|
|» » » sales_order_id|body|string \| null|false|sales order id|
|» » » sales_order_item_id|body|string \| null|false|sales order item id|
|» » » sku|body|string \| null|false|Item Stock Keeping Unit|
|» » order_source_code|body|object|false|none|
|» » origin_type|body|object \| null|false|Indicates if the package will be picked up or dropped off by the carrier|
|» » packages|body|[object]|false|The packages in the shipment.<br><br>> **Note:** Some carriers only allow one package per shipment.  If you attempt to create a multi-package shipment for a carrier that doesn't allow it, an error will be returned.<br>|
|» » » content_description|body|string \| null|false|A short description of the package content. Required for shipments moving to, from, and through Mexico.<br>|
|» » » dimensions|body|object|false|The package dimensions|
|» » » » height|body|number(double)|true|The length of the package, in the specified unit|
|» » » » length|body|number(double)|true|The length of the package, in the specified unit|
|» » » » unit|body|object|true|none|
|» » » » width|body|number(double)|true|The width of the package, in the specified unit|
|» » » external_package_id|body|string|false|An external package id.|
|» » » insured_value|body|object|false|The insured value of the package.  Requires the `insurance_provider` field of the shipment to be set.<br>|
|» » » » amount|body|number(double)|true|The monetary amount, in the specified currency.|
|» » » » currency|body|object|true|none|
|» » » label_messages|body|object|false|none|
|» » » » reference1|body|string \| null|true|The first line of the custom label message.  Some carriers may prefix this line with something like "REF", "Reference", "Trx Ref No.", etc.<br>|
|» » » » reference2|body|string \| null|true|The second line of the custom label message.  Some carriers may prefix this line with something like "INV", "Reference 2", "Trx Ref No.", etc.<br>|
|» » » » reference3|body|string \| null|true|The third line of the custom label message.  Some carriers may prefix this line with something like "PO", "Reference 3", etc.<br>|
|» » » package_code|body|object|false|The [package type](https://www.shipengine.com/docs/reference/list-carrier-packages/), such as `thick_envelope`, `small_flat_rate_box`, `large_package`, etc.  The code `package` indicates a custom or unknown package type.<br>|
|» » » package_id|body|object|false|A string that uniquely identifies this [package type](https://www.shipengine.com/docs/reference/list-carrier-packages/)|
|» » » weight|body|object|true|The package weight|
|» » » » unit|body|object|true|none|
|» » » » value|body|number(double)|true|The weight, in the specified unit|
|» » return_to|body|object|false|The return address for this shipment.  Defaults to the `ship_from` address.<br>|
|» » » address_line1|body|string|true|The first line of the street address.  For some addresses, this may be the only line.  Other addresses may require 2 or 3 lines.<br>|
|» » » address_line2|body|string \| null|false|The second line of the street address.  For some addresses, this line may not be needed.<br>|
|» » » address_line3|body|string \| null|false|The third line of the street address.  For some addresses, this line may not be needed.<br>|
|» » » address_residential_indicator|body|object|true|Indicates whether this is a residential address.|
|» » » city_locality|body|string|true|The name of the city or locality|
|» » » company_name|body|string \| null|false|If this is a business address, then the company name should be specified here.<br>|
|» » » country_code|body|object|true|The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)<br>|
|» » » email|body|string \| null|false|Email for the address owner.<br>|
|» » » name|body|string|true|The name of a contact person at this address.  This field may be set instead of - or in addition to - the `company_name` field.<br>|
|» » » phone|body|string|true|The phone number of a contact person at this address.  The format of this phone number varies depending on the country.<br>|
|» » » postal_code|body|object|true|none|
|» » » state_province|body|string|true|The state or province.  For some countries (including the U.S.) only abbreviations are allowed.  Other countries allow the full name or abbreviation.<br>|
|» » » instructions|body|string \| null|false|Additional text about how to handle the shipment at this address.<br>|
|» » service_code|body|object|true|The [carrier service](https://www.shipengine.com/docs/shipping/use-a-carrier-service/) used to ship the package, such as `fedex_ground`, `usps_first_class_mail`, `flat_rate_envelope`, etc.<br>|
|» » ship_date|body|object|false|The date that the shipment was (or will be) shippped.  ShipEngine will take the day of week into consideration. For example, if the carrier does not operate on Sundays, then a package that would have shipped on Sunday will ship on Monday instead.<br>|
|» » ship_from|body|object|true|The shipment's origin address. If you frequently ship from the same location, consider [creating a warehouse](https://www.shipengine.com/docs/reference/create-warehouse/).  Then you can simply specify the `warehouse_id` rather than the complete address each time.<br>|
|» » » address_line1|body|string|true|The first line of the street address.  For some addresses, this may be the only line.  Other addresses may require 2 or 3 lines.<br>|
|» » » address_line2|body|string \| null|false|The second line of the street address.  For some addresses, this line may not be needed.<br>|
|» » » address_line3|body|string \| null|false|The third line of the street address.  For some addresses, this line may not be needed.<br>|
|» » » address_residential_indicator|body|object|true|Indicates whether this is a residential address.|
|» » » city_locality|body|string|true|The name of the city or locality|
|» » » company_name|body|string \| null|false|If this is a business address, then the company name should be specified here.<br>|
|» » » country_code|body|object|true|The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)<br>|
|» » » email|body|string \| null|false|Email for the address owner.<br>|
|» » » name|body|string|true|The name of a contact person at this address.  This field may be set instead of - or in addition to - the `company_name` field.<br>|
|» » » phone|body|string|true|The phone number of a contact person at this address.  The format of this phone number varies depending on the country.<br>|
|» » » postal_code|body|object|true|none|
|» » » state_province|body|string|true|The state or province.  For some countries (including the U.S.) only abbreviations are allowed.  Other countries allow the full name or abbreviation.<br>|
|» » » instructions|body|string \| null|false|Additional text about how to handle the shipment at this address.<br>|
|» » ship_to|body|object|true|The recipient's mailing address|
|» » » address_line1|body|string|true|The first line of the street address.  For some addresses, this may be the only line.  Other addresses may require 2 or 3 lines.<br>|
|» » » address_line2|body|string \| null|false|The second line of the street address.  For some addresses, this line may not be needed.<br>|
|» » » address_line3|body|string \| null|false|The third line of the street address.  For some addresses, this line may not be needed.<br>|
|» » » address_residential_indicator|body|object|true|Indicates whether this is a residential address.|
|» » » city_locality|body|string|true|The name of the city or locality|
|» » » company_name|body|string \| null|false|If this is a business address, then the company name should be specified here.<br>|
|» » » country_code|body|object|true|The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)<br>|
|» » » email|body|string \| null|false|Email for the address owner.<br>|
|» » » name|body|string|true|The name of a contact person at this address.  This field may be set instead of - or in addition to - the `company_name` field.<br>|
|» » » phone|body|string|true|The phone number of a contact person at this address.  The format of this phone number varies depending on the country.<br>|
|» » » postal_code|body|object|true|none|
|» » » state_province|body|string|true|The state or province.  For some countries (including the U.S.) only abbreviations are allowed.  Other countries allow the full name or abbreviation.<br>|
|» » » instructions|body|string \| null|false|Additional text about how to handle the shipment at this address.<br>|
|» » shipment_number|body|string \| null|false|A non-unique user-defined number used to identify a shipment.  If undefined, this will match the external_shipment_id of the shipment.<br><br>> **Warning:** The `shipment_number` is limited to 50 characters. Any additional characters will be truncated.<br>|
|» » tax_identifiers|body|[object]|false|none|
|» » » identifier_type|body|object|true|none|
|» » » issuing_authority|body|string|true|The authority that issued this tax. This must be a valid 2 character ISO 3166 Alpha 2 country code.|
|» » » taxable_entity_type|body|object|true|none|
|» » » value|body|string|true|The value of the identifier|
|» » warehouse_id|body|object \| null|false|The [warehouse](https://www.shipengine.com/docs/shipping/ship-from-a-warehouse/) that the shipment is being shipped from.  Either `warehouse_id` or `ship_from` must be specified.<br>|

> Example responses

> 200 Response

```json
{
  "has_errors": false,
  "shipments": [
    {
      "advanced_options": {
        "bill_to_account": null,
        "bill_to_country_code": null,
        "bill_to_party": null,
        "bill_to_postal_code": null,
        "collect_on_delivery": {
          "payment_amount": {
            "amount": 0,
            "currency": {}
          },
          "payment_type": {}
        },
        "contains_alcohol": false,
        "custom_field1": null,
        "custom_field2": null,
        "custom_field3": null,
        "delivered_duty_paid": false,
        "dry_ice": false,
        "dry_ice_weight": {
          "unit": {},
          "value": 0.1
        },
        "fedex_freight": {
          "booking_confirmation": "string",
          "shipper_load_and_count": "string"
        },
        "freight_class": 77.5,
        "non_machinable": false,
        "origin_type": null,
        "saturday_delivery": false,
        "shipper_release": null,
        "third_party_consignee": false,
        "use_ups_ground_freight_pricing": null
      },
      "carrier_id": {},
      "confirmation": "none",
      "created_at": {},
      "customs": null,
      "external_order_id": "string",
      "external_shipment_id": "string",
      "insurance_provider": "none",
      "items": [],
      "modified_at": {},
      "order_source_code": {},
      "origin_type": {},
      "packages": [
        {
          "content_description": "Hand knitted wool socks",
          "dimensions": {
            "height": 0,
            "length": 0,
            "unit": "inch",
            "width": 0
          },
          "external_package_id": "string",
          "form_download": {
            "href": {},
            "type": "string"
          },
          "insured_value": [
            {
              "amount": 0,
              "currency": "usd"
            }
          ],
          "label_download": {
            "href": {},
            "pdf": {},
            "png": {},
            "zpl": {}
          },
          "label_messages": {
            "reference1": null,
            "reference2": null,
            "reference3": null
          },
          "package_code": {},
          "package_id": {},
          "sequence": 0,
          "tracking_number": {},
          "weight": {
            "unit": {},
            "value": 0.1
          }
        }
      ],
      "return_to": {
        "address_line1": "1999 Bishop Grandin Blvd.",
        "address_line2": "Unit 408",
        "address_line3": "Building #7",
        "address_residential_indicator": "no",
        "city_locality": "Winnipeg",
        "company_name": "The Home Depot",
        "country_code": {},
        "email": "example@example.com",
        "name": "John Doe",
        "phone": "+1 204-253-9411 ext. 123",
        "postal_code": {},
        "state_province": "Manitoba",
        "instructions": "string"
      },
      "service_code": {},
      "ship_date": {},
      "ship_from": {
        "address_line1": "1999 Bishop Grandin Blvd.",
        "address_line2": "Unit 408",
        "address_line3": "Building #7",
        "address_residential_indicator": "no",
        "city_locality": "Winnipeg",
        "company_name": "The Home Depot",
        "country_code": {},
        "email": "example@example.com",
        "name": "John Doe",
        "phone": "+1 204-253-9411 ext. 123",
        "postal_code": {},
        "state_province": "Manitoba",
        "instructions": "string"
      },
      "ship_to": {
        "address_line1": "1999 Bishop Grandin Blvd.",
        "address_line2": "Unit 408",
        "address_line3": "Building #7",
        "address_residential_indicator": "no",
        "city_locality": "Winnipeg",
        "company_name": "The Home Depot",
        "country_code": {},
        "email": "example@example.com",
        "name": "John Doe",
        "phone": "+1 204-253-9411 ext. 123",
        "postal_code": {},
        "state_province": "Manitoba",
        "instructions": "string"
      },
      "shipment_id": {},
      "shipment_number": "string",
      "shipment_status": "pending",
      "tags": [],
      "tax_identifiers": [
        {
          "identifier_type": {},
          "issuing_authority": "string",
          "taxable_entity_type": {},
          "value": "string"
        }
      ],
      "total_weight": {
        "unit": {},
        "value": 0.1
      },
      "warehouse_id": null,
      "address_validation": {
        "matched_address": {
          "address_line1": "1999 Bishop Grandin Blvd.",
          "address_line2": "Unit 408",
          "address_line3": "Building #7",
          "address_residential_indicator": "no",
          "city_locality": "Winnipeg",
          "company_name": "The Home Depot",
          "country_code": {},
          "email": "example@example.com",
          "name": "John Doe",
          "phone": "+1 204-253-9411 ext. 123",
          "postal_code": {},
          "state_province": "Manitoba"
        },
        "messages": [],
        "original_address": {
          "address_line1": "1999 Bishop Grandin Blvd.",
          "address_line2": "Unit 408",
          "address_line3": "Building #7",
          "address_residential_indicator": "no",
          "city_locality": "Winnipeg",
          "company_name": "The Home Depot",
          "country_code": {},
          "email": "example@example.com",
          "name": "John Doe",
          "phone": "+1 204-253-9411 ext. 123",
          "postal_code": {},
          "state_province": "Manitoba"
        },
        "status": {}
      },
      "errors": [
        "Parameter value '100000000.00' is out of range."
      ]
    }
  ]
}
```

> 400 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 500 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

<h3 id="create-shipments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The requested object creation was a success.|[create_shipments_response_body](#schemacreate_shipments_response_body)|
|400|Bad Request|The request contained errors.|[error_response_body](#schemaerror_response_body)|
|500|Internal Server Error|An error occurred on ShipEngine's side.<br><br>> This error will automatically be reported to our engineers.<br>|[error_response_body](#schemaerror_response_body)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Get Shipment By External ID

<a id="opIdget_shipment_by_external_id"></a>

> Code samples

```bash
curl https://example.com/v1/shipments/external_shipment_id/0bcb569d-1727-4ff9-ab49-b2fec0cee5ae \
  -H 'Accept: application/json' \
  -H "API-Key: ${API_KEY}"
```

`GET /v1/shipments/external_shipment_id/{external_shipment_id}`

Query Shipments created using your own custom ID convention using this endpint

<h3 id="get-shipment-by-external-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|external_shipment_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "advanced_options": {
    "bill_to_account": null,
    "bill_to_country_code": null,
    "bill_to_party": null,
    "bill_to_postal_code": null,
    "collect_on_delivery": {
      "payment_amount": {
        "amount": 0,
        "currency": {}
      },
      "payment_type": {}
    },
    "contains_alcohol": false,
    "custom_field1": null,
    "custom_field2": null,
    "custom_field3": null,
    "delivered_duty_paid": false,
    "dry_ice": false,
    "dry_ice_weight": {
      "unit": {},
      "value": 0.1
    },
    "fedex_freight": {
      "booking_confirmation": "string",
      "shipper_load_and_count": "string"
    },
    "freight_class": 77.5,
    "non_machinable": false,
    "origin_type": null,
    "saturday_delivery": false,
    "shipper_release": null,
    "third_party_consignee": false,
    "use_ups_ground_freight_pricing": null
  },
  "carrier_id": {},
  "confirmation": "none",
  "created_at": {},
  "customs": null,
  "external_order_id": "string",
  "external_shipment_id": "string",
  "insurance_provider": "none",
  "items": [],
  "modified_at": {},
  "order_source_code": {},
  "origin_type": {},
  "packages": [
    {
      "content_description": "Hand knitted wool socks",
      "dimensions": {
        "height": 0,
        "length": 0,
        "unit": "inch",
        "width": 0
      },
      "external_package_id": "string",
      "form_download": {
        "href": {},
        "type": "string"
      },
      "insured_value": [
        {
          "amount": 0,
          "currency": "usd"
        }
      ],
      "label_download": {
        "href": {},
        "pdf": {},
        "png": {},
        "zpl": {}
      },
      "label_messages": {
        "reference1": null,
        "reference2": null,
        "reference3": null
      },
      "package_code": {},
      "package_id": {},
      "sequence": 0,
      "tracking_number": {},
      "weight": {
        "unit": {},
        "value": 0.1
      }
    }
  ],
  "return_to": {
    "address_line1": "1999 Bishop Grandin Blvd.",
    "address_line2": "Unit 408",
    "address_line3": "Building #7",
    "address_residential_indicator": "no",
    "city_locality": "Winnipeg",
    "company_name": "The Home Depot",
    "country_code": {},
    "email": "example@example.com",
    "name": "John Doe",
    "phone": "+1 204-253-9411 ext. 123",
    "postal_code": {},
    "state_province": "Manitoba",
    "instructions": "string"
  },
  "service_code": {},
  "ship_date": {},
  "ship_from": {
    "address_line1": "1999 Bishop Grandin Blvd.",
    "address_line2": "Unit 408",
    "address_line3": "Building #7",
    "address_residential_indicator": "no",
    "city_locality": "Winnipeg",
    "company_name": "The Home Depot",
    "country_code": {},
    "email": "example@example.com",
    "name": "John Doe",
    "phone": "+1 204-253-9411 ext. 123",
    "postal_code": {},
    "state_province": "Manitoba",
    "instructions": "string"
  },
  "ship_to": {
    "address_line1": "1999 Bishop Grandin Blvd.",
    "address_line2": "Unit 408",
    "address_line3": "Building #7",
    "address_residential_indicator": "no",
    "city_locality": "Winnipeg",
    "company_name": "The Home Depot",
    "country_code": {},
    "email": "example@example.com",
    "name": "John Doe",
    "phone": "+1 204-253-9411 ext. 123",
    "postal_code": {},
    "state_province": "Manitoba",
    "instructions": "string"
  },
  "shipment_id": {},
  "shipment_number": "string",
  "shipment_status": "pending",
  "tags": [],
  "tax_identifiers": [
    {
      "identifier_type": {},
      "issuing_authority": "string",
      "taxable_entity_type": {},
      "value": "string"
    }
  ],
  "total_weight": {
    "unit": {},
    "value": 0.1
  },
  "warehouse_id": null
}
```

> 400 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 404 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 500 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

<h3 id="get-shipment-by-external-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request was a success.|[get_shipment_by_external_id_response_body](#schemaget_shipment_by_external_id_response_body)|
|400|Bad Request|The request contained errors.|[error_response_body](#schemaerror_response_body)|
|404|Not Found|The specified resource does not exist.|[error_response_body](#schemaerror_response_body)|
|500|Internal Server Error|An error occurred on ShipEngine's side.<br><br>> This error will automatically be reported to our engineers.<br>|[error_response_body](#schemaerror_response_body)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Parse shipping info

<a id="opIdparse_shipment"></a>

> Code samples

```bash
curl https://example.com/v1/shipments/recognize \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "API-Key: ${API_KEY}" \
  -d '{
    "shipment": {
      "service_code": "usps_first_class_mail",
      "ship_from": {
        "address_line1": "587 Shotwell St.",
        "address_line2": "Suite 201",
        "address_residential_indicator": "yes",
        "city_locality": "San Francisco",
        "company_name": "My Awesome Store",
        "country_code": "US",
        "phone": "555-555-5555",
        "postal_code": 94110,
        "state_province": "CA"
      }
    },
    "text": "I have a 4oz package that'\''s 5x10x14in, and I need to ship it to Margie McMiller at 3800 North Lamar suite 200 in austin, tx 78652. Please send it via USPS first class and require an adult signature. It also needs to be insured for $400.\n"
  }'
```

`PUT /v1/shipments/recognize`

The shipment-recognition API makes it easy for you to extract shipping data from unstructured text, including people's names, addresses, package weights and dimensions, insurance and delivery requirements, and more.

Data often enters your system as unstructured text (for example: emails, SMS messages, support tickets, or other documents). ShipEngine's shipment-recognition API helps you extract meaningful, structured data from this unstructured text. The parsed shipment data is returned in the same structure that's used for other ShipEngine APIs, so you can easily use the parsed data to create a shipping label.

> **Note:** Shipment recognition is currently supported for the United States, Canada, Australia, New Zealand, the United Kingdom, and Ireland.


> Body parameter

```json
{
  "shipment": {
    "service_code": "usps_first_class_mail",
    "ship_from": {
      "address_line1": "587 Shotwell St.",
      "address_line2": "Suite 201",
      "address_residential_indicator": "yes",
      "city_locality": "San Francisco",
      "company_name": "My Awesome Store",
      "country_code": "US",
      "phone": "555-555-5555",
      "postal_code": 94110,
      "state_province": "CA"
    }
  },
  "text": "I have a 4oz package that's 5x10x14in, and I need to ship it to Margie McMiller at 3800 North Lamar suite 200 in austin, tx 78652. Please send it via USPS first class and require an adult signature. It also needs to be insured for $400.\n"
}
```

<h3 id="parse-shipping-info-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[parse_shipment_request_body](#schemaparse_shipment_request_body)|true|The only required field is `text`, which is the text to be parsed. You can optionally also provide a `shipment` containing any already-known values. For example, you probably already know the `ship_from` address, and you may also already know what carrier and service you want to use.<br>|
|» shipment|body|object|false|You can optionally provide a `shipment` object containing any already-known values. For example, you probably already know the `ship_from` address, and you may also already know what carrier and service you want to use.<br>|
|» » advanced_options|body|object|false|Advanced shipment options.  These are entirely optional.|
|» » » bill_to_account|body|string \| null|false|This field is used to [bill shipping costs to a third party](https://www.shipengine.com/docs/shipping/bill-to-third-party/).  This field must be used in conjunction with the `bill_to_country_code`, `bill_to_party`, and `bill_to_postal_code` fields.<br>|
|» » » bill_to_country_code|body|object \| null|false|The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1) of the third-party that is responsible for shipping costs.<br>|
|» » » bill_to_party|body|object \| null|false|Indicates whether to bill shipping costs to the recipient or to a third-party.  When billing to a third-party, the `bill_to_account`, `bill_to_country_code`, and `bill_to_postal_code` fields must also be set.<br>|
|» » » bill_to_postal_code|body|string \| null|false|The postal code of the third-party that is responsible for shipping costs.<br>|
|» » » collect_on_delivery|body|[collect_on_delivery](#schemacollect_on_delivery)|false|Defer payment until package is delivered, instead of when it is ordered.|
|» » » contains_alcohol|body|boolean|false|Indicates that the shipment contains alcohol.|
|» » » custom_field1|body|string \| null|false|An arbitrary field that can be used to store information about the shipment.<br>|
|» » » custom_field2|body|string \| null|false|An arbitrary field that can be used to store information about the shipment.<br>|
|» » » custom_field3|body|string \| null|false|An arbitrary field that can be used to store information about the shipment.<br>|
|» » » delivered_duty_paid|body|boolean|false|Indicates that the shipper is paying the international delivery duties for this shipment.  This option is supported by UPS, FedEx, and DHL Express.<br>|
|» » » dry_ice|body|boolean|false|Indicates if the shipment contain dry ice|
|» » » dry_ice_weight|body|object \| null|false|The weight of the dry ice in the shipment|
|» » » » unit|body|object|true|none|
|» » » » value|body|number(double)|true|The weight, in the specified unit|
|» » » fedex_freight|body|object|false|Provide details for the Fedex freight service|
|» » » » booking_confirmation|body|string|false|none|
|» » » » shipper_load_and_count|body|string|false|none|
|» » » freight_class|body|string \| null|false|The National Motor Freight Traffic Association [freight class](http://www.nmfta.org/pages/nmfc?AspxAutoDetectCookieSupport=1), such as "77.5", "110", or "250".<br>|
|» » » non_machinable|body|boolean|false|Indicates that the package cannot be processed automatically because it is too large or irregularly shaped. This is primarily for USPS shipments.  See [Section 1.2 of the USPS parcel standards](https://pe.usps.com/text/dmm300/101.htm#ep1047495) for details.<br>|
|» » » origin_type|body|object \| null|false|none|
|» » » saturday_delivery|body|boolean|false|Enables Saturday delivery, if supported by the carrier.|
|» » » shipper_release|body|boolean \| null|false|none|
|» » » third_party_consignee|body|boolean|false|Third Party Consignee option is a value-added service that allows the shipper to supply goods without commercial invoices being attached|
|» » » use_ups_ground_freight_pricing|body|boolean \| null|false|Whether to use [UPS Ground Freight pricing](https://www.shipengine.com/docs/shipping/ups-ground-freight/).  If enabled, then a `freight_class` must also be specified.<br>|
|» » carrier_id|body|object|false|The carrier account that is billed for the shipping charges|
|» » confirmation|body|object|false|The type of delivery confirmation that is required for this shipment.|
|» » customs|body|object \| null|false|Customs information.  This is usually only needed for international shipments.<br>|
|» » » contents|body|object|true|The type of contents in this shipment.  This may impact import duties or customs treatment.|
|» » » customs_items|body|[[customs_item](#schemacustoms_item)]|false|Customs declarations for each item in the shipment.|
|» » » non_delivery|body|object|true|Indicates what to do if a package is unable to be delivered.|
|» » external_order_id|body|string \| null|false|ID that the Order Source assigned|
|» » external_shipment_id|body|string \| null|false|A unique user-defined key to identify a shipment.  This can be used to retrieve the shipment.<br><br>> **Warning:** The `external_shipment_id` is limited to 50 characters. Any additional characters will be truncated.<br>|
|» » insurance_provider|body|object|false|The insurance provider to use for any insured packages in the shipment.<br>|
|» » items|body|[object]|false|Describe the packages included in this shipment as related to potential metadata that was imported from<br>external order sources<br>|
|» » » asin|body|string \| null|false|Amazon Standard Identification Number|
|» » » external_order_id|body|string \| null|false|external order id|
|» » » external_order_item_id|body|string \| null|false|external order item id|
|» » » name|body|string|false|item name|
|» » » order_source_code|body|object|false|none|
|» » » quantity|body|integer(int32)|false|The quantity of this item included in the shipment|
|» » » sales_order_id|body|string \| null|false|sales order id|
|» » » sales_order_item_id|body|string \| null|false|sales order item id|
|» » » sku|body|string \| null|false|Item Stock Keeping Unit|
|» » order_source_code|body|object|false|none|
|» » origin_type|body|object \| null|false|Indicates if the package will be picked up or dropped off by the carrier|
|» » packages|body|[object]|false|The packages in the shipment.<br><br>> **Note:** Some carriers only allow one package per shipment.  If you attempt to create a multi-package shipment for a carrier that doesn't allow it, an error will be returned.<br>|
|» » » content_description|body|string \| null|false|A short description of the package content. Required for shipments moving to, from, and through Mexico.<br>|
|» » » dimensions|body|object|false|The package dimensions|
|» » » » height|body|number(double)|true|The length of the package, in the specified unit|
|» » » » length|body|number(double)|true|The length of the package, in the specified unit|
|» » » » unit|body|object|true|none|
|» » » » width|body|number(double)|true|The width of the package, in the specified unit|
|» » » external_package_id|body|string|false|An external package id.|
|» » » insured_value|body|object|false|The insured value of the package.  Requires the `insurance_provider` field of the shipment to be set.<br>|
|» » » » amount|body|number(double)|true|The monetary amount, in the specified currency.|
|» » » » currency|body|object|true|none|
|» » » label_messages|body|object|false|none|
|» » » » reference1|body|string \| null|true|The first line of the custom label message.  Some carriers may prefix this line with something like "REF", "Reference", "Trx Ref No.", etc.<br>|
|» » » » reference2|body|string \| null|true|The second line of the custom label message.  Some carriers may prefix this line with something like "INV", "Reference 2", "Trx Ref No.", etc.<br>|
|» » » » reference3|body|string \| null|true|The third line of the custom label message.  Some carriers may prefix this line with something like "PO", "Reference 3", etc.<br>|
|» » » package_code|body|object|false|The [package type](https://www.shipengine.com/docs/reference/list-carrier-packages/), such as `thick_envelope`, `small_flat_rate_box`, `large_package`, etc.  The code `package` indicates a custom or unknown package type.<br>|
|» » » package_id|body|object|false|A string that uniquely identifies this [package type](https://www.shipengine.com/docs/reference/list-carrier-packages/)|
|» » » weight|body|object|true|The package weight|
|» » » » unit|body|object|true|none|
|» » » » value|body|number(double)|true|The weight, in the specified unit|
|» » return_to|body|object|false|The return address for this shipment.  Defaults to the `ship_from` address.<br>|
|» » » address_line1|body|string|true|The first line of the street address.  For some addresses, this may be the only line.  Other addresses may require 2 or 3 lines.<br>|
|» » » address_line2|body|string \| null|false|The second line of the street address.  For some addresses, this line may not be needed.<br>|
|» » » address_line3|body|string \| null|false|The third line of the street address.  For some addresses, this line may not be needed.<br>|
|» » » address_residential_indicator|body|object|true|Indicates whether this is a residential address.|
|» » » city_locality|body|string|true|The name of the city or locality|
|» » » company_name|body|string \| null|false|If this is a business address, then the company name should be specified here.<br>|
|» » » country_code|body|object|true|The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)<br>|
|» » » email|body|string \| null|false|Email for the address owner.<br>|
|» » » name|body|string|true|The name of a contact person at this address.  This field may be set instead of - or in addition to - the `company_name` field.<br>|
|» » » phone|body|string|true|The phone number of a contact person at this address.  The format of this phone number varies depending on the country.<br>|
|» » » postal_code|body|object|true|none|
|» » » state_province|body|string|true|The state or province.  For some countries (including the U.S.) only abbreviations are allowed.  Other countries allow the full name or abbreviation.<br>|
|» » » instructions|body|string \| null|false|Additional text about how to handle the shipment at this address.<br>|
|» » service_code|body|object|false|The [carrier service](https://www.shipengine.com/docs/shipping/use-a-carrier-service/) used to ship the package, such as `fedex_ground`, `usps_first_class_mail`, `flat_rate_envelope`, etc.<br>|
|» » ship_date|body|object|false|The date that the shipment was (or will be) shippped.  ShipEngine will take the day of week into consideration. For example, if the carrier does not operate on Sundays, then a package that would have shipped on Sunday will ship on Monday instead.<br>|
|» » ship_from|body|object|false|The shipment's origin address. If you frequently ship from the same location, consider [creating a warehouse](https://www.shipengine.com/docs/reference/create-warehouse/).  Then you can simply specify the `warehouse_id` rather than the complete address each time.<br>|
|» » » address_line1|body|string|true|The first line of the street address.  For some addresses, this may be the only line.  Other addresses may require 2 or 3 lines.<br>|
|» » » address_line2|body|string \| null|false|The second line of the street address.  For some addresses, this line may not be needed.<br>|
|» » » address_line3|body|string \| null|false|The third line of the street address.  For some addresses, this line may not be needed.<br>|
|» » » address_residential_indicator|body|object|true|Indicates whether this is a residential address.|
|» » » city_locality|body|string|true|The name of the city or locality|
|» » » company_name|body|string \| null|false|If this is a business address, then the company name should be specified here.<br>|
|» » » country_code|body|object|true|The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)<br>|
|» » » email|body|string \| null|false|Email for the address owner.<br>|
|» » » name|body|string|true|The name of a contact person at this address.  This field may be set instead of - or in addition to - the `company_name` field.<br>|
|» » » phone|body|string|true|The phone number of a contact person at this address.  The format of this phone number varies depending on the country.<br>|
|» » » postal_code|body|object|true|none|
|» » » state_province|body|string|true|The state or province.  For some countries (including the U.S.) only abbreviations are allowed.  Other countries allow the full name or abbreviation.<br>|
|» » » instructions|body|string \| null|false|Additional text about how to handle the shipment at this address.<br>|
|» » ship_to|body|object|false|The recipient's mailing address|
|» » » address_line1|body|string|true|The first line of the street address.  For some addresses, this may be the only line.  Other addresses may require 2 or 3 lines.<br>|
|» » » address_line2|body|string \| null|false|The second line of the street address.  For some addresses, this line may not be needed.<br>|
|» » » address_line3|body|string \| null|false|The third line of the street address.  For some addresses, this line may not be needed.<br>|
|» » » address_residential_indicator|body|object|true|Indicates whether this is a residential address.|
|» » » city_locality|body|string|true|The name of the city or locality|
|» » » company_name|body|string \| null|false|If this is a business address, then the company name should be specified here.<br>|
|» » » country_code|body|object|true|The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)<br>|
|» » » email|body|string \| null|false|Email for the address owner.<br>|
|» » » name|body|string|true|The name of a contact person at this address.  This field may be set instead of - or in addition to - the `company_name` field.<br>|
|» » » phone|body|string|true|The phone number of a contact person at this address.  The format of this phone number varies depending on the country.<br>|
|» » » postal_code|body|object|true|none|
|» » » state_province|body|string|true|The state or province.  For some countries (including the U.S.) only abbreviations are allowed.  Other countries allow the full name or abbreviation.<br>|
|» » » instructions|body|string \| null|false|Additional text about how to handle the shipment at this address.<br>|
|» » shipment_number|body|string \| null|false|A non-unique user-defined number used to identify a shipment.  If undefined, this will match the external_shipment_id of the shipment.<br><br>> **Warning:** The `shipment_number` is limited to 50 characters. Any additional characters will be truncated.<br>|
|» » tax_identifiers|body|[object]|false|none|
|» » » identifier_type|body|object|true|none|
|» » » issuing_authority|body|string|true|The authority that issued this tax. This must be a valid 2 character ISO 3166 Alpha 2 country code.|
|» » » taxable_entity_type|body|object|true|none|
|» » » value|body|string|true|The value of the identifier|
|» » warehouse_id|body|object \| null|false|The [warehouse](https://www.shipengine.com/docs/shipping/ship-from-a-warehouse/) that the shipment is being shipped from.  Either `warehouse_id` or `ship_from` must be specified.<br>|
|» text|body|string|true|The unstructured text that contains shipping-related entities|

> Example responses

> 200 Response

```json
{
  "entities": [
    {
      "end_index": 11,
      "result": {
        "unit": "ounce",
        "value": 4
      },
      "score": 0.9805313966503588,
      "start_index": 9,
      "text": "4oz",
      "type": "weight"
    },
    {
      "end_index": 36,
      "result": {
        "height": 14,
        "length": 5,
        "unit": "inch",
        "width": 10
      },
      "score": 1,
      "start_index": 28,
      "text": "5x10x14in",
      "type": "dimensions"
    },
    {
      "end_index": 36,
      "result": {
        "unit": "inch",
        "value": 14
      },
      "score": 0.9805313966503588,
      "start_index": 33,
      "text": "14in",
      "type": "dimension"
    },
    {
      "end_index": 196,
      "result": {
        "address_line1": "3800 North Lamar",
        "address_line2": "Suite 200",
        "city_locality": "Austin",
        "company_name": "Adult Signature",
        "direction": "to",
        "name": "Margie McMiller",
        "postal_code": 78652,
        "state_province": "TX"
      },
      "score": 0.9281558837267101,
      "start_index": 61,
      "text": "to Margie McMiller at 3800 North Lamar suite 200 in austin, tx 78652. Please send it via USPS first class and require an adult signature",
      "type": "address"
    },
    {
      "end_index": 78,
      "result": {
        "value": "Margie McMiller"
      },
      "score": 0.9519646137063122,
      "start_index": 64,
      "text": "Margie McMiller",
      "type": "person"
    },
    {
      "end_index": 98,
      "result": {
        "line": 1,
        "value": "3800 North Lamar"
      },
      "score": 0.9805313966503588,
      "start_index": 83,
      "text": "3800 North Lamar",
      "type": "address_line"
    },
    {
      "end_index": 86,
      "result": {
        "type": "cardinal",
        "value": 3800
      },
      "score": 0.9805313966503588,
      "start_index": 83,
      "text": 3800,
      "type": "number"
    },
    {
      "end_index": 108,
      "result": {
        "line": 2,
        "value": "Suite 200"
      },
      "score": 1,
      "start_index": 100,
      "text": "suite 200",
      "type": "address_line"
    },
    {
      "end_index": 111,
      "result": {
        "unit": "inch",
        "value": 200
      },
      "score": 0.4792571878834418,
      "start_index": 106,
      "text": "200 in",
      "type": "dimension"
    },
    {
      "end_index": 118,
      "result": {
        "value": "Austin"
      },
      "score": 0.9805313966503588,
      "start_index": 113,
      "text": "austin",
      "type": "city_locality"
    },
    {
      "end_index": 122,
      "result": {
        "name": "Texas",
        "value": "TX"
      },
      "score": 0.6082904353940255,
      "start_index": 121,
      "text": "tx",
      "type": "state_province"
    },
    {
      "end_index": 128,
      "result": {
        "value": 78652
      },
      "score": 0.9519646137063122,
      "start_index": 124,
      "text": 78652,
      "type": "postal_code"
    },
    {
      "end_index": 153,
      "result": {
        "name": "Stamps.com",
        "value": "se-118608"
      },
      "score": 0.9519646137063122,
      "start_index": 150,
      "text": "USPS",
      "type": "carrier"
    },
    {
      "end_index": 165,
      "result": {
        "name": "USPS First Class Mail",
        "value": "usps_first_class_mail"
      },
      "score": 0.6082904353940255,
      "start_index": 155,
      "text": "first class",
      "type": "service"
    },
    {
      "end_index": 159,
      "result": {
        "type": "ordinal",
        "value": 1
      },
      "score": 0.9805313966503588,
      "start_index": 155,
      "text": "first",
      "type": "number"
    },
    {
      "end_index": 196,
      "result": {
        "value": "Adult Signature"
      },
      "score": 0.9519646137063122,
      "start_index": 182,
      "text": "adult signature",
      "type": "company"
    },
    {
      "end_index": 196,
      "result": {
        "name": "Adult Signature",
        "value": "adult_signature"
      },
      "score": 0.8530163983409642,
      "start_index": 182,
      "text": "adult signature",
      "type": "delivery_confirmation"
    },
    {
      "end_index": 234,
      "result": {
        "unit": "USD",
        "value": 400
      },
      "score": 0.8530163983409642,
      "start_index": 219,
      "text": "insured for $400",
      "type": "insurance"
    },
    {
      "end_index": 234,
      "result": {
        "unit": "USD",
        "value": 400
      },
      "score": 1,
      "start_index": 231,
      "text": "$400",
      "type": "insured_value"
    }
  ],
  "score": 0.9031369611169101,
  "shipment": {
    "carrier_id": "se-118608",
    "confirmation": "adult_signature",
    "packages": [
      {
        "dimensions": {
          "height": 14,
          "length": 5,
          "unit": "inch",
          "width": 10
        },
        "insured_value": {
          "amount": 400,
          "currency": "USD"
        },
        "weight": {
          "unit": "ounce",
          "value": 4
        }
      }
    ],
    "service_code": "usps_first_class_mail",
    "ship_from": {
      "address_line1": "587 Shotwell St.",
      "address_line2": "Suite 201",
      "address_residential_indicator": "yes",
      "city_locality": "San Francisco",
      "company_name": "My Awesome Store",
      "country_code": "US",
      "phone": "555-555-5555",
      "postal_code": 94110,
      "state_province": "CA"
    },
    "ship_to": {
      "address_line1": "3800 North Lamar",
      "address_line2": "Suite 200",
      "address_residential_indicator": "unknown",
      "city_locality": "Austin",
      "company_name": "Adult Signature",
      "name": "Margie McMiller",
      "postal_code": 78652,
      "state_province": "TX"
    }
  }
}
```

> 400 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 500 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

<h3 id="parse-shipping-info-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the parsed shipment, as well as a confidence score and a list of all the shipping entities that were recognized in the text.<br>|[parse_shipment_response_body](#schemaparse_shipment_response_body)|
|400|Bad Request|The request contained errors.|[error_response_body](#schemaerror_response_body)|
|500|Internal Server Error|An error occurred on ShipEngine's side.<br><br>> This error will automatically be reported to our engineers.<br>|[error_response_body](#schemaerror_response_body)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Get Shipment By ID

<a id="opIdget_shipment_by_id"></a>

> Code samples

```bash
curl https://example.com/v1/shipments/se-28529731 \
  -H 'Accept: application/json' \
  -H "API-Key: ${API_KEY}"
```

`GET /v1/shipments/{shipment_id}`

Get an individual shipment based on its ID

<h3 id="get-shipment-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|shipment_id|path|[se_id](#schemase_id)|true|Shipment ID|

> Example responses

> 200 Response

```json
{
  "advanced_options": {
    "bill_to_account": null,
    "bill_to_country_code": null,
    "bill_to_party": null,
    "bill_to_postal_code": null,
    "collect_on_delivery": {
      "payment_amount": {
        "amount": 0,
        "currency": {}
      },
      "payment_type": {}
    },
    "contains_alcohol": false,
    "custom_field1": null,
    "custom_field2": null,
    "custom_field3": null,
    "delivered_duty_paid": false,
    "dry_ice": false,
    "dry_ice_weight": {
      "unit": {},
      "value": 0.1
    },
    "fedex_freight": {
      "booking_confirmation": "string",
      "shipper_load_and_count": "string"
    },
    "freight_class": 77.5,
    "non_machinable": false,
    "origin_type": null,
    "saturday_delivery": false,
    "shipper_release": null,
    "third_party_consignee": false,
    "use_ups_ground_freight_pricing": null
  },
  "carrier_id": {},
  "confirmation": "none",
  "created_at": {},
  "customs": null,
  "external_order_id": "string",
  "external_shipment_id": "string",
  "insurance_provider": "none",
  "items": [],
  "modified_at": {},
  "order_source_code": {},
  "origin_type": {},
  "packages": [
    {
      "content_description": "Hand knitted wool socks",
      "dimensions": {
        "height": 0,
        "length": 0,
        "unit": "inch",
        "width": 0
      },
      "external_package_id": "string",
      "form_download": {
        "href": {},
        "type": "string"
      },
      "insured_value": [
        {
          "amount": 0,
          "currency": "usd"
        }
      ],
      "label_download": {
        "href": {},
        "pdf": {},
        "png": {},
        "zpl": {}
      },
      "label_messages": {
        "reference1": null,
        "reference2": null,
        "reference3": null
      },
      "package_code": {},
      "package_id": {},
      "sequence": 0,
      "tracking_number": {},
      "weight": {
        "unit": {},
        "value": 0.1
      }
    }
  ],
  "return_to": {
    "address_line1": "1999 Bishop Grandin Blvd.",
    "address_line2": "Unit 408",
    "address_line3": "Building #7",
    "address_residential_indicator": "no",
    "city_locality": "Winnipeg",
    "company_name": "The Home Depot",
    "country_code": {},
    "email": "example@example.com",
    "name": "John Doe",
    "phone": "+1 204-253-9411 ext. 123",
    "postal_code": {},
    "state_province": "Manitoba",
    "instructions": "string"
  },
  "service_code": {},
  "ship_date": {},
  "ship_from": {
    "address_line1": "1999 Bishop Grandin Blvd.",
    "address_line2": "Unit 408",
    "address_line3": "Building #7",
    "address_residential_indicator": "no",
    "city_locality": "Winnipeg",
    "company_name": "The Home Depot",
    "country_code": {},
    "email": "example@example.com",
    "name": "John Doe",
    "phone": "+1 204-253-9411 ext. 123",
    "postal_code": {},
    "state_province": "Manitoba",
    "instructions": "string"
  },
  "ship_to": {
    "address_line1": "1999 Bishop Grandin Blvd.",
    "address_line2": "Unit 408",
    "address_line3": "Building #7",
    "address_residential_indicator": "no",
    "city_locality": "Winnipeg",
    "company_name": "The Home Depot",
    "country_code": {},
    "email": "example@example.com",
    "name": "John Doe",
    "phone": "+1 204-253-9411 ext. 123",
    "postal_code": {},
    "state_province": "Manitoba",
    "instructions": "string"
  },
  "shipment_id": {},
  "shipment_number": "string",
  "shipment_status": "pending",
  "tags": [],
  "tax_identifiers": [
    {
      "identifier_type": {},
      "issuing_authority": "string",
      "taxable_entity_type": {},
      "value": "string"
    }
  ],
  "total_weight": {
    "unit": {},
    "value": 0.1
  },
  "warehouse_id": null
}
```

> 400 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 404 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 500 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

<h3 id="get-shipment-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request was a success.|[get_shipment_by_id_response_body](#schemaget_shipment_by_id_response_body)|
|400|Bad Request|The request contained errors.|[error_response_body](#schemaerror_response_body)|
|404|Not Found|The specified resource does not exist.|[error_response_body](#schemaerror_response_body)|
|500|Internal Server Error|An error occurred on ShipEngine's side.<br><br>> This error will automatically be reported to our engineers.<br>|[error_response_body](#schemaerror_response_body)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Update Shipment By ID

<a id="opIdupdate_shipment"></a>

> Code samples

```bash
curl https://example.com/v1/shipments/se-28529731 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "API-Key: ${API_KEY}" \
  -d '{
    "advanced_options": {
      "bill_to_account": null,
      "bill_to_country_code": null,
      "bill_to_party": null,
      "bill_to_postal_code": null,
      "collect_on_delivery": {
        "payment_amount": {
          "amount": 0,
          "currency": {}
        },
        "payment_type": {}
      },
      "contains_alcohol": false,
      "custom_field1": null,
      "custom_field2": null,
      "custom_field3": null,
      "delivered_duty_paid": false,
      "dry_ice": false,
      "dry_ice_weight": {
        "unit": {},
        "value": 0.1
      },
      "fedex_freight": {
        "booking_confirmation": "string",
        "shipper_load_and_count": "string"
      },
      "freight_class": 77.5,
      "non_machinable": false,
      "origin_type": null,
      "saturday_delivery": false,
      "shipper_release": null,
      "third_party_consignee": false,
      "use_ups_ground_freight_pricing": null
    },
    "carrier_id": {},
    "confirmation": "none",
    "customs": null,
    "external_order_id": "string",
    "external_shipment_id": "string",
    "insurance_provider": "none",
    "items": [],
    "order_source_code": {},
    "origin_type": {},
    "packages": [
      {
        "content_description": "Hand knitted wool socks",
        "dimensions": {
          "height": 0,
          "length": 0,
          "unit": "inch",
          "width": 0
        },
        "external_package_id": "string",
        "insured_value": [
          {
            "amount": 0,
            "currency": "usd"
          }
        ],
        "label_messages": {
          "reference1": null,
          "reference2": null,
          "reference3": null
        },
        "package_code": {},
        "package_id": {},
        "weight": {
          "unit": {},
          "value": 0.1
        }
      }
    ],
    "return_to": {
      "address_line1": "1999 Bishop Grandin Blvd.",
      "address_line2": "Unit 408",
      "address_line3": "Building #7",
      "address_residential_indicator": "no",
      "city_locality": "Winnipeg",
      "company_name": "The Home Depot",
      "country_code": {},
      "email": "example@example.com",
      "name": "John Doe",
      "phone": "+1 204-253-9411 ext. 123",
      "postal_code": {},
      "state_province": "Manitoba",
      "instructions": "string"
    },
    "service_code": {},
    "ship_date": {},
    "ship_from": {
      "address_line1": "1999 Bishop Grandin Blvd.",
      "address_line2": "Unit 408",
      "address_line3": "Building #7",
      "address_residential_indicator": "no",
      "city_locality": "Winnipeg",
      "company_name": "The Home Depot",
      "country_code": {},
      "email": "example@example.com",
      "name": "John Doe",
      "phone": "+1 204-253-9411 ext. 123",
      "postal_code": {},
      "state_province": "Manitoba",
      "instructions": "string"
    },
    "ship_to": {
      "address_line1": "1999 Bishop Grandin Blvd.",
      "address_line2": "Unit 408",
      "address_line3": "Building #7",
      "address_residential_indicator": "no",
      "city_locality": "Winnipeg",
      "company_name": "The Home Depot",
      "country_code": {},
      "email": "example@example.com",
      "name": "John Doe",
      "phone": "+1 204-253-9411 ext. 123",
      "postal_code": {},
      "state_province": "Manitoba",
      "instructions": "string"
    },
    "shipment_number": "string",
    "tax_identifiers": [
      {
        "identifier_type": {},
        "issuing_authority": "string",
        "taxable_entity_type": {},
        "value": "string"
      }
    ],
    "warehouse_id": null,
    "validate_address": "no_validation"
  }'
```

`PUT /v1/shipments/{shipment_id}`

Update a shipment object based on its ID

> Body parameter

```json
{
  "advanced_options": {
    "bill_to_account": null,
    "bill_to_country_code": null,
    "bill_to_party": null,
    "bill_to_postal_code": null,
    "collect_on_delivery": {
      "payment_amount": {
        "amount": 0,
        "currency": {}
      },
      "payment_type": {}
    },
    "contains_alcohol": false,
    "custom_field1": null,
    "custom_field2": null,
    "custom_field3": null,
    "delivered_duty_paid": false,
    "dry_ice": false,
    "dry_ice_weight": {
      "unit": {},
      "value": 0.1
    },
    "fedex_freight": {
      "booking_confirmation": "string",
      "shipper_load_and_count": "string"
    },
    "freight_class": 77.5,
    "non_machinable": false,
    "origin_type": null,
    "saturday_delivery": false,
    "shipper_release": null,
    "third_party_consignee": false,
    "use_ups_ground_freight_pricing": null
  },
  "carrier_id": {},
  "confirmation": "none",
  "customs": null,
  "external_order_id": "string",
  "external_shipment_id": "string",
  "insurance_provider": "none",
  "items": [],
  "order_source_code": {},
  "origin_type": {},
  "packages": [
    {
      "content_description": "Hand knitted wool socks",
      "dimensions": {
        "height": 0,
        "length": 0,
        "unit": "inch",
        "width": 0
      },
      "external_package_id": "string",
      "insured_value": [
        {
          "amount": 0,
          "currency": "usd"
        }
      ],
      "label_messages": {
        "reference1": null,
        "reference2": null,
        "reference3": null
      },
      "package_code": {},
      "package_id": {},
      "weight": {
        "unit": {},
        "value": 0.1
      }
    }
  ],
  "return_to": {
    "address_line1": "1999 Bishop Grandin Blvd.",
    "address_line2": "Unit 408",
    "address_line3": "Building #7",
    "address_residential_indicator": "no",
    "city_locality": "Winnipeg",
    "company_name": "The Home Depot",
    "country_code": {},
    "email": "example@example.com",
    "name": "John Doe",
    "phone": "+1 204-253-9411 ext. 123",
    "postal_code": {},
    "state_province": "Manitoba",
    "instructions": "string"
  },
  "service_code": {},
  "ship_date": {},
  "ship_from": {
    "address_line1": "1999 Bishop Grandin Blvd.",
    "address_line2": "Unit 408",
    "address_line3": "Building #7",
    "address_residential_indicator": "no",
    "city_locality": "Winnipeg",
    "company_name": "The Home Depot",
    "country_code": {},
    "email": "example@example.com",
    "name": "John Doe",
    "phone": "+1 204-253-9411 ext. 123",
    "postal_code": {},
    "state_province": "Manitoba",
    "instructions": "string"
  },
  "ship_to": {
    "address_line1": "1999 Bishop Grandin Blvd.",
    "address_line2": "Unit 408",
    "address_line3": "Building #7",
    "address_residential_indicator": "no",
    "city_locality": "Winnipeg",
    "company_name": "The Home Depot",
    "country_code": {},
    "email": "example@example.com",
    "name": "John Doe",
    "phone": "+1 204-253-9411 ext. 123",
    "postal_code": {},
    "state_province": "Manitoba",
    "instructions": "string"
  },
  "shipment_number": "string",
  "tax_identifiers": [
    {
      "identifier_type": {},
      "issuing_authority": "string",
      "taxable_entity_type": {},
      "value": "string"
    }
  ],
  "warehouse_id": null,
  "validate_address": "no_validation"
}
```

<h3 id="update-shipment-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|shipment_id|path|[se_id](#schemase_id)|true|Shipment ID|
|body|body|[update_shipment_request_body](#schemaupdate_shipment_request_body)|true|none|
|» advanced_options|body|object|false|Advanced shipment options.  These are entirely optional.|
|» » bill_to_account|body|string \| null|false|This field is used to [bill shipping costs to a third party](https://www.shipengine.com/docs/shipping/bill-to-third-party/).  This field must be used in conjunction with the `bill_to_country_code`, `bill_to_party`, and `bill_to_postal_code` fields.<br>|
|» » bill_to_country_code|body|object \| null|false|The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1) of the third-party that is responsible for shipping costs.<br>|
|» » bill_to_party|body|object \| null|false|Indicates whether to bill shipping costs to the recipient or to a third-party.  When billing to a third-party, the `bill_to_account`, `bill_to_country_code`, and `bill_to_postal_code` fields must also be set.<br>|
|» » bill_to_postal_code|body|string \| null|false|The postal code of the third-party that is responsible for shipping costs.<br>|
|» » collect_on_delivery|body|[collect_on_delivery](#schemacollect_on_delivery)|false|Defer payment until package is delivered, instead of when it is ordered.|
|» » contains_alcohol|body|boolean|false|Indicates that the shipment contains alcohol.|
|» » custom_field1|body|string \| null|false|An arbitrary field that can be used to store information about the shipment.<br>|
|» » custom_field2|body|string \| null|false|An arbitrary field that can be used to store information about the shipment.<br>|
|» » custom_field3|body|string \| null|false|An arbitrary field that can be used to store information about the shipment.<br>|
|» » delivered_duty_paid|body|boolean|false|Indicates that the shipper is paying the international delivery duties for this shipment.  This option is supported by UPS, FedEx, and DHL Express.<br>|
|» » dry_ice|body|boolean|false|Indicates if the shipment contain dry ice|
|» » dry_ice_weight|body|object \| null|false|The weight of the dry ice in the shipment|
|» » » unit|body|object|true|none|
|» » » value|body|number(double)|true|The weight, in the specified unit|
|» » fedex_freight|body|object|false|Provide details for the Fedex freight service|
|» » » booking_confirmation|body|string|false|none|
|» » » shipper_load_and_count|body|string|false|none|
|» » freight_class|body|string \| null|false|The National Motor Freight Traffic Association [freight class](http://www.nmfta.org/pages/nmfc?AspxAutoDetectCookieSupport=1), such as "77.5", "110", or "250".<br>|
|» » non_machinable|body|boolean|false|Indicates that the package cannot be processed automatically because it is too large or irregularly shaped. This is primarily for USPS shipments.  See [Section 1.2 of the USPS parcel standards](https://pe.usps.com/text/dmm300/101.htm#ep1047495) for details.<br>|
|» » origin_type|body|object \| null|false|none|
|» » saturday_delivery|body|boolean|false|Enables Saturday delivery, if supported by the carrier.|
|» » shipper_release|body|boolean \| null|false|none|
|» » third_party_consignee|body|boolean|false|Third Party Consignee option is a value-added service that allows the shipper to supply goods without commercial invoices being attached|
|» » use_ups_ground_freight_pricing|body|boolean \| null|false|Whether to use [UPS Ground Freight pricing](https://www.shipengine.com/docs/shipping/ups-ground-freight/).  If enabled, then a `freight_class` must also be specified.<br>|
|» carrier_id|body|object|false|The carrier account that is billed for the shipping charges|
|» confirmation|body|object|false|The type of delivery confirmation that is required for this shipment.|
|» customs|body|object \| null|false|Customs information.  This is usually only needed for international shipments.<br>|
|» » contents|body|object|true|The type of contents in this shipment.  This may impact import duties or customs treatment.|
|» » customs_items|body|[[customs_item](#schemacustoms_item)]|false|Customs declarations for each item in the shipment.|
|» » non_delivery|body|object|true|Indicates what to do if a package is unable to be delivered.|
|» external_order_id|body|string \| null|false|ID that the Order Source assigned|
|» external_shipment_id|body|string \| null|false|A unique user-defined key to identify a shipment.  This can be used to retrieve the shipment.<br><br>> **Warning:** The `external_shipment_id` is limited to 50 characters. Any additional characters will be truncated.<br>|
|» insurance_provider|body|object|false|The insurance provider to use for any insured packages in the shipment.<br>|
|» items|body|[object]|false|Describe the packages included in this shipment as related to potential metadata that was imported from<br>external order sources<br>|
|» » asin|body|string \| null|false|Amazon Standard Identification Number|
|» » external_order_id|body|string \| null|false|external order id|
|» » external_order_item_id|body|string \| null|false|external order item id|
|» » name|body|string|false|item name|
|» » order_source_code|body|object|false|none|
|» » quantity|body|integer(int32)|false|The quantity of this item included in the shipment|
|» » sales_order_id|body|string \| null|false|sales order id|
|» » sales_order_item_id|body|string \| null|false|sales order item id|
|» » sku|body|string \| null|false|Item Stock Keeping Unit|
|» order_source_code|body|object|false|none|
|» origin_type|body|object \| null|false|Indicates if the package will be picked up or dropped off by the carrier|
|» packages|body|[object]|false|The packages in the shipment.<br><br>> **Note:** Some carriers only allow one package per shipment.  If you attempt to create a multi-package shipment for a carrier that doesn't allow it, an error will be returned.<br>|
|» » content_description|body|string \| null|false|A short description of the package content. Required for shipments moving to, from, and through Mexico.<br>|
|» » dimensions|body|object|false|The package dimensions|
|» » » height|body|number(double)|true|The length of the package, in the specified unit|
|» » » length|body|number(double)|true|The length of the package, in the specified unit|
|» » » unit|body|object|true|none|
|» » » width|body|number(double)|true|The width of the package, in the specified unit|
|» » external_package_id|body|string|false|An external package id.|
|» » insured_value|body|object|false|The insured value of the package.  Requires the `insurance_provider` field of the shipment to be set.<br>|
|» » » amount|body|number(double)|true|The monetary amount, in the specified currency.|
|» » » currency|body|object|true|none|
|» » label_messages|body|object|false|none|
|» » » reference1|body|string \| null|true|The first line of the custom label message.  Some carriers may prefix this line with something like "REF", "Reference", "Trx Ref No.", etc.<br>|
|» » » reference2|body|string \| null|true|The second line of the custom label message.  Some carriers may prefix this line with something like "INV", "Reference 2", "Trx Ref No.", etc.<br>|
|» » » reference3|body|string \| null|true|The third line of the custom label message.  Some carriers may prefix this line with something like "PO", "Reference 3", etc.<br>|
|» » package_code|body|object|false|The [package type](https://www.shipengine.com/docs/reference/list-carrier-packages/), such as `thick_envelope`, `small_flat_rate_box`, `large_package`, etc.  The code `package` indicates a custom or unknown package type.<br>|
|» » package_id|body|object|false|A string that uniquely identifies this [package type](https://www.shipengine.com/docs/reference/list-carrier-packages/)|
|» » weight|body|object|true|The package weight|
|» » » unit|body|object|true|none|
|» » » value|body|number(double)|true|The weight, in the specified unit|
|» return_to|body|object|false|The return address for this shipment.  Defaults to the `ship_from` address.<br>|
|» » address_line1|body|string|true|The first line of the street address.  For some addresses, this may be the only line.  Other addresses may require 2 or 3 lines.<br>|
|» » address_line2|body|string \| null|false|The second line of the street address.  For some addresses, this line may not be needed.<br>|
|» » address_line3|body|string \| null|false|The third line of the street address.  For some addresses, this line may not be needed.<br>|
|» » address_residential_indicator|body|object|true|Indicates whether this is a residential address.|
|» » city_locality|body|string|true|The name of the city or locality|
|» » company_name|body|string \| null|false|If this is a business address, then the company name should be specified here.<br>|
|» » country_code|body|object|true|The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)<br>|
|» » email|body|string \| null|false|Email for the address owner.<br>|
|» » name|body|string|true|The name of a contact person at this address.  This field may be set instead of - or in addition to - the `company_name` field.<br>|
|» » phone|body|string|true|The phone number of a contact person at this address.  The format of this phone number varies depending on the country.<br>|
|» » postal_code|body|object|true|none|
|» » state_province|body|string|true|The state or province.  For some countries (including the U.S.) only abbreviations are allowed.  Other countries allow the full name or abbreviation.<br>|
|» » instructions|body|string \| null|false|Additional text about how to handle the shipment at this address.<br>|
|» service_code|body|object|false|The [carrier service](https://www.shipengine.com/docs/shipping/use-a-carrier-service/) used to ship the package, such as `fedex_ground`, `usps_first_class_mail`, `flat_rate_envelope`, etc.<br>|
|» ship_date|body|object|false|The date that the shipment was (or will be) shippped.  ShipEngine will take the day of week into consideration. For example, if the carrier does not operate on Sundays, then a package that would have shipped on Sunday will ship on Monday instead.<br>|
|» ship_from|body|object|true|The shipment's origin address. If you frequently ship from the same location, consider [creating a warehouse](https://www.shipengine.com/docs/reference/create-warehouse/).  Then you can simply specify the `warehouse_id` rather than the complete address each time.<br>|
|» » address_line1|body|string|true|The first line of the street address.  For some addresses, this may be the only line.  Other addresses may require 2 or 3 lines.<br>|
|» » address_line2|body|string \| null|false|The second line of the street address.  For some addresses, this line may not be needed.<br>|
|» » address_line3|body|string \| null|false|The third line of the street address.  For some addresses, this line may not be needed.<br>|
|» » address_residential_indicator|body|object|true|Indicates whether this is a residential address.|
|» » city_locality|body|string|true|The name of the city or locality|
|» » company_name|body|string \| null|false|If this is a business address, then the company name should be specified here.<br>|
|» » country_code|body|object|true|The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)<br>|
|» » email|body|string \| null|false|Email for the address owner.<br>|
|» » name|body|string|true|The name of a contact person at this address.  This field may be set instead of - or in addition to - the `company_name` field.<br>|
|» » phone|body|string|true|The phone number of a contact person at this address.  The format of this phone number varies depending on the country.<br>|
|» » postal_code|body|object|true|none|
|» » state_province|body|string|true|The state or province.  For some countries (including the U.S.) only abbreviations are allowed.  Other countries allow the full name or abbreviation.<br>|
|» » instructions|body|string \| null|false|Additional text about how to handle the shipment at this address.<br>|
|» ship_to|body|object|true|The recipient's mailing address|
|» » address_line1|body|string|true|The first line of the street address.  For some addresses, this may be the only line.  Other addresses may require 2 or 3 lines.<br>|
|» » address_line2|body|string \| null|false|The second line of the street address.  For some addresses, this line may not be needed.<br>|
|» » address_line3|body|string \| null|false|The third line of the street address.  For some addresses, this line may not be needed.<br>|
|» » address_residential_indicator|body|object|true|Indicates whether this is a residential address.|
|» » city_locality|body|string|true|The name of the city or locality|
|» » company_name|body|string \| null|false|If this is a business address, then the company name should be specified here.<br>|
|» » country_code|body|object|true|The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)<br>|
|» » email|body|string \| null|false|Email for the address owner.<br>|
|» » name|body|string|true|The name of a contact person at this address.  This field may be set instead of - or in addition to - the `company_name` field.<br>|
|» » phone|body|string|true|The phone number of a contact person at this address.  The format of this phone number varies depending on the country.<br>|
|» » postal_code|body|object|true|none|
|» » state_province|body|string|true|The state or province.  For some countries (including the U.S.) only abbreviations are allowed.  Other countries allow the full name or abbreviation.<br>|
|» » instructions|body|string \| null|false|Additional text about how to handle the shipment at this address.<br>|
|» shipment_number|body|string \| null|false|A non-unique user-defined number used to identify a shipment.  If undefined, this will match the external_shipment_id of the shipment.<br><br>> **Warning:** The `shipment_number` is limited to 50 characters. Any additional characters will be truncated.<br>|
|» tax_identifiers|body|[object]|false|none|
|» » identifier_type|body|object|true|none|
|» » issuing_authority|body|string|true|The authority that issued this tax. This must be a valid 2 character ISO 3166 Alpha 2 country code.|
|» » taxable_entity_type|body|object|true|none|
|» » value|body|string|true|The value of the identifier|
|» warehouse_id|body|object \| null|false|The [warehouse](https://www.shipengine.com/docs/shipping/ship-from-a-warehouse/) that the shipment is being shipped from.  Either `warehouse_id` or `ship_from` must be specified.<br>|
|» validate_address|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "advanced_options": {
    "bill_to_account": null,
    "bill_to_country_code": null,
    "bill_to_party": null,
    "bill_to_postal_code": null,
    "collect_on_delivery": {
      "payment_amount": {
        "amount": 0,
        "currency": {}
      },
      "payment_type": {}
    },
    "contains_alcohol": false,
    "custom_field1": null,
    "custom_field2": null,
    "custom_field3": null,
    "delivered_duty_paid": false,
    "dry_ice": false,
    "dry_ice_weight": {
      "unit": {},
      "value": 0.1
    },
    "fedex_freight": {
      "booking_confirmation": "string",
      "shipper_load_and_count": "string"
    },
    "freight_class": 77.5,
    "non_machinable": false,
    "origin_type": null,
    "saturday_delivery": false,
    "shipper_release": null,
    "third_party_consignee": false,
    "use_ups_ground_freight_pricing": null
  },
  "carrier_id": {},
  "confirmation": "none",
  "created_at": {},
  "customs": null,
  "external_order_id": "string",
  "external_shipment_id": "string",
  "insurance_provider": "none",
  "items": [],
  "modified_at": {},
  "order_source_code": {},
  "origin_type": {},
  "packages": [
    {
      "content_description": "Hand knitted wool socks",
      "dimensions": {
        "height": 0,
        "length": 0,
        "unit": "inch",
        "width": 0
      },
      "external_package_id": "string",
      "form_download": {
        "href": {},
        "type": "string"
      },
      "insured_value": [
        {
          "amount": 0,
          "currency": "usd"
        }
      ],
      "label_download": {
        "href": {},
        "pdf": {},
        "png": {},
        "zpl": {}
      },
      "label_messages": {
        "reference1": null,
        "reference2": null,
        "reference3": null
      },
      "package_code": {},
      "package_id": {},
      "sequence": 0,
      "tracking_number": {},
      "weight": {
        "unit": {},
        "value": 0.1
      }
    }
  ],
  "return_to": {
    "address_line1": "1999 Bishop Grandin Blvd.",
    "address_line2": "Unit 408",
    "address_line3": "Building #7",
    "address_residential_indicator": "no",
    "city_locality": "Winnipeg",
    "company_name": "The Home Depot",
    "country_code": {},
    "email": "example@example.com",
    "name": "John Doe",
    "phone": "+1 204-253-9411 ext. 123",
    "postal_code": {},
    "state_province": "Manitoba",
    "instructions": "string"
  },
  "service_code": {},
  "ship_date": {},
  "ship_from": {
    "address_line1": "1999 Bishop Grandin Blvd.",
    "address_line2": "Unit 408",
    "address_line3": "Building #7",
    "address_residential_indicator": "no",
    "city_locality": "Winnipeg",
    "company_name": "The Home Depot",
    "country_code": {},
    "email": "example@example.com",
    "name": "John Doe",
    "phone": "+1 204-253-9411 ext. 123",
    "postal_code": {},
    "state_province": "Manitoba",
    "instructions": "string"
  },
  "ship_to": {
    "address_line1": "1999 Bishop Grandin Blvd.",
    "address_line2": "Unit 408",
    "address_line3": "Building #7",
    "address_residential_indicator": "no",
    "city_locality": "Winnipeg",
    "company_name": "The Home Depot",
    "country_code": {},
    "email": "example@example.com",
    "name": "John Doe",
    "phone": "+1 204-253-9411 ext. 123",
    "postal_code": {},
    "state_province": "Manitoba",
    "instructions": "string"
  },
  "shipment_id": {},
  "shipment_number": "string",
  "shipment_status": "pending",
  "tags": [],
  "tax_identifiers": [
    {
      "identifier_type": {},
      "issuing_authority": "string",
      "taxable_entity_type": {},
      "value": "string"
    }
  ],
  "total_weight": {
    "unit": {},
    "value": 0.1
  },
  "warehouse_id": null,
  "address_validation": {
    "matched_address": {
      "address_line1": "1999 Bishop Grandin Blvd.",
      "address_line2": "Unit 408",
      "address_line3": "Building #7",
      "address_residential_indicator": "no",
      "city_locality": "Winnipeg",
      "company_name": "The Home Depot",
      "country_code": {},
      "email": "example@example.com",
      "name": "John Doe",
      "phone": "+1 204-253-9411 ext. 123",
      "postal_code": {},
      "state_province": "Manitoba"
    },
    "messages": [],
    "original_address": {
      "address_line1": "1999 Bishop Grandin Blvd.",
      "address_line2": "Unit 408",
      "address_line3": "Building #7",
      "address_residential_indicator": "no",
      "city_locality": "Winnipeg",
      "company_name": "The Home Depot",
      "country_code": {},
      "email": "example@example.com",
      "name": "John Doe",
      "phone": "+1 204-253-9411 ext. 123",
      "postal_code": {},
      "state_province": "Manitoba"
    },
    "status": {}
  },
  "errors": [
    "Parameter value '100000000.00' is out of range."
  ]
}
```

> 400 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 404 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 500 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

<h3 id="update-shipment-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request was a success.|[update_shipment_response_body](#schemaupdate_shipment_response_body)|
|400|Bad Request|The request contained errors.|[error_response_body](#schemaerror_response_body)|
|404|Not Found|The specified resource does not exist.|[error_response_body](#schemaerror_response_body)|
|500|Internal Server Error|An error occurred on ShipEngine's side.<br><br>> This error will automatically be reported to our engineers.<br>|[error_response_body](#schemaerror_response_body)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Cancel a Shipment

<a id="opIdcancel_shipments"></a>

> Code samples

```bash
curl https://example.com/v1/shipments/se-28529731/cancel \
  -X PUT \
  -H 'Accept: application/json' \
  -H "API-Key: ${API_KEY}"
```

`PUT /v1/shipments/{shipment_id}/cancel`

Mark a shipment cancelled, if it is no longer needed or being used by your organized. Any label associated with the shipment needs to be voided first
An example use case would be if a batch label creation job is going to run at a set time and only queries `pending` shipments. Marking a shipment as cancelled
would remove it from this process


<h3 id="cancel-a-shipment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|shipment_id|path|[se_id](#schemase_id)|true|Shipment ID|

> Example responses

> 204 Response

```json
""
```

> 400 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 404 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 500 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

<h3 id="cancel-a-shipment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The request was successful.|[empty_response_body](#schemaempty_response_body)|
|400|Bad Request|The request contained errors.|[error_response_body](#schemaerror_response_body)|
|404|Not Found|The specified resource does not exist.|[error_response_body](#schemaerror_response_body)|
|500|Internal Server Error|An error occurred on ShipEngine's side.<br><br>> This error will automatically be reported to our engineers.<br>|[error_response_body](#schemaerror_response_body)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Get Shipment Rates

<a id="opIdlist_shipment_rates"></a>

> Code samples

```bash
curl https://example.com/v1/shipments/se-28529731/rates \
  -H 'Accept: application/json' \
  -H "API-Key: ${API_KEY}"
```

`GET /v1/shipments/{shipment_id}/rates`

Get Rates for the shipment information associated with the shipment ID

<h3 id="get-shipment-rates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|created_at_start|query|string(date-time)|false|Used to create a filter for when a resource was created (ex. A shipment that was created after a certain time)|
|shipment_id|path|[se_id](#schemase_id)|true|Shipment ID|

> Example responses

> 200 Response

```json
{
  "created_at": {},
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "invalid_rates": [],
  "rate_request_id": {},
  "rates": [
    {
      "carrier_code": "string",
      "carrier_delivery_days": "string",
      "carrier_friendly_name": "string",
      "carrier_id": {},
      "carrier_nickname": "string",
      "confirmation_amount": {
        "amount": 0,
        "currency": {}
      },
      "delivery_days": 5,
      "error_messages": [
        "string"
      ],
      "estimated_delivery_date": {},
      "guaranteed_service": true,
      "insurance_amount": {
        "amount": 0,
        "currency": {}
      },
      "negotiated_rate": true,
      "other_amount": {
        "amount": 0,
        "currency": {}
      },
      "package_type": "package",
      "rate_id": {},
      "rate_type": {},
      "service_code": "string",
      "service_type": "string",
      "ship_date": "1970-01-01T00:00:00Z",
      "shipping_amount": {
        "amount": 0,
        "currency": {}
      },
      "tax_amount": {
        "amount": 0,
        "currency": {}
      },
      "trackable": true,
      "validation_status": {},
      "warning_messages": [
        "string"
      ],
      "zone": 6
    }
  ],
  "shipment_id": {},
  "status": {}
}
```

> 400 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 404 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 500 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

<h3 id="get-shipment-rates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request was a success.|[list_shipment_rates_response_body](#schemalist_shipment_rates_response_body)|
|400|Bad Request|The request contained errors.|[error_response_body](#schemaerror_response_body)|
|404|Not Found|The specified resource does not exist.|[error_response_body](#schemaerror_response_body)|
|500|Internal Server Error|An error occurred on ShipEngine's side.<br><br>> This error will automatically be reported to our engineers.<br>|[error_response_body](#schemaerror_response_body)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Add Tag to Shipment

<a id="opIdtag_shipment"></a>

> Code samples

```bash
curl https://example.com/v1/shipments/se-28529731/tags/Fragile \
  -X POST \
  -H 'Accept: application/json' \
  -H "API-Key: ${API_KEY}"
```

`POST /v1/shipments/{shipment_id}/tags/{tag_name}`

Add a tag to the shipment object

<h3 id="add-tag-to-shipment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|shipment_id|path|[se_id](#schemase_id)|true|Shipment ID|
|tag_name|path|[tag_name](#schematag_name)|true|none|

> Example responses

> 200 Response

```json
{
  "shipment_id": {},
  "tag": {
    "name": "Fragile"
  }
}
```

> 400 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 404 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 500 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

<h3 id="add-tag-to-shipment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The requested object creation was a success.|[tag_shipment_response_body](#schematag_shipment_response_body)|
|400|Bad Request|The request contained errors.|[error_response_body](#schemaerror_response_body)|
|404|Not Found|The specified resource does not exist.|[error_response_body](#schemaerror_response_body)|
|500|Internal Server Error|An error occurred on ShipEngine's side.<br><br>> This error will automatically be reported to our engineers.<br>|[error_response_body](#schemaerror_response_body)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Remove Tag from Shipment

<a id="opIduntag_shipment"></a>

> Code samples

```bash
curl https://example.com/v1/shipments/se-28529731/tags/Fragile \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "API-Key: ${API_KEY}"
```

`DELETE /v1/shipments/{shipment_id}/tags/{tag_name}`

Remove an existing tag from the Shipment object

<h3 id="remove-tag-from-shipment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|shipment_id|path|[se_id](#schemase_id)|true|Shipment ID|
|tag_name|path|[tag_name](#schematag_name)|true|none|

> Example responses

> 204 Response

```json
""
```

> 400 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 404 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 500 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

<h3 id="remove-tag-from-shipment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The request was successful.|[empty_response_body](#schemaempty_response_body)|
|400|Bad Request|The request contained errors.|[error_response_body](#schemaerror_response_body)|
|404|Not Found|The specified resource does not exist.|[error_response_body](#schemaerror_response_body)|
|500|Internal Server Error|An error occurred on ShipEngine's side.<br><br>> This error will automatically be reported to our engineers.<br>|[error_response_body](#schemaerror_response_body)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

<h1 id="shipengine-api-tags">tags</h1>

tags


## Get Tags

<a id="opIdlist_tags"></a>

> Code samples

```bash
curl https://example.com/v1/tags \
  -H 'Accept: application/json' \
  -H "API-Key: ${API_KEY}"
```

`GET /v1/tags`

Get a list of all tags associated with an account.

> Example responses

> 200 Response

```json
{
  "tags": [
    {
      "name": "Fragile"
    }
  ]
}
```

> 400 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 404 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 500 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

<h3 id="get-tags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request was a success.|[list_tags_response_body](#schemalist_tags_response_body)|
|400|Bad Request|The request contained errors.|[error_response_body](#schemaerror_response_body)|
|404|Not Found|The specified resource does not exist.|[error_response_body](#schemaerror_response_body)|
|500|Internal Server Error|An error occurred on ShipEngine's side.<br><br>> This error will automatically be reported to our engineers.<br>|[error_response_body](#schemaerror_response_body)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Create a New Tag

<a id="opIdcreate_tag"></a>

> Code samples

```bash
curl https://example.com/v1/tags/Fragile \
  -X POST \
  -H 'Accept: application/json' \
  -H "API-Key: ${API_KEY}"
```

`POST /v1/tags/{tag_name}`

Create a new Tag for customizing how you track your shipments

<h3 id="create-a-new-tag-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tag_name|path|[tag_name](#schematag_name)|true|none|

> Example responses

> 200 Response

```json
{
  "name": "Fragile"
}
```

> 400 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 404 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 500 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

<h3 id="create-a-new-tag-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request was a success.|[create_tag_response_body](#schemacreate_tag_response_body)|
|400|Bad Request|The request contained errors.|[error_response_body](#schemaerror_response_body)|
|404|Not Found|The specified resource does not exist.|[error_response_body](#schemaerror_response_body)|
|500|Internal Server Error|An error occurred on ShipEngine's side.<br><br>> This error will automatically be reported to our engineers.<br>|[error_response_body](#schemaerror_response_body)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Delete Tag

<a id="opIddelete_tag"></a>

> Code samples

```bash
curl https://example.com/v1/tags/Fragile \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "API-Key: ${API_KEY}"
```

`DELETE /v1/tags/{tag_name}`

Delete a tag that is no longer needed

<h3 id="delete-tag-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tag_name|path|[tag_name](#schematag_name)|true|none|

> Example responses

> 204 Response

```json
""
```

> 400 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 404 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 500 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

<h3 id="delete-tag-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The request was successful.|[empty_response_body](#schemaempty_response_body)|
|400|Bad Request|The request contained errors.|[error_response_body](#schemaerror_response_body)|
|404|Not Found|The specified resource does not exist.|[error_response_body](#schemaerror_response_body)|
|500|Internal Server Error|An error occurred on ShipEngine's side.<br><br>> This error will automatically be reported to our engineers.<br>|[error_response_body](#schemaerror_response_body)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Update Tag Name

<a id="opIdrename_tag"></a>

> Code samples

```bash
curl https://example.com/v1/tags/Fragile/Fragile \
  -X PUT \
  -H 'Accept: application/json' \
  -H "API-Key: ${API_KEY}"
```

`PUT /v1/tags/{tag_name}/{new_tag_name}`

Change a tag name while still keeping the relevant shipments attached to it

<h3 id="update-tag-name-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tag_name|path|[tag_name](#schematag_name)|true|none|
|new_tag_name|path|[tag_name](#schematag_name)|true|none|

> Example responses

> 204 Response

```json
""
```

> 400 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 404 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 500 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

<h3 id="update-tag-name-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The request was successful.|[empty_response_body](#schemaempty_response_body)|
|400|Bad Request|The request contained errors.|[error_response_body](#schemaerror_response_body)|
|404|Not Found|The specified resource does not exist.|[error_response_body](#schemaerror_response_body)|
|500|Internal Server Error|An error occurred on ShipEngine's side.<br><br>> This error will automatically be reported to our engineers.<br>|[error_response_body](#schemaerror_response_body)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

<h1 id="shipengine-api-tokens">tokens</h1>

## Get Ephemeral Token

<a id="opIdtokens_get_ephemeral_token"></a>

> Code samples

```bash
curl https://example.com/v1/tokens/ephemeral \
  -X POST \
  -H 'Accept: application/json' \
  -H "API-Key: ${API_KEY}"
```

`POST /v1/tokens/ephemeral`

This endpoint returns a token that can be passed to an application for authorized access.  The lifetime of this token is 10 seconds.

<h3 id="get-ephemeral-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|redirect|query|[redirect](#schemaredirect)|false|Include a redirect url to the application formatted with the ephemeral token.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|redirect|shipengine-dashboard|

> Example responses

> 200 Response

```json
{
  "redirect_url": "string",
  "token": "string"
}
```

<h3 id="get-ephemeral-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[tokens_get_ephemeral_token_response_body.yaml](#schematokens_get_ephemeral_token_response_body.yaml)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

<h1 id="shipengine-api-tracking">tracking</h1>

[Track packages](https://www.shipengine.com/docs/tracking/) across any of our 20+ supported carrier accounts and create tracking events to keep your customers up-to-date. Easily integrate real-time tracking information for shipments into your app, email, or SMS.


<a href="https://www.shipengine.com/docs/tracking/">Learn how to use ShipEngine to track any package with a carrier and a tracking number</a>

## Get Tracking Information

<a id="opIdget_tracking_log"></a>

> Code samples

```bash
curl https://example.com/v1/tracking \
  -H 'Accept: application/json' \
  -H "API-Key: ${API_KEY}"
```

`GET /v1/tracking`

Retrieve package tracking information

<h3 id="get-tracking-information-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|carrier_code|query|string|false|Carrier code used to retrieve tracking information|
|tracking_number|query|string|false|The tracking number associated with a shipment|

> Example responses

> 200 Response

```json
{
  "actual_delivery_date": {},
  "carrier_code": {},
  "carrier_detail_code": "OT",
  "carrier_id": {},
  "carrier_status_code": 1,
  "carrier_status_description": "Your item was delivered in or at the mailbox at 9:10 am on March",
  "estimated_delivery_date": {},
  "events": [
    {
      "carrier_detail_code": "OT",
      "carrier_occurred_at": {},
      "carrier_status_code": 1,
      "carrier_status_description": "Your item was delivered in or at the mailbox at 9:10 am on March",
      "city_locality": "AUSTIN",
      "company_name": "Stamps.com",
      "country_code": {},
      "description": "Delivered, In/At Mailbox",
      "event_code": "string",
      "latitude": -90,
      "longitude": -180,
      "occurred_at": {},
      "postal_code": 78756,
      "signer": "string",
      "state_province": "TX",
      "status_code": {},
      "status_description": "In Transit"
    }
  ],
  "exception_description": "string",
  "ship_date": {},
  "status_code": {},
  "status_description": "Delivered",
  "tracking_number": {},
  "tracking_url": "https://www.fedex.com/fedextrack/?action=track&trackingnumber=1234"
}
```

> 400 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 404 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 500 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

<h3 id="get-tracking-information-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request was a success.|[get_tracking_log_response_body](#schemaget_tracking_log_response_body)|
|400|Bad Request|The request contained errors.|[error_response_body](#schemaerror_response_body)|
|404|Not Found|The specified resource does not exist.|[error_response_body](#schemaerror_response_body)|
|500|Internal Server Error|An error occurred on ShipEngine's side.<br><br>> This error will automatically be reported to our engineers.<br>|[error_response_body](#schemaerror_response_body)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Start Tracking a Package

<a id="opIdstart_tracking"></a>

> Code samples

```bash
curl https://example.com/v1/tracking/start \
  -X POST \
  -H 'Accept: application/json' \
  -H "API-Key: ${API_KEY}"
```

`POST /v1/tracking/start`

Allows you to subscribe to tracking updates for a package. You specify the carrier_code and tracking_number of the package,
and receive notifications via webhooks whenever the shipping status changes.


<h3 id="start-tracking-a-package-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|carrier_code|query|string|false|Carrier code used to retrieve tracking information|
|tracking_number|query|string|false|The tracking number associated with a shipment|

> Example responses

> 204 Response

```json
""
```

> 400 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 404 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 500 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

<h3 id="start-tracking-a-package-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The request was successful.|[empty_response_body](#schemaempty_response_body)|
|400|Bad Request|The request contained errors.|[error_response_body](#schemaerror_response_body)|
|404|Not Found|The specified resource does not exist.|[error_response_body](#schemaerror_response_body)|
|500|Internal Server Error|An error occurred on ShipEngine's side.<br><br>> This error will automatically be reported to our engineers.<br>|[error_response_body](#schemaerror_response_body)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Stop Tracking a Package

<a id="opIdstop_tracking"></a>

> Code samples

```bash
curl https://example.com/v1/tracking/stop \
  -X POST \
  -H 'Accept: application/json' \
  -H "API-Key: ${API_KEY}"
```

`POST /v1/tracking/stop`

Unsubscribe from tracking updates for a package.

<h3 id="stop-tracking-a-package-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|carrier_code|query|string|false|Carrier code used to retrieve tracking information|
|tracking_number|query|string|false|The tracking number associated with a shipment|

> Example responses

> 204 Response

```json
""
```

> 400 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 404 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 500 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

<h3 id="stop-tracking-a-package-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The request was successful.|[empty_response_body](#schemaempty_response_body)|
|400|Bad Request|The request contained errors.|[error_response_body](#schemaerror_response_body)|
|404|Not Found|The specified resource does not exist.|[error_response_body](#schemaerror_response_body)|
|500|Internal Server Error|An error occurred on ShipEngine's side.<br><br>> This error will automatically be reported to our engineers.<br>|[error_response_body](#schemaerror_response_body)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

<h1 id="shipengine-api-warehouses">warehouses</h1>

warehouses


## List Warehouses

<a id="opIdlist_warehouses"></a>

> Code samples

```bash
curl https://example.com/v1/warehouses \
  -H 'Accept: application/json' \
  -H "API-Key: ${API_KEY}"
```

`GET /v1/warehouses`

Retrieve a list of warehouses associated with this account.

> Example responses

> 200 Response

```json
{
  "warehouses": [
    {
      "created_at": "2019-06-25T18:12:35.583Z",
      "is_default": false,
      "name": "Zero Cool HQ",
      "origin_address": {
        "address_line1": "1999 Bishop Grandin Blvd.",
        "address_line2": "Unit 408",
        "address_line3": "Building #7",
        "address_residential_indicator": "no",
        "city_locality": "Winnipeg",
        "company_name": "The Home Depot",
        "country_code": {},
        "email": "example@example.com",
        "name": "John Doe",
        "phone": "+1 204-253-9411 ext. 123",
        "postal_code": {},
        "state_province": "Manitoba"
      },
      "return_address": {
        "address_line1": "1999 Bishop Grandin Blvd.",
        "address_line2": "Unit 408",
        "address_line3": "Building #7",
        "address_residential_indicator": "no",
        "city_locality": "Winnipeg",
        "company_name": "The Home Depot",
        "country_code": {},
        "email": "example@example.com",
        "name": "John Doe",
        "phone": "+1 204-253-9411 ext. 123",
        "postal_code": {},
        "state_province": "Manitoba"
      },
      "warehouse_id": {}
    }
  ]
}
```

> 400 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 404 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 500 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

<h3 id="list-warehouses-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request was a success.|[list_warehouses_response_body](#schemalist_warehouses_response_body)|
|400|Bad Request|The request contained errors.|[error_response_body](#schemaerror_response_body)|
|404|Not Found|The specified resource does not exist.|[error_response_body](#schemaerror_response_body)|
|500|Internal Server Error|An error occurred on ShipEngine's side.<br><br>> This error will automatically be reported to our engineers.<br>|[error_response_body](#schemaerror_response_body)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Create Warehouse

<a id="opIdcreate_warehouse"></a>

> Code samples

```bash
curl https://example.com/v1/warehouses \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "API-Key: ${API_KEY}" \
  -d '{
    "is_default": false,
    "name": "Zero Cool HQ",
    "origin_address": {
      "address_line1": "1999 Bishop Grandin Blvd.",
      "address_line2": "Unit 408",
      "address_line3": "Building #7",
      "address_residential_indicator": "no",
      "city_locality": "Winnipeg",
      "company_name": "The Home Depot",
      "country_code": {},
      "email": "example@example.com",
      "name": "John Doe",
      "phone": "+1 204-253-9411 ext. 123",
      "postal_code": {},
      "state_province": "Manitoba"
    },
    "return_address": {
      "address_line1": "1999 Bishop Grandin Blvd.",
      "address_line2": "Unit 408",
      "address_line3": "Building #7",
      "address_residential_indicator": "no",
      "city_locality": "Winnipeg",
      "company_name": "The Home Depot",
      "country_code": {},
      "email": "example@example.com",
      "name": "John Doe",
      "phone": "+1 204-253-9411 ext. 123",
      "postal_code": {},
      "state_province": "Manitoba"
    }
  }'
```

`POST /v1/warehouses`

Create a warehouse location that you can use to create shipping items by simply passing in the generated warehouse id.
If the return address is not supplied in the request body then it is assumed that the origin address is the return address as well


> Body parameter

```json
{
  "is_default": false,
  "name": "Zero Cool HQ",
  "origin_address": {
    "address_line1": "1999 Bishop Grandin Blvd.",
    "address_line2": "Unit 408",
    "address_line3": "Building #7",
    "address_residential_indicator": "no",
    "city_locality": "Winnipeg",
    "company_name": "The Home Depot",
    "country_code": {},
    "email": "example@example.com",
    "name": "John Doe",
    "phone": "+1 204-253-9411 ext. 123",
    "postal_code": {},
    "state_province": "Manitoba"
  },
  "return_address": {
    "address_line1": "1999 Bishop Grandin Blvd.",
    "address_line2": "Unit 408",
    "address_line3": "Building #7",
    "address_residential_indicator": "no",
    "city_locality": "Winnipeg",
    "company_name": "The Home Depot",
    "country_code": {},
    "email": "example@example.com",
    "name": "John Doe",
    "phone": "+1 204-253-9411 ext. 123",
    "postal_code": {},
    "state_province": "Manitoba"
  }
}
```

<h3 id="create-warehouse-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[create_warehouse_request_body](#schemacreate_warehouse_request_body)|true|none|
|» is_default|body|boolean \| null|false|Designates which single warehouse is the default on the account|
|» name|body|string|true|Name of the warehouse|
|» origin_address|body|object|true|The origin address of the warehouse|
|» » address_line1|body|string|true|The first line of the street address.  For some addresses, this may be the only line.  Other addresses may require 2 or 3 lines.<br>|
|» » address_line2|body|string \| null|false|The second line of the street address.  For some addresses, this line may not be needed.<br>|
|» » address_line3|body|string \| null|false|The third line of the street address.  For some addresses, this line may not be needed.<br>|
|» » address_residential_indicator|body|object|true|Indicates whether this is a residential address.|
|» » city_locality|body|string|true|The name of the city or locality|
|» » company_name|body|string \| null|false|If this is a business address, then the company name should be specified here.<br>|
|» » country_code|body|object|true|The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)<br>|
|» » email|body|string \| null|false|Email for the address owner.<br>|
|» » name|body|string|true|The name of a contact person at this address.  This field may be set instead of - or in addition to - the `company_name` field.<br>|
|» » phone|body|string|true|The phone number of a contact person at this address.  The format of this phone number varies depending on the country.<br>|
|» » postal_code|body|object|true|none|
|» » state_province|body|string|true|The state or province.  For some countries (including the U.S.) only abbreviations are allowed.  Other countries allow the full name or abbreviation.<br>|
|» return_address|body|object|false|The return address associated with the warehouse|
|» » address_line1|body|string|true|The first line of the street address.  For some addresses, this may be the only line.  Other addresses may require 2 or 3 lines.<br>|
|» » address_line2|body|string \| null|false|The second line of the street address.  For some addresses, this line may not be needed.<br>|
|» » address_line3|body|string \| null|false|The third line of the street address.  For some addresses, this line may not be needed.<br>|
|» » address_residential_indicator|body|object|true|Indicates whether this is a residential address.|
|» » city_locality|body|string|true|The name of the city or locality|
|» » company_name|body|string \| null|false|If this is a business address, then the company name should be specified here.<br>|
|» » country_code|body|object|true|The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)<br>|
|» » email|body|string \| null|false|Email for the address owner.<br>|
|» » name|body|string|true|The name of a contact person at this address.  This field may be set instead of - or in addition to - the `company_name` field.<br>|
|» » phone|body|string|true|The phone number of a contact person at this address.  The format of this phone number varies depending on the country.<br>|
|» » postal_code|body|object|true|none|
|» » state_province|body|string|true|The state or province.  For some countries (including the U.S.) only abbreviations are allowed.  Other countries allow the full name or abbreviation.<br>|

> Example responses

> 200 Response

```json
{
  "created_at": "2019-06-25T18:12:35.583Z",
  "is_default": false,
  "name": "Zero Cool HQ",
  "origin_address": {
    "address_line1": "1999 Bishop Grandin Blvd.",
    "address_line2": "Unit 408",
    "address_line3": "Building #7",
    "address_residential_indicator": "no",
    "city_locality": "Winnipeg",
    "company_name": "The Home Depot",
    "country_code": {},
    "email": "example@example.com",
    "name": "John Doe",
    "phone": "+1 204-253-9411 ext. 123",
    "postal_code": {},
    "state_province": "Manitoba"
  },
  "return_address": {
    "address_line1": "1999 Bishop Grandin Blvd.",
    "address_line2": "Unit 408",
    "address_line3": "Building #7",
    "address_residential_indicator": "no",
    "city_locality": "Winnipeg",
    "company_name": "The Home Depot",
    "country_code": {},
    "email": "example@example.com",
    "name": "John Doe",
    "phone": "+1 204-253-9411 ext. 123",
    "postal_code": {},
    "state_province": "Manitoba"
  },
  "warehouse_id": {}
}
```

> 400 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 404 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 500 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

<h3 id="create-warehouse-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request was a success.|[create_warehouse_response_body](#schemacreate_warehouse_response_body)|
|400|Bad Request|The request contained errors.|[error_response_body](#schemaerror_response_body)|
|404|Not Found|The specified resource does not exist.|[error_response_body](#schemaerror_response_body)|
|500|Internal Server Error|An error occurred on ShipEngine's side.<br><br>> This error will automatically be reported to our engineers.<br>|[error_response_body](#schemaerror_response_body)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Get Warehouse By Id

<a id="opIdget_warehouse_by_id"></a>

> Code samples

```bash
curl https://example.com/v1/warehouses/se-28529731 \
  -H 'Accept: application/json' \
  -H "API-Key: ${API_KEY}"
```

`GET /v1/warehouses/{warehouse_id}`

Retrieve warehouse data based on the warehouse ID

<h3 id="get-warehouse-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|warehouse_id|path|[se_id](#schemase_id)|true|Warehouse ID|

> Example responses

> 200 Response

```json
{
  "created_at": "2019-06-25T18:12:35.583Z",
  "is_default": false,
  "name": "Zero Cool HQ",
  "origin_address": {
    "address_line1": "1999 Bishop Grandin Blvd.",
    "address_line2": "Unit 408",
    "address_line3": "Building #7",
    "address_residential_indicator": "no",
    "city_locality": "Winnipeg",
    "company_name": "The Home Depot",
    "country_code": {},
    "email": "example@example.com",
    "name": "John Doe",
    "phone": "+1 204-253-9411 ext. 123",
    "postal_code": {},
    "state_province": "Manitoba"
  },
  "return_address": {
    "address_line1": "1999 Bishop Grandin Blvd.",
    "address_line2": "Unit 408",
    "address_line3": "Building #7",
    "address_residential_indicator": "no",
    "city_locality": "Winnipeg",
    "company_name": "The Home Depot",
    "country_code": {},
    "email": "example@example.com",
    "name": "John Doe",
    "phone": "+1 204-253-9411 ext. 123",
    "postal_code": {},
    "state_province": "Manitoba"
  },
  "warehouse_id": {}
}
```

> 400 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 404 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 500 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

<h3 id="get-warehouse-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request was a success.|[get_warehouse_by_id_response_body](#schemaget_warehouse_by_id_response_body)|
|400|Bad Request|The request contained errors.|[error_response_body](#schemaerror_response_body)|
|404|Not Found|The specified resource does not exist.|[error_response_body](#schemaerror_response_body)|
|500|Internal Server Error|An error occurred on ShipEngine's side.<br><br>> This error will automatically be reported to our engineers.<br>|[error_response_body](#schemaerror_response_body)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Update Warehouse By Id

<a id="opIdupdate_warehouse"></a>

> Code samples

```bash
curl https://example.com/v1/warehouses/se-28529731 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "API-Key: ${API_KEY}" \
  -d '{
    "is_default": false,
    "name": "Zero Cool HQ",
    "origin_address": {
      "address_line1": "1999 Bishop Grandin Blvd.",
      "address_line2": "Unit 408",
      "address_line3": "Building #7",
      "address_residential_indicator": "no",
      "city_locality": "Winnipeg",
      "company_name": "The Home Depot",
      "country_code": {},
      "email": "example@example.com",
      "name": "John Doe",
      "phone": "+1 204-253-9411 ext. 123",
      "postal_code": {},
      "state_province": "Manitoba"
    },
    "return_address": {
      "address_line1": "1999 Bishop Grandin Blvd.",
      "address_line2": "Unit 408",
      "address_line3": "Building #7",
      "address_residential_indicator": "no",
      "city_locality": "Winnipeg",
      "company_name": "The Home Depot",
      "country_code": {},
      "email": "example@example.com",
      "name": "John Doe",
      "phone": "+1 204-253-9411 ext. 123",
      "postal_code": {},
      "state_province": "Manitoba"
    }
  }'
```

`PUT /v1/warehouses/{warehouse_id}`

Update Warehouse object information

> Body parameter

```json
{
  "is_default": false,
  "name": "Zero Cool HQ",
  "origin_address": {
    "address_line1": "1999 Bishop Grandin Blvd.",
    "address_line2": "Unit 408",
    "address_line3": "Building #7",
    "address_residential_indicator": "no",
    "city_locality": "Winnipeg",
    "company_name": "The Home Depot",
    "country_code": {},
    "email": "example@example.com",
    "name": "John Doe",
    "phone": "+1 204-253-9411 ext. 123",
    "postal_code": {},
    "state_province": "Manitoba"
  },
  "return_address": {
    "address_line1": "1999 Bishop Grandin Blvd.",
    "address_line2": "Unit 408",
    "address_line3": "Building #7",
    "address_residential_indicator": "no",
    "city_locality": "Winnipeg",
    "company_name": "The Home Depot",
    "country_code": {},
    "email": "example@example.com",
    "name": "John Doe",
    "phone": "+1 204-253-9411 ext. 123",
    "postal_code": {},
    "state_province": "Manitoba"
  }
}
```

<h3 id="update-warehouse-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|warehouse_id|path|[se_id](#schemase_id)|true|Warehouse ID|
|body|body|[update_warehouse_request_body](#schemaupdate_warehouse_request_body)|true|none|
|» is_default|body|boolean \| null|false|Designates which single warehouse is the default on the account|
|» name|body|string|true|Name of the warehouse|
|» origin_address|body|object|true|The origin address of the warehouse|
|» » address_line1|body|string|true|The first line of the street address.  For some addresses, this may be the only line.  Other addresses may require 2 or 3 lines.<br>|
|» » address_line2|body|string \| null|false|The second line of the street address.  For some addresses, this line may not be needed.<br>|
|» » address_line3|body|string \| null|false|The third line of the street address.  For some addresses, this line may not be needed.<br>|
|» » address_residential_indicator|body|object|true|Indicates whether this is a residential address.|
|» » city_locality|body|string|true|The name of the city or locality|
|» » company_name|body|string \| null|false|If this is a business address, then the company name should be specified here.<br>|
|» » country_code|body|object|true|The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)<br>|
|» » email|body|string \| null|false|Email for the address owner.<br>|
|» » name|body|string|true|The name of a contact person at this address.  This field may be set instead of - or in addition to - the `company_name` field.<br>|
|» » phone|body|string|true|The phone number of a contact person at this address.  The format of this phone number varies depending on the country.<br>|
|» » postal_code|body|object|true|none|
|» » state_province|body|string|true|The state or province.  For some countries (including the U.S.) only abbreviations are allowed.  Other countries allow the full name or abbreviation.<br>|
|» return_address|body|object|false|The return address associated with the warehouse|
|» » address_line1|body|string|true|The first line of the street address.  For some addresses, this may be the only line.  Other addresses may require 2 or 3 lines.<br>|
|» » address_line2|body|string \| null|false|The second line of the street address.  For some addresses, this line may not be needed.<br>|
|» » address_line3|body|string \| null|false|The third line of the street address.  For some addresses, this line may not be needed.<br>|
|» » address_residential_indicator|body|object|true|Indicates whether this is a residential address.|
|» » city_locality|body|string|true|The name of the city or locality|
|» » company_name|body|string \| null|false|If this is a business address, then the company name should be specified here.<br>|
|» » country_code|body|object|true|The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)<br>|
|» » email|body|string \| null|false|Email for the address owner.<br>|
|» » name|body|string|true|The name of a contact person at this address.  This field may be set instead of - or in addition to - the `company_name` field.<br>|
|» » phone|body|string|true|The phone number of a contact person at this address.  The format of this phone number varies depending on the country.<br>|
|» » postal_code|body|object|true|none|
|» » state_province|body|string|true|The state or province.  For some countries (including the U.S.) only abbreviations are allowed.  Other countries allow the full name or abbreviation.<br>|

> Example responses

> 204 Response

```json
""
```

> 400 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 404 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 500 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

<h3 id="update-warehouse-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The request was successful.|[empty_response_body](#schemaempty_response_body)|
|400|Bad Request|The request contained errors.|[error_response_body](#schemaerror_response_body)|
|404|Not Found|The specified resource does not exist.|[error_response_body](#schemaerror_response_body)|
|500|Internal Server Error|An error occurred on ShipEngine's side.<br><br>> This error will automatically be reported to our engineers.<br>|[error_response_body](#schemaerror_response_body)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Delete Warehouse By ID

<a id="opIddelete_warehouse"></a>

> Code samples

```bash
curl https://example.com/v1/warehouses/se-28529731 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "API-Key: ${API_KEY}"
```

`DELETE /v1/warehouses/{warehouse_id}`

Delete a warehouse by ID

<h3 id="delete-warehouse-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|warehouse_id|path|[se_id](#schemase_id)|true|Warehouse ID|

> Example responses

> 204 Response

```json
""
```

> 400 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 404 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 500 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

<h3 id="delete-warehouse-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The request was successful.|[empty_response_body](#schemaempty_response_body)|
|400|Bad Request|The request contained errors.|[error_response_body](#schemaerror_response_body)|
|404|Not Found|The specified resource does not exist.|[error_response_body](#schemaerror_response_body)|
|500|Internal Server Error|An error occurred on ShipEngine's side.<br><br>> This error will automatically be reported to our engineers.<br>|[error_response_body](#schemaerror_response_body)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Update Warehouse Settings

<a id="opIdupdate_warehouse_settings"></a>

> Code samples

```bash
curl https://example.com/v1/warehouses/se-28529731/settings \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "API-Key: ${API_KEY}" \
  -d '{
    "is_default": true
  }'
```

`PUT /v1/warehouses/{warehouse_id}/settings`

Update Warehouse settings object information

> Body parameter

```json
{
  "is_default": true
}
```

<h3 id="update-warehouse-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|warehouse_id|path|[se_id](#schemase_id)|true|Warehouse ID|
|body|body|[update_warehouse_settings_request_body](#schemaupdate_warehouse_settings_request_body)|true|none|
|» is_default|body|boolean \| null|false|The default property on the warehouse.|

> Example responses

> 204 Response

```json
""
```

> 400 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 404 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 500 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

<h3 id="update-warehouse-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The request was successful.|[empty_response_body](#schemaempty_response_body)|
|400|Bad Request|The request contained errors.|[error_response_body](#schemaerror_response_body)|
|404|Not Found|The specified resource does not exist.|[error_response_body](#schemaerror_response_body)|
|500|Internal Server Error|An error occurred on ShipEngine's side.<br><br>> This error will automatically be reported to our engineers.<br>|[error_response_body](#schemaerror_response_body)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

<h1 id="shipengine-api-webhooks">webhooks</h1>

[Webhooks](https://www.shipengine.com/docs/tracking/webhooks/) are a powerful feature of ShipEngine that can save you from sending repeated polling requests to check on the state of something.  With webhooks, ShipEngine will automatically contact your servers when the stage changes.  This can include [parcel tracking](https://www.shipengine.com/docs/tracking/) events, notification of the completion of a [batch operation](https://www.shipengine.com/docs/labels/bulk/),  or new [salses orders](https://www.shipengine.com/docs/orders/).


<a href="https://www.shipengine.com/docs/tracking/webhooks/">Learn how to setup webhooks and start listening to ShipEngine events.</a>

## List Webhooks

<a id="opIdlist_webhooks"></a>

> Code samples

```bash
curl https://example.com/v1/environment/webhooks \
  -H 'Accept: application/json' \
  -H "API-Key: ${API_KEY}"
```

`GET /v1/environment/webhooks`

List all webhooks currently enabled for the account.

> Example responses

> 200 Response

```json
[
  {
    "event": {},
    "url": "https://[YOUR ENDPOINT ID].x.requestbin.com",
    "webhook_id": {}
  }
]
```

> 400 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 500 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

<h3 id="list-webhooks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request was a success.|[list_webhooks_response_body](#schemalist_webhooks_response_body)|
|400|Bad Request|The request contained errors.|[error_response_body](#schemaerror_response_body)|
|500|Internal Server Error|An error occurred on ShipEngine's side.<br><br>> This error will automatically be reported to our engineers.<br>|[error_response_body](#schemaerror_response_body)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Create a Webhook

<a id="opIdcreate_webhook"></a>

> Code samples

```bash
curl https://example.com/v1/environment/webhooks \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "API-Key: ${API_KEY}" \
  -d '{
    "event": {},
    "url": "https://[YOUR ENDPOINT ID].x.requestbin.com"
  }'
```

`POST /v1/environment/webhooks`

Create a webook for specific events in the environment.

> Body parameter

```json
{
  "event": {},
  "url": "https://[YOUR ENDPOINT ID].x.requestbin.com"
}
```

<h3 id="create-a-webhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[create_webhook_request_body](#schemacreate_webhook_request_body)|true|none|
|» event|body|object|true|none|
|» url|body|object|true|The url that the webhook sends the request to|

> Example responses

> 200 Response

```json
{
  "event": {},
  "url": "https://[YOUR ENDPOINT ID].x.requestbin.com",
  "webhook_id": {}
}
```

> 400 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 409 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 500 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

<h3 id="create-a-webhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request was a success.|[create_webhook_response_body](#schemacreate_webhook_response_body)|
|400|Bad Request|The request contained errors.|[error_response_body](#schemaerror_response_body)|
|409|Conflict|The request conflicts with an existing resource.|[error_response_body](#schemaerror_response_body)|
|500|Internal Server Error|An error occurred on ShipEngine's side.<br><br>> This error will automatically be reported to our engineers.<br>|[error_response_body](#schemaerror_response_body)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Get Webhook By ID

<a id="opIdget_webhook_by_id"></a>

> Code samples

```bash
curl https://example.com/v1/environment/webhooks/se-28529731 \
  -H 'Accept: application/json' \
  -H "API-Key: ${API_KEY}"
```

`GET /v1/environment/webhooks/{webhook_id}`

Retrieve individual webhook by an ID

<h3 id="get-webhook-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|webhook_id|path|[se_id](#schemase_id)|true|Webhook ID|

> Example responses

> 200 Response

```json
{
  "event": {},
  "url": "https://[YOUR ENDPOINT ID].x.requestbin.com",
  "webhook_id": {}
}
```

> 400 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 404 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 500 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

<h3 id="get-webhook-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request was a success.|[get_webhook_by_id_response_body](#schemaget_webhook_by_id_response_body)|
|400|Bad Request|The request contained errors.|[error_response_body](#schemaerror_response_body)|
|404|Not Found|The specified resource does not exist.|[error_response_body](#schemaerror_response_body)|
|500|Internal Server Error|An error occurred on ShipEngine's side.<br><br>> This error will automatically be reported to our engineers.<br>|[error_response_body](#schemaerror_response_body)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Update a Webhook

<a id="opIdupdate_webhook"></a>

> Code samples

```bash
curl https://example.com/v1/environment/webhooks/se-28529731 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "API-Key: ${API_KEY}" \
  -d '{
    "url": "https://[YOUR ENDPOINT ID].x.requestbin.com"
  }'
```

`PUT /v1/environment/webhooks/{webhook_id}`

Update the webhook url property

> Body parameter

```json
{
  "url": "https://[YOUR ENDPOINT ID].x.requestbin.com"
}
```

<h3 id="update-a-webhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|webhook_id|path|[se_id](#schemase_id)|true|Webhook ID|
|body|body|[update_webhook_request_body](#schemaupdate_webhook_request_body)|true|none|
|» url|body|object|false|The url that the wehbook sends the request|

> Example responses

> 204 Response

```json
""
```

> 400 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 404 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 500 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

<h3 id="update-a-webhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The request was successful.|[empty_response_body](#schemaempty_response_body)|
|400|Bad Request|The request contained errors.|[error_response_body](#schemaerror_response_body)|
|404|Not Found|The specified resource does not exist.|[error_response_body](#schemaerror_response_body)|
|500|Internal Server Error|An error occurred on ShipEngine's side.<br><br>> This error will automatically be reported to our engineers.<br>|[error_response_body](#schemaerror_response_body)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Delete Webhook By ID

<a id="opIddelete_webhook"></a>

> Code samples

```bash
curl https://example.com/v1/environment/webhooks/se-28529731 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "API-Key: ${API_KEY}"
```

`DELETE /v1/environment/webhooks/{webhook_id}`

Delete a webhook

<h3 id="delete-webhook-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|webhook_id|path|[se_id](#schemase_id)|true|Webhook ID|

> Example responses

> 204 Response

```json
""
```

> 400 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 404 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

> 500 Response

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

<h3 id="delete-webhook-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The request was successful.|[empty_response_body](#schemaempty_response_body)|
|400|Bad Request|The request contained errors.|[error_response_body](#schemaerror_response_body)|
|404|Not Found|The specified resource does not exist.|[error_response_body](#schemaerror_response_body)|
|500|Internal Server Error|An error occurred on ShipEngine's side.<br><br>> This error will automatically be reported to our engineers.<br>|[error_response_body](#schemaerror_response_body)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

# Schemas

<h2 id="tocS_add_funds_to_carrier_request_body">add_funds_to_carrier_request_body</h2>
<!-- backwards compatibility -->
<a id="schemaadd_funds_to_carrier_request_body"></a>
<a id="schema_add_funds_to_carrier_request_body"></a>
<a id="tocSadd_funds_to_carrier_request_body"></a>
<a id="tocsadd_funds_to_carrier_request_body"></a>

```json
{
  "amount": 0,
  "currency": {}
}
```

An add funds to carrier request body

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|number(double)|true|none|The monetary amount, in the specified currency.|
|currency|object|true|none|none|

<h2 id="tocS_add_funds_to_carrier_response_body">add_funds_to_carrier_response_body</h2>
<!-- backwards compatibility -->
<a id="schemaadd_funds_to_carrier_response_body"></a>
<a id="schema_add_funds_to_carrier_response_body"></a>
<a id="tocSadd_funds_to_carrier_response_body"></a>
<a id="tocsadd_funds_to_carrier_response_body"></a>

```json
{
  "balance": {
    "amount": 0,
    "currency": {}
  }
}
```

The current balance of the requested carrier account

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|balance|object|true|read-only|The current balance of the account|

<h2 id="tocS_add_funds_to_insurance_request_body">add_funds_to_insurance_request_body</h2>
<!-- backwards compatibility -->
<a id="schemaadd_funds_to_insurance_request_body"></a>
<a id="schema_add_funds_to_insurance_request_body"></a>
<a id="tocSadd_funds_to_insurance_request_body"></a>
<a id="tocsadd_funds_to_insurance_request_body"></a>

```json
{
  "amount": 0,
  "currency": {}
}
```

An add funds to insurance request body

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|number(double)|true|none|The monetary amount, in the specified currency.|
|currency|object|true|none|none|

<h2 id="tocS_add_funds_to_insurance_response_body">add_funds_to_insurance_response_body</h2>
<!-- backwards compatibility -->
<a id="schemaadd_funds_to_insurance_response_body"></a>
<a id="schema_add_funds_to_insurance_response_body"></a>
<a id="tocSadd_funds_to_insurance_response_body"></a>
<a id="tocsadd_funds_to_insurance_response_body"></a>

```json
{
  "amount": 0,
  "currency": {}
}
```

Add funds to insurance response body

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|number(double)|true|none|The monetary amount, in the specified currency.|
|currency|object|true|none|none|

<h2 id="tocS_add_to_batch_request_body">add_to_batch_request_body</h2>
<!-- backwards compatibility -->
<a id="schemaadd_to_batch_request_body"></a>
<a id="schema_add_to_batch_request_body"></a>
<a id="tocSadd_to_batch_request_body"></a>
<a id="tocsadd_to_batch_request_body"></a>

```json
{
  "rate_ids": [
    {}
  ],
  "shipment_ids": [
    {}
  ]
}
```

An add to batch request body

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rate_ids|[object]|false|none|Array of Rate IDs to be modifed on the batch|
|shipment_ids|[object]|false|none|The Shipment Ids to be modified on the batch|

<h2 id="tocS_address">address</h2>
<!-- backwards compatibility -->
<a id="schemaaddress"></a>
<a id="schema_address"></a>
<a id="tocSaddress"></a>
<a id="tocsaddress"></a>

```json
{
  "address_line1": "1999 Bishop Grandin Blvd.",
  "address_line2": "Unit 408",
  "address_line3": "Building #7",
  "address_residential_indicator": "no",
  "city_locality": "Winnipeg",
  "company_name": "The Home Depot",
  "country_code": {},
  "email": "example@example.com",
  "name": "John Doe",
  "phone": "+1 204-253-9411 ext. 123",
  "postal_code": {},
  "state_province": "Manitoba"
}
```

Any residential or business mailing address, anywhere in the world.

> **Note:** Either `name` or `company_name` must be set. Both may be specified, if relevant.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address_line1|string|true|none|The first line of the street address.  For some addresses, this may be the only line.  Other addresses may require 2 or 3 lines.<br>|
|address_line2|string \| null|false|none|The second line of the street address.  For some addresses, this line may not be needed.<br>|
|address_line3|string \| null|false|none|The third line of the street address.  For some addresses, this line may not be needed.<br>|
|address_residential_indicator|object|true|none|Indicates whether this is a residential address.|
|city_locality|string|true|none|The name of the city or locality|
|company_name|string \| null|false|none|If this is a business address, then the company name should be specified here.<br>|
|country_code|object|true|none|The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)<br>|
|email|string \| null|false|none|Email for the address owner.<br>|
|name|string|true|none|The name of a contact person at this address.  This field may be set instead of - or in addition to - the `company_name` field.<br>|
|phone|string|true|none|The phone number of a contact person at this address.  The format of this phone number varies depending on the country.<br>|
|postal_code|object|true|none|none|
|state_province|string|true|none|The state or province.  For some countries (including the U.S.) only abbreviations are allowed.  Other countries allow the full name or abbreviation.<br>|

<h2 id="tocS_address_residential_indicator">address_residential_indicator</h2>
<!-- backwards compatibility -->
<a id="schemaaddress_residential_indicator"></a>
<a id="schema_address_residential_indicator"></a>
<a id="tocSaddress_residential_indicator"></a>
<a id="tocsaddress_residential_indicator"></a>

```json
"unknown"
```

Indicates whether an address is residential.

<h2 id="tocS_address_to_validate">address_to_validate</h2>
<!-- backwards compatibility -->
<a id="schemaaddress_to_validate"></a>
<a id="schema_address_to_validate"></a>
<a id="tocSaddress_to_validate"></a>
<a id="tocsaddress_to_validate"></a>

```json
{
  "address_line1": "1999 Bishop Grandin Blvd.",
  "address_line2": "Unit 408",
  "address_line3": "Building #7",
  "address_residential_indicator": "no",
  "city_locality": "Winnipeg",
  "company_name": "The Home Depot",
  "country_code": {},
  "email": "example@example.com",
  "name": "John Doe",
  "phone": "+1 204-253-9411 ext. 123",
  "postal_code": {},
  "state_province": "Manitoba"
}
```

Any residential or business mailing address, anywhere in the world.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address_line1|string|true|none|The first line of the street address.  For some addresses, this may be the only line.  Other addresses may require 2 or 3 lines.<br>|
|address_line2|string \| null|false|none|The second line of the street address.  For some addresses, this line may not be needed.<br>|
|address_line3|string \| null|false|none|The third line of the street address.  For some addresses, this line may not be needed.<br>|
|address_residential_indicator|object|false|none|Indicates whether this is a residential address.|
|city_locality|string|true|none|The name of the city or locality|
|company_name|string \| null|false|none|If this is a business address, then the company name should be specified here.<br>|
|country_code|object|true|none|The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)<br>|
|email|string \| null|false|none|Email for the address owner.<br>|
|name|string|false|none|The name of a contact person at this address.  This field may be set instead of - or in addition to - the `company_name` field.<br>|
|phone|string|false|none|The phone number of a contact person at this address.  The format of this phone number varies depending on the country.<br>|
|postal_code|object|false|none|none|
|state_province|string|true|none|The state or province.  For some countries (including the U.S.) only abbreviations are allowed.  Other countries allow the full name or abbreviation.<br>|

<h2 id="tocS_address_validating_shipment">address_validating_shipment</h2>
<!-- backwards compatibility -->
<a id="schemaaddress_validating_shipment"></a>
<a id="schema_address_validating_shipment"></a>
<a id="tocSaddress_validating_shipment"></a>
<a id="tocsaddress_validating_shipment"></a>

```json
{
  "validate_address": "no_validation",
  "advanced_options": {
    "bill_to_account": null,
    "bill_to_country_code": null,
    "bill_to_party": null,
    "bill_to_postal_code": null,
    "collect_on_delivery": {
      "payment_amount": {
        "amount": 0,
        "currency": {}
      },
      "payment_type": {}
    },
    "contains_alcohol": false,
    "custom_field1": null,
    "custom_field2": null,
    "custom_field3": null,
    "delivered_duty_paid": false,
    "dry_ice": false,
    "dry_ice_weight": {
      "unit": {},
      "value": 0.1
    },
    "fedex_freight": {
      "booking_confirmation": "string",
      "shipper_load_and_count": "string"
    },
    "freight_class": 77.5,
    "non_machinable": false,
    "origin_type": null,
    "saturday_delivery": false,
    "shipper_release": null,
    "third_party_consignee": false,
    "use_ups_ground_freight_pricing": null
  },
  "carrier_id": {},
  "confirmation": "none",
  "created_at": {},
  "customs": null,
  "external_order_id": "string",
  "external_shipment_id": "string",
  "insurance_provider": "none",
  "items": [],
  "modified_at": {},
  "order_source_code": {},
  "origin_type": {},
  "packages": [
    {
      "content_description": "Hand knitted wool socks",
      "dimensions": {
        "height": 0,
        "length": 0,
        "unit": "inch",
        "width": 0
      },
      "external_package_id": "string",
      "form_download": {
        "href": {},
        "type": "string"
      },
      "insured_value": [
        {
          "amount": 0,
          "currency": "usd"
        }
      ],
      "label_download": {
        "href": {},
        "pdf": {},
        "png": {},
        "zpl": {}
      },
      "label_messages": {
        "reference1": null,
        "reference2": null,
        "reference3": null
      },
      "package_code": {},
      "package_id": {},
      "sequence": 0,
      "tracking_number": {},
      "weight": {
        "unit": {},
        "value": 0.1
      }
    }
  ],
  "return_to": {
    "address_line1": "1999 Bishop Grandin Blvd.",
    "address_line2": "Unit 408",
    "address_line3": "Building #7",
    "address_residential_indicator": "no",
    "city_locality": "Winnipeg",
    "company_name": "The Home Depot",
    "country_code": {},
    "email": "example@example.com",
    "name": "John Doe",
    "phone": "+1 204-253-9411 ext. 123",
    "postal_code": {},
    "state_province": "Manitoba",
    "instructions": "string"
  },
  "service_code": {},
  "ship_date": {},
  "ship_from": {
    "address_line1": "1999 Bishop Grandin Blvd.",
    "address_line2": "Unit 408",
    "address_line3": "Building #7",
    "address_residential_indicator": "no",
    "city_locality": "Winnipeg",
    "company_name": "The Home Depot",
    "country_code": {},
    "email": "example@example.com",
    "name": "John Doe",
    "phone": "+1 204-253-9411 ext. 123",
    "postal_code": {},
    "state_province": "Manitoba",
    "instructions": "string"
  },
  "ship_to": {
    "address_line1": "1999 Bishop Grandin Blvd.",
    "address_line2": "Unit 408",
    "address_line3": "Building #7",
    "address_residential_indicator": "no",
    "city_locality": "Winnipeg",
    "company_name": "The Home Depot",
    "country_code": {},
    "email": "example@example.com",
    "name": "John Doe",
    "phone": "+1 204-253-9411 ext. 123",
    "postal_code": {},
    "state_province": "Manitoba",
    "instructions": "string"
  },
  "shipment_id": {},
  "shipment_number": "string",
  "shipment_status": "pending",
  "tags": [],
  "tax_identifiers": [
    {
      "identifier_type": {},
      "issuing_authority": "string",
      "taxable_entity_type": {},
      "value": "string"
    }
  ],
  "total_weight": {
    "unit": {},
    "value": 0.1
  },
  "warehouse_id": null
}
```

An address validating shipment

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|validate_address|object|false|none|none|
|advanced_options|object|false|none|Advanced shipment options.  These are entirely optional.|
|carrier_id|object|true|none|The carrier account that is billed for the shipping charges|
|confirmation|object|false|none|The type of delivery confirmation that is required for this shipment.|
|created_at|object|false|read-only|The date and time that the shipment was created in ShipEngine.|
|customs|object \| null|false|none|Customs information.  This is usually only needed for international shipments.<br>|
|external_order_id|string \| null|false|none|ID that the Order Source assigned|
|external_shipment_id|string \| null|false|none|A unique user-defined key to identify a shipment.  This can be used to retrieve the shipment.<br><br>> **Warning:** The `external_shipment_id` is limited to 50 characters. Any additional characters will be truncated.<br>|
|insurance_provider|object|false|none|The insurance provider to use for any insured packages in the shipment.<br>|
|items|[object]|false|none|Describe the packages included in this shipment as related to potential metadata that was imported from<br>external order sources<br>|
|modified_at|object|false|read-only|The date and time that the shipment was created or last modified.|
|order_source_code|object|false|none|none|
|origin_type|object \| null|false|none|Indicates if the package will be picked up or dropped off by the carrier|
|packages|[object]|false|none|The packages in the shipment.<br><br>> **Note:** Some carriers only allow one package per shipment.  If you attempt to create a multi-package shipment for a carrier that doesn't allow it, an error will be returned.<br>|
|return_to|object|false|none|The return address for this shipment.  Defaults to the `ship_from` address.<br>|
|service_code|object|true|none|The [carrier service](https://www.shipengine.com/docs/shipping/use-a-carrier-service/) used to ship the package, such as `fedex_ground`, `usps_first_class_mail`, `flat_rate_envelope`, etc.<br>|
|ship_date|object|false|none|The date that the shipment was (or will be) shippped.  ShipEngine will take the day of week into consideration. For example, if the carrier does not operate on Sundays, then a package that would have shipped on Sunday will ship on Monday instead.<br>|
|ship_from|object|true|none|The shipment's origin address. If you frequently ship from the same location, consider [creating a warehouse](https://www.shipengine.com/docs/reference/create-warehouse/).  Then you can simply specify the `warehouse_id` rather than the complete address each time.<br>|
|ship_to|object|true|none|The recipient's mailing address|
|shipment_id|object|true|read-only|A string that uniquely identifies the shipment|
|shipment_number|string \| null|false|none|A non-unique user-defined number used to identify a shipment.  If undefined, this will match the external_shipment_id of the shipment.<br><br>> **Warning:** The `shipment_number` is limited to 50 characters. Any additional characters will be truncated.<br>|
|shipment_status|object|false|read-only|The current status of the shipment|
|tags|[object]|false|read-only|Arbitrary tags associated with this shipment.  Tags can be used to categorize shipments, and shipments can be queried by their tags.<br>|
|tax_identifiers|[object]|false|none|none|
|total_weight|object|false|read-only|The combined weight of all packages in the shipment|
|warehouse_id|object \| null|false|none|The [warehouse](https://www.shipengine.com/docs/shipping/ship-from-a-warehouse/) that the shipment is being shipped from.  Either `warehouse_id` or `ship_from` must be specified.<br>|

<h2 id="tocS_address_validation_code">address_validation_code</h2>
<!-- backwards compatibility -->
<a id="schemaaddress_validation_code"></a>
<a id="schema_address_validation_code"></a>
<a id="tocSaddress_validation_code"></a>
<a id="tocsaddress_validation_code"></a>

```json
"a1000"
```

The error codes that can be returned by the address validation API

<h2 id="tocS_address_validation_detail_code">address_validation_detail_code</h2>
<!-- backwards compatibility -->
<a id="schemaaddress_validation_detail_code"></a>
<a id="schema_address_validation_detail_code"></a>
<a id="tocSaddress_validation_detail_code"></a>
<a id="tocsaddress_validation_detail_code"></a>

```json
"unsupported_country"
```

The detailed error codes that can be returned by the address validation API

<h2 id="tocS_address_validation_message_type">address_validation_message_type</h2>
<!-- backwards compatibility -->
<a id="schemaaddress_validation_message_type"></a>
<a id="schema_address_validation_message_type"></a>
<a id="tocSaddress_validation_message_type"></a>
<a id="tocsaddress_validation_message_type"></a>

```json
"error"
```

The different types of messages that can be returned by the address validation API

<h2 id="tocS_address_validation_result">address_validation_result</h2>
<!-- backwards compatibility -->
<a id="schemaaddress_validation_result"></a>
<a id="schema_address_validation_result"></a>
<a id="tocSaddress_validation_result"></a>
<a id="tocsaddress_validation_result"></a>

```json
{
  "matched_address": {
    "address_line1": "1999 Bishop Grandin Blvd.",
    "address_line2": "Unit 408",
    "address_line3": "Building #7",
    "address_residential_indicator": "no",
    "city_locality": "Winnipeg",
    "company_name": "The Home Depot",
    "country_code": {},
    "email": "example@example.com",
    "name": "John Doe",
    "phone": "+1 204-253-9411 ext. 123",
    "postal_code": {},
    "state_province": "Manitoba"
  },
  "messages": [],
  "original_address": {
    "address_line1": "1999 Bishop Grandin Blvd.",
    "address_line2": "Unit 408",
    "address_line3": "Building #7",
    "address_residential_indicator": "no",
    "city_locality": "Winnipeg",
    "company_name": "The Home Depot",
    "country_code": {},
    "email": "example@example.com",
    "name": "John Doe",
    "phone": "+1 204-253-9411 ext. 123",
    "postal_code": {},
    "state_province": "Manitoba"
  },
  "status": {}
}
```

An address validation result

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|matched_address|object \| null|true|read-only|The matched address found by the Shipengine API|
|messages|[[response_message](#schemaresponse_message)]|true|read-only|The list of messages that were generated during the address validation request.|
|original_address|object|true|none|The original address that was sent for validation|
|status|object|true|none|none|

<h2 id="tocS_address_validation_status">address_validation_status</h2>
<!-- backwards compatibility -->
<a id="schemaaddress_validation_status"></a>
<a id="schema_address_validation_status"></a>
<a id="tocSaddress_validation_status"></a>
<a id="tocsaddress_validation_status"></a>

```json
"unverified"
```

The possible address validation status values

<h2 id="tocS_advanced_shipment_options">advanced_shipment_options</h2>
<!-- backwards compatibility -->
<a id="schemaadvanced_shipment_options"></a>
<a id="schema_advanced_shipment_options"></a>
<a id="tocSadvanced_shipment_options"></a>
<a id="tocsadvanced_shipment_options"></a>

```json
{
  "bill_to_account": null,
  "bill_to_country_code": null,
  "bill_to_party": null,
  "bill_to_postal_code": null,
  "collect_on_delivery": {
    "payment_amount": {
      "amount": 0,
      "currency": {}
    },
    "payment_type": {}
  },
  "contains_alcohol": false,
  "custom_field1": null,
  "custom_field2": null,
  "custom_field3": null,
  "delivered_duty_paid": false,
  "dry_ice": false,
  "dry_ice_weight": {
    "unit": {},
    "value": 0.1
  },
  "fedex_freight": {
    "booking_confirmation": "string",
    "shipper_load_and_count": "string"
  },
  "freight_class": 77.5,
  "non_machinable": false,
  "origin_type": null,
  "saturday_delivery": false,
  "shipper_release": null,
  "third_party_consignee": false,
  "use_ups_ground_freight_pricing": null
}
```

Advanced shipment options

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bill_to_account|string \| null|false|none|This field is used to [bill shipping costs to a third party](https://www.shipengine.com/docs/shipping/bill-to-third-party/).  This field must be used in conjunction with the `bill_to_country_code`, `bill_to_party`, and `bill_to_postal_code` fields.<br>|
|bill_to_country_code|object \| null|false|none|The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1) of the third-party that is responsible for shipping costs.<br>|
|bill_to_party|object \| null|false|none|Indicates whether to bill shipping costs to the recipient or to a third-party.  When billing to a third-party, the `bill_to_account`, `bill_to_country_code`, and `bill_to_postal_code` fields must also be set.<br>|
|bill_to_postal_code|string \| null|false|none|The postal code of the third-party that is responsible for shipping costs.<br>|
|collect_on_delivery|[collect_on_delivery](#schemacollect_on_delivery)|false|none|Defer payment until package is delivered, instead of when it is ordered.|
|contains_alcohol|boolean|false|none|Indicates that the shipment contains alcohol.|
|custom_field1|string \| null|false|none|An arbitrary field that can be used to store information about the shipment.<br>|
|custom_field2|string \| null|false|none|An arbitrary field that can be used to store information about the shipment.<br>|
|custom_field3|string \| null|false|none|An arbitrary field that can be used to store information about the shipment.<br>|
|delivered_duty_paid|boolean|false|none|Indicates that the shipper is paying the international delivery duties for this shipment.  This option is supported by UPS, FedEx, and DHL Express.<br>|
|dry_ice|boolean|false|none|Indicates if the shipment contain dry ice|
|dry_ice_weight|object \| null|false|none|The weight of the dry ice in the shipment|
|fedex_freight|object|false|none|Provide details for the Fedex freight service|
|freight_class|string \| null|false|none|The National Motor Freight Traffic Association [freight class](http://www.nmfta.org/pages/nmfc?AspxAutoDetectCookieSupport=1), such as "77.5", "110", or "250".<br>|
|non_machinable|boolean|false|none|Indicates that the package cannot be processed automatically because it is too large or irregularly shaped. This is primarily for USPS shipments.  See [Section 1.2 of the USPS parcel standards](https://pe.usps.com/text/dmm300/101.htm#ep1047495) for details.<br>|
|origin_type|object \| null|false|none|none|
|saturday_delivery|boolean|false|none|Enables Saturday delivery, if supported by the carrier.|
|shipper_release|boolean \| null|false|none|none|
|third_party_consignee|boolean|false|none|Third Party Consignee option is a value-added service that allows the shipper to supply goods without commercial invoices being attached|
|use_ups_ground_freight_pricing|boolean \| null|false|none|Whether to use [UPS Ground Freight pricing](https://www.shipengine.com/docs/shipping/ups-ground-freight/).  If enabled, then a `freight_class` must also be specified.<br>|

<h2 id="tocS_alternative_identifier">alternative_identifier</h2>
<!-- backwards compatibility -->
<a id="schemaalternative_identifier"></a>
<a id="schema_alternative_identifier"></a>
<a id="tocSalternative_identifier"></a>
<a id="tocsalternative_identifier"></a>

```json
{
  "type": "last_mile_tracking_number",
  "value": "12345678912345678912"
}
```

Additional information some carriers may provide by which to identify a given label in their system.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|The type of alternative_identifier that corresponds to the value.<br>|
|value|string|false|none|The value of the alternative_identifier.<br>|

<h2 id="tocS_ancillary_service_endorsement">ancillary_service_endorsement</h2>
<!-- backwards compatibility -->
<a id="schemaancillary_service_endorsement"></a>
<a id="schema_ancillary_service_endorsement"></a>
<a id="tocSancillary_service_endorsement"></a>
<a id="tocsancillary_service_endorsement"></a>

```json
"none"
```

[Ancillary service endorsements](https://pe.usps.com/text/qsg300/Q507.htm) are used by mailers to request an addressee's new address and to provide the carrier with instructions on how to handle packages that are undeliverable as addressed.

| Ancillary Service Endorsement  | Description
|--------------------------------|-----------------------------------------------------
| `none`                         | No ancillary service is requested. Depending on the carrier servive, the package may be forwarded, returned, or discarded.
| `return_service_requested`     | The package is returned to the sender. If possible, notification of the new address is is included with the returned package.
| `forwarding_service_requested` | Forward the package to the new address, if possible; otherwise, return it to the sender.
| `address_service_requested`    | Forward the package to the new address, if possible; otherwise, return it to the sender. This is similar to `forwarding_service_requested`, but different restrictions and charges may apply.
| `change_service_requested`     | The package is discarded. If possible, notification of the new address is sent to the sender.
| `leave_if_no_response`         |

<h2 id="tocS_batch">batch</h2>
<!-- backwards compatibility -->
<a id="schemabatch"></a>
<a id="schema_batch"></a>
<a id="tocSbatch"></a>
<a id="tocsbatch"></a>

```json
{
  "batch_errors_url": {
    "href": {},
    "type": "string"
  },
  "batch_id": {},
  "batch_labels_url": {
    "href": {},
    "type": "string"
  },
  "batch_notes": "Batch for morning shipment",
  "batch_number": "string",
  "batch_shipments_url": {
    "href": {},
    "type": "string"
  },
  "completed": 1,
  "count": 2,
  "created_at": {},
  "errors": 2,
  "external_batch_id": "string",
  "form_download": {
    "href": {},
    "type": "string"
  },
  "forms": 3,
  "label_download": {
    "href": {},
    "pdf": {},
    "png": {},
    "zpl": {}
  },
  "label_format": "pdf",
  "label_layout": "4x6",
  "processed_at": {},
  "status": {},
  "warnings": 1
}
```

Batches are an advanced feature of ShipEngine designed for users who need to generate hundreds or
thousands of labels at a time.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|batch_errors_url|object|true|read-only|Link to batch errors endpoint|
|batch_id|object|true|read-only|A string that uniquely identifies the batch|
|batch_labels_url|object|true|none|Link to batch labels query|
|batch_notes|string \| null|true|read-only|Custom notes you can add for each created batch|
|batch_number|string|true|read-only|The batch number.|
|batch_shipments_url|object|true|none|The batch shipments endpoint|
|completed|integer(int32)|true|read-only|The number of labels generated in the batch|
|count|integer(int32)|true|read-only|The total of errors, warnings, and completed properties|
|created_at|object|true|read-only|The date and time the batch was created in ShipEngine|
|errors|integer(int32)|true|read-only|The number of errors that occurred while generating the batch|
|external_batch_id|string \| null|true|read-only|A string that uniquely identifies the external batch|
|form_download|object|true|read-only|The form download for any customs that are needed|
|forms|integer(int32)|true|read-only|The number of forms for customs that are available for download|
|label_download|object|true|read-only|The label download for the batch|
|label_format|object|true|read-only|none|
|label_layout|object|true|read-only|label layout|
|processed_at|object \| null|true|read-only|The date and time the batch was processed in ShipEngine|
|status|object|true|read-only|none|
|warnings|integer(int32)|true|read-only|The number of warnings that occurred while generating the batch|

<h2 id="tocS_batch_response_error">batch_response_error</h2>
<!-- backwards compatibility -->
<a id="schemabatch_response_error"></a>
<a id="schema_batch_response_error"></a>
<a id="tocSbatch_response_error"></a>
<a id="tocsbatch_response_error"></a>

```json
{
  "error": "Recipient address has not been verified.",
  "external_shipment_id": "string",
  "shipment_id": {}
}
```

A batch response error

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|read-only|Error message associated with the shipment.|
|external_shipment_id|string|false|read-only|An external shipment id associated with the shipment|
|shipment_id|object|false|read-only|A string that uniquely identifies the shipment|

<h2 id="tocS_batch_status">batch_status</h2>
<!-- backwards compatibility -->
<a id="schemabatch_status"></a>
<a id="schema_batch_status"></a>
<a id="tocSbatch_status"></a>
<a id="tocsbatch_status"></a>

```json
"open"
```

The possible batch status values

<h2 id="tocS_batches_sort_by">batches_sort_by</h2>
<!-- backwards compatibility -->
<a id="schemabatches_sort_by"></a>
<a id="schema_batches_sort_by"></a>
<a id="tocSbatches_sort_by"></a>
<a id="tocsbatches_sort_by"></a>

```json
"ship_date"
```

The possible batches sort by values

<h2 id="tocS_bill_to_party">bill_to_party</h2>
<!-- backwards compatibility -->
<a id="schemabill_to_party"></a>
<a id="schema_bill_to_party"></a>
<a id="tocSbill_to_party"></a>
<a id="tocsbill_to_party"></a>

```json
"recipient"
```

The possible bill to party values

<h2 id="tocS_bulk_rate">bulk_rate</h2>
<!-- backwards compatibility -->
<a id="schemabulk_rate"></a>
<a id="schema_bulk_rate"></a>
<a id="tocSbulk_rate"></a>
<a id="tocsbulk_rate"></a>

```json
{
  "created_at": {},
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "rate_request_id": {},
  "shipment_id": {},
  "status": {}
}
```

A bulk rate

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created_at|string(date-time)|true|read-only|none|
|errors|[object]|true|read-only|An array of errors that were returned while retrieving the bulk rate|
|rate_request_id|object|true|read-only|A string that uniquely identifies the rate request|
|shipment_id|object|true|read-only|A string that uniquely identifies the shipment|
|status|object|true|read-only|none|

<h2 id="tocS_calculate_rates_request_body">calculate_rates_request_body</h2>
<!-- backwards compatibility -->
<a id="schemacalculate_rates_request_body"></a>
<a id="schema_calculate_rates_request_body"></a>
<a id="tocScalculate_rates_request_body"></a>
<a id="tocscalculate_rates_request_body"></a>

```json
{
  "rate_options": {
    "calculate_tax_amount": true,
    "carrier_ids": [
      {}
    ],
    "is_return": true,
    "package_types": [
      "string"
    ],
    "preferred_currency": {},
    "service_codes": [
      "string"
    ]
  },
  "shipment_id": {}
}
```

A rate shipment request body

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rate_options|object|false|none|The rate options|
|*oneOf*|[shipment_id_request](#schemashipment_id_request)|false|none|none|
|*oneOf*|[shipment_request](#schemashipment_request)|false|none|none|

<h2 id="tocS_calculate_rates_response_body">calculate_rates_response_body</h2>
<!-- backwards compatibility -->
<a id="schemacalculate_rates_response_body"></a>
<a id="schema_calculate_rates_response_body"></a>
<a id="tocScalculate_rates_response_body"></a>
<a id="tocscalculate_rates_response_body"></a>

```json
{
  "advanced_options": {
    "bill_to_account": null,
    "bill_to_country_code": null,
    "bill_to_party": null,
    "bill_to_postal_code": null,
    "collect_on_delivery": {
      "payment_amount": {
        "amount": 0,
        "currency": {}
      },
      "payment_type": {}
    },
    "contains_alcohol": false,
    "custom_field1": null,
    "custom_field2": null,
    "custom_field3": null,
    "delivered_duty_paid": false,
    "dry_ice": false,
    "dry_ice_weight": {
      "unit": {},
      "value": 0.1
    },
    "fedex_freight": {
      "booking_confirmation": "string",
      "shipper_load_and_count": "string"
    },
    "freight_class": 77.5,
    "non_machinable": false,
    "origin_type": null,
    "saturday_delivery": false,
    "shipper_release": null,
    "third_party_consignee": false,
    "use_ups_ground_freight_pricing": null
  },
  "carrier_id": {},
  "confirmation": "none",
  "created_at": {},
  "customs": null,
  "external_order_id": "string",
  "external_shipment_id": "string",
  "insurance_provider": "none",
  "items": [],
  "modified_at": {},
  "order_source_code": {},
  "origin_type": {},
  "packages": [
    {
      "content_description": "Hand knitted wool socks",
      "dimensions": {
        "height": 0,
        "length": 0,
        "unit": "inch",
        "width": 0
      },
      "external_package_id": "string",
      "form_download": {
        "href": {},
        "type": "string"
      },
      "insured_value": [
        {
          "amount": 0,
          "currency": "usd"
        }
      ],
      "label_download": {
        "href": {},
        "pdf": {},
        "png": {},
        "zpl": {}
      },
      "label_messages": {
        "reference1": null,
        "reference2": null,
        "reference3": null
      },
      "package_code": {},
      "package_id": {},
      "sequence": 0,
      "tracking_number": {},
      "weight": {
        "unit": {},
        "value": 0.1
      }
    }
  ],
  "return_to": {
    "address_line1": "1999 Bishop Grandin Blvd.",
    "address_line2": "Unit 408",
    "address_line3": "Building #7",
    "address_residential_indicator": "no",
    "city_locality": "Winnipeg",
    "company_name": "The Home Depot",
    "country_code": {},
    "email": "example@example.com",
    "name": "John Doe",
    "phone": "+1 204-253-9411 ext. 123",
    "postal_code": {},
    "state_province": "Manitoba",
    "instructions": "string"
  },
  "service_code": {},
  "ship_date": {},
  "ship_from": {
    "address_line1": "1999 Bishop Grandin Blvd.",
    "address_line2": "Unit 408",
    "address_line3": "Building #7",
    "address_residential_indicator": "no",
    "city_locality": "Winnipeg",
    "company_name": "The Home Depot",
    "country_code": {},
    "email": "example@example.com",
    "name": "John Doe",
    "phone": "+1 204-253-9411 ext. 123",
    "postal_code": {},
    "state_province": "Manitoba",
    "instructions": "string"
  },
  "ship_to": {
    "address_line1": "1999 Bishop Grandin Blvd.",
    "address_line2": "Unit 408",
    "address_line3": "Building #7",
    "address_residential_indicator": "no",
    "city_locality": "Winnipeg",
    "company_name": "The Home Depot",
    "country_code": {},
    "email": "example@example.com",
    "name": "John Doe",
    "phone": "+1 204-253-9411 ext. 123",
    "postal_code": {},
    "state_province": "Manitoba",
    "instructions": "string"
  },
  "shipment_id": {},
  "shipment_number": "string",
  "shipment_status": "pending",
  "tags": [],
  "tax_identifiers": [
    {
      "identifier_type": {},
      "issuing_authority": "string",
      "taxable_entity_type": {},
      "value": "string"
    }
  ],
  "total_weight": {
    "unit": {},
    "value": 0.1
  },
  "warehouse_id": null,
  "rate_response": {
    "created_at": {},
    "errors": [
      {
        "error_code": {},
        "error_source": {},
        "error_type": {},
        "message": "Body of request cannot be null."
      }
    ],
    "invalid_rates": [],
    "rate_request_id": {},
    "rates": [
      {
        "carrier_code": "string",
        "carrier_delivery_days": "string",
        "carrier_friendly_name": "string",
        "carrier_id": {},
        "carrier_nickname": "string",
        "confirmation_amount": {
          "amount": 0,
          "currency": {}
        },
        "delivery_days": 5,
        "error_messages": [
          "string"
        ],
        "estimated_delivery_date": {},
        "guaranteed_service": true,
        "insurance_amount": {
          "amount": 0,
          "currency": {}
        },
        "negotiated_rate": true,
        "other_amount": {
          "amount": 0,
          "currency": {}
        },
        "package_type": "package",
        "rate_id": {},
        "rate_type": {},
        "service_code": "string",
        "service_type": "string",
        "ship_date": "1970-01-01T00:00:00Z",
        "shipping_amount": {
          "amount": 0,
          "currency": {}
        },
        "tax_amount": {
          "amount": 0,
          "currency": {}
        },
        "trackable": true,
        "validation_status": {},
        "warning_messages": [
          "string"
        ],
        "zone": 6
      }
    ],
    "shipment_id": {},
    "status": {}
  }
}
```

A rate shipment response body

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|advanced_options|object|true|none|Advanced shipment options.  These are entirely optional.|
|carrier_id|object|false|none|The carrier account that is billed for the shipping charges|
|confirmation|object|true|none|The type of delivery confirmation that is required for this shipment.|
|created_at|object|true|read-only|The date and time that the shipment was created in ShipEngine.|
|customs|object \| null|true|none|Customs information.  This is usually only needed for international shipments.<br>|
|external_order_id|string \| null|false|none|ID that the Order Source assigned|
|external_shipment_id|string \| null|false|none|A unique user-defined key to identify a shipment.  This can be used to retrieve the shipment.<br><br>> **Warning:** The `external_shipment_id` is limited to 50 characters. Any additional characters will be truncated.<br>|
|insurance_provider|object|true|none|The insurance provider to use for any insured packages in the shipment.<br>|
|items|[object]|false|none|Describe the packages included in this shipment as related to potential metadata that was imported from<br>external order sources<br>|
|modified_at|object|true|read-only|The date and time that the shipment was created or last modified.|
|order_source_code|object|false|none|none|
|origin_type|object \| null|false|none|Indicates if the package will be picked up or dropped off by the carrier|
|packages|[object]|true|none|The packages in the shipment.<br><br>> **Note:** Some carriers only allow one package per shipment.  If you attempt to create a multi-package shipment for a carrier that doesn't allow it, an error will be returned.<br>|
|return_to|object|true|none|The return address for this shipment.  Defaults to the `ship_from` address.<br>|
|service_code|object|false|none|The [carrier service](https://www.shipengine.com/docs/shipping/use-a-carrier-service/) used to ship the package, such as `fedex_ground`, `usps_first_class_mail`, `flat_rate_envelope`, etc.<br>|
|ship_date|object|true|none|The date that the shipment was (or will be) shippped.  ShipEngine will take the day of week into consideration. For example, if the carrier does not operate on Sundays, then a package that would have shipped on Sunday will ship on Monday instead.<br>|
|ship_from|object|false|none|The shipment's origin address. If you frequently ship from the same location, consider [creating a warehouse](https://www.shipengine.com/docs/reference/create-warehouse/).  Then you can simply specify the `warehouse_id` rather than the complete address each time.<br>|
|ship_to|object|false|none|The recipient's mailing address|
|shipment_id|object|true|read-only|A string that uniquely identifies the shipment|
|shipment_number|string \| null|false|none|A non-unique user-defined number used to identify a shipment.  If undefined, this will match the external_shipment_id of the shipment.<br><br>> **Warning:** The `shipment_number` is limited to 50 characters. Any additional characters will be truncated.<br>|
|shipment_status|object|true|read-only|The current status of the shipment|
|tags|[object]|true|read-only|Arbitrary tags associated with this shipment.  Tags can be used to categorize shipments, and shipments can be queried by their tags.<br>|
|tax_identifiers|[object]|false|none|none|
|total_weight|object|true|read-only|The combined weight of all packages in the shipment|
|warehouse_id|object \| null|false|none|The [warehouse](https://www.shipengine.com/docs/shipping/ship-from-a-warehouse/) that the shipment is being shipped from.  Either `warehouse_id` or `ship_from` must be specified.<br>|
|rate_response|object|true|none|The rates response|

<h2 id="tocS_carrier">carrier</h2>
<!-- backwards compatibility -->
<a id="schemacarrier"></a>
<a id="schema_carrier"></a>
<a id="tocScarrier"></a>
<a id="tocscarrier"></a>

```json
{
  "account_number": "account_570827",
  "balance": 3799.52,
  "carrier_code": {},
  "carrier_id": {},
  "friendly_name": "Stamps.com",
  "has_multi_package_supporting_services": true,
  "nickname": "ShipEngine Account - Stamps.com",
  "options": [
    {
      "default_value": false,
      "description": "string",
      "name": "contains_alcohol"
    }
  ],
  "packages": [
    {
      "description": "Packaging for laptops",
      "dimensions": {
        "height": 0,
        "length": 0,
        "unit": "inch",
        "width": 0
      },
      "name": "laptop_box",
      "package_code": {},
      "package_id": {}
    }
  ],
  "primary": true,
  "requires_funded_amount": true,
  "services": [
    {
      "carrier_code": {},
      "carrier_id": {},
      "domestic": true,
      "international": true,
      "is_multi_package_supported": true,
      "name": "USPS First Class Mail",
      "service_code": "usps_media_mail"
    }
  ],
  "supports_label_messages": true
}
```

A carrier object that represents a provider such as UPS, USPS, DHL, etc
that has been tied to the current account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_number|string|false|read-only|The account number that the carrier is connected to.|
|balance|number(double)|false|read-only|Current available balance|
|carrier_code|object|false|none|A string that uniquely identifies the carrier.|
|carrier_id|object|false|read-only|A string that uniquely identifies the carrier.|
|friendly_name|string|false|read-only|Screen readable name|
|has_multi_package_supporting_services|boolean|false|read-only|Carrier supports multiple packages per shipment|
|nickname|string|false|read-only|Nickname given to the account when initially setting up the carrier.|
|options|[object]|false|read-only|A list of options that are available to that carrier|
|packages|[object]|false|read-only|A list of package types that are supported by the carrier|
|primary|boolean|false|read-only|Is this the primary carrier that is used by default when no carrier is specified in label/shipment creation|
|requires_funded_amount|boolean|false|read-only|Indicates whether the carrier requires funding to use its services|
|services|[object]|false|read-only|A list of services that are offered by the carrier|
|supports_label_messages|boolean|false|read-only|The carrier supports adding custom label messages to an order.|

<h2 id="tocS_carrier_advanced_option">carrier_advanced_option</h2>
<!-- backwards compatibility -->
<a id="schemacarrier_advanced_option"></a>
<a id="schema_carrier_advanced_option"></a>
<a id="tocScarrier_advanced_option"></a>
<a id="tocscarrier_advanced_option"></a>

```json
{
  "default_value": false,
  "description": "string",
  "name": "contains_alcohol"
}
```

Advanced options that are specific to the carrier

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|default_value|string|false|read-only|Default value of option|
|description|string|false|read-only|Description of option|
|name|string|false|read-only|Name of advanced option|

<h2 id="tocS_carrier_code">carrier_code</h2>
<!-- backwards compatibility -->
<a id="schemacarrier_code"></a>
<a id="schema_carrier_code"></a>
<a id="tocScarrier_code"></a>
<a id="tocscarrier_code"></a>

```json
"dhl_express"
```

A [shipping carrier](https://www.shipengine.com/docs/carriers/setup/), such as `fedex`, `dhl_express`, `stamps_com`, etc.

<h2 id="tocS_carrier_name">carrier_name</h2>
<!-- backwards compatibility -->
<a id="schemacarrier_name"></a>
<a id="schema_carrier_name"></a>
<a id="tocScarrier_name"></a>
<a id="tocscarrier_name"></a>

```json
"access_worldwide"
```

The shipping carriers that are supported by ShipEngine

<h2 id="tocS_carrier_name_with_settings">carrier_name_with_settings</h2>
<!-- backwards compatibility -->
<a id="schemacarrier_name_with_settings"></a>
<a id="schema_carrier_name_with_settings"></a>
<a id="tocScarrier_name_with_settings"></a>
<a id="tocscarrier_name_with_settings"></a>

```json
"dhl_express"
```

The shipping carriers for which ShipEngine supports carrier settings

<h2 id="tocS_collect_on_delivery">collect_on_delivery</h2>
<!-- backwards compatibility -->
<a id="schemacollect_on_delivery"></a>
<a id="schema_collect_on_delivery"></a>
<a id="tocScollect_on_delivery"></a>
<a id="tocscollect_on_delivery"></a>

```json
{
  "payment_amount": {
    "amount": 0,
    "currency": {}
  },
  "payment_type": {}
}
```

Defer payment until package is delivered, instead of when it is ordered.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|payment_amount|[payment_amount](#schemapayment_amount)|false|none|none|
|payment_type|object|false|none|none|

<h2 id="tocS_collect_on_delivery_payment_type">collect_on_delivery_payment_type</h2>
<!-- backwards compatibility -->
<a id="schemacollect_on_delivery_payment_type"></a>
<a id="schema_collect_on_delivery_payment_type"></a>
<a id="tocScollect_on_delivery_payment_type"></a>
<a id="tocscollect_on_delivery_payment_type"></a>

```json
"any"
```

Types of payment that are supported

<h2 id="tocS_compare_bulk_rates_request_body">compare_bulk_rates_request_body</h2>
<!-- backwards compatibility -->
<a id="schemacompare_bulk_rates_request_body"></a>
<a id="schema_compare_bulk_rates_request_body"></a>
<a id="tocScompare_bulk_rates_request_body"></a>
<a id="tocscompare_bulk_rates_request_body"></a>

```json
{
  "rate_options": {
    "calculate_tax_amount": true,
    "carrier_ids": [
      {}
    ],
    "is_return": true,
    "package_types": [
      "string"
    ],
    "preferred_currency": {},
    "service_codes": [
      "string"
    ]
  },
  "shipment_ids": [
    {}
  ]
}
```

A rate shipments request body

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rate_options|object|true|none|The rate options|
|*oneOf*|[rate_request_by_shipment_ids](#schemarate_request_by_shipment_ids)|false|none|none|
|*oneOf*|[rate_request_by_shipments](#schemarate_request_by_shipments)|false|none|none|

<h2 id="tocS_compare_bulk_rates_response_body">compare_bulk_rates_response_body</h2>
<!-- backwards compatibility -->
<a id="schemacompare_bulk_rates_response_body"></a>
<a id="schema_compare_bulk_rates_response_body"></a>
<a id="tocScompare_bulk_rates_response_body"></a>
<a id="tocscompare_bulk_rates_response_body"></a>

```json
[
  {
    "created_at": {},
    "errors": [
      {
        "error_code": {},
        "error_source": {},
        "error_type": {},
        "message": "Body of request cannot be null."
      }
    ],
    "rate_request_id": {},
    "shipment_id": {},
    "status": {}
  }
]
```

A bulk rate response body

<h2 id="tocS_connect_access_worldwide_request_body">connect_access_worldwide_request_body</h2>
<!-- backwards compatibility -->
<a id="schemaconnect_access_worldwide_request_body"></a>
<a id="schema_connect_access_worldwide_request_body"></a>
<a id="tocSconnect_access_worldwide_request_body"></a>
<a id="tocsconnect_access_worldwide_request_body"></a>

```json
{
  "nickname": "Stamps.com",
  "password": "string",
  "username": "string"
}
```

An Access Worldwide account information request body

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nickname|string|true|none|The nickname associated with the carrier connection|
|password|string|true|none|Access Worldwide Password|
|username|string|true|none|Access Worldwide Username|

<h2 id="tocS_connect_amazon_buy_shipping_request_body">connect_amazon_buy_shipping_request_body</h2>
<!-- backwards compatibility -->
<a id="schemaconnect_amazon_buy_shipping_request_body"></a>
<a id="schema_connect_amazon_buy_shipping_request_body"></a>
<a id="tocSconnect_amazon_buy_shipping_request_body"></a>
<a id="tocsconnect_amazon_buy_shipping_request_body"></a>

```json
{
  "email": {},
  "merchant_seller_id": "string",
  "mws_auth_token": "string",
  "nickname": "Test Amazon Buy Shipping"
}
```

An Amazon account information request body

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|object|true|none|none|
|merchant_seller_id|string|true|none|none|
|mws_auth_token|string|true|none|none|
|nickname|string|true|none|Nickname to be associated with the account connection|

<h2 id="tocS_connect_amazon_shipping_uk">connect_amazon_shipping_uk</h2>
<!-- backwards compatibility -->
<a id="schemaconnect_amazon_shipping_uk"></a>
<a id="schema_connect_amazon_shipping_uk"></a>
<a id="tocSconnect_amazon_shipping_uk"></a>
<a id="tocsconnect_amazon_shipping_uk"></a>

```json
{
  "auth_code": "string",
  "nickname": "Stamps.com"
}
```

An Amazon Shipping UK account information request body

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|auth_code|string|true|none|Amazon UK Shipping auth code.|
|nickname|string|true|none|The nickname associated with the carrier connection|

<h2 id="tocS_connect_apc_request_body">connect_apc_request_body</h2>
<!-- backwards compatibility -->
<a id="schemaconnect_apc_request_body"></a>
<a id="schema_connect_apc_request_body"></a>
<a id="tocSconnect_apc_request_body"></a>
<a id="tocsconnect_apc_request_body"></a>

```json
{
  "nickname": "APC carrier account",
  "password": 12345,
  "username": "john_doe"
}
```

An APC account information request body

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nickname|string|true|none|The nickname for the APC account|
|password|string|true|none|The password for the APC account|
|username|string|true|none|The username for the APC account|

<h2 id="tocS_connect_asendia_request_body">connect_asendia_request_body</h2>
<!-- backwards compatibility -->
<a id="schemaconnect_asendia_request_body"></a>
<a id="schema_connect_asendia_request_body"></a>
<a id="tocSconnect_asendia_request_body"></a>
<a id="tocsconnect_asendia_request_body"></a>

```json
{
  "account_number": "string",
  "ftp_password": "string",
  "ftp_username": "string",
  "nickname": "Asendia account"
}
```

An Asendia account information request body

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_number|string|true|none|Asendia account number|
|ftp_password|string|true|none|FTP password|
|ftp_username|string|true|none|FTP username|
|nickname|string|true|none|The nickname of the Asendia account|

<h2 id="tocS_connect_australia_post_request_body">connect_australia_post_request_body</h2>
<!-- backwards compatibility -->
<a id="schemaconnect_australia_post_request_body"></a>
<a id="schema_connect_australia_post_request_body"></a>
<a id="tocSconnect_australia_post_request_body"></a>
<a id="tocsconnect_australia_post_request_body"></a>

```json
{
  "account_number": "string",
  "api_key": "string",
  "api_secret": "string",
  "nickname": "string"
}
```

An Australia Post account information request body

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_number|string|true|none|Account number|
|api_key|string|true|none|API key|
|api_secret|string|true|none|API secret|
|nickname|string|true|none|Nickname|

<h2 id="tocS_connect_canada_post_request_body">connect_canada_post_request_body</h2>
<!-- backwards compatibility -->
<a id="schemaconnect_canada_post_request_body"></a>
<a id="schema_connect_canada_post_request_body"></a>
<a id="tocSconnect_canada_post_request_body"></a>
<a id="tocsconnect_canada_post_request_body"></a>

```json
{
  "account_number": "string",
  "api_key": "string",
  "api_secret": "string",
  "contract_id": "string",
  "nickname": "string"
}
```

A Canada Post account information request body

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_number|string|true|none|Canada Post Account Number|
|api_key|string|true|none|Canada Post Account API Key|
|api_secret|string|true|none|Canada Post Account API Secret|
|contract_id|string|true|none|Canada Post Account Contract ID|
|nickname|string|true|none|Nickname|

<h2 id="tocS_connect_carrier_request_body">connect_carrier_request_body</h2>
<!-- backwards compatibility -->
<a id="schemaconnect_carrier_request_body"></a>
<a id="schema_connect_carrier_request_body"></a>
<a id="tocSconnect_carrier_request_body"></a>
<a id="tocsconnect_carrier_request_body"></a>

```json
{
  "nickname": "Stamps.com",
  "password": "string",
  "username": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[connect_access_worldwide_request_body](#schemaconnect_access_worldwide_request_body)|false|none|An Access Worldwide account information request body|
|*oneOf*|[connect_amazon_buy_shipping_request_body](#schemaconnect_amazon_buy_shipping_request_body)|false|none|An Amazon account information request body|
|*oneOf*|[connect_amazon_shipping_uk](#schemaconnect_amazon_shipping_uk)|false|none|An Amazon Shipping UK account information request body|
|*oneOf*|[connect_apc_request_body](#schemaconnect_apc_request_body)|false|none|An APC account information request body|
|*oneOf*|[connect_asendia_request_body](#schemaconnect_asendia_request_body)|false|none|An Asendia account information request body|
|*oneOf*|[connect_australia_post_request_body](#schemaconnect_australia_post_request_body)|false|none|An Australia Post account information request body|
|*oneOf*|[connect_canada_post_request_body](#schemaconnect_canada_post_request_body)|false|none|A Canada Post account information request body|
|*oneOf*|[connect_dhl_ecommerce_request_body](#schemaconnect_dhl_ecommerce_request_body)|false|none|A DHL Ecommerce account information request body|
|*oneOf*|[connect_dhl_express_request_body](#schemaconnect_dhl_express_request_body)|false|none|A DHL express account information request body|
|*oneOf*|[connect_dhl_express_au_request_body](#schemaconnect_dhl_express_au_request_body)|false|none|A DHL Express AU account information request body|
|*oneOf*|[connect_dhl_express_ca_request_body](#schemaconnect_dhl_express_ca_request_body)|false|none|A DHL Express CA account information request body|
|*oneOf*|[connect_dhl_express_uk_request_body](#schemaconnect_dhl_express_uk_request_body)|false|none|A DHL Express UK account information request body|
|*oneOf*|[connect_dpd_request_body](#schemaconnect_dpd_request_body)|false|none|A DPD account information request body|
|*oneOf*|[connect_endicia_request_body](#schemaconnect_endicia_request_body)|false|none|An Endicia account information request body|
|*oneOf*|[connect_fedex_request_body](#schemaconnect_fedex_request_body)|false|none|A Fedex account information request body|
|*oneOf*|[connect_fedex_uk_request_body](#schemaconnect_fedex_uk_request_body)|false|none|A Fedex UK account information request body|
|*oneOf*|[connect_firstmile_request_body](#schemaconnect_firstmile_request_body)|false|none|A First Mile account information request body|
|*oneOf*|[connect_imex_request_body](#schemaconnect_imex_request_body)|false|none|An Imex account information request body|
|*oneOf*|[connect_newgistics_request_body](#schemaconnect_newgistics_request_body)|false|none|A Newgistics account information request body|
|*oneOf*|[connect_ontrac_request_body](#schemaconnect_ontrac_request_body)|false|none|An Ontrac account information request body|
|*oneOf*|[connect_purolator_request_body](#schemaconnect_purolator_request_body)|false|none|A Purolator account information request body|
|*oneOf*|[connect_royal_mail_request_body](#schemaconnect_royal_mail_request_body)|false|none|A Royal Mail account information request body|
|*oneOf*|[connect_rr_donnelley_request_body](#schemaconnect_rr_donnelley_request_body)|false|none|A RR Donnelley account information request body|
|*oneOf*|[connect_seko_request_body](#schemaconnect_seko_request_body)|false|none|A SEKO account information request body|
|*oneOf*|[connect_sendle_request_body](#schemaconnect_sendle_request_body)|false|none|A Sendle account information request body|
|*oneOf*|[connect_stamps_request_body](#schemaconnect_stamps_request_body)|false|none|A Stamps account information request body|
|*oneOf*|[connect_ups_request_body](#schemaconnect_ups_request_body)|false|none|A UPS account information request body|

<h2 id="tocS_connect_carrier_response_body">connect_carrier_response_body</h2>
<!-- backwards compatibility -->
<a id="schemaconnect_carrier_response_body"></a>
<a id="schema_connect_carrier_response_body"></a>
<a id="tocSconnect_carrier_response_body"></a>
<a id="tocsconnect_carrier_response_body"></a>

```json
{
  "carrier_id": {}
}
```

A connect account response body

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|carrier_id|object|true|none|A string that uniquely identifies the carrier|

<h2 id="tocS_connect_dhl_ecommerce_request_body">connect_dhl_ecommerce_request_body</h2>
<!-- backwards compatibility -->
<a id="schemaconnect_dhl_ecommerce_request_body"></a>
<a id="schema_connect_dhl_ecommerce_request_body"></a>
<a id="tocSconnect_dhl_ecommerce_request_body"></a>
<a id="tocsconnect_dhl_ecommerce_request_body"></a>

```json
{
  "account_number": "string",
  "ancillary_endorsement": {},
  "api_key": "string",
  "api_secret": "string",
  "client_id": "string",
  "distribution_center": "string",
  "ftp_password": "string",
  "ftp_username": "string",
  "nickname": "string",
  "password": "string",
  "pickup_number": "string",
  "registration_id": "string",
  "software_name": "string",
  "sold_to": "string",
  "username": "string"
}
```

A DHL Ecommerce account information request body

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_number|string|false|none|**Deprecated.** Account number|
|ancillary_endorsement|object|false|none|none|
|api_key|string|false|none|The DHL E-Commerce API key. This field is optional, but if not set you will not be able to get rates for this account.<br>|
|api_secret|string|false|none|The DHL E-Commerce API secret. This field is optional, but if not set you will not be able to get rates for this account.<br>|
|client_id|string|true|none|The client id|
|distribution_center|string|true|none|The distribution center|
|ftp_password|string|false|none|**Deprecated.** FTP password|
|ftp_username|string|false|none|**Deprecated.** FTP username|
|nickname|string|true|none|A nickname to help you identify this account|
|password|string|true|none|The account password|
|pickup_number|string|true|none|The pickup number|
|registration_id|string|false|none|none|
|software_name|string|false|none|none|
|sold_to|string|false|none|Sold To field|
|username|string|true|none|The account username|

<h2 id="tocS_connect_dhl_express_au_request_body">connect_dhl_express_au_request_body</h2>
<!-- backwards compatibility -->
<a id="schemaconnect_dhl_express_au_request_body"></a>
<a id="schema_connect_dhl_express_au_request_body"></a>
<a id="tocSconnect_dhl_express_au_request_body"></a>
<a id="tocsconnect_dhl_express_au_request_body"></a>

```json
{
  "account_number": "string",
  "nickname": "string"
}
```

A DHL Express AU account information request body

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_number|string|true|none|Account number|
|nickname|string|true|none|Nickname|

<h2 id="tocS_connect_dhl_express_ca_request_body">connect_dhl_express_ca_request_body</h2>
<!-- backwards compatibility -->
<a id="schemaconnect_dhl_express_ca_request_body"></a>
<a id="schema_connect_dhl_express_ca_request_body"></a>
<a id="tocSconnect_dhl_express_ca_request_body"></a>
<a id="tocsconnect_dhl_express_ca_request_body"></a>

```json
{
  "account_number": "string",
  "nickname": "string"
}
```

A DHL Express CA account information request body

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_number|string|true|none|Account number|
|nickname|string|true|none|Nickname|

<h2 id="tocS_connect_dhl_express_request_body">connect_dhl_express_request_body</h2>
<!-- backwards compatibility -->
<a id="schemaconnect_dhl_express_request_body"></a>
<a id="schema_connect_dhl_express_request_body"></a>
<a id="tocSconnect_dhl_express_request_body"></a>
<a id="tocsconnect_dhl_express_request_body"></a>

```json
{
  "account_number": "string",
  "country_code": {},
  "nickname": "string",
  "password": "string",
  "site_id": "string"
}
```

A DHL express account information request body

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_number|string|true|none|Account number|
|country_code|object|false|none|none|
|nickname|string|true|none|Nickname|
|password|string|false|none|Required if site id is provided|
|site_id|string|false|none|Required if password is provided|

<h2 id="tocS_connect_dhl_express_uk_request_body">connect_dhl_express_uk_request_body</h2>
<!-- backwards compatibility -->
<a id="schemaconnect_dhl_express_uk_request_body"></a>
<a id="schema_connect_dhl_express_uk_request_body"></a>
<a id="tocSconnect_dhl_express_uk_request_body"></a>
<a id="tocsconnect_dhl_express_uk_request_body"></a>

```json
{
  "account_number": "string",
  "nickname": "string",
  "password": "string",
  "site_id": {}
}
```

A DHL Express UK account information request body

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_number|string|true|none|Account number|
|nickname|string|true|none|Nickname|
|password|string|true|none|Password|
|site_id|object|true|none|A string that uniquely identifies the site|

<h2 id="tocS_connect_dpd_request_body">connect_dpd_request_body</h2>
<!-- backwards compatibility -->
<a id="schemaconnect_dpd_request_body"></a>
<a id="schema_connect_dpd_request_body"></a>
<a id="tocSconnect_dpd_request_body"></a>
<a id="tocsconnect_dpd_request_body"></a>

```json
{
  "account_number": "string",
  "nickname": "string",
  "password": "string"
}
```

A DPD account information request body

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_number|string|true|none|Account number|
|nickname|string|true|none|Nickname|
|password|string|true|none|Password|

<h2 id="tocS_connect_endicia_request_body">connect_endicia_request_body</h2>
<!-- backwards compatibility -->
<a id="schemaconnect_endicia_request_body"></a>
<a id="schema_connect_endicia_request_body"></a>
<a id="tocSconnect_endicia_request_body"></a>
<a id="tocsconnect_endicia_request_body"></a>

```json
{
  "account": "string",
  "nickname": "string",
  "passphrase": "string"
}
```

An Endicia account information request body

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account|string|true|none|Account|
|nickname|string|true|none|Nickname|
|passphrase|string|true|none|Passphrase|

<h2 id="tocS_connect_fedex_request_body">connect_fedex_request_body</h2>
<!-- backwards compatibility -->
<a id="schemaconnect_fedex_request_body"></a>
<a id="schema_connect_fedex_request_body"></a>
<a id="tocSconnect_fedex_request_body"></a>
<a id="tocsconnect_fedex_request_body"></a>

```json
{
  "account_number": "string",
  "address1": "string",
  "address2": "string",
  "agree_to_eula": true,
  "city": "string",
  "company": "string",
  "country_code": "string",
  "email": {},
  "first_name": "string",
  "last_name": "string",
  "meter_number": "string",
  "nickname": "string",
  "phone": "string",
  "postal_code": "string",
  "state": "string"
}
```

A Fedex account information request body

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_number|string|true|none|Account number|
|address1|string|true|none|Address|
|address2|string|false|none|Address|
|agree_to_eula|boolean|true|none|Boolean signaling agreement to the Fedex End User License Agreement|
|city|string|true|none|The city|
|company|string|false|none|The company|
|country_code|string|true|none|Country code|
|email|object|true|none|The email address|
|first_name|string|true|none|First name|
|last_name|string|true|none|Last name|
|meter_number|string|false|none|Meter number|
|nickname|string|true|none|Nickname|
|phone|string|true|none|Phone number|
|postal_code|string|true|none|Postal Code|
|state|string|true|none|State|

<h2 id="tocS_connect_fedex_uk_request_body">connect_fedex_uk_request_body</h2>
<!-- backwards compatibility -->
<a id="schemaconnect_fedex_uk_request_body"></a>
<a id="schema_connect_fedex_uk_request_body"></a>
<a id="tocSconnect_fedex_uk_request_body"></a>
<a id="tocsconnect_fedex_uk_request_body"></a>

```json
{
  "account_number": "string",
  "address1": "string",
  "address2": "string",
  "agree_to_eula": true,
  "city": "string",
  "company": "string",
  "country_code": "string",
  "email": {},
  "first_name": "string",
  "last_name": "string",
  "meter_number": "string",
  "nickname": "string",
  "phone": "string",
  "postal_code": "string",
  "state": "string"
}
```

A Fedex UK account information request body

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_number|string|true|none|Account number|
|address1|string|true|none|Address|
|address2|string|false|none|Address|
|agree_to_eula|boolean|true|none|Boolean signaling agreement to the Fedex End User License Agreement|
|city|string|true|none|The city|
|company|string|false|none|The company|
|country_code|string|true|none|Country code|
|email|object|true|none|The email address|
|first_name|string|true|none|First name|
|last_name|string|true|none|Last name|
|meter_number|string|false|none|Meter number|
|nickname|string|true|none|Nickname|
|phone|string|true|none|Phone number|
|postal_code|string|true|none|Postal Code|
|state|string|true|none|State|

<h2 id="tocS_connect_firstmile_request_body">connect_firstmile_request_body</h2>
<!-- backwards compatibility -->
<a id="schemaconnect_firstmile_request_body"></a>
<a id="schema_connect_firstmile_request_body"></a>
<a id="tocSconnect_firstmile_request_body"></a>
<a id="tocsconnect_firstmile_request_body"></a>

```json
{
  "mailer_id": {},
  "nickname": "string",
  "password": "string",
  "profile_name": "string"
}
```

A First Mile account information request body

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mailer_id|object|true|none|A string that uniquely identifies the mailer|
|nickname|string|true|none|Nickname|
|password|string|true|none|Password|
|profile_name|string|false|none|Profile name|

<h2 id="tocS_connect_imex_request_body">connect_imex_request_body</h2>
<!-- backwards compatibility -->
<a id="schemaconnect_imex_request_body"></a>
<a id="schema_connect_imex_request_body"></a>
<a id="tocSconnect_imex_request_body"></a>
<a id="tocsconnect_imex_request_body"></a>

```json
{
  "nickname": "string",
  "password": "string",
  "username": "string"
}
```

An Imex account information request body

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nickname|string|true|none|Nickname|
|password|string|true|none|Password|
|username|string|true|none|Username|

<h2 id="tocS_connect_insurer_request_body">connect_insurer_request_body</h2>
<!-- backwards compatibility -->
<a id="schemaconnect_insurer_request_body"></a>
<a id="schema_connect_insurer_request_body"></a>
<a id="tocSconnect_insurer_request_body"></a>
<a id="tocsconnect_insurer_request_body"></a>

```json
{
  "email": {},
  "policy_id": "string"
}
```

A create shipsurance connection request body

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|object|true|none|none|
|policy_id|string|true|none|none|

<h2 id="tocS_connect_insurer_response_body">connect_insurer_response_body</h2>
<!-- backwards compatibility -->
<a id="schemaconnect_insurer_response_body"></a>
<a id="schema_connect_insurer_response_body"></a>
<a id="tocSconnect_insurer_response_body"></a>
<a id="tocsconnect_insurer_response_body"></a>

```json
{}
```

<h2 id="tocS_connect_newgistics_request_body">connect_newgistics_request_body</h2>
<!-- backwards compatibility -->
<a id="schemaconnect_newgistics_request_body"></a>
<a id="schema_connect_newgistics_request_body"></a>
<a id="tocSconnect_newgistics_request_body"></a>
<a id="tocsconnect_newgistics_request_body"></a>

```json
{
  "induction_site": "string",
  "mailer_id": 0,
  "merchant_id": 0,
  "nickname": "string"
}
```

A Newgistics account information request body

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|induction_site|string|true|none|Induction site|
|mailer_id|integer(int32)|false|none|Mailer id|
|merchant_id|integer(int32)|false|none|Merchant id|
|nickname|string|true|none|Nickname|

<h2 id="tocS_connect_ontrac_request_body">connect_ontrac_request_body</h2>
<!-- backwards compatibility -->
<a id="schemaconnect_ontrac_request_body"></a>
<a id="schema_connect_ontrac_request_body"></a>
<a id="tocSconnect_ontrac_request_body"></a>
<a id="tocsconnect_ontrac_request_body"></a>

```json
{
  "account_number": "string",
  "nickname": "string",
  "password": "string"
}
```

An Ontrac account information request body

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_number|string|true|none|Account number|
|nickname|string|true|none|Nickname|
|password|string|true|none|Password|

<h2 id="tocS_connect_purolator_request_body">connect_purolator_request_body</h2>
<!-- backwards compatibility -->
<a id="schemaconnect_purolator_request_body"></a>
<a id="schema_connect_purolator_request_body"></a>
<a id="tocSconnect_purolator_request_body"></a>
<a id="tocsconnect_purolator_request_body"></a>

```json
{
  "account_number": "string",
  "activation_key": "string",
  "nickname": "string"
}
```

A Purolator account information request body

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_number|string|true|none|Account number|
|activation_key|string|true|none|Activation key|
|nickname|string|true|none|Nickname|

<h2 id="tocS_connect_royal_mail_request_body">connect_royal_mail_request_body</h2>
<!-- backwards compatibility -->
<a id="schemaconnect_royal_mail_request_body"></a>
<a id="schema_connect_royal_mail_request_body"></a>
<a id="tocSconnect_royal_mail_request_body"></a>
<a id="tocsconnect_royal_mail_request_body"></a>

```json
{
  "account_number": "string",
  "city": "string",
  "company_name": "string",
  "contact_name": "string",
  "email": {},
  "nickname": "string",
  "oba_email": {},
  "phone": "string",
  "postal_code": "string",
  "street_line1": "string",
  "street_line2": "string",
  "street_line3": "string"
}
```

A Royal Mail account information request body

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_number|string|true|none|Account number|
|city|string|true|none|City|
|company_name|string|false|none|Company name|
|contact_name|string|true|none|Contact name|
|email|object|false|none|The email address|
|nickname|string|true|none|Nickname|
|oba_email|object|false|none|The oba email address|
|phone|string|false|none|Phone|
|postal_code|string|true|none|Postal code|
|street_line1|string|false|none|Street line1|
|street_line2|string|false|none|Street line2|
|street_line3|string|false|none|Street line3|

<h2 id="tocS_connect_rr_donnelley_request_body">connect_rr_donnelley_request_body</h2>
<!-- backwards compatibility -->
<a id="schemaconnect_rr_donnelley_request_body"></a>
<a id="schema_connect_rr_donnelley_request_body"></a>
<a id="tocSconnect_rr_donnelley_request_body"></a>
<a id="tocsconnect_rr_donnelley_request_body"></a>

```json
{
  "nickname": "string",
  "password": "string",
  "username": "string"
}
```

A RR Donnelley account information request body

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nickname|string|true|none|Nickname|
|password|string|true|none|Password|
|username|string|true|none|Username|

<h2 id="tocS_connect_seko_request_body">connect_seko_request_body</h2>
<!-- backwards compatibility -->
<a id="schemaconnect_seko_request_body"></a>
<a id="schema_connect_seko_request_body"></a>
<a id="tocSconnect_seko_request_body"></a>
<a id="tocsconnect_seko_request_body"></a>

```json
{
  "access_key": "string",
  "nickname": "string"
}
```

A SEKO account information request body

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|access_key|string|true|none|Seko Account Access Key|
|nickname|string|true|none|Nickname|

<h2 id="tocS_connect_sendle_request_body">connect_sendle_request_body</h2>
<!-- backwards compatibility -->
<a id="schemaconnect_sendle_request_body"></a>
<a id="schema_connect_sendle_request_body"></a>
<a id="tocSconnect_sendle_request_body"></a>
<a id="tocsconnect_sendle_request_body"></a>

```json
{
  "api_key": "string",
  "nickname": "string",
  "sendle_id": {}
}
```

A Sendle account information request body

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|api_key|string|true|none|API key|
|nickname|string|true|none|Nickname|
|sendle_id|object|true|none|A string that uniquely identifies the sendle|

<h2 id="tocS_connect_stamps_request_body">connect_stamps_request_body</h2>
<!-- backwards compatibility -->
<a id="schemaconnect_stamps_request_body"></a>
<a id="schema_connect_stamps_request_body"></a>
<a id="tocSconnect_stamps_request_body"></a>
<a id="tocsconnect_stamps_request_body"></a>

```json
{
  "nickname": "string",
  "password": "string",
  "username": "string"
}
```

A Stamps account information request body

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nickname|string|true|none|Nickname|
|password|string|true|none|Password|
|username|string|true|none|Username|

<h2 id="tocS_connect_ups_request_body">connect_ups_request_body</h2>
<!-- backwards compatibility -->
<a id="schemaconnect_ups_request_body"></a>
<a id="schema_connect_ups_request_body"></a>
<a id="tocSconnect_ups_request_body"></a>
<a id="tocsconnect_ups_request_body"></a>

```json
{
  "account_country_code": "string",
  "account_number": "string",
  "account_postal_code": "string",
  "address1": "string",
  "address2": "string",
  "agree_to_technology_agreement": true,
  "city": "string",
  "company": "string",
  "country_code": "string",
  "email": {},
  "first_name": "string",
  "invoice": {
    "control_id": {},
    "invoice_amount": 0,
    "invoice_currency_code": "string",
    "invoice_date": "1970-01-01T00:00:00Z",
    "invoice_number": "string"
  },
  "invoice_amount": 0,
  "invoice_currency_code": "string",
  "last_name": "string",
  "nickname": "string",
  "phone": "string",
  "postal_code": "string",
  "state": "string",
  "title": "string"
}
```

A UPS account information request body

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_country_code|string|true|none|Account country code|
|account_number|string|true|none|Account number|
|account_postal_code|string|true|none|Account postal code|
|address1|string|true|none|Address Line 1|
|address2|string|false|none|Address Line 2|
|agree_to_technology_agreement|boolean|true|none|The Agreement to the [UPS Technology Agreement](https://www.ups.com/assets/resources/media/UTA_with_EUR.pdf)|
|city|string|true|none|City|
|company|string|true|none|Company|
|country_code|string|true|none|Country code|
|email|object|true|none|The email address|
|first_name|string|true|none|First name|
|invoice|object|false|none|The UPS invoice|
|invoice_amount|number(double)|false|none|The invoice amount|
|invoice_currency_code|string|false|none|The invoice currency code|
|last_name|string|true|none|Last name|
|nickname|string|true|none|Nickname|
|phone|string|true|none|Phone|
|postal_code|string|true|none|Postal code|
|state|string|true|none|State|
|title|string|false|none|Title|

<h2 id="tocS_contact_details">contact_details</h2>
<!-- backwards compatibility -->
<a id="schemacontact_details"></a>
<a id="schema_contact_details"></a>
<a id="tocScontact_details"></a>
<a id="tocscontact_details"></a>

```json
{
  "email": {},
  "name": "string",
  "phone": "strings"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|object|true|none|none|
|name|string|true|none|none|
|phone|string|true|none|Phone number associated|

<h2 id="tocS_country_code">country_code</h2>
<!-- backwards compatibility -->
<a id="schemacountry_code"></a>
<a id="schema_country_code"></a>
<a id="tocScountry_code"></a>
<a id="tocscountry_code"></a>

```json
"CA"
```

A two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)

<h2 id="tocS_create_and_validate_shipment">create_and_validate_shipment</h2>
<!-- backwards compatibility -->
<a id="schemacreate_and_validate_shipment"></a>
<a id="schema_create_and_validate_shipment"></a>
<a id="tocScreate_and_validate_shipment"></a>
<a id="tocscreate_and_validate_shipment"></a>

```json
{
  "advanced_options": {
    "bill_to_account": null,
    "bill_to_country_code": null,
    "bill_to_party": null,
    "bill_to_postal_code": null,
    "collect_on_delivery": {
      "payment_amount": {
        "amount": 0,
        "currency": {}
      },
      "payment_type": {}
    },
    "contains_alcohol": false,
    "custom_field1": null,
    "custom_field2": null,
    "custom_field3": null,
    "delivered_duty_paid": false,
    "dry_ice": false,
    "dry_ice_weight": {
      "unit": {},
      "value": 0.1
    },
    "fedex_freight": {
      "booking_confirmation": "string",
      "shipper_load_and_count": "string"
    },
    "freight_class": 77.5,
    "non_machinable": false,
    "origin_type": null,
    "saturday_delivery": false,
    "shipper_release": null,
    "third_party_consignee": false,
    "use_ups_ground_freight_pricing": null
  },
  "carrier_id": {},
  "confirmation": "none",
  "created_at": {},
  "customs": null,
  "external_order_id": "string",
  "external_shipment_id": "string",
  "insurance_provider": "none",
  "items": [],
  "modified_at": {},
  "order_source_code": {},
  "origin_type": {},
  "packages": [
    {
      "content_description": "Hand knitted wool socks",
      "dimensions": {
        "height": 0,
        "length": 0,
        "unit": "inch",
        "width": 0
      },
      "external_package_id": "string",
      "form_download": {
        "href": {},
        "type": "string"
      },
      "insured_value": [
        {
          "amount": 0,
          "currency": "usd"
        }
      ],
      "label_download": {
        "href": {},
        "pdf": {},
        "png": {},
        "zpl": {}
      },
      "label_messages": {
        "reference1": null,
        "reference2": null,
        "reference3": null
      },
      "package_code": {},
      "package_id": {},
      "sequence": 0,
      "tracking_number": {},
      "weight": {
        "unit": {},
        "value": 0.1
      }
    }
  ],
  "return_to": {
    "address_line1": "1999 Bishop Grandin Blvd.",
    "address_line2": "Unit 408",
    "address_line3": "Building #7",
    "address_residential_indicator": "no",
    "city_locality": "Winnipeg",
    "company_name": "The Home Depot",
    "country_code": {},
    "email": "example@example.com",
    "name": "John Doe",
    "phone": "+1 204-253-9411 ext. 123",
    "postal_code": {},
    "state_province": "Manitoba",
    "instructions": "string"
  },
  "service_code": {},
  "ship_date": {},
  "ship_from": {
    "address_line1": "1999 Bishop Grandin Blvd.",
    "address_line2": "Unit 408",
    "address_line3": "Building #7",
    "address_residential_indicator": "no",
    "city_locality": "Winnipeg",
    "company_name": "The Home Depot",
    "country_code": {},
    "email": "example@example.com",
    "name": "John Doe",
    "phone": "+1 204-253-9411 ext. 123",
    "postal_code": {},
    "state_province": "Manitoba",
    "instructions": "string"
  },
  "ship_to": {
    "address_line1": "1999 Bishop Grandin Blvd.",
    "address_line2": "Unit 408",
    "address_line3": "Building #7",
    "address_residential_indicator": "no",
    "city_locality": "Winnipeg",
    "company_name": "The Home Depot",
    "country_code": {},
    "email": "example@example.com",
    "name": "John Doe",
    "phone": "+1 204-253-9411 ext. 123",
    "postal_code": {},
    "state_province": "Manitoba",
    "instructions": "string"
  },
  "shipment_id": {},
  "shipment_number": "string",
  "shipment_status": "pending",
  "tags": [],
  "tax_identifiers": [
    {
      "identifier_type": {},
      "issuing_authority": "string",
      "taxable_entity_type": {},
      "value": "string"
    }
  ],
  "total_weight": {
    "unit": {},
    "value": 0.1
  },
  "warehouse_id": null,
  "address_validation": {
    "matched_address": {
      "address_line1": "1999 Bishop Grandin Blvd.",
      "address_line2": "Unit 408",
      "address_line3": "Building #7",
      "address_residential_indicator": "no",
      "city_locality": "Winnipeg",
      "company_name": "The Home Depot",
      "country_code": {},
      "email": "example@example.com",
      "name": "John Doe",
      "phone": "+1 204-253-9411 ext. 123",
      "postal_code": {},
      "state_province": "Manitoba"
    },
    "messages": [],
    "original_address": {
      "address_line1": "1999 Bishop Grandin Blvd.",
      "address_line2": "Unit 408",
      "address_line3": "Building #7",
      "address_residential_indicator": "no",
      "city_locality": "Winnipeg",
      "company_name": "The Home Depot",
      "country_code": {},
      "email": "example@example.com",
      "name": "John Doe",
      "phone": "+1 204-253-9411 ext. 123",
      "postal_code": {},
      "state_province": "Manitoba"
    },
    "status": {}
  },
  "errors": [
    "Parameter value '100000000.00' is out of range."
  ]
}
```

A create and validate shipment resource

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|advanced_options|object|false|none|Advanced shipment options.  These are entirely optional.|
|carrier_id|object|false|none|The carrier account that is billed for the shipping charges|
|confirmation|object|false|none|The type of delivery confirmation that is required for this shipment.|
|created_at|object|false|read-only|The date and time that the shipment was created in ShipEngine.|
|customs|object \| null|false|none|Customs information.  This is usually only needed for international shipments.<br>|
|external_order_id|string \| null|false|none|ID that the Order Source assigned|
|external_shipment_id|string \| null|false|none|A unique user-defined key to identify a shipment.  This can be used to retrieve the shipment.<br><br>> **Warning:** The `external_shipment_id` is limited to 50 characters. Any additional characters will be truncated.<br>|
|insurance_provider|object|false|none|The insurance provider to use for any insured packages in the shipment.<br>|
|items|[object]|false|none|Describe the packages included in this shipment as related to potential metadata that was imported from<br>external order sources<br>|
|modified_at|object|false|read-only|The date and time that the shipment was created or last modified.|
|order_source_code|object|false|none|none|
|origin_type|object \| null|false|none|Indicates if the package will be picked up or dropped off by the carrier|
|packages|[object]|false|none|The packages in the shipment.<br><br>> **Note:** Some carriers only allow one package per shipment.  If you attempt to create a multi-package shipment for a carrier that doesn't allow it, an error will be returned.<br>|
|return_to|object|false|none|The return address for this shipment.  Defaults to the `ship_from` address.<br>|
|service_code|object|false|none|The [carrier service](https://www.shipengine.com/docs/shipping/use-a-carrier-service/) used to ship the package, such as `fedex_ground`, `usps_first_class_mail`, `flat_rate_envelope`, etc.<br>|
|ship_date|object|false|none|The date that the shipment was (or will be) shippped.  ShipEngine will take the day of week into consideration. For example, if the carrier does not operate on Sundays, then a package that would have shipped on Sunday will ship on Monday instead.<br>|
|ship_from|object|false|none|The shipment's origin address. If you frequently ship from the same location, consider [creating a warehouse](https://www.shipengine.com/docs/reference/create-warehouse/).  Then you can simply specify the `warehouse_id` rather than the complete address each time.<br>|
|ship_to|object|false|none|The recipient's mailing address|
|shipment_id|object|false|read-only|A string that uniquely identifies the shipment|
|shipment_number|string \| null|false|none|A non-unique user-defined number used to identify a shipment.  If undefined, this will match the external_shipment_id of the shipment.<br><br>> **Warning:** The `shipment_number` is limited to 50 characters. Any additional characters will be truncated.<br>|
|shipment_status|object|false|read-only|The current status of the shipment|
|tags|[object]|false|read-only|Arbitrary tags associated with this shipment.  Tags can be used to categorize shipments, and shipments can be queried by their tags.<br>|
|tax_identifiers|[object]|false|none|none|
|total_weight|object|false|read-only|The combined weight of all packages in the shipment|
|warehouse_id|object \| null|false|none|The [warehouse](https://www.shipengine.com/docs/shipping/ship-from-a-warehouse/) that the shipment is being shipped from.  Either `warehouse_id` or `ship_from` must be specified.<br>|
|address_validation|object|false|none|The address validation|
|errors|[string]|false|read-only|**Deprecated.** An array of errors that occurred while creating shipment.|

<h2 id="tocS_create_batch_request_body">create_batch_request_body</h2>
<!-- backwards compatibility -->
<a id="schemacreate_batch_request_body"></a>
<a id="schema_create_batch_request_body"></a>
<a id="tocScreate_batch_request_body"></a>
<a id="tocscreate_batch_request_body"></a>

```json
{
  "batch_notes": "This is my batch",
  "external_batch_id": {},
  "rate_ids": [
    {}
  ],
  "shipment_ids": [
    {}
  ]
}
```

A create batch request body

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|batch_notes|string|false|none|Add custom messages for a particular batch|
|external_batch_id|object|false|none|A string that uniquely identifies the external batch|
|rate_ids|[string]|false|none|Array of rate IDs used in the batch|
|shipment_ids|[object]|false|none|Array of shipment IDs used in the batch|

<h2 id="tocS_create_batch_response_body">create_batch_response_body</h2>
<!-- backwards compatibility -->
<a id="schemacreate_batch_response_body"></a>
<a id="schema_create_batch_response_body"></a>
<a id="tocScreate_batch_response_body"></a>
<a id="tocscreate_batch_response_body"></a>

```json
{
  "batch_errors_url": {
    "href": {},
    "type": "string"
  },
  "batch_id": {},
  "batch_labels_url": {
    "href": {},
    "type": "string"
  },
  "batch_notes": "Batch for morning shipment",
  "batch_number": "string",
  "batch_shipments_url": {
    "href": {},
    "type": "string"
  },
  "completed": 1,
  "count": 2,
  "created_at": {},
  "errors": 2,
  "external_batch_id": "string",
  "form_download": {
    "href": {},
    "type": "string"
  },
  "forms": 3,
  "label_download": {
    "href": {},
    "pdf": {},
    "png": {},
    "zpl": {}
  },
  "label_format": "pdf",
  "label_layout": "4x6",
  "processed_at": {},
  "status": {},
  "warnings": 1
}
```

A create batch response body

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|batch_errors_url|object|true|read-only|Link to batch errors endpoint|
|batch_id|object|true|read-only|A string that uniquely identifies the batch|
|batch_labels_url|object|true|none|Link to batch labels query|
|batch_notes|string \| null|true|read-only|Custom notes you can add for each created batch|
|batch_number|string|true|read-only|The batch number.|
|batch_shipments_url|object|true|none|The batch shipments endpoint|
|completed|integer(int32)|true|read-only|The number of labels generated in the batch|
|count|integer(int32)|true|read-only|The total of errors, warnings, and completed properties|
|created_at|object|true|read-only|The date and time the batch was created in ShipEngine|
|errors|integer(int32)|true|read-only|The number of errors that occurred while generating the batch|
|external_batch_id|string \| null|true|read-only|A string that uniquely identifies the external batch|
|form_download|object|true|read-only|The form download for any customs that are needed|
|forms|integer(int32)|true|read-only|The number of forms for customs that are available for download|
|label_download|object|true|read-only|The label download for the batch|
|label_format|object|true|read-only|none|
|label_layout|object|true|read-only|label layout|
|processed_at|object \| null|true|read-only|The date and time the batch was processed in ShipEngine|
|status|object|true|read-only|none|
|warnings|integer(int32)|true|read-only|The number of warnings that occurred while generating the batch|

<h2 id="tocS_create_label_from_rate_request_body">create_label_from_rate_request_body</h2>
<!-- backwards compatibility -->
<a id="schemacreate_label_from_rate_request_body"></a>
<a id="schema_create_label_from_rate_request_body"></a>
<a id="tocScreate_label_from_rate_request_body"></a>
<a id="tocscreate_label_from_rate_request_body"></a>

```json
{
  "display_scheme": "label",
  "label_download_type": {},
  "label_format": "pdf",
  "label_layout": "4x6",
  "validate_address": {}
}
```

A purchase label without shipment request body

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|display_scheme|object|false|none|The display format that the label should be shown in.|
|label_download_type|object|false|none|none|
|label_format|object|false|none|none|
|label_layout|object|false|none|none|
|validate_address|object|false|none|none|

<h2 id="tocS_create_label_from_rate_response_body">create_label_from_rate_response_body</h2>
<!-- backwards compatibility -->
<a id="schemacreate_label_from_rate_response_body"></a>
<a id="schema_create_label_from_rate_response_body"></a>
<a id="tocScreate_label_from_rate_response_body"></a>
<a id="tocscreate_label_from_rate_response_body"></a>

```json
{
  "alternative_identifiers": [
    {
      "type": "last_mile_tracking_number",
      "value": "12345678912345678912"
    }
  ],
  "batch_id": {},
  "carrier_code": {},
  "carrier_id": {},
  "charge_event": {},
  "created_at": {},
  "display_scheme": "label",
  "form_download": {
    "href": {},
    "type": "string"
  },
  "insurance_claim": {
    "href": {},
    "type": "string"
  },
  "insurance_cost": {
    "amount": 0,
    "currency": {}
  },
  "is_international": true,
  "is_return_label": true,
  "label_download": {
    "href": {},
    "pdf": {},
    "png": {},
    "zpl": {}
  },
  "label_download_type": "url",
  "label_format": "pdf",
  "label_id": {},
  "label_image_id": {},
  "label_layout": "4x6",
  "outbound_label_id": {},
  "package_code": {},
  "packages": [
    {
      "content_description": "Hand knitted wool socks",
      "dimensions": {
        "height": 0,
        "length": 0,
        "unit": "inch",
        "width": 0
      },
      "external_package_id": "string",
      "form_download": {
        "href": {},
        "type": "string"
      },
      "insured_value": [
        {
          "amount": 0,
          "currency": "usd"
        }
      ],
      "label_download": {
        "href": {},
        "pdf": {},
        "png": {},
        "zpl": {}
      },
      "label_messages": {
        "reference1": null,
        "reference2": null,
        "reference3": null
      },
      "package_code": {},
      "package_id": {},
      "sequence": 0,
      "tracking_number": {},
      "weight": {
        "unit": {},
        "value": 0.1
      }
    }
  ],
  "rma_number": "string",
  "service_code": {},
  "ship_date": {},
  "shipment": {
    "advanced_options": {
      "bill_to_account": null,
      "bill_to_country_code": null,
      "bill_to_party": null,
      "bill_to_postal_code": null,
      "collect_on_delivery": {
        "payment_amount": {
          "amount": 0,
          "currency": {}
        },
        "payment_type": {}
      },
      "contains_alcohol": false,
      "custom_field1": null,
      "custom_field2": null,
      "custom_field3": null,
      "delivered_duty_paid": false,
      "dry_ice": false,
      "dry_ice_weight": {
        "unit": {},
        "value": 0.1
      },
      "fedex_freight": {
        "booking_confirmation": "string",
        "shipper_load_and_count": "string"
      },
      "freight_class": 77.5,
      "non_machinable": false,
      "origin_type": null,
      "saturday_delivery": false,
      "shipper_release": null,
      "third_party_consignee": false,
      "use_ups_ground_freight_pricing": null
    },
    "carrier_id": {},
    "confirmation": "none",
    "created_at": {},
    "customs": null,
    "external_order_id": "string",
    "external_shipment_id": "string",
    "insurance_provider": "none",
    "items": [],
    "modified_at": {},
    "order_source_code": {},
    "origin_type": {},
    "packages": [
      {
        "content_description": "Hand knitted wool socks",
        "dimensions": {
          "height": 0,
          "length": 0,
          "unit": "inch",
          "width": 0
        },
        "external_package_id": "string",
        "form_download": {
          "href": {},
          "type": "string"
        },
        "insured_value": [
          {
            "amount": 0,
            "currency": "usd"
          }
        ],
        "label_download": {
          "href": {},
          "pdf": {},
          "png": {},
          "zpl": {}
        },
        "label_messages": {
          "reference1": null,
          "reference2": null,
          "reference3": null
        },
        "package_code": {},
        "package_id": {},
        "sequence": 0,
        "tracking_number": {},
        "weight": {
          "unit": {},
          "value": 0.1
        }
      }
    ],
    "return_to": {
      "address_line1": "1999 Bishop Grandin Blvd.",
      "address_line2": "Unit 408",
      "address_line3": "Building #7",
      "address_residential_indicator": "no",
      "city_locality": "Winnipeg",
      "company_name": "The Home Depot",
      "country_code": {},
      "email": "example@example.com",
      "name": "John Doe",
      "phone": "+1 204-253-9411 ext. 123",
      "postal_code": {},
      "state_province": "Manitoba",
      "instructions": "string"
    },
    "service_code": {},
    "ship_date": {},
    "ship_from": {
      "address_line1": "1999 Bishop Grandin Blvd.",
      "address_line2": "Unit 408",
      "address_line3": "Building #7",
      "address_residential_indicator": "no",
      "city_locality": "Winnipeg",
      "company_name": "The Home Depot",
      "country_code": {},
      "email": "example@example.com",
      "name": "John Doe",
      "phone": "+1 204-253-9411 ext. 123",
      "postal_code": {},
      "state_province": "Manitoba",
      "instructions": "string"
    },
    "ship_to": {
      "address_line1": "1999 Bishop Grandin Blvd.",
      "address_line2": "Unit 408",
      "address_line3": "Building #7",
      "address_residential_indicator": "no",
      "city_locality": "Winnipeg",
      "company_name": "The Home Depot",
      "country_code": {},
      "email": "example@example.com",
      "name": "John Doe",
      "phone": "+1 204-253-9411 ext. 123",
      "postal_code": {},
      "state_province": "Manitoba",
      "instructions": "string"
    },
    "shipment_id": {},
    "shipment_number": "string",
    "shipment_status": "pending",
    "tags": [],
    "tax_identifiers": [
      {
        "identifier_type": {},
        "issuing_authority": "string",
        "taxable_entity_type": {},
        "value": "string"
      }
    ],
    "total_weight": {
      "unit": {},
      "value": 0.1
    },
    "warehouse_id": null
  },
  "shipment_cost": {
    "amount": 0,
    "currency": {}
  },
  "shipment_id": {},
  "status": {},
  "test_label": false,
  "trackable": true,
  "tracking_number": "782758401696",
  "tracking_status": {},
  "validate_address": "validate_and_clean",
  "voided": true,
  "voided_at": {}
}
```

A create label from rate response body

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alternative_identifiers|[[alternative_identifier](#schemaalternative_identifier)]|false|read-only|Additional information some carriers may provide by which to identify a given label in their system. <br>|
|batch_id|object|false|read-only|If this label was created as part of a [batch](https://www.shipengine.com/docs/labels/bulk/), then this is the unique ID of that batch.<br>|
|carrier_code|object|false|read-only|The [shipping carrier](https://www.shipengine.com/docs/carriers/setup/) who will ship the package, such as `fedex`, `dhl_express`, `stamps_com`, etc.<br>|
|carrier_id|object|false|read-only|The unique ID of the [carrier account](https://www.shipengine.com/docs/carriers/setup/) that was used to create this label<br>|
|charge_event|object|false|none|The label charge event.<br>|
|created_at|object|false|read-only|The date and time that the label was created in ShipEngine.|
|display_scheme|object|false|none|The display format that the label should be shown in.|
|form_download|object \| null|false|read-only|The link to download the customs form (a.k.a. commercial invoice) for this shipment, if any.  Forms are in PDF format. This field is null if the shipment does not require a customs form, or if the carrier does not support it.<br>|
|insurance_claim|object \| null|false|read-only|The link to submit an insurance claim for the shipment.  This field is null if the shipment is not insured or if the insurance provider does not support online claim submission.<br>|
|insurance_cost|object|false|read-only|The insurance cost for this package.  Add this to the `shipment_cost` field to get the total cost.<br>|
|is_international|boolean|false|read-only|Indicates whether this is an international shipment.  That is, the originating country and destination country are different.<br>|
|is_return_label|boolean|false|none|Indicates whether this is a return label.  You may also want to set the `rma_number` so you know what is being returned.<br>|
|label_download|object|false|read-only|none|
|label_download_type|object|false|write-only|none|
|label_format|object|false|none|The file format that you want the label to be in.  We recommend `pdf` format because it is supported by all carriers, whereas some carriers do not support the `png` or `zpl` formats.<br>|
|label_id|object|false|read-only|A string that uniquely identifies the label. This ID is generated by ShipEngine when the label is created.<br>|
|label_image_id|object \| null|false|none|The label image resource that was used to create a custom label image.|
|label_layout|object|false|none|The layout (size) that you want the label to be in.  The `label_format` determines which sizes are allowed.  `4x6` is supported for all label formats, whereas `letter` (8.5" x 11") is only supported for `pdf` format.<br>|
|outbound_label_id|object|false|write-only|The `label_id` of the original (outgoing) label that the return label is for. This associates the two labels together, which is<br>required by some carriers.<br>|
|package_code|object|false|read-only|The [package type](https://www.shipengine.com/docs/reference/list-carrier-packages/), such as `thick_envelope`, `small_flat_rate_box`, `large_package`, etc.  The code `package` indicates a custom or unknown package type.<br>|
|packages|[[package](#schemapackage)]|false|read-only|The label's package(s).<br><br>> **Note:** Some carriers only allow one package per label.  If you attempt to create a multi-package label for a carrier that doesn't allow it, an error will be returned.<br>|
|rma_number|string \| null|false|none|An optional Return Merchandise Authorization number.  This field is useful for return labels.  You can set it to any string value.<br>|
|service_code|object|false|read-only|The [carrier service](https://www.shipengine.com/docs/shipping/use-a-carrier-service/) used to ship the package, such as `fedex_ground`, `usps_first_class_mail`, `flat_rate_envelope`, etc.<br>|
|ship_date|object|false|read-only|The date that the package was (or will be) shippped.  ShipEngine will take the day of week into consideration. For example, if the carrier does not operate on Sundays, then a package that would have shipped on Sunday will ship on Monday instead.<br>|
|shipment|object|false|write-only|The shipment information used to generate the label|
|shipment_cost|object|false|read-only|The cost of shipping, delivery confirmation, and other carrier charges.  This amount **does not** include insurance costs.<br>|
|shipment_id|object|false|read-only|The shipment that this label is for.  ShipEngine can create a shipment for you automatically when you [create a label](https://www.shipengine.com/docs/labels/create-a-label/), or you can [create your own shipment](https://www.shipengine.com/docs/shipping/create-a-shipment/) and then [use it to print a label](https://www.shipengine.com/docs/labels/create-from-shipment/)<br>|
|status|object|false|read-only|none|
|test_label|boolean|false|write-only|**Deprecated.** Indicate if this label is being used only for testing purposes. If true, then no charge will be added to your account.|
|trackable|boolean|false|read-only|Indicates whether the shipment is trackable, in which case the `tracking_status` field will reflect the current status and each package will have a `tracking_number`.<br>|
|tracking_number|string|false|read-only|The tracking number for the package. Tracking number formats vary across carriers.|
|tracking_status|object|false|read-only|The current status of the package, such as `in_transit` or `delivered`|
|validate_address|object|false|write-only|none|
|voided|boolean|false|read-only|Indicates whether the label has been [voided](https://www.shipengine.com/docs/labels/voiding/)<br>|
|voided_at|object \| null|false|read-only|The date and time that the label was [voided](https://www.shipengine.com/docs/labels/voiding/), or `null` if the label has not been voided<br>|

<h2 id="tocS_create_label_from_shipment_request_body">create_label_from_shipment_request_body</h2>
<!-- backwards compatibility -->
<a id="schemacreate_label_from_shipment_request_body"></a>
<a id="schema_create_label_from_shipment_request_body"></a>
<a id="tocScreate_label_from_shipment_request_body"></a>
<a id="tocscreate_label_from_shipment_request_body"></a>

```json
{
  "display_scheme": "label",
  "label_download_type": {},
  "label_format": "pdf",
  "label_layout": "4x6",
  "validate_address": {}
}
```

A purchase label without shipment request body

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|display_scheme|object|false|none|The display format that the label should be shown in.|
|label_download_type|object|false|none|none|
|label_format|object|false|none|none|
|label_layout|object|false|none|none|
|validate_address|object|false|none|none|

<h2 id="tocS_create_label_from_shipment_response_body">create_label_from_shipment_response_body</h2>
<!-- backwards compatibility -->
<a id="schemacreate_label_from_shipment_response_body"></a>
<a id="schema_create_label_from_shipment_response_body"></a>
<a id="tocScreate_label_from_shipment_response_body"></a>
<a id="tocscreate_label_from_shipment_response_body"></a>

```json
{
  "alternative_identifiers": [
    {
      "type": "last_mile_tracking_number",
      "value": "12345678912345678912"
    }
  ],
  "batch_id": {},
  "carrier_code": {},
  "carrier_id": {},
  "charge_event": {},
  "created_at": {},
  "display_scheme": "label",
  "form_download": {
    "href": {},
    "type": "string"
  },
  "insurance_claim": {
    "href": {},
    "type": "string"
  },
  "insurance_cost": {
    "amount": 0,
    "currency": {}
  },
  "is_international": true,
  "is_return_label": true,
  "label_download": {
    "href": {},
    "pdf": {},
    "png": {},
    "zpl": {}
  },
  "label_download_type": "url",
  "label_format": "pdf",
  "label_id": {},
  "label_image_id": {},
  "label_layout": "4x6",
  "outbound_label_id": {},
  "package_code": {},
  "packages": [
    {
      "content_description": "Hand knitted wool socks",
      "dimensions": {
        "height": 0,
        "length": 0,
        "unit": "inch",
        "width": 0
      },
      "external_package_id": "string",
      "form_download": {
        "href": {},
        "type": "string"
      },
      "insured_value": [
        {
          "amount": 0,
          "currency": "usd"
        }
      ],
      "label_download": {
        "href": {},
        "pdf": {},
        "png": {},
        "zpl": {}
      },
      "label_messages": {
        "reference1": null,
        "reference2": null,
        "reference3": null
      },
      "package_code": {},
      "package_id": {},
      "sequence": 0,
      "tracking_number": {},
      "weight": {
        "unit": {},
        "value": 0.1
      }
    }
  ],
  "rma_number": "string",
  "service_code": {},
  "ship_date": {},
  "shipment": {
    "advanced_options": {
      "bill_to_account": null,
      "bill_to_country_code": null,
      "bill_to_party": null,
      "bill_to_postal_code": null,
      "collect_on_delivery": {
        "payment_amount": {
          "amount": 0,
          "currency": {}
        },
        "payment_type": {}
      },
      "contains_alcohol": false,
      "custom_field1": null,
      "custom_field2": null,
      "custom_field3": null,
      "delivered_duty_paid": false,
      "dry_ice": false,
      "dry_ice_weight": {
        "unit": {},
        "value": 0.1
      },
      "fedex_freight": {
        "booking_confirmation": "string",
        "shipper_load_and_count": "string"
      },
      "freight_class": 77.5,
      "non_machinable": false,
      "origin_type": null,
      "saturday_delivery": false,
      "shipper_release": null,
      "third_party_consignee": false,
      "use_ups_ground_freight_pricing": null
    },
    "carrier_id": {},
    "confirmation": "none",
    "created_at": {},
    "customs": null,
    "external_order_id": "string",
    "external_shipment_id": "string",
    "insurance_provider": "none",
    "items": [],
    "modified_at": {},
    "order_source_code": {},
    "origin_type": {},
    "packages": [
      {
        "content_description": "Hand knitted wool socks",
        "dimensions": {
          "height": 0,
          "length": 0,
          "unit": "inch",
          "width": 0
        },
        "external_package_id": "string",
        "form_download": {
          "href": {},
          "type": "string"
        },
        "insured_value": [
          {
            "amount": 0,
            "currency": "usd"
          }
        ],
        "label_download": {
          "href": {},
          "pdf": {},
          "png": {},
          "zpl": {}
        },
        "label_messages": {
          "reference1": null,
          "reference2": null,
          "reference3": null
        },
        "package_code": {},
        "package_id": {},
        "sequence": 0,
        "tracking_number": {},
        "weight": {
          "unit": {},
          "value": 0.1
        }
      }
    ],
    "return_to": {
      "address_line1": "1999 Bishop Grandin Blvd.",
      "address_line2": "Unit 408",
      "address_line3": "Building #7",
      "address_residential_indicator": "no",
      "city_locality": "Winnipeg",
      "company_name": "The Home Depot",
      "country_code": {},
      "email": "example@example.com",
      "name": "John Doe",
      "phone": "+1 204-253-9411 ext. 123",
      "postal_code": {},
      "state_province": "Manitoba",
      "instructions": "string"
    },
    "service_code": {},
    "ship_date": {},
    "ship_from": {
      "address_line1": "1999 Bishop Grandin Blvd.",
      "address_line2": "Unit 408",
      "address_line3": "Building #7",
      "address_residential_indicator": "no",
      "city_locality": "Winnipeg",
      "company_name": "The Home Depot",
      "country_code": {},
      "email": "example@example.com",
      "name": "John Doe",
      "phone": "+1 204-253-9411 ext. 123",
      "postal_code": {},
      "state_province": "Manitoba",
      "instructions": "string"
    },
    "ship_to": {
      "address_line1": "1999 Bishop Grandin Blvd.",
      "address_line2": "Unit 408",
      "address_line3": "Building #7",
      "address_residential_indicator": "no",
      "city_locality": "Winnipeg",
      "company_name": "The Home Depot",
      "country_code": {},
      "email": "example@example.com",
      "name": "John Doe",
      "phone": "+1 204-253-9411 ext. 123",
      "postal_code": {},
      "state_province": "Manitoba",
      "instructions": "string"
    },
    "shipment_id": {},
    "shipment_number": "string",
    "shipment_status": "pending",
    "tags": [],
    "tax_identifiers": [
      {
        "identifier_type": {},
        "issuing_authority": "string",
        "taxable_entity_type": {},
        "value": "string"
      }
    ],
    "total_weight": {
      "unit": {},
      "value": 0.1
    },
    "warehouse_id": null
  },
  "shipment_cost": {
    "amount": 0,
    "currency": {}
  },
  "shipment_id": {},
  "status": {},
  "test_label": false,
  "trackable": true,
  "tracking_number": "782758401696",
  "tracking_status": {},
  "validate_address": "validate_and_clean",
  "voided": true,
  "voided_at": {}
}
```

A create label from shipment response body

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alternative_identifiers|[[alternative_identifier](#schemaalternative_identifier)]|false|read-only|Additional information some carriers may provide by which to identify a given label in their system. <br>|
|batch_id|object|false|read-only|If this label was created as part of a [batch](https://www.shipengine.com/docs/labels/bulk/), then this is the unique ID of that batch.<br>|
|carrier_code|object|false|read-only|The [shipping carrier](https://www.shipengine.com/docs/carriers/setup/) who will ship the package, such as `fedex`, `dhl_express`, `stamps_com`, etc.<br>|
|carrier_id|object|false|read-only|The unique ID of the [carrier account](https://www.shipengine.com/docs/carriers/setup/) that was used to create this label<br>|
|charge_event|object|false|none|The label charge event.<br>|
|created_at|object|false|read-only|The date and time that the label was created in ShipEngine.|
|display_scheme|object|false|none|The display format that the label should be shown in.|
|form_download|object \| null|false|read-only|The link to download the customs form (a.k.a. commercial invoice) for this shipment, if any.  Forms are in PDF format. This field is null if the shipment does not require a customs form, or if the carrier does not support it.<br>|
|insurance_claim|object \| null|false|read-only|The link to submit an insurance claim for the shipment.  This field is null if the shipment is not insured or if the insurance provider does not support online claim submission.<br>|
|insurance_cost|object|false|read-only|The insurance cost for this package.  Add this to the `shipment_cost` field to get the total cost.<br>|
|is_international|boolean|false|read-only|Indicates whether this is an international shipment.  That is, the originating country and destination country are different.<br>|
|is_return_label|boolean|false|none|Indicates whether this is a return label.  You may also want to set the `rma_number` so you know what is being returned.<br>|
|label_download|object|false|read-only|none|
|label_download_type|object|false|write-only|none|
|label_format|object|false|none|The file format that you want the label to be in.  We recommend `pdf` format because it is supported by all carriers, whereas some carriers do not support the `png` or `zpl` formats.<br>|
|label_id|object|false|read-only|A string that uniquely identifies the label. This ID is generated by ShipEngine when the label is created.<br>|
|label_image_id|object \| null|false|none|The label image resource that was used to create a custom label image.|
|label_layout|object|false|none|The layout (size) that you want the label to be in.  The `label_format` determines which sizes are allowed.  `4x6` is supported for all label formats, whereas `letter` (8.5" x 11") is only supported for `pdf` format.<br>|
|outbound_label_id|object|false|write-only|The `label_id` of the original (outgoing) label that the return label is for. This associates the two labels together, which is<br>required by some carriers.<br>|
|package_code|object|false|read-only|The [package type](https://www.shipengine.com/docs/reference/list-carrier-packages/), such as `thick_envelope`, `small_flat_rate_box`, `large_package`, etc.  The code `package` indicates a custom or unknown package type.<br>|
|packages|[[package](#schemapackage)]|false|read-only|The label's package(s).<br><br>> **Note:** Some carriers only allow one package per label.  If you attempt to create a multi-package label for a carrier that doesn't allow it, an error will be returned.<br>|
|rma_number|string \| null|false|none|An optional Return Merchandise Authorization number.  This field is useful for return labels.  You can set it to any string value.<br>|
|service_code|object|false|read-only|The [carrier service](https://www.shipengine.com/docs/shipping/use-a-carrier-service/) used to ship the package, such as `fedex_ground`, `usps_first_class_mail`, `flat_rate_envelope`, etc.<br>|
|ship_date|object|false|read-only|The date that the package was (or will be) shippped.  ShipEngine will take the day of week into consideration. For example, if the carrier does not operate on Sundays, then a package that would have shipped on Sunday will ship on Monday instead.<br>|
|shipment|object|false|write-only|The shipment information used to generate the label|
|shipment_cost|object|false|read-only|The cost of shipping, delivery confirmation, and other carrier charges.  This amount **does not** include insurance costs.<br>|
|shipment_id|object|false|read-only|The shipment that this label is for.  ShipEngine can create a shipment for you automatically when you [create a label](https://www.shipengine.com/docs/labels/create-a-label/), or you can [create your own shipment](https://www.shipengine.com/docs/shipping/create-a-shipment/) and then [use it to print a label](https://www.shipengine.com/docs/labels/create-from-shipment/)<br>|
|status|object|false|read-only|none|
|test_label|boolean|false|write-only|**Deprecated.** Indicate if this label is being used only for testing purposes. If true, then no charge will be added to your account.|
|trackable|boolean|false|read-only|Indicates whether the shipment is trackable, in which case the `tracking_status` field will reflect the current status and each package will have a `tracking_number`.<br>|
|tracking_number|string|false|read-only|The tracking number for the package. Tracking number formats vary across carriers.|
|tracking_status|object|false|read-only|The current status of the package, such as `in_transit` or `delivered`|
|validate_address|object|false|write-only|none|
|voided|boolean|false|read-only|Indicates whether the label has been [voided](https://www.shipengine.com/docs/labels/voiding/)<br>|
|voided_at|object \| null|false|read-only|The date and time that the label was [voided](https://www.shipengine.com/docs/labels/voiding/), or `null` if the label has not been voided<br>|

<h2 id="tocS_create_label_request_body">create_label_request_body</h2>
<!-- backwards compatibility -->
<a id="schemacreate_label_request_body"></a>
<a id="schema_create_label_request_body"></a>
<a id="tocScreate_label_request_body"></a>
<a id="tocscreate_label_request_body"></a>

```json
{
  "alternative_identifiers": [
    {
      "type": "last_mile_tracking_number",
      "value": "12345678912345678912"
    }
  ],
  "batch_id": {},
  "carrier_code": {},
  "carrier_id": {},
  "charge_event": {},
  "created_at": {},
  "display_scheme": "label",
  "form_download": {
    "href": {},
    "type": "string"
  },
  "insurance_claim": {
    "href": {},
    "type": "string"
  },
  "insurance_cost": {
    "amount": 0,
    "currency": {}
  },
  "is_international": true,
  "is_return_label": true,
  "label_download": {
    "href": {},
    "pdf": {},
    "png": {},
    "zpl": {}
  },
  "label_download_type": "url",
  "label_format": "pdf",
  "label_id": {},
  "label_image_id": {},
  "label_layout": "4x6",
  "outbound_label_id": {},
  "package_code": {},
  "packages": [
    {
      "content_description": "Hand knitted wool socks",
      "dimensions": {
        "height": 0,
        "length": 0,
        "unit": "inch",
        "width": 0
      },
      "external_package_id": "string",
      "form_download": {
        "href": {},
        "type": "string"
      },
      "insured_value": [
        {
          "amount": 0,
          "currency": "usd"
        }
      ],
      "label_download": {
        "href": {},
        "pdf": {},
        "png": {},
        "zpl": {}
      },
      "label_messages": {
        "reference1": null,
        "reference2": null,
        "reference3": null
      },
      "package_code": {},
      "package_id": {},
      "sequence": 0,
      "tracking_number": {},
      "weight": {
        "unit": {},
        "value": 0.1
      }
    }
  ],
  "rma_number": "string",
  "service_code": {},
  "ship_date": {},
  "shipment": {
    "advanced_options": {
      "bill_to_account": null,
      "bill_to_country_code": null,
      "bill_to_party": null,
      "bill_to_postal_code": null,
      "collect_on_delivery": {
        "payment_amount": {
          "amount": 0,
          "currency": {}
        },
        "payment_type": {}
      },
      "contains_alcohol": false,
      "custom_field1": null,
      "custom_field2": null,
      "custom_field3": null,
      "delivered_duty_paid": false,
      "dry_ice": false,
      "dry_ice_weight": {
        "unit": {},
        "value": 0.1
      },
      "fedex_freight": {
        "booking_confirmation": "string",
        "shipper_load_and_count": "string"
      },
      "freight_class": 77.5,
      "non_machinable": false,
      "origin_type": null,
      "saturday_delivery": false,
      "shipper_release": null,
      "third_party_consignee": false,
      "use_ups_ground_freight_pricing": null
    },
    "carrier_id": {},
    "confirmation": "none",
    "created_at": {},
    "customs": null,
    "external_order_id": "string",
    "external_shipment_id": "string",
    "insurance_provider": "none",
    "items": [],
    "modified_at": {},
    "order_source_code": {},
    "origin_type": {},
    "packages": [
      {
        "content_description": "Hand knitted wool socks",
        "dimensions": {
          "height": 0,
          "length": 0,
          "unit": "inch",
          "width": 0
        },
        "external_package_id": "string",
        "form_download": {
          "href": {},
          "type": "string"
        },
        "insured_value": [
          {
            "amount": 0,
            "currency": "usd"
          }
        ],
        "label_download": {
          "href": {},
          "pdf": {},
          "png": {},
          "zpl": {}
        },
        "label_messages": {
          "reference1": null,
          "reference2": null,
          "reference3": null
        },
        "package_code": {},
        "package_id": {},
        "sequence": 0,
        "tracking_number": {},
        "weight": {
          "unit": {},
          "value": 0.1
        }
      }
    ],
    "return_to": {
      "address_line1": "1999 Bishop Grandin Blvd.",
      "address_line2": "Unit 408",
      "address_line3": "Building #7",
      "address_residential_indicator": "no",
      "city_locality": "Winnipeg",
      "company_name": "The Home Depot",
      "country_code": {},
      "email": "example@example.com",
      "name": "John Doe",
      "phone": "+1 204-253-9411 ext. 123",
      "postal_code": {},
      "state_province": "Manitoba",
      "instructions": "string"
    },
    "service_code": {},
    "ship_date": {},
    "ship_from": {
      "address_line1": "1999 Bishop Grandin Blvd.",
      "address_line2": "Unit 408",
      "address_line3": "Building #7",
      "address_residential_indicator": "no",
      "city_locality": "Winnipeg",
      "company_name": "The Home Depot",
      "country_code": {},
      "email": "example@example.com",
      "name": "John Doe",
      "phone": "+1 204-253-9411 ext. 123",
      "postal_code": {},
      "state_province": "Manitoba",
      "instructions": "string"
    },
    "ship_to": {
      "address_line1": "1999 Bishop Grandin Blvd.",
      "address_line2": "Unit 408",
      "address_line3": "Building #7",
      "address_residential_indicator": "no",
      "city_locality": "Winnipeg",
      "company_name": "The Home Depot",
      "country_code": {},
      "email": "example@example.com",
      "name": "John Doe",
      "phone": "+1 204-253-9411 ext. 123",
      "postal_code": {},
      "state_province": "Manitoba",
      "instructions": "string"
    },
    "shipment_id": {},
    "shipment_number": "string",
    "shipment_status": "pending",
    "tags": [],
    "tax_identifiers": [
      {
        "identifier_type": {},
        "issuing_authority": "string",
        "taxable_entity_type": {},
        "value": "string"
      }
    ],
    "total_weight": {
      "unit": {},
      "value": 0.1
    },
    "warehouse_id": null
  },
  "shipment_cost": {
    "amount": 0,
    "currency": {}
  },
  "shipment_id": {},
  "status": {},
  "test_label": false,
  "trackable": true,
  "tracking_number": "782758401696",
  "tracking_status": {},
  "validate_address": "validate_and_clean",
  "voided": true,
  "voided_at": {},
  "ship_from_service_point_id": "614940",
  "ship_to_service_point_id": "614940"
}
```

A purchase label request body

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alternative_identifiers|[[alternative_identifier](#schemaalternative_identifier)]|false|read-only|Additional information some carriers may provide by which to identify a given label in their system. <br>|
|batch_id|object|false|read-only|If this label was created as part of a [batch](https://www.shipengine.com/docs/labels/bulk/), then this is the unique ID of that batch.<br>|
|carrier_code|object|false|read-only|The [shipping carrier](https://www.shipengine.com/docs/carriers/setup/) who will ship the package, such as `fedex`, `dhl_express`, `stamps_com`, etc.<br>|
|carrier_id|object|false|read-only|The unique ID of the [carrier account](https://www.shipengine.com/docs/carriers/setup/) that was used to create this label<br>|
|charge_event|object|false|none|The label charge event.<br>|
|created_at|object|false|read-only|The date and time that the label was created in ShipEngine.|
|display_scheme|object|false|none|The display format that the label should be shown in.|
|form_download|object \| null|false|read-only|The link to download the customs form (a.k.a. commercial invoice) for this shipment, if any.  Forms are in PDF format. This field is null if the shipment does not require a customs form, or if the carrier does not support it.<br>|
|insurance_claim|object \| null|false|read-only|The link to submit an insurance claim for the shipment.  This field is null if the shipment is not insured or if the insurance provider does not support online claim submission.<br>|
|insurance_cost|object|false|read-only|The insurance cost for this package.  Add this to the `shipment_cost` field to get the total cost.<br>|
|is_international|boolean|false|read-only|Indicates whether this is an international shipment.  That is, the originating country and destination country are different.<br>|
|is_return_label|boolean|false|none|Indicates whether this is a return label.  You may also want to set the `rma_number` so you know what is being returned.<br>|
|label_download|object|false|read-only|none|
|label_download_type|object|false|write-only|none|
|label_format|object|false|none|The file format that you want the label to be in.  We recommend `pdf` format because it is supported by all carriers, whereas some carriers do not support the `png` or `zpl` formats.<br>|
|label_id|object|false|read-only|A string that uniquely identifies the label. This ID is generated by ShipEngine when the label is created.<br>|
|label_image_id|object \| null|false|none|The label image resource that was used to create a custom label image.|
|label_layout|object|false|none|The layout (size) that you want the label to be in.  The `label_format` determines which sizes are allowed.  `4x6` is supported for all label formats, whereas `letter` (8.5" x 11") is only supported for `pdf` format.<br>|
|outbound_label_id|object|false|write-only|The `label_id` of the original (outgoing) label that the return label is for. This associates the two labels together, which is<br>required by some carriers.<br>|
|package_code|object|false|read-only|The [package type](https://www.shipengine.com/docs/reference/list-carrier-packages/), such as `thick_envelope`, `small_flat_rate_box`, `large_package`, etc.  The code `package` indicates a custom or unknown package type.<br>|
|packages|[[package](#schemapackage)]|false|read-only|The label's package(s).<br><br>> **Note:** Some carriers only allow one package per label.  If you attempt to create a multi-package label for a carrier that doesn't allow it, an error will be returned.<br>|
|rma_number|string \| null|false|none|An optional Return Merchandise Authorization number.  This field is useful for return labels.  You can set it to any string value.<br>|
|service_code|object|false|read-only|The [carrier service](https://www.shipengine.com/docs/shipping/use-a-carrier-service/) used to ship the package, such as `fedex_ground`, `usps_first_class_mail`, `flat_rate_envelope`, etc.<br>|
|ship_date|object|false|read-only|The date that the package was (or will be) shippped.  ShipEngine will take the day of week into consideration. For example, if the carrier does not operate on Sundays, then a package that would have shipped on Sunday will ship on Monday instead.<br>|
|shipment|object|true|write-only|The shipment information used to generate the label|
|shipment_cost|object|false|read-only|The cost of shipping, delivery confirmation, and other carrier charges.  This amount **does not** include insurance costs.<br>|
|shipment_id|object|false|read-only|The shipment that this label is for.  ShipEngine can create a shipment for you automatically when you [create a label](https://www.shipengine.com/docs/labels/create-a-label/), or you can [create your own shipment](https://www.shipengine.com/docs/shipping/create-a-shipment/) and then [use it to print a label](https://www.shipengine.com/docs/labels/create-from-shipment/)<br>|
|status|object|false|read-only|none|
|test_label|boolean|false|write-only|**Deprecated.** Indicate if this label is being used only for testing purposes. If true, then no charge will be added to your account.|
|trackable|boolean|false|read-only|Indicates whether the shipment is trackable, in which case the `tracking_status` field will reflect the current status and each package will have a `tracking_number`.<br>|
|tracking_number|string|false|read-only|The tracking number for the package. Tracking number formats vary across carriers.|
|tracking_status|object|false|read-only|The current status of the package, such as `in_transit` or `delivered`|
|validate_address|object|false|write-only|none|
|voided|boolean|false|read-only|Indicates whether the label has been [voided](https://www.shipengine.com/docs/labels/voiding/)<br>|
|voided_at|object \| null|false|read-only|The date and time that the label was [voided](https://www.shipengine.com/docs/labels/voiding/), or `null` if the label has not been voided<br>|
|ship_from_service_point_id|string \| null|false|none|A unique identifier for a carrier drop off point where a merchant plans to deliver packages. This will take precedence over a shipment's ship from address.|
|ship_to_service_point_id|string \| null|false|none|A unique identifier for a carrier service point where the shipment will be delivered by the carrier. This will take precedence over a shipment's ship to address.|

<h2 id="tocS_create_label_response_body">create_label_response_body</h2>
<!-- backwards compatibility -->
<a id="schemacreate_label_response_body"></a>
<a id="schema_create_label_response_body"></a>
<a id="tocScreate_label_response_body"></a>
<a id="tocscreate_label_response_body"></a>

```json
{
  "alternative_identifiers": [
    {
      "type": "last_mile_tracking_number",
      "value": "12345678912345678912"
    }
  ],
  "batch_id": {},
  "carrier_code": {},
  "carrier_id": {},
  "charge_event": {},
  "created_at": {},
  "display_scheme": "label",
  "form_download": {
    "href": {},
    "type": "string"
  },
  "insurance_claim": {
    "href": {},
    "type": "string"
  },
  "insurance_cost": {
    "amount": 0,
    "currency": {}
  },
  "is_international": true,
  "is_return_label": true,
  "label_download": {
    "href": {},
    "pdf": {},
    "png": {},
    "zpl": {}
  },
  "label_download_type": "url",
  "label_format": "pdf",
  "label_id": {},
  "label_image_id": {},
  "label_layout": "4x6",
  "outbound_label_id": {},
  "package_code": {},
  "packages": [
    {
      "content_description": "Hand knitted wool socks",
      "dimensions": {
        "height": 0,
        "length": 0,
        "unit": "inch",
        "width": 0
      },
      "external_package_id": "string",
      "form_download": {
        "href": {},
        "type": "string"
      },
      "insured_value": [
        {
          "amount": 0,
          "currency": "usd"
        }
      ],
      "label_download": {
        "href": {},
        "pdf": {},
        "png": {},
        "zpl": {}
      },
      "label_messages": {
        "reference1": null,
        "reference2": null,
        "reference3": null
      },
      "package_code": {},
      "package_id": {},
      "sequence": 0,
      "tracking_number": {},
      "weight": {
        "unit": {},
        "value": 0.1
      }
    }
  ],
  "rma_number": "string",
  "service_code": {},
  "ship_date": {},
  "shipment": {
    "advanced_options": {
      "bill_to_account": null,
      "bill_to_country_code": null,
      "bill_to_party": null,
      "bill_to_postal_code": null,
      "collect_on_delivery": {
        "payment_amount": {
          "amount": 0,
          "currency": {}
        },
        "payment_type": {}
      },
      "contains_alcohol": false,
      "custom_field1": null,
      "custom_field2": null,
      "custom_field3": null,
      "delivered_duty_paid": false,
      "dry_ice": false,
      "dry_ice_weight": {
        "unit": {},
        "value": 0.1
      },
      "fedex_freight": {
        "booking_confirmation": "string",
        "shipper_load_and_count": "string"
      },
      "freight_class": 77.5,
      "non_machinable": false,
      "origin_type": null,
      "saturday_delivery": false,
      "shipper_release": null,
      "third_party_consignee": false,
      "use_ups_ground_freight_pricing": null
    },
    "carrier_id": {},
    "confirmation": "none",
    "created_at": {},
    "customs": null,
    "external_order_id": "string",
    "external_shipment_id": "string",
    "insurance_provider": "none",
    "items": [],
    "modified_at": {},
    "order_source_code": {},
    "origin_type": {},
    "packages": [
      {
        "content_description": "Hand knitted wool socks",
        "dimensions": {
          "height": 0,
          "length": 0,
          "unit": "inch",
          "width": 0
        },
        "external_package_id": "string",
        "form_download": {
          "href": {},
          "type": "string"
        },
        "insured_value": [
          {
            "amount": 0,
            "currency": "usd"
          }
        ],
        "label_download": {
          "href": {},
          "pdf": {},
          "png": {},
          "zpl": {}
        },
        "label_messages": {
          "reference1": null,
          "reference2": null,
          "reference3": null
        },
        "package_code": {},
        "package_id": {},
        "sequence": 0,
        "tracking_number": {},
        "weight": {
          "unit": {},
          "value": 0.1
        }
      }
    ],
    "return_to": {
      "address_line1": "1999 Bishop Grandin Blvd.",
      "address_line2": "Unit 408",
      "address_line3": "Building #7",
      "address_residential_indicator": "no",
      "city_locality": "Winnipeg",
      "company_name": "The Home Depot",
      "country_code": {},
      "email": "example@example.com",
      "name": "John Doe",
      "phone": "+1 204-253-9411 ext. 123",
      "postal_code": {},
      "state_province": "Manitoba",
      "instructions": "string"
    },
    "service_code": {},
    "ship_date": {},
    "ship_from": {
      "address_line1": "1999 Bishop Grandin Blvd.",
      "address_line2": "Unit 408",
      "address_line3": "Building #7",
      "address_residential_indicator": "no",
      "city_locality": "Winnipeg",
      "company_name": "The Home Depot",
      "country_code": {},
      "email": "example@example.com",
      "name": "John Doe",
      "phone": "+1 204-253-9411 ext. 123",
      "postal_code": {},
      "state_province": "Manitoba",
      "instructions": "string"
    },
    "ship_to": {
      "address_line1": "1999 Bishop Grandin Blvd.",
      "address_line2": "Unit 408",
      "address_line3": "Building #7",
      "address_residential_indicator": "no",
      "city_locality": "Winnipeg",
      "company_name": "The Home Depot",
      "country_code": {},
      "email": "example@example.com",
      "name": "John Doe",
      "phone": "+1 204-253-9411 ext. 123",
      "postal_code": {},
      "state_province": "Manitoba",
      "instructions": "string"
    },
    "shipment_id": {},
    "shipment_number": "string",
    "shipment_status": "pending",
    "tags": [],
    "tax_identifiers": [
      {
        "identifier_type": {},
        "issuing_authority": "string",
        "taxable_entity_type": {},
        "value": "string"
      }
    ],
    "total_weight": {
      "unit": {},
      "value": 0.1
    },
    "warehouse_id": null
  },
  "shipment_cost": {
    "amount": 0,
    "currency": {}
  },
  "shipment_id": {},
  "status": {},
  "test_label": false,
  "trackable": true,
  "tracking_number": "782758401696",
  "tracking_status": {},
  "validate_address": "validate_and_clean",
  "voided": true,
  "voided_at": {}
}
```

A create label response body

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alternative_identifiers|[[alternative_identifier](#schemaalternative_identifier)]|false|read-only|Additional information some carriers may provide by which to identify a given label in their system. <br>|
|batch_id|object|true|read-only|If this label was created as part of a [batch](https://www.shipengine.com/docs/labels/bulk/), then this is the unique ID of that batch.<br>|
|carrier_code|object|true|read-only|The [shipping carrier](https://www.shipengine.com/docs/carriers/setup/) who will ship the package, such as `fedex`, `dhl_express`, `stamps_com`, etc.<br>|
|carrier_id|object|true|read-only|The unique ID of the [carrier account](https://www.shipengine.com/docs/carriers/setup/) that was used to create this label<br>|
|charge_event|object|true|none|The label charge event.<br>|
|created_at|object|true|read-only|The date and time that the label was created in ShipEngine.|
|display_scheme|object|true|none|The display format that the label should be shown in.|
|form_download|object \| null|true|read-only|The link to download the customs form (a.k.a. commercial invoice) for this shipment, if any.  Forms are in PDF format. This field is null if the shipment does not require a customs form, or if the carrier does not support it.<br>|
|insurance_claim|object \| null|true|read-only|The link to submit an insurance claim for the shipment.  This field is null if the shipment is not insured or if the insurance provider does not support online claim submission.<br>|
|insurance_cost|object|true|read-only|The insurance cost for this package.  Add this to the `shipment_cost` field to get the total cost.<br>|
|is_international|boolean|true|read-only|Indicates whether this is an international shipment.  That is, the originating country and destination country are different.<br>|
|is_return_label|boolean|true|none|Indicates whether this is a return label.  You may also want to set the `rma_number` so you know what is being returned.<br>|
|label_download|object|true|read-only|none|
|label_download_type|object|false|write-only|none|
|label_format|object|true|none|The file format that you want the label to be in.  We recommend `pdf` format because it is supported by all carriers, whereas some carriers do not support the `png` or `zpl` formats.<br>|
|label_id|object|true|read-only|A string that uniquely identifies the label. This ID is generated by ShipEngine when the label is created.<br>|
|label_image_id|object \| null|true|none|The label image resource that was used to create a custom label image.|
|label_layout|object|true|none|The layout (size) that you want the label to be in.  The `label_format` determines which sizes are allowed.  `4x6` is supported for all label formats, whereas `letter` (8.5" x 11") is only supported for `pdf` format.<br>|
|outbound_label_id|object|false|write-only|The `label_id` of the original (outgoing) label that the return label is for. This associates the two labels together, which is<br>required by some carriers.<br>|
|package_code|object|true|read-only|The [package type](https://www.shipengine.com/docs/reference/list-carrier-packages/), such as `thick_envelope`, `small_flat_rate_box`, `large_package`, etc.  The code `package` indicates a custom or unknown package type.<br>|
|packages|[[package](#schemapackage)]|true|read-only|The label's package(s).<br><br>> **Note:** Some carriers only allow one package per label.  If you attempt to create a multi-package label for a carrier that doesn't allow it, an error will be returned.<br>|
|rma_number|string \| null|true|none|An optional Return Merchandise Authorization number.  This field is useful for return labels.  You can set it to any string value.<br>|
|service_code|object|true|read-only|The [carrier service](https://www.shipengine.com/docs/shipping/use-a-carrier-service/) used to ship the package, such as `fedex_ground`, `usps_first_class_mail`, `flat_rate_envelope`, etc.<br>|
|ship_date|object|true|read-only|The date that the package was (or will be) shippped.  ShipEngine will take the day of week into consideration. For example, if the carrier does not operate on Sundays, then a package that would have shipped on Sunday will ship on Monday instead.<br>|
|shipment|object|false|write-only|The shipment information used to generate the label|
|shipment_cost|object|true|read-only|The cost of shipping, delivery confirmation, and other carrier charges.  This amount **does not** include insurance costs.<br>|
|shipment_id|object|true|read-only|The shipment that this label is for.  ShipEngine can create a shipment for you automatically when you [create a label](https://www.shipengine.com/docs/labels/create-a-label/), or you can [create your own shipment](https://www.shipengine.com/docs/shipping/create-a-shipment/) and then [use it to print a label](https://www.shipengine.com/docs/labels/create-from-shipment/)<br>|
|status|object|true|read-only|none|
|test_label|boolean|false|write-only|**Deprecated.** Indicate if this label is being used only for testing purposes. If true, then no charge will be added to your account.|
|trackable|boolean|true|read-only|Indicates whether the shipment is trackable, in which case the `tracking_status` field will reflect the current status and each package will have a `tracking_number`.<br>|
|tracking_number|string|true|read-only|The tracking number for the package. Tracking number formats vary across carriers.|
|tracking_status|object|true|read-only|The current status of the package, such as `in_transit` or `delivered`|
|validate_address|object|false|write-only|none|
|voided|boolean|true|read-only|Indicates whether the label has been [voided](https://www.shipengine.com/docs/labels/voiding/)<br>|
|voided_at|object \| null|true|read-only|The date and time that the label was [voided](https://www.shipengine.com/docs/labels/voiding/), or `null` if the label has not been voided<br>|

<h2 id="tocS_create_manifest_by_object_request_body">create_manifest_by_object_request_body</h2>
<!-- backwards compatibility -->
<a id="schemacreate_manifest_by_object_request_body"></a>
<a id="schema_create_manifest_by_object_request_body"></a>
<a id="tocScreate_manifest_by_object_request_body"></a>
<a id="tocscreate_manifest_by_object_request_body"></a>

```json
{
  "carrier_id": {},
  "excluded_label_ids": [
    {}
  ],
  "label_ids": [
    {}
  ],
  "ship_date": "2018-09-23T15:00:00.000Z",
  "warehouse_id": {}
}
```

A create manifest request body

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|carrier_id|object|true|none|A string that uniquely identifies the carrier|
|excluded_label_ids|[object]|false|none|The list of label ids to exclude from the manifest|
|label_ids|[object]|false|none|The list of label ids to include for the manifest|
|ship_date|string(date-time)|true|none|The ship date that the shipment will be sent out on|
|warehouse_id|object|true|none|A string that uniquely identifies the warehouse|

<h2 id="tocS_create_manifest_label_ids_request_body">create_manifest_label_ids_request_body</h2>
<!-- backwards compatibility -->
<a id="schemacreate_manifest_label_ids_request_body"></a>
<a id="schema_create_manifest_label_ids_request_body"></a>
<a id="tocScreate_manifest_label_ids_request_body"></a>
<a id="tocscreate_manifest_label_ids_request_body"></a>

```json
{
  "label_ids": [
    {}
  ]
}
```

A create manifest request body

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|label_ids|[object]|true|none|The list of label ids to include in the manifest|

<h2 id="tocS_create_manifest_request_body">create_manifest_request_body</h2>
<!-- backwards compatibility -->
<a id="schemacreate_manifest_request_body"></a>
<a id="schema_create_manifest_request_body"></a>
<a id="tocScreate_manifest_request_body"></a>
<a id="tocscreate_manifest_request_body"></a>

```json
{
  "carrier_id": {},
  "excluded_label_ids": [
    {}
  ],
  "label_ids": [
    {}
  ],
  "ship_date": "2018-09-23T15:00:00.000Z",
  "warehouse_id": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[create_manifest_by_object_request_body](#schemacreate_manifest_by_object_request_body)|false|none|A create manifest request body|
|*oneOf*|[create_manifest_label_ids_request_body](#schemacreate_manifest_label_ids_request_body)|false|none|A create manifest request body|

<h2 id="tocS_create_manifest_response_body">create_manifest_response_body</h2>
<!-- backwards compatibility -->
<a id="schemacreate_manifest_response_body"></a>
<a id="schema_create_manifest_response_body"></a>
<a id="tocScreate_manifest_response_body"></a>
<a id="tocscreate_manifest_response_body"></a>

```json
{
  "manifests": [
    {
      "carrier_id": {},
      "created_at": "2019-07-12T13:37:39.050Z",
      "form_id": {},
      "label_ids": [
        {}
      ],
      "manifest_download": {
        "href": {}
      },
      "manifest_id": {},
      "ship_date": "2019-07-12T13:37:39.050Z",
      "shipments": 100,
      "submission_id": "9475711899564878915476",
      "warehouse_id": {}
    }
  ],
  "manifest_requests": [
    {
      "manifest_request_id": {},
      "status": {}
    }
  ],
  "carrier_id": {},
  "created_at": "2019-07-12T13:37:39.050Z",
  "form_id": {},
  "label_ids": [
    {}
  ],
  "manifest_download": {
    "href": {}
  },
  "manifest_id": {},
  "ship_date": "2019-07-12T13:37:39.050Z",
  "shipments": 100,
  "submission_id": "9475711899564878915476",
  "warehouse_id": {},
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

A create manifest response body

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|manifests|[[manifest](#schemamanifest)]|false|none|Resulting Manifests|
|manifest_requests|[[manifest_request](#schemamanifest_request)]|false|none|Resulting manifest requests with statuses|
|carrier_id|object|true|none|**Deprecated.** A string that uniquely identifies the carrier|
|created_at|string(date-time)|true|none|**Deprecated.** The date-time that the manifest was created|
|form_id|object|true|none|**Deprecated.** A string that uniquely identifies the form|
|label_ids|[object]|false|read-only|**Deprecated.** An array of the label ids used in this manifest.|
|manifest_download|object|true|none|**Deprecated.**|
|manifest_id|object|true|none|**Deprecated.** A string that uniquely identifies the manifest|
|ship_date|string(date-time)|true|none|**Deprecated.** The date-time that the manifests shipments will be picked up|
|shipments|integer(int32)|true|read-only|**Deprecated.** The number of shipments that are included in this manifest|
|submission_id|string|true|none|**Deprecated.** A string that uniquely identifies the submission|
|warehouse_id|object|true|none|**Deprecated.** A string that uniquely identifies the warehouse|
|errors|[object]|true|read-only|The errors associated with the failed API call|
|request_id|object|true|none|A UUID that uniquely identifies the request id.<br>This can be given to the support team to help debug non-trivial issues that may occur<br>|

<h2 id="tocS_create_package_type_request_body">create_package_type_request_body</h2>
<!-- backwards compatibility -->
<a id="schemacreate_package_type_request_body"></a>
<a id="schema_create_package_type_request_body"></a>
<a id="tocScreate_package_type_request_body"></a>
<a id="tocscreate_package_type_request_body"></a>

```json
{
  "description": "Packaging for laptops",
  "dimensions": {
    "height": 0,
    "length": 0,
    "unit": "inch",
    "width": 0
  },
  "name": "laptop_box",
  "package_code": {},
  "package_id": {}
}
```

A create package type request body

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string \| null|false|none|Provides a helpful description for the custom package.|
|dimensions|object|false|none|The custom dimensions for the package.|
|name|string|true|none|none|
|package_code|object|true|none|none|
|package_id|object|false|none|A string that uniquely identifies the package.|

<h2 id="tocS_create_package_type_response_body">create_package_type_response_body</h2>
<!-- backwards compatibility -->
<a id="schemacreate_package_type_response_body"></a>
<a id="schema_create_package_type_response_body"></a>
<a id="tocScreate_package_type_response_body"></a>
<a id="tocscreate_package_type_response_body"></a>

```json
{
  "description": "Packaging for laptops",
  "dimensions": {
    "height": 0,
    "length": 0,
    "unit": "inch",
    "width": 0
  },
  "name": "laptop_box",
  "package_code": {},
  "package_id": {}
}
```

A create package type response body

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string \| null|false|none|Provides a helpful description for the custom package.|
|dimensions|object|false|none|The custom dimensions for the package.|
|name|string|true|none|none|
|package_code|object|true|none|none|
|package_id|object|false|none|A string that uniquely identifies the package.|

<h2 id="tocS_create_return_label_request_body">create_return_label_request_body</h2>
<!-- backwards compatibility -->
<a id="schemacreate_return_label_request_body"></a>
<a id="schema_create_return_label_request_body"></a>
<a id="tocScreate_return_label_request_body"></a>
<a id="tocscreate_return_label_request_body"></a>

```json
{
  "charge_event": {},
  "display_scheme": "label",
  "label_download_type": "url",
  "label_format": "pdf",
  "label_image_id": {},
  "label_layout": "4x6"
}
```

A create return label request body

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|charge_event|object|false|none|The label charge event.<br>|
|display_scheme|object|false|none|The display format that the label should be shown in.|
|label_download_type|object|false|write-only|none|
|label_format|object|false|none|The file format that you want the label to be in.  We recommend `pdf` format because it is supported by all carriers, whereas some carriers do not support the `png` or `zpl` formats.<br>|
|label_image_id|object \| null|false|none|The label image resource that was used to create a custom label image.|
|label_layout|object|false|none|The layout (size) that you want the label to be in.  The `label_format` determines which sizes are allowed.  `4x6` is supported for all label formats, whereas `letter` (8.5" x 11") is only supported for `pdf` format.<br>|

<h2 id="tocS_create_return_label_response_body">create_return_label_response_body</h2>
<!-- backwards compatibility -->
<a id="schemacreate_return_label_response_body"></a>
<a id="schema_create_return_label_response_body"></a>
<a id="tocScreate_return_label_response_body"></a>
<a id="tocscreate_return_label_response_body"></a>

```json
{
  "alternative_identifiers": [
    {
      "type": "last_mile_tracking_number",
      "value": "12345678912345678912"
    }
  ],
  "batch_id": {},
  "carrier_code": {},
  "carrier_id": {},
  "charge_event": {},
  "created_at": {},
  "display_scheme": "label",
  "form_download": {
    "href": {},
    "type": "string"
  },
  "insurance_claim": {
    "href": {},
    "type": "string"
  },
  "insurance_cost": {
    "amount": 0,
    "currency": {}
  },
  "is_international": true,
  "is_return_label": true,
  "label_download": {
    "href": {},
    "pdf": {},
    "png": {},
    "zpl": {}
  },
  "label_download_type": "url",
  "label_format": "pdf",
  "label_id": {},
  "label_image_id": {},
  "label_layout": "4x6",
  "outbound_label_id": {},
  "package_code": {},
  "packages": [
    {
      "content_description": "Hand knitted wool socks",
      "dimensions": {
        "height": 0,
        "length": 0,
        "unit": "inch",
        "width": 0
      },
      "external_package_id": "string",
      "form_download": {
        "href": {},
        "type": "string"
      },
      "insured_value": [
        {
          "amount": 0,
          "currency": "usd"
        }
      ],
      "label_download": {
        "href": {},
        "pdf": {},
        "png": {},
        "zpl": {}
      },
      "label_messages": {
        "reference1": null,
        "reference2": null,
        "reference3": null
      },
      "package_code": {},
      "package_id": {},
      "sequence": 0,
      "tracking_number": {},
      "weight": {
        "unit": {},
        "value": 0.1
      }
    }
  ],
  "rma_number": "string",
  "service_code": {},
  "ship_date": {},
  "shipment": {
    "advanced_options": {
      "bill_to_account": null,
      "bill_to_country_code": null,
      "bill_to_party": null,
      "bill_to_postal_code": null,
      "collect_on_delivery": {
        "payment_amount": {
          "amount": 0,
          "currency": {}
        },
        "payment_type": {}
      },
      "contains_alcohol": false,
      "custom_field1": null,
      "custom_field2": null,
      "custom_field3": null,
      "delivered_duty_paid": false,
      "dry_ice": false,
      "dry_ice_weight": {
        "unit": {},
        "value": 0.1
      },
      "fedex_freight": {
        "booking_confirmation": "string",
        "shipper_load_and_count": "string"
      },
      "freight_class": 77.5,
      "non_machinable": false,
      "origin_type": null,
      "saturday_delivery": false,
      "shipper_release": null,
      "third_party_consignee": false,
      "use_ups_ground_freight_pricing": null
    },
    "carrier_id": {},
    "confirmation": "none",
    "created_at": {},
    "customs": null,
    "external_order_id": "string",
    "external_shipment_id": "string",
    "insurance_provider": "none",
    "items": [],
    "modified_at": {},
    "order_source_code": {},
    "origin_type": {},
    "packages": [
      {
        "content_description": "Hand knitted wool socks",
        "dimensions": {
          "height": 0,
          "length": 0,
          "unit": "inch",
          "width": 0
        },
        "external_package_id": "string",
        "form_download": {
          "href": {},
          "type": "string"
        },
        "insured_value": [
          {
            "amount": 0,
            "currency": "usd"
          }
        ],
        "label_download": {
          "href": {},
          "pdf": {},
          "png": {},
          "zpl": {}
        },
        "label_messages": {
          "reference1": null,
          "reference2": null,
          "reference3": null
        },
        "package_code": {},
        "package_id": {},
        "sequence": 0,
        "tracking_number": {},
        "weight": {
          "unit": {},
          "value": 0.1
        }
      }
    ],
    "return_to": {
      "address_line1": "1999 Bishop Grandin Blvd.",
      "address_line2": "Unit 408",
      "address_line3": "Building #7",
      "address_residential_indicator": "no",
      "city_locality": "Winnipeg",
      "company_name": "The Home Depot",
      "country_code": {},
      "email": "example@example.com",
      "name": "John Doe",
      "phone": "+1 204-253-9411 ext. 123",
      "postal_code": {},
      "state_province": "Manitoba",
      "instructions": "string"
    },
    "service_code": {},
    "ship_date": {},
    "ship_from": {
      "address_line1": "1999 Bishop Grandin Blvd.",
      "address_line2": "Unit 408",
      "address_line3": "Building #7",
      "address_residential_indicator": "no",
      "city_locality": "Winnipeg",
      "company_name": "The Home Depot",
      "country_code": {},
      "email": "example@example.com",
      "name": "John Doe",
      "phone": "+1 204-253-9411 ext. 123",
      "postal_code": {},
      "state_province": "Manitoba",
      "instructions": "string"
    },
    "ship_to": {
      "address_line1": "1999 Bishop Grandin Blvd.",
      "address_line2": "Unit 408",
      "address_line3": "Building #7",
      "address_residential_indicator": "no",
      "city_locality": "Winnipeg",
      "company_name": "The Home Depot",
      "country_code": {},
      "email": "example@example.com",
      "name": "John Doe",
      "phone": "+1 204-253-9411 ext. 123",
      "postal_code": {},
      "state_province": "Manitoba",
      "instructions": "string"
    },
    "shipment_id": {},
    "shipment_number": "string",
    "shipment_status": "pending",
    "tags": [],
    "tax_identifiers": [
      {
        "identifier_type": {},
        "issuing_authority": "string",
        "taxable_entity_type": {},
        "value": "string"
      }
    ],
    "total_weight": {
      "unit": {},
      "value": 0.1
    },
    "warehouse_id": null
  },
  "shipment_cost": {
    "amount": 0,
    "currency": {}
  },
  "shipment_id": {},
  "status": {},
  "test_label": false,
  "trackable": true,
  "tracking_number": "782758401696",
  "tracking_status": {},
  "validate_address": "validate_and_clean",
  "voided": true,
  "voided_at": {}
}
```

A create return label response body

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alternative_identifiers|[[alternative_identifier](#schemaalternative_identifier)]|false|read-only|Additional information some carriers may provide by which to identify a given label in their system. <br>|
|batch_id|object|false|read-only|If this label was created as part of a [batch](https://www.shipengine.com/docs/labels/bulk/), then this is the unique ID of that batch.<br>|
|carrier_code|object|false|read-only|The [shipping carrier](https://www.shipengine.com/docs/carriers/setup/) who will ship the package, such as `fedex`, `dhl_express`, `stamps_com`, etc.<br>|
|carrier_id|object|false|read-only|The unique ID of the [carrier account](https://www.shipengine.com/docs/carriers/setup/) that was used to create this label<br>|
|charge_event|object|false|none|The label charge event.<br>|
|created_at|object|false|read-only|The date and time that the label was created in ShipEngine.|
|display_scheme|object|false|none|The display format that the label should be shown in.|
|form_download|object \| null|false|read-only|The link to download the customs form (a.k.a. commercial invoice) for this shipment, if any.  Forms are in PDF format. This field is null if the shipment does not require a customs form, or if the carrier does not support it.<br>|
|insurance_claim|object \| null|false|read-only|The link to submit an insurance claim for the shipment.  This field is null if the shipment is not insured or if the insurance provider does not support online claim submission.<br>|
|insurance_cost|object|false|read-only|The insurance cost for this package.  Add this to the `shipment_cost` field to get the total cost.<br>|
|is_international|boolean|false|read-only|Indicates whether this is an international shipment.  That is, the originating country and destination country are different.<br>|
|is_return_label|boolean|false|none|Indicates whether this is a return label.  You may also want to set the `rma_number` so you know what is being returned.<br>|
|label_download|object|false|read-only|none|
|label_download_type|object|false|write-only|none|
|label_format|object|false|none|The file format that you want the label to be in.  We recommend `pdf` format because it is supported by all carriers, whereas some carriers do not support the `png` or `zpl` formats.<br>|
|label_id|object|false|read-only|A string that uniquely identifies the label. This ID is generated by ShipEngine when the label is created.<br>|
|label_image_id|object \| null|false|none|The label image resource that was used to create a custom label image.|
|label_layout|object|false|none|The layout (size) that you want the label to be in.  The `label_format` determines which sizes are allowed.  `4x6` is supported for all label formats, whereas `letter` (8.5" x 11") is only supported for `pdf` format.<br>|
|outbound_label_id|object|false|write-only|The `label_id` of the original (outgoing) label that the return label is for. This associates the two labels together, which is<br>required by some carriers.<br>|
|package_code|object|false|read-only|The [package type](https://www.shipengine.com/docs/reference/list-carrier-packages/), such as `thick_envelope`, `small_flat_rate_box`, `large_package`, etc.  The code `package` indicates a custom or unknown package type.<br>|
|packages|[[package](#schemapackage)]|false|read-only|The label's package(s).<br><br>> **Note:** Some carriers only allow one package per label.  If you attempt to create a multi-package label for a carrier that doesn't allow it, an error will be returned.<br>|
|rma_number|string \| null|false|none|An optional Return Merchandise Authorization number.  This field is useful for return labels.  You can set it to any string value.<br>|
|service_code|object|false|read-only|The [carrier service](https://www.shipengine.com/docs/shipping/use-a-carrier-service/) used to ship the package, such as `fedex_ground`, `usps_first_class_mail`, `flat_rate_envelope`, etc.<br>|
|ship_date|object|false|read-only|The date that the package was (or will be) shippped.  ShipEngine will take the day of week into consideration. For example, if the carrier does not operate on Sundays, then a package that would have shipped on Sunday will ship on Monday instead.<br>|
|shipment|object|false|write-only|The shipment information used to generate the label|
|shipment_cost|object|false|read-only|The cost of shipping, delivery confirmation, and other carrier charges.  This amount **does not** include insurance costs.<br>|
|shipment_id|object|false|read-only|The shipment that this label is for.  ShipEngine can create a shipment for you automatically when you [create a label](https://www.shipengine.com/docs/labels/create-a-label/), or you can [create your own shipment](https://www.shipengine.com/docs/shipping/create-a-shipment/) and then [use it to print a label](https://www.shipengine.com/docs/labels/create-from-shipment/)<br>|
|status|object|false|read-only|none|
|test_label|boolean|false|write-only|**Deprecated.** Indicate if this label is being used only for testing purposes. If true, then no charge will be added to your account.|
|trackable|boolean|false|read-only|Indicates whether the shipment is trackable, in which case the `tracking_status` field will reflect the current status and each package will have a `tracking_number`.<br>|
|tracking_number|string|false|read-only|The tracking number for the package. Tracking number formats vary across carriers.|
|tracking_status|object|false|read-only|The current status of the package, such as `in_transit` or `delivered`|
|validate_address|object|false|write-only|none|
|voided|boolean|false|read-only|Indicates whether the label has been [voided](https://www.shipengine.com/docs/labels/voiding/)<br>|
|voided_at|object \| null|false|read-only|The date and time that the label was [voided](https://www.shipengine.com/docs/labels/voiding/), or `null` if the label has not been voided<br>|

<h2 id="tocS_create_shipment_response_body_fields">create_shipment_response_body_fields</h2>
<!-- backwards compatibility -->
<a id="schemacreate_shipment_response_body_fields"></a>
<a id="schema_create_shipment_response_body_fields"></a>
<a id="tocScreate_shipment_response_body_fields"></a>
<a id="tocscreate_shipment_response_body_fields"></a>

```json
{
  "address_validation": {
    "matched_address": {
      "address_line1": "1999 Bishop Grandin Blvd.",
      "address_line2": "Unit 408",
      "address_line3": "Building #7",
      "address_residential_indicator": "no",
      "city_locality": "Winnipeg",
      "company_name": "The Home Depot",
      "country_code": {},
      "email": "example@example.com",
      "name": "John Doe",
      "phone": "+1 204-253-9411 ext. 123",
      "postal_code": {},
      "state_province": "Manitoba"
    },
    "messages": [],
    "original_address": {
      "address_line1": "1999 Bishop Grandin Blvd.",
      "address_line2": "Unit 408",
      "address_line3": "Building #7",
      "address_residential_indicator": "no",
      "city_locality": "Winnipeg",
      "company_name": "The Home Depot",
      "country_code": {},
      "email": "example@example.com",
      "name": "John Doe",
      "phone": "+1 204-253-9411 ext. 123",
      "postal_code": {},
      "state_province": "Manitoba"
    },
    "status": {}
  },
  "errors": [
    "Parameter value '100000000.00' is out of range."
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address_validation|object|false|none|The address validation|
|errors|[string]|false|read-only|**Deprecated.** An array of errors that occurred while creating shipment.|

<h2 id="tocS_create_shipments_request_body">create_shipments_request_body</h2>
<!-- backwards compatibility -->
<a id="schemacreate_shipments_request_body"></a>
<a id="schema_create_shipments_request_body"></a>
<a id="tocScreate_shipments_request_body"></a>
<a id="tocscreate_shipments_request_body"></a>

```json
{
  "shipments": [
    {
      "validate_address": "no_validation",
      "advanced_options": {
        "bill_to_account": null,
        "bill_to_country_code": null,
        "bill_to_party": null,
        "bill_to_postal_code": null,
        "collect_on_delivery": {
          "payment_amount": {
            "amount": 0,
            "currency": {}
          },
          "payment_type": {}
        },
        "contains_alcohol": false,
        "custom_field1": null,
        "custom_field2": null,
        "custom_field3": null,
        "delivered_duty_paid": false,
        "dry_ice": false,
        "dry_ice_weight": {
          "unit": {},
          "value": 0.1
        },
        "fedex_freight": {
          "booking_confirmation": "string",
          "shipper_load_and_count": "string"
        },
        "freight_class": 77.5,
        "non_machinable": false,
        "origin_type": null,
        "saturday_delivery": false,
        "shipper_release": null,
        "third_party_consignee": false,
        "use_ups_ground_freight_pricing": null
      },
      "carrier_id": {},
      "confirmation": "none",
      "created_at": {},
      "customs": null,
      "external_order_id": "string",
      "external_shipment_id": "string",
      "insurance_provider": "none",
      "items": [],
      "modified_at": {},
      "order_source_code": {},
      "origin_type": {},
      "packages": [
        {
          "content_description": "Hand knitted wool socks",
          "dimensions": {
            "height": 0,
            "length": 0,
            "unit": "inch",
            "width": 0
          },
          "external_package_id": "string",
          "form_download": {
            "href": {},
            "type": "string"
          },
          "insured_value": [
            {
              "amount": 0,
              "currency": "usd"
            }
          ],
          "label_download": {
            "href": {},
            "pdf": {},
            "png": {},
            "zpl": {}
          },
          "label_messages": {
            "reference1": null,
            "reference2": null,
            "reference3": null
          },
          "package_code": {},
          "package_id": {},
          "sequence": 0,
          "tracking_number": {},
          "weight": {
            "unit": {},
            "value": 0.1
          }
        }
      ],
      "return_to": {
        "address_line1": "1999 Bishop Grandin Blvd.",
        "address_line2": "Unit 408",
        "address_line3": "Building #7",
        "address_residential_indicator": "no",
        "city_locality": "Winnipeg",
        "company_name": "The Home Depot",
        "country_code": {},
        "email": "example@example.com",
        "name": "John Doe",
        "phone": "+1 204-253-9411 ext. 123",
        "postal_code": {},
        "state_province": "Manitoba",
        "instructions": "string"
      },
      "service_code": {},
      "ship_date": {},
      "ship_from": {
        "address_line1": "1999 Bishop Grandin Blvd.",
        "address_line2": "Unit 408",
        "address_line3": "Building #7",
        "address_residential_indicator": "no",
        "city_locality": "Winnipeg",
        "company_name": "The Home Depot",
        "country_code": {},
        "email": "example@example.com",
        "name": "John Doe",
        "phone": "+1 204-253-9411 ext. 123",
        "postal_code": {},
        "state_province": "Manitoba",
        "instructions": "string"
      },
      "ship_to": {
        "address_line1": "1999 Bishop Grandin Blvd.",
        "address_line2": "Unit 408",
        "address_line3": "Building #7",
        "address_residential_indicator": "no",
        "city_locality": "Winnipeg",
        "company_name": "The Home Depot",
        "country_code": {},
        "email": "example@example.com",
        "name": "John Doe",
        "phone": "+1 204-253-9411 ext. 123",
        "postal_code": {},
        "state_province": "Manitoba",
        "instructions": "string"
      },
      "shipment_id": {},
      "shipment_number": "string",
      "shipment_status": "pending",
      "tags": [],
      "tax_identifiers": [
        {
          "identifier_type": {},
          "issuing_authority": "string",
          "taxable_entity_type": {},
          "value": "string"
        }
      ],
      "total_weight": {
        "unit": {},
        "value": 0.1
      },
      "warehouse_id": null
    }
  ]
}
```

A create shipments request body

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|shipments|[object]|true|none|An array of shipments to be created.|

<h2 id="tocS_create_shipments_response_body">create_shipments_response_body</h2>
<!-- backwards compatibility -->
<a id="schemacreate_shipments_response_body"></a>
<a id="schema_create_shipments_response_body"></a>
<a id="tocScreate_shipments_response_body"></a>
<a id="tocscreate_shipments_response_body"></a>

```json
{
  "has_errors": false,
  "shipments": [
    {
      "advanced_options": {
        "bill_to_account": null,
        "bill_to_country_code": null,
        "bill_to_party": null,
        "bill_to_postal_code": null,
        "collect_on_delivery": {
          "payment_amount": {
            "amount": 0,
            "currency": {}
          },
          "payment_type": {}
        },
        "contains_alcohol": false,
        "custom_field1": null,
        "custom_field2": null,
        "custom_field3": null,
        "delivered_duty_paid": false,
        "dry_ice": false,
        "dry_ice_weight": {
          "unit": {},
          "value": 0.1
        },
        "fedex_freight": {
          "booking_confirmation": "string",
          "shipper_load_and_count": "string"
        },
        "freight_class": 77.5,
        "non_machinable": false,
        "origin_type": null,
        "saturday_delivery": false,
        "shipper_release": null,
        "third_party_consignee": false,
        "use_ups_ground_freight_pricing": null
      },
      "carrier_id": {},
      "confirmation": "none",
      "created_at": {},
      "customs": null,
      "external_order_id": "string",
      "external_shipment_id": "string",
      "insurance_provider": "none",
      "items": [],
      "modified_at": {},
      "order_source_code": {},
      "origin_type": {},
      "packages": [
        {
          "content_description": "Hand knitted wool socks",
          "dimensions": {
            "height": 0,
            "length": 0,
            "unit": "inch",
            "width": 0
          },
          "external_package_id": "string",
          "form_download": {
            "href": {},
            "type": "string"
          },
          "insured_value": [
            {
              "amount": 0,
              "currency": "usd"
            }
          ],
          "label_download": {
            "href": {},
            "pdf": {},
            "png": {},
            "zpl": {}
          },
          "label_messages": {
            "reference1": null,
            "reference2": null,
            "reference3": null
          },
          "package_code": {},
          "package_id": {},
          "sequence": 0,
          "tracking_number": {},
          "weight": {
            "unit": {},
            "value": 0.1
          }
        }
      ],
      "return_to": {
        "address_line1": "1999 Bishop Grandin Blvd.",
        "address_line2": "Unit 408",
        "address_line3": "Building #7",
        "address_residential_indicator": "no",
        "city_locality": "Winnipeg",
        "company_name": "The Home Depot",
        "country_code": {},
        "email": "example@example.com",
        "name": "John Doe",
        "phone": "+1 204-253-9411 ext. 123",
        "postal_code": {},
        "state_province": "Manitoba",
        "instructions": "string"
      },
      "service_code": {},
      "ship_date": {},
      "ship_from": {
        "address_line1": "1999 Bishop Grandin Blvd.",
        "address_line2": "Unit 408",
        "address_line3": "Building #7",
        "address_residential_indicator": "no",
        "city_locality": "Winnipeg",
        "company_name": "The Home Depot",
        "country_code": {},
        "email": "example@example.com",
        "name": "John Doe",
        "phone": "+1 204-253-9411 ext. 123",
        "postal_code": {},
        "state_province": "Manitoba",
        "instructions": "string"
      },
      "ship_to": {
        "address_line1": "1999 Bishop Grandin Blvd.",
        "address_line2": "Unit 408",
        "address_line3": "Building #7",
        "address_residential_indicator": "no",
        "city_locality": "Winnipeg",
        "company_name": "The Home Depot",
        "country_code": {},
        "email": "example@example.com",
        "name": "John Doe",
        "phone": "+1 204-253-9411 ext. 123",
        "postal_code": {},
        "state_province": "Manitoba",
        "instructions": "string"
      },
      "shipment_id": {},
      "shipment_number": "string",
      "shipment_status": "pending",
      "tags": [],
      "tax_identifiers": [
        {
          "identifier_type": {},
          "issuing_authority": "string",
          "taxable_entity_type": {},
          "value": "string"
        }
      ],
      "total_weight": {
        "unit": {},
        "value": 0.1
      },
      "warehouse_id": null,
      "address_validation": {
        "matched_address": {
          "address_line1": "1999 Bishop Grandin Blvd.",
          "address_line2": "Unit 408",
          "address_line3": "Building #7",
          "address_residential_indicator": "no",
          "city_locality": "Winnipeg",
          "company_name": "The Home Depot",
          "country_code": {},
          "email": "example@example.com",
          "name": "John Doe",
          "phone": "+1 204-253-9411 ext. 123",
          "postal_code": {},
          "state_province": "Manitoba"
        },
        "messages": [],
        "original_address": {
          "address_line1": "1999 Bishop Grandin Blvd.",
          "address_line2": "Unit 408",
          "address_line3": "Building #7",
          "address_residential_indicator": "no",
          "city_locality": "Winnipeg",
          "company_name": "The Home Depot",
          "country_code": {},
          "email": "example@example.com",
          "name": "John Doe",
          "phone": "+1 204-253-9411 ext. 123",
          "postal_code": {},
          "state_province": "Manitoba"
        },
        "status": {}
      },
      "errors": [
        "Parameter value '100000000.00' is out of range."
      ]
    }
  ]
}
```

A create shipments response body

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|has_errors|boolean|true|none|Indicates if errors occured while creating the shipments|
|shipments|[object]|true|none|An array of shipments that were created.|

<h2 id="tocS_create_tag_response_body">create_tag_response_body</h2>
<!-- backwards compatibility -->
<a id="schemacreate_tag_response_body"></a>
<a id="schema_create_tag_response_body"></a>
<a id="tocScreate_tag_response_body"></a>
<a id="tocscreate_tag_response_body"></a>

```json
{
  "name": "Fragile"
}
```

Response body for creating tags

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|The tag name.|

<h2 id="tocS_create_warehouse_request_body">create_warehouse_request_body</h2>
<!-- backwards compatibility -->
<a id="schemacreate_warehouse_request_body"></a>
<a id="schema_create_warehouse_request_body"></a>
<a id="tocScreate_warehouse_request_body"></a>
<a id="tocscreate_warehouse_request_body"></a>

```json
{
  "created_at": "2019-06-25T18:12:35.583Z",
  "is_default": false,
  "name": "Zero Cool HQ",
  "origin_address": {
    "address_line1": "1999 Bishop Grandin Blvd.",
    "address_line2": "Unit 408",
    "address_line3": "Building #7",
    "address_residential_indicator": "no",
    "city_locality": "Winnipeg",
    "company_name": "The Home Depot",
    "country_code": {},
    "email": "example@example.com",
    "name": "John Doe",
    "phone": "+1 204-253-9411 ext. 123",
    "postal_code": {},
    "state_province": "Manitoba"
  },
  "return_address": {
    "address_line1": "1999 Bishop Grandin Blvd.",
    "address_line2": "Unit 408",
    "address_line3": "Building #7",
    "address_residential_indicator": "no",
    "city_locality": "Winnipeg",
    "company_name": "The Home Depot",
    "country_code": {},
    "email": "example@example.com",
    "name": "John Doe",
    "phone": "+1 204-253-9411 ext. 123",
    "postal_code": {},
    "state_province": "Manitoba"
  },
  "warehouse_id": {}
}
```

A create warehouse request body

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created_at|string(date-time)|false|read-only|Timestamp that indicates when the warehouse was created|
|is_default|boolean \| null|false|none|Designates which single warehouse is the default on the account|
|name|string|true|none|Name of the warehouse|
|origin_address|object|true|none|The origin address of the warehouse|
|return_address|object|false|none|The return address associated with the warehouse|
|warehouse_id|object|false|read-only|A string that uniquely identifies the warehouse|

<h2 id="tocS_create_warehouse_response_body">create_warehouse_response_body</h2>
<!-- backwards compatibility -->
<a id="schemacreate_warehouse_response_body"></a>
<a id="schema_create_warehouse_response_body"></a>
<a id="tocScreate_warehouse_response_body"></a>
<a id="tocscreate_warehouse_response_body"></a>

```json
{
  "created_at": "2019-06-25T18:12:35.583Z",
  "is_default": false,
  "name": "Zero Cool HQ",
  "origin_address": {
    "address_line1": "1999 Bishop Grandin Blvd.",
    "address_line2": "Unit 408",
    "address_line3": "Building #7",
    "address_residential_indicator": "no",
    "city_locality": "Winnipeg",
    "company_name": "The Home Depot",
    "country_code": {},
    "email": "example@example.com",
    "name": "John Doe",
    "phone": "+1 204-253-9411 ext. 123",
    "postal_code": {},
    "state_province": "Manitoba"
  },
  "return_address": {
    "address_line1": "1999 Bishop Grandin Blvd.",
    "address_line2": "Unit 408",
    "address_line3": "Building #7",
    "address_residential_indicator": "no",
    "city_locality": "Winnipeg",
    "company_name": "The Home Depot",
    "country_code": {},
    "email": "example@example.com",
    "name": "John Doe",
    "phone": "+1 204-253-9411 ext. 123",
    "postal_code": {},
    "state_province": "Manitoba"
  },
  "warehouse_id": {}
}
```

A create warehouse response body

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created_at|string(date-time)|true|read-only|Timestamp that indicates when the warehouse was created|
|is_default|boolean \| null|false|none|Designates which single warehouse is the default on the account|
|name|string|true|none|Name of the warehouse|
|origin_address|object|true|none|The origin address of the warehouse|
|return_address|object|true|none|The return address associated with the warehouse|
|warehouse_id|object|true|read-only|A string that uniquely identifies the warehouse|

<h2 id="tocS_create_webhook_request_body">create_webhook_request_body</h2>
<!-- backwards compatibility -->
<a id="schemacreate_webhook_request_body"></a>
<a id="schema_create_webhook_request_body"></a>
<a id="tocScreate_webhook_request_body"></a>
<a id="tocscreate_webhook_request_body"></a>

```json
{
  "event": {},
  "url": "https://[YOUR ENDPOINT ID].x.requestbin.com"
}
```

A create webhook request body

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|event|object|true|none|none|
|url|object|true|none|The url that the webhook sends the request to|

<h2 id="tocS_create_webhook_response_body">create_webhook_response_body</h2>
<!-- backwards compatibility -->
<a id="schemacreate_webhook_response_body"></a>
<a id="schema_create_webhook_response_body"></a>
<a id="tocScreate_webhook_response_body"></a>
<a id="tocscreate_webhook_response_body"></a>

```json
{
  "event": {},
  "url": "https://[YOUR ENDPOINT ID].x.requestbin.com",
  "webhook_id": {}
}
```

A webhook response body

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|event|object|true|none|none|
|url|object|true|none|The url that the webhook sends the request to|
|webhook_id|object|true|read-only|A string that uniquely identifies the webhook|

<h2 id="tocS_currency">currency</h2>
<!-- backwards compatibility -->
<a id="schemacurrency"></a>
<a id="schema_currency"></a>
<a id="tocScurrency"></a>
<a id="tocscurrency"></a>

```json
"string"
```

The currencies that are supported by ShipEngine are the ones that specified by ISO 4217: https://www.iso.org/iso-4217-currency-codes.html

<h2 id="tocS_customs_item">customs_item</h2>
<!-- backwards compatibility -->
<a id="schemacustoms_item"></a>
<a id="schema_customs_item"></a>
<a id="tocScustoms_item"></a>
<a id="tocscustoms_item"></a>

```json
{
  "country_of_origin": null,
  "customs_item_id": {},
  "description": null,
  "harmonized_tariff_code": 3926.1,
  "quantity": 0,
  "sku": "string",
  "sku_description": "string",
  "unit_of_measure": "string",
  "value": {
    "amount": 0,
    "currency": {}
  },
  "weight": {
    "unit": {},
    "value": 0.1
  }
}
```

The customs declaration for a single item in the shipment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|country_of_origin|object \| null|false|none|The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1) where this item originated<br>|
|customs_item_id|object|true|read-only|A string that uniquely identifies the customs item|
|description|string \| null|false|none|A description of the item|
|harmonized_tariff_code|string \| null|false|none|The [Harmonized Tariff Code](https://en.wikipedia.org/wiki/Harmonized_System) of this item.|
|quantity|integer(int32)|false|none|The quantity of this item in the shipment.|
|sku|string \| null|false|none|The SKU (Stock Keeping Unit) of the customs item|
|sku_description|string \| null|false|none|Description of the Custom Item's SKU|
|unit_of_measure|string \| null|false|none|none|
|value|object|false|none|The declared customs value of each item|
|weight|object|false|none|The item weight|

<h2 id="tocS_date">date</h2>
<!-- backwards compatibility -->
<a id="schemadate"></a>
<a id="schema_date"></a>
<a id="tocSdate"></a>
<a id="tocsdate"></a>

```json
"2018-09-23T00:00:00.000Z"
```

An [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) string that represents a date, but not a specific time.  The value _may_ contain a time component, but it will be set to `00:00:00` UTC by ShipEngine.

<h2 id="tocS_date_time">date_time</h2>
<!-- backwards compatibility -->
<a id="schemadate_time"></a>
<a id="schema_date_time"></a>
<a id="tocSdate_time"></a>
<a id="tocsdate_time"></a>

```json
"2018-09-23T15:00:00.000Z"
```

An [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) string that represents a date and time.

<h2 id="tocS_delete_pickup_by_id_response_body">delete_pickup_by_id_response_body</h2>
<!-- backwards compatibility -->
<a id="schemadelete_pickup_by_id_response_body"></a>
<a id="schema_delete_pickup_by_id_response_body"></a>
<a id="tocSdelete_pickup_by_id_response_body"></a>
<a id="tocsdelete_pickup_by_id_response_body"></a>

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {},
  "pickup_id": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[object]|true|read-only|The errors associated with the failed API call|
|request_id|object|true|none|A UUID that uniquely identifies the request id.<br>This can be given to the support team to help debug non-trivial issues that may occur<br>|
|pickup_id|object|true|none|none|

<h2 id="tocS_delete_scheduled_pickup_response_body">delete_scheduled_pickup_response_body</h2>
<!-- backwards compatibility -->
<a id="schemadelete_scheduled_pickup_response_body"></a>
<a id="schema_delete_scheduled_pickup_response_body"></a>
<a id="tocSdelete_scheduled_pickup_response_body"></a>
<a id="tocsdelete_scheduled_pickup_response_body"></a>

```json
{
  "pickup_id": {}
}
```

A delete scheduled pickup response body

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pickup_id|object|true|none|none|

<h2 id="tocS_delivery_confirmation">delivery_confirmation</h2>
<!-- backwards compatibility -->
<a id="schemadelivery_confirmation"></a>
<a id="schema_delivery_confirmation"></a>
<a id="tocSdelivery_confirmation"></a>
<a id="tocsdelivery_confirmation"></a>

```json
"none"
```

The possible delivery confirmation values

<h2 id="tocS_deprecated_manifest">deprecated_manifest</h2>
<!-- backwards compatibility -->
<a id="schemadeprecated_manifest"></a>
<a id="schema_deprecated_manifest"></a>
<a id="tocSdeprecated_manifest"></a>
<a id="tocsdeprecated_manifest"></a>

```json
{
  "carrier_id": {},
  "created_at": "2019-07-12T13:37:39.050Z",
  "form_id": {},
  "label_ids": [
    {}
  ],
  "manifest_download": {
    "href": {}
  },
  "manifest_id": {},
  "ship_date": "2019-07-12T13:37:39.050Z",
  "shipments": 100,
  "submission_id": "9475711899564878915476",
  "warehouse_id": {}
}
```

Deprecated manifest resource

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|carrier_id|object|false|none|**Deprecated.** A string that uniquely identifies the carrier|
|created_at|string(date-time)|false|none|**Deprecated.** The date-time that the manifest was created|
|form_id|object|false|none|**Deprecated.** A string that uniquely identifies the form|
|label_ids|[object]|false|read-only|**Deprecated.** An array of the label ids used in this manifest.|
|manifest_download|object|false|none|**Deprecated.**|
|manifest_id|object|false|none|**Deprecated.** A string that uniquely identifies the manifest|
|ship_date|string(date-time)|false|none|**Deprecated.** The date-time that the manifests shipments will be picked up|
|shipments|integer(int32)|false|read-only|**Deprecated.** The number of shipments that are included in this manifest|
|submission_id|string|false|none|**Deprecated.** A string that uniquely identifies the submission|
|warehouse_id|object|false|none|**Deprecated.** A string that uniquely identifies the warehouse|

<h2 id="tocS_dhl_express_account_settings">dhl_express_account_settings</h2>
<!-- backwards compatibility -->
<a id="schemadhl_express_account_settings"></a>
<a id="schema_dhl_express_account_settings"></a>
<a id="tocSdhl_express_account_settings"></a>
<a id="tocsdhl_express_account_settings"></a>

```json
{
  "is_primary_account": true,
  "nickname": "string",
  "should_hide_account_number_on_archive_doc": true
}
```

A DHL Express account settings

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|is_primary_account|boolean|false|none|Indicates if this is primary account|
|nickname|string|false|none|Account nickname|
|should_hide_account_number_on_archive_doc|boolean|false|none|Indicates if the account number should be hidden on the archive documentation|

<h2 id="tocS_dhl_express_settings_response_body">dhl_express_settings_response_body</h2>
<!-- backwards compatibility -->
<a id="schemadhl_express_settings_response_body"></a>
<a id="schema_dhl_express_settings_response_body"></a>
<a id="tocSdhl_express_settings_response_body"></a>
<a id="tocsdhl_express_settings_response_body"></a>

```json
{
  "is_primary_account": true,
  "nickname": "string",
  "should_hide_account_number_on_archive_doc": true
}
```

A DHL Express response body

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|is_primary_account|boolean|false|none|Indicates if this is primary account|
|nickname|string|false|none|Account nickname|
|should_hide_account_number_on_archive_doc|boolean|false|none|Indicates if the account number should be hidden on the archive documentation|

<h2 id="tocS_dimension_unit">dimension_unit</h2>
<!-- backwards compatibility -->
<a id="schemadimension_unit"></a>
<a id="schema_dimension_unit"></a>
<a id="tocSdimension_unit"></a>
<a id="tocsdimension_unit"></a>

```json
"inch"
```

The dimension units that are supported by ShipEngine.

<h2 id="tocS_dimensions">dimensions</h2>
<!-- backwards compatibility -->
<a id="schemadimensions"></a>
<a id="schema_dimensions"></a>
<a id="tocSdimensions"></a>
<a id="tocsdimensions"></a>

```json
{
  "height": 0,
  "length": 0,
  "unit": "inch",
  "width": 0
}
```

The dimensions of a package

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|height|number(double)|true|none|The length of the package, in the specified unit|
|length|number(double)|true|none|The length of the package, in the specified unit|
|unit|object|true|none|none|
|width|number(double)|true|none|The width of the package, in the specified unit|

<h2 id="tocS_disconnect_insurer_response_body">disconnect_insurer_response_body</h2>
<!-- backwards compatibility -->
<a id="schemadisconnect_insurer_response_body"></a>
<a id="schema_disconnect_insurer_response_body"></a>
<a id="tocSdisconnect_insurer_response_body"></a>
<a id="tocsdisconnect_insurer_response_body"></a>

```json
{}
```

<h2 id="tocS_display_scheme">display_scheme</h2>
<!-- backwards compatibility -->
<a id="schemadisplay_scheme"></a>
<a id="schema_display_scheme"></a>
<a id="tocSdisplay_scheme"></a>
<a id="tocsdisplay_scheme"></a>

```json
"label"
```

The display format that the label should be shown in.

<h2 id="tocS_download_file_pdf_response_body">download_file_pdf_response_body</h2>
<!-- backwards compatibility -->
<a id="schemadownload_file_pdf_response_body"></a>
<a id="schema_download_file_pdf_response_body"></a>
<a id="tocSdownload_file_pdf_response_body"></a>
<a id="tocsdownload_file_pdf_response_body"></a>

```json
"string"
```

<h2 id="tocS_download_file_png_response_body">download_file_png_response_body</h2>
<!-- backwards compatibility -->
<a id="schemadownload_file_png_response_body"></a>
<a id="schema_download_file_png_response_body"></a>
<a id="tocSdownload_file_png_response_body"></a>
<a id="tocsdownload_file_png_response_body"></a>

```json
"string"
```

<h2 id="tocS_download_file_zpl_response_body">download_file_zpl_response_body</h2>
<!-- backwards compatibility -->
<a id="schemadownload_file_zpl_response_body"></a>
<a id="schema_download_file_zpl_response_body"></a>
<a id="tocSdownload_file_zpl_response_body"></a>
<a id="tocsdownload_file_zpl_response_body"></a>

```json
"string"
```

<h2 id="tocS_email">email</h2>
<!-- backwards compatibility -->
<a id="schemaemail"></a>
<a id="schema_email"></a>
<a id="tocSemail"></a>
<a id="tocsemail"></a>

```json
"john.doe@example.com"
```

An email address.

<h2 id="tocS_empty_response_body">empty_response_body</h2>
<!-- backwards compatibility -->
<a id="schemaempty_response_body"></a>
<a id="schema_empty_response_body"></a>
<a id="tocSempty_response_body"></a>
<a id="tocsempty_response_body"></a>

```json
""
```

<h2 id="tocS_error">error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
{
  "error_code": {},
  "error_source": {},
  "error_type": {},
  "message": "Body of request cannot be null."
}
```

The error structure that gets returned with almost all failed API calls

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error_code|object|true|none|none|
|error_source|object|true|none|none|
|error_type|object|true|none|none|
|message|string|true|read-only|An error message associated with the failed API call|

<h2 id="tocS_error_code">error_code</h2>
<!-- backwards compatibility -->
<a id="schemaerror_code"></a>
<a id="schema_error_code"></a>
<a id="tocSerror_code"></a>
<a id="tocserror_code"></a>

```json
"auto_fund_not_supported"
```

The error code specified for the failed API Call

<h2 id="tocS_error_response_body">error_response_body</h2>
<!-- backwards compatibility -->
<a id="schemaerror_response_body"></a>
<a id="schema_error_response_body"></a>
<a id="tocSerror_response_body"></a>
<a id="tocserror_response_body"></a>

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

An error response body

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[object]|true|read-only|The errors associated with the failed API call|
|request_id|object|true|none|A UUID that uniquely identifies the request id.<br>This can be given to the support team to help debug non-trivial issues that may occur<br>|

<h2 id="tocS_error_source">error_source</h2>
<!-- backwards compatibility -->
<a id="schemaerror_source"></a>
<a id="schema_error_source"></a>
<a id="tocSerror_source"></a>
<a id="tocserror_source"></a>

```json
"carrier"
```

The source of the error, as indicated by the name this informs us if the API call failed because of the
carrier, the order source, or the ShipEngine API itself.

<h2 id="tocS_error_type">error_type</h2>
<!-- backwards compatibility -->
<a id="schemaerror_type"></a>
<a id="schema_error_type"></a>
<a id="tocSerror_type"></a>
<a id="tocserror_type"></a>

```json
"account_status"
```

The type of error

<h2 id="tocS_error_with_label_id_response_body">error_with_label_id_response_body</h2>
<!-- backwards compatibility -->
<a id="schemaerror_with_label_id_response_body"></a>
<a id="schema_error_with_label_id_response_body"></a>
<a id="tocSerror_with_label_id_response_body"></a>
<a id="tocserror_with_label_id_response_body"></a>

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

An error response body

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[object]|true|read-only|The errors associated with the failed API call|
|request_id|object|true|none|A UUID that uniquely identifies the request id.<br>This can be given to the support team to help debug non-trivial issues that may occur<br>|

<h2 id="tocS_estimate_rates_request_body">estimate_rates_request_body</h2>
<!-- backwards compatibility -->
<a id="schemaestimate_rates_request_body"></a>
<a id="schema_estimate_rates_request_body"></a>
<a id="tocSestimate_rates_request_body"></a>
<a id="tocsestimate_rates_request_body"></a>

```json
{
  "address_residential_indicator": {},
  "confirmation": {},
  "dimensions": {
    "height": 0,
    "length": 0,
    "unit": "inch",
    "width": 0
  },
  "from_city_locality": "Austin",
  "from_country_code": {},
  "from_postal_code": {},
  "from_state_province": "Austin",
  "ship_date": {},
  "to_city_locality": "Austin",
  "to_country_code": {},
  "to_postal_code": {},
  "to_state_province": "Houston",
  "weight": {
    "unit": {},
    "value": 0.1
  },
  "carrier_id": {}
}
```

A rate estimate request body

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address_residential_indicator|object|false|none|none|
|confirmation|object|false|none|none|
|dimensions|object|false|none|The dimensions of the package|
|from_city_locality|string|true|none|from postal code|
|from_country_code|object|true|none|none|
|from_postal_code|object|true|none|none|
|from_state_province|string|true|none|From state province|
|ship_date|string|true|none|ship date|
|to_city_locality|string|true|none|The city locality the package is being shipped to|
|to_country_code|object|true|none|none|
|to_postal_code|object|true|none|none|
|to_state_province|string|true|none|To state province|
|weight|object|true|none|The weight of the package|
|*oneOf*|[rate_estimate_by_carrier_id](#schemarate_estimate_by_carrier_id)|false|none|none|
|*oneOf*|[rate_estimate_by_carrier_ids](#schemarate_estimate_by_carrier_ids)|false|none|none|

<h2 id="tocS_estimate_rates_response_body">estimate_rates_response_body</h2>
<!-- backwards compatibility -->
<a id="schemaestimate_rates_response_body"></a>
<a id="schema_estimate_rates_response_body"></a>
<a id="tocSestimate_rates_response_body"></a>
<a id="tocsestimate_rates_response_body"></a>

```json
[
  {
    "carrier_code": "string",
    "carrier_delivery_days": "string",
    "carrier_friendly_name": "string",
    "carrier_id": {},
    "carrier_nickname": "string",
    "confirmation_amount": {
      "amount": 0,
      "currency": {}
    },
    "delivery_days": 5,
    "error_messages": [
      "string"
    ],
    "estimated_delivery_date": {},
    "guaranteed_service": true,
    "insurance_amount": {
      "amount": 0,
      "currency": {}
    },
    "negotiated_rate": true,
    "other_amount": {
      "amount": 0,
      "currency": {}
    },
    "package_type": "package",
    "rate_type": {},
    "service_code": "string",
    "service_type": "string",
    "ship_date": "1970-01-01T00:00:00Z",
    "shipping_amount": {
      "amount": 0,
      "currency": {}
    },
    "tax_amount": {
      "amount": 0,
      "currency": {}
    },
    "trackable": true,
    "validation_status": {},
    "warning_messages": [
      "string"
    ],
    "zone": 6
  }
]
```

A rate estimate response body

<h2 id="tocS_fedex_account_settings">fedex_account_settings</h2>
<!-- backwards compatibility -->
<a id="schemafedex_account_settings"></a>
<a id="schema_fedex_account_settings"></a>
<a id="tocSfedex_account_settings"></a>
<a id="tocsfedex_account_settings"></a>

```json
{
  "is_primary_account": true,
  "letterhead_image": "string",
  "nickname": "string",
  "pickup_type": {},
  "signature_image": "string",
  "smart_post_endorsement": {},
  "smart_post_hub": {}
}
```

A Fedex account settings request body

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|is_primary_account|boolean|false|none|none|
|letterhead_image|string|false|none|none|
|nickname|string|false|none|Account nickname|
|pickup_type|object|false|none|none|
|signature_image|string|false|none|none|
|smart_post_endorsement|object|false|none|none|
|smart_post_hub|object|false|none|none|

<h2 id="tocS_fedex_account_settings_request_body">fedex_account_settings_request_body</h2>
<!-- backwards compatibility -->
<a id="schemafedex_account_settings_request_body"></a>
<a id="schema_fedex_account_settings_request_body"></a>
<a id="tocSfedex_account_settings_request_body"></a>
<a id="tocsfedex_account_settings_request_body"></a>

```json
{
  "is_primary_account": true,
  "letterhead_image": "string",
  "nickname": "string",
  "pickup_type": {},
  "signature_image": "string",
  "smart_post_endorsement": {},
  "smart_post_hub": {}
}
```

A Fedex account settings request body

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|is_primary_account|boolean|false|none|none|
|letterhead_image|string|false|none|none|
|nickname|string|false|none|Account nickname|
|pickup_type|object|false|none|none|
|signature_image|string|false|none|none|
|smart_post_endorsement|object|false|none|none|
|smart_post_hub|object|false|none|none|

<h2 id="tocS_fedex_pickup_type">fedex_pickup_type</h2>
<!-- backwards compatibility -->
<a id="schemafedex_pickup_type"></a>
<a id="schema_fedex_pickup_type"></a>
<a id="tocSfedex_pickup_type"></a>
<a id="tocsfedex_pickup_type"></a>

```json
"none"
```

Determines how FedEx will pickup your packages

|Pickup Type               |Description
|--------------------------|-----------------------------------------
|`none`                    | Not specified
|`regular_pickup`          | You already have a daily pickup scheduled with FedEx
|`request_courier`         | You will call FedEx to request a courier
|`drop_box`                | You will drop-off packages in a FedEx drop box
|`business_service_center` | You will drop-off packages at an authorized FedEx business service center
|`station`                 | You will drop-off the package at a FedEx Station

<h2 id="tocS_fedex_settings_response_body">fedex_settings_response_body</h2>
<!-- backwards compatibility -->
<a id="schemafedex_settings_response_body"></a>
<a id="schema_fedex_settings_response_body"></a>
<a id="tocSfedex_settings_response_body"></a>
<a id="tocsfedex_settings_response_body"></a>

```json
{
  "is_primary_account": true,
  "letterhead_image": "string",
  "nickname": "string",
  "pickup_type": {},
  "signature_image": "string",
  "smart_post_endorsement": {},
  "smart_post_hub": {}
}
```

A Fedex settings response body

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|is_primary_account|boolean|false|none|none|
|letterhead_image|string|false|none|none|
|nickname|string|false|none|Account nickname|
|pickup_type|object|false|none|none|
|signature_image|string|false|none|none|
|smart_post_endorsement|object|false|none|none|
|smart_post_hub|object|false|none|none|

<h2 id="tocS_get_batch_by_external_id_response_body">get_batch_by_external_id_response_body</h2>
<!-- backwards compatibility -->
<a id="schemaget_batch_by_external_id_response_body"></a>
<a id="schema_get_batch_by_external_id_response_body"></a>
<a id="tocSget_batch_by_external_id_response_body"></a>
<a id="tocsget_batch_by_external_id_response_body"></a>

```json
{
  "batch_errors_url": {
    "href": {},
    "type": "string"
  },
  "batch_id": {},
  "batch_labels_url": {
    "href": {},
    "type": "string"
  },
  "batch_notes": "Batch for morning shipment",
  "batch_number": "string",
  "batch_shipments_url": {
    "href": {},
    "type": "string"
  },
  "completed": 1,
  "count": 2,
  "created_at": {},
  "errors": 2,
  "external_batch_id": "string",
  "form_download": {
    "href": {},
    "type": "string"
  },
  "forms": 3,
  "label_download": {
    "href": {},
    "pdf": {},
    "png": {},
    "zpl": {}
  },
  "label_format": "pdf",
  "label_layout": "4x6",
  "processed_at": {},
  "status": {},
  "warnings": 1
}
```

A get batch by external id response body

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|batch_errors_url|object|true|read-only|Link to batch errors endpoint|
|batch_id|object|true|read-only|A string that uniquely identifies the batch|
|batch_labels_url|object|true|none|Link to batch labels query|
|batch_notes|string \| null|true|read-only|Custom notes you can add for each created batch|
|batch_number|string|true|read-only|The batch number.|
|batch_shipments_url|object|true|none|The batch shipments endpoint|
|completed|integer(int32)|true|read-only|The number of labels generated in the batch|
|count|integer(int32)|true|read-only|The total of errors, warnings, and completed properties|
|created_at|object|true|read-only|The date and time the batch was created in ShipEngine|
|errors|integer(int32)|true|read-only|The number of errors that occurred while generating the batch|
|external_batch_id|string \| null|true|read-only|A string that uniquely identifies the external batch|
|form_download|object|true|read-only|The form download for any customs that are needed|
|forms|integer(int32)|true|read-only|The number of forms for customs that are available for download|
|label_download|object|true|read-only|The label download for the batch|
|label_format|object|true|read-only|none|
|label_layout|object|true|read-only|label layout|
|processed_at|object \| null|true|read-only|The date and time the batch was processed in ShipEngine|
|status|object|true|read-only|none|
|warnings|integer(int32)|true|read-only|The number of warnings that occurred while generating the batch|

<h2 id="tocS_get_batch_by_id_response_body">get_batch_by_id_response_body</h2>
<!-- backwards compatibility -->
<a id="schemaget_batch_by_id_response_body"></a>
<a id="schema_get_batch_by_id_response_body"></a>
<a id="tocSget_batch_by_id_response_body"></a>
<a id="tocsget_batch_by_id_response_body"></a>

```json
{
  "batch_errors_url": {
    "href": {},
    "type": "string"
  },
  "batch_id": {},
  "batch_labels_url": {
    "href": {},
    "type": "string"
  },
  "batch_notes": "Batch for morning shipment",
  "batch_number": "string",
  "batch_shipments_url": {
    "href": {},
    "type": "string"
  },
  "completed": 1,
  "count": 2,
  "created_at": {},
  "errors": 2,
  "external_batch_id": "string",
  "form_download": {
    "href": {},
    "type": "string"
  },
  "forms": 3,
  "label_download": {
    "href": {},
    "pdf": {},
    "png": {},
    "zpl": {}
  },
  "label_format": "pdf",
  "label_layout": "4x6",
  "processed_at": {},
  "status": {},
  "warnings": 1
}
```

A get batch by id response body

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|batch_errors_url|object|true|read-only|Link to batch errors endpoint|
|batch_id|object|true|read-only|A string that uniquely identifies the batch|
|batch_labels_url|object|true|none|Link to batch labels query|
|batch_notes|string \| null|true|read-only|Custom notes you can add for each created batch|
|batch_number|string|true|read-only|The batch number.|
|batch_shipments_url|object|true|none|The batch shipments endpoint|
|completed|integer(int32)|true|read-only|The number of labels generated in the batch|
|count|integer(int32)|true|read-only|The total of errors, warnings, and completed properties|
|created_at|object|true|read-only|The date and time the batch was created in ShipEngine|
|errors|integer(int32)|true|read-only|The number of errors that occurred while generating the batch|
|external_batch_id|string \| null|true|read-only|A string that uniquely identifies the external batch|
|form_download|object|true|read-only|The form download for any customs that are needed|
|forms|integer(int32)|true|read-only|The number of forms for customs that are available for download|
|label_download|object|true|read-only|The label download for the batch|
|label_format|object|true|read-only|none|
|label_layout|object|true|read-only|label layout|
|processed_at|object \| null|true|read-only|The date and time the batch was processed in ShipEngine|
|status|object|true|read-only|none|
|warnings|integer(int32)|true|read-only|The number of warnings that occurred while generating the batch|

<h2 id="tocS_get_carrier_by_id_response_body">get_carrier_by_id_response_body</h2>
<!-- backwards compatibility -->
<a id="schemaget_carrier_by_id_response_body"></a>
<a id="schema_get_carrier_by_id_response_body"></a>
<a id="tocSget_carrier_by_id_response_body"></a>
<a id="tocsget_carrier_by_id_response_body"></a>

```json
{
  "account_number": "account_570827",
  "balance": 3799.52,
  "carrier_code": {},
  "carrier_id": {},
  "friendly_name": "Stamps.com",
  "has_multi_package_supporting_services": true,
  "nickname": "ShipEngine Account - Stamps.com",
  "options": [
    {
      "default_value": false,
      "description": "string",
      "name": "contains_alcohol"
    }
  ],
  "packages": [
    {
      "description": "Packaging for laptops",
      "dimensions": {
        "height": 0,
        "length": 0,
        "unit": "inch",
        "width": 0
      },
      "name": "laptop_box",
      "package_code": {},
      "package_id": {}
    }
  ],
  "primary": true,
  "requires_funded_amount": true,
  "services": [
    {
      "carrier_code": {},
      "carrier_id": {},
      "domestic": true,
      "international": true,
      "is_multi_package_supported": true,
      "name": "USPS First Class Mail",
      "service_code": "usps_media_mail"
    }
  ],
  "supports_label_messages": true
}
```

A get carrier by id response body

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_number|string|false|read-only|The account number that the carrier is connected to.|
|balance|number(double)|false|read-only|Current available balance|
|carrier_code|object|false|none|A string that uniquely identifies the carrier.|
|carrier_id|object|false|read-only|A string that uniquely identifies the carrier.|
|friendly_name|string|false|read-only|Screen readable name|
|has_multi_package_supporting_services|boolean|false|read-only|Carrier supports multiple packages per shipment|
|nickname|string|false|read-only|Nickname given to the account when initially setting up the carrier.|
|options|[object]|false|read-only|A list of options that are available to that carrier|
|packages|[object]|false|read-only|A list of package types that are supported by the carrier|
|primary|boolean|false|read-only|Is this the primary carrier that is used by default when no carrier is specified in label/shipment creation|
|requires_funded_amount|boolean|false|read-only|Indicates whether the carrier requires funding to use its services|
|services|[object]|false|read-only|A list of services that are offered by the carrier|
|supports_label_messages|boolean|false|read-only|The carrier supports adding custom label messages to an order.|

<h2 id="tocS_get_carrier_options_response_body">get_carrier_options_response_body</h2>
<!-- backwards compatibility -->
<a id="schemaget_carrier_options_response_body"></a>
<a id="schema_get_carrier_options_response_body"></a>
<a id="tocSget_carrier_options_response_body"></a>
<a id="tocsget_carrier_options_response_body"></a>

```json
{
  "options": [
    {
      "default_value": false,
      "description": "string",
      "name": "contains_alcohol"
    }
  ]
}
```

A carrier list options response body

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|options|[object]|false|read-only|AN array of carrier options|

<h2 id="tocS_get_carrier_settings_response_body">get_carrier_settings_response_body</h2>
<!-- backwards compatibility -->
<a id="schemaget_carrier_settings_response_body"></a>
<a id="schema_get_carrier_settings_response_body"></a>
<a id="tocSget_carrier_settings_response_body"></a>
<a id="tocsget_carrier_settings_response_body"></a>

```json
{
  "is_primary_account": true,
  "nickname": "string",
  "should_hide_account_number_on_archive_doc": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[dhl_express_settings_response_body](#schemadhl_express_settings_response_body)|false|none|A DHL Express response body|
|*oneOf*|[fedex_settings_response_body](#schemafedex_settings_response_body)|false|none|A Fedex settings response body|
|*oneOf*|[ups_settings_response_body](#schemaups_settings_response_body)|false|none|A UPS settings response body|

<h2 id="tocS_get_carriers_response_body">get_carriers_response_body</h2>
<!-- backwards compatibility -->
<a id="schemaget_carriers_response_body"></a>
<a id="schema_get_carriers_response_body"></a>
<a id="tocSget_carriers_response_body"></a>
<a id="tocsget_carriers_response_body"></a>

```json
{
  "carriers": [
    {
      "account_number": "account_570827",
      "balance": 3799.52,
      "carrier_code": {},
      "carrier_id": {},
      "friendly_name": "Stamps.com",
      "has_multi_package_supporting_services": true,
      "nickname": "ShipEngine Account - Stamps.com",
      "options": [
        {
          "default_value": false,
          "description": "string",
          "name": "contains_alcohol"
        }
      ],
      "packages": [
        {
          "description": "Packaging for laptops",
          "dimensions": {
            "height": 0,
            "length": 0,
            "unit": "inch",
            "width": 0
          },
          "name": "laptop_box",
          "package_code": {},
          "package_id": {}
        }
      ],
      "primary": true,
      "requires_funded_amount": true,
      "services": [
        {
          "carrier_code": {},
          "carrier_id": {},
          "domestic": true,
          "international": true,
          "is_multi_package_supported": true,
          "name": "USPS First Class Mail",
          "service_code": "usps_media_mail"
        }
      ],
      "supports_label_messages": true
    }
  ],
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|carriers|[object]|true|read-only|The carrier response body|
|errors|[object]|true|read-only|The errors associated with the failed API call|
|request_id|object|true|none|A UUID that uniquely identifies the request id.<br>This can be given to the support team to help debug non-trivial issues that may occur<br>|

<h2 id="tocS_get_insurance_balance_response_body">get_insurance_balance_response_body</h2>
<!-- backwards compatibility -->
<a id="schemaget_insurance_balance_response_body"></a>
<a id="schema_get_insurance_balance_response_body"></a>
<a id="tocSget_insurance_balance_response_body"></a>
<a id="tocsget_insurance_balance_response_body"></a>

```json
{
  "amount": 0,
  "currency": {}
}
```

A get insurance balance response body

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|number(double)|true|none|The monetary amount, in the specified currency.|
|currency|object|true|none|none|

<h2 id="tocS_get_label_by_external_shipment_id_response_body">get_label_by_external_shipment_id_response_body</h2>
<!-- backwards compatibility -->
<a id="schemaget_label_by_external_shipment_id_response_body"></a>
<a id="schema_get_label_by_external_shipment_id_response_body"></a>
<a id="tocSget_label_by_external_shipment_id_response_body"></a>
<a id="tocsget_label_by_external_shipment_id_response_body"></a>

```json
{
  "alternative_identifiers": [
    {
      "type": "last_mile_tracking_number",
      "value": "12345678912345678912"
    }
  ],
  "batch_id": {},
  "carrier_code": {},
  "carrier_id": {},
  "charge_event": {},
  "created_at": {},
  "display_scheme": "label",
  "form_download": {
    "href": {},
    "type": "string"
  },
  "insurance_claim": {
    "href": {},
    "type": "string"
  },
  "insurance_cost": {
    "amount": 0,
    "currency": {}
  },
  "is_international": true,
  "is_return_label": true,
  "label_download": {
    "href": {},
    "pdf": {},
    "png": {},
    "zpl": {}
  },
  "label_download_type": "url",
  "label_format": "pdf",
  "label_id": {},
  "label_image_id": {},
  "label_layout": "4x6",
  "outbound_label_id": {},
  "package_code": {},
  "packages": [
    {
      "content_description": "Hand knitted wool socks",
      "dimensions": {
        "height": 0,
        "length": 0,
        "unit": "inch",
        "width": 0
      },
      "external_package_id": "string",
      "form_download": {
        "href": {},
        "type": "string"
      },
      "insured_value": [
        {
          "amount": 0,
          "currency": "usd"
        }
      ],
      "label_download": {
        "href": {},
        "pdf": {},
        "png": {},
        "zpl": {}
      },
      "label_messages": {
        "reference1": null,
        "reference2": null,
        "reference3": null
      },
      "package_code": {},
      "package_id": {},
      "sequence": 0,
      "tracking_number": {},
      "weight": {
        "unit": {},
        "value": 0.1
      }
    }
  ],
  "rma_number": "string",
  "service_code": {},
  "ship_date": {},
  "shipment": {
    "advanced_options": {
      "bill_to_account": null,
      "bill_to_country_code": null,
      "bill_to_party": null,
      "bill_to_postal_code": null,
      "collect_on_delivery": {
        "payment_amount": {
          "amount": 0,
          "currency": {}
        },
        "payment_type": {}
      },
      "contains_alcohol": false,
      "custom_field1": null,
      "custom_field2": null,
      "custom_field3": null,
      "delivered_duty_paid": false,
      "dry_ice": false,
      "dry_ice_weight": {
        "unit": {},
        "value": 0.1
      },
      "fedex_freight": {
        "booking_confirmation": "string",
        "shipper_load_and_count": "string"
      },
      "freight_class": 77.5,
      "non_machinable": false,
      "origin_type": null,
      "saturday_delivery": false,
      "shipper_release": null,
      "third_party_consignee": false,
      "use_ups_ground_freight_pricing": null
    },
    "carrier_id": {},
    "confirmation": "none",
    "created_at": {},
    "customs": null,
    "external_order_id": "string",
    "external_shipment_id": "string",
    "insurance_provider": "none",
    "items": [],
    "modified_at": {},
    "order_source_code": {},
    "origin_type": {},
    "packages": [
      {
        "content_description": "Hand knitted wool socks",
        "dimensions": {
          "height": 0,
          "length": 0,
          "unit": "inch",
          "width": 0
        },
        "external_package_id": "string",
        "form_download": {
          "href": {},
          "type": "string"
        },
        "insured_value": [
          {
            "amount": 0,
            "currency": "usd"
          }
        ],
        "label_download": {
          "href": {},
          "pdf": {},
          "png": {},
          "zpl": {}
        },
        "label_messages": {
          "reference1": null,
          "reference2": null,
          "reference3": null
        },
        "package_code": {},
        "package_id": {},
        "sequence": 0,
        "tracking_number": {},
        "weight": {
          "unit": {},
          "value": 0.1
        }
      }
    ],
    "return_to": {
      "address_line1": "1999 Bishop Grandin Blvd.",
      "address_line2": "Unit 408",
      "address_line3": "Building #7",
      "address_residential_indicator": "no",
      "city_locality": "Winnipeg",
      "company_name": "The Home Depot",
      "country_code": {},
      "email": "example@example.com",
      "name": "John Doe",
      "phone": "+1 204-253-9411 ext. 123",
      "postal_code": {},
      "state_province": "Manitoba",
      "instructions": "string"
    },
    "service_code": {},
    "ship_date": {},
    "ship_from": {
      "address_line1": "1999 Bishop Grandin Blvd.",
      "address_line2": "Unit 408",
      "address_line3": "Building #7",
      "address_residential_indicator": "no",
      "city_locality": "Winnipeg",
      "company_name": "The Home Depot",
      "country_code": {},
      "email": "example@example.com",
      "name": "John Doe",
      "phone": "+1 204-253-9411 ext. 123",
      "postal_code": {},
      "state_province": "Manitoba",
      "instructions": "string"
    },
    "ship_to": {
      "address_line1": "1999 Bishop Grandin Blvd.",
      "address_line2": "Unit 408",
      "address_line3": "Building #7",
      "address_residential_indicator": "no",
      "city_locality": "Winnipeg",
      "company_name": "The Home Depot",
      "country_code": {},
      "email": "example@example.com",
      "name": "John Doe",
      "phone": "+1 204-253-9411 ext. 123",
      "postal_code": {},
      "state_province": "Manitoba",
      "instructions": "string"
    },
    "shipment_id": {},
    "shipment_number": "string",
    "shipment_status": "pending",
    "tags": [],
    "tax_identifiers": [
      {
        "identifier_type": {},
        "issuing_authority": "string",
        "taxable_entity_type": {},
        "value": "string"
      }
    ],
    "total_weight": {
      "unit": {},
      "value": 0.1
    },
    "warehouse_id": null
  },
  "shipment_cost": {
    "amount": 0,
    "currency": {}
  },
  "shipment_id": {},
  "status": {},
  "test_label": false,
  "trackable": true,
  "tracking_number": "782758401696",
  "tracking_status": {},
  "validate_address": "validate_and_clean",
  "voided": true,
  "voided_at": {}
}
```

A get label by external shipment id response body

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alternative_identifiers|[[alternative_identifier](#schemaalternative_identifier)]|false|read-only|Additional information some carriers may provide by which to identify a given label in their system. <br>|
|batch_id|object|false|read-only|If this label was created as part of a [batch](https://www.shipengine.com/docs/labels/bulk/), then this is the unique ID of that batch.<br>|
|carrier_code|object|false|read-only|The [shipping carrier](https://www.shipengine.com/docs/carriers/setup/) who will ship the package, such as `fedex`, `dhl_express`, `stamps_com`, etc.<br>|
|carrier_id|object|false|read-only|The unique ID of the [carrier account](https://www.shipengine.com/docs/carriers/setup/) that was used to create this label<br>|
|charge_event|object|false|none|The label charge event.<br>|
|created_at|object|false|read-only|The date and time that the label was created in ShipEngine.|
|display_scheme|object|false|none|The display format that the label should be shown in.|
|form_download|object \| null|false|read-only|The link to download the customs form (a.k.a. commercial invoice) for this shipment, if any.  Forms are in PDF format. This field is null if the shipment does not require a customs form, or if the carrier does not support it.<br>|
|insurance_claim|object \| null|false|read-only|The link to submit an insurance claim for the shipment.  This field is null if the shipment is not insured or if the insurance provider does not support online claim submission.<br>|
|insurance_cost|object|false|read-only|The insurance cost for this package.  Add this to the `shipment_cost` field to get the total cost.<br>|
|is_international|boolean|false|read-only|Indicates whether this is an international shipment.  That is, the originating country and destination country are different.<br>|
|is_return_label|boolean|false|none|Indicates whether this is a return label.  You may also want to set the `rma_number` so you know what is being returned.<br>|
|label_download|object|false|read-only|none|
|label_download_type|object|false|write-only|none|
|label_format|object|false|none|The file format that you want the label to be in.  We recommend `pdf` format because it is supported by all carriers, whereas some carriers do not support the `png` or `zpl` formats.<br>|
|label_id|object|false|read-only|A string that uniquely identifies the label. This ID is generated by ShipEngine when the label is created.<br>|
|label_image_id|object \| null|false|none|The label image resource that was used to create a custom label image.|
|label_layout|object|false|none|The layout (size) that you want the label to be in.  The `label_format` determines which sizes are allowed.  `4x6` is supported for all label formats, whereas `letter` (8.5" x 11") is only supported for `pdf` format.<br>|
|outbound_label_id|object|false|write-only|The `label_id` of the original (outgoing) label that the return label is for. This associates the two labels together, which is<br>required by some carriers.<br>|
|package_code|object|false|read-only|The [package type](https://www.shipengine.com/docs/reference/list-carrier-packages/), such as `thick_envelope`, `small_flat_rate_box`, `large_package`, etc.  The code `package` indicates a custom or unknown package type.<br>|
|packages|[[package](#schemapackage)]|false|read-only|The label's package(s).<br><br>> **Note:** Some carriers only allow one package per label.  If you attempt to create a multi-package label for a carrier that doesn't allow it, an error will be returned.<br>|
|rma_number|string \| null|false|none|An optional Return Merchandise Authorization number.  This field is useful for return labels.  You can set it to any string value.<br>|
|service_code|object|false|read-only|The [carrier service](https://www.shipengine.com/docs/shipping/use-a-carrier-service/) used to ship the package, such as `fedex_ground`, `usps_first_class_mail`, `flat_rate_envelope`, etc.<br>|
|ship_date|object|false|read-only|The date that the package was (or will be) shippped.  ShipEngine will take the day of week into consideration. For example, if the carrier does not operate on Sundays, then a package that would have shipped on Sunday will ship on Monday instead.<br>|
|shipment|object|false|write-only|The shipment information used to generate the label|
|shipment_cost|object|false|read-only|The cost of shipping, delivery confirmation, and other carrier charges.  This amount **does not** include insurance costs.<br>|
|shipment_id|object|false|read-only|The shipment that this label is for.  ShipEngine can create a shipment for you automatically when you [create a label](https://www.shipengine.com/docs/labels/create-a-label/), or you can [create your own shipment](https://www.shipengine.com/docs/shipping/create-a-shipment/) and then [use it to print a label](https://www.shipengine.com/docs/labels/create-from-shipment/)<br>|
|status|object|false|read-only|none|
|test_label|boolean|false|write-only|**Deprecated.** Indicate if this label is being used only for testing purposes. If true, then no charge will be added to your account.|
|trackable|boolean|false|read-only|Indicates whether the shipment is trackable, in which case the `tracking_status` field will reflect the current status and each package will have a `tracking_number`.<br>|
|tracking_number|string|false|read-only|The tracking number for the package. Tracking number formats vary across carriers.|
|tracking_status|object|false|read-only|The current status of the package, such as `in_transit` or `delivered`|
|validate_address|object|false|write-only|none|
|voided|boolean|false|read-only|Indicates whether the label has been [voided](https://www.shipengine.com/docs/labels/voiding/)<br>|
|voided_at|object \| null|false|read-only|The date and time that the label was [voided](https://www.shipengine.com/docs/labels/voiding/), or `null` if the label has not been voided<br>|

<h2 id="tocS_get_label_by_id_response_body">get_label_by_id_response_body</h2>
<!-- backwards compatibility -->
<a id="schemaget_label_by_id_response_body"></a>
<a id="schema_get_label_by_id_response_body"></a>
<a id="tocSget_label_by_id_response_body"></a>
<a id="tocsget_label_by_id_response_body"></a>

```json
{
  "alternative_identifiers": [
    {
      "type": "last_mile_tracking_number",
      "value": "12345678912345678912"
    }
  ],
  "batch_id": {},
  "carrier_code": {},
  "carrier_id": {},
  "charge_event": {},
  "created_at": {},
  "display_scheme": "label",
  "form_download": {
    "href": {},
    "type": "string"
  },
  "insurance_claim": {
    "href": {},
    "type": "string"
  },
  "insurance_cost": {
    "amount": 0,
    "currency": {}
  },
  "is_international": true,
  "is_return_label": true,
  "label_download": {
    "href": {},
    "pdf": {},
    "png": {},
    "zpl": {}
  },
  "label_download_type": "url",
  "label_format": "pdf",
  "label_id": {},
  "label_image_id": {},
  "label_layout": "4x6",
  "outbound_label_id": {},
  "package_code": {},
  "packages": [
    {
      "content_description": "Hand knitted wool socks",
      "dimensions": {
        "height": 0,
        "length": 0,
        "unit": "inch",
        "width": 0
      },
      "external_package_id": "string",
      "form_download": {
        "href": {},
        "type": "string"
      },
      "insured_value": [
        {
          "amount": 0,
          "currency": "usd"
        }
      ],
      "label_download": {
        "href": {},
        "pdf": {},
        "png": {},
        "zpl": {}
      },
      "label_messages": {
        "reference1": null,
        "reference2": null,
        "reference3": null
      },
      "package_code": {},
      "package_id": {},
      "sequence": 0,
      "tracking_number": {},
      "weight": {
        "unit": {},
        "value": 0.1
      }
    }
  ],
  "rma_number": "string",
  "service_code": {},
  "ship_date": {},
  "shipment": {
    "advanced_options": {
      "bill_to_account": null,
      "bill_to_country_code": null,
      "bill_to_party": null,
      "bill_to_postal_code": null,
      "collect_on_delivery": {
        "payment_amount": {
          "amount": 0,
          "currency": {}
        },
        "payment_type": {}
      },
      "contains_alcohol": false,
      "custom_field1": null,
      "custom_field2": null,
      "custom_field3": null,
      "delivered_duty_paid": false,
      "dry_ice": false,
      "dry_ice_weight": {
        "unit": {},
        "value": 0.1
      },
      "fedex_freight": {
        "booking_confirmation": "string",
        "shipper_load_and_count": "string"
      },
      "freight_class": 77.5,
      "non_machinable": false,
      "origin_type": null,
      "saturday_delivery": false,
      "shipper_release": null,
      "third_party_consignee": false,
      "use_ups_ground_freight_pricing": null
    },
    "carrier_id": {},
    "confirmation": "none",
    "created_at": {},
    "customs": null,
    "external_order_id": "string",
    "external_shipment_id": "string",
    "insurance_provider": "none",
    "items": [],
    "modified_at": {},
    "order_source_code": {},
    "origin_type": {},
    "packages": [
      {
        "content_description": "Hand knitted wool socks",
        "dimensions": {
          "height": 0,
          "length": 0,
          "unit": "inch",
          "width": 0
        },
        "external_package_id": "string",
        "form_download": {
          "href": {},
          "type": "string"
        },
        "insured_value": [
          {
            "amount": 0,
            "currency": "usd"
          }
        ],
        "label_download": {
          "href": {},
          "pdf": {},
          "png": {},
          "zpl": {}
        },
        "label_messages": {
          "reference1": null,
          "reference2": null,
          "reference3": null
        },
        "package_code": {},
        "package_id": {},
        "sequence": 0,
        "tracking_number": {},
        "weight": {
          "unit": {},
          "value": 0.1
        }
      }
    ],
    "return_to": {
      "address_line1": "1999 Bishop Grandin Blvd.",
      "address_line2": "Unit 408",
      "address_line3": "Building #7",
      "address_residential_indicator": "no",
      "city_locality": "Winnipeg",
      "company_name": "The Home Depot",
      "country_code": {},
      "email": "example@example.com",
      "name": "John Doe",
      "phone": "+1 204-253-9411 ext. 123",
      "postal_code": {},
      "state_province": "Manitoba",
      "instructions": "string"
    },
    "service_code": {},
    "ship_date": {},
    "ship_from": {
      "address_line1": "1999 Bishop Grandin Blvd.",
      "address_line2": "Unit 408",
      "address_line3": "Building #7",
      "address_residential_indicator": "no",
      "city_locality": "Winnipeg",
      "company_name": "The Home Depot",
      "country_code": {},
      "email": "example@example.com",
      "name": "John Doe",
      "phone": "+1 204-253-9411 ext. 123",
      "postal_code": {},
      "state_province": "Manitoba",
      "instructions": "string"
    },
    "ship_to": {
      "address_line1": "1999 Bishop Grandin Blvd.",
      "address_line2": "Unit 408",
      "address_line3": "Building #7",
      "address_residential_indicator": "no",
      "city_locality": "Winnipeg",
      "company_name": "The Home Depot",
      "country_code": {},
      "email": "example@example.com",
      "name": "John Doe",
      "phone": "+1 204-253-9411 ext. 123",
      "postal_code": {},
      "state_province": "Manitoba",
      "instructions": "string"
    },
    "shipment_id": {},
    "shipment_number": "string",
    "shipment_status": "pending",
    "tags": [],
    "tax_identifiers": [
      {
        "identifier_type": {},
        "issuing_authority": "string",
        "taxable_entity_type": {},
        "value": "string"
      }
    ],
    "total_weight": {
      "unit": {},
      "value": 0.1
    },
    "warehouse_id": null
  },
  "shipment_cost": {
    "amount": 0,
    "currency": {}
  },
  "shipment_id": {},
  "status": {},
  "test_label": false,
  "trackable": true,
  "tracking_number": "782758401696",
  "tracking_status": {},
  "validate_address": "validate_and_clean",
  "voided": true,
  "voided_at": {}
}
```

A get label by id response body

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alternative_identifiers|[[alternative_identifier](#schemaalternative_identifier)]|false|read-only|Additional information some carriers may provide by which to identify a given label in their system. <br>|
|batch_id|object|false|read-only|If this label was created as part of a [batch](https://www.shipengine.com/docs/labels/bulk/), then this is the unique ID of that batch.<br>|
|carrier_code|object|false|read-only|The [shipping carrier](https://www.shipengine.com/docs/carriers/setup/) who will ship the package, such as `fedex`, `dhl_express`, `stamps_com`, etc.<br>|
|carrier_id|object|false|read-only|The unique ID of the [carrier account](https://www.shipengine.com/docs/carriers/setup/) that was used to create this label<br>|
|charge_event|object|false|none|The label charge event.<br>|
|created_at|object|false|read-only|The date and time that the label was created in ShipEngine.|
|display_scheme|object|false|none|The display format that the label should be shown in.|
|form_download|object \| null|false|read-only|The link to download the customs form (a.k.a. commercial invoice) for this shipment, if any.  Forms are in PDF format. This field is null if the shipment does not require a customs form, or if the carrier does not support it.<br>|
|insurance_claim|object \| null|false|read-only|The link to submit an insurance claim for the shipment.  This field is null if the shipment is not insured or if the insurance provider does not support online claim submission.<br>|
|insurance_cost|object|false|read-only|The insurance cost for this package.  Add this to the `shipment_cost` field to get the total cost.<br>|
|is_international|boolean|false|read-only|Indicates whether this is an international shipment.  That is, the originating country and destination country are different.<br>|
|is_return_label|boolean|false|none|Indicates whether this is a return label.  You may also want to set the `rma_number` so you know what is being returned.<br>|
|label_download|object|false|read-only|none|
|label_download_type|object|false|write-only|none|
|label_format|object|false|none|The file format that you want the label to be in.  We recommend `pdf` format because it is supported by all carriers, whereas some carriers do not support the `png` or `zpl` formats.<br>|
|label_id|object|false|read-only|A string that uniquely identifies the label. This ID is generated by ShipEngine when the label is created.<br>|
|label_image_id|object \| null|false|none|The label image resource that was used to create a custom label image.|
|label_layout|object|false|none|The layout (size) that you want the label to be in.  The `label_format` determines which sizes are allowed.  `4x6` is supported for all label formats, whereas `letter` (8.5" x 11") is only supported for `pdf` format.<br>|
|outbound_label_id|object|false|write-only|The `label_id` of the original (outgoing) label that the return label is for. This associates the two labels together, which is<br>required by some carriers.<br>|
|package_code|object|false|read-only|The [package type](https://www.shipengine.com/docs/reference/list-carrier-packages/), such as `thick_envelope`, `small_flat_rate_box`, `large_package`, etc.  The code `package` indicates a custom or unknown package type.<br>|
|packages|[[package](#schemapackage)]|false|read-only|The label's package(s).<br><br>> **Note:** Some carriers only allow one package per label.  If you attempt to create a multi-package label for a carrier that doesn't allow it, an error will be returned.<br>|
|rma_number|string \| null|false|none|An optional Return Merchandise Authorization number.  This field is useful for return labels.  You can set it to any string value.<br>|
|service_code|object|false|read-only|The [carrier service](https://www.shipengine.com/docs/shipping/use-a-carrier-service/) used to ship the package, such as `fedex_ground`, `usps_first_class_mail`, `flat_rate_envelope`, etc.<br>|
|ship_date|object|false|read-only|The date that the package was (or will be) shippped.  ShipEngine will take the day of week into consideration. For example, if the carrier does not operate on Sundays, then a package that would have shipped on Sunday will ship on Monday instead.<br>|
|shipment|object|false|write-only|The shipment information used to generate the label|
|shipment_cost|object|false|read-only|The cost of shipping, delivery confirmation, and other carrier charges.  This amount **does not** include insurance costs.<br>|
|shipment_id|object|false|read-only|The shipment that this label is for.  ShipEngine can create a shipment for you automatically when you [create a label](https://www.shipengine.com/docs/labels/create-a-label/), or you can [create your own shipment](https://www.shipengine.com/docs/shipping/create-a-shipment/) and then [use it to print a label](https://www.shipengine.com/docs/labels/create-from-shipment/)<br>|
|status|object|false|read-only|none|
|test_label|boolean|false|write-only|**Deprecated.** Indicate if this label is being used only for testing purposes. If true, then no charge will be added to your account.|
|trackable|boolean|false|read-only|Indicates whether the shipment is trackable, in which case the `tracking_status` field will reflect the current status and each package will have a `tracking_number`.<br>|
|tracking_number|string|false|read-only|The tracking number for the package. Tracking number formats vary across carriers.|
|tracking_status|object|false|read-only|The current status of the package, such as `in_transit` or `delivered`|
|validate_address|object|false|write-only|none|
|voided|boolean|false|read-only|Indicates whether the label has been [voided](https://www.shipengine.com/docs/labels/voiding/)<br>|
|voided_at|object \| null|false|read-only|The date and time that the label was [voided](https://www.shipengine.com/docs/labels/voiding/), or `null` if the label has not been voided<br>|

<h2 id="tocS_get_manifest_by_id_response_body">get_manifest_by_id_response_body</h2>
<!-- backwards compatibility -->
<a id="schemaget_manifest_by_id_response_body"></a>
<a id="schema_get_manifest_by_id_response_body"></a>
<a id="tocSget_manifest_by_id_response_body"></a>
<a id="tocsget_manifest_by_id_response_body"></a>

```json
{
  "carrier_id": {},
  "created_at": "2019-07-12T13:37:39.050Z",
  "form_id": {},
  "label_ids": [
    {}
  ],
  "manifest_download": {
    "href": {}
  },
  "manifest_id": {},
  "ship_date": "2019-07-12T13:37:39.050Z",
  "shipments": 100,
  "submission_id": "9475711899564878915476",
  "warehouse_id": {}
}
```

A get manifest by id response body

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|carrier_id|object|true|read-only|A string that uniquely identifies the carrier|
|created_at|string(date-time)|true|read-only|The date-time that the manifest was created|
|form_id|object|true|read-only|A string that uniquely identifies the form|
|label_ids|[object]|true|read-only|An array of the label ids used in this manifest.|
|manifest_download|object|true|read-only|none|
|manifest_id|object|true|read-only|A string that uniquely identifies the manifest|
|ship_date|string(date-time)|true|read-only|The date-time that the manifests shipments will be picked up|
|shipments|integer(int32)|true|read-only|The number of shipments that are included in this manifest|
|submission_id|string|true|read-only|A string that uniquely identifies the submission|
|warehouse_id|object|true|read-only|A string that uniquely identifies the warehouse|

<h2 id="tocS_get_package_type_by_id_response_body">get_package_type_by_id_response_body</h2>
<!-- backwards compatibility -->
<a id="schemaget_package_type_by_id_response_body"></a>
<a id="schema_get_package_type_by_id_response_body"></a>
<a id="tocSget_package_type_by_id_response_body"></a>
<a id="tocsget_package_type_by_id_response_body"></a>

```json
{
  "description": "Packaging for laptops",
  "dimensions": {
    "height": 0,
    "length": 0,
    "unit": "inch",
    "width": 0
  },
  "name": "laptop_box",
  "package_code": {},
  "package_id": {}
}
```

A get package type by id response body

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string \| null|false|none|Provides a helpful description for the custom package.|
|dimensions|object|false|none|The custom dimensions for the package.|
|name|string|true|none|none|
|package_code|object|true|none|none|
|package_id|object|false|none|A string that uniquely identifies the package.|

<h2 id="tocS_get_pickup_by_id_response_body">get_pickup_by_id_response_body</h2>
<!-- backwards compatibility -->
<a id="schemaget_pickup_by_id_response_body"></a>
<a id="schema_get_pickup_by_id_response_body"></a>
<a id="tocSget_pickup_by_id_response_body"></a>
<a id="tocsget_pickup_by_id_response_body"></a>

```json
{
  "cancelled_at": {},
  "carrier_id": {},
  "confirmation_number": "292513CL4A3",
  "contact_details": {
    "email": {},
    "name": "string",
    "phone": "strings"
  },
  "created_at": {},
  "label_ids": [
    {}
  ],
  "pickup_address": {
    "address_line1": "1999 Bishop Grandin Blvd.",
    "address_line2": "Unit 408",
    "address_line3": "Building #7",
    "address_residential_indicator": "no",
    "city_locality": "Winnipeg",
    "company_name": "The Home Depot",
    "country_code": {},
    "email": "example@example.com",
    "name": "John Doe",
    "phone": "+1 204-253-9411 ext. 123",
    "postal_code": {},
    "state_province": "Manitoba"
  },
  "pickup_id": {},
  "pickup_notes": "string",
  "pickup_window": {
    "end_at": {},
    "start_at": {}
  },
  "pickup_windows": [
    {
      "end_at": {},
      "start_at": {}
    }
  ],
  "warehouse_id": {},
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cancelled_at|object|false|read-only|The date and time that the pickup was cancelled in ShipEngine.|
|carrier_id|object|true|read-only|The carrier_id associated with the pickup|
|confirmation_number|string \| null|true|read-only|The carrier confirmation number for the scheduled pickup.|
|contact_details|[contact_details](#schemacontact_details)|true|none|none|
|created_at|object|true|read-only|The date and time that the pickup was created in ShipEngine.|
|label_ids|[object]|true|none|Label IDs that will be included in the pickup request|
|pickup_address|object|true|read-only|none|
|pickup_id|object|true|read-only|none|
|pickup_notes|string|false|none|Used by some carriers to give special instructions for a package pickup|
|pickup_window|[pickup_window](#schemapickup_window)|true|write-only|The desired time range for the package pickup.|
|pickup_windows|[object]|false|read-only|An array of available pickup windows. Carriers can return multiple times that they will pickup packages.<br>|
|warehouse_id|object|true|read-only|The warehouse_id associated with the pickup|
|errors|[object]|true|read-only|The errors associated with the failed API call|
|request_id|object|true|none|A UUID that uniquely identifies the request id.<br>This can be given to the support team to help debug non-trivial issues that may occur<br>|

<h2 id="tocS_get_pickups_response_body">get_pickups_response_body</h2>
<!-- backwards compatibility -->
<a id="schemaget_pickups_response_body"></a>
<a id="schema_get_pickups_response_body"></a>
<a id="tocSget_pickups_response_body"></a>
<a id="tocsget_pickups_response_body"></a>

```json
{
  "links": {
    "first": {
      "href": {},
      "type": "string"
    },
    "last": {
      "href": {},
      "type": "string"
    },
    "next": {
      "href": {},
      "type": "string"
    },
    "prev": {
      "href": {},
      "type": "string"
    }
  },
  "page": 3,
  "pages": 4,
  "pickups": [
    {
      "cancelled_at": {},
      "carrier_id": {},
      "confirmation_number": "292513CL4A3",
      "contact_details": {
        "email": {},
        "name": "string",
        "phone": "strings"
      },
      "created_at": {},
      "label_ids": [
        {}
      ],
      "pickup_address": {
        "address_line1": "1999 Bishop Grandin Blvd.",
        "address_line2": "Unit 408",
        "address_line3": "Building #7",
        "address_residential_indicator": "no",
        "city_locality": "Winnipeg",
        "company_name": "The Home Depot",
        "country_code": {},
        "email": "example@example.com",
        "name": "John Doe",
        "phone": "+1 204-253-9411 ext. 123",
        "postal_code": {},
        "state_province": "Manitoba"
      },
      "pickup_id": {},
      "pickup_notes": "string",
      "pickup_window": {
        "end_at": {},
        "start_at": {}
      },
      "pickup_windows": [
        {
          "end_at": {},
          "start_at": {}
        }
      ],
      "warehouse_id": {}
    }
  ],
  "total": 3,
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|links|object|true|read-only|Helpful links to other pages of results|
|page|integer(int32)|true|read-only|Current page of the list pickups results|
|pages|integer(int32)|true|read-only|Total number of pages for list pickups results|
|pickups|[object]|true|none|An array of pickups associated with the user's account.|
|total|integer(int64)|true|read-only|The total number of pickups returned|
|errors|[object]|true|read-only|The errors associated with the failed API call|
|request_id|object|true|none|A UUID that uniquely identifies the request id.<br>This can be given to the support team to help debug non-trivial issues that may occur<br>|

<h2 id="tocS_get_rate_by_id_response_body">get_rate_by_id_response_body</h2>
<!-- backwards compatibility -->
<a id="schemaget_rate_by_id_response_body"></a>
<a id="schema_get_rate_by_id_response_body"></a>
<a id="tocSget_rate_by_id_response_body"></a>
<a id="tocsget_rate_by_id_response_body"></a>

```json
{
  "carrier_code": "string",
  "carrier_delivery_days": "string",
  "carrier_friendly_name": "string",
  "carrier_id": {},
  "carrier_nickname": "string",
  "confirmation_amount": {
    "amount": 0,
    "currency": {}
  },
  "delivery_days": 5,
  "error_messages": [
    "string"
  ],
  "estimated_delivery_date": {},
  "guaranteed_service": true,
  "insurance_amount": {
    "amount": 0,
    "currency": {}
  },
  "negotiated_rate": true,
  "other_amount": {
    "amount": 0,
    "currency": {}
  },
  "package_type": "package",
  "rate_id": {},
  "rate_type": {},
  "service_code": "string",
  "service_type": "string",
  "ship_date": "1970-01-01T00:00:00Z",
  "shipping_amount": {
    "amount": 0,
    "currency": {}
  },
  "tax_amount": {
    "amount": 0,
    "currency": {}
  },
  "trackable": true,
  "validation_status": {},
  "warning_messages": [
    "string"
  ],
  "zone": 6
}
```

A rate response body

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|carrier_code|string|true|read-only|carrier code|
|carrier_delivery_days|string|false|read-only|The carrier delivery days|
|carrier_friendly_name|string|true|read-only|carrier friendly name|
|carrier_id|object|true|read-only|A string that uniquely identifies the carrier|
|carrier_nickname|string|true|read-only|carrier nickname|
|confirmation_amount|object|true|read-only|The confirmation amount|
|delivery_days|integer(int32)|false|read-only|The number of days estimated for delivery, this will show the _actual_ delivery<br>time if for example, the package gets shipped on a Friday<br>|
|error_messages|[string]|true|read-only|The error messages|
|estimated_delivery_date|object|false|read-only|none|
|guaranteed_service|boolean|true|read-only|Indicates if the rate is guaranteed.|
|insurance_amount|object|true|read-only|The insurance amount|
|negotiated_rate|boolean|true|read-only|Indicates if the rates been negotiated|
|other_amount|object|true|read-only|Any other charges associated with this rate|
|package_type|string \| null|true|read-only|package type that this rate was estimated for|
|rate_id|object|true|read-only|A string that uniquely identifies the rate|
|rate_type|object|true|read-only|none|
|service_code|string|true|read-only|service code for the rate|
|service_type|string|true|read-only|service type|
|ship_date|string(date-time)|false|read-only|ship date|
|shipping_amount|object|true|read-only|The shipping amount|
|tax_amount|object|false|read-only|Tariff and additional taxes associated with an international shipment.|
|trackable|boolean|true|read-only|Indicates if rate is trackable|
|validation_status|object|true|read-only|none|
|warning_messages|[string]|true|read-only|The warning messages|
|zone|integer(int32) \| null|true|read-only|Certain carriers base [their rates](https://blog.stamps.com/2017/09/08/usps-postal-zones/) off of<br>custom zones that vary depending upon the ship_to and ship_from location<br>|

<h2 id="tocS_get_service_point_by_id_response_body">get_service_point_by_id_response_body</h2>
<!-- backwards compatibility -->
<a id="schemaget_service_point_by_id_response_body"></a>
<a id="schema_get_service_point_by_id_response_body"></a>
<a id="tocSget_service_point_by_id_response_body"></a>
<a id="tocsget_service_point_by_id_response_body"></a>

```json
{
  "service_point": {
    "address_line1": "PLACE DU CANADA",
    "carrier_code": "chronopost",
    "city_locality": "TRUN",
    "company_name": "My fancy company name",
    "country_code": "FR",
    "features": [
      "drop_off_point"
    ],
    "hours_of_operation": {
      "friday": [
        {
          "close": "12:00",
          "open": "09:15"
        }
      ],
      "monday": [
        {
          "close": "12:00",
          "open": "09:15"
        }
      ],
      "saturday": [
        {
          "close": "12:00",
          "open": "09:15"
        }
      ],
      "sunday": [
        {
          "close": "12:00",
          "open": "09:15"
        }
      ],
      "thursday": [
        {
          "close": "12:00",
          "open": "09:15"
        }
      ],
      "tuesday": [
        {
          "close": "12:00",
          "open": "09:15"
        }
      ],
      "wednesday": [
        {
          "close": "12:00",
          "open": "09:15"
        }
      ]
    },
    "lat": 48.842608,
    "long": 0.032875,
    "phone_number": "555-555-5555",
    "postal_code": "61160",
    "service_codes": [
      "string"
    ],
    "service_point_id": "614940",
    "state_province": "TRUN"
  }
}
```

A get service point by ID response body

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|service_point|object|false|none|none|

<h2 id="tocS_get_service_points_request">get_service_points_request</h2>
<!-- backwards compatibility -->
<a id="schemaget_service_points_request"></a>
<a id="schema_get_service_points_request"></a>
<a id="tocSget_service_points_request"></a>
<a id="tocsget_service_points_request"></a>

```json
{
  "address": {
    "address_line1": "string",
    "address_line2": "string",
    "address_line3": "string",
    "city_locality": "string",
    "country_code": "string",
    "postal_code": "string",
    "state_province": "string"
  },
  "address_query": "177A Bleecker Street New York",
  "lat": 48.874518928233094,
  "long": 2.3591775711639404,
  "max_results": 25,
  "providers": [
    {
      "carrier_id": "se-123456",
      "service_code": [
        "chronoclassic"
      ]
    }
  ],
  "radius": 500
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[get_service_points_request_body](#schemaget_service_points_request_body)|false|none|A get service points request body. Caller must provide exactly one of address_query, address, or lat / long pair.|

<h2 id="tocS_get_service_points_request_body">get_service_points_request_body</h2>
<!-- backwards compatibility -->
<a id="schemaget_service_points_request_body"></a>
<a id="schema_get_service_points_request_body"></a>
<a id="tocSget_service_points_request_body"></a>
<a id="tocsget_service_points_request_body"></a>

```json
{
  "address": {
    "address_line1": "string",
    "address_line2": "string",
    "address_line3": "string",
    "city_locality": "string",
    "country_code": "string",
    "postal_code": "string",
    "state_province": "string"
  },
  "address_query": "177A Bleecker Street New York",
  "lat": 48.874518928233094,
  "long": 2.3591775711639404,
  "max_results": 25,
  "providers": [
    {
      "carrier_id": "se-123456",
      "service_code": [
        "chronoclassic"
      ]
    }
  ],
  "radius": 500
}
```

A get service points request body. Caller must provide exactly one of address_query, address, or lat / long pair.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|object|false|none|Structured address to search by.|
|address_query|string|false|none|Unstructured text to search for service points by.|
|lat|number(double)|false|none|The latitude of the point. Represented as signed degrees. Required if long is provided. http://www.geomidpoint.com/latlon.html|
|long|number(double)|false|none|The longitude of the point. Represented as signed degrees. Required if lat is provided. http://www.geomidpoint.com/latlon.html|
|max_results|integer(int32)|false|none|The maximum number of service points to return|
|providers|[object]|true|none|An array of shipping service providers and service codes|
|radius|integer(int32)|false|none|Search radius in kilometers|

<h2 id="tocS_get_shipment_by_external_id_response_body">get_shipment_by_external_id_response_body</h2>
<!-- backwards compatibility -->
<a id="schemaget_shipment_by_external_id_response_body"></a>
<a id="schema_get_shipment_by_external_id_response_body"></a>
<a id="tocSget_shipment_by_external_id_response_body"></a>
<a id="tocsget_shipment_by_external_id_response_body"></a>

```json
{
  "advanced_options": {
    "bill_to_account": null,
    "bill_to_country_code": null,
    "bill_to_party": null,
    "bill_to_postal_code": null,
    "collect_on_delivery": {
      "payment_amount": {
        "amount": 0,
        "currency": {}
      },
      "payment_type": {}
    },
    "contains_alcohol": false,
    "custom_field1": null,
    "custom_field2": null,
    "custom_field3": null,
    "delivered_duty_paid": false,
    "dry_ice": false,
    "dry_ice_weight": {
      "unit": {},
      "value": 0.1
    },
    "fedex_freight": {
      "booking_confirmation": "string",
      "shipper_load_and_count": "string"
    },
    "freight_class": 77.5,
    "non_machinable": false,
    "origin_type": null,
    "saturday_delivery": false,
    "shipper_release": null,
    "third_party_consignee": false,
    "use_ups_ground_freight_pricing": null
  },
  "carrier_id": {},
  "confirmation": "none",
  "created_at": {},
  "customs": null,
  "external_order_id": "string",
  "external_shipment_id": "string",
  "insurance_provider": "none",
  "items": [],
  "modified_at": {},
  "order_source_code": {},
  "origin_type": {},
  "packages": [
    {
      "content_description": "Hand knitted wool socks",
      "dimensions": {
        "height": 0,
        "length": 0,
        "unit": "inch",
        "width": 0
      },
      "external_package_id": "string",
      "form_download": {
        "href": {},
        "type": "string"
      },
      "insured_value": [
        {
          "amount": 0,
          "currency": "usd"
        }
      ],
      "label_download": {
        "href": {},
        "pdf": {},
        "png": {},
        "zpl": {}
      },
      "label_messages": {
        "reference1": null,
        "reference2": null,
        "reference3": null
      },
      "package_code": {},
      "package_id": {},
      "sequence": 0,
      "tracking_number": {},
      "weight": {
        "unit": {},
        "value": 0.1
      }
    }
  ],
  "return_to": {
    "address_line1": "1999 Bishop Grandin Blvd.",
    "address_line2": "Unit 408",
    "address_line3": "Building #7",
    "address_residential_indicator": "no",
    "city_locality": "Winnipeg",
    "company_name": "The Home Depot",
    "country_code": {},
    "email": "example@example.com",
    "name": "John Doe",
    "phone": "+1 204-253-9411 ext. 123",
    "postal_code": {},
    "state_province": "Manitoba",
    "instructions": "string"
  },
  "service_code": {},
  "ship_date": {},
  "ship_from": {
    "address_line1": "1999 Bishop Grandin Blvd.",
    "address_line2": "Unit 408",
    "address_line3": "Building #7",
    "address_residential_indicator": "no",
    "city_locality": "Winnipeg",
    "company_name": "The Home Depot",
    "country_code": {},
    "email": "example@example.com",
    "name": "John Doe",
    "phone": "+1 204-253-9411 ext. 123",
    "postal_code": {},
    "state_province": "Manitoba",
    "instructions": "string"
  },
  "ship_to": {
    "address_line1": "1999 Bishop Grandin Blvd.",
    "address_line2": "Unit 408",
    "address_line3": "Building #7",
    "address_residential_indicator": "no",
    "city_locality": "Winnipeg",
    "company_name": "The Home Depot",
    "country_code": {},
    "email": "example@example.com",
    "name": "John Doe",
    "phone": "+1 204-253-9411 ext. 123",
    "postal_code": {},
    "state_province": "Manitoba",
    "instructions": "string"
  },
  "shipment_id": {},
  "shipment_number": "string",
  "shipment_status": "pending",
  "tags": [],
  "tax_identifiers": [
    {
      "identifier_type": {},
      "issuing_authority": "string",
      "taxable_entity_type": {},
      "value": "string"
    }
  ],
  "total_weight": {
    "unit": {},
    "value": 0.1
  },
  "warehouse_id": null
}
```

A get shipment by external id response body

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|advanced_options|object|true|none|Advanced shipment options.  These are entirely optional.|
|carrier_id|object|true|none|The carrier account that is billed for the shipping charges|
|confirmation|object|true|none|The type of delivery confirmation that is required for this shipment.|
|created_at|object|true|read-only|The date and time that the shipment was created in ShipEngine.|
|customs|object \| null|true|none|Customs information.  This is usually only needed for international shipments.<br>|
|external_order_id|string \| null|false|none|ID that the Order Source assigned|
|external_shipment_id|string \| null|false|none|A unique user-defined key to identify a shipment.  This can be used to retrieve the shipment.<br><br>> **Warning:** The `external_shipment_id` is limited to 50 characters. Any additional characters will be truncated.<br>|
|insurance_provider|object|true|none|The insurance provider to use for any insured packages in the shipment.<br>|
|items|[object]|false|none|Describe the packages included in this shipment as related to potential metadata that was imported from<br>external order sources<br>|
|modified_at|object|true|read-only|The date and time that the shipment was created or last modified.|
|order_source_code|object|false|none|none|
|origin_type|object \| null|false|none|Indicates if the package will be picked up or dropped off by the carrier|
|packages|[object]|true|none|The packages in the shipment.<br><br>> **Note:** Some carriers only allow one package per shipment.  If you attempt to create a multi-package shipment for a carrier that doesn't allow it, an error will be returned.<br>|
|return_to|object|true|none|The return address for this shipment.  Defaults to the `ship_from` address.<br>|
|service_code|object|true|none|The [carrier service](https://www.shipengine.com/docs/shipping/use-a-carrier-service/) used to ship the package, such as `fedex_ground`, `usps_first_class_mail`, `flat_rate_envelope`, etc.<br>|
|ship_date|object|true|none|The date that the shipment was (or will be) shippped.  ShipEngine will take the day of week into consideration. For example, if the carrier does not operate on Sundays, then a package that would have shipped on Sunday will ship on Monday instead.<br>|
|ship_from|object|true|none|The shipment's origin address. If you frequently ship from the same location, consider [creating a warehouse](https://www.shipengine.com/docs/reference/create-warehouse/).  Then you can simply specify the `warehouse_id` rather than the complete address each time.<br>|
|ship_to|object|true|none|The recipient's mailing address|
|shipment_id|object|true|read-only|A string that uniquely identifies the shipment|
|shipment_number|string \| null|false|none|A non-unique user-defined number used to identify a shipment.  If undefined, this will match the external_shipment_id of the shipment.<br><br>> **Warning:** The `shipment_number` is limited to 50 characters. Any additional characters will be truncated.<br>|
|shipment_status|object|true|read-only|The current status of the shipment|
|tags|[object]|true|read-only|Arbitrary tags associated with this shipment.  Tags can be used to categorize shipments, and shipments can be queried by their tags.<br>|
|tax_identifiers|[object]|false|none|none|
|total_weight|object|true|read-only|The combined weight of all packages in the shipment|
|warehouse_id|object \| null|true|none|The [warehouse](https://www.shipengine.com/docs/shipping/ship-from-a-warehouse/) that the shipment is being shipped from.  Either `warehouse_id` or `ship_from` must be specified.<br>|

<h2 id="tocS_get_shipment_by_id_response_body">get_shipment_by_id_response_body</h2>
<!-- backwards compatibility -->
<a id="schemaget_shipment_by_id_response_body"></a>
<a id="schema_get_shipment_by_id_response_body"></a>
<a id="tocSget_shipment_by_id_response_body"></a>
<a id="tocsget_shipment_by_id_response_body"></a>

```json
{
  "advanced_options": {
    "bill_to_account": null,
    "bill_to_country_code": null,
    "bill_to_party": null,
    "bill_to_postal_code": null,
    "collect_on_delivery": {
      "payment_amount": {
        "amount": 0,
        "currency": {}
      },
      "payment_type": {}
    },
    "contains_alcohol": false,
    "custom_field1": null,
    "custom_field2": null,
    "custom_field3": null,
    "delivered_duty_paid": false,
    "dry_ice": false,
    "dry_ice_weight": {
      "unit": {},
      "value": 0.1
    },
    "fedex_freight": {
      "booking_confirmation": "string",
      "shipper_load_and_count": "string"
    },
    "freight_class": 77.5,
    "non_machinable": false,
    "origin_type": null,
    "saturday_delivery": false,
    "shipper_release": null,
    "third_party_consignee": false,
    "use_ups_ground_freight_pricing": null
  },
  "carrier_id": {},
  "confirmation": "none",
  "created_at": {},
  "customs": null,
  "external_order_id": "string",
  "external_shipment_id": "string",
  "insurance_provider": "none",
  "items": [],
  "modified_at": {},
  "order_source_code": {},
  "origin_type": {},
  "packages": [
    {
      "content_description": "Hand knitted wool socks",
      "dimensions": {
        "height": 0,
        "length": 0,
        "unit": "inch",
        "width": 0
      },
      "external_package_id": "string",
      "form_download": {
        "href": {},
        "type": "string"
      },
      "insured_value": [
        {
          "amount": 0,
          "currency": "usd"
        }
      ],
      "label_download": {
        "href": {},
        "pdf": {},
        "png": {},
        "zpl": {}
      },
      "label_messages": {
        "reference1": null,
        "reference2": null,
        "reference3": null
      },
      "package_code": {},
      "package_id": {},
      "sequence": 0,
      "tracking_number": {},
      "weight": {
        "unit": {},
        "value": 0.1
      }
    }
  ],
  "return_to": {
    "address_line1": "1999 Bishop Grandin Blvd.",
    "address_line2": "Unit 408",
    "address_line3": "Building #7",
    "address_residential_indicator": "no",
    "city_locality": "Winnipeg",
    "company_name": "The Home Depot",
    "country_code": {},
    "email": "example@example.com",
    "name": "John Doe",
    "phone": "+1 204-253-9411 ext. 123",
    "postal_code": {},
    "state_province": "Manitoba",
    "instructions": "string"
  },
  "service_code": {},
  "ship_date": {},
  "ship_from": {
    "address_line1": "1999 Bishop Grandin Blvd.",
    "address_line2": "Unit 408",
    "address_line3": "Building #7",
    "address_residential_indicator": "no",
    "city_locality": "Winnipeg",
    "company_name": "The Home Depot",
    "country_code": {},
    "email": "example@example.com",
    "name": "John Doe",
    "phone": "+1 204-253-9411 ext. 123",
    "postal_code": {},
    "state_province": "Manitoba",
    "instructions": "string"
  },
  "ship_to": {
    "address_line1": "1999 Bishop Grandin Blvd.",
    "address_line2": "Unit 408",
    "address_line3": "Building #7",
    "address_residential_indicator": "no",
    "city_locality": "Winnipeg",
    "company_name": "The Home Depot",
    "country_code": {},
    "email": "example@example.com",
    "name": "John Doe",
    "phone": "+1 204-253-9411 ext. 123",
    "postal_code": {},
    "state_province": "Manitoba",
    "instructions": "string"
  },
  "shipment_id": {},
  "shipment_number": "string",
  "shipment_status": "pending",
  "tags": [],
  "tax_identifiers": [
    {
      "identifier_type": {},
      "issuing_authority": "string",
      "taxable_entity_type": {},
      "value": "string"
    }
  ],
  "total_weight": {
    "unit": {},
    "value": 0.1
  },
  "warehouse_id": null
}
```

A get shipment by id response body

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|advanced_options|object|true|none|Advanced shipment options.  These are entirely optional.|
|carrier_id|object|true|none|The carrier account that is billed for the shipping charges|
|confirmation|object|true|none|The type of delivery confirmation that is required for this shipment.|
|created_at|object|true|read-only|The date and time that the shipment was created in ShipEngine.|
|customs|object \| null|true|none|Customs information.  This is usually only needed for international shipments.<br>|
|external_order_id|string \| null|false|none|ID that the Order Source assigned|
|external_shipment_id|string \| null|false|none|A unique user-defined key to identify a shipment.  This can be used to retrieve the shipment.<br><br>> **Warning:** The `external_shipment_id` is limited to 50 characters. Any additional characters will be truncated.<br>|
|insurance_provider|object|true|none|The insurance provider to use for any insured packages in the shipment.<br>|
|items|[object]|false|none|Describe the packages included in this shipment as related to potential metadata that was imported from<br>external order sources<br>|
|modified_at|object|true|read-only|The date and time that the shipment was created or last modified.|
|order_source_code|object|false|none|none|
|origin_type|object \| null|false|none|Indicates if the package will be picked up or dropped off by the carrier|
|packages|[object]|true|none|The packages in the shipment.<br><br>> **Note:** Some carriers only allow one package per shipment.  If you attempt to create a multi-package shipment for a carrier that doesn't allow it, an error will be returned.<br>|
|return_to|object|true|none|The return address for this shipment.  Defaults to the `ship_from` address.<br>|
|service_code|object|true|none|The [carrier service](https://www.shipengine.com/docs/shipping/use-a-carrier-service/) used to ship the package, such as `fedex_ground`, `usps_first_class_mail`, `flat_rate_envelope`, etc.<br>|
|ship_date|object|true|none|The date that the shipment was (or will be) shippped.  ShipEngine will take the day of week into consideration. For example, if the carrier does not operate on Sundays, then a package that would have shipped on Sunday will ship on Monday instead.<br>|
|ship_from|object|true|none|The shipment's origin address. If you frequently ship from the same location, consider [creating a warehouse](https://www.shipengine.com/docs/reference/create-warehouse/).  Then you can simply specify the `warehouse_id` rather than the complete address each time.<br>|
|ship_to|object|true|none|The recipient's mailing address|
|shipment_id|object|true|read-only|A string that uniquely identifies the shipment|
|shipment_number|string \| null|false|none|A non-unique user-defined number used to identify a shipment.  If undefined, this will match the external_shipment_id of the shipment.<br><br>> **Warning:** The `shipment_number` is limited to 50 characters. Any additional characters will be truncated.<br>|
|shipment_status|object|true|read-only|The current status of the shipment|
|tags|[object]|true|read-only|Arbitrary tags associated with this shipment.  Tags can be used to categorize shipments, and shipments can be queried by their tags.<br>|
|tax_identifiers|[object]|false|none|none|
|total_weight|object|true|read-only|The combined weight of all packages in the shipment|
|warehouse_id|object \| null|true|none|The [warehouse](https://www.shipengine.com/docs/shipping/ship-from-a-warehouse/) that the shipment is being shipped from.  Either `warehouse_id` or `ship_from` must be specified.<br>|

<h2 id="tocS_get_tracking_log_from_label_response_body">get_tracking_log_from_label_response_body</h2>
<!-- backwards compatibility -->
<a id="schemaget_tracking_log_from_label_response_body"></a>
<a id="schema_get_tracking_log_from_label_response_body"></a>
<a id="tocSget_tracking_log_from_label_response_body"></a>
<a id="tocsget_tracking_log_from_label_response_body"></a>

```json
{
  "actual_delivery_date": {},
  "carrier_code": {},
  "carrier_detail_code": "OT",
  "carrier_id": {},
  "carrier_status_code": 1,
  "carrier_status_description": "Your item was delivered in or at the mailbox at 9:10 am on March",
  "estimated_delivery_date": {},
  "events": [
    {
      "carrier_detail_code": "OT",
      "carrier_occurred_at": {},
      "carrier_status_code": 1,
      "carrier_status_description": "Your item was delivered in or at the mailbox at 9:10 am on March",
      "city_locality": "AUSTIN",
      "company_name": "Stamps.com",
      "country_code": {},
      "description": "Delivered, In/At Mailbox",
      "event_code": "string",
      "latitude": -90,
      "longitude": -180,
      "occurred_at": {},
      "postal_code": 78756,
      "signer": "string",
      "state_province": "TX",
      "status_code": {},
      "status_description": "In Transit"
    }
  ],
  "exception_description": "string",
  "ship_date": {},
  "status_code": {},
  "status_description": "Delivered",
  "tracking_number": {},
  "tracking_url": "https://www.fedex.com/fedextrack/?action=track&trackingnumber=1234"
}
```

A get tracking log from label response body

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actual_delivery_date|object|false|none|none|
|carrier_code|object|false|none|none|
|carrier_detail_code|string|false|read-only|Carrier detail code|
|carrier_id|object|false|none|none|
|carrier_status_code|string|true|read-only|Carrier status code|
|carrier_status_description|string|false|read-only|carrier status description|
|estimated_delivery_date|object|true|none|none|
|events|[[track_event](#schematrack_event)]|true|read-only|The events that have occured during the lifetime of this tracking number.|
|exception_description|string|false|read-only|Exception description|
|ship_date|object|false|none|none|
|status_code|object|true|none|none|
|status_description|string|false|read-only|Status description|
|tracking_number|object|true|none|none|
|tracking_url|string|false|read-only|Carrier Tracking Url, if available|

<h2 id="tocS_get_tracking_log_response_body">get_tracking_log_response_body</h2>
<!-- backwards compatibility -->
<a id="schemaget_tracking_log_response_body"></a>
<a id="schema_get_tracking_log_response_body"></a>
<a id="tocSget_tracking_log_response_body"></a>
<a id="tocsget_tracking_log_response_body"></a>

```json
{
  "actual_delivery_date": {},
  "carrier_code": {},
  "carrier_detail_code": "OT",
  "carrier_id": {},
  "carrier_status_code": 1,
  "carrier_status_description": "Your item was delivered in or at the mailbox at 9:10 am on March",
  "estimated_delivery_date": {},
  "events": [
    {
      "carrier_detail_code": "OT",
      "carrier_occurred_at": {},
      "carrier_status_code": 1,
      "carrier_status_description": "Your item was delivered in or at the mailbox at 9:10 am on March",
      "city_locality": "AUSTIN",
      "company_name": "Stamps.com",
      "country_code": {},
      "description": "Delivered, In/At Mailbox",
      "event_code": "string",
      "latitude": -90,
      "longitude": -180,
      "occurred_at": {},
      "postal_code": 78756,
      "signer": "string",
      "state_province": "TX",
      "status_code": {},
      "status_description": "In Transit"
    }
  ],
  "exception_description": "string",
  "ship_date": {},
  "status_code": {},
  "status_description": "Delivered",
  "tracking_number": {},
  "tracking_url": "https://www.fedex.com/fedextrack/?action=track&trackingnumber=1234"
}
```

A get tracking log response body

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actual_delivery_date|object|false|none|none|
|carrier_code|object|true|none|none|
|carrier_detail_code|string|true|read-only|Carrier detail code|
|carrier_id|object|true|none|none|
|carrier_status_code|string|true|read-only|Carrier status code|
|carrier_status_description|string|false|read-only|carrier status description|
|estimated_delivery_date|object|true|none|none|
|events|[[track_event](#schematrack_event)]|true|read-only|The events that have occured during the lifetime of this tracking number.|
|exception_description|string|false|read-only|Exception description|
|ship_date|object|false|none|none|
|status_code|object|true|none|none|
|status_description|string|false|read-only|Status description|
|tracking_number|object|true|none|none|
|tracking_url|string|true|read-only|Carrier Tracking Url, if available|

<h2 id="tocS_get_warehouse_by_id_response_body">get_warehouse_by_id_response_body</h2>
<!-- backwards compatibility -->
<a id="schemaget_warehouse_by_id_response_body"></a>
<a id="schema_get_warehouse_by_id_response_body"></a>
<a id="tocSget_warehouse_by_id_response_body"></a>
<a id="tocsget_warehouse_by_id_response_body"></a>

```json
{
  "created_at": "2019-06-25T18:12:35.583Z",
  "is_default": false,
  "name": "Zero Cool HQ",
  "origin_address": {
    "address_line1": "1999 Bishop Grandin Blvd.",
    "address_line2": "Unit 408",
    "address_line3": "Building #7",
    "address_residential_indicator": "no",
    "city_locality": "Winnipeg",
    "company_name": "The Home Depot",
    "country_code": {},
    "email": "example@example.com",
    "name": "John Doe",
    "phone": "+1 204-253-9411 ext. 123",
    "postal_code": {},
    "state_province": "Manitoba"
  },
  "return_address": {
    "address_line1": "1999 Bishop Grandin Blvd.",
    "address_line2": "Unit 408",
    "address_line3": "Building #7",
    "address_residential_indicator": "no",
    "city_locality": "Winnipeg",
    "company_name": "The Home Depot",
    "country_code": {},
    "email": "example@example.com",
    "name": "John Doe",
    "phone": "+1 204-253-9411 ext. 123",
    "postal_code": {},
    "state_province": "Manitoba"
  },
  "warehouse_id": {}
}
```

A get warehouse by id response body

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created_at|string(date-time)|true|read-only|Timestamp that indicates when the warehouse was created|
|is_default|boolean \| null|false|none|Designates which single warehouse is the default on the account|
|name|string|true|none|Name of the warehouse|
|origin_address|object|true|none|The origin address of the warehouse|
|return_address|object|true|none|The return address associated with the warehouse|
|warehouse_id|object|true|read-only|A string that uniquely identifies the warehouse|

<h2 id="tocS_get_webhook_by_id_response_body">get_webhook_by_id_response_body</h2>
<!-- backwards compatibility -->
<a id="schemaget_webhook_by_id_response_body"></a>
<a id="schema_get_webhook_by_id_response_body"></a>
<a id="tocSget_webhook_by_id_response_body"></a>
<a id="tocsget_webhook_by_id_response_body"></a>

```json
{
  "event": {},
  "url": "https://[YOUR ENDPOINT ID].x.requestbin.com",
  "webhook_id": {}
}
```

A get webhook id response body

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|event|object|true|none|none|
|url|object|true|none|The url that the webhook sends the request to|
|webhook_id|object|true|read-only|A string that uniquely identifies the webhook|

<h2 id="tocS_identifier_type">identifier_type</h2>
<!-- backwards compatibility -->
<a id="schemaidentifier_type"></a>
<a id="schema_identifier_type"></a>
<a id="tocSidentifier_type"></a>
<a id="tocsidentifier_type"></a>

```json
"vat"
```

Determines how FedEx will pickup your packages

|Pickup Type    | Description
|---------------|-----------------------------------------
|`vat`          | The tax identifier is a Value Added Tax.
|`eori`         | The tax identifier is an Economic Operators Registration and Identification Number (EORI).
|`ssn`          | The tax identifier is a Social Security Number.
|`ein`          | The tax identifier is an Employer Identification Number (EIN).
|`tin`          | The tax identifier is a Tax Identification Number (TIN).
|`ioss`         | The tax identifier is an Import One-Stop Shop (IOSS).
|`pan`          | The tax identifier is a Permanent Account Number (PAN).
|`voec`         | The tax identifier is a Norwegian VAT On E-Commerce(VOEC).

<h2 id="tocS_image_id">image_id</h2>
<!-- backwards compatibility -->
<a id="schemaimage_id"></a>
<a id="schema_image_id"></a>
<a id="tocSimage_id"></a>
<a id="tocsimage_id"></a>

```json
"img_DtBXupDBxREpHnwEXhTfgK"
```

Used to identify an image resource.

<h2 id="tocS_insurance_provider">insurance_provider</h2>
<!-- backwards compatibility -->
<a id="schemainsurance_provider"></a>
<a id="schema_insurance_provider"></a>
<a id="tocSinsurance_provider"></a>
<a id="tocsinsurance_provider"></a>

```json
"none"
```

The possible insurance provider values

<h2 id="tocS_international_shipment_options">international_shipment_options</h2>
<!-- backwards compatibility -->
<a id="schemainternational_shipment_options"></a>
<a id="schema_international_shipment_options"></a>
<a id="tocSinternational_shipment_options"></a>
<a id="tocsinternational_shipment_options"></a>

```json
{
  "contents": "merchandise",
  "customs_items": [],
  "non_delivery": "return_to_sender"
}
```

Options for international shipments, such as customs declarations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contents|object|true|none|The type of contents in this shipment.  This may impact import duties or customs treatment.|
|customs_items|[[customs_item](#schemacustoms_item)]|false|none|Customs declarations for each item in the shipment.|
|non_delivery|object|true|none|Indicates what to do if a package is unable to be delivered.|

<h2 id="tocS_label">label</h2>
<!-- backwards compatibility -->
<a id="schemalabel"></a>
<a id="schema_label"></a>
<a id="tocSlabel"></a>
<a id="tocslabel"></a>

```json
{
  "alternative_identifiers": [
    {
      "type": "last_mile_tracking_number",
      "value": "12345678912345678912"
    }
  ],
  "batch_id": {},
  "carrier_code": {},
  "carrier_id": {},
  "charge_event": {},
  "created_at": {},
  "display_scheme": "label",
  "form_download": {
    "href": {},
    "type": "string"
  },
  "insurance_claim": {
    "href": {},
    "type": "string"
  },
  "insurance_cost": {
    "amount": 0,
    "currency": {}
  },
  "is_international": true,
  "is_return_label": true,
  "label_download": {
    "href": {},
    "pdf": {},
    "png": {},
    "zpl": {}
  },
  "label_download_type": "url",
  "label_format": "pdf",
  "label_id": {},
  "label_image_id": {},
  "label_layout": "4x6",
  "outbound_label_id": {},
  "package_code": {},
  "packages": [
    {
      "content_description": "Hand knitted wool socks",
      "dimensions": {
        "height": 0,
        "length": 0,
        "unit": "inch",
        "width": 0
      },
      "external_package_id": "string",
      "form_download": {
        "href": {},
        "type": "string"
      },
      "insured_value": [
        {
          "amount": 0,
          "currency": "usd"
        }
      ],
      "label_download": {
        "href": {},
        "pdf": {},
        "png": {},
        "zpl": {}
      },
      "label_messages": {
        "reference1": null,
        "reference2": null,
        "reference3": null
      },
      "package_code": {},
      "package_id": {},
      "sequence": 0,
      "tracking_number": {},
      "weight": {
        "unit": {},
        "value": 0.1
      }
    }
  ],
  "rma_number": "string",
  "service_code": {},
  "ship_date": {},
  "shipment": {
    "advanced_options": {
      "bill_to_account": null,
      "bill_to_country_code": null,
      "bill_to_party": null,
      "bill_to_postal_code": null,
      "collect_on_delivery": {
        "payment_amount": {
          "amount": 0,
          "currency": {}
        },
        "payment_type": {}
      },
      "contains_alcohol": false,
      "custom_field1": null,
      "custom_field2": null,
      "custom_field3": null,
      "delivered_duty_paid": false,
      "dry_ice": false,
      "dry_ice_weight": {
        "unit": {},
        "value": 0.1
      },
      "fedex_freight": {
        "booking_confirmation": "string",
        "shipper_load_and_count": "string"
      },
      "freight_class": 77.5,
      "non_machinable": false,
      "origin_type": null,
      "saturday_delivery": false,
      "shipper_release": null,
      "third_party_consignee": false,
      "use_ups_ground_freight_pricing": null
    },
    "carrier_id": {},
    "confirmation": "none",
    "created_at": {},
    "customs": null,
    "external_order_id": "string",
    "external_shipment_id": "string",
    "insurance_provider": "none",
    "items": [],
    "modified_at": {},
    "order_source_code": {},
    "origin_type": {},
    "packages": [
      {
        "content_description": "Hand knitted wool socks",
        "dimensions": {
          "height": 0,
          "length": 0,
          "unit": "inch",
          "width": 0
        },
        "external_package_id": "string",
        "form_download": {
          "href": {},
          "type": "string"
        },
        "insured_value": [
          {
            "amount": 0,
            "currency": "usd"
          }
        ],
        "label_download": {
          "href": {},
          "pdf": {},
          "png": {},
          "zpl": {}
        },
        "label_messages": {
          "reference1": null,
          "reference2": null,
          "reference3": null
        },
        "package_code": {},
        "package_id": {},
        "sequence": 0,
        "tracking_number": {},
        "weight": {
          "unit": {},
          "value": 0.1
        }
      }
    ],
    "return_to": {
      "address_line1": "1999 Bishop Grandin Blvd.",
      "address_line2": "Unit 408",
      "address_line3": "Building #7",
      "address_residential_indicator": "no",
      "city_locality": "Winnipeg",
      "company_name": "The Home Depot",
      "country_code": {},
      "email": "example@example.com",
      "name": "John Doe",
      "phone": "+1 204-253-9411 ext. 123",
      "postal_code": {},
      "state_province": "Manitoba",
      "instructions": "string"
    },
    "service_code": {},
    "ship_date": {},
    "ship_from": {
      "address_line1": "1999 Bishop Grandin Blvd.",
      "address_line2": "Unit 408",
      "address_line3": "Building #7",
      "address_residential_indicator": "no",
      "city_locality": "Winnipeg",
      "company_name": "The Home Depot",
      "country_code": {},
      "email": "example@example.com",
      "name": "John Doe",
      "phone": "+1 204-253-9411 ext. 123",
      "postal_code": {},
      "state_province": "Manitoba",
      "instructions": "string"
    },
    "ship_to": {
      "address_line1": "1999 Bishop Grandin Blvd.",
      "address_line2": "Unit 408",
      "address_line3": "Building #7",
      "address_residential_indicator": "no",
      "city_locality": "Winnipeg",
      "company_name": "The Home Depot",
      "country_code": {},
      "email": "example@example.com",
      "name": "John Doe",
      "phone": "+1 204-253-9411 ext. 123",
      "postal_code": {},
      "state_province": "Manitoba",
      "instructions": "string"
    },
    "shipment_id": {},
    "shipment_number": "string",
    "shipment_status": "pending",
    "tags": [],
    "tax_identifiers": [
      {
        "identifier_type": {},
        "issuing_authority": "string",
        "taxable_entity_type": {},
        "value": "string"
      }
    ],
    "total_weight": {
      "unit": {},
      "value": 0.1
    },
    "warehouse_id": null
  },
  "shipment_cost": {
    "amount": 0,
    "currency": {}
  },
  "shipment_id": {},
  "status": {},
  "test_label": false,
  "trackable": true,
  "tracking_number": "782758401696",
  "tracking_status": {},
  "validate_address": "validate_and_clean",
  "voided": true,
  "voided_at": {}
}
```

A label represents the physical sticker that you affix to a package to ship it.  ShipEngine makes it easy for you to [create labels](https://www.shipengine.com/docs/labels/create-a-label/) and then download them in PDF, PNG, or ZPL format so you can print them.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alternative_identifiers|[[alternative_identifier](#schemaalternative_identifier)]|false|read-only|Additional information some carriers may provide by which to identify a given label in their system. <br>|
|batch_id|object|false|read-only|If this label was created as part of a [batch](https://www.shipengine.com/docs/labels/bulk/), then this is the unique ID of that batch.<br>|
|carrier_code|object|false|read-only|The [shipping carrier](https://www.shipengine.com/docs/carriers/setup/) who will ship the package, such as `fedex`, `dhl_express`, `stamps_com`, etc.<br>|
|carrier_id|object|false|read-only|The unique ID of the [carrier account](https://www.shipengine.com/docs/carriers/setup/) that was used to create this label<br>|
|charge_event|object|false|none|The label charge event.<br>|
|created_at|object|false|read-only|The date and time that the label was created in ShipEngine.|
|display_scheme|object|false|none|The display format that the label should be shown in.|
|form_download|object \| null|false|read-only|The link to download the customs form (a.k.a. commercial invoice) for this shipment, if any.  Forms are in PDF format. This field is null if the shipment does not require a customs form, or if the carrier does not support it.<br>|
|insurance_claim|object \| null|false|read-only|The link to submit an insurance claim for the shipment.  This field is null if the shipment is not insured or if the insurance provider does not support online claim submission.<br>|
|insurance_cost|object|false|read-only|The insurance cost for this package.  Add this to the `shipment_cost` field to get the total cost.<br>|
|is_international|boolean|false|read-only|Indicates whether this is an international shipment.  That is, the originating country and destination country are different.<br>|
|is_return_label|boolean|false|none|Indicates whether this is a return label.  You may also want to set the `rma_number` so you know what is being returned.<br>|
|label_download|object|false|read-only|none|
|label_download_type|object|false|write-only|none|
|label_format|object|false|none|The file format that you want the label to be in.  We recommend `pdf` format because it is supported by all carriers, whereas some carriers do not support the `png` or `zpl` formats.<br>|
|label_id|object|false|read-only|A string that uniquely identifies the label. This ID is generated by ShipEngine when the label is created.<br>|
|label_image_id|object \| null|false|none|The label image resource that was used to create a custom label image.|
|label_layout|object|false|none|The layout (size) that you want the label to be in.  The `label_format` determines which sizes are allowed.  `4x6` is supported for all label formats, whereas `letter` (8.5" x 11") is only supported for `pdf` format.<br>|
|outbound_label_id|object|false|write-only|The `label_id` of the original (outgoing) label that the return label is for. This associates the two labels together, which is<br>required by some carriers.<br>|
|package_code|object|false|read-only|The [package type](https://www.shipengine.com/docs/reference/list-carrier-packages/), such as `thick_envelope`, `small_flat_rate_box`, `large_package`, etc.  The code `package` indicates a custom or unknown package type.<br>|
|packages|[[package](#schemapackage)]|false|read-only|The label's package(s).<br><br>> **Note:** Some carriers only allow one package per label.  If you attempt to create a multi-package label for a carrier that doesn't allow it, an error will be returned.<br>|
|rma_number|string \| null|false|none|An optional Return Merchandise Authorization number.  This field is useful for return labels.  You can set it to any string value.<br>|
|service_code|object|false|read-only|The [carrier service](https://www.shipengine.com/docs/shipping/use-a-carrier-service/) used to ship the package, such as `fedex_ground`, `usps_first_class_mail`, `flat_rate_envelope`, etc.<br>|
|ship_date|object|false|read-only|The date that the package was (or will be) shippped.  ShipEngine will take the day of week into consideration. For example, if the carrier does not operate on Sundays, then a package that would have shipped on Sunday will ship on Monday instead.<br>|
|shipment|object|false|write-only|The shipment information used to generate the label|
|shipment_cost|object|false|read-only|The cost of shipping, delivery confirmation, and other carrier charges.  This amount **does not** include insurance costs.<br>|
|shipment_id|object|false|read-only|The shipment that this label is for.  ShipEngine can create a shipment for you automatically when you [create a label](https://www.shipengine.com/docs/labels/create-a-label/), or you can [create your own shipment](https://www.shipengine.com/docs/shipping/create-a-shipment/) and then [use it to print a label](https://www.shipengine.com/docs/labels/create-from-shipment/)<br>|
|status|object|false|read-only|none|
|test_label|boolean|false|write-only|**Deprecated.** Indicate if this label is being used only for testing purposes. If true, then no charge will be added to your account.|
|trackable|boolean|false|read-only|Indicates whether the shipment is trackable, in which case the `tracking_status` field will reflect the current status and each package will have a `tracking_number`.<br>|
|tracking_number|string|false|read-only|The tracking number for the package. Tracking number formats vary across carriers.|
|tracking_status|object|false|read-only|The current status of the package, such as `in_transit` or `delivered`|
|validate_address|object|false|write-only|none|
|voided|boolean|false|read-only|Indicates whether the label has been [voided](https://www.shipengine.com/docs/labels/voiding/)<br>|
|voided_at|object \| null|false|read-only|The date and time that the label was [voided](https://www.shipengine.com/docs/labels/voiding/), or `null` if the label has not been voided<br>|

<h2 id="tocS_label_charge_event">label_charge_event</h2>
<!-- backwards compatibility -->
<a id="schemalabel_charge_event"></a>
<a id="schema_label_charge_event"></a>
<a id="tocSlabel_charge_event"></a>
<a id="tocslabel_charge_event"></a>

```json
"carrier_default"
```

Determines when the user's account will be charged for the label.

<h2 id="tocS_label_download">label_download</h2>
<!-- backwards compatibility -->
<a id="schemalabel_download"></a>
<a id="schema_label_download"></a>
<a id="tocSlabel_download"></a>
<a id="tocslabel_download"></a>

```json
{
  "href": {},
  "pdf": {},
  "png": {},
  "zpl": {}
}
```

Reference to the various downloadable file formats for the generated label

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|href|object|false|none|The URL of the linked resource, if any|
|pdf|object|false|none|The URL for the pdf generated label|
|png|object|false|none|The URL for the png generated label|
|zpl|object|false|none|The URL for the zpl generated label|

<h2 id="tocS_label_download_type">label_download_type</h2>
<!-- backwards compatibility -->
<a id="schemalabel_download_type"></a>
<a id="schema_label_download_type"></a>
<a id="tocSlabel_download_type"></a>
<a id="tocslabel_download_type"></a>

```json
"url"
```

There are two different ways to [download a label](https://www.shipengine.com/docs/labels/downloading/):

|Label Download Type | Description
|--------------------|------------------------------
|`url`               |You will receive a URL, which you can use to download the label in a separate request. The URL will remain valid for 90 days.<br><br>This is the default if `label_download_type` is unspecified.
|`inline`            |You will receive the Base64-encoded label as part of the response. No need for a second request to download the label.

<h2 id="tocS_label_format">label_format</h2>
<!-- backwards compatibility -->
<a id="schemalabel_format"></a>
<a id="schema_label_format"></a>
<a id="tocSlabel_format"></a>
<a id="tocslabel_format"></a>

```json
"pdf"
```

The possible file formats in which shipping labels can be downloaded.  We recommend `pdf` format because it is supported by all carriers, whereas some carriers do not support the `png` or `zpl` formats.

|Label Format  | Supported Carriers
|--------------|-----------------------------------
|`pdf`         | All carriers
|`png`         | `fedex` <br> `stamps_com` <br> `ups` <br> `usps`
|`zpl`         | `access_worldwide` <br> `apc` <br> `asendia` <br> `dhl_global_mail` <br> `dhl_express` <br> `dhl_express_australia` <br> `dhl_express_canada` <br> `dhl_express_worldwide` <br> `dhl_express_uk` <br> `dpd` <br> `endicia` <br> `fedex` <br> `fedex_uk` <br> `firstmile` <br> `imex` <br> `newgistics` <br> `ontrac` <br> `rr_donnelley` <br> `stamps_com` <br> `ups` <br> `usps`

<h2 id="tocS_label_layout">label_layout</h2>
<!-- backwards compatibility -->
<a id="schemalabel_layout"></a>
<a id="schema_label_layout"></a>
<a id="tocSlabel_layout"></a>
<a id="tocslabel_layout"></a>

```json
"4x6"
```

The available layouts (sizes) in which shipping labels can be downloaded.  The label format determines which sizes are supported.  `4x6` is supported for all label formats, whereas `letter` (8.5" x 11") is only supported for `pdf` format.

<h2 id="tocS_label_messages">label_messages</h2>
<!-- backwards compatibility -->
<a id="schemalabel_messages"></a>
<a id="schema_label_messages"></a>
<a id="tocSlabel_messages"></a>
<a id="tocslabel_messages"></a>

```json
{
  "reference1": null,
  "reference2": null,
  "reference3": null
}
```

Custom messages to print on the shipping label for the package.  These are typically used to print invoice numbers, product numbers, or other internal reference numbers.  Not all carriers support label messages. The number of lines and the maximum length of each line also varies by carrier.

|Carrier            |Max lines |Max line length
|-------------------|----------|--------------------
|USPS (Stamps.com)  |3         |60
|FedEx              |3         |35 for the first line. 30 for additional lines.
|UPS                |2         |35
|OnTrac             |2         |25

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reference1|string \| null|true|none|The first line of the custom label message.  Some carriers may prefix this line with something like "REF", "Reference", "Trx Ref No.", etc.<br>|
|reference2|string \| null|true|none|The second line of the custom label message.  Some carriers may prefix this line with something like "INV", "Reference 2", "Trx Ref No.", etc.<br>|
|reference3|string \| null|true|none|The third line of the custom label message.  Some carriers may prefix this line with something like "PO", "Reference 3", etc.<br>|

<h2 id="tocS_label_status">label_status</h2>
<!-- backwards compatibility -->
<a id="schemalabel_status"></a>
<a id="schema_label_status"></a>
<a id="tocSlabel_status"></a>
<a id="tocslabel_status"></a>

```json
"processing"
```

The possible statuses that a [shipping label](https://www.shipengine.com/docs/labels/create-a-label/) can be in.

|Status       |Description
|:------------|:-----------------------------------------------------
|`processing` |When labels are created in a [batch](https://www.shipengine.com/docs/labels/bulk/), it may take a few minutes for all of the labels in the batch to be created.  During this period, they will be in `processing` status.
|`completed`  |The label was successfully created
|`error`      |The label could not be created due to an error, such as an invalid delivery address
|`voided`     |The label has been [voided](https://www.shipengine.com/docs/labels/voiding/)

<h2 id="tocS_link">link</h2>
<!-- backwards compatibility -->
<a id="schemalink"></a>
<a id="schema_link"></a>
<a id="tocSlink"></a>
<a id="tocslink"></a>

```json
{
  "href": {},
  "type": "string"
}
```

A link to a related resource

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|href|object|true|none|The URL of the linked resource, if any|
|type|string|false|none|The type of resource, or the type of relationship to the parent resource|

<h2 id="tocS_list_batch_errors_response_body">list_batch_errors_response_body</h2>
<!-- backwards compatibility -->
<a id="schemalist_batch_errors_response_body"></a>
<a id="schema_list_batch_errors_response_body"></a>
<a id="tocSlist_batch_errors_response_body"></a>
<a id="tocslist_batch_errors_response_body"></a>

```json
{
  "errors": [],
  "links": {
    "first": {
      "href": {},
      "type": "string"
    },
    "last": {
      "href": {},
      "type": "string"
    },
    "next": {
      "href": {},
      "type": "string"
    },
    "prev": {
      "href": {},
      "type": "string"
    }
  }
}
```

A batch errors response body

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[batch_response_error](#schemabatch_response_error)]|true|read-only|The errors currently associated with the batch|
|links|object|true|read-only|none|

<h2 id="tocS_list_batches_response_body">list_batches_response_body</h2>
<!-- backwards compatibility -->
<a id="schemalist_batches_response_body"></a>
<a id="schema_list_batches_response_body"></a>
<a id="tocSlist_batches_response_body"></a>
<a id="tocslist_batches_response_body"></a>

```json
{
  "batches": [
    {
      "batch_errors_url": {
        "href": {},
        "type": "string"
      },
      "batch_id": {},
      "batch_labels_url": {
        "href": {},
        "type": "string"
      },
      "batch_notes": "Batch for morning shipment",
      "batch_number": "string",
      "batch_shipments_url": {
        "href": {},
        "type": "string"
      },
      "completed": 1,
      "count": 2,
      "created_at": {},
      "errors": 2,
      "external_batch_id": "string",
      "form_download": {
        "href": {},
        "type": "string"
      },
      "forms": 3,
      "label_download": {
        "href": {},
        "pdf": {},
        "png": {},
        "zpl": {}
      },
      "label_format": "pdf",
      "label_layout": "4x6",
      "processed_at": {},
      "status": {},
      "warnings": 1
    }
  ],
  "links": {
    "first": {
      "href": {},
      "type": "string"
    },
    "last": {
      "href": {},
      "type": "string"
    },
    "next": {
      "href": {},
      "type": "string"
    },
    "prev": {
      "href": {},
      "type": "string"
    }
  },
  "page": 1,
  "pages": 10,
  "total": 10
}
```

A list batch response body

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|batches|[object]|true|read-only|Batch List|
|links|object|true|read-only|none|
|page|integer(int32)|true|read-only|The page that is currently being read|
|pages|integer(int32)|true|read-only|The total number of batch pages the API call returned|
|total|integer(int64)|true|read-only|The total number of batches the API call returned|

<h2 id="tocS_list_carrier_package_types_response_body">list_carrier_package_types_response_body</h2>
<!-- backwards compatibility -->
<a id="schemalist_carrier_package_types_response_body"></a>
<a id="schema_list_carrier_package_types_response_body"></a>
<a id="tocSlist_carrier_package_types_response_body"></a>
<a id="tocslist_carrier_package_types_response_body"></a>

```json
{
  "packages": [
    {
      "description": "Packaging for laptops",
      "dimensions": {
        "height": 0,
        "length": 0,
        "unit": "inch",
        "width": 0
      },
      "name": "laptop_box",
      "package_code": {},
      "package_id": {}
    }
  ]
}
```

A list carrier package types response body

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|packages|[object]|false|read-only|An array of custom package types|

<h2 id="tocS_list_carrier_services_response_body">list_carrier_services_response_body</h2>
<!-- backwards compatibility -->
<a id="schemalist_carrier_services_response_body"></a>
<a id="schema_list_carrier_services_response_body"></a>
<a id="tocSlist_carrier_services_response_body"></a>
<a id="tocslist_carrier_services_response_body"></a>

```json
{
  "services": [
    {
      "carrier_code": {},
      "carrier_id": {},
      "domestic": true,
      "international": true,
      "is_multi_package_supported": true,
      "name": "USPS First Class Mail",
      "service_code": "usps_media_mail"
    }
  ]
}
```

A carrier list services response body

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|services|[object]|false|read-only|An array of services associated with the carrier|

<h2 id="tocS_list_carriers_response_body">list_carriers_response_body</h2>
<!-- backwards compatibility -->
<a id="schemalist_carriers_response_body"></a>
<a id="schema_list_carriers_response_body"></a>
<a id="tocSlist_carriers_response_body"></a>
<a id="tocslist_carriers_response_body"></a>

```json
{
  "carriers": [
    {
      "account_number": "account_570827",
      "balance": 3799.52,
      "carrier_code": {},
      "carrier_id": {},
      "friendly_name": "Stamps.com",
      "has_multi_package_supporting_services": true,
      "nickname": "ShipEngine Account - Stamps.com",
      "options": [
        {
          "default_value": false,
          "description": "string",
          "name": "contains_alcohol"
        }
      ],
      "packages": [
        {
          "description": "Packaging for laptops",
          "dimensions": {
            "height": 0,
            "length": 0,
            "unit": "inch",
            "width": 0
          },
          "name": "laptop_box",
          "package_code": {},
          "package_id": {}
        }
      ],
      "primary": true,
      "requires_funded_amount": true,
      "services": [
        {
          "carrier_code": {},
          "carrier_id": {},
          "domestic": true,
          "international": true,
          "is_multi_package_supported": true,
          "name": "USPS First Class Mail",
          "service_code": "usps_media_mail"
        }
      ],
      "supports_label_messages": true
    }
  ]
}
```

A carrier list response body

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|carriers|[object]|true|read-only|The carrier response body|

<h2 id="tocS_list_labels_response_body">list_labels_response_body</h2>
<!-- backwards compatibility -->
<a id="schemalist_labels_response_body"></a>
<a id="schema_list_labels_response_body"></a>
<a id="tocSlist_labels_response_body"></a>
<a id="tocslist_labels_response_body"></a>

```json
{
  "links": {
    "first": {
      "href": {},
      "type": "string"
    },
    "last": {
      "href": {},
      "type": "string"
    },
    "next": {
      "href": {},
      "type": "string"
    },
    "prev": {
      "href": {},
      "type": "string"
    }
  },
  "page": 1,
  "pages": 4,
  "total": 2750,
  "labels": [
    {
      "alternative_identifiers": [
        {
          "type": "last_mile_tracking_number",
          "value": "12345678912345678912"
        }
      ],
      "batch_id": {},
      "carrier_code": {},
      "carrier_id": {},
      "charge_event": {},
      "created_at": {},
      "display_scheme": "label",
      "form_download": {
        "href": {},
        "type": "string"
      },
      "insurance_claim": {
        "href": {},
        "type": "string"
      },
      "insurance_cost": {
        "amount": 0,
        "currency": {}
      },
      "is_international": true,
      "is_return_label": true,
      "label_download": {
        "href": {},
        "pdf": {},
        "png": {},
        "zpl": {}
      },
      "label_download_type": "url",
      "label_format": "pdf",
      "label_id": {},
      "label_image_id": {},
      "label_layout": "4x6",
      "outbound_label_id": {},
      "package_code": {},
      "packages": [
        {
          "content_description": "Hand knitted wool socks",
          "dimensions": {
            "height": 0,
            "length": 0,
            "unit": "inch",
            "width": 0
          },
          "external_package_id": "string",
          "form_download": {
            "href": {},
            "type": "string"
          },
          "insured_value": [
            {
              "amount": 0,
              "currency": "usd"
            }
          ],
          "label_download": {
            "href": {},
            "pdf": {},
            "png": {},
            "zpl": {}
          },
          "label_messages": {
            "reference1": null,
            "reference2": null,
            "reference3": null
          },
          "package_code": {},
          "package_id": {},
          "sequence": 0,
          "tracking_number": {},
          "weight": {
            "unit": {},
            "value": 0.1
          }
        }
      ],
      "rma_number": "string",
      "service_code": {},
      "ship_date": {},
      "shipment": {
        "advanced_options": {
          "bill_to_account": null,
          "bill_to_country_code": null,
          "bill_to_party": null,
          "bill_to_postal_code": null,
          "collect_on_delivery": {
            "payment_amount": {
              "amount": 0,
              "currency": {}
            },
            "payment_type": {}
          },
          "contains_alcohol": false,
          "custom_field1": null,
          "custom_field2": null,
          "custom_field3": null,
          "delivered_duty_paid": false,
          "dry_ice": false,
          "dry_ice_weight": {
            "unit": {},
            "value": 0.1
          },
          "fedex_freight": {
            "booking_confirmation": "string",
            "shipper_load_and_count": "string"
          },
          "freight_class": 77.5,
          "non_machinable": false,
          "origin_type": null,
          "saturday_delivery": false,
          "shipper_release": null,
          "third_party_consignee": false,
          "use_ups_ground_freight_pricing": null
        },
        "carrier_id": {},
        "confirmation": "none",
        "created_at": {},
        "customs": null,
        "external_order_id": "string",
        "external_shipment_id": "string",
        "insurance_provider": "none",
        "items": [],
        "modified_at": {},
        "order_source_code": {},
        "origin_type": {},
        "packages": [
          {
            "content_description": "Hand knitted wool socks",
            "dimensions": {
              "height": 0,
              "length": 0,
              "unit": "inch",
              "width": 0
            },
            "external_package_id": "string",
            "form_download": {
              "href": {},
              "type": "string"
            },
            "insured_value": [
              {
                "amount": 0,
                "currency": "usd"
              }
            ],
            "label_download": {
              "href": {},
              "pdf": {},
              "png": {},
              "zpl": {}
            },
            "label_messages": {
              "reference1": null,
              "reference2": null,
              "reference3": null
            },
            "package_code": {},
            "package_id": {},
            "sequence": 0,
            "tracking_number": {},
            "weight": {
              "unit": {},
              "value": 0.1
            }
          }
        ],
        "return_to": {
          "address_line1": "1999 Bishop Grandin Blvd.",
          "address_line2": "Unit 408",
          "address_line3": "Building #7",
          "address_residential_indicator": "no",
          "city_locality": "Winnipeg",
          "company_name": "The Home Depot",
          "country_code": {},
          "email": "example@example.com",
          "name": "John Doe",
          "phone": "+1 204-253-9411 ext. 123",
          "postal_code": {},
          "state_province": "Manitoba",
          "instructions": "string"
        },
        "service_code": {},
        "ship_date": {},
        "ship_from": {
          "address_line1": "1999 Bishop Grandin Blvd.",
          "address_line2": "Unit 408",
          "address_line3": "Building #7",
          "address_residential_indicator": "no",
          "city_locality": "Winnipeg",
          "company_name": "The Home Depot",
          "country_code": {},
          "email": "example@example.com",
          "name": "John Doe",
          "phone": "+1 204-253-9411 ext. 123",
          "postal_code": {},
          "state_province": "Manitoba",
          "instructions": "string"
        },
        "ship_to": {
          "address_line1": "1999 Bishop Grandin Blvd.",
          "address_line2": "Unit 408",
          "address_line3": "Building #7",
          "address_residential_indicator": "no",
          "city_locality": "Winnipeg",
          "company_name": "The Home Depot",
          "country_code": {},
          "email": "example@example.com",
          "name": "John Doe",
          "phone": "+1 204-253-9411 ext. 123",
          "postal_code": {},
          "state_province": "Manitoba",
          "instructions": "string"
        },
        "shipment_id": {},
        "shipment_number": "string",
        "shipment_status": "pending",
        "tags": [],
        "tax_identifiers": [
          {
            "identifier_type": {},
            "issuing_authority": "string",
            "taxable_entity_type": {},
            "value": "string"
          }
        ],
        "total_weight": {
          "unit": {},
          "value": 0.1
        },
        "warehouse_id": null
      },
      "shipment_cost": {
        "amount": 0,
        "currency": {}
      },
      "shipment_id": {},
      "status": {},
      "test_label": false,
      "trackable": true,
      "tracking_number": "782758401696",
      "tracking_status": {},
      "validate_address": "validate_and_clean",
      "voided": true,
      "voided_at": {}
    }
  ]
}
```

A list label response body

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|links|object|true|none|none|
|page|integer|true|none|The current page number of results.  For example, if there are 80 results, and the page size is 25, then `page` could be 1, 2, 3, or 4.  The first three pages would contain 25 items each, and the fourth page would contain the five remaining items.|
|pages|integer|true|none|The total number of pages of results.  For example, if there are 80 results, and the page size is 25, then `pages` would be 4.  The first three pages would contain 25 items each, and the fourth page would contain the five remaining items.  If there are no results, then `pages` will be zero.|
|total|integer|true|none|The total number of items across all pages of results|
|labels|[object]|true|none|The labels that matched the query criteria.  If no matching labels were found, then this array is empty; otherwise, it contains one page of results.  The last page of results may have fewer labels than the `page_size`.<br>|

<h2 id="tocS_list_manifests_response_body">list_manifests_response_body</h2>
<!-- backwards compatibility -->
<a id="schemalist_manifests_response_body"></a>
<a id="schema_list_manifests_response_body"></a>
<a id="tocSlist_manifests_response_body"></a>
<a id="tocslist_manifests_response_body"></a>

```json
{
  "links": {
    "first": {
      "href": {},
      "type": "string"
    },
    "last": {
      "href": {},
      "type": "string"
    },
    "next": {
      "href": {},
      "type": "string"
    },
    "prev": {
      "href": {},
      "type": "string"
    }
  },
  "manifests": [],
  "page": 3,
  "pages": 4,
  "total": 3
}
```

A list manifests response body

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|links|object|true|read-only|Helpful links to other pages of results|
|manifests|[object]|true|read-only|The list of available manifests|
|page|integer(int32)|true|read-only|Current page of the list manifests results|
|pages|integer(int32)|true|read-only|Total number of pages for list manifests results|
|total|integer(int64)|true|read-only|The total number of manifests returned|

<h2 id="tocS_list_package_types_response_body">list_package_types_response_body</h2>
<!-- backwards compatibility -->
<a id="schemalist_package_types_response_body"></a>
<a id="schema_list_package_types_response_body"></a>
<a id="tocSlist_package_types_response_body"></a>
<a id="tocslist_package_types_response_body"></a>

```json
{
  "packages": [
    {
      "description": "Packaging for laptops",
      "dimensions": {
        "height": 0,
        "length": 0,
        "unit": "inch",
        "width": 0
      },
      "name": "laptop_box",
      "package_code": {},
      "package_id": {}
    }
  ]
}
```

A list package types response body

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|packages|[object]|false|read-only|An array of custom package types|

<h2 id="tocS_list_pickup_response_body">list_pickup_response_body</h2>
<!-- backwards compatibility -->
<a id="schemalist_pickup_response_body"></a>
<a id="schema_list_pickup_response_body"></a>
<a id="tocSlist_pickup_response_body"></a>
<a id="tocslist_pickup_response_body"></a>

```json
{
  "links": {
    "first": {
      "href": {},
      "type": "string"
    },
    "last": {
      "href": {},
      "type": "string"
    },
    "next": {
      "href": {},
      "type": "string"
    },
    "prev": {
      "href": {},
      "type": "string"
    }
  },
  "page": 3,
  "pages": 4,
  "pickups": [
    {
      "cancelled_at": {},
      "carrier_id": {},
      "confirmation_number": "292513CL4A3",
      "contact_details": {
        "email": {},
        "name": "string",
        "phone": "strings"
      },
      "created_at": {},
      "label_ids": [
        {}
      ],
      "pickup_address": {
        "address_line1": "1999 Bishop Grandin Blvd.",
        "address_line2": "Unit 408",
        "address_line3": "Building #7",
        "address_residential_indicator": "no",
        "city_locality": "Winnipeg",
        "company_name": "The Home Depot",
        "country_code": {},
        "email": "example@example.com",
        "name": "John Doe",
        "phone": "+1 204-253-9411 ext. 123",
        "postal_code": {},
        "state_province": "Manitoba"
      },
      "pickup_id": {},
      "pickup_notes": "string",
      "pickup_window": {
        "end_at": {},
        "start_at": {}
      },
      "pickup_windows": [
        {
          "end_at": {},
          "start_at": {}
        }
      ],
      "warehouse_id": {}
    }
  ],
  "total": 3
}
```

A list pickup response body

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|links|object|true|read-only|Helpful links to other pages of results|
|page|integer(int32)|true|read-only|Current page of the list pickups results|
|pages|integer(int32)|true|read-only|Total number of pages for list pickups results|
|pickups|[object]|true|none|An array of pickups associated with the user's account.|
|total|integer(int64)|true|read-only|The total number of pickups returned|

<h2 id="tocS_list_service_points_response_body">list_service_points_response_body</h2>
<!-- backwards compatibility -->
<a id="schemalist_service_points_response_body"></a>
<a id="schema_list_service_points_response_body"></a>
<a id="tocSlist_service_points_response_body"></a>
<a id="tocslist_service_points_response_body"></a>

```json
{
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "lat": 48.842608,
  "long": 0.032875,
  "service_points": [
    {
      "address_line1": "PLACE DU CANADA",
      "carrier_code": "chronopost",
      "city_locality": "TRUN",
      "company_name": "My fancy company name",
      "country_code": "FR",
      "distance_in_meters": 728.9959308847579,
      "features": [
        "drop_off_point"
      ],
      "hours_of_operation": {
        "friday": [
          {
            "close": "12:00",
            "open": "09:15"
          }
        ],
        "monday": [
          {
            "close": "12:00",
            "open": "09:15"
          }
        ],
        "saturday": [
          {
            "close": "12:00",
            "open": "09:15"
          }
        ],
        "sunday": [
          {
            "close": "12:00",
            "open": "09:15"
          }
        ],
        "thursday": [
          {
            "close": "12:00",
            "open": "09:15"
          }
        ],
        "tuesday": [
          {
            "close": "12:00",
            "open": "09:15"
          }
        ],
        "wednesday": [
          {
            "close": "12:00",
            "open": "09:15"
          }
        ]
      },
      "lat": 48.842608,
      "long": 0.032875,
      "phone_number": "555-555-5555",
      "postal_code": "61160",
      "service_codes": [
        "chronoclassic"
      ],
      "service_point_id": "614940",
      "state_province": "TRUN"
    }
  ]
}
```

A list service points response body

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[object]|false|read-only|The errors associated with the failed API call|
|lat|number(double)|false|none|none|
|long|number(double)|false|none|none|
|service_points|[object]|false|none|none|

<h2 id="tocS_list_shipment_rates_response_body">list_shipment_rates_response_body</h2>
<!-- backwards compatibility -->
<a id="schemalist_shipment_rates_response_body"></a>
<a id="schema_list_shipment_rates_response_body"></a>
<a id="tocSlist_shipment_rates_response_body"></a>
<a id="tocslist_shipment_rates_response_body"></a>

```json
{
  "created_at": {},
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "invalid_rates": [],
  "rate_request_id": {},
  "rates": [
    {
      "carrier_code": "string",
      "carrier_delivery_days": "string",
      "carrier_friendly_name": "string",
      "carrier_id": {},
      "carrier_nickname": "string",
      "confirmation_amount": {
        "amount": 0,
        "currency": {}
      },
      "delivery_days": 5,
      "error_messages": [
        "string"
      ],
      "estimated_delivery_date": {},
      "guaranteed_service": true,
      "insurance_amount": {
        "amount": 0,
        "currency": {}
      },
      "negotiated_rate": true,
      "other_amount": {
        "amount": 0,
        "currency": {}
      },
      "package_type": "package",
      "rate_id": {},
      "rate_type": {},
      "service_code": "string",
      "service_type": "string",
      "ship_date": "1970-01-01T00:00:00Z",
      "shipping_amount": {
        "amount": 0,
        "currency": {}
      },
      "tax_amount": {
        "amount": 0,
        "currency": {}
      },
      "trackable": true,
      "validation_status": {},
      "warning_messages": [
        "string"
      ],
      "zone": 6
    }
  ],
  "shipment_id": {},
  "status": {}
}
```

A list shipment rates response body

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created_at|string(date-time)|true|none|When the rate was created|
|errors|[object]|true|none|none|
|invalid_rates|[object]|true|read-only|An array of invalid shipment rates|
|rate_request_id|object|true|read-only|A string that uniquely identifies the rate request|
|rates|[object]|true|read-only|An array of shipment rates|
|shipment_id|object|true|read-only|A string that uniquely identifies the shipment|
|status|object|true|read-only|none|

<h2 id="tocS_list_shipments_response_body">list_shipments_response_body</h2>
<!-- backwards compatibility -->
<a id="schemalist_shipments_response_body"></a>
<a id="schema_list_shipments_response_body"></a>
<a id="tocSlist_shipments_response_body"></a>
<a id="tocslist_shipments_response_body"></a>

```json
{
  "links": {
    "first": {
      "href": {},
      "type": "string"
    },
    "last": {
      "href": {},
      "type": "string"
    },
    "next": {
      "href": {},
      "type": "string"
    },
    "prev": {
      "href": {},
      "type": "string"
    }
  },
  "page": "????",
  "pages": 1,
  "shipments": [
    {
      "advanced_options": {
        "bill_to_account": null,
        "bill_to_country_code": null,
        "bill_to_party": null,
        "bill_to_postal_code": null,
        "collect_on_delivery": {
          "payment_amount": {
            "amount": 0,
            "currency": {}
          },
          "payment_type": {}
        },
        "contains_alcohol": false,
        "custom_field1": null,
        "custom_field2": null,
        "custom_field3": null,
        "delivered_duty_paid": false,
        "dry_ice": false,
        "dry_ice_weight": {
          "unit": {},
          "value": 0.1
        },
        "fedex_freight": {
          "booking_confirmation": "string",
          "shipper_load_and_count": "string"
        },
        "freight_class": 77.5,
        "non_machinable": false,
        "origin_type": null,
        "saturday_delivery": false,
        "shipper_release": null,
        "third_party_consignee": false,
        "use_ups_ground_freight_pricing": null
      },
      "carrier_id": {},
      "confirmation": "none",
      "created_at": {},
      "customs": null,
      "external_order_id": "string",
      "external_shipment_id": "string",
      "insurance_provider": "none",
      "items": [],
      "modified_at": {},
      "order_source_code": {},
      "origin_type": {},
      "packages": [
        {
          "content_description": "Hand knitted wool socks",
          "dimensions": {
            "height": 0,
            "length": 0,
            "unit": "inch",
            "width": 0
          },
          "external_package_id": "string",
          "form_download": {
            "href": {},
            "type": "string"
          },
          "insured_value": [
            {
              "amount": 0,
              "currency": "usd"
            }
          ],
          "label_download": {
            "href": {},
            "pdf": {},
            "png": {},
            "zpl": {}
          },
          "label_messages": {
            "reference1": null,
            "reference2": null,
            "reference3": null
          },
          "package_code": {},
          "package_id": {},
          "sequence": 0,
          "tracking_number": {},
          "weight": {
            "unit": {},
            "value": 0.1
          }
        }
      ],
      "return_to": {
        "address_line1": "1999 Bishop Grandin Blvd.",
        "address_line2": "Unit 408",
        "address_line3": "Building #7",
        "address_residential_indicator": "no",
        "city_locality": "Winnipeg",
        "company_name": "The Home Depot",
        "country_code": {},
        "email": "example@example.com",
        "name": "John Doe",
        "phone": "+1 204-253-9411 ext. 123",
        "postal_code": {},
        "state_province": "Manitoba",
        "instructions": "string"
      },
      "service_code": {},
      "ship_date": {},
      "ship_from": {
        "address_line1": "1999 Bishop Grandin Blvd.",
        "address_line2": "Unit 408",
        "address_line3": "Building #7",
        "address_residential_indicator": "no",
        "city_locality": "Winnipeg",
        "company_name": "The Home Depot",
        "country_code": {},
        "email": "example@example.com",
        "name": "John Doe",
        "phone": "+1 204-253-9411 ext. 123",
        "postal_code": {},
        "state_province": "Manitoba",
        "instructions": "string"
      },
      "ship_to": {
        "address_line1": "1999 Bishop Grandin Blvd.",
        "address_line2": "Unit 408",
        "address_line3": "Building #7",
        "address_residential_indicator": "no",
        "city_locality": "Winnipeg",
        "company_name": "The Home Depot",
        "country_code": {},
        "email": "example@example.com",
        "name": "John Doe",
        "phone": "+1 204-253-9411 ext. 123",
        "postal_code": {},
        "state_province": "Manitoba",
        "instructions": "string"
      },
      "shipment_id": {},
      "shipment_number": "string",
      "shipment_status": "pending",
      "tags": [],
      "tax_identifiers": [
        {
          "identifier_type": {},
          "issuing_authority": "string",
          "taxable_entity_type": {},
          "value": "string"
        }
      ],
      "total_weight": {
        "unit": {},
        "value": 0.1
      },
      "warehouse_id": null
    }
  ],
  "total": 1990
}
```

A list shipment response body

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|links|object|true|read-only|none|
|page|integer(int32)|true|read-only|none|
|pages|integer(int32)|true|read-only|none|
|shipments|[object]|true|read-only|The list of shipments returned by the api call|
|total|integer(int64)|true|read-only|Total number of shipments returned by the api call|

<h2 id="tocS_list_tags_response_body">list_tags_response_body</h2>
<!-- backwards compatibility -->
<a id="schemalist_tags_response_body"></a>
<a id="schema_list_tags_response_body"></a>
<a id="tocSlist_tags_response_body"></a>
<a id="tocslist_tags_response_body"></a>

```json
{
  "tags": [
    {
      "name": "Fragile"
    }
  ]
}
```

Response body from a successful GET /tags API call

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tags|[object]|false|none|The array of tags returned by the API call|

<h2 id="tocS_list_warehouses_response_body">list_warehouses_response_body</h2>
<!-- backwards compatibility -->
<a id="schemalist_warehouses_response_body"></a>
<a id="schema_list_warehouses_response_body"></a>
<a id="tocSlist_warehouses_response_body"></a>
<a id="tocslist_warehouses_response_body"></a>

```json
{
  "warehouses": [
    {
      "created_at": "2019-06-25T18:12:35.583Z",
      "is_default": false,
      "name": "Zero Cool HQ",
      "origin_address": {
        "address_line1": "1999 Bishop Grandin Blvd.",
        "address_line2": "Unit 408",
        "address_line3": "Building #7",
        "address_residential_indicator": "no",
        "city_locality": "Winnipeg",
        "company_name": "The Home Depot",
        "country_code": {},
        "email": "example@example.com",
        "name": "John Doe",
        "phone": "+1 204-253-9411 ext. 123",
        "postal_code": {},
        "state_province": "Manitoba"
      },
      "return_address": {
        "address_line1": "1999 Bishop Grandin Blvd.",
        "address_line2": "Unit 408",
        "address_line3": "Building #7",
        "address_residential_indicator": "no",
        "city_locality": "Winnipeg",
        "company_name": "The Home Depot",
        "country_code": {},
        "email": "example@example.com",
        "name": "John Doe",
        "phone": "+1 204-253-9411 ext. 123",
        "postal_code": {},
        "state_province": "Manitoba"
      },
      "warehouse_id": {}
    }
  ]
}
```

A warehouse list response body

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|warehouses|[object]|true|read-only|The array of warehouses returned by the API call|

<h2 id="tocS_list_webhooks_response_body">list_webhooks_response_body</h2>
<!-- backwards compatibility -->
<a id="schemalist_webhooks_response_body"></a>
<a id="schema_list_webhooks_response_body"></a>
<a id="tocSlist_webhooks_response_body"></a>
<a id="tocslist_webhooks_response_body"></a>

```json
[
  {
    "event": {},
    "url": "https://[YOUR ENDPOINT ID].x.requestbin.com",
    "webhook_id": {}
  }
]
```

A webhook list response body

<h2 id="tocS_manifest">manifest</h2>
<!-- backwards compatibility -->
<a id="schemamanifest"></a>
<a id="schema_manifest"></a>
<a id="tocSmanifest"></a>
<a id="tocsmanifest"></a>

```json
{
  "carrier_id": {},
  "created_at": "2019-07-12T13:37:39.050Z",
  "form_id": {},
  "label_ids": [
    {}
  ],
  "manifest_download": {
    "href": {}
  },
  "manifest_id": {},
  "ship_date": "2019-07-12T13:37:39.050Z",
  "shipments": 100,
  "submission_id": "9475711899564878915476",
  "warehouse_id": {}
}
```

Used for combining packages into one scannable form that a carrier can use when picking up a large 
number of shipments

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|carrier_id|object|false|read-only|A string that uniquely identifies the carrier|
|created_at|string(date-time)|false|read-only|The date-time that the manifest was created|
|form_id|object|false|read-only|A string that uniquely identifies the form|
|label_ids|[object]|false|read-only|An array of the label ids used in this manifest.|
|manifest_download|object|false|read-only|none|
|manifest_id|object|false|read-only|A string that uniquely identifies the manifest|
|ship_date|string(date-time)|false|read-only|The date-time that the manifests shipments will be picked up|
|shipments|integer(int32)|false|read-only|The number of shipments that are included in this manifest|
|submission_id|string|false|read-only|A string that uniquely identifies the submission|
|warehouse_id|object|false|read-only|A string that uniquely identifies the warehouse|

<h2 id="tocS_manifest_download">manifest_download</h2>
<!-- backwards compatibility -->
<a id="schemamanifest_download"></a>
<a id="schema_manifest_download"></a>
<a id="tocSmanifest_download"></a>
<a id="tocsmanifest_download"></a>

```json
{
  "href": {}
}
```

Object containing the href link to download the manifest file

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|href|object|false|none|The URL of the linked resource, if any|

<h2 id="tocS_manifest_request">manifest_request</h2>
<!-- backwards compatibility -->
<a id="schemamanifest_request"></a>
<a id="schema_manifest_request"></a>
<a id="tocSmanifest_request"></a>
<a id="tocsmanifest_request"></a>

```json
{
  "manifest_request_id": {},
  "status": {}
}
```

A reference to the manifest request

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|manifest_request_id|object|false|read-only|A string that uniquely identifies a manifest request|
|status|object|false|none|none|

<h2 id="tocS_manifest_request_status">manifest_request_status</h2>
<!-- backwards compatibility -->
<a id="schemamanifest_request_status"></a>
<a id="schema_manifest_request_status"></a>
<a id="tocSmanifest_request_status"></a>
<a id="tocsmanifest_request_status"></a>

```json
"in_progress"
```

The possible statuses of a manifest request

<h2 id="tocS_manifests">manifests</h2>
<!-- backwards compatibility -->
<a id="schemamanifests"></a>
<a id="schema_manifests"></a>
<a id="tocSmanifests"></a>
<a id="tocsmanifests"></a>

```json
{
  "manifests": [
    {
      "carrier_id": {},
      "created_at": "2019-07-12T13:37:39.050Z",
      "form_id": {},
      "label_ids": [
        {}
      ],
      "manifest_download": {
        "href": {}
      },
      "manifest_id": {},
      "ship_date": "2019-07-12T13:37:39.050Z",
      "shipments": 100,
      "submission_id": "9475711899564878915476",
      "warehouse_id": {}
    }
  ]
}
```

An array of manifest resources

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|manifests|[[manifest](#schemamanifest)]|false|none|Resulting Manifests|

<h2 id="tocS_manifests_requests">manifests_requests</h2>
<!-- backwards compatibility -->
<a id="schemamanifests_requests"></a>
<a id="schema_manifests_requests"></a>
<a id="tocSmanifests_requests"></a>
<a id="tocsmanifests_requests"></a>

```json
{
  "manifest_requests": [
    {
      "manifest_request_id": {},
      "status": {}
    }
  ]
}
```

An array of manifest requests

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|manifest_requests|[[manifest_request](#schemamanifest_request)]|false|none|Resulting manifest requests with statuses|

<h2 id="tocS_modify_batch">modify_batch</h2>
<!-- backwards compatibility -->
<a id="schemamodify_batch"></a>
<a id="schema_modify_batch"></a>
<a id="tocSmodify_batch"></a>
<a id="tocsmodify_batch"></a>

```json
{
  "rate_ids": [
    {}
  ],
  "shipment_ids": [
    {}
  ]
}
```

A modify batch object

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rate_ids|[object]|false|none|Array of Rate IDs to be modifed on the batch|
|shipment_ids|[object]|false|none|The Shipment Ids to be modified on the batch|

<h2 id="tocS_monetary_value">monetary_value</h2>
<!-- backwards compatibility -->
<a id="schemamonetary_value"></a>
<a id="schema_monetary_value"></a>
<a id="tocSmonetary_value"></a>
<a id="tocsmonetary_value"></a>

```json
{
  "amount": 0,
  "currency": {}
}
```

A monetary value, such as the price of a shipping label, the insured value of a package, or an account balance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|number(double)|true|none|The monetary amount, in the specified currency.|
|currency|object|true|none|none|

<h2 id="tocS_non_delivery">non_delivery</h2>
<!-- backwards compatibility -->
<a id="schemanon_delivery"></a>
<a id="schema_non_delivery"></a>
<a id="tocSnon_delivery"></a>
<a id="tocsnon_delivery"></a>

```json
"return_to_sender"
```

The possible non delivery values

<h2 id="tocS_normalized_entity">normalized_entity</h2>
<!-- backwards compatibility -->
<a id="schemanormalized_entity"></a>
<a id="schema_normalized_entity"></a>
<a id="tocSnormalized_entity"></a>
<a id="tocsnormalized_entity"></a>

```json
{}
```

The normalized value of the entity.

Most entity results have a `value` field, which is the normalized value of the entity.  For example, if the substring "john doe" was recognized as a "person" entity, then the value might be normalized to have proper capitalization (e.g. "John Doe").  Or if the substring "ft worth" was recognized as a "city" entity, then the value might be normalized to "Fort Worth".

Some entities have other information in addition to, or instead of a `value`.  For example, a "dimensions" entity will have separate fields for `length`, `width`, `height`, and `unit`.

<h2 id="tocS_optional_link">optional_link</h2>
<!-- backwards compatibility -->
<a id="schemaoptional_link"></a>
<a id="schema_optional_link"></a>
<a id="tocSoptional_link"></a>
<a id="tocsoptional_link"></a>

```json
{
  "href": {},
  "type": "string"
}
```

A link to a related resource, or an empty object if there is no resource to link to

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|href|object|false|none|The URL of the linked resource, if any|
|type|string|false|none|The type of resource, or the type of relationship to the parent resource|

<h2 id="tocS_order_source_name">order_source_name</h2>
<!-- backwards compatibility -->
<a id="schemaorder_source_name"></a>
<a id="schema_order_source_name"></a>
<a id="tocSorder_source_name"></a>
<a id="tocsorder_source_name"></a>

```json
"amazon_ca"
```

The order sources that are supported by ShipEngine

<h2 id="tocS_origin_type">origin_type</h2>
<!-- backwards compatibility -->
<a id="schemaorigin_type"></a>
<a id="schema_origin_type"></a>
<a id="tocSorigin_type"></a>
<a id="tocsorigin_type"></a>

```json
"pickup"
```

Indicates if the package will be picked up or dropped off by the carrier

<h2 id="tocS_package">package</h2>
<!-- backwards compatibility -->
<a id="schemapackage"></a>
<a id="schema_package"></a>
<a id="tocSpackage"></a>
<a id="tocspackage"></a>

```json
{
  "content_description": "Hand knitted wool socks",
  "dimensions": {
    "height": 0,
    "length": 0,
    "unit": "inch",
    "width": 0
  },
  "external_package_id": "string",
  "form_download": {
    "href": {},
    "type": "string"
  },
  "insured_value": [
    {
      "amount": 0,
      "currency": "usd"
    }
  ],
  "label_download": {
    "href": {},
    "pdf": {},
    "png": {},
    "zpl": {}
  },
  "label_messages": {
    "reference1": null,
    "reference2": null,
    "reference3": null
  },
  "package_code": {},
  "package_id": {},
  "sequence": 0,
  "tracking_number": {},
  "weight": {
    "unit": {},
    "value": 0.1
  }
}
```

A package associated with a [shipping label](https://www.shipengine.com/docs/labels/create-a-label/)

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content_description|string \| null|false|none|A short description of the package content. Required for shipments moving to, from, and through Mexico.<br>|
|dimensions|object|false|none|The package dimensions|
|external_package_id|string|false|none|An external package id.|
|form_download|object|false|read-only|The form download for any customs that are needed|
|insured_value|object|false|none|The insured value of the package.  Requires the `insurance_provider` field of the shipment to be set.<br>|
|label_download|object|false|read-only|The label download for the package|
|label_messages|object|false|none|none|
|package_code|object|false|none|The [package type](https://www.shipengine.com/docs/reference/list-carrier-packages/), such as `thick_envelope`, `small_flat_rate_box`, `large_package`, etc.  The code `package` indicates a custom or unknown package type.<br>|
|package_id|object|false|none|A string that uniquely identifies this [package type](https://www.shipengine.com/docs/reference/list-carrier-packages/)|
|sequence|integer(int32)|false|read-only|Package sequence|
|tracking_number|object|false|read-only|The tracking number for the package.  The format depends on the carrier.<br>|
|weight|object|true|none|The package weight|

<h2 id="tocS_package_code">package_code</h2>
<!-- backwards compatibility -->
<a id="schemapackage_code"></a>
<a id="schema_package_code"></a>
<a id="tocSpackage_code"></a>
<a id="tocspackage_code"></a>

```json
"small_flat_rate_box"
```

A [package type](https://www.shipengine.com/docs/reference/list-carrier-packages/), such as `thick_envelope`, `small_flat_rate_box`, `large_package`, etc.  Use the code `package` for custom or unknown package types.

<h2 id="tocS_package_contents">package_contents</h2>
<!-- backwards compatibility -->
<a id="schemapackage_contents"></a>
<a id="schema_package_contents"></a>
<a id="tocSpackage_contents"></a>
<a id="tocspackage_contents"></a>

```json
"merchandise"
```

The possible package contents values

<h2 id="tocS_package_type">package_type</h2>
<!-- backwards compatibility -->
<a id="schemapackage_type"></a>
<a id="schema_package_type"></a>
<a id="tocSpackage_type"></a>
<a id="tocspackage_type"></a>

```json
{
  "description": "Packaging for laptops",
  "dimensions": {
    "height": 0,
    "length": 0,
    "unit": "inch",
    "width": 0
  },
  "name": "laptop_box",
  "package_code": {},
  "package_id": {}
}
```

A package type that a carrier supports for shipment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string \| null|false|none|Provides a helpful description for the custom package.|
|dimensions|object|false|none|The custom dimensions for the package.|
|name|string|true|none|none|
|package_code|object|true|none|none|
|package_id|object|false|none|A string that uniquely identifies the package.|

<h2 id="tocS_paged_list_response_body">paged_list_response_body</h2>
<!-- backwards compatibility -->
<a id="schemapaged_list_response_body"></a>
<a id="schema_paged_list_response_body"></a>
<a id="tocSpaged_list_response_body"></a>
<a id="tocspaged_list_response_body"></a>

```json
{
  "links": {
    "first": {
      "href": {},
      "type": "string"
    },
    "last": {
      "href": {},
      "type": "string"
    },
    "next": {
      "href": {},
      "type": "string"
    },
    "prev": {
      "href": {},
      "type": "string"
    }
  },
  "page": 1,
  "pages": 4,
  "total": 2750
}
```

Many ShipEngine endpoints return a paged list of items.  In addition to the returned items, these responses also include information about the total number of items, the number of pages of results, and URLs of other pages of results.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|links|object|true|none|none|
|page|integer|true|none|The current page number of results.  For example, if there are 80 results, and the page size is 25, then `page` could be 1, 2, 3, or 4.  The first three pages would contain 25 items each, and the fourth page would contain the five remaining items.|
|pages|integer|true|none|The total number of pages of results.  For example, if there are 80 results, and the page size is 25, then `pages` would be 4.  The first three pages would contain 25 items each, and the fourth page would contain the five remaining items.  If there are no results, then `pages` will be zero.|
|total|integer|true|none|The total number of items across all pages of results|

<h2 id="tocS_pagination_link">pagination_link</h2>
<!-- backwards compatibility -->
<a id="schemapagination_link"></a>
<a id="schema_pagination_link"></a>
<a id="tocSpagination_link"></a>
<a id="tocspagination_link"></a>

```json
{
  "first": {
    "href": {},
    "type": "string"
  },
  "last": {
    "href": {},
    "type": "string"
  },
  "next": {
    "href": {},
    "type": "string"
  },
  "prev": {
    "href": {},
    "type": "string"
  }
}
```

Helpful links to other pages of results

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|first|object|true|none|The link to the first page of results.  This object will _always_ have an `href` field. If there are no results, then the first page will contain an empty array of items.<br>|
|last|object|true|none|The link to the final page of results.  This object will _always_ have an `href` field. If there are no results, then the final page will contain an empty array of items.<br>|
|next|object|true|none|The link to the next page of results.  The `href` field will only be set when the `page` is less than `pages`.<br>|
|prev|object|true|none|The link to the previous page of results.  The `href` field will only be set when the `page` is 2 or greater.<br>|

<h2 id="tocS_parse_address_request_body">parse_address_request_body</h2>
<!-- backwards compatibility -->
<a id="schemaparse_address_request_body"></a>
<a id="schema_parse_address_request_body"></a>
<a id="tocSparse_address_request_body"></a>
<a id="tocsparse_address_request_body"></a>

```json
{
  "address": {
    "address_line1": "1999 Bishop Grandin Blvd.",
    "address_line2": "Unit 408",
    "address_line3": "Building #7",
    "address_residential_indicator": "no",
    "city_locality": "Winnipeg",
    "company_name": "The Home Depot",
    "country_code": {},
    "email": "example@example.com",
    "name": "John Doe",
    "phone": "+1 204-253-9411 ext. 123",
    "postal_code": {},
    "state_province": "Manitoba"
  },
  "text": "Margie McMiller at 3800 North Lamar suite 200 in austin, tx.  The zip code there is 78652."
}
```

The only required field is `text`, which is the text to be parsed. You can optionally also provide an `address` containing already-known values. For example, you may already know the recipient's name, city, and country, and only want to parse the street address into separate lines.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|object|false|none|You can optionally provide any already-known address values. For example, you may already know the recipient's name, city, and country, and only want to parse the street address into separate lines.<br>|
|text|string|true|none|The unstructured text that contains address-related entities|

<h2 id="tocS_parse_address_response_body">parse_address_response_body</h2>
<!-- backwards compatibility -->
<a id="schemaparse_address_response_body"></a>
<a id="schema_parse_address_response_body"></a>
<a id="tocSparse_address_response_body"></a>
<a id="tocsparse_address_response_body"></a>

```json
{
  "address": {
    "address_line1": "1999 Bishop Grandin Blvd.",
    "address_line2": "Unit 408",
    "address_line3": "Building #7",
    "address_residential_indicator": "no",
    "city_locality": "Winnipeg",
    "company_name": "The Home Depot",
    "country_code": {},
    "email": "example@example.com",
    "name": "John Doe",
    "phone": "+1 204-253-9411 ext. 123",
    "postal_code": {},
    "state_province": "Manitoba"
  },
  "entities": [
    {
      "end_index": 0,
      "result": {},
      "score": 0,
      "start_index": 0,
      "text": "string",
      "type": "string"
    }
  ],
  "score": 0
}
```

The parsed address, as well as a confidence score and a list of all the entities that were recognized in the text.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|object|true|none|The parsed address.  This address may not be complete, depending on how much information was included in the text and how confident the API is about each recognized entity.<br><br>> **Note:** The address-recognition API does not currently perform any validation of the parsed address, so we recommend that you use the [address-validation API](https://www.shipengine.com/docs/addresses/validation/) to ensure that the address is correct.<br>|
|entities|[[recognized_entity](#schemarecognized_entity)]|true|none|All of the entities that were recognized in the text. An "entity" is a single piece of data, such as a city, a postal code, or an address line.  Each entity includes the original text and the parsed value.<br>|
|score|number(double)|true|none|A confidence score between zero and one that indicates how certain the API is that it understood the text.<br>|

<h2 id="tocS_parse_shipment_request_body">parse_shipment_request_body</h2>
<!-- backwards compatibility -->
<a id="schemaparse_shipment_request_body"></a>
<a id="schema_parse_shipment_request_body"></a>
<a id="tocSparse_shipment_request_body"></a>
<a id="tocsparse_shipment_request_body"></a>

```json
{
  "shipment": {
    "advanced_options": {
      "bill_to_account": null,
      "bill_to_country_code": null,
      "bill_to_party": null,
      "bill_to_postal_code": null,
      "collect_on_delivery": {
        "payment_amount": {
          "amount": 0,
          "currency": {}
        },
        "payment_type": {}
      },
      "contains_alcohol": false,
      "custom_field1": null,
      "custom_field2": null,
      "custom_field3": null,
      "delivered_duty_paid": false,
      "dry_ice": false,
      "dry_ice_weight": {
        "unit": {},
        "value": 0.1
      },
      "fedex_freight": {
        "booking_confirmation": "string",
        "shipper_load_and_count": "string"
      },
      "freight_class": 77.5,
      "non_machinable": false,
      "origin_type": null,
      "saturday_delivery": false,
      "shipper_release": null,
      "third_party_consignee": false,
      "use_ups_ground_freight_pricing": null
    },
    "carrier_id": {},
    "confirmation": "none",
    "created_at": {},
    "customs": null,
    "external_order_id": "string",
    "external_shipment_id": "string",
    "insurance_provider": "none",
    "items": [],
    "modified_at": {},
    "order_source_code": {},
    "origin_type": {},
    "packages": [
      {
        "content_description": "Hand knitted wool socks",
        "dimensions": {
          "height": 0,
          "length": 0,
          "unit": "inch",
          "width": 0
        },
        "external_package_id": "string",
        "form_download": {
          "href": {},
          "type": "string"
        },
        "insured_value": [
          {
            "amount": 0,
            "currency": "usd"
          }
        ],
        "label_download": {
          "href": {},
          "pdf": {},
          "png": {},
          "zpl": {}
        },
        "label_messages": {
          "reference1": null,
          "reference2": null,
          "reference3": null
        },
        "package_code": {},
        "package_id": {},
        "sequence": 0,
        "tracking_number": {},
        "weight": {
          "unit": {},
          "value": 0.1
        }
      }
    ],
    "return_to": {
      "address_line1": "1999 Bishop Grandin Blvd.",
      "address_line2": "Unit 408",
      "address_line3": "Building #7",
      "address_residential_indicator": "no",
      "city_locality": "Winnipeg",
      "company_name": "The Home Depot",
      "country_code": {},
      "email": "example@example.com",
      "name": "John Doe",
      "phone": "+1 204-253-9411 ext. 123",
      "postal_code": {},
      "state_province": "Manitoba",
      "instructions": "string"
    },
    "service_code": {},
    "ship_date": {},
    "ship_from": {
      "address_line1": "1999 Bishop Grandin Blvd.",
      "address_line2": "Unit 408",
      "address_line3": "Building #7",
      "address_residential_indicator": "no",
      "city_locality": "Winnipeg",
      "company_name": "The Home Depot",
      "country_code": {},
      "email": "example@example.com",
      "name": "John Doe",
      "phone": "+1 204-253-9411 ext. 123",
      "postal_code": {},
      "state_province": "Manitoba",
      "instructions": "string"
    },
    "ship_to": {
      "address_line1": "1999 Bishop Grandin Blvd.",
      "address_line2": "Unit 408",
      "address_line3": "Building #7",
      "address_residential_indicator": "no",
      "city_locality": "Winnipeg",
      "company_name": "The Home Depot",
      "country_code": {},
      "email": "example@example.com",
      "name": "John Doe",
      "phone": "+1 204-253-9411 ext. 123",
      "postal_code": {},
      "state_province": "Manitoba",
      "instructions": "string"
    },
    "shipment_id": {},
    "shipment_number": "string",
    "shipment_status": "pending",
    "tags": [],
    "tax_identifiers": [
      {
        "identifier_type": {},
        "issuing_authority": "string",
        "taxable_entity_type": {},
        "value": "string"
      }
    ],
    "total_weight": {
      "unit": {},
      "value": 0.1
    },
    "warehouse_id": null
  },
  "text": "I have a 4oz package that's 5x10x14in, and I need to ship it to Margie McMiller at 3800 North Lamar suite 200 in austin, tx 78652. Please send it via USPS first class and require an adult signature. It also needs to be insured for $400.\n"
}
```

The only required field is `text`, which is the text to be parsed. You can optionally also provide a `shipment` containing any already-known values. For example, you probably already know the `ship_from` address, and you may also already know what carrier and service you want to use.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|shipment|object|false|none|You can optionally provide a `shipment` object containing any already-known values. For example, you probably already know the `ship_from` address, and you may also already know what carrier and service you want to use.<br>|
|text|string|true|none|The unstructured text that contains shipping-related entities|

<h2 id="tocS_parse_shipment_response_body">parse_shipment_response_body</h2>
<!-- backwards compatibility -->
<a id="schemaparse_shipment_response_body"></a>
<a id="schema_parse_shipment_response_body"></a>
<a id="tocSparse_shipment_response_body"></a>
<a id="tocsparse_shipment_response_body"></a>

```json
{
  "entities": [
    {
      "end_index": 0,
      "result": {},
      "score": 0,
      "start_index": 0,
      "text": "string",
      "type": "string"
    }
  ],
  "score": 0,
  "shipment": {
    "advanced_options": {
      "bill_to_account": null,
      "bill_to_country_code": null,
      "bill_to_party": null,
      "bill_to_postal_code": null,
      "collect_on_delivery": {
        "payment_amount": {
          "amount": 0,
          "currency": {}
        },
        "payment_type": {}
      },
      "contains_alcohol": false,
      "custom_field1": null,
      "custom_field2": null,
      "custom_field3": null,
      "delivered_duty_paid": false,
      "dry_ice": false,
      "dry_ice_weight": {
        "unit": {},
        "value": 0.1
      },
      "fedex_freight": {
        "booking_confirmation": "string",
        "shipper_load_and_count": "string"
      },
      "freight_class": 77.5,
      "non_machinable": false,
      "origin_type": null,
      "saturday_delivery": false,
      "shipper_release": null,
      "third_party_consignee": false,
      "use_ups_ground_freight_pricing": null
    },
    "carrier_id": {},
    "confirmation": "none",
    "created_at": {},
    "customs": null,
    "external_order_id": "string",
    "external_shipment_id": "string",
    "insurance_provider": "none",
    "items": [],
    "modified_at": {},
    "order_source_code": {},
    "origin_type": {},
    "packages": [
      {
        "content_description": "Hand knitted wool socks",
        "dimensions": {
          "height": 0,
          "length": 0,
          "unit": "inch",
          "width": 0
        },
        "external_package_id": "string",
        "form_download": {
          "href": {},
          "type": "string"
        },
        "insured_value": [
          {
            "amount": 0,
            "currency": "usd"
          }
        ],
        "label_download": {
          "href": {},
          "pdf": {},
          "png": {},
          "zpl": {}
        },
        "label_messages": {
          "reference1": null,
          "reference2": null,
          "reference3": null
        },
        "package_code": {},
        "package_id": {},
        "sequence": 0,
        "tracking_number": {},
        "weight": {
          "unit": {},
          "value": 0.1
        }
      }
    ],
    "return_to": {
      "address_line1": "1999 Bishop Grandin Blvd.",
      "address_line2": "Unit 408",
      "address_line3": "Building #7",
      "address_residential_indicator": "no",
      "city_locality": "Winnipeg",
      "company_name": "The Home Depot",
      "country_code": {},
      "email": "example@example.com",
      "name": "John Doe",
      "phone": "+1 204-253-9411 ext. 123",
      "postal_code": {},
      "state_province": "Manitoba",
      "instructions": "string"
    },
    "service_code": {},
    "ship_date": {},
    "ship_from": {
      "address_line1": "1999 Bishop Grandin Blvd.",
      "address_line2": "Unit 408",
      "address_line3": "Building #7",
      "address_residential_indicator": "no",
      "city_locality": "Winnipeg",
      "company_name": "The Home Depot",
      "country_code": {},
      "email": "example@example.com",
      "name": "John Doe",
      "phone": "+1 204-253-9411 ext. 123",
      "postal_code": {},
      "state_province": "Manitoba",
      "instructions": "string"
    },
    "ship_to": {
      "address_line1": "1999 Bishop Grandin Blvd.",
      "address_line2": "Unit 408",
      "address_line3": "Building #7",
      "address_residential_indicator": "no",
      "city_locality": "Winnipeg",
      "company_name": "The Home Depot",
      "country_code": {},
      "email": "example@example.com",
      "name": "John Doe",
      "phone": "+1 204-253-9411 ext. 123",
      "postal_code": {},
      "state_province": "Manitoba",
      "instructions": "string"
    },
    "shipment_id": {},
    "shipment_number": "string",
    "shipment_status": "pending",
    "tags": [],
    "tax_identifiers": [
      {
        "identifier_type": {},
        "issuing_authority": "string",
        "taxable_entity_type": {},
        "value": "string"
      }
    ],
    "total_weight": {
      "unit": {},
      "value": 0.1
    },
    "warehouse_id": null
  }
}
```

The parsed shipment, as well as a confidence score and a list of all the shipping entities that were recognized in the text.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entities|[[recognized_entity](#schemarecognized_entity)]|true|none|All of the entities that were recognized in the text. An "entity" is a single piece of data, such as a city, a postal code, a carrier name, or a package weight.  Each entity includes the original text and the parsed value.<br>|
|score|number(double)|true|none|A confidence score between zero and one that indicates how certain the API is that it understood the text.<br>|
|shipment|object|true|none|The parsed shipment.  This shipment may not be complete, depending on how much information was included in the text and how confident the API is about each recognized entity.<br><br>> **Note:** The shipment-recognition API does not currently perform any validation of the parsed addresses, so we recommend that you use the [address-validation API](https://www.shipengine.com/docs/addresses/validation/) to ensure that the addresses are correct.<br>|

<h2 id="tocS_partial_address">partial_address</h2>
<!-- backwards compatibility -->
<a id="schemapartial_address"></a>
<a id="schema_partial_address"></a>
<a id="tocSpartial_address"></a>
<a id="tocspartial_address"></a>

```json
{
  "address_line1": "1999 Bishop Grandin Blvd.",
  "address_line2": "Unit 408",
  "address_line3": "Building #7",
  "address_residential_indicator": "no",
  "city_locality": "Winnipeg",
  "company_name": "The Home Depot",
  "country_code": {},
  "email": "example@example.com",
  "name": "John Doe",
  "phone": "+1 204-253-9411 ext. 123",
  "postal_code": {},
  "state_province": "Manitoba"
}
```

A complete or partial mailing address.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address_line1|string|false|none|The first line of the street address.  For some addresses, this may be the only line.  Other addresses may require 2 or 3 lines.<br>|
|address_line2|string \| null|false|none|The second line of the street address.  For some addresses, this line may not be needed.<br>|
|address_line3|string \| null|false|none|The third line of the street address.  For some addresses, this line may not be needed.<br>|
|address_residential_indicator|object|false|none|Indicates whether this is a residential address.|
|city_locality|string|false|none|The name of the city or locality|
|company_name|string \| null|false|none|If this is a business address, then the company name should be specified here.<br>|
|country_code|object|false|none|The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)<br>|
|email|string \| null|false|none|Email for the address owner.<br>|
|name|string|false|none|The name of a contact person at this address.  This field may be set instead of - or in addition to - the `company_name` field.<br>|
|phone|string|false|none|The phone number of a contact person at this address.  The format of this phone number varies depending on the country.<br>|
|postal_code|object|false|none|none|
|state_province|string|false|none|The state or province.  For some countries (including the U.S.) only abbreviations are allowed.  Other countries allow the full name or abbreviation.<br>|

<h2 id="tocS_partial_shipment">partial_shipment</h2>
<!-- backwards compatibility -->
<a id="schemapartial_shipment"></a>
<a id="schema_partial_shipment"></a>
<a id="tocSpartial_shipment"></a>
<a id="tocspartial_shipment"></a>

```json
{
  "advanced_options": {
    "bill_to_account": null,
    "bill_to_country_code": null,
    "bill_to_party": null,
    "bill_to_postal_code": null,
    "collect_on_delivery": {
      "payment_amount": {
        "amount": 0,
        "currency": {}
      },
      "payment_type": {}
    },
    "contains_alcohol": false,
    "custom_field1": null,
    "custom_field2": null,
    "custom_field3": null,
    "delivered_duty_paid": false,
    "dry_ice": false,
    "dry_ice_weight": {
      "unit": {},
      "value": 0.1
    },
    "fedex_freight": {
      "booking_confirmation": "string",
      "shipper_load_and_count": "string"
    },
    "freight_class": 77.5,
    "non_machinable": false,
    "origin_type": null,
    "saturday_delivery": false,
    "shipper_release": null,
    "third_party_consignee": false,
    "use_ups_ground_freight_pricing": null
  },
  "carrier_id": {},
  "confirmation": "none",
  "created_at": {},
  "customs": null,
  "external_order_id": "string",
  "external_shipment_id": "string",
  "insurance_provider": "none",
  "items": [],
  "modified_at": {},
  "order_source_code": {},
  "origin_type": {},
  "packages": [
    {
      "content_description": "Hand knitted wool socks",
      "dimensions": {
        "height": 0,
        "length": 0,
        "unit": "inch",
        "width": 0
      },
      "external_package_id": "string",
      "form_download": {
        "href": {},
        "type": "string"
      },
      "insured_value": [
        {
          "amount": 0,
          "currency": "usd"
        }
      ],
      "label_download": {
        "href": {},
        "pdf": {},
        "png": {},
        "zpl": {}
      },
      "label_messages": {
        "reference1": null,
        "reference2": null,
        "reference3": null
      },
      "package_code": {},
      "package_id": {},
      "sequence": 0,
      "tracking_number": {},
      "weight": {
        "unit": {},
        "value": 0.1
      }
    }
  ],
  "return_to": {
    "address_line1": "1999 Bishop Grandin Blvd.",
    "address_line2": "Unit 408",
    "address_line3": "Building #7",
    "address_residential_indicator": "no",
    "city_locality": "Winnipeg",
    "company_name": "The Home Depot",
    "country_code": {},
    "email": "example@example.com",
    "name": "John Doe",
    "phone": "+1 204-253-9411 ext. 123",
    "postal_code": {},
    "state_province": "Manitoba",
    "instructions": "string"
  },
  "service_code": {},
  "ship_date": {},
  "ship_from": {
    "address_line1": "1999 Bishop Grandin Blvd.",
    "address_line2": "Unit 408",
    "address_line3": "Building #7",
    "address_residential_indicator": "no",
    "city_locality": "Winnipeg",
    "company_name": "The Home Depot",
    "country_code": {},
    "email": "example@example.com",
    "name": "John Doe",
    "phone": "+1 204-253-9411 ext. 123",
    "postal_code": {},
    "state_province": "Manitoba",
    "instructions": "string"
  },
  "ship_to": {
    "address_line1": "1999 Bishop Grandin Blvd.",
    "address_line2": "Unit 408",
    "address_line3": "Building #7",
    "address_residential_indicator": "no",
    "city_locality": "Winnipeg",
    "company_name": "The Home Depot",
    "country_code": {},
    "email": "example@example.com",
    "name": "John Doe",
    "phone": "+1 204-253-9411 ext. 123",
    "postal_code": {},
    "state_province": "Manitoba",
    "instructions": "string"
  },
  "shipment_id": {},
  "shipment_number": "string",
  "shipment_status": "pending",
  "tags": [],
  "tax_identifiers": [
    {
      "identifier_type": {},
      "issuing_authority": "string",
      "taxable_entity_type": {},
      "value": "string"
    }
  ],
  "total_weight": {
    "unit": {},
    "value": 0.1
  },
  "warehouse_id": null
}
```

The information necessary to ship a package, such as the origin, the destination, the carrier service, and the package dimensions and weight.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|advanced_options|object|false|none|Advanced shipment options.  These are entirely optional.|
|carrier_id|object|false|none|The carrier account that is billed for the shipping charges|
|confirmation|object|false|none|The type of delivery confirmation that is required for this shipment.|
|created_at|object|false|read-only|The date and time that the shipment was created in ShipEngine.|
|customs|object \| null|false|none|Customs information.  This is usually only needed for international shipments.<br>|
|external_order_id|string \| null|false|none|ID that the Order Source assigned|
|external_shipment_id|string \| null|false|none|A unique user-defined key to identify a shipment.  This can be used to retrieve the shipment.<br><br>> **Warning:** The `external_shipment_id` is limited to 50 characters. Any additional characters will be truncated.<br>|
|insurance_provider|object|false|none|The insurance provider to use for any insured packages in the shipment.<br>|
|items|[object]|false|none|Describe the packages included in this shipment as related to potential metadata that was imported from<br>external order sources<br>|
|modified_at|object|false|read-only|The date and time that the shipment was created or last modified.|
|order_source_code|object|false|none|none|
|origin_type|object \| null|false|none|Indicates if the package will be picked up or dropped off by the carrier|
|packages|[object]|false|none|The packages in the shipment.<br><br>> **Note:** Some carriers only allow one package per shipment.  If you attempt to create a multi-package shipment for a carrier that doesn't allow it, an error will be returned.<br>|
|return_to|object|false|none|The return address for this shipment.  Defaults to the `ship_from` address.<br>|
|service_code|object|false|none|The [carrier service](https://www.shipengine.com/docs/shipping/use-a-carrier-service/) used to ship the package, such as `fedex_ground`, `usps_first_class_mail`, `flat_rate_envelope`, etc.<br>|
|ship_date|object|false|none|The date that the shipment was (or will be) shippped.  ShipEngine will take the day of week into consideration. For example, if the carrier does not operate on Sundays, then a package that would have shipped on Sunday will ship on Monday instead.<br>|
|ship_from|object|false|none|The shipment's origin address. If you frequently ship from the same location, consider [creating a warehouse](https://www.shipengine.com/docs/reference/create-warehouse/).  Then you can simply specify the `warehouse_id` rather than the complete address each time.<br>|
|ship_to|object|false|none|The recipient's mailing address|
|shipment_id|object|false|read-only|A string that uniquely identifies the shipment|
|shipment_number|string \| null|false|none|A non-unique user-defined number used to identify a shipment.  If undefined, this will match the external_shipment_id of the shipment.<br><br>> **Warning:** The `shipment_number` is limited to 50 characters. Any additional characters will be truncated.<br>|
|shipment_status|object|false|read-only|The current status of the shipment|
|tags|[object]|false|read-only|Arbitrary tags associated with this shipment.  Tags can be used to categorize shipments, and shipments can be queried by their tags.<br>|
|tax_identifiers|[object]|false|none|none|
|total_weight|object|false|read-only|The combined weight of all packages in the shipment|
|warehouse_id|object \| null|false|none|The [warehouse](https://www.shipengine.com/docs/shipping/ship-from-a-warehouse/) that the shipment is being shipped from.  Either `warehouse_id` or `ship_from` must be specified.<br>|

<h2 id="tocS_partial_shipping_address">partial_shipping_address</h2>
<!-- backwards compatibility -->
<a id="schemapartial_shipping_address"></a>
<a id="schema_partial_shipping_address"></a>
<a id="tocSpartial_shipping_address"></a>
<a id="tocspartial_shipping_address"></a>

```json
{
  "instructions": "string"
}
```

A complete or partial mailing address.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|instructions|string \| null|false|none|Additional text about how to handle the shipment at this address.<br>|

<h2 id="tocS_payment_amount">payment_amount</h2>
<!-- backwards compatibility -->
<a id="schemapayment_amount"></a>
<a id="schema_payment_amount"></a>
<a id="tocSpayment_amount"></a>
<a id="tocspayment_amount"></a>

```json
{
  "amount": 0,
  "currency": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|number(double)|false|none|none|
|currency|object|false|none|none|

<h2 id="tocS_pickup">pickup</h2>
<!-- backwards compatibility -->
<a id="schemapickup"></a>
<a id="schema_pickup"></a>
<a id="tocSpickup"></a>
<a id="tocspickup"></a>

```json
{
  "cancelled_at": {},
  "carrier_id": {},
  "confirmation_number": "292513CL4A3",
  "contact_details": {
    "email": {},
    "name": "string",
    "phone": "strings"
  },
  "created_at": {},
  "label_ids": [
    {}
  ],
  "pickup_address": {
    "address_line1": "1999 Bishop Grandin Blvd.",
    "address_line2": "Unit 408",
    "address_line3": "Building #7",
    "address_residential_indicator": "no",
    "city_locality": "Winnipeg",
    "company_name": "The Home Depot",
    "country_code": {},
    "email": "example@example.com",
    "name": "John Doe",
    "phone": "+1 204-253-9411 ext. 123",
    "postal_code": {},
    "state_province": "Manitoba"
  },
  "pickup_id": {},
  "pickup_notes": "string",
  "pickup_window": {
    "end_at": {},
    "start_at": {}
  },
  "pickup_windows": [
    {
      "end_at": {},
      "start_at": {}
    }
  ],
  "warehouse_id": {}
}
```

The information necessary to schedule a package pickup

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cancelled_at|object|false|read-only|The date and time that the pickup was cancelled in ShipEngine.|
|carrier_id|object|false|read-only|The carrier_id associated with the pickup|
|confirmation_number|string \| null|false|read-only|The carrier confirmation number for the scheduled pickup.|
|contact_details|[contact_details](#schemacontact_details)|false|none|none|
|created_at|object|false|read-only|The date and time that the pickup was created in ShipEngine.|
|label_ids|[object]|false|none|Label IDs that will be included in the pickup request|
|pickup_address|object|false|read-only|none|
|pickup_id|object|false|read-only|none|
|pickup_notes|string|false|none|Used by some carriers to give special instructions for a package pickup|
|pickup_window|[pickup_window](#schemapickup_window)|false|write-only|The desired time range for the package pickup.|
|pickup_windows|[object]|false|read-only|An array of available pickup windows. Carriers can return multiple times that they will pickup packages.<br>|
|warehouse_id|object|false|read-only|The warehouse_id associated with the pickup|

<h2 id="tocS_pickup_resource_id">pickup_resource_id</h2>
<!-- backwards compatibility -->
<a id="schemapickup_resource_id"></a>
<a id="schema_pickup_resource_id"></a>
<a id="tocSpickup_resource_id"></a>
<a id="tocspickup_resource_id"></a>

```json
"pik_3YcKU5zdtJuCqoeNwyqqbW"
```

Pickup Resource ID

<h2 id="tocS_pickup_response_body">pickup_response_body</h2>
<!-- backwards compatibility -->
<a id="schemapickup_response_body"></a>
<a id="schema_pickup_response_body"></a>
<a id="tocSpickup_response_body"></a>
<a id="tocspickup_response_body"></a>

```json
{
  "cancelled_at": {},
  "carrier_id": {},
  "confirmation_number": "292513CL4A3",
  "contact_details": {
    "email": {},
    "name": "string",
    "phone": "strings"
  },
  "created_at": {},
  "label_ids": [
    {}
  ],
  "pickup_address": {
    "address_line1": "1999 Bishop Grandin Blvd.",
    "address_line2": "Unit 408",
    "address_line3": "Building #7",
    "address_residential_indicator": "no",
    "city_locality": "Winnipeg",
    "company_name": "The Home Depot",
    "country_code": {},
    "email": "example@example.com",
    "name": "John Doe",
    "phone": "+1 204-253-9411 ext. 123",
    "postal_code": {},
    "state_province": "Manitoba"
  },
  "pickup_id": {},
  "pickup_notes": "string",
  "pickup_window": {
    "end_at": {},
    "start_at": {}
  },
  "pickup_windows": [
    {
      "end_at": {},
      "start_at": {}
    }
  ],
  "warehouse_id": {}
}
```

A pickup response body

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cancelled_at|object|false|read-only|The date and time that the pickup was cancelled in ShipEngine.|
|carrier_id|object|true|read-only|The carrier_id associated with the pickup|
|confirmation_number|string \| null|true|read-only|The carrier confirmation number for the scheduled pickup.|
|contact_details|[contact_details](#schemacontact_details)|true|none|none|
|created_at|object|true|read-only|The date and time that the pickup was created in ShipEngine.|
|label_ids|[object]|true|none|Label IDs that will be included in the pickup request|
|pickup_address|object|true|read-only|none|
|pickup_id|object|true|read-only|none|
|pickup_notes|string|false|none|Used by some carriers to give special instructions for a package pickup|
|pickup_window|[pickup_window](#schemapickup_window)|true|write-only|The desired time range for the package pickup.|
|pickup_windows|[object]|false|read-only|An array of available pickup windows. Carriers can return multiple times that they will pickup packages.<br>|
|warehouse_id|object|true|read-only|The warehouse_id associated with the pickup|

<h2 id="tocS_pickup_window">pickup_window</h2>
<!-- backwards compatibility -->
<a id="schemapickup_window"></a>
<a id="schema_pickup_window"></a>
<a id="tocSpickup_window"></a>
<a id="tocspickup_window"></a>

```json
{
  "end_at": {},
  "start_at": {}
}
```

The desired time range for the package pickup.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|end_at|object|true|none|none|
|start_at|object|true|none|none|

<h2 id="tocS_pickup_windows">pickup_windows</h2>
<!-- backwards compatibility -->
<a id="schemapickup_windows"></a>
<a id="schema_pickup_windows"></a>
<a id="tocSpickup_windows"></a>
<a id="tocspickup_windows"></a>

```json
{
  "end_at": {},
  "start_at": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|end_at|object|false|none|none|
|start_at|object|false|none|none|

<h2 id="tocS_postal_code">postal_code</h2>
<!-- backwards compatibility -->
<a id="schemapostal_code"></a>
<a id="schema_postal_code"></a>
<a id="tocSpostal_code"></a>
<a id="tocspostal_code"></a>

```json
"78756-3717"
```

postal code

<h2 id="tocS_process_batch_request_body">process_batch_request_body</h2>
<!-- backwards compatibility -->
<a id="schemaprocess_batch_request_body"></a>
<a id="schema_process_batch_request_body"></a>
<a id="tocSprocess_batch_request_body"></a>
<a id="tocsprocess_batch_request_body"></a>

```json
{
  "display_scheme": "label",
  "label_format": "pdf",
  "label_layout": "4x6",
  "ship_date": {}
}
```

A process batch request body

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|display_scheme|object|false|none|The display format that the label should be shown in.|
|label_format|object|false|none|none|
|label_layout|string|false|none|none|
|ship_date|object|false|none|The Ship date the batch is being processed for|

<h2 id="tocS_purchase_label_without_shipment">purchase_label_without_shipment</h2>
<!-- backwards compatibility -->
<a id="schemapurchase_label_without_shipment"></a>
<a id="schema_purchase_label_without_shipment"></a>
<a id="tocSpurchase_label_without_shipment"></a>
<a id="tocspurchase_label_without_shipment"></a>

```json
{
  "display_scheme": "label",
  "label_download_type": {},
  "label_format": "pdf",
  "label_layout": "4x6",
  "validate_address": {}
}
```

A purchase label without shipment resource

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|display_scheme|object|false|none|The display format that the label should be shown in.|
|label_download_type|object|false|none|none|
|label_format|object|false|none|none|
|label_layout|object|false|none|none|
|validate_address|object|false|none|none|

<h2 id="tocS_rate">rate</h2>
<!-- backwards compatibility -->
<a id="schemarate"></a>
<a id="schema_rate"></a>
<a id="tocSrate"></a>
<a id="tocsrate"></a>

```json
{
  "carrier_code": "string",
  "carrier_delivery_days": "string",
  "carrier_friendly_name": "string",
  "carrier_id": {},
  "carrier_nickname": "string",
  "confirmation_amount": {
    "amount": 0,
    "currency": {}
  },
  "delivery_days": 5,
  "error_messages": [
    "string"
  ],
  "estimated_delivery_date": {},
  "guaranteed_service": true,
  "insurance_amount": {
    "amount": 0,
    "currency": {}
  },
  "negotiated_rate": true,
  "other_amount": {
    "amount": 0,
    "currency": {}
  },
  "package_type": "package",
  "rate_id": {},
  "rate_type": {},
  "service_code": "string",
  "service_type": "string",
  "ship_date": "1970-01-01T00:00:00Z",
  "shipping_amount": {
    "amount": 0,
    "currency": {}
  },
  "tax_amount": {
    "amount": 0,
    "currency": {}
  },
  "trackable": true,
  "validation_status": {},
  "warning_messages": [
    "string"
  ],
  "zone": 6
}
```

A rate

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|carrier_code|string|true|read-only|carrier code|
|carrier_delivery_days|string|false|read-only|The carrier delivery days|
|carrier_friendly_name|string|true|read-only|carrier friendly name|
|carrier_id|object|true|read-only|A string that uniquely identifies the carrier|
|carrier_nickname|string|true|read-only|carrier nickname|
|confirmation_amount|object|true|read-only|The confirmation amount|
|delivery_days|integer(int32)|false|read-only|The number of days estimated for delivery, this will show the _actual_ delivery<br>time if for example, the package gets shipped on a Friday<br>|
|error_messages|[string]|true|read-only|The error messages|
|estimated_delivery_date|object|false|read-only|none|
|guaranteed_service|boolean|true|read-only|Indicates if the rate is guaranteed.|
|insurance_amount|object|true|read-only|The insurance amount|
|negotiated_rate|boolean|true|read-only|Indicates if the rates been negotiated|
|other_amount|object|true|read-only|Any other charges associated with this rate|
|package_type|string \| null|true|read-only|package type that this rate was estimated for|
|rate_id|object|true|read-only|A string that uniquely identifies the rate|
|rate_type|object|true|read-only|none|
|service_code|string|true|read-only|service code for the rate|
|service_type|string|true|read-only|service type|
|ship_date|string(date-time)|false|read-only|ship date|
|shipping_amount|object|true|read-only|The shipping amount|
|tax_amount|object|false|read-only|Tariff and additional taxes associated with an international shipment.|
|trackable|boolean|true|read-only|Indicates if rate is trackable|
|validation_status|object|true|read-only|none|
|warning_messages|[string]|true|read-only|The warning messages|
|zone|integer(int32) \| null|true|read-only|Certain carriers base [their rates](https://blog.stamps.com/2017/09/08/usps-postal-zones/) off of<br>custom zones that vary depending upon the ship_to and ship_from location<br>|

<h2 id="tocS_rate_estimate">rate_estimate</h2>
<!-- backwards compatibility -->
<a id="schemarate_estimate"></a>
<a id="schema_rate_estimate"></a>
<a id="tocSrate_estimate"></a>
<a id="tocsrate_estimate"></a>

```json
{
  "carrier_code": "string",
  "carrier_delivery_days": "string",
  "carrier_friendly_name": "string",
  "carrier_id": {},
  "carrier_nickname": "string",
  "confirmation_amount": {
    "amount": 0,
    "currency": {}
  },
  "delivery_days": 5,
  "error_messages": [
    "string"
  ],
  "estimated_delivery_date": {},
  "guaranteed_service": true,
  "insurance_amount": {
    "amount": 0,
    "currency": {}
  },
  "negotiated_rate": true,
  "other_amount": {
    "amount": 0,
    "currency": {}
  },
  "package_type": "package",
  "rate_type": {},
  "service_code": "string",
  "service_type": "string",
  "ship_date": "1970-01-01T00:00:00Z",
  "shipping_amount": {
    "amount": 0,
    "currency": {}
  },
  "tax_amount": {
    "amount": 0,
    "currency": {}
  },
  "trackable": true,
  "validation_status": {},
  "warning_messages": [
    "string"
  ],
  "zone": 6
}
```

A rate estimate

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|carrier_code|string|true|read-only|carrier code|
|carrier_delivery_days|string|false|read-only|The carrier delivery days|
|carrier_friendly_name|string|true|read-only|carrier friendly name|
|carrier_id|object|true|read-only|A string that uniquely identifies the carrier|
|carrier_nickname|string|true|read-only|carrier nickname|
|confirmation_amount|object|true|read-only|The confirmation amount|
|delivery_days|integer(int32)|false|read-only|The number of days estimated for delivery, this will show the _actual_ delivery<br>time if for example, the package gets shipped on a Friday<br>|
|error_messages|[string]|true|read-only|The error messages|
|estimated_delivery_date|object|false|read-only|none|
|guaranteed_service|boolean|true|read-only|Indicates if the rate is guaranteed.|
|insurance_amount|object|true|read-only|The insurance amount|
|negotiated_rate|boolean|true|read-only|Indicates if the rates been negotiated|
|other_amount|object|true|read-only|Any other charges associated with this rate|
|package_type|string \| null|true|read-only|package type that this rate was estimated for|
|rate_type|object|true|read-only|none|
|service_code|string|true|read-only|service code for the rate|
|service_type|string|true|read-only|service type|
|ship_date|string(date-time)|false|read-only|ship date|
|shipping_amount|object|true|read-only|The shipping amount|
|tax_amount|object|false|read-only|Tariff and additional taxes associated with an international shipment.|
|trackable|boolean|true|read-only|Indicates if rate is trackable|
|validation_status|object|true|read-only|none|
|warning_messages|[string]|true|read-only|The warning messages|
|zone|integer(int32) \| null|true|read-only|Certain carriers base [their rates](https://blog.stamps.com/2017/09/08/usps-postal-zones/) off of<br>custom zones that vary depending upon the ship_to and ship_from location<br>|

<h2 id="tocS_rate_estimate_by_carrier_id">rate_estimate_by_carrier_id</h2>
<!-- backwards compatibility -->
<a id="schemarate_estimate_by_carrier_id"></a>
<a id="schema_rate_estimate_by_carrier_id"></a>
<a id="tocSrate_estimate_by_carrier_id"></a>
<a id="tocsrate_estimate_by_carrier_id"></a>

```json
{
  "carrier_id": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|carrier_id|object|false|none|**Deprecated.** A string that uniquely identifies the carrier|

<h2 id="tocS_rate_estimate_by_carrier_ids">rate_estimate_by_carrier_ids</h2>
<!-- backwards compatibility -->
<a id="schemarate_estimate_by_carrier_ids"></a>
<a id="schema_rate_estimate_by_carrier_ids"></a>
<a id="tocSrate_estimate_by_carrier_ids"></a>
<a id="tocsrate_estimate_by_carrier_ids"></a>

```json
{
  "carrier_ids": [
    {}
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|carrier_ids|[string]|false|none|Array of Carrier Ids|

<h2 id="tocS_rate_estimate_options">rate_estimate_options</h2>
<!-- backwards compatibility -->
<a id="schemarate_estimate_options"></a>
<a id="schema_rate_estimate_options"></a>
<a id="tocSrate_estimate_options"></a>
<a id="tocsrate_estimate_options"></a>

```json
{
  "address_residential_indicator": {},
  "confirmation": {},
  "dimensions": {
    "height": 0,
    "length": 0,
    "unit": "inch",
    "width": 0
  },
  "from_city_locality": "Austin",
  "from_country_code": {},
  "from_postal_code": {},
  "from_state_province": "Austin",
  "ship_date": {},
  "to_city_locality": "Austin",
  "to_country_code": {},
  "to_postal_code": {},
  "to_state_province": "Houston",
  "weight": {
    "unit": {},
    "value": 0.1
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address_residential_indicator|object|false|none|none|
|confirmation|object|false|none|none|
|dimensions|object|false|none|The dimensions of the package|
|from_city_locality|string|false|none|from postal code|
|from_country_code|object|false|none|none|
|from_postal_code|object|false|none|none|
|from_state_province|string|false|none|From state province|
|ship_date|string|false|none|ship date|
|to_city_locality|string|false|none|The city locality the package is being shipped to|
|to_country_code|object|false|none|none|
|to_postal_code|object|false|none|none|
|to_state_province|string|false|none|To state province|
|weight|object|false|none|The weight of the package|

<h2 id="tocS_rate_request_body">rate_request_body</h2>
<!-- backwards compatibility -->
<a id="schemarate_request_body"></a>
<a id="schema_rate_request_body"></a>
<a id="tocSrate_request_body"></a>
<a id="tocsrate_request_body"></a>

```json
{
  "calculate_tax_amount": true,
  "carrier_ids": [
    {}
  ],
  "is_return": true,
  "package_types": [
    "string"
  ],
  "preferred_currency": {},
  "service_codes": [
    "string"
  ]
}
```

A rate request body

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|calculate_tax_amount|boolean|false|none|Calculate the duties and tariffs for cross border shipments.|
|carrier_ids|[object]|true|none|Array of carrier ids to get rates for|
|is_return|boolean|false|none|Indicate if it's a return shipment|
|package_types|[string]|false|none|none|
|preferred_currency|object|false|none|none|
|service_codes|[string]|false|none|none|

<h2 id="tocS_rate_request_by_shipment_ids">rate_request_by_shipment_ids</h2>
<!-- backwards compatibility -->
<a id="schemarate_request_by_shipment_ids"></a>
<a id="schema_rate_request_by_shipment_ids"></a>
<a id="tocSrate_request_by_shipment_ids"></a>
<a id="tocsrate_request_by_shipment_ids"></a>

```json
{
  "shipment_ids": [
    {}
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|shipment_ids|[object]|true|none|The array of shipment IDs|

<h2 id="tocS_rate_request_by_shipments">rate_request_by_shipments</h2>
<!-- backwards compatibility -->
<a id="schemarate_request_by_shipments"></a>
<a id="schema_rate_request_by_shipments"></a>
<a id="tocSrate_request_by_shipments"></a>
<a id="tocsrate_request_by_shipments"></a>

```json
{
  "shipments": [
    {
      "validate_address": "no_validation",
      "advanced_options": {
        "bill_to_account": null,
        "bill_to_country_code": null,
        "bill_to_party": null,
        "bill_to_postal_code": null,
        "collect_on_delivery": {
          "payment_amount": {
            "amount": 0,
            "currency": {}
          },
          "payment_type": {}
        },
        "contains_alcohol": false,
        "custom_field1": null,
        "custom_field2": null,
        "custom_field3": null,
        "delivered_duty_paid": false,
        "dry_ice": false,
        "dry_ice_weight": {
          "unit": {},
          "value": 0.1
        },
        "fedex_freight": {
          "booking_confirmation": "string",
          "shipper_load_and_count": "string"
        },
        "freight_class": 77.5,
        "non_machinable": false,
        "origin_type": null,
        "saturday_delivery": false,
        "shipper_release": null,
        "third_party_consignee": false,
        "use_ups_ground_freight_pricing": null
      },
      "carrier_id": {},
      "confirmation": "none",
      "created_at": {},
      "customs": null,
      "external_order_id": "string",
      "external_shipment_id": "string",
      "insurance_provider": "none",
      "items": [],
      "modified_at": {},
      "order_source_code": {},
      "origin_type": {},
      "packages": [
        {
          "content_description": "Hand knitted wool socks",
          "dimensions": {
            "height": 0,
            "length": 0,
            "unit": "inch",
            "width": 0
          },
          "external_package_id": "string",
          "form_download": {
            "href": {},
            "type": "string"
          },
          "insured_value": [
            {
              "amount": 0,
              "currency": "usd"
            }
          ],
          "label_download": {
            "href": {},
            "pdf": {},
            "png": {},
            "zpl": {}
          },
          "label_messages": {
            "reference1": null,
            "reference2": null,
            "reference3": null
          },
          "package_code": {},
          "package_id": {},
          "sequence": 0,
          "tracking_number": {},
          "weight": {
            "unit": {},
            "value": 0.1
          }
        }
      ],
      "return_to": {
        "address_line1": "1999 Bishop Grandin Blvd.",
        "address_line2": "Unit 408",
        "address_line3": "Building #7",
        "address_residential_indicator": "no",
        "city_locality": "Winnipeg",
        "company_name": "The Home Depot",
        "country_code": {},
        "email": "example@example.com",
        "name": "John Doe",
        "phone": "+1 204-253-9411 ext. 123",
        "postal_code": {},
        "state_province": "Manitoba",
        "instructions": "string"
      },
      "service_code": {},
      "ship_date": {},
      "ship_from": {
        "address_line1": "1999 Bishop Grandin Blvd.",
        "address_line2": "Unit 408",
        "address_line3": "Building #7",
        "address_residential_indicator": "no",
        "city_locality": "Winnipeg",
        "company_name": "The Home Depot",
        "country_code": {},
        "email": "example@example.com",
        "name": "John Doe",
        "phone": "+1 204-253-9411 ext. 123",
        "postal_code": {},
        "state_province": "Manitoba",
        "instructions": "string"
      },
      "ship_to": {
        "address_line1": "1999 Bishop Grandin Blvd.",
        "address_line2": "Unit 408",
        "address_line3": "Building #7",
        "address_residential_indicator": "no",
        "city_locality": "Winnipeg",
        "company_name": "The Home Depot",
        "country_code": {},
        "email": "example@example.com",
        "name": "John Doe",
        "phone": "+1 204-253-9411 ext. 123",
        "postal_code": {},
        "state_province": "Manitoba",
        "instructions": "string"
      },
      "shipment_id": {},
      "shipment_number": "string",
      "shipment_status": "pending",
      "tags": [],
      "tax_identifiers": [
        {
          "identifier_type": {},
          "issuing_authority": "string",
          "taxable_entity_type": {},
          "value": "string"
        }
      ],
      "total_weight": {
        "unit": {},
        "value": 0.1
      },
      "warehouse_id": null
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|shipments|[object]|true|none|The array of shipments to get bulk rate estimates for|

<h2 id="tocS_rate_request_options">rate_request_options</h2>
<!-- backwards compatibility -->
<a id="schemarate_request_options"></a>
<a id="schema_rate_request_options"></a>
<a id="tocSrate_request_options"></a>
<a id="tocsrate_request_options"></a>

```json
{
  "rate_options": {
    "calculate_tax_amount": true,
    "carrier_ids": [
      {}
    ],
    "is_return": true,
    "package_types": [
      "string"
    ],
    "preferred_currency": {},
    "service_codes": [
      "string"
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rate_options|object|false|none|The rate options|

<h2 id="tocS_rate_request_rate_options">rate_request_rate_options</h2>
<!-- backwards compatibility -->
<a id="schemarate_request_rate_options"></a>
<a id="schema_rate_request_rate_options"></a>
<a id="tocSrate_request_rate_options"></a>
<a id="tocsrate_request_rate_options"></a>

```json
{
  "rate_options": {
    "calculate_tax_amount": true,
    "carrier_ids": [
      {}
    ],
    "is_return": true,
    "package_types": [
      "string"
    ],
    "preferred_currency": {},
    "service_codes": [
      "string"
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rate_options|object|false|none|The rate options|

<h2 id="tocS_rate_response">rate_response</h2>
<!-- backwards compatibility -->
<a id="schemarate_response"></a>
<a id="schema_rate_response"></a>
<a id="tocSrate_response"></a>
<a id="tocsrate_response"></a>

```json
{
  "rate_response": {
    "created_at": {},
    "errors": [
      {
        "error_code": {},
        "error_source": {},
        "error_type": {},
        "message": "Body of request cannot be null."
      }
    ],
    "invalid_rates": [],
    "rate_request_id": {},
    "rates": [
      {
        "carrier_code": "string",
        "carrier_delivery_days": "string",
        "carrier_friendly_name": "string",
        "carrier_id": {},
        "carrier_nickname": "string",
        "confirmation_amount": {
          "amount": 0,
          "currency": {}
        },
        "delivery_days": 5,
        "error_messages": [
          "string"
        ],
        "estimated_delivery_date": {},
        "guaranteed_service": true,
        "insurance_amount": {
          "amount": 0,
          "currency": {}
        },
        "negotiated_rate": true,
        "other_amount": {
          "amount": 0,
          "currency": {}
        },
        "package_type": "package",
        "rate_id": {},
        "rate_type": {},
        "service_code": "string",
        "service_type": "string",
        "ship_date": "1970-01-01T00:00:00Z",
        "shipping_amount": {
          "amount": 0,
          "currency": {}
        },
        "tax_amount": {
          "amount": 0,
          "currency": {}
        },
        "trackable": true,
        "validation_status": {},
        "warning_messages": [
          "string"
        ],
        "zone": 6
      }
    ],
    "shipment_id": {},
    "status": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rate_response|object|false|none|The rates response|

<h2 id="tocS_rate_response_status">rate_response_status</h2>
<!-- backwards compatibility -->
<a id="schemarate_response_status"></a>
<a id="schema_rate_response_status"></a>
<a id="tocSrate_response_status"></a>
<a id="tocsrate_response_status"></a>

```json
"working"
```

The possible rate response status values

<h2 id="tocS_rate_type">rate_type</h2>
<!-- backwards compatibility -->
<a id="schemarate_type"></a>
<a id="schema_rate_type"></a>
<a id="tocSrate_type"></a>
<a id="tocsrate_type"></a>

```json
"check"
```

The possible rate type values

<h2 id="tocS_rates_information">rates_information</h2>
<!-- backwards compatibility -->
<a id="schemarates_information"></a>
<a id="schema_rates_information"></a>
<a id="tocSrates_information"></a>
<a id="tocsrates_information"></a>

```json
{
  "created_at": {},
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "invalid_rates": [],
  "rate_request_id": {},
  "rates": [
    {
      "carrier_code": "string",
      "carrier_delivery_days": "string",
      "carrier_friendly_name": "string",
      "carrier_id": {},
      "carrier_nickname": "string",
      "confirmation_amount": {
        "amount": 0,
        "currency": {}
      },
      "delivery_days": 5,
      "error_messages": [
        "string"
      ],
      "estimated_delivery_date": {},
      "guaranteed_service": true,
      "insurance_amount": {
        "amount": 0,
        "currency": {}
      },
      "negotiated_rate": true,
      "other_amount": {
        "amount": 0,
        "currency": {}
      },
      "package_type": "package",
      "rate_id": {},
      "rate_type": {},
      "service_code": "string",
      "service_type": "string",
      "ship_date": "1970-01-01T00:00:00Z",
      "shipping_amount": {
        "amount": 0,
        "currency": {}
      },
      "tax_amount": {
        "amount": 0,
        "currency": {}
      },
      "trackable": true,
      "validation_status": {},
      "warning_messages": [
        "string"
      ],
      "zone": 6
    }
  ],
  "shipment_id": {},
  "status": {}
}
```

A rates information resource

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created_at|string(date-time)|false|none|When the rate was created|
|errors|[object]|false|none|none|
|invalid_rates|[object]|false|read-only|An array of invalid shipment rates|
|rate_request_id|object|false|read-only|A string that uniquely identifies the rate request|
|rates|[object]|false|read-only|An array of shipment rates|
|shipment_id|object|false|read-only|A string that uniquely identifies the shipment|
|status|object|false|read-only|none|

<h2 id="tocS_recognized_entity">recognized_entity</h2>
<!-- backwards compatibility -->
<a id="schemarecognized_entity"></a>
<a id="schema_recognized_entity"></a>
<a id="tocSrecognized_entity"></a>
<a id="tocsrecognized_entity"></a>

```json
{
  "end_index": 0,
  "result": {},
  "score": 0,
  "start_index": 0,
  "text": "string",
  "type": "string"
}
```

An entity is a single piece of data that was recognized in unstructured text.  For example, a city, a postal code, package dimensions, insured value, etc.  Each entity includes the original text and the parsed value.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|end_index|integer|true|none|The index of the last character of this entity within the original text|
|result|[normalized_entity](#schemanormalized_entity)|false|none|The normalized value of the entity.<br><br>Most entity results have a `value` field, which is the normalized value of the entity.  For example, if the substring "john doe" was recognized as a "person" entity, then the value might be normalized to have proper capitalization (e.g. "John Doe").  Or if the substring "ft worth" was recognized as a "city" entity, then the value might be normalized to "Fort Worth".<br><br>Some entities have other information in addition to, or instead of a `value`.  For example, a "dimensions" entity will have separate fields for `length`, `width`, `height`, and `unit`.<br>|
|score|number(double)|true|none|A confidence score between zero and one that indicates how certain the API is that it correctly recognized this entity<br>|
|start_index|integer|true|none|The index of the first character of this entity within the original text|
|text|string|true|none|The substring from the original text that was recognized as this entity|
|type|string|true|none|The Entity type (e.g. "weight", "person", "address_line1", etc.)|

<h2 id="tocS_redirect">redirect</h2>
<!-- backwards compatibility -->
<a id="schemaredirect"></a>
<a id="schema_redirect"></a>
<a id="tocSredirect"></a>
<a id="tocsredirect"></a>

```json
"shipengine-dashboard"
```

The resource to return a redirect URL to.

<h2 id="tocS_remove_from_batch_request_body">remove_from_batch_request_body</h2>
<!-- backwards compatibility -->
<a id="schemaremove_from_batch_request_body"></a>
<a id="schema_remove_from_batch_request_body"></a>
<a id="tocSremove_from_batch_request_body"></a>
<a id="tocsremove_from_batch_request_body"></a>

```json
{
  "rate_ids": [
    {}
  ],
  "shipment_ids": [
    {}
  ]
}
```

A modify batch request body

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rate_ids|[object]|false|none|Array of Rate IDs to be modifed on the batch|
|shipment_ids|[object]|false|none|The Shipment Ids to be modified on the batch|

<h2 id="tocS_response_message">response_message</h2>
<!-- backwards compatibility -->
<a id="schemaresponse_message"></a>
<a id="schema_response_message"></a>
<a id="tocSresponse_message"></a>
<a id="tocsresponse_message"></a>

```json
{
  "code": {},
  "detail_code": {},
  "message": "Invalid Postal Code",
  "type": {}
}
```

A response message that displays when additional info is needed for an address validation request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|object|true|read-only|none|
|detail_code|object \| null|true|none|none|
|message|string|true|read-only|Message explaining the address validation error|
|type|object|true|read-only|none|

<h2 id="tocS_schedule_pickup_request_body">schedule_pickup_request_body</h2>
<!-- backwards compatibility -->
<a id="schemaschedule_pickup_request_body"></a>
<a id="schema_schedule_pickup_request_body"></a>
<a id="tocSschedule_pickup_request_body"></a>
<a id="tocsschedule_pickup_request_body"></a>

```json
{
  "cancelled_at": {},
  "carrier_id": {},
  "confirmation_number": "292513CL4A3",
  "contact_details": {
    "email": {},
    "name": "string",
    "phone": "strings"
  },
  "created_at": {},
  "label_ids": [
    {}
  ],
  "pickup_address": {
    "address_line1": "1999 Bishop Grandin Blvd.",
    "address_line2": "Unit 408",
    "address_line3": "Building #7",
    "address_residential_indicator": "no",
    "city_locality": "Winnipeg",
    "company_name": "The Home Depot",
    "country_code": {},
    "email": "example@example.com",
    "name": "John Doe",
    "phone": "+1 204-253-9411 ext. 123",
    "postal_code": {},
    "state_province": "Manitoba"
  },
  "pickup_id": {},
  "pickup_notes": "string",
  "pickup_window": {
    "end_at": {},
    "start_at": {}
  },
  "pickup_windows": [
    {
      "end_at": {},
      "start_at": {}
    }
  ],
  "warehouse_id": {}
}
```

A schedule pickup request body

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cancelled_at|object|false|read-only|The date and time that the pickup was cancelled in ShipEngine.|
|carrier_id|object|false|read-only|The carrier_id associated with the pickup|
|confirmation_number|string \| null|false|read-only|The carrier confirmation number for the scheduled pickup.|
|contact_details|[contact_details](#schemacontact_details)|true|none|none|
|created_at|object|false|read-only|The date and time that the pickup was created in ShipEngine.|
|label_ids|[object]|true|none|Label IDs that will be included in the pickup request|
|pickup_address|object|false|read-only|none|
|pickup_id|object|false|read-only|none|
|pickup_notes|string|false|none|Used by some carriers to give special instructions for a package pickup|
|pickup_window|[pickup_window](#schemapickup_window)|true|write-only|The desired time range for the package pickup.|
|pickup_windows|[object]|false|read-only|An array of available pickup windows. Carriers can return multiple times that they will pickup packages.<br>|
|warehouse_id|object|false|read-only|The warehouse_id associated with the pickup|

<h2 id="tocS_schedule_pickup_response_body">schedule_pickup_response_body</h2>
<!-- backwards compatibility -->
<a id="schemaschedule_pickup_response_body"></a>
<a id="schema_schedule_pickup_response_body"></a>
<a id="tocSschedule_pickup_response_body"></a>
<a id="tocsschedule_pickup_response_body"></a>

```json
{
  "cancelled_at": {},
  "carrier_id": {},
  "confirmation_number": "292513CL4A3",
  "contact_details": {
    "email": {},
    "name": "string",
    "phone": "strings"
  },
  "created_at": {},
  "label_ids": [
    {}
  ],
  "pickup_address": {
    "address_line1": "1999 Bishop Grandin Blvd.",
    "address_line2": "Unit 408",
    "address_line3": "Building #7",
    "address_residential_indicator": "no",
    "city_locality": "Winnipeg",
    "company_name": "The Home Depot",
    "country_code": {},
    "email": "example@example.com",
    "name": "John Doe",
    "phone": "+1 204-253-9411 ext. 123",
    "postal_code": {},
    "state_province": "Manitoba"
  },
  "pickup_id": {},
  "pickup_notes": "string",
  "pickup_window": {
    "end_at": {},
    "start_at": {}
  },
  "pickup_windows": [
    {
      "end_at": {},
      "start_at": {}
    }
  ],
  "warehouse_id": {},
  "errors": [
    {
      "error_code": {},
      "error_source": {},
      "error_type": {},
      "message": "Body of request cannot be null."
    }
  ],
  "request_id": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cancelled_at|object|false|read-only|The date and time that the pickup was cancelled in ShipEngine.|
|carrier_id|object|false|read-only|The carrier_id associated with the pickup|
|confirmation_number|string \| null|false|read-only|The carrier confirmation number for the scheduled pickup.|
|contact_details|[contact_details](#schemacontact_details)|false|none|none|
|created_at|object|false|read-only|The date and time that the pickup was created in ShipEngine.|
|label_ids|[object]|false|none|Label IDs that will be included in the pickup request|
|pickup_address|object|false|read-only|none|
|pickup_id|object|false|read-only|none|
|pickup_notes|string|false|none|Used by some carriers to give special instructions for a package pickup|
|pickup_window|[pickup_window](#schemapickup_window)|false|write-only|The desired time range for the package pickup.|
|pickup_windows|[object]|false|read-only|An array of available pickup windows. Carriers can return multiple times that they will pickup packages.<br>|
|warehouse_id|object|false|read-only|The warehouse_id associated with the pickup|
|errors|[object]|true|read-only|The errors associated with the failed API call|
|request_id|object|true|none|A UUID that uniquely identifies the request id.<br>This can be given to the support team to help debug non-trivial issues that may occur<br>|

<h2 id="tocS_se_id">se_id</h2>
<!-- backwards compatibility -->
<a id="schemase_id"></a>
<a id="schema_se_id"></a>
<a id="tocSse_id"></a>
<a id="tocsse_id"></a>

```json
"se-28529731"
```

A string that uniquely identifies a ShipEngine resource, such as a carrier, label, shipment, etc.

<h2 id="tocS_service">service</h2>
<!-- backwards compatibility -->
<a id="schemaservice"></a>
<a id="schema_service"></a>
<a id="tocSservice"></a>
<a id="tocsservice"></a>

```json
{
  "carrier_code": {},
  "carrier_id": {},
  "domestic": true,
  "international": true,
  "is_multi_package_supported": true,
  "name": "USPS First Class Mail",
  "service_code": "usps_media_mail"
}
```

A service offered by the carrier

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|carrier_code|object|false|none|none|
|carrier_id|object|false|read-only|A string that uniquely identifies the carrier|
|domestic|boolean|false|read-only|Supports domestic shipping|
|international|boolean|false|read-only|Supports international shipping.|
|is_multi_package_supported|boolean|false|read-only|Carrier supports multiple packages per shipment|
|name|string|false|read-only|User friendly service name|
|service_code|string|false|read-only|service code|

<h2 id="tocS_service_code">service_code</h2>
<!-- backwards compatibility -->
<a id="schemaservice_code"></a>
<a id="schema_service_code"></a>
<a id="tocSservice_code"></a>
<a id="tocsservice_code"></a>

```json
"usps_first_class_mail"
```

A [carrier service](https://www.shipengine.com/docs/shipping/use-a-carrier-service/), such as `fedex_ground`, `usps_first_class_mail`, `flat_rate_envelope`, etc.

<h2 id="tocS_shipment">shipment</h2>
<!-- backwards compatibility -->
<a id="schemashipment"></a>
<a id="schema_shipment"></a>
<a id="tocSshipment"></a>
<a id="tocsshipment"></a>

```json
{
  "advanced_options": {
    "bill_to_account": null,
    "bill_to_country_code": null,
    "bill_to_party": null,
    "bill_to_postal_code": null,
    "collect_on_delivery": {
      "payment_amount": {
        "amount": 0,
        "currency": {}
      },
      "payment_type": {}
    },
    "contains_alcohol": false,
    "custom_field1": null,
    "custom_field2": null,
    "custom_field3": null,
    "delivered_duty_paid": false,
    "dry_ice": false,
    "dry_ice_weight": {
      "unit": {},
      "value": 0.1
    },
    "fedex_freight": {
      "booking_confirmation": "string",
      "shipper_load_and_count": "string"
    },
    "freight_class": 77.5,
    "non_machinable": false,
    "origin_type": null,
    "saturday_delivery": false,
    "shipper_release": null,
    "third_party_consignee": false,
    "use_ups_ground_freight_pricing": null
  },
  "carrier_id": {},
  "confirmation": "none",
  "created_at": {},
  "customs": null,
  "external_order_id": "string",
  "external_shipment_id": "string",
  "insurance_provider": "none",
  "items": [],
  "modified_at": {},
  "order_source_code": {},
  "origin_type": {},
  "packages": [
    {
      "content_description": "Hand knitted wool socks",
      "dimensions": {
        "height": 0,
        "length": 0,
        "unit": "inch",
        "width": 0
      },
      "external_package_id": "string",
      "form_download": {
        "href": {},
        "type": "string"
      },
      "insured_value": [
        {
          "amount": 0,
          "currency": "usd"
        }
      ],
      "label_download": {
        "href": {},
        "pdf": {},
        "png": {},
        "zpl": {}
      },
      "label_messages": {
        "reference1": null,
        "reference2": null,
        "reference3": null
      },
      "package_code": {},
      "package_id": {},
      "sequence": 0,
      "tracking_number": {},
      "weight": {
        "unit": {},
        "value": 0.1
      }
    }
  ],
  "return_to": {
    "address_line1": "1999 Bishop Grandin Blvd.",
    "address_line2": "Unit 408",
    "address_line3": "Building #7",
    "address_residential_indicator": "no",
    "city_locality": "Winnipeg",
    "company_name": "The Home Depot",
    "country_code": {},
    "email": "example@example.com",
    "name": "John Doe",
    "phone": "+1 204-253-9411 ext. 123",
    "postal_code": {},
    "state_province": "Manitoba",
    "instructions": "string"
  },
  "service_code": {},
  "ship_date": {},
  "ship_from": {
    "address_line1": "1999 Bishop Grandin Blvd.",
    "address_line2": "Unit 408",
    "address_line3": "Building #7",
    "address_residential_indicator": "no",
    "city_locality": "Winnipeg",
    "company_name": "The Home Depot",
    "country_code": {},
    "email": "example@example.com",
    "name": "John Doe",
    "phone": "+1 204-253-9411 ext. 123",
    "postal_code": {},
    "state_province": "Manitoba",
    "instructions": "string"
  },
  "ship_to": {
    "address_line1": "1999 Bishop Grandin Blvd.",
    "address_line2": "Unit 408",
    "address_line3": "Building #7",
    "address_residential_indicator": "no",
    "city_locality": "Winnipeg",
    "company_name": "The Home Depot",
    "country_code": {},
    "email": "example@example.com",
    "name": "John Doe",
    "phone": "+1 204-253-9411 ext. 123",
    "postal_code": {},
    "state_province": "Manitoba",
    "instructions": "string"
  },
  "shipment_id": {},
  "shipment_number": "string",
  "shipment_status": "pending",
  "tags": [],
  "tax_identifiers": [
    {
      "identifier_type": {},
      "issuing_authority": "string",
      "taxable_entity_type": {},
      "value": "string"
    }
  ],
  "total_weight": {
    "unit": {},
    "value": 0.1
  },
  "warehouse_id": null
}
```

The information necessary to ship a package, such as the origin, the destination, the carrier service, and the package dimensions and weight.

> **Note:** Either `ship_from` or `warehouse_id` must be set.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|advanced_options|object|true|none|Advanced shipment options.  These are entirely optional.|
|carrier_id|object|true|none|The carrier account that is billed for the shipping charges|
|confirmation|object|true|none|The type of delivery confirmation that is required for this shipment.|
|created_at|object|true|read-only|The date and time that the shipment was created in ShipEngine.|
|customs|object \| null|true|none|Customs information.  This is usually only needed for international shipments.<br>|
|external_order_id|string \| null|false|none|ID that the Order Source assigned|
|external_shipment_id|string \| null|false|none|A unique user-defined key to identify a shipment.  This can be used to retrieve the shipment.<br><br>> **Warning:** The `external_shipment_id` is limited to 50 characters. Any additional characters will be truncated.<br>|
|insurance_provider|object|true|none|The insurance provider to use for any insured packages in the shipment.<br>|
|items|[object]|false|none|Describe the packages included in this shipment as related to potential metadata that was imported from<br>external order sources<br>|
|modified_at|object|true|read-only|The date and time that the shipment was created or last modified.|
|order_source_code|object|false|none|none|
|origin_type|object \| null|false|none|Indicates if the package will be picked up or dropped off by the carrier|
|packages|[object]|true|none|The packages in the shipment.<br><br>> **Note:** Some carriers only allow one package per shipment.  If you attempt to create a multi-package shipment for a carrier that doesn't allow it, an error will be returned.<br>|
|return_to|object|true|none|The return address for this shipment.  Defaults to the `ship_from` address.<br>|
|service_code|object|true|none|The [carrier service](https://www.shipengine.com/docs/shipping/use-a-carrier-service/) used to ship the package, such as `fedex_ground`, `usps_first_class_mail`, `flat_rate_envelope`, etc.<br>|
|ship_date|object|true|none|The date that the shipment was (or will be) shippped.  ShipEngine will take the day of week into consideration. For example, if the carrier does not operate on Sundays, then a package that would have shipped on Sunday will ship on Monday instead.<br>|
|ship_from|object|true|none|The shipment's origin address. If you frequently ship from the same location, consider [creating a warehouse](https://www.shipengine.com/docs/reference/create-warehouse/).  Then you can simply specify the `warehouse_id` rather than the complete address each time.<br>|
|ship_to|object|true|none|The recipient's mailing address|
|shipment_id|object|true|read-only|A string that uniquely identifies the shipment|
|shipment_number|string \| null|false|none|A non-unique user-defined number used to identify a shipment.  If undefined, this will match the external_shipment_id of the shipment.<br><br>> **Warning:** The `shipment_number` is limited to 50 characters. Any additional characters will be truncated.<br>|
|shipment_status|object|true|read-only|The current status of the shipment|
|tags|[object]|true|read-only|Arbitrary tags associated with this shipment.  Tags can be used to categorize shipments, and shipments can be queried by their tags.<br>|
|tax_identifiers|[object]|false|none|none|
|total_weight|object|true|read-only|The combined weight of all packages in the shipment|
|warehouse_id|object \| null|true|none|The [warehouse](https://www.shipengine.com/docs/shipping/ship-from-a-warehouse/) that the shipment is being shipped from.  Either `warehouse_id` or `ship_from` must be specified.<br>|

<h2 id="tocS_shipment_id_request">shipment_id_request</h2>
<!-- backwards compatibility -->
<a id="schemashipment_id_request"></a>
<a id="schema_shipment_id_request"></a>
<a id="tocSshipment_id_request"></a>
<a id="tocsshipment_id_request"></a>

```json
{
  "shipment_id": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|shipment_id|object|false|none|A string that uniquely identifies the shipment|

<h2 id="tocS_shipment_item">shipment_item</h2>
<!-- backwards compatibility -->
<a id="schemashipment_item"></a>
<a id="schema_shipment_item"></a>
<a id="tocSshipment_item"></a>
<a id="tocsshipment_item"></a>

```json
{
  "asin": "B00005N5PF",
  "external_order_id": "string",
  "external_order_item_id": "string",
  "name": "string",
  "order_source_code": {},
  "quantity": 0,
  "sales_order_id": "string",
  "sales_order_item_id": "string",
  "sku": "string"
}
```

A shipment item

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|asin|string \| null|false|none|Amazon Standard Identification Number|
|external_order_id|string \| null|false|none|external order id|
|external_order_item_id|string \| null|false|none|external order item id|
|name|string|false|none|item name|
|order_source_code|object|false|none|none|
|quantity|integer(int32)|false|none|The quantity of this item included in the shipment|
|sales_order_id|string \| null|false|none|sales order id|
|sales_order_item_id|string \| null|false|none|sales order item id|
|sku|string \| null|false|none|Item Stock Keeping Unit|

<h2 id="tocS_shipment_request">shipment_request</h2>
<!-- backwards compatibility -->
<a id="schemashipment_request"></a>
<a id="schema_shipment_request"></a>
<a id="tocSshipment_request"></a>
<a id="tocsshipment_request"></a>

```json
{
  "shipment": {
    "validate_address": "no_validation",
    "advanced_options": {
      "bill_to_account": null,
      "bill_to_country_code": null,
      "bill_to_party": null,
      "bill_to_postal_code": null,
      "collect_on_delivery": {
        "payment_amount": {
          "amount": 0,
          "currency": {}
        },
        "payment_type": {}
      },
      "contains_alcohol": false,
      "custom_field1": null,
      "custom_field2": null,
      "custom_field3": null,
      "delivered_duty_paid": false,
      "dry_ice": false,
      "dry_ice_weight": {
        "unit": {},
        "value": 0.1
      },
      "fedex_freight": {
        "booking_confirmation": "string",
        "shipper_load_and_count": "string"
      },
      "freight_class": 77.5,
      "non_machinable": false,
      "origin_type": null,
      "saturday_delivery": false,
      "shipper_release": null,
      "third_party_consignee": false,
      "use_ups_ground_freight_pricing": null
    },
    "carrier_id": {},
    "confirmation": "none",
    "created_at": {},
    "customs": null,
    "external_order_id": "string",
    "external_shipment_id": "string",
    "insurance_provider": "none",
    "items": [],
    "modified_at": {},
    "order_source_code": {},
    "origin_type": {},
    "packages": [
      {
        "content_description": "Hand knitted wool socks",
        "dimensions": {
          "height": 0,
          "length": 0,
          "unit": "inch",
          "width": 0
        },
        "external_package_id": "string",
        "form_download": {
          "href": {},
          "type": "string"
        },
        "insured_value": [
          {
            "amount": 0,
            "currency": "usd"
          }
        ],
        "label_download": {
          "href": {},
          "pdf": {},
          "png": {},
          "zpl": {}
        },
        "label_messages": {
          "reference1": null,
          "reference2": null,
          "reference3": null
        },
        "package_code": {},
        "package_id": {},
        "sequence": 0,
        "tracking_number": {},
        "weight": {
          "unit": {},
          "value": 0.1
        }
      }
    ],
    "return_to": {
      "address_line1": "1999 Bishop Grandin Blvd.",
      "address_line2": "Unit 408",
      "address_line3": "Building #7",
      "address_residential_indicator": "no",
      "city_locality": "Winnipeg",
      "company_name": "The Home Depot",
      "country_code": {},
      "email": "example@example.com",
      "name": "John Doe",
      "phone": "+1 204-253-9411 ext. 123",
      "postal_code": {},
      "state_province": "Manitoba",
      "instructions": "string"
    },
    "service_code": {},
    "ship_date": {},
    "ship_from": {
      "address_line1": "1999 Bishop Grandin Blvd.",
      "address_line2": "Unit 408",
      "address_line3": "Building #7",
      "address_residential_indicator": "no",
      "city_locality": "Winnipeg",
      "company_name": "The Home Depot",
      "country_code": {},
      "email": "example@example.com",
      "name": "John Doe",
      "phone": "+1 204-253-9411 ext. 123",
      "postal_code": {},
      "state_province": "Manitoba",
      "instructions": "string"
    },
    "ship_to": {
      "address_line1": "1999 Bishop Grandin Blvd.",
      "address_line2": "Unit 408",
      "address_line3": "Building #7",
      "address_residential_indicator": "no",
      "city_locality": "Winnipeg",
      "company_name": "The Home Depot",
      "country_code": {},
      "email": "example@example.com",
      "name": "John Doe",
      "phone": "+1 204-253-9411 ext. 123",
      "postal_code": {},
      "state_province": "Manitoba",
      "instructions": "string"
    },
    "shipment_id": {},
    "shipment_number": "string",
    "shipment_status": "pending",
    "tags": [],
    "tax_identifiers": [
      {
        "identifier_type": {},
        "issuing_authority": "string",
        "taxable_entity_type": {},
        "value": "string"
      }
    ],
    "total_weight": {
      "unit": {},
      "value": 0.1
    },
    "warehouse_id": null
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|shipment|object|false|none|The shipment object|

<h2 id="tocS_shipment_status">shipment_status</h2>
<!-- backwards compatibility -->
<a id="schemashipment_status"></a>
<a id="schema_shipment_status"></a>
<a id="tocSshipment_status"></a>
<a id="tocsshipment_status"></a>

```json
"pending"
```

The possible shipment status values

<h2 id="tocS_shipments_sort_by">shipments_sort_by</h2>
<!-- backwards compatibility -->
<a id="schemashipments_sort_by"></a>
<a id="schema_shipments_sort_by"></a>
<a id="tocSshipments_sort_by"></a>
<a id="tocsshipments_sort_by"></a>

```json
"modified_at"
```

The possible shipments sort by values

<h2 id="tocS_shipping_address">shipping_address</h2>
<!-- backwards compatibility -->
<a id="schemashipping_address"></a>
<a id="schema_shipping_address"></a>
<a id="tocSshipping_address"></a>
<a id="tocsshipping_address"></a>

```json
{
  "address_line1": "1999 Bishop Grandin Blvd.",
  "address_line2": "Unit 408",
  "address_line3": "Building #7",
  "address_residential_indicator": "no",
  "city_locality": "Winnipeg",
  "company_name": "The Home Depot",
  "country_code": {},
  "email": "example@example.com",
  "name": "John Doe",
  "phone": "+1 204-253-9411 ext. 123",
  "postal_code": {},
  "state_province": "Manitoba",
  "instructions": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address_line1|string|true|none|The first line of the street address.  For some addresses, this may be the only line.  Other addresses may require 2 or 3 lines.<br>|
|address_line2|string \| null|false|none|The second line of the street address.  For some addresses, this line may not be needed.<br>|
|address_line3|string \| null|false|none|The third line of the street address.  For some addresses, this line may not be needed.<br>|
|address_residential_indicator|object|true|none|Indicates whether this is a residential address.|
|city_locality|string|true|none|The name of the city or locality|
|company_name|string \| null|false|none|If this is a business address, then the company name should be specified here.<br>|
|country_code|object|true|none|The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)<br>|
|email|string \| null|false|none|Email for the address owner.<br>|
|name|string|true|none|The name of a contact person at this address.  This field may be set instead of - or in addition to - the `company_name` field.<br>|
|phone|string|true|none|The phone number of a contact person at this address.  The format of this phone number varies depending on the country.<br>|
|postal_code|object|true|none|none|
|state_province|string|true|none|The state or province.  For some countries (including the U.S.) only abbreviations are allowed.  Other countries allow the full name or abbreviation.<br>|
|instructions|string \| null|false|none|Additional text about how to handle the shipment at this address.<br>|

<h2 id="tocS_smart_post_hub">smart_post_hub</h2>
<!-- backwards compatibility -->
<a id="schemasmart_post_hub"></a>
<a id="schema_smart_post_hub"></a>
<a id="tocSsmart_post_hub"></a>
<a id="tocssmart_post_hub"></a>

```json
"none"
```

The possible smart post hub values

<h2 id="tocS_sort_dir">sort_dir</h2>
<!-- backwards compatibility -->
<a id="schemasort_dir"></a>
<a id="schema_sort_dir"></a>
<a id="tocSsort_dir"></a>
<a id="tocssort_dir"></a>

```json
"asc"
```

Controls the sort order of queries

|Value     |Description
|:---------|:-----------------------------------------------------
|`asc`     |Return results in ascending order
|`desc`    |Return results in descending order

<h2 id="tocS_status_code">status_code</h2>
<!-- backwards compatibility -->
<a id="schemastatus_code"></a>
<a id="schema_status_code"></a>
<a id="tocSstatus_code"></a>
<a id="tocsstatus_code"></a>

```json
"un"
```

The tracking status codes

|Value       |Description
|:---------  |:-----------------------------------------------------
|`un` | Unknown
|`ac` | Accepted
|`it` | In Transit
|`de` | Delivered
|`ex` | Exception
|`at` | Delivery Attempt
|`ny` | Not Yet In System

<h2 id="tocS_tag">tag</h2>
<!-- backwards compatibility -->
<a id="schematag"></a>
<a id="schema_tag"></a>
<a id="tocStag"></a>
<a id="tocstag"></a>

```json
{
  "name": "Fragile"
}
```

Tags are arbitrary strings that you can use to categorize shipments.  For example, you may want to use tags to distinguish between domestic and international shipments, or between insured and uninsured shipments.  Or maybe you want to create a tag for each of your customers so you can easily retrieve every shipment for a customer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|The tag name.|

<h2 id="tocS_tag_name">tag_name</h2>
<!-- backwards compatibility -->
<a id="schematag_name"></a>
<a id="schema_tag_name"></a>
<a id="tocStag_name"></a>
<a id="tocstag_name"></a>

```json
"Fragile"
```

Tags are arbitrary strings that you can use to categorize shipments.  For example, you may want to use tags to distinguish between domestic and international shipments, or between insured and uninsured shipments.  Or maybe you want to create a tag for each of your customers so you can easily retrieve every shipment for a customer.

<h2 id="tocS_tag_shipment_response_body">tag_shipment_response_body</h2>
<!-- backwards compatibility -->
<a id="schematag_shipment_response_body"></a>
<a id="schema_tag_shipment_response_body"></a>
<a id="tocStag_shipment_response_body"></a>
<a id="tocstag_shipment_response_body"></a>

```json
{
  "shipment_id": {},
  "tag": {
    "name": "Fragile"
  }
}
```

A shipment add tag response body

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|shipment_id|object|true|read-only|A string that uniquely identifies the shipment|
|tag|object|true|read-only|The tag that is now associated with this shipment|

<h2 id="tocS_tax_identifier">tax_identifier</h2>
<!-- backwards compatibility -->
<a id="schematax_identifier"></a>
<a id="schema_tax_identifier"></a>
<a id="tocStax_identifier"></a>
<a id="tocstax_identifier"></a>

```json
{
  "identifier_type": {},
  "issuing_authority": "string",
  "taxable_entity_type": {},
  "value": "string"
}
```

A tax identifier object

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|identifier_type|object|true|none|none|
|issuing_authority|string|true|none|The authority that issued this tax. This must be a valid 2 character ISO 3166 Alpha 2 country code.|
|taxable_entity_type|object|true|none|none|
|value|string|true|none|The value of the identifier|

<h2 id="tocS_taxable_entity_type">taxable_entity_type</h2>
<!-- backwards compatibility -->
<a id="schemataxable_entity_type"></a>
<a id="schema_taxable_entity_type"></a>
<a id="tocStaxable_entity_type"></a>
<a id="tocstaxable_entity_type"></a>

```json
"shipper"
```

The taxable entity type for this tax item. Valid values include the following

|Value       |Description
|:---------  |:-----------------------------------------------------
|`shipper`   | The shipper is responsible for this tax.
|`recipient` | The recipient of the shipment is responsible for this tax.

<h2 id="tocS_tokens_get_ephemeral_token_response_body.yaml">tokens_get_ephemeral_token_response_body.yaml</h2>
<!-- backwards compatibility -->
<a id="schematokens_get_ephemeral_token_response_body.yaml"></a>
<a id="schema_tokens_get_ephemeral_token_response_body.yaml"></a>
<a id="tocStokens_get_ephemeral_token_response_body.yaml"></a>
<a id="tocstokens_get_ephemeral_token_response_body.yaml"></a>

```json
{
  "redirect_url": "string",
  "token": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|redirect_url|string|false|none|The redirect url formatted with the requested token.|
|token|string|false|none|The requested token that expires in 10 seconds.|

<h2 id="tocS_track_event">track_event</h2>
<!-- backwards compatibility -->
<a id="schematrack_event"></a>
<a id="schema_track_event"></a>
<a id="tocStrack_event"></a>
<a id="tocstrack_event"></a>

```json
{
  "carrier_detail_code": "OT",
  "carrier_occurred_at": {},
  "carrier_status_code": 1,
  "carrier_status_description": "Your item was delivered in or at the mailbox at 9:10 am on March",
  "city_locality": "AUSTIN",
  "company_name": "Stamps.com",
  "country_code": {},
  "description": "Delivered, In/At Mailbox",
  "event_code": "string",
  "latitude": -90,
  "longitude": -180,
  "occurred_at": {},
  "postal_code": 78756,
  "signer": "string",
  "state_province": "TX",
  "status_code": {},
  "status_description": "In Transit"
}
```

A track event

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|carrier_detail_code|string|true|read-only|Carrier detail code|
|carrier_occurred_at|object|false|none|Carrier timestamp for the event, it is assumed to be the local time of where the event occurred.|
|carrier_status_code|string|true|read-only|Carrier status code|
|carrier_status_description|string|true|read-only|carrier status description|
|city_locality|string|true|read-only|City locality|
|company_name|string|false|read-only|Company Name|
|country_code|object|false|none|none|
|description|string|false|read-only|Event description|
|event_code|string|false|none|Event Code|
|latitude|number(double)|false|none|Latitude coordinate of tracking event.|
|longitude|number(double)|false|none|Longitude coordinate of tracking event.|
|occurred_at|object|true|none|Timestamp for carrier event|
|postal_code|string|true|read-only|Postal code|
|signer|string|false|read-only|Signer information|
|state_province|string|true|read-only|State province|
|status_code|object|true|none|none|
|status_description|string|true|read-only|Event Status Description|

<h2 id="tocS_tracking_information">tracking_information</h2>
<!-- backwards compatibility -->
<a id="schematracking_information"></a>
<a id="schema_tracking_information"></a>
<a id="tocStracking_information"></a>
<a id="tocstracking_information"></a>

```json
{
  "actual_delivery_date": {},
  "carrier_code": {},
  "carrier_detail_code": "OT",
  "carrier_id": {},
  "carrier_status_code": 1,
  "carrier_status_description": "Your item was delivered in or at the mailbox at 9:10 am on March",
  "estimated_delivery_date": {},
  "events": [
    {
      "carrier_detail_code": "OT",
      "carrier_occurred_at": {},
      "carrier_status_code": 1,
      "carrier_status_description": "Your item was delivered in or at the mailbox at 9:10 am on March",
      "city_locality": "AUSTIN",
      "company_name": "Stamps.com",
      "country_code": {},
      "description": "Delivered, In/At Mailbox",
      "event_code": "string",
      "latitude": -90,
      "longitude": -180,
      "occurred_at": {},
      "postal_code": 78756,
      "signer": "string",
      "state_province": "TX",
      "status_code": {},
      "status_description": "In Transit"
    }
  ],
  "exception_description": "string",
  "ship_date": {},
  "status_code": {},
  "status_description": "Delivered",
  "tracking_number": {},
  "tracking_url": "https://www.fedex.com/fedextrack/?action=track&trackingnumber=1234"
}
```

A tracking information resource

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actual_delivery_date|object|false|none|none|
|carrier_code|object|false|none|none|
|carrier_detail_code|string|false|read-only|Carrier detail code|
|carrier_id|object|false|none|none|
|carrier_status_code|string|false|read-only|Carrier status code|
|carrier_status_description|string|false|read-only|carrier status description|
|estimated_delivery_date|object|false|none|none|
|events|[[track_event](#schematrack_event)]|false|read-only|The events that have occured during the lifetime of this tracking number.|
|exception_description|string|false|read-only|Exception description|
|ship_date|object|false|none|none|
|status_code|object|false|none|none|
|status_description|string|false|read-only|Status description|
|tracking_number|object|false|none|none|
|tracking_url|string|false|read-only|Carrier Tracking Url, if available|

<h2 id="tocS_tracking_number">tracking_number</h2>
<!-- backwards compatibility -->
<a id="schematracking_number"></a>
<a id="schema_tracking_number"></a>
<a id="tocStracking_number"></a>
<a id="tocstracking_number"></a>

```json
"1Z932R800392060079"
```

A tracking number for a package. The format depends on the carrier.

<h2 id="tocS_tracking_status">tracking_status</h2>
<!-- backwards compatibility -->
<a id="schematracking_status"></a>
<a id="schema_tracking_status"></a>
<a id="tocStracking_status"></a>
<a id="tocstracking_status"></a>

```json
"unknown"
```

The different statuses that can apply to a shipment.

<h2 id="tocS_update_amazon_buy_shipping_request_body">update_amazon_buy_shipping_request_body</h2>
<!-- backwards compatibility -->
<a id="schemaupdate_amazon_buy_shipping_request_body"></a>
<a id="schema_update_amazon_buy_shipping_request_body"></a>
<a id="tocSupdate_amazon_buy_shipping_request_body"></a>
<a id="tocsupdate_amazon_buy_shipping_request_body"></a>

```json
{
  "email": "string"
}
```

An amazon buy shipping account settings request body

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|false|none|Email|

<h2 id="tocS_update_carrier_settings_request_body">update_carrier_settings_request_body</h2>
<!-- backwards compatibility -->
<a id="schemaupdate_carrier_settings_request_body"></a>
<a id="schema_update_carrier_settings_request_body"></a>
<a id="tocSupdate_carrier_settings_request_body"></a>
<a id="tocsupdate_carrier_settings_request_body"></a>

```json
{
  "is_primary_account": true,
  "nickname": "string",
  "should_hide_account_number_on_archive_doc": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[update_dhl_express_settings_request_body](#schemaupdate_dhl_express_settings_request_body)|false|none|An update dhl express settings request body|
|*oneOf*|[update_fedex_settings_request_body](#schemaupdate_fedex_settings_request_body)|false|none|An update Fedex settings request body|
|*oneOf*|[update_newgistics_settings_request_body](#schemaupdate_newgistics_settings_request_body)|false|none|A newgistics account settings request body|
|*oneOf*|[update_ups_settings_request_body](#schemaupdate_ups_settings_request_body)|false|none|An update UPS settings request body|
|*oneOf*|[update_amazon_buy_shipping_request_body](#schemaupdate_amazon_buy_shipping_request_body)|false|none|An amazon buy shipping account settings request body|

<h2 id="tocS_update_dhl_express_settings_request_body">update_dhl_express_settings_request_body</h2>
<!-- backwards compatibility -->
<a id="schemaupdate_dhl_express_settings_request_body"></a>
<a id="schema_update_dhl_express_settings_request_body"></a>
<a id="tocSupdate_dhl_express_settings_request_body"></a>
<a id="tocsupdate_dhl_express_settings_request_body"></a>

```json
{
  "is_primary_account": true,
  "nickname": "string",
  "should_hide_account_number_on_archive_doc": true
}
```

An update dhl express settings request body

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|is_primary_account|boolean|false|none|Indicates if this is primary account|
|nickname|string|false|none|Account nickname|
|should_hide_account_number_on_archive_doc|boolean|false|none|Indicates if the account number should be hidden on the archive documentation|

<h2 id="tocS_update_fedex_settings_request_body">update_fedex_settings_request_body</h2>
<!-- backwards compatibility -->
<a id="schemaupdate_fedex_settings_request_body"></a>
<a id="schema_update_fedex_settings_request_body"></a>
<a id="tocSupdate_fedex_settings_request_body"></a>
<a id="tocsupdate_fedex_settings_request_body"></a>

```json
{
  "is_primary_account": true,
  "letterhead_image": "string",
  "nickname": "string",
  "pickup_type": {},
  "signature_image": "string",
  "smart_post_endorsement": {},
  "smart_post_hub": {}
}
```

An update Fedex settings request body

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|is_primary_account|boolean|false|none|none|
|letterhead_image|string|false|none|none|
|nickname|string|false|none|Account nickname|
|pickup_type|object|false|none|none|
|signature_image|string|false|none|none|
|smart_post_endorsement|object|false|none|none|
|smart_post_hub|object|false|none|none|

<h2 id="tocS_update_newgistics_settings_request_body">update_newgistics_settings_request_body</h2>
<!-- backwards compatibility -->
<a id="schemaupdate_newgistics_settings_request_body"></a>
<a id="schema_update_newgistics_settings_request_body"></a>
<a id="tocSupdate_newgistics_settings_request_body"></a>
<a id="tocsupdate_newgistics_settings_request_body"></a>

```json
{
  "include_barcode_with_order_number": true,
  "receive_email_on_manifest_processing": true
}
```

A newgistics account settings request body

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|include_barcode_with_order_number|boolean|false|none|none|
|receive_email_on_manifest_processing|boolean|false|none|none|

<h2 id="tocS_update_package_type_request_body">update_package_type_request_body</h2>
<!-- backwards compatibility -->
<a id="schemaupdate_package_type_request_body"></a>
<a id="schema_update_package_type_request_body"></a>
<a id="tocSupdate_package_type_request_body"></a>
<a id="tocsupdate_package_type_request_body"></a>

```json
{
  "description": "Packaging for laptops",
  "dimensions": {
    "height": 0,
    "length": 0,
    "unit": "inch",
    "width": 0
  },
  "name": "laptop_box",
  "package_code": {},
  "package_id": {}
}
```

An update package type request body

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string \| null|false|none|Provides a helpful description for the custom package.|
|dimensions|object|false|none|The custom dimensions for the package.|
|name|string|true|none|none|
|package_code|object|true|none|none|
|package_id|object|false|none|A string that uniquely identifies the package.|

<h2 id="tocS_update_shipment_fields">update_shipment_fields</h2>
<!-- backwards compatibility -->
<a id="schemaupdate_shipment_fields"></a>
<a id="schema_update_shipment_fields"></a>
<a id="tocSupdate_shipment_fields"></a>
<a id="tocsupdate_shipment_fields"></a>

```json
{
  "validate_address": "no_validation"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|validate_address|object|false|none|none|

<h2 id="tocS_update_shipment_request_body">update_shipment_request_body</h2>
<!-- backwards compatibility -->
<a id="schemaupdate_shipment_request_body"></a>
<a id="schema_update_shipment_request_body"></a>
<a id="tocSupdate_shipment_request_body"></a>
<a id="tocsupdate_shipment_request_body"></a>

```json
{
  "advanced_options": {
    "bill_to_account": null,
    "bill_to_country_code": null,
    "bill_to_party": null,
    "bill_to_postal_code": null,
    "collect_on_delivery": {
      "payment_amount": {
        "amount": 0,
        "currency": {}
      },
      "payment_type": {}
    },
    "contains_alcohol": false,
    "custom_field1": null,
    "custom_field2": null,
    "custom_field3": null,
    "delivered_duty_paid": false,
    "dry_ice": false,
    "dry_ice_weight": {
      "unit": {},
      "value": 0.1
    },
    "fedex_freight": {
      "booking_confirmation": "string",
      "shipper_load_and_count": "string"
    },
    "freight_class": 77.5,
    "non_machinable": false,
    "origin_type": null,
    "saturday_delivery": false,
    "shipper_release": null,
    "third_party_consignee": false,
    "use_ups_ground_freight_pricing": null
  },
  "carrier_id": {},
  "confirmation": "none",
  "created_at": {},
  "customs": null,
  "external_order_id": "string",
  "external_shipment_id": "string",
  "insurance_provider": "none",
  "items": [],
  "modified_at": {},
  "order_source_code": {},
  "origin_type": {},
  "packages": [
    {
      "content_description": "Hand knitted wool socks",
      "dimensions": {
        "height": 0,
        "length": 0,
        "unit": "inch",
        "width": 0
      },
      "external_package_id": "string",
      "form_download": {
        "href": {},
        "type": "string"
      },
      "insured_value": [
        {
          "amount": 0,
          "currency": "usd"
        }
      ],
      "label_download": {
        "href": {},
        "pdf": {},
        "png": {},
        "zpl": {}
      },
      "label_messages": {
        "reference1": null,
        "reference2": null,
        "reference3": null
      },
      "package_code": {},
      "package_id": {},
      "sequence": 0,
      "tracking_number": {},
      "weight": {
        "unit": {},
        "value": 0.1
      }
    }
  ],
  "return_to": {
    "address_line1": "1999 Bishop Grandin Blvd.",
    "address_line2": "Unit 408",
    "address_line3": "Building #7",
    "address_residential_indicator": "no",
    "city_locality": "Winnipeg",
    "company_name": "The Home Depot",
    "country_code": {},
    "email": "example@example.com",
    "name": "John Doe",
    "phone": "+1 204-253-9411 ext. 123",
    "postal_code": {},
    "state_province": "Manitoba",
    "instructions": "string"
  },
  "service_code": {},
  "ship_date": {},
  "ship_from": {
    "address_line1": "1999 Bishop Grandin Blvd.",
    "address_line2": "Unit 408",
    "address_line3": "Building #7",
    "address_residential_indicator": "no",
    "city_locality": "Winnipeg",
    "company_name": "The Home Depot",
    "country_code": {},
    "email": "example@example.com",
    "name": "John Doe",
    "phone": "+1 204-253-9411 ext. 123",
    "postal_code": {},
    "state_province": "Manitoba",
    "instructions": "string"
  },
  "ship_to": {
    "address_line1": "1999 Bishop Grandin Blvd.",
    "address_line2": "Unit 408",
    "address_line3": "Building #7",
    "address_residential_indicator": "no",
    "city_locality": "Winnipeg",
    "company_name": "The Home Depot",
    "country_code": {},
    "email": "example@example.com",
    "name": "John Doe",
    "phone": "+1 204-253-9411 ext. 123",
    "postal_code": {},
    "state_province": "Manitoba",
    "instructions": "string"
  },
  "shipment_id": {},
  "shipment_number": "string",
  "shipment_status": "pending",
  "tags": [],
  "tax_identifiers": [
    {
      "identifier_type": {},
      "issuing_authority": "string",
      "taxable_entity_type": {},
      "value": "string"
    }
  ],
  "total_weight": {
    "unit": {},
    "value": 0.1
  },
  "warehouse_id": null,
  "validate_address": "no_validation"
}
```

An update shipment request body

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|advanced_options|object|false|none|Advanced shipment options.  These are entirely optional.|
|carrier_id|object|false|none|The carrier account that is billed for the shipping charges|
|confirmation|object|false|none|The type of delivery confirmation that is required for this shipment.|
|created_at|object|false|read-only|The date and time that the shipment was created in ShipEngine.|
|customs|object \| null|false|none|Customs information.  This is usually only needed for international shipments.<br>|
|external_order_id|string \| null|false|none|ID that the Order Source assigned|
|external_shipment_id|string \| null|false|none|A unique user-defined key to identify a shipment.  This can be used to retrieve the shipment.<br><br>> **Warning:** The `external_shipment_id` is limited to 50 characters. Any additional characters will be truncated.<br>|
|insurance_provider|object|false|none|The insurance provider to use for any insured packages in the shipment.<br>|
|items|[object]|false|none|Describe the packages included in this shipment as related to potential metadata that was imported from<br>external order sources<br>|
|modified_at|object|false|read-only|The date and time that the shipment was created or last modified.|
|order_source_code|object|false|none|none|
|origin_type|object \| null|false|none|Indicates if the package will be picked up or dropped off by the carrier|
|packages|[object]|false|none|The packages in the shipment.<br><br>> **Note:** Some carriers only allow one package per shipment.  If you attempt to create a multi-package shipment for a carrier that doesn't allow it, an error will be returned.<br>|
|return_to|object|false|none|The return address for this shipment.  Defaults to the `ship_from` address.<br>|
|service_code|object|false|none|The [carrier service](https://www.shipengine.com/docs/shipping/use-a-carrier-service/) used to ship the package, such as `fedex_ground`, `usps_first_class_mail`, `flat_rate_envelope`, etc.<br>|
|ship_date|object|false|none|The date that the shipment was (or will be) shippped.  ShipEngine will take the day of week into consideration. For example, if the carrier does not operate on Sundays, then a package that would have shipped on Sunday will ship on Monday instead.<br>|
|ship_from|object|true|none|The shipment's origin address. If you frequently ship from the same location, consider [creating a warehouse](https://www.shipengine.com/docs/reference/create-warehouse/).  Then you can simply specify the `warehouse_id` rather than the complete address each time.<br>|
|ship_to|object|true|none|The recipient's mailing address|
|shipment_id|object|false|read-only|A string that uniquely identifies the shipment|
|shipment_number|string \| null|false|none|A non-unique user-defined number used to identify a shipment.  If undefined, this will match the external_shipment_id of the shipment.<br><br>> **Warning:** The `shipment_number` is limited to 50 characters. Any additional characters will be truncated.<br>|
|shipment_status|object|false|read-only|The current status of the shipment|
|tags|[object]|false|read-only|Arbitrary tags associated with this shipment.  Tags can be used to categorize shipments, and shipments can be queried by their tags.<br>|
|tax_identifiers|[object]|false|none|none|
|total_weight|object|false|read-only|The combined weight of all packages in the shipment|
|warehouse_id|object \| null|false|none|The [warehouse](https://www.shipengine.com/docs/shipping/ship-from-a-warehouse/) that the shipment is being shipped from.  Either `warehouse_id` or `ship_from` must be specified.<br>|
|validate_address|object|false|none|none|

<h2 id="tocS_update_shipment_response_body">update_shipment_response_body</h2>
<!-- backwards compatibility -->
<a id="schemaupdate_shipment_response_body"></a>
<a id="schema_update_shipment_response_body"></a>
<a id="tocSupdate_shipment_response_body"></a>
<a id="tocsupdate_shipment_response_body"></a>

```json
{
  "advanced_options": {
    "bill_to_account": null,
    "bill_to_country_code": null,
    "bill_to_party": null,
    "bill_to_postal_code": null,
    "collect_on_delivery": {
      "payment_amount": {
        "amount": 0,
        "currency": {}
      },
      "payment_type": {}
    },
    "contains_alcohol": false,
    "custom_field1": null,
    "custom_field2": null,
    "custom_field3": null,
    "delivered_duty_paid": false,
    "dry_ice": false,
    "dry_ice_weight": {
      "unit": {},
      "value": 0.1
    },
    "fedex_freight": {
      "booking_confirmation": "string",
      "shipper_load_and_count": "string"
    },
    "freight_class": 77.5,
    "non_machinable": false,
    "origin_type": null,
    "saturday_delivery": false,
    "shipper_release": null,
    "third_party_consignee": false,
    "use_ups_ground_freight_pricing": null
  },
  "carrier_id": {},
  "confirmation": "none",
  "created_at": {},
  "customs": null,
  "external_order_id": "string",
  "external_shipment_id": "string",
  "insurance_provider": "none",
  "items": [],
  "modified_at": {},
  "order_source_code": {},
  "origin_type": {},
  "packages": [
    {
      "content_description": "Hand knitted wool socks",
      "dimensions": {
        "height": 0,
        "length": 0,
        "unit": "inch",
        "width": 0
      },
      "external_package_id": "string",
      "form_download": {
        "href": {},
        "type": "string"
      },
      "insured_value": [
        {
          "amount": 0,
          "currency": "usd"
        }
      ],
      "label_download": {
        "href": {},
        "pdf": {},
        "png": {},
        "zpl": {}
      },
      "label_messages": {
        "reference1": null,
        "reference2": null,
        "reference3": null
      },
      "package_code": {},
      "package_id": {},
      "sequence": 0,
      "tracking_number": {},
      "weight": {
        "unit": {},
        "value": 0.1
      }
    }
  ],
  "return_to": {
    "address_line1": "1999 Bishop Grandin Blvd.",
    "address_line2": "Unit 408",
    "address_line3": "Building #7",
    "address_residential_indicator": "no",
    "city_locality": "Winnipeg",
    "company_name": "The Home Depot",
    "country_code": {},
    "email": "example@example.com",
    "name": "John Doe",
    "phone": "+1 204-253-9411 ext. 123",
    "postal_code": {},
    "state_province": "Manitoba",
    "instructions": "string"
  },
  "service_code": {},
  "ship_date": {},
  "ship_from": {
    "address_line1": "1999 Bishop Grandin Blvd.",
    "address_line2": "Unit 408",
    "address_line3": "Building #7",
    "address_residential_indicator": "no",
    "city_locality": "Winnipeg",
    "company_name": "The Home Depot",
    "country_code": {},
    "email": "example@example.com",
    "name": "John Doe",
    "phone": "+1 204-253-9411 ext. 123",
    "postal_code": {},
    "state_province": "Manitoba",
    "instructions": "string"
  },
  "ship_to": {
    "address_line1": "1999 Bishop Grandin Blvd.",
    "address_line2": "Unit 408",
    "address_line3": "Building #7",
    "address_residential_indicator": "no",
    "city_locality": "Winnipeg",
    "company_name": "The Home Depot",
    "country_code": {},
    "email": "example@example.com",
    "name": "John Doe",
    "phone": "+1 204-253-9411 ext. 123",
    "postal_code": {},
    "state_province": "Manitoba",
    "instructions": "string"
  },
  "shipment_id": {},
  "shipment_number": "string",
  "shipment_status": "pending",
  "tags": [],
  "tax_identifiers": [
    {
      "identifier_type": {},
      "issuing_authority": "string",
      "taxable_entity_type": {},
      "value": "string"
    }
  ],
  "total_weight": {
    "unit": {},
    "value": 0.1
  },
  "warehouse_id": null,
  "address_validation": {
    "matched_address": {
      "address_line1": "1999 Bishop Grandin Blvd.",
      "address_line2": "Unit 408",
      "address_line3": "Building #7",
      "address_residential_indicator": "no",
      "city_locality": "Winnipeg",
      "company_name": "The Home Depot",
      "country_code": {},
      "email": "example@example.com",
      "name": "John Doe",
      "phone": "+1 204-253-9411 ext. 123",
      "postal_code": {},
      "state_province": "Manitoba"
    },
    "messages": [],
    "original_address": {
      "address_line1": "1999 Bishop Grandin Blvd.",
      "address_line2": "Unit 408",
      "address_line3": "Building #7",
      "address_residential_indicator": "no",
      "city_locality": "Winnipeg",
      "company_name": "The Home Depot",
      "country_code": {},
      "email": "example@example.com",
      "name": "John Doe",
      "phone": "+1 204-253-9411 ext. 123",
      "postal_code": {},
      "state_province": "Manitoba"
    },
    "status": {}
  },
  "errors": [
    "Parameter value '100000000.00' is out of range."
  ]
}
```

An update shipment response body

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|advanced_options|object|true|none|Advanced shipment options.  These are entirely optional.|
|carrier_id|object|true|none|The carrier account that is billed for the shipping charges|
|confirmation|object|true|none|The type of delivery confirmation that is required for this shipment.|
|created_at|object|true|read-only|The date and time that the shipment was created in ShipEngine.|
|customs|object \| null|true|none|Customs information.  This is usually only needed for international shipments.<br>|
|external_order_id|string \| null|false|none|ID that the Order Source assigned|
|external_shipment_id|string \| null|false|none|A unique user-defined key to identify a shipment.  This can be used to retrieve the shipment.<br><br>> **Warning:** The `external_shipment_id` is limited to 50 characters. Any additional characters will be truncated.<br>|
|insurance_provider|object|true|none|The insurance provider to use for any insured packages in the shipment.<br>|
|items|[object]|false|none|Describe the packages included in this shipment as related to potential metadata that was imported from<br>external order sources<br>|
|modified_at|object|false|read-only|The date and time that the shipment was created or last modified.|
|order_source_code|object|false|none|none|
|origin_type|object \| null|false|none|Indicates if the package will be picked up or dropped off by the carrier|
|packages|[object]|true|none|The packages in the shipment.<br><br>> **Note:** Some carriers only allow one package per shipment.  If you attempt to create a multi-package shipment for a carrier that doesn't allow it, an error will be returned.<br>|
|return_to|object|true|none|The return address for this shipment.  Defaults to the `ship_from` address.<br>|
|service_code|object|true|none|The [carrier service](https://www.shipengine.com/docs/shipping/use-a-carrier-service/) used to ship the package, such as `fedex_ground`, `usps_first_class_mail`, `flat_rate_envelope`, etc.<br>|
|ship_date|object|true|none|The date that the shipment was (or will be) shippped.  ShipEngine will take the day of week into consideration. For example, if the carrier does not operate on Sundays, then a package that would have shipped on Sunday will ship on Monday instead.<br>|
|ship_from|object|true|none|The shipment's origin address. If you frequently ship from the same location, consider [creating a warehouse](https://www.shipengine.com/docs/reference/create-warehouse/).  Then you can simply specify the `warehouse_id` rather than the complete address each time.<br>|
|ship_to|object|true|none|The recipient's mailing address|
|shipment_id|object|true|read-only|A string that uniquely identifies the shipment|
|shipment_number|string \| null|false|none|A non-unique user-defined number used to identify a shipment.  If undefined, this will match the external_shipment_id of the shipment.<br><br>> **Warning:** The `shipment_number` is limited to 50 characters. Any additional characters will be truncated.<br>|
|shipment_status|object|true|read-only|The current status of the shipment|
|tags|[object]|true|read-only|Arbitrary tags associated with this shipment.  Tags can be used to categorize shipments, and shipments can be queried by their tags.<br>|
|tax_identifiers|[object]|false|none|none|
|total_weight|object|true|read-only|The combined weight of all packages in the shipment|
|warehouse_id|object \| null|false|none|The [warehouse](https://www.shipengine.com/docs/shipping/ship-from-a-warehouse/) that the shipment is being shipped from.  Either `warehouse_id` or `ship_from` must be specified.<br>|
|address_validation|object|true|none|The address validation|
|errors|[string]|true|read-only|**Deprecated.** An array of errors that occurred while creating shipment.|

<h2 id="tocS_update_ups_settings_request_body">update_ups_settings_request_body</h2>
<!-- backwards compatibility -->
<a id="schemaupdate_ups_settings_request_body"></a>
<a id="schema_update_ups_settings_request_body"></a>
<a id="tocSupdate_ups_settings_request_body"></a>
<a id="tocsupdate_ups_settings_request_body"></a>

```json
{
  "account_postal_code": "string",
  "invoice": {
    "control_id": {},
    "invoice_amount": 0,
    "invoice_currency_code": "string",
    "invoice_date": "1970-01-01T00:00:00Z",
    "invoice_number": "string"
  },
  "is_primary_account": true,
  "mail_innovations_cost_center": "string",
  "mail_innovations_endorsement": {},
  "nickname": "string",
  "pickup_type": {},
  "use_carbon_neutral_shipping_program": true,
  "use_consolidation_services": true,
  "use_ground_freight_pricing": true,
  "use_negotiated_rates": true,
  "use_order_number_on_mail_innovations_labels": true
}
```

An update UPS settings request body

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_postal_code|string|false|none|account postal code|
|invoice|object|false|none|The invoice|
|is_primary_account|boolean|false|none|Indicates if this is the primary UPS account|
|mail_innovations_cost_center|string|false|none|mail innovations cost center|
|mail_innovations_endorsement|object|false|none|none|
|nickname|string|false|none|nickname|
|pickup_type|object|false|none|none|
|use_carbon_neutral_shipping_program|boolean|false|none|The use carbon neutral shipping program|
|use_consolidation_services|boolean|false|none|The use consolidation services|
|use_ground_freight_pricing|boolean|false|none|The use ground freight pricing|
|use_negotiated_rates|boolean|false|none|The use negotiated rates|
|use_order_number_on_mail_innovations_labels|boolean|false|none|The use order number on mail innovations labels|

<h2 id="tocS_update_warehouse_request_body">update_warehouse_request_body</h2>
<!-- backwards compatibility -->
<a id="schemaupdate_warehouse_request_body"></a>
<a id="schema_update_warehouse_request_body"></a>
<a id="tocSupdate_warehouse_request_body"></a>
<a id="tocsupdate_warehouse_request_body"></a>

```json
{
  "created_at": "2019-06-25T18:12:35.583Z",
  "is_default": false,
  "name": "Zero Cool HQ",
  "origin_address": {
    "address_line1": "1999 Bishop Grandin Blvd.",
    "address_line2": "Unit 408",
    "address_line3": "Building #7",
    "address_residential_indicator": "no",
    "city_locality": "Winnipeg",
    "company_name": "The Home Depot",
    "country_code": {},
    "email": "example@example.com",
    "name": "John Doe",
    "phone": "+1 204-253-9411 ext. 123",
    "postal_code": {},
    "state_province": "Manitoba"
  },
  "return_address": {
    "address_line1": "1999 Bishop Grandin Blvd.",
    "address_line2": "Unit 408",
    "address_line3": "Building #7",
    "address_residential_indicator": "no",
    "city_locality": "Winnipeg",
    "company_name": "The Home Depot",
    "country_code": {},
    "email": "example@example.com",
    "name": "John Doe",
    "phone": "+1 204-253-9411 ext. 123",
    "postal_code": {},
    "state_province": "Manitoba"
  },
  "warehouse_id": {}
}
```

An update warehouse request body

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created_at|string(date-time)|false|read-only|Timestamp that indicates when the warehouse was created|
|is_default|boolean \| null|false|none|Designates which single warehouse is the default on the account|
|name|string|true|none|Name of the warehouse|
|origin_address|object|true|none|The origin address of the warehouse|
|return_address|object|false|none|The return address associated with the warehouse|
|warehouse_id|object|false|read-only|A string that uniquely identifies the warehouse|

<h2 id="tocS_update_warehouse_settings_request_body">update_warehouse_settings_request_body</h2>
<!-- backwards compatibility -->
<a id="schemaupdate_warehouse_settings_request_body"></a>
<a id="schema_update_warehouse_settings_request_body"></a>
<a id="tocSupdate_warehouse_settings_request_body"></a>
<a id="tocsupdate_warehouse_settings_request_body"></a>

```json
{
  "is_default": true
}
```

An update warehouse settings request body

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|is_default|boolean \| null|false|none|The default property on the warehouse.|

<h2 id="tocS_update_webhook_request_body">update_webhook_request_body</h2>
<!-- backwards compatibility -->
<a id="schemaupdate_webhook_request_body"></a>
<a id="schema_update_webhook_request_body"></a>
<a id="tocSupdate_webhook_request_body"></a>
<a id="tocsupdate_webhook_request_body"></a>

```json
{
  "url": "https://[YOUR ENDPOINT ID].x.requestbin.com"
}
```

An update webhook request body

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|url|object|false|none|The url that the wehbook sends the request|

<h2 id="tocS_ups_account_settings">ups_account_settings</h2>
<!-- backwards compatibility -->
<a id="schemaups_account_settings"></a>
<a id="schema_ups_account_settings"></a>
<a id="tocSups_account_settings"></a>
<a id="tocsups_account_settings"></a>

```json
{
  "account_postal_code": "string",
  "invoice": {
    "control_id": {},
    "invoice_amount": 0,
    "invoice_currency_code": "string",
    "invoice_date": "1970-01-01T00:00:00Z",
    "invoice_number": "string"
  },
  "is_primary_account": true,
  "mail_innovations_cost_center": "string",
  "mail_innovations_endorsement": {},
  "nickname": "string",
  "pickup_type": {},
  "use_carbon_neutral_shipping_program": true,
  "use_consolidation_services": true,
  "use_ground_freight_pricing": true,
  "use_negotiated_rates": true,
  "use_order_number_on_mail_innovations_labels": true
}
```

UPS account settings

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_postal_code|string|false|none|account postal code|
|invoice|object|false|none|The invoice|
|is_primary_account|boolean|false|none|Indicates if this is the primary UPS account|
|mail_innovations_cost_center|string|false|none|mail innovations cost center|
|mail_innovations_endorsement|object|false|none|none|
|nickname|string|false|none|nickname|
|pickup_type|object|false|none|none|
|use_carbon_neutral_shipping_program|boolean|false|none|The use carbon neutral shipping program|
|use_consolidation_services|boolean|false|none|The use consolidation services|
|use_ground_freight_pricing|boolean|false|none|The use ground freight pricing|
|use_negotiated_rates|boolean|false|none|The use negotiated rates|
|use_order_number_on_mail_innovations_labels|boolean|false|none|The use order number on mail innovations labels|

<h2 id="tocS_ups_invoice">ups_invoice</h2>
<!-- backwards compatibility -->
<a id="schemaups_invoice"></a>
<a id="schema_ups_invoice"></a>
<a id="tocSups_invoice"></a>
<a id="tocsups_invoice"></a>

```json
{
  "control_id": {},
  "invoice_amount": 0,
  "invoice_currency_code": "string",
  "invoice_date": "1970-01-01T00:00:00Z",
  "invoice_number": "string"
}
```

UPS invoice

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|control_id|object|false|none|A string that uniquely identifies the control|
|invoice_amount|number(double)|false|none|none|
|invoice_currency_code|string|false|none|none|
|invoice_date|string(date-time)|false|none|invoice date|
|invoice_number|string|false|none|invoice number|

<h2 id="tocS_ups_pickup_type">ups_pickup_type</h2>
<!-- backwards compatibility -->
<a id="schemaups_pickup_type"></a>
<a id="schema_ups_pickup_type"></a>
<a id="tocSups_pickup_type"></a>
<a id="tocsups_pickup_type"></a>

```json
"daily_pickup"
```

The possible ups pickup type values

<h2 id="tocS_ups_settings_response_body">ups_settings_response_body</h2>
<!-- backwards compatibility -->
<a id="schemaups_settings_response_body"></a>
<a id="schema_ups_settings_response_body"></a>
<a id="tocSups_settings_response_body"></a>
<a id="tocsups_settings_response_body"></a>

```json
{
  "account_postal_code": "string",
  "invoice": {
    "control_id": {},
    "invoice_amount": 0,
    "invoice_currency_code": "string",
    "invoice_date": "1970-01-01T00:00:00Z",
    "invoice_number": "string"
  },
  "is_primary_account": true,
  "mail_innovations_cost_center": "string",
  "mail_innovations_endorsement": {},
  "nickname": "string",
  "pickup_type": {},
  "use_carbon_neutral_shipping_program": true,
  "use_consolidation_services": true,
  "use_ground_freight_pricing": true,
  "use_negotiated_rates": true,
  "use_order_number_on_mail_innovations_labels": true
}
```

A UPS settings response body

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_postal_code|string|false|none|account postal code|
|invoice|object|false|none|The invoice|
|is_primary_account|boolean|false|none|Indicates if this is the primary UPS account|
|mail_innovations_cost_center|string|false|none|mail innovations cost center|
|mail_innovations_endorsement|object|false|none|none|
|nickname|string|false|none|nickname|
|pickup_type|object|false|none|none|
|use_carbon_neutral_shipping_program|boolean|false|none|The use carbon neutral shipping program|
|use_consolidation_services|boolean|false|none|The use consolidation services|
|use_ground_freight_pricing|boolean|false|none|The use ground freight pricing|
|use_negotiated_rates|boolean|false|none|The use negotiated rates|
|use_order_number_on_mail_innovations_labels|boolean|false|none|The use order number on mail innovations labels|

<h2 id="tocS_url">url</h2>
<!-- backwards compatibility -->
<a id="schemaurl"></a>
<a id="schema_url"></a>
<a id="tocSurl"></a>
<a id="tocsurl"></a>

```json
"http://api.shipengine.com/v1/labels/se-28529731"
```

A URL

<h2 id="tocS_uuid">uuid</h2>
<!-- backwards compatibility -->
<a id="schemauuid"></a>
<a id="schema_uuid"></a>
<a id="tocSuuid"></a>
<a id="tocsuuid"></a>

```json
"aa3d8e8e-462b-4476-9618-72db7f7b7009"
```

A UUID (a.k.a. GUID) that uniquely identifies a resource

<h2 id="tocS_validate_address">validate_address</h2>
<!-- backwards compatibility -->
<a id="schemavalidate_address"></a>
<a id="schema_validate_address"></a>
<a id="tocSvalidate_address"></a>
<a id="tocsvalidate_address"></a>

```json
"no_validation"
```

The possible validate address values

<h2 id="tocS_validate_address_request_body">validate_address_request_body</h2>
<!-- backwards compatibility -->
<a id="schemavalidate_address_request_body"></a>
<a id="schema_validate_address_request_body"></a>
<a id="tocSvalidate_address_request_body"></a>
<a id="tocsvalidate_address_request_body"></a>

```json
[
  {
    "address_line1": "1999 Bishop Grandin Blvd.",
    "address_line2": "Unit 408",
    "address_line3": "Building #7",
    "address_residential_indicator": "no",
    "city_locality": "Winnipeg",
    "company_name": "The Home Depot",
    "country_code": {},
    "email": "example@example.com",
    "name": "John Doe",
    "phone": "+1 204-253-9411 ext. 123",
    "postal_code": {},
    "state_province": "Manitoba"
  }
]
```

An address validation request body

<h2 id="tocS_validate_address_response_body">validate_address_response_body</h2>
<!-- backwards compatibility -->
<a id="schemavalidate_address_response_body"></a>
<a id="schema_validate_address_response_body"></a>
<a id="tocSvalidate_address_response_body"></a>
<a id="tocsvalidate_address_response_body"></a>

```json
[
  {
    "matched_address": {
      "address_line1": "1999 Bishop Grandin Blvd.",
      "address_line2": "Unit 408",
      "address_line3": "Building #7",
      "address_residential_indicator": "no",
      "city_locality": "Winnipeg",
      "company_name": "The Home Depot",
      "country_code": {},
      "email": "example@example.com",
      "name": "John Doe",
      "phone": "+1 204-253-9411 ext. 123",
      "postal_code": {},
      "state_province": "Manitoba"
    },
    "messages": [],
    "original_address": {
      "address_line1": "1999 Bishop Grandin Blvd.",
      "address_line2": "Unit 408",
      "address_line3": "Building #7",
      "address_residential_indicator": "no",
      "city_locality": "Winnipeg",
      "company_name": "The Home Depot",
      "country_code": {},
      "email": "example@example.com",
      "name": "John Doe",
      "phone": "+1 204-253-9411 ext. 123",
      "postal_code": {},
      "state_province": "Manitoba"
    },
    "status": {}
  }
]
```

An address validation response body

<h2 id="tocS_validate_shipment_fields">validate_shipment_fields</h2>
<!-- backwards compatibility -->
<a id="schemavalidate_shipment_fields"></a>
<a id="schema_validate_shipment_fields"></a>
<a id="tocSvalidate_shipment_fields"></a>
<a id="tocsvalidate_shipment_fields"></a>

```json
{
  "validate_address": "no_validation"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|validate_address|object|false|none|none|

<h2 id="tocS_validation_status">validation_status</h2>
<!-- backwards compatibility -->
<a id="schemavalidation_status"></a>
<a id="schema_validation_status"></a>
<a id="tocSvalidation_status"></a>
<a id="tocsvalidation_status"></a>

```json
"valid"
```

The possible validation status values

<h2 id="tocS_void_label_response_body">void_label_response_body</h2>
<!-- backwards compatibility -->
<a id="schemavoid_label_response_body"></a>
<a id="schema_void_label_response_body"></a>
<a id="tocSvoid_label_response_body"></a>
<a id="tocsvoid_label_response_body"></a>

```json
{
  "approved": true,
  "message": "Request for refund submitted.  This label has been voided."
}
```

A void label response body

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|approved|boolean|true|read-only|Indicates whether the attempt to void the label was successful|
|message|string|true|read-only|none|

<h2 id="tocS_warehouse">warehouse</h2>
<!-- backwards compatibility -->
<a id="schemawarehouse"></a>
<a id="schema_warehouse"></a>
<a id="tocSwarehouse"></a>
<a id="tocswarehouse"></a>

```json
{
  "created_at": "2019-06-25T18:12:35.583Z",
  "is_default": false,
  "name": "Zero Cool HQ",
  "origin_address": {
    "address_line1": "1999 Bishop Grandin Blvd.",
    "address_line2": "Unit 408",
    "address_line3": "Building #7",
    "address_residential_indicator": "no",
    "city_locality": "Winnipeg",
    "company_name": "The Home Depot",
    "country_code": {},
    "email": "example@example.com",
    "name": "John Doe",
    "phone": "+1 204-253-9411 ext. 123",
    "postal_code": {},
    "state_province": "Manitoba"
  },
  "return_address": {
    "address_line1": "1999 Bishop Grandin Blvd.",
    "address_line2": "Unit 408",
    "address_line3": "Building #7",
    "address_residential_indicator": "no",
    "city_locality": "Winnipeg",
    "company_name": "The Home Depot",
    "country_code": {},
    "email": "example@example.com",
    "name": "John Doe",
    "phone": "+1 204-253-9411 ext. 123",
    "postal_code": {},
    "state_province": "Manitoba"
  },
  "warehouse_id": {}
}
```

A warehouse

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created_at|string(date-time)|false|read-only|Timestamp that indicates when the warehouse was created|
|is_default|boolean \| null|false|none|Designates which single warehouse is the default on the account|
|name|string|false|none|Name of the warehouse|
|origin_address|object|false|none|The origin address of the warehouse|
|return_address|object|false|none|The return address associated with the warehouse|
|warehouse_id|object|false|read-only|A string that uniquely identifies the warehouse|

<h2 id="tocS_webhook">webhook</h2>
<!-- backwards compatibility -->
<a id="schemawebhook"></a>
<a id="schema_webhook"></a>
<a id="tocSwebhook"></a>
<a id="tocswebhook"></a>

```json
{
  "event": {},
  "url": "https://[YOUR ENDPOINT ID].x.requestbin.com",
  "webhook_id": {}
}
```

A webhook

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|event|object|false|none|none|
|url|object|false|none|The url that the webhook sends the request to|
|webhook_id|object|false|read-only|A string that uniquely identifies the webhook|

<h2 id="tocS_webhook_event">webhook_event</h2>
<!-- backwards compatibility -->
<a id="schemawebhook_event"></a>
<a id="schema_webhook_event"></a>
<a id="tocSwebhook_event"></a>
<a id="tocswebhook_event"></a>

```json
"batch"
```

The possible webook event values

<h2 id="tocS_weight">weight</h2>
<!-- backwards compatibility -->
<a id="schemaweight"></a>
<a id="schema_weight"></a>
<a id="tocSweight"></a>
<a id="tocsweight"></a>

```json
{
  "unit": {},
  "value": 0.1
}
```

The weight of a package

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|unit|object|true|none|none|
|value|number(double)|true|none|The weight, in the specified unit|

<h2 id="tocS_weight_unit">weight_unit</h2>
<!-- backwards compatibility -->
<a id="schemaweight_unit"></a>
<a id="schema_weight_unit"></a>
<a id="tocSweight_unit"></a>
<a id="tocsweight_unit"></a>

```json
"pound"
```

The possible weight unit values
