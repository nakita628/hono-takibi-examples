<h1 id="edrv-api">eDRV API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

edrv.io API Documentation

Base URLs:

* <a href="https://api.apis.guru//api.edrv.io">https://api.apis.guru//api.edrv.io</a>

Email: <a href="mailto:hello@edrv.io">eDRV</a> 
Web: <a href="https://edrv.io">eDRV</a> 

# Authentication

- oAuth2 authentication.

    - Flow: implicit
    - Authorization URL = [https://auth.edrv.io/authorize](https://auth.edrv.io/authorize)

|Scope|Scope Description|
|---|---|
|read:chargestations|Read chargestations|
|read:chargestations/:id|Read a chargestation|
|read:chargestations/:id/connectors|Read connectors for a chargestation|
|read:connectors|Read connectors|
|read:connectors/:id|Read a connector|
|read:drivers|Read drivers|
|read:drivers/:id|Read a driver|
|read:locations|Read locations|
|read:locations/:id|Read a location|
|read:organizations|Read organizations|
|read:organizations/:id|Read an organization|
|read:realtime|Read realtime|
|read:reservations|Read reservations|
|read:reservations/:id|Read a reservations|
|read:stats/:asset/:statistic|Read a statistic|
|read:tokens|Read tokens|
|read:tokens/:id|Read a token|
|read:transactions|Read transactions|
|read:transactions/:id|Read a transaction|
|write:chargestations|Write chargestations|
|write:chargestations/:id|Write a chargestation|
|write:commands/remotestart|Write remotestart for commands|
|write:commands/remotestop|Write remotestop for commands|
|write:commands/reserve|Write reserve for commands|
|write:commands/reset|Write reset for commands|
|write:commands/unlockconnector|Write unlockconnector for commands|
|write:connectors|Write connectors|
|write:connectors/:id|Write a connector|
|write:drivers|Write drivers|
|write:drivers/:id|Write a driver|
|write:locations|Write locations|
|write:locations/:id|Write a location|
|write:organizations|Write organizations|
|write:organizations/:id|Writen an organization|
|write:reservations|Write reservations|
|write:reservations/:id|Write a reservation|
|write:tokens|Write tokens|
|write:tokens/:id|Write a token|
|write:transactions|Write transactions|
|write:transactions/:id|Write a transactions|

<h1 id="edrv-api-charge-stations">Charge Stations</h1>

## getChargeStations

<a id="opIdgetChargeStations"></a>

> Code samples

```bash
curl https://example.com/v1/chargestations \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/chargestations`

List all Chargestations

<h3 id="getchargestations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organization|query|string|false|Filter by Org. Id|
|location|query|string|false|Filter by Location Id|
|online|query|boolean|false|Filter by Online Status|
|active|query|boolean|false|Chargestations that have been activated/deactivated by the admin|
|public|query|boolean|false|Chargestations that are public|
|paginate_limit|query|integer|false|Number of results per page|
|paginate_page|query|string|false|The queried page index|
|paginate_enabled|query|boolean|false|Enable pagination|
|sort_by|query|string|false|Sort data by this key|
|sort_order|query|string|false|asc to sort ascending (default is desc - descending)|
|createdAt[$gte]|query|string(date-time)|false|Date as ISO String|
|createdAt[$lte]|query|string(date-time)|false|Date as ISO String|
|updatedAt[$gte]|query|string(date-time)|false|Date as ISO String|
|updatedAt[$lte]|query|string(date-time)|false|Date as ISO String|
|include_location|query|boolean|false|Populate location|
|include_evses|query|boolean|false|Populate evses|
|include_organization|query|boolean|false|Populate organization|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sort_order|desc|
|sort_order|asc|

<h3 id="getchargestations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|An array of chargestation objects|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2
</aside>

## postChargeStations

<a id="opIdpostChargeStations"></a>

> Code samples

```bash
curl https://example.com/v1/chargestations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "location": "string",
    "manufacturer": "string",
    "model": "string",
    "protocol": "string",
    "public": true
  }'
```

`POST /v1/chargestations`

Create a new charge station

> Body parameter

```json
{
  "location": "string",
  "manufacturer": "string",
  "model": "string",
  "protocol": "string",
  "public": true
}
```

<h3 id="postchargestations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[schema1](#schemaschema1)|true|Include charge station properties to create here|
|» location|body|string|false|none|
|» manufacturer|body|string|false|none|
|» model|body|string|false|none|
|» protocol|body|string|false|none|
|» public|body|boolean|false|none|

> Example responses

> 201 Response

```json
{
  "chargestation": {},
  "message": "string",
  "ok": true
}
```

<h3 id="postchargestations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Returns the newly created chargestion object|Inline|
|400|Bad Request|A failure response|None|

<h3 id="postchargestations-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|chargestation|object|false|none|none|
|message|string|false|none|none|
|ok|boolean|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2
</aside>

## getChargeStation

<a id="opIdgetChargeStation"></a>

> Code samples

```bash
curl https://example.com/v1/chargestations/string \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/chargestations/{id}`

Get a single charge station's data

<h3 id="getchargestation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The charge station id that needs to be fetched|
|include_location|query|boolean|false|Populate location|
|include_evses|query|boolean|false|Populate evses|
|include_organization|query|boolean|false|Populate organization|

<h3 id="getchargestation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns a chargestion object|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2
</aside>

## deleteChargeStation

<a id="opIddeleteChargeStation"></a>

> Code samples

```bash
curl https://example.com/v1/chargestations/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/chargestations/{id}`

Use to delete a charge station

<h3 id="deletechargestation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The charge station id that needs to be deleted|

<h3 id="deletechargestation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the deleted chargestion object|None|
|400|Bad Request|Request Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2
</aside>

## patchChargeStation

<a id="opIdpatchChargeStation"></a>

> Code samples

```bash
curl https://example.com/v1/chargestations/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "location": "string",
    "manufacturer": "string",
    "model": "string",
    "protocol": "string",
    "public": true
  }'
```

`PATCH /v1/chargestations/{id}`

Update a charge station's data

> Body parameter

```json
{
  "location": "string",
  "manufacturer": "string",
  "model": "string",
  "protocol": "string",
  "public": true
}
```

<h3 id="patchchargestation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of charge station that needs to be updated|
|body|body|[schema1](#schemaschema1)|true|Include charge station properties to update here|
|» location|body|string|false|none|
|» manufacturer|body|string|false|none|
|» model|body|string|false|none|
|» protocol|body|string|false|none|
|» public|body|boolean|false|none|

> Example responses

> 200 Response

```json
{
  "message": "string",
  "ok": true,
  "result": {}
}
```

<h3 id="patchchargestation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the updated chargestion object|Inline|
|400|Bad Request|A failure response|None|

<h3 id="patchchargestation-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|ok|boolean|false|none|none|
|result|object|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2
</aside>

## getChargeStationConnectors

<a id="opIdgetChargeStationConnectors"></a>

> Code samples

```bash
curl https://example.com/v1/chargestations/string/connectors \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/chargestations/{id}/connectors`

List connectors for a chargestation

<h3 id="getchargestationconnectors-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|chargeStation id|
|include_evse|query|boolean|false|Populate evse|
|include_organization|query|boolean|false|Populate organization|

<h3 id="getchargestationconnectors-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns an array of connector objects|None|
|400|Bad Request|A failure response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2
</aside>

<h1 id="edrv-api-commands">Commands</h1>

## getCommands

<a id="opIdgetCommands"></a>

> Code samples

```bash
curl https://example.com/v1/commands \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/commands`

Get Commands data

<h3 id="getcommands-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|paginate_limit|query|integer|false|Number of results per page|
|paginate_page|query|string|false|The queried page index|
|paginate_enabled|query|boolean|false|Enable pagination|
|sort_by|query|string|false|Sort data by this key|
|sort_order|query|string|false|asc to sort ascending (default is desc - descending)|
|createdAt[$gte]|query|string(date-time)|false|Date as ISO String|
|createdAt[$lte]|query|string(date-time)|false|Date as ISO String|
|updatedAt[$gte]|query|string(date-time)|false|Date as ISO String|
|updatedAt[$lte]|query|string(date-time)|false|Date as ISO String|
|include_chargestation|query|boolean|false|Populate chargestation|
|include_driver|query|boolean|false|Populate driver|
|include_transaction|query|boolean|false|Populate transaction|
|include_organization|query|boolean|false|Populate organization|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sort_order|desc|
|sort_order|asc|

<h3 id="getcommands-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2
</aside>

## cancelreservation

<a id="opIdcancelreservation"></a>

> Code samples

```bash
curl https://example.com/v1/commands/cancelreservation \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "reservation": "string"
  }'
```

`POST /v1/commands/cancelreservation`

Use to request a delete an existing reservation. The request will wait for the charge station to process the command. It will timeout after 60 seconds.

> Body parameter

```json
{
  "reservation": "string"
}
```

<h3 id="cancelreservation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» reservation|body|string|false|none|

> Example responses

> 201 Response

```json
{
  "message": "string",
  "ok": true,
  "result": {}
}
```

<h3 id="cancelreservation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|A successful response|Inline|
|400|Bad Request|A failure response|None|

<h3 id="cancelreservation-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|ok|boolean|false|none|none|
|result|object|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2
</aside>

## remotestart

<a id="opIdremotestart"></a>

> Code samples

```bash
curl https://example.com/v1/commands/remotestart \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "chargestation": "string",
    "connector": "string",
    "driver": "string",
    "token": "string"
  }'
```

`POST /v1/commands/remotestart`

Use to request a remote start command. The request will wait for the charge station to process the command. It will timeout after 60 seconds.

> Body parameter

```json
{
  "chargestation": "string",
  "connector": "string",
  "driver": "string",
  "token": "string"
}
```

<h3 id="remotestart-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» chargestation|body|string|false|none|
|» connector|body|string|false|none|
|» driver|body|string|false|none|
|» token|body|string|false|none|

> Example responses

> 201 Response

```json
{
  "command": {},
  "message": "string",
  "ok": true
}
```

<h3 id="remotestart-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|A successful response|Inline|
|400|Bad Request|A failure response|None|

<h3 id="remotestart-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|command|object|false|none|none|
|message|string|false|none|none|
|ok|boolean|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2
</aside>

## remotestop

<a id="opIdremotestop"></a>

> Code samples

```bash
curl https://example.com/v1/commands/remotestop \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "chargestation": "string",
    "driver": "string",
    "transaction": "string"
  }'
```

`POST /v1/commands/remotestop`

Use to request a remote stop command. The request will wait for the charge station to process the command. It will timeout after 60 seconds.

> Body parameter

```json
{
  "chargestation": "string",
  "driver": "string",
  "transaction": "string"
}
```

<h3 id="remotestop-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|Remote stop transaction info here.|
|» chargestation|body|string|false|none|
|» driver|body|string|false|none|
|» transaction|body|string|false|none|

<h3 id="remotestop-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|A successful response|None|
|400|Bad Request|A failure response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2
</aside>

## reserve

<a id="opIdreserve"></a>

> Code samples

```bash
curl https://example.com/v1/commands/reserve \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "chargestation": "string",
    "connector": "string",
    "driver": "string",
    "endDate": "string",
    "token": "string"
  }'
```

`POST /v1/commands/reserve`

Use to request a reserve command. The request will wait for the charge station to process the command. It will timeout after 60 seconds.

> Body parameter

```json
{
  "chargestation": "string",
  "connector": "string",
  "driver": "string",
  "endDate": "string",
  "token": "string"
}
```

<h3 id="reserve-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» chargestation|body|string|false|none|
|» connector|body|string|false|none|
|» driver|body|string|false|none|
|» endDate|body|string|false|none|
|» token|body|string|false|none|

> Example responses

> 201 Response

```json
{
  "command": {},
  "message": "string",
  "ok": true
}
```

<h3 id="reserve-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|A successful response|Inline|
|400|Bad Request|A failure response|None|

<h3 id="reserve-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|command|object|false|none|none|
|message|string|false|none|none|
|ok|boolean|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2
</aside>

## reset

<a id="opIdreset"></a>

> Code samples

```bash
curl https://example.com/v1/commands/reset \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "chargestation": "string",
    "type": "string"
  }'
```

`POST /v1/commands/reset`

Use to request a reset command. The request will wait for the charge station to process the command. It will timeout after 60 seconds.

> Body parameter

```json
{
  "chargestation": "string",
  "type": "string"
}
```

<h3 id="reset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» chargestation|body|string|false|none|
|» type|body|string|false|none|

> Example responses

> 201 Response

```json
{
  "message": "string",
  "ok": true,
  "result": {}
}
```

<h3 id="reset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|A successful response|Inline|
|400|Bad Request|A failure response|None|

<h3 id="reset-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|ok|boolean|false|none|none|
|result|object|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2
</aside>

## unlockconnector

<a id="opIdunlockconnector"></a>

> Code samples

```bash
curl https://example.com/v1/commands/unlockconnector \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "chargestation": "string",
    "connector": "string"
  }'
```

`POST /v1/commands/unlockconnector`

Use to request an unlock command for a connector. The request will wait for the charge station to process the command. It will timeout after 60 seconds.

> Body parameter

```json
{
  "chargestation": "string",
  "connector": "string"
}
```

<h3 id="unlockconnector-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» chargestation|body|string|false|none|
|» connector|body|string|false|none|

> Example responses

> 201 Response

```json
{
  "command": {},
  "message": "string",
  "ok": true
}
```

<h3 id="unlockconnector-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|A successful response|Inline|
|400|Bad Request|A failure response|None|

<h3 id="unlockconnector-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|command|object|false|none|none|
|message|string|false|none|none|
|ok|boolean|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2
</aside>

## getVariables

<a id="opIdgetVariables"></a>

> Code samples

```bash
curl https://example.com/v1/commands/string/variables \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/commands/{id}/variables`

Get a charge station's config variables

<h3 id="getvariables-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The chargestation id|

<h3 id="getvariables-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns Cs configurations array|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2
</aside>

## patchChargeStationVariable

<a id="opIdpatchChargeStationVariable"></a>

> Code samples

```bash
curl https://example.com/v1/commands/string/variables \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "value": "string",
    "variable": "MeterValueSampleInterval"
  }'
```

`PATCH /v1/commands/{id}/variables`

Update config variables for a chargestation

> Body parameter

```json
{
  "value": "string",
  "variable": "MeterValueSampleInterval"
}
```

<h3 id="patchchargestationvariable-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of charge station|
|body|body|object|true|Charge Station Variable to set|
|» value|body|string|false|none|
|» variable|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» variable|MeterValueSampleInterval|
|» variable|HeartbeatInterval|
|» variable|ConnectionTimeOut|
|» variable|WebSocketPingInterval|
|» variable|TransactionMessageRetryInterval|
|» variable|TransactionMessageAttempts|

> Example responses

> 201 Response

```json
{
  "message": "string",
  "ok": true,
  "result": {}
}
```

<h3 id="patchchargestationvariable-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|A successful response|Inline|
|400|Bad Request|A failure response|None|

<h3 id="patchchargestationvariable-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|ok|boolean|false|none|none|
|result|object|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2
</aside>

<h1 id="edrv-api-smart-charging">Smart Charging</h1>

## setchargingschedule

<a id="opIdsetchargingschedule"></a>

> Code samples

```bash
curl https://example.com/v1/commands/chargingschedule \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "connector": "string",
    "schedule": [
      {
        "endDate": "string",
        "limit": 0,
        "startDate": "string",
        "unit": "string"
      }
    ]
  }'
```

`POST /v1/commands/chargingschedule`

Set one of charging power or current of a specific chargestation connector

> Body parameter

```json
{
  "connector": "string",
  "schedule": [
    {
      "endDate": "string",
      "limit": 0,
      "startDate": "string",
      "unit": "string"
    }
  ]
}
```

<h3 id="setchargingschedule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» connector|body|string|false|none|
|» schedule|body|[object]|false|none|
|» » endDate|body|string|false|none|
|» » limit|body|number|false|none|
|» » startDate|body|string|false|none|
|» » unit|body|string|false|none|

> Example responses

> 201 Response

```json
{
  "command": {},
  "message": "string",
  "ok": true
}
```

<h3 id="setchargingschedule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|A successful response|Inline|
|400|Bad Request|A failure response|None|

<h3 id="setchargingschedule-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|command|object|false|none|none|
|message|string|false|none|none|
|ok|boolean|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2
</aside>

## deletechargingschedule

<a id="opIddeletechargingschedule"></a>

> Code samples

```bash
curl https://example.com/v1/commands/chargingschedule \
  -X DELETE \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": "string"
  }'
```

`DELETE /v1/commands/chargingschedule`

Delete a smart charging schedule

> Body parameter

```json
{
  "id": "string"
}
```

<h3 id="deletechargingschedule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» id|body|string|false|none|

> Example responses

> 201 Response

```json
{
  "command": {},
  "message": "string",
  "ok": true
}
```

<h3 id="deletechargingschedule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|A successful response|Inline|
|400|Bad Request|Schedule not found|None|

<h3 id="deletechargingschedule-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|command|object|false|none|none|
|message|string|false|none|none|
|ok|boolean|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2
</aside>

<h1 id="edrv-api-configurations">Configurations</h1>

## getConfigurations

<a id="opIdgetConfigurations"></a>

> Code samples

```bash
curl https://example.com/v1/configurations \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/configurations`

Get Configurations data

<h3 id="getconfigurations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|paginate_limit|query|integer|false|Number of results per page|
|paginate_page|query|string|false|The queried page index|
|paginate_enabled|query|boolean|false|Enable pagination|
|sort_by|query|string|false|Sort data by this key|
|sort_order|query|string|false|asc to sort ascending (default is desc - descending)|
|createdAt[$gte]|query|string(date-time)|false|Date as ISO String|
|createdAt[$lte]|query|string(date-time)|false|Date as ISO String|
|updatedAt[$gte]|query|string(date-time)|false|Date as ISO String|
|updatedAt[$lte]|query|string(date-time)|false|Date as ISO String|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sort_order|desc|
|sort_order|asc|

<h3 id="getconfigurations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2
</aside>

## postConfigurations

<a id="opIdpostConfigurations"></a>

> Code samples

```bash
curl https://example.com/v1/configurations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "key": "string",
    "value": "string"
  }'
```

`POST /v1/configurations`

Create connector with parameters

> Body parameter

```json
{
  "key": "string",
  "value": "string"
}
```

<h3 id="postconfigurations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|Include Configuration properties to create here|
|» key|body|string|false|none|
|» value|body|string|false|none|

> Example responses

> 201 Response

```json
{
  "message": "string",
  "ok": true,
  "result": {}
}
```

<h3 id="postconfigurations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|A successful response|Inline|
|400|Bad Request|A failure response|None|

<h3 id="postconfigurations-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|ok|boolean|false|none|none|
|result|object|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2
</aside>

## getConfiguration

<a id="opIdgetConfiguration"></a>

> Code samples

```bash
curl https://example.com/v1/configurations/string \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/configurations/{id}`

Get one Configuration data

<h3 id="getconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of Configuration that needs to be fetched|

<h3 id="getconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2
</aside>

<h1 id="edrv-api-connectors">Connectors</h1>

## getConnectors

<a id="opIdgetConnectors"></a>

> Code samples

```bash
curl https://example.com/v1/connectors \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/connectors`

List connectors

<h3 id="getconnectors-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|paginate_limit|query|integer|false|Number of results per page|
|paginate_page|query|string|false|The queried page index|
|paginate_enabled|query|boolean|false|Enable pagination|
|sort_by|query|string|false|Sort data by this key|
|sort_order|query|string|false|asc to sort ascending (default is desc - descending)|
|createdAt[$gte]|query|string(date-time)|false|Date as ISO String|
|createdAt[$lte]|query|string(date-time)|false|Date as ISO String|
|updatedAt[$gte]|query|string(date-time)|false|Date as ISO String|
|updatedAt[$lte]|query|string(date-time)|false|Date as ISO String|
|include_evse|query|boolean|false|Populate evse|
|include_organization|query|boolean|false|Populate organization|
|include_rate|query|boolean|false|Populate rate|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sort_order|desc|
|sort_order|asc|

<h3 id="getconnectors-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns an array of connector objects|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2
</aside>

## postConnectors

<a id="opIdpostConnectors"></a>

> Code samples

```bash
curl https://example.com/v1/connectors \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "chargestation": "string",
    "format": "string",
    "power": 0,
    "power_type": "string",
    "rate": "string",
    "type": "string"
  }'
```

`POST /v1/connectors`

Create a new connector

> Body parameter

```json
{
  "chargestation": "string",
  "format": "string",
  "power": 0,
  "power_type": "string",
  "rate": "string",
  "type": "string"
}
```

<h3 id="postconnectors-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|Include Connector properties to create here|
|» chargestation|body|string|false|none|
|» format|body|string|false|none|
|» power|body|integer|false|none|
|» power_type|body|string|false|none|
|» rate|body|string|false|none|
|» type|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "message": "string",
  "ok": true,
  "result": {}
}
```

<h3 id="postconnectors-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the new connector object|Inline|
|400|Bad Request|A failure response|None|

<h3 id="postconnectors-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|ok|boolean|false|none|none|
|result|object|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2
</aside>

## getConnector

<a id="opIdgetConnector"></a>

> Code samples

```bash
curl https://example.com/v1/connectors/string \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/connectors/{id}`

Get a connector

<h3 id="getconnector-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of connector that needs to be fetched|
|include_evse|query|boolean|false|Populate evse|
|include_organization|query|boolean|false|Populate organization|
|include_rate|query|boolean|false|Populate rate|

<h3 id="getconnector-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns a connector object|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2
</aside>

## deleteConnector

<a id="opIddeleteConnector"></a>

> Code samples

```bash
curl https://example.com/v1/connectors/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/connectors/{id}`

Delete a connector

<h3 id="deleteconnector-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The connector id that needs to be deleted|

<h3 id="deleteconnector-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the deleted connector object|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2
</aside>

## patchConnector

<a id="opIdpatchConnector"></a>

> Code samples

```bash
curl https://example.com/v1/connectors/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "chargestation": "string",
    "format": "string",
    "power": 0,
    "power_type": "string",
    "rate": "string",
    "type": "string"
  }'
```

`PATCH /v1/connectors/{id}`

Update a connector's data

> Body parameter

```json
{
  "chargestation": "string",
  "format": "string",
  "power": 0,
  "power_type": "string",
  "rate": "string",
  "type": "string"
}
```

<h3 id="patchconnector-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of connector that needs to be updated|
|body|body|object|true|Include connector properties to update here|
|» chargestation|body|string|false|none|
|» format|body|string|false|none|
|» power|body|integer|false|none|
|» power_type|body|string|false|none|
|» rate|body|string|false|none|
|» type|body|string|false|none|

> Example responses

> 201 Response

```json
{
  "message": "string",
  "ok": true,
  "result": {}
}
```

<h3 id="patchconnector-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Returns the updated connector object|Inline|
|400|Bad Request|A failure response|None|

<h3 id="patchconnector-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|ok|boolean|false|none|none|
|result|object|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2
</aside>

<h1 id="edrv-api-drivers">Drivers</h1>

## getDrivers

<a id="opIdgetDrivers"></a>

> Code samples

```bash
curl https://example.com/v1/drivers \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/drivers`

List all drivers

<h3 id="getdrivers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|active|query|boolean|false|Get a list of active drivers|
|paginate_limit|query|integer|false|Number of results per page|
|paginate_page|query|string|false|The queried page index|
|paginate_enabled|query|boolean|false|Enable pagination|
|sort_by|query|string|false|Sort data by this key|
|sort_order|query|string|false|asc to sort ascending (default is desc - descending)|
|createdAt[$gte]|query|string(date-time)|false|Date as ISO String|
|createdAt[$lte]|query|string(date-time)|false|Date as ISO String|
|updatedAt[$gte]|query|string(date-time)|false|Date as ISO String|
|updatedAt[$lte]|query|string(date-time)|false|Date as ISO String|
|include_tokens|query|boolean|false|Populate tokens|
|include_group|query|boolean|false|Populate group|
|include_organization|query|boolean|false|Populate organization|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sort_order|desc|
|sort_order|asc|

> Example responses

> 200 Response

```json
{
  "message": "string",
  "ok": true,
  "result": [
    null
  ]
}
```

<h3 id="getdrivers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns a list of driver objects|Inline|
|400|Bad Request|A failure response|None|

<h3 id="getdrivers-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|ok|boolean|false|none|none|
|result|[object]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2
</aside>

## postDrivers

<a id="opIdpostDrivers"></a>

> Code samples

```bash
curl https://example.com/v1/drivers \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "active": true,
    "address": {
      "city": "string",
      "country": "string",
      "postalCode": "string",
      "streetAndNumber": "string"
    },
    "email": "string",
    "firstname": "string",
    "lastname": "string",
    "phone": {
      "home": "string",
      "mobile": "string",
      "work": "string"
    },
    "source": "physical"
  }'
```

`POST /v1/drivers`

Create a new driver

> Body parameter

```json
{
  "active": true,
  "address": {
    "city": "string",
    "country": "string",
    "postalCode": "string",
    "streetAndNumber": "string"
  },
  "email": "string",
  "firstname": "string",
  "lastname": "string",
  "phone": {
    "home": "string",
    "mobile": "string",
    "work": "string"
  },
  "source": "physical"
}
```

<h3 id="postdrivers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|Include driver properties to create here|
|» active|body|boolean|false|none|
|» address|body|object|false|none|
|» » city|body|string|false|none|
|» » country|body|string|false|none|
|» » postalCode|body|string|false|none|
|» » streetAndNumber|body|string|false|none|
|» email|body|string|false|none|
|» firstname|body|string|true|none|
|» lastname|body|string|true|none|
|» phone|body|object|false|none|
|» » home|body|string|false|none|
|» » mobile|body|string|false|none|
|» » work|body|string|false|none|
|» source|body|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» source|physical|
|» source|slack|
|» source|telegram|
|» source|sms|

> Example responses

> 200 Response

```json
{
  "message": "string",
  "ok": true,
  "result": {}
}
```

<h3 id="postdrivers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the newly created driver object|Inline|
|400|Bad Request|A failure response|None|

<h3 id="postdrivers-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|ok|boolean|false|none|none|
|result|object|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2
</aside>

## getDriver

<a id="opIdgetDriver"></a>

> Code samples

```bash
curl https://example.com/v1/drivers/string \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/drivers/{id}`

Get a driver's data

<h3 id="getdriver-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The driver id that needs to be fetched|
|include_tokens|query|boolean|false|Populate tokens|
|include_group|query|boolean|false|Populate group|
|include_organization|query|boolean|false|Populate organization|

<h3 id="getdriver-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns a driver object|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2
</aside>

## deleteDriver

<a id="opIddeleteDriver"></a>

> Code samples

```bash
curl https://example.com/v1/drivers/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/drivers/{id}`

Delete a driver

<h3 id="deletedriver-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The driver id that needs to be deleted|

<h3 id="deletedriver-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the deleted driver object|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2
</aside>

## patchDriver

<a id="opIdpatchDriver"></a>

> Code samples

```bash
curl https://example.com/v1/drivers/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "active": true,
    "address": {
      "city": "string",
      "country": "string",
      "postalCode": "string",
      "streetAndNumber": "string"
    },
    "email": "string",
    "firstname": "string",
    "lastname": "string",
    "phone": {
      "home": "string",
      "mobile": "string",
      "work": "string"
    },
    "source": "string",
    "tokens": [
      null
    ]
  }'
```

`PATCH /v1/drivers/{id}`

Update a driver's data

> Body parameter

```json
{
  "active": true,
  "address": {
    "city": "string",
    "country": "string",
    "postalCode": "string",
    "streetAndNumber": "string"
  },
  "email": "string",
  "firstname": "string",
  "lastname": "string",
  "phone": {
    "home": "string",
    "mobile": "string",
    "work": "string"
  },
  "source": "string",
  "tokens": [
    null
  ]
}
```

<h3 id="patchdriver-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of driver that needs to be updated|
|body|body|object|true|Include driver properties to create here|
|» active|body|boolean|false|none|
|» address|body|object|false|none|
|» » city|body|string|false|none|
|» » country|body|string|false|none|
|» » postalCode|body|string|false|none|
|» » streetAndNumber|body|string|false|none|
|» email|body|string|false|none|
|» firstname|body|string|false|none|
|» lastname|body|string|false|none|
|» phone|body|object|false|none|
|» » home|body|string|false|none|
|» » mobile|body|string|false|none|
|» » work|body|string|false|none|
|» source|body|string|false|none|
|» tokens|body|[object]|false|none|

> Example responses

> 200 Response

```json
{
  "message": "string",
  "ok": true,
  "result": [
    null
  ]
}
```

<h3 id="patchdriver-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the updated driver object|Inline|
|400|Bad Request|A failure response|None|

<h3 id="patchdriver-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|ok|boolean|false|none|none|
|result|[object]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2
</aside>

<h1 id="edrv-api-locations">Locations</h1>

## getLocation

<a id="opIdgetLocation"></a>

> Code samples

```bash
curl https://example.com/v1/location/string \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/location/{id}`

Get a location's data

<h3 id="getlocation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The location id that needs to be fetched|
|include_chargestations|query|boolean|false|Populate chargestations|
|include_organization|query|boolean|false|Populate organization|

<h3 id="getlocation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns a location object|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2
</aside>

## deleteLocation

<a id="opIddeleteLocation"></a>

> Code samples

```bash
curl https://example.com/v1/location/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/location/{id}`

Delete a location

<h3 id="deletelocation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The location id that needs to be deleted|

<h3 id="deletelocation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the deleted location object|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2
</aside>

## patchLocation

<a id="opIdpatchLocation"></a>

> Code samples

```bash
curl https://example.com/v1/location/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "active": true,
    "address": {
      "city": "string",
      "country": "string",
      "postalCode": "string",
      "state": "string",
      "streetAndNumber": "string"
    },
    "chargestations": [
      null
    ],
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    },
    "openingHours": {
      "0": [
        {
          "endTime": "string",
          "startTime": "string"
        }
      ],
      "1": [
        {
          "endTime": "string",
          "startTime": "string"
        }
      ],
      "2": [
        {
          "endTime": "string",
          "startTime": "string"
        }
      ],
      "3": [
        {
          "endTime": "string",
          "startTime": "string"
        }
      ],
      "4": [
        {
          "endTime": "string",
          "startTime": "string"
        }
      ],
      "5": [
        {
          "endTime": "string",
          "startTime": "string"
        }
      ],
      "6": [
        {
          "endTime": "string",
          "startTime": "string"
        }
      ]
    },
    "operatorName": "string",
    "timezone": "string"
  }'
```

`PATCH /v1/location/{id}`

Update a location's data

> Body parameter

```json
{
  "active": true,
  "address": {
    "city": "string",
    "country": "string",
    "postalCode": "string",
    "state": "string",
    "streetAndNumber": "string"
  },
  "chargestations": [
    null
  ],
  "coordinates": {
    "latitude": 0,
    "longitude": 0
  },
  "openingHours": {
    "0": [
      {
        "endTime": "string",
        "startTime": "string"
      }
    ],
    "1": [
      {
        "endTime": "string",
        "startTime": "string"
      }
    ],
    "2": [
      {
        "endTime": "string",
        "startTime": "string"
      }
    ],
    "3": [
      {
        "endTime": "string",
        "startTime": "string"
      }
    ],
    "4": [
      {
        "endTime": "string",
        "startTime": "string"
      }
    ],
    "5": [
      {
        "endTime": "string",
        "startTime": "string"
      }
    ],
    "6": [
      {
        "endTime": "string",
        "startTime": "string"
      }
    ]
  },
  "operatorName": "string",
  "timezone": "string"
}
```

<h3 id="patchlocation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of location that needs to be updated|
|body|body|object|true|Include location properties to create here|
|» active|body|boolean|false|none|
|» address|body|object|false|none|
|» » city|body|string|false|none|
|» » country|body|string|false|none|
|» » postalCode|body|string|false|none|
|» » state|body|string|false|none|
|» » streetAndNumber|body|string|false|none|
|» chargestations|body|[object]|false|none|
|» coordinates|body|object|false|none|
|» » latitude|body|number|false|none|
|» » longitude|body|number|false|none|
|» openingHours|body|object|false|none|
|» » 0|body|[object]|false|none|
|» » » endTime|body|string|false|none|
|» » » startTime|body|string|false|none|
|» » 1|body|[object]|false|none|
|» » » endTime|body|string|false|none|
|» » » startTime|body|string|false|none|
|» » 2|body|[object]|false|none|
|» » » endTime|body|string|false|none|
|» » » startTime|body|string|false|none|
|» » 3|body|[object]|false|none|
|» » » endTime|body|string|false|none|
|» » » startTime|body|string|false|none|
|» » 4|body|[object]|false|none|
|» » » endTime|body|string|false|none|
|» » » startTime|body|string|false|none|
|» » 5|body|[object]|false|none|
|» » » endTime|body|string|false|none|
|» » » startTime|body|string|false|none|
|» » 6|body|[object]|false|none|
|» » » endTime|body|string|false|none|
|» » » startTime|body|string|false|none|
|» operatorName|body|string|false|none|
|» timezone|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "message": "string",
  "ok": true,
  "result": [
    null
  ]
}
```

<h3 id="patchlocation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the updated location object|Inline|
|400|Bad Request|A failure response|None|

<h3 id="patchlocation-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|ok|boolean|false|none|none|
|result|[object]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2
</aside>

## getLocations

<a id="opIdgetLocations"></a>

> Code samples

```bash
curl https://example.com/v1/locations \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/locations`

