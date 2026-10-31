<h1 id="climatekuul-live">climateKuul live v1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="http://api.climatekuul.com:8000/footprint">http://api.climatekuul.com:8000/footprint</a>

<h1 id="climatekuul-live-airtravelcoordinates">AirtravelCoordinates</h1>

## airtravelCoordinates

<a id="opIdairtravelCoordinates"></a>

> Code samples

```bash
curl https://example.com/airtravelCoordinates \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -d 'apiKey_l1=d95fead6-e8a6-4547-9fb9-7835101a3960&apiKey_l2=c60f8db5-7204-4427-960d-27400c38b166&destination_airport_latitude=24.9056&destination_airport_longitude=67.1569&number_of_passengers=2&origin_airport_latitude=31.5208&origin_airport_longitude=74.4028&travel_class=Economy&travel_mode=round%20trip'
```

`POST /airtravelCoordinates`

> Body parameter

```yaml
apiKey_l1: d95fead6-e8a6-4547-9fb9-7835101a3960
apiKey_l2: c60f8db5-7204-4427-960d-27400c38b166
destination_airport_latitude: 24.9056
destination_airport_longitude: 67.1569
number_of_passengers: 2
origin_airport_latitude: 31.5208
origin_airport_longitude: 74.4028
travel_class: Economy
travel_mode: round trip
```

<h3 id="airtravelcoordinates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|none|
|body|body|object|false|none|
|» apiKey_l1|body|string|true|Client Api Key|
|» apiKey_l2|body|string|true|Integration Partner Api Key|
|» destination_airport_latitude|body|number(double)|true|Destination latitude (like:  50.870752, value = -90<=x<=90)|
|» destination_airport_longitude|body|number(double)|true|Destination longitude (like:  4.669490, value = -180<=x<=180)|
|» number_of_passengers|body|integer(int32)|true|Number of passengers (like: 1, 2 ,3 )|
|» origin_airport_latitude|body|number(double)|true|Origin latitude (like: 23.372628 value = -90<=x<=90 )|
|» origin_airport_longitude|body|number(double)|true|Origin longitude (like: 113.159339, value = -180<=x<=180 )|
|» travel_class|body|string|true|Travel class can be 'First Class', 'Economy', 'Business' or 'Premium Economy'|
|» travel_mode|body|string|true|Travel mode can be 'one way' or 'round trip'|

<h3 id="airtravelcoordinates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## confirmCarbonOffset

<a id="opIdconfirmCarbonOffset4"></a>

> Code samples

```bash
curl https://example.com/airtravelCoordinates/confirmCarbonOffset \
  -X PATCH \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -d 'carbonOffset=y&contactEmail=example%40example.com&contactFirstName=abc&contactLastName=xyz&transaction_id=60a78ed201d88997746c91b5'
```

`PATCH /airtravelCoordinates/confirmCarbonOffset`

> Body parameter

```yaml
carbonOffset: y
contactEmail: example@example.com
contactFirstName: abc
contactLastName: xyz
transaction_id: "60a78ed201d88997746c91b5"
```

<h3 id="confirmcarbonoffset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» carbonOffset|body|string|true|Confirm Carbon Offset (Value = y/n)|
|» contactEmail|body|string|false|Contact email|
|» contactFirstName|body|string|false|Contact first name|
|» contactLastName|body|string|false|Contact last name|
|» transaction_id|body|string|true|transaction_id|

<h3 id="confirmcarbonoffset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## confirmPayment

<a id="opIdconfirmPayment4"></a>

> Code samples

```bash
curl https://example.com/airtravelCoordinates/confirmPayment \
  -X PATCH \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -d 'apiKey_l1=d95fead6-e8a6-4247-9fb9-7835101a4560&apiKey_l2=c60f8db5-7904-4227-960d-27400c38b166&confirmPayment=y&paymentID=34567878&transaction_id=60a78ed201d88997746c91b5'
```

`PATCH /airtravelCoordinates/confirmPayment`

> Body parameter

```yaml
apiKey_l1: d95fead6-e8a6-4247-9fb9-7835101a4560
apiKey_l2: c60f8db5-7904-4227-960d-27400c38b166
confirmPayment: y
paymentID: 34567878
transaction_id: "60a78ed201d88997746c91b5"
```

