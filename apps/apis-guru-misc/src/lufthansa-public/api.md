<h1 id="lh-public-api">LH Public API v1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="https://api.lufthansa.com/v1">https://api.lufthansa.com/v1</a>

License: <a href="https://developer.lufthansa.com">LH</a>

# Authentication

- oAuth2 authentication.

    - Flow: authorizationCode
    - Authorization URL = [https://api.lufthansa.com/v1/oauth/token](https://api.lufthansa.com/v1/oauth/token)
    - Token URL = [https://api.lufthansa.com/v1/oauth/token](https://api.lufthansa.com/v1/oauth/token)

|Scope|Scope Description|
|---|---|
|read:LH Open API|read access|

<h1 id="lh-public-api-cargo">Cargo</h1>

## Retrieve all flights

<a id="opIdCargoGetRouteFromDateProductCodeByOriginAndDestinationGet"></a>

> Code samples

```bash
curl https://example.com/cargo/getRoute/string-string/string/FAN \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /cargo/getRoute/{origin}-{destination}/{fromDate}/{productCode}`

Retrieve a list of all possible flights (both direct and connecting) between two airports on a given date. Routes are available for today and up to days in the future.

<h3 id="retrieve-all-flights-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|origin|path|string|true|Departure Airport : 3-letter IATA airport code, e.g. FRA.|
|destination|path|string|true|Arrival airport : 3-letter IATA airport code, e.g. HKG.|
|fromDate|path|string|true|Departure date in the local time of the departure airport. Based on LAT (Latest Acceptance Time). format : yyyy-MM-dd eg : 2017-07-15|
|productCode|path|string|true|Product code for requested service and specials : 3-letter eg: YNZ|
|Accept|header|string|true|http header: application/json or application/xml (Acceptable values are: "application/json", "application/xml")|

#### Enumerated Values

|Parameter|Value|
|---|---|
|productCode|FAN|
|productCode|FCO|
|productCode|FCP|
|productCode|FDG|
|productCode|FTF|
|productCode|FUN|
|productCode|FWN|
|productCode|YCO|
|productCode|YCP|
|productCode|YDG|
|productCode|YNB|
|productCode|YNZ|
|productCode|YTF|
|productCode|YUN|
|productCode|ZXB|
|productCode|ZXF|
|productCode|ZXR|

> Example responses

> 200 Response

```json
{}
```

<h3 id="retrieve-all-flights-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth
</aside>

## Shipment Tracking

<a id="opIdCargoShipmentTrackingByAWBPrefixAndAWBNumberGet"></a>

> Code samples

```bash
curl https://example.com/cargo/shipmentTracking/string-string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /cargo/shipmentTracking/{aWBPrefix}-{aWBNumber}`

With this tracking service you can easily retrieve your shipment or flight status information.

<h3 id="shipment-tracking-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|aWBPrefix|path|string|true|aWBPrefix : Represents the airline that is the owner of this AWB, i.e. "020" = Lufthansa Cargo, format : [0-9]{3} e.g. 020|
|aWBNumber|path|string|true|aWBNumber : The Air Waybill Number , format : [0-9]{8} e.g. 08002050|
|Accept|header|string|true|http header: application/json or application/xml (Acceptable values are: "application/json", "application/xml")|

> Example responses

> 200 Response

```json
{}
```

<h3 id="shipment-tracking-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth
</aside>

<h1 id="lh-public-api-offers">Offers</h1>

## Lounges

<a id="opIdOffersLoungesByLocationGet"></a>

> Code samples

```bash
curl https://example.com/offers/lounges/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /offers/lounges/{location}`

Lounge information

<h3 id="lounges-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|location|path|string|true|3-leter IATA airport or city code (e.g. 'ZRH')|
|Accept|header|string|true|http header: application/json or application/xml (Acceptable values are: "application/json", "application/xml")|
|cabinClass|query|string|false|Cabin class: 'M', 'E', 'C', 'F' (Acceptable values are: "", "M", "E", "C", "F")|
|tierCode|query|string|false|Frequent flyer level ('FTL', 'SGC', 'SEN', 'HON') (Acceptable values are: "", "FTL", "SGC", "SEN", "HON")|
|lang|query|string|false|Language code.|

> Example responses

> 200 Response

```json
{}
```

<h3 id="lounges-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth
</aside>

## Seat Maps

<a id="opIdOffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGet"></a>

> Code samples

```bash
curl https://example.com/offers/seatmaps/string/string/string/string/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /offers/seatmaps/{flightNumber}/{origin}/{destination}/{date}/{cabinClass}`

Cabin layout and seat characteristics.

<h3 id="seat-maps-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|flightNumber|path|string|true|Flight number including carrier code and any suffix (e.g. 'LH2037')|
|origin|path|string|true|Departure airport. 3-letter IATA airport code (e.g. 'TXL')|
|destination|path|string|true|Destination airport. 3-letter IATA airport code (e.g. 'MUC')|
|date|path|string|true|Departure date (YYYY-MM-DD)|
|cabinClass|path|string|true|Cabin class: 'M', 'E', 'C', 'F'. Some flights have fewer classes (Acceptable values are: "M", "E", "C", "F")|
|Accept|header|string|true|http header: application/json or application/xml (Acceptable values are: "application/json", "application/xml")|

> Example responses

> 200 Response

```json
{}
```

<h3 id="seat-maps-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth
</aside>

<h1 id="lh-public-api-operations">Operations</h1>

## Flight Status at Arrival Airport

<a id="opIdOperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGet"></a>

> Code samples

```bash
curl https://example.com/operations/flightstatus/arrivals/string/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /operations/flightstatus/arrivals/{airportCode}/{fromDateTime}`

Status of all arrivals at a given airport up to 4 hours from the provided date time.

<h3 id="flight-status-at-arrival-airport-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|airportCode|path|string|true|3-letter IATA aiport code (e.g. 'ZRH')|
|fromDateTime|path|string|true|Start of time range in local time of arrival airport (YYYY-MM-DDTHH:mm)|
|Accept|header|string|true|http header: application/json or application/xml (Acceptable values are: "application/json", "application/xml")|
|limit|query|string|false|Number of records returned per request. Defaults to 20, maximum is 100 (if a value bigger than 100 is given, 100 will be taken)|
|offset|query|string|false|Number of records skipped. Defaults to 0|

> Example responses

> 200 Response

```json
{}
```

<h3 id="flight-status-at-arrival-airport-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth
</aside>

## Flight Status at Departure Airport

<a id="opIdOperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGet"></a>

> Code samples

```bash
curl https://example.com/operations/flightstatus/departures/string/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /operations/flightstatus/departures/{airportCode}/{fromDateTime}`

Status of all departures from a given airport up to 4 hours from the provided date time.

<h3 id="flight-status-at-departure-airport-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|airportCode|path|string|true|Departure airport. 3-letter IATA airport code (e.g. 'HAM')|
|fromDateTime|path|string|true|Start of time range in local time of departure airport (YYYY-MM-DDTHH:mm)|
|Accept|header|string|true|http header: application/json or application/xml (Acceptable values are: "application/json", "application/xml")|
|limit|query|string|false|Number of records returned per request. Defaults to 20, maximum is 100 (if a value bigger than 100 is given, 100 will be taken)|
|offset|query|string|false|Number of records skipped. Defaults to 0|

> Example responses

> 200 Response

```json
{}
```

<h3 id="flight-status-at-departure-airport-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth
</aside>

## Flight Status by Route

<a id="opIdOperationsFlightstatusRouteDateByOriginAndDestinationGet"></a>

> Code samples

```bash
curl https://example.com/operations/flightstatus/route/string/string/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /operations/flightstatus/route/{origin}/{destination}/{date}`

Status of flights between a given origin and destination on a given date.

<h3 id="flight-status-by-route-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|origin|path|string|true|3-letter IATA airport (e.g. 'FRA')|
|destination|path|string|true|3-letter IATA airport code (e.g. 'JFK')|
|date|path|string|true|Departure date (YYYY-MM-DD) in local time of departure airport|
|Accept|header|string|true|http header: application/json or application/xml (Acceptable values are: "application/json", "application/xml")|
|limit|query|string|false|Number of records returned per request. Defaults to 20, maximum is 100 (if a value bigger than 100 is given, 100 will be taken)|
|offset|query|string|false|Number of records skipped. Defaults to 0|

> Example responses

> 200 Response

```json
{}
```

<h3 id="flight-status-by-route-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth
</aside>

## Flight Status

<a id="opIdOperationsFlightstatusByFlightNumberAndDateGet"></a>

> Code samples

```bash
curl https://example.com/operations/flightstatus/string/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /operations/flightstatus/{flightNumber}/{date}`

Status of a particular flight (boarding, delayed, etc.).

<h3 id="flight-status-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|flightNumber|path|string|true|Flight number including carrier code and any suffix (e.g. 'LH400')|
|date|path|string|true|The departure date (YYYY-MM-DD) in the local time of the departure airport|
|Accept|header|string|true|http header: application/json or application/xml (Acceptable values are: "application/json", "application/xml")|
|limit|query|string|false|Number of records returned per request. Defaults to 20, maximum is 100 (if a value bigger than 100 is given, 100 will be taken)|
|offset|query|string|false|Number of records skipped. Defaults to 0|

> Example responses

> 200 Response

```json
{}
```

<h3 id="flight-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth
</aside>

## Flight Schedules

<a id="opIdOperationsSchedulesFromDateTimeByOriginAndDestinationGet"></a>

> Code samples

```bash
curl https://example.com/operations/schedules/string/string/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /operations/schedules/{origin}/{destination}/{fromDateTime}`

Scheduled flights between given airports on a given date.

<h3 id="flight-schedules-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|origin|path|string|true|Departure airport. 3-letter IATA airport code (e.g. 'ZRH')|
|destination|path|string|true|Destination airport. 3-letter IATA airport code (e.g. 'FRA')|
|fromDateTime|path|string|true|Local departure date and optionally departure time (YYYY-MM-DD or YYYY-MM-DDTHH:mm). When not provided, time is assumed to be 00:01|
|Accept|header|string|true|http header: application/json or application/xml (Acceptable values are: "application/json", "application/xml")|
|directFlights|query|boolean|false|Show only direct flights (false=0, true=1). Default is false|
|limit|query|string|false|Number of records returned per request. Defaults to 20, maximum is 100 (if a value bigger than 100 is given, 100 will be taken)|
|offset|query|string|false|Number of records skipped. Defaults to 0|

> Example responses

> 200 Response

```json
{}
```

<h3 id="flight-schedules-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth
</aside>

<h1 id="lh-public-api-reference-data">Reference Data</h1>

## Aircraft

<a id="opIdReferencesAircraftByAircraftCodeGet"></a>

> Code samples

```bash
curl https://example.com/references/aircraft/33P \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /references/aircraft/{aircraftCode}`

List all aircraft types or one specific aircraft type.

<h3 id="aircraft-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string|true|http header: application/json or application/xml (Acceptable values are: "application/json", "application/xml")|
|aircraftCode|path|string|true|3-character IATA aircraft code|
|limit|query|string|false|Number of records returned per request. Defaults to 20, maximum is 100 (if a value bigger than 100 is given, 100 will be taken)|
|offset|query|string|false|Number of records skipped. Defaults to 0|

> Example responses

> 200 Response

```json
{}
```

<h3 id="aircraft-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth
</aside>

## Airlines

<a id="opIdReferencesAirlinesByAirlineCodeGet"></a>

> Code samples

```bash
curl https://example.com/references/airlines/LH \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /references/airlines/{airlineCode}`

List all airlines or one specific airline.

<h3 id="airlines-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string|true|http header: application/json or application/xml (Acceptable values are: "application/json", "application/xml")|
|airlineCode|path|string|true|2-character IATA airline/carrier code|
|limit|query|string|false|Number of records returned per request. Defaults to 20, maximum is 100 (if a value bigger than 100 is given, 100 will be taken)|
|offset|query|string|false|Number of records skipped. Defaults to 0|

> Example responses

> 200 Response

```json
{}
```

<h3 id="airlines-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth
</aside>

## Nearest Airports

<a id="opIdReferencesAirportsNearestByLatitudeAndLongitudeGet"></a>

> Code samples

```bash
curl https://example.com/references/airports/nearest/0,0 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /references/airports/nearest/{latitude},{longitude}`

List the 5 closest airports to the given latitude and longitude, irrespective of the radius of the reference point.

<h3 id="nearest-airports-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|latitude|path|integer(int32)|true|Latitude in decimal format to at most 3 decimal places|
|longitude|path|integer(int32)|true|Longitude in decimal format to at most 3 decimal places|
|Accept|header|string|true|http header: application/json or application/xml (Acceptable values are: "application/json", "application/xml")|
|lang|query|string|false|2 letter ISO 3166-1 language code|

> Example responses

> 200 Response

```json
{}
```

<h3 id="nearest-airports-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth
</aside>

## Airports

<a id="opIdReferencesAirportsByAirportCodeGet"></a>

> Code samples

```bash
curl https://example.com/references/airports/TXL \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /references/airports/{airportCode}`

List all airports or one specific airport. All airports response is very large. It is possible to request the response in a specific language.

<h3 id="airports-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string|true|http header: application/json or application/xml (Acceptable values are: "application/json", "application/xml")|
|airportCode|path|string|true|3-letter IATA airport code|
|lang|query|string|false|2-letter ISO 3166-1 language code|
|limit|query|string|false|Number of records returned per request. Defaults to 20, maximum is 100 (if a value bigger than 100 is given, 100 will be taken)|
|offset|query|string|false|Number of records skipped. Defaults to 0|
|LHoperated|query|boolean|false|Restrict the results to locations with flights operated by LH (false=0, true=1)|

> Example responses

> 200 Response

```json
{
  "AirportResource": {
    "Airports": {
      "Airport": {
        "AirportCode": "string",
        "CityCode": "string",
        "CountryCode": "string",
        "LocationType": "string",
        "Names": {
          "Name": [
            {
              "$": "string",
              "@LanguageCode": "string"
            }
          ]
        },
        "Position": {
          "Coordinate": {
            "Latitude": 0,
            "Longitude": 0
          }
        },
        "TimeZoneId": "string",
        "UtcOffset": 0
      }
    },
    "Meta": {
      "@Version": "string",
      "Link": [
        {
          "@Href": "string",
          "@Rel": "string"
        }
      ],
      "TotalCount": 0
    }
  }
}
```

<h3 id="airports-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[AirportResponse](#schemaairportresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth
</aside>

## Cities

<a id="opIdReferencesCitiesByCityCodeGet"></a>

> Code samples

```bash
curl https://example.com/references/cities/BER \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /references/cities/{cityCode}`

List all cities or one specific city. It is possible to request the response in a specific language.

<h3 id="cities-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string|true|http header: application/json or application/xml (Acceptable values are: "application/json", "application/xml")|
|cityCode|path|string|true|3-letter IATA city code|
|lang|query|string|false|2 letter ISO 3166-1 language code|
|limit|query|string|false|Number of records returned per request. Defaults to 20, maximum is 100 (if a value bigger than 100 is given, 100 will be taken)|
|offset|query|string|false|Number of records skipped. Defaults to 0|

> Example responses

> 200 Response

```json
{}
```

<h3 id="cities-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth
</aside>

## Countries

<a id="opIdReferencesCountriesByCountryCodeGet"></a>

> Code samples

```bash
curl https://example.com/references/countries/DK \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /references/countries/{countryCode}`

List all countries or one specific country. It is possible to request the response in a specific language.

<h3 id="countries-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string|true|http header: application/json or application/xml (Acceptable values are: "application/json", "application/xml")|
|countryCode|path|string|true|2-letter ISO 3166-1 country code|
|lang|query|string|false|2 letter ISO 3166-1 language code|
|limit|query|string|false|Number of records returned per request. Defaults to 20, maximum is 100 (if a value bigger than 100 is given, 100 will be taken)|
|offset|query|string|false|Number of records skipped. Defaults to 0|

> Example responses

> 200 Response

```json
{}
```

<h3 id="countries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth
</aside>

# Schemas

<h2 id="tocS_Airport">Airport</h2>
<!-- backwards compatibility -->
<a id="schemaairport"></a>
<a id="schema_Airport"></a>
<a id="tocSairport"></a>
<a id="tocsairport"></a>

```json
{
  "AirportCode": "string",
  "CityCode": "string",
  "CountryCode": "string",
  "LocationType": "string",
  "Names": {
    "Name": [
      {
        "$": "string",
        "@LanguageCode": "string"
      }
    ]
  },
  "Position": {
    "Coordinate": {
      "Latitude": 0,
      "Longitude": 0
    }
  },
  "TimeZoneId": "string",
  "UtcOffset": 0
}
```

Array of all available airports or one airport matching the request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AirportCode|string|false|none|3-letter IATA airport code, e.g. “TXL”.|
|CityCode|string|false|none|3-letter IATA city code, e.g. “BER”.|
|CountryCode|string|false|none|2-letter ISO 3166-1 country code, e.g. “DE”.|
|LocationType|string|false|none| “Airport”, “RailwayStation” or “BusStation”.|
|Names|object|false|none|Container for airport names.|
|Position|object|false|none|Physical location of an airport. This data section is optional and therefore not always present.|
|TimeZoneId|string|false|none|Time zone name airport is in|
|UtcOffset|number(float)|false|none|Hour offset of airport to UTC time zone|

<h2 id="tocS_AirportResource">AirportResource</h2>
<!-- backwards compatibility -->
<a id="schemaairportresource"></a>
<a id="schema_AirportResource"></a>
<a id="tocSairportresource"></a>
<a id="tocsairportresource"></a>

```json
{
  "Airports": {
    "Airport": {
      "AirportCode": "string",
      "CityCode": "string",
      "CountryCode": "string",
      "LocationType": "string",
      "Names": {
        "Name": [
          {
            "$": "string",
            "@LanguageCode": "string"
          }
        ]
      },
      "Position": {
        "Coordinate": {
          "Latitude": 0,
          "Longitude": 0
        }
      },
      "TimeZoneId": "string",
      "UtcOffset": 0
    }
  },
  "Meta": {
    "@Version": "string",
    "Link": [
      {
        "@Href": "string",
        "@Rel": "string"
      }
    ],
    "TotalCount": 0
  }
}
```

Root element of airport response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Airports|object|false|none|Container for airport elements.|
|Meta|object|false|none|Container for meta links.|

<h2 id="tocS_AirportResponse">AirportResponse</h2>
<!-- backwards compatibility -->
<a id="schemaairportresponse"></a>
<a id="schema_AirportResponse"></a>
<a id="tocSairportresponse"></a>
<a id="tocsairportresponse"></a>

```json
{
  "AirportResource": {
    "Airports": {
      "Airport": {
        "AirportCode": "string",
        "CityCode": "string",
        "CountryCode": "string",
        "LocationType": "string",
        "Names": {
          "Name": [
            {
              "$": "string",
              "@LanguageCode": "string"
            }
          ]
        },
        "Position": {
          "Coordinate": {
            "Latitude": 0,
            "Longitude": 0
          }
        },
        "TimeZoneId": "string",
        "UtcOffset": 0
      }
    },
    "Meta": {
      "@Version": "string",
      "Link": [
        {
          "@Href": "string",
          "@Rel": "string"
        }
      ],
      "TotalCount": 0
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AirportResource|[AirportResource](#schemaairportresource)|false|none|Root element of airport response.|

<h2 id="tocS_Coordinate">Coordinate</h2>
<!-- backwards compatibility -->
<a id="schemacoordinate"></a>
<a id="schema_Coordinate"></a>
<a id="tocScoordinate"></a>
<a id="tocscoordinate"></a>

```json
{
  "Latitude": 0,
  "Longitude": 0
}
```

Container for coordinates.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Latitude|number(float)|false|none|Decimal latitude. Range: -90 (South Pole) to +90 (North Pole), e.g. “51.540”.|
|Longitude|number(float)|false|none|Decimal longitude. Range: -180 (West of Prime Meridian) to +180 (East of Prime Meridian).|

<h2 id="tocS_Link">Link</h2>
<!-- backwards compatibility -->
<a id="schemalink"></a>
<a id="schema_Link"></a>
<a id="tocSlink"></a>
<a id="tocslink"></a>

```json
{
  "@Href": "string",
  "@Rel": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|@Href|string|false|none|Link to actual a resource.|
|@Rel|string|false|none|Specifying kind of link such as ‘self’ (link that returned this response), ‘alternate’ (link that points to another resource) or ‘related’ (link that points to related resource).|

<h2 id="tocS_Name">Name</h2>
<!-- backwards compatibility -->
<a id="schemaname"></a>
<a id="schema_Name"></a>
<a id="tocSname"></a>
<a id="tocsname"></a>

```json
{
  "$": "string",
  "@LanguageCode": "string"
}
```

2-letter ISO 639-1 language code for the corresponding item.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|$|string|false|none|none|
|@LanguageCode|string|false|none|none|
