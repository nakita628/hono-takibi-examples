<h1 id="routing">Routing v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Routing consists of the following service:
<b>Calculate Route</b>
Calculates a route between an origin and a destination, passing through waypoints (if specified). Additional routing parameters like traffic, avoidance conditions, departure/arrival time etc. can be taken into account.
<b>Calculate Reachable Range</b>
Calculates a set of locations that can be reached from the origin point, subject to the available fuel or energy budget that is specified in the request.

Base URLs:

* <a href="https://api.tomtom.com">https://api.tomtom.com</a>

Web: <a href="https://developer.tomtom.com/contact-us">Contact Us</a> 

# Authentication

* API Key (api_key)
    - Parameter Name: **key**, in: query.

<h1 id="routing-routing">Routing</h1>

## Reachable Range

> Code samples

```bash
curl "https://example.com/routing/1/calculateReachableRange/52.50931%2C13.42936/xml?key=${API_KEY}"
```

`GET /routing/{versionNumber}/calculateReachableRange/{origin}/{contentType}`

Calculates a set of locations that can be reached from the origin point.

<h3 id="reachable-range-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|versionNumber|path|integer|true|Service version number. The current value is 1.|
|origin|path|string|true|Point from which the range calculation should start.|
|contentType|path|string|true|The content type of the response structure. If the content type is jsonp, a callback method can be specified in the query parameters.|
|fuelBudgetInLiters|query|number(float)|false|Fuel budget in liters. Determines the maximum vehicle range using the specified Combustion Consumption Model.|
|energyBudgetInkWh|query|number(float)|false|Electric energy budget in kilowatt hours (kWh). Determines the maximum vehicle range using the specified Electric Consumption Model.|
|timeBudgetInSec|query|number(float)|false|Time budget in seconds. Determines the maximum vehicle range using the specified driving time. The consumption parameters in the request will only affect eco-routes, and thereby indirectly the driving time.|
|callback|query|string|false|Specifies the jsonp callback method.|
|report|query|string|false|Specifies which data should be reported for diagnosis purposes.|
|departAt|query|string|false|The date and time of departure from the origin point. Departure times apart from <i>now</i> must be specified as a dateTime.|
|arriveAt|query|string(dateTime)|false|The date and time of arrival at the destination point. It must be specified as a dateTime.|
|routeType|query|string|false|The type of route requested.|
|traffic|query|boolean|false|Determines whether current traffic is used in route calculations. Note that information on historic road speeds is always used.|
|avoid|query|string|false|Specifies whether the routing engine should try to avoid specific types of road segment when calculating the route. Can be specified multiple times.<br>Possible values:<br>  - tollRoads<br>  - motorways<br>  - ferries<br>  - unpavedRoads<br>  - carpools|
|travelMode|query|string|false|The mode of travel for the requested route.|
|hilliness|query|string|false|Degree of hilliness for calculating a thrilling route.|
|windingness|query|string|false|Amount that a thrilling route should wind.|
|vehicleMaxSpeed|query|integer|false|Maximum speed of the vehicle in km/hour.|
|vehicleWeight|query|integer|false|Weight of the vehicle in kilograms.|
|vehicleAxleWeight|query|integer|false|Weight per axle of the vehicle in kg.|
|vehicleLength|query|number(float)|false|Length of the vehicle in meters.|
|vehicleWidth|query|number(float)|false|Width of the vehicle in meters.|
|vehicleHeight|query|number(float)|false|Height of the vehicle in meters.|
|vehicleCommercial|query|boolean|false|Indicates that the vehicle is used for commercial purposes. This means it may not be allowed on certain roads.|
|vehicleLoadType|query|string|false|Indicates what kinds of hazardous materials the vehicle is carrying (if any). This means it may not be allowed on certain roads.<br>Use these for routing in the US:<br><br>  - <i>USHazmatClass1</i> Explosives<br>  - <i>USHazmatClass2</i> Compressed gas<br>  - <i>USHazmatClass3</i> Flammable liquids<br>  - <i>USHazmatClass4</i> Flammable solids<br>  - <i>USHazmatClass5</i> Oxidizers<br>  - <i>USHazmatClass6</i> Poisons<br>  - <i>USHazmatClass7</i> Radioactive<br>  - <i>USHazmatClass8</i> Corrosives<br>  - <i>USHazmatClass9</i> Miscellaneous<br><br>Use these for routing in all other countries:<br><br>  - <i>otherHazmatExplosive</i> Explosives<br>  - <i>otherHazmatGeneral</i> Miscellaneous<br>  - <i>otherHazmatHarmfulToWater</i> Harmful to water<br><br>vehicleLoadType can be specified multiple times. This parameter is currently only considered for <b>travelMode</b>=<i>truck</i>.|
|constantSpeedConsumptionInLitersPerHundredkm|query|string|false|Specifies the speed-dependent component of consumption. Provided as an unordered list of speed/consumption-rate pairs.|
|currentFuelInLiters|query|number(float)|false|Specifies the current supply of fuel in liters.|
|auxiliaryPowerInLitersPerHour|query|number(float)|false|Specifies the amount of fuel consumed for sustaining auxiliary systems of the vehicle, in liters per hour.|
|fuelEnergyDensityInMJoulesPerLiter|query|number(float)|false|Specifies the amount of chemical energy stored in one liter of fuel in megajoules (MJ).|
|accelerationEfficiency|query|number(float)|false|Specifies the efficiency of converting chemical energy stored in fuel to kinetic energy when the vehicle accelerates (i.e. KineticEnergyGained/ChemicalEnergyConsumed).|
|decelerationEfficiency|query|number(float)|false|Specifies the efficiency of converting kinetic energy to saved (not consumed) fuel when the vehicle decelerates (i.e. ChemicalEnergySaved/KineticEnergyLost).|
|uphillEfficiency|query|number(float)|false|Specifies the efficiency of converting chemical energy stored in fuel to potential energy when the vehicle gains elevation (i.e. PotentialEnergyGained/ChemicalEnergyConsumed).|
|downhillEfficiency|query|number(float)|false|Specifies the efficiency of converting potential energy to saved (not consumed) fuel when the vehicle loses elevation (i.e. ChemicalEnergySaved/PotentialEnergyLost).|
|vehicleEngineType|query|string|false|Engine type of the vehicle.|
|constantSpeedConsumptionInkWhPerHundredkm|query|string|false|Specifies the speed-dependent component of consumption. Provided as an unordered list of speed/consumption-rate pairs.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|versionNumber|1|
|contentType|xml|
|contentType|json|
|contentType|jsonp|
|report|effectiveSettings|
|routeType|fastest|
|routeType|shortest|
|routeType|eco|
|routeType|thrilling|
|travelMode|car|
|travelMode|truck|
|travelMode|taxi|
|travelMode|bus|
|travelMode|van|
|travelMode|motorcycle|
|travelMode|bicycle|
|travelMode|pedestrian|
|hilliness|low|
|hilliness|normal|
|hilliness|high|
|windingness|low|
|windingness|normal|
|windingness|high|
|vehicleEngineType|combustion|
|vehicleEngineType|electric|

