<h1 id="api-v1">API V1 v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="http://change.local">http://change.local</a>

* <a href="https://api.getchange.io">https://api.getchange.io</a>

# Authentication

- HTTP Authentication, scheme: basic

<h1 id="api-v1-default">Default</h1>

## Calculate shipping carbon offset

> Code samples

```bash
curl 'https://example.com/api/v1/donations/carbon_calculate?weight_lb=3.5' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/v1/donations/carbon_calculate`

Calculates the donation amount (to CarbonFund 501\(c\)3) needed to offset a physical shipment. This calculation depends on the weight, primary transportation method, and distance of the shipment. Provide the distance of the shipment using the origin and destination address, or directly with the number of miles. For convenience, this endpoint also returns the id of the nonprofit CarbonFund, for making a subsequent donation to. See the [Carbon offsets guide](/recipes/carbon-offsets/) for more on using this endpoint.

<h3 id="calculate-shipping-carbon-offset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|origin_address|query|number|false|The origin zip code (US only) of the shipment. If you send this parameter, also send `destination_address`.|
|destination_address|query|number|false|The destination zip code (US only) of the shipment. If you send this parameter, also send `origin_address`.|
|distance_mi|query|number|false|The total distance (in miles) of the shipment. You can use this parameter in place of `origin_address` and `destination_address`.|
|weight_lb|query|number|true|The total weight (in pounds) of the shipment.|
|transportation_method|query|string|false|The primary transportation method of the shipment.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|transportation_method|air|
|transportation_method|truck|
|transportation_method|rail|
|transportation_method|sea|

> Example responses

> 200 Response

```json
{
  "amount": 18,
  "nonprofit_id": "n_l8vRRYrxhw0ei8AMYto5FzU1"
}
```

<h3 id="calculate-shipping-carbon-offset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic_auth
</aside>

## Retrieve carbon offset stats

> Code samples

```bash
curl https://example.com/api/v1/donations/carbon_stats \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/v1/donations/carbon_stats`

Measures your carbon offset impact in relatable terms. Provide the id of a donation to CarbonFund to see stats about that specific donation. If you omit the donation id, this endpoint returns aggregate stats for all of your CarbonFund donations.

<h3 id="retrieve-carbon-offset-stats-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|number|false|The id of a donation to the CarbonFund nonprofit. Ids are returned when a donation is created. If an ID is not provided, the total stats for all donations to CarbonFund are returned.|

> Example responses

> 200 Response

```json
{
  "amount": 107,
  "co2_tonnes_offset": 0.107,
  "trees": 1.8
}
```

<h3 id="retrieve-carbon-offset-stats-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic_auth
</aside>

## Create a donation

> Code samples

```bash
curl 'https://example.com/api/v1/donations/create?amount=500&nonprofit_id=n_IfEoPCaPqVsFAUI5xl0CBUOx&funding_source=customer' \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`POST /api/v1/donations/create`

Creates a donation to any nonprofit. CHANGE keeps track of your donations, bills you at the end of the month, and handles the nonprofit payouts for you.

<h3 id="create-a-donation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|amount|query|string|true|The amount of the donation in cents.|
|nonprofit_id|query|string|true|The id of a nonprofit from the CHANGE network.|
|funding_source|query|string|true|Source of the donation funds. If you are collecting payment from your customer for the donation, use `customer`.|
|zip_code|query|string|false|The customer's zip code. Provide this to unlock geographic insights.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|funding_source|merchant|
|funding_source|customer|

> Example responses

> 200 Response

```json
{
  "amount": 500,
  "external_id": null,
  "id": "d_ZMHGi4XOLbIZNCcRdNQIYRMD",
  "live_mode": true,
  "merchant_id": "m_ZRXrC36KAICbIBccukOYrpz2",
  "nonprofit_id": "n_t97eaBKgDzIiZpaB5miAGqmW",
  "order_value": null,
  "zip_code": "94104"
}
```

> 400 Response

```json
{
  "code": "nonprofit_invalid",
  "detail": "nonprofit_id n_invalid is invalid.",
  "status": 400,
  "title": "The nonprofit is invalid. Please reference a nonprofit in the CHANGE network."
}
```

<h3 id="create-a-donation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Donation successful|None|
|400|Bad Request|Param `nonprofit_id` invalid|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic_auth
</aside>

## Calculate crypto carbon offset

> Code samples

```bash
curl 'https://example.com/api/v1/donations/crypto_calculate?currency=eth' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/v1/donations/crypto_calculate`

Calculates the donation amount (to CarbonFund 501\(c\)3) needed to offset a cryptocurrency transaction. For convenience, this endpoint also returns the id of the nonprofit CarbonFund, for making a subsequent donation to. See the [Carbon offsets guide](/recipes/carbon-offsets/) for more on using this endpoint.

<h3 id="calculate-crypto-carbon-offset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|count|query|number|false|The number of transactions to offset.|
|currency|query|string|true|The currency of the transaction.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|currency|eth|
|currency|btc|

> Example responses

> 200 Response

```json
{
  "amount": 34,
  "nonprofit_id": "n_l8vRRYrxhw0ei8AMYto5FzU1"
}
```

<h3 id="calculate-crypto-carbon-offset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic_auth
</aside>

## List your donations

> Code samples

```bash
curl https://example.com/api/v1/donations/index \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/v1/donations/index`

