<h1 id="where-to-credit-api">Where to Credit API v1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The Where to Credit API provides mileage earning calculations for frequent flyer programs around the world.

# Authentication

* API Key (api-key)
    - Parameter Name: **Authorization-Token**, in: header. Subscribers only

<h1 id="where-to-credit-api-calculate">Calculate</h1>

## Calculates the number of miles earned for every frequent flyer program.

> Code samples

```bash
curl https://example.com/api/1.0/calculate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '[
    {
      "baseFareUSD": 0,
      "id": "string",
      "segments": [
        {
          "bookingClass": "string",
          "carrier": "string",
          "departure": "1970-01-01T00:00:00Z",
          "destination": "string",
          "distance": 0,
          "flightNumber": 0,
          "operatingCarrier": "string",
          "origin": "string"
        }
      ],
      "ticketingCarrier": "string"
    }
  ]'
```

`POST /api/1.0/calculate`

> Body parameter

```json
[
  {
    "baseFareUSD": 0,
    "id": "string",
    "segments": [
      {
        "bookingClass": "string",
        "carrier": "string",
        "departure": "1970-01-01T00:00:00Z",
        "destination": "string",
        "distance": 0,
        "flightNumber": 0,
        "operatingCarrier": "string",
        "origin": "string"
      }
    ],
    "ticketingCarrier": "string"
  }
]
```

<h3 id="calculates-the-number-of-miles-earned-for-every-frequent-flyer-program-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[[Itinerary](#schemaitinerary)]|false|Collection of <code>Itinerary</code> to allow multiple frequent flyer mile or point calculations at once.|

> Example responses

> 200 Response

```json
[
  {
    "errorMessage": "string",
    "success": true,
    "value": {
      "id": "string",
      "totals": [
        {
          "airlines": [
            "string"
          ],
          "id": "string",
          "name": "string",
          "revenueBased": true,
          "unpublished": true,
          "value": 0
        }
      ]
    }
  }
]
```

<h3 id="calculates-the-number-of-miles-earned-for-every-frequent-flyer-program-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success.  However individual <code>CalculateResults</code> in the response could have failed.|Inline|
|429|Too Many Requests|Usage limits exceeded. (Free users only)|None|

<h3 id="calculates-the-number-of-miles-earned-for-every-frequent-flyer-program-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[CalculateResult](#schemacalculateresult)]|false|none|none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
api-key
</aside>

<h1 id="where-to-credit-api-programs">Programs</h1>

## Lists all supported frequent flyer programs.

> Code samples

```bash
curl https://example.com/api/1.0/programs \
  -H 'Accept: application/json'
```

`GET /api/1.0/programs`

> Example responses

> 200 Response

```json
[
  {
    "airlines": [
      "string"
    ],
    "denomination": "string",
    "fullName": "string",
    "id": "string",
    "programName": "string",
    "tierNames": [
      "string"
    ]
  }
]
```

<h3 id="lists-all-supported-frequent-flyer-programs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|429|Too Many Requests|Usage limits exceeded. (Free users only)|None|

<h3 id="lists-all-supported-frequent-flyer-programs-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Program](#schemaprogram)]|false|none|none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
api-key
</aside>

# Schemas

<h2 id="tocS_CalculateItineraryProgramResult">CalculateItineraryProgramResult</h2>
<!-- backwards compatibility -->
<a id="schemacalculateitineraryprogramresult"></a>
<a id="schema_CalculateItineraryProgramResult"></a>
<a id="tocScalculateitineraryprogramresult"></a>
<a id="tocscalculateitineraryprogramresult"></a>

