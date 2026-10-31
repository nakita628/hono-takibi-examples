<h1 id="neows---near-earth-object-web-service">NeoWs - (Near Earth Object Web Service) v1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

A web service for near earth objects. All the data is from the <a href="http://neo.jpl.nasa.gov/" target="_blank">NASA JPL Asteroid team</a>. 

 

NeoWs is proud to power AsteroidTracker on <a href="https://itunes.apple.com/us/app/asteroid-tracker/id689684901?mt=8" target="_blank">iOS</a> and <a href="https://play.google.com/store/apps/details?id=com.vitruviussoftware.bunifish.asteroidtracker&feature" target="_blank">Android</a> as well as related apps. 

 Follow us on <a href="https://twitter.com/AsteroidTracker" target="_blank">Twitter</a>

Base URLs:

* <a href="http://www.neowsapp.com/">http://www.neowsapp.com/</a>

<h1 id="neows---near-earth-object-web-service-feed">feed</h1>

Operations with NearEarthObjects

## Find Near Earth Objects by date

<a id="opIdretrieveNearEarthObjectFeed"></a>

> Code samples

```bash
curl https://example.com/rest/v1/feed \
  -H 'Accept: application/json'
```

`GET /rest/v1/feed`

Get a list of Near Earth Objects within a date range, The max range in one query is 7 days

<h3 id="find-near-earth-objects-by-date-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|start_date|query|string|false|Start of date range search, format: yyyy-MM-dd - (ex: 2015-04-28)|
|end_date|query|string|false|End of date range search, format: yyyy-MM-dd - (ex: 2015-04-28). If left off search will extends 7 days from start_date|
|detailed|query|boolean|false|detailed|

> Example responses

> 200 Response

```json
{
  "element_count": 0,
  "links": {},
  "near_earth_objects": null
}
```

<h3 id="find-near-earth-objects-by-date-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[NearEarthObjectList](#schemanearearthobjectlist)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Find Near Earth Objects for today

<a id="opIdretrieveNEOFeedToday"></a>

> Code samples

```bash
curl https://example.com/rest/v1/feed/today \
  -H 'Accept: application/json'
```

`GET /rest/v1/feed/today`

Get a list of Near Earth Objects for today

<h3 id="find-near-earth-objects-for-today-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|detailed|query|boolean|false|detailed|

> Example responses

> 200 Response

```json
{
  "element_count": 0,
  "links": {},
  "near_earth_objects": null
}
```

<h3 id="find-near-earth-objects-for-today-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[NearEarthObjectList](#schemanearearthobjectlist)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="neows---near-earth-object-web-service-neo">neo</h1>

Operations with NearEarthObjects

## Browse the Near Earth Objects service

<a id="opIdbrowseNearEarthObjects"></a>

> Code samples

```bash
curl https://example.com/rest/v1/neo/browse \
  -H 'Accept: application/json'
```

`GET /rest/v1/neo/browse`

Retieve a paginated list of Near Earth Objects

<h3 id="browse-the-near-earth-objects-service-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer(int32)|false|page|
|size|query|integer(int32)|false|size|

> Example responses

> 200 Response

```json
{
  "absolute_magnitude_h": 0,
  "close_approach_data": [
    {
      "close_approach_date": "string",
      "close_approach_date_full": "string",
      "epoch_date_close_approach": 0,
      "miss_distance": {
        "astronomical": "string",
        "kilometers": "string",
        "lunar": "string",
        "miles": "string"
      },
      "orbiting_body": "string",
      "relative_velocity": {
        "kilometers_per_hour": "string",
        "miles_per_hour": "string"
      }
    }
  ],
  "designation": "string",
  "estimated_diameter": {
    "feet": {
      "estimated_diameter_max": 0,
      "estimated_diameter_min": 0
    },
    "kilometers": {
      "estimated_diameter_max": 0,
      "estimated_diameter_min": 0
    },
    "meters": {
      "estimated_diameter_max": 0,
      "estimated_diameter_min": 0
    },
    "miles": {
      "estimated_diameter_max": 0,
      "estimated_diameter_min": 0
    }
  },
  "is_potentially_hazardous_asteroid": true,
  "is_sentry_object": true,
  "name": "string",
  "name_limited": "string",
  "nasa_jpl_url": "string",
  "neo_reference_id": "string",
  "orbital_data": {
    "aphelion_distance": "string",
    "ascending_node_longitude": "string",
    "data_arc_in_days": 0,
    "eccentricity": "string",
    "epoch_osculation": "string",
    "equinox": "string",
    "first_observation_date": "string",
    "inclination": "string",
    "jupiter_tisserand_invariant": "string",
    "last_observation_date": "string",
    "mean_anomaly": "string",
    "mean_motion": "string",
    "minimum_orbit_intersection": "string",
    "observations_used": 0,
    "orbit_class": {
      "orbit_class_description": "string",
      "orbit_class_range": "string",
      "orbit_class_type": "IEO"
    },
    "orbit_determination_date": "string",
    "orbit_id": "string",
    "orbit_uncertainty": "string",
    "orbital_period": "string",
    "perihelion_argument": "string",
    "perihelion_distance": "string",
    "perihelion_time": "string",
    "semi_major_axis": "string"
  },
  "sentry_data": "string"
}
```

