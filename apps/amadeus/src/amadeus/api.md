<h1 id="flight-offers-search">Flight Offers Search v2.2.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.


Before using this API, we recommend you read our **[Authorization Guide](https://developers.amadeus.com/self-service/apis-docs/guides/authorization)** for more information on how to generate an access token. 

Please also be aware that our test environment is based on a subset of the production, if you are not returning any results try with big cities/airports like LON (London) or NYC (New-York).

Base URLs:

* <a href="https://test.api.amadeus.com/v2">https://test.api.amadeus.com/v2</a>

<h1 id="flight-offers-search-shopping">Shopping</h1>

## Return list of Flight Offers based on searching criteria.

<a id="opIdgetFlightOffers"></a>

> Code samples

```bash
curl 'https://test.api.amadeus.com/shopping/flight-offers?originLocationCode=SYD&destinationLocationCode=BKK&departureDate=2021-02-01&adults=1' \
  -H 'Accept: application/vnd.amadeus+json'
```

`GET /shopping/flight-offers`

<h3 id="return-list-of-flight-offers-based-on-searching-criteria-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|originLocationCode|query|string|true|city/airport [IATA code](http://www.iata.org/publications/Pages/code-search.aspx) from which the traveler will depart, e.g. BOS for Boston|
|destinationLocationCode|query|string|true|city/airport [IATA code](http://www.iata.org/publications/Pages/code-search.aspx) to which the traveler is going, e.g. PAR for Paris|
|departureDate|query|string(date)|true|the date on which the traveler will depart from the origin to go to the destination. Dates are specified in the [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) YYYY-MM-DD format, e.g. 2017-12-25|
|returnDate|query|string(date)|false|the date on which the traveler will depart from the destination to return to the origin. If this parameter is not specified, only one-way itineraries are found. If this parameter is specified, only round-trip itineraries are found. Dates are specified in the [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) YYYY-MM-DD format, e.g. 2018-02-28|
|adults|query|integer|true|the number of adult travelers (age 12 or older on date of departure).|
|children|query|integer|false|the number of child travelers (older than age 2 and younger than age 12 on date of departure) who will each have their own separate seat. If specified, this number should be greater than or equal to 0|
|infants|query|integer|false|the number of infant travelers (whose age is less or equal to 2 on date of departure). Infants travel on the lap of an adult traveler, and thus the number of infants must not exceed the number of adults. If specified, this number should be greater than or equal to 0|
|travelClass|query|string|false|most of the flight time should be spent in a cabin of this quality or higher. The accepted travel class is economy, premium economy, business or first class. If no travel class is specified, the search considers any travel class|
|includedAirlineCodes|query|string|false|This option ensures that the system will only consider these airlines. This can not be cumulated with parameter excludedAirlineCodes.<br><br>Airlines are specified as [IATA airline codes](http://www.iata.org/publications/Pages/code-search.aspx) and are comma-separated, e.g. 6X,7X,8X<br>|
|excludedAirlineCodes|query|string|false|This option ensures that the system will ignore these airlines. This can not be cumulated with parameter includedAirlineCodes.<br><br>Airlines are specified as [IATA airline codes](http://www.iata.org/publications/Pages/code-search.aspx) and are comma-separated, e.g. 6X,7X,8X<br>|
|nonStop|query|boolean|false|if set to true, the search will find only flights going from the origin to the destination with no stop in between|
|currencyCode|query|string|false|the preferred currency for the flight offers. Currency is specified in the [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) format, e.g. EUR for Euro|
|maxPrice|query|integer|false|maximum price per traveler. By default, no limit is applied. If specified, the value should be a positive number with no decimals|
|max|query|integer|false|maximum number of flight offers to return. If specified, the value should be greater than or equal to 1|

#### Enumerated Values

|Parameter|Value|
|---|---|
|travelClass|ECONOMY|
|travelClass|PREMIUM_ECONOMY|
|travelClass|BUSINESS|
|travelClass|FIRST|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "1",
      "instantTicketingRequired": false,
      "itineraries": [
        {
          "duration": "PT32H15M",
          "segments": [
            {
              "aircraft": {
                "code": "789"
              },
              "arrival": {
                "at": "2021-02-02T00:30:00",
                "iataCode": "SIN",
                "terminal": "1"
              },
              "blacklistedInEU": false,
              "carrierCode": "TR",
              "departure": {
                "at": "2021-02-01T19:15:00",
                "iataCode": "SYD",
                "terminal": "1"
              },
              "duration": "PT8H15M",
              "id": "1",
              "number": "13",
              "numberOfStops": 0,
              "operating": {
                "carrierCode": "TR"
              }
            },
            {
              "aircraft": {
                "code": "788"
              },
              "arrival": {
                "at": "2021-02-02T23:30:00",
                "iataCode": "DMK",
                "terminal": "1"
              },
              "blacklistedInEU": false,
              "carrierCode": "TR",
              "departure": {
                "at": "2021-02-02T22:05:00",
                "iataCode": "SIN",
                "terminal": "1"
              },
              "duration": "PT2H25M",
              "id": "2",
              "number": "868",
              "numberOfStops": 0,
              "operating": {
                "carrierCode": "TR"
              }
            }
          ]
        },
        {
          "duration": "PT15H",
          "segments": [
            {
              "aircraft": {
                "code": "788"
              },
              "arrival": {
                "at": "2021-02-06T02:50:00",
                "iataCode": "SIN",
                "terminal": "1"
              },
              "blacklistedInEU": false,
              "carrierCode": "TR",
              "departure": {
                "at": "2021-02-05T23:15:00",
                "iataCode": "DMK",
                "terminal": "1"
              },
              "duration": "PT2H35M",
              "id": "5",
              "number": "867",
              "numberOfStops": 0,
              "operating": {
                "carrierCode": "TR"
              }
            },
            {
              "aircraft": {
                "code": "789"
              },
              "arrival": {
                "at": "2021-02-06T18:15:00",
                "iataCode": "SYD",
                "terminal": "1"
              },
              "blacklistedInEU": false,
              "carrierCode": "TR",
              "departure": {
                "at": "2021-02-06T06:55:00",
                "iataCode": "SIN",
                "terminal": "1"
              },
              "duration": "PT8H20M",
              "id": "6",
              "number": "12",
              "numberOfStops": 0,
              "operating": {
                "carrierCode": "TR"
              }
            }
          ]
        }
      ],
      "lastTicketingDate": "2020-08-04",
      "nonHomogeneous": false,
      "numberOfBookableSeats": 9,
      "oneWay": false,
      "price": {
        "base": "334.00",
        "currency": "EUR",
        "fees": [
          {
            "amount": "0.00",
            "type": "SUPPLIER"
          },
          {
            "amount": "0.00",
            "type": "TICKETING"
          }
        ],
        "grandTotal": "546.70",
        "total": "546.70"
      },
      "pricingOptions": {
        "fareType": [
          "PUBLISHED"
        ],
        "includedCheckedBagsOnly": true
      },
      "source": "GDS",
      "travelerPricings": [
        {
          "fareDetailsBySegment": [
            {
              "cabin": "ECONOMY",
              "class": "O",
              "fareBasis": "O2TR24",
              "includedCheckedBags": {
                "weight": 20,
                "weightUnit": "KG"
              },
              "segmentId": "1"
            },
            {
              "cabin": "ECONOMY",
              "class": "O",
              "fareBasis": "O2TR24",
              "includedCheckedBags": {
                "weight": 20,
                "weightUnit": "KG"
              },
              "segmentId": "2"
            },
            {
              "cabin": "ECONOMY",
              "class": "X",
              "fareBasis": "X2TR24",
              "includedCheckedBags": {
                "weight": 20,
                "weightUnit": "KG"
              },
              "segmentId": "5"
            },
            {
              "cabin": "ECONOMY",
              "class": "H",
              "fareBasis": "H2TR24",
              "includedCheckedBags": {
                "weight": 20,
                "weightUnit": "KG"
              },
              "segmentId": "6"
            }
          ],
          "fareOption": "STANDARD",
          "price": {
            "base": "334.00",
            "currency": "EUR",
            "total": "546.70"
          },
          "travelerId": "1",
          "travelerType": "ADULT"
        }
      ],
      "type": "flight-offer",
      "validatingAirlineCodes": [
        "HR"
      ]
    },
    {
      "id": "2",
      "instantTicketingRequired": false,
      "itineraries": [
        {
          "duration": "PT32H15M",
          "segments": [
            {
              "aircraft": {
                "code": "789"
              },
              "arrival": {
                "at": "2021-02-02T00:30:00",
                "iataCode": "SIN",
                "terminal": "1"
              },
              "blacklistedInEU": false,
              "carrierCode": "TR",
              "departure": {
                "at": "2021-02-01T19:15:00",
                "iataCode": "SYD",
                "terminal": "1"
              },
              "duration": "PT8H15M",
              "id": "1",
              "number": "13",
              "numberOfStops": 0,
              "operating": {
                "carrierCode": "TR"
              }
            },
            {
              "aircraft": {
                "code": "788"
              },
              "arrival": {
                "at": "2021-02-02T23:30:00",
                "iataCode": "DMK",
                "terminal": "1"
              },
              "blacklistedInEU": false,
              "carrierCode": "TR",
              "departure": {
                "at": "2021-02-02T22:05:00",
                "iataCode": "SIN",
                "terminal": "1"
              },
              "duration": "PT2H25M",
              "id": "2",
              "number": "868",
              "numberOfStops": 0,
              "operating": {
                "carrierCode": "TR"
              }
            }
          ]
        },
        {
          "duration": "PT16H35M",
          "segments": [
            {
              "aircraft": {
                "code": "788"
              },
              "arrival": {
                "at": "2021-02-05T20:00:00",
                "iataCode": "SIN",
                "terminal": "1"
              },
              "blacklistedInEU": false,
              "carrierCode": "TR",
              "departure": {
                "at": "2021-02-05T16:25:00",
                "iataCode": "DMK",
                "terminal": "1"
              },
              "duration": "PT2H35M",
              "id": "7",
              "number": "869",
              "numberOfStops": 0,
              "operating": {
                "carrierCode": "TR"
              }
            },
            {
              "aircraft": {
                "code": "788"
              },
              "arrival": {
                "at": "2021-02-06T13:00:00",
                "iataCode": "SYD",
                "terminal": "1"
              },
              "blacklistedInEU": false,
              "carrierCode": "TR",
              "departure": {
                "at": "2021-02-06T02:00:00",
                "iataCode": "SIN",
                "terminal": "1"
              },
              "duration": "PT8H",
              "id": "8",
              "number": "2",
              "numberOfStops": 0,
              "operating": {
                "carrierCode": "TR"
              }
            }
          ]
        }
      ],
      "lastTicketingDate": "2020-08-04",
      "nonHomogeneous": false,
      "numberOfBookableSeats": 9,
      "oneWay": false,
      "price": {
        "base": "334.00",
        "currency": "EUR",
        "fees": [
          {
            "amount": "0.00",
            "type": "SUPPLIER"
          },
          {
            "amount": "0.00",
            "type": "TICKETING"
          }
        ],
        "grandTotal": "546.70",
        "total": "546.70"
      },
      "pricingOptions": {
        "fareType": [
          "PUBLISHED"
        ],
        "includedCheckedBagsOnly": true
      },
      "source": "GDS",
      "travelerPricings": [
        {
          "fareDetailsBySegment": [
            {
              "cabin": "ECONOMY",
              "class": "O",
              "fareBasis": "O2TR24",
              "includedCheckedBags": {
                "weight": 20,
                "weightUnit": "KG"
              },
              "segmentId": "1"
            },
            {
              "cabin": "ECONOMY",
              "class": "O",
              "fareBasis": "O2TR24",
              "includedCheckedBags": {
                "weight": 20,
                "weightUnit": "KG"
              },
              "segmentId": "2"
            },
            {
              "cabin": "ECONOMY",
              "class": "X",
              "fareBasis": "X2TR24",
              "includedCheckedBags": {
                "weight": 20,
                "weightUnit": "KG"
              },
              "segmentId": "7"
            },
            {
              "cabin": "ECONOMY",
              "class": "H",
              "fareBasis": "H2TR24",
              "includedCheckedBags": {
                "weight": 20,
                "weightUnit": "KG"
              },
              "segmentId": "8"
            }
          ],
          "fareOption": "STANDARD",
          "price": {
            "base": "334.00",
            "currency": "EUR",
            "total": "546.70"
          },
          "travelerId": "1",
          "travelerType": "ADULT"
        }
      ],
      "type": "flight-offer",
      "validatingAirlineCodes": [
        "HR"
      ]
    },
    {
      "id": "3",
      "instantTicketingRequired": false,
      "itineraries": [
        {
          "duration": "PT13H30M",
          "segments": [
            {
              "aircraft": {
                "code": "788"
              },
              "arrival": {
                "at": "2021-02-01T19:15:00",
                "iataCode": "SIN",
                "terminal": "1"
              },
              "blacklistedInEU": false,
              "carrierCode": "TR",
              "departure": {
                "at": "2021-02-01T14:00:00",
                "iataCode": "SYD",
                "terminal": "1"
              },
              "duration": "PT8H15M",
              "id": "3",
              "number": "3",
              "numberOfStops": 0,
              "operating": {
                "carrierCode": "TR"
              }
            },
            {
              "aircraft": {
                "code": "788"
              },
              "arrival": {
                "at": "2021-02-01T23:30:00",
                "iataCode": "DMK",
                "terminal": "1"
              },
              "blacklistedInEU": false,
              "carrierCode": "TR",
              "departure": {
                "at": "2021-02-01T22:05:00",
                "iataCode": "SIN",
                "terminal": "1"
              },
              "duration": "PT2H25M",
              "id": "4",
              "number": "868",
              "numberOfStops": 0,
              "operating": {
                "carrierCode": "TR"
              }
            }
          ]
        },
        {
          "duration": "PT15H",
          "segments": [
            {
              "aircraft": {
                "code": "788"
              },
              "arrival": {
                "at": "2021-02-06T02:50:00",
                "iataCode": "SIN",
                "terminal": "1"
              },
              "blacklistedInEU": false,
              "carrierCode": "TR",
              "departure": {
                "at": "2021-02-05T23:15:00",
                "iataCode": "DMK",
                "terminal": "1"
              },
              "duration": "PT2H35M",
              "id": "5",
              "number": "867",
              "numberOfStops": 0,
              "operating": {
                "carrierCode": "TR"
              }
            },
            {
              "aircraft": {
                "code": "789"
              },
              "arrival": {
                "at": "2021-02-06T18:15:00",
                "iataCode": "SYD",
                "terminal": "1"
              },
              "blacklistedInEU": false,
              "carrierCode": "TR",
              "departure": {
                "at": "2021-02-06T06:55:00",
                "iataCode": "SIN",
                "terminal": "1"
              },
              "duration": "PT8H20M",
              "id": "6",
              "number": "12",
              "numberOfStops": 0,
              "operating": {
                "carrierCode": "TR"
              }
            }
          ]
        }
      ],
      "lastTicketingDate": "2020-08-04",
      "nonHomogeneous": false,
      "numberOfBookableSeats": 9,
      "oneWay": false,
      "price": {
        "base": "340.00",
        "currency": "EUR",
        "fees": [
          {
            "amount": "0.00",
            "type": "SUPPLIER"
          },
          {
            "amount": "0.00",
            "type": "TICKETING"
          }
        ],
        "grandTotal": "552.70",
        "total": "552.70"
      },
      "pricingOptions": {
        "fareType": [
          "PUBLISHED"
        ],
        "includedCheckedBagsOnly": true
      },
      "source": "GDS",
      "travelerPricings": [
        {
          "fareDetailsBySegment": [
            {
              "cabin": "ECONOMY",
              "class": "O",
              "fareBasis": "O2TR24",
              "includedCheckedBags": {
                "weight": 20,
                "weightUnit": "KG"
              },
              "segmentId": "3"
            },
            {
              "cabin": "ECONOMY",
              "class": "X",
              "fareBasis": "X2TR24",
              "includedCheckedBags": {
                "weight": 20,
                "weightUnit": "KG"
              },
              "segmentId": "4"
            },
            {
              "cabin": "ECONOMY",
              "class": "X",
              "fareBasis": "X2TR24",
              "includedCheckedBags": {
                "weight": 20,
                "weightUnit": "KG"
              },
              "segmentId": "5"
            },
            {
              "cabin": "ECONOMY",
              "class": "H",
              "fareBasis": "H2TR24",
              "includedCheckedBags": {
                "weight": 20,
                "weightUnit": "KG"
              },
              "segmentId": "6"
            }
          ],
          "fareOption": "STANDARD",
          "price": {
            "base": "340.00",
            "currency": "EUR",
            "total": "552.70"
          },
          "travelerId": "1",
          "travelerType": "ADULT"
        }
      ],
      "type": "flight-offer",
      "validatingAirlineCodes": [
        "HR"
      ]
    }
  ],
  "dictionaries": {
    "aircraft": {
      "789": "BOEING 787-9",
      "77W": "BOEING 777-300ER"
    },
    "carriers": {
      "TR": "SCOOT"
    },
    "currencies": {
      "EUR": "EURO"
    },
    "locations": {
      "DMK": {
        "cityCode": "BKK",
        "countryCode": "TH"
      },
      "SIN": {
        "cityCode": "SIN",
        "countryCode": "SG"
      },
      "SYD": {
        "cityCode": "SYD",
        "countryCode": "AU"
      }
    }
  },
  "meta": {
    "count": 3,
    "links": {
      "self": "https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=SYD&destinationLocationCode=BKK&departureDate=2021-02-01&returnDate=2021-02-05&adults=1&max=3"
    }
  }
}
```

> 400 Response

```json
{
  "errors": [
    {
      "code": 477,
      "detail": "invalid query parameter format",
      "source": {
        "example": "CDG",
        "parameter": "airport"
      },
      "status": 400,
      "title": "INVALID FORMAT"
    }
  ]
}
```

> default Response

```json
{
  "errors": [
    {
      "code": 141,
      "status": 500,
      "title": "SYSTEM ERROR HAS OCCURRED"
    }
  ]
}
```

<h3 id="return-list-of-flight-offers-based-on-searching-criteria-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Operation|Inline|
|400|Bad Request|code    \| title                                 <br>------- \| ------------------------------------- <br>425     \| INVALID DATE<br>477     \| INVALID FORMAT<br>2668    \| PARAMETER COMBINATION INVALID/RESTRICTED<br>4926    \| INVALID DATA RECEIVED<br>10661   \| MAXIMUM NUMBER OF OCCURRENCES EXCEEDED <br>32171   \| MANDATORY DATA MISSING<br>|[Error_400](#schemaerror_400)|
|default|Default|Unexpected error|[Error_500](#schemaerror_500)|

<h3 id="return-list-of-flight-offers-based-on-searching-criteria-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[FlightOffer](#schemaflightoffer)]|true|none|none|
|dictionaries|[Dictionaries](#schemadictionaries)|false|none|none|
|meta|[Collection_Meta_Link](#schemacollection_meta_link)|false|none|none|
|warnings|[[Issue](#schemaissue)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Return list of Flight Offers based on posted searching criteria.

<a id="opIdsearchFlightOffers"></a>

> Code samples

```bash
curl https://test.api.amadeus.com/shopping/flight-offers \
  -X POST \
  -H 'Content-Type: application/vnd.amadeus+json' \
  -H 'Accept: application/vnd.amadeus+json' \
  -H 'X-HTTP-Method-Override: GET' \
  -d '{
    "currencyCode": "USD",
    "originDestinations": [
      {
        "departureDateTimeRange": {
          "date": "2020-08-01",
          "time": "10:00:00"
        },
        "destinationLocationCode": "MAD",
        "id": "1",
        "originLocationCode": "RIO"
      },
      {
        "departureDateTimeRange": {
          "date": "2020-08-05",
          "time": "17:00:00"
        },
        "destinationLocationCode": "RIO",
        "id": "2",
        "originLocationCode": "MAD"
      }
    ],
    "searchCriteria": {
      "flightFilters": {
        "cabinRestrictions": [
          {
            "cabin": "BUSINESS",
            "coverage": "MOST_SEGMENTS",
            "originDestinationIds": [
              "1"
            ]
          }
        ],
        "carrierRestrictions": {
          "excludedCarrierCodes": [
            "AA",
            "TP",
            "AZ"
          ]
        }
      },
      "maxFlightOffers": 2
    },
    "sources": [
      "GDS"
    ],
    "travelers": [
      {
        "id": "1",
        "travelerType": "ADULT"
      },
      {
        "id": "2",
        "travelerType": "CHILD"
      }
    ]
  }'
