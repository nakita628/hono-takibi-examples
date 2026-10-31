<h1 id="interactive-documentation-for-your-premium-plan">Interactive documentation for your Premium plan v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.



This interactive documentation is using your API key which is filled in automatically, you can find and change this in [your dashboard](https://www.meteosource.com/client).

Using the `GET` button, open your selected endpoint and read the introduction. You will find a detailed description of available parameters. You can complete the `Parameters` section and hit `Execute` to view a full API response. You can then inspect the JSON response, copy the `curl` command to run it on your machine, or obtain a URL of the request. In this way, you can easily build request command for the data you need.

Base URLs:

* <a href="https://api.apis.guru/api/v1/premium">https://api.apis.guru/api/v1/premium</a>

# Authentication

* API Key (APIKeyHeader)
    - Parameter Name: **X-API-Key**, in: header.

<h1 id="interactive-documentation-for-your-premium-plan-point-weather">Point weather</h1>

## Returns air quality data for a single point (geographic name or GPS)

<a id="opIdair_quality_air_quality_get"></a>

> Code samples

```bash
curl https://example.com/air_quality \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}"
```

`GET /air_quality`

## Air quality forecast for a single location

### Location specification
The location of the weather data is the only parameter that is required and must be specified. There are two ways to do this:
1. Specify the GPS coordinates of the location using the parameters `lat` and `lon`.
2. **OR** specify the name of the place using the parameter `place_id`. To obtain the `place_id` for the location you want, please use endpoints `/find_places_prefix` (search by prefix) or `/find_places` (search by full name).

### Notes
* **For a detailed description of variables, please consult ⚠️ <a href="https://www.meteosource.com/documentation#description_aq" target="_blank">description of variables</a> ⚠️ in Documentation or `Schema` of the response (link next to Example value in the Responses section below).**
* Do **not** make any assumptions about the number and ordering of the variables. New variables and sections may be introduced in the future. Always check the data are present before you try to use them.
* The response contains an `Expires` header, which defines the point at which the API response will not change for the same request. We highly recommend using this to avoid unnecessary requests and **increase the performance of your app**.
* Meteosource API supports HTTP compression. To enable it, simply add an `Accept-Encoding: gzip` header to your request.
* When daylight saving time starts, one hourly record will be missing (typically `2:00:00 AM`). When daylight saving time ends, the hourly forecast will contain two records with duplicate times (typically `2:00:00 AM`).


<h3 id="returns-air-quality-data-for-a-single-point-geographic-name-or-gps-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|place_id|query|string|false|Identifier of a place. To obtain the `place_id` for the location you want, please use endpoints `/find_places_prefix` (search by prefix) or `/find_places` (search by full name).|
|lat|query|string|false|Latitude in format 12N, 12.3N, 12.3, or 13S, 13.2S, -13.4|
|lon|query|string|false|Longitude in format 12E, 12.3E, 12.3, or 13W, 13.2W, -13.4|
|timezone|query|string|false|Timezone to be used for the date fields. If not specified, local timezone of the forecast location will be used.<br>The format is according to the tzinfo database, so values like `Europe/Prague` or `UTC` can be used.<br>Alternatively you may use the value ``auto`` in which case the local timezone of the location is used.<br>The full list of valid timezone strings can be found [here](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List).<br>|
|key|query|string|false|Your unique API key. You can either specify it in this parameter, or set it in `X-API-Key` header.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "aerosol_550": 0,
      "air_quality": 0,
      "co_surface": 0,
      "date": "2022-03-30T18:00:00",
      "dust_550nm": 0,
      "dust_mixing_ratio_05": 0,
      "no2_surface": 0,
      "no_surface": 0,
      "ozone_surface": 0,
      "ozone_total": 0,
      "pm10": 0,
      "pm25": 0,
      "so2_surface": 0
    }
  ],
  "elevation": 0,
  "lat": "string",
  "lon": "string",
  "timezone": "string"
}
```

> 400 Response

```json
{
  "detail": "string"
}
```

> 402 Response

```json
{
  "detail": "string"
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

> 429 Response

```json
{
  "detail": "string"
}
```

<h3 id="returns-air-quality-data-for-a-single-point-geographic-name-or-gps-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[AirQuality_PointData](#schemaairquality_pointdata)|
|400|Bad Request|Error in passed parameter.|[GeneralRequestError](#schemageneralrequesterror)|
|402|Payment Required|Maximum requests per day limit exceeded.|[GeneralRequestError](#schemageneralrequesterror)|
|403|Forbidden|API key not not specified or invalid.|[GeneralRequestError](#schemageneralrequesterror)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|
|429|Too Many Requests|Maximum requests per minute limit exceeded.|[GeneralRequestError](#schemageneralrequesterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
APIKeyHeader
</aside>

## Returns weather data for a single point (geographic name or GPS)

<a id="opIdpoint_point_get"></a>

> Code samples

```bash
curl https://example.com/point \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}"
```

`GET /point`

## Current weather and forecast for single location

### Location specification
The location of the weather data is the only parameter that is required and must be specified. There are two ways to do this:
1. Specify the GPS coordinates of the location using the parameters `lat` and `lon`.
2. **OR** specify the name of the place using the parameter `place_id`. To obtain the `place_id` for the location you want, please use endpoints `/find_places_prefix` (search by prefix) or `/find_places` (search by full name).

*Note: For mountains, it is usually better to specify the `place_id` rather than the `lat` and `lon`. When you use `place_id`, you are guaranteed to receive forecasts for the precise elevation of the peak. When you specify the coordinates, the elevation can be less precise.*

### Sections
The endpoint can return multiple sections of data. To obtain the best performance, we advise only requesting the sections you actually need. The available sections are as follows:

* Current weather situation
* Hourly forecast (for 24/48/96/168 hours, depending on the tier)
* Daily forecast (for 7/10/30 days, depending on the tier)
* Minutely precipitation forecast (for 60 minutes in the following hour, only for higher tiers)
* Weather alerts (only for higher tiers)

By default, only the current and hourly sections are returned. The division into daily parts (morning, afternoon and evening) is only available for the first 7 days of the forecast. For details regarding available parameters, see the parameter description below.

### Notes
* **For a detailed description of variables (e.g. icons), please consult ⚠️ <a href="https://www.meteosource.com/documentation#description" target="_blank">description of variables</a> ⚠️ in Documentation or `Schema` of the response (link next to Example value in the Responses section below).**
* Variables can be instantaneous, averaged, or accumulated over certain time. For example, `precipitation` forecast provides the precipitation accumulated until the next hour (data with timestamp as `12:00:00` is rain accumulated from `12:00:00` to `13:00:00`).
* Do **not** make any assumptions about the number and ordering of the variables. New variables and sections may be introduced in the future. Always check the data are present before you try to use them.
* The response contains an `Expires` header, which defines the point at which the API response will not change for the same request. We highly recommend using this to avoid unnecessary requests and **increase the performance of your app**.
* Meteosource API supports HTTP compression. To enable it, simply add an `Accept-Encoding: gzip` header to your request.
* When daylight saving time starts, one hourly record will be missing (typically `2:00:00 AM`). When daylight saving time ends, the hourly forecast will contain two records with duplicate times (typically `2:00:00 AM`).
* The detailed description of weather alerts is only available in English. The alert category is translated into selected language.


<h3 id="returns-weather-data-for-a-single-point-geographic-name-or-gps-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|place_id|query|string|false|Identifier of a place. To obtain the `place_id` for the location you want, please use endpoints `/find_places_prefix` (search by prefix) or `/find_places` (search by full name).|
|lat|query|string|false|Latitude in format 12N, 12.3N, 12.3, or 13S, 13.2S, -13.4|
|lon|query|string|false|Longitude in format 12E, 12.3E, 12.3, or 13W, 13.2W, -13.4|
|sections|query|string|false|Sections to be included in the response. You can specify more section by separating the values with a comma. The available values are:<br><br>* ``current``: Current weather situation<br>* ``daily``: Forecasts for each whole day, without the daily parts<br>* ``daily-parts``: Forecasts for each whole day, morning, afternoon and evening<br>    * Important: forecast for the morning, afternoon and evening is available only for the first<br>      7 days in the forecast<br>* ``hourly``: Forecasts with hourly resolution<br>* ``minutely``: Precipitation forecast with 1 minute resolution<br>* ``alerts``: The weather alerts<br>* ``all``: All sections<br>|
|timezone|query|string|false|Timezone to be used for the date fields. If not specified, local timezone of the forecast location will be used.<br>The format is according to the tzinfo database, so values like `Europe/Prague` or `UTC` can be used.<br>Alternatively you may use the value ``auto`` in which case the local timezone of the location is used.<br>The full list of valid timezone strings can be found [here](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List).<br>|
|language|query|object|false|The language of text summaries and place names (variable names are never translated). Available languages are:<br><br>   * ``en``: English<br>   * ``es``: Spanish<br>   * ``fr``: French<br>   * ``de``: German<br>   * ``pl``: Polish<br>   * ``pt``: Portuguese<br>   * ``cs``: Czech<br>|
|units|query|object|false|Unit system to be used. The available values are:<br><br>* `auto`: Select the system automatically, based on the forecast location.<br>* `metric`: Metric (SI) units (`°C`, `mm/h`, `m/s`, `cm`, `km`, `hPa`).<br>* `us`: Imperial units (`°F`, `in/h`, `mph`, `in`, `mi`, `Hg`).<br>* `uk`: Same as ``metric``, except that visibility is in `miles` and wind speeds are in `mph`.<br>* `ca`: Same as ``metric``, except that wind speeds are in `km/h` and pressure is in `kPa`.<br>|
|key|query|string|false|Your unique API key. You can either specify it in this parameter, or set it in `X-API-Key` header.|

> Example responses

> 200 Response

```json
{
  "alerts": {
    "data": "string"
  },
  "current": {
    "cloud_cover": 0,
    "dew_point": 0,
    "feels_like": 0,
    "humidity": 0,
    "icon": "string",
    "icon_num": 0,
    "irradiance": 0,
    "ozone": 0,
    "precipitation": {
      "total": 0,
      "type": "string"
    },
    "pressure": 0,
    "summary": "string",
    "temperature": 0,
    "uv_index": 0,
    "visibility": 0,
    "wind": {
      "angle": 0,
      "dir": "string",
      "gusts": 0,
      "speed": 0
    },
    "wind_chill": 0
  },
  "daily": {
    "data": [
      {
        "afternoon": {
          "cloud_cover": {
            "high": 0,
            "low": 0,
            "middle": 0,
            "total": 0
          },
          "dew_point": 0,
          "feels_like": 0,
          "humidity": 0,
          "icon": 0,
          "ozone": 0,
          "precipitation": {
            "total": 0,
            "type": "string"
          },
          "pressure": 0,
          "probability": {
            "freeze": 0,
            "precipitation": 0,
            "storm": 0
          },
          "snow_depth": 0,
          "soil_temperature": 0,
          "surface_temperature": 0,
          "temperature": 0,
          "visibility": 0,
          "weather": "string",
          "wind": {
            "angle": 0,
            "dir": "string",
            "gusts": 0,
            "speed": 0
          },
          "wind_chill": 0
        },
        "all_day": {
          "cloud_cover": {
            "high": 0,
            "low": 0,
            "middle": 0,
            "total": 0
          },
          "dew_point": 0,
          "dew_point_max": 0,
          "dew_point_min": 0,
          "feels_like": 0,
          "feels_like_max": 0,
          "feels_like_min": 0,
          "humidity": 0,
          "icon": 0,
          "ozone": 0,
          "precipitation": {
            "total": 0,
            "type": "string"
          },
          "pressure": 0,
          "probability": {
            "freeze": 0,
            "precipitation": 0,
            "storm": 0
          },
          "snow_depth": 0,
          "soil_temperature": 0,
          "soil_temperature_max": 0,
          "soil_temperature_min": 0,
          "surface_temperature": 0,
          "surface_temperature_max": 0,
          "surface_temperature_min": 0,
          "temperature": 0,
          "temperature_max": 0,
          "temperature_min": 0,
          "visibility": 0,
          "weather": "string",
          "wind": {
            "angle": 0,
            "dir": "string",
            "gusts": 0,
            "speed": 0
          },
          "wind_chill": 0,
          "wind_chill_max": 0,
          "wind_chill_min": 0
        },
        "astro": {
          "moon": {
            "always_down": true,
            "always_up": true,
            "phase": "string",
            "rise": "2022-03-30T18:00:00",
            "set": "2022-03-30T18:00:00"
          },
          "sun": {
            "always_down": true,
            "always_up": true,
            "rise": "2022-03-30T18:00:00",
            "set": "2022-03-30T18:00:00"
          }
        },
        "day": "string",
        "evening": {
          "cloud_cover": {
            "high": 0,
            "low": 0,
            "middle": 0,
            "total": 0
          },
          "dew_point": 0,
          "feels_like": 0,
          "humidity": 0,
          "icon": 0,
          "ozone": 0,
          "precipitation": {
            "total": 0,
            "type": "string"
          },
          "pressure": 0,
          "probability": {
            "freeze": 0,
            "precipitation": 0,
            "storm": 0
          },
          "snow_depth": 0,
          "soil_temperature": 0,
          "surface_temperature": 0,
          "temperature": 0,
          "visibility": 0,
          "weather": "string",
          "wind": {
            "angle": 0,
            "dir": "string",
            "gusts": 0,
            "speed": 0
          },
          "wind_chill": 0
        },
        "icon": 0,
        "morning": {
          "cloud_cover": {
            "high": 0,
            "low": 0,
            "middle": 0,
            "total": 0
          },
          "dew_point": 0,
          "feels_like": 0,
          "humidity": 0,
          "icon": 0,
          "ozone": 0,
          "precipitation": {
            "total": 0,
            "type": "string"
          },
          "pressure": 0,
          "probability": {
            "freeze": 0,
            "precipitation": 0,
            "storm": 0
          },
          "snow_depth": 0,
          "soil_temperature": 0,
          "surface_temperature": 0,
          "temperature": 0,
          "visibility": 0,
          "weather": "string",
          "wind": {
            "angle": 0,
            "dir": "string",
            "gusts": 0,
            "speed": 0
          },
          "wind_chill": 0
        },
        "predictability": 0,
        "statistics": {
          "precipitation": {
            "avg": 0,
            "probability": 0
          },
          "temperature": {
            "avg": 0,
            "avg_max": 0,
            "avg_min": 0,
            "record_max": 0,
            "record_min": 0
          },
          "wind": {
            "avg_angle": 0,
            "avg_dir": "string",
            "avg_speed": 0,
            "max_gust": 0,
            "max_speed": 0
          }
        },
        "summary": "string",
        "weather": "string"
      }
    ]
  },
  "elevation": 0,
  "hourly": {
    "data": [
      {
        "cape": 0,
        "cloud_cover": {
          "high": 0,
          "low": 0,
          "middle": 0,
          "total": 0
        },
        "date": "2022-03-30T18:00:00",
        "dew_point": 0,
        "evaporation": 0,
        "feels_like": 0,
        "humidity": 0,
        "icon": 0,
        "irradiance": 0,
        "lftx": 0,
        "ozone": 0,
        "precipitation": {
          "convective": 0,
          "rainspot": "string",
          "total": 0,
          "type": "string"
        },
        "pressure": 0,
        "probability": {
          "freeze": 0,
          "precipitation": 0,
          "storm": 0
        },
        "snow_depth": 0,
        "soil_temperature": 0,
        "summary": "string",
        "sunshine_duration": 0,
        "surface_temperature": 0,
        "temperature": 0,
        "uv_index": 0,
        "visibility": 0,
        "weather": "string",
        "wind": {
          "angle": 0,
          "dir": "string",
          "gusts": 0,
          "speed": 0
        },
        "wind_chill": 0
      }
    ]
  },
  "lat": "string",
  "lon": "string",
  "minutely": {
    "data": [
      {
        "date": "2022-03-30T18:00:00",
        "precipitation": 0
      }
    ],
    "summary": "string"
  },
  "timezone": "string",
  "units": "string"
}
```

> 400 Response

```json
{
  "detail": "string"
}
```

> 402 Response

```json
{
  "detail": "string"
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

> 429 Response

```json
{
  "detail": "string"
}
```

<h3 id="returns-weather-data-for-a-single-point-geographic-name-or-gps-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[Point_PointData](#schemapoint_pointdata)|
|400|Bad Request|Error in passed parameter.|[GeneralRequestError](#schemageneralrequesterror)|
|402|Payment Required|Maximum requests per day limit exceeded.|[GeneralRequestError](#schemageneralrequesterror)|
|403|Forbidden|API key not not specified or invalid.|[GeneralRequestError](#schemageneralrequesterror)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|
|429|Too Many Requests|Maximum requests per minute limit exceeded.|[GeneralRequestError](#schemageneralrequesterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
APIKeyHeader
</aside>

<h1 id="interactive-documentation-for-your-premium-plan-location-endpoints">Location endpoints</h1>

## Search for places. Complete words required.

<a id="opIdfind_places_find_places_get"></a>

> Code samples

```bash
curl 'https://example.com/find_places?text=string' \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}"
```

`GET /find_places`

## Search for places

You can use this endpoint to obtain `place_id` of the location you want, to be used in `point` endpoint.
The response also contains detailed information about the location, such as coordinates, timezone and the country the place belongs to.

Unlike the `/find_place_prefix` endpoint, complete words are required here. You can search for cities,
mountains, lakes, countries, ZIP codes, etc. The response can contain multiple places, sorted by relevance.
You can then identify the one you want by coordinates, country, or the administrative area.


<h3 id="search-for-places-complete-words-required-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|true|Place name or ZIP code|
|language|query|object|false|The language of text summaries and place names (variable names are never translated). Available languages are:<br><br>   * ``en``: English<br>   * ``es``: Spanish<br>   * ``fr``: French<br>   * ``de``: German<br>   * ``pl``: Polish<br>   * ``pt``: Portuguese<br>   * ``cs``: Czech<br>|
|key|query|string|false|Your unique API key. You can either specify it in this parameter, or set it in `X-API-Key` header.|

> Example responses

> 200 Response

```json
[
  {
    "adm_area1": "England",
    "adm_area2": "Greater London",
    "country": "United Kingdom",
    "lat": "23.2N",
    "lon": "15.3E",
    "name": "London",
    "place_id": "london",
    "timezone": "Europe/London",
    "type": "settlement"
  }
]
```

> 400 Response

```json
{
  "detail": "string"
}
```

> 402 Response

```json
{
  "detail": "string"
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

> 429 Response

```json
{
  "detail": "string"
}
```

<h3 id="search-for-places-complete-words-required-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|400|Bad Request|Error in passed parameter.|[GeneralRequestError](#schemageneralrequesterror)|
|402|Payment Required|Maximum requests per day limit exceeded.|[GeneralRequestError](#schemageneralrequesterror)|
|403|Forbidden|API key not not specified or invalid.|[GeneralRequestError](#schemageneralrequesterror)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|
|429|Too Many Requests|Maximum requests per minute limit exceeded.|[GeneralRequestError](#schemageneralrequesterror)|

<h3 id="search-for-places-complete-words-required-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[FindPlacesModel](#schemafindplacesmodel)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
APIKeyHeader
</aside>

## Prefix search for places. Useful for autocomplete forms.

<a id="opIdfind_places_prefix_find_places_prefix_get"></a>

> Code samples

```bash
curl 'https://example.com/find_places_prefix?text=string' \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}"
```

`GET /find_places_prefix`

## Search for places by prefix

You can use this endpoint to obtain `place_id` of the location you want, to be used in `point` endpoint. The response also contains detailed information about the location, such as coordinates, timezone and the country the place belongs to.

Unlike the `/find_places` endpoint, you should only specify the prefix of the place you are looking for. This is particularly useful for autocomplete forms. You can search for cities, mountains, lakes, countries, ZIP codes, etc. The response can contain multiple places, sorted by relevance. You can then identify the one you want by coordinates, country, or the administrative area.


<h3 id="prefix-search-for-places-useful-for-autocomplete-forms-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|true|Place name or ZIP code|
|language|query|object|false|The language of text summaries and place names (variable names are never translated). Available languages are:<br><br>   * ``en``: English<br>   * ``es``: Spanish<br>   * ``fr``: French<br>   * ``de``: German<br>   * ``pl``: Polish<br>   * ``pt``: Portuguese<br>   * ``cs``: Czech<br>|
|key|query|string|false|Your unique API key. You can either specify it in this parameter, or set it in `X-API-Key` header.|

> Example responses

> 200 Response

```json
[
  {
    "adm_area1": "England",
    "adm_area2": "Greater London",
    "country": "United Kingdom",
    "lat": "23.2N",
    "lon": "15.3E",
    "name": "London",
    "place_id": "london",
    "timezone": "Europe/London",
    "type": "settlement"
  }
]
```

> 400 Response

```json
{
  "detail": "string"
}
```

> 402 Response

```json
{
  "detail": "string"
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

> 429 Response

```json
{
  "detail": "string"
}
```

<h3 id="prefix-search-for-places-useful-for-autocomplete-forms-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|400|Bad Request|Error in passed parameter.|[GeneralRequestError](#schemageneralrequesterror)|
|402|Payment Required|Maximum requests per day limit exceeded.|[GeneralRequestError](#schemageneralrequesterror)|
|403|Forbidden|API key not not specified or invalid.|[GeneralRequestError](#schemageneralrequesterror)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|
|429|Too Many Requests|Maximum requests per minute limit exceeded.|[GeneralRequestError](#schemageneralrequesterror)|

<h3 id="prefix-search-for-places-useful-for-autocomplete-forms-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[FindPlacesModel](#schemafindplacesmodel)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
APIKeyHeader
</aside>

## Returns the nearest named location for a given GPS coordinates.

<a id="opIdnearest_place_nearest_place_get"></a>

> Code samples

```bash
curl 'https://example.com/nearest_place?lat=string&lon=string' \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}"
```

`GET /nearest_place`

## Search for nearest place by coordinates

You can use this endpoint to find the nearest place from given coordinates.

*Note: If you specify coordinates of a secluded place (e.g. middle of the ocean), the nearest point can be very far from the coordinates.*


<h3 id="returns-the-nearest-named-location-for-a-given-gps-coordinates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|lat|query|string|true|Latitude in format 12N, 12.3N, 12.3, or 13S, 13.2S, -13.4|
|lon|query|string|true|Longitude in format 12E, 12.3E, 12.3, or 13W, 13.2W, -13.4|
|language|query|object|false|The language of text summaries and place names (variable names are never translated). Available languages are:<br><br>   * ``en``: English<br>   * ``es``: Spanish<br>   * ``fr``: French<br>   * ``de``: German<br>   * ``pl``: Polish<br>   * ``pt``: Portuguese<br>   * ``cs``: Czech<br>|
|key|query|string|false|Your unique API key. You can either specify it in this parameter, or set it in `X-API-Key` header.|

> Example responses

> 200 Response

```json
{
  "adm_area1": "England",
  "adm_area2": "Greater London",
  "country": "United Kingdom",
  "lat": "23.2N",
  "lon": "15.3E",
  "name": "London",
  "place_id": "london",
  "timezone": "Europe/London",
  "type": "settlement"
}
```

> 400 Response

```json
{
  "detail": "string"
}
```

> 402 Response

```json
{
  "detail": "string"
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

> 429 Response

```json
{
  "detail": "string"
}
```

<h3 id="returns-the-nearest-named-location-for-a-given-gps-coordinates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[FindPlacesModel](#schemafindplacesmodel)|
|400|Bad Request|Error in passed parameter.|[GeneralRequestError](#schemageneralrequesterror)|
|402|Payment Required|Maximum requests per day limit exceeded.|[GeneralRequestError](#schemageneralrequesterror)|
|403|Forbidden|API key not not specified or invalid.|[GeneralRequestError](#schemageneralrequesterror)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|
|429|Too Many Requests|Maximum requests per minute limit exceeded.|[GeneralRequestError](#schemageneralrequesterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
APIKeyHeader
</aside>

<h1 id="interactive-documentation-for-your-premium-plan-weather-maps">Weather maps</h1>

## Returns PNG weather map for given area and variable

<a id="opIdmap_map_get"></a>

> Code samples

```bash
curl 'https://example.com/map?variable=string&datetime=string' \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}"
```

`GET /map`

## PNG weather forecast maps for given area and variable

### Area specification
There are two ways to specify geographical area you need for your map:
1. Specify `X` and `Y` coordinates and zoom level `Z` of desired tile in <a href="https://www.maptiler.com/google-maps-coordinates-tile-bounds-projection/" rel="nofollow" target="_blank">Google Maps Tile notation</a>.
2. Specify latitude and longitude bounds of the area you want to cover.

### Notes
* The resulting PNG maps are **always** in <a href="https://epsg.io/3857" rel="nofollow" target="_blank">Google Mercator projection (EPSG:3857)</a>.
* As Meteosource only covers areas between latitudes 80° and -80°, you can only request maps within these bounds, when specifying the latitude and longitude boundaries. When specifying the area using Google Maps Tile notation, the regions outside our supported latitudes will be fully transparent.
* The finest resolution is not available for maps covering very large regions. The resulting map will be automatically downscaled in this case, to guarantee high-speed responses.
* Weather maps are only supported for forecasts, not for archive data.


<h3 id="returns-png-weather-map-for-given-area-and-variable-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tile_x|query|integer|false|The X coordinate of Google Maps tile|
|tile_y|query|integer|false|The Y coordinate of Google Maps tile|
|tile_zoom|query|integer|false|The zoom level of Google Maps tile|
|min_lat|query|string|false|Minimal latitude in format 12N, 12.3N, 12.3, or 13S, 13.2S, -13.2<br>|
|min_lon|query|string|false|Minimal longitude in format 12E, 12.3E, 12.3, or 13W, 13.2W, -13.2<br>|
|max_lat|query|string|false|Maximal latitude in format 12N, 12.3N, 12.3, or 13S, 13.2S, -13.2.<br>|
|max_lon|query|string|false|Maximal longitude in format 12E, 12.3E, 12.3, or 13W, 13.2W, -13.2<br>|
|variable|query|string|true|Name of the variable for your map. Available values are:<br><br>* `temperature`: Temperature 2 metres above ground<br>* `feels_like_temperature`: Feels like temperature<br>* `clouds`: Percentage of sky covered by clouds<br>* `precipitation`: Total precipitation amount accumulated since last hour<br>* `wind_speed`: Wind speed 10 metres above the ground<br>* `wind_gust`: Wind gust speed<br>* `pressure`: Atmospheric pressure at mean sea level<br>* `humidity`: Relative humidity<br>* `wave_height`: Wave height<br>* `wave_period`: Wave period<br>* `sea_temperature`: Sea temperature (available only for +-24 hours)<br>* `air_quality`: Air quality index<br>* `ozone_surface`: Ozone at surface level<br>* `ozone_total`: Total column ozone<br>* `no2`: Nitrogen dioxide at surface level<br>* `pm2.5`: Particulate matter d < 2.5 µm (PM2.5)<br>|
|datetime|query|string|true|There are two ways to specify date and time for your map:<br><br>1. Datetime in `YYYY-MM-DDTHH:MM` format and `UTC` timezone, e.g. `2021-08-24T12:00`<br>2. Offset from current time in `[+-]<minutes\|hours\|days>` format, e.g. `+10minutes`, `-2hours` or `+1days`<br>|
|key|query|string|false|Your unique API key. You can either specify it in this parameter, or set it in `X-API-Key` header.|

> Example responses

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="returns-png-weather-map-for-given-area-and-variable-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|400|Bad Request|Error in passed parameter.|[GeneralRequestError](#schemageneralrequesterror)|
|402|Payment Required|Maximum requests per day limit exceeded.|[GeneralRequestError](#schemageneralrequesterror)|
|403|Forbidden|API key not not specified or invalid.|[GeneralRequestError](#schemageneralrequesterror)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|
|429|Too Many Requests|Maximum requests per minute limit exceeded.|[GeneralRequestError](#schemageneralrequesterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
APIKeyHeader
</aside>

<h1 id="interactive-documentation-for-your-premium-plan-time-machine---historical-weather">Time machine - historical weather</h1>

## Returns weather data for a single location and given day in the past

<a id="opIdtime_machine_time_machine_get"></a>

> Code samples

```bash
curl 'https://example.com/time_machine?date=1970-01-01' \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}"
```

`GET /time_machine`

## Actual weather data for a single location and day in the past

The output contains actual weather data for each day up to 8 years in the past, and long-term statistics of selected weather variables aggregated over 40 years.

### Location specification
The location of the weather data must be specified. There are two ways to do this:
1. Specify the GPS coordinates of the location using the parameters `lat` and `lon`.
2. **OR** specify the name of the place using the parameter `place_id`. To obtain the `place_id` for the location you want, please use endpoints `/find_places_prefix` (search by prefix) or `/find_places` (search by full name).

*Note: For mountains, it is usually better to specify the `place_id` rather than the `lat` and `lon`. When you use `place_id`, you are guaranteed to receive data for the precise elevation of the peak. When you specify the coordinates, the elevation can be less precise.*


<h3 id="returns-weather-data-for-a-single-location-and-given-day-in-the-past-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|place_id|query|string|false|Identifier of a place. To obtain the `place_id` for the location you want, please use endpoints `/find_places_prefix` (search by prefix) or `/find_places` (search by full name).|
|lat|query|string|false|Latitude in format 12N, 12.3N, 12.3, or 13S, 13.2S, -13.4|
|lon|query|string|false|Longitude in format 12E, 12.3E, 12.3, or 13W, 13.2W, -13.4|
|date|query|string(date)|true|The UTC day of the data in the past. Specify in `YYYY-MM-DD` format, e.g. `2021-08-24`.<br>|
|timezone|query|string|false|Timezone to be used for the date fields. If not specified, local timezone of the location will be used.<br>The format is according to the tzinfo database, so values like `Europe/Prague` or `UTC` can be used.<br>Alternatively you may use the value ``auto`` in which case the local timezone of the location is used.<br>The full list of valid timezone strings can be found [here](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List).<br>|
|units|query|object|false|Unit system to be used. The available values are:<br><br>* `auto`: Select the system automatically, based on the forecast location.<br>* `metric`: Metric (SI) units (`°C`, `mm/h`, `m/s`, `cm`, `km`, `hPa`).<br>* `us`: Imperial units (`°F`, `in/h`, `mph`, `in`, `mi`, `Hg`).<br>* `uk`: Same as ``metric``, except that visibility is in `miles` and wind speeds are in `mph`.<br>* `ca`: Same as ``metric``, except that wind speeds are in `km/h` and pressure is in `kPa`.<br>|
|key|query|string|false|Your unique API key. You can either specify it in this parameter, or set it in `X-API-Key` header.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "cape": 0,
      "cloud_cover": {
        "high": 0,
        "low": 0,
        "middle": 0,
        "total": 0
      },
      "date": "2022-03-30T18:00:00",
      "dew_point": 0,
      "evaporation": 0,
      "feels_like": 0,
      "humidity": 0,
      "icon": 0,
      "irradiance": 0,
      "ozone": 0,
      "precipitation": {
        "total": 0,
        "type": "string"
      },
      "pressure": 0,
      "soil_temperature": 0,
      "surface_temperature": 0,
      "temperature": 0,
      "weather": "string",
      "wind": {
        "angle": 0,
        "dir": "string",
        "gusts": 0,
        "speed": 0
      },
      "wind_chill": 0
    }
  ],
  "elevation": 0,
  "lat": "string",
  "lon": "string",
  "statistics": {
    "precipitation": {
      "avg": 0,
      "probability": 0
    },
    "temperature": {
      "avg": 0,
      "avg_max": 0,
      "avg_min": 0,
      "record_max": 0,
      "record_min": 0
    },
    "wind": {
      "avg_angle": 0,
      "avg_dir": "string",
      "avg_speed": 0,
      "max_gust": 0,
      "max_speed": 0
    }
  },
  "timezone": "string",
  "units": "string"
}
```

> 400 Response

```json
{
  "detail": "string"
}
```

> 402 Response

```json
{
  "detail": "string"
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

> 429 Response

```json
{
  "detail": "string"
}
```

<h3 id="returns-weather-data-for-a-single-location-and-given-day-in-the-past-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[TimeMachine_TimeMachine](#schematimemachine_timemachine)|
|400|Bad Request|Error in passed parameter.|[GeneralRequestError](#schemageneralrequesterror)|
|402|Payment Required|Maximum requests per day limit exceeded.|[GeneralRequestError](#schemageneralrequesterror)|
|403|Forbidden|API key not not specified or invalid.|[GeneralRequestError](#schemageneralrequesterror)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|
|429|Too Many Requests|Maximum requests per minute limit exceeded.|[GeneralRequestError](#schemageneralrequesterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
APIKeyHeader
</aside>

# Schemas

<h2 id="tocS_AirQuality_PointData">AirQuality_PointData</h2>
<!-- backwards compatibility -->
<a id="schemaairquality_pointdata"></a>
<a id="schema_AirQuality_PointData"></a>
<a id="tocSairquality_pointdata"></a>
<a id="tocsairquality_pointdata"></a>

```json
{
  "data": [
    {
      "aerosol_550": 0,
      "air_quality": 0,
      "co_surface": 0,
      "date": "2022-03-30T18:00:00",
      "dust_550nm": 0,
      "dust_mixing_ratio_05": 0,
      "no2_surface": 0,
      "no_surface": 0,
      "ozone_surface": 0,
      "ozone_total": 0,
      "pm10": 0,
      "pm25": 0,
      "so2_surface": 0
    }
  ],
  "elevation": 0,
  "lat": "string",
  "lon": "string",
  "timezone": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[AirQuality_PointHourlyData](#schemaairquality_pointhourlydata)]|true|none|none|
|elevation|integer|true|none|Elevation above sea level in metres (for units 'metric', 'uk', 'ca') or feet (for units 'us')|
|lat|string|true|none|Latitude of the point, always in the format <float><N/S>, for example ``23.5S``|
|lon|string|true|none|Longitude of the point, always in the format <float><E/W>, for example ``23.5W``|
|timezone|string|false|none|Name of the timezone in format like 'Europe/London'. Available only when the place is specified through place ID.|

<h2 id="tocS_AirQuality_PointHourlyData">AirQuality_PointHourlyData</h2>
<!-- backwards compatibility -->
<a id="schemaairquality_pointhourlydata"></a>
<a id="schema_AirQuality_PointHourlyData"></a>
<a id="tocSairquality_pointhourlydata"></a>
<a id="tocsairquality_pointhourlydata"></a>

```json
{
  "aerosol_550": 0,
  "air_quality": 0,
  "co_surface": 0,
  "date": "2022-03-30T18:00:00",
  "dust_550nm": 0,
  "dust_mixing_ratio_05": 0,
  "no2_surface": 0,
  "no_surface": 0,
  "ozone_surface": 0,
  "ozone_total": 0,
  "pm10": 0,
  "pm25": 0,
  "so2_surface": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|aerosol_550|number|false|none|Total aerosol optical depth at 550 nm.<br>Unit: dimensionless|
|air_quality|number|false|none|Air quality index. The following values can appear:<br><br>* 1 - Very good<br>* 2 - Good<br>* 3 - Medium<br>* 4 - Poor<br>* 5 - Very poor<br>* 6 - Extremely poor<br><br>Unit: index|
|co_surface|number|false|none|Carbon monoxide at surface level.<br>Unit: µg/m3|
|date|string(date-time)|false|none|Datetime in YYYY-MM-DDTHH:MM:SS format.|
|dust_550nm|number|false|none|Dust aerosol optical depth at 550 nm.<br>Unit: dimensionless|
|dust_mixing_ratio_05|number|false|none|Dust aerosol (0.55 - 0.9 µm) mixing ratio.<br>Unit: kg/kg|
|no2_surface|number|false|none|Nitrogen dioxide at surface level.<br>Unit: µg/m3|
|no_surface|number|false|none|Nitrogen monoxide at surface level.<br>Unit: µg/m3|
|ozone_surface|number|false|none|Ozone.<br>Unit: µg/m3|
|ozone_total|number|false|none|Total column ozone.<br>Unit: Dobson|
|pm10|number|false|none|Particulate matter d < 10 µm (PM10).<br>Unit: µg/m3|
|pm25|number|false|none|Particulate matter d < 2.5 µm (PM2.5).<br>Unit: µg/m3|
|so2_surface|number|false|none|Sulphur dioxide at surface level.<br>Unit: µg/m3|

<h2 id="tocS_FindPlacesModel">FindPlacesModel</h2>
<!-- backwards compatibility -->
<a id="schemafindplacesmodel"></a>
<a id="schema_FindPlacesModel"></a>
<a id="tocSfindplacesmodel"></a>
<a id="tocsfindplacesmodel"></a>

```json
{
  "adm_area1": "England",
  "adm_area2": "Greater London",
  "country": "United Kingdom",
  "lat": "23.2N",
  "lon": "15.3E",
  "name": "London",
  "place_id": "london",
  "timezone": "Europe/London",
  "type": "settlement"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adm_area1|string|false|none|first-level administrative area (a US state, for example)|
|adm_area2|string|false|none|second-level administrative area (a US county, for example)|
|country|string|false|none|name of the country|
|lat|string|false|none|Latitude of the point, always in the format \<float><N/S>, for example ``23.5S``|
|lon|string|false|none|Longitude of the point, always in format \<float><E/W>, for example ``23.5W``|
|name|string|false|none|name of the place|
|place_id|string|false|none|unique identifier of the place, which can be used in /point and /map endpoints|
|timezone|string|false|none|Timezone of the point in tzinfo format.|
|type|string|false|none|The character of the place. May be one of the following values:<br><br>* administrative areas (states, counties, districts...): ``administrative_area``<br>* country: ``country``<br>* a different political entity from a country (for example, a dependent teritory): ``political_entity``<br>* villages, towns and cities: ``settlement``<br>* air industry locations: ``airbase``, ``airfield``, ``heliport``, ``airport``, ``airport_terminal``<br>* places related to water: ``bay``, ``channel``, ``fjord``, ``lake``, ``pond``, ``falls``, ``gulf``,<br>    ``harbor``, ``reservoir``, ``sea``, ``dam``, ``cape``, ``island``, ``peninsula``<br>* places related to mountain areas: ``hill``, ``mountain``, ``peak``, ``valley``, ``volcano``, ``canyon``<br>* other places related to nature: ``park``, ``reserve``, ``resort``, ``desert``<br>* places based on postcodes: ``postcode``<br>        |

<h2 id="tocS_GeneralRequestError">GeneralRequestError</h2>
<!-- backwards compatibility -->
<a id="schemageneralrequesterror"></a>
<a id="schema_GeneralRequestError"></a>
<a id="tocSgeneralrequesterror"></a>
<a id="tocsgeneralrequesterror"></a>

```json
{
  "detail": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|true|none|none|

<h2 id="tocS_HTTPValidationError">HTTPValidationError</h2>
<!-- backwards compatibility -->
<a id="schemahttpvalidationerror"></a>
<a id="schema_HTTPValidationError"></a>
<a id="tocShttpvalidationerror"></a>
<a id="tocshttpvalidationerror"></a>

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|[[ValidationError](#schemavalidationerror)]|false|none|none|

<h2 id="tocS_Language">Language</h2>
<!-- backwards compatibility -->
<a id="schemalanguage"></a>
<a id="schema_Language"></a>
<a id="tocSlanguage"></a>
<a id="tocslanguage"></a>

```json
"cs"
```

An enumeration.

<h2 id="tocS_Point_PointAlerts">Point_PointAlerts</h2>
<!-- backwards compatibility -->
<a id="schemapoint_pointalerts"></a>
<a id="schema_Point_PointAlerts"></a>
<a id="tocSpoint_pointalerts"></a>
<a id="tocspoint_pointalerts"></a>

```json
{
  "data": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|string|false|none|none|

<h2 id="tocS_Point_PointCurrentData">Point_PointCurrentData</h2>
<!-- backwards compatibility -->
<a id="schemapoint_pointcurrentdata"></a>
<a id="schema_Point_PointCurrentData"></a>
<a id="tocSpoint_pointcurrentdata"></a>
<a id="tocspoint_pointcurrentdata"></a>

```json
{
  "cloud_cover": 0,
  "dew_point": 0,
  "feels_like": 0,
  "humidity": 0,
  "icon": "string",
  "icon_num": 0,
  "irradiance": 0,
  "ozone": 0,
  "precipitation": {
    "total": 0,
    "type": "string"
  },
  "pressure": 0,
  "summary": "string",
  "temperature": 0,
  "uv_index": 0,
  "visibility": 0,
  "wind": {
    "angle": 0,
    "dir": "string",
    "gusts": 0,
    "speed": 0
  },
  "wind_chill": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cloud_cover|number|false|none|Percentage of sky covered by clouds.<br>Unit: \%|
|dew_point|number|false|none|Current dew point temperature.<br>Units: metric = °C, us = °F, uk = °C, ca = °C|
|feels_like|number|false|none|Feels like temperature.<br>Units: metric = °C, us = °F, uk = °C, ca = °C|
|humidity|integer|false|none|Relative humidity.<br>Unit: \%|
|icon|string|false|none|String identifier of current weather icon, e.g. `light_rain`.|
|icon_num|integer|false|none|Numeric identifier of current weather icon. The following values can appear:<br><br>* 1 - Not available<br>* 2 - Sunny<br>* 3 - Mostly sunny<br>* 4 - Partly sunny<br>* 5 - Mostly cloudy<br>* 6 - Cloudy<br>* 7 - Overcast<br>* 8 - Overcast with low clouds<br>* 9 - Fog<br>* 10 - Light rain<br>* 11 - Rain<br>* 12 - Possible rain<br>* 13 - Rain shower<br>* 14 - Thunderstorm<br>* 15 - Local thunderstorms<br>* 16 - Light snow<br>* 17 - Snow<br>* 18 - Possible snow<br>* 19 - Snow shower<br>* 20 - Rain and snow<br>* 21 - Possible rain and snow<br>* 22 - Rain and snow<br>* 23 - Freezing rain<br>* 24 - Possible freezing rain<br>* 25 - Hail<br>* 26 - Clear (night)<br>* 27 - Mostly clear (night)<br>* 28 - Partly clear (night)<br>* 29 - Mostly cloudy (night)<br>* 30 - Cloudy (night)<br>* 31 - Overcast with low clouds (night)<br>* 32 - Rain shower (night)<br>* 33 - Local thunderstorms (night)<br>* 34 - Snow shower (night)<br>* 35 - Rain and snow (night)<br>* 36 - Possible freezing rain (night)<br><br>Unit: weather_ico0_36|
|irradiance|number|false|none|Global downward short-wave radiation flux.<br>Unit: W/m2|
|ozone|number|false|none|Total column of ozone.<br>Unit: Dobson|
|precipitation|[Point_PointCurrentPrecipitationData](#schemapoint_pointcurrentprecipitationdata)|true|none|none|
|pressure|number|false|none|Atmospheric pressure at mean sea level.<br>Units: metric = hPa, us = Hg, uk = hPa, ca = kPa|
|summary|string|false|none|Short text summary of current weather, e.g. `Light rain`.|
|temperature|number|false|none|Current temperature 2 metres above ground.<br>Units: metric = °C, us = °F, uk = °C, ca = °C|
|uv_index|number|false|none|UV index, values from zero (low risk of harm) to 11+ (extreme risk of harm).<br>Unit: uv_index|
|visibility|number|false|none|Visibility.<br>Units: metric = km, us = mi, uk = mi, ca = km|
|wind|[Point_PointCurrentWindData](#schemapoint_pointcurrentwinddata)|true|none|none|
|wind_chill|number|false|none|Windchill temperature.<br>Units: metric = °C, us = °F, uk = °C, ca = °C|

<h2 id="tocS_Point_PointCurrentPrecipitationData">Point_PointCurrentPrecipitationData</h2>
<!-- backwards compatibility -->
<a id="schemapoint_pointcurrentprecipitationdata"></a>
<a id="schema_Point_PointCurrentPrecipitationData"></a>
<a id="tocSpoint_pointcurrentprecipitationdata"></a>
<a id="tocspoint_pointcurrentprecipitationdata"></a>

```json
{
  "total": 0,
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|number|false|none|Current amount of precipitation.<br>Units: metric = mm/h, us = inches per hour, uk = mm/h, ca = mm/h|
|type|string(binary)|false|none|Precipitation type, may be one of:<br><br>* `none`, it there is no precipitation<br>* `rain`<br>* `snow`<br>* `rain_snow`<br>* `ice pellets`<br>* `frozen rain`<br><br>Unit: prec_str|

<h2 id="tocS_Point_PointCurrentWindData">Point_PointCurrentWindData</h2>
<!-- backwards compatibility -->
<a id="schemapoint_pointcurrentwinddata"></a>
<a id="schema_Point_PointCurrentWindData"></a>
<a id="tocSpoint_pointcurrentwinddata"></a>
<a id="tocspoint_pointcurrentwinddata"></a>

```json
{
  "angle": 0,
  "dir": "string",
  "gusts": 0,
  "speed": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|angle|number|false|none|Wind direction angle in degrees, 180° means wind from the south.<br>Unit: degrees|
|dir|string(binary)|false|none|Wind direction in `N`, `NNE`, `NE`, ..., `NNW` format.<br>Unit: 16dir|
|gusts|number|false|none|Wind gust speed.<br>Units: metric = m/s, us = mph, uk = mph, ca = km/h|
|speed|number|false|none|Wind speed 10 metres above the ground.<br>Units: metric = m/s, us = mph, uk = mph, ca = km/h|

<h2 id="tocS_Point_PointDaily">Point_PointDaily</h2>
<!-- backwards compatibility -->
<a id="schemapoint_pointdaily"></a>
<a id="schema_Point_PointDaily"></a>
<a id="tocSpoint_pointdaily"></a>
<a id="tocspoint_pointdaily"></a>

```json
{
  "data": [
    {
      "afternoon": {
        "cloud_cover": {
          "high": 0,
          "low": 0,
          "middle": 0,
          "total": 0
        },
        "dew_point": 0,
        "feels_like": 0,
        "humidity": 0,
        "icon": 0,
        "ozone": 0,
        "precipitation": {
          "total": 0,
          "type": "string"
        },
        "pressure": 0,
        "probability": {
          "freeze": 0,
          "precipitation": 0,
          "storm": 0
        },
        "snow_depth": 0,
        "soil_temperature": 0,
        "surface_temperature": 0,
        "temperature": 0,
        "visibility": 0,
        "weather": "string",
        "wind": {
          "angle": 0,
          "dir": "string",
          "gusts": 0,
          "speed": 0
        },
        "wind_chill": 0
      },
      "all_day": {
        "cloud_cover": {
          "high": 0,
          "low": 0,
          "middle": 0,
          "total": 0
        },
        "dew_point": 0,
        "dew_point_max": 0,
        "dew_point_min": 0,
        "feels_like": 0,
        "feels_like_max": 0,
        "feels_like_min": 0,
        "humidity": 0,
        "icon": 0,
        "ozone": 0,
        "precipitation": {
          "total": 0,
          "type": "string"
        },
        "pressure": 0,
        "probability": {
          "freeze": 0,
          "precipitation": 0,
          "storm": 0
        },
        "snow_depth": 0,
        "soil_temperature": 0,
        "soil_temperature_max": 0,
        "soil_temperature_min": 0,
        "surface_temperature": 0,
        "surface_temperature_max": 0,
        "surface_temperature_min": 0,
        "temperature": 0,
        "temperature_max": 0,
        "temperature_min": 0,
        "visibility": 0,
        "weather": "string",
        "wind": {
          "angle": 0,
          "dir": "string",
          "gusts": 0,
          "speed": 0
        },
        "wind_chill": 0,
        "wind_chill_max": 0,
        "wind_chill_min": 0
      },
      "astro": {
        "moon": {
          "always_down": true,
          "always_up": true,
          "phase": "string",
          "rise": "2022-03-30T18:00:00",
          "set": "2022-03-30T18:00:00"
        },
        "sun": {
          "always_down": true,
          "always_up": true,
          "rise": "2022-03-30T18:00:00",
          "set": "2022-03-30T18:00:00"
        }
      },
      "day": "string",
      "evening": {
        "cloud_cover": {
          "high": 0,
          "low": 0,
          "middle": 0,
          "total": 0
        },
        "dew_point": 0,
        "feels_like": 0,
        "humidity": 0,
        "icon": 0,
        "ozone": 0,
        "precipitation": {
          "total": 0,
          "type": "string"
        },
        "pressure": 0,
        "probability": {
          "freeze": 0,
          "precipitation": 0,
          "storm": 0
        },
        "snow_depth": 0,
        "soil_temperature": 0,
        "surface_temperature": 0,
        "temperature": 0,
        "visibility": 0,
        "weather": "string",
        "wind": {
          "angle": 0,
          "dir": "string",
          "gusts": 0,
          "speed": 0
        },
        "wind_chill": 0
      },
      "icon": 0,
      "morning": {
        "cloud_cover": {
          "high": 0,
          "low": 0,
          "middle": 0,
          "total": 0
        },
        "dew_point": 0,
        "feels_like": 0,
        "humidity": 0,
        "icon": 0,
        "ozone": 0,
        "precipitation": {
          "total": 0,
          "type": "string"
        },
        "pressure": 0,
        "probability": {
          "freeze": 0,
          "precipitation": 0,
          "storm": 0
        },
        "snow_depth": 0,
        "soil_temperature": 0,
        "surface_temperature": 0,
        "temperature": 0,
        "visibility": 0,
        "weather": "string",
        "wind": {
          "angle": 0,
          "dir": "string",
          "gusts": 0,
          "speed": 0
        },
        "wind_chill": 0
      },
      "predictability": 0,
      "statistics": {
        "precipitation": {
          "avg": 0,
          "probability": 0
        },
        "temperature": {
          "avg": 0,
          "avg_max": 0,
          "avg_min": 0,
          "record_max": 0,
          "record_min": 0
        },
        "wind": {
          "avg_angle": 0,
          "avg_dir": "string",
          "avg_speed": 0,
          "max_gust": 0,
          "max_speed": 0
        }
      },
      "summary": "string",
      "weather": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Point_PointDailyData](#schemapoint_pointdailydata)]|true|none|none|

<h2 id="tocS_Point_PointDailyAfternoonCloudCoverData">Point_PointDailyAfternoonCloudCoverData</h2>
<!-- backwards compatibility -->
<a id="schemapoint_pointdailyafternooncloudcoverdata"></a>
<a id="schema_Point_PointDailyAfternoonCloudCoverData"></a>
<a id="tocSpoint_pointdailyafternooncloudcoverdata"></a>
<a id="tocspoint_pointdailyafternooncloudcoverdata"></a>

```json
{
  "high": 0,
  "low": 0,
  "middle": 0,
  "total": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|high|number|false|none|Percentage of sky covered by high clouds. (afternoon avg)<br>Unit: \%|
|low|number|false|none|Percentage of sky covered by low clouds. (afternoon avg)<br>Unit: \%|
|middle|number|false|none|Percentage of sky covered by middle clouds. (afternoon avg)<br>Unit: \%|
|total|number|false|none|Percentage of sky covered by clouds. (afternoon avg)<br>Unit: \%|

<h2 id="tocS_Point_PointDailyAfternoonData">Point_PointDailyAfternoonData</h2>
<!-- backwards compatibility -->
<a id="schemapoint_pointdailyafternoondata"></a>
<a id="schema_Point_PointDailyAfternoonData"></a>
<a id="tocSpoint_pointdailyafternoondata"></a>
<a id="tocspoint_pointdailyafternoondata"></a>

```json
{
  "cloud_cover": {
    "high": 0,
    "low": 0,
    "middle": 0,
    "total": 0
  },
  "dew_point": 0,
  "feels_like": 0,
  "humidity": 0,
  "icon": 0,
  "ozone": 0,
  "precipitation": {
    "total": 0,
    "type": "string"
  },
  "pressure": 0,
  "probability": {
    "freeze": 0,
    "precipitation": 0,
    "storm": 0
  },
  "snow_depth": 0,
  "soil_temperature": 0,
  "surface_temperature": 0,
  "temperature": 0,
  "visibility": 0,
  "weather": "string",
  "wind": {
    "angle": 0,
    "dir": "string",
    "gusts": 0,
    "speed": 0
  },
  "wind_chill": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cloud_cover|[Point_PointDailyAfternoonCloudCoverData](#schemapoint_pointdailyafternooncloudcoverdata)|true|none|none|
|dew_point|number|false|none|Units: metric = °C, us = °F, uk = °C, ca = °C|
|feels_like|number|false|none|Units: metric = °C, us = °F, uk = °C, ca = °C|
|humidity|integer|false|none|Relative humidity. (afternoon avg)<br>Unit: \%|
|icon|integer|false|none|Afternoon umeric identifier of the weather icon. The following values can appear:<br><br>* 1 - Not available<br>* 2 - Sunny<br>* 3 - Mostly sunny<br>* 4 - Partly sunny<br>* 5 - Mostly cloudy<br>* 6 - Cloudy<br>* 7 - Overcast<br>* 8 - Overcast with low clouds<br>* 9 - Fog<br>* 10 - Light rain<br>* 11 - Rain<br>* 12 - Possible rain<br>* 13 - Rain shower<br>* 14 - Thunderstorm<br>* 15 - Local thunderstorms<br>* 16 - Light snow<br>* 17 - Snow<br>* 18 - Possible snow<br>* 19 - Snow shower<br>* 20 - Rain and snow<br>* 21 - Possible rain and snow<br>* 22 - Rain and snow<br>* 23 - Freezing rain<br>* 24 - Possible freezing rain<br>* 25 - Hail<br>* 26 - Clear (night)<br>* 27 - Mostly clear (night)<br>* 28 - Partly clear (night)<br>* 29 - Mostly cloudy (night)<br>* 30 - Cloudy (night)<br>* 31 - Overcast with low clouds (night)<br>* 32 - Rain shower (night)<br>* 33 - Local thunderstorms (night)<br>* 34 - Snow shower (night)<br>* 35 - Rain and snow (night)<br>* 36 - Possible freezing rain (night)<br><br>Unit: icon|
|ozone|number|false|none|Total column of ozone. (afternoon avg)<br>Unit: Dobson|
|precipitation|[Point_PointDailyAfternoonPrecipitationData](#schemapoint_pointdailyafternoonprecipitationdata)|true|none|none|
|pressure|number|false|none|Atmospheric pressure at mean sea level. (afternoon avg)<br>Units: metric = hPa, us = Hg, uk = hPa, ca = kPa|
|probability|[Point_PointDailyAfternoonProbData](#schemapoint_pointdailyafternoonprobdata)|true|none|none|
|snow_depth|number|false|none|Snow depth. (afternoon avg)<br>Units: metric = cm, us = inch, uk = cm, ca = cm|
|soil_temperature|number|false|none|Units: metric = °C, us = °F, uk = °C, ca = °C|
|surface_temperature|number|false|none|Units: metric = °C, us = °F, uk = °C, ca = °C|
|temperature|number|false|none|Temperature 2 metres above ground. (afternoon avg)<br>Units: metric = °C, us = °F, uk = °C, ca = °C|
|visibility|number|false|none|Visibility. (afternoon avg)<br>Units: metric = km, us = mi, uk = mi, ca = km|
|weather|string|false|none|Afternoon day string identifier of the weather icon, e.g. `light_rain`.|
|wind|[Point_PointDailyAfternoonWindData](#schemapoint_pointdailyafternoonwinddata)|true|none|none|
|wind_chill|number|false|none|Temperature 2 metres above ground. (afternoon avg)<br>Units: metric = °C, us = °F, uk = °C, ca = °C|

<h2 id="tocS_Point_PointDailyAfternoonPrecipitationData">Point_PointDailyAfternoonPrecipitationData</h2>
<!-- backwards compatibility -->
<a id="schemapoint_pointdailyafternoonprecipitationdata"></a>
<a id="schema_Point_PointDailyAfternoonPrecipitationData"></a>
<a id="tocSpoint_pointdailyafternoonprecipitationdata"></a>
<a id="tocspoint_pointdailyafternoonprecipitationdata"></a>

```json
{
  "total": 0,
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|number|false|none|Total precipitation amount accumulated since last hour. (afternoon sum)<br>Units: metric = mm/h, us = inches per hour, uk = mm/h, ca = mm/h|
|type|string(binary)|false|none|Precipitation type, may be one of:<br><br>* `none`, it there is no precipitation<br>* `rain`<br>* `snow`<br>* `rain_snow`<br>* `ice pellets`<br>* `frozen rain`<br><br>Unit: precipitation type|

<h2 id="tocS_Point_PointDailyAfternoonProbData">Point_PointDailyAfternoonProbData</h2>
<!-- backwards compatibility -->
<a id="schemapoint_pointdailyafternoonprobdata"></a>
<a id="schema_Point_PointDailyAfternoonProbData"></a>
<a id="tocSpoint_pointdailyafternoonprobdata"></a>
<a id="tocspoint_pointdailyafternoonprobdata"></a>

```json
{
  "freeze": 0,
  "precipitation": 0,
  "storm": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|freeze|number|false|none|Probability the temperature drops below 0 °C. (afternoon avg)<br>Unit: %|
|precipitation|integer|false|none|Probability of non-zero precipitation.<br>Unit: \%|
|storm|number|false|none|Total precipitation amount accumulated since last hour.<br>Unit: mm/h|

<h2 id="tocS_Point_PointDailyAfternoonWindData">Point_PointDailyAfternoonWindData</h2>
<!-- backwards compatibility -->
<a id="schemapoint_pointdailyafternoonwinddata"></a>
<a id="schema_Point_PointDailyAfternoonWindData"></a>
<a id="tocSpoint_pointdailyafternoonwinddata"></a>
<a id="tocspoint_pointdailyafternoonwinddata"></a>

```json
{
  "angle": 0,
  "dir": "string",
  "gusts": 0,
  "speed": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|angle|number|false|none|Afternoon wind direction angle in degrees, 180° means wind from the south.<br>Unit: degrees|
|dir|string(binary)|false|none|Afternoon wind direction in `N`, `NNE`, `NE`, ..., `NNW` format.<br>Unit: 16dir|
|gusts|number|false|none|Wind gust speed. (afternoon max)<br>Units: metric = m/s, us = mph, uk = mph, ca = km/h|
|speed|number|false|none|Units: metric = m/s, us = mph, uk = mph, ca = km/h|

<h2 id="tocS_Point_PointDailyAllDayCloudCoverData">Point_PointDailyAllDayCloudCoverData</h2>
<!-- backwards compatibility -->
<a id="schemapoint_pointdailyalldaycloudcoverdata"></a>
<a id="schema_Point_PointDailyAllDayCloudCoverData"></a>
<a id="tocSpoint_pointdailyalldaycloudcoverdata"></a>
<a id="tocspoint_pointdailyalldaycloudcoverdata"></a>

```json
{
  "high": 0,
  "low": 0,
  "middle": 0,
  "total": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|high|number|false|none|Percentage of sky covered by high clouds. (allday avg)<br>Unit: \%|
|low|number|false|none|Percentage of sky covered by low clouds. (allday avg)<br>Unit: \%|
|middle|number|false|none|Percentage of sky covered by middle clouds. (allday avg)<br>Unit: \%|
|total|number|false|none|Percentage of sky covered by clouds. (allday avg)<br>Unit: \%|

<h2 id="tocS_Point_PointDailyAllDayData">Point_PointDailyAllDayData</h2>
<!-- backwards compatibility -->
<a id="schemapoint_pointdailyalldaydata"></a>
<a id="schema_Point_PointDailyAllDayData"></a>
<a id="tocSpoint_pointdailyalldaydata"></a>
<a id="tocspoint_pointdailyalldaydata"></a>

```json
{
  "cloud_cover": {
    "high": 0,
    "low": 0,
    "middle": 0,
    "total": 0
  },
  "dew_point": 0,
  "dew_point_max": 0,
  "dew_point_min": 0,
  "feels_like": 0,
  "feels_like_max": 0,
  "feels_like_min": 0,
  "humidity": 0,
  "icon": 0,
  "ozone": 0,
  "precipitation": {
    "total": 0,
    "type": "string"
  },
  "pressure": 0,
  "probability": {
    "freeze": 0,
    "precipitation": 0,
    "storm": 0
  },
  "snow_depth": 0,
  "soil_temperature": 0,
  "soil_temperature_max": 0,
  "soil_temperature_min": 0,
  "surface_temperature": 0,
  "surface_temperature_max": 0,
  "surface_temperature_min": 0,
  "temperature": 0,
  "temperature_max": 0,
  "temperature_min": 0,
  "visibility": 0,
  "weather": "string",
  "wind": {
    "angle": 0,
    "dir": "string",
    "gusts": 0,
    "speed": 0
  },
  "wind_chill": 0,
  "wind_chill_max": 0,
  "wind_chill_min": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cloud_cover|[Point_PointDailyAllDayCloudCoverData](#schemapoint_pointdailyalldaycloudcoverdata)|true|none|none|
|dew_point|number|false|none|Units: metric = °C, us = °F, uk = °C, ca = °C|
|dew_point_max|number|false|none|Units: metric = °C, us = °F, uk = °C, ca = °C|
|dew_point_min|number|false|none|Units: metric = °C, us = °F, uk = °C, ca = °C|
|feels_like|number|false|none|Units: metric = °C, us = °F, uk = °C, ca = °C|
|feels_like_max|number|false|none|Units: metric = °C, us = °F, uk = °C, ca = °C|
|feels_like_min|number|false|none|Units: metric = °C, us = °F, uk = °C, ca = °C|
|humidity|integer|false|none|Relative humidity. (allday avg)<br>Unit: \%|
|icon|integer|false|none|Numeric identifier of the weather icon. The following values can appear:<br><br>* 1 - Not available<br>* 2 - Sunny<br>* 3 - Mostly sunny<br>* 4 - Partly sunny<br>* 5 - Mostly cloudy<br>* 6 - Cloudy<br>* 7 - Overcast<br>* 8 - Overcast with low clouds<br>* 9 - Fog<br>* 10 - Light rain<br>* 11 - Rain<br>* 12 - Possible rain<br>* 13 - Rain shower<br>* 14 - Thunderstorm<br>* 15 - Local thunderstorms<br>* 16 - Light snow<br>* 17 - Snow<br>* 18 - Possible snow<br>* 19 - Snow shower<br>* 20 - Rain and snow<br>* 21 - Possible rain and snow<br>* 22 - Rain and snow<br>* 23 - Freezing rain<br>* 24 - Possible freezing rain<br>* 25 - Hail<br>* 26 - Clear (night)<br>* 27 - Mostly clear (night)<br>* 28 - Partly clear (night)<br>* 29 - Mostly cloudy (night)<br>* 30 - Cloudy (night)<br>* 31 - Overcast with low clouds (night)<br>* 32 - Rain shower (night)<br>* 33 - Local thunderstorms (night)<br>* 34 - Snow shower (night)<br>* 35 - Rain and snow (night)<br>* 36 - Possible freezing rain (night)<br><br>Unit: icon|
|ozone|number|false|none|Total column of ozone. (allday avg)<br>Unit: Dobson|
|precipitation|[Point_PointDailyAllDayPrecipitationData](#schemapoint_pointdailyalldayprecipitationdata)|true|none|none|
|pressure|number|false|none|Atmospheric pressure at mean sea level. (allday avg)<br>Units: metric = hPa, us = Hg, uk = hPa, ca = kPa|
|probability|[Point_PointDailyAllDayProbData](#schemapoint_pointdailyalldayprobdata)|true|none|none|
|snow_depth|number|false|none|Snow depth. (allday avg)<br>Units: metric = cm, us = inch, uk = cm, ca = cm|
|soil_temperature|number|false|none|Units: metric = °C, us = °F, uk = °C, ca = °C|
|soil_temperature_max|number|false|none|Units: metric = °C, us = °F, uk = °C, ca = °C|
|soil_temperature_min|number|false|none|Units: metric = °C, us = °F, uk = °C, ca = °C|
|surface_temperature|number|false|none|Units: metric = °C, us = °F, uk = °C, ca = °C|
|surface_temperature_max|number|false|none|Units: metric = °C, us = °F, uk = °C, ca = °C|
|surface_temperature_min|number|false|none|Units: metric = °C, us = °F, uk = °C, ca = °C|
|temperature|number|false|none|Temperature 2 metres above ground. (allday avg)<br>Units: metric = °C, us = °F, uk = °C, ca = °C|
|temperature_max|number|false|none|Temperature 2 metres above ground. (allday max)<br>Units: metric = °C, us = °F, uk = °C, ca = °C|
|temperature_min|number|false|none|Temperature 2 metres above ground. (allday min)<br>Units: metric = °C, us = °F, uk = °C, ca = °C|
|visibility|number|false|none|Visibility. (allday avg)<br>Units: metric = km, us = mi, uk = mi, ca = km|
|weather|string|false|none|All day string identifier of the weather icon, e.g. `light_rain`.|
|wind|[Point_PointDailyAllDayWindData](#schemapoint_pointdailyalldaywinddata)|true|none|none|
|wind_chill|number|false|none|Temperature 2 metres above ground. (allday avg)<br>Units: metric = °C, us = °F, uk = °C, ca = °C|
|wind_chill_max|number|false|none|Temperature 2 metres above ground. (allday max)<br>Units: metric = °C, us = °F, uk = °C, ca = °C|
|wind_chill_min|number|false|none|Temperature 2 metres above ground. (allday min)<br>Units: metric = °C, us = °F, uk = °C, ca = °C|

<h2 id="tocS_Point_PointDailyAllDayPrecipitationData">Point_PointDailyAllDayPrecipitationData</h2>
<!-- backwards compatibility -->
<a id="schemapoint_pointdailyalldayprecipitationdata"></a>
<a id="schema_Point_PointDailyAllDayPrecipitationData"></a>
<a id="tocSpoint_pointdailyalldayprecipitationdata"></a>
<a id="tocspoint_pointdailyalldayprecipitationdata"></a>

```json
{
  "total": 0,
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|number|false|none|Total precipitation amount accumulated since last hour. (allday sum)<br>Units: metric = mm/h, us = inches per hour, uk = mm/h, ca = mm/h|
|type|string(binary)|false|none|Precipitation type, may be one of:<br><br>* `none`, it there is no precipitation<br>* `rain`<br>* `snow`<br>* `rain_snow`<br>* `ice pellets`<br>* `frozen rain`<br><br>Unit: precipitation type|

<h2 id="tocS_Point_PointDailyAllDayProbData">Point_PointDailyAllDayProbData</h2>
<!-- backwards compatibility -->
<a id="schemapoint_pointdailyalldayprobdata"></a>
<a id="schema_Point_PointDailyAllDayProbData"></a>
<a id="tocSpoint_pointdailyalldayprobdata"></a>
<a id="tocspoint_pointdailyalldayprobdata"></a>

```json
{
  "freeze": 0,
  "precipitation": 0,
  "storm": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|freeze|number|false|none|Probability the temperature drops below 0 °C. (allday avg)<br>Unit: %|
|precipitation|integer|false|none|Probability of non-zero precipitation.<br>Unit: \%|
|storm|number|false|none|Total precipitation amount accumulated since last hour.<br>Unit: mm/h|

<h2 id="tocS_Point_PointDailyAllDayWindData">Point_PointDailyAllDayWindData</h2>
<!-- backwards compatibility -->
<a id="schemapoint_pointdailyalldaywinddata"></a>
<a id="schema_Point_PointDailyAllDayWindData"></a>
<a id="tocSpoint_pointdailyalldaywinddata"></a>
<a id="tocspoint_pointdailyalldaywinddata"></a>

```json
{
  "angle": 0,
  "dir": "string",
  "gusts": 0,
  "speed": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|angle|number|false|none|All day wind direction angle in degrees, 180° means wind from the south.<br>Unit: degrees|
|dir|string(binary)|false|none|All day wind direction in `N`, `NNE`, `NE`, ..., `NNW` format.<br>Unit: 16dir|
|gusts|number|false|none|Wind gust speed. (allday max)<br>Units: metric = m/s, us = mph, uk = mph, ca = km/h|
|speed|number|false|none|Units: metric = m/s, us = mph, uk = mph, ca = km/h|

<h2 id="tocS_Point_PointDailyAstroData">Point_PointDailyAstroData</h2>
<!-- backwards compatibility -->
<a id="schemapoint_pointdailyastrodata"></a>
<a id="schema_Point_PointDailyAstroData"></a>
<a id="tocSpoint_pointdailyastrodata"></a>
<a id="tocspoint_pointdailyastrodata"></a>

```json
{
  "moon": {
    "always_down": true,
    "always_up": true,
    "phase": "string",
    "rise": "2022-03-30T18:00:00",
    "set": "2022-03-30T18:00:00"
  },
  "sun": {
    "always_down": true,
    "always_up": true,
    "rise": "2022-03-30T18:00:00",
    "set": "2022-03-30T18:00:00"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|moon|[Point_PointDailyMoonData](#schemapoint_pointdailymoondata)|true|none|none|
|sun|[Point_PointDailySunData](#schemapoint_pointdailysundata)|true|none|none|

<h2 id="tocS_Point_PointDailyData">Point_PointDailyData</h2>
<!-- backwards compatibility -->
<a id="schemapoint_pointdailydata"></a>
<a id="schema_Point_PointDailyData"></a>
<a id="tocSpoint_pointdailydata"></a>
<a id="tocspoint_pointdailydata"></a>

```json
{
  "afternoon": {
    "cloud_cover": {
      "high": 0,
      "low": 0,
      "middle": 0,
      "total": 0
    },
    "dew_point": 0,
    "feels_like": 0,
    "humidity": 0,
    "icon": 0,
    "ozone": 0,
    "precipitation": {
      "total": 0,
      "type": "string"
    },
    "pressure": 0,
    "probability": {
      "freeze": 0,
      "precipitation": 0,
      "storm": 0
    },
    "snow_depth": 0,
    "soil_temperature": 0,
    "surface_temperature": 0,
    "temperature": 0,
    "visibility": 0,
    "weather": "string",
    "wind": {
      "angle": 0,
      "dir": "string",
      "gusts": 0,
      "speed": 0
    },
    "wind_chill": 0
  },
  "all_day": {
    "cloud_cover": {
      "high": 0,
      "low": 0,
      "middle": 0,
      "total": 0
    },
    "dew_point": 0,
    "dew_point_max": 0,
    "dew_point_min": 0,
    "feels_like": 0,
    "feels_like_max": 0,
    "feels_like_min": 0,
    "humidity": 0,
    "icon": 0,
    "ozone": 0,
    "precipitation": {
      "total": 0,
      "type": "string"
    },
    "pressure": 0,
    "probability": {
      "freeze": 0,
      "precipitation": 0,
      "storm": 0
    },
    "snow_depth": 0,
    "soil_temperature": 0,
    "soil_temperature_max": 0,
    "soil_temperature_min": 0,
    "surface_temperature": 0,
    "surface_temperature_max": 0,
    "surface_temperature_min": 0,
    "temperature": 0,
    "temperature_max": 0,
    "temperature_min": 0,
    "visibility": 0,
    "weather": "string",
    "wind": {
      "angle": 0,
      "dir": "string",
      "gusts": 0,
      "speed": 0
    },
    "wind_chill": 0,
    "wind_chill_max": 0,
    "wind_chill_min": 0
  },
  "astro": {
    "moon": {
      "always_down": true,
      "always_up": true,
      "phase": "string",
      "rise": "2022-03-30T18:00:00",
      "set": "2022-03-30T18:00:00"
    },
    "sun": {
      "always_down": true,
      "always_up": true,
      "rise": "2022-03-30T18:00:00",
      "set": "2022-03-30T18:00:00"
    }
  },
  "day": "string",
  "evening": {
    "cloud_cover": {
      "high": 0,
      "low": 0,
      "middle": 0,
      "total": 0
    },
    "dew_point": 0,
    "feels_like": 0,
    "humidity": 0,
    "icon": 0,
    "ozone": 0,
    "precipitation": {
      "total": 0,
      "type": "string"
    },
    "pressure": 0,
    "probability": {
      "freeze": 0,
      "precipitation": 0,
      "storm": 0
    },
    "snow_depth": 0,
    "soil_temperature": 0,
    "surface_temperature": 0,
    "temperature": 0,
    "visibility": 0,
    "weather": "string",
    "wind": {
      "angle": 0,
      "dir": "string",
      "gusts": 0,
      "speed": 0
    },
    "wind_chill": 0
  },
  "icon": 0,
  "morning": {
    "cloud_cover": {
      "high": 0,
      "low": 0,
      "middle": 0,
      "total": 0
    },
    "dew_point": 0,
    "feels_like": 0,
    "humidity": 0,
    "icon": 0,
    "ozone": 0,
    "precipitation": {
      "total": 0,
      "type": "string"
    },
    "pressure": 0,
    "probability": {
      "freeze": 0,
      "precipitation": 0,
      "storm": 0
    },
    "snow_depth": 0,
    "soil_temperature": 0,
    "surface_temperature": 0,
    "temperature": 0,
    "visibility": 0,
    "weather": "string",
    "wind": {
      "angle": 0,
      "dir": "string",
      "gusts": 0,
      "speed": 0
    },
    "wind_chill": 0
  },
  "predictability": 0,
  "statistics": {
    "precipitation": {
      "avg": 0,
      "probability": 0
    },
    "temperature": {
      "avg": 0,
      "avg_max": 0,
      "avg_min": 0,
      "record_max": 0,
      "record_min": 0
    },
    "wind": {
      "avg_angle": 0,
      "avg_dir": "string",
      "avg_speed": 0,
      "max_gust": 0,
      "max_speed": 0
    }
  },
  "summary": "string",
  "weather": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|afternoon|[Point_PointDailyAfternoonData](#schemapoint_pointdailyafternoondata)|false|none|none|
|all_day|[Point_PointDailyAllDayData](#schemapoint_pointdailyalldaydata)|true|none|none|
|astro|[Point_PointDailyAstroData](#schemapoint_pointdailyastrodata)|true|none|none|
|day|string(binary)|false|none|Datetime in YYYY-MM-DDTHH:MM:SS format.|
|evening|[Point_PointDailyEveningData](#schemapoint_pointdailyeveningdata)|false|none|none|
|icon|integer|false|none|Numeric identifier of the weather icon. The following values can appear:<br><br>* 1 - Not available<br>* 2 - Sunny<br>* 3 - Mostly sunny<br>* 4 - Partly sunny<br>* 5 - Mostly cloudy<br>* 6 - Cloudy<br>* 7 - Overcast<br>* 8 - Overcast with low clouds<br>* 9 - Fog<br>* 10 - Light rain<br>* 11 - Rain<br>* 12 - Possible rain<br>* 13 - Rain shower<br>* 14 - Thunderstorm<br>* 15 - Local thunderstorms<br>* 16 - Light snow<br>* 17 - Snow<br>* 18 - Possible snow<br>* 19 - Snow shower<br>* 20 - Rain and snow<br>* 21 - Possible rain and snow<br>* 22 - Rain and snow<br>* 23 - Freezing rain<br>* 24 - Possible freezing rain<br>* 25 - Hail<br>* 26 - Clear (night)<br>* 27 - Mostly clear (night)<br>* 28 - Partly clear (night)<br>* 29 - Mostly cloudy (night)<br>* 30 - Cloudy (night)<br>* 31 - Overcast with low clouds (night)<br>* 32 - Rain shower (night)<br>* 33 - Local thunderstorms (night)<br>* 34 - Snow shower (night)<br>* 35 - Rain and snow (night)<br>* 36 - Possible freezing rain (night)<br><br>Unit: icon|
|morning|[Point_PointDailyMorningData](#schemapoint_pointdailymorningdata)|false|none|none|
|predictability|integer|false|none|Weather predictability. Values from 1 (very high predictability) to 5 (very low predictability).<br>Unit: 1-5|
|statistics|[Point_PointDailyStatsData](#schemapoint_pointdailystatsdata)|true|none|none|
|summary|string|false|none|Short text summary of the weather, e.g. `Light rain`.|
|weather|string|false|none|All day string identifier of the weather icon, e.g. `light_rain`.|

<h2 id="tocS_Point_PointDailyEveningCloudCoverData">Point_PointDailyEveningCloudCoverData</h2>
<!-- backwards compatibility -->
<a id="schemapoint_pointdailyeveningcloudcoverdata"></a>
<a id="schema_Point_PointDailyEveningCloudCoverData"></a>
<a id="tocSpoint_pointdailyeveningcloudcoverdata"></a>
<a id="tocspoint_pointdailyeveningcloudcoverdata"></a>

```json
{
  "high": 0,
  "low": 0,
  "middle": 0,
  "total": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|high|number|false|none|Percentage of sky covered by high clouds. (evening avg)<br>Unit: \%|
|low|number|false|none|Percentage of sky covered by low clouds. (evening avg)<br>Unit: \%|
|middle|number|false|none|Percentage of sky covered by middle clouds. (evening avg)<br>Unit: \%|
|total|number|false|none|Percentage of sky covered by clouds. (evening avg)<br>Unit: \%|

<h2 id="tocS_Point_PointDailyEveningData">Point_PointDailyEveningData</h2>
<!-- backwards compatibility -->
<a id="schemapoint_pointdailyeveningdata"></a>
<a id="schema_Point_PointDailyEveningData"></a>
<a id="tocSpoint_pointdailyeveningdata"></a>
<a id="tocspoint_pointdailyeveningdata"></a>

```json
{
  "cloud_cover": {
    "high": 0,
    "low": 0,
    "middle": 0,
    "total": 0
  },
  "dew_point": 0,
  "feels_like": 0,
  "humidity": 0,
  "icon": 0,
  "ozone": 0,
  "precipitation": {
    "total": 0,
    "type": "string"
  },
  "pressure": 0,
  "probability": {
    "freeze": 0,
    "precipitation": 0,
    "storm": 0
  },
  "snow_depth": 0,
  "soil_temperature": 0,
  "surface_temperature": 0,
  "temperature": 0,
  "visibility": 0,
  "weather": "string",
  "wind": {
    "angle": 0,
    "dir": "string",
    "gusts": 0,
    "speed": 0
  },
  "wind_chill": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cloud_cover|[Point_PointDailyEveningCloudCoverData](#schemapoint_pointdailyeveningcloudcoverdata)|true|none|none|
|dew_point|number|false|none|Units: metric = °C, us = °F, uk = °C, ca = °C|
|feels_like|number|false|none|Units: metric = °C, us = °F, uk = °C, ca = °C|
|humidity|integer|false|none|Relative humidity. (evening avg)<br>Unit: \%|
|icon|integer|false|none|Evening numeric identifier of the weather icon. The following values can appear:<br><br>* 1 - Not available<br>* 2 - Sunny<br>* 3 - Mostly sunny<br>* 4 - Partly sunny<br>* 5 - Mostly cloudy<br>* 6 - Cloudy<br>* 7 - Overcast<br>* 8 - Overcast with low clouds<br>* 9 - Fog<br>* 10 - Light rain<br>* 11 - Rain<br>* 12 - Possible rain<br>* 13 - Rain shower<br>* 14 - Thunderstorm<br>* 15 - Local thunderstorms<br>* 16 - Light snow<br>* 17 - Snow<br>* 18 - Possible snow<br>* 19 - Snow shower<br>* 20 - Rain and snow<br>* 21 - Possible rain and snow<br>* 22 - Rain and snow<br>* 23 - Freezing rain<br>* 24 - Possible freezing rain<br>* 25 - Hail<br>* 26 - Clear (night)<br>* 27 - Mostly clear (night)<br>* 28 - Partly clear (night)<br>* 29 - Mostly cloudy (night)<br>* 30 - Cloudy (night)<br>* 31 - Overcast with low clouds (night)<br>* 32 - Rain shower (night)<br>* 33 - Local thunderstorms (night)<br>* 34 - Snow shower (night)<br>* 35 - Rain and snow (night)<br>* 36 - Possible freezing rain (night)<br><br>Unit: icon|
|ozone|number|false|none|Total column of ozone. (evening avg)<br>Unit: Dobson|
|precipitation|[Point_PointDailyEveningPrecipitationData](#schemapoint_pointdailyeveningprecipitationdata)|true|none|none|
|pressure|number|false|none|Atmospheric pressure at mean sea level. (evening avg)<br>Units: metric = hPa, us = Hg, uk = hPa, ca = kPa|
|probability|[Point_PointDailyEveningProbData](#schemapoint_pointdailyeveningprobdata)|true|none|none|
|snow_depth|number|false|none|Snow depth. (evening avg)<br>Units: metric = cm, us = inch, uk = cm, ca = cm|
|soil_temperature|number|false|none|Units: metric = °C, us = °F, uk = °C, ca = °C|
|surface_temperature|number|false|none|Units: metric = °C, us = °F, uk = °C, ca = °C|
|temperature|number|false|none|Temperature 2 metres above ground. (evening avg)<br>Units: metric = °C, us = °F, uk = °C, ca = °C|
|visibility|number|false|none|Visibility. (evening avg)<br>Units: metric = km, us = mi, uk = mi, ca = km|
|weather|string|false|none|Evening day string identifier of the weather icon, e.g. `light_rain`.|
|wind|[Point_PointDailyEveningWindData](#schemapoint_pointdailyeveningwinddata)|true|none|none|
|wind_chill|number|false|none|Temperature 2 metres above ground. (evening avg)<br>Units: metric = °C, us = °F, uk = °C, ca = °C|

<h2 id="tocS_Point_PointDailyEveningPrecipitationData">Point_PointDailyEveningPrecipitationData</h2>
<!-- backwards compatibility -->
<a id="schemapoint_pointdailyeveningprecipitationdata"></a>
<a id="schema_Point_PointDailyEveningPrecipitationData"></a>
<a id="tocSpoint_pointdailyeveningprecipitationdata"></a>
<a id="tocspoint_pointdailyeveningprecipitationdata"></a>

```json
{
  "total": 0,
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|number|false|none|Total precipitation amount accumulated since last hour. (evening sum)<br>Units: metric = mm/h, us = inches per hour, uk = mm/h, ca = mm/h|
|type|string(binary)|false|none|Precipitation type, may be one of:<br><br>* `none`, it there is no precipitation<br>* `rain`<br>* `snow`<br>* `rain_snow`<br>* `ice pellets`<br>* `frozen rain`<br><br>Unit: precipitation type|

<h2 id="tocS_Point_PointDailyEveningProbData">Point_PointDailyEveningProbData</h2>
<!-- backwards compatibility -->
<a id="schemapoint_pointdailyeveningprobdata"></a>
<a id="schema_Point_PointDailyEveningProbData"></a>
<a id="tocSpoint_pointdailyeveningprobdata"></a>
<a id="tocspoint_pointdailyeveningprobdata"></a>

```json
{
  "freeze": 0,
  "precipitation": 0,
  "storm": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|freeze|number|false|none|Probability the temperature drops below 0 °C. (evening avg)<br>Unit: %|
|precipitation|integer|false|none|Probability of non-zero precipitation.<br>Unit: \%|
|storm|number|false|none|Total precipitation amount accumulated since last hour.<br>Unit: mm/h|

<h2 id="tocS_Point_PointDailyEveningWindData">Point_PointDailyEveningWindData</h2>
<!-- backwards compatibility -->
<a id="schemapoint_pointdailyeveningwinddata"></a>
<a id="schema_Point_PointDailyEveningWindData"></a>
<a id="tocSpoint_pointdailyeveningwinddata"></a>
<a id="tocspoint_pointdailyeveningwinddata"></a>

```json
{
  "angle": 0,
  "dir": "string",
  "gusts": 0,
  "speed": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|angle|number|false|none|Evening wind direction angle in degrees, 180° means wind from the south.<br>Unit: degrees|
|dir|string(binary)|false|none|Evening wind direction in `N`, `NNE`, `NE`, ..., `NNW` format.<br>Unit: 16dir|
|gusts|number|false|none|Wind gust speed. (evening max)<br>Units: metric = m/s, us = mph, uk = mph, ca = km/h|
|speed|number|false|none|Units: metric = m/s, us = mph, uk = mph, ca = km/h|

<h2 id="tocS_Point_PointDailyMoonData">Point_PointDailyMoonData</h2>
<!-- backwards compatibility -->
<a id="schemapoint_pointdailymoondata"></a>
<a id="schema_Point_PointDailyMoonData"></a>
<a id="tocSpoint_pointdailymoondata"></a>
<a id="tocspoint_pointdailymoondata"></a>

```json
{
  "always_down": true,
  "always_up": true,
  "phase": "string",
  "rise": "2022-03-30T18:00:00",
  "set": "2022-03-30T18:00:00"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|always_down|boolean|false|none|True if the moon never rises on given day, false otherwise.|
|always_up|boolean|false|none|True if the moon never sets on given day, false otherwise.|
|phase|string(binary)|false|none|Name of the moon phase, one of 'new_moon', 'first_quarter', 'full_moon', 'last_quarter'.|
|rise|string(date-time)|false|none|Datetime of the moonrise or null if the moon does not rise on given day.|
|set|string(date-time)|false|none|Datetime of the moonset or null if the moon does not set on given day.|

<h2 id="tocS_Point_PointDailyMorningCloudCoverData">Point_PointDailyMorningCloudCoverData</h2>
<!-- backwards compatibility -->
<a id="schemapoint_pointdailymorningcloudcoverdata"></a>
<a id="schema_Point_PointDailyMorningCloudCoverData"></a>
<a id="tocSpoint_pointdailymorningcloudcoverdata"></a>
<a id="tocspoint_pointdailymorningcloudcoverdata"></a>

```json
{
  "high": 0,
  "low": 0,
  "middle": 0,
  "total": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|high|number|false|none|Percentage of sky covered by high clouds. (morning avg)<br>Unit: \%|
|low|number|false|none|Percentage of sky covered by low clouds. (morning avg)<br>Unit: \%|
|middle|number|false|none|Percentage of sky covered by middle clouds. (morning avg)<br>Unit: \%|
|total|number|false|none|Percentage of sky covered by clouds. (morning avg)<br>Unit: \%|

<h2 id="tocS_Point_PointDailyMorningData">Point_PointDailyMorningData</h2>
<!-- backwards compatibility -->
<a id="schemapoint_pointdailymorningdata"></a>
<a id="schema_Point_PointDailyMorningData"></a>
<a id="tocSpoint_pointdailymorningdata"></a>
<a id="tocspoint_pointdailymorningdata"></a>

```json
{
  "cloud_cover": {
    "high": 0,
    "low": 0,
    "middle": 0,
    "total": 0
  },
  "dew_point": 0,
  "feels_like": 0,
  "humidity": 0,
  "icon": 0,
  "ozone": 0,
  "precipitation": {
    "total": 0,
    "type": "string"
  },
  "pressure": 0,
  "probability": {
    "freeze": 0,
    "precipitation": 0,
    "storm": 0
  },
  "snow_depth": 0,
  "soil_temperature": 0,
  "surface_temperature": 0,
  "temperature": 0,
  "visibility": 0,
  "weather": "string",
  "wind": {
    "angle": 0,
    "dir": "string",
    "gusts": 0,
    "speed": 0
  },
  "wind_chill": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cloud_cover|[Point_PointDailyMorningCloudCoverData](#schemapoint_pointdailymorningcloudcoverdata)|true|none|none|
|dew_point|number|false|none|Units: metric = °C, us = °F, uk = °C, ca = °C|
|feels_like|number|false|none|Units: metric = °C, us = °F, uk = °C, ca = °C|
|humidity|integer|false|none|Relative humidity. (morning avg)<br>Unit: \%|
|icon|integer|false|none|Morning numeric identifier of the weather icon. The following values can appear:<br><br>* 1 - Not available<br>* 2 - Sunny<br>* 3 - Mostly sunny<br>* 4 - Partly sunny<br>* 5 - Mostly cloudy<br>* 6 - Cloudy<br>* 7 - Overcast<br>* 8 - Overcast with low clouds<br>* 9 - Fog<br>* 10 - Light rain<br>* 11 - Rain<br>* 12 - Possible rain<br>* 13 - Rain shower<br>* 14 - Thunderstorm<br>* 15 - Local thunderstorms<br>* 16 - Light snow<br>* 17 - Snow<br>* 18 - Possible snow<br>* 19 - Snow shower<br>* 20 - Rain and snow<br>* 21 - Possible rain and snow<br>* 22 - Rain and snow<br>* 23 - Freezing rain<br>* 24 - Possible freezing rain<br>* 25 - Hail<br>* 26 - Clear (night)<br>* 27 - Mostly clear (night)<br>* 28 - Partly clear (night)<br>* 29 - Mostly cloudy (night)<br>* 30 - Cloudy (night)<br>* 31 - Overcast with low clouds (night)<br>* 32 - Rain shower (night)<br>* 33 - Local thunderstorms (night)<br>* 34 - Snow shower (night)<br>* 35 - Rain and snow (night)<br>* 36 - Possible freezing rain (night)<br><br>Unit: icon|
|ozone|number|false|none|Total column of ozone. (morning avg)<br>Unit: Dobson|
|precipitation|[Point_PointDailyMorningPrecipitationData](#schemapoint_pointdailymorningprecipitationdata)|true|none|none|
|pressure|number|false|none|Atmospheric pressure at mean sea level. (morning avg)<br>Units: metric = hPa, us = Hg, uk = hPa, ca = kPa|
|probability|[Point_PointDailyMorningProbData](#schemapoint_pointdailymorningprobdata)|true|none|none|
|snow_depth|number|false|none|Snow depth. (morning avg)<br>Units: metric = cm, us = inch, uk = cm, ca = cm|
|soil_temperature|number|false|none|Units: metric = °C, us = °F, uk = °C, ca = °C|
|surface_temperature|number|false|none|Units: metric = °C, us = °F, uk = °C, ca = °C|
|temperature|number|false|none|Temperature 2 metres above ground. (morning avg)<br>Units: metric = °C, us = °F, uk = °C, ca = °C|
|visibility|number|false|none|Visibility. (morning avg)<br>Units: metric = km, us = mi, uk = mi, ca = km|
|weather|string|false|none|Morning day string identifier of the weather icon, e.g. `light_rain`.|
|wind|[Point_PointDailyMorningWindData](#schemapoint_pointdailymorningwinddata)|true|none|none|
|wind_chill|number|false|none|Temperature 2 metres above ground. (morning avg)<br>Units: metric = °C, us = °F, uk = °C, ca = °C|

<h2 id="tocS_Point_PointDailyMorningPrecipitationData">Point_PointDailyMorningPrecipitationData</h2>
<!-- backwards compatibility -->
<a id="schemapoint_pointdailymorningprecipitationdata"></a>
<a id="schema_Point_PointDailyMorningPrecipitationData"></a>
<a id="tocSpoint_pointdailymorningprecipitationdata"></a>
<a id="tocspoint_pointdailymorningprecipitationdata"></a>

```json
{
  "total": 0,
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|number|false|none|Total precipitation amount accumulated since last hour. (morning sum)<br>Units: metric = mm/h, us = inches per hour, uk = mm/h, ca = mm/h|
|type|string(binary)|false|none|Precipitation type, may be one of:<br><br>* `none`, it there is no precipitation<br>* `rain`<br>* `snow`<br>* `rain_snow`<br>* `ice pellets`<br>* `frozen rain`<br><br>Unit: precipitation type|

<h2 id="tocS_Point_PointDailyMorningProbData">Point_PointDailyMorningProbData</h2>
<!-- backwards compatibility -->
<a id="schemapoint_pointdailymorningprobdata"></a>
<a id="schema_Point_PointDailyMorningProbData"></a>
<a id="tocSpoint_pointdailymorningprobdata"></a>
<a id="tocspoint_pointdailymorningprobdata"></a>

```json
{
  "freeze": 0,
  "precipitation": 0,
  "storm": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|freeze|number|false|none|Probability the temperature drops below 0 °C. (morning avg)<br>Unit: %|
|precipitation|integer|false|none|Probability of non-zero precipitation.<br>Unit: \%|
|storm|number|false|none|Total precipitation amount accumulated since last hour.<br>Unit: mm/h|

<h2 id="tocS_Point_PointDailyMorningWindData">Point_PointDailyMorningWindData</h2>
<!-- backwards compatibility -->
<a id="schemapoint_pointdailymorningwinddata"></a>
<a id="schema_Point_PointDailyMorningWindData"></a>
<a id="tocSpoint_pointdailymorningwinddata"></a>
<a id="tocspoint_pointdailymorningwinddata"></a>

```json
{
  "angle": 0,
  "dir": "string",
  "gusts": 0,
  "speed": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|angle|number|false|none|Morning wind direction angle in degrees, 180° means wind from the south.<br>Unit: degrees|
|dir|string(binary)|false|none|Morning wind direction in `N`, `NNE`, `NE`, ..., `NNW` format.<br>Unit: 16dir|
|gusts|number|false|none|Wind gust speed. (morning max)<br>Units: metric = m/s, us = mph, uk = mph, ca = km/h|
|speed|number|false|none|Units: metric = m/s, us = mph, uk = mph, ca = km/h|

<h2 id="tocS_Point_PointDailyStatsData">Point_PointDailyStatsData</h2>
<!-- backwards compatibility -->
<a id="schemapoint_pointdailystatsdata"></a>
<a id="schema_Point_PointDailyStatsData"></a>
<a id="tocSpoint_pointdailystatsdata"></a>
<a id="tocspoint_pointdailystatsdata"></a>

```json
{
  "precipitation": {
    "avg": 0,
    "probability": 0
  },
  "temperature": {
    "avg": 0,
    "avg_max": 0,
    "avg_min": 0,
    "record_max": 0,
    "record_min": 0
  },
  "wind": {
    "avg_angle": 0,
    "avg_dir": "string",
    "avg_speed": 0,
    "max_gust": 0,
    "max_speed": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|precipitation|[Point_PointDailyStatsPrecipitationData](#schemapoint_pointdailystatsprecipitationdata)|true|none|none|
|temperature|[Point_PointDailyStatsTemperatureData](#schemapoint_pointdailystatstemperaturedata)|true|none|none|
|wind|[Point_PointDailyStatsWindData](#schemapoint_pointdailystatswinddata)|true|none|none|

<h2 id="tocS_Point_PointDailyStatsPrecipitationData">Point_PointDailyStatsPrecipitationData</h2>
<!-- backwards compatibility -->
<a id="schemapoint_pointdailystatsprecipitationdata"></a>
<a id="schema_Point_PointDailyStatsPrecipitationData"></a>
<a id="tocSpoint_pointdailystatsprecipitationdata"></a>
<a id="tocspoint_pointdailystatsprecipitationdata"></a>

```json
{
  "avg": 0,
  "probability": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|avg|number|false|none|Long-term average daily precipitation amount.<br>Units: metric = mm/day, us = inches per day, uk = mm/day, ca = mm/day|
|probability|integer|false|none|Long-term average precipitation probability.<br>Unit: \%|

<h2 id="tocS_Point_PointDailyStatsTemperatureData">Point_PointDailyStatsTemperatureData</h2>
<!-- backwards compatibility -->
<a id="schemapoint_pointdailystatstemperaturedata"></a>
<a id="schema_Point_PointDailyStatsTemperatureData"></a>
<a id="tocSpoint_pointdailystatstemperaturedata"></a>
<a id="tocspoint_pointdailystatstemperaturedata"></a>

```json
{
  "avg": 0,
  "avg_max": 0,
  "avg_min": 0,
  "record_max": 0,
  "record_min": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|avg|number|false|none|Long-term temperature average.<br>Units: metric = °C, us = °F, uk = °C, ca = °C|
|avg_max|number|false|none|Long-term daily maximum temperature average.<br>Units: metric = °C, us = °F, uk = °C, ca = °C|
|avg_min|number|false|none|Long-term daily minimum temperature average.<br>Units: metric = °C, us = °F, uk = °C, ca = °C|
|record_max|number|false|none|Historical daily maximum.<br>Units: metric = °C, us = °F, uk = °C, ca = °C|
|record_min|number|false|none|Historical daily minimum temperature.<br>Units: metric = °C, us = °F, uk = °C, ca = °C|

<h2 id="tocS_Point_PointDailyStatsWindData">Point_PointDailyStatsWindData</h2>
<!-- backwards compatibility -->
<a id="schemapoint_pointdailystatswinddata"></a>
<a id="schema_Point_PointDailyStatsWindData"></a>
<a id="tocSpoint_pointdailystatswinddata"></a>
<a id="tocspoint_pointdailystatswinddata"></a>

```json
{
  "avg_angle": 0,
  "avg_dir": "string",
  "avg_speed": 0,
  "max_gust": 0,
  "max_speed": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|avg_angle|number|false|none|Long-term average wind angle.<br>Unit: deg|
|avg_dir|string(binary)|false|none|Long-term average wind direction in 'N', 'NNE', 'NE', ... 'NNW' format.<br>Unit: 16dir|
|avg_speed|number|false|none|Long-term average wind speed.<br>Units: metric = m/s, us = mph, uk = mph, ca = km/h|
|max_gust|number|false|none|Historical daily maximum wind gust speed.<br>Units: metric = m/s, us = mph, uk = mph, ca = km/h|
|max_speed|number|false|none|Historical daily maximum wind speed.<br>Units: metric = m/s, us = mph, uk = mph, ca = km/h|

<h2 id="tocS_Point_PointDailySunData">Point_PointDailySunData</h2>
<!-- backwards compatibility -->
<a id="schemapoint_pointdailysundata"></a>
<a id="schema_Point_PointDailySunData"></a>
<a id="tocSpoint_pointdailysundata"></a>
<a id="tocspoint_pointdailysundata"></a>

```json
{
  "always_down": true,
  "always_up": true,
  "rise": "2022-03-30T18:00:00",
  "set": "2022-03-30T18:00:00"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|always_down|boolean|false|none|True if the sun never rises on given day (polar night), false otherwise.|
|always_up|boolean|false|none|True if the sun never sets on given day (polar day), false otherwise.|
|rise|string(date-time)|false|none|Datetime of the sunrise or null during polar day/night.|
|set|string(date-time)|false|none|Datetime of the sunset or null during polar day/night.|

<h2 id="tocS_Point_PointData">Point_PointData</h2>
<!-- backwards compatibility -->
<a id="schemapoint_pointdata"></a>
<a id="schema_Point_PointData"></a>
<a id="tocSpoint_pointdata"></a>
<a id="tocspoint_pointdata"></a>

```json
{
  "alerts": {
    "data": "string"
  },
  "current": {
    "cloud_cover": 0,
    "dew_point": 0,
    "feels_like": 0,
    "humidity": 0,
    "icon": "string",
    "icon_num": 0,
    "irradiance": 0,
    "ozone": 0,
    "precipitation": {
      "total": 0,
      "type": "string"
    },
    "pressure": 0,
    "summary": "string",
    "temperature": 0,
    "uv_index": 0,
    "visibility": 0,
    "wind": {
      "angle": 0,
      "dir": "string",
      "gusts": 0,
      "speed": 0
    },
    "wind_chill": 0
  },
  "daily": {
    "data": [
      {
        "afternoon": {
          "cloud_cover": {
            "high": 0,
            "low": 0,
            "middle": 0,
            "total": 0
          },
          "dew_point": 0,
          "feels_like": 0,
          "humidity": 0,
          "icon": 0,
          "ozone": 0,
          "precipitation": {
            "total": 0,
            "type": "string"
          },
          "pressure": 0,
          "probability": {
            "freeze": 0,
            "precipitation": 0,
            "storm": 0
          },
          "snow_depth": 0,
          "soil_temperature": 0,
          "surface_temperature": 0,
          "temperature": 0,
          "visibility": 0,
          "weather": "string",
          "wind": {
            "angle": 0,
            "dir": "string",
            "gusts": 0,
            "speed": 0
          },
          "wind_chill": 0
        },
        "all_day": {
          "cloud_cover": {
            "high": 0,
            "low": 0,
            "middle": 0,
            "total": 0
          },
          "dew_point": 0,
          "dew_point_max": 0,
          "dew_point_min": 0,
          "feels_like": 0,
          "feels_like_max": 0,
          "feels_like_min": 0,
          "humidity": 0,
          "icon": 0,
          "ozone": 0,
          "precipitation": {
            "total": 0,
            "type": "string"
          },
          "pressure": 0,
          "probability": {
            "freeze": 0,
            "precipitation": 0,
            "storm": 0
          },
          "snow_depth": 0,
          "soil_temperature": 0,
          "soil_temperature_max": 0,
          "soil_temperature_min": 0,
          "surface_temperature": 0,
          "surface_temperature_max": 0,
          "surface_temperature_min": 0,
          "temperature": 0,
          "temperature_max": 0,
          "temperature_min": 0,
          "visibility": 0,
          "weather": "string",
          "wind": {
            "angle": 0,
            "dir": "string",
            "gusts": 0,
            "speed": 0
          },
          "wind_chill": 0,
          "wind_chill_max": 0,
          "wind_chill_min": 0
        },
        "astro": {
          "moon": {
            "always_down": true,
            "always_up": true,
            "phase": "string",
            "rise": "2022-03-30T18:00:00",
            "set": "2022-03-30T18:00:00"
          },
          "sun": {
            "always_down": true,
            "always_up": true,
            "rise": "2022-03-30T18:00:00",
            "set": "2022-03-30T18:00:00"
          }
        },
        "day": "string",
        "evening": {
          "cloud_cover": {
            "high": 0,
            "low": 0,
            "middle": 0,
            "total": 0
          },
          "dew_point": 0,
          "feels_like": 0,
          "humidity": 0,
          "icon": 0,
          "ozone": 0,
          "precipitation": {
            "total": 0,
            "type": "string"
          },
          "pressure": 0,
          "probability": {
            "freeze": 0,
            "precipitation": 0,
            "storm": 0
          },
          "snow_depth": 0,
          "soil_temperature": 0,
          "surface_temperature": 0,
          "temperature": 0,
          "visibility": 0,
          "weather": "string",
          "wind": {
            "angle": 0,
            "dir": "string",
            "gusts": 0,
            "speed": 0
          },
          "wind_chill": 0
        },
        "icon": 0,
        "morning": {
          "cloud_cover": {
            "high": 0,
            "low": 0,
            "middle": 0,
            "total": 0
          },
          "dew_point": 0,
          "feels_like": 0,
          "humidity": 0,
          "icon": 0,
          "ozone": 0,
          "precipitation": {
            "total": 0,
            "type": "string"
          },
          "pressure": 0,
          "probability": {
            "freeze": 0,
            "precipitation": 0,
            "storm": 0
          },
          "snow_depth": 0,
          "soil_temperature": 0,
          "surface_temperature": 0,
          "temperature": 0,
          "visibility": 0,
          "weather": "string",
          "wind": {
            "angle": 0,
            "dir": "string",
            "gusts": 0,
            "speed": 0
          },
          "wind_chill": 0
        },
        "predictability": 0,
        "statistics": {
          "precipitation": {
            "avg": 0,
            "probability": 0
          },
          "temperature": {
            "avg": 0,
            "avg_max": 0,
            "avg_min": 0,
            "record_max": 0,
            "record_min": 0
          },
          "wind": {
            "avg_angle": 0,
            "avg_dir": "string",
            "avg_speed": 0,
            "max_gust": 0,
            "max_speed": 0
          }
        },
        "summary": "string",
        "weather": "string"
      }
    ]
  },
  "elevation": 0,
  "hourly": {
    "data": [
      {
        "cape": 0,
        "cloud_cover": {
          "high": 0,
          "low": 0,
          "middle": 0,
          "total": 0
        },
        "date": "2022-03-30T18:00:00",
        "dew_point": 0,
        "evaporation": 0,
        "feels_like": 0,
        "humidity": 0,
        "icon": 0,
        "irradiance": 0,
        "lftx": 0,
        "ozone": 0,
        "precipitation": {
          "convective": 0,
          "rainspot": "string",
          "total": 0,
          "type": "string"
        },
        "pressure": 0,
        "probability": {
          "freeze": 0,
          "precipitation": 0,
          "storm": 0
        },
        "snow_depth": 0,
        "soil_temperature": 0,
        "summary": "string",
        "sunshine_duration": 0,
        "surface_temperature": 0,
        "temperature": 0,
        "uv_index": 0,
        "visibility": 0,
        "weather": "string",
        "wind": {
          "angle": 0,
          "dir": "string",
          "gusts": 0,
          "speed": 0
        },
        "wind_chill": 0
      }
    ]
  },
  "lat": "string",
  "lon": "string",
  "minutely": {
    "data": [
      {
        "date": "2022-03-30T18:00:00",
        "precipitation": 0
      }
    ],
    "summary": "string"
  },
  "timezone": "string",
  "units": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alerts|[Point_PointAlerts](#schemapoint_pointalerts)|true|none|none|
|current|[Point_PointCurrentData](#schemapoint_pointcurrentdata)|false|none|none|
|daily|[Point_PointDaily](#schemapoint_pointdaily)|false|none|none|
|elevation|integer|true|none|Elevation above sea level in metres (for units 'metric', 'uk', 'ca') or feet (for units 'us')|
|hourly|[Point_PointHourly](#schemapoint_pointhourly)|false|none|none|
|lat|string|true|none|Latitude of the point, always in the format <float><N/S>, for example ``23.5S``|
|lon|string|true|none|Longitude of the point, always in the format <float><E/W>, for example ``23.5W``|
|minutely|[Point_PointMinutely](#schemapoint_pointminutely)|false|none|none|
|timezone|string|false|none|Name of the timezone in format like 'Europe/London'. Available only when the place is specified through place ID.|
|units|string|true|none|Unit system (metric, uk, ca or us)|

<h2 id="tocS_Point_PointHourly">Point_PointHourly</h2>
<!-- backwards compatibility -->
<a id="schemapoint_pointhourly"></a>
<a id="schema_Point_PointHourly"></a>
<a id="tocSpoint_pointhourly"></a>
<a id="tocspoint_pointhourly"></a>

```json
{
  "data": [
    {
      "cape": 0,
      "cloud_cover": {
        "high": 0,
        "low": 0,
        "middle": 0,
        "total": 0
      },
      "date": "2022-03-30T18:00:00",
      "dew_point": 0,
      "evaporation": 0,
      "feels_like": 0,
      "humidity": 0,
      "icon": 0,
      "irradiance": 0,
      "lftx": 0,
      "ozone": 0,
      "precipitation": {
        "convective": 0,
        "rainspot": "string",
        "total": 0,
        "type": "string"
      },
      "pressure": 0,
      "probability": {
        "freeze": 0,
        "precipitation": 0,
        "storm": 0
      },
      "snow_depth": 0,
      "soil_temperature": 0,
      "summary": "string",
      "sunshine_duration": 0,
      "surface_temperature": 0,
      "temperature": 0,
      "uv_index": 0,
      "visibility": 0,
      "weather": "string",
      "wind": {
        "angle": 0,
        "dir": "string",
        "gusts": 0,
        "speed": 0
      },
      "wind_chill": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Point_PointHourlyData](#schemapoint_pointhourlydata)]|true|none|none|

<h2 id="tocS_Point_PointHourlyCloudCoverData">Point_PointHourlyCloudCoverData</h2>
<!-- backwards compatibility -->
<a id="schemapoint_pointhourlycloudcoverdata"></a>
<a id="schema_Point_PointHourlyCloudCoverData"></a>
<a id="tocSpoint_pointhourlycloudcoverdata"></a>
<a id="tocspoint_pointhourlycloudcoverdata"></a>

```json
{
  "high": 0,
  "low": 0,
  "middle": 0,
  "total": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|high|number|false|none|Percentage of sky covered by high clouds.<br>Unit: \%|
|low|number|false|none|Percentage of sky covered by low clouds.<br>Unit: \%|
|middle|number|false|none|Percentage of sky covered by middle clouds.<br>Unit: \%|
|total|number|false|none|Unit: \%|

<h2 id="tocS_Point_PointHourlyData">Point_PointHourlyData</h2>
<!-- backwards compatibility -->
<a id="schemapoint_pointhourlydata"></a>
<a id="schema_Point_PointHourlyData"></a>
<a id="tocSpoint_pointhourlydata"></a>
<a id="tocspoint_pointhourlydata"></a>

```json
{
  "cape": 0,
  "cloud_cover": {
    "high": 0,
    "low": 0,
    "middle": 0,
    "total": 0
  },
  "date": "2022-03-30T18:00:00",
  "dew_point": 0,
  "evaporation": 0,
  "feels_like": 0,
  "humidity": 0,
  "icon": 0,
  "irradiance": 0,
  "lftx": 0,
  "ozone": 0,
  "precipitation": {
    "convective": 0,
    "rainspot": "string",
    "total": 0,
    "type": "string"
  },
  "pressure": 0,
  "probability": {
    "freeze": 0,
    "precipitation": 0,
    "storm": 0
  },
  "snow_depth": 0,
  "soil_temperature": 0,
  "summary": "string",
  "sunshine_duration": 0,
  "surface_temperature": 0,
  "temperature": 0,
  "uv_index": 0,
  "visibility": 0,
  "weather": "string",
  "wind": {
    "angle": 0,
    "dir": "string",
    "gusts": 0,
    "speed": 0
  },
  "wind_chill": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cape|number|false|none|Convective available potential energy.<br>Unit: J/kg|
|cloud_cover|[Point_PointHourlyCloudCoverData](#schemapoint_pointhourlycloudcoverdata)|true|none|none|
|date|string(date-time)|false|none|Datetime in YYYY-MM-DDTHH:MM:SS format.|
|dew_point|number|false|none|Units: metric = °C, us = °F, uk = °C, ca = °C|
|evaporation|number|false|none|Evaporation of liquid water into water vapor.<br>Unit: mm/h|
|feels_like|number|false|none|Units: metric = °C, us = °F, uk = °C, ca = °C|
|humidity|integer|false|none|Relative humidity.<br>Unit: \%|
|icon|integer|false|none|Numeric identifier of the weather icon. The following values can appear:<br><br>* 1 - Not available<br>* 2 - Sunny<br>* 3 - Mostly sunny<br>* 4 - Partly sunny<br>* 5 - Mostly cloudy<br>* 6 - Cloudy<br>* 7 - Overcast<br>* 8 - Overcast with low clouds<br>* 9 - Fog<br>* 10 - Light rain<br>* 11 - Rain<br>* 12 - Possible rain<br>* 13 - Rain shower<br>* 14 - Thunderstorm<br>* 15 - Local thunderstorms<br>* 16 - Light snow<br>* 17 - Snow<br>* 18 - Possible snow<br>* 19 - Snow shower<br>* 20 - Rain and snow<br>* 21 - Possible rain and snow<br>* 22 - Rain and snow<br>* 23 - Freezing rain<br>* 24 - Possible freezing rain<br>* 25 - Hail<br>* 26 - Clear (night)<br>* 27 - Mostly clear (night)<br>* 28 - Partly clear (night)<br>* 29 - Mostly cloudy (night)<br>* 30 - Cloudy (night)<br>* 31 - Overcast with low clouds (night)<br>* 32 - Rain shower (night)<br>* 33 - Local thunderstorms (night)<br>* 34 - Snow shower (night)<br>* 35 - Rain and snow (night)<br>* 36 - Possible freezing rain (night)<br><br>Unit: weather_ico0_36|
|irradiance|number|false|none|Global downward short-wave radiation flux.<br>Unit: W/m2|
|lftx|number|false|none|Surface lifted index.<br>Unit: K|
|ozone|number|false|none|Total column of ozone.<br>Unit: Dobson|
|precipitation|[Point_PointHourlyPrecipitationData](#schemapoint_pointhourlyprecipitationdata)|true|none|none|
|pressure|number|false|none|Atmospheric pressure at mean sea level.<br>Units: metric = hPa, us = Hg, uk = hPa, ca = kPa|
|probability|[Point_PointHourlyProbData](#schemapoint_pointhourlyprobdata)|true|none|none|
|snow_depth|number|false|none|Snow depth.<br>Units: metric = cm, us = inch, uk = cm, ca = cm|
|soil_temperature|number|false|none|Units: metric = °C, us = °F, uk = °C, ca = °C|
|summary|string|false|none|Short text summary of the weather, e.g. `Light rain`.|
|sunshine_duration|number|false|none|Sunshine duration since start of previous hour.<br>Unit: s|
|surface_temperature|number|false|none|Units: metric = °C, us = °F, uk = °C, ca = °C|
|temperature|number|false|none|Units: metric = °C, us = °F, uk = °C, ca = °C|
|uv_index|number|false|none|UV index, values from zero (low risk of harm) to 11+ (extreme risk of harm).<br>Unit: uv_index|
|visibility|number|false|none|Visibility.<br>Units: metric = km, us = mi, uk = mi, ca = km|
|weather|string|false|none|String identifier of the weather icon, e.g. `light_rain`.|
|wind|[Point_PointHourlyWindData](#schemapoint_pointhourlywinddata)|true|none|none|
|wind_chill|number|false|none|Units: metric = °C, us = °F, uk = °C, ca = °C|

<h2 id="tocS_Point_PointHourlyPrecipitationData">Point_PointHourlyPrecipitationData</h2>
<!-- backwards compatibility -->
<a id="schemapoint_pointhourlyprecipitationdata"></a>
<a id="schema_Point_PointHourlyPrecipitationData"></a>
<a id="tocSpoint_pointhourlyprecipitationdata"></a>
<a id="tocspoint_pointhourlyprecipitationdata"></a>

```json
{
  "convective": 0,
  "rainspot": "string",
  "total": 0,
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|convective|number|false|none|Total precipitation amount accumulated since last hour.<br>Units: metric = mm/h, us = inches per hour, uk = mm/h, ca = mm/h|
|rainspot|string(binary)|false|none|Precipitation in the surrounding of queried location. The data is 7x7 ASCII art string, queried location being in the center. Character `#` means there is precipitation, `.` means no precipitation. The distance between neighboring cells is 0.25°.<br>Unit: rainspot|
|total|number|false|none|Total precipitation amount accumulated since last hour.<br>Units: metric = mm/h, us = inches per hour, uk = mm/h, ca = mm/h|
|type|string(binary)|false|none|Precipitation type, may be one of:<br><br>* `none`, it there is no precipitation<br>* `rain`<br>* `snow`<br>* `rain_snow`<br>* `ice pellets`<br>* `frozen rain`<br><br>Unit: precipitation type|

<h2 id="tocS_Point_PointHourlyProbData">Point_PointHourlyProbData</h2>
<!-- backwards compatibility -->
<a id="schemapoint_pointhourlyprobdata"></a>
<a id="schema_Point_PointHourlyProbData"></a>
<a id="tocSpoint_pointhourlyprobdata"></a>
<a id="tocspoint_pointhourlyprobdata"></a>

```json
{
  "freeze": 0,
  "precipitation": 0,
  "storm": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|freeze|number|false|none|Unit: \%|
|precipitation|integer|false|none|Probability of non-zero precipitation.<br>Unit: \%|
|storm|number|false|none|Total precipitation amount accumulated since last hour.<br>Unit: mm/h|

<h2 id="tocS_Point_PointHourlyWindData">Point_PointHourlyWindData</h2>
<!-- backwards compatibility -->
<a id="schemapoint_pointhourlywinddata"></a>
<a id="schema_Point_PointHourlyWindData"></a>
<a id="tocSpoint_pointhourlywinddata"></a>
<a id="tocspoint_pointhourlywinddata"></a>

```json
{
  "angle": 0,
  "dir": "string",
  "gusts": 0,
  "speed": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|angle|number|false|none|Wind direction angle in degrees, 180° means wind from the south.<br>Unit: degrees|
|dir|string(binary)|false|none|Wind direction in `N`, `NNE`, `NE`, ..., `NNW` format.<br>Unit: 16dir|
|gusts|number|false|none|Units: metric = m/s, us = mph, uk = mph, ca = km/h|
|speed|number|false|none|Units: metric = m/s, us = mph, uk = mph, ca = km/h|

<h2 id="tocS_Point_PointMinutely">Point_PointMinutely</h2>
<!-- backwards compatibility -->
<a id="schemapoint_pointminutely"></a>
<a id="schema_Point_PointMinutely"></a>
<a id="tocSpoint_pointminutely"></a>
<a id="tocspoint_pointminutely"></a>

```json
{
  "data": [
    {
      "date": "2022-03-30T18:00:00",
      "precipitation": 0
    }
  ],
  "summary": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Point_PointMinutelyPrecipitationData](#schemapoint_pointminutelyprecipitationdata)]|true|none|none|
|summary|string|false|none|Text summary about upcoming precipitation.<br>Unit: summary|

<h2 id="tocS_Point_PointMinutelyPrecipitationData">Point_PointMinutelyPrecipitationData</h2>
<!-- backwards compatibility -->
<a id="schemapoint_pointminutelyprecipitationdata"></a>
<a id="schema_Point_PointMinutelyPrecipitationData"></a>
<a id="tocSpoint_pointminutelyprecipitationdata"></a>
<a id="tocspoint_pointminutelyprecipitationdata"></a>

```json
{
  "date": "2022-03-30T18:00:00",
  "precipitation": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|date|string(date-time)|false|none|Datetime in YYYY-MM-DDTHH:MM:SS format.|
|precipitation|number|false|none|Minutely precipitation amount (per hour). For the startup tier, showing one value per 10 minutes.<br>For other tiers, showing one value per each minute.<br><br>Unit: mm/h|

<h2 id="tocS_TimeMachine_PointDailyStatsData">TimeMachine_PointDailyStatsData</h2>
<!-- backwards compatibility -->
<a id="schematimemachine_pointdailystatsdata"></a>
<a id="schema_TimeMachine_PointDailyStatsData"></a>
<a id="tocStimemachine_pointdailystatsdata"></a>
<a id="tocstimemachine_pointdailystatsdata"></a>

```json
{
  "precipitation": {
    "avg": 0,
    "probability": 0
  },
  "temperature": {
    "avg": 0,
    "avg_max": 0,
    "avg_min": 0,
    "record_max": 0,
    "record_min": 0
  },
  "wind": {
    "avg_angle": 0,
    "avg_dir": "string",
    "avg_speed": 0,
    "max_gust": 0,
    "max_speed": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|precipitation|[TimeMachine_PointDailyStatsPrecipitationData](#schematimemachine_pointdailystatsprecipitationdata)|true|none|none|
|temperature|[TimeMachine_PointDailyStatsTemperatureData](#schematimemachine_pointdailystatstemperaturedata)|true|none|none|
|wind|[TimeMachine_PointDailyStatsWindData](#schematimemachine_pointdailystatswinddata)|true|none|none|

<h2 id="tocS_TimeMachine_PointDailyStatsPrecipitationData">TimeMachine_PointDailyStatsPrecipitationData</h2>
<!-- backwards compatibility -->
<a id="schematimemachine_pointdailystatsprecipitationdata"></a>
<a id="schema_TimeMachine_PointDailyStatsPrecipitationData"></a>
<a id="tocStimemachine_pointdailystatsprecipitationdata"></a>
<a id="tocstimemachine_pointdailystatsprecipitationdata"></a>

```json
{
  "avg": 0,
  "probability": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|avg|number|false|none|Long-term average daily precipitation amount.<br>Units: metric = mm/day, us = inches per day, uk = mm/day, ca = mm/day|
|probability|integer|false|none|Long-term average precipitation probability.<br>Unit: \%|

<h2 id="tocS_TimeMachine_PointDailyStatsTemperatureData">TimeMachine_PointDailyStatsTemperatureData</h2>
<!-- backwards compatibility -->
<a id="schematimemachine_pointdailystatstemperaturedata"></a>
<a id="schema_TimeMachine_PointDailyStatsTemperatureData"></a>
<a id="tocStimemachine_pointdailystatstemperaturedata"></a>
<a id="tocstimemachine_pointdailystatstemperaturedata"></a>

```json
{
  "avg": 0,
  "avg_max": 0,
  "avg_min": 0,
  "record_max": 0,
  "record_min": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|avg|number|false|none|Long-term temperature average.<br>Units: metric = °C, us = °F, uk = °C, ca = °C|
|avg_max|number|false|none|Long-term daily maximum temperature average.<br>Units: metric = °C, us = °F, uk = °C, ca = °C|
|avg_min|number|false|none|Long-term daily minimum temperature average.<br>Units: metric = °C, us = °F, uk = °C, ca = °C|
|record_max|number|false|none|Historical daily maximum.<br>Units: metric = °C, us = °F, uk = °C, ca = °C|
|record_min|number|false|none|Historical daily minimum temperature.<br>Units: metric = °C, us = °F, uk = °C, ca = °C|

<h2 id="tocS_TimeMachine_PointDailyStatsWindData">TimeMachine_PointDailyStatsWindData</h2>
<!-- backwards compatibility -->
<a id="schematimemachine_pointdailystatswinddata"></a>
<a id="schema_TimeMachine_PointDailyStatsWindData"></a>
<a id="tocStimemachine_pointdailystatswinddata"></a>
<a id="tocstimemachine_pointdailystatswinddata"></a>

```json
{
  "avg_angle": 0,
  "avg_dir": "string",
  "avg_speed": 0,
  "max_gust": 0,
  "max_speed": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|avg_angle|number|false|none|Long-term average wind angle.<br>Unit: deg|
|avg_dir|string(binary)|false|none|Long-term average wind direction in 'N', 'NNE', 'NE', ... 'NNW' format.<br>Unit: 16dir|
|avg_speed|number|false|none|Long-term average wind speed.<br>Units: metric = m/s, us = mph, uk = mph, ca = km/h|
|max_gust|number|false|none|Historical daily maximum wind gust speed.<br>Units: metric = m/s, us = mph, uk = mph, ca = km/h|
|max_speed|number|false|none|Historical daily maximum wind speed.<br>Units: metric = m/s, us = mph, uk = mph, ca = km/h|

<h2 id="tocS_TimeMachine_TimeMachine">TimeMachine_TimeMachine</h2>
<!-- backwards compatibility -->
<a id="schematimemachine_timemachine"></a>
<a id="schema_TimeMachine_TimeMachine"></a>
<a id="tocStimemachine_timemachine"></a>
<a id="tocstimemachine_timemachine"></a>

```json
{
  "data": [
    {
      "cape": 0,
      "cloud_cover": {
        "high": 0,
        "low": 0,
        "middle": 0,
        "total": 0
      },
      "date": "2022-03-30T18:00:00",
      "dew_point": 0,
      "evaporation": 0,
      "feels_like": 0,
      "humidity": 0,
      "icon": 0,
      "irradiance": 0,
      "ozone": 0,
      "precipitation": {
        "total": 0,
        "type": "string"
      },
      "pressure": 0,
      "soil_temperature": 0,
      "surface_temperature": 0,
      "temperature": 0,
      "weather": "string",
      "wind": {
        "angle": 0,
        "dir": "string",
        "gusts": 0,
        "speed": 0
      },
      "wind_chill": 0
    }
  ],
  "elevation": 0,
  "lat": "string",
  "lon": "string",
  "statistics": {
    "precipitation": {
      "avg": 0,
      "probability": 0
    },
    "temperature": {
      "avg": 0,
      "avg_max": 0,
      "avg_min": 0,
      "record_max": 0,
      "record_min": 0
    },
    "wind": {
      "avg_angle": 0,
      "avg_dir": "string",
      "avg_speed": 0,
      "max_gust": 0,
      "max_speed": 0
    }
  },
  "timezone": "string",
  "units": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[TimeMachine_TimeMachineHourlyData](#schematimemachine_timemachinehourlydata)]|true|none|none|
|elevation|integer|true|none|Elevation above sea level in metres (for units 'metric', 'uk', 'ca') or feet (for units 'us')|
|lat|string|true|none|Latitude of the point, always in the format <float><N/S>, for example ``23.5S``|
|lon|string|true|none|Longitude of the point, always in the format <float><E/W>, for example ``23.5W``|
|statistics|[TimeMachine_PointDailyStatsData](#schematimemachine_pointdailystatsdata)|true|none|none|
|timezone|string|false|none|Name of the timezone in format like 'Europe/London'. Available only when the place is specified through place ID.|
|units|string|true|none|Unit system (metric, uk, ca or us)|

<h2 id="tocS_TimeMachine_TimeMachineCloudCoverData">TimeMachine_TimeMachineCloudCoverData</h2>
<!-- backwards compatibility -->
<a id="schematimemachine_timemachinecloudcoverdata"></a>
<a id="schema_TimeMachine_TimeMachineCloudCoverData"></a>
<a id="tocStimemachine_timemachinecloudcoverdata"></a>
<a id="tocstimemachine_timemachinecloudcoverdata"></a>

```json
{
  "high": 0,
  "low": 0,
  "middle": 0,
  "total": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|high|integer|false|none|Percentage of sky covered by high clouds.<br>Unit: %|
|low|integer|false|none|Percentage of sky covered by low clouds.<br>Unit: %|
|middle|integer|false|none|Percentage of sky covered by middle clouds.<br>Unit: %|
|total|integer|false|none|Percentage of sky covered by clouds.<br>Unit: %|

<h2 id="tocS_TimeMachine_TimeMachineHourlyData">TimeMachine_TimeMachineHourlyData</h2>
<!-- backwards compatibility -->
<a id="schematimemachine_timemachinehourlydata"></a>
<a id="schema_TimeMachine_TimeMachineHourlyData"></a>
<a id="tocStimemachine_timemachinehourlydata"></a>
<a id="tocstimemachine_timemachinehourlydata"></a>

```json
{
  "cape": 0,
  "cloud_cover": {
    "high": 0,
    "low": 0,
    "middle": 0,
    "total": 0
  },
  "date": "2022-03-30T18:00:00",
  "dew_point": 0,
  "evaporation": 0,
  "feels_like": 0,
  "humidity": 0,
  "icon": 0,
  "irradiance": 0,
  "ozone": 0,
  "precipitation": {
    "total": 0,
    "type": "string"
  },
  "pressure": 0,
  "soil_temperature": 0,
  "surface_temperature": 0,
  "temperature": 0,
  "weather": "string",
  "wind": {
    "angle": 0,
    "dir": "string",
    "gusts": 0,
    "speed": 0
  },
  "wind_chill": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cape|integer|false|none|Convective available potential energy.<br>Unit: J/kg|
|cloud_cover|[TimeMachine_TimeMachineCloudCoverData](#schematimemachine_timemachinecloudcoverdata)|true|none|none|
|date|string(date-time)|false|none|Datetime in YYYY-MM-DDTHH:MM:SS format.|
|dew_point|number|false|none|Units: metric = °C, us = °F, uk = °C, ca = °C|
|evaporation|integer|false|none|Evaporation of liquid water into water vapor.<br>Unit: mm/h|
|feels_like|number|false|none|Feels like temperature.<br>Units: metric = °C, us = °F, uk = °C, ca = °C|
|humidity|integer|false|none|Relative humidity.<br>Unit: \%|
|icon|integer|false|none|Numeric identifier of the weather icon. The following values can appear:<br><br>* 1 - Not available<br>* 2 - Sunny<br>* 3 - Mostly sunny<br>* 4 - Partly sunny<br>* 5 - Mostly cloudy<br>* 6 - Cloudy<br>* 7 - Overcast<br>* 8 - Overcast with low clouds<br>* 9 - Fog<br>* 10 - Light rain<br>* 11 - Rain<br>* 12 - Possible rain<br>* 13 - Rain shower<br>* 14 - Thunderstorm<br>* 15 - Local thunderstorms<br>* 16 - Light snow<br>* 17 - Snow<br>* 18 - Possible snow<br>* 19 - Snow shower<br>* 20 - Rain and snow<br>* 21 - Possible rain and snow<br>* 22 - Rain and snow<br>* 23 - Freezing rain<br>* 24 - Possible freezing rain<br>* 25 - Hail<br>* 26 - Clear (night)<br>* 27 - Mostly clear (night)<br>* 28 - Partly clear (night)<br>* 29 - Mostly cloudy (night)<br>* 30 - Cloudy (night)<br>* 31 - Overcast with low clouds (night)<br>* 32 - Rain shower (night)<br>* 33 - Local thunderstorms (night)<br>* 34 - Snow shower (night)<br>* 35 - Rain and snow (night)<br>* 36 - Possible freezing rain (night)<br><br>Unit: N/A|
|irradiance|integer|false|none|Global downward short-wave radiation flux.<br>Unit: W/m2|
|ozone|integer|false|none|Total column of ozone.<br>Unit: Dobson|
|precipitation|[TimeMachine_TimeMachinePrecipitationData](#schematimemachine_timemachineprecipitationdata)|true|none|none|
|pressure|number|false|none|Atmospheric pressure at mean sea level.<br>Units: metric = hPa, us = Hg, uk = hPa, ca = kPa|
|soil_temperature|number|false|none|Units: metric = °C, us = °F, uk = °C, ca = °C|
|surface_temperature|number|false|none|Units: metric = °C, us = °F, uk = °C, ca = °C|
|temperature|number|false|none|Units: metric = °C, us = °F, uk = °C, ca = °C|
|weather|string|false|none|String identifier of the weather icon, e.g. `light_rain`.|
|wind|[TimeMachine_TimeMachineWindData](#schematimemachine_timemachinewinddata)|true|none|none|
|wind_chill|number|false|none|Windchill temperature.<br>Units: metric = °C, us = °F, uk = °C, ca = °C|

<h2 id="tocS_TimeMachine_TimeMachinePrecipitationData">TimeMachine_TimeMachinePrecipitationData</h2>
<!-- backwards compatibility -->
<a id="schematimemachine_timemachineprecipitationdata"></a>
<a id="schema_TimeMachine_TimeMachinePrecipitationData"></a>
<a id="tocStimemachine_timemachineprecipitationdata"></a>
<a id="tocstimemachine_timemachineprecipitationdata"></a>

```json
{
  "total": 0,
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|number|false|none|Total precipitation amount accumulated since last hour.<br>Units: metric = mm/h, us = inches per hour, uk = mm/h, ca = mm/h|
|type|string(binary)|false|none|Precipitation type, may be one of:<br><br>* `none`, it there is no precipitation<br>* `rain`<br>* `snow`<br>* `rain_snow`<br>* `ice pellets`<br>* `frozen rain`<br><br>Unit: precipitation type|

<h2 id="tocS_TimeMachine_TimeMachineWindData">TimeMachine_TimeMachineWindData</h2>
<!-- backwards compatibility -->
<a id="schematimemachine_timemachinewinddata"></a>
<a id="schema_TimeMachine_TimeMachineWindData"></a>
<a id="tocStimemachine_timemachinewinddata"></a>
<a id="tocstimemachine_timemachinewinddata"></a>

```json
{
  "angle": 0,
  "dir": "string",
  "gusts": 0,
  "speed": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|angle|integer|false|none|Wind direction in `N`, `NNE`, `NE`, ..., `NNW` format.<br>Unit: deg|
|dir|string(binary)|false|none|Wind direction in `N`, `NNE`, `NE`, ..., `NNW` format.<br>Unit: 16dir|
|gusts|integer|false|none|Wind gust speed.<br>Units: metric = m/s, us = mph, uk = mph, ca = km/h|
|speed|integer|false|none|Wind speed 10 metres above the ground.<br>Units: metric = m/s, us = mph, uk = mph, ca = km/h|

<h2 id="tocS_Units">Units</h2>
<!-- backwards compatibility -->
<a id="schemaunits"></a>
<a id="schema_Units"></a>
<a id="tocSunits"></a>
<a id="tocsunits"></a>

```json
"auto"
```

An enumeration.

<h2 id="tocS_ValidationError">ValidationError</h2>
<!-- backwards compatibility -->
<a id="schemavalidationerror"></a>
<a id="schema_ValidationError"></a>
<a id="tocSvalidationerror"></a>
<a id="tocsvalidationerror"></a>

```json
{
  "loc": [
    "string"
  ],
  "msg": "string",
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|loc|[string \| integer]|true|none|none|
|msg|string|true|none|none|
|type|string|true|none|none|
