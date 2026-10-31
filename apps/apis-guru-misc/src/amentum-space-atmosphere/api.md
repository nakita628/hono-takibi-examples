<h1 id="atmosphere-api">Atmosphere API v1.1.1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Instantly access empirical models of atmospheric density and  composition that are recommended by the Committee on Space Research (COSPAR) for  satellite drag calculations. <br><br>
API requests must contain a key "API-Key" in the header (see code samples). Obtain a key from  <a href='https://developer.amentum.io'>here</a>. <br><br> 
Help us improve the quality of our web APIs by completing our 2 minute survey <a href="https://www.surveymonkey.com/r/CTDTRBN">here</a>.<br><br>
Amentum Pty Ltd is not responsible nor liable for any loss or damage of any sort incurred as a result of using the API. <br><br>
Copyright <a href='https://amentum.space'>Amentum Pty Ltd</a> 2021.

Base URLs:

* <a href=""></a>

<h1 id="atmosphere-api-nrlmsise00">nrlmsise00</h1>

The <a href='https://ccmc.gsfc.nasa.gov/modelweb/atmos/nrlmsise00.html'>NRLMSISE-00</a>  model was developed by the US Naval Research Laboratory.  It is based on mass spectrometry and incoherent radar scatter data,  includes drag and accelerometer data, and accounts for anomalous  oxygen at high altitudes. It is recommended by the International  Committee on Space Resarch (COSPAR) as the standard for atmospheric  composition. <br><br> The API now automatically updates the Ap and F10.7 cm radio flux  indices unless provided by the user.


## Compute atmospheric composition, density, and temperatures

<a id="opIdapp.api.endpoints.NRLMSISE00.sample_atmosphere"></a>

> Code samples

```bash
curl 'https://example.com/nrlmsise00?year=2020&month=5&day=23&altitude=300&geodetic_latitude=42&geodetic_longitude=42&utc=2' \
  -H 'Accept: application/json'
```

`GET /nrlmsise00`

at specified conditions.


<h3 id="compute-atmospheric-composition-density-and-temperatures-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|year|query|integer|true|Year in YYYY format|
|month|query|integer|true|Month in MM format|
|day|query|integer|true|Day in DD format|
|altitude|query|number|true|Altitude in (km)|
|geodetic_latitude|query|number|true|GeodeticLatitude (deg) -90 to 90 deg|
|geodetic_longitude|query|number|true|GeodeticLongitude (deg) 0 to 360 deg|
|utc|query|number|true|Coordinated Universal Time (hrs)|
|f107a|query|number|false|(Optional) 81 day average of F10.7 flux (SFU) centered on the specified day. F107 and F107A values correspond to the 10.7 cm radio flux at the actual distance of Earth from Sun rather than radio flux at 1 AU. F107, F107A, AP effects can be neglected below 80 km. If unspecified, values provided by the US National Oceanic and  Atmospheric Administration are retrieved automatically.<br>|
|f107|query|number|false|(Optional) Daily F10.7 cm radio flux for previous day (SFU). F107 and F107A values correspond to the 10.7 cm radio flux at the actual distance of Earth from Sun rather than radio flux at 1 AU. F107, F107A, AP effects can be neglected below 80 km. If unspecified, values provided by the US National Oceanic and  Atmospheric Administration are retrieved automatically.<br>|
|ap|query|number|false|(Optional) The Ap-index provides a daily average level for geomagnetic activity F107, F107A, AP effects can be neglected below 80 km. If unspecified, the average of values in the 24 hours preceding the date-time  are automatically calculated from data provided by GFZ German Research Centre  for Geosciences.<br>|

> Example responses

> 200 Response

```json
{
  "Ar_density": {
    "units": "/m3",
    "value": 345221344
  },
  "H_density": {
    "units": "/m3",
    "value": 846266302464
  },
  "He_density": {
    "units": "/m3",
    "value": 14137357762560
  },
  "N2_density": {
    "units": "/m3",
    "value": 7370196910080
  },
  "N_density": {
    "units": "/m3",
    "value": 424038367232
  },
  "O2_density": {
    "units": "/m3",
    "value": 285386670080
  },
  "O_density": {
    "units": "/m3",
    "value": 160525593870336
  },
  "anomalous_O_density": {
    "units": "/m3",
    "value": 2940371.25
  },
  "ap": {
    "value": 3
  },
  "at_alt_temp": {
    "units": "K",
    "value": 590.3972778320312
  },
  "exospheric_temp": {
    "units": "K",
    "value": 590.4319458007812
  },
  "f107": {
    "units": "sfu",
    "value": 70
  },
  "f107a": {
    "units": "sfu",
    "value": 69.35802469135803
  },
  "total_mass_density": {
    "units": "kg/m3",
    "value": 4.7264410267533474e-12
  }
}
```