```

`POST /shopping/flight-offers`

> Body parameter

```json
{
  "currencyCode": "USD",
  "originDestinations": [
    {
      "departureDateTimeRange": {
        "date": "2020-08-01",
        "time": "10:00:00"
      },
      "destinationLocationCode": "MAD",
      "id": "1",
      "originLocationCode": "RIO"
    },
    {
      "departureDateTimeRange": {
        "date": "2020-08-05",
        "time": "17:00:00"
      },
      "destinationLocationCode": "RIO",
      "id": "2",
      "originLocationCode": "MAD"
    }
  ],
  "searchCriteria": {
    "flightFilters": {
      "cabinRestrictions": [
        {
          "cabin": "BUSINESS",
          "coverage": "MOST_SEGMENTS",
          "originDestinationIds": [
            "1"
          ]
        }
      ],
      "carrierRestrictions": {
        "excludedCarrierCodes": [
          "AA",
          "TP",
          "AZ"
        ]
      }
    },
    "maxFlightOffers": 2
  },
  "sources": [
    "GDS"
  ],
  "travelers": [
    {
      "id": "1",
      "travelerType": "ADULT"
    },
    {
      "id": "2",
      "travelerType": "CHILD"
    }
  ]
}
```

<h3 id="return-list-of-flight-offers-based-on-posted-searching-criteria-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-HTTP-Method-Override|header|string|true|the HTTP method to apply|
|body|body|[GetFlightOffersQuery](#schemagetflightoffersquery)|true|list of criteria to retrieve a list of flight offers|
|» currencyCode|body|string|false|The currency code, as defined in [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217), to reflect the currency in which this amount is expressed.|
|» originDestinations|body|[[OriginDestination](#schemaorigindestination)]|true|Origins and Destinations must be properly ordered in time (chronological order in accordance with the timezone of each location) to describe the journey consistently. Dates and times must not be past nor more than 365 days in the future, according to provider settings.Number of Origins and Destinations must not exceed the limit defined in provider settings.|
|» searchCriteria|body|[SearchCriteria](#schemasearchcriteria)|false|none|
|» sources|body|[[FlightOfferSource](#schemaflightoffersource)]|true|Allows enable one or more sources. If present in the list, these sources will be called by the system.|
|» travelers|body|[[Traveler](#schematraveler)]|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» sources|GDS|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "1",
      "instantTicketingRequired": false,
      "itineraries": [
        {
          "duration": "PT15H55M",
          "segments": [
            {
              "aircraft": {
                "code": "788"
              },
              "arrival": {
                "at": "2020-08-02T13:10:00",
                "iataCode": "LHR",
                "terminal": "5"
              },
              "blacklistedInEU": false,
              "carrierCode": "BA",
              "departure": {
                "at": "2020-08-01T21:50:00",
                "iataCode": "GIG",
                "terminal": "2"
              },
              "duration": "PT11H20M",
              "id": "1",
              "number": "248",
              "numberOfStops": 0,
              "operating": {
                "carrierCode": "BA"
              }
            },
            {
              "aircraft": {
                "code": "321"
              },
              "arrival": {
                "at": "2020-08-02T18:45:00",
                "iataCode": "MAD",
                "terminal": "4S"
              },
              "blacklistedInEU": false,
              "carrierCode": "BA",
              "departure": {
                "at": "2020-08-02T15:15:00",
                "iataCode": "LHR",
                "terminal": "5"
              },
              "duration": "PT2H30M",
              "id": "2",
              "number": "462",
              "numberOfStops": 0,
              "operating": {
                "carrierCode": "BA"
              }
            }
          ]
        },
        {
          "duration": "PT13H35M",
          "segments": [
            {
              "aircraft": {
                "code": "346"
              },
              "arrival": {
                "at": "2020-08-06T05:40:00",
                "iataCode": "GRU",
                "terminal": "3"
              },
              "blacklistedInEU": false,
              "carrierCode": "IB",
              "departure": {
                "at": "2020-08-05T23:55:00",
                "iataCode": "MAD",
                "terminal": "4S"
              },
              "duration": "PT10H45M",
              "id": "5",
              "number": "6827",
              "numberOfStops": 0,
              "operating": {
                "carrierCode": "IB"
              }
            },
            {
              "aircraft": {
                "code": "320"
              },
              "arrival": {
                "at": "2020-08-06T08:30:00",
                "iataCode": "GIG",
                "terminal": "2"
              },
              "blacklistedInEU": false,
              "carrierCode": "LA",
              "departure": {
                "at": "2020-08-06T07:30:00",
                "iataCode": "GRU",
                "terminal": "2"
              },
              "duration": "PT1H",
              "id": "6",
              "number": "4508",
              "numberOfStops": 0
            }
          ]
        }
      ],
      "lastTicketingDate": "2020-01-16",
      "nonHomogeneous": false,
      "numberOfBookableSeats": 7,
      "oneWay": false,
      "price": {
        "base": "3661.00",
        "currency": "USD",
        "fees": [
          {
            "amount": "0.00",
            "type": "SUPPLIER"
          },
          {
            "amount": "0.00",
            "type": "TICKETING"
          }
        ],
        "grandTotal": "3842.10",
        "total": "3842.10"
      },
      "pricingOptions": {
        "fareType": [
          "PUBLISHED"
        ],
        "includedCheckedBagsOnly": false
      },
      "source": "GDS",
      "travelerPricings": [
        {
          "fareDetailsBySegment": [
            {
              "brandedFare": "BUSINESS",
              "cabin": "BUSINESS",
              "class": "R",
              "fareBasis": "RNNZ60S3",
              "includedCheckedBags": {
                "quantity": 2
              },
              "segmentId": "1"
            },
            {
              "brandedFare": "BUSINESS",
              "cabin": "BUSINESS",
              "class": "J",
              "fareBasis": "RNNZ60S3",
              "includedCheckedBags": {
                "quantity": 2
              },
              "segmentId": "2"
            },
            {
              "brandedFare": "BAGSEAT",
              "cabin": "ECONOMY",
              "class": "V",
              "fareBasis": "VDH0NNM3",
              "includedCheckedBags": {
                "quantity": 1
              },
              "segmentId": "5"
            },
            {
              "brandedFare": "BAGSEAT",
              "cabin": "ECONOMY",
              "class": "V",
              "fareBasis": "VDH0NNM3",
              "includedCheckedBags": {
                "quantity": 1
              },
              "segmentId": "6"
            }
          ],
          "fareOption": "STANDARD",
          "price": {
            "base": "2088.00",
            "currency": "USD",
            "total": "2178.55"
          },
          "travelerId": "1",
          "travelerType": "ADULT"
        },
        {
          "fareDetailsBySegment": [
            {
              "brandedFare": "BUSINESS",
              "cabin": "BUSINESS",
              "class": "R",
              "fareBasis": "RNNZ60S3",
              "segmentId": "1"
            },
            {
              "brandedFare": "BUSINESS",
              "cabin": "BUSINESS",
              "class": "J",
              "fareBasis": "RNNZ60S3",
              "segmentId": "2"
            },
            {
              "brandedFare": "BAGSEAT",
              "cabin": "ECONOMY",
              "class": "V",
              "fareBasis": "VDH0NNM3",
              "segmentId": "5"
            },
            {
              "brandedFare": "BAGSEAT",
              "cabin": "ECONOMY",
              "class": "V",
              "fareBasis": "VDH0NNM3",
              "segmentId": "6"
            }
          ],
          "fareOption": "STANDARD",
          "price": {
            "base": "1573.00",
            "currency": "USD",
            "total": "1663.55"
          },
          "travelerId": "2",
          "travelerType": "CHILD"
        }
      ],
      "type": "flight-offer",
      "validatingAirlineCodes": [
        "BA"
      ]
    },
    {
      "id": "2",
      "instantTicketingRequired": false,
      "itineraries": [
        {
          "duration": "PT15H55M",
          "segments": [
            {
              "aircraft": {
                "code": "788"
              },
              "arrival": {
                "at": "2020-08-02T13:10:00",
                "iataCode": "LHR",
                "terminal": "5"
              },
              "blacklistedInEU": false,
              "carrierCode": "BA",
              "departure": {
                "at": "2020-08-01T21:50:00",
                "iataCode": "GIG",
                "terminal": "2"
              },
              "duration": "PT11H20M",
              "id": "1",
              "number": "248",
              "numberOfStops": 0,
              "operating": {
                "carrierCode": "BA"
              }
            },
            {
              "aircraft": {
                "code": "321"
              },
              "arrival": {
                "at": "2020-08-02T18:45:00",
                "iataCode": "MAD",
                "terminal": "4S"
              },
              "blacklistedInEU": false,
              "carrierCode": "BA",
              "departure": {
                "at": "2020-08-02T15:15:00",
                "iataCode": "LHR",
                "terminal": "5"
              },
              "duration": "PT2H30M",
              "id": "2",
              "number": "462",
              "numberOfStops": 0,
              "operating": {
                "carrierCode": "BA"
              }
            }
          ]
        },
        {
          "duration": "PT19H5M",
          "segments": [
            {
              "aircraft": {
                "code": "346"
              },
              "arrival": {
                "at": "2020-08-06T05:40:00",
                "iataCode": "GRU",
                "terminal": "3"
              },
              "blacklistedInEU": false,
              "carrierCode": "IB",
              "departure": {
                "at": "2020-08-05T23:55:00",
                "iataCode": "MAD",
                "terminal": "4S"
              },
              "duration": "PT10H45M",
              "id": "3",
              "number": "6827",
              "numberOfStops": 0,
              "operating": {
                "carrierCode": "IB"
              }
            },
            {
              "aircraft": {
                "code": "321"
              },
              "arrival": {
                "at": "2020-08-06T14:00:00",
                "iataCode": "GIG",
                "terminal": "2"
              },
              "blacklistedInEU": false,
              "carrierCode": "LA",
              "departure": {
                "at": "2020-08-06T13:00:00",
                "iataCode": "GRU",
                "terminal": "2"
              },
              "duration": "PT1H",
              "id": "4",
              "number": "4537",
              "numberOfStops": 0
            }
          ]
        }
      ],
      "lastTicketingDate": "2020-01-16",
      "nonHomogeneous": false,
      "numberOfBookableSeats": 7,
      "oneWay": false,
      "price": {
        "base": "3661.00",
        "currency": "USD",
        "fees": [
          {
            "amount": "0.00",
            "type": "SUPPLIER"
          },
          {
            "amount": "0.00",
            "type": "TICKETING"
          }
        ],
        "grandTotal": "3842.10",
        "total": "3842.10"
      },
      "pricingOptions": {
        "fareType": [
          "PUBLISHED"
        ],
        "includedCheckedBagsOnly": false
      },
      "source": "GDS",
      "travelerPricings": [
        {
          "fareDetailsBySegment": [
            {
              "brandedFare": "BUSINESS",
              "cabin": "BUSINESS",
              "class": "R",
              "fareBasis": "RNNZ60S3",
              "includedCheckedBags": {
                "quantity": 2
              },
              "segmentId": "1"
            },
            {
              "brandedFare": "BUSINESS",
              "cabin": "BUSINESS",
              "class": "J",
              "fareBasis": "RNNZ60S3",
              "includedCheckedBags": {
                "quantity": 2
              },
              "segmentId": "2"
            },
            {
              "brandedFare": "BAGSEAT",
              "cabin": "ECONOMY",
              "class": "V",
              "fareBasis": "VDH0NNM3",
              "includedCheckedBags": {
                "quantity": 1
              },
              "segmentId": "3"
            },
            {
              "brandedFare": "BAGSEAT",
              "cabin": "ECONOMY",
              "class": "V",
              "fareBasis": "VDH0NNM3",
              "includedCheckedBags": {
                "quantity": 1
              },
              "segmentId": "4"
            }
          ],
          "fareOption": "STANDARD",
          "price": {
            "base": "2088.00",
            "currency": "USD",
            "total": "2178.55"
          },
          "travelerId": "1",
          "travelerType": "ADULT"
        },
        {
          "fareDetailsBySegment": [
            {
              "brandedFare": "BUSINESS",
              "cabin": "BUSINESS",
              "class": "R",
              "fareBasis": "RNNZ60S3",
              "segmentId": "1"
            },
            {
              "brandedFare": "BUSINESS",
              "cabin": "BUSINESS",
              "class": "J",
              "fareBasis": "RNNZ60S3",
              "segmentId": "2"
            },
            {
              "brandedFare": "BAGSEAT",
              "cabin": "ECONOMY",
              "class": "V",
              "fareBasis": "VDH0NNM3",
              "segmentId": "3"
            },
            {
              "brandedFare": "BAGSEAT",
              "cabin": "ECONOMY",
              "class": "V",
              "fareBasis": "VDH0NNM3",
              "segmentId": "4"
            }
          ],
          "fareOption": "STANDARD",
          "price": {
            "base": "1573.00",
            "currency": "USD",
            "total": "1663.55"
          },
          "travelerId": "2",
          "travelerType": "CHILD"
        }
      ],
      "type": "flight-offer",
      "validatingAirlineCodes": [
        "BA"
      ]
    }
  ],
  "dictionaries": {
    "aircraft": {
      "320": "AIRBUS INDUSTRIE A320-100/200",
      "321": "AIRBUS INDUSTRIE A321",
      "346": "AIRBUS INDUSTRIE A340-600",
      "788": "BOEING 787-8"
    },
    "carriers": {
      "BA": "BRITISH AIRWAYS",
      "IB": "IBERIA",
      "LA": "LATAM AIRLINES GROUP"
    },
    "currencies": {
      "USD": "US DOLLAR"
    },
    "locations": {
      "GIG": {
        "cityCode": "RIO",
        "countryCode": "BR"
      },
      "GRU": {
        "cityCode": "SAO",
        "countryCode": "BR"
      },
      "LHR": {
        "cityCode": "LON",
        "countryCode": "GB"
      },
      "MAD": {
        "cityCode": "MAD",
        "countryCode": "ES"
      }
    }
  },
  "meta": {
    "count": 2
  }
}
```

