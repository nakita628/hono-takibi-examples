<h1 id="api-reference---ideal-postcodes">API Reference - Ideal Postcodes v3.7.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

# Getting Started

## Overview

### Access

All API methods are either a `GET`, `POST` or `OPTIONS` request.

The API communicates over both HTTPS and plain HTTP using IPv4 and IPv6.

We recommend using HTTPS only although HTTP is available.

We use appropriate HTTP status codes where possible to indicate the request status.

### Rate Limiting

Each IP address is rate limited at 30 requests per second. Tripping the rate limit will result in a 503 response.

The autocomplete API also has an additional rate limit.

If you expect to breach the limit please contact us and we can move you to an endpoint with a higher limit.

### JSONP

[JSONP](http://en.wikipedia.org/wiki/JSONP) requests are supported. Include a `callback=` in your request as a query parameter. Your results return wrapped in a function designated by your request.

## Authentication

Most requests require an **API key** for authentication. Authenticate by passing an `api_key` as part of the query string. For example:

```
api.ideal-postcodes.co.uk/v1/autocomplete/addresses?api_key=iddqd&q=parkside
```

Alternatively, authentication can be transmitted via the `Authorization` header using the following scheme:

```
Authorization: api_key="iddqd" [other_key="foo"]
```

## Versioning

This API is versioned with a simple prefix in the URL. The current version is `/v1/`. We will maintain backwards-compatibility by releasing breaking changes under a new version.

Please note that the following changes are backwards-compatible:

- Adding new properties to existing API responses
- Adding new API endpoints
- Adding new optional request parameters to existing API endpoints
- Changing the order of properties in existing API responses
- Changing the autocomplete address suggestion format

## Error Handling

A successful lookup is accompanied with a HTTP status code of 200 and a response code of 2000 (found in the body).

An error has occurred if the HTTP status code is not 200. Errors can range from a benign 404 (resource not found) to more urgent errors (your API Key ran out of credit, failed authentication, etc).

## Testing

Each new account comes with a free test balance. Contact us if you need more for testing and integration.

### Community Key

Our documentation and demos make heavy use of our community key `iddqd`. This allows for convenient access for trialing the API.

Many restrictions on this key are relaxed to allow developers make test requests. This key has a limit of 15 lookups per IP address per day as well as a daily usage cap. If you hit any limit restrictions, you can continue testing the API by creating a key of your own and using our free test methods.

Please be kind with the community key. We're trusting everyone to use it responsibly so that other developers may trial the API. Thank you!

## Metadata

Requests that affect your balance may be annotated with arbitrary metadata. This data is stored along with your lookup history and can be queried at a later date via the API or the dashboard. We call the ability to label your requests [tagging](https://docs.ideal-postcodes.co.uk/docs/guides/tags).

# Response Codes

The API returns two indicators to help you to determine the status of each HTTP request.

The first is the **HTTP Status**, which is found in the status-line of all HTTP requests. The API will return status codes that adhere to HTTP /1.1 Specifications wherever possible.

`2XX` status codes indicates success while `4XX` and `5XX` indicate client and server errors respectively.

The second is the **API response code**, which can be found in the `code` property of the response body. This code will provide a more specific reason if a failure has occurred and can point you in the right direction when debugging.

Please use the glossary of code numbers and HTTP status codes below when debugging your requests.

## 200 Request Success

| HTTP Code | API Code | Description                                  |
| --------- | -------- | -------------------------------------------- |
| 200       | 2000     | Success. Request was completed successfully. |

## 400 Bad Request

The request could not be understood due to some input error.

| HTTP Code | API Code | Description                                                                                                                           |
| --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| 400       | 4000     | Invalid syntax submitted. Some part of your request was malformed or did not match our specifications.                                |
| 400       | 4001     | Validation failed on your submitted data. Some of the data you provided did not meet our validation requirements, e.g. string length. |
| 400       | 4005     | Invalid start date. Please ensure start dates are provided as a UTC Timestamp in milliseconds.                                        |
| 400       | 4006     | Invalid end date. Please ensure end dates are provided as a UTC Timestamp in milliseconds.                                            |
| 400       | 4007     | Invalid date range. Check if your start and end dates are in the right order.                                                         |
| 400       | 4008     | Invalid date range. Check that your date range is 90 days or less.                                                                    |
| 400       | 4009     | Too many tags. Please specify no more than 3 tags to query.                                                                           |

## 401 Unauthorised

Authorization credentials are not valid.

| HTTP Code | API Code | Description                                                                                                                                                        |
| --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 401       | 4010     | Invalid Key. The `api_key` you provided is not valid.                                                                                                              |
| 401       | 4011     | Requesting URL not on whitelist. The cross domain request is not coming from a whitelisted URL. You can update or disable your allowed URLs via your Key settings. |
| 401       | 4012     | Failed user authentication. Invalid `user_token` presented.                                                                                                        |
| 401       | 4013     | Licensee Key is required. Sublicensed keys require you need to present licensee credentials via the `licensee` parameter.                                          |

## 402 Request Failed

Your request is well-formed but are not able to complete your request for another reason.

| HTTP Code | API Code | Description                                                                                                                                                                                                                                                        |
| --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 402       | 4020     | Key balance depleted. You're out of lookups on your API Key.                                                                                                                                                                                                       |
| 402       | 4021     | Limit reached. One of your lookup limits has been breached for today. This could either be your total daily limit on your key or the individual IP limit. You can either wait for for the limit to reset (after a day) or manually disable or increase your limit. |

## 404 Resource Not Found

The resource you requested does not exist.

| HTTP Code | API Code | Description                                                                                   |
| --------- | -------- | --------------------------------------------------------------------------------------------- |
| 404       | 4040     | Postcode not found. The postcode you have submitted does not exist.                           |
| 404       | 4041     | User not found. Your user could not be identified given the credentials you presented.        |
| 404       | 4042     | Key not found. Your key could not be identified given the credentials you presented.          |
| 404       | 4044     | No UDPRN found. No address is associated with the UDPRN queried                               |
| 404       | 4045     | No licensee found. Your licensee could not be identified given the credentials you presented. |
| 404       | 4046     | No UMPRN found. No Multiple Residence premise is associated with the UMPRN queried.           |

## 500 Server Error

A error occurred on our server.

| HTTP Code | API Code | Description                                                                                                                                                        |
| --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 500       | 5000     | An error occurred on our end. These errors are logged and queued so we can understand what went wrong. However, if you need speedy resolution please email support |
| 500       | 5001     | Akin to 5000.                                                                                                                                                      |
| 500       | 5002     | The server took too long to process on our end, so we aborted the request. You may retry the request.                                                              |

Base URLs:

* <a href="https://api.ideal-postcodes.co.uk/v1">https://api.ideal-postcodes.co.uk/v1</a> - API Server

<a href="https://terms.ideal-postcodes.co.uk">Terms of service</a>
Email: <a href="mailto:support@ideal-postcodes.co.uk">Support</a> 
Web: <a href="https://ideal-postcodes.co.uk/support">Support</a> 
License: <a href="https://opensource.org/licenses/AGPL-3.0">AGPLv3</a>

<a href="https://docs.ideal-postcodes.co.uk">More on our APIs, libraries with guides and examples</a>

<h1 id="api-reference---ideal-postcodes-address-search">Address Search</h1>

Global address autocomplete, for search-as-you-type

## Find Address

<a id="opIdAddressAutocomplete"></a>

> Code samples

```bash
curl https://example.com/autocomplete/addresses \
  -H 'Accept: application/json'
```

`GET /autocomplete/addresses`

The address autocomplete API returns a list of address suggestions that match the query ordered by relevance.

This API can be used to power realtime address finders, also known as address autofill or address autocomplete.

Consider using our Address Autocomplete JavaScript libraries to add address lookup to a form in moments.

## Implementing Address Autocomplete

Rapid address autocompletion using our Address Autocomplete API is a 2 step process.

1. Retrieve partial address suggestions via `/autocomplete/addresses`
2. Retrieve the entire address with the ID provided in the suggestion

Step 2 will decrement your lookup balance.

Please note, this API is not intended to be a free standalone resource.

## Filters

You can strictly narrow your result by adding filters to your querystring. For instance, you can restrict to postcode `SW1A 2AA` by appending `postcode=sw1a2aa`.

If a filter term is invalid, e.g. `postcode=SW1A2AAA`, then an empty result set is returned and no lookup is incurred.

You can also scope using multiple terms for the same filter with a comma separated list of terms. E.g. Restrict results to E1, E2 and E3 outward codes: `postcode_outward=e1,e2,e3`. Multiple terms are `OR`'ed, i.e. the matching result sets are combined.

All filters can accept multiple terms unless stated otherwise below.

Filters can also be combined. E.g. Restrict results to small user organisations in the N postcode area: `su_organisation_indicator=Y&postcode_area=n`. Multiple filters are `AND`'ed, i.e. each additional filter narrows the result set.

A maximum of **10** terms are allowed across all filters.

## Biases

You can boost certain addresses results that match specific address criteria. All bias searches are prefixed with `bias_`.

Biasing (unlike filtering) also allow unmatched addresses to appear with lower precedence.

For instance, can boost addresses with postcode areas `SW` and `SE` by appending `bias_postcode_area=SW,SE`.

No bias effect applies to bias terms that are invalid. e.g. `bias_postcode=SW1A2AAA`

You may scope using multiple terms for the same bias with a comma separated list of terms. E.g. Restrict results to `E1`, `E2` and `E3` outward codes: <code>bias_postcode_outward=e1,e2,e3</code>.

All biases can accept multiple terms unless stated otherwise below.

A combined maximum of **5** terms are allowed across all biases.

## Suggestion Format

The suggestion format is prone to change over time. Attempts to parse the suggestion may result in your integration breaking. Instead use the suggestion as-is.

## Rate Limiting

You can make up to 3000 requests to the autocomplete API within a 5 minute span. The HTTP Header contains information on your current rate limit.

| Header                  | Description                                                                            |
| ----------------------- | -------------------------------------------------------------------------------------- |
| `X-RateLimit-Limit`     | The maximum number of requests that can be made in 5 minutes                           |
| `X-RateLimit-Remaining` | The remaining requests within the current rate limit window                            |
| `X-RateLimit-Reset`     | The time when the rate limit window resets in Unix Time (seconds) or UTC Epoch seconds |

## Pricing

This API currently does not affect your balance. However, resolving a suggestion into a full address requires a paid request.

Please note, this API is not intended as a standalone free resource. Integrations that consistently make autocomplete requests without a paid request to resolve an address may be disrupted via tightened rate limits. Continued misuse will result in account suspension.


<h3 id="find-address-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api_key|query|[ApiKeyParam](#schemaapikeyparam)|false|none|
|query|query|string|false|Specifies the address you wish to query. Query can be shortened to `q=`|
|context|query|[Context](#schemacontext)|false|none|
|limit|query|[LimitParam](#schemalimitparam)|false|Limits number of address suggestions unless a postcode is detected. In this instance entire list of addreses for that postcode is returned.<br>|
|postcode_outward|query|[PostcodeOutwardParam](#schemapostcodeoutwardparam)|false|none|
|postcode|query|[PostcodeParam](#schemapostcodeparam)|false|none|
|postcode_area|query|[PostcodeAreaParam](#schemapostcodeareaparam)|false|none|
|postcode_sector|query|[PostcodeSectorParam](#schemapostcodesectorparam)|false|none|
|post_town|query|[PostTownParam](#schemaposttownparam)|false|none|
|uprn|query|[UPRNParam](#schemauprnparam)|false|none|
|country|query|[CountryParam](#schemacountryparam)|false|none|
|postcode_type|query|[PostcodeTypeParam](#schemapostcodetypeparam)|false|none|
|su_organisation_indicator|query|[SmallUserParam](#schemasmalluserparam)|false|none|
|box|query|[BoxParam](#schemaboxparam)|false|none|
|bias_postcode_outward|query|[BiasPostcodeOutwardParam](#schemabiaspostcodeoutwardparam)|false|none|
|bias_postcode|query|[BiasPostcodeParam](#schemabiaspostcodeparam)|false|none|
|bias_postcode_area|query|[BiasPostcodeAreaParam](#schemabiaspostcodeareaparam)|false|none|
|bias_postcode_sector|query|[BiasPostcodeSectorParam](#schemabiaspostcodesectorparam)|false|none|
|bias_post_town|query|[BiasPosttownParam](#schemabiasposttownparam)|false|none|
|bias_thoroughfare|query|[BiasThoroughfareParam](#schemabiasthoroughfareparam)|false|none|
|bias_country|query|[BiasCountryParam](#schemabiascountryparam)|false|none|
|bias_lonlat|query|[BiasLonLatParam](#schemabiaslonlatparam)|false|none|
|bias_ip|query|[BiasIpParam](#schemabiasipparam)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|bias_ip|true|

> Example responses

> 200 Response

```json
{
  "code": 2000,
  "message": "Success",
  "result": {
    "hits": [
      {
        "id": "paf_8387729",
        "suggestion": "Flat 6, 12 Roskear, Camborne, TR14",
        "urls": {}
      }
    ]
  }
}
```

> 400 Response

```json
{
  "code": 0,
  "message": "string",
  "errors": [
    {
      "errorCode": "required.openapi.validation",
      "message": "should have required property 'type'",
      "path": ".query.type"
    }
  ]
}
```

<h3 id="find-address-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AutocompleteResponse](#schemaautocompleteresponse)|
|400|Bad Request|Bad Request|[BadRequestResponse](#schemabadrequestresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-RateLimit-Limit|number|int32|The maximum number of requests that can be made in 5 minutes|
|200|X-RateLimit-Remaining|number|int32|The remaining requests within the current rate limit window|
|200|X-RateLimit-Reset|number|int32|The time when the rate limit window resets in Unix Time (seconds) or UTC Epoch seconds.<br>|

<aside class="success">
This operation does not require authentication
</aside>

## Resolve Address (GBR)

<a id="opIdResolve"></a>

> Code samples

```bash
curl https://example.com/autocomplete/addresses/string/gbr \
  -H 'Accept: application/json'
```

`GET /autocomplete/addresses/{address}/gbr`

Resolves an address autocompletion by its address ID.

Resolved addresses (including global addresses) are returned in a UK format (up to 3 address lines) using UK nomenclature (like postcode and county).


<h3 id="resolve-address-gbr-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|address|path|string|true|ID of address suggestion|
|api_key|query|[ApiKeyParam](#schemaapikeyparam)|false|none|

> Example responses

> 200 Response

```json
{
  "code": 2000,
  "message": "Success",
  "result": {
    "administrative_county": "",
    "building_name": "",
    "building_number": "10",
    "country": "England",
    "country_iso": "GBR",
    "country_iso_2": "GB",
    "county": "London",
    "county_code": "",
    "dataset": "paf",
    "delivery_point_suffix": "1A",
    "department_name": "",
    "dependant_locality": "",
    "dependant_thoroughfare": "",
    "district": "Westminster",
    "double_dependant_locality": "",
    "eastings": "string",
    "id": "paf_8387729",
    "language": "en",
    "latitude": "string",
    "line_1": "Prime Minister &amp; First Lord of Treasury",
    "line_2": "10 Downing Street",
    "line_3": "",
    "longitude": "string",
    "northings": "string",
    "organisation_name": "Prime Minister &amp; First Lord Of The Treasury",
    "po_box": "100",
    "post_town": "London",
    "postal_county": "London",
    "postcode": "SW1A 2AA",
    "postcode_inward": "2AA",
    "postcode_outward": "SW1A",
    "postcode_type": "S",
    "premise": "10",
    "su_organisation_indicator": "Y",
    "sub_building_name": "Flat 1",
    "thoroughfare": "Downing Street",
    "traditional_county": "Greater London",
    "udprn": 23747771,
    "umprn": "string",
    "uprn": "string",
    "ward": "St. James'"
  }
}
```

> 404 Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="resolve-address-gbr-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GbrResolveAddressResponse](#schemagbrresolveaddressresponse)|
|404|Not Found|Resource not found|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Resolve Address (USA)

<a id="opIdResolveUsa"></a>

> Code samples

```bash
curl https://example.com/autocomplete/addresses/string/usa \
  -H 'Accept: application/json'
```

`GET /autocomplete/addresses/{address}/usa`

Resolves an address autocompletion by its address ID.

Resolved addresses (including global addresses) are returned in a US format (up to 2 address lines) using US nomenclature (like zipcode, state and city).


<h3 id="resolve-address-usa-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|address|path|string|true|ID of address suggestion|
|api_key|query|[ApiKeyParam](#schemaapikeyparam)|false|none|

> Example responses

> 200 Response

```json
{
  "code": 2000,
  "message": "Success",
  "result": {
    "address_secondary_abbreviation": "string",
    "base_alternate_code": "A",
    "building_or_firm_name": "POSTMASTER",
    "carrier_route_id": "R012",
    "carrier_route_rate_sortation": "string",
    "city": "HOLTSVILLE",
    "city_abbreviation": "W TOWNSHEND",
    "city_state_mailing_name_indicator": "string",
    "city_state_name_facility_code": "B",
    "congressional_district_number": "string",
    "country": "United States",
    "country_iso": "USA",
    "country_iso_2": "US",
    "county": "Suffolk",
    "county_number": "string",
    "dataset": "usps",
    "finance_number": "string",
    "government_building_indicator": "",
    "id": "paf_8387729",
    "lacs_status_indicator": "",
    "language": "en",
    "last_line": "Greenwich CT 06830-1234",
    "line_1": "12 Armstrong Ct Apt 12",
    "line_2": "9450 Pinecroft Dr",
    "municipality_city_state_key": "string",
    "plus_4_code": "1234",
    "preferred_city": "AGUADA",
    "preferred_last_line_city_state_key": "V13916",
    "primary_number": "A298",
    "record_type_code": "G",
    "secondary_number": "123A",
    "state": "New York",
    "state_abbreviation": "NY",
    "street_name": "GOSHEN",
    "street_post_directional_abbreviation": "string",
    "street_pre_directional_abbreviation": "string",
    "street_suffix_abbreviation": "ST",
    "update_key_number": "00000001",
    "urbanization_city_state_key": "V18475",
    "zip_classification_code": "",
    "zip_code": "1234",
    "zip_plus_4_code": "12345-6789"
  }
}
```

> 404 Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="resolve-address-usa-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UsaResolveAddressResponse](#schemausaresolveaddressresponse)|
|404|Not Found|Resource not found|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="api-reference---ideal-postcodes-place-search">Place Search</h1>

Global places search to identify geographical names and places

## Find Place

<a id="opIdFindPlace"></a>

> Code samples

```bash
curl 'https://example.com/places?api_key=ak_test' \
  -H 'Accept: application/json'
```

`GET /places`

Query for geographical places across countries. Each query will return a list of place suggestions, which consists of a place name, descriptive name and id.

This API returns geographical information such as countries, capitals, administrative areas and more. It is ideal for correctly identifying a place along with any other details like geolocation.

## Implementing Place Autocomplete

Extracting the full information of a place is a 2 step process:

1. Retrieve place suggestions via /places
2. Retrieve the entire place with the ID provided in the suggestion

## Suggestion Format

Each place suggestion contains a descriptive name which you can provide to users to uniquely idenfity a place.

## Rate Limiting

You can make up to 3000 requests to the autocomplete API within a 5 minute span. The HTTP Header contains information on your current rate limit.

| Header                  | Description                                                                            |
| ----------------------- | -------------------------------------------------------------------------------------- |
| `X-RateLimit-Limit`     | The maximum number of requests that can be made in 5 minutes                           |
| `X-RateLimit-Remaining` | The remaining requests within the current rate limit window                            |
| `X-RateLimit-Reset`     | The time when the rate limit window resets in Unix Time (seconds) or UTC Epoch seconds |

## Pricing

This API currently does not affect your balance. However, resolving a suggestion into a full place requires a paid request.

Please note, this API is not intended as a standalone free resource. Integrations that consistently make autocomplete requests without a paid request to resolve an place may be disrupted via tightened rate limits.


<h3 id="find-place-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api_key|query|[ApiKeyParam](#schemaapikeyparam)|true|none|
|query|query|string|false|Specifies the place you wish to query. Query can be shortened to `q=`|
|country_iso|query|[CountryIsoParam](#schemacountryisoparam)|false|none|
|bias_country_iso|query|[BiasCountryIsoParam](#schemabiascountryisoparam)|false|none|
|bias_lonlat|query|[BiasLonLatParam](#schemabiaslonlatparam)|false|none|
|bias_ip|query|[BiasIpParam](#schemabiasipparam)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|bias_ip|true|

> Example responses

> 200 Response

```json
{
  "code": 2000,
  "message": "Success",
  "result": {
    "hits": [
      {
        "country_iso": "GBR",
        "descriptive_name": "London, United Kingdom",
        "id": "geonames_5324",
        "name": "London"
      }
    ]
  }
}
```

> 400 Response

```json
{
  "code": 0,
  "message": "string",
  "errors": [
    {
      "errorCode": "required.openapi.validation",
      "message": "should have required property 'type'",
      "path": ".query.type"
    }
  ]
}
```

<h3 id="find-place-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PlaceResponse](#schemaplaceresponse)|
|400|Bad Request|Bad Request|[BadRequestResponse](#schemabadrequestresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Resolve Place

<a id="opIdResolvePlace"></a>

> Code samples

```bash
curl 'https://example.com/places/$string' \
  -H 'Accept: application/json'
```

`GET /places/${place}`

Resolves a place autocompletion by its place ID.


<h3 id="resolve-place-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|place|path|string|true|ID of place suggestion|
|api_key|query|[ApiKeyParam](#schemaapikeyparam)|false|none|

> Example responses

> 200 Response

```json
{
  "code": 2000,
  "message": "Success",
  "result": {
    "country_iso": "GBR",
    "dataset": "geonames",
    "descriptive_name": "London, United Kingdom",
    "id": "geonames_5353",
    "language": "en",
    "latitude": "string",
    "longitude": "string",
    "name": "London",
    "native": {
      "admin1_code": "ENG",
      "admin1_geonameid": 5353,
      "admin1_name": "England",
      "admin2_code": "06",
      "admin2_geonameid": 5353,
      "admin2_name": "England",
      "admin3_code": "08",
      "admin4_code": "07",
      "alternatenames": [
        "London"
      ],
      "asciiname": "London",
      "cc2": [
        "IE"
      ],
      "country_code": "GB",
      "dataset": "geonames",
      "dem": 32,
      "elevation": 0,
      "feature_class": "A",
      "feature_code": "ADM1",
      "geonameid": 5353,
      "id": "geonames_5353",
      "latitude": "string",
      "longitude": "string",
      "modification_date": "2015-03-09",
      "name": "London",
      "population": "7392832",
      "timezone": "Europe/London"
    }
  }
}
```

> 404 Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="resolve-place-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ResolvePlaceResponse](#schemaresolveplaceresponse)|
|404|Not Found|Resource not found|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="api-reference---ideal-postcodes-uk">UK</h1>

UK Address and Postcode Search

## Extract Addresses

<a id="opIdAddresses"></a>

> Code samples

```bash
curl 'https://example.com/addresses?api_key=ak_test' \
  -H 'Accept: application/json'
```

`GET /addresses`

Extract a list of complete addresses that match the query ordered by relevance score. This query accepts an optional limit and page query (defaults to 10 and 0 respectively).

If a valid postcode is passed as the query string, the entire address list for that postcode is passed as a result. Note, in these cases, limit and page parameters are ignored.

This API is designed as a multi-purpose tool for generating address lists, cleansing and wholesale data extraction according to specific parameters.

For address autocomplete, see our address finder API - which is designed for speed and address completion.

## Reverse Geocoding

Return a list of addresses around a point using the lon= and lat= querystring arguments. Addresses will be sorted in order of distance to the point. The search radius is 100m.

## Filters

You can strictly narrow your result by adding filters to your query string which correspond with an address attribute.

For instance, you can restrict to postcode `SW1A 2AA` by appending `postcode=sw1a2aa`.

If a filter term is invalid, e.g. `postcode=SW1A2AAA`, then an empty result set is returned and no lookup is incurred.

You can also scope using multiple terms for the same filter with a comma separated list of terms. E.g. Restrict results to E1, E2 and E3 outward codes: `postcode_outward=e1,e2,e3`. Multiple terms are `OR`'ed, i.e. the matching result sets are combined.

All filters can accept multiple terms unless stated otherwise below.

Multiple filters can also be combined. E.g. Restrict results to small user organisations in the N postcode area: `su_organisation_indicator=Y&postcode_area=n`. Multiple filters are `AND`'ed, i.e. each additional filter narrows the result set.

A combined maximum of 5 terms are allowed across all filters.

## Biases

You can boost certain addresses results that correspond with a certain address attribute. All bias searches are prefixed with `bias_`.

Biased searches, unlike filtered searches, also allow unmatched addresses to appear . These will rank lower.

For instance, you can boost addresses with postcode areas `SW` and `SE` by appending `bias_postcode_area=SW,SE`.

If a bias term is invalid, e.g. `bias_postcode=SW1A2AAA` no bias effect is applied.

You may scope using multiple terms for the same bias with a comma separated list of terms. E.g. Restrict results to `E1`, `E2` and `E3` outward codes: `bias_postcode_outward=e1,e2,e3`.

All biases can accept multiple terms unless stated otherwise below.

A combined maximum of 5 terms are allowed across all biases.

## Search by Postcode and Building Name or Number

Search by postcode and building attribute with the postcode filter and query argument. E.g. For "SW1A 2AA Prime Minister" `/v1/addresses?postcode=sw1a2aa&q=prime minister`.

The advantage of using filters is a postcode mismatch does not result in a lookup as no results are returned.

#### Search By UPRN

Search by UPRN using the `uprn` filter and excluding the query argument. E.g. `/v1/addresses?uprn=100`.

## Testing

- **ID1 1QD** Returns a successful query response `2000`
- **ID1 KFA** Returns an empty query response `2000`
- **ID1 CLIP** Returns "no lookups remaining" error `4020`
- **ID1 CHOP** Returns "daily (or individual) lookup limit breached" error `4021`

Test request undergo the usual authentication and restriction rules. This is to help surface any issues that occur during implementation and does not cost you a lookup.


<h3 id="extract-addresses-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api_key|query|[ApiKeyParam](#schemaapikeyparam)|true|none|
|query|query|string|false|Specifies the address you wish to query. Query can be shortened to `q=`|
|limit|query|[LimitParam](#schemalimitparam)|false|none|
|page|query|[PageParam](#schemapageparam)|false|none|
|filter|query|[FilterParam](#schemafilterparam)|false|none|
|lon|query|[AddressLongitudeParam](#schemaaddresslongitudeparam)|false|none|
|lat|query|[AddressLatitudeParam](#schemaaddresslatitudeparam)|false|none|
|postcode_outward|query|[PostcodeOutwardParam](#schemapostcodeoutwardparam)|false|none|
|postcode|query|[PostcodeParam](#schemapostcodeparam)|false|none|
|postcode_area|query|[PostcodeAreaParam](#schemapostcodeareaparam)|false|none|
|postcode_sector|query|[PostcodeSectorParam](#schemapostcodesectorparam)|false|none|
|post_town|query|[PostTownParam](#schemaposttownparam)|false|none|
|uprn|query|[UPRNParam](#schemauprnparam)|false|none|
|country|query|[CountryParam](#schemacountryparam)|false|none|
|postcode_type|query|[PostcodeTypeParam](#schemapostcodetypeparam)|false|none|
|su_organisation_indicator|query|[SmallUserParam](#schemasmalluserparam)|false|none|
|box|query|[BoxParam](#schemaboxparam)|false|none|
|bias_postcode_outward|query|[BiasPostcodeOutwardParam](#schemabiaspostcodeoutwardparam)|false|none|
|bias_postcode|query|[BiasPostcodeParam](#schemabiaspostcodeparam)|false|none|
|bias_postcode_area|query|[BiasPostcodeAreaParam](#schemabiaspostcodeareaparam)|false|none|
|bias_postcode_sector|query|[BiasPostcodeSectorParam](#schemabiaspostcodesectorparam)|false|none|
|bias_post_town|query|[BiasPosttownParam](#schemabiasposttownparam)|false|none|
|bias_thoroughfare|query|[BiasThoroughfareParam](#schemabiasthoroughfareparam)|false|none|
|bias_country|query|[BiasCountryParam](#schemabiascountryparam)|false|none|
|bias_lonlat|query|[BiasLonLatParam](#schemabiaslonlatparam)|false|none|

> Example responses

> 200 Response

```json
{
  "code": 2000,
  "message": "Success",
  "result": {
    "hits": [
      {
        "administrative_county": "",
        "building_name": "",
        "building_number": "10",
        "country": "England",
        "country_iso": "GBR",
        "country_iso_2": "GB",
        "county": "London",
        "county_code": "",
        "dataset": "paf",
        "delivery_point_suffix": "1A",
        "department_name": "",
        "dependant_locality": "",
        "dependant_thoroughfare": "",
        "district": "Westminster",
        "double_dependant_locality": "",
        "eastings": "string",
        "id": "paf_8387729",
        "language": "en",
        "latitude": "string",
        "line_1": "Prime Minister &amp; First Lord of Treasury",
        "line_2": "10 Downing Street",
        "line_3": "",
        "longitude": "string",
        "northings": "string",
        "organisation_name": "Prime Minister &amp; First Lord Of The Treasury",
        "po_box": "100",
        "post_town": "London",
        "postal_county": "London",
        "postcode": "SW1A 2AA",
        "postcode_inward": "2AA",
        "postcode_outward": "SW1A",
        "postcode_type": "S",
        "premise": "10",
        "su_organisation_indicator": "Y",
        "sub_building_name": "Flat 1",
        "thoroughfare": "Downing Street",
        "traditional_county": "Greater London",
        "udprn": 23747771,
        "umprn": "string",
        "uprn": "string",
        "ward": "St. James'"
      }
    ],
    "limit": 10,
    "page": 0,
    "total": 0
  }
}
```

> 400 Response

```json
{
  "code": 0,
  "message": "string",
  "errors": [
    {
      "errorCode": "required.openapi.validation",
      "message": "should have required property 'type'",
      "path": ".query.type"
    }
  ]
}
```

> 404 Response

```json
{
  "code": 4040,
  "message": "Postcode not found",
  "suggestions": [
    "SN13 0SF"
  ]
}
```

<h3 id="extract-addresses-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AddressResponse](#schemaaddressresponse)|
|400|Bad Request|Bad Request|[BadRequestResponse](#schemabadrequestresponse)|
|404|Not Found|Postcode Not Found|[PostcodeNotFoundResponse](#schemapostcodenotfoundresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Cleanse

<a id="opIdAddressCleanse"></a>

> Code samples

```bash
curl https://example.com/cleanse/addresses \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "query": "10 Downing Street, London, SW2A 2BN"
  }'
```

`POST /cleanse/addresses`

The address cleanse API attempts to return the closest matching address for any given address inputs. We also return a number of Match Level indicators that describe the degree to which the suggested address matches the input address. The more impaired the input address, the harder it is to cleanse.

## Confidence Score

The confidence score is a number ranging between 0 and 1. Where 1 implies a full match and 0 implies no major elements completely match. Each incorrect, missing or misspelled element will subtract from the overall confidence score.

### Deciding on an Acceptable Confidence Score Threshold

Different address cleanse projects can have radically different inputs. However, within each project, the inputs tend to repeat the same errors. For instance, some input datasets may be exclusively inputted manually and be prone to typos. Others may have a persistently missing datapoint such as organistation name or postcode. For this reason, it is important to understand that there is no absolute Confidence Score threshold. Instead, the acceptable confidence score must be determined on a project by project basis based on systematic errors present in the data and business goals.

When determining an acceptable Confidence Score threshold you should load a subset of the dataset into a spreadsheet application like Excel and sort on the score. Scrolling from top-to-bottom you will be able to observe matches from best to worst. As you start to hit the lower quality searches, you will be able to roughly determine:
- Which confidence scores indicate ambigious matches (i.e. up to building level only)
- Which confidence scores indicate a poor or no match (i.e. the nearest matching address is too far from the input address)

Depending on your business goals, you can also use the Match Levels to determine an acceptable match. For instance, do you need to match up to the throroughfare or building name only? Are accurate organisation names an important feature?


> Body parameter

```json
{
  "query": "10 Downing Street, London, SW2A 2BN"
}
```

<h3 id="cleanse-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api_key|query|[ApiKeyParam](#schemaapikeyparam)|false|none|
|body|body|object|true|none|
|» query|body|string|true|Freeform address input to cleanse<br>|

> Example responses

> 200 Response

```json
{
  "code": 2000,
  "message": "Success",
  "result": {
    "confidence": 0,
    "count": 0,
    "fit": 0,
    "locality_match": "FULL",
    "match": {
      "administrative_county": "",
      "building_name": "",
      "building_number": "10",
      "country": "England",
      "country_iso": "GBR",
      "country_iso_2": "GB",
      "county": "London",
      "county_code": "",
      "dataset": "paf",
      "delivery_point_suffix": "1A",
      "department_name": "",
      "dependant_locality": "",
      "dependant_thoroughfare": "",
      "district": "Westminster",
      "double_dependant_locality": "",
      "eastings": "string",
      "id": "paf_8387729",
      "language": "en",
      "latitude": "string",
      "line_1": "Prime Minister &amp; First Lord of Treasury",
      "line_2": "10 Downing Street",
      "line_3": "",
      "longitude": "string",
      "northings": "string",
      "organisation_name": "Prime Minister &amp; First Lord Of The Treasury",
      "po_box": "100",
      "post_town": "London",
      "postal_county": "London",
      "postcode": "SW1A 2AA",
      "postcode_inward": "2AA",
      "postcode_outward": "SW1A",
      "postcode_type": "S",
      "premise": "10",
      "su_organisation_indicator": "Y",
      "sub_building_name": "Flat 1",
      "thoroughfare": "Downing Street",
      "traditional_county": "Greater London",
      "udprn": 23747771,
      "umprn": "string",
      "uprn": "string",
      "ward": "St. James'"
    },
    "organisation_match": "FULL",
    "post_town_match": "FULL",
    "postcode_match": "FULL",
    "premise_match": "FULL",
    "query": "string",
    "thoroughfare_match": "FULL"
  }
}
```

> 400 Response

```json
{
  "code": 0,
  "message": "string",
  "errors": [
    {
      "errorCode": "required.openapi.validation",
      "message": "should have required property 'type'",
      "path": ".query.type"
    }
  ]
}
```

> 401 Response

```json
{
  "code": 0,
  "message": "string"
}
```

> 429 Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="cleanse-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CleanseResponse](#schemacleanseresponse)|
|400|Bad Request|Bad Request|[BadRequestResponse](#schemabadrequestresponse)|
|401|Unauthorized|Unauthorized|[UnauthorizedResponse](#schemaunauthorizedresponse)|
|429|Too Many Requests|Rate Limited|[RateLimitedResponse](#schemaratelimitedresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Lookup Postcode

<a id="opIdPostcodes"></a>

> Code samples

```bash
curl https://example.com/postcodes/SW1A%202AA \
  -H 'Accept: application/json'
```

`GET /postcodes/{postcode}`

Returns the complete list of addresses for a postcode. Postcode searches are space and case insensitive.

The Postcode Lookup API provides a JSON interface to search UK addresses from a postcode. It can be used to power Postcode Lookup driven address searches, like [Postcode Lookup](/postcode-lookup).

## Postcode Not Found

Lookup balance is unaffected by invalid postcodes. The API returns a `404` response with response body:

```json
{
  "code": 4040,
  "message": "Postcode not found",
  "suggestions": ["SW1A 0AA"]
}
```

### Suggestions

If a postcode cannot be found, the API will provide up to 5 closest matching postcodes. Common errors will be corrected first (e.g. mixing up `O` and `0` or `I` and `1`).

If the suggestion list is small (fewer than 3), there is a high probability the correct postcode is there. You may notify the user or immediately trigger new searches.

The suggestion list will be empty if the postcode has deviated too far from a valid postcode format.

## Multiple Residence

A small number of postcodes will return more than 100 premises. These may require pagination. Use `page` to paginate the result set.


<h3 id="lookup-postcode-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|postcode|path|[paf_postcode](#schemapaf_postcode)|true|Postcode to retrieve|
|api_key|query|[ApiKeyParam](#schemaapikeyparam)|false|none|
|filter|query|[FilterParam](#schemafilterparam)|false|none|
|page|query|[PageParam](#schemapageparam)|false|none|

> Example responses

> 200 Response

```json
{
  "code": 2000,
  "message": "Success",
  "result": [
    {
      "administrative_county": "",
      "building_name": "",
      "building_number": "10",
      "country": "England",
      "country_iso": "GBR",
      "country_iso_2": "GB",
      "county": "London",
      "county_code": "",
      "dataset": "paf",
      "delivery_point_suffix": "1A",
      "department_name": "",
      "dependant_locality": "",
      "dependant_thoroughfare": "",
      "district": "Westminster",
      "double_dependant_locality": "",
      "eastings": "string",
      "id": "paf_8387729",
      "language": "en",
      "latitude": "string",
      "line_1": "Prime Minister &amp; First Lord of Treasury",
      "line_2": "10 Downing Street",
      "line_3": "",
      "longitude": "string",
      "northings": "string",
      "organisation_name": "Prime Minister &amp; First Lord Of The Treasury",
      "po_box": "100",
      "post_town": "London",
      "postal_county": "London",
      "postcode": "SW1A 2AA",
      "postcode_inward": "2AA",
      "postcode_outward": "SW1A",
      "postcode_type": "S",
      "premise": "10",
      "su_organisation_indicator": "Y",
      "sub_building_name": "Flat 1",
      "thoroughfare": "Downing Street",
      "traditional_county": "Greater London",
      "udprn": 23747771,
      "umprn": "string",
      "uprn": "string",
      "ward": "St. James'"
    }
  ]
}
```

> 400 Response

```json
{
  "code": 0,
  "message": "string",
  "errors": [
    {
      "errorCode": "required.openapi.validation",
      "message": "should have required property 'type'",
      "path": ".query.type"
    }
  ]
}
```

> 404 Response

```json
{
  "code": 4040,
  "message": "Postcode not found",
  "suggestions": [
    "SN13 0SF"
  ]
}
```

<h3 id="lookup-postcode-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PostcodeResponse](#schemapostcoderesponse)|
|400|Bad Request|Bad Request|[BadRequestResponse](#schemabadrequestresponse)|
|404|Not Found|Postcode Not Found|[PostcodeNotFoundResponse](#schemapostcodenotfoundresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve by UDPRN

<a id="opIdUDPRN"></a>

> Code samples

```bash
curl https://example.com/udprn/string \
  -H 'Accept: application/json'
```

`GET /udprn/{udprn}`

Returns an address as identified by its Unique Delivery Point Reference Number (UDPRN).

You may find it useful to store UDPRN information as it can be used to retrieve the most recent information for an address. It can also be used to test for a deleted address.

UDPRNs are an eight digit unique numeric code (e.g. 25962203) for any premise on the Postcode Address File. It's essentially a unique identifier for every address in the UK that Royal Mail has in its database.

## Testing

To test your implementation of our API we have a range of test UDPRNs that yield both successful and unsuccessful responses to your request.

They are the following:

- `0` Returns a successful UDPRN lookup response
  `2000`
- `-1` Returns "UDPRN not found", error `4044`
- `-2` Returns "no lookups remaining", error `4020`
- `-3` Returns "daily (or individual) lookup limit breached",
  error `4021`

Test request undergo the usual authentication and restriction rules. This is to help surface any issues that occur during implementation and does not cost you a lookup.

<h3 id="retrieve-by-udprn-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|udprn|path|string|true|UDPRN to be retrieved|
|api_key|query|[ApiKeyParam](#schemaapikeyparam)|false|none|
|filter|query|[FilterParam](#schemafilterparam)|false|none|

> Example responses

> 200 Response

```json
{
  "code": 2000,
  "message": "Success",
  "result": {
    "administrative_county": "",
    "building_name": "",
    "building_number": "10",
    "country": "England",
    "country_iso": "GBR",
    "country_iso_2": "GB",
    "county": "London",
    "county_code": "",
    "dataset": "paf",
    "delivery_point_suffix": "1A",
    "department_name": "",
    "dependant_locality": "",
    "dependant_thoroughfare": "",
    "district": "Westminster",
    "double_dependant_locality": "",
    "eastings": "string",
    "id": "paf_8387729",
    "language": "en",
    "latitude": "string",
    "line_1": "Prime Minister &amp; First Lord of Treasury",
    "line_2": "10 Downing Street",
    "line_3": "",
    "longitude": "string",
    "northings": "string",
    "organisation_name": "Prime Minister &amp; First Lord Of The Treasury",
    "po_box": "100",
    "post_town": "London",
    "postal_county": "London",
    "postcode": "SW1A 2AA",
    "postcode_inward": "2AA",
    "postcode_outward": "SW1A",
    "postcode_type": "S",
    "premise": "10",
    "su_organisation_indicator": "Y",
    "sub_building_name": "Flat 1",
    "thoroughfare": "Downing Street",
    "traditional_county": "Greater London",
    "udprn": 23747771,
    "umprn": "string",
    "uprn": "string",
    "ward": "St. James'"
  }
}
```

> 404 Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="retrieve-by-udprn-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UDPRNResponse](#schemaudprnresponse)|
|404|Not Found|Resource not found|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve by UMPRN

<a id="opIdUMPRN"></a>

> Code samples

```bash
curl https://example.com/umprn/string \
  -H 'Accept: application/json'
```

`GET /umprn/{umprn}`

Returns a multiple occupancy address identifited via its UMPRN (Multiple Residence Unique ID).

UMPRNs are a unique numeric code for any Multiple Residence household on the optional Multiple Residence dataset.

## Testing

To test your implementation of our API we have a range of test UMPRNs that yield both successful and unsuccessful responses to your request. They are the following

- `0` Returns a successful UMPRN lookup response `2000`
- `-1` Returns "UMPRN not found", error `4044`
- `-2` Returns "no lookups remaining", error `4020`
- `-3` Returns "daily (or individual) lookup limit breached", error `4021`

Test request undergo the usual authentication and restriction rules. This is to help surface any issues that occur during implementation and does not cost you a lookup.

### Pricing

Per lookup charges apply. Empty responses are not charged.


<h3 id="retrieve-by-umprn-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|umprn|path|string|true|UMPRN to be retrieved|
|api_key|query|[ApiKeyParam](#schemaapikeyparam)|false|none|
|filter|query|[FilterParam](#schemafilterparam)|false|none|

> Example responses

> 200 Response

```json
{
  "code": 2000,
  "message": "Success",
  "result": {
    "administrative_county": "",
    "building_name": "",
    "building_number": "10",
    "country": "England",
    "country_iso": "GBR",
    "country_iso_2": "GB",
    "county": "London",
    "county_code": "",
    "dataset": "mr",
    "delivery_point_suffix": "1A",
    "department_name": "",
    "dependant_locality": "",
    "dependant_thoroughfare": "",
    "district": "Westminster",
    "double_dependant_locality": "",
    "eastings": "string",
    "id": "paf_8387729",
    "language": "en",
    "latitude": "string",
    "line_1": "Prime Minister &amp; First Lord of Treasury",
    "line_2": "10 Downing Street",
    "line_3": "",
    "longitude": "string",
    "northings": "string",
    "organisation_name": "Prime Minister &amp; First Lord Of The Treasury",
    "po_box": "100",
    "post_town": "London",
    "postal_county": "London",
    "postcode": "SW1A 2AA",
    "postcode_inward": "2AA",
    "postcode_outward": "SW1A",
    "postcode_type": "S",
    "premise": "10",
    "su_organisation_indicator": "Y",
    "sub_building_name": "Flat 1",
    "thoroughfare": "Downing Street",
    "traditional_county": "Greater London",
    "udprn": 23747771,
    "umprn": "string",
    "uprn": "string",
    "ward": "St. James'"
  }
}
```

> 404 Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="retrieve-by-umprn-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UMPRNResponse](#schemaumprnresponse)|
|404|Not Found|Resource not found|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="api-reference---ideal-postcodes-keys">Keys</h1>

Monitor and manage API Keys

## Availability

<a id="opIdKeyAvailability"></a>

> Code samples

```bash
curl https://example.com/keys/ak_test \
  -H 'Accept: application/json'
```

`GET /keys/{key}`

Returns public information on key. Currently only returns whether the key is currently useable via the `available` property. Use this to discover if the key is useable before making further requests.

You may pass both API Keys (beginning `ak_`) and Sub-licensed Keys (beginning `sl_`).
## Testing

To test your implementation of our API, you may use the following test keys.

- **iddqd** Availability will return as `true`
- **idkfa** Availability will return as `false`



<h3 id="availability-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|key|path|[ApiKeyParam](#schemaapikeyparam)|true|none|

> Example responses

> 200 Response

```json
{
  "code": 2000,
  "message": "Success",
  "result": {
    "available": true,
    "context": "string",
    "contexts": [
      {
        "description": "United States",
        "emoji": "🇺🇸",
        "iso_2": "US",
        "iso_3": "USA",
        "rgeo": true
      }
    ]
  }
}
```

> 404 Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="availability-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ApiKeyResponse](#schemaapikeyresponse)|
|404|Not Found|Invalid Key|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Details

<a id="opIdKeyDetails"></a>

> Code samples

```bash
curl https://example.com/keys/ak_test/details \
  -H 'Accept: application/json'
```

`GET /keys/{key}/details`

Returns private data on the key including remaining lookups, available datasets and usage limits.


<h3 id="details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|key|path|[ApiKeyParam](#schemaapikeyparam)|true|none|
|user_token|query|[UserTokenParam](#schemausertokenparam)|false|none|

> Example responses

> 200 Response

```json
{
  "code": 2000,
  "message": "Success",
  "result": {
    "allowed_urls": [
      "string"
    ],
    "automated_topups": {
      "enabled": true
    },
    "current_purchases": [
      {
        "consumed": 121,
        "expires": "2022-01-06T11:41:27.092Z",
        "purchased": 20000
      }
    ],
    "daily_limit": {
      "consumed": 288,
      "limit": 1000
    },
    "datasets": {
      "ecad": false,
      "ecaf": false,
      "herewe": true,
      "mr": true,
      "nyb": false,
      "paf": true,
      "pafa": false,
      "pafw": false,
      "usps": true
    },
    "individual_limit": {
      "limit": 30
    },
    "lookups_remaining": 19889,
    "notifications": {
      "emails": [
        "person@example.com"
      ],
      "enabled": true
    }
  }
}
```

> 401 Response

```json
{
  "code": 0,
  "message": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ApiKeyDetailsResponse](#schemaapikeydetailsresponse)|
|401|Unauthorized|Unauthorised|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Resource not found|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Logs (CSV)

<a id="opIdKeyLogs"></a>

> Code samples

```bash
curl https://example.com/keys/ak_test/lookups \
  -H 'Accept: application/json'
```

`GET /keys/{key}/lookups`

Reports lookup information on a key for paid lookups.

This method requires a `user_token`, which can be found on your [accounts page](https://ideal-postcodes.co.uk/account).

A maximum interval of 90 days can be provided for analysis. If no start or end date is provided, the last 21 days will be used as the default interval.

## Download Usage History (CSV)

`GET /keys/:key/lookups`

Returns a CSV download of lookups performed and associated information.

Note that the Content-Type returned will be CSV (text/csv). For a non 200 response, the `Content-Type` will revert to JSON with the error code and message embedded.

## Data Redaction

Personally Identifiable Data (PII) caught in this your usage log (including IP, search term and URL data) will be redacted on a weekly basis.

By default, PII will be redacted if it is older than 21 days. This timeframe can be configured from your dashboard.

You may prevent PII collection altogether by setting the interval to `0` days.


<h3 id="logs-csv-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|key|path|[ApiKeyParam](#schemaapikeyparam)|true|none|
|start|query|[StartParam](#schemastartparam)|false|An start date/time in the form of a UNIX Timestamp in milliseconds, e.g. `1418556452651`. If no start time is provided, the start time will be assigned to a time 21 days prior to the end time.|
|end|query|[EndParam](#schemaendparam)|false|An end date/time in the form of a UNIX Timestamp in milliseconds, e.g. `1418556452651`. If no end time is provided, the current time will be used.|
|licensee|query|[LicenseeParam](#schemalicenseeparam)|false|Sublicensed keys only. This will restrict the analysed dataset to a specific licensee.|

> Example responses

> 200 Response

```text
2015-02-21T16:05:22.991Z,82.85.128.18,SW12AA,https://www.example.com/,Postcode Lookup,
2015-02-21T16:05:38.298Z,82.85.128.18,10 Downing Street London,https://www.example.com/,Address Lookup,CRM
2015-02-21T16:06:49.227Z,82.85.128.18,OX44PP,https://www.example.com/,Postcode Lookup,"Website,Live"
2015-02-21T16:07:02.706Z,82.85.128.18,PL9 9HE,https://www.example.com/,Postcode Lookup,

```

> 400 Response

```json
{
  "code": 0,
  "message": "string",
  "errors": [
    {
      "errorCode": "required.openapi.validation",
      "message": "should have required property 'type'",
      "path": ".query.type"
    }
  ]
}
```

<h3 id="logs-csv-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad Request|[BadRequestResponse](#schemabadrequestresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Usage Stats

<a id="opIdKeyUsage"></a>

> Code samples

```bash
curl https://example.com/keys/ak_test/usage \
  -H 'Accept: application/json'
```

`GET /keys/{key}/usage`

Reports the number of lookups consumed on a key for a range of days.

A maximum interval of 90 days can be provided for analysis. If no start or end date is provided, the last 21 days will be used as the default interval.


<h3 id="usage-stats-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|key|path|[ApiKeyParam](#schemaapikeyparam)|true|none|
|start|query|[StartParam](#schemastartparam)|false|A start date/time in the form of a UNIX Timestamp in milliseconds, e.g. `1418556452651`. If no start time is provided, the start time will be assigned to a time 21 days prior to the end time.|
|end|query|[EndParam](#schemaendparam)|false|An end date/time in the form of a UNIX Timestamp in milliseconds, e.g. `1418556452651`. If no end time is provided, the current time will be used.|
|tags|query|[TagsParam](#schematagsparam)|false|none|
|licensee|query|[LicenseeParam](#schemalicenseeparam)|false|Sublicensed keys only. This will restrict the analysed dataset to a specific licensee.|

> Example responses

> 200 Response

```json
{
  "code": 2000,
  "message": "Success",
  "result": {
    "dailyCount": [
      {
        "count": 132,
        "date": "2015-01-22T00:00:00.000Z"
      }
    ],
    "end": "2015-01-23T15:08:06.609Z",
    "start": "2015-01-22T15:08:06.609Z",
    "total": 132
  }
}
```

> 400 Response

```json
{
  "code": 0,
  "message": "string",
  "errors": [
    {
      "errorCode": "required.openapi.validation",
      "message": "should have required property 'type'",
      "path": ".query.type"
    }
  ]
}
```

<h3 id="usage-stats-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ApiKeyUsageResponse](#schemaapikeyusageresponse)|
|400|Bad Request|Bad Request|[BadRequestResponse](#schemabadrequestresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="api-reference---ideal-postcodes-licensees">Licensees</h1>

The Licensee resource represents an alternate legal End User of our data who may not be same entity as the owners of the account.

The concept of Licensees underpins our sublicensing platform, which allows users to license multiple external organisations or individuals to access data under the same account.

Sublicensing is ideal for platform vendors, who provide services to multiple clients who in turn each have their own users.


## List

<a id="opIdListLicensees"></a>

> Code samples

```bash
curl https://example.com/keys/ak_test/licensees \
  -H 'Accept: application/json'
```

`GET /keys/{key}/licensees`

Returns a list of licensees for a key.

<h3 id="list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|key|path|[ApiKeyParam](#schemaapikeyparam)|true|none|
|starting_after|query|integer(int32)|false|Specify ID of the licensee after which you would like to list results|
|user_token|query|[UserTokenParam](#schemausertokenparam)|false|none|
|limit|query|[LimitParam](#schemalimitparam)|false|Specify the maximum number of results to return per page. Default and maximum is `100`.|
|query|query|string|false|Filter result by licensee name. Query can be shortened to `q=`|

> Example responses

> 200 Response

```json
{
  "code": 2000,
  "message": "Success",
  "result": {
    "hasMore": true,
    "licensees": [
      {
        "address": "12 High Street, Manchester",
        "daily": {
          "count": 232,
          "updatedAt": "2016-08-05T16:43:28.865Z"
        },
        "name": "Qwerty Widgets Limited",
        "postcode": "ID1 1QD",
        "whitelist": [
          "https://www.example.com"
        ],
        "createdAt": "2016-01-21T17:14:49.971Z",
        "id": "56a11209ebe230380bf104c3",
        "key": "sl_ijoiqsxeQgXW2gkiE0X94"
      }
    ]
  }
}
```

> 400 Response

```json
{
  "code": 0,
  "message": "string",
  "errors": [
    {
      "errorCode": "required.openapi.validation",
      "message": "should have required property 'type'",
      "path": ".query.type"
    }
  ]
}
```

<h3 id="list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[LicenseesResponse](#schemalicenseesresponse)|
|400|Bad Request|Bad Request|[BadRequestResponse](#schemabadrequestresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Create

<a id="opIdCreateLicensee"></a>

> Code samples

```bash
curl https://example.com/keys/ak_test/licensees \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "address": "12 High Street, Manchester",
    "daily": {
      "limit": 10000
    },
    "name": "Qwerty Widgets Limited",
    "postcode": "ID1 1QD",
    "whitelist": [
      "https://www.example.com"
    ]
  }'
```

`POST /keys/{key}/licensees`

Create a licensee for the specified API Key.

> Body parameter

```json
{
  "address": "12 High Street, Manchester",
  "daily": {
    "limit": 10000
  },
  "name": "Qwerty Widgets Limited",
  "postcode": "ID1 1QD",
  "whitelist": [
    "https://www.example.com"
  ]
}
```

<h3 id="create-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|key|path|[ApiKeyParam](#schemaapikeyparam)|true|none|
|user_token|query|[UserTokenParam](#schemausertokenparam)|false|none|
|body|body|[LicenseeEditable](#schemalicenseeeditable)|true|none|
|» address|body|string|false|Licensee's first, second and third line address as well as post town concatenated by commas|
|» daily|body|object|false|none|
|» » limit|body|number(int32)|false|The maximum number of lookups this licensee can perform in a day. `null` indicates the limit is not active|
|» name|body|string|false|Licensee individual or organisation name|
|» postcode|body|string|false|Licensee's postcode|
|» whitelist|body|[string]|false|A list of allowed URLs. An empty list means that whitelisting is disabled|

> Example responses

> 200 Response

```json
{
  "code": 2000,
  "message": "Success",
  "result": {
    "address": "12 High Street, Manchester",
    "daily": {
      "count": 232,
      "updatedAt": "2016-08-05T16:43:28.865Z"
    },
    "name": "Qwerty Widgets Limited",
    "postcode": "ID1 1QD",
    "whitelist": [
      "https://www.example.com"
    ],
    "createdAt": "2016-01-21T17:14:49.971Z",
    "id": "56a11209ebe230380bf104c3",
    "key": "sl_ijoiqsxeQgXW2gkiE0X94"
  }
}
```

> 400 Response

```json
{
  "code": 0,
  "message": "string",
  "errors": [
    {
      "errorCode": "required.openapi.validation",
      "message": "should have required property 'type'",
      "path": ".query.type"
    }
  ]
}
```

<h3 id="create-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[LicenseeResponse](#schemalicenseeresponse)|
|400|Bad Request|Bad Request|[BadRequestResponse](#schemabadrequestresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve

<a id="opIdRetrieveLicensee"></a>

> Code samples

```bash
curl https://example.com/keys/ak_test/licensees/sk_hk71kco54zGSGvF9eXXrvvnMOLLNh \
  -H 'Accept: application/json'
```

`GET /keys/{key}/licensees/{licensee}`

Returns licensee information as identified by the licensee key.

<h3 id="retrieve-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|key|path|[ApiKeyParam](#schemaapikeyparam)|true|none|
|licensee|path|[LicenseeParam](#schemalicenseeparam)|true|none|
|user_token|query|[UserTokenParam](#schemausertokenparam)|false|none|

> Example responses

> 200 Response

```json
{
  "code": 2000,
  "message": "Success",
  "result": {
    "address": "12 High Street, Manchester",
    "daily": {
      "count": 232,
      "updatedAt": "2016-08-05T16:43:28.865Z"
    },
    "name": "Qwerty Widgets Limited",
    "postcode": "ID1 1QD",
    "whitelist": [
      "https://www.example.com"
    ],
    "createdAt": "2016-01-21T17:14:49.971Z",
    "id": "56a11209ebe230380bf104c3",
    "key": "sl_ijoiqsxeQgXW2gkiE0X94"
  }
}
```

> 400 Response

```json
{
  "code": 0,
  "message": "string",
  "errors": [
    {
      "errorCode": "required.openapi.validation",
      "message": "should have required property 'type'",
      "path": ".query.type"
    }
  ]
}
```

<h3 id="retrieve-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[LicenseeResponse](#schemalicenseeresponse)|
|400|Bad Request|Bad Request|[BadRequestResponse](#schemabadrequestresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Update

<a id="opIdUpdateLicensee"></a>

> Code samples

```bash
curl https://example.com/keys/ak_test/licensees/sk_hk71kco54zGSGvF9eXXrvvnMOLLNh \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "address": "12 High Street, Manchester",
    "daily": {
      "limit": 10000
    },
    "name": "Qwerty Widgets Limited",
    "postcode": "ID1 1QD",
    "whitelist": [
      "https://www.example.com"
    ]
  }'
```

`PUT /keys/{key}/licensees/{licensee}`

Update Licensee

> Body parameter

```json
{
  "address": "12 High Street, Manchester",
  "daily": {
    "limit": 10000
  },
  "name": "Qwerty Widgets Limited",
  "postcode": "ID1 1QD",
  "whitelist": [
    "https://www.example.com"
  ]
}
```

<h3 id="update-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|key|path|[ApiKeyParam](#schemaapikeyparam)|true|none|
|licensee|path|[LicenseeParam](#schemalicenseeparam)|true|none|
|user_token|query|[UserTokenParam](#schemausertokenparam)|false|none|
|body|body|[LicenseeEditable](#schemalicenseeeditable)|true|none|
|» address|body|string|false|Licensee's first, second and third line address as well as post town concatenated by commas|
|» daily|body|object|false|none|
|» » limit|body|number(int32)|false|The maximum number of lookups this licensee can perform in a day. `null` indicates the limit is not active|
|» name|body|string|false|Licensee individual or organisation name|
|» postcode|body|string|false|Licensee's postcode|
|» whitelist|body|[string]|false|A list of allowed URLs. An empty list means that whitelisting is disabled|

> Example responses

> 200 Response

```json
{
  "code": 2000,
  "message": "Success",
  "result": {
    "address": "12 High Street, Manchester",
    "daily": {
      "count": 232,
      "updatedAt": "2016-08-05T16:43:28.865Z"
    },
    "name": "Qwerty Widgets Limited",
    "postcode": "ID1 1QD",
    "whitelist": [
      "https://www.example.com"
    ],
    "createdAt": "2016-01-21T17:14:49.971Z",
    "id": "56a11209ebe230380bf104c3",
    "key": "sl_ijoiqsxeQgXW2gkiE0X94"
  }
}
```

> 400 Response

```json
{
  "code": 0,
  "message": "string",
  "errors": [
    {
      "errorCode": "required.openapi.validation",
      "message": "should have required property 'type'",
      "path": ".query.type"
    }
  ]
}
```

<h3 id="update-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[LicenseeResponse](#schemalicenseeresponse)|
|400|Bad Request|Bad Request|[BadRequestResponse](#schemabadrequestresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Cancel

<a id="opIdDeleteLicensee"></a>

> Code samples

```bash
curl https://example.com/keys/ak_test/licensees/sk_hk71kco54zGSGvF9eXXrvvnMOLLNh \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /keys/{key}/licensees/{licensee}`

Cancels a licensee key. This renders a licensee unusable. This action can be reversed if you get in contact with us.

<h3 id="cancel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|key|path|[ApiKeyParam](#schemaapikeyparam)|true|none|
|licensee|path|[LicenseeParam](#schemalicenseeparam)|true|none|
|user_token|query|[UserTokenParam](#schemausertokenparam)|false|none|

> Example responses

> 200 Response

```json
{
  "code": 2000,
  "message": "Success",
  "result": {
    "deleted": 1
  }
}
```

> 400 Response

```json
{
  "code": 0,
  "message": "string",
  "errors": [
    {
      "errorCode": "required.openapi.validation",
      "message": "should have required property 'type'",
      "path": ".query.type"
    }
  ]
}
```

<h3 id="cancel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad Request|[BadRequestResponse](#schemabadrequestresponse)|

<h3 id="cancel-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|true|none|none|
|message|string|true|none|none|
|result|object|true|none|none|
|» deleted|number(int32)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|code|2000|
|message|Success|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="api-reference---ideal-postcodes-configs">Configs</h1>

The Config resource allows users to assign serialised configuration data to API Keys. The payloads assigned to a Config object can later be retrieved to dynamically configure your integration.

Useful if you need to configure your integration remotely rather than editing code in situ.


## List

<a id="opIdListConfigs"></a>

> Code samples

```bash
curl https://example.com/keys/ak_test/configs \
  -H 'Accept: application/json'
```

`GET /keys/{key}/configs`

Lists configurations associated with a key

<h3 id="list-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|key|path|[ApiKeyParam](#schemaapikeyparam)|true|none|
|user_token|query|[UserTokenParam](#schemausertokenparam)|false|none|

> Example responses

> 200 Response

```json
{
  "code": 2000,
  "message": "Success",
  "result": {
    "configs": [
      {
        "createdAt": "2016-01-21T17:14:49.971Z",
        "name": "woocommerce",
        "payload": "{\n  \"removeOrganisation\": false\n}\n",
        "updatedAt": "2016-01-21T17:14:49.971Z"
      }
    ]
  }
}
```

> 400 Response

```json
{
  "code": 0,
  "message": "string",
  "errors": [
    {
      "errorCode": "required.openapi.validation",
      "message": "should have required property 'type'",
      "path": ".query.type"
    }
  ]
}
```

> 401 Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="list-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ConfigsResponse](#schemaconfigsresponse)|
|400|Bad Request|Bad Request|[BadRequestResponse](#schemabadrequestresponse)|
|401|Unauthorized|Unauthorized Request|[UnauthorizedResponse](#schemaunauthorizedresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Create

<a id="opIdCreateConfig"></a>

> Code samples

```bash
curl https://example.com/keys/ak_test/configs \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "name": "woocommerce",
    "payload": "{\n  \"removeOrganisation\": false\n}\n"
  }'
```

`POST /keys/{key}/configs`

Create a config

> Body parameter

```json
{
  "name": "woocommerce",
  "payload": "{\n  \"removeOrganisation\": false\n}\n"
}
```

<h3 id="create-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|key|path|[ApiKeyParam](#schemaapikeyparam)|true|none|
|user_token|query|[UserTokenParam](#schemausertokenparam)|false|none|
|body|body|[ConfigNewParam](#schemaconfignewparam)|true|none|
|» name|body|string|true|A unique name to identify the configuration payload|
|» payload|body|string|true|A serialised payload of up to `4096` characters|

> Example responses

> 200 Response

```json
{
  "code": 2000,
  "message": "Success",
  "result": {
    "createdAt": "2016-01-21T17:14:49.971Z",
    "name": "woocommerce",
    "payload": "{\n  \"removeOrganisation\": false\n}\n",
    "updatedAt": "2016-01-21T17:14:49.971Z"
  }
}
```

> 400 Response

```json
{
  "code": 0,
  "message": "string",
  "errors": [
    {
      "errorCode": "required.openapi.validation",
      "message": "should have required property 'type'",
      "path": ".query.type"
    }
  ]
}
```

> 401 Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="create-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ConfigResponse](#schemaconfigresponse)|
|400|Bad Request|Bad Request|[BadRequestResponse](#schemabadrequestresponse)|
|401|Unauthorized|Unauthorized Request|[UnauthorizedResponse](#schemaunauthorizedresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve

<a id="opIdRetrieveConfig"></a>

> Code samples

```bash
curl https://example.com/keys/ak_test/configs/idpc-be \
  -H 'Accept: application/json'
```

`GET /keys/{key}/configs/{config}`

Retrieve config object by name

<h3 id="retrieve-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|key|path|[ApiKeyParam](#schemaapikeyparam)|true|none|
|config|path|[ConfigParam](#schemaconfigparam)|true|none|

> Example responses

> 200 Response

```json
{
  "code": 2000,
  "message": "Success",
  "result": {
    "createdAt": "2016-01-21T17:14:49.971Z",
    "name": "woocommerce",
    "payload": "{\n  \"removeOrganisation\": false\n}\n",
    "updatedAt": "2016-01-21T17:14:49.971Z"
  }
}
```

> 400 Response

```json
{
  "code": 0,
  "message": "string",
  "errors": [
    {
      "errorCode": "required.openapi.validation",
      "message": "should have required property 'type'",
      "path": ".query.type"
    }
  ]
}
```

> 404 Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="retrieve-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ConfigResponse](#schemaconfigresponse)|
|400|Bad Request|Bad Request|[BadRequestResponse](#schemabadrequestresponse)|
|404|Not Found|Not Found|[NotFoundResponse](#schemanotfoundresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Update

<a id="opIdUpdateConfig"></a>

> Code samples

```bash
curl https://example.com/keys/ak_test/configs/idpc-be \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "payload": "{\n  \"removeOrganisation\": false\n}\n"
  }'
```

`POST /keys/{key}/configs/{config}`

Updates configuration object

> Body parameter

```json
{
  "payload": "{\n  \"removeOrganisation\": false\n}\n"
}
```

<h3 id="update-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|key|path|[ApiKeyParam](#schemaapikeyparam)|true|none|
|config|path|[ConfigParam](#schemaconfigparam)|true|none|
|user_token|query|[UserTokenParam](#schemausertokenparam)|false|none|
|body|body|[ConfigUpdateParam](#schemaconfigupdateparam)|true|none|
|» payload|body|string|false|A serialised payload of up to `4096` characters|

> Example responses

> 200 Response

```json
{
  "code": 2000,
  "message": "Success",
  "result": {
    "createdAt": "2016-01-21T17:14:49.971Z",
    "name": "woocommerce",
    "payload": "{\n  \"removeOrganisation\": false\n}\n",
    "updatedAt": "2016-01-21T17:14:49.971Z"
  }
}
```

> 400 Response

```json
{
  "code": 0,
  "message": "string",
  "errors": [
    {
      "errorCode": "required.openapi.validation",
      "message": "should have required property 'type'",
      "path": ".query.type"
    }
  ]
}
```

> 401 Response

```json
{
  "code": 0,
  "message": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="update-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ConfigResponse](#schemaconfigresponse)|
|400|Bad Request|Bad Request|[BadRequestResponse](#schemabadrequestresponse)|
|401|Unauthorized|Unauthorized Request|[UnauthorizedResponse](#schemaunauthorizedresponse)|
|404|Not Found|Not Found|[NotFoundResponse](#schemanotfoundresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete

<a id="opIdDeleteConfig"></a>

> Code samples

```bash
curl https://example.com/keys/ak_test/configs/idpc-be \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /keys/{key}/configs/{config}`

Permanently deletes a configuration object.

<h3 id="delete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|key|path|[ApiKeyParam](#schemaapikeyparam)|true|none|
|config|path|[ConfigParam](#schemaconfigparam)|true|none|
|user_token|query|[UserTokenParam](#schemausertokenparam)|false|none|

> Example responses

> 200 Response

```json
{
  "code": 2000,
  "message": "Success",
  "result": {
    "deleted": 1
  }
}
```

> 400 Response

```json
{
  "code": 0,
  "message": "string",
  "errors": [
    {
      "errorCode": "required.openapi.validation",
      "message": "should have required property 'type'",
      "path": ".query.type"
    }
  ]
}
```

> 401 Response

```json
{
  "code": 0,
  "message": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="delete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad Request|[BadRequestResponse](#schemabadrequestresponse)|
|401|Unauthorized|Unauthorized Request|[UnauthorizedResponse](#schemaunauthorizedresponse)|
|404|Not Found|Not Found|[NotFoundResponse](#schemanotfoundresponse)|

<h3 id="delete-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|true|none|none|
|message|string|true|none|none|
|result|object|true|none|none|
|» deleted|number(int32)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|code|2000|
|message|Success|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="api-reference---ideal-postcodes-emails">Emails</h1>

## Email Validation

<a id="opIdEmailValidation"></a>

> Code samples

```bash
curl 'https://example.com/emails?api_key=ak_test&query=string' \
  -H 'Accept: application/json'
```

`GET /emails`

Query for and validate email addresses.


<h3 id="email-validation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api_key|query|[ApiKeyParam](#schemaapikeyparam)|true|none|
|query|query|string|true|Specifies the email address to validate|

> Example responses

> 200 Response

```json
{
  "code": 2000,
  "message": "Success",
  "result": {
    "catchall": true,
    "deliverable": true,
    "disposable": true,
    "free": true,
    "result": "deliverable",
    "role": true
  }
}
```

> 400 Response

```json
{
  "code": 0,
  "message": "string",
  "errors": [
    {
      "errorCode": "required.openapi.validation",
      "message": "should have required property 'type'",
      "path": ".query.type"
    }
  ]
}
```

<h3 id="email-validation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[EmailResponse](#schemaemailresponse)|
|400|Bad Request|Bad Request|[BadRequestResponse](#schemabadrequestresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="api-reference---ideal-postcodes-phone-numbers">Phone Numbers</h1>

## Phone Number Validation

<a id="opIdPhoneNumberValidation"></a>

> Code samples

```bash
curl 'https://example.com/phone_numbers?api_key=ak_test&query=string' \
  -H 'Accept: application/json'
```

`GET /phone_numbers`

Query for and validate phone numbers.


<h3 id="phone-number-validation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api_key|query|[ApiKeyParam](#schemaapikeyparam)|true|none|
|query|query|string|true|Specifies the phone number to validate. Phone number must include a country code in acceptable format. For instance, UK phone numbers should be suffixed `+44`, `44` or `0044`.|

> Example responses

> 200 Response

```json
{
  "code": 2000,
  "message": "Success",
  "result": {
    "country": "United Kingdom",
    "current_carrier": {
      "country": "GB",
      "name": "BT Group",
      "network_code": "234",
      "network_type": "mobile"
    },
    "international_format": "442071128019",
    "iso_country": "GBR",
    "iso_country_2": "GB",
    "national_format": "020 7112 8019",
    "original_carrier": {
      "country": "GB",
      "name": "BT Group",
      "network_code": "234",
      "network_type": "mobile"
    },
    "valid": true
  }
}
```

> 400 Response

```json
{
  "code": 0,
  "message": "string",
  "errors": [
    {
      "errorCode": "required.openapi.validation",
      "message": "should have required property 'type'",
      "path": ".query.type"
    }
  ]
}
```

<h3 id="phone-number-validation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PhoneNumberResponse](#schemaphonenumberresponse)|
|400|Bad Request|Bad Request|[BadRequestResponse](#schemabadrequestresponse)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_AddressLatitudeParam">AddressLatitudeParam</h2>
<!-- backwards compatibility -->
<a id="schemaaddresslatitudeparam"></a>
<a id="schema_AddressLatitudeParam"></a>
<a id="tocSaddresslatitudeparam"></a>
<a id="tocsaddresslatitudeparam"></a>

```json
51.503541
```

Latitude query for reverse geocoding.

An accompanying longitude (lon=) query must be submitted for a valid reverse geocode query.

<h2 id="tocS_AddressLongitudeParam">AddressLongitudeParam</h2>
<!-- backwards compatibility -->
<a id="schemaaddresslongitudeparam"></a>
<a id="schema_AddressLongitudeParam"></a>
<a id="tocSaddresslongitudeparam"></a>
<a id="tocsaddresslongitudeparam"></a>

```json
-0.12767
```

Longitude query for reverse geocoding.

An accompanying latitude (lat=) query must be submitted for a valid reverse geocode query.

<h2 id="tocS_AddressResponse">AddressResponse</h2>
<!-- backwards compatibility -->
<a id="schemaaddressresponse"></a>
<a id="schema_AddressResponse"></a>
<a id="tocSaddressresponse"></a>
<a id="tocsaddressresponse"></a>

```json
{
  "code": 2000,
  "message": "Success",
  "result": {
    "hits": [
      {
        "administrative_county": "",
        "building_name": "",
        "building_number": "10",
        "country": "England",
        "country_iso": "GBR",
        "country_iso_2": "GB",
        "county": "London",
        "county_code": "",
        "dataset": "paf",
        "delivery_point_suffix": "1A",
        "department_name": "",
        "dependant_locality": "",
        "dependant_thoroughfare": "",
        "district": "Westminster",
        "double_dependant_locality": "",
        "eastings": "string",
        "id": "paf_8387729",
        "language": "en",
        "latitude": "string",
        "line_1": "Prime Minister &amp; First Lord of Treasury",
        "line_2": "10 Downing Street",
        "line_3": "",
        "longitude": "string",
        "northings": "string",
        "organisation_name": "Prime Minister &amp; First Lord Of The Treasury",
        "po_box": "100",
        "post_town": "London",
        "postal_county": "London",
        "postcode": "SW1A 2AA",
        "postcode_inward": "2AA",
        "postcode_outward": "SW1A",
        "postcode_type": "S",
        "premise": "10",
        "su_organisation_indicator": "Y",
        "sub_building_name": "Flat 1",
        "thoroughfare": "Downing Street",
        "traditional_county": "Greater London",
        "udprn": 23747771,
        "umprn": "string",
        "uprn": "string",
        "ward": "St. James'"
      }
    ],
    "limit": 10,
    "page": 0,
    "total": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|true|none|none|
|message|string|true|none|none|
|result|object|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|code|2000|
|message|Success|

<h2 id="tocS_AddressSuggestion">AddressSuggestion</h2>
<!-- backwards compatibility -->
<a id="schemaaddresssuggestion"></a>
<a id="schema_AddressSuggestion"></a>
<a id="tocSaddresssuggestion"></a>
<a id="tocsaddresssuggestion"></a>

```json
{
  "id": "paf_8387729",
  "suggestion": "Flat 6, 12 Roskear, Camborne, TR14",
  "urls": {}
}
```

Represents an address suggestion for any address in the world

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[ID](#schemaid)|true|none|Global unique internally generated identifier for an address|
|suggestion|string|true|none|Address Suggestion to be displayed to the user|
|urls|object|true|none|none|

<h2 id="tocS_ApiKey">ApiKey</h2>
<!-- backwards compatibility -->
<a id="schemaapikey"></a>
<a id="schema_ApiKey"></a>
<a id="tocSapikey"></a>
<a id="tocsapikey"></a>

```json
{
  "available": true,
  "context": "string",
  "contexts": [
    {
      "description": "United States",
      "emoji": "🇺🇸",
      "iso_2": "US",
      "iso_3": "USA",
      "rgeo": true
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|available|boolean|true|none|Determines whether the key can be used by the requesting agent. <br><br>Returns false if one of the following conditions are met:<br>  - Key has no lookups remaining<br>  - Daily limit has been reached on the key<br>  - Daily individual limit has been reached<br>  - Key is not being used via an authorised URL<br>  - (Sublicensed key only) Key has a valid licensee attached<br>  - (Sublicensed key only) Key is not being used via an authorised URL specified by licensee<br>|
|context|[Context](#schemacontext) \| [NoContext](#schemanocontext)|true|none|Returns current context if it is in the list of available contexts for this key.<br>|
|contexts|[AvailableContexts](#schemaavailablecontexts)|true|none|A list of available contexts for a key|

<h2 id="tocS_ApiKeyAutomatedTopup">ApiKeyAutomatedTopup</h2>
<!-- backwards compatibility -->
<a id="schemaapikeyautomatedtopup"></a>
<a id="schema_ApiKeyAutomatedTopup"></a>
<a id="tocSapikeyautomatedtopup"></a>
<a id="tocsapikeyautomatedtopup"></a>

```json
{
  "enabled": true
}
```

Automated topup status

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|true|none|Indicates whether automated top-ups are enabled|

<h2 id="tocS_ApiKeyCurrentPurchase">ApiKeyCurrentPurchase</h2>
<!-- backwards compatibility -->
<a id="schemaapikeycurrentpurchase"></a>
<a id="schema_ApiKeyCurrentPurchase"></a>
<a id="tocSapikeycurrentpurchase"></a>
<a id="tocsapikeycurrentpurchase"></a>

```json
{
  "consumed": 121,
  "expires": "2022-01-06T11:41:27.092Z",
  "purchased": 20000
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|consumed|integer(int32)|true|none|Number of consumed lookups off this purchase.|
|expires|string|true|none|`string` or `null` The date when this purchase will expire in simplified <br>extended ISO format (ISO 8601). This is typically 365 days from the time <br>of first use. This field will be `null` if the purchase has not yet been <br>used.|
|purchased|integer(int32)|true|none|Number of procured lookups from this purchase.|

<h2 id="tocS_ApiKeyDailyLimit">ApiKeyDailyLimit</h2>
<!-- backwards compatibility -->
<a id="schemaapikeydailylimit"></a>
<a id="schema_ApiKeyDailyLimit"></a>
<a id="tocSapikeydailylimit"></a>
<a id="tocsapikeydailylimit"></a>

```json
{
  "consumed": 288,
  "limit": 1000
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|consumed|integer(int32)|true|none|Number of lookups performed today which count towards your daily limit.|
|limit|integer(int32)|true|none|`number` or `null`. The daily lookup limit currently set on your key. <br>`null` means the limit is currently disabled.|

<h2 id="tocS_ApiKeyDatasets">ApiKeyDatasets</h2>
<!-- backwards compatibility -->
<a id="schemaapikeydatasets"></a>
<a id="schema_ApiKeyDatasets"></a>
<a id="tocSapikeydatasets"></a>
<a id="tocsapikeydatasets"></a>

```json
{
  "ecad": false,
  "ecaf": false,
  "herewe": true,
  "mr": true,
  "nyb": false,
  "paf": true,
  "pafa": false,
  "pafw": false,
  "usps": true
}
```

Indicates which datasets are available and added by default to the address responses

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ecad|boolean|true|none|IE Address File. Eircode Address Database|
|ecaf|boolean|true|none|IE Base Address File. Eircode Address File|
|herewe|boolean|false|none|Western Europe Address File|
|mr|boolean|true|none|UK Multiple Residence Dataset|
|nyb|boolean|true|none|UK Not Yet Built Dataset|
|paf|boolean|true|none|UK Main Address File (Postcode Address File)|
|pafa|boolean|true|none|UK Property Alias dataset|
|pafw|boolean|true|none|UK Welsh Language Dataset|
|usps|boolean|true|none|US Address Dataset|

<h2 id="tocS_ApiKeyDetails">ApiKeyDetails</h2>
<!-- backwards compatibility -->
<a id="schemaapikeydetails"></a>
<a id="schema_ApiKeyDetails"></a>
<a id="tocSapikeydetails"></a>
<a id="tocsapikeydetails"></a>

```json
{
  "allowed_urls": [
    "string"
  ],
  "automated_topups": {
    "enabled": true
  },
  "current_purchases": [
    {
      "consumed": 121,
      "expires": "2022-01-06T11:41:27.092Z",
      "purchased": 20000
    }
  ],
  "daily_limit": {
    "consumed": 288,
    "limit": 1000
  },
  "datasets": {
    "ecad": false,
    "ecaf": false,
    "herewe": true,
    "mr": true,
    "nyb": false,
    "paf": true,
    "pafa": false,
    "pafw": false,
    "usps": true
  },
  "individual_limit": {
    "limit": 30
  },
  "lookups_remaining": 19889,
  "notifications": {
    "emails": [
      "person@example.com"
    ],
    "enabled": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowed_urls|[string]|true|none|A list of allowed URLs. An empty list means that allowed URLs are disabled.|
|automated_topups|[ApiKeyAutomatedTopup](#schemaapikeyautomatedtopup)|true|none|Automated topup status|
|current_purchases|[[ApiKeyCurrentPurchase](#schemaapikeycurrentpurchase)]|true|none|Current balance purchases attached to key.|
|daily_limit|[ApiKeyDailyLimit](#schemaapikeydailylimit)|true|none|none|
|datasets|[ApiKeyDatasets](#schemaapikeydatasets)|false|none|Indicates which datasets are available and added by default to the address responses|
|individual_limit|[ApiKeyIndividualLimit](#schemaapikeyindividuallimit)|true|none|none|
|lookups_remaining|integer(int32)|true|none|none|
|notifications|[ApiKeyNotifications](#schemaapikeynotifications)|false|none|none|

<h2 id="tocS_ApiKeyDetailsResponse">ApiKeyDetailsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaapikeydetailsresponse"></a>
<a id="schema_ApiKeyDetailsResponse"></a>
<a id="tocSapikeydetailsresponse"></a>
<a id="tocsapikeydetailsresponse"></a>

```json
{
  "code": 2000,
  "message": "Success",
  "result": {
    "allowed_urls": [
      "string"
    ],
    "automated_topups": {
      "enabled": true
    },
    "current_purchases": [
      {
        "consumed": 121,
        "expires": "2022-01-06T11:41:27.092Z",
        "purchased": 20000
      }
    ],
    "daily_limit": {
      "consumed": 288,
      "limit": 1000
    },
    "datasets": {
      "ecad": false,
      "ecaf": false,
      "herewe": true,
      "mr": true,
      "nyb": false,
      "paf": true,
      "pafa": false,
      "pafw": false,
      "usps": true
    },
    "individual_limit": {
      "limit": 30
    },
    "lookups_remaining": 19889,
    "notifications": {
      "emails": [
        "person@example.com"
      ],
      "enabled": true
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|true|none|none|
|message|string|true|none|none|
|result|[ApiKeyDetails](#schemaapikeydetails)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|code|2000|
|message|Success|

<h2 id="tocS_ApiKeyIndividualLimit">ApiKeyIndividualLimit</h2>
<!-- backwards compatibility -->
<a id="schemaapikeyindividuallimit"></a>
<a id="schema_ApiKeyIndividualLimit"></a>
<a id="tocSapikeyindividuallimit"></a>
<a id="tocsapikeyindividuallimit"></a>

```json
{
  "limit": 30
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|limit|integer(int32)|true|none|`number` or `null` Limit set on the number of lookups that can be <br>performed from a single IP address. `null` means the limit is currently <br>disabled.|

<h2 id="tocS_ApiKeyNotifications">ApiKeyNotifications</h2>
<!-- backwards compatibility -->
<a id="schemaapikeynotifications"></a>
<a id="schema_ApiKeyNotifications"></a>
<a id="tocSapikeynotifications"></a>
<a id="tocsapikeynotifications"></a>

```json
{
  "emails": [
    "person@example.com"
  ],
  "enabled": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|emails|[string]|true|none|A list of email addresses designated by you to receive notifications about this key.|
|enabled|boolean|true|none|Indicates whether email notifications are enabled.|

<h2 id="tocS_ApiKeyParam">ApiKeyParam</h2>
<!-- backwards compatibility -->
<a id="schemaapikeyparam"></a>
<a id="schema_ApiKeyParam"></a>
<a id="tocSapikeyparam"></a>
<a id="tocsapikeyparam"></a>

```json
"ak_test"
```

Your API Key. Typically beings `ak_`.

Available from your dashboard

<h2 id="tocS_ApiKeyResponse">ApiKeyResponse</h2>
<!-- backwards compatibility -->
<a id="schemaapikeyresponse"></a>
<a id="schema_ApiKeyResponse"></a>
<a id="tocSapikeyresponse"></a>
<a id="tocsapikeyresponse"></a>

```json
{
  "code": 2000,
  "message": "Success",
  "result": {
    "available": true,
    "context": "string",
    "contexts": [
      {
        "description": "United States",
        "emoji": "🇺🇸",
        "iso_2": "US",
        "iso_3": "USA",
        "rgeo": true
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|true|none|none|
|message|string|true|none|none|
|result|[ApiKey](#schemaapikey)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|code|2000|
|message|Success|

<h2 id="tocS_ApiKeyUsageResponse">ApiKeyUsageResponse</h2>
<!-- backwards compatibility -->
<a id="schemaapikeyusageresponse"></a>
<a id="schema_ApiKeyUsageResponse"></a>
<a id="tocSapikeyusageresponse"></a>
<a id="tocsapikeyusageresponse"></a>

```json
{
  "code": 2000,
  "message": "Success",
  "result": {
    "dailyCount": [
      {
        "count": 132,
        "date": "2015-01-22T00:00:00.000Z"
      }
    ],
    "end": "2015-01-23T15:08:06.609Z",
    "start": "2015-01-22T15:08:06.609Z",
    "total": 132
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|true|none|none|
|message|string|true|none|none|
|result|[KeyUsageResult](#schemakeyusageresult)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|code|2000|
|message|Success|

<h2 id="tocS_AutocompleteResponse">AutocompleteResponse</h2>
<!-- backwards compatibility -->
<a id="schemaautocompleteresponse"></a>
<a id="schema_AutocompleteResponse"></a>
<a id="tocSautocompleteresponse"></a>
<a id="tocsautocompleteresponse"></a>

```json
{
  "code": 2000,
  "message": "Success",
  "result": {
    "hits": [
      {
        "id": "paf_8387729",
        "suggestion": "Flat 6, 12 Roskear, Camborne, TR14",
        "urls": {}
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|true|none|none|
|message|string|true|none|none|
|result|object|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|code|2000|
|message|Success|

<h2 id="tocS_AvailableContexts">AvailableContexts</h2>
<!-- backwards compatibility -->
<a id="schemaavailablecontexts"></a>
<a id="schema_AvailableContexts"></a>
<a id="tocSavailablecontexts"></a>
<a id="tocsavailablecontexts"></a>

```json
[
  {
    "description": "United States",
    "emoji": "🇺🇸",
    "iso_2": "US",
    "iso_3": "USA",
    "rgeo": true
  }
]
```

A list of available contexts for a key

<h2 id="tocS_BadRequestResponse">BadRequestResponse</h2>
<!-- backwards compatibility -->
<a id="schemabadrequestresponse"></a>
<a id="schema_BadRequestResponse"></a>
<a id="tocSbadrequestresponse"></a>
<a id="tocsbadrequestresponse"></a>

```json
{
  "code": 0,
  "message": "string",
  "errors": [
    {
      "errorCode": "required.openapi.validation",
      "message": "should have required property 'type'",
      "path": ".query.type"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|true|none|API Response Code. Non `2xxx` code indicates a failure. This code will provide a more specific reason when a failure occurs and facilitates debugging.|
|message|string|true|none|Human readable error message supplied with every error response.|
|code|integer(int32)|true|none|`400X` type error response code|
|errors|[object]|false|none|none|
|message|string|true|none|Bad request error description|

<h2 id="tocS_BiasCountryIsoParam">BiasCountryIsoParam</h2>
<!-- backwards compatibility -->
<a id="schemabiascountryisoparam"></a>
<a id="schema_BiasCountryIsoParam"></a>
<a id="tocSbiascountryisoparam"></a>
<a id="tocsbiascountryisoparam"></a>

```json
"GBR"
```

Bias by country ISO code. Uses 3 letter country code (ISO 3166-1) standard.
Bias by multiple countries with a comma separated list. E.g. `GBR,IRL`

<h2 id="tocS_BiasCountryParam">BiasCountryParam</h2>
<!-- backwards compatibility -->
<a id="schemabiascountryparam"></a>
<a id="schema_BiasCountryParam"></a>
<a id="tocSbiascountryparam"></a>
<a id="tocsbiascountryparam"></a>

```json
"string"
```

Bias by country. Possible values are England, Scotland, Wales, Northern Ireland, Jersey, Guernsey and Isle of Man.

<h2 id="tocS_BiasIpParam">BiasIpParam</h2>
<!-- backwards compatibility -->
<a id="schemabiasipparam"></a>
<a id="schema_BiasIpParam"></a>
<a id="tocSbiasipparam"></a>
<a id="tocsbiasipparam"></a>

```json
"true"
```

Biases search based on approximate geolocation of IP address.
Set `bias_ip=true` to enable.

<h2 id="tocS_BiasLonLatParam">BiasLonLatParam</h2>
<!-- backwards compatibility -->
<a id="schemabiaslonlatparam"></a>
<a id="schema_BiasLonLatParam"></a>
<a id="tocSbiaslonlatparam"></a>
<a id="tocsbiaslonlatparam"></a>

```json
"-2.095,57.15,100"
```

Bias search to a geospatial circle determined by an origin and radius in meters. Max radius is `50000`.  Uses the format bias_lonlat=[longitude],[latitude],[radius in metres] Only one geospatial bias may be provided

<h2 id="tocS_BiasPostcodeAreaParam">BiasPostcodeAreaParam</h2>
<!-- backwards compatibility -->
<a id="schemabiaspostcodeareaparam"></a>
<a id="schema_BiasPostcodeAreaParam"></a>
<a id="tocSbiaspostcodeareaparam"></a>
<a id="tocsbiaspostcodeareaparam"></a>

```json
"The postcode area of SW1A 2AA and N1 6RT are SW and N respectively"
```

Bias by postcode area, the first one or two non-numeric characters of a postcode.

<h2 id="tocS_BiasPostcodeOutwardParam">BiasPostcodeOutwardParam</h2>
<!-- backwards compatibility -->
<a id="schemabiaspostcodeoutwardparam"></a>
<a id="schema_BiasPostcodeOutwardParam"></a>
<a id="tocSbiaspostcodeoutwardparam"></a>
<a id="tocsbiaspostcodeoutwardparam"></a>

```json
"string"
```

Bias by outward code

<h2 id="tocS_BiasPostcodeParam">BiasPostcodeParam</h2>
<!-- backwards compatibility -->
<a id="schemabiaspostcodeparam"></a>
<a id="schema_BiasPostcodeParam"></a>
<a id="tocSbiaspostcodeparam"></a>
<a id="tocsbiaspostcodeparam"></a>

```json
"/addresses?postcode=SW1A2AA&q=10"
```

Bias by postcode. Can be combined with query to perform a postcode + building number/name search.

<h2 id="tocS_BiasPostcodeSectorParam">BiasPostcodeSectorParam</h2>
<!-- backwards compatibility -->
<a id="schemabiaspostcodesectorparam"></a>
<a id="schema_BiasPostcodeSectorParam"></a>
<a id="tocSbiaspostcodesectorparam"></a>
<a id="tocsbiaspostcodesectorparam"></a>

```json
"SW1A 2AA is SW1A 2"
```

Bias by postcode sector, the outward code plus first numeric of the inward code.

<h2 id="tocS_BiasPosttownParam">BiasPosttownParam</h2>
<!-- backwards compatibility -->
<a id="schemabiasposttownparam"></a>
<a id="schema_BiasPosttownParam"></a>
<a id="tocSbiasposttownparam"></a>
<a id="tocsbiasposttownparam"></a>

```json
"string"
```

Bias by town.

<h2 id="tocS_BiasThoroughfareParam">BiasThoroughfareParam</h2>
<!-- backwards compatibility -->
<a id="schemabiasthoroughfareparam"></a>
<a id="schema_BiasThoroughfareParam"></a>
<a id="tocSbiasthoroughfareparam"></a>
<a id="tocsbiasthoroughfareparam"></a>

```json
"string"
```

Bias by street name.

<h2 id="tocS_BoxParam">BoxParam</h2>
<!-- backwards compatibility -->
<a id="schemaboxparam"></a>
<a id="schema_BoxParam"></a>
<a id="tocSboxparam"></a>
<a id="tocsboxparam"></a>

```json
"2.095,57.15,-2.096,57.14"
```

Restrict search to a geospatial box determined by the "top-left" and "bottom-right" gelocations.   Only one geospatial box can be provided.

<h2 id="tocS_Carrier">Carrier</h2>
<!-- backwards compatibility -->
<a id="schemacarrier"></a>
<a id="schema_Carrier"></a>
<a id="tocScarrier"></a>
<a id="tocscarrier"></a>

```json
{
  "country": "GB",
  "name": "BT Group",
  "network_code": "234",
  "network_type": "mobile"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|country|string \| null|true|none|Country that number is associated with. In ISO 3166-1 alpha-2 format.|
|name|string \| null|true|none|The full name of the carrier that number is associated with.|
|network_code|string \| null|true|none|The [Mobile Country Code](https://en.wikipedia.org/wiki/Mobile_country_code) for the carrier.|
|network_type|string \| null|true|none|Type of network that number is associated with.|

#### Enumerated Values

|Property|Value|
|---|---|
|network_type|mobile|
|network_type|landline|
|network_type|landline_premium|
|network_type|landline_tollfree|
|network_type|virtual|
|network_type|unknown|
|network_type|pager|

<h2 id="tocS_CleanseResponse">CleanseResponse</h2>
<!-- backwards compatibility -->
<a id="schemacleanseresponse"></a>
<a id="schema_CleanseResponse"></a>
<a id="tocScleanseresponse"></a>
<a id="tocscleanseresponse"></a>

```json
{
  "code": 2000,
  "message": "Success",
  "result": {
    "confidence": 0,
    "count": 0,
    "fit": 0,
    "locality_match": "FULL",
    "match": {
      "administrative_county": "",
      "building_name": "",
      "building_number": "10",
      "country": "England",
      "country_iso": "GBR",
      "country_iso_2": "GB",
      "county": "London",
      "county_code": "",
      "dataset": "paf",
      "delivery_point_suffix": "1A",
      "department_name": "",
      "dependant_locality": "",
      "dependant_thoroughfare": "",
      "district": "Westminster",
      "double_dependant_locality": "",
      "eastings": "string",
      "id": "paf_8387729",
      "language": "en",
      "latitude": "string",
      "line_1": "Prime Minister &amp; First Lord of Treasury",
      "line_2": "10 Downing Street",
      "line_3": "",
      "longitude": "string",
      "northings": "string",
      "organisation_name": "Prime Minister &amp; First Lord Of The Treasury",
      "po_box": "100",
      "post_town": "London",
      "postal_county": "London",
      "postcode": "SW1A 2AA",
      "postcode_inward": "2AA",
      "postcode_outward": "SW1A",
      "postcode_type": "S",
      "premise": "10",
      "su_organisation_indicator": "Y",
      "sub_building_name": "Flat 1",
      "thoroughfare": "Downing Street",
      "traditional_county": "Greater London",
      "udprn": 23747771,
      "umprn": "string",
      "uprn": "string",
      "ward": "St. James'"
    },
    "organisation_match": "FULL",
    "post_town_match": "FULL",
    "postcode_match": "FULL",
    "premise_match": "FULL",
    "query": "string",
    "thoroughfare_match": "FULL"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|true|none|none|
|message|string|true|none|none|
|result|[GbrCleanseMatch](#schemagbrcleansematch) \| [GbrCleanseNoMatch](#schemagbrcleansenomatch)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|code|2000|
|message|Success|

<h2 id="tocS_Config">Config</h2>
<!-- backwards compatibility -->
<a id="schemaconfig"></a>
<a id="schema_Config"></a>
<a id="tocSconfig"></a>
<a id="tocsconfig"></a>

```json
{
  "createdAt": "2016-01-21T17:14:49.971Z",
  "name": "woocommerce",
  "payload": "{\n  \"removeOrganisation\": false\n}\n",
  "updatedAt": "2016-01-21T17:14:49.971Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|string|true|none|Timestamp for when the config was updated|
|name|string|true|none|A unique name to identify the configuration payload|
|payload|string|true|none|A serialised payload of up to `4096` characters|
|updatedAt|string|true|none|Timestamp for when the config was created|

<h2 id="tocS_ConfigNewParam">ConfigNewParam</h2>
<!-- backwards compatibility -->
<a id="schemaconfignewparam"></a>
<a id="schema_ConfigNewParam"></a>
<a id="tocSconfignewparam"></a>
<a id="tocsconfignewparam"></a>

```json
{
  "name": "woocommerce",
  "payload": "{\n  \"removeOrganisation\": false\n}\n"
}
```

Required configuration object parameters

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|A unique name to identify the configuration payload|
|payload|string|true|none|A serialised payload of up to `4096` characters|

<h2 id="tocS_ConfigParam">ConfigParam</h2>
<!-- backwards compatibility -->
<a id="schemaconfigparam"></a>
<a id="schema_ConfigParam"></a>
<a id="tocSconfigparam"></a>
<a id="tocsconfigparam"></a>

```json
"idpc-be"
```

User provided configuration object name

<h2 id="tocS_ConfigResponse">ConfigResponse</h2>
<!-- backwards compatibility -->
<a id="schemaconfigresponse"></a>
<a id="schema_ConfigResponse"></a>
<a id="tocSconfigresponse"></a>
<a id="tocsconfigresponse"></a>

```json
{
  "code": 2000,
  "message": "Success",
  "result": {
    "createdAt": "2016-01-21T17:14:49.971Z",
    "name": "woocommerce",
    "payload": "{\n  \"removeOrganisation\": false\n}\n",
    "updatedAt": "2016-01-21T17:14:49.971Z"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|true|none|none|
|message|string|true|none|none|
|result|[Config](#schemaconfig)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|code|2000|
|message|Success|

<h2 id="tocS_ConfigUpdateParam">ConfigUpdateParam</h2>
<!-- backwards compatibility -->
<a id="schemaconfigupdateparam"></a>
<a id="schema_ConfigUpdateParam"></a>
<a id="tocSconfigupdateparam"></a>
<a id="tocsconfigupdateparam"></a>

```json
{
  "payload": "{\n  \"removeOrganisation\": false\n}\n"
}
```

Config object update parameters

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|payload|string|false|none|A serialised payload of up to `4096` characters|

<h2 id="tocS_ConfigsResponse">ConfigsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaconfigsresponse"></a>
<a id="schema_ConfigsResponse"></a>
<a id="tocSconfigsresponse"></a>
<a id="tocsconfigsresponse"></a>

```json
{
  "code": 2000,
  "message": "Success",
  "result": {
    "configs": [
      {
        "createdAt": "2016-01-21T17:14:49.971Z",
        "name": "woocommerce",
        "payload": "{\n  \"removeOrganisation\": false\n}\n",
        "updatedAt": "2016-01-21T17:14:49.971Z"
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|true|none|none|
|message|string|true|none|none|
|result|object|true|none|List of configurations|

#### Enumerated Values

|Property|Value|
|---|---|
|code|2000|
|message|Success|

<h2 id="tocS_Context">Context</h2>
<!-- backwards compatibility -->
<a id="schemacontext"></a>
<a id="schema_Context"></a>
<a id="tocScontext"></a>
<a id="tocscontext"></a>

```json
"string"
```

Limits search results within a geographical boundary or country.

<h2 id="tocS_Country">Country</h2>
<!-- backwards compatibility -->
<a id="schemacountry"></a>
<a id="schema_Country"></a>
<a id="tocScountry"></a>
<a id="tocscountry"></a>

```json
"England"
```

  Full country names (ISO 3166)

<h2 id="tocS_CountryISO">CountryISO</h2>
<!-- backwards compatibility -->
<a id="schemacountryiso"></a>
<a id="schema_CountryISO"></a>
<a id="tocScountryiso"></a>
<a id="tocscountryiso"></a>

```json
"GBR"
```

  3 letter country code (ISO 3166-1)

<h2 id="tocS_CountryISO2">CountryISO2</h2>
<!-- backwards compatibility -->
<a id="schemacountryiso2"></a>
<a id="schema_CountryISO2"></a>
<a id="tocScountryiso2"></a>
<a id="tocscountryiso2"></a>

```json
"GB"
```

 2 letter country code (ISO 3166-1)

<h2 id="tocS_CountryIsoParam">CountryIsoParam</h2>
<!-- backwards compatibility -->
<a id="schemacountryisoparam"></a>
<a id="schema_CountryIsoParam"></a>
<a id="tocScountryisoparam"></a>
<a id="tocscountryisoparam"></a>

```json
"GBR"
```

Filter by country ISO code. Uses 3 letter country code (ISO 3166-1) standard.
Filter by multiple countries with a comma separated list. E.g. `GBR,IRL`

<h2 id="tocS_CountryParam">CountryParam</h2>
<!-- backwards compatibility -->
<a id="schemacountryparam"></a>
<a id="schema_CountryParam"></a>
<a id="tocScountryparam"></a>
<a id="tocscountryparam"></a>

```json
"England"
```

Filter by country. Possible values are England, Scotland, Wales, Northern Ireland, Jersey, Guernsey and Isle of Man.

<h2 id="tocS_Dataset">Dataset</h2>
<!-- backwards compatibility -->
<a id="schemadataset"></a>
<a id="schema_Dataset"></a>
<a id="tocSdataset"></a>
<a id="tocsdataset"></a>

```json
"paf"
```

Indicates the provenance of an address.

  - `paf` (GBR) Postcode Address File
  - `mr` (GBR) Multiple Residence File
  - `nyb` (GBR) Not Yet Built File
  - `pafa` (GBR) Alias File
  - `pafw` (GBR) Welsh File
  - `ecaf` (IRL) Eircode ECAF
  - `ecad` (IRL) Eircode ECAD
  - `usps` (USA) USPS Zip+4

<h2 id="tocS_Eastings">Eastings</h2>
<!-- backwards compatibility -->
<a id="schemaeastings"></a>
<a id="schema_Eastings"></a>
<a id="tocSeastings"></a>
<a id="tocseastings"></a>

```json
"string"
```

Eastings reference using the [Ordnance Survey National Grid reference system](https://en.wikipedia.org/wiki/Ordnance_Survey_National_Grid).

Northern Ireland Eastings uses the [Irish Grid Reference System](https://en.wikipedia.org/wiki/Irish_grid_reference_system).

Metres from origin. E.g. `550458`

Returns an empty string if no location data is available. Otherwise a number is returned.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|string|false|none|Empty string `""` if not available|
|*oneOf*|number|false|none|Metres offset east from origin|

<h2 id="tocS_EcadAddress">EcadAddress</h2>
<!-- backwards compatibility -->
<a id="schemaecadaddress"></a>
<a id="schema_EcadAddress"></a>
<a id="tocSecadaddress"></a>
<a id="tocsecadaddress"></a>

```json
{
  "address_reference": "string",
  "building_group": "Marrian Terrace",
  "building_name": "Rose Cottage",
  "building_number": 22,
  "country": "Ireland",
  "country_iso": "IRL",
  "country_iso_2": "IE",
  "dataset": "ecad",
  "department": "Accounts Department",
  "eircode": "A65 R2AF",
  "id": "paf_8387729",
  "language": "en",
  "latitude": "string",
  "line_1": "string",
  "line_2": "string",
  "line_3": "string",
  "line_4": "string",
  "line_5": "string",
  "line_6": "string",
  "line_7": "string",
  "line_8": "string",
  "line_9": "string",
  "longitude": "string",
  "organisation": "Oak Tree Limited",
  "post_county": "Cork",
  "primary_locality": "Cookstown Industrial Estate",
  "primary_thoroughfare": "Griffith Road",
  "secondary_locality": "Manorhamilton",
  "secondary_thoroughfare": "Navan Road",
  "sub_building_name": "Flat 1",
  "tertiary_locality": "Dublin 14",
  "address_point_id": "10098783",
  "address_type": "string",
  "building_address_type": "string",
  "building_group_address_type": "string",
  "building_group_id": "10098783",
  "building_id": "10098783",
  "building_type": "string",
  "building_use": "R",
  "ded_id": "string",
  "ecad_id": "17000000",
  "gaeltacht": true,
  "gaeltacht_id": "string",
  "holiday_home": "N",
  "local_authority": "string",
  "nace_category": "string",
  "nace_code": "string",
  "nua": true,
  "org_vacant": "Y",
  "organisation_id": "10098783",
  "post_county_id": "10098783",
  "post_town": "string",
  "post_town_id": "10098783",
  "postaim_presort_152": "string",
  "postaim_presort_61": "string",
  "primary_locality_address_type": "string",
  "primary_locality_id": "10098783",
  "primary_thoroughfare_id": "10098783",
  "publicity_post_zone": "string",
  "secondary_locality_address_type": "string",
  "secondary_locality_id": "10098783",
  "secondary_thoroughfare_id": "10098783",
  "small_area_id": "string",
  "townland_id": "string",
  "under_construction": "N",
  "vacant": "Y"
}
```

The ECAD contains additional data for each ECAF address.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address_reference|string|true|none|The address reference is the An Post GeoDirectory address reference identifier used by the Universal Service Provider.|
|building_group|string|true|none|A building group is a collection of buildings with a collective name, located on or near the same thoroughfare.|
|building_name|string|true|none|The name given to the building. Prepended by sub building, if any, when the sub building does not appear on a line to itself. The building name is omitted if it is the same as either the Organisation or Building Group.|
|building_number|string|true|none|A number associated with the whole building. The building number may have a numeric and an alphanumeric component, which are concatenated e.g. 2A, or alternatively will have a simple building number or a complex building number. The building number always relates to the whole building and not a sub-unit within it.<br>A complex building number may be one of the following:<br>  - Dual. Two number separated by '/' e.g. 63/64 = 63, 64<br>  - Sequence. An odd or even sequence of numbers with lower and upper bound separated by an underscore '_' e.g. `1_5` = 1,3,5 and `2_6` = 2,4,6 <br>  - Range. A range of consecutive numbers with lower and upper bound separated by a dash '-' e.g. `63-66` = 63, 64, 56, 66<br>The building number never appears on a line by itself and can prepend Building Group, Primary Thoroughfare or Primary Locality.|
|country|string|true|none|  Full country names (ISO 3166)<br>|
|country_iso|string|true|none|  3 letter country code (ISO 3166-1)<br>|
|country_iso_2|string|true|none| 2 letter country code (ISO 3166-1)<br>|
|dataset|string|true|none|Source of address|
|department|string|true|none|The department or division within an organisation. If the department element exists, then the organisation must also exist.|
|eircode|string|true|none|The seven character Eircode has an A65 F4E2 format. The Eircode is a mandatory address element. The last line of a Postal Address will contain the Eircode, displayed with a space. e.g. `A65 F4E2`.<br><br>The Eircode is always the last line of a Postal Address generated within the state, e.g. if an address has four lines then the Eircode will be on its own on Address Line 5. For inbound international mail the country name IRELAND should be appended as the last line of the Postal Address.|
|id|[ID](#schemaid)|true|none|Global unique internally generated identifier for an address|
|language|string|true|none|Language represented by 2 letter ISO Code (639-1)<br>|
|latitude|[Latitude](#schemalatitude)|true|none|The latitude of the postcode (WGS84/ETRS89).<br><br>Can be a positive or negative decimal. E.g. `51.5083983`.<br><br>Returns an empty string if no location data is available. |
|line_1|string|true|none|Address Line 1|
|line_2|string|true|none|Address Line 2|
|line_3|string|true|none|Address Line 3|
|line_4|string|true|none|Address Line 4|
|line_5|string|true|none|Address Line 5|
|line_6|string|true|none|Address Line 6|
|line_7|string|true|none|Address Line 7|
|line_8|string|true|none|Address Line 8|
|line_9|string|true|none|Address Line 9|
|longitude|[Longitude](#schemalongitude)|true|none|The longitude of the postcode (WGS84/ETRS89).<br><br>Can be a positive or negative decimal. E.g. -0.1283983<br><br>Returns an empty string if no location data is available. |
|organisation|string|true|none|Organisation name|
|post_county|string|true|none|One of the 26 Counties in the Republic of Ireland. These counties are sub-national divisions used for the purposes of administrative, geographical and political demarcation. Post County is the County associated with the Post Town, not the geographic county in which the building is located. The Post County is normally used as part of the Postal Address with some exceptions e.g. Dublin Postal Districts where the Post County is not used and some Post Towns (e.g. Tipperary, Kildare, etc.) that have the same name as the Post County.|
|primary_locality|string|true|none|First locality elements which can refer to areas, districts, industrial estates, towns, etc.<br><br>The primary locality refers to the specific place the address is.<br><br>In urban areas, the primary locality can be required to distinguish between two thoroughfares of the same name in the same district or town. Industrial estates with named thoroughfares are also held as localities. In rural areas the primary locality is generally a townland name.|
|primary_thoroughfare|string|true|none|The name of the thoroughfare on which premises are located. It may appear on a line by itself or be appended to either a sub building or building number.<br><br>Addresses with thoroughfares can sometimes have the thoroughfare excluded where a Building Group exists, such as a Retail Centre or Business Park, and the thoroughfare is not part of the Postal Address.|
|secondary_locality|string|true|none|Never present without a primary locality. The secondary locality has a wider geographic scope than the primary locality.<br><br>It is the secondary locality therefore which differentiates addresses with the same primary locality name within the same county.<br><br>Secondary localities are more likely to be required for rural addresses.<br><br>Second locality elements which can refer to areas, districts, industrial estates, towns, etc<br><br>The secondary locality helps identify where the primary locality is located.|
|secondary_thoroughfare|string|true|none|It is never present without a primary thoroughfare. The primary thoroughfare is dependent on the secondary thoroughfare and appears before the secondary thoroughfare in any address.<br><br>Secondary thoroughfare are generally used to assist locating a primary thoroughfare.|
|sub_building_name|string|true|none|The sub-building refers to an apartment, flat or unit within a building.|
|tertiary_locality|string|true|none|Also known as the Post Town.<br><br>The name of the post town associated with the premises for postal delivery purposes. This includes Dublin Postal Districts "Dublin 1" to "Dublin 24".<br><br>The post town is a significant element of the Postal Address, however it is not always populated in an address. The official post office guide, Eolaí an Phoist4, describes post towns in the following manner:<br><br>"A provincial postal address may include the name of a town or village several miles distant, with which the addressee has little or no connection, and, in some places, especially if this residence happens to be near a county boundary, the name of the neighbouring county instead of the county in which he actually resides. The explanation is that the main mail despatches have to be sent for more detailed sub division to certain centres known as POST TOWNS, chosen because of their accessibility and convenience."|
|address_point_id|string|true|none|Address Point ID|
|address_type|string|true|none|Addresses points can assume one of the following values:<br><br>- Residential Address Point. This type of address point has one residential addresses associated with it.<br>- Non-Residential Address Point. This type of address point has one or more non-residential address (business, club or other organisation) associated with it.<br>- Mixed Address Point. This is a special case where the residential and non residential addresses in the building are essentially the same address. The typical example is a farm house on an active farm. It is important to note that this is a special case. In general a building with both residential and non-residential addresses (e.g. an apartment over a shop) will receive two address points, one commercial and one residential, and hence two Eircodes.<br><br>Buildings can contain multiple address points of type Residential and/or Non-Residential.|
|building_address_type|string|true|none|The building type can assume one of the following values:<br><br>- Single Occupancy Residential Building. This type of building contains one residential address.<br>- Multi Occupancy Residential Building. This type of building contains multiple residential addresses.<br>- Single Occupancy Non-Residential Building. This type of building contains one non-residential address (business, club or other organisation).<br>- Multi Occupancy Non-Residential Building. This type of building contains multiple non-residential addresses (business, club or other organisation).<br>- Multi Occupancy Mixed Use Building. This type of building contains multiple residential and non- residential addresses.<br><br>Buildings can also have a more specific address types such as a Hospital, School, Shopping Centre, etc.|
|building_group_address_type|string|true|none|The building group type can be:<br><br>- Residential Building Group. This type of building group contains buildings with residential addresses only.<br>- Non-Residential Building Group This type of building group contains buildings with non-residential addresses (business, club or other organisation) only.<br>- Mixed Building Group. This type of building group contains buildings with residential and non-residential addresses. Can also have a more specific address type such as a Hospital, School, Shopping Centre, etc.<br><br>Building groups can also have a more specific address type such as a Hospital, School, Shopping Centre, etc.|
|building_group_id|string|true|none|Building Group ID|
|building_id|string|true|none|Building ID|
|building_type|string|true|none|Describes the type of building, e.g. detached, semi-detached, bungalow.|
|building_use|string|true|none|Can be one of:<br><br>- `R` Residential <br>- `C` Commercial<br>- `B` Both <br>- `U` Unknown|
|dataset|string|true|none|none|
|ded_id|string|true|none|Unique Identifier for Electoral Divisions 2017 data.<br><br>Note that this field is subject to breaking changes if a new generation of government data IDs is released. Currently this uses 2017 IDs. Contact us to be notified ahead of his change.|
|ecad_id|string|false|none|Unique 10 digit ECAD ID|
|gaeltacht|boolean|true|none|Gaeltact refers to a district where the Irish government recognises that the Irish language is the predominant language.<br><br>Returns `true` if address is in a Gaeltacht area and `false` if not.|
|gaeltacht_id|string|true|none|Unique Identifier for the 7 Gaeltacht areas 2017 data.<br><br>Note that this field is subject to breaking changes if a new generation of government data IDs is released. Currently this uses 2017 IDs. Contact us to be notified ahead of his change.|
|holiday_home|string|true|none|A Yes/No field, indicating whether or not the building is a holiday home.|
|local_authority|string|true|none|Name of local authority|
|nace_category|string|true|none|Name of the NACE Category|
|nace_code|string|true|none|The NACE Code for the Category.|
|nua|boolean|true|none|NUA means "non-unique address".<br><br>The NUA field contains `true` when the address is a non-unique address, and `false` when it is a unique address.<br><br>Ireland has a very high level of non-unique addresses (NUA), i.e. the address does not contain a unique building number or name. Approximately 35% of all Irish addresses are non-unique which equates to 600,000 addresses.<br><br>The typical example of NUA addressing is where every address in a townland is the same. The way that post is delivered is by local knowledge of postal delivery personnel of which addressee lives in which house.<br><br>N.B. For a NUA address, it is impossible to match to a unique record in the ECAD and assign an Eircode.|
|org_vacant|string|true|none|A Yes/No field, indicating whether the organisation is vacant.|
|organisation_id|string|true|none|Organisation ID|
|post_county_id|string|true|none|Post County ID|
|post_town|string|true|none|The post town is a significant element of the Postal Address, however it is not always populated in an address. The official post office guide, Eolaí an Phoist1, describes post towns in the following manner:<br><br>"A provincial postal address may include the name of a town or village several miles distant, with which the addressee has little or no connection, and, in some places, especially if this residence happens to be near a county boundary, the name of the neighbouring county instead of the county in which he actually resides. The explanation is that the main mail despatches have to be sent for more detailed sub division to certain centres known as post towns, chosen because of their accessibility and convenience."|
|post_town_id|string|true|none|Post Town ID|
|postaim_presort_152|string|true|none|An Post sorting information.|
|postaim_presort_61|string|true|none|An Post sorting information.|
|primary_locality_address_type|string|true|none|The locality type can be:<br>  - Rural Locality. This is generally a townland.<br>  - Industrial Estate. Industrial Estate, Industrial Park, Business Campus, etc.<br>  - Shopping District. Shopping Centre.<br>  - Housing Estate. Residential Housing Estate.<br>  - Village. Based on Census 2011 population < 1,500.<br>  - Town. Based on Census 2011 population > 1,500.<br>  - Urban Area. Wholly within a village/town/city e.g. Rathmines.<br>  - Suburban Locality. This is an area that is both rural and urban, as it is both a townland, and also an area name applied to houses in a town, as the town has extended partially into the townland.<br><br>Where the locality is also the post town, the type can be:<br>  - Village. Based on Census 2011 population < 1,500<br>  - Town. Based on Census 2011 population > 1,500<br>  - Postal District. Dublin 1 to 24<br>  - City. Dublin, Cork, Limerick, Galway or Waterford|
|primary_locality_id|string|true|none|Primary Locality ID|
|primary_thoroughfare_id|string|true|none|Primary Thoroughfare ID|
|publicity_post_zone|string|true|none|An Post publicity post zone information.|
|secondary_locality_address_type|string|true|none|The locality type can be:<br>  - Rural Locality. This is generally a townland.<br>  - Industrial Estate. Industrial Estate, Industrial Park, Business Campus, etc.<br>  - Shopping District. Shopping Centre.<br>  - Housing Estate. Residential Housing Estate.<br>  - Village. Based on Census 2011 population < 1,500.<br>  - Town. Based on Census 2011 population > 1,500.<br>  - Urban Area. Wholly within a village/town/city e.g. Rathmines.<br>  - Suburban Locality. This is an area that is both rural and urban, as it is both a townland, and also an area name applied to houses in a town, as the town has extended partially into the townland.<br><br>Where the locality is also the post town, the type can be:<br>  - Village. Based on Census 2011 population < 1,500<br>  - Town. Based on Census 2011 population > 1,500<br>  - Postal District. Dublin 1 to 24<br>  - City. Dublin, Cork, Limerick, Galway or Waterford|
|secondary_locality_id|string|true|none|Secondary Locality ID|
|secondary_thoroughfare_id|string|true|none|Secondary Thoroughfare ID|
|small_area_id|string|true|none|Unique Identifier for the Small Area 2017 data.<br><br>Note that this field is subject to breaking changes if a new generation of government data IDs is released. Currently this uses 2017 IDs. Contact us to be notified ahead of his change.|
|townland_id|string|true|none|Unique Identifier for townland 2017 data.<br><br>Note that this field is subject to breaking changes if a new generation of government data IDs is released. Currently this uses 2017 IDs. Contact us to be notified ahead of his change.|
|under_construction|string|true|none|A Yes/No field, indicating whether or not the building is under construction.|
|vacant|string|true|none|A Yes/No field, indicating whether the building is vacant.|

#### Enumerated Values

|Property|Value|
|---|---|
|country|Ireland|
|country_iso|IRL|
|country_iso_2|IE|
|language|en|
|language|ga|
|building_use|R|
|building_use|C|
|building_use|B|
|building_use|U|
|dataset|ecad|
|holiday_home|N|
|holiday_home|Y|
|holiday_home|""|
|org_vacant|Y|
|org_vacant|N|
|org_vacant|""|
|under_construction|N|
|under_construction|Y|
|under_construction|""|
|vacant|Y|
|vacant|N|
|vacant|""|

<h2 id="tocS_EcafAddress">EcafAddress</h2>
<!-- backwards compatibility -->
<a id="schemaecafaddress"></a>
<a id="schema_EcafAddress"></a>
<a id="tocSecafaddress"></a>
<a id="tocsecafaddress"></a>

```json
{
  "address_reference": "string",
  "building_group": "Marrian Terrace",
  "building_name": "Rose Cottage",
  "building_number": 22,
  "country": "Ireland",
  "country_iso": "IRL",
  "country_iso_2": "IE",
  "dataset": "ecaf",
  "department": "Accounts Department",
  "eircode": "A65 R2AF",
  "id": "paf_8387729",
  "language": "en",
  "latitude": "string",
  "line_1": "string",
  "line_2": "string",
  "line_3": "string",
  "line_4": "string",
  "line_5": "string",
  "line_6": "string",
  "line_7": "string",
  "line_8": "string",
  "line_9": "string",
  "longitude": "string",
  "organisation": "Oak Tree Limited",
  "post_county": "Cork",
  "primary_locality": "Cookstown Industrial Estate",
  "primary_thoroughfare": "Griffith Road",
  "secondary_locality": "Manorhamilton",
  "secondary_thoroughfare": "Navan Road",
  "sub_building_name": "Flat 1",
  "tertiary_locality": "Dublin 14",
  "ecaf_id": "string"
}
```

ECAF is the Eircode Address File which contains one record for each Postal Address. English language and Irish language versions are available. It is distributed as a flat file, details of data provision and updates are provided in section 2.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address_reference|string|true|none|The address reference is the An Post GeoDirectory address reference identifier used by the Universal Service Provider.|
|building_group|string|true|none|A building group is a collection of buildings with a collective name, located on or near the same thoroughfare.|
|building_name|string|true|none|The name given to the building. Prepended by sub building, if any, when the sub building does not appear on a line to itself. The building name is omitted if it is the same as either the Organisation or Building Group.|
|building_number|string|true|none|A number associated with the whole building. The building number may have a numeric and an alphanumeric component, which are concatenated e.g. 2A, or alternatively will have a simple building number or a complex building number. The building number always relates to the whole building and not a sub-unit within it.<br>A complex building number may be one of the following:<br>  - Dual. Two number separated by '/' e.g. 63/64 = 63, 64<br>  - Sequence. An odd or even sequence of numbers with lower and upper bound separated by an underscore '_' e.g. `1_5` = 1,3,5 and `2_6` = 2,4,6 <br>  - Range. A range of consecutive numbers with lower and upper bound separated by a dash '-' e.g. `63-66` = 63, 64, 56, 66<br>The building number never appears on a line by itself and can prepend Building Group, Primary Thoroughfare or Primary Locality.|
|country|string|true|none|  Full country names (ISO 3166)<br>|
|country_iso|string|true|none|  3 letter country code (ISO 3166-1)<br>|
|country_iso_2|string|true|none| 2 letter country code (ISO 3166-1)<br>|
|dataset|string|true|none|Source of address|
|department|string|true|none|The department or division within an organisation. If the department element exists, then the organisation must also exist.|
|eircode|string|true|none|The seven character Eircode has an A65 F4E2 format. The Eircode is a mandatory address element. The last line of a Postal Address will contain the Eircode, displayed with a space. e.g. `A65 F4E2`.<br><br>The Eircode is always the last line of a Postal Address generated within the state, e.g. if an address has four lines then the Eircode will be on its own on Address Line 5. For inbound international mail the country name IRELAND should be appended as the last line of the Postal Address.|
|id|[ID](#schemaid)|true|none|Global unique internally generated identifier for an address|
|language|string|true|none|Language represented by 2 letter ISO Code (639-1)<br>|
|latitude|[Latitude](#schemalatitude)|true|none|The latitude of the postcode (WGS84/ETRS89).<br><br>Can be a positive or negative decimal. E.g. `51.5083983`.<br><br>Returns an empty string if no location data is available. |
|line_1|string|true|none|Address Line 1|
|line_2|string|true|none|Address Line 2|
|line_3|string|true|none|Address Line 3|
|line_4|string|true|none|Address Line 4|
|line_5|string|true|none|Address Line 5|
|line_6|string|true|none|Address Line 6|
|line_7|string|true|none|Address Line 7|
|line_8|string|true|none|Address Line 8|
|line_9|string|true|none|Address Line 9|
|longitude|[Longitude](#schemalongitude)|true|none|The longitude of the postcode (WGS84/ETRS89).<br><br>Can be a positive or negative decimal. E.g. -0.1283983<br><br>Returns an empty string if no location data is available. |
|organisation|string|true|none|Organisation name|
|post_county|string|true|none|One of the 26 Counties in the Republic of Ireland. These counties are sub-national divisions used for the purposes of administrative, geographical and political demarcation. Post County is the County associated with the Post Town, not the geographic county in which the building is located. The Post County is normally used as part of the Postal Address with some exceptions e.g. Dublin Postal Districts where the Post County is not used and some Post Towns (e.g. Tipperary, Kildare, etc.) that have the same name as the Post County.|
|primary_locality|string|true|none|First locality elements which can refer to areas, districts, industrial estates, towns, etc.<br><br>The primary locality refers to the specific place the address is.<br><br>In urban areas, the primary locality can be required to distinguish between two thoroughfares of the same name in the same district or town. Industrial estates with named thoroughfares are also held as localities. In rural areas the primary locality is generally a townland name.|
|primary_thoroughfare|string|true|none|The name of the thoroughfare on which premises are located. It may appear on a line by itself or be appended to either a sub building or building number.<br><br>Addresses with thoroughfares can sometimes have the thoroughfare excluded where a Building Group exists, such as a Retail Centre or Business Park, and the thoroughfare is not part of the Postal Address.|
|secondary_locality|string|true|none|Never present without a primary locality. The secondary locality has a wider geographic scope than the primary locality.<br><br>It is the secondary locality therefore which differentiates addresses with the same primary locality name within the same county.<br><br>Secondary localities are more likely to be required for rural addresses.<br><br>Second locality elements which can refer to areas, districts, industrial estates, towns, etc<br><br>The secondary locality helps identify where the primary locality is located.|
|secondary_thoroughfare|string|true|none|It is never present without a primary thoroughfare. The primary thoroughfare is dependent on the secondary thoroughfare and appears before the secondary thoroughfare in any address.<br><br>Secondary thoroughfare are generally used to assist locating a primary thoroughfare.|
|sub_building_name|string|true|none|The sub-building refers to an apartment, flat or unit within a building.|
|tertiary_locality|string|true|none|Also known as the Post Town.<br><br>The name of the post town associated with the premises for postal delivery purposes. This includes Dublin Postal Districts "Dublin 1" to "Dublin 24".<br><br>The post town is a significant element of the Postal Address, however it is not always populated in an address. The official post office guide, Eolaí an Phoist4, describes post towns in the following manner:<br><br>"A provincial postal address may include the name of a town or village several miles distant, with which the addressee has little or no connection, and, in some places, especially if this residence happens to be near a county boundary, the name of the neighbouring county instead of the county in which he actually resides. The explanation is that the main mail despatches have to be sent for more detailed sub division to certain centres known as POST TOWNS, chosen because of their accessibility and convenience."|
|dataset|string|true|none|none|
|ecaf_id|string|true|none|The unique identifier in the ECAF is the `ecaf_id`. This unique identifier allows each address in the ECAF to be uniquely identified. It can also be used as index once the data has been imported into a relational database. This is a numeric field that can store values from 0 to 2,147,483,647. It is represented as a number up to 10 digits long. All other fields in ECAF are alphanumeric.|

#### Enumerated Values

|Property|Value|
|---|---|
|country|Ireland|
|country_iso|IRL|
|country_iso_2|IE|
|language|en|
|language|ga|
|dataset|ecaf|

<h2 id="tocS_EircBase">EircBase</h2>
<!-- backwards compatibility -->
<a id="schemaeircbase"></a>
<a id="schema_EircBase"></a>
<a id="tocSeircbase"></a>
<a id="tocseircbase"></a>

```json
{
  "address_reference": "string",
  "building_group": "Marrian Terrace",
  "building_name": "Rose Cottage",
  "building_number": 22,
  "country": "Ireland",
  "country_iso": "IRL",
  "country_iso_2": "IE",
  "dataset": "string",
  "department": "Accounts Department",
  "eircode": "A65 R2AF",
  "id": "paf_8387729",
  "language": "en",
  "latitude": "string",
  "line_1": "string",
  "line_2": "string",
  "line_3": "string",
  "line_4": "string",
  "line_5": "string",
  "line_6": "string",
  "line_7": "string",
  "line_8": "string",
  "line_9": "string",
  "longitude": "string",
  "organisation": "Oak Tree Limited",
  "post_county": "Cork",
  "primary_locality": "Cookstown Industrial Estate",
  "primary_thoroughfare": "Griffith Road",
  "secondary_locality": "Manorhamilton",
  "secondary_thoroughfare": "Navan Road",
  "sub_building_name": "Flat 1",
  "tertiary_locality": "Dublin 14"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address_reference|string|true|none|The address reference is the An Post GeoDirectory address reference identifier used by the Universal Service Provider.|
|building_group|string|true|none|A building group is a collection of buildings with a collective name, located on or near the same thoroughfare.|
|building_name|string|true|none|The name given to the building. Prepended by sub building, if any, when the sub building does not appear on a line to itself. The building name is omitted if it is the same as either the Organisation or Building Group.|
|building_number|string|true|none|A number associated with the whole building. The building number may have a numeric and an alphanumeric component, which are concatenated e.g. 2A, or alternatively will have a simple building number or a complex building number. The building number always relates to the whole building and not a sub-unit within it.<br>A complex building number may be one of the following:<br>  - Dual. Two number separated by '/' e.g. 63/64 = 63, 64<br>  - Sequence. An odd or even sequence of numbers with lower and upper bound separated by an underscore '_' e.g. `1_5` = 1,3,5 and `2_6` = 2,4,6 <br>  - Range. A range of consecutive numbers with lower and upper bound separated by a dash '-' e.g. `63-66` = 63, 64, 56, 66<br>The building number never appears on a line by itself and can prepend Building Group, Primary Thoroughfare or Primary Locality.|
|country|string|true|none|  Full country names (ISO 3166)<br>|
|country_iso|string|true|none|  3 letter country code (ISO 3166-1)<br>|
|country_iso_2|string|true|none| 2 letter country code (ISO 3166-1)<br>|
|dataset|string|true|none|Source of address|
|department|string|true|none|The department or division within an organisation. If the department element exists, then the organisation must also exist.|
|eircode|string|true|none|The seven character Eircode has an A65 F4E2 format. The Eircode is a mandatory address element. The last line of a Postal Address will contain the Eircode, displayed with a space. e.g. `A65 F4E2`.<br><br>The Eircode is always the last line of a Postal Address generated within the state, e.g. if an address has four lines then the Eircode will be on its own on Address Line 5. For inbound international mail the country name IRELAND should be appended as the last line of the Postal Address.|
|id|[ID](#schemaid)|true|none|Global unique internally generated identifier for an address|
|language|string|true|none|Language represented by 2 letter ISO Code (639-1)<br>|
|latitude|[Latitude](#schemalatitude)|true|none|The latitude of the postcode (WGS84/ETRS89).<br><br>Can be a positive or negative decimal. E.g. `51.5083983`.<br><br>Returns an empty string if no location data is available. |
|line_1|string|true|none|Address Line 1|
|line_2|string|true|none|Address Line 2|
|line_3|string|true|none|Address Line 3|
|line_4|string|true|none|Address Line 4|
|line_5|string|true|none|Address Line 5|
|line_6|string|true|none|Address Line 6|
|line_7|string|true|none|Address Line 7|
|line_8|string|true|none|Address Line 8|
|line_9|string|true|none|Address Line 9|
|longitude|[Longitude](#schemalongitude)|true|none|The longitude of the postcode (WGS84/ETRS89).<br><br>Can be a positive or negative decimal. E.g. -0.1283983<br><br>Returns an empty string if no location data is available. |
|organisation|string|true|none|Organisation name|
|post_county|string|true|none|One of the 26 Counties in the Republic of Ireland. These counties are sub-national divisions used for the purposes of administrative, geographical and political demarcation. Post County is the County associated with the Post Town, not the geographic county in which the building is located. The Post County is normally used as part of the Postal Address with some exceptions e.g. Dublin Postal Districts where the Post County is not used and some Post Towns (e.g. Tipperary, Kildare, etc.) that have the same name as the Post County.|
|primary_locality|string|true|none|First locality elements which can refer to areas, districts, industrial estates, towns, etc.<br><br>The primary locality refers to the specific place the address is.<br><br>In urban areas, the primary locality can be required to distinguish between two thoroughfares of the same name in the same district or town. Industrial estates with named thoroughfares are also held as localities. In rural areas the primary locality is generally a townland name.|
|primary_thoroughfare|string|true|none|The name of the thoroughfare on which premises are located. It may appear on a line by itself or be appended to either a sub building or building number.<br><br>Addresses with thoroughfares can sometimes have the thoroughfare excluded where a Building Group exists, such as a Retail Centre or Business Park, and the thoroughfare is not part of the Postal Address.|
|secondary_locality|string|true|none|Never present without a primary locality. The secondary locality has a wider geographic scope than the primary locality.<br><br>It is the secondary locality therefore which differentiates addresses with the same primary locality name within the same county.<br><br>Secondary localities are more likely to be required for rural addresses.<br><br>Second locality elements which can refer to areas, districts, industrial estates, towns, etc<br><br>The secondary locality helps identify where the primary locality is located.|
|secondary_thoroughfare|string|true|none|It is never present without a primary thoroughfare. The primary thoroughfare is dependent on the secondary thoroughfare and appears before the secondary thoroughfare in any address.<br><br>Secondary thoroughfare are generally used to assist locating a primary thoroughfare.|
|sub_building_name|string|true|none|The sub-building refers to an apartment, flat or unit within a building.|
|tertiary_locality|string|true|none|Also known as the Post Town.<br><br>The name of the post town associated with the premises for postal delivery purposes. This includes Dublin Postal Districts "Dublin 1" to "Dublin 24".<br><br>The post town is a significant element of the Postal Address, however it is not always populated in an address. The official post office guide, Eolaí an Phoist4, describes post towns in the following manner:<br><br>"A provincial postal address may include the name of a town or village several miles distant, with which the addressee has little or no connection, and, in some places, especially if this residence happens to be near a county boundary, the name of the neighbouring county instead of the county in which he actually resides. The explanation is that the main mail despatches have to be sent for more detailed sub division to certain centres known as POST TOWNS, chosen because of their accessibility and convenience."|

#### Enumerated Values

|Property|Value|
|---|---|
|country|Ireland|
|country_iso|IRL|
|country_iso_2|IE|
|language|en|
|language|ga|

<h2 id="tocS_Email">Email</h2>
<!-- backwards compatibility -->
<a id="schemaemail"></a>
<a id="schema_Email"></a>
<a id="tocSemail"></a>
<a id="tocsemail"></a>

```json
{
  "catchall": true,
  "deliverable": true,
  "disposable": true,
  "free": true,
  "result": "deliverable",
  "role": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|catchall|boolean|true|none|Returns `true` if this domain accepts all emails regardless of username|
|deliverable|boolean|true|none|Returns `true` if the email can be delivered|
|disposable|boolean|true|none|Returns `true` if email comes from a disposable email service like temp-mail|
|free|boolean|true|none|Returns `true` if the email originates from a free service like Outlook or Gmail.|
|result|string|true|none|none|
|role|boolean|true|none|Returns `true` if email address represents an organisational role like `admin`, `support`, `postmaster` etc|

#### Enumerated Values

|Property|Value|
|---|---|
|result|deliverable|
|result|not_deliverable|

<h2 id="tocS_EmailResponse">EmailResponse</h2>
<!-- backwards compatibility -->
<a id="schemaemailresponse"></a>
<a id="schema_EmailResponse"></a>
<a id="tocSemailresponse"></a>
<a id="tocsemailresponse"></a>

```json
{
  "code": 2000,
  "message": "Success",
  "result": {
    "catchall": true,
    "deliverable": true,
    "disposable": true,
    "free": true,
    "result": "deliverable",
    "role": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|true|none|none|
|message|string|true|none|none|
|result|[Email](#schemaemail) \| [UnknownEmail](#schemaunknownemail)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|code|2000|
|message|Success|

<h2 id="tocS_EndParam">EndParam</h2>
<!-- backwards compatibility -->
<a id="schemaendparam"></a>
<a id="schema_EndParam"></a>
<a id="tocSendparam"></a>
<a id="tocsendparam"></a>

```json
1418556477882
```

An start date/time in the form of a UNIX Timestamp in milliseconds, e.g.  `1418556477882`.

<h2 id="tocS_ErrorResponse">ErrorResponse</h2>
<!-- backwards compatibility -->
<a id="schemaerrorresponse"></a>
<a id="schema_ErrorResponse"></a>
<a id="tocSerrorresponse"></a>
<a id="tocserrorresponse"></a>

```json
{
  "code": 0,
  "message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|true|none|API Response Code. Non `2xxx` code indicates a failure. This code will provide a more specific reason when a failure occurs and facilitates debugging.|
|message|string|true|none|Human readable error message supplied with every error response.|

<h2 id="tocS_FilterParam">FilterParam</h2>
<!-- backwards compatibility -->
<a id="schemafilterparam"></a>
<a id="schema_FilterParam"></a>
<a id="tocSfilterparam"></a>
<a id="tocsfilterparam"></a>

```json
"line_1,line_2,line_3"
```

Comma separated whitelist of address elements to return. 

E.g. `filter=line_1,line_2,line_3` returns only `line_1`, `line_2` and `line_3` address elements in your response

<h2 id="tocS_GbrCleanseMatch">GbrCleanseMatch</h2>
<!-- backwards compatibility -->
<a id="schemagbrcleansematch"></a>
<a id="schema_GbrCleanseMatch"></a>
<a id="tocSgbrcleansematch"></a>
<a id="tocsgbrcleansematch"></a>

```json
{
  "confidence": 0,
  "count": 0,
  "fit": 0,
  "locality_match": "FULL",
  "match": {
    "administrative_county": "",
    "building_name": "",
    "building_number": "10",
    "country": "England",
    "country_iso": "GBR",
    "country_iso_2": "GB",
    "county": "London",
    "county_code": "",
    "dataset": "paf",
    "delivery_point_suffix": "1A",
    "department_name": "",
    "dependant_locality": "",
    "dependant_thoroughfare": "",
    "district": "Westminster",
    "double_dependant_locality": "",
    "eastings": "string",
    "id": "paf_8387729",
    "language": "en",
    "latitude": "string",
    "line_1": "Prime Minister &amp; First Lord of Treasury",
    "line_2": "10 Downing Street",
    "line_3": "",
    "longitude": "string",
    "northings": "string",
    "organisation_name": "Prime Minister &amp; First Lord Of The Treasury",
    "po_box": "100",
    "post_town": "London",
    "postal_county": "London",
    "postcode": "SW1A 2AA",
    "postcode_inward": "2AA",
    "postcode_outward": "SW1A",
    "postcode_type": "S",
    "premise": "10",
    "su_organisation_indicator": "Y",
    "sub_building_name": "Flat 1",
    "thoroughfare": "Downing Street",
    "traditional_county": "Greater London",
    "udprn": 23747771,
    "umprn": "string",
    "uprn": "string",
    "ward": "St. James'"
  },
  "organisation_match": "FULL",
  "post_town_match": "FULL",
  "postcode_match": "FULL",
  "premise_match": "FULL",
  "query": "string",
  "thoroughfare_match": "FULL"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|confidence|number|true|none|A confidence score represented as number between 1 and 0. 1 indicates a full match. 0 indicates no complete matching elements.<br>|
|count|number|true|none|The number of addresses we matched to the input. We return the closest match by default.<br>|
|fit|number|true|none|A score represented as number between 1 and 0. Fit compares the address elements present in your query against the matching address elements. It does not incorporate elements you have not presented in the score. A partial address (e.g. 12 Pye Green Road) will have a fit of 1 even though it is missing post town and postcode. Its confidence score will be less than 1 however because it is missing some crucial elements.<br>|
|locality_match|string|true|none|Match indicator for the locality|
|match|[PafAddress](#schemapafaddress) \| [MrAddress](#schemamraddress) \| [NybAddress](#schemanybaddress) \| [PafAliasAddress](#schemapafaliasaddress) \| [WelshPafAddress](#schemawelshpafaddress)|true|none|Nearest matching address|
|organisation_match|string|true|none|Match indicator for the organisation|
|post_town_match|string|true|none|Match indicator for the post_town|
|postcode_match|string|true|none|Match indicator for the postcode|
|premise_match|string|true|none|Match indicator for the premise|
|query|string|true|none|Originally submitted query|
|thoroughfare_match|string|true|none|Match indicator for the street|

#### Enumerated Values

|Property|Value|
|---|---|
|locality_match|FULL|
|locality_match|PARTIAL|
|locality_match|INCORRECT|
|locality_match|MISSING|
|locality_match|NA|
|organisation_match|FULL|
|organisation_match|PARTIAL|
|organisation_match|INCORRECT|
|organisation_match|MISSING|
|organisation_match|NA|
|post_town_match|FULL|
|post_town_match|PARTIAL|
|post_town_match|INCORRECT|
|post_town_match|MISSING|
|post_town_match|NA|
|postcode_match|FULL|
|postcode_match|PARTIAL|
|postcode_match|INCORRECT|
|postcode_match|MISSING|
|postcode_match|NA|
|premise_match|FULL|
|premise_match|PARTIAL|
|premise_match|INCORRECT|
|premise_match|MISSING|
|premise_match|NA|
|thoroughfare_match|FULL|
|thoroughfare_match|PARTIAL|
|thoroughfare_match|INCORRECT|
|thoroughfare_match|MISSING|
|thoroughfare_match|NA|

<h2 id="tocS_GbrCleanseNoMatch">GbrCleanseNoMatch</h2>
<!-- backwards compatibility -->
<a id="schemagbrcleansenomatch"></a>
<a id="schema_GbrCleanseNoMatch"></a>
<a id="tocSgbrcleansenomatch"></a>
<a id="tocsgbrcleansenomatch"></a>

```json
{
  "confidence": 0,
  "count": 0,
  "fit": 0,
  "locality_match": "NO_MATCH",
  "match": null,
  "organisation_match": "NO_MATCH",
  "post_town_match": "NO_MATCH",
  "postcode_match": "NO_MATCH",
  "premise_match": "NO_MATCH",
  "query": "string",
  "thoroughfare_match": "NO_MATCH"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|confidence|number(float)|true|none|none|
|count|number|true|none|none|
|fit|number(float)|true|none|none|
|locality_match|string|true|none|none|
|match|object \| null|true|none|Nearest matching address|
|organisation_match|string|true|none|none|
|post_town_match|string|true|none|none|
|postcode_match|string|true|none|none|
|premise_match|string|true|none|none|
|query|string|true|none|Originally submitted query|
|thoroughfare_match|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|confidence|0|
|count|0|
|fit|0|
|locality_match|NO_MATCH|
|match|null|
|organisation_match|NO_MATCH|
|post_town_match|NO_MATCH|
|postcode_match|NO_MATCH|
|premise_match|NO_MATCH|
|thoroughfare_match|NO_MATCH|

<h2 id="tocS_GbrGlobalAddress">GbrGlobalAddress</h2>
<!-- backwards compatibility -->
<a id="schemagbrglobaladdress"></a>
<a id="schema_GbrGlobalAddress"></a>
<a id="tocSgbrglobaladdress"></a>
<a id="tocsgbrglobaladdress"></a>

```json
{
  "administrative_county": "",
  "building_name": "",
  "building_number": "",
  "country": "England",
  "country_iso": "GBR",
  "country_iso_2": "GB",
  "county": "Georgia",
  "county_code": "GA",
  "dataset": "paf",
  "delivery_point_suffix": "",
  "department_name": "",
  "dependant_locality": "",
  "dependant_thoroughfare": "",
  "district": "",
  "double_dependant_locality": "",
  "eastings": "",
  "id": "paf_8387729",
  "language": "en",
  "latitude": "string",
  "line_1": "10 Georgia Ave",
  "line_2": "",
  "line_3": "",
  "longitude": "string",
  "native": {
    "address_reference": "string",
    "building_group": "Marrian Terrace",
    "building_name": "Rose Cottage",
    "building_number": 22,
    "country": "Ireland",
    "country_iso": "IRL",
    "country_iso_2": "IE",
    "dataset": "ecad",
    "department": "Accounts Department",
    "eircode": "A65 R2AF",
    "id": "paf_8387729",
    "language": "en",
    "latitude": "string",
    "line_1": "string",
    "line_2": "string",
    "line_3": "string",
    "line_4": "string",
    "line_5": "string",
    "line_6": "string",
    "line_7": "string",
    "line_8": "string",
    "line_9": "string",
    "longitude": "string",
    "organisation": "Oak Tree Limited",
    "post_county": "Cork",
    "primary_locality": "Cookstown Industrial Estate",
    "primary_thoroughfare": "Griffith Road",
    "secondary_locality": "Manorhamilton",
    "secondary_thoroughfare": "Navan Road",
    "sub_building_name": "Flat 1",
    "tertiary_locality": "Dublin 14",
    "address_point_id": "10098783",
    "address_type": "string",
    "building_address_type": "string",
    "building_group_address_type": "string",
    "building_group_id": "10098783",
    "building_id": "10098783",
    "building_type": "string",
    "building_use": "R",
    "ded_id": "string",
    "ecad_id": "17000000",
    "gaeltacht": true,
    "gaeltacht_id": "string",
    "holiday_home": "N",
    "local_authority": "string",
    "nace_category": "string",
    "nace_code": "string",
    "nua": true,
    "org_vacant": "Y",
    "organisation_id": "10098783",
    "post_county_id": "10098783",
    "post_town": "string",
    "post_town_id": "10098783",
    "postaim_presort_152": "string",
    "postaim_presort_61": "string",
    "primary_locality_address_type": "string",
    "primary_locality_id": "10098783",
    "primary_thoroughfare_id": "10098783",
    "publicity_post_zone": "string",
    "secondary_locality_address_type": "string",
    "secondary_locality_id": "10098783",
    "secondary_thoroughfare_id": "10098783",
    "small_area_id": "string",
    "townland_id": "string",
    "under_construction": "N",
    "vacant": "Y"
  },
  "northings": "",
  "organisation_name": "",
  "po_box": "",
  "post_town": "Commerce",
  "postal_county": "",
  "postcode": "30529-2320",
  "postcode_inward": "",
  "postcode_outward": "",
  "postcode_type": "",
  "premise": "",
  "su_organisation_indicator": "",
  "sub_building_name": "",
  "thoroughfare": "",
  "traditional_county": "",
  "udprn": "string",
  "umprn": "",
  "uprn": "",
  "ward": ""
}
```

Global (non-UK) address in the UK address format

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|administrative_county|string|true|none|Not available for non-UK addresses|
|building_name|string|true|none|Not available for non-UK addresses|
|building_number|string|true|none|Not available for non-UK addresses|
|country|[Country](#schemacountry)|true|none|  Full country names (ISO 3166)<br>|
|country_iso|[CountryISO](#schemacountryiso)|true|none|  3 letter country code (ISO 3166-1)<br>|
|country_iso_2|[CountryISO2](#schemacountryiso2)|true|none| 2 letter country code (ISO 3166-1)<br>|
|county|string|true|none|State or county name|
|county_code|string|true|none|Code abbreviation for state or county used in some countries.|
|dataset|[Dataset](#schemadataset)|true|none|Indicates the provenance of an address.<br><br>  - `paf` (GBR) Postcode Address File<br>  - `mr` (GBR) Multiple Residence File<br>  - `nyb` (GBR) Not Yet Built File<br>  - `pafa` (GBR) Alias File<br>  - `pafw` (GBR) Welsh File<br>  - `ecaf` (IRL) Eircode ECAF<br>  - `ecad` (IRL) Eircode ECAD<br>  - `usps` (USA) USPS Zip+4|
|delivery_point_suffix|string|true|none|Not available for non-UK addresses|
|department_name|string|true|none|Not available for non-UK addresses|
|dependant_locality|string|true|none|Not available for non-UK addresses|
|dependant_thoroughfare|string|true|none|Not available for non-UK addresses|
|district|string|true|none|Not available for non-UK addresses|
|double_dependant_locality|string|true|none|Not available for non-UK addresses|
|eastings|string|true|none|Not available for non-UK addresses|
|id|[ID](#schemaid)|true|none|Global unique internally generated identifier for an address|
|language|[Language](#schemalanguage)|true|none|Language represented by 2 letter ISO Code (639-1)<br>|
|latitude|[Latitude](#schemalatitude)|true|none|The latitude of the postcode (WGS84/ETRS89).<br><br>Can be a positive or negative decimal. E.g. `51.5083983`.<br><br>Returns an empty string if no location data is available. |
|line_1|string|true|none|First line of the address. Typically the building number and street name|
|line_2|string|true|none|Second line of the address. Can be blank|
|line_3|string|true|none|Third line of the address. Can also be blank|
|longitude|[Longitude](#schemalongitude)|true|none|The longitude of the postcode (WGS84/ETRS89).<br><br>Can be a positive or negative decimal. E.g. -0.1283983<br><br>Returns an empty string if no location data is available. |
|native|[EcadAddress](#schemaecadaddress) \| [EcafAddress](#schemaecafaddress) \| [UspsAddress](#schemauspsaddress)|true|none|The native representation of a non-UK address|
|northings|string|true|none|Not available for non-UK addresses|
|organisation_name|string|true|none|Not available for non-UK addresses|
|po_box|string|true|none|Not available for non-UK addresses|
|post_town|string|true|none|The city, town or other primary locality<br>|
|postal_county|string|true|none|Not available for non-UK addresses|
|postcode|string|true|none|Represents the postal or zip code|
|postcode_inward|string|true|none|Not available for non-UK addresses|
|postcode_outward|string|true|none|Not available for non-UK addresses|
|postcode_type|string|true|none|Not available for non-UK addresses|
|premise|string|true|none|Not available for non-UK addresses|
|su_organisation_indicator|string|true|none|Not available for non-UK addresses|
|sub_building_name|string|true|none|Not available for non-UK addresses|
|thoroughfare|string|true|none|Not available for non-UK addresses|
|traditional_county|string|true|none|Not available for non-UK addresses|
|udprn|string|true|none|Not available for non-UK addresses. See `id` for address identifier|
|umprn|string|true|none|Not available for non-UK addresses. See `id` for address identifier|
|uprn|string|true|none|Not available for non-UK addresses. See `id` for address identifier|
|ward|string|true|none|Not available for non-UK addresses|

#### Enumerated Values

|Property|Value|
|---|---|
|administrative_county|""|
|building_name|""|
|building_number|""|
|country|United States|
|country|Guam|
|country|Puerto Rico|
|country|England|
|country|Scotland|
|country|Wales|
|country|Northern Ireland|
|country|Jersey|
|country|Guernsey|
|country|Isle of Man|
|country|Ireland|
|country_iso|GBR|
|country_iso|IMN|
|country_iso|JEY|
|country_iso|GGY|
|country_iso|USA|
|country_iso|PRI|
|country_iso|GUM|
|country_iso|IRL|
|country_iso_2|GB|
|country_iso_2|IM|
|country_iso_2|JE|
|country_iso_2|GG|
|country_iso_2|US|
|country_iso_2|PR|
|country_iso_2|GU|
|country_iso_2|IE|
|dataset|paf|
|dataset|pafw|
|dataset|pafa|
|dataset|mr|
|dataset|nyb|
|dataset|usps|
|dataset|ecaf|
|dataset|ecad|
|delivery_point_suffix|""|
|department_name|""|
|dependant_locality|""|
|dependant_thoroughfare|""|
|district|""|
|double_dependant_locality|""|
|eastings|""|
|language|en|
|language|cy|
|language|ga|
|northings|""|
|organisation_name|""|
|po_box|""|
|postal_county|""|
|postcode_inward|""|
|postcode_outward|""|
|postcode_type|""|
|premise|""|
|su_organisation_indicator|""|
|sub_building_name|""|
|thoroughfare|""|
|traditional_county|""|
|umprn|""|
|uprn|""|
|ward|""|

<h2 id="tocS_GbrResolveAddressResponse">GbrResolveAddressResponse</h2>
<!-- backwards compatibility -->
<a id="schemagbrresolveaddressresponse"></a>
<a id="schema_GbrResolveAddressResponse"></a>
<a id="tocSgbrresolveaddressresponse"></a>
<a id="tocsgbrresolveaddressresponse"></a>

```json
{
  "code": 2000,
  "message": "Success",
  "result": {
    "administrative_county": "",
    "building_name": "",
    "building_number": "10",
    "country": "England",
    "country_iso": "GBR",
    "country_iso_2": "GB",
    "county": "London",
    "county_code": "",
    "dataset": "paf",
    "delivery_point_suffix": "1A",
    "department_name": "",
    "dependant_locality": "",
    "dependant_thoroughfare": "",
    "district": "Westminster",
    "double_dependant_locality": "",
    "eastings": "string",
    "id": "paf_8387729",
    "language": "en",
    "latitude": "string",
    "line_1": "Prime Minister &amp; First Lord of Treasury",
    "line_2": "10 Downing Street",
    "line_3": "",
    "longitude": "string",
    "northings": "string",
    "organisation_name": "Prime Minister &amp; First Lord Of The Treasury",
    "po_box": "100",
    "post_town": "London",
    "postal_county": "London",
    "postcode": "SW1A 2AA",
    "postcode_inward": "2AA",
    "postcode_outward": "SW1A",
    "postcode_type": "S",
    "premise": "10",
    "su_organisation_indicator": "Y",
    "sub_building_name": "Flat 1",
    "thoroughfare": "Downing Street",
    "traditional_county": "Greater London",
    "udprn": 23747771,
    "umprn": "string",
    "uprn": "string",
    "ward": "St. James'"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|true|none|none|
|message|string|true|none|none|
|result|[PafAddress](#schemapafaddress) \| [MrAddress](#schemamraddress) \| [WelshPafAddress](#schemawelshpafaddress) \| [PafAliasAddress](#schemapafaliasaddress) \| [NybAddress](#schemanybaddress) \| [GbrGlobalAddress](#schemagbrglobaladdress)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|code|2000|
|message|Success|

<h2 id="tocS_GeonamesPlace">GeonamesPlace</h2>
<!-- backwards compatibility -->
<a id="schemageonamesplace"></a>
<a id="schema_GeonamesPlace"></a>
<a id="tocSgeonamesplace"></a>
<a id="tocsgeonamesplace"></a>

```json
{
  "admin1_code": "ENG",
  "admin1_geonameid": 5353,
  "admin1_name": "England",
  "admin2_code": "06",
  "admin2_geonameid": 5353,
  "admin2_name": "England",
  "admin3_code": "08",
  "admin4_code": "07",
  "alternatenames": [
    "London"
  ],
  "asciiname": "London",
  "cc2": [
    "IE"
  ],
  "country_code": "GB",
  "dataset": "geonames",
  "dem": 32,
  "elevation": 0,
  "feature_class": "A",
  "feature_code": "ADM1",
  "geonameid": 5353,
  "id": "geonames_5353",
  "latitude": "string",
  "longitude": "string",
  "modification_date": "2015-03-09",
  "name": "London",
  "population": "7392832",
  "timezone": "Europe/London"
}
```

Full GeoNames place specification

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|admin1_code|string|true|none|Fipscode (subject to change to iso code)|
|admin1_geonameid|integer(int32) \| null|true|none|GeoName ID for first administrative area|
|admin1_name|string|true|none|Name of first administrative area|
|admin2_code|string|true|none|Code for the second administrative division|
|admin2_geonameid|integer(int32) \| null|true|none|GeoName ID for second administrative area|
|admin2_name|string|true|none|Name of second administrative area|
|admin3_code|string|true|none|Code for third level administrative division|
|admin4_code|string|true|none|Code for fourth level administrative division|
|alternatenames|[string]|true|none|List of alternate ASCII names|
|asciiname|string|true|none|Place Name (ASCII)|
|cc2|[string]|true|none|List of other countries codes mapping to this place|
|country_code|string|true|none|2 Letter ISO country code|
|dataset|string|false|none|none|
|dem|integer(int32) \| null|true|none|Digital elevation model|
|elevation|integer(int32) \| null|true|none|Elevation in meters|
|feature_class|string|true|none|GeoNames single letter feature code|
|feature_code|string|true|none|Full GeoNames feature code (http://www.geonames.org/export/codes.html)|
|geonameid|integer(int32)|true|none|Unique identifier for GeoNames place|
|id|string|false|none|Unique place ID|
|latitude|[Latitude](#schemalatitude)|true|none|The latitude of the postcode (WGS84/ETRS89).<br><br>Can be a positive or negative decimal. E.g. `51.5083983`.<br><br>Returns an empty string if no location data is available. |
|longitude|[Longitude](#schemalongitude)|true|none|The longitude of the postcode (WGS84/ETRS89).<br><br>Can be a positive or negative decimal. E.g. -0.1283983<br><br>Returns an empty string if no location data is available. |
|modification_date|string|true|none|Datetime format|
|name|string|true|none|Place name (UTF8)|
|population|string|true|none|Population at place. Represented as string as it could be a larger than a 32bit integer|
|timezone|string|true|none|The IANA timezone ID|

#### Enumerated Values

|Property|Value|
|---|---|
|dataset|geonames|
|feature_class|A|
|feature_class|H|
|feature_class|L|
|feature_class|P|
|feature_class|R|
|feature_class|S|
|feature_class|T|
|feature_class|U|
|feature_class|V|

<h2 id="tocS_ID">ID</h2>
<!-- backwards compatibility -->
<a id="schemaid"></a>
<a id="schema_ID"></a>
<a id="tocSid"></a>
<a id="tocsid"></a>

```json
"paf_8387729"
```

Global unique internally generated identifier for an address

<h2 id="tocS_InvalidPhoneNumber">InvalidPhoneNumber</h2>
<!-- backwards compatibility -->
<a id="schemainvalidphonenumber"></a>
<a id="schema_InvalidPhoneNumber"></a>
<a id="tocSinvalidphonenumber"></a>
<a id="tocsinvalidphonenumber"></a>

```json
{
  "country": null,
  "current_carrier": null,
  "international_format": null,
  "iso_country": null,
  "iso_country_2": null,
  "national_format": null,
  "original_carrier": null,
  "valid": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|country|string \| null|true|none|Full country name|
|current_carrier|string \| null|false|none|Representation of current phone carrier information like network code, name, country, network type|
|international_format|string \| null|true|none|Phone number formatted to international standard|
|iso_country|string \| null|true|none|Country code in 3 letter ISO format|
|iso_country_2|string \| null|true|none|Country code in 2 letter ISO format|
|national_format|string \| null|true|none|Phone number formatted to local standard|
|original_carrier|string \| null|false|none|Representation of original phone carrier information like network code, name, country, network type|
|valid|boolean|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|country|null|
|current_carrier|null|
|international_format|null|
|iso_country|null|
|iso_country_2|null|
|national_format|null|
|original_carrier|null|
|valid|false|

<h2 id="tocS_KeyUsageResult">KeyUsageResult</h2>
<!-- backwards compatibility -->
<a id="schemakeyusageresult"></a>
<a id="schema_KeyUsageResult"></a>
<a id="tocSkeyusageresult"></a>
<a id="tocskeyusageresult"></a>

```json
{
  "dailyCount": [
    {
      "count": 132,
      "date": "2015-01-22T00:00:00.000Z"
    }
  ],
  "end": "2015-01-23T15:08:06.609Z",
  "start": "2015-01-22T15:08:06.609Z",
  "total": 132
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dailyCount|[object]|true|none|An array of objects representing number of paid lookups made on specific days, ordered by date. Each object contains a `date` attribute, which represents the day and a `count` attribute, which represents the number of paid lookups made on that day.<br>|
|end|string|true|none|End date in ISO 8601 format.|
|start|string|true|none|Start date in ISO 8601 format.|
|total|integer(int32)|true|none|Total of paid lookups performed in specified period.|

<h2 id="tocS_Language">Language</h2>
<!-- backwards compatibility -->
<a id="schemalanguage"></a>
<a id="schema_Language"></a>
<a id="tocSlanguage"></a>
<a id="tocslanguage"></a>

```json
"en"
```

Language represented by 2 letter ISO Code (639-1)

<h2 id="tocS_Latitude">Latitude</h2>
<!-- backwards compatibility -->
<a id="schemalatitude"></a>
<a id="schema_Latitude"></a>
<a id="tocSlatitude"></a>
<a id="tocslatitude"></a>

```json
"string"
```

The latitude of the postcode (WGS84/ETRS89).

Can be a positive or negative decimal. E.g. `51.5083983`.

Returns an empty string if no location data is available.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|string|false|none|Empty string `""` if not available|
|*oneOf*|number|false|none|Represents latitude|

<h2 id="tocS_Licensee">Licensee</h2>
<!-- backwards compatibility -->
<a id="schemalicensee"></a>
<a id="schema_Licensee"></a>
<a id="tocSlicensee"></a>
<a id="tocslicensee"></a>

```json
{
  "address": "12 High Street, Manchester",
  "daily": {
    "count": 232,
    "updatedAt": "2016-08-05T16:43:28.865Z"
  },
  "name": "Qwerty Widgets Limited",
  "postcode": "ID1 1QD",
  "whitelist": [
    "https://www.example.com"
  ],
  "createdAt": "2016-01-21T17:14:49.971Z",
  "id": "56a11209ebe230380bf104c3",
  "key": "sl_ijoiqsxeQgXW2gkiE0X94"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|string|true|none|Licensee's first, second and third line address as well as post town concatenated by commas|
|daily|object|true|none|none|
|name|string|true|none|Licensee individual or organisation name|
|postcode|string|true|none|Licensee's postcode|
|whitelist|[string]|true|none|A list of allowed URLs. An empty list means that whitelisting is disabled|
|createdAt|string|true|none|Timestamp for when the licensee was created|
|daily|object|true|none|none|
|id|string|true|none|An immutable ID provided for every licensee. Primarily used for paginated list requests.<br>|
|key|string|true|none|Uniquely identifies a licensee for a key. <br><br>Required to perform paid lookups for a specific licensee. Typically begins `sk_`.<br>|

<h2 id="tocS_LicenseeEditable">LicenseeEditable</h2>
<!-- backwards compatibility -->
<a id="schemalicenseeeditable"></a>
<a id="schema_LicenseeEditable"></a>
<a id="tocSlicenseeeditable"></a>
<a id="tocslicenseeeditable"></a>

```json
{
  "address": "12 High Street, Manchester",
  "daily": {
    "limit": 10000
  },
  "name": "Qwerty Widgets Limited",
  "postcode": "ID1 1QD",
  "whitelist": [
    "https://www.example.com"
  ]
}
```

Licensee object which can be defined by user

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|string|false|none|Licensee's first, second and third line address as well as post town concatenated by commas|
|daily|object|false|none|none|
|name|string|false|none|Licensee individual or organisation name|
|postcode|string|false|none|Licensee's postcode|
|whitelist|[string]|false|none|A list of allowed URLs. An empty list means that whitelisting is disabled|

<h2 id="tocS_LicenseeParam">LicenseeParam</h2>
<!-- backwards compatibility -->
<a id="schemalicenseeparam"></a>
<a id="schema_LicenseeParam"></a>
<a id="tocSlicenseeparam"></a>
<a id="tocslicenseeparam"></a>

```json
"sk_hk71kco54zGSGvF9eXXrvvnMOLLNh"
```

Uniquely identifies a licensee

<h2 id="tocS_LicenseeResponse">LicenseeResponse</h2>
<!-- backwards compatibility -->
<a id="schemalicenseeresponse"></a>
<a id="schema_LicenseeResponse"></a>
<a id="tocSlicenseeresponse"></a>
<a id="tocslicenseeresponse"></a>

```json
{
  "code": 2000,
  "message": "Success",
  "result": {
    "address": "12 High Street, Manchester",
    "daily": {
      "count": 232,
      "updatedAt": "2016-08-05T16:43:28.865Z"
    },
    "name": "Qwerty Widgets Limited",
    "postcode": "ID1 1QD",
    "whitelist": [
      "https://www.example.com"
    ],
    "createdAt": "2016-01-21T17:14:49.971Z",
    "id": "56a11209ebe230380bf104c3",
    "key": "sl_ijoiqsxeQgXW2gkiE0X94"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|true|none|none|
|message|string|true|none|none|
|result|[Licensee](#schemalicensee)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|code|2000|
|message|Success|

<h2 id="tocS_LicenseesResponse">LicenseesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalicenseesresponse"></a>
<a id="schema_LicenseesResponse"></a>
<a id="tocSlicenseesresponse"></a>
<a id="tocslicenseesresponse"></a>

```json
{
  "code": 2000,
  "message": "Success",
  "result": {
    "hasMore": true,
    "licensees": [
      {
        "address": "12 High Street, Manchester",
        "daily": {
          "count": 232,
          "updatedAt": "2016-08-05T16:43:28.865Z"
        },
        "name": "Qwerty Widgets Limited",
        "postcode": "ID1 1QD",
        "whitelist": [
          "https://www.example.com"
        ],
        "createdAt": "2016-01-21T17:14:49.971Z",
        "id": "56a11209ebe230380bf104c3",
        "key": "sl_ijoiqsxeQgXW2gkiE0X94"
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|true|none|none|
|message|string|true|none|none|
|result|object|true|none|List of licensees|

#### Enumerated Values

|Property|Value|
|---|---|
|code|2000|
|message|Success|

<h2 id="tocS_LimitParam">LimitParam</h2>
<!-- backwards compatibility -->
<a id="schemalimitparam"></a>
<a id="schema_LimitParam"></a>
<a id="tocSlimitparam"></a>
<a id="tocslimitparam"></a>

```json
5
```

Specifies the maximum number of suggestions to retrieve.

By default the limit is 10, unless a postcode is queried (then all addresses at that postcode will be returned). Limit can be shortened to `l=`

<h2 id="tocS_Longitude">Longitude</h2>
<!-- backwards compatibility -->
<a id="schemalongitude"></a>
<a id="schema_Longitude"></a>
<a id="tocSlongitude"></a>
<a id="tocslongitude"></a>

```json
"string"
```

The longitude of the postcode (WGS84/ETRS89).

Can be a positive or negative decimal. E.g. -0.1283983

Returns an empty string if no location data is available.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|string|false|none|Empty string `""` if not available|
|*oneOf*|number|false|none|Represents longitude|

<h2 id="tocS_MrAddress">MrAddress</h2>
<!-- backwards compatibility -->
<a id="schemamraddress"></a>
<a id="schema_MrAddress"></a>
<a id="tocSmraddress"></a>
<a id="tocsmraddress"></a>

```json
{
  "administrative_county": "",
  "building_name": "",
  "building_number": "10",
  "country": "England",
  "country_iso": "GBR",
  "country_iso_2": "GB",
  "county": "London",
  "county_code": "",
  "dataset": "mr",
  "delivery_point_suffix": "1A",
  "department_name": "",
  "dependant_locality": "",
  "dependant_thoroughfare": "",
  "district": "Westminster",
  "double_dependant_locality": "",
  "eastings": "string",
  "id": "paf_8387729",
  "language": "en",
  "latitude": "string",
  "line_1": "Prime Minister &amp; First Lord of Treasury",
  "line_2": "10 Downing Street",
  "line_3": "",
  "longitude": "string",
  "northings": "string",
  "organisation_name": "Prime Minister &amp; First Lord Of The Treasury",
  "po_box": "100",
  "post_town": "London",
  "postal_county": "London",
  "postcode": "SW1A 2AA",
  "postcode_inward": "2AA",
  "postcode_outward": "SW1A",
  "postcode_type": "S",
  "premise": "10",
  "su_organisation_indicator": "Y",
  "sub_building_name": "Flat 1",
  "thoroughfare": "Downing Street",
  "traditional_county": "Greater London",
  "udprn": 23747771,
  "umprn": "string",
  "uprn": "string",
  "ward": "St. James'"
}
```

Subdivision of a Postcode Address File address. Also known as a Multiple Residence or Multiple Occupancy address.

A Multiple Residence address does not have its own deliverable endpoint. Instead it relies on the deliverable endpoint of a parent address, where the parent address can be found on the main Postcode Address File.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|administrative_county|[paf_administrative_county](#schemapaf_administrative_county)|true|none|The current administrative county to which the postcode has been assigned.<br><br>A Unitary Authority name, where one is present. If there is no Unitary Authority, the County name is used. This information is not static, because County boundaries may change due to administrative changes. Data<br><br>source: ONS|
|building_name|[paf_building_name](#schemapaf_building_name)|true|none|Name of residential or commercial premise. <br><br>Examples:<br>  - The Manor<br>  - 1-2<br>  - A<br>  - 12A<br>  - K<br>  - Victoria House|
|building_number|[paf_building_number](#schemapaf_building_number)|true|none|Number to identify premise on a thoroughfare or dependant thoroughfare.|
|country|[paf_country](#schemapaf_country)|true|none|  Full country names (ISO 3166)<br>|
|country_iso|[paf_country_iso](#schemapaf_country_iso)|true|none|  3 letter country code (ISO 3166-1)<br>|
|country_iso_2|[paf_country_iso_2](#schemapaf_country_iso_2)|true|none| 2 letter country code (ISO 3166-1)<br>|
|county|[paf_county](#schemapaf_county)|true|none|Since postal, administrative or traditional counties may not apply to some addresses, the county field is designed to return whatever county data is available. Normally, the postal county is returned. If this is not present, the county field will fall back to the administrative county. If the administrative county is also not present, the county field will fall back to the traditional county. May be empty in cases where no administrative, postal or traditional county present.|
|county_code|string|true|none|Short code representing the county or province. May be empty (`""`)|
|dataset|[paf_dataset](#schemapaf_dataset)|true|none|Indicates the provenance of an address|
|delivery_point_suffix|[paf_delivery_point_suffix](#schemapaf_delivery_point_suffix)|true|none|A unique Royal Mail 2-character code (the first numeric & the second alphabetical), which, when added to the Postcode, enables each live Delivery Point to be uniquely identified. Once the Delivery Point is deleted from PAF the DPS may be reused (although they aren’t reused until all remaining Delivery Points in the range have been allocated). The DPS for a Large User is always '1A' as each Large User has its own Postcode.|
|department_name|[paf_department_name](#schemapaf_department_name)|true|none|Used to supplment Organisation Name to identify a deparment within the organisation.|
|dependant_locality|[paf_dependant_locality](#schemapaf_dependant_locality)|true|none|When the same thoroughfare name reoccurs in a Post town, it may not be possible to make it dependant on a dependant thoroughfare. In this case the thoroughfare is dependant on a locality. For example if we want to find 1 Back Lane in Huddersfield we see that there are three.|
|dependant_thoroughfare|[paf_dependant_thoroughfare](#schemapaf_dependant_thoroughfare)|true|none|Used to supplement thoroughfare. When a thoroughfare name is used twice in the same Post Town, the dependant thoroughfare is added to uniquely indentify a delivery point.|
|district|[paf_district](#schemapaf_district)|true|none|The current district/unitary authority to which the postcode has been assigned.|
|double_dependant_locality|[paf_double_dependant_locality](#schemapaf_double_dependant_locality)|true|none|Used to supplement Dependant Locality. A Double Dependant Locality supplied along with a Dependant Locality if the Dependant Locality exists twice in the same locality.|
|eastings|[Eastings](#schemaeastings)|true|none|Eastings reference using the [Ordnance Survey National Grid reference system](https://en.wikipedia.org/wiki/Ordnance_Survey_National_Grid).<br><br>Northern Ireland Eastings uses the [Irish Grid Reference System](https://en.wikipedia.org/wiki/Irish_grid_reference_system).<br><br>Metres from origin. E.g. `550458`<br><br>Returns an empty string if no location data is available. Otherwise a number is returned.|
|id|[ID](#schemaid)|true|none|Global unique internally generated identifier for an address|
|language|[paf_language](#schemapaf_language)|true|none|Language represented by 2 letter ISO Code (639-1)<br>|
|latitude|[Latitude](#schemalatitude)|true|none|The latitude of the postcode (WGS84/ETRS89).<br><br>Can be a positive or negative decimal. E.g. `51.5083983`.<br><br>Returns an empty string if no location data is available. |
|line_1|[paf_line1](#schemapaf_line1)|true|none|First Address Line. Often contains premise and thoroughfare information. In the case of a commercial premise, the first line is always the full name of the registered organisation. Never empty.|
|line_2|[paf_line2](#schemapaf_line2)|true|none|Second Address Line. Often contains thoroughfare and locality information. May be empty|
|line_3|[paf_line3](#schemapaf_line3)|true|none|Third address line. May be empty.|
|longitude|[Longitude](#schemalongitude)|true|none|The longitude of the postcode (WGS84/ETRS89).<br><br>Can be a positive or negative decimal. E.g. -0.1283983<br><br>Returns an empty string if no location data is available. |
|northings|[Northings](#schemanorthings)|true|none|Northings reference using the [Ordnance Survey National Grid reference system](https://en.wikipedia.org/wiki/Ordnance_Survey_National_Grid)<br><br>Northern Ireland Northings uses the [Irish Grid Reference System](https://en.wikipedia.org/wiki/Irish_grid_reference_system)<br><br>Metres from origin. E.g. `180458`<br><br>Returns an empty string if no location data is available. Otherwise a number is returned  |
|organisation_name|[paf_organisation_name](#schemapaf_organisation_name)|true|none|Used to supplment Organisation Name to identify a deparment within the organisation|
|po_box|[paf_pobox](#schemapaf_pobox)|true|none|When the PO Box Number field is populated it will contain PO BOX nnnnnn where n represents the PO Box number. Note that the PO Box details can occasionally consist of a combination of numbers and letters. PO Box Numbers are only allocated to Large Users.|
|post_town|[paf_post_town](#schemapaf_post_town)|true|none|A Post Town is mandatory for delivery of mail to a Delivery Point. This is not necessarily the nearest town geographically, but a routing instruction to the Royal Mail delivery office sorting mail for that Delivery Point. A Post Town will always be present in every address, and for some Localities the Post Town will be the only locality element present.|
|postal_county|[paf_postal_county](#schemapaf_postal_county)|true|none|Postal counties were used for the distribution of mail before the Postcode system was introduced in the 1970s. The Former Postal County was the Administrative County at the time. This data rarely changes. May be empty.|
|postcode|[paf_postcode](#schemapaf_postcode)|true|none|Correctly formatted postcode. Capitalised and spaced.|
|postcode_inward|[paf_postcode_inward](#schemapaf_postcode_inward)|true|none|The second part of a postcode is known as the inward code. e.g. The inward code of ID1 1QD is 1QD.<br><br>The number identifies the sector in the postal district. The number is followed by 2 letters. The letters then define one or more properties in that sector.|
|postcode_outward|[paf_postcode_outward](#schemapaf_postcode_outward)|true|none|The first part of a postcode is known as the outward code. e.g. The outward code of ID1 1QD is ID1. Enables mail to be sorted to the correct local area for delivery. This part of the code contains the area and the district to which the mail is to be delivered, e.g. ‘PO1’, ‘SW1A’ or ‘B23’.|
|postcode_type|[paf_postcode_type](#schemapaf_postcode_type)|true|none|This indicates the type of user. It can only take the values 'S' or 'L' indicating small or large respectively. Large User Postcodes. These are assigned to one single address either due to the large volume of mail received at that address, or because a PO Box or Selectapost service has been set up. Small User Postcodes. These identify a group of Delivery Points.<br><br>On average there are 15 Delivery Points per Postcode. However this can vary between 1 and, in some cases, 100. There will never be more than 100 Delivery Points on a Postcode.|
|premise|[paf_premise](#schemapaf_premise)|true|none|A pre-computed string which sensibly combines building_number, building_name and sub_building_name. building_number, building_name and sub_building_name represent raw data from Royal Mail's and can be difficult to parse if you are unaware of how the Postcode Address File premise fields work together. For this reason, we also provide a pre-computed premise field which intelligently gathers these points into a single, simple premise string. This field is ideal if you want to pull premise information and thoroughfare information separately instead of using our address lines data.|
|su_organisation_indicator|[paf_su_organisation_indicator](#schemapaf_su_organisation_indicator)|true|none|Small User Organisation Indicator can have the values 'Y' or space. A value of 'Y' indicates that a Small User Organisation is present at this address.|
|sub_building_name|[paf_sub_building_name](#schemapaf_sub_building_name)|true|none|When a premise is split into individual units such as flats, apartments or business units. Cannot be present without either building_name or building_number. E.g. Flat 1, A, 10B|
|thoroughfare|[paf_thoroughfare](#schemapaf_thoroughfare)|true|none|Also known as the street or road name. In general each Thoroughfare Name will have a separate Postcode. Longer Thoroughfares with high number ranges often have multiple Postcodes covering the entire length of the road, with breaks at suitable points e.g. junctions or natural breaks in the road.|
|traditional_county|[paf_traditional_county](#schemapaf_traditional_county)|true|none|Traditional counties are provided by the Association of British Counties. It is historical data, and can date from the 1800s. May be empty.|
|udprn|[paf_udprn](#schemapaf_udprn)|true|none|UDPRN stands for ‘Unique Delivery Point Reference Number’. Royal Mail assigns a unique UDPRN code for each premise on PAF. Simple, unique reference number for each Delivery Point. Unlikely to be reused when an address expires.<br><br>Up to 8-digit numeric code.<br><br>A new UDPRN is automatically assigned to each new Delivery Point added to PAF.|
|umprn|[paf_umprn](#schemapaf_umprn)|true|none|A small minority of individual premises (as identified by a UDPRN) may have multiple occupants behind the same letterbox. These are known as Multiple Residence occupants and can be queried via the Multiple Residence dataset. Simple, unique reference number for each Multiple Residence occupant.<br><br>Note: this will be an empty string `""` when not used.|
|uprn|[paf_uprn](#schemapaf_uprn)|true|none|UPRN stands for Unique Property Reference Number and is maintained by the Ordnance Survey (OS). Local governments in the UK have allocated a unique number for each land or property.<br><br>Up to 12 digits in length.<br><br>Multiple Residence premises currently share the same UPRN as the parent premise.<br><br>May not be available for a small number of Great Britain addresses due to longer update cycles for Ordnance Survey's AddressBase datasets. Returns empty string "" in these instances.<br><br>Although UPRN takes an integer format, we encode and transmit this data as strings. As a 12 digit number, the UPRN can exceed the maximum safe integer `Number.MAX_SAFE_INTEGER` in most browsers causing this datapoint to be corrupted.<br><br>Take special care when storing UPRN. As a 12 digit identifier, you will need 64 bits to encode every possible UPRN value. This means applications like Excel will corrupt cells containing UPRN values.|
|ward|[paf_ward](#schemapaf_ward)|true|none|The current administrative/electoral area to which the postcode has been assigned. May be empty for a small number of addresses.|
|country|string|true|none|none|
|country_iso|string|true|none|none|
|country_iso_2|string|true|none|none|
|dataset|string|true|none|none|
|language|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|postcode_type|S|
|postcode_type|L|
|country|England|
|country|Scotland|
|country|Wales|
|country|Northern Ireland|
|country|Jersey|
|country|Guernsey|
|country|Isle of Man|
|country_iso|GBR|
|country_iso|IMN|
|country_iso|JEY|
|country_iso|GGY|
|country_iso_2|GB|
|country_iso_2|IM|
|country_iso_2|JE|
|country_iso_2|GG|
|dataset|mr|
|language|en|

<h2 id="tocS_NoContext">NoContext</h2>
<!-- backwards compatibility -->
<a id="schemanocontext"></a>
<a id="schema_NoContext"></a>
<a id="tocSnocontext"></a>
<a id="tocsnocontext"></a>

```json
""
```

Empty string if no context is provided or key check has failed

<h2 id="tocS_Northings">Northings</h2>
<!-- backwards compatibility -->
<a id="schemanorthings"></a>
<a id="schema_Northings"></a>
<a id="tocSnorthings"></a>
<a id="tocsnorthings"></a>

```json
"string"
```

Northings reference using the [Ordnance Survey National Grid reference system](https://en.wikipedia.org/wiki/Ordnance_Survey_National_Grid)

Northern Ireland Northings uses the [Irish Grid Reference System](https://en.wikipedia.org/wiki/Irish_grid_reference_system)

Metres from origin. E.g. `180458`

Returns an empty string if no location data is available. Otherwise a number is returned

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|string|false|none|Empty string `""` if not available|
|*oneOf*|number|false|none|Metres offset north from origin|

<h2 id="tocS_NotFoundResponse">NotFoundResponse</h2>
<!-- backwards compatibility -->
<a id="schemanotfoundresponse"></a>
<a id="schema_NotFoundResponse"></a>
<a id="tocSnotfoundresponse"></a>
<a id="tocsnotfoundresponse"></a>

```json
{
  "code": 0,
  "message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|true|none|API Response Code. Non `2xxx` code indicates a failure. This code will provide a more specific reason when a failure occurs and facilitates debugging.|
|message|string|true|none|Human readable error message supplied with every error response.|
|code|integer(int32)|true|none|`404X` type error response code|
|message|string|true|none|Resource not found error description|

<h2 id="tocS_NybAddress">NybAddress</h2>
<!-- backwards compatibility -->
<a id="schemanybaddress"></a>
<a id="schema_NybAddress"></a>
<a id="tocSnybaddress"></a>
<a id="tocsnybaddress"></a>

```json
{
  "administrative_county": "",
  "building_name": "",
  "building_number": "10",
  "country": "England",
  "country_iso": "GBR",
  "country_iso_2": "GB",
  "county": "London",
  "county_code": "",
  "dataset": "nyb",
  "delivery_point_suffix": "1A",
  "department_name": "",
  "dependant_locality": "",
  "dependant_thoroughfare": "",
  "district": "Westminster",
  "double_dependant_locality": "",
  "eastings": "string",
  "id": "paf_8387729",
  "language": "en",
  "latitude": "string",
  "line_1": "Prime Minister &amp; First Lord of Treasury",
  "line_2": "10 Downing Street",
  "line_3": "",
  "longitude": "string",
  "northings": "string",
  "organisation_name": "Prime Minister &amp; First Lord Of The Treasury",
  "po_box": "100",
  "post_town": "London",
  "postal_county": "London",
  "postcode": "SW1A 2AA",
  "postcode_inward": "2AA",
  "postcode_outward": "SW1A",
  "postcode_type": "S",
  "premise": "10",
  "su_organisation_indicator": "Y",
  "sub_building_name": "Flat 1",
  "thoroughfare": "Downing Street",
  "traditional_county": "Greater London",
  "udprn": 23747771,
  "umprn": "string",
  "uprn": "string",
  "ward": "St. James'"
}
```

A UK premise under construction and currently not occupied.

This dataset is updated by Royal Mail on a monthly cadence.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|administrative_county|[paf_administrative_county](#schemapaf_administrative_county)|true|none|The current administrative county to which the postcode has been assigned.<br><br>A Unitary Authority name, where one is present. If there is no Unitary Authority, the County name is used. This information is not static, because County boundaries may change due to administrative changes. Data<br><br>source: ONS|
|building_name|[paf_building_name](#schemapaf_building_name)|true|none|Name of residential or commercial premise. <br><br>Examples:<br>  - The Manor<br>  - 1-2<br>  - A<br>  - 12A<br>  - K<br>  - Victoria House|
|building_number|[paf_building_number](#schemapaf_building_number)|true|none|Number to identify premise on a thoroughfare or dependant thoroughfare.|
|country|[paf_country](#schemapaf_country)|true|none|  Full country names (ISO 3166)<br>|
|country_iso|[paf_country_iso](#schemapaf_country_iso)|true|none|  3 letter country code (ISO 3166-1)<br>|
|country_iso_2|[paf_country_iso_2](#schemapaf_country_iso_2)|true|none| 2 letter country code (ISO 3166-1)<br>|
|county|[paf_county](#schemapaf_county)|true|none|Since postal, administrative or traditional counties may not apply to some addresses, the county field is designed to return whatever county data is available. Normally, the postal county is returned. If this is not present, the county field will fall back to the administrative county. If the administrative county is also not present, the county field will fall back to the traditional county. May be empty in cases where no administrative, postal or traditional county present.|
|county_code|string|true|none|Short code representing the county or province. May be empty (`""`)|
|dataset|[paf_dataset](#schemapaf_dataset)|true|none|Indicates the provenance of an address|
|delivery_point_suffix|[paf_delivery_point_suffix](#schemapaf_delivery_point_suffix)|true|none|A unique Royal Mail 2-character code (the first numeric & the second alphabetical), which, when added to the Postcode, enables each live Delivery Point to be uniquely identified. Once the Delivery Point is deleted from PAF the DPS may be reused (although they aren’t reused until all remaining Delivery Points in the range have been allocated). The DPS for a Large User is always '1A' as each Large User has its own Postcode.|
|department_name|[paf_department_name](#schemapaf_department_name)|true|none|Used to supplment Organisation Name to identify a deparment within the organisation.|
|dependant_locality|[paf_dependant_locality](#schemapaf_dependant_locality)|true|none|When the same thoroughfare name reoccurs in a Post town, it may not be possible to make it dependant on a dependant thoroughfare. In this case the thoroughfare is dependant on a locality. For example if we want to find 1 Back Lane in Huddersfield we see that there are three.|
|dependant_thoroughfare|[paf_dependant_thoroughfare](#schemapaf_dependant_thoroughfare)|true|none|Used to supplement thoroughfare. When a thoroughfare name is used twice in the same Post Town, the dependant thoroughfare is added to uniquely indentify a delivery point.|
|district|[paf_district](#schemapaf_district)|true|none|The current district/unitary authority to which the postcode has been assigned.|
|double_dependant_locality|[paf_double_dependant_locality](#schemapaf_double_dependant_locality)|true|none|Used to supplement Dependant Locality. A Double Dependant Locality supplied along with a Dependant Locality if the Dependant Locality exists twice in the same locality.|
|eastings|[Eastings](#schemaeastings)|true|none|Eastings reference using the [Ordnance Survey National Grid reference system](https://en.wikipedia.org/wiki/Ordnance_Survey_National_Grid).<br><br>Northern Ireland Eastings uses the [Irish Grid Reference System](https://en.wikipedia.org/wiki/Irish_grid_reference_system).<br><br>Metres from origin. E.g. `550458`<br><br>Returns an empty string if no location data is available. Otherwise a number is returned.|
|id|[ID](#schemaid)|true|none|Global unique internally generated identifier for an address|
|language|[paf_language](#schemapaf_language)|true|none|Language represented by 2 letter ISO Code (639-1)<br>|
|latitude|[Latitude](#schemalatitude)|true|none|The latitude of the postcode (WGS84/ETRS89).<br><br>Can be a positive or negative decimal. E.g. `51.5083983`.<br><br>Returns an empty string if no location data is available. |
|line_1|[paf_line1](#schemapaf_line1)|true|none|First Address Line. Often contains premise and thoroughfare information. In the case of a commercial premise, the first line is always the full name of the registered organisation. Never empty.|
|line_2|[paf_line2](#schemapaf_line2)|true|none|Second Address Line. Often contains thoroughfare and locality information. May be empty|
|line_3|[paf_line3](#schemapaf_line3)|true|none|Third address line. May be empty.|
|longitude|[Longitude](#schemalongitude)|true|none|The longitude of the postcode (WGS84/ETRS89).<br><br>Can be a positive or negative decimal. E.g. -0.1283983<br><br>Returns an empty string if no location data is available. |
|northings|[Northings](#schemanorthings)|true|none|Northings reference using the [Ordnance Survey National Grid reference system](https://en.wikipedia.org/wiki/Ordnance_Survey_National_Grid)<br><br>Northern Ireland Northings uses the [Irish Grid Reference System](https://en.wikipedia.org/wiki/Irish_grid_reference_system)<br><br>Metres from origin. E.g. `180458`<br><br>Returns an empty string if no location data is available. Otherwise a number is returned  |
|organisation_name|[paf_organisation_name](#schemapaf_organisation_name)|true|none|Used to supplment Organisation Name to identify a deparment within the organisation|
|po_box|[paf_pobox](#schemapaf_pobox)|true|none|When the PO Box Number field is populated it will contain PO BOX nnnnnn where n represents the PO Box number. Note that the PO Box details can occasionally consist of a combination of numbers and letters. PO Box Numbers are only allocated to Large Users.|
|post_town|[paf_post_town](#schemapaf_post_town)|true|none|A Post Town is mandatory for delivery of mail to a Delivery Point. This is not necessarily the nearest town geographically, but a routing instruction to the Royal Mail delivery office sorting mail for that Delivery Point. A Post Town will always be present in every address, and for some Localities the Post Town will be the only locality element present.|
|postal_county|[paf_postal_county](#schemapaf_postal_county)|true|none|Postal counties were used for the distribution of mail before the Postcode system was introduced in the 1970s. The Former Postal County was the Administrative County at the time. This data rarely changes. May be empty.|
|postcode|[paf_postcode](#schemapaf_postcode)|true|none|Correctly formatted postcode. Capitalised and spaced.|
|postcode_inward|[paf_postcode_inward](#schemapaf_postcode_inward)|true|none|The second part of a postcode is known as the inward code. e.g. The inward code of ID1 1QD is 1QD.<br><br>The number identifies the sector in the postal district. The number is followed by 2 letters. The letters then define one or more properties in that sector.|
|postcode_outward|[paf_postcode_outward](#schemapaf_postcode_outward)|true|none|The first part of a postcode is known as the outward code. e.g. The outward code of ID1 1QD is ID1. Enables mail to be sorted to the correct local area for delivery. This part of the code contains the area and the district to which the mail is to be delivered, e.g. ‘PO1’, ‘SW1A’ or ‘B23’.|
|postcode_type|[paf_postcode_type](#schemapaf_postcode_type)|true|none|This indicates the type of user. It can only take the values 'S' or 'L' indicating small or large respectively. Large User Postcodes. These are assigned to one single address either due to the large volume of mail received at that address, or because a PO Box or Selectapost service has been set up. Small User Postcodes. These identify a group of Delivery Points.<br><br>On average there are 15 Delivery Points per Postcode. However this can vary between 1 and, in some cases, 100. There will never be more than 100 Delivery Points on a Postcode.|
|premise|[paf_premise](#schemapaf_premise)|true|none|A pre-computed string which sensibly combines building_number, building_name and sub_building_name. building_number, building_name and sub_building_name represent raw data from Royal Mail's and can be difficult to parse if you are unaware of how the Postcode Address File premise fields work together. For this reason, we also provide a pre-computed premise field which intelligently gathers these points into a single, simple premise string. This field is ideal if you want to pull premise information and thoroughfare information separately instead of using our address lines data.|
|su_organisation_indicator|[paf_su_organisation_indicator](#schemapaf_su_organisation_indicator)|true|none|Small User Organisation Indicator can have the values 'Y' or space. A value of 'Y' indicates that a Small User Organisation is present at this address.|
|sub_building_name|[paf_sub_building_name](#schemapaf_sub_building_name)|true|none|When a premise is split into individual units such as flats, apartments or business units. Cannot be present without either building_name or building_number. E.g. Flat 1, A, 10B|
|thoroughfare|[paf_thoroughfare](#schemapaf_thoroughfare)|true|none|Also known as the street or road name. In general each Thoroughfare Name will have a separate Postcode. Longer Thoroughfares with high number ranges often have multiple Postcodes covering the entire length of the road, with breaks at suitable points e.g. junctions or natural breaks in the road.|
|traditional_county|[paf_traditional_county](#schemapaf_traditional_county)|true|none|Traditional counties are provided by the Association of British Counties. It is historical data, and can date from the 1800s. May be empty.|
|udprn|[paf_udprn](#schemapaf_udprn)|true|none|UDPRN stands for ‘Unique Delivery Point Reference Number’. Royal Mail assigns a unique UDPRN code for each premise on PAF. Simple, unique reference number for each Delivery Point. Unlikely to be reused when an address expires.<br><br>Up to 8-digit numeric code.<br><br>A new UDPRN is automatically assigned to each new Delivery Point added to PAF.|
|umprn|[paf_umprn](#schemapaf_umprn)|true|none|A small minority of individual premises (as identified by a UDPRN) may have multiple occupants behind the same letterbox. These are known as Multiple Residence occupants and can be queried via the Multiple Residence dataset. Simple, unique reference number for each Multiple Residence occupant.<br><br>Note: this will be an empty string `""` when not used.|
|uprn|[paf_uprn](#schemapaf_uprn)|true|none|UPRN stands for Unique Property Reference Number and is maintained by the Ordnance Survey (OS). Local governments in the UK have allocated a unique number for each land or property.<br><br>Up to 12 digits in length.<br><br>Multiple Residence premises currently share the same UPRN as the parent premise.<br><br>May not be available for a small number of Great Britain addresses due to longer update cycles for Ordnance Survey's AddressBase datasets. Returns empty string "" in these instances.<br><br>Although UPRN takes an integer format, we encode and transmit this data as strings. As a 12 digit number, the UPRN can exceed the maximum safe integer `Number.MAX_SAFE_INTEGER` in most browsers causing this datapoint to be corrupted.<br><br>Take special care when storing UPRN. As a 12 digit identifier, you will need 64 bits to encode every possible UPRN value. This means applications like Excel will corrupt cells containing UPRN values.|
|ward|[paf_ward](#schemapaf_ward)|true|none|The current administrative/electoral area to which the postcode has been assigned. May be empty for a small number of addresses.|
|country|string|true|none|none|
|country_iso|string|true|none|none|
|country_iso_2|string|true|none|none|
|dataset|string|true|none|none|
|language|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|postcode_type|S|
|postcode_type|L|
|country|England|
|country|Scotland|
|country|Wales|
|country|Northern Ireland|
|country|Jersey|
|country|Guernsey|
|country|Isle of Man|
|country_iso|GBR|
|country_iso|IMN|
|country_iso|JEY|
|country_iso|GGY|
|country_iso_2|GB|
|country_iso_2|IM|
|country_iso_2|JE|
|country_iso_2|GG|
|dataset|nyb|
|language|en|

<h2 id="tocS_PafAddress">PafAddress</h2>
<!-- backwards compatibility -->
<a id="schemapafaddress"></a>
<a id="schema_PafAddress"></a>
<a id="tocSpafaddress"></a>
<a id="tocspafaddress"></a>

```json
{
  "administrative_county": "",
  "building_name": "",
  "building_number": "10",
  "country": "England",
  "country_iso": "GBR",
  "country_iso_2": "GB",
  "county": "London",
  "county_code": "",
  "dataset": "paf",
  "delivery_point_suffix": "1A",
  "department_name": "",
  "dependant_locality": "",
  "dependant_thoroughfare": "",
  "district": "Westminster",
  "double_dependant_locality": "",
  "eastings": "string",
  "id": "paf_8387729",
  "language": "en",
  "latitude": "string",
  "line_1": "Prime Minister &amp; First Lord of Treasury",
  "line_2": "10 Downing Street",
  "line_3": "",
  "longitude": "string",
  "northings": "string",
  "organisation_name": "Prime Minister &amp; First Lord Of The Treasury",
  "po_box": "100",
  "post_town": "London",
  "postal_county": "London",
  "postcode": "SW1A 2AA",
  "postcode_inward": "2AA",
  "postcode_outward": "SW1A",
  "postcode_type": "S",
  "premise": "10",
  "su_organisation_indicator": "Y",
  "sub_building_name": "Flat 1",
  "thoroughfare": "Downing Street",
  "traditional_county": "Greater London",
  "udprn": 23747771,
  "umprn": "string",
  "uprn": "string",
  "ward": "St. James'"
}
```

Standard UK Address. Also known as a Postcode Address File (PAF) address is defined by Royal Mail and updated on a daily cadence.

A PAF Address represents a deliverable endpoint.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|administrative_county|[paf_administrative_county](#schemapaf_administrative_county)|true|none|The current administrative county to which the postcode has been assigned.<br><br>A Unitary Authority name, where one is present. If there is no Unitary Authority, the County name is used. This information is not static, because County boundaries may change due to administrative changes. Data<br><br>source: ONS|
|building_name|[paf_building_name](#schemapaf_building_name)|true|none|Name of residential or commercial premise. <br><br>Examples:<br>  - The Manor<br>  - 1-2<br>  - A<br>  - 12A<br>  - K<br>  - Victoria House|
|building_number|[paf_building_number](#schemapaf_building_number)|true|none|Number to identify premise on a thoroughfare or dependant thoroughfare.|
|country|[paf_country](#schemapaf_country)|true|none|  Full country names (ISO 3166)<br>|
|country_iso|[paf_country_iso](#schemapaf_country_iso)|true|none|  3 letter country code (ISO 3166-1)<br>|
|country_iso_2|[paf_country_iso_2](#schemapaf_country_iso_2)|true|none| 2 letter country code (ISO 3166-1)<br>|
|county|[paf_county](#schemapaf_county)|true|none|Since postal, administrative or traditional counties may not apply to some addresses, the county field is designed to return whatever county data is available. Normally, the postal county is returned. If this is not present, the county field will fall back to the administrative county. If the administrative county is also not present, the county field will fall back to the traditional county. May be empty in cases where no administrative, postal or traditional county present.|
|county_code|string|true|none|Short code representing the county or province. May be empty (`""`)|
|dataset|[paf_dataset](#schemapaf_dataset)|true|none|Indicates the provenance of an address|
|delivery_point_suffix|[paf_delivery_point_suffix](#schemapaf_delivery_point_suffix)|true|none|A unique Royal Mail 2-character code (the first numeric & the second alphabetical), which, when added to the Postcode, enables each live Delivery Point to be uniquely identified. Once the Delivery Point is deleted from PAF the DPS may be reused (although they aren’t reused until all remaining Delivery Points in the range have been allocated). The DPS for a Large User is always '1A' as each Large User has its own Postcode.|
|department_name|[paf_department_name](#schemapaf_department_name)|true|none|Used to supplment Organisation Name to identify a deparment within the organisation.|
|dependant_locality|[paf_dependant_locality](#schemapaf_dependant_locality)|true|none|When the same thoroughfare name reoccurs in a Post town, it may not be possible to make it dependant on a dependant thoroughfare. In this case the thoroughfare is dependant on a locality. For example if we want to find 1 Back Lane in Huddersfield we see that there are three.|
|dependant_thoroughfare|[paf_dependant_thoroughfare](#schemapaf_dependant_thoroughfare)|true|none|Used to supplement thoroughfare. When a thoroughfare name is used twice in the same Post Town, the dependant thoroughfare is added to uniquely indentify a delivery point.|
|district|[paf_district](#schemapaf_district)|true|none|The current district/unitary authority to which the postcode has been assigned.|
|double_dependant_locality|[paf_double_dependant_locality](#schemapaf_double_dependant_locality)|true|none|Used to supplement Dependant Locality. A Double Dependant Locality supplied along with a Dependant Locality if the Dependant Locality exists twice in the same locality.|
|eastings|[Eastings](#schemaeastings)|true|none|Eastings reference using the [Ordnance Survey National Grid reference system](https://en.wikipedia.org/wiki/Ordnance_Survey_National_Grid).<br><br>Northern Ireland Eastings uses the [Irish Grid Reference System](https://en.wikipedia.org/wiki/Irish_grid_reference_system).<br><br>Metres from origin. E.g. `550458`<br><br>Returns an empty string if no location data is available. Otherwise a number is returned.|
|id|[ID](#schemaid)|true|none|Global unique internally generated identifier for an address|
|language|[paf_language](#schemapaf_language)|true|none|Language represented by 2 letter ISO Code (639-1)<br>|
|latitude|[Latitude](#schemalatitude)|true|none|The latitude of the postcode (WGS84/ETRS89).<br><br>Can be a positive or negative decimal. E.g. `51.5083983`.<br><br>Returns an empty string if no location data is available. |
|line_1|[paf_line1](#schemapaf_line1)|true|none|First Address Line. Often contains premise and thoroughfare information. In the case of a commercial premise, the first line is always the full name of the registered organisation. Never empty.|
|line_2|[paf_line2](#schemapaf_line2)|true|none|Second Address Line. Often contains thoroughfare and locality information. May be empty|
|line_3|[paf_line3](#schemapaf_line3)|true|none|Third address line. May be empty.|
|longitude|[Longitude](#schemalongitude)|true|none|The longitude of the postcode (WGS84/ETRS89).<br><br>Can be a positive or negative decimal. E.g. -0.1283983<br><br>Returns an empty string if no location data is available. |
|northings|[Northings](#schemanorthings)|true|none|Northings reference using the [Ordnance Survey National Grid reference system](https://en.wikipedia.org/wiki/Ordnance_Survey_National_Grid)<br><br>Northern Ireland Northings uses the [Irish Grid Reference System](https://en.wikipedia.org/wiki/Irish_grid_reference_system)<br><br>Metres from origin. E.g. `180458`<br><br>Returns an empty string if no location data is available. Otherwise a number is returned  |
|organisation_name|[paf_organisation_name](#schemapaf_organisation_name)|true|none|Used to supplment Organisation Name to identify a deparment within the organisation|
|po_box|[paf_pobox](#schemapaf_pobox)|true|none|When the PO Box Number field is populated it will contain PO BOX nnnnnn where n represents the PO Box number. Note that the PO Box details can occasionally consist of a combination of numbers and letters. PO Box Numbers are only allocated to Large Users.|
|post_town|[paf_post_town](#schemapaf_post_town)|true|none|A Post Town is mandatory for delivery of mail to a Delivery Point. This is not necessarily the nearest town geographically, but a routing instruction to the Royal Mail delivery office sorting mail for that Delivery Point. A Post Town will always be present in every address, and for some Localities the Post Town will be the only locality element present.|
|postal_county|[paf_postal_county](#schemapaf_postal_county)|true|none|Postal counties were used for the distribution of mail before the Postcode system was introduced in the 1970s. The Former Postal County was the Administrative County at the time. This data rarely changes. May be empty.|
|postcode|[paf_postcode](#schemapaf_postcode)|true|none|Correctly formatted postcode. Capitalised and spaced.|
|postcode_inward|[paf_postcode_inward](#schemapaf_postcode_inward)|true|none|The second part of a postcode is known as the inward code. e.g. The inward code of ID1 1QD is 1QD.<br><br>The number identifies the sector in the postal district. The number is followed by 2 letters. The letters then define one or more properties in that sector.|
|postcode_outward|[paf_postcode_outward](#schemapaf_postcode_outward)|true|none|The first part of a postcode is known as the outward code. e.g. The outward code of ID1 1QD is ID1. Enables mail to be sorted to the correct local area for delivery. This part of the code contains the area and the district to which the mail is to be delivered, e.g. ‘PO1’, ‘SW1A’ or ‘B23’.|
|postcode_type|[paf_postcode_type](#schemapaf_postcode_type)|true|none|This indicates the type of user. It can only take the values 'S' or 'L' indicating small or large respectively. Large User Postcodes. These are assigned to one single address either due to the large volume of mail received at that address, or because a PO Box or Selectapost service has been set up. Small User Postcodes. These identify a group of Delivery Points.<br><br>On average there are 15 Delivery Points per Postcode. However this can vary between 1 and, in some cases, 100. There will never be more than 100 Delivery Points on a Postcode.|
|premise|[paf_premise](#schemapaf_premise)|true|none|A pre-computed string which sensibly combines building_number, building_name and sub_building_name. building_number, building_name and sub_building_name represent raw data from Royal Mail's and can be difficult to parse if you are unaware of how the Postcode Address File premise fields work together. For this reason, we also provide a pre-computed premise field which intelligently gathers these points into a single, simple premise string. This field is ideal if you want to pull premise information and thoroughfare information separately instead of using our address lines data.|
|su_organisation_indicator|[paf_su_organisation_indicator](#schemapaf_su_organisation_indicator)|true|none|Small User Organisation Indicator can have the values 'Y' or space. A value of 'Y' indicates that a Small User Organisation is present at this address.|
|sub_building_name|[paf_sub_building_name](#schemapaf_sub_building_name)|true|none|When a premise is split into individual units such as flats, apartments or business units. Cannot be present without either building_name or building_number. E.g. Flat 1, A, 10B|
|thoroughfare|[paf_thoroughfare](#schemapaf_thoroughfare)|true|none|Also known as the street or road name. In general each Thoroughfare Name will have a separate Postcode. Longer Thoroughfares with high number ranges often have multiple Postcodes covering the entire length of the road, with breaks at suitable points e.g. junctions or natural breaks in the road.|
|traditional_county|[paf_traditional_county](#schemapaf_traditional_county)|true|none|Traditional counties are provided by the Association of British Counties. It is historical data, and can date from the 1800s. May be empty.|
|udprn|[paf_udprn](#schemapaf_udprn)|true|none|UDPRN stands for ‘Unique Delivery Point Reference Number’. Royal Mail assigns a unique UDPRN code for each premise on PAF. Simple, unique reference number for each Delivery Point. Unlikely to be reused when an address expires.<br><br>Up to 8-digit numeric code.<br><br>A new UDPRN is automatically assigned to each new Delivery Point added to PAF.|
|umprn|[paf_umprn](#schemapaf_umprn)|true|none|A small minority of individual premises (as identified by a UDPRN) may have multiple occupants behind the same letterbox. These are known as Multiple Residence occupants and can be queried via the Multiple Residence dataset. Simple, unique reference number for each Multiple Residence occupant.<br><br>Note: this will be an empty string `""` when not used.|
|uprn|[paf_uprn](#schemapaf_uprn)|true|none|UPRN stands for Unique Property Reference Number and is maintained by the Ordnance Survey (OS). Local governments in the UK have allocated a unique number for each land or property.<br><br>Up to 12 digits in length.<br><br>Multiple Residence premises currently share the same UPRN as the parent premise.<br><br>May not be available for a small number of Great Britain addresses due to longer update cycles for Ordnance Survey's AddressBase datasets. Returns empty string "" in these instances.<br><br>Although UPRN takes an integer format, we encode and transmit this data as strings. As a 12 digit number, the UPRN can exceed the maximum safe integer `Number.MAX_SAFE_INTEGER` in most browsers causing this datapoint to be corrupted.<br><br>Take special care when storing UPRN. As a 12 digit identifier, you will need 64 bits to encode every possible UPRN value. This means applications like Excel will corrupt cells containing UPRN values.|
|ward|[paf_ward](#schemapaf_ward)|true|none|The current administrative/electoral area to which the postcode has been assigned. May be empty for a small number of addresses.|
|country|string|true|none|none|
|country_iso|string|true|none|none|
|country_iso_2|string|true|none|none|
|dataset|string|true|none|none|
|language|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|postcode_type|S|
|postcode_type|L|
|country|England|
|country|Scotland|
|country|Wales|
|country|Northern Ireland|
|country|Jersey|
|country|Guernsey|
|country|Isle of Man|
|country_iso|GBR|
|country_iso|IMN|
|country_iso|JEY|
|country_iso|GGY|
|country_iso_2|GB|
|country_iso_2|IM|
|country_iso_2|JE|
|country_iso_2|GG|
|dataset|paf|
|language|en|

<h2 id="tocS_PafAliasAddress">PafAliasAddress</h2>
<!-- backwards compatibility -->
<a id="schemapafaliasaddress"></a>
<a id="schema_PafAliasAddress"></a>
<a id="tocSpafaliasaddress"></a>
<a id="tocspafaliasaddress"></a>

```json
{
  "administrative_county": "",
  "building_name": "",
  "building_number": "10",
  "country": "England",
  "country_iso": "GBR",
  "country_iso_2": "GB",
  "county": "London",
  "county_code": "",
  "dataset": "pafa",
  "delivery_point_suffix": "1A",
  "department_name": "",
  "dependant_locality": "",
  "dependant_thoroughfare": "",
  "district": "Westminster",
  "double_dependant_locality": "",
  "eastings": "string",
  "id": "paf_8387729",
  "language": "en",
  "latitude": "string",
  "line_1": "Prime Minister &amp; First Lord of Treasury",
  "line_2": "10 Downing Street",
  "line_3": "",
  "longitude": "string",
  "northings": "string",
  "organisation_name": "Prime Minister &amp; First Lord Of The Treasury",
  "po_box": "100",
  "post_town": "London",
  "postal_county": "London",
  "postcode": "SW1A 2AA",
  "postcode_inward": "2AA",
  "postcode_outward": "SW1A",
  "postcode_type": "S",
  "premise": "10",
  "su_organisation_indicator": "Y",
  "sub_building_name": "Flat 1",
  "thoroughfare": "Downing Street",
  "traditional_county": "Greater London",
  "udprn": 23747771,
  "umprn": "string",
  "uprn": "string",
  "ward": "St. James'"
}
```

PAF Aliases addresses are alternate ways to present an address already found on PAF.

Alias data is information the public chooses to use when addressing mail, but which isn’t actually required for delivery purposes.  The Alias data contains records of alternative address details that are included in the address but not necessarily needed for delivery purposes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|administrative_county|[paf_administrative_county](#schemapaf_administrative_county)|true|none|The current administrative county to which the postcode has been assigned.<br><br>A Unitary Authority name, where one is present. If there is no Unitary Authority, the County name is used. This information is not static, because County boundaries may change due to administrative changes. Data<br><br>source: ONS|
|building_name|[paf_building_name](#schemapaf_building_name)|true|none|Name of residential or commercial premise. <br><br>Examples:<br>  - The Manor<br>  - 1-2<br>  - A<br>  - 12A<br>  - K<br>  - Victoria House|
|building_number|[paf_building_number](#schemapaf_building_number)|true|none|Number to identify premise on a thoroughfare or dependant thoroughfare.|
|country|[paf_country](#schemapaf_country)|true|none|  Full country names (ISO 3166)<br>|
|country_iso|[paf_country_iso](#schemapaf_country_iso)|true|none|  3 letter country code (ISO 3166-1)<br>|
|country_iso_2|[paf_country_iso_2](#schemapaf_country_iso_2)|true|none| 2 letter country code (ISO 3166-1)<br>|
|county|[paf_county](#schemapaf_county)|true|none|Since postal, administrative or traditional counties may not apply to some addresses, the county field is designed to return whatever county data is available. Normally, the postal county is returned. If this is not present, the county field will fall back to the administrative county. If the administrative county is also not present, the county field will fall back to the traditional county. May be empty in cases where no administrative, postal or traditional county present.|
|county_code|string|true|none|Short code representing the county or province. May be empty (`""`)|
|dataset|[paf_dataset](#schemapaf_dataset)|true|none|Indicates the provenance of an address|
|delivery_point_suffix|[paf_delivery_point_suffix](#schemapaf_delivery_point_suffix)|true|none|A unique Royal Mail 2-character code (the first numeric & the second alphabetical), which, when added to the Postcode, enables each live Delivery Point to be uniquely identified. Once the Delivery Point is deleted from PAF the DPS may be reused (although they aren’t reused until all remaining Delivery Points in the range have been allocated). The DPS for a Large User is always '1A' as each Large User has its own Postcode.|
|department_name|[paf_department_name](#schemapaf_department_name)|true|none|Used to supplment Organisation Name to identify a deparment within the organisation.|
|dependant_locality|[paf_dependant_locality](#schemapaf_dependant_locality)|true|none|When the same thoroughfare name reoccurs in a Post town, it may not be possible to make it dependant on a dependant thoroughfare. In this case the thoroughfare is dependant on a locality. For example if we want to find 1 Back Lane in Huddersfield we see that there are three.|
|dependant_thoroughfare|[paf_dependant_thoroughfare](#schemapaf_dependant_thoroughfare)|true|none|Used to supplement thoroughfare. When a thoroughfare name is used twice in the same Post Town, the dependant thoroughfare is added to uniquely indentify a delivery point.|
|district|[paf_district](#schemapaf_district)|true|none|The current district/unitary authority to which the postcode has been assigned.|
|double_dependant_locality|[paf_double_dependant_locality](#schemapaf_double_dependant_locality)|true|none|Used to supplement Dependant Locality. A Double Dependant Locality supplied along with a Dependant Locality if the Dependant Locality exists twice in the same locality.|
|eastings|[Eastings](#schemaeastings)|true|none|Eastings reference using the [Ordnance Survey National Grid reference system](https://en.wikipedia.org/wiki/Ordnance_Survey_National_Grid).<br><br>Northern Ireland Eastings uses the [Irish Grid Reference System](https://en.wikipedia.org/wiki/Irish_grid_reference_system).<br><br>Metres from origin. E.g. `550458`<br><br>Returns an empty string if no location data is available. Otherwise a number is returned.|
|id|[ID](#schemaid)|true|none|Global unique internally generated identifier for an address|
|language|[paf_language](#schemapaf_language)|true|none|Language represented by 2 letter ISO Code (639-1)<br>|
|latitude|[Latitude](#schemalatitude)|true|none|The latitude of the postcode (WGS84/ETRS89).<br><br>Can be a positive or negative decimal. E.g. `51.5083983`.<br><br>Returns an empty string if no location data is available. |
|line_1|[paf_line1](#schemapaf_line1)|true|none|First Address Line. Often contains premise and thoroughfare information. In the case of a commercial premise, the first line is always the full name of the registered organisation. Never empty.|
|line_2|[paf_line2](#schemapaf_line2)|true|none|Second Address Line. Often contains thoroughfare and locality information. May be empty|
|line_3|[paf_line3](#schemapaf_line3)|true|none|Third address line. May be empty.|
|longitude|[Longitude](#schemalongitude)|true|none|The longitude of the postcode (WGS84/ETRS89).<br><br>Can be a positive or negative decimal. E.g. -0.1283983<br><br>Returns an empty string if no location data is available. |
|northings|[Northings](#schemanorthings)|true|none|Northings reference using the [Ordnance Survey National Grid reference system](https://en.wikipedia.org/wiki/Ordnance_Survey_National_Grid)<br><br>Northern Ireland Northings uses the [Irish Grid Reference System](https://en.wikipedia.org/wiki/Irish_grid_reference_system)<br><br>Metres from origin. E.g. `180458`<br><br>Returns an empty string if no location data is available. Otherwise a number is returned  |
|organisation_name|[paf_organisation_name](#schemapaf_organisation_name)|true|none|Used to supplment Organisation Name to identify a deparment within the organisation|
|po_box|[paf_pobox](#schemapaf_pobox)|true|none|When the PO Box Number field is populated it will contain PO BOX nnnnnn where n represents the PO Box number. Note that the PO Box details can occasionally consist of a combination of numbers and letters. PO Box Numbers are only allocated to Large Users.|
|post_town|[paf_post_town](#schemapaf_post_town)|true|none|A Post Town is mandatory for delivery of mail to a Delivery Point. This is not necessarily the nearest town geographically, but a routing instruction to the Royal Mail delivery office sorting mail for that Delivery Point. A Post Town will always be present in every address, and for some Localities the Post Town will be the only locality element present.|
|postal_county|[paf_postal_county](#schemapaf_postal_county)|true|none|Postal counties were used for the distribution of mail before the Postcode system was introduced in the 1970s. The Former Postal County was the Administrative County at the time. This data rarely changes. May be empty.|
|postcode|[paf_postcode](#schemapaf_postcode)|true|none|Correctly formatted postcode. Capitalised and spaced.|
|postcode_inward|[paf_postcode_inward](#schemapaf_postcode_inward)|true|none|The second part of a postcode is known as the inward code. e.g. The inward code of ID1 1QD is 1QD.<br><br>The number identifies the sector in the postal district. The number is followed by 2 letters. The letters then define one or more properties in that sector.|
|postcode_outward|[paf_postcode_outward](#schemapaf_postcode_outward)|true|none|The first part of a postcode is known as the outward code. e.g. The outward code of ID1 1QD is ID1. Enables mail to be sorted to the correct local area for delivery. This part of the code contains the area and the district to which the mail is to be delivered, e.g. ‘PO1’, ‘SW1A’ or ‘B23’.|
|postcode_type|[paf_postcode_type](#schemapaf_postcode_type)|true|none|This indicates the type of user. It can only take the values 'S' or 'L' indicating small or large respectively. Large User Postcodes. These are assigned to one single address either due to the large volume of mail received at that address, or because a PO Box or Selectapost service has been set up. Small User Postcodes. These identify a group of Delivery Points.<br><br>On average there are 15 Delivery Points per Postcode. However this can vary between 1 and, in some cases, 100. There will never be more than 100 Delivery Points on a Postcode.|
|premise|[paf_premise](#schemapaf_premise)|true|none|A pre-computed string which sensibly combines building_number, building_name and sub_building_name. building_number, building_name and sub_building_name represent raw data from Royal Mail's and can be difficult to parse if you are unaware of how the Postcode Address File premise fields work together. For this reason, we also provide a pre-computed premise field which intelligently gathers these points into a single, simple premise string. This field is ideal if you want to pull premise information and thoroughfare information separately instead of using our address lines data.|
|su_organisation_indicator|[paf_su_organisation_indicator](#schemapaf_su_organisation_indicator)|true|none|Small User Organisation Indicator can have the values 'Y' or space. A value of 'Y' indicates that a Small User Organisation is present at this address.|
|sub_building_name|[paf_sub_building_name](#schemapaf_sub_building_name)|true|none|When a premise is split into individual units such as flats, apartments or business units. Cannot be present without either building_name or building_number. E.g. Flat 1, A, 10B|
|thoroughfare|[paf_thoroughfare](#schemapaf_thoroughfare)|true|none|Also known as the street or road name. In general each Thoroughfare Name will have a separate Postcode. Longer Thoroughfares with high number ranges often have multiple Postcodes covering the entire length of the road, with breaks at suitable points e.g. junctions or natural breaks in the road.|
|traditional_county|[paf_traditional_county](#schemapaf_traditional_county)|true|none|Traditional counties are provided by the Association of British Counties. It is historical data, and can date from the 1800s. May be empty.|
|udprn|[paf_udprn](#schemapaf_udprn)|true|none|UDPRN stands for ‘Unique Delivery Point Reference Number’. Royal Mail assigns a unique UDPRN code for each premise on PAF. Simple, unique reference number for each Delivery Point. Unlikely to be reused when an address expires.<br><br>Up to 8-digit numeric code.<br><br>A new UDPRN is automatically assigned to each new Delivery Point added to PAF.|
|umprn|[paf_umprn](#schemapaf_umprn)|true|none|A small minority of individual premises (as identified by a UDPRN) may have multiple occupants behind the same letterbox. These are known as Multiple Residence occupants and can be queried via the Multiple Residence dataset. Simple, unique reference number for each Multiple Residence occupant.<br><br>Note: this will be an empty string `""` when not used.|
|uprn|[paf_uprn](#schemapaf_uprn)|true|none|UPRN stands for Unique Property Reference Number and is maintained by the Ordnance Survey (OS). Local governments in the UK have allocated a unique number for each land or property.<br><br>Up to 12 digits in length.<br><br>Multiple Residence premises currently share the same UPRN as the parent premise.<br><br>May not be available for a small number of Great Britain addresses due to longer update cycles for Ordnance Survey's AddressBase datasets. Returns empty string "" in these instances.<br><br>Although UPRN takes an integer format, we encode and transmit this data as strings. As a 12 digit number, the UPRN can exceed the maximum safe integer `Number.MAX_SAFE_INTEGER` in most browsers causing this datapoint to be corrupted.<br><br>Take special care when storing UPRN. As a 12 digit identifier, you will need 64 bits to encode every possible UPRN value. This means applications like Excel will corrupt cells containing UPRN values.|
|ward|[paf_ward](#schemapaf_ward)|true|none|The current administrative/electoral area to which the postcode has been assigned. May be empty for a small number of addresses.|
|country|string|true|none|none|
|country_iso|string|true|none|none|
|country_iso_2|string|true|none|none|
|dataset|string|true|none|none|
|language|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|postcode_type|S|
|postcode_type|L|
|country|England|
|country|Scotland|
|country|Wales|
|country|Northern Ireland|
|country|Jersey|
|country|Guernsey|
|country|Isle of Man|
|country_iso|GBR|
|country_iso|IMN|
|country_iso|JEY|
|country_iso|GGY|
|country_iso_2|GB|
|country_iso_2|IM|
|country_iso_2|JE|
|country_iso_2|GG|
|dataset|pafa|
|language|en|

<h2 id="tocS_PafBase">PafBase</h2>
<!-- backwards compatibility -->
<a id="schemapafbase"></a>
<a id="schema_PafBase"></a>
<a id="tocSpafbase"></a>
<a id="tocspafbase"></a>

```json
{
  "administrative_county": "",
  "building_name": "",
  "building_number": "10",
  "country": "England",
  "country_iso": "string",
  "country_iso_2": "string",
  "county": "London",
  "county_code": "",
  "dataset": "string",
  "delivery_point_suffix": "1A",
  "department_name": "",
  "dependant_locality": "",
  "dependant_thoroughfare": "",
  "district": "Westminster",
  "double_dependant_locality": "",
  "eastings": "string",
  "id": "paf_8387729",
  "language": "string",
  "latitude": "string",
  "line_1": "Prime Minister &amp; First Lord of Treasury",
  "line_2": "10 Downing Street",
  "line_3": "",
  "longitude": "string",
  "northings": "string",
  "organisation_name": "Prime Minister &amp; First Lord Of The Treasury",
  "po_box": "100",
  "post_town": "London",
  "postal_county": "London",
  "postcode": "SW1A 2AA",
  "postcode_inward": "2AA",
  "postcode_outward": "SW1A",
  "postcode_type": "S",
  "premise": "10",
  "su_organisation_indicator": "Y",
  "sub_building_name": "Flat 1",
  "thoroughfare": "Downing Street",
  "traditional_county": "Greater London",
  "udprn": 23747771,
  "umprn": "string",
  "uprn": "string",
  "ward": "St. James'"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|administrative_county|[paf_administrative_county](#schemapaf_administrative_county)|true|none|The current administrative county to which the postcode has been assigned.<br><br>A Unitary Authority name, where one is present. If there is no Unitary Authority, the County name is used. This information is not static, because County boundaries may change due to administrative changes. Data<br><br>source: ONS|
|building_name|[paf_building_name](#schemapaf_building_name)|true|none|Name of residential or commercial premise. <br><br>Examples:<br>  - The Manor<br>  - 1-2<br>  - A<br>  - 12A<br>  - K<br>  - Victoria House|
|building_number|[paf_building_number](#schemapaf_building_number)|true|none|Number to identify premise on a thoroughfare or dependant thoroughfare.|
|country|[paf_country](#schemapaf_country)|true|none|  Full country names (ISO 3166)<br>|
|country_iso|[paf_country_iso](#schemapaf_country_iso)|true|none|  3 letter country code (ISO 3166-1)<br>|
|country_iso_2|[paf_country_iso_2](#schemapaf_country_iso_2)|true|none| 2 letter country code (ISO 3166-1)<br>|
|county|[paf_county](#schemapaf_county)|true|none|Since postal, administrative or traditional counties may not apply to some addresses, the county field is designed to return whatever county data is available. Normally, the postal county is returned. If this is not present, the county field will fall back to the administrative county. If the administrative county is also not present, the county field will fall back to the traditional county. May be empty in cases where no administrative, postal or traditional county present.|
|county_code|string|true|none|Short code representing the county or province. May be empty (`""`)|
|dataset|[paf_dataset](#schemapaf_dataset)|true|none|Indicates the provenance of an address|
|delivery_point_suffix|[paf_delivery_point_suffix](#schemapaf_delivery_point_suffix)|true|none|A unique Royal Mail 2-character code (the first numeric & the second alphabetical), which, when added to the Postcode, enables each live Delivery Point to be uniquely identified. Once the Delivery Point is deleted from PAF the DPS may be reused (although they aren’t reused until all remaining Delivery Points in the range have been allocated). The DPS for a Large User is always '1A' as each Large User has its own Postcode.|
|department_name|[paf_department_name](#schemapaf_department_name)|true|none|Used to supplment Organisation Name to identify a deparment within the organisation.|
|dependant_locality|[paf_dependant_locality](#schemapaf_dependant_locality)|true|none|When the same thoroughfare name reoccurs in a Post town, it may not be possible to make it dependant on a dependant thoroughfare. In this case the thoroughfare is dependant on a locality. For example if we want to find 1 Back Lane in Huddersfield we see that there are three.|
|dependant_thoroughfare|[paf_dependant_thoroughfare](#schemapaf_dependant_thoroughfare)|true|none|Used to supplement thoroughfare. When a thoroughfare name is used twice in the same Post Town, the dependant thoroughfare is added to uniquely indentify a delivery point.|
|district|[paf_district](#schemapaf_district)|true|none|The current district/unitary authority to which the postcode has been assigned.|
|double_dependant_locality|[paf_double_dependant_locality](#schemapaf_double_dependant_locality)|true|none|Used to supplement Dependant Locality. A Double Dependant Locality supplied along with a Dependant Locality if the Dependant Locality exists twice in the same locality.|
|eastings|[Eastings](#schemaeastings)|true|none|Eastings reference using the [Ordnance Survey National Grid reference system](https://en.wikipedia.org/wiki/Ordnance_Survey_National_Grid).<br><br>Northern Ireland Eastings uses the [Irish Grid Reference System](https://en.wikipedia.org/wiki/Irish_grid_reference_system).<br><br>Metres from origin. E.g. `550458`<br><br>Returns an empty string if no location data is available. Otherwise a number is returned.|
|id|[ID](#schemaid)|true|none|Global unique internally generated identifier for an address|
|language|[paf_language](#schemapaf_language)|true|none|Language represented by 2 letter ISO Code (639-1)<br>|
|latitude|[Latitude](#schemalatitude)|true|none|The latitude of the postcode (WGS84/ETRS89).<br><br>Can be a positive or negative decimal. E.g. `51.5083983`.<br><br>Returns an empty string if no location data is available. |
|line_1|[paf_line1](#schemapaf_line1)|true|none|First Address Line. Often contains premise and thoroughfare information. In the case of a commercial premise, the first line is always the full name of the registered organisation. Never empty.|
|line_2|[paf_line2](#schemapaf_line2)|true|none|Second Address Line. Often contains thoroughfare and locality information. May be empty|
|line_3|[paf_line3](#schemapaf_line3)|true|none|Third address line. May be empty.|
|longitude|[Longitude](#schemalongitude)|true|none|The longitude of the postcode (WGS84/ETRS89).<br><br>Can be a positive or negative decimal. E.g. -0.1283983<br><br>Returns an empty string if no location data is available. |
|northings|[Northings](#schemanorthings)|true|none|Northings reference using the [Ordnance Survey National Grid reference system](https://en.wikipedia.org/wiki/Ordnance_Survey_National_Grid)<br><br>Northern Ireland Northings uses the [Irish Grid Reference System](https://en.wikipedia.org/wiki/Irish_grid_reference_system)<br><br>Metres from origin. E.g. `180458`<br><br>Returns an empty string if no location data is available. Otherwise a number is returned  |
|organisation_name|[paf_organisation_name](#schemapaf_organisation_name)|true|none|Used to supplment Organisation Name to identify a deparment within the organisation|
|po_box|[paf_pobox](#schemapaf_pobox)|true|none|When the PO Box Number field is populated it will contain PO BOX nnnnnn where n represents the PO Box number. Note that the PO Box details can occasionally consist of a combination of numbers and letters. PO Box Numbers are only allocated to Large Users.|
|post_town|[paf_post_town](#schemapaf_post_town)|true|none|A Post Town is mandatory for delivery of mail to a Delivery Point. This is not necessarily the nearest town geographically, but a routing instruction to the Royal Mail delivery office sorting mail for that Delivery Point. A Post Town will always be present in every address, and for some Localities the Post Town will be the only locality element present.|
|postal_county|[paf_postal_county](#schemapaf_postal_county)|true|none|Postal counties were used for the distribution of mail before the Postcode system was introduced in the 1970s. The Former Postal County was the Administrative County at the time. This data rarely changes. May be empty.|
|postcode|[paf_postcode](#schemapaf_postcode)|true|none|Correctly formatted postcode. Capitalised and spaced.|
|postcode_inward|[paf_postcode_inward](#schemapaf_postcode_inward)|true|none|The second part of a postcode is known as the inward code. e.g. The inward code of ID1 1QD is 1QD.<br><br>The number identifies the sector in the postal district. The number is followed by 2 letters. The letters then define one or more properties in that sector.|
|postcode_outward|[paf_postcode_outward](#schemapaf_postcode_outward)|true|none|The first part of a postcode is known as the outward code. e.g. The outward code of ID1 1QD is ID1. Enables mail to be sorted to the correct local area for delivery. This part of the code contains the area and the district to which the mail is to be delivered, e.g. ‘PO1’, ‘SW1A’ or ‘B23’.|
|postcode_type|[paf_postcode_type](#schemapaf_postcode_type)|true|none|This indicates the type of user. It can only take the values 'S' or 'L' indicating small or large respectively. Large User Postcodes. These are assigned to one single address either due to the large volume of mail received at that address, or because a PO Box or Selectapost service has been set up. Small User Postcodes. These identify a group of Delivery Points.<br><br>On average there are 15 Delivery Points per Postcode. However this can vary between 1 and, in some cases, 100. There will never be more than 100 Delivery Points on a Postcode.|
|premise|[paf_premise](#schemapaf_premise)|true|none|A pre-computed string which sensibly combines building_number, building_name and sub_building_name. building_number, building_name and sub_building_name represent raw data from Royal Mail's and can be difficult to parse if you are unaware of how the Postcode Address File premise fields work together. For this reason, we also provide a pre-computed premise field which intelligently gathers these points into a single, simple premise string. This field is ideal if you want to pull premise information and thoroughfare information separately instead of using our address lines data.|
|su_organisation_indicator|[paf_su_organisation_indicator](#schemapaf_su_organisation_indicator)|true|none|Small User Organisation Indicator can have the values 'Y' or space. A value of 'Y' indicates that a Small User Organisation is present at this address.|
|sub_building_name|[paf_sub_building_name](#schemapaf_sub_building_name)|true|none|When a premise is split into individual units such as flats, apartments or business units. Cannot be present without either building_name or building_number. E.g. Flat 1, A, 10B|
|thoroughfare|[paf_thoroughfare](#schemapaf_thoroughfare)|true|none|Also known as the street or road name. In general each Thoroughfare Name will have a separate Postcode. Longer Thoroughfares with high number ranges often have multiple Postcodes covering the entire length of the road, with breaks at suitable points e.g. junctions or natural breaks in the road.|
|traditional_county|[paf_traditional_county](#schemapaf_traditional_county)|true|none|Traditional counties are provided by the Association of British Counties. It is historical data, and can date from the 1800s. May be empty.|
|udprn|[paf_udprn](#schemapaf_udprn)|true|none|UDPRN stands for ‘Unique Delivery Point Reference Number’. Royal Mail assigns a unique UDPRN code for each premise on PAF. Simple, unique reference number for each Delivery Point. Unlikely to be reused when an address expires.<br><br>Up to 8-digit numeric code.<br><br>A new UDPRN is automatically assigned to each new Delivery Point added to PAF.|
|umprn|[paf_umprn](#schemapaf_umprn)|true|none|A small minority of individual premises (as identified by a UDPRN) may have multiple occupants behind the same letterbox. These are known as Multiple Residence occupants and can be queried via the Multiple Residence dataset. Simple, unique reference number for each Multiple Residence occupant.<br><br>Note: this will be an empty string `""` when not used.|
|uprn|[paf_uprn](#schemapaf_uprn)|true|none|UPRN stands for Unique Property Reference Number and is maintained by the Ordnance Survey (OS). Local governments in the UK have allocated a unique number for each land or property.<br><br>Up to 12 digits in length.<br><br>Multiple Residence premises currently share the same UPRN as the parent premise.<br><br>May not be available for a small number of Great Britain addresses due to longer update cycles for Ordnance Survey's AddressBase datasets. Returns empty string "" in these instances.<br><br>Although UPRN takes an integer format, we encode and transmit this data as strings. As a 12 digit number, the UPRN can exceed the maximum safe integer `Number.MAX_SAFE_INTEGER` in most browsers causing this datapoint to be corrupted.<br><br>Take special care when storing UPRN. As a 12 digit identifier, you will need 64 bits to encode every possible UPRN value. This means applications like Excel will corrupt cells containing UPRN values.|
|ward|[paf_ward](#schemapaf_ward)|true|none|The current administrative/electoral area to which the postcode has been assigned. May be empty for a small number of addresses.|

#### Enumerated Values

|Property|Value|
|---|---|
|postcode_type|S|
|postcode_type|L|

<h2 id="tocS_PageParam">PageParam</h2>
<!-- backwards compatibility -->
<a id="schemapageparam"></a>
<a id="schema_PageParam"></a>
<a id="tocSpageparam"></a>
<a id="tocspageparam"></a>

```json
0
```

0 indexed indicator of the page of results to receive. Virtually all postcode results are returned on page 0. 

A small number of Multiple Residence postcodes may need pagination (i.e. have more than 100 premises).

<h2 id="tocS_PhoneNumber">PhoneNumber</h2>
<!-- backwards compatibility -->
<a id="schemaphonenumber"></a>
<a id="schema_PhoneNumber"></a>
<a id="tocSphonenumber"></a>
<a id="tocsphonenumber"></a>

```json
{
  "country": "United Kingdom",
  "current_carrier": {
    "country": "GB",
    "name": "BT Group",
    "network_code": "234",
    "network_type": "mobile"
  },
  "international_format": "442071128019",
  "iso_country": "GBR",
  "iso_country_2": "GB",
  "national_format": "020 7112 8019",
  "original_carrier": {
    "country": "GB",
    "name": "BT Group",
    "network_code": "234",
    "network_type": "mobile"
  },
  "valid": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|country|string|true|none|Full country name|
|current_carrier|[Carrier](#schemacarrier)|true|none|Representation of current phone carrier information like network code, name, country, network type|
|international_format|string|true|none|Phone number formatted to international standard|
|iso_country|string|true|none|Country code in 3 letter ISO format|
|iso_country_2|string|true|none|Country code in 2 letter ISO format|
|national_format|string|true|none|Phone number formatted to local standard|
|original_carrier|[Carrier](#schemacarrier)|true|none|Representation of original phone carrier information like network code, name, country, network type|
|valid|boolean|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|valid|true|

<h2 id="tocS_PhoneNumberResponse">PhoneNumberResponse</h2>
<!-- backwards compatibility -->
<a id="schemaphonenumberresponse"></a>
<a id="schema_PhoneNumberResponse"></a>
<a id="tocSphonenumberresponse"></a>
<a id="tocsphonenumberresponse"></a>

```json
{
  "code": 2000,
  "message": "Success",
  "result": {
    "country": "United Kingdom",
    "current_carrier": {
      "country": "GB",
      "name": "BT Group",
      "network_code": "234",
      "network_type": "mobile"
    },
    "international_format": "442071128019",
    "iso_country": "GBR",
    "iso_country_2": "GB",
    "national_format": "020 7112 8019",
    "original_carrier": {
      "country": "GB",
      "name": "BT Group",
      "network_code": "234",
      "network_type": "mobile"
    },
    "valid": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|true|none|none|
|message|string|true|none|none|
|result|[PhoneNumber](#schemaphonenumber) \| [InvalidPhoneNumber](#schemainvalidphonenumber)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|code|2000|
|message|Success|

<h2 id="tocS_Place">Place</h2>
<!-- backwards compatibility -->
<a id="schemaplace"></a>
<a id="schema_Place"></a>
<a id="tocSplace"></a>
<a id="tocsplace"></a>

```json
{
  "country_iso": "GBR",
  "dataset": "geonames",
  "descriptive_name": "London, United Kingdom",
  "id": "geonames_5353",
  "language": "en",
  "latitude": "string",
  "longitude": "string",
  "name": "London",
  "native": {
    "admin1_code": "ENG",
    "admin1_geonameid": 5353,
    "admin1_name": "England",
    "admin2_code": "06",
    "admin2_geonameid": 5353,
    "admin2_name": "England",
    "admin3_code": "08",
    "admin4_code": "07",
    "alternatenames": [
      "London"
    ],
    "asciiname": "London",
    "cc2": [
      "IE"
    ],
    "country_code": "GB",
    "dataset": "geonames",
    "dem": 32,
    "elevation": 0,
    "feature_class": "A",
    "feature_code": "ADM1",
    "geonameid": 5353,
    "id": "geonames_5353",
    "latitude": "string",
    "longitude": "string",
    "modification_date": "2015-03-09",
    "name": "London",
    "population": "7392832",
    "timezone": "Europe/London"
  }
}
```

Represents a geographical place

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|country_iso|[place_country_iso](#schemaplace_country_iso)|true|none|  3 letter country code (ISO 3166-1)<br>|
|dataset|string|true|none|Indicates the provenance of a place.<br><br>  - `geonames` GeoNames place|
|descriptive_name|[place_descriptive_name](#schemaplace_descriptive_name)|true|none|Longer form description of the place.<br>|
|id|string|true|none|Global unique internally generated identifier for a place|
|language|[Language](#schemalanguage)|true|none|Language represented by 2 letter ISO Code (639-1)<br>|
|latitude|[Latitude](#schemalatitude)|true|none|The latitude of the postcode (WGS84/ETRS89).<br><br>Can be a positive or negative decimal. E.g. `51.5083983`.<br><br>Returns an empty string if no location data is available. |
|longitude|[Longitude](#schemalongitude)|true|none|The longitude of the postcode (WGS84/ETRS89).<br><br>Can be a positive or negative decimal. E.g. -0.1283983<br><br>Returns an empty string if no location data is available. |
|name|[place_name](#schemaplace_name)|true|none|Place name<br>|
|native|[GeonamesPlace](#schemageonamesplace)|false|none|Native representation of a place|

#### Enumerated Values

|Property|Value|
|---|---|
|dataset|geonames|
|language|en|
|language|cy|
|language|ga|

<h2 id="tocS_PlaceResponse">PlaceResponse</h2>
<!-- backwards compatibility -->
<a id="schemaplaceresponse"></a>
<a id="schema_PlaceResponse"></a>
<a id="tocSplaceresponse"></a>
<a id="tocsplaceresponse"></a>

```json
{
  "code": 2000,
  "message": "Success",
  "result": {
    "hits": [
      {
        "country_iso": "GBR",
        "descriptive_name": "London, United Kingdom",
        "id": "geonames_5324",
        "name": "London"
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|true|none|none|
|message|string|true|none|none|
|result|object|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|code|2000|
|message|Success|

<h2 id="tocS_PlaceSuggestion">PlaceSuggestion</h2>
<!-- backwards compatibility -->
<a id="schemaplacesuggestion"></a>
<a id="schema_PlaceSuggestion"></a>
<a id="tocSplacesuggestion"></a>
<a id="tocsplacesuggestion"></a>

```json
{
  "country_iso": "GBR",
  "descriptive_name": "London, United Kingdom",
  "id": "geonames_5324",
  "name": "London"
}
```

Represents a possible place given an autocomplete query.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|country_iso|[place_country_iso](#schemaplace_country_iso)|true|none|  3 letter country code (ISO 3166-1)<br>|
|descriptive_name|[place_descriptive_name](#schemaplace_descriptive_name)|true|none|Longer form description of the place.<br>|
|id|[place_id](#schemaplace_id)|true|none|Unique identifier for place<br>|
|name|[place_name](#schemaplace_name)|true|none|Place name<br>|

<h2 id="tocS_PostTownParam">PostTownParam</h2>
<!-- backwards compatibility -->
<a id="schemaposttownparam"></a>
<a id="schema_PostTownParam"></a>
<a id="tocSposttownparam"></a>
<a id="tocsposttownparam"></a>

```json
"London"
```

Filter by town.

<h2 id="tocS_PostcodeAreaParam">PostcodeAreaParam</h2>
<!-- backwards compatibility -->
<a id="schemapostcodeareaparam"></a>
<a id="schema_PostcodeAreaParam"></a>
<a id="tocSpostcodeareaparam"></a>
<a id="tocspostcodeareaparam"></a>

```json
"SW"
```

Filter by postcode. Can be combined with query to perform a postcode + building number/name search.

<h2 id="tocS_PostcodeNotFoundResponse">PostcodeNotFoundResponse</h2>
<!-- backwards compatibility -->
<a id="schemapostcodenotfoundresponse"></a>
<a id="schema_PostcodeNotFoundResponse"></a>
<a id="tocSpostcodenotfoundresponse"></a>
<a id="tocspostcodenotfoundresponse"></a>

```json
{
  "code": 4040,
  "message": "Postcode not found",
  "suggestions": [
    "SN13 0SF"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|true|none|none|
|message|string|true|none|none|
|suggestions|[string]|true|none|A list of alternate nearest matching postcodes you can try|

#### Enumerated Values

|Property|Value|
|---|---|
|code|4040|
|message|Postcode not found|

<h2 id="tocS_PostcodeOutwardParam">PostcodeOutwardParam</h2>
<!-- backwards compatibility -->
<a id="schemapostcodeoutwardparam"></a>
<a id="schema_PostcodeOutwardParam"></a>
<a id="tocSpostcodeoutwardparam"></a>
<a id="tocspostcodeoutwardparam"></a>

```json
"1AA"
```

Filter by outward code.

<h2 id="tocS_PostcodeParam">PostcodeParam</h2>
<!-- backwards compatibility -->
<a id="schemapostcodeparam"></a>
<a id="schema_PostcodeParam"></a>
<a id="tocSpostcodeparam"></a>
<a id="tocspostcodeparam"></a>

```json
"SW1A 2AA"
```

Filter by postcode. Can be combined with query to perform a postcode + building number/name search.

<h2 id="tocS_PostcodeResponse">PostcodeResponse</h2>
<!-- backwards compatibility -->
<a id="schemapostcoderesponse"></a>
<a id="schema_PostcodeResponse"></a>
<a id="tocSpostcoderesponse"></a>
<a id="tocspostcoderesponse"></a>

```json
{
  "code": 2000,
  "message": "Success",
  "result": [
    {
      "administrative_county": "",
      "building_name": "",
      "building_number": "10",
      "country": "England",
      "country_iso": "GBR",
      "country_iso_2": "GB",
      "county": "London",
      "county_code": "",
      "dataset": "paf",
      "delivery_point_suffix": "1A",
      "department_name": "",
      "dependant_locality": "",
      "dependant_thoroughfare": "",
      "district": "Westminster",
      "double_dependant_locality": "",
      "eastings": "string",
      "id": "paf_8387729",
      "language": "en",
      "latitude": "string",
      "line_1": "Prime Minister &amp; First Lord of Treasury",
      "line_2": "10 Downing Street",
      "line_3": "",
      "longitude": "string",
      "northings": "string",
      "organisation_name": "Prime Minister &amp; First Lord Of The Treasury",
      "po_box": "100",
      "post_town": "London",
      "postal_county": "London",
      "postcode": "SW1A 2AA",
      "postcode_inward": "2AA",
      "postcode_outward": "SW1A",
      "postcode_type": "S",
      "premise": "10",
      "su_organisation_indicator": "Y",
      "sub_building_name": "Flat 1",
      "thoroughfare": "Downing Street",
      "traditional_county": "Greater London",
      "udprn": 23747771,
      "umprn": "string",
      "uprn": "string",
      "ward": "St. James'"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|true|none|none|
|message|string|true|none|none|
|result|[[PafAddress](#schemapafaddress) \| [MrAddress](#schemamraddress) \| [NybAddress](#schemanybaddress) \| [PafAliasAddress](#schemapafaliasaddress) \| [WelshPafAddress](#schemawelshpafaddress) \| [GbrGlobalAddress](#schemagbrglobaladdress)]|true|none|All addresses listed at the postcode.<br><br>If Eircode is enabled, addreses for the Republic of Ireland will be returned in the English format.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|code|2000|
|message|Success|

<h2 id="tocS_PostcodeSectorParam">PostcodeSectorParam</h2>
<!-- backwards compatibility -->
<a id="schemapostcodesectorparam"></a>
<a id="schema_PostcodeSectorParam"></a>
<a id="tocSpostcodesectorparam"></a>
<a id="tocspostcodesectorparam"></a>

```json
"SW1A 2"
```

Filter by postcode sector, the outward code plus first numeric of the inward code.

<h2 id="tocS_PostcodeTypeParam">PostcodeTypeParam</h2>
<!-- backwards compatibility -->
<a id="schemapostcodetypeparam"></a>
<a id="schema_PostcodeTypeParam"></a>
<a id="tocSpostcodetypeparam"></a>
<a id="tocspostcodetypeparam"></a>

```json
"L"
```

Filter by Postcode Type. Useful for separating organisational and residential addresses

<h2 id="tocS_RateLimitedResponse">RateLimitedResponse</h2>
<!-- backwards compatibility -->
<a id="schemaratelimitedresponse"></a>
<a id="schema_RateLimitedResponse"></a>
<a id="tocSratelimitedresponse"></a>
<a id="tocsratelimitedresponse"></a>

```json
{
  "code": 0,
  "message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|true|none|API Response Code. Non `2xxx` code indicates a failure. This code will provide a more specific reason when a failure occurs and facilitates debugging.|
|message|string|true|none|Human readable error message supplied with every error response.|
|code|integer(int32)|true|none|`429X` type error response code|
|message|string|true|none|Request is being rate limited|

<h2 id="tocS_ResolvePlaceResponse">ResolvePlaceResponse</h2>
<!-- backwards compatibility -->
<a id="schemaresolveplaceresponse"></a>
<a id="schema_ResolvePlaceResponse"></a>
<a id="tocSresolveplaceresponse"></a>
<a id="tocsresolveplaceresponse"></a>

```json
{
  "code": 2000,
  "message": "Success",
  "result": {
    "country_iso": "GBR",
    "dataset": "geonames",
    "descriptive_name": "London, United Kingdom",
    "id": "geonames_5353",
    "language": "en",
    "latitude": "string",
    "longitude": "string",
    "name": "London",
    "native": {
      "admin1_code": "ENG",
      "admin1_geonameid": 5353,
      "admin1_name": "England",
      "admin2_code": "06",
      "admin2_geonameid": 5353,
      "admin2_name": "England",
      "admin3_code": "08",
      "admin4_code": "07",
      "alternatenames": [
        "London"
      ],
      "asciiname": "London",
      "cc2": [
        "IE"
      ],
      "country_code": "GB",
      "dataset": "geonames",
      "dem": 32,
      "elevation": 0,
      "feature_class": "A",
      "feature_code": "ADM1",
      "geonameid": 5353,
      "id": "geonames_5353",
      "latitude": "string",
      "longitude": "string",
      "modification_date": "2015-03-09",
      "name": "London",
      "population": "7392832",
      "timezone": "Europe/London"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|true|none|none|
|message|string|true|none|none|
|result|[Place](#schemaplace)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|code|2000|
|message|Success|

<h2 id="tocS_SmallUserParam">SmallUserParam</h2>
<!-- backwards compatibility -->
<a id="schemasmalluserparam"></a>
<a id="schema_SmallUserParam"></a>
<a id="tocSsmalluserparam"></a>
<a id="tocssmalluserparam"></a>

```json
"Y"
```

Filter by Organisation Indicator. Useful for separating organisational and residential addresses

<h2 id="tocS_StartParam">StartParam</h2>
<!-- backwards compatibility -->
<a id="schemastartparam"></a>
<a id="schema_StartParam"></a>
<a id="tocSstartparam"></a>
<a id="tocsstartparam"></a>

```json
1418556452651
```

A start date/time in the form of a UNIX Timestamp in milliseconds, e.g.  `1418556452651`.

<h2 id="tocS_TagsParam">TagsParam</h2>
<!-- backwards compatibility -->
<a id="schematagsparam"></a>
<a id="schema_TagsParam"></a>
<a id="tocStagsparam"></a>
<a id="tocstagsparam"></a>

```json
"foo,bar"
```

A comma separated list of tags to query over. 

Useful if you want to specify the circumstances in which the request was made.

If multiple tags are specified, the response will only comprise of requests for which all the tags are satisfied - i.e. searching `"foo,bar"` will only query requests which tagged both `"foo"` and `"bar"`.

<h2 id="tocS_UDPRNResponse">UDPRNResponse</h2>
<!-- backwards compatibility -->
<a id="schemaudprnresponse"></a>
<a id="schema_UDPRNResponse"></a>
<a id="tocSudprnresponse"></a>
<a id="tocsudprnresponse"></a>

```json
{
  "code": 2000,
  "message": "Success",
  "result": {
    "administrative_county": "",
    "building_name": "",
    "building_number": "10",
    "country": "England",
    "country_iso": "GBR",
    "country_iso_2": "GB",
    "county": "London",
    "county_code": "",
    "dataset": "paf",
    "delivery_point_suffix": "1A",
    "department_name": "",
    "dependant_locality": "",
    "dependant_thoroughfare": "",
    "district": "Westminster",
    "double_dependant_locality": "",
    "eastings": "string",
    "id": "paf_8387729",
    "language": "en",
    "latitude": "string",
    "line_1": "Prime Minister &amp; First Lord of Treasury",
    "line_2": "10 Downing Street",
    "line_3": "",
    "longitude": "string",
    "northings": "string",
    "organisation_name": "Prime Minister &amp; First Lord Of The Treasury",
    "po_box": "100",
    "post_town": "London",
    "postal_county": "London",
    "postcode": "SW1A 2AA",
    "postcode_inward": "2AA",
    "postcode_outward": "SW1A",
    "postcode_type": "S",
    "premise": "10",
    "su_organisation_indicator": "Y",
    "sub_building_name": "Flat 1",
    "thoroughfare": "Downing Street",
    "traditional_county": "Greater London",
    "udprn": 23747771,
    "umprn": "string",
    "uprn": "string",
    "ward": "St. James'"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|true|none|none|
|message|string|true|none|none|
|result|[PafAddress](#schemapafaddress) \| [NybAddress](#schemanybaddress)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|code|2000|
|message|Success|

<h2 id="tocS_UMPRNResponse">UMPRNResponse</h2>
<!-- backwards compatibility -->
<a id="schemaumprnresponse"></a>
<a id="schema_UMPRNResponse"></a>
<a id="tocSumprnresponse"></a>
<a id="tocsumprnresponse"></a>

```json
{
  "code": 2000,
  "message": "Success",
  "result": {
    "administrative_county": "",
    "building_name": "",
    "building_number": "10",
    "country": "England",
    "country_iso": "GBR",
    "country_iso_2": "GB",
    "county": "London",
    "county_code": "",
    "dataset": "mr",
    "delivery_point_suffix": "1A",
    "department_name": "",
    "dependant_locality": "",
    "dependant_thoroughfare": "",
    "district": "Westminster",
    "double_dependant_locality": "",
    "eastings": "string",
    "id": "paf_8387729",
    "language": "en",
    "latitude": "string",
    "line_1": "Prime Minister &amp; First Lord of Treasury",
    "line_2": "10 Downing Street",
    "line_3": "",
    "longitude": "string",
    "northings": "string",
    "organisation_name": "Prime Minister &amp; First Lord Of The Treasury",
    "po_box": "100",
    "post_town": "London",
    "postal_county": "London",
    "postcode": "SW1A 2AA",
    "postcode_inward": "2AA",
    "postcode_outward": "SW1A",
    "postcode_type": "S",
    "premise": "10",
    "su_organisation_indicator": "Y",
    "sub_building_name": "Flat 1",
    "thoroughfare": "Downing Street",
    "traditional_county": "Greater London",
    "udprn": 23747771,
    "umprn": "string",
    "uprn": "string",
    "ward": "St. James'"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|true|none|none|
|message|string|true|none|none|
|result|[MrAddress](#schemamraddress)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|code|2000|
|message|Success|

<h2 id="tocS_UPRNParam">UPRNParam</h2>
<!-- backwards compatibility -->
<a id="schemauprnparam"></a>
<a id="schema_UPRNParam"></a>
<a id="tocSuprnparam"></a>
<a id="tocsuprnparam"></a>

```json
"100023336956"
```

Filters by UPRN. Does not accept comma separated terms. Only a single term is permitted

<h2 id="tocS_UkAddressSuggestion">UkAddressSuggestion</h2>
<!-- backwards compatibility -->
<a id="schemaukaddresssuggestion"></a>
<a id="schema_UkAddressSuggestion"></a>
<a id="tocSukaddresssuggestion"></a>
<a id="tocsukaddresssuggestion"></a>

```json
{
  "id": "paf_8387729",
  "suggestion": "Flat 6, 12 Roskear, Camborne, TR14",
  "udprn": 23747771,
  "umprn": 51103417,
  "urls": {
    "udprn": "/v1/udprn/50985827",
    "umprn": "/v1/umprn/51103417"
  }
}
```

Represents a possible address given an autocomplete query.

UK Address Suggestions will return a UDPRN attribute if it references a deliverable endpoint found on Royal Mail's Postcode Address File dataset.

UK Address Suggestion will return a UMPRN if it references a multiple occupancy premise found on Royal Mail's Multiple Residence dataset.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[ID](#schemaid)|true|none|Global unique internally generated identifier for an address|
|suggestion|string|true|none|Address suggestion for a given query.|
|udprn|[paf_udprn](#schemapaf_udprn)|true|none|UDPRN stands for ‘Unique Delivery Point Reference Number’. Royal Mail assigns a unique UDPRN code for each premise on PAF. Simple, unique reference number for each Delivery Point. Unlikely to be reused when an address expires.<br><br>Up to 8-digit numeric code.<br><br>A new UDPRN is automatically assigned to each new Delivery Point added to PAF.|
|umprn|number(int32)|false|none|Optionally returned field, representing the UMPRN of a Multiple Residence household|
|urls|object|true|none|none|

<h2 id="tocS_UnauthorizedResponse">UnauthorizedResponse</h2>
<!-- backwards compatibility -->
<a id="schemaunauthorizedresponse"></a>
<a id="schema_UnauthorizedResponse"></a>
<a id="tocSunauthorizedresponse"></a>
<a id="tocsunauthorizedresponse"></a>

```json
{
  "code": 0,
  "message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|true|none|API Response Code. Non `2xxx` code indicates a failure. This code will provide a more specific reason when a failure occurs and facilitates debugging.|
|message|string|true|none|Human readable error message supplied with every error response.|
|code|integer(int32)|true|none|`401X` type error response code|
|message|string|true|none|Unauthorized request error description|

<h2 id="tocS_UnknownEmail">UnknownEmail</h2>
<!-- backwards compatibility -->
<a id="schemaunknownemail"></a>
<a id="schema_UnknownEmail"></a>
<a id="tocSunknownemail"></a>
<a id="tocsunknownemail"></a>

```json
{
  "catchall": null,
  "deliverable": null,
  "disposable": null,
  "free": null,
  "result": "unknown",
  "role": null
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|catchall|boolean \| null|true|none|Catch-all status is not known|
|deliverable|boolean \| null|true|none|Deliverability is not known|
|disposable|boolean \| null|true|none|Disposability is not known|
|free|boolean \| null|true|none|Free email provider is not known|
|result|string|true|none|none|
|role|boolean \| null|true|none|Role is not known|

#### Enumerated Values

|Property|Value|
|---|---|
|catchall|null|
|deliverable|null|
|disposable|null|
|free|null|
|result|unknown|
|role|null|

<h2 id="tocS_UsaGlobalAddress">UsaGlobalAddress</h2>
<!-- backwards compatibility -->
<a id="schemausaglobaladdress"></a>
<a id="schema_UsaGlobalAddress"></a>
<a id="tocSusaglobaladdress"></a>
<a id="tocsusaglobaladdress"></a>

```json
{
  "address_secondary_abbreviation": "",
  "base_alternate_code": "",
  "building_or_firm_name": "",
  "carrier_route_id": "",
  "carrier_route_rate_sortation": "",
  "city": "string",
  "city_abbreviation": "string",
  "city_state_mailing_name_indicator": "",
  "city_state_name_facility_code": "",
  "congressional_district_number": "",
  "country": "England",
  "country_iso": "GBR",
  "country_iso_2": "GB",
  "county": "string",
  "county_number": "",
  "dataset": "paf",
  "finance_number": "",
  "government_building_indicator": "",
  "id": "paf_8387729",
  "lacs_status_indicator": "",
  "language": "en",
  "last_line": "",
  "line_1": "string",
  "line_2": "string",
  "municipality_city_state_key": "",
  "native": {
    "address_reference": "string",
    "building_group": "Marrian Terrace",
    "building_name": "Rose Cottage",
    "building_number": 22,
    "country": "Ireland",
    "country_iso": "IRL",
    "country_iso_2": "IE",
    "dataset": "ecad",
    "department": "Accounts Department",
    "eircode": "A65 R2AF",
    "id": "paf_8387729",
    "language": "en",
    "latitude": "string",
    "line_1": "string",
    "line_2": "string",
    "line_3": "string",
    "line_4": "string",
    "line_5": "string",
    "line_6": "string",
    "line_7": "string",
    "line_8": "string",
    "line_9": "string",
    "longitude": "string",
    "organisation": "Oak Tree Limited",
    "post_county": "Cork",
    "primary_locality": "Cookstown Industrial Estate",
    "primary_thoroughfare": "Griffith Road",
    "secondary_locality": "Manorhamilton",
    "secondary_thoroughfare": "Navan Road",
    "sub_building_name": "Flat 1",
    "tertiary_locality": "Dublin 14",
    "address_point_id": "10098783",
    "address_type": "string",
    "building_address_type": "string",
    "building_group_address_type": "string",
    "building_group_id": "10098783",
    "building_id": "10098783",
    "building_type": "string",
    "building_use": "R",
    "ded_id": "string",
    "ecad_id": "17000000",
    "gaeltacht": true,
    "gaeltacht_id": "string",
    "holiday_home": "N",
    "local_authority": "string",
    "nace_category": "string",
    "nace_code": "string",
    "nua": true,
    "org_vacant": "Y",
    "organisation_id": "10098783",
    "post_county_id": "10098783",
    "post_town": "string",
    "post_town_id": "10098783",
    "postaim_presort_152": "string",
    "postaim_presort_61": "string",
    "primary_locality_address_type": "string",
    "primary_locality_id": "10098783",
    "primary_thoroughfare_id": "10098783",
    "publicity_post_zone": "string",
    "secondary_locality_address_type": "string",
    "secondary_locality_id": "10098783",
    "secondary_thoroughfare_id": "10098783",
    "small_area_id": "string",
    "townland_id": "string",
    "under_construction": "N",
    "vacant": "Y"
  },
  "plus_4_code": "",
  "preferred_city": "",
  "preferred_last_line_city_state_key": "",
  "primary_number": "",
  "record_type_code": "",
  "secondary_number": "",
  "state": "string",
  "state_abbreviation": "string",
  "street_name": "",
  "street_post_directional_abbreviation": "",
  "street_pre_directional_abbreviation": "",
  "street_suffix_abbreviation": "",
  "update_key_number": "",
  "urbanization_city_state_key": "",
  "zip_classification_code": "",
  "zip_code": "string",
  "zip_plus_4_code": "string"
}
```

Global (non-US) Address in the US address format

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address_secondary_abbreviation|string|true|none|Not available for non-US addresses|
|base_alternate_code|string|true|none|Not available for non-US addresses|
|building_or_firm_name|string|true|none|Not available for non-US addresses|
|carrier_route_id|string|true|none|Not available for non-US addresses|
|carrier_route_rate_sortation|string|true|none|Not available for non-US addresses|
|city|string|true|none|City name|
|city_abbreviation|string|true|none|City name abbreviation (if available)|
|city_state_mailing_name_indicator|string|true|none|Not available for non-US addresses|
|city_state_name_facility_code|string|true|none|Not available for non-US addresses|
|congressional_district_number|string|true|none|Not available for non-US addresses|
|country|[Country](#schemacountry)|true|none|  Full country names (ISO 3166)<br>|
|country_iso|[CountryISO](#schemacountryiso)|true|none|  3 letter country code (ISO 3166-1)<br>|
|country_iso_2|[CountryISO2](#schemacountryiso2)|true|none| 2 letter country code (ISO 3166-1)<br>|
|county|string|true|none|County name|
|county_number|string|true|none|Not available for non-US addresses|
|dataset|[Dataset](#schemadataset)|true|none|Indicates the provenance of an address.<br><br>  - `paf` (GBR) Postcode Address File<br>  - `mr` (GBR) Multiple Residence File<br>  - `nyb` (GBR) Not Yet Built File<br>  - `pafa` (GBR) Alias File<br>  - `pafw` (GBR) Welsh File<br>  - `ecaf` (IRL) Eircode ECAF<br>  - `ecad` (IRL) Eircode ECAD<br>  - `usps` (USA) USPS Zip+4|
|finance_number|string|true|none|Not available for non-US addresses|
|government_building_indicator|string|true|none|Not available for non-US addresses|
|id|[ID](#schemaid)|true|none|Global unique internally generated identifier for an address|
|lacs_status_indicator|string|true|none|Not available for non-US addresses|
|language|[Language](#schemalanguage)|true|none|Language represented by 2 letter ISO Code (639-1)<br>|
|last_line|string|true|none|Not available for non-US addresses|
|line_1|string|true|none|First line of address|
|line_2|string|true|none|Second line of address|
|municipality_city_state_key|string|true|none|Not available for non-US addresses|
|native|[EcadAddress](#schemaecadaddress) \| [EcafAddress](#schemaecafaddress) \| [PafAddress](#schemapafaddress) \| [MrAddress](#schemamraddress) \| [NybAddress](#schemanybaddress) \| [PafAliasAddress](#schemapafaliasaddress) \| [WelshPafAddress](#schemawelshpafaddress)|true|none|The native representation of a non-US address|
|plus_4_code|string|true|none|Not available for non-US addresses|
|preferred_city|string|true|none|Not available for non-US addresses|
|preferred_last_line_city_state_key|string|true|none|Not available for non-US addresses|
|primary_number|string|true|none|Not available for non-US addresses|
|record_type_code|string|true|none|Not available for non-US addresses|
|secondary_number|string|true|none|Not available for non-US addresses|
|state|string|true|none|State or province|
|state_abbreviation|string|true|none|Code of state or province (if available)|
|street_name|string|true|none|Not available for non-US addresses|
|street_post_directional_abbreviation|string|true|none|Not available for non-US addresses|
|street_pre_directional_abbreviation|string|true|none|Not available for non-US addresses|
|street_suffix_abbreviation|string|true|none|Not available for non-US addresses|
|update_key_number|string|true|none|Not available for non-US addresses|
|urbanization_city_state_key|string|true|none|Not available for non-US addresses|
|zip_classification_code|string|true|none|Not available for non-US addresses|
|zip_code|string|true|none|Partial postcode of address|
|zip_plus_4_code|string|true|none|Full postal code of address|

#### Enumerated Values

|Property|Value|
|---|---|
|address_secondary_abbreviation|""|
|base_alternate_code|""|
|building_or_firm_name|""|
|carrier_route_id|""|
|carrier_route_rate_sortation|""|
|city_state_mailing_name_indicator|""|
|city_state_name_facility_code|""|
|congressional_district_number|""|
|country|United States|
|country|Guam|
|country|Puerto Rico|
|country|England|
|country|Scotland|
|country|Wales|
|country|Northern Ireland|
|country|Jersey|
|country|Guernsey|
|country|Isle of Man|
|country|Ireland|
|country_iso|GBR|
|country_iso|IMN|
|country_iso|JEY|
|country_iso|GGY|
|country_iso|USA|
|country_iso|PRI|
|country_iso|GUM|
|country_iso|IRL|
|country_iso_2|GB|
|country_iso_2|IM|
|country_iso_2|JE|
|country_iso_2|GG|
|country_iso_2|US|
|country_iso_2|PR|
|country_iso_2|GU|
|country_iso_2|IE|
|county_number|""|
|dataset|paf|
|dataset|pafw|
|dataset|pafa|
|dataset|mr|
|dataset|nyb|
|dataset|usps|
|dataset|ecaf|
|dataset|ecad|
|finance_number|""|
|government_building_indicator|""|
|lacs_status_indicator|""|
|language|en|
|language|cy|
|language|ga|
|last_line|""|
|municipality_city_state_key|""|
|plus_4_code|""|
|preferred_city|""|
|preferred_last_line_city_state_key|""|
|primary_number|""|
|record_type_code|""|
|secondary_number|""|
|street_name|""|
|street_post_directional_abbreviation|""|
|street_pre_directional_abbreviation|""|
|street_suffix_abbreviation|""|
|update_key_number|""|
|urbanization_city_state_key|""|
|zip_classification_code|""|

<h2 id="tocS_UsaResolveAddressResponse">UsaResolveAddressResponse</h2>
<!-- backwards compatibility -->
<a id="schemausaresolveaddressresponse"></a>
<a id="schema_UsaResolveAddressResponse"></a>
<a id="tocSusaresolveaddressresponse"></a>
<a id="tocsusaresolveaddressresponse"></a>

```json
{
  "code": 2000,
  "message": "Success",
  "result": {
    "address_secondary_abbreviation": "string",
    "base_alternate_code": "A",
    "building_or_firm_name": "POSTMASTER",
    "carrier_route_id": "R012",
    "carrier_route_rate_sortation": "string",
    "city": "HOLTSVILLE",
    "city_abbreviation": "W TOWNSHEND",
    "city_state_mailing_name_indicator": "string",
    "city_state_name_facility_code": "B",
    "congressional_district_number": "string",
    "country": "United States",
    "country_iso": "USA",
    "country_iso_2": "US",
    "county": "Suffolk",
    "county_number": "string",
    "dataset": "usps",
    "finance_number": "string",
    "government_building_indicator": "",
    "id": "paf_8387729",
    "lacs_status_indicator": "",
    "language": "en",
    "last_line": "Greenwich CT 06830-1234",
    "line_1": "12 Armstrong Ct Apt 12",
    "line_2": "9450 Pinecroft Dr",
    "municipality_city_state_key": "string",
    "plus_4_code": "1234",
    "preferred_city": "AGUADA",
    "preferred_last_line_city_state_key": "V13916",
    "primary_number": "A298",
    "record_type_code": "G",
    "secondary_number": "123A",
    "state": "New York",
    "state_abbreviation": "NY",
    "street_name": "GOSHEN",
    "street_post_directional_abbreviation": "string",
    "street_pre_directional_abbreviation": "string",
    "street_suffix_abbreviation": "ST",
    "update_key_number": "00000001",
    "urbanization_city_state_key": "V18475",
    "zip_classification_code": "",
    "zip_code": "1234",
    "zip_plus_4_code": "12345-6789"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|true|none|none|
|message|string|true|none|none|
|result|[UspsAddress](#schemauspsaddress) \| [UsaGlobalAddress](#schemausaglobaladdress)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|code|2000|
|message|Success|

<h2 id="tocS_UserTokenParam">UserTokenParam</h2>
<!-- backwards compatibility -->
<a id="schemausertokenparam"></a>
<a id="schema_UserTokenParam"></a>
<a id="tocSusertokenparam"></a>
<a id="tocsusertokenparam"></a>

```json
"uk_B59ScW1p1HHouf1VqclEPZUx"
```

A secret key used for sensitive operations on your account and API Keys.

Your user token can be retrieved and managed from your [accounts page](https://ideal-postcodes.co.uk/account).

Typically beings `uk_...`

<h2 id="tocS_UspsAddress">UspsAddress</h2>
<!-- backwards compatibility -->
<a id="schemauspsaddress"></a>
<a id="schema_UspsAddress"></a>
<a id="tocSuspsaddress"></a>
<a id="tocsuspsaddress"></a>

```json
{
  "address_secondary_abbreviation": "string",
  "base_alternate_code": "A",
  "building_or_firm_name": "POSTMASTER",
  "carrier_route_id": "R012",
  "carrier_route_rate_sortation": "string",
  "city": "HOLTSVILLE",
  "city_abbreviation": "W TOWNSHEND",
  "city_state_mailing_name_indicator": "string",
  "city_state_name_facility_code": "B",
  "congressional_district_number": "string",
  "country": "United States",
  "country_iso": "USA",
  "country_iso_2": "US",
  "county": "Suffolk",
  "county_number": "string",
  "dataset": "usps",
  "finance_number": "string",
  "government_building_indicator": "",
  "id": "paf_8387729",
  "lacs_status_indicator": "",
  "language": "en",
  "last_line": "Greenwich CT 06830-1234",
  "line_1": "12 Armstrong Ct Apt 12",
  "line_2": "9450 Pinecroft Dr",
  "municipality_city_state_key": "string",
  "plus_4_code": "1234",
  "preferred_city": "AGUADA",
  "preferred_last_line_city_state_key": "V13916",
  "primary_number": "A298",
  "record_type_code": "G",
  "secondary_number": "123A",
  "state": "New York",
  "state_abbreviation": "NY",
  "street_name": "GOSHEN",
  "street_post_directional_abbreviation": "string",
  "street_pre_directional_abbreviation": "string",
  "street_suffix_abbreviation": "ST",
  "update_key_number": "00000001",
  "urbanization_city_state_key": "V18475",
  "zip_classification_code": "",
  "zip_code": "1234",
  "zip_plus_4_code": "12345-6789"
}
```

Standard USA Address

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address_secondary_abbreviation|[address_secondary_abbreviation](#schemaaddress_secondary_abbreviation)|true|none|A descriptive code used to identify the type of address secondary range information in the Address Secondary Range field. <br>This code may be useful in address matching, e.g., the secondary address numbers may indicate apartment, suite, or trailer numbers.|
|base_alternate_code|[base_alternate_code](#schemabase_alternate_code)|true|none|Code that specifies whether a record is a base (preferred) or alternate record. <br>Base records (represented as "B") can represent a range of addresses or an individual address, such as a firm record, while alternate records (represented as "A") are individual delivery points. Base records are generally preferred over alternate records.<br>Government deliveries will only be listed on alternate records with the appropriate government building indicator (federal, state, or city) set.|
|building_or_firm_name|[building_or_firm_name](#schemabuilding_or_firm_name)|true|none|The name of a company, building, apartment complex, shopping center, or other distinguishing secondary address information.<br>This field is normally used with firm and highrise records but may also contain literals such as “Postmaster” or “United States Postal Service.”|
|carrier_route_id|[carrier_route_id](#schemacarrier_route_id)|true|none|A 4 character ID identifying the postal route for the address.<br>The first character indicates the route type. Specifically:<br>- "B" indicates PO Box<br>- "H" indicates highway<br>- "C" indicates city<br>- "G" indicates general<br>- "R" indicates rural|
|carrier_route_rate_sortation|[carrier_route_rate_sortation](#schemacarrier_route_rate_sortation)|true|none|Identifies where automation Carrier Route rates are available and where the commingling of automation and non-automation mail, including Enhanced Carrier Routes and 5-digit presort, on the same pallet or in the same container is allowed.|
|city|[city](#schemacity)|true|none|A valid city name for mailing purposes; appears in the last line of an address on a mail piece.|
|city_abbreviation|[city_abbreviation](#schemacity_abbreviation)|true|none|A standard 13-character abbreviation for a city/state name. This field is only used for names that are greater than 13 characters in length and have a city/state mailing name indicator of "Y." If the field is longer than 13 characters and the city/state mailing name indicator is "N," the field will be blank.|
|city_state_mailing_name_indicator|[city_state_mailing_name_indicator](#schemacity_state_mailing_name_indicator)|true|none|Specifies whether or not the city state name can be used as a last line of address on a mail piece.<br>- "Y = City/state name is a USPS-approved mailing name."<br>- "N = City/state name is not approved for mailing purposes."|
|city_state_name_facility_code|[city_state_name_facility_code](#schemacity_state_name_facility_code)|true|none|The type of locale identified in the city/state name. The facility may be a USPS facility, such as a post office, station, or branch, or it may be a non-postal place name. City/state name facility codes include the following:<br>- B = Branch<br>- C = Community post office (CPO)<br>- N = Non-postal community name, former USPS facility, or place name<br>- P = Post Office<br>- S = Station<br>- U = Urbanization|
|congressional_district_number|[congressional_district_number](#schemacongressional_district_number)|true|none|A standard value identifying a geographic area within the United States served by a member of the U.S. House of Representatives. If Army/Air Force (APO), Fleet Post Office (FPO), or Diplomatic/Defense Post Office (DPO), this field will be blank. If there is only one member of Congress within a state, the code will be "AL" (at large).|
|country|[usps_country](#schemausps_country)|true|none|  Full country names (ISO 3166)<br>|
|country_iso|[usps_country_iso](#schemausps_country_iso)|true|none|  3 letter country code (ISO 3166-1)<br>|
|country_iso_2|[usps_country_iso_2](#schemausps_country_iso_2)|true|none| 2 letter country code (ISO 3166-1)<br>|
|county|[county](#schemacounty)|true|none|The name of the county or parish in which the 5-digit ZIP Code resides. If APO/FPO/DPO, then the county name will be blank.|
|county_number|[county_number](#schemacounty_number)|true|none|The Federal Information Processing Standard (FIPS) code assigned to a given county or parish within a state. In Alaska, it identifies a region within the state. If APO/FPO/DPO, and the record type is “S,” “H,” or “F,” the county number will be blank.|
|dataset|[usps_dataset](#schemausps_dataset)|true|none|Identifies the address as sourced from USPS|
|finance_number|[finance_number](#schemafinance_number)|true|none|A code assigned to Postal Service facilities (primarily Post Offices) to collect cost and statistical data and compile revenue and expense data.|
|government_building_indicator|[government_building_indicator](#schemagovernment_building_indicator)|true|none|An alphabetic value that identifies the type of government agency at the delivery point and/or whether a firm is the only delivery at an address. For this purpose, "address" is defined as the complete delivery line (e.g., complete street address and, if included as part of the firm record, the secondary abbreviation and/or address secondary number).<br>- A = City government building—alternates only<br>- B = Federal government building—alternates only<br>- C = State government building—alternates only<br>- D = Firm only—base and alternates<br>- E = City government building and firm only—alternates only<br>- F = Federal government building and firm only—alternates only<br>- G = State government building and firm only—alternates only|
|id|[ID](#schemaid)|true|none|Global unique internally generated identifier for an address|
|lacs_status_indicator|[lacs_status_indicator](#schemalacs_status_indicator)|true|none|The Locatable Address Conversion Service (LACS) indicator describes records that have been converted to the LACS system (a product/system in a different USPS® product line that allows mailers to identify and convert a rural route address to a city-style address). Rural route and some city addresses are being modified to city-style addresses so that emergency services (e.g., ambulances, police) can find these addresses more efficiently.<br>- L = LACS address: The old (usually rural-route) address that has been converted for the LACS system.<br>- Blank = Not applicable|
|language|[usps_language](#schemausps_language)|true|none|Language represented by 2 letter ISO Code (639-1)<br>|
|last_line|[last_line](#schemalast_line)|true|none|Last line of the address comprising of city, state, zip code and zip+4|
|line_1|[line_1](#schemaline_1)|true|none|The primary delivery line (usually the street address) of the address.|
|line_2|[line_2](#schemaline_2)|true|none|Secondary delivery line of the address. Typically populated if the first line is the firm or building name.|
|municipality_city_state_key|[municipality_city_state_key](#schemamunicipality_city_state_key)|true|none|Municipality City State Key. Currently blank.|
|plus_4_code|[plus_4_code](#schemaplus_4_code)|true|none|4 digit ZIP add-on code.|
|preferred_city|[preferred_city](#schemapreferred_city)|true|none|Field that contains the default preferred or alternate preferred last-line name for a ZIP Code.|
|preferred_last_line_city_state_key|[preferred_last_line_city_state_key](#schemapreferred_last_line_city_state_key)|true|none|In the Carrier Route, Five-Digit ZIP Code, Delivery Statistics, and ZIP + 4 products, an index to the City State product record that provides the preferred last-line name for this address range. In the City State product, the preferred last line city/state key contains the key value of a City State product record that has the default preferred or alternate preferred last-line key for a given ZIP Code.|
|primary_number|[primary_number](#schemaprimary_number)|true|none|A house, rural route, contract box, or Post Office Box number. The numeric or alphanumeric component of an address preceding the street name. Often referred to as house number.|
|record_type_code|[record_type_code](#schemarecord_type_code)|true|none|An alphabetic value that identifies the type of data in the record. - G = General delivery (5-Digit ZIP, ZIP + 4, and Carrier Route products) - H = High-rise (ZIP + 4 only) - F = Firm (ZIP + 4 only) - S = Street (5-Digit ZIP, ZIP + 4, and Carrier Route products) - P = PO Box (5-Digit ZIP, ZIP + 4, and Carrier Route products) - R = Rural route/contract (5-Digit ZIP, ZIP + 4, and Carrier Route products) - M = Multi-carrier (Carrier Route product only)|
|secondary_number|[secondary_number](#schemasecondary_number)|true|none|Number of the sub unit, apartment, suite etc|
|state|[state](#schemastate)|true|none|Full name of a state, U.S. territory, or armed forces ZIP Code designation.|
|state_abbreviation|[state_abbreviation](#schemastate_abbreviation)|true|none|A 2-character abbreviation for the name of a state, U.S. territory, or armed forces ZIP Code designation. If APO/FPO/DPO, then the state abbreviation will be “AA,” “AE,” or “AP.”|
|street_name|[street_name](#schemastreet_name)|true|none|The official name of a street as assigned by a local governing authority. The Street Name field contains only the street name and does not include directionals (EAST, WEST, etc.) or suffixes (ST, DR, BLVD, etc.). This element may also contain literals, such as PO BOX, GENERAL DELIVERY, USS, PSC, or UNIT.|
|street_post_directional_abbreviation|[street_post_directional_abbreviation](#schemastreet_post_directional_abbreviation)|true|none|A geographic direction that follows the street name.|
|street_pre_directional_abbreviation|[street_pre_directional_abbreviation](#schemastreet_pre_directional_abbreviation)|true|none|A geographic direction that precedes the street name.|
|street_suffix_abbreviation|[street_suffix_abbreviation](#schemastreet_suffix_abbreviation)|true|none|Code that is the standard USPS abbreviation for the trailing designator in a street address. |
|update_key_number|[update_key_number](#schemaupdate_key_number)|true|none|Field that contains a number that uniquely identifies a record; used to identify the base record to which an add or delete transaction is being directed. The Update Key Number field is used only when applying transactions to the base file; it is not used in address matching and remains fixed for the life of the record. The field is alphanumeric and consists of the database segment code (V1, V2, W1, W2, X1, X2, Y1, Y2, Z1, or Z2) and eight characters containing an alphanumeric value ranging from 00000001 to AAAAAAAA.|
|urbanization_city_state_key|[urbanization_city_state_key](#schemaurbanization_city_state_key)|true|none|An index to the City State file that provides the urbanization name for this delivery range.|
|zip_classification_code|[zip_classification_code](#schemazip_classification_code)|true|none|A field that describes the type of ZIP area that a 5-digit ZIP Code serves, e.g., a single educational institution, post office boxes only, or a single address that has unusually high mail volume or many different addresses.<br> - M = Military ZIP Code<br> - P = ZIP Code having only Post Office Boxes<br> - U = Unique ZIP Code (ZIP assigned to a single organization)<br> - Blank = Standard ZIP with many addresses assigned to it|
|zip_code|[zip_code](#schemazip_code)|true|none|A 5-digit code that identifies a specific geographic delivery area. ZIP Codes can represent an area within a state, or a single building or company that has a very high mail volume. |
|zip_plus_4_code|[zip_plus_4_code](#schemazip_plus_4_code)|true|none|Nine-digit code that identifies a small geographic delivery area that is serviceable by a single carrier; appears in the last line of the address on a mail piece.|

#### Enumerated Values

|Property|Value|
|---|---|
|base_alternate_code|A|
|base_alternate_code|B|
|base_alternate_code|""|
|city_state_name_facility_code|B|
|city_state_name_facility_code|C|
|city_state_name_facility_code|N|
|city_state_name_facility_code|P|
|city_state_name_facility_code|S|
|city_state_name_facility_code|U|
|city_state_name_facility_code|Y|
|city_state_name_facility_code|""|
|country|United States|
|country|Guam|
|country|Puerto Rico|
|country_iso|USA|
|country_iso|PRI|
|country_iso|GUM|
|country_iso_2|US|
|country_iso_2|PR|
|country_iso_2|GU|
|dataset|usps|
|government_building_indicator|""|
|government_building_indicator|A|
|government_building_indicator|B|
|government_building_indicator|C|
|government_building_indicator|D|
|government_building_indicator|E|
|government_building_indicator|F|
|government_building_indicator|G|
|lacs_status_indicator|""|
|lacs_status_indicator|L|
|language|en|
|record_type_code|G|
|record_type_code|H|
|record_type_code|F|
|record_type_code|S|
|record_type_code|P|
|record_type_code|R|
|record_type_code|M|
|record_type_code|""|
|zip_classification_code|""|
|zip_classification_code|M|
|zip_classification_code|P|
|zip_classification_code|U|

<h2 id="tocS_WelshPafAddress">WelshPafAddress</h2>
<!-- backwards compatibility -->
<a id="schemawelshpafaddress"></a>
<a id="schema_WelshPafAddress"></a>
<a id="tocSwelshpafaddress"></a>
<a id="tocswelshpafaddress"></a>

```json
{
  "administrative_county": "",
  "building_name": "",
  "building_number": "10",
  "country": "Wales",
  "country_iso": "GBR",
  "country_iso_2": "GB",
  "county": "London",
  "county_code": "",
  "dataset": "pafw",
  "delivery_point_suffix": "1A",
  "department_name": "",
  "dependant_locality": "",
  "dependant_thoroughfare": "",
  "district": "Westminster",
  "double_dependant_locality": "",
  "eastings": "string",
  "id": "paf_8387729",
  "language": "cy",
  "latitude": "string",
  "line_1": "Prime Minister &amp; First Lord of Treasury",
  "line_2": "10 Downing Street",
  "line_3": "",
  "longitude": "string",
  "northings": "string",
  "organisation_name": "Prime Minister &amp; First Lord Of The Treasury",
  "po_box": "100",
  "post_town": "London",
  "postal_county": "London",
  "postcode": "SW1A 2AA",
  "postcode_inward": "2AA",
  "postcode_outward": "SW1A",
  "postcode_type": "S",
  "premise": "10",
  "su_organisation_indicator": "Y",
  "sub_building_name": "Flat 1",
  "thoroughfare": "Downing Street",
  "traditional_county": "Greater London",
  "udprn": 23747771,
  "umprn": "string",
  "uprn": "string",
  "ward": "St. James'"
}
```

Welsh language alternative for a PAF Address

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|administrative_county|[paf_administrative_county](#schemapaf_administrative_county)|true|none|The current administrative county to which the postcode has been assigned.<br><br>A Unitary Authority name, where one is present. If there is no Unitary Authority, the County name is used. This information is not static, because County boundaries may change due to administrative changes. Data<br><br>source: ONS|
|building_name|[paf_building_name](#schemapaf_building_name)|true|none|Name of residential or commercial premise. <br><br>Examples:<br>  - The Manor<br>  - 1-2<br>  - A<br>  - 12A<br>  - K<br>  - Victoria House|
|building_number|[paf_building_number](#schemapaf_building_number)|true|none|Number to identify premise on a thoroughfare or dependant thoroughfare.|
|country|[paf_country](#schemapaf_country)|true|none|  Full country names (ISO 3166)<br>|
|country_iso|[paf_country_iso](#schemapaf_country_iso)|true|none|  3 letter country code (ISO 3166-1)<br>|
|country_iso_2|[paf_country_iso_2](#schemapaf_country_iso_2)|true|none| 2 letter country code (ISO 3166-1)<br>|
|county|[paf_county](#schemapaf_county)|true|none|Since postal, administrative or traditional counties may not apply to some addresses, the county field is designed to return whatever county data is available. Normally, the postal county is returned. If this is not present, the county field will fall back to the administrative county. If the administrative county is also not present, the county field will fall back to the traditional county. May be empty in cases where no administrative, postal or traditional county present.|
|county_code|string|true|none|Short code representing the county or province. May be empty (`""`)|
|dataset|[paf_dataset](#schemapaf_dataset)|true|none|Indicates the provenance of an address|
|delivery_point_suffix|[paf_delivery_point_suffix](#schemapaf_delivery_point_suffix)|true|none|A unique Royal Mail 2-character code (the first numeric & the second alphabetical), which, when added to the Postcode, enables each live Delivery Point to be uniquely identified. Once the Delivery Point is deleted from PAF the DPS may be reused (although they aren’t reused until all remaining Delivery Points in the range have been allocated). The DPS for a Large User is always '1A' as each Large User has its own Postcode.|
|department_name|[paf_department_name](#schemapaf_department_name)|true|none|Used to supplment Organisation Name to identify a deparment within the organisation.|
|dependant_locality|[paf_dependant_locality](#schemapaf_dependant_locality)|true|none|When the same thoroughfare name reoccurs in a Post town, it may not be possible to make it dependant on a dependant thoroughfare. In this case the thoroughfare is dependant on a locality. For example if we want to find 1 Back Lane in Huddersfield we see that there are three.|
|dependant_thoroughfare|[paf_dependant_thoroughfare](#schemapaf_dependant_thoroughfare)|true|none|Used to supplement thoroughfare. When a thoroughfare name is used twice in the same Post Town, the dependant thoroughfare is added to uniquely indentify a delivery point.|
|district|[paf_district](#schemapaf_district)|true|none|The current district/unitary authority to which the postcode has been assigned.|
|double_dependant_locality|[paf_double_dependant_locality](#schemapaf_double_dependant_locality)|true|none|Used to supplement Dependant Locality. A Double Dependant Locality supplied along with a Dependant Locality if the Dependant Locality exists twice in the same locality.|
|eastings|[Eastings](#schemaeastings)|true|none|Eastings reference using the [Ordnance Survey National Grid reference system](https://en.wikipedia.org/wiki/Ordnance_Survey_National_Grid).<br><br>Northern Ireland Eastings uses the [Irish Grid Reference System](https://en.wikipedia.org/wiki/Irish_grid_reference_system).<br><br>Metres from origin. E.g. `550458`<br><br>Returns an empty string if no location data is available. Otherwise a number is returned.|
|id|[ID](#schemaid)|true|none|Global unique internally generated identifier for an address|
|language|[paf_language](#schemapaf_language)|true|none|Language represented by 2 letter ISO Code (639-1)<br>|
|latitude|[Latitude](#schemalatitude)|true|none|The latitude of the postcode (WGS84/ETRS89).<br><br>Can be a positive or negative decimal. E.g. `51.5083983`.<br><br>Returns an empty string if no location data is available. |
|line_1|[paf_line1](#schemapaf_line1)|true|none|First Address Line. Often contains premise and thoroughfare information. In the case of a commercial premise, the first line is always the full name of the registered organisation. Never empty.|
|line_2|[paf_line2](#schemapaf_line2)|true|none|Second Address Line. Often contains thoroughfare and locality information. May be empty|
|line_3|[paf_line3](#schemapaf_line3)|true|none|Third address line. May be empty.|
|longitude|[Longitude](#schemalongitude)|true|none|The longitude of the postcode (WGS84/ETRS89).<br><br>Can be a positive or negative decimal. E.g. -0.1283983<br><br>Returns an empty string if no location data is available. |
|northings|[Northings](#schemanorthings)|true|none|Northings reference using the [Ordnance Survey National Grid reference system](https://en.wikipedia.org/wiki/Ordnance_Survey_National_Grid)<br><br>Northern Ireland Northings uses the [Irish Grid Reference System](https://en.wikipedia.org/wiki/Irish_grid_reference_system)<br><br>Metres from origin. E.g. `180458`<br><br>Returns an empty string if no location data is available. Otherwise a number is returned  |
|organisation_name|[paf_organisation_name](#schemapaf_organisation_name)|true|none|Used to supplment Organisation Name to identify a deparment within the organisation|
|po_box|[paf_pobox](#schemapaf_pobox)|true|none|When the PO Box Number field is populated it will contain PO BOX nnnnnn where n represents the PO Box number. Note that the PO Box details can occasionally consist of a combination of numbers and letters. PO Box Numbers are only allocated to Large Users.|
|post_town|[paf_post_town](#schemapaf_post_town)|true|none|A Post Town is mandatory for delivery of mail to a Delivery Point. This is not necessarily the nearest town geographically, but a routing instruction to the Royal Mail delivery office sorting mail for that Delivery Point. A Post Town will always be present in every address, and for some Localities the Post Town will be the only locality element present.|
|postal_county|[paf_postal_county](#schemapaf_postal_county)|true|none|Postal counties were used for the distribution of mail before the Postcode system was introduced in the 1970s. The Former Postal County was the Administrative County at the time. This data rarely changes. May be empty.|
|postcode|[paf_postcode](#schemapaf_postcode)|true|none|Correctly formatted postcode. Capitalised and spaced.|
|postcode_inward|[paf_postcode_inward](#schemapaf_postcode_inward)|true|none|The second part of a postcode is known as the inward code. e.g. The inward code of ID1 1QD is 1QD.<br><br>The number identifies the sector in the postal district. The number is followed by 2 letters. The letters then define one or more properties in that sector.|
|postcode_outward|[paf_postcode_outward](#schemapaf_postcode_outward)|true|none|The first part of a postcode is known as the outward code. e.g. The outward code of ID1 1QD is ID1. Enables mail to be sorted to the correct local area for delivery. This part of the code contains the area and the district to which the mail is to be delivered, e.g. ‘PO1’, ‘SW1A’ or ‘B23’.|
|postcode_type|[paf_postcode_type](#schemapaf_postcode_type)|true|none|This indicates the type of user. It can only take the values 'S' or 'L' indicating small or large respectively. Large User Postcodes. These are assigned to one single address either due to the large volume of mail received at that address, or because a PO Box or Selectapost service has been set up. Small User Postcodes. These identify a group of Delivery Points.<br><br>On average there are 15 Delivery Points per Postcode. However this can vary between 1 and, in some cases, 100. There will never be more than 100 Delivery Points on a Postcode.|
|premise|[paf_premise](#schemapaf_premise)|true|none|A pre-computed string which sensibly combines building_number, building_name and sub_building_name. building_number, building_name and sub_building_name represent raw data from Royal Mail's and can be difficult to parse if you are unaware of how the Postcode Address File premise fields work together. For this reason, we also provide a pre-computed premise field which intelligently gathers these points into a single, simple premise string. This field is ideal if you want to pull premise information and thoroughfare information separately instead of using our address lines data.|
|su_organisation_indicator|[paf_su_organisation_indicator](#schemapaf_su_organisation_indicator)|true|none|Small User Organisation Indicator can have the values 'Y' or space. A value of 'Y' indicates that a Small User Organisation is present at this address.|
|sub_building_name|[paf_sub_building_name](#schemapaf_sub_building_name)|true|none|When a premise is split into individual units such as flats, apartments or business units. Cannot be present without either building_name or building_number. E.g. Flat 1, A, 10B|
|thoroughfare|[paf_thoroughfare](#schemapaf_thoroughfare)|true|none|Also known as the street or road name. In general each Thoroughfare Name will have a separate Postcode. Longer Thoroughfares with high number ranges often have multiple Postcodes covering the entire length of the road, with breaks at suitable points e.g. junctions or natural breaks in the road.|
|traditional_county|[paf_traditional_county](#schemapaf_traditional_county)|true|none|Traditional counties are provided by the Association of British Counties. It is historical data, and can date from the 1800s. May be empty.|
|udprn|[paf_udprn](#schemapaf_udprn)|true|none|UDPRN stands for ‘Unique Delivery Point Reference Number’. Royal Mail assigns a unique UDPRN code for each premise on PAF. Simple, unique reference number for each Delivery Point. Unlikely to be reused when an address expires.<br><br>Up to 8-digit numeric code.<br><br>A new UDPRN is automatically assigned to each new Delivery Point added to PAF.|
|umprn|[paf_umprn](#schemapaf_umprn)|true|none|A small minority of individual premises (as identified by a UDPRN) may have multiple occupants behind the same letterbox. These are known as Multiple Residence occupants and can be queried via the Multiple Residence dataset. Simple, unique reference number for each Multiple Residence occupant.<br><br>Note: this will be an empty string `""` when not used.|
|uprn|[paf_uprn](#schemapaf_uprn)|true|none|UPRN stands for Unique Property Reference Number and is maintained by the Ordnance Survey (OS). Local governments in the UK have allocated a unique number for each land or property.<br><br>Up to 12 digits in length.<br><br>Multiple Residence premises currently share the same UPRN as the parent premise.<br><br>May not be available for a small number of Great Britain addresses due to longer update cycles for Ordnance Survey's AddressBase datasets. Returns empty string "" in these instances.<br><br>Although UPRN takes an integer format, we encode and transmit this data as strings. As a 12 digit number, the UPRN can exceed the maximum safe integer `Number.MAX_SAFE_INTEGER` in most browsers causing this datapoint to be corrupted.<br><br>Take special care when storing UPRN. As a 12 digit identifier, you will need 64 bits to encode every possible UPRN value. This means applications like Excel will corrupt cells containing UPRN values.|
|ward|[paf_ward](#schemapaf_ward)|true|none|The current administrative/electoral area to which the postcode has been assigned. May be empty for a small number of addresses.|
|country|string|true|none|none|
|country_iso|string|true|none|none|
|country_iso_2|string|true|none|none|
|dataset|string|true|none|none|
|language|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|postcode_type|S|
|postcode_type|L|
|country|Wales|
|country_iso|GBR|
|country_iso_2|GB|
|dataset|pafw|
|language|cy|

<h2 id="tocS_address_secondary_abbreviation">address_secondary_abbreviation</h2>
<!-- backwards compatibility -->
<a id="schemaaddress_secondary_abbreviation"></a>
<a id="schema_address_secondary_abbreviation"></a>
<a id="tocSaddress_secondary_abbreviation"></a>
<a id="tocsaddress_secondary_abbreviation"></a>

```json
"string"
```

A descriptive code used to identify the type of address secondary range information in the Address Secondary Range field. 
This code may be useful in address matching, e.g., the secondary address numbers may indicate apartment, suite, or trailer numbers.

<h2 id="tocS_base_alternate_code">base_alternate_code</h2>
<!-- backwards compatibility -->
<a id="schemabase_alternate_code"></a>
<a id="schema_base_alternate_code"></a>
<a id="tocSbase_alternate_code"></a>
<a id="tocsbase_alternate_code"></a>

```json
"A"
```

Code that specifies whether a record is a base (preferred) or alternate record. 
Base records (represented as "B") can represent a range of addresses or an individual address, such as a firm record, while alternate records (represented as "A") are individual delivery points. Base records are generally preferred over alternate records.
Government deliveries will only be listed on alternate records with the appropriate government building indicator (federal, state, or city) set.

<h2 id="tocS_building_or_firm_name">building_or_firm_name</h2>
<!-- backwards compatibility -->
<a id="schemabuilding_or_firm_name"></a>
<a id="schema_building_or_firm_name"></a>
<a id="tocSbuilding_or_firm_name"></a>
<a id="tocsbuilding_or_firm_name"></a>

```json
"POSTMASTER"
```

The name of a company, building, apartment complex, shopping center, or other distinguishing secondary address information.
This field is normally used with firm and highrise records but may also contain literals such as “Postmaster” or “United States Postal Service.”

<h2 id="tocS_carrier_route_id">carrier_route_id</h2>
<!-- backwards compatibility -->
<a id="schemacarrier_route_id"></a>
<a id="schema_carrier_route_id"></a>
<a id="tocScarrier_route_id"></a>
<a id="tocscarrier_route_id"></a>

```json
"R012"
```

A 4 character ID identifying the postal route for the address.
The first character indicates the route type. Specifically:
- "B" indicates PO Box
- "H" indicates highway
- "C" indicates city
- "G" indicates general
- "R" indicates rural

<h2 id="tocS_carrier_route_rate_sortation">carrier_route_rate_sortation</h2>
<!-- backwards compatibility -->
<a id="schemacarrier_route_rate_sortation"></a>
<a id="schema_carrier_route_rate_sortation"></a>
<a id="tocScarrier_route_rate_sortation"></a>
<a id="tocscarrier_route_rate_sortation"></a>

```json
"string"
```

Identifies where automation Carrier Route rates are available and where the commingling of automation and non-automation mail, including Enhanced Carrier Routes and 5-digit presort, on the same pallet or in the same container is allowed.

<h2 id="tocS_city">city</h2>
<!-- backwards compatibility -->
<a id="schemacity"></a>
<a id="schema_city"></a>
<a id="tocScity"></a>
<a id="tocscity"></a>

```json
"HOLTSVILLE"
```

A valid city name for mailing purposes; appears in the last line of an address on a mail piece.

<h2 id="tocS_city_abbreviation">city_abbreviation</h2>
<!-- backwards compatibility -->
<a id="schemacity_abbreviation"></a>
<a id="schema_city_abbreviation"></a>
<a id="tocScity_abbreviation"></a>
<a id="tocscity_abbreviation"></a>

```json
"W TOWNSHEND"
```

A standard 13-character abbreviation for a city/state name. This field is only used for names that are greater than 13 characters in length and have a city/state mailing name indicator of "Y." If the field is longer than 13 characters and the city/state mailing name indicator is "N," the field will be blank.

<h2 id="tocS_city_state_mailing_name_indicator">city_state_mailing_name_indicator</h2>
<!-- backwards compatibility -->
<a id="schemacity_state_mailing_name_indicator"></a>
<a id="schema_city_state_mailing_name_indicator"></a>
<a id="tocScity_state_mailing_name_indicator"></a>
<a id="tocscity_state_mailing_name_indicator"></a>

```json
"string"
```

Specifies whether or not the city state name can be used as a last line of address on a mail piece.
- "Y = City/state name is a USPS-approved mailing name."
- "N = City/state name is not approved for mailing purposes."

<h2 id="tocS_city_state_name_facility_code">city_state_name_facility_code</h2>
<!-- backwards compatibility -->
<a id="schemacity_state_name_facility_code"></a>
<a id="schema_city_state_name_facility_code"></a>
<a id="tocScity_state_name_facility_code"></a>
<a id="tocscity_state_name_facility_code"></a>

```json
"B"
```

The type of locale identified in the city/state name. The facility may be a USPS facility, such as a post office, station, or branch, or it may be a non-postal place name. City/state name facility codes include the following:
- B = Branch
- C = Community post office (CPO)
- N = Non-postal community name, former USPS facility, or place name
- P = Post Office
- S = Station
- U = Urbanization

<h2 id="tocS_congressional_district_number">congressional_district_number</h2>
<!-- backwards compatibility -->
<a id="schemacongressional_district_number"></a>
<a id="schema_congressional_district_number"></a>
<a id="tocScongressional_district_number"></a>
<a id="tocscongressional_district_number"></a>

```json
"string"
```

A standard value identifying a geographic area within the United States served by a member of the U.S. House of Representatives. If Army/Air Force (APO), Fleet Post Office (FPO), or Diplomatic/Defense Post Office (DPO), this field will be blank. If there is only one member of Congress within a state, the code will be "AL" (at large).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|string|false|none|Empty string `""` if not available|
|*oneOf*|number|false|none|Congressional district number|

<h2 id="tocS_county">county</h2>
<!-- backwards compatibility -->
<a id="schemacounty"></a>
<a id="schema_county"></a>
<a id="tocScounty"></a>
<a id="tocscounty"></a>

```json
"Suffolk"
```

The name of the county or parish in which the 5-digit ZIP Code resides. If APO/FPO/DPO, then the county name will be blank.

<h2 id="tocS_county_number">county_number</h2>
<!-- backwards compatibility -->
<a id="schemacounty_number"></a>
<a id="schema_county_number"></a>
<a id="tocScounty_number"></a>
<a id="tocscounty_number"></a>

```json
"string"
```

The Federal Information Processing Standard (FIPS) code assigned to a given county or parish within a state. In Alaska, it identifies a region within the state. If APO/FPO/DPO, and the record type is “S,” “H,” or “F,” the county number will be blank.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|string|false|none|Empty string `""` if not available|
|*oneOf*|number|false|none|FIPS code|

<h2 id="tocS_ecad">ecad</h2>
<!-- backwards compatibility -->
<a id="schemaecad"></a>
<a id="schema_ecad"></a>
<a id="tocSecad"></a>
<a id="tocsecad"></a>

```json
{
  "address_reference": "string",
  "building_group": "Marrian Terrace",
  "building_name": "Rose Cottage",
  "building_number": 22,
  "country": "Ireland",
  "country_iso": "IRL",
  "country_iso_2": "IE",
  "dataset": "ecad",
  "department": "Accounts Department",
  "eircode": "A65 R2AF",
  "id": "paf_8387729",
  "language": "en",
  "latitude": "string",
  "line_1": "string",
  "line_2": "string",
  "line_3": "string",
  "line_4": "string",
  "line_5": "string",
  "line_6": "string",
  "line_7": "string",
  "line_8": "string",
  "line_9": "string",
  "longitude": "string",
  "organisation": "Oak Tree Limited",
  "post_county": "Cork",
  "primary_locality": "Cookstown Industrial Estate",
  "primary_thoroughfare": "Griffith Road",
  "secondary_locality": "Manorhamilton",
  "secondary_thoroughfare": "Navan Road",
  "sub_building_name": "Flat 1",
  "tertiary_locality": "Dublin 14",
  "address_point_id": "10098783",
  "address_type": "string",
  "building_address_type": "string",
  "building_group_address_type": "string",
  "building_group_id": "10098783",
  "building_id": "10098783",
  "building_type": "string",
  "building_use": "R",
  "ded_id": "string",
  "ecad_id": "17000000",
  "gaeltacht": true,
  "gaeltacht_id": "string",
  "holiday_home": "N",
  "local_authority": "string",
  "nace_category": "string",
  "nace_code": "string",
  "nua": true,
  "org_vacant": "Y",
  "organisation_id": "10098783",
  "post_county_id": "10098783",
  "post_town": "string",
  "post_town_id": "10098783",
  "postaim_presort_152": "string",
  "postaim_presort_61": "string",
  "primary_locality_address_type": "string",
  "primary_locality_id": "10098783",
  "primary_thoroughfare_id": "10098783",
  "publicity_post_zone": "string",
  "secondary_locality_address_type": "string",
  "secondary_locality_id": "10098783",
  "secondary_thoroughfare_id": "10098783",
  "small_area_id": "string",
  "townland_id": "string",
  "under_construction": "N",
  "vacant": "Y"
}
```

The ECAD contains additional data for each ECAF address.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address_reference|string|true|none|The address reference is the An Post GeoDirectory address reference identifier used by the Universal Service Provider.|
|building_group|string|true|none|A building group is a collection of buildings with a collective name, located on or near the same thoroughfare.|
|building_name|string|true|none|The name given to the building. Prepended by sub building, if any, when the sub building does not appear on a line to itself. The building name is omitted if it is the same as either the Organisation or Building Group.|
|building_number|string|true|none|A number associated with the whole building. The building number may have a numeric and an alphanumeric component, which are concatenated e.g. 2A, or alternatively will have a simple building number or a complex building number. The building number always relates to the whole building and not a sub-unit within it.<br>A complex building number may be one of the following:<br>  - Dual. Two number separated by '/' e.g. 63/64 = 63, 64<br>  - Sequence. An odd or even sequence of numbers with lower and upper bound separated by an underscore '_' e.g. `1_5` = 1,3,5 and `2_6` = 2,4,6 <br>  - Range. A range of consecutive numbers with lower and upper bound separated by a dash '-' e.g. `63-66` = 63, 64, 56, 66<br>The building number never appears on a line by itself and can prepend Building Group, Primary Thoroughfare or Primary Locality.|
|country|string|true|none|  Full country names (ISO 3166)<br>|
|country_iso|string|true|none|  3 letter country code (ISO 3166-1)<br>|
|country_iso_2|string|true|none| 2 letter country code (ISO 3166-1)<br>|
|dataset|string|true|none|Source of address|
|department|string|true|none|The department or division within an organisation. If the department element exists, then the organisation must also exist.|
|eircode|string|true|none|The seven character Eircode has an A65 F4E2 format. The Eircode is a mandatory address element. The last line of a Postal Address will contain the Eircode, displayed with a space. e.g. `A65 F4E2`.<br><br>The Eircode is always the last line of a Postal Address generated within the state, e.g. if an address has four lines then the Eircode will be on its own on Address Line 5. For inbound international mail the country name IRELAND should be appended as the last line of the Postal Address.|
|id|[ID](#schemaid)|true|none|Global unique internally generated identifier for an address|
|language|string|true|none|Language represented by 2 letter ISO Code (639-1)<br>|
|latitude|[Latitude](#schemalatitude)|true|none|The latitude of the postcode (WGS84/ETRS89).<br><br>Can be a positive or negative decimal. E.g. `51.5083983`.<br><br>Returns an empty string if no location data is available. |
|line_1|string|true|none|Address Line 1|
|line_2|string|true|none|Address Line 2|
|line_3|string|true|none|Address Line 3|
|line_4|string|true|none|Address Line 4|
|line_5|string|true|none|Address Line 5|
|line_6|string|true|none|Address Line 6|
|line_7|string|true|none|Address Line 7|
|line_8|string|true|none|Address Line 8|
|line_9|string|true|none|Address Line 9|
|longitude|[Longitude](#schemalongitude)|true|none|The longitude of the postcode (WGS84/ETRS89).<br><br>Can be a positive or negative decimal. E.g. -0.1283983<br><br>Returns an empty string if no location data is available. |
|organisation|string|true|none|Organisation name|
|post_county|string|true|none|One of the 26 Counties in the Republic of Ireland. These counties are sub-national divisions used for the purposes of administrative, geographical and political demarcation. Post County is the County associated with the Post Town, not the geographic county in which the building is located. The Post County is normally used as part of the Postal Address with some exceptions e.g. Dublin Postal Districts where the Post County is not used and some Post Towns (e.g. Tipperary, Kildare, etc.) that have the same name as the Post County.|
|primary_locality|string|true|none|First locality elements which can refer to areas, districts, industrial estates, towns, etc.<br><br>The primary locality refers to the specific place the address is.<br><br>In urban areas, the primary locality can be required to distinguish between two thoroughfares of the same name in the same district or town. Industrial estates with named thoroughfares are also held as localities. In rural areas the primary locality is generally a townland name.|
|primary_thoroughfare|string|true|none|The name of the thoroughfare on which premises are located. It may appear on a line by itself or be appended to either a sub building or building number.<br><br>Addresses with thoroughfares can sometimes have the thoroughfare excluded where a Building Group exists, such as a Retail Centre or Business Park, and the thoroughfare is not part of the Postal Address.|
|secondary_locality|string|true|none|Never present without a primary locality. The secondary locality has a wider geographic scope than the primary locality.<br><br>It is the secondary locality therefore which differentiates addresses with the same primary locality name within the same county.<br><br>Secondary localities are more likely to be required for rural addresses.<br><br>Second locality elements which can refer to areas, districts, industrial estates, towns, etc<br><br>The secondary locality helps identify where the primary locality is located.|
|secondary_thoroughfare|string|true|none|It is never present without a primary thoroughfare. The primary thoroughfare is dependent on the secondary thoroughfare and appears before the secondary thoroughfare in any address.<br><br>Secondary thoroughfare are generally used to assist locating a primary thoroughfare.|
|sub_building_name|string|true|none|The sub-building refers to an apartment, flat or unit within a building.|
|tertiary_locality|string|true|none|Also known as the Post Town.<br><br>The name of the post town associated with the premises for postal delivery purposes. This includes Dublin Postal Districts "Dublin 1" to "Dublin 24".<br><br>The post town is a significant element of the Postal Address, however it is not always populated in an address. The official post office guide, Eolaí an Phoist4, describes post towns in the following manner:<br><br>"A provincial postal address may include the name of a town or village several miles distant, with which the addressee has little or no connection, and, in some places, especially if this residence happens to be near a county boundary, the name of the neighbouring county instead of the county in which he actually resides. The explanation is that the main mail despatches have to be sent for more detailed sub division to certain centres known as POST TOWNS, chosen because of their accessibility and convenience."|
|address_point_id|string|true|none|Address Point ID|
|address_type|string|true|none|Addresses points can assume one of the following values:<br><br>- Residential Address Point. This type of address point has one residential addresses associated with it.<br>- Non-Residential Address Point. This type of address point has one or more non-residential address (business, club or other organisation) associated with it.<br>- Mixed Address Point. This is a special case where the residential and non residential addresses in the building are essentially the same address. The typical example is a farm house on an active farm. It is important to note that this is a special case. In general a building with both residential and non-residential addresses (e.g. an apartment over a shop) will receive two address points, one commercial and one residential, and hence two Eircodes.<br><br>Buildings can contain multiple address points of type Residential and/or Non-Residential.|
|building_address_type|string|true|none|The building type can assume one of the following values:<br><br>- Single Occupancy Residential Building. This type of building contains one residential address.<br>- Multi Occupancy Residential Building. This type of building contains multiple residential addresses.<br>- Single Occupancy Non-Residential Building. This type of building contains one non-residential address (business, club or other organisation).<br>- Multi Occupancy Non-Residential Building. This type of building contains multiple non-residential addresses (business, club or other organisation).<br>- Multi Occupancy Mixed Use Building. This type of building contains multiple residential and non- residential addresses.<br><br>Buildings can also have a more specific address types such as a Hospital, School, Shopping Centre, etc.|
|building_group_address_type|string|true|none|The building group type can be:<br><br>- Residential Building Group. This type of building group contains buildings with residential addresses only.<br>- Non-Residential Building Group This type of building group contains buildings with non-residential addresses (business, club or other organisation) only.<br>- Mixed Building Group. This type of building group contains buildings with residential and non-residential addresses. Can also have a more specific address type such as a Hospital, School, Shopping Centre, etc.<br><br>Building groups can also have a more specific address type such as a Hospital, School, Shopping Centre, etc.|
|building_group_id|string|true|none|Building Group ID|
|building_id|string|true|none|Building ID|
|building_type|string|true|none|Describes the type of building, e.g. detached, semi-detached, bungalow.|
|building_use|string|true|none|Can be one of:<br><br>- `R` Residential <br>- `C` Commercial<br>- `B` Both <br>- `U` Unknown|
|dataset|string|true|none|none|
|ded_id|string|true|none|Unique Identifier for Electoral Divisions 2017 data.<br><br>Note that this field is subject to breaking changes if a new generation of government data IDs is released. Currently this uses 2017 IDs. Contact us to be notified ahead of his change.|
|ecad_id|string|false|none|Unique 10 digit ECAD ID|
|gaeltacht|boolean|true|none|Gaeltact refers to a district where the Irish government recognises that the Irish language is the predominant language.<br><br>Returns `true` if address is in a Gaeltacht area and `false` if not.|
|gaeltacht_id|string|true|none|Unique Identifier for the 7 Gaeltacht areas 2017 data.<br><br>Note that this field is subject to breaking changes if a new generation of government data IDs is released. Currently this uses 2017 IDs. Contact us to be notified ahead of his change.|
|holiday_home|string|true|none|A Yes/No field, indicating whether or not the building is a holiday home.|
|local_authority|string|true|none|Name of local authority|
|nace_category|string|true|none|Name of the NACE Category|
|nace_code|string|true|none|The NACE Code for the Category.|
|nua|boolean|true|none|NUA means "non-unique address".<br><br>The NUA field contains `true` when the address is a non-unique address, and `false` when it is a unique address.<br><br>Ireland has a very high level of non-unique addresses (NUA), i.e. the address does not contain a unique building number or name. Approximately 35% of all Irish addresses are non-unique which equates to 600,000 addresses.<br><br>The typical example of NUA addressing is where every address in a townland is the same. The way that post is delivered is by local knowledge of postal delivery personnel of which addressee lives in which house.<br><br>N.B. For a NUA address, it is impossible to match to a unique record in the ECAD and assign an Eircode.|
|org_vacant|string|true|none|A Yes/No field, indicating whether the organisation is vacant.|
|organisation_id|string|true|none|Organisation ID|
|post_county_id|string|true|none|Post County ID|
|post_town|string|true|none|The post town is a significant element of the Postal Address, however it is not always populated in an address. The official post office guide, Eolaí an Phoist1, describes post towns in the following manner:<br><br>"A provincial postal address may include the name of a town or village several miles distant, with which the addressee has little or no connection, and, in some places, especially if this residence happens to be near a county boundary, the name of the neighbouring county instead of the county in which he actually resides. The explanation is that the main mail despatches have to be sent for more detailed sub division to certain centres known as post towns, chosen because of their accessibility and convenience."|
|post_town_id|string|true|none|Post Town ID|
|postaim_presort_152|string|true|none|An Post sorting information.|
|postaim_presort_61|string|true|none|An Post sorting information.|
|primary_locality_address_type|string|true|none|The locality type can be:<br>  - Rural Locality. This is generally a townland.<br>  - Industrial Estate. Industrial Estate, Industrial Park, Business Campus, etc.<br>  - Shopping District. Shopping Centre.<br>  - Housing Estate. Residential Housing Estate.<br>  - Village. Based on Census 2011 population < 1,500.<br>  - Town. Based on Census 2011 population > 1,500.<br>  - Urban Area. Wholly within a village/town/city e.g. Rathmines.<br>  - Suburban Locality. This is an area that is both rural and urban, as it is both a townland, and also an area name applied to houses in a town, as the town has extended partially into the townland.<br><br>Where the locality is also the post town, the type can be:<br>  - Village. Based on Census 2011 population < 1,500<br>  - Town. Based on Census 2011 population > 1,500<br>  - Postal District. Dublin 1 to 24<br>  - City. Dublin, Cork, Limerick, Galway or Waterford|
|primary_locality_id|string|true|none|Primary Locality ID|
|primary_thoroughfare_id|string|true|none|Primary Thoroughfare ID|
|publicity_post_zone|string|true|none|An Post publicity post zone information.|
|secondary_locality_address_type|string|true|none|The locality type can be:<br>  - Rural Locality. This is generally a townland.<br>  - Industrial Estate. Industrial Estate, Industrial Park, Business Campus, etc.<br>  - Shopping District. Shopping Centre.<br>  - Housing Estate. Residential Housing Estate.<br>  - Village. Based on Census 2011 population < 1,500.<br>  - Town. Based on Census 2011 population > 1,500.<br>  - Urban Area. Wholly within a village/town/city e.g. Rathmines.<br>  - Suburban Locality. This is an area that is both rural and urban, as it is both a townland, and also an area name applied to houses in a town, as the town has extended partially into the townland.<br><br>Where the locality is also the post town, the type can be:<br>  - Village. Based on Census 2011 population < 1,500<br>  - Town. Based on Census 2011 population > 1,500<br>  - Postal District. Dublin 1 to 24<br>  - City. Dublin, Cork, Limerick, Galway or Waterford|
|secondary_locality_id|string|true|none|Secondary Locality ID|
|secondary_thoroughfare_id|string|true|none|Secondary Thoroughfare ID|
|small_area_id|string|true|none|Unique Identifier for the Small Area 2017 data.<br><br>Note that this field is subject to breaking changes if a new generation of government data IDs is released. Currently this uses 2017 IDs. Contact us to be notified ahead of his change.|
|townland_id|string|true|none|Unique Identifier for townland 2017 data.<br><br>Note that this field is subject to breaking changes if a new generation of government data IDs is released. Currently this uses 2017 IDs. Contact us to be notified ahead of his change.|
|under_construction|string|true|none|A Yes/No field, indicating whether or not the building is under construction.|
|vacant|string|true|none|A Yes/No field, indicating whether the building is vacant.|

#### Enumerated Values

|Property|Value|
|---|---|
|country|Ireland|
|country_iso|IRL|
|country_iso_2|IE|
|language|en|
|language|ga|
|building_use|R|
|building_use|C|
|building_use|B|
|building_use|U|
|dataset|ecad|
|holiday_home|N|
|holiday_home|Y|
|holiday_home|""|
|org_vacant|Y|
|org_vacant|N|
|org_vacant|""|
|under_construction|N|
|under_construction|Y|
|under_construction|""|
|vacant|Y|
|vacant|N|
|vacant|""|

<h2 id="tocS_ecaf">ecaf</h2>
<!-- backwards compatibility -->
<a id="schemaecaf"></a>
<a id="schema_ecaf"></a>
<a id="tocSecaf"></a>
<a id="tocsecaf"></a>

```json
{
  "address_reference": "string",
  "building_group": "Marrian Terrace",
  "building_name": "Rose Cottage",
  "building_number": 22,
  "country": "Ireland",
  "country_iso": "IRL",
  "country_iso_2": "IE",
  "dataset": "ecaf",
  "department": "Accounts Department",
  "eircode": "A65 R2AF",
  "id": "paf_8387729",
  "language": "en",
  "latitude": "string",
  "line_1": "string",
  "line_2": "string",
  "line_3": "string",
  "line_4": "string",
  "line_5": "string",
  "line_6": "string",
  "line_7": "string",
  "line_8": "string",
  "line_9": "string",
  "longitude": "string",
  "organisation": "Oak Tree Limited",
  "post_county": "Cork",
  "primary_locality": "Cookstown Industrial Estate",
  "primary_thoroughfare": "Griffith Road",
  "secondary_locality": "Manorhamilton",
  "secondary_thoroughfare": "Navan Road",
  "sub_building_name": "Flat 1",
  "tertiary_locality": "Dublin 14",
  "ecaf_id": "string"
}
```

ECAF is the Eircode Address File which contains one record for each Postal Address. English language and Irish language versions are available. It is distributed as a flat file, details of data provision and updates are provided in section 2.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address_reference|string|true|none|The address reference is the An Post GeoDirectory address reference identifier used by the Universal Service Provider.|
|building_group|string|true|none|A building group is a collection of buildings with a collective name, located on or near the same thoroughfare.|
|building_name|string|true|none|The name given to the building. Prepended by sub building, if any, when the sub building does not appear on a line to itself. The building name is omitted if it is the same as either the Organisation or Building Group.|
|building_number|string|true|none|A number associated with the whole building. The building number may have a numeric and an alphanumeric component, which are concatenated e.g. 2A, or alternatively will have a simple building number or a complex building number. The building number always relates to the whole building and not a sub-unit within it.<br>A complex building number may be one of the following:<br>  - Dual. Two number separated by '/' e.g. 63/64 = 63, 64<br>  - Sequence. An odd or even sequence of numbers with lower and upper bound separated by an underscore '_' e.g. `1_5` = 1,3,5 and `2_6` = 2,4,6 <br>  - Range. A range of consecutive numbers with lower and upper bound separated by a dash '-' e.g. `63-66` = 63, 64, 56, 66<br>The building number never appears on a line by itself and can prepend Building Group, Primary Thoroughfare or Primary Locality.|
|country|string|true|none|  Full country names (ISO 3166)<br>|
|country_iso|string|true|none|  3 letter country code (ISO 3166-1)<br>|
|country_iso_2|string|true|none| 2 letter country code (ISO 3166-1)<br>|
|dataset|string|true|none|Source of address|
|department|string|true|none|The department or division within an organisation. If the department element exists, then the organisation must also exist.|
|eircode|string|true|none|The seven character Eircode has an A65 F4E2 format. The Eircode is a mandatory address element. The last line of a Postal Address will contain the Eircode, displayed with a space. e.g. `A65 F4E2`.<br><br>The Eircode is always the last line of a Postal Address generated within the state, e.g. if an address has four lines then the Eircode will be on its own on Address Line 5. For inbound international mail the country name IRELAND should be appended as the last line of the Postal Address.|
|id|[ID](#schemaid)|true|none|Global unique internally generated identifier for an address|
|language|string|true|none|Language represented by 2 letter ISO Code (639-1)<br>|
|latitude|[Latitude](#schemalatitude)|true|none|The latitude of the postcode (WGS84/ETRS89).<br><br>Can be a positive or negative decimal. E.g. `51.5083983`.<br><br>Returns an empty string if no location data is available. |
|line_1|string|true|none|Address Line 1|
|line_2|string|true|none|Address Line 2|
|line_3|string|true|none|Address Line 3|
|line_4|string|true|none|Address Line 4|
|line_5|string|true|none|Address Line 5|
|line_6|string|true|none|Address Line 6|
|line_7|string|true|none|Address Line 7|
|line_8|string|true|none|Address Line 8|
|line_9|string|true|none|Address Line 9|
|longitude|[Longitude](#schemalongitude)|true|none|The longitude of the postcode (WGS84/ETRS89).<br><br>Can be a positive or negative decimal. E.g. -0.1283983<br><br>Returns an empty string if no location data is available. |
|organisation|string|true|none|Organisation name|
|post_county|string|true|none|One of the 26 Counties in the Republic of Ireland. These counties are sub-national divisions used for the purposes of administrative, geographical and political demarcation. Post County is the County associated with the Post Town, not the geographic county in which the building is located. The Post County is normally used as part of the Postal Address with some exceptions e.g. Dublin Postal Districts where the Post County is not used and some Post Towns (e.g. Tipperary, Kildare, etc.) that have the same name as the Post County.|
|primary_locality|string|true|none|First locality elements which can refer to areas, districts, industrial estates, towns, etc.<br><br>The primary locality refers to the specific place the address is.<br><br>In urban areas, the primary locality can be required to distinguish between two thoroughfares of the same name in the same district or town. Industrial estates with named thoroughfares are also held as localities. In rural areas the primary locality is generally a townland name.|
|primary_thoroughfare|string|true|none|The name of the thoroughfare on which premises are located. It may appear on a line by itself or be appended to either a sub building or building number.<br><br>Addresses with thoroughfares can sometimes have the thoroughfare excluded where a Building Group exists, such as a Retail Centre or Business Park, and the thoroughfare is not part of the Postal Address.|
|secondary_locality|string|true|none|Never present without a primary locality. The secondary locality has a wider geographic scope than the primary locality.<br><br>It is the secondary locality therefore which differentiates addresses with the same primary locality name within the same county.<br><br>Secondary localities are more likely to be required for rural addresses.<br><br>Second locality elements which can refer to areas, districts, industrial estates, towns, etc<br><br>The secondary locality helps identify where the primary locality is located.|
|secondary_thoroughfare|string|true|none|It is never present without a primary thoroughfare. The primary thoroughfare is dependent on the secondary thoroughfare and appears before the secondary thoroughfare in any address.<br><br>Secondary thoroughfare are generally used to assist locating a primary thoroughfare.|
|sub_building_name|string|true|none|The sub-building refers to an apartment, flat or unit within a building.|
|tertiary_locality|string|true|none|Also known as the Post Town.<br><br>The name of the post town associated with the premises for postal delivery purposes. This includes Dublin Postal Districts "Dublin 1" to "Dublin 24".<br><br>The post town is a significant element of the Postal Address, however it is not always populated in an address. The official post office guide, Eolaí an Phoist4, describes post towns in the following manner:<br><br>"A provincial postal address may include the name of a town or village several miles distant, with which the addressee has little or no connection, and, in some places, especially if this residence happens to be near a county boundary, the name of the neighbouring county instead of the county in which he actually resides. The explanation is that the main mail despatches have to be sent for more detailed sub division to certain centres known as POST TOWNS, chosen because of their accessibility and convenience."|
|dataset|string|true|none|none|
|ecaf_id|string|true|none|The unique identifier in the ECAF is the `ecaf_id`. This unique identifier allows each address in the ECAF to be uniquely identified. It can also be used as index once the data has been imported into a relational database. This is a numeric field that can store values from 0 to 2,147,483,647. It is represented as a number up to 10 digits long. All other fields in ECAF are alphanumeric.|

#### Enumerated Values

|Property|Value|
|---|---|
|country|Ireland|
|country_iso|IRL|
|country_iso_2|IE|
|language|en|
|language|ga|
|dataset|ecaf|

<h2 id="tocS_finance_number">finance_number</h2>
<!-- backwards compatibility -->
<a id="schemafinance_number"></a>
<a id="schema_finance_number"></a>
<a id="tocSfinance_number"></a>
<a id="tocsfinance_number"></a>

```json
"string"
```

A code assigned to Postal Service facilities (primarily Post Offices) to collect cost and statistical data and compile revenue and expense data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|string|false|none|Empty string `""` if not available|
|*oneOf*|number|false|none|Finance Number|

<h2 id="tocS_geonames">geonames</h2>
<!-- backwards compatibility -->
<a id="schemageonames"></a>
<a id="schema_geonames"></a>
<a id="tocSgeonames"></a>
<a id="tocsgeonames"></a>

```json
{
  "admin1_code": "ENG",
  "admin1_geonameid": 5353,
  "admin1_name": "England",
  "admin2_code": "06",
  "admin2_geonameid": 5353,
  "admin2_name": "England",
  "admin3_code": "08",
  "admin4_code": "07",
  "alternatenames": [
    "London"
  ],
  "asciiname": "London",
  "cc2": [
    "IE"
  ],
  "country_code": "GB",
  "dataset": "geonames",
  "dem": 32,
  "elevation": 0,
  "feature_class": "A",
  "feature_code": "ADM1",
  "geonameid": 5353,
  "id": "geonames_5353",
  "latitude": "string",
  "longitude": "string",
  "modification_date": "2015-03-09",
  "name": "London",
  "population": "7392832",
  "timezone": "Europe/London"
}
```

Full GeoNames place specification

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|admin1_code|string|true|none|Fipscode (subject to change to iso code)|
|admin1_geonameid|integer(int32) \| null|true|none|GeoName ID for first administrative area|
|admin1_name|string|true|none|Name of first administrative area|
|admin2_code|string|true|none|Code for the second administrative division|
|admin2_geonameid|integer(int32) \| null|true|none|GeoName ID for second administrative area|
|admin2_name|string|true|none|Name of second administrative area|
|admin3_code|string|true|none|Code for third level administrative division|
|admin4_code|string|true|none|Code for fourth level administrative division|
|alternatenames|[string]|true|none|List of alternate ASCII names|
|asciiname|string|true|none|Place Name (ASCII)|
|cc2|[string]|true|none|List of other countries codes mapping to this place|
|country_code|string|true|none|2 Letter ISO country code|
|dataset|string|false|none|none|
|dem|integer(int32) \| null|true|none|Digital elevation model|
|elevation|integer(int32) \| null|true|none|Elevation in meters|
|feature_class|string|true|none|GeoNames single letter feature code|
|feature_code|string|true|none|Full GeoNames feature code (http://www.geonames.org/export/codes.html)|
|geonameid|integer(int32)|true|none|Unique identifier for GeoNames place|
|id|string|false|none|Unique place ID|
|latitude|[Latitude](#schemalatitude)|true|none|The latitude of the postcode (WGS84/ETRS89).<br><br>Can be a positive or negative decimal. E.g. `51.5083983`.<br><br>Returns an empty string if no location data is available. |
|longitude|[Longitude](#schemalongitude)|true|none|The longitude of the postcode (WGS84/ETRS89).<br><br>Can be a positive or negative decimal. E.g. -0.1283983<br><br>Returns an empty string if no location data is available. |
|modification_date|string|true|none|Datetime format|
|name|string|true|none|Place name (UTF8)|
|population|string|true|none|Population at place. Represented as string as it could be a larger than a 32bit integer|
|timezone|string|true|none|The IANA timezone ID|

#### Enumerated Values

|Property|Value|
|---|---|
|dataset|geonames|
|feature_class|A|
|feature_class|H|
|feature_class|L|
|feature_class|P|
|feature_class|R|
|feature_class|S|
|feature_class|T|
|feature_class|U|
|feature_class|V|

<h2 id="tocS_government_building_indicator">government_building_indicator</h2>
<!-- backwards compatibility -->
<a id="schemagovernment_building_indicator"></a>
<a id="schema_government_building_indicator"></a>
<a id="tocSgovernment_building_indicator"></a>
<a id="tocsgovernment_building_indicator"></a>

```json
""
```

An alphabetic value that identifies the type of government agency at the delivery point and/or whether a firm is the only delivery at an address. For this purpose, "address" is defined as the complete delivery line (e.g., complete street address and, if included as part of the firm record, the secondary abbreviation and/or address secondary number).
- A = City government building—alternates only
- B = Federal government building—alternates only
- C = State government building—alternates only
- D = Firm only—base and alternates
- E = City government building and firm only—alternates only
- F = Federal government building and firm only—alternates only
- G = State government building and firm only—alternates only

<h2 id="tocS_lacs_status_indicator">lacs_status_indicator</h2>
<!-- backwards compatibility -->
<a id="schemalacs_status_indicator"></a>
<a id="schema_lacs_status_indicator"></a>
<a id="tocSlacs_status_indicator"></a>
<a id="tocslacs_status_indicator"></a>

```json
""
```

The Locatable Address Conversion Service (LACS) indicator describes records that have been converted to the LACS system (a product/system in a different USPS® product line that allows mailers to identify and convert a rural route address to a city-style address). Rural route and some city addresses are being modified to city-style addresses so that emergency services (e.g., ambulances, police) can find these addresses more efficiently.
- L = LACS address: The old (usually rural-route) address that has been converted for the LACS system.
- Blank = Not applicable

<h2 id="tocS_last_line">last_line</h2>
<!-- backwards compatibility -->
<a id="schemalast_line"></a>
<a id="schema_last_line"></a>
<a id="tocSlast_line"></a>
<a id="tocslast_line"></a>

```json
"Greenwich CT 06830-1234"
```

Last line of the address comprising of city, state, zip code and zip+4

<h2 id="tocS_line_1">line_1</h2>
<!-- backwards compatibility -->
<a id="schemaline_1"></a>
<a id="schema_line_1"></a>
<a id="tocSline_1"></a>
<a id="tocsline_1"></a>

```json
"12 Armstrong Ct Apt 12"
```

The primary delivery line (usually the street address) of the address.

<h2 id="tocS_line_2">line_2</h2>
<!-- backwards compatibility -->
<a id="schemaline_2"></a>
<a id="schema_line_2"></a>
<a id="tocSline_2"></a>
<a id="tocsline_2"></a>

```json
"9450 Pinecroft Dr"
```

Secondary delivery line of the address. Typically populated if the first line is the firm or building name.

<h2 id="tocS_municipality_city_state_key">municipality_city_state_key</h2>
<!-- backwards compatibility -->
<a id="schemamunicipality_city_state_key"></a>
<a id="schema_municipality_city_state_key"></a>
<a id="tocSmunicipality_city_state_key"></a>
<a id="tocsmunicipality_city_state_key"></a>

```json
"string"
```

Municipality City State Key. Currently blank.

<h2 id="tocS_paf_administrative_county">paf_administrative_county</h2>
<!-- backwards compatibility -->
<a id="schemapaf_administrative_county"></a>
<a id="schema_paf_administrative_county"></a>
<a id="tocSpaf_administrative_county"></a>
<a id="tocspaf_administrative_county"></a>

```json
""
```

The current administrative county to which the postcode has been assigned.

A Unitary Authority name, where one is present. If there is no Unitary Authority, the County name is used. This information is not static, because County boundaries may change due to administrative changes. Data

source: ONS

<h2 id="tocS_paf_building_name">paf_building_name</h2>
<!-- backwards compatibility -->
<a id="schemapaf_building_name"></a>
<a id="schema_paf_building_name"></a>
<a id="tocSpaf_building_name"></a>
<a id="tocspaf_building_name"></a>

```json
""
```

Name of residential or commercial premise. 

Examples:
  - The Manor
  - 1-2
  - A
  - 12A
  - K
  - Victoria House

<h2 id="tocS_paf_building_number">paf_building_number</h2>
<!-- backwards compatibility -->
<a id="schemapaf_building_number"></a>
<a id="schema_paf_building_number"></a>
<a id="tocSpaf_building_number"></a>
<a id="tocspaf_building_number"></a>

```json
"10"
```

Number to identify premise on a thoroughfare or dependant thoroughfare.

<h2 id="tocS_paf_country">paf_country</h2>
<!-- backwards compatibility -->
<a id="schemapaf_country"></a>
<a id="schema_paf_country"></a>
<a id="tocSpaf_country"></a>
<a id="tocspaf_country"></a>

```json
"England"
```

  Full country names (ISO 3166)

<h2 id="tocS_paf_country_iso">paf_country_iso</h2>
<!-- backwards compatibility -->
<a id="schemapaf_country_iso"></a>
<a id="schema_paf_country_iso"></a>
<a id="tocSpaf_country_iso"></a>
<a id="tocspaf_country_iso"></a>

```json
"string"
```

  3 letter country code (ISO 3166-1)

<h2 id="tocS_paf_country_iso_2">paf_country_iso_2</h2>
<!-- backwards compatibility -->
<a id="schemapaf_country_iso_2"></a>
<a id="schema_paf_country_iso_2"></a>
<a id="tocSpaf_country_iso_2"></a>
<a id="tocspaf_country_iso_2"></a>

```json
"string"
```

 2 letter country code (ISO 3166-1)

<h2 id="tocS_paf_county">paf_county</h2>
<!-- backwards compatibility -->
<a id="schemapaf_county"></a>
<a id="schema_paf_county"></a>
<a id="tocSpaf_county"></a>
<a id="tocspaf_county"></a>

```json
"London"
```

Since postal, administrative or traditional counties may not apply to some addresses, the county field is designed to return whatever county data is available. Normally, the postal county is returned. If this is not present, the county field will fall back to the administrative county. If the administrative county is also not present, the county field will fall back to the traditional county. May be empty in cases where no administrative, postal or traditional county present.

<h2 id="tocS_paf_dataset">paf_dataset</h2>
<!-- backwards compatibility -->
<a id="schemapaf_dataset"></a>
<a id="schema_paf_dataset"></a>
<a id="tocSpaf_dataset"></a>
<a id="tocspaf_dataset"></a>

```json
"string"
```

Indicates the provenance of an address

<h2 id="tocS_paf_delivery_point_suffix">paf_delivery_point_suffix</h2>
<!-- backwards compatibility -->
<a id="schemapaf_delivery_point_suffix"></a>
<a id="schema_paf_delivery_point_suffix"></a>
<a id="tocSpaf_delivery_point_suffix"></a>
<a id="tocspaf_delivery_point_suffix"></a>

```json
"1A"
```

A unique Royal Mail 2-character code (the first numeric & the second alphabetical), which, when added to the Postcode, enables each live Delivery Point to be uniquely identified. Once the Delivery Point is deleted from PAF the DPS may be reused (although they aren’t reused until all remaining Delivery Points in the range have been allocated). The DPS for a Large User is always '1A' as each Large User has its own Postcode.

<h2 id="tocS_paf_department_name">paf_department_name</h2>
<!-- backwards compatibility -->
<a id="schemapaf_department_name"></a>
<a id="schema_paf_department_name"></a>
<a id="tocSpaf_department_name"></a>
<a id="tocspaf_department_name"></a>

```json
""
```

Used to supplment Organisation Name to identify a deparment within the organisation.

<h2 id="tocS_paf_dependant_locality">paf_dependant_locality</h2>
<!-- backwards compatibility -->
<a id="schemapaf_dependant_locality"></a>
<a id="schema_paf_dependant_locality"></a>
<a id="tocSpaf_dependant_locality"></a>
<a id="tocspaf_dependant_locality"></a>

```json
""
```

When the same thoroughfare name reoccurs in a Post town, it may not be possible to make it dependant on a dependant thoroughfare. In this case the thoroughfare is dependant on a locality. For example if we want to find 1 Back Lane in Huddersfield we see that there are three.

<h2 id="tocS_paf_dependant_thoroughfare">paf_dependant_thoroughfare</h2>
<!-- backwards compatibility -->
<a id="schemapaf_dependant_thoroughfare"></a>
<a id="schema_paf_dependant_thoroughfare"></a>
<a id="tocSpaf_dependant_thoroughfare"></a>
<a id="tocspaf_dependant_thoroughfare"></a>

```json
""
```

Used to supplement thoroughfare. When a thoroughfare name is used twice in the same Post Town, the dependant thoroughfare is added to uniquely indentify a delivery point.

<h2 id="tocS_paf_district">paf_district</h2>
<!-- backwards compatibility -->
<a id="schemapaf_district"></a>
<a id="schema_paf_district"></a>
<a id="tocSpaf_district"></a>
<a id="tocspaf_district"></a>

```json
"Westminster"
```

The current district/unitary authority to which the postcode has been assigned.

<h2 id="tocS_paf_double_dependant_locality">paf_double_dependant_locality</h2>
<!-- backwards compatibility -->
<a id="schemapaf_double_dependant_locality"></a>
<a id="schema_paf_double_dependant_locality"></a>
<a id="tocSpaf_double_dependant_locality"></a>
<a id="tocspaf_double_dependant_locality"></a>

```json
""
```

Used to supplement Dependant Locality. A Double Dependant Locality supplied along with a Dependant Locality if the Dependant Locality exists twice in the same locality.

<h2 id="tocS_paf_language">paf_language</h2>
<!-- backwards compatibility -->
<a id="schemapaf_language"></a>
<a id="schema_paf_language"></a>
<a id="tocSpaf_language"></a>
<a id="tocspaf_language"></a>

```json
"string"
```

Language represented by 2 letter ISO Code (639-1)

<h2 id="tocS_paf_line1">paf_line1</h2>
<!-- backwards compatibility -->
<a id="schemapaf_line1"></a>
<a id="schema_paf_line1"></a>
<a id="tocSpaf_line1"></a>
<a id="tocspaf_line1"></a>

```json
"Prime Minister &amp; First Lord of Treasury"
```

First Address Line. Often contains premise and thoroughfare information. In the case of a commercial premise, the first line is always the full name of the registered organisation. Never empty.

<h2 id="tocS_paf_line2">paf_line2</h2>
<!-- backwards compatibility -->
<a id="schemapaf_line2"></a>
<a id="schema_paf_line2"></a>
<a id="tocSpaf_line2"></a>
<a id="tocspaf_line2"></a>

```json
"10 Downing Street"
```

Second Address Line. Often contains thoroughfare and locality information. May be empty

<h2 id="tocS_paf_line3">paf_line3</h2>
<!-- backwards compatibility -->
<a id="schemapaf_line3"></a>
<a id="schema_paf_line3"></a>
<a id="tocSpaf_line3"></a>
<a id="tocspaf_line3"></a>

```json
""
```

Third address line. May be empty.

<h2 id="tocS_paf_organisation_name">paf_organisation_name</h2>
<!-- backwards compatibility -->
<a id="schemapaf_organisation_name"></a>
<a id="schema_paf_organisation_name"></a>
<a id="tocSpaf_organisation_name"></a>
<a id="tocspaf_organisation_name"></a>

```json
"Prime Minister &amp; First Lord Of The Treasury"
```

Used to supplment Organisation Name to identify a deparment within the organisation

<h2 id="tocS_paf_pobox">paf_pobox</h2>
<!-- backwards compatibility -->
<a id="schemapaf_pobox"></a>
<a id="schema_paf_pobox"></a>
<a id="tocSpaf_pobox"></a>
<a id="tocspaf_pobox"></a>

```json
"100"
```

When the PO Box Number field is populated it will contain PO BOX nnnnnn where n represents the PO Box number. Note that the PO Box details can occasionally consist of a combination of numbers and letters. PO Box Numbers are only allocated to Large Users.

<h2 id="tocS_paf_post_town">paf_post_town</h2>
<!-- backwards compatibility -->
<a id="schemapaf_post_town"></a>
<a id="schema_paf_post_town"></a>
<a id="tocSpaf_post_town"></a>
<a id="tocspaf_post_town"></a>

```json
"London"
```

A Post Town is mandatory for delivery of mail to a Delivery Point. This is not necessarily the nearest town geographically, but a routing instruction to the Royal Mail delivery office sorting mail for that Delivery Point. A Post Town will always be present in every address, and for some Localities the Post Town will be the only locality element present.

<h2 id="tocS_paf_postal_county">paf_postal_county</h2>
<!-- backwards compatibility -->
<a id="schemapaf_postal_county"></a>
<a id="schema_paf_postal_county"></a>
<a id="tocSpaf_postal_county"></a>
<a id="tocspaf_postal_county"></a>

```json
"London"
```

Postal counties were used for the distribution of mail before the Postcode system was introduced in the 1970s. The Former Postal County was the Administrative County at the time. This data rarely changes. May be empty.

<h2 id="tocS_paf_postcode">paf_postcode</h2>
<!-- backwards compatibility -->
<a id="schemapaf_postcode"></a>
<a id="schema_paf_postcode"></a>
<a id="tocSpaf_postcode"></a>
<a id="tocspaf_postcode"></a>

```json
"SW1A 2AA"
```

Correctly formatted postcode. Capitalised and spaced.

<h2 id="tocS_paf_postcode_inward">paf_postcode_inward</h2>
<!-- backwards compatibility -->
<a id="schemapaf_postcode_inward"></a>
<a id="schema_paf_postcode_inward"></a>
<a id="tocSpaf_postcode_inward"></a>
<a id="tocspaf_postcode_inward"></a>

```json
"2AA"
```

The second part of a postcode is known as the inward code. e.g. The inward code of ID1 1QD is 1QD.

The number identifies the sector in the postal district. The number is followed by 2 letters. The letters then define one or more properties in that sector.

<h2 id="tocS_paf_postcode_outward">paf_postcode_outward</h2>
<!-- backwards compatibility -->
<a id="schemapaf_postcode_outward"></a>
<a id="schema_paf_postcode_outward"></a>
<a id="tocSpaf_postcode_outward"></a>
<a id="tocspaf_postcode_outward"></a>

```json
"SW1A"
```

The first part of a postcode is known as the outward code. e.g. The outward code of ID1 1QD is ID1. Enables mail to be sorted to the correct local area for delivery. This part of the code contains the area and the district to which the mail is to be delivered, e.g. ‘PO1’, ‘SW1A’ or ‘B23’.

<h2 id="tocS_paf_postcode_type">paf_postcode_type</h2>
<!-- backwards compatibility -->
<a id="schemapaf_postcode_type"></a>
<a id="schema_paf_postcode_type"></a>
<a id="tocSpaf_postcode_type"></a>
<a id="tocspaf_postcode_type"></a>

```json
"S"
```

This indicates the type of user. It can only take the values 'S' or 'L' indicating small or large respectively. Large User Postcodes. These are assigned to one single address either due to the large volume of mail received at that address, or because a PO Box or Selectapost service has been set up. Small User Postcodes. These identify a group of Delivery Points.

On average there are 15 Delivery Points per Postcode. However this can vary between 1 and, in some cases, 100. There will never be more than 100 Delivery Points on a Postcode.

<h2 id="tocS_paf_premise">paf_premise</h2>
<!-- backwards compatibility -->
<a id="schemapaf_premise"></a>
<a id="schema_paf_premise"></a>
<a id="tocSpaf_premise"></a>
<a id="tocspaf_premise"></a>

```json
"10"
```

A pre-computed string which sensibly combines building_number, building_name and sub_building_name. building_number, building_name and sub_building_name represent raw data from Royal Mail's and can be difficult to parse if you are unaware of how the Postcode Address File premise fields work together. For this reason, we also provide a pre-computed premise field which intelligently gathers these points into a single, simple premise string. This field is ideal if you want to pull premise information and thoroughfare information separately instead of using our address lines data.

<h2 id="tocS_paf_su_organisation_indicator">paf_su_organisation_indicator</h2>
<!-- backwards compatibility -->
<a id="schemapaf_su_organisation_indicator"></a>
<a id="schema_paf_su_organisation_indicator"></a>
<a id="tocSpaf_su_organisation_indicator"></a>
<a id="tocspaf_su_organisation_indicator"></a>

```json
"Y"
```

Small User Organisation Indicator can have the values 'Y' or space. A value of 'Y' indicates that a Small User Organisation is present at this address.

<h2 id="tocS_paf_sub_building_name">paf_sub_building_name</h2>
<!-- backwards compatibility -->
<a id="schemapaf_sub_building_name"></a>
<a id="schema_paf_sub_building_name"></a>
<a id="tocSpaf_sub_building_name"></a>
<a id="tocspaf_sub_building_name"></a>

```json
"Flat 1"
```

When a premise is split into individual units such as flats, apartments or business units. Cannot be present without either building_name or building_number. E.g. Flat 1, A, 10B

<h2 id="tocS_paf_thoroughfare">paf_thoroughfare</h2>
<!-- backwards compatibility -->
<a id="schemapaf_thoroughfare"></a>
<a id="schema_paf_thoroughfare"></a>
<a id="tocSpaf_thoroughfare"></a>
<a id="tocspaf_thoroughfare"></a>

```json
"Downing Street"
```

Also known as the street or road name. In general each Thoroughfare Name will have a separate Postcode. Longer Thoroughfares with high number ranges often have multiple Postcodes covering the entire length of the road, with breaks at suitable points e.g. junctions or natural breaks in the road.

<h2 id="tocS_paf_traditional_county">paf_traditional_county</h2>
<!-- backwards compatibility -->
<a id="schemapaf_traditional_county"></a>
<a id="schema_paf_traditional_county"></a>
<a id="tocSpaf_traditional_county"></a>
<a id="tocspaf_traditional_county"></a>

```json
"Greater London"
```

Traditional counties are provided by the Association of British Counties. It is historical data, and can date from the 1800s. May be empty.

<h2 id="tocS_paf_udprn">paf_udprn</h2>
<!-- backwards compatibility -->
<a id="schemapaf_udprn"></a>
<a id="schema_paf_udprn"></a>
<a id="tocSpaf_udprn"></a>
<a id="tocspaf_udprn"></a>

```json
23747771
```

UDPRN stands for ‘Unique Delivery Point Reference Number’. Royal Mail assigns a unique UDPRN code for each premise on PAF. Simple, unique reference number for each Delivery Point. Unlikely to be reused when an address expires.

Up to 8-digit numeric code.

A new UDPRN is automatically assigned to each new Delivery Point added to PAF.

<h2 id="tocS_paf_umprn">paf_umprn</h2>
<!-- backwards compatibility -->
<a id="schemapaf_umprn"></a>
<a id="schema_paf_umprn"></a>
<a id="tocSpaf_umprn"></a>
<a id="tocspaf_umprn"></a>

```json
"string"
```

A small minority of individual premises (as identified by a UDPRN) may have multiple occupants behind the same letterbox. These are known as Multiple Residence occupants and can be queried via the Multiple Residence dataset. Simple, unique reference number for each Multiple Residence occupant.

Note: this will be an empty string `""` when not used.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|string|false|none|If premise is not multiple occupancy, this will be an empty string|
|*oneOf*|number|false|none|If premise is multiple occupancy, this will be an integer|

<h2 id="tocS_paf_uprn">paf_uprn</h2>
<!-- backwards compatibility -->
<a id="schemapaf_uprn"></a>
<a id="schema_paf_uprn"></a>
<a id="tocSpaf_uprn"></a>
<a id="tocspaf_uprn"></a>

```json
"string"
```

UPRN stands for Unique Property Reference Number and is maintained by the Ordnance Survey (OS). Local governments in the UK have allocated a unique number for each land or property.

Up to 12 digits in length.

Multiple Residence premises currently share the same UPRN as the parent premise.

May not be available for a small number of Great Britain addresses due to longer update cycles for Ordnance Survey's AddressBase datasets. Returns empty string "" in these instances.

Although UPRN takes an integer format, we encode and transmit this data as strings. As a 12 digit number, the UPRN can exceed the maximum safe integer `Number.MAX_SAFE_INTEGER` in most browsers causing this datapoint to be corrupted.

Take special care when storing UPRN. As a 12 digit identifier, you will need 64 bits to encode every possible UPRN value. This means applications like Excel will corrupt cells containing UPRN values.

<h2 id="tocS_paf_ward">paf_ward</h2>
<!-- backwards compatibility -->
<a id="schemapaf_ward"></a>
<a id="schema_paf_ward"></a>
<a id="tocSpaf_ward"></a>
<a id="tocspaf_ward"></a>

```json
"St. James'"
```

The current administrative/electoral area to which the postcode has been assigned. May be empty for a small number of addresses.

<h2 id="tocS_place_country_iso">place_country_iso</h2>
<!-- backwards compatibility -->
<a id="schemaplace_country_iso"></a>
<a id="schema_place_country_iso"></a>
<a id="tocSplace_country_iso"></a>
<a id="tocsplace_country_iso"></a>

```json
"GBR"
```

  3 letter country code (ISO 3166-1)

<h2 id="tocS_place_descriptive_name">place_descriptive_name</h2>
<!-- backwards compatibility -->
<a id="schemaplace_descriptive_name"></a>
<a id="schema_place_descriptive_name"></a>
<a id="tocSplace_descriptive_name"></a>
<a id="tocsplace_descriptive_name"></a>

```json
"London, United Kingdom"
```

Longer form description of the place.

<h2 id="tocS_place_id">place_id</h2>
<!-- backwards compatibility -->
<a id="schemaplace_id"></a>
<a id="schema_place_id"></a>
<a id="tocSplace_id"></a>
<a id="tocsplace_id"></a>

```json
"geonames_5324"
```

Unique identifier for place

<h2 id="tocS_place_name">place_name</h2>
<!-- backwards compatibility -->
<a id="schemaplace_name"></a>
<a id="schema_place_name"></a>
<a id="tocSplace_name"></a>
<a id="tocsplace_name"></a>

```json
"London"
```

Place name

<h2 id="tocS_plus_4_code">plus_4_code</h2>
<!-- backwards compatibility -->
<a id="schemaplus_4_code"></a>
<a id="schema_plus_4_code"></a>
<a id="tocSplus_4_code"></a>
<a id="tocsplus_4_code"></a>

```json
"1234"
```

4 digit ZIP add-on code.

<h2 id="tocS_preferred_city">preferred_city</h2>
<!-- backwards compatibility -->
<a id="schemapreferred_city"></a>
<a id="schema_preferred_city"></a>
<a id="tocSpreferred_city"></a>
<a id="tocspreferred_city"></a>

```json
"AGUADA"
```

Field that contains the default preferred or alternate preferred last-line name for a ZIP Code.

<h2 id="tocS_preferred_last_line_city_state_key">preferred_last_line_city_state_key</h2>
<!-- backwards compatibility -->
<a id="schemapreferred_last_line_city_state_key"></a>
<a id="schema_preferred_last_line_city_state_key"></a>
<a id="tocSpreferred_last_line_city_state_key"></a>
<a id="tocspreferred_last_line_city_state_key"></a>

```json
"V13916"
```

In the Carrier Route, Five-Digit ZIP Code, Delivery Statistics, and ZIP + 4 products, an index to the City State product record that provides the preferred last-line name for this address range. In the City State product, the preferred last line city/state key contains the key value of a City State product record that has the default preferred or alternate preferred last-line key for a given ZIP Code.

<h2 id="tocS_primary_number">primary_number</h2>
<!-- backwards compatibility -->
<a id="schemaprimary_number"></a>
<a id="schema_primary_number"></a>
<a id="tocSprimary_number"></a>
<a id="tocsprimary_number"></a>

```json
"A298"
```

A house, rural route, contract box, or Post Office Box number. The numeric or alphanumeric component of an address preceding the street name. Often referred to as house number.

<h2 id="tocS_record_type_code">record_type_code</h2>
<!-- backwards compatibility -->
<a id="schemarecord_type_code"></a>
<a id="schema_record_type_code"></a>
<a id="tocSrecord_type_code"></a>
<a id="tocsrecord_type_code"></a>

```json
"G"
```

An alphabetic value that identifies the type of data in the record. - G = General delivery (5-Digit ZIP, ZIP + 4, and Carrier Route products) - H = High-rise (ZIP + 4 only) - F = Firm (ZIP + 4 only) - S = Street (5-Digit ZIP, ZIP + 4, and Carrier Route products) - P = PO Box (5-Digit ZIP, ZIP + 4, and Carrier Route products) - R = Rural route/contract (5-Digit ZIP, ZIP + 4, and Carrier Route products) - M = Multi-carrier (Carrier Route product only)

<h2 id="tocS_secondary_number">secondary_number</h2>
<!-- backwards compatibility -->
<a id="schemasecondary_number"></a>
<a id="schema_secondary_number"></a>
<a id="tocSsecondary_number"></a>
<a id="tocssecondary_number"></a>

```json
"123A"
```

Number of the sub unit, apartment, suite etc

<h2 id="tocS_state">state</h2>
<!-- backwards compatibility -->
<a id="schemastate"></a>
<a id="schema_state"></a>
<a id="tocSstate"></a>
<a id="tocsstate"></a>

```json
"New York"
```

Full name of a state, U.S. territory, or armed forces ZIP Code designation.

<h2 id="tocS_state_abbreviation">state_abbreviation</h2>
<!-- backwards compatibility -->
<a id="schemastate_abbreviation"></a>
<a id="schema_state_abbreviation"></a>
<a id="tocSstate_abbreviation"></a>
<a id="tocsstate_abbreviation"></a>

```json
"NY"
```

A 2-character abbreviation for the name of a state, U.S. territory, or armed forces ZIP Code designation. If APO/FPO/DPO, then the state abbreviation will be “AA,” “AE,” or “AP.”

<h2 id="tocS_street_name">street_name</h2>
<!-- backwards compatibility -->
<a id="schemastreet_name"></a>
<a id="schema_street_name"></a>
<a id="tocSstreet_name"></a>
<a id="tocsstreet_name"></a>

```json
"GOSHEN"
```

The official name of a street as assigned by a local governing authority. The Street Name field contains only the street name and does not include directionals (EAST, WEST, etc.) or suffixes (ST, DR, BLVD, etc.). This element may also contain literals, such as PO BOX, GENERAL DELIVERY, USS, PSC, or UNIT.

<h2 id="tocS_street_post_directional_abbreviation">street_post_directional_abbreviation</h2>
<!-- backwards compatibility -->
<a id="schemastreet_post_directional_abbreviation"></a>
<a id="schema_street_post_directional_abbreviation"></a>
<a id="tocSstreet_post_directional_abbreviation"></a>
<a id="tocsstreet_post_directional_abbreviation"></a>

```json
"string"
```

A geographic direction that follows the street name.

<h2 id="tocS_street_pre_directional_abbreviation">street_pre_directional_abbreviation</h2>
<!-- backwards compatibility -->
<a id="schemastreet_pre_directional_abbreviation"></a>
<a id="schema_street_pre_directional_abbreviation"></a>
<a id="tocSstreet_pre_directional_abbreviation"></a>
<a id="tocsstreet_pre_directional_abbreviation"></a>

```json
"string"
```

A geographic direction that precedes the street name.

<h2 id="tocS_street_suffix_abbreviation">street_suffix_abbreviation</h2>
<!-- backwards compatibility -->
<a id="schemastreet_suffix_abbreviation"></a>
<a id="schema_street_suffix_abbreviation"></a>
<a id="tocSstreet_suffix_abbreviation"></a>
<a id="tocsstreet_suffix_abbreviation"></a>

```json
"ST"
```

Code that is the standard USPS abbreviation for the trailing designator in a street address.

<h2 id="tocS_update_key_number">update_key_number</h2>
<!-- backwards compatibility -->
<a id="schemaupdate_key_number"></a>
<a id="schema_update_key_number"></a>
<a id="tocSupdate_key_number"></a>
<a id="tocsupdate_key_number"></a>

```json
"00000001"
```

Field that contains a number that uniquely identifies a record; used to identify the base record to which an add or delete transaction is being directed. The Update Key Number field is used only when applying transactions to the base file; it is not used in address matching and remains fixed for the life of the record. The field is alphanumeric and consists of the database segment code (V1, V2, W1, W2, X1, X2, Y1, Y2, Z1, or Z2) and eight characters containing an alphanumeric value ranging from 00000001 to AAAAAAAA.

<h2 id="tocS_urbanization_city_state_key">urbanization_city_state_key</h2>
<!-- backwards compatibility -->
<a id="schemaurbanization_city_state_key"></a>
<a id="schema_urbanization_city_state_key"></a>
<a id="tocSurbanization_city_state_key"></a>
<a id="tocsurbanization_city_state_key"></a>

```json
"V18475"
```

An index to the City State file that provides the urbanization name for this delivery range.

<h2 id="tocS_usps_country">usps_country</h2>
<!-- backwards compatibility -->
<a id="schemausps_country"></a>
<a id="schema_usps_country"></a>
<a id="tocSusps_country"></a>
<a id="tocsusps_country"></a>

```json
"United States"
```

  Full country names (ISO 3166)

<h2 id="tocS_usps_country_iso">usps_country_iso</h2>
<!-- backwards compatibility -->
<a id="schemausps_country_iso"></a>
<a id="schema_usps_country_iso"></a>
<a id="tocSusps_country_iso"></a>
<a id="tocsusps_country_iso"></a>

```json
"USA"
```

  3 letter country code (ISO 3166-1)

<h2 id="tocS_usps_country_iso_2">usps_country_iso_2</h2>
<!-- backwards compatibility -->
<a id="schemausps_country_iso_2"></a>
<a id="schema_usps_country_iso_2"></a>
<a id="tocSusps_country_iso_2"></a>
<a id="tocsusps_country_iso_2"></a>

```json
"US"
```

 2 letter country code (ISO 3166-1)

<h2 id="tocS_usps_dataset">usps_dataset</h2>
<!-- backwards compatibility -->
<a id="schemausps_dataset"></a>
<a id="schema_usps_dataset"></a>
<a id="tocSusps_dataset"></a>
<a id="tocsusps_dataset"></a>

```json
"usps"
```

Identifies the address as sourced from USPS

<h2 id="tocS_usps_language">usps_language</h2>
<!-- backwards compatibility -->
<a id="schemausps_language"></a>
<a id="schema_usps_language"></a>
<a id="tocSusps_language"></a>
<a id="tocsusps_language"></a>

```json
"en"
```

Language represented by 2 letter ISO Code (639-1)

<h2 id="tocS_zip_classification_code">zip_classification_code</h2>
<!-- backwards compatibility -->
<a id="schemazip_classification_code"></a>
<a id="schema_zip_classification_code"></a>
<a id="tocSzip_classification_code"></a>
<a id="tocszip_classification_code"></a>

```json
""
```

A field that describes the type of ZIP area that a 5-digit ZIP Code serves, e.g., a single educational institution, post office boxes only, or a single address that has unusually high mail volume or many different addresses.
 - M = Military ZIP Code
 - P = ZIP Code having only Post Office Boxes
 - U = Unique ZIP Code (ZIP assigned to a single organization)
 - Blank = Standard ZIP with many addresses assigned to it

<h2 id="tocS_zip_code">zip_code</h2>
<!-- backwards compatibility -->
<a id="schemazip_code"></a>
<a id="schema_zip_code"></a>
<a id="tocSzip_code"></a>
<a id="tocszip_code"></a>

```json
"1234"
```

A 5-digit code that identifies a specific geographic delivery area. ZIP Codes can represent an area within a state, or a single building or company that has a very high mail volume.

<h2 id="tocS_zip_plus_4_code">zip_plus_4_code</h2>
<!-- backwards compatibility -->
<a id="schemazip_plus_4_code"></a>
<a id="schema_zip_plus_4_code"></a>
<a id="tocSzip_plus_4_code"></a>
<a id="tocszip_plus_4_code"></a>

```json
"12345-6789"
```

Nine-digit code that identifies a small geographic delivery area that is serviceable by a single carrier; appears in the last line of the address on a mail piece.