Retrieves a list of donations you've previously made. The donations are returned in order of creation, with the most recent donations appearing first. This endpoint is paginated.

<h3 id="list-your-donations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|number|false|Which page to return. This endpoint is paginated, and returns maximum 30 donations per page.|

> Example responses

> 200 Response

```json
{
  "donations": [
    {
      "amount": 234,
      "created_at": "2021-05-05T20:18:05.494Z",
      "customer_funded": true,
      "external_id": null,
      "id": 6236,
      "invoice_id": 3078,
      "merchant_id": 5966,
      "nonprofit_id": 8202,
      "order_value": 2526,
      "public_id": "d_U0M2sPsQpsKXx6d3XOInsOu4",
      "region": null,
      "sandbox": false,
      "updated_at": "2021-05-05T20:18:05.494Z",
      "zip_code": "46076-9506"
    },
    {
      "amount": 335,
      "created_at": "2021-05-05T20:18:05.482Z",
      "customer_funded": true,
      "external_id": null,
      "id": 6235,
      "invoice_id": 3078,
      "merchant_id": 5966,
      "nonprofit_id": 8201,
      "order_value": 2688,
      "public_id": "d_nbvCMyqXdFyHvEFn98NZi281",
      "region": null,
      "sandbox": false,
      "updated_at": "2021-05-05T20:18:05.482Z",
      "zip_code": "71778"
    }
  ],
  "page": 1
}
```

<h3 id="list-your-donations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic_auth
</aside>

## Retrieve a donation

> Code samples

```bash
curl 'https://example.com/api/v1/donations/show?id=d_NuYL6M2C1kjecXpWzKVODw7W' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/v1/donations/show`

Retrieves the details of a donation you've previously made.

<h3 id="retrieve-a-donation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string|true|The id of a donation. Ids are returned when a donation is created.|

> Example responses

> 200 Response

```json
{
  "amount": 296,
  "external_id": null,
  "id": "d_lrUNd3aQfnwLYzSRu6mrk4ZA",
  "live_mode": true,
  "merchant_id": "m_CgzKWshXuPcI8nPKH8QZoeqL",
  "nonprofit_id": "n_h3ni9x9pH7OAkHXyghL2wjSZ",
  "order_value": 1007,
  "zip_code": "51689"
}
```

<h3 id="retrieve-a-donation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic_auth
</aside>

## Search a nonprofit

> Code samples

```bash
curl https://example.com/api/v1/nonprofits/list \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/v1/nonprofits/list`

Retrieves a list of nonprofits whose names match the provided name. This endpoint is paginated.

<h3 id="search-a-nonprofit-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|query|string|false|A string to search.|
|page|query|number|false|The page to return. This endpoint is paginated, and returns up to 30 nonprofits at a time.|

> Example responses

> 200 Response

```json
{
  "nonprofits": [
    {
      "address_line": "7510 Sanford Mountain",
      "city": "Reicheltown",
      "classification": "Y18",
      "ein": "158336879",
      "icon_url": "https://nonprofit-icons.s3-us-west-1.amazonaws.com/Y.png",
      "id": "n_Q0Pwyjw5H1GDCviVvJXbXAJF",
      "last_verified_at": null,
      "memo": null,
      "mission": "Persistent 24 hour solution",
      "name": "SOME NONPROFIT",
      "state": "Tennessee",
      "website": "http://abshire.info/ellsworth.kris",
      "zip_code": "07815-9329"
    }
  ],
  "page": 1
}
```

<h3 id="search-a-nonprofit-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List successful|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic_auth
</aside>

## Show a nonprofit

> Code samples

```bash
curl 'https://example.com/api/v1/nonprofits/show?id=n_IfEoPCaPqVsFAUI5xl0CBUOx' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/v1/nonprofits/show`

Retrieves information for a nonprofit.

<h3 id="show-a-nonprofit-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string|true|The id of a nonprofit from the CHANGE network.|

> Example responses

> 200 Response

```json
{
  "address_line": "8236 Leslie Gateway",
  "city": "Port Jasmineview",
  "classification": "C62",
  "ein": "057310526",
  "icon_url": "https://nonprofit-icons.s3-us-west-1.amazonaws.com/C.png",
  "id": "n_LLWKUimvwSZ9A01gTdFo0uJe",
  "memo": null,
  "mission": "Triple-buffered disintermediate projection",
  "name": "BERNIER-GIBSON",
  "state": "New Jersey",
  "website": "http://ziemann.co/rosalind",
  "zip_code": "16409-3215"
}
```

<h3 id="show-a-nonprofit-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Show successful|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic_auth
</aside>
