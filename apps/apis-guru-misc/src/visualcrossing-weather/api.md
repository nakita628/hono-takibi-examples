<h1 id="visual-crossing-weather-api">Visual Crossing Weather API v4.6</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Weather Forecast and Historical Weather Data via RESTful API.

Base URLs:

* <a href="https://weather.visualcrossing.com">https://weather.visualcrossing.com</a>

<a href="https://www.visualcrossing.com/weather-services-terms">Terms of service</a>
Email: <a href="mailto:info@visualcrossing.com">Visual Crossing Corporation</a> 
Web: <a href="https://www.visualcrossing.com/weather-api">Visual Crossing Corporation</a> 
License: <a href="https://www.visualcrossing.com/weather-api">Visual Crossing Weather API</a>

<a href="https://www.visualcrossing.com/resources/documentation/weather-api/timeline-weather-api/">Full Timeline Weather API Documentation</a>

<h1 id="visual-crossing-weather-api-timeline-weather-api-15-day-forecast-request">Timeline Weather API (15-day forecast request)</h1>

## Historical and Forecast Weather API

> Code samples

```bash
curl 'https://example.com/VisualCrossingWebServices/rest/services/timeline/London%2CUK?key=INSERT_YOUR_KEY'
```

`GET /VisualCrossingWebServices/rest/services/timeline/{location}`

Seamless access to daily and hourly historical and forecast weather data plus weather alerts, events and current conditions.

<h3 id="historical-and-forecast-weather-api-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|location|path|string|true|Locaton of interest as an address, partial address or decimal latitude,longtude value|
|contentType|query|string|false|data format of the output either json or CSV|
|unitGroup|query|string|false|none|
|include|query|string|false|data to include in the output (required for CSV format - days,hours,alerts,current,events )|
|lang|query|string|false|Language to use for weather descriptions|
|key|query|string|true|none|

<h3 id="historical-and-forecast-weather-api-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Auto generated using Swagger Inspector|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="visual-crossing-weather-api-timeline-weather-api-single-date-request">Timeline Weather API (single date request)</h1>

## Historical and Forecast Weather API

> Code samples

```bash
curl 'https://example.com/VisualCrossingWebServices/rest/services/timeline/London%2CUK/2022-02-01T00%3A00%3A00.000Z?key=INSERT_YOUR_KEY'
```

`GET /VisualCrossingWebServices/rest/services/timeline/{location}/{startdate}`

Seamless access to daily and hourly historical and forecast weather data plus weather alerts, events and current conditions.

<h3 id="historical-and-forecast-weather-api-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|location|path|string|true|none|
|startdate|path|string|true|none|
|contentType|query|string|false|data format of the output either json or CSV|
|unitGroup|query|string|false|none|
|include|query|string|false|data to include in the output (required for CSV format - days,hours,alerts,current,events )|
|lang|query|string|false|Language to use for weather descriptions|
|key|query|string|true|none|

<h3 id="historical-and-forecast-weather-api-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Auto generated using Swagger Inspector|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="visual-crossing-weather-api-timeline-weather-api-date-range-request">Timeline Weather API (date range request)</h1>

## Historical and Forecast Weather API

> Code samples

```bash
curl 'https://example.com/VisualCrossingWebServices/rest/services/timeline/London%2CUK/2022-02-01T00%3A00%3A00.000Z/2022-03-01T00%3A00%3A00.000Z?key=INSERT_YOUR_KEY'
```

`GET /VisualCrossingWebServices/rest/services/timeline/{location}/{startdate}/{enddate}`

Seamless access to daily and hourly historical and forecast weather data plus weather alerts, events and current conditions.

<h3 id="historical-and-forecast-weather-api-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|location|path|string|true|none|
|startdate|path|string|true|none|
|enddate|path|string|true|none|
|contentType|query|string|false|data format of the output either json or CSV|
|unitGroup|query|string|false|none|
|include|query|string|false|data to include in the output (required for CSV format - days,hours,alerts,current,events )|
|lang|query|string|false|Language to use for weather descriptions|
|key|query|string|true|none|

<h3 id="historical-and-forecast-weather-api-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Auto generated using Swagger Inspector|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="visual-crossing-weather-api-weather-forecast">Weather Forecast</h1>

## Weather Forecast API

> Code samples

```bash
curl https://example.com/VisualCrossingWebServices/rest/services/weatherdata/forecast
```

`GET /VisualCrossingWebServices/rest/services/weatherdata/forecast`

Provides access to weather forecast information. The forecast is available for up to 15 days at the hourly, 12 hour and daily summary level.

<h3 id="weather-forecast-api-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sendAsDatasource|query|boolean|false|none|
|allowAsynch|query|boolean|false|none|
|shortColumnNames|query|boolean|false|none|
|locations|query|string|false|none|
|aggregateHours|query|string|false|none|
|contentType|query|string|false|none|
|unitGroup|query|string|false|none|
|key|query|string|false|none|

<h3 id="weather-forecast-api-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Auto generated using Swagger Inspector|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="visual-crossing-weather-api-historical-weather">Historical Weather</h1>

## Retrieves hourly or daily historical weather records.

> Code samples

```bash
curl https://example.com/VisualCrossingWebServices/rest/services/weatherdata/history
```

`GET /VisualCrossingWebServices/rest/services/weatherdata/history`

The weather history data is suitable for retrieving hourly or daily historical weather records.

<h3 id="retrieves-hourly-or-daily-historical-weather-records-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxDistance|query|string|false|none|
|shortColumnNames|query|boolean|false|none|
|endDateTime|query|string|false|none|
|aggregateHours|query|string|false|none|
|collectStationContributions|query|boolean|false|none|
|startDateTime|query|string|false|none|
|maxStations|query|string|false|none|
|allowAsynch|query|boolean|false|none|
|locations|query|string|false|none|
|includeNormals|query|boolean|false|none|
|contentType|query|string|false|none|
|unitGroup|query|string|false|none|
|key|query|string|false|none|

<h3 id="retrieves-hourly-or-daily-historical-weather-records-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Auto generated using Swagger Inspector|None|

<aside class="success">
This operation does not require authentication
</aside>