Get Locations data

<h3 id="getlocations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|paginate_limit|query|integer|false|Number of results per page|
|paginate_page|query|string|false|The queried page index|
|paginate_enabled|query|boolean|false|Enable pagination|
|sort_by|query|string|false|Sort data by this key|
|sort_order|query|string|false|asc to sort ascending (default is desc - descending)|
|createdAt[$gte]|query|string(date-time)|false|Date as ISO String|
|createdAt[$lte]|query|string(date-time)|false|Date as ISO String|
|updatedAt[$gte]|query|string(date-time)|false|Date as ISO String|
|updatedAt[$lte]|query|string(date-time)|false|Date as ISO String|
|include_organization|query|boolean|false|Populate organization|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sort_order|desc|
|sort_order|asc|

<h3 id="getlocations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|A failure response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2
</aside>

## postLocations

<a id="opIdpostLocations"></a>

> Code samples

```bash
curl https://example.com/v1/locations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "active": true,
    "address": {
      "city": "string",
      "country": "string",
      "postalCode": "string",
      "streetAndNumber": "string"
    },
    "chargestations": [
      null
    ],
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    },
    "operatorName": "string"
  }'
```

`POST /v1/locations`

Create a new location

> Body parameter

```json
{
  "active": true,
  "address": {
    "city": "string",
    "country": "string",
    "postalCode": "string",
    "streetAndNumber": "string"
  },
  "chargestations": [
    null
  ],
  "coordinates": {
    "latitude": 0,
    "longitude": 0
  },
  "operatorName": "string"
}
```