<h3 id="browse-the-near-earth-objects-service-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[NearEarthObject](#schemanearearthobject)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Find Near Earth Objects by id

<a id="opIdretrieveNearEarthObjectById"></a>

> Code samples

```bash
curl https://example.com/rest/v1/neo/string \
  -H 'Accept: application/json'
```

`GET /rest/v1/neo/{asteroid_id}`

Retrieve a Near Earth Objects with a given id

<h3 id="find-near-earth-objects-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|asteroid_id|path|string|true|ID of Near Earth Object - (ex: 3729835)|

> Example responses

> 200 Response

```json
{
  "absolute_magnitude_h": 0,
  "close_approach_data": [
    {
      "close_approach_date": "string",
      "close_approach_date_full": "string",
      "epoch_date_close_approach": 0,
      "miss_distance": {
        "astronomical": "string",
        "kilometers": "string",
        "lunar": "string",
        "miles": "string"
      },
      "orbiting_body": "string",
      "relative_velocity": {
        "kilometers_per_hour": "string",
        "miles_per_hour": "string"
      }
    }
  ],
  "designation": "string",
  "estimated_diameter": {
    "feet": {
      "estimated_diameter_max": 0,
      "estimated_diameter_min": 0
    },
    "kilometers": {
      "estimated_diameter_max": 0,
      "estimated_diameter_min": 0
    },
    "meters": {
      "estimated_diameter_max": 0,
      "estimated_diameter_min": 0
    },
    "miles": {
      "estimated_diameter_max": 0,
      "estimated_diameter_min": 0
    }
  },
  "is_potentially_hazardous_asteroid": true,
  "is_sentry_object": true,
  "name": "string",
  "name_limited": "string",
  "nasa_jpl_url": "string",
  "neo_reference_id": "string",
  "orbital_data": {
    "aphelion_distance": "string",
    "ascending_node_longitude": "string",
    "data_arc_in_days": 0,
    "eccentricity": "string",
    "epoch_osculation": "string",
    "equinox": "string",
    "first_observation_date": "string",
    "inclination": "string",
    "jupiter_tisserand_invariant": "string",
    "last_observation_date": "string",
    "mean_anomaly": "string",
    "mean_motion": "string",
    "minimum_orbit_intersection": "string",
    "observations_used": 0,
    "orbit_class": {
      "orbit_class_description": "string",
      "orbit_class_range": "string",
      "orbit_class_type": "IEO"
    },
    "orbit_determination_date": "string",
    "orbit_id": "string",
    "orbit_uncertainty": "string",
    "orbital_period": "string",
    "perihelion_argument": "string",
    "perihelion_distance": "string",
    "perihelion_time": "string",
    "semi_major_axis": "string"
  },
  "sentry_data": "string"
}
```

<h3 id="find-near-earth-objects-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[NearEarthObject](#schemanearearthobject)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="neows---near-earth-object-web-service-neosentry">neosentry</h1>

Operations with Sentry NearEarthObjects

## Retrieve Sentry (Impact Risk ) Near Earth Objects

<a id="opIdretrieveSentryRiskData"></a>

> Code samples

```bash
curl https://example.com/rest/v1/neo/sentry \
  -H 'Accept: application/json'
```

