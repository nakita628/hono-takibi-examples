<h1 id="gravity-api">Gravity API v1.1.1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The gravitational field of the earth is non-uniform.  The <a href='https://en.wikipedia.org/wiki/Geoid'>geoid</a> is the shape the
 ocean surface would take if only gravity and the rotation of the Earth
  were considered. The geoid is the surface that defines zero elevation.<br><br>

The geoid height is the difference between an ideal reference ellipsoid  and the geoid.<br><br>
The gravity anomaly is the difference between the acceleration due to gravity on the Earth's surface and the value calculated assuming the reference ellipsoid.<br><br>
The official Earth Gravitational Model <a href=https://en.wikipedia.org/wiki/Earth_Gravitational_Model#EGM2008/>EGM2008</a> was developed and  released to the public by the National Geospatial-Intelligence Agency (NGA).<br><br>
Our EGM2008 API provides on-demand access to the EGM2008 model, as implemented by the open-source GeographicLib  <a href=https://geographiclib.sourceforge.io/html/gravity.html>Gravity</a> library.<br><br>
API requests must contain a key "API-Key" in the header (see code samples). Obtain a key from  <a href='https://developer.amentum.io'>here</a>. <br><br> 
Amentum Pty Ltd is not responsible nor liable for any loss or damage of any sort incurred as a result of using the API. <br><br>
Copyright <a href='https://amentum.space'>Amentum Pty Ltd</a> 2021.

Base URLs:

* <a href=""></a>

<h1 id="gravity-api-egm2008">egm2008</h1>

Calculate geoid height and gravity anomaly values using the EGM2008 model


## Calculate the geoid height

<a id="opIdapp.api_egm2008.endpoints.EGM2008.calculate_height"></a>

> Code samples

```bash
curl 'https://example.com/egm2008/geoid_height?latitude=-45&longitude=45' \
  -H 'Accept: application/json'
```

`GET /egm2008/geoid_height`

for a given latitude / longitude. 


<h3 id="calculate-the-geoid-height-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|latitude|query|number|true|Geographic latitude (-90 to 90 deg).|
|longitude|query|number|true|Geographic longitude (-180 to 180 deg).|

> Example responses

> 200 Response

```json
{
  "height": {
    "units": "m",
    "value": 45.88107058892659
  }
}
```

<h3 id="calculate-the-geoid-height-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful geoid height calculation|[Height](#schemaheight)|

<aside class="success">
This operation does not require authentication
</aside>

## Calculate gravity anomaly values

<a id="opIdapp.api_egm2008.endpoints.EGM2008.calculate_anomaly"></a>

> Code samples

```bash
curl 'https://example.com/egm2008/gravity_anomaly?latitude=-45&longitude=45' \
  -H 'Accept: application/json'
```

`GET /egm2008/gravity_anomaly`

for a given latitude / longitude.


<h3 id="calculate-gravity-anomaly-values-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|latitude|query|number|true|Geographic latitude (-90 to 90 deg).|
|longitude|query|number|true|Geographic longitude (-180 to 180 deg).|

> Example responses

> 200 Response

```json
{
  "eta": {
    "units": "arcsec",
    "value": -0.9413662219916251
  },
  "gravity_anomaly": {
    "units": "mGal",
    "value": 27.954737031742376
  },
  "xi": {
    "units": "arcsec",
    "value": 1.371151956763653
  }
}
```

<h3 id="calculate-gravity-anomaly-values-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful anomaly calculation|[Anomaly](#schemaanomaly)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_Anomaly">Anomaly</h2>
<!-- backwards compatibility -->
<a id="schemaanomaly"></a>
<a id="schema_Anomaly"></a>
<a id="tocSanomaly"></a>
<a id="tocsanomaly"></a>

```json
{
  "eta": {
    "units": "string",
    "value": 0
  },
  "gravity_anomaly": {
    "units": "string",
    "value": 0
  },
  "xi": {
    "units": "string",
    "value": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|eta|object|false|none|Eta (arcsec) - easterly component of deflection of vertical.|
|gravity_anomaly|object|false|none|Gravity anomaly (mGal)<br>|
|xi|object|false|none|Xi (arcsec) - northerly component of deflection of vertical.<br>|

<h2 id="tocS_Height">Height</h2>
<!-- backwards compatibility -->
<a id="schemaheight"></a>
<a id="schema_Height"></a>
<a id="tocSheight"></a>
<a id="tocsheight"></a>

```json
{
  "height": {
    "units": "string",
    "value": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|height|object|false|none|Geoid height (m)<br>|