<h3 id="postlocations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|Include location properties to create here|
|» active|body|boolean|false|none|
|» address|body|object|true|none|
|» » city|body|string|false|none|
|» » country|body|string|false|none|
|» » postalCode|body|string|false|none|
|» » streetAndNumber|body|string|false|none|
|» chargestations|body|[object]|false|none|
|» coordinates|body|object|true|none|
|» » latitude|body|number|false|none|
|» » longitude|body|number|false|none|
|» operatorName|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "message": "string",
  "ok": true,
  "result": {}
}
```

<h3 id="postlocations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the newly created location object|Inline|
|400|Bad Request|A failure response|None|

<h3 id="postlocations-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|ok|boolean|false|none|none|
|result|object|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2
</aside>

<h1 id="edrv-api-organizations">Organizations</h1>

## getOrganizations

<a id="opIdgetOrganizations"></a>

> Code samples

```bash
curl https://example.com/v1/organizations \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/organizations`

Get an array of all Organizations

<h3 id="getorganizations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|paginate_limit|query|integer|false|Number of results per page|
|paginate_page|query|string|false|The queried page index|
|paginate_enabled|query|boolean|false|Enable pagination|
|sort_by|query|string|false|Sort data by this key|
|sort_order|query|string|false|asc to sort ascending (default is desc - descending)|
|createdAt[$gte]|query|string(date-time)|false|Date as ISO String|
|createdAt[$lte]|query|string(date-time)|false|Date as ISO String|
|updatedAt[$gte]|query|string(date-time)|false|Date as ISO String|
|updatedAt[$lte]|query|string(date-time)|false|Date as ISO String|
|include_locations|query|boolean|false|Populate locations|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sort_order|desc|
|sort_order|asc|

