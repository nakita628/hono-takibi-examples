<h1 id="geographic-api">Geographic API v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The Geographic API extends the Semantic API, using a linked data approach to enhance location concepts used in The New York Times' controlled vocabulary and data resources which combine them with the GeoNames database, an authoritative and free to use database of global geographical places, names and features.

Base URLs:

* <a href="http://api.nytimes.com/svc/semantic/v2/geocodes">http://api.nytimes.com/svc/semantic/v2/geocodes</a>

* <a href="https://api.nytimes.com/svc/semantic/v2/geocodes">https://api.nytimes.com/svc/semantic/v2/geocodes</a>

<a href="http://developer.nytimes.com/tou">Terms of service</a>

<a href="http://developer.nytimes.com/">External documentation</a>

# Authentication

* API Key (apikey)
    - Parameter Name: **api-key**, in: query.

<h1 id="geographic-api-events">Events</h1>

## Geographic API

> Code samples

```bash
curl "https://api.nytimes.com/svc/query.json?api-key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /query.json`

Geographic API

<h3 id="geographic-api-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|query|string|false|A displayable name for the specified place.|
|latitude|query|string|false|The latitude of the specified place.<br>|
|longitude|query|string|false|The longitude of the specified place.|
|elevation|query|integer|false|The elevation of the specified place, in meters.|
|sw|query|string|false|Along with ne, forms a bounded box using the longitude and latitude coordinates specified as the southwest corner. The search results are limited to the resulting box. Two float values, separated by a comma `latitude,longitude` <br/> The ne parameter is required to use this parameter.|
|query|query|string|false|Search keywords to perform a text search on the fields: web_description, event_name and venue_name. 'AND' searches can be performed by wrapping query terms in quotes. If you do not specify a query, all results will be returned.<br>|
|filter|query|string|false|Filters search results based on the facets provided.  For more information on the values you can filter on, see Facets.<br>|
|date_range|query|string|false|Start date to end date in the following format- YYYY-MM-DD:YYYY-MM-DD|
|facets|query|integer|false|When facets is set to 1, a count of all facets will be included in the response.|
|sort|query|string|false|Sorts your results on the fields specified. <br/> `sort_value1+[asc \| desc],sort_value2+[asc\|desc],[...]`<br/> Appending +asc to a facet or response will sort results on that value in ascending order. Appending +desc to a facet or response  will sort results in descending order. You can sort on multiple fields. You can sort on any facet. For the list of responses you can sort on, see the Sortable Field column in the Response table. <br/><br/>If you are doing a spatial search with the ll parameter, you can also sort by the distance from the center of the search: dist+[asc \| desc] <br/> **Note:** either +asc or +desc is required when using the sort parameter.<br>|
|limit|query|integer|false|Limits the number of results returned|
|offset|query|integer|false|Sets the starting point of the result set|

#### Enumerated Values

|Parameter|Value|
|---|---|
|facets|0|
|facets|1|

> Example responses

> 200 Response

```json
{
  "results": [
    {
      "city": "string",
      "critic_name": "string",
      "event_detail_url": "string",
      "event_id": 0,
      "event_name": "string",
      "event_schedule_id": 0,
      "festival": true,
      "film_rating": true,
      "free": true,
      "kid_friendly": true,
      "last_chance": true,
      "last_modified": "string",
      "long_running_show": true,
      "previews_and_openings": true,
      "recur_days": [
        "string"
      ],
      "recurring_start_date": "string",
      "state": "string",
      "times_pick": true,
      "web_description": "string"
    }
  ]
}
```

<h3 id="geographic-api-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|An array of events|Inline|

<h3 id="geographic-api-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[[Event](#schemaevent)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apikey
</aside>

# Schemas

<h2 id="tocS_Event">Event</h2>
<!-- backwards compatibility -->
<a id="schemaevent"></a>
<a id="schema_Event"></a>
<a id="tocSevent"></a>
<a id="tocsevent"></a>

```json
{
  "city": "string",
  "critic_name": "string",
  "event_detail_url": "string",
  "event_id": 0,
  "event_name": "string",
  "event_schedule_id": 0,
  "festival": true,
  "film_rating": true,
  "free": true,
  "kid_friendly": true,
  "last_chance": true,
  "last_modified": "string",
  "long_running_show": true,
  "previews_and_openings": true,
  "recur_days": [
    "string"
  ],
  "recurring_start_date": "string",
  "state": "string",
  "times_pick": true,
  "web_description": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|city|string|false|none|none|
|critic_name|string|false|none|none|
|event_detail_url|string|false|none|none|
|event_id|integer|false|none|none|
|event_name|string|false|none|none|
|event_schedule_id|integer|false|none|none|
|festival|boolean|false|none|none|
|film_rating|boolean|false|none|none|
|free|boolean|false|none|none|
|kid_friendly|boolean|false|none|none|
|last_chance|boolean|false|none|none|
|last_modified|string|false|none|none|
|long_running_show|boolean|false|none|none|
|previews_and_openings|boolean|false|none|none|
|recur_days|[string]|false|none|none|
|recurring_start_date|string|false|none|none|
|state|string|false|none|none|
|times_pick|boolean|false|none|none|
|web_description|string|false|none|none|
