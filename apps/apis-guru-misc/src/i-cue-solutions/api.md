<h1 id="growth-services">Growth Services v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<h1 id="growth-services-administration">Administration</h1>

## Get all organizations

> Code samples

```bash
curl https://example.com/administration/entity \
  -H 'Accept: application/json'
```

`GET /administration/entity`

This is an iCUE only endpoint or Enterprise feature.

<h3 id="get-all-organizations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Token|header|string|false|User Authentication Token|

> Example responses

> 200 Response

```json
[
  {
    "address": "string",
    "dbConnection": "string",
    "email": "string",
    "id": 0,
    "isActive": true,
    "name": "string",
    "token": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }
]
```

<h3 id="get-all-organizations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="get-all-organizations-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[EntityResponse](#schemaentityresponse)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Pause organization

> Code samples

```bash
curl https://example.com/administration/entity \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "id": 0,
    "isActive": true
  }'
```

`PUT /administration/entity`

This is an iCUE only endpoint or Enterprise feature.

> Body parameter

```json
{
  "id": 0,
  "isActive": true
}
```

<h3 id="pause-organization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Token|header|string|false|User Authentication Token|
|body|body|[ToggleRequest](#schematogglerequest)|false|none|
|» id|body|integer(int32)|false|none|
|» isActive|body|boolean|false|none|

<h3 id="pause-organization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

## Create organization

> Code samples

```bash
curl https://example.com/administration/entity \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "address": "string",
    "email": "string",
    "name": "string"
  }'
```

`POST /administration/entity`

This is an iCUE only endpoint or Enterprise feature.

> Body parameter

```json
{
  "address": "string",
  "email": "string",
  "name": "string"
}
```

<h3 id="create-organization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Token|header|string|false|User Authentication Token|
|body|body|[NewEntityRequest](#schemanewentityrequest)|false|none|
|» address|body|string \| null|false|none|
|» email|body|string \| null|false|none|
|» name|body|string \| null|false|none|

> Example responses

> 200 Response

```json
"497f6eca-6276-4993-bfeb-53cbbbba6f08"
```

<h3 id="create-organization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Delete organization

> Code samples

```bash
curl https://example.com/administration/entity/0 \
  -X DELETE
```

`DELETE /administration/entity/{id}`

This is an iCUE only endpoint or Enterprise feature.

<h3 id="delete-organization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|
|Token|header|string|false|User Authentication Token|

<h3 id="delete-organization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

## Transform data file to JSON format

> Code samples

```bash
curl https://example.com/administration/file-to-json \
  -X POST \
  -H 'Accept: application/json' \
  -F 'File=@/path/to/file' \
  -F 'Periodicity=0'
```

`POST /administration/file-to-json`

Transform data file to JSON format

> Body parameter

```yaml
File: string
Periodicity: 0
```

<h3 id="transform-data-file-to-json-format-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Token|header|string|false|User Authentication Token|
|body|body|object|false|none|
|» File|body|string(binary)|true|none|
|» Periodicity|body|integer(int32)|true|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "historyValues": [
        0
      ],
      "timeSeriesId": "string"
    }
  ],
  "planningLevelId": "string",
  "startDate": "1/16/2016"
}
```

<h3 id="transform-data-file-to-json-format-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[JsonForecastResponse](#schemajsonforecastresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Get all common Models

> Code samples

```bash
curl https://example.com/administration/model \
  -H 'Accept: application/json'
```

`GET /administration/model`

Returns models that are common for all Organizations

<h3 id="get-all-common-models-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Token|header|string|false|User Authentication Token|

> Example responses

> 200 Response

```json
[
  {
    "key": "string",
    "name": "string",
    "queue": "string",
    "replyQueue": "string"
  }
]
```

<h3 id="get-all-common-models-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="get-all-common-models-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[MethodDto](#schemamethoddto)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Register new forecasting model

> Code samples

```bash
curl https://example.com/administration/model \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "key": "string",
    "name": "string"
  }'
```

`POST /administration/model`

Register new forecasting model for all organziations

> Body parameter

```json
{
  "key": "string",
  "name": "string"
}
```

<h3 id="register-new-forecasting-model-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Token|header|string|false|User Authentication Token|
|body|body|[NewModelRequest](#schemanewmodelrequest)|false|none|
|» key|body|string \| null|false|none|
|» name|body|string \| null|false|none|

> Example responses

> 200 Response

```json
{
  "key": "string",
  "name": "string",
  "queue": "string",
  "replyQueue": "string"
}
```

<h3 id="register-new-forecasting-model-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[MethodDto](#schemamethoddto)|

<aside class="success">
This operation does not require authentication
</aside>

## Get Models for Organization

> Code samples

```bash
curl https://example.com/administration/model/0 \
  -H 'Accept: application/json'
```

`GET /administration/model/{entityId}`

Returns models registered for Organization

<h3 id="get-models-for-organization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|entityId|path|integer(int32)|true|none|
|Token|header|string|false|User Authentication Token|

> Example responses

> 200 Response

```json
[
  {
    "key": "string",
    "name": "string",
    "queue": "string",
    "replyQueue": "string"
  }
]
```

<h3 id="get-models-for-organization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="get-models-for-organization-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[MethodDto](#schemamethoddto)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Register new forecasting model

> Code samples

```bash
curl https://example.com/administration/model/0 \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "key": "string",
    "name": "string"
  }'
```

`POST /administration/model/{entityId}`

Register new forecasting model for single organziation

> Body parameter

```json
{
  "key": "string",
  "name": "string"
}
```

<h3 id="register-new-forecasting-model-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|entityId|path|integer(int32)|true|none|
|Token|header|string|false|User Authentication Token|
|body|body|[NewModelRequest](#schemanewmodelrequest)|false|none|
|» key|body|string \| null|false|none|
|» name|body|string \| null|false|none|

> Example responses

> 200 Response

```json
{
  "key": "string",
  "name": "string",
  "queue": "string",
  "replyQueue": "string"
}
```

<h3 id="register-new-forecasting-model-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[MethodDto](#schemamethoddto)|

<aside class="success">
This operation does not require authentication
</aside>

## Lock planning level

> Code samples

```bash
curl https://example.com/administration/planning-level/lock \
  -X POST
```

`POST /administration/planning-level/lock`

Lock planning level against modification. This is an Enterprise feature.

<h3 id="lock-planning-level-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Token|header|string|false|User Authentication Token|

<h3 id="lock-planning-level-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

## Delete planning level

> Code samples

```bash
curl https://example.com/administration/planning-level/0/0 \
  -X DELETE