<h3 id="compute-atmospheric-composition-density-and-temperatures-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful atmospheric density calculation|Inline|

<h3 id="compute-atmospheric-composition-density-and-temperatures-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Ar_density|object|false|none|none|
|» units|string|false|none|none|
|» value|number|false|none|none|
|H_density|object|false|none|none|
|» units|string|false|none|none|
|» value|number|false|none|none|
|He_density|object|false|none|none|
|» units|string|false|none|none|
|» value|number|false|none|none|
|N2_density|object|false|none|none|
|» units|string|false|none|none|
|» value|number|false|none|none|
|N_density|object|false|none|none|
|» units|string|false|none|none|
|» value|number|false|none|none|
|O2_density|object|false|none|none|
|» units|string|false|none|none|
|» value|number|false|none|none|
|O_density|object|false|none|none|
|» units|string|false|none|none|
|» value|number|false|none|none|
|anomalous_O_density|object|false|none|none|
|» units|string|false|none|none|
|» value|number|false|none|none|
|ap|object|false|none|none|
|» value|number|false|none|none|
|at_alt_temp|object|false|none|none|
|» units|string|false|none|none|
|» value|number|false|none|none|
|exospheric_temp|object|false|none|none|
|» units|string|false|none|none|
|» value|number|false|none|none|
|f107|object|false|none|none|
|» units|string|false|none|none|
|» value|number|false|none|none|
|f107a|object|false|none|none|
|» units|string|false|none|none|
|» value|number|false|none|none|
|total_mass_density|object|false|none|none|
|» units|string|false|none|none|
|» value|number|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="atmosphere-api-jb2008">jb2008</h1>

The <a href='https://sol.spacenvironment.net/jb2008/'>JB2008</a> (Jacchia-Bowman) model is a newer model developed by  Space Environment Technologies and the US Air Force Space Command.
 The model accounts for various phenomena related to EUV heating of 
 the thermosphere and uses the DST index as the driver of global 
 density changes. The model is complementary to the NRLMSISE00 model 
 and is more accurate during times of high solar activity and 
 geomagnetic storms. It is recommended by COSPAR as the standard 
 for thermospheric density in satellite drag calculations.<br><br>
 The API now automatically updates the indices needed to account 
 for global density variations due to geomagnetic storms and EUV heating. 


## Compute atmospheric density and temperatures

<a id="opIdapp.api.endpoints.JB2008.sample_atmosphere"></a>

> Code samples

```bash
curl 'https://example.com/jb2008?year=2020&month=5&day=23&altitude=300&geodetic_latitude=42&geodetic_longitude=42&utc=2' \
  -H 'Accept: application/json'
```

`GET /jb2008`

under given conditions.


<h3 id="compute-atmospheric-density-and-temperatures-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|year|query|integer|true|Year in YYYY format|
|month|query|integer|true|Month in MM format|
|day|query|integer|true|Day in DD format|
|altitude|query|number|true|Altitude in (km)|
|geodetic_latitude|query|number|true|GeodeticLatitude (deg) -90 to 90 deg|
|geodetic_longitude|query|number|true|GeodeticLongitude (deg) 0 to 360 deg|
|utc|query|number|true|Coordinated Universal Time (hrs)|

> Example responses

> 200 Response

```json
{
  "at_alt_temp": {
    "units": "K",
    "value": 667.005615234375
  },
  "exospheric_temp": {
    "units": "K",
    "value": 666.522705078125
  },
  "total_mass_density": {
    "units": "kg/m3",
    "value": 5.201439105817496e-12
  }
}
```

<h3 id="compute-atmospheric-density-and-temperatures-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful atmospheric density calculation|Inline|

<h3 id="compute-atmospheric-density-and-temperatures-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|at_alt_temp|object|false|none|none|
|» units|string|false|none|none|
|» value|number|false|none|none|
|exospheric_temp|object|false|none|none|
|» units|string|false|none|none|
|» value|number|false|none|none|
|total_mass_density|object|false|none|none|
|» units|string|false|none|none|
|» value|number|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="atmosphere-api-wam-ipe">wam-ipe</h1>

