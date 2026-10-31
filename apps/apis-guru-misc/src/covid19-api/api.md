<h1 id="covid-19-data-api">COVID-19 data API v1.2.6</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<h1 id="covid-19-data-api-country">Country</h1>

## getLatestCountryDataByName

<a id="opIdgetLatestCountryDataByName"></a>

> Code samples

```bash
curl 'https://example.com/country?name=string' \
  -H 'Accept: application/json'
```

`GET /country`

Get latest data for specific country. Country name and format are in parametars.

<h3 id="getlatestcountrydatabyname-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|query|string|true|Name of the country|
|format|query|string|false|Format of the response|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|json|
|format|xml|

> Example responses

> 200 Response

```json
[
  {
    "confirmed": 0,
    "country": "string",
    "critical": 0,
    "deaths": 0,
    "lastChange": "1970-01-01T00:00:00Z",
    "lastUpdate": "1970-01-01T00:00:00Z",
    "latitude": 0,
    "longitude": 0,
    "recovered": 0
  }
]
```

<h3 id="getlatestcountrydatabyname-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Latest data about COVID-19 for selected country|Inline|

<h3 id="getlatestcountrydatabyname-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» confirmed|integer|false|none|none|
|» country|string|false|none|none|
|» critical|integer|false|none|none|
|» deaths|integer|false|none|none|
|» lastChange|string(date-time)|false|none|none|
|» lastUpdate|string(date-time)|false|none|none|
|» latitude|number(float)|false|none|none|
|» longitude|number(float)|false|none|none|
|» recovered|integer|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## getLatestAllCountries

<a id="opIdgetLatestAllCountries"></a>

> Code samples

```bash
curl https://example.com/country/all \
  -H 'Accept: application/json'
```

`GET /country/all`

Get latest data from all countries.

<h3 id="getlatestallcountries-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|query|string|false|Format of the response|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|json|
|format|xml|

> Example responses

> 200 Response

```json
[
  {
    "confirmed": 0,
    "country": "string",
    "critical": 0,
    "deaths": 0,
    "lastChange": "1970-01-01T00:00:00Z",
    "lastUpdate": "1970-01-01T00:00:00Z",
    "latitude": 0,
    "longitude": 0,
    "recovered": 0
  }
]
```

<h3 id="getlatestallcountries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns all countries with latest data about COVID-19|Inline|

<h3 id="getlatestallcountries-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» confirmed|integer|false|none|none|
|» country|string|false|none|none|
|» critical|integer|false|none|none|
|» deaths|integer|false|none|none|
|» lastChange|string(date-time)|false|none|none|
|» lastUpdate|string(date-time)|false|none|none|
|» latitude|number(float)|false|none|none|
|» longitude|number(float)|false|none|none|
|» recovered|integer|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## getLatestCountryDataByCode

<a id="opIdgetLatestCountryDataByCode"></a>

> Code samples

```bash
curl 'https://example.com/country/code?code=string' \
  -H 'Accept: application/json'
```

`GET /country/code`

Get latest data for specific country. Country code and format are in parametars. Country code is in ISO 3166-1 standard. It can be 2 chars (Alpha-2) or 3 chars (Alpha-3) type.

<h3 id="getlatestcountrydatabycode-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|code|query|string|true|Country code|
|format|query|string|false|Format of the response|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|json|
|format|xml|

> Example responses

> 200 Response

```json
[
  {
    "confirmed": 0,
    "country": "string",
    "critical": 0,
    "deaths": 0,
    "lastChange": "1970-01-01T00:00:00Z",
    "lastUpdate": "1970-01-01T00:00:00Z",
    "latitude": 0,
    "longitude": 0,
    "recovered": 0
  }
]
```

<h3 id="getlatestcountrydatabycode-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Latest data about COVID-19 for selected country|Inline|

<h3 id="getlatestcountrydatabycode-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» confirmed|integer|false|none|none|
|» country|string|false|none|none|
|» critical|integer|false|none|none|
|» deaths|integer|false|none|none|
|» lastChange|string(date-time)|false|none|none|
|» lastUpdate|string(date-time)|false|none|none|
|» latitude|number(float)|false|none|none|
|» longitude|number(float)|false|none|none|
|» recovered|integer|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## getDailyReportAllCountries

<a id="opIdgetDailyReportAllCountries"></a>

> Code samples

```bash
curl 'https://example.com/report/country/all?date=string' \
  -H 'Accept: application/json'
```

`GET /report/country/all`

Get daily report for all countries. Date is mandatory parametar. Date format is by ISO 8601 standard, but you can provide different format with date-format parameter.

<h3 id="getdailyreportallcountries-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|date|query|string|true|Date of the report.|
|date-format|query|string|false|Date format. If you dont want to use ISO 8601 standard (YYYY-MM-DD), you can provide different format.|
|format|query|string|false|Format of the response|