```json
{
  "airlines": [
    "string"
  ],
  "id": "string",
  "name": "string",
  "revenueBased": true,
  "unpublished": true,
  "value": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|airlines|[string]|false|none|Two-letter IATA carrier codes that are associated with the frequent flyer program.|
|id|string \| null|false|none|Unique identifier for the frequent flyer program. See <code>Programs</code> API.|
|name|string \| null|false|none|Frequent flyer program name. See <code>Programs</code> API.|
|revenueBased|boolean|false|none|Indicates that the itinerary includes revenue-based miles earnings.|
|unpublished|boolean|false|none|Indicates that the itinerary may be missing miles due to unpublished earning rates from the program.|
|value|integer(int32)|false|none|Total redeemable miles or points earned for the frequent flyer program.|

<h2 id="tocS_CalculateItineraryResult">CalculateItineraryResult</h2>
<!-- backwards compatibility -->
<a id="schemacalculateitineraryresult"></a>
<a id="schema_CalculateItineraryResult"></a>
<a id="tocScalculateitineraryresult"></a>
<a id="tocscalculateitineraryresult"></a>

```json
{
  "id": "string",
  "totals": [
    {
      "airlines": [
        "string"
      ],
      "id": "string",
      "name": "string",
      "revenueBased": true,
      "unpublished": true,
      "value": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string \| null|false|none|Unique identifier provided for this itinerary.|
|totals|[[CalculateItineraryProgramResult](#schemacalculateitineraryprogramresult)]|false|none|Total miles earned for each frequent flyer program.|

<h2 id="tocS_CalculateResult">CalculateResult</h2>
<!-- backwards compatibility -->
<a id="schemacalculateresult"></a>
<a id="schema_CalculateResult"></a>
<a id="tocScalculateresult"></a>
<a id="tocscalculateresult"></a>

```json
{
  "errorMessage": "string",
  "success": true,
  "value": {
    "id": "string",
    "totals": [
      {
        "airlines": [
          "string"
        ],
        "id": "string",
        "name": "string",
        "revenueBased": true,
        "unpublished": true,
        "value": 0
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errorMessage|string \| null|false|none|Error message if the API call was not successful.|
|success|boolean|false|none|Indicates whether the API call was successful.|
|value|[CalculateItineraryResult](#schemacalculateitineraryresult)|false|none|none|

<h2 id="tocS_Itinerary">Itinerary</h2>
<!-- backwards compatibility -->
<a id="schemaitinerary"></a>
<a id="schema_Itinerary"></a>
<a id="tocSitinerary"></a>
<a id="tocsitinerary"></a>

```json
{
  "baseFareUSD": 0,
  "id": "string",
  "segments": [
    {
      "bookingClass": "string",
      "carrier": "string",
      "departure": "1970-01-01T00:00:00Z",
      "destination": "string",
      "distance": 0,
      "flightNumber": 0,
      "operatingCarrier": "string",
      "origin": "string"
    }
  ],
  "ticketingCarrier": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|baseFareUSD|number(double)|false|none|Amount in USD that will be used to calculate revenue program mileage earning.  This amount should generally include carrier imposed surcharges but exclude other taxes. Default is 0.|
|id|string \| null|false|none|Unique identifier for this itinerary that will be passed back to help correlate a result.|
|segments|[[Segment](#schemasegment)]|true|none|Every flight transfer or stopover should be considered a separate segment.|
|ticketingCarrier|string \| null|false|none|Two-letter IATA carrier code for the ticketing or plating airline.  This is used for revenue programs (i.e. UA, DL, B6).  Leaving this value blank will exclude revenue programs.|

<h2 id="tocS_Program">Program</h2>
<!-- backwards compatibility -->
<a id="schemaprogram"></a>
<a id="schema_Program"></a>
<a id="tocSprogram"></a>
<a id="tocsprogram"></a>

```json
{
  "airlines": [
    "string"
  ],
  "denomination": "string",
  "fullName": "string",
  "id": "string",
  "programName": "string",
  "tierNames": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|airlines|[string]|false|none|Two-letter IATA carrier codes that are associated with the frequent flyer program.|
|denomination|string \| null|false|none|Name of the unit of a mile or point.|
|fullName|string \| null|false|none|Full name of the frequent flyer program including the airline, if applicable.|
|id|string \| null|false|none|Unique identifier for the frequent flyer program.|
|programName|string \| null|false|none|Name of the frequent flyer program.|
|tierNames|[string]|false|none|Name of each tier level for the frequent flyer program.|

<h2 id="tocS_Segment">Segment</h2>
<!-- backwards compatibility -->
<a id="schemasegment"></a>
<a id="schema_Segment"></a>
<a id="tocSsegment"></a>
<a id="tocssegment"></a>

```json
{
  "bookingClass": "string",
  "carrier": "string",
  "departure": "1970-01-01T00:00:00Z",
  "destination": "string",
  "distance": 0,
  "flightNumber": 0,
  "operatingCarrier": "string",
  "origin": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bookingClass|string|true|none|Single-letter booking class used to determine the earning rate for the flight segment.|
|carrier|string|true|none|Two-letter IATA carrier code for the marketing airline.  This is used to determine which earnings chart will be applied for this segment.<br>NOTE: Frequent flyer programs based on operating carrier, including but not limited to Star Alliance carriers, cannot be reliably mapped to a booking class and will not be accurately reflected in this API.|
|departure|string(date-time) \| null|false|none|The date on the flight will depart from the origin to go to the destination.  This is used to determine which earnings chart will be in effect at time of departure.|
|destination|string|true|none|Three-letter IATA airport code to which the flight is going.|
|distance|number(double) \| null|false|none|The number of miles for this flight segment.  Otherwise, distance is calculated using the great-circle distance between the origin and destination and may not match other data sources exactly.|
|flightNumber|integer(int32) \| null|false|none|The airline identifier for the flight segment, most commonly (but not always) a number and is used for earning charts that are restricted to specific flight numbers.|
|operatingCarrier|string \| null|false|none|Two-letter IATA carrier code for the operating airline.  This value is only used when earning is based on marketing carrier but restricted to a specific operating carrier.  Leaving this value blank will assume the flight is operated by the marketing carrier.|
|origin|string|true|none|Three-letter IATA airport code from which the flight will depart.|
