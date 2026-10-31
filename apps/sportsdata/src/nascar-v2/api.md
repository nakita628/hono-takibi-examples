<h1 id="nascar-v2">NASCAR v2 v1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="http://azure-api.sportsdata.io/nascar/v2">http://azure-api.sportsdata.io/nascar/v2</a>

* <a href="https://azure-api.sportsdata.io/nascar/v2">https://azure-api.sportsdata.io/nascar/v2</a>

# Authentication

* API Key (apiKeyHeader)
    - Parameter Name: **Ocp-Apim-Subscription-Key**, in: header.

* API Key (apiKeyQuery)
    - Parameter Name: **key**, in: query.

<h1 id="nascar-v2-default">Default</h1>

## Driver Race Projections (Entry List)

<a id="opIdDriverRaceProjectionsEntryList"></a>

> Code samples

```bash
curl https://example.com/xml/DriverRaceProjections/string \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/DriverRaceProjections/{raceid}`

<h3 id="driver-race-projections-entry-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.|
|raceid|path|string|true|Unique FantasyData Race ID.<br>Example:<code>1</code>, <code>2</code>, etc.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|xml|
|format|json|

> Example responses

> 200 Response

```json
[
  {
    "Bonus": 0,
    "Created": "string",
    "CurrentPosition": 0,
    "DateTime": "string",
    "Day": "string",
    "DraftKingsSalary": 0,
    "DriverID": 0,
    "FantasyPoints": 0,
    "FantasyPointsDraftKings": 0,
    "FastestLaps": 0,
    "FinalPosition": 0,
    "Laps": 0,
    "LapsLed": 0,
    "Manufacturer": "string",
    "Name": "string",
    "Number": 0,
    "NumberDisplay": "string",
    "Penalty": 0,
    "Points": 0,
    "PoleFinalPosition": 0,
    "Poles": 0,
    "PositionDifferential": 0,
    "QualifyingSpeed": 0,
    "RaceID": 0,
    "Season": 0,
    "StartPosition": 0,
    "StatID": 0,
    "Updated": "string",
    "Wins": 0
  }
]
```

