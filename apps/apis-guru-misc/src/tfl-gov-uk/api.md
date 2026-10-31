<h1 id="transport-for-london-unified-api">Transport for London Unified API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Our unified API brings together data across all modes of transport into a single RESTful API. This API provides access to the most highly requested realtime and status infomation across all the modes of transport, in a single and consistent way. Access to the developer documentation is available at https://api.tfl.gov.uk

Base URLs:

* <a href="https://api.digital.tfl.gov.uk">https://api.digital.tfl.gov.uk</a>

# Authentication

* API Key (apiKey)
    - Parameter Name: **app_key**, in: query. API Key Authentication

* API Key (appId)
    - Parameter Name: **app_id**, in: query. Application ID

<h1 id="transport-for-london-unified-api-accidentstats">AccidentStats</h1>

## Gets all accident details for accidents occuring in the specified year

<a id="opIdAccidentStats_Get"></a>

> Code samples

```bash
curl https://example.com/AccidentStats/0 \
  -H 'Accept: application/json'
```

`GET /AccidentStats/{year}`

<h3 id="gets-all-accident-details-for-accidents-occuring-in-the-specified-year-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|year|path|integer(int32)|true|The year for which to filter the accidents on.|

> Example responses

> 200 Response

```json
[
  {
    "borough": "string",
    "casualties": [
      {
        "age": 0,
        "ageBand": "string",
        "class": "string",
        "mode": "string",
        "severity": "string"
      }
    ],
    "date": "1970-01-01T00:00:00Z",
    "id": 0,
    "lat": 0,
    "location": "string",
    "lon": 0,
    "severity": "string",
    "vehicles": [
      {
        "type": "string"
      }
    ]
  }
]
```

<h3 id="gets-all-accident-details-for-accidents-occuring-in-the-specified-year-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="gets-all-accident-details-for-accidents-occuring-in-the-specified-year-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Tfl.Api.Presentation.Entities.AccidentStats.AccidentDetail](#schematfl.api.presentation.entities.accidentstats.accidentdetail)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="transport-for-london-unified-api-airquality">AirQuality</h1>

## Gets air quality data feed

<a id="opIdAirQuality_Get"></a>

> Code samples

```bash
curl https://example.com/AirQuality \
  -H 'Accept: application/json'
```

`GET /AirQuality`

> Example responses

> 200 Response

```json
{}
```

<h3 id="gets-air-quality-data-feed-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[System.Object](#schemasystem.object)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="transport-for-london-unified-api-bikepoint">BikePoint</h1>

## Gets all bike point locations. The Place object has an addtionalProperties array which contains the nbBikes, nbDocks and nbSpaces numbers which give the status of the BikePoint. A mismatch in these numbers i.e. nbDocks - (nbBikes + nbSpaces) != 0 indicates broken docks.

<a id="opIdBikePoint_GetAll"></a>

> Code samples

```bash
curl https://example.com/BikePoint \
  -H 'Accept: application/json'
```

`GET /BikePoint`

> Example responses

> 200 Response

```json
[
  {
    "additionalProperties": [
      {
        "category": "string",
        "key": "string",
        "modified": "1970-01-01T00:00:00Z",
        "sourceSystemKey": "string",
        "value": "string"
      }
    ],
    "children": [
      {}
    ],
    "childrenUrls": [
      "string"
    ],
    "commonName": "string",
    "distance": 0,
    "id": "string",
    "lat": 0,
    "lon": 0,
    "placeType": "string",
    "url": "string"
  }
]
```

<h3 id="gets-all-bike-point-locations-the-place-object-has-an-addtionalproperties-array-which-contains-the-nbbikes-nbdocks-and-nbspaces-numbers-which-give-the-status-of-the-bikepoint-a-mismatch-in-these-numbers-ie-nbdocks---nbbikes-nbspaces-0-indicates-broken-docks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="gets-all-bike-point-locations-the-place-object-has-an-addtionalproperties-array-which-contains-the-nbbikes-nbdocks-and-nbspaces-numbers-which-give-the-status-of-the-bikepoint-a-mismatch-in-these-numbers-ie-nbdocks---nbbikes-nbspaces-0-indicates-broken-docks-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Tfl.Api.Presentation.Entities.Place](#schematfl.api.presentation.entities.place)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Search for bike stations by their name, a bike point's name often contains information about the name of the street or nearby landmarks, for example. Note that the search result does not contain the PlaceProperties i.e. the status or occupancy of the BikePoint, to get that information you should retrieve the BikePoint by its id on /BikePoint/id.

<a id="opIdBikePoint_Search"></a>

> Code samples

```bash
curl 'https://example.com/BikePoint/Search?query=string' \
  -H 'Accept: application/json'
```

`GET /BikePoint/Search`

<h3 id="search-for-bike-stations-by-their-name-a-bike-points-name-often-contains-information-about-the-name-of-the-street-or-nearby-landmarks-for-example-note-that-the-search-result-does-not-contain-the-placeproperties-ie-the-status-or-occupancy-of-the-bikepoint-to-get-that-information-you-should-retrieve-the-bikepoint-by-its-id-on-bikepointid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|query|query|string|true|The search term e.g. "St. James"|

> Example responses

> 200 Response

```json
[
  {
    "additionalProperties": [
      {
        "category": "string",
        "key": "string",
        "modified": "1970-01-01T00:00:00Z",
        "sourceSystemKey": "string",
        "value": "string"
      }
    ],
    "children": [
      {}
    ],
    "childrenUrls": [
      "string"
    ],
    "commonName": "string",
    "distance": 0,
    "id": "string",
    "lat": 0,
    "lon": 0,
    "placeType": "string",
    "url": "string"
  }
]
```

<h3 id="search-for-bike-stations-by-their-name-a-bike-points-name-often-contains-information-about-the-name-of-the-street-or-nearby-landmarks-for-example-note-that-the-search-result-does-not-contain-the-placeproperties-ie-the-status-or-occupancy-of-the-bikepoint-to-get-that-information-you-should-retrieve-the-bikepoint-by-its-id-on-bikepointid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="search-for-bike-stations-by-their-name-a-bike-points-name-often-contains-information-about-the-name-of-the-street-or-nearby-landmarks-for-example-note-that-the-search-result-does-not-contain-the-placeproperties-ie-the-status-or-occupancy-of-the-bikepoint-to-get-that-information-you-should-retrieve-the-bikepoint-by-its-id-on-bikepointid-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Tfl.Api.Presentation.Entities.Place](#schematfl.api.presentation.entities.place)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Gets the bike point with the given id.

<a id="opIdBikePoint_Get"></a>

> Code samples

```bash
curl https://example.com/BikePoint/string \
  -H 'Accept: application/json'
```

`GET /BikePoint/{id}`

<h3 id="gets-the-bike-point-with-the-given-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|A bike point id (a list of ids can be obtained from the above BikePoint call)|

> Example responses

> 200 Response

```json
{
  "additionalProperties": [
    {
      "category": "string",
      "key": "string",
      "modified": "1970-01-01T00:00:00Z",
      "sourceSystemKey": "string",
      "value": "string"
    }
  ],
  "children": [
    {}
  ],
  "childrenUrls": [
    "string"
  ],
  "commonName": "string",
  "distance": 0,
  "id": "string",
  "lat": 0,
  "lon": 0,
  "placeType": "string",
  "url": "string"
}
```

<h3 id="gets-the-bike-point-with-the-given-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Tfl.Api.Presentation.Entities.Place](#schematfl.api.presentation.entities.place)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="transport-for-london-unified-api-cabwise">Cabwise</h1>

## Gets taxis and minicabs contact information

<a id="opIdCabwise_Get"></a>

> Code samples

```bash
curl 'https://example.com/Cabwise/search?lat=0&lon=0' \
  -H 'Accept: application/json'
```

`GET /Cabwise/search`

<h3 id="gets-taxis-and-minicabs-contact-information-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|lat|query|number(double)|true|Latitude|
|lon|query|number(double)|true|Longitude|
|optype|query|string|false|Operator Type e.g Minicab, Executive, Limousine|
|wc|query|string|false|Wheelchair accessible|
|radius|query|number(double)|false|The radius of the bounding circle in metres|
|name|query|string|false|Trading name of operating company|
|maxResults|query|integer(int32)|false|An optional parameter to limit the number of results return. Default and maximum is 20.|
|legacyFormat|query|boolean|false|Legacy Format|
|forceXml|query|boolean|false|Force Xml|
|twentyFourSevenOnly|query|boolean|false|Twenty Four Seven Only|

> Example responses

> 200 Response

```json
{}
```

<h3 id="gets-taxis-and-minicabs-contact-information-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[System.Object](#schemasystem.object)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="transport-for-london-unified-api-journey">Journey</h1>

## Perform a Journey Planner search from the parameters specified in simple types

<a id="opIdJourney_JourneyResults"></a>

> Code samples

```bash
curl https://example.com/Journey/JourneyResults/string/to/string \
  -H 'Accept: application/json'
```

`GET /Journey/JourneyResults/{from}/to/{to}`

<h3 id="perform-a-journey-planner-search-from-the-parameters-specified-in-simple-types-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|from|path|string|true|Origin of the journey. Can be WGS84 coordinates expressed as "lat,long", a UK postcode, a Naptan (StopPoint) id, an ICS StopId, or a free-text string (will cause disambiguation unless it exactly matches a point of interest name).|
|to|path|string|true|Destination of the journey. Can be WGS84 coordinates expressed as "lat,long", a UK postcode, a Naptan (StopPoint) id, an ICS StopId, or a free-text string (will cause disambiguation unless it exactly matches a point of interest name).|
|via|query|string|false|Travel through point on the journey. Can be WGS84 coordinates expressed as "lat,long", a UK postcode, a Naptan (StopPoint) id, an ICS StopId, or a free-text string (will cause disambiguation unless it exactly matches a point of interest name).|
|nationalSearch|query|boolean|false|Does the journey cover stops outside London? eg. "nationalSearch=true"|
|date|query|string|false|The date must be in yyyyMMdd format|
|time|query|string|false|The time must be in HHmm format|
|timeIs|query|string|false|Does the time given relate to arrival or leaving time? Possible options: "departing" \| "arriving"|
|journeyPreference|query|string|false|The journey preference eg possible options: "leastinterchange" \| "leasttime" \| "leastwalking"|
|mode|query|[string]|false|The mode must be a comma separated list of modes. eg possible options: "public-bus,overground,train,tube,coach,dlr,cablecar,tram,river,walking,cycle"|
|accessibilityPreference|query|[string]|false|The accessibility preference must be a comma separated list eg. "noSolidStairs,noEscalators,noElevators,stepFreeToVehicle,stepFreeToPlatform"|
|fromName|query|string|false|An optional name to associate with the origin of the journey in the results.|
|toName|query|string|false|An optional name to associate with the destination of the journey in the results.|
|viaName|query|string|false|An optional name to associate with the via point of the journey in the results.|
|maxTransferMinutes|query|string|false|The max walking time in minutes for transfer eg. "120"|
|maxWalkingMinutes|query|string|false|The max walking time in minutes for journeys eg. "120"|
|walkingSpeed|query|string|false|The walking speed. eg possible options: "slow" \| "average" \| "fast".|
|cyclePreference|query|string|false|The cycle preference. eg possible options: "allTheWay" \| "leaveAtStation" \| "takeOnTransport" \| "cycleHire"|
|adjustment|query|string|false|Time adjustment command. eg possible options: "TripFirst" \| "TripLast"|
|bikeProficiency|query|[string]|false|A comma separated list of cycling proficiency levels. eg possible options: "easy,moderate,fast"|
|alternativeCycle|query|boolean|false|Option to determine whether to return alternative cycling journey|
|alternativeWalking|query|boolean|false|Option to determine whether to return alternative walking journey|
|applyHtmlMarkup|query|boolean|false|Flag to determine whether certain text (e.g. walking instructions) should be output with HTML tags or not.|
|useMultiModalCall|query|boolean|false|A boolean to indicate whether or not to return 3 public transport journeys, a bus journey, a cycle hire journey, a personal cycle journey and a walking journey|
|walkingOptimization|query|boolean|false|A boolean to indicate whether to optimize journeys using walking|
|taxiOnlyTrip|query|boolean|false|A boolean to indicate whether to return one or more taxi journeys. Note, setting this to true will override "useMultiModalCall".|
|routeBetweenEntrances|query|boolean|false|A boolean to indicate whether public transport routes should include directions between platforms and station entrances.|
|useRealTimeLiveArrivals|query|boolean|false|A boolean to indicate if we want to receive real time live arrivals data where available.|
|calcOneDirection|query|boolean|false|A boolean to make Journey Planner calculate journeys in one temporal direction only. In other words, only calculate journeys after the 'depart' time, or before the 'arrive' time. By default, the Journey Planner engine (EFA) calculates journeys in both temporal directions.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|timeIs|Arriving|
|timeIs|Departing|
|journeyPreference|LeastInterchange|
|journeyPreference|LeastTime|
|journeyPreference|LeastWalking|
|accessibilityPreference|NoRequirements|
|accessibilityPreference|NoSolidStairs|
|accessibilityPreference|NoEscalators|
|accessibilityPreference|NoElevators|
|accessibilityPreference|StepFreeToVehicle|
|accessibilityPreference|StepFreeToPlatform|
|walkingSpeed|Slow|
|walkingSpeed|Average|
|walkingSpeed|Fast|
|cyclePreference|None|
|cyclePreference|LeaveAtStation|
|cyclePreference|TakeOnTransport|
|cyclePreference|AllTheWay|
|cyclePreference|CycleHire|
|bikeProficiency|Easy|
|bikeProficiency|Moderate|
|bikeProficiency|Fast|

> Example responses

> 200 Response

```json
{
  "cycleHireDockingStationData": {
    "destinationId": "string",
    "destinationNumberOfBikes": 0,
    "destinationNumberOfEmptySlots": 0,
    "originId": "string",
    "originNumberOfBikes": 0,
    "originNumberOfEmptySlots": 0
  },
  "journeyVector": {
    "from": "string",
    "to": "string",
    "uri": "string",
    "via": "string"
  },
  "journeys": [
    {
      "arrivalDateTime": "1970-01-01T00:00:00Z",
      "duration": 0,
      "fare": {
        "caveats": [
          {
            "text": "string",
            "type": "string"
          }
        ],
        "fares": [
          {
            "chargeLevel": "string",
            "chargeProfileName": "string",
            "cost": 0,
            "highZone": 0,
            "isHopperFare": true,
            "lowZone": 0,
            "offPeak": 0,
            "peak": 0,
            "taps": [
              {
                "atcoCode": "string",
                "tapDetails": {
                  "busRouteId": "string",
                  "hostDeviceType": "string",
                  "modeType": "string",
                  "nationalLocationCode": 0,
                  "tapTimestamp": "1970-01-01T00:00:00Z",
                  "validationType": "string"
                }
              }
            ]
          }
        ],
        "totalCost": 0
      },
      "legs": [
        {
          "arrivalPoint": {
            "lat": 0,
            "lon": 0
          },
          "arrivalTime": "1970-01-01T00:00:00Z",
          "departurePoint": {
            "lat": 0,
            "lon": 0
          },
          "departureTime": "1970-01-01T00:00:00Z",
          "disruptions": [
            {
              "additionalInfo": "string",
              "affectedRoutes": [
                {
                  "destinationName": "string",
                  "direction": "string",
                  "id": "string",
                  "isEntireRouteSection": true,
                  "lineId": "string",
                  "lineString": "string",
                  "name": "string",
                  "originationName": "string",
                  "routeCode": "string",
                  "routeSectionNaptanEntrySequence": [
                    {
                      "ordinal": 0,
                      "stopPoint": {
                        "accessibilitySummary": "string",
                        "additionalProperties": [
                          {
                            "category": "string",
                            "key": "string",
                            "modified": "1970-01-01T00:00:00Z",
                            "sourceSystemKey": "string",
                            "value": "string"
                          }
                        ],
                        "children": [
                          {
                            "additionalProperties": [
                              {
                                "category": "string",
                                "key": "string",
                                "modified": "1970-01-01T00:00:00Z",
                                "sourceSystemKey": "string",
                                "value": "string"
                              }
                            ],
                            "children": [
                              {}
                            ],
                            "childrenUrls": [
                              "string"
                            ],
                            "commonName": "string",
                            "distance": 0,
                            "id": "string",
                            "lat": 0,
                            "lon": 0,
                            "placeType": "string",
                            "url": "string"
                          }
                        ],
                        "childrenUrls": [
                          "string"
                        ],
                        "commonName": "string",
                        "distance": 0,
                        "fullName": "string",
                        "hubNaptanCode": "string",
                        "icsCode": "string",
                        "id": "string",
                        "indicator": "string",
                        "individualStopId": "string",
                        "lat": 0,
                        "lineGroup": [
                          {
                            "lineIdentifier": [
                              "string"
                            ],
                            "naptanIdReference": "string",
                            "stationAtcoCode": "string"
                          }
                        ],
                        "lineModeGroups": [
                          {
                            "lineIdentifier": [
                              "string"
                            ],
                            "modeName": "string"
                          }
                        ],
                        "lines": [
                          {
                            "crowding": {
                              "passengerFlows": [
                                {
                                  "timeSlice": "string",
                                  "value": 0
                                }
                              ],
                              "trainLoadings": [
                                {
                                  "direction": "string",
                                  "line": "string",
                                  "lineDirection": "string",
                                  "naptanTo": "string",
                                  "platformDirection": "string",
                                  "timeSlice": "string",
                                  "value": 0
                                }
                              ]
                            },
                            "fullName": "string",
                            "id": "string",
                            "motType": "string",
                            "name": "string",
                            "network": "string",
                            "routeType": "Unknown",
                            "status": "Unknown",
                            "type": "string",
                            "uri": "string"
                          }
                        ],
                        "lon": 0,
                        "modes": [
                          "string"
                        ],
                        "naptanId": "string",
                        "naptanMode": "string",
                        "placeType": "string",
                        "platformName": "string",
                        "smsCode": "string",
                        "stationNaptan": "string",
                        "status": true,
                        "stopLetter": "string",
                        "stopType": "string",
                        "url": "string"
                      }
                    }
                  ],
                  "validFrom": "1970-01-01T00:00:00Z",
                  "validTo": "1970-01-01T00:00:00Z",
                  "via": {
                    "ordinal": 0,
                    "stopPoint": {
                      "accessibilitySummary": "string",
                      "additionalProperties": [
                        {
                          "category": "string",
                          "key": "string",
                          "modified": "1970-01-01T00:00:00Z",
                          "sourceSystemKey": "string",
                          "value": "string"
                        }
                      ],
                      "children": [
                        {
                          "additionalProperties": [
                            {
                              "category": "string",
                              "key": "string",
                              "modified": "1970-01-01T00:00:00Z",
                              "sourceSystemKey": "string",
                              "value": "string"
                            }
                          ],
                          "children": [
                            {}
                          ],
                          "childrenUrls": [
                            "string"
                          ],
                          "commonName": "string",
                          "distance": 0,
                          "id": "string",
                          "lat": 0,
                          "lon": 0,
                          "placeType": "string",
                          "url": "string"
                        }
                      ],
                      "childrenUrls": [
                        "string"
                      ],
                      "commonName": "string",
                      "distance": 0,
                      "fullName": "string",
                      "hubNaptanCode": "string",
                      "icsCode": "string",
                      "id": "string",
                      "indicator": "string",
                      "individualStopId": "string",
                      "lat": 0,
                      "lineGroup": [
                        {
                          "lineIdentifier": [
                            "string"
                          ],
                          "naptanIdReference": "string",
                          "stationAtcoCode": "string"
                        }
                      ],
                      "lineModeGroups": [
                        {
                          "lineIdentifier": [
                            "string"
                          ],
                          "modeName": "string"
                        }
                      ],
                      "lines": [
                        {
                          "crowding": {
                            "passengerFlows": [
                              {
                                "timeSlice": "string",
                                "value": 0
                              }
                            ],
                            "trainLoadings": [
                              {
                                "direction": "string",
                                "line": "string",
                                "lineDirection": "string",
                                "naptanTo": "string",
                                "platformDirection": "string",
                                "timeSlice": "string",
                                "value": 0
                              }
                            ]
                          },
                          "fullName": "string",
                          "id": "string",
                          "motType": "string",
                          "name": "string",
                          "network": "string",
                          "routeType": "Unknown",
                          "status": "Unknown",
                          "type": "string",
                          "uri": "string"
                        }
                      ],
                      "lon": 0,
                      "modes": [
                        "string"
                      ],
                      "naptanId": "string",
                      "naptanMode": "string",
                      "placeType": "string",
                      "platformName": "string",
                      "smsCode": "string",
                      "stationNaptan": "string",
                      "status": true,
                      "stopLetter": "string",
                      "stopType": "string",
                      "url": "string"
                    }
                  }
                }
              ],
              "affectedStops": [
                {
                  "accessibilitySummary": "string",
                  "additionalProperties": [
                    {
                      "category": "string",
                      "key": "string",
                      "modified": "1970-01-01T00:00:00Z",
                      "sourceSystemKey": "string",
                      "value": "string"
                    }
                  ],
                  "children": [
                    {
                      "additionalProperties": [
                        {
                          "category": "string",
                          "key": "string",
                          "modified": "1970-01-01T00:00:00Z",
                          "sourceSystemKey": "string",
                          "value": "string"
                        }
                      ],
                      "children": [
                        {}
                      ],
                      "childrenUrls": [
                        "string"
                      ],
                      "commonName": "string",
                      "distance": 0,
                      "id": "string",
                      "lat": 0,
                      "lon": 0,
                      "placeType": "string",
                      "url": "string"
                    }
                  ],
                  "childrenUrls": [
                    "string"
                  ],
                  "commonName": "string",
                  "distance": 0,
                  "fullName": "string",
                  "hubNaptanCode": "string",
                  "icsCode": "string",
                  "id": "string",
                  "indicator": "string",
                  "individualStopId": "string",
                  "lat": 0,
                  "lineGroup": [
                    {
                      "lineIdentifier": [
                        "string"
                      ],
                      "naptanIdReference": "string",
                      "stationAtcoCode": "string"
                    }
                  ],
                  "lineModeGroups": [
                    {
                      "lineIdentifier": [
                        "string"
                      ],
                      "modeName": "string"
                    }
                  ],
                  "lines": [
                    {
                      "crowding": {
                        "passengerFlows": [
                          {
                            "timeSlice": "string",
                            "value": 0
                          }
                        ],
                        "trainLoadings": [
                          {
                            "direction": "string",
                            "line": "string",
                            "lineDirection": "string",
                            "naptanTo": "string",
                            "platformDirection": "string",
                            "timeSlice": "string",
                            "value": 0
                          }
                        ]
                      },
                      "fullName": "string",
                      "id": "string",
                      "motType": "string",
                      "name": "string",
                      "network": "string",
                      "routeType": "Unknown",
                      "status": "Unknown",
                      "type": "string",
                      "uri": "string"
                    }
                  ],
                  "lon": 0,
                  "modes": [
                    "string"
                  ],
                  "naptanId": "string",
                  "naptanMode": "string",
                  "placeType": "string",
                  "platformName": "string",
                  "smsCode": "string",
                  "stationNaptan": "string",
                  "status": true,
                  "stopLetter": "string",
                  "stopType": "string",
                  "url": "string"
                }
              ],
              "category": "Undefined",
              "categoryDescription": "string",
              "closureText": "string",
              "created": "1970-01-01T00:00:00Z",
              "description": "string",
              "lastUpdate": "1970-01-01T00:00:00Z",
              "summary": "string",
              "type": "string"
            }
          ],
          "distance": 0,
          "duration": 0,
          "hasFixedLocations": true,
          "instruction": {
            "detailed": "string",
            "steps": [
              {
                "cumulativeDistance": 0,
                "cumulativeTravelTime": 0,
                "description": "string",
                "descriptionHeading": "string",
                "distance": 0,
                "latitude": 0,
                "longitude": 0,
                "pathAttribute": {
                  "name": "string",
                  "value": "string"
                },
                "skyDirection": 0,
                "skyDirectionDescription": "North",
                "streetName": "string",
                "trackType": "CycleSuperHighway",
                "turnDirection": "string"
              }
            ],
            "summary": "string"
          },
          "interChangeDuration": "string",
          "interChangePosition": "string",
          "isDisrupted": true,
          "mode": {
            "crowding": {
              "passengerFlows": [
                {
                  "timeSlice": "string",
                  "value": 0
                }
              ],
              "trainLoadings": [
                {
                  "direction": "string",
                  "line": "string",
                  "lineDirection": "string",
                  "naptanTo": "string",
                  "platformDirection": "string",
                  "timeSlice": "string",
                  "value": 0
                }
              ]
            },
            "fullName": "string",
            "id": "string",
            "motType": "string",
            "name": "string",
            "network": "string",
            "routeType": "Unknown",
            "status": "Unknown",
            "type": "string",
            "uri": "string"
          },
          "obstacles": [
            {
              "incline": "string",
              "position": "string",
              "stopId": 0,
              "type": "string"
            }
          ],
          "path": {
            "elevation": [
              {
                "distance": 0,
                "endLat": 0,
                "endLon": 0,
                "gradient": 0,
                "heightFromPreviousPoint": 0,
                "startLat": 0,
                "startLon": 0
              }
            ],
            "lineString": "string",
            "stopPoints": [
              {
                "crowding": {
                  "passengerFlows": [
                    {
                      "timeSlice": "string",
                      "value": 0
                    }
                  ],
                  "trainLoadings": [
                    {
                      "direction": "string",
                      "line": "string",
                      "lineDirection": "string",
                      "naptanTo": "string",
                      "platformDirection": "string",
                      "timeSlice": "string",
                      "value": 0
                    }
                  ]
                },
                "fullName": "string",
                "id": "string",
                "motType": "string",
                "name": "string",
                "network": "string",
                "routeType": "Unknown",
                "status": "Unknown",
                "type": "string",
                "uri": "string"
              }
            ]
          },
          "plannedWorks": [
            {
              "createdDateTime": "1970-01-01T00:00:00Z",
              "description": "string",
              "id": "string",
              "lastUpdateDateTime": "1970-01-01T00:00:00Z"
            }
          ],
          "routeOptions": [
            {
              "direction": "string",
              "directions": [
                "string"
              ],
              "id": "string",
              "lineIdentifier": {
                "crowding": {
                  "passengerFlows": [
                    {
                      "timeSlice": "string",
                      "value": 0
                    }
                  ],
                  "trainLoadings": [
                    {
                      "direction": "string",
                      "line": "string",
                      "lineDirection": "string",
                      "naptanTo": "string",
                      "platformDirection": "string",
                      "timeSlice": "string",
                      "value": 0
                    }
                  ]
                },
                "fullName": "string",
                "id": "string",
                "motType": "string",
                "name": "string",
                "network": "string",
                "routeType": "Unknown",
                "status": "Unknown",
                "type": "string",
                "uri": "string"
              },
              "name": "string"
            }
          ],
          "scheduledArrivalTime": "1970-01-01T00:00:00Z",
          "scheduledDepartureTime": "1970-01-01T00:00:00Z",
          "speed": "string"
        }
      ],
      "startDateTime": "1970-01-01T00:00:00Z"
    }
  ],
  "lines": [
    {
      "created": "1970-01-01T00:00:00Z",
      "crowding": {
        "passengerFlows": [
          {
            "timeSlice": "string",
            "value": 0
          }
        ],
        "trainLoadings": [
          {
            "direction": "string",
            "line": "string",
            "lineDirection": "string",
            "naptanTo": "string",
            "platformDirection": "string",
            "timeSlice": "string",
            "value": 0
          }
        ]
      },
      "disruptions": [
        {
          "additionalInfo": "string",
          "affectedRoutes": [
            {
              "destinationName": "string",
              "direction": "string",
              "id": "string",
              "isEntireRouteSection": true,
              "lineId": "string",
              "lineString": "string",
              "name": "string",
              "originationName": "string",
              "routeCode": "string",
              "routeSectionNaptanEntrySequence": [
                {
                  "ordinal": 0,
                  "stopPoint": {
                    "accessibilitySummary": "string",
                    "additionalProperties": [
                      {
                        "category": "string",
                        "key": "string",
                        "modified": "1970-01-01T00:00:00Z",
                        "sourceSystemKey": "string",
                        "value": "string"
                      }
                    ],
                    "children": [
                      {
                        "additionalProperties": [
                          {
                            "category": "string",
                            "key": "string",
                            "modified": "1970-01-01T00:00:00Z",
                            "sourceSystemKey": "string",
                            "value": "string"
                          }
                        ],
                        "children": [
                          {}
                        ],
                        "childrenUrls": [
                          "string"
                        ],
                        "commonName": "string",
                        "distance": 0,
                        "id": "string",
                        "lat": 0,
                        "lon": 0,
                        "placeType": "string",
                        "url": "string"
                      }
                    ],
                    "childrenUrls": [
                      "string"
                    ],
                    "commonName": "string",
                    "distance": 0,
                    "fullName": "string",
                    "hubNaptanCode": "string",
                    "icsCode": "string",
                    "id": "string",
                    "indicator": "string",
                    "individualStopId": "string",
                    "lat": 0,
                    "lineGroup": [
                      {
                        "lineIdentifier": [
                          "string"
                        ],
                        "naptanIdReference": "string",
                        "stationAtcoCode": "string"
                      }
                    ],
                    "lineModeGroups": [
                      {
                        "lineIdentifier": [
                          "string"
                        ],
                        "modeName": "string"
                      }
                    ],
                    "lines": [
                      {
                        "crowding": {
                          "passengerFlows": [
                            {
                              "timeSlice": "string",
                              "value": 0
                            }
                          ],
                          "trainLoadings": [
                            {
                              "direction": "string",
                              "line": "string",
                              "lineDirection": "string",
                              "naptanTo": "string",
                              "platformDirection": "string",
                              "timeSlice": "string",
                              "value": 0
                            }
                          ]
                        },
                        "fullName": "string",
                        "id": "string",
                        "motType": "string",
                        "name": "string",
                        "network": "string",
                        "routeType": "Unknown",
                        "status": "Unknown",
                        "type": "string",
                        "uri": "string"
                      }
                    ],
                    "lon": 0,
                    "modes": [
                      "string"
                    ],
                    "naptanId": "string",
                    "naptanMode": "string",
                    "placeType": "string",
                    "platformName": "string",
                    "smsCode": "string",
                    "stationNaptan": "string",
                    "status": true,
                    "stopLetter": "string",
                    "stopType": "string",
                    "url": "string"
                  }
                }
              ],
              "validFrom": "1970-01-01T00:00:00Z",
              "validTo": "1970-01-01T00:00:00Z",
              "via": {
                "ordinal": 0,
                "stopPoint": {
                  "accessibilitySummary": "string",
                  "additionalProperties": [
                    {
                      "category": "string",
                      "key": "string",
                      "modified": "1970-01-01T00:00:00Z",
                      "sourceSystemKey": "string",
                      "value": "string"
                    }
                  ],
                  "children": [
                    {
                      "additionalProperties": [
                        {
                          "category": "string",
                          "key": "string",
                          "modified": "1970-01-01T00:00:00Z",
                          "sourceSystemKey": "string",
                          "value": "string"
                        }
                      ],
                      "children": [
                        {}
                      ],
                      "childrenUrls": [
                        "string"
                      ],
                      "commonName": "string",
                      "distance": 0,
                      "id": "string",
                      "lat": 0,
                      "lon": 0,
                      "placeType": "string",
                      "url": "string"
                    }
                  ],
                  "childrenUrls": [
                    "string"
                  ],
                  "commonName": "string",
                  "distance": 0,
                  "fullName": "string",
                  "hubNaptanCode": "string",
                  "icsCode": "string",
                  "id": "string",
                  "indicator": "string",
                  "individualStopId": "string",
                  "lat": 0,
                  "lineGroup": [
                    {
                      "lineIdentifier": [
                        "string"
                      ],
                      "naptanIdReference": "string",
                      "stationAtcoCode": "string"
                    }
                  ],
                  "lineModeGroups": [
                    {
                      "lineIdentifier": [
                        "string"
                      ],
                      "modeName": "string"
                    }
                  ],
                  "lines": [
                    {
                      "crowding": {
                        "passengerFlows": [
                          {
                            "timeSlice": "string",
                            "value": 0
                          }
                        ],
                        "trainLoadings": [
                          {
                            "direction": "string",
                            "line": "string",
                            "lineDirection": "string",
                            "naptanTo": "string",
                            "platformDirection": "string",
                            "timeSlice": "string",
                            "value": 0
                          }
                        ]
                      },
                      "fullName": "string",
                      "id": "string",
                      "motType": "string",
                      "name": "string",
                      "network": "string",
                      "routeType": "Unknown",
                      "status": "Unknown",
                      "type": "string",
                      "uri": "string"
                    }
                  ],
                  "lon": 0,
                  "modes": [
                    "string"
                  ],
                  "naptanId": "string",
                  "naptanMode": "string",
                  "placeType": "string",
                  "platformName": "string",
                  "smsCode": "string",
                  "stationNaptan": "string",
                  "status": true,
                  "stopLetter": "string",
                  "stopType": "string",
                  "url": "string"
                }
              }
            }
          ],
          "affectedStops": [
            {
              "accessibilitySummary": "string",
              "additionalProperties": [
                {
                  "category": "string",
                  "key": "string",
                  "modified": "1970-01-01T00:00:00Z",
                  "sourceSystemKey": "string",
                  "value": "string"
                }
              ],
              "children": [
                {
                  "additionalProperties": [
                    {
                      "category": "string",
                      "key": "string",
                      "modified": "1970-01-01T00:00:00Z",
                      "sourceSystemKey": "string",
                      "value": "string"
                    }
                  ],
                  "children": [
                    {}
                  ],
                  "childrenUrls": [
                    "string"
                  ],
                  "commonName": "string",
                  "distance": 0,
                  "id": "string",
                  "lat": 0,
                  "lon": 0,
                  "placeType": "string",
                  "url": "string"
                }
              ],
              "childrenUrls": [
                "string"
              ],
              "commonName": "string",
              "distance": 0,
              "fullName": "string",
              "hubNaptanCode": "string",
              "icsCode": "string",
              "id": "string",
              "indicator": "string",
              "individualStopId": "string",
              "lat": 0,
              "lineGroup": [
                {
                  "lineIdentifier": [
                    "string"
                  ],
                  "naptanIdReference": "string",
                  "stationAtcoCode": "string"
                }
              ],
              "lineModeGroups": [
                {
                  "lineIdentifier": [
                    "string"
                  ],
                  "modeName": "string"
                }
              ],
              "lines": [
                {
                  "crowding": {
                    "passengerFlows": [
                      {
                        "timeSlice": "string",
                        "value": 0
                      }
                    ],
                    "trainLoadings": [
                      {
                        "direction": "string",
                        "line": "string",
                        "lineDirection": "string",
                        "naptanTo": "string",
                        "platformDirection": "string",
                        "timeSlice": "string",
                        "value": 0
                      }
                    ]
                  },
                  "fullName": "string",
                  "id": "string",
                  "motType": "string",
                  "name": "string",
                  "network": "string",
                  "routeType": "Unknown",
                  "status": "Unknown",
                  "type": "string",
                  "uri": "string"
                }
              ],
              "lon": 0,
              "modes": [
                "string"
              ],
              "naptanId": "string",
              "naptanMode": "string",
              "placeType": "string",
              "platformName": "string",
              "smsCode": "string",
              "stationNaptan": "string",
              "status": true,
              "stopLetter": "string",
              "stopType": "string",
              "url": "string"
            }
          ],
          "category": "Undefined",
          "categoryDescription": "string",
          "closureText": "string",
          "created": "1970-01-01T00:00:00Z",
          "description": "string",
          "lastUpdate": "1970-01-01T00:00:00Z",
          "summary": "string",
          "type": "string"
        }
      ],
      "id": "string",
      "lineStatuses": [
        {
          "created": "1970-01-01T00:00:00Z",
          "disruption": {
            "additionalInfo": "string",
            "affectedRoutes": [
              {
                "destinationName": "string",
                "direction": "string",
                "id": "string",
                "isEntireRouteSection": true,
                "lineId": "string",
                "lineString": "string",
                "name": "string",
                "originationName": "string",
                "routeCode": "string",
                "routeSectionNaptanEntrySequence": [
                  {
                    "ordinal": 0,
                    "stopPoint": {
                      "accessibilitySummary": "string",
                      "additionalProperties": [
                        {
                          "category": "string",
                          "key": "string",
                          "modified": "1970-01-01T00:00:00Z",
                          "sourceSystemKey": "string",
                          "value": "string"
                        }
                      ],
                      "children": [
                        {
                          "additionalProperties": [
                            {
                              "category": "string",
                              "key": "string",
                              "modified": "1970-01-01T00:00:00Z",
                              "sourceSystemKey": "string",
                              "value": "string"
                            }
                          ],
                          "children": [
                            {}
                          ],
                          "childrenUrls": [
                            "string"
                          ],
                          "commonName": "string",
                          "distance": 0,
                          "id": "string",
                          "lat": 0,
                          "lon": 0,
                          "placeType": "string",
                          "url": "string"
                        }
                      ],
                      "childrenUrls": [
                        "string"
                      ],
                      "commonName": "string",
                      "distance": 0,
                      "fullName": "string",
                      "hubNaptanCode": "string",
                      "icsCode": "string",
                      "id": "string",
                      "indicator": "string",
                      "individualStopId": "string",
                      "lat": 0,
                      "lineGroup": [
                        {
                          "lineIdentifier": [
                            "string"
                          ],
                          "naptanIdReference": "string",
                          "stationAtcoCode": "string"
                        }
                      ],
                      "lineModeGroups": [
                        {
                          "lineIdentifier": [
                            "string"
                          ],
                          "modeName": "string"
                        }
                      ],
                      "lines": [
                        {
                          "crowding": {
                            "passengerFlows": [
                              {
                                "timeSlice": "string",
                                "value": 0
                              }
                            ],
                            "trainLoadings": [
                              {
                                "direction": "string",
                                "line": "string",
                                "lineDirection": "string",
                                "naptanTo": "string",
                                "platformDirection": "string",
                                "timeSlice": "string",
                                "value": 0
                              }
                            ]
                          },
                          "fullName": "string",
                          "id": "string",
                          "motType": "string",
                          "name": "string",
                          "network": "string",
                          "routeType": "Unknown",
                          "status": "Unknown",
                          "type": "string",
                          "uri": "string"
                        }
                      ],
                      "lon": 0,
                      "modes": [
                        "string"
                      ],
                      "naptanId": "string",
                      "naptanMode": "string",
                      "placeType": "string",
                      "platformName": "string",
                      "smsCode": "string",
                      "stationNaptan": "string",
                      "status": true,
                      "stopLetter": "string",
                      "stopType": "string",
                      "url": "string"
                    }
                  }
                ],
                "validFrom": "1970-01-01T00:00:00Z",
                "validTo": "1970-01-01T00:00:00Z",
                "via": {
                  "ordinal": 0,
                  "stopPoint": {
                    "accessibilitySummary": "string",
                    "additionalProperties": [
                      {
                        "category": "string",
                        "key": "string",
                        "modified": "1970-01-01T00:00:00Z",
                        "sourceSystemKey": "string",
                        "value": "string"
                      }
                    ],
                    "children": [
                      {
                        "additionalProperties": [
                          {
                            "category": "string",
                            "key": "string",
                            "modified": "1970-01-01T00:00:00Z",
                            "sourceSystemKey": "string",
                            "value": "string"
                          }
                        ],
                        "children": [
                          {}
                        ],
                        "childrenUrls": [
                          "string"
                        ],
                        "commonName": "string",
                        "distance": 0,
                        "id": "string",
                        "lat": 0,
                        "lon": 0,
                        "placeType": "string",
                        "url": "string"
                      }
                    ],
                    "childrenUrls": [
                      "string"
                    ],
                    "commonName": "string",
                    "distance": 0,
                    "fullName": "string",
                    "hubNaptanCode": "string",
                    "icsCode": "string",
                    "id": "string",
                    "indicator": "string",
                    "individualStopId": "string",
                    "lat": 0,
                    "lineGroup": [
                      {
                        "lineIdentifier": [
                          "string"
                        ],
                        "naptanIdReference": "string",
                        "stationAtcoCode": "string"
                      }
                    ],
                    "lineModeGroups": [
                      {
                        "lineIdentifier": [
                          "string"
                        ],
                        "modeName": "string"
                      }
                    ],
                    "lines": [
                      {
                        "crowding": {
                          "passengerFlows": [
                            {
                              "timeSlice": "string",
                              "value": 0
                            }
                          ],
                          "trainLoadings": [
                            {
                              "direction": "string",
                              "line": "string",
                              "lineDirection": "string",
                              "naptanTo": "string",
                              "platformDirection": "string",
                              "timeSlice": "string",
                              "value": 0
                            }
                          ]
                        },
                        "fullName": "string",
                        "id": "string",
                        "motType": "string",
                        "name": "string",
                        "network": "string",
                        "routeType": "Unknown",
                        "status": "Unknown",
                        "type": "string",
                        "uri": "string"
                      }
                    ],
                    "lon": 0,
                    "modes": [
                      "string"
                    ],
                    "naptanId": "string",
                    "naptanMode": "string",
                    "placeType": "string",
                    "platformName": "string",
                    "smsCode": "string",
                    "stationNaptan": "string",
                    "status": true,
                    "stopLetter": "string",
                    "stopType": "string",
                    "url": "string"
                  }
                }
              }
            ],
            "affectedStops": [
              {
                "accessibilitySummary": "string",
                "additionalProperties": [
                  {
                    "category": "string",
                    "key": "string",
                    "modified": "1970-01-01T00:00:00Z",
                    "sourceSystemKey": "string",
                    "value": "string"
                  }
                ],
                "children": [
                  {
                    "additionalProperties": [
                      {
                        "category": "string",
                        "key": "string",
                        "modified": "1970-01-01T00:00:00Z",
                        "sourceSystemKey": "string",
                        "value": "string"
                      }
                    ],
                    "children": [
                      {}
                    ],
                    "childrenUrls": [
                      "string"
                    ],
                    "commonName": "string",
                    "distance": 0,
                    "id": "string",
                    "lat": 0,
                    "lon": 0,
                    "placeType": "string",
                    "url": "string"
                  }
                ],
                "childrenUrls": [
                  "string"
                ],
                "commonName": "string",
                "distance": 0,
                "fullName": "string",
                "hubNaptanCode": "string",
                "icsCode": "string",
                "id": "string",
                "indicator": "string",
                "individualStopId": "string",
                "lat": 0,
                "lineGroup": [
                  {
                    "lineIdentifier": [
                      "string"
                    ],
                    "naptanIdReference": "string",
                    "stationAtcoCode": "string"
                  }
                ],
                "lineModeGroups": [
                  {
                    "lineIdentifier": [
                      "string"
                    ],
                    "modeName": "string"
                  }
                ],
                "lines": [
                  {
                    "crowding": {
                      "passengerFlows": [
                        {
                          "timeSlice": "string",
                          "value": 0
                        }
                      ],
                      "trainLoadings": [
                        {
                          "direction": "string",
                          "line": "string",
                          "lineDirection": "string",
                          "naptanTo": "string",
                          "platformDirection": "string",
                          "timeSlice": "string",
                          "value": 0
                        }
                      ]
                    },
                    "fullName": "string",
                    "id": "string",
                    "motType": "string",
                    "name": "string",
                    "network": "string",
                    "routeType": "Unknown",
                    "status": "Unknown",
                    "type": "string",
                    "uri": "string"
                  }
                ],
                "lon": 0,
                "modes": [
                  "string"
                ],
                "naptanId": "string",
                "naptanMode": "string",
                "placeType": "string",
                "platformName": "string",
                "smsCode": "string",
                "stationNaptan": "string",
                "status": true,
                "stopLetter": "string",
                "stopType": "string",
                "url": "string"
              }
            ],
            "category": "Undefined",
            "categoryDescription": "string",
            "closureText": "string",
            "created": "1970-01-01T00:00:00Z",
            "description": "string",
            "lastUpdate": "1970-01-01T00:00:00Z",
            "summary": "string",
            "type": "string"
          },
          "id": 0,
          "lineId": "string",
          "modified": "1970-01-01T00:00:00Z",
          "reason": "string",
          "statusSeverity": 0,
          "statusSeverityDescription": "string",
          "validityPeriods": [
            {
              "fromDate": "1970-01-01T00:00:00Z",
              "isNow": true,
              "toDate": "1970-01-01T00:00:00Z"
            }
          ]
        }
      ],
      "modeName": "string",
      "modified": "1970-01-01T00:00:00Z",
      "name": "string",
      "routeSections": [
        {
          "destination": "string",
          "destinationName": "string",
          "direction": "string",
          "name": "string",
          "originationName": "string",
          "originator": "string",
          "routeCode": "string",
          "serviceType": "string",
          "validFrom": "1970-01-01T00:00:00Z",
          "validTo": "1970-01-01T00:00:00Z"
        }
      ],
      "serviceTypes": [
        {
          "name": "string",
          "uri": "string"
        }
      ]
    }
  ],
  "recommendedMaxAgeMinutes": 0,
  "searchCriteria": {
    "dateTime": "1970-01-01T00:00:00Z",
    "dateTimeType": "Arriving",
    "timeAdjustments": {
      "earlier": {
        "date": "string",
        "time": "string",
        "timeIs": "string",
        "uri": "string"
      },
      "earliest": {
        "date": "string",
        "time": "string",
        "timeIs": "string",
        "uri": "string"
      },
      "later": {
        "date": "string",
        "time": "string",
        "timeIs": "string",
        "uri": "string"
      },
      "latest": {
        "date": "string",
        "time": "string",
        "timeIs": "string",
        "uri": "string"
      }
    }
  },
  "stopMessages": [
    "string"
  ]
}
```

<h3 id="perform-a-journey-planner-search-from-the-parameters-specified-in-simple-types-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Tfl.Api.Presentation.Entities.JourneyPlanner.ItineraryResult](#schematfl.api.presentation.entities.journeyplanner.itineraryresult)|

<aside class="success">
This operation does not require authentication
</aside>

## Gets a list of all of the available journey planner modes

<a id="opIdJourney_Meta"></a>

> Code samples

```bash
curl https://example.com/Journey/Meta/Modes \
  -H 'Accept: application/json'
```

`GET /Journey/Meta/Modes`

> Example responses

> 200 Response

```json
[
  {
    "isFarePaying": true,
    "isScheduledService": true,
    "isTflService": true,
    "modeName": "string",
    "motType": "string",
    "network": "string"
  }
]
```

<h3 id="gets-a-list-of-all-of-the-available-journey-planner-modes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="gets-a-list-of-all-of-the-available-journey-planner-modes-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Tfl.Api.Presentation.Entities.Mode](#schematfl.api.presentation.entities.mode)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="transport-for-london-unified-api-line">Line</h1>

## Gets a list of valid disruption categories

<a id="opIdLine_MetaDisruptionCategories"></a>

> Code samples

```bash
curl https://example.com/Line/Meta/DisruptionCategories \
  -H 'Accept: application/json'
```

`GET /Line/Meta/DisruptionCategories`

> Example responses

> 200 Response

```json
[
  "string"
]
```

<h3 id="gets-a-list-of-valid-disruption-categories-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="gets-a-list-of-valid-disruption-categories-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Gets a list of valid modes

<a id="opIdLine_MetaModes"></a>

> Code samples

```bash
curl https://example.com/Line/Meta/Modes \
  -H 'Accept: application/json'
```

`GET /Line/Meta/Modes`

> Example responses

> 200 Response

```json
[
  {
    "isFarePaying": true,
    "isScheduledService": true,
    "isTflService": true,
    "modeName": "string",
    "motType": "string",
    "network": "string"
  }
]
```

<h3 id="gets-a-list-of-valid-modes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="gets-a-list-of-valid-modes-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Tfl.Api.Presentation.Entities.Mode](#schematfl.api.presentation.entities.mode)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Gets a list of valid ServiceTypes to filter on

<a id="opIdLine_MetaServiceTypes"></a>

> Code samples

```bash
curl https://example.com/Line/Meta/ServiceTypes \
  -H 'Accept: application/json'
```

`GET /Line/Meta/ServiceTypes`

> Example responses

> 200 Response

```json
[
  "string"
]
```

<h3 id="gets-a-list-of-valid-servicetypes-to-filter-on-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="gets-a-list-of-valid-servicetypes-to-filter-on-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Gets a list of valid severity codes

<a id="opIdLine_MetaSeverity"></a>

> Code samples

```bash
curl https://example.com/Line/Meta/Severity \
  -H 'Accept: application/json'
```

`GET /Line/Meta/Severity`

> Example responses

> 200 Response

```json
[
  {
    "description": "string",
    "modeName": "string",
    "severityLevel": 0
  }
]
```

<h3 id="gets-a-list-of-valid-severity-codes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="gets-a-list-of-valid-severity-codes-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Tfl.Api.Presentation.Entities.StatusSeverity](#schematfl.api.presentation.entities.statusseverity)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Gets lines that serve the given modes.

<a id="opIdLine_GetByMode"></a>

> Code samples

```bash
curl https://example.com/Line/Mode/string \
  -H 'Accept: application/json'
```

`GET /Line/Mode/{modes}`

<h3 id="gets-lines-that-serve-the-given-modes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|modes|path|[string]|true|A comma-separated list of modes e.g. tube,dlr|

> Example responses

> 200 Response

```json
[
  {
    "created": "1970-01-01T00:00:00Z",
    "crowding": {
      "passengerFlows": [
        {
          "timeSlice": "string",
          "value": 0
        }
      ],
      "trainLoadings": [
        {
          "direction": "string",
          "line": "string",
          "lineDirection": "string",
          "naptanTo": "string",
          "platformDirection": "string",
          "timeSlice": "string",
          "value": 0
        }
      ]
    },
    "disruptions": [
      {
        "additionalInfo": "string",
        "affectedRoutes": [
          {
            "destinationName": "string",
            "direction": "string",
            "id": "string",
            "isEntireRouteSection": true,
            "lineId": "string",
            "lineString": "string",
            "name": "string",
            "originationName": "string",
            "routeCode": "string",
            "routeSectionNaptanEntrySequence": [
              {
                "ordinal": 0,
                "stopPoint": {
                  "accessibilitySummary": "string",
                  "additionalProperties": [
                    {
                      "category": "string",
                      "key": "string",
                      "modified": "1970-01-01T00:00:00Z",
                      "sourceSystemKey": "string",
                      "value": "string"
                    }
                  ],
                  "children": [
                    {
                      "additionalProperties": [
                        {
                          "category": "string",
                          "key": "string",
                          "modified": "1970-01-01T00:00:00Z",
                          "sourceSystemKey": "string",
                          "value": "string"
                        }
                      ],
                      "children": [
                        {}
                      ],
                      "childrenUrls": [
                        "string"
                      ],
                      "commonName": "string",
                      "distance": 0,
                      "id": "string",
                      "lat": 0,
                      "lon": 0,
                      "placeType": "string",
                      "url": "string"
                    }
                  ],
                  "childrenUrls": [
                    "string"
                  ],
                  "commonName": "string",
                  "distance": 0,
                  "fullName": "string",
                  "hubNaptanCode": "string",
                  "icsCode": "string",
                  "id": "string",
                  "indicator": "string",
                  "individualStopId": "string",
                  "lat": 0,
                  "lineGroup": [
                    {
                      "lineIdentifier": [
                        "string"
                      ],
                      "naptanIdReference": "string",
                      "stationAtcoCode": "string"
                    }
                  ],
                  "lineModeGroups": [
                    {
                      "lineIdentifier": [
                        "string"
                      ],
                      "modeName": "string"
                    }
                  ],
                  "lines": [
                    {
                      "crowding": {
                        "passengerFlows": [
                          {
                            "timeSlice": "string",
                            "value": 0
                          }
                        ],
                        "trainLoadings": [
                          {
                            "direction": "string",
                            "line": "string",
                            "lineDirection": "string",
                            "naptanTo": "string",
                            "platformDirection": "string",
                            "timeSlice": "string",
                            "value": 0
                          }
                        ]
                      },
                      "fullName": "string",
                      "id": "string",
                      "motType": "string",
                      "name": "string",
                      "network": "string",
                      "routeType": "Unknown",
                      "status": "Unknown",
                      "type": "string",
                      "uri": "string"
                    }
                  ],
                  "lon": 0,
                  "modes": [
                    "string"
                  ],
                  "naptanId": "string",
                  "naptanMode": "string",
                  "placeType": "string",
                  "platformName": "string",
                  "smsCode": "string",
                  "stationNaptan": "string",
                  "status": true,
                  "stopLetter": "string",
                  "stopType": "string",
                  "url": "string"
                }
              }
            ],
            "validFrom": "1970-01-01T00:00:00Z",
            "validTo": "1970-01-01T00:00:00Z",
            "via": {
              "ordinal": 0,
              "stopPoint": {
                "accessibilitySummary": "string",
                "additionalProperties": [
                  {
                    "category": "string",
                    "key": "string",
                    "modified": "1970-01-01T00:00:00Z",
                    "sourceSystemKey": "string",
                    "value": "string"
                  }
                ],
                "children": [
                  {
                    "additionalProperties": [
                      {
                        "category": "string",
                        "key": "string",
                        "modified": "1970-01-01T00:00:00Z",
                        "sourceSystemKey": "string",
                        "value": "string"
                      }
                    ],
                    "children": [
                      {}
                    ],
                    "childrenUrls": [
                      "string"
                    ],
                    "commonName": "string",
                    "distance": 0,
                    "id": "string",
                    "lat": 0,
                    "lon": 0,
                    "placeType": "string",
                    "url": "string"
                  }
                ],
                "childrenUrls": [
                  "string"
                ],
                "commonName": "string",
                "distance": 0,
                "fullName": "string",
                "hubNaptanCode": "string",
                "icsCode": "string",
                "id": "string",
                "indicator": "string",
                "individualStopId": "string",
                "lat": 0,
                "lineGroup": [
                  {
                    "lineIdentifier": [
                      "string"
                    ],
                    "naptanIdReference": "string",
                    "stationAtcoCode": "string"
                  }
                ],
                "lineModeGroups": [
                  {
                    "lineIdentifier": [
                      "string"
                    ],
                    "modeName": "string"
                  }
                ],
                "lines": [
                  {
                    "crowding": {
                      "passengerFlows": [
                        {
                          "timeSlice": "string",
                          "value": 0
                        }
                      ],
                      "trainLoadings": [
                        {
                          "direction": "string",
                          "line": "string",
                          "lineDirection": "string",
                          "naptanTo": "string",
                          "platformDirection": "string",
                          "timeSlice": "string",
                          "value": 0
                        }
                      ]
                    },
                    "fullName": "string",
                    "id": "string",
                    "motType": "string",
                    "name": "string",
                    "network": "string",
                    "routeType": "Unknown",
                    "status": "Unknown",
                    "type": "string",
                    "uri": "string"
                  }
                ],
                "lon": 0,
                "modes": [
                  "string"
                ],
                "naptanId": "string",
                "naptanMode": "string",
                "placeType": "string",
                "platformName": "string",
                "smsCode": "string",
                "stationNaptan": "string",
                "status": true,
                "stopLetter": "string",
                "stopType": "string",
                "url": "string"
              }
            }
          }
        ],
        "affectedStops": [
          {
            "accessibilitySummary": "string",
            "additionalProperties": [
              {
                "category": "string",
                "key": "string",
                "modified": "1970-01-01T00:00:00Z",
                "sourceSystemKey": "string",
                "value": "string"
              }
            ],
            "children": [
              {
                "additionalProperties": [
                  {
                    "category": "string",
                    "key": "string",
                    "modified": "1970-01-01T00:00:00Z",
                    "sourceSystemKey": "string",
                    "value": "string"
                  }
                ],
                "children": [
                  {}
                ],
                "childrenUrls": [
                  "string"
                ],
                "commonName": "string",
                "distance": 0,
                "id": "string",
                "lat": 0,
                "lon": 0,
                "placeType": "string",
                "url": "string"
              }
            ],
            "childrenUrls": [
              "string"
            ],
            "commonName": "string",
            "distance": 0,
            "fullName": "string",
            "hubNaptanCode": "string",
            "icsCode": "string",
            "id": "string",
            "indicator": "string",
            "individualStopId": "string",
            "lat": 0,
            "lineGroup": [
              {
                "lineIdentifier": [
                  "string"
                ],
                "naptanIdReference": "string",
                "stationAtcoCode": "string"
              }
            ],
            "lineModeGroups": [
              {
                "lineIdentifier": [
                  "string"
                ],
                "modeName": "string"
              }
            ],
            "lines": [
              {
                "crowding": {
                  "passengerFlows": [
                    {
                      "timeSlice": "string",
                      "value": 0
                    }
                  ],
                  "trainLoadings": [
                    {
                      "direction": "string",
                      "line": "string",
                      "lineDirection": "string",
                      "naptanTo": "string",
                      "platformDirection": "string",
                      "timeSlice": "string",
                      "value": 0
                    }
                  ]
                },
                "fullName": "string",
                "id": "string",
                "motType": "string",
                "name": "string",
                "network": "string",
                "routeType": "Unknown",
                "status": "Unknown",
                "type": "string",
                "uri": "string"
              }
            ],
            "lon": 0,
            "modes": [
              "string"
            ],
            "naptanId": "string",
            "naptanMode": "string",
            "placeType": "string",
            "platformName": "string",
            "smsCode": "string",
            "stationNaptan": "string",
            "status": true,
            "stopLetter": "string",
            "stopType": "string",
            "url": "string"
          }
        ],
        "category": "Undefined",
        "categoryDescription": "string",
        "closureText": "string",
        "created": "1970-01-01T00:00:00Z",
        "description": "string",
        "lastUpdate": "1970-01-01T00:00:00Z",
        "summary": "string",
        "type": "string"
      }
    ],
    "id": "string",
    "lineStatuses": [
      {
        "created": "1970-01-01T00:00:00Z",
        "disruption": {
          "additionalInfo": "string",
          "affectedRoutes": [
            {
              "destinationName": "string",
              "direction": "string",
              "id": "string",
              "isEntireRouteSection": true,
              "lineId": "string",
              "lineString": "string",
              "name": "string",
              "originationName": "string",
              "routeCode": "string",
              "routeSectionNaptanEntrySequence": [
                {
                  "ordinal": 0,
                  "stopPoint": {
                    "accessibilitySummary": "string",
                    "additionalProperties": [
                      {
                        "category": "string",
                        "key": "string",
                        "modified": "1970-01-01T00:00:00Z",
                        "sourceSystemKey": "string",
                        "value": "string"
                      }
                    ],
                    "children": [
                      {
                        "additionalProperties": [
                          {
                            "category": "string",
                            "key": "string",
                            "modified": "1970-01-01T00:00:00Z",
                            "sourceSystemKey": "string",
                            "value": "string"
                          }
                        ],
                        "children": [
                          {}
                        ],
                        "childrenUrls": [
                          "string"
                        ],
                        "commonName": "string",
                        "distance": 0,
                        "id": "string",
                        "lat": 0,
                        "lon": 0,
                        "placeType": "string",
                        "url": "string"
                      }
                    ],
                    "childrenUrls": [
                      "string"
                    ],
                    "commonName": "string",
                    "distance": 0,
                    "fullName": "string",
                    "hubNaptanCode": "string",
                    "icsCode": "string",
                    "id": "string",
                    "indicator": "string",
                    "individualStopId": "string",
                    "lat": 0,
                    "lineGroup": [
                      {
                        "lineIdentifier": [
                          "string"
                        ],
                        "naptanIdReference": "string",
                        "stationAtcoCode": "string"
                      }
                    ],
                    "lineModeGroups": [
                      {
                        "lineIdentifier": [
                          "string"
                        ],
                        "modeName": "string"
                      }
                    ],
                    "lines": [
                      {
                        "crowding": {
                          "passengerFlows": [
                            {
                              "timeSlice": "string",
                              "value": 0
                            }
                          ],
                          "trainLoadings": [
                            {
                              "direction": "string",
                              "line": "string",
                              "lineDirection": "string",
                              "naptanTo": "string",
                              "platformDirection": "string",
                              "timeSlice": "string",
                              "value": 0
                            }
                          ]
                        },
                        "fullName": "string",
                        "id": "string",
                        "motType": "string",
                        "name": "string",
                        "network": "string",
                        "routeType": "Unknown",
                        "status": "Unknown",
                        "type": "string",
                        "uri": "string"
                      }
                    ],
                    "lon": 0,
                    "modes": [
                      "string"
                    ],
                    "naptanId": "string",
                    "naptanMode": "string",
                    "placeType": "string",
                    "platformName": "string",
                    "smsCode": "string",
                    "stationNaptan": "string",
                    "status": true,
                    "stopLetter": "string",
                    "stopType": "string",
                    "url": "string"
                  }
                }
              ],
              "validFrom": "1970-01-01T00:00:00Z",
              "validTo": "1970-01-01T00:00:00Z",
              "via": {
                "ordinal": 0,
                "stopPoint": {
                  "accessibilitySummary": "string",
                  "additionalProperties": [
                    {
                      "category": "string",
                      "key": "string",
                      "modified": "1970-01-01T00:00:00Z",
                      "sourceSystemKey": "string",
                      "value": "string"
                    }
                  ],
                  "children": [
                    {
                      "additionalProperties": [
                        {
                          "category": "string",
                          "key": "string",
                          "modified": "1970-01-01T00:00:00Z",
                          "sourceSystemKey": "string",
                          "value": "string"
                        }
                      ],
                      "children": [
                        {}
                      ],
                      "childrenUrls": [
                        "string"
                      ],
                      "commonName": "string",
                      "distance": 0,
                      "id": "string",
                      "lat": 0,
                      "lon": 0,
                      "placeType": "string",
                      "url": "string"
                    }
                  ],
                  "childrenUrls": [
                    "string"
                  ],
                  "commonName": "string",
                  "distance": 0,
                  "fullName": "string",
                  "hubNaptanCode": "string",
                  "icsCode": "string",
                  "id": "string",
                  "indicator": "string",
                  "individualStopId": "string",
                  "lat": 0,
                  "lineGroup": [
                    {
                      "lineIdentifier": [
                        "string"
                      ],
                      "naptanIdReference": "string",
                      "stationAtcoCode": "string"
                    }
                  ],
                  "lineModeGroups": [
                    {
                      "lineIdentifier": [
                        "string"
                      ],
                      "modeName": "string"
                    }
                  ],
                  "lines": [
                    {
                      "crowding": {
                        "passengerFlows": [
                          {
                            "timeSlice": "string",
                            "value": 0
                          }
                        ],
                        "trainLoadings": [
                          {
                            "direction": "string",
                            "line": "string",
                            "lineDirection": "string",
                            "naptanTo": "string",
                            "platformDirection": "string",
                            "timeSlice": "string",
                            "value": 0
                          }
                        ]
                      },
                      "fullName": "string",
                      "id": "string",
                      "motType": "string",
                      "name": "string",
                      "network": "string",
                      "routeType": "Unknown",
                      "status": "Unknown",
                      "type": "string",
                      "uri": "string"
                    }
                  ],
                  "lon": 0,
                  "modes": [
                    "string"
                  ],
                  "naptanId": "string",
                  "naptanMode": "string",
                  "placeType": "string",
                  "platformName": "string",
                  "smsCode": "string",
                  "stationNaptan": "string",
                  "status": true,
                  "stopLetter": "string",
                  "stopType": "string",
                  "url": "string"
                }
              }
            }
          ],
          "affectedStops": [
            {
              "accessibilitySummary": "string",
              "additionalProperties": [
                {
                  "category": "string",
                  "key": "string",
                  "modified": "1970-01-01T00:00:00Z",
                  "sourceSystemKey": "string",
                  "value": "string"
                }
              ],
              "children": [
                {
                  "additionalProperties": [
                    {
                      "category": "string",
                      "key": "string",
                      "modified": "1970-01-01T00:00:00Z",
                      "sourceSystemKey": "string",
                      "value": "string"
                    }
                  ],
                  "children": [
                    {}
                  ],
                  "childrenUrls": [
                    "string"
                  ],
                  "commonName": "string",
                  "distance": 0,
                  "id": "string",
                  "lat": 0,
                  "lon": 0,
                  "placeType": "string",
                  "url": "string"
                }
              ],
              "childrenUrls": [
                "string"
              ],
              "commonName": "string",
              "distance": 0,
              "fullName": "string",
              "hubNaptanCode": "string",
              "icsCode": "string",
              "id": "string",
              "indicator": "string",
              "individualStopId": "string",
              "lat": 0,
              "lineGroup": [
                {
                  "lineIdentifier": [
                    "string"
                  ],
                  "naptanIdReference": "string",
                  "stationAtcoCode": "string"
                }
              ],
              "lineModeGroups": [
                {
                  "lineIdentifier": [
                    "string"
                  ],
                  "modeName": "string"
                }
              ],
              "lines": [
                {
                  "crowding": {
                    "passengerFlows": [
                      {
                        "timeSlice": "string",
                        "value": 0
                      }
                    ],
                    "trainLoadings": [
                      {
                        "direction": "string",
                        "line": "string",
                        "lineDirection": "string",
                        "naptanTo": "string",
                        "platformDirection": "string",
                        "timeSlice": "string",
                        "value": 0
                      }
                    ]
                  },
                  "fullName": "string",
                  "id": "string",
                  "motType": "string",
                  "name": "string",
                  "network": "string",
                  "routeType": "Unknown",
                  "status": "Unknown",
                  "type": "string",
                  "uri": "string"
                }
              ],
              "lon": 0,
              "modes": [
                "string"
              ],
              "naptanId": "string",
              "naptanMode": "string",
              "placeType": "string",
              "platformName": "string",
              "smsCode": "string",
              "stationNaptan": "string",
              "status": true,
              "stopLetter": "string",
              "stopType": "string",
              "url": "string"
            }
          ],
          "category": "Undefined",
          "categoryDescription": "string",
          "closureText": "string",
          "created": "1970-01-01T00:00:00Z",
          "description": "string",
          "lastUpdate": "1970-01-01T00:00:00Z",
          "summary": "string",
          "type": "string"
        },
        "id": 0,
        "lineId": "string",
        "modified": "1970-01-01T00:00:00Z",
        "reason": "string",
        "statusSeverity": 0,
        "statusSeverityDescription": "string",
        "validityPeriods": [
          {
            "fromDate": "1970-01-01T00:00:00Z",
            "isNow": true,
            "toDate": "1970-01-01T00:00:00Z"
          }
        ]
      }
    ],
    "modeName": "string",
    "modified": "1970-01-01T00:00:00Z",
    "name": "string",
    "routeSections": [
      {
        "destination": "string",
        "destinationName": "string",
        "direction": "string",
        "name": "string",
        "originationName": "string",
        "originator": "string",
        "routeCode": "string",
        "serviceType": "string",
        "validFrom": "1970-01-01T00:00:00Z",
        "validTo": "1970-01-01T00:00:00Z"
      }
    ],
    "serviceTypes": [
      {
        "name": "string",
        "uri": "string"
      }
    ]
  }
]
```

<h3 id="gets-lines-that-serve-the-given-modes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="gets-lines-that-serve-the-given-modes-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Tfl.Api.Presentation.Entities.Line](#schematfl.api.presentation.entities.line)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get disruptions for all lines of the given modes.

<a id="opIdLine_DisruptionByMode"></a>

> Code samples

```bash
curl https://example.com/Line/Mode/string/Disruption \
  -H 'Accept: application/json'
```

`GET /Line/Mode/{modes}/Disruption`

<h3 id="get-disruptions-for-all-lines-of-the-given-modes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|modes|path|[string]|true|A comma-separated list of modes e.g. tube,dlr|

> Example responses

> 200 Response

```json
[
  {
    "additionalInfo": "string",
    "affectedRoutes": [
      {
        "destinationName": "string",
        "direction": "string",
        "id": "string",
        "isEntireRouteSection": true,
        "lineId": "string",
        "lineString": "string",
        "name": "string",
        "originationName": "string",
        "routeCode": "string",
        "routeSectionNaptanEntrySequence": [
          {
            "ordinal": 0,
            "stopPoint": {
              "accessibilitySummary": "string",
              "additionalProperties": [
                {
                  "category": "string",
                  "key": "string",
                  "modified": "1970-01-01T00:00:00Z",
                  "sourceSystemKey": "string",
                  "value": "string"
                }
              ],
              "children": [
                {
                  "additionalProperties": [
                    {
                      "category": "string",
                      "key": "string",
                      "modified": "1970-01-01T00:00:00Z",
                      "sourceSystemKey": "string",
                      "value": "string"
                    }
                  ],
                  "children": [
                    {}
                  ],
                  "childrenUrls": [
                    "string"
                  ],
                  "commonName": "string",
                  "distance": 0,
                  "id": "string",
                  "lat": 0,
                  "lon": 0,
                  "placeType": "string",
                  "url": "string"
                }
              ],
              "childrenUrls": [
                "string"
              ],
              "commonName": "string",
              "distance": 0,
              "fullName": "string",
              "hubNaptanCode": "string",
              "icsCode": "string",
              "id": "string",
              "indicator": "string",
              "individualStopId": "string",
              "lat": 0,
              "lineGroup": [
                {
                  "lineIdentifier": [
                    "string"
                  ],
                  "naptanIdReference": "string",
                  "stationAtcoCode": "string"
                }
              ],
              "lineModeGroups": [
                {
                  "lineIdentifier": [
                    "string"
                  ],
                  "modeName": "string"
                }
              ],
              "lines": [
                {
                  "crowding": {
                    "passengerFlows": [
                      {
                        "timeSlice": "string",
                        "value": 0
                      }
                    ],
                    "trainLoadings": [
                      {
                        "direction": "string",
                        "line": "string",
                        "lineDirection": "string",
                        "naptanTo": "string",
                        "platformDirection": "string",
                        "timeSlice": "string",
                        "value": 0
                      }
                    ]
                  },
                  "fullName": "string",
                  "id": "string",
                  "motType": "string",
                  "name": "string",
                  "network": "string",
                  "routeType": "Unknown",
                  "status": "Unknown",
                  "type": "string",
                  "uri": "string"
                }
              ],
              "lon": 0,
              "modes": [
                "string"
              ],
              "naptanId": "string",
              "naptanMode": "string",
              "placeType": "string",
              "platformName": "string",
              "smsCode": "string",
              "stationNaptan": "string",
              "status": true,
              "stopLetter": "string",
              "stopType": "string",
              "url": "string"
            }
          }
        ],
        "validFrom": "1970-01-01T00:00:00Z",
        "validTo": "1970-01-01T00:00:00Z",
        "via": {
          "ordinal": 0,
          "stopPoint": {
            "accessibilitySummary": "string",
            "additionalProperties": [
              {
                "category": "string",
                "key": "string",
                "modified": "1970-01-01T00:00:00Z",
                "sourceSystemKey": "string",
                "value": "string"
              }
            ],
            "children": [
              {
                "additionalProperties": [
                  {
                    "category": "string",
                    "key": "string",
                    "modified": "1970-01-01T00:00:00Z",
                    "sourceSystemKey": "string",
                    "value": "string"
                  }
                ],
                "children": [
                  {}
                ],
                "childrenUrls": [
                  "string"
                ],
                "commonName": "string",
                "distance": 0,
                "id": "string",
                "lat": 0,
                "lon": 0,
                "placeType": "string",
                "url": "string"
              }
            ],
            "childrenUrls": [
              "string"
            ],
            "commonName": "string",
            "distance": 0,
            "fullName": "string",
            "hubNaptanCode": "string",
            "icsCode": "string",
            "id": "string",
            "indicator": "string",
            "individualStopId": "string",
            "lat": 0,
            "lineGroup": [
              {
                "lineIdentifier": [
                  "string"
                ],
                "naptanIdReference": "string",
                "stationAtcoCode": "string"
              }
            ],
            "lineModeGroups": [
              {
                "lineIdentifier": [
                  "string"
                ],
                "modeName": "string"
              }
            ],
            "lines": [
              {
                "crowding": {
                  "passengerFlows": [
                    {
                      "timeSlice": "string",
                      "value": 0
                    }
                  ],
                  "trainLoadings": [
                    {
                      "direction": "string",
                      "line": "string",
                      "lineDirection": "string",
                      "naptanTo": "string",
                      "platformDirection": "string",
                      "timeSlice": "string",
                      "value": 0
                    }
                  ]
                },
                "fullName": "string",
                "id": "string",
                "motType": "string",
                "name": "string",
                "network": "string",
                "routeType": "Unknown",
                "status": "Unknown",
                "type": "string",
                "uri": "string"
              }
            ],
            "lon": 0,
            "modes": [
              "string"
            ],
            "naptanId": "string",
            "naptanMode": "string",
            "placeType": "string",
            "platformName": "string",
            "smsCode": "string",
            "stationNaptan": "string",
            "status": true,
            "stopLetter": "string",
            "stopType": "string",
            "url": "string"
          }
        }
      }
    ],
    "affectedStops": [
      {
        "accessibilitySummary": "string",
        "additionalProperties": [
          {
            "category": "string",
            "key": "string",
            "modified": "1970-01-01T00:00:00Z",
            "sourceSystemKey": "string",
            "value": "string"
          }
        ],
        "children": [
          {
            "additionalProperties": [
              {
                "category": "string",
                "key": "string",
                "modified": "1970-01-01T00:00:00Z",
                "sourceSystemKey": "string",
                "value": "string"
              }
            ],
            "children": [
              {}
            ],
            "childrenUrls": [
              "string"
            ],
            "commonName": "string",
            "distance": 0,
            "id": "string",
            "lat": 0,
            "lon": 0,
            "placeType": "string",
            "url": "string"
          }
        ],
        "childrenUrls": [
          "string"
        ],
        "commonName": "string",
        "distance": 0,
        "fullName": "string",
        "hubNaptanCode": "string",
        "icsCode": "string",
        "id": "string",
        "indicator": "string",
        "individualStopId": "string",
        "lat": 0,
        "lineGroup": [
          {
            "lineIdentifier": [
              "string"
            ],
            "naptanIdReference": "string",
            "stationAtcoCode": "string"
          }
        ],
        "lineModeGroups": [
          {
            "lineIdentifier": [
              "string"
            ],
            "modeName": "string"
          }
        ],
        "lines": [
          {
            "crowding": {
              "passengerFlows": [
                {
                  "timeSlice": "string",
                  "value": 0
                }
              ],
              "trainLoadings": [
                {
                  "direction": "string",
                  "line": "string",
                  "lineDirection": "string",
                  "naptanTo": "string",
                  "platformDirection": "string",
                  "timeSlice": "string",
                  "value": 0
                }
              ]
            },
            "fullName": "string",
            "id": "string",
            "motType": "string",
            "name": "string",
            "network": "string",
            "routeType": "Unknown",
            "status": "Unknown",
            "type": "string",
            "uri": "string"
          }
        ],
        "lon": 0,
        "modes": [
          "string"
        ],
        "naptanId": "string",
        "naptanMode": "string",
        "placeType": "string",
        "platformName": "string",
        "smsCode": "string",
        "stationNaptan": "string",
        "status": true,
        "stopLetter": "string",
        "stopType": "string",
        "url": "string"
      }
    ],
    "category": "Undefined",
    "categoryDescription": "string",
    "closureText": "string",
    "created": "1970-01-01T00:00:00Z",
    "description": "string",
    "lastUpdate": "1970-01-01T00:00:00Z",
    "summary": "string",
    "type": "string"
  }
]
```

<h3 id="get-disruptions-for-all-lines-of-the-given-modes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-disruptions-for-all-lines-of-the-given-modes-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Tfl.Api.Presentation.Entities.Disruption](#schematfl.api.presentation.entities.disruption)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Gets all lines and their valid routes for given modes, including the name and id of the originating and terminating stops for each route

<a id="opIdLine_RouteByMode"></a>

> Code samples

```bash
curl https://example.com/Line/Mode/string/Route \
  -H 'Accept: application/json'
```

`GET /Line/Mode/{modes}/Route`

<h3 id="gets-all-lines-and-their-valid-routes-for-given-modes-including-the-name-and-id-of-the-originating-and-terminating-stops-for-each-route-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|modes|path|[string]|true|A comma-separated list of modes e.g. tube,dlr|
|serviceTypes|query|[string]|false|A comma seperated list of service types to filter on. Supported values: Regular, Night. Defaulted to 'Regular' if not specified|

#### Enumerated Values

|Parameter|Value|
|---|---|
|serviceTypes|Regular|
|serviceTypes|Night|

> Example responses

> 200 Response

```json
[
  {
    "created": "1970-01-01T00:00:00Z",
    "crowding": {
      "passengerFlows": [
        {
          "timeSlice": "string",
          "value": 0
        }
      ],
      "trainLoadings": [
        {
          "direction": "string",
          "line": "string",
          "lineDirection": "string",
          "naptanTo": "string",
          "platformDirection": "string",
          "timeSlice": "string",
          "value": 0
        }
      ]
    },
    "disruptions": [
      {
        "additionalInfo": "string",
        "affectedRoutes": [
          {
            "destinationName": "string",
            "direction": "string",
            "id": "string",
            "isEntireRouteSection": true,
            "lineId": "string",
            "lineString": "string",
            "name": "string",
            "originationName": "string",
            "routeCode": "string",
            "routeSectionNaptanEntrySequence": [
              {
                "ordinal": 0,
                "stopPoint": {
                  "accessibilitySummary": "string",
                  "additionalProperties": [
                    {
                      "category": "string",
                      "key": "string",
                      "modified": "1970-01-01T00:00:00Z",
                      "sourceSystemKey": "string",
                      "value": "string"
                    }
                  ],
                  "children": [
                    {
                      "additionalProperties": [
                        {
                          "category": "string",
                          "key": "string",
                          "modified": "1970-01-01T00:00:00Z",
                          "sourceSystemKey": "string",
                          "value": "string"
                        }
                      ],
                      "children": [
                        {}
                      ],
                      "childrenUrls": [
                        "string"
                      ],
                      "commonName": "string",
                      "distance": 0,
                      "id": "string",
                      "lat": 0,
                      "lon": 0,
                      "placeType": "string",
                      "url": "string"
                    }
                  ],
                  "childrenUrls": [
                    "string"
                  ],
                  "commonName": "string",
                  "distance": 0,
                  "fullName": "string",
                  "hubNaptanCode": "string",
                  "icsCode": "string",
                  "id": "string",
                  "indicator": "string",
                  "individualStopId": "string",
                  "lat": 0,
                  "lineGroup": [
                    {
                      "lineIdentifier": [
                        "string"
                      ],
                      "naptanIdReference": "string",
                      "stationAtcoCode": "string"
                    }
                  ],
                  "lineModeGroups": [
                    {
                      "lineIdentifier": [
                        "string"
                      ],
                      "modeName": "string"
                    }
                  ],
                  "lines": [
                    {
                      "crowding": {
                        "passengerFlows": [
                          {
                            "timeSlice": "string",
                            "value": 0
                          }
                        ],
                        "trainLoadings": [
                          {
                            "direction": "string",
                            "line": "string",
                            "lineDirection": "string",
                            "naptanTo": "string",
                            "platformDirection": "string",
                            "timeSlice": "string",
                            "value": 0
                          }
                        ]
                      },
                      "fullName": "string",
                      "id": "string",
                      "motType": "string",
                      "name": "string",
                      "network": "string",
                      "routeType": "Unknown",
                      "status": "Unknown",
                      "type": "string",
                      "uri": "string"
                    }
                  ],
                  "lon": 0,
                  "modes": [
                    "string"
                  ],
                  "naptanId": "string",
                  "naptanMode": "string",
                  "placeType": "string",
                  "platformName": "string",
                  "smsCode": "string",
                  "stationNaptan": "string",
                  "status": true,
                  "stopLetter": "string",
                  "stopType": "string",
                  "url": "string"
                }
              }
            ],
            "validFrom": "1970-01-01T00:00:00Z",
            "validTo": "1970-01-01T00:00:00Z",
            "via": {
              "ordinal": 0,
              "stopPoint": {
                "accessibilitySummary": "string",
                "additionalProperties": [
                  {
                    "category": "string",
                    "key": "string",
                    "modified": "1970-01-01T00:00:00Z",
                    "sourceSystemKey": "string",
                    "value": "string"
                  }
                ],
                "children": [
                  {
                    "additionalProperties": [
                      {
                        "category": "string",
                        "key": "string",
                        "modified": "1970-01-01T00:00:00Z",
                        "sourceSystemKey": "string",
                        "value": "string"
                      }
                    ],
                    "children": [
                      {}
                    ],
                    "childrenUrls": [
                      "string"
                    ],
                    "commonName": "string",
                    "distance": 0,
                    "id": "string",
                    "lat": 0,
                    "lon": 0,
                    "placeType": "string",
                    "url": "string"
                  }
                ],
                "childrenUrls": [
                  "string"
                ],
                "commonName": "string",
                "distance": 0,
                "fullName": "string",
                "hubNaptanCode": "string",
                "icsCode": "string",
                "id": "string",
                "indicator": "string",
                "individualStopId": "string",
                "lat": 0,
                "lineGroup": [
                  {
                    "lineIdentifier": [
                      "string"
                    ],
                    "naptanIdReference": "string",
                    "stationAtcoCode": "string"
                  }
                ],
                "lineModeGroups": [
                  {
                    "lineIdentifier": [
                      "string"
                    ],
                    "modeName": "string"
                  }
                ],
                "lines": [
                  {
                    "crowding": {
                      "passengerFlows": [
                        {
                          "timeSlice": "string",
                          "value": 0
                        }
                      ],
                      "trainLoadings": [
                        {
                          "direction": "string",
                          "line": "string",
                          "lineDirection": "string",
                          "naptanTo": "string",
                          "platformDirection": "string",
                          "timeSlice": "string",
                          "value": 0
                        }
                      ]
                    },
                    "fullName": "string",
                    "id": "string",
                    "motType": "string",
                    "name": "string",
                    "network": "string",
                    "routeType": "Unknown",
                    "status": "Unknown",
                    "type": "string",
                    "uri": "string"
                  }
                ],
                "lon": 0,
                "modes": [
                  "string"
                ],
                "naptanId": "string",
                "naptanMode": "string",
                "placeType": "string",
                "platformName": "string",
                "smsCode": "string",
                "stationNaptan": "string",
                "status": true,
                "stopLetter": "string",
                "stopType": "string",
                "url": "string"
              }
            }
          }
        ],
        "affectedStops": [
          {
            "accessibilitySummary": "string",
            "additionalProperties": [
              {
                "category": "string",
                "key": "string",
                "modified": "1970-01-01T00:00:00Z",
                "sourceSystemKey": "string",
                "value": "string"
              }
            ],
            "children": [
              {
                "additionalProperties": [
                  {
                    "category": "string",
                    "key": "string",
                    "modified": "1970-01-01T00:00:00Z",
                    "sourceSystemKey": "string",
                    "value": "string"
                  }
                ],
                "children": [
                  {}
                ],
                "childrenUrls": [
                  "string"
                ],
                "commonName": "string",
                "distance": 0,
                "id": "string",
                "lat": 0,
                "lon": 0,
                "placeType": "string",
                "url": "string"
              }
            ],
            "childrenUrls": [
              "string"
            ],
            "commonName": "string",
            "distance": 0,
            "fullName": "string",
            "hubNaptanCode": "string",
            "icsCode": "string",
            "id": "string",
            "indicator": "string",
            "individualStopId": "string",
            "lat": 0,
            "lineGroup": [
              {
                "lineIdentifier": [
                  "string"
                ],
                "naptanIdReference": "string",
                "stationAtcoCode": "string"
              }
            ],
            "lineModeGroups": [
              {
                "lineIdentifier": [
                  "string"
                ],
                "modeName": "string"
              }
            ],
            "lines": [
              {
                "crowding": {
                  "passengerFlows": [
                    {
                      "timeSlice": "string",
                      "value": 0
                    }
                  ],
                  "trainLoadings": [
                    {
                      "direction": "string",
                      "line": "string",
                      "lineDirection": "string",
                      "naptanTo": "string",
                      "platformDirection": "string",
                      "timeSlice": "string",
                      "value": 0
                    }
                  ]
                },
                "fullName": "string",
                "id": "string",
                "motType": "string",
                "name": "string",
                "network": "string",
                "routeType": "Unknown",
                "status": "Unknown",
                "type": "string",
                "uri": "string"
              }
            ],
            "lon": 0,
            "modes": [
              "string"
            ],
            "naptanId": "string",
            "naptanMode": "string",
            "placeType": "string",
            "platformName": "string",
            "smsCode": "string",
            "stationNaptan": "string",
            "status": true,
            "stopLetter": "string",
            "stopType": "string",
            "url": "string"
          }
        ],
        "category": "Undefined",
        "categoryDescription": "string",
        "closureText": "string",
        "created": "1970-01-01T00:00:00Z",
        "description": "string",
        "lastUpdate": "1970-01-01T00:00:00Z",
        "summary": "string",
        "type": "string"
      }
    ],
    "id": "string",
    "lineStatuses": [
      {
        "created": "1970-01-01T00:00:00Z",
        "disruption": {
          "additionalInfo": "string",
          "affectedRoutes": [
            {
              "destinationName": "string",
              "direction": "string",
              "id": "string",
              "isEntireRouteSection": true,
              "lineId": "string",
              "lineString": "string",
              "name": "string",
              "originationName": "string",
              "routeCode": "string",
              "routeSectionNaptanEntrySequence": [
                {
                  "ordinal": 0,
                  "stopPoint": {
                    "accessibilitySummary": "string",
                    "additionalProperties": [
                      {
                        "category": "string",
                        "key": "string",
                        "modified": "1970-01-01T00:00:00Z",
                        "sourceSystemKey": "string",
                        "value": "string"
                      }
                    ],
                    "children": [
                      {
                        "additionalProperties": [
                          {
                            "category": "string",
                            "key": "string",
                            "modified": "1970-01-01T00:00:00Z",
                            "sourceSystemKey": "string",
                            "value": "string"
                          }
                        ],
                        "children": [
                          {}
                        ],
                        "childrenUrls": [
                          "string"
                        ],
                        "commonName": "string",
                        "distance": 0,
                        "id": "string",
                        "lat": 0,
                        "lon": 0,
                        "placeType": "string",
                        "url": "string"
                      }
                    ],
                    "childrenUrls": [
                      "string"
                    ],
                    "commonName": "string",
                    "distance": 0,
                    "fullName": "string",
                    "hubNaptanCode": "string",
                    "icsCode": "string",
                    "id": "string",
                    "indicator": "string",
                    "individualStopId": "string",
                    "lat": 0,
                    "lineGroup": [
                      {
                        "lineIdentifier": [
                          "string"
                        ],
                        "naptanIdReference": "string",
                        "stationAtcoCode": "string"
                      }
                    ],
                    "lineModeGroups": [
                      {
                        "lineIdentifier": [
                          "string"
                        ],
                        "modeName": "string"
                      }
                    ],
                    "lines": [
                      {
                        "crowding": {
                          "passengerFlows": [
                            {
                              "timeSlice": "string",
                              "value": 0
                            }
                          ],
                          "trainLoadings": [
                            {
                              "direction": "string",
                              "line": "string",
                              "lineDirection": "string",
                              "naptanTo": "string",
                              "platformDirection": "string",
                              "timeSlice": "string",
                              "value": 0
                            }
                          ]
                        },
                        "fullName": "string",
                        "id": "string",
                        "motType": "string",
                        "name": "string",
                        "network": "string",
                        "routeType": "Unknown",
                        "status": "Unknown",
                        "type": "string",
                        "uri": "string"
                      }
                    ],
                    "lon": 0,
                    "modes": [
                      "string"
                    ],
                    "naptanId": "string",
                    "naptanMode": "string",
                    "placeType": "string",
                    "platformName": "string",
                    "smsCode": "string",
                    "stationNaptan": "string",
                    "status": true,
                    "stopLetter": "string",
                    "stopType": "string",
                    "url": "string"
                  }
                }
              ],
              "validFrom": "1970-01-01T00:00:00Z",
              "validTo": "1970-01-01T00:00:00Z",
              "via": {
                "ordinal": 0,
                "stopPoint": {
                  "accessibilitySummary": "string",
                  "additionalProperties": [
                    {
                      "category": "string",
                      "key": "string",
                      "modified": "1970-01-01T00:00:00Z",
                      "sourceSystemKey": "string",
                      "value": "string"
                    }
                  ],
                  "children": [
                    {
                      "additionalProperties": [
                        {
                          "category": "string",
                          "key": "string",
                          "modified": "1970-01-01T00:00:00Z",
                          "sourceSystemKey": "string",
                          "value": "string"
                        }
                      ],
                      "children": [
                        {}
                      ],
                      "childrenUrls": [
                        "string"
                      ],
                      "commonName": "string",
                      "distance": 0,
                      "id": "string",
                      "lat": 0,
                      "lon": 0,
                      "placeType": "string",
                      "url": "string"
                    }
                  ],
                  "childrenUrls": [
                    "string"
                  ],
                  "commonName": "string",
                  "distance": 0,
                  "fullName": "string",
                  "hubNaptanCode": "string",
                  "icsCode": "string",
                  "id": "string",
                  "indicator": "string",
                  "individualStopId": "string",
                  "lat": 0,
                  "lineGroup": [
                    {
                      "lineIdentifier": [
                        "string"
                      ],
                      "naptanIdReference": "string",
                      "stationAtcoCode": "string"
                    }
                  ],
                  "lineModeGroups": [
                    {
                      "lineIdentifier": [
                        "string"
                      ],
                      "modeName": "string"
                    }
                  ],
                  "lines": [
                    {
                      "crowding": {
                        "passengerFlows": [
                          {
                            "timeSlice": "string",
                            "value": 0
                          }
                        ],
                        "trainLoadings": [
                          {
                            "direction": "string",
                            "line": "string",
                            "lineDirection": "string",
                            "naptanTo": "string",
                            "platformDirection": "string",
                            "timeSlice": "string",
                            "value": 0
                          }
                        ]
                      },
                      "fullName": "string",
                      "id": "string",
                      "motType": "string",
                      "name": "string",
                      "network": "string",
                      "routeType": "Unknown",
                      "status": "Unknown",
                      "type": "string",
                      "uri": "string"
                    }
                  ],
                  "lon": 0,
                  "modes": [
                    "string"
                  ],
                  "naptanId": "string",
                  "naptanMode": "string",
                  "placeType": "string",
                  "platformName": "string",
                  "smsCode": "string",
                  "stationNaptan": "string",
                  "status": true,
                  "stopLetter": "string",
                  "stopType": "string",
                  "url": "string"
                }
              }
            }
          ],
          "affectedStops": [
            {
              "accessibilitySummary": "string",
              "additionalProperties": [
                {
                  "category": "string",
                  "key": "string",
                  "modified": "1970-01-01T00:00:00Z",
                  "sourceSystemKey": "string",
                  "value": "string"
                }
              ],
              "children": [
                {
                  "additionalProperties": [
                    {
                      "category": "string",
                      "key": "string",
                      "modified": "1970-01-01T00:00:00Z",
                      "sourceSystemKey": "string",
                      "value": "string"
                    }
                  ],
                  "children": [
                    {}
                  ],
                  "childrenUrls": [
                    "string"
                  ],
                  "commonName": "string",
                  "distance": 0,
                  "id": "string",
                  "lat": 0,
                  "lon": 0,
                  "placeType": "string",
                  "url": "string"
                }
              ],
              "childrenUrls": [
                "string"
              ],
              "commonName": "string",
              "distance": 0,
              "fullName": "string",
              "hubNaptanCode": "string",
              "icsCode": "string",
              "id": "string",
              "indicator": "string",
              "individualStopId": "string",
              "lat": 0,
              "lineGroup": [
                {
                  "lineIdentifier": [
                    "string"
                  ],
                  "naptanIdReference": "string",
                  "stationAtcoCode": "string"
                }
              ],
              "lineModeGroups": [
                {
                  "lineIdentifier": [
                    "string"
                  ],
                  "modeName": "string"
                }
              ],
              "lines": [
                {
                  "crowding": {
                    "passengerFlows": [
                      {
                        "timeSlice": "string",
                        "value": 0
                      }
                    ],
                    "trainLoadings": [
                      {
                        "direction": "string",
                        "line": "string",
                        "lineDirection": "string",
                        "naptanTo": "string",
                        "platformDirection": "string",
                        "timeSlice": "string",
                        "value": 0
                      }
                    ]
                  },
                  "fullName": "string",
                  "id": "string",
                  "motType": "string",
                  "name": "string",
                  "network": "string",
                  "routeType": "Unknown",
                  "status": "Unknown",
                  "type": "string",
                  "uri": "string"
                }
              ],
              "lon": 0,
              "modes": [
                "string"
              ],
              "naptanId": "string",
              "naptanMode": "string",
              "placeType": "string",
              "platformName": "string",
              "smsCode": "string",
              "stationNaptan": "string",
              "status": true,
              "stopLetter": "string",
              "stopType": "string",
              "url": "string"
            }
          ],
          "category": "Undefined",
          "categoryDescription": "string",
          "closureText": "string",
          "created": "1970-01-01T00:00:00Z",
          "description": "string",
          "lastUpdate": "1970-01-01T00:00:00Z",
          "summary": "string",
          "type": "string"
        },
        "id": 0,
        "lineId": "string",
        "modified": "1970-01-01T00:00:00Z",
        "reason": "string",
        "statusSeverity": 0,
        "statusSeverityDescription": "string",
        "validityPeriods": [
          {
            "fromDate": "1970-01-01T00:00:00Z",
            "isNow": true,
            "toDate": "1970-01-01T00:00:00Z"
          }
        ]
      }
    ],
    "modeName": "string",
    "modified": "1970-01-01T00:00:00Z",
    "name": "string",
    "routeSections": [
      {
        "destination": "string",
        "destinationName": "string",
        "direction": "string",
        "name": "string",
        "originationName": "string",
        "originator": "string",
        "routeCode": "string",
        "serviceType": "string",
        "validFrom": "1970-01-01T00:00:00Z",
        "validTo": "1970-01-01T00:00:00Z"
      }
    ],
    "serviceTypes": [
      {
        "name": "string",
        "uri": "string"
      }
    ]
  }
]
```

<h3 id="gets-all-lines-and-their-valid-routes-for-given-modes-including-the-name-and-id-of-the-originating-and-terminating-stops-for-each-route-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="gets-all-lines-and-their-valid-routes-for-given-modes-including-the-name-and-id-of-the-originating-and-terminating-stops-for-each-route-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Tfl.Api.Presentation.Entities.Line](#schematfl.api.presentation.entities.line)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Gets the line status of for all lines for the given modes

<a id="opIdLine_StatusByMode"></a>

> Code samples

```bash
curl https://example.com/Line/Mode/string/Status \
  -H 'Accept: application/json'
```

`GET /Line/Mode/{modes}/Status`

<h3 id="gets-the-line-status-of-for-all-lines-for-the-given-modes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|modes|path|[string]|true|A comma-separated list of modes to filter by. e.g. tube,dlr|
|detail|query|boolean|false|Include details of the disruptions that are causing the line status including the affected stops and routes|
|severityLevel|query|string|false|If specified, ensures that only those line status(es) are returned within the lines that have disruptions with the matching severity level.|

> Example responses

> 200 Response

```json
[
  {
    "created": "1970-01-01T00:00:00Z",
    "crowding": {
      "passengerFlows": [
        {
          "timeSlice": "string",
          "value": 0
        }
      ],
      "trainLoadings": [
        {
          "direction": "string",
          "line": "string",
          "lineDirection": "string",
          "naptanTo": "string",
          "platformDirection": "string",
          "timeSlice": "string",
          "value": 0
        }
      ]
    },
    "disruptions": [
      {
        "additionalInfo": "string",
        "affectedRoutes": [
          {
            "destinationName": "string",
            "direction": "string",
            "id": "string",
            "isEntireRouteSection": true,
            "lineId": "string",
            "lineString": "string",
            "name": "string",
            "originationName": "string",
            "routeCode": "string",
            "routeSectionNaptanEntrySequence": [
              {
                "ordinal": 0,
                "stopPoint": {
                  "accessibilitySummary": "string",
                  "additionalProperties": [
                    {
                      "category": "string",
                      "key": "string",
                      "modified": "1970-01-01T00:00:00Z",
                      "sourceSystemKey": "string",
                      "value": "string"
                    }
                  ],
                  "children": [
                    {
                      "additionalProperties": [
                        {
                          "category": "string",
                          "key": "string",
                          "modified": "1970-01-01T00:00:00Z",
                          "sourceSystemKey": "string",
                          "value": "string"
                        }
                      ],
                      "children": [
                        {}
                      ],
                      "childrenUrls": [
                        "string"
                      ],
                      "commonName": "string",
                      "distance": 0,
                      "id": "string",
                      "lat": 0,
                      "lon": 0,
                      "placeType": "string",
                      "url": "string"
                    }
                  ],
                  "childrenUrls": [
                    "string"
                  ],
                  "commonName": "string",
                  "distance": 0,
                  "fullName": "string",
                  "hubNaptanCode": "string",
                  "icsCode": "string",
                  "id": "string",
                  "indicator": "string",
                  "individualStopId": "string",
                  "lat": 0,
                  "lineGroup": [
                    {
                      "lineIdentifier": [
                        "string"
                      ],
                      "naptanIdReference": "string",
                      "stationAtcoCode": "string"
                    }
                  ],
                  "lineModeGroups": [
                    {
                      "lineIdentifier": [
                        "string"
                      ],
                      "modeName": "string"
                    }
                  ],
                  "lines": [
                    {
                      "crowding": {
                        "passengerFlows": [
                          {
                            "timeSlice": "string",
                            "value": 0
                          }
                        ],
                        "trainLoadings": [
                          {
                            "direction": "string",
                            "line": "string",
                            "lineDirection": "string",
                            "naptanTo": "string",
                            "platformDirection": "string",
                            "timeSlice": "string",
                            "value": 0
                          }
                        ]
                      },
                      "fullName": "string",
                      "id": "string",
                      "motType": "string",
                      "name": "string",
                      "network": "string",
                      "routeType": "Unknown",
                      "status": "Unknown",
                      "type": "string",
                      "uri": "string"
                    }
                  ],
                  "lon": 0,
                  "modes": [
                    "string"
                  ],
                  "naptanId": "string",
                  "naptanMode": "string",
                  "placeType": "string",
                  "platformName": "string",
                  "smsCode": "string",
                  "stationNaptan": "string",
                  "status": true,
                  "stopLetter": "string",
                  "stopType": "string",
                  "url": "string"
                }
              }
            ],
            "validFrom": "1970-01-01T00:00:00Z",
            "validTo": "1970-01-01T00:00:00Z",
            "via": {
              "ordinal": 0,
              "stopPoint": {
                "accessibilitySummary": "string",
                "additionalProperties": [
                  {
                    "category": "string",
                    "key": "string",
                    "modified": "1970-01-01T00:00:00Z",
                    "sourceSystemKey": "string",
                    "value": "string"
                  }
                ],
                "children": [
                  {
                    "additionalProperties": [
                      {
                        "category": "string",
                        "key": "string",
                        "modified": "1970-01-01T00:00:00Z",
                        "sourceSystemKey": "string",
                        "value": "string"
                      }
                    ],
                    "children": [
                      {}
                    ],
                    "childrenUrls": [
                      "string"
                    ],
                    "commonName": "string",
                    "distance": 0,
                    "id": "string",
                    "lat": 0,
                    "lon": 0,
                    "placeType": "string",
                    "url": "string"
                  }
                ],
                "childrenUrls": [
                  "string"
                ],
                "commonName": "string",
                "distance": 0,
                "fullName": "string",
                "hubNaptanCode": "string",
                "icsCode": "string",
                "id": "string",
                "indicator": "string",
                "individualStopId": "string",
                "lat": 0,
                "lineGroup": [
                  {
                    "lineIdentifier": [
                      "string"
                    ],
                    "naptanIdReference": "string",
                    "stationAtcoCode": "string"
                  }
                ],
                "lineModeGroups": [
                  {
                    "lineIdentifier": [
                      "string"
                    ],
                    "modeName": "string"
                  }
                ],
                "lines": [
                  {
                    "crowding": {
                      "passengerFlows": [
                        {
                          "timeSlice": "string",
                          "value": 0
                        }
                      ],
                      "trainLoadings": [
                        {
                          "direction": "string",
                          "line": "string",
                          "lineDirection": "string",
                          "naptanTo": "string",
                          "platformDirection": "string",
                          "timeSlice": "string",
                          "value": 0
                        }
                      ]
                    },
                    "fullName": "string",
                    "id": "string",
                    "motType": "string",
                    "name": "string",
                    "network": "string",
                    "routeType": "Unknown",
                    "status": "Unknown",
                    "type": "string",
                    "uri": "string"
                  }
                ],
                "lon": 0,
                "modes": [
                  "string"
                ],
                "naptanId": "string",
                "naptanMode": "string",
                "placeType": "string",
                "platformName": "string",
                "smsCode": "string",
                "stationNaptan": "string",
                "status": true,
                "stopLetter": "string",
                "stopType": "string",
                "url": "string"
              }
            }
          }
        ],
        "affectedStops": [
          {
            "accessibilitySummary": "string",
            "additionalProperties": [
              {
                "category": "string",
                "key": "string",
                "modified": "1970-01-01T00:00:00Z",
                "sourceSystemKey": "string",
                "value": "string"
              }
            ],
            "children": [
              {
                "additionalProperties": [
                  {
                    "category": "string",
                    "key": "string",
                    "modified": "1970-01-01T00:00:00Z",
                    "sourceSystemKey": "string",
                    "value": "string"
                  }
                ],
                "children": [
                  {}
                ],
                "childrenUrls": [
                  "string"
                ],
                "commonName": "string",
                "distance": 0,
                "id": "string",
                "lat": 0,
                "lon": 0,
                "placeType": "string",
                "url": "string"
              }
            ],
            "childrenUrls": [
              "string"
            ],
            "commonName": "string",
            "distance": 0,
            "fullName": "string",
            "hubNaptanCode": "string",
            "icsCode": "string",
            "id": "string",
            "indicator": "string",
            "individualStopId": "string",
            "lat": 0,
            "lineGroup": [
              {
                "lineIdentifier": [
                  "string"
                ],
                "naptanIdReference": "string",
                "stationAtcoCode": "string"
              }
            ],
            "lineModeGroups": [
              {
                "lineIdentifier": [
                  "string"
                ],
                "modeName": "string"
              }
            ],
            "lines": [
              {
                "crowding": {
                  "passengerFlows": [
                    {
                      "timeSlice": "string",
                      "value": 0
                    }
                  ],
                  "trainLoadings": [
                    {
                      "direction": "string",
                      "line": "string",
                      "lineDirection": "string",
                      "naptanTo": "string",
                      "platformDirection": "string",
                      "timeSlice": "string",
                      "value": 0
                    }
                  ]
                },
                "fullName": "string",
                "id": "string",
                "motType": "string",
                "name": "string",
                "network": "string",
                "routeType": "Unknown",
                "status": "Unknown",
                "type": "string",
                "uri": "string"
              }
            ],
            "lon": 0,
            "modes": [
              "string"
            ],
            "naptanId": "string",
            "naptanMode": "string",
            "placeType": "string",
            "platformName": "string",
            "smsCode": "string",
            "stationNaptan": "string",
            "status": true,
            "stopLetter": "string",
            "stopType": "string",
            "url": "string"
          }
        ],
        "category": "Undefined",
        "categoryDescription": "string",
        "closureText": "string",
        "created": "1970-01-01T00:00:00Z",
        "description": "string",
        "lastUpdate": "1970-01-01T00:00:00Z",
        "summary": "string",
        "type": "string"
      }
    ],
    "id": "string",
    "lineStatuses": [
      {
        "created": "1970-01-01T00:00:00Z",
        "disruption": {
          "additionalInfo": "string",
          "affectedRoutes": [
            {
              "destinationName": "string",
              "direction": "string",
              "id": "string",
              "isEntireRouteSection": true,
              "lineId": "string",
              "lineString": "string",
              "name": "string",
              "originationName": "string",
              "routeCode": "string",
              "routeSectionNaptanEntrySequence": [
                {
                  "ordinal": 0,
                  "stopPoint": {
                    "accessibilitySummary": "string",
                    "additionalProperties": [
                      {
                        "category": "string",
                        "key": "string",
                        "modified": "1970-01-01T00:00:00Z",
                        "sourceSystemKey": "string",
                        "value": "string"
                      }
                    ],
                    "children": [
                      {
                        "additionalProperties": [
                          {
                            "category": "string",
                            "key": "string",
                            "modified": "1970-01-01T00:00:00Z",
                            "sourceSystemKey": "string",
                            "value": "string"
                          }
                        ],
                        "children": [
                          {}
                        ],
                        "childrenUrls": [
                          "string"
                        ],
                        "commonName": "string",
                        "distance": 0,
                        "id": "string",
                        "lat": 0,
                        "lon": 0,
                        "placeType": "string",
                        "url": "string"
                      }
                    ],
                    "childrenUrls": [
                      "string"
                    ],
                    "commonName": "string",
                    "distance": 0,
                    "fullName": "string",
                    "hubNaptanCode": "string",
                    "icsCode": "string",
                    "id": "string",
                    "indicator": "string",
                    "individualStopId": "string",
                    "lat": 0,
                    "lineGroup": [
                      {
                        "lineIdentifier": [
                          "string"
                        ],
                        "naptanIdReference": "string",
                        "stationAtcoCode": "string"
                      }
                    ],
                    "lineModeGroups": [
                      {
                        "lineIdentifier": [
                          "string"
                        ],
                        "modeName": "string"
                      }
                    ],
                    "lines": [
                      {
                        "crowding": {
                          "passengerFlows": [
                            {
                              "timeSlice": "string",
                              "value": 0
                            }
                          ],
                          "trainLoadings": [
                            {
                              "direction": "string",
                              "line": "string",
                              "lineDirection": "string",
                              "naptanTo": "string",
                              "platformDirection": "string",
                              "timeSlice": "string",
                              "value": 0
                            }
                          ]
                        },
                        "fullName": "string",
                        "id": "string",
                        "motType": "string",
                        "name": "string",
                        "network": "string",
                        "routeType": "Unknown",
                        "status": "Unknown",
                        "type": "string",
                        "uri": "string"
                      }
                    ],
                    "lon": 0,
                    "modes": [
                      "string"
                    ],
                    "naptanId": "string",
                    "naptanMode": "string",
                    "placeType": "string",
                    "platformName": "string",
                    "smsCode": "string",
                    "stationNaptan": "string",
                    "status": true,
                    "stopLetter": "string",
                    "stopType": "string",
                    "url": "string"
                  }
                }
              ],
              "validFrom": "1970-01-01T00:00:00Z",
              "validTo": "1970-01-01T00:00:00Z",
              "via": {
                "ordinal": 0,
                "stopPoint": {
                  "accessibilitySummary": "string",
                  "additionalProperties": [
                    {
                      "category": "string",
                      "key": "string",
                      "modified": "1970-01-01T00:00:00Z",
                      "sourceSystemKey": "string",
                      "value": "string"
                    }
                  ],
                  "children": [
                    {
                      "additionalProperties": [
                        {
                          "category": "string",
                          "key": "string",
                          "modified": "1970-01-01T00:00:00Z",
                          "sourceSystemKey": "string",
                          "value": "string"
                        }
                      ],
                      "children": [
                        {}
                      ],
                      "childrenUrls": [
                        "string"
                      ],
                      "commonName": "string",
                      "distance": 0,
                      "id": "string",
                      "lat": 0,
                      "lon": 0,
                      "placeType": "string",
                      "url": "string"
                    }
                  ],
                  "childrenUrls": [
                    "string"
                  ],
                  "commonName": "string",
                  "distance": 0,
                  "fullName": "string",
                  "hubNaptanCode": "string",
                  "icsCode": "string",
                  "id": "string",
                  "indicator": "string",
                  "individualStopId": "string",
                  "lat": 0,
                  "lineGroup": [
                    {
                      "lineIdentifier": [
                        "string"
                      ],
                      "naptanIdReference": "string",
                      "stationAtcoCode": "string"
                    }
                  ],
                  "lineModeGroups": [
                    {
                      "lineIdentifier": [
                        "string"
                      ],
                      "modeName": "string"
                    }
                  ],
                  "lines": [
                    {
                      "crowding": {
                        "passengerFlows": [
                          {
                            "timeSlice": "string",
                            "value": 0
                          }
                        ],
                        "trainLoadings": [
                          {
                            "direction": "string",
                            "line": "string",
                            "lineDirection": "string",
                            "naptanTo": "string",
                            "platformDirection": "string",
                            "timeSlice": "string",
                            "value": 0
                          }
                        ]
                      },
                      "fullName": "string",
                      "id": "string",
                      "motType": "string",
                      "name": "string",
                      "network": "string",
                      "routeType": "Unknown",
                      "status": "Unknown",
                      "type": "string",
                      "uri": "string"
                    }
                  ],
                  "lon": 0,
                  "modes": [
                    "string"
                  ],
                  "naptanId": "string",
                  "naptanMode": "string",
                  "placeType": "string",
                  "platformName": "string",
                  "smsCode": "string",
                  "stationNaptan": "string",
                  "status": true,
                  "stopLetter": "string",
                  "stopType": "string",
                  "url": "string"
                }
              }
            }
          ],
          "affectedStops": [
            {
              "accessibilitySummary": "string",
              "additionalProperties": [
                {
                  "category": "string",
                  "key": "string",
                  "modified": "1970-01-01T00:00:00Z",
                  "sourceSystemKey": "string",
                  "value": "string"
                }
              ],
              "children": [
                {
                  "additionalProperties": [
                    {
                      "category": "string",
                      "key": "string",
                      "modified": "1970-01-01T00:00:00Z",
                      "sourceSystemKey": "string",
                      "value": "string"
                    }
                  ],
                  "children": [
                    {}
                  ],
                  "childrenUrls": [
                    "string"
                  ],
                  "commonName": "string",
                  "distance": 0,
                  "id": "string",
                  "lat": 0,
                  "lon": 0,
                  "placeType": "string",
                  "url": "string"
                }
              ],
              "childrenUrls": [
                "string"
              ],
              "commonName": "string",
              "distance": 0,
              "fullName": "string",
              "hubNaptanCode": "string",
              "icsCode": "string",
              "id": "string",
              "indicator": "string",
              "individualStopId": "string",
              "lat": 0,
              "lineGroup": [
                {
                  "lineIdentifier": [
                    "string"
                  ],
                  "naptanIdReference": "string",
                  "stationAtcoCode": "string"
                }
              ],
              "lineModeGroups": [
                {
                  "lineIdentifier": [
                    "string"
                  ],
                  "modeName": "string"
                }
              ],
              "lines": [
                {
                  "crowding": {
                    "passengerFlows": [
                      {
                        "timeSlice": "string",
                        "value": 0
                      }
                    ],
                    "trainLoadings": [
                      {
                        "direction": "string",
                        "line": "string",
                        "lineDirection": "string",
                        "naptanTo": "string",
                        "platformDirection": "string",
                        "timeSlice": "string",
                        "value": 0
                      }
                    ]
                  },
                  "fullName": "string",
                  "id": "string",
                  "motType": "string",
                  "name": "string",
                  "network": "string",
                  "routeType": "Unknown",
                  "status": "Unknown",
                  "type": "string",
                  "uri": "string"
                }
              ],
              "lon": 0,
              "modes": [
                "string"
              ],
              "naptanId": "string",
              "naptanMode": "string",
              "placeType": "string",
              "platformName": "string",
              "smsCode": "string",
              "stationNaptan": "string",
              "status": true,
              "stopLetter": "string",
              "stopType": "string",
              "url": "string"
            }
          ],
          "category": "Undefined",
          "categoryDescription": "string",
          "closureText": "string",
          "created": "1970-01-01T00:00:00Z",
          "description": "string",
          "lastUpdate": "1970-01-01T00:00:00Z",
          "summary": "string",
          "type": "string"
        },
        "id": 0,
        "lineId": "string",
        "modified": "1970-01-01T00:00:00Z",
        "reason": "string",
        "statusSeverity": 0,
        "statusSeverityDescription": "string",
        "validityPeriods": [
          {
            "fromDate": "1970-01-01T00:00:00Z",
            "isNow": true,
            "toDate": "1970-01-01T00:00:00Z"
          }
        ]
      }
    ],
    "modeName": "string",
    "modified": "1970-01-01T00:00:00Z",
    "name": "string",
    "routeSections": [
      {
        "destination": "string",
        "destinationName": "string",
        "direction": "string",
        "name": "string",
        "originationName": "string",
        "originator": "string",
        "routeCode": "string",
        "serviceType": "string",
        "validFrom": "1970-01-01T00:00:00Z",
        "validTo": "1970-01-01T00:00:00Z"
      }
    ],
    "serviceTypes": [
      {
        "name": "string",
        "uri": "string"
      }
    ]
  }
]
```

<h3 id="gets-the-line-status-of-for-all-lines-for-the-given-modes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="gets-the-line-status-of-for-all-lines-for-the-given-modes-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Tfl.Api.Presentation.Entities.Line](#schematfl.api.presentation.entities.line)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get all valid routes for all lines, including the name and id of the originating and terminating stops for each route.

<a id="opIdLine_Route"></a>

> Code samples

```bash
curl https://example.com/Line/Route \
  -H 'Accept: application/json'
```

`GET /Line/Route`

<h3 id="get-all-valid-routes-for-all-lines-including-the-name-and-id-of-the-originating-and-terminating-stops-for-each-route-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|serviceTypes|query|[string]|false|A comma seperated list of service types to filter on. Supported values: Regular, Night. Defaulted to 'Regular' if not specified|

#### Enumerated Values

|Parameter|Value|
|---|---|
|serviceTypes|Regular|
|serviceTypes|Night|

> Example responses

> 200 Response

```json
[
  {
    "created": "1970-01-01T00:00:00Z",
    "crowding": {
      "passengerFlows": [
        {
          "timeSlice": "string",
          "value": 0
        }
      ],
      "trainLoadings": [
        {
          "direction": "string",
          "line": "string",
          "lineDirection": "string",
          "naptanTo": "string",
          "platformDirection": "string",
          "timeSlice": "string",
          "value": 0
        }
      ]
    },
    "disruptions": [
      {
        "additionalInfo": "string",
        "affectedRoutes": [
          {
            "destinationName": "string",
            "direction": "string",
            "id": "string",
            "isEntireRouteSection": true,
            "lineId": "string",
            "lineString": "string",
            "name": "string",
            "originationName": "string",
            "routeCode": "string",
            "routeSectionNaptanEntrySequence": [
              {
                "ordinal": 0,
                "stopPoint": {
                  "accessibilitySummary": "string",
                  "additionalProperties": [
                    {
                      "category": "string",
                      "key": "string",
                      "modified": "1970-01-01T00:00:00Z",
                      "sourceSystemKey": "string",
                      "value": "string"
                    }
                  ],
                  "children": [
                    {
                      "additionalProperties": [
                        {
                          "category": "string",
                          "key": "string",
                          "modified": "1970-01-01T00:00:00Z",
                          "sourceSystemKey": "string",
                          "value": "string"
                        }
                      ],
                      "children": [
                        {}
                      ],
                      "childrenUrls": [
                        "string"
                      ],
                      "commonName": "string",
                      "distance": 0,
                      "id": "string",
                      "lat": 0,
                      "lon": 0,
                      "placeType": "string",
                      "url": "string"
                    }
                  ],
                  "childrenUrls": [
                    "string"
                  ],
                  "commonName": "string",
                  "distance": 0,
                  "fullName": "string",
                  "hubNaptanCode": "string",
                  "icsCode": "string",
                  "id": "string",
                  "indicator": "string",
                  "individualStopId": "string",
                  "lat": 0,
                  "lineGroup": [
                    {
                      "lineIdentifier": [
                        "string"
                      ],
                      "naptanIdReference": "string",
                      "stationAtcoCode": "string"
                    }
                  ],
                  "lineModeGroups": [
                    {
                      "lineIdentifier": [
                        "string"
                      ],
                      "modeName": "string"
                    }
                  ],
                  "lines": [
                    {
                      "crowding": {
                        "passengerFlows": [
                          {
                            "timeSlice": "string",
                            "value": 0
                          }
                        ],
                        "trainLoadings": [
                          {
                            "direction": "string",
                            "line": "string",
                            "lineDirection": "string",
                            "naptanTo": "string",
                            "platformDirection": "string",
                            "timeSlice": "string",
                            "value": 0
                          }
                        ]
                      },
                      "fullName": "string",
                      "id": "string",
                      "motType": "string",
                      "name": "string",
                      "network": "string",
                      "routeType": "Unknown",
                      "status": "Unknown",
                      "type": "string",
                      "uri": "string"
                    }
                  ],
                  "lon": 0,
                  "modes": [
                    "string"
                  ],
                  "naptanId": "string",
                  "naptanMode": "string",
                  "placeType": "string",
                  "platformName": "string",
                  "smsCode": "string",
                  "stationNaptan": "string",
                  "status": true,
                  "stopLetter": "string",
                  "stopType": "string",
                  "url": "string"
                }
              }
            ],
            "validFrom": "1970-01-01T00:00:00Z",
            "validTo": "1970-01-01T00:00:00Z",
            "via": {
              "ordinal": 0,
              "stopPoint": {
                "accessibilitySummary": "string",
                "additionalProperties": [
                  {
                    "category": "string",
                    "key": "string",
                    "modified": "1970-01-01T00:00:00Z",
                    "sourceSystemKey": "string",
                    "value": "string"
                  }
                ],
                "children": [
                  {
                    "additionalProperties": [
                      {
                        "category": "string",
                        "key": "string",
                        "modified": "1970-01-01T00:00:00Z",
                        "sourceSystemKey": "string",
                        "value": "string"
                      }
                    ],
                    "children": [
                      {}
                    ],
                    "childrenUrls": [
                      "string"
                    ],
                    "commonName": "string",
                    "distance": 0,
                    "id": "string",
                    "lat": 0,
                    "lon": 0,
                    "placeType": "string",
                    "url": "string"
                  }
                ],
                "childrenUrls": [
                  "string"
                ],
                "commonName": "string",
                "distance": 0,
                "fullName": "string",
                "hubNaptanCode": "string",
                "icsCode": "string",
                "id": "string",
                "indicator": "string",
                "individualStopId": "string",
                "lat": 0,
                "lineGroup": [
                  {
                    "lineIdentifier": [
                      "string"
                    ],
                    "naptanIdReference": "string",
                    "stationAtcoCode": "string"
                  }
                ],
                "lineModeGroups": [
                  {
                    "lineIdentifier": [
                      "string"
                    ],
                    "modeName": "string"
                  }
                ],
                "lines": [
                  {
                    "crowding": {
                      "passengerFlows": [
                        {
                          "timeSlice": "string",
                          "value": 0
                        }
                      ],
                      "trainLoadings": [
                        {
                          "direction": "string",
                          "line": "string",
                          "lineDirection": "string",
                          "naptanTo": "string",
                          "platformDirection": "string",
                          "timeSlice": "string",
                          "value": 0
                        }
                      ]
                    },
                    "fullName": "string",
                    "id": "string",
                    "motType": "string",
                    "name": "string",
                    "network": "string",
                    "routeType": "Unknown",
                    "status": "Unknown",
                    "type": "string",
                    "uri": "string"
                  }
                ],
                "lon": 0,
                "modes": [
                  "string"
                ],
                "naptanId": "string",
                "naptanMode": "string",
                "placeType": "string",
                "platformName": "string",
                "smsCode": "string",
                "stationNaptan": "string",
                "status": true,
                "stopLetter": "string",
                "stopType": "string",
                "url": "string"
              }
            }
          }
        ],
        "affectedStops": [
          {
            "accessibilitySummary": "string",
            "additionalProperties": [
              {
                "category": "string",
                "key": "string",
                "modified": "1970-01-01T00:00:00Z",
                "sourceSystemKey": "string",
                "value": "string"
              }
            ],
            "children": [
              {
                "additionalProperties": [
                  {
                    "category": "string",
                    "key": "string",
                    "modified": "1970-01-01T00:00:00Z",
                    "sourceSystemKey": "string",
                    "value": "string"
                  }
                ],
                "children": [
                  {}
                ],
                "childrenUrls": [
                  "string"
                ],
                "commonName": "string",
                "distance": 0,
                "id": "string",
                "lat": 0,
                "lon": 0,
                "placeType": "string",
                "url": "string"
              }
            ],
            "childrenUrls": [
              "string"
            ],
            "commonName": "string",
            "distance": 0,
            "fullName": "string",
            "hubNaptanCode": "string",
            "icsCode": "string",
            "id": "string",
            "indicator": "string",
            "individualStopId": "string",
            "lat": 0,
            "lineGroup": [
              {
                "lineIdentifier": [
                  "string"
                ],
                "naptanIdReference": "string",
                "stationAtcoCode": "string"
              }
            ],
            "lineModeGroups": [
              {
                "lineIdentifier": [
                  "string"
                ],
                "modeName": "string"
              }
            ],
            "lines": [
              {
                "crowding": {
                  "passengerFlows": [
                    {
                      "timeSlice": "string",
                      "value": 0
                    }
                  ],
                  "trainLoadings": [
                    {
                      "direction": "string",
                      "line": "string",
                      "lineDirection": "string",
                      "naptanTo": "string",
                      "platformDirection": "string",
                      "timeSlice": "string",
                      "value": 0
                    }
                  ]
                },
                "fullName": "string",
                "id": "string",
                "motType": "string",
                "name": "string",
                "network": "string",
                "routeType": "Unknown",
                "status": "Unknown",
                "type": "string",
                "uri": "string"
              }
            ],
            "lon": 0,
            "modes": [
              "string"
            ],
            "naptanId": "string",
            "naptanMode": "string",
            "placeType": "string",
            "platformName": "string",
            "smsCode": "string",
            "stationNaptan": "string",
            "status": true,
            "stopLetter": "string",
            "stopType": "string",
            "url": "string"
          }
        ],
        "category": "Undefined",
        "categoryDescription": "string",
        "closureText": "string",
        "created": "1970-01-01T00:00:00Z",
        "description": "string",
        "lastUpdate": "1970-01-01T00:00:00Z",
        "summary": "string",
        "type": "string"
      }
    ],
    "id": "string",
    "lineStatuses": [
      {
        "created": "1970-01-01T00:00:00Z",
        "disruption": {
          "additionalInfo": "string",
          "affectedRoutes": [
            {
              "destinationName": "string",
              "direction": "string",
              "id": "string",
              "isEntireRouteSection": true,
              "lineId": "string",
              "lineString": "string",
              "name": "string",
              "originationName": "string",
              "routeCode": "string",
              "routeSectionNaptanEntrySequence": [
                {
                  "ordinal": 0,
                  "stopPoint": {
                    "accessibilitySummary": "string",
                    "additionalProperties": [
                      {
                        "category": "string",
                        "key": "string",
                        "modified": "1970-01-01T00:00:00Z",
                        "sourceSystemKey": "string",
                        "value": "string"
                      }
                    ],
                    "children": [
                      {
                        "additionalProperties": [
                          {
                            "category": "string",
                            "key": "string",
                            "modified": "1970-01-01T00:00:00Z",
                            "sourceSystemKey": "string",
                            "value": "string"
                          }
                        ],
                        "children": [
                          {}
                        ],
                        "childrenUrls": [
                          "string"
                        ],
                        "commonName": "string",
                        "distance": 0,
                        "id": "string",
                        "lat": 0,
                        "lon": 0,
                        "placeType": "string",
                        "url": "string"
                      }
                    ],
                    "childrenUrls": [
                      "string"
                    ],
                    "commonName": "string",
                    "distance": 0,
                    "fullName": "string",
                    "hubNaptanCode": "string",
                    "icsCode": "string",
                    "id": "string",
                    "indicator": "string",
                    "individualStopId": "string",
                    "lat": 0,
                    "lineGroup": [
                      {
                        "lineIdentifier": [
                          "string"
                        ],
                        "naptanIdReference": "string",
                        "stationAtcoCode": "string"
                      }
                    ],
                    "lineModeGroups": [
                      {
                        "lineIdentifier": [
                          "string"
                        ],
                        "modeName": "string"
                      }
                    ],
                    "lines": [
                      {
                        "crowding": {
                          "passengerFlows": [
                            {
                              "timeSlice": "string",
                              "value": 0
                            }
                          ],
                          "trainLoadings": [
                            {
                              "direction": "string",
                              "line": "string",
                              "lineDirection": "string",
                              "naptanTo": "string",
                              "platformDirection": "string",
                              "timeSlice": "string",
                              "value": 0
                            }
                          ]
                        },
                        "fullName": "string",
                        "id": "string",
                        "motType": "string",
                        "name": "string",
                        "network": "string",
                        "routeType": "Unknown",
                        "status": "Unknown",
                        "type": "string",
                        "uri": "string"
                      }
                    ],
                    "lon": 0,
                    "modes": [
                      "string"
                    ],
                    "naptanId": "string",
                    "naptanMode": "string",
                    "placeType": "string",
                    "platformName": "string",
                    "smsCode": "string",
                    "stationNaptan": "string",
                    "status": true,
                    "stopLetter": "string",
                    "stopType": "string",
                    "url": "string"
                  }
                }
              ],
              "validFrom": "1970-01-01T00:00:00Z",
              "validTo": "1970-01-01T00:00:00Z",
              "via": {
                "ordinal": 0,
                "stopPoint": {
                  "accessibilitySummary": "string",
                  "additionalProperties": [
                    {
                      "category": "string",
                      "key": "string",
                      "modified": "1970-01-01T00:00:00Z",
                      "sourceSystemKey": "string",
                      "value": "string"
                    }
                  ],
                  "children": [
                    {
                      "additionalProperties": [
                        {
                          "category": "string",
                          "key": "string",
                          "modified": "1970-01-01T00:00:00Z",
                          "sourceSystemKey": "string",
                          "value": "string"
                        }
                      ],
                      "children": [
                        {}
                      ],
                      "childrenUrls": [
                        "string"
                      ],
                      "commonName": "string",
                      "distance": 0,
                      "id": "string",
                      "lat": 0,
                      "lon": 0,
                      "placeType": "string",
                      "url": "string"
                    }
                  ],
                  "childrenUrls": [
                    "string"
                  ],
                  "commonName": "string",
                  "distance": 0,
                  "fullName": "string",
                  "hubNaptanCode": "string",
                  "icsCode": "string",
                  "id": "string",
                  "indicator": "string",
                  "individualStopId": "string",
                  "lat": 0,
                  "lineGroup": [
                    {
                      "lineIdentifier": [
                        "string"
                      ],
                      "naptanIdReference": "string",
                      "stationAtcoCode": "string"
                    }
                  ],
                  "lineModeGroups": [
                    {
                      "lineIdentifier": [
                        "string"
                      ],
                      "modeName": "string"
                    }
                  ],
                  "lines": [
                    {
                      "crowding": {
                        "passengerFlows": [
                          {
                            "timeSlice": "string",
                            "value": 0
                          }
                        ],
                        "trainLoadings": [
                          {
                            "direction": "string",
                            "line": "string",
                            "lineDirection": "string",
                            "naptanTo": "string",
                            "platformDirection": "string",
                            "timeSlice": "string",
                            "value": 0
                          }
                        ]
                      },
                      "fullName": "string",
                      "id": "string",
                      "motType": "string",
                      "name": "string",
                      "network": "string",
                      "routeType": "Unknown",
                      "status": "Unknown",
                      "type": "string",
                      "uri": "string"
                    }
                  ],
                  "lon": 0,
                  "modes": [
                    "string"
                  ],
                  "naptanId": "string",
                  "naptanMode": "string",
                  "placeType": "string",
                  "platformName": "string",
                  "smsCode": "string",
                  "stationNaptan": "string",
                  "status": true,
                  "stopLetter": "string",
                  "stopType": "string",
                  "url": "string"
                }
              }
            }
          ],
          "affectedStops": [
            {
              "accessibilitySummary": "string",
              "additionalProperties": [
                {
                  "category": "string",
                  "key": "string",
                  "modified": "1970-01-01T00:00:00Z",
                  "sourceSystemKey": "string",
                  "value": "string"
                }
              ],
              "children": [
                {
                  "additionalProperties": [
                    {
                      "category": "string",
                      "key": "string",
                      "modified": "1970-01-01T00:00:00Z",
                      "sourceSystemKey": "string",
                      "value": "string"
                    }
                  ],
                  "children": [
                    {}
                  ],
                  "childrenUrls": [
                    "string"
                  ],
                  "commonName": "string",
                  "distance": 0,
                  "id": "string",
                  "lat": 0,
                  "lon": 0,
                  "placeType": "string",
                  "url": "string"
                }
              ],
              "childrenUrls": [
                "string"
              ],
              "commonName": "string",
              "distance": 0,
              "fullName": "string",
              "hubNaptanCode": "string",
              "icsCode": "string",
              "id": "string",
              "indicator": "string",
              "individualStopId": "string",
              "lat": 0,
              "lineGroup": [
                {
                  "lineIdentifier": [
                    "string"
                  ],
                  "naptanIdReference": "string",
                  "stationAtcoCode": "string"
                }
              ],
              "lineModeGroups": [
                {
                  "lineIdentifier": [
                    "string"
                  ],
                  "modeName": "string"
                }
              ],
              "lines": [
                {
                  "crowding": {
                    "passengerFlows": [
                      {
                        "timeSlice": "string",
                        "value": 0
                      }
                    ],
                    "trainLoadings": [
                      {
                        "direction": "string",
                        "line": "string",
                        "lineDirection": "string",
                        "naptanTo": "string",
                        "platformDirection": "string",
                        "timeSlice": "string",
                        "value": 0
                      }
                    ]
                  },
                  "fullName": "string",
                  "id": "string",
                  "motType": "string",
                  "name": "string",
                  "network": "string",
                  "routeType": "Unknown",
                  "status": "Unknown",
                  "type": "string",
                  "uri": "string"
                }
              ],
              "lon": 0,
              "modes": [
                "string"
              ],
              "naptanId": "string",
              "naptanMode": "string",
              "placeType": "string",
              "platformName": "string",
              "smsCode": "string",
              "stationNaptan": "string",
              "status": true,
              "stopLetter": "string",
              "stopType": "string",
              "url": "string"
            }
          ],
          "category": "Undefined",
          "categoryDescription": "string",
          "closureText": "string",
          "created": "1970-01-01T00:00:00Z",
          "description": "string",
          "lastUpdate": "1970-01-01T00:00:00Z",
          "summary": "string",
          "type": "string"
        },
        "id": 0,
        "lineId": "string",
        "modified": "1970-01-01T00:00:00Z",
        "reason": "string",
        "statusSeverity": 0,
        "statusSeverityDescription": "string",
        "validityPeriods": [
          {
            "fromDate": "1970-01-01T00:00:00Z",
            "isNow": true,
            "toDate": "1970-01-01T00:00:00Z"
          }
        ]
      }
    ],
    "modeName": "string",
    "modified": "1970-01-01T00:00:00Z",
    "name": "string",
    "routeSections": [
      {
        "destination": "string",
        "destinationName": "string",
        "direction": "string",
        "name": "string",
        "originationName": "string",
        "originator": "string",
        "routeCode": "string",
        "serviceType": "string",
        "validFrom": "1970-01-01T00:00:00Z",
        "validTo": "1970-01-01T00:00:00Z"
      }
    ],
    "serviceTypes": [
      {
        "name": "string",
        "uri": "string"
      }
    ]
  }
]
```

<h3 id="get-all-valid-routes-for-all-lines-including-the-name-and-id-of-the-originating-and-terminating-stops-for-each-route-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-all-valid-routes-for-all-lines-including-the-name-and-id-of-the-originating-and-terminating-stops-for-each-route-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Tfl.Api.Presentation.Entities.Line](#schematfl.api.presentation.entities.line)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Search for lines or routes matching the query string

<a id="opIdLine_Search"></a>

> Code samples

```bash
curl https://example.com/Line/Search/string \
  -H 'Accept: application/json'
```

`GET /Line/Search/{query}`

<h3 id="search-for-lines-or-routes-matching-the-query-string-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|query|path|string|true|Search term e.g victoria|
|modes|query|[string]|false|Optionally filter by the specified modes|
|serviceTypes|query|[string]|false|A comma seperated list of service types to filter on. Supported values: Regular, Night. Defaulted to 'Regular' if not specified|

#### Enumerated Values

|Parameter|Value|
|---|---|
|serviceTypes|Regular|
|serviceTypes|Night|

> Example responses

> 200 Response

```json
{
  "input": "string",
  "searchMatches": [
    {
      "id": "string",
      "lat": 0,
      "lineId": "string",
      "lineName": "string",
      "lineRouteSection": [
        {
          "destination": "string",
          "direction": "string",
          "fromStation": "string",
          "routeId": 0,
          "serviceType": "string",
          "toStation": "string",
          "vehicleDestinationText": "string"
        }
      ],
      "lon": 0,
      "matchedRouteSections": [
        {
          "id": 0
        }
      ],
      "matchedStops": [
        {
          "accessibilitySummary": "string",
          "direction": "string",
          "hasDisruption": true,
          "icsId": "string",
          "id": "string",
          "lat": 0,
          "lines": [
            {
              "crowding": {
                "passengerFlows": [
                  {
                    "timeSlice": "string",
                    "value": 0
                  }
                ],
                "trainLoadings": [
                  {
                    "direction": "string",
                    "line": "string",
                    "lineDirection": "string",
                    "naptanTo": "string",
                    "platformDirection": "string",
                    "timeSlice": "string",
                    "value": 0
                  }
                ]
              },
              "fullName": "string",
              "id": "string",
              "motType": "string",
              "name": "string",
              "network": "string",
              "routeType": "Unknown",
              "status": "Unknown",
              "type": "string",
              "uri": "string"
            }
          ],
          "lon": 0,
          "modes": [
            "string"
          ],
          "name": "string",
          "parentId": "string",
          "routeId": 0,
          "stationId": "string",
          "status": true,
          "stopLetter": "string",
          "stopType": "string",
          "topMostParentId": "string",
          "towards": "string",
          "url": "string",
          "zone": "string"
        }
      ],
      "mode": "string",
      "name": "string",
      "url": "string"
    }
  ]
}
```

<h3 id="search-for-lines-or-routes-matching-the-query-string-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Tfl.Api.Presentation.Entities.RouteSearchResponse](#schematfl.api.presentation.entities.routesearchresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Gets the line status for all lines with a given severity A list of valid severity codes can be obtained from a call to Line/Meta/Severity

<a id="opIdLine_StatusBySeverity"></a>

> Code samples

```bash
curl https://example.com/Line/Status/0 \
  -H 'Accept: application/json'
```

`GET /Line/Status/{severity}`

<h3 id="gets-the-line-status-for-all-lines-with-a-given-severity-a-list-of-valid-severity-codes-can-be-obtained-from-a-call-to-linemetaseverity-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|severity|path|integer(int32)|true|The level of severity (eg: a number from 0 to 14)|

> Example responses

> 200 Response

```json
[
  {
    "created": "1970-01-01T00:00:00Z",
    "crowding": {
      "passengerFlows": [
        {
          "timeSlice": "string",
          "value": 0
        }
      ],
      "trainLoadings": [
        {
          "direction": "string",
          "line": "string",
          "lineDirection": "string",
          "naptanTo": "string",
          "platformDirection": "string",
          "timeSlice": "string",
          "value": 0
        }
      ]
    },
    "disruptions": [
      {
        "additionalInfo": "string",
        "affectedRoutes": [
          {
            "destinationName": "string",
            "direction": "string",
            "id": "string",
            "isEntireRouteSection": true,
            "lineId": "string",
            "lineString": "string",
            "name": "string",
            "originationName": "string",
            "routeCode": "string",
            "routeSectionNaptanEntrySequence": [
              {
                "ordinal": 0,
                "stopPoint": {
                  "accessibilitySummary": "string",
                  "additionalProperties": [
                    {
                      "category": "string",
                      "key": "string",
                      "modified": "1970-01-01T00:00:00Z",
                      "sourceSystemKey": "string",
                      "value": "string"
                    }
                  ],
                  "children": [
                    {
                      "additionalProperties": [
                        {
                          "category": "string",
                          "key": "string",
                          "modified": "1970-01-01T00:00:00Z",
                          "sourceSystemKey": "string",
                          "value": "string"
                        }
                      ],
                      "children": [
                        {}
                      ],
                      "childrenUrls": [
                        "string"
                      ],
                      "commonName": "string",
                      "distance": 0,
                      "id": "string",
                      "lat": 0,
                      "lon": 0,
                      "placeType": "string",
                      "url": "string"
                    }
                  ],
                  "childrenUrls": [
                    "string"
                  ],
                  "commonName": "string",
                  "distance": 0,
                  "fullName": "string",
                  "hubNaptanCode": "string",
                  "icsCode": "string",
                  "id": "string",
                  "indicator": "string",
                  "individualStopId": "string",
                  "lat": 0,
                  "lineGroup": [
                    {
                      "lineIdentifier": [
                        "string"
                      ],
                      "naptanIdReference": "string",
                      "stationAtcoCode": "string"
                    }
                  ],
                  "lineModeGroups": [
                    {
                      "lineIdentifier": [
                        "string"
                      ],
                      "modeName": "string"
                    }
                  ],
                  "lines": [
                    {
                      "crowding": {
                        "passengerFlows": [
                          {
                            "timeSlice": "string",
                            "value": 0
                          }
                        ],
                        "trainLoadings": [
                          {
                            "direction": "string",
                            "line": "string",
                            "lineDirection": "string",
                            "naptanTo": "string",
                            "platformDirection": "string",
                            "timeSlice": "string",
                            "value": 0
                          }
                        ]
                      },
                      "fullName": "string",
                      "id": "string",
                      "motType": "string",
                      "name": "string",
                      "network": "string",
                      "routeType": "Unknown",
                      "status": "Unknown",
                      "type": "string",
                      "uri": "string"
                    }
                  ],
                  "lon": 0,
                  "modes": [
                    "string"
                  ],
                  "naptanId": "string",
                  "naptanMode": "string",
                  "placeType": "string",
                  "platformName": "string",
                  "smsCode": "string",
                  "stationNaptan": "string",
                  "status": true,
                  "stopLetter": "string",
                  "stopType": "string",
                  "url": "string"
                }
              }
            ],
            "validFrom": "1970-01-01T00:00:00Z",
            "validTo": "1970-01-01T00:00:00Z",
            "via": {
              "ordinal": 0,
              "stopPoint": {
                "accessibilitySummary": "string",
                "additionalProperties": [
                  {
                    "category": "string",
                    "key": "string",
                    "modified": "1970-01-01T00:00:00Z",
                    "sourceSystemKey": "string",
                    "value": "string"
                  }
                ],
                "children": [
                  {
                    "additionalProperties": [
                      {
                        "category": "string",
                        "key": "string",
                        "modified": "1970-01-01T00:00:00Z",
                        "sourceSystemKey": "string",
                        "value": "string"
                      }
                    ],
                    "children": [
                      {}
                    ],
                    "childrenUrls": [
                      "string"
                    ],
                    "commonName": "string",
                    "distance": 0,
                    "id": "string",
                    "lat": 0,
                    "lon": 0,
                    "placeType": "string",
                    "url": "string"
                  }
                ],
                "childrenUrls": [
                  "string"
                ],
                "commonName": "string",
                "distance": 0,
                "fullName": "string",
                "hubNaptanCode": "string",
                "icsCode": "string",
                "id": "string",
                "indicator": "string",
                "individualStopId": "string",
                "lat": 0,
                "lineGroup": [
                  {
                    "lineIdentifier": [
                      "string"
                    ],
                    "naptanIdReference": "string",
                    "stationAtcoCode": "string"
                  }
                ],
                "lineModeGroups": [
                  {
                    "lineIdentifier": [
                      "string"
                    ],
                    "modeName": "string"
                  }
                ],
                "lines": [
                  {
                    "crowding": {
                      "passengerFlows": [
                        {
                          "timeSlice": "string",
                          "value": 0
                        }
                      ],
                      "trainLoadings": [
                        {
                          "direction": "string",
                          "line": "string",
                          "lineDirection": "string",
                          "naptanTo": "string",
                          "platformDirection": "string",
                          "timeSlice": "string",
                          "value": 0
                        }
                      ]
                    },
                    "fullName": "string",
                    "id": "string",
                    "motType": "string",
                    "name": "string",
                    "network": "string",
                    "routeType": "Unknown",
                    "status": "Unknown",
                    "type": "string",
                    "uri": "string"
                  }
                ],
                "lon": 0,
                "modes": [
                  "string"
                ],
                "naptanId": "string",
                "naptanMode": "string",
                "placeType": "string",
                "platformName": "string",
                "smsCode": "string",
                "stationNaptan": "string",
                "status": true,
                "stopLetter": "string",
                "stopType": "string",
                "url": "string"
              }
            }
          }
        ],
        "affectedStops": [
          {
            "accessibilitySummary": "string",
            "additionalProperties": [
              {
                "category": "string",
                "key": "string",
                "modified": "1970-01-01T00:00:00Z",
                "sourceSystemKey": "string",
                "value": "string"
              }
            ],
            "children": [
              {
                "additionalProperties": [
                  {
                    "category": "string",
                    "key": "string",
                    "modified": "1970-01-01T00:00:00Z",
                    "sourceSystemKey": "string",
                    "value": "string"
                  }
                ],
                "children": [
                  {}
                ],
                "childrenUrls": [
                  "string"
                ],
                "commonName": "string",
                "distance": 0,
                "id": "string",
                "lat": 0,
                "lon": 0,
                "placeType": "string",
                "url": "string"
              }
            ],
            "childrenUrls": [
              "string"
            ],
            "commonName": "string",
            "distance": 0,
            "fullName": "string",
            "hubNaptanCode": "string",
            "icsCode": "string",
            "id": "string",
            "indicator": "string",
            "individualStopId": "string",
            "lat": 0,
            "lineGroup": [
              {
                "lineIdentifier": [
                  "string"
                ],
                "naptanIdReference": "string",
                "stationAtcoCode": "string"
              }
            ],
            "lineModeGroups": [
              {
                "lineIdentifier": [
                  "string"
                ],
                "modeName": "string"
              }
            ],
            "lines": [
              {
                "crowding": {
                  "passengerFlows": [
                    {
                      "timeSlice": "string",
                      "value": 0
                    }
                  ],
                  "trainLoadings": [
                    {
                      "direction": "string",
                      "line": "string",
                      "lineDirection": "string",
                      "naptanTo": "string",
                      "platformDirection": "string",
                      "timeSlice": "string",
                      "value": 0
                    }
                  ]
                },
                "fullName": "string",
                "id": "string",
                "motType": "string",
                "name": "string",
                "network": "string",
                "routeType": "Unknown",
                "status": "Unknown",
                "type": "string",
                "uri": "string"
              }
            ],
            "lon": 0,
            "modes": [
              "string"
            ],
            "naptanId": "string",
            "naptanMode": "string",
            "placeType": "string",
            "platformName": "string",
            "smsCode": "string",
            "stationNaptan": "string",
            "status": true,
            "stopLetter": "string",
            "stopType": "string",
            "url": "string"
          }
        ],
        "category": "Undefined",
        "categoryDescription": "string",
        "closureText": "string",
        "created": "1970-01-01T00:00:00Z",
        "description": "string",
        "lastUpdate": "1970-01-01T00:00:00Z",
        "summary": "string",
        "type": "string"
      }
    ],
    "id": "string",
    "lineStatuses": [
      {
        "created": "1970-01-01T00:00:00Z",
        "disruption": {
          "additionalInfo": "string",
          "affectedRoutes": [
            {
              "destinationName": "string",
              "direction": "string",
              "id": "string",
              "isEntireRouteSection": true,
              "lineId": "string",
              "lineString": "string",
              "name": "string",
              "originationName": "string",
              "routeCode": "string",
              "routeSectionNaptanEntrySequence": [
                {
                  "ordinal": 0,
                  "stopPoint": {
                    "accessibilitySummary": "string",
                    "additionalProperties": [
                      {
                        "category": "string",
                        "key": "string",
                        "modified": "1970-01-01T00:00:00Z",
                        "sourceSystemKey": "string",
                        "value": "string"
                      }
                    ],
                    "children": [
                      {
                        "additionalProperties": [
                          {
                            "category": "string",
                            "key": "string",
                            "modified": "1970-01-01T00:00:00Z",
                            "sourceSystemKey": "string",
                            "value": "string"
                          }
                        ],
                        "children": [
                          {}
                        ],
                        "childrenUrls": [
                          "string"
                        ],
                        "commonName": "string",
                        "distance": 0,
                        "id": "string",
                        "lat": 0,
                        "lon": 0,
                        "placeType": "string",
                        "url": "string"
                      }
                    ],
                    "childrenUrls": [
                      "string"
                    ],
                    "commonName": "string",
                    "distance": 0,
                    "fullName": "string",
                    "hubNaptanCode": "string",
                    "icsCode": "string",
                    "id": "string",
                    "indicator": "string",
                    "individualStopId": "string",
                    "lat": 0,
                    "lineGroup": [
                      {
                        "lineIdentifier": [
                          "string"
                        ],
                        "naptanIdReference": "string",
                        "stationAtcoCode": "string"
                      }
                    ],
                    "lineModeGroups": [
                      {
                        "lineIdentifier": [
                          "string"
                        ],
                        "modeName": "string"
                      }
                    ],
                    "lines": [
                      {
                        "crowding": {
                          "passengerFlows": [
                            {
                              "timeSlice": "string",
                              "value": 0
                            }
                          ],
                          "trainLoadings": [
                            {
                              "direction": "string",
                              "line": "string",
                              "lineDirection": "string",
                              "naptanTo": "string",
                              "platformDirection": "string",
                              "timeSlice": "string",
                              "value": 0
                            }
                          ]
                        },
                        "fullName": "string",
                        "id": "string",
                        "motType": "string",
                        "name": "string",
                        "network": "string",
                        "routeType": "Unknown",
                        "status": "Unknown",
                        "type": "string",
                        "uri": "string"
                      }
                    ],
                    "lon": 0,
                    "modes": [
                      "string"
                    ],
                    "naptanId": "string",
                    "naptanMode": "string",
                    "placeType": "string",
                    "platformName": "string",
                    "smsCode": "string",
                    "stationNaptan": "string",
                    "status": true,
                    "stopLetter": "string",
                    "stopType": "string",
                    "url": "string"
                  }
                }
              ],
              "validFrom": "1970-01-01T00:00:00Z",
              "validTo": "1970-01-01T00:00:00Z",
              "via": {
                "ordinal": 0,
                "stopPoint": {
                  "accessibilitySummary": "string",
                  "additionalProperties": [
                    {
                      "category": "string",
                      "key": "string",
                      "modified": "1970-01-01T00:00:00Z",
                      "sourceSystemKey": "string",
                      "value": "string"
                    }
                  ],
                  "children": [
                    {
                      "additionalProperties": [
                        {
                          "category": "string",
                          "key": "string",
                          "modified": "1970-01-01T00:00:00Z",
                          "sourceSystemKey": "string",
                          "value": "string"
                        }
                      ],
                      "children": [
                        {}
                      ],
                      "childrenUrls": [
                        "string"
                      ],
                      "commonName": "string",
                      "distance": 0,
                      "id": "string",
                      "lat": 0,
                      "lon": 0,
                      "placeType": "string",
                      "url": "string"
                    }
                  ],
                  "childrenUrls": [
                    "string"
                  ],
                  "commonName": "string",
                  "distance": 0,
                  "fullName": "string",
                  "hubNaptanCode": "string",
                  "icsCode": "string",
                  "id": "string",
                  "indicator": "string",
                  "individualStopId": "string",
                  "lat": 0,
                  "lineGroup": [
                    {
                      "lineIdentifier": [
                        "string"
                      ],
                      "naptanIdReference": "string",
                      "stationAtcoCode": "string"
                    }
                  ],
                  "lineModeGroups": [
                    {
                      "lineIdentifier": [
                        "string"
                      ],
                      "modeName": "string"
                    }
                  ],
                  "lines": [
                    {
                      "crowding": {
                        "passengerFlows": [
                          {
                            "timeSlice": "string",
                            "value": 0
                          }
                        ],
                        "trainLoadings": [
                          {
                            "direction": "string",
                            "line": "string",
                            "lineDirection": "string",
                            "naptanTo": "string",
                            "platformDirection": "string",
                            "timeSlice": "string",
                            "value": 0
                          }
                        ]
                      },
                      "fullName": "string",
                      "id": "string",
                      "motType": "string",
                      "name": "string",
                      "network": "string",
                      "routeType": "Unknown",
                      "status": "Unknown",
                      "type": "string",
                      "uri": "string"
                    }
                  ],
                  "lon": 0,
                  "modes": [
                    "string"
                  ],
                  "naptanId": "string",
                  "naptanMode": "string",
                  "placeType": "string",
                  "platformName": "string",
                  "smsCode": "string",
                  "stationNaptan": "string",
                  "status": true,
                  "stopLetter": "string",
                  "stopType": "string",
                  "url": "string"
                }
              }
            }
          ],
          "affectedStops": [
            {
              "accessibilitySummary": "string",
              "additionalProperties": [
                {
                  "category": "string",
                  "key": "string",
                  "modified": "1970-01-01T00:00:00Z",
                  "sourceSystemKey": "string",
                  "value": "string"
                }
              ],
              "children": [
                {
                  "additionalProperties": [
                    {
                      "category": "string",
                      "key": "string",
                      "modified": "1970-01-01T00:00:00Z",
                      "sourceSystemKey": "string",
                      "value": "string"
                    }
                  ],
                  "children": [
                    {}
                  ],
                  "childrenUrls": [
                    "string"
                  ],
                  "commonName": "string",
                  "distance": 0,
                  "id": "string",
                  "lat": 0,
                  "lon": 0,
                  "placeType": "string",
                  "url": "string"
                }
              ],
              "childrenUrls": [
                "string"
              ],
              "commonName": "string",
              "distance": 0,
              "fullName": "string",
              "hubNaptanCode": "string",
              "icsCode": "string",
              "id": "string",
              "indicator": "string",
              "individualStopId": "string",
              "lat": 0,
              "lineGroup": [
                {
                  "lineIdentifier": [
                    "string"
                  ],
                  "naptanIdReference": "string",
                  "stationAtcoCode": "string"
                }
              ],
              "lineModeGroups": [
                {
                  "lineIdentifier": [
                    "string"
                  ],
                  "modeName": "string"
                }
              ],
              "lines": [
                {
                  "crowding": {
                    "passengerFlows": [
                      {
                        "timeSlice": "string",
                        "value": 0
                      }
                    ],
                    "trainLoadings": [
                      {
                        "direction": "string",
                        "line": "string",
                        "lineDirection": "string",
                        "naptanTo": "string",
                        "platformDirection": "string",
                        "timeSlice": "string",
                        "value": 0
                      }
                    ]
                  },
                  "fullName": "string",
                  "id": "string",
                  "motType": "string",
                  "name": "string",
                  "network": "string",
                  "routeType": "Unknown",
                  "status": "Unknown",
                  "type": "string",
                  "uri": "string"
                }
              ],
              "lon": 0,
              "modes": [
                "string"
              ],
              "naptanId": "string",
              "naptanMode": "string",
              "placeType": "string",
              "platformName": "string",
              "smsCode": "string",
              "stationNaptan": "string",
              "status": true,
              "stopLetter": "string",
              "stopType": "string",
              "url": "string"
            }
          ],
          "category": "Undefined",
          "categoryDescription": "string",
          "closureText": "string",
          "created": "1970-01-01T00:00:00Z",
          "description": "string",
          "lastUpdate": "1970-01-01T00:00:00Z",
          "summary": "string",
          "type": "string"
        },
        "id": 0,
        "lineId": "string",
        "modified": "1970-01-01T00:00:00Z",
        "reason": "string",
        "statusSeverity": 0,
        "statusSeverityDescription": "string",
        "validityPeriods": [
          {
            "fromDate": "1970-01-01T00:00:00Z",
            "isNow": true,
            "toDate": "1970-01-01T00:00:00Z"
          }
        ]
      }
    ],
    "modeName": "string",
    "modified": "1970-01-01T00:00:00Z",
    "name": "string",
    "routeSections": [
      {
        "destination": "string",
        "destinationName": "string",
        "direction": "string",
        "name": "string",
        "originationName": "string",
        "originator": "string",
        "routeCode": "string",
        "serviceType": "string",
        "validFrom": "1970-01-01T00:00:00Z",
        "validTo": "1970-01-01T00:00:00Z"
      }
    ],
    "serviceTypes": [
      {
        "name": "string",
        "uri": "string"
      }
    ]
  }
]
```

<h3 id="gets-the-line-status-for-all-lines-with-a-given-severity-a-list-of-valid-severity-codes-can-be-obtained-from-a-call-to-linemetaseverity-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="gets-the-line-status-for-all-lines-with-a-given-severity-a-list-of-valid-severity-codes-can-be-obtained-from-a-call-to-linemetaseverity-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Tfl.Api.Presentation.Entities.Line](#schematfl.api.presentation.entities.line)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Gets lines that match the specified line ids.

<a id="opIdLine_Get"></a>

> Code samples

```bash
curl https://example.com/Line/string \
  -H 'Accept: application/json'
```

`GET /Line/{ids}`

<h3 id="gets-lines-that-match-the-specified-line-ids-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ids|path|[string]|true|A comma-separated list of line ids e.g. victoria,circle,N133. Max. approx. 20 ids.|

> Example responses

> 200 Response

```json
[
  {
    "created": "1970-01-01T00:00:00Z",
    "crowding": {
      "passengerFlows": [
        {
          "timeSlice": "string",
          "value": 0
        }
      ],
      "trainLoadings": [
        {
          "direction": "string",
          "line": "string",
          "lineDirection": "string",
          "naptanTo": "string",
          "platformDirection": "string",
          "timeSlice": "string",
          "value": 0
        }
      ]
    },
    "disruptions": [
      {
        "additionalInfo": "string",
        "affectedRoutes": [
          {
            "destinationName": "string",
            "direction": "string",
            "id": "string",
            "isEntireRouteSection": true,
            "lineId": "string",
            "lineString": "string",
            "name": "string",
            "originationName": "string",
            "routeCode": "string",
            "routeSectionNaptanEntrySequence": [
              {
                "ordinal": 0,
                "stopPoint": {
                  "accessibilitySummary": "string",
                  "additionalProperties": [
                    {
                      "category": "string",
                      "key": "string",
                      "modified": "1970-01-01T00:00:00Z",
                      "sourceSystemKey": "string",
                      "value": "string"
                    }
                  ],
                  "children": [
                    {
                      "additionalProperties": [
                        {
                          "category": "string",
                          "key": "string",
                          "modified": "1970-01-01T00:00:00Z",
                          "sourceSystemKey": "string",
                          "value": "string"
                        }
                      ],
                      "children": [
                        {}
                      ],
                      "childrenUrls": [
                        "string"
                      ],
                      "commonName": "string",
                      "distance": 0,
                      "id": "string",
                      "lat": 0,
                      "lon": 0,
                      "placeType": "string",
                      "url": "string"
                    }
                  ],
                  "childrenUrls": [
                    "string"
                  ],
                  "commonName": "string",
                  "distance": 0,
                  "fullName": "string",
                  "hubNaptanCode": "string",
                  "icsCode": "string",
                  "id": "string",
                  "indicator": "string",
                  "individualStopId": "string",
                  "lat": 0,
                  "lineGroup": [
                    {
                      "lineIdentifier": [
                        "string"
                      ],
                      "naptanIdReference": "string",
                      "stationAtcoCode": "string"
                    }
                  ],
                  "lineModeGroups": [
                    {
                      "lineIdentifier": [
                        "string"
                      ],
                      "modeName": "string"
                    }
                  ],
                  "lines": [
                    {
                      "crowding": {
                        "passengerFlows": [
                          {
                            "timeSlice": "string",
                            "value": 0
                          }
                        ],
                        "trainLoadings": [
                          {
                            "direction": "string",
                            "line": "string",
                            "lineDirection": "string",
                            "naptanTo": "string",
                            "platformDirection": "string",
                            "timeSlice": "string",
                            "value": 0
                          }
                        ]
                      },
                      "fullName": "string",
                      "id": "string",
                      "motType": "string",
                      "name": "string",
                      "network": "string",
                      "routeType": "Unknown",
                      "status": "Unknown",
                      "type": "string",
                      "uri": "string"
                    }
                  ],
                  "lon": 0,
                  "modes": [
                    "string"
                  ],
                  "naptanId": "string",
                  "naptanMode": "string",
                  "placeType": "string",
                  "platformName": "string",
                  "smsCode": "string",
                  "stationNaptan": "string",
                  "status": true,
                  "stopLetter": "string",
                  "stopType": "string",
                  "url": "string"
                }
              }
            ],
            "validFrom": "1970-01-01T00:00:00Z",
            "validTo": "1970-01-01T00:00:00Z",
            "via": {
              "ordinal": 0,
              "stopPoint": {
                "accessibilitySummary": "string",
                "additionalProperties": [
                  {
                    "category": "string",
                    "key": "string",
                    "modified": "1970-01-01T00:00:00Z",
                    "sourceSystemKey": "string",
                    "value": "string"
                  }
                ],
                "children": [
                  {
                    "additionalProperties": [
                      {
                        "category": "string",
                        "key": "string",
                        "modified": "1970-01-01T00:00:00Z",
                        "sourceSystemKey": "string",
                        "value": "string"
                      }
                    ],
                    "children": [
                      {}
                    ],
                    "childrenUrls": [
                      "string"
                    ],
                    "commonName": "string",
                    "distance": 0,
                    "id": "string",
                    "lat": 0,
                    "lon": 0,
                    "placeType": "string",
                    "url": "string"
                  }
                ],
                "childrenUrls": [
                  "string"
                ],
                "commonName": "string",
                "distance": 0,
                "fullName": "string",
                "hubNaptanCode": "string",
                "icsCode": "string",
                "id": "string",
                "indicator": "string",
                "individualStopId": "string",
                "lat": 0,
                "lineGroup": [
                  {
                    "lineIdentifier": [
                      "string"
                    ],
                    "naptanIdReference": "string",
                    "stationAtcoCode": "string"
                  }
                ],
                "lineModeGroups": [
                  {
                    "lineIdentifier": [
                      "string"
                    ],
                    "modeName": "string"
                  }
                ],
                "lines": [
                  {
                    "crowding": {
                      "passengerFlows": [
                        {
                          "timeSlice": "string",
                          "value": 0
                        }
                      ],
                      "trainLoadings": [
                        {
                          "direction": "string",
                          "line": "string",
                          "lineDirection": "string",
                          "naptanTo": "string",
                          "platformDirection": "string",
                          "timeSlice": "string",
                          "value": 0
                        }
                      ]
                    },
                    "fullName": "string",
                    "id": "string",
                    "motType": "string",
                    "name": "string",
                    "network": "string",
                    "routeType": "Unknown",
                    "status": "Unknown",
                    "type": "string",
                    "uri": "string"
                  }
                ],
                "lon": 0,
                "modes": [
                  "string"
                ],
                "naptanId": "string",
                "naptanMode": "string",
                "placeType": "string",
                "platformName": "string",
                "smsCode": "string",
                "stationNaptan": "string",
                "status": true,
                "stopLetter": "string",
                "stopType": "string",
                "url": "string"
              }
            }
          }
        ],
        "affectedStops": [
          {
            "accessibilitySummary": "string",
            "additionalProperties": [
              {
                "category": "string",
                "key": "string",
                "modified": "1970-01-01T00:00:00Z",
                "sourceSystemKey": "string",
                "value": "string"
              }
            ],
            "children": [
              {
                "additionalProperties": [
                  {
                    "category": "string",
                    "key": "string",
                    "modified": "1970-01-01T00:00:00Z",
                    "sourceSystemKey": "string",
                    "value": "string"
                  }
                ],
                "children": [
                  {}
                ],
                "childrenUrls": [
                  "string"
                ],
                "commonName": "string",
                "distance": 0,
                "id": "string",
                "lat": 0,
                "lon": 0,
                "placeType": "string",
                "url": "string"
              }
            ],
            "childrenUrls": [
              "string"
            ],
            "commonName": "string",
            "distance": 0,
            "fullName": "string",
            "hubNaptanCode": "string",
            "icsCode": "string",
            "id": "string",
            "indicator": "string",
            "individualStopId": "string",
            "lat": 0,
            "lineGroup": [
              {
                "lineIdentifier": [
                  "string"
                ],
                "naptanIdReference": "string",
                "stationAtcoCode": "string"
              }
            ],
            "lineModeGroups": [
              {
                "lineIdentifier": [
                  "string"
                ],
                "modeName": "string"
              }
            ],
            "lines": [
              {
                "crowding": {
                  "passengerFlows": [
                    {
                      "timeSlice": "string",
                      "value": 0
                    }
                  ],
                  "trainLoadings": [
                    {
                      "direction": "string",
                      "line": "string",
                      "lineDirection": "string",
                      "naptanTo": "string",
                      "platformDirection": "string",
                      "timeSlice": "string",
                      "value": 0
                    }
                  ]
                },
                "fullName": "string",
                "id": "string",
                "motType": "string",
                "name": "string",
                "network": "string",
                "routeType": "Unknown",
                "status": "Unknown",
                "type": "string",
                "uri": "string"
              }
            ],
            "lon": 0,
            "modes": [
              "string"
            ],
            "naptanId": "string",
            "naptanMode": "string",
            "placeType": "string",
            "platformName": "string",
            "smsCode": "string",
            "stationNaptan": "string",
            "status": true,
            "stopLetter": "string",
            "stopType": "string",
            "url": "string"
          }
        ],
        "category": "Undefined",
        "categoryDescription": "string",
        "closureText": "string",
        "created": "1970-01-01T00:00:00Z",
        "description": "string",
        "lastUpdate": "1970-01-01T00:00:00Z",
        "summary": "string",
        "type": "string"
      }
    ],
    "id": "string",
    "lineStatuses": [
      {
        "created": "1970-01-01T00:00:00Z",
        "disruption": {
          "additionalInfo": "string",
          "affectedRoutes": [
            {
              "destinationName": "string",
              "direction": "string",
              "id": "string",
              "isEntireRouteSection": true,
              "lineId": "string",
              "lineString": "string",
              "name": "string",
              "originationName": "string",
              "routeCode": "string",
              "routeSectionNaptanEntrySequence": [
                {
                  "ordinal": 0,
                  "stopPoint": {
                    "accessibilitySummary": "string",
                    "additionalProperties": [
                      {
                        "category": "string",
                        "key": "string",
                        "modified": "1970-01-01T00:00:00Z",
                        "sourceSystemKey": "string",
                        "value": "string"
                      }
                    ],
                    "children": [
                      {
                        "additionalProperties": [
                          {
                            "category": "string",
                            "key": "string",
                            "modified": "1970-01-01T00:00:00Z",
                            "sourceSystemKey": "string",
                            "value": "string"
                          }
                        ],
                        "children": [
                          {}
                        ],
                        "childrenUrls": [
                          "string"
                        ],
                        "commonName": "string",
                        "distance": 0,
                        "id": "string",
                        "lat": 0,
                        "lon": 0,
                        "placeType": "string",
                        "url": "string"
                      }
                    ],
                    "childrenUrls": [
                      "string"
                    ],
                    "commonName": "string",
                    "distance": 0,
                    "fullName": "string",
                    "hubNaptanCode": "string",
                    "icsCode": "string",
                    "id": "string",
                    "indicator": "string",
                    "individualStopId": "string",
                    "lat": 0,
                    "lineGroup": [
                      {
                        "lineIdentifier": [
                          "string"
                        ],
                        "naptanIdReference": "string",
                        "stationAtcoCode": "string"
                      }
                    ],
                    "lineModeGroups": [
                      {
                        "lineIdentifier": [
                          "string"
                        ],
                        "modeName": "string"
                      }
                    ],
                    "lines": [
                      {
                        "crowding": {
                          "passengerFlows": [
                            {
                              "timeSlice": "string",
                              "value": 0
                            }
                          ],
                          "trainLoadings": [
                            {
                              "direction": "string",
                              "line": "string",
                              "lineDirection": "string",
                              "naptanTo": "string",
                              "platformDirection": "string",
                              "timeSlice": "string",
                              "value": 0
                            }
                          ]
                        },
                        "fullName": "string",
                        "id": "string",
                        "motType": "string",
                        "name": "string",
                        "network": "string",
                        "routeType": "Unknown",
                        "status": "Unknown",
                        "type": "string",
                        "uri": "string"
                      }
                    ],
                    "lon": 0,
                    "modes": [
                      "string"
                    ],
                    "naptanId": "string",
                    "naptanMode": "string",
                    "placeType": "string",
                    "platformName": "string",
                    "smsCode": "string",
                    "stationNaptan": "string",
                    "status": true,
                    "stopLetter": "string",
                    "stopType": "string",
                    "url": "string"
                  }
                }
              ],
              "validFrom": "1970-01-01T00:00:00Z",
              "validTo": "1970-01-01T00:00:00Z",
              "via": {
                "ordinal": 0,
                "stopPoint": {
                  "accessibilitySummary": "string",
                  "additionalProperties": [
                    {
                      "category": "string",
                      "key": "string",
                      "modified": "1970-01-01T00:00:00Z",
                      "sourceSystemKey": "string",
                      "value": "string"
                    }
                  ],
                  "children": [
                    {
                      "additionalProperties": [
                        {
                          "category": "string",
                          "key": "string",
                          "modified": "1970-01-01T00:00:00Z",
                          "sourceSystemKey": "string",
                          "value": "string"
                        }
                      ],
                      "children": [
                        {}
                      ],
                      "childrenUrls": [
                        "string"
                      ],
                      "commonName": "string",
                      "distance": 0,
                      "id": "string",
                      "lat": 0,
                      "lon": 0,
                      "placeType": "string",
                      "url": "string"
                    }
                  ],
                  "childrenUrls": [
                    "string"
                  ],
                  "commonName": "string",
                  "distance": 0,
                  "fullName": "string",
                  "hubNaptanCode": "string",
                  "icsCode": "string",
                  "id": "string",
                  "indicator": "string",
                  "individualStopId": "string",
                  "lat": 0,
                  "lineGroup": [
                    {
                      "lineIdentifier": [
                        "string"
                      ],
                      "naptanIdReference": "string",
                      "stationAtcoCode": "string"
                    }
                  ],
                  "lineModeGroups": [
                    {
                      "lineIdentifier": [
                        "string"
                      ],
                      "modeName": "string"
                    }
                  ],
                  "lines": [
                    {
                      "crowding": {
                        "passengerFlows": [
                          {
                            "timeSlice": "string",
                            "value": 0
                          }
                        ],
                        "trainLoadings": [
                          {
                            "direction": "string",
                            "line": "string",
                            "lineDirection": "string",
                            "naptanTo": "string",
                            "platformDirection": "string",
                            "timeSlice": "string",
                            "value": 0
                          }
                        ]
                      },
                      "fullName": "string",
                      "id": "string",
                      "motType": "string",
                      "name": "string",
                      "network": "string",
                      "routeType": "Unknown",
                      "status": "Unknown",
                      "type": "string",
                      "uri": "string"
                    }
                  ],
                  "lon": 0,
                  "modes": [
                    "string"
                  ],
                  "naptanId": "string",
                  "naptanMode": "string",
                  "placeType": "string",
                  "platformName": "string",
                  "smsCode": "string",
                  "stationNaptan": "string",
                  "status": true,
                  "stopLetter": "string",
                  "stopType": "string",
                  "url": "string"
                }
              }
            }
          ],
          "affectedStops": [
            {
              "accessibilitySummary": "string",
              "additionalProperties": [
                {
                  "category": "string",
                  "key": "string",
                  "modified": "1970-01-01T00:00:00Z",
                  "sourceSystemKey": "string",
                  "value": "string"
                }
              ],
              "children": [
                {
                  "additionalProperties": [
                    {
                      "category": "string",
                      "key": "string",
                      "modified": "1970-01-01T00:00:00Z",
                      "sourceSystemKey": "string",
                      "value": "string"
                    }
                  ],
                  "children": [
                    {}
                  ],
                  "childrenUrls": [
                    "string"
                  ],
                  "commonName": "string",
                  "distance": 0,
                  "id": "string",
                  "lat": 0,
                  "lon": 0,
                  "placeType": "string",
                  "url": "string"
                }
              ],
              "childrenUrls": [
                "string"
              ],
              "commonName": "string",
              "distance": 0,
              "fullName": "string",
              "hubNaptanCode": "string",
              "icsCode": "string",
              "id": "string",
              "indicator": "string",
              "individualStopId": "string",
              "lat": 0,
              "lineGroup": [
                {
                  "lineIdentifier": [
                    "string"
                  ],
                  "naptanIdReference": "string",
                  "stationAtcoCode": "string"
                }
              ],
              "lineModeGroups": [
                {
                  "lineIdentifier": [
                    "string"
                  ],
                  "modeName": "string"
                }
              ],
              "lines": [
                {
                  "crowding": {
                    "passengerFlows": [
                      {
                        "timeSlice": "string",
                        "value": 0
                      }
                    ],
                    "trainLoadings": [
                      {
                        "direction": "string",
                        "line": "string",
                        "lineDirection": "string",
                        "naptanTo": "string",
                        "platformDirection": "string",
                        "timeSlice": "string",
                        "value": 0
                      }
                    ]
                  },
                  "fullName": "string",
                  "id": "string",
                  "motType": "string",
                  "name": "string",
                  "network": "string",
                  "routeType": "Unknown",
                  "status": "Unknown",
                  "type": "string",
                  "uri": "string"
                }
              ],
              "lon": 0,
              "modes": [
                "string"
              ],
              "naptanId": "string",
              "naptanMode": "string",
              "placeType": "string",
              "platformName": "string",
              "smsCode": "string",
              "stationNaptan": "string",
              "status": true,
              "stopLetter": "string",
              "stopType": "string",
              "url": "string"
            }
          ],
          "category": "Undefined",
          "categoryDescription": "string",
          "closureText": "string",
          "created": "1970-01-01T00:00:00Z",
          "description": "string",
          "lastUpdate": "1970-01-01T00:00:00Z",
          "summary": "string",
          "type": "string"
        },
        "id": 0,
        "lineId": "string",
        "modified": "1970-01-01T00:00:00Z",
        "reason": "string",
        "statusSeverity": 0,
        "statusSeverityDescription": "string",
        "validityPeriods": [
          {
            "fromDate": "1970-01-01T00:00:00Z",
            "isNow": true,
            "toDate": "1970-01-01T00:00:00Z"
          }
        ]
      }
    ],
    "modeName": "string",
    "modified": "1970-01-01T00:00:00Z",
    "name": "string",
    "routeSections": [
      {
        "destination": "string",
        "destinationName": "string",
        "direction": "string",
        "name": "string",
        "originationName": "string",
        "originator": "string",
        "routeCode": "string",
        "serviceType": "string",
        "validFrom": "1970-01-01T00:00:00Z",
        "validTo": "1970-01-01T00:00:00Z"
      }
    ],
    "serviceTypes": [
      {
        "name": "string",
        "uri": "string"
      }
    ]
  }
]
```

<h3 id="gets-lines-that-match-the-specified-line-ids-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="gets-lines-that-match-the-specified-line-ids-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Tfl.Api.Presentation.Entities.Line](#schematfl.api.presentation.entities.line)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get the list of arrival predictions for given line ids based at the given stop

<a id="opIdLine_Arrivals"></a>

> Code samples

```bash
curl https://example.com/Line/string/Arrivals/string \
  -H 'Accept: application/json'
```

`GET /Line/{ids}/Arrivals/{stopPointId}`

<h3 id="get-the-list-of-arrival-predictions-for-given-line-ids-based-at-the-given-stop-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ids|path|[string]|true|A comma-separated list of line ids e.g. victoria,circle,N133. Max. approx. 20 ids.|
|stopPointId|path|string|true|Optional. Id of stop to get arrival predictions for (station naptan code e.g. 940GZZLUASL, you can use /StopPoint/Search/{query} endpoint to find a stop point id from a station name)|
|direction|query|string|false|Optional. The direction of travel. Can be inbound or outbound or all. If left blank, and destinationStopId is set, will default to all|
|destinationStationId|query|string|false|Optional. Id of destination stop|

#### Enumerated Values

|Parameter|Value|
|---|---|
|direction|inbound|
|direction|outbound|
|direction|all|

> Example responses

> 200 Response

```json
[
  {
    "bearing": "string",
    "currentLocation": "string",
    "destinationName": "string",
    "destinationNaptanId": "string",
    "direction": "string",
    "expectedArrival": "1970-01-01T00:00:00Z",
    "id": "string",
    "lineId": "string",
    "lineName": "string",
    "modeName": "string",
    "naptanId": "string",
    "operationType": 0,
    "platformName": "string",
    "stationName": "string",
    "timeToLive": "1970-01-01T00:00:00Z",
    "timeToStation": 0,
    "timestamp": "1970-01-01T00:00:00Z",
    "timing": {
      "countdownServerAdjustment": "string",
      "insert": "1970-01-01T00:00:00Z",
      "read": "1970-01-01T00:00:00Z",
      "received": "1970-01-01T00:00:00Z",
      "sent": "1970-01-01T00:00:00Z",
      "source": "1970-01-01T00:00:00Z"
    },
    "towards": "string",
    "vehicleId": "string"
  }
]
```

<h3 id="get-the-list-of-arrival-predictions-for-given-line-ids-based-at-the-given-stop-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-the-list-of-arrival-predictions-for-given-line-ids-based-at-the-given-stop-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Tfl.Api.Presentation.Entities.Prediction](#schematfl.api.presentation.entities.prediction)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get disruptions for the given line ids

<a id="opIdLine_Disruption"></a>

> Code samples

```bash
curl https://example.com/Line/string/Disruption \
  -H 'Accept: application/json'
```

`GET /Line/{ids}/Disruption`

<h3 id="get-disruptions-for-the-given-line-ids-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ids|path|[string]|true|A comma-separated list of line ids e.g. victoria,circle,N133. Max. approx. 20 ids.|

> Example responses

> 200 Response

```json
[
  {
    "additionalInfo": "string",
    "affectedRoutes": [
      {
        "destinationName": "string",
        "direction": "string",
        "id": "string",
        "isEntireRouteSection": true,
        "lineId": "string",
        "lineString": "string",
        "name": "string",
        "originationName": "string",
        "routeCode": "string",
        "routeSectionNaptanEntrySequence": [
          {
            "ordinal": 0,
            "stopPoint": {
              "accessibilitySummary": "string",
              "additionalProperties": [
                {
                  "category": "string",
                  "key": "string",
                  "modified": "1970-01-01T00:00:00Z",
                  "sourceSystemKey": "string",
                  "value": "string"
                }
              ],
              "children": [
                {
                  "additionalProperties": [
                    {
                      "category": "string",
                      "key": "string",
                      "modified": "1970-01-01T00:00:00Z",
                      "sourceSystemKey": "string",
                      "value": "string"
                    }
                  ],
                  "children": [
                    {}
                  ],
                  "childrenUrls": [
                    "string"
                  ],
                  "commonName": "string",
                  "distance": 0,
                  "id": "string",
                  "lat": 0,
                  "lon": 0,
                  "placeType": "string",
                  "url": "string"
                }
              ],
              "childrenUrls": [
                "string"
              ],
              "commonName": "string",
              "distance": 0,
              "fullName": "string",
              "hubNaptanCode": "string",
              "icsCode": "string",
              "id": "string",
              "indicator": "string",
              "individualStopId": "string",
              "lat": 0,
              "lineGroup": [
                {
                  "lineIdentifier": [
                    "string"
                  ],
                  "naptanIdReference": "string",
                  "stationAtcoCode": "string"
                }
              ],
              "lineModeGroups": [
                {
                  "lineIdentifier": [
                    "string"
                  ],
                  "modeName": "string"
                }
              ],
              "lines": [
                {
                  "crowding": {
                    "passengerFlows": [
                      {
                        "timeSlice": "string",
                        "value": 0
                      }
                    ],
                    "trainLoadings": [
                      {
                        "direction": "string",
                        "line": "string",
                        "lineDirection": "string",
                        "naptanTo": "string",
                        "platformDirection": "string",
                        "timeSlice": "string",
                        "value": 0
                      }
                    ]
                  },
                  "fullName": "string",
                  "id": "string",
                  "motType": "string",
                  "name": "string",
                  "network": "string",
                  "routeType": "Unknown",
                  "status": "Unknown",
                  "type": "string",
                  "uri": "string"
                }
              ],
              "lon": 0,
              "modes": [
                "string"
              ],
              "naptanId": "string",
              "naptanMode": "string",
              "placeType": "string",
              "platformName": "string",
              "smsCode": "string",
              "stationNaptan": "string",
              "status": true,
              "stopLetter": "string",
              "stopType": "string",
              "url": "string"
            }
          }
        ],
        "validFrom": "1970-01-01T00:00:00Z",
        "validTo": "1970-01-01T00:00:00Z",
        "via": {
          "ordinal": 0,
          "stopPoint": {
            "accessibilitySummary": "string",
            "additionalProperties": [
              {
                "category": "string",
                "key": "string",
                "modified": "1970-01-01T00:00:00Z",
                "sourceSystemKey": "string",
                "value": "string"
              }
            ],
            "children": [
              {
                "additionalProperties": [
                  {
                    "category": "string",
                    "key": "string",
                    "modified": "1970-01-01T00:00:00Z",
                    "sourceSystemKey": "string",
                    "value": "string"
                  }
                ],
                "children": [
                  {}
                ],
                "childrenUrls": [
                  "string"
                ],
                "commonName": "string",
                "distance": 0,
                "id": "string",
                "lat": 0,
                "lon": 0,
                "placeType": "string",
                "url": "string"
              }
            ],
            "childrenUrls": [
              "string"
            ],
            "commonName": "string",
            "distance": 0,
            "fullName": "string",
            "hubNaptanCode": "string",
            "icsCode": "string",
            "id": "string",
            "indicator": "string",
            "individualStopId": "string",
            "lat": 0,
            "lineGroup": [
              {
                "lineIdentifier": [
                  "string"
                ],
                "naptanIdReference": "string",
                "stationAtcoCode": "string"
              }
            ],
            "lineModeGroups": [
              {
                "lineIdentifier": [
                  "string"
                ],
                "modeName": "string"
              }
            ],
            "lines": [
              {
                "crowding": {
                  "passengerFlows": [
                    {
                      "timeSlice": "string",
                      "value": 0
                    }
                  ],
                  "trainLoadings": [
                    {
                      "direction": "string",
                      "line": "string",
                      "lineDirection": "string",
                      "naptanTo": "string",
                      "platformDirection": "string",
                      "timeSlice": "string",
                      "value": 0
                    }
                  ]
                },
                "fullName": "string",
                "id": "string",
                "motType": "string",
                "name": "string",
                "network": "string",
                "routeType": "Unknown",
                "status": "Unknown",
                "type": "string",
                "uri": "string"
              }
            ],
            "lon": 0,
            "modes": [
              "string"
            ],
            "naptanId": "string",
            "naptanMode": "string",
            "placeType": "string",
            "platformName": "string",
            "smsCode": "string",
            "stationNaptan": "string",
            "status": true,
            "stopLetter": "string",
            "stopType": "string",
            "url": "string"
          }
        }
      }
    ],
    "affectedStops": [
      {
        "accessibilitySummary": "string",
        "additionalProperties": [
          {
            "category": "string",
            "key": "string",
            "modified": "1970-01-01T00:00:00Z",
            "sourceSystemKey": "string",
            "value": "string"
          }
        ],
        "children": [
          {
            "additionalProperties": [
              {
                "category": "string",
                "key": "string",
                "modified": "1970-01-01T00:00:00Z",
                "sourceSystemKey": "string",
                "value": "string"
              }
            ],
            "children": [
              {}
            ],
            "childrenUrls": [
              "string"
            ],
            "commonName": "string",
            "distance": 0,
            "id": "string",
            "lat": 0,
            "lon": 0,
            "placeType": "string",
            "url": "string"
          }
        ],
        "childrenUrls": [
          "string"
        ],
        "commonName": "string",
        "distance": 0,
        "fullName": "string",
        "hubNaptanCode": "string",
        "icsCode": "string",
        "id": "string",
        "indicator": "string",
        "individualStopId": "string",
        "lat": 0,
        "lineGroup": [
          {
            "lineIdentifier": [
              "string"
            ],
            "naptanIdReference": "string",
            "stationAtcoCode": "string"
          }
        ],
        "lineModeGroups": [
          {
            "lineIdentifier": [
              "string"
            ],
            "modeName": "string"
          }
        ],
        "lines": [
          {
            "crowding": {
              "passengerFlows": [
                {
                  "timeSlice": "string",
                  "value": 0
                }
              ],
              "trainLoadings": [
                {
                  "direction": "string",
                  "line": "string",
                  "lineDirection": "string",
                  "naptanTo": "string",
                  "platformDirection": "string",
                  "timeSlice": "string",
                  "value": 0
                }
              ]
            },
            "fullName": "string",
            "id": "string",
            "motType": "string",
            "name": "string",
            "network": "string",
            "routeType": "Unknown",
            "status": "Unknown",
            "type": "string",
            "uri": "string"
          }
        ],
        "lon": 0,
        "modes": [
          "string"
        ],
        "naptanId": "string",
        "naptanMode": "string",
        "placeType": "string",
        "platformName": "string",
        "smsCode": "string",
        "stationNaptan": "string",
        "status": true,
        "stopLetter": "string",
        "stopType": "string",
        "url": "string"
      }
    ],
    "category": "Undefined",
    "categoryDescription": "string",
    "closureText": "string",
    "created": "1970-01-01T00:00:00Z",
    "description": "string",
    "lastUpdate": "1970-01-01T00:00:00Z",
    "summary": "string",
    "type": "string"
  }
]
```

<h3 id="get-disruptions-for-the-given-line-ids-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-disruptions-for-the-given-line-ids-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Tfl.Api.Presentation.Entities.Disruption](#schematfl.api.presentation.entities.disruption)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get all valid routes for given line ids, including the name and id of the originating and terminating stops for each route.

<a id="opIdLine_LineRoutesByIds"></a>

> Code samples

```bash
curl https://example.com/Line/string/Route \
  -H 'Accept: application/json'
```

`GET /Line/{ids}/Route`

<h3 id="get-all-valid-routes-for-given-line-ids-including-the-name-and-id-of-the-originating-and-terminating-stops-for-each-route-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ids|path|[string]|true|A comma-separated list of line ids e.g. victoria,circle,N133. Max. approx. 20 ids.|
|serviceTypes|query|[string]|false|A comma seperated list of service types to filter on. Supported values: Regular, Night. Defaulted to 'Regular' if not specified|

#### Enumerated Values

|Parameter|Value|
|---|---|
|serviceTypes|Regular|
|serviceTypes|Night|

> Example responses

> 200 Response

```json
[
  {
    "created": "1970-01-01T00:00:00Z",
    "crowding": {
      "passengerFlows": [
        {
          "timeSlice": "string",
          "value": 0
        }
      ],
      "trainLoadings": [
        {
          "direction": "string",
          "line": "string",
          "lineDirection": "string",
          "naptanTo": "string",
          "platformDirection": "string",
          "timeSlice": "string",
          "value": 0
        }
      ]
    },
    "disruptions": [
      {
        "additionalInfo": "string",
        "affectedRoutes": [
          {
            "destinationName": "string",
            "direction": "string",
            "id": "string",
            "isEntireRouteSection": true,
            "lineId": "string",
            "lineString": "string",
            "name": "string",
            "originationName": "string",
            "routeCode": "string",
            "routeSectionNaptanEntrySequence": [
              {
                "ordinal": 0,
                "stopPoint": {
                  "accessibilitySummary": "string",
                  "additionalProperties": [
                    {
                      "category": "string",
                      "key": "string",
                      "modified": "1970-01-01T00:00:00Z",
                      "sourceSystemKey": "string",
                      "value": "string"
                    }
                  ],
                  "children": [
                    {
                      "additionalProperties": [
                        {
                          "category": "string",
                          "key": "string",
                          "modified": "1970-01-01T00:00:00Z",
                          "sourceSystemKey": "string",
                          "value": "string"
                        }
                      ],
                      "children": [
                        {}
                      ],
                      "childrenUrls": [
                        "string"
                      ],
                      "commonName": "string",
                      "distance": 0,
                      "id": "string",
                      "lat": 0,
                      "lon": 0,
                      "placeType": "string",
                      "url": "string"
                    }
                  ],
                  "childrenUrls": [
                    "string"
                  ],
                  "commonName": "string",
                  "distance": 0,
                  "fullName": "string",
                  "hubNaptanCode": "string",
                  "icsCode": "string",
                  "id": "string",
                  "indicator": "string",
                  "individualStopId": "string",
                  "lat": 0,
                  "lineGroup": [
                    {
                      "lineIdentifier": [
                        "string"
                      ],
                      "naptanIdReference": "string",
                      "stationAtcoCode": "string"
                    }
                  ],
                  "lineModeGroups": [
                    {
                      "lineIdentifier": [
                        "string"
                      ],
                      "modeName": "string"
                    }
                  ],
                  "lines": [
                    {
                      "crowding": {
                        "passengerFlows": [
                          {
                            "timeSlice": "string",
                            "value": 0
                          }
                        ],
                        "trainLoadings": [
                          {
                            "direction": "string",
                            "line": "string",
                            "lineDirection": "string",
                            "naptanTo": "string",
                            "platformDirection": "string",
                            "timeSlice": "string",
                            "value": 0
                          }
                        ]
                      },
                      "fullName": "string",
                      "id": "string",
                      "motType": "string",
                      "name": "string",
                      "network": "string",
                      "routeType": "Unknown",
                      "status": "Unknown",
                      "type": "string",
                      "uri": "string"
                    }
                  ],
                  "lon": 0,
                  "modes": [
                    "string"
                  ],
                  "naptanId": "string",
                  "naptanMode": "string",
                  "placeType": "string",
                  "platformName": "string",
                  "smsCode": "string",
                  "stationNaptan": "string",
                  "status": true,
                  "stopLetter": "string",
                  "stopType": "string",
                  "url": "string"
                }
              }
            ],
            "validFrom": "1970-01-01T00:00:00Z",
            "validTo": "1970-01-01T00:00:00Z",
            "via": {
              "ordinal": 0,
              "stopPoint": {
                "accessibilitySummary": "string",
                "additionalProperties": [
                  {
                    "category": "string",
                    "key": "string",
                    "modified": "1970-01-01T00:00:00Z",
                    "sourceSystemKey": "string",
                    "value": "string"
                  }
                ],
                "children": [
                  {
                    "additionalProperties": [
                      {
                        "category": "string",
                        "key": "string",
                        "modified": "1970-01-01T00:00:00Z",
                        "sourceSystemKey": "string",
                        "value": "string"
                      }
                    ],
                    "children": [
                      {}
                    ],
                    "childrenUrls": [
                      "string"
                    ],
                    "commonName": "string",
                    "distance": 0,
                    "id": "string",
                    "lat": 0,
                    "lon": 0,
                    "placeType": "string",
                    "url": "string"
                  }
                ],
                "childrenUrls": [
                  "string"
                ],
                "commonName": "string",
                "distance": 0,
                "fullName": "string",
                "hubNaptanCode": "string",
                "icsCode": "string",
                "id": "string",
                "indicator": "string",
                "individualStopId": "string",
                "lat": 0,
                "lineGroup": [
                  {
                    "lineIdentifier": [
                      "string"
                    ],
                    "naptanIdReference": "string",
                    "stationAtcoCode": "string"
                  }
                ],
                "lineModeGroups": [
                  {
                    "lineIdentifier": [
                      "string"
                    ],
                    "modeName": "string"
                  }
                ],
                "lines": [
                  {
                    "crowding": {
                      "passengerFlows": [
                        {
                          "timeSlice": "string",
                          "value": 0
                        }
                      ],
                      "trainLoadings": [
                        {
                          "direction": "string",
                          "line": "string",
                          "lineDirection": "string",
                          "naptanTo": "string",
                          "platformDirection": "string",
                          "timeSlice": "string",
                          "value": 0
                        }
                      ]
                    },
                    "fullName": "string",
                    "id": "string",
                    "motType": "string",
                    "name": "string",
                    "network": "string",
                    "routeType": "Unknown",
                    "status": "Unknown",
                    "type": "string",
                    "uri": "string"
                  }
                ],
                "lon": 0,
                "modes": [
                  "string"
                ],
                "naptanId": "string",
                "naptanMode": "string",
                "placeType": "string",
                "platformName": "string",
                "smsCode": "string",
                "stationNaptan": "string",
                "status": true,
                "stopLetter": "string",
                "stopType": "string",
                "url": "string"
              }
            }
          }
        ],
        "affectedStops": [
          {
            "accessibilitySummary": "string",
            "additionalProperties": [
              {
                "category": "string",
                "key": "string",
                "modified": "1970-01-01T00:00:00Z",
                "sourceSystemKey": "string",
                "value": "string"
              }
            ],
            "children": [
              {
                "additionalProperties": [
                  {
                    "category": "string",
                    "key": "string",
                    "modified": "1970-01-01T00:00:00Z",
                    "sourceSystemKey": "string",
                    "value": "string"
                  }
                ],
                "children": [
                  {}
                ],
                "childrenUrls": [
                  "string"
                ],
                "commonName": "string",
                "distance": 0,
                "id": "string",
                "lat": 0,
                "lon": 0,
                "placeType": "string",
                "url": "string"
              }
            ],
            "childrenUrls": [
              "string"
            ],
            "commonName": "string",
            "distance": 0,
            "fullName": "string",
            "hubNaptanCode": "string",
            "icsCode": "string",
            "id": "string",
            "indicator": "string",
            "individualStopId": "string",
            "lat": 0,
            "lineGroup": [
              {
                "lineIdentifier": [
                  "string"
                ],
                "naptanIdReference": "string",
                "stationAtcoCode": "string"
              }
            ],
            "lineModeGroups": [
              {
                "lineIdentifier": [
                  "string"
                ],
                "modeName": "string"
              }
            ],
            "lines": [
              {
                "crowding": {
                  "passengerFlows": [
                    {
                      "timeSlice": "string",
                      "value": 0
                    }
                  ],
                  "trainLoadings": [
                    {
                      "direction": "string",
                      "line": "string",
                      "lineDirection": "string",
                      "naptanTo": "string",
                      "platformDirection": "string",
                      "timeSlice": "string",
                      "value": 0
                    }
                  ]
                },
                "fullName": "string",
                "id": "string",
                "motType": "string",
                "name": "string",
                "network": "string",
                "routeType": "Unknown",
                "status": "Unknown",
                "type": "string",
                "uri": "string"
              }
            ],
            "lon": 0,
            "modes": [
              "string"
            ],
            "naptanId": "string",
            "naptanMode": "string",
            "placeType": "string",
            "platformName": "string",
            "smsCode": "string",
            "stationNaptan": "string",
            "status": true,
            "stopLetter": "string",
            "stopType": "string",
            "url": "string"
          }
        ],
        "category": "Undefined",
        "categoryDescription": "string",
        "closureText": "string",
        "created": "1970-01-01T00:00:00Z",
        "description": "string",
        "lastUpdate": "1970-01-01T00:00:00Z",
        "summary": "string",
        "type": "string"
      }
    ],
    "id": "string",
    "lineStatuses": [
      {
        "created": "1970-01-01T00:00:00Z",
        "disruption": {
          "additionalInfo": "string",
          "affectedRoutes": [
            {
              "destinationName": "string",
              "direction": "string",
              "id": "string",
              "isEntireRouteSection": true,
              "lineId": "string",
              "lineString": "string",
              "name": "string",
              "originationName": "string",
              "routeCode": "string",
              "routeSectionNaptanEntrySequence": [
                {
                  "ordinal": 0,
                  "stopPoint": {
                    "accessibilitySummary": "string",
                    "additionalProperties": [
                      {
                        "category": "string",
                        "key": "string",
                        "modified": "1970-01-01T00:00:00Z",
                        "sourceSystemKey": "string",
                        "value": "string"
                      }
                    ],
                    "children": [
                      {
                        "additionalProperties": [
                          {
                            "category": "string",
                            "key": "string",
                            "modified": "1970-01-01T00:00:00Z",
                            "sourceSystemKey": "string",
                            "value": "string"
                          }
                        ],
                        "children": [
                          {}
                        ],
                        "childrenUrls": [
                          "string"
                        ],
                        "commonName": "string",
                        "distance": 0,
                        "id": "string",
                        "lat": 0,
                        "lon": 0,
                        "placeType": "string",
                        "url": "string"
                      }
                    ],
                    "childrenUrls": [
                      "string"
                    ],
                    "commonName": "string",
                    "distance": 0,
                    "fullName": "string",
                    "hubNaptanCode": "string",
                    "icsCode": "string",
                    "id": "string",
                    "indicator": "string",
                    "individualStopId": "string",
                    "lat": 0,
                    "lineGroup": [
                      {
                        "lineIdentifier": [
                          "string"
                        ],
                        "naptanIdReference": "string",
                        "stationAtcoCode": "string"
                      }
                    ],
                    "lineModeGroups": [
                      {
                        "lineIdentifier": [
                          "string"
                        ],
                        "modeName": "string"
                      }
                    ],
                    "lines": [
                      {
                        "crowding": {
                          "passengerFlows": [
                            {
                              "timeSlice": "string",
                              "value": 0
                            }
                          ],
                          "trainLoadings": [
                            {
                              "direction": "string",
                              "line": "string",
                              "lineDirection": "string",
                              "naptanTo": "string",
                              "platformDirection": "string",
                              "timeSlice": "string",
                              "value": 0
                            }
                          ]
                        },
                        "fullName": "string",
                        "id": "string",
                        "motType": "string",
                        "name": "string",
                        "network": "string",
                        "routeType": "Unknown",
                        "status": "Unknown",
                        "type": "string",
                        "uri": "string"
                      }
                    ],
                    "lon": 0,
                    "modes": [
                      "string"
                    ],
                    "naptanId": "string",
                    "naptanMode": "string",
                    "placeType": "string",
                    "platformName": "string",
                    "smsCode": "string",
                    "stationNaptan": "string",
                    "status": true,
                    "stopLetter": "string",
                    "stopType": "string",
                    "url": "string"
                  }
                }
              ],
              "validFrom": "1970-01-01T00:00:00Z",
              "validTo": "1970-01-01T00:00:00Z",
              "via": {
                "ordinal": 0,
                "stopPoint": {
                  "accessibilitySummary": "string",
                  "additionalProperties": [
                    {
                      "category": "string",
                      "key": "string",
                      "modified": "1970-01-01T00:00:00Z",
                      "sourceSystemKey": "string",
                      "value": "string"
                    }
                  ],
                  "children": [
                    {
                      "additionalProperties": [
                        {
                          "category": "string",
                          "key": "string",
                          "modified": "1970-01-01T00:00:00Z",
                          "sourceSystemKey": "string",
                          "value": "string"
                        }
                      ],
                      "children": [
                        {}
                      ],
                      "childrenUrls": [
                        "string"
                      ],
                      "commonName": "string",
                      "distance": 0,
                      "id": "string",
                      "lat": 0,
                      "lon": 0,
                      "placeType": "string",
                      "url": "string"
                    }
                  ],
                  "childrenUrls": [
                    "string"
                  ],
                  "commonName": "string",
                  "distance": 0,
                  "fullName": "string",
                  "hubNaptanCode": "string",
                  "icsCode": "string",
                  "id": "string",
                  "indicator": "string",
                  "individualStopId": "string",
                  "lat": 0,
                  "lineGroup": [
                    {
                      "lineIdentifier": [
                        "string"
                      ],
                      "naptanIdReference": "string",
                      "stationAtcoCode": "string"
                    }
                  ],
                  "lineModeGroups": [
                    {
                      "lineIdentifier": [
                        "string"
                      ],
                      "modeName": "string"
                    }
                  ],
                  "lines": [
                    {
                      "crowding": {
                        "passengerFlows": [
                          {
                            "timeSlice": "string",
                            "value": 0
                          }
                        ],
                        "trainLoadings": [
                          {
                            "direction": "string",
                            "line": "string",
                            "lineDirection": "string",
                            "naptanTo": "string",
                            "platformDirection": "string",
                            "timeSlice": "string",
                            "value": 0
                          }
                        ]
                      },
                      "fullName": "string",
                      "id": "string",
                      "motType": "string",
                      "name": "string",
                      "network": "string",
                      "routeType": "Unknown",
                      "status": "Unknown",
                      "type": "string",
                      "uri": "string"
                    }
                  ],
                  "lon": 0,
                  "modes": [
                    "string"
                  ],
                  "naptanId": "string",
                  "naptanMode": "string",
                  "placeType": "string",
                  "platformName": "string",
                  "smsCode": "string",
                  "stationNaptan": "string",
                  "status": true,
                  "stopLetter": "string",
                  "stopType": "string",
                  "url": "string"
                }
              }
            }
          ],
          "affectedStops": [
            {
              "accessibilitySummary": "string",
              "additionalProperties": [
                {
                  "category": "string",
                  "key": "string",
                  "modified": "1970-01-01T00:00:00Z",
                  "sourceSystemKey": "string",
                  "value": "string"
                }
              ],
              "children": [
                {
                  "additionalProperties": [
                    {
                      "category": "string",
                      "key": "string",
                      "modified": "1970-01-01T00:00:00Z",
                      "sourceSystemKey": "string",
                      "value": "string"
                    }
                  ],
                  "children": [
                    {}
                  ],
                  "childrenUrls": [
                    "string"
                  ],
                  "commonName": "string",
                  "distance": 0,
                  "id": "string",
                  "lat": 0,
                  "lon": 0,
                  "placeType": "string",
                  "url": "string"
                }
              ],
              "childrenUrls": [
                "string"
              ],
              "commonName": "string",
              "distance": 0,
              "fullName": "string",
              "hubNaptanCode": "string",
              "icsCode": "string",
              "id": "string",
              "indicator": "string",
              "individualStopId": "string",
              "lat": 0,
              "lineGroup": [
                {
                  "lineIdentifier": [
                    "string"
                  ],
                  "naptanIdReference": "string",
                  "stationAtcoCode": "string"
                }
              ],
              "lineModeGroups": [
                {
                  "lineIdentifier": [
                    "string"
                  ],
                  "modeName": "string"
                }
              ],
              "lines": [
                {
                  "crowding": {
                    "passengerFlows": [
                      {
                        "timeSlice": "string",
                        "value": 0
                      }
                    ],
                    "trainLoadings": [
                      {
                        "direction": "string",
                        "line": "string",
                        "lineDirection": "string",
                        "naptanTo": "string",
                        "platformDirection": "string",
                        "timeSlice": "string",
                        "value": 0
                      }
                    ]
                  },
                  "fullName": "string",
                  "id": "string",
                  "motType": "string",
                  "name": "string",
                  "network": "string",
                  "routeType": "Unknown",
                  "status": "Unknown",
                  "type": "string",
                  "uri": "string"
                }
              ],
              "lon": 0,
              "modes": [
                "string"
              ],
              "naptanId": "string",
              "naptanMode": "string",
              "placeType": "string",
              "platformName": "string",
              "smsCode": "string",
              "stationNaptan": "string",
              "status": true,
              "stopLetter": "string",
              "stopType": "string",
              "url": "string"
            }
          ],
          "category": "Undefined",
          "categoryDescription": "string",
          "closureText": "string",
          "created": "1970-01-01T00:00:00Z",
          "description": "string",
          "lastUpdate": "1970-01-01T00:00:00Z",
          "summary": "string",
          "type": "string"
        },
        "id": 0,
        "lineId": "string",
        "modified": "1970-01-01T00:00:00Z",
        "reason": "string",
        "statusSeverity": 0,
        "statusSeverityDescription": "string",
        "validityPeriods": [
          {
            "fromDate": "1970-01-01T00:00:00Z",
            "isNow": true,
            "toDate": "1970-01-01T00:00:00Z"
          }
        ]
      }
    ],
    "modeName": "string",
    "modified": "1970-01-01T00:00:00Z",
    "name": "string",
    "routeSections": [
      {
        "destination": "string",
        "destinationName": "string",
        "direction": "string",
        "name": "string",
        "originationName": "string",
        "originator": "string",
        "routeCode": "string",
        "serviceType": "string",
        "validFrom": "1970-01-01T00:00:00Z",
        "validTo": "1970-01-01T00:00:00Z"
      }
    ],
    "serviceTypes": [
      {
        "name": "string",
        "uri": "string"
      }
    ]
  }
]
```

<h3 id="get-all-valid-routes-for-given-line-ids-including-the-name-and-id-of-the-originating-and-terminating-stops-for-each-route-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-all-valid-routes-for-given-line-ids-including-the-name-and-id-of-the-originating-and-terminating-stops-for-each-route-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Tfl.Api.Presentation.Entities.Line](#schematfl.api.presentation.entities.line)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Gets the line status of for given line ids e.g Minor Delays

<a id="opIdLine_StatusByIds"></a>

> Code samples

```bash
curl https://example.com/Line/string/Status \
  -H 'Accept: application/json'
```

`GET /Line/{ids}/Status`

<h3 id="gets-the-line-status-of-for-given-line-ids-eg-minor-delays-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ids|path|[string]|true|A comma-separated list of line ids e.g. victoria,circle,N133. Max. approx. 20 ids.|
|detail|query|boolean|false|Include details of the disruptions that are causing the line status including the affected stops and routes|

> Example responses

> 200 Response

```json
[
  {
    "created": "1970-01-01T00:00:00Z",
    "crowding": {
      "passengerFlows": [
        {
          "timeSlice": "string",
          "value": 0
        }
      ],
      "trainLoadings": [
        {
          "direction": "string",
          "line": "string",
          "lineDirection": "string",
          "naptanTo": "string",
          "platformDirection": "string",
          "timeSlice": "string",
          "value": 0
        }
      ]
    },
    "disruptions": [
      {
        "additionalInfo": "string",
        "affectedRoutes": [
          {
            "destinationName": "string",
            "direction": "string",
            "id": "string",
            "isEntireRouteSection": true,
            "lineId": "string",
            "lineString": "string",
            "name": "string",
            "originationName": "string",
            "routeCode": "string",
            "routeSectionNaptanEntrySequence": [
              {
                "ordinal": 0,
                "stopPoint": {
                  "accessibilitySummary": "string",
                  "additionalProperties": [
                    {
                      "category": "string",
                      "key": "string",
                      "modified": "1970-01-01T00:00:00Z",
                      "sourceSystemKey": "string",
                      "value": "string"
                    }
                  ],
                  "children": [
                    {
                      "additionalProperties": [
                        {
                          "category": "string",
                          "key": "string",
                          "modified": "1970-01-01T00:00:00Z",
                          "sourceSystemKey": "string",
                          "value": "string"
                        }
                      ],
                      "children": [
                        {}
                      ],
                      "childrenUrls": [
                        "string"
                      ],
                      "commonName": "string",
                      "distance": 0,
                      "id": "string",
                      "lat": 0,
                      "lon": 0,
                      "placeType": "string",
                      "url": "string"
                    }
                  ],
                  "childrenUrls": [
                    "string"
                  ],
                  "commonName": "string",
                  "distance": 0,
                  "fullName": "string",
                  "hubNaptanCode": "string",
                  "icsCode": "string",
                  "id": "string",
                  "indicator": "string",
                  "individualStopId": "string",
                  "lat": 0,
                  "lineGroup": [
                    {
                      "lineIdentifier": [
                        "string"
                      ],
                      "naptanIdReference": "string",
                      "stationAtcoCode": "string"
                    }
                  ],
                  "lineModeGroups": [
                    {
                      "lineIdentifier": [
                        "string"
                      ],
                      "modeName": "string"
                    }
                  ],
                  "lines": [
                    {
                      "crowding": {
                        "passengerFlows": [
                          {
                            "timeSlice": "string",
                            "value": 0
                          }
                        ],
                        "trainLoadings": [
                          {
                            "direction": "string",
                            "line": "string",
                            "lineDirection": "string",
                            "naptanTo": "string",
                            "platformDirection": "string",
                            "timeSlice": "string",
                            "value": 0
                          }
                        ]
                      },
                      "fullName": "string",
                      "id": "string",
                      "motType": "string",
                      "name": "string",
                      "network": "string",
                      "routeType": "Unknown",
                      "status": "Unknown",
                      "type": "string",
                      "uri": "string"
                    }
                  ],
                  "lon": 0,
                  "modes": [
                    "string"
                  ],
                  "naptanId": "string",
                  "naptanMode": "string",
                  "placeType": "string",
                  "platformName": "string",
                  "smsCode": "string",
                  "stationNaptan": "string",
                  "status": true,
                  "stopLetter": "string",
                  "stopType": "string",
                  "url": "string"
                }
              }
            ],
            "validFrom": "1970-01-01T00:00:00Z",
            "validTo": "1970-01-01T00:00:00Z",
            "via": {
              "ordinal": 0,
              "stopPoint": {
                "accessibilitySummary": "string",
                "additionalProperties": [
                  {
                    "category": "string",
                    "key": "string",
                    "modified": "1970-01-01T00:00:00Z",
                    "sourceSystemKey": "string",
                    "value": "string"
                  }
                ],
                "children": [
                  {
                    "additionalProperties": [
                      {
                        "category": "string",
                        "key": "string",
                        "modified": "1970-01-01T00:00:00Z",
                        "sourceSystemKey": "string",
                        "value": "string"
                      }
                    ],
                    "children": [
                      {}
                    ],
                    "childrenUrls": [
                      "string"
                    ],
                    "commonName": "string",
                    "distance": 0,
                    "id": "string",
                    "lat": 0,
                    "lon": 0,
                    "placeType": "string",
                    "url": "string"
                  }
                ],
                "childrenUrls": [
                  "string"
                ],
                "commonName": "string",
                "distance": 0,
                "fullName": "string",
                "hubNaptanCode": "string",
                "icsCode": "string",
                "id": "string",
                "indicator": "string",
                "individualStopId": "string",
                "lat": 0,
                "lineGroup": [
                  {
                    "lineIdentifier": [
                      "string"
                    ],
                    "naptanIdReference": "string",
                    "stationAtcoCode": "string"
                  }
                ],
                "lineModeGroups": [
                  {
                    "lineIdentifier": [
                      "string"
                    ],
                    "modeName": "string"
                  }
                ],
                "lines": [
                  {
                    "crowding": {
                      "passengerFlows": [
                        {
                          "timeSlice": "string",
                          "value": 0
                        }
                      ],
                      "trainLoadings": [
                        {
                          "direction": "string",
                          "line": "string",
                          "lineDirection": "string",
                          "naptanTo": "string",
                          "platformDirection": "string",
                          "timeSlice": "string",
                          "value": 0
                        }
                      ]
                    },
                    "fullName": "string",
                    "id": "string",
                    "motType": "string",
                    "name": "string",
                    "network": "string",
                    "routeType": "Unknown",
                    "status": "Unknown",
                    "type": "string",
                    "uri": "string"
                  }
                ],
                "lon": 0,
                "modes": [
                  "string"
                ],
                "naptanId": "string",
                "naptanMode": "string",
                "placeType": "string",
                "platformName": "string",
                "smsCode": "string",
                "stationNaptan": "string",
                "status": true,
                "stopLetter": "string",
                "stopType": "string",
                "url": "string"
              }
            }
          }
        ],
        "affectedStops": [
          {
            "accessibilitySummary": "string",
            "additionalProperties": [
              {
                "category": "string",
                "key": "string",
                "modified": "1970-01-01T00:00:00Z",
                "sourceSystemKey": "string",
                "value": "string"
              }
            ],
            "children": [
              {
                "additionalProperties": [
                  {
                    "category": "string",
                    "key": "string",
                    "modified": "1970-01-01T00:00:00Z",
                    "sourceSystemKey": "string",
                    "value": "string"
                  }
                ],
                "children": [
                  {}
                ],
                "childrenUrls": [
                  "string"
                ],
                "commonName": "string",
                "distance": 0,
                "id": "string",
                "lat": 0,
                "lon": 0,
                "placeType": "string",
                "url": "string"
              }
            ],
            "childrenUrls": [
              "string"
            ],
            "commonName": "string",
            "distance": 0,
            "fullName": "string",
            "hubNaptanCode": "string",
            "icsCode": "string",
            "id": "string",
            "indicator": "string",
            "individualStopId": "string",
            "lat": 0,
            "lineGroup": [
              {
                "lineIdentifier": [
                  "string"
                ],
                "naptanIdReference": "string",
                "stationAtcoCode": "string"
              }
            ],
            "lineModeGroups": [
              {
                "lineIdentifier": [
                  "string"
                ],
                "modeName": "string"
              }
            ],
            "lines": [
              {
                "crowding": {
                  "passengerFlows": [
                    {
                      "timeSlice": "string",
                      "value": 0
                    }
                  ],
                  "trainLoadings": [
                    {
                      "direction": "string",
                      "line": "string",
                      "lineDirection": "string",
                      "naptanTo": "string",
                      "platformDirection": "string",
                      "timeSlice": "string",
                      "value": 0
                    }
                  ]
                },
                "fullName": "string",
                "id": "string",
                "motType": "string",
                "name": "string",
                "network": "string",
                "routeType": "Unknown",
                "status": "Unknown",
                "type": "string",
                "uri": "string"
              }
            ],
            "lon": 0,
            "modes": [
              "string"
            ],
            "naptanId": "string",
            "naptanMode": "string",
            "placeType": "string",
            "platformName": "string",
            "smsCode": "string",
            "stationNaptan": "string",
            "status": true,
            "stopLetter": "string",
            "stopType": "string",
            "url": "string"
          }
        ],
        "category": "Undefined",
        "categoryDescription": "string",
        "closureText": "string",
        "created": "1970-01-01T00:00:00Z",
        "description": "string",
        "lastUpdate": "1970-01-01T00:00:00Z",
        "summary": "string",
        "type": "string"
      }
    ],
    "id": "string",
    "lineStatuses": [
      {
        "created": "1970-01-01T00:00:00Z",
        "disruption": {
          "additionalInfo": "string",
          "affectedRoutes": [
            {
              "destinationName": "string",
              "direction": "string",
              "id": "string",
              "isEntireRouteSection": true,
              "lineId": "string",
              "lineString": "string",
              "name": "string",
              "originationName": "string",
              "routeCode": "string",
              "routeSectionNaptanEntrySequence": [
                {
                  "ordinal": 0,
                  "stopPoint": {
                    "accessibilitySummary": "string",
                    "additionalProperties": [
                      {
                        "category": "string",
                        "key": "string",
                        "modified": "1970-01-01T00:00:00Z",
                        "sourceSystemKey": "string",
                        "value": "string"
                      }
                    ],
                    "children": [
                      {
                        "additionalProperties": [
                          {
                            "category": "string",
                            "key": "string",
                            "modified": "1970-01-01T00:00:00Z",
                            "sourceSystemKey": "string",
                            "value": "string"
                          }
                        ],
                        "children": [
                          {}
                        ],
                        "childrenUrls": [
                          "string"
                        ],
                        "commonName": "string",
                        "distance": 0,
                        "id": "string",
                        "lat": 0,
                        "lon": 0,
                        "placeType": "string",
                        "url": "string"
                      }
                    ],
                    "childrenUrls": [
                      "string"
                    ],
                    "commonName": "string",
                    "distance": 0,
                    "fullName": "string",
                    "hubNaptanCode": "string",
                    "icsCode": "string",
                    "id": "string",
                    "indicator": "string",
                    "individualStopId": "string",
                    "lat": 0,
                    "lineGroup": [
                      {
                        "lineIdentifier": [
                          "string"
                        ],
                        "naptanIdReference": "string",
                        "stationAtcoCode": "string"
                      }
                    ],
                    "lineModeGroups": [
                      {
                        "lineIdentifier": [
                          "string"
                        ],
                        "modeName": "string"
                      }
                    ],
                    "lines": [
                      {
                        "crowding": {
                          "passengerFlows": [
                            {
                              "timeSlice": "string",
                              "value": 0
                            }
                          ],
                          "trainLoadings": [
                            {
                              "direction": "string",
                              "line": "string",
                              "lineDirection": "string",
                              "naptanTo": "string",
                              "platformDirection": "string",
                              "timeSlice": "string",
                              "value": 0
                            }
                          ]
                        },
                        "fullName": "string",
                        "id": "string",
                        "motType": "string",
                        "name": "string",
                        "network": "string",
                        "routeType": "Unknown",
                        "status": "Unknown",
                        "type": "string",
                        "uri": "string"
                      }
                    ],
                    "lon": 0,
                    "modes": [
                      "string"
                    ],
                    "naptanId": "string",
                    "naptanMode": "string",
                    "placeType": "string",
                    "platformName": "string",
                    "smsCode": "string",
                    "stationNaptan": "string",
                    "status": true,
                    "stopLetter": "string",
                    "stopType": "string",
                    "url": "string"
                  }
                }
              ],
              "validFrom": "1970-01-01T00:00:00Z",
              "validTo": "1970-01-01T00:00:00Z",
              "via": {
                "ordinal": 0,
                "stopPoint": {
                  "accessibilitySummary": "string",
                  "additionalProperties": [
                    {
                      "category": "string",
                      "key": "string",
                      "modified": "1970-01-01T00:00:00Z",
                      "sourceSystemKey": "string",
                      "value": "string"
                    }
                  ],
                  "children": [
                    {
                      "additionalProperties": [
                        {
                          "category": "string",
                          "key": "string",
                          "modified": "1970-01-01T00:00:00Z",
                          "sourceSystemKey": "string",
                          "value": "string"
                        }
                      ],
                      "children": [
                        {}
                      ],
                      "childrenUrls": [
                        "string"
                      ],
                      "commonName": "string",
                      "distance": 0,
                      "id": "string",
                      "lat": 0,
                      "lon": 0,
                      "placeType": "string",
                      "url": "string"
                    }
                  ],
                  "childrenUrls": [
                    "string"
                  ],
                  "commonName": "string",
                  "distance": 0,
                  "fullName": "string",
                  "hubNaptanCode": "string",
                  "icsCode": "string",
                  "id": "string",
                  "indicator": "string",
                  "individualStopId": "string",
                  "lat": 0,
                  "lineGroup": [
                    {
                      "lineIdentifier": [
                        "string"
                      ],
                      "naptanIdReference": "string",
                      "stationAtcoCode": "string"
                    }
                  ],
                  "lineModeGroups": [
                    {
                      "lineIdentifier": [
                        "string"
                      ],
                      "modeName": "string"
                    }
                  ],
                  "lines": [
                    {
                      "crowding": {
                        "passengerFlows": [
                          {
                            "timeSlice": "string",
                            "value": 0
                          }
                        ],
                        "trainLoadings": [
                          {
                            "direction": "string",
                            "line": "string",
                            "lineDirection": "string",
                            "naptanTo": "string",
                            "platformDirection": "string",
                            "timeSlice": "string",
                            "value": 0
                          }
                        ]
                      },
                      "fullName": "string",
                      "id": "string",
                      "motType": "string",
                      "name": "string",
                      "network": "string",
                      "routeType": "Unknown",
                      "status": "Unknown",
                      "type": "string",
                      "uri": "string"
                    }
                  ],
                  "lon": 0,
                  "modes": [
                    "string"
                  ],
                  "naptanId": "string",
                  "naptanMode": "string",
                  "placeType": "string",
                  "platformName": "string",
                  "smsCode": "string",
                  "stationNaptan": "string",
                  "status": true,
                  "stopLetter": "string",
                  "stopType": "string",
                  "url": "string"
                }
              }
            }
          ],
          "affectedStops": [
            {
              "accessibilitySummary": "string",
              "additionalProperties": [
                {
                  "category": "string",
                  "key": "string",
                  "modified": "1970-01-01T00:00:00Z",
                  "sourceSystemKey": "string",
                  "value": "string"
                }
              ],
              "children": [
                {
                  "additionalProperties": [
                    {
                      "category": "string",
                      "key": "string",
                      "modified": "1970-01-01T00:00:00Z",
                      "sourceSystemKey": "string",
                      "value": "string"
                    }
                  ],
                  "children": [
                    {}
                  ],
                  "childrenUrls": [
                    "string"
                  ],
                  "commonName": "string",
                  "distance": 0,
                  "id": "string",
                  "lat": 0,
                  "lon": 0,
                  "placeType": "string",
                  "url": "string"
                }
              ],
              "childrenUrls": [
                "string"
              ],
              "commonName": "string",
              "distance": 0,
              "fullName": "string",
              "hubNaptanCode": "string",
              "icsCode": "string",
              "id": "string",
              "indicator": "string",
              "individualStopId": "string",
              "lat": 0,
              "lineGroup": [
                {
                  "lineIdentifier": [
                    "string"
                  ],
                  "naptanIdReference": "string",
                  "stationAtcoCode": "string"
                }
              ],
              "lineModeGroups": [
                {
                  "lineIdentifier": [
                    "string"
                  ],
                  "modeName": "string"
                }
              ],
              "lines": [
                {
                  "crowding": {
                    "passengerFlows": [
                      {
                        "timeSlice": "string",
                        "value": 0
                      }
                    ],
                    "trainLoadings": [
                      {
                        "direction": "string",
                        "line": "string",
                        "lineDirection": "string",
                        "naptanTo": "string",
                        "platformDirection": "string",
                        "timeSlice": "string",
                        "value": 0
                      }
                    ]
                  },
                  "fullName": "string",
                  "id": "string",
                  "motType": "string",
                  "name": "string",
                  "network": "string",
                  "routeType": "Unknown",
                  "status": "Unknown",
                  "type": "string",
                  "uri": "string"
                }
              ],
              "lon": 0,
              "modes": [
                "string"
              ],
              "naptanId": "string",
              "naptanMode": "string",
              "placeType": "string",
              "platformName": "string",
              "smsCode": "string",
              "stationNaptan": "string",
              "status": true,
              "stopLetter": "string",
              "stopType": "string",
              "url": "string"
            }
          ],
          "category": "Undefined",
          "categoryDescription": "string",
          "closureText": "string",
          "created": "1970-01-01T00:00:00Z",
          "description": "string",
          "lastUpdate": "1970-01-01T00:00:00Z",
          "summary": "string",
          "type": "string"
        },
        "id": 0,
        "lineId": "string",
        "modified": "1970-01-01T00:00:00Z",
        "reason": "string",
        "statusSeverity": 0,
        "statusSeverityDescription": "string",
        "validityPeriods": [
          {
            "fromDate": "1970-01-01T00:00:00Z",
            "isNow": true,
            "toDate": "1970-01-01T00:00:00Z"
          }
        ]
      }
    ],
    "modeName": "string",
    "modified": "1970-01-01T00:00:00Z",
    "name": "string",
    "routeSections": [
      {
        "destination": "string",
        "destinationName": "string",
        "direction": "string",
        "name": "string",
        "originationName": "string",
        "originator": "string",
        "routeCode": "string",
        "serviceType": "string",
        "validFrom": "1970-01-01T00:00:00Z",
        "validTo": "1970-01-01T00:00:00Z"
      }
    ],
    "serviceTypes": [
      {
        "name": "string",
        "uri": "string"
      }
    ]
  }
]
```

<h3 id="gets-the-line-status-of-for-given-line-ids-eg-minor-delays-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="gets-the-line-status-of-for-given-line-ids-eg-minor-delays-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Tfl.Api.Presentation.Entities.Line](#schematfl.api.presentation.entities.line)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Gets the line status for given line ids during the provided dates e.g Minor Delays

<a id="opIdLine_Status"></a>

> Code samples

```bash
curl 'https://example.com/Line/string/Status/string/to/string?startDate=string&endDate=string' \
  -H 'Accept: application/json'
```

`GET /Line/{ids}/Status/{StartDate}/to/{EndDate}`

<h3 id="gets-the-line-status-for-given-line-ids-during-the-provided-dates-eg-minor-delays-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ids|path|[string]|true|A comma-separated list of line ids e.g. victoria,circle,N133. Max. approx. 20 ids.|
|detail|query|boolean|false|Include details of the disruptions that are causing the line status including the affected stops and routes|
|startDate|query|string|true|none|
|endDate|query|string|true|none|
|dateRange.startDate|query|string(date-time)|false|none|
|dateRange.endDate|query|string(date-time)|false|none|
|StartDate|path|string|true|Automatically added|
|EndDate|path|string|true|Automatically added|

> Example responses

> 200 Response

```json
[
  {
    "created": "1970-01-01T00:00:00Z",
    "crowding": {
      "passengerFlows": [
        {
          "timeSlice": "string",
          "value": 0
        }
      ],
      "trainLoadings": [
        {
          "direction": "string",
          "line": "string",
          "lineDirection": "string",
          "naptanTo": "string",
          "platformDirection": "string",
          "timeSlice": "string",
          "value": 0
        }
      ]
    },
    "disruptions": [
      {
        "additionalInfo": "string",
        "affectedRoutes": [
          {
            "destinationName": "string",
            "direction": "string",
            "id": "string",
            "isEntireRouteSection": true,
            "lineId": "string",
            "lineString": "string",
            "name": "string",
            "originationName": "string",
            "routeCode": "string",
            "routeSectionNaptanEntrySequence": [
              {
                "ordinal": 0,
                "stopPoint": {
                  "accessibilitySummary": "string",
                  "additionalProperties": [
                    {
                      "category": "string",
                      "key": "string",
                      "modified": "1970-01-01T00:00:00Z",
                      "sourceSystemKey": "string",
                      "value": "string"
                    }
                  ],
                  "children": [
                    {
                      "additionalProperties": [
                        {
                          "category": "string",
                          "key": "string",
                          "modified": "1970-01-01T00:00:00Z",
                          "sourceSystemKey": "string",
                          "value": "string"
                        }
                      ],
                      "children": [
                        {}
                      ],
                      "childrenUrls": [
                        "string"
                      ],
                      "commonName": "string",
                      "distance": 0,
                      "id": "string",
                      "lat": 0,
                      "lon": 0,
                      "placeType": "string",
                      "url": "string"
                    }
                  ],
                  "childrenUrls": [
                    "string"
                  ],
                  "commonName": "string",
                  "distance": 0,
                  "fullName": "string",
                  "hubNaptanCode": "string",
                  "icsCode": "string",
                  "id": "string",
                  "indicator": "string",
                  "individualStopId": "string",
                  "lat": 0,
                  "lineGroup": [
                    {
                      "lineIdentifier": [
                        "string"
                      ],
                      "naptanIdReference": "string",
                      "stationAtcoCode": "string"
                    }
                  ],
                  "lineModeGroups": [
                    {
                      "lineIdentifier": [
                        "string"
                      ],
                      "modeName": "string"
                    }
                  ],
                  "lines": [
                    {
                      "crowding": {
                        "passengerFlows": [
                          {
                            "timeSlice": "string",
                            "value": 0
                          }
                        ],
                        "trainLoadings": [
                          {
                            "direction": "string",
                            "line": "string",
                            "lineDirection": "string",
                            "naptanTo": "string",
                            "platformDirection": "string",
                            "timeSlice": "string",
                            "value": 0
                          }
                        ]
                      },
                      "fullName": "string",
                      "id": "string",
                      "motType": "string",
                      "name": "string",
                      "network": "string",
                      "routeType": "Unknown",
                      "status": "Unknown",
                      "type": "string",
                      "uri": "string"
                    }
                  ],
                  "lon": 0,
                  "modes": [
                    "string"
                  ],
                  "naptanId": "string",
                  "naptanMode": "string",
                  "placeType": "string",
                  "platformName": "string",
                  "smsCode": "string",
                  "stationNaptan": "string",
                  "status": true,
                  "stopLetter": "string",
                  "stopType": "string",
                  "url": "string"
                }
              }
            ],
            "validFrom": "1970-01-01T00:00:00Z",
            "validTo": "1970-01-01T00:00:00Z",
            "via": {
              "ordinal": 0,
              "stopPoint": {
                "accessibilitySummary": "string",
                "additionalProperties": [
                  {
                    "category": "string",
                    "key": "string",
                    "modified": "1970-01-01T00:00:00Z",
                    "sourceSystemKey": "string",
                    "value": "string"
                  }
                ],
                "children": [
                  {
                    "additionalProperties": [
                      {
                        "category": "string",
                        "key": "string",
                        "modified": "1970-01-01T00:00:00Z",
                        "sourceSystemKey": "string",
                        "value": "string"
                      }
                    ],
                    "children": [
                      {}
                    ],
                    "childrenUrls": [
                      "string"
                    ],
                    "commonName": "string",
                    "distance": 0,
                    "id": "string",
                    "lat": 0,
                    "lon": 0,
                    "placeType": "string",
                    "url": "string"
                  }
                ],
                "childrenUrls": [
                  "string"
                ],
                "commonName": "string",
                "distance": 0,
                "fullName": "string",
                "hubNaptanCode": "string",
                "icsCode": "string",
                "id": "string",
                "indicator": "string",
                "individualStopId": "string",
                "lat": 0,
                "lineGroup": [
                  {
                    "lineIdentifier": [
                      "string"
                    ],
                    "naptanIdReference": "string",
                    "stationAtcoCode": "string"
                  }
                ],
                "lineModeGroups": [
                  {
                    "lineIdentifier": [
                      "string"
                    ],
                    "modeName": "string"
                  }
                ],
                "lines": [
                  {
                    "crowding": {
                      "passengerFlows": [
                        {
                          "timeSlice": "string",
                          "value": 0
                        }
                      ],
                      "trainLoadings": [
                        {
                          "direction": "string",
                          "line": "string",
                          "lineDirection": "string",
                          "naptanTo": "string",
                          "platformDirection": "string",
                          "timeSlice": "string",
                          "value": 0
                        }
                      ]
                    },
                    "fullName": "string",
                    "id": "string",
                    "motType": "string",
                    "name": "string",
                    "network": "string",
                    "routeType": "Unknown",
                    "status": "Unknown",
                    "type": "string",
                    "uri": "string"
                  }
                ],
                "lon": 0,
                "modes": [
                  "string"
                ],
                "naptanId": "string",
                "naptanMode": "string",
                "placeType": "string",
                "platformName": "string",
                "smsCode": "string",
                "stationNaptan": "string",
                "status": true,
                "stopLetter": "string",
                "stopType": "string",
                "url": "string"
              }
            }
          }
        ],
        "affectedStops": [
          {
            "accessibilitySummary": "string",
            "additionalProperties": [
              {
                "category": "string",
                "key": "string",
                "modified": "1970-01-01T00:00:00Z",
                "sourceSystemKey": "string",
                "value": "string"
              }
            ],
            "children": [
              {
                "additionalProperties": [
                  {
                    "category": "string",
                    "key": "string",
                    "modified": "1970-01-01T00:00:00Z",
                    "sourceSystemKey": "string",
                    "value": "string"
                  }
                ],
                "children": [
                  {}
                ],
                "childrenUrls": [
                  "string"
                ],
                "commonName": "string",
                "distance": 0,
                "id": "string",
                "lat": 0,
                "lon": 0,
                "placeType": "string",
                "url": "string"
              }
            ],
            "childrenUrls": [
              "string"
            ],
            "commonName": "string",
            "distance": 0,
            "fullName": "string",
            "hubNaptanCode": "string",
            "icsCode": "string",
            "id": "string",
            "indicator": "string",
            "individualStopId": "string",
            "lat": 0,
            "lineGroup": [
              {
                "lineIdentifier": [
                  "string"
                ],
                "naptanIdReference": "string",
                "stationAtcoCode": "string"
              }
            ],
            "lineModeGroups": [
              {
                "lineIdentifier": [
                  "string"
                ],
                "modeName": "string"
              }
            ],
            "lines": [
              {
                "crowding": {
                  "passengerFlows": [
                    {
                      "timeSlice": "string",
                      "value": 0
                    }
                  ],
                  "trainLoadings": [
                    {
                      "direction": "string",
                      "line": "string",
                      "lineDirection": "string",
                      "naptanTo": "string",
                      "platformDirection": "string",
                      "timeSlice": "string",
                      "value": 0
                    }
                  ]
                },
                "fullName": "string",
                "id": "string",
                "motType": "string",
                "name": "string",
                "network": "string",
                "routeType": "Unknown",
                "status": "Unknown",
                "type": "string",
                "uri": "string"
              }
            ],
            "lon": 0,
            "modes": [
              "string"
            ],
            "naptanId": "string",
            "naptanMode": "string",
            "placeType": "string",
            "platformName": "string",
            "smsCode": "string",
            "stationNaptan": "string",
            "status": true,
            "stopLetter": "string",
            "stopType": "string",
            "url": "string"
          }
        ],
        "category": "Undefined",
        "categoryDescription": "string",
        "closureText": "string",
        "created": "1970-01-01T00:00:00Z",
        "description": "string",
        "lastUpdate": "1970-01-01T00:00:00Z",
        "summary": "string",
        "type": "string"
      }
    ],
    "id": "string",
    "lineStatuses": [
      {
        "created": "1970-01-01T00:00:00Z",
        "disruption": {
          "additionalInfo": "string",
          "affectedRoutes": [
            {
              "destinationName": "string",
              "direction": "string",
              "id": "string",
              "isEntireRouteSection": true,
              "lineId": "string",
              "lineString": "string",
              "name": "string",
              "originationName": "string",
              "routeCode": "string",
              "routeSectionNaptanEntrySequence": [
                {
                  "ordinal": 0,
                  "stopPoint": {
                    "accessibilitySummary": "string",
                    "additionalProperties": [
                      {
                        "category": "string",
                        "key": "string",
                        "modified": "1970-01-01T00:00:00Z",
                        "sourceSystemKey": "string",
                        "value": "string"
                      }
                    ],
                    "children": [
                      {
                        "additionalProperties": [
                          {
                            "category": "string",
                            "key": "string",
                            "modified": "1970-01-01T00:00:00Z",
                            "sourceSystemKey": "string",
                            "value": "string"
                          }
                        ],
                        "children": [
                          {}
                        ],
                        "childrenUrls": [
                          "string"
                        ],
                        "commonName": "string",
                        "distance": 0,
                        "id": "string",
                        "lat": 0,
                        "lon": 0,
                        "placeType": "string",
                        "url": "string"
                      }
                    ],
                    "childrenUrls": [
                      "string"
                    ],
                    "commonName": "string",
                    "distance": 0,
                    "fullName": "string",
                    "hubNaptanCode": "string",
                    "icsCode": "string",
                    "id": "string",
                    "indicator": "string",
                    "individualStopId": "string",
                    "lat": 0,
                    "lineGroup": [
                      {
                        "lineIdentifier": [
                          "string"
                        ],
                        "naptanIdReference": "string",
                        "stationAtcoCode": "string"
                      }
                    ],
                    "lineModeGroups": [
                      {
                        "lineIdentifier": [
                          "string"
                        ],
                        "modeName": "string"
                      }
                    ],
                    "lines": [
                      {
                        "crowding": {
                          "passengerFlows": [
                            {
                              "timeSlice": "string",
                              "value": 0
                            }
                          ],
                          "trainLoadings": [
                            {
                              "direction": "string",
                              "line": "string",
                              "lineDirection": "string",
                              "naptanTo": "string",
                              "platformDirection": "string",
                              "timeSlice": "string",
                              "value": 0
                            }
                          ]
                        },
                        "fullName": "string",
                        "id": "string",
                        "motType": "string",
                        "name": "string",
                        "network": "string",
                        "routeType": "Unknown",
                        "status": "Unknown",
                        "type": "string",
                        "uri": "string"
                      }
                    ],
                    "lon": 0,
                    "modes": [
                      "string"
                    ],
                    "naptanId": "string",
                    "naptanMode": "string",
                    "placeType": "string",
                    "platformName": "string",
                    "smsCode": "string",
                    "stationNaptan": "string",
                    "status": true,
                    "stopLetter": "string",
                    "stopType": "string",
                    "url": "string"
                  }
                }
              ],
              "validFrom": "1970-01-01T00:00:00Z",
              "validTo": "1970-01-01T00:00:00Z",
              "via": {
                "ordinal": 0,
                "stopPoint": {
                  "accessibilitySummary": "string",
                  "additionalProperties": [
                    {
                      "category": "string",
                      "key": "string",
                      "modified": "1970-01-01T00:00:00Z",
                      "sourceSystemKey": "string",
                      "value": "string"
                    }
                  ],
                  "children": [
                    {
                      "additionalProperties": [
                        {
                          "category": "string",
                          "key": "string",
                          "modified": "1970-01-01T00:00:00Z",
                          "sourceSystemKey": "string",
                          "value": "string"
                        }
                      ],
                      "children": [
                        {}
                      ],
                      "childrenUrls": [
                        "string"
                      ],
                      "commonName": "string",
                      "distance": 0,
                      "id": "string",
                      "lat": 0,
                      "lon": 0,
                      "placeType": "string",
                      "url": "string"
                    }
                  ],
                  "childrenUrls": [
                    "string"
                  ],
                  "commonName": "string",
                  "distance": 0,
                  "fullName": "string",
                  "hubNaptanCode": "string",
                  "icsCode": "string",
                  "id": "string",
                  "indicator": "string",
                  "individualStopId": "string",
                  "lat": 0,
                  "lineGroup": [
                    {
                      "lineIdentifier": [
                        "string"
                      ],
                      "naptanIdReference": "string",
                      "stationAtcoCode": "string"
                    }
                  ],
                  "lineModeGroups": [
                    {
                      "lineIdentifier": [
                        "string"
                      ],
                      "modeName": "string"
                    }
                  ],
                  "lines": [
                    {
                      "crowding": {
                        "passengerFlows": [
                          {
                            "timeSlice": "string",
                            "value": 0
                          }
                        ],
                        "trainLoadings": [
                          {
                            "direction": "string",
                            "line": "string",
                            "lineDirection": "string",
                            "naptanTo": "string",
                            "platformDirection": "string",
                            "timeSlice": "string",
                            "value": 0
                          }
                        ]
                      },
                      "fullName": "string",
                      "id": "string",
                      "motType": "string",
                      "name": "string",
                      "network": "string",
                      "routeType": "Unknown",
                      "status": "Unknown",
                      "type": "string",
                      "uri": "string"
                    }
                  ],
                  "lon": 0,
                  "modes": [
                    "string"
                  ],
                  "naptanId": "string",
                  "naptanMode": "string",
                  "placeType": "string",
                  "platformName": "string",
                  "smsCode": "string",
                  "stationNaptan": "string",
                  "status": true,
                  "stopLetter": "string",
                  "stopType": "string",
                  "url": "string"
                }
              }
            }
          ],
          "affectedStops": [
            {
              "accessibilitySummary": "string",
              "additionalProperties": [
                {
                  "category": "string",
                  "key": "string",
                  "modified": "1970-01-01T00:00:00Z",
                  "sourceSystemKey": "string",
                  "value": "string"
                }
              ],
              "children": [
                {
                  "additionalProperties": [
                    {
                      "category": "string",
                      "key": "string",
                      "modified": "1970-01-01T00:00:00Z",
                      "sourceSystemKey": "string",
                      "value": "string"
                    }
                  ],
                  "children": [
                    {}
                  ],
                  "childrenUrls": [
                    "string"
                  ],
                  "commonName": "string",
                  "distance": 0,
                  "id": "string",
                  "lat": 0,
                  "lon": 0,
                  "placeType": "string",
                  "url": "string"
                }
              ],
              "childrenUrls": [
                "string"
              ],
              "commonName": "string",
              "distance": 0,
              "fullName": "string",
              "hubNaptanCode": "string",
              "icsCode": "string",
              "id": "string",
              "indicator": "string",
              "individualStopId": "string",
              "lat": 0,
              "lineGroup": [
                {
                  "lineIdentifier": [
                    "string"
                  ],
                  "naptanIdReference": "string",
                  "stationAtcoCode": "string"
                }
              ],
              "lineModeGroups": [
                {
                  "lineIdentifier": [
                    "string"
                  ],
                  "modeName": "string"
                }
              ],
              "lines": [
                {
                  "crowding": {
                    "passengerFlows": [
                      {
                        "timeSlice": "string",
                        "value": 0
                      }
                    ],
                    "trainLoadings": [
                      {
                        "direction": "string",
                        "line": "string",
                        "lineDirection": "string",
                        "naptanTo": "string",
                        "platformDirection": "string",
                        "timeSlice": "string",
                        "value": 0
                      }
                    ]
                  },
                  "fullName": "string",
                  "id": "string",
                  "motType": "string",
                  "name": "string",
                  "network": "string",
                  "routeType": "Unknown",
                  "status": "Unknown",
                  "type": "string",
                  "uri": "string"
                }
              ],
              "lon": 0,
              "modes": [
                "string"
              ],
              "naptanId": "string",
              "naptanMode": "string",
              "placeType": "string",
              "platformName": "string",
              "smsCode": "string",
              "stationNaptan": "string",
              "status": true,
              "stopLetter": "string",
              "stopType": "string",
              "url": "string"
            }
          ],
          "category": "Undefined",
          "categoryDescription": "string",
          "closureText": "string",
          "created": "1970-01-01T00:00:00Z",
          "description": "string",
          "lastUpdate": "1970-01-01T00:00:00Z",
          "summary": "string",
          "type": "string"
        },
        "id": 0,
        "lineId": "string",
        "modified": "1970-01-01T00:00:00Z",
        "reason": "string",
        "statusSeverity": 0,
        "statusSeverityDescription": "string",
        "validityPeriods": [
          {
            "fromDate": "1970-01-01T00:00:00Z",
            "isNow": true,
            "toDate": "1970-01-01T00:00:00Z"
          }
        ]
      }
    ],
    "modeName": "string",
    "modified": "1970-01-01T00:00:00Z",
    "name": "string",
    "routeSections": [
      {
        "destination": "string",
        "destinationName": "string",
        "direction": "string",
        "name": "string",
        "originationName": "string",
        "originator": "string",
        "routeCode": "string",
        "serviceType": "string",
        "validFrom": "1970-01-01T00:00:00Z",
        "validTo": "1970-01-01T00:00:00Z"
      }
    ],
    "serviceTypes": [
      {
        "name": "string",
        "uri": "string"
      }
    ]
  }
]
```

<h3 id="gets-the-line-status-for-given-line-ids-during-the-provided-dates-eg-minor-delays-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="gets-the-line-status-for-given-line-ids-during-the-provided-dates-eg-minor-delays-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Tfl.Api.Presentation.Entities.Line](#schematfl.api.presentation.entities.line)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Gets all valid routes for given line id, including the sequence of stops on each route.

<a id="opIdLine_RouteSequence"></a>

> Code samples

```bash
curl https://example.com/Line/string/Route/Sequence/inbound \
  -H 'Accept: application/json'
```

`GET /Line/{id}/Route/Sequence/{direction}`

<h3 id="gets-all-valid-routes-for-given-line-id-including-the-sequence-of-stops-on-each-route-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|A single line id e.g. victoria|
|direction|path|string|true|The direction of travel. Can be inbound or outbound.|
|serviceTypes|query|[string]|false|A comma seperated list of service types to filter on. Supported values: Regular, Night. Defaulted to 'Regular' if not specified|
|excludeCrowding|query|boolean|false|That excludes crowding from line disruptions. Can be true or false.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|direction|inbound|
|direction|outbound|
|direction|all|
|serviceTypes|Regular|
|serviceTypes|Night|

> Example responses

> 200 Response

```json
{
  "direction": "string",
  "isOutboundOnly": true,
  "lineId": "string",
  "lineName": "string",
  "lineStrings": [
    "string"
  ],
  "mode": "string",
  "orderedLineRoutes": [
    {
      "name": "string",
      "naptanIds": [
        "string"
      ],
      "serviceType": "string"
    }
  ],
  "stations": [
    {
      "accessibilitySummary": "string",
      "direction": "string",
      "hasDisruption": true,
      "icsId": "string",
      "id": "string",
      "lat": 0,
      "lines": [
        {
          "crowding": {
            "passengerFlows": [
              {
                "timeSlice": "string",
                "value": 0
              }
            ],
            "trainLoadings": [
              {
                "direction": "string",
                "line": "string",
                "lineDirection": "string",
                "naptanTo": "string",
                "platformDirection": "string",
                "timeSlice": "string",
                "value": 0
              }
            ]
          },
          "fullName": "string",
          "id": "string",
          "motType": "string",
          "name": "string",
          "network": "string",
          "routeType": "Unknown",
          "status": "Unknown",
          "type": "string",
          "uri": "string"
        }
      ],
      "lon": 0,
      "modes": [
        "string"
      ],
      "name": "string",
      "parentId": "string",
      "routeId": 0,
      "stationId": "string",
      "status": true,
      "stopLetter": "string",
      "stopType": "string",
      "topMostParentId": "string",
      "towards": "string",
      "url": "string",
      "zone": "string"
    }
  ],
  "stopPointSequences": [
    {
      "branchId": 0,
      "direction": "string",
      "lineId": "string",
      "lineName": "string",
      "nextBranchIds": [
        0
      ],
      "prevBranchIds": [
        0
      ],
      "serviceType": "Regular",
      "stopPoint": [
        {
          "accessibilitySummary": "string",
          "direction": "string",
          "hasDisruption": true,
          "icsId": "string",
          "id": "string",
          "lat": 0,
          "lines": [
            {
              "crowding": {
                "passengerFlows": [
                  {
                    "timeSlice": "string",
                    "value": 0
                  }
                ],
                "trainLoadings": [
                  {
                    "direction": "string",
                    "line": "string",
                    "lineDirection": "string",
                    "naptanTo": "string",
                    "platformDirection": "string",
                    "timeSlice": "string",
                    "value": 0
                  }
                ]
              },
              "fullName": "string",
              "id": "string",
              "motType": "string",
              "name": "string",
              "network": "string",
              "routeType": "Unknown",
              "status": "Unknown",
              "type": "string",
              "uri": "string"
            }
          ],
          "lon": 0,
          "modes": [
            "string"
          ],
          "name": "string",
          "parentId": "string",
          "routeId": 0,
          "stationId": "string",
          "status": true,
          "stopLetter": "string",
          "stopType": "string",
          "topMostParentId": "string",
          "towards": "string",
          "url": "string",
          "zone": "string"
        }
      ]
    }
  ]
}
```

<h3 id="gets-all-valid-routes-for-given-line-id-including-the-sequence-of-stops-on-each-route-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Tfl.Api.Presentation.Entities.RouteSequence](#schematfl.api.presentation.entities.routesequence)|

<aside class="success">
This operation does not require authentication
</aside>

## Gets a list of the stations that serve the given line id

<a id="opIdLine_StopPoints"></a>

> Code samples

```bash
curl https://example.com/Line/string/StopPoints \
  -H 'Accept: application/json'
```

`GET /Line/{id}/StopPoints`

<h3 id="gets-a-list-of-the-stations-that-serve-the-given-line-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|A single line id e.g. victoria|
|tflOperatedNationalRailStationsOnly|query|boolean|false|If the national-rail line is requested, this flag will filter the national rail stations so that only those operated by TfL are returned|

> Example responses

> 200 Response

```json
[
  {
    "accessibilitySummary": "string",
    "additionalProperties": [
      {
        "category": "string",
        "key": "string",
        "modified": "1970-01-01T00:00:00Z",
        "sourceSystemKey": "string",
        "value": "string"
      }
    ],
    "children": [
      {
        "additionalProperties": [
          {
            "category": "string",
            "key": "string",
            "modified": "1970-01-01T00:00:00Z",
            "sourceSystemKey": "string",
            "value": "string"
          }
        ],
        "children": [
          {}
        ],
        "childrenUrls": [
          "string"
        ],
        "commonName": "string",
        "distance": 0,
        "id": "string",
        "lat": 0,
        "lon": 0,
        "placeType": "string",
        "url": "string"
      }
    ],
    "childrenUrls": [
      "string"
    ],
    "commonName": "string",
    "distance": 0,
    "fullName": "string",
    "hubNaptanCode": "string",
    "icsCode": "string",
    "id": "string",
    "indicator": "string",
    "individualStopId": "string",
    "lat": 0,
    "lineGroup": [
      {
        "lineIdentifier": [
          "string"
        ],
        "naptanIdReference": "string",
        "stationAtcoCode": "string"
      }
    ],
    "lineModeGroups": [
      {
        "lineIdentifier": [
          "string"
        ],
        "modeName": "string"
      }
    ],
    "lines": [
      {
        "crowding": {
          "passengerFlows": [
            {
              "timeSlice": "string",
              "value": 0
            }
          ],
          "trainLoadings": [
            {
              "direction": "string",
              "line": "string",
              "lineDirection": "string",
              "naptanTo": "string",
              "platformDirection": "string",
              "timeSlice": "string",
              "value": 0
            }
          ]
        },
        "fullName": "string",
        "id": "string",
        "motType": "string",
        "name": "string",
        "network": "string",
        "routeType": "Unknown",
        "status": "Unknown",
        "type": "string",
        "uri": "string"
      }
    ],
    "lon": 0,
    "modes": [
      "string"
    ],
    "naptanId": "string",
    "naptanMode": "string",
    "placeType": "string",
    "platformName": "string",
    "smsCode": "string",
    "stationNaptan": "string",
    "status": true,
    "stopLetter": "string",
    "stopType": "string",
    "url": "string"
  }
]
```

<h3 id="gets-a-list-of-the-stations-that-serve-the-given-line-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="gets-a-list-of-the-stations-that-serve-the-given-line-id-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Tfl.Api.Presentation.Entities.StopPoint](#schematfl.api.presentation.entities.stoppoint)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Gets the timetable for a specified station on the give line

<a id="opIdLine_Timetable"></a>

> Code samples

```bash
curl https://example.com/Line/string/Timetable/string \
  -H 'Accept: application/json'
```

`GET /Line/{id}/Timetable/{fromStopPointId}`

<h3 id="gets-the-timetable-for-a-specified-station-on-the-give-line-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fromStopPointId|path|string|true|The originating station's stop point id (station naptan code e.g. 940GZZLUASL, you can use /StopPoint/Search/{query} endpoint to find a stop point id from a station name)|
|id|path|string|true|A single line id e.g. victoria|

> Example responses

> 200 Response

```json
{
  "direction": "string",
  "disambiguation": {
    "disambiguationOptions": [
      {
        "description": "string",
        "uri": "string"
      }
    ]
  },
  "lineId": "string",
  "lineName": "string",
  "pdfUrl": "string",
  "stations": [
    {
      "accessibilitySummary": "string",
      "direction": "string",
      "hasDisruption": true,
      "icsId": "string",
      "id": "string",
      "lat": 0,
      "lines": [
        {
          "crowding": {
            "passengerFlows": [
              {
                "timeSlice": "string",
                "value": 0
              }
            ],
            "trainLoadings": [
              {
                "direction": "string",
                "line": "string",
                "lineDirection": "string",
                "naptanTo": "string",
                "platformDirection": "string",
                "timeSlice": "string",
                "value": 0
              }
            ]
          },
          "fullName": "string",
          "id": "string",
          "motType": "string",
          "name": "string",
          "network": "string",
          "routeType": "Unknown",
          "status": "Unknown",
          "type": "string",
          "uri": "string"
        }
      ],
      "lon": 0,
      "modes": [
        "string"
      ],
      "name": "string",
      "parentId": "string",
      "routeId": 0,
      "stationId": "string",
      "status": true,
      "stopLetter": "string",
      "stopType": "string",
      "topMostParentId": "string",
      "towards": "string",
      "url": "string",
      "zone": "string"
    }
  ],
  "statusErrorMessage": "string",
  "stops": [
    {
      "accessibilitySummary": "string",
      "direction": "string",
      "hasDisruption": true,
      "icsId": "string",
      "id": "string",
      "lat": 0,
      "lines": [
        {
          "crowding": {
            "passengerFlows": [
              {
                "timeSlice": "string",
                "value": 0
              }
            ],
            "trainLoadings": [
              {
                "direction": "string",
                "line": "string",
                "lineDirection": "string",
                "naptanTo": "string",
                "platformDirection": "string",
                "timeSlice": "string",
                "value": 0
              }
            ]
          },
          "fullName": "string",
          "id": "string",
          "motType": "string",
          "name": "string",
          "network": "string",
          "routeType": "Unknown",
          "status": "Unknown",
          "type": "string",
          "uri": "string"
        }
      ],
      "lon": 0,
      "modes": [
        "string"
      ],
      "name": "string",
      "parentId": "string",
      "routeId": 0,
      "stationId": "string",
      "status": true,
      "stopLetter": "string",
      "stopType": "string",
      "topMostParentId": "string",
      "towards": "string",
      "url": "string",
      "zone": "string"
    }
  ],
  "timetable": {
    "departureStopId": "string",
    "routes": [
      {
        "schedules": [
          {
            "firstJourney": {
              "hour": "string",
              "intervalId": 0,
              "minute": "string"
            },
            "knownJourneys": [
              {
                "hour": "string",
                "intervalId": 0,
                "minute": "string"
              }
            ],
            "lastJourney": {
              "hour": "string",
              "intervalId": 0,
              "minute": "string"
            },
            "name": "string",
            "periods": [
              {
                "frequency": {
                  "highestFrequency": 0,
                  "lowestFrequency": 0
                },
                "fromTime": {
                  "hour": "string",
                  "minute": "string"
                },
                "toTime": {
                  "hour": "string",
                  "minute": "string"
                },
                "type": "Normal"
              }
            ]
          }
        ],
        "stationIntervals": [
          {
            "id": "string",
            "intervals": [
              {
                "stopId": "string",
                "timeToArrival": 0
              }
            ]
          }
        ]
      }
    ]
  }
}
```

<h3 id="gets-the-timetable-for-a-specified-station-on-the-give-line-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Tfl.Api.Presentation.Entities.TimetableResponse](#schematfl.api.presentation.entities.timetableresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Gets the timetable for a specified station on the give line with specified destination

<a id="opIdLine_TimetableTo"></a>

> Code samples

```bash
curl https://example.com/Line/string/Timetable/string/to/string \
  -H 'Accept: application/json'
```

`GET /Line/{id}/Timetable/{fromStopPointId}/to/{toStopPointId}`

<h3 id="gets-the-timetable-for-a-specified-station-on-the-give-line-with-specified-destination-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fromStopPointId|path|string|true|The originating station's stop point id (station naptan code e.g. 940GZZLUASL, you can use /StopPoint/Search/{query} endpoint to find a stop point id from a station name)|
|id|path|string|true|A single line id e.g. victoria|
|toStopPointId|path|string|true|The destination stations's Naptan code|

> Example responses

> 200 Response

```json
{
  "direction": "string",
  "disambiguation": {
    "disambiguationOptions": [
      {
        "description": "string",
        "uri": "string"
      }
    ]
  },
  "lineId": "string",
  "lineName": "string",
  "pdfUrl": "string",
  "stations": [
    {
      "accessibilitySummary": "string",
      "direction": "string",
      "hasDisruption": true,
      "icsId": "string",
      "id": "string",
      "lat": 0,
      "lines": [
        {
          "crowding": {
            "passengerFlows": [
              {
                "timeSlice": "string",
                "value": 0
              }
            ],
            "trainLoadings": [
              {
                "direction": "string",
                "line": "string",
                "lineDirection": "string",
                "naptanTo": "string",
                "platformDirection": "string",
                "timeSlice": "string",
                "value": 0
              }
            ]
          },
          "fullName": "string",
          "id": "string",
          "motType": "string",
          "name": "string",
          "network": "string",
          "routeType": "Unknown",
          "status": "Unknown",
          "type": "string",
          "uri": "string"
        }
      ],
      "lon": 0,
      "modes": [
        "string"
      ],
      "name": "string",
      "parentId": "string",
      "routeId": 0,
      "stationId": "string",
      "status": true,
      "stopLetter": "string",
      "stopType": "string",
      "topMostParentId": "string",
      "towards": "string",
      "url": "string",
      "zone": "string"
    }
  ],
  "statusErrorMessage": "string",
  "stops": [
    {
      "accessibilitySummary": "string",
      "direction": "string",
      "hasDisruption": true,
      "icsId": "string",
      "id": "string",
      "lat": 0,
      "lines": [
        {
          "crowding": {
            "passengerFlows": [
              {
                "timeSlice": "string",
                "value": 0
              }
            ],
            "trainLoadings": [
              {
                "direction": "string",
                "line": "string",
                "lineDirection": "string",
                "naptanTo": "string",
                "platformDirection": "string",
                "timeSlice": "string",
                "value": 0
              }
            ]
          },
          "fullName": "string",
          "id": "string",
          "motType": "string",
          "name": "string",
          "network": "string",
          "routeType": "Unknown",
          "status": "Unknown",
          "type": "string",
          "uri": "string"
        }
      ],
      "lon": 0,
      "modes": [
        "string"
      ],
      "name": "string",
      "parentId": "string",
      "routeId": 0,
      "stationId": "string",
      "status": true,
      "stopLetter": "string",
      "stopType": "string",
      "topMostParentId": "string",
      "towards": "string",
      "url": "string",
      "zone": "string"
    }
  ],
  "timetable": {
    "departureStopId": "string",
    "routes": [
      {
        "schedules": [
          {
            "firstJourney": {
              "hour": "string",
              "intervalId": 0,
              "minute": "string"
            },
            "knownJourneys": [
              {
                "hour": "string",
                "intervalId": 0,
                "minute": "string"
              }
            ],
            "lastJourney": {
              "hour": "string",
              "intervalId": 0,
              "minute": "string"
            },
            "name": "string",
            "periods": [
              {
                "frequency": {
                  "highestFrequency": 0,
                  "lowestFrequency": 0
                },
                "fromTime": {
                  "hour": "string",
                  "minute": "string"
                },
                "toTime": {
                  "hour": "string",
                  "minute": "string"
                },
                "type": "Normal"
              }
            ]
          }
        ],
        "stationIntervals": [
          {
            "id": "string",
            "intervals": [
              {
                "stopId": "string",
                "timeToArrival": 0
              }
            ]
          }
        ]
      }
    ]
  }
}
```

<h3 id="gets-the-timetable-for-a-specified-station-on-the-give-line-with-specified-destination-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Tfl.Api.Presentation.Entities.TimetableResponse](#schematfl.api.presentation.entities.timetableresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="transport-for-london-unified-api-mode">Mode</h1>

## Returns the service type active for a mode. Currently only supports tube

<a id="opIdMode_GetActiveServiceTypes"></a>

> Code samples

```bash
curl https://example.com/Mode/ActiveServiceTypes \
  -H 'Accept: application/json'
```

`GET /Mode/ActiveServiceTypes`

> Example responses

> 200 Response

```json
[
  {
    "mode": "string",
    "serviceType": "string"
  }
]
```

<h3 id="returns-the-service-type-active-for-a-mode-currently-only-supports-tube-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="returns-the-service-type-active-for-a-mode-currently-only-supports-tube-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Tfl.Api.Presentation.Entities.ActiveServiceType](#schematfl.api.presentation.entities.activeservicetype)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Gets the next arrival predictions for all stops of a given mode

<a id="opIdMode_Arrivals"></a>

> Code samples

```bash
curl https://example.com/Mode/string/Arrivals \
  -H 'Accept: application/json'
```

`GET /Mode/{mode}/Arrivals`

<h3 id="gets-the-next-arrival-predictions-for-all-stops-of-a-given-mode-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|mode|path|string|true|A mode name e.g. tube, dlr|
|count|query|integer(int32)|false|A number of arrivals to return for each stop, -1 to return all available.|

> Example responses

> 200 Response

```json
[
  {
    "bearing": "string",
    "currentLocation": "string",
    "destinationName": "string",
    "destinationNaptanId": "string",
    "direction": "string",
    "expectedArrival": "1970-01-01T00:00:00Z",
    "id": "string",
    "lineId": "string",
    "lineName": "string",
    "modeName": "string",
    "naptanId": "string",
    "operationType": 0,
    "platformName": "string",
    "stationName": "string",
    "timeToLive": "1970-01-01T00:00:00Z",
    "timeToStation": 0,
    "timestamp": "1970-01-01T00:00:00Z",
    "timing": {
      "countdownServerAdjustment": "string",
      "insert": "1970-01-01T00:00:00Z",
      "read": "1970-01-01T00:00:00Z",
      "received": "1970-01-01T00:00:00Z",
      "sent": "1970-01-01T00:00:00Z",
      "source": "1970-01-01T00:00:00Z"
    },
    "towards": "string",
    "vehicleId": "string"
  }
]
```

<h3 id="gets-the-next-arrival-predictions-for-all-stops-of-a-given-mode-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="gets-the-next-arrival-predictions-for-all-stops-of-a-given-mode-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Tfl.Api.Presentation.Entities.Prediction](#schematfl.api.presentation.entities.prediction)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="transport-for-london-unified-api-occupancy">Occupancy</h1>

## Get the occupancy for bike points.

<a id="opIdOccupancy_GetBikePointsOccupancies"></a>

> Code samples

```bash
curl https://example.com/Occupancy/BikePoints/string \
  -H 'Accept: application/json'
```

`GET /Occupancy/BikePoints/{ids}`

<h3 id="get-the-occupancy-for-bike-points-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ids|path|[string]|true|none|

> Example responses

> 200 Response

```json
[
  {
    "bikesCount": 0,
    "eBikesCount": 0,
    "emptyDocks": 0,
    "id": "string",
    "name": "string",
    "standardBikesCount": 0,
    "totalDocks": 0
  }
]
```

<h3 id="get-the-occupancy-for-bike-points-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-the-occupancy-for-bike-points-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Tfl.Api.Presentation.Entities.BikePointOccupancy](#schematfl.api.presentation.entities.bikepointoccupancy)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Gets the occupancy for all car parks that have occupancy data

> Code samples

```bash
curl https://example.com/Occupancy/CarPark \
  -H 'Accept: application/json'
```

`GET /Occupancy/CarPark`

> Example responses

> 200 Response

```json
[
  {
    "bays": [
      {
        "bayCount": 0,
        "bayType": "string",
        "free": 0,
        "occupied": 0
      }
    ],
    "carParkDetailsUrl": "string",
    "id": "string",
    "name": "string"
  }
]
```

<h3 id="gets-the-occupancy-for-all-car-parks-that-have-occupancy-data-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="gets-the-occupancy-for-all-car-parks-that-have-occupancy-data-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Tfl.Api.Presentation.Entities.CarParkOccupancy](#schematfl.api.presentation.entities.carparkoccupancy)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Gets the occupancy for a car park with a given id

<a id="opIdOccupancy_Get"></a>

> Code samples

```bash
curl https://example.com/Occupancy/CarPark/string \
  -H 'Accept: application/json'
```

`GET /Occupancy/CarPark/{id}`

<h3 id="gets-the-occupancy-for-a-car-park-with-a-given-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "bays": [
    {
      "bayCount": 0,
      "bayType": "string",
      "free": 0,
      "occupied": 0
    }
  ],
  "carParkDetailsUrl": "string",
  "id": "string",
  "name": "string"
}
```

<h3 id="gets-the-occupancy-for-a-car-park-with-a-given-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Tfl.Api.Presentation.Entities.CarParkOccupancy](#schematfl.api.presentation.entities.carparkoccupancy)|

<aside class="success">
This operation does not require authentication
</aside>

## Gets the occupancy for all charge connectors

<a id="opIdOccupancy_GetAllChargeConnectorStatus"></a>

> Code samples

```bash
curl https://example.com/Occupancy/ChargeConnector \
  -H 'Accept: application/json'
```

`GET /Occupancy/ChargeConnector`

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "sourceSystemPlaceId": "string",
    "status": "string"
  }
]
```

<h3 id="gets-the-occupancy-for-all-charge-connectors-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="gets-the-occupancy-for-all-charge-connectors-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Tfl.Api.Presentation.Entities.ChargeConnectorOccupancy](#schematfl.api.presentation.entities.chargeconnectoroccupancy)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Gets the occupancy for a charge connectors with a given id (sourceSystemPlaceId)

<a id="opIdOccupancy_GetChargeConnectorStatus"></a>

> Code samples

```bash
curl https://example.com/Occupancy/ChargeConnector/string \
  -H 'Accept: application/json'
```

`GET /Occupancy/ChargeConnector/{ids}`

<h3 id="gets-the-occupancy-for-a-charge-connectors-with-a-given-id-sourcesystemplaceid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ids|path|[string]|true|none|

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "sourceSystemPlaceId": "string",
    "status": "string"
  }
]
```

<h3 id="gets-the-occupancy-for-a-charge-connectors-with-a-given-id-sourcesystemplaceid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="gets-the-occupancy-for-a-charge-connectors-with-a-given-id-sourcesystemplaceid-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Tfl.Api.Presentation.Entities.ChargeConnectorOccupancy](#schematfl.api.presentation.entities.chargeconnectoroccupancy)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="transport-for-london-unified-api-place">Place</h1>

## Gets the places that lie within a geographic region. The geographic region of interest can either be specified by using a lat/lon geo-point and a radius in metres to return places within the locus defined by the lat/lon of its centre or alternatively, by the use of a bounding box defined by the lat/lon of its north-west and south-east corners. Optionally filters on type and can strip properties for a smaller payload.

<a id="opIdPlace_GetByGeo"></a>

> Code samples

```bash
curl https://example.com/Place \
  -H 'Accept: application/json'
```

`GET /Place`

<h3 id="gets-the-places-that-lie-within-a-geographic-region-the-geographic-region-of-interest-can-either-be-specified-by-using-a-latlon-geo-point-and-a-radius-in-metres-to-return-places-within-the-locus-defined-by-the-latlon-of-its-centre-or-alternatively-by-the-use-of-a-bounding-box-defined-by-the-latlon-of-its-north-west-and-south-east-corners-optionally-filters-on-type-and-can-strip-properties-for-a-smaller-payload-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|radius|query|number(double)|false|The radius of the bounding circle in metres when only lat/lon are specified.|
|categories|query|[string]|false|An optional list of comma separated property categories to return in the Place's property bag. If null or empty, all categories of property are returned. Pass the keyword "none" to return no properties (a valid list of categories can be obtained from the /Place/Meta/categories endpoint)|
|includeChildren|query|boolean|false|Defaults to false. If true child places e.g. individual charging stations at a charge point while be included, otherwise just the URLs of any child places will be returned|
|type|query|[string]|false|Place types to filter on, or null to return all types|
|activeOnly|query|boolean|false|An optional parameter to limit the results to active records only (Currently only the 'VariableMessageSign' place type is supported)|
|numberOfPlacesToReturn|query|integer(int32)|false|If specified, limits the number of returned places equal to the given value|
|placeGeo.swLat|query|number(double)|false|none|
|placeGeo.swLon|query|number(double)|false|none|
|placeGeo.neLat|query|number(double)|false|none|
|placeGeo.neLon|query|number(double)|false|none|
|placeGeo.lat|query|number(double)|false|none|
|placeGeo.lon|query|number(double)|false|none|

> Example responses

> 200 Response

```json
[
  {
    "accessibilitySummary": "string",
    "additionalProperties": [
      {
        "category": "string",
        "key": "string",
        "modified": "1970-01-01T00:00:00Z",
        "sourceSystemKey": "string",
        "value": "string"
      }
    ],
    "children": [
      {
        "additionalProperties": [
          {
            "category": "string",
            "key": "string",
            "modified": "1970-01-01T00:00:00Z",
            "sourceSystemKey": "string",
            "value": "string"
          }
        ],
        "children": [
          {}
        ],
        "childrenUrls": [
          "string"
        ],
        "commonName": "string",
        "distance": 0,
        "id": "string",
        "lat": 0,
        "lon": 0,
        "placeType": "string",
        "url": "string"
      }
    ],
    "childrenUrls": [
      "string"
    ],
    "commonName": "string",
    "distance": 0,
    "fullName": "string",
    "hubNaptanCode": "string",
    "icsCode": "string",
    "id": "string",
    "indicator": "string",
    "individualStopId": "string",
    "lat": 0,
    "lineGroup": [
      {
        "lineIdentifier": [
          "string"
        ],
        "naptanIdReference": "string",
        "stationAtcoCode": "string"
      }
    ],
    "lineModeGroups": [
      {
        "lineIdentifier": [
          "string"
        ],
        "modeName": "string"
      }
    ],
    "lines": [
      {
        "crowding": {
          "passengerFlows": [
            {
              "timeSlice": "string",
              "value": 0
            }
          ],
          "trainLoadings": [
            {
              "direction": "string",
              "line": "string",
              "lineDirection": "string",
              "naptanTo": "string",
              "platformDirection": "string",
              "timeSlice": "string",
              "value": 0
            }
          ]
        },
        "fullName": "string",
        "id": "string",
        "motType": "string",
        "name": "string",
        "network": "string",
        "routeType": "Unknown",
        "status": "Unknown",
        "type": "string",
        "uri": "string"
      }
    ],
    "lon": 0,
    "modes": [
      "string"
    ],
    "naptanId": "string",
    "naptanMode": "string",
    "placeType": "string",
    "platformName": "string",
    "smsCode": "string",
    "stationNaptan": "string",
    "status": true,
    "stopLetter": "string",
    "stopType": "string",
    "url": "string"
  }
]
```

<h3 id="gets-the-places-that-lie-within-a-geographic-region-the-geographic-region-of-interest-can-either-be-specified-by-using-a-latlon-geo-point-and-a-radius-in-metres-to-return-places-within-the-locus-defined-by-the-latlon-of-its-centre-or-alternatively-by-the-use-of-a-bounding-box-defined-by-the-latlon-of-its-north-west-and-south-east-corners-optionally-filters-on-type-and-can-strip-properties-for-a-smaller-payload-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="gets-the-places-that-lie-within-a-geographic-region-the-geographic-region-of-interest-can-either-be-specified-by-using-a-latlon-geo-point-and-a-radius-in-metres-to-return-places-within-the-locus-defined-by-the-latlon-of-its-centre-or-alternatively-by-the-use-of-a-bounding-box-defined-by-the-latlon-of-its-north-west-and-south-east-corners-optionally-filters-on-type-and-can-strip-properties-for-a-smaller-payload-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Tfl.Api.Presentation.Entities.StopPoint](#schematfl.api.presentation.entities.stoppoint)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Gets the set of streets associated with a post code.

<a id="opIdPlace_GetStreetsByPostCode"></a>

> Code samples

```bash
curl 'https://example.com/Place/Address/Streets/string?postcode=string' \
  -H 'Accept: application/json'
```

`GET /Place/Address/Streets/{Postcode}`

<h3 id="gets-the-set-of-streets-associated-with-a-post-code-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|postcode|query|string|true|none|
|postcodeInput.postcode|query|string|false|none|
|Postcode|path|string|true|Automatically added|

> Example responses

> 200 Response

```json
{}
```

<h3 id="gets-the-set-of-streets-associated-with-a-post-code-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[System.Object](#schemasystem.object)|

<aside class="success">
This operation does not require authentication
</aside>

## Gets a list of all of the available place property categories and keys.

<a id="opIdPlace_MetaCategories"></a>

> Code samples

```bash
curl https://example.com/Place/Meta/Categories \
  -H 'Accept: application/json'
```

`GET /Place/Meta/Categories`

> Example responses

> 200 Response

```json
[
  {
    "availableKeys": [
      "string"
    ],
    "category": "string"
  }
]
```

<h3 id="gets-a-list-of-all-of-the-available-place-property-categories-and-keys-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="gets-a-list-of-all-of-the-available-place-property-categories-and-keys-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Tfl.Api.Presentation.Entities.PlaceCategory](#schematfl.api.presentation.entities.placecategory)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Gets a list of the available types of Place.

<a id="opIdPlace_MetaPlaceTypes"></a>

> Code samples

```bash
curl https://example.com/Place/Meta/PlaceTypes \
  -H 'Accept: application/json'
```

`GET /Place/Meta/PlaceTypes`

> Example responses

> 200 Response

```json
[
  {
    "availableKeys": [
      "string"
    ],
    "category": "string"
  }
]
```

<h3 id="gets-a-list-of-the-available-types-of-place-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="gets-a-list-of-the-available-types-of-place-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Tfl.Api.Presentation.Entities.PlaceCategory](#schematfl.api.presentation.entities.placecategory)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Gets all places that matches the given query

<a id="opIdPlace_Search"></a>

> Code samples

```bash
curl 'https://example.com/Place/Search?name=string' \
  -H 'Accept: application/json'
```

`GET /Place/Search`

<h3 id="gets-all-places-that-matches-the-given-query-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|query|string|true|The name of the place, you can use the /Place/Types/{types} endpoint to get a list of places for a given type including their names.|
|types|query|[string]|false|A comma-separated list of the types to return. Max. approx 12 types.|

> Example responses

> 200 Response

```json
[
  {
    "additionalProperties": [
      {
        "category": "string",
        "key": "string",
        "modified": "1970-01-01T00:00:00Z",
        "sourceSystemKey": "string",
        "value": "string"
      }
    ],
    "children": [
      {}
    ],
    "childrenUrls": [
      "string"
    ],
    "commonName": "string",
    "distance": 0,
    "id": "string",
    "lat": 0,
    "lon": 0,
    "placeType": "string",
    "url": "string"
  }
]
```

<h3 id="gets-all-places-that-matches-the-given-query-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="gets-all-places-that-matches-the-given-query-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Tfl.Api.Presentation.Entities.Place](#schematfl.api.presentation.entities.place)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Gets all places of a given type

<a id="opIdPlace_GetByType"></a>

> Code samples

```bash
curl https://example.com/Place/Type/string \
  -H 'Accept: application/json'
```

`GET /Place/Type/{types}`

<h3 id="gets-all-places-of-a-given-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|types|path|[string]|true|A comma-separated list of the types to return. Max. approx 12 types.<br>            A valid list of place types can be obtained from the /Place/Meta/placeTypes endpoint.|
|activeOnly|query|boolean|false|An optional parameter to limit the results to active records only (Currently only the 'VariableMessageSign' place type is supported)|

> Example responses

> 200 Response

```json
[
  {
    "additionalProperties": [
      {
        "category": "string",
        "key": "string",
        "modified": "1970-01-01T00:00:00Z",
        "sourceSystemKey": "string",
        "value": "string"
      }
    ],
    "children": [
      {}
    ],
    "childrenUrls": [
      "string"
    ],
    "commonName": "string",
    "distance": 0,
    "id": "string",
    "lat": 0,
    "lon": 0,
    "placeType": "string",
    "url": "string"
  }
]
```

<h3 id="gets-all-places-of-a-given-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="gets-all-places-of-a-given-type-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Tfl.Api.Presentation.Entities.Place](#schematfl.api.presentation.entities.place)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Gets the place with the given id.

<a id="opIdPlace_Get"></a>

> Code samples

```bash
curl https://example.com/Place/string \
  -H 'Accept: application/json'
```

`GET /Place/{id}`

<h3 id="gets-the-place-with-the-given-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The id of the place, you can use the /Place/Types/{types} endpoint to get a list of places for a given type including their ids|
|includeChildren|query|boolean|false|Defaults to false. If true child places e.g. individual charging stations at a charge point while be included, otherwise just the URLs of any child places will be returned|

> Example responses

> 200 Response

```json
[
  {
    "additionalProperties": [
      {
        "category": "string",
        "key": "string",
        "modified": "1970-01-01T00:00:00Z",
        "sourceSystemKey": "string",
        "value": "string"
      }
    ],
    "children": [
      {}
    ],
    "childrenUrls": [
      "string"
    ],
    "commonName": "string",
    "distance": 0,
    "id": "string",
    "lat": 0,
    "lon": 0,
    "placeType": "string",
    "url": "string"
  }
]
```

<h3 id="gets-the-place-with-the-given-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="gets-the-place-with-the-given-id-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Tfl.Api.Presentation.Entities.Place](#schematfl.api.presentation.entities.place)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Gets any places of the given type whose geography intersects the given latitude and longitude. In practice this means the Place must be polygonal e.g. a BoroughBoundary.

<a id="opIdPlace_GetAt"></a>

> Code samples

```bash
curl 'https://example.com/Place/string/At/string/string?lat=string&lon=string&location.lat=0&location.lon=0' \
  -H 'Accept: application/json'
```

`GET /Place/{type}/At/{Lat}/{Lon}`

<h3 id="gets-any-places-of-the-given-type-whose-geography-intersects-the-given-latitude-and-longitude-in-practice-this-means-the-place-must-be-polygonal-eg-a-boroughboundary-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|type|path|[string]|true|The place type (a valid list of place types can be obtained from the /Place/Meta/placeTypes endpoint)|
|lat|query|string|true|none|
|lon|query|string|true|none|
|location.lat|query|number(double)|true|none|
|location.lon|query|number(double)|true|none|
|Lat|path|string|true|Automatically added|
|Lon|path|string|true|Automatically added|

> Example responses

> 200 Response

```json
{}
```

<h3 id="gets-any-places-of-the-given-type-whose-geography-intersects-the-given-latitude-and-longitude-in-practice-this-means-the-place-must-be-polygonal-eg-a-boroughboundary-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[System.Object](#schemasystem.object)|

<aside class="success">
This operation does not require authentication
</aside>

## Gets the place overlay for a given set of co-ordinates and a given width/height.

<a id="opIdPlace_GetOverlay"></a>

> Code samples

```bash
curl 'https://example.com/Place/string/overlay/0/string/string/0/0?lat=string&lon=string&location.lat=0&location.lon=0' \
  -H 'Accept: application/json'
```

`GET /Place/{type}/overlay/{z}/{Lat}/{Lon}/{width}/{height}`

<h3 id="gets-the-place-overlay-for-a-given-set-of-co-ordinates-and-a-given-widthheight-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|z|path|integer(int32)|true|The zoom level|
|type|path|[string]|true|The place type (a valid list of place types can be obtained from the /Place/Meta/placeTypes endpoint)|
|width|path|integer(int32)|true|The width of the requested overlay.|
|height|path|integer(int32)|true|The height of the requested overlay.|
|lat|query|string|true|none|
|lon|query|string|true|none|
|location.lat|query|number(double)|true|none|
|location.lon|query|number(double)|true|none|
|Lat|path|string|true|Automatically added|
|Lon|path|string|true|Automatically added|

> Example responses

> 200 Response

```json
{}
```

<h3 id="gets-the-place-overlay-for-a-given-set-of-co-ordinates-and-a-given-widthheight-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[System.Object](#schemasystem.object)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="transport-for-london-unified-api-road">Road</h1>

## Gets all roads managed by TfL

<a id="opIdRoad_Get"></a>

> Code samples

```bash
curl https://example.com/Road \
  -H 'Accept: application/json'
```

`GET /Road`

> Example responses

> 200 Response

```json
[
  {
    "bounds": "string",
    "displayName": "string",
    "envelope": "string",
    "group": "string",
    "id": "string",
    "statusAggregationEndDate": "1970-01-01T00:00:00Z",
    "statusAggregationStartDate": "1970-01-01T00:00:00Z",
    "statusSeverity": "string",
    "statusSeverityDescription": "string",
    "url": "string"
  }
]
```

<h3 id="gets-all-roads-managed-by-tfl-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="gets-all-roads-managed-by-tfl-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Tfl.Api.Presentation.Entities.RoadCorridor](#schematfl.api.presentation.entities.roadcorridor)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Gets a list of valid RoadDisruption categories

<a id="opIdRoad_MetaCategories"></a>

> Code samples

```bash
curl https://example.com/Road/Meta/Categories \
  -H 'Accept: application/json'
```

`GET /Road/Meta/Categories`

> Example responses

> 200 Response

```json
[
  "string"
]
```

<h3 id="gets-a-list-of-valid-roaddisruption-categories-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="gets-a-list-of-valid-roaddisruption-categories-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Gets a list of valid RoadDisruption severity codes

<a id="opIdRoad_MetaSeverities"></a>

> Code samples

```bash
curl https://example.com/Road/Meta/Severities \
  -H 'Accept: application/json'
```

`GET /Road/Meta/Severities`

> Example responses

> 200 Response

```json
[
  {
    "description": "string",
    "modeName": "string",
    "severityLevel": 0
  }
]
```

<h3 id="gets-a-list-of-valid-roaddisruption-severity-codes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="gets-a-list-of-valid-roaddisruption-severity-codes-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Tfl.Api.Presentation.Entities.StatusSeverity](#schematfl.api.presentation.entities.statusseverity)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Gets a list of active disruptions filtered by disruption Ids.

<a id="opIdRoad_DisruptionById"></a>

> Code samples

```bash
curl https://example.com/Road/all/Disruption/string \
  -H 'Accept: application/json'
```

`GET /Road/all/Disruption/{disruptionIds}`

<h3 id="gets-a-list-of-active-disruptions-filtered-by-disruption-ids-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|disruptionIds|path|[string]|true|Comma-separated list of disruption identifiers to filter by.|
|stripContent|query|boolean|false|Optional, defaults to false. When true, removes every property/node except for id, point, severity, severityDescription, startDate, endDate, corridor details, location and comments.|

> Example responses

> 200 Response

```json
{
  "category": "string",
  "comments": "string",
  "corridorIds": [
    "string"
  ],
  "currentUpdate": "string",
  "currentUpdateDateTime": "1970-01-01T00:00:00Z",
  "endDateTime": "1970-01-01T00:00:00Z",
  "geography": {
    "geography": {
      "coordinateSystemId": 0,
      "wellKnownBinary": "string",
      "wellKnownText": "string"
    }
  },
  "geometry": {
    "geography": {
      "coordinateSystemId": 0,
      "wellKnownBinary": "string",
      "wellKnownText": "string"
    }
  },
  "hasClosures": true,
  "id": "string",
  "isProvisional": true,
  "lastModifiedTime": "1970-01-01T00:00:00Z",
  "levelOfInterest": "string",
  "linkText": "string",
  "linkUrl": "string",
  "location": "string",
  "ordinal": 0,
  "point": "string",
  "publishEndDate": "1970-01-01T00:00:00Z",
  "publishStartDate": "1970-01-01T00:00:00Z",
  "recurringSchedules": [
    {
      "endTime": "1970-01-01T00:00:00Z",
      "startTime": "1970-01-01T00:00:00Z"
    }
  ],
  "roadDisruptionImpactAreas": [
    {
      "endDate": "1970-01-01T00:00:00Z",
      "endTime": "string",
      "id": 0,
      "polygon": {
        "geography": {
          "coordinateSystemId": 0,
          "wellKnownBinary": "string",
          "wellKnownText": "string"
        }
      },
      "roadDisruptionId": "string",
      "startDate": "1970-01-01T00:00:00Z",
      "startTime": "string"
    }
  ],
  "roadDisruptionLines": [
    {
      "endDate": "1970-01-01T00:00:00Z",
      "endTime": "string",
      "id": 0,
      "isDiversion": true,
      "multiLineString": {
        "geography": {
          "coordinateSystemId": 0,
          "wellKnownBinary": "string",
          "wellKnownText": "string"
        }
      },
      "roadDisruptionId": "string",
      "startDate": "1970-01-01T00:00:00Z",
      "startTime": "string"
    }
  ],
  "roadProject": {
    "boroughsBenefited": [
      "string"
    ],
    "constructionEndDate": "1970-01-01T00:00:00Z",
    "constructionStartDate": "1970-01-01T00:00:00Z",
    "consultationEndDate": "1970-01-01T00:00:00Z",
    "consultationPageUrl": "string",
    "consultationStartDate": "1970-01-01T00:00:00Z",
    "contactEmail": "string",
    "contactName": "string",
    "cycleSuperhighwayId": "string",
    "externalPageUrl": "string",
    "phase": "Unscoped",
    "projectDescription": "string",
    "projectId": "string",
    "projectName": "string",
    "projectPageUrl": "string",
    "projectSummaryPageUrl": "string",
    "schemeName": "string"
  },
  "severity": "string",
  "startDateTime": "1970-01-01T00:00:00Z",
  "status": "string",
  "streets": [
    {
      "closure": "string",
      "directions": "string",
      "name": "string",
      "segments": [
        {
          "lineString": "string",
          "sourceSystemId": 0,
          "sourceSystemKey": "string",
          "toid": "string"
        }
      ],
      "sourceSystemId": 0,
      "sourceSystemKey": "string"
    }
  ],
  "subCategory": "string",
  "timeFrame": "string",
  "url": "string"
}
```

<h3 id="gets-a-list-of-active-disruptions-filtered-by-disruption-ids-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Tfl.Api.Presentation.Entities.RoadDisruption](#schematfl.api.presentation.entities.roaddisruption)|

<aside class="success">
This operation does not require authentication
</aside>

## Gets a list of disrupted streets. If no date filters are provided, current disruptions are returned.

<a id="opIdRoad_DisruptedStreets"></a>

> Code samples

```bash
curl 'https://example.com/Road/all/Street/Disruption?startDate=1970-01-01T00%3A00%3A00Z&endDate=1970-01-01T00%3A00%3A00Z' \
  -H 'Accept: application/json'
```

`GET /Road/all/Street/Disruption`

<h3 id="gets-a-list-of-disrupted-streets-if-no-date-filters-are-provided-current-disruptions-are-returned-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|startDate|query|string(date-time)|true|Optional, the start time to filter on.|
|endDate|query|string(date-time)|true|Optional, The end time to filter on.|

> Example responses

> 200 Response

```json
{}
```

<h3 id="gets-a-list-of-disrupted-streets-if-no-date-filters-are-provided-current-disruptions-are-returned-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[System.Object](#schemasystem.object)|

<aside class="success">
This operation does not require authentication
</aside>

## Gets the road with the specified id (e.g. A1)

> Code samples

```bash
curl https://example.com/Road/string \
  -H 'Accept: application/json'
```

`GET /Road/{ids}`

<h3 id="gets-the-road-with-the-specified-id-eg-a1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ids|path|[string]|true|Comma-separated list of road identifiers e.g. "A406, A2" (a full list of supported road identifiers can be found at the /Road/ endpoint)|

> Example responses

> 200 Response

```json
[
  {
    "bounds": "string",
    "displayName": "string",
    "envelope": "string",
    "group": "string",
    "id": "string",
    "statusAggregationEndDate": "1970-01-01T00:00:00Z",
    "statusAggregationStartDate": "1970-01-01T00:00:00Z",
    "statusSeverity": "string",
    "statusSeverityDescription": "string",
    "url": "string"
  }
]
```

<h3 id="gets-the-road-with-the-specified-id-eg-a1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="gets-the-road-with-the-specified-id-eg-a1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Tfl.Api.Presentation.Entities.RoadCorridor](#schematfl.api.presentation.entities.roadcorridor)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get active disruptions, filtered by road ids

<a id="opIdRoad_Disruption"></a>

> Code samples

```bash
curl https://example.com/Road/string/Disruption \
  -H 'Accept: application/json'
```

`GET /Road/{ids}/Disruption`

<h3 id="get-active-disruptions-filtered-by-road-ids-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ids|path|[string]|true|Comma-separated list of road identifiers e.g. "A406, A2" use all for all to ignore id filter (a full list of supported road identifiers can be found at the /Road/ endpoint)|
|stripContent|query|boolean|false|Optional, defaults to false. When true, removes every property/node except for id, point, severity, severityDescription, startDate, endDate, corridor details, location, comments and streets|
|severities|query|[string]|false|an optional list of Severity names to filter on (a valid list of severities can be obtained from the /Road/Meta/severities endpoint)|
|categories|query|[string]|false|an optional list of category names to filter on (a valid list of categories can be obtained from the /Road/Meta/categories endpoint)|
|closures|query|boolean|false|Optional, defaults to true. When true, always includes disruptions that have road closures, regardless of the severity filter. When false, the severity filter works as normal.|

> Example responses

> 200 Response

```json
[
  {
    "category": "string",
    "comments": "string",
    "corridorIds": [
      "string"
    ],
    "currentUpdate": "string",
    "currentUpdateDateTime": "1970-01-01T00:00:00Z",
    "endDateTime": "1970-01-01T00:00:00Z",
    "geography": {
      "geography": {
        "coordinateSystemId": 0,
        "wellKnownBinary": "string",
        "wellKnownText": "string"
      }
    },
    "geometry": {
      "geography": {
        "coordinateSystemId": 0,
        "wellKnownBinary": "string",
        "wellKnownText": "string"
      }
    },
    "hasClosures": true,
    "id": "string",
    "isProvisional": true,
    "lastModifiedTime": "1970-01-01T00:00:00Z",
    "levelOfInterest": "string",
    "linkText": "string",
    "linkUrl": "string",
    "location": "string",
    "ordinal": 0,
    "point": "string",
    "publishEndDate": "1970-01-01T00:00:00Z",
    "publishStartDate": "1970-01-01T00:00:00Z",
    "recurringSchedules": [
      {
        "endTime": "1970-01-01T00:00:00Z",
        "startTime": "1970-01-01T00:00:00Z"
      }
    ],
    "roadDisruptionImpactAreas": [
      {
        "endDate": "1970-01-01T00:00:00Z",
        "endTime": "string",
        "id": 0,
        "polygon": {
          "geography": {
            "coordinateSystemId": 0,
            "wellKnownBinary": "string",
            "wellKnownText": "string"
          }
        },
        "roadDisruptionId": "string",
        "startDate": "1970-01-01T00:00:00Z",
        "startTime": "string"
      }
    ],
    "roadDisruptionLines": [
      {
        "endDate": "1970-01-01T00:00:00Z",
        "endTime": "string",
        "id": 0,
        "isDiversion": true,
        "multiLineString": {
          "geography": {
            "coordinateSystemId": 0,
            "wellKnownBinary": "string",
            "wellKnownText": "string"
          }
        },
        "roadDisruptionId": "string",
        "startDate": "1970-01-01T00:00:00Z",
        "startTime": "string"
      }
    ],
    "roadProject": {
      "boroughsBenefited": [
        "string"
      ],
      "constructionEndDate": "1970-01-01T00:00:00Z",
      "constructionStartDate": "1970-01-01T00:00:00Z",
      "consultationEndDate": "1970-01-01T00:00:00Z",
      "consultationPageUrl": "string",
      "consultationStartDate": "1970-01-01T00:00:00Z",
      "contactEmail": "string",
      "contactName": "string",
      "cycleSuperhighwayId": "string",
      "externalPageUrl": "string",
      "phase": "Unscoped",
      "projectDescription": "string",
      "projectId": "string",
      "projectName": "string",
      "projectPageUrl": "string",
      "projectSummaryPageUrl": "string",
      "schemeName": "string"
    },
    "severity": "string",
    "startDateTime": "1970-01-01T00:00:00Z",
    "status": "string",
    "streets": [
      {
        "closure": "string",
        "directions": "string",
        "name": "string",
        "segments": [
          {
            "lineString": "string",
            "sourceSystemId": 0,
            "sourceSystemKey": "string",
            "toid": "string"
          }
        ],
        "sourceSystemId": 0,
        "sourceSystemKey": "string"
      }
    ],
    "subCategory": "string",
    "timeFrame": "string",
    "url": "string"
  }
]
```

<h3 id="get-active-disruptions-filtered-by-road-ids-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-active-disruptions-filtered-by-road-ids-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Tfl.Api.Presentation.Entities.RoadDisruption](#schematfl.api.presentation.entities.roaddisruption)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Gets the specified roads with the status aggregated over the date range specified, or now until the end of today if no dates are passed.

<a id="opIdRoad_Status"></a>

> Code samples

```bash
curl https://example.com/Road/string/Status \
  -H 'Accept: application/json'
```

`GET /Road/{ids}/Status`

<h3 id="gets-the-specified-roads-with-the-status-aggregated-over-the-date-range-specified-or-now-until-the-end-of-today-if-no-dates-are-passed-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ids|path|[string]|true|Comma-separated list of road identifiers e.g. "A406, A2" or use "all" to ignore id filter (a full list of supported road identifiers can be found at the /Road/ endpoint)|
|dateRangeNullable.startDate|query|string(date-time)|false|none|
|dateRangeNullable.endDate|query|string(date-time)|false|none|

> Example responses

> 200 Response

```json
[
  {
    "bounds": "string",
    "displayName": "string",
    "envelope": "string",
    "group": "string",
    "id": "string",
    "statusAggregationEndDate": "1970-01-01T00:00:00Z",
    "statusAggregationStartDate": "1970-01-01T00:00:00Z",
    "statusSeverity": "string",
    "statusSeverityDescription": "string",
    "url": "string"
  }
]
```

<h3 id="gets-the-specified-roads-with-the-status-aggregated-over-the-date-range-specified-or-now-until-the-end-of-today-if-no-dates-are-passed-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="gets-the-specified-roads-with-the-status-aggregated-over-the-date-range-specified-or-now-until-the-end-of-today-if-no-dates-are-passed-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Tfl.Api.Presentation.Entities.RoadCorridor](#schematfl.api.presentation.entities.roadcorridor)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="transport-for-london-unified-api-search">Search</h1>

## Search the site for occurrences of the query string. The maximum number of results returned is equal to the maximum page size of 100. To return subsequent pages, use the paginated overload.

<a id="opIdSearch_Get"></a>

> Code samples

```bash
curl 'https://example.com/Search?query=string' \
  -H 'Accept: application/json'
```

`GET /Search`

<h3 id="search-the-site-for-occurrences-of-the-query-string-the-maximum-number-of-results-returned-is-equal-to-the-maximum-page-size-of-100-to-return-subsequent-pages-use-the-paginated-overload-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|query|query|string|true|The search query|

> Example responses

> 200 Response

```json
{
  "from": 0,
  "matches": [
    {
      "id": "string",
      "lat": 0,
      "lon": 0,
      "name": "string",
      "url": "string"
    }
  ],
  "maxScore": 0,
  "page": 0,
  "pageSize": 0,
  "provider": "string",
  "query": "string",
  "total": 0
}
```

<h3 id="search-the-site-for-occurrences-of-the-query-string-the-maximum-number-of-results-returned-is-equal-to-the-maximum-page-size-of-100-to-return-subsequent-pages-use-the-paginated-overload-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Tfl.Api.Presentation.Entities.SearchResponse](#schematfl.api.presentation.entities.searchresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Searches the bus schedules folder on S3 for a given bus number.

<a id="opIdSearch_BusSchedules"></a>

> Code samples

```bash
curl 'https://example.com/Search/BusSchedules?query=string' \
  -H 'Accept: application/json'
```

`GET /Search/BusSchedules`

<h3 id="searches-the-bus-schedules-folder-on-s3-for-a-given-bus-number-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|query|query|string|true|The search query|

> Example responses

> 200 Response

```json
{
  "from": 0,
  "matches": [
    {
      "id": "string",
      "lat": 0,
      "lon": 0,
      "name": "string",
      "url": "string"
    }
  ],
  "maxScore": 0,
  "page": 0,
  "pageSize": 0,
  "provider": "string",
  "query": "string",
  "total": 0
}
```

<h3 id="searches-the-bus-schedules-folder-on-s3-for-a-given-bus-number-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Tfl.Api.Presentation.Entities.SearchResponse](#schematfl.api.presentation.entities.searchresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Gets the available search categories.

<a id="opIdSearch_MetaCategories"></a>

> Code samples

```bash
curl https://example.com/Search/Meta/Categories \
  -H 'Accept: application/json'
```

`GET /Search/Meta/Categories`

> Example responses

> 200 Response

```json
[
  "string"
]
```

<h3 id="gets-the-available-search-categories-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="gets-the-available-search-categories-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Gets the available searchProvider names.

<a id="opIdSearch_MetaSearchProviders"></a>

> Code samples

```bash
curl https://example.com/Search/Meta/SearchProviders \
  -H 'Accept: application/json'
```

`GET /Search/Meta/SearchProviders`

> Example responses

> 200 Response

```json
[
  "string"
]
```

<h3 id="gets-the-available-searchprovider-names-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="gets-the-available-searchprovider-names-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Gets the available sorting options.

<a id="opIdSearch_MetaSorts"></a>

> Code samples

```bash
curl https://example.com/Search/Meta/Sorts \
  -H 'Accept: application/json'
```

`GET /Search/Meta/Sorts`

> Example responses

> 200 Response

```json
[
  "string"
]
```

<h3 id="gets-the-available-sorting-options-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="gets-the-available-sorting-options-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="transport-for-london-unified-api-stoppoint">StopPoint</h1>

## Gets a list of StopPoints within {radius} by the specified criteria

<a id="opIdStopPoint_GetByGeoPoint"></a>

> Code samples

```bash
curl 'https://example.com/StopPoint?stopTypes=string&location.lat=0&location.lon=0' \
  -H 'Accept: application/json'
```

`GET /StopPoint`

<h3 id="gets-a-list-of-stoppoints-within-radius-by-the-specified-criteria-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|stopTypes|query|[string]|true|a list of stopTypes that should be returned (a list of valid stop types can be obtained from the StopPoint/meta/stoptypes endpoint)|
|radius|query|integer(int32)|false|the radius of the bounding circle in metres (default : 200)|
|useStopPointHierarchy|query|boolean|false|Re-arrange the output into a parent/child hierarchy|
|modes|query|[string]|false|the list of modes to search (comma separated mode names e.g. tube,dlr)|
|categories|query|[string]|false|an optional list of comma separated property categories to return in the StopPoint's property bag. If null or empty, all categories of property are returned. Pass the keyword "none" to return no properties (a valid list of categories can be obtained from the /StopPoint/Meta/categories endpoint)|
|returnLines|query|boolean|false|true to return the lines that each stop point serves as a nested resource|
|location.lat|query|number(double)|true|none|
|location.lon|query|number(double)|true|none|

> Example responses

> 200 Response

```json
{
  "centrePoint": [
    0
  ],
  "page": 0,
  "pageSize": 0,
  "stopPoints": [
    {
      "accessibilitySummary": "string",
      "additionalProperties": [
        {
          "category": "string",
          "key": "string",
          "modified": "1970-01-01T00:00:00Z",
          "sourceSystemKey": "string",
          "value": "string"
        }
      ],
      "children": [
        {
          "additionalProperties": [
            {
              "category": "string",
              "key": "string",
              "modified": "1970-01-01T00:00:00Z",
              "sourceSystemKey": "string",
              "value": "string"
            }
          ],
          "children": [
            {}
          ],
          "childrenUrls": [
            "string"
          ],
          "commonName": "string",
          "distance": 0,
          "id": "string",
          "lat": 0,
          "lon": 0,
          "placeType": "string",
          "url": "string"
        }
      ],
      "childrenUrls": [
        "string"
      ],
      "commonName": "string",
      "distance": 0,
      "fullName": "string",
      "hubNaptanCode": "string",
      "icsCode": "string",
      "id": "string",
      "indicator": "string",
      "individualStopId": "string",
      "lat": 0,
      "lineGroup": [
        {
          "lineIdentifier": [
            "string"
          ],
          "naptanIdReference": "string",
          "stationAtcoCode": "string"
        }
      ],
      "lineModeGroups": [
        {
          "lineIdentifier": [
            "string"
          ],
          "modeName": "string"
        }
      ],
      "lines": [
        {
          "crowding": {
            "passengerFlows": [
              {
                "timeSlice": "string",
                "value": 0
              }
            ],
            "trainLoadings": [
              {
                "direction": "string",
                "line": "string",
                "lineDirection": "string",
                "naptanTo": "string",
                "platformDirection": "string",
                "timeSlice": "string",
                "value": 0
              }
            ]
          },
          "fullName": "string",
          "id": "string",
          "motType": "string",
          "name": "string",
          "network": "string",
          "routeType": "Unknown",
          "status": "Unknown",
          "type": "string",
          "uri": "string"
        }
      ],
      "lon": 0,
      "modes": [
        "string"
      ],
      "naptanId": "string",
      "naptanMode": "string",
      "placeType": "string",
      "platformName": "string",
      "smsCode": "string",
      "stationNaptan": "string",
      "status": true,
      "stopLetter": "string",
      "stopType": "string",
      "url": "string"
    }
  ],
  "total": 0
}
```

<h3 id="gets-a-list-of-stoppoints-within-radius-by-the-specified-criteria-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Tfl.Api.Presentation.Entities.StopPointsResponse](#schematfl.api.presentation.entities.stoppointsresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Gets the list of available StopPoint additional information categories

<a id="opIdStopPoint_MetaCategories"></a>

> Code samples

```bash
curl https://example.com/StopPoint/Meta/Categories \
  -H 'Accept: application/json'
```

`GET /StopPoint/Meta/Categories`

> Example responses

> 200 Response

```json
[
  {
    "availableKeys": [
      "string"
    ],
    "category": "string"
  }
]
```

<h3 id="gets-the-list-of-available-stoppoint-additional-information-categories-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="gets-the-list-of-available-stoppoint-additional-information-categories-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Tfl.Api.Presentation.Entities.StopPointCategory](#schematfl.api.presentation.entities.stoppointcategory)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Gets the list of available StopPoint modes

<a id="opIdStopPoint_MetaModes"></a>

> Code samples

```bash
curl https://example.com/StopPoint/Meta/Modes \
  -H 'Accept: application/json'
```

`GET /StopPoint/Meta/Modes`

> Example responses

> 200 Response

```json
[
  {
    "isFarePaying": true,
    "isScheduledService": true,
    "isTflService": true,
    "modeName": "string",
    "motType": "string",
    "network": "string"
  }
]
```

<h3 id="gets-the-list-of-available-stoppoint-modes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="gets-the-list-of-available-stoppoint-modes-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Tfl.Api.Presentation.Entities.Mode](#schematfl.api.presentation.entities.mode)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Gets the list of available StopPoint types

<a id="opIdStopPoint_MetaStopTypes"></a>

> Code samples

```bash
curl https://example.com/StopPoint/Meta/StopTypes \
  -H 'Accept: application/json'
```

`GET /StopPoint/Meta/StopTypes`

> Example responses

> 200 Response

```json
[
  "string"
]
```

<h3 id="gets-the-list-of-available-stoppoint-types-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="gets-the-list-of-available-stoppoint-types-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Gets a list of StopPoints filtered by the modes available at that StopPoint.

<a id="opIdStopPoint_GetByMode"></a>

> Code samples

```bash
curl https://example.com/StopPoint/Mode/string \
  -H 'Accept: application/json'
```

`GET /StopPoint/Mode/{modes}`

<h3 id="gets-a-list-of-stoppoints-filtered-by-the-modes-available-at-that-stoppoint-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|modes|path|[string]|true|A comma-seperated list of modes e.g. tube,dlr|
|page|query|integer(int32)|false|The data set page to return. Page 1 equates to the first 1000 stop points, page 2 equates to 1001-2000 etc. Must be entered for bus mode as data set is too large.|

> Example responses

> 200 Response

```json
{
  "centrePoint": [
    0
  ],
  "page": 0,
  "pageSize": 0,
  "stopPoints": [
    {
      "accessibilitySummary": "string",
      "additionalProperties": [
        {
          "category": "string",
          "key": "string",
          "modified": "1970-01-01T00:00:00Z",
          "sourceSystemKey": "string",
          "value": "string"
        }
      ],
      "children": [
        {
          "additionalProperties": [
            {
              "category": "string",
              "key": "string",
              "modified": "1970-01-01T00:00:00Z",
              "sourceSystemKey": "string",
              "value": "string"
            }
          ],
          "children": [
            {}
          ],
          "childrenUrls": [
            "string"
          ],
          "commonName": "string",
          "distance": 0,
          "id": "string",
          "lat": 0,
          "lon": 0,
          "placeType": "string",
          "url": "string"
        }
      ],
      "childrenUrls": [
        "string"
      ],
      "commonName": "string",
      "distance": 0,
      "fullName": "string",
      "hubNaptanCode": "string",
      "icsCode": "string",
      "id": "string",
      "indicator": "string",
      "individualStopId": "string",
      "lat": 0,
      "lineGroup": [
        {
          "lineIdentifier": [
            "string"
          ],
          "naptanIdReference": "string",
          "stationAtcoCode": "string"
        }
      ],
      "lineModeGroups": [
        {
          "lineIdentifier": [
            "string"
          ],
          "modeName": "string"
        }
      ],
      "lines": [
        {
          "crowding": {
            "passengerFlows": [
              {
                "timeSlice": "string",
                "value": 0
              }
            ],
            "trainLoadings": [
              {
                "direction": "string",
                "line": "string",
                "lineDirection": "string",
                "naptanTo": "string",
                "platformDirection": "string",
                "timeSlice": "string",
                "value": 0
              }
            ]
          },
          "fullName": "string",
          "id": "string",
          "motType": "string",
          "name": "string",
          "network": "string",
          "routeType": "Unknown",
          "status": "Unknown",
          "type": "string",
          "uri": "string"
        }
      ],
      "lon": 0,
      "modes": [
        "string"
      ],
      "naptanId": "string",
      "naptanMode": "string",
      "placeType": "string",
      "platformName": "string",
      "smsCode": "string",
      "stationNaptan": "string",
      "status": true,
      "stopLetter": "string",
      "stopType": "string",
      "url": "string"
    }
  ],
  "total": 0
}
```

<h3 id="gets-a-list-of-stoppoints-filtered-by-the-modes-available-at-that-stoppoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Tfl.Api.Presentation.Entities.StopPointsResponse](#schematfl.api.presentation.entities.stoppointsresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Gets a distinct list of disrupted stop points for the given modes

<a id="opIdStopPoint_DisruptionByMode"></a>

> Code samples

```bash
curl https://example.com/StopPoint/Mode/string/Disruption \
  -H 'Accept: application/json'
```

`GET /StopPoint/Mode/{modes}/Disruption`

<h3 id="gets-a-distinct-list-of-disrupted-stop-points-for-the-given-modes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|modes|path|[string]|true|A comma-seperated list of modes e.g. tube,dlr|
|includeRouteBlockedStops|query|boolean|false|none|

> Example responses

> 200 Response

```json
[
  {
    "additionalInformation": "string",
    "appearance": "string",
    "atcoCode": "string",
    "commonName": "string",
    "description": "string",
    "fromDate": "1970-01-01T00:00:00Z",
    "mode": "string",
    "stationAtcoCode": "string",
    "toDate": "1970-01-01T00:00:00Z",
    "type": "string"
  }
]
```

<h3 id="gets-a-distinct-list-of-disrupted-stop-points-for-the-given-modes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="gets-a-distinct-list-of-disrupted-stop-points-for-the-given-modes-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Tfl.Api.Presentation.Entities.DisruptedPoint](#schematfl.api.presentation.entities.disruptedpoint)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Search StopPoints by their common name, or their 5-digit Countdown Bus Stop Code.

> Code samples

```bash
curl 'https://example.com/StopPoint/Search?query=string' \
  -H 'Accept: application/json'
```

`GET /StopPoint/Search`

<h3 id="search-stoppoints-by-their-common-name-or-their-5-digit-countdown-bus-stop-code-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|query|query|string|true|The query string, case-insensitive. Leading and trailing wildcards are applied automatically.|
|modes|query|[string]|false|An optional, parameter separated list of the modes to filter by|
|faresOnly|query|boolean|false|True to only return stations in that have Fares data available for single fares to another station.|
|maxResults|query|integer(int32)|false|An optional result limit, defaulting to and with a maximum of 50. Since children of the stop point heirarchy are returned for matches,<br>            it is possible that the flattened result set will contain more than 50 items.|
|lines|query|[string]|false|An optional, parameter separated list of the lines to filter by|
|includeHubs|query|boolean|false|If true, returns results including HUBs.|
|tflOperatedNationalRailStationsOnly|query|boolean|false|If the national-rail mode is included, this flag will filter the national rail stations so that only those operated by TfL are returned|

> Example responses

> 200 Response

```json
{
  "from": 0,
  "matches": [
    {
      "id": "string",
      "lat": 0,
      "lon": 0,
      "name": "string",
      "url": "string"
    }
  ],
  "maxScore": 0,
  "page": 0,
  "pageSize": 0,
  "provider": "string",
  "query": "string",
  "total": 0
}
```

<h3 id="search-stoppoints-by-their-common-name-or-their-5-digit-countdown-bus-stop-code-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Tfl.Api.Presentation.Entities.SearchResponse](#schematfl.api.presentation.entities.searchresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Search StopPoints by their common name, or their 5-digit Countdown Bus Stop Code.

<a id="opIdStopPoint_Search"></a>

> Code samples

```bash
curl https://example.com/StopPoint/Search/string \
  -H 'Accept: application/json'
```

`GET /StopPoint/Search/{query}`

<h3 id="search-stoppoints-by-their-common-name-or-their-5-digit-countdown-bus-stop-code-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|query|path|string|true|The query string, case-insensitive. Leading and trailing wildcards are applied automatically.|
|modes|query|[string]|false|An optional, parameter separated list of the modes to filter by|
|faresOnly|query|boolean|false|True to only return stations in that have Fares data available for single fares to another station.|
|maxResults|query|integer(int32)|false|An optional result limit, defaulting to and with a maximum of 50. Since children of the stop point heirarchy are returned for matches,<br>            it is possible that the flattened result set will contain more than 50 items.|
|lines|query|[string]|false|An optional, parameter separated list of the lines to filter by|
|includeHubs|query|boolean|false|If true, returns results including HUBs.|
|tflOperatedNationalRailStationsOnly|query|boolean|false|If the national-rail mode is included, this flag will filter the national rail stations so that only those operated by TfL are returned|

> Example responses

> 200 Response

```json
{
  "from": 0,
  "matches": [
    {
      "id": "string",
      "lat": 0,
      "lon": 0,
      "name": "string",
      "url": "string"
    }
  ],
  "maxScore": 0,
  "page": 0,
  "pageSize": 0,
  "provider": "string",
  "query": "string",
  "total": 0
}
```

<h3 id="search-stoppoints-by-their-common-name-or-their-5-digit-countdown-bus-stop-code-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Tfl.Api.Presentation.Entities.SearchResponse](#schematfl.api.presentation.entities.searchresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Gets the service types for a given stoppoint

<a id="opIdStopPoint_GetServiceTypes"></a>

> Code samples

```bash
curl 'https://example.com/StopPoint/ServiceTypes?id=string' \
  -H 'Accept: application/json'
```

`GET /StopPoint/ServiceTypes`

<h3 id="gets-the-service-types-for-a-given-stoppoint-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string|true|The Naptan id of the stop|
|lineIds|query|[string]|false|The lines which contain the given Naptan id (all lines relevant to the given stoppoint if empty)|
|modes|query|[string]|false|The modes which the lines are relevant to (all if empty)|

> Example responses

> 200 Response

```json
[
  {
    "lineName": "string",
    "lineSpecificServiceTypes": [
      {
        "serviceType": {
          "name": "string",
          "uri": "string"
        },
        "stopServesServiceType": true
      }
    ]
  }
]
```

<h3 id="gets-the-service-types-for-a-given-stoppoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="gets-the-service-types-for-a-given-stoppoint-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Tfl.Api.Presentation.Entities.LineServiceType](#schematfl.api.presentation.entities.lineservicetype)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Gets a StopPoint for a given sms code.

<a id="opIdStopPoint_GetBySms"></a>

> Code samples

```bash
curl https://example.com/StopPoint/Sms/string \
  -H 'Accept: application/json'
```

`GET /StopPoint/Sms/{id}`

<h3 id="gets-a-stoppoint-for-a-given-sms-code-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|A 5-digit Countdown Bus Stop Code e.g. 73241, 50435, 56334.|
|output|query|string|false|If set to "web", a 302 redirect to relevant website bus stop page is returned. Valid values are : web. All other values are ignored.|

> Example responses

> 200 Response

```json
{}
```

<h3 id="gets-a-stoppoint-for-a-given-sms-code-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[System.Object](#schemasystem.object)|

<aside class="success">
This operation does not require authentication
</aside>

## Gets all stop points of a given type

<a id="opIdStopPoint_GetByType"></a>

> Code samples

```bash
curl https://example.com/StopPoint/Type/string \
  -H 'Accept: application/json'
```

`GET /StopPoint/Type/{types}`

<h3 id="gets-all-stop-points-of-a-given-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|types|path|[string]|true|A comma-separated list of the types to return. Max. approx. 12 types. <br>            A list of valid stop types can be obtained from the StopPoint/meta/stoptypes endpoint.|

> Example responses

> 200 Response

```json
[
  {
    "accessibilitySummary": "string",
    "additionalProperties": [
      {
        "category": "string",
        "key": "string",
        "modified": "1970-01-01T00:00:00Z",
        "sourceSystemKey": "string",
        "value": "string"
      }
    ],
    "children": [
      {
        "additionalProperties": [
          {
            "category": "string",
            "key": "string",
            "modified": "1970-01-01T00:00:00Z",
            "sourceSystemKey": "string",
            "value": "string"
          }
        ],
        "children": [
          {}
        ],
        "childrenUrls": [
          "string"
        ],
        "commonName": "string",
        "distance": 0,
        "id": "string",
        "lat": 0,
        "lon": 0,
        "placeType": "string",
        "url": "string"
      }
    ],
    "childrenUrls": [
      "string"
    ],
    "commonName": "string",
    "distance": 0,
    "fullName": "string",
    "hubNaptanCode": "string",
    "icsCode": "string",
    "id": "string",
    "indicator": "string",
    "individualStopId": "string",
    "lat": 0,
    "lineGroup": [
      {
        "lineIdentifier": [
          "string"
        ],
        "naptanIdReference": "string",
        "stationAtcoCode": "string"
      }
    ],
    "lineModeGroups": [
      {
        "lineIdentifier": [
          "string"
        ],
        "modeName": "string"
      }
    ],
    "lines": [
      {
        "crowding": {
          "passengerFlows": [
            {
              "timeSlice": "string",
              "value": 0
            }
          ],
          "trainLoadings": [
            {
              "direction": "string",
              "line": "string",
              "lineDirection": "string",
              "naptanTo": "string",
              "platformDirection": "string",
              "timeSlice": "string",
              "value": 0
            }
          ]
        },
        "fullName": "string",
        "id": "string",
        "motType": "string",
        "name": "string",
        "network": "string",
        "routeType": "Unknown",
        "status": "Unknown",
        "type": "string",
        "uri": "string"
      }
    ],
    "lon": 0,
    "modes": [
      "string"
    ],
    "naptanId": "string",
    "naptanMode": "string",
    "placeType": "string",
    "platformName": "string",
    "smsCode": "string",
    "stationNaptan": "string",
    "status": true,
    "stopLetter": "string",
    "stopType": "string",
    "url": "string"
  }
]
```

<h3 id="gets-all-stop-points-of-a-given-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="gets-all-stop-points-of-a-given-type-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Tfl.Api.Presentation.Entities.StopPoint](#schematfl.api.presentation.entities.stoppoint)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Gets all the stop points of given type(s) with a page number

<a id="opIdStopPoint_GetByTypeWithPagination"></a>

> Code samples

```bash
curl https://example.com/StopPoint/Type/string/page/0 \
  -H 'Accept: application/json'
```

`GET /StopPoint/Type/{types}/page/{page}`

<h3 id="gets-all-the-stop-points-of-given-types-with-a-page-number-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|types|path|[string]|true|none|
|page|path|integer(int32)|true|none|

> Example responses

> 200 Response

```json
[
  {
    "accessibilitySummary": "string",
    "additionalProperties": [
      {
        "category": "string",
        "key": "string",
        "modified": "1970-01-01T00:00:00Z",
        "sourceSystemKey": "string",
        "value": "string"
      }
    ],
    "children": [
      {
        "additionalProperties": [
          {
            "category": "string",
            "key": "string",
            "modified": "1970-01-01T00:00:00Z",
            "sourceSystemKey": "string",
            "value": "string"
          }
        ],
        "children": [
          {}
        ],
        "childrenUrls": [
          "string"
        ],
        "commonName": "string",
        "distance": 0,
        "id": "string",
        "lat": 0,
        "lon": 0,
        "placeType": "string",
        "url": "string"
      }
    ],
    "childrenUrls": [
      "string"
    ],
    "commonName": "string",
    "distance": 0,
    "fullName": "string",
    "hubNaptanCode": "string",
    "icsCode": "string",
    "id": "string",
    "indicator": "string",
    "individualStopId": "string",
    "lat": 0,
    "lineGroup": [
      {
        "lineIdentifier": [
          "string"
        ],
        "naptanIdReference": "string",
        "stationAtcoCode": "string"
      }
    ],
    "lineModeGroups": [
      {
        "lineIdentifier": [
          "string"
        ],
        "modeName": "string"
      }
    ],
    "lines": [
      {
        "crowding": {
          "passengerFlows": [
            {
              "timeSlice": "string",
              "value": 0
            }
          ],
          "trainLoadings": [
            {
              "direction": "string",
              "line": "string",
              "lineDirection": "string",
              "naptanTo": "string",
              "platformDirection": "string",
              "timeSlice": "string",
              "value": 0
            }
          ]
        },
        "fullName": "string",
        "id": "string",
        "motType": "string",
        "name": "string",
        "network": "string",
        "routeType": "Unknown",
        "status": "Unknown",
        "type": "string",
        "uri": "string"
      }
    ],
    "lon": 0,
    "modes": [
      "string"
    ],
    "naptanId": "string",
    "naptanMode": "string",
    "placeType": "string",
    "platformName": "string",
    "smsCode": "string",
    "stationNaptan": "string",
    "status": true,
    "stopLetter": "string",
    "stopType": "string",
    "url": "string"
  }
]
```

<h3 id="gets-all-the-stop-points-of-given-types-with-a-page-number-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="gets-all-the-stop-points-of-given-types-with-a-page-number-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Tfl.Api.Presentation.Entities.StopPoint](#schematfl.api.presentation.entities.stoppoint)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Gets a list of StopPoints corresponding to the given list of stop ids.

<a id="opIdStopPoint_Get"></a>

> Code samples

```bash
curl https://example.com/StopPoint/string \
  -H 'Accept: application/json'
```

`GET /StopPoint/{ids}`

<h3 id="gets-a-list-of-stoppoints-corresponding-to-the-given-list-of-stop-ids-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ids|path|[string]|true|A comma-separated list of stop point ids (station naptan code e.g. 940GZZLUASL). Max. approx. 20 ids.<br>            You can use /StopPoint/Search/{query} endpoint to find a stop point id from a station name.|
|includeCrowdingData|query|boolean|false|Include the crowding data (static). To Filter further use: /StopPoint/{ids}/Crowding/{line}|

> Example responses

> 200 Response

```json
[
  {
    "accessibilitySummary": "string",
    "additionalProperties": [
      {
        "category": "string",
        "key": "string",
        "modified": "1970-01-01T00:00:00Z",
        "sourceSystemKey": "string",
        "value": "string"
      }
    ],
    "children": [
      {
        "additionalProperties": [
          {
            "category": "string",
            "key": "string",
            "modified": "1970-01-01T00:00:00Z",
            "sourceSystemKey": "string",
            "value": "string"
          }
        ],
        "children": [
          {}
        ],
        "childrenUrls": [
          "string"
        ],
        "commonName": "string",
        "distance": 0,
        "id": "string",
        "lat": 0,
        "lon": 0,
        "placeType": "string",
        "url": "string"
      }
    ],
    "childrenUrls": [
      "string"
    ],
    "commonName": "string",
    "distance": 0,
    "fullName": "string",
    "hubNaptanCode": "string",
    "icsCode": "string",
    "id": "string",
    "indicator": "string",
    "individualStopId": "string",
    "lat": 0,
    "lineGroup": [
      {
        "lineIdentifier": [
          "string"
        ],
        "naptanIdReference": "string",
        "stationAtcoCode": "string"
      }
    ],
    "lineModeGroups": [
      {
        "lineIdentifier": [
          "string"
        ],
        "modeName": "string"
      }
    ],
    "lines": [
      {
        "crowding": {
          "passengerFlows": [
            {
              "timeSlice": "string",
              "value": 0
            }
          ],
          "trainLoadings": [
            {
              "direction": "string",
              "line": "string",
              "lineDirection": "string",
              "naptanTo": "string",
              "platformDirection": "string",
              "timeSlice": "string",
              "value": 0
            }
          ]
        },
        "fullName": "string",
        "id": "string",
        "motType": "string",
        "name": "string",
        "network": "string",
        "routeType": "Unknown",
        "status": "Unknown",
        "type": "string",
        "uri": "string"
      }
    ],
    "lon": 0,
    "modes": [
      "string"
    ],
    "naptanId": "string",
    "naptanMode": "string",
    "placeType": "string",
    "platformName": "string",
    "smsCode": "string",
    "stationNaptan": "string",
    "status": true,
    "stopLetter": "string",
    "stopType": "string",
    "url": "string"
  }
]
```

<h3 id="gets-a-list-of-stoppoints-corresponding-to-the-given-list-of-stop-ids-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="gets-a-list-of-stoppoints-corresponding-to-the-given-list-of-stop-ids-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Tfl.Api.Presentation.Entities.StopPoint](#schematfl.api.presentation.entities.stoppoint)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Gets all disruptions for the specified StopPointId, plus disruptions for any child Naptan records it may have.

<a id="opIdStopPoint_Disruption"></a>

> Code samples

```bash
curl https://example.com/StopPoint/string/Disruption \
  -H 'Accept: application/json'
```

`GET /StopPoint/{ids}/Disruption`

<h3 id="gets-all-disruptions-for-the-specified-stoppointid-plus-disruptions-for-any-child-naptan-records-it-may-have-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ids|path|[string]|true|A comma-seperated list of stop point ids. Max. approx. 20 ids.<br>            You can use /StopPoint/Search/{query} endpoint to find a stop point id from a station name.|
|getFamily|query|boolean|false|Specify true to return disruptions for entire family, or false to return disruptions for just this stop point. Defaults to false.|
|includeRouteBlockedStops|query|boolean|false|none|
|flattenResponse|query|boolean|false|Specify true to associate all disruptions with parent stop point. (Only applicable when getFamily is true).|

> Example responses

> 200 Response

```json
[
  {
    "additionalInformation": "string",
    "appearance": "string",
    "atcoCode": "string",
    "commonName": "string",
    "description": "string",
    "fromDate": "1970-01-01T00:00:00Z",
    "mode": "string",
    "stationAtcoCode": "string",
    "toDate": "1970-01-01T00:00:00Z",
    "type": "string"
  }
]
```

<h3 id="gets-all-disruptions-for-the-specified-stoppointid-plus-disruptions-for-any-child-naptan-records-it-may-have-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="gets-all-disruptions-for-the-specified-stoppointid-plus-disruptions-for-any-child-naptan-records-it-may-have-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Tfl.Api.Presentation.Entities.DisruptedPoint](#schematfl.api.presentation.entities.disruptedpoint)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Gets the list of arrival and departure predictions for the given stop point id (overground, Elizabeth line and thameslink only)

<a id="opIdStopPoint_ArrivalDepartures"></a>

> Code samples

```bash
curl 'https://example.com/StopPoint/string/ArrivalDepartures?lineIds=string' \
  -H 'Accept: application/json'
```

`GET /StopPoint/{id}/ArrivalDepartures`

<h3 id="gets-the-list-of-arrival-and-departure-predictions-for-the-given-stop-point-id-overground-elizabeth-line-and-thameslink-only-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|A StopPoint id (station naptan code e.g. 940GZZLUASL, you can use /StopPoint/Search/{query} endpoint to find a stop point id from a station name)|
|lineIds|query|[string]|true|A comma-separated list of line ids e.g. elizabeth, london-overground, thameslink|

> Example responses

> 200 Response

```json
[
  {
    "cause": "string",
    "departureStatus": "OnTime",
    "destinationName": "string",
    "destinationNaptanId": "string",
    "estimatedTimeOfArrival": "1970-01-01T00:00:00Z",
    "estimatedTimeOfDeparture": "1970-01-01T00:00:00Z",
    "minutesAndSecondsToArrival": "string",
    "minutesAndSecondsToDeparture": "string",
    "naptanId": "string",
    "platformName": "string",
    "scheduledTimeOfArrival": "1970-01-01T00:00:00Z",
    "scheduledTimeOfDeparture": "1970-01-01T00:00:00Z",
    "stationName": "string",
    "timing": {
      "countdownServerAdjustment": "string",
      "insert": "1970-01-01T00:00:00Z",
      "read": "1970-01-01T00:00:00Z",
      "received": "1970-01-01T00:00:00Z",
      "sent": "1970-01-01T00:00:00Z",
      "source": "1970-01-01T00:00:00Z"
    }
  }
]
```

<h3 id="gets-the-list-of-arrival-and-departure-predictions-for-the-given-stop-point-id-overground-elizabeth-line-and-thameslink-only-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="gets-the-list-of-arrival-and-departure-predictions-for-the-given-stop-point-id-overground-elizabeth-line-and-thameslink-only-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Tfl.Api.Presentation.Entities.ArrivalDeparture](#schematfl.api.presentation.entities.arrivaldeparture)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Gets the list of arrival predictions for the given stop point id

<a id="opIdStopPoint_Arrivals"></a>

> Code samples

```bash
curl https://example.com/StopPoint/string/Arrivals \
  -H 'Accept: application/json'
```

`GET /StopPoint/{id}/Arrivals`

<h3 id="gets-the-list-of-arrival-predictions-for-the-given-stop-point-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|A StopPoint id (station naptan code e.g. 940GZZLUASL, you can use /StopPoint/Search/{query} endpoint to find a stop point id from a station name)|

> Example responses

> 200 Response

```json
[
  {
    "bearing": "string",
    "currentLocation": "string",
    "destinationName": "string",
    "destinationNaptanId": "string",
    "direction": "string",
    "expectedArrival": "1970-01-01T00:00:00Z",
    "id": "string",
    "lineId": "string",
    "lineName": "string",
    "modeName": "string",
    "naptanId": "string",
    "operationType": 0,
    "platformName": "string",
    "stationName": "string",
    "timeToLive": "1970-01-01T00:00:00Z",
    "timeToStation": 0,
    "timestamp": "1970-01-01T00:00:00Z",
    "timing": {
      "countdownServerAdjustment": "string",
      "insert": "1970-01-01T00:00:00Z",
      "read": "1970-01-01T00:00:00Z",
      "received": "1970-01-01T00:00:00Z",
      "sent": "1970-01-01T00:00:00Z",
      "source": "1970-01-01T00:00:00Z"
    },
    "towards": "string",
    "vehicleId": "string"
  }
]
```

<h3 id="gets-the-list-of-arrival-predictions-for-the-given-stop-point-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="gets-the-list-of-arrival-predictions-for-the-given-stop-point-id-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Tfl.Api.Presentation.Entities.Prediction](#schematfl.api.presentation.entities.prediction)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Gets Stopoints that are reachable from a station/line combination.

<a id="opIdStopPoint_ReachableFrom"></a>

> Code samples

```bash
curl https://example.com/StopPoint/string/CanReachOnLine/string \
  -H 'Accept: application/json'
```

`GET /StopPoint/{id}/CanReachOnLine/{lineId}`

<h3 id="gets-stopoints-that-are-reachable-from-a-stationline-combination-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The id (station naptan code e.g. 940GZZLUASL, you can use /StopPoint/Search/{query} endpoint to find a stop point id from a station name) of the stop point to filter by|
|lineId|path|string|true|Line id of the line to filter by (e.g. victoria)|
|serviceTypes|query|[string]|false|A comma-separated list of service types to filter on. If not specified. Supported values: Regular, Night. Defaulted to 'Regular' if not specified|

#### Enumerated Values

|Parameter|Value|
|---|---|
|serviceTypes|Regular|
|serviceTypes|Night|

> Example responses

> 200 Response

```json
[
  {
    "accessibilitySummary": "string",
    "additionalProperties": [
      {
        "category": "string",
        "key": "string",
        "modified": "1970-01-01T00:00:00Z",
        "sourceSystemKey": "string",
        "value": "string"
      }
    ],
    "children": [
      {
        "additionalProperties": [
          {
            "category": "string",
            "key": "string",
            "modified": "1970-01-01T00:00:00Z",
            "sourceSystemKey": "string",
            "value": "string"
          }
        ],
        "children": [
          {}
        ],
        "childrenUrls": [
          "string"
        ],
        "commonName": "string",
        "distance": 0,
        "id": "string",
        "lat": 0,
        "lon": 0,
        "placeType": "string",
        "url": "string"
      }
    ],
    "childrenUrls": [
      "string"
    ],
    "commonName": "string",
    "distance": 0,
    "fullName": "string",
    "hubNaptanCode": "string",
    "icsCode": "string",
    "id": "string",
    "indicator": "string",
    "individualStopId": "string",
    "lat": 0,
    "lineGroup": [
      {
        "lineIdentifier": [
          "string"
        ],
        "naptanIdReference": "string",
        "stationAtcoCode": "string"
      }
    ],
    "lineModeGroups": [
      {
        "lineIdentifier": [
          "string"
        ],
        "modeName": "string"
      }
    ],
    "lines": [
      {
        "crowding": {
          "passengerFlows": [
            {
              "timeSlice": "string",
              "value": 0
            }
          ],
          "trainLoadings": [
            {
              "direction": "string",
              "line": "string",
              "lineDirection": "string",
              "naptanTo": "string",
              "platformDirection": "string",
              "timeSlice": "string",
              "value": 0
            }
          ]
        },
        "fullName": "string",
        "id": "string",
        "motType": "string",
        "name": "string",
        "network": "string",
        "routeType": "Unknown",
        "status": "Unknown",
        "type": "string",
        "uri": "string"
      }
    ],
    "lon": 0,
    "modes": [
      "string"
    ],
    "naptanId": "string",
    "naptanMode": "string",
    "placeType": "string",
    "platformName": "string",
    "smsCode": "string",
    "stationNaptan": "string",
    "status": true,
    "stopLetter": "string",
    "stopType": "string",
    "url": "string"
  }
]
```

<h3 id="gets-stopoints-that-are-reachable-from-a-stationline-combination-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="gets-stopoints-that-are-reachable-from-a-stationline-combination-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Tfl.Api.Presentation.Entities.StopPoint](#schematfl.api.presentation.entities.stoppoint)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Gets all the Crowding data (static) for the StopPointId, plus crowding data for a given line and optionally a particular direction.

<a id="opIdStopPoint_Crowding"></a>

> Code samples

```bash
curl 'https://example.com/StopPoint/string/Crowding/string?direction=inbound' \
  -H 'Accept: application/json'
```

`GET /StopPoint/{id}/Crowding/{line}`

<h3 id="gets-all-the-crowding-data-static-for-the-stoppointid-plus-crowding-data-for-a-given-line-and-optionally-a-particular-direction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The Naptan id of the stop|
|line|path|string|true|A particular line e.g. victoria, circle, northern etc.|
|direction|query|string|true|The direction of travel. Can be inbound or outbound.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|direction|inbound|
|direction|outbound|
|direction|all|

> Example responses

> 200 Response

```json
[
  {
    "accessibilitySummary": "string",
    "additionalProperties": [
      {
        "category": "string",
        "key": "string",
        "modified": "1970-01-01T00:00:00Z",
        "sourceSystemKey": "string",
        "value": "string"
      }
    ],
    "children": [
      {
        "additionalProperties": [
          {
            "category": "string",
            "key": "string",
            "modified": "1970-01-01T00:00:00Z",
            "sourceSystemKey": "string",
            "value": "string"
          }
        ],
        "children": [
          {}
        ],
        "childrenUrls": [
          "string"
        ],
        "commonName": "string",
        "distance": 0,
        "id": "string",
        "lat": 0,
        "lon": 0,
        "placeType": "string",
        "url": "string"
      }
    ],
    "childrenUrls": [
      "string"
    ],
    "commonName": "string",
    "distance": 0,
    "fullName": "string",
    "hubNaptanCode": "string",
    "icsCode": "string",
    "id": "string",
    "indicator": "string",
    "individualStopId": "string",
    "lat": 0,
    "lineGroup": [
      {
        "lineIdentifier": [
          "string"
        ],
        "naptanIdReference": "string",
        "stationAtcoCode": "string"
      }
    ],
    "lineModeGroups": [
      {
        "lineIdentifier": [
          "string"
        ],
        "modeName": "string"
      }
    ],
    "lines": [
      {
        "crowding": {
          "passengerFlows": [
            {
              "timeSlice": "string",
              "value": 0
            }
          ],
          "trainLoadings": [
            {
              "direction": "string",
              "line": "string",
              "lineDirection": "string",
              "naptanTo": "string",
              "platformDirection": "string",
              "timeSlice": "string",
              "value": 0
            }
          ]
        },
        "fullName": "string",
        "id": "string",
        "motType": "string",
        "name": "string",
        "network": "string",
        "routeType": "Unknown",
        "status": "Unknown",
        "type": "string",
        "uri": "string"
      }
    ],
    "lon": 0,
    "modes": [
      "string"
    ],
    "naptanId": "string",
    "naptanMode": "string",
    "placeType": "string",
    "platformName": "string",
    "smsCode": "string",
    "stationNaptan": "string",
    "status": true,
    "stopLetter": "string",
    "stopType": "string",
    "url": "string"
  }
]
```

<h3 id="gets-all-the-crowding-data-static-for-the-stoppointid-plus-crowding-data-for-a-given-line-and-optionally-a-particular-direction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="gets-all-the-crowding-data-static-for-the-stoppointid-plus-crowding-data-for-a-given-line-and-optionally-a-particular-direction-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Tfl.Api.Presentation.Entities.StopPoint](#schematfl.api.presentation.entities.stoppoint)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Returns the canonical direction, &quot;inbound&quot; or &quot;outbound&quot;, for a given pair of stop point Ids in the direction from -&amp;gt; to.

<a id="opIdStopPoint_Direction"></a>

> Code samples

```bash
curl https://example.com/StopPoint/string/DirectionTo/string \
  -H 'Accept: application/json'
```

`GET /StopPoint/{id}/DirectionTo/{toStopPointId}`

<h3 id="returns-the-canonical-direction-inbound-or-outbound-for-a-given-pair-of-stop-point-ids-in-the-direction-from--gt-to-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Originating stop id (station naptan code e.g. 940GZZLUASL, you can use /StopPoint/Search/{query} endpoint to find a stop point id from a station name)|
|toStopPointId|path|string|true|Destination stop id (station naptan code e.g. 940GZZLUASL, you can use /StopPoint/Search/{query} endpoint to find a stop point id from a station name)|
|lineId|query|string|false|Optional line id filter e.g. victoria|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="returns-the-canonical-direction-inbound-or-outbound-for-a-given-pair-of-stop-point-ids-in-the-direction-from--gt-to-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Returns the route sections for all the lines that service the given stop point ids

<a id="opIdStopPoint_Route"></a>

> Code samples

```bash
curl https://example.com/StopPoint/string/Route \
  -H 'Accept: application/json'
```

`GET /StopPoint/{id}/Route`

<h3 id="returns-the-route-sections-for-all-the-lines-that-service-the-given-stop-point-ids-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|A stop point id (station naptan codes e.g. 940GZZLUASL, you can use /StopPoint/Search/{query} endpoint to find a stop point id from a station name)|
|serviceTypes|query|[string]|false|A comma-separated list of service types to filter on. If not specified. Supported values: Regular, Night. Defaulted to 'Regular' if not specified|

#### Enumerated Values

|Parameter|Value|
|---|---|
|serviceTypes|Regular|
|serviceTypes|Night|

> Example responses

> 200 Response

```json
[
  {
    "destinationName": "string",
    "direction": "string",
    "isActive": true,
    "lineId": "string",
    "lineString": "string",
    "mode": "string",
    "naptanId": "string",
    "routeSectionName": "string",
    "serviceType": "string",
    "validFrom": "1970-01-01T00:00:00Z",
    "validTo": "1970-01-01T00:00:00Z",
    "vehicleDestinationText": "string"
  }
]
```

<h3 id="returns-the-route-sections-for-all-the-lines-that-service-the-given-stop-point-ids-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="returns-the-route-sections-for-all-the-lines-that-service-the-given-stop-point-ids-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Tfl.Api.Presentation.Entities.StopPointRouteSection](#schematfl.api.presentation.entities.stoppointroutesection)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get a list of places corresponding to a given id and place types.

> Code samples

```bash
curl 'https://example.com/StopPoint/string/placeTypes?placeTypes=string' \
  -H 'Accept: application/json'
```

`GET /StopPoint/{id}/placeTypes`

<h3 id="get-a-list-of-places-corresponding-to-a-given-id-and-place-types-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|A naptan id for a stop point (station naptan code e.g. 940GZZLUASL).|
|placeTypes|query|[string]|true|A comcomma-separated value representing the place types.|

> Example responses

> 200 Response

```json
[
  {
    "additionalProperties": [
      {
        "category": "string",
        "key": "string",
        "modified": "1970-01-01T00:00:00Z",
        "sourceSystemKey": "string",
        "value": "string"
      }
    ],
    "children": [
      {}
    ],
    "childrenUrls": [
      "string"
    ],
    "commonName": "string",
    "distance": 0,
    "id": "string",
    "lat": 0,
    "lon": 0,
    "placeType": "string",
    "url": "string"
  }
]
```

<h3 id="get-a-list-of-places-corresponding-to-a-given-id-and-place-types-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-a-list-of-places-corresponding-to-a-given-id-and-place-types-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Tfl.Api.Presentation.Entities.Place](#schematfl.api.presentation.entities.place)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get car parks corresponding to the given stop point id.

<a id="opIdStopPoint_GetCarParksById"></a>

> Code samples

```bash
curl https://example.com/StopPoint/string/CarParks \
  -H 'Accept: application/json'
```

`GET /StopPoint/{stopPointId}/CarParks`

<h3 id="get-car-parks-corresponding-to-the-given-stop-point-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|stopPointId|path|string|true|stopPointId is required to get the car parks.|

> Example responses

> 200 Response

```json
[
  {
    "additionalProperties": [
      {
        "category": "string",
        "key": "string",
        "modified": "1970-01-01T00:00:00Z",
        "sourceSystemKey": "string",
        "value": "string"
      }
    ],
    "children": [
      {}
    ],
    "childrenUrls": [
      "string"
    ],
    "commonName": "string",
    "distance": 0,
    "id": "string",
    "lat": 0,
    "lon": 0,
    "placeType": "string",
    "url": "string"
  }
]
```

<h3 id="get-car-parks-corresponding-to-the-given-stop-point-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-car-parks-corresponding-to-the-given-stop-point-id-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Tfl.Api.Presentation.Entities.Place](#schematfl.api.presentation.entities.place)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Gets a list of taxi ranks corresponding to the given stop point id.

<a id="opIdStopPoint_GetTaxiRanksByIds"></a>

> Code samples

```bash
curl https://example.com/StopPoint/string/TaxiRanks \
  -H 'Accept: application/json'
```

`GET /StopPoint/{stopPointId}/TaxiRanks`

<h3 id="gets-a-list-of-taxi-ranks-corresponding-to-the-given-stop-point-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|stopPointId|path|string|true|stopPointId is required to get the taxi ranks.|

> Example responses

> 200 Response

```json
[
  {
    "additionalProperties": [
      {
        "category": "string",
        "key": "string",
        "modified": "1970-01-01T00:00:00Z",
        "sourceSystemKey": "string",
        "value": "string"
      }
    ],
    "children": [
      {}
    ],
    "childrenUrls": [
      "string"
    ],
    "commonName": "string",
    "distance": 0,
    "id": "string",
    "lat": 0,
    "lon": 0,
    "placeType": "string",
    "url": "string"
  }
]
```

<h3 id="gets-a-list-of-taxi-ranks-corresponding-to-the-given-stop-point-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="gets-a-list-of-taxi-ranks-corresponding-to-the-given-stop-point-id-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Tfl.Api.Presentation.Entities.Place](#schematfl.api.presentation.entities.place)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="transport-for-london-unified-api-traveltime">TravelTime</h1>

## Gets the TravelTime overlay.

<a id="opIdTravelTime_GetCompareOverlay"></a>

> Code samples

```bash
curl 'https://example.com/TravelTimes/compareOverlay/0/mapcenter/0/0/pinlocation/0/0/dimensions/0/0?scenarioTitle=string&timeOfDayId=string&modeId=string&direction=Average&travelTimeInterval=0&compareType=string&compareValue=string' \
  -H 'Accept: application/json'
```

`GET /TravelTimes/compareOverlay/{z}/mapcenter/{mapCenterLat}/{mapCenterLon}/pinlocation/{pinLat}/{pinLon}/dimensions/{width}/{height}`

<h3 id="gets-the-traveltime-overlay-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|z|path|integer(int32)|true|The zoom level.|
|pinLat|path|number(double)|true|The latitude of the pin.|
|pinLon|path|number(double)|true|The longitude of the pin.|
|mapCenterLat|path|number(double)|true|The map center latitude.|
|mapCenterLon|path|number(double)|true|The map center longitude.|
|scenarioTitle|query|string|true|The title of the scenario.|
|timeOfDayId|query|string|true|The id for the time of day (AM/INTER/PM)|
|modeId|query|string|true|The id of the mode.|
|width|path|integer(int32)|true|The width of the requested overlay.|
|height|path|integer(int32)|true|The height of the requested overlay.|
|direction|query|string|true|The direction of travel.|
|travelTimeInterval|query|integer(int32)|true|The total minutes between the travel time bands|
|compareType|query|string|true|none|
|compareValue|query|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|direction|Average|
|direction|From|
|direction|To|

> Example responses

> 200 Response

```json
{}
```

<h3 id="gets-the-traveltime-overlay-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[System.Object](#schemasystem.object)|

<aside class="success">
This operation does not require authentication
</aside>

## Gets the TravelTime overlay.

<a id="opIdTravelTime_GetOverlay"></a>

> Code samples

```bash
curl 'https://example.com/TravelTimes/overlay/0/mapcenter/0/0/pinlocation/0/0/dimensions/0/0?scenarioTitle=string&timeOfDayId=string&modeId=string&direction=Average&travelTimeInterval=0' \
  -H 'Accept: application/json'
```

`GET /TravelTimes/overlay/{z}/mapcenter/{mapCenterLat}/{mapCenterLon}/pinlocation/{pinLat}/{pinLon}/dimensions/{width}/{height}`

<h3 id="gets-the-traveltime-overlay-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|z|path|integer(int32)|true|The zoom level.|
|pinLat|path|number(double)|true|The latitude of the pin.|
|pinLon|path|number(double)|true|The longitude of the pin.|
|mapCenterLat|path|number(double)|true|The map center latitude.|
|mapCenterLon|path|number(double)|true|The map center longitude.|
|scenarioTitle|query|string|true|The title of the scenario.|
|timeOfDayId|query|string|true|The id for the time of day (AM/INTER/PM)|
|modeId|query|string|true|The id of the mode.|
|width|path|integer(int32)|true|The width of the requested overlay.|
|height|path|integer(int32)|true|The height of the requested overlay.|
|direction|query|string|true|The direction of travel.|
|travelTimeInterval|query|integer(int32)|true|The total minutes between the travel time bands|

#### Enumerated Values

|Parameter|Value|
|---|---|
|direction|Average|
|direction|From|
|direction|To|

> Example responses

> 200 Response

```json
{}
```

<h3 id="gets-the-traveltime-overlay-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[System.Object](#schemasystem.object)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="transport-for-london-unified-api-vehicle">Vehicle</h1>

## Gets the predictions for a given list of vehicle Id's.

<a id="opIdVehicle_Get"></a>

> Code samples

```bash
curl https://example.com/Vehicle/string/Arrivals \
  -H 'Accept: application/json'
```

`GET /Vehicle/{ids}/Arrivals`

<h3 id="gets-the-predictions-for-a-given-list-of-vehicle-ids-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ids|path|[string]|true|A comma-separated list of vehicle ids e.g. LX58CFV,LX11AZB,LX58CFE. Max approx. 25 ids.|

> Example responses

> 200 Response

```json
[
  {
    "bearing": "string",
    "currentLocation": "string",
    "destinationName": "string",
    "destinationNaptanId": "string",
    "direction": "string",
    "expectedArrival": "1970-01-01T00:00:00Z",
    "id": "string",
    "lineId": "string",
    "lineName": "string",
    "modeName": "string",
    "naptanId": "string",
    "operationType": 0,
    "platformName": "string",
    "stationName": "string",
    "timeToLive": "1970-01-01T00:00:00Z",
    "timeToStation": 0,
    "timestamp": "1970-01-01T00:00:00Z",
    "timing": {
      "countdownServerAdjustment": "string",
      "insert": "1970-01-01T00:00:00Z",
      "read": "1970-01-01T00:00:00Z",
      "received": "1970-01-01T00:00:00Z",
      "sent": "1970-01-01T00:00:00Z",
      "source": "1970-01-01T00:00:00Z"
    },
    "towards": "string",
    "vehicleId": "string"
  }
]
```

<h3 id="gets-the-predictions-for-a-given-list-of-vehicle-ids-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="gets-the-predictions-for-a-given-list-of-vehicle-ids-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Tfl.Api.Presentation.Entities.Prediction](#schematfl.api.presentation.entities.prediction)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_System.Data.Spatial.DbGeography">System.Data.Spatial.DbGeography</h2>
<!-- backwards compatibility -->
<a id="schemasystem.data.spatial.dbgeography"></a>
<a id="schema_System.Data.Spatial.DbGeography"></a>
<a id="tocSsystem.data.spatial.dbgeography"></a>
<a id="tocssystem.data.spatial.dbgeography"></a>

```json
{
  "geography": {
    "coordinateSystemId": 0,
    "wellKnownBinary": "string",
    "wellKnownText": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|geography|[System.Data.Spatial.DbGeographyWellKnownValue](#schemasystem.data.spatial.dbgeographywellknownvalue)|false|none|none|

<h2 id="tocS_System.Data.Spatial.DbGeographyWellKnownValue">System.Data.Spatial.DbGeographyWellKnownValue</h2>
<!-- backwards compatibility -->
<a id="schemasystem.data.spatial.dbgeographywellknownvalue"></a>
<a id="schema_System.Data.Spatial.DbGeographyWellKnownValue"></a>
<a id="tocSsystem.data.spatial.dbgeographywellknownvalue"></a>
<a id="tocssystem.data.spatial.dbgeographywellknownvalue"></a>

```json
{
  "coordinateSystemId": 0,
  "wellKnownBinary": "string",
  "wellKnownText": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|coordinateSystemId|integer(int32)|false|none|none|
|wellKnownBinary|string(byte)|false|none|none|
|wellKnownText|string|false|none|none|

<h2 id="tocS_System.Object">System.Object</h2>
<!-- backwards compatibility -->
<a id="schemasystem.object"></a>
<a id="schema_System.Object"></a>
<a id="tocSsystem.object"></a>
<a id="tocssystem.object"></a>

```json
{}
```

<h2 id="tocS_Tfl.Api.Common.ApiVersionInfo">Tfl.Api.Common.ApiVersionInfo</h2>
<!-- backwards compatibility -->
<a id="schematfl.api.common.apiversioninfo"></a>
<a id="schema_Tfl.Api.Common.ApiVersionInfo"></a>
<a id="tocStfl.api.common.apiversioninfo"></a>
<a id="tocstfl.api.common.apiversioninfo"></a>

```json
{
  "assemblies": [
    "string"
  ],
  "label": "string",
  "timestamp": "1970-01-01T00:00:00Z",
  "version": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assemblies|[string]|false|none|none|
|label|string|false|none|none|
|timestamp|string(date-time)|false|none|none|
|version|string|false|none|none|

<h2 id="tocS_Tfl.Api.Common.DateRange">Tfl.Api.Common.DateRange</h2>
<!-- backwards compatibility -->
<a id="schematfl.api.common.daterange"></a>
<a id="schema_Tfl.Api.Common.DateRange"></a>
<a id="tocStfl.api.common.daterange"></a>
<a id="tocstfl.api.common.daterange"></a>

```json
{
  "endDate": "1970-01-01T00:00:00Z",
  "startDate": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endDate|string(date-time)|false|none|none|
|startDate|string(date-time)|false|none|none|

<h2 id="tocS_Tfl.Api.Common.DateRangeNullable">Tfl.Api.Common.DateRangeNullable</h2>
<!-- backwards compatibility -->
<a id="schematfl.api.common.daterangenullable"></a>
<a id="schema_Tfl.Api.Common.DateRangeNullable"></a>
<a id="tocStfl.api.common.daterangenullable"></a>
<a id="tocstfl.api.common.daterangenullable"></a>

```json
{
  "endDate": "1970-01-01T00:00:00Z",
  "startDate": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endDate|string(date-time)|false|none|none|
|startDate|string(date-time)|false|none|none|

<h2 id="tocS_Tfl.Api.Common.GeoPoint">Tfl.Api.Common.GeoPoint</h2>
<!-- backwards compatibility -->
<a id="schematfl.api.common.geopoint"></a>
<a id="schema_Tfl.Api.Common.GeoPoint"></a>
<a id="tocStfl.api.common.geopoint"></a>
<a id="tocstfl.api.common.geopoint"></a>

```json
{
  "lat": 0,
  "lon": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lat|number(double)|true|none|none|
|lon|number(double)|true|none|none|

<h2 id="tocS_Tfl.Api.Common.JourneyPlanner.JpElevation">Tfl.Api.Common.JourneyPlanner.JpElevation</h2>
<!-- backwards compatibility -->
<a id="schematfl.api.common.journeyplanner.jpelevation"></a>
<a id="schema_Tfl.Api.Common.JourneyPlanner.JpElevation"></a>
<a id="tocStfl.api.common.journeyplanner.jpelevation"></a>
<a id="tocstfl.api.common.journeyplanner.jpelevation"></a>

```json
{
  "distance": 0,
  "endLat": 0,
  "endLon": 0,
  "gradient": 0,
  "heightFromPreviousPoint": 0,
  "startLat": 0,
  "startLon": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|distance|integer(int32)|false|none|none|
|endLat|number(double)|false|none|none|
|endLon|number(double)|false|none|none|
|gradient|number(double)|false|none|none|
|heightFromPreviousPoint|integer(int32)|false|none|none|
|startLat|number(double)|false|none|none|
|startLon|number(double)|false|none|none|

<h2 id="tocS_Tfl.Api.Common.PlaceGeo">Tfl.Api.Common.PlaceGeo</h2>
<!-- backwards compatibility -->
<a id="schematfl.api.common.placegeo"></a>
<a id="schema_Tfl.Api.Common.PlaceGeo"></a>
<a id="tocStfl.api.common.placegeo"></a>
<a id="tocstfl.api.common.placegeo"></a>

```json
{
  "lat": 0,
  "lon": 0,
  "neLat": 0,
  "neLon": 0,
  "swLat": 0,
  "swLon": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lat|number(double)|false|none|none|
|lon|number(double)|false|none|none|
|neLat|number(double)|false|none|none|
|neLon|number(double)|false|none|none|
|swLat|number(double)|false|none|none|
|swLon|number(double)|false|none|none|

<h2 id="tocS_Tfl.Api.Common.PostcodeInput">Tfl.Api.Common.PostcodeInput</h2>
<!-- backwards compatibility -->
<a id="schematfl.api.common.postcodeinput"></a>
<a id="schema_Tfl.Api.Common.PostcodeInput"></a>
<a id="tocStfl.api.common.postcodeinput"></a>
<a id="tocstfl.api.common.postcodeinput"></a>

```json
{
  "postcode": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|postcode|string|false|none|none|

<h2 id="tocS_Tfl.Api.Presentation.Entities.AccidentStats.AccidentDetail">Tfl.Api.Presentation.Entities.AccidentStats.AccidentDetail</h2>
<!-- backwards compatibility -->
<a id="schematfl.api.presentation.entities.accidentstats.accidentdetail"></a>
<a id="schema_Tfl.Api.Presentation.Entities.AccidentStats.AccidentDetail"></a>
<a id="tocStfl.api.presentation.entities.accidentstats.accidentdetail"></a>
<a id="tocstfl.api.presentation.entities.accidentstats.accidentdetail"></a>

```json
{
  "borough": "string",
  "casualties": [
    {
      "age": 0,
      "ageBand": "string",
      "class": "string",
      "mode": "string",
      "severity": "string"
    }
  ],
  "date": "1970-01-01T00:00:00Z",
  "id": 0,
  "lat": 0,
  "location": "string",
  "lon": 0,
  "severity": "string",
  "vehicles": [
    {
      "type": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|borough|string|false|none|none|
|casualties|[[Tfl.Api.Presentation.Entities.AccidentStats.Casualty](#schematfl.api.presentation.entities.accidentstats.casualty)]|false|none|none|
|date|string(date-time)|false|none|none|
|id|integer(int32)|false|none|none|
|lat|number(double)|false|none|none|
|location|string|false|none|none|
|lon|number(double)|false|none|none|
|severity|string|false|none|none|
|vehicles|[[Tfl.Api.Presentation.Entities.AccidentStats.Vehicle](#schematfl.api.presentation.entities.accidentstats.vehicle)]|false|none|none|

<h2 id="tocS_Tfl.Api.Presentation.Entities.AccidentStats.AccidentStatsOrderedSummary">Tfl.Api.Presentation.Entities.AccidentStats.AccidentStatsOrderedSummary</h2>
<!-- backwards compatibility -->
<a id="schematfl.api.presentation.entities.accidentstats.accidentstatsorderedsummary"></a>
<a id="schema_Tfl.Api.Presentation.Entities.AccidentStats.AccidentStatsOrderedSummary"></a>
<a id="tocStfl.api.presentation.entities.accidentstats.accidentstatsorderedsummary"></a>
<a id="tocstfl.api.presentation.entities.accidentstats.accidentstatsorderedsummary"></a>

```json
{
  "accidents": 0,
  "borough": "string",
  "year": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accidents|integer(int32)|false|none|none|
|borough|string|false|none|none|
|year|integer(int32)|false|none|none|

<h2 id="tocS_Tfl.Api.Presentation.Entities.AccidentStats.Casualty">Tfl.Api.Presentation.Entities.AccidentStats.Casualty</h2>
<!-- backwards compatibility -->
<a id="schematfl.api.presentation.entities.accidentstats.casualty"></a>
<a id="schema_Tfl.Api.Presentation.Entities.AccidentStats.Casualty"></a>
<a id="tocStfl.api.presentation.entities.accidentstats.casualty"></a>
<a id="tocstfl.api.presentation.entities.accidentstats.casualty"></a>

```json
{
  "age": 0,
  "ageBand": "string",
  "class": "string",
  "mode": "string",
  "severity": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|age|integer(int32)|false|none|none|
|ageBand|string|false|none|none|
|class|string|false|none|none|
|mode|string|false|none|none|
|severity|string|false|none|none|

<h2 id="tocS_Tfl.Api.Presentation.Entities.AccidentStats.Vehicle">Tfl.Api.Presentation.Entities.AccidentStats.Vehicle</h2>
<!-- backwards compatibility -->
<a id="schematfl.api.presentation.entities.accidentstats.vehicle"></a>
<a id="schema_Tfl.Api.Presentation.Entities.AccidentStats.Vehicle"></a>
<a id="tocStfl.api.presentation.entities.accidentstats.vehicle"></a>
<a id="tocstfl.api.presentation.entities.accidentstats.vehicle"></a>

```json
{
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|none|

<h2 id="tocS_Tfl.Api.Presentation.Entities.ActiveServiceType">Tfl.Api.Presentation.Entities.ActiveServiceType</h2>
<!-- backwards compatibility -->
<a id="schematfl.api.presentation.entities.activeservicetype"></a>
<a id="schema_Tfl.Api.Presentation.Entities.ActiveServiceType"></a>
<a id="tocStfl.api.presentation.entities.activeservicetype"></a>
<a id="tocstfl.api.presentation.entities.activeservicetype"></a>

```json
{
  "mode": "string",
  "serviceType": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mode|string|false|none|none|
|serviceType|string|false|none|none|

<h2 id="tocS_Tfl.Api.Presentation.Entities.AdditionalProperties">Tfl.Api.Presentation.Entities.AdditionalProperties</h2>
<!-- backwards compatibility -->
<a id="schematfl.api.presentation.entities.additionalproperties"></a>
<a id="schema_Tfl.Api.Presentation.Entities.AdditionalProperties"></a>
<a id="tocStfl.api.presentation.entities.additionalproperties"></a>
<a id="tocstfl.api.presentation.entities.additionalproperties"></a>

```json
{
  "category": "string",
  "key": "string",
  "modified": "1970-01-01T00:00:00Z",
  "sourceSystemKey": "string",
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category|string|false|none|none|
|key|string|false|none|none|
|modified|string(date-time)|false|none|none|
|sourceSystemKey|string|false|none|none|
|value|string|false|none|none|

<h2 id="tocS_Tfl.Api.Presentation.Entities.ArrivalDeparture">Tfl.Api.Presentation.Entities.ArrivalDeparture</h2>
<!-- backwards compatibility -->
<a id="schematfl.api.presentation.entities.arrivaldeparture"></a>
<a id="schema_Tfl.Api.Presentation.Entities.ArrivalDeparture"></a>
<a id="tocStfl.api.presentation.entities.arrivaldeparture"></a>
<a id="tocstfl.api.presentation.entities.arrivaldeparture"></a>

```json
{
  "cause": "string",
  "departureStatus": "OnTime",
  "destinationName": "string",
  "destinationNaptanId": "string",
  "estimatedTimeOfArrival": "1970-01-01T00:00:00Z",
  "estimatedTimeOfDeparture": "1970-01-01T00:00:00Z",
  "minutesAndSecondsToArrival": "string",
  "minutesAndSecondsToDeparture": "string",
  "naptanId": "string",
  "platformName": "string",
  "scheduledTimeOfArrival": "1970-01-01T00:00:00Z",
  "scheduledTimeOfDeparture": "1970-01-01T00:00:00Z",
  "stationName": "string",
  "timing": {
    "countdownServerAdjustment": "string",
    "insert": "1970-01-01T00:00:00Z",
    "read": "1970-01-01T00:00:00Z",
    "received": "1970-01-01T00:00:00Z",
    "sent": "1970-01-01T00:00:00Z",
    "source": "1970-01-01T00:00:00Z"
  }
}
```

DTO to capture the prediction details

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cause|string|false|none|Reason for cancellation or delay|
|departureStatus|string|false|none|Status of departure|
|destinationName|string|false|none|Name of the destination|
|destinationNaptanId|string|false|none|Naptan Identifier for the prediction's destination|
|estimatedTimeOfArrival|string(date-time)|false|none|Estimated time of arrival|
|estimatedTimeOfDeparture|string(date-time)|false|none|Estimated time of arrival|
|minutesAndSecondsToArrival|string|false|none|Estimated time of arrival|
|minutesAndSecondsToDeparture|string|false|none|Estimated time of arrival|
|naptanId|string|false|none|Identifier for the prediction|
|platformName|string|false|none|Platform name (for bus, this is the stop letter)|
|scheduledTimeOfArrival|string(date-time)|false|none|Estimated time of arrival|
|scheduledTimeOfDeparture|string(date-time)|false|none|Estimated time of arrival|
|stationName|string|false|none|Station name|
|timing|[Tfl.Api.Presentation.Entities.PredictionTiming](#schematfl.api.presentation.entities.predictiontiming)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|departureStatus|OnTime|
|departureStatus|Delayed|
|departureStatus|Cancelled|
|departureStatus|NotStoppingAtStation|

<h2 id="tocS_Tfl.Api.Presentation.Entities.ArrivalDepartureWithLine">Tfl.Api.Presentation.Entities.ArrivalDepartureWithLine</h2>
<!-- backwards compatibility -->
<a id="schematfl.api.presentation.entities.arrivaldeparturewithline"></a>
<a id="schema_Tfl.Api.Presentation.Entities.ArrivalDepartureWithLine"></a>
<a id="tocStfl.api.presentation.entities.arrivaldeparturewithline"></a>
<a id="tocstfl.api.presentation.entities.arrivaldeparturewithline"></a>

```json
{
  "cause": "string",
  "departureStatus": "OnTime",
  "destinationName": "string",
  "destinationNaptanId": "string",
  "estimatedTimeOfArrival": "1970-01-01T00:00:00Z",
  "estimatedTimeOfDeparture": "1970-01-01T00:00:00Z",
  "lineId": "string",
  "lineName": "string",
  "minutesAndSecondsToArrival": "string",
  "minutesAndSecondsToDeparture": "string",
  "naptanId": "string",
  "platformName": "string",
  "scheduledTimeOfArrival": "1970-01-01T00:00:00Z",
  "scheduledTimeOfDeparture": "1970-01-01T00:00:00Z",
  "stationName": "string",
  "timing": {
    "countdownServerAdjustment": "string",
    "insert": "1970-01-01T00:00:00Z",
    "read": "1970-01-01T00:00:00Z",
    "received": "1970-01-01T00:00:00Z",
    "sent": "1970-01-01T00:00:00Z",
    "source": "1970-01-01T00:00:00Z"
  }
}
```

DTO to capture the prediction details

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cause|string|false|none|Reason for cancellation or delay|
|departureStatus|string|false|none|Status of departure|
|destinationName|string|false|none|Name of the destination|
|destinationNaptanId|string|false|none|Naptan Identifier for the prediction's destination|
|estimatedTimeOfArrival|string(date-time)|false|none|Estimated time of arrival|
|estimatedTimeOfDeparture|string(date-time)|false|none|Estimated time of arrival|
|lineId|string|false|none|Train operating company name|
|lineName|string|false|none|Train operating company code|
|minutesAndSecondsToArrival|string|false|none|Estimated time of arrival|
|minutesAndSecondsToDeparture|string|false|none|Estimated time of arrival|
|naptanId|string|false|none|Identifier for the prediction|
|platformName|string|false|none|Platform name (for bus, this is the stop letter)|
|scheduledTimeOfArrival|string(date-time)|false|none|Estimated time of arrival|
|scheduledTimeOfDeparture|string(date-time)|false|none|Estimated time of arrival|
|stationName|string|false|none|Station name|
|timing|[Tfl.Api.Presentation.Entities.PredictionTiming](#schematfl.api.presentation.entities.predictiontiming)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|departureStatus|OnTime|
|departureStatus|Delayed|
|departureStatus|Cancelled|
|departureStatus|NotStoppingAtStation|

<h2 id="tocS_Tfl.Api.Presentation.Entities.Bay">Tfl.Api.Presentation.Entities.Bay</h2>
<!-- backwards compatibility -->
<a id="schematfl.api.presentation.entities.bay"></a>
<a id="schema_Tfl.Api.Presentation.Entities.Bay"></a>
<a id="tocStfl.api.presentation.entities.bay"></a>
<a id="tocstfl.api.presentation.entities.bay"></a>

```json
{
  "bayCount": 0,
  "bayType": "string",
  "free": 0,
  "occupied": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bayCount|integer(int32)|false|none|none|
|bayType|string|false|none|none|
|free|integer(int32)|false|none|none|
|occupied|integer(int32)|false|none|none|

<h2 id="tocS_Tfl.Api.Presentation.Entities.BikePointOccupancy">Tfl.Api.Presentation.Entities.BikePointOccupancy</h2>
<!-- backwards compatibility -->
<a id="schematfl.api.presentation.entities.bikepointoccupancy"></a>
<a id="schema_Tfl.Api.Presentation.Entities.BikePointOccupancy"></a>
<a id="tocStfl.api.presentation.entities.bikepointoccupancy"></a>
<a id="tocstfl.api.presentation.entities.bikepointoccupancy"></a>

```json
{
  "bikesCount": 0,
  "eBikesCount": 0,
  "emptyDocks": 0,
  "id": "string",
  "name": "string",
  "standardBikesCount": 0,
  "totalDocks": 0
}
```

Bike point occupancy

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bikesCount|integer(int32)|false|none|Total bike counts|
|eBikesCount|integer(int32)|false|none|Total ebikes count|
|emptyDocks|integer(int32)|false|none|Empty docks|
|id|string|false|none|Id of the bike point such as BikePoints_1|
|name|string|false|none|Name / Common name of the bike point|
|standardBikesCount|integer(int32)|false|none|Total standard bikes count|
|totalDocks|integer(int32)|false|none|Total docks available|

<h2 id="tocS_Tfl.Api.Presentation.Entities.CarParkOccupancy">Tfl.Api.Presentation.Entities.CarParkOccupancy</h2>
<!-- backwards compatibility -->
<a id="schematfl.api.presentation.entities.carparkoccupancy"></a>
<a id="schema_Tfl.Api.Presentation.Entities.CarParkOccupancy"></a>
<a id="tocStfl.api.presentation.entities.carparkoccupancy"></a>
<a id="tocstfl.api.presentation.entities.carparkoccupancy"></a>

```json
{
  "bays": [
    {
      "bayCount": 0,
      "bayType": "string",
      "free": 0,
      "occupied": 0
    }
  ],
  "carParkDetailsUrl": "string",
  "id": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bays|[[Tfl.Api.Presentation.Entities.Bay](#schematfl.api.presentation.entities.bay)]|false|none|none|
|carParkDetailsUrl|string|false|none|none|
|id|string|false|none|none|
|name|string|false|none|none|

<h2 id="tocS_Tfl.Api.Presentation.Entities.ChargeConnectorOccupancy">Tfl.Api.Presentation.Entities.ChargeConnectorOccupancy</h2>
<!-- backwards compatibility -->
<a id="schematfl.api.presentation.entities.chargeconnectoroccupancy"></a>
<a id="schema_Tfl.Api.Presentation.Entities.ChargeConnectorOccupancy"></a>
<a id="tocStfl.api.presentation.entities.chargeconnectoroccupancy"></a>
<a id="tocstfl.api.presentation.entities.chargeconnectoroccupancy"></a>

```json
{
  "id": 0,
  "sourceSystemPlaceId": "string",
  "status": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|sourceSystemPlaceId|string|false|none|none|
|status|string|false|none|none|

<h2 id="tocS_Tfl.Api.Presentation.Entities.Coordinate">Tfl.Api.Presentation.Entities.Coordinate</h2>
<!-- backwards compatibility -->
<a id="schematfl.api.presentation.entities.coordinate"></a>
<a id="schema_Tfl.Api.Presentation.Entities.Coordinate"></a>
<a id="tocStfl.api.presentation.entities.coordinate"></a>
<a id="tocstfl.api.presentation.entities.coordinate"></a>

```json
{
  "easting": 0,
  "latitude": 0,
  "longitude": 0,
  "northing": 0,
  "xCoord": 0,
  "yCoord": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|easting|number(double)|false|none|none|
|latitude|number(double)|false|none|none|
|longitude|number(double)|false|none|none|
|northing|number(double)|false|none|none|
|xCoord|integer(int32)|false|none|none|
|yCoord|integer(int32)|false|none|none|

<h2 id="tocS_Tfl.Api.Presentation.Entities.Crowding">Tfl.Api.Presentation.Entities.Crowding</h2>
<!-- backwards compatibility -->
<a id="schematfl.api.presentation.entities.crowding"></a>
<a id="schema_Tfl.Api.Presentation.Entities.Crowding"></a>
<a id="tocStfl.api.presentation.entities.crowding"></a>
<a id="tocstfl.api.presentation.entities.crowding"></a>

```json
{
  "passengerFlows": [
    {
      "timeSlice": "string",
      "value": 0
    }
  ],
  "trainLoadings": [
    {
      "direction": "string",
      "line": "string",
      "lineDirection": "string",
      "naptanTo": "string",
      "platformDirection": "string",
      "timeSlice": "string",
      "value": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|passengerFlows|[[Tfl.Api.Presentation.Entities.PassengerFlow](#schematfl.api.presentation.entities.passengerflow)]|false|none|Busiest times at a station (static information)|
|trainLoadings|[[Tfl.Api.Presentation.Entities.TrainLoading](#schematfl.api.presentation.entities.trainloading)]|false|none|Train Loading on a scale 1-6, 1 being "Very quiet" and 6 being "Exceptionally busy" (static information)|

<h2 id="tocS_Tfl.Api.Presentation.Entities.CycleSuperhighway">Tfl.Api.Presentation.Entities.CycleSuperhighway</h2>
<!-- backwards compatibility -->
<a id="schematfl.api.presentation.entities.cyclesuperhighway"></a>
<a id="schema_Tfl.Api.Presentation.Entities.CycleSuperhighway"></a>
<a id="tocStfl.api.presentation.entities.cyclesuperhighway"></a>
<a id="tocstfl.api.presentation.entities.cyclesuperhighway"></a>

```json
{
  "geography": {
    "geography": {
      "coordinateSystemId": 0,
      "wellKnownBinary": "string",
      "wellKnownText": "string"
    }
  },
  "id": "string",
  "label": "string",
  "labelShort": "string",
  "modified": "1970-01-01T00:00:00Z",
  "routeType": "Unknown",
  "segmented": true,
  "status": "Unknown"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|geography|[System.Data.Spatial.DbGeography](#schemasystem.data.spatial.dbgeography)|false|none|none|
|id|string|false|none|The Id|
|label|string|false|none|The long label to show on maps when zoomed in|
|labelShort|string|false|none|The short label to show on maps|
|modified|string(date-time)|false|none|When the data was last updated|
|routeType|string|false|none|Type of cycle route e.g CycleSuperhighways, Quietways, MiniHollands etc|
|segmented|boolean|false|none|True if the route is split into segments|
|status|string|false|none|Cycle route status i.e Proposed, Existing etc|

#### Enumerated Values

|Property|Value|
|---|---|
|routeType|Unknown|
|routeType|All|
|routeType|Cycle Superhighways|
|routeType|Quietways|
|routeType|Cycleways|
|routeType|Mini-Hollands|
|routeType|Central London Grid|
|routeType|Streetspace Route|
|status|Unknown|
|status|All|
|status|Open|
|status|In Progress|
|status|Planned|
|status|Planned - Subject to feasibility and consultation.|
|status|Not Open|

<h2 id="tocS_Tfl.Api.Presentation.Entities.DisruptedPoint">Tfl.Api.Presentation.Entities.DisruptedPoint</h2>
<!-- backwards compatibility -->
<a id="schematfl.api.presentation.entities.disruptedpoint"></a>
<a id="schema_Tfl.Api.Presentation.Entities.DisruptedPoint"></a>
<a id="tocStfl.api.presentation.entities.disruptedpoint"></a>
<a id="tocstfl.api.presentation.entities.disruptedpoint"></a>

```json
{
  "additionalInformation": "string",
  "appearance": "string",
  "atcoCode": "string",
  "commonName": "string",
  "description": "string",
  "fromDate": "1970-01-01T00:00:00Z",
  "mode": "string",
  "stationAtcoCode": "string",
  "toDate": "1970-01-01T00:00:00Z",
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalInformation|string|false|none|none|
|appearance|string|false|none|none|
|atcoCode|string|false|none|none|
|commonName|string|false|none|none|
|description|string|false|none|none|
|fromDate|string(date-time)|false|none|none|
|mode|string|false|none|none|
|stationAtcoCode|string|false|none|none|
|toDate|string(date-time)|false|none|none|
|type|string|false|none|none|

<h2 id="tocS_Tfl.Api.Presentation.Entities.DisruptedRoute">Tfl.Api.Presentation.Entities.DisruptedRoute</h2>
<!-- backwards compatibility -->
<a id="schematfl.api.presentation.entities.disruptedroute"></a>
<a id="schema_Tfl.Api.Presentation.Entities.DisruptedRoute"></a>
<a id="tocStfl.api.presentation.entities.disruptedroute"></a>
<a id="tocstfl.api.presentation.entities.disruptedroute"></a>

```json
{
  "destinationName": "string",
  "direction": "string",
  "id": "string",
  "isEntireRouteSection": true,
  "lineId": "string",
  "lineString": "string",
  "name": "string",
  "originationName": "string",
  "routeCode": "string",
  "routeSectionNaptanEntrySequence": [
    {
      "ordinal": 0,
      "stopPoint": {
        "accessibilitySummary": "string",
        "additionalProperties": [
          {
            "category": "string",
            "key": "string",
            "modified": "1970-01-01T00:00:00Z",
            "sourceSystemKey": "string",
            "value": "string"
          }
        ],
        "children": [
          {
            "additionalProperties": [
              {
                "category": "string",
                "key": "string",
                "modified": "1970-01-01T00:00:00Z",
                "sourceSystemKey": "string",
                "value": "string"
              }
            ],
            "children": [
              {}
            ],
            "childrenUrls": [
              "string"
            ],
            "commonName": "string",
            "distance": 0,
            "id": "string",
            "lat": 0,
            "lon": 0,
            "placeType": "string",
            "url": "string"
          }
        ],
        "childrenUrls": [
          "string"
        ],
        "commonName": "string",
        "distance": 0,
        "fullName": "string",
        "hubNaptanCode": "string",
        "icsCode": "string",
        "id": "string",
        "indicator": "string",
        "individualStopId": "string",
        "lat": 0,
        "lineGroup": [
          {
            "lineIdentifier": [
              "string"
            ],
            "naptanIdReference": "string",
            "stationAtcoCode": "string"
          }
        ],
        "lineModeGroups": [
          {
            "lineIdentifier": [
              "string"
            ],
            "modeName": "string"
          }
        ],
        "lines": [
          {
            "crowding": {
              "passengerFlows": [
                {
                  "timeSlice": "string",
                  "value": 0
                }
              ],
              "trainLoadings": [
                {
                  "direction": "string",
                  "line": "string",
                  "lineDirection": "string",
                  "naptanTo": "string",
                  "platformDirection": "string",
                  "timeSlice": "string",
                  "value": 0
                }
              ]
            },
            "fullName": "string",
            "id": "string",
            "motType": "string",
            "name": "string",
            "network": "string",
            "routeType": "Unknown",
            "status": "Unknown",
            "type": "string",
            "uri": "string"
          }
        ],
        "lon": 0,
        "modes": [
          "string"
        ],
        "naptanId": "string",
        "naptanMode": "string",
        "placeType": "string",
        "platformName": "string",
        "smsCode": "string",
        "stationNaptan": "string",
        "status": true,
        "stopLetter": "string",
        "stopType": "string",
        "url": "string"
      }
    }
  ],
  "validFrom": "1970-01-01T00:00:00Z",
  "validTo": "1970-01-01T00:00:00Z",
  "via": {
    "ordinal": 0,
    "stopPoint": {
      "accessibilitySummary": "string",
      "additionalProperties": [
        {
          "category": "string",
          "key": "string",
          "modified": "1970-01-01T00:00:00Z",
          "sourceSystemKey": "string",
          "value": "string"
        }
      ],
      "children": [
        {
          "additionalProperties": [
            {
              "category": "string",
              "key": "string",
              "modified": "1970-01-01T00:00:00Z",
              "sourceSystemKey": "string",
              "value": "string"
            }
          ],
          "children": [
            {}
          ],
          "childrenUrls": [
            "string"
          ],
          "commonName": "string",
          "distance": 0,
          "id": "string",
          "lat": 0,
          "lon": 0,
          "placeType": "string",
          "url": "string"
        }
      ],
      "childrenUrls": [
        "string"
      ],
      "commonName": "string",
      "distance": 0,
      "fullName": "string",
      "hubNaptanCode": "string",
      "icsCode": "string",
      "id": "string",
      "indicator": "string",
      "individualStopId": "string",
      "lat": 0,
      "lineGroup": [
        {
          "lineIdentifier": [
            "string"
          ],
          "naptanIdReference": "string",
          "stationAtcoCode": "string"
        }
      ],
      "lineModeGroups": [
        {
          "lineIdentifier": [
            "string"
          ],
          "modeName": "string"
        }
      ],
      "lines": [
        {
          "crowding": {
            "passengerFlows": [
              {
                "timeSlice": "string",
                "value": 0
              }
            ],
            "trainLoadings": [
              {
                "direction": "string",
                "line": "string",
                "lineDirection": "string",
                "naptanTo": "string",
                "platformDirection": "string",
                "timeSlice": "string",
                "value": 0
              }
            ]
          },
          "fullName": "string",
          "id": "string",
          "motType": "string",
          "name": "string",
          "network": "string",
          "routeType": "Unknown",
          "status": "Unknown",
          "type": "string",
          "uri": "string"
        }
      ],
      "lon": 0,
      "modes": [
        "string"
      ],
      "naptanId": "string",
      "naptanMode": "string",
      "placeType": "string",
      "platformName": "string",
      "smsCode": "string",
      "stationNaptan": "string",
      "status": true,
      "stopLetter": "string",
      "stopType": "string",
      "url": "string"
    }
  }
}
```

keep old RouteSection name so as not to break contract

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|destinationName|string|false|none|The name of the Destination StopPoint|
|direction|string|false|none|Inbound or Outbound|
|id|string|false|none|The Id of the route|
|isEntireRouteSection|boolean|false|none|Whether this represents the entire route section|
|lineId|string|false|none|The Id of the Line|
|lineString|string|false|none|The co-ordinates of the route's path as a geoJSON lineString|
|name|string|false|none|Name such as "72"|
|originationName|string|false|none|The name of the Origin StopPoint|
|routeCode|string|false|none|The route code|
|routeSectionNaptanEntrySequence|[[Tfl.Api.Presentation.Entities.RouteSectionNaptanEntrySequence](#schematfl.api.presentation.entities.routesectionnaptanentrysequence)]|false|none|none|
|validFrom|string(date-time)|false|none|The DateTime that the Service containing this Route is valid from.|
|validTo|string(date-time)|false|none|The DateTime that the Service containing this Route is valid until.|
|via|[Tfl.Api.Presentation.Entities.RouteSectionNaptanEntrySequence](#schematfl.api.presentation.entities.routesectionnaptanentrysequence)|false|none|none|

<h2 id="tocS_Tfl.Api.Presentation.Entities.Disruption">Tfl.Api.Presentation.Entities.Disruption</h2>
<!-- backwards compatibility -->
<a id="schematfl.api.presentation.entities.disruption"></a>
<a id="schema_Tfl.Api.Presentation.Entities.Disruption"></a>
<a id="tocStfl.api.presentation.entities.disruption"></a>
<a id="tocstfl.api.presentation.entities.disruption"></a>

```json
{
  "additionalInfo": "string",
  "affectedRoutes": [
    {
      "destinationName": "string",
      "direction": "string",
      "id": "string",
      "isEntireRouteSection": true,
      "lineId": "string",
      "lineString": "string",
      "name": "string",
      "originationName": "string",
      "routeCode": "string",
      "routeSectionNaptanEntrySequence": [
        {
          "ordinal": 0,
          "stopPoint": {
            "accessibilitySummary": "string",
            "additionalProperties": [
              {
                "category": "string",
                "key": "string",
                "modified": "1970-01-01T00:00:00Z",
                "sourceSystemKey": "string",
                "value": "string"
              }
            ],
            "children": [
              {
                "additionalProperties": [
                  {
                    "category": "string",
                    "key": "string",
                    "modified": "1970-01-01T00:00:00Z",
                    "sourceSystemKey": "string",
                    "value": "string"
                  }
                ],
                "children": [
                  {}
                ],
                "childrenUrls": [
                  "string"
                ],
                "commonName": "string",
                "distance": 0,
                "id": "string",
                "lat": 0,
                "lon": 0,
                "placeType": "string",
                "url": "string"
              }
            ],
            "childrenUrls": [
              "string"
            ],
            "commonName": "string",
            "distance": 0,
            "fullName": "string",
            "hubNaptanCode": "string",
            "icsCode": "string",
            "id": "string",
            "indicator": "string",
            "individualStopId": "string",
            "lat": 0,
            "lineGroup": [
              {
                "lineIdentifier": [
                  "string"
                ],
                "naptanIdReference": "string",
                "stationAtcoCode": "string"
              }
            ],
            "lineModeGroups": [
              {
                "lineIdentifier": [
                  "string"
                ],
                "modeName": "string"
              }
            ],
            "lines": [
              {
                "crowding": {
                  "passengerFlows": [
                    {
                      "timeSlice": "string",
                      "value": 0
                    }
                  ],
                  "trainLoadings": [
                    {
                      "direction": "string",
                      "line": "string",
                      "lineDirection": "string",
                      "naptanTo": "string",
                      "platformDirection": "string",
                      "timeSlice": "string",
                      "value": 0
                    }
                  ]
                },
                "fullName": "string",
                "id": "string",
                "motType": "string",
                "name": "string",
                "network": "string",
                "routeType": "Unknown",
                "status": "Unknown",
                "type": "string",
                "uri": "string"
              }
            ],
            "lon": 0,
            "modes": [
              "string"
            ],
            "naptanId": "string",
            "naptanMode": "string",
            "placeType": "string",
            "platformName": "string",
            "smsCode": "string",
            "stationNaptan": "string",
            "status": true,
            "stopLetter": "string",
            "stopType": "string",
            "url": "string"
          }
        }
      ],
      "validFrom": "1970-01-01T00:00:00Z",
      "validTo": "1970-01-01T00:00:00Z",
      "via": {
        "ordinal": 0,
        "stopPoint": {
          "accessibilitySummary": "string",
          "additionalProperties": [
            {
              "category": "string",
              "key": "string",
              "modified": "1970-01-01T00:00:00Z",
              "sourceSystemKey": "string",
              "value": "string"
            }
          ],
          "children": [
            {
              "additionalProperties": [
                {
                  "category": "string",
                  "key": "string",
                  "modified": "1970-01-01T00:00:00Z",
                  "sourceSystemKey": "string",
                  "value": "string"
                }
              ],
              "children": [
                {}
              ],
              "childrenUrls": [
                "string"
              ],
              "commonName": "string",
              "distance": 0,
              "id": "string",
              "lat": 0,
              "lon": 0,
              "placeType": "string",
              "url": "string"
            }
          ],
          "childrenUrls": [
            "string"
          ],
          "commonName": "string",
          "distance": 0,
          "fullName": "string",
          "hubNaptanCode": "string",
          "icsCode": "string",
          "id": "string",
          "indicator": "string",
          "individualStopId": "string",
          "lat": 0,
          "lineGroup": [
            {
              "lineIdentifier": [
                "string"
              ],
              "naptanIdReference": "string",
              "stationAtcoCode": "string"
            }
          ],
          "lineModeGroups": [
            {
              "lineIdentifier": [
                "string"
              ],
              "modeName": "string"
            }
          ],
          "lines": [
            {
              "crowding": {
                "passengerFlows": [
                  {
                    "timeSlice": "string",
                    "value": 0
                  }
                ],
                "trainLoadings": [
                  {
                    "direction": "string",
                    "line": "string",
                    "lineDirection": "string",
                    "naptanTo": "string",
                    "platformDirection": "string",
                    "timeSlice": "string",
                    "value": 0
                  }
                ]
              },
              "fullName": "string",
              "id": "string",
              "motType": "string",
              "name": "string",
              "network": "string",
              "routeType": "Unknown",
              "status": "Unknown",
              "type": "string",
              "uri": "string"
            }
          ],
          "lon": 0,
          "modes": [
            "string"
          ],
          "naptanId": "string",
          "naptanMode": "string",
          "placeType": "string",
          "platformName": "string",
          "smsCode": "string",
          "stationNaptan": "string",
          "status": true,
          "stopLetter": "string",
          "stopType": "string",
          "url": "string"
        }
      }
    }
  ],
  "affectedStops": [
    {
      "accessibilitySummary": "string",
      "additionalProperties": [
        {
          "category": "string",
          "key": "string",
          "modified": "1970-01-01T00:00:00Z",
          "sourceSystemKey": "string",
          "value": "string"
        }
      ],
      "children": [
        {
          "additionalProperties": [
            {
              "category": "string",
              "key": "string",
              "modified": "1970-01-01T00:00:00Z",
              "sourceSystemKey": "string",
              "value": "string"
            }
          ],
          "children": [
            {}
          ],
          "childrenUrls": [
            "string"
          ],
          "commonName": "string",
          "distance": 0,
          "id": "string",
          "lat": 0,
          "lon": 0,
          "placeType": "string",
          "url": "string"
        }
      ],
      "childrenUrls": [
        "string"
      ],
      "commonName": "string",
      "distance": 0,
      "fullName": "string",
      "hubNaptanCode": "string",
      "icsCode": "string",
      "id": "string",
      "indicator": "string",
      "individualStopId": "string",
      "lat": 0,
      "lineGroup": [
        {
          "lineIdentifier": [
            "string"
          ],
          "naptanIdReference": "string",
          "stationAtcoCode": "string"
        }
      ],
      "lineModeGroups": [
        {
          "lineIdentifier": [
            "string"
          ],
          "modeName": "string"
        }
      ],
      "lines": [
        {
          "crowding": {
            "passengerFlows": [
              {
                "timeSlice": "string",
                "value": 0
              }
            ],
            "trainLoadings": [
              {
                "direction": "string",
                "line": "string",
                "lineDirection": "string",
                "naptanTo": "string",
                "platformDirection": "string",
                "timeSlice": "string",
                "value": 0
              }
            ]
          },
          "fullName": "string",
          "id": "string",
          "motType": "string",
          "name": "string",
          "network": "string",
          "routeType": "Unknown",
          "status": "Unknown",
          "type": "string",
          "uri": "string"
        }
      ],
      "lon": 0,
      "modes": [
        "string"
      ],
      "naptanId": "string",
      "naptanMode": "string",
      "placeType": "string",
      "platformName": "string",
      "smsCode": "string",
      "stationNaptan": "string",
      "status": true,
      "stopLetter": "string",
      "stopType": "string",
      "url": "string"
    }
  ],
  "category": "Undefined",
  "categoryDescription": "string",
  "closureText": "string",
  "created": "1970-01-01T00:00:00Z",
  "description": "string",
  "lastUpdate": "1970-01-01T00:00:00Z",
  "summary": "string",
  "type": "string"
}
```

Represents a disruption to a route within the transport network.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalInfo|string|false|none|Gets or sets the additionaInfo of this disruption.|
|affectedRoutes|[[Tfl.Api.Presentation.Entities.DisruptedRoute](#schematfl.api.presentation.entities.disruptedroute)]|false|none|Gets or sets the routes affected by this disruption|
|affectedStops|[[Tfl.Api.Presentation.Entities.StopPoint](#schematfl.api.presentation.entities.stoppoint)]|false|none|Gets or sets the stops affected by this disruption|
|category|string|false|none|Gets or sets the category of this dispruption.|
|categoryDescription|string|false|none|Gets or sets the description of the category.|
|closureText|string|false|none|Text describing the closure type|
|created|string(date-time)|false|none|Gets or sets the date/time when this disruption was created.|
|description|string|false|none|Gets or sets the description of this disruption.|
|lastUpdate|string(date-time)|false|none|Gets or sets the date/time when this disruption was last updated.|
|summary|string|false|none|Gets or sets the summary of this disruption.|
|type|string|false|none|Gets or sets the disruption type of this dispruption.|

#### Enumerated Values

|Property|Value|
|---|---|
|category|Undefined|
|category|RealTime|
|category|PlannedWork|
|category|Information|
|category|Event|
|category|Crowding|
|category|StatusAlert|

<h2 id="tocS_Tfl.Api.Presentation.Entities.Fares.Fare">Tfl.Api.Presentation.Entities.Fares.Fare</h2>
<!-- backwards compatibility -->
<a id="schematfl.api.presentation.entities.fares.fare"></a>
<a id="schema_Tfl.Api.Presentation.Entities.Fares.Fare"></a>
<a id="tocStfl.api.presentation.entities.fares.fare"></a>
<a id="tocstfl.api.presentation.entities.fares.fare"></a>

```json
{
  "cap": 0,
  "cost": "string",
  "description": "string",
  "id": 0,
  "mode": "string",
  "passengerType": "string",
  "ticketTime": "string",
  "ticketType": "string",
  "validFrom": "1970-01-01T00:00:00Z",
  "validUntil": "1970-01-01T00:00:00Z",
  "zone": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cap|number(double)|false|none|none|
|cost|string|false|none|none|
|description|string|false|none|none|
|id|integer(int32)|false|none|none|
|mode|string|false|none|none|
|passengerType|string|false|none|none|
|ticketTime|string|false|none|none|
|ticketType|string|false|none|none|
|validFrom|string(date-time)|false|none|none|
|validUntil|string(date-time)|false|none|none|
|zone|string|false|none|none|

<h2 id="tocS_Tfl.Api.Presentation.Entities.Fares.FareBounds">Tfl.Api.Presentation.Entities.Fares.FareBounds</h2>
<!-- backwards compatibility -->
<a id="schematfl.api.presentation.entities.fares.farebounds"></a>
<a id="schema_Tfl.Api.Presentation.Entities.Fares.FareBounds"></a>
<a id="tocStfl.api.presentation.entities.fares.farebounds"></a>
<a id="tocstfl.api.presentation.entities.fares.farebounds"></a>

```json
{
  "description": "string",
  "displayName": "string",
  "displayOrder": 0,
  "from": "string",
  "id": 0,
  "isPopularFare": true,
  "isPopularTravelCard": true,
  "isTour": true,
  "messages": [
    {
      "bulletOrder": 0,
      "header": true,
      "linkText": "string",
      "messageText": "string",
      "url": "string"
    }
  ],
  "operator": "string",
  "routeCode": "string",
  "to": "string",
  "via": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|none|
|displayName|string|false|none|none|
|displayOrder|integer(int32)|false|none|none|
|from|string|false|none|none|
|id|integer(int32)|false|none|none|
|isPopularFare|boolean|false|none|none|
|isPopularTravelCard|boolean|false|none|none|
|isTour|boolean|false|none|none|
|messages|[[Tfl.Api.Presentation.Entities.Message](#schematfl.api.presentation.entities.message)]|false|none|none|
|operator|string|false|none|none|
|routeCode|string|false|none|none|
|to|string|false|none|none|
|via|string|false|none|none|

<h2 id="tocS_Tfl.Api.Presentation.Entities.Fares.FareDetails">Tfl.Api.Presentation.Entities.Fares.FareDetails</h2>
<!-- backwards compatibility -->
<a id="schematfl.api.presentation.entities.fares.faredetails"></a>
<a id="schema_Tfl.Api.Presentation.Entities.Fares.FareDetails"></a>
<a id="tocStfl.api.presentation.entities.fares.faredetails"></a>
<a id="tocstfl.api.presentation.entities.fares.faredetails"></a>

```json
{
  "boundsId": 0,
  "contactlessPAYGOnlyFare": true,
  "displayName": "string",
  "displayOrder": 0,
  "endDate": "1970-01-01T00:00:00Z",
  "from": "string",
  "fromStation": "string",
  "isTour": true,
  "messages": [
    {
      "bulletOrder": 0,
      "header": true,
      "linkText": "string",
      "messageText": "string",
      "url": "string"
    }
  ],
  "mode": "string",
  "operator": "string",
  "passengerType": "string",
  "routeCode": "string",
  "routeDescription": "string",
  "specialFare": true,
  "startDate": "1970-01-01T00:00:00Z",
  "throughFare": true,
  "ticketsAvailable": [
    {
      "cost": "string",
      "description": "string",
      "displayOrder": 0,
      "messages": [
        {
          "bulletOrder": 0,
          "header": true,
          "linkText": "string",
          "messageText": "string",
          "url": "string"
        }
      ],
      "mode": "string",
      "passengerType": "string",
      "ticketTime": {
        "description": "string",
        "type": "string"
      },
      "ticketType": {
        "description": "string",
        "type": "string"
      }
    }
  ],
  "to": "string",
  "toStation": "string",
  "validatorInformation": "string",
  "via": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|boundsId|integer(int32)|false|none|none|
|contactlessPAYGOnlyFare|boolean|false|none|none|
|displayName|string|false|none|none|
|displayOrder|integer(int32)|false|none|none|
|endDate|string(date-time)|false|none|none|
|from|string|false|none|none|
|fromStation|string|false|none|none|
|isTour|boolean|false|none|none|
|messages|[[Tfl.Api.Presentation.Entities.Message](#schematfl.api.presentation.entities.message)]|false|none|none|
|mode|string|false|none|none|
|operator|string|false|none|none|
|passengerType|string|false|none|none|
|routeCode|string|false|none|none|
|routeDescription|string|false|none|none|
|specialFare|boolean|false|none|none|
|startDate|string(date-time)|false|none|none|
|throughFare|boolean|false|none|none|
|ticketsAvailable|[[Tfl.Api.Presentation.Entities.Fares.Ticket](#schematfl.api.presentation.entities.fares.ticket)]|false|none|none|
|to|string|false|none|none|
|toStation|string|false|none|none|
|validatorInformation|string|false|none|none|
|via|string|false|none|none|

<h2 id="tocS_Tfl.Api.Presentation.Entities.Fares.FareStation">Tfl.Api.Presentation.Entities.Fares.FareStation</h2>
<!-- backwards compatibility -->
<a id="schematfl.api.presentation.entities.fares.farestation"></a>
<a id="schema_Tfl.Api.Presentation.Entities.Fares.FareStation"></a>
<a id="tocStfl.api.presentation.entities.fares.farestation"></a>
<a id="tocstfl.api.presentation.entities.fares.farestation"></a>

```json
{
  "atcoCode": "string",
  "commonName": "string",
  "fareCategory": "Cash"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|atcoCode|string|false|none|none|
|commonName|string|false|none|none|
|fareCategory|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|fareCategory|Cash|
|fareCategory|Oyster|
|fareCategory|Contactless|
|fareCategory|ContactlessOnly|
|fareCategory|All|

<h2 id="tocS_Tfl.Api.Presentation.Entities.Fares.FaresMode">Tfl.Api.Presentation.Entities.Fares.FaresMode</h2>
<!-- backwards compatibility -->
<a id="schematfl.api.presentation.entities.fares.faresmode"></a>
<a id="schema_Tfl.Api.Presentation.Entities.Fares.FaresMode"></a>
<a id="tocStfl.api.presentation.entities.fares.faresmode"></a>
<a id="tocstfl.api.presentation.entities.fares.faresmode"></a>

```json
{
  "description": "string",
  "id": 0,
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|none|
|id|integer(int32)|false|none|none|
|name|string|false|none|none|

<h2 id="tocS_Tfl.Api.Presentation.Entities.Fares.FaresPeriod">Tfl.Api.Presentation.Entities.Fares.FaresPeriod</h2>
<!-- backwards compatibility -->
<a id="schematfl.api.presentation.entities.fares.faresperiod"></a>
<a id="schema_Tfl.Api.Presentation.Entities.Fares.FaresPeriod"></a>
<a id="tocStfl.api.presentation.entities.fares.faresperiod"></a>
<a id="tocstfl.api.presentation.entities.fares.faresperiod"></a>

```json
{
  "endDate": "1970-01-01T00:00:00Z",
  "id": 0,
  "isFuture": true,
  "startDate": "1970-01-01T00:00:00Z",
  "viewableDate": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endDate|string(date-time)|false|none|none|
|id|integer(int32)|false|none|none|
|isFuture|boolean|false|none|none|
|startDate|string(date-time)|false|none|none|
|viewableDate|string(date-time)|false|none|none|

<h2 id="tocS_Tfl.Api.Presentation.Entities.Fares.FaresSection">Tfl.Api.Presentation.Entities.Fares.FaresSection</h2>
<!-- backwards compatibility -->
<a id="schematfl.api.presentation.entities.fares.faressection"></a>
<a id="schema_Tfl.Api.Presentation.Entities.Fares.FaresSection"></a>
<a id="tocStfl.api.presentation.entities.fares.faressection"></a>
<a id="tocstfl.api.presentation.entities.fares.faressection"></a>

```json
{
  "header": "string",
  "index": 0,
  "journey": {
    "fromStation": {
      "atcoCode": "string",
      "commonName": "string",
      "fareCategory": "Cash"
    },
    "toStation": {
      "atcoCode": "string",
      "commonName": "string",
      "fareCategory": "Cash"
    }
  },
  "messages": [
    {
      "bulletOrder": 0,
      "header": true,
      "linkText": "string",
      "messageText": "string",
      "url": "string"
    }
  ],
  "rows": [
    {
      "boundsId": 0,
      "contactlessPAYGOnlyFare": true,
      "displayName": "string",
      "displayOrder": 0,
      "endDate": "1970-01-01T00:00:00Z",
      "from": "string",
      "fromStation": "string",
      "isTour": true,
      "messages": [
        {
          "bulletOrder": 0,
          "header": true,
          "linkText": "string",
          "messageText": "string",
          "url": "string"
        }
      ],
      "mode": "string",
      "operator": "string",
      "passengerType": "string",
      "routeCode": "string",
      "routeDescription": "string",
      "specialFare": true,
      "startDate": "1970-01-01T00:00:00Z",
      "throughFare": true,
      "ticketsAvailable": [
        {
          "cost": "string",
          "description": "string",
          "displayOrder": 0,
          "messages": [
            {
              "bulletOrder": 0,
              "header": true,
              "linkText": "string",
              "messageText": "string",
              "url": "string"
            }
          ],
          "mode": "string",
          "passengerType": "string",
          "ticketTime": {
            "description": "string",
            "type": "string"
          },
          "ticketType": {
            "description": "string",
            "type": "string"
          }
        }
      ],
      "to": "string",
      "toStation": "string",
      "validatorInformation": "string",
      "via": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|header|string|false|none|none|
|index|integer(int32)|false|none|none|
|journey|[Tfl.Api.Presentation.Entities.Fares.Journey](#schematfl.api.presentation.entities.fares.journey)|false|none|none|
|messages|[[Tfl.Api.Presentation.Entities.Message](#schematfl.api.presentation.entities.message)]|false|none|none|
|rows|[[Tfl.Api.Presentation.Entities.Fares.FareDetails](#schematfl.api.presentation.entities.fares.faredetails)]|false|none|none|

<h2 id="tocS_Tfl.Api.Presentation.Entities.Fares.Journey">Tfl.Api.Presentation.Entities.Fares.Journey</h2>
<!-- backwards compatibility -->
<a id="schematfl.api.presentation.entities.fares.journey"></a>
<a id="schema_Tfl.Api.Presentation.Entities.Fares.Journey"></a>
<a id="tocStfl.api.presentation.entities.fares.journey"></a>
<a id="tocstfl.api.presentation.entities.fares.journey"></a>

```json
{
  "fromStation": {
    "atcoCode": "string",
    "commonName": "string",
    "fareCategory": "Cash"
  },
  "toStation": {
    "atcoCode": "string",
    "commonName": "string",
    "fareCategory": "Cash"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fromStation|[Tfl.Api.Presentation.Entities.Fares.FareStation](#schematfl.api.presentation.entities.fares.farestation)|false|none|none|
|toStation|[Tfl.Api.Presentation.Entities.Fares.FareStation](#schematfl.api.presentation.entities.fares.farestation)|false|none|none|

<h2 id="tocS_Tfl.Api.Presentation.Entities.Fares.PassengerType">Tfl.Api.Presentation.Entities.Fares.PassengerType</h2>
<!-- backwards compatibility -->
<a id="schematfl.api.presentation.entities.fares.passengertype"></a>
<a id="schema_Tfl.Api.Presentation.Entities.Fares.PassengerType"></a>
<a id="tocStfl.api.presentation.entities.fares.passengertype"></a>
<a id="tocstfl.api.presentation.entities.fares.passengertype"></a>

```json
{
  "description": "string",
  "displayName": "string",
  "displayOrder": 0,
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|none|
|displayName|string|false|none|none|
|displayOrder|integer(int32)|false|none|none|
|type|string|false|none|none|

<h2 id="tocS_Tfl.Api.Presentation.Entities.Fares.Recommendation">Tfl.Api.Presentation.Entities.Fares.Recommendation</h2>
<!-- backwards compatibility -->
<a id="schematfl.api.presentation.entities.fares.recommendation"></a>
<a id="schema_Tfl.Api.Presentation.Entities.Fares.Recommendation"></a>
<a id="tocStfl.api.presentation.entities.fares.recommendation"></a>
<a id="tocstfl.api.presentation.entities.fares.recommendation"></a>

```json
{
  "cost": "string",
  "discountCard": "string",
  "fareType": "string",
  "gettingYourTicket": [
    {
      "bulletOrder": 0,
      "header": true,
      "linkText": "string",
      "messageText": "string",
      "url": "string"
    }
  ],
  "id": 0,
  "keyFeatures": [
    {
      "bulletOrder": 0,
      "header": true,
      "linkText": "string",
      "messageText": "string",
      "url": "string"
    }
  ],
  "notes": [
    {
      "bulletOrder": 0,
      "header": true,
      "linkText": "string",
      "messageText": "string",
      "url": "string"
    }
  ],
  "priceComparison": "string",
  "priceDescription": "string",
  "product": "string",
  "productType": "string",
  "rank": 0,
  "recommendedTopUp": "string",
  "rule": 0,
  "singleFare": 0,
  "ticketTime": "string",
  "ticketType": "string",
  "zones": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cost|string|false|none|none|
|discountCard|string|false|none|none|
|fareType|string|false|none|none|
|gettingYourTicket|[[Tfl.Api.Presentation.Entities.Message](#schematfl.api.presentation.entities.message)]|false|none|none|
|id|integer(int32)|false|none|none|
|keyFeatures|[[Tfl.Api.Presentation.Entities.Message](#schematfl.api.presentation.entities.message)]|false|none|none|
|notes|[[Tfl.Api.Presentation.Entities.Message](#schematfl.api.presentation.entities.message)]|false|none|none|
|priceComparison|string|false|none|none|
|priceDescription|string|false|none|none|
|product|string|false|none|none|
|productType|string|false|none|none|
|rank|integer(int32)|false|none|none|
|recommendedTopUp|string|false|none|none|
|rule|integer(int32)|false|none|none|
|singleFare|number(double)|false|none|none|
|ticketTime|string|false|none|none|
|ticketType|string|false|none|none|
|zones|string|false|none|none|

<h2 id="tocS_Tfl.Api.Presentation.Entities.Fares.RecommendationResponse">Tfl.Api.Presentation.Entities.Fares.RecommendationResponse</h2>
<!-- backwards compatibility -->
<a id="schematfl.api.presentation.entities.fares.recommendationresponse"></a>
<a id="schema_Tfl.Api.Presentation.Entities.Fares.RecommendationResponse"></a>
<a id="tocStfl.api.presentation.entities.fares.recommendationresponse"></a>
<a id="tocstfl.api.presentation.entities.fares.recommendationresponse"></a>

```json
{
  "recommendations": [
    {
      "cost": "string",
      "discountCard": "string",
      "fareType": "string",
      "gettingYourTicket": [
        {
          "bulletOrder": 0,
          "header": true,
          "linkText": "string",
          "messageText": "string",
          "url": "string"
        }
      ],
      "id": 0,
      "keyFeatures": [
        {
          "bulletOrder": 0,
          "header": true,
          "linkText": "string",
          "messageText": "string",
          "url": "string"
        }
      ],
      "notes": [
        {
          "bulletOrder": 0,
          "header": true,
          "linkText": "string",
          "messageText": "string",
          "url": "string"
        }
      ],
      "priceComparison": "string",
      "priceDescription": "string",
      "product": "string",
      "productType": "string",
      "rank": 0,
      "recommendedTopUp": "string",
      "rule": 0,
      "singleFare": 0,
      "ticketTime": "string",
      "ticketType": "string",
      "zones": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|recommendations|[[Tfl.Api.Presentation.Entities.Fares.Recommendation](#schematfl.api.presentation.entities.fares.recommendation)]|false|none|none|

<h2 id="tocS_Tfl.Api.Presentation.Entities.Fares.Ticket">Tfl.Api.Presentation.Entities.Fares.Ticket</h2>
<!-- backwards compatibility -->
<a id="schematfl.api.presentation.entities.fares.ticket"></a>
<a id="schema_Tfl.Api.Presentation.Entities.Fares.Ticket"></a>
<a id="tocStfl.api.presentation.entities.fares.ticket"></a>
<a id="tocstfl.api.presentation.entities.fares.ticket"></a>

```json
{
  "cost": "string",
  "description": "string",
  "displayOrder": 0,
  "messages": [
    {
      "bulletOrder": 0,
      "header": true,
      "linkText": "string",
      "messageText": "string",
      "url": "string"
    }
  ],
  "mode": "string",
  "passengerType": "string",
  "ticketTime": {
    "description": "string",
    "type": "string"
  },
  "ticketType": {
    "description": "string",
    "type": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cost|string|false|none|none|
|description|string|false|none|none|
|displayOrder|integer(int32)|false|none|none|
|messages|[[Tfl.Api.Presentation.Entities.Message](#schematfl.api.presentation.entities.message)]|false|none|none|
|mode|string|false|none|none|
|passengerType|string|false|none|none|
|ticketTime|[Tfl.Api.Presentation.Entities.Fares.TicketTime](#schematfl.api.presentation.entities.fares.tickettime)|false|none|none|
|ticketType|[Tfl.Api.Presentation.Entities.Fares.TicketType](#schematfl.api.presentation.entities.fares.tickettype)|false|none|none|

<h2 id="tocS_Tfl.Api.Presentation.Entities.Fares.TicketTime">Tfl.Api.Presentation.Entities.Fares.TicketTime</h2>
<!-- backwards compatibility -->
<a id="schematfl.api.presentation.entities.fares.tickettime"></a>
<a id="schema_Tfl.Api.Presentation.Entities.Fares.TicketTime"></a>
<a id="tocStfl.api.presentation.entities.fares.tickettime"></a>
<a id="tocstfl.api.presentation.entities.fares.tickettime"></a>

```json
{
  "description": "string",
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|none|
|type|string|false|none|none|

<h2 id="tocS_Tfl.Api.Presentation.Entities.Fares.TicketType">Tfl.Api.Presentation.Entities.Fares.TicketType</h2>
<!-- backwards compatibility -->
<a id="schematfl.api.presentation.entities.fares.tickettype"></a>
<a id="schema_Tfl.Api.Presentation.Entities.Fares.TicketType"></a>
<a id="tocStfl.api.presentation.entities.fares.tickettype"></a>
<a id="tocstfl.api.presentation.entities.fares.tickettype"></a>

```json
{
  "description": "string",
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|none|
|type|string|false|none|none|

<h2 id="tocS_Tfl.Api.Presentation.Entities.GeoCodeSearchMatch">Tfl.Api.Presentation.Entities.GeoCodeSearchMatch</h2>
<!-- backwards compatibility -->
<a id="schematfl.api.presentation.entities.geocodesearchmatch"></a>
<a id="schema_Tfl.Api.Presentation.Entities.GeoCodeSearchMatch"></a>
<a id="tocStfl.api.presentation.entities.geocodesearchmatch"></a>
<a id="tocstfl.api.presentation.entities.geocodesearchmatch"></a>

```json
{
  "address": "string",
  "id": "string",
  "lat": 0,
  "lon": 0,
  "name": "string",
  "types": [
    "string"
  ],
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|string|false|none|A string describing the formatted address of the place. Adds additional context to the place's Name.|
|id|string|false|none|none|
|lat|number(double)|false|none|none|
|lon|number(double)|false|none|none|
|name|string|false|none|none|
|types|[string]|false|none|The type of the place e.g. "street_address"|
|url|string|false|none|none|

<h2 id="tocS_Tfl.Api.Presentation.Entities.Identifier">Tfl.Api.Presentation.Entities.Identifier</h2>
<!-- backwards compatibility -->
<a id="schematfl.api.presentation.entities.identifier"></a>
<a id="schema_Tfl.Api.Presentation.Entities.Identifier"></a>
<a id="tocStfl.api.presentation.entities.identifier"></a>
<a id="tocstfl.api.presentation.entities.identifier"></a>

```json
{
  "crowding": {
    "passengerFlows": [
      {
        "timeSlice": "string",
        "value": 0
      }
    ],
    "trainLoadings": [
      {
        "direction": "string",
        "line": "string",
        "lineDirection": "string",
        "naptanTo": "string",
        "platformDirection": "string",
        "timeSlice": "string",
        "value": 0
      }
    ]
  },
  "fullName": "string",
  "id": "string",
  "motType": "string",
  "name": "string",
  "network": "string",
  "routeType": "Unknown",
  "status": "Unknown",
  "type": "string",
  "uri": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|crowding|[Tfl.Api.Presentation.Entities.Crowding](#schematfl.api.presentation.entities.crowding)|false|none|none|
|fullName|string|false|none|none|
|id|string|false|none|none|
|motType|string|false|none|none|
|name|string|false|none|none|
|network|string|false|none|none|
|routeType|string|false|none|none|
|status|string|false|none|none|
|type|string|false|none|none|
|uri|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|routeType|Unknown|
|routeType|All|
|routeType|Cycle Superhighways|
|routeType|Quietways|
|routeType|Cycleways|
|routeType|Mini-Hollands|
|routeType|Central London Grid|
|routeType|Streetspace Route|
|status|Unknown|
|status|All|
|status|Open|
|status|In Progress|
|status|Planned|
|status|Planned - Subject to feasibility and consultation.|
|status|Not Open|

<h2 id="tocS_Tfl.Api.Presentation.Entities.Instruction">Tfl.Api.Presentation.Entities.Instruction</h2>
<!-- backwards compatibility -->
<a id="schematfl.api.presentation.entities.instruction"></a>
<a id="schema_Tfl.Api.Presentation.Entities.Instruction"></a>
<a id="tocStfl.api.presentation.entities.instruction"></a>
<a id="tocstfl.api.presentation.entities.instruction"></a>

```json
{
  "detailed": "string",
  "steps": [
    {
      "cumulativeDistance": 0,
      "cumulativeTravelTime": 0,
      "description": "string",
      "descriptionHeading": "string",
      "distance": 0,
      "latitude": 0,
      "longitude": 0,
      "pathAttribute": {
        "name": "string",
        "value": "string"
      },
      "skyDirection": 0,
      "skyDirectionDescription": "North",
      "streetName": "string",
      "trackType": "CycleSuperHighway",
      "turnDirection": "string"
    }
  ],
  "summary": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detailed|string|false|none|none|
|steps|[[Tfl.Api.Presentation.Entities.InstructionStep](#schematfl.api.presentation.entities.instructionstep)]|false|none|none|
|summary|string|false|none|none|

<h2 id="tocS_Tfl.Api.Presentation.Entities.InstructionStep">Tfl.Api.Presentation.Entities.InstructionStep</h2>
<!-- backwards compatibility -->
<a id="schematfl.api.presentation.entities.instructionstep"></a>
<a id="schema_Tfl.Api.Presentation.Entities.InstructionStep"></a>
<a id="tocStfl.api.presentation.entities.instructionstep"></a>
<a id="tocstfl.api.presentation.entities.instructionstep"></a>

```json
{
  "cumulativeDistance": 0,
  "cumulativeTravelTime": 0,
  "description": "string",
  "descriptionHeading": "string",
  "distance": 0,
  "latitude": 0,
  "longitude": 0,
  "pathAttribute": {
    "name": "string",
    "value": "string"
  },
  "skyDirection": 0,
  "skyDirectionDescription": "North",
  "streetName": "string",
  "trackType": "CycleSuperHighway",
  "turnDirection": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cumulativeDistance|integer(int32)|false|none|none|
|cumulativeTravelTime|integer(int32)|false|none|none|
|description|string|false|none|none|
|descriptionHeading|string|false|none|none|
|distance|integer(int32)|false|none|none|
|latitude|number(double)|false|none|none|
|longitude|number(double)|false|none|none|
|pathAttribute|[Tfl.Api.Presentation.Entities.PathAttribute](#schematfl.api.presentation.entities.pathattribute)|false|none|none|
|skyDirection|integer(int32)|false|none|none|
|skyDirectionDescription|string|false|none|none|
|streetName|string|false|none|none|
|trackType|string|false|none|none|
|turnDirection|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|skyDirectionDescription|North|
|skyDirectionDescription|NorthEast|
|skyDirectionDescription|East|
|skyDirectionDescription|SouthEast|
|skyDirectionDescription|South|
|skyDirectionDescription|SouthWest|
|skyDirectionDescription|West|
|skyDirectionDescription|NorthWest|
|trackType|CycleSuperHighway|
|trackType|CanalTowpath|
|trackType|QuietRoad|
|trackType|ProvisionForCyclists|
|trackType|BusyRoads|
|trackType|None|
|trackType|PushBike|
|trackType|Quietway|

<h2 id="tocS_Tfl.Api.Presentation.Entities.Interval">Tfl.Api.Presentation.Entities.Interval</h2>
<!-- backwards compatibility -->
<a id="schematfl.api.presentation.entities.interval"></a>
<a id="schema_Tfl.Api.Presentation.Entities.Interval"></a>
<a id="tocStfl.api.presentation.entities.interval"></a>
<a id="tocstfl.api.presentation.entities.interval"></a>

```json
{
  "stopId": "string",
  "timeToArrival": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|stopId|string|false|none|none|
|timeToArrival|number(double)|false|none|none|

<h2 id="tocS_Tfl.Api.Presentation.Entities.JourneyPlanner.Fare">Tfl.Api.Presentation.Entities.JourneyPlanner.Fare</h2>
<!-- backwards compatibility -->
<a id="schematfl.api.presentation.entities.journeyplanner.fare"></a>
<a id="schema_Tfl.Api.Presentation.Entities.JourneyPlanner.Fare"></a>
<a id="tocStfl.api.presentation.entities.journeyplanner.fare"></a>
<a id="tocstfl.api.presentation.entities.journeyplanner.fare"></a>

```json
{
  "chargeLevel": "string",
  "chargeProfileName": "string",
  "cost": 0,
  "highZone": 0,
  "isHopperFare": true,
  "lowZone": 0,
  "offPeak": 0,
  "peak": 0,
  "taps": [
    {
      "atcoCode": "string",
      "tapDetails": {
        "busRouteId": "string",
        "hostDeviceType": "string",
        "modeType": "string",
        "nationalLocationCode": 0,
        "tapTimestamp": "1970-01-01T00:00:00Z",
        "validationType": "string"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|chargeLevel|string|false|none|none|
|chargeProfileName|string|false|none|none|
|cost|integer(int32)|false|none|none|
|highZone|integer(int32)|false|none|none|
|isHopperFare|boolean|false|none|none|
|lowZone|integer(int32)|false|none|none|
|offPeak|integer(int32)|false|none|none|
|peak|integer(int32)|false|none|none|
|taps|[[Tfl.Api.Presentation.Entities.JourneyPlanner.FareTap](#schematfl.api.presentation.entities.journeyplanner.faretap)]|false|none|none|

<h2 id="tocS_Tfl.Api.Presentation.Entities.JourneyPlanner.FareCaveat">Tfl.Api.Presentation.Entities.JourneyPlanner.FareCaveat</h2>
<!-- backwards compatibility -->
<a id="schematfl.api.presentation.entities.journeyplanner.farecaveat"></a>
<a id="schema_Tfl.Api.Presentation.Entities.JourneyPlanner.FareCaveat"></a>
<a id="tocStfl.api.presentation.entities.journeyplanner.farecaveat"></a>
<a id="tocstfl.api.presentation.entities.journeyplanner.farecaveat"></a>

```json
{
  "text": "string",
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|text|string|false|none|none|
|type|string|false|none|none|

<h2 id="tocS_Tfl.Api.Presentation.Entities.JourneyPlanner.FareTap">Tfl.Api.Presentation.Entities.JourneyPlanner.FareTap</h2>
<!-- backwards compatibility -->
<a id="schematfl.api.presentation.entities.journeyplanner.faretap"></a>
<a id="schema_Tfl.Api.Presentation.Entities.JourneyPlanner.FareTap"></a>
<a id="tocStfl.api.presentation.entities.journeyplanner.faretap"></a>
<a id="tocstfl.api.presentation.entities.journeyplanner.faretap"></a>

```json
{
  "atcoCode": "string",
  "tapDetails": {
    "busRouteId": "string",
    "hostDeviceType": "string",
    "modeType": "string",
    "nationalLocationCode": 0,
    "tapTimestamp": "1970-01-01T00:00:00Z",
    "validationType": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|atcoCode|string|false|none|none|
|tapDetails|[Tfl.Api.Presentation.Entities.JourneyPlanner.FareTapDetails](#schematfl.api.presentation.entities.journeyplanner.faretapdetails)|false|none|none|

<h2 id="tocS_Tfl.Api.Presentation.Entities.JourneyPlanner.FareTapDetails">Tfl.Api.Presentation.Entities.JourneyPlanner.FareTapDetails</h2>
<!-- backwards compatibility -->
<a id="schematfl.api.presentation.entities.journeyplanner.faretapdetails"></a>
<a id="schema_Tfl.Api.Presentation.Entities.JourneyPlanner.FareTapDetails"></a>
<a id="tocStfl.api.presentation.entities.journeyplanner.faretapdetails"></a>
<a id="tocstfl.api.presentation.entities.journeyplanner.faretapdetails"></a>

```json
{
  "busRouteId": "string",
  "hostDeviceType": "string",
  "modeType": "string",
  "nationalLocationCode": 0,
  "tapTimestamp": "1970-01-01T00:00:00Z",
  "validationType": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|busRouteId|string|false|none|none|
|hostDeviceType|string|false|none|none|
|modeType|string|false|none|none|
|nationalLocationCode|integer(int32)|false|none|none|
|tapTimestamp|string(date-time)|false|none|none|
|validationType|string|false|none|none|

<h2 id="tocS_Tfl.Api.Presentation.Entities.JourneyPlanner.ItineraryResult">Tfl.Api.Presentation.Entities.JourneyPlanner.ItineraryResult</h2>
<!-- backwards compatibility -->
<a id="schematfl.api.presentation.entities.journeyplanner.itineraryresult"></a>
<a id="schema_Tfl.Api.Presentation.Entities.JourneyPlanner.ItineraryResult"></a>
<a id="tocStfl.api.presentation.entities.journeyplanner.itineraryresult"></a>
<a id="tocstfl.api.presentation.entities.journeyplanner.itineraryresult"></a>

```json
{
  "cycleHireDockingStationData": {
    "destinationId": "string",
    "destinationNumberOfBikes": 0,
    "destinationNumberOfEmptySlots": 0,
    "originId": "string",
    "originNumberOfBikes": 0,
    "originNumberOfEmptySlots": 0
  },
  "journeyVector": {
    "from": "string",
    "to": "string",
    "uri": "string",
    "via": "string"
  },
  "journeys": [
    {
      "arrivalDateTime": "1970-01-01T00:00:00Z",
      "duration": 0,
      "fare": {
        "caveats": [
          {
            "text": "string",
            "type": "string"
          }
        ],
        "fares": [
          {
            "chargeLevel": "string",
            "chargeProfileName": "string",
            "cost": 0,
            "highZone": 0,
            "isHopperFare": true,
            "lowZone": 0,
            "offPeak": 0,
            "peak": 0,
            "taps": [
              {
                "atcoCode": "string",
                "tapDetails": {
                  "busRouteId": "string",
                  "hostDeviceType": "string",
                  "modeType": "string",
                  "nationalLocationCode": 0,
                  "tapTimestamp": "1970-01-01T00:00:00Z",
                  "validationType": "string"
                }
              }
            ]
          }
        ],
        "totalCost": 0
      },
      "legs": [
        {
          "arrivalPoint": {
            "lat": 0,
            "lon": 0
          },
          "arrivalTime": "1970-01-01T00:00:00Z",
          "departurePoint": {
            "lat": 0,
            "lon": 0
          },
          "departureTime": "1970-01-01T00:00:00Z",
          "disruptions": [
            {
              "additionalInfo": "string",
              "affectedRoutes": [
                {
                  "destinationName": "string",
                  "direction": "string",
                  "id": "string",
                  "isEntireRouteSection": true,
                  "lineId": "string",
                  "lineString": "string",
                  "name": "string",
                  "originationName": "string",
                  "routeCode": "string",
                  "routeSectionNaptanEntrySequence": [
                    {
                      "ordinal": 0,
                      "stopPoint": {
                        "accessibilitySummary": "string",
                        "additionalProperties": [
                          {
                            "category": "string",
                            "key": "string",
                            "modified": "1970-01-01T00:00:00Z",
                            "sourceSystemKey": "string",
                            "value": "string"
                          }
                        ],
                        "children": [
                          {
                            "additionalProperties": [
                              {
                                "category": "string",
                                "key": "string",
                                "modified": "1970-01-01T00:00:00Z",
                                "sourceSystemKey": "string",
                                "value": "string"
                              }
                            ],
                            "children": [
                              {}
                            ],
                            "childrenUrls": [
                              "string"
                            ],
                            "commonName": "string",
                            "distance": 0,
                            "id": "string",
                            "lat": 0,
                            "lon": 0,
                            "placeType": "string",
                            "url": "string"
                          }
                        ],
                        "childrenUrls": [
                          "string"
                        ],
                        "commonName": "string",
                        "distance": 0,
                        "fullName": "string",
                        "hubNaptanCode": "string",
                        "icsCode": "string",
                        "id": "string",
                        "indicator": "string",
                        "individualStopId": "string",
                        "lat": 0,
                        "lineGroup": [
                          {
                            "lineIdentifier": [
                              "string"
                            ],
                            "naptanIdReference": "string",
                            "stationAtcoCode": "string"
                          }
                        ],
                        "lineModeGroups": [
                          {
                            "lineIdentifier": [
                              "string"
                            ],
                            "modeName": "string"
                          }
                        ],
                        "lines": [
                          {
                            "crowding": {
                              "passengerFlows": [
                                {
                                  "timeSlice": "string",
                                  "value": 0
                                }
                              ],
                              "trainLoadings": [
                                {
                                  "direction": "string",
                                  "line": "string",
                                  "lineDirection": "string",
                                  "naptanTo": "string",
                                  "platformDirection": "string",
                                  "timeSlice": "string",
                                  "value": 0
                                }
                              ]
                            },
                            "fullName": "string",
                            "id": "string",
                            "motType": "string",
                            "name": "string",
                            "network": "string",
                            "routeType": "Unknown",
                            "status": "Unknown",
                            "type": "string",
                            "uri": "string"
                          }
                        ],
                        "lon": 0,
                        "modes": [
                          "string"
                        ],
                        "naptanId": "string",
                        "naptanMode": "string",
                        "placeType": "string",
                        "platformName": "string",
                        "smsCode": "string",
                        "stationNaptan": "string",
                        "status": true,
                        "stopLetter": "string",
                        "stopType": "string",
                        "url": "string"
                      }
                    }
                  ],
                  "validFrom": "1970-01-01T00:00:00Z",
                  "validTo": "1970-01-01T00:00:00Z",
                  "via": {
                    "ordinal": 0,
                    "stopPoint": {
                      "accessibilitySummary": "string",
                      "additionalProperties": [
                        {
                          "category": "string",
                          "key": "string",
                          "modified": "1970-01-01T00:00:00Z",
                          "sourceSystemKey": "string",
                          "value": "string"
                        }
                      ],
                      "children": [
                        {
                          "additionalProperties": [
                            {
                              "category": "string",
                              "key": "string",
                              "modified": "1970-01-01T00:00:00Z",
                              "sourceSystemKey": "string",
                              "value": "string"
                            }
                          ],
                          "children": [
                            {}
                          ],
                          "childrenUrls": [
                            "string"
                          ],
                          "commonName": "string",
                          "distance": 0,
                          "id": "string",
                          "lat": 0,
                          "lon": 0,
                          "placeType": "string",
                          "url": "string"
                        }
                      ],
                      "childrenUrls": [
                        "string"
                      ],
                      "commonName": "string",
                      "distance": 0,
                      "fullName": "string",
                      "hubNaptanCode": "string",
                      "icsCode": "string",
                      "id": "string",
                      "indicator": "string",
                      "individualStopId": "string",
                      "lat": 0,
                      "lineGroup": [
                        {
                          "lineIdentifier": [
                            "string"
                          ],
                          "naptanIdReference": "string",
                          "stationAtcoCode": "string"
                        }
                      ],
                      "lineModeGroups": [
                        {
                          "lineIdentifier": [
                            "string"
                          ],
                          "modeName": "string"
                        }
                      ],
                      "lines": [
                        {
                          "crowding": {
                            "passengerFlows": [
                              {
                                "timeSlice": "string",
                                "value": 0
                              }
                            ],
                            "trainLoadings": [
                              {
                                "direction": "string",
                                "line": "string",
                                "lineDirection": "string",
                                "naptanTo": "string",
                                "platformDirection": "string",
                                "timeSlice": "string",
                                "value": 0
                              }
                            ]
                          },
                          "fullName": "string",
                          "id": "string",
                          "motType": "string",
                          "name": "string",
                          "network": "string",
                          "routeType": "Unknown",
                          "status": "Unknown",
                          "type": "string",
                          "uri": "string"
                        }
                      ],
                      "lon": 0,
                      "modes": [
                        "string"
                      ],
                      "naptanId": "string",
                      "naptanMode": "string",
                      "placeType": "string",
                      "platformName": "string",
                      "smsCode": "string",
                      "stationNaptan": "string",
                      "status": true,
                      "stopLetter": "string",
                      "stopType": "string",
                      "url": "string"
                    }
                  }
                }
              ],
              "affectedStops": [
                {
                  "accessibilitySummary": "string",
                  "additionalProperties": [
                    {
                      "category": "string",
                      "key": "string",
                      "modified": "1970-01-01T00:00:00Z",
                      "sourceSystemKey": "string",
                      "value": "string"
                    }
                  ],
                  "children": [
                    {
                      "additionalProperties": [
                        {
                          "category": "string",
                          "key": "string",
                          "modified": "1970-01-01T00:00:00Z",
                          "sourceSystemKey": "string",
                          "value": "string"
                        }
                      ],
                      "children": [
                        {}
                      ],
                      "childrenUrls": [
                        "string"
                      ],
                      "commonName": "string",
                      "distance": 0,
                      "id": "string",
                      "lat": 0,
                      "lon": 0,
                      "placeType": "string",
                      "url": "string"
                    }
                  ],
                  "childrenUrls": [
                    "string"
                  ],
                  "commonName": "string",
                  "distance": 0,
                  "fullName": "string",
                  "hubNaptanCode": "string",
                  "icsCode": "string",
                  "id": "string",
                  "indicator": "string",
                  "individualStopId": "string",
                  "lat": 0,
                  "lineGroup": [
                    {
                      "lineIdentifier": [
                        "string"
                      ],
                      "naptanIdReference": "string",
                      "stationAtcoCode": "string"
                    }
                  ],
                  "lineModeGroups": [
                    {
                      "lineIdentifier": [
                        "string"
                      ],
                      "modeName": "string"
                    }
                  ],
                  "lines": [
                    {
                      "crowding": {
                        "passengerFlows": [
                          {
                            "timeSlice": "string",
                            "value": 0
                          }
                        ],
                        "trainLoadings": [
                          {
                            "direction": "string",
                            "line": "string",
                            "lineDirection": "string",
                            "naptanTo": "string",
                            "platformDirection": "string",
                            "timeSlice": "string",
                            "value": 0
                          }
                        ]
                      },
                      "fullName": "string",
                      "id": "string",
                      "motType": "string",
                      "name": "string",
                      "network": "string",
                      "routeType": "Unknown",
                      "status": "Unknown",
                      "type": "string",
                      "uri": "string"
                    }
                  ],
                  "lon": 0,
                  "modes": [
                    "string"
                  ],
                  "naptanId": "string",
                  "naptanMode": "string",
                  "placeType": "string",
                  "platformName": "string",
                  "smsCode": "string",
                  "stationNaptan": "string",
                  "status": true,
                  "stopLetter": "string",
                  "stopType": "string",
                  "url": "string"
                }
              ],
              "category": "Undefined",
              "categoryDescription": "string",
              "closureText": "string",
              "created": "1970-01-01T00:00:00Z",
              "description": "string",
              "lastUpdate": "1970-01-01T00:00:00Z",
              "summary": "string",
              "type": "string"
            }
          ],
          "distance": 0,
          "duration": 0,
          "hasFixedLocations": true,
          "instruction": {
            "detailed": "string",
            "steps": [
              {
                "cumulativeDistance": 0,
                "cumulativeTravelTime": 0,
                "description": "string",
                "descriptionHeading": "string",
                "distance": 0,
                "latitude": 0,
                "longitude": 0,
                "pathAttribute": {
                  "name": "string",
                  "value": "string"
                },
                "skyDirection": 0,
                "skyDirectionDescription": "North",
                "streetName": "string",
                "trackType": "CycleSuperHighway",
                "turnDirection": "string"
              }
            ],
            "summary": "string"
          },
          "interChangeDuration": "string",
          "interChangePosition": "string",
          "isDisrupted": true,
          "mode": {
            "crowding": {
              "passengerFlows": [
                {
                  "timeSlice": "string",
                  "value": 0
                }
              ],
              "trainLoadings": [
                {
                  "direction": "string",
                  "line": "string",
                  "lineDirection": "string",
                  "naptanTo": "string",
                  "platformDirection": "string",
                  "timeSlice": "string",
                  "value": 0
                }
              ]
            },
            "fullName": "string",
            "id": "string",
            "motType": "string",
            "name": "string",
            "network": "string",
            "routeType": "Unknown",
            "status": "Unknown",
            "type": "string",
            "uri": "string"
          },
          "obstacles": [
            {
              "incline": "string",
              "position": "string",
              "stopId": 0,
              "type": "string"
            }
          ],
          "path": {
            "elevation": [
              {
                "distance": 0,
                "endLat": 0,
                "endLon": 0,
                "gradient": 0,
                "heightFromPreviousPoint": 0,
                "startLat": 0,
                "startLon": 0
              }
            ],
            "lineString": "string",
            "stopPoints": [
              {
                "crowding": {
                  "passengerFlows": [
                    {
                      "timeSlice": "string",
                      "value": 0
                    }
                  ],
                  "trainLoadings": [
                    {
                      "direction": "string",
                      "line": "string",
                      "lineDirection": "string",
                      "naptanTo": "string",
                      "platformDirection": "string",
                      "timeSlice": "string",
                      "value": 0
                    }
                  ]
                },
                "fullName": "string",
                "id": "string",
                "motType": "string",
                "name": "string",
                "network": "string",
                "routeType": "Unknown",
                "status": "Unknown",
                "type": "string",
                "uri": "string"
              }
            ]
          },
          "plannedWorks": [
            {
              "createdDateTime": "1970-01-01T00:00:00Z",
              "description": "string",
              "id": "string",
              "lastUpdateDateTime": "1970-01-01T00:00:00Z"
            }
          ],
          "routeOptions": [
            {
              "direction": "string",
              "directions": [
                "string"
              ],
              "id": "string",
              "lineIdentifier": {
                "crowding": {
                  "passengerFlows": [
                    {
                      "timeSlice": "string",
                      "value": 0
                    }
                  ],
                  "trainLoadings": [
                    {
                      "direction": "string",
                      "line": "string",
                      "lineDirection": "string",
                      "naptanTo": "string",
                      "platformDirection": "string",
                      "timeSlice": "string",
                      "value": 0
                    }
                  ]
                },
                "fullName": "string",
                "id": "string",
                "motType": "string",
                "name": "string",
                "network": "string",
                "routeType": "Unknown",
                "status": "Unknown",
                "type": "string",
                "uri": "string"
              },
              "name": "string"
            }
          ],
          "scheduledArrivalTime": "1970-01-01T00:00:00Z",
          "scheduledDepartureTime": "1970-01-01T00:00:00Z",
          "speed": "string"
        }
      ],
      "startDateTime": "1970-01-01T00:00:00Z"
    }
  ],
  "lines": [
    {
      "created": "1970-01-01T00:00:00Z",
      "crowding": {
        "passengerFlows": [
          {
            "timeSlice": "string",
            "value": 0
          }
        ],
        "trainLoadings": [
          {
            "direction": "string",
            "line": "string",
            "lineDirection": "string",
            "naptanTo": "string",
            "platformDirection": "string",
            "timeSlice": "string",
            "value": 0
          }
        ]
      },
      "disruptions": [
        {
          "additionalInfo": "string",
          "affectedRoutes": [
            {
              "destinationName": "string",
              "direction": "string",
              "id": "string",
              "isEntireRouteSection": true,
              "lineId": "string",
              "lineString": "string",
              "name": "string",
              "originationName": "string",
              "routeCode": "string",
              "routeSectionNaptanEntrySequence": [
                {
                  "ordinal": 0,
                  "stopPoint": {
                    "accessibilitySummary": "string",
                    "additionalProperties": [
                      {
                        "category": "string",
                        "key": "string",
                        "modified": "1970-01-01T00:00:00Z",
                        "sourceSystemKey": "string",
                        "value": "string"
                      }
                    ],
                    "children": [
                      {
                        "additionalProperties": [
                          {
                            "category": "string",
                            "key": "string",
                            "modified": "1970-01-01T00:00:00Z",
                            "sourceSystemKey": "string",
                            "value": "string"
                          }
                        ],
                        "children": [
                          {}
                        ],
                        "childrenUrls": [
                          "string"
                        ],
                        "commonName": "string",
                        "distance": 0,
                        "id": "string",
                        "lat": 0,
                        "lon": 0,
                        "placeType": "string",
                        "url": "string"
                      }
                    ],
                    "childrenUrls": [
                      "string"
                    ],
                    "commonName": "string",
                    "distance": 0,
                    "fullName": "string",
                    "hubNaptanCode": "string",
                    "icsCode": "string",
                    "id": "string",
                    "indicator": "string",
                    "individualStopId": "string",
                    "lat": 0,
                    "lineGroup": [
                      {
                        "lineIdentifier": [
                          "string"
                        ],
                        "naptanIdReference": "string",
                        "stationAtcoCode": "string"
                      }
                    ],
                    "lineModeGroups": [
                      {
                        "lineIdentifier": [
                          "string"
                        ],
                        "modeName": "string"
                      }
                    ],
                    "lines": [
                      {
                        "crowding": {
                          "passengerFlows": [
                            {
                              "timeSlice": "string",
                              "value": 0
                            }
                          ],
                          "trainLoadings": [
                            {
                              "direction": "string",
                              "line": "string",
                              "lineDirection": "string",
                              "naptanTo": "string",
                              "platformDirection": "string",
                              "timeSlice": "string",
                              "value": 0
                            }
                          ]
                        },
                        "fullName": "string",
                        "id": "string",
                        "motType": "string",
                        "name": "string",
                        "network": "string",
                        "routeType": "Unknown",
                        "status": "Unknown",
                        "type": "string",
                        "uri": "string"
                      }
                    ],
                    "lon": 0,
                    "modes": [
                      "string"
                    ],
                    "naptanId": "string",
                    "naptanMode": "string",
                    "placeType": "string",
                    "platformName": "string",
                    "smsCode": "string",
                    "stationNaptan": "string",
                    "status": true,
                    "stopLetter": "string",
                    "stopType": "string",
                    "url": "string"
                  }
                }
              ],
              "validFrom": "1970-01-01T00:00:00Z",
              "validTo": "1970-01-01T00:00:00Z",
              "via": {
                "ordinal": 0,
                "stopPoint": {
                  "accessibilitySummary": "string",
                  "additionalProperties": [
                    {
                      "category": "string",
                      "key": "string",
                      "modified": "1970-01-01T00:00:00Z",
                      "sourceSystemKey": "string",
                      "value": "string"
                    }
                  ],
                  "children": [
                    {
                      "additionalProperties": [
                        {
                          "category": "string",
                          "key": "string",
                          "modified": "1970-01-01T00:00:00Z",
                          "sourceSystemKey": "string",
                          "value": "string"
                        }
                      ],
                      "children": [
                        {}
                      ],
                      "childrenUrls": [
                        "string"
                      ],
                      "commonName": "string",
                      "distance": 0,
                      "id": "string",
                      "lat": 0,
                      "lon": 0,
                      "placeType": "string",
                      "url": "string"
                    }
                  ],
                  "childrenUrls": [
                    "string"
                  ],
                  "commonName": "string",
                  "distance": 0,
                  "fullName": "string",
                  "hubNaptanCode": "string",
                  "icsCode": "string",
                  "id": "string",
                  "indicator": "string",
                  "individualStopId": "string",
                  "lat": 0,
                  "lineGroup": [
                    {
                      "lineIdentifier": [
                        "string"
                      ],
                      "naptanIdReference": "string",
                      "stationAtcoCode": "string"
                    }
                  ],
                  "lineModeGroups": [
                    {
                      "lineIdentifier": [
                        "string"
                      ],
                      "modeName": "string"
                    }
                  ],
                  "lines": [
                    {
                      "crowding": {
                        "passengerFlows": [
                          {
                            "timeSlice": "string",
                            "value": 0
                          }
                        ],
                        "trainLoadings": [
                          {
                            "direction": "string",
                            "line": "string",
                            "lineDirection": "string",
                            "naptanTo": "string",
                            "platformDirection": "string",
                            "timeSlice": "string",
                            "value": 0
                          }
                        ]
                      },
                      "fullName": "string",
                      "id": "string",
                      "motType": "string",
                      "name": "string",
                      "network": "string",
                      "routeType": "Unknown",
                      "status": "Unknown",
                      "type": "string",
                      "uri": "string"
                    }
                  ],
                  "lon": 0,
                  "modes": [
                    "string"
                  ],
                  "naptanId": "string",
                  "naptanMode": "string",
                  "placeType": "string",
                  "platformName": "string",
                  "smsCode": "string",
                  "stationNaptan": "string",
                  "status": true,
                  "stopLetter": "string",
                  "stopType": "string",
                  "url": "string"
                }
              }
            }
          ],
          "affectedStops": [
            {
              "accessibilitySummary": "string",
              "additionalProperties": [
                {
                  "category": "string",
                  "key": "string",
                  "modified": "1970-01-01T00:00:00Z",
                  "sourceSystemKey": "string",
                  "value": "string"
                }
              ],
              "children": [
                {
                  "additionalProperties": [
                    {
                      "category": "string",
                      "key": "string",
                      "modified": "1970-01-01T00:00:00Z",
                      "sourceSystemKey": "string",
                      "value": "string"
                    }
                  ],
                  "children": [
                    {}
                  ],
                  "childrenUrls": [
                    "string"
                  ],
                  "commonName": "string",
                  "distance": 0,
                  "id": "string",
                  "lat": 0,
                  "lon": 0,
                  "placeType": "string",
                  "url": "string"
                }
              ],
              "childrenUrls": [
                "string"
              ],
              "commonName": "string",
              "distance": 0,
              "fullName": "string",
              "hubNaptanCode": "string",
              "icsCode": "string",
              "id": "string",
              "indicator": "string",
              "individualStopId": "string",
              "lat": 0,
              "lineGroup": [
                {
                  "lineIdentifier": [
                    "string"
                  ],
                  "naptanIdReference": "string",
                  "stationAtcoCode": "string"
                }
              ],
              "lineModeGroups": [
                {
                  "lineIdentifier": [
                    "string"
                  ],
                  "modeName": "string"
                }
              ],
              "lines": [
                {
                  "crowding": {
                    "passengerFlows": [
                      {
                        "timeSlice": "string",
                        "value": 0
                      }
                    ],
                    "trainLoadings": [
                      {
                        "direction": "string",
                        "line": "string",
                        "lineDirection": "string",
                        "naptanTo": "string",
                        "platformDirection": "string",
                        "timeSlice": "string",
                        "value": 0
                      }
                    ]
                  },
                  "fullName": "string",
                  "id": "string",
                  "motType": "string",
                  "name": "string",
                  "network": "string",
                  "routeType": "Unknown",
                  "status": "Unknown",
                  "type": "string",
                  "uri": "string"
                }
              ],
              "lon": 0,
              "modes": [
                "string"
              ],
              "naptanId": "string",
              "naptanMode": "string",
              "placeType": "string",
              "platformName": "string",
              "smsCode": "string",
              "stationNaptan": "string",
              "status": true,
              "stopLetter": "string",
              "stopType": "string",
              "url": "string"
            }
          ],
          "category": "Undefined",
          "categoryDescription": "string",
          "closureText": "string",
          "created": "1970-01-01T00:00:00Z",
          "description": "string",
          "lastUpdate": "1970-01-01T00:00:00Z",
          "summary": "string",
          "type": "string"
        }
      ],
      "id": "string",
      "lineStatuses": [
        {
          "created": "1970-01-01T00:00:00Z",
          "disruption": {
            "additionalInfo": "string",
            "affectedRoutes": [
              {
                "destinationName": "string",
                "direction": "string",
                "id": "string",
                "isEntireRouteSection": true,
                "lineId": "string",
                "lineString": "string",
                "name": "string",
                "originationName": "string",
                "routeCode": "string",
                "routeSectionNaptanEntrySequence": [
                  {
                    "ordinal": 0,
                    "stopPoint": {
                      "accessibilitySummary": "string",
                      "additionalProperties": [
                        {
                          "category": "string",
                          "key": "string",
                          "modified": "1970-01-01T00:00:00Z",
                          "sourceSystemKey": "string",
                          "value": "string"
                        }
                      ],
                      "children": [
                        {
                          "additionalProperties": [
                            {
                              "category": "string",
                              "key": "string",
                              "modified": "1970-01-01T00:00:00Z",
                              "sourceSystemKey": "string",
                              "value": "string"
                            }
                          ],
                          "children": [
                            {}
                          ],
                          "childrenUrls": [
                            "string"
                          ],
                          "commonName": "string",
                          "distance": 0,
                          "id": "string",
                          "lat": 0,
                          "lon": 0,
                          "placeType": "string",
                          "url": "string"
                        }
                      ],
                      "childrenUrls": [
                        "string"
                      ],
                      "commonName": "string",
                      "distance": 0,
                      "fullName": "string",
                      "hubNaptanCode": "string",
                      "icsCode": "string",
                      "id": "string",
                      "indicator": "string",
                      "individualStopId": "string",
                      "lat": 0,
                      "lineGroup": [
                        {
                          "lineIdentifier": [
                            "string"
                          ],
                          "naptanIdReference": "string",
                          "stationAtcoCode": "string"
                        }
                      ],
                      "lineModeGroups": [
                        {
                          "lineIdentifier": [
                            "string"
                          ],
                          "modeName": "string"
                        }
                      ],
                      "lines": [
                        {
                          "crowding": {
                            "passengerFlows": [
                              {
                                "timeSlice": "string",
                                "value": 0
                              }
                            ],
                            "trainLoadings": [
                              {
                                "direction": "string",
                                "line": "string",
                                "lineDirection": "string",
                                "naptanTo": "string",
                                "platformDirection": "string",
                                "timeSlice": "string",
                                "value": 0
                              }
                            ]
                          },
                          "fullName": "string",
                          "id": "string",
                          "motType": "string",
                          "name": "string",
                          "network": "string",
                          "routeType": "Unknown",
                          "status": "Unknown",
                          "type": "string",
                          "uri": "string"
                        }
                      ],
                      "lon": 0,
                      "modes": [
                        "string"
                      ],
                      "naptanId": "string",
                      "naptanMode": "string",
                      "placeType": "string",
                      "platformName": "string",
                      "smsCode": "string",
                      "stationNaptan": "string",
                      "status": true,
                      "stopLetter": "string",
                      "stopType": "string",
                      "url": "string"
                    }
                  }
                ],
                "validFrom": "1970-01-01T00:00:00Z",
                "validTo": "1970-01-01T00:00:00Z",
                "via": {
                  "ordinal": 0,
                  "stopPoint": {
                    "accessibilitySummary": "string",
                    "additionalProperties": [
                      {
                        "category": "string",
                        "key": "string",
                        "modified": "1970-01-01T00:00:00Z",
                        "sourceSystemKey": "string",
                        "value": "string"
                      }
                    ],
                    "children": [
                      {
                        "additionalProperties": [
                          {
                            "category": "string",
                            "key": "string",
                            "modified": "1970-01-01T00:00:00Z",
                            "sourceSystemKey": "string",
                            "value": "string"
                          }
                        ],
                        "children": [
                          {}
                        ],
                        "childrenUrls": [
                          "string"
                        ],
                        "commonName": "string",
                        "distance": 0,
                        "id": "string",
                        "lat": 0,
                        "lon": 0,
                        "placeType": "string",
                        "url": "string"
                      }
                    ],
                    "childrenUrls": [
                      "string"
                    ],
                    "commonName": "string",
                    "distance": 0,
                    "fullName": "string",
                    "hubNaptanCode": "string",
                    "icsCode": "string",
                    "id": "string",
                    "indicator": "string",
                    "individualStopId": "string",
                    "lat": 0,
                    "lineGroup": [
                      {
                        "lineIdentifier": [
                          "string"
                        ],
                        "naptanIdReference": "string",
                        "stationAtcoCode": "string"
                      }
                    ],
                    "lineModeGroups": [
                      {
                        "lineIdentifier": [
                          "string"
                        ],
                        "modeName": "string"
                      }
                    ],
                    "lines": [
                      {
                        "crowding": {
                          "passengerFlows": [
                            {
                              "timeSlice": "string",
                              "value": 0
                            }
                          ],
                          "trainLoadings": [
                            {
                              "direction": "string",
                              "line": "string",
                              "lineDirection": "string",
                              "naptanTo": "string",
                              "platformDirection": "string",
                              "timeSlice": "string",
                              "value": 0
                            }
                          ]
                        },
                        "fullName": "string",
                        "id": "string",
                        "motType": "string",
                        "name": "string",
                        "network": "string",
                        "routeType": "Unknown",
                        "status": "Unknown",
                        "type": "string",
                        "uri": "string"
                      }
                    ],
                    "lon": 0,
                    "modes": [
                      "string"
                    ],
                    "naptanId": "string",
                    "naptanMode": "string",
                    "placeType": "string",
                    "platformName": "string",
                    "smsCode": "string",
                    "stationNaptan": "string",
                    "status": true,
                    "stopLetter": "string",
                    "stopType": "string",
                    "url": "string"
                  }
                }
              }
            ],
            "affectedStops": [
              {
                "accessibilitySummary": "string",
                "additionalProperties": [
                  {
                    "category": "string",
                    "key": "string",
                    "modified": "1970-01-01T00:00:00Z",
                    "sourceSystemKey": "string",
                    "value": "string"
                  }
                ],
                "children": [
                  {
                    "additionalProperties": [
                      {
                        "category": "string",
                        "key": "string",
                        "modified": "1970-01-01T00:00:00Z",
                        "sourceSystemKey": "string",
                        "value": "string"
                      }
                    ],
                    "children": [
                      {}
                    ],
                    "childrenUrls": [
                      "string"
                    ],
                    "commonName": "string",
                    "distance": 0,
                    "id": "string",
                    "lat": 0,
                    "lon": 0,
                    "placeType": "string",
                    "url": "string"
                  }
                ],
                "childrenUrls": [
                  "string"
                ],
                "commonName": "string",
                "distance": 0,
                "fullName": "string",
                "hubNaptanCode": "string",
                "icsCode": "string",
                "id": "string",
                "indicator": "string",
                "individualStopId": "string",
                "lat": 0,
                "lineGroup": [
                  {
                    "lineIdentifier": [
                      "string"
                    ],
                    "naptanIdReference": "string",
                    "stationAtcoCode": "string"
                  }
                ],
                "lineModeGroups": [
                  {
                    "lineIdentifier": [
                      "string"
                    ],
                    "modeName": "string"
                  }
                ],
                "lines": [
                  {
                    "crowding": {
                      "passengerFlows": [
                        {
                          "timeSlice": "string",
                          "value": 0
                        }
                      ],
                      "trainLoadings": [
                        {
                          "direction": "string",
                          "line": "string",
                          "lineDirection": "string",
                          "naptanTo": "string",
                          "platformDirection": "string",
                          "timeSlice": "string",
                          "value": 0
                        }
                      ]
                    },
                    "fullName": "string",
                    "id": "string",
                    "motType": "string",
                    "name": "string",
                    "network": "string",
                    "routeType": "Unknown",
                    "status": "Unknown",
                    "type": "string",
                    "uri": "string"
                  }
                ],
                "lon": 0,
                "modes": [
                  "string"
                ],
                "naptanId": "string",
                "naptanMode": "string",
                "placeType": "string",
                "platformName": "string",
                "smsCode": "string",
                "stationNaptan": "string",
                "status": true,
                "stopLetter": "string",
                "stopType": "string",
                "url": "string"
              }
            ],
            "category": "Undefined",
            "categoryDescription": "string",
            "closureText": "string",
            "created": "1970-01-01T00:00:00Z",
            "description": "string",
            "lastUpdate": "1970-01-01T00:00:00Z",
            "summary": "string",
            "type": "string"
          },
          "id": 0,
          "lineId": "string",
          "modified": "1970-01-01T00:00:00Z",
          "reason": "string",
          "statusSeverity": 0,
          "statusSeverityDescription": "string",
          "validityPeriods": [
            {
              "fromDate": "1970-01-01T00:00:00Z",
              "isNow": true,
              "toDate": "1970-01-01T00:00:00Z"
            }
          ]
        }
      ],
      "modeName": "string",
      "modified": "1970-01-01T00:00:00Z",
      "name": "string",
      "routeSections": [
        {
          "destination": "string",
          "destinationName": "string",
          "direction": "string",
          "name": "string",
          "originationName": "string",
          "originator": "string",
          "routeCode": "string",
          "serviceType": "string",
          "validFrom": "1970-01-01T00:00:00Z",
          "validTo": "1970-01-01T00:00:00Z"
        }
      ],
      "serviceTypes": [
        {
          "name": "string",
          "uri": "string"
        }
      ]
    }
  ],
  "recommendedMaxAgeMinutes": 0,
  "searchCriteria": {
    "dateTime": "1970-01-01T00:00:00Z",
    "dateTimeType": "Arriving",
    "timeAdjustments": {
      "earlier": {
        "date": "string",
        "time": "string",
        "timeIs": "string",
        "uri": "string"
      },
      "earliest": {
        "date": "string",
        "time": "string",
        "timeIs": "string",
        "uri": "string"
      },
      "later": {
        "date": "string",
        "time": "string",
        "timeIs": "string",
        "uri": "string"
      },
      "latest": {
        "date": "string",
        "time": "string",
        "timeIs": "string",
        "uri": "string"
      }
    }
  },
  "stopMessages": [
    "string"
  ]
}
```

A DTO representing a list of possible journeys.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cycleHireDockingStationData|[Tfl.Api.Presentation.Entities.JourneyPlanner.JourneyPlannerCycleHireDockingStationData](#schematfl.api.presentation.entities.journeyplanner.journeyplannercyclehiredockingstationdata)|false|none|none|
|journeyVector|[Tfl.Api.Presentation.Entities.JourneyPlanner.JourneyVector](#schematfl.api.presentation.entities.journeyplanner.journeyvector)|false|none|none|
|journeys|[[Tfl.Api.Presentation.Entities.JourneyPlanner.Journey](#schematfl.api.presentation.entities.journeyplanner.journey)]|false|none|none|
|lines|[[Tfl.Api.Presentation.Entities.Line](#schematfl.api.presentation.entities.line)]|false|none|none|
|recommendedMaxAgeMinutes|integer(int32)|false|none|none|
|searchCriteria|[Tfl.Api.Presentation.Entities.JourneyPlanner.SearchCriteria](#schematfl.api.presentation.entities.journeyplanner.searchcriteria)|false|none|none|
|stopMessages|[string]|false|none|none|

<h2 id="tocS_Tfl.Api.Presentation.Entities.JourneyPlanner.Journey">Tfl.Api.Presentation.Entities.JourneyPlanner.Journey</h2>
<!-- backwards compatibility -->
<a id="schematfl.api.presentation.entities.journeyplanner.journey"></a>
<a id="schema_Tfl.Api.Presentation.Entities.JourneyPlanner.Journey"></a>
<a id="tocStfl.api.presentation.entities.journeyplanner.journey"></a>
<a id="tocstfl.api.presentation.entities.journeyplanner.journey"></a>

```json
{
  "arrivalDateTime": "1970-01-01T00:00:00Z",
  "duration": 0,
  "fare": {
    "caveats": [
      {
        "text": "string",
        "type": "string"
      }
    ],
    "fares": [
      {
        "chargeLevel": "string",
        "chargeProfileName": "string",
        "cost": 0,
        "highZone": 0,
        "isHopperFare": true,
        "lowZone": 0,
        "offPeak": 0,
        "peak": 0,
        "taps": [
          {
            "atcoCode": "string",
            "tapDetails": {
              "busRouteId": "string",
              "hostDeviceType": "string",
              "modeType": "string",
              "nationalLocationCode": 0,
              "tapTimestamp": "1970-01-01T00:00:00Z",
              "validationType": "string"
            }
          }
        ]
      }
    ],
    "totalCost": 0
  },
  "legs": [
    {
      "arrivalPoint": {
        "lat": 0,
        "lon": 0
      },
      "arrivalTime": "1970-01-01T00:00:00Z",
      "departurePoint": {
        "lat": 0,
        "lon": 0
      },
      "departureTime": "1970-01-01T00:00:00Z",
      "disruptions": [
        {
          "additionalInfo": "string",
          "affectedRoutes": [
            {
              "destinationName": "string",
              "direction": "string",
              "id": "string",
              "isEntireRouteSection": true,
              "lineId": "string",
              "lineString": "string",
              "name": "string",
              "originationName": "string",
              "routeCode": "string",
              "routeSectionNaptanEntrySequence": [
                {
                  "ordinal": 0,
                  "stopPoint": {
                    "accessibilitySummary": "string",
                    "additionalProperties": [
                      {
                        "category": "string",
                        "key": "string",
                        "modified": "1970-01-01T00:00:00Z",
                        "sourceSystemKey": "string",
                        "value": "string"
                      }
                    ],
                    "children": [
                      {
                        "additionalProperties": [
                          {
                            "category": "string",
                            "key": "string",
                            "modified": "1970-01-01T00:00:00Z",
                            "sourceSystemKey": "string",
                            "value": "string"
                          }
                        ],
                        "children": [
                          {}
                        ],
                        "childrenUrls": [
                          "string"
                        ],
                        "commonName": "string",
                        "distance": 0,
                        "id": "string",
                        "lat": 0,
                        "lon": 0,
                        "placeType": "string",
                        "url": "string"
                      }
                    ],
                    "childrenUrls": [
                      "string"
                    ],
                    "commonName": "string",
                    "distance": 0,
                    "fullName": "string",
                    "hubNaptanCode": "string",
                    "icsCode": "string",
                    "id": "string",
                    "indicator": "string",
                    "individualStopId": "string",
                    "lat": 0,
                    "lineGroup": [
                      {
                        "lineIdentifier": [
                          "string"
                        ],
                        "naptanIdReference": "string",
                        "stationAtcoCode": "string"
                      }
                    ],
                    "lineModeGroups": [
                      {
                        "lineIdentifier": [
                          "string"
                        ],
                        "modeName": "string"
                      }
                    ],
                    "lines": [
                      {
                        "crowding": {
                          "passengerFlows": [
                            {
                              "timeSlice": "string",
                              "value": 0
                            }
                          ],
                          "trainLoadings": [
                            {
                              "direction": "string",
                              "line": "string",
                              "lineDirection": "string",
                              "naptanTo": "string",
                              "platformDirection": "string",
                              "timeSlice": "string",
                              "value": 0
                            }
                          ]
                        },
                        "fullName": "string",
                        "id": "string",
                        "motType": "string",
                        "name": "string",
                        "network": "string",
                        "routeType": "Unknown",
                        "status": "Unknown",
                        "type": "string",
                        "uri": "string"
                      }
                    ],
                    "lon": 0,
                    "modes": [
                      "string"
                    ],
                    "naptanId": "string",
                    "naptanMode": "string",
                    "placeType": "string",
                    "platformName": "string",
                    "smsCode": "string",
                    "stationNaptan": "string",
                    "status": true,
                    "stopLetter": "string",
                    "stopType": "string",
                    "url": "string"
                  }
                }
              ],
              "validFrom": "1970-01-01T00:00:00Z",
              "validTo": "1970-01-01T00:00:00Z",
              "via": {
                "ordinal": 0,
                "stopPoint": {
                  "accessibilitySummary": "string",
                  "additionalProperties": [
                    {
                      "category": "string",
                      "key": "string",
                      "modified": "1970-01-01T00:00:00Z",
                      "sourceSystemKey": "string",
                      "value": "string"
                    }
                  ],
                  "children": [
                    {
                      "additionalProperties": [
                        {
                          "category": "string",
                          "key": "string",
                          "modified": "1970-01-01T00:00:00Z",
                          "sourceSystemKey": "string",
                          "value": "string"
                        }
                      ],
                      "children": [
                        {}
                      ],
                      "childrenUrls": [
                        "string"
                      ],
                      "commonName": "string",
                      "distance": 0,
                      "id": "string",
                      "lat": 0,
                      "lon": 0,
                      "placeType": "string",
                      "url": "string"
                    }
                  ],
                  "childrenUrls": [
                    "string"
                  ],
                  "commonName": "string",
                  "distance": 0,
                  "fullName": "string",
                  "hubNaptanCode": "string",
                  "icsCode": "string",
                  "id": "string",
                  "indicator": "string",
                  "individualStopId": "string",
                  "lat": 0,
                  "lineGroup": [
                    {
                      "lineIdentifier": [
                        "string"
                      ],
                      "naptanIdReference": "string",
                      "stationAtcoCode": "string"
                    }
                  ],
                  "lineModeGroups": [
                    {
                      "lineIdentifier": [
                        "string"
                      ],
                      "modeName": "string"
                    }
                  ],
                  "lines": [
                    {
                      "crowding": {
                        "passengerFlows": [
                          {
                            "timeSlice": "string",
                            "value": 0
                          }
                        ],
                        "trainLoadings": [
                          {
                            "direction": "string",
                            "line": "string",
                            "lineDirection": "string",
                            "naptanTo": "string",
                            "platformDirection": "string",
                            "timeSlice": "string",
                            "value": 0
                          }
                        ]
                      },
                      "fullName": "string",
                      "id": "string",
                      "motType": "string",
                      "name": "string",
                      "network": "string",
                      "routeType": "Unknown",
                      "status": "Unknown",
                      "type": "string",
                      "uri": "string"
                    }
                  ],
                  "lon": 0,
                  "modes": [
                    "string"
                  ],
                  "naptanId": "string",
                  "naptanMode": "string",
                  "placeType": "string",
                  "platformName": "string",
                  "smsCode": "string",
                  "stationNaptan": "string",
                  "status": true,
                  "stopLetter": "string",
                  "stopType": "string",
                  "url": "string"
                }
              }
            }
          ],
          "affectedStops": [
            {
              "accessibilitySummary": "string",
              "additionalProperties": [
                {
                  "category": "string",
                  "key": "string",
                  "modified": "1970-01-01T00:00:00Z",
                  "sourceSystemKey": "string",
                  "value": "string"
                }
              ],
              "children": [
                {
                  "additionalProperties": [
                    {
                      "category": "string",
                      "key": "string",
                      "modified": "1970-01-01T00:00:00Z",
                      "sourceSystemKey": "string",
                      "value": "string"
                    }
                  ],
                  "children": [
                    {}
                  ],
                  "childrenUrls": [
                    "string"
                  ],
                  "commonName": "string",
                  "distance": 0,
                  "id": "string",
                  "lat": 0,
                  "lon": 0,
                  "placeType": "string",
                  "url": "string"
                }
              ],
              "childrenUrls": [
                "string"
              ],
              "commonName": "string",
              "distance": 0,
              "fullName": "string",
              "hubNaptanCode": "string",
              "icsCode": "string",
              "id": "string",
              "indicator": "string",
              "individualStopId": "string",
              "lat": 0,
              "lineGroup": [
                {
                  "lineIdentifier": [
                    "string"
                  ],
                  "naptanIdReference": "string",
                  "stationAtcoCode": "string"
                }
              ],
              "lineModeGroups": [
                {
                  "lineIdentifier": [
                    "string"
                  ],
                  "modeName": "string"
                }
              ],
              "lines": [
                {
                  "crowding": {
                    "passengerFlows": [
                      {
                        "timeSlice": "string",
                        "value": 0
                      }
                    ],
                    "trainLoadings": [
                      {
                        "direction": "string",
                        "line": "string",
                        "lineDirection": "string",
                        "naptanTo": "string",
                        "platformDirection": "string",
                        "timeSlice": "string",
                        "value": 0
                      }
                    ]
                  },
                  "fullName": "string",
                  "id": "string",
                  "motType": "string",
                  "name": "string",
                  "network": "string",
                  "routeType": "Unknown",
                  "status": "Unknown",
                  "type": "string",
                  "uri": "string"
                }
              ],
              "lon": 0,
              "modes": [
                "string"
              ],
              "naptanId": "string",
              "naptanMode": "string",
              "placeType": "string",
              "platformName": "string",
              "smsCode": "string",
              "stationNaptan": "string",
              "status": true,
              "stopLetter": "string",
              "stopType": "string",
              "url": "string"
            }
          ],
          "category": "Undefined",
          "categoryDescription": "string",
          "closureText": "string",
          "created": "1970-01-01T00:00:00Z",
          "description": "string",
          "lastUpdate": "1970-01-01T00:00:00Z",
          "summary": "string",
          "type": "string"
        }
      ],
      "distance": 0,
      "duration": 0,
      "hasFixedLocations": true,
      "instruction": {
        "detailed": "string",
        "steps": [
          {
            "cumulativeDistance": 0,
            "cumulativeTravelTime": 0,
            "description": "string",
            "descriptionHeading": "string",
            "distance": 0,
            "latitude": 0,
            "longitude": 0,
            "pathAttribute": {
              "name": "string",
              "value": "string"
            },
            "skyDirection": 0,
            "skyDirectionDescription": "North",
            "streetName": "string",
            "trackType": "CycleSuperHighway",
            "turnDirection": "string"
          }
        ],
        "summary": "string"
      },
      "interChangeDuration": "string",
      "interChangePosition": "string",
      "isDisrupted": true,
      "mode": {
        "crowding": {
          "passengerFlows": [
            {
              "timeSlice": "string",
              "value": 0
            }
          ],
          "trainLoadings": [
            {
              "direction": "string",
              "line": "string",
              "lineDirection": "string",
              "naptanTo": "string",
              "platformDirection": "string",
              "timeSlice": "string",
              "value": 0
            }
          ]
        },
        "fullName": "string",
        "id": "string",
        "motType": "string",
        "name": "string",
        "network": "string",
        "routeType": "Unknown",
        "status": "Unknown",
        "type": "string",
        "uri": "string"
      },
      "obstacles": [
        {
          "incline": "string",
          "position": "string",
          "stopId": 0,
          "type": "string"
        }
      ],
      "path": {
        "elevation": [
          {
            "distance": 0,
            "endLat": 0,
            "endLon": 0,
            "gradient": 0,
            "heightFromPreviousPoint": 0,
            "startLat": 0,
            "startLon": 0
          }
        ],
        "lineString": "string",
        "stopPoints": [
          {
            "crowding": {
              "passengerFlows": [
                {
                  "timeSlice": "string",
                  "value": 0
                }
              ],
              "trainLoadings": [
                {
                  "direction": "string",
                  "line": "string",
                  "lineDirection": "string",
                  "naptanTo": "string",
                  "platformDirection": "string",
                  "timeSlice": "string",
                  "value": 0
                }
              ]
            },
            "fullName": "string",
            "id": "string",
            "motType": "string",
            "name": "string",
            "network": "string",
            "routeType": "Unknown",
            "status": "Unknown",
            "type": "string",
            "uri": "string"
          }
        ]
      },
      "plannedWorks": [
        {
          "createdDateTime": "1970-01-01T00:00:00Z",
          "description": "string",
          "id": "string",
          "lastUpdateDateTime": "1970-01-01T00:00:00Z"
        }
      ],
      "routeOptions": [
        {
          "direction": "string",
          "directions": [
            "string"
          ],
          "id": "string",
          "lineIdentifier": {
            "crowding": {
              "passengerFlows": [
                {
                  "timeSlice": "string",
                  "value": 0
                }
              ],
              "trainLoadings": [
                {
                  "direction": "string",
                  "line": "string",
                  "lineDirection": "string",
                  "naptanTo": "string",
                  "platformDirection": "string",
                  "timeSlice": "string",
                  "value": 0
                }
              ]
            },
            "fullName": "string",
            "id": "string",
            "motType": "string",
            "name": "string",
            "network": "string",
            "routeType": "Unknown",
            "status": "Unknown",
            "type": "string",
            "uri": "string"
          },
          "name": "string"
        }
      ],
      "scheduledArrivalTime": "1970-01-01T00:00:00Z",
      "scheduledDepartureTime": "1970-01-01T00:00:00Z",
      "speed": "string"
    }
  ],
  "startDateTime": "1970-01-01T00:00:00Z"
}
```

Object that represents an end to end journey (see schematic).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arrivalDateTime|string(date-time)|false|none|none|
|duration|integer(int32)|false|none|none|
|fare|[Tfl.Api.Presentation.Entities.JourneyPlanner.JourneyFare](#schematfl.api.presentation.entities.journeyplanner.journeyfare)|false|none|none|
|legs|[[Tfl.Api.Presentation.Entities.JourneyPlanner.Leg](#schematfl.api.presentation.entities.journeyplanner.leg)]|false|none|none|
|startDateTime|string(date-time)|false|none|none|

<h2 id="tocS_Tfl.Api.Presentation.Entities.JourneyPlanner.JourneyFare">Tfl.Api.Presentation.Entities.JourneyPlanner.JourneyFare</h2>
<!-- backwards compatibility -->
<a id="schematfl.api.presentation.entities.journeyplanner.journeyfare"></a>
<a id="schema_Tfl.Api.Presentation.Entities.JourneyPlanner.JourneyFare"></a>
<a id="tocStfl.api.presentation.entities.journeyplanner.journeyfare"></a>
<a id="tocstfl.api.presentation.entities.journeyplanner.journeyfare"></a>

```json
{
  "caveats": [
    {
      "text": "string",
      "type": "string"
    }
  ],
  "fares": [
    {
      "chargeLevel": "string",
      "chargeProfileName": "string",
      "cost": 0,
      "highZone": 0,
      "isHopperFare": true,
      "lowZone": 0,
      "offPeak": 0,
      "peak": 0,
      "taps": [
        {
          "atcoCode": "string",
          "tapDetails": {
            "busRouteId": "string",
            "hostDeviceType": "string",
            "modeType": "string",
            "nationalLocationCode": 0,
            "tapTimestamp": "1970-01-01T00:00:00Z",
            "validationType": "string"
          }
        }
      ]
    }
  ],
  "totalCost": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|caveats|[[Tfl.Api.Presentation.Entities.JourneyPlanner.FareCaveat](#schematfl.api.presentation.entities.journeyplanner.farecaveat)]|false|none|none|
|fares|[[Tfl.Api.Presentation.Entities.JourneyPlanner.Fare](#schematfl.api.presentation.entities.journeyplanner.fare)]|false|none|none|
|totalCost|integer(int32)|false|none|none|

<h2 id="tocS_Tfl.Api.Presentation.Entities.JourneyPlanner.JourneyPlannerCycleHireDockingStationData">Tfl.Api.Presentation.Entities.JourneyPlanner.JourneyPlannerCycleHireDockingStationData</h2>
<!-- backwards compatibility -->
<a id="schematfl.api.presentation.entities.journeyplanner.journeyplannercyclehiredockingstationdata"></a>
<a id="schema_Tfl.Api.Presentation.Entities.JourneyPlanner.JourneyPlannerCycleHireDockingStationData"></a>
<a id="tocStfl.api.presentation.entities.journeyplanner.journeyplannercyclehiredockingstationdata"></a>
<a id="tocstfl.api.presentation.entities.journeyplanner.journeyplannercyclehiredockingstationdata"></a>

```json
{
  "destinationId": "string",
  "destinationNumberOfBikes": 0,
  "destinationNumberOfEmptySlots": 0,
  "originId": "string",
  "originNumberOfBikes": 0,
  "originNumberOfEmptySlots": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|destinationId|string|false|none|none|
|destinationNumberOfBikes|integer(int32)|false|none|none|
|destinationNumberOfEmptySlots|integer(int32)|false|none|none|
|originId|string|false|none|none|
|originNumberOfBikes|integer(int32)|false|none|none|
|originNumberOfEmptySlots|integer(int32)|false|none|none|

<h2 id="tocS_Tfl.Api.Presentation.Entities.JourneyPlanner.JourneyVector">Tfl.Api.Presentation.Entities.JourneyPlanner.JourneyVector</h2>
<!-- backwards compatibility -->
<a id="schematfl.api.presentation.entities.journeyplanner.journeyvector"></a>
<a id="schema_Tfl.Api.Presentation.Entities.JourneyPlanner.JourneyVector"></a>
<a id="tocStfl.api.presentation.entities.journeyplanner.journeyvector"></a>
<a id="tocstfl.api.presentation.entities.journeyplanner.journeyvector"></a>

```json
{
  "from": "string",
  "to": "string",
  "uri": "string",
  "via": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|from|string|false|none|none|
|to|string|false|none|none|
|uri|string|false|none|none|
|via|string|false|none|none|

<h2 id="tocS_Tfl.Api.Presentation.Entities.JourneyPlanner.Leg">Tfl.Api.Presentation.Entities.JourneyPlanner.Leg</h2>
<!-- backwards compatibility -->
<a id="schematfl.api.presentation.entities.journeyplanner.leg"></a>
<a id="schema_Tfl.Api.Presentation.Entities.JourneyPlanner.Leg"></a>
<a id="tocStfl.api.presentation.entities.journeyplanner.leg"></a>
<a id="tocstfl.api.presentation.entities.journeyplanner.leg"></a>

```json
{
  "arrivalPoint": {
    "lat": 0,
    "lon": 0
  },
  "arrivalTime": "1970-01-01T00:00:00Z",
  "departurePoint": {
    "lat": 0,
    "lon": 0
  },
  "departureTime": "1970-01-01T00:00:00Z",
  "disruptions": [
    {
      "additionalInfo": "string",
      "affectedRoutes": [
        {
          "destinationName": "string",
          "direction": "string",
          "id": "string",
          "isEntireRouteSection": true,
          "lineId": "string",
          "lineString": "string",
          "name": "string",
          "originationName": "string",
          "routeCode": "string",
          "routeSectionNaptanEntrySequence": [
            {
              "ordinal": 0,
              "stopPoint": {
                "accessibilitySummary": "string",
                "additionalProperties": [
                  {
                    "category": "string",
                    "key": "string",
                    "modified": "1970-01-01T00:00:00Z",
                    "sourceSystemKey": "string",
                    "value": "string"
                  }
                ],
                "children": [
                  {
                    "additionalProperties": [
                      {
                        "category": "string",
                        "key": "string",
                        "modified": "1970-01-01T00:00:00Z",
                        "sourceSystemKey": "string",
                        "value": "string"
                      }
                    ],
                    "children": [
                      {}
                    ],
                    "childrenUrls": [
                      "string"
                    ],
                    "commonName": "string",
                    "distance": 0,
                    "id": "string",
                    "lat": 0,
                    "lon": 0,
                    "placeType": "string",
                    "url": "string"
                  }
                ],
                "childrenUrls": [
                  "string"
                ],
                "commonName": "string",
                "distance": 0,
                "fullName": "string",
                "hubNaptanCode": "string",
                "icsCode": "string",
                "id": "string",
                "indicator": "string",
                "individualStopId": "string",
                "lat": 0,
                "lineGroup": [
                  {
                    "lineIdentifier": [
                      "string"
                    ],
                    "naptanIdReference": "string",
                    "stationAtcoCode": "string"
                  }
                ],
                "lineModeGroups": [
                  {
                    "lineIdentifier": [
                      "string"
                    ],
                    "modeName": "string"
                  }
                ],
                "lines": [
                  {
                    "crowding": {
                      "passengerFlows": [
                        {
                          "timeSlice": "string",
                          "value": 0
                        }
                      ],
                      "trainLoadings": [
                        {
                          "direction": "string",
                          "line": "string",
                          "lineDirection": "string",
                          "naptanTo": "string",
                          "platformDirection": "string",
                          "timeSlice": "string",
                          "value": 0
                        }
                      ]
                    },
                    "fullName": "string",
                    "id": "string",
                    "motType": "string",
                    "name": "string",
                    "network": "string",
                    "routeType": "Unknown",
                    "status": "Unknown",
                    "type": "string",
                    "uri": "string"
                  }
                ],
                "lon": 0,
                "modes": [
                  "string"
                ],
                "naptanId": "string",
                "naptanMode": "string",
                "placeType": "string",
                "platformName": "string",
                "smsCode": "string",
                "stationNaptan": "string",
                "status": true,
                "stopLetter": "string",
                "stopType": "string",
                "url": "string"
              }
            }
          ],
          "validFrom": "1970-01-01T00:00:00Z",
          "validTo": "1970-01-01T00:00:00Z",
          "via": {
            "ordinal": 0,
            "stopPoint": {
              "accessibilitySummary": "string",
              "additionalProperties": [
                {
                  "category": "string",
                  "key": "string",
                  "modified": "1970-01-01T00:00:00Z",
                  "sourceSystemKey": "string",
                  "value": "string"
                }
              ],
              "children": [
                {
                  "additionalProperties": [
                    {
                      "category": "string",
                      "key": "string",
                      "modified": "1970-01-01T00:00:00Z",
                      "sourceSystemKey": "string",
                      "value": "string"
                    }
                  ],
                  "children": [
                    {}
                  ],
                  "childrenUrls": [
                    "string"
                  ],
                  "commonName": "string",
                  "distance": 0,
                  "id": "string",
                  "lat": 0,
                  "lon": 0,
                  "placeType": "string",
                  "url": "string"
                }
              ],
              "childrenUrls": [
                "string"
              ],
              "commonName": "string",
              "distance": 0,
              "fullName": "string",
              "hubNaptanCode": "string",
              "icsCode": "string",
              "id": "string",
              "indicator": "string",
              "individualStopId": "string",
              "lat": 0,
              "lineGroup": [
                {
                  "lineIdentifier": [
                    "string"
                  ],
                  "naptanIdReference": "string",
                  "stationAtcoCode": "string"
                }
              ],
              "lineModeGroups": [
                {
                  "lineIdentifier": [
                    "string"
                  ],
                  "modeName": "string"
                }
              ],
              "lines": [
                {
                  "crowding": {
                    "passengerFlows": [
                      {
                        "timeSlice": "string",
                        "value": 0
                      }
                    ],
                    "trainLoadings": [
                      {
                        "direction": "string",
                        "line": "string",
                        "lineDirection": "string",
                        "naptanTo": "string",
                        "platformDirection": "string",
                        "timeSlice": "string",
                        "value": 0
                      }
                    ]
                  },
                  "fullName": "string",
                  "id": "string",
                  "motType": "string",
                  "name": "string",
                  "network": "string",
                  "routeType": "Unknown",
                  "status": "Unknown",
                  "type": "string",
                  "uri": "string"
                }
              ],
              "lon": 0,
              "modes": [
                "string"
              ],
              "naptanId": "string",
              "naptanMode": "string",
              "placeType": "string",
              "platformName": "string",
              "smsCode": "string",
              "stationNaptan": "string",
              "status": true,
              "stopLetter": "string",
              "stopType": "string",
              "url": "string"
            }
          }
        }
      ],
      "affectedStops": [
        {
          "accessibilitySummary": "string",
          "additionalProperties": [
            {
              "category": "string",
              "key": "string",
              "modified": "1970-01-01T00:00:00Z",
              "sourceSystemKey": "string",
              "value": "string"
            }
          ],
          "children": [
            {
              "additionalProperties": [
                {
                  "category": "string",
                  "key": "string",
                  "modified": "1970-01-01T00:00:00Z",
                  "sourceSystemKey": "string",
                  "value": "string"
                }
              ],
              "children": [
                {}
              ],
              "childrenUrls": [
                "string"
              ],
              "commonName": "string",
              "distance": 0,
              "id": "string",
              "lat": 0,
              "lon": 0,
              "placeType": "string",
              "url": "string"
            }
          ],
          "childrenUrls": [
            "string"
          ],
          "commonName": "string",
          "distance": 0,
          "fullName": "string",
          "hubNaptanCode": "string",
          "icsCode": "string",
          "id": "string",
          "indicator": "string",
          "individualStopId": "string",
          "lat": 0,
          "lineGroup": [
            {
              "lineIdentifier": [
                "string"
              ],
              "naptanIdReference": "string",
              "stationAtcoCode": "string"
            }
          ],
          "lineModeGroups": [
            {
              "lineIdentifier": [
                "string"
              ],
              "modeName": "string"
            }
          ],
          "lines": [
            {
              "crowding": {
                "passengerFlows": [
                  {
                    "timeSlice": "string",
                    "value": 0
                  }
                ],
                "trainLoadings": [
                  {
                    "direction": "string",
                    "line": "string",
                    "lineDirection": "string",
                    "naptanTo": "string",
                    "platformDirection": "string",
                    "timeSlice": "string",
                    "value": 0
                  }
                ]
              },
              "fullName": "string",
              "id": "string",
              "motType": "string",
              "name": "string",
              "network": "string",
              "routeType": "Unknown",
              "status": "Unknown",
              "type": "string",
              "uri": "string"
            }
          ],
          "lon": 0,
          "modes": [
            "string"
          ],
          "naptanId": "string",
          "naptanMode": "string",
          "placeType": "string",
          "platformName": "string",
          "smsCode": "string",
          "stationNaptan": "string",
          "status": true,
          "stopLetter": "string",
          "stopType": "string",
          "url": "string"
        }
      ],
      "category": "Undefined",
      "categoryDescription": "string",
      "closureText": "string",
      "created": "1970-01-01T00:00:00Z",
      "description": "string",
      "lastUpdate": "1970-01-01T00:00:00Z",
      "summary": "string",
      "type": "string"
    }
  ],
  "distance": 0,
  "duration": 0,
  "hasFixedLocations": true,
  "instruction": {
    "detailed": "string",
    "steps": [
      {
        "cumulativeDistance": 0,
        "cumulativeTravelTime": 0,
        "description": "string",
        "descriptionHeading": "string",
        "distance": 0,
        "latitude": 0,
        "longitude": 0,
        "pathAttribute": {
          "name": "string",
          "value": "string"
        },
        "skyDirection": 0,
        "skyDirectionDescription": "North",
        "streetName": "string",
        "trackType": "CycleSuperHighway",
        "turnDirection": "string"
      }
    ],
    "summary": "string"
  },
  "interChangeDuration": "string",
  "interChangePosition": "string",
  "isDisrupted": true,
  "mode": {
    "crowding": {
      "passengerFlows": [
        {
          "timeSlice": "string",
          "value": 0
        }
      ],
      "trainLoadings": [
        {
          "direction": "string",
          "line": "string",
          "lineDirection": "string",
          "naptanTo": "string",
          "platformDirection": "string",
          "timeSlice": "string",
          "value": 0
        }
      ]
    },
    "fullName": "string",
    "id": "string",
    "motType": "string",
    "name": "string",
    "network": "string",
    "routeType": "Unknown",
    "status": "Unknown",
    "type": "string",
    "uri": "string"
  },
  "obstacles": [
    {
      "incline": "string",
      "position": "string",
      "stopId": 0,
      "type": "string"
    }
  ],
  "path": {
    "elevation": [
      {
        "distance": 0,
        "endLat": 0,
        "endLon": 0,
        "gradient": 0,
        "heightFromPreviousPoint": 0,
        "startLat": 0,
        "startLon": 0
      }
    ],
    "lineString": "string",
    "stopPoints": [
      {
        "crowding": {
          "passengerFlows": [
            {
              "timeSlice": "string",
              "value": 0
            }
          ],
          "trainLoadings": [
            {
              "direction": "string",
              "line": "string",
              "lineDirection": "string",
              "naptanTo": "string",
              "platformDirection": "string",
              "timeSlice": "string",
              "value": 0
            }
          ]
        },
        "fullName": "string",
        "id": "string",
        "motType": "string",
        "name": "string",
        "network": "string",
        "routeType": "Unknown",
        "status": "Unknown",
        "type": "string",
        "uri": "string"
      }
    ]
  },
  "plannedWorks": [
    {
      "createdDateTime": "1970-01-01T00:00:00Z",
      "description": "string",
      "id": "string",
      "lastUpdateDateTime": "1970-01-01T00:00:00Z"
    }
  ],
  "routeOptions": [
    {
      "direction": "string",
      "directions": [
        "string"
      ],
      "id": "string",
      "lineIdentifier": {
        "crowding": {
          "passengerFlows": [
            {
              "timeSlice": "string",
              "value": 0
            }
          ],
          "trainLoadings": [
            {
              "direction": "string",
              "line": "string",
              "lineDirection": "string",
              "naptanTo": "string",
              "platformDirection": "string",
              "timeSlice": "string",
              "value": 0
            }
          ]
        },
        "fullName": "string",
        "id": "string",
        "motType": "string",
        "name": "string",
        "network": "string",
        "routeType": "Unknown",
        "status": "Unknown",
        "type": "string",
        "uri": "string"
      },
      "name": "string"
    }
  ],
  "scheduledArrivalTime": "1970-01-01T00:00:00Z",
  "scheduledDepartureTime": "1970-01-01T00:00:00Z",
  "speed": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arrivalPoint|[Tfl.Api.Presentation.Entities.Point](#schematfl.api.presentation.entities.point)|false|none|Represents a point located at a latitude and longitude using the WGS84 co-ordinate system.|
|arrivalTime|string(date-time)|false|none|none|
|departurePoint|[Tfl.Api.Presentation.Entities.Point](#schematfl.api.presentation.entities.point)|false|none|Represents a point located at a latitude and longitude using the WGS84 co-ordinate system.|
|departureTime|string(date-time)|false|none|none|
|disruptions|[[Tfl.Api.Presentation.Entities.Disruption](#schematfl.api.presentation.entities.disruption)]|false|none|none|
|distance|number(double)|false|none|none|
|duration|integer(int32)|false|none|none|
|hasFixedLocations|boolean|false|read-only|none|
|instruction|[Tfl.Api.Presentation.Entities.Instruction](#schematfl.api.presentation.entities.instruction)|false|none|none|
|interChangeDuration|string|false|none|none|
|interChangePosition|string|false|none|none|
|isDisrupted|boolean|false|read-only|none|
|mode|[Tfl.Api.Presentation.Entities.Identifier](#schematfl.api.presentation.entities.identifier)|false|none|none|
|obstacles|[[Tfl.Api.Presentation.Entities.JourneyPlanner.Obstacle](#schematfl.api.presentation.entities.journeyplanner.obstacle)]|false|none|none|
|path|[Tfl.Api.Presentation.Entities.JourneyPlanner.Path](#schematfl.api.presentation.entities.journeyplanner.path)|false|none|none|
|plannedWorks|[[Tfl.Api.Presentation.Entities.JourneyPlanner.PlannedWork](#schematfl.api.presentation.entities.journeyplanner.plannedwork)]|false|none|none|
|routeOptions|[[Tfl.Api.Presentation.Entities.JourneyPlanner.RouteOption](#schematfl.api.presentation.entities.journeyplanner.routeoption)]|false|none|none|
|scheduledArrivalTime|string(date-time)|false|none|none|
|scheduledDepartureTime|string(date-time)|false|none|none|
|speed|string|false|none|none|

<h2 id="tocS_Tfl.Api.Presentation.Entities.JourneyPlanner.Obstacle">Tfl.Api.Presentation.Entities.JourneyPlanner.Obstacle</h2>
<!-- backwards compatibility -->
<a id="schematfl.api.presentation.entities.journeyplanner.obstacle"></a>
<a id="schema_Tfl.Api.Presentation.Entities.JourneyPlanner.Obstacle"></a>
<a id="tocStfl.api.presentation.entities.journeyplanner.obstacle"></a>
<a id="tocstfl.api.presentation.entities.journeyplanner.obstacle"></a>

```json
{
  "incline": "string",
  "position": "string",
  "stopId": 0,
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|incline|string|false|none|none|
|position|string|false|none|none|
|stopId|integer(int32)|false|none|none|
|type|string|false|none|none|

<h2 id="tocS_Tfl.Api.Presentation.Entities.JourneyPlanner.Path">Tfl.Api.Presentation.Entities.JourneyPlanner.Path</h2>
<!-- backwards compatibility -->
<a id="schematfl.api.presentation.entities.journeyplanner.path"></a>
<a id="schema_Tfl.Api.Presentation.Entities.JourneyPlanner.Path"></a>
<a id="tocStfl.api.presentation.entities.journeyplanner.path"></a>
<a id="tocstfl.api.presentation.entities.journeyplanner.path"></a>

```json
{
  "elevation": [
    {
      "distance": 0,
      "endLat": 0,
      "endLon": 0,
      "gradient": 0,
      "heightFromPreviousPoint": 0,
      "startLat": 0,
      "startLon": 0
    }
  ],
  "lineString": "string",
  "stopPoints": [
    {
      "crowding": {
        "passengerFlows": [
          {
            "timeSlice": "string",
            "value": 0
          }
        ],
        "trainLoadings": [
          {
            "direction": "string",
            "line": "string",
            "lineDirection": "string",
            "naptanTo": "string",
            "platformDirection": "string",
            "timeSlice": "string",
            "value": 0
          }
        ]
      },
      "fullName": "string",
      "id": "string",
      "motType": "string",
      "name": "string",
      "network": "string",
      "routeType": "Unknown",
      "status": "Unknown",
      "type": "string",
      "uri": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|elevation|[[Tfl.Api.Common.JourneyPlanner.JpElevation](#schematfl.api.common.journeyplanner.jpelevation)]|false|none|none|
|lineString|string|false|none|none|
|stopPoints|[[Tfl.Api.Presentation.Entities.Identifier](#schematfl.api.presentation.entities.identifier)]|false|none|none|

<h2 id="tocS_Tfl.Api.Presentation.Entities.JourneyPlanner.PlannedWork">Tfl.Api.Presentation.Entities.JourneyPlanner.PlannedWork</h2>
<!-- backwards compatibility -->
<a id="schematfl.api.presentation.entities.journeyplanner.plannedwork"></a>
<a id="schema_Tfl.Api.Presentation.Entities.JourneyPlanner.PlannedWork"></a>
<a id="tocStfl.api.presentation.entities.journeyplanner.plannedwork"></a>
<a id="tocstfl.api.presentation.entities.journeyplanner.plannedwork"></a>

```json
{
  "createdDateTime": "1970-01-01T00:00:00Z",
  "description": "string",
  "id": "string",
  "lastUpdateDateTime": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdDateTime|string(date-time)|false|none|none|
|description|string|false|none|none|
|id|string|false|none|none|
|lastUpdateDateTime|string(date-time)|false|none|none|

<h2 id="tocS_Tfl.Api.Presentation.Entities.JourneyPlanner.RouteOption">Tfl.Api.Presentation.Entities.JourneyPlanner.RouteOption</h2>
<!-- backwards compatibility -->
<a id="schematfl.api.presentation.entities.journeyplanner.routeoption"></a>
<a id="schema_Tfl.Api.Presentation.Entities.JourneyPlanner.RouteOption"></a>
<a id="tocStfl.api.presentation.entities.journeyplanner.routeoption"></a>
<a id="tocstfl.api.presentation.entities.journeyplanner.routeoption"></a>

```json
{
  "direction": "string",
  "directions": [
    "string"
  ],
  "id": "string",
  "lineIdentifier": {
    "crowding": {
      "passengerFlows": [
        {
          "timeSlice": "string",
          "value": 0
        }
      ],
      "trainLoadings": [
        {
          "direction": "string",
          "line": "string",
          "lineDirection": "string",
          "naptanTo": "string",
          "platformDirection": "string",
          "timeSlice": "string",
          "value": 0
        }
      ]
    },
    "fullName": "string",
    "id": "string",
    "motType": "string",
    "name": "string",
    "network": "string",
    "routeType": "Unknown",
    "status": "Unknown",
    "type": "string",
    "uri": "string"
  },
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|direction|string|false|none|The direction of the route, i.e. outbound or inbound.|
|directions|[string]|false|none|none|
|id|string|false|none|The Id of the route|
|lineIdentifier|[Tfl.Api.Presentation.Entities.Identifier](#schematfl.api.presentation.entities.identifier)|false|none|none|
|name|string|false|none|Name such as "72"|

<h2 id="tocS_Tfl.Api.Presentation.Entities.JourneyPlanner.SearchCriteria">Tfl.Api.Presentation.Entities.JourneyPlanner.SearchCriteria</h2>
<!-- backwards compatibility -->
<a id="schematfl.api.presentation.entities.journeyplanner.searchcriteria"></a>
<a id="schema_Tfl.Api.Presentation.Entities.JourneyPlanner.SearchCriteria"></a>
<a id="tocStfl.api.presentation.entities.journeyplanner.searchcriteria"></a>
<a id="tocstfl.api.presentation.entities.journeyplanner.searchcriteria"></a>

```json
{
  "dateTime": "1970-01-01T00:00:00Z",
  "dateTimeType": "Arriving",
  "timeAdjustments": {
    "earlier": {
      "date": "string",
      "time": "string",
      "timeIs": "string",
      "uri": "string"
    },
    "earliest": {
      "date": "string",
      "time": "string",
      "timeIs": "string",
      "uri": "string"
    },
    "later": {
      "date": "string",
      "time": "string",
      "timeIs": "string",
      "uri": "string"
    },
    "latest": {
      "date": "string",
      "time": "string",
      "timeIs": "string",
      "uri": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dateTime|string(date-time)|false|none|none|
|dateTimeType|string|false|none|none|
|timeAdjustments|[Tfl.Api.Presentation.Entities.JourneyPlanner.TimeAdjustments](#schematfl.api.presentation.entities.journeyplanner.timeadjustments)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|dateTimeType|Arriving|
|dateTimeType|Departing|

<h2 id="tocS_Tfl.Api.Presentation.Entities.JourneyPlanner.TimeAdjustment">Tfl.Api.Presentation.Entities.JourneyPlanner.TimeAdjustment</h2>
<!-- backwards compatibility -->
<a id="schematfl.api.presentation.entities.journeyplanner.timeadjustment"></a>
<a id="schema_Tfl.Api.Presentation.Entities.JourneyPlanner.TimeAdjustment"></a>
<a id="tocStfl.api.presentation.entities.journeyplanner.timeadjustment"></a>
<a id="tocstfl.api.presentation.entities.journeyplanner.timeadjustment"></a>

```json
{
  "date": "string",
  "time": "string",
  "timeIs": "string",
  "uri": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|date|string|false|none|none|
|time|string|false|none|none|
|timeIs|string|false|none|none|
|uri|string|false|none|none|

<h2 id="tocS_Tfl.Api.Presentation.Entities.JourneyPlanner.TimeAdjustments">Tfl.Api.Presentation.Entities.JourneyPlanner.TimeAdjustments</h2>
<!-- backwards compatibility -->
<a id="schematfl.api.presentation.entities.journeyplanner.timeadjustments"></a>
<a id="schema_Tfl.Api.Presentation.Entities.JourneyPlanner.TimeAdjustments"></a>
<a id="tocStfl.api.presentation.entities.journeyplanner.timeadjustments"></a>
<a id="tocstfl.api.presentation.entities.journeyplanner.timeadjustments"></a>

```json
{
  "earlier": {
    "date": "string",
    "time": "string",
    "timeIs": "string",
    "uri": "string"
  },
  "earliest": {
    "date": "string",
    "time": "string",
    "timeIs": "string",
    "uri": "string"
  },
  "later": {
    "date": "string",
    "time": "string",
    "timeIs": "string",
    "uri": "string"
  },
  "latest": {
    "date": "string",
    "time": "string",
    "timeIs": "string",
    "uri": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|earlier|[Tfl.Api.Presentation.Entities.JourneyPlanner.TimeAdjustment](#schematfl.api.presentation.entities.journeyplanner.timeadjustment)|false|none|none|
|earliest|[Tfl.Api.Presentation.Entities.JourneyPlanner.TimeAdjustment](#schematfl.api.presentation.entities.journeyplanner.timeadjustment)|false|none|none|
|later|[Tfl.Api.Presentation.Entities.JourneyPlanner.TimeAdjustment](#schematfl.api.presentation.entities.journeyplanner.timeadjustment)|false|none|none|
|latest|[Tfl.Api.Presentation.Entities.JourneyPlanner.TimeAdjustment](#schematfl.api.presentation.entities.journeyplanner.timeadjustment)|false|none|none|

<h2 id="tocS_Tfl.Api.Presentation.Entities.KnownJourney">Tfl.Api.Presentation.Entities.KnownJourney</h2>
<!-- backwards compatibility -->
<a id="schematfl.api.presentation.entities.knownjourney"></a>
<a id="schema_Tfl.Api.Presentation.Entities.KnownJourney"></a>
<a id="tocStfl.api.presentation.entities.knownjourney"></a>
<a id="tocstfl.api.presentation.entities.knownjourney"></a>

```json
{
  "hour": "string",
  "intervalId": 0,
  "minute": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hour|string|false|none|none|
|intervalId|integer(int32)|false|none|none|
|minute|string|false|none|none|

<h2 id="tocS_Tfl.Api.Presentation.Entities.Line">Tfl.Api.Presentation.Entities.Line</h2>
<!-- backwards compatibility -->
<a id="schematfl.api.presentation.entities.line"></a>
<a id="schema_Tfl.Api.Presentation.Entities.Line"></a>
<a id="tocStfl.api.presentation.entities.line"></a>
<a id="tocstfl.api.presentation.entities.line"></a>

```json
{
  "created": "1970-01-01T00:00:00Z",
  "crowding": {
    "passengerFlows": [
      {
        "timeSlice": "string",
        "value": 0
      }
    ],
    "trainLoadings": [
      {
        "direction": "string",
        "line": "string",
        "lineDirection": "string",
        "naptanTo": "string",
        "platformDirection": "string",
        "timeSlice": "string",
        "value": 0
      }
    ]
  },
  "disruptions": [
    {
      "additionalInfo": "string",
      "affectedRoutes": [
        {
          "destinationName": "string",
          "direction": "string",
          "id": "string",
          "isEntireRouteSection": true,
          "lineId": "string",
          "lineString": "string",
          "name": "string",
          "originationName": "string",
          "routeCode": "string",
          "routeSectionNaptanEntrySequence": [
            {
              "ordinal": 0,
              "stopPoint": {
                "accessibilitySummary": "string",
                "additionalProperties": [
                  {
                    "category": "string",
                    "key": "string",
                    "modified": "1970-01-01T00:00:00Z",
                    "sourceSystemKey": "string",
                    "value": "string"
                  }
                ],
                "children": [
                  {
                    "additionalProperties": [
                      {
                        "category": "string",
                        "key": "string",
                        "modified": "1970-01-01T00:00:00Z",
                        "sourceSystemKey": "string",
                        "value": "string"
                      }
                    ],
                    "children": [
                      {}
                    ],
                    "childrenUrls": [
                      "string"
                    ],
                    "commonName": "string",
                    "distance": 0,
                    "id": "string",
                    "lat": 0,
                    "lon": 0,
                    "placeType": "string",
                    "url": "string"
                  }
                ],
                "childrenUrls": [
                  "string"
                ],
                "commonName": "string",
                "distance": 0,
                "fullName": "string",
                "hubNaptanCode": "string",
                "icsCode": "string",
                "id": "string",
                "indicator": "string",
                "individualStopId": "string",
                "lat": 0,
                "lineGroup": [
                  {
                    "lineIdentifier": [
                      "string"
                    ],
                    "naptanIdReference": "string",
                    "stationAtcoCode": "string"
                  }
                ],
                "lineModeGroups": [
                  {
                    "lineIdentifier": [
                      "string"
                    ],
                    "modeName": "string"
                  }
                ],
                "lines": [
                  {
                    "crowding": {
                      "passengerFlows": [
                        {
                          "timeSlice": "string",
                          "value": 0
                        }
                      ],
                      "trainLoadings": [
                        {
                          "direction": "string",
                          "line": "string",
                          "lineDirection": "string",
                          "naptanTo": "string",
                          "platformDirection": "string",
                          "timeSlice": "string",
                          "value": 0
                        }
                      ]
                    },
                    "fullName": "string",
                    "id": "string",
                    "motType": "string",
                    "name": "string",
                    "network": "string",
                    "routeType": "Unknown",
                    "status": "Unknown",
                    "type": "string",
                    "uri": "string"
                  }
                ],
                "lon": 0,
                "modes": [
                  "string"
                ],
                "naptanId": "string",
                "naptanMode": "string",
                "placeType": "string",
                "platformName": "string",
                "smsCode": "string",
                "stationNaptan": "string",
                "status": true,
                "stopLetter": "string",
                "stopType": "string",
                "url": "string"
              }
            }
          ],
          "validFrom": "1970-01-01T00:00:00Z",
          "validTo": "1970-01-01T00:00:00Z",
          "via": {
            "ordinal": 0,
            "stopPoint": {
              "accessibilitySummary": "string",
              "additionalProperties": [
                {
                  "category": "string",
                  "key": "string",
                  "modified": "1970-01-01T00:00:00Z",
                  "sourceSystemKey": "string",
                  "value": "string"
                }
              ],
              "children": [
                {
                  "additionalProperties": [
                    {
                      "category": "string",
                      "key": "string",
                      "modified": "1970-01-01T00:00:00Z",
                      "sourceSystemKey": "string",
                      "value": "string"
                    }
                  ],
                  "children": [
                    {}
                  ],
                  "childrenUrls": [
                    "string"
                  ],
                  "commonName": "string",
                  "distance": 0,
                  "id": "string",
                  "lat": 0,
                  "lon": 0,
                  "placeType": "string",
                  "url": "string"
                }
              ],
              "childrenUrls": [
                "string"
              ],
              "commonName": "string",
              "distance": 0,
              "fullName": "string",
              "hubNaptanCode": "string",
              "icsCode": "string",
              "id": "string",
              "indicator": "string",
              "individualStopId": "string",
              "lat": 0,
              "lineGroup": [
                {
                  "lineIdentifier": [
                    "string"
                  ],
                  "naptanIdReference": "string",
                  "stationAtcoCode": "string"
                }
              ],
              "lineModeGroups": [
                {
                  "lineIdentifier": [
                    "string"
                  ],
                  "modeName": "string"
                }
              ],
              "lines": [
                {
                  "crowding": {
                    "passengerFlows": [
                      {
                        "timeSlice": "string",
                        "value": 0
                      }
                    ],
                    "trainLoadings": [
                      {
                        "direction": "string",
                        "line": "string",
                        "lineDirection": "string",
                        "naptanTo": "string",
                        "platformDirection": "string",
                        "timeSlice": "string",
                        "value": 0
                      }
                    ]
                  },
                  "fullName": "string",
                  "id": "string",
                  "motType": "string",
                  "name": "string",
                  "network": "string",
                  "routeType": "Unknown",
                  "status": "Unknown",
                  "type": "string",
                  "uri": "string"
                }
              ],
              "lon": 0,
              "modes": [
                "string"
              ],
              "naptanId": "string",
              "naptanMode": "string",
              "placeType": "string",
              "platformName": "string",
              "smsCode": "string",
              "stationNaptan": "string",
              "status": true,
              "stopLetter": "string",
              "stopType": "string",
              "url": "string"
            }
          }
        }
      ],
      "affectedStops": [
        {
          "accessibilitySummary": "string",
          "additionalProperties": [
            {
              "category": "string",
              "key": "string",
              "modified": "1970-01-01T00:00:00Z",
              "sourceSystemKey": "string",
              "value": "string"
            }
          ],
          "children": [
            {
              "additionalProperties": [
                {
                  "category": "string",
                  "key": "string",
                  "modified": "1970-01-01T00:00:00Z",
                  "sourceSystemKey": "string",
                  "value": "string"
                }
              ],
              "children": [
                {}
              ],
              "childrenUrls": [
                "string"
              ],
              "commonName": "string",
              "distance": 0,
              "id": "string",
              "lat": 0,
              "lon": 0,
              "placeType": "string",
              "url": "string"
            }
          ],
          "childrenUrls": [
            "string"
          ],
          "commonName": "string",
          "distance": 0,
          "fullName": "string",
          "hubNaptanCode": "string",
          "icsCode": "string",
          "id": "string",
          "indicator": "string",
          "individualStopId": "string",
          "lat": 0,
          "lineGroup": [
            {
              "lineIdentifier": [
                "string"
              ],
              "naptanIdReference": "string",
              "stationAtcoCode": "string"
            }
          ],
          "lineModeGroups": [
            {
              "lineIdentifier": [
                "string"
              ],
              "modeName": "string"
            }
          ],
          "lines": [
            {
              "crowding": {
                "passengerFlows": [
                  {
                    "timeSlice": "string",
                    "value": 0
                  }
                ],
                "trainLoadings": [
                  {
                    "direction": "string",
                    "line": "string",
                    "lineDirection": "string",
                    "naptanTo": "string",
                    "platformDirection": "string",
                    "timeSlice": "string",
                    "value": 0
                  }
                ]
              },
              "fullName": "string",
              "id": "string",
              "motType": "string",
              "name": "string",
              "network": "string",
              "routeType": "Unknown",
              "status": "Unknown",
              "type": "string",
              "uri": "string"
            }
          ],
          "lon": 0,
          "modes": [
            "string"
          ],
          "naptanId": "string",
          "naptanMode": "string",
          "placeType": "string",
          "platformName": "string",
          "smsCode": "string",
          "stationNaptan": "string",
          "status": true,
          "stopLetter": "string",
          "stopType": "string",
          "url": "string"
        }
      ],
      "category": "Undefined",
      "categoryDescription": "string",
      "closureText": "string",
      "created": "1970-01-01T00:00:00Z",
      "description": "string",
      "lastUpdate": "1970-01-01T00:00:00Z",
      "summary": "string",
      "type": "string"
    }
  ],
  "id": "string",
  "lineStatuses": [
    {
      "created": "1970-01-01T00:00:00Z",
      "disruption": {
        "additionalInfo": "string",
        "affectedRoutes": [
          {
            "destinationName": "string",
            "direction": "string",
            "id": "string",
            "isEntireRouteSection": true,
            "lineId": "string",
            "lineString": "string",
            "name": "string",
            "originationName": "string",
            "routeCode": "string",
            "routeSectionNaptanEntrySequence": [
              {
                "ordinal": 0,
                "stopPoint": {
                  "accessibilitySummary": "string",
                  "additionalProperties": [
                    {
                      "category": "string",
                      "key": "string",
                      "modified": "1970-01-01T00:00:00Z",
                      "sourceSystemKey": "string",
                      "value": "string"
                    }
                  ],
                  "children": [
                    {
                      "additionalProperties": [
                        {
                          "category": "string",
                          "key": "string",
                          "modified": "1970-01-01T00:00:00Z",
                          "sourceSystemKey": "string",
                          "value": "string"
                        }
                      ],
                      "children": [
                        {}
                      ],
                      "childrenUrls": [
                        "string"
                      ],
                      "commonName": "string",
                      "distance": 0,
                      "id": "string",
                      "lat": 0,
                      "lon": 0,
                      "placeType": "string",
                      "url": "string"
                    }
                  ],
                  "childrenUrls": [
                    "string"
                  ],
                  "commonName": "string",
                  "distance": 0,
                  "fullName": "string",
                  "hubNaptanCode": "string",
                  "icsCode": "string",
                  "id": "string",
                  "indicator": "string",
                  "individualStopId": "string",
                  "lat": 0,
                  "lineGroup": [
                    {
                      "lineIdentifier": [
                        "string"
                      ],
                      "naptanIdReference": "string",
                      "stationAtcoCode": "string"
                    }
                  ],
                  "lineModeGroups": [
                    {
                      "lineIdentifier": [
                        "string"
                      ],
                      "modeName": "string"
                    }
                  ],
                  "lines": [
                    {
                      "crowding": {
                        "passengerFlows": [
                          {
                            "timeSlice": "string",
                            "value": 0
                          }
                        ],
                        "trainLoadings": [
                          {
                            "direction": "string",
                            "line": "string",
                            "lineDirection": "string",
                            "naptanTo": "string",
                            "platformDirection": "string",
                            "timeSlice": "string",
                            "value": 0
                          }
                        ]
                      },
                      "fullName": "string",
                      "id": "string",
                      "motType": "string",
                      "name": "string",
                      "network": "string",
                      "routeType": "Unknown",
                      "status": "Unknown",
                      "type": "string",
                      "uri": "string"
                    }
                  ],
                  "lon": 0,
                  "modes": [
                    "string"
                  ],
                  "naptanId": "string",
                  "naptanMode": "string",
                  "placeType": "string",
                  "platformName": "string",
                  "smsCode": "string",
                  "stationNaptan": "string",
                  "status": true,
                  "stopLetter": "string",
                  "stopType": "string",
                  "url": "string"
                }
              }
            ],
            "validFrom": "1970-01-01T00:00:00Z",
            "validTo": "1970-01-01T00:00:00Z",
            "via": {
              "ordinal": 0,
              "stopPoint": {
                "accessibilitySummary": "string",
                "additionalProperties": [
                  {
                    "category": "string",
                    "key": "string",
                    "modified": "1970-01-01T00:00:00Z",
                    "sourceSystemKey": "string",
                    "value": "string"
                  }
                ],
                "children": [
                  {
                    "additionalProperties": [
                      {
                        "category": "string",
                        "key": "string",
                        "modified": "1970-01-01T00:00:00Z",
                        "sourceSystemKey": "string",
                        "value": "string"
                      }
                    ],
                    "children": [
                      {}
                    ],
                    "childrenUrls": [
                      "string"
                    ],
                    "commonName": "string",
                    "distance": 0,
                    "id": "string",
                    "lat": 0,
                    "lon": 0,
                    "placeType": "string",
                    "url": "string"
                  }
                ],
                "childrenUrls": [
                  "string"
                ],
                "commonName": "string",
                "distance": 0,
                "fullName": "string",
                "hubNaptanCode": "string",
                "icsCode": "string",
                "id": "string",
                "indicator": "string",
                "individualStopId": "string",
                "lat": 0,
                "lineGroup": [
                  {
                    "lineIdentifier": [
                      "string"
                    ],
                    "naptanIdReference": "string",
                    "stationAtcoCode": "string"
                  }
                ],
                "lineModeGroups": [
                  {
                    "lineIdentifier": [
                      "string"
                    ],
                    "modeName": "string"
                  }
                ],
                "lines": [
                  {
                    "crowding": {
                      "passengerFlows": [
                        {
                          "timeSlice": "string",
                          "value": 0
                        }
                      ],
                      "trainLoadings": [
                        {
                          "direction": "string",
                          "line": "string",
                          "lineDirection": "string",
                          "naptanTo": "string",
                          "platformDirection": "string",
                          "timeSlice": "string",
                          "value": 0
                        }
                      ]
                    },
                    "fullName": "string",
                    "id": "string",
                    "motType": "string",
                    "name": "string",
                    "network": "string",
                    "routeType": "Unknown",
                    "status": "Unknown",
                    "type": "string",
                    "uri": "string"
                  }
                ],
                "lon": 0,
                "modes": [
                  "string"
                ],
                "naptanId": "string",
                "naptanMode": "string",
                "placeType": "string",
                "platformName": "string",
                "smsCode": "string",
                "stationNaptan": "string",
                "status": true,
                "stopLetter": "string",
                "stopType": "string",
                "url": "string"
              }
            }
          }
        ],
        "affectedStops": [
          {
            "accessibilitySummary": "string",
            "additionalProperties": [
              {
                "category": "string",
                "key": "string",
                "modified": "1970-01-01T00:00:00Z",
                "sourceSystemKey": "string",
                "value": "string"
              }
            ],
            "children": [
              {
                "additionalProperties": [
                  {
                    "category": "string",
                    "key": "string",
                    "modified": "1970-01-01T00:00:00Z",
                    "sourceSystemKey": "string",
                    "value": "string"
                  }
                ],
                "children": [
                  {}
                ],
                "childrenUrls": [
                  "string"
                ],
                "commonName": "string",
                "distance": 0,
                "id": "string",
                "lat": 0,
                "lon": 0,
                "placeType": "string",
                "url": "string"
              }
            ],
            "childrenUrls": [
              "string"
            ],
            "commonName": "string",
            "distance": 0,
            "fullName": "string",
            "hubNaptanCode": "string",
            "icsCode": "string",
            "id": "string",
            "indicator": "string",
            "individualStopId": "string",
            "lat": 0,
            "lineGroup": [
              {
                "lineIdentifier": [
                  "string"
                ],
                "naptanIdReference": "string",
                "stationAtcoCode": "string"
              }
            ],
            "lineModeGroups": [
              {
                "lineIdentifier": [
                  "string"
                ],
                "modeName": "string"
              }
            ],
            "lines": [
              {
                "crowding": {
                  "passengerFlows": [
                    {
                      "timeSlice": "string",
                      "value": 0
                    }
                  ],
                  "trainLoadings": [
                    {
                      "direction": "string",
                      "line": "string",
                      "lineDirection": "string",
                      "naptanTo": "string",
                      "platformDirection": "string",
                      "timeSlice": "string",
                      "value": 0
                    }
                  ]
                },
                "fullName": "string",
                "id": "string",
                "motType": "string",
                "name": "string",
                "network": "string",
                "routeType": "Unknown",
                "status": "Unknown",
                "type": "string",
                "uri": "string"
              }
            ],
            "lon": 0,
            "modes": [
              "string"
            ],
            "naptanId": "string",
            "naptanMode": "string",
            "placeType": "string",
            "platformName": "string",
            "smsCode": "string",
            "stationNaptan": "string",
            "status": true,
            "stopLetter": "string",
            "stopType": "string",
            "url": "string"
          }
        ],
        "category": "Undefined",
        "categoryDescription": "string",
        "closureText": "string",
        "created": "1970-01-01T00:00:00Z",
        "description": "string",
        "lastUpdate": "1970-01-01T00:00:00Z",
        "summary": "string",
        "type": "string"
      },
      "id": 0,
      "lineId": "string",
      "modified": "1970-01-01T00:00:00Z",
      "reason": "string",
      "statusSeverity": 0,
      "statusSeverityDescription": "string",
      "validityPeriods": [
        {
          "fromDate": "1970-01-01T00:00:00Z",
          "isNow": true,
          "toDate": "1970-01-01T00:00:00Z"
        }
      ]
    }
  ],
  "modeName": "string",
  "modified": "1970-01-01T00:00:00Z",
  "name": "string",
  "routeSections": [
    {
      "destination": "string",
      "destinationName": "string",
      "direction": "string",
      "name": "string",
      "originationName": "string",
      "originator": "string",
      "routeCode": "string",
      "serviceType": "string",
      "validFrom": "1970-01-01T00:00:00Z",
      "validTo": "1970-01-01T00:00:00Z"
    }
  ],
  "serviceTypes": [
    {
      "name": "string",
      "uri": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created|string(date-time)|false|none|none|
|crowding|[Tfl.Api.Presentation.Entities.Crowding](#schematfl.api.presentation.entities.crowding)|false|none|none|
|disruptions|[[Tfl.Api.Presentation.Entities.Disruption](#schematfl.api.presentation.entities.disruption)]|false|none|none|
|id|string|false|none|none|
|lineStatuses|[[Tfl.Api.Presentation.Entities.LineStatus](#schematfl.api.presentation.entities.linestatus)]|false|none|none|
|modeName|string|false|none|none|
|modified|string(date-time)|false|none|none|
|name|string|false|none|none|
|routeSections|[[Tfl.Api.Presentation.Entities.MatchedRoute](#schematfl.api.presentation.entities.matchedroute)]|false|none|none|
|serviceTypes|[[Tfl.Api.Presentation.Entities.LineServiceTypeInfo](#schematfl.api.presentation.entities.lineservicetypeinfo)]|false|none|none|

<h2 id="tocS_Tfl.Api.Presentation.Entities.LineGroup">Tfl.Api.Presentation.Entities.LineGroup</h2>
<!-- backwards compatibility -->
<a id="schematfl.api.presentation.entities.linegroup"></a>
<a id="schema_Tfl.Api.Presentation.Entities.LineGroup"></a>
<a id="tocStfl.api.presentation.entities.linegroup"></a>
<a id="tocstfl.api.presentation.entities.linegroup"></a>

```json
{
  "lineIdentifier": [
    "string"
  ],
  "naptanIdReference": "string",
  "stationAtcoCode": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lineIdentifier|[string]|false|none|none|
|naptanIdReference|string|false|none|none|
|stationAtcoCode|string|false|none|none|

<h2 id="tocS_Tfl.Api.Presentation.Entities.LineModeGroup">Tfl.Api.Presentation.Entities.LineModeGroup</h2>
<!-- backwards compatibility -->
<a id="schematfl.api.presentation.entities.linemodegroup"></a>
<a id="schema_Tfl.Api.Presentation.Entities.LineModeGroup"></a>
<a id="tocStfl.api.presentation.entities.linemodegroup"></a>
<a id="tocstfl.api.presentation.entities.linemodegroup"></a>

```json
{
  "lineIdentifier": [
    "string"
  ],
  "modeName": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lineIdentifier|[string]|false|none|none|
|modeName|string|false|none|none|

<h2 id="tocS_Tfl.Api.Presentation.Entities.LineRouteSection">Tfl.Api.Presentation.Entities.LineRouteSection</h2>
<!-- backwards compatibility -->
<a id="schematfl.api.presentation.entities.lineroutesection"></a>
<a id="schema_Tfl.Api.Presentation.Entities.LineRouteSection"></a>
<a id="tocStfl.api.presentation.entities.lineroutesection"></a>
<a id="tocstfl.api.presentation.entities.lineroutesection"></a>

```json
{
  "destination": "string",
  "direction": "string",
  "fromStation": "string",
  "routeId": 0,
  "serviceType": "string",
  "toStation": "string",
  "vehicleDestinationText": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|destination|string|false|none|none|
|direction|string|false|none|none|
|fromStation|string|false|none|none|
|routeId|integer(int32)|false|none|none|
|serviceType|string|false|none|none|
|toStation|string|false|none|none|
|vehicleDestinationText|string|false|none|none|

<h2 id="tocS_Tfl.Api.Presentation.Entities.LineServiceType">Tfl.Api.Presentation.Entities.LineServiceType</h2>
<!-- backwards compatibility -->
<a id="schematfl.api.presentation.entities.lineservicetype"></a>
<a id="schema_Tfl.Api.Presentation.Entities.LineServiceType"></a>
<a id="tocStfl.api.presentation.entities.lineservicetype"></a>
<a id="tocstfl.api.presentation.entities.lineservicetype"></a>

```json
{
  "lineName": "string",
  "lineSpecificServiceTypes": [
    {
      "serviceType": {
        "name": "string",
        "uri": "string"
      },
      "stopServesServiceType": true
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lineName|string|false|none|none|
|lineSpecificServiceTypes|[[Tfl.Api.Presentation.Entities.LineSpecificServiceType](#schematfl.api.presentation.entities.linespecificservicetype)]|false|none|none|

<h2 id="tocS_Tfl.Api.Presentation.Entities.LineServiceTypeInfo">Tfl.Api.Presentation.Entities.LineServiceTypeInfo</h2>
<!-- backwards compatibility -->
<a id="schematfl.api.presentation.entities.lineservicetypeinfo"></a>
<a id="schema_Tfl.Api.Presentation.Entities.LineServiceTypeInfo"></a>
<a id="tocStfl.api.presentation.entities.lineservicetypeinfo"></a>
<a id="tocstfl.api.presentation.entities.lineservicetypeinfo"></a>

```json
{
  "name": "string",
  "uri": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|uri|string|false|none|none|

<h2 id="tocS_Tfl.Api.Presentation.Entities.LineSpecificServiceType">Tfl.Api.Presentation.Entities.LineSpecificServiceType</h2>
<!-- backwards compatibility -->
<a id="schematfl.api.presentation.entities.linespecificservicetype"></a>
<a id="schema_Tfl.Api.Presentation.Entities.LineSpecificServiceType"></a>
<a id="tocStfl.api.presentation.entities.linespecificservicetype"></a>
<a id="tocstfl.api.presentation.entities.linespecificservicetype"></a>

```json
{
  "serviceType": {
    "name": "string",
    "uri": "string"
  },
  "stopServesServiceType": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|serviceType|[Tfl.Api.Presentation.Entities.LineServiceTypeInfo](#schematfl.api.presentation.entities.lineservicetypeinfo)|false|none|none|
|stopServesServiceType|boolean|false|none|none|

<h2 id="tocS_Tfl.Api.Presentation.Entities.LineStatus">Tfl.Api.Presentation.Entities.LineStatus</h2>
<!-- backwards compatibility -->
<a id="schematfl.api.presentation.entities.linestatus"></a>
<a id="schema_Tfl.Api.Presentation.Entities.LineStatus"></a>
<a id="tocStfl.api.presentation.entities.linestatus"></a>
<a id="tocstfl.api.presentation.entities.linestatus"></a>

```json
{
  "created": "1970-01-01T00:00:00Z",
  "disruption": {
    "additionalInfo": "string",
    "affectedRoutes": [
      {
        "destinationName": "string",
        "direction": "string",
        "id": "string",
        "isEntireRouteSection": true,
        "lineId": "string",
        "lineString": "string",
        "name": "string",
        "originationName": "string",
        "routeCode": "string",
        "routeSectionNaptanEntrySequence": [
          {
            "ordinal": 0,
            "stopPoint": {
              "accessibilitySummary": "string",
              "additionalProperties": [
                {
                  "category": "string",
                  "key": "string",
                  "modified": "1970-01-01T00:00:00Z",
                  "sourceSystemKey": "string",
                  "value": "string"
                }
              ],
              "children": [
                {
                  "additionalProperties": [
                    {
                      "category": "string",
                      "key": "string",
                      "modified": "1970-01-01T00:00:00Z",
                      "sourceSystemKey": "string",
                      "value": "string"
                    }
                  ],
                  "children": [
                    {}
                  ],
                  "childrenUrls": [
                    "string"
                  ],
                  "commonName": "string",
                  "distance": 0,
                  "id": "string",
                  "lat": 0,
                  "lon": 0,
                  "placeType": "string",
                  "url": "string"
                }
              ],
              "childrenUrls": [
                "string"
              ],
              "commonName": "string",
              "distance": 0,
              "fullName": "string",
              "hubNaptanCode": "string",
              "icsCode": "string",
              "id": "string",
              "indicator": "string",
              "individualStopId": "string",
              "lat": 0,
              "lineGroup": [
                {
                  "lineIdentifier": [
                    "string"
                  ],
                  "naptanIdReference": "string",
                  "stationAtcoCode": "string"
                }
              ],
              "lineModeGroups": [
                {
                  "lineIdentifier": [
                    "string"
                  ],
                  "modeName": "string"
                }
              ],
              "lines": [
                {
                  "crowding": {
                    "passengerFlows": [
                      {
                        "timeSlice": "string",
                        "value": 0
                      }
                    ],
                    "trainLoadings": [
                      {
                        "direction": "string",
                        "line": "string",
                        "lineDirection": "string",
                        "naptanTo": "string",
                        "platformDirection": "string",
                        "timeSlice": "string",
                        "value": 0
                      }
                    ]
                  },
                  "fullName": "string",
                  "id": "string",
                  "motType": "string",
                  "name": "string",
                  "network": "string",
                  "routeType": "Unknown",
                  "status": "Unknown",
                  "type": "string",
                  "uri": "string"
                }
              ],
              "lon": 0,
              "modes": [
                "string"
              ],
              "naptanId": "string",
              "naptanMode": "string",
              "placeType": "string",
              "platformName": "string",
              "smsCode": "string",
              "stationNaptan": "string",
              "status": true,
              "stopLetter": "string",
              "stopType": "string",
              "url": "string"
            }
          }
        ],
        "validFrom": "1970-01-01T00:00:00Z",
        "validTo": "1970-01-01T00:00:00Z",
        "via": {
          "ordinal": 0,
          "stopPoint": {
            "accessibilitySummary": "string",
            "additionalProperties": [
              {
                "category": "string",
                "key": "string",
                "modified": "1970-01-01T00:00:00Z",
                "sourceSystemKey": "string",
                "value": "string"
              }
            ],
            "children": [
              {
                "additionalProperties": [
                  {
                    "category": "string",
                    "key": "string",
                    "modified": "1970-01-01T00:00:00Z",
                    "sourceSystemKey": "string",
                    "value": "string"
                  }
                ],
                "children": [
                  {}
                ],
                "childrenUrls": [
                  "string"
                ],
                "commonName": "string",
                "distance": 0,
                "id": "string",
                "lat": 0,
                "lon": 0,
                "placeType": "string",
                "url": "string"
              }
            ],
            "childrenUrls": [
              "string"
            ],
            "commonName": "string",
            "distance": 0,
            "fullName": "string",
            "hubNaptanCode": "string",
            "icsCode": "string",
            "id": "string",
            "indicator": "string",
            "individualStopId": "string",
            "lat": 0,
            "lineGroup": [
              {
                "lineIdentifier": [
                  "string"
                ],
                "naptanIdReference": "string",
                "stationAtcoCode": "string"
              }
            ],
            "lineModeGroups": [
              {
                "lineIdentifier": [
                  "string"
                ],
                "modeName": "string"
              }
            ],
            "lines": [
              {
                "crowding": {
                  "passengerFlows": [
                    {
                      "timeSlice": "string",
                      "value": 0
                    }
                  ],
                  "trainLoadings": [
                    {
                      "direction": "string",
                      "line": "string",
                      "lineDirection": "string",
                      "naptanTo": "string",
                      "platformDirection": "string",
                      "timeSlice": "string",
                      "value": 0
                    }
                  ]
                },
                "fullName": "string",
                "id": "string",
                "motType": "string",
                "name": "string",
                "network": "string",
                "routeType": "Unknown",
                "status": "Unknown",
                "type": "string",
                "uri": "string"
              }
            ],
            "lon": 0,
            "modes": [
              "string"
            ],
            "naptanId": "string",
            "naptanMode": "string",
            "placeType": "string",
            "platformName": "string",
            "smsCode": "string",
            "stationNaptan": "string",
            "status": true,
            "stopLetter": "string",
            "stopType": "string",
            "url": "string"
          }
        }
      }
    ],
    "affectedStops": [
      {
        "accessibilitySummary": "string",
        "additionalProperties": [
          {
            "category": "string",
            "key": "string",
            "modified": "1970-01-01T00:00:00Z",
            "sourceSystemKey": "string",
            "value": "string"
          }
        ],
        "children": [
          {
            "additionalProperties": [
              {
                "category": "string",
                "key": "string",
                "modified": "1970-01-01T00:00:00Z",
                "sourceSystemKey": "string",
                "value": "string"
              }
            ],
            "children": [
              {}
            ],
            "childrenUrls": [
              "string"
            ],
            "commonName": "string",
            "distance": 0,
            "id": "string",
            "lat": 0,
            "lon": 0,
            "placeType": "string",
            "url": "string"
          }
        ],
        "childrenUrls": [
          "string"
        ],
        "commonName": "string",
        "distance": 0,
        "fullName": "string",
        "hubNaptanCode": "string",
        "icsCode": "string",
        "id": "string",
        "indicator": "string",
        "individualStopId": "string",
        "lat": 0,
        "lineGroup": [
          {
            "lineIdentifier": [
              "string"
            ],
            "naptanIdReference": "string",
            "stationAtcoCode": "string"
          }
        ],
        "lineModeGroups": [
          {
            "lineIdentifier": [
              "string"
            ],
            "modeName": "string"
          }
        ],
        "lines": [
          {
            "crowding": {
              "passengerFlows": [
                {
                  "timeSlice": "string",
                  "value": 0
                }
              ],
              "trainLoadings": [
                {
                  "direction": "string",
                  "line": "string",
                  "lineDirection": "string",
                  "naptanTo": "string",
                  "platformDirection": "string",
                  "timeSlice": "string",
                  "value": 0
                }
              ]
            },
            "fullName": "string",
            "id": "string",
            "motType": "string",
            "name": "string",
            "network": "string",
            "routeType": "Unknown",
            "status": "Unknown",
            "type": "string",
            "uri": "string"
          }
        ],
        "lon": 0,
        "modes": [
          "string"
        ],
        "naptanId": "string",
        "naptanMode": "string",
        "placeType": "string",
        "platformName": "string",
        "smsCode": "string",
        "stationNaptan": "string",
        "status": true,
        "stopLetter": "string",
        "stopType": "string",
        "url": "string"
      }
    ],
    "category": "Undefined",
    "categoryDescription": "string",
    "closureText": "string",
    "created": "1970-01-01T00:00:00Z",
    "description": "string",
    "lastUpdate": "1970-01-01T00:00:00Z",
    "summary": "string",
    "type": "string"
  },
  "id": 0,
  "lineId": "string",
  "modified": "1970-01-01T00:00:00Z",
  "reason": "string",
  "statusSeverity": 0,
  "statusSeverityDescription": "string",
  "validityPeriods": [
    {
      "fromDate": "1970-01-01T00:00:00Z",
      "isNow": true,
      "toDate": "1970-01-01T00:00:00Z"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created|string(date-time)|false|none|none|
|disruption|[Tfl.Api.Presentation.Entities.Disruption](#schematfl.api.presentation.entities.disruption)|false|none|Represents a disruption to a route within the transport network.|
|id|integer(int32)|false|none|none|
|lineId|string|false|none|none|
|modified|string(date-time)|false|none|none|
|reason|string|false|none|none|
|statusSeverity|integer(int32)|false|none|none|
|statusSeverityDescription|string|false|none|none|
|validityPeriods|[[Tfl.Api.Presentation.Entities.ValidityPeriod](#schematfl.api.presentation.entities.validityperiod)]|false|none|none|

<h2 id="tocS_Tfl.Api.Presentation.Entities.MatchedRoute">Tfl.Api.Presentation.Entities.MatchedRoute</h2>
<!-- backwards compatibility -->
<a id="schematfl.api.presentation.entities.matchedroute"></a>
<a id="schema_Tfl.Api.Presentation.Entities.MatchedRoute"></a>
<a id="tocStfl.api.presentation.entities.matchedroute"></a>
<a id="tocstfl.api.presentation.entities.matchedroute"></a>

```json
{
  "destination": "string",
  "destinationName": "string",
  "direction": "string",
  "name": "string",
  "originationName": "string",
  "originator": "string",
  "routeCode": "string",
  "serviceType": "string",
  "validFrom": "1970-01-01T00:00:00Z",
  "validTo": "1970-01-01T00:00:00Z"
}
```

Description of a Route used in Route search results.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|destination|string|false|none|The Id (NaPTAN code) or the Destination StopPoint|
|destinationName|string|false|none|The name of the Destination StopPoint|
|direction|string|false|none|Inbound or Outbound|
|name|string|false|none|Name such as "72"|
|originationName|string|false|none|The name of the Origin StopPoint|
|originator|string|false|none|The Id (NaPTAN code) of the Origin StopPoint|
|routeCode|string|false|none|The route code|
|serviceType|string|false|none|Regular or Night|
|validFrom|string(date-time)|false|none|The DateTime that the Service containing this Route is valid from.|
|validTo|string(date-time)|false|none|The DateTime that the Service containing this Route is valid until.|

<h2 id="tocS_Tfl.Api.Presentation.Entities.MatchedRouteSections">Tfl.Api.Presentation.Entities.MatchedRouteSections</h2>
<!-- backwards compatibility -->
<a id="schematfl.api.presentation.entities.matchedroutesections"></a>
<a id="schema_Tfl.Api.Presentation.Entities.MatchedRouteSections"></a>
<a id="tocStfl.api.presentation.entities.matchedroutesections"></a>
<a id="tocstfl.api.presentation.entities.matchedroutesections"></a>

```json
{
  "id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|

<h2 id="tocS_Tfl.Api.Presentation.Entities.MatchedStop">Tfl.Api.Presentation.Entities.MatchedStop</h2>
<!-- backwards compatibility -->
<a id="schematfl.api.presentation.entities.matchedstop"></a>
<a id="schema_Tfl.Api.Presentation.Entities.MatchedStop"></a>
<a id="tocStfl.api.presentation.entities.matchedstop"></a>
<a id="tocstfl.api.presentation.entities.matchedstop"></a>

```json
{
  "accessibilitySummary": "string",
  "direction": "string",
  "hasDisruption": true,
  "icsId": "string",
  "id": "string",
  "lat": 0,
  "lines": [
    {
      "crowding": {
        "passengerFlows": [
          {
            "timeSlice": "string",
            "value": 0
          }
        ],
        "trainLoadings": [
          {
            "direction": "string",
            "line": "string",
            "lineDirection": "string",
            "naptanTo": "string",
            "platformDirection": "string",
            "timeSlice": "string",
            "value": 0
          }
        ]
      },
      "fullName": "string",
      "id": "string",
      "motType": "string",
      "name": "string",
      "network": "string",
      "routeType": "Unknown",
      "status": "Unknown",
      "type": "string",
      "uri": "string"
    }
  ],
  "lon": 0,
  "modes": [
    "string"
  ],
  "name": "string",
  "parentId": "string",
  "routeId": 0,
  "stationId": "string",
  "status": true,
  "stopLetter": "string",
  "stopType": "string",
  "topMostParentId": "string",
  "towards": "string",
  "url": "string",
  "zone": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accessibilitySummary|string|false|none|none|
|direction|string|false|none|none|
|hasDisruption|boolean|false|none|none|
|icsId|string|false|none|none|
|id|string|false|none|none|
|lat|number(double)|false|none|none|
|lines|[[Tfl.Api.Presentation.Entities.Identifier](#schematfl.api.presentation.entities.identifier)]|false|none|none|
|lon|number(double)|false|none|none|
|modes|[string]|false|none|none|
|name|string|false|none|none|
|parentId|string|false|none|none|
|routeId|integer(int32)|false|none|none|
|stationId|string|false|none|none|
|status|boolean|false|none|none|
|stopLetter|string|false|none|none|
|stopType|string|false|none|none|
|topMostParentId|string|false|none|none|
|towards|string|false|none|none|
|url|string|false|none|none|
|zone|string|false|none|none|

<h2 id="tocS_Tfl.Api.Presentation.Entities.Message">Tfl.Api.Presentation.Entities.Message</h2>
<!-- backwards compatibility -->
<a id="schematfl.api.presentation.entities.message"></a>
<a id="schema_Tfl.Api.Presentation.Entities.Message"></a>
<a id="tocStfl.api.presentation.entities.message"></a>
<a id="tocstfl.api.presentation.entities.message"></a>

```json
{
  "bulletOrder": 0,
  "header": true,
  "linkText": "string",
  "messageText": "string",
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bulletOrder|integer(int32)|false|none|none|
|header|boolean|false|none|none|
|linkText|string|false|none|none|
|messageText|string|false|none|none|
|url|string|false|none|none|

<h2 id="tocS_Tfl.Api.Presentation.Entities.Mode">Tfl.Api.Presentation.Entities.Mode</h2>
<!-- backwards compatibility -->
<a id="schematfl.api.presentation.entities.mode"></a>
<a id="schema_Tfl.Api.Presentation.Entities.Mode"></a>
<a id="tocStfl.api.presentation.entities.mode"></a>
<a id="tocstfl.api.presentation.entities.mode"></a>

```json
{
  "isFarePaying": true,
  "isScheduledService": true,
  "isTflService": true,
  "modeName": "string",
  "motType": "string",
  "network": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|isFarePaying|boolean|false|none|none|
|isScheduledService|boolean|false|none|none|
|isTflService|boolean|false|none|none|
|modeName|string|false|none|none|
|motType|string|false|none|none|
|network|string|false|none|none|

<h2 id="tocS_Tfl.Api.Presentation.Entities.NetworkStatus">Tfl.Api.Presentation.Entities.NetworkStatus</h2>
<!-- backwards compatibility -->
<a id="schematfl.api.presentation.entities.networkstatus"></a>
<a id="schema_Tfl.Api.Presentation.Entities.NetworkStatus"></a>
<a id="tocStfl.api.presentation.entities.networkstatus"></a>
<a id="tocstfl.api.presentation.entities.networkstatus"></a>

```json
{
  "message": "string",
  "operator": "string",
  "status": "string",
  "statusLevel": 0
}
```

Represent travel network status

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|operator|string|false|none|none|
|status|string|false|none|none|
|statusLevel|integer(int32)|false|none|none|

<h2 id="tocS_Tfl.Api.Presentation.Entities.OrderedRoute">Tfl.Api.Presentation.Entities.OrderedRoute</h2>
<!-- backwards compatibility -->
<a id="schematfl.api.presentation.entities.orderedroute"></a>
<a id="schema_Tfl.Api.Presentation.Entities.OrderedRoute"></a>
<a id="tocStfl.api.presentation.entities.orderedroute"></a>
<a id="tocstfl.api.presentation.entities.orderedroute"></a>

```json
{
  "name": "string",
  "naptanIds": [
    "string"
  ],
  "serviceType": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|naptanIds|[string]|false|none|none|
|serviceType|string|false|none|none|

<h2 id="tocS_Tfl.Api.Presentation.Entities.PassengerFlow">Tfl.Api.Presentation.Entities.PassengerFlow</h2>
<!-- backwards compatibility -->
<a id="schematfl.api.presentation.entities.passengerflow"></a>
<a id="schema_Tfl.Api.Presentation.Entities.PassengerFlow"></a>
<a id="tocStfl.api.presentation.entities.passengerflow"></a>
<a id="tocstfl.api.presentation.entities.passengerflow"></a>

```json
{
  "timeSlice": "string",
  "value": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|timeSlice|string|false|none|Time in 24hr format with 15 minute intervals e.g. 0500-0515, 0515-0530 etc.|
|value|integer(int32)|false|none|Count of passenger flow towards a platform|

<h2 id="tocS_Tfl.Api.Presentation.Entities.PathAttribute">Tfl.Api.Presentation.Entities.PathAttribute</h2>
<!-- backwards compatibility -->
<a id="schematfl.api.presentation.entities.pathattribute"></a>
<a id="schema_Tfl.Api.Presentation.Entities.PathAttribute"></a>
<a id="tocStfl.api.presentation.entities.pathattribute"></a>
<a id="tocstfl.api.presentation.entities.pathattribute"></a>

```json
{
  "name": "string",
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|value|string|false|none|none|

<h2 id="tocS_Tfl.Api.Presentation.Entities.Period">Tfl.Api.Presentation.Entities.Period</h2>
<!-- backwards compatibility -->
<a id="schematfl.api.presentation.entities.period"></a>
<a id="schema_Tfl.Api.Presentation.Entities.Period"></a>
<a id="tocStfl.api.presentation.entities.period"></a>
<a id="tocstfl.api.presentation.entities.period"></a>

```json
{
  "frequency": {
    "highestFrequency": 0,
    "lowestFrequency": 0
  },
  "fromTime": {
    "hour": "string",
    "minute": "string"
  },
  "toTime": {
    "hour": "string",
    "minute": "string"
  },
  "type": "Normal"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|frequency|[Tfl.Api.Presentation.Entities.ServiceFrequency](#schematfl.api.presentation.entities.servicefrequency)|false|none|none|
|fromTime|[Tfl.Api.Presentation.Entities.TwentyFourHourClockTime](#schematfl.api.presentation.entities.twentyfourhourclocktime)|false|none|none|
|toTime|[Tfl.Api.Presentation.Entities.TwentyFourHourClockTime](#schematfl.api.presentation.entities.twentyfourhourclocktime)|false|none|none|
|type|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|Normal|
|type|FrequencyHours|
|type|FrequencyMinutes|
|type|Unknown|

<h2 id="tocS_Tfl.Api.Presentation.Entities.Place">Tfl.Api.Presentation.Entities.Place</h2>
<!-- backwards compatibility -->
<a id="schematfl.api.presentation.entities.place"></a>
<a id="schema_Tfl.Api.Presentation.Entities.Place"></a>
<a id="tocStfl.api.presentation.entities.place"></a>
<a id="tocstfl.api.presentation.entities.place"></a>

```json
{
  "additionalProperties": [
    {
      "category": "string",
      "key": "string",
      "modified": "1970-01-01T00:00:00Z",
      "sourceSystemKey": "string",
      "value": "string"
    }
  ],
  "children": [
    {
      "additionalProperties": [
        {
          "category": "string",
          "key": "string",
          "modified": "1970-01-01T00:00:00Z",
          "sourceSystemKey": "string",
          "value": "string"
        }
      ],
      "children": [
        {}
      ],
      "childrenUrls": [
        "string"
      ],
      "commonName": "string",
      "distance": 0,
      "id": "string",
      "lat": 0,
      "lon": 0,
      "placeType": "string",
      "url": "string"
    }
  ],
  "childrenUrls": [
    "string"
  ],
  "commonName": "string",
  "distance": 0,
  "id": "string",
  "lat": 0,
  "lon": 0,
  "placeType": "string",
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalProperties|[[Tfl.Api.Presentation.Entities.AdditionalProperties](#schematfl.api.presentation.entities.additionalproperties)]|false|none|A bag of additional key/value pairs with extra information about this place.|
|children|[[Tfl.Api.Presentation.Entities.Place](#schematfl.api.presentation.entities.place)]|false|none|none|
|childrenUrls|[string]|false|none|none|
|commonName|string|false|none|A human readable name.|
|distance|number(double)|false|none|The distance of the place from its search point, if this is the result<br>            of a geographical search, otherwise zero.|
|id|string|false|none|A unique identifier.|
|lat|number(double)|false|none|WGS84 latitude of the location.|
|lon|number(double)|false|none|WGS84 longitude of the location.|
|placeType|string|false|none|The type of Place. See /Place/Meta/placeTypes for possible values.|
|url|string|false|none|The unique location of this resource.|

<h2 id="tocS_Tfl.Api.Presentation.Entities.PlaceCategory">Tfl.Api.Presentation.Entities.PlaceCategory</h2>
<!-- backwards compatibility -->
<a id="schematfl.api.presentation.entities.placecategory"></a>
<a id="schema_Tfl.Api.Presentation.Entities.PlaceCategory"></a>
<a id="tocStfl.api.presentation.entities.placecategory"></a>
<a id="tocstfl.api.presentation.entities.placecategory"></a>

```json
{
  "availableKeys": [
    "string"
  ],
  "category": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|availableKeys|[string]|false|none|none|
|category|string|false|none|none|

<h2 id="tocS_Tfl.Api.Presentation.Entities.PlacePolygon">Tfl.Api.Presentation.Entities.PlacePolygon</h2>
<!-- backwards compatibility -->
<a id="schematfl.api.presentation.entities.placepolygon"></a>
<a id="schema_Tfl.Api.Presentation.Entities.PlacePolygon"></a>
<a id="tocStfl.api.presentation.entities.placepolygon"></a>
<a id="tocstfl.api.presentation.entities.placepolygon"></a>

```json
{
  "commonName": "string",
  "geoPoints": [
    {
      "lat": 0,
      "lon": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|commonName|string|false|none|none|
|geoPoints|[[Tfl.Api.Common.GeoPoint](#schematfl.api.common.geopoint)]|false|none|none|

<h2 id="tocS_Tfl.Api.Presentation.Entities.Point">Tfl.Api.Presentation.Entities.Point</h2>
<!-- backwards compatibility -->
<a id="schematfl.api.presentation.entities.point"></a>
<a id="schema_Tfl.Api.Presentation.Entities.Point"></a>
<a id="tocStfl.api.presentation.entities.point"></a>
<a id="tocstfl.api.presentation.entities.point"></a>

```json
{
  "lat": 0,
  "lon": 0
}
```

Represents a point located at a latitude and longitude using the WGS84 co-ordinate system.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lat|number(double)|false|none|WGS84 latitude of the location.|
|lon|number(double)|false|none|WGS84 longitude of the location.|

<h2 id="tocS_Tfl.Api.Presentation.Entities.Prediction">Tfl.Api.Presentation.Entities.Prediction</h2>
<!-- backwards compatibility -->
<a id="schematfl.api.presentation.entities.prediction"></a>
<a id="schema_Tfl.Api.Presentation.Entities.Prediction"></a>
<a id="tocStfl.api.presentation.entities.prediction"></a>
<a id="tocstfl.api.presentation.entities.prediction"></a>

```json
{
  "bearing": "string",
  "currentLocation": "string",
  "destinationName": "string",
  "destinationNaptanId": "string",
  "direction": "string",
  "expectedArrival": "1970-01-01T00:00:00Z",
  "id": "string",
  "lineId": "string",
  "lineName": "string",
  "modeName": "string",
  "naptanId": "string",
  "operationType": 0,
  "platformName": "string",
  "stationName": "string",
  "timeToLive": "1970-01-01T00:00:00Z",
  "timeToStation": 0,
  "timestamp": "1970-01-01T00:00:00Z",
  "timing": {
    "countdownServerAdjustment": "string",
    "insert": "1970-01-01T00:00:00Z",
    "read": "1970-01-01T00:00:00Z",
    "received": "1970-01-01T00:00:00Z",
    "sent": "1970-01-01T00:00:00Z",
    "source": "1970-01-01T00:00:00Z"
  },
  "towards": "string",
  "vehicleId": "string"
}
```

DTO to capture the prediction details

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bearing|string|false|none|Bearing (between 0 to 359)|
|currentLocation|string|false|none|The current location of the vehicle.|
|destinationName|string|false|none|Name of the destination|
|destinationNaptanId|string|false|none|Naptan Identifier for the prediction's destination|
|direction|string|false|none|Direction (unified to inbound/outbound)|
|expectedArrival|string(date-time)|false|none|The expected arrival time of the vehicle at the stop/station|
|id|string|false|none|The identitier for the prediction|
|lineId|string|false|none|Unique identifier for the Line|
|lineName|string|false|none|Line Name|
|modeName|string|false|none|The mode name of the station/line the prediction relates to|
|naptanId|string|false|none|Identifier for the prediction|
|operationType|integer(int32)|false|none|The type of the operation (1: is new or has been updated, 2: should be deleted from any client cache)|
|platformName|string|false|none|Platform name (for bus, this is the stop letter)|
|stationName|string|false|none|Station name|
|timeToLive|string(date-time)|false|none|The expiry time for the prediction|
|timeToStation|integer(int32)|false|none|Prediction of the Time to station in seconds|
|timestamp|string(date-time)|false|none|Timestamp for when the prediction was inserted/modified (source column drives what objects are broadcast on each iteration)|
|timing|[Tfl.Api.Presentation.Entities.PredictionTiming](#schematfl.api.presentation.entities.predictiontiming)|false|none|none|
|towards|string|false|none|Routing information or other descriptive text about the path of the vehicle towards the destination|
|vehicleId|string|false|none|The actual vehicle in transit (for train modes, the leading car of the rolling set)|

<h2 id="tocS_Tfl.Api.Presentation.Entities.PredictionTiming">Tfl.Api.Presentation.Entities.PredictionTiming</h2>
<!-- backwards compatibility -->
<a id="schematfl.api.presentation.entities.predictiontiming"></a>
<a id="schema_Tfl.Api.Presentation.Entities.PredictionTiming"></a>
<a id="tocStfl.api.presentation.entities.predictiontiming"></a>
<a id="tocstfl.api.presentation.entities.predictiontiming"></a>

```json
{
  "countdownServerAdjustment": "string",
  "insert": "1970-01-01T00:00:00Z",
  "read": "1970-01-01T00:00:00Z",
  "received": "1970-01-01T00:00:00Z",
  "sent": "1970-01-01T00:00:00Z",
  "source": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|countdownServerAdjustment|string|false|none|none|
|insert|string(date-time)|false|none|none|
|read|string(date-time)|false|none|none|
|received|string(date-time)|false|none|none|
|sent|string(date-time)|false|none|none|
|source|string(date-time)|false|none|none|

<h2 id="tocS_Tfl.Api.Presentation.Entities.Redirect">Tfl.Api.Presentation.Entities.Redirect</h2>
<!-- backwards compatibility -->
<a id="schematfl.api.presentation.entities.redirect"></a>
<a id="schema_Tfl.Api.Presentation.Entities.Redirect"></a>
<a id="tocStfl.api.presentation.entities.redirect"></a>
<a id="tocstfl.api.presentation.entities.redirect"></a>

```json
{
  "active": true,
  "longUrl": "string",
  "shortUrl": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|active|boolean|false|none|none|
|longUrl|string|false|none|none|
|shortUrl|string|false|none|none|

<h2 id="tocS_Tfl.Api.Presentation.Entities.RoadCorridor">Tfl.Api.Presentation.Entities.RoadCorridor</h2>
<!-- backwards compatibility -->
<a id="schematfl.api.presentation.entities.roadcorridor"></a>
<a id="schema_Tfl.Api.Presentation.Entities.RoadCorridor"></a>
<a id="tocStfl.api.presentation.entities.roadcorridor"></a>
<a id="tocstfl.api.presentation.entities.roadcorridor"></a>

```json
{
  "bounds": "string",
  "displayName": "string",
  "envelope": "string",
  "group": "string",
  "id": "string",
  "statusAggregationEndDate": "1970-01-01T00:00:00Z",
  "statusAggregationStartDate": "1970-01-01T00:00:00Z",
  "statusSeverity": "string",
  "statusSeverityDescription": "string",
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bounds|string|false|none|The Bounds of the Corridor, given by the south-east followed by the north-west co-ordinate<br>            pair in geoJSON format e.g. "[[-1.241531,51.242151],[1.641223,53.765721]]"|
|displayName|string|false|none|The display name of the Corridor e.g. "North Circular (A406)". This<br>            may be identical to the Id.|
|envelope|string|false|none|The Envelope of the Corridor, given by the corner co-ordinates of a rectangular (four-point) polygon<br>            in geoJSON format e.g. "[[-1.241531,51.242151],[-1.241531,53.765721],[1.641223,53.765721],[1.641223,51.242151]]"|
|group|string|false|none|The group name of the Corridor e.g. "Central London". Most corridors are not grouped, in which case this field can be null.|
|id|string|false|none|The Id of the Corridor e.g. "A406"|
|statusAggregationEndDate|string(date-time)|false|none|The end of the period over which status has been aggregated, or null if this is the current corridor status.|
|statusAggregationStartDate|string(date-time)|false|none|The start of the period over which status has been aggregated, or null if this is the current corridor status.|
|statusSeverity|string|false|none|Standard multi-mode status severity code|
|statusSeverityDescription|string|false|none|Description of the status severity as applied to RoadCorridors|
|url|string|false|none|URL to retrieve this Corridor.|

<h2 id="tocS_Tfl.Api.Presentation.Entities.RoadDisruption">Tfl.Api.Presentation.Entities.RoadDisruption</h2>
<!-- backwards compatibility -->
<a id="schematfl.api.presentation.entities.roaddisruption"></a>
<a id="schema_Tfl.Api.Presentation.Entities.RoadDisruption"></a>
<a id="tocStfl.api.presentation.entities.roaddisruption"></a>
<a id="tocstfl.api.presentation.entities.roaddisruption"></a>

```json
{
  "category": "string",
  "comments": "string",
  "corridorIds": [
    "string"
  ],
  "currentUpdate": "string",
  "currentUpdateDateTime": "1970-01-01T00:00:00Z",
  "endDateTime": "1970-01-01T00:00:00Z",
  "geography": {
    "geography": {
      "coordinateSystemId": 0,
      "wellKnownBinary": "string",
      "wellKnownText": "string"
    }
  },
  "geometry": {
    "geography": {
      "coordinateSystemId": 0,
      "wellKnownBinary": "string",
      "wellKnownText": "string"
    }
  },
  "hasClosures": true,
  "id": "string",
  "isProvisional": true,
  "lastModifiedTime": "1970-01-01T00:00:00Z",
  "levelOfInterest": "string",
  "linkText": "string",
  "linkUrl": "string",
  "location": "string",
  "ordinal": 0,
  "point": "string",
  "publishEndDate": "1970-01-01T00:00:00Z",
  "publishStartDate": "1970-01-01T00:00:00Z",
  "recurringSchedules": [
    {
      "endTime": "1970-01-01T00:00:00Z",
      "startTime": "1970-01-01T00:00:00Z"
    }
  ],
  "roadDisruptionImpactAreas": [
    {
      "endDate": "1970-01-01T00:00:00Z",
      "endTime": "string",
      "id": 0,
      "polygon": {
        "geography": {
          "coordinateSystemId": 0,
          "wellKnownBinary": "string",
          "wellKnownText": "string"
        }
      },
      "roadDisruptionId": "string",
      "startDate": "1970-01-01T00:00:00Z",
      "startTime": "string"
    }
  ],
  "roadDisruptionLines": [
    {
      "endDate": "1970-01-01T00:00:00Z",
      "endTime": "string",
      "id": 0,
      "isDiversion": true,
      "multiLineString": {
        "geography": {
          "coordinateSystemId": 0,
          "wellKnownBinary": "string",
          "wellKnownText": "string"
        }
      },
      "roadDisruptionId": "string",
      "startDate": "1970-01-01T00:00:00Z",
      "startTime": "string"
    }
  ],
  "roadProject": {
    "boroughsBenefited": [
      "string"
    ],
    "constructionEndDate": "1970-01-01T00:00:00Z",
    "constructionStartDate": "1970-01-01T00:00:00Z",
    "consultationEndDate": "1970-01-01T00:00:00Z",
    "consultationPageUrl": "string",
    "consultationStartDate": "1970-01-01T00:00:00Z",
    "contactEmail": "string",
    "contactName": "string",
    "cycleSuperhighwayId": "string",
    "externalPageUrl": "string",
    "phase": "Unscoped",
    "projectDescription": "string",
    "projectId": "string",
    "projectName": "string",
    "projectPageUrl": "string",
    "projectSummaryPageUrl": "string",
    "schemeName": "string"
  },
  "severity": "string",
  "startDateTime": "1970-01-01T00:00:00Z",
  "status": "string",
  "streets": [
    {
      "closure": "string",
      "directions": "string",
      "name": "string",
      "segments": [
        {
          "lineString": "string",
          "sourceSystemId": 0,
          "sourceSystemKey": "string",
          "toid": "string"
        }
      ],
      "sourceSystemId": 0,
      "sourceSystemKey": "string"
    }
  ],
  "subCategory": "string",
  "timeFrame": "string",
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category|string|false|none|Describes the nature of disruption e.g. Traffic Incidents, Works|
|comments|string|false|none|Full text of comments describing the disruption, including details of any road closures and diversions, where appropriate.|
|corridorIds|[string]|false|none|The Ids of affected corridors, if any.|
|currentUpdate|string|false|none|Text of the most recent update from the LSTCC on the state of the<br>             disruption, including the current traffic impact and any advice to<br>             road users.|
|currentUpdateDateTime|string(date-time)|false|none|The time when the last CurrentUpdate description was recorded, <br>            or null if no CurrentUpdate has been applied.|
|endDateTime|string(date-time)|false|none|The date and time on which the disruption ended. For planned disruptions, this date will have a valid value. For unplanned <br>            disruptions in progress, this field will be omitted.|
|geography|[System.Data.Spatial.DbGeography](#schemasystem.data.spatial.dbgeography)|false|none|none|
|geometry|[System.Data.Spatial.DbGeography](#schemasystem.data.spatial.dbgeography)|false|none|none|
|hasClosures|boolean|false|none|True if any of the affected Streets have a "Full Closure" status, false otherwise. A RoadDisruption that has HasClosures is considered a <br>            Severe or Serious disruption for severity filtering purposes.|
|id|string|false|none|Unique identifier for the road disruption|
|isProvisional|boolean|false|none|True if the disruption is planned on a future date that is open to change|
|lastModifiedTime|string(date-time)|false|none|The date and time on which the disruption was last modified in the system. This information can reliably be used by a developer to quickly<br>            compare two instances of the same disruption to determine if it has been changed.|
|levelOfInterest|string|false|none|This describes the level of potential impact on traffic operations of the disruption. <br>            High = e.g. a one-off disruption on a major or high profile route which will require a high level of operational attention <br>            Medium = This is the default value <br>            Low = e.g. a frequently occurring disruption which is well known|
|linkText|string|false|none|The text of any associated link|
|linkUrl|string|false|none|The url of any associated link|
|location|string|false|none|Main road name / number (borough) or preset area name where the disruption is located. This might be useful for a map popup where space is limited.|
|ordinal|integer(int32)|false|none|An ordinal of the disruption based on severity, level of interest and corridor.|
|point|string|false|none|Latitude and longitude (WGS84) of the centroid of the disruption, stored in a geoJSON-formatted string.|
|publishEndDate|string(date-time)|false|none|none|
|publishStartDate|string(date-time)|false|none|TDM Additional properties|
|recurringSchedules|[[Tfl.Api.Presentation.Entities.RoadDisruptionSchedule](#schematfl.api.presentation.entities.roaddisruptionschedule)]|false|none|none|
|roadDisruptionImpactAreas|[[Tfl.Api.Presentation.Entities.RoadDisruptionImpactArea](#schematfl.api.presentation.entities.roaddisruptionimpactarea)]|false|none|none|
|roadDisruptionLines|[[Tfl.Api.Presentation.Entities.RoadDisruptionLine](#schematfl.api.presentation.entities.roaddisruptionline)]|false|none|none|
|roadProject|[Tfl.Api.Presentation.Entities.RoadProject](#schematfl.api.presentation.entities.roadproject)|false|none|none|
|severity|string|false|none|A description of the severity of the disruption.|
|startDateTime|string(date-time)|false|none|The date and time which the disruption started. For a planned disruption (i.e. planned road works) this date will be in the future.<br>            For unplanned disruptions, this will default to the date on which the disruption was first recorded, but may be adjusted by the operator.|
|status|string|false|none|This describes the status of the disruption.  <br>            Active = currently in progress <br>            Active Long Term = currently in progress and long term<br>            Scheduled = scheduled to start within the next 180 days<br>            Recurring Works = planned maintenance works that follow a regular routine or pattern and whose next occurrence is to start within the next 180 days.<br>            Recently Cleared = recently cleared in the last 24 hours<br>            Note that the status of Scheduled or Recurring Works disruptions will change to Active when they start, and will change status again when they end.|
|streets|[[Tfl.Api.Presentation.Entities.Street](#schematfl.api.presentation.entities.street)]|false|none|A collection of zero or more streets affected by the disruption.|
|subCategory|string|false|none|Describes the sub-category of disruption e.g. Collapsed Manhole, Abnormal Load|
|timeFrame|string|false|none|none|
|url|string|false|none|URL to retrieve this road disruption|

<h2 id="tocS_Tfl.Api.Presentation.Entities.RoadDisruptionImpactArea">Tfl.Api.Presentation.Entities.RoadDisruptionImpactArea</h2>
<!-- backwards compatibility -->
<a id="schematfl.api.presentation.entities.roaddisruptionimpactarea"></a>
<a id="schema_Tfl.Api.Presentation.Entities.RoadDisruptionImpactArea"></a>
<a id="tocStfl.api.presentation.entities.roaddisruptionimpactarea"></a>
<a id="tocstfl.api.presentation.entities.roaddisruptionimpactarea"></a>

```json
{
  "endDate": "1970-01-01T00:00:00Z",
  "endTime": "string",
  "id": 0,
  "polygon": {
    "geography": {
      "coordinateSystemId": 0,
      "wellKnownBinary": "string",
      "wellKnownText": "string"
    }
  },
  "roadDisruptionId": "string",
  "startDate": "1970-01-01T00:00:00Z",
  "startTime": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endDate|string(date-time)|false|none|none|
|endTime|string|false|none|none|
|id|integer(int32)|false|none|none|
|polygon|[System.Data.Spatial.DbGeography](#schemasystem.data.spatial.dbgeography)|false|none|none|
|roadDisruptionId|string|false|none|none|
|startDate|string(date-time)|false|none|none|
|startTime|string|false|none|none|

<h2 id="tocS_Tfl.Api.Presentation.Entities.RoadDisruptionLine">Tfl.Api.Presentation.Entities.RoadDisruptionLine</h2>
<!-- backwards compatibility -->
<a id="schematfl.api.presentation.entities.roaddisruptionline"></a>
<a id="schema_Tfl.Api.Presentation.Entities.RoadDisruptionLine"></a>
<a id="tocStfl.api.presentation.entities.roaddisruptionline"></a>
<a id="tocstfl.api.presentation.entities.roaddisruptionline"></a>

```json
{
  "endDate": "1970-01-01T00:00:00Z",
  "endTime": "string",
  "id": 0,
  "isDiversion": true,
  "multiLineString": {
    "geography": {
      "coordinateSystemId": 0,
      "wellKnownBinary": "string",
      "wellKnownText": "string"
    }
  },
  "roadDisruptionId": "string",
  "startDate": "1970-01-01T00:00:00Z",
  "startTime": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endDate|string(date-time)|false|none|none|
|endTime|string|false|none|none|
|id|integer(int32)|false|none|none|
|isDiversion|boolean|false|none|none|
|multiLineString|[System.Data.Spatial.DbGeography](#schemasystem.data.spatial.dbgeography)|false|none|none|
|roadDisruptionId|string|false|none|none|
|startDate|string(date-time)|false|none|none|
|startTime|string|false|none|none|

<h2 id="tocS_Tfl.Api.Presentation.Entities.RoadDisruptionSchedule">Tfl.Api.Presentation.Entities.RoadDisruptionSchedule</h2>
<!-- backwards compatibility -->
<a id="schematfl.api.presentation.entities.roaddisruptionschedule"></a>
<a id="schema_Tfl.Api.Presentation.Entities.RoadDisruptionSchedule"></a>
<a id="tocStfl.api.presentation.entities.roaddisruptionschedule"></a>
<a id="tocstfl.api.presentation.entities.roaddisruptionschedule"></a>

```json
{
  "endTime": "1970-01-01T00:00:00Z",
  "startTime": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endTime|string(date-time)|false|none|none|
|startTime|string(date-time)|false|none|none|

<h2 id="tocS_Tfl.Api.Presentation.Entities.RoadProject">Tfl.Api.Presentation.Entities.RoadProject</h2>
<!-- backwards compatibility -->
<a id="schematfl.api.presentation.entities.roadproject"></a>
<a id="schema_Tfl.Api.Presentation.Entities.RoadProject"></a>
<a id="tocStfl.api.presentation.entities.roadproject"></a>
<a id="tocstfl.api.presentation.entities.roadproject"></a>

```json
{
  "boroughsBenefited": [
    "string"
  ],
  "constructionEndDate": "1970-01-01T00:00:00Z",
  "constructionStartDate": "1970-01-01T00:00:00Z",
  "consultationEndDate": "1970-01-01T00:00:00Z",
  "consultationPageUrl": "string",
  "consultationStartDate": "1970-01-01T00:00:00Z",
  "contactEmail": "string",
  "contactName": "string",
  "cycleSuperhighwayId": "string",
  "externalPageUrl": "string",
  "phase": "Unscoped",
  "projectDescription": "string",
  "projectId": "string",
  "projectName": "string",
  "projectPageUrl": "string",
  "projectSummaryPageUrl": "string",
  "schemeName": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|boroughsBenefited|[string]|false|none|none|
|constructionEndDate|string(date-time)|false|none|none|
|constructionStartDate|string(date-time)|false|none|none|
|consultationEndDate|string(date-time)|false|none|none|
|consultationPageUrl|string|false|none|none|
|consultationStartDate|string(date-time)|false|none|none|
|contactEmail|string|false|none|none|
|contactName|string|false|none|none|
|cycleSuperhighwayId|string|false|none|none|
|externalPageUrl|string|false|none|none|
|phase|string|false|none|none|
|projectDescription|string|false|none|none|
|projectId|string|false|none|none|
|projectName|string|false|none|none|
|projectPageUrl|string|false|none|none|
|projectSummaryPageUrl|string|false|none|none|
|schemeName|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|phase|Unscoped|
|phase|Concept|
|phase|ConsultationEnded|
|phase|Consultation|
|phase|Construction|
|phase|Complete|

<h2 id="tocS_Tfl.Api.Presentation.Entities.RouteSearchMatch">Tfl.Api.Presentation.Entities.RouteSearchMatch</h2>
<!-- backwards compatibility -->
<a id="schematfl.api.presentation.entities.routesearchmatch"></a>
<a id="schema_Tfl.Api.Presentation.Entities.RouteSearchMatch"></a>
<a id="tocStfl.api.presentation.entities.routesearchmatch"></a>
<a id="tocstfl.api.presentation.entities.routesearchmatch"></a>

```json
{
  "id": "string",
  "lat": 0,
  "lineId": "string",
  "lineName": "string",
  "lineRouteSection": [
    {
      "destination": "string",
      "direction": "string",
      "fromStation": "string",
      "routeId": 0,
      "serviceType": "string",
      "toStation": "string",
      "vehicleDestinationText": "string"
    }
  ],
  "lon": 0,
  "matchedRouteSections": [
    {
      "id": 0
    }
  ],
  "matchedStops": [
    {
      "accessibilitySummary": "string",
      "direction": "string",
      "hasDisruption": true,
      "icsId": "string",
      "id": "string",
      "lat": 0,
      "lines": [
        {
          "crowding": {
            "passengerFlows": [
              {
                "timeSlice": "string",
                "value": 0
              }
            ],
            "trainLoadings": [
              {
                "direction": "string",
                "line": "string",
                "lineDirection": "string",
                "naptanTo": "string",
                "platformDirection": "string",
                "timeSlice": "string",
                "value": 0
              }
            ]
          },
          "fullName": "string",
          "id": "string",
          "motType": "string",
          "name": "string",
          "network": "string",
          "routeType": "Unknown",
          "status": "Unknown",
          "type": "string",
          "uri": "string"
        }
      ],
      "lon": 0,
      "modes": [
        "string"
      ],
      "name": "string",
      "parentId": "string",
      "routeId": 0,
      "stationId": "string",
      "status": true,
      "stopLetter": "string",
      "stopType": "string",
      "topMostParentId": "string",
      "towards": "string",
      "url": "string",
      "zone": "string"
    }
  ],
  "mode": "string",
  "name": "string",
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|lat|number(double)|false|none|none|
|lineId|string|false|none|none|
|lineName|string|false|none|none|
|lineRouteSection|[[Tfl.Api.Presentation.Entities.LineRouteSection](#schematfl.api.presentation.entities.lineroutesection)]|false|none|none|
|lon|number(double)|false|none|none|
|matchedRouteSections|[[Tfl.Api.Presentation.Entities.MatchedRouteSections](#schematfl.api.presentation.entities.matchedroutesections)]|false|none|none|
|matchedStops|[[Tfl.Api.Presentation.Entities.MatchedStop](#schematfl.api.presentation.entities.matchedstop)]|false|none|none|
|mode|string|false|none|none|
|name|string|false|none|none|
|url|string|false|none|none|

<h2 id="tocS_Tfl.Api.Presentation.Entities.RouteSearchResponse">Tfl.Api.Presentation.Entities.RouteSearchResponse</h2>
<!-- backwards compatibility -->
<a id="schematfl.api.presentation.entities.routesearchresponse"></a>
<a id="schema_Tfl.Api.Presentation.Entities.RouteSearchResponse"></a>
<a id="tocStfl.api.presentation.entities.routesearchresponse"></a>
<a id="tocstfl.api.presentation.entities.routesearchresponse"></a>

```json
{
  "input": "string",
  "searchMatches": [
    {
      "id": "string",
      "lat": 0,
      "lineId": "string",
      "lineName": "string",
      "lineRouteSection": [
        {
          "destination": "string",
          "direction": "string",
          "fromStation": "string",
          "routeId": 0,
          "serviceType": "string",
          "toStation": "string",
          "vehicleDestinationText": "string"
        }
      ],
      "lon": 0,
      "matchedRouteSections": [
        {
          "id": 0
        }
      ],
      "matchedStops": [
        {
          "accessibilitySummary": "string",
          "direction": "string",
          "hasDisruption": true,
          "icsId": "string",
          "id": "string",
          "lat": 0,
          "lines": [
            {
              "crowding": {
                "passengerFlows": [
                  {
                    "timeSlice": "string",
                    "value": 0
                  }
                ],
                "trainLoadings": [
                  {
                    "direction": "string",
                    "line": "string",
                    "lineDirection": "string",
                    "naptanTo": "string",
                    "platformDirection": "string",
                    "timeSlice": "string",
                    "value": 0
                  }
                ]
              },
              "fullName": "string",
              "id": "string",
              "motType": "string",
              "name": "string",
              "network": "string",
              "routeType": "Unknown",
              "status": "Unknown",
              "type": "string",
              "uri": "string"
            }
          ],
          "lon": 0,
          "modes": [
            "string"
          ],
          "name": "string",
          "parentId": "string",
          "routeId": 0,
          "stationId": "string",
          "status": true,
          "stopLetter": "string",
          "stopType": "string",
          "topMostParentId": "string",
          "towards": "string",
          "url": "string",
          "zone": "string"
        }
      ],
      "mode": "string",
      "name": "string",
      "url": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|input|string|false|none|none|
|searchMatches|[[Tfl.Api.Presentation.Entities.RouteSearchMatch](#schematfl.api.presentation.entities.routesearchmatch)]|false|none|none|

<h2 id="tocS_Tfl.Api.Presentation.Entities.RouteSectionNaptanEntrySequence">Tfl.Api.Presentation.Entities.RouteSectionNaptanEntrySequence</h2>
<!-- backwards compatibility -->
<a id="schematfl.api.presentation.entities.routesectionnaptanentrysequence"></a>
<a id="schema_Tfl.Api.Presentation.Entities.RouteSectionNaptanEntrySequence"></a>
<a id="tocStfl.api.presentation.entities.routesectionnaptanentrysequence"></a>
<a id="tocstfl.api.presentation.entities.routesectionnaptanentrysequence"></a>

```json
{
  "ordinal": 0,
  "stopPoint": {
    "accessibilitySummary": "string",
    "additionalProperties": [
      {
        "category": "string",
        "key": "string",
        "modified": "1970-01-01T00:00:00Z",
        "sourceSystemKey": "string",
        "value": "string"
      }
    ],
    "children": [
      {
        "additionalProperties": [
          {
            "category": "string",
            "key": "string",
            "modified": "1970-01-01T00:00:00Z",
            "sourceSystemKey": "string",
            "value": "string"
          }
        ],
        "children": [
          {}
        ],
        "childrenUrls": [
          "string"
        ],
        "commonName": "string",
        "distance": 0,
        "id": "string",
        "lat": 0,
        "lon": 0,
        "placeType": "string",
        "url": "string"
      }
    ],
    "childrenUrls": [
      "string"
    ],
    "commonName": "string",
    "distance": 0,
    "fullName": "string",
    "hubNaptanCode": "string",
    "icsCode": "string",
    "id": "string",
    "indicator": "string",
    "individualStopId": "string",
    "lat": 0,
    "lineGroup": [
      {
        "lineIdentifier": [
          "string"
        ],
        "naptanIdReference": "string",
        "stationAtcoCode": "string"
      }
    ],
    "lineModeGroups": [
      {
        "lineIdentifier": [
          "string"
        ],
        "modeName": "string"
      }
    ],
    "lines": [
      {
        "crowding": {
          "passengerFlows": [
            {
              "timeSlice": "string",
              "value": 0
            }
          ],
          "trainLoadings": [
            {
              "direction": "string",
              "line": "string",
              "lineDirection": "string",
              "naptanTo": "string",
              "platformDirection": "string",
              "timeSlice": "string",
              "value": 0
            }
          ]
        },
        "fullName": "string",
        "id": "string",
        "motType": "string",
        "name": "string",
        "network": "string",
        "routeType": "Unknown",
        "status": "Unknown",
        "type": "string",
        "uri": "string"
      }
    ],
    "lon": 0,
    "modes": [
      "string"
    ],
    "naptanId": "string",
    "naptanMode": "string",
    "placeType": "string",
    "platformName": "string",
    "smsCode": "string",
    "stationNaptan": "string",
    "status": true,
    "stopLetter": "string",
    "stopType": "string",
    "url": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ordinal|integer(int32)|false|none|none|
|stopPoint|[Tfl.Api.Presentation.Entities.StopPoint](#schematfl.api.presentation.entities.stoppoint)|false|none|none|

<h2 id="tocS_Tfl.Api.Presentation.Entities.RouteSequence">Tfl.Api.Presentation.Entities.RouteSequence</h2>
<!-- backwards compatibility -->
<a id="schematfl.api.presentation.entities.routesequence"></a>
<a id="schema_Tfl.Api.Presentation.Entities.RouteSequence"></a>
<a id="tocStfl.api.presentation.entities.routesequence"></a>
<a id="tocstfl.api.presentation.entities.routesequence"></a>

```json
{
  "direction": "string",
  "isOutboundOnly": true,
  "lineId": "string",
  "lineName": "string",
  "lineStrings": [
    "string"
  ],
  "mode": "string",
  "orderedLineRoutes": [
    {
      "name": "string",
      "naptanIds": [
        "string"
      ],
      "serviceType": "string"
    }
  ],
  "stations": [
    {
      "accessibilitySummary": "string",
      "direction": "string",
      "hasDisruption": true,
      "icsId": "string",
      "id": "string",
      "lat": 0,
      "lines": [
        {
          "crowding": {
            "passengerFlows": [
              {
                "timeSlice": "string",
                "value": 0
              }
            ],
            "trainLoadings": [
              {
                "direction": "string",
                "line": "string",
                "lineDirection": "string",
                "naptanTo": "string",
                "platformDirection": "string",
                "timeSlice": "string",
                "value": 0
              }
            ]
          },
          "fullName": "string",
          "id": "string",
          "motType": "string",
          "name": "string",
          "network": "string",
          "routeType": "Unknown",
          "status": "Unknown",
          "type": "string",
          "uri": "string"
        }
      ],
      "lon": 0,
      "modes": [
        "string"
      ],
      "name": "string",
      "parentId": "string",
      "routeId": 0,
      "stationId": "string",
      "status": true,
      "stopLetter": "string",
      "stopType": "string",
      "topMostParentId": "string",
      "towards": "string",
      "url": "string",
      "zone": "string"
    }
  ],
  "stopPointSequences": [
    {
      "branchId": 0,
      "direction": "string",
      "lineId": "string",
      "lineName": "string",
      "nextBranchIds": [
        0
      ],
      "prevBranchIds": [
        0
      ],
      "serviceType": "Regular",
      "stopPoint": [
        {
          "accessibilitySummary": "string",
          "direction": "string",
          "hasDisruption": true,
          "icsId": "string",
          "id": "string",
          "lat": 0,
          "lines": [
            {
              "crowding": {
                "passengerFlows": [
                  {
                    "timeSlice": "string",
                    "value": 0
                  }
                ],
                "trainLoadings": [
                  {
                    "direction": "string",
                    "line": "string",
                    "lineDirection": "string",
                    "naptanTo": "string",
                    "platformDirection": "string",
                    "timeSlice": "string",
                    "value": 0
                  }
                ]
              },
              "fullName": "string",
              "id": "string",
              "motType": "string",
              "name": "string",
              "network": "string",
              "routeType": "Unknown",
              "status": "Unknown",
              "type": "string",
              "uri": "string"
            }
          ],
          "lon": 0,
          "modes": [
            "string"
          ],
          "name": "string",
          "parentId": "string",
          "routeId": 0,
          "stationId": "string",
          "status": true,
          "stopLetter": "string",
          "stopType": "string",
          "topMostParentId": "string",
          "towards": "string",
          "url": "string",
          "zone": "string"
        }
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|direction|string|false|none|none|
|isOutboundOnly|boolean|false|none|none|
|lineId|string|false|none|none|
|lineName|string|false|none|none|
|lineStrings|[string]|false|none|none|
|mode|string|false|none|none|
|orderedLineRoutes|[[Tfl.Api.Presentation.Entities.OrderedRoute](#schematfl.api.presentation.entities.orderedroute)]|false|none|none|
|stations|[[Tfl.Api.Presentation.Entities.MatchedStop](#schematfl.api.presentation.entities.matchedstop)]|false|none|none|
|stopPointSequences|[[Tfl.Api.Presentation.Entities.StopPointSequence](#schematfl.api.presentation.entities.stoppointsequence)]|false|none|none|

<h2 id="tocS_Tfl.Api.Presentation.Entities.Schedule">Tfl.Api.Presentation.Entities.Schedule</h2>
<!-- backwards compatibility -->
<a id="schematfl.api.presentation.entities.schedule"></a>
<a id="schema_Tfl.Api.Presentation.Entities.Schedule"></a>
<a id="tocStfl.api.presentation.entities.schedule"></a>
<a id="tocstfl.api.presentation.entities.schedule"></a>

```json
{
  "firstJourney": {
    "hour": "string",
    "intervalId": 0,
    "minute": "string"
  },
  "knownJourneys": [
    {
      "hour": "string",
      "intervalId": 0,
      "minute": "string"
    }
  ],
  "lastJourney": {
    "hour": "string",
    "intervalId": 0,
    "minute": "string"
  },
  "name": "string",
  "periods": [
    {
      "frequency": {
        "highestFrequency": 0,
        "lowestFrequency": 0
      },
      "fromTime": {
        "hour": "string",
        "minute": "string"
      },
      "toTime": {
        "hour": "string",
        "minute": "string"
      },
      "type": "Normal"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|firstJourney|[Tfl.Api.Presentation.Entities.KnownJourney](#schematfl.api.presentation.entities.knownjourney)|false|none|none|
|knownJourneys|[[Tfl.Api.Presentation.Entities.KnownJourney](#schematfl.api.presentation.entities.knownjourney)]|false|none|none|
|lastJourney|[Tfl.Api.Presentation.Entities.KnownJourney](#schematfl.api.presentation.entities.knownjourney)|false|none|none|
|name|string|false|none|none|
|periods|[[Tfl.Api.Presentation.Entities.Period](#schematfl.api.presentation.entities.period)]|false|none|none|

<h2 id="tocS_Tfl.Api.Presentation.Entities.SearchMatch">Tfl.Api.Presentation.Entities.SearchMatch</h2>
<!-- backwards compatibility -->
<a id="schematfl.api.presentation.entities.searchmatch"></a>
<a id="schema_Tfl.Api.Presentation.Entities.SearchMatch"></a>
<a id="tocStfl.api.presentation.entities.searchmatch"></a>
<a id="tocstfl.api.presentation.entities.searchmatch"></a>

```json
{
  "id": "string",
  "lat": 0,
  "lon": 0,
  "name": "string",
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|lat|number(double)|false|none|none|
|lon|number(double)|false|none|none|
|name|string|false|none|none|
|url|string|false|none|none|

<h2 id="tocS_Tfl.Api.Presentation.Entities.SearchResponse">Tfl.Api.Presentation.Entities.SearchResponse</h2>
<!-- backwards compatibility -->
<a id="schematfl.api.presentation.entities.searchresponse"></a>
<a id="schema_Tfl.Api.Presentation.Entities.SearchResponse"></a>
<a id="tocStfl.api.presentation.entities.searchresponse"></a>
<a id="tocstfl.api.presentation.entities.searchresponse"></a>

```json
{
  "from": 0,
  "matches": [
    {
      "id": "string",
      "lat": 0,
      "lon": 0,
      "name": "string",
      "url": "string"
    }
  ],
  "maxScore": 0,
  "page": 0,
  "pageSize": 0,
  "provider": "string",
  "query": "string",
  "total": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|from|integer(int32)|false|none|none|
|matches|[[Tfl.Api.Presentation.Entities.SearchMatch](#schematfl.api.presentation.entities.searchmatch)]|false|none|none|
|maxScore|number(double)|false|none|none|
|page|integer(int32)|false|none|none|
|pageSize|integer(int32)|false|none|none|
|provider|string|false|none|none|
|query|string|false|none|none|
|total|integer(int32)|false|none|none|

<h2 id="tocS_Tfl.Api.Presentation.Entities.ServiceFrequency">Tfl.Api.Presentation.Entities.ServiceFrequency</h2>
<!-- backwards compatibility -->
<a id="schematfl.api.presentation.entities.servicefrequency"></a>
<a id="schema_Tfl.Api.Presentation.Entities.ServiceFrequency"></a>
<a id="tocStfl.api.presentation.entities.servicefrequency"></a>
<a id="tocstfl.api.presentation.entities.servicefrequency"></a>

```json
{
  "highestFrequency": 0,
  "lowestFrequency": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|highestFrequency|number(double)|false|none|none|
|lowestFrequency|number(double)|false|none|none|

<h2 id="tocS_Tfl.Api.Presentation.Entities.StationInterval">Tfl.Api.Presentation.Entities.StationInterval</h2>
<!-- backwards compatibility -->
<a id="schematfl.api.presentation.entities.stationinterval"></a>
<a id="schema_Tfl.Api.Presentation.Entities.StationInterval"></a>
<a id="tocStfl.api.presentation.entities.stationinterval"></a>
<a id="tocstfl.api.presentation.entities.stationinterval"></a>

```json
{
  "id": "string",
  "intervals": [
    {
      "stopId": "string",
      "timeToArrival": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|intervals|[[Tfl.Api.Presentation.Entities.Interval](#schematfl.api.presentation.entities.interval)]|false|none|none|

<h2 id="tocS_Tfl.Api.Presentation.Entities.StatusSeverity">Tfl.Api.Presentation.Entities.StatusSeverity</h2>
<!-- backwards compatibility -->
<a id="schematfl.api.presentation.entities.statusseverity"></a>
<a id="schema_Tfl.Api.Presentation.Entities.StatusSeverity"></a>
<a id="tocStfl.api.presentation.entities.statusseverity"></a>
<a id="tocstfl.api.presentation.entities.statusseverity"></a>

```json
{
  "description": "string",
  "modeName": "string",
  "severityLevel": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|none|
|modeName|string|false|none|none|
|severityLevel|integer(int32)|false|none|none|

<h2 id="tocS_Tfl.Api.Presentation.Entities.StopPoint">Tfl.Api.Presentation.Entities.StopPoint</h2>
<!-- backwards compatibility -->
<a id="schematfl.api.presentation.entities.stoppoint"></a>
<a id="schema_Tfl.Api.Presentation.Entities.StopPoint"></a>
<a id="tocStfl.api.presentation.entities.stoppoint"></a>
<a id="tocstfl.api.presentation.entities.stoppoint"></a>

```json
{
  "accessibilitySummary": "string",
  "additionalProperties": [
    {
      "category": "string",
      "key": "string",
      "modified": "1970-01-01T00:00:00Z",
      "sourceSystemKey": "string",
      "value": "string"
    }
  ],
  "children": [
    {
      "additionalProperties": [
        {
          "category": "string",
          "key": "string",
          "modified": "1970-01-01T00:00:00Z",
          "sourceSystemKey": "string",
          "value": "string"
        }
      ],
      "children": [
        {}
      ],
      "childrenUrls": [
        "string"
      ],
      "commonName": "string",
      "distance": 0,
      "id": "string",
      "lat": 0,
      "lon": 0,
      "placeType": "string",
      "url": "string"
    }
  ],
  "childrenUrls": [
    "string"
  ],
  "commonName": "string",
  "distance": 0,
  "fullName": "string",
  "hubNaptanCode": "string",
  "icsCode": "string",
  "id": "string",
  "indicator": "string",
  "individualStopId": "string",
  "lat": 0,
  "lineGroup": [
    {
      "lineIdentifier": [
        "string"
      ],
      "naptanIdReference": "string",
      "stationAtcoCode": "string"
    }
  ],
  "lineModeGroups": [
    {
      "lineIdentifier": [
        "string"
      ],
      "modeName": "string"
    }
  ],
  "lines": [
    {
      "crowding": {
        "passengerFlows": [
          {
            "timeSlice": "string",
            "value": 0
          }
        ],
        "trainLoadings": [
          {
            "direction": "string",
            "line": "string",
            "lineDirection": "string",
            "naptanTo": "string",
            "platformDirection": "string",
            "timeSlice": "string",
            "value": 0
          }
        ]
      },
      "fullName": "string",
      "id": "string",
      "motType": "string",
      "name": "string",
      "network": "string",
      "routeType": "Unknown",
      "status": "Unknown",
      "type": "string",
      "uri": "string"
    }
  ],
  "lon": 0,
  "modes": [
    "string"
  ],
  "naptanId": "string",
  "naptanMode": "string",
  "placeType": "string",
  "platformName": "string",
  "smsCode": "string",
  "stationNaptan": "string",
  "status": true,
  "stopLetter": "string",
  "stopType": "string",
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accessibilitySummary|string|false|none|none|
|additionalProperties|[[Tfl.Api.Presentation.Entities.AdditionalProperties](#schematfl.api.presentation.entities.additionalproperties)]|false|none|A bag of additional key/value pairs with extra information about this place.|
|children|[[Tfl.Api.Presentation.Entities.Place](#schematfl.api.presentation.entities.place)]|false|none|none|
|childrenUrls|[string]|false|none|none|
|commonName|string|false|none|A human readable name.|
|distance|number(double)|false|none|The distance of the place from its search point, if this is the result<br>            of a geographical search, otherwise zero.|
|fullName|string|false|none|none|
|hubNaptanCode|string|false|none|none|
|icsCode|string|false|none|none|
|id|string|false|none|A unique identifier.|
|indicator|string|false|none|The indicator of the stop point e.g. "Stop K"|
|individualStopId|string|false|none|none|
|lat|number(double)|false|none|WGS84 latitude of the location.|
|lineGroup|[[Tfl.Api.Presentation.Entities.LineGroup](#schematfl.api.presentation.entities.linegroup)]|false|none|none|
|lineModeGroups|[[Tfl.Api.Presentation.Entities.LineModeGroup](#schematfl.api.presentation.entities.linemodegroup)]|false|none|none|
|lines|[[Tfl.Api.Presentation.Entities.Identifier](#schematfl.api.presentation.entities.identifier)]|false|none|none|
|lon|number(double)|false|none|WGS84 longitude of the location.|
|modes|[string]|false|none|none|
|naptanId|string|false|none|none|
|naptanMode|string|false|none|none|
|placeType|string|false|none|The type of Place. See /Place/Meta/placeTypes for possible values.|
|platformName|string|false|none|none|
|smsCode|string|false|none|none|
|stationNaptan|string|false|none|none|
|status|boolean|false|none|none|
|stopLetter|string|false|none|The stop letter, if it could be cleansed from the Indicator e.g. "K"|
|stopType|string|false|none|none|
|url|string|false|none|The unique location of this resource.|

<h2 id="tocS_Tfl.Api.Presentation.Entities.StopPointCategory">Tfl.Api.Presentation.Entities.StopPointCategory</h2>
<!-- backwards compatibility -->
<a id="schematfl.api.presentation.entities.stoppointcategory"></a>
<a id="schema_Tfl.Api.Presentation.Entities.StopPointCategory"></a>
<a id="tocStfl.api.presentation.entities.stoppointcategory"></a>
<a id="tocstfl.api.presentation.entities.stoppointcategory"></a>

```json
{
  "availableKeys": [
    "string"
  ],
  "category": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|availableKeys|[string]|false|none|none|
|category|string|false|none|none|

<h2 id="tocS_Tfl.Api.Presentation.Entities.StopPointRouteSection">Tfl.Api.Presentation.Entities.StopPointRouteSection</h2>
<!-- backwards compatibility -->
<a id="schematfl.api.presentation.entities.stoppointroutesection"></a>
<a id="schema_Tfl.Api.Presentation.Entities.StopPointRouteSection"></a>
<a id="tocStfl.api.presentation.entities.stoppointroutesection"></a>
<a id="tocstfl.api.presentation.entities.stoppointroutesection"></a>

```json
{
  "destinationName": "string",
  "direction": "string",
  "isActive": true,
  "lineId": "string",
  "lineString": "string",
  "mode": "string",
  "naptanId": "string",
  "routeSectionName": "string",
  "serviceType": "string",
  "validFrom": "1970-01-01T00:00:00Z",
  "validTo": "1970-01-01T00:00:00Z",
  "vehicleDestinationText": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|destinationName|string|false|none|none|
|direction|string|false|none|none|
|isActive|boolean|false|none|none|
|lineId|string|false|none|none|
|lineString|string|false|none|none|
|mode|string|false|none|none|
|naptanId|string|false|none|none|
|routeSectionName|string|false|none|none|
|serviceType|string|false|none|none|
|validFrom|string(date-time)|false|none|none|
|validTo|string(date-time)|false|none|none|
|vehicleDestinationText|string|false|none|none|

<h2 id="tocS_Tfl.Api.Presentation.Entities.StopPointSequence">Tfl.Api.Presentation.Entities.StopPointSequence</h2>
<!-- backwards compatibility -->
<a id="schematfl.api.presentation.entities.stoppointsequence"></a>
<a id="schema_Tfl.Api.Presentation.Entities.StopPointSequence"></a>
<a id="tocStfl.api.presentation.entities.stoppointsequence"></a>
<a id="tocstfl.api.presentation.entities.stoppointsequence"></a>

```json
{
  "branchId": 0,
  "direction": "string",
  "lineId": "string",
  "lineName": "string",
  "nextBranchIds": [
    0
  ],
  "prevBranchIds": [
    0
  ],
  "serviceType": "Regular",
  "stopPoint": [
    {
      "accessibilitySummary": "string",
      "direction": "string",
      "hasDisruption": true,
      "icsId": "string",
      "id": "string",
      "lat": 0,
      "lines": [
        {
          "crowding": {
            "passengerFlows": [
              {
                "timeSlice": "string",
                "value": 0
              }
            ],
            "trainLoadings": [
              {
                "direction": "string",
                "line": "string",
                "lineDirection": "string",
                "naptanTo": "string",
                "platformDirection": "string",
                "timeSlice": "string",
                "value": 0
              }
            ]
          },
          "fullName": "string",
          "id": "string",
          "motType": "string",
          "name": "string",
          "network": "string",
          "routeType": "Unknown",
          "status": "Unknown",
          "type": "string",
          "uri": "string"
        }
      ],
      "lon": 0,
      "modes": [
        "string"
      ],
      "name": "string",
      "parentId": "string",
      "routeId": 0,
      "stationId": "string",
      "status": true,
      "stopLetter": "string",
      "stopType": "string",
      "topMostParentId": "string",
      "towards": "string",
      "url": "string",
      "zone": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|branchId|integer(int32)|false|none|The id of this branch.|
|direction|string|false|none|none|
|lineId|string|false|none|none|
|lineName|string|false|none|none|
|nextBranchIds|[integer(int32)]|false|none|The ids of the next branch(es) in the sequence. Note that the next and previous branch id can be<br>            identical in the case of a looped route e.g. the Circle line.|
|prevBranchIds|[integer(int32)]|false|none|The ids of the previous branch(es) in the sequence. Note that the next and previous branch id can be<br>            identical in the case of a looped route e.g. the Circle line.|
|serviceType|string|false|none|none|
|stopPoint|[[Tfl.Api.Presentation.Entities.MatchedStop](#schematfl.api.presentation.entities.matchedstop)]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|serviceType|Regular|
|serviceType|Night|

<h2 id="tocS_Tfl.Api.Presentation.Entities.StopPointsResponse">Tfl.Api.Presentation.Entities.StopPointsResponse</h2>
<!-- backwards compatibility -->
<a id="schematfl.api.presentation.entities.stoppointsresponse"></a>
<a id="schema_Tfl.Api.Presentation.Entities.StopPointsResponse"></a>
<a id="tocStfl.api.presentation.entities.stoppointsresponse"></a>
<a id="tocstfl.api.presentation.entities.stoppointsresponse"></a>

```json
{
  "centrePoint": [
    0
  ],
  "page": 0,
  "pageSize": 0,
  "stopPoints": [
    {
      "accessibilitySummary": "string",
      "additionalProperties": [
        {
          "category": "string",
          "key": "string",
          "modified": "1970-01-01T00:00:00Z",
          "sourceSystemKey": "string",
          "value": "string"
        }
      ],
      "children": [
        {
          "additionalProperties": [
            {
              "category": "string",
              "key": "string",
              "modified": "1970-01-01T00:00:00Z",
              "sourceSystemKey": "string",
              "value": "string"
            }
          ],
          "children": [
            {}
          ],
          "childrenUrls": [
            "string"
          ],
          "commonName": "string",
          "distance": 0,
          "id": "string",
          "lat": 0,
          "lon": 0,
          "placeType": "string",
          "url": "string"
        }
      ],
      "childrenUrls": [
        "string"
      ],
      "commonName": "string",
      "distance": 0,
      "fullName": "string",
      "hubNaptanCode": "string",
      "icsCode": "string",
      "id": "string",
      "indicator": "string",
      "individualStopId": "string",
      "lat": 0,
      "lineGroup": [
        {
          "lineIdentifier": [
            "string"
          ],
          "naptanIdReference": "string",
          "stationAtcoCode": "string"
        }
      ],
      "lineModeGroups": [
        {
          "lineIdentifier": [
            "string"
          ],
          "modeName": "string"
        }
      ],
      "lines": [
        {
          "crowding": {
            "passengerFlows": [
              {
                "timeSlice": "string",
                "value": 0
              }
            ],
            "trainLoadings": [
              {
                "direction": "string",
                "line": "string",
                "lineDirection": "string",
                "naptanTo": "string",
                "platformDirection": "string",
                "timeSlice": "string",
                "value": 0
              }
            ]
          },
          "fullName": "string",
          "id": "string",
          "motType": "string",
          "name": "string",
          "network": "string",
          "routeType": "Unknown",
          "status": "Unknown",
          "type": "string",
          "uri": "string"
        }
      ],
      "lon": 0,
      "modes": [
        "string"
      ],
      "naptanId": "string",
      "naptanMode": "string",
      "placeType": "string",
      "platformName": "string",
      "smsCode": "string",
      "stationNaptan": "string",
      "status": true,
      "stopLetter": "string",
      "stopType": "string",
      "url": "string"
    }
  ],
  "total": 0
}
```

A paged response containing StopPoints

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|centrePoint|[number(double)]|false|none|The centre latitude/longitude of this list of StopPoints|
|page|integer(int32)|false|none|The index of this page|
|pageSize|integer(int32)|false|none|The maximum size of the page in this response i.e. the maximum number of StopPoints|
|stopPoints|[[Tfl.Api.Presentation.Entities.StopPoint](#schematfl.api.presentation.entities.stoppoint)]|false|none|Collection of stop points|
|total|integer(int32)|false|none|The total number of StopPoints available across all pages|

<h2 id="tocS_Tfl.Api.Presentation.Entities.Street">Tfl.Api.Presentation.Entities.Street</h2>
<!-- backwards compatibility -->
<a id="schematfl.api.presentation.entities.street"></a>
<a id="schema_Tfl.Api.Presentation.Entities.Street"></a>
<a id="tocStfl.api.presentation.entities.street"></a>
<a id="tocstfl.api.presentation.entities.street"></a>

```json
{
  "closure": "string",
  "directions": "string",
  "name": "string",
  "segments": [
    {
      "lineString": "string",
      "sourceSystemId": 0,
      "sourceSystemKey": "string",
      "toid": "string"
    }
  ],
  "sourceSystemId": 0,
  "sourceSystemKey": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|closure|string|false|none|Type of road closure. Some example values:<br>            Open = road is open, not blocked, not closed, not restricted. It maybe that the disruption has been moved out of the carriageway.<br>            Partial Closure = road is partially blocked, closed or restricted. <br>            Full Closure = road is fully blocked or closed.|
|directions|string|false|none|The direction of the disruption on the street. Some example values:<br>            All Directions<br>            All Approaches<br>            Clockwise<br>            Anti-Clockwise<br>            Northbound<br>            Eastbound<br>            Southbound<br>            Westbound<br>            Both Directions|
|name|string|false|none|Street name|
|segments|[[Tfl.Api.Presentation.Entities.StreetSegment](#schematfl.api.presentation.entities.streetsegment)]|false|none|Geographic description of the sections of this street that are affected.|
|sourceSystemId|integer(int64)|false|none|The ID from the source system of the disruption that this street belongs to.|
|sourceSystemKey|string|false|none|The key of the source system of the disruption that this street belongs to.|

<h2 id="tocS_Tfl.Api.Presentation.Entities.StreetSegment">Tfl.Api.Presentation.Entities.StreetSegment</h2>
<!-- backwards compatibility -->
<a id="schematfl.api.presentation.entities.streetsegment"></a>
<a id="schema_Tfl.Api.Presentation.Entities.StreetSegment"></a>
<a id="tocStfl.api.presentation.entities.streetsegment"></a>
<a id="tocstfl.api.presentation.entities.streetsegment"></a>

```json
{
  "lineString": "string",
  "sourceSystemId": 0,
  "sourceSystemKey": "string",
  "toid": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lineString|string|false|none|geoJSON formatted LineString containing two latitude/longitude (WGS84) pairs that identify the start and end points of the street segment.|
|sourceSystemId|integer(int64)|false|none|The ID from the source system of the disruption that this street belongs to.|
|sourceSystemKey|string|false|none|The key of the source system of the disruption that this street belongs to.|
|toid|string|false|none|A 16 digit unique integer identifying a OS ITN (Ordnance Survey Integrated Transport Network) road link.|

<h2 id="tocS_Tfl.Api.Presentation.Entities.Timetable">Tfl.Api.Presentation.Entities.Timetable</h2>
<!-- backwards compatibility -->
<a id="schematfl.api.presentation.entities.timetable"></a>
<a id="schema_Tfl.Api.Presentation.Entities.Timetable"></a>
<a id="tocStfl.api.presentation.entities.timetable"></a>
<a id="tocstfl.api.presentation.entities.timetable"></a>

```json
{
  "departureStopId": "string",
  "routes": [
    {
      "schedules": [
        {
          "firstJourney": {
            "hour": "string",
            "intervalId": 0,
            "minute": "string"
          },
          "knownJourneys": [
            {
              "hour": "string",
              "intervalId": 0,
              "minute": "string"
            }
          ],
          "lastJourney": {
            "hour": "string",
            "intervalId": 0,
            "minute": "string"
          },
          "name": "string",
          "periods": [
            {
              "frequency": {
                "highestFrequency": 0,
                "lowestFrequency": 0
              },
              "fromTime": {
                "hour": "string",
                "minute": "string"
              },
              "toTime": {
                "hour": "string",
                "minute": "string"
              },
              "type": "Normal"
            }
          ]
        }
      ],
      "stationIntervals": [
        {
          "id": "string",
          "intervals": [
            {
              "stopId": "string",
              "timeToArrival": 0
            }
          ]
        }
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|departureStopId|string|false|none|none|
|routes|[[Tfl.Api.Presentation.Entities.TimetableRoute](#schematfl.api.presentation.entities.timetableroute)]|false|none|none|

<h2 id="tocS_Tfl.Api.Presentation.Entities.TimetableResponse">Tfl.Api.Presentation.Entities.TimetableResponse</h2>
<!-- backwards compatibility -->
<a id="schematfl.api.presentation.entities.timetableresponse"></a>
<a id="schema_Tfl.Api.Presentation.Entities.TimetableResponse"></a>
<a id="tocStfl.api.presentation.entities.timetableresponse"></a>
<a id="tocstfl.api.presentation.entities.timetableresponse"></a>

```json
{
  "direction": "string",
  "disambiguation": {
    "disambiguationOptions": [
      {
        "description": "string",
        "uri": "string"
      }
    ]
  },
  "lineId": "string",
  "lineName": "string",
  "pdfUrl": "string",
  "stations": [
    {
      "accessibilitySummary": "string",
      "direction": "string",
      "hasDisruption": true,
      "icsId": "string",
      "id": "string",
      "lat": 0,
      "lines": [
        {
          "crowding": {
            "passengerFlows": [
              {
                "timeSlice": "string",
                "value": 0
              }
            ],
            "trainLoadings": [
              {
                "direction": "string",
                "line": "string",
                "lineDirection": "string",
                "naptanTo": "string",
                "platformDirection": "string",
                "timeSlice": "string",
                "value": 0
              }
            ]
          },
          "fullName": "string",
          "id": "string",
          "motType": "string",
          "name": "string",
          "network": "string",
          "routeType": "Unknown",
          "status": "Unknown",
          "type": "string",
          "uri": "string"
        }
      ],
      "lon": 0,
      "modes": [
        "string"
      ],
      "name": "string",
      "parentId": "string",
      "routeId": 0,
      "stationId": "string",
      "status": true,
      "stopLetter": "string",
      "stopType": "string",
      "topMostParentId": "string",
      "towards": "string",
      "url": "string",
      "zone": "string"
    }
  ],
  "statusErrorMessage": "string",
  "stops": [
    {
      "accessibilitySummary": "string",
      "direction": "string",
      "hasDisruption": true,
      "icsId": "string",
      "id": "string",
      "lat": 0,
      "lines": [
        {
          "crowding": {
            "passengerFlows": [
              {
                "timeSlice": "string",
                "value": 0
              }
            ],
            "trainLoadings": [
              {
                "direction": "string",
                "line": "string",
                "lineDirection": "string",
                "naptanTo": "string",
                "platformDirection": "string",
                "timeSlice": "string",
                "value": 0
              }
            ]
          },
          "fullName": "string",
          "id": "string",
          "motType": "string",
          "name": "string",
          "network": "string",
          "routeType": "Unknown",
          "status": "Unknown",
          "type": "string",
          "uri": "string"
        }
      ],
      "lon": 0,
      "modes": [
        "string"
      ],
      "name": "string",
      "parentId": "string",
      "routeId": 0,
      "stationId": "string",
      "status": true,
      "stopLetter": "string",
      "stopType": "string",
      "topMostParentId": "string",
      "towards": "string",
      "url": "string",
      "zone": "string"
    }
  ],
  "timetable": {
    "departureStopId": "string",
    "routes": [
      {
        "schedules": [
          {
            "firstJourney": {
              "hour": "string",
              "intervalId": 0,
              "minute": "string"
            },
            "knownJourneys": [
              {
                "hour": "string",
                "intervalId": 0,
                "minute": "string"
              }
            ],
            "lastJourney": {
              "hour": "string",
              "intervalId": 0,
              "minute": "string"
            },
            "name": "string",
            "periods": [
              {
                "frequency": {
                  "highestFrequency": 0,
                  "lowestFrequency": 0
                },
                "fromTime": {
                  "hour": "string",
                  "minute": "string"
                },
                "toTime": {
                  "hour": "string",
                  "minute": "string"
                },
                "type": "Normal"
              }
            ]
          }
        ],
        "stationIntervals": [
          {
            "id": "string",
            "intervals": [
              {
                "stopId": "string",
                "timeToArrival": 0
              }
            ]
          }
        ]
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|direction|string|false|none|none|
|disambiguation|[Tfl.Api.Presentation.Entities.Timetables.Disambiguation](#schematfl.api.presentation.entities.timetables.disambiguation)|false|none|none|
|lineId|string|false|none|none|
|lineName|string|false|none|none|
|pdfUrl|string|false|none|none|
|stations|[[Tfl.Api.Presentation.Entities.MatchedStop](#schematfl.api.presentation.entities.matchedstop)]|false|none|none|
|statusErrorMessage|string|false|none|none|
|stops|[[Tfl.Api.Presentation.Entities.MatchedStop](#schematfl.api.presentation.entities.matchedstop)]|false|none|none|
|timetable|[Tfl.Api.Presentation.Entities.Timetable](#schematfl.api.presentation.entities.timetable)|false|none|none|

<h2 id="tocS_Tfl.Api.Presentation.Entities.TimetableRoute">Tfl.Api.Presentation.Entities.TimetableRoute</h2>
<!-- backwards compatibility -->
<a id="schematfl.api.presentation.entities.timetableroute"></a>
<a id="schema_Tfl.Api.Presentation.Entities.TimetableRoute"></a>
<a id="tocStfl.api.presentation.entities.timetableroute"></a>
<a id="tocstfl.api.presentation.entities.timetableroute"></a>

```json
{
  "schedules": [
    {
      "firstJourney": {
        "hour": "string",
        "intervalId": 0,
        "minute": "string"
      },
      "knownJourneys": [
        {
          "hour": "string",
          "intervalId": 0,
          "minute": "string"
        }
      ],
      "lastJourney": {
        "hour": "string",
        "intervalId": 0,
        "minute": "string"
      },
      "name": "string",
      "periods": [
        {
          "frequency": {
            "highestFrequency": 0,
            "lowestFrequency": 0
          },
          "fromTime": {
            "hour": "string",
            "minute": "string"
          },
          "toTime": {
            "hour": "string",
            "minute": "string"
          },
          "type": "Normal"
        }
      ]
    }
  ],
  "stationIntervals": [
    {
      "id": "string",
      "intervals": [
        {
          "stopId": "string",
          "timeToArrival": 0
        }
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|schedules|[[Tfl.Api.Presentation.Entities.Schedule](#schematfl.api.presentation.entities.schedule)]|false|none|none|
|stationIntervals|[[Tfl.Api.Presentation.Entities.StationInterval](#schematfl.api.presentation.entities.stationinterval)]|false|none|none|

<h2 id="tocS_Tfl.Api.Presentation.Entities.Timetables.Disambiguation">Tfl.Api.Presentation.Entities.Timetables.Disambiguation</h2>
<!-- backwards compatibility -->
<a id="schematfl.api.presentation.entities.timetables.disambiguation"></a>
<a id="schema_Tfl.Api.Presentation.Entities.Timetables.Disambiguation"></a>
<a id="tocStfl.api.presentation.entities.timetables.disambiguation"></a>
<a id="tocstfl.api.presentation.entities.timetables.disambiguation"></a>

```json
{
  "disambiguationOptions": [
    {
      "description": "string",
      "uri": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|disambiguationOptions|[[Tfl.Api.Presentation.Entities.Timetables.DisambiguationOption](#schematfl.api.presentation.entities.timetables.disambiguationoption)]|false|none|none|

<h2 id="tocS_Tfl.Api.Presentation.Entities.Timetables.DisambiguationOption">Tfl.Api.Presentation.Entities.Timetables.DisambiguationOption</h2>
<!-- backwards compatibility -->
<a id="schematfl.api.presentation.entities.timetables.disambiguationoption"></a>
<a id="schema_Tfl.Api.Presentation.Entities.Timetables.DisambiguationOption"></a>
<a id="tocStfl.api.presentation.entities.timetables.disambiguationoption"></a>
<a id="tocstfl.api.presentation.entities.timetables.disambiguationoption"></a>

```json
{
  "description": "string",
  "uri": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|none|
|uri|string|false|none|none|

<h2 id="tocS_Tfl.Api.Presentation.Entities.TrainLoading">Tfl.Api.Presentation.Entities.TrainLoading</h2>
<!-- backwards compatibility -->
<a id="schematfl.api.presentation.entities.trainloading"></a>
<a id="schema_Tfl.Api.Presentation.Entities.TrainLoading"></a>
<a id="tocStfl.api.presentation.entities.trainloading"></a>
<a id="tocstfl.api.presentation.entities.trainloading"></a>

```json
{
  "direction": "string",
  "line": "string",
  "lineDirection": "string",
  "naptanTo": "string",
  "platformDirection": "string",
  "timeSlice": "string",
  "value": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|direction|string|false|none|Direction in regards to Journey Planner i.e. inbound or outbound|
|line|string|false|none|The Line Name e.g. "Victoria"|
|lineDirection|string|false|none|Direction of the Line e.g. NB, SB, WB etc.|
|naptanTo|string|false|none|Naptan of the adjacent station|
|platformDirection|string|false|none|Direction displayed on the platform e.g. NB, SB, WB etc.|
|timeSlice|string|false|none|Time in 24hr format with 15 minute intervals e.g. 0500-0515, 0515-0530 etc.|
|value|integer(int32)|false|none|Scale between 1-6, <br>             1 = Very quiet, 2 = Quiet, 3 = Fairly busy, 4 = Busy, 5 = Very busy, 6 = Exceptionally busy|

<h2 id="tocS_Tfl.Api.Presentation.Entities.TwentyFourHourClockTime">Tfl.Api.Presentation.Entities.TwentyFourHourClockTime</h2>
<!-- backwards compatibility -->
<a id="schematfl.api.presentation.entities.twentyfourhourclocktime"></a>
<a id="schema_Tfl.Api.Presentation.Entities.TwentyFourHourClockTime"></a>
<a id="tocStfl.api.presentation.entities.twentyfourhourclocktime"></a>
<a id="tocstfl.api.presentation.entities.twentyfourhourclocktime"></a>

```json
{
  "hour": "string",
  "minute": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hour|string|false|none|none|
|minute|string|false|none|none|

<h2 id="tocS_Tfl.Api.Presentation.Entities.ValidityPeriod">Tfl.Api.Presentation.Entities.ValidityPeriod</h2>
<!-- backwards compatibility -->
<a id="schematfl.api.presentation.entities.validityperiod"></a>
<a id="schema_Tfl.Api.Presentation.Entities.ValidityPeriod"></a>
<a id="tocStfl.api.presentation.entities.validityperiod"></a>
<a id="tocstfl.api.presentation.entities.validityperiod"></a>

```json
{
  "fromDate": "1970-01-01T00:00:00Z",
  "isNow": true,
  "toDate": "1970-01-01T00:00:00Z"
}
```

Represents a period for which a planned works is valid.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fromDate|string(date-time)|false|none|Gets or sets the start date.|
|isNow|boolean|false|none|If true is a realtime status rather than planned or info|
|toDate|string(date-time)|false|none|Gets or sets the end date.|