<h3 id="getorganizations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns an array of Organization Objects|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2
</aside>

## getOrganization

<a id="opIdgetOrganization"></a>

> Code samples

```bash
curl https://example.com/v1/organizations/string \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/organizations/{id}`

Get one organization's data by id

<h3 id="getorganization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of organization that needs to be fetched|
|include_locations|query|boolean|false|Populate locations|

<h3 id="getorganization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns an Organization Object|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2
</aside>

## patchOrganization

<a id="opIdpatchOrganization"></a>

> Code samples

```bash
curl https://example.com/v1/organizations/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "active": true,
    "address": {
      "city": "string",
      "country": "string",
      "postalCode": "string",
      "streetAndNumber": "string"
    },
    "channels": {
      "slack": {},
      "telegram": {}
    },
    "configurations": {
      "basicAuthEnabled": true,
      "basicAuthPassword": true
    },
    "links": {
      "about": "string",
      "contact": "string",
      "privacy": "string",
      "support": "string"
    },
    "locations": [
      null
    ],
    "logo": "string",
    "name": "string",
    "otp": "string",
    "stripe_connected_account_id": "string",
    "stripe_country": "string",
    "stripe_currency": "string",
    "stripe_reserve_amount": 0,
    "support": {
      "business_hours": "string",
      "chat": {
        "type": "string",
        "value": "string"
      },
      "contact_number": "string",
      "email": "string"
    },
    "supportChat": {
      "id": "string",
      "name": "string"
    },
    "theme": {
      "colors": {
        "primary": "string",
        "secondary": "string"
      }
    }
  }'
```

