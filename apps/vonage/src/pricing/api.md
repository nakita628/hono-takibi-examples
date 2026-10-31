<h1 id="pricing-api">Pricing API v0.0.3</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The API to retrieve pricing information.
Please note the Pricing API is rate limited to one request per second.

Base URLs:

* <a href="https://rest.nexmo.com/account">https://rest.nexmo.com/account</a>

Email: <a href="mailto:devrel@nexmo.com">Nexmo DevRel</a> 
Web: <a href="https://developer.nexmo.com/">Nexmo DevRel</a> 

<h1 id="pricing-api-pricing">Pricing</h1>

## Retrieve outbound pricing for all countries.

<a id="opIdretrievePricingAllCountries"></a>

> Code samples

```bash
curl 'https://api.nexmo.com/get-full-pricing/outbound/sms?api_key=string&api_secret=string' \
  -H 'Accept: application/json'
```

`GET /get-full-pricing/outbound/{type}`

Retrieves the pricing information for all countries.


<h3 id="retrieve-outbound-pricing-for-all-countries-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|type|path|string|true|The type of service you wish to retrieve data about: either `sms`, `sms-transit` or `voice`.|
|api_key|query|string|true|Your Nexmo API key.|
|api_secret|query|string|true|Your Nexmo API secret.|

> Example responses

> 200 Response

```json
{
  "count": "243",
  "countries": [
    {
      "countryDisplayName": "Canada",
      "countryName": "Canada",
      "currency": "EUR",
      "defaultPrice": "0.00620000",
      "dialingPrefix": "1",
      "networks": [
        {
          "currency": "EUR",
          "mcc": "302",
          "mnc": "530",
          "networkCode": "302530",
          "networkName": "Keewaytinook Okimakanak",
          "price": "0.00590000",
          "type": "mobile"
        }
      ]
    }
  ]
}
```

> 400 Response

```json
{
  "error_title": "Bad Request",
  "invalid_parameters": {
    "message": "Is required",
    "parameter": "country"
  },
  "type": "BAD_REQUEST"
}
```

> 401 Response

```json
{
  "code": "401",
  "currency": "EUR",
  "error-code-label": "authentication failed"
}
```

<h3 id="retrieve-outbound-pricing-for-all-countries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Pricing response|[PricingCountriesResponse](#schemapricingcountriesresponse)|
|400|Bad Request|Bad request. You probably provided an invalid parameter.|Inline|
|401|Unauthorized|You did not provide valid credentials|Inline|
|404|Not Found|The page you requested was not found|None|
|429|Too Many Requests|You made too many requests. The API is rate limited to one request per second.|None|

<h3 id="retrieve-outbound-pricing-for-all-countries-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error_title|string|true|none|none|
|invalid_parameters|object|true|none|none|
|» message|string|false|none|none|
|» parameter|string|false|none|none|
|type|string|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|true|none|none|
|currency|string|true|none|none|
|error-code-label|string|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve outbound pricing for a specific dialing prefix.

<a id="opIdretrievePrefixPricing"></a>

> Code samples

```bash
curl 'https://api.nexmo.com/get-prefix-pricing/outbound/sms?api_key=string&api_secret=string&prefix=string' \
  -H 'Accept: application/json'
```

`GET /get-prefix-pricing/outbound/{type}`

Retrieves the pricing information based on the dialing prefix.


<h3 id="retrieve-outbound-pricing-for-a-specific-dialing-prefix-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|type|path|string|true|The type of service you wish to retrieve data about: either `sms`, `sms-transit` or `voice`.|
|api_key|query|string|true|Your Nexmo API key.|
|api_secret|query|string|true|Your Nexmo API secret.|
|prefix|query|string|true|The numerical dialing prefix to look up pricing for. Examples include 44, 1 and so on.|

> Example responses

> 200 Response

```json
{
  "count": "243",
  "countries": [
    {
      "countryDisplayName": "Canada",
      "countryName": "Canada",
      "currency": "EUR",
      "defaultPrice": "0.00620000",
      "dialingPrefix": "1",
      "networks": [
        {
          "currency": "EUR",
          "mcc": "302",
          "mnc": "530",
          "networkCode": "302530",
          "networkName": "Keewaytinook Okimakanak",
          "price": "0.00590000",
          "type": "mobile"
        }
      ]
    }
  ]
}
```