<h3 id="reachable-range-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK: a range was calculated and the body of the response contains the polygon description and further data.|None|
|400|Bad Request|Bad request: one or more parameters were incorrectly specified or are mutually exclusive, or the origin point specified in the request is not near enough to a road.|None|
|403|Forbidden|Permission, capacity, or authentication issues:<br>  - Forbidden<br>  - Not authorized<br>  - Account inactive<br>  - Account over queries per second limit<br>  - Account over rate limit<br>  - Rate limit exceeded|None|
|404|Not Found|Not Found: the requested resource could not be found, but it may be available again in the future.|None|
|405|Method Not Allowed|Method Not Allowed: the client used a HTTP method other than GET or POST.|None|
|408|Request Timeout|Request timeout.|None|
|414|URI Too Long|Requested uri is too long.|None|
|500|Internal Server Error|An error occurred while processing the request. Please try again later.|None|
|502|Bad Gateway|Internal network connectivity issue.|None|
|503|Service Unavailable|Service currently unavailable.|None|
|504|Gateway Timeout|Internal network connectivity issue or a request that has taken too long to complete.|None|
|596|596|Service not found.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Reachable Range

> Code samples

```bash
curl "https://example.com/routing/1/calculateReachableRange/52.50931%2C13.42936/xml?key=${API_KEY}" \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "avoidAreas": {
      "rectangles": [
        {
          "northEastCorner": {
            "latitude": 48.90309,
            "longitude": 2.41115
          },
          "southWestCorner": {
            "latitude": 48.81851,
            "longitude": 2.26593
          }
        }
      ]
    },
    "avoidVignette": [
      "AUS",
      "CHE"
    ],
    "supportingPoints": [
      {
        "latitude": 52.5093,
        "longitude": 13.42936
      },
      {
        "latitude": 52.50844,
        "longitude": 13.42859
      }
    ]
  }'
```

`POST /routing/{versionNumber}/calculateReachableRange/{origin}/{contentType}`

Calculates a set of locations that can be reached from the origin point. POST method handles additionally parameters: <em>supportingPoints</em>, <em>allowVignette</em>, <em>avoidVignette</em>, <em>avoidAreas</em>.

> Body parameter

```json
{
  "avoidAreas": {
    "rectangles": [
      {
        "northEastCorner": {
          "latitude": 48.90309,
          "longitude": 2.41115
        },
        "southWestCorner": {
          "latitude": 48.81851,
          "longitude": 2.26593
        }
      }
    ]
  },
  "avoidVignette": [
    "AUS",
    "CHE"
  ],
  "supportingPoints": [
    {
      "latitude": 52.5093,
      "longitude": 13.42936
    },
    {
      "latitude": 52.50844,
      "longitude": 13.42859
    }
  ]
}
```

