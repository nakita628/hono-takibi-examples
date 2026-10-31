<h1 id="odweather">ODWeather v1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

This is the api to access the ODWeather API information

Base URLs:

* <a href="https://api.oceandrivers.com/">https://api.oceandrivers.com/</a>

Email: <a href="mailto:matiasbonet@oceandrivers.com">matiasbonet@oceandrivers.com</a> 

<h1 id="odweather-odweather">ODWeather</h1>

ODWeather API service

## compareStation

<a id="opIdcompareStation"></a>

> Code samples

```bash
curl https://example.com/v1.0/compareStation/cnarenal/
```

`GET /v1.0/compareStation/{stationName}/`

Get forecast and realtime information for known points<br/>None

<h3 id="comparestation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|stationName|path|string|true|Weather station to compare, values: cnareanl\|rcnp \| cmsap\|boyaenderrocat\|areopuertopalma \| EWXXX|

<h3 id="comparestation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

## getAemetStation

<a id="opIdgetAemetStation"></a>

> Code samples

```bash
curl https://example.com/v1.0/getAemetStation/aeropuertopalma/lastdata/
```

`GET /v1.0/getAemetStation/{stationName}/{period}/`

Get data from the aemet stations<br/>None

<h3 id="getaemetstation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|stationName|path|string|true|station name currently: aeropuertopalma \| caboblanco |
|period|path|string|true|Period of time to get the data. Options: lastdata lastday|

<h3 id="getaemetstation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

## getEasywind

<a id="opIdgetEasywind"></a>

> Code samples

```bash
curl 'https://example.com/v1.0/getEasyWind/EW013/?period=latestdata'
```

`GET /v1.0/getEasyWind/{easywindId}/`

Get data from the easywind weather stations<br/>None

<h3 id="geteasywind-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|easywindId|path|string|true|currently: 'EW013'\|'EW008'|
|period|query|string|true|Period of time to get the data latestdata\|latesthour\|latestday|

<h3 id="geteasywind-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

## getEventStations

<a id="opIdgetEventStations"></a>

> Code samples

```bash
curl https://example.com/v1.0/getEventStations/trofeoprincesasofia/
```

`GET /v1.0/getEventStations/{eventId}/`

Get stations in an event<br/>None

<h3 id="geteventstations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|eventId|path|string|true|currently: 'trofeoprincesasofia\|palmavela'|

<h3 id="geteventstations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

## getForecastPoints

<a id="opIdgetForecastPoints"></a>

> Code samples

```bash
curl https://example.com/v1.0/getForecastPoints/cnarenal/language/string
```

`GET /v1.0/getForecastPoints/{yatchclubid}/language/{language}`

Get forecast points of a yatchclub<br/>None

<h3 id="getforecastpoints-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|yatchclubid|path|string|true|base URL for the the|
|language|path|string|true|none|

<h3 id="getforecastpoints-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

## getForecastTimeSeries

<a id="opIdgetForecastTimeSeries"></a>

> Code samples

```bash
curl 'https://example.com/v1.0/getForecastTimeSeries/39.49/2.74/?weather=string'
```

`GET /v1.0/getForecastTimeSeries/{latitude}/{longitude}/`

Get timeseries forecast information<br/>None

<h3 id="getforecasttimeseries-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|latitude|path|number(float)|true|latitude for the forecast|
|longitude|path|number(float)|true|longitude for the forecast|
|inittime|query|string|false|initial date for the forecast ISO string YYYY-MM-DDTHH:mm:SS.SZ|
|endtime|query|string|false|end date for the forecast ISO string YYYY-MM-DDTHH:mm:SS.SZ|
|days|query|integer(int32)|false|optional number of days in string. Will be added to init forecast date|
|hours|query|integer(int32)|false|optional number of hours in string. Will be added to init forecast date|
|weather|query|string|true| Comma separated values for the weather parameteres temperature,rain,wind_u,wind_v,gust,pressure,cloud,humidity&wave=height,direction,period|
|wave|query|string|false| Comma separated values for the wave parameteres height,direction,period|
|entryid|query|string|false|Direct file I want to extract|

<h3 id="getforecasttimeseries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

## getForecastTimeSeriesWrf

<a id="opIdgetForecastTimeSeriesWrf"></a>

> Code samples

```bash
curl 'https://example.com/v1.0/getForecastTimeSeriesWrf/39.49/2.74/?weather=string'
```

`GET /v1.0/getForecastTimeSeriesWrf/{latitude}/{longitude}/`

Get timeseries forecast information<br/>None

<h3 id="getforecasttimeserieswrf-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|latitude|path|number(float)|true|latitude for the forecast|
|longitude|path|number(float)|true|longitude for the forecast|
|inittime|query|string|false|initial date for the forecast ISO string YYYY-MM-DDTHH:mm:SS.SZ|
|endtime|query|string|false|end date for the forecast ISO string YYYY-MM-DDTHH:mm:SS.SZ|
|days|query|integer(int32)|false|optional number of days in string. Will be added to init forecast date|
|hours|query|integer(int32)|false|optional number of hours in string. Will be added to init forecast date|
|weather|query|string|true| Comma separated values for the weather parameteres temperature,rain,wind_u,wind_v,gust,pressure,cloud,humidity&wave=height,direction,period|
|wave|query|string|false| Comma separated values for the wave parameteres height,direction,period|
|entryid|query|string|false|Direct file I want to extract|

<h3 id="getforecasttimeserieswrf-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

## getSocibWeatherStation

<a id="opIdgetSocibWeatherStation"></a>

> Code samples

```bash
curl https://example.com/v1.0/getSocibWeatherStation/boyaenderrocat/lastdata/
```

`GET /v1.0/getSocibWeatherStation/{stationName}/{period}/`

Get data from the socib bahia de palma buoy<br/>None

<h3 id="getsocibweatherstation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|stationName|path|string|true|station name currently: boyaenderrocat \| playadepalma|
|period|path|string|true|Period of time to get the data. Options: lastdata lasthour lastday|

<h3 id="getsocibweatherstation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

## getWeatherDisplay

<a id="opIdgetWeatherDisplay"></a>

> Code samples

```bash
curl 'https://example.com/v1.0/getWeatherDisplay/cnarenal/?period=latestdata'
```

`GET /v1.0/getWeatherDisplay/{stationName}/`

Get data from the weather display software<br/>None

<h3 id="getweatherdisplay-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|stationName|path|string|true|currently: 'cnarenal'\|'campastilla' \| 'cncg'|
|period|query|string|true|Period of time to get the data latestdata\|latesthour\|latestday\|dailylog|

<h3 id="getweatherdisplay-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

## getWebCams

<a id="opIdgetWebCams"></a>

> Code samples

```bash
curl https://example.com/v1.0/getWebCams/
```

`GET /v1.0/getWebCams/`

Get forecast and realtime information for known points<br/>None

<h3 id="getwebcams-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>