> 400 Response

```json
{
  "error_title": "Bad Request",
  "invalid_parameters": {
    "message": "Is required",
    "parameter": "country"
  },
  "type": "BAD_REQUEST"
}
```

> 401 Response

```json
{
  "code": "401",
  "currency": "EUR",
  "error-code-label": "authentication failed"
}
```

<h3 id="retrieve-outbound-pricing-for-a-specific-dialing-prefix-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Pricing countries response|[PricingCountriesResponse](#schemapricingcountriesresponse)|
|400|Bad Request|Bad request. You probably provided an invalid parameter.|Inline|
|401|Unauthorized|You did not provide valid credentials|Inline|
|404|Not Found|The page you requested was not found|None|
|429|Too Many Requests|You made too many requests. The API is rate limited to one request per second.|None|

<h3 id="retrieve-outbound-pricing-for-a-specific-dialing-prefix-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error_title|string|true|none|none|
|invalid_parameters|object|true|none|none|
|» message|string|false|none|none|
|» parameter|string|false|none|none|
|type|string|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|true|none|none|
|currency|string|true|none|none|
|error-code-label|string|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve outbound pricing for a specific country.

<a id="opIdretrievePricingCountry"></a>

> Code samples

```bash
curl 'https://api.nexmo.com/get-pricing/outbound/sms?api_key=string&api_secret=string&country=string' \
  -H 'Accept: application/json'
```

`GET /get-pricing/outbound/{type}`

Retrieves the pricing information based on the specified country.


<h3 id="retrieve-outbound-pricing-for-a-specific-country-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|type|path|string|true|The type of service you wish to retrieve data about: either `sms`, `sms-transit` or `voice`.|
|api_key|query|string|true|Your Nexmo API key.|
|api_secret|query|string|true|Your Nexmo API secret.|
|country|query|string|true|A two letter [country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). For example, `CA`.|

> Example responses

> 200 Response

```json
{
  "countryCode": "CA",
  "countryDisplayName": "Canada",
  "countryName": "Canada",
  "currency": "EUR",
  "defaultPrice": "0.00620000",
  "dialingPrefix": "1",
  "networks": [
    {
      "currency": "EUR",
      "mcc": "302",
      "mnc": "530",
      "networkCode": "302530",
      "networkName": "Keewaytinook Okimakanak",
      "price": "0.00590000",
      "type": "mobile"
    }
  ]
}
```

> 400 Response

```json
{
  "error_title": "Bad Request",
  "invalid_parameters": {
    "message": "Is required",
    "parameter": "country"
  },
  "type": "BAD_REQUEST"
}
```

> 401 Response

```json
{
  "code": "401",
  "currency": "EUR",
  "error-code-label": "authentication failed"
}
```

<h3 id="retrieve-outbound-pricing-for-a-specific-country-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Pricing information for a specific country.|[PricingCountryResponse](#schemapricingcountryresponse)|
|400|Bad Request|Bad request. You probably provided an invalid parameter.|Inline|
|401|Unauthorized|You did not provide valid credentials|Inline|
|404|Not Found|The page you requested was not found|None|
|429|Too Many Requests|You made too many requests. The API is rate limited to one request per second.|None|

<h3 id="retrieve-outbound-pricing-for-a-specific-country-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error_title|string|true|none|none|
|invalid_parameters|object|true|none|none|
|» message|string|false|none|none|
|» parameter|string|false|none|none|
|type|string|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|true|none|none|
|currency|string|true|none|none|
|error-code-label|string|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_CountryObject">CountryObject</h2>
<!-- backwards compatibility -->
<a id="schemacountryobject"></a>
<a id="schema_CountryObject"></a>
<a id="tocScountryobject"></a>
<a id="tocscountryobject"></a>