<h3 id="driver-race-projections-entry-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="driver-race-projections-entry-list-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[DriverRaceProjection](#schemadriverraceprojection)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## Driver Details

<a id="opIdDriverDetails"></a>

> Code samples

```bash
curl https://example.com/xml/driver/string \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/driver/{driverid}`

<h3 id="driver-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.|
|driverid|path|string|true|Unique FantasyData Driver ID.<br>Example:<code>80000268</code>.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|xml|
|format|json|

> Example responses

> 200 Response

```json
{
  "BirthDate": "string",
  "BirthPlace": "string",
  "Chassis": "string",
  "Created": "string",
  "CrewChief": "string",
  "DriverID": 0,
  "Engine": "string",
  "FirstName": "string",
  "Gender": "string",
  "Height": 0,
  "LastName": "string",
  "Manufacturer": "string",
  "Number": 0,
  "NumberDisplay": "string",
  "PhotoUrl": "string",
  "Sponsors": "string",
  "Team": "string",
  "Updated": "string",
  "Weight": 0
}
```

<h3 id="driver-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Driver](#schemadriver)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## Drivers

<a id="opIdDrivers"></a>

> Code samples

```bash
curl https://example.com/xml/drivers \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/drivers`

<h3 id="drivers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|xml|
|format|json|

> Example responses

> 200 Response

```json
[
  {
    "BirthDate": "string",
    "BirthPlace": "string",
    "Chassis": "string",
    "Created": "string",
    "CrewChief": "string",
    "DriverID": 0,
    "Engine": "string",
    "FirstName": "string",
    "Gender": "string",
    "Height": 0,
    "LastName": "string",
    "Manufacturer": "string",
    "Number": 0,
    "NumberDisplay": "string",
    "PhotoUrl": "string",
    "Sponsors": "string",
    "Team": "string",
    "Updated": "string",
    "Weight": 0
  }
]
```

<h3 id="drivers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="drivers-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Driver](#schemadriver)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## Race Results

<a id="opIdRaceResults"></a>

> Code samples

```bash
curl https://example.com/xml/raceresult/string \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/raceresult/{raceid}`

<h3 id="race-results-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.|
|raceid|path|string|true|Unique FantasyData Race ID.<br>Example:<code>1</code>, <code>2</code>, etc.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|xml|
|format|json|

> Example responses

> 200 Response

```json
{
  "DriverRaces": [
    {
      "Bonus": 0,
      "Created": "string",
      "CurrentPosition": 0,
      "DateTime": "string",
      "Day": "string",
      "DraftKingsSalary": 0,
      "DriverID": 0,
      "FantasyPoints": 0,
      "FantasyPointsDraftKings": 0,
      "FastestLaps": 0,
      "FinalPosition": 0,
      "Laps": 0,
      "LapsLed": 0,
      "Manufacturer": "string",
      "Name": "string",
      "Number": 0,
      "NumberDisplay": "string",
      "Penalty": 0,
      "Points": 0,
      "PoleFinalPosition": 0,
      "Poles": 0,
      "PositionDifferential": 0,
      "QualifyingSpeed": 0,
      "RaceID": 0,
      "Season": 0,
      "StartPosition": 0,
      "StatID": 0,
      "Updated": "string",
      "Wins": 0
    }
  ],
  "Race": {
    "ActualLaps": 0,
    "Broadcast": "string",
    "Canceled": true,
    "Created": "string",
    "DateTime": "string",
    "Day": "string",
    "IsInProgress": true,
    "IsOver": true,
    "Name": "string",
    "PoleWinnerID": 0,
    "RaceID": 0,
    "RescheduledDateTime": "string",
    "RescheduledDay": "string",
    "ScheduledLaps": 0,
    "Season": 0,
    "SeriesID": 0,
    "SeriesName": "string",
    "Track": "string",
    "Updated": "string",
    "WinnerID": 0
  }
}
```

<h3 id="race-results-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[RaceResult](#schemaraceresult)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## Races / Schedule

<a id="opIdRacesSchedule"></a>

> Code samples

```bash
curl https://example.com/xml/races/string \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/races/{season}`

<h3 id="races-schedule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.|
|season|path|string|true|Year of the season.<br><br>Examples: <code>2015</code>, <code>2016</code>.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|xml|
|format|json|

> Example responses

> 200 Response

```json
[
  {
    "ActualLaps": 0,
    "Broadcast": "string",
    "Canceled": true,
    "Created": "string",
    "DateTime": "string",
    "Day": "string",
    "IsInProgress": true,
    "IsOver": true,
    "Name": "string",
    "PoleWinnerID": 0,
    "RaceID": 0,
    "RescheduledDateTime": "string",
    "RescheduledDay": "string",
    "ScheduledLaps": 0,
    "Season": 0,
    "SeriesID": 0,
    "SeriesName": "string",
    "Track": "string",
    "Updated": "string",
    "WinnerID": 0
  }
]
```

<h3 id="races-schedule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="races-schedule-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Race](#schemarace)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## Series

<a id="opIdSeries"></a>

> Code samples

```bash
curl https://example.com/xml/series \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/series`

<h3 id="series-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|xml|
|format|json|

> Example responses

> 200 Response

```json
[
  {
    "Name": "string",
    "SeriesID": 0
  }
]
```

<h3 id="series-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="series-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Series](#schemaseries)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

# Schemas

<h2 id="tocS_Driver">Driver</h2>
<!-- backwards compatibility -->
<a id="schemadriver"></a>
<a id="schema_Driver"></a>
<a id="tocSdriver"></a>
<a id="tocsdriver"></a>

```json
{
  "BirthDate": "string",
  "BirthPlace": "string",
  "Chassis": "string",
  "Created": "string",
  "CrewChief": "string",
  "DriverID": 0,
  "Engine": "string",
  "FirstName": "string",
  "Gender": "string",
  "Height": 0,
  "LastName": "string",
  "Manufacturer": "string",
  "Number": 0,
  "NumberDisplay": "string",
  "PhotoUrl": "string",
  "Sponsors": "string",
  "Team": "string",
  "Updated": "string",
  "Weight": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BirthDate|string \| null|false|none|none|
|BirthPlace|string \| null|false|none|none|
|Chassis|string \| null|false|none|none|
|Created|string \| null|false|none|none|
|CrewChief|string \| null|false|none|none|
|DriverID|integer|false|none|none|
|Engine|string \| null|false|none|none|
|FirstName|string \| null|false|none|none|
|Gender|string \| null|false|none|none|
|Height|integer \| null|false|none|none|
|LastName|string \| null|false|none|none|
|Manufacturer|string \| null|false|none|none|
|Number|integer \| null|false|none|none|
|NumberDisplay|string \| null|false|none|none|
|PhotoUrl|string \| null|false|none|none|
|Sponsors|string \| null|false|none|none|
|Team|string \| null|false|none|none|
|Updated|string \| null|false|none|none|
|Weight|integer \| null|false|none|none|

<h2 id="tocS_DriverRace">DriverRace</h2>
<!-- backwards compatibility -->
<a id="schemadriverrace"></a>
<a id="schema_DriverRace"></a>
<a id="tocSdriverrace"></a>
<a id="tocsdriverrace"></a>

```json
{
  "Bonus": 0,
  "Created": "string",
  "CurrentPosition": 0,
  "DateTime": "string",
  "Day": "string",
  "DraftKingsSalary": 0,
  "DriverID": 0,
  "FantasyPoints": 0,
  "FantasyPointsDraftKings": 0,
  "FastestLaps": 0,
  "FinalPosition": 0,
  "Laps": 0,
  "LapsLed": 0,
  "Manufacturer": "string",
  "Name": "string",
  "Number": 0,
  "NumberDisplay": "string",
  "Penalty": 0,
  "Points": 0,
  "PoleFinalPosition": 0,
  "Poles": 0,
  "PositionDifferential": 0,
  "QualifyingSpeed": 0,
  "RaceID": 0,
  "Season": 0,
  "StartPosition": 0,
  "StatID": 0,
  "Updated": "string",
  "Wins": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Bonus|number \| null|false|none|none|
|Created|string \| null|false|none|none|
|CurrentPosition|number \| null|false|none|none|
|DateTime|string \| null|false|none|none|
|Day|string \| null|false|none|none|
|DraftKingsSalary|integer \| null|false|none|none|
|DriverID|integer|false|none|none|
|FantasyPoints|number \| null|false|none|none|
|FantasyPointsDraftKings|number \| null|false|none|none|
|FastestLaps|number \| null|false|none|none|
|FinalPosition|number \| null|false|none|none|
|Laps|number \| null|false|none|none|
|LapsLed|number \| null|false|none|none|
|Manufacturer|string \| null|false|none|none|
|Name|string \| null|false|none|none|
|Number|integer \| null|false|none|none|
|NumberDisplay|string \| null|false|none|none|
|Penalty|number \| null|false|none|none|
|Points|number \| null|false|none|none|
|PoleFinalPosition|number \| null|false|none|none|
|Poles|number \| null|false|none|none|
|PositionDifferential|number \| null|false|none|none|
|QualifyingSpeed|number \| null|false|none|none|
|RaceID|integer \| null|false|none|none|
|Season|integer|false|none|none|
|StartPosition|number \| null|false|none|none|
|StatID|integer|false|none|none|
|Updated|string \| null|false|none|none|
|Wins|number \| null|false|none|none|

<h2 id="tocS_DriverRaceProjection">DriverRaceProjection</h2>
<!-- backwards compatibility -->
<a id="schemadriverraceprojection"></a>
<a id="schema_DriverRaceProjection"></a>
<a id="tocSdriverraceprojection"></a>
<a id="tocsdriverraceprojection"></a>

```json
{
  "Bonus": 0,
  "Created": "string",
  "CurrentPosition": 0,
  "DateTime": "string",
  "Day": "string",
  "DraftKingsSalary": 0,
  "DriverID": 0,
  "FantasyPoints": 0,
  "FantasyPointsDraftKings": 0,
  "FastestLaps": 0,
  "FinalPosition": 0,
  "Laps": 0,
  "LapsLed": 0,
  "Manufacturer": "string",
  "Name": "string",
  "Number": 0,
  "NumberDisplay": "string",
  "Penalty": 0,
  "Points": 0,
  "PoleFinalPosition": 0,
  "Poles": 0,
  "PositionDifferential": 0,
  "QualifyingSpeed": 0,
  "RaceID": 0,
  "Season": 0,
  "StartPosition": 0,
  "StatID": 0,
  "Updated": "string",
  "Wins": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Bonus|number \| null|false|none|none|
|Created|string \| null|false|none|none|
|CurrentPosition|number \| null|false|none|none|
|DateTime|string \| null|false|none|none|
|Day|string \| null|false|none|none|
|DraftKingsSalary|integer \| null|false|none|none|
|DriverID|integer|false|none|none|
|FantasyPoints|number \| null|false|none|none|
|FantasyPointsDraftKings|number \| null|false|none|none|
|FastestLaps|number \| null|false|none|none|
|FinalPosition|number \| null|false|none|none|
|Laps|number \| null|false|none|none|
|LapsLed|number \| null|false|none|none|
|Manufacturer|string \| null|false|none|none|
|Name|string \| null|false|none|none|
|Number|integer \| null|false|none|none|
|NumberDisplay|string \| null|false|none|none|
|Penalty|number \| null|false|none|none|
|Points|number \| null|false|none|none|
|PoleFinalPosition|number \| null|false|none|none|
|Poles|number \| null|false|none|none|
|PositionDifferential|number \| null|false|none|none|
|QualifyingSpeed|number \| null|false|none|none|
|RaceID|integer \| null|false|none|none|
|Season|integer|false|none|none|
|StartPosition|number \| null|false|none|none|
|StatID|integer|false|none|none|
|Updated|string \| null|false|none|none|
|Wins|number \| null|false|none|none|

<h2 id="tocS_Race">Race</h2>
<!-- backwards compatibility -->
<a id="schemarace"></a>
<a id="schema_Race"></a>
<a id="tocSrace"></a>
<a id="tocsrace"></a>

```json
{
  "ActualLaps": 0,
  "Broadcast": "string",
  "Canceled": true,
  "Created": "string",
  "DateTime": "string",
  "Day": "string",
  "IsInProgress": true,
  "IsOver": true,
  "Name": "string",
  "PoleWinnerID": 0,
  "RaceID": 0,
  "RescheduledDateTime": "string",
  "RescheduledDay": "string",
  "ScheduledLaps": 0,
  "Season": 0,
  "SeriesID": 0,
  "SeriesName": "string",
  "Track": "string",
  "Updated": "string",
  "WinnerID": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ActualLaps|integer \| null|false|none|none|
|Broadcast|string \| null|false|none|none|
|Canceled|boolean|false|none|none|
|Created|string \| null|false|none|none|
|DateTime|string \| null|false|none|none|
|Day|string \| null|false|none|none|
|IsInProgress|boolean|false|none|none|
|IsOver|boolean|false|none|none|
|Name|string \| null|false|none|none|
|PoleWinnerID|integer \| null|false|none|none|
|RaceID|integer|false|none|none|
|RescheduledDateTime|string \| null|false|none|none|
|RescheduledDay|string \| null|false|none|none|
|ScheduledLaps|integer \| null|false|none|none|
|Season|integer|false|none|none|
|SeriesID|integer|false|none|none|
|SeriesName|string \| null|false|none|none|
|Track|string \| null|false|none|none|
|Updated|string \| null|false|none|none|
|WinnerID|integer \| null|false|none|none|

<h2 id="tocS_RaceResult">RaceResult</h2>
<!-- backwards compatibility -->
<a id="schemaraceresult"></a>
<a id="schema_RaceResult"></a>
<a id="tocSraceresult"></a>
<a id="tocsraceresult"></a>

```json
{
  "DriverRaces": [
    {
      "Bonus": 0,
      "Created": "string",
      "CurrentPosition": 0,
      "DateTime": "string",
      "Day": "string",
      "DraftKingsSalary": 0,
      "DriverID": 0,
      "FantasyPoints": 0,
      "FantasyPointsDraftKings": 0,
      "FastestLaps": 0,
      "FinalPosition": 0,
      "Laps": 0,
      "LapsLed": 0,
      "Manufacturer": "string",
      "Name": "string",
      "Number": 0,
      "NumberDisplay": "string",
      "Penalty": 0,
      "Points": 0,
      "PoleFinalPosition": 0,
      "Poles": 0,
      "PositionDifferential": 0,
      "QualifyingSpeed": 0,
      "RaceID": 0,
      "Season": 0,
      "StartPosition": 0,
      "StatID": 0,
      "Updated": "string",
      "Wins": 0
    }
  ],
  "Race": {
    "ActualLaps": 0,
    "Broadcast": "string",
    "Canceled": true,
    "Created": "string",
    "DateTime": "string",
    "Day": "string",
    "IsInProgress": true,
    "IsOver": true,
    "Name": "string",
    "PoleWinnerID": 0,
    "RaceID": 0,
    "RescheduledDateTime": "string",
    "RescheduledDay": "string",
    "ScheduledLaps": 0,
    "Season": 0,
    "SeriesID": 0,
    "SeriesName": "string",
    "Track": "string",
    "Updated": "string",
    "WinnerID": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DriverRaces|[[DriverRace](#schemadriverrace)]|false|none|none|
|Race|[Race](#schemarace)|false|none|none|

<h2 id="tocS_Series">Series</h2>
<!-- backwards compatibility -->
<a id="schemaseries"></a>
<a id="schema_Series"></a>
<a id="tocSseries"></a>
<a id="tocsseries"></a>

```json
{
  "Name": "string",
  "SeriesID": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|string \| null|false|none|none|
|SeriesID|integer|false|none|none|
