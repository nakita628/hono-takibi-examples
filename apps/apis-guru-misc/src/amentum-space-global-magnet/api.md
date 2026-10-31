<h1 id="geomag-api">Geomag API v1.3.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.


The World Magnetic Model calculates the intensity and direction of the Earth's magnetic field on a specific date-time, geodetic altitude, latitude, and longitude. It is relied upon throughout the world for navigation, mineral exploration, atmospheric and space science, and is installed on billions of devices.  <br><br>
A comprehensive description of the World Magnetic Model, including its  limitations, can be found <a href='https://www.ngdc.noaa.gov/geomag/WMM/'>here</a>.  <br><br>
We provide a RESTful API to access the out-of-cycle  World Magnetic Model (WMM2015v2) valid for years 2015.0 - 2020.0 and WMM2020 valid for years 2020.0 - 2025.0<br><br>
API requests must contain a key "API-Key" in the header (see code samples). Obtain a key from  <a href='https://developer.amentum.io'>here</a>. <br><br> 
Amentum Pty Ltd is not responsible nor liable for any loss or damage of any sort incurred as a result of using the API. <br><br>
Help us improve the quality of our web APIs by completing our 2 minute survey <a href="https://www.surveymonkey.com/r/CTDTRBN">here</a>.<br><br>
Copyright <a href='https://amentum.space'>Amentum Pty Ltd</a> 2021.

Base URLs:

* <a href="https://api.apis.guru/wmm">https://api.apis.guru/wmm</a>

<h1 id="geomag-api-default">Default</h1>

## Calculate magnetic declination, inclination, total field intensity, and grid variation

<a id="opIdapp.api_wmm.endpoints.WMM.magnetic_field"></a>

> Code samples

```bash
curl 'https://example.com/magnetic_field?altitude=10&latitude=80&longitude=100&year=2020.5' \
  -H 'Accept: application/json'
```

`GET /magnetic_field`

at specified conditions.


<h3 id="calculate-magnetic-declination-inclination-total-field-intensity-and-grid-variation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|altitude|query|number|true|Geodetic Altitude 0 km to 600 km.|
|latitude|query|number|true|Geodetic Latitude. -90 deg (S) to 90 deg (N).|
|longitude|query|number|true|Geodetic Longitude. -180 deg (W) to 180 deg (E).|
|year|query|number|true|Year as a decimal in the range 2015-2025 (2017.5 would be half way through 2017).|

> Example responses

> 200 Response

```json
{
  "declination": {
    "units": "Deg",
    "value": 34.144142150878906
  },
  "grid_variation": {
    "units": -65.8558578491211,
    "value": "Deg"
  },
  "inclination": {
    "units": "Deg",
    "value": 87.98262786865234
  },
  "total_intensity": {
    "units": "nT",
    "value": 58421.87109375
  }
}
```

<h3 id="calculate-magnetic-declination-inclination-total-field-intensity-and-grid-variation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful magnetic field intensity calculation|Inline|

<h3 id="calculate-magnetic-declination-inclination-total-field-intensity-and-grid-variation-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|declination|object|false|none|The angle in the horizontal plane between magnetic north and true north. Declination is positive when magnetic north is east of true north.<br>|
|» units|string|false|none|none|
|» value|number|false|none|none|
|grid_variation|object|false|none|Referenced to grid north, referenced to 0 deg meridian of a polar stereographic projection.  Only defined for latitudes greater than 55 degrees and less than -55 degrees (arctic and antarctic).<br>|
|» units|string|false|none|none|
|» value|number|false|none|none|
|inclination|object|false|none|Also known as 'dip', is the angle made between the horizontal plane and the magnetic field vector at some position. Positive inclination corresponds to a downward pointing. <br>|
|» units|string|false|none|none|
|» value|number|false|none|none|
|total_intensity|object|false|none|Total magnetic field intensity in nano Teslas.<br>|
|» units|string|false|none|none|
|» value|number|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>