#### Enumerated Values

|Parameter|Value|
|---|---|
|date-format|YYYY-MM-DD|
|date-format|YYYY-DD-MM|
|date-format|DD-MM-YYYY|
|date-format|MM-DD-YYYY|
|format|json|
|format|xml|

> Example responses

> 200 Response

```json
[
  {
    "country": "string",
    "date": "string",
    "latitude": 0,
    "longitude": 0,
    "province": [
      {
        "active": 0,
        "confirmed": 0,
        "deaths": 0,
        "recovered": 0
      }
    ]
  }
]
```

<h3 id="getdailyreportallcountries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Daily report for COVID-19 for selected country.|Inline|

<h3 id="getdailyreportallcountries-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» country|string|false|none|none|
|» date|string|false|none|none|
|» latitude|number(float)|false|none|none|
|» longitude|number(float)|false|none|none|
|» province|[object]|false|none|none|
|» » active|integer|false|none|none|
|» » confirmed|integer|false|none|none|
|» » deaths|integer|false|none|none|
|» » recovered|integer|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## getDailyReportByCountryCode

<a id="opIdgetDailyReportByCountryCode"></a>

> Code samples

```bash
curl 'https://example.com/report/country/code?code=string&date=string' \
  -H 'Accept: application/json'
```

`GET /report/country/code`

Get daily report for specific country. Country code and date are mandatory in parametars. Country code is in ISO 3166-1 standard. It can be 2 chars (Alpha-2) or 3 chars (Alpha-3) type. Date format is by ISO 8601 standard, but you can provide different format with date-format parameter

<h3 id="getdailyreportbycountrycode-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|code|query|string|true|Country code. Country code is by ISO 3166-1 standard. It can be 2 chars (Alpha-2) or 3 chars (Alpha-3) type.|
|date|query|string|true|Date of the report.|
|date-format|query|string|false|Date format. If you dont want to use ISO 8601 standard (YYYY-MM-DD), you can provide different format.|
|format|query|string|false|Format of the response|

#### Enumerated Values

|Parameter|Value|
|---|---|
|date-format|YYYY-MM-DD|
|date-format|YYYY-DD-MM|
|date-format|DD-MM-YYYY|
|date-format|MM-DD-YYYY|
|format|json|
|format|xml|

> Example responses

> 200 Response

```json
[
  {
    "country": "string",
    "date": "string",
    "latitude": 0,
    "longitude": 0,
    "province": [
      {
        "active": 0,
        "confirmed": 0,
        "deaths": 0,
        "recovered": 0
      }
    ]
  }
]
```

<h3 id="getdailyreportbycountrycode-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Daily report for COVID-19 for selected country.|Inline|

<h3 id="getdailyreportbycountrycode-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» country|string|false|none|none|
|» date|string|false|none|none|
|» latitude|number(float)|false|none|none|
|» longitude|number(float)|false|none|none|
|» province|[object]|false|none|none|
|» » active|integer|false|none|none|
|» » confirmed|integer|false|none|none|
|» » deaths|integer|false|none|none|
|» » recovered|integer|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## getDailyReportByCountryName

<a id="opIdgetDailyReportByCountryName"></a>

> Code samples

```bash
curl 'https://example.com/report/country/name?name=string&date=string' \
  -H 'Accept: application/json'
```

`GET /report/country/name`

Get daily report for specific country. Country name and date are mandatory in parametars. Date format is by ISO 8601 standard, but you can provide different format with date-format parameter

<h3 id="getdailyreportbycountryname-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|query|string|true|Country name.|
|date|query|string|true|Date of the report.|
|date-format|query|string|false|Date format. If you dont want to use ISO 8601 standard (YYYY-MM-DD), you can provide different format.|
|format|query|string|false|Format of the response|

#### Enumerated Values

|Parameter|Value|
|---|---|
|date-format|YYYY-MM-DD|
|date-format|YYYY-DD-MM|
|date-format|DD-MM-YYYY|
|date-format|MM-DD-YYYY|
|format|json|
|format|xml|

> Example responses

> 200 Response

```json
[
  {
    "country": "string",
    "date": "string",
    "latitude": 0,
    "longitude": 0,
    "province": [
      {
        "active": 0,
        "confirmed": 0,
        "deaths": 0,
        "recovered": 0
      }
    ]
  }
]
```

<h3 id="getdailyreportbycountryname-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Daily report for COVID-19 for selected country.|Inline|

<h3 id="getdailyreportbycountryname-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» country|string|false|none|none|
|» date|string|false|none|none|
|» latitude|number(float)|false|none|none|
|» longitude|number(float)|false|none|none|
|» province|[object]|false|none|none|
|» » active|integer|false|none|none|
|» » confirmed|integer|false|none|none|
|» » deaths|integer|false|none|none|
|» » recovered|integer|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="covid-19-data-api-help">Help</h1>

