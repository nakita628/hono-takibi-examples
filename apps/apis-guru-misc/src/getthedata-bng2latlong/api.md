<h1 id="bng2latlong">bng2latlong v1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Convert an OSGB36 easting and northing (British National Grid) to WGS84 latitude and longitude.

Base URLs:

* <a href="https://api.getthedata.com">https://api.getthedata.com</a>

Email: <a href="mailto:info@getthedata.com">bng2latlong</a> 
Web: <a href="https://www.getthedata.com/bng2latlong">bng2latlong</a> 

<a href="https://www.getthedata.com/bng2latlong">Full documentation</a>

<h1 id="bng2latlong-default">Default</h1>

## Returns latitude and longitude for the given easting and northing.

> Code samples

```bash
curl https://example.com/bng2latlong/326897/673919 \
  -H 'Accept: application/json'
```

`GET /bng2latlong/{easting}/{northing}`

Takes an OSGB36 easting and northing (British National Grid) and returns the geographically equivalent WGS84 latitude and longitude.
#### A successful request returns the following fields:
* status - this will be `ok`
* easting - the easting provided in the request
* northing - the northing provided in the request
* latitude - the latitude of the converted coordinates
* longitude - the longitude of the converted coordinates
#### An unsuccessful request returns the following fields:
* status - this will be `error`
* error - an error message


<h3 id="returns-latitude-and-longitude-for-the-given-easting-and-northing-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|easting|path|integer|true|An OSGB36 (British National Grid) easting.|
|northing|path|integer|true|An OSGB36 (British National Grid) northing.|

> Example responses

> 200 Response

```json
{
  "easting": 326897,
  "error": "Both <easting> and <northing> must be provided, must be positive integers, and must be within range.",
  "latitude": 55.95271,
  "longitude": -3.17227,
  "northing": 673919,
  "status": "ok"
}
```

<h3 id="returns-latitude-and-longitude-for-the-given-easting-and-northing-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A JSON object containing the original easting and northing, and the converted latitude and longitude.|Inline|

<h3 id="returns-latitude-and-longitude-for-the-given-easting-and-northing-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|easting|integer|false|none|none|
|error|string|false|none|none|
|latitude|number|false|none|none|
|longitude|number|false|none|none|
|northing|integer|false|none|none|
|status|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|ok|
|status|error|

<aside class="success">
This operation does not require authentication
</aside>