The NOAA/SWPC <a href='https://www.swpc.noaa.gov/products/wam-ipe'>Whole Atmosphere Model-Ionosphere Plasmasphere Electrodynamics (WAM-IPE) Forecast System (WFS)</a> provides thermosphere and ionosphere forecasts on a 48 hour horizon.  The model accounts for solar, space weather, and lower atmosphere forcing effects. The neutral density predictions are important for accurate orbit determinations and therefore safer space traffic management. Our web API endpoint provides the  wind components, temperature, and molecular and atomic atmospheric compositions for a given altitude, latitude and longitude, and time  ahead 42-48 hours on a 10 minute grid. (The forecast horizon is 42-48 hours as the data is updated every  6 hours). Please contact team@amentum.space if you would like to access the Global Ionosphere forecasts as well. 


## Forecast winds, ion and molecular densities, and temperatures in the atmosphere

<a id="opIdapp.api_wfs.endpoints.WFS.get_values"></a>

> Code samples

```bash
curl 'https://example.com/wam-ipe?latitude=42&longitude=42&altitude=300&year=2020&month=5&day=23&hour=15&minute=10' \
  -H 'Accept: application/json'
```

`GET /wam-ipe`

at a given position and time on 42-48 hour forecast horizon (10 minute resolution). NOTE: latitudes outside the interval (-90,90) are clipped to the endpoints; longitudes outside (0,360) are wrapped.   


<h3 id="forecast-winds-ion-and-molecular-densities-and-temperatures-in-the-atmosphere-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|latitude|query|number|true|Latitude (deg) -90 to 90 deg|
|longitude|query|number|true|Longitude (deg) 0 to 360 deg or -180 to 180 deg|
|altitude|query|number|true|Altitude in (km)|
|year|query|integer|true|Year in YYYY format|
|month|query|integer|true|Month in MM format|
|day|query|integer|true|Day in DD format|
|hour|query|integer|true|UTC Hour of the day in 24 hour format|
|minute|query|integer|true|Minute of the given hour|

> Example responses

> 200 Response

```json
{
  "N2_density": {
    "units": "/m3",
    "value": 1.8508440362185578e+25
  },
  "O2_density": {
    "units": "/m3",
    "value": 5.005040353829904e+24
  },
  "O_density": {
    "units": "/m3",
    "value": 4279507561218048
  },
  "eastward_wind_neutral": {
    "units": "m/s",
    "value": 0.15444904565811157
  },
  "northward_wind_neutral": {
    "units": "m/s",
    "value": -9.831161499023438
  },
  "point": {
    "altitude": 327.6,
    "latitude": 30,
    "longitude": 348
  },
  "temp_neutral": {
    "units": "K",
    "value": 296.2078
  },
  "total_mass_density": {
    "units": "kg/m3",
    "value": 4.124548465486878e-11
  },
  "upward_wind_neutral": {
    "units": "m/s",
    "value": -0.00033221824560314417
  }
}
```

<h3 id="forecast-winds-ion-and-molecular-densities-and-temperatures-in-the-atmosphere-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful wam-ipe calculation|Inline|

<h3 id="forecast-winds-ion-and-molecular-densities-and-temperatures-in-the-atmosphere-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|N2_density|object|false|none|Molecular nitrogen density in (/m3).<br>|
|» units|string|false|none|none|
|» value|number|false|none|none|
|O2_density|object|false|none|Moleculary oxygen density in (/m3).<br>|
|» units|string|false|none|none|
|» value|number|false|none|none|
|O_density|object|false|none|Oxygen atomic density in (/m3).<br>|
|» units|string|false|none|none|
|» value|number|false|none|none|
|eastward_wind_neutral|object|false|none|Easterly component of neutral wind velocity in (m/s).<br>|
|» units|string|false|none|none|
|» value|number|false|none|none|
|northward_wind_neutral|object|false|none|Northerly component of neutral wind velocity in (m/s).<br>|
|» units|string|false|none|none|
|» value|number|false|none|none|
|point|object|false|none|The given point in the request.|
|» altitude|number|false|none|none|
|» latitude|number|false|none|none|
|» longitude|number|false|none|none|
|temp_neutral|object|false|none|Temperature of the atmosphere in (K).<br>|
|» units|string|false|none|none|
|» value|number|false|none|none|
|total_mass_density|object|false|none|Total mass density (kg/m3).<br>|
|» units|string|false|none|none|
|» value|number|false|none|none|
|upward_wind_neutral|object|false|none|Upward component of neutral wind velocity in (m/s).<br>|
|» units|string|false|none|none|
|» value|number|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>
