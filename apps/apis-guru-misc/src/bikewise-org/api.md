<h1 id="bikewise-api-v2">BikeWise API v2 v2</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<p>This is an API for accessing information about bicycling related incidents. You can find the source code on <a href="https://github.com/bikeindex/bikewise">GitHub</a>.</p>

Base URLs:

* <a href="https://bikewise.org/api">https://bikewise.org/api</a>

Email: <a href="mailto:support@bikeindex.org">support@bikeindex.org</a> 

<a href="https://www.bikewise.org/documentation/api_v2">External documentation</a>

<h1 id="bikewise-api-v2-incidents">incidents</h1>

Incidents matching parameters

## Paginated incidents matching parameters

<a id="opIdGET--version-incidents---format-"></a>

> Code samples

```bash
curl https://example.com/v2/incidents
```

`GET /v2/incidents`


<p>If you’d like more detailed information about bike incidents, use this endpoint. For mapping, <code>locations</code> is probably a better bet.</p>

<p><strong>Notes on location searching</strong>: <br />
- <code>proximity</code> accepts an ip address, an address, zipcode, city, or latitude,longitude - i.e. <code>70.210.133.87</code>, <code>210 NW 11th Ave, Portland, OR</code>, <code>60647</code>, <code>Chicago, IL</code>, and <code>45.521728,-122.67326</code> are all acceptable<br />
- <code>proximity_square</code> sets the length of the sides of the square to find matches inside of. The square is centered on the location specified by <code>proximity</code>. It defaults to 100.</p>


<h3 id="paginated-incidents-matching-parameters-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer(int32)|false|<p>Page of results to fetch.</p><br>|
|per_page|query|integer(int32)|false|<p>Number of results to return per page.</p><br>|
|occurred_before|query|integer(int32)|false|<p>End of period</p><br>|
|occurred_after|query|integer(int32)|false|<p>Start of period</p><br>|
|incident_type|query|string|false|<p>Only incidents of specific type</p><br>|
|proximity|query|string|false|<p>Center of location for proximity search</p><br>|
|proximity_square|query|integer(int32)|false|<p>Size of the proximity search</p><br>|
|query|query|string|false|<p>Full text search of incidents</p><br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|incident_type|crash|
|incident_type|hazard|
|incident_type|theft|
|incident_type|unconfirmed|
|incident_type|infrastructure_issue|
|incident_type|chop_shop|

<h3 id="paginated-incidents-matching-parameters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

## GET--version-incidents--id---format-

<a id="opIdGET--version-incidents--id---format-"></a>

> Code samples

```bash
curl https://example.com/v2/incidents/0
```

`GET /v2/incidents/{id}`

<h3 id="get--version-incidents--id---format--parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|<p>Incident ID</p><br>|

<h3 id="get--version-incidents--id---format--responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="bikewise-api-v2-locations">locations</h1>

GeoJSON response for matching incidents

## Unpaginated geojson response

<a id="opIdGET--version-locations---format-"></a>

> Code samples

```bash
curl https://example.com/v2/locations
```

`GET /v2/locations`

<p><strong>This endpoint behaves exactly like</strong> <code>incidents</code>, but returns a valid geojson <code>FeatureCollection</code> that looks like this:</p>

<pre><code>{
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {
      id: 4474199,
      type: "Theft",
      occurred_at: 1428536937
    },
      geometry: {
      type: "Point",
      coordinates: [ -122.6244177, 45.5164386 ]
    }
  }
}
</code></pre>

<p>It doesn’t paginate. If you pass the <code>all</code> parameter it returns all matches (which can be big, &gt; 4mb), otherwise it returns the 100 most recent.</p>

<p><strong>Go forth and make maps!</strong></p>


<h3 id="unpaginated-geojson-response-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|occurred_before|query|integer(int32)|false|<p>End of period</p><br>|
|occurred_after|query|integer(int32)|false|<p>Start of period</p><br>|
|incident_type|query|string|false|<p>Only incidents of specific type</p><br>|
|proximity|query|string|false|<p>Center of location for proximity search</p><br>|
|proximity_square|query|integer(int32)|false|<p>Size of the proximity search</p><br>|
|query|query|string|false|<p>Full text search of incidents</p><br>|
|limit|query|integer(int32)|false|<p>Max number of results to return. Defaults to 100</p><br>|
|all|query|boolean|false|<p>Give ‘em all to me. Will ignore limit</p><br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|incident_type|crash|
|incident_type|hazard|
|incident_type|theft|
|incident_type|unconfirmed|
|incident_type|infrastructure_issue|
|incident_type|chop_shop|

<h3 id="unpaginated-geojson-response-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

## Unpaginated geojson response with simplestyled markers

<a id="opIdGET--version-locations-markers---format-"></a>

> Code samples

```bash
curl https://example.com/v2/locations/markers
```

`GET /v2/locations/markers`

<p>This behaves exactly like the root <code>locations</code> endpoint, but returns <a href="https://github.com/mapbox/simplestyle-spec">simplestyled markers</a> (<a href="https://www.mapbox.com/guides/markers/#simple-style">mapbox styled markers</a>)</p>

<p><strong>Go forth and make maps!</strong></p>


<h3 id="unpaginated-geojson-response-with-simplestyled-markers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|occurred_before|query|integer(int32)|false|<p>End of period</p><br>|
|occurred_after|query|integer(int32)|false|<p>Start of period</p><br>|
|incident_type|query|string|false|<p>Only incidents of specific type</p><br>|
|proximity|query|string|false|<p>Center of location for proximity search</p><br>|
|proximity_square|query|integer(int32)|false|<p>Size of the proximity search</p><br>|
|query|query|string|false|<p>Full text search of incidents</p><br>|
|limit|query|integer(int32)|false|<p>Max number of results to return. Defaults to 100</p><br>|
|all|query|boolean|false|<p>Give ‘em all to me. Will ignore limit</p><br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|incident_type|crash|
|incident_type|hazard|
|incident_type|theft|
|incident_type|unconfirmed|
|incident_type|infrastructure_issue|
|incident_type|chop_shop|

<h3 id="unpaginated-geojson-response-with-simplestyled-markers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>