`GET /rest/v1/neo/sentry`

Retrieves Near Earth Objects listed in the NASA sentry data set

<h3 id="retrieve-sentry-impact-risk-near-earth-objects-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|is_active|query|boolean|false|show current list of Sentry objects, or show removed Sentry objects|
|page|query|integer(int32)|false|page|
|size|query|integer(int32)|false|size|

> Example responses

> 200 Response

```json
{
  "links": {},
  "page": {
    "number": 0,
    "size": 0,
    "total_elements": 0,
    "total_pages": 0
  },
  "sentry_objects": [
    {
      "Palermo_scale_max": "string",
      "absolute_magnitude": "string",
      "average_lunar_distance": 0,
      "designation": "string",
      "estimated_diameter": "string",
      "fullname": "string",
      "impact_probability": "string",
      "is_active_sentry_object": true,
      "last_obs": "string",
      "last_obs_jd": "string",
      "palermo_scale_ave": "string",
      "potential_impacts": "string",
      "removal_date": "string",
      "sentryId": "string",
      "torino_scale": "string",
      "v_infinity": "string",
      "year_range_max": "string",
      "year_range_min": "string"
    }
  ]
}
```

<h3 id="retrieve-sentry-impact-risk-near-earth-objects-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[SentryObjectPagingDto](#schemasentryobjectpagingdto)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve Sentry (Impact Risk ) Near Earth Objectby ID

<a id="opIdretrieveSentryRiskDataById"></a>

> Code samples

```bash
curl https://example.com/rest/v1/neo/sentry/string \
  -H 'Accept: application/json'
```

`GET /rest/v1/neo/sentry/{asteroid_id}`

Retrieves Sentry Near Earth Object by ID

<h3 id="retrieve-sentry-impact-risk-near-earth-objectby-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|asteroid_id|path|string|true|ID of NearEarth object.  ID can be SPK_ID, Asteroid des (designation) or Sentry ID|

> Example responses

> 200 Response

```json
{
  "Palermo_scale_max": "string",
  "absolute_magnitude": "string",
  "average_lunar_distance": 0,
  "designation": "string",
  "estimated_diameter": "string",
  "fullname": "string",
  "impact_probability": "string",
  "is_active_sentry_object": true,
  "last_obs": "string",
  "last_obs_jd": "string",
  "palermo_scale_ave": "string",
  "potential_impacts": "string",
  "removal_date": "string",
  "sentryId": "string",
  "torino_scale": "string",
  "v_infinity": "string",
  "year_range_max": "string",
  "year_range_min": "string"
}
```

<h3 id="retrieve-sentry-impact-risk-near-earth-objectby-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[SentryImpactRiskObject](#schemasentryimpactriskobject)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="neows---near-earth-object-web-service-stats">stats</h1>

Stats on Near Earth Object data sets

## Get the Near Earth Object data set totals

<a id="opIdretrieveCurrentNeoStatistics"></a>

> Code samples

```bash
curl https://example.com/rest/v1/stats \
  -H 'Accept: application/json'
```

`GET /rest/v1/stats`

retrieveCurrentNeoStatistics

> Example responses

> 200 Response

```json
{
  "close_approach_count": 0,
  "last_updated": "string",
  "nasa_jpl_url": {
    "authority": "string",
    "content": {},
    "defaultPort": 0,
    "file": "string",
    "host": "string",
    "path": "string",
    "port": 0,
    "protocol": "string",
    "query": "string",
    "ref": "string",
    "userInfo": "string"
  },
  "near_earth_object_count": 0,
  "source": "string"
}
```

<h3 id="get-the-near-earth-object-data-set-totals-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Statistics](#schemastatistics)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_CloseApproachData">CloseApproachData</h2>
<!-- backwards compatibility -->
<a id="schemacloseapproachdata"></a>
<a id="schema_CloseApproachData"></a>
<a id="tocScloseapproachdata"></a>
<a id="tocscloseapproachdata"></a>

