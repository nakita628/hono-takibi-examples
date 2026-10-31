<h1 id="lh-partner-api">LH Partner API v1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="https://api.lufthansa.com/v1">https://api.lufthansa.com/v1</a>

License: <a href="https://developer.lufthansa.com">LH</a>

# Authentication

- oAuth2 authentication.

    - Flow: clientCredentials
    - Token URL = [https://api.lufthansa.com/v1/partners/oauth/token](https://api.lufthansa.com/v1/partners/oauth/token)

|Scope|Scope Description|
|---|---|
|read:LH Open API|read access|

<h1 id="lh-partner-api-baggage">Baggage</h1>

## Baggage Trip and Contact

<a id="opIdBaggage Trip and Contact"></a>

> Code samples

```bash
curl https://example.com/baggage/baggagetripandcontact/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /baggage/baggagetripandcontact/{searchID}`

Retrieve passenger trip, contact and baggage details. This service is only accessible for LH privileged partners

<h3 id="baggage-trip-and-contact-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|searchID|path|string|true|Bag tag number, PNR, boarding card or FQTV ID|
|Accept|header|string|true|http header: application/json or application/xml (Acceptable values are: "application/json", "application/xml")|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="baggage-trip-and-contact-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth
</aside>

<h1 id="lh-partner-api-offers">Offers</h1>

## All Fares

<a id="opIdAll Fares"></a>

> Code samples

```bash
curl 'https://example.com/offers/fares/allfares?catalogues=string&origin=string&destination=string&travel-date=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /offers/fares/allfares`

Retrieves all available fares for a specific Origin & Destination pair on a given date. Available fares are: One-way and Return for 4U. Return only for OS

<h3 id="all-fares-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|catalogues|query|string|true|Specifies in which catalogue the fares need to be searched (e.g.'4U;OS').|
|origin|query|string|true|Enter journey origin (e.g 'FRA').|
|destination|query|string|true|Enter journey destination (e.g 'MAD').|
|travel-date|query|string|true|Enter journey travel-date (e.g 2016-10-20)|
|return-date|query|string|false|Enter journey return-date (e.g 2016-10-31)'.|
|cabin-class|query|string|false|Enter the required cabin class (e.g econonmy, business etc.). (Acceptable values are: "", "economy", "premium economy", "business", "first")|
|travelers|query|string|false|Specifies the type and number of travelers (e.g. '(adult=2;child=2;infant=1)') For LH only (adult=1) possible.|
|fare-family|query|string|false|Mandatory for 4U. Specifies, which fares to be returned, such as basic, smart, best, smartflex, bestflex . (Acceptable values are: "", "basic", "smart", "best", "smartflex", "bestflex")|
|trackingid|query|string|false|Austrian Airlines only - specify the web tracking id to be used in OS Deep link.|
|Accept|header|string|false|Mandatory http header:  application/xml or application/json|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="all-fares-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth
</aside>

## Best Fares

<a id="opIdBest Fares"></a>

> Code samples

```bash
curl 'https://example.com/offers/fares/bestfares?catalogues=string&origin=string&destination=string&travel-date=string&trip-duration=string&range=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /offers/fares/bestfares`

Retrieve best fares for the requested journey across multiple days or multiple months.

<h3 id="best-fares-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|catalogues|query|string|true|Search fares from these carriers' catalogues (e.g. '4U;OS;LH')|
|origin|query|string|true|Journey origin. 3-letter IATA airport code (e.g. 'FRA')|
|destination|query|string|true|Journey destination. 3-letter IATA airport code (e.g. 'MAD')|
|travel-date|query|string|true|Journey travel-date (YYYY-MM-DD)|
|trip-duration|query|string|true|Trip duration in days (e.g. '7')|
|range|query|string|true|Fare range: 'byday' or 'bymonth' (Acceptable values are: "byday", "bymonth")|
|Accept|header|string|true|http header: application/json or application/xml (Acceptable values are: "application/json", "application/xml")|
|cabin-class|query|string|false|Cabin class: 'economy', 'premium_economy', 'business', 'first' (Acceptable values are: "", "economy", "premium_economy", "business", "first")|
|country|query|string|false|Country code of requestor. 2-letter ISO 3166-1 country code (e.g. 'de')|
|trackingid|query|string|false|Austrian Airlines only - specify the web tracking id to be used in OS Deep link.|
|fare-family|query|string|false|Fare family: basic, smart, best, smartflex, bestflex - Germanwings only (Acceptable values are: "", "basic", "smart", "best", "smartflex", "bestflex")|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="best-fares-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth
</aside>

## Deep Links

<a id="opIdDeep Links"></a>

> Code samples

```bash
curl 'https://example.com/offers/fares/deeplink?catalogues=string&trackingid=string&country=string&lang=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /offers/fares/deeplink`

Returns valid deep links for the provided input parameters

<h3 id="deep-links-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|catalogues|query|string|true|Carrier for which the deep link will be created (e.g. 'LH')|
|trackingid|query|string|true|Deep link tracking ID|
|country|query|string|true|2-letter ISO 3166-1 country code|
|lang|query|string|true|2-letter ISO 3166-1 language code|
|Accept|header|string|true|http header: application/json or application/xml (Acceptable values are: "application/json", "application/xml")|
|origin|query|string|false|Journey origin. 3-letter IATA airport or city code (e.g. 'FRA')|
|origin-name|query|string|false|Journey origin airport or city name (e.g. 'frankfurt')|
|destination|query|string|false|Journey destination. 3-letter IATA airport or city code (e.g. 'MAD')|
|destination-name|query|string|false|Journey destination airport or city name (e.g. 'madrid')|
|travel-date|query|string|false|Journey travel-date (YYYY-MM-DD)|
|return-date|query|string|false|Journey return-date (YYYY-MM-DD)|
|cabin-class|query|string|false|Cabin class: 'economy', 'premium_economy', 'business', 'first' (Acceptable values are: "", "economy", "premium_economy", "business", "first")|
|outbound-segments|query|string|false|Outbound flight segments in the sequence of travel (e.g. 'LH096;LH480')|
|return-segments|query|string|false|Flight segments in the sequence of travel (e.g. 'LH7465;LH431')|
|travelers|query|string|false|Type and number of travelers (e.g. '(adult=2;child=2;infant=1)')|
|fare|query|string|false|Travel fare (e.g. '1341.45')|
|net-fare|query|string|false|Travel net fare. Total fare less taxes and charges (e.g. '1140')|
|fare-currency|query|string|false|Fare currency (e.g. 'EUR')|
|partnerid|query|string|false|Deep link partner id (e.g. '1247')|
|encryption-key|query|string|false|Deep link encryption-key|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="deep-links-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth
</aside>

## LH Deep Links - FFP

<a id="opIdLH Deep Links - FFP"></a>

> Code samples

```bash
curl 'https://example.com/offers/fares/deeplink/ffp?catalogues=string&origin=string&destination=string&travel-date=string&trackingid=string&country=string&lang=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /offers/fares/deeplink/ffp`

Returns valid LH deep links (FFP - links to flight selection screen on LH.COM)

<h3 id="lh-deep-links---ffp-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|catalogues|query|string|true|Carrier for which the deep link will be created (e.g. 'LH')|
|origin|query|string|true|Journey origin. 3-letter IATA airport or city code (e.g. 'FRA')|
|destination|query|string|true|Journey destination. 3-letter IATA airport or city code (e.g. 'MAD')|
|travel-date|query|string|true|Journey travel-date (YYYY-MM-DD)|
|trackingid|query|string|true|Deep link tracking ID|
|country|query|string|true|2-letter ISO 3166-1 country code|
|lang|query|string|true|2-letter ISO 3166-1 language code|
|Accept|header|string|true|http header: application/json or application/xml (Acceptable values are: "application/json", "application/xml")|
|return-date|query|string|false|Journey return-date (YYYY-MM-DD)|
|cabin-class|query|string|false|Cabin class: 'economy', 'premium_economy', 'business', 'first' (Acceptable values are: "", "economy", "premium_economy", "business", "first")|
|travelers|query|string|false|Type and number of travelers (e.g. '(adult=2;child=2;infant=1)')|
|partnerid|query|string|false|Deep link partner id (e.g. '1247')|
|encryption-key|query|string|false|Deep link encryption-key|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="lh-deep-links---ffp-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth
</aside>

## LH Deep Links - ITCO

<a id="opIdLH Deep Links - ITCO"></a>

> Code samples

```bash
curl 'https://example.com/offers/fares/deeplink/itco?catalogues=string&origin=string&destination=string&travel-date=string&outbound-segments=string&fare=string&fare-currency=string&trackingid=string&country=string&lang=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /offers/fares/deeplink/itco`

Returns valid LH deep links (ITCO - links to shopping cart on LH.COM)

<h3 id="lh-deep-links---itco-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|catalogues|query|string|true|Carrier for which the deep link will be created (e.g. 'LH')|
|origin|query|string|true|Journey origin. 3-letter IATA airport or city code (e.g. 'FRA')|
|destination|query|string|true|Journey destination. 3-letter IATA airport or city code (e.g. 'MAD')|
|travel-date|query|string|true|Journey travel-date (YYYY-MM-DD)|
|outbound-segments|query|string|true|Outbound flight segments in the sequence of travel (e.g. 'LH096;LH480')|
|fare|query|string|true|Travel fare (e.g. '1341.45')|
|fare-currency|query|string|true|Fare currency (e.g. 'EUR')|
|trackingid|query|string|true|Deep link tracking ID|
|country|query|string|true|2-letter ISO 3166-1 country code|
|lang|query|string|true|2-letter ISO 3166-1 language code|
|Accept|header|string|true|http header: application/json or application/xml (Acceptable values are: "application/json", "application/xml")|
|return-date|query|string|false|Journey return-date (YYYY-MM-DD)|
|cabin-class|query|string|false|Cabin class: 'economy', 'premium_economy', 'business', 'first' (Acceptable values are: "", "economy", "premium_economy", "business", "first")|
|return-segments|query|string|false|Flight segments in the sequence of travel (e.g. 'LH7465;LH431')|
|travelers|query|string|false|Type and number of travelers (e.g. '(adult=2;child=2;infant=1)')|
|net-fare|query|string|false|Travel net fare. Total fare less taxes and charges (e.g. '1140')|
|partnerid|query|string|false|Deep link partner id (e.g. '1247')|
|encryption-key|query|string|false|Deep link encryption-key|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="lh-deep-links---itco-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth
</aside>

## Fares

<a id="opIdFares"></a>

> Code samples

```bash
curl 'https://example.com/offers/fares/fares?catalogues=string&segments=string&carriers=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /offers/fares/fares`

Retrieve all available fares per fare family for a specific Origin & Destination on a given date

<h3 id="fares-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|catalogues|query|string|true|Search fares from these carriers' catalogues - currently active for Germanwings only  (4U)|
|segments|query|string|true|Journey details  e.g. (origin=TXL;destination=CGN;travel-date=2016-12-15;return-date=2016-12-20;cabin=Economy)|
|carriers|query|string|true|Include fares for these carriers e.g. ('4U;LH')|
|Accept|header|string|true|http header: application/json or application/xml (Acceptable values are: "application/json", "application/xml")|
|travelers|query|string|false|Type and number of travelers e.g. (adult=1;child=1;infant=1)|
|fare-types|query|string|false|Fares family: basic,smart, best, smartflex, bestflex - Germanwings only (Acceptable values are: "", "basic", "smart", "best", "smartflex", "bestflex")|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="fares-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth
</aside>

## Lowest Fares

<a id="opIdLowest Fares"></a>

> Code samples

```bash
curl 'https://example.com/offers/fares/lowestfares?catalogues=string&origin=string&destination=string&travel-date=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /offers/fares/lowestfares`

Retrieve lowest fare for a specific Origin & Destination pair on a given date. Available fares are: One-way and Return for 4U. Return only for OS & LH

<h3 id="lowest-fares-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|catalogues|query|string|true|Search fares from these carriers' catalogues e.g. '4U;OS;LH'|
|origin|query|string|true|Journey origin. 3-letter IATA aiport code e.g. 'FRA'|
|destination|query|string|true|Journey destination. 3-letter IATA airport code e.g. 'MAD'|
|travel-date|query|string|true|Journey travel-date YYYY-MM-DD|
|Accept|header|string|true|http header: application/json or application/xml (Acceptable values are: "application/json", "application/xml")|
|return-date|query|string|false|Journey return-date - mandatory for OS and LH searches YYYY-MM-DD|
|cabin-class|query|string|false|Cabin class: 'economy', 'premium_economy', 'business', 'first' (Acceptable values are: "", "economy", "premium_economy", "business", "first")|
|travelers|query|string|false|Type and number of travelers e.g. '(adult=2;child=2;infant=1)'. For LH only (adult=1) possible|
|fare-family|query|string|false|Fare family: basic, smart, best, smartflex, bestflex - Germanwings only (Acceptable values are: "", "basic", "smart", "best", "smartflex", "bestflex")|
|country|query|string|false|Country code of requestor. 2-letter ISO 3166-1 country code (e.g. 'de')|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="lowest-fares-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth
</aside>

## Fares Subscriptions

<a id="opIdFares Subscriptions"></a>

> Code samples

```bash
curl 'https://example.com/offers/fares/subscriptions?origin=string&destination=string&cabin-class=string&trip-duration=string&email=string&lang=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /offers/fares/subscriptions`

Create a subscription for best price O&D. Receive regular updates on lowest fares

<h3 id="fares-subscriptions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|origin|query|string|true|Journey origin. 3-leter IATA airport code (e.g. 'FRA')|
|destination|query|string|true|Journey destination. 3-letter IATA airport code (e.g. 'MAD')|
|cabin-class|query|string|true|Cabin class: 'economy', 'premium_economy', 'business', 'first' (Acceptable values are: "", "economy", "premium_economy", "business", "first")|
|trip-duration|query|string|true|Trip duration in days (e.g. '7')|
|email|query|string|true|Email Address')|
|lang|query|string|true|2-letter ISO 3166-1 language code|
|Accept|header|string|true|http header: application/json or application/xml (Acceptable values are: "application/json", "application/xml")|
|country|query|string|false|2-letter ISO 3166-1 country code|
|trackingid|query|string|false|Tracking parameter|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="fares-subscriptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth
</aside>

## OND Route

<a id="opIdOND Route"></a>

> Code samples

```bash
curl https://example.com/offers/ond/route/string/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /offers/ond/route/{origin}/{destination}`

Returns LH route origin & destination information

<h3 id="ond-route-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|origin|path|string|true|Enter either the orgin city or orgin country code (e.g 'FRA' or 'DE'). Enter '*' for all|
|destination|path|string|true|Enter either the destination city or country code (e.g 'MAD' or 'ES'). Enter '*' for all|
|Accept|header|string|true|Mandatory http header:  application/xml or application/json|
|catalogues|query|string|false|Carrier for which the OND will be retrieved (e.g. 'LH')|
|limit|query|string|false|Number of records returned per request. Defaults to 20, maximum is 100 (if a value bigger than 100 is given, 100 will be taken)|
|offset|query|string|false|Number of records skipped. Defaults to 0|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="ond-route-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth
</aside>

## OND Status

<a id="opIdOND Status"></a>

> Code samples

```bash
curl https://example.com/offers/ond/status \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /offers/ond/status`

Returns LH network route status information. Search for recently added or retired routes

<h3 id="ond-status-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string|true|Mandatory http header:  application/xml or application/json|
|catalogues|query|string|false|Carrier for which the OND will be retrieved (e.g. 'LH')|
|new-routes|query|string|false|Enter if newly added routes should be returned in the response. (Acceptable values are: "", "true", "false")|
|old-routes|query|string|false|Enter if old (deleted) routes should be returned in the response. (Acceptable values are: "", "true", "false")|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="ond-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth
</aside>

## Top OND

<a id="opIdTop OND"></a>

> Code samples

```bash
curl https://example.com/offers/ond/top \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /offers/ond/top`

Returns LH Top routes per country or across all countries

<h3 id="top-ond-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string|true|Mandatory http header:  application/xml or application/json|
|catalogues|query|string|false|Carrier for which the OND will be retrieved (e.g. 'LH')|
|origin|query|string|false|Enter the origin country code (e.g. 'DE'). Leave empty to search Top OND across all countries|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="top-ond-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth
</aside>

<h1 id="lh-partner-api-orders">Orders</h1>

## Orders

<a id="opIdOrders"></a>

> Code samples

```bash
curl https://example.com/orders/orders/string/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /orders/orders/{orderID}/{name}`

Retrieve order by ID and optionally name. This service is only accessible for LH privileged partners

<h3 id="orders-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|orderID|path|string|true|Unique order identifier|
|Accept|header|string|true|http header: application/json or application/xml (Acceptable values are: "application/json", "application/xml")|
|name|path|string|true|Surname of traveller|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="orders-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth
</aside>

<h1 id="lh-partner-api-preflight">Preflight</h1>

## Auto Check-In

<a id="opIdAuto Check-In"></a>

> Code samples

```bash
curl 'https://example.com/preflight/autocheckin/string?emailAddress=string' \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /preflight/autocheckin/{ticketnumber}`

Trigger an automatic check-in given a ticket number. This service is only accessible for LH privileged partners

<h3 id="auto-check-in-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ticketnumber|path|string|true|Ticket number|
|emailAddress|query|string|true|Email address|
|Accept|header|string|true|http header: application/json or application/xml (Acceptable values are: "application/json", "application/xml")|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="auto-check-in-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth
</aside>

<h1 id="lh-partner-api-promotions">Promotions</h1>

## Price Offers

<a id="opIdPrice Offers"></a>

> Code samples

```bash
curl 'https://example.com/promotions/priceoffers/flights/ond/string/string?departureDate=string&returnDate=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /promotions/priceoffers/flights/ond/{origin}/{destination}`

Retrieve a best price offer given an origin and destination.

<h3 id="price-offers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|origin|path|string|true|Departure city. 3-letter IATA city code|
|destination|path|string|true|Destination city. 3-letter IATA city code|
|departureDate|query|string|true|Departure date in local time (YYYY-MM-DD)|
|returnDate|query|string|true|Return date in local time (YYYY-MM-DD)|
|service|query|string|false|Optional parameter.|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="price-offers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth
</aside>

<h1 id="lh-partner-api-reference-data">Reference Data</h1>

## Seat Details

<a id="opIdSeat Details"></a>

> Code samples

```bash
curl https://example.com/references/seatdetails/string/C \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /references/seatdetails/{aircraftCode}/{cabinCode}`

A description of all available seat details by aircraft type. You can retrieve the full set or details for a particular aircraft type.

<h3 id="seat-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|aircraftCode|path|string|true|Aircraft type. 3-character IATA equipment code|
|Accept|header|string|true|http header: application/json or application/xml (Acceptable values are: "application/json", "application/xml")|
|cabinCode|path|string|true|Cabin class: M, E, C, F (Acceptable values are: "", "M", "E", "C", "F")|
|lang|query|string|false|2-letter ISO 3166-1 language code|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="seat-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth
</aside>