<h3 id="reachable-range-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|versionNumber|path|integer|true|Service version number. The current value is 1.|
|origin|path|string|true|Point from which the range calculation should start.|
|contentType|path|string|true|The content type of the response structure. If the content type is jsonp, a callback method can be specified in the query parameters.|
|fuelBudgetInLiters|query|number(float)|false|Fuel budget in liters. Determines the maximum vehicle range using the specified Combustion Consumption Model.|
|energyBudgetInkWh|query|number(float)|false|Electric energy budget in kilowatt hours (kWh). Determines the maximum vehicle range using the specified Electric Consumption Model.|
|timeBudgetInSec|query|number(float)|false|Time budget in seconds. Determines the maximum vehicle range using the specified driving time. The consumption parameters in the request will only affect eco-routes, and thereby indirectly the driving time.|
|callback|query|string|false|Specifies the jsonp callback method.|
|report|query|string|false|Specifies which data should be reported for diagnosis purposes.|
|departAt|query|string|false|The date and time of departure from the origin point. Departure times apart from <i>now</i> must be specified as a dateTime.|
|arriveAt|query|string(dateTime)|false|The date and time of arrival at the destination point. It must be specified as a dateTime.|
|routeType|query|string|false|The type of route requested.|
|traffic|query|boolean|false|Determines whether current traffic is used in route calculations. Note that information on historic road speeds is always used.|
|avoid|query|string|false|Specifies whether the routing engine should try to avoid specific types of road segment when calculating the route. Can be specified multiple times.<br>Possible values:<br>  - tollRoads<br>  - motorways<br>  - ferries<br>  - unpavedRoads<br>  - carpools|
|travelMode|query|string|false|The mode of travel for the requested route.|
|hilliness|query|string|false|Degree of hilliness for calculating a thrilling route.|
|windingness|query|string|false|Amount that a thrilling route should wind.|
|vehicleMaxSpeed|query|integer|false|Maximum speed of the vehicle in km/hour.|
|vehicleWeight|query|integer|false|Weight of the vehicle in kilograms.|
|vehicleAxleWeight|query|integer|false|Weight per axle of the vehicle in kg.|
|vehicleLength|query|number(float)|false|Length of the vehicle in meters.|
|vehicleWidth|query|number(float)|false|Width of the vehicle in meters.|
|vehicleHeight|query|number(float)|false|Height of the vehicle in meters.|
|vehicleCommercial|query|boolean|false|Indicates that the vehicle is used for commercial purposes. This means it may not be allowed on certain roads.|
|vehicleLoadType|query|string|false|Indicates what kinds of hazardous materials the vehicle is carrying (if any). This means it may not be allowed on certain roads.<br>Use these for routing in the US:<br><br>  - <i>USHazmatClass1</i> Explosives<br>  - <i>USHazmatClass2</i> Compressed gas<br>  - <i>USHazmatClass3</i> Flammable liquids<br>  - <i>USHazmatClass4</i> Flammable solids<br>  - <i>USHazmatClass5</i> Oxidizers<br>  - <i>USHazmatClass6</i> Poisons<br>  - <i>USHazmatClass7</i> Radioactive<br>  - <i>USHazmatClass8</i> Corrosives<br>  - <i>USHazmatClass9</i> Miscellaneous<br><br>Use these for routing in all other countries:<br><br>  - <i>otherHazmatExplosive</i> Explosives<br>  - <i>otherHazmatGeneral</i> Miscellaneous<br>  - <i>otherHazmatHarmfulToWater</i> Harmful to water<br><br>vehicleLoadType can be specified multiple times. This parameter is currently only considered for <b>travelMode</b>=<i>truck</i>.|
|constantSpeedConsumptionInLitersPerHundredkm|query|string|false|Specifies the speed-dependent component of consumption. Provided as an unordered list of speed/consumption-rate pairs.|
|currentFuelInLiters|query|number(float)|false|Specifies the current supply of fuel in liters.|
|auxiliaryPowerInLitersPerHour|query|number(float)|false|Specifies the amount of fuel consumed for sustaining auxiliary systems of the vehicle, in liters per hour.|
|fuelEnergyDensityInMJoulesPerLiter|query|number(float)|false|Specifies the amount of chemical energy stored in one liter of fuel in megajoules (MJ).|
|accelerationEfficiency|query|number(float)|false|Specifies the efficiency of converting chemical energy stored in fuel to kinetic energy when the vehicle accelerates (i.e. KineticEnergyGained/ChemicalEnergyConsumed).|
|decelerationEfficiency|query|number(float)|false|Specifies the efficiency of converting kinetic energy to saved (not consumed) fuel when the vehicle decelerates (i.e. ChemicalEnergySaved/KineticEnergyLost).|
|uphillEfficiency|query|number(float)|false|Specifies the efficiency of converting chemical energy stored in fuel to potential energy when the vehicle gains elevation (i.e. PotentialEnergyGained/ChemicalEnergyConsumed).|
|downhillEfficiency|query|number(float)|false|Specifies the efficiency of converting potential energy to saved (not consumed) fuel when the vehicle loses elevation (i.e. ChemicalEnergySaved/PotentialEnergyLost).|
|vehicleEngineType|query|string|false|Engine type of the vehicle.|
|constantSpeedConsumptionInkWhPerHundredkm|query|string|false|Specifies the speed-dependent component of consumption. Provided as an unordered list of speed/consumption-rate pairs.|
|body|body|[calculateReachableRangePostDataParameters](#schemacalculatereachablerangepostdataparameters)|false|none|
|» allowVignette|body|[string]|false|none|
|» avoidAreas|body|object|false|none|
|» » rectangles|body|[object]|false|none|
|» » » northEastCorner|body|object|false|none|
|» » » » latitude|body|string|false|none|
|» » » » longitude|body|string|false|none|
|» » » southWestCorner|body|object|false|none|
|» » » » latitude|body|string|false|none|
|» » » » longitude|body|string|false|none|
|» avoidVignette|body|[string]|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|versionNumber|1|
|contentType|xml|
|contentType|json|
|contentType|jsonp|
|report|effectiveSettings|
|routeType|fastest|
|routeType|shortest|
|routeType|eco|
|routeType|thrilling|
|travelMode|car|
|travelMode|truck|
|travelMode|taxi|
|travelMode|bus|
|travelMode|van|
|travelMode|motorcycle|
|travelMode|bicycle|
|travelMode|pedestrian|
|hilliness|low|
|hilliness|normal|
|hilliness|high|
|windingness|low|
|windingness|normal|
|windingness|high|
|vehicleEngineType|combustion|
|vehicleEngineType|electric|

<h3 id="reachable-range-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK: a range was calculated and the body of the response contains the polygon description and further data.|None|
|400|Bad Request|Bad request: one or more parameters were incorrectly specified or are mutually exclusive, or the origin point specified in the request is not near enough to a road.|None|
|403|Forbidden|Permission, capacity, or authentication issues:<br>  - Forbidden<br>  - Not authorized<br>  - Account inactive<br>  - Account over queries per second limit<br>  - Account over rate limit<br>  - Rate limit exceeded|None|
|404|Not Found|Not Found: the requested resource could not be found, but it may be available again in the future.|None|
|405|Method Not Allowed|Method Not Allowed: the client used a HTTP method other than GET or POST.|None|
|408|Request Timeout|Request timeout.|None|
|414|URI Too Long|Requested uri is too long.|None|
|500|Internal Server Error|An error occurred while processing the request. Please try again later.|None|
|502|Bad Gateway|Internal network connectivity issue.|None|
|503|Service Unavailable|Service currently unavailable.|None|
|504|Gateway Timeout|Internal network connectivity issue or a request that has taken too long to complete.|None|
|596|596|Service not found.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Calculate Route

> Code samples

```bash
curl "https://example.com/routing/1/calculateRoute/52.50931%2C13.42936%3A52.50274%2C13.43872/xml?key=${API_KEY}"
```

`GET /routing/{versionNumber}/calculateRoute/{locations}/{contentType}`

Calculates a route between an origin and a destination.

<h3 id="calculate-route-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|versionNumber|path|integer|true|Service version number. The current value is 1.|
|locations|path|string|true|Locations through which the calculated route must pass.|
|contentType|path|string|true|The content type of the response structure. If the content type is jsonp, a callback method can be specified in the query parameters.|
|maxAlternatives|query|integer|false|Number of alternative routes to be calculated.|
|alternativeType|query|string|false|Determines whether the alternative routes to be calculated should be better with respect to the planning criteria provided than the reference route.|
|minDeviationDistance|query|integer|false|All alternative routes will follow the reference route for the specified minimum number of meters starting from the origin point.|
|minDeviationTime|query|integer|false|All alternative routes will follow the reference route for the specified minimum number of seconds starting from the origin point.|
|instructionsType|query|string|false|If specified, guidance instructions will be returned (if available).|
|language|query|string|false|The language parameter determines the language of the guidance messages.|
|computeBestOrder|query|boolean|false|Re-order the route waypoints to reduce the route length.|
|routeRepresentation|query|string|false|Specifies the representation of the set of routes provided as a response.|
|computeTravelTimeFor|query|string|false|Specifies whether to return additional travel times using different types of traffic information (none, historic, live) as well as the default best-estimate travel time.|
|vehicleHeading|query|integer|false|The directional heading of the vehicle in degrees. Entered in degrees, measured clockwise from north (so north is 0, east is 90, etc.).|
|sectionType|query|string|false|Specifies which section types are explicitly reported in the route response. Can be specified multiple times.<br>  - carTrain, ferry, tunnel or motorway<br>  - pedestrian<br>  - tollRoad<br>  - tollVignette<br>  - country<br>  - travelMode<br>  - traffic|
|callback|query|string|false|Specifies the jsonp callback method.|
|report|query|string|false|Specifies which data should be reported for diagnosis purposes.|
|departAt|query|string|false|The date and time of departure from the origin point. Departure times apart from <i>now</i> must be specified as a dateTime.|
|arriveAt|query|string(dateTime)|false|The date and time of arrival at the destination point. It must be specified as a dateTime.|
|routeType|query|string|false|The type of route requested.|
|traffic|query|boolean|false|Determines whether current traffic is used in route calculations. Note that information on historic road speeds is always used.|
|avoid|query|string|false|Specifies whether the routing engine should try to avoid specific types of road segment when calculating the route. Can be specified multiple times.<br>Possible values:<br>  - tollRoads<br>  - motorways<br>  - ferries<br>  - unpavedRoads<br>  - carpools<br>  - alreadyUsedRoads|
|travelMode|query|string|false|The mode of travel for the requested route.|
|hilliness|query|string|false|Degree of hilliness for calculating a thrilling route.|
|windingness|query|string|false|Amount that a thrilling route should wind.|
|vehicleMaxSpeed|query|integer|false|Maximum speed of the vehicle in km/hour.|
|vehicleWeight|query|integer|false|Weight of the vehicle in kilograms.|
|vehicleAxleWeight|query|integer|false|Weight per axle of the vehicle in kg.|
|vehicleLength|query|number(float)|false|Length of the vehicle in meters.|
|vehicleWidth|query|number(float)|false|Width of the vehicle in meters.|
|vehicleHeight|query|number(float)|false|Height of the vehicle in meters.|
|vehicleCommercial|query|boolean|false|Indicates that the vehicle is used for commercial purposes. This means it may not be allowed on certain roads.|
|vehicleLoadType|query|string|false|Indicates what kinds of hazardous materials the vehicle is carrying (if any). This means it may not be allowed on certain roads.<br>Use these for routing in the US:<br><br>  - <i>USHazmatClass1</i> Explosives<br>  - <i>USHazmatClass2</i> Compressed gas<br>  - <i>USHazmatClass3</i> Flammable liquids<br>  - <i>USHazmatClass4</i> Flammable solids<br>  - <i>USHazmatClass5</i> Oxidizers<br>  - <i>USHazmatClass6</i> Poisons<br>  - <i>USHazmatClass7</i> Radioactive<br>  - <i>USHazmatClass8</i> Corrosives<br>  - <i>USHazmatClass9</i> Miscellaneous<br><br>Use these for routing in all other countries:<br><br>  - <i>otherHazmatExplosive</i> Explosives<br>  - <i>otherHazmatGeneral</i> Miscellaneous<br>  - <i>otherHazmatHarmfulToWater</i> Harmful to water<br><br>vehicleLoadType can be specified multiple times. This parameter is currently only considered for <b>travelMode</b>=<i>truck</i>.|
|vehicleEngineType|query|string|false|Engine type of the vehicle.|
|constantSpeedConsumptionInLitersPerHundredkm|query|string|false|Specifies the speed-dependent component of consumption. Provided as an unordered list of speed/consumption-rate pairs.|
|currentFuelInLiters|query|number(float)|false|Specifies the current supply of fuel in liters.|
|auxiliaryPowerInLitersPerHour|query|number(float)|false|Specifies the amount of fuel consumed for sustaining auxiliary systems of the vehicle, in liters per hour.|
|fuelEnergyDensityInMJoulesPerLiter|query|number(float)|false|Specifies the amount of chemical energy stored in one liter of fuel in megajoules (MJ).|
|accelerationEfficiency|query|number(float)|false|Specifies the efficiency of converting chemical energy stored in fuel to kinetic energy when the vehicle accelerates (i.e. KineticEnergyGained/ChemicalEnergyConsumed).|
|decelerationEfficiency|query|number(float)|false|Specifies the efficiency of converting kinetic energy to saved (not consumed) fuel when the vehicle decelerates (i.e. ChemicalEnergySaved/KineticEnergyLost).|
|uphillEfficiency|query|number(float)|false|Specifies the efficiency of converting chemical energy stored in fuel to potential energy when the vehicle gains elevation (i.e. PotentialEnergyGained/ChemicalEnergyConsumed).|
|downhillEfficiency|query|number(float)|false|Specifies the efficiency of converting potential energy to saved (not consumed) fuel when the vehicle loses elevation (i.e. ChemicalEnergySaved/PotentialEnergyLost).|
|constantSpeedConsumptionInkWhPerHundredkm|query|string|false|Specifies the speed-dependent component of consumption. Provided as an unordered list of speed/consumption-rate pairs.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|versionNumber|1|
|contentType|xml|
|contentType|json|
|contentType|jsonp|
|alternativeType|anyRoute|
|alternativeType|betterRoute|
|instructionsType|coded|
|instructionsType|text|
|instructionsType|tagged|
|routeRepresentation|polyline|
|routeRepresentation|none|
|computeTravelTimeFor|none|
|computeTravelTimeFor|all|
|report|effectiveSettings|
|routeType|fastest|
|routeType|shortest|
|routeType|eco|
|routeType|thrilling|
|travelMode|car|
|travelMode|truck|
|travelMode|taxi|
|travelMode|bus|
|travelMode|van|
|travelMode|motorcycle|
|travelMode|bicycle|
|travelMode|pedestrian|
|hilliness|low|
|hilliness|normal|
|hilliness|high|
|windingness|low|
|windingness|normal|
|windingness|high|
|vehicleEngineType|combustion|
|vehicleEngineType|electric|

<h3 id="calculate-route-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK: a route was calculated and the body of the response contains the route description and any other requested data.|None|
|400|Bad Request|Bad request: one or more parameters were incorrectly specified, are mutually exclusive, the points in the request are not connected by the road network or the points in the request are not near enough to a road.|None|
|403|Forbidden|Permission, capacity, or authentication issues:<br>  - Forbidden<br>  - Not authorized<br>  - Account inactive<br>  - Account over queries per second limit<br>  - Account over rate limit<br>  - Rate limit exceeded|None|
|404|Not Found|Not Found: the requested resource could not be found, but it may be available again in the future.|None|
|405|Method Not Allowed|Method Not Allowed: the client used a HTTP method other than GET or POST.|None|
|408|Request Timeout|Request timeout.|None|
|414|URI Too Long|Requested uri is too long.|None|
|500|Internal Server Error|An error occurred while processing the request. Please try again later.|None|
|502|Bad Gateway|Internal network connectivity issue.|None|
|503|Service Unavailable|Service currently unavailable.|None|
|504|Gateway Timeout|Internal network connectivity issue or a request that has taken too long to complete.|None|
|596|596|Service not found.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Calculate Route

> Code samples

```bash
curl "https://example.com/routing/1/calculateRoute/52.50931%2C13.42936%3A52.50274%2C13.43872/xml?key=${API_KEY}" \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "avoidAreas": {
      "rectangles": [
        {
          "northEastCorner": {
            "latitude": 48.90309,
            "longitude": 2.41115
          },
          "southWestCorner": {
            "latitude": 48.81851,
            "longitude": 2.26593
          }
        }
      ]
    },
    "avoidVignette": [
      "AUS",
      "CHE"
    ],
    "supportingPoints": [
      {
        "latitude": 52.5093,
        "longitude": 13.42936
      },
      {
        "latitude": 52.50844,
        "longitude": 13.42859
      }
    ]
  }'
```

`POST /routing/{versionNumber}/calculateRoute/{locations}/{contentType}`

Calculates a route between an origin and a destination. POST method handles additionally parameters: <em>supportingPoints</em>, <em>allowVignette</em>, <em>avoidVignette</em>, <em>avoidAreas</em>.

> Body parameter

```json
{
  "avoidAreas": {
    "rectangles": [
      {
        "northEastCorner": {
          "latitude": 48.90309,
          "longitude": 2.41115
        },
        "southWestCorner": {
          "latitude": 48.81851,
          "longitude": 2.26593
        }
      }
    ]
  },
  "avoidVignette": [
    "AUS",
    "CHE"
  ],
  "supportingPoints": [
    {
      "latitude": 52.5093,
      "longitude": 13.42936
    },
    {
      "latitude": 52.50844,
      "longitude": 13.42859
    }
  ]
}
```

<h3 id="calculate-route-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|versionNumber|path|integer|true|Service version number. The current value is 1.|
|locations|path|string|true|Locations through which the calculated route must pass.|
|contentType|path|string|true|The content type of the response structure. If the content type is jsonp, a callback method can be specified in the query parameters.|
|maxAlternatives|query|integer|false|Number of alternative routes to be calculated.|
|alternativeType|query|string|false|Determines whether the alternative routes to be calculated should be better with respect to the planning criteria provided than the reference route.|
|minDeviationDistance|query|integer|false|All alternative routes will follow the reference route for the specified minimum number of meters starting from the origin point.|
|minDeviationTime|query|integer|false|All alternative routes will follow the reference route for the specified minimum number of seconds starting from the origin point.|
|instructionsType|query|string|false|If specified, guidance instructions will be returned (if available).|
|language|query|string|false|The language parameter determines the language of the guidance messages.|
|computeBestOrder|query|boolean|false|Re-order the route waypoints to reduce the route length.|
|routeRepresentation|query|string|false|Specifies the representation of the set of routes provided as a response.|
|computeTravelTimeFor|query|string|false|Specifies whether to return additional travel times using different types of traffic information (none, historic, live) as well as the default best-estimate travel time.|
|vehicleHeading|query|integer|false|The directional heading of the vehicle in degrees. Entered in degrees, measured clockwise from north (so north is 0, east is 90, etc.).|
|sectionType|query|string|false|Specifies which section types are explicitly reported in the route response. Can be specified multiple times.<br>  - carTrain, ferry, tunnel or motorway<br>  - pedestrian<br>  - tollRoad<br>  - tollVignette<br>  - country<br>  - travelMode<br>  - traffic|
|callback|query|string|false|Specifies the jsonp callback method.|
|report|query|string|false|Specifies which data should be reported for diagnosis purposes.|
|departAt|query|string|false|The date and time of departure from the origin point. Departure times apart from <i>now</i> must be specified as a dateTime.|
|arriveAt|query|string(dateTime)|false|The date and time of arrival at the destination point. It must be specified as a dateTime.|
|routeType|query|string|false|The type of route requested.|
|traffic|query|boolean|false|Determines whether current traffic is used in route calculations. Note that information on historic road speeds is always used.|
|avoid|query|string|false|Specifies whether the routing engine should try to avoid specific types of road segment when calculating the route. Can be specified multiple times.<br>Possible values:<br>  - tollRoads<br>  - motorways<br>  - ferries<br>  - unpavedRoads<br>  - carpools<br>  - alreadyUsedRoads|
|travelMode|query|string|false|The mode of travel for the requested route.|
|hilliness|query|string|false|Degree of hilliness for calculating a thrilling route.|
|windingness|query|string|false|Amount that a thrilling route should wind.|
|vehicleMaxSpeed|query|integer|false|Maximum speed of the vehicle in km/hour.|
|vehicleWeight|query|integer|false|Weight of the vehicle in kilograms.|
|vehicleAxleWeight|query|integer|false|Weight per axle of the vehicle in kg.|
|vehicleLength|query|number(float)|false|Length of the vehicle in meters.|
|vehicleWidth|query|number(float)|false|Width of the vehicle in meters.|
|vehicleHeight|query|number(float)|false|Height of the vehicle in meters.|
|vehicleCommercial|query|boolean|false|Indicates that the vehicle is used for commercial purposes. This means it may not be allowed on certain roads.|
|vehicleLoadType|query|string|false|Indicates what kinds of hazardous materials the vehicle is carrying (if any). This means it may not be allowed on certain roads.<br>Use these for routing in the US:<br><br>  - <i>USHazmatClass1</i> Explosives<br>  - <i>USHazmatClass2</i> Compressed gas<br>  - <i>USHazmatClass3</i> Flammable liquids<br>  - <i>USHazmatClass4</i> Flammable solids<br>  - <i>USHazmatClass5</i> Oxidizers<br>  - <i>USHazmatClass6</i> Poisons<br>  - <i>USHazmatClass7</i> Radioactive<br>  - <i>USHazmatClass8</i> Corrosives<br>  - <i>USHazmatClass9</i> Miscellaneous<br><br>Use these for routing in all other countries:<br><br>  - <i>otherHazmatExplosive</i> Explosives<br>  - <i>otherHazmatGeneral</i> Miscellaneous<br>  - <i>otherHazmatHarmfulToWater</i> Harmful to water<br><br>vehicleLoadType can be specified multiple times. This parameter is currently only considered for <b>travelMode</b>=<i>truck</i>.|
|vehicleEngineType|query|string|false|Engine type of the vehicle.|
|constantSpeedConsumptionInLitersPerHundredkm|query|string|false|Specifies the speed-dependent component of consumption. Provided as an unordered list of speed/consumption-rate pairs.|
|currentFuelInLiters|query|number(float)|false|Specifies the current supply of fuel in liters.|
|auxiliaryPowerInLitersPerHour|query|number(float)|false|Specifies the amount of fuel consumed for sustaining auxiliary systems of the vehicle, in liters per hour.|
|fuelEnergyDensityInMJoulesPerLiter|query|number(float)|false|Specifies the amount of chemical energy stored in one liter of fuel in megajoules (MJ).|
|accelerationEfficiency|query|number(float)|false|Specifies the efficiency of converting chemical energy stored in fuel to kinetic energy when the vehicle accelerates (i.e. KineticEnergyGained/ChemicalEnergyConsumed).|
|decelerationEfficiency|query|number(float)|false|Specifies the efficiency of converting kinetic energy to saved (not consumed) fuel when the vehicle decelerates (i.e. ChemicalEnergySaved/KineticEnergyLost).|
|uphillEfficiency|query|number(float)|false|Specifies the efficiency of converting chemical energy stored in fuel to potential energy when the vehicle gains elevation (i.e. PotentialEnergyGained/ChemicalEnergyConsumed).|
|downhillEfficiency|query|number(float)|false|Specifies the efficiency of converting potential energy to saved (not consumed) fuel when the vehicle loses elevation (i.e. ChemicalEnergySaved/PotentialEnergyLost).|
|constantSpeedConsumptionInkWhPerHundredkm|query|string|false|Specifies the speed-dependent component of consumption. Provided as an unordered list of speed/consumption-rate pairs.|
|body|body|[calculateRoutePostDataParameters](#schemacalculateroutepostdataparameters)|false|none|
|» allowVignette|body|[string]|false|none|
|» avoidAreas|body|object|false|none|
|» » rectangles|body|[object]|false|none|
|» » » northEastCorner|body|object|false|none|
|» » » » latitude|body|string|false|none|
|» » » » longitude|body|string|false|none|
|» » » southWestCorner|body|object|false|none|
|» » » » latitude|body|string|false|none|
|» » » » longitude|body|string|false|none|
|» avoidVignette|body|[string]|false|none|
|» supportingPoints|body|[object]|false|none|
|» » latitude|body|string|false|none|
|» » longitude|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|versionNumber|1|
|contentType|xml|
|contentType|json|
|contentType|jsonp|
|alternativeType|anyRoute|
|alternativeType|betterRoute|
|instructionsType|coded|
|instructionsType|text|
|instructionsType|tagged|
|routeRepresentation|polyline|
|routeRepresentation|none|
|computeTravelTimeFor|none|
|computeTravelTimeFor|all|
|report|effectiveSettings|
|routeType|fastest|
|routeType|shortest|
|routeType|eco|
|routeType|thrilling|
|travelMode|car|
|travelMode|truck|
|travelMode|taxi|
|travelMode|bus|
|travelMode|van|
|travelMode|motorcycle|
|travelMode|bicycle|
|travelMode|pedestrian|
|hilliness|low|
|hilliness|normal|
|hilliness|high|
|windingness|low|
|windingness|normal|
|windingness|high|
|vehicleEngineType|combustion|
|vehicleEngineType|electric|

<h3 id="calculate-route-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK: a route was calculated and the body of the response contains the route description and any other requested data.|None|
|400|Bad Request|Bad request: one or more parameters were incorrectly specified, are mutually exclusive, the points in the request are not connected by the road network or the points in the request are not near enough to a road.|None|
|403|Forbidden|Permission, capacity, or authentication issues:<br>  - Forbidden<br>  - Not authorized<br>  - Account inactive<br>  - Account over queries per second limit<br>  - Account over rate limit<br>  - Rate limit exceeded|None|
|404|Not Found|Not Found: the requested resource could not be found, but it may be available again in the future.|None|
|405|Method Not Allowed|Method Not Allowed: the client used a HTTP method other than GET or POST.|None|
|408|Request Timeout|Request timeout.|None|
|414|URI Too Long|Requested uri is too long.|None|
|500|Internal Server Error|An error occurred while processing the request. Please try again later.|None|
|502|Bad Gateway|Internal network connectivity issue.|None|
|503|Service Unavailable|Service currently unavailable.|None|
|504|Gateway Timeout|Internal network connectivity issue or a request that has taken too long to complete.|None|
|596|596|Service not found.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

# Schemas

<h2 id="tocS_calculateReachableRangePostDataParameters">calculateReachableRangePostDataParameters</h2>
<!-- backwards compatibility -->
<a id="schemacalculatereachablerangepostdataparameters"></a>
<a id="schema_calculateReachableRangePostDataParameters"></a>
<a id="tocScalculatereachablerangepostdataparameters"></a>
<a id="tocscalculatereachablerangepostdataparameters"></a>

```json
{
  "avoidAreas": {
    "rectangles": [
      {
        "northEastCorner": {
          "latitude": 48.90309,
          "longitude": 2.41115
        },
        "southWestCorner": {
          "latitude": 48.81851,
          "longitude": 2.26593
        }
      }
    ]
  },
  "avoidVignette": [
    "AUS",
    "CHE"
  ],
  "supportingPoints": [
    {
      "latitude": 52.5093,
      "longitude": 13.42936
    },
    {
      "latitude": 52.50844,
      "longitude": 13.42859
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowVignette|[string]|false|none|none|
|avoidAreas|object|false|none|none|
|avoidVignette|[string]|false|none|none|

<h2 id="tocS_calculateRoutePostDataParameters">calculateRoutePostDataParameters</h2>
<!-- backwards compatibility -->
<a id="schemacalculateroutepostdataparameters"></a>
<a id="schema_calculateRoutePostDataParameters"></a>
<a id="tocScalculateroutepostdataparameters"></a>
<a id="tocscalculateroutepostdataparameters"></a>

```json
{
  "avoidAreas": {
    "rectangles": [
      {
        "northEastCorner": {
          "latitude": 48.90309,
          "longitude": 2.41115
        },
        "southWestCorner": {
          "latitude": 48.81851,
          "longitude": 2.26593
        }
      }
    ]
  },
  "avoidVignette": [
    "AUS",
    "CHE"
  ],
  "supportingPoints": [
    {
      "latitude": 52.5093,
      "longitude": 13.42936
    },
    {
      "latitude": 52.50844,
      "longitude": 13.42859
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowVignette|[string]|false|none|none|
|avoidAreas|object|false|none|none|
|avoidVignette|[string]|false|none|none|
|supportingPoints|[object]|false|none|none|
