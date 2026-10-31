<h1 id="travel-impact-model-api">Travel Impact Model API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Travel Impact Model API lets you query travel carbon emission estimates.

Base URLs:

* <a href="https://travelimpactmodel.googleapis.com/">https://travelimpactmodel.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://developers.google.com/travel/impact-model">External documentation</a>

<h1 id="travel-impact-model-api-flights">flights</h1>

## travelimpactmodel.flights.computeFlightEmissions

<a id="opIdtravelimpactmodel.flights.computeFlightEmissions"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/flights:computeFlightEmissions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "flights": [
      {
        "departureDate": {
          "day": 0,
          "month": 0,
          "year": 0
        },
        "destination": "string",
        "flightNumber": 0,
        "operatingCarrierCode": "string",
        "origin": "string"
      }
    ]
  }'
```

`POST /v1/flights:computeFlightEmissions`

Stateless method to retrieve emission estimates. Details on how emission estimates are computed: https://github.com/google/travel-impact-model The response will contain all entries that match the input flight legs, in the same order. If there are no estimates available for a certain flight leg, the response will return the flight leg object with empty emission fields. The request will still be considered successful. Reasons for missing emission estimates include: - The flight is unknown to the server. - The input flight leg is missing one or more identifiers. - The flight date is in the past. - The aircraft type is not supported by the model. - Missing seat configuration. The request can contain up to 1000 flight legs. If the request has more than 1000 direct flights, if will fail with an INVALID_ARGUMENT error.

> Body parameter

```json
{
  "flights": [
    {
      "departureDate": {
        "day": 0,
        "month": 0,
        "year": 0
      },
      "destination": "string",
      "flightNumber": 0,
      "operatingCarrierCode": "string",
      "origin": "string"
    }
  ]
}
```

<h3 id="travelimpactmodelflightscomputeflightemissions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[ComputeFlightEmissionsRequest](#schemacomputeflightemissionsrequest)|false|none|
|» flights|body|[[Flight](#schemaflight)]|false|Required. Direct flights to return emission estimates for.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "flightEmissions": [
    {
      "emissionsGramsPerPax": {
        "business": 0,
        "economy": 0,
        "first": 0,
        "premiumEconomy": 0
      },
      "flight": {
        "departureDate": {
          "day": 0,
          "month": 0,
          "year": 0
        },
        "destination": "string",
        "flightNumber": 0,
        "operatingCarrierCode": "string",
        "origin": "string"
      }
    }
  ],
  "modelVersion": {
    "dated": "string",
    "major": 0,
    "minor": 0,
    "patch": 0
  }
}
```

<h3 id="travelimpactmodelflightscomputeflightemissions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ComputeFlightEmissionsResponse](#schemacomputeflightemissionsresponse)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_ComputeFlightEmissionsRequest">ComputeFlightEmissionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemacomputeflightemissionsrequest"></a>
<a id="schema_ComputeFlightEmissionsRequest"></a>
<a id="tocScomputeflightemissionsrequest"></a>
<a id="tocscomputeflightemissionsrequest"></a>

```json
{
  "flights": [
    {
      "departureDate": {
        "day": 0,
        "month": 0,
        "year": 0
      },
      "destination": "string",
      "flightNumber": 0,
      "operatingCarrierCode": "string",
      "origin": "string"
    }
  ]
}
```