<h3 id="confirmpayment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» apiKey_l1|body|string|true|apikey_l1 (Like: d95fead6-e8a6-4247-9fb9-7835101a4560)|
|» apiKey_l2|body|string|true|apikey_l2 (Like: c60f8db5-7904-4227-960d-27400c38b166)|
|» confirmPayment|body|string|true|Confirm Payment (Value = y/n)|
|» paymentID|body|integer(int32)|true|Payment Id|
|» transaction_id|body|string|true|transaction_id|

<h3 id="confirmpayment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## confirmPlanting

<a id="opIdconfirmsPlanting4"></a>

> Code samples

```bash
curl https://example.com/airtravelCoordinates/confirmPlanting \
  -X PATCH \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -d 'apiKey_l1=d95fead6-e8a6-4247-9fb9-7835101a4560&apiKey_l2=c60f8db5-7904-4227-960d-27400c38b166&confirmPlanting=y&transaction_id=60a78ed201d88997746c91b5'
```

`PATCH /airtravelCoordinates/confirmPlanting`

> Body parameter

```yaml
apiKey_l1: d95fead6-e8a6-4247-9fb9-7835101a4560
apiKey_l2: c60f8db5-7904-4227-960d-27400c38b166
confirmPlanting: y
transaction_id: "60a78ed201d88997746c91b5"
```

<h3 id="confirmplanting-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» apiKey_l1|body|string|true|apikey_l1 (Like: d95fead6-e8a6-4247-9fb9-7835101a4560)|
|» apiKey_l2|body|string|true|apikey_l2 (Like: c60f8db5-7904-4227-960d-27400c38b166)|
|» confirmPlanting|body|string|true|Confirm Planting (Value = y/n)|
|» transaction_id|body|string|true|transaction_id|

<h3 id="confirmplanting-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## confirmTransaction

<a id="opIdconfirmPaymentOfTransaction4"></a>

> Code samples

```bash
curl https://example.com/airtravelCoordinates/confirmTransaction \
  -X PATCH \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -d 'confirmTransaction=y&transaction_id=60a78ed201d88997746c91b5'
```

`PATCH /airtravelCoordinates/confirmTransaction`

> Body parameter

```yaml
confirmTransaction: y
transaction_id: "60a78ed201d88997746c91b5"
```

<h3 id="confirmtransaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» confirmTransaction|body|string|true|Confirm Payment Of Transaction (Value = y/n)|
|» transaction_id|body|string|true|transaction_id|

<h3 id="confirmtransaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="climatekuul-live-airtravelmultileg">airtravelMultileg</h1>

## airtravelMultileg

<a id="opIdairtravelMultileg"></a>

> Code samples

```bash
curl https://example.com/airtravelMultileg \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "apiKey_l1": "d95fead6-e8a6-4547-9fb9-7835101a3960",
    "apiKey_l2": "c60f8db5-7204-4427-960d-27400c38b166",
    "leg1": {
      "destination_airport_code": "DXB",
      "origin_airport_code": "KHI",
      "travel_class": "Economy"
    },
    "leg2": {
      "destination_airport_code": "LHR",
      "origin_airport_code": "DXB",
      "travel_class": "Business"
    },
    "leg3": {
      "destination_airport_code": "KHI",
      "origin_airport_code": "FRA",
      "travel_class": "Premium Economy"
    },
    "legs_count": "2",
    "number_of_passengers": "2",
    "travel_mode": "multileg"
  }'
```

`POST /airtravelMultileg`

> Body parameter

```json
{
  "apiKey_l1": "d95fead6-e8a6-4547-9fb9-7835101a3960",
  "apiKey_l2": "c60f8db5-7204-4427-960d-27400c38b166",
  "leg1": {
    "destination_airport_code": "DXB",
    "origin_airport_code": "KHI",
    "travel_class": "Economy"
  },
  "leg2": {
    "destination_airport_code": "LHR",
    "origin_airport_code": "DXB",
    "travel_class": "Business"
  },
  "leg3": {
    "destination_airport_code": "KHI",
    "origin_airport_code": "FRA",
    "travel_class": "Premium Economy"
  },
  "legs_count": "2",
  "number_of_passengers": "2",
  "travel_mode": "multileg"
}
```

