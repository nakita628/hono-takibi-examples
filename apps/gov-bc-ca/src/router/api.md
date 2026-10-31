<h1 id="bc-route-planner-rest-api">BC Route Planner REST API v2.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Finds shortest/fastest route between a start point and one or more stop points on British Columbia's public road network. The BC Route planner [webpage](https://www2.gov.bc.ca/gov/content?id=9D99E684CCD042CD88FADC51E079B4B5) provides additional information.  Here are some geocoded addresses to play with:<br>18 Douglas St,Victoria -123.36962,48.40892<br>1002 Johnson St, Victoria -123.355745,48.426206<br>543 Johnson St, Victoria, BC -123.36907,48.42770 <br>14 Centennial Sq, Victoria, BC -123.36564,48.42863<br>1105 Royal Ave,New Westminster  -122.92009,49.20063<br>808 Jackson Cres, New Westminster -122.90762,49.22558<br>10810 McDonald Rd, Chilliwack -121.93808,49.19859<br>3950 June Springs Rd, Kelowna -119.40751,49.83960<br>1201 Riondel Rd, Kootenay Bay -116.85402,49.74448<br>1201 Riondel Rd, Kootenay Bay -116.832759,49.730500 (parcelPoint)<br>2499 Walbran Pl, Courtenay -124.97295,49.71518<br>2013 Smoke Bluff Rd, Squamish -123.13946,49.70401<br>235 Kelvin Grove Way, Lions Bay -123.23524,49.45035<br>   Please see our <a href=https://github.com/bcgov/api-specs/blob/master/COLLECTION_NOTICE.md#collection-notice target="_blank">data collection notice</a>. 