`PATCH /v1/organizations/{id}`

Update an organization's data

> Body parameter

```json
{
  "active": true,
  "address": {
    "city": "string",
    "country": "string",
    "postalCode": "string",
    "streetAndNumber": "string"
  },
  "channels": {
    "slack": {},
    "telegram": {}
  },
  "configurations": {
    "basicAuthEnabled": true,
    "basicAuthPassword": true
  },
  "links": {
    "about": "string",
    "contact": "string",
    "privacy": "string",
    "support": "string"
  },
  "locations": [
    null
  ],
  "logo": "string",
  "name": "string",
  "otp": "string",
  "stripe_connected_account_id": "string",
  "stripe_country": "string",
  "stripe_currency": "string",
  "stripe_reserve_amount": 0,
  "support": {
    "business_hours": "string",
    "chat": {
      "type": "string",
      "value": "string"
    },
    "contact_number": "string",
    "email": "string"
  },
  "supportChat": {
    "id": "string",
    "name": "string"
  },
  "theme": {
    "colors": {
      "primary": "string",
      "secondary": "string"
    }
  }
}
```

<h3 id="patchorganization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of organization that needs to be updated|
|body|body|object|true|Include organization properties to create here|
|» active|body|boolean|false|none|
|» address|body|object|false|none|
|» » city|body|string|false|none|
|» » country|body|string|false|none|
|» » postalCode|body|string|false|none|
|» » streetAndNumber|body|string|false|none|
|» channels|body|object|false|none|
|» » slack|body|object|false|none|
|» » telegram|body|object|false|none|
|» configurations|body|object|false|none|
|» » basicAuthEnabled|body|boolean|false|none|
|» » basicAuthPassword|body|boolean|false|none|
|» links|body|object|false|none|
|» » about|body|string|false|none|
|» » contact|body|string|false|none|
|» » privacy|body|string|false|none|
|» » support|body|string|false|none|
|» locations|body|[object]|false|none|
|» logo|body|string|false|none|
|» name|body|string|false|none|
|» otp|body|string|false|none|
|» stripe_connected_account_id|body|string|false|none|
|» stripe_country|body|string|false|none|
|» stripe_currency|body|string|false|none|
|» stripe_reserve_amount|body|integer|false|none|
|» support|body|object|false|none|
|» » business_hours|body|string|false|none|
|» » chat|body|object|false|none|
|» » » type|body|string|false|none|
|» » » value|body|string|false|none|
|» » contact_number|body|string|false|none|
|» » email|body|string|false|none|
|» supportChat|body|object|false|none|
|» » id|body|string|false|none|
|» » name|body|string|false|none|
|» theme|body|object|false|none|
|» » colors|body|object|false|none|
|» » » primary|body|string|false|none|
|» » » secondary|body|string|false|none|