```json
{
  "countryDisplayName": "Canada",
  "countryName": "Canada",
  "currency": "EUR",
  "defaultPrice": "0.00620000",
  "dialingPrefix": "1",
  "networks": [
    {
      "currency": "EUR",
      "mcc": "302",
      "mnc": "530",
      "networkCode": "302530",
      "networkName": "Keewaytinook Okimakanak",
      "price": "0.00590000",
      "type": "mobile"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|countryDisplayName|string|false|none|Readable country name.|
|countryName|string|false|none|Readable country name.|
|currency|string|false|none|The currency that your account is being billed in (by default `Euros—EUR`). Can change in the Dashboard to US Dollars—USD.|
|defaultPrice|string|false|none|The default price.|
|dialingPrefix|string|false|none|The dialling prefix.|
|networks|[[NetworkObject](#schemanetworkobject)]|false|none|An array of network objects|

<h2 id="tocS_NetworkObject">NetworkObject</h2>
<!-- backwards compatibility -->
<a id="schemanetworkobject"></a>
<a id="schema_NetworkObject"></a>
<a id="tocSnetworkobject"></a>
<a id="tocsnetworkobject"></a>

```json
{
  "currency": "EUR",
  "mcc": "302",
  "mnc": "530",
  "networkCode": "302530",
  "networkName": "Keewaytinook Okimakanak",
  "price": "0.00590000",
  "type": "mobile"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currency|string|false|none|The currency used for prices for this network.|
|mcc|string|false|none|The [Mobile Country Code](https://en.wikipedia.org/wiki/Mobile_country_code) of the operator.|
|mnc|string|false|none|The Mobile Network Code of the operator.|
|networkCode|string|false|none|The Mobile Country Code and Mobile Network Code combined to give a unique reference for the operator.|
|networkName|string|false|none|The company/organisational name of the operator.|
|price|string|false|none|The cost to send a message or make a call to this network|
|type|string|false|none|The type of network: mobile or landline.|

<h2 id="tocS_PricingCountriesResponse">PricingCountriesResponse</h2>
<!-- backwards compatibility -->
<a id="schemapricingcountriesresponse"></a>
<a id="schema_PricingCountriesResponse"></a>
<a id="tocSpricingcountriesresponse"></a>
<a id="tocspricingcountriesresponse"></a>

```json
{
  "count": "243",
  "countries": [
    {
      "countryDisplayName": "Canada",
      "countryName": "Canada",
      "currency": "EUR",
      "defaultPrice": "0.00620000",
      "dialingPrefix": "1",
      "networks": [
        {
          "currency": "EUR",
          "mcc": "302",
          "mnc": "530",
          "networkCode": "302530",
          "networkName": "Keewaytinook Okimakanak",
          "price": "0.00590000",
          "type": "mobile"
        }
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|string|false|none|The number of countries retrieved.|
|countries|[[CountryObject](#schemacountryobject)]|false|none|A list of countries.|

<h2 id="tocS_PricingCountryResponse">PricingCountryResponse</h2>
<!-- backwards compatibility -->
<a id="schemapricingcountryresponse"></a>
<a id="schema_PricingCountryResponse"></a>
<a id="tocSpricingcountryresponse"></a>
<a id="tocspricingcountryresponse"></a>

```json
{
  "countryCode": "CA",
  "countryDisplayName": "Canada",
  "countryName": "Canada",
  "currency": "EUR",
  "defaultPrice": "0.00620000",
  "dialingPrefix": "1",
  "networks": [
    {
      "currency": "EUR",
      "mcc": "302",
      "mnc": "530",
      "networkCode": "302530",
      "networkName": "Keewaytinook Okimakanak",
      "price": "0.00590000",
      "type": "mobile"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|countryCode|string|false|none|Two letter country code.|
|countryDisplayName|string|false|none|Readable country name.|
|countryName|string|false|none|Readable country name.|
|currency|string|false|none|The currency that your account is being billed in (by default `Euros—EUR`). Can change in the Dashboard to US Dollars—USD.|
|defaultPrice|string|false|none|The default price.|
|dialingPrefix|string|false|none|The dialling prefix.|
|networks|[[NetworkObject](#schemanetworkobject)]|false|none|An array of network objects|