Input definition for the ComputeFlightEmissions request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|flights|[[Flight](#schemaflight)]|false|none|Required. Direct flights to return emission estimates for.|

<h2 id="tocS_ComputeFlightEmissionsResponse">ComputeFlightEmissionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemacomputeflightemissionsresponse"></a>
<a id="schema_ComputeFlightEmissionsResponse"></a>
<a id="tocScomputeflightemissionsresponse"></a>
<a id="tocscomputeflightemissionsresponse"></a>

```json
{
  "flightEmissions": [
    {
      "emissionsGramsPerPax": {
        "business": 0,
        "economy": 0,
        "first": 0,
        "premiumEconomy": 0
      },
      "flight": {
        "departureDate": {
          "day": 0,
          "month": 0,
          "year": 0
        },
        "destination": "string",
        "flightNumber": 0,
        "operatingCarrierCode": "string",
        "origin": "string"
      }
    }
  ],
  "modelVersion": {
    "dated": "string",
    "major": 0,
    "minor": 0,
    "patch": 0
  }
}
```

Output definition for the ComputeFlightEmissions response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|flightEmissions|[[FlightWithEmissions](#schemaflightwithemissions)]|false|none|List of flight legs with emission estimates.|
|modelVersion|[ModelVersion](#schemamodelversion)|false|none|The model version under which emission estimates for all flights in this response were computed.|

<h2 id="tocS_Date">Date</h2>
<!-- backwards compatibility -->
<a id="schemadate"></a>
<a id="schema_Date"></a>
<a id="tocSdate"></a>
<a id="tocsdate"></a>

```json
{
  "day": 0,
  "month": 0,
  "year": 0
}
```

Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|day|integer(int32)|false|none|Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.|
|month|integer(int32)|false|none|Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.|
|year|integer(int32)|false|none|Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.|

<h2 id="tocS_EmissionsGramsPerPax">EmissionsGramsPerPax</h2>
<!-- backwards compatibility -->
<a id="schemaemissionsgramsperpax"></a>
<a id="schema_EmissionsGramsPerPax"></a>
<a id="tocSemissionsgramsperpax"></a>
<a id="tocsemissionsgramsperpax"></a>

```json
{
  "business": 0,
  "economy": 0,
  "first": 0,
  "premiumEconomy": 0
}
```

Grouped emissions per seating class results.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|business|integer(int32)|false|none|Emissions for one passenger in business class in grams. This field is always computed and populated, regardless of whether the aircraft has business class seats or not.|
|economy|integer(int32)|false|none|Emissions for one passenger in economy class in grams. This field is always computed and populated, regardless of whether the aircraft has economy class seats or not.|
|first|integer(int32)|false|none|Emissions for one passenger in first class in grams. This field is always computed and populated, regardless of whether the aircraft has first class seats or not.|
|premiumEconomy|integer(int32)|false|none|Emissions for one passenger in premium economy class in grams. This field is always computed and populated, regardless of whether the aircraft has premium economy class seats or not.|

<h2 id="tocS_Flight">Flight</h2>
<!-- backwards compatibility -->
<a id="schemaflight"></a>
<a id="schema_Flight"></a>
<a id="tocSflight"></a>
<a id="tocsflight"></a>

```json
{
  "departureDate": {
    "day": 0,
    "month": 0,
    "year": 0
  },
  "destination": "string",
  "flightNumber": 0,
  "operatingCarrierCode": "string",
  "origin": "string"
}
```

All details related to a single request item for a direct flight emission estimates.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|departureDate|[Date](#schemadate)|false|none|Required. Date of the flight in the time zone of the origin airport. Must be a date in the present or future.|
|destination|string|false|none|Required. IATA airport code for flight destination, e.g. "JFK".|
|flightNumber|integer(int32)|false|none|Required. Flight number, e.g. 324.|
|operatingCarrierCode|string|false|none|Required. IATA carrier code, e.g. "AA".|
|origin|string|false|none|Required. IATA airport code for flight origin, e.g. "LHR".|

<h2 id="tocS_FlightWithEmissions">FlightWithEmissions</h2>
<!-- backwards compatibility -->
<a id="schemaflightwithemissions"></a>
<a id="schema_FlightWithEmissions"></a>
<a id="tocSflightwithemissions"></a>
<a id="tocsflightwithemissions"></a>

```json
{
  "emissionsGramsPerPax": {
    "business": 0,
    "economy": 0,
    "first": 0,
    "premiumEconomy": 0
  },
  "flight": {
    "departureDate": {
      "day": 0,
      "month": 0,
      "year": 0
    },
    "destination": "string",
    "flightNumber": 0,
    "operatingCarrierCode": "string",
    "origin": "string"
  }
}
```

Direct flight with emission estimates.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|emissionsGramsPerPax|[EmissionsGramsPerPax](#schemaemissionsgramsperpax)|false|none|Optional. Per-passenger emission estimate numbers. Will not be present if emissions could not be computed. For the list of reasons why emissions could not be computed, see ComputeFlightEmissions.|
|flight|[Flight](#schemaflight)|false|none|Required. Matches the flight identifiers in the request. Note: all IATA codes are capitalized.|

<h2 id="tocS_ModelVersion">ModelVersion</h2>
<!-- backwards compatibility -->
<a id="schemamodelversion"></a>
<a id="schema_ModelVersion"></a>
<a id="tocSmodelversion"></a>
<a id="tocsmodelversion"></a>

```json
{
  "dated": "string",
  "major": 0,
  "minor": 0,
  "patch": 0
}
```

Travel Impact Model version. For more information about the model versioning see https://github.com/google/travel-impact-model/#versioning.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dated|string|false|none|Dated versions: Model datasets are recreated with refreshed input data but no change to the algorithms regularly.|
|major|integer(int32)|false|none|Major versions: Major changes to methodology (e.g. adding new data sources to the model that lead to major output changes). Such changes will be infrequent and announced well in advance. Might involve API version changes, which will respect guidelines in https://cloud.google.com/endpoints/docs/openapi/versioning-an-api#backwards-incompatible|
|minor|integer(int32)|false|none|Minor versions: Changes to the model that, while being consistent across schema versions, change the model parameters or implementation.|
|patch|integer(int32)|false|none|Patch versions: Implementation changes meant to address bugs or inaccuracies in the model implementation.|