> 400 Response

```json
{
  "errors": [
    {
      "code": 477,
      "detail": "invalid query parameter format",
      "source": {
        "example": "CDG",
        "parameter": "airport"
      },
      "status": 400,
      "title": "INVALID FORMAT"
    }
  ]
}
```

> default Response

```json
{
  "errors": [
    {
      "code": 141,
      "status": 500,
      "title": "SYSTEM ERROR HAS OCCURRED"
    }
  ]
}
```

<h3 id="return-list-of-flight-offers-based-on-posted-searching-criteria-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Operation|Inline|
|400|Bad Request|code    \| title                                 <br>------- \| ------------------------------------- <br>425     \| INVALID DATE<br>477     \| INVALID FORMAT<br>2668    \| PARAMETER COMBINATION INVALID/RESTRICTED<br>4926    \| INVALID DATA RECEIVED<br>10661   \| MAXIMUM NUMBER OF OCCURRENCES EXCEEDED <br>32171   \| MANDATORY DATA MISSING<br>|[Error_400](#schemaerror_400)|
|default|Default|Unexpected error|[Error_500](#schemaerror_500)|

<h3 id="return-list-of-flight-offers-based-on-posted-searching-criteria-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[FlightOffer](#schemaflightoffer)]|true|none|none|
|dictionaries|[Dictionaries](#schemadictionaries)|false|none|none|
|meta|[Collection_Meta](#schemacollection_meta)|false|none|none|
|warnings|[[Issue](#schemaissue)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_AdditionalServiceType">AdditionalServiceType</h2>
<!-- backwards compatibility -->
<a id="schemaadditionalservicetype"></a>
<a id="schema_AdditionalServiceType"></a>
<a id="tocSadditionalservicetype"></a>
<a id="tocsadditionalservicetype"></a>

```json
"CHECKED_BAGS"
```

additional service type

<h2 id="tocS_AircraftEntry">AircraftEntry</h2>
<!-- backwards compatibility -->
<a id="schemaaircraftentry"></a>
<a id="schema_AircraftEntry"></a>
<a id="tocSaircraftentry"></a>
<a id="tocsaircraftentry"></a>

```json
{
  "key": "string",
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|false|none|none|
|**additionalProperties**|string|false|none|the manufacturer/model of aircraft|

<h2 id="tocS_AircraftEquipment">AircraftEquipment</h2>
<!-- backwards compatibility -->
<a id="schemaaircraftequipment"></a>
<a id="schema_AircraftEquipment"></a>
<a id="tocSaircraftequipment"></a>
<a id="tocsaircraftequipment"></a>

```json
{
  "code": "318"
}
```

information related to the aircraft

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|IATA aircraft code (http://www.flugzeuginfo.net/table_accodes_iata_en.php)<br>|

<h2 id="tocS_BaggageAllowance">BaggageAllowance</h2>
<!-- backwards compatibility -->
<a id="schemabaggageallowance"></a>
<a id="schema_BaggageAllowance"></a>
<a id="tocSbaggageallowance"></a>
<a id="tocsbaggageallowance"></a>

```json
{
  "quantity": 1,
  "weight": 20,
  "weightUnit": "KG"
}
```

baggageAllowance

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|quantity|integer|false|none|Total number of units|
|weight|integer|false|none|Weight of the baggage allowance|
|weightUnit|string|false|none|Code to qualify unit as pounds or kilos|

<h2 id="tocS_CarrierEntry">CarrierEntry</h2>
<!-- backwards compatibility -->
<a id="schemacarrierentry"></a>
<a id="schema_CarrierEntry"></a>
<a id="tocScarrierentry"></a>
<a id="tocscarrierentry"></a>

```json
{
  "key": "string",
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|false|none|none|
|**additionalProperties**|string|false|none|the carrier name|

<h2 id="tocS_Co2Emission">Co2Emission</h2>
<!-- backwards compatibility -->
<a id="schemaco2emission"></a>
<a id="schema_Co2Emission"></a>
<a id="tocSco2emission"></a>
<a id="tocsco2emission"></a>

```json
{
  "cabin": "PREMIUM_ECONOMY",
  "weight": 90,
  "weightUnit": "KG"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cabin|[TravelClass](#schematravelclass)|false|none|quality of service offered in the cabin where the seat is located in this flight. Economy, premium economy, business or first class|
|weight|integer|false|none|Weight of Co2 emitted for the concerned segment|
|weightUnit|string|false|none|Code to qualify unit as pounds or kilos|

#### Enumerated Values

|Property|Value|
|---|---|
|cabin|ECONOMY|
|cabin|PREMIUM_ECONOMY|
|cabin|BUSINESS|
|cabin|FIRST|

<h2 id="tocS_Collection_Meta">Collection_Meta</h2>
<!-- backwards compatibility -->
<a id="schemacollection_meta"></a>
<a id="schema_Collection_Meta"></a>
<a id="tocScollection_meta"></a>
<a id="tocscollection_meta"></a>

```json
{
  "count": 1,
  "oneWayCombinations": [
    {
      "flightOfferIds": [
        "string"
      ],
      "originDestinationId": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|false|none|none|
|oneWayCombinations|[object]|false|none|none|

<h2 id="tocS_Collection_Meta_Link">Collection_Meta_Link</h2>
<!-- backwards compatibility -->
<a id="schemacollection_meta_link"></a>
<a id="schema_Collection_Meta_Link"></a>
<a id="tocScollection_meta_link"></a>
<a id="tocscollection_meta_link"></a>

```json
{
  "count": 1,
  "links": {
    "self": "https://test.api.amadeus.com/v1/area/resources?param=value"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|false|none|none|
|links|object|false|none|none|

<h2 id="tocS_Coverage">Coverage</h2>
<!-- backwards compatibility -->
<a id="schemacoverage"></a>
<a id="schema_Coverage"></a>
<a id="tocScoverage"></a>
<a id="tocscoverage"></a>

```json
"MOST_SEGMENTS"
```

part of the trip covered by the travel class restriction (ALL_SEGMENTS if ommited)

<h2 id="tocS_CurrencyEntry">CurrencyEntry</h2>
<!-- backwards compatibility -->
<a id="schemacurrencyentry"></a>
<a id="schema_CurrencyEntry"></a>
<a id="tocScurrencyentry"></a>
<a id="tocscurrencyentry"></a>

```json
{
  "key": "Euro",
  "property1": "EUR",
  "property2": "EUR"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|none|
|**additionalProperties**|string|false|none|none|

<h2 id="tocS_DateTimeRange">DateTimeRange</h2>
<!-- backwards compatibility -->
<a id="schemadatetimerange"></a>
<a id="schema_DateTimeRange"></a>
<a id="tocSdatetimerange"></a>
<a id="tocsdatetimerange"></a>

```json
{
  "date": "2018-09-22",
  "dateWindow": "I3D",
  "time": "10:30:00",
  "timeWindow": "2H"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|date|string(date)|true|none|Dates are specified in the [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) YYYY-MM-DD format, e.g. 2018-12-25|
|dateWindow|string|false|none|Either 1, 2 or 3 extra days around the local date (IxD for +/- x days - Ex: I3D), Either 1 to 3 days after the local date (PxD for +x days - Ex: P3D), or 1 to 3 days before the local date (MxD for -x days - Ex: M3D)<br><br>Can not be combined with "originRadius" or "destinationRadius".<br>|
|time|string|false|none|Local time. hh:mm:ss format, e.g 10:30:00|
|timeWindow|string|false|none|1 to 12 hours around (both +and -) the local time. Possibly limited by the number of extra days when specified, i.e.  in some situations, it may not be used to exceed the maximum date range. [1-12]H format, e.g. 6H<br><br>Can not be combined with "originRadius" or "destinationRadius".<br>|

<h2 id="tocS_Dictionaries">Dictionaries</h2>
<!-- backwards compatibility -->
<a id="schemadictionaries"></a>
<a id="schema_Dictionaries"></a>
<a id="tocSdictionaries"></a>
<a id="tocsdictionaries"></a>

```json
{
  "aircraft": {
    "key": "string",
    "property1": "string",
    "property2": "string"
  },
  "carriers": {
    "key": "string",
    "property1": "string",
    "property2": "string"
  },
  "currencies": {
    "key": "Euro",
    "property1": "EUR",
    "property2": "EUR"
  },
  "locations": {
    "key": "string",
    "property1": {
      "cityCode": "PAR",
      "countryCode": "FR"
    },
    "property2": {
      "cityCode": "PAR",
      "countryCode": "FR"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|aircraft|[AircraftEntry](#schemaaircraftentry)|false|none|none|
|carriers|[CarrierEntry](#schemacarrierentry)|false|none|none|
|currencies|[CurrencyEntry](#schemacurrencyentry)|false|none|none|
|locations|[LocationEntry](#schemalocationentry)|false|none|none|

<h2 id="tocS_Error_400">Error_400</h2>
<!-- backwards compatibility -->
<a id="schemaerror_400"></a>
<a id="schema_Error_400"></a>
<a id="tocSerror_400"></a>
<a id="tocserror_400"></a>

```json
{
  "errors": [
    {
      "code": 477,
      "detail": "invalid query parameter format",
      "source": {
        "example": "CDG",
        "parameter": "airport"
      },
      "status": 400,
      "title": "INVALID FORMAT"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Issue](#schemaissue)]|true|none|none|

<h2 id="tocS_Error_500">Error_500</h2>
<!-- backwards compatibility -->
<a id="schemaerror_500"></a>
<a id="schema_Error_500"></a>
<a id="tocSerror_500"></a>
<a id="tocserror_500"></a>

```json
{
  "errors": [
    {
      "code": 141,
      "status": 500,
      "title": "SYSTEM ERROR HAS OCCURRED"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Issue](#schemaissue)]|true|none|none|

<h2 id="tocS_ExtendedPricingOptions">ExtendedPricingOptions</h2>
<!-- backwards compatibility -->
<a id="schemaextendedpricingoptions"></a>
<a id="schema_ExtendedPricingOptions"></a>
<a id="tocSextendedpricingoptions"></a>
<a id="tocsextendedpricingoptions"></a>

```json
{
  "includedCheckedBagsOnly": true
}
```

fare filter options

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|includedCheckedBagsOnly|boolean|false|none|If true, returns the flight-offers with included checked bags only|

<h2 id="tocS_Extended_Price">Extended_Price</h2>
<!-- backwards compatibility -->
<a id="schemaextended_price"></a>
<a id="schema_Extended_Price"></a>
<a id="tocSextended_price"></a>
<a id="tocsextended_price"></a>

```json
{
  "additionalServices": [
    {
      "amount": "332.70",
      "type": "CHECKED_BAGS"
    }
  ],
  "billingCurrency": "EUR",
  "grandTotal": "987.00",
  "margin": "1.00",
  "base": "632.70",
  "currency": "USD",
  "fees": [
    {
      "amount": "332.70",
      "type": "TICKETING"
    }
  ],
  "refundableTaxes": "200.00",
  "taxes": [
    {
      "amount": "332.70",
      "code": "MX"
    }
  ],
  "total": "932.70"
}
```

price information

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalServices|[object]|false|none|none|
|billingCurrency|string|false|none|Currency of the payment. It may be different than the requested currency|
|grandTotal|string|false|none|Total amount paid by the user (including fees and selected additional services).|
|margin|string|false|none|BOOK step ONLY - The price margin percentage (plus or minus) that the booking can tolerate. When set to 0, then no price magin is tolerated.|
|base|string|false|none|Amount without taxes|
|currency|string|false|none|none|
|fees|[[Fee](#schemafee)]|false|none|List of applicable fees|
|refundableTaxes|string|false|none|The amount of taxes which are refundable|
|taxes|[[Tax](#schematax)]|false|none|none|
|total|string|false|none|Total amount paid by the user|

<h2 id="tocS_Fee">Fee</h2>
<!-- backwards compatibility -->
<a id="schemafee"></a>
<a id="schema_Fee"></a>
<a id="tocSfee"></a>
<a id="tocsfee"></a>

```json
{
  "amount": "332.70",
  "type": "TICKETING"
}
```

a fee

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|string|false|none|none|
|type|[FeeType](#schemafeetype)|false|none|type of fee|

#### Enumerated Values

|Property|Value|
|---|---|
|type|TICKETING|
|type|FORM_OF_PAYMENT|
|type|SUPPLIER|

<h2 id="tocS_FeeType">FeeType</h2>
<!-- backwards compatibility -->
<a id="schemafeetype"></a>
<a id="schema_FeeType"></a>
<a id="tocSfeetype"></a>
<a id="tocsfeetype"></a>

```json
"TICKETING"
```

type of fee

<h2 id="tocS_FlightEndPoint">FlightEndPoint</h2>
<!-- backwards compatibility -->
<a id="schemaflightendpoint"></a>
<a id="schema_FlightEndPoint"></a>
<a id="tocSflightendpoint"></a>
<a id="tocsflightendpoint"></a>

```json
{
  "iataCode": "JFK",
  "terminal": "T2",
  "at": "2017-10-23T20:00:00"
}
```

departure or arrival information

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|iataCode|string|false|none|[IATA airline codes](http://www.iata.org/publications/Pages/code-search.aspx)|
|terminal|string|false|none|terminal name / number|
|at|string(date-time)|false|none|local date and time in [ISO8601](https://en.wikipedia.org/wiki/ISO_8601) YYYY-MM-ddThh:mm:ss format, e.g. 2017-02-10T20:40:00|

<h2 id="tocS_FlightOffer">FlightOffer</h2>
<!-- backwards compatibility -->
<a id="schemaflightoffer"></a>
<a id="schema_FlightOffer"></a>
<a id="tocSflightoffer"></a>
<a id="tocsflightoffer"></a>

```json
{
  "disablePricing": false,
  "id": "1",
  "instantTicketingRequired": false,
  "itineraries": [
    {
      "duration": "PT2H10M",
      "segments": [
        {
          "blacklistedInEU": false,
          "co2Emissions": [
            {
              "cabin": "PREMIUM_ECONOMY",
              "weight": 90,
              "weightUnit": "KG"
            }
          ],
          "id": 1,
          "numberOfStops": 0,
          "aircraft": {
            "code": "318"
          },
          "arrival": {
            "iataCode": "JFK",
            "terminal": "T2",
            "at": "2017-10-23T20:00:00"
          },
          "carrierCode": "DL",
          "departure": {
            "iataCode": "JFK",
            "terminal": "T2",
            "at": "2017-10-23T20:00:00"
          },
          "duration": "PT2H10M",
          "number": "212",
          "operating": {
            "carrierCode": "DL"
          },
          "stops": [
            {
              "duration": "PT2H10M",
              "iataCode": "JFK",
              "arrivalAt": "2017-10-23T20:00:00",
              "departureAt": "2017-10-23T20:00:00"
            }
          ]
        }
      ]
    }
  ],
  "lastTicketingDate": "2018-06-19T00:00:00.000Z",
  "nonHomogeneous": false,
  "numberOfBookableSeats": 9,
  "oneWay": false,
  "paymentCardRequired": false,
  "price": {
    "additionalServices": [
      {
        "amount": "332.70",
        "type": "CHECKED_BAGS"
      }
    ],
    "billingCurrency": "EUR",
    "grandTotal": "987.00",
    "margin": "1.00",
    "base": "632.70",
    "currency": "USD",
    "fees": [
      {
        "amount": "332.70",
        "type": "TICKETING"
      }
    ],
    "refundableTaxes": "200.00",
    "taxes": [
      {
        "amount": "332.70",
        "code": "MX"
      }
    ],
    "total": "932.70"
  },
  "pricingOptions": {
    "fareType": [
      "PUBLISHED"
    ],
    "includedCheckedBagsOnly": true,
    "noPenaltyFare": true,
    "noRestrictionFare": true,
    "refundableFare": true
  },
  "source": "GDS",
  "travelerPricings": [
    {
      "associatedAdultId": "string",
      "fareDetailsBySegment": [
        {
          "additionalServices": {
            "chargeableCheckedBags": {
              "quantity": 1,
              "weight": 20,
              "weightUnit": "KG"
            },
            "chargeableSeatNumber": "33D",
            "otherServices": [
              "PRIORITY_BOARDING"
            ]
          },
          "allotmentDetails": {
            "tourName": "string",
            "tourReference": "string"
          },
          "brandedFare": "LIGHTONE",
          "cabin": "PREMIUM_ECONOMY",
          "class": "A",
          "fareBasis": "ANNNNF4K",
          "includedCheckedBags": {
            "quantity": 1,
            "weight": 20,
            "weightUnit": "KG"
          },
          "isAllotment": true,
          "segmentId": "1",
          "sliceDiceIndicator": "LOCAL_AVAILABILITY"
        }
      ],
      "fareOption": "STANDARD",
      "price": {
        "base": "632.70",
        "currency": "USD",
        "fees": [
          {
            "amount": "332.70",
            "type": "TICKETING"
          }
        ],
        "refundableTaxes": "200.00",
        "taxes": [
          {
            "amount": "332.70",
            "code": "MX"
          }
        ],
        "total": "932.70"
      },
      "travelerId": "1",
      "travelerType": "ADULT"
    }
  ],
  "type": "flight-offer",
  "validatingAirlineCodes": [
    "AF"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|disablePricing|boolean|false|none|BOOK step ONLY - If true, allows to book a PNR without pricing. Only for the source "GDS"|
|id|string|true|none|Id of the flight offer|
|instantTicketingRequired|boolean|false|none|If true, inform that a ticketing will be required at booking step.|
|itineraries|[object]|false|none|none|
|lastTicketingDate|string|false|none|If booked on the same day as the search (with respect to timezone), this flight offer is guaranteed to be thereafter valid for ticketing until this date (included). Unspecified when it does not make sense for this flight offer (e.g. no control over ticketing once booked). YYYY-MM-DD format, e.g. 2019-06-07|
|nonHomogeneous|boolean|false|none|If true, upon completion of the booking, this pricing solution is expected to yield multiple records (a record contains booking information confirmed and stored, typically a Passenger Name Record (PNR), in the provider GDS or system)|
|numberOfBookableSeats|number|false|none|Number of seats bookable in a single request. Can not be higher than 9.|
|oneWay|boolean|false|none|If true, the flight offer fulfills only one originDestination and has to be combined with other oneWays to complete the whole journey.|
|paymentCardRequired|boolean|false|none|If true, a payment card is mandatory to book this flight offer|
|price|[Extended_Price](#schemaextended_price)|false|none|price information|
|pricingOptions|object|false|none|none|
|source|[FlightOfferSource](#schemaflightoffersource)|false|none|source of the flight offer|
|travelerPricings|[object]|false|none|Fare information for each traveler/segment|
|type|string|true|none|the resource name|
|validatingAirlineCodes|[string]|false|none|This option ensures that the system will only consider these airlines.|

#### Enumerated Values

|Property|Value|
|---|---|
|source|GDS|

<h2 id="tocS_FlightOfferSource">FlightOfferSource</h2>
<!-- backwards compatibility -->
<a id="schemaflightoffersource"></a>
<a id="schema_FlightOfferSource"></a>
<a id="tocSflightoffersource"></a>
<a id="tocsflightoffersource"></a>

```json
"GDS"
```

source of the flight offer

<h2 id="tocS_FlightSegment">FlightSegment</h2>
<!-- backwards compatibility -->
<a id="schemaflightsegment"></a>
<a id="schema_FlightSegment"></a>
<a id="tocSflightsegment"></a>
<a id="tocsflightsegment"></a>

```json
{
  "aircraft": {
    "code": "318"
  },
  "arrival": {
    "iataCode": "JFK",
    "terminal": "T2",
    "at": "2017-10-23T20:00:00"
  },
  "carrierCode": "DL",
  "departure": {
    "iataCode": "JFK",
    "terminal": "T2",
    "at": "2017-10-23T20:00:00"
  },
  "duration": "PT2H10M",
  "number": "212",
  "operating": {
    "carrierCode": "DL"
  },
  "stops": [
    {
      "duration": "PT2H10M",
      "iataCode": "JFK",
      "arrivalAt": "2017-10-23T20:00:00",
      "departureAt": "2017-10-23T20:00:00"
    }
  ]
}
```

defining a flight segment; including both operating and marketing details when applicable

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|aircraft|[AircraftEquipment](#schemaaircraftequipment)|false|none|information related to the aircraft|
|arrival|[FlightEndPoint](#schemaflightendpoint)|false|none|departure or arrival information|
|carrierCode|string|false|none|providing the airline / carrier code|
|departure|[FlightEndPoint](#schemaflightendpoint)|false|none|departure or arrival information|
|duration|string|false|none|stop duration in [ISO8601](https://en.wikipedia.org/wiki/ISO_8601) PnYnMnDTnHnMnS format, e.g. PT2H10M|
|number|string|false|none|the flight number as assigned by the carrier|
|operating|[OperatingFlight](#schemaoperatingflight)|false|none|information about the operating flight|
|stops|[[FlightStop](#schemaflightstop)]|false|none|information regarding the different stops composing the flight segment. E.g. technical stop, change of gauge...|

<h2 id="tocS_FlightStop">FlightStop</h2>
<!-- backwards compatibility -->
<a id="schemaflightstop"></a>
<a id="schema_FlightStop"></a>
<a id="tocSflightstop"></a>
<a id="tocsflightstop"></a>

```json
{
  "duration": "PT2H10M",
  "iataCode": "JFK",
  "arrivalAt": "2017-10-23T20:00:00",
  "departureAt": "2017-10-23T20:00:00"
}
```

details of stops for direct or change of gauge flights

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|duration|string|false|none|stop duration in [ISO8601](https://en.wikipedia.org/wiki/ISO_8601) PnYnMnDTnHnMnS format, e.g. PT2H10M|
|iataCode|string|false|none|[IATA airline codes](http://www.iata.org/publications/Pages/code-search.aspx)|
|arrivalAt|string(date-time)|false|none|arrival at the stop in [ISO8601](https://en.wikipedia.org/wiki/ISO_8601) YYYY-MM-ddThh:mm:ss format, e.g. 2017-02-10T20:40:00|
|departureAt|string(date-time)|false|none|departure from the stop in [ISO8601](https://en.wikipedia.org/wiki/ISO_8601) YYYY-MM-ddThh:mm:ss format, e.g. 2017-02-10T20:40:00|

<h2 id="tocS_GetFlightOffersQuery">GetFlightOffersQuery</h2>
<!-- backwards compatibility -->
<a id="schemagetflightoffersquery"></a>
<a id="schema_GetFlightOffersQuery"></a>
<a id="tocSgetflightoffersquery"></a>
<a id="tocsgetflightoffersquery"></a>

```json
{
  "currencyCode": "USD",
  "originDestinations": [
    {
      "departureDateTimeRange": {
        "date": "2020-08-01",
        "time": "10:00:00"
      },
      "destinationLocationCode": "MAD",
      "id": "1",
      "originLocationCode": "RIO"
    },
    {
      "departureDateTimeRange": {
        "date": "2020-08-05",
        "time": "17:00:00"
      },
      "destinationLocationCode": "RIO",
      "id": "2",
      "originLocationCode": "MAD"
    }
  ],
  "searchCriteria": {
    "flightFilters": {
      "cabinRestrictions": [
        {
          "cabin": "BUSINESS",
          "coverage": "MOST_SEGMENTS",
          "originDestinationIds": [
            "1"
          ]
        }
      ],
      "carrierRestrictions": {
        "excludedCarrierCodes": [
          "AA",
          "TP",
          "AZ"
        ]
      }
    },
    "maxFlightOffers": 2
  },
  "sources": [
    "GDS"
  ],
  "travelers": [
    {
      "id": "1",
      "travelerType": "ADULT"
    },
    {
      "id": "2",
      "travelerType": "CHILD"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currencyCode|string|false|none|The currency code, as defined in [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217), to reflect the currency in which this amount is expressed.|
|originDestinations|[[OriginDestination](#schemaorigindestination)]|true|none|Origins and Destinations must be properly ordered in time (chronological order in accordance with the timezone of each location) to describe the journey consistently. Dates and times must not be past nor more than 365 days in the future, according to provider settings.Number of Origins and Destinations must not exceed the limit defined in provider settings.|
|searchCriteria|[SearchCriteria](#schemasearchcriteria)|false|none|none|
|sources|[[FlightOfferSource](#schemaflightoffersource)]|true|none|Allows enable one or more sources. If present in the list, these sources will be called by the system.|
|travelers|[[Traveler](#schematraveler)]|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|sources|GDS|

<h2 id="tocS_Issue">Issue</h2>
<!-- backwards compatibility -->
<a id="schemaissue"></a>
<a id="schema_Issue"></a>
<a id="tocSissue"></a>
<a id="tocsissue"></a>

```json
{
  "code": 0,
  "detail": "string",
  "source": {
    "example": "string",
    "parameter": "string",
    "pointer": "string"
  },
  "status": 0,
  "title": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int64)|false|none|an application-specific error code|
|detail|string|false|none|explanation of the error|
|source|object|false|none|an object containing references to the source of the error|
|status|integer|false|none|the HTTP status code applicable to this error|
|title|string|false|none|a short summary of the error|

<h2 id="tocS_LocationEntry">LocationEntry</h2>
<!-- backwards compatibility -->
<a id="schemalocationentry"></a>
<a id="schema_LocationEntry"></a>
<a id="tocSlocationentry"></a>
<a id="tocslocationentry"></a>

```json
{
  "key": "string",
  "property1": {
    "cityCode": "PAR",
    "countryCode": "FR"
  },
  "property2": {
    "cityCode": "PAR",
    "countryCode": "FR"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|none|
|**additionalProperties**|[LocationValue](#schemalocationvalue)|false|none|none|

<h2 id="tocS_LocationValue">LocationValue</h2>
<!-- backwards compatibility -->
<a id="schemalocationvalue"></a>
<a id="schema_LocationValue"></a>
<a id="tocSlocationvalue"></a>
<a id="tocslocationvalue"></a>

```json
{
  "cityCode": "PAR",
  "countryCode": "FR"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cityCode|string|false|none|City code associated to the airport|
|countryCode|string|false|none|Country code of the airport|

<h2 id="tocS_OperatingFlight">OperatingFlight</h2>
<!-- backwards compatibility -->
<a id="schemaoperatingflight"></a>
<a id="schema_OperatingFlight"></a>
<a id="tocSoperatingflight"></a>
<a id="tocsoperatingflight"></a>

```json
{
  "carrierCode": "DL"
}
```

information about the operating flight

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|carrierCode|string|false|none|providing the airline / carrier code|

<h2 id="tocS_OriginDestination">OriginDestination</h2>
<!-- backwards compatibility -->
<a id="schemaorigindestination"></a>
<a id="schema_OriginDestination"></a>
<a id="tocSorigindestination"></a>
<a id="tocsorigindestination"></a>

```json
{
  "alternativeDestinationsCodes": [
    "string"
  ],
  "alternativeOriginsCodes": [
    "LON",
    "MUC"
  ],
  "arrivalDateTimeRange": {
    "date": "2018-09-22",
    "dateWindow": "I3D",
    "time": "10:30:00",
    "timeWindow": "2H"
  },
  "departureDateTimeRange": {
    "date": "2018-09-22",
    "dateWindow": "I3D",
    "time": "10:30:00",
    "timeWindow": "2H"
  },
  "destinationLocationCode": "NYC",
  "destinationRadius": 200,
  "excludedConnectionPoints": [
    "MRS"
  ],
  "id": 1,
  "includedConnectionPoints": [
    "MRS"
  ],
  "originLocationCode": "PAR",
  "originRadius": 200
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alternativeDestinationsCodes|[string]|false|none|Set of alternative destination location, such as a city or an airport. Currently, only the locations defined in [IATA](http://www.iata.org/publications/Pages/code-search.aspx) are supported.|
|alternativeOriginsCodes|[string]|false|none|Set of alternative origin location, such as a city or an airport. Currently, only the locations defined in [IATA](http://www.iata.org/publications/Pages/code-search.aspx) are supported.|
|arrivalDateTimeRange|[DateTimeRange](#schemadatetimerange)|false|none|none|
|departureDateTimeRange|[DateTimeRange](#schemadatetimerange)|false|none|none|
|destinationLocationCode|string|false|none|Destination location, such as a city or an airport. Currently, only the locations defined in [IATA](http://www.iata.org/publications/Pages/code-search.aspx) are supported.|
|destinationRadius|number|false|none|Include other possible locations around the point, located less than this distance in kilometers away. Max:300<br><br>Can not be combined with "dateWindow" or "timeWindow".<br>|
|excludedConnectionPoints|[string]|false|none|List of excluded connections points. Any FlightOffer with these connections points will be present in response. Currently, only the locations defined in IATA are supported. Used only by the AMADEUS provider|
|id|string|false|none|none|
|includedConnectionPoints|[string]|false|none|List of included connections points. When an includedViaPoints option is specified, all FlightOffer returned must at least go via this Connecting Point. Currently, only the locations defined in IATA are supported. Used only by the AMADEUS provider|
|originLocationCode|string|false|none|Origin location, such as a city or an airport. Currently, only the locations defined in [IATA](http://www.iata.org/publications/Pages/code-search.aspx) are supported.|
|originRadius|number|false|none|Include other possible locations around the point, located less than this distance in kilometers away. Max:300<br><br>Can not be combined with "dateWindow" or "timeWindow".<br>|

<h2 id="tocS_OriginalFlightEndPoint">OriginalFlightEndPoint</h2>
<!-- backwards compatibility -->
<a id="schemaoriginalflightendpoint"></a>
<a id="schema_OriginalFlightEndPoint"></a>
<a id="tocSoriginalflightendpoint"></a>
<a id="tocsoriginalflightendpoint"></a>

```json
{
  "iataCode": "JFK",
  "terminal": "T2"
}
```

departure or arrival information

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|iataCode|string|false|none|[IATA airline codes](http://www.iata.org/publications/Pages/code-search.aspx)|
|terminal|string|false|none|terminal name / number|

<h2 id="tocS_OriginalFlightStop">OriginalFlightStop</h2>
<!-- backwards compatibility -->
<a id="schemaoriginalflightstop"></a>
<a id="schema_OriginalFlightStop"></a>
<a id="tocSoriginalflightstop"></a>
<a id="tocsoriginalflightstop"></a>

```json
{
  "duration": "PT2H10M",
  "iataCode": "JFK"
}
```

details of stops for direct or change of gauge flights

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|duration|string|false|none|stop duration in [ISO8601](https://en.wikipedia.org/wiki/ISO_8601) PnYnMnDTnHnMnS format, e.g. PT2H10M|
|iataCode|string|false|none|[IATA airline codes](http://www.iata.org/publications/Pages/code-search.aspx)|

<h2 id="tocS_Price">Price</h2>
<!-- backwards compatibility -->
<a id="schemaprice"></a>
<a id="schema_Price"></a>
<a id="tocSprice"></a>
<a id="tocsprice"></a>

```json
{
  "base": "632.70",
  "currency": "USD",
  "fees": [
    {
      "amount": "332.70",
      "type": "TICKETING"
    }
  ],
  "refundableTaxes": "200.00",
  "taxes": [
    {
      "amount": "332.70",
      "code": "MX"
    }
  ],
  "total": "932.70"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|base|string|false|none|Amount without taxes|
|currency|string|false|none|none|
|fees|[[Fee](#schemafee)]|false|none|List of applicable fees|
|refundableTaxes|string|false|none|The amount of taxes which are refundable|
|taxes|[[Tax](#schematax)]|false|none|none|
|total|string|false|none|Total amount paid by the user|

<h2 id="tocS_PricingOptionsFareType">PricingOptionsFareType</h2>
<!-- backwards compatibility -->
<a id="schemapricingoptionsfaretype"></a>
<a id="schema_PricingOptionsFareType"></a>
<a id="tocSpricingoptionsfaretype"></a>
<a id="tocspricingoptionsfaretype"></a>

```json
[
  "PUBLISHED"
]
```

type of fare of the flight-offer

<h2 id="tocS_SearchCriteria">SearchCriteria</h2>
<!-- backwards compatibility -->
<a id="schemasearchcriteria"></a>
<a id="schema_SearchCriteria"></a>
<a id="tocSsearchcriteria"></a>
<a id="tocssearchcriteria"></a>

```json
{
  "addOneWayOffers": true,
  "additionalInformation": {
    "brandedFares": true,
    "chargeableCheckedBags": true
  },
  "allowAlternativeFareOptions": true,
  "excludeAllotments": false,
  "flightFilters": {
    "busSegmentAllowed": true,
    "cabinRestrictions": [
      {
        "cabin": "PREMIUM_ECONOMY",
        "coverage": "MOST_SEGMENTS",
        "originDestinationIds": [
          1,
          2
        ]
      }
    ],
    "carrierRestrictions": {
      "blacklistedInEUAllowed": true,
      "excludedCarrierCodes": [
        "string"
      ],
      "includedCarrierCodes": [
        "string"
      ]
    },
    "connectionRestriction": {
      "airportChangeAllowed": false,
      "maxNumberOfConnections": 2,
      "technicalStopsAllowed": true
    },
    "crossBorderAllowed": false,
    "maxFlightTime": 200,
    "moreOvernightsAllowed": false,
    "railSegmentAllowed": true,
    "returnToDepartureAirport": false
  },
  "maxFlightOffers": 250,
  "maxPrice": 100,
  "oneFlightOfferPerDay": true,
  "pricingOptions": {
    "includedCheckedBagsOnly": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addOneWayOffers|boolean|false|none|This option allows activate the one-way combinable feature|
|additionalInformation|object|false|none|none|
|allowAlternativeFareOptions|boolean|false|none|This option allows to default to a standard fareOption if no offers are found for the selected fareOption.|
|excludeAllotments|boolean|false|none|This option allows to exclude the isAllotment flag associated to a booking class in the search response when it exist.|
|flightFilters|object|false|none|none|
|maxFlightOffers|number|false|none|Maximum number of flight offers returned (Max 250)|
|maxPrice|integer|false|none|maximum price per traveler. By default, no limit is applied. If specified, the value should be a positive number with no decimals|
|oneFlightOfferPerDay|boolean|false|none|Requests the system to find at least one flight-offer per day, if possible, when a range of dates is specified. Default is false.|
|pricingOptions|[ExtendedPricingOptions](#schemaextendedpricingoptions)|false|none|fare filter options|

<h2 id="tocS_Segment">Segment</h2>
<!-- backwards compatibility -->
<a id="schemasegment"></a>
<a id="schema_Segment"></a>
<a id="tocSsegment"></a>
<a id="tocssegment"></a>

```json
{
  "blacklistedInEU": false,
  "co2Emissions": [
    {
      "cabin": "PREMIUM_ECONOMY",
      "weight": 90,
      "weightUnit": "KG"
    }
  ],
  "id": 1,
  "numberOfStops": 0,
  "aircraft": {
    "code": "318"
  },
  "arrival": {
    "iataCode": "JFK",
    "terminal": "T2",
    "at": "2017-10-23T20:00:00"
  },
  "carrierCode": "DL",
  "departure": {
    "iataCode": "JFK",
    "terminal": "T2",
    "at": "2017-10-23T20:00:00"
  },
  "duration": "PT2H10M",
  "number": "212",
  "operating": {
    "carrierCode": "DL"
  },
  "stops": [
    {
      "duration": "PT2H10M",
      "iataCode": "JFK",
      "arrivalAt": "2017-10-23T20:00:00",
      "departureAt": "2017-10-23T20:00:00"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|blacklistedInEU|boolean|false|none|When the flight has a marketing or/and operating airline that is identified as blacklisted by the European Commission. <br><br>To improve travel safety, the European Commission regularly updates the list of the banned carriers from operating in Europe. It allows any Travel Agency located in the European Union to easily identify and hide any travel recommendation based on some unsafe airlines. <br>The [list of the banned airlines](https://ec.europa.eu/transport/sites/transport/files/air-safety-list_en.pdf) is published in the Official Journal of the European Union, where they are included as annexes A and B to the Commission Regulation. The blacklist of an airline can concern all its flights or some specific aircraft types pertaining to the airline   <br>|
|co2Emissions|[[Co2Emission](#schemaco2emission)]|false|none|Co2 informations|
|id|string|false|none|Id of the segment|
|numberOfStops|integer|false|none|Number of stops|
|aircraft|[AircraftEquipment](#schemaaircraftequipment)|false|none|information related to the aircraft|
|arrival|[FlightEndPoint](#schemaflightendpoint)|false|none|departure or arrival information|
|carrierCode|string|false|none|providing the airline / carrier code|
|departure|[FlightEndPoint](#schemaflightendpoint)|false|none|departure or arrival information|
|duration|string|false|none|stop duration in [ISO8601](https://en.wikipedia.org/wiki/ISO_8601) PnYnMnDTnHnMnS format, e.g. PT2H10M|
|number|string|false|none|the flight number as assigned by the carrier|
|operating|[OperatingFlight](#schemaoperatingflight)|false|none|information about the operating flight|
|stops|[[FlightStop](#schemaflightstop)]|false|none|information regarding the different stops composing the flight segment. E.g. technical stop, change of gauge...|

<h2 id="tocS_ServiceName">ServiceName</h2>
<!-- backwards compatibility -->
<a id="schemaservicename"></a>
<a id="schema_ServiceName"></a>
<a id="tocSservicename"></a>
<a id="tocsservicename"></a>

```json
"PRIORITY_BOARDING"
```

type of service

<h2 id="tocS_SliceDiceIndicator">SliceDiceIndicator</h2>
<!-- backwards compatibility -->
<a id="schemaslicediceindicator"></a>
<a id="schema_SliceDiceIndicator"></a>
<a id="tocSslicediceindicator"></a>
<a id="tocsslicediceindicator"></a>

```json
"LOCAL_AVAILABILITY"
```

slice and Dice indicator, such as Local Availability, Sub OnD(Origin and Destination) 1 Availability and Sub OnD 2 Availability

<h2 id="tocS_Tax">Tax</h2>
<!-- backwards compatibility -->
<a id="schematax"></a>
<a id="schema_Tax"></a>
<a id="tocStax"></a>
<a id="tocstax"></a>

```json
{
  "amount": "332.70",
  "code": "MX"
}
```

a tax

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|string|false|none|none|
|code|string|false|none|none|

<h2 id="tocS_TravelClass">TravelClass</h2>
<!-- backwards compatibility -->
<a id="schematravelclass"></a>
<a id="schema_TravelClass"></a>
<a id="tocStravelclass"></a>
<a id="tocstravelclass"></a>

```json
"PREMIUM_ECONOMY"
```

quality of service offered in the cabin where the seat is located in this flight. Economy, premium economy, business or first class

<h2 id="tocS_Traveler">Traveler</h2>
<!-- backwards compatibility -->
<a id="schematraveler"></a>
<a id="schema_Traveler"></a>
<a id="tocStraveler"></a>
<a id="tocstraveler"></a>

```json
{
  "associatedAdultId": "string",
  "id": 1,
  "travelerType": "ADULT"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|associatedAdultId|string|false|none|if type="HELD_INFANT", corresponds to the adult travelers's id who will share the seat|
|id|string|true|none|none|
|travelerType|[TravelerType](#schematravelertype)|true|none|traveler type<br>age restrictions : CHILD < 12y, HELD_INFANT < 2y, SEATED_INFANT < 2y, SENIOR >=60y<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|travelerType|ADULT|
|travelerType|CHILD|
|travelerType|SENIOR|
|travelerType|YOUNG|
|travelerType|HELD_INFANT|
|travelerType|SEATED_INFANT|
|travelerType|STUDENT|

<h2 id="tocS_TravelerPricingFareOption">TravelerPricingFareOption</h2>
<!-- backwards compatibility -->
<a id="schematravelerpricingfareoption"></a>
<a id="schema_TravelerPricingFareOption"></a>
<a id="tocStravelerpricingfareoption"></a>
<a id="tocstravelerpricingfareoption"></a>

```json
"STANDARD"
```

option specifying a group of fares, which may be valid under certain conditons
Can be used to specify special fare discount for a passenger

<h2 id="tocS_TravelerType">TravelerType</h2>
<!-- backwards compatibility -->
<a id="schematravelertype"></a>
<a id="schema_TravelerType"></a>
<a id="tocStravelertype"></a>
<a id="tocstravelertype"></a>

```json
"ADULT"
```

traveler type
age restrictions : CHILD < 12y, HELD_INFANT < 2y, SEATED_INFANT < 2y, SENIOR >=60y