```

`DELETE /administration/planning-level/{entityId}/{id}`

Delete planning level. This is an Enterprise feature.

<h3 id="delete-planning-level-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|entityId|path|integer(int32)|true|none|
|id|path|integer(int32)|true|none|
|Token|header|string|false|User Authentication Token|

<h3 id="delete-planning-level-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

## Issue a token

> Code samples

```bash
curl https://example.com/administration/token \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "entityToken": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "expirationDate": "1970-01-01T00:00:00Z",
    "userToken": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /administration/token`

This is an iCUE only endpoint.

> Body parameter

```json
{
  "entityToken": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "expirationDate": "1970-01-01T00:00:00Z",
  "userToken": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="issue-a-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Token|header|string|false|User Authentication Token|
|body|body|[NewTokenRequest](#schemanewtokenrequest)|false|none|
|» entityToken|body|string(uuid)|false|none|
|» expirationDate|body|string(date-time)|false|none|
|» userToken|body|string(uuid)|false|none|

> Example responses

> 200 Response

```json
"497f6eca-6276-4993-bfeb-53cbbbba6f08"
```

<h3 id="issue-a-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Update user

> Code samples

```bash
curl https://example.com/administration/user \
  -X PUT
```

`PUT /administration/user`

Update user

<h3 id="update-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Token|header|string|false|User Authentication Token|

<h3 id="update-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

## Create user

> Code samples

```bash
curl https://example.com/administration/user \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "email": "string",
    "entityToken": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "firstname": "string",
    "lastname": "string",
    "phone": "string"
  }'
```

`POST /administration/user`

Create new user for entity/organization. This can be done by entity administrator.

> Body parameter

```json
{
  "email": "string",
  "entityToken": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "firstname": "string",
  "lastname": "string",
  "phone": "string"
}
```

<h3 id="create-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Token|header|string|false|User Authentication Token|
|body|body|[NewUserRequest](#schemanewuserrequest)|false|none|
|» email|body|string \| null|false|none|
|» entityToken|body|string(uuid)|false|none|
|» firstname|body|string \| null|false|none|
|» lastname|body|string \| null|false|none|
|» phone|body|string \| null|false|none|

> Example responses

> 200 Response

```json
"497f6eca-6276-4993-bfeb-53cbbbba6f08"
```

<h3 id="create-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Lock user

> Code samples

```bash
curl https://example.com/administration/user/lock \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "entityId": 0,
    "id": 0,
    "isActive": true
  }'
```

`PUT /administration/user/lock`

After lock user won't be able to use iCUE API endpoints.

> Body parameter

```json
{
  "entityId": 0,
  "id": 0,
  "isActive": true
}
```

<h3 id="lock-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Token|header|string|false|User Authentication Token|
|body|body|[ToggleUserRequest](#schematoggleuserrequest)|false|none|
|» entityId|body|integer(int32)|false|none|
|» id|body|integer(int32)|false|none|
|» isActive|body|boolean|false|none|

<h3 id="lock-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get all users

> Code samples

```bash
curl https://example.com/administration/user/0
```

`GET /administration/user/{entityId}`

Get all users

<h3 id="get-all-users-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|entityId|path|integer(int32)|true|none|
|Token|header|string|false|User Authentication Token|

<h3 id="get-all-users-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

## Delete user

> Code samples

```bash
curl https://example.com/administration/user/0/0 \
  -X DELETE
```

`DELETE /administration/user/{entityId}/{id}`

Delete user

<h3 id="delete-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|entityId|path|integer(int32)|true|none|
|id|path|integer(int32)|true|none|
|Token|header|string|false|User Authentication Token|

<h3 id="delete-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="growth-services-insight-driven-planning-forecast-optimization">Insight-Driven Planning (Forecast &amp; Optimization)</h1>

## Forecasts only, for faster results

> Code samples

```bash
curl https://example.com/forecast \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "data": [
      {
        "historyValues": [
          0
        ],
        "timeSeriesId": "string"
      }
    ],
    "method": "iCUE1",
    "override": false,
    "params": {
      "discardData": false,
      "errorType": "MeanAbsolutePercentageError",
      "holdOutPeriod": 4,
      "noFcst": 18,
      "outlierDetection": true,
      "periodicity": 12
    },
    "planningLevelId": "string",
    "startDate": "1/16/2016"
  }'
```

`POST /forecast`

To support maximum operation and integration speed, this endpoint only returns the calculated forecast.

> Body parameter

```json
{
  "data": [
    {
      "historyValues": [
        0
      ],
      "timeSeriesId": "string"
    }
  ],
  "method": "iCUE1",
  "override": false,
  "params": {
    "discardData": false,
    "errorType": "MeanAbsolutePercentageError",
    "holdOutPeriod": 4,
    "noFcst": 18,
    "outlierDetection": true,
    "periodicity": 12
  },
  "planningLevelId": "string",
  "startDate": "1/16/2016"
}
```

<h3 id="forecasts-only-for-faster-results-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Token|header|string|false|User Authentication Token|
|body|body|[PlanningLevelRequest](#schemaplanninglevelrequest)|false|none|
|» data|body|[[PlanningLevelDataDto](#schemaplanningleveldatadto)]|false|none|
|» method|body|string|true|none|
|» override|body|boolean|false|none|
|» params|body|[PlanningLevelInfoRequest](#schemaplanninglevelinforequest)|false|none|
|» planningLevelId|body|string|true|none|
|» startDate|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "hyperparameters": {
    "discardData": false,
    "errorType": "MeanAbsolutePercentageError",
    "holdOutPeriod": 4,
    "noFcst": 18,
    "periodicity": 12
  },
  "timeSeries": [
    {
      "error": 0,
      "forecastData": [
        {
          "date": "string",
          "value": 0
        }
      ],
      "method": "string",
      "timeSeriesId": "string"
    }
  ]
}
```

<h3 id="forecasts-only-for-faster-results-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ForecastResponse](#schemaforecastresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Forecast utilizing advanced machine learning models

> Code samples

```bash
curl https://example.com/forecast/AI \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "data": [
      {
        "historyValues": [
          0
        ],
        "timeSeriesId": "string"
      }
    ],
    "method": "icueMLP | icueMLO",
    "params": {
      "discardData": false,
      "errorType": "MeanAbsolutePercentageError",
      "holdOutPeriod": 4,
      "noFcst": 18,
      "outlierDetection": true,
      "periodicity": 12
    },
    "planningLevelId": "string",
    "startDate": "1/16/2016"
  }'
```

`POST /forecast/AI`

Forecast AI is utilizing advanced machine learning models. Please be mindful of enhanced execution times (~1-2s per timeseries).

> Body parameter

```json
{
  "data": [
    {
      "historyValues": [
        0
      ],
      "timeSeriesId": "string"
    }
  ],
  "method": "icueMLP | icueMLO",
  "params": {
    "discardData": false,
    "errorType": "MeanAbsolutePercentageError",
    "holdOutPeriod": 4,
    "noFcst": 18,
    "outlierDetection": true,
    "periodicity": 12
  },
  "planningLevelId": "string",
  "startDate": "1/16/2016"
}
```

<h3 id="forecast-utilizing-advanced-machine-learning-models-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Token|header|string|false|User Authentication Token|
|body|body|[AiPlanningLevelRequest](#schemaaiplanninglevelrequest)|false|none|
|» data|body|[[PlanningLevelDataDto](#schemaplanningleveldatadto)]|false|none|
|» method|body|string|true|none|
|» params|body|[PlanningLevelInfoRequest](#schemaplanninglevelinforequest)|false|none|
|» planningLevelId|body|string|true|none|
|» startDate|body|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» method|icueMLP|
|» method|icueMLO|
|» method|icueMLN|

> Example responses

> 200 Response

```json
{
  "jobId": 0
}
```

<h3 id="forecast-utilizing-advanced-machine-learning-models-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[JobResponse](#schemajobresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## History and forecast utilizing advanced machine learning models

> Code samples

```bash
curl https://example.com/forecast/AI/history-and-forecast \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "data": [
      {
        "historyValues": [
          0
        ],
        "timeSeriesId": "string"
      }
    ],
    "method": "icueMLP | icueMLO",
    "params": {
      "discardData": false,
      "errorType": "MeanAbsolutePercentageError",
      "holdOutPeriod": 4,
      "noFcst": 18,
      "outlierDetection": true,
      "periodicity": 12
    },
    "planningLevelId": "string",
    "startDate": "1/16/2016"
  }'
```

`POST /forecast/AI/history-and-forecast`

History and forecast utilizing advanced machine learning models. Please be mindful of enhanced execution times (~1-2s per timeseries).

> Body parameter

```json
{
  "data": [
    {
      "historyValues": [
        0
      ],
      "timeSeriesId": "string"
    }
  ],
  "method": "icueMLP | icueMLO",
  "params": {
    "discardData": false,
    "errorType": "MeanAbsolutePercentageError",
    "holdOutPeriod": 4,
    "noFcst": 18,
    "outlierDetection": true,
    "periodicity": 12
  },
  "planningLevelId": "string",
  "startDate": "1/16/2016"
}
```

<h3 id="history-and-forecast-utilizing-advanced-machine-learning-models-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Token|header|string|false|User Authentication Token|
|body|body|[AiPlanningLevelRequest](#schemaaiplanninglevelrequest)|false|none|
|» data|body|[[PlanningLevelDataDto](#schemaplanningleveldatadto)]|false|none|
|» method|body|string|true|none|
|» params|body|[PlanningLevelInfoRequest](#schemaplanninglevelinforequest)|false|none|
|» planningLevelId|body|string|true|none|
|» startDate|body|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» method|icueMLP|
|» method|icueMLO|
|» method|icueMLN|

> Example responses

> 200 Response

```json
{
  "jobId": 0
}
```

<h3 id="history-and-forecast-utilizing-advanced-machine-learning-models-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[JobResponse](#schemajobresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Forecast from file

> Code samples

```bash
curl https://example.com/forecast/file-to-forecast \
  -X POST \
  -H 'Accept: application/json' \
  -F 'DiscardData=true' \
  -F 'ErrorType=MeanAbsolutePercentageError' \
  -F 'File=@/path/to/file' \
  -F 'HoldOutPeriod=0' \
  -F 'Method=iCUE1' \
  -F 'NoFcst=0' \
  -F 'OutlierDetection=true' \
  -F 'Periodicity=0'
```

`POST /forecast/file-to-forecast`

Forecast from file allows for quick analysis via Microsoft Excel and CSV file format. Please check documentation link for help.

> Body parameter

```yaml
DiscardData: true
ErrorType: MeanAbsolutePercentageError
File: string
HoldOutPeriod: 0
Method: iCUE1
NoFcst: 0
OutlierDetection: true
Periodicity: 0
```

<h3 id="forecast-from-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Token|header|string|false|User Authentication Token|
|body|body|object|false|none|
|» DiscardData|body|boolean|false|none|
|» ErrorType|body|string|false|none|
|» File|body|string(binary)|true|none|
|» HoldOutPeriod|body|integer(int32)|false|none|
|» Method|body|string|true|none|
|» NoFcst|body|integer(int32)|false|none|
|» OutlierDetection|body|boolean|false|none|
|» Periodicity|body|integer(int32)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» ErrorType|MeanAbsolutePercentageError|
|» ErrorType|MeanSquaredError|
|» ErrorType|MeanAbsoluteError|
|» ErrorType|MedianAbsoluteDeviation|
|» ErrorType|None|
|» Method|AutoBestPick|
|» Method|BoxJenkins|
|» Method|Croston|
|» Method|DoubleExponentialSmoothing|
|» Method|HoltWinters|
|» Method|SingleExponentialSmoothing|
|» Method|iCUE1|
|» Method|SimpleMovingAverage|

> Example responses

> 200 Response

```json
{
  "jobId": 0
}
```

<h3 id="forecast-from-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[JobResponse](#schemajobresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Bottom up forecasting

> Code samples

```bash
curl https://example.com/forecast/forecast-bottom-up \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "data": [
      {
        "historyValues": [
          0
        ],
        "timeSeriesId": "string"
      }
    ],
    "method": "iCUE1",
    "override": false,
    "params": {
      "discardData": false,
      "errorType": "MeanAbsolutePercentageError",
      "holdOutPeriod": 4,
      "noFcst": 18,
      "outlierDetection": true,
      "periodicity": 12
    },
    "planningLevelId": "string",
    "startDate": "1/16/2016"
  }'
```

`POST /forecast/forecast-bottom-up`

Calculate forecast by timeseries and sum results up to establish forecast for top level timeseries.

> Body parameter

```json
{
  "data": [
    {
      "historyValues": [
        0
      ],
      "timeSeriesId": "string"
    }
  ],
  "method": "iCUE1",
  "override": false,
  "params": {
    "discardData": false,
    "errorType": "MeanAbsolutePercentageError",
    "holdOutPeriod": 4,
    "noFcst": 18,
    "outlierDetection": true,
    "periodicity": 12
  },
  "planningLevelId": "string",
  "startDate": "1/16/2016"
}
```

<h3 id="bottom-up-forecasting-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Token|header|string|false|User Authentication Token|
|body|body|[PlanningLevelRequest](#schemaplanninglevelrequest)|false|none|
|» data|body|[[PlanningLevelDataDto](#schemaplanningleveldatadto)]|false|none|
|» method|body|string|true|none|
|» override|body|boolean|false|none|
|» params|body|[PlanningLevelInfoRequest](#schemaplanninglevelinforequest)|false|none|
|» planningLevelId|body|string|true|none|
|» startDate|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "forecastData": [
    {
      "date": "string",
      "value": 0
    }
  ],
  "hyperparameters": {
    "discardData": false,
    "errorType": "MeanAbsolutePercentageError",
    "holdOutPeriod": 4,
    "noFcst": 18,
    "periodicity": 12
  }
}
```

<h3 id="bottom-up-forecasting-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ForecastBottomUpResponse](#schemaforecastbottomupresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Top down forecasting

> Code samples

```bash
curl https://example.com/forecast/forecast-top-down \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "data": [
      {
        "historyValues": [
          0
        ],
        "timeSeriesId": "string"
      }
    ],
    "method": "iCUE1",
    "override": false,
    "params": {
      "discardData": false,
      "errorType": "MeanAbsolutePercentageError",
      "holdOutPeriod": 4,
      "noFcst": 18,
      "outlierDetection": true,
      "periodicity": 12
    },
    "planningLevelId": "string",
    "startDate": "1/16/2016"
  }'
```

`POST /forecast/forecast-top-down`

Calculate forecast based on sum of of lower level timeseries and distribute forecast down based on ratios. Great feature for planning levels with dynamic timeseries.

> Body parameter

```json
{
  "data": [
    {
      "historyValues": [
        0
      ],
      "timeSeriesId": "string"
    }
  ],
  "method": "iCUE1",
  "override": false,
  "params": {
    "discardData": false,
    "errorType": "MeanAbsolutePercentageError",
    "holdOutPeriod": 4,
    "noFcst": 18,
    "outlierDetection": true,
    "periodicity": 12
  },
  "planningLevelId": "string",
  "startDate": "1/16/2016"
}
```

<h3 id="top-down-forecasting-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Token|header|string|false|User Authentication Token|
|body|body|[PlanningLevelRequest](#schemaplanninglevelrequest)|false|none|
|» data|body|[[PlanningLevelDataDto](#schemaplanningleveldatadto)]|false|none|
|» method|body|string|true|none|
|» override|body|boolean|false|none|
|» params|body|[PlanningLevelInfoRequest](#schemaplanninglevelinforequest)|false|none|
|» planningLevelId|body|string|true|none|
|» startDate|body|string|true|none|

<h3 id="top-down-forecasting-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

## Full forecast result details, including error, trend seasonality and outlier

> Code samples

```bash
curl https://example.com/forecast/full-detail \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "data": [
      {
        "historyValues": [
          0
        ],
        "timeSeriesId": "string"
      }
    ],
    "method": "iCUE1",
    "override": false,
    "params": {
      "discardData": false,
      "errorType": "MeanAbsolutePercentageError",
      "holdOutPeriod": 4,
      "noFcst": 18,
      "outlierDetection": true,
      "periodicity": 12
    },
    "planningLevelId": "string",
    "startDate": "1/16/2016"
  }'
```

`POST /forecast/full-detail`

Response provides full forecast result details, including error, trend seasonality and outlier. Great for advanced analysis.

> Body parameter

```json
{
  "data": [
    {
      "historyValues": [
        0
      ],
      "timeSeriesId": "string"
    }
  ],
  "method": "iCUE1",
  "override": false,
  "params": {
    "discardData": false,
    "errorType": "MeanAbsolutePercentageError",
    "holdOutPeriod": 4,
    "noFcst": 18,
    "outlierDetection": true,
    "periodicity": 12
  },
  "planningLevelId": "string",
  "startDate": "1/16/2016"
}
```

<h3 id="full-forecast-result-details-including-error-trend-seasonality-and-outlier-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Token|header|string|false|User Authentication Token|
|body|body|[PlanningLevelRequest](#schemaplanninglevelrequest)|false|none|
|» data|body|[[PlanningLevelDataDto](#schemaplanningleveldatadto)]|false|none|
|» method|body|string|true|none|
|» override|body|boolean|false|none|
|» params|body|[PlanningLevelInfoRequest](#schemaplanninglevelinforequest)|false|none|
|» planningLevelId|body|string|true|none|
|» startDate|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "hyperparameters": {
    "discardData": false,
    "errorType": "MeanAbsolutePercentageError",
    "holdOutPeriod": 4,
    "noFcst": 18,
    "periodicity": 12
  },
  "timeSeries": [
    {
      "error": 0,
      "forecastData": [
        {
          "date": "string",
          "value": 0
        }
      ],
      "historyData": [
        {
          "date": "string",
          "value": 0
        }
      ],
      "method": "string",
      "optimalParameters": {
        "alpha": 0,
        "beta": 0,
        "gamma": 0
      },
      "outliers": [
        {
          "index": 0,
          "type": "Additive",
          "value": 0
        }
      ],
      "timeSeriesId": "string"
    }
  ]
}
```

<h3 id="full-forecast-result-details-including-error-trend-seasonality-and-outlier-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[FullDetailsForecastResponse](#schemafulldetailsforecastresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## History and forecast for fast timeseries view

> Code samples

```bash
curl https://example.com/forecast/history-and-forecast \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "data": [
      {
        "historyValues": [
          0
        ],
        "timeSeriesId": "string"
      }
    ],
    "method": "iCUE1",
    "override": false,
    "params": {
      "discardData": false,
      "errorType": "MeanAbsolutePercentageError",
      "holdOutPeriod": 4,
      "noFcst": 18,
      "outlierDetection": true,
      "periodicity": 12
    },
    "planningLevelId": "string",
    "startDate": "1/16/2016"
  }'
```

`POST /forecast/history-and-forecast`

Reponse provides history and forecast per timeseries. Great for visualizing results.

> Body parameter

```json
{
  "data": [
    {
      "historyValues": [
        0
      ],
      "timeSeriesId": "string"
    }
  ],
  "method": "iCUE1",
  "override": false,
  "params": {
    "discardData": false,
    "errorType": "MeanAbsolutePercentageError",
    "holdOutPeriod": 4,
    "noFcst": 18,
    "outlierDetection": true,
    "periodicity": 12
  },
  "planningLevelId": "string",
  "startDate": "1/16/2016"
}
```

<h3 id="history-and-forecast-for-fast-timeseries-view-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Token|header|string|false|User Authentication Token|
|body|body|[PlanningLevelRequest](#schemaplanninglevelrequest)|false|none|
|» data|body|[[PlanningLevelDataDto](#schemaplanningleveldatadto)]|false|none|
|» method|body|string|true|none|
|» override|body|boolean|false|none|
|» params|body|[PlanningLevelInfoRequest](#schemaplanninglevelinforequest)|false|none|
|» planningLevelId|body|string|true|none|
|» startDate|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "hyperparameters": {
    "discardData": false,
    "errorType": "MeanAbsolutePercentageError",
    "holdOutPeriod": 4,
    "noFcst": 18,
    "periodicity": 12
  },
  "timeSeries": [
    {
      "error": 0,
      "forecastData": [
        {
          "date": "string",
          "value": 0
        }
      ],
      "historyData": [
        {
          "date": "string",
          "value": 0
        }
      ],
      "method": "string",
      "timeSeriesId": "string"
    }
  ]
}
```

<h3 id="history-and-forecast-for-fast-timeseries-view-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[HistoryAndForecastResponse](#schemahistoryandforecastresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Get optimal parameter per method

> Code samples

```bash
curl https://example.com/forecast/optimal-parameter \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "data": [
      {
        "historyValues": [
          0
        ],
        "timeSeriesId": "string"
      }
    ],
    "method": "iCUE1",
    "override": false,
    "params": {
      "discardData": false,
      "errorType": "MeanAbsolutePercentageError",
      "holdOutPeriod": 4,
      "noFcst": 18,
      "outlierDetection": true,
      "periodicity": 12
    },
    "planningLevelId": "string",
    "startDate": "1/16/2016"
  }'
```

`POST /forecast/optimal-parameter`

Use the optimal parameter sets created by iCUE to set the method parameters of your internal planning system.

> Body parameter

```json
{
  "data": [
    {
      "historyValues": [
        0
      ],
      "timeSeriesId": "string"
    }
  ],
  "method": "iCUE1",
  "override": false,
  "params": {
    "discardData": false,
    "errorType": "MeanAbsolutePercentageError",
    "holdOutPeriod": 4,
    "noFcst": 18,
    "outlierDetection": true,
    "periodicity": 12
  },
  "planningLevelId": "string",
  "startDate": "1/16/2016"
}
```

<h3 id="get-optimal-parameter-per-method-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Token|header|string|false|User Authentication Token|
|body|body|[PlanningLevelRequest](#schemaplanninglevelrequest)|false|none|
|» data|body|[[PlanningLevelDataDto](#schemaplanningleveldatadto)]|false|none|
|» method|body|string|true|none|
|» override|body|boolean|false|none|
|» params|body|[PlanningLevelInfoRequest](#schemaplanninglevelinforequest)|false|none|
|» planningLevelId|body|string|true|none|
|» startDate|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "hyperparameters": {
    "discardData": false,
    "errorType": "MeanAbsolutePercentageError",
    "holdOutPeriod": 4,
    "noFcst": 18,
    "periodicity": 12
  },
  "timeSeries": [
    {
      "method": "string",
      "optimalParameters": {
        "alpha": 0,
        "beta": 0,
        "gamma": 0
      },
      "timeSeriesId": "string"
    }
  ]
}
```

<h3 id="get-optimal-parameter-per-method-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[OptimalParameterResponse](#schemaoptimalparameterresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Rerun previously uploaded planning level

> Code samples

```bash
curl https://example.com/forecast/rerun \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "method": "iCUE1",
    "params": {
      "discardData": false,
      "errorType": "MeanAbsolutePercentageError",
      "holdOutPeriod": 4,
      "noFcst": 18,
      "outlierDetection": true,
      "periodicity": 12
    },
    "planningLevelId": 0
  }'
```

`POST /forecast/rerun`

Rerun previously uploaded planning level.

> Body parameter

```json
{
  "method": "iCUE1",
  "params": {
    "discardData": false,
    "errorType": "MeanAbsolutePercentageError",
    "holdOutPeriod": 4,
    "noFcst": 18,
    "outlierDetection": true,
    "periodicity": 12
  },
  "planningLevelId": 0
}
```

<h3 id="rerun-previously-uploaded-planning-level-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Token|header|string|false|User Authentication Token|
|body|body|[PlanningLevelReRunRequest](#schemaplanninglevelrerunrequest)|false|none|
|» method|body|string|true|none|
|» params|body|[PlanningLevelInfoRequest](#schemaplanninglevelinforequest)|false|none|
|» planningLevelId|body|integer(int32)|true|none|

> Example responses

> 200 Response

```json
{
  "hyperparameters": {
    "discardData": false,
    "errorType": "MeanAbsolutePercentageError",
    "holdOutPeriod": 4,
    "noFcst": 18,
    "periodicity": 12
  },
  "timeSeries": [
    {
      "error": 0,
      "forecastData": [
        {
          "date": "string",
          "value": 0
        }
      ],
      "method": "string",
      "timeSeriesId": "string"
    }
  ]
}
```

<h3 id="rerun-previously-uploaded-planning-level-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ForecastResponse](#schemaforecastresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Forecast result

> Code samples

```bash
curl https://example.com/forecast/result/0
```

`GET /forecast/result/{jobId}`

Get result for forecast job

<h3 id="forecast-result-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|jobId|path|integer(int32)|true|none|
|Token|header|string|false|User Authentication Token|

<h3 id="forecast-result-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

## Forecast status

> Code samples

```bash
curl https://example.com/forecast/status/0
```

`GET /forecast/status/{jobId}`

Get status for forecast job

<h3 id="forecast-status-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|jobId|path|integer(int32)|true|none|
|Token|header|string|false|User Authentication Token|

<h3 id="forecast-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get outlier

> Code samples

```bash
curl https://example.com/outlier \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "data": [
      {
        "historyValues": [
          0
        ],
        "timeSeriesId": "string"
      }
    ],
    "planningLevelId": "string",
    "startDate": "1/16/2016"
  }'
```

`POST /outlier`

Identify outliers (single and repetitive spikes, seasonality, masked outliers, trend and level jumps, amongst other topics) and use for cleansing of the history stream prior to forecast claculation. Depending on math model used, this approach often improves results dramatically, as it removes disturbances.

> Body parameter

```json
{
  "data": [
    {
      "historyValues": [
        0
      ],
      "timeSeriesId": "string"
    }
  ],
  "planningLevelId": "string",
  "startDate": "1/16/2016"
}
```

<h3 id="get-outlier-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Token|header|string|false|User Authentication Token|
|body|body|[OutliersRequest](#schemaoutliersrequest)|false|none|
|» data|body|[[PlanningLevelDataDto](#schemaplanningleveldatadto)]|false|none|
|» planningLevelId|body|string|true|none|
|» startDate|body|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "outliers": [
      {
        "index": 0,
        "type": "Additive",
        "value": 0
      }
    ],
    "timeSeriesId": "string"
  }
]
```

<h3 id="get-outlier-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="get-outlier-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[TimeSeriesOutliersResponse](#schematimeseriesoutliersresponse)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="growth-services-hyperparameter-management">Hyperparameter Management</h1>

## Get hyperparameters

> Code samples

```bash
curl https://example.com/hyperparameter \
  -H 'Accept: application/json'
```

`GET /hyperparameter`

Get entity global hyperparameters.

<h3 id="get-hyperparameters-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Token|header|string|false|User Authentication Token|

> Example responses

> 200 Response

```json
{
  "abcClassificationThresholdA": 0.8,
  "abcClassificationThresholdB": 0.95,
  "abcClassificationThresholdC": 0.95,
  "discardData": false,
  "errorType": "MeanAbsolutePercentageError",
  "holdOutPeriod": 4,
  "noFcst": 18,
  "outlierDetection": true,
  "periodicity": 12,
  "xyzClassificationThresholdX": 0.3,
  "xyzClassificationThresholdY": 0.6,
  "xyzClassificationThresholdZ": 0.6
}
```

<h3 id="get-hyperparameters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[HyperparameterModel](#schemahyperparametermodel)|

<aside class="success">
This operation does not require authentication
</aside>

## Set hyperparameters

> Code samples

```bash
curl https://example.com/hyperparameter \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "abcClassificationThresholdA": 0.8,
    "abcClassificationThresholdB": 0.95,
    "abcClassificationThresholdC": 0.95,
    "discardData": false,
    "errorType": "MeanAbsolutePercentageError",
    "holdOutPeriod": 4,
    "noFcst": 18,
    "outlierDetection": true,
    "periodicity": 12,
    "xyzClassificationThresholdX": 0.3,
    "xyzClassificationThresholdY": 0.6,
    "xyzClassificationThresholdZ": 0.6
  }'
```

`POST /hyperparameter`

Set entity global hyperparameters. Hyperparameters can be overwritten by user and planning level (add to JSON body).

> Body parameter

```json
{
  "abcClassificationThresholdA": 0.8,
  "abcClassificationThresholdB": 0.95,
  "abcClassificationThresholdC": 0.95,
  "discardData": false,
  "errorType": "MeanAbsolutePercentageError",
  "holdOutPeriod": 4,
  "noFcst": 18,
  "outlierDetection": true,
  "periodicity": 12,
  "xyzClassificationThresholdX": 0.3,
  "xyzClassificationThresholdY": 0.6,
  "xyzClassificationThresholdZ": 0.6
}
```

<h3 id="set-hyperparameters-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Token|header|string|false|User Authentication Token|
|body|body|[HyperparameterModel](#schemahyperparametermodel)|false|none|
|» abcClassificationThresholdA|body|number(double) \| null|false|none|
|» abcClassificationThresholdB|body|number(double) \| null|false|none|
|» abcClassificationThresholdC|body|number(double) \| null|false|none|
|» discardData|body|boolean \| null|false|none|
|» errorType|body|string|false|none|
|» holdOutPeriod|body|integer(int32) \| null|false|none|
|» noFcst|body|integer(int32) \| null|false|none|
|» outlierDetection|body|boolean \| null|false|none|
|» periodicity|body|integer(int32) \| null|false|none|
|» xyzClassificationThresholdX|body|number(double) \| null|false|none|
|» xyzClassificationThresholdY|body|number(double) \| null|false|none|
|» xyzClassificationThresholdZ|body|number(double) \| null|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» errorType|MeanAbsolutePercentageError|
|» errorType|MeanSquaredError|
|» errorType|MeanAbsoluteError|
|» errorType|MedianAbsoluteDeviation|
|» errorType|None|

<h3 id="set-hyperparameters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="growth-services-inventory-management">Inventory Management</h1>

## Calculate Amazon Inventory Performance Index (IPI)

> Code samples

```bash
curl https://example.com/inventory/amazon-ipi \
  -X POST
```

`POST /inventory/amazon-ipi`

Calculate Amazon Inventory Performance Index (IPI)

<h3 id="calculate-amazon-inventory-performance-index-ipi-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Token|header|string|false|User Authentication Token|

<h3 id="calculate-amazon-inventory-performance-index-ipi-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

## Carrying Cost

> Code samples

```bash
curl https://example.com/inventory/caryying-cost \
  -X POST
```

`POST /inventory/caryying-cost`

Carrying Cost

<h3 id="carrying-cost-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Token|header|string|false|User Authentication Token|

<h3 id="carrying-cost-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

## Calculate economic order quantity

> Code samples

```bash
curl https://example.com/inventory/eoq \
  -X POST
```

`POST /inventory/eoq`

Calculate economic order quantity

<h3 id="calculate-economic-order-quantity-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Token|header|string|false|User Authentication Token|

<h3 id="calculate-economic-order-quantity-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

## Calculate fill rate

> Code samples

```bash
curl https://example.com/inventory/fill-rate \
  -X POST
```

`POST /inventory/fill-rate`

Calculate fill rate

<h3 id="calculate-fill-rate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Token|header|string|false|User Authentication Token|

<h3 id="calculate-fill-rate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

## Calculate financial impact of forecast accuracy

> Code samples

```bash
curl https://example.com/inventory/financial-imapct-forecast-accuracy \
  -X POST
```

`POST /inventory/financial-imapct-forecast-accuracy`

Calculate financial impact of forecast accuracy

<h3 id="calculate-financial-impact-of-forecast-accuracy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Token|header|string|false|User Authentication Token|

<h3 id="calculate-financial-impact-of-forecast-accuracy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

## Inventroy Turn-over

> Code samples

```bash
curl https://example.com/inventory/inventory-turnover \
  -X POST
```

`POST /inventory/inventory-turnover`

Inventroy Turn-over

<h3 id="inventroy-turn-over-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Token|header|string|false|User Authentication Token|

<h3 id="inventroy-turn-over-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

## Calculate lead time demand

> Code samples

```bash
curl https://example.com/inventory/ltd \
  -X POST
```

`POST /inventory/ltd`

Calculate lead time demand

<h3 id="calculate-lead-time-demand-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Token|header|string|false|User Authentication Token|

<h3 id="calculate-lead-time-demand-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

## Calculate minimum order quantity

> Code samples

```bash
curl https://example.com/inventory/moq \
  -X POST
```

`POST /inventory/moq`

Calculate minimum order quantity

<h3 id="calculate-minimum-order-quantity-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Token|header|string|false|User Authentication Token|

<h3 id="calculate-minimum-order-quantity-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

## Calculate optimal service level

> Code samples

```bash
curl https://example.com/inventory/optimal-service-level \
  -X POST
```

`POST /inventory/optimal-service-level`

Calculate optimal service level

<h3 id="calculate-optimal-service-level-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Token|header|string|false|User Authentication Token|

<h3 id="calculate-optimal-service-level-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

## Re-order Point

> Code samples

```bash
curl https://example.com/inventory/reorder-point \
  -X POST
```

`POST /inventory/reorder-point`

Re-order Point

<h3 id="re-order-point-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Token|header|string|false|User Authentication Token|

<h3 id="re-order-point-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

## Safety Stock

> Code samples

```bash
curl https://example.com/inventory/safety-stock \
  -X POST
```

`POST /inventory/safety-stock`

Safety Stock

<h3 id="safety-stock-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Token|header|string|false|User Authentication Token|

<h3 id="safety-stock-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

## Calculate service level

> Code samples

```bash
curl https://example.com/inventory/service-level \
  -X POST
```

`POST /inventory/service-level`

Calculate service level

<h3 id="calculate-service-level-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Token|header|string|false|User Authentication Token|

<h3 id="calculate-service-level-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

## Calculate inventory turns

> Code samples

```bash
curl https://example.com/inventory/turns \
  -X POST
```

`POST /inventory/turns`

Calculate inventory turns

<h3 id="calculate-inventory-turns-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Token|header|string|false|User Authentication Token|

<h3 id="calculate-inventory-turns-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="growth-services-product-lifecycle-management">Product Lifecycle Management</h1>

## Map from old product to new product to create artifical history

> Code samples

```bash
curl https://example.com/lifecycle/many-to-one \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "data": [
      {
        "historyValues": [
          0
        ],
        "timeSeriesId": "string"
      }
    ],
    "planningLevelId": "string",
    "ratios": [
      0
    ]
  }'
```

`POST /lifecycle/many-to-one`

Supports the creation of artificial startup history for new products, based on a flexible mapping of old to new. This is an Enterprise feature.

> Body parameter

```json
{
  "data": [
    {
      "historyValues": [
        0
      ],
      "timeSeriesId": "string"
    }
  ],
  "planningLevelId": "string",
  "ratios": [
    0
  ]
}
```

<h3 id="map-from-old-product-to-new-product-to-create-artifical-history-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Token|header|string|false|User Authentication Token|
|body|body|[LifecycleManyToOneRequest](#schemalifecyclemanytoonerequest)|false|none|
|» data|body|[[PlanningLevelDataDto](#schemaplanningleveldatadto)]|false|none|
|» planningLevelId|body|string|true|none|
|» ratios|body|[number(double)]|false|none|

> Example responses

> 200 Response

```json
{
  "historyValues": [
    0
  ],
  "timeSeriesId": "string"
}
```

<h3 id="map-from-old-product-to-new-product-to-create-artifical-history-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PlanningLevelDataDto](#schemaplanningleveldatadto)|

<aside class="success">
This operation does not require authentication
</aside>

## Map from old product to new product to create artifical history

> Code samples

```bash
curl https://example.com/lifecycle/one-to-one \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "data": {
      "historyValues": [
        0
      ],
      "timeSeriesId": "string"
    },
    "planningLevelId": "string",
    "ratio": 15
  }'
```

`POST /lifecycle/one-to-one`

Supports the creation of artificial startup history for new products, based on a flexible mapping of old to new. This is an Enterprise feature.

> Body parameter

```json
{
  "data": {
    "historyValues": [
      0
    ],
    "timeSeriesId": "string"
  },
  "planningLevelId": "string",
  "ratio": 15
}
```

<h3 id="map-from-old-product-to-new-product-to-create-artifical-history-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Token|header|string|false|User Authentication Token|
|body|body|[LifecycleOneToOneRequest](#schemalifecycleonetoonerequest)|false|none|
|» data|body|[PlanningLevelDataDto](#schemaplanningleveldatadto)|false|none|
|» planningLevelId|body|string|true|none|
|» ratio|body|number(double)|false|none|

> Example responses

> 200 Response

```json
{
  "historyValues": [
    0
  ],
  "timeSeriesId": "string"
}
```

<h3 id="map-from-old-product-to-new-product-to-create-artifical-history-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PlanningLevelDataDto](#schemaplanningleveldatadto)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="growth-services-portfolio-performance-management">Portfolio Performance Management</h1>

## ABCxyz Analysis

> Code samples

```bash
curl https://example.com/portfolio \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "data": [
      {
        "historyValues": [
          0
        ],
        "timeSeriesId": "string"
      }
    ],
    "planningLevelId": "string",
    "startDate": "1/16/2016"
  }'
```

`POST /portfolio`

Calculate and retrieve results of ABC (pareto analysis) and xyz (Coefficient of variation) per timeseries and planning level. This analysis is a powerful means to estbalish a proper planning cadence, best accuracy messures and optimal hyperparameters for the organization. It provides a balanced and actionable overview of the entire product portfolio.

> Body parameter

```json
{
  "data": [
    {
      "historyValues": [
        0
      ],
      "timeSeriesId": "string"
    }
  ],
  "planningLevelId": "string",
  "startDate": "1/16/2016"
}
```

<h3 id="abcxyz-analysis-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Token|header|string|false|User Authentication Token|
|body|body|[PortfolioRequest](#schemaportfoliorequest)|false|none|
|» data|body|[[PlanningLevelDataDto](#schemaplanningleveldatadto)]|false|none|
|» planningLevelId|body|string|true|none|
|» startDate|body|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "abc12": "string",
    "abc12Value": 0,
    "abc6": "string",
    "abc6Value": 0,
    "abc9": "string",
    "abc9Value": 0,
    "id": "string",
    "thresholdA": 0,
    "thresholdB": 0,
    "thresholdC": 0,
    "thresholdX": 0,
    "thresholdY": 0,
    "thresholdZ": 0,
    "xyz12": "string",
    "xyz12Value": 0,
    "xyz6": "string",
    "xyz6Value": 0,
    "xyz9": "string",
    "xyz9Value": 0
  }
]
```

<h3 id="abcxyz-analysis-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="abcxyz-analysis-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[PortfolioModel](#schemaportfoliomodel)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## ABC Analysis

> Code samples

```bash
curl https://example.com/portfolio/abc \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "data": [
      {
        "historyValues": [
          0
        ],
        "timeSeriesId": "string"
      }
    ],
    "planningLevelId": "string",
    "startDate": "1/16/2016"
  }'
```

`POST /portfolio/abc`

Calculate and retrieve results of ABC (pareto analysis) per timeseries and planning level.

> Body parameter

```json
{
  "data": [
    {
      "historyValues": [
        0
      ],
      "timeSeriesId": "string"
    }
  ],
  "planningLevelId": "string",
  "startDate": "1/16/2016"
}
```

<h3 id="abc-analysis-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Token|header|string|false|User Authentication Token|
|body|body|[PortfolioRequest](#schemaportfoliorequest)|false|none|
|» data|body|[[PlanningLevelDataDto](#schemaplanningleveldatadto)]|false|none|
|» planningLevelId|body|string|true|none|
|» startDate|body|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "abc12": "string",
    "abc12Value": 0,
    "abc6": "string",
    "abc6Value": 0,
    "abc9": "string",
    "abc9Value": 0,
    "id": "string",
    "thresholdA": 0,
    "thresholdB": 0,
    "thresholdC": 0
  }
]
```

<h3 id="abc-analysis-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="abc-analysis-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[PortfolioAbcModel](#schemaportfolioabcmodel)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## ABCxyz Analysis

> Code samples

```bash
curl https://example.com/portfolio/file-to-portfolio \
  -X POST \
  -F 'File=@/path/to/file'
```

`POST /portfolio/file-to-portfolio`

Calculate and retrieve results of ABC (pareto analysis) and xyz (Coefficient of variation) per timeseries and planning level. This analysis is a powerful means to estbalish a proper planning cadence, best accuracy messures and optimal hyperparameters for the organization. It provides a balanced and actionable overview of the entire product portfolio.

> Body parameter

```yaml
File: string
```

<h3 id="abcxyz-analysis-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Token|header|string|false|User Authentication Token|
|body|body|object|false|none|
|» File|body|string(binary)|true|none|

<h3 id="abcxyz-analysis-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

## Planning level rewind to calculate and measure performance potential (internal versus iCUE).

> Code samples

```bash
curl https://example.com/portfolio/forecast-performance-rewind \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "costOfError": 200,
    "data": [
      {
        "forecastValues": [
          0
        ],
        "historyValues": [
          0
        ],
        "timeSeriesId": "string"
      }
    ],
    "method": "iCUE1",
    "params": {
      "discardData": false,
      "errorType": "MeanAbsolutePercentageError",
      "holdOutPeriod": 4,
      "noFcst": 18,
      "outlierDetection": true,
      "periodicity": 12
    },
    "planningLevelId": "string",
    "rewindTimeFrame": 12,
    "startDate": "1/16/2016"
  }'
```

`POST /portfolio/forecast-performance-rewind`

Planning level rewind to calculate and measure performance potential (internal versus iCUE).

> Body parameter

```json
{
  "costOfError": 200,
  "data": [
    {
      "forecastValues": [
        0
      ],
      "historyValues": [
        0
      ],
      "timeSeriesId": "string"
    }
  ],
  "method": "iCUE1",
  "params": {
    "discardData": false,
    "errorType": "MeanAbsolutePercentageError",
    "holdOutPeriod": 4,
    "noFcst": 18,
    "outlierDetection": true,
    "periodicity": 12
  },
  "planningLevelId": "string",
  "rewindTimeFrame": 12,
  "startDate": "1/16/2016"
}
```

<h3 id="planning-level-rewind-to-calculate-and-measure-performance-potential-internal-versus-icue-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Token|header|string|false|User Authentication Token|
|body|body|[ForecastPerformanceRequest](#schemaforecastperformancerequest)|false|none|
|» costOfError|body|number(double)|false|none|
|» data|body|[[ForecastPerformanceDataRequest](#schemaforecastperformancedatarequest)]|false|none|
|» method|body|string|true|none|
|» params|body|[PlanningLevelInfoRequest](#schemaplanninglevelinforequest)|false|none|
|» planningLevelId|body|string|true|none|
|» rewindTimeFrame|body|integer(int32)|true|none|
|» startDate|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "hyperparameters": {
    "costOfError": 200,
    "discardData": false,
    "errorType": "MeanAbsolutePercentageError",
    "holdOutPeriod": 4,
    "noFcst": 18,
    "periodicity": 12,
    "rewindTimeFrame": 12
  },
  "timeSeries": [
    {
      "customerError": 0,
      "errorDiff": 0,
      "icueError": 0,
      "timeSeries": "string",
      "totalCost": 0,
      "useIcue": true
    }
  ],
  "totalCost": 0
}
```

<h3 id="planning-level-rewind-to-calculate-and-measure-performance-potential-internal-versus-icue-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RewindResponse](#schemarewindresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## xyz Analysis

> Code samples

```bash
curl https://example.com/portfolio/xyz \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "data": [
      {
        "historyValues": [
          0
        ],
        "timeSeriesId": "string"
      }
    ],
    "planningLevelId": "string",
    "startDate": "1/16/2016"
  }'
```

`POST /portfolio/xyz`

Calculate and retrieve results of xyz (Coefficient of variation) per timeseries and planning level.

> Body parameter

```json
{
  "data": [
    {
      "historyValues": [
        0
      ],
      "timeSeriesId": "string"
    }
  ],
  "planningLevelId": "string",
  "startDate": "1/16/2016"
}
```

<h3 id="xyz-analysis-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Token|header|string|false|User Authentication Token|
|body|body|[PortfolioRequest](#schemaportfoliorequest)|false|none|
|» data|body|[[PlanningLevelDataDto](#schemaplanningleveldatadto)]|false|none|
|» planningLevelId|body|string|true|none|
|» startDate|body|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "id": "string",
    "thresholdX": 0,
    "thresholdY": 0,
    "thresholdZ": 0,
    "xyz12": "string",
    "xyz12Value": 0,
    "xyz6": "string",
    "xyz6Value": 0,
    "xyz9": "string",
    "xyz9Value": 0
  }
]
```

<h3 id="xyz-analysis-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="xyz-analysis-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[PortfolioXyzModel](#schemaportfolioxyzmodel)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="growth-services-pricing">Pricing</h1>

## Bundle pricing

> Code samples

```bash
curl https://example.com/pricing/bundle-pricing \
  -X POST
```

`POST /pricing/bundle-pricing`

Bundle pricing

<h3 id="bundle-pricing-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Token|header|string|false|User Authentication Token|

<h3 id="bundle-pricing-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

## post/pricing/competitive-pricing

> Code samples

```bash
curl https://example.com/pricing/competitive-pricing \
  -X POST
```

`POST /pricing/competitive-pricing`

<h3 id="postpricingcompetitive-pricing-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Token|header|string|false|User Authentication Token|

<h3 id="postpricingcompetitive-pricing-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

## post/pricing/cost-plus-pricing

> Code samples

```bash
curl https://example.com/pricing/cost-plus-pricing \
  -X POST
```

`POST /pricing/cost-plus-pricing`

<h3 id="postpricingcost-plus-pricing-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Token|header|string|false|User Authentication Token|

<h3 id="postpricingcost-plus-pricing-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

## post/pricing/decoy-pricing

> Code samples

```bash
curl https://example.com/pricing/decoy-pricing \
  -X POST
```

`POST /pricing/decoy-pricing`

<h3 id="postpricingdecoy-pricing-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Token|header|string|false|User Authentication Token|

<h3 id="postpricingdecoy-pricing-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

## post/pricing/odd-pricing

> Code samples

```bash
curl https://example.com/pricing/odd-pricing \
  -X POST
```

`POST /pricing/odd-pricing`

<h3 id="postpricingodd-pricing-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Token|header|string|false|User Authentication Token|

<h3 id="postpricingodd-pricing-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

## post/pricing/penetration-pricing

> Code samples

```bash
curl https://example.com/pricing/penetration-pricing \
  -X POST
```

`POST /pricing/penetration-pricing`

<h3 id="postpricingpenetration-pricing-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Token|header|string|false|User Authentication Token|

<h3 id="postpricingpenetration-pricing-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

## post/pricing/price-elasticity-of-demand

> Code samples

```bash
curl https://example.com/pricing/price-elasticity-of-demand \
  -X POST
```

`POST /pricing/price-elasticity-of-demand`

<h3 id="postpricingprice-elasticity-of-demand-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Token|header|string|false|User Authentication Token|

<h3 id="postpricingprice-elasticity-of-demand-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="growth-services-reporting-and-monitoring">Reporting and Monitoring</h1>

## SKU rationalization report

> Code samples

```bash
curl https://example.com/report/performance/sku-rationalization/0 \
  -H 'Accept: application/json'
```

`GET /report/performance/sku-rationalization/{planningLevelId}`

SKU rationalization report

<h3 id="sku-rationalization-report-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|planningLevelId|path|integer(int32)|true|none|
|Token|header|string|false|User Authentication Token|

> Example responses

> 200 Response

```json
[
  {
    "abc12": "string",
    "abc12Value": 0,
    "abc6": "string",
    "abc6Value": 0,
    "abc9": "string",
    "abc9Value": 0,
    "id": "string",
    "thresholdA": 0,
    "thresholdB": 0,
    "thresholdC": 0,
    "thresholdX": 0,
    "thresholdY": 0,
    "thresholdZ": 0,
    "xyz12": "string",
    "xyz12Value": 0,
    "xyz6": "string",
    "xyz6Value": 0,
    "xyz9": "string",
    "xyz9Value": 0
  }
]
```

<h3 id="sku-rationalization-report-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="sku-rationalization-report-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[PortfolioModel](#schemaportfoliomodel)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Month over month performance per planning level

> Code samples

```bash
curl https://example.com/report/performance/string
```

`GET /report/performance/{planningLevelId}`

Month over month performance per planning level

<h3 id="month-over-month-performance-per-planning-level-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|planningLevelId|path|string|true|none|
|Token|header|string|false|User Authentication Token|

<h3 id="month-over-month-performance-per-planning-level-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get list of plannign levels by organization

> Code samples

```bash
curl https://example.com/report/planning-level/organization
```

`GET /report/planning-level/organization`

Get list of plannign levels by organization

<h3 id="get-list-of-plannign-levels-by-organization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Token|header|string|false|User Authentication Token|

<h3 id="get-list-of-plannign-levels-by-organization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get list of plannign levels by user

> Code samples

```bash
curl https://example.com/report/planning-level/user
```

`GET /report/planning-level/user`

Get list of plannign levels by user

<h3 id="get-list-of-plannign-levels-by-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Token|header|string|false|User Authentication Token|

<h3 id="get-list-of-plannign-levels-by-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get usage statistics per user

> Code samples

```bash
curl https://example.com/report/user
```

`GET /report/user`

Get usage statistics per user

<h3 id="get-usage-statistics-per-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Token|header|string|false|User Authentication Token|

<h3 id="get-usage-statistics-per-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_AiPlanningLevelRequest">AiPlanningLevelRequest</h2>
<!-- backwards compatibility -->
<a id="schemaaiplanninglevelrequest"></a>
<a id="schema_AiPlanningLevelRequest"></a>
<a id="tocSaiplanninglevelrequest"></a>
<a id="tocsaiplanninglevelrequest"></a>

```json
{
  "data": [
    {
      "historyValues": [
        0
      ],
      "timeSeriesId": "string"
    }
  ],
  "method": "icueMLP | icueMLO",
  "params": {
    "discardData": false,
    "errorType": "MeanAbsolutePercentageError",
    "holdOutPeriod": 4,
    "noFcst": 18,
    "outlierDetection": true,
    "periodicity": 12
  },
  "planningLevelId": "string",
  "startDate": "1/16/2016"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[PlanningLevelDataDto](#schemaplanningleveldatadto)]|false|none|none|
|method|string|true|none|none|
|params|[PlanningLevelInfoRequest](#schemaplanninglevelinforequest)|false|none|none|
|planningLevelId|string|true|none|none|
|startDate|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|method|icueMLP|
|method|icueMLO|
|method|icueMLN|

<h2 id="tocS_EntityResponse">EntityResponse</h2>
<!-- backwards compatibility -->
<a id="schemaentityresponse"></a>
<a id="schema_EntityResponse"></a>
<a id="tocSentityresponse"></a>
<a id="tocsentityresponse"></a>

```json
{
  "address": "string",
  "dbConnection": "string",
  "email": "string",
  "id": 0,
  "isActive": true,
  "name": "string",
  "token": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|string \| null|false|none|none|
|dbConnection|string \| null|false|none|none|
|email|string \| null|false|none|none|
|id|integer(int32)|false|none|none|
|isActive|boolean|false|none|none|
|name|string \| null|false|none|none|
|token|string(uuid)|false|none|none|

<h2 id="tocS_ForecastBottomUpResponse">ForecastBottomUpResponse</h2>
<!-- backwards compatibility -->
<a id="schemaforecastbottomupresponse"></a>
<a id="schema_ForecastBottomUpResponse"></a>
<a id="tocSforecastbottomupresponse"></a>
<a id="tocsforecastbottomupresponse"></a>

```json
{
  "forecastData": [
    {
      "date": "string",
      "value": 0
    }
  ],
  "hyperparameters": {
    "discardData": false,
    "errorType": "MeanAbsolutePercentageError",
    "holdOutPeriod": 4,
    "noFcst": 18,
    "periodicity": 12
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|forecastData|[[PlanningLevelForecastResultData](#schemaplanninglevelforecastresultdata)]|false|none|none|
|hyperparameters|[ForecastHyperparameterResponse](#schemaforecasthyperparameterresponse)|false|none|none|

<h2 id="tocS_ForecastHyperparameterResponse">ForecastHyperparameterResponse</h2>
<!-- backwards compatibility -->
<a id="schemaforecasthyperparameterresponse"></a>
<a id="schema_ForecastHyperparameterResponse"></a>
<a id="tocSforecasthyperparameterresponse"></a>
<a id="tocsforecasthyperparameterresponse"></a>

```json
{
  "discardData": false,
  "errorType": "MeanAbsolutePercentageError",
  "holdOutPeriod": 4,
  "noFcst": 18,
  "periodicity": 12
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|discardData|boolean \| null|false|none|none|
|errorType|string|false|none|none|
|holdOutPeriod|integer(int32) \| null|false|none|none|
|noFcst|integer(int32) \| null|false|none|none|
|periodicity|integer(int32) \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|errorType|MeanAbsolutePercentageError|
|errorType|MeanSquaredError|
|errorType|MeanAbsoluteError|
|errorType|MedianAbsoluteDeviation|
|errorType|None|

<h2 id="tocS_ForecastOptimalParametersResponse">ForecastOptimalParametersResponse</h2>
<!-- backwards compatibility -->
<a id="schemaforecastoptimalparametersresponse"></a>
<a id="schema_ForecastOptimalParametersResponse"></a>
<a id="tocSforecastoptimalparametersresponse"></a>
<a id="tocsforecastoptimalparametersresponse"></a>

```json
{
  "alpha": 0,
  "beta": 0,
  "gamma": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alpha|number(double) \| null|false|none|none|
|beta|number(double) \| null|false|none|none|
|gamma|number(double) \| null|false|none|none|

<h2 id="tocS_ForecastPerformanceDataRequest">ForecastPerformanceDataRequest</h2>
<!-- backwards compatibility -->
<a id="schemaforecastperformancedatarequest"></a>
<a id="schema_ForecastPerformanceDataRequest"></a>
<a id="tocSforecastperformancedatarequest"></a>
<a id="tocsforecastperformancedatarequest"></a>

```json
{
  "forecastValues": [
    0
  ],
  "historyValues": [
    0
  ],
  "timeSeriesId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|forecastValues|[number(double)]|false|none|none|
|historyValues|[number(double)]|false|none|none|
|timeSeriesId|string \| null|false|none|none|

<h2 id="tocS_ForecastPerformanceRequest">ForecastPerformanceRequest</h2>
<!-- backwards compatibility -->
<a id="schemaforecastperformancerequest"></a>
<a id="schema_ForecastPerformanceRequest"></a>
<a id="tocSforecastperformancerequest"></a>
<a id="tocsforecastperformancerequest"></a>

```json
{
  "costOfError": 200,
  "data": [
    {
      "forecastValues": [
        0
      ],
      "historyValues": [
        0
      ],
      "timeSeriesId": "string"
    }
  ],
  "method": "iCUE1",
  "params": {
    "discardData": false,
    "errorType": "MeanAbsolutePercentageError",
    "holdOutPeriod": 4,
    "noFcst": 18,
    "outlierDetection": true,
    "periodicity": 12
  },
  "planningLevelId": "string",
  "rewindTimeFrame": 12,
  "startDate": "1/16/2016"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|costOfError|number(double)|false|none|none|
|data|[[ForecastPerformanceDataRequest](#schemaforecastperformancedatarequest)]|false|none|none|
|method|string|true|none|none|
|params|[PlanningLevelInfoRequest](#schemaplanninglevelinforequest)|false|none|none|
|planningLevelId|string|true|none|none|
|rewindTimeFrame|integer(int32)|true|none|none|
|startDate|string|true|none|none|

<h2 id="tocS_ForecastResponse">ForecastResponse</h2>
<!-- backwards compatibility -->
<a id="schemaforecastresponse"></a>
<a id="schema_ForecastResponse"></a>
<a id="tocSforecastresponse"></a>
<a id="tocsforecastresponse"></a>

```json
{
  "hyperparameters": {
    "discardData": false,
    "errorType": "MeanAbsolutePercentageError",
    "holdOutPeriod": 4,
    "noFcst": 18,
    "periodicity": 12
  },
  "timeSeries": [
    {
      "error": 0,
      "forecastData": [
        {
          "date": "string",
          "value": 0
        }
      ],
      "method": "string",
      "timeSeriesId": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hyperparameters|[ForecastHyperparameterResponse](#schemaforecasthyperparameterresponse)|false|none|none|
|timeSeries|[[TimeSeriesForecastResponse](#schematimeseriesforecastresponse)]|false|none|none|

<h2 id="tocS_FullDetailsForecastResponse">FullDetailsForecastResponse</h2>
<!-- backwards compatibility -->
<a id="schemafulldetailsforecastresponse"></a>
<a id="schema_FullDetailsForecastResponse"></a>
<a id="tocSfulldetailsforecastresponse"></a>
<a id="tocsfulldetailsforecastresponse"></a>

```json
{
  "hyperparameters": {
    "discardData": false,
    "errorType": "MeanAbsolutePercentageError",
    "holdOutPeriod": 4,
    "noFcst": 18,
    "periodicity": 12
  },
  "timeSeries": [
    {
      "error": 0,
      "forecastData": [
        {
          "date": "string",
          "value": 0
        }
      ],
      "historyData": [
        {
          "date": "string",
          "value": 0
        }
      ],
      "method": "string",
      "optimalParameters": {
        "alpha": 0,
        "beta": 0,
        "gamma": 0
      },
      "outliers": [
        {
          "index": 0,
          "type": "Additive",
          "value": 0
        }
      ],
      "timeSeriesId": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hyperparameters|[ForecastHyperparameterResponse](#schemaforecasthyperparameterresponse)|false|none|none|
|timeSeries|[[TimeSeriesFullDetailsResponse](#schematimeseriesfulldetailsresponse)]|false|none|none|

<h2 id="tocS_HistoryAndForecastResponse">HistoryAndForecastResponse</h2>
<!-- backwards compatibility -->
<a id="schemahistoryandforecastresponse"></a>
<a id="schema_HistoryAndForecastResponse"></a>
<a id="tocShistoryandforecastresponse"></a>
<a id="tocshistoryandforecastresponse"></a>

```json
{
  "hyperparameters": {
    "discardData": false,
    "errorType": "MeanAbsolutePercentageError",
    "holdOutPeriod": 4,
    "noFcst": 18,
    "periodicity": 12
  },
  "timeSeries": [
    {
      "error": 0,
      "forecastData": [
        {
          "date": "string",
          "value": 0
        }
      ],
      "historyData": [
        {
          "date": "string",
          "value": 0
        }
      ],
      "method": "string",
      "timeSeriesId": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hyperparameters|[ForecastHyperparameterResponse](#schemaforecasthyperparameterresponse)|false|none|none|
|timeSeries|[[TimeSeriesHistoryAndForecastResponse](#schematimeserieshistoryandforecastresponse)]|false|none|none|

<h2 id="tocS_HyperparameterModel">HyperparameterModel</h2>
<!-- backwards compatibility -->
<a id="schemahyperparametermodel"></a>
<a id="schema_HyperparameterModel"></a>
<a id="tocShyperparametermodel"></a>
<a id="tocshyperparametermodel"></a>

```json
{
  "abcClassificationThresholdA": 0.8,
  "abcClassificationThresholdB": 0.95,
  "abcClassificationThresholdC": 0.95,
  "discardData": false,
  "errorType": "MeanAbsolutePercentageError",
  "holdOutPeriod": 4,
  "noFcst": 18,
  "outlierDetection": true,
  "periodicity": 12,
  "xyzClassificationThresholdX": 0.3,
  "xyzClassificationThresholdY": 0.6,
  "xyzClassificationThresholdZ": 0.6
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|abcClassificationThresholdA|number(double) \| null|false|none|none|
|abcClassificationThresholdB|number(double) \| null|false|none|none|
|abcClassificationThresholdC|number(double) \| null|false|none|none|
|discardData|boolean \| null|false|none|none|
|errorType|string|false|none|none|
|holdOutPeriod|integer(int32) \| null|false|none|none|
|noFcst|integer(int32) \| null|false|none|none|
|outlierDetection|boolean \| null|false|none|none|
|periodicity|integer(int32) \| null|false|none|none|
|xyzClassificationThresholdX|number(double) \| null|false|none|none|
|xyzClassificationThresholdY|number(double) \| null|false|none|none|
|xyzClassificationThresholdZ|number(double) \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|errorType|MeanAbsolutePercentageError|
|errorType|MeanSquaredError|
|errorType|MeanAbsoluteError|
|errorType|MedianAbsoluteDeviation|
|errorType|None|

<h2 id="tocS_JobResponse">JobResponse</h2>
<!-- backwards compatibility -->
<a id="schemajobresponse"></a>
<a id="schema_JobResponse"></a>
<a id="tocSjobresponse"></a>
<a id="tocsjobresponse"></a>

```json
{
  "jobId": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jobId|integer(int32)|false|none|none|

<h2 id="tocS_JsonForecastResponse">JsonForecastResponse</h2>
<!-- backwards compatibility -->
<a id="schemajsonforecastresponse"></a>
<a id="schema_JsonForecastResponse"></a>
<a id="tocSjsonforecastresponse"></a>
<a id="tocsjsonforecastresponse"></a>

```json
{
  "data": [
    {
      "historyValues": [
        0
      ],
      "timeSeriesId": "string"
    }
  ],
  "planningLevelId": "string",
  "startDate": "1/16/2016"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[PlanningLevelDataDto](#schemaplanningleveldatadto)]|false|none|none|
|planningLevelId|string \| null|false|none|none|
|startDate|string \| null|false|none|none|

<h2 id="tocS_LifecycleManyToOneRequest">LifecycleManyToOneRequest</h2>
<!-- backwards compatibility -->
<a id="schemalifecyclemanytoonerequest"></a>
<a id="schema_LifecycleManyToOneRequest"></a>
<a id="tocSlifecyclemanytoonerequest"></a>
<a id="tocslifecyclemanytoonerequest"></a>

```json
{
  "data": [
    {
      "historyValues": [
        0
      ],
      "timeSeriesId": "string"
    }
  ],
  "planningLevelId": "string",
  "ratios": [
    0
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[PlanningLevelDataDto](#schemaplanningleveldatadto)]|false|none|none|
|planningLevelId|string|true|none|none|
|ratios|[number(double)]|false|none|none|

<h2 id="tocS_LifecycleOneToOneRequest">LifecycleOneToOneRequest</h2>
<!-- backwards compatibility -->
<a id="schemalifecycleonetoonerequest"></a>
<a id="schema_LifecycleOneToOneRequest"></a>
<a id="tocSlifecycleonetoonerequest"></a>
<a id="tocslifecycleonetoonerequest"></a>

```json
{
  "data": {
    "historyValues": [
      0
    ],
    "timeSeriesId": "string"
  },
  "planningLevelId": "string",
  "ratio": 15
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[PlanningLevelDataDto](#schemaplanningleveldatadto)|false|none|none|
|planningLevelId|string|true|none|none|
|ratio|number(double)|false|none|none|

<h2 id="tocS_MethodDto">MethodDto</h2>
<!-- backwards compatibility -->
<a id="schemamethoddto"></a>
<a id="schema_MethodDto"></a>
<a id="tocSmethoddto"></a>
<a id="tocsmethoddto"></a>

```json
{
  "key": "string",
  "name": "string",
  "queue": "string",
  "replyQueue": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string \| null|false|none|none|
|name|string \| null|false|none|none|
|queue|string \| null|false|none|none|
|replyQueue|string \| null|false|none|none|

<h2 id="tocS_NewEntityRequest">NewEntityRequest</h2>
<!-- backwards compatibility -->
<a id="schemanewentityrequest"></a>
<a id="schema_NewEntityRequest"></a>
<a id="tocSnewentityrequest"></a>
<a id="tocsnewentityrequest"></a>

```json
{
  "address": "string",
  "email": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|string \| null|false|none|none|
|email|string \| null|false|none|none|
|name|string \| null|false|none|none|

<h2 id="tocS_NewModelRequest">NewModelRequest</h2>
<!-- backwards compatibility -->
<a id="schemanewmodelrequest"></a>
<a id="schema_NewModelRequest"></a>
<a id="tocSnewmodelrequest"></a>
<a id="tocsnewmodelrequest"></a>

```json
{
  "key": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string \| null|false|none|none|
|name|string \| null|false|none|none|

<h2 id="tocS_NewTokenRequest">NewTokenRequest</h2>
<!-- backwards compatibility -->
<a id="schemanewtokenrequest"></a>
<a id="schema_NewTokenRequest"></a>
<a id="tocSnewtokenrequest"></a>
<a id="tocsnewtokenrequest"></a>

```json
{
  "entityToken": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "expirationDate": "1970-01-01T00:00:00Z",
  "userToken": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entityToken|string(uuid)|false|none|none|
|expirationDate|string(date-time)|false|none|none|
|userToken|string(uuid)|false|none|none|

<h2 id="tocS_NewUserRequest">NewUserRequest</h2>
<!-- backwards compatibility -->
<a id="schemanewuserrequest"></a>
<a id="schema_NewUserRequest"></a>
<a id="tocSnewuserrequest"></a>
<a id="tocsnewuserrequest"></a>

```json
{
  "email": "string",
  "entityToken": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "firstname": "string",
  "isActive": true,
  "lastname": "string",
  "phone": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string \| null|false|none|none|
|entityToken|string(uuid)|false|none|none|
|firstname|string \| null|false|none|none|
|isActive|boolean|false|read-only|none|
|lastname|string \| null|false|none|none|
|phone|string \| null|false|none|none|

<h2 id="tocS_OptimalParameterResponse">OptimalParameterResponse</h2>
<!-- backwards compatibility -->
<a id="schemaoptimalparameterresponse"></a>
<a id="schema_OptimalParameterResponse"></a>
<a id="tocSoptimalparameterresponse"></a>
<a id="tocsoptimalparameterresponse"></a>

```json
{
  "hyperparameters": {
    "discardData": false,
    "errorType": "MeanAbsolutePercentageError",
    "holdOutPeriod": 4,
    "noFcst": 18,
    "periodicity": 12
  },
  "timeSeries": [
    {
      "method": "string",
      "optimalParameters": {
        "alpha": 0,
        "beta": 0,
        "gamma": 0
      },
      "timeSeriesId": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hyperparameters|[ForecastHyperparameterResponse](#schemaforecasthyperparameterresponse)|false|none|none|
|timeSeries|[[TimeSeriesOptimalParametersResponse](#schematimeseriesoptimalparametersresponse)]|false|none|none|

<h2 id="tocS_OutlierResponse">OutlierResponse</h2>
<!-- backwards compatibility -->
<a id="schemaoutlierresponse"></a>
<a id="schema_OutlierResponse"></a>
<a id="tocSoutlierresponse"></a>
<a id="tocsoutlierresponse"></a>

```json
{
  "index": 0,
  "type": "Additive",
  "value": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|index|integer(int32)|false|none|none|
|type|string|false|none|none|
|value|number(double)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|Additive|
|type|LevelShift|
|type|TemporaryChange|
|type|Seasonal|

<h2 id="tocS_OutliersRequest">OutliersRequest</h2>
<!-- backwards compatibility -->
<a id="schemaoutliersrequest"></a>
<a id="schema_OutliersRequest"></a>
<a id="tocSoutliersrequest"></a>
<a id="tocsoutliersrequest"></a>

```json
{
  "data": [
    {
      "historyValues": [
        0
      ],
      "timeSeriesId": "string"
    }
  ],
  "planningLevelId": "string",
  "startDate": "1/16/2016"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[PlanningLevelDataDto](#schemaplanningleveldatadto)]|false|none|none|
|planningLevelId|string|true|none|none|
|startDate|string|true|none|none|

<h2 id="tocS_PlanningLevelDataDto">PlanningLevelDataDto</h2>
<!-- backwards compatibility -->
<a id="schemaplanningleveldatadto"></a>
<a id="schema_PlanningLevelDataDto"></a>
<a id="tocSplanningleveldatadto"></a>
<a id="tocsplanningleveldatadto"></a>

```json
{
  "historyValues": [
    0
  ],
  "timeSeriesId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|historyValues|[number(double)]|false|none|none|
|timeSeriesId|string \| null|false|none|none|

<h2 id="tocS_PlanningLevelForecastResultData">PlanningLevelForecastResultData</h2>
<!-- backwards compatibility -->
<a id="schemaplanninglevelforecastresultdata"></a>
<a id="schema_PlanningLevelForecastResultData"></a>
<a id="tocSplanninglevelforecastresultdata"></a>
<a id="tocsplanninglevelforecastresultdata"></a>

```json
{
  "date": "string",
  "value": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|date|string \| null|false|none|none|
|value|number(double)|false|none|none|

<h2 id="tocS_PlanningLevelInfoRequest">PlanningLevelInfoRequest</h2>
<!-- backwards compatibility -->
<a id="schemaplanninglevelinforequest"></a>
<a id="schema_PlanningLevelInfoRequest"></a>
<a id="tocSplanninglevelinforequest"></a>
<a id="tocsplanninglevelinforequest"></a>

```json
{
  "discardData": false,
  "errorType": "MeanAbsolutePercentageError",
  "holdOutPeriod": 4,
  "noFcst": 18,
  "outlierDetection": true,
  "periodicity": 12
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|discardData|boolean|true|none|none|
|errorType|string|true|none|none|
|holdOutPeriod|integer(int32)|true|none|none|
|noFcst|integer(int32)|true|none|none|
|outlierDetection|boolean|true|none|none|
|periodicity|integer(int32)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|errorType|MeanAbsolutePercentageError|
|errorType|MeanSquaredError|
|errorType|MeanAbsoluteError|
|errorType|MedianAbsoluteDeviation|
|errorType|None|

<h2 id="tocS_PlanningLevelReRunRequest">PlanningLevelReRunRequest</h2>
<!-- backwards compatibility -->
<a id="schemaplanninglevelrerunrequest"></a>
<a id="schema_PlanningLevelReRunRequest"></a>
<a id="tocSplanninglevelrerunrequest"></a>
<a id="tocsplanninglevelrerunrequest"></a>

```json
{
  "method": "iCUE1",
  "params": {
    "discardData": false,
    "errorType": "MeanAbsolutePercentageError",
    "holdOutPeriod": 4,
    "noFcst": 18,
    "outlierDetection": true,
    "periodicity": 12
  },
  "planningLevelId": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|method|string|true|none|none|
|params|[PlanningLevelInfoRequest](#schemaplanninglevelinforequest)|false|none|none|
|planningLevelId|integer(int32)|true|none|none|

<h2 id="tocS_PlanningLevelRequest">PlanningLevelRequest</h2>
<!-- backwards compatibility -->
<a id="schemaplanninglevelrequest"></a>
<a id="schema_PlanningLevelRequest"></a>
<a id="tocSplanninglevelrequest"></a>
<a id="tocsplanninglevelrequest"></a>

```json
{
  "data": [
    {
      "historyValues": [
        0
      ],
      "timeSeriesId": "string"
    }
  ],
  "method": "iCUE1",
  "override": false,
  "params": {
    "discardData": false,
    "errorType": "MeanAbsolutePercentageError",
    "holdOutPeriod": 4,
    "noFcst": 18,
    "outlierDetection": true,
    "periodicity": 12
  },
  "planningLevelId": "string",
  "startDate": "1/16/2016"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[PlanningLevelDataDto](#schemaplanningleveldatadto)]|false|none|none|
|method|string|true|none|none|
|override|boolean|false|none|none|
|params|[PlanningLevelInfoRequest](#schemaplanninglevelinforequest)|false|none|none|
|planningLevelId|string|true|none|none|
|startDate|string|true|none|none|

<h2 id="tocS_PortfolioAbcModel">PortfolioAbcModel</h2>
<!-- backwards compatibility -->
<a id="schemaportfolioabcmodel"></a>
<a id="schema_PortfolioAbcModel"></a>
<a id="tocSportfolioabcmodel"></a>
<a id="tocsportfolioabcmodel"></a>

```json
{
  "abc12": "string",
  "abc12Value": 0,
  "abc6": "string",
  "abc6Value": 0,
  "abc9": "string",
  "abc9Value": 0,
  "id": "string",
  "thresholdA": 0,
  "thresholdB": 0,
  "thresholdC": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|abc12|string|false|none|none|
|abc12Value|number(double)|false|none|none|
|abc6|string|false|none|none|
|abc6Value|number(double)|false|none|none|
|abc9|string|false|none|none|
|abc9Value|number(double)|false|none|none|
|id|string \| null|false|none|none|
|thresholdA|number(double)|false|none|none|
|thresholdB|number(double)|false|none|none|
|thresholdC|number(double)|false|none|none|

<h2 id="tocS_PortfolioModel">PortfolioModel</h2>
<!-- backwards compatibility -->
<a id="schemaportfoliomodel"></a>
<a id="schema_PortfolioModel"></a>
<a id="tocSportfoliomodel"></a>
<a id="tocsportfoliomodel"></a>

```json
{
  "abc12": "string",
  "abc12Value": 0,
  "abc6": "string",
  "abc6Value": 0,
  "abc9": "string",
  "abc9Value": 0,
  "id": "string",
  "thresholdA": 0,
  "thresholdB": 0,
  "thresholdC": 0,
  "thresholdX": 0,
  "thresholdY": 0,
  "thresholdZ": 0,
  "xyz12": "string",
  "xyz12Value": 0,
  "xyz6": "string",
  "xyz6Value": 0,
  "xyz9": "string",
  "xyz9Value": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|abc12|string|false|none|none|
|abc12Value|number(double)|false|none|none|
|abc6|string|false|none|none|
|abc6Value|number(double)|false|none|none|
|abc9|string|false|none|none|
|abc9Value|number(double)|false|none|none|
|id|string \| null|false|none|none|
|thresholdA|number(double)|false|none|none|
|thresholdB|number(double)|false|none|none|
|thresholdC|number(double)|false|none|none|
|thresholdX|number(double)|false|none|none|
|thresholdY|number(double)|false|none|none|
|thresholdZ|number(double)|false|none|none|
|xyz12|string|false|none|none|
|xyz12Value|number(double)|false|none|none|
|xyz6|string|false|none|none|
|xyz6Value|number(double)|false|none|none|
|xyz9|string|false|none|none|
|xyz9Value|number(double)|false|none|none|

<h2 id="tocS_PortfolioRequest">PortfolioRequest</h2>
<!-- backwards compatibility -->
<a id="schemaportfoliorequest"></a>
<a id="schema_PortfolioRequest"></a>
<a id="tocSportfoliorequest"></a>
<a id="tocsportfoliorequest"></a>

```json
{
  "data": [
    {
      "historyValues": [
        0
      ],
      "timeSeriesId": "string"
    }
  ],
  "planningLevelId": "string",
  "startDate": "1/16/2016"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[PlanningLevelDataDto](#schemaplanningleveldatadto)]|false|none|none|
|planningLevelId|string|true|none|none|
|startDate|string|true|none|none|

<h2 id="tocS_PortfolioXyzModel">PortfolioXyzModel</h2>
<!-- backwards compatibility -->
<a id="schemaportfolioxyzmodel"></a>
<a id="schema_PortfolioXyzModel"></a>
<a id="tocSportfolioxyzmodel"></a>
<a id="tocsportfolioxyzmodel"></a>

```json
{
  "id": "string",
  "thresholdX": 0,
  "thresholdY": 0,
  "thresholdZ": 0,
  "xyz12": "string",
  "xyz12Value": 0,
  "xyz6": "string",
  "xyz6Value": 0,
  "xyz9": "string",
  "xyz9Value": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string \| null|false|none|none|
|thresholdX|number(double)|false|none|none|
|thresholdY|number(double)|false|none|none|
|thresholdZ|number(double)|false|none|none|
|xyz12|string|false|none|none|
|xyz12Value|number(double)|false|none|none|
|xyz6|string|false|none|none|
|xyz6Value|number(double)|false|none|none|
|xyz9|string|false|none|none|
|xyz9Value|number(double)|false|none|none|

<h2 id="tocS_RewindHyperparameterResponse">RewindHyperparameterResponse</h2>
<!-- backwards compatibility -->
<a id="schemarewindhyperparameterresponse"></a>
<a id="schema_RewindHyperparameterResponse"></a>
<a id="tocSrewindhyperparameterresponse"></a>
<a id="tocsrewindhyperparameterresponse"></a>

```json
{
  "costOfError": 200,
  "discardData": false,
  "errorType": "MeanAbsolutePercentageError",
  "holdOutPeriod": 4,
  "noFcst": 18,
  "periodicity": 12,
  "rewindTimeFrame": 12
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|costOfError|number(double) \| null|false|none|none|
|discardData|boolean \| null|false|none|none|
|errorType|string|false|none|none|
|holdOutPeriod|integer(int32) \| null|false|none|none|
|noFcst|integer(int32) \| null|false|none|none|
|periodicity|integer(int32) \| null|false|none|none|
|rewindTimeFrame|integer(int32)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|errorType|MeanAbsolutePercentageError|
|errorType|MeanSquaredError|
|errorType|MeanAbsoluteError|
|errorType|MedianAbsoluteDeviation|
|errorType|None|

<h2 id="tocS_RewindResponse">RewindResponse</h2>
<!-- backwards compatibility -->
<a id="schemarewindresponse"></a>
<a id="schema_RewindResponse"></a>
<a id="tocSrewindresponse"></a>
<a id="tocsrewindresponse"></a>

```json
{
  "hyperparameters": {
    "costOfError": 200,
    "discardData": false,
    "errorType": "MeanAbsolutePercentageError",
    "holdOutPeriod": 4,
    "noFcst": 18,
    "periodicity": 12,
    "rewindTimeFrame": 12
  },
  "timeSeries": [
    {
      "customerError": 0,
      "errorDiff": 0,
      "icueError": 0,
      "timeSeries": "string",
      "totalCost": 0,
      "useIcue": true
    }
  ],
  "totalCost": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hyperparameters|[RewindHyperparameterResponse](#schemarewindhyperparameterresponse)|false|none|none|
|timeSeries|[[RewindTimeSeriesResponse](#schemarewindtimeseriesresponse)]|false|none|none|
|totalCost|number(double)|false|none|none|

<h2 id="tocS_RewindTimeSeriesResponse">RewindTimeSeriesResponse</h2>
<!-- backwards compatibility -->
<a id="schemarewindtimeseriesresponse"></a>
<a id="schema_RewindTimeSeriesResponse"></a>
<a id="tocSrewindtimeseriesresponse"></a>
<a id="tocsrewindtimeseriesresponse"></a>

```json
{
  "customerError": 0,
  "errorDiff": 0,
  "icueError": 0,
  "timeSeries": "string",
  "totalCost": 0,
  "useIcue": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|customerError|number(double) \| null|false|none|none|
|errorDiff|number(double) \| null|false|none|none|
|icueError|number(double)|false|none|none|
|timeSeries|string \| null|false|none|none|
|totalCost|number(double) \| null|false|none|none|
|useIcue|boolean \| null|false|none|none|

<h2 id="tocS_TimeSeriesForecastResponse">TimeSeriesForecastResponse</h2>
<!-- backwards compatibility -->
<a id="schematimeseriesforecastresponse"></a>
<a id="schema_TimeSeriesForecastResponse"></a>
<a id="tocStimeseriesforecastresponse"></a>
<a id="tocstimeseriesforecastresponse"></a>

```json
{
  "error": 0,
  "forecastData": [
    {
      "date": "string",
      "value": 0
    }
  ],
  "method": "string",
  "timeSeriesId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|number(double) \| null|false|none|none|
|forecastData|[[PlanningLevelForecastResultData](#schemaplanninglevelforecastresultdata)]|false|none|none|
|method|string \| null|false|none|none|
|timeSeriesId|string \| null|false|none|none|

<h2 id="tocS_TimeSeriesFullDetailsResponse">TimeSeriesFullDetailsResponse</h2>
<!-- backwards compatibility -->
<a id="schematimeseriesfulldetailsresponse"></a>
<a id="schema_TimeSeriesFullDetailsResponse"></a>
<a id="tocStimeseriesfulldetailsresponse"></a>
<a id="tocstimeseriesfulldetailsresponse"></a>

```json
{
  "error": 0,
  "forecastData": [
    {
      "date": "string",
      "value": 0
    }
  ],
  "historyData": [
    {
      "date": "string",
      "value": 0
    }
  ],
  "method": "string",
  "optimalParameters": {
    "alpha": 0,
    "beta": 0,
    "gamma": 0
  },
  "outliers": [
    {
      "index": 0,
      "type": "Additive",
      "value": 0
    }
  ],
  "timeSeriesId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|number(double) \| null|false|none|none|
|forecastData|[[PlanningLevelForecastResultData](#schemaplanninglevelforecastresultdata)]|false|none|none|
|historyData|[[PlanningLevelForecastResultData](#schemaplanninglevelforecastresultdata)]|false|none|none|
|method|string \| null|false|none|none|
|optimalParameters|[ForecastOptimalParametersResponse](#schemaforecastoptimalparametersresponse)|false|none|none|
|outliers|[[OutlierResponse](#schemaoutlierresponse)]|false|none|none|
|timeSeriesId|string \| null|false|none|none|

<h2 id="tocS_TimeSeriesHistoryAndForecastResponse">TimeSeriesHistoryAndForecastResponse</h2>
<!-- backwards compatibility -->
<a id="schematimeserieshistoryandforecastresponse"></a>
<a id="schema_TimeSeriesHistoryAndForecastResponse"></a>
<a id="tocStimeserieshistoryandforecastresponse"></a>
<a id="tocstimeserieshistoryandforecastresponse"></a>

```json
{
  "error": 0,
  "forecastData": [
    {
      "date": "string",
      "value": 0
    }
  ],
  "historyData": [
    {
      "date": "string",
      "value": 0
    }
  ],
  "method": "string",
  "timeSeriesId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|number(double) \| null|false|none|none|
|forecastData|[[PlanningLevelForecastResultData](#schemaplanninglevelforecastresultdata)]|false|none|none|
|historyData|[[PlanningLevelForecastResultData](#schemaplanninglevelforecastresultdata)]|false|none|none|
|method|string \| null|false|none|none|
|timeSeriesId|string \| null|false|none|none|

<h2 id="tocS_TimeSeriesOptimalParametersResponse">TimeSeriesOptimalParametersResponse</h2>
<!-- backwards compatibility -->
<a id="schematimeseriesoptimalparametersresponse"></a>
<a id="schema_TimeSeriesOptimalParametersResponse"></a>
<a id="tocStimeseriesoptimalparametersresponse"></a>
<a id="tocstimeseriesoptimalparametersresponse"></a>

```json
{
  "method": "string",
  "optimalParameters": {
    "alpha": 0,
    "beta": 0,
    "gamma": 0
  },
  "timeSeriesId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|method|string \| null|false|none|none|
|optimalParameters|[ForecastOptimalParametersResponse](#schemaforecastoptimalparametersresponse)|false|none|none|
|timeSeriesId|string \| null|false|none|none|

<h2 id="tocS_TimeSeriesOutliersResponse">TimeSeriesOutliersResponse</h2>
<!-- backwards compatibility -->
<a id="schematimeseriesoutliersresponse"></a>
<a id="schema_TimeSeriesOutliersResponse"></a>
<a id="tocStimeseriesoutliersresponse"></a>
<a id="tocstimeseriesoutliersresponse"></a>

```json
{
  "outliers": [
    {
      "index": 0,
      "type": "Additive",
      "value": 0
    }
  ],
  "timeSeriesId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|outliers|[[OutlierResponse](#schemaoutlierresponse)]|false|none|none|
|timeSeriesId|string \| null|false|none|none|

<h2 id="tocS_ToggleRequest">ToggleRequest</h2>
<!-- backwards compatibility -->
<a id="schematogglerequest"></a>
<a id="schema_ToggleRequest"></a>
<a id="tocStogglerequest"></a>
<a id="tocstogglerequest"></a>

```json
{
  "id": 0,
  "isActive": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|isActive|boolean|false|none|none|

<h2 id="tocS_ToggleUserRequest">ToggleUserRequest</h2>
<!-- backwards compatibility -->
<a id="schematoggleuserrequest"></a>
<a id="schema_ToggleUserRequest"></a>
<a id="tocStoggleuserrequest"></a>
<a id="tocstoggleuserrequest"></a>

```json
{
  "entityId": 0,
  "id": 0,
  "isActive": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entityId|integer(int32)|false|none|none|
|id|integer(int32)|false|none|none|
|isActive|boolean|false|none|none|
