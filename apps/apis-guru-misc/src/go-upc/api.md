<h1 id="go-upc-barcode-lookup-api">Go-UPC Barcode-Lookup API v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Find information on products from around the globe. The API supports UPC, EAN, and ISBN barcode numbers, and info returned includes product name, description, brand, image URL, and more.

Base URLs:

* <a href="https://go-upc.com/api/v1">https://go-upc.com/api/v1</a> - Go-UPC Barcode-Lookup API

# Authentication

* API Key (ApiKeyAuth)
    - Parameter Name: **key**, in: query.

<h1 id="go-upc-barcode-lookup-api-product">Product</h1>

## Retrieve product info for a particular barcode number (UPC, EAN, or ISBN).

<a id="opIdgetProductInfo"></a>

> Code samples

```bash
curl "https://example.com/code/string?key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /code/{code}`

<h3 id="retrieve-product-info-for-a-particular-barcode-number-upc-ean-or-isbn-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|code|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "barcodeUrl": "https://go-upc.com/barcode/829576019311",
  "codeType": "UPC",
  "product": {
    "brand": "Goodfellow and Co",
    "category": "Hair Care",
    "description": "Gives you an easy way to achieve the hairstyle you love. Made with jojoba esters, vegetable-derived lanolin, glycerin and carnauba wax.",
    "ean": 829576019311,
    "imageUrl": "http://go-upc.s3.amazonaws.com/images/54066938.jpeg",
    "name": "Blue Sage Tonka Texturizing Fiber",
    "region": "USA or Canada",
    "specs": [
      [
        "Item Form",
        "Clay"
      ],
      [
        "Liquid Volume",
        "4 Fluid Ounces"
      ],
      [
        "Scent",
        "Lime"
      ]
    ],
    "upc": 829576019311
  }
}
```

> 404 Response

```json
{
  "code": "329576019311",
  "codeType": null,
  "error": "The provided code is not in a recognized format."
}
```

> 500 Response

```json
{
  "code": "329576019311",
  "codeType": null,
  "error": "The provided code is not in a recognized format."
}
```

<h3 id="retrieve-product-info-for-a-particular-barcode-number-upc-ean-or-isbn-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The product corresponding to the provided `code`|Inline|
|404|Not Found|No product information was found for the given `code`.|[error](#schemaerror)|
|500|Internal Server Error|Unexpected error|[error](#schemaerror)|

<h3 id="retrieve-product-info-for-a-particular-barcode-number-upc-ean-or-isbn-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|barcodeUrl|string(uri)|false|none|The URL to the scannable barcode image.|
|codeType|string|false|none|The type of product code (UPC/EAN/ISBN).|
|product|object|false|none|all matching product details.|
|» brand|string|false|none|The brand of the product (if available).|
|» category|string|false|none|The category of the product (if available).|
|» description|string|false|none|A description of the product (if available).|
|» ean|integer|false|none|The EAN code of the product.|
|» imageUrl|string(uri)|false|none|The URL for the product image.|
|» name|string|false|none|The name of the product.|
|» region|string|false|none|The region of the product.|
|» specs|[[string]]|false|none|A list of additional item specifications (if available).|
|» upc|integer|false|none|The UPC code of the product.|

#### Enumerated Values

|Property|Value|
|---|---|
|codeType|UPC|
|codeType|EAN|
|codeType|ISBN|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

# Schemas

<h2 id="tocS_code">code</h2>
<!-- backwards compatibility -->
<a id="schemacode"></a>
<a id="schema_code"></a>
<a id="tocScode"></a>
<a id="tocscode"></a>

```json
"string"
```

The standardized product code in UPC/EAN format.

<h2 id="tocS_error">error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
{
  "code": "329576019311",
  "codeType": null,
  "error": "The provided code is not in a recognized format."
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|The provided code.|
|codeType|object|false|none|The type of code provided.|
|error|string|true|none|A human readable error message.|