```json
{
  "close_approach_date": "string",
  "close_approach_date_full": "string",
  "epoch_date_close_approach": 0,
  "miss_distance": {
    "astronomical": "string",
    "kilometers": "string",
    "lunar": "string",
    "miles": "string"
  },
  "orbiting_body": "string",
  "relative_velocity": {
    "kilometers_per_hour": "string",
    "miles_per_hour": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|close_approach_date|string|false|none|none|
|close_approach_date_full|string|false|none|none|
|epoch_date_close_approach|integer(int64)|false|none|none|
|miss_distance|[MissDistance](#schemamissdistance)|false|none|none|
|orbiting_body|string|false|none|none|
|relative_velocity|[RelVelocity](#schemarelvelocity)|false|none|none|

<h2 id="tocS_EstimatedDiameter">EstimatedDiameter</h2>
<!-- backwards compatibility -->
<a id="schemaestimateddiameter"></a>
<a id="schema_EstimatedDiameter"></a>
<a id="tocSestimateddiameter"></a>
<a id="tocsestimateddiameter"></a>

```json
{
  "estimated_diameter_max": 0,
  "estimated_diameter_min": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|estimated_diameter_max|number(double)|false|none|An estimate of the maximum size of the Asteroid - bases on the abosolute magnitude|
|estimated_diameter_min|number(double)|false|none|An estimate of the minimum size of the Asteroid - bases on the abosolute magnitude|

<h2 id="tocS_EstimatedDiameterContainer">EstimatedDiameterContainer</h2>
<!-- backwards compatibility -->
<a id="schemaestimateddiametercontainer"></a>
<a id="schema_EstimatedDiameterContainer"></a>
<a id="tocSestimateddiametercontainer"></a>
<a id="tocsestimateddiametercontainer"></a>

```json
{
  "feet": {
    "estimated_diameter_max": 0,
    "estimated_diameter_min": 0
  },
  "kilometers": {
    "estimated_diameter_max": 0,
    "estimated_diameter_min": 0
  },
  "meters": {
    "estimated_diameter_max": 0,
    "estimated_diameter_min": 0
  },
  "miles": {
    "estimated_diameter_max": 0,
    "estimated_diameter_min": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|feet|[EstimatedDiameter](#schemaestimateddiameter)|false|none|estimated diameter feet|
|kilometers|[EstimatedDiameter](#schemaestimateddiameter)|false|none|estimated diameter kilometer|
|meters|[EstimatedDiameter](#schemaestimateddiameter)|false|none|estimated diameter meter|
|miles|[EstimatedDiameter](#schemaestimateddiameter)|false|none|estimated diameter miles|

<h2 id="tocS_HashMap_string_List_NearEarthObject_">HashMap_string_List_NearEarthObject_</h2>
<!-- backwards compatibility -->
<a id="schemahashmap_string_list_nearearthobject_"></a>
<a id="schema_HashMap_string_List_NearEarthObject_"></a>
<a id="tocShashmap_string_list_nearearthobject_"></a>
<a id="tocshashmap_string_list_nearearthobject_"></a>

```json
null
```

<h2 id="tocS_MissDistance">MissDistance</h2>
<!-- backwards compatibility -->
<a id="schemamissdistance"></a>
<a id="schema_MissDistance"></a>
<a id="tocSmissdistance"></a>
<a id="tocsmissdistance"></a>

```json
{
  "astronomical": "string",
  "kilometers": "string",
  "lunar": "string",
  "miles": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|astronomical|string|false|none|none|
|kilometers|string|false|none|none|
|lunar|string|false|none|none|
|miles|string|false|none|none|

<h2 id="tocS_NearEarthObject">NearEarthObject</h2>
<!-- backwards compatibility -->
<a id="schemanearearthobject"></a>
<a id="schema_NearEarthObject"></a>
<a id="tocSnearearthobject"></a>
<a id="tocsnearearthobject"></a>

```json
{
  "absolute_magnitude_h": 0,
  "close_approach_data": [
    {
      "close_approach_date": "string",
      "close_approach_date_full": "string",
      "epoch_date_close_approach": 0,
      "miss_distance": {
        "astronomical": "string",
        "kilometers": "string",
        "lunar": "string",
        "miles": "string"
      },
      "orbiting_body": "string",
      "relative_velocity": {
        "kilometers_per_hour": "string",
        "miles_per_hour": "string"
      }
    }
  ],
  "designation": "string",
  "estimated_diameter": {
    "feet": {
      "estimated_diameter_max": 0,
      "estimated_diameter_min": 0
    },
    "kilometers": {
      "estimated_diameter_max": 0,
      "estimated_diameter_min": 0
    },
    "meters": {
      "estimated_diameter_max": 0,
      "estimated_diameter_min": 0
    },
    "miles": {
      "estimated_diameter_max": 0,
      "estimated_diameter_min": 0
    }
  },
  "is_potentially_hazardous_asteroid": true,
  "is_sentry_object": true,
  "name": "string",
  "name_limited": "string",
  "nasa_jpl_url": "string",
  "neo_reference_id": "string",
  "orbital_data": {
    "aphelion_distance": "string",
    "ascending_node_longitude": "string",
    "data_arc_in_days": 0,
    "eccentricity": "string",
    "epoch_osculation": "string",
    "equinox": "string",
    "first_observation_date": "string",
    "inclination": "string",
    "jupiter_tisserand_invariant": "string",
    "last_observation_date": "string",
    "mean_anomaly": "string",
    "mean_motion": "string",
    "minimum_orbit_intersection": "string",
    "observations_used": 0,
    "orbit_class": {
      "orbit_class_description": "string",
      "orbit_class_range": "string",
      "orbit_class_type": "IEO"
    },
    "orbit_determination_date": "string",
    "orbit_id": "string",
    "orbit_uncertainty": "string",
    "orbital_period": "string",
    "perihelion_argument": "string",
    "perihelion_distance": "string",
    "perihelion_time": "string",
    "semi_major_axis": "string"
  },
  "sentry_data": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|absolute_magnitude_h|number(double)|false|none|Is a measure of an asteroids brightness|
|close_approach_data|[[CloseApproachData](#schemacloseapproachdata)]|false|none|Close approach information of the Asteroid|
|designation|string|false|none|none|
|estimated_diameter|[EstimatedDiameterContainer](#schemaestimateddiametercontainer)|false|none|A collection of estimated diameters (kilometers, meters, miles, feet|
|is_potentially_hazardous_asteroid|boolean|false|none|none|
|is_sentry_object|boolean|false|none|none|
|name|string|false|none|none|
|name_limited|string|false|none|none|
|nasa_jpl_url|string|false|none|A Link to the NASA JPL Small-Body Database website|
|neo_reference_id|string|false|none|The reference ID of the Asteroid - This correlates to the SPK ID for the JPL NEO data|
|orbital_data|[OrbitalData](#schemaorbitaldata)|false|none|Orbital information of t1he asteroid|
|sentry_data|string|false|none|none|

<h2 id="tocS_NearEarthObjectList">NearEarthObjectList</h2>
<!-- backwards compatibility -->
<a id="schemanearearthobjectlist"></a>
<a id="schema_NearEarthObjectList"></a>
<a id="tocSnearearthobjectlist"></a>
<a id="tocsnearearthobjectlist"></a>

```json
{
  "element_count": 0,
  "links": {},
  "near_earth_objects": null
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|element_count|integer(int32)|false|none|Number of NEOs in list|
|links|object|false|none|Hypermedia links to collection|
|near_earth_objects|[HashMap_string_List_NearEarthObject_](#schemahashmap_string_list_nearearthobject_)|false|none|A collection of NearEarthObjects|

<h2 id="tocS_OrbitClass">OrbitClass</h2>
<!-- backwards compatibility -->
<a id="schemaorbitclass"></a>
<a id="schema_OrbitClass"></a>
<a id="tocSorbitclass"></a>
<a id="tocsorbitclass"></a>

```json
{
  "orbit_class_description": "string",
  "orbit_class_range": "string",
  "orbit_class_type": "IEO"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|orbit_class_description|string|false|none|none|
|orbit_class_range|string|false|none|none|
|orbit_class_type|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|orbit_class_type|IEO|
|orbit_class_type|ATE|
|orbit_class_type|APO|
|orbit_class_type|AMO|
|orbit_class_type|MCA|
|orbit_class_type|IMB|
|orbit_class_type|MBA|
|orbit_class_type|OMB|
|orbit_class_type|TJN|
|orbit_class_type|CEN|
|orbit_class_type|TNO|
|orbit_class_type|PAA|
|orbit_class_type|HYA|
|orbit_class_type|HYP|
|orbit_class_type|PAR|
|orbit_class_type|COM|
|orbit_class_type|JFC|
|orbit_class_type|HTC|
|orbit_class_type|ETC|
|orbit_class_type|CTC|
|orbit_class_type|JFc|

<h2 id="tocS_OrbitalData">OrbitalData</h2>
<!-- backwards compatibility -->
<a id="schemaorbitaldata"></a>
<a id="schema_OrbitalData"></a>
<a id="tocSorbitaldata"></a>
<a id="tocsorbitaldata"></a>

```json
{
  "aphelion_distance": "string",
  "ascending_node_longitude": "string",
  "data_arc_in_days": 0,
  "eccentricity": "string",
  "epoch_osculation": "string",
  "equinox": "string",
  "first_observation_date": "string",
  "inclination": "string",
  "jupiter_tisserand_invariant": "string",
  "last_observation_date": "string",
  "mean_anomaly": "string",
  "mean_motion": "string",
  "minimum_orbit_intersection": "string",
  "observations_used": 0,
  "orbit_class": {
    "orbit_class_description": "string",
    "orbit_class_range": "string",
    "orbit_class_type": "IEO"
  },
  "orbit_determination_date": "string",
  "orbit_id": "string",
  "orbit_uncertainty": "string",
  "orbital_period": "string",
  "perihelion_argument": "string",
  "perihelion_distance": "string",
  "perihelion_time": "string",
  "semi_major_axis": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|aphelion_distance|string|false|none|none|
|ascending_node_longitude|string|false|none|none|
|data_arc_in_days|integer(int64)|false|none|none|
|eccentricity|string|false|none|none|
|epoch_osculation|string|false|none|none|
|equinox|string|false|none|none|
|first_observation_date|string|false|none|none|
|inclination|string|false|none|none|
|jupiter_tisserand_invariant|string|false|none|none|
|last_observation_date|string|false|none|none|
|mean_anomaly|string|false|none|none|
|mean_motion|string|false|none|none|
|minimum_orbit_intersection|string|false|none|none|
|observations_used|integer(int64)|false|none|none|
|orbit_class|[OrbitClass](#schemaorbitclass)|false|none|none|
|orbit_determination_date|string|false|none|none|
|orbit_id|string|false|none|none|
|orbit_uncertainty|string|false|none|none|
|orbital_period|string|false|none|none|
|perihelion_argument|string|false|none|none|
|perihelion_distance|string|false|none|none|
|perihelion_time|string|false|none|none|
|semi_major_axis|string|false|none|none|

<h2 id="tocS_PageMetaData">PageMetaData</h2>
<!-- backwards compatibility -->
<a id="schemapagemetadata"></a>
<a id="schema_PageMetaData"></a>
<a id="tocSpagemetadata"></a>
<a id="tocspagemetadata"></a>

```json
{
  "number": 0,
  "size": 0,
  "total_elements": 0,
  "total_pages": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|number|integer(int64)|false|none|none|
|size|integer(int64)|false|none|none|
|total_elements|integer(int64)|false|none|none|
|total_pages|integer(int64)|false|none|none|

<h2 id="tocS_RelVelocity">RelVelocity</h2>
<!-- backwards compatibility -->
<a id="schemarelvelocity"></a>
<a id="schema_RelVelocity"></a>
<a id="tocSrelvelocity"></a>
<a id="tocsrelvelocity"></a>

```json
{
  "kilometers_per_hour": "string",
  "miles_per_hour": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kilometers_per_hour|string|false|none|none|
|miles_per_hour|string|false|none|none|

<h2 id="tocS_SentryImpactRiskObject">SentryImpactRiskObject</h2>
<!-- backwards compatibility -->
<a id="schemasentryimpactriskobject"></a>
<a id="schema_SentryImpactRiskObject"></a>
<a id="tocSsentryimpactriskobject"></a>
<a id="tocssentryimpactriskobject"></a>

```json
{
  "Palermo_scale_max": "string",
  "absolute_magnitude": "string",
  "average_lunar_distance": 0,
  "designation": "string",
  "estimated_diameter": "string",
  "fullname": "string",
  "impact_probability": "string",
  "is_active_sentry_object": true,
  "last_obs": "string",
  "last_obs_jd": "string",
  "palermo_scale_ave": "string",
  "potential_impacts": "string",
  "removal_date": "string",
  "sentryId": "string",
  "torino_scale": "string",
  "v_infinity": "string",
  "year_range_max": "string",
  "year_range_min": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Palermo_scale_max|string|false|none|none|
|absolute_magnitude|string|false|none|none|
|average_lunar_distance|number(double)|false|none|none|
|designation|string|false|none|none|
|estimated_diameter|string|false|none|none|
|fullname|string|false|none|none|
|impact_probability|string|false|none|none|
|is_active_sentry_object|boolean|false|none|none|
|last_obs|string|false|none|none|
|last_obs_jd|string|false|none|none|
|palermo_scale_ave|string|false|none|none|
|potential_impacts|string|false|none|none|
|removal_date|string|false|none|none|
|sentryId|string|false|none|none|
|torino_scale|string|false|none|none|
|v_infinity|string|false|none|none|
|year_range_max|string|false|none|none|
|year_range_min|string|false|none|none|

<h2 id="tocS_SentryObjectPagingDto">SentryObjectPagingDto</h2>
<!-- backwards compatibility -->
<a id="schemasentryobjectpagingdto"></a>
<a id="schema_SentryObjectPagingDto"></a>
<a id="tocSsentryobjectpagingdto"></a>
<a id="tocssentryobjectpagingdto"></a>

```json
{
  "links": {},
  "page": {
    "number": 0,
    "size": 0,
    "total_elements": 0,
    "total_pages": 0
  },
  "sentry_objects": [
    {
      "Palermo_scale_max": "string",
      "absolute_magnitude": "string",
      "average_lunar_distance": 0,
      "designation": "string",
      "estimated_diameter": "string",
      "fullname": "string",
      "impact_probability": "string",
      "is_active_sentry_object": true,
      "last_obs": "string",
      "last_obs_jd": "string",
      "palermo_scale_ave": "string",
      "potential_impacts": "string",
      "removal_date": "string",
      "sentryId": "string",
      "torino_scale": "string",
      "v_infinity": "string",
      "year_range_max": "string",
      "year_range_min": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|links|object|false|none|none|
|page|[PageMetaData](#schemapagemetadata)|false|none|none|
|sentry_objects|[[SentryImpactRiskObject](#schemasentryimpactriskobject)]|false|none|none|

<h2 id="tocS_Statistics">Statistics</h2>
<!-- backwards compatibility -->
<a id="schemastatistics"></a>
<a id="schema_Statistics"></a>
<a id="tocSstatistics"></a>
<a id="tocsstatistics"></a>

```json
{
  "close_approach_count": 0,
  "last_updated": "string",
  "nasa_jpl_url": {
    "authority": "string",
    "content": {},
    "defaultPort": 0,
    "file": "string",
    "host": "string",
    "path": "string",
    "port": 0,
    "protocol": "string",
    "query": "string",
    "ref": "string",
    "userInfo": "string"
  },
  "near_earth_object_count": 0,
  "source": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|close_approach_count|integer(int64)|false|none|Number of Close Approach listings across all NEOs listed in NeoWs|
|last_updated|string|false|none|TimeStamp the last time the DB was updated|
|nasa_jpl_url|[URL](#schemaurl)|false|none|none|
|near_earth_object_count|integer(int64)|false|none|Number of NearEarthObjects listed in NeoWs|
|source|string|false|none|none|

<h2 id="tocS_URL">URL</h2>
<!-- backwards compatibility -->
<a id="schemaurl"></a>
<a id="schema_URL"></a>
<a id="tocSurl"></a>
<a id="tocsurl"></a>

```json
{
  "authority": "string",
  "content": {},
  "defaultPort": 0,
  "file": "string",
  "host": "string",
  "path": "string",
  "port": 0,
  "protocol": "string",
  "query": "string",
  "ref": "string",
  "userInfo": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authority|string|false|none|none|
|content|object|false|none|none|
|defaultPort|integer(int32)|false|none|none|
|file|string|false|none|none|
|host|string|false|none|none|
|path|string|false|none|none|
|port|integer(int32)|false|none|none|
|protocol|string|false|none|none|
|query|string|false|none|none|
|ref|string|false|none|none|
|userInfo|string|false|none|none|