<h3 id="patchorganization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Returns the modified Organization Object|None|
|400|Bad Request|A failure response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2
</aside>

<h1 id="edrv-api-realtime">Realtime</h1>

## getRealtime

<a id="opIdgetRealtime"></a>

> Code samples

```bash
curl https://example.com/v1/realtime \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'sec-websocket-protocol: string'
```

`GET /v1/realtime`

Use to request a Websockets handshake

<h3 id="getrealtime-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sec-websocket-protocol|header|string|true|The JWT token to use for auth|

<h3 id="getrealtime-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|101|Switching Protocols|Upgrade connection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2
</aside>

<h1 id="edrv-api-reservations">Reservations</h1>

## getReservations

<a id="opIdgetReservations"></a>

> Code samples

```bash
curl https://example.com/v1/reservations \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/reservations`

Get Reservations data

<h3 id="getreservations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|paginate_limit|query|integer|false|Number of results per page|
|paginate_page|query|string|false|The queried page index|
|paginate_enabled|query|boolean|false|Enable pagination|
|sort_by|query|string|false|Sort data by this key|
|sort_order|query|string|false|asc to sort ascending (default is desc - descending)|
|createdAt[$gte]|query|string(date-time)|false|Date as ISO String|
|createdAt[$lte]|query|string(date-time)|false|Date as ISO String|
|updatedAt[$gte]|query|string(date-time)|false|Date as ISO String|
|updatedAt[$lte]|query|string(date-time)|false|Date as ISO String|
|include_chargestation|query|boolean|false|Populate chargestation|
|include_organization|query|boolean|false|Populate organization|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sort_order|desc|
|sort_order|asc|