Please note that you may experience issues when submitting requests to the delivery or test environment if using this [OpenAPI specification](https://github.com/bcgov/api-specs) in other API console viewers. 

[API keys](https://api.gov.bc.ca/devportal/api-directory/740) are unique and can be acquired with a GitHub or IDIR account.

Base URLs:

* <a href="https://router.api.gov.bc.ca/">https://router.api.gov.bc.ca/</a> - Production

* <a href="https://routertst.api.gov.bc.ca/">https://routertst.api.gov.bc.ca/</a> - Test

* <a href="https://router-dev.api.gov.bc.ca/">https://router-dev.api.gov.bc.ca/</a> - Delivery

<a href="http://www2.gov.bc.ca/gov/content?id=D1EE0A405E584363B205CD4353E02C88">Terms of service</a>
Web: <a href="https://dpdd.atlassian.net/servicedesk/customer/portal/1/group/7/">Contact DataBC</a> 
License: <a href="https://www2.gov.bc.ca/gov/content?id=1AAACC9C65754E4D89A118B875E0FBDA">Copyright Province of British Columbia - Access only</a>

<a href="https://github.com/bcgov/ols-router/blob/gh-pages/router-developer-guide.md">Developer Guide</a>

# Authentication

* API Key (apikey)
    - Parameter Name: **apikey**, in: header.

<h1 id="bc-route-planner-rest-api-directions">directions</h1>

## Get the directions, path, distance and travel time between a series of geographic points

> Code samples

```bash
curl 'https://example.com/directions.json?points=-123.70794%2C48.77869%2C-123.53785%2C48.38200' \
  -H "apikey: ${API_KEY}"
```

`GET /directions.{outputFormat}`

Represents the turn-by-turn directions, geometry, distance, and time of the shortest path or fastest path between given start and end points

<h3 id="get-the-directions-path-distance-and-travel-time-between-a-series-of-geographic-points-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|outputFormat|path|string|true|Format of representation|
|points|query|string|true|A list of any number of route points in start to end order. See <a href=https://github.com/bcgov/ols-router/blob/gh-pages/glossary.md#points target='_blank'>points</a>|
|outputSRS|query|integer|false|The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/ols-router/blob/gh-pages/glossary.md#outputSRS target="_blank">outputSRS</a>|
|criteria|query|string|false|Routing criteria to optimize (e.g., shortest, fastest). Default is shortest.|
|distanceUnit|query|string|false|distance unit of measure (e.g., km, mi). Default is km.|
|roundTrip|query|boolean|false|If true, route ends at start point. Default is false.|
|departure|query|string(date-time)|false|departure date and time in internet timestamp notation as defined in RFC 3339, section 5.6 (e.g., 2019-02-28T11:36:00-08:00);<br> Ignored if time-dependency modules are disabled|
|correctSide|query|boolean|false|If true, route starts and ends on same side of road as start/end point.Default is false.|
|disable|query|string|false|A comma-separated list of time-related modules to disable (e.g., sc,tf,ev,td).<br><br>Module names include:<br> sc – ferry schedules; disabled by default; disabled by default and only suitable for demos<br>tf – historic traffic congestion; disabled by default and only suitable for demos<br>ev – road events; disabled by default and only suitable for demos<br>td – time-dependency; disabling this disables sc, tf, and ev modules<br>tr – turn restrictions; if td is disabled, time-dependent turn restrictions are ignored<br>tc - turn costs (e.g., left turns take longer than right turns)|
|routeDescription|query|string|false|Route description (e.g., Shortest route from 1002 Johnson St, Victoria to 1105 Royal Ave,New Westminster)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|outputFormat|json|
|outputFormat|kml|
|outputFormat|html|
|outputSRS|4326|
|outputSRS|4269|
|outputSRS|3005|
|outputSRS|26907|
|outputSRS|26908|
|outputSRS|26909|
|outputSRS|26910|
|outputSRS|26911|
|criteria|shortest|
|criteria|fastest|
|distanceUnit|km|
|distanceUnit|mi|

<h3 id="get-the-directions-path-distance-and-travel-time-between-a-series-of-geographic-points-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|turn-by-turn directions, geometry, distance, and time of the shortest or fastest route|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apikey
</aside>

## Get the directions, path, distance and travel time between a series of geographic points

> Code samples

```bash
curl 'https://example.com/directions.json?points=-123.70794%2C48.77869%2C-123.53785%2C48.38200' \
  -X POST \
  -H "apikey: ${API_KEY}"
```

`POST /directions.{outputFormat}`

Represents the turn-by-turn directions, geometry, distance, and time of the shortest path or fastest path between given start and end points

<h3 id="get-the-directions-path-distance-and-travel-time-between-a-series-of-geographic-points-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|outputFormat|path|string|true|Format of representation|
|points|query|string|true|A list of any number of route points in start to end order. See <a href=https://github.com/bcgov/ols-router/blob/gh-pages/glossary.md#points target='_blank'>points</a>|
|outputSRS|query|integer|false|The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/ols-router/blob/gh-pages/glossary.md#outputSRS target="_blank">outputSRS</a>|
|criteria|query|string|false|Routing criteria to optimize (e.g., shortest, fastest). Default is shortest.|
|distanceUnit|query|string|false|distance unit of measure (e.g., km, mi). Default is km.|
|roundTrip|query|boolean|false|If true, route ends at start point. Default is false.|
|departure|query|string(date-time)|false|departure date and time in internet timestamp notation as defined in RFC 3339, section 5.6 (e.g., 2019-02-28T11:36:00-08:00);<br> Ignored if time-dependency modules are disabled|
|correctSide|query|boolean|false|If true, route starts and ends on same side of road as start/end point.Default is false.|
|disable|query|string|false|A comma-separated list of time-related modules to disable (e.g., sc,tf,ev,td).<br><br>Module names include:<br> sc – ferry schedules; disabled by default; disabled by default and only suitable for demos<br>tf – historic traffic congestion; disabled by default and only suitable for demos<br>ev – road events; disabled by default and only suitable for demos<br>td – time-dependency; disabling this disables sc, tf, and ev modules<br>tr – turn restrictions; if td is disabled, time-dependent turn restrictions are ignored<br>tc - turn costs (e.g., left turns take longer than right turns)|
|routeDescription|query|string|false|Route description (e.g., Shortest route from 1002 Johnson St, Victoria to 1105 Royal Ave,New Westminster)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|outputFormat|json|
|outputFormat|kml|
|outputFormat|html|
|outputSRS|4326|
|outputSRS|4269|
|outputSRS|3005|
|outputSRS|26907|
|outputSRS|26908|
|outputSRS|26909|
|outputSRS|26910|
|outputSRS|26911|
|criteria|shortest|
|criteria|fastest|
|distanceUnit|km|
|distanceUnit|mi|

<h3 id="get-the-directions-path-distance-and-travel-time-between-a-series-of-geographic-points-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|turn-by-turn directions, geometry, distance, and time of the shortest or fastest route|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apikey
</aside>

## Get the directions, optimal path, distance and travel time between a start point and a series of end points which are reordered to minimize total distance or time.

> Code samples

```bash
curl 'https://example.com/optimalDirections.json?points=-123.70794%2C48.77869%2C-123.53785%2C48.38200' \
  -H "apikey: ${API_KEY}"
```

`GET /optimalDirections.{outputFormat}`

Represents the turn-by-turn directions, geometry, distance, and time of the shortest path or fastest path between a start point and a series of end points which are reordered to minimize distance/time

<h3 id="get-the-directions-optimal-path-distance-and-travel-time-between-a-start-point-and-a-series-of-end-points-which-are-reordered-to-minimize-total-distance-or-time-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|outputFormat|path|string|true|Format of representation|
|points|query|string|true|A list of any number of route points in start to end order. See <a href=https://github.com/bcgov/ols-router/blob/gh-pages/glossary.md#points target='_blank'>points</a>|
|outputSRS|query|integer|false|The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/ols-router/blob/gh-pages/glossary.md#outputSRS target="_blank">outputSRS</a>|
|criteria|query|string|false|Routing criteria to optimize (e.g., shortest, fastest). Default is shortest.|
|distanceUnit|query|string|false|distance unit of measure (e.g., km, mi). Default is km.|
|roundTrip|query|boolean|false|If true, route ends at start point. Default is false.|
|departure|query|string(date-time)|false|departure date and time in internet timestamp notation as defined in RFC 3339, section 5.6 (e.g., 2019-02-28T11:36:00-08:00);<br> Ignored if time-dependency modules are disabled|
|correctSide|query|boolean|false|If true, route starts and ends on same side of road as start and end points.Default is false.|
|disable|query|string|false|A comma-separated list of time-related modules to disable (e.g., sc,tf,ev,td).<br><br>Module names include:<br> sc – ferry schedules; disabled by default; disabled by default and only suitable for demos<br>tf – historic traffic congestion; disabled by default and only suitable for demos<br>ev – road events; disabled by default and only suitable for demos<br>td – time-dependency; disabling this disables sc, tf, and ev modules<br>tr – turn restrictions; if td is disabled, time-dependent turn restrictions are ignored<br>tc - turn costs (e.g., left turns take longer than right turns)|
|routeDescription|query|string|false|Route description (e.g., Shortest route from 1002 Johnson St, Victoria to 1105 Royal Ave,New Westminster)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|outputFormat|json|
|outputFormat|kml|
|outputFormat|html|
|outputSRS|4326|
|outputSRS|4269|
|outputSRS|3005|
|outputSRS|26907|
|outputSRS|26908|
|outputSRS|26909|
|outputSRS|26910|
|outputSRS|26911|
|criteria|shortest|
|criteria|fastest|
|distanceUnit|km|
|distanceUnit|mi|

<h3 id="get-the-directions-optimal-path-distance-and-travel-time-between-a-start-point-and-a-series-of-end-points-which-are-reordered-to-minimize-total-distance-or-time-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|turn-by-turn directions, geometry, distance, and time of the shortest or fastest route. End points are reordered to minimize total distance or time.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apikey
</aside>

## Get the directions, optimal path, distance and travel time between a start point and one or more end points which are reordered to minimize total distance or time.

> Code samples

```bash
curl 'https://example.com/optimalDirections.json?points=-123.70794%2C48.77869%2C-123.53785%2C48.38200' \
  -X POST \
  -H "apikey: ${API_KEY}"
```

`POST /optimalDirections.{outputFormat}`

Represents the turn-by-turn directions, geometry, distance, and time of the shortest path or fastest path between a start point and one or more end points which are reordered to minimize distance or time.

<h3 id="get-the-directions-optimal-path-distance-and-travel-time-between-a-start-point-and-one-or-more-end-points-which-are-reordered-to-minimize-total-distance-or-time-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|outputFormat|path|string|true|Format of representation|
|points|query|string|true|A list of any number of route points in start to end order. See <a href=https://github.com/bcgov/ols-router/blob/gh-pages/glossary.md#points target='_blank'>points</a>|
|outputSRS|query|integer|false|The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/ols-router/blob/gh-pages/glossary.md#outputSRS target="_blank">outputSRS</a>|
|criteria|query|string|false|Routing criteria to optimize (e.g., shortest, fastest). Default is shortest.|
|distanceUnit|query|string|false|distance unit of measure (e.g., km, mi). Default is km.|
|roundTrip|query|boolean|false|If true, route ends at start point. Default is false.|
|departure|query|string(date-time)|false|departure date and time in internet timestamp notation as defined in RFC 3339, section 5.6 (e.g., 2019-02-28T11:36:00-08:00);<br> Ignored if time-dependency modules are disabled|
|correctSide|query|boolean|false|If true, route starts and ends on same side of road as start and end points.Default is false.|
|disable|query|string|false|A comma-separated list of time-related modules to disable (e.g., sc,tf,ev,td).<br><br>Module names include:<br> sc – ferry schedules; disabled by default; disabled by default and only suitable for demos<br>tf – historic traffic congestion; disabled by default and only suitable for demos<br>ev – road events; disabled by default and only suitable for demos<br>td – time-dependency; disabling this disables sc, tf, and ev modules<br>tr – turn restrictions; if td is disabled, time-dependent turn restrictions are ignored<br>tc - turn costs (e.g., left turns take longer than right turns)|
|routeDescription|query|string|false|Route description (e.g., Shortest route from 1002 Johnson St, Victoria to 1105 Royal Ave,New Westminster)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|outputFormat|json|
|outputFormat|kml|
|outputFormat|html|
|outputSRS|4326|
|outputSRS|4269|
|outputSRS|3005|
|outputSRS|26907|
|outputSRS|26908|
|outputSRS|26909|
|outputSRS|26910|
|outputSRS|26911|
|criteria|shortest|
|criteria|fastest|
|distanceUnit|km|
|distanceUnit|mi|

<h3 id="get-the-directions-optimal-path-distance-and-travel-time-between-a-start-point-and-one-or-more-end-points-which-are-reordered-to-minimize-total-distance-or-time-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|turn-by-turn directions, geometry, distance, and time of the shortest or fastest route. End points are reordered to minimize total distance or time.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apikey
</aside>

## Get the directions, path, distance and travel time between a series of geographic points for a commercial vehicle

> Code samples

```bash
curl 'https://example.com/truck/directions.json?points=-123.70794%2C48.77869%2C-123.53785%2C48.38200' \
  -H "apikey: ${API_KEY}"
```

`GET /truck/directions.{outputFormat}`

Represents the turn-by-turn directions, geometry, distance, and time of the shortest path or fastest path between given start and end points for a commercial vehicle

<h3 id="get-the-directions-path-distance-and-travel-time-between-a-series-of-geographic-points-for-a-commercial-vehicle-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|outputFormat|path|string|true|Format of representation|
|points|query|string|true|A list of any number of route points in start to end order. See <a href=https://github.com/bcgov/ols-router/blob/gh-pages/glossary.md#points target='_blank'>points</a>|
|outputSRS|query|integer|false|The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/ols-router/blob/gh-pages/glossary.md#outputSRS target="_blank">outputSRS</a>|
|criteria|query|string|false|Routing criteria to optimize (e.g., shortest, fastest). Default is shortest.|
|distanceUnit|query|string|false|distance unit of measure (e.g., km, mi). Default is km.|
|roundTrip|query|boolean|false|If true, route ends at start point. Default is false.|
|departure|query|string(date-time)|false|departure date and time in internet timestamp notation as defined in RFC 3339, section 5.6 (e.g., 2019-02-28T11:36:00-08:00);<br> Ignored if time-dependency modules are disabled|
|correctSide|query|boolean|false|If true, route starts and ends on same side of road as start/end point.Default is false.|
|truckRouteMultiplier|query|integer|false|The truck route multiplier value is used to multiply the cost of using roads that are not truck routes.|
|partition|query|string|false|A comma-separated list of values to identify sections of the route that correspond to truck route sections and non-truck route sections, ferry sections and non-ferry sections, and locality names.  The response includes a partitions attribute, which is an array of objects, each of which has an index (into the route coordinate array) and a value for each of the attributes requested in the partition parameter. Any or all of the following values can be used. <br><br>Partition values:<br> isTruckRoute – Distinguish between truck route sections and non-truck route sections <br> isFerry – Distinguish between ferry sections and non-ferry sections <br> locality – Include the locality name for the route partition|
|disable|query|string|false|A comma-separated list of time-related modules to disable (e.g., sc,tf,ev,td).<br><br>Module names include:<br> sc – ferry schedules; disabled by default; disabled by default and only suitable for demos<br>tf – historic traffic congestion; disabled by default and only suitable for demos<br>ev – road events; disabled by default and only suitable for demos<br>td – time-dependency; disabling this disables sc, tf, and ev modules<br>tr – turn restrictions; if td is disabled, time-dependent turn restrictions are ignored<br>tc - turn costs (e.g., left turns take longer than right turns)|
|routeDescription|query|string|false|Route description (e.g., Shortest route from 1002 Johnson St, Victoria to 1105 Royal Ave,New Westminster)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|outputFormat|json|
|outputFormat|kml|
|outputFormat|html|
|outputSRS|4326|
|outputSRS|4269|
|outputSRS|3005|
|outputSRS|26907|
|outputSRS|26908|
|outputSRS|26909|
|outputSRS|26910|
|outputSRS|26911|
|criteria|shortest|
|criteria|fastest|
|distanceUnit|km|
|distanceUnit|mi|

<h3 id="get-the-directions-path-distance-and-travel-time-between-a-series-of-geographic-points-for-a-commercial-vehicle-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|turn-by-turn directions, geometry, distance, and time of the shortest or fastest route|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apikey
</aside>

## Get the directions, path, distance and travel time between a series of geographic points

> Code samples

```bash
curl 'https://example.com/truck/directions.json?points=-123.70794%2C48.77869%2C-123.53785%2C48.38200' \
  -X POST \
  -H "apikey: ${API_KEY}"
```

`POST /truck/directions.{outputFormat}`

Represents the turn-by-turn directions, geometry, distance, and time of the shortest path or fastest path between given start and end points

<h3 id="get-the-directions-path-distance-and-travel-time-between-a-series-of-geographic-points-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|outputFormat|path|string|true|Format of representation|
|points|query|string|true|A list of any number of route points in start to end order. See <a href=https://github.com/bcgov/ols-router/blob/gh-pages/glossary.md#points target='_blank'>points</a>|
|outputSRS|query|integer|false|The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/ols-router/blob/gh-pages/glossary.md#outputSRS target="_blank">outputSRS</a>|
|criteria|query|string|false|Routing criteria to optimize (e.g., shortest, fastest). Default is shortest.|
|distanceUnit|query|string|false|distance unit of measure (e.g., km, mi). Default is km.|
|roundTrip|query|boolean|false|If true, route ends at start point. Default is false.|
|departure|query|string(date-time)|false|departure date and time in internet timestamp notation as defined in RFC 3339, section 5.6 (e.g., 2019-02-28T11:36:00-08:00);<br> Ignored if time-dependency modules are disabled|
|correctSide|query|boolean|false|If true, route starts and ends on same side of road as start/end point.Default is false.|
|truckRouteMultiplier|query|integer|false|The truck route multiplier value is used to multiply the cost of using roads that are not truck routes.|
|partition|query|string|false|A comma-separated list of values to identify sections of the route that correspond to truck route sections and non-truck route sections, ferry sections and non-ferry sections, and locality names.  The response includes a partitions attribute, which is an array of objects, each of which has an index (into the route coordinate array) and a value for each of the attributes requested in the partition parameter. Any or all of the following values can be used. <br><br>Partition values:<br> isTruckRoute – Distinguish between truck route sections and non-truck route sections <br> isFerry – Distinguish between ferry sections and non-ferry sections <br> locality – Include the locality name for the route partition|
|disable|query|string|false|A comma-separated list of time-related modules to disable (e.g., sc,tf,ev,td).<br><br>Module names include:<br> sc – ferry schedules; disabled by default; disabled by default and only suitable for demos<br>tf – historic traffic congestion; disabled by default and only suitable for demos<br>ev – road events; disabled by default and only suitable for demos<br>td – time-dependency; disabling this disables sc, tf, and ev modules<br>tr – turn restrictions; if td is disabled, time-dependent turn restrictions are ignored<br>tc - turn costs (e.g., left turns take longer than right turns)|
|routeDescription|query|string|false|Route description (e.g., Shortest route from 1002 Johnson St, Victoria to 1105 Royal Ave,New Westminster)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|outputFormat|json|
|outputFormat|kml|
|outputFormat|html|
|outputSRS|4326|
|outputSRS|4269|
|outputSRS|3005|
|outputSRS|26907|
|outputSRS|26908|
|outputSRS|26909|
|outputSRS|26910|
|outputSRS|26911|
|criteria|shortest|
|criteria|fastest|
|distanceUnit|km|
|distanceUnit|mi|

<h3 id="get-the-directions-path-distance-and-travel-time-between-a-series-of-geographic-points-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|turn-by-turn directions, geometry, distance, and time of the shortest or fastest route|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apikey
</aside>

## Get the directions, optimal path, distance and travel time between a start point and a series of end points which are reordered to minimize total distance or time for a commercial vehicle

> Code samples

```bash
curl 'https://example.com/truck/optimalDirections.json?points=-123.70794%2C48.77869%2C-123.53785%2C48.38200' \
  -H "apikey: ${API_KEY}"
```

`GET /truck/optimalDirections.{outputFormat}`

Represents the turn-by-turn directions, geometry, distance, and time of the shortest path or fastest path between a start point and a series of end points which are reordered to minimize distance/time for a commercial vehicle.

<h3 id="get-the-directions-optimal-path-distance-and-travel-time-between-a-start-point-and-a-series-of-end-points-which-are-reordered-to-minimize-total-distance-or-time-for-a-commercial-vehicle-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|outputFormat|path|string|true|Format of representation|
|points|query|string|true|A list of any number of route points in start to end order. See <a href=https://github.com/bcgov/ols-router/blob/gh-pages/glossary.md#points target='_blank'>points</a>|
|outputSRS|query|integer|false|The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/ols-router/blob/gh-pages/glossary.md#outputSRS target="_blank">outputSRS</a>|
|criteria|query|string|false|Routing criteria to optimize (e.g., shortest, fastest). Default is shortest.|
|distanceUnit|query|string|false|distance unit of measure (e.g., km, mi). Default is km.|
|roundTrip|query|boolean|false|If true, route ends at start point. Default is false.|
|departure|query|string(date-time)|false|departure date and time in internet timestamp notation as defined in RFC 3339, section 5.6 (e.g., 2019-02-28T11:36:00-08:00);<br> Ignored if time-dependency modules are disabled|
|correctSide|query|boolean|false|If true, route starts and ends on same side of road as start and end points.Default is false.|
|truckRouteMultiplier|query|integer|false|The truck route multiplier value is used to multiply the cost of using roads that are not truck routes.|
|partition|query|string|false|A comma-separated list of values to identify sections of the route that correspond to truck route sections and non-truck route sections, ferry sections and non-ferry sections, and locality names.  The response includes a partitions attribute, which is an array of objects, each of which has an index (into the route coordinate array) and a value for each of the attributes requested in the partition parameter. Any or all of the following values can be used. <br><br>Partition values:<br> isTruckRoute – Distinguish between truck route sections and non-truck route sections <br> isFerry – Distinguish between ferry sections and non-ferry sections <br> locality – Include the locality name for the route partition|
|disable|query|string|false|A comma-separated list of time-related modules to disable (e.g., sc,tf,ev,td).<br><br>Module names include:<br> sc – ferry schedules; disabled by default; disabled by default and only suitable for demos<br>tf – historic traffic congestion; disabled by default and only suitable for demos<br>ev – road events; disabled by default and only suitable for demos<br>td – time-dependency; disabling this disables sc, tf, and ev modules<br>tr – turn restrictions; if td is disabled, time-dependent turn restrictions are ignored<br>tc - turn costs (e.g., left turns take longer than right turns)|
|routeDescription|query|string|false|Route description (e.g., Shortest route from 1002 Johnson St, Victoria to 1105 Royal Ave,New Westminster)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|outputFormat|json|
|outputFormat|kml|
|outputFormat|html|
|outputSRS|4326|
|outputSRS|4269|
|outputSRS|3005|
|outputSRS|26907|
|outputSRS|26908|
|outputSRS|26909|
|outputSRS|26910|
|outputSRS|26911|
|criteria|shortest|
|criteria|fastest|
|distanceUnit|km|
|distanceUnit|mi|

<h3 id="get-the-directions-optimal-path-distance-and-travel-time-between-a-start-point-and-a-series-of-end-points-which-are-reordered-to-minimize-total-distance-or-time-for-a-commercial-vehicle-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|turn-by-turn directions, geometry, distance, and time of the shortest or fastest route. End points are reordered to minimize total distance or time.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apikey
</aside>

## Get the directions, optimal path, distance and travel time between a start point and one or more end points which are reordered to minimize total distance or time.

> Code samples

```bash
curl 'https://example.com/truck/optimalDirections.json?points=-123.70794%2C48.77869%2C-123.53785%2C48.38200' \
  -X POST \
  -H "apikey: ${API_KEY}"
```

`POST /truck/optimalDirections.{outputFormat}`

Represents the turn-by-turn directions, geometry, distance, and time of the shortest path or fastest path between a start point and one or more end points which are reordered to minimize distance or time.

<h3 id="get-the-directions-optimal-path-distance-and-travel-time-between-a-start-point-and-one-or-more-end-points-which-are-reordered-to-minimize-total-distance-or-time-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|outputFormat|path|string|true|Format of representation|
|points|query|string|true|A list of any number of route points in start to end order. See <a href=https://github.com/bcgov/ols-router/blob/gh-pages/glossary.md#points target='_blank'>points</a>|
|outputSRS|query|integer|false|The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/ols-router/blob/gh-pages/glossary.md#outputSRS target="_blank">outputSRS</a>|
|criteria|query|string|false|Routing criteria to optimize (e.g., shortest, fastest). Default is shortest.|
|distanceUnit|query|string|false|distance unit of measure (e.g., km, mi). Default is km.|
|roundTrip|query|boolean|false|If true, route ends at start point. Default is false.|
|departure|query|string(date-time)|false|departure date and time in internet timestamp notation as defined in RFC 3339, section 5.6 (e.g., 2019-02-28T11:36:00-08:00);<br> Ignored if time-dependency modules are disabled|
|correctSide|query|boolean|false|If true, route starts and ends on same side of road as start and end points.Default is false.|
|truckRouteMultiplier|query|integer|false|The truck route multiplier value is used to multiply the cost of using roads that are not truck routes.|
|partition|query|string|false|A comma-separated list of values to identify sections of the route that correspond to truck route sections and non-truck route sections, ferry sections and non-ferry sections, and locality names.  The response includes a partitions attribute, which is an array of objects, each of which has an index (into the route coordinate array) and a value for each of the attributes requested in the partition parameter. Any or all of the following values can be used. <br><br>Partition values:<br> isTruckRoute – Distinguish between truck route sections and non-truck route sections <br> isFerry – Distinguish between ferry sections and non-ferry sections <br> locality – Include the locality name for the route partition|
|disable|query|string|false|A comma-separated list of time-related modules to disable (e.g., sc,tf,ev,td).<br><br>Module names include:<br> sc – ferry schedules; disabled by default; disabled by default and only suitable for demos<br>tf – historic traffic congestion; disabled by default and only suitable for demos<br>ev – road events; disabled by default and only suitable for demos<br>td – time-dependency; disabling this disables sc, tf, and ev modules<br>tr – turn restrictions; if td is disabled, time-dependent turn restrictions are ignored<br>tc - turn costs (e.g., left turns take longer than right turns)|
|routeDescription|query|string|false|Route description (e.g., Shortest route from 1002 Johnson St, Victoria to 1105 Royal Ave,New Westminster)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|outputFormat|json|
|outputFormat|kml|
|outputFormat|html|
|outputSRS|4326|
|outputSRS|4269|
|outputSRS|3005|
|outputSRS|26907|
|outputSRS|26908|
|outputSRS|26909|
|outputSRS|26910|
|outputSRS|26911|
|criteria|shortest|
|criteria|fastest|
|distanceUnit|km|
|distanceUnit|mi|

<h3 id="get-the-directions-optimal-path-distance-and-travel-time-between-a-start-point-and-one-or-more-end-points-which-are-reordered-to-minimize-total-distance-or-time-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|turn-by-turn directions, geometry, distance, and time of the shortest or fastest route. End points are reordered to minimize total distance or time.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apikey
</aside>

<h1 id="bc-route-planner-rest-api-distance">distance</h1>

## Get distance and travel time between two geographic points

> Code samples

```bash
curl 'https://example.com/distance.json?points=-123.70794%2C48.77869%2C-123.53785%2C48.38200' \
  -H "apikey: ${API_KEY}"
```

`GET /distance.{outputFormat}`

Represents the distance and time of the shortest or fastest path between given start and end points.

<h3 id="get-distance-and-travel-time-between-two-geographic-points-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|outputFormat|path|string|true|Format of representation|
|points|query|string|true|A list of any number of route points in start to end order. See <a href=https://github.com/bcgov/ols-router/blob/gh-pages/glossary.md#points target='_blank'>points</a>|
|outputSRS|query|integer|false|The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/ols-router/blob/gh-pages/glossary.md#outputSRS target="_blank">outputSRS</a>|
|criteria|query|string|false|Routing criteria to optimize (e.g., shortest, fastest). Default is shortest.|
|distanceUnit|query|string|false|distance unit of measure (e.g., km, mi). Default is km.|
|roundTrip|query|boolean|false|If true, route ends at start point. Default is false.|
|departure|query|string(date-time)|false|departure date and time in internet timestamp notation as defined in RFC 3339, section 5.6 (e.g., 2019-02-28T11:36:00-08:00);<br> Ignored if time-dependency modules are disabled|
|correctSide|query|boolean|false|If true, route starts and ends on same side of road as start and end points.Default is false.|
|disable|query|string|false|A comma-separated list of time-related modules to disable (e.g., sc,tf,ev,td).<br><br>Module names include:<br> sc – ferry schedules; disabled by default; disabled by default and only suitable for demos<br>tf – historic traffic congestion; disabled by default and only suitable for demos<br>ev – road events; disabled by default and only suitable for demos<br>td – time-dependency; disabling this disables sc, tf, and ev modules<br>tr – turn restrictions; if td is disabled, time-dependent turn restrictions are ignored<br>tc - turn costs (e.g., left turns take longer than right turns)|
|routeDescription|query|string|false|Route description (e.g., Shortest route from 1002 Johnson St, Victoria to 1105 Royal Ave,New Westminster)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|outputFormat|json|
|outputFormat|kml|
|outputFormat|html|
|outputSRS|4326|
|outputSRS|4269|
|outputSRS|3005|
|outputSRS|26907|
|outputSRS|26908|
|outputSRS|26909|
|outputSRS|26910|
|outputSRS|26911|
|criteria|shortest|
|criteria|fastest|
|distanceUnit|km|
|distanceUnit|mi|

<h3 id="get-distance-and-travel-time-between-two-geographic-points-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Distance and time of the shortest or fastest route|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apikey
</aside>

## Get distance and travel time between two geographic points

> Code samples

```bash
curl 'https://example.com/distance.json?points=-123.70794%2C48.77869%2C-123.53785%2C48.38200' \
  -X POST \
  -H "apikey: ${API_KEY}"
```

`POST /distance.{outputFormat}`

Represents the distance and time of the shortest or fastest path between given start and end points.

<h3 id="get-distance-and-travel-time-between-two-geographic-points-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|outputFormat|path|string|true|Format of representation|
|points|query|string|true|A list of any number of route points in start to end order. See <a href=https://github.com/bcgov/ols-router/blob/gh-pages/glossary.md#points target='_blank'>points</a>|
|outputSRS|query|integer|false|The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/ols-router/blob/gh-pages/glossary.md#outputSRS target="_blank">outputSRS</a>|
|criteria|query|string|false|Routing criteria to optimize (e.g., shortest, fastest). Default is shortest.|
|distanceUnit|query|string|false|distance unit of measure (e.g., km, mi). Default is km.|
|roundTrip|query|boolean|false|If true, route ends at start point. Default is false.|
|departure|query|string(date-time)|false|departure date and time in internet timestamp notation as defined in RFC 3339, section 5.6 (e.g., 2019-02-28T11:36:00-08:00);<br> Ignored if time-dependency modules are disabled|
|correctSide|query|boolean|false|If true, route starts and ends on same side of road as start and end points.Default is false.|
|disable|query|string|false|A comma-separated list of time-related modules to disable (e.g., sc,tf,ev,td).<br><br>Module names include:<br> sc – ferry schedules; disabled by default; disabled by default and only suitable for demos<br>tf – historic traffic congestion; disabled by default and only suitable for demos<br>ev – road events; disabled by default and only suitable for demos<br>td – time-dependency; disabling this disables sc, tf, and ev modules<br>tr – turn restrictions; if td is disabled, time-dependent turn restrictions are ignored<br>tc - turn costs (e.g., left turns take longer than right turns)|
|routeDescription|query|string|false|Route description (e.g., Shortest route from 1002 Johnson St, Victoria to 1105 Royal Ave,New Westminster)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|outputFormat|json|
|outputFormat|kml|
|outputFormat|html|
|outputSRS|4326|
|outputSRS|4269|
|outputSRS|3005|
|outputSRS|26907|
|outputSRS|26908|
|outputSRS|26909|
|outputSRS|26910|
|outputSRS|26911|
|criteria|shortest|
|criteria|fastest|
|distanceUnit|km|
|distanceUnit|mi|

<h3 id="get-distance-and-travel-time-between-two-geographic-points-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Distance and time of the shortest or fastest route|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apikey
</aside>

## Get distance and travel time between each pair of geographic points

> Code samples

```bash
curl 'https://example.com/distance/betweenPairs.json?fromPoints=-123.70794%2C48.77869%2C-123.53785%2C48.38200&toPoints=-124.972951%2C49.715181%2C-123.139464%2C49.704015' \
  -H "apikey: ${API_KEY}"
```

`GET /distance/betweenPairs.{outputFormat}`

Represents the distance and time of the shortest or fastest paths between all pairs of fromPoints and toPoints. The number of fromPoints times the number of toPoints should not exceed 100 or the request will time out.

<h3 id="get-distance-and-travel-time-between-each-pair-of-geographic-points-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|outputFormat|path|string|true|Format of representation|
|fromPoints|query|string|true|A comma-separated list of origin points.  See <a href=https://github.com/bcgov/ols-router/blob/gh-pages/glossary.md#fromPoints target='_blank'>fromPoints</a>|
|toPoints|query|string|true|A comma-separated list of destination points. See <a href=https://github.com/bcgov/ols-router/blob/gh-pages/glossary.md#toPoints target='_blank'>toPoints</a>|
|outputSRS|query|integer|false|The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/ols-router/blob/gh-pages/glossary.md#outputSRS target="_blank">outputSRS</a>|
|criteria|query|string|false|Routing criteria to optimize (e.g., shortest, fastest). Default is shortest.|
|distanceUnit|query|string|false|distance unit of measure (e.g., km, mi). Default is km.|
|departure|query|string(date-time)|false|departure date and time in internet timestamp notation as defined in RFC 3339, section 5.6 (e.g., 2019-02-28T11:36:00-08:00);<br> Ignored if time-dependency modules are disabled|
|correctSide|query|boolean|false|If true, route starts and ends on same side of road as start and end points.Default is false.|
|disable|query|string|false|A comma-separated list of time-related modules to disable (e.g., sc,tf,ev,td).<br><br>Module names include:<br> sc – ferry schedules; disabled by default; disabled by default and only suitable for demos<br>tf – historic traffic congestion; disabled by default and only suitable for demos<br>ev – road events; disabled by default and only suitable for demos<br>td – time-dependency; disabling this disables sc, tf, and ev modules<br>tr – turn restrictions; if td is disabled, time-dependent turn restrictions are ignored<br>tc - turn costs (e.g., left turns take longer than right turns)|
|routeDescription|query|string|false|Route description (e.g., Shortest route from 1002 Johnson St, Victoria to 1105 Royal Ave,New Westminster)|
|maxPairs|query|integer|false|The maximum number of pairs to return for each toPoint.  Pairs are ordered by distance/time from fromPoint. For example, given 1 fromPoint, and 10 toPoints, and maxPairs=1 , return the nearest toPoint to the fromPoint. Given 3 fromPoints and 10 toPoints, maxPairs=3 means return the 3 nearest toPoints to each fromPoint.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|outputFormat|json|
|outputFormat|html|
|outputSRS|4326|
|outputSRS|4269|
|outputSRS|3005|
|outputSRS|26907|
|outputSRS|26908|
|outputSRS|26909|
|outputSRS|26910|
|outputSRS|26911|
|criteria|shortest|
|criteria|fastest|
|distanceUnit|km|
|distanceUnit|mi|

<h3 id="get-distance-and-travel-time-between-each-pair-of-geographic-points-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of routes and their route distances/times.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apikey
</aside>

## Get distance and travel time between each pair of geographic points

> Code samples

```bash
curl 'https://example.com/distance/betweenPairs.json?fromPoints=-123.70794%2C48.77869%2C-123.53785%2C48.38200&toPoints=-124.972951%2C49.715181%2C-123.139464%2C49.704015' \
  -X POST \
  -H "apikey: ${API_KEY}"
```

`POST /distance/betweenPairs.{outputFormat}`

Represents the distance and time of the shortest or fastest paths between all pairs of fromPoints and toPoints. The number of fromPoints times the number of toPoints should not exceed 100 or the request will time out.

<h3 id="get-distance-and-travel-time-between-each-pair-of-geographic-points-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|outputFormat|path|string|true|Format of representation|
|fromPoints|query|string|true|A comma-separated list of origin points.  See <a href=https://github.com/bcgov/ols-router/blob/gh-pages/glossary.md#fromPoints target='_blank'>fromPoints</a>|
|toPoints|query|string|true|A comma-separated list of destination points. See <a href=https://github.com/bcgov/ols-router/blob/gh-pages/glossary.md#toPoints target='_blank'>toPoints</a>|
|outputSRS|query|integer|false|The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/ols-router/blob/gh-pages/glossary.md#outputSRS target="_blank">outputSRS</a>|
|criteria|query|string|false|Routing criteria to optimize (e.g., shortest, fastest). Default is shortest.|
|distanceUnit|query|string|false|distance unit of measure (e.g., km, mi). Default is km.|
|departure|query|string(date-time)|false|departure date and time in internet timestamp notation as defined in RFC 3339, section 5.6 (e.g., 2019-02-28T11:36:00-08:00);<br> Ignored if time-dependency modules are disabled|
|correctSide|query|boolean|false|If true, route starts and ends on same side of road as start and end points.Default is false.|
|disable|query|string|false|A comma-separated list of time-related modules to disable (e.g., sc,tf,ev,td).<br><br>Module names include:<br> sc – ferry schedules; disabled by default; disabled by default and only suitable for demos<br>tf – historic traffic congestion; disabled by default and only suitable for demos<br>ev – road events; disabled by default and only suitable for demos<br>td – time-dependency; disabling this disables sc, tf, and ev modules<br>tr – turn restrictions; if td is disabled, time-dependent turn restrictions are ignored<br>tc - turn costs (e.g., left turns take longer than right turns)|
|routeDescription|query|string|false|Route description (e.g., Shortest route from 1002 Johnson St, Victoria to 1105 Royal Ave,New Westminster)|
|maxPairs|query|integer|false|The maximum number of pairs to return for each toPoint.  Pairs are ordered by distance/time from fromPoint. For example, given 1 fromPoint, and 10 toPoints, and maxPairs=1 , return the nearest toPoint to the fromPoint. Given 3 fromPoints and 10 toPoints, maxPairs=3 means return the 3 nearest toPoints to each fromPoint.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|outputFormat|json|
|outputFormat|html|
|outputSRS|4326|
|outputSRS|4269|
|outputSRS|3005|
|outputSRS|26907|
|outputSRS|26908|
|outputSRS|26909|
|outputSRS|26910|
|outputSRS|26911|
|criteria|shortest|
|criteria|fastest|
|distanceUnit|km|
|distanceUnit|mi|

<h3 id="get-distance-and-travel-time-between-each-pair-of-geographic-points-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of routes and their route distances/times.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apikey
</aside>

## Get distance and travel time between two geographic points for a commercial vehicle

> Code samples

```bash
curl 'https://example.com/truck/distance.json?points=-123.70794%2C48.77869%2C-123.53785%2C48.38200' \
  -H "apikey: ${API_KEY}"
```

`GET /truck/distance.{outputFormat}`

Represents the distance and time of the shortest or fastest path between given start and end points.

<h3 id="get-distance-and-travel-time-between-two-geographic-points-for-a-commercial-vehicle-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|outputFormat|path|string|true|Format of representation|
|points|query|string|true|A list of any number of route points in start to end order. See <a href=https://github.com/bcgov/ols-router/blob/gh-pages/glossary.md#points target='_blank'>points</a>|
|outputSRS|query|integer|false|The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/ols-router/blob/gh-pages/glossary.md#outputSRS target="_blank">outputSRS</a>|
|criteria|query|string|false|Routing criteria to optimize (e.g., shortest, fastest). Default is shortest.|
|distanceUnit|query|string|false|distance unit of measure (e.g., km, mi). Default is km.|
|roundTrip|query|boolean|false|If true, route ends at start point. Default is false.|
|departure|query|string(date-time)|false|departure date and time in internet timestamp notation as defined in RFC 3339, section 5.6 (e.g., 2019-02-28T11:36:00-08:00);<br> Ignored if time-dependency modules are disabled|
|correctSide|query|boolean|false|If true, route starts and ends on same side of road as start and end points.Default is false.|
|truckRouteMultiplier|query|integer|false|The truck route multiplier value is used to multiply the cost of using roads that are not truck routes.|
|disable|query|string|false|A comma-separated list of time-related modules to disable (e.g., sc,tf,ev,td).<br><br>Module names include:<br> sc – ferry schedules; disabled by default; disabled by default and only suitable for demos<br>tf – historic traffic congestion; disabled by default and only suitable for demos<br>ev – road events; disabled by default and only suitable for demos<br>td – time-dependency; disabling this disables sc, tf, and ev modules<br>tr – turn restrictions; if td is disabled, time-dependent turn restrictions are ignored<br>tc - turn costs (e.g., left turns take longer than right turns)|
|routeDescription|query|string|false|Route description (e.g., Shortest route from 1002 Johnson St, Victoria to 1105 Royal Ave,New Westminster)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|outputFormat|json|
|outputFormat|kml|
|outputFormat|html|
|outputSRS|4326|
|outputSRS|4269|
|outputSRS|3005|
|outputSRS|26907|
|outputSRS|26908|
|outputSRS|26909|
|outputSRS|26910|
|outputSRS|26911|
|criteria|shortest|
|criteria|fastest|
|distanceUnit|km|
|distanceUnit|mi|

<h3 id="get-distance-and-travel-time-between-two-geographic-points-for-a-commercial-vehicle-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Distance and time of the shortest or fastest route|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apikey
</aside>

## Get distance and travel time between two geographic points

> Code samples

```bash
curl 'https://example.com/truck/distance.json?points=-123.70794%2C48.77869%2C-123.53785%2C48.38200' \
  -X POST \
  -H "apikey: ${API_KEY}"
```

`POST /truck/distance.{outputFormat}`

Represents the distance and time of the shortest or fastest path between given start and end points.

<h3 id="get-distance-and-travel-time-between-two-geographic-points-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|outputFormat|path|string|true|Format of representation|
|points|query|string|true|A list of any number of route points in start to end order. See <a href=https://github.com/bcgov/ols-router/blob/gh-pages/glossary.md#points target='_blank'>points</a>|
|outputSRS|query|integer|false|The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/ols-router/blob/gh-pages/glossary.md#outputSRS target="_blank">outputSRS</a>|
|criteria|query|string|false|Routing criteria to optimize (e.g., shortest, fastest). Default is shortest.|
|distanceUnit|query|string|false|distance unit of measure (e.g., km, mi). Default is km.|
|roundTrip|query|boolean|false|If true, route ends at start point. Default is false.|
|departure|query|string(date-time)|false|departure date and time in internet timestamp notation as defined in RFC 3339, section 5.6 (e.g., 2019-02-28T11:36:00-08:00);<br> Ignored if time-dependency modules are disabled|
|correctSide|query|boolean|false|If true, route starts and ends on same side of road as start and end points.Default is false.|
|disable|query|string|false|A comma-separated list of time-related modules to disable (e.g., sc,tf,ev,td).<br><br>Module names include:<br> sc – ferry schedules; disabled by default; disabled by default and only suitable for demos<br>tf – historic traffic congestion; disabled by default and only suitable for demos<br>ev – road events; disabled by default and only suitable for demos<br>td – time-dependency; disabling this disables sc, tf, and ev modules<br>tr – turn restrictions; if td is disabled, time-dependent turn restrictions are ignored<br>tc - turn costs (e.g., left turns take longer than right turns)|
|routeDescription|query|string|false|Route description (e.g., Shortest route from 1002 Johnson St, Victoria to 1105 Royal Ave,New Westminster)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|outputFormat|json|
|outputFormat|kml|
|outputFormat|html|
|outputSRS|4326|
|outputSRS|4269|
|outputSRS|3005|
|outputSRS|26907|
|outputSRS|26908|
|outputSRS|26909|
|outputSRS|26910|
|outputSRS|26911|
|criteria|shortest|
|criteria|fastest|
|distanceUnit|km|
|distanceUnit|mi|

<h3 id="get-distance-and-travel-time-between-two-geographic-points-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Distance and time of the shortest or fastest route|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apikey
</aside>

## Get distance and travel time between each pair of geographic points for a commercial vehicle

> Code samples

```bash
curl 'https://example.com/truck/distance/betweenPairs.json?fromPoints=-123.70794%2C48.77869%2C-123.53785%2C48.38200&toPoints=-124.972951%2C49.715181%2C-123.139464%2C49.704015' \
  -H "apikey: ${API_KEY}"
```

`GET /truck/distance/betweenPairs.{outputFormat}`

Represents the distance and time of the shortest or fastest paths between all pairs of fromPoints and toPoints for a commercial vehicle. The number of fromPoints times the number of toPoints should not exceed 100 or the request will time out.

<h3 id="get-distance-and-travel-time-between-each-pair-of-geographic-points-for-a-commercial-vehicle-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|outputFormat|path|string|true|Format of representation|
|fromPoints|query|string|true|A comma-separated list of origin points.  See <a href=https://github.com/bcgov/ols-router/blob/gh-pages/glossary.md#fromPoints target='_blank'>fromPoints</a>|
|toPoints|query|string|true|A comma-separated list of destination points. See <a href=https://github.com/bcgov/ols-router/blob/gh-pages/glossary.md#toPoints target='_blank'>toPoints</a>|
|outputSRS|query|integer|false|The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/ols-router/blob/gh-pages/glossary.md#outputSRS target="_blank">outputSRS</a>|
|criteria|query|string|false|Routing criteria to optimize (e.g., shortest, fastest). Default is shortest.|
|distanceUnit|query|string|false|distance unit of measure (e.g., km, mi). Default is km.|
|departure|query|string(date-time)|false|departure date and time in internet timestamp notation as defined in RFC 3339, section 5.6 (e.g., 2019-02-28T11:36:00-08:00);<br> Ignored if time-dependency modules are disabled|
|correctSide|query|boolean|false|If true, route starts and ends on same side of road as start and end points.Default is false.|
|disable|query|string|false|A comma-separated list of time-related modules to disable (e.g., sc,tf,ev,td).<br><br>Module names include:<br> sc – ferry schedules; disabled by default; disabled by default and only suitable for demos<br>tf – historic traffic congestion; disabled by default and only suitable for demos<br>ev – road events; disabled by default and only suitable for demos<br>td – time-dependency; disabling this disables sc, tf, and ev modules<br>tr – turn restrictions; if td is disabled, time-dependent turn restrictions are ignored<br>tc - turn costs (e.g., left turns take longer than right turns)|
|routeDescription|query|string|false|Route description (e.g., Shortest route from 1002 Johnson St, Victoria to 1105 Royal Ave,New Westminster)|
|maxPairs|query|integer|false|The maximum number of pairs to return for each toPoint.  Pairs are ordered by distance/time from fromPoint. For example, given 1 fromPoint, and 10 toPoints, and maxPairs=1 , return the nearest toPoint to the fromPoint. Given 3 fromPoints and 10 toPoints, maxPairs=3 means return the 3 nearest toPoints to each fromPoint.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|outputFormat|json|
|outputFormat|html|
|outputSRS|4326|
|outputSRS|4269|
|outputSRS|3005|
|outputSRS|26907|
|outputSRS|26908|
|outputSRS|26909|
|outputSRS|26910|
|outputSRS|26911|
|criteria|shortest|
|criteria|fastest|
|distanceUnit|km|
|distanceUnit|mi|

<h3 id="get-distance-and-travel-time-between-each-pair-of-geographic-points-for-a-commercial-vehicle-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of routes and their route distances/times.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apikey
</aside>

## Get distance and travel time between each pair of geographic points

> Code samples

```bash
curl 'https://example.com/truck/distance/betweenPairs.json?fromPoints=-123.70794%2C48.77869%2C-123.53785%2C48.38200&toPoints=-124.972951%2C49.715181%2C-123.139464%2C49.704015' \
  -X POST \
  -H "apikey: ${API_KEY}"
```

`POST /truck/distance/betweenPairs.{outputFormat}`

Represents the distance and time of the shortest or fastest paths between all pairs of fromPoints and toPoints. The number of fromPoints times the number of toPoints should not exceed 100 or the request will time out.

<h3 id="get-distance-and-travel-time-between-each-pair-of-geographic-points-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|outputFormat|path|string|true|Format of representation|
|fromPoints|query|string|true|A comma-separated list of origin points.  See <a href=https://github.com/bcgov/ols-router/blob/gh-pages/glossary.md#fromPoints target='_blank'>fromPoints</a>|
|toPoints|query|string|true|A comma-separated list of destination points. See <a href=https://github.com/bcgov/ols-router/blob/gh-pages/glossary.md#toPoints target='_blank'>toPoints</a>|
|outputSRS|query|integer|false|The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/ols-router/blob/gh-pages/glossary.md#outputSRS target="_blank">outputSRS</a>|
|criteria|query|string|false|Routing criteria to optimize (e.g., shortest, fastest). Default is shortest.|
|distanceUnit|query|string|false|distance unit of measure (e.g., km, mi). Default is km.|
|departure|query|string(date-time)|false|departure date and time in internet timestamp notation as defined in RFC 3339, section 5.6 (e.g., 2019-02-28T11:36:00-08:00);<br> Ignored if time-dependency modules are disabled|
|correctSide|query|boolean|false|If true, route starts and ends on same side of road as start and end points.Default is false.|
|disable|query|string|false|A comma-separated list of time-related modules to disable (e.g., sc,tf,ev,td).<br><br>Module names include:<br> sc – ferry schedules; disabled by default; disabled by default and only suitable for demos<br>tf – historic traffic congestion; disabled by default and only suitable for demos<br>ev – road events; disabled by default and only suitable for demos<br>td – time-dependency; disabling this disables sc, tf, and ev modules<br>tr – turn restrictions; if td is disabled, time-dependent turn restrictions are ignored<br>tc - turn costs (e.g., left turns take longer than right turns)|
|routeDescription|query|string|false|Route description (e.g., Shortest route from 1002 Johnson St, Victoria to 1105 Royal Ave,New Westminster)|
|maxPairs|query|integer|false|The maximum number of pairs to return for each toPoint.  Pairs are ordered by distance/time from fromPoint. For example, given 1 fromPoint, and 10 toPoints, and maxPairs=1 , return the nearest toPoint to the fromPoint. Given 3 fromPoints and 10 toPoints, maxPairs=3 means return the 3 nearest toPoints to each fromPoint.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|outputFormat|json|
|outputFormat|html|
|outputSRS|4326|
|outputSRS|4269|
|outputSRS|3005|
|outputSRS|26907|
|outputSRS|26908|
|outputSRS|26909|
|outputSRS|26910|
|outputSRS|26911|
|criteria|shortest|
|criteria|fastest|
|distanceUnit|km|
|distanceUnit|mi|

<h3 id="get-distance-and-travel-time-between-each-pair-of-geographic-points-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of routes and their route distances/times.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apikey
</aside>

<h1 id="bc-route-planner-rest-api-route">route</h1>

## Get the optimal path, distance and travel time between a start point and a series of end points which are reordered to minimize total distance or time.

> Code samples

```bash
curl 'https://example.com/optimalRoute.json?points=-123.70794%2C48.77869%2C-123.53785%2C48.38200' \
  -H "apikey: ${API_KEY}"
```

`GET /optimalRoute.{outputFormat}`

Represents the geometry, distance, and time of the shortest or fastest path between a start point and a series of end points which are reordered to minimize distance or time

<h3 id="get-the-optimal-path-distance-and-travel-time-between-a-start-point-and-a-series-of-end-points-which-are-reordered-to-minimize-total-distance-or-time-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|outputFormat|path|string|true|Format of representation|
|points|query|string|true|A list of any number of route points in start to end order. See <a href=https://github.com/bcgov/ols-router/blob/gh-pages/glossary.md#points target='_blank'>points</a>|
|outputSRS|query|integer|false|The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/ols-router/blob/gh-pages/glossary.md#outputSRS target="_blank">outputSRS</a>|
|criteria|query|string|false|Routing criteria to optimize (e.g., shortest, fastest). Default is shortest.|
|distanceUnit|query|string|false|distance unit of measure (e.g., km, mi). Default is km.|
|roundTrip|query|boolean|false|If true, route ends at start point. Default is false.|
|departure|query|string(date-time)|false|departure date and time in internet timestamp notation as defined in RFC 3339, section 5.6 (e.g., 2019-02-28T11:36:00-08:00);<br> Ignored if time-dependency modules are disabled|
|correctSide|query|boolean|false|If true, route starts and ends on same side of road as start and end points.Default is false.|
|disable|query|string|false|A comma-separated list of time-related modules to disable (e.g., sc,tf,ev,td).<br><br>Module names include:<br> sc – ferry schedules; disabled by default; disabled by default and only suitable for demos<br>tf – historic traffic congestion; disabled by default and only suitable for demos<br>ev – road events; disabled by default and only suitable for demos<br>td – time-dependency; disabling this disables sc, tf, and ev modules<br>tr – turn restrictions; if td is disabled, time-dependent turn restrictions are ignored<br>tc - turn costs (e.g., left turns take longer than right turns)|
|routeDescription|query|string|false|Route description (e.g., Shortest route from 1002 Johnson St, Victoria to 1105 Royal Ave,New Westminster)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|outputFormat|json|
|outputFormat|kml|
|outputFormat|html|
|outputSRS|4326|
|outputSRS|4269|
|outputSRS|3005|
|outputSRS|26907|
|outputSRS|26908|
|outputSRS|26909|
|outputSRS|26910|
|outputSRS|26911|
|criteria|shortest|
|criteria|fastest|
|distanceUnit|km|
|distanceUnit|mi|

<h3 id="get-the-optimal-path-distance-and-travel-time-between-a-start-point-and-a-series-of-end-points-which-are-reordered-to-minimize-total-distance-or-time-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Geometry, distance, and time of the shortest or fastest route. End points are reordered to minimize total distance or time|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apikey
</aside>

## Get the path, distance and travel time between a start point and a series of end points which are reordered to minimize total distance or time.

> Code samples

```bash
curl 'https://example.com/optimalRoute.json?points=-123.70794%2C48.77869%2C-123.53785%2C48.38200' \
  -X POST \
  -H "apikey: ${API_KEY}"
```

`POST /optimalRoute.{outputFormat}`

Represents the geometry, distance, and time of the shortest or fastest path between a start point and a series of end points which are reordered to minimize total distance or time.

<h3 id="get-the-path-distance-and-travel-time-between-a-start-point-and-a-series-of-end-points-which-are-reordered-to-minimize-total-distance-or-time-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|outputFormat|path|string|true|Format of representation|
|points|query|string|true|A list of any number of route points in start to end order. See <a href=https://github.com/bcgov/ols-router/blob/gh-pages/glossary.md#points target='_blank'>points</a>|
|outputSRS|query|integer|false|The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/ols-router/blob/gh-pages/glossary.md#outputSRS target="_blank">outputSRS</a>|
|criteria|query|string|false|Routing criteria to optimize (e.g., shortest, fastest). Default is shortest.|
|distanceUnit|query|string|false|distance unit of measure (e.g., km, mi). Default is km.|
|roundTrip|query|boolean|false|If true, route ends at start point. Default is false.|
|departure|query|string(date-time)|false|departure date and time in internet timestamp notation as defined in RFC 3339, section 5.6 (e.g., 2019-02-28T11:36:00-08:00);<br> Ignored if time-dependency modules are disabled|
|correctSide|query|boolean|false|If true, route starts and ends on same side of road as start and end points.Default is false.|
|disable|query|string|false|A comma-separated list of time-related modules to disable (e.g., sc,tf,ev,td).<br><br>Module names include:<br> sc – ferry schedules; disabled by default; disabled by default and only suitable for demos<br>tf – historic traffic congestion; disabled by default and only suitable for demos<br>ev – road events; disabled by default and only suitable for demos<br>td – time-dependency; disabling this disables sc, tf, and ev modules<br>tr – turn restrictions; if td is disabled, time-dependent turn restrictions are ignored<br>tc - turn costs (e.g., left turns take longer than right turns)|
|routeDescription|query|string|false|Route description (e.g., Shortest route from 1002 Johnson St, Victoria to 1105 Royal Ave,New Westminster)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|outputFormat|json|
|outputFormat|kml|
|outputFormat|html|
|outputSRS|4326|
|outputSRS|4269|
|outputSRS|3005|
|outputSRS|26907|
|outputSRS|26908|
|outputSRS|26909|
|outputSRS|26910|
|outputSRS|26911|
|criteria|shortest|
|criteria|fastest|
|distanceUnit|km|
|distanceUnit|mi|

<h3 id="get-the-path-distance-and-travel-time-between-a-start-point-and-a-series-of-end-points-which-are-reordered-to-minimize-total-distance-or-time-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Geometry, distance, and time of the shortest or fastest route. End points are reordered to minimize total distance or time.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apikey
</aside>

## Get the path, distance and travel time between a series of geographic points

> Code samples

```bash
curl 'https://example.com/route.json?points=-123.70794%2C48.77869%2C-123.53785%2C48.38200' \
  -H "apikey: ${API_KEY}"
```

`GET /route.{outputFormat}`

Represents the geometry, distance, and time of the shortest or fastest path between given start and end points.

<h3 id="get-the-path-distance-and-travel-time-between-a-series-of-geographic-points-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|outputFormat|path|string|true|Format of representation|
|points|query|string|true|A list of any number of route points in start to end order. See <a href=https://github.com/bcgov/ols-router/blob/gh-pages/glossary.md#points target='_blank'>points</a>|
|outputSRS|query|integer|false|The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/ols-router/blob/gh-pages/glossary.md#outputSRS target="_blank">outputSRS</a>|
|criteria|query|string|false|Routing criteria to optimize (e.g., shortest, fastest). Default is shortest.|
|distanceUnit|query|string|false|distance unit of measure (e.g., km, mi). Default is km.|
|roundTrip|query|boolean|false|If true, route ends at start point. Default is false.|
|departure|query|string(date-time)|false|departure date and time in internet timestamp notation as defined in RFC 3339, section 5.6 (e.g., 2019-02-28T11:36:00-08:00);<br> Ignored if time-dependency modules are disabled|
|correctSide|query|boolean|false|If true, route starts and ends on same side of road as start/end point.Default is false.|
|disable|query|string|false|A comma-separated list of time-related modules to disable (e.g., sc,tf,ev,td).<br> Module names include:<br> sc – ferry schedules; disabled by default; disabled by default and only suitable for demos<br>tf – historic traffic congestion; disabled by default and only suitable for demos<br>ev – road events; disabled by default and only suitable for demos<br>td – time-dependency; disabling this disables sc, tf, and ev modules<br>tr – turn restrictions; if td is disabled, time-dependent turn restrictions are ignored<br>tc - turn costs (e.g., left turns take longer than right turns)|
|routeDescription|query|string|false|Route description (e.g., Shortest route from 1002 Johnson St, Victoria to 1105 Royal Ave,New Westminster)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|outputFormat|json|
|outputFormat|kml|
|outputFormat|html|
|outputSRS|4326|
|outputSRS|4269|
|outputSRS|3005|
|outputSRS|26907|
|outputSRS|26908|
|outputSRS|26909|
|outputSRS|26910|
|outputSRS|26911|
|criteria|shortest|
|criteria|fastest|
|distanceUnit|km|
|distanceUnit|mi|

<h3 id="get-the-path-distance-and-travel-time-between-a-series-of-geographic-points-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Geometry, distance, and time of the shortest or fastest route|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apikey
</aside>

## Get the path, distance and travel time between a series of geographic points

> Code samples

```bash
curl 'https://example.com/route.json?points=-123.70794%2C48.77869%2C-123.53785%2C48.38200' \
  -X POST \
  -H "apikey: ${API_KEY}"
```

`POST /route.{outputFormat}`

Represents the geometry, distance, and time of the shortest or fastest path between given start and end points.

<h3 id="get-the-path-distance-and-travel-time-between-a-series-of-geographic-points-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|outputFormat|path|string|true|Format of representation|
|points|query|string|true|A list of any number of route points in start to end order. See <a href=https://github.com/bcgov/ols-router/blob/gh-pages/glossary.md#points target='_blank'>points</a>|
|outputSRS|query|integer|false|The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/ols-router/blob/gh-pages/glossary.md#outputSRS target="_blank">outputSRS</a>|
|criteria|query|string|false|Routing criteria to optimize (e.g., shortest, fastest). Default is shortest.|
|distanceUnit|query|string|false|distance unit of measure (e.g., km, mi). Default is km.|
|roundTrip|query|boolean|false|If true, route ends at start point. Default is false.|
|departure|query|string(date-time)|false|departure date and time in internet timestamp notation as defined in RFC 3339, section 5.6 (e.g., 2019-02-28T11:36:00-08:00);<br> Ignored if time-dependency modules are disabled|
|correctSide|query|boolean|false|If true, route starts and ends on same side of road as start/end point.Default is false.|
|disable|query|string|false|A comma-separated list of time-related modules to disable (e.g., sc,tf,ev,td).<br><br>Module names include:<br> sc – ferry schedules; disabled by default; disabled by default and only suitable for demos<br>tf – historic traffic congestion; disabled by default and only suitable for demos<br>ev – road events; disabled by default and only suitable for demos<br>td – time-dependency; disabling this disables sc, tf, and ev modules<br>tr – turn restrictions; if td is disabled, time-dependent turn restrictions are ignored<br>tc - turn costs (e.g., left turns take longer than right turns)|
|routeDescription|query|string|false|Route description (e.g., Shortest route from 1002 Johnson St, Victoria to 1105 Royal Ave,New Westminster)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|outputFormat|json|
|outputFormat|kml|
|outputFormat|html|
|outputSRS|4326|
|outputSRS|4269|
|outputSRS|3005|
|outputSRS|26907|
|outputSRS|26908|
|outputSRS|26909|
|outputSRS|26910|
|outputSRS|26911|
|criteria|shortest|
|criteria|fastest|
|distanceUnit|km|
|distanceUnit|mi|

<h3 id="get-the-path-distance-and-travel-time-between-a-series-of-geographic-points-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Geometry, distance, and time of the shortest or fastest route|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apikey
</aside>

## Get the optimal path, distance and travel time between a start point and a series of end points which are reordered to minimize total distance or time for a commercial vehicle

> Code samples

```bash
curl 'https://example.com/truck/optimalRoute.json?points=-123.70794%2C48.77869%2C-123.53785%2C48.38200' \
  -H "apikey: ${API_KEY}"
```

`GET /truck/optimalRoute.{outputFormat}`

Represents the geometry, distance, and time of the shortest or fastest path between a start point and a series of end points which are reordered to minimize distance or time for a commercial vehicle.

<h3 id="get-the-optimal-path-distance-and-travel-time-between-a-start-point-and-a-series-of-end-points-which-are-reordered-to-minimize-total-distance-or-time-for-a-commercial-vehicle-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|outputFormat|path|string|true|Format of representation|
|points|query|string|true|A list of any number of route points in start to end order. See <a href=https://github.com/bcgov/ols-router/blob/gh-pages/glossary.md#points target='_blank'>points</a>|
|outputSRS|query|integer|false|The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/ols-router/blob/gh-pages/glossary.md#outputSRS target="_blank">outputSRS</a>|
|criteria|query|string|false|Routing criteria to optimize (e.g., shortest, fastest). Default is shortest.|
|distanceUnit|query|string|false|distance unit of measure (e.g., km, mi). Default is km.|
|roundTrip|query|boolean|false|If true, route ends at start point. Default is false.|
|departure|query|string(date-time)|false|departure date and time in internet timestamp notation as defined in RFC 3339, section 5.6 (e.g., 2019-02-28T11:36:00-08:00);<br> Ignored if time-dependency modules are disabled|
|correctSide|query|boolean|false|If true, route starts and ends on same side of road as start and end points.Default is false.|
|truckRouteMultiplier|query|integer|false|The truck route multiplier value is used to multiply the cost of using roads that are not truck routes.|
|partition|query|string|false|A comma-separated list of values to identify sections of the route that correspond to truck route sections and non-truck route sections, ferry sections and non-ferry sections, and locality names.  The response includes a partitions attribute, which is an array of objects, each of which has an index (into the route coordinate array) and a value for each of the attributes requested in the partition parameter. Any or all of the following values can be used. <br><br>Partition values:<br> isTruckRoute – Distinguish between truck route sections and non-truck route sections <br> isFerry – Distinguish between ferry sections and non-ferry sections <br> locality – Include the locality name for the route partition|
|disable|query|string|false|A comma-separated list of time-related modules to disable (e.g., sc,tf,ev,td).<br><br>Module names include:<br> sc – ferry schedules; disabled by default; disabled by default and only suitable for demos<br>tf – historic traffic congestion; disabled by default and only suitable for demos<br>ev – road events; disabled by default and only suitable for demos<br>td – time-dependency; disabling this disables sc, tf, and ev modules<br>tr – turn restrictions; if td is disabled, time-dependent turn restrictions are ignored<br>tc - turn costs (e.g., left turns take longer than right turns)|
|routeDescription|query|string|false|Route description (e.g., Shortest route from 1002 Johnson St, Victoria to 1105 Royal Ave,New Westminster)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|outputFormat|json|
|outputFormat|kml|
|outputFormat|html|
|outputSRS|4326|
|outputSRS|4269|
|outputSRS|3005|
|outputSRS|26907|
|outputSRS|26908|
|outputSRS|26909|
|outputSRS|26910|
|outputSRS|26911|
|criteria|shortest|
|criteria|fastest|
|distanceUnit|km|
|distanceUnit|mi|

<h3 id="get-the-optimal-path-distance-and-travel-time-between-a-start-point-and-a-series-of-end-points-which-are-reordered-to-minimize-total-distance-or-time-for-a-commercial-vehicle-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Geometry, distance, and time of the shortest or fastest route. End points are reordered to minimize total distance or time|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apikey
</aside>

## Get the path, distance and travel time between a start point and a series of end points which are reordered to minimize total distance or time.

> Code samples

```bash
curl 'https://example.com/truck/optimalRoute.json?points=-123.70794%2C48.77869%2C-123.53785%2C48.38200' \
  -X POST \
  -H "apikey: ${API_KEY}"
```

`POST /truck/optimalRoute.{outputFormat}`

Represents the geometry, distance, and time of the shortest or fastest path between a start point and a series of end points which are reordered to minimize total distance or time.

<h3 id="get-the-path-distance-and-travel-time-between-a-start-point-and-a-series-of-end-points-which-are-reordered-to-minimize-total-distance-or-time-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|outputFormat|path|string|true|Format of representation|
|points|query|string|true|A list of any number of route points in start to end order. See <a href=https://github.com/bcgov/ols-router/blob/gh-pages/glossary.md#points target='_blank'>points</a>|
|outputSRS|query|integer|false|The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/ols-router/blob/gh-pages/glossary.md#outputSRS target="_blank">outputSRS</a>|
|criteria|query|string|false|Routing criteria to optimize (e.g., shortest, fastest). Default is shortest.|
|distanceUnit|query|string|false|distance unit of measure (e.g., km, mi). Default is km.|
|roundTrip|query|boolean|false|If true, route ends at start point. Default is false.|
|departure|query|string(date-time)|false|departure date and time in internet timestamp notation as defined in RFC 3339, section 5.6 (e.g., 2019-02-28T11:36:00-08:00);<br> Ignored if time-dependency modules are disabled|
|correctSide|query|boolean|false|If true, route starts and ends on same side of road as start and end points.Default is false.|
|truckRouteMultiplier|query|integer|false|The truck route multiplier value is used to multiply the cost of using roads that are not truck routes.|
|partition|query|string|false|A comma-separated list of values to identify sections of the route that correspond to truck route sections and non-truck route sections, ferry sections and non-ferry sections, and locality names.  The response includes a partitions attribute, which is an array of objects, each of which has an index (into the route coordinate array) and a value for each of the attributes requested in the partition parameter. Any or all of the following values can be used. <br><br>Partition values:<br> isTruckRoute – Distinguish between truck route sections and non-truck route sections <br> isFerry – Distinguish between ferry sections and non-ferry sections <br> locality – Include the locality name for the route partition|
|disable|query|string|false|A comma-separated list of time-related modules to disable (e.g., sc,tf,ev,td).<br><br>Module names include:<br> sc – ferry schedules; disabled by default; disabled by default and only suitable for demos<br>tf – historic traffic congestion; disabled by default and only suitable for demos<br>ev – road events; disabled by default and only suitable for demos<br>td – time-dependency; disabling this disables sc, tf, and ev modules<br>tr – turn restrictions; if td is disabled, time-dependent turn restrictions are ignored<br>tc - turn costs (e.g., left turns take longer than right turns)|
|routeDescription|query|string|false|Route description (e.g., Shortest route from 1002 Johnson St, Victoria to 1105 Royal Ave,New Westminster)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|outputFormat|json|
|outputFormat|kml|
|outputFormat|html|
|outputSRS|4326|
|outputSRS|4269|
|outputSRS|3005|
|outputSRS|26907|
|outputSRS|26908|
|outputSRS|26909|
|outputSRS|26910|
|outputSRS|26911|
|criteria|shortest|
|criteria|fastest|
|distanceUnit|km|
|distanceUnit|mi|

<h3 id="get-the-path-distance-and-travel-time-between-a-start-point-and-a-series-of-end-points-which-are-reordered-to-minimize-total-distance-or-time-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Geometry, distance, and time of the shortest or fastest route. End points are reordered to minimize total distance or time.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apikey
</aside>

## Get the path, distance and travel time between a series of geographic points for a commercial vehicle

> Code samples

```bash
curl 'https://example.com/truck/route.json?points=-123.70794%2C48.77869%2C-123.53785%2C48.38200' \
  -H "apikey: ${API_KEY}"
```

`GET /truck/route.{outputFormat}`

Represents the geometry, distance, and time of the shortest or fastest path between given start and end points for a commercial vehicle.

<h3 id="get-the-path-distance-and-travel-time-between-a-series-of-geographic-points-for-a-commercial-vehicle-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|outputFormat|path|string|true|Format of representation|
|points|query|string|true|A list of any number of route points in start to end order. See <a href=https://github.com/bcgov/ols-router/blob/gh-pages/glossary.md#points target='_blank'>points</a>|
|outputSRS|query|integer|false|The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/ols-router/blob/gh-pages/glossary.md#outputSRS target="_blank">outputSRS</a>|
|criteria|query|string|false|Routing criteria to optimize (e.g., shortest, fastest). Default is shortest.|
|distanceUnit|query|string|false|distance unit of measure (e.g., km, mi). Default is km.|
|roundTrip|query|boolean|false|If true, route ends at start point. Default is false.|
|departure|query|string(date-time)|false|departure date and time in internet timestamp notation as defined in RFC 3339, section 5.6 (e.g., 2019-02-28T11:36:00-08:00);<br> Ignored if time-dependency modules are disabled|
|correctSide|query|boolean|false|If true, route starts and ends on same side of road as start/end point.Default is false.|
|truckRouteMultiplier|query|integer|false|The truck route multiplier value is used to multiply the cost of using roads that are not truck routes.|
|partition|query|string|false|A comma-separated list of values to identify sections of the route that correspond to truck route sections and non-truck route sections, ferry sections and non-ferry sections, and locality names.  The response includes a partitions attribute, which is an array of objects, each of which has an index (into the route coordinate array) and a value for each of the attributes requested in the partition parameter. Any or all of the following values can be used. <br><br>Partition values:<br> isTruckRoute – Distinguish between truck route sections and non-truck route sections <br> isFerry – Distinguish between ferry sections and non-ferry sections <br> locality – Include the locality name for the route partition|
|disable|query|string|false|A comma-separated list of time-related modules to disable (e.g., sc,tf,ev,td).<br> Module names include:<br> sc – ferry schedules; disabled by default; disabled by default and only suitable for demos<br>tf – historic traffic congestion; disabled by default and only suitable for demos<br>ev – road events; disabled by default and only suitable for demos<br>td – time-dependency; disabling this disables sc, tf, and ev modules<br>tr – turn restrictions; if td is disabled, time-dependent turn restrictions are ignored<br>tc - turn costs (e.g., left turns take longer than right turns)|
|routeDescription|query|string|false|Route description (e.g., Shortest route from 1002 Johnson St, Victoria to 1105 Royal Ave,New Westminster)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|outputFormat|json|
|outputFormat|kml|
|outputFormat|html|
|outputSRS|4326|
|outputSRS|4269|
|outputSRS|3005|
|outputSRS|26907|
|outputSRS|26908|
|outputSRS|26909|
|outputSRS|26910|
|outputSRS|26911|
|criteria|shortest|
|criteria|fastest|
|distanceUnit|km|
|distanceUnit|mi|

<h3 id="get-the-path-distance-and-travel-time-between-a-series-of-geographic-points-for-a-commercial-vehicle-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Geometry, distance, and time of the shortest or fastest route|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apikey
</aside>

## Get the path, distance and travel time between a series of geographic points

> Code samples

```bash
curl 'https://example.com/truck/route.json?points=-123.70794%2C48.77869%2C-123.53785%2C48.38200' \
  -X POST \
  -H "apikey: ${API_KEY}"
```

`POST /truck/route.{outputFormat}`

Represents the geometry, distance, and time of the shortest or fastest path between given start and end points.

<h3 id="get-the-path-distance-and-travel-time-between-a-series-of-geographic-points-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|outputFormat|path|string|true|Format of representation|
|points|query|string|true|A list of any number of route points in start to end order. See <a href=https://github.com/bcgov/ols-router/blob/gh-pages/glossary.md#points target='_blank'>points</a>|
|outputSRS|query|integer|false|The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/ols-router/blob/gh-pages/glossary.md#outputSRS target="_blank">outputSRS</a>|
|criteria|query|string|false|Routing criteria to optimize (e.g., shortest, fastest). Default is shortest.|
|distanceUnit|query|string|false|distance unit of measure (e.g., km, mi). Default is km.|
|roundTrip|query|boolean|false|If true, route ends at start point. Default is false.|
|departure|query|string(date-time)|false|departure date and time in internet timestamp notation as defined in RFC 3339, section 5.6 (e.g., 2019-02-28T11:36:00-08:00);<br> Ignored if time-dependency modules are disabled|
|correctSide|query|boolean|false|If true, route starts and ends on same side of road as start/end point.Default is false.|
|truckRouteMultiplier|query|integer|false|The truck route multiplier value is used to multiply the cost of using roads that are not truck routes.|
|partition|query|string|false|A comma-separated list of values to identify sections of the route that correspond to truck route sections and non-truck route sections, ferry sections and non-ferry sections, and locality names.  The response includes a partitions attribute, which is an array of objects, each of which has an index (into the route coordinate array) and a value for each of the attributes requested in the partition parameter. Any or all of the following values can be used. <br><br>Partition values:<br> isTruckRoute – Distinguish between truck route sections and non-truck route sections <br> isFerry – Distinguish between ferry sections and non-ferry sections <br> locality – Include the locality name for the route partition|
|disable|query|string|false|A comma-separated list of time-related modules to disable (e.g., sc,tf,ev,td).<br><br>Module names include:<br> sc – ferry schedules; disabled by default; disabled by default and only suitable for demos<br>tf – historic traffic congestion; disabled by default and only suitable for demos<br>ev – road events; disabled by default and only suitable for demos<br>td – time-dependency; disabling this disables sc, tf, and ev modules<br>tr – turn restrictions; if td is disabled, time-dependent turn restrictions are ignored<br>tc - turn costs (e.g., left turns take longer than right turns)|
|routeDescription|query|string|false|Route description (e.g., Shortest route from 1002 Johnson St, Victoria to 1105 Royal Ave,New Westminster)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|outputFormat|json|
|outputFormat|kml|
|outputFormat|html|
|outputSRS|4326|
|outputSRS|4269|
|outputSRS|3005|
|outputSRS|26907|
|outputSRS|26908|
|outputSRS|26909|
|outputSRS|26910|
|outputSRS|26911|
|criteria|shortest|
|criteria|fastest|
|distanceUnit|km|
|distanceUnit|mi|

<h3 id="get-the-path-distance-and-travel-time-between-a-series-of-geographic-points-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Geometry, distance, and time of the shortest or fastest route|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apikey
</aside>