## getListOfCountries

<a id="opIdgetListOfCountries"></a>

> Code samples

```bash
curl https://example.com/help/countries \
  -H 'Accept: application/json'
```

`GET /help/countries`

Get name name, alpha-2, alpha-3 code, latitude and longitude for every country.

<h3 id="getlistofcountries-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|query|string|false|Format of the response|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|json|
|format|xml|

> Example responses

> 200 Response

```json
[
  {
    "alpha-2-code": "string",
    "alpha-3-code": "string",
    "latitude": 0,
    "longitude": 0,
    "name": "string"
  }
]
```

<h3 id="getlistofcountries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Get name name, alpha-2, alpha-3 code, latitude and longitude for every country|Inline|

<h3 id="getlistofcountries-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» alpha-2-code|string|false|none|none|
|» alpha-3-code|string|false|none|none|
|» latitude|number(float)|false|none|none|
|» longitude|number(float)|false|none|none|
|» name|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="covid-19-data-api-totals">Totals</h1>

## getDailyReportTotals

<a id="opIdgetDailyReportTotals"></a>

> Code samples

```bash
curl https://example.com/report/totals \
  -H 'Accept: application/json'
```

`GET /report/totals`

Get daily report data for whole world.

<h3 id="getdailyreporttotals-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|date|query|string|false|Date of the report. If you don't put this field all dates will be returned.|
|date-format|query|string|false|Date format. If you dont want to use ISO 8601 standard (YYYY-MM-DD), you can provide different format.|
|format|query|string|false|Format of the response. If you don't put this field JSON will be response format.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|date-format|YYYY-MM-DD|
|date-format|YYYY-DD-MM|
|date-format|DD-MM-YYYY|
|date-format|MM-DD-YYYY|
|format|json|
|format|xml|

> Example responses

> 200 Response

```json
[
  {
    "active": 0,
    "confirmed": 0,
    "critical": 0,
    "date": "string",
    "deaths": 0,
    "recovered": 0
  }
]
```

<h3 id="getdailyreporttotals-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Data about COVID-19 for whole world|Inline|

<h3 id="getdailyreporttotals-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» active|integer|false|none|none|
|» confirmed|integer|false|none|none|
|» critical|integer|false|none|none|
|» date|string|false|none|none|
|» deaths|integer|false|none|none|
|» recovered|integer|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## getLatestTotals

<a id="opIdgetLatestTotals"></a>

> Code samples

```bash
curl https://example.com/totals \
  -H 'Accept: application/json'
```

`GET /totals`

Get latest data for whole world.

<h3 id="getlatesttotals-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|query|string|false|Format of the response|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|json|
|format|xml|

> Example responses

> 200 Response

```json
[
  {
    "confirmed": 0,
    "critical": 0,
    "deaths": 0,
    "lastChange": "1970-01-01T00:00:00Z",
    "lastUpdate": "1970-01-01T00:00:00Z",
    "recovered": 0
  }
]
```

<h3 id="getlatesttotals-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Latest data about COVID-19 for whole world|Inline|

<h3 id="getlatesttotals-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» confirmed|integer|false|none|none|
|» critical|integer|false|none|none|
|» deaths|integer|false|none|none|
|» lastChange|string(date-time)|false|none|none|
|» lastUpdate|string(date-time)|false|none|none|
|» recovered|integer|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_Country-read">Country-read</h2>
<!-- backwards compatibility -->
<a id="schemacountry-read"></a>
<a id="schema_Country-read"></a>
<a id="tocScountry-read"></a>
<a id="tocscountry-read"></a>

```json
{
  "confirmed": 0,
  "critical": 0,
  "deaths": 0,
  "lastChange": "1970-01-01T00:00:00Z",
  "lastUpdate": "1970-01-01T00:00:00Z",
  "latitude": 0,
  "longitude": 0,
  "name": "string",
  "recovered": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|confirmed|integer|false|none|none|
|critical|integer|false|none|none|
|deaths|integer|false|none|none|
|lastChange|string(date-time)|false|none|none|
|lastUpdate|string(date-time)|false|none|none|
|latitude|number|false|none|none|
|longitude|number|false|none|none|
|name|string|false|none|none|
|recovered|integer|false|none|none|

<h2 id="tocS_DailyReport-read">DailyReport-read</h2>
<!-- backwards compatibility -->
<a id="schemadailyreport-read"></a>
<a id="schema_DailyReport-read"></a>
<a id="tocSdailyreport-read"></a>
<a id="tocsdailyreport-read"></a>

```json
{}
```