<h3 id="getreservations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2
</aside>

## getReservation

<a id="opIdgetReservation"></a>

> Code samples

```bash
curl https://example.com/v1/reservations/string \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/reservations/{id}`

Get one reservation data

<h3 id="getreservation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of the reservation that needs to be fetched|
|include_chargestation|query|boolean|false|Populate chargestation|
|include_organization|query|boolean|false|Populate organization|

<h3 id="getreservation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2
</aside>

## updatereservation

<a id="opIdupdatereservation"></a>

> Code samples

```bash
curl https://example.com/v1/reservations/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "connector": 1,
    "driver": "string",
    "endDate": "string",
    "evse": 1
  }'
```

`PATCH /v1/reservations/{id}`

Use to request a update an existing reservation. The request will wait for the charge station to process the command. It will timeout after 60 seconds.

> Body parameter

```json
{
  "connector": 1,
  "driver": "string",
  "endDate": "string",
  "evse": 1
}
```

<h3 id="updatereservation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of the reservation that needs to be fetched|
|body|body|object|true|none|
|» connector|body|integer|false|none|
|» driver|body|string|false|none|
|» endDate|body|string|false|none|
|» evse|body|integer|false|none|

> Example responses

> 201 Response

```json
{
  "message": "string",
  "ok": true,
  "result": {}
}
```

<h3 id="updatereservation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|A successful response|Inline|
|400|Bad Request|A failure response|None|

<h3 id="updatereservation-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|ok|boolean|false|none|none|
|result|object|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2
</aside>

<h1 id="edrv-api-tokens">Tokens</h1>

## getTokens

<a id="opIdgetTokens"></a>

> Code samples

```bash
curl https://example.com/v1/tokens \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/tokens`

List tokens

<h3 id="gettokens-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|paginate_limit|query|integer|false|Number of results per page|
|paginate_page|query|string|false|The queried page index|
|paginate_enabled|query|boolean|false|Enable pagination|
|sort_by|query|string|false|Sort data by this key|
|sort_order|query|string|false|asc to sort ascending (default is desc - descending)|
|createdAt[$gte]|query|string(date-time)|false|Date as ISO String|
|createdAt[$lte]|query|string(date-time)|false|Date as ISO String|
|updatedAt[$gte]|query|string(date-time)|false|Date as ISO String|
|updatedAt[$lte]|query|string(date-time)|false|Date as ISO String|
|include_driver|query|boolean|false|Populate driver|
|include_organization|query|boolean|false|Populate organization|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sort_order|desc|
|sort_order|asc|

> Example responses

> 200 Response

```json
{
  "message": "string",
  "ok": true,
  "result": [
    null
  ]
}
```

<h3 id="gettokens-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns an array of token objects|Inline|
|401|Unauthorized|A failure response|None|

<h3 id="gettokens-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|ok|boolean|false|none|none|
|result|[object]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2
</aside>

## postTokens

<a id="opIdpostTokens"></a>

> Code samples

```bash
curl https://example.com/v1/tokens \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "active": true,
    "channel": "physical",
    "driver": "string",
    "physicalId": "string",
    "type": "string"
  }'
```

`POST /v1/tokens`

Create a new token

> Body parameter

```json
{
  "active": true,
  "channel": "physical",
  "driver": "string",
  "physicalId": "string",
  "type": "string"
}
```

<h3 id="posttokens-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|Include token properties to create here|
|» active|body|boolean|true|none|
|» channel|body|string|true|none|
|» driver|body|string|true|none|
|» physicalId|body|string|true|none|
|» type|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» channel|physical|
|» channel|slack|
|» channel|telegram|
|» channel|sms|

> Example responses

> 201 Response

```json
{
  "message": "string",
  "ok": true,
  "result": [
    null
  ]
}
```

<h3 id="posttokens-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Returns a newly created token object|Inline|
|400|Bad Request|A failure response|None|

<h3 id="posttokens-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|ok|boolean|false|none|none|
|result|[object]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2
</aside>

## getToken

<a id="opIdgetToken"></a>

> Code samples

```bash
curl https://example.com/v1/tokens/string \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/tokens/{id}`

Get a single token's data

<h3 id="gettoken-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The token id that needs to be fetched|
|include_driver|query|boolean|false|Populate driver|
|include_organization|query|boolean|false|Populate organization|

<h3 id="gettoken-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns a token object|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2
</aside>

## deleteToken

<a id="opIddeleteToken"></a>

> Code samples

```bash
curl https://example.com/v1/tokens/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/tokens/{id}`

Use to delete a token

<h3 id="deletetoken-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The token id that needs to be deleted|

<h3 id="deletetoken-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the deleted token object|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2
</aside>

## patchToken

<a id="opIdpatchToken"></a>

> Code samples

```bash
curl https://example.com/v1/tokens/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "active": true,
    "channel": "physical",
    "driver": "string",
    "physicalId": "string",
    "type": "string"
  }'
```

`PATCH /v1/tokens/{id}`

Update a token

> Body parameter

```json
{
  "active": true,
  "channel": "physical",
  "driver": "string",
  "physicalId": "string",
  "type": "string"
}
```

<h3 id="patchtoken-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of token that needs to be updated|
|body|body|object|true|Include token properties to create here|
|» active|body|boolean|false|none|
|» channel|body|string|false|none|
|» driver|body|string|false|none|
|» physicalId|body|string|false|none|
|» type|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» channel|physical|
|» channel|slack|
|» channel|telegram|
|» channel|sms|

> Example responses

> 201 Response

```json
{
  "message": "string",
  "ok": true,
  "result": [
    null
  ]
}
```

<h3 id="patchtoken-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Returns the updated token|Inline|
|400|Bad Request|A failure response|None|

<h3 id="patchtoken-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|ok|boolean|false|none|none|
|result|[object]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2
</aside>

<h1 id="edrv-api-transactions">Transactions</h1>

## getTransactions

<a id="opIdgetTransactions"></a>

> Code samples

```bash
curl https://example.com/v1/transactions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/transactions`

Get a list of transactions

<h3 id="gettransactions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|status|query|string|false|Started to get only active transactions|
|paginate_limit|query|integer|false|Number of results per page|
|paginate_page|query|string|false|The queried page index|
|paginate_enabled|query|boolean|false|Enable pagination|
|sort_by|query|string|false|Sort data by this key|
|sort_order|query|string|false|asc to sort ascending (default is desc - descending)|
|createdAt[$gte]|query|string(date-time)|false|Date as ISO String|
|createdAt[$lte]|query|string(date-time)|false|Date as ISO String|
|updatedAt[$gte]|query|string(date-time)|false|Date as ISO String|
|updatedAt[$lte]|query|string(date-time)|false|Date as ISO String|
|include_chargestation|query|boolean|false|Populate chargestation|
|include_evse|query|boolean|false|Populate evse|
|include_connector|query|boolean|false|Populate connector|
|include_driver|query|boolean|false|Populate driver|
|include_token|query|boolean|false|Populate token|
|include_reservation|query|boolean|false|Populate reservation|
|include_organization|query|boolean|false|Populate organization|
|include_rate|query|boolean|false|Populate rate|