<h3 id="airtravelmultileg-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[airtravelMultilegRequest](#schemaairtravelmultilegrequest)|true|none|
|» apiKey_l1|body|string|true|none|
|» apiKey_l2|body|string|true|none|
|» contactEmail|body|string|true|none|
|» contactFirstName|body|string|true|none|
|» contactLastName|body|string|true|none|
|» leg1|body|[Leg1](#schemaleg1)|true|none|
|» leg2|body|[Leg1](#schemaleg1)|true|none|
|» leg3|body|[Leg1](#schemaleg1)|true|none|
|» legs_count|body|string|true|none|
|» number_of_passengers|body|string|true|none|
|» travel_mode|body|string|true|none|

<h3 id="airtravelmultileg-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## confirmCarbonOffset

<a id="opIdconfirmCarbonOffset3"></a>

> Code samples

```bash
curl https://example.com/airtravelMultileg/confirmCarbonOffset \
  -X PATCH \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -d 'carbonOffset=y&contactEmail=example%40example.com&contactFirstName=abc&contactLastName=xyz&transaction_id=60a75c0e94c8cb95a6d0e02e'
```

`PATCH /airtravelMultileg/confirmCarbonOffset`

> Body parameter

```yaml
carbonOffset: y
contactEmail: example@example.com
contactFirstName: abc
contactLastName: xyz
transaction_id: "60a75c0e94c8cb95a6d0e02e"
```

<h3 id="confirmcarbonoffset-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» carbonOffset|body|string|true|Confirm Carbon Offset (Value = y/n)|
|» contactEmail|body|string|false|Contact email|
|» contactFirstName|body|string|false|Contact first name|
|» contactLastName|body|string|false|Contact last name|
|» transaction_id|body|string|true|transaction_id|

<h3 id="confirmcarbonoffset-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## confirmPayment

<a id="opIdconfirmPayment3"></a>

> Code samples

```bash
curl https://example.com/airtravelMultileg/confirmPayment \
  -X PATCH \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -d 'apiKey_l1=d95fead6-e8a6-4247-9fb9-7835101a4560&apiKey_l2=c60f8db5-7904-4227-960d-27400c38b166&confirmPayment=y&paymentID=34567878&transaction_id=60a75c0e94c8cb95a6d0e02e'
```

`PATCH /airtravelMultileg/confirmPayment`

> Body parameter

```yaml
apiKey_l1: d95fead6-e8a6-4247-9fb9-7835101a4560
apiKey_l2: c60f8db5-7904-4227-960d-27400c38b166
confirmPayment: y
paymentID: 34567878
transaction_id: "60a75c0e94c8cb95a6d0e02e"
```

<h3 id="confirmpayment-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» apiKey_l1|body|string|true|apikey_l1 (Like: d95fead6-e8a6-4247-9fb9-7835101a4560)|
|» apiKey_l2|body|string|true|apikey_l2 (Like: c60f8db5-7904-4227-960d-27400c38b166)|
|» confirmPayment|body|string|true|Confirm Payment (Value = y/n)|
|» paymentID|body|integer(int32)|true|Payment Id|
|» transaction_id|body|string|true|transaction_id|

<h3 id="confirmpayment-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## confirmPlanting

<a id="opIdconfirmsPlanting3"></a>

> Code samples

```bash
curl https://example.com/airtravelMultileg/confirmPlanting \
  -X PATCH \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -d 'apiKey_l1=d95fead6-e8a6-4247-9fb9-7835101a4560&apiKey_l2=c60f8db5-7904-4227-960d-27400c38b166&confirmPlanting=y&transaction_id=60a75c0e94c8cb95a6d0e02e'
```

`PATCH /airtravelMultileg/confirmPlanting`

> Body parameter

```yaml
apiKey_l1: d95fead6-e8a6-4247-9fb9-7835101a4560
apiKey_l2: c60f8db5-7904-4227-960d-27400c38b166
confirmPlanting: y
transaction_id: "60a75c0e94c8cb95a6d0e02e"
```

<h3 id="confirmplanting-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» apiKey_l1|body|string|true|apikey_l1 (Like: d95fead6-e8a6-4247-9fb9-7835101a4560)|
|» apiKey_l2|body|string|true|apikey_l2 (Like: c60f8db5-7904-4227-960d-27400c38b166)|
|» confirmPlanting|body|string|true|Confirm Planting (Value = y/n)|
|» transaction_id|body|string|true|transaction_id|

<h3 id="confirmplanting-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## confirmTransaction

<a id="opIdconfirmPaymentOfTransaction3"></a>

> Code samples

```bash
curl https://example.com/airtravelMultileg/confirmTransaction \
  -X PATCH \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -d 'confirmTransaction=y&transaction_id=60a75c0e94c8cb95a6d0e02e'
```

`PATCH /airtravelMultileg/confirmTransaction`

> Body parameter

```yaml
confirmTransaction: y
transaction_id: "60a75c0e94c8cb95a6d0e02e"
```

<h3 id="confirmtransaction-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» confirmTransaction|body|string|true|Confirm Payment Of Transaction (Value = y/n)|
|» transaction_id|body|string|true|transaction_id|

<h3 id="confirmtransaction-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="climatekuul-live-ecommercedelivery">EcommerceDelivery</h1>

## ecommerceDelivery

<a id="opIdecommerceDelivery"></a>

> Code samples

```bash
curl https://example.com/ecommerceDelivery \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -d 'apiKey_l1=d95fead6-e8a6-4547-9fb9-7835101a3960&apiKey_l2=c60f8db5-7204-4427-960d-27400c38b166&destination_airport_code=BRU&destination_latitude=50.870752&destination_longitude=4.66949&origin_airport_code=KHI&origin_latitude=23.372628&origin_longitude=113.159339&volumetric_weight=2.7&waybill_type=road%20only'
```

`POST /ecommerceDelivery`

> Body parameter

```yaml
apiKey_l1: d95fead6-e8a6-4547-9fb9-7835101a3960
apiKey_l2: c60f8db5-7204-4427-960d-27400c38b166
destination_airport_code: BRU
destination_latitude: 50.870752
destination_longitude: 4.66949
origin_airport_code: KHI
origin_latitude: 23.372628
origin_longitude: 113.159339
volumetric_weight: 2.7
waybill_type: road only
```

<h3 id="ecommercedelivery-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|none|
|body|body|object|false|none|
|» apiKey_l1|body|string|true|Client Api Key|
|» apiKey_l2|body|string|true|Integration Partner Api Key|
|» destination_airport_code|body|string|false|valid airport code of destination|
|» destination_latitude|body|number(double)|true|valid latitude of destination|
|» destination_longitude|body|number(double)|true|valid longitude of destination|
|» origin_airport_code|body|string|false|valid airport code of origin|
|» origin_latitude|body|number(double)|true|valid latitude of origin|
|» origin_longitude|body|number(double)|true|valid longitude of origin|
|» volumetric_weight|body|number(double)|true|Volumetric weight' (like:2.70)|
|» waybill_type|body|string|true|this can be 'air only', 'road only' or 'air and road'|

<h3 id="ecommercedelivery-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## confirmCarbonOffset

<a id="opIdconfirmCarbonOffset1"></a>

> Code samples

```bash
curl https://example.com/ecommerceDelivery/confirmCarbonOffset \
  -X PATCH \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -d 'carbonOffset=y&contactEmail=example%40example.com&contactFirstName=abc&contactLastName=xyz&transaction_id=60a766d401d88997746c91a0'
```

`PATCH /ecommerceDelivery/confirmCarbonOffset`

> Body parameter

```yaml
carbonOffset: y
contactEmail: example@example.com
contactFirstName: abc
contactLastName: xyz
transaction_id: "60a766d401d88997746c91a0"
```

<h3 id="confirmcarbonoffset-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» carbonOffset|body|string|true|Confirm Carbon Offset (Value = y/n)|
|» contactEmail|body|string|false|Contact email|
|» contactFirstName|body|string|false|Contact first name|
|» contactLastName|body|string|false|Contact last name|
|» transaction_id|body|string|true|transaction_id|

<h3 id="confirmcarbonoffset-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## confirmPayment

<a id="opIdconfirmPayment1"></a>

> Code samples

```bash
curl https://example.com/ecommerceDelivery/confirmPayment \
  -X PATCH \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -d 'apiKey_l1=d95fead6-e8a6-4247-9fb9-7835101a4560&apiKey_l2=c60f8db5-7904-4227-960d-27400c38b166&confirmPayment=y&paymentID=34567878&transaction_id=60a766d401d88997746c91a0'
```

`PATCH /ecommerceDelivery/confirmPayment`

> Body parameter

```yaml
apiKey_l1: d95fead6-e8a6-4247-9fb9-7835101a4560
apiKey_l2: c60f8db5-7904-4227-960d-27400c38b166
confirmPayment: y
paymentID: 34567878
transaction_id: "60a766d401d88997746c91a0"
```

<h3 id="confirmpayment-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» apiKey_l1|body|string|true|apikey_l1 (Like: d95fead6-e8a6-4247-9fb9-7835101a4560)|
|» apiKey_l2|body|string|true|apikey_l2 (Like: c60f8db5-7904-4227-960d-27400c38b166)|
|» confirmPayment|body|string|true|Confirm Payment (Value = y/n)|
|» paymentID|body|integer(int32)|true|Payment Id|
|» transaction_id|body|string|true|transaction_id|

<h3 id="confirmpayment-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## confirmPlanting

<a id="opIdconfirmsPlanting2"></a>

> Code samples

```bash
curl https://example.com/ecommerceDelivery/confirmPlanting \
  -X PATCH \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -d 'apiKey_l1=d95fead6-e8a6-4247-9fb9-7835101a4560&apiKey_l2=c60f8db5-7904-4227-960d-27400c38b166&confirmPlanting=y&transaction_id=60a766d401d88997746c91a0'
```

`PATCH /ecommerceDelivery/confirmPlanting`

> Body parameter

```yaml
apiKey_l1: d95fead6-e8a6-4247-9fb9-7835101a4560
apiKey_l2: c60f8db5-7904-4227-960d-27400c38b166
confirmPlanting: y
transaction_id: "60a766d401d88997746c91a0"
```

<h3 id="confirmplanting-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» apiKey_l1|body|string|true|apikey_l1 (Like: d95fead6-e8a6-4247-9fb9-7835101a4560)|
|» apiKey_l2|body|string|true|apikey_l2 (Like: c60f8db5-7904-4227-960d-27400c38b166)|
|» confirmPlanting|body|string|true|Confirm Planting (Value = y/n)|
|» transaction_id|body|string|true|transaction_id|

<h3 id="confirmplanting-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## confirmTransaction

<a id="opIdconfirmPaymentOfTransaction1"></a>

> Code samples

```bash
curl https://example.com/ecommerceDelivery/confirmTransaction \
  -X PATCH \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -d 'confirmTransaction=y&transaction_id=60a766d401d88997746c91a0'
```

`PATCH /ecommerceDelivery/confirmTransaction`

> Body parameter

```yaml
confirmTransaction: y
transaction_id: "60a766d401d88997746c91a0"
```

<h3 id="confirmtransaction-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» confirmTransaction|body|string|true|Confirm Payment Of Transaction (Value = y/n)|
|» transaction_id|body|string|true|transaction_id|

<h3 id="confirmtransaction-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="climatekuul-live-request-api-key">Request Api Key</h1>

## requestApiKey

<a id="opIdrequestApiKey"></a>

> Code samples

```bash
curl https://example.com/requestApiKey \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -d 'apiKey_l1=qNahlSrEaduQ&apiKey_l2=eCqMeAfaDBWG&email=abcd%40gmail.com&password=234&userFirstName=usman&userLastName=ch'
```

`POST /requestApiKey`

> Body parameter

```yaml
apiKey_l1: qNahlSrEaduQ
apiKey_l2: eCqMeAfaDBWG
email: abcd@gmail.com
password: 234
userFirstName: usman
userLastName: ch
```

<h3 id="requestapikey-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» apiKey_l1|body|string|true|Api Key for client|
|» apiKey_l2|body|string|true|Integration Partner Api Key|
|» email|body|string|true|User email|
|» password|body|integer(int32)|true|User password|
|» userFirstName|body|string|true|User first name|
|» userLastName|body|string|true|User last name|

<h3 id="requestapikey-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="climatekuul-live-roaddistance">RoadDistance</h1>

## RoadDistance

<a id="opIdroadDistance"></a>

> Code samples

```bash
curl https://example.com/roadDistance \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -d 'apiKey_l1=d95fead6-e8a6-4547-9fb9-7835101a3960&apiKey_l2=c60f8db5-7204-4427-960d-27400c38b166&travel_distance=2450&trip_end=18&trip_start=16&vehicle_make=Honda&vehicle_type=personal%20car&vehicle_year=2010'
```

`POST /roadDistance`

> Body parameter

```yaml
apiKey_l1: d95fead6-e8a6-4547-9fb9-7835101a3960
apiKey_l2: c60f8db5-7204-4427-960d-27400c38b166
travel_distance: 2450
trip_end: 18
trip_start: 16
vehicle_make: Honda
vehicle_type: personal car
vehicle_year: 2010
```

<h3 id="roaddistance-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» apiKey_l1|body|string|true|Client Api Key|
|» apiKey_l2|body|string|true|Integration Partner Api Key|
|» travel_distance|body|integer(int32)|true|none|
|» trip_end|body|integer(int32)|true|timestamp in epoch time (like: 1606780799)|
|» trip_start|body|integer(int32)|true|timestamp in epoch time (like: 1604188800)|
|» vehicle_make|body|string|false|vehicle make (like: Honda, Toyota, Smart), Required only when vehicle_type is 'personal car' |
|» vehicle_type|body|string|true|Vehicle type can be 'personal car', 'light truck' or 'heavy-duty truck'|
|» vehicle_year|body|integer(int32)|false|vehicle year (like: 2010, 2015, 2019), Required only when vehicle_type is 'personal car' |

<h3 id="roaddistance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## confirmCarbonOffset

<a id="opIdconfirmCarbonOffset5"></a>

> Code samples

```bash
curl https://example.com/roadDistance/confirmCarbonOffset \
  -X PATCH \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -d 'carbonOffset=y&contactEmail=example%40example.com&contactFirstName=abc&contactLastName=xyz&transaction_id=60a7823401d88997746c91a7'
```

`PATCH /roadDistance/confirmCarbonOffset`

> Body parameter

```yaml
carbonOffset: y
contactEmail: example@example.com
contactFirstName: abc
contactLastName: xyz
transaction_id: "60a7823401d88997746c91a7"
```

<h3 id="confirmcarbonoffset-3-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» carbonOffset|body|string|true|Confirm Carbon Offset (Value = y/n)|
|» contactEmail|body|string|false|Contact email|
|» contactFirstName|body|string|false|Contact first name|
|» contactLastName|body|string|false|Contact last name|
|» transaction_id|body|string|true|transaction_id|

<h3 id="confirmcarbonoffset-3-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## confirmPayment

<a id="opIdconfirmPayment5"></a>

> Code samples

```bash
curl https://example.com/roadDistance/confirmPayment \
  -X PATCH \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -d 'apiKey_l1=d95fead6-e8a6-4247-9fb9-7835101a4560&apiKey_l2=c60f8db5-7904-4227-960d-27400c38b166&confirmPayment=y&paymentID=34567878&transaction_id=60a7823401d88997746c91a7'
```

`PATCH /roadDistance/confirmPayment`

> Body parameter

```yaml
apiKey_l1: d95fead6-e8a6-4247-9fb9-7835101a4560
apiKey_l2: c60f8db5-7904-4227-960d-27400c38b166
confirmPayment: y
paymentID: 34567878
transaction_id: "60a7823401d88997746c91a7"
```

<h3 id="confirmpayment-3-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» apiKey_l1|body|string|true|apikey_l1 (Like: d95fead6-e8a6-4247-9fb9-7835101a4560)|
|» apiKey_l2|body|string|true|apikey_l2 (Like: c60f8db5-7904-4227-960d-27400c38b166)|
|» confirmPayment|body|string|true|Confirm Payment (Value = y/n)|
|» paymentID|body|integer(int32)|true|Payment Id|
|» transaction_id|body|string|true|transaction_id|

<h3 id="confirmpayment-3-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## confirmPlanting

<a id="opIdconfirmsPlanting5"></a>

> Code samples

```bash
curl https://example.com/roadDistance/confirmPlanting \
  -X PATCH \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -d 'apiKey_l1=d95fead6-e8a6-4247-9fb9-7835101a4560&apiKey_l2=c60f8db5-7904-4227-960d-27400c38b166&confirmPlanting=y&transaction_id=60a7823401d88997746c91a7'
```

`PATCH /roadDistance/confirmPlanting`

> Body parameter

```yaml
apiKey_l1: d95fead6-e8a6-4247-9fb9-7835101a4560
apiKey_l2: c60f8db5-7904-4227-960d-27400c38b166
confirmPlanting: y
transaction_id: "60a7823401d88997746c91a7"
```

<h3 id="confirmplanting-3-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» apiKey_l1|body|string|true|apikey_l1 (Like: d95fead6-e8a6-4247-9fb9-7835101a4560)|
|» apiKey_l2|body|string|true|apikey_l2 (Like: c60f8db5-7904-4227-960d-27400c38b166)|
|» confirmPlanting|body|string|true|Confirm Planting (Value = y/n)|
|» transaction_id|body|string|true|transaction_id|

<h3 id="confirmplanting-3-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## confirmTransaction

<a id="opIdconfirmPaymentOfTransaction5"></a>

> Code samples

```bash
curl https://example.com/roadDistance/confirmTransaction \
  -X PATCH \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -d 'confirmTransaction=y&transaction_id=60a7823401d88997746c91a7'
```

`PATCH /roadDistance/confirmTransaction`

> Body parameter

```yaml
confirmTransaction: y
transaction_id: "60a7823401d88997746c91a7"
```

<h3 id="confirmtransaction-3-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» confirmTransaction|body|string|true|Confirm Payment Of Transaction (Value = y/n)|
|» transaction_id|body|string|true|transaction_id|

<h3 id="confirmtransaction-3-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="climatekuul-live-urbandelivery">UrbanDelivery</h1>

## urbanDelivery

<a id="opIdurbanDelivery"></a>

> Code samples

```bash
curl https://example.com/urbanDelivery \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -d 'apiKey_l1=d95fead6-e8a6-4547-9fb9-7835101a3960&apiKey_l2=c60f8db5-7204-4427-960d-27400c38b166&destination_latitude=-89.870752&destination_longitude=179.66949&item_count=3&origin_latitude=-89.372628&origin_longitude=-179.159339&vehicle_type=PRIVATE%20CAR'
```

`POST /urbanDelivery`

> Body parameter

```yaml
apiKey_l1: d95fead6-e8a6-4547-9fb9-7835101a3960
apiKey_l2: c60f8db5-7204-4427-960d-27400c38b166
destination_latitude: -89.870752
destination_longitude: 179.66949
item_count: 3
origin_latitude: -89.372628
origin_longitude: -179.159339
vehicle_type: PRIVATE CAR
```

<h3 id="urbandelivery-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» apiKey_l1|body|string|true|Client Api Key|
|» apiKey_l2|body|string|true|Integration Partner Api Key|
|» destination_latitude|body|number(double)|true|Destination latitude (like: 50.870752, value = -90<=x<=90)|
|» destination_longitude|body|number(double)|true|Destination longitude (like: 4.669490, value = -180<=x<=180)|
|» item_count|body|integer(int32)|true|item_count' (like:2, value = 0<x<=100)|
|» origin_latitude|body|number(double)|true|Origin latitude (like: 23.372628, value = -90<=x<=90)|
|» origin_longitude|body|number(double)|true|Origin longitude (like: 113.159339, value = -180<=x<=180)|
|» vehicle_type|body|string|true|Vehicle type (like: private car, motorcycle,cargo van,zero-emission)|

<h3 id="urbandelivery-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## confirmCarbonOffset

<a id="opIdconfirmCarbonOffset"></a>

> Code samples

```bash
curl https://example.com/urbanDelivery/confirmCarbonOffset \
  -X PATCH \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -d 'carbonOffset=y&contactEmail=example%40example.com&contactFirstName=abc&contactLastName=xyz&transaction_id=60a7875a01d88997746c91ae'
```

`PATCH /urbanDelivery/confirmCarbonOffset`

> Body parameter

```yaml
carbonOffset: y
contactEmail: example@example.com
contactFirstName: abc
contactLastName: xyz
transaction_id: "60a7875a01d88997746c91ae"
```

<h3 id="confirmcarbonoffset-4-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» carbonOffset|body|string|true|Confirm Carbon Offset (Value = y/n)|
|» contactEmail|body|string|false|Contact email|
|» contactFirstName|body|string|false|Contact first name|
|» contactLastName|body|string|false|Contact last name|
|» transaction_id|body|string|true|transaction_id|

<h3 id="confirmcarbonoffset-4-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## confirmPayment

<a id="opIdconfirmPayment"></a>

> Code samples

```bash
curl https://example.com/urbanDelivery/confirmPayment \
  -X PATCH \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -d 'apiKey_l1=d95fead6-e8a6-4247-9fb9-7835101a4560&apiKey_l2=c60f8db5-7904-4227-960d-27400c38b166&confirmPayment=y&paymentID=34567878&transaction_id=60a7875a01d88997746c91ae'
```

`PATCH /urbanDelivery/confirmPayment`

> Body parameter

```yaml
apiKey_l1: d95fead6-e8a6-4247-9fb9-7835101a4560
apiKey_l2: c60f8db5-7904-4227-960d-27400c38b166
confirmPayment: y
paymentID: 34567878
transaction_id: "60a7875a01d88997746c91ae"
```

<h3 id="confirmpayment-4-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» apiKey_l1|body|string|true|apikey_l1 (Like: d95fead6-e8a6-4247-9fb9-7835101a4560)|
|» apiKey_l2|body|string|true|apikey_l2 (Like: c60f8db5-7904-4227-960d-27400c38b166)|
|» confirmPayment|body|string|true|Confirm Payment (Value = y/n)|
|» paymentID|body|integer(int32)|true|Payment Id|
|» transaction_id|body|string|true|transaction_id|

<h3 id="confirmpayment-4-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## confirmPlanting

<a id="opIdconfirmsPlanting"></a>

> Code samples

```bash
curl https://example.com/urbanDelivery/confirmPlanting \
  -X PATCH \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -d 'apiKey_l1=d95fead6-e8a6-4247-9fb9-7835101a4560&apiKey_l2=c60f8db5-7904-4227-960d-27400c38b166&confirmPlanting=y&transaction_id=60a7875a01d88997746c91ae'
```

`PATCH /urbanDelivery/confirmPlanting`

> Body parameter

```yaml
apiKey_l1: d95fead6-e8a6-4247-9fb9-7835101a4560
apiKey_l2: c60f8db5-7904-4227-960d-27400c38b166
confirmPlanting: y
transaction_id: "60a7875a01d88997746c91ae"
```

<h3 id="confirmplanting-4-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» apiKey_l1|body|string|true|apikey_l1 (Like: d95fead6-e8a6-4247-9fb9-7835101a4560)|
|» apiKey_l2|body|string|true|apikey_l2 (Like: c60f8db5-7904-4227-960d-27400c38b166)|
|» confirmPlanting|body|string|true|Confirm Planting (Value = y/n)|
|» transaction_id|body|string|true|transaction_id|

<h3 id="confirmplanting-4-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## confirmTransaction

<a id="opIdconfirmPaymentOfTransaction"></a>

> Code samples

```bash
curl https://example.com/urbanDelivery/confirmTransaction \
  -X PATCH \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -d 'confirmTransaction=y&transaction_id=60a7875a01d88997746c91ae'
```

`PATCH /urbanDelivery/confirmTransaction`

> Body parameter

```yaml
confirmTransaction: y
transaction_id: "60a7875a01d88997746c91ae"
```

<h3 id="confirmtransaction-4-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» confirmTransaction|body|string|true|Confirm Payment Of Transaction (Value = y/n)|
|» transaction_id|body|string|true|transaction_id|

<h3 id="confirmtransaction-4-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_Leg1">Leg1</h2>
<!-- backwards compatibility -->
<a id="schemaleg1"></a>
<a id="schema_Leg1"></a>
<a id="tocSleg1"></a>
<a id="tocsleg1"></a>

```json
{
  "destination_airport_code": "DXB",
  "origin_airport_code": "KHI",
  "travel_class": "Economy"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|destination_airport_code|string|true|none|none|
|origin_airport_code|string|true|none|none|
|travel_class|string|true|none|none|

<h2 id="tocS_airtravelMultilegRequest">airtravelMultilegRequest</h2>
<!-- backwards compatibility -->
<a id="schemaairtravelmultilegrequest"></a>
<a id="schema_airtravelMultilegRequest"></a>
<a id="tocSairtravelmultilegrequest"></a>
<a id="tocsairtravelmultilegrequest"></a>

```json
{
  "apiKey_l1": "qNahlSrEaduQ",
  "apiKey_l2": "eCqMeAfaDBWG",
  "contactEmail": "example@example.com",
  "contactFirstName": "abc",
  "contactLastName": "xyz",
  "leg1": {
    "destination_airport_code": "DXB",
    "origin_airport_code": "KHI",
    "travel_class": "Economy"
  },
  "leg2": {
    "destination_airport_code": "LHR",
    "origin_airport_code": "DXB",
    "travel_class": "Business"
  },
  "leg3": {
    "destination_airport_code": "KHI",
    "origin_airport_code": "FRA",
    "travel_class": "Premium Economy"
  },
  "legs_count": "2",
  "number_of_passengers": "2",
  "travel_mode": "multileg"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiKey_l1|string|true|none|none|
|apiKey_l2|string|true|none|none|
|contactEmail|string|true|none|none|
|contactFirstName|string|true|none|none|
|contactLastName|string|true|none|none|
|leg1|[Leg1](#schemaleg1)|true|none|none|
|leg2|[Leg1](#schemaleg1)|true|none|none|
|leg3|[Leg1](#schemaleg1)|true|none|none|
|legs_count|string|true|none|none|
|number_of_passengers|string|true|none|none|
|travel_mode|string|true|none|none|
