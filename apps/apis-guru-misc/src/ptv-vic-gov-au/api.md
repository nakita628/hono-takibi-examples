<h1 id="ptv-timetable-api---version-3">PTV Timetable API - Version 3 v3</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The PTV Timetable API provides direct access to Public Transport Victoria’s public transport timetable data.

The API returns scheduled timetable, route and stop data for all metropolitan and regional train, tram and bus services in Victoria, including Night Network(Night Train and Night Tram data are included in metropolitan train and tram services data, respectively, whereas Night Bus is a separate route type).

The API also returns real-time data for metropolitan train, tram and bus services (where this data is made available to PTV), as well as disruption information, stop facility information, and access to myki ticket outlet data.

This Swagger is for Version 3 of the PTV Timetable API. By using this documentation you agree to comply with the licence and terms of service.

Train timetable data is updated daily, while the remaining data is updated weekly, taking into account any planned timetable changes (for example, due to holidays or planned disruptions). The PTV timetable API is the same API used by PTV for its apps. To access the most up to date data PTV has (including real-time data) you must use the API dynamically.

You can access the PTV Timetable API through a HTTP or HTTPS interface, as follows:

    base URL / version number / API name / query string
The base URL is either:
  *  http://timetableapi.ptv.vic.gov.au
or
  *  https://timetableapi.ptv.vic.gov.au

The Swagger JSON file is available at http://timetableapi.ptv.vic.gov.au/swagger/docs/v3

Frequently asked questions are available on the PTV website at http://ptv.vic.gov.au/apifaq

Links to the following information are also provided on the PTV website at http://ptv.vic.gov.au/ptv-timetable-api/
* How to register for an API key and calculate a signature
* PTV Timetable API V2 to V3 Migration Guide
* Documentation for Version 2 of the PTV Timetable API
* PTV Timetable API Data Quality Statement

All information about how to use the API is in this documentation. PTV cannot provide technical support for the API.

Credits: This page has been based on Steve Bennett's http://opentransportdata.org/, used with permission.

Base URLs:

* <a href="http://timetableapi.ptv.vic.gov.au">http://timetableapi.ptv.vic.gov.au</a>

* <a href="https://timetableapi.ptv.vic.gov.au">https://timetableapi.ptv.vic.gov.au</a>

Web: <a href="http://ptv.vic.gov.au/digital">Public Transport Victoria</a> 
License: <a href="https://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International</a>

<h1 id="ptv-timetable-api---version-3-departures">Departures</h1>

## View departures for all routes from a stop

<a id="opIdDepartures_GetForStop"></a>

> Code samples

```bash
curl https://example.com/v3/departures/route_type/0/stop/0 \
  -H 'Accept: application/json'
```

`GET /v3/departures/route_type/{route_type}/stop/{stop_id}`

<h3 id="view-departures-for-all-routes-from-a-stop-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|route_type|path|integer(int32)|true|Number identifying transport mode; values returned via RouteTypes API|
|stop_id|path|integer(int32)|true|Identifier of stop; values returned by Stops API|
|platform_numbers|query|[integer(int32)]|false|Filter by platform number at stop|
|direction_id|query|integer(int32)|false|Filter by identifier of direction of travel; values returned by Directions API - /v3/directions/route/{route_id}|
|gtfs|query|boolean|false|Indicates that stop_id parameter will accept "GTFS stop_id" data|
|date_utc|query|string(date-time)|false|Filter by the date and time of the request (ISO 8601 UTC format) (default = current date and time)|
|max_results|query|integer(int32)|false|Maximum number of results returned|
|include_cancelled|query|boolean|false|Indicates if cancelled services (if they exist) are returned (default = false) - metropolitan train only|
|look_backwards|query|boolean|false|Indicates if filtering runs (and their departures) to those that arrive at destination before date_utc (default = false). Requires max_results &gt; 0.|
|expand|query|[string]|false|List of objects to be returned in full (i.e. expanded) - options include: All, Stop, Route, Run, Direction, Disruption, VehiclePosition, VehicleDescriptor or None.<br>            Run must be expanded to receive VehiclePosition and VehicleDescriptor information.|
|include_geopath|query|boolean|false|Indicates if the route geopath should be returned|
|token|query|string|false|Please ignore|
|devid|query|string|false|Your developer id|
|signature|query|string|false|Authentication signature for request|

#### Enumerated Values

|Parameter|Value|
|---|---|
|route_type|0|
|route_type|1|
|route_type|2|
|route_type|3|
|route_type|4|
|expand|All|
|expand|Stop|
|expand|Route|
|expand|Run|
|expand|Direction|
|expand|Disruption|
|expand|VehicleDescriptor|
|expand|VehiclePosition|
|expand|None|

> Example responses

> 200 Response

```json
{
  "departures": [
    {
      "at_platform": true,
      "departure_sequence": 0,
      "direction_id": 0,
      "disruption_ids": [
        0
      ],
      "estimated_departure_utc": "1970-01-01T00:00:00Z",
      "flags": "string",
      "platform_number": "string",
      "route_id": 0,
      "run_id": 0,
      "run_ref": "string",
      "scheduled_departure_utc": "1970-01-01T00:00:00Z",
      "stop_id": 0
    }
  ],
  "directions": {
    "property1": {
      "direction_id": 0,
      "direction_name": "string",
      "route_id": 0,
      "route_type": 0
    },
    "property2": {
      "direction_id": 0,
      "direction_name": "string",
      "route_id": 0,
      "route_type": 0
    }
  },
  "disruptions": {
    "property1": {
      "colour": "string",
      "description": "string",
      "display_on_board": true,
      "display_status": true,
      "disruption_id": 0,
      "disruption_status": "string",
      "disruption_type": "string",
      "from_date": "1970-01-01T00:00:00Z",
      "last_updated": "1970-01-01T00:00:00Z",
      "published_on": "1970-01-01T00:00:00Z",
      "routes": [
        {
          "direction": {
            "direction_id": 0,
            "direction_name": "string",
            "route_direction_id": 0,
            "service_time": "string"
          },
          "route_gtfs_id": "string",
          "route_id": 0,
          "route_name": "string",
          "route_number": "string",
          "route_type": 0
        }
      ],
      "stops": [
        {
          "stop_id": 0,
          "stop_name": "string"
        }
      ],
      "title": "string",
      "to_date": "1970-01-01T00:00:00Z",
      "url": "string"
    },
    "property2": {
      "colour": "string",
      "description": "string",
      "display_on_board": true,
      "display_status": true,
      "disruption_id": 0,
      "disruption_status": "string",
      "disruption_type": "string",
      "from_date": "1970-01-01T00:00:00Z",
      "last_updated": "1970-01-01T00:00:00Z",
      "published_on": "1970-01-01T00:00:00Z",
      "routes": [
        {
          "direction": {
            "direction_id": 0,
            "direction_name": "string",
            "route_direction_id": 0,
            "service_time": "string"
          },
          "route_gtfs_id": "string",
          "route_id": 0,
          "route_name": "string",
          "route_number": "string",
          "route_type": 0
        }
      ],
      "stops": [
        {
          "stop_id": 0,
          "stop_name": "string"
        }
      ],
      "title": "string",
      "to_date": "1970-01-01T00:00:00Z",
      "url": "string"
    }
  },
  "routes": {
    "property1": {},
    "property2": {}
  },
  "runs": {
    "property1": {
      "destination_name": "string",
      "direction_id": 0,
      "express_stop_count": 0,
      "final_stop_id": 0,
      "geopath": [
        {}
      ],
      "route_id": 0,
      "route_type": 0,
      "run_id": 0,
      "run_ref": "string",
      "run_sequence": 0,
      "status": "string",
      "vehicle_descriptor": {
        "air_conditioned": true,
        "description": "string",
        "id": "string",
        "length": "string",
        "low_floor": true,
        "operator": "string",
        "supplier": "string"
      },
      "vehicle_position": {
        "bearing": 0,
        "datetime_utc": "1970-01-01T00:00:00Z",
        "direction": "string",
        "easting": 0,
        "expiry_time": "1970-01-01T00:00:00Z",
        "latitude": 0,
        "longitude": 0,
        "northing": 0,
        "supplier": "string"
      }
    },
    "property2": {
      "destination_name": "string",
      "direction_id": 0,
      "express_stop_count": 0,
      "final_stop_id": 0,
      "geopath": [
        {}
      ],
      "route_id": 0,
      "route_type": 0,
      "run_id": 0,
      "run_ref": "string",
      "run_sequence": 0,
      "status": "string",
      "vehicle_descriptor": {
        "air_conditioned": true,
        "description": "string",
        "id": "string",
        "length": "string",
        "low_floor": true,
        "operator": "string",
        "supplier": "string"
      },
      "vehicle_position": {
        "bearing": 0,
        "datetime_utc": "1970-01-01T00:00:00Z",
        "direction": "string",
        "easting": 0,
        "expiry_time": "1970-01-01T00:00:00Z",
        "latitude": 0,
        "longitude": 0,
        "northing": 0,
        "supplier": "string"
      }
    }
  },
  "status": {
    "health": 0,
    "version": "string"
  },
  "stops": {
    "property1": {
      "route_type": 0,
      "stop_distance": 0,
      "stop_id": 0,
      "stop_landmark": "string",
      "stop_latitude": 0,
      "stop_longitude": 0,
      "stop_name": "string",
      "stop_sequence": 0,
      "stop_suburb": "string"
    },
    "property2": {
      "route_type": 0,
      "stop_distance": 0,
      "stop_id": 0,
      "stop_landmark": "string",
      "stop_latitude": 0,
      "stop_longitude": 0,
      "stop_name": "string",
      "stop_sequence": 0,
      "stop_suburb": "string"
    }
  }
}
```

> 400 Response

```json
{
  "message": "string",
  "status": {
    "health": 0,
    "version": "string"
  }
}
```

> 403 Response

```json
{
  "message": "string",
  "status": {
    "health": 0,
    "version": "string"
  }
}
```