#### Enumerated Values

|Parameter|Value|
|---|---|
|status|Started|
|status|Ended|
|sort_order|desc|
|sort_order|asc|

> Example responses

> 200 Response

```json
{
  "hasNext": true,
  "hasPrevious": true,
  "message": "string",
  "ok": true,
  "result": [
    null
  ]
}
```

<h3 id="gettransactions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns an array of transaction objects|Inline|
|400|Bad Request|Not Found|None|

<h3 id="gettransactions-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hasNext|boolean|false|none|none|
|hasPrevious|boolean|false|none|none|
|message|string|false|none|none|
|ok|boolean|false|none|none|
|result|[object]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2
</aside>

## getTransaction

<a id="opIdgetTransaction"></a>

> Code samples

```bash
curl https://example.com/v1/transactions/string \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/transactions/{id}`

Get a specific transaction

<h3 id="gettransaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The transaction id that needs to be fetched|
|include_chargestation|query|boolean|false|Populate chargestation|
|include_evse|query|boolean|false|Populate evse|
|include_connector|query|boolean|false|Populate connector|
|include_driver|query|boolean|false|Populate driver|
|include_token|query|boolean|false|Populate token|
|include_reservation|query|boolean|false|Populate reservation|
|include_organization|query|boolean|false|Populate organization|
|include_rate|query|boolean|false|Populate rate|

<h3 id="gettransaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns a transaction object|None|
|401|Unauthorized|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2
</aside>

## getTransactionCost

<a id="opIdgetTransactionCost"></a>

> Code samples

```bash
curl https://example.com/v1/transactions/string/cost \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/transactions/{id}/cost`

Get a specific transaction's cost

<h3 id="gettransactioncost-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The transaction id that needs to be fetched|

<h3 id="gettransactioncost-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns a transaction's cost object|None|
|401|Unauthorized|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2
</aside>

<h1 id="edrv-api-vehicles">Vehicles</h1>

## getVehicles

<a id="opIdgetVehicles"></a>

> Code samples

```bash
curl https://example.com/v1/vehicles \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/vehicles`

List all vehicles

<h3 id="getvehicles-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|active|query|boolean|false|Get a list of active vehicles|
|paginate_limit|query|integer|false|Number of results per page|
|paginate_page|query|string|false|The queried page index|
|paginate_enabled|query|boolean|false|Enable pagination|
|sort_by|query|string|false|Sort data by this key|
|sort_order|query|string|false|asc to sort ascending (default is desc - descending)|
|createdAt[$gte]|query|string(date-time)|false|Date as ISO String|
|createdAt[$lte]|query|string(date-time)|false|Date as ISO String|
|updatedAt[$gte]|query|string(date-time)|false|Date as ISO String|
|updatedAt[$lte]|query|string(date-time)|false|Date as ISO String|
|include_driver|query|boolean|false|Populate driver|
|include_token|query|boolean|false|Populate token|
|include_organization|query|boolean|false|Populate organization|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sort_order|desc|
|sort_order|asc|

> Example responses

> 200 Response

```json
{
  "message": "string",
  "ok": true,
  "result": [
    null
  ]
}
```

<h3 id="getvehicles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns a list of vehicle objects|Inline|
|400|Bad Request|A failure response|None|

<h3 id="getvehicles-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|ok|boolean|false|none|none|
|result|[object]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2
</aside>

## getVehicle

<a id="opIdgetVehicle"></a>

> Code samples

```bash
curl https://example.com/v1/vehicles/string \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/vehicles/{id}`

Get a vehicle's data

<h3 id="getvehicle-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The vehicule id that needs to be fetched|
|include_driver|query|boolean|false|Populate driver|
|include_token|query|boolean|false|Populate token|
|include_organization|query|boolean|false|Populate organization|

<h3 id="getvehicle-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns a vehicle object|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2
</aside>

## getVehicleBattery

<a id="opIdgetVehicleBattery"></a>

> Code samples

```bash
curl https://example.com/v1/vehicles/string/battery \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/vehicles/{id}/battery`

Get a vehicle's battery

<h3 id="getvehiclebattery-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The vehicle id that needs to be fetched|

<h3 id="getvehiclebattery-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns a vehicle object|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2
</aside>

## getVehicleCharge

<a id="opIdgetVehicleCharge"></a>

> Code samples

```bash
curl https://example.com/v1/vehicles/string/charge \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/vehicles/{id}/charge`

Get a vehicle's charge

<h3 id="getvehiclecharge-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The vehicle id that needs to be fetched|

<h3 id="getvehiclecharge-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns a vehicle object|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2
</aside>

## postCharge

<a id="opIdpostCharge"></a>

> Code samples

```bash
curl https://example.com/v1/vehicles/string/charge \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "action": "START"
  }'
```

`POST /v1/vehicles/{id}/charge`

Change charge

> Body parameter

```json
{
  "action": "START"
}
```

<h3 id="postcharge-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The vehicle id that needs to be fetched|
|body|body|object|true|Include command properties to send here|
|» action|body|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» action|START|
|» action|STOP|

> Example responses

> 200 Response

```json
{
  "message": "string",
  "ok": true,
  "result": {}
}
```

<h3 id="postcharge-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the status of the command|Inline|
|400|Bad Request|A failure response|None|

<h3 id="postcharge-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|ok|boolean|false|none|none|
|result|object|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2
</aside>

## getVehicleLocation

<a id="opIdgetVehicleLocation"></a>

> Code samples

```bash
curl https://example.com/v1/vehicles/string/location \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/vehicles/{id}/location`

Get a vehicle's location

<h3 id="getvehiclelocation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The vehicle id that needs to be fetched|

<h3 id="getvehiclelocation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns a vehicle object|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2
</aside>

## getVehicleOdometer

<a id="opIdgetVehicleOdometer"></a>

> Code samples

```bash
curl https://example.com/v1/vehicles/string/odometer \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/vehicles/{id}/odometer`

Get a vehicle's odometer

<h3 id="getvehicleodometer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The vehicle id that needs to be fetched|

<h3 id="getvehicleodometer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns a vehicle object|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2
</aside>

# Schemas

<h2 id="tocS_schema1">schema1</h2>
<!-- backwards compatibility -->
<a id="schemaschema1"></a>
<a id="schema_schema1"></a>
<a id="tocSschema1"></a>
<a id="tocsschema1"></a>

```json
{
  "location": "string",
  "manufacturer": "string",
  "model": "string",
  "protocol": "string",
  "public": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|location|string|false|none|none|
|manufacturer|string|false|none|none|
|model|string|false|none|none|
|protocol|string|false|none|none|
|public|boolean|false|none|none|