<h3 id="view-departures-for-all-routes-from-a-stop-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Service departures from the specified stop for all routes of the specified route type; departures are timetabled and real-time (if applicable).|[V3.DeparturesResponse](#schemav3.departuresresponse)|
|400|Bad Request|Invalid Request|[V3.ErrorResponse](#schemav3.errorresponse)|
|403|Forbidden|Access Denied|[V3.ErrorResponse](#schemav3.errorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## View departures for a specific route from a stop

<a id="opIdDepartures_GetForStopAndRoute"></a>

> Code samples

```bash
curl https://example.com/v3/departures/route_type/0/stop/0/route/string \
  -H 'Accept: application/json'
```

`GET /v3/departures/route_type/{route_type}/stop/{stop_id}/route/{route_id}`

<h3 id="view-departures-for-a-specific-route-from-a-stop-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|route_type|path|integer(int32)|true|Number identifying transport mode; values returned via RouteTypes API|
|stop_id|path|integer(int32)|true|Identifier of stop; values returned by Stops API|
|route_id|path|string|true|Identifier of route; values returned by Routes API - v3/routes|
|direction_id|query|integer(int32)|false|Filter by identifier of direction of travel; values returned by Directions API - /v3/directions/route/{route_id}|
|gtfs|query|boolean|false|Indicates that stop_id parameter will accept "GTFS stop_id" data|
|date_utc|query|string(date-time)|false|Filter by the date and time of the request (ISO 8601 UTC format) (default = current date and time)|
|max_results|query|integer(int32)|false|Maximum number of results returned|
|include_cancelled|query|boolean|false|Indicates if cancelled services (if they exist) are returned (default = false) - metropolitan train only|
|look_backwards|query|boolean|false|Indicates if filtering runs (and their departures) to those that arrive at destination before date_utc (default = false). Requires max_results &gt; 0.|
|expand|query|[string]|false|List of objects to be returned in full (i.e. expanded) - options include: All, Stop, Route, Run, Direction, Disruption, VehiclePosition, VehicleDescriptor or None.<br>            Run must be expanded to receive VehiclePosition and VehicleDescriptor information.|
|include_geopath|query|boolean|false|Indicates if the route geopath should be returned|
|token|query|string|false|Please ignore|
|devid|query|string|false|Your developer id|
|signature|query|string|false|Authentication signature for request|

#### Enumerated Values

|Parameter|Value|
|---|---|
|route_type|0|
|route_type|1|
|route_type|2|
|route_type|3|
|route_type|4|
|expand|All|
|expand|Stop|
|expand|Route|
|expand|Run|
|expand|Direction|
|expand|Disruption|
|expand|VehicleDescriptor|
|expand|VehiclePosition|
|expand|None|

> Example responses

> 200 Response

```json
{
  "departures": [
    {
      "at_platform": true,
      "departure_sequence": 0,
      "direction_id": 0,
      "disruption_ids": [
        0
      ],
      "estimated_departure_utc": "1970-01-01T00:00:00Z",
      "flags": "string",
      "platform_number": "string",
      "route_id": 0,
      "run_id": 0,
      "run_ref": "string",
      "scheduled_departure_utc": "1970-01-01T00:00:00Z",
      "stop_id": 0
    }
  ],
  "directions": {
    "property1": {
      "direction_id": 0,
      "direction_name": "string",
      "route_id": 0,
      "route_type": 0
    },
    "property2": {
      "direction_id": 0,
      "direction_name": "string",
      "route_id": 0,
      "route_type": 0
    }
  },
  "disruptions": {
    "property1": {
      "colour": "string",
      "description": "string",
      "display_on_board": true,
      "display_status": true,
      "disruption_id": 0,
      "disruption_status": "string",
      "disruption_type": "string",
      "from_date": "1970-01-01T00:00:00Z",
      "last_updated": "1970-01-01T00:00:00Z",
      "published_on": "1970-01-01T00:00:00Z",
      "routes": [
        {
          "direction": {
            "direction_id": 0,
            "direction_name": "string",
            "route_direction_id": 0,
            "service_time": "string"
          },
          "route_gtfs_id": "string",
          "route_id": 0,
          "route_name": "string",
          "route_number": "string",
          "route_type": 0
        }
      ],
      "stops": [
        {
          "stop_id": 0,
          "stop_name": "string"
        }
      ],
      "title": "string",
      "to_date": "1970-01-01T00:00:00Z",
      "url": "string"
    },
    "property2": {
      "colour": "string",
      "description": "string",
      "display_on_board": true,
      "display_status": true,
      "disruption_id": 0,
      "disruption_status": "string",
      "disruption_type": "string",
      "from_date": "1970-01-01T00:00:00Z",
      "last_updated": "1970-01-01T00:00:00Z",
      "published_on": "1970-01-01T00:00:00Z",
      "routes": [
        {
          "direction": {
            "direction_id": 0,
            "direction_name": "string",
            "route_direction_id": 0,
            "service_time": "string"
          },
          "route_gtfs_id": "string",
          "route_id": 0,
          "route_name": "string",
          "route_number": "string",
          "route_type": 0
        }
      ],
      "stops": [
        {
          "stop_id": 0,
          "stop_name": "string"
        }
      ],
      "title": "string",
      "to_date": "1970-01-01T00:00:00Z",
      "url": "string"
    }
  },
  "routes": {
    "property1": {},
    "property2": {}
  },
  "runs": {
    "property1": {
      "destination_name": "string",
      "direction_id": 0,
      "express_stop_count": 0,
      "final_stop_id": 0,
      "geopath": [
        {}
      ],
      "route_id": 0,
      "route_type": 0,
      "run_id": 0,
      "run_ref": "string",
      "run_sequence": 0,
      "status": "string",
      "vehicle_descriptor": {
        "air_conditioned": true,
        "description": "string",
        "id": "string",
        "length": "string",
        "low_floor": true,
        "operator": "string",
        "supplier": "string"
      },
      "vehicle_position": {
        "bearing": 0,
        "datetime_utc": "1970-01-01T00:00:00Z",
        "direction": "string",
        "easting": 0,
        "expiry_time": "1970-01-01T00:00:00Z",
        "latitude": 0,
        "longitude": 0,
        "northing": 0,
        "supplier": "string"
      }
    },
    "property2": {
      "destination_name": "string",
      "direction_id": 0,
      "express_stop_count": 0,
      "final_stop_id": 0,
      "geopath": [
        {}
      ],
      "route_id": 0,
      "route_type": 0,
      "run_id": 0,
      "run_ref": "string",
      "run_sequence": 0,
      "status": "string",
      "vehicle_descriptor": {
        "air_conditioned": true,
        "description": "string",
        "id": "string",
        "length": "string",
        "low_floor": true,
        "operator": "string",
        "supplier": "string"
      },
      "vehicle_position": {
        "bearing": 0,
        "datetime_utc": "1970-01-01T00:00:00Z",
        "direction": "string",
        "easting": 0,
        "expiry_time": "1970-01-01T00:00:00Z",
        "latitude": 0,
        "longitude": 0,
        "northing": 0,
        "supplier": "string"
      }
    }
  },
  "status": {
    "health": 0,
    "version": "string"
  },
  "stops": {
    "property1": {
      "route_type": 0,
      "stop_distance": 0,
      "stop_id": 0,
      "stop_landmark": "string",
      "stop_latitude": 0,
      "stop_longitude": 0,
      "stop_name": "string",
      "stop_sequence": 0,
      "stop_suburb": "string"
    },
    "property2": {
      "route_type": 0,
      "stop_distance": 0,
      "stop_id": 0,
      "stop_landmark": "string",
      "stop_latitude": 0,
      "stop_longitude": 0,
      "stop_name": "string",
      "stop_sequence": 0,
      "stop_suburb": "string"
    }
  }
}
```

> 400 Response

```json
{
  "message": "string",
  "status": {
    "health": 0,
    "version": "string"
  }
}
```

> 403 Response

```json
{
  "message": "string",
  "status": {
    "health": 0,
    "version": "string"
  }
}
```

<h3 id="view-departures-for-a-specific-route-from-a-stop-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Service departures from the specified stop for the specified route (and route type); departures are timetabled and real-time (if applicable).|[V3.DeparturesResponse](#schemav3.departuresresponse)|
|400|Bad Request|Invalid Request|[V3.ErrorResponse](#schemav3.errorresponse)|
|403|Forbidden|Access Denied|[V3.ErrorResponse](#schemav3.errorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="ptv-timetable-api---version-3-directions">Directions</h1>

## View directions that a route travels in

<a id="opIdDirections_ForRoute"></a>

> Code samples

```bash
curl https://example.com/v3/directions/route/0 \
  -H 'Accept: application/json'
```

`GET /v3/directions/route/{route_id}`

<h3 id="view-directions-that-a-route-travels-in-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|route_id|path|integer(int32)|true|Identifier of route; values returned by Routes API - v3/routes|
|token|query|string|false|Please ignore|
|devid|query|string|false|Your developer id|
|signature|query|string|false|Authentication signature for request|

> Example responses

> 200 Response

```json
{
  "directions": [
    {
      "direction_id": 0,
      "direction_name": "string",
      "route_direction_description": "string",
      "route_id": 0,
      "route_type": 0
    }
  ],
  "status": {
    "health": 0,
    "version": "string"
  }
}
```

> 400 Response

```json
{
  "message": "string",
  "status": {
    "health": 0,
    "version": "string"
  }
}
```

> 403 Response

```json
{
  "message": "string",
  "status": {
    "health": 0,
    "version": "string"
  }
}
```

<h3 id="view-directions-that-a-route-travels-in-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The directions that a specified route travels in.|[V3.DirectionsResponse](#schemav3.directionsresponse)|
|400|Bad Request|Invalid Request|[V3.ErrorResponse](#schemav3.errorresponse)|
|403|Forbidden|Access Denied|[V3.ErrorResponse](#schemav3.errorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## View all routes for a direction of travel

<a id="opIdDirections_ForDirection"></a>

> Code samples

```bash
curl https://example.com/v3/directions/0 \
  -H 'Accept: application/json'
```

`GET /v3/directions/{direction_id}`

<h3 id="view-all-routes-for-a-direction-of-travel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|direction_id|path|integer(int32)|true|Identifier of direction of travel; values returned by Directions API - /v3/directions/route/{route_id}|
|token|query|string|false|Please ignore|
|devid|query|string|false|Your developer id|
|signature|query|string|false|Authentication signature for request|

> Example responses

> 200 Response

```json
{
  "directions": [
    {
      "direction_id": 0,
      "direction_name": "string",
      "route_direction_description": "string",
      "route_id": 0,
      "route_type": 0
    }
  ],
  "status": {
    "health": 0,
    "version": "string"
  }
}
```

> 400 Response

```json
{
  "message": "string",
  "status": {
    "health": 0,
    "version": "string"
  }
}
```

> 403 Response

```json
{
  "message": "string",
  "status": {
    "health": 0,
    "version": "string"
  }
}
```

<h3 id="view-all-routes-for-a-direction-of-travel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|All routes that travel in the specified direction.|[V3.DirectionsResponse](#schemav3.directionsresponse)|
|400|Bad Request|Invalid Request|[V3.ErrorResponse](#schemav3.errorresponse)|
|403|Forbidden|Access Denied|[V3.ErrorResponse](#schemav3.errorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## View all routes of a particular type for a direction of travel

<a id="opIdDirections_ForDirectionAndType"></a>

> Code samples

```bash
curl https://example.com/v3/directions/0/route_type/0 \
  -H 'Accept: application/json'
```

`GET /v3/directions/{direction_id}/route_type/{route_type}`

<h3 id="view-all-routes-of-a-particular-type-for-a-direction-of-travel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|direction_id|path|integer(int32)|true|Identifier of direction of travel; values returned by Directions API - /v3/directions/route/{route_id}|
|route_type|path|integer(int32)|true|Number identifying transport mode; values returned via RouteTypes API|
|token|query|string|false|Please ignore|
|devid|query|string|false|Your developer id|
|signature|query|string|false|Authentication signature for request|

#### Enumerated Values

|Parameter|Value|
|---|---|
|route_type|0|
|route_type|1|
|route_type|2|
|route_type|3|
|route_type|4|

> Example responses

> 200 Response

```json
{
  "directions": [
    {
      "direction_id": 0,
      "direction_name": "string",
      "route_direction_description": "string",
      "route_id": 0,
      "route_type": 0
    }
  ],
  "status": {
    "health": 0,
    "version": "string"
  }
}
```

> 400 Response

```json
{
  "message": "string",
  "status": {
    "health": 0,
    "version": "string"
  }
}
```

> 403 Response

```json
{
  "message": "string",
  "status": {
    "health": 0,
    "version": "string"
  }
}
```

<h3 id="view-all-routes-of-a-particular-type-for-a-direction-of-travel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|All routes of the specified route type that travel in the specified direction.|[V3.DirectionsResponse](#schemav3.directionsresponse)|
|400|Bad Request|Invalid Request|[V3.ErrorResponse](#schemav3.errorresponse)|
|403|Forbidden|Access Denied|[V3.ErrorResponse](#schemav3.errorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="ptv-timetable-api---version-3-disruptions">Disruptions</h1>

## View all disruptions for all route types

<a id="opIdDisruptions_GetAllDisruptions"></a>

> Code samples

```bash
curl https://example.com/v3/disruptions \
  -H 'Accept: application/json'
```

`GET /v3/disruptions`

<h3 id="view-all-disruptions-for-all-route-types-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|route_types|query|[integer(int32)]|false|Filter by route_type; values returned via RouteTypes API|
|disruption_modes|query|[integer(int32)]|false|Filter by disruption_mode; values returned via v3/disruptions/modes API|
|disruption_status|query|string|false|Filter by status of disruption|
|token|query|string|false|Please ignore|
|devid|query|string|false|Your developer id|
|signature|query|string|false|Authentication signature for request|

#### Enumerated Values

|Parameter|Value|
|---|---|
|route_types|0|
|route_types|1|
|route_types|2|
|route_types|3|
|route_types|4|
|disruption_modes|1|
|disruption_modes|2|
|disruption_modes|3|
|disruption_modes|4|
|disruption_modes|5|
|disruption_modes|7|
|disruption_modes|8|
|disruption_modes|9|
|disruption_modes|10|
|disruption_modes|11|
|disruption_modes|12|
|disruption_modes|13|
|disruption_modes|14|
|disruption_modes|100|
|disruption_status|current|
|disruption_status|planned|

> Example responses

> 200 Response

```json
{
  "disruptions": {
    "ferry": [
      {
        "colour": "string",
        "description": "string",
        "display_on_board": true,
        "display_status": true,
        "disruption_id": 0,
        "disruption_status": "string",
        "disruption_type": "string",
        "from_date": "1970-01-01T00:00:00Z",
        "last_updated": "1970-01-01T00:00:00Z",
        "published_on": "1970-01-01T00:00:00Z",
        "routes": [
          {
            "direction": {
              "direction_id": 0,
              "direction_name": "string",
              "route_direction_id": 0,
              "service_time": "string"
            },
            "route_gtfs_id": "string",
            "route_id": 0,
            "route_name": "string",
            "route_number": "string",
            "route_type": 0
          }
        ],
        "stops": [
          {
            "stop_id": 0,
            "stop_name": "string"
          }
        ],
        "title": "string",
        "to_date": "1970-01-01T00:00:00Z",
        "url": "string"
      }
    ],
    "general": [
      {
        "colour": "string",
        "description": "string",
        "display_on_board": true,
        "display_status": true,
        "disruption_id": 0,
        "disruption_status": "string",
        "disruption_type": "string",
        "from_date": "1970-01-01T00:00:00Z",
        "last_updated": "1970-01-01T00:00:00Z",
        "published_on": "1970-01-01T00:00:00Z",
        "routes": [
          {
            "direction": {
              "direction_id": 0,
              "direction_name": "string",
              "route_direction_id": 0,
              "service_time": "string"
            },
            "route_gtfs_id": "string",
            "route_id": 0,
            "route_name": "string",
            "route_number": "string",
            "route_type": 0
          }
        ],
        "stops": [
          {
            "stop_id": 0,
            "stop_name": "string"
          }
        ],
        "title": "string",
        "to_date": "1970-01-01T00:00:00Z",
        "url": "string"
      }
    ],
    "interstate_train": [
      {
        "colour": "string",
        "description": "string",
        "display_on_board": true,
        "display_status": true,
        "disruption_id": 0,
        "disruption_status": "string",
        "disruption_type": "string",
        "from_date": "1970-01-01T00:00:00Z",
        "last_updated": "1970-01-01T00:00:00Z",
        "published_on": "1970-01-01T00:00:00Z",
        "routes": [
          {
            "direction": {
              "direction_id": 0,
              "direction_name": "string",
              "route_direction_id": 0,
              "service_time": "string"
            },
            "route_gtfs_id": "string",
            "route_id": 0,
            "route_name": "string",
            "route_number": "string",
            "route_type": 0
          }
        ],
        "stops": [
          {
            "stop_id": 0,
            "stop_name": "string"
          }
        ],
        "title": "string",
        "to_date": "1970-01-01T00:00:00Z",
        "url": "string"
      }
    ],
    "metro_bus": [
      {
        "colour": "string",
        "description": "string",
        "display_on_board": true,
        "display_status": true,
        "disruption_id": 0,
        "disruption_status": "string",
        "disruption_type": "string",
        "from_date": "1970-01-01T00:00:00Z",
        "last_updated": "1970-01-01T00:00:00Z",
        "published_on": "1970-01-01T00:00:00Z",
        "routes": [
          {
            "direction": {
              "direction_id": 0,
              "direction_name": "string",
              "route_direction_id": 0,
              "service_time": "string"
            },
            "route_gtfs_id": "string",
            "route_id": 0,
            "route_name": "string",
            "route_number": "string",
            "route_type": 0
          }
        ],
        "stops": [
          {
            "stop_id": 0,
            "stop_name": "string"
          }
        ],
        "title": "string",
        "to_date": "1970-01-01T00:00:00Z",
        "url": "string"
      }
    ],
    "metro_train": [
      {
        "colour": "string",
        "description": "string",
        "display_on_board": true,
        "display_status": true,
        "disruption_id": 0,
        "disruption_status": "string",
        "disruption_type": "string",
        "from_date": "1970-01-01T00:00:00Z",
        "last_updated": "1970-01-01T00:00:00Z",
        "published_on": "1970-01-01T00:00:00Z",
        "routes": [
          {
            "direction": {
              "direction_id": 0,
              "direction_name": "string",
              "route_direction_id": 0,
              "service_time": "string"
            },
            "route_gtfs_id": "string",
            "route_id": 0,
            "route_name": "string",
            "route_number": "string",
            "route_type": 0
          }
        ],
        "stops": [
          {
            "stop_id": 0,
            "stop_name": "string"
          }
        ],
        "title": "string",
        "to_date": "1970-01-01T00:00:00Z",
        "url": "string"
      }
    ],
    "metro_tram": [
      {
        "colour": "string",
        "description": "string",
        "display_on_board": true,
        "display_status": true,
        "disruption_id": 0,
        "disruption_status": "string",
        "disruption_type": "string",
        "from_date": "1970-01-01T00:00:00Z",
        "last_updated": "1970-01-01T00:00:00Z",
        "published_on": "1970-01-01T00:00:00Z",
        "routes": [
          {
            "direction": {
              "direction_id": 0,
              "direction_name": "string",
              "route_direction_id": 0,
              "service_time": "string"
            },
            "route_gtfs_id": "string",
            "route_id": 0,
            "route_name": "string",
            "route_number": "string",
            "route_type": 0
          }
        ],
        "stops": [
          {
            "stop_id": 0,
            "stop_name": "string"
          }
        ],
        "title": "string",
        "to_date": "1970-01-01T00:00:00Z",
        "url": "string"
      }
    ],
    "night_bus": [
      {
        "colour": "string",
        "description": "string",
        "display_on_board": true,
        "display_status": true,
        "disruption_id": 0,
        "disruption_status": "string",
        "disruption_type": "string",
        "from_date": "1970-01-01T00:00:00Z",
        "last_updated": "1970-01-01T00:00:00Z",
        "published_on": "1970-01-01T00:00:00Z",
        "routes": [
          {
            "direction": {
              "direction_id": 0,
              "direction_name": "string",
              "route_direction_id": 0,
              "service_time": "string"
            },
            "route_gtfs_id": "string",
            "route_id": 0,
            "route_name": "string",
            "route_number": "string",
            "route_type": 0
          }
        ],
        "stops": [
          {
            "stop_id": 0,
            "stop_name": "string"
          }
        ],
        "title": "string",
        "to_date": "1970-01-01T00:00:00Z",
        "url": "string"
      }
    ],
    "regional_bus": [
      {
        "colour": "string",
        "description": "string",
        "display_on_board": true,
        "display_status": true,
        "disruption_id": 0,
        "disruption_status": "string",
        "disruption_type": "string",
        "from_date": "1970-01-01T00:00:00Z",
        "last_updated": "1970-01-01T00:00:00Z",
        "published_on": "1970-01-01T00:00:00Z",
        "routes": [
          {
            "direction": {
              "direction_id": 0,
              "direction_name": "string",
              "route_direction_id": 0,
              "service_time": "string"
            },
            "route_gtfs_id": "string",
            "route_id": 0,
            "route_name": "string",
            "route_number": "string",
            "route_type": 0
          }
        ],
        "stops": [
          {
            "stop_id": 0,
            "stop_name": "string"
          }
        ],
        "title": "string",
        "to_date": "1970-01-01T00:00:00Z",
        "url": "string"
      }
    ],
    "regional_coach": [
      {
        "colour": "string",
        "description": "string",
        "display_on_board": true,
        "display_status": true,
        "disruption_id": 0,
        "disruption_status": "string",
        "disruption_type": "string",
        "from_date": "1970-01-01T00:00:00Z",
        "last_updated": "1970-01-01T00:00:00Z",
        "published_on": "1970-01-01T00:00:00Z",
        "routes": [
          {
            "direction": {
              "direction_id": 0,
              "direction_name": "string",
              "route_direction_id": 0,
              "service_time": "string"
            },
            "route_gtfs_id": "string",
            "route_id": 0,
            "route_name": "string",
            "route_number": "string",
            "route_type": 0
          }
        ],
        "stops": [
          {
            "stop_id": 0,
            "stop_name": "string"
          }
        ],
        "title": "string",
        "to_date": "1970-01-01T00:00:00Z",
        "url": "string"
      }
    ],
    "regional_train": [
      {
        "colour": "string",
        "description": "string",
        "display_on_board": true,
        "display_status": true,
        "disruption_id": 0,
        "disruption_status": "string",
        "disruption_type": "string",
        "from_date": "1970-01-01T00:00:00Z",
        "last_updated": "1970-01-01T00:00:00Z",
        "published_on": "1970-01-01T00:00:00Z",
        "routes": [
          {
            "direction": {
              "direction_id": 0,
              "direction_name": "string",
              "route_direction_id": 0,
              "service_time": "string"
            },
            "route_gtfs_id": "string",
            "route_id": 0,
            "route_name": "string",
            "route_number": "string",
            "route_type": 0
          }
        ],
        "stops": [
          {
            "stop_id": 0,
            "stop_name": "string"
          }
        ],
        "title": "string",
        "to_date": "1970-01-01T00:00:00Z",
        "url": "string"
      }
    ],
    "school_bus": [
      {
        "colour": "string",
        "description": "string",
        "display_on_board": true,
        "display_status": true,
        "disruption_id": 0,
        "disruption_status": "string",
        "disruption_type": "string",
        "from_date": "1970-01-01T00:00:00Z",
        "last_updated": "1970-01-01T00:00:00Z",
        "published_on": "1970-01-01T00:00:00Z",
        "routes": [
          {
            "direction": {
              "direction_id": 0,
              "direction_name": "string",
              "route_direction_id": 0,
              "service_time": "string"
            },
            "route_gtfs_id": "string",
            "route_id": 0,
            "route_name": "string",
            "route_number": "string",
            "route_type": 0
          }
        ],
        "stops": [
          {
            "stop_id": 0,
            "stop_name": "string"
          }
        ],
        "title": "string",
        "to_date": "1970-01-01T00:00:00Z",
        "url": "string"
      }
    ],
    "skybus": [
      {
        "colour": "string",
        "description": "string",
        "display_on_board": true,
        "display_status": true,
        "disruption_id": 0,
        "disruption_status": "string",
        "disruption_type": "string",
        "from_date": "1970-01-01T00:00:00Z",
        "last_updated": "1970-01-01T00:00:00Z",
        "published_on": "1970-01-01T00:00:00Z",
        "routes": [
          {
            "direction": {
              "direction_id": 0,
              "direction_name": "string",
              "route_direction_id": 0,
              "service_time": "string"
            },
            "route_gtfs_id": "string",
            "route_id": 0,
            "route_name": "string",
            "route_number": "string",
            "route_type": 0
          }
        ],
        "stops": [
          {
            "stop_id": 0,
            "stop_name": "string"
          }
        ],
        "title": "string",
        "to_date": "1970-01-01T00:00:00Z",
        "url": "string"
      }
    ],
    "taxi": [
      {
        "colour": "string",
        "description": "string",
        "display_on_board": true,
        "display_status": true,
        "disruption_id": 0,
        "disruption_status": "string",
        "disruption_type": "string",
        "from_date": "1970-01-01T00:00:00Z",
        "last_updated": "1970-01-01T00:00:00Z",
        "published_on": "1970-01-01T00:00:00Z",
        "routes": [
          {
            "direction": {
              "direction_id": 0,
              "direction_name": "string",
              "route_direction_id": 0,
              "service_time": "string"
            },
            "route_gtfs_id": "string",
            "route_id": 0,
            "route_name": "string",
            "route_number": "string",
            "route_type": 0
          }
        ],
        "stops": [
          {
            "stop_id": 0,
            "stop_name": "string"
          }
        ],
        "title": "string",
        "to_date": "1970-01-01T00:00:00Z",
        "url": "string"
      }
    ],
    "telebus": [
      {
        "colour": "string",
        "description": "string",
        "display_on_board": true,
        "display_status": true,
        "disruption_id": 0,
        "disruption_status": "string",
        "disruption_type": "string",
        "from_date": "1970-01-01T00:00:00Z",
        "last_updated": "1970-01-01T00:00:00Z",
        "published_on": "1970-01-01T00:00:00Z",
        "routes": [
          {
            "direction": {
              "direction_id": 0,
              "direction_name": "string",
              "route_direction_id": 0,
              "service_time": "string"
            },
            "route_gtfs_id": "string",
            "route_id": 0,
            "route_name": "string",
            "route_number": "string",
            "route_type": 0
          }
        ],
        "stops": [
          {
            "stop_id": 0,
            "stop_name": "string"
          }
        ],
        "title": "string",
        "to_date": "1970-01-01T00:00:00Z",
        "url": "string"
      }
    ]
  },
  "status": {
    "health": 0,
    "version": "string"
  }
}
```

> 400 Response

```json
{
  "message": "string",
  "status": {
    "health": 0,
    "version": "string"
  }
}
```

> 403 Response

```json
{
  "message": "string",
  "status": {
    "health": 0,
    "version": "string"
  }
}
```

<h3 id="view-all-disruptions-for-all-route-types-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|All disruption information for all route types.|[V3.DisruptionsResponse](#schemav3.disruptionsresponse)|
|400|Bad Request|Invalid Request|[V3.ErrorResponse](#schemav3.errorresponse)|
|403|Forbidden|Access Denied|[V3.ErrorResponse](#schemav3.errorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Get all disruption modes

<a id="opIdDisruptions_GetDisruptionModes"></a>

> Code samples

```bash
curl https://example.com/v3/disruptions/modes \
  -H 'Accept: application/json'
```

`GET /v3/disruptions/modes`

<h3 id="get-all-disruption-modes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|query|string|false|Please ignore|
|devid|query|string|false|Your developer id|
|signature|query|string|false|Authentication signature for request|

> Example responses

> 200 Response

```json
{
  "disruption_modes": [
    {
      "disruption_mode": 0,
      "disruption_mode_name": "string"
    }
  ],
  "status": {
    "health": 0,
    "version": "string"
  }
}
```

> 400 Response

```json
{
  "message": "string",
  "status": {
    "health": 0,
    "version": "string"
  }
}
```

> 403 Response

```json
{
  "message": "string",
  "status": {
    "health": 0,
    "version": "string"
  }
}
```

<h3 id="get-all-disruption-modes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Disruption specific modes|[V3.DisruptionModesResponse](#schemav3.disruptionmodesresponse)|
|400|Bad Request|Invalid Request|[V3.ErrorResponse](#schemav3.errorresponse)|
|403|Forbidden|Access Denied|[V3.ErrorResponse](#schemav3.errorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## View all disruptions for a particular route

<a id="opIdDisruptions_GetDisruptionsByRoute"></a>

> Code samples

```bash
curl https://example.com/v3/disruptions/route/0 \
  -H 'Accept: application/json'
```

`GET /v3/disruptions/route/{route_id}`

<h3 id="view-all-disruptions-for-a-particular-route-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|route_id|path|integer(int32)|true|Identifier of route; values returned by Routes API - v3/routes|
|disruption_status|query|string|false|Filter by status of disruption|
|token|query|string|false|Please ignore|
|devid|query|string|false|Your developer id|
|signature|query|string|false|Authentication signature for request|

#### Enumerated Values

|Parameter|Value|
|---|---|
|disruption_status|current|
|disruption_status|planned|

> Example responses

> 200 Response

```json
{
  "disruptions": {
    "ferry": [
      {
        "colour": "string",
        "description": "string",
        "display_on_board": true,
        "display_status": true,
        "disruption_id": 0,
        "disruption_status": "string",
        "disruption_type": "string",
        "from_date": "1970-01-01T00:00:00Z",
        "last_updated": "1970-01-01T00:00:00Z",
        "published_on": "1970-01-01T00:00:00Z",
        "routes": [
          {
            "direction": {
              "direction_id": 0,
              "direction_name": "string",
              "route_direction_id": 0,
              "service_time": "string"
            },
            "route_gtfs_id": "string",
            "route_id": 0,
            "route_name": "string",
            "route_number": "string",
            "route_type": 0
          }
        ],
        "stops": [
          {
            "stop_id": 0,
            "stop_name": "string"
          }
        ],
        "title": "string",
        "to_date": "1970-01-01T00:00:00Z",
        "url": "string"
      }
    ],
    "general": [
      {
        "colour": "string",
        "description": "string",
        "display_on_board": true,
        "display_status": true,
        "disruption_id": 0,
        "disruption_status": "string",
        "disruption_type": "string",
        "from_date": "1970-01-01T00:00:00Z",
        "last_updated": "1970-01-01T00:00:00Z",
        "published_on": "1970-01-01T00:00:00Z",
        "routes": [
          {
            "direction": {
              "direction_id": 0,
              "direction_name": "string",
              "route_direction_id": 0,
              "service_time": "string"
            },
            "route_gtfs_id": "string",
            "route_id": 0,
            "route_name": "string",
            "route_number": "string",
            "route_type": 0
          }
        ],
        "stops": [
          {
            "stop_id": 0,
            "stop_name": "string"
          }
        ],
        "title": "string",
        "to_date": "1970-01-01T00:00:00Z",
        "url": "string"
      }
    ],
    "interstate_train": [
      {
        "colour": "string",
        "description": "string",
        "display_on_board": true,
        "display_status": true,
        "disruption_id": 0,
        "disruption_status": "string",
        "disruption_type": "string",
        "from_date": "1970-01-01T00:00:00Z",
        "last_updated": "1970-01-01T00:00:00Z",
        "published_on": "1970-01-01T00:00:00Z",
        "routes": [
          {
            "direction": {
              "direction_id": 0,
              "direction_name": "string",
              "route_direction_id": 0,
              "service_time": "string"
            },
            "route_gtfs_id": "string",
            "route_id": 0,
            "route_name": "string",
            "route_number": "string",
            "route_type": 0
          }
        ],
        "stops": [
          {
            "stop_id": 0,
            "stop_name": "string"
          }
        ],
        "title": "string",
        "to_date": "1970-01-01T00:00:00Z",
        "url": "string"
      }
    ],
    "metro_bus": [
      {
        "colour": "string",
        "description": "string",
        "display_on_board": true,
        "display_status": true,
        "disruption_id": 0,
        "disruption_status": "string",
        "disruption_type": "string",
        "from_date": "1970-01-01T00:00:00Z",
        "last_updated": "1970-01-01T00:00:00Z",
        "published_on": "1970-01-01T00:00:00Z",
        "routes": [
          {
            "direction": {
              "direction_id": 0,
              "direction_name": "string",
              "route_direction_id": 0,
              "service_time": "string"
            },
            "route_gtfs_id": "string",
            "route_id": 0,
            "route_name": "string",
            "route_number": "string",
            "route_type": 0
          }
        ],
        "stops": [
          {
            "stop_id": 0,
            "stop_name": "string"
          }
        ],
        "title": "string",
        "to_date": "1970-01-01T00:00:00Z",
        "url": "string"
      }
    ],
    "metro_train": [
      {
        "colour": "string",
        "description": "string",
        "display_on_board": true,
        "display_status": true,
        "disruption_id": 0,
        "disruption_status": "string",
        "disruption_type": "string",
        "from_date": "1970-01-01T00:00:00Z",
        "last_updated": "1970-01-01T00:00:00Z",
        "published_on": "1970-01-01T00:00:00Z",
        "routes": [
          {
            "direction": {
              "direction_id": 0,
              "direction_name": "string",
              "route_direction_id": 0,
              "service_time": "string"
            },
            "route_gtfs_id": "string",
            "route_id": 0,
            "route_name": "string",
            "route_number": "string",
            "route_type": 0
          }
        ],
        "stops": [
          {
            "stop_id": 0,
            "stop_name": "string"
          }
        ],
        "title": "string",
        "to_date": "1970-01-01T00:00:00Z",
        "url": "string"
      }
    ],
    "metro_tram": [
      {
        "colour": "string",
        "description": "string",
        "display_on_board": true,
        "display_status": true,
        "disruption_id": 0,
        "disruption_status": "string",
        "disruption_type": "string",
        "from_date": "1970-01-01T00:00:00Z",
        "last_updated": "1970-01-01T00:00:00Z",
        "published_on": "1970-01-01T00:00:00Z",
        "routes": [
          {
            "direction": {
              "direction_id": 0,
              "direction_name": "string",
              "route_direction_id": 0,
              "service_time": "string"
            },
            "route_gtfs_id": "string",
            "route_id": 0,
            "route_name": "string",
            "route_number": "string",
            "route_type": 0
          }
        ],
        "stops": [
          {
            "stop_id": 0,
            "stop_name": "string"
          }
        ],
        "title": "string",
        "to_date": "1970-01-01T00:00:00Z",
        "url": "string"
      }
    ],
    "night_bus": [
      {
        "colour": "string",
        "description": "string",
        "display_on_board": true,
        "display_status": true,
        "disruption_id": 0,
        "disruption_status": "string",
        "disruption_type": "string",
        "from_date": "1970-01-01T00:00:00Z",
        "last_updated": "1970-01-01T00:00:00Z",
        "published_on": "1970-01-01T00:00:00Z",
        "routes": [
          {
            "direction": {
              "direction_id": 0,
              "direction_name": "string",
              "route_direction_id": 0,
              "service_time": "string"
            },
            "route_gtfs_id": "string",
            "route_id": 0,
            "route_name": "string",
            "route_number": "string",
            "route_type": 0
          }
        ],
        "stops": [
          {
            "stop_id": 0,
            "stop_name": "string"
          }
        ],
        "title": "string",
        "to_date": "1970-01-01T00:00:00Z",
        "url": "string"
      }
    ],
    "regional_bus": [
      {
        "colour": "string",
        "description": "string",
        "display_on_board": true,
        "display_status": true,
        "disruption_id": 0,
        "disruption_status": "string",
        "disruption_type": "string",
        "from_date": "1970-01-01T00:00:00Z",
        "last_updated": "1970-01-01T00:00:00Z",
        "published_on": "1970-01-01T00:00:00Z",
        "routes": [
          {
            "direction": {
              "direction_id": 0,
              "direction_name": "string",
              "route_direction_id": 0,
              "service_time": "string"
            },
            "route_gtfs_id": "string",
            "route_id": 0,
            "route_name": "string",
            "route_number": "string",
            "route_type": 0
          }
        ],
        "stops": [
          {
            "stop_id": 0,
            "stop_name": "string"
          }
        ],
        "title": "string",
        "to_date": "1970-01-01T00:00:00Z",
        "url": "string"
      }
    ],
    "regional_coach": [
      {
        "colour": "string",
        "description": "string",
        "display_on_board": true,
        "display_status": true,
        "disruption_id": 0,
        "disruption_status": "string",
        "disruption_type": "string",
        "from_date": "1970-01-01T00:00:00Z",
        "last_updated": "1970-01-01T00:00:00Z",
        "published_on": "1970-01-01T00:00:00Z",
        "routes": [
          {
            "direction": {
              "direction_id": 0,
              "direction_name": "string",
              "route_direction_id": 0,
              "service_time": "string"
            },
            "route_gtfs_id": "string",
            "route_id": 0,
            "route_name": "string",
            "route_number": "string",
            "route_type": 0
          }
        ],
        "stops": [
          {
            "stop_id": 0,
            "stop_name": "string"
          }
        ],
        "title": "string",
        "to_date": "1970-01-01T00:00:00Z",
        "url": "string"
      }
    ],
    "regional_train": [
      {
        "colour": "string",
        "description": "string",
        "display_on_board": true,
        "display_status": true,
        "disruption_id": 0,
        "disruption_status": "string",
        "disruption_type": "string",
        "from_date": "1970-01-01T00:00:00Z",
        "last_updated": "1970-01-01T00:00:00Z",
        "published_on": "1970-01-01T00:00:00Z",
        "routes": [
          {
            "direction": {
              "direction_id": 0,
              "direction_name": "string",
              "route_direction_id": 0,
              "service_time": "string"
            },
            "route_gtfs_id": "string",
            "route_id": 0,
            "route_name": "string",
            "route_number": "string",
            "route_type": 0
          }
        ],
        "stops": [
          {
            "stop_id": 0,
            "stop_name": "string"
          }
        ],
        "title": "string",
        "to_date": "1970-01-01T00:00:00Z",
        "url": "string"
      }
    ],
    "school_bus": [
      {
        "colour": "string",
        "description": "string",
        "display_on_board": true,
        "display_status": true,
        "disruption_id": 0,
        "disruption_status": "string",
        "disruption_type": "string",
        "from_date": "1970-01-01T00:00:00Z",
        "last_updated": "1970-01-01T00:00:00Z",
        "published_on": "1970-01-01T00:00:00Z",
        "routes": [
          {
            "direction": {
              "direction_id": 0,
              "direction_name": "string",
              "route_direction_id": 0,
              "service_time": "string"
            },
            "route_gtfs_id": "string",
            "route_id": 0,
            "route_name": "string",
            "route_number": "string",
            "route_type": 0
          }
        ],
        "stops": [
          {
            "stop_id": 0,
            "stop_name": "string"
          }
        ],
        "title": "string",
        "to_date": "1970-01-01T00:00:00Z",
        "url": "string"
      }
    ],
    "skybus": [
      {
        "colour": "string",
        "description": "string",
        "display_on_board": true,
        "display_status": true,
        "disruption_id": 0,
        "disruption_status": "string",
        "disruption_type": "string",
        "from_date": "1970-01-01T00:00:00Z",
        "last_updated": "1970-01-01T00:00:00Z",
        "published_on": "1970-01-01T00:00:00Z",
        "routes": [
          {
            "direction": {
              "direction_id": 0,
              "direction_name": "string",
              "route_direction_id": 0,
              "service_time": "string"
            },
            "route_gtfs_id": "string",
            "route_id": 0,
            "route_name": "string",
            "route_number": "string",
            "route_type": 0
          }
        ],
        "stops": [
          {
            "stop_id": 0,
            "stop_name": "string"
          }
        ],
        "title": "string",
        "to_date": "1970-01-01T00:00:00Z",
        "url": "string"
      }
    ],
    "taxi": [
      {
        "colour": "string",
        "description": "string",
        "display_on_board": true,
        "display_status": true,
        "disruption_id": 0,
        "disruption_status": "string",
        "disruption_type": "string",
        "from_date": "1970-01-01T00:00:00Z",
        "last_updated": "1970-01-01T00:00:00Z",
        "published_on": "1970-01-01T00:00:00Z",
        "routes": [
          {
            "direction": {
              "direction_id": 0,
              "direction_name": "string",
              "route_direction_id": 0,
              "service_time": "string"
            },
            "route_gtfs_id": "string",
            "route_id": 0,
            "route_name": "string",
            "route_number": "string",
            "route_type": 0
          }
        ],
        "stops": [
          {
            "stop_id": 0,
            "stop_name": "string"
          }
        ],
        "title": "string",
        "to_date": "1970-01-01T00:00:00Z",
        "url": "string"
      }
    ],
    "telebus": [
      {
        "colour": "string",
        "description": "string",
        "display_on_board": true,
        "display_status": true,
        "disruption_id": 0,
        "disruption_status": "string",
        "disruption_type": "string",
        "from_date": "1970-01-01T00:00:00Z",
        "last_updated": "1970-01-01T00:00:00Z",
        "published_on": "1970-01-01T00:00:00Z",
        "routes": [
          {
            "direction": {
              "direction_id": 0,
              "direction_name": "string",
              "route_direction_id": 0,
              "service_time": "string"
            },
            "route_gtfs_id": "string",
            "route_id": 0,
            "route_name": "string",
            "route_number": "string",
            "route_type": 0
          }
        ],
        "stops": [
          {
            "stop_id": 0,
            "stop_name": "string"
          }
        ],
        "title": "string",
        "to_date": "1970-01-01T00:00:00Z",
        "url": "string"
      }
    ]
  },
  "status": {
    "health": 0,
    "version": "string"
  }
}
```

> 400 Response

```json
{
  "message": "string",
  "status": {
    "health": 0,
    "version": "string"
  }
}
```

> 403 Response

```json
{
  "message": "string",
  "status": {
    "health": 0,
    "version": "string"
  }
}
```

<h3 id="view-all-disruptions-for-a-particular-route-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|All disruption information (if any exists) for the specified route.|[V3.DisruptionsResponse](#schemav3.disruptionsresponse)|
|400|Bad Request|Invalid Request|[V3.ErrorResponse](#schemav3.errorresponse)|
|403|Forbidden|Access Denied|[V3.ErrorResponse](#schemav3.errorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## View all disruptions for a particular route and stop

<a id="opIdDisruptions_GetDisruptionsByRouteAndStop"></a>

> Code samples

```bash
curl https://example.com/v3/disruptions/route/0/stop/0 \
  -H 'Accept: application/json'
```

`GET /v3/disruptions/route/{route_id}/stop/{stop_id}`

<h3 id="view-all-disruptions-for-a-particular-route-and-stop-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|route_id|path|integer(int32)|true|Identifier of route; values returned by Routes API - v3/routes|
|stop_id|path|integer(int32)|true|Identifier of stop; values returned by Stops API - v3/stops|
|disruption_status|query|string|false|Filter by status of disruption|
|token|query|string|false|Please ignore|
|devid|query|string|false|Your developer id|
|signature|query|string|false|Authentication signature for request|

#### Enumerated Values

|Parameter|Value|
|---|---|
|disruption_status|current|
|disruption_status|planned|

> Example responses

> 200 Response

```json
{
  "disruptions": {
    "ferry": [
      {
        "colour": "string",
        "description": "string",
        "display_on_board": true,
        "display_status": true,
        "disruption_id": 0,
        "disruption_status": "string",
        "disruption_type": "string",
        "from_date": "1970-01-01T00:00:00Z",
        "last_updated": "1970-01-01T00:00:00Z",
        "published_on": "1970-01-01T00:00:00Z",
        "routes": [
          {
            "direction": {
              "direction_id": 0,
              "direction_name": "string",
              "route_direction_id": 0,
              "service_time": "string"
            },
            "route_gtfs_id": "string",
            "route_id": 0,
            "route_name": "string",
            "route_number": "string",
            "route_type": 0
          }
        ],
        "stops": [
          {
            "stop_id": 0,
            "stop_name": "string"
          }
        ],
        "title": "string",
        "to_date": "1970-01-01T00:00:00Z",
        "url": "string"
      }
    ],
    "general": [
      {
        "colour": "string",
        "description": "string",
        "display_on_board": true,
        "display_status": true,
        "disruption_id": 0,
        "disruption_status": "string",
        "disruption_type": "string",
        "from_date": "1970-01-01T00:00:00Z",
        "last_updated": "1970-01-01T00:00:00Z",
        "published_on": "1970-01-01T00:00:00Z",
        "routes": [
          {
            "direction": {
              "direction_id": 0,
              "direction_name": "string",
              "route_direction_id": 0,
              "service_time": "string"
            },
            "route_gtfs_id": "string",
            "route_id": 0,
            "route_name": "string",
            "route_number": "string",
            "route_type": 0
          }
        ],
        "stops": [
          {
            "stop_id": 0,
            "stop_name": "string"
          }
        ],
        "title": "string",
        "to_date": "1970-01-01T00:00:00Z",
        "url": "string"
      }
    ],
    "interstate_train": [
      {
        "colour": "string",
        "description": "string",
        "display_on_board": true,
        "display_status": true,
        "disruption_id": 0,
        "disruption_status": "string",
        "disruption_type": "string",
        "from_date": "1970-01-01T00:00:00Z",
        "last_updated": "1970-01-01T00:00:00Z",
        "published_on": "1970-01-01T00:00:00Z",
        "routes": [
          {
            "direction": {
              "direction_id": 0,
              "direction_name": "string",
              "route_direction_id": 0,
              "service_time": "string"
            },
            "route_gtfs_id": "string",
            "route_id": 0,
            "route_name": "string",
            "route_number": "string",
            "route_type": 0
          }
        ],
        "stops": [
          {
            "stop_id": 0,
            "stop_name": "string"
          }
        ],
        "title": "string",
        "to_date": "1970-01-01T00:00:00Z",
        "url": "string"
      }
    ],
    "metro_bus": [
      {
        "colour": "string",
        "description": "string",
        "display_on_board": true,
        "display_status": true,
        "disruption_id": 0,
        "disruption_status": "string",
        "disruption_type": "string",
        "from_date": "1970-01-01T00:00:00Z",
        "last_updated": "1970-01-01T00:00:00Z",
        "published_on": "1970-01-01T00:00:00Z",
        "routes": [
          {
            "direction": {
              "direction_id": 0,
              "direction_name": "string",
              "route_direction_id": 0,
              "service_time": "string"
            },
            "route_gtfs_id": "string",
            "route_id": 0,
            "route_name": "string",
            "route_number": "string",
            "route_type": 0
          }
        ],
        "stops": [
          {
            "stop_id": 0,
            "stop_name": "string"
          }
        ],
        "title": "string",
        "to_date": "1970-01-01T00:00:00Z",
        "url": "string"
      }
    ],
    "metro_train": [
      {
        "colour": "string",
        "description": "string",
        "display_on_board": true,
        "display_status": true,
        "disruption_id": 0,
        "disruption_status": "string",
        "disruption_type": "string",
        "from_date": "1970-01-01T00:00:00Z",
        "last_updated": "1970-01-01T00:00:00Z",
        "published_on": "1970-01-01T00:00:00Z",
        "routes": [
          {
            "direction": {
              "direction_id": 0,
              "direction_name": "string",
              "route_direction_id": 0,
              "service_time": "string"
            },
            "route_gtfs_id": "string",
            "route_id": 0,
            "route_name": "string",
            "route_number": "string",
            "route_type": 0
          }
        ],
        "stops": [
          {
            "stop_id": 0,
            "stop_name": "string"
          }
        ],
        "title": "string",
        "to_date": "1970-01-01T00:00:00Z",
        "url": "string"
      }
    ],
    "metro_tram": [
      {
        "colour": "string",
        "description": "string",
        "display_on_board": true,
        "display_status": true,
        "disruption_id": 0,
        "disruption_status": "string",
        "disruption_type": "string",
        "from_date": "1970-01-01T00:00:00Z",
        "last_updated": "1970-01-01T00:00:00Z",
        "published_on": "1970-01-01T00:00:00Z",
        "routes": [
          {
            "direction": {
              "direction_id": 0,
              "direction_name": "string",
              "route_direction_id": 0,
              "service_time": "string"
            },
            "route_gtfs_id": "string",
            "route_id": 0,
            "route_name": "string",
            "route_number": "string",
            "route_type": 0
          }
        ],
        "stops": [
          {
            "stop_id": 0,
            "stop_name": "string"
          }
        ],
        "title": "string",
        "to_date": "1970-01-01T00:00:00Z",
        "url": "string"
      }
    ],
    "night_bus": [
      {
        "colour": "string",
        "description": "string",
        "display_on_board": true,
        "display_status": true,
        "disruption_id": 0,
        "disruption_status": "string",
        "disruption_type": "string",
        "from_date": "1970-01-01T00:00:00Z",
        "last_updated": "1970-01-01T00:00:00Z",
        "published_on": "1970-01-01T00:00:00Z",
        "routes": [
          {
            "direction": {
              "direction_id": 0,
              "direction_name": "string",
              "route_direction_id": 0,
              "service_time": "string"
            },
            "route_gtfs_id": "string",
            "route_id": 0,
            "route_name": "string",
            "route_number": "string",
            "route_type": 0
          }
        ],
        "stops": [
          {
            "stop_id": 0,
            "stop_name": "string"
          }
        ],
        "title": "string",
        "to_date": "1970-01-01T00:00:00Z",
        "url": "string"
      }
    ],
    "regional_bus": [
      {
        "colour": "string",
        "description": "string",
        "display_on_board": true,
        "display_status": true,
        "disruption_id": 0,
        "disruption_status": "string",
        "disruption_type": "string",
        "from_date": "1970-01-01T00:00:00Z",
        "last_updated": "1970-01-01T00:00:00Z",
        "published_on": "1970-01-01T00:00:00Z",
        "routes": [
          {
            "direction": {
              "direction_id": 0,
              "direction_name": "string",
              "route_direction_id": 0,
              "service_time": "string"
            },
            "route_gtfs_id": "string",
            "route_id": 0,
            "route_name": "string",
            "route_number": "string",
            "route_type": 0
          }
        ],
        "stops": [
          {
            "stop_id": 0,
            "stop_name": "string"
          }
        ],
        "title": "string",
        "to_date": "1970-01-01T00:00:00Z",
        "url": "string"
      }
    ],
    "regional_coach": [
      {
        "colour": "string",
        "description": "string",
        "display_on_board": true,
        "display_status": true,
        "disruption_id": 0,
        "disruption_status": "string",
        "disruption_type": "string",
        "from_date": "1970-01-01T00:00:00Z",
        "last_updated": "1970-01-01T00:00:00Z",
        "published_on": "1970-01-01T00:00:00Z",
        "routes": [
          {
            "direction": {
              "direction_id": 0,
              "direction_name": "string",
              "route_direction_id": 0,
              "service_time": "string"
            },
            "route_gtfs_id": "string",
            "route_id": 0,
            "route_name": "string",
            "route_number": "string",
            "route_type": 0
          }
        ],
        "stops": [
          {
            "stop_id": 0,
            "stop_name": "string"
          }
        ],
        "title": "string",
        "to_date": "1970-01-01T00:00:00Z",
        "url": "string"
      }
    ],
    "regional_train": [
      {
        "colour": "string",
        "description": "string",
        "display_on_board": true,
        "display_status": true,
        "disruption_id": 0,
        "disruption_status": "string",
        "disruption_type": "string",
        "from_date": "1970-01-01T00:00:00Z",
        "last_updated": "1970-01-01T00:00:00Z",
        "published_on": "1970-01-01T00:00:00Z",
        "routes": [
          {
            "direction": {
              "direction_id": 0,
              "direction_name": "string",
              "route_direction_id": 0,
              "service_time": "string"
            },
            "route_gtfs_id": "string",
            "route_id": 0,
            "route_name": "string",
            "route_number": "string",
            "route_type": 0
          }
        ],
        "stops": [
          {
            "stop_id": 0,
            "stop_name": "string"
          }
        ],
        "title": "string",
        "to_date": "1970-01-01T00:00:00Z",
        "url": "string"
      }
    ],
    "school_bus": [
      {
        "colour": "string",
        "description": "string",
        "display_on_board": true,
        "display_status": true,
        "disruption_id": 0,
        "disruption_status": "string",
        "disruption_type": "string",
        "from_date": "1970-01-01T00:00:00Z",
        "last_updated": "1970-01-01T00:00:00Z",
        "published_on": "1970-01-01T00:00:00Z",
        "routes": [
          {
            "direction": {
              "direction_id": 0,
              "direction_name": "string",
              "route_direction_id": 0,
              "service_time": "string"
            },
            "route_gtfs_id": "string",
            "route_id": 0,
            "route_name": "string",
            "route_number": "string",
            "route_type": 0
          }
        ],
        "stops": [
          {
            "stop_id": 0,
            "stop_name": "string"
          }
        ],
        "title": "string",
        "to_date": "1970-01-01T00:00:00Z",
        "url": "string"
      }
    ],
    "skybus": [
      {
        "colour": "string",
        "description": "string",
        "display_on_board": true,
        "display_status": true,
        "disruption_id": 0,
        "disruption_status": "string",
        "disruption_type": "string",
        "from_date": "1970-01-01T00:00:00Z",
        "last_updated": "1970-01-01T00:00:00Z",
        "published_on": "1970-01-01T00:00:00Z",
        "routes": [
          {
            "direction": {
              "direction_id": 0,
              "direction_name": "string",
              "route_direction_id": 0,
              "service_time": "string"
            },
            "route_gtfs_id": "string",
            "route_id": 0,
            "route_name": "string",
            "route_number": "string",
            "route_type": 0
          }
        ],
        "stops": [
          {
            "stop_id": 0,
            "stop_name": "string"
          }
        ],
        "title": "string",
        "to_date": "1970-01-01T00:00:00Z",
        "url": "string"
      }
    ],
    "taxi": [
      {
        "colour": "string",
        "description": "string",
        "display_on_board": true,
        "display_status": true,
        "disruption_id": 0,
        "disruption_status": "string",
        "disruption_type": "string",
        "from_date": "1970-01-01T00:00:00Z",
        "last_updated": "1970-01-01T00:00:00Z",
        "published_on": "1970-01-01T00:00:00Z",
        "routes": [
          {
            "direction": {
              "direction_id": 0,
              "direction_name": "string",
              "route_direction_id": 0,
              "service_time": "string"
            },
            "route_gtfs_id": "string",
            "route_id": 0,
            "route_name": "string",
            "route_number": "string",
            "route_type": 0
          }
        ],
        "stops": [
          {
            "stop_id": 0,
            "stop_name": "string"
          }
        ],
        "title": "string",
        "to_date": "1970-01-01T00:00:00Z",
        "url": "string"
      }
    ],
    "telebus": [
      {
        "colour": "string",
        "description": "string",
        "display_on_board": true,
        "display_status": true,
        "disruption_id": 0,
        "disruption_status": "string",
        "disruption_type": "string",
        "from_date": "1970-01-01T00:00:00Z",
        "last_updated": "1970-01-01T00:00:00Z",
        "published_on": "1970-01-01T00:00:00Z",
        "routes": [
          {
            "direction": {
              "direction_id": 0,
              "direction_name": "string",
              "route_direction_id": 0,
              "service_time": "string"
            },
            "route_gtfs_id": "string",
            "route_id": 0,
            "route_name": "string",
            "route_number": "string",
            "route_type": 0
          }
        ],
        "stops": [
          {
            "stop_id": 0,
            "stop_name": "string"
          }
        ],
        "title": "string",
        "to_date": "1970-01-01T00:00:00Z",
        "url": "string"
      }
    ]
  },
  "status": {
    "health": 0,
    "version": "string"
  }
}
```

> 400 Response

```json
{
  "message": "string",
  "status": {
    "health": 0,
    "version": "string"
  }
}
```

> 403 Response

```json
{
  "message": "string",
  "status": {
    "health": 0,
    "version": "string"
  }
}
```

<h3 id="view-all-disruptions-for-a-particular-route-and-stop-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|All disruption information (if any exists) for the specified route and stop.|[V3.DisruptionsResponse](#schemav3.disruptionsresponse)|
|400|Bad Request|Invalid Request|[V3.ErrorResponse](#schemav3.errorresponse)|
|403|Forbidden|Access Denied|[V3.ErrorResponse](#schemav3.errorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## View all disruptions for a particular stop

<a id="opIdDisruptions_GetDisruptionsByStop"></a>

> Code samples

```bash
curl https://example.com/v3/disruptions/stop/0 \
  -H 'Accept: application/json'
```

`GET /v3/disruptions/stop/{stop_id}`

<h3 id="view-all-disruptions-for-a-particular-stop-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|stop_id|path|integer(int32)|true|Identifier of stop; values returned by Stops API - v3/stops|
|disruption_status|query|string|false|Filter by status of disruption|
|token|query|string|false|Please ignore|
|devid|query|string|false|Your developer id|
|signature|query|string|false|Authentication signature for request|

#### Enumerated Values

|Parameter|Value|
|---|---|
|disruption_status|current|
|disruption_status|planned|

> Example responses

> 200 Response

```json
{
  "disruptions": {
    "ferry": [
      {
        "colour": "string",
        "description": "string",
        "display_on_board": true,
        "display_status": true,
        "disruption_id": 0,
        "disruption_status": "string",
        "disruption_type": "string",
        "from_date": "1970-01-01T00:00:00Z",
        "last_updated": "1970-01-01T00:00:00Z",
        "published_on": "1970-01-01T00:00:00Z",
        "routes": [
          {
            "direction": {
              "direction_id": 0,
              "direction_name": "string",
              "route_direction_id": 0,
              "service_time": "string"
            },
            "route_gtfs_id": "string",
            "route_id": 0,
            "route_name": "string",
            "route_number": "string",
            "route_type": 0
          }
        ],
        "stops": [
          {
            "stop_id": 0,
            "stop_name": "string"
          }
        ],
        "title": "string",
        "to_date": "1970-01-01T00:00:00Z",
        "url": "string"
      }
    ],
    "general": [
      {
        "colour": "string",
        "description": "string",
        "display_on_board": true,
        "display_status": true,
        "disruption_id": 0,
        "disruption_status": "string",
        "disruption_type": "string",
        "from_date": "1970-01-01T00:00:00Z",
        "last_updated": "1970-01-01T00:00:00Z",
        "published_on": "1970-01-01T00:00:00Z",
        "routes": [
          {
            "direction": {
              "direction_id": 0,
              "direction_name": "string",
              "route_direction_id": 0,
              "service_time": "string"
            },
            "route_gtfs_id": "string",
            "route_id": 0,
            "route_name": "string",
            "route_number": "string",
            "route_type": 0
          }
        ],
        "stops": [
          {
            "stop_id": 0,
            "stop_name": "string"
          }
        ],
        "title": "string",
        "to_date": "1970-01-01T00:00:00Z",
        "url": "string"
      }
    ],
    "interstate_train": [
      {
        "colour": "string",
        "description": "string",
        "display_on_board": true,
        "display_status": true,
        "disruption_id": 0,
        "disruption_status": "string",
        "disruption_type": "string",
        "from_date": "1970-01-01T00:00:00Z",
        "last_updated": "1970-01-01T00:00:00Z",
        "published_on": "1970-01-01T00:00:00Z",
        "routes": [
          {
            "direction": {
              "direction_id": 0,
              "direction_name": "string",
              "route_direction_id": 0,
              "service_time": "string"
            },
            "route_gtfs_id": "string",
            "route_id": 0,
            "route_name": "string",
            "route_number": "string",
            "route_type": 0
          }
        ],
        "stops": [
          {
            "stop_id": 0,
            "stop_name": "string"
          }
        ],
        "title": "string",
        "to_date": "1970-01-01T00:00:00Z",
        "url": "string"
      }
    ],
    "metro_bus": [
      {
        "colour": "string",
        "description": "string",
        "display_on_board": true,
        "display_status": true,
        "disruption_id": 0,
        "disruption_status": "string",
        "disruption_type": "string",
        "from_date": "1970-01-01T00:00:00Z",
        "last_updated": "1970-01-01T00:00:00Z",
        "published_on": "1970-01-01T00:00:00Z",
        "routes": [
          {
            "direction": {
              "direction_id": 0,
              "direction_name": "string",
              "route_direction_id": 0,
              "service_time": "string"
            },
            "route_gtfs_id": "string",
            "route_id": 0,
            "route_name": "string",
            "route_number": "string",
            "route_type": 0
          }
        ],
        "stops": [
          {
            "stop_id": 0,
            "stop_name": "string"
          }
        ],
        "title": "string",
        "to_date": "1970-01-01T00:00:00Z",
        "url": "string"
      }
    ],
    "metro_train": [
      {
        "colour": "string",
        "description": "string",
        "display_on_board": true,
        "display_status": true,
        "disruption_id": 0,
        "disruption_status": "string",
        "disruption_type": "string",
        "from_date": "1970-01-01T00:00:00Z",
        "last_updated": "1970-01-01T00:00:00Z",
        "published_on": "1970-01-01T00:00:00Z",
        "routes": [
          {
            "direction": {
              "direction_id": 0,
              "direction_name": "string",
              "route_direction_id": 0,
              "service_time": "string"
            },
            "route_gtfs_id": "string",
            "route_id": 0,
            "route_name": "string",
            "route_number": "string",
            "route_type": 0
          }
        ],
        "stops": [
          {
            "stop_id": 0,
            "stop_name": "string"
          }
        ],
        "title": "string",
        "to_date": "1970-01-01T00:00:00Z",
        "url": "string"
      }
    ],
    "metro_tram": [
      {
        "colour": "string",
        "description": "string",
        "display_on_board": true,
        "display_status": true,
        "disruption_id": 0,
        "disruption_status": "string",
        "disruption_type": "string",
        "from_date": "1970-01-01T00:00:00Z",
        "last_updated": "1970-01-01T00:00:00Z",
        "published_on": "1970-01-01T00:00:00Z",
        "routes": [
          {
            "direction": {
              "direction_id": 0,
              "direction_name": "string",
              "route_direction_id": 0,
              "service_time": "string"
            },
            "route_gtfs_id": "string",
            "route_id": 0,
            "route_name": "string",
            "route_number": "string",
            "route_type": 0
          }
        ],
        "stops": [
          {
            "stop_id": 0,
            "stop_name": "string"
          }
        ],
        "title": "string",
        "to_date": "1970-01-01T00:00:00Z",
        "url": "string"
      }
    ],
    "night_bus": [
      {
        "colour": "string",
        "description": "string",
        "display_on_board": true,
        "display_status": true,
        "disruption_id": 0,
        "disruption_status": "string",
        "disruption_type": "string",
        "from_date": "1970-01-01T00:00:00Z",
        "last_updated": "1970-01-01T00:00:00Z",
        "published_on": "1970-01-01T00:00:00Z",
        "routes": [
          {
            "direction": {
              "direction_id": 0,
              "direction_name": "string",
              "route_direction_id": 0,
              "service_time": "string"
            },
            "route_gtfs_id": "string",
            "route_id": 0,
            "route_name": "string",
            "route_number": "string",
            "route_type": 0
          }
        ],
        "stops": [
          {
            "stop_id": 0,
            "stop_name": "string"
          }
        ],
        "title": "string",
        "to_date": "1970-01-01T00:00:00Z",
        "url": "string"
      }
    ],
    "regional_bus": [
      {
        "colour": "string",
        "description": "string",
        "display_on_board": true,
        "display_status": true,
        "disruption_id": 0,
        "disruption_status": "string",
        "disruption_type": "string",
        "from_date": "1970-01-01T00:00:00Z",
        "last_updated": "1970-01-01T00:00:00Z",
        "published_on": "1970-01-01T00:00:00Z",
        "routes": [
          {
            "direction": {
              "direction_id": 0,
              "direction_name": "string",
              "route_direction_id": 0,
              "service_time": "string"
            },
            "route_gtfs_id": "string",
            "route_id": 0,
            "route_name": "string",
            "route_number": "string",
            "route_type": 0
          }
        ],
        "stops": [
          {
            "stop_id": 0,
            "stop_name": "string"
          }
        ],
        "title": "string",
        "to_date": "1970-01-01T00:00:00Z",
        "url": "string"
      }
    ],
    "regional_coach": [
      {
        "colour": "string",
        "description": "string",
        "display_on_board": true,
        "display_status": true,
        "disruption_id": 0,
        "disruption_status": "string",
        "disruption_type": "string",
        "from_date": "1970-01-01T00:00:00Z",
        "last_updated": "1970-01-01T00:00:00Z",
        "published_on": "1970-01-01T00:00:00Z",
        "routes": [
          {
            "direction": {
              "direction_id": 0,
              "direction_name": "string",
              "route_direction_id": 0,
              "service_time": "string"
            },
            "route_gtfs_id": "string",
            "route_id": 0,
            "route_name": "string",
            "route_number": "string",
            "route_type": 0
          }
        ],
        "stops": [
          {
            "stop_id": 0,
            "stop_name": "string"
          }
        ],
        "title": "string",
        "to_date": "1970-01-01T00:00:00Z",
        "url": "string"
      }
    ],
    "regional_train": [
      {
        "colour": "string",
        "description": "string",
        "display_on_board": true,
        "display_status": true,
        "disruption_id": 0,
        "disruption_status": "string",
        "disruption_type": "string",
        "from_date": "1970-01-01T00:00:00Z",
        "last_updated": "1970-01-01T00:00:00Z",
        "published_on": "1970-01-01T00:00:00Z",
        "routes": [
          {
            "direction": {
              "direction_id": 0,
              "direction_name": "string",
              "route_direction_id": 0,
              "service_time": "string"
            },
            "route_gtfs_id": "string",
            "route_id": 0,
            "route_name": "string",
            "route_number": "string",
            "route_type": 0
          }
        ],
        "stops": [
          {
            "stop_id": 0,
            "stop_name": "string"
          }
        ],
        "title": "string",
        "to_date": "1970-01-01T00:00:00Z",
        "url": "string"
      }
    ],
    "school_bus": [
      {
        "colour": "string",
        "description": "string",
        "display_on_board": true,
        "display_status": true,
        "disruption_id": 0,
        "disruption_status": "string",
        "disruption_type": "string",
        "from_date": "1970-01-01T00:00:00Z",
        "last_updated": "1970-01-01T00:00:00Z",
        "published_on": "1970-01-01T00:00:00Z",
        "routes": [
          {
            "direction": {
              "direction_id": 0,
              "direction_name": "string",
              "route_direction_id": 0,
              "service_time": "string"
            },
            "route_gtfs_id": "string",
            "route_id": 0,
            "route_name": "string",
            "route_number": "string",
            "route_type": 0
          }
        ],
        "stops": [
          {
            "stop_id": 0,
            "stop_name": "string"
          }
        ],
        "title": "string",
        "to_date": "1970-01-01T00:00:00Z",
        "url": "string"
      }
    ],
    "skybus": [
      {
        "colour": "string",
        "description": "string",
        "display_on_board": true,
        "display_status": true,
        "disruption_id": 0,
        "disruption_status": "string",
        "disruption_type": "string",
        "from_date": "1970-01-01T00:00:00Z",
        "last_updated": "1970-01-01T00:00:00Z",
        "published_on": "1970-01-01T00:00:00Z",
        "routes": [
          {
            "direction": {
              "direction_id": 0,
              "direction_name": "string",
              "route_direction_id": 0,
              "service_time": "string"
            },
            "route_gtfs_id": "string",
            "route_id": 0,
            "route_name": "string",
            "route_number": "string",
            "route_type": 0
          }
        ],
        "stops": [
          {
            "stop_id": 0,
            "stop_name": "string"
          }
        ],
        "title": "string",
        "to_date": "1970-01-01T00:00:00Z",
        "url": "string"
      }
    ],
    "taxi": [
      {
        "colour": "string",
        "description": "string",
        "display_on_board": true,
        "display_status": true,
        "disruption_id": 0,
        "disruption_status": "string",
        "disruption_type": "string",
        "from_date": "1970-01-01T00:00:00Z",
        "last_updated": "1970-01-01T00:00:00Z",
        "published_on": "1970-01-01T00:00:00Z",
        "routes": [
          {
            "direction": {
              "direction_id": 0,
              "direction_name": "string",
              "route_direction_id": 0,
              "service_time": "string"
            },
            "route_gtfs_id": "string",
            "route_id": 0,
            "route_name": "string",
            "route_number": "string",
            "route_type": 0
          }
        ],
        "stops": [
          {
            "stop_id": 0,
            "stop_name": "string"
          }
        ],
        "title": "string",
        "to_date": "1970-01-01T00:00:00Z",
        "url": "string"
      }
    ],
    "telebus": [
      {
        "colour": "string",
        "description": "string",
        "display_on_board": true,
        "display_status": true,
        "disruption_id": 0,
        "disruption_status": "string",
        "disruption_type": "string",
        "from_date": "1970-01-01T00:00:00Z",
        "last_updated": "1970-01-01T00:00:00Z",
        "published_on": "1970-01-01T00:00:00Z",
        "routes": [
          {
            "direction": {
              "direction_id": 0,
              "direction_name": "string",
              "route_direction_id": 0,
              "service_time": "string"
            },
            "route_gtfs_id": "string",
            "route_id": 0,
            "route_name": "string",
            "route_number": "string",
            "route_type": 0
          }
        ],
        "stops": [
          {
            "stop_id": 0,
            "stop_name": "string"
          }
        ],
        "title": "string",
        "to_date": "1970-01-01T00:00:00Z",
        "url": "string"
      }
    ]
  },
  "status": {
    "health": 0,
    "version": "string"
  }
}
```

> 400 Response

```json
{
  "message": "string",
  "status": {
    "health": 0,
    "version": "string"
  }
}
```

> 403 Response

```json
{
  "message": "string",
  "status": {
    "health": 0,
    "version": "string"
  }
}
```

<h3 id="view-all-disruptions-for-a-particular-stop-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|All disruption information (if any exists) for the specified stop.|[V3.DisruptionsResponse](#schemav3.disruptionsresponse)|
|400|Bad Request|Invalid Request|[V3.ErrorResponse](#schemav3.errorresponse)|
|403|Forbidden|Access Denied|[V3.ErrorResponse](#schemav3.errorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## View a specific disruption

<a id="opIdDisruptions_GetDisruptionById"></a>

> Code samples

```bash
curl https://example.com/v3/disruptions/0 \
  -H 'Accept: application/json'
```

`GET /v3/disruptions/{disruption_id}`

<h3 id="view-a-specific-disruption-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|disruption_id|path|integer(int64)|true|Identifier of disruption; values returned by Disruptions API - /v3/disruptions OR /v3/disruptions/route/{route_id}|
|token|query|string|false|Please ignore|
|devid|query|string|false|Your developer id|
|signature|query|string|false|Authentication signature for request|

> Example responses

> 200 Response

```json
{
  "disruption": {
    "colour": "string",
    "description": "string",
    "display_on_board": true,
    "display_status": true,
    "disruption_id": 0,
    "disruption_status": "string",
    "disruption_type": "string",
    "from_date": "1970-01-01T00:00:00Z",
    "last_updated": "1970-01-01T00:00:00Z",
    "published_on": "1970-01-01T00:00:00Z",
    "routes": [
      {
        "direction": {
          "direction_id": 0,
          "direction_name": "string",
          "route_direction_id": 0,
          "service_time": "string"
        },
        "route_gtfs_id": "string",
        "route_id": 0,
        "route_name": "string",
        "route_number": "string",
        "route_type": 0
      }
    ],
    "stops": [
      {
        "stop_id": 0,
        "stop_name": "string"
      }
    ],
    "title": "string",
    "to_date": "1970-01-01T00:00:00Z",
    "url": "string"
  },
  "status": {
    "health": 0,
    "version": "string"
  }
}
```

> 400 Response

```json
{
  "message": "string",
  "status": {
    "health": 0,
    "version": "string"
  }
}
```

> 403 Response

```json
{
  "message": "string",
  "status": {
    "health": 0,
    "version": "string"
  }
}
```

<h3 id="view-a-specific-disruption-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Disruption information for the specified disruption ID.|[V3.DisruptionResponse](#schemav3.disruptionresponse)|
|400|Bad Request|Invalid Request|[V3.ErrorResponse](#schemav3.errorresponse)|
|403|Forbidden|Access Denied|[V3.ErrorResponse](#schemav3.errorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="ptv-timetable-api---version-3-fareestimate">FareEstimate</h1>

## Estimate a fare by zone

<a id="opIdFareEstimate_GetFareEstimateByZone"></a>

> Code samples

```bash
curl https://example.com/v3/fare_estimate/min_zone/0/max_zone/0 \
  -H 'Accept: application/json'
```

`GET /v3/fare_estimate/min_zone/{minZone}/max_zone/{maxZone}`

<h3 id="estimate-a-fare-by-zone-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|minZone|path|integer(int32)|true|Minimum Zone travelled through ie. 1|
|maxZone|path|integer(int32)|true|Maximum Zone travelled through id. 6|
|journey_touch_on_utc|query|string(date-time)|false|JourneyTouchOnUtc in format yyyy-M-d h:m (e.g 2016-5-31 16:53).|
|journey_touch_off_utc|query|string(date-time)|false|JourneyTouchOffUtc in format yyyy-M-d h:m (e.g 2016-5-31 16:53).|
|is_journey_in_free_tram_zone|query|boolean|false|none|
|travelled_route_types|query|[integer(int32)]|false|none|
|token|query|string|false|Please ignore|
|devid|query|string|false|Your developer id|
|signature|query|string|false|Authentication signature for request|

#### Enumerated Values

|Parameter|Value|
|---|---|
|travelled_route_types|0|
|travelled_route_types|1|
|travelled_route_types|2|
|travelled_route_types|3|
|travelled_route_types|4|

> Example responses

> 200 Response

```json
null
```

> 400 Response

```json
{
  "message": "string",
  "status": {
    "health": 0,
    "version": "string"
  }
}
```

> 403 Response

```json
{
  "message": "string",
  "status": {
    "health": 0,
    "version": "string"
  }
}
```

<h3 id="estimate-a-fare-by-zone-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Resultant set fare estimates|[V3.FareEstimateResponse](#schemav3.fareestimateresponse)|
|400|Bad Request|Invalid Request|[V3.ErrorResponse](#schemav3.errorresponse)|
|403|Forbidden|Access Denied|[V3.ErrorResponse](#schemav3.errorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="ptv-timetable-api---version-3-outlets">Outlets</h1>

## List all ticket outlets

<a id="opIdOutlets_GetAllOutlets"></a>

> Code samples

```bash
curl https://example.com/v3/outlets \
  -H 'Accept: application/json'
```

`GET /v3/outlets`

<h3 id="list-all-ticket-outlets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|max_results|query|integer(int32)|false|Maximum number of results returned (default = 30)|
|token|query|string|false|Please ignore|
|devid|query|string|false|Your developer id|
|signature|query|string|false|Authentication signature for request|

> Example responses

> 200 Response

```json
{
  "outlets": [
    {
      "outlet_business": "string",
      "outlet_business_hour_fri": "string",
      "outlet_business_hour_mon": "string",
      "outlet_business_hour_sat": "string",
      "outlet_business_hour_sun": "string",
      "outlet_business_hour_thur": "string",
      "outlet_business_hour_tue": "string",
      "outlet_business_hour_wed": "string",
      "outlet_latitude": 0,
      "outlet_longitude": 0,
      "outlet_name": "string",
      "outlet_notes": "string",
      "outlet_postcode": 0,
      "outlet_slid_spid": "string",
      "outlet_suburb": "string"
    }
  ],
  "status": {
    "health": 0,
    "version": "string"
  }
}
```

> 400 Response

```json
{
  "message": "string",
  "status": {
    "health": 0,
    "version": "string"
  }
}
```

> 403 Response

```json
{
  "message": "string",
  "status": {
    "health": 0,
    "version": "string"
  }
}
```

<h3 id="list-all-ticket-outlets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Ticket outlets.|[V3.OutletResponse](#schemav3.outletresponse)|
|400|Bad Request|Invalid Request|[V3.ErrorResponse](#schemav3.errorresponse)|
|403|Forbidden|Access Denied|[V3.ErrorResponse](#schemav3.errorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## List ticket outlets near a specific location

<a id="opIdOutlets_GetOutletsByGeolocation"></a>

> Code samples

```bash
curl https://example.com/v3/outlets/location/0,0 \
  -H 'Accept: application/json'
```

`GET /v3/outlets/location/{latitude},{longitude}`

<h3 id="list-ticket-outlets-near-a-specific-location-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|latitude|path|number(float)|true|Geographic coordinate of latitude|
|longitude|path|number(float)|true|Geographic coordinate of longitude|
|max_distance|query|number(double)|false|Filter by maximum distance (in metres) from location specified via latitude and longitude parameters (default = 300)|
|max_results|query|integer(int32)|false|Maximum number of results returned (default = 30)|
|token|query|string|false|Please ignore|
|devid|query|string|false|Your developer id|
|signature|query|string|false|Authentication signature for request|

> Example responses

> 200 Response

```json
{
  "outlets": [
    {
      "outlet_business": "string",
      "outlet_business_hour_fri": "string",
      "outlet_business_hour_mon": "string",
      "outlet_business_hour_sat": "string",
      "outlet_business_hour_sun": "string",
      "outlet_business_hour_thur": "string",
      "outlet_business_hour_tue": "string",
      "outlet_business_hour_wed": "string",
      "outlet_distance": 0,
      "outlet_latitude": 0,
      "outlet_longitude": 0,
      "outlet_name": "string",
      "outlet_notes": "string",
      "outlet_postcode": 0,
      "outlet_slid_spid": "string",
      "outlet_suburb": "string"
    }
  ],
  "status": {
    "health": 0,
    "version": "string"
  }
}
```

> 400 Response

```json
{
  "message": "string",
  "status": {
    "health": 0,
    "version": "string"
  }
}
```

> 403 Response

```json
{
  "message": "string",
  "status": {
    "health": 0,
    "version": "string"
  }
}
```

<h3 id="list-ticket-outlets-near-a-specific-location-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Ticket outlets near the specified location.|[V3.OutletGeolocationResponse](#schemav3.outletgeolocationresponse)|
|400|Bad Request|Invalid Request|[V3.ErrorResponse](#schemav3.errorresponse)|
|403|Forbidden|Access Denied|[V3.ErrorResponse](#schemav3.errorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="ptv-timetable-api---version-3-patterns">Patterns</h1>

## View the stopping pattern for a specific trip/service run

<a id="opIdPatterns_GetPatternByRun"></a>

> Code samples

```bash
curl 'https://example.com/v3/pattern/run/string/route_type/0?expand=All' \
  -H 'Accept: application/json'
```

`GET /v3/pattern/run/{run_ref}/route_type/{route_type}`

<h3 id="view-the-stopping-pattern-for-a-specific-tripservice-run-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|run_ref|path|string|true|The run_ref is the identifier of a run as returned by the departures/* and runs/* endpoints. WARNING, run_id is deprecated. Use run_ref instead.|
|route_type|path|integer(int32)|true|Number identifying transport mode; values returned via RouteTypes API|
|expand|query|[string]|true|List of objects to be returned in full (i.e. expanded) - options include: All, Stop, Route, Run, Direction, Disruption, VehiclePosition, VehicleDescriptor and None. Default is Disruption. Run must be expanded to receive VehiclePosition and VehicleDescriptor information.|
|stop_id|query|integer(int32)|false|Filter by stop_id; values returned by Stops API|
|date_utc|query|string(date-time)|false|Filter by the date and time of the request (ISO 8601 UTC format)|
|include_skipped_stops|query|boolean|false|Include any skipped stops in a stopping pattern. Defaults to false.|
|include_geopath|query|boolean|false|Indicates if geopath data will be returned (default = false)|
|token|query|string|false|Please ignore|
|devid|query|string|false|Your developer id|
|signature|query|string|false|Authentication signature for request|

#### Enumerated Values

|Parameter|Value|
|---|---|
|route_type|0|
|route_type|1|
|route_type|2|
|route_type|3|
|route_type|4|
|expand|All|
|expand|Stop|
|expand|Route|
|expand|Run|
|expand|Direction|
|expand|Disruption|
|expand|VehicleDescriptor|
|expand|VehiclePosition|
|expand|None|

> Example responses

> 200 Response

```json
{
  "departures": [
    {
      "at_platform": true,
      "departure_sequence": 0,
      "direction_id": 0,
      "disruption_ids": [
        0
      ],
      "estimated_departure_utc": "1970-01-01T00:00:00Z",
      "flags": "string",
      "platform_number": "string",
      "route_id": 0,
      "run_id": 0,
      "run_ref": "string",
      "scheduled_departure_utc": "1970-01-01T00:00:00Z",
      "skipped_stops": [
        {
          "route_type": 0,
          "stop_distance": 0,
          "stop_id": 0,
          "stop_landmark": "string",
          "stop_latitude": 0,
          "stop_longitude": 0,
          "stop_name": "string",
          "stop_sequence": 0,
          "stop_suburb": "string"
        }
      ],
      "stop_id": 0
    }
  ],
  "directions": {
    "property1": {
      "direction_id": 0,
      "direction_name": "string",
      "route_id": 0,
      "route_type": 0
    },
    "property2": {
      "direction_id": 0,
      "direction_name": "string",
      "route_id": 0,
      "route_type": 0
    }
  },
  "disruptions": [
    {
      "colour": "string",
      "description": "string",
      "display_on_board": true,
      "display_status": true,
      "disruption_id": 0,
      "disruption_status": "string",
      "disruption_type": "string",
      "from_date": "1970-01-01T00:00:00Z",
      "last_updated": "1970-01-01T00:00:00Z",
      "published_on": "1970-01-01T00:00:00Z",
      "routes": [
        {
          "direction": {
            "direction_id": 0,
            "direction_name": "string",
            "route_direction_id": 0,
            "service_time": "string"
          },
          "route_gtfs_id": "string",
          "route_id": 0,
          "route_name": "string",
          "route_number": "string",
          "route_type": 0
        }
      ],
      "stops": [
        {
          "stop_id": 0,
          "stop_name": "string"
        }
      ],
      "title": "string",
      "to_date": "1970-01-01T00:00:00Z",
      "url": "string"
    }
  ],
  "routes": {
    "property1": {},
    "property2": {}
  },
  "runs": {
    "property1": {
      "destination_name": "string",
      "direction_id": 0,
      "express_stop_count": 0,
      "final_stop_id": 0,
      "geopath": [
        {}
      ],
      "route_id": 0,
      "route_type": 0,
      "run_id": 0,
      "run_ref": "string",
      "run_sequence": 0,
      "status": "string",
      "vehicle_descriptor": {
        "air_conditioned": true,
        "description": "string",
        "id": "string",
        "length": "string",
        "low_floor": true,
        "operator": "string",
        "supplier": "string"
      },
      "vehicle_position": {
        "bearing": 0,
        "datetime_utc": "1970-01-01T00:00:00Z",
        "direction": "string",
        "easting": 0,
        "expiry_time": "1970-01-01T00:00:00Z",
        "latitude": 0,
        "longitude": 0,
        "northing": 0,
        "supplier": "string"
      }
    },
    "property2": {
      "destination_name": "string",
      "direction_id": 0,
      "express_stop_count": 0,
      "final_stop_id": 0,
      "geopath": [
        {}
      ],
      "route_id": 0,
      "route_type": 0,
      "run_id": 0,
      "run_ref": "string",
      "run_sequence": 0,
      "status": "string",
      "vehicle_descriptor": {
        "air_conditioned": true,
        "description": "string",
        "id": "string",
        "length": "string",
        "low_floor": true,
        "operator": "string",
        "supplier": "string"
      },
      "vehicle_position": {
        "bearing": 0,
        "datetime_utc": "1970-01-01T00:00:00Z",
        "direction": "string",
        "easting": 0,
        "expiry_time": "1970-01-01T00:00:00Z",
        "latitude": 0,
        "longitude": 0,
        "northing": 0,
        "supplier": "string"
      }
    }
  },
  "status": {
    "health": 0,
    "version": "string"
  },
  "stops": {
    "property1": {
      "route_type": 0,
      "stop_distance": 0,
      "stop_id": 0,
      "stop_landmark": "string",
      "stop_latitude": 0,
      "stop_longitude": 0,
      "stop_name": "string",
      "stop_sequence": 0,
      "stop_suburb": "string",
      "stop_ticket": {
        "is_free_fare_zone": true,
        "ticket_checks": true,
        "ticket_machine": true,
        "ticket_type": "string",
        "ticket_zones": [
          0
        ],
        "vline_reservation": true,
        "zone": "string"
      }
    },
    "property2": {
      "route_type": 0,
      "stop_distance": 0,
      "stop_id": 0,
      "stop_landmark": "string",
      "stop_latitude": 0,
      "stop_longitude": 0,
      "stop_name": "string",
      "stop_sequence": 0,
      "stop_suburb": "string",
      "stop_ticket": {
        "is_free_fare_zone": true,
        "ticket_checks": true,
        "ticket_machine": true,
        "ticket_type": "string",
        "ticket_zones": [
          0
        ],
        "vline_reservation": true,
        "zone": "string"
      }
    }
  }
}
```

> 400 Response

```json
{
  "message": "string",
  "status": {
    "health": 0,
    "version": "string"
  }
}
```

> 403 Response

```json
{
  "message": "string",
  "status": {
    "health": 0,
    "version": "string"
  }
}
```

<h3 id="view-the-stopping-pattern-for-a-specific-tripservice-run-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The stopping pattern of the specified run_ref and route type. (NOTE: the departure sequence field should be used to sort departures in chronological order, however it is not always N+1 or N-1 of the previous or following departure. e.g 100, 200, 250, 300 instead of 1, 2, 3, 4)|[V3.StoppingPattern](#schemav3.stoppingpattern)|
|400|Bad Request|Invalid Request|[V3.ErrorResponse](#schemav3.errorresponse)|
|403|Forbidden|Access Denied|[V3.ErrorResponse](#schemav3.errorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="ptv-timetable-api---version-3-routetypes">RouteTypes</h1>

## View all route types and their names

<a id="opIdRouteTypes_GetRouteTypes"></a>

> Code samples

```bash
curl https://example.com/v3/route_types \
  -H 'Accept: application/json'
```

`GET /v3/route_types`

<h3 id="view-all-route-types-and-their-names-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|query|string|false|Please ignore|
|devid|query|string|false|Your developer id|
|signature|query|string|false|Authentication signature for request|

> Example responses

> 200 Response

```json
{
  "route_types": [
    {
      "route_type": 0,
      "route_type_name": "string"
    }
  ],
  "status": {
    "health": 0,
    "version": "string"
  }
}
```

> 400 Response

```json
{
  "message": "string",
  "status": {
    "health": 0,
    "version": "string"
  }
}
```

> 403 Response

```json
{
  "message": "string",
  "status": {
    "health": 0,
    "version": "string"
  }
}
```

<h3 id="view-all-route-types-and-their-names-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|All route types (i.e. identifiers of transport modes) and their names.|[V3.RouteTypesResponse](#schemav3.routetypesresponse)|
|400|Bad Request|Invalid Request|[V3.ErrorResponse](#schemav3.errorresponse)|
|403|Forbidden|Access Denied|[V3.ErrorResponse](#schemav3.errorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="ptv-timetable-api---version-3-routes">Routes</h1>

## View route names and numbers for all routes

<a id="opIdRoutes_OneOrMoreRoutes"></a>

> Code samples

```bash
curl https://example.com/v3/routes \
  -H 'Accept: application/json'
```

`GET /v3/routes`

<h3 id="view-route-names-and-numbers-for-all-routes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|route_types|query|[integer(int32)]|false|Filter by route_type; values returned via RouteTypes API|
|route_name|query|string|false|Filter by name  of route (accepts partial route name matches)|
|token|query|string|false|Please ignore|
|devid|query|string|false|Your developer id|
|signature|query|string|false|Authentication signature for request|

#### Enumerated Values

|Parameter|Value|
|---|---|
|route_types|0|
|route_types|1|
|route_types|2|
|route_types|3|
|route_types|4|

> Example responses

> 200 Response

```json
{
  "route": {},
  "status": {
    "health": 0,
    "version": "string"
  }
}
```

> 400 Response

```json
{
  "message": "string",
  "status": {
    "health": 0,
    "version": "string"
  }
}
```

> 403 Response

```json
{
  "message": "string",
  "status": {
    "health": 0,
    "version": "string"
  }
}
```

<h3 id="view-route-names-and-numbers-for-all-routes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Route names and numbers for all routes of all route types.|[V3.RouteResponse](#schemav3.routeresponse)|
|400|Bad Request|Invalid Request|[V3.ErrorResponse](#schemav3.errorresponse)|
|403|Forbidden|Access Denied|[V3.ErrorResponse](#schemav3.errorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## View route name and number for specific route ID

<a id="opIdRoutes_RouteFromId"></a>

> Code samples

```bash
curl https://example.com/v3/routes/0 \
  -H 'Accept: application/json'
```

`GET /v3/routes/{route_id}`

<h3 id="view-route-name-and-number-for-specific-route-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|route_id|path|integer(int32)|true|Identifier of route; values returned by Departures, Directions and Disruptions APIs|
|include_geopath|query|boolean|false|Indicates kif geopath data will be returned (default = false)|
|geopath_utc|query|string(date-time)|false|Filter geopaths by date (ISO 8601 UTC format) (default = current date)|
|token|query|string|false|Please ignore|
|devid|query|string|false|Your developer id|
|signature|query|string|false|Authentication signature for request|

> Example responses

> 200 Response

```json
{
  "route": {},
  "status": {
    "health": 0,
    "version": "string"
  }
}
```

> 400 Response

```json
{
  "message": "string",
  "status": {
    "health": 0,
    "version": "string"
  }
}
```

> 403 Response

```json
{
  "message": "string",
  "status": {
    "health": 0,
    "version": "string"
  }
}
```

<h3 id="view-route-name-and-number-for-specific-route-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The route name and number for the specified route ID.|[V3.RouteResponse](#schemav3.routeresponse)|
|400|Bad Request|Invalid Request|[V3.ErrorResponse](#schemav3.errorresponse)|
|403|Forbidden|Access Denied|[V3.ErrorResponse](#schemav3.errorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="ptv-timetable-api---version-3-runs">Runs</h1>

## View all trip/service runs for a specific route ID

<a id="opIdRuns_ForRoute"></a>

> Code samples

```bash
curl https://example.com/v3/runs/route/0 \
  -H 'Accept: application/json'
```

`GET /v3/runs/route/{route_id}`

<h3 id="view-all-tripservice-runs-for-a-specific-route-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|route_id|path|integer(int32)|true|Identifier of route; values returned by Routes API - v3/routes.|
|expand|query|[string]|false|List of objects to be returned in full (i.e. expanded) - options include: All, VehiclePosition, VehicleDescriptor, or None. Default is None.|
|date_utc|query|string(date-time)|false|Date of the request. (optional - defaults to now)|
|token|query|string|false|Please ignore|
|devid|query|string|false|Your developer id|
|signature|query|string|false|Authentication signature for request|

#### Enumerated Values

|Parameter|Value|
|---|---|
|expand|All|
|expand|VehicleDescriptor|
|expand|VehiclePosition|
|expand|None|

> Example responses

> 200 Response

```json
{
  "runs": [
    {
      "destination_name": "string",
      "direction_id": 0,
      "express_stop_count": 0,
      "final_stop_id": 0,
      "geopath": [
        {}
      ],
      "route_id": 0,
      "route_type": 0,
      "run_id": 0,
      "run_ref": "string",
      "run_sequence": 0,
      "status": "string",
      "vehicle_descriptor": {
        "air_conditioned": true,
        "description": "string",
        "id": "string",
        "length": "string",
        "low_floor": true,
        "operator": "string",
        "supplier": "string"
      },
      "vehicle_position": {
        "bearing": 0,
        "datetime_utc": "1970-01-01T00:00:00Z",
        "direction": "string",
        "easting": 0,
        "expiry_time": "1970-01-01T00:00:00Z",
        "latitude": 0,
        "longitude": 0,
        "northing": 0,
        "supplier": "string"
      }
    }
  ],
  "status": {
    "health": 0,
    "version": "string"
  }
}
```

> 400 Response

```json
{
  "message": "string",
  "status": {
    "health": 0,
    "version": "string"
  }
}
```

> 403 Response

```json
{
  "message": "string",
  "status": {
    "health": 0,
    "version": "string"
  }
}
```

<h3 id="view-all-tripservice-runs-for-a-specific-route-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|All trip/service run details for the specified route ID.|[V3.RunsResponse](#schemav3.runsresponse)|
|400|Bad Request|Invalid Request|[V3.ErrorResponse](#schemav3.errorresponse)|
|403|Forbidden|Access Denied|[V3.ErrorResponse](#schemav3.errorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## View all trip/service runs for a specific route ID and route type

<a id="opIdRuns_ForRouteAndRouteType"></a>

> Code samples

```bash
curl 'https://example.com/v3/runs/route/0/route_type/0?expand=All' \
  -H 'Accept: application/json'
```

`GET /v3/runs/route/{route_id}/route_type/{route_type}`

<h3 id="view-all-tripservice-runs-for-a-specific-route-id-and-route-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|route_id|path|integer(int32)|true|Identifier of route; values returned by Routes API - v3/routes.|
|route_type|path|integer(int32)|true|Number identifying transport mode; values returned via RouteTypes API|
|expand|query|[string]|true|List of objects to be returned in full (i.e. expanded) - options include: All, VehiclePosition, VehicleDescriptor, or None. Default is All.|
|date_utc|query|string(date-time)|false|Date of the request. (optional - defaults to now)|
|token|query|string|false|Please ignore|
|devid|query|string|false|Your developer id|
|signature|query|string|false|Authentication signature for request|

#### Enumerated Values

|Parameter|Value|
|---|---|
|route_type|0|
|route_type|1|
|route_type|2|
|route_type|3|
|route_type|4|
|expand|All|
|expand|VehicleDescriptor|
|expand|VehiclePosition|
|expand|None|

> Example responses

> 200 Response

```json
{
  "runs": [
    {
      "destination_name": "string",
      "direction_id": 0,
      "express_stop_count": 0,
      "final_stop_id": 0,
      "geopath": [
        {}
      ],
      "route_id": 0,
      "route_type": 0,
      "run_id": 0,
      "run_ref": "string",
      "run_sequence": 0,
      "status": "string",
      "vehicle_descriptor": {
        "air_conditioned": true,
        "description": "string",
        "id": "string",
        "length": "string",
        "low_floor": true,
        "operator": "string",
        "supplier": "string"
      },
      "vehicle_position": {
        "bearing": 0,
        "datetime_utc": "1970-01-01T00:00:00Z",
        "direction": "string",
        "easting": 0,
        "expiry_time": "1970-01-01T00:00:00Z",
        "latitude": 0,
        "longitude": 0,
        "northing": 0,
        "supplier": "string"
      }
    }
  ],
  "status": {
    "health": 0,
    "version": "string"
  }
}
```

> 400 Response

```json
{
  "message": "string",
  "status": {
    "health": 0,
    "version": "string"
  }
}
```

> 403 Response

```json
{
  "message": "string",
  "status": {
    "health": 0,
    "version": "string"
  }
}
```

<h3 id="view-all-tripservice-runs-for-a-specific-route-id-and-route-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|All trip/service run details for the specified route ID and route type.|[V3.RunsResponse](#schemav3.runsresponse)|
|400|Bad Request|Invalid Request|[V3.ErrorResponse](#schemav3.errorresponse)|
|403|Forbidden|Access Denied|[V3.ErrorResponse](#schemav3.errorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## View all trip/service runs for a specific run_ref

<a id="opIdRuns_ForRun"></a>

> Code samples

```bash
curl 'https://example.com/v3/runs/string?expand=All' \
  -H 'Accept: application/json'
```

`GET /v3/runs/{run_ref}`

<h3 id="view-all-tripservice-runs-for-a-specific-runref-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|run_ref|path|string|true|The run_ref is the identifier of a run as returned by the departures/* and runs/* endpoints. WARNING, run_id is deprecated. Use run_ref instead.|
|expand|query|[string]|true|List of objects to be returned in full (i.e. expanded) - options include: All, VehiclePosition, VehicleDescriptor, or None. Default is None.|
|date_utc|query|string(date-time)|false|Date of the request. (optional - defaults to now)|
|include_geopath|query|boolean|false|Indicates if geopath data will be returned (default = false)|
|token|query|string|false|Please ignore|
|devid|query|string|false|Your developer id|
|signature|query|string|false|Authentication signature for request|

#### Enumerated Values

|Parameter|Value|
|---|---|
|expand|All|
|expand|VehicleDescriptor|
|expand|VehiclePosition|
|expand|None|

> Example responses

> 200 Response

```json
{
  "runs": [
    {
      "destination_name": "string",
      "direction_id": 0,
      "express_stop_count": 0,
      "final_stop_id": 0,
      "geopath": [
        {}
      ],
      "route_id": 0,
      "route_type": 0,
      "run_id": 0,
      "run_ref": "string",
      "run_sequence": 0,
      "status": "string",
      "vehicle_descriptor": {
        "air_conditioned": true,
        "description": "string",
        "id": "string",
        "length": "string",
        "low_floor": true,
        "operator": "string",
        "supplier": "string"
      },
      "vehicle_position": {
        "bearing": 0,
        "datetime_utc": "1970-01-01T00:00:00Z",
        "direction": "string",
        "easting": 0,
        "expiry_time": "1970-01-01T00:00:00Z",
        "latitude": 0,
        "longitude": 0,
        "northing": 0,
        "supplier": "string"
      }
    }
  ],
  "status": {
    "health": 0,
    "version": "string"
  }
}
```

> 400 Response

```json
{
  "message": "string",
  "status": {
    "health": 0,
    "version": "string"
  }
}
```

> 403 Response

```json
{
  "message": "string",
  "status": {
    "health": 0,
    "version": "string"
  }
}
```

<h3 id="view-all-tripservice-runs-for-a-specific-runref-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|All trip/service run details for the specified run_ref.|[V3.RunsResponse](#schemav3.runsresponse)|
|400|Bad Request|Invalid Request|[V3.ErrorResponse](#schemav3.errorresponse)|
|403|Forbidden|Access Denied|[V3.ErrorResponse](#schemav3.errorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## View the trip/service run for a specific run_ref and route type

<a id="opIdRuns_ForRunAndRouteType"></a>

> Code samples

```bash
curl 'https://example.com/v3/runs/string/route_type/0?expand=All' \
  -H 'Accept: application/json'
```

`GET /v3/runs/{run_ref}/route_type/{route_type}`

<h3 id="view-the-tripservice-run-for-a-specific-runref-and-route-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|run_ref|path|string|true|The run_ref is the identifier of a run as returned by the departures/* and runs/* endpoints. WARNING, run_id is deprecated. Use run_ref instead.|
|route_type|path|integer(int32)|true|Number identifying transport mode; values returned via RouteTypes API|
|expand|query|[string]|true|List of objects to be returned in full (i.e. expanded) - options include: All, VehiclePosition, VehicleDescriptor, or None. Default is None.|
|date_utc|query|string(date-time)|false|Date of the request. (optional - defaults to now)|
|include_geopath|query|boolean|false|Indicates if geopath data will be returned (default = false)|
|token|query|string|false|Please ignore|
|devid|query|string|false|Your developer id|
|signature|query|string|false|Authentication signature for request|

#### Enumerated Values

|Parameter|Value|
|---|---|
|route_type|0|
|route_type|1|
|route_type|2|
|route_type|3|
|route_type|4|
|expand|All|
|expand|VehicleDescriptor|
|expand|VehiclePosition|
|expand|None|

> Example responses

> 200 Response

```json
{
  "run": {
    "destination_name": "string",
    "direction_id": 0,
    "express_stop_count": 0,
    "final_stop_id": 0,
    "geopath": [
      {}
    ],
    "route_id": 0,
    "route_type": 0,
    "run_id": 0,
    "run_ref": "string",
    "run_sequence": 0,
    "status": "string",
    "vehicle_descriptor": {
      "air_conditioned": true,
      "description": "string",
      "id": "string",
      "length": "string",
      "low_floor": true,
      "operator": "string",
      "supplier": "string"
    },
    "vehicle_position": {
      "bearing": 0,
      "datetime_utc": "1970-01-01T00:00:00Z",
      "direction": "string",
      "easting": 0,
      "expiry_time": "1970-01-01T00:00:00Z",
      "latitude": 0,
      "longitude": 0,
      "northing": 0,
      "supplier": "string"
    }
  },
  "status": {
    "health": 0,
    "version": "string"
  }
}
```

> 400 Response

```json
{
  "message": "string",
  "status": {
    "health": 0,
    "version": "string"
  }
}
```

> 403 Response

```json
{
  "message": "string",
  "status": {
    "health": 0,
    "version": "string"
  }
}
```

<h3 id="view-the-tripservice-run-for-a-specific-runref-and-route-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The trip/service run details for the run_ref and route type specified.|[V3.RunResponse](#schemav3.runresponse)|
|400|Bad Request|Invalid Request|[V3.ErrorResponse](#schemav3.errorresponse)|
|403|Forbidden|Access Denied|[V3.ErrorResponse](#schemav3.errorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="ptv-timetable-api---version-3-search">Search</h1>

## View stops, routes and myki ticket outlets that match the search term

<a id="opIdSearch_Search"></a>

> Code samples

```bash
curl https://example.com/v3/search/string \
  -H 'Accept: application/json'
```

`GET /v3/search/{search_term}`

<h3 id="view-stops-routes-and-myki-ticket-outlets-that-match-the-search-term-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|search_term|path|string|true|Search text (note: if search text is numeric and/or less than 3 characters, the API will only return routes)|
|route_types|query|[integer(int32)]|false|Filter by route_type; values returned via RouteTypes API (note: stops and routes are ordered by route_types specified)|
|latitude|query|number(float)|false|Filter by geographic coordinate of latitude|
|longitude|query|number(float)|false|Filter by geographic coordinate of longitude|
|max_distance|query|number(float)|false|Filter by maximum distance (in metres) from location specified via latitude and longitude parameters|
|include_addresses|query|boolean|false|Placeholder for future development; currently unavailable|
|include_outlets|query|boolean|false|Indicates if outlets will be returned in response (default = true)|
|match_stop_by_suburb|query|boolean|false|Indicates whether to find stops by suburbs in the search term (default = true)|
|match_route_by_suburb|query|boolean|false|Indicates whether to find routes by suburbs in the search term (default = true)|
|match_stop_by_gtfs_stop_id|query|boolean|false|Indicates whether to search for stops according to a metlink stop ID (default = false)|
|token|query|string|false|Please ignore|
|devid|query|string|false|Your developer id|
|signature|query|string|false|Authentication signature for request|

#### Enumerated Values

|Parameter|Value|
|---|---|
|route_types|0|
|route_types|1|
|route_types|2|
|route_types|3|
|route_types|4|

> Example responses

> 200 Response

```json
{
  "outlets": [
    {
      "outlet_business": "string",
      "outlet_business_hour_fri": "string",
      "outlet_business_hour_mon": "string",
      "outlet_business_hour_sat": "string",
      "outlet_business_hour_sun": "string",
      "outlet_business_hour_thur": "string",
      "outlet_business_hour_tue": "string",
      "outlet_business_hour_wed": "string",
      "outlet_distance": 0,
      "outlet_latitude": 0,
      "outlet_longitude": 0,
      "outlet_name": "string",
      "outlet_notes": "string",
      "outlet_postcode": 0,
      "outlet_slid_spid": "string",
      "outlet_suburb": "string"
    }
  ],
  "routes": [
    {
      "route_gtfs_id": "string",
      "route_id": 0,
      "route_name": "string",
      "route_number": "string",
      "route_service_status": {
        "description": "string",
        "timestamp": "1970-01-01T00:00:00Z"
      },
      "route_type": 0
    }
  ],
  "status": {
    "health": 0,
    "version": "string"
  },
  "stops": [
    {
      "route_type": 0,
      "routes": [
        {
          "route_gtfs_id": "string",
          "route_id": 0,
          "route_name": "string",
          "route_number": "string",
          "route_service_status": {
            "description": "string",
            "timestamp": "1970-01-01T00:00:00Z"
          },
          "route_type": 0
        }
      ],
      "stop_distance": 0,
      "stop_id": 0,
      "stop_landmark": "string",
      "stop_latitude": 0,
      "stop_longitude": 0,
      "stop_name": "string",
      "stop_sequence": 0,
      "stop_suburb": "string"
    }
  ]
}
```

> 400 Response

```json
{
  "message": "string",
  "status": {
    "health": 0,
    "version": "string"
  }
}
```

> 403 Response

```json
{
  "message": "string",
  "status": {
    "health": 0,
    "version": "string"
  }
}
```

<h3 id="view-stops-routes-and-myki-ticket-outlets-that-match-the-search-term-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Stops, routes and myki ticket outlets that contain the search term (note: stops and routes are ordered by route_type by default).|[V3.SearchResult](#schemav3.searchresult)|
|400|Bad Request|Invalid Request|[V3.ErrorResponse](#schemav3.errorresponse)|
|403|Forbidden|Access Denied|[V3.ErrorResponse](#schemav3.errorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="ptv-timetable-api---version-3-stops">Stops</h1>

## View all stops near a specific location

<a id="opIdStops_StopsByGeolocation"></a>

> Code samples

```bash
curl https://example.com/v3/stops/location/0,0 \
  -H 'Accept: application/json'
```

`GET /v3/stops/location/{latitude},{longitude}`

<h3 id="view-all-stops-near-a-specific-location-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|latitude|path|number(float)|true|Geographic coordinate of latitude|
|longitude|path|number(float)|true|Geographic coordinate of longitude|
|route_types|query|[integer(int32)]|false|Filter by route_type; values returned via RouteTypes API|
|max_results|query|integer(int32)|false|Maximum number of results returned (default = 30)|
|max_distance|query|number(double)|false|Filter by maximum distance (in metres) from location specified via latitude and longitude parameters (default = 300)|
|stop_disruptions|query|boolean|false|Indicates if stop disruption information will be returned (default = false)|
|token|query|string|false|Please ignore|
|devid|query|string|false|Your developer id|
|signature|query|string|false|Authentication signature for request|

#### Enumerated Values

|Parameter|Value|
|---|---|
|route_types|0|
|route_types|1|
|route_types|2|
|route_types|3|
|route_types|4|

> Example responses

> 200 Response

```json
{
  "disruptions": {
    "property1": {
      "colour": "string",
      "description": "string",
      "display_on_board": true,
      "display_status": true,
      "disruption_id": 0,
      "disruption_status": "string",
      "disruption_type": "string",
      "from_date": "1970-01-01T00:00:00Z",
      "last_updated": "1970-01-01T00:00:00Z",
      "published_on": "1970-01-01T00:00:00Z",
      "routes": [
        {
          "direction": {
            "direction_id": 0,
            "direction_name": "string",
            "route_direction_id": 0,
            "service_time": "string"
          },
          "route_gtfs_id": "string",
          "route_id": 0,
          "route_name": "string",
          "route_number": "string",
          "route_type": 0
        }
      ],
      "stops": [
        {
          "stop_id": 0,
          "stop_name": "string"
        }
      ],
      "title": "string",
      "to_date": "1970-01-01T00:00:00Z",
      "url": "string"
    },
    "property2": {
      "colour": "string",
      "description": "string",
      "display_on_board": true,
      "display_status": true,
      "disruption_id": 0,
      "disruption_status": "string",
      "disruption_type": "string",
      "from_date": "1970-01-01T00:00:00Z",
      "last_updated": "1970-01-01T00:00:00Z",
      "published_on": "1970-01-01T00:00:00Z",
      "routes": [
        {
          "direction": {
            "direction_id": 0,
            "direction_name": "string",
            "route_direction_id": 0,
            "service_time": "string"
          },
          "route_gtfs_id": "string",
          "route_id": 0,
          "route_name": "string",
          "route_number": "string",
          "route_type": 0
        }
      ],
      "stops": [
        {
          "stop_id": 0,
          "stop_name": "string"
        }
      ],
      "title": "string",
      "to_date": "1970-01-01T00:00:00Z",
      "url": "string"
    }
  },
  "status": {
    "health": 0,
    "version": "string"
  },
  "stops": [
    {
      "disruption_ids": [
        0
      ],
      "route_type": 0,
      "routes": [
        {}
      ],
      "stop_distance": 0,
      "stop_id": 0,
      "stop_landmark": "string",
      "stop_latitude": 0,
      "stop_longitude": 0,
      "stop_name": "string",
      "stop_sequence": 0,
      "stop_suburb": "string"
    }
  ]
}
```

> 400 Response

```json
{
  "message": "string",
  "status": {
    "health": 0,
    "version": "string"
  }
}
```

> 403 Response

```json
{
  "message": "string",
  "status": {
    "health": 0,
    "version": "string"
  }
}
```

<h3 id="view-all-stops-near-a-specific-location-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|All stops near the specified location.|[V3.StopsByDistanceResponse](#schemav3.stopsbydistanceresponse)|
|400|Bad Request|Invalid Request|[V3.ErrorResponse](#schemav3.errorresponse)|
|403|Forbidden|Access Denied|[V3.ErrorResponse](#schemav3.errorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## View all stops on a specific route

<a id="opIdStops_StopsForRoute"></a>

> Code samples

```bash
curl https://example.com/v3/stops/route/0/route_type/0 \
  -H 'Accept: application/json'
```

`GET /v3/stops/route/{route_id}/route_type/{route_type}`

<h3 id="view-all-stops-on-a-specific-route-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|route_id|path|integer(int32)|true|Identifier of route; values returned by Routes API - v3/routes|
|route_type|path|integer(int32)|true|Number identifying transport mode; values returned via RouteTypes API|
|direction_id|query|integer(int32)|false|An optional direction; values returned by Directions API. When this is set, stop sequence information is returned in the response.|
|stop_disruptions|query|boolean|false|Indicates if stop disruption information will be returned (default = false)|
|include_geopath|query|boolean|false|Indicates if geopath data will be returned (default = false)|
|geopath_utc|query|string(date-time)|false|Filter geopaths by date (ISO 8601 UTC format) (default = current date)|
|token|query|string|false|Please ignore|
|devid|query|string|false|Your developer id|
|signature|query|string|false|Authentication signature for request|

#### Enumerated Values

|Parameter|Value|
|---|---|
|route_type|0|
|route_type|1|
|route_type|2|
|route_type|3|
|route_type|4|

> Example responses

> 200 Response

```json
{
  "disruptions": {
    "property1": {
      "colour": "string",
      "description": "string",
      "display_on_board": true,
      "display_status": true,
      "disruption_id": 0,
      "disruption_status": "string",
      "disruption_type": "string",
      "from_date": "1970-01-01T00:00:00Z",
      "last_updated": "1970-01-01T00:00:00Z",
      "published_on": "1970-01-01T00:00:00Z",
      "routes": [
        {
          "direction": {
            "direction_id": 0,
            "direction_name": "string",
            "route_direction_id": 0,
            "service_time": "string"
          },
          "route_gtfs_id": "string",
          "route_id": 0,
          "route_name": "string",
          "route_number": "string",
          "route_type": 0
        }
      ],
      "stops": [
        {
          "stop_id": 0,
          "stop_name": "string"
        }
      ],
      "title": "string",
      "to_date": "1970-01-01T00:00:00Z",
      "url": "string"
    },
    "property2": {
      "colour": "string",
      "description": "string",
      "display_on_board": true,
      "display_status": true,
      "disruption_id": 0,
      "disruption_status": "string",
      "disruption_type": "string",
      "from_date": "1970-01-01T00:00:00Z",
      "last_updated": "1970-01-01T00:00:00Z",
      "published_on": "1970-01-01T00:00:00Z",
      "routes": [
        {
          "direction": {
            "direction_id": 0,
            "direction_name": "string",
            "route_direction_id": 0,
            "service_time": "string"
          },
          "route_gtfs_id": "string",
          "route_id": 0,
          "route_name": "string",
          "route_number": "string",
          "route_type": 0
        }
      ],
      "stops": [
        {
          "stop_id": 0,
          "stop_name": "string"
        }
      ],
      "title": "string",
      "to_date": "1970-01-01T00:00:00Z",
      "url": "string"
    }
  },
  "geopath": [
    {}
  ],
  "status": {
    "health": 0,
    "version": "string"
  },
  "stops": [
    {
      "disruption_ids": [
        0
      ],
      "route_type": 0,
      "stop_id": 0,
      "stop_landmark": "string",
      "stop_latitude": 0,
      "stop_longitude": 0,
      "stop_name": "string",
      "stop_sequence": 0,
      "stop_suburb": "string",
      "stop_ticket": {
        "is_free_fare_zone": true,
        "ticket_checks": true,
        "ticket_machine": true,
        "ticket_type": "string",
        "ticket_zones": [
          0
        ],
        "vline_reservation": true,
        "zone": "string"
      }
    }
  ]
}
```

> 400 Response

```json
{
  "message": "string",
  "status": {
    "health": 0,
    "version": "string"
  }
}
```

> 403 Response

```json
{
  "message": "string",
  "status": {
    "health": 0,
    "version": "string"
  }
}
```

<h3 id="view-all-stops-on-a-specific-route-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|All stops on the specified route.|[V3.StopsOnRouteResponse](#schemav3.stopsonrouteresponse)|
|400|Bad Request|Invalid Request|[V3.ErrorResponse](#schemav3.errorresponse)|
|403|Forbidden|Access Denied|[V3.ErrorResponse](#schemav3.errorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## View facilities at a specific stop (Metro and V/Line stations only)

<a id="opIdStops_StopDetails"></a>

> Code samples

```bash
curl https://example.com/v3/stops/0/route_type/0 \
  -H 'Accept: application/json'
```

`GET /v3/stops/{stop_id}/route_type/{route_type}`

<h3 id="view-facilities-at-a-specific-stop-metro-and-vline-stations-only-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|stop_id|path|integer(int32)|true|Identifier of stop; values returned by Stops API|
|route_type|path|integer(int32)|true|Number identifying transport mode; values returned via RouteTypes API|
|stop_location|query|boolean|false|Indicates if stop location information will be returned (default = false)|
|stop_amenities|query|boolean|false|Indicates if stop amenity information will be returned (default = false)|
|stop_accessibility|query|boolean|false|Indicates if stop accessibility information will be returned (default = false)|
|stop_contact|query|boolean|false|Indicates if stop contact information will be returned (default = false)|
|stop_ticket|query|boolean|false|Indicates if stop ticket information will be returned (default = false)|
|gtfs|query|boolean|false|Incdicates whether the stop_id is a GTFS ID or not|
|stop_staffing|query|boolean|false|Indicates if stop staffing information will be returned (default = false)|
|stop_disruptions|query|boolean|false|Indicates if stop disruption information will be returned (default = false)|
|token|query|string|false|Please ignore|
|devid|query|string|false|Your developer id|
|signature|query|string|false|Authentication signature for request|

#### Enumerated Values

|Parameter|Value|
|---|---|
|route_type|0|
|route_type|1|
|route_type|2|
|route_type|3|
|route_type|4|

> Example responses

> 200 Response

```json
{
  "disruptions": {
    "property1": {
      "colour": "string",
      "description": "string",
      "display_on_board": true,
      "display_status": true,
      "disruption_id": 0,
      "disruption_status": "string",
      "disruption_type": "string",
      "from_date": "1970-01-01T00:00:00Z",
      "last_updated": "1970-01-01T00:00:00Z",
      "published_on": "1970-01-01T00:00:00Z",
      "routes": [
        {
          "direction": {
            "direction_id": 0,
            "direction_name": "string",
            "route_direction_id": 0,
            "service_time": "string"
          },
          "route_gtfs_id": "string",
          "route_id": 0,
          "route_name": "string",
          "route_number": "string",
          "route_type": 0
        }
      ],
      "stops": [
        {
          "stop_id": 0,
          "stop_name": "string"
        }
      ],
      "title": "string",
      "to_date": "1970-01-01T00:00:00Z",
      "url": "string"
    },
    "property2": {
      "colour": "string",
      "description": "string",
      "display_on_board": true,
      "display_status": true,
      "disruption_id": 0,
      "disruption_status": "string",
      "disruption_type": "string",
      "from_date": "1970-01-01T00:00:00Z",
      "last_updated": "1970-01-01T00:00:00Z",
      "published_on": "1970-01-01T00:00:00Z",
      "routes": [
        {
          "direction": {
            "direction_id": 0,
            "direction_name": "string",
            "route_direction_id": 0,
            "service_time": "string"
          },
          "route_gtfs_id": "string",
          "route_id": 0,
          "route_name": "string",
          "route_number": "string",
          "route_type": 0
        }
      ],
      "stops": [
        {
          "stop_id": 0,
          "stop_name": "string"
        }
      ],
      "title": "string",
      "to_date": "1970-01-01T00:00:00Z",
      "url": "string"
    }
  },
  "status": {
    "health": 0,
    "version": "string"
  },
  "stop": {
    "disruption_ids": [
      0
    ],
    "route_type": 0,
    "routes": [
      {}
    ],
    "station_description": "string",
    "station_type": "string",
    "stop_accessibility": {
      "audio_customer_information": true,
      "escalator": true,
      "hearing_loop": true,
      "lift": true,
      "lighting": true,
      "platform_number": 0,
      "stairs": true,
      "stop_accessible": true,
      "tactile_ground_surface_indicator": true,
      "waiting_room": true,
      "wheelchair": {
        "accessible_ramp": true,
        "low_ticket_counter": true,
        "manouvering": true,
        "parking": true,
        "raised_platform": true,
        "raised_platform_shelther": true,
        "ramp": true,
        "secondary_path": true,
        "steep_ramp": true,
        "telephone": true,
        "toilet": true
      }
    },
    "stop_amenities": {
      "car_parking": "string",
      "cctv": true,
      "taxi_rank": true,
      "toilet": true
    },
    "stop_id": 0,
    "stop_landmark": "string",
    "stop_location": {
      "gps": {
        "latitude": 0,
        "longitude": 0
      }
    },
    "stop_name": "string",
    "stop_staffing": {
      "fri_am_from": "string",
      "fri_am_to": "string",
      "fri_pm_from": "string",
      "fri_pm_to": "string",
      "mon_am_from": "string",
      "mon_am_to": "string",
      "mon_pm_from": "string",
      "mon_pm_to": "string",
      "ph_additional_text": "string",
      "ph_from": "string",
      "ph_to": "string",
      "sat_am_from": "string",
      "sat_am_to": "string",
      "sat_pm_from": "string",
      "sat_pm_to": "string",
      "sun_am_from": "string",
      "sun_am_to": "string",
      "sun_pm_from": "string",
      "sun_pm_to": "string",
      "thu_am_from": "string",
      "thu_am_to": "string",
      "thu_pm_from": "string",
      "thu_pm_to": "string",
      "tue_am_from": "string",
      "tue_am_to": "string",
      "tue_pm_from": "string",
      "tue_pm_to": "string",
      "wed_am_from": "string",
      "wed_am_to": "string",
      "wed_pm_To": "string",
      "wed_pm_from": "string"
    }
  }
}
```

> 400 Response

```json
{
  "message": "string",
  "status": {
    "health": 0,
    "version": "string"
  }
}
```

> 403 Response

```json
{
  "message": "string",
  "status": {
    "health": 0,
    "version": "string"
  }
}
```

<h3 id="view-facilities-at-a-specific-stop-metro-and-vline-stations-only-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Stop location, amenity and accessibility facility information for the specified stop (metropolitan and V/Line stations only).|[V3.StopResponse](#schemav3.stopresponse)|
|400|Bad Request|Invalid Request|[V3.ErrorResponse](#schemav3.errorresponse)|
|403|Forbidden|Access Denied|[V3.ErrorResponse](#schemav3.errorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_V2.Object">V2.Object</h2>
<!-- backwards compatibility -->
<a id="schemav2.object"></a>
<a id="schema_V2.Object"></a>
<a id="tocSv2.object"></a>
<a id="tocsv2.object"></a>

```json
{}
```

<h2 id="tocS_V2.Void">V2.Void</h2>
<!-- backwards compatibility -->
<a id="schemav2.void"></a>
<a id="schema_V2.Void"></a>
<a id="tocSv2.void"></a>
<a id="tocsv2.void"></a>

```json
{}
```

<h2 id="tocS_V3.BulkDeparturesRequest">V3.BulkDeparturesRequest</h2>
<!-- backwards compatibility -->
<a id="schemav3.bulkdeparturesrequest"></a>
<a id="schema_V3.BulkDeparturesRequest"></a>
<a id="tocSv3.bulkdeparturesrequest"></a>
<a id="tocsv3.bulkdeparturesrequest"></a>

```json
{
  "date_utc": "1970-01-01T00:00:00Z",
  "expand": [
    "All"
  ],
  "include_cancelled": true,
  "include_geopath": true,
  "look_backwards": true,
  "requests": [
    {
      "gtfs": true,
      "max_results": 0,
      "route_directions": [
        {
          "direction_id": 0,
          "direction_name": "string",
          "route_id": "string"
        }
      ],
      "route_type": 0,
      "stop_id": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|date_utc|string(date-time)|false|none|Filter by the date and time of the request (ISO 8601 UTC format) (default = current date and time)|
|expand|[string]|false|none|List objects to be returned in full (i.e. expanded) - options include: all, stop, route, run, direction, disruption, none|
|include_cancelled|boolean|false|none|Indicates if cancelled services (if they exist) are returned (default = false) - metropolitan train only|
|include_geopath|boolean|false|none|Indicates if the route geopath should be returned|
|look_backwards|boolean|false|none|Indicates if filtering runs (and their departures) to those that arrive at destination before date_utc (default = false). Requires max_results &gt; 0.|
|requests|[[V3.StopDepartureRequest](#schemav3.stopdeparturerequest)]|true|none|Collection of departure requests|

#### Enumerated Values

|Property|Value|
|---|---|
|expand|All|
|expand|Stop|
|expand|Route|
|expand|Run|
|expand|Direction|
|expand|Disruption|
|expand|VehicleDescriptor|
|expand|VehiclePosition|
|expand|None|

<h2 id="tocS_V3.BulkDeparturesResponse">V3.BulkDeparturesResponse</h2>
<!-- backwards compatibility -->
<a id="schemav3.bulkdeparturesresponse"></a>
<a id="schema_V3.BulkDeparturesResponse"></a>
<a id="tocSv3.bulkdeparturesresponse"></a>
<a id="tocsv3.bulkdeparturesresponse"></a>

```json
{
  "directions": [
    {
      "direction_id": 0,
      "direction_name": "string",
      "route_id": 0,
      "route_type": 0
    }
  ],
  "disruptions": {
    "property1": {
      "colour": "string",
      "description": "string",
      "display_on_board": true,
      "display_status": true,
      "disruption_id": 0,
      "disruption_status": "string",
      "disruption_type": "string",
      "from_date": "1970-01-01T00:00:00Z",
      "last_updated": "1970-01-01T00:00:00Z",
      "published_on": "1970-01-01T00:00:00Z",
      "routes": [
        {
          "direction": {
            "direction_id": 0,
            "direction_name": "string",
            "route_direction_id": 0,
            "service_time": "string"
          },
          "route_gtfs_id": "string",
          "route_id": 0,
          "route_name": "string",
          "route_number": "string",
          "route_type": 0
        }
      ],
      "stops": [
        {
          "stop_id": 0,
          "stop_name": "string"
        }
      ],
      "title": "string",
      "to_date": "1970-01-01T00:00:00Z",
      "url": "string"
    },
    "property2": {
      "colour": "string",
      "description": "string",
      "display_on_board": true,
      "display_status": true,
      "disruption_id": 0,
      "disruption_status": "string",
      "disruption_type": "string",
      "from_date": "1970-01-01T00:00:00Z",
      "last_updated": "1970-01-01T00:00:00Z",
      "published_on": "1970-01-01T00:00:00Z",
      "routes": [
        {
          "direction": {
            "direction_id": 0,
            "direction_name": "string",
            "route_direction_id": 0,
            "service_time": "string"
          },
          "route_gtfs_id": "string",
          "route_id": 0,
          "route_name": "string",
          "route_number": "string",
          "route_type": 0
        }
      ],
      "stops": [
        {
          "stop_id": 0,
          "stop_name": "string"
        }
      ],
      "title": "string",
      "to_date": "1970-01-01T00:00:00Z",
      "url": "string"
    }
  },
  "responses": [
    {
      "departures": [
        {
          "at_platform": true,
          "departure_sequence": 0,
          "direction_id": 0,
          "disruption_ids": [
            0
          ],
          "estimated_departure_utc": "1970-01-01T00:00:00Z",
          "flags": "string",
          "platform_number": "string",
          "route_id": 0,
          "run_id": 0,
          "run_ref": "string",
          "scheduled_departure_utc": "1970-01-01T00:00:00Z",
          "stop_id": 0
        }
      ],
      "requested_route_direction": {
        "direction_id": 0,
        "direction_name": "string",
        "route_id": "string"
      },
      "route_direction": {
        "direction_id": 0,
        "direction_name": "string",
        "route_id": "string"
      },
      "route_direction_status": 0,
      "route_type": 0,
      "stop_id": 0
    }
  ],
  "routes": [
    {}
  ],
  "runs": [
    {
      "destination_name": "string",
      "direction_id": 0,
      "express_stop_count": 0,
      "final_stop_id": 0,
      "geopath": [
        {}
      ],
      "route_id": 0,
      "route_type": 0,
      "run_id": 0,
      "run_ref": "string",
      "run_sequence": 0,
      "status": "string",
      "vehicle_descriptor": {
        "air_conditioned": true,
        "description": "string",
        "id": "string",
        "length": "string",
        "low_floor": true,
        "operator": "string",
        "supplier": "string"
      },
      "vehicle_position": {
        "bearing": 0,
        "datetime_utc": "1970-01-01T00:00:00Z",
        "direction": "string",
        "easting": 0,
        "expiry_time": "1970-01-01T00:00:00Z",
        "latitude": 0,
        "longitude": 0,
        "northing": 0,
        "supplier": "string"
      }
    }
  ],
  "status": {
    "health": 0,
    "version": "string"
  },
  "stops": {
    "property1": {
      "stop_id": 0,
      "stop_landmark": "string",
      "stop_latitude": 0,
      "stop_longitude": 0,
      "stop_name": "string",
      "stop_suburb": "string"
    },
    "property2": {
      "stop_id": 0,
      "stop_landmark": "string",
      "stop_latitude": 0,
      "stop_longitude": 0,
      "stop_name": "string",
      "stop_suburb": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|directions|[[V3.Direction](#schemav3.direction)]|false|none|Directions of travel of route|
|disruptions|object|false|none|Disruption information applicable to relevant routes or stops|
|responses|[[V3.BulkDeparturesUpdateResponse](#schemav3.bulkdeparturesupdateresponse)]|false|none|Contains departures for the requested stop and route(s). It includes details as to the route_direction and whether it is still valid.|
|routes|[[V2.Object](#schemav2.object)]|false|none|Train lines, tram routes, bus routes, regional coach routes, Night Bus routes|
|runs|[[V3.Run](#schemav3.run)]|false|none|Individual trips/services of a route|
|status|[V3.Status](#schemav3.status)|false|none|none|
|stops|object|false|none|A train station, tram stop, bus stop, regional coach stop or Night Bus stop|

<h2 id="tocS_V3.BulkDeparturesRouteDirectionResponse">V3.BulkDeparturesRouteDirectionResponse</h2>
<!-- backwards compatibility -->
<a id="schemav3.bulkdeparturesroutedirectionresponse"></a>
<a id="schema_V3.BulkDeparturesRouteDirectionResponse"></a>
<a id="tocSv3.bulkdeparturesroutedirectionresponse"></a>
<a id="tocsv3.bulkdeparturesroutedirectionresponse"></a>

```json
{
  "direction_id": 0,
  "direction_name": "string",
  "route_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|direction_id|integer(int32)|false|none|Direction of travel identifier|
|direction_name|string|false|none|Name of direction of travel|
|route_id|string|false|none|Route identifier|

<h2 id="tocS_V3.BulkDeparturesStopResponse">V3.BulkDeparturesStopResponse</h2>
<!-- backwards compatibility -->
<a id="schemav3.bulkdeparturesstopresponse"></a>
<a id="schema_V3.BulkDeparturesStopResponse"></a>
<a id="tocSv3.bulkdeparturesstopresponse"></a>
<a id="tocsv3.bulkdeparturesstopresponse"></a>

```json
{
  "stop_id": 0,
  "stop_landmark": "string",
  "stop_latitude": 0,
  "stop_longitude": 0,
  "stop_name": "string",
  "stop_suburb": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|stop_id|integer(int32)|false|none|Stop identifier|
|stop_landmark|string|false|none|Landmark in proximity of stop|
|stop_latitude|number(float)|false|none|Geographic coordinate of latitude at stop|
|stop_longitude|number(float)|false|none|Geographic coordinate of longitude at stop|
|stop_name|string|false|none|Name of stop|
|stop_suburb|string|false|none|suburb of stop|

<h2 id="tocS_V3.BulkDeparturesUpdateResponse">V3.BulkDeparturesUpdateResponse</h2>
<!-- backwards compatibility -->
<a id="schemav3.bulkdeparturesupdateresponse"></a>
<a id="schema_V3.BulkDeparturesUpdateResponse"></a>
<a id="tocSv3.bulkdeparturesupdateresponse"></a>
<a id="tocsv3.bulkdeparturesupdateresponse"></a>

```json
{
  "departures": [
    {
      "at_platform": true,
      "departure_sequence": 0,
      "direction_id": 0,
      "disruption_ids": [
        0
      ],
      "estimated_departure_utc": "1970-01-01T00:00:00Z",
      "flags": "string",
      "platform_number": "string",
      "route_id": 0,
      "run_id": 0,
      "run_ref": "string",
      "scheduled_departure_utc": "1970-01-01T00:00:00Z",
      "stop_id": 0
    }
  ],
  "requested_route_direction": {
    "direction_id": 0,
    "direction_name": "string",
    "route_id": "string"
  },
  "route_direction": {
    "direction_id": 0,
    "direction_name": "string",
    "route_id": "string"
  },
  "route_direction_status": 0,
  "route_type": 0,
  "stop_id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|departures|[[V3.Departure](#schemav3.departure)]|false|none|Timetabled and real-time service departures|
|requested_route_direction|[V3.BulkDeparturesRouteDirectionResponse](#schemav3.bulkdeparturesroutedirectionresponse)|false|none|none|
|route_direction|[V3.BulkDeparturesRouteDirectionResponse](#schemav3.bulkdeparturesroutedirectionresponse)|false|none|none|
|route_direction_status|integer(int32)|false|none|The status of the route direction (changed \| unchanged).<br>            If changed, requests should change the requested_route_direction for the route_direction supplied.|
|route_type|integer(int32)|false|none|Transport mode identifier|
|stop_id|integer(int32)|false|none|Stop identifier|

#### Enumerated Values

|Property|Value|
|---|---|
|route_direction_status|0|
|route_direction_status|1|

<h2 id="tocS_V3.Departure">V3.Departure</h2>
<!-- backwards compatibility -->
<a id="schemav3.departure"></a>
<a id="schema_V3.Departure"></a>
<a id="tocSv3.departure"></a>
<a id="tocsv3.departure"></a>

```json
{
  "at_platform": true,
  "departure_sequence": 0,
  "direction_id": 0,
  "disruption_ids": [
    0
  ],
  "estimated_departure_utc": "1970-01-01T00:00:00Z",
  "flags": "string",
  "platform_number": "string",
  "route_id": 0,
  "run_id": 0,
  "run_ref": "string",
  "scheduled_departure_utc": "1970-01-01T00:00:00Z",
  "stop_id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|at_platform|boolean|false|none|Indicates if the metropolitan train service is at the platform at the time of query; returns false for other modes|
|departure_sequence|integer(int32)|false|none|Chronological sequence for the departures in a run. Order ascendingly by this field to get chronological order (earliest first) of departures with the same run_ref. NOTE, this field is not always N+1 or N-1 of the previous or following departure. e.g 100, 200, 250, 300 instead of 1, 2, 3, 4|
|direction_id|integer(int32)|false|none|Direction of travel identifier|
|disruption_ids|[integer(int64)]|false|none|Disruption information identifier(s)|
|estimated_departure_utc|string(date-time)|false|none|Real-time estimate of departure time and date in ISO 8601 UTC format|
|flags|string|false|none|Flag indicating special condition for run (e.g. RR Reservations Required, GC Guaranteed Connection, DOO Drop Off Only, PUO Pick Up Only, MO Mondays only, TU Tuesdays only, WE Wednesdays only, TH Thursdays only, FR Fridays only, SS School days only; ignore E flag)|
|platform_number|string|false|none|Platform number at stop (metropolitan train only; returns null for other modes)|
|route_id|integer(int32)|false|none|Route identifier|
|run_id|integer(int32)|false|read-only|Numeric trip/service run identifier. Defaults to -1 when run identifier is Alphanumeric|
|run_ref|string|false|none|Alphanumeric trip/service run identifier|
|scheduled_departure_utc|string(date-time)|false|none|Scheduled (i.e. timetabled) departure time and date in ISO 8601 UTC format|
|stop_id|integer(int32)|false|none|Stop identifier|

<h2 id="tocS_V3.DeparturesBroadParameters">V3.DeparturesBroadParameters</h2>
<!-- backwards compatibility -->
<a id="schemav3.departuresbroadparameters"></a>
<a id="schema_V3.DeparturesBroadParameters"></a>
<a id="tocSv3.departuresbroadparameters"></a>
<a id="tocsv3.departuresbroadparameters"></a>

```json
{
  "date_utc": "1970-01-01T00:00:00Z",
  "direction_id": 0,
  "expand": [
    "All"
  ],
  "gtfs": true,
  "include_cancelled": true,
  "include_geopath": true,
  "look_backwards": true,
  "max_results": 0,
  "platform_numbers": [
    0
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|date_utc|string(date-time)|false|none|Filter by the date and time of the request (ISO 8601 UTC format) (default = current date and time)|
|direction_id|integer(int32)|false|none|Filter by identifier of direction of travel; values returned by Directions API - /v3/directions/route/{route_id}|
|expand|[string]|false|none|List of objects to be returned in full (i.e. expanded) - options include: All, Stop, Route, Run, Direction, Disruption, VehiclePosition, VehicleDescriptor or None.<br>            Run must be expanded to receive VehiclePosition and VehicleDescriptor information.|
|gtfs|boolean|false|none|Indicates that stop_id parameter will accept "GTFS stop_id" data|
|include_cancelled|boolean|false|none|Indicates if cancelled services (if they exist) are returned (default = false) - metropolitan train only|
|include_geopath|boolean|false|none|Indicates if the route geopath should be returned|
|look_backwards|boolean|false|none|Indicates if filtering runs (and their departures) to those that arrive at destination before date_utc (default = false). Requires max_results &gt; 0.|
|max_results|integer(int32)|false|none|Maximum number of results returned|
|platform_numbers|[integer(int32)]|false|none|Filter by platform number at stop|

#### Enumerated Values

|Property|Value|
|---|---|
|expand|All|
|expand|Stop|
|expand|Route|
|expand|Run|
|expand|Direction|
|expand|Disruption|
|expand|VehicleDescriptor|
|expand|VehiclePosition|
|expand|None|

<h2 id="tocS_V3.DeparturesResponse">V3.DeparturesResponse</h2>
<!-- backwards compatibility -->
<a id="schemav3.departuresresponse"></a>
<a id="schema_V3.DeparturesResponse"></a>
<a id="tocSv3.departuresresponse"></a>
<a id="tocsv3.departuresresponse"></a>

```json
{
  "departures": [
    {
      "at_platform": true,
      "departure_sequence": 0,
      "direction_id": 0,
      "disruption_ids": [
        0
      ],
      "estimated_departure_utc": "1970-01-01T00:00:00Z",
      "flags": "string",
      "platform_number": "string",
      "route_id": 0,
      "run_id": 0,
      "run_ref": "string",
      "scheduled_departure_utc": "1970-01-01T00:00:00Z",
      "stop_id": 0
    }
  ],
  "directions": {
    "property1": {
      "direction_id": 0,
      "direction_name": "string",
      "route_id": 0,
      "route_type": 0
    },
    "property2": {
      "direction_id": 0,
      "direction_name": "string",
      "route_id": 0,
      "route_type": 0
    }
  },
  "disruptions": {
    "property1": {
      "colour": "string",
      "description": "string",
      "display_on_board": true,
      "display_status": true,
      "disruption_id": 0,
      "disruption_status": "string",
      "disruption_type": "string",
      "from_date": "1970-01-01T00:00:00Z",
      "last_updated": "1970-01-01T00:00:00Z",
      "published_on": "1970-01-01T00:00:00Z",
      "routes": [
        {
          "direction": {
            "direction_id": 0,
            "direction_name": "string",
            "route_direction_id": 0,
            "service_time": "string"
          },
          "route_gtfs_id": "string",
          "route_id": 0,
          "route_name": "string",
          "route_number": "string",
          "route_type": 0
        }
      ],
      "stops": [
        {
          "stop_id": 0,
          "stop_name": "string"
        }
      ],
      "title": "string",
      "to_date": "1970-01-01T00:00:00Z",
      "url": "string"
    },
    "property2": {
      "colour": "string",
      "description": "string",
      "display_on_board": true,
      "display_status": true,
      "disruption_id": 0,
      "disruption_status": "string",
      "disruption_type": "string",
      "from_date": "1970-01-01T00:00:00Z",
      "last_updated": "1970-01-01T00:00:00Z",
      "published_on": "1970-01-01T00:00:00Z",
      "routes": [
        {
          "direction": {
            "direction_id": 0,
            "direction_name": "string",
            "route_direction_id": 0,
            "service_time": "string"
          },
          "route_gtfs_id": "string",
          "route_id": 0,
          "route_name": "string",
          "route_number": "string",
          "route_type": 0
        }
      ],
      "stops": [
        {
          "stop_id": 0,
          "stop_name": "string"
        }
      ],
      "title": "string",
      "to_date": "1970-01-01T00:00:00Z",
      "url": "string"
    }
  },
  "routes": {
    "property1": {},
    "property2": {}
  },
  "runs": {
    "property1": {
      "destination_name": "string",
      "direction_id": 0,
      "express_stop_count": 0,
      "final_stop_id": 0,
      "geopath": [
        {}
      ],
      "route_id": 0,
      "route_type": 0,
      "run_id": 0,
      "run_ref": "string",
      "run_sequence": 0,
      "status": "string",
      "vehicle_descriptor": {
        "air_conditioned": true,
        "description": "string",
        "id": "string",
        "length": "string",
        "low_floor": true,
        "operator": "string",
        "supplier": "string"
      },
      "vehicle_position": {
        "bearing": 0,
        "datetime_utc": "1970-01-01T00:00:00Z",
        "direction": "string",
        "easting": 0,
        "expiry_time": "1970-01-01T00:00:00Z",
        "latitude": 0,
        "longitude": 0,
        "northing": 0,
        "supplier": "string"
      }
    },
    "property2": {
      "destination_name": "string",
      "direction_id": 0,
      "express_stop_count": 0,
      "final_stop_id": 0,
      "geopath": [
        {}
      ],
      "route_id": 0,
      "route_type": 0,
      "run_id": 0,
      "run_ref": "string",
      "run_sequence": 0,
      "status": "string",
      "vehicle_descriptor": {
        "air_conditioned": true,
        "description": "string",
        "id": "string",
        "length": "string",
        "low_floor": true,
        "operator": "string",
        "supplier": "string"
      },
      "vehicle_position": {
        "bearing": 0,
        "datetime_utc": "1970-01-01T00:00:00Z",
        "direction": "string",
        "easting": 0,
        "expiry_time": "1970-01-01T00:00:00Z",
        "latitude": 0,
        "longitude": 0,
        "northing": 0,
        "supplier": "string"
      }
    }
  },
  "status": {
    "health": 0,
    "version": "string"
  },
  "stops": {
    "property1": {
      "route_type": 0,
      "stop_distance": 0,
      "stop_id": 0,
      "stop_landmark": "string",
      "stop_latitude": 0,
      "stop_longitude": 0,
      "stop_name": "string",
      "stop_sequence": 0,
      "stop_suburb": "string"
    },
    "property2": {
      "route_type": 0,
      "stop_distance": 0,
      "stop_id": 0,
      "stop_landmark": "string",
      "stop_latitude": 0,
      "stop_longitude": 0,
      "stop_name": "string",
      "stop_sequence": 0,
      "stop_suburb": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|departures|[[V3.Departure](#schemav3.departure)]|false|none|Timetabled and real-time service departures|
|directions|object|false|none|Directions of travel of route|
|disruptions|object|false|none|Disruption information applicable to relevant routes or stops|
|routes|object|false|none|Train lines, tram routes, bus routes, regional coach routes, Night Bus routes|
|runs|object|false|none|Individual trips/services of a route|
|status|[V3.Status](#schemav3.status)|false|none|none|
|stops|object|false|none|A train station, tram stop, bus stop, regional coach stop or Night Bus stop|

<h2 id="tocS_V3.DeparturesSpecificParameters">V3.DeparturesSpecificParameters</h2>
<!-- backwards compatibility -->
<a id="schemav3.departuresspecificparameters"></a>
<a id="schema_V3.DeparturesSpecificParameters"></a>
<a id="tocSv3.departuresspecificparameters"></a>
<a id="tocsv3.departuresspecificparameters"></a>

```json
{
  "date_utc": "1970-01-01T00:00:00Z",
  "direction_id": 0,
  "expand": [
    "All"
  ],
  "gtfs": true,
  "include_cancelled": true,
  "include_geopath": true,
  "look_backwards": true,
  "max_results": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|date_utc|string(date-time)|false|none|Filter by the date and time of the request (ISO 8601 UTC format) (default = current date and time)|
|direction_id|integer(int32)|false|none|Filter by identifier of direction of travel; values returned by Directions API - /v3/directions/route/{route_id}|
|expand|[string]|false|none|List of objects to be returned in full (i.e. expanded) - options include: All, Stop, Route, Run, Direction, Disruption, VehiclePosition, VehicleDescriptor or None.<br>            Run must be expanded to receive VehiclePosition and VehicleDescriptor information.|
|gtfs|boolean|false|none|Indicates that stop_id parameter will accept "GTFS stop_id" data|
|include_cancelled|boolean|false|none|Indicates if cancelled services (if they exist) are returned (default = false) - metropolitan train only|
|include_geopath|boolean|false|none|Indicates if the route geopath should be returned|
|look_backwards|boolean|false|none|Indicates if filtering runs (and their departures) to those that arrive at destination before date_utc (default = false). Requires max_results &gt; 0.|
|max_results|integer(int32)|false|none|Maximum number of results returned|

#### Enumerated Values

|Property|Value|
|---|---|
|expand|All|
|expand|Stop|
|expand|Route|
|expand|Run|
|expand|Direction|
|expand|Disruption|
|expand|VehicleDescriptor|
|expand|VehiclePosition|
|expand|None|

<h2 id="tocS_V3.Direction">V3.Direction</h2>
<!-- backwards compatibility -->
<a id="schemav3.direction"></a>
<a id="schema_V3.Direction"></a>
<a id="tocSv3.direction"></a>
<a id="tocsv3.direction"></a>

```json
{
  "direction_id": 0,
  "direction_name": "string",
  "route_id": 0,
  "route_type": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|direction_id|integer(int32)|false|none|Direction of travel identifier|
|direction_name|string|false|none|Name of direction of travel|
|route_id|integer(int32)|false|none|Route identifier|
|route_type|integer(int32)|false|none|Transport mode identifier|

<h2 id="tocS_V3.DirectionWithDescription">V3.DirectionWithDescription</h2>
<!-- backwards compatibility -->
<a id="schemav3.directionwithdescription"></a>
<a id="schema_V3.DirectionWithDescription"></a>
<a id="tocSv3.directionwithdescription"></a>
<a id="tocsv3.directionwithdescription"></a>

```json
{
  "direction_id": 0,
  "direction_name": "string",
  "route_direction_description": "string",
  "route_id": 0,
  "route_type": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|direction_id|integer(int32)|false|none|Direction of travel identifier|
|direction_name|string|false|none|Name of direction of travel|
|route_direction_description|string|false|none|none|
|route_id|integer(int32)|false|none|Route identifier|
|route_type|integer(int32)|false|none|Transport mode identifier|

<h2 id="tocS_V3.DirectionsResponse">V3.DirectionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemav3.directionsresponse"></a>
<a id="schema_V3.DirectionsResponse"></a>
<a id="tocSv3.directionsresponse"></a>
<a id="tocsv3.directionsresponse"></a>

```json
{
  "directions": [
    {
      "direction_id": 0,
      "direction_name": "string",
      "route_direction_description": "string",
      "route_id": 0,
      "route_type": 0
    }
  ],
  "status": {
    "health": 0,
    "version": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|directions|[[V3.DirectionWithDescription](#schemav3.directionwithdescription)]|false|none|Directions of travel of route|
|status|[V3.Status](#schemav3.status)|false|none|none|

<h2 id="tocS_V3.Disruption">V3.Disruption</h2>
<!-- backwards compatibility -->
<a id="schemav3.disruption"></a>
<a id="schema_V3.Disruption"></a>
<a id="tocSv3.disruption"></a>
<a id="tocsv3.disruption"></a>

```json
{
  "colour": "string",
  "description": "string",
  "display_on_board": true,
  "display_status": true,
  "disruption_id": 0,
  "disruption_status": "string",
  "disruption_type": "string",
  "from_date": "1970-01-01T00:00:00Z",
  "last_updated": "1970-01-01T00:00:00Z",
  "published_on": "1970-01-01T00:00:00Z",
  "routes": [
    {
      "direction": {
        "direction_id": 0,
        "direction_name": "string",
        "route_direction_id": 0,
        "service_time": "string"
      },
      "route_gtfs_id": "string",
      "route_id": 0,
      "route_name": "string",
      "route_number": "string",
      "route_type": 0
    }
  ],
  "stops": [
    {
      "stop_id": 0,
      "stop_name": "string"
    }
  ],
  "title": "string",
  "to_date": "1970-01-01T00:00:00Z",
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|colour|string|false|none|none|
|description|string|false|none|Description of the disruption|
|display_on_board|boolean|false|none|none|
|display_status|boolean|false|none|none|
|disruption_id|integer(int64)|false|none|Disruption information identifier|
|disruption_status|string|false|none|Status of the disruption (e.g. "Planned", "Current")|
|disruption_type|string|false|none|Type of disruption|
|from_date|string(date-time)|false|none|Date and time at which disruption begins, in ISO 8601 UTC format|
|last_updated|string(date-time)|false|none|Date and time disruption information was last updated by PTV, in ISO 8601 UTC format|
|published_on|string(date-time)|false|none|Date and time disruption information is published on PTV website, in ISO 8601 UTC format|
|routes|[[V3.DisruptionRoute](#schemav3.disruptionroute)]|false|none|Route relevant to a disruption (if applicable)|
|stops|[[V3.DisruptionStop](#schemav3.disruptionstop)]|false|none|Stop relevant to a disruption (if applicable)|
|title|string|false|none|Headline title summarising disruption information|
|to_date|string(date-time)|false|none|Date and time at which disruption ends, in ISO 8601 UTC format (returns null if unknown)|
|url|string|false|none|URL of relevant article on PTV website|

<h2 id="tocS_V3.DisruptionDirection">V3.DisruptionDirection</h2>
<!-- backwards compatibility -->
<a id="schemav3.disruptiondirection"></a>
<a id="schema_V3.DisruptionDirection"></a>
<a id="tocSv3.disruptiondirection"></a>
<a id="tocsv3.disruptiondirection"></a>

```json
{
  "direction_id": 0,
  "direction_name": "string",
  "route_direction_id": 0,
  "service_time": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|direction_id|integer(int32)|false|none|Direction of travel identifier|
|direction_name|string|false|none|Name of direction of travel|
|route_direction_id|integer(int32)|false|none|Route and direction of travel combination identifier|
|service_time|string|false|none|Time of service to which disruption applies, in 24 hour clock format (HH:MM:SS) AEDT/AEST; returns null if disruption applies to multiple (or no) services|

<h2 id="tocS_V3.DisruptionMode">V3.DisruptionMode</h2>
<!-- backwards compatibility -->
<a id="schemav3.disruptionmode"></a>
<a id="schema_V3.DisruptionMode"></a>
<a id="tocSv3.disruptionmode"></a>
<a id="tocsv3.disruptionmode"></a>

```json
{
  "disruption_mode": 0,
  "disruption_mode_name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|disruption_mode|integer(int32)|false|none|Disruption mode identifier|
|disruption_mode_name|string|false|none|Name of disruption mode|

<h2 id="tocS_V3.DisruptionModesResponse">V3.DisruptionModesResponse</h2>
<!-- backwards compatibility -->
<a id="schemav3.disruptionmodesresponse"></a>
<a id="schema_V3.DisruptionModesResponse"></a>
<a id="tocSv3.disruptionmodesresponse"></a>
<a id="tocsv3.disruptionmodesresponse"></a>

```json
{
  "disruption_modes": [
    {
      "disruption_mode": 0,
      "disruption_mode_name": "string"
    }
  ],
  "status": {
    "health": 0,
    "version": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|disruption_modes|[[V3.DisruptionMode](#schemav3.disruptionmode)]|false|none|Transport mode identifiers|
|status|[V3.Status](#schemav3.status)|false|none|none|

<h2 id="tocS_V3.DisruptionResponse">V3.DisruptionResponse</h2>
<!-- backwards compatibility -->
<a id="schemav3.disruptionresponse"></a>
<a id="schema_V3.DisruptionResponse"></a>
<a id="tocSv3.disruptionresponse"></a>
<a id="tocsv3.disruptionresponse"></a>

```json
{
  "disruption": {
    "colour": "string",
    "description": "string",
    "display_on_board": true,
    "display_status": true,
    "disruption_id": 0,
    "disruption_status": "string",
    "disruption_type": "string",
    "from_date": "1970-01-01T00:00:00Z",
    "last_updated": "1970-01-01T00:00:00Z",
    "published_on": "1970-01-01T00:00:00Z",
    "routes": [
      {
        "direction": {
          "direction_id": 0,
          "direction_name": "string",
          "route_direction_id": 0,
          "service_time": "string"
        },
        "route_gtfs_id": "string",
        "route_id": 0,
        "route_name": "string",
        "route_number": "string",
        "route_type": 0
      }
    ],
    "stops": [
      {
        "stop_id": 0,
        "stop_name": "string"
      }
    ],
    "title": "string",
    "to_date": "1970-01-01T00:00:00Z",
    "url": "string"
  },
  "status": {
    "health": 0,
    "version": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|disruption|[V3.Disruption](#schemav3.disruption)|false|none|none|
|status|[V3.Status](#schemav3.status)|false|none|none|

<h2 id="tocS_V3.DisruptionRoute">V3.DisruptionRoute</h2>
<!-- backwards compatibility -->
<a id="schemav3.disruptionroute"></a>
<a id="schema_V3.DisruptionRoute"></a>
<a id="tocSv3.disruptionroute"></a>
<a id="tocsv3.disruptionroute"></a>

```json
{
  "direction": {
    "direction_id": 0,
    "direction_name": "string",
    "route_direction_id": 0,
    "service_time": "string"
  },
  "route_gtfs_id": "string",
  "route_id": 0,
  "route_name": "string",
  "route_number": "string",
  "route_type": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|direction|[V3.DisruptionDirection](#schemav3.disruptiondirection)|false|none|none|
|route_gtfs_id|string|false|none|GTFS Identifer of the route|
|route_id|integer(int32)|false|none|Route identifier|
|route_name|string|false|none|Name of route|
|route_number|string|false|none|Route number presented to public (i.e. not route_id)|
|route_type|integer(int32)|false|none|Transport mode identifier|

<h2 id="tocS_V3.DisruptionStop">V3.DisruptionStop</h2>
<!-- backwards compatibility -->
<a id="schemav3.disruptionstop"></a>
<a id="schema_V3.DisruptionStop"></a>
<a id="tocSv3.disruptionstop"></a>
<a id="tocsv3.disruptionstop"></a>

```json
{
  "stop_id": 0,
  "stop_name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|stop_id|integer(int32)|false|none|none|
|stop_name|string|false|none|none|

<h2 id="tocS_V3.Disruptions">V3.Disruptions</h2>
<!-- backwards compatibility -->
<a id="schemav3.disruptions"></a>
<a id="schema_V3.Disruptions"></a>
<a id="tocSv3.disruptions"></a>
<a id="tocsv3.disruptions"></a>

```json
{
  "ferry": [
    {
      "colour": "string",
      "description": "string",
      "display_on_board": true,
      "display_status": true,
      "disruption_id": 0,
      "disruption_status": "string",
      "disruption_type": "string",
      "from_date": "1970-01-01T00:00:00Z",
      "last_updated": "1970-01-01T00:00:00Z",
      "published_on": "1970-01-01T00:00:00Z",
      "routes": [
        {
          "direction": {
            "direction_id": 0,
            "direction_name": "string",
            "route_direction_id": 0,
            "service_time": "string"
          },
          "route_gtfs_id": "string",
          "route_id": 0,
          "route_name": "string",
          "route_number": "string",
          "route_type": 0
        }
      ],
      "stops": [
        {
          "stop_id": 0,
          "stop_name": "string"
        }
      ],
      "title": "string",
      "to_date": "1970-01-01T00:00:00Z",
      "url": "string"
    }
  ],
  "general": [
    {
      "colour": "string",
      "description": "string",
      "display_on_board": true,
      "display_status": true,
      "disruption_id": 0,
      "disruption_status": "string",
      "disruption_type": "string",
      "from_date": "1970-01-01T00:00:00Z",
      "last_updated": "1970-01-01T00:00:00Z",
      "published_on": "1970-01-01T00:00:00Z",
      "routes": [
        {
          "direction": {
            "direction_id": 0,
            "direction_name": "string",
            "route_direction_id": 0,
            "service_time": "string"
          },
          "route_gtfs_id": "string",
          "route_id": 0,
          "route_name": "string",
          "route_number": "string",
          "route_type": 0
        }
      ],
      "stops": [
        {
          "stop_id": 0,
          "stop_name": "string"
        }
      ],
      "title": "string",
      "to_date": "1970-01-01T00:00:00Z",
      "url": "string"
    }
  ],
  "interstate_train": [
    {
      "colour": "string",
      "description": "string",
      "display_on_board": true,
      "display_status": true,
      "disruption_id": 0,
      "disruption_status": "string",
      "disruption_type": "string",
      "from_date": "1970-01-01T00:00:00Z",
      "last_updated": "1970-01-01T00:00:00Z",
      "published_on": "1970-01-01T00:00:00Z",
      "routes": [
        {
          "direction": {
            "direction_id": 0,
            "direction_name": "string",
            "route_direction_id": 0,
            "service_time": "string"
          },
          "route_gtfs_id": "string",
          "route_id": 0,
          "route_name": "string",
          "route_number": "string",
          "route_type": 0
        }
      ],
      "stops": [
        {
          "stop_id": 0,
          "stop_name": "string"
        }
      ],
      "title": "string",
      "to_date": "1970-01-01T00:00:00Z",
      "url": "string"
    }
  ],
  "metro_bus": [
    {
      "colour": "string",
      "description": "string",
      "display_on_board": true,
      "display_status": true,
      "disruption_id": 0,
      "disruption_status": "string",
      "disruption_type": "string",
      "from_date": "1970-01-01T00:00:00Z",
      "last_updated": "1970-01-01T00:00:00Z",
      "published_on": "1970-01-01T00:00:00Z",
      "routes": [
        {
          "direction": {
            "direction_id": 0,
            "direction_name": "string",
            "route_direction_id": 0,
            "service_time": "string"
          },
          "route_gtfs_id": "string",
          "route_id": 0,
          "route_name": "string",
          "route_number": "string",
          "route_type": 0
        }
      ],
      "stops": [
        {
          "stop_id": 0,
          "stop_name": "string"
        }
      ],
      "title": "string",
      "to_date": "1970-01-01T00:00:00Z",
      "url": "string"
    }
  ],
  "metro_train": [
    {
      "colour": "string",
      "description": "string",
      "display_on_board": true,
      "display_status": true,
      "disruption_id": 0,
      "disruption_status": "string",
      "disruption_type": "string",
      "from_date": "1970-01-01T00:00:00Z",
      "last_updated": "1970-01-01T00:00:00Z",
      "published_on": "1970-01-01T00:00:00Z",
      "routes": [
        {
          "direction": {
            "direction_id": 0,
            "direction_name": "string",
            "route_direction_id": 0,
            "service_time": "string"
          },
          "route_gtfs_id": "string",
          "route_id": 0,
          "route_name": "string",
          "route_number": "string",
          "route_type": 0
        }
      ],
      "stops": [
        {
          "stop_id": 0,
          "stop_name": "string"
        }
      ],
      "title": "string",
      "to_date": "1970-01-01T00:00:00Z",
      "url": "string"
    }
  ],
  "metro_tram": [
    {
      "colour": "string",
      "description": "string",
      "display_on_board": true,
      "display_status": true,
      "disruption_id": 0,
      "disruption_status": "string",
      "disruption_type": "string",
      "from_date": "1970-01-01T00:00:00Z",
      "last_updated": "1970-01-01T00:00:00Z",
      "published_on": "1970-01-01T00:00:00Z",
      "routes": [
        {
          "direction": {
            "direction_id": 0,
            "direction_name": "string",
            "route_direction_id": 0,
            "service_time": "string"
          },
          "route_gtfs_id": "string",
          "route_id": 0,
          "route_name": "string",
          "route_number": "string",
          "route_type": 0
        }
      ],
      "stops": [
        {
          "stop_id": 0,
          "stop_name": "string"
        }
      ],
      "title": "string",
      "to_date": "1970-01-01T00:00:00Z",
      "url": "string"
    }
  ],
  "night_bus": [
    {
      "colour": "string",
      "description": "string",
      "display_on_board": true,
      "display_status": true,
      "disruption_id": 0,
      "disruption_status": "string",
      "disruption_type": "string",
      "from_date": "1970-01-01T00:00:00Z",
      "last_updated": "1970-01-01T00:00:00Z",
      "published_on": "1970-01-01T00:00:00Z",
      "routes": [
        {
          "direction": {
            "direction_id": 0,
            "direction_name": "string",
            "route_direction_id": 0,
            "service_time": "string"
          },
          "route_gtfs_id": "string",
          "route_id": 0,
          "route_name": "string",
          "route_number": "string",
          "route_type": 0
        }
      ],
      "stops": [
        {
          "stop_id": 0,
          "stop_name": "string"
        }
      ],
      "title": "string",
      "to_date": "1970-01-01T00:00:00Z",
      "url": "string"
    }
  ],
  "regional_bus": [
    {
      "colour": "string",
      "description": "string",
      "display_on_board": true,
      "display_status": true,
      "disruption_id": 0,
      "disruption_status": "string",
      "disruption_type": "string",
      "from_date": "1970-01-01T00:00:00Z",
      "last_updated": "1970-01-01T00:00:00Z",
      "published_on": "1970-01-01T00:00:00Z",
      "routes": [
        {
          "direction": {
            "direction_id": 0,
            "direction_name": "string",
            "route_direction_id": 0,
            "service_time": "string"
          },
          "route_gtfs_id": "string",
          "route_id": 0,
          "route_name": "string",
          "route_number": "string",
          "route_type": 0
        }
      ],
      "stops": [
        {
          "stop_id": 0,
          "stop_name": "string"
        }
      ],
      "title": "string",
      "to_date": "1970-01-01T00:00:00Z",
      "url": "string"
    }
  ],
  "regional_coach": [
    {
      "colour": "string",
      "description": "string",
      "display_on_board": true,
      "display_status": true,
      "disruption_id": 0,
      "disruption_status": "string",
      "disruption_type": "string",
      "from_date": "1970-01-01T00:00:00Z",
      "last_updated": "1970-01-01T00:00:00Z",
      "published_on": "1970-01-01T00:00:00Z",
      "routes": [
        {
          "direction": {
            "direction_id": 0,
            "direction_name": "string",
            "route_direction_id": 0,
            "service_time": "string"
          },
          "route_gtfs_id": "string",
          "route_id": 0,
          "route_name": "string",
          "route_number": "string",
          "route_type": 0
        }
      ],
      "stops": [
        {
          "stop_id": 0,
          "stop_name": "string"
        }
      ],
      "title": "string",
      "to_date": "1970-01-01T00:00:00Z",
      "url": "string"
    }
  ],
  "regional_train": [
    {
      "colour": "string",
      "description": "string",
      "display_on_board": true,
      "display_status": true,
      "disruption_id": 0,
      "disruption_status": "string",
      "disruption_type": "string",
      "from_date": "1970-01-01T00:00:00Z",
      "last_updated": "1970-01-01T00:00:00Z",
      "published_on": "1970-01-01T00:00:00Z",
      "routes": [
        {
          "direction": {
            "direction_id": 0,
            "direction_name": "string",
            "route_direction_id": 0,
            "service_time": "string"
          },
          "route_gtfs_id": "string",
          "route_id": 0,
          "route_name": "string",
          "route_number": "string",
          "route_type": 0
        }
      ],
      "stops": [
        {
          "stop_id": 0,
          "stop_name": "string"
        }
      ],
      "title": "string",
      "to_date": "1970-01-01T00:00:00Z",
      "url": "string"
    }
  ],
  "school_bus": [
    {
      "colour": "string",
      "description": "string",
      "display_on_board": true,
      "display_status": true,
      "disruption_id": 0,
      "disruption_status": "string",
      "disruption_type": "string",
      "from_date": "1970-01-01T00:00:00Z",
      "last_updated": "1970-01-01T00:00:00Z",
      "published_on": "1970-01-01T00:00:00Z",
      "routes": [
        {
          "direction": {
            "direction_id": 0,
            "direction_name": "string",
            "route_direction_id": 0,
            "service_time": "string"
          },
          "route_gtfs_id": "string",
          "route_id": 0,
          "route_name": "string",
          "route_number": "string",
          "route_type": 0
        }
      ],
      "stops": [
        {
          "stop_id": 0,
          "stop_name": "string"
        }
      ],
      "title": "string",
      "to_date": "1970-01-01T00:00:00Z",
      "url": "string"
    }
  ],
  "skybus": [
    {
      "colour": "string",
      "description": "string",
      "display_on_board": true,
      "display_status": true,
      "disruption_id": 0,
      "disruption_status": "string",
      "disruption_type": "string",
      "from_date": "1970-01-01T00:00:00Z",
      "last_updated": "1970-01-01T00:00:00Z",
      "published_on": "1970-01-01T00:00:00Z",
      "routes": [
        {
          "direction": {
            "direction_id": 0,
            "direction_name": "string",
            "route_direction_id": 0,
            "service_time": "string"
          },
          "route_gtfs_id": "string",
          "route_id": 0,
          "route_name": "string",
          "route_number": "string",
          "route_type": 0
        }
      ],
      "stops": [
        {
          "stop_id": 0,
          "stop_name": "string"
        }
      ],
      "title": "string",
      "to_date": "1970-01-01T00:00:00Z",
      "url": "string"
    }
  ],
  "taxi": [
    {
      "colour": "string",
      "description": "string",
      "display_on_board": true,
      "display_status": true,
      "disruption_id": 0,
      "disruption_status": "string",
      "disruption_type": "string",
      "from_date": "1970-01-01T00:00:00Z",
      "last_updated": "1970-01-01T00:00:00Z",
      "published_on": "1970-01-01T00:00:00Z",
      "routes": [
        {
          "direction": {
            "direction_id": 0,
            "direction_name": "string",
            "route_direction_id": 0,
            "service_time": "string"
          },
          "route_gtfs_id": "string",
          "route_id": 0,
          "route_name": "string",
          "route_number": "string",
          "route_type": 0
        }
      ],
      "stops": [
        {
          "stop_id": 0,
          "stop_name": "string"
        }
      ],
      "title": "string",
      "to_date": "1970-01-01T00:00:00Z",
      "url": "string"
    }
  ],
  "telebus": [
    {
      "colour": "string",
      "description": "string",
      "display_on_board": true,
      "display_status": true,
      "disruption_id": 0,
      "disruption_status": "string",
      "disruption_type": "string",
      "from_date": "1970-01-01T00:00:00Z",
      "last_updated": "1970-01-01T00:00:00Z",
      "published_on": "1970-01-01T00:00:00Z",
      "routes": [
        {
          "direction": {
            "direction_id": 0,
            "direction_name": "string",
            "route_direction_id": 0,
            "service_time": "string"
          },
          "route_gtfs_id": "string",
          "route_id": 0,
          "route_name": "string",
          "route_number": "string",
          "route_type": 0
        }
      ],
      "stops": [
        {
          "stop_id": 0,
          "stop_name": "string"
        }
      ],
      "title": "string",
      "to_date": "1970-01-01T00:00:00Z",
      "url": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ferry|[[V3.Disruption](#schemav3.disruption)]|false|none|Subset of disruption information applicable to ferry|
|general|[[V3.Disruption](#schemav3.disruption)]|false|none|Subset of disruption information applicable to multiple route_types|
|interstate_train|[[V3.Disruption](#schemav3.disruption)]|false|none|Subset of disruption information applicable to interstate train|
|metro_bus|[[V3.Disruption](#schemav3.disruption)]|false|none|Subset of disruption information applicable to metropolitan bus|
|metro_train|[[V3.Disruption](#schemav3.disruption)]|false|none|Subset of disruption information applicable to metropolitan train|
|metro_tram|[[V3.Disruption](#schemav3.disruption)]|false|none|Subset of disruption information applicable to metropolitan tram|
|night_bus|[[V3.Disruption](#schemav3.disruption)]|false|none|Subset of disruption information applicable to night bus|
|regional_bus|[[V3.Disruption](#schemav3.disruption)]|false|none|Subset of disruption information applicable to regional bus|
|regional_coach|[[V3.Disruption](#schemav3.disruption)]|false|none|Subset of disruption information applicable to V/Line coach|
|regional_train|[[V3.Disruption](#schemav3.disruption)]|false|none|Subset of disruption information applicable to V/Line train|
|school_bus|[[V3.Disruption](#schemav3.disruption)]|false|none|Subset of disruption information applicable to school bus|
|skybus|[[V3.Disruption](#schemav3.disruption)]|false|none|Subset of disruption information applicable to skybus|
|taxi|[[V3.Disruption](#schemav3.disruption)]|false|none|Subset of disruption information applicable to taxi|
|telebus|[[V3.Disruption](#schemav3.disruption)]|false|none|Subset of disruption information applicable to telebus services|

<h2 id="tocS_V3.DisruptionsResponse">V3.DisruptionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemav3.disruptionsresponse"></a>
<a id="schema_V3.DisruptionsResponse"></a>
<a id="tocSv3.disruptionsresponse"></a>
<a id="tocsv3.disruptionsresponse"></a>

```json
{
  "disruptions": {
    "ferry": [
      {
        "colour": "string",
        "description": "string",
        "display_on_board": true,
        "display_status": true,
        "disruption_id": 0,
        "disruption_status": "string",
        "disruption_type": "string",
        "from_date": "1970-01-01T00:00:00Z",
        "last_updated": "1970-01-01T00:00:00Z",
        "published_on": "1970-01-01T00:00:00Z",
        "routes": [
          {
            "direction": {
              "direction_id": 0,
              "direction_name": "string",
              "route_direction_id": 0,
              "service_time": "string"
            },
            "route_gtfs_id": "string",
            "route_id": 0,
            "route_name": "string",
            "route_number": "string",
            "route_type": 0
          }
        ],
        "stops": [
          {
            "stop_id": 0,
            "stop_name": "string"
          }
        ],
        "title": "string",
        "to_date": "1970-01-01T00:00:00Z",
        "url": "string"
      }
    ],
    "general": [
      {
        "colour": "string",
        "description": "string",
        "display_on_board": true,
        "display_status": true,
        "disruption_id": 0,
        "disruption_status": "string",
        "disruption_type": "string",
        "from_date": "1970-01-01T00:00:00Z",
        "last_updated": "1970-01-01T00:00:00Z",
        "published_on": "1970-01-01T00:00:00Z",
        "routes": [
          {
            "direction": {
              "direction_id": 0,
              "direction_name": "string",
              "route_direction_id": 0,
              "service_time": "string"
            },
            "route_gtfs_id": "string",
            "route_id": 0,
            "route_name": "string",
            "route_number": "string",
            "route_type": 0
          }
        ],
        "stops": [
          {
            "stop_id": 0,
            "stop_name": "string"
          }
        ],
        "title": "string",
        "to_date": "1970-01-01T00:00:00Z",
        "url": "string"
      }
    ],
    "interstate_train": [
      {
        "colour": "string",
        "description": "string",
        "display_on_board": true,
        "display_status": true,
        "disruption_id": 0,
        "disruption_status": "string",
        "disruption_type": "string",
        "from_date": "1970-01-01T00:00:00Z",
        "last_updated": "1970-01-01T00:00:00Z",
        "published_on": "1970-01-01T00:00:00Z",
        "routes": [
          {
            "direction": {
              "direction_id": 0,
              "direction_name": "string",
              "route_direction_id": 0,
              "service_time": "string"
            },
            "route_gtfs_id": "string",
            "route_id": 0,
            "route_name": "string",
            "route_number": "string",
            "route_type": 0
          }
        ],
        "stops": [
          {
            "stop_id": 0,
            "stop_name": "string"
          }
        ],
        "title": "string",
        "to_date": "1970-01-01T00:00:00Z",
        "url": "string"
      }
    ],
    "metro_bus": [
      {
        "colour": "string",
        "description": "string",
        "display_on_board": true,
        "display_status": true,
        "disruption_id": 0,
        "disruption_status": "string",
        "disruption_type": "string",
        "from_date": "1970-01-01T00:00:00Z",
        "last_updated": "1970-01-01T00:00:00Z",
        "published_on": "1970-01-01T00:00:00Z",
        "routes": [
          {
            "direction": {
              "direction_id": 0,
              "direction_name": "string",
              "route_direction_id": 0,
              "service_time": "string"
            },
            "route_gtfs_id": "string",
            "route_id": 0,
            "route_name": "string",
            "route_number": "string",
            "route_type": 0
          }
        ],
        "stops": [
          {
            "stop_id": 0,
            "stop_name": "string"
          }
        ],
        "title": "string",
        "to_date": "1970-01-01T00:00:00Z",
        "url": "string"
      }
    ],
    "metro_train": [
      {
        "colour": "string",
        "description": "string",
        "display_on_board": true,
        "display_status": true,
        "disruption_id": 0,
        "disruption_status": "string",
        "disruption_type": "string",
        "from_date": "1970-01-01T00:00:00Z",
        "last_updated": "1970-01-01T00:00:00Z",
        "published_on": "1970-01-01T00:00:00Z",
        "routes": [
          {
            "direction": {
              "direction_id": 0,
              "direction_name": "string",
              "route_direction_id": 0,
              "service_time": "string"
            },
            "route_gtfs_id": "string",
            "route_id": 0,
            "route_name": "string",
            "route_number": "string",
            "route_type": 0
          }
        ],
        "stops": [
          {
            "stop_id": 0,
            "stop_name": "string"
          }
        ],
        "title": "string",
        "to_date": "1970-01-01T00:00:00Z",
        "url": "string"
      }
    ],
    "metro_tram": [
      {
        "colour": "string",
        "description": "string",
        "display_on_board": true,
        "display_status": true,
        "disruption_id": 0,
        "disruption_status": "string",
        "disruption_type": "string",
        "from_date": "1970-01-01T00:00:00Z",
        "last_updated": "1970-01-01T00:00:00Z",
        "published_on": "1970-01-01T00:00:00Z",
        "routes": [
          {
            "direction": {
              "direction_id": 0,
              "direction_name": "string",
              "route_direction_id": 0,
              "service_time": "string"
            },
            "route_gtfs_id": "string",
            "route_id": 0,
            "route_name": "string",
            "route_number": "string",
            "route_type": 0
          }
        ],
        "stops": [
          {
            "stop_id": 0,
            "stop_name": "string"
          }
        ],
        "title": "string",
        "to_date": "1970-01-01T00:00:00Z",
        "url": "string"
      }
    ],
    "night_bus": [
      {
        "colour": "string",
        "description": "string",
        "display_on_board": true,
        "display_status": true,
        "disruption_id": 0,
        "disruption_status": "string",
        "disruption_type": "string",
        "from_date": "1970-01-01T00:00:00Z",
        "last_updated": "1970-01-01T00:00:00Z",
        "published_on": "1970-01-01T00:00:00Z",
        "routes": [
          {
            "direction": {
              "direction_id": 0,
              "direction_name": "string",
              "route_direction_id": 0,
              "service_time": "string"
            },
            "route_gtfs_id": "string",
            "route_id": 0,
            "route_name": "string",
            "route_number": "string",
            "route_type": 0
          }
        ],
        "stops": [
          {
            "stop_id": 0,
            "stop_name": "string"
          }
        ],
        "title": "string",
        "to_date": "1970-01-01T00:00:00Z",
        "url": "string"
      }
    ],
    "regional_bus": [
      {
        "colour": "string",
        "description": "string",
        "display_on_board": true,
        "display_status": true,
        "disruption_id": 0,
        "disruption_status": "string",
        "disruption_type": "string",
        "from_date": "1970-01-01T00:00:00Z",
        "last_updated": "1970-01-01T00:00:00Z",
        "published_on": "1970-01-01T00:00:00Z",
        "routes": [
          {
            "direction": {
              "direction_id": 0,
              "direction_name": "string",
              "route_direction_id": 0,
              "service_time": "string"
            },
            "route_gtfs_id": "string",
            "route_id": 0,
            "route_name": "string",
            "route_number": "string",
            "route_type": 0
          }
        ],
        "stops": [
          {
            "stop_id": 0,
            "stop_name": "string"
          }
        ],
        "title": "string",
        "to_date": "1970-01-01T00:00:00Z",
        "url": "string"
      }
    ],
    "regional_coach": [
      {
        "colour": "string",
        "description": "string",
        "display_on_board": true,
        "display_status": true,
        "disruption_id": 0,
        "disruption_status": "string",
        "disruption_type": "string",
        "from_date": "1970-01-01T00:00:00Z",
        "last_updated": "1970-01-01T00:00:00Z",
        "published_on": "1970-01-01T00:00:00Z",
        "routes": [
          {
            "direction": {
              "direction_id": 0,
              "direction_name": "string",
              "route_direction_id": 0,
              "service_time": "string"
            },
            "route_gtfs_id": "string",
            "route_id": 0,
            "route_name": "string",
            "route_number": "string",
            "route_type": 0
          }
        ],
        "stops": [
          {
            "stop_id": 0,
            "stop_name": "string"
          }
        ],
        "title": "string",
        "to_date": "1970-01-01T00:00:00Z",
        "url": "string"
      }
    ],
    "regional_train": [
      {
        "colour": "string",
        "description": "string",
        "display_on_board": true,
        "display_status": true,
        "disruption_id": 0,
        "disruption_status": "string",
        "disruption_type": "string",
        "from_date": "1970-01-01T00:00:00Z",
        "last_updated": "1970-01-01T00:00:00Z",
        "published_on": "1970-01-01T00:00:00Z",
        "routes": [
          {
            "direction": {
              "direction_id": 0,
              "direction_name": "string",
              "route_direction_id": 0,
              "service_time": "string"
            },
            "route_gtfs_id": "string",
            "route_id": 0,
            "route_name": "string",
            "route_number": "string",
            "route_type": 0
          }
        ],
        "stops": [
          {
            "stop_id": 0,
            "stop_name": "string"
          }
        ],
        "title": "string",
        "to_date": "1970-01-01T00:00:00Z",
        "url": "string"
      }
    ],
    "school_bus": [
      {
        "colour": "string",
        "description": "string",
        "display_on_board": true,
        "display_status": true,
        "disruption_id": 0,
        "disruption_status": "string",
        "disruption_type": "string",
        "from_date": "1970-01-01T00:00:00Z",
        "last_updated": "1970-01-01T00:00:00Z",
        "published_on": "1970-01-01T00:00:00Z",
        "routes": [
          {
            "direction": {
              "direction_id": 0,
              "direction_name": "string",
              "route_direction_id": 0,
              "service_time": "string"
            },
            "route_gtfs_id": "string",
            "route_id": 0,
            "route_name": "string",
            "route_number": "string",
            "route_type": 0
          }
        ],
        "stops": [
          {
            "stop_id": 0,
            "stop_name": "string"
          }
        ],
        "title": "string",
        "to_date": "1970-01-01T00:00:00Z",
        "url": "string"
      }
    ],
    "skybus": [
      {
        "colour": "string",
        "description": "string",
        "display_on_board": true,
        "display_status": true,
        "disruption_id": 0,
        "disruption_status": "string",
        "disruption_type": "string",
        "from_date": "1970-01-01T00:00:00Z",
        "last_updated": "1970-01-01T00:00:00Z",
        "published_on": "1970-01-01T00:00:00Z",
        "routes": [
          {
            "direction": {
              "direction_id": 0,
              "direction_name": "string",
              "route_direction_id": 0,
              "service_time": "string"
            },
            "route_gtfs_id": "string",
            "route_id": 0,
            "route_name": "string",
            "route_number": "string",
            "route_type": 0
          }
        ],
        "stops": [
          {
            "stop_id": 0,
            "stop_name": "string"
          }
        ],
        "title": "string",
        "to_date": "1970-01-01T00:00:00Z",
        "url": "string"
      }
    ],
    "taxi": [
      {
        "colour": "string",
        "description": "string",
        "display_on_board": true,
        "display_status": true,
        "disruption_id": 0,
        "disruption_status": "string",
        "disruption_type": "string",
        "from_date": "1970-01-01T00:00:00Z",
        "last_updated": "1970-01-01T00:00:00Z",
        "published_on": "1970-01-01T00:00:00Z",
        "routes": [
          {
            "direction": {
              "direction_id": 0,
              "direction_name": "string",
              "route_direction_id": 0,
              "service_time": "string"
            },
            "route_gtfs_id": "string",
            "route_id": 0,
            "route_name": "string",
            "route_number": "string",
            "route_type": 0
          }
        ],
        "stops": [
          {
            "stop_id": 0,
            "stop_name": "string"
          }
        ],
        "title": "string",
        "to_date": "1970-01-01T00:00:00Z",
        "url": "string"
      }
    ],
    "telebus": [
      {
        "colour": "string",
        "description": "string",
        "display_on_board": true,
        "display_status": true,
        "disruption_id": 0,
        "disruption_status": "string",
        "disruption_type": "string",
        "from_date": "1970-01-01T00:00:00Z",
        "last_updated": "1970-01-01T00:00:00Z",
        "published_on": "1970-01-01T00:00:00Z",
        "routes": [
          {
            "direction": {
              "direction_id": 0,
              "direction_name": "string",
              "route_direction_id": 0,
              "service_time": "string"
            },
            "route_gtfs_id": "string",
            "route_id": 0,
            "route_name": "string",
            "route_number": "string",
            "route_type": 0
          }
        ],
        "stops": [
          {
            "stop_id": 0,
            "stop_name": "string"
          }
        ],
        "title": "string",
        "to_date": "1970-01-01T00:00:00Z",
        "url": "string"
      }
    ]
  },
  "status": {
    "health": 0,
    "version": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|disruptions|[V3.Disruptions](#schemav3.disruptions)|false|none|none|
|status|[V3.Status](#schemav3.status)|false|none|none|

<h2 id="tocS_V3.DynamoDbTimetable">V3.DynamoDbTimetable</h2>
<!-- backwards compatibility -->
<a id="schemav3.dynamodbtimetable"></a>
<a id="schema_V3.DynamoDbTimetable"></a>
<a id="tocSv3.dynamodbtimetable"></a>
<a id="tocsv3.dynamodbtimetable"></a>

```json
{
  "applicable_local_date": "string",
  "exists": true,
  "parser_mapping_version": "string",
  "parser_version": 0,
  "pt_mapping_version": "string",
  "pt_version": 0,
  "table_name": "string",
  "transport_type": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|applicable_local_date|string|false|read-only|Formated date string of applicable date|
|exists|boolean|false|none|True if the named table has been created in DynamoDB (i.e. at least one departure record has been loaded),<br>            or false if there are no records for this date and transport type.|
|parser_mapping_version|string|false|none|Diva Mapping Version used to load Parser into DynamoDB|
|parser_version|integer(int64)|false|none|Parser verison|
|pt_mapping_version|string|false|none|Diva Mapping Version used to load PT into DynamoDB|
|pt_version|integer(int64)|false|none|PT version|
|table_name|string|false|none|Name of corresponding table in DynamoDB.|
|transport_type|integer(int32)|false|none|A.k.a. Transport Mode (e.g. Train, Tram, Bus, V/Line, Nightrider)|

#### Enumerated Values

|Property|Value|
|---|---|
|transport_type|0|
|transport_type|1|
|transport_type|2|
|transport_type|3|
|transport_type|4|

<h2 id="tocS_V3.DynamoDbTimetablesReponse">V3.DynamoDbTimetablesReponse</h2>
<!-- backwards compatibility -->
<a id="schemav3.dynamodbtimetablesreponse"></a>
<a id="schema_V3.DynamoDbTimetablesReponse"></a>
<a id="tocSv3.dynamodbtimetablesreponse"></a>
<a id="tocsv3.dynamodbtimetablesreponse"></a>

```json
{
  "status": {
    "health": 0,
    "version": "string"
  },
  "timetables": [
    {
      "applicable_local_date": "string",
      "exists": true,
      "parser_mapping_version": "string",
      "parser_version": 0,
      "pt_mapping_version": "string",
      "pt_version": 0,
      "table_name": "string",
      "transport_type": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|[V3.Status](#schemav3.status)|false|none|none|
|timetables|[[V3.DynamoDbTimetable](#schemav3.dynamodbtimetable)]|false|none|none|

<h2 id="tocS_V3.ErrorResponse">V3.ErrorResponse</h2>
<!-- backwards compatibility -->
<a id="schemav3.errorresponse"></a>
<a id="schema_V3.ErrorResponse"></a>
<a id="tocSv3.errorresponse"></a>
<a id="tocsv3.errorresponse"></a>

```json
{
  "message": "string",
  "status": {
    "health": 0,
    "version": "string"
  }
}
```

An error response

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|Error message|
|status|[V3.Status](#schemav3.status)|false|none|none|

<h2 id="tocS_V3.FareEstimateResponse">V3.FareEstimateResponse</h2>
<!-- backwards compatibility -->
<a id="schemav3.fareestimateresponse"></a>
<a id="schema_V3.FareEstimateResponse"></a>
<a id="tocSv3.fareestimateresponse"></a>
<a id="tocsv3.fareestimateresponse"></a>

```json
null
```

<h2 id="tocS_V3.GenerateDivaMappingResponse">V3.GenerateDivaMappingResponse</h2>
<!-- backwards compatibility -->
<a id="schemav3.generatedivamappingresponse"></a>
<a id="schema_V3.GenerateDivaMappingResponse"></a>
<a id="tocSv3.generatedivamappingresponse"></a>
<a id="tocsv3.generatedivamappingresponse"></a>

```json
{
  "mapping_version": "string",
  "status": {
    "health": 0,
    "version": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mapping_version|string|false|read-only|none|
|status|[V3.Status](#schemav3.status)|false|none|none|

<h2 id="tocS_V3.Outlet">V3.Outlet</h2>
<!-- backwards compatibility -->
<a id="schemav3.outlet"></a>
<a id="schema_V3.Outlet"></a>
<a id="tocSv3.outlet"></a>
<a id="tocsv3.outlet"></a>

```json
{
  "outlet_business": "string",
  "outlet_business_hour_fri": "string",
  "outlet_business_hour_mon": "string",
  "outlet_business_hour_sat": "string",
  "outlet_business_hour_sun": "string",
  "outlet_business_hour_thur": "string",
  "outlet_business_hour_tue": "string",
  "outlet_business_hour_wed": "string",
  "outlet_latitude": 0,
  "outlet_longitude": 0,
  "outlet_name": "string",
  "outlet_notes": "string",
  "outlet_postcode": 0,
  "outlet_slid_spid": "string",
  "outlet_suburb": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|outlet_business|string|false|none|The business name of the outlet|
|outlet_business_hour_fri|string|false|none|The business hours on Friday|
|outlet_business_hour_mon|string|false|none|The business hours on Monday|
|outlet_business_hour_sat|string|false|none|The business hours on Saturday|
|outlet_business_hour_sun|string|false|none|The business hours on Sunday|
|outlet_business_hour_thur|string|false|none|The business hours on Thursday|
|outlet_business_hour_tue|string|false|none|The business hours on Tuesday|
|outlet_business_hour_wed|string|false|none|The business hours on Wednesday|
|outlet_latitude|number(float)|false|none|Geographic coordinate of latitude at outlet|
|outlet_longitude|number(float)|false|none|Geographic coordinate of longitude at outlet|
|outlet_name|string|false|none|The location name of the outlet|
|outlet_notes|string|false|none|Any additional notes for the outlet such as 'Buy pre-loaded myki cards only'. May be null/empty.|
|outlet_postcode|integer(int32)|false|none|The postcode for the outlet|
|outlet_slid_spid|string|false|none|The SLID / SPID|
|outlet_suburb|string|false|none|The city/municipality the outlet is in|

<h2 id="tocS_V3.OutletGeolocation">V3.OutletGeolocation</h2>
<!-- backwards compatibility -->
<a id="schemav3.outletgeolocation"></a>
<a id="schema_V3.OutletGeolocation"></a>
<a id="tocSv3.outletgeolocation"></a>
<a id="tocsv3.outletgeolocation"></a>

```json
{
  "outlet_business": "string",
  "outlet_business_hour_fri": "string",
  "outlet_business_hour_mon": "string",
  "outlet_business_hour_sat": "string",
  "outlet_business_hour_sun": "string",
  "outlet_business_hour_thur": "string",
  "outlet_business_hour_tue": "string",
  "outlet_business_hour_wed": "string",
  "outlet_distance": 0,
  "outlet_latitude": 0,
  "outlet_longitude": 0,
  "outlet_name": "string",
  "outlet_notes": "string",
  "outlet_postcode": 0,
  "outlet_slid_spid": "string",
  "outlet_suburb": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|outlet_business|string|false|none|The business name of the outlet|
|outlet_business_hour_fri|string|false|none|The business hours on Friday|
|outlet_business_hour_mon|string|false|none|The business hours on Monday|
|outlet_business_hour_sat|string|false|none|The business hours on Saturday|
|outlet_business_hour_sun|string|false|none|The business hours on Sunday|
|outlet_business_hour_thur|string|false|none|The business hours on Thursday|
|outlet_business_hour_tue|string|false|none|The business hours on Tuesday|
|outlet_business_hour_wed|string|false|none|The business hours on Wednesday|
|outlet_distance|number(float)|false|none|Distance of outlet from input location (in metres); returns 0 if no location is input|
|outlet_latitude|number(float)|false|none|Geographic coordinate of latitude at outlet|
|outlet_longitude|number(float)|false|none|Geographic coordinate of longitude at outlet|
|outlet_name|string|false|none|The location name of the outlet|
|outlet_notes|string|false|none|Any additional notes for the outlet such as 'Buy pre-loaded myki cards only'. May be null/empty.|
|outlet_postcode|integer(int32)|false|none|The postcode for the outlet|
|outlet_slid_spid|string|false|none|The SLID / SPID|
|outlet_suburb|string|false|none|The city/municipality the outlet is in|

<h2 id="tocS_V3.OutletGeolocationParameters">V3.OutletGeolocationParameters</h2>
<!-- backwards compatibility -->
<a id="schemav3.outletgeolocationparameters"></a>
<a id="schema_V3.OutletGeolocationParameters"></a>
<a id="tocSv3.outletgeolocationparameters"></a>
<a id="tocsv3.outletgeolocationparameters"></a>

```json
{
  "max_distance": 0,
  "max_results": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|max_distance|number(double)|false|none|Filter by maximum distance (in metres) from location specified via latitude and longitude parameters (default = 300)|
|max_results|integer(int32)|false|none|Maximum number of results returned (default = 30)|

<h2 id="tocS_V3.OutletGeolocationResponse">V3.OutletGeolocationResponse</h2>
<!-- backwards compatibility -->
<a id="schemav3.outletgeolocationresponse"></a>
<a id="schema_V3.OutletGeolocationResponse"></a>
<a id="tocSv3.outletgeolocationresponse"></a>
<a id="tocsv3.outletgeolocationresponse"></a>

```json
{
  "outlets": [
    {
      "outlet_business": "string",
      "outlet_business_hour_fri": "string",
      "outlet_business_hour_mon": "string",
      "outlet_business_hour_sat": "string",
      "outlet_business_hour_sun": "string",
      "outlet_business_hour_thur": "string",
      "outlet_business_hour_tue": "string",
      "outlet_business_hour_wed": "string",
      "outlet_distance": 0,
      "outlet_latitude": 0,
      "outlet_longitude": 0,
      "outlet_name": "string",
      "outlet_notes": "string",
      "outlet_postcode": 0,
      "outlet_slid_spid": "string",
      "outlet_suburb": "string"
    }
  ],
  "status": {
    "health": 0,
    "version": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|outlets|[[V3.OutletGeolocation](#schemav3.outletgeolocation)]|false|none|myki ticket outlets|
|status|[V3.Status](#schemav3.status)|false|none|none|

<h2 id="tocS_V3.OutletParameters">V3.OutletParameters</h2>
<!-- backwards compatibility -->
<a id="schemav3.outletparameters"></a>
<a id="schema_V3.OutletParameters"></a>
<a id="tocSv3.outletparameters"></a>
<a id="tocsv3.outletparameters"></a>

```json
{
  "max_results": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|max_results|integer(int32)|false|none|Maximum number of results returned (default = 30)|

<h2 id="tocS_V3.OutletResponse">V3.OutletResponse</h2>
<!-- backwards compatibility -->
<a id="schemav3.outletresponse"></a>
<a id="schema_V3.OutletResponse"></a>
<a id="tocSv3.outletresponse"></a>
<a id="tocsv3.outletresponse"></a>

```json
{
  "outlets": [
    {
      "outlet_business": "string",
      "outlet_business_hour_fri": "string",
      "outlet_business_hour_mon": "string",
      "outlet_business_hour_sat": "string",
      "outlet_business_hour_sun": "string",
      "outlet_business_hour_thur": "string",
      "outlet_business_hour_tue": "string",
      "outlet_business_hour_wed": "string",
      "outlet_latitude": 0,
      "outlet_longitude": 0,
      "outlet_name": "string",
      "outlet_notes": "string",
      "outlet_postcode": 0,
      "outlet_slid_spid": "string",
      "outlet_suburb": "string"
    }
  ],
  "status": {
    "health": 0,
    "version": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|outlets|[[V3.Outlet](#schemav3.outlet)]|false|none|myki ticket outlets|
|status|[V3.Status](#schemav3.status)|false|none|none|

<h2 id="tocS_V3.PatternDeparture">V3.PatternDeparture</h2>
<!-- backwards compatibility -->
<a id="schemav3.patterndeparture"></a>
<a id="schema_V3.PatternDeparture"></a>
<a id="tocSv3.patterndeparture"></a>
<a id="tocsv3.patterndeparture"></a>

```json
{
  "at_platform": true,
  "departure_sequence": 0,
  "direction_id": 0,
  "disruption_ids": [
    0
  ],
  "estimated_departure_utc": "1970-01-01T00:00:00Z",
  "flags": "string",
  "platform_number": "string",
  "route_id": 0,
  "run_id": 0,
  "run_ref": "string",
  "scheduled_departure_utc": "1970-01-01T00:00:00Z",
  "skipped_stops": [
    {
      "route_type": 0,
      "stop_distance": 0,
      "stop_id": 0,
      "stop_landmark": "string",
      "stop_latitude": 0,
      "stop_longitude": 0,
      "stop_name": "string",
      "stop_sequence": 0,
      "stop_suburb": "string"
    }
  ],
  "stop_id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|at_platform|boolean|false|none|Indicates if the metropolitan train service is at the platform at the time of query; returns false for other modes|
|departure_sequence|integer(int32)|false|none|Chronological sequence for the departures in a run. Order ascendingly by this field to get chronological order (earliest first) of departures with the same run_ref. NOTE, this field is not always N+1 or N-1 of the previous or following departure. e.g 100, 200, 250, 300 instead of 1, 2, 3, 4|
|direction_id|integer(int32)|false|none|Direction of travel identifier|
|disruption_ids|[integer(int64)]|false|none|Disruption information identifier(s)|
|estimated_departure_utc|string(date-time)|false|none|Real-time estimate of departure time and date in ISO 8601 UTC format|
|flags|string|false|none|Flag indicating special condition for run (e.g. RR Reservations Required, GC Guaranteed Connection, DOO Drop Off Only, PUO Pick Up Only, MO Mondays only, TU Tuesdays only, WE Wednesdays only, TH Thursdays only, FR Fridays only, SS School days only; ignore E flag)|
|platform_number|string|false|none|Platform number at stop (metropolitan train only; returns null for other modes)|
|route_id|integer(int32)|false|none|Route identifier|
|run_id|integer(int32)|false|read-only|Numeric trip/service run identifier. Defaults to -1 when run identifier is Alphanumeric|
|run_ref|string|false|none|Alphanumeric trip/service run identifier|
|scheduled_departure_utc|string(date-time)|false|none|Scheduled (i.e. timetabled) departure time and date in ISO 8601 UTC format|
|skipped_stops|[[V3.StopModel](#schemav3.stopmodel)]|false|none|The stops to be skipped following the current departure in order.|
|stop_id|integer(int32)|false|none|Stop identifier|

<h2 id="tocS_V3.ResultOutlet">V3.ResultOutlet</h2>
<!-- backwards compatibility -->
<a id="schemav3.resultoutlet"></a>
<a id="schema_V3.ResultOutlet"></a>
<a id="tocSv3.resultoutlet"></a>
<a id="tocsv3.resultoutlet"></a>

```json
{
  "outlet_business": "string",
  "outlet_business_hour_fri": "string",
  "outlet_business_hour_mon": "string",
  "outlet_business_hour_sat": "string",
  "outlet_business_hour_sun": "string",
  "outlet_business_hour_thur": "string",
  "outlet_business_hour_tue": "string",
  "outlet_business_hour_wed": "string",
  "outlet_distance": 0,
  "outlet_latitude": 0,
  "outlet_longitude": 0,
  "outlet_name": "string",
  "outlet_notes": "string",
  "outlet_postcode": 0,
  "outlet_slid_spid": "string",
  "outlet_suburb": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|outlet_business|string|false|none|The business name of the outlet|
|outlet_business_hour_fri|string|false|none|The business hours on Friday|
|outlet_business_hour_mon|string|false|none|The business hours on Monday|
|outlet_business_hour_sat|string|false|none|The business hours on Saturday|
|outlet_business_hour_sun|string|false|none|The business hours on Sunday|
|outlet_business_hour_thur|string|false|none|The business hours on Thursday|
|outlet_business_hour_tue|string|false|none|The business hours on Tuesday|
|outlet_business_hour_wed|string|false|none|The business hours on Wednesday|
|outlet_distance|number(float)|false|none|Distance of outlet from input location (in metres); returns 0 if no location is input|
|outlet_latitude|number(float)|false|none|Geographic coordinate of latitude at outlet|
|outlet_longitude|number(float)|false|none|Geographic coordinate of longitude at outlet|
|outlet_name|string|false|none|The location name of the outlet|
|outlet_notes|string|false|none|Any additional notes for the outlet such as 'Buy pre-loaded myki cards only'. May be null/empty.|
|outlet_postcode|integer(int32)|false|none|The postcode for the outlet|
|outlet_slid_spid|string|false|none|The SLID / SPID|
|outlet_suburb|string|false|none|The city/municipality the outlet is in|

<h2 id="tocS_V3.ResultRoute">V3.ResultRoute</h2>
<!-- backwards compatibility -->
<a id="schemav3.resultroute"></a>
<a id="schema_V3.ResultRoute"></a>
<a id="tocSv3.resultroute"></a>
<a id="tocsv3.resultroute"></a>

```json
{
  "route_gtfs_id": "string",
  "route_id": 0,
  "route_name": "string",
  "route_number": "string",
  "route_service_status": {
    "description": "string",
    "timestamp": "1970-01-01T00:00:00Z"
  },
  "route_type": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|route_gtfs_id|string|false|none|GTFS Identifer of the route|
|route_id|integer(int32)|false|none|Route identifier|
|route_name|string|false|none|Name of route|
|route_number|string|false|none|Route number presented to public (nb. not route_id)|
|route_service_status|[V3.RouteServiceStatus](#schemav3.routeservicestatus)|false|none|none|
|route_type|integer(int32)|false|none|Transport mode identifier|

<h2 id="tocS_V3.ResultStop">V3.ResultStop</h2>
<!-- backwards compatibility -->
<a id="schemav3.resultstop"></a>
<a id="schema_V3.ResultStop"></a>
<a id="tocSv3.resultstop"></a>
<a id="tocsv3.resultstop"></a>

```json
{
  "route_type": 0,
  "routes": [
    {
      "route_gtfs_id": "string",
      "route_id": 0,
      "route_name": "string",
      "route_number": "string",
      "route_service_status": {
        "description": "string",
        "timestamp": "1970-01-01T00:00:00Z"
      },
      "route_type": 0
    }
  ],
  "stop_distance": 0,
  "stop_id": 0,
  "stop_landmark": "string",
  "stop_latitude": 0,
  "stop_longitude": 0,
  "stop_name": "string",
  "stop_sequence": 0,
  "stop_suburb": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|route_type|integer(int32)|false|none|Transport mode identifier|
|routes|[[V3.ResultRoute](#schemav3.resultroute)]|false|none|List of routes travelling through the stop|
|stop_distance|number(float)|false|none|Distance of stop from input location (in metres); returns 0 if no location is input|
|stop_id|integer(int32)|false|none|Stop identifier|
|stop_landmark|string|false|none|Landmark in proximity of stop|
|stop_latitude|number(float)|false|none|Geographic coordinate of latitude at stop|
|stop_longitude|number(float)|false|none|Geographic coordinate of longitude at stop|
|stop_name|string|false|none|Name of stop|
|stop_sequence|integer(int32)|false|none|Sequence of the stop on the route/run; return 0 when route_id or run_id not specified. Order ascendingly by this field (when non zero) to get physical order (earliest first) of stops on the route_id/run_id.|
|stop_suburb|string|false|none|suburb of stop|

<h2 id="tocS_V3.RouteDeparturesSpecificParameters">V3.RouteDeparturesSpecificParameters</h2>
<!-- backwards compatibility -->
<a id="schemav3.routedeparturesspecificparameters"></a>
<a id="schema_V3.RouteDeparturesSpecificParameters"></a>
<a id="tocSv3.routedeparturesspecificparameters"></a>
<a id="tocsv3.routedeparturesspecificparameters"></a>

```json
{
  "date_utc": "1970-01-01T00:00:00Z",
  "expand": [
    "All"
  ],
  "include_cancelled": true,
  "include_geopath": true,
  "look_backwards": true,
  "max_results": 0,
  "scheduled_timetables": true,
  "train_scheduled_timetables": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|date_utc|string(date-time)|false|none|Filter by the date and time of the request (ISO 8601 UTC format) (default = current date and time)|
|expand|[string]|false|none|List of objects to be returned in full (i.e. expanded) - options include: All, Stop, Route, Run, Direction, Disruption, VehiclePosition, VehicleDescriptor or None.<br>            Run must be expanded to receive VehiclePosition and VehicleDescriptor information.|
|include_cancelled|boolean|false|none|Indicates if cancelled services (if they exist) are returned (default = false) - metropolitan train only|
|include_geopath|boolean|false|none|Indicates if the route geopath should be returned|
|look_backwards|boolean|false|none|Indicates if filtering runs (and their departures) to those that arrive at destination before date_utc (default = false). Requires max_results &gt; 0.|
|max_results|integer(int32)|false|none|Maximum number of results returned|
|scheduled_timetables|boolean|false|none|When set to true, all timetable information returned by Chronos will be sourced from the scheduled timetables,<br>            while when set to false (default state), the operational timetables will be used where available.|
|train_scheduled_timetables|boolean|false|none|DEPRECATED - use `scheduled_timetables` instead|

#### Enumerated Values

|Property|Value|
|---|---|
|expand|All|
|expand|Stop|
|expand|Route|
|expand|Run|
|expand|Direction|
|expand|Disruption|
|expand|VehicleDescriptor|
|expand|VehiclePosition|
|expand|None|

<h2 id="tocS_V3.RouteResponse">V3.RouteResponse</h2>
<!-- backwards compatibility -->
<a id="schemav3.routeresponse"></a>
<a id="schema_V3.RouteResponse"></a>
<a id="tocSv3.routeresponse"></a>
<a id="tocsv3.routeresponse"></a>

```json
{
  "route": {},
  "status": {
    "health": 0,
    "version": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|route|[V2.Object](#schemav2.object)|false|none|none|
|status|[V3.Status](#schemav3.status)|false|none|none|

<h2 id="tocS_V3.RouteServiceStatus">V3.RouteServiceStatus</h2>
<!-- backwards compatibility -->
<a id="schemav3.routeservicestatus"></a>
<a id="schema_V3.RouteServiceStatus"></a>
<a id="tocSv3.routeservicestatus"></a>
<a id="tocsv3.routeservicestatus"></a>

```json
{
  "description": "string",
  "timestamp": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|none|
|timestamp|string(date-time)|false|none|none|

<h2 id="tocS_V3.RouteType">V3.RouteType</h2>
<!-- backwards compatibility -->
<a id="schemav3.routetype"></a>
<a id="schema_V3.RouteType"></a>
<a id="tocSv3.routetype"></a>
<a id="tocsv3.routetype"></a>

```json
{
  "route_type": 0,
  "route_type_name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|route_type|integer(int32)|false|none|Transport mode identifier|
|route_type_name|string|false|none|Name of transport mode|

<h2 id="tocS_V3.RouteTypesResponse">V3.RouteTypesResponse</h2>
<!-- backwards compatibility -->
<a id="schemav3.routetypesresponse"></a>
<a id="schema_V3.RouteTypesResponse"></a>
<a id="tocSv3.routetypesresponse"></a>
<a id="tocsv3.routetypesresponse"></a>

```json
{
  "route_types": [
    {
      "route_type": 0,
      "route_type_name": "string"
    }
  ],
  "status": {
    "health": 0,
    "version": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|route_types|[[V3.RouteType](#schemav3.routetype)]|false|none|Transport mode identifiers|
|status|[V3.Status](#schemav3.status)|false|none|none|

<h2 id="tocS_V3.Run">V3.Run</h2>
<!-- backwards compatibility -->
<a id="schemav3.run"></a>
<a id="schema_V3.Run"></a>
<a id="tocSv3.run"></a>
<a id="tocsv3.run"></a>

```json
{
  "destination_name": "string",
  "direction_id": 0,
  "express_stop_count": 0,
  "final_stop_id": 0,
  "geopath": [
    {}
  ],
  "route_id": 0,
  "route_type": 0,
  "run_id": 0,
  "run_ref": "string",
  "run_sequence": 0,
  "status": "string",
  "vehicle_descriptor": {
    "air_conditioned": true,
    "description": "string",
    "id": "string",
    "length": "string",
    "low_floor": true,
    "operator": "string",
    "supplier": "string"
  },
  "vehicle_position": {
    "bearing": 0,
    "datetime_utc": "1970-01-01T00:00:00Z",
    "direction": "string",
    "easting": 0,
    "expiry_time": "1970-01-01T00:00:00Z",
    "latitude": 0,
    "longitude": 0,
    "northing": 0,
    "supplier": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|destination_name|string|false|none|Name of destination of run|
|direction_id|integer(int32)|false|none|Direction of travel identifier|
|express_stop_count|integer(int32)|false|none|The number of remaining skipped/express stations for the run/service from a stop|
|final_stop_id|integer(int32)|false|none|stop_id of final stop of run|
|geopath|[[V2.Object](#schemav2.object)]|false|none|Geopath of the route|
|route_id|integer(int32)|false|none|Route identifier|
|route_type|integer(int32)|false|none|Transport mode identifier|
|run_id|integer(int32)|false|read-only|Numeric trip/service run identifier. Defaults to -1 when run identifier is Alphanumeric|
|run_ref|string|false|none|Alphanumeric trip/service run identifier|
|run_sequence|integer(int32)|false|none|Chronological sequence of the trip/service run on the route in direction. Order ascendingly by this field to get chronological order (earliest first) of runs with the same route_id and direction_id.|
|status|string|false|none|Status of metropolitan train run; returns "scheduled" for other modes|
|vehicle_descriptor|[V3.VehicleDescriptor](#schemav3.vehicledescriptor)|false|none|none|
|vehicle_position|[V3.VehiclePosition](#schemav3.vehicleposition)|false|none|none|

<h2 id="tocS_V3.RunResponse">V3.RunResponse</h2>
<!-- backwards compatibility -->
<a id="schemav3.runresponse"></a>
<a id="schema_V3.RunResponse"></a>
<a id="tocSv3.runresponse"></a>
<a id="tocsv3.runresponse"></a>

```json
{
  "run": {
    "destination_name": "string",
    "direction_id": 0,
    "express_stop_count": 0,
    "final_stop_id": 0,
    "geopath": [
      {}
    ],
    "route_id": 0,
    "route_type": 0,
    "run_id": 0,
    "run_ref": "string",
    "run_sequence": 0,
    "status": "string",
    "vehicle_descriptor": {
      "air_conditioned": true,
      "description": "string",
      "id": "string",
      "length": "string",
      "low_floor": true,
      "operator": "string",
      "supplier": "string"
    },
    "vehicle_position": {
      "bearing": 0,
      "datetime_utc": "1970-01-01T00:00:00Z",
      "direction": "string",
      "easting": 0,
      "expiry_time": "1970-01-01T00:00:00Z",
      "latitude": 0,
      "longitude": 0,
      "northing": 0,
      "supplier": "string"
    }
  },
  "status": {
    "health": 0,
    "version": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|run|[V3.Run](#schemav3.run)|false|none|none|
|status|[V3.Status](#schemav3.status)|false|none|none|

<h2 id="tocS_V3.RunsResponse">V3.RunsResponse</h2>
<!-- backwards compatibility -->
<a id="schemav3.runsresponse"></a>
<a id="schema_V3.RunsResponse"></a>
<a id="tocSv3.runsresponse"></a>
<a id="tocsv3.runsresponse"></a>

```json
{
  "runs": [
    {
      "destination_name": "string",
      "direction_id": 0,
      "express_stop_count": 0,
      "final_stop_id": 0,
      "geopath": [
        {}
      ],
      "route_id": 0,
      "route_type": 0,
      "run_id": 0,
      "run_ref": "string",
      "run_sequence": 0,
      "status": "string",
      "vehicle_descriptor": {
        "air_conditioned": true,
        "description": "string",
        "id": "string",
        "length": "string",
        "low_floor": true,
        "operator": "string",
        "supplier": "string"
      },
      "vehicle_position": {
        "bearing": 0,
        "datetime_utc": "1970-01-01T00:00:00Z",
        "direction": "string",
        "easting": 0,
        "expiry_time": "1970-01-01T00:00:00Z",
        "latitude": 0,
        "longitude": 0,
        "northing": 0,
        "supplier": "string"
      }
    }
  ],
  "status": {
    "health": 0,
    "version": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|runs|[[V3.Run](#schemav3.run)]|false|none|Individual trips/services of a route|
|status|[V3.Status](#schemav3.status)|false|none|none|

<h2 id="tocS_V3.SearchParameters">V3.SearchParameters</h2>
<!-- backwards compatibility -->
<a id="schemav3.searchparameters"></a>
<a id="schema_V3.SearchParameters"></a>
<a id="tocSv3.searchparameters"></a>
<a id="tocsv3.searchparameters"></a>

```json
{
  "include_addresses": true,
  "include_outlets": true,
  "latitude": 0,
  "longitude": 0,
  "match_route_by_suburb": true,
  "match_stop_by_gtfs_stop_id": true,
  "match_stop_by_suburb": true,
  "max_distance": 0,
  "route_types": [
    0
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|include_addresses|boolean|false|none|Placeholder for future development; currently unavailable|
|include_outlets|boolean|false|none|Indicates if outlets will be returned in response (default = true)|
|latitude|number(float)|false|none|Filter by geographic coordinate of latitude|
|longitude|number(float)|false|none|Filter by geographic coordinate of longitude|
|match_route_by_suburb|boolean|false|none|Indicates whether to find routes by suburbs in the search term (default = true)|
|match_stop_by_gtfs_stop_id|boolean|false|none|Indicates whether to search for stops according to a metlink stop ID (default = false)|
|match_stop_by_suburb|boolean|false|none|Indicates whether to find stops by suburbs in the search term (default = true)|
|max_distance|number(float)|false|none|Filter by maximum distance (in metres) from location specified via latitude and longitude parameters|
|route_types|[integer(int32)]|false|none|Filter by route_type; values returned via RouteTypes API (note: stops and routes are ordered by route_types specified)|

#### Enumerated Values

|Property|Value|
|---|---|
|route_types|0|
|route_types|1|
|route_types|2|
|route_types|3|
|route_types|4|

<h2 id="tocS_V3.SearchResult">V3.SearchResult</h2>
<!-- backwards compatibility -->
<a id="schemav3.searchresult"></a>
<a id="schema_V3.SearchResult"></a>
<a id="tocSv3.searchresult"></a>
<a id="tocsv3.searchresult"></a>

```json
{
  "outlets": [
    {
      "outlet_business": "string",
      "outlet_business_hour_fri": "string",
      "outlet_business_hour_mon": "string",
      "outlet_business_hour_sat": "string",
      "outlet_business_hour_sun": "string",
      "outlet_business_hour_thur": "string",
      "outlet_business_hour_tue": "string",
      "outlet_business_hour_wed": "string",
      "outlet_distance": 0,
      "outlet_latitude": 0,
      "outlet_longitude": 0,
      "outlet_name": "string",
      "outlet_notes": "string",
      "outlet_postcode": 0,
      "outlet_slid_spid": "string",
      "outlet_suburb": "string"
    }
  ],
  "routes": [
    {
      "route_gtfs_id": "string",
      "route_id": 0,
      "route_name": "string",
      "route_number": "string",
      "route_service_status": {
        "description": "string",
        "timestamp": "1970-01-01T00:00:00Z"
      },
      "route_type": 0
    }
  ],
  "status": {
    "health": 0,
    "version": "string"
  },
  "stops": [
    {
      "route_type": 0,
      "routes": [
        {
          "route_gtfs_id": "string",
          "route_id": 0,
          "route_name": "string",
          "route_number": "string",
          "route_service_status": {
            "description": "string",
            "timestamp": "1970-01-01T00:00:00Z"
          },
          "route_type": 0
        }
      ],
      "stop_distance": 0,
      "stop_id": 0,
      "stop_landmark": "string",
      "stop_latitude": 0,
      "stop_longitude": 0,
      "stop_name": "string",
      "stop_sequence": 0,
      "stop_suburb": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|outlets|[[V3.ResultOutlet](#schemav3.resultoutlet)]|false|none|myki ticket outlets|
|routes|[[V3.ResultRoute](#schemav3.resultroute)]|false|none|Train lines, tram routes, bus routes, regional coach routes, Night Bus routes|
|status|[V3.Status](#schemav3.status)|false|none|none|
|stops|[[V3.ResultStop](#schemav3.resultstop)]|false|none|Train stations, tram stops, bus stops, regional coach stops or Night Bus stops|

<h2 id="tocS_V3.SiriDirectionRefsDictionary">V3.SiriDirectionRefsDictionary</h2>
<!-- backwards compatibility -->
<a id="schemav3.siridirectionrefsdictionary"></a>
<a id="schema_V3.SiriDirectionRefsDictionary"></a>
<a id="tocSv3.siridirectionrefsdictionary"></a>
<a id="tocsv3.siridirectionrefsdictionary"></a>

```json
{
  "direction_refs": {
    "property1": {
      "stop_point_refs": {
        "property1": {
          "direction_id": 0,
          "route_id": 0,
          "route_number_short": "string",
          "route_type": 0,
          "tracking_supplier_id": 0
        },
        "property2": {
          "direction_id": 0,
          "route_id": 0,
          "route_number_short": "string",
          "route_type": 0,
          "tracking_supplier_id": 0
        }
      },
      "unmatched_stop_point_refs": {
        "property1": "string",
        "property2": "string"
      }
    },
    "property2": {
      "stop_point_refs": {
        "property1": {
          "direction_id": 0,
          "route_id": 0,
          "route_number_short": "string",
          "route_type": 0,
          "tracking_supplier_id": 0
        },
        "property2": {
          "direction_id": 0,
          "route_id": 0,
          "route_number_short": "string",
          "route_type": 0,
          "tracking_supplier_id": 0
        }
      },
      "unmatched_stop_point_refs": {
        "property1": "string",
        "property2": "string"
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|direction_refs|object|false|read-only|none|

<h2 id="tocS_V3.SiriDownstreamSubscription">V3.SiriDownstreamSubscription</h2>
<!-- backwards compatibility -->
<a id="schemav3.siridownstreamsubscription"></a>
<a id="schema_V3.SiriDownstreamSubscription"></a>
<a id="tocSv3.siridownstreamsubscription"></a>
<a id="tocsv3.siridownstreamsubscription"></a>

```json
{
  "consumer_address": "string",
  "initial_termination_time": "1970-01-01T00:00:00Z",
  "message_type": 0,
  "preview_interval": "string",
  "siri_format": 0,
  "siri_version": "string",
  "subscriber_ref": "string",
  "subscription_ref": "string",
  "topics": [
    {
      "direction_ref": 1,
      "line_ref": "string",
      "route_type": 0
    }
  ],
  "validity_period_end": "1970-01-01T00:00:00Z",
  "validity_period_start": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|consumer_address|string|false|none|none|
|initial_termination_time|string(date-time)|false|none|none|
|message_type|integer(int32)|false|none|none|
|preview_interval|string|false|none|none|
|siri_format|integer(int32)|false|none|none|
|siri_version|string|false|none|none|
|subscriber_ref|string|false|none|none|
|subscription_ref|string|false|none|none|
|topics|[[V3.SiriDownstreamSubscriptionTopic](#schemav3.siridownstreamsubscriptiontopic)]|false|none|none|
|validity_period_end|string(date-time)|false|none|none|
|validity_period_start|string(date-time)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|message_type|0|
|message_type|1|
|siri_format|0|
|siri_format|1|

<h2 id="tocS_V3.SiriDownstreamSubscriptionDeleteRequest">V3.SiriDownstreamSubscriptionDeleteRequest</h2>
<!-- backwards compatibility -->
<a id="schemav3.siridownstreamsubscriptiondeleterequest"></a>
<a id="schema_V3.SiriDownstreamSubscriptionDeleteRequest"></a>
<a id="tocSv3.siridownstreamsubscriptiondeleterequest"></a>
<a id="tocsv3.siridownstreamsubscriptiondeleterequest"></a>

```json
{
  "subscriber_ref": "string",
  "subscription_ref": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|subscriber_ref|string|true|none|Siri Subscriber Ref|
|subscription_ref|[string]|false|none|Siri Subscription Reference(s) - Unique to a Subscriber Ref.<br>            If `null`, then all subscriptions will be terminated for the referenced Subscriber.|

<h2 id="tocS_V3.SiriDownstreamSubscriptionResponse">V3.SiriDownstreamSubscriptionResponse</h2>
<!-- backwards compatibility -->
<a id="schemav3.siridownstreamsubscriptionresponse"></a>
<a id="schema_V3.SiriDownstreamSubscriptionResponse"></a>
<a id="tocSv3.siridownstreamsubscriptionresponse"></a>
<a id="tocsv3.siridownstreamsubscriptionresponse"></a>

```json
{
  "valid_until": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|valid_until|string(date-time)|false|none|The Data Horizon of Chronos|

<h2 id="tocS_V3.SiriDownstreamSubscriptionTopic">V3.SiriDownstreamSubscriptionTopic</h2>
<!-- backwards compatibility -->
<a id="schemav3.siridownstreamsubscriptiontopic"></a>
<a id="schema_V3.SiriDownstreamSubscriptionTopic"></a>
<a id="tocSv3.siridownstreamsubscriptiontopic"></a>
<a id="tocsv3.siridownstreamsubscriptiontopic"></a>

```json
{
  "direction_ref": 1,
  "line_ref": "string",
  "route_type": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|direction_ref|integer(int32)|false|none|none|
|line_ref|string|false|none|none|
|route_type|integer(int32)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|direction_ref|1|
|direction_ref|2|
|direction_ref|5|
|direction_ref|10|
|direction_ref|16|
|direction_ref|32|
|direction_ref|65|
|direction_ref|130|
|route_type|0|
|route_type|1|
|route_type|2|
|route_type|3|
|route_type|4|

<h2 id="tocS_V3.SiriEstimatedTimetableSubscriptionRequest">V3.SiriEstimatedTimetableSubscriptionRequest</h2>
<!-- backwards compatibility -->
<a id="schemav3.siriestimatedtimetablesubscriptionrequest"></a>
<a id="schema_V3.SiriEstimatedTimetableSubscriptionRequest"></a>
<a id="tocSv3.siriestimatedtimetablesubscriptionrequest"></a>
<a id="tocsv3.siriestimatedtimetablesubscriptionrequest"></a>

```json
{
  "consumer_address": "string",
  "initial_termination_time": "1970-01-01T00:00:00Z",
  "preview_interval": "string",
  "siri_format": 0,
  "siri_version": "string",
  "subscriber_ref": "string",
  "subscription_ref": "string",
  "topics": [
    {
      "direction_ref": 1,
      "line_ref": "string",
      "route_type": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|consumer_address|string|true|none|Siri Consumer Address - Baseline and Updates will be sent to this address|
|initial_termination_time|string(date-time)|true|none|Siri Initial Termination Time - Expiry of the subscription|
|preview_interval|string|true|none|Siri Preview Interval|
|siri_format|integer(int32)|true|none|Siri Message Format 'xml' or 'json'|
|siri_version|string|true|none|Siri Message Version '1.3' or '2.0'|
|subscriber_ref|string|true|none|Siri Subscriber Ref|
|subscription_ref|string|true|none|Siri Subscription Ref - Unique to a Subscriber Ref|
|topics|[[V3.SiriSubscriptionTopic](#schemav3.sirisubscriptiontopic)]|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|siri_format|0|
|siri_format|1|

<h2 id="tocS_V3.SiriLineRef">V3.SiriLineRef</h2>
<!-- backwards compatibility -->
<a id="schemav3.sirilineref"></a>
<a id="schema_V3.SiriLineRef"></a>
<a id="tocSv3.sirilineref"></a>
<a id="tocsv3.sirilineref"></a>

```json
{
  "direction_ref": 1,
  "line_ref": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|direction_ref|integer(int32)|false|none|Siri DirectionRef  (in, out, up, down, clockwise, counterclockwise, Inbound, Outbound)|
|line_ref|string|true|none|Siri LineRef|

#### Enumerated Values

|Property|Value|
|---|---|
|direction_ref|1|
|direction_ref|2|
|direction_ref|5|
|direction_ref|10|
|direction_ref|16|
|direction_ref|32|
|direction_ref|65|
|direction_ref|130|

<h2 id="tocS_V3.SiriLineRefDirectionRefStopPointRef">V3.SiriLineRefDirectionRefStopPointRef</h2>
<!-- backwards compatibility -->
<a id="schemav3.sirilinerefdirectionrefstoppointref"></a>
<a id="schema_V3.SiriLineRefDirectionRefStopPointRef"></a>
<a id="tocSv3.sirilinerefdirectionrefstoppointref"></a>
<a id="tocsv3.sirilinerefdirectionrefstoppointref"></a>

```json
{
  "direction_ref": 1,
  "line_ref": "string",
  "stop_point_ref": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|direction_ref|integer(int32)|true|none|Siri DirectionRef  (in, out, up, down, clockwise, counterclockwise, Inbound, Outbound)|
|line_ref|string|true|none|Siri LineRef|
|stop_point_ref|integer(int32)|true|none|Siri StopPointRef|

#### Enumerated Values

|Property|Value|
|---|---|
|direction_ref|1|
|direction_ref|2|
|direction_ref|5|
|direction_ref|10|
|direction_ref|16|
|direction_ref|32|
|direction_ref|65|
|direction_ref|130|

<h2 id="tocS_V3.SiriLineRefDirectionRefsDictionary">V3.SiriLineRefDirectionRefsDictionary</h2>
<!-- backwards compatibility -->
<a id="schemav3.sirilinerefdirectionrefsdictionary"></a>
<a id="schema_V3.SiriLineRefDirectionRefsDictionary"></a>
<a id="tocSv3.sirilinerefdirectionrefsdictionary"></a>
<a id="tocsv3.sirilinerefdirectionrefsdictionary"></a>

```json
{
  "direction_refs": {
    "property1": [
      {
        "direction_id": 0,
        "route_id": 0,
        "route_number_short": "string",
        "route_type": 0,
        "tracking_supplier_id": 0
      }
    ],
    "property2": [
      {
        "direction_id": 0,
        "route_id": 0,
        "route_number_short": "string",
        "route_type": 0,
        "tracking_supplier_id": 0
      }
    ]
  },
  "unmatched_direction_refs": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|direction_refs|object|false|none|none|
|unmatched_direction_refs|object|false|none|none|

<h2 id="tocS_V3.SiriLineRefMappingsResponse">V3.SiriLineRefMappingsResponse</h2>
<!-- backwards compatibility -->
<a id="schemav3.sirilinerefmappingsresponse"></a>
<a id="schema_V3.SiriLineRefMappingsResponse"></a>
<a id="tocSv3.sirilinerefmappingsresponse"></a>
<a id="tocsv3.sirilinerefmappingsresponse"></a>

```json
{
  "line_refs": {
    "property1": {
      "direction_refs": {
        "property1": [
          {
            "direction_id": 0,
            "route_id": 0,
            "route_number_short": "string",
            "route_type": 0,
            "tracking_supplier_id": 0
          }
        ],
        "property2": [
          {
            "direction_id": 0,
            "route_id": 0,
            "route_number_short": "string",
            "route_type": 0,
            "tracking_supplier_id": 0
          }
        ]
      },
      "unmatched_direction_refs": {
        "property1": "string",
        "property2": "string"
      }
    },
    "property2": {
      "direction_refs": {
        "property1": [
          {
            "direction_id": 0,
            "route_id": 0,
            "route_number_short": "string",
            "route_type": 0,
            "tracking_supplier_id": 0
          }
        ],
        "property2": [
          {
            "direction_id": 0,
            "route_id": 0,
            "route_number_short": "string",
            "route_type": 0,
            "tracking_supplier_id": 0
          }
        ]
      },
      "unmatched_direction_refs": {
        "property1": "string",
        "property2": "string"
      }
    }
  },
  "mapping_version": "string",
  "status": {
    "health": 0,
    "version": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|line_refs|object|false|none|none|
|mapping_version|string|false|read-only|none|
|status|[V3.Status](#schemav3.status)|false|none|none|

<h2 id="tocS_V3.SiriLineRefsRequest">V3.SiriLineRefsRequest</h2>
<!-- backwards compatibility -->
<a id="schemav3.sirilinerefsrequest"></a>
<a id="schema_V3.SiriLineRefsRequest"></a>
<a id="tocSv3.sirilinerefsrequest"></a>
<a id="tocsv3.sirilinerefsrequest"></a>

```json
{
  "line_refs": [
    {
      "direction_ref": 1,
      "line_ref": "string"
    }
  ],
  "mapping_version": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|line_refs|[[V3.SiriLineRef](#schemav3.sirilineref)]|false|none|none|
|mapping_version|string|true|none|DIVA mapping version generated by Chronos during a Parser or RealtimeBusConfig load|

<h2 id="tocS_V3.SiriProductionTimetableSubscriptionRequest">V3.SiriProductionTimetableSubscriptionRequest</h2>
<!-- backwards compatibility -->
<a id="schemav3.siriproductiontimetablesubscriptionrequest"></a>
<a id="schema_V3.SiriProductionTimetableSubscriptionRequest"></a>
<a id="tocSv3.siriproductiontimetablesubscriptionrequest"></a>
<a id="tocsv3.siriproductiontimetablesubscriptionrequest"></a>

```json
{
  "consumer_address": "string",
  "end_time": "1970-01-01T00:00:00Z",
  "initial_termination_time": "1970-01-01T00:00:00Z",
  "siri_format": 0,
  "siri_version": "string",
  "start_time": "1970-01-01T00:00:00Z",
  "subscriber_ref": "string",
  "subscription_ref": "string",
  "topics": [
    {
      "direction_ref": 1,
      "line_ref": "string",
      "route_type": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|consumer_address|string|true|none|Siri Consumer Address - Baseline and Updates will be sent to this address|
|end_time|string(date-time)|true|none|Siri End Time of the Validity Period|
|initial_termination_time|string(date-time)|true|none|Siri Initial Termination Time - Expiry of the subscription|
|siri_format|integer(int32)|true|none|Siri Message Format 'xml' or 'json'|
|siri_version|string|true|none|Siri Message Version '1.3' or '2.0'|
|start_time|string(date-time)|true|none|Siri Start Time of the Validity Period|
|subscriber_ref|string|true|none|Siri Subscriber Ref|
|subscription_ref|string|true|none|Siri Subscription Ref - Unique to a Subscriber Ref|
|topics|[[V3.SiriSubscriptionTopic](#schemav3.sirisubscriptiontopic)]|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|siri_format|0|
|siri_format|1|

<h2 id="tocS_V3.SiriReferenceDataDetail">V3.SiriReferenceDataDetail</h2>
<!-- backwards compatibility -->
<a id="schemav3.sirireferencedatadetail"></a>
<a id="schema_V3.SiriReferenceDataDetail"></a>
<a id="tocSv3.sirireferencedatadetail"></a>
<a id="tocsv3.sirireferencedatadetail"></a>

```json
{
  "direction_id": 0,
  "route_id": 0,
  "route_number_short": "string",
  "route_type": 0,
  "tracking_supplier_id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|direction_id|integer(int32)|false|none|none|
|route_id|integer(int32)|false|none|none|
|route_number_short|string|false|none|Route number|
|route_type|integer(int32)|false|none|none|
|tracking_supplier_id|integer(int32)|false|none|Authority (Upstream SIRI provider) of a route and direction|

<h2 id="tocS_V3.SiriReferenceDataMappingsResponse">V3.SiriReferenceDataMappingsResponse</h2>
<!-- backwards compatibility -->
<a id="schemav3.sirireferencedatamappingsresponse"></a>
<a id="schema_V3.SiriReferenceDataMappingsResponse"></a>
<a id="tocSv3.sirireferencedatamappingsresponse"></a>
<a id="tocsv3.sirireferencedatamappingsresponse"></a>

```json
{
  "line_refs": {
    "property1": {
      "direction_refs": {
        "property1": {
          "stop_point_refs": {
            "property1": {
              "direction_id": 0,
              "route_id": 0,
              "route_number_short": "string",
              "route_type": 0,
              "tracking_supplier_id": 0
            },
            "property2": {
              "direction_id": 0,
              "route_id": 0,
              "route_number_short": "string",
              "route_type": 0,
              "tracking_supplier_id": 0
            }
          },
          "unmatched_stop_point_refs": {
            "property1": "string",
            "property2": "string"
          }
        },
        "property2": {
          "stop_point_refs": {
            "property1": {
              "direction_id": 0,
              "route_id": 0,
              "route_number_short": "string",
              "route_type": 0,
              "tracking_supplier_id": 0
            },
            "property2": {
              "direction_id": 0,
              "route_id": 0,
              "route_number_short": "string",
              "route_type": 0,
              "tracking_supplier_id": 0
            }
          },
          "unmatched_stop_point_refs": {
            "property1": "string",
            "property2": "string"
          }
        }
      }
    },
    "property2": {
      "direction_refs": {
        "property1": {
          "stop_point_refs": {
            "property1": {
              "direction_id": 0,
              "route_id": 0,
              "route_number_short": "string",
              "route_type": 0,
              "tracking_supplier_id": 0
            },
            "property2": {
              "direction_id": 0,
              "route_id": 0,
              "route_number_short": "string",
              "route_type": 0,
              "tracking_supplier_id": 0
            }
          },
          "unmatched_stop_point_refs": {
            "property1": "string",
            "property2": "string"
          }
        },
        "property2": {
          "stop_point_refs": {
            "property1": {
              "direction_id": 0,
              "route_id": 0,
              "route_number_short": "string",
              "route_type": 0,
              "tracking_supplier_id": 0
            },
            "property2": {
              "direction_id": 0,
              "route_id": 0,
              "route_number_short": "string",
              "route_type": 0,
              "tracking_supplier_id": 0
            }
          },
          "unmatched_stop_point_refs": {
            "property1": "string",
            "property2": "string"
          }
        }
      }
    }
  },
  "mapping_version": "string",
  "status": {
    "health": 0,
    "version": "string"
  },
  "stop_point_refs": {
    "property1": {
      "stop_id": 0
    },
    "property2": {
      "stop_id": 0
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|line_refs|object|false|read-only|SIRI LineRef|
|mapping_version|string|false|read-only|none|
|status|[V3.Status](#schemav3.status)|false|none|none|
|stop_point_refs|object|false|read-only|none|

<h2 id="tocS_V3.SiriReferenceDataRequest">V3.SiriReferenceDataRequest</h2>
<!-- backwards compatibility -->
<a id="schemav3.sirireferencedatarequest"></a>
<a id="schema_V3.SiriReferenceDataRequest"></a>
<a id="tocSv3.sirireferencedatarequest"></a>
<a id="tocsv3.sirireferencedatarequest"></a>

```json
{
  "date_utc": "1970-01-01T00:00:00Z",
  "line_refs": [
    {
      "direction_ref": 1,
      "line_ref": "string",
      "stop_point_ref": 0
    }
  ],
  "mapping_version": "string",
  "stop_point_refs": [
    0
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|date_utc|string(date-time)|false|none|Filter by the date and time of the request (ISO 8601 UTC format) (default = current date and time)|
|line_refs|[[V3.SiriLineRefDirectionRefStopPointRef](#schemav3.sirilinerefdirectionrefstoppointref)]|true|none|none|
|mapping_version|string|true|none|DIVA mapping version generated by Chronos during a Parser or RealtimeBusConfig load|
|stop_point_refs|[integer(int32)]|false|none|Siri StopPointRef|

<h2 id="tocS_V3.SiriStopsRefsDictionary">V3.SiriStopsRefsDictionary</h2>
<!-- backwards compatibility -->
<a id="schemav3.siristopsrefsdictionary"></a>
<a id="schema_V3.SiriStopsRefsDictionary"></a>
<a id="tocSv3.siristopsrefsdictionary"></a>
<a id="tocsv3.siristopsrefsdictionary"></a>

```json
{
  "stop_point_refs": {
    "property1": {
      "direction_id": 0,
      "route_id": 0,
      "route_number_short": "string",
      "route_type": 0,
      "tracking_supplier_id": 0
    },
    "property2": {
      "direction_id": 0,
      "route_id": 0,
      "route_number_short": "string",
      "route_type": 0,
      "tracking_supplier_id": 0
    }
  },
  "unmatched_stop_point_refs": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|stop_point_refs|object|false|read-only|none|
|unmatched_stop_point_refs|object|false|read-only|none|

<h2 id="tocS_V3.SiriSubscriptionTopic">V3.SiriSubscriptionTopic</h2>
<!-- backwards compatibility -->
<a id="schemav3.sirisubscriptiontopic"></a>
<a id="schema_V3.SiriSubscriptionTopic"></a>
<a id="tocSv3.sirisubscriptiontopic"></a>
<a id="tocsv3.sirisubscriptiontopic"></a>

```json
{
  "direction_ref": 1,
  "line_ref": "string",
  "route_type": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|direction_ref|integer(int32)|false|none|Siri DirectionRef  (in, out, up, down, clockwise, counterclockwise, Inbound, Outbound)|
|line_ref|string|true|none|Siri LineRef|
|route_type|integer(int32)|true|none|Route Type eg. 0 (Train) 1 (Tram) 2 (Bus) 3 (Vline) 4 (NightRider)|

#### Enumerated Values

|Property|Value|
|---|---|
|direction_ref|1|
|direction_ref|2|
|direction_ref|5|
|direction_ref|10|
|direction_ref|16|
|direction_ref|32|
|direction_ref|65|
|direction_ref|130|
|route_type|0|
|route_type|1|
|route_type|2|
|route_type|3|
|route_type|4|

<h2 id="tocS_V3.Status">V3.Status</h2>
<!-- backwards compatibility -->
<a id="schemav3.status"></a>
<a id="schema_V3.Status"></a>
<a id="tocSv3.status"></a>
<a id="tocsv3.status"></a>

```json
{
  "health": 0,
  "version": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|health|integer(int32)|false|none|API system health status (0=offline, 1=online)|
|version|string|false|none|API Version number|

#### Enumerated Values

|Property|Value|
|---|---|
|health|0|
|health|1|

<h2 id="tocS_V3.StopAccessibility">V3.StopAccessibility</h2>
<!-- backwards compatibility -->
<a id="schemav3.stopaccessibility"></a>
<a id="schema_V3.StopAccessibility"></a>
<a id="tocSv3.stopaccessibility"></a>
<a id="tocsv3.stopaccessibility"></a>

```json
{
  "audio_customer_information": true,
  "escalator": true,
  "hearing_loop": true,
  "lift": true,
  "lighting": true,
  "platform_number": 0,
  "stairs": true,
  "stop_accessible": true,
  "tactile_ground_surface_indicator": true,
  "waiting_room": true,
  "wheelchair": {
    "accessible_ramp": true,
    "low_ticket_counter": true,
    "manouvering": true,
    "parking": true,
    "raised_platform": true,
    "raised_platform_shelther": true,
    "ramp": true,
    "secondary_path": true,
    "steep_ramp": true,
    "telephone": true,
    "toilet": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|audio_customer_information|boolean|false|none|Indicates if there is at least one audio customer information at the stop/platform|
|escalator|boolean|false|none|Indicates if there is at least one accessible escalator at the stop/platform that complies with the Disability Standards for Accessible Public Transport under the Disability Discrimination Act (1992)|
|hearing_loop|boolean|false|none|Indicates if there is a hearing loop facility at the stop/platform|
|lift|boolean|false|none|Indicates if there is an elevator at the stop/platform|
|lighting|boolean|false|none|Indicates if there is lighting at the stop|
|platform_number|integer(int32)|false|none|Indicates the platform number for xivic information (Platform 0 indicates general stop facilities)|
|stairs|boolean|false|none|Indicates if there are stairs available in the stop|
|stop_accessible|boolean|false|none|Indicates if the stop is accessible|
|tactile_ground_surface_indicator|boolean|false|none|Indicates if there are tactile tiles (also known as tactile ground surface indicators, or TGSIs) at the stop|
|waiting_room|boolean|false|none|Indicates if there is a general waiting area at the stop|
|wheelchair|[V3.StopAccessibilityWheelchair](#schemav3.stopaccessibilitywheelchair)|false|none|none|

<h2 id="tocS_V3.StopAccessibilityWheelchair">V3.StopAccessibilityWheelchair</h2>
<!-- backwards compatibility -->
<a id="schemav3.stopaccessibilitywheelchair"></a>
<a id="schema_V3.StopAccessibilityWheelchair"></a>
<a id="tocSv3.stopaccessibilitywheelchair"></a>
<a id="tocsv3.stopaccessibilitywheelchair"></a>

```json
{
  "accessible_ramp": true,
  "low_ticket_counter": true,
  "manouvering": true,
  "parking": true,
  "raised_platform": true,
  "raised_platform_shelther": true,
  "ramp": true,
  "secondary_path": true,
  "steep_ramp": true,
  "telephone": true,
  "toilet": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accessible_ramp|boolean|false|none|none|
|low_ticket_counter|boolean|false|none|Indicates if there is at least one low ticket counter at the stop that complies with the Disability Standards for Accessible Public Transport under the Disability Discrimination Act (1992)|
|manouvering|boolean|false|none|Indicates if there is a space for mobility device to board on or off a transport mode|
|parking|boolean|false|none|Indicates if there is at least one accessible parking spot at the stop that complies with the Disability Standards for Accessible Public Transport under the Disability Discrimination Act (1992)|
|raised_platform|boolean|false|none|Indicates if there is a raised platform to board a train|
|raised_platform_shelther|boolean|false|none|Indicates if there is shelter near the raised platform|
|ramp|boolean|false|none|Indicates if there are ramps (&lt;1:14) at the stop/platform|
|secondary_path|boolean|false|none|Indicates if there is a path beyond the stop which is accessible|
|steep_ramp|boolean|false|none|Indicates if there are ramps (&gt;1:14) at the stop/platform|
|telephone|boolean|false|none|Indicates if there is at least one accessible telephone at the stop/platform that complies with the Disability Standards for Accessible Public Transport under the Disability Discrimination Act (1992)|
|toilet|boolean|false|none|Indicates if there is at least one accessible toilet at the stop/platform that complies with the Disability Standards for Accessible Public Transport under the Disability Discrimination Act (1992)|

<h2 id="tocS_V3.StopAmenityDetails">V3.StopAmenityDetails</h2>
<!-- backwards compatibility -->
<a id="schemav3.stopamenitydetails"></a>
<a id="schema_V3.StopAmenityDetails"></a>
<a id="tocSv3.stopamenitydetails"></a>
<a id="tocsv3.stopamenitydetails"></a>

```json
{
  "car_parking": "string",
  "cctv": true,
  "taxi_rank": true,
  "toilet": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|car_parking|string|false|none|The number of free car parking spots at the stop|
|cctv|boolean|false|none|Indicates if there are CCTV (i.e. closed circuit television) cameras at the stop|
|taxi_rank|boolean|false|none|Indicates if there is a taxi rank at or near the stop|
|toilet|boolean|false|none|Indicates if there is a public toilet at or near the stop|

<h2 id="tocS_V3.StopBasic">V3.StopBasic</h2>
<!-- backwards compatibility -->
<a id="schemav3.stopbasic"></a>
<a id="schema_V3.StopBasic"></a>
<a id="tocSv3.stopbasic"></a>
<a id="tocsv3.stopbasic"></a>

```json
{
  "stop_id": 0,
  "stop_name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|stop_id|integer(int32)|false|none|none|
|stop_name|string|false|none|none|

<h2 id="tocS_V3.StopDepartureRequest">V3.StopDepartureRequest</h2>
<!-- backwards compatibility -->
<a id="schemav3.stopdeparturerequest"></a>
<a id="schema_V3.StopDepartureRequest"></a>
<a id="tocSv3.stopdeparturerequest"></a>
<a id="tocsv3.stopdeparturerequest"></a>

```json
{
  "gtfs": true,
  "max_results": 0,
  "route_directions": [
    {
      "direction_id": 0,
      "direction_name": "string",
      "route_id": "string"
    }
  ],
  "route_type": 0,
  "stop_id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gtfs|boolean|false|none|Indicates that stop_id parameter will accept "GTFS stop_id" data and route_directions[x].route_id parameters will accept route_gtfs_id data|
|max_results|integer(int32)|false|none|Maximum number of results returned|
|route_directions|[[V3.StopDepartureRequestRouteDirection](#schemav3.stopdeparturerequestroutedirection)]|true|none|The route directions to find departures for at this stop.|
|route_type|integer(int32)|false|none|Number identifying transport mode; values returned via RouteTypes API|
|stop_id|integer(int32)|false|none|Identifier of stop; values returned by Stops API|

#### Enumerated Values

|Property|Value|
|---|---|
|route_type|0|
|route_type|1|
|route_type|2|
|route_type|3|
|route_type|4|

<h2 id="tocS_V3.StopDepartureRequestRouteDirection">V3.StopDepartureRequestRouteDirection</h2>
<!-- backwards compatibility -->
<a id="schemav3.stopdeparturerequestroutedirection"></a>
<a id="schema_V3.StopDepartureRequestRouteDirection"></a>
<a id="tocSv3.stopdeparturerequestroutedirection"></a>
<a id="tocsv3.stopdeparturerequestroutedirection"></a>

```json
{
  "direction_id": 0,
  "direction_name": "string",
  "route_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|direction_id|integer(int32)|false|none|Direction of travel identifier; values returned by Directions API - v3/directions|
|direction_name|string|true|none|Name of direction of travel; values returned by Directions API - v3/directions|
|route_id|string|false|none|Identifier of route; values returned by Routes API - v3/routes|

<h2 id="tocS_V3.StopDetails">V3.StopDetails</h2>
<!-- backwards compatibility -->
<a id="schemav3.stopdetails"></a>
<a id="schema_V3.StopDetails"></a>
<a id="tocSv3.stopdetails"></a>
<a id="tocsv3.stopdetails"></a>

```json
{
  "disruption_ids": [
    0
  ],
  "route_type": 0,
  "routes": [
    {}
  ],
  "station_description": "string",
  "station_type": "string",
  "stop_accessibility": {
    "audio_customer_information": true,
    "escalator": true,
    "hearing_loop": true,
    "lift": true,
    "lighting": true,
    "platform_number": 0,
    "stairs": true,
    "stop_accessible": true,
    "tactile_ground_surface_indicator": true,
    "waiting_room": true,
    "wheelchair": {
      "accessible_ramp": true,
      "low_ticket_counter": true,
      "manouvering": true,
      "parking": true,
      "raised_platform": true,
      "raised_platform_shelther": true,
      "ramp": true,
      "secondary_path": true,
      "steep_ramp": true,
      "telephone": true,
      "toilet": true
    }
  },
  "stop_amenities": {
    "car_parking": "string",
    "cctv": true,
    "taxi_rank": true,
    "toilet": true
  },
  "stop_id": 0,
  "stop_landmark": "string",
  "stop_location": {
    "gps": {
      "latitude": 0,
      "longitude": 0
    }
  },
  "stop_name": "string",
  "stop_staffing": {
    "fri_am_from": "string",
    "fri_am_to": "string",
    "fri_pm_from": "string",
    "fri_pm_to": "string",
    "mon_am_from": "string",
    "mon_am_to": "string",
    "mon_pm_from": "string",
    "mon_pm_to": "string",
    "ph_additional_text": "string",
    "ph_from": "string",
    "ph_to": "string",
    "sat_am_from": "string",
    "sat_am_to": "string",
    "sat_pm_from": "string",
    "sat_pm_to": "string",
    "sun_am_from": "string",
    "sun_am_to": "string",
    "sun_pm_from": "string",
    "sun_pm_to": "string",
    "thu_am_from": "string",
    "thu_am_to": "string",
    "thu_pm_from": "string",
    "thu_pm_to": "string",
    "tue_am_from": "string",
    "tue_am_to": "string",
    "tue_pm_from": "string",
    "tue_pm_to": "string",
    "wed_am_from": "string",
    "wed_am_to": "string",
    "wed_pm_To": "string",
    "wed_pm_from": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|disruption_ids|[integer(int64)]|false|none|Disruption information identifier(s)|
|route_type|integer(int32)|false|none|Transport mode identifier|
|routes|[[V2.Object](#schemav2.object)]|false|none|Routes travelling through the stop|
|station_description|string|false|none|The definition applicable to the station_type; returns null for V/Line train|
|station_type|string|false|none|Type of metropolitan train station (i.e. "Premium", "Host" or "Unstaffed" station); returns null for V/Line train|
|stop_accessibility|[V3.StopAccessibility](#schemav3.stopaccessibility)|false|none|none|
|stop_amenities|[V3.StopAmenityDetails](#schemav3.stopamenitydetails)|false|none|none|
|stop_id|integer(int32)|false|none|Stop identifier|
|stop_landmark|string|false|none|Landmark in proximity of stop|
|stop_location|[V3.StopLocation](#schemav3.stoplocation)|false|none|none|
|stop_name|string|false|none|Name of stop|
|stop_staffing|[V3.StopStaffing](#schemav3.stopstaffing)|false|none|none|

<h2 id="tocS_V3.StopGeosearch">V3.StopGeosearch</h2>
<!-- backwards compatibility -->
<a id="schemav3.stopgeosearch"></a>
<a id="schema_V3.StopGeosearch"></a>
<a id="tocSv3.stopgeosearch"></a>
<a id="tocsv3.stopgeosearch"></a>

```json
{
  "disruption_ids": [
    0
  ],
  "route_type": 0,
  "routes": [
    {}
  ],
  "stop_distance": 0,
  "stop_id": 0,
  "stop_landmark": "string",
  "stop_latitude": 0,
  "stop_longitude": 0,
  "stop_name": "string",
  "stop_sequence": 0,
  "stop_suburb": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|disruption_ids|[integer(int64)]|false|none|Disruption information identifier(s)|
|route_type|integer(int32)|false|none|Transport mode identifier|
|routes|[[V2.Object](#schemav2.object)]|false|none|List of routes travelling through the stop|
|stop_distance|number(float)|false|none|Distance of stop from input location (in metres); returns 0 if no location is input|
|stop_id|integer(int32)|false|none|Stop identifier|
|stop_landmark|string|false|none|Landmark in proximity of stop|
|stop_latitude|number(float)|false|none|Geographic coordinate of latitude at stop|
|stop_longitude|number(float)|false|none|Geographic coordinate of longitude at stop|
|stop_name|string|false|none|Name of stop|
|stop_sequence|integer(int32)|false|none|Sequence of the stop on the route/run; return 0 when route_id or run_id not specified. Order ascendingly by this field (when non zero) to get physical order (earliest first) of stops on the route_id/run_id.|
|stop_suburb|string|false|none|suburb of stop|

<h2 id="tocS_V3.StopGps">V3.StopGps</h2>
<!-- backwards compatibility -->
<a id="schemav3.stopgps"></a>
<a id="schema_V3.StopGps"></a>
<a id="tocSv3.stopgps"></a>
<a id="tocsv3.stopgps"></a>

```json
{
  "latitude": 0,
  "longitude": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|latitude|number(float)|false|none|Geographic coordinate of latitude at stop|
|longitude|number(float)|false|none|Geographic coordinate of longitude at stop|

<h2 id="tocS_V3.StopLocation">V3.StopLocation</h2>
<!-- backwards compatibility -->
<a id="schemav3.stoplocation"></a>
<a id="schema_V3.StopLocation"></a>
<a id="tocSv3.stoplocation"></a>
<a id="tocsv3.stoplocation"></a>

```json
{
  "gps": {
    "latitude": 0,
    "longitude": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gps|[V3.StopGps](#schemav3.stopgps)|false|none|none|

<h2 id="tocS_V3.StopModel">V3.StopModel</h2>
<!-- backwards compatibility -->
<a id="schemav3.stopmodel"></a>
<a id="schema_V3.StopModel"></a>
<a id="tocSv3.stopmodel"></a>
<a id="tocsv3.stopmodel"></a>

```json
{
  "route_type": 0,
  "stop_distance": 0,
  "stop_id": 0,
  "stop_landmark": "string",
  "stop_latitude": 0,
  "stop_longitude": 0,
  "stop_name": "string",
  "stop_sequence": 0,
  "stop_suburb": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|route_type|integer(int32)|false|none|Transport mode identifier|
|stop_distance|number(float)|false|none|Distance of stop from input location (in metres); returns 0 if no location is input|
|stop_id|integer(int32)|false|none|Stop identifier|
|stop_landmark|string|false|none|Landmark in proximity of stop|
|stop_latitude|number(float)|false|none|Geographic coordinate of latitude at stop|
|stop_longitude|number(float)|false|none|Geographic coordinate of longitude at stop|
|stop_name|string|false|none|Name of stop|
|stop_sequence|integer(int32)|false|none|Sequence of the stop on the route/run; return 0 when route_id or run_id not specified. Order ascendingly by this field (when non zero) to get physical order (earliest first) of stops on the route_id/run_id.|
|stop_suburb|string|false|none|suburb of stop|

<h2 id="tocS_V3.StopOnRoute">V3.StopOnRoute</h2>
<!-- backwards compatibility -->
<a id="schemav3.stoponroute"></a>
<a id="schema_V3.StopOnRoute"></a>
<a id="tocSv3.stoponroute"></a>
<a id="tocsv3.stoponroute"></a>

```json
{
  "disruption_ids": [
    0
  ],
  "route_type": 0,
  "stop_id": 0,
  "stop_landmark": "string",
  "stop_latitude": 0,
  "stop_longitude": 0,
  "stop_name": "string",
  "stop_sequence": 0,
  "stop_suburb": "string",
  "stop_ticket": {
    "is_free_fare_zone": true,
    "ticket_checks": true,
    "ticket_machine": true,
    "ticket_type": "string",
    "ticket_zones": [
      0
    ],
    "vline_reservation": true,
    "zone": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|disruption_ids|[integer(int64)]|false|none|Disruption information identifier(s)|
|route_type|integer(int32)|false|none|Transport mode identifier|
|stop_id|integer(int32)|false|none|Stop identifier|
|stop_landmark|string|false|none|Landmark in proximity of stop|
|stop_latitude|number(float)|false|none|Geographic coordinate of latitude at stop|
|stop_longitude|number(float)|false|none|Geographic coordinate of longitude at stop|
|stop_name|string|false|none|Name of stop|
|stop_sequence|integer(int32)|false|none|Sequence of the stop on the route/run; return 0 when route_id or run_id not specified. Order ascendingly by this field (when non zero) to get physical order (earliest first) of stops on the route_id/run_id.|
|stop_suburb|string|false|none|suburb of stop|
|stop_ticket|[V3.StopTicket](#schemav3.stopticket)|false|none|none|

<h2 id="tocS_V3.StopPoint">V3.StopPoint</h2>
<!-- backwards compatibility -->
<a id="schemav3.stoppoint"></a>
<a id="schema_V3.StopPoint"></a>
<a id="tocSv3.stoppoint"></a>
<a id="tocsv3.stoppoint"></a>

```json
{
  "stop_id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|stop_id|integer(int32)|false|none|none|

<h2 id="tocS_V3.StopResponse">V3.StopResponse</h2>
<!-- backwards compatibility -->
<a id="schemav3.stopresponse"></a>
<a id="schema_V3.StopResponse"></a>
<a id="tocSv3.stopresponse"></a>
<a id="tocsv3.stopresponse"></a>

```json
{
  "disruptions": {
    "property1": {
      "colour": "string",
      "description": "string",
      "display_on_board": true,
      "display_status": true,
      "disruption_id": 0,
      "disruption_status": "string",
      "disruption_type": "string",
      "from_date": "1970-01-01T00:00:00Z",
      "last_updated": "1970-01-01T00:00:00Z",
      "published_on": "1970-01-01T00:00:00Z",
      "routes": [
        {
          "direction": {
            "direction_id": 0,
            "direction_name": "string",
            "route_direction_id": 0,
            "service_time": "string"
          },
          "route_gtfs_id": "string",
          "route_id": 0,
          "route_name": "string",
          "route_number": "string",
          "route_type": 0
        }
      ],
      "stops": [
        {
          "stop_id": 0,
          "stop_name": "string"
        }
      ],
      "title": "string",
      "to_date": "1970-01-01T00:00:00Z",
      "url": "string"
    },
    "property2": {
      "colour": "string",
      "description": "string",
      "display_on_board": true,
      "display_status": true,
      "disruption_id": 0,
      "disruption_status": "string",
      "disruption_type": "string",
      "from_date": "1970-01-01T00:00:00Z",
      "last_updated": "1970-01-01T00:00:00Z",
      "published_on": "1970-01-01T00:00:00Z",
      "routes": [
        {
          "direction": {
            "direction_id": 0,
            "direction_name": "string",
            "route_direction_id": 0,
            "service_time": "string"
          },
          "route_gtfs_id": "string",
          "route_id": 0,
          "route_name": "string",
          "route_number": "string",
          "route_type": 0
        }
      ],
      "stops": [
        {
          "stop_id": 0,
          "stop_name": "string"
        }
      ],
      "title": "string",
      "to_date": "1970-01-01T00:00:00Z",
      "url": "string"
    }
  },
  "status": {
    "health": 0,
    "version": "string"
  },
  "stop": {
    "disruption_ids": [
      0
    ],
    "route_type": 0,
    "routes": [
      {}
    ],
    "station_description": "string",
    "station_type": "string",
    "stop_accessibility": {
      "audio_customer_information": true,
      "escalator": true,
      "hearing_loop": true,
      "lift": true,
      "lighting": true,
      "platform_number": 0,
      "stairs": true,
      "stop_accessible": true,
      "tactile_ground_surface_indicator": true,
      "waiting_room": true,
      "wheelchair": {
        "accessible_ramp": true,
        "low_ticket_counter": true,
        "manouvering": true,
        "parking": true,
        "raised_platform": true,
        "raised_platform_shelther": true,
        "ramp": true,
        "secondary_path": true,
        "steep_ramp": true,
        "telephone": true,
        "toilet": true
      }
    },
    "stop_amenities": {
      "car_parking": "string",
      "cctv": true,
      "taxi_rank": true,
      "toilet": true
    },
    "stop_id": 0,
    "stop_landmark": "string",
    "stop_location": {
      "gps": {
        "latitude": 0,
        "longitude": 0
      }
    },
    "stop_name": "string",
    "stop_staffing": {
      "fri_am_from": "string",
      "fri_am_to": "string",
      "fri_pm_from": "string",
      "fri_pm_to": "string",
      "mon_am_from": "string",
      "mon_am_to": "string",
      "mon_pm_from": "string",
      "mon_pm_to": "string",
      "ph_additional_text": "string",
      "ph_from": "string",
      "ph_to": "string",
      "sat_am_from": "string",
      "sat_am_to": "string",
      "sat_pm_from": "string",
      "sat_pm_to": "string",
      "sun_am_from": "string",
      "sun_am_to": "string",
      "sun_pm_from": "string",
      "sun_pm_to": "string",
      "thu_am_from": "string",
      "thu_am_to": "string",
      "thu_pm_from": "string",
      "thu_pm_to": "string",
      "tue_am_from": "string",
      "tue_am_to": "string",
      "tue_pm_from": "string",
      "tue_pm_to": "string",
      "wed_am_from": "string",
      "wed_am_to": "string",
      "wed_pm_To": "string",
      "wed_pm_from": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|disruptions|object|false|none|Disruption information applicable to relevant routes or stops|
|status|[V3.Status](#schemav3.status)|false|none|none|
|stop|[V3.StopDetails](#schemav3.stopdetails)|false|none|none|

<h2 id="tocS_V3.StopStaffing">V3.StopStaffing</h2>
<!-- backwards compatibility -->
<a id="schemav3.stopstaffing"></a>
<a id="schema_V3.StopStaffing"></a>
<a id="tocSv3.stopstaffing"></a>
<a id="tocsv3.stopstaffing"></a>

```json
{
  "fri_am_from": "string",
  "fri_am_to": "string",
  "fri_pm_from": "string",
  "fri_pm_to": "string",
  "mon_am_from": "string",
  "mon_am_to": "string",
  "mon_pm_from": "string",
  "mon_pm_to": "string",
  "ph_additional_text": "string",
  "ph_from": "string",
  "ph_to": "string",
  "sat_am_from": "string",
  "sat_am_to": "string",
  "sat_pm_from": "string",
  "sat_pm_to": "string",
  "sun_am_from": "string",
  "sun_am_to": "string",
  "sun_pm_from": "string",
  "sun_pm_to": "string",
  "thu_am_from": "string",
  "thu_am_to": "string",
  "thu_pm_from": "string",
  "thu_pm_to": "string",
  "tue_am_from": "string",
  "tue_am_to": "string",
  "tue_pm_from": "string",
  "tue_pm_to": "string",
  "wed_am_from": "string",
  "wed_am_to": "string",
  "wed_pm_To": "string",
  "wed_pm_from": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fri_am_from|string|false|none|Stop staffing hours|
|fri_am_to|string|false|none|Stop staffing hours|
|fri_pm_from|string|false|none|Stop staffing hours|
|fri_pm_to|string|false|none|Stop staffing hours|
|mon_am_from|string|false|none|Stop staffing hours|
|mon_am_to|string|false|none|Stop staffing hours|
|mon_pm_from|string|false|none|Stop staffing hours|
|mon_pm_to|string|false|none|Stop staffing hours|
|ph_additional_text|string|false|none|Stop staffing hours|
|ph_from|string|false|none|Stop staffing hours|
|ph_to|string|false|none|Stop staffing hours|
|sat_am_from|string|false|none|Stop staffing hours|
|sat_am_to|string|false|none|Stop staffing hours|
|sat_pm_from|string|false|none|Stop staffing hours|
|sat_pm_to|string|false|none|Stop staffing hours|
|sun_am_from|string|false|none|Stop staffing hours|
|sun_am_to|string|false|none|Stop staffing hours|
|sun_pm_from|string|false|none|Stop staffing hours|
|sun_pm_to|string|false|none|Stop staffing hours|
|thu_am_from|string|false|none|Stop staffing hours|
|thu_am_to|string|false|none|Stop staffing hours|
|thu_pm_from|string|false|none|Stop staffing hours|
|thu_pm_to|string|false|none|Stop staffing hours|
|tue_am_from|string|false|none|Stop staffing hours|
|tue_am_to|string|false|none|Stop staffing hours|
|tue_pm_from|string|false|none|Stop staffing hours|
|tue_pm_to|string|false|none|Stop staffing hours|
|wed_am_from|string|false|none|Stop staffing hours|
|wed_am_to|string|false|none|Stop staffing hours|
|wed_pm_To|string|false|none|Stop staffing hours|
|wed_pm_from|string|false|none|Stop staffing hours|

<h2 id="tocS_V3.StopTicket">V3.StopTicket</h2>
<!-- backwards compatibility -->
<a id="schemav3.stopticket"></a>
<a id="schema_V3.StopTicket"></a>
<a id="tocSv3.stopticket"></a>
<a id="tocsv3.stopticket"></a>

```json
{
  "is_free_fare_zone": true,
  "ticket_checks": true,
  "ticket_machine": true,
  "ticket_type": "string",
  "ticket_zones": [
    0
  ],
  "vline_reservation": true,
  "zone": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|is_free_fare_zone|boolean|false|none|Indicates whether the stop is inside the free fare zone|
|ticket_checks|boolean|false|none|none|
|ticket_machine|boolean|false|none|none|
|ticket_type|string|false|none|Indicates the ticket type for the stop (myki, paper or both)|
|ticket_zones|[integer(int32)]|false|none|none|
|vline_reservation|boolean|false|none|none|
|zone|string|false|none|Description of the zone|

<h2 id="tocS_V3.StoppingPattern">V3.StoppingPattern</h2>
<!-- backwards compatibility -->
<a id="schemav3.stoppingpattern"></a>
<a id="schema_V3.StoppingPattern"></a>
<a id="tocSv3.stoppingpattern"></a>
<a id="tocsv3.stoppingpattern"></a>

```json
{
  "departures": [
    {
      "at_platform": true,
      "departure_sequence": 0,
      "direction_id": 0,
      "disruption_ids": [
        0
      ],
      "estimated_departure_utc": "1970-01-01T00:00:00Z",
      "flags": "string",
      "platform_number": "string",
      "route_id": 0,
      "run_id": 0,
      "run_ref": "string",
      "scheduled_departure_utc": "1970-01-01T00:00:00Z",
      "skipped_stops": [
        {
          "route_type": 0,
          "stop_distance": 0,
          "stop_id": 0,
          "stop_landmark": "string",
          "stop_latitude": 0,
          "stop_longitude": 0,
          "stop_name": "string",
          "stop_sequence": 0,
          "stop_suburb": "string"
        }
      ],
      "stop_id": 0
    }
  ],
  "directions": {
    "property1": {
      "direction_id": 0,
      "direction_name": "string",
      "route_id": 0,
      "route_type": 0
    },
    "property2": {
      "direction_id": 0,
      "direction_name": "string",
      "route_id": 0,
      "route_type": 0
    }
  },
  "disruptions": [
    {
      "colour": "string",
      "description": "string",
      "display_on_board": true,
      "display_status": true,
      "disruption_id": 0,
      "disruption_status": "string",
      "disruption_type": "string",
      "from_date": "1970-01-01T00:00:00Z",
      "last_updated": "1970-01-01T00:00:00Z",
      "published_on": "1970-01-01T00:00:00Z",
      "routes": [
        {
          "direction": {
            "direction_id": 0,
            "direction_name": "string",
            "route_direction_id": 0,
            "service_time": "string"
          },
          "route_gtfs_id": "string",
          "route_id": 0,
          "route_name": "string",
          "route_number": "string",
          "route_type": 0
        }
      ],
      "stops": [
        {
          "stop_id": 0,
          "stop_name": "string"
        }
      ],
      "title": "string",
      "to_date": "1970-01-01T00:00:00Z",
      "url": "string"
    }
  ],
  "routes": {
    "property1": {},
    "property2": {}
  },
  "runs": {
    "property1": {
      "destination_name": "string",
      "direction_id": 0,
      "express_stop_count": 0,
      "final_stop_id": 0,
      "geopath": [
        {}
      ],
      "route_id": 0,
      "route_type": 0,
      "run_id": 0,
      "run_ref": "string",
      "run_sequence": 0,
      "status": "string",
      "vehicle_descriptor": {
        "air_conditioned": true,
        "description": "string",
        "id": "string",
        "length": "string",
        "low_floor": true,
        "operator": "string",
        "supplier": "string"
      },
      "vehicle_position": {
        "bearing": 0,
        "datetime_utc": "1970-01-01T00:00:00Z",
        "direction": "string",
        "easting": 0,
        "expiry_time": "1970-01-01T00:00:00Z",
        "latitude": 0,
        "longitude": 0,
        "northing": 0,
        "supplier": "string"
      }
    },
    "property2": {
      "destination_name": "string",
      "direction_id": 0,
      "express_stop_count": 0,
      "final_stop_id": 0,
      "geopath": [
        {}
      ],
      "route_id": 0,
      "route_type": 0,
      "run_id": 0,
      "run_ref": "string",
      "run_sequence": 0,
      "status": "string",
      "vehicle_descriptor": {
        "air_conditioned": true,
        "description": "string",
        "id": "string",
        "length": "string",
        "low_floor": true,
        "operator": "string",
        "supplier": "string"
      },
      "vehicle_position": {
        "bearing": 0,
        "datetime_utc": "1970-01-01T00:00:00Z",
        "direction": "string",
        "easting": 0,
        "expiry_time": "1970-01-01T00:00:00Z",
        "latitude": 0,
        "longitude": 0,
        "northing": 0,
        "supplier": "string"
      }
    }
  },
  "status": {
    "health": 0,
    "version": "string"
  },
  "stops": {
    "property1": {
      "route_type": 0,
      "stop_distance": 0,
      "stop_id": 0,
      "stop_landmark": "string",
      "stop_latitude": 0,
      "stop_longitude": 0,
      "stop_name": "string",
      "stop_sequence": 0,
      "stop_suburb": "string",
      "stop_ticket": {
        "is_free_fare_zone": true,
        "ticket_checks": true,
        "ticket_machine": true,
        "ticket_type": "string",
        "ticket_zones": [
          0
        ],
        "vline_reservation": true,
        "zone": "string"
      }
    },
    "property2": {
      "route_type": 0,
      "stop_distance": 0,
      "stop_id": 0,
      "stop_landmark": "string",
      "stop_latitude": 0,
      "stop_longitude": 0,
      "stop_name": "string",
      "stop_sequence": 0,
      "stop_suburb": "string",
      "stop_ticket": {
        "is_free_fare_zone": true,
        "ticket_checks": true,
        "ticket_machine": true,
        "ticket_type": "string",
        "ticket_zones": [
          0
        ],
        "vline_reservation": true,
        "zone": "string"
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|departures|[[V3.PatternDeparture](#schemav3.patterndeparture)]|false|none|Timetabled and real-time service departures|
|directions|object|false|none|Directions of travel of route|
|disruptions|[[V3.Disruption](#schemav3.disruption)]|false|none|Disruption information applicable to relevant routes or stops|
|routes|object|false|none|Train lines, tram routes, bus routes, regional coach routes, Night Bus routes|
|runs|object|false|none|Individual trips/services of a route|
|status|[V3.Status](#schemav3.status)|false|none|none|
|stops|object|false|none|A train station, tram stop, bus stop, regional coach stop or Night Bus stop|

<h2 id="tocS_V3.StoppingPatternStop">V3.StoppingPatternStop</h2>
<!-- backwards compatibility -->
<a id="schemav3.stoppingpatternstop"></a>
<a id="schema_V3.StoppingPatternStop"></a>
<a id="tocSv3.stoppingpatternstop"></a>
<a id="tocsv3.stoppingpatternstop"></a>

```json
{
  "route_type": 0,
  "stop_distance": 0,
  "stop_id": 0,
  "stop_landmark": "string",
  "stop_latitude": 0,
  "stop_longitude": 0,
  "stop_name": "string",
  "stop_sequence": 0,
  "stop_suburb": "string",
  "stop_ticket": {
    "is_free_fare_zone": true,
    "ticket_checks": true,
    "ticket_machine": true,
    "ticket_type": "string",
    "ticket_zones": [
      0
    ],
    "vline_reservation": true,
    "zone": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|route_type|integer(int32)|false|none|Transport mode identifier|
|stop_distance|number(float)|false|none|Distance of stop from input location (in metres); returns 0 if no location is input|
|stop_id|integer(int32)|false|none|Stop identifier|
|stop_landmark|string|false|none|Landmark in proximity of stop|
|stop_latitude|number(float)|false|none|Geographic coordinate of latitude at stop|
|stop_longitude|number(float)|false|none|Geographic coordinate of longitude at stop|
|stop_name|string|false|none|Name of stop|
|stop_sequence|integer(int32)|false|none|Sequence of the stop on the route/run; return 0 when route_id or run_id not specified. Order ascendingly by this field (when non zero) to get physical order (earliest first) of stops on the route_id/run_id.|
|stop_suburb|string|false|none|suburb of stop|
|stop_ticket|[V3.StopTicket](#schemav3.stopticket)|false|none|none|

<h2 id="tocS_V3.StopsByDistanceResponse">V3.StopsByDistanceResponse</h2>
<!-- backwards compatibility -->
<a id="schemav3.stopsbydistanceresponse"></a>
<a id="schema_V3.StopsByDistanceResponse"></a>
<a id="tocSv3.stopsbydistanceresponse"></a>
<a id="tocsv3.stopsbydistanceresponse"></a>

```json
{
  "disruptions": {
    "property1": {
      "colour": "string",
      "description": "string",
      "display_on_board": true,
      "display_status": true,
      "disruption_id": 0,
      "disruption_status": "string",
      "disruption_type": "string",
      "from_date": "1970-01-01T00:00:00Z",
      "last_updated": "1970-01-01T00:00:00Z",
      "published_on": "1970-01-01T00:00:00Z",
      "routes": [
        {
          "direction": {
            "direction_id": 0,
            "direction_name": "string",
            "route_direction_id": 0,
            "service_time": "string"
          },
          "route_gtfs_id": "string",
          "route_id": 0,
          "route_name": "string",
          "route_number": "string",
          "route_type": 0
        }
      ],
      "stops": [
        {
          "stop_id": 0,
          "stop_name": "string"
        }
      ],
      "title": "string",
      "to_date": "1970-01-01T00:00:00Z",
      "url": "string"
    },
    "property2": {
      "colour": "string",
      "description": "string",
      "display_on_board": true,
      "display_status": true,
      "disruption_id": 0,
      "disruption_status": "string",
      "disruption_type": "string",
      "from_date": "1970-01-01T00:00:00Z",
      "last_updated": "1970-01-01T00:00:00Z",
      "published_on": "1970-01-01T00:00:00Z",
      "routes": [
        {
          "direction": {
            "direction_id": 0,
            "direction_name": "string",
            "route_direction_id": 0,
            "service_time": "string"
          },
          "route_gtfs_id": "string",
          "route_id": 0,
          "route_name": "string",
          "route_number": "string",
          "route_type": 0
        }
      ],
      "stops": [
        {
          "stop_id": 0,
          "stop_name": "string"
        }
      ],
      "title": "string",
      "to_date": "1970-01-01T00:00:00Z",
      "url": "string"
    }
  },
  "status": {
    "health": 0,
    "version": "string"
  },
  "stops": [
    {
      "disruption_ids": [
        0
      ],
      "route_type": 0,
      "routes": [
        {}
      ],
      "stop_distance": 0,
      "stop_id": 0,
      "stop_landmark": "string",
      "stop_latitude": 0,
      "stop_longitude": 0,
      "stop_name": "string",
      "stop_sequence": 0,
      "stop_suburb": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|disruptions|object|false|none|Disruption information applicable to relevant routes or stops|
|status|[V3.Status](#schemav3.status)|false|none|none|
|stops|[[V3.StopGeosearch](#schemav3.stopgeosearch)]|false|none|Train stations, tram stops, bus stops, regional coach stops or Night Bus stops|

<h2 id="tocS_V3.StopsOnRouteResponse">V3.StopsOnRouteResponse</h2>
<!-- backwards compatibility -->
<a id="schemav3.stopsonrouteresponse"></a>
<a id="schema_V3.StopsOnRouteResponse"></a>
<a id="tocSv3.stopsonrouteresponse"></a>
<a id="tocsv3.stopsonrouteresponse"></a>

```json
{
  "disruptions": {
    "property1": {
      "colour": "string",
      "description": "string",
      "display_on_board": true,
      "display_status": true,
      "disruption_id": 0,
      "disruption_status": "string",
      "disruption_type": "string",
      "from_date": "1970-01-01T00:00:00Z",
      "last_updated": "1970-01-01T00:00:00Z",
      "published_on": "1970-01-01T00:00:00Z",
      "routes": [
        {
          "direction": {
            "direction_id": 0,
            "direction_name": "string",
            "route_direction_id": 0,
            "service_time": "string"
          },
          "route_gtfs_id": "string",
          "route_id": 0,
          "route_name": "string",
          "route_number": "string",
          "route_type": 0
        }
      ],
      "stops": [
        {
          "stop_id": 0,
          "stop_name": "string"
        }
      ],
      "title": "string",
      "to_date": "1970-01-01T00:00:00Z",
      "url": "string"
    },
    "property2": {
      "colour": "string",
      "description": "string",
      "display_on_board": true,
      "display_status": true,
      "disruption_id": 0,
      "disruption_status": "string",
      "disruption_type": "string",
      "from_date": "1970-01-01T00:00:00Z",
      "last_updated": "1970-01-01T00:00:00Z",
      "published_on": "1970-01-01T00:00:00Z",
      "routes": [
        {
          "direction": {
            "direction_id": 0,
            "direction_name": "string",
            "route_direction_id": 0,
            "service_time": "string"
          },
          "route_gtfs_id": "string",
          "route_id": 0,
          "route_name": "string",
          "route_number": "string",
          "route_type": 0
        }
      ],
      "stops": [
        {
          "stop_id": 0,
          "stop_name": "string"
        }
      ],
      "title": "string",
      "to_date": "1970-01-01T00:00:00Z",
      "url": "string"
    }
  },
  "geopath": [
    {}
  ],
  "status": {
    "health": 0,
    "version": "string"
  },
  "stops": [
    {
      "disruption_ids": [
        0
      ],
      "route_type": 0,
      "stop_id": 0,
      "stop_landmark": "string",
      "stop_latitude": 0,
      "stop_longitude": 0,
      "stop_name": "string",
      "stop_sequence": 0,
      "stop_suburb": "string",
      "stop_ticket": {
        "is_free_fare_zone": true,
        "ticket_checks": true,
        "ticket_machine": true,
        "ticket_type": "string",
        "ticket_zones": [
          0
        ],
        "vline_reservation": true,
        "zone": "string"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|disruptions|object|false|none|Disruption information applicable to relevant routes or stops|
|geopath|[[V2.Object](#schemav2.object)]|false|none|GeoPath for the route|
|status|[V3.Status](#schemav3.status)|false|none|none|
|stops|[[V3.StopOnRoute](#schemav3.stoponroute)]|false|none|Train stations, tram stops, bus stops, regional coach stops or Night Bus stops|

<h2 id="tocS_V3.VehicleDescriptor">V3.VehicleDescriptor</h2>
<!-- backwards compatibility -->
<a id="schemav3.vehicledescriptor"></a>
<a id="schema_V3.VehicleDescriptor"></a>
<a id="tocSv3.vehicledescriptor"></a>
<a id="tocsv3.vehicledescriptor"></a>

```json
{
  "air_conditioned": true,
  "description": "string",
  "id": "string",
  "length": "string",
  "low_floor": true,
  "operator": "string",
  "supplier": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|air_conditioned|boolean|false|none|Indicator if vehicle is air conditioned. May be null. Only available for some tram runs.|
|description|string|false|none|Vehicle description such as "6 Car Comeng", "6 Car Xtrapolis", "3 Car Comeng", "6 Car Siemens", "3 Car Siemens". May be null/empty.<br>            Only available for some metropolitan train runs.|
|id|string|false|none|Operator identifier of the vehicle such as "26094". May be null/empty. Only available for some tram and bus runs.|
|length|string|false|none|The length of the vehicle. Applies to CIS - Metro Trains|
|low_floor|boolean|false|none|Indicator if vehicle has a low floor. May be null. Only available for some tram runs.|
|operator|string|false|none|Operator name of the vehicle such as "Metro Trains Melbourne", "Yarra Trams", "Ventura Bus Line", "CDC" or "Sita Bus Lines" . May be null/empty.<br>            Only available for train, tram, v/line and some bus runs.|
|supplier|string|false|none|Supplier of vehicle descriptor data.|

<h2 id="tocS_V3.VehiclePosition">V3.VehiclePosition</h2>
<!-- backwards compatibility -->
<a id="schemav3.vehicleposition"></a>
<a id="schema_V3.VehiclePosition"></a>
<a id="tocSv3.vehicleposition"></a>
<a id="tocsv3.vehicleposition"></a>

```json
{
  "bearing": 0,
  "datetime_utc": "1970-01-01T00:00:00Z",
  "direction": "string",
  "easting": 0,
  "expiry_time": "1970-01-01T00:00:00Z",
  "latitude": 0,
  "longitude": 0,
  "northing": 0,
  "supplier": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bearing|number(double)|false|none|Compass bearing of the vehicle when known, clockwise from True North, i.e., 0 is North and 90 is East. May be null.<br>            Only available for some bus runs.|
|datetime_utc|string(date-time)|false|none|Date and time that the vehicle position data was supplied.|
|direction|string|false|none|CIS - Metro Train Vehicle Location Direction|
|easting|number(double)|false|none|CIS - Metro Train Vehicle Location Easting coordinate|
|expiry_time|string(date-time)|false|none|CIS - Metro Train Vehicle Location data expiry time|
|latitude|number(double)|false|none|Geographic coordinate of latitude of the vehicle when known. May be null.<br>            Only available for some bus runs.|
|longitude|number(double)|false|none|Geographic coordinate of longitude of the vehicle when known. <br>            Only available for some bus runs.|
|northing|number(double)|false|none|CIS - Metro Train Vehicle Location Northing coordinate|
|supplier|string|false|none|Supplier of vehicle position data.|
