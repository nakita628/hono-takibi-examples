<h1 id="traccar">Traccar v5.6</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Open Source GPS Tracking Platform

Base URLs:

* <a href="https://demo.traccar.org/api">https://demo.traccar.org/api</a> - Demo Server 1

* <a href="https://demo2.traccar.org/api">https://demo2.traccar.org/api</a> - Demo Server 2

* <a href="https://demo3.traccar.org/api">https://demo3.traccar.org/api</a> - Demo Server 3

* <a href="https://demo4.traccar.org/api">https://demo4.traccar.org/api</a> - Demo Server 4

* <a href="https://server.traccar.org/api">https://server.traccar.org/api</a> - Subscription Server

* <a href="http://localhost:8082/api">http://localhost:8082/api</a> - Other Server

Email: <a href="mailto:support@traccar.org">Traccar Support</a> 
Web: <a href="https://www.traccar.org/">Traccar Support</a> 
License: <a href="https://www.apache.org/licenses/LICENSE-2.0.html">Apache 2.0</a>

# Authentication

- HTTP Authentication, scheme: basic Basic HTTP authorization with _email_ and _password_

<h1 id="traccar-server">Server</h1>

Server information

## Fetch Server information

> Code samples

```bash
curl https://example.com/server \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /server`

> Example responses

> 200 Response

```json
{
  "attributes": {},
  "bingKey": "string",
  "coordinateFormat": "string",
  "deviceReadonly": true,
  "forceSettings": true,
  "id": 0,
  "latitude": 0,
  "limitCommands": true,
  "longitude": 0,
  "map": "string",
  "mapUrl": "string",
  "poiLayer": "string",
  "readonly": true,
  "registration": true,
  "twelveHourFormat": true,
  "version": "string",
  "zoom": 0
}
```

<h3 id="fetch-server-information-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Server](#schemaserver)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Update Server information

> Code samples

```bash
curl https://example.com/server \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "attributes": {},
    "bingKey": "string",
    "coordinateFormat": "string",
    "deviceReadonly": true,
    "forceSettings": true,
    "id": 0,
    "latitude": 0,
    "limitCommands": true,
    "longitude": 0,
    "map": "string",
    "mapUrl": "string",
    "poiLayer": "string",
    "readonly": true,
    "registration": true,
    "twelveHourFormat": true,
    "version": "string",
    "zoom": 0
  }'
```

`PUT /server`

> Body parameter

```json
{
  "attributes": {},
  "bingKey": "string",
  "coordinateFormat": "string",
  "deviceReadonly": true,
  "forceSettings": true,
  "id": 0,
  "latitude": 0,
  "limitCommands": true,
  "longitude": 0,
  "map": "string",
  "mapUrl": "string",
  "poiLayer": "string",
  "readonly": true,
  "registration": true,
  "twelveHourFormat": true,
  "version": "string",
  "zoom": 0
}
```

<h3 id="update-server-information-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Server](#schemaserver)|true|none|
|» attributes|body|object|false|none|
|» bingKey|body|string|false|none|
|» coordinateFormat|body|string|false|none|
|» deviceReadonly|body|boolean|false|none|
|» forceSettings|body|boolean|false|none|
|» id|body|integer|false|none|
|» latitude|body|number|false|none|
|» limitCommands|body|boolean|false|none|
|» longitude|body|number|false|none|
|» map|body|string|false|none|
|» mapUrl|body|string|false|none|
|» poiLayer|body|string|false|none|
|» readonly|body|boolean|false|none|
|» registration|body|boolean|false|none|
|» twelveHourFormat|body|boolean|false|none|
|» version|body|string|false|none|
|» zoom|body|integer|false|none|

> Example responses

> 200 Response

```json
{
  "attributes": {},
  "bingKey": "string",
  "coordinateFormat": "string",
  "deviceReadonly": true,
  "forceSettings": true,
  "id": 0,
  "latitude": 0,
  "limitCommands": true,
  "longitude": 0,
  "map": "string",
  "mapUrl": "string",
  "poiLayer": "string",
  "readonly": true,
  "registration": true,
  "twelveHourFormat": true,
  "version": "string",
  "zoom": 0
}
```

<h3 id="update-server-information-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Server](#schemaserver)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

<h1 id="traccar-session">Session</h1>

User session management

## Fetch Session information

> Code samples

```bash
curl https://example.com/session \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /session`

<h3 id="fetch-session-information-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "administrator": true,
  "attributes": {},
  "coordinateFormat": "string",
  "deviceLimit": 0,
  "deviceReadonly": true,
  "disabled": true,
  "email": "string",
  "expirationTime": "1970-01-01T00:00:00Z",
  "id": 0,
  "latitude": 0,
  "limitCommands": true,
  "longitude": 0,
  "map": "string",
  "name": "string",
  "password": "string",
  "phone": "string",
  "poiLayer": "string",
  "readonly": true,
  "twelveHourFormat": true,
  "userLimit": 0,
  "zoom": 0
}
```

<h3 id="fetch-session-information-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[User](#schemauser)|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Create a new Session

> Code samples

```bash
curl https://example.com/session \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d 'email=string&password=password'
```

`POST /session`

> Body parameter

```yaml
email: string
password: password
```

<h3 id="create-a-new-session-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» email|body|string|true|none|
|» password|body|string(password)|true|none|

> Example responses

> 200 Response

```json
{
  "administrator": true,
  "attributes": {},
  "coordinateFormat": "string",
  "deviceLimit": 0,
  "deviceReadonly": true,
  "disabled": true,
  "email": "string",
  "expirationTime": "1970-01-01T00:00:00Z",
  "id": 0,
  "latitude": 0,
  "limitCommands": true,
  "longitude": 0,
  "map": "string",
  "name": "string",
  "password": "string",
  "phone": "string",
  "poiLayer": "string",
  "readonly": true,
  "twelveHourFormat": true,
  "userLimit": 0,
  "zoom": 0
}
```

<h3 id="create-a-new-session-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[User](#schemauser)|
|401|Unauthorized|Unauthorized|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Close the Session

> Code samples

```bash
curl https://example.com/session \
  -X DELETE \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /session`

<h3 id="close-the-session-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

<h1 id="traccar-devices">Devices</h1>

Device management

## Fetch a list of Devices

> Code samples

```bash
curl https://example.com/devices \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /devices`

Without any params, returns a list of the user's devices

<h3 id="fetch-a-list-of-devices-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|all|query|boolean|false|Can only be used by admins or managers to fetch all entities|
|userId|query|integer|false|Standard users can use this only with their own _userId_|
|id|query|integer|false|To fetch one or more devices. Multiple params can be passed like `id=31&id=42`|
|uniqueId|query|string|false|To fetch one or more devices. Multiple params can be passed like `uniqueId=333331&uniqieId=44442`|

> Example responses

> 200 Response

```json
[
  {
    "attributes": {},
    "category": "string",
    "contact": "string",
    "disabled": true,
    "geofenceIds": [
      0
    ],
    "groupId": 0,
    "id": 0,
    "lastUpdate": "1970-01-01T00:00:00Z",
    "model": "string",
    "name": "string",
    "phone": "string",
    "positionId": 0,
    "status": "string",
    "uniqueId": "string"
  }
]
```

<h3 id="fetch-a-list-of-devices-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|No permission|None|

<h3 id="fetch-a-list-of-devices-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Device](#schemadevice)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Create a Device

> Code samples

```bash
curl https://example.com/devices \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "attributes": {},
    "category": "string",
    "contact": "string",
    "disabled": true,
    "geofenceIds": [
      0
    ],
    "groupId": 0,
    "id": 0,
    "lastUpdate": "1970-01-01T00:00:00Z",
    "model": "string",
    "name": "string",
    "phone": "string",
    "positionId": 0,
    "status": "string",
    "uniqueId": "string"
  }'
```

`POST /devices`

> Body parameter

```json
{
  "attributes": {},
  "category": "string",
  "contact": "string",
  "disabled": true,
  "geofenceIds": [
    0
  ],
  "groupId": 0,
  "id": 0,
  "lastUpdate": "1970-01-01T00:00:00Z",
  "model": "string",
  "name": "string",
  "phone": "string",
  "positionId": 0,
  "status": "string",
  "uniqueId": "string"
}
```

<h3 id="create-a-device-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Device](#schemadevice)|true|none|
|» attributes|body|object|false|none|
|» category|body|string|false|none|
|» contact|body|string|false|none|
|» disabled|body|boolean|false|none|
|» geofenceIds|body|[integer]|false|none|
|» groupId|body|integer|false|none|
|» id|body|integer|false|none|
|» lastUpdate|body|string(date-time)|false|in IS0 8601 format. eg. `1963-11-22T18:30:00Z`|
|» model|body|string|false|none|
|» name|body|string|false|none|
|» phone|body|string|false|none|
|» positionId|body|integer|false|none|
|» status|body|string|false|none|
|» uniqueId|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "attributes": {},
  "category": "string",
  "contact": "string",
  "disabled": true,
  "geofenceIds": [
    0
  ],
  "groupId": 0,
  "id": 0,
  "lastUpdate": "1970-01-01T00:00:00Z",
  "model": "string",
  "name": "string",
  "phone": "string",
  "positionId": 0,
  "status": "string",
  "uniqueId": "string"
}
```

<h3 id="create-a-device-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Device](#schemadevice)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Update a Device

> Code samples

```bash
curl https://example.com/devices/0 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "attributes": {},
    "category": "string",
    "contact": "string",
    "disabled": true,
    "geofenceIds": [
      0
    ],
    "groupId": 0,
    "id": 0,
    "lastUpdate": "1970-01-01T00:00:00Z",
    "model": "string",
    "name": "string",
    "phone": "string",
    "positionId": 0,
    "status": "string",
    "uniqueId": "string"
  }'
```

`PUT /devices/{id}`

> Body parameter

```json
{
  "attributes": {},
  "category": "string",
  "contact": "string",
  "disabled": true,
  "geofenceIds": [
    0
  ],
  "groupId": 0,
  "id": 0,
  "lastUpdate": "1970-01-01T00:00:00Z",
  "model": "string",
  "name": "string",
  "phone": "string",
  "positionId": 0,
  "status": "string",
  "uniqueId": "string"
}
```

<h3 id="update-a-device-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|none|
|body|body|[Device](#schemadevice)|true|none|
|» attributes|body|object|false|none|
|» category|body|string|false|none|
|» contact|body|string|false|none|
|» disabled|body|boolean|false|none|
|» geofenceIds|body|[integer]|false|none|
|» groupId|body|integer|false|none|
|» id|body|integer|false|none|
|» lastUpdate|body|string(date-time)|false|in IS0 8601 format. eg. `1963-11-22T18:30:00Z`|
|» model|body|string|false|none|
|» name|body|string|false|none|
|» phone|body|string|false|none|
|» positionId|body|integer|false|none|
|» status|body|string|false|none|
|» uniqueId|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "attributes": {},
  "category": "string",
  "contact": "string",
  "disabled": true,
  "geofenceIds": [
    0
  ],
  "groupId": 0,
  "id": 0,
  "lastUpdate": "1970-01-01T00:00:00Z",
  "model": "string",
  "name": "string",
  "phone": "string",
  "positionId": 0,
  "status": "string",
  "uniqueId": "string"
}
```

<h3 id="update-a-device-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Device](#schemadevice)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Delete a Device

> Code samples

```bash
curl https://example.com/devices/0 \
  -X DELETE \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /devices/{id}`

<h3 id="delete-a-device-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|none|

<h3 id="delete-a-device-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Update total distance and hours of the Device

> Code samples

```bash
curl https://example.com/devices/0/accumulators \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "deviceId": 0,
    "hours": 0,
    "totalDistance": 0
  }'
```

`PUT /devices/{id}/accumulators`

> Body parameter

```json
{
  "deviceId": 0,
  "hours": 0,
  "totalDistance": 0
}
```

<h3 id="update-total-distance-and-hours-of-the-device-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|none|
|body|body|[DeviceAccumulators](#schemadeviceaccumulators)|true|none|
|» deviceId|body|integer|false|none|
|» hours|body|number|false|none|
|» totalDistance|body|number|false|in meters|

<h3 id="update-total-distance-and-hours-of-the-device-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

<h1 id="traccar-groups">Groups</h1>

Group management

## Fetch a list of Groups

> Code samples

```bash
curl https://example.com/groups \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /groups`

Without any params, returns a list of the Groups the user belongs to

<h3 id="fetch-a-list-of-groups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|all|query|boolean|false|Can only be used by admins or managers to fetch all entities|
|userId|query|integer|false|Standard users can use this only with their own _userId_|

> Example responses

> 200 Response

```json
[
  {
    "attributes": {},
    "groupId": 0,
    "id": 0,
    "name": "string"
  }
]
```

<h3 id="fetch-a-list-of-groups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="fetch-a-list-of-groups-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Group](#schemagroup)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Create a Group

> Code samples

```bash
curl https://example.com/groups \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "attributes": {},
    "groupId": 0,
    "id": 0,
    "name": "string"
  }'
```

`POST /groups`

> Body parameter

```json
{
  "attributes": {},
  "groupId": 0,
  "id": 0,
  "name": "string"
}
```

<h3 id="create-a-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Group](#schemagroup)|true|none|
|» attributes|body|object|false|none|
|» groupId|body|integer|false|none|
|» id|body|integer|false|none|
|» name|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "attributes": {},
  "groupId": 0,
  "id": 0,
  "name": "string"
}
```

<h3 id="create-a-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Group](#schemagroup)|
|400|Bad Request|No permission|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Update a Group

> Code samples

```bash
curl https://example.com/groups/0 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "attributes": {},
    "groupId": 0,
    "id": 0,
    "name": "string"
  }'
```

`PUT /groups/{id}`

> Body parameter

```json
{
  "attributes": {},
  "groupId": 0,
  "id": 0,
  "name": "string"
}
```

<h3 id="update-a-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|none|
|body|body|[Group](#schemagroup)|true|none|
|» attributes|body|object|false|none|
|» groupId|body|integer|false|none|
|» id|body|integer|false|none|
|» name|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "attributes": {},
  "groupId": 0,
  "id": 0,
  "name": "string"
}
```

<h3 id="update-a-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Group](#schemagroup)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Delete a Group

> Code samples

```bash
curl https://example.com/groups/0 \
  -X DELETE \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /groups/{id}`

<h3 id="delete-a-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|none|

<h3 id="delete-a-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

<h1 id="traccar-users">Users</h1>

User management

## Fetch a list of Users

> Code samples

```bash
curl https://example.com/users \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /users`

<h3 id="fetch-a-list-of-users-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|query|string|false|Can only be used by admin or manager users|

> Example responses

> 200 Response

```json
[
  {
    "administrator": true,
    "attributes": {},
    "coordinateFormat": "string",
    "deviceLimit": 0,
    "deviceReadonly": true,
    "disabled": true,
    "email": "string",
    "expirationTime": "1970-01-01T00:00:00Z",
    "id": 0,
    "latitude": 0,
    "limitCommands": true,
    "longitude": 0,
    "map": "string",
    "name": "string",
    "password": "string",
    "phone": "string",
    "poiLayer": "string",
    "readonly": true,
    "twelveHourFormat": true,
    "userLimit": 0,
    "zoom": 0
  }
]
```

<h3 id="fetch-a-list-of-users-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|No Permission|None|

<h3 id="fetch-a-list-of-users-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[User](#schemauser)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Create a User

> Code samples

```bash
curl https://example.com/users \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "administrator": true,
    "attributes": {},
    "coordinateFormat": "string",
    "deviceLimit": 0,
    "deviceReadonly": true,
    "disabled": true,
    "email": "string",
    "expirationTime": "1970-01-01T00:00:00Z",
    "id": 0,
    "latitude": 0,
    "limitCommands": true,
    "longitude": 0,
    "map": "string",
    "name": "string",
    "password": "string",
    "phone": "string",
    "poiLayer": "string",
    "readonly": true,
    "twelveHourFormat": true,
    "userLimit": 0,
    "zoom": 0
  }'
```

`POST /users`

> Body parameter

```json
{
  "administrator": true,
  "attributes": {},
  "coordinateFormat": "string",
  "deviceLimit": 0,
  "deviceReadonly": true,
  "disabled": true,
  "email": "string",
  "expirationTime": "1970-01-01T00:00:00Z",
  "id": 0,
  "latitude": 0,
  "limitCommands": true,
  "longitude": 0,
  "map": "string",
  "name": "string",
  "password": "string",
  "phone": "string",
  "poiLayer": "string",
  "readonly": true,
  "twelveHourFormat": true,
  "userLimit": 0,
  "zoom": 0
}
```

<h3 id="create-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[User](#schemauser)|true|none|
|» administrator|body|boolean|false|none|
|» attributes|body|object|false|none|
|» coordinateFormat|body|string|false|none|
|» deviceLimit|body|integer|false|none|
|» deviceReadonly|body|boolean|false|none|
|» disabled|body|boolean|false|none|
|» email|body|string|false|none|
|» expirationTime|body|string(date-time)|false|in IS0 8601 format. eg. `1963-11-22T18:30:00Z`|
|» id|body|integer|false|none|
|» latitude|body|number|false|none|
|» limitCommands|body|boolean|false|none|
|» longitude|body|number|false|none|
|» map|body|string|false|none|
|» name|body|string|false|none|
|» password|body|string|false|none|
|» phone|body|string|false|none|
|» poiLayer|body|string|false|none|
|» readonly|body|boolean|false|none|
|» twelveHourFormat|body|boolean|false|none|
|» userLimit|body|integer|false|none|
|» zoom|body|integer|false|none|

> Example responses

> 200 Response

```json
{
  "administrator": true,
  "attributes": {},
  "coordinateFormat": "string",
  "deviceLimit": 0,
  "deviceReadonly": true,
  "disabled": true,
  "email": "string",
  "expirationTime": "1970-01-01T00:00:00Z",
  "id": 0,
  "latitude": 0,
  "limitCommands": true,
  "longitude": 0,
  "map": "string",
  "name": "string",
  "password": "string",
  "phone": "string",
  "poiLayer": "string",
  "readonly": true,
  "twelveHourFormat": true,
  "userLimit": 0,
  "zoom": 0
}
```

<h3 id="create-a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[User](#schemauser)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Update a User

> Code samples

```bash
curl https://example.com/users/0 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "administrator": true,
    "attributes": {},
    "coordinateFormat": "string",
    "deviceLimit": 0,
    "deviceReadonly": true,
    "disabled": true,
    "email": "string",
    "expirationTime": "1970-01-01T00:00:00Z",
    "id": 0,
    "latitude": 0,
    "limitCommands": true,
    "longitude": 0,
    "map": "string",
    "name": "string",
    "password": "string",
    "phone": "string",
    "poiLayer": "string",
    "readonly": true,
    "twelveHourFormat": true,
    "userLimit": 0,
    "zoom": 0
  }'
```

`PUT /users/{id}`

> Body parameter

```json
{
  "administrator": true,
  "attributes": {},
  "coordinateFormat": "string",
  "deviceLimit": 0,
  "deviceReadonly": true,
  "disabled": true,
  "email": "string",
  "expirationTime": "1970-01-01T00:00:00Z",
  "id": 0,
  "latitude": 0,
  "limitCommands": true,
  "longitude": 0,
  "map": "string",
  "name": "string",
  "password": "string",
  "phone": "string",
  "poiLayer": "string",
  "readonly": true,
  "twelveHourFormat": true,
  "userLimit": 0,
  "zoom": 0
}
```

<h3 id="update-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|none|
|body|body|[User](#schemauser)|true|none|
|» administrator|body|boolean|false|none|
|» attributes|body|object|false|none|
|» coordinateFormat|body|string|false|none|
|» deviceLimit|body|integer|false|none|
|» deviceReadonly|body|boolean|false|none|
|» disabled|body|boolean|false|none|
|» email|body|string|false|none|
|» expirationTime|body|string(date-time)|false|in IS0 8601 format. eg. `1963-11-22T18:30:00Z`|
|» id|body|integer|false|none|
|» latitude|body|number|false|none|
|» limitCommands|body|boolean|false|none|
|» longitude|body|number|false|none|
|» map|body|string|false|none|
|» name|body|string|false|none|
|» password|body|string|false|none|
|» phone|body|string|false|none|
|» poiLayer|body|string|false|none|
|» readonly|body|boolean|false|none|
|» twelveHourFormat|body|boolean|false|none|
|» userLimit|body|integer|false|none|
|» zoom|body|integer|false|none|

> Example responses

> 200 Response

```json
{
  "administrator": true,
  "attributes": {},
  "coordinateFormat": "string",
  "deviceLimit": 0,
  "deviceReadonly": true,
  "disabled": true,
  "email": "string",
  "expirationTime": "1970-01-01T00:00:00Z",
  "id": 0,
  "latitude": 0,
  "limitCommands": true,
  "longitude": 0,
  "map": "string",
  "name": "string",
  "password": "string",
  "phone": "string",
  "poiLayer": "string",
  "readonly": true,
  "twelveHourFormat": true,
  "userLimit": 0,
  "zoom": 0
}
```

<h3 id="update-a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[User](#schemauser)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Delete a User

> Code samples

```bash
curl https://example.com/users/0 \
  -X DELETE \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /users/{id}`

<h3 id="delete-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|none|

<h3 id="delete-a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

<h1 id="traccar-permissions">Permissions</h1>

User permissions and other object linking

## Link an Object to another Object

> Code samples

```bash
curl https://example.com/permissions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "attributeId": 0,
    "calendarId": 0,
    "deviceId": 0,
    "driverId": 0,
    "geofenceId": 0,
    "groupId": 0,
    "managedUserId": 0,
    "notificationId": 0,
    "userId": 0
  }'
```

`POST /permissions`

> Body parameter

```json
{
  "attributeId": 0,
  "calendarId": 0,
  "deviceId": 0,
  "driverId": 0,
  "geofenceId": 0,
  "groupId": 0,
  "managedUserId": 0,
  "notificationId": 0,
  "userId": 0
}
```

<h3 id="link-an-object-to-another-object-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Permission](#schemapermission)|true|none|
|» attributeId|body|integer|false|Computed Attribute Id, can be second parameter only|
|» calendarId|body|integer|false|Calendar Id, can be second parameter only and only in combination with userId|
|» deviceId|body|integer|false|Device Id, can be first parameter or second only in combination with userId|
|» driverId|body|integer|false|Driver Id, can be second parameter only|
|» geofenceId|body|integer|false|Geofence Id, can be second parameter only|
|» groupId|body|integer|false|Group Id, can be first parameter or second only in combination with userId|
|» managedUserId|body|integer|false|User Id, can be second parameter only and only in combination with userId|
|» notificationId|body|integer|false|Notification Id, can be second parameter only|
|» userId|body|integer|false|User Id, can be only first parameter|

> Example responses

> 200 Response

```json
{
  "attributeId": 0,
  "calendarId": 0,
  "deviceId": 0,
  "driverId": 0,
  "geofenceId": 0,
  "groupId": 0,
  "managedUserId": 0,
  "notificationId": 0,
  "userId": 0
}
```

<h3 id="link-an-object-to-another-object-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Permission](#schemapermission)|
|400|Bad Request|No permission|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Unlink an Object from another Object

> Code samples

```bash
curl https://example.com/permissions \
  -X DELETE \
  -H 'Content-Type: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "attributeId": 0,
    "calendarId": 0,
    "deviceId": 0,
    "driverId": 0,
    "geofenceId": 0,
    "groupId": 0,
    "managedUserId": 0,
    "notificationId": 0,
    "userId": 0
  }'
```

`DELETE /permissions`

> Body parameter

```json
{
  "attributeId": 0,
  "calendarId": 0,
  "deviceId": 0,
  "driverId": 0,
  "geofenceId": 0,
  "groupId": 0,
  "managedUserId": 0,
  "notificationId": 0,
  "userId": 0
}
```

<h3 id="unlink-an-object-from-another-object-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Permission](#schemapermission)|true|none|
|» attributeId|body|integer|false|Computed Attribute Id, can be second parameter only|
|» calendarId|body|integer|false|Calendar Id, can be second parameter only and only in combination with userId|
|» deviceId|body|integer|false|Device Id, can be first parameter or second only in combination with userId|
|» driverId|body|integer|false|Driver Id, can be second parameter only|
|» geofenceId|body|integer|false|Geofence Id, can be second parameter only|
|» groupId|body|integer|false|Group Id, can be first parameter or second only in combination with userId|
|» managedUserId|body|integer|false|User Id, can be second parameter only and only in combination with userId|
|» notificationId|body|integer|false|Notification Id, can be second parameter only|
|» userId|body|integer|false|User Id, can be only first parameter|

<h3 id="unlink-an-object-from-another-object-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

<h1 id="traccar-positions">Positions</h1>

Retrieving raw location information

## Fetches a list of Positions

> Code samples

```bash
curl https://example.com/positions \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /positions`

We strongly recommend using [Traccar WebSocket API](https://www.traccar.org/traccar-api/) instead of periodically polling positions endpoint. Without any params, it returns a list of last known positions for all the user's Devices. _from_ and _to_ fields are not required with _id_.

<h3 id="fetches-a-list-of-positions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|deviceId|query|integer|false|_deviceId_ is optional, but requires the _from_ and _to_ parameters when used|
|from|query|string(date-time)|false|in IS0 8601 format. eg. `1963-11-22T18:30:00Z`|
|to|query|string(date-time)|false|in IS0 8601 format. eg. `1963-11-22T18:30:00Z`|
|id|query|integer|false|To fetch one or more positions. Multiple params can be passed like `id=31&id=42`|

> Example responses

> 200 Response

```json
[
  {
    "accuracy": 0,
    "address": "string",
    "altitude": 0,
    "attributes": {},
    "course": 0,
    "deviceId": 0,
    "deviceTime": "1970-01-01T00:00:00Z",
    "fixTime": "1970-01-01T00:00:00Z",
    "id": 0,
    "latitude": 0,
    "longitude": 0,
    "network": {},
    "outdated": true,
    "protocol": "string",
    "serverTime": "1970-01-01T00:00:00Z",
    "speed": 0,
    "valid": true
  }
]
```

<h3 id="fetches-a-list-of-positions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="fetches-a-list-of-positions-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Position](#schemaposition)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

<h1 id="traccar-events">Events</h1>

Retrieving event information

## get/events/{id}

> Code samples

```bash
curl https://example.com/events/0 \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /events/{id}`

<h3 id="geteventsid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|none|

> Example responses

> 200 Response

```json
{
  "attributes": {},
  "deviceId": 0,
  "eventTime": "1970-01-01T00:00:00Z",
  "geofenceId": 0,
  "id": 0,
  "maintenanceId": 0,
  "positionId": 0,
  "type": "string"
}
```

<h3 id="geteventsid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Event](#schemaevent)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

<h1 id="traccar-reports">Reports</h1>

Reports generation

## Fetch a list of Events within the time period for the Devices or Groups

> Code samples

```bash
curl 'https://example.com/reports/events?from=1970-01-01T00%3A00%3A00Z&to=1970-01-01T00%3A00%3A00Z' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /reports/events`

At least one _deviceId_ or one _groupId_ must be passed

<h3 id="fetch-a-list-of-events-within-the-time-period-for-the-devices-or-groups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|deviceId|query|[integer]|false|none|
|groupId|query|[integer]|false|none|
|type|query|[string]|false|% can be used to return events of all types|
|from|query|string(date-time)|true|in IS0 8601 format. eg. `1963-11-22T18:30:00Z`|
|to|query|string(date-time)|true|in IS0 8601 format. eg. `1963-11-22T18:30:00Z`|

> Example responses

> 200 Response

```json
[
  {
    "attributes": {},
    "deviceId": 0,
    "eventTime": "1970-01-01T00:00:00Z",
    "geofenceId": 0,
    "id": 0,
    "maintenanceId": 0,
    "positionId": 0,
    "type": "string"
  }
]
```

<h3 id="fetch-a-list-of-events-within-the-time-period-for-the-devices-or-groups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="fetch-a-list-of-events-within-the-time-period-for-the-devices-or-groups-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Event](#schemaevent)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Fetch a list of Positions within the time period for the Devices or Groups

> Code samples

```bash
curl 'https://example.com/reports/route?from=1970-01-01T00%3A00%3A00Z&to=1970-01-01T00%3A00%3A00Z' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /reports/route`

At least one _deviceId_ or one _groupId_ must be passed

<h3 id="fetch-a-list-of-positions-within-the-time-period-for-the-devices-or-groups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|deviceId|query|[integer]|false|none|
|groupId|query|[integer]|false|none|
|from|query|string(date-time)|true|in IS0 8601 format. eg. `1963-11-22T18:30:00Z`|
|to|query|string(date-time)|true|in IS0 8601 format. eg. `1963-11-22T18:30:00Z`|

> Example responses

> 200 Response

```json
[
  {
    "accuracy": 0,
    "address": "string",
    "altitude": 0,
    "attributes": {},
    "course": 0,
    "deviceId": 0,
    "deviceTime": "1970-01-01T00:00:00Z",
    "fixTime": "1970-01-01T00:00:00Z",
    "id": 0,
    "latitude": 0,
    "longitude": 0,
    "network": {},
    "outdated": true,
    "protocol": "string",
    "serverTime": "1970-01-01T00:00:00Z",
    "speed": 0,
    "valid": true
  }
]
```

<h3 id="fetch-a-list-of-positions-within-the-time-period-for-the-devices-or-groups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="fetch-a-list-of-positions-within-the-time-period-for-the-devices-or-groups-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Position](#schemaposition)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Fetch a list of ReportStops within the time period for the Devices or Groups

> Code samples

```bash
curl 'https://example.com/reports/stops?from=1970-01-01T00%3A00%3A00Z&to=1970-01-01T00%3A00%3A00Z' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /reports/stops`

At least one _deviceId_ or one _groupId_ must be passed

<h3 id="fetch-a-list-of-reportstops-within-the-time-period-for-the-devices-or-groups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|deviceId|query|[integer]|false|none|
|groupId|query|[integer]|false|none|
|from|query|string(date-time)|true|in IS0 8601 format. eg. `1963-11-22T18:30:00Z`|
|to|query|string(date-time)|true|in IS0 8601 format. eg. `1963-11-22T18:30:00Z`|

> Example responses

> 200 Response

```json
[
  {
    "address": "string",
    "deviceId": 0,
    "deviceName": "string",
    "duration": 0,
    "endTime": "1970-01-01T00:00:00Z",
    "engineHours": 0,
    "lat": 0,
    "lon": 0,
    "spentFuel": 0,
    "startTime": "1970-01-01T00:00:00Z"
  }
]
```

<h3 id="fetch-a-list-of-reportstops-within-the-time-period-for-the-devices-or-groups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="fetch-a-list-of-reportstops-within-the-time-period-for-the-devices-or-groups-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ReportStops](#schemareportstops)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Fetch a list of ReportSummary within the time period for the Devices or Groups

> Code samples

```bash
curl 'https://example.com/reports/summary?from=1970-01-01T00%3A00%3A00Z&to=1970-01-01T00%3A00%3A00Z' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /reports/summary`

At least one _deviceId_ or one _groupId_ must be passed

<h3 id="fetch-a-list-of-reportsummary-within-the-time-period-for-the-devices-or-groups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|deviceId|query|[integer]|false|none|
|groupId|query|[integer]|false|none|
|from|query|string(date-time)|true|in IS0 8601 format. eg. `1963-11-22T18:30:00Z`|
|to|query|string(date-time)|true|in IS0 8601 format. eg. `1963-11-22T18:30:00Z`|

> Example responses

> 200 Response

```json
[
  {
    "averageSpeed": 0,
    "deviceId": 0,
    "deviceName": "string",
    "distance": 0,
    "engineHours": 0,
    "maxSpeed": 0,
    "spentFuel": 0
  }
]
```

<h3 id="fetch-a-list-of-reportsummary-within-the-time-period-for-the-devices-or-groups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="fetch-a-list-of-reportsummary-within-the-time-period-for-the-devices-or-groups-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ReportSummary](#schemareportsummary)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Fetch a list of ReportTrips within the time period for the Devices or Groups

> Code samples

```bash
curl 'https://example.com/reports/trips?from=1970-01-01T00%3A00%3A00Z&to=1970-01-01T00%3A00%3A00Z' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /reports/trips`

At least one _deviceId_ or one _groupId_ must be passed

<h3 id="fetch-a-list-of-reporttrips-within-the-time-period-for-the-devices-or-groups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|deviceId|query|[integer]|false|none|
|groupId|query|[integer]|false|none|
|from|query|string(date-time)|true|in IS0 8601 format. eg. `1963-11-22T18:30:00Z`|
|to|query|string(date-time)|true|in IS0 8601 format. eg. `1963-11-22T18:30:00Z`|

> Example responses

> 200 Response

```json
[
  {
    "averageSpeed": 0,
    "deviceId": 0,
    "deviceName": "string",
    "distance": 0,
    "driverName": "string",
    "driverUniqueId": 0,
    "duration": 0,
    "endAddress": "string",
    "endLat": 0,
    "endLon": 0,
    "endTime": "1970-01-01T00:00:00Z",
    "maxSpeed": 0,
    "spentFuel": 0,
    "startAddress": "string",
    "startLat": 0,
    "startLon": 0,
    "startTime": "1970-01-01T00:00:00Z"
  }
]
```

<h3 id="fetch-a-list-of-reporttrips-within-the-time-period-for-the-devices-or-groups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="fetch-a-list-of-reporttrips-within-the-time-period-for-the-devices-or-groups-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ReportTrips](#schemareporttrips)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

<h1 id="traccar-notifications">Notifications</h1>

User notifications management

## Fetch a list of Notifications

> Code samples

```bash
curl https://example.com/notifications \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /notifications`

Without params, it returns a list of Notifications the user has access to

<h3 id="fetch-a-list-of-notifications-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|all|query|boolean|false|Can only be used by admins or managers to fetch all entities|
|userId|query|integer|false|Standard users can use this only with their own _userId_|
|deviceId|query|integer|false|Standard users can use this only with _deviceId_s, they have access to|
|groupId|query|integer|false|Standard users can use this only with _groupId_s, they have access to|
|refresh|query|boolean|false|none|

> Example responses

> 200 Response

```json
[
  {
    "always": true,
    "attributes": {},
    "calendarId": 0,
    "id": 0,
    "mail": true,
    "sms": true,
    "type": "string",
    "web": true
  }
]
```

<h3 id="fetch-a-list-of-notifications-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="fetch-a-list-of-notifications-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Notification](#schemanotification)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Create a Notification

> Code samples

```bash
curl https://example.com/notifications \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "always": true,
    "attributes": {},
    "calendarId": 0,
    "id": 0,
    "mail": true,
    "sms": true,
    "type": "string",
    "web": true
  }'
```

`POST /notifications`

> Body parameter

```json
{
  "always": true,
  "attributes": {},
  "calendarId": 0,
  "id": 0,
  "mail": true,
  "sms": true,
  "type": "string",
  "web": true
}
```

<h3 id="create-a-notification-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Notification](#schemanotification)|true|none|
|» always|body|boolean|false|none|
|» attributes|body|object|false|none|
|» calendarId|body|integer|false|none|
|» id|body|integer|false|none|
|» mail|body|boolean|false|none|
|» sms|body|boolean|false|none|
|» type|body|string|false|none|
|» web|body|boolean|false|none|

> Example responses

> 200 Response

```json
{
  "always": true,
  "attributes": {},
  "calendarId": 0,
  "id": 0,
  "mail": true,
  "sms": true,
  "type": "string",
  "web": true
}
```

<h3 id="create-a-notification-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Notification](#schemanotification)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Send test notification to current user via Email and SMS

> Code samples

```bash
curl https://example.com/notifications/test \
  -X POST \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`POST /notifications/test`

<h3 id="send-test-notification-to-current-user-via-email-and-sms-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successful sending|None|
|400|Bad Request|Could happen if sending has failed|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Fetch a list of available Notification types

> Code samples

```bash
curl https://example.com/notifications/types \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /notifications/types`

> Example responses

> 200 Response

```json
[
  {
    "type": "string"
  }
]
```

<h3 id="fetch-a-list-of-available-notification-types-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="fetch-a-list-of-available-notification-types-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[NotificationType](#schemanotificationtype)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Update a Notification

> Code samples

```bash
curl https://example.com/notifications/0 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "always": true,
    "attributes": {},
    "calendarId": 0,
    "id": 0,
    "mail": true,
    "sms": true,
    "type": "string",
    "web": true
  }'
```

`PUT /notifications/{id}`

> Body parameter

```json
{
  "always": true,
  "attributes": {},
  "calendarId": 0,
  "id": 0,
  "mail": true,
  "sms": true,
  "type": "string",
  "web": true
}
```

<h3 id="update-a-notification-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|none|
|body|body|[Notification](#schemanotification)|true|none|
|» always|body|boolean|false|none|
|» attributes|body|object|false|none|
|» calendarId|body|integer|false|none|
|» id|body|integer|false|none|
|» mail|body|boolean|false|none|
|» sms|body|boolean|false|none|
|» type|body|string|false|none|
|» web|body|boolean|false|none|

> Example responses

> 200 Response

```json
{
  "always": true,
  "attributes": {},
  "calendarId": 0,
  "id": 0,
  "mail": true,
  "sms": true,
  "type": "string",
  "web": true
}
```

<h3 id="update-a-notification-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Notification](#schemanotification)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Delete a Notification

> Code samples

```bash
curl https://example.com/notifications/0 \
  -X DELETE \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /notifications/{id}`

<h3 id="delete-a-notification-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|none|

<h3 id="delete-a-notification-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

<h1 id="traccar-geofences">Geofences</h1>

Geofence management

## Fetch a list of Geofences

> Code samples

```bash
curl https://example.com/geofences \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /geofences`

Without params, it returns a list of Geofences the user has access to

<h3 id="fetch-a-list-of-geofences-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|all|query|boolean|false|Can only be used by admins or managers to fetch all entities|
|userId|query|integer|false|Standard users can use this only with their own _userId_|
|deviceId|query|integer|false|Standard users can use this only with _deviceId_s, they have access to|
|groupId|query|integer|false|Standard users can use this only with _groupId_s, they have access to|
|refresh|query|boolean|false|none|

> Example responses

> 200 Response

```json
[
  {
    "area": "string",
    "attributes": {},
    "calendarId": 0,
    "description": "string",
    "id": 0,
    "name": "string"
  }
]
```

<h3 id="fetch-a-list-of-geofences-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="fetch-a-list-of-geofences-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Geofence](#schemageofence)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Create a Geofence

> Code samples

```bash
curl https://example.com/geofences \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "area": "string",
    "attributes": {},
    "calendarId": 0,
    "description": "string",
    "id": 0,
    "name": "string"
  }'
```

`POST /geofences`

> Body parameter

```json
{
  "area": "string",
  "attributes": {},
  "calendarId": 0,
  "description": "string",
  "id": 0,
  "name": "string"
}
```

<h3 id="create-a-geofence-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Geofence](#schemageofence)|true|none|
|» area|body|string|false|none|
|» attributes|body|object|false|none|
|» calendarId|body|integer|false|none|
|» description|body|string|false|none|
|» id|body|integer|false|none|
|» name|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "area": "string",
  "attributes": {},
  "calendarId": 0,
  "description": "string",
  "id": 0,
  "name": "string"
}
```

<h3 id="create-a-geofence-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Geofence](#schemageofence)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Update a Geofence

> Code samples

```bash
curl https://example.com/geofences/0 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "area": "string",
    "attributes": {},
    "calendarId": 0,
    "description": "string",
    "id": 0,
    "name": "string"
  }'
```

`PUT /geofences/{id}`

> Body parameter

```json
{
  "area": "string",
  "attributes": {},
  "calendarId": 0,
  "description": "string",
  "id": 0,
  "name": "string"
}
```

<h3 id="update-a-geofence-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|none|
|body|body|[Geofence](#schemageofence)|true|none|
|» area|body|string|false|none|
|» attributes|body|object|false|none|
|» calendarId|body|integer|false|none|
|» description|body|string|false|none|
|» id|body|integer|false|none|
|» name|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "area": "string",
  "attributes": {},
  "calendarId": 0,
  "description": "string",
  "id": 0,
  "name": "string"
}
```

<h3 id="update-a-geofence-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Geofence](#schemageofence)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Delete a Geofence

> Code samples

```bash
curl https://example.com/geofences/0 \
  -X DELETE \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /geofences/{id}`

<h3 id="delete-a-geofence-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|none|

<h3 id="delete-a-geofence-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

<h1 id="traccar-commands">Commands</h1>

Sending commands to devices and stored command management

## Fetch a list of Saved Commands

> Code samples

```bash
curl https://example.com/commands \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /commands`

Without params, it returns a list of Saved Commands the user has access to

<h3 id="fetch-a-list-of-saved-commands-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|all|query|boolean|false|Can only be used by admins or managers to fetch all entities|
|userId|query|integer|false|Standard users can use this only with their own _userId_|
|deviceId|query|integer|false|Standard users can use this only with _deviceId_s, they have access to|
|groupId|query|integer|false|Standard users can use this only with _groupId_s, they have access to|
|refresh|query|boolean|false|none|

> Example responses

> 200 Response

```json
[
  {
    "attributes": {},
    "description": "string",
    "deviceId": 0,
    "id": 0,
    "type": "string"
  }
]
```

<h3 id="fetch-a-list-of-saved-commands-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="fetch-a-list-of-saved-commands-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Command](#schemacommand)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Create a Saved Command

> Code samples

```bash
curl https://example.com/commands \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "attributes": {},
    "description": "string",
    "deviceId": 0,
    "id": 0,
    "type": "string"
  }'
```

`POST /commands`

> Body parameter

```json
{
  "attributes": {},
  "description": "string",
  "deviceId": 0,
  "id": 0,
  "type": "string"
}
```

<h3 id="create-a-saved-command-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Command](#schemacommand)|true|none|
|» attributes|body|object|false|none|
|» description|body|string|false|none|
|» deviceId|body|integer|false|none|
|» id|body|integer|false|none|
|» type|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "attributes": {},
  "description": "string",
  "deviceId": 0,
  "id": 0,
  "type": "string"
}
```

<h3 id="create-a-saved-command-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Command](#schemacommand)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Fetch a list of Saved Commands supported by Device at the moment

> Code samples

```bash
curl https://example.com/commands/send \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /commands/send`

Return a list of saved commands linked to Device and its groups, filtered by current Device protocol support

<h3 id="fetch-a-list-of-saved-commands-supported-by-device-at-the-moment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|deviceId|query|integer|false|Standard users can use this only with _deviceId_s, they have access to|

> Example responses

> 200 Response

```json
[
  {
    "attributes": {},
    "description": "string",
    "deviceId": 0,
    "id": 0,
    "type": "string"
  }
]
```

<h3 id="fetch-a-list-of-saved-commands-supported-by-device-at-the-moment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Could happen when the user doesn't have permission for the device|None|

<h3 id="fetch-a-list-of-saved-commands-supported-by-device-at-the-moment-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Command](#schemacommand)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Dispatch commands to device

> Code samples

```bash
curl https://example.com/commands/send \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "attributes": {},
    "description": "string",
    "deviceId": 0,
    "id": 0,
    "type": "string"
  }'
```

`POST /commands/send`

Dispatch a new command or Saved Command if _body.id_ set

> Body parameter

```json
{
  "attributes": {},
  "description": "string",
  "deviceId": 0,
  "id": 0,
  "type": "string"
}
```

<h3 id="dispatch-commands-to-device-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Command](#schemacommand)|true|none|
|» attributes|body|object|false|none|
|» description|body|string|false|none|
|» deviceId|body|integer|false|none|
|» id|body|integer|false|none|
|» type|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "attributes": {},
  "description": "string",
  "deviceId": 0,
  "id": 0,
  "type": "string"
}
```

> 202 Response

```json
{
  "attributes": {},
  "description": "string",
  "deviceId": 0,
  "id": 0,
  "type": "string"
}
```

<h3 id="dispatch-commands-to-device-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Command sent|[Command](#schemacommand)|
|202|Accepted|Command queued|[Command](#schemacommand)|
|400|Bad Request|Could happen when the user doesn't have permission or an incorrect command _type_ for the device|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Fetch a list of available Commands for the Device or all possible Commands if Device ommited

> Code samples

```bash
curl https://example.com/commands/types \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /commands/types`

<h3 id="fetch-a-list-of-available-commands-for-the-device-or-all-possible-commands-if-device-ommited-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|deviceId|query|integer|false|Internal device identifier. Only works if device has already reported some locations|
|protocol|query|string|false|Protocol name. Can be used instead of device id|
|textChannel|query|boolean|false|When `true` return SMS commands. If not specified or `false` return data commands|

> Example responses

> 200 Response

```json
[
  {
    "type": "string"
  }
]
```

<h3 id="fetch-a-list-of-available-commands-for-the-device-or-all-possible-commands-if-device-ommited-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Could happen when trying to fetch from a device the user does not have permission|None|

<h3 id="fetch-a-list-of-available-commands-for-the-device-or-all-possible-commands-if-device-ommited-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[CommandType](#schemacommandtype)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Update a Saved Command

> Code samples

```bash
curl https://example.com/commands/0 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "attributes": {},
    "description": "string",
    "deviceId": 0,
    "id": 0,
    "type": "string"
  }'
```

`PUT /commands/{id}`

> Body parameter

```json
{
  "attributes": {},
  "description": "string",
  "deviceId": 0,
  "id": 0,
  "type": "string"
}
```

<h3 id="update-a-saved-command-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|none|
|body|body|[Command](#schemacommand)|true|none|
|» attributes|body|object|false|none|
|» description|body|string|false|none|
|» deviceId|body|integer|false|none|
|» id|body|integer|false|none|
|» type|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "attributes": {},
  "description": "string",
  "deviceId": 0,
  "id": 0,
  "type": "string"
}
```

<h3 id="update-a-saved-command-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Command](#schemacommand)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Delete a Saved Command

> Code samples

```bash
curl https://example.com/commands/0 \
  -X DELETE \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /commands/{id}`

<h3 id="delete-a-saved-command-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|none|

<h3 id="delete-a-saved-command-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

<h1 id="traccar-attributes">Attributes</h1>

Computed attributes management

## Fetch a list of Attributes

> Code samples

```bash
curl https://example.com/attributes/computed \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /attributes/computed`

Without params, it returns a list of Attributes the user has access to

<h3 id="fetch-a-list-of-attributes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|all|query|boolean|false|Can only be used by admins or managers to fetch all entities|
|userId|query|integer|false|Standard users can use this only with their own _userId_|
|deviceId|query|integer|false|Standard users can use this only with _deviceId_s, they have access to|
|groupId|query|integer|false|Standard users can use this only with _groupId_s, they have access to|
|refresh|query|boolean|false|none|

> Example responses

> 200 Response

```json
[
  {
    "attribute": "string",
    "description": "string",
    "expression": "string",
    "id": 0,
    "type": "string"
  }
]
```

<h3 id="fetch-a-list-of-attributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="fetch-a-list-of-attributes-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Attribute](#schemaattribute)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Create an Attribute

> Code samples

```bash
curl https://example.com/attributes/computed \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "attribute": "string",
    "description": "string",
    "expression": "string",
    "id": 0,
    "type": "string"
  }'
```

`POST /attributes/computed`

> Body parameter

```json
{
  "attribute": "string",
  "description": "string",
  "expression": "string",
  "id": 0,
  "type": "string"
}
```

<h3 id="create-an-attribute-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Attribute](#schemaattribute)|true|none|
|» attribute|body|string|false|none|
|» description|body|string|false|none|
|» expression|body|string|false|none|
|» id|body|integer|false|none|
|» type|body|string|false|String\|Number\|Boolean|

> Example responses

> 200 Response

```json
{
  "attribute": "string",
  "description": "string",
  "expression": "string",
  "id": 0,
  "type": "string"
}
```

<h3 id="create-an-attribute-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Attribute](#schemaattribute)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Update an Attribute

> Code samples

```bash
curl https://example.com/attributes/computed/0 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "attribute": "string",
    "description": "string",
    "expression": "string",
    "id": 0,
    "type": "string"
  }'
```

`PUT /attributes/computed/{id}`

> Body parameter

```json
{
  "attribute": "string",
  "description": "string",
  "expression": "string",
  "id": 0,
  "type": "string"
}
```

<h3 id="update-an-attribute-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|none|
|body|body|[Attribute](#schemaattribute)|true|none|
|» attribute|body|string|false|none|
|» description|body|string|false|none|
|» expression|body|string|false|none|
|» id|body|integer|false|none|
|» type|body|string|false|String\|Number\|Boolean|

> Example responses

> 200 Response

```json
{
  "attribute": "string",
  "description": "string",
  "expression": "string",
  "id": 0,
  "type": "string"
}
```

<h3 id="update-an-attribute-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Attribute](#schemaattribute)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Delete an Attribute

> Code samples

```bash
curl https://example.com/attributes/computed/0 \
  -X DELETE \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /attributes/computed/{id}`

<h3 id="delete-an-attribute-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|none|

<h3 id="delete-an-attribute-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

<h1 id="traccar-drivers">Drivers</h1>

Drivers management

## Fetch a list of Drivers

> Code samples

```bash
curl https://example.com/drivers \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /drivers`

Without params, it returns a list of Drivers the user has access to

<h3 id="fetch-a-list-of-drivers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|all|query|boolean|false|Can only be used by admins or managers to fetch all entities|
|userId|query|integer|false|Standard users can use this only with their own _userId_|
|deviceId|query|integer|false|Standard users can use this only with _deviceId_s, they have access to|
|groupId|query|integer|false|Standard users can use this only with _groupId_s, they have access to|
|refresh|query|boolean|false|none|

> Example responses

> 200 Response

```json
[
  {
    "attributes": {},
    "id": 0,
    "name": "string",
    "uniqueId": "string"
  }
]
```

<h3 id="fetch-a-list-of-drivers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="fetch-a-list-of-drivers-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Driver](#schemadriver)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Create a Driver

> Code samples

```bash
curl https://example.com/drivers \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "attributes": {},
    "id": 0,
    "name": "string",
    "uniqueId": "string"
  }'
```

`POST /drivers`

> Body parameter

```json
{
  "attributes": {},
  "id": 0,
  "name": "string",
  "uniqueId": "string"
}
```

<h3 id="create-a-driver-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Driver](#schemadriver)|true|none|
|» attributes|body|object|false|none|
|» id|body|integer|false|none|
|» name|body|string|false|none|
|» uniqueId|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "attributes": {},
  "id": 0,
  "name": "string",
  "uniqueId": "string"
}
```

<h3 id="create-a-driver-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Driver](#schemadriver)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Update a Driver

> Code samples

```bash
curl https://example.com/drivers/0 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "attributes": {},
    "id": 0,
    "name": "string",
    "uniqueId": "string"
  }'
```

`PUT /drivers/{id}`

> Body parameter

```json
{
  "attributes": {},
  "id": 0,
  "name": "string",
  "uniqueId": "string"
}
```

<h3 id="update-a-driver-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|none|
|body|body|[Driver](#schemadriver)|true|none|
|» attributes|body|object|false|none|
|» id|body|integer|false|none|
|» name|body|string|false|none|
|» uniqueId|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "attributes": {},
  "id": 0,
  "name": "string",
  "uniqueId": "string"
}
```

<h3 id="update-a-driver-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Driver](#schemadriver)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Delete a Driver

> Code samples

```bash
curl https://example.com/drivers/0 \
  -X DELETE \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /drivers/{id}`

<h3 id="delete-a-driver-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|none|

<h3 id="delete-a-driver-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

<h1 id="traccar-maintenance">Maintenance</h1>

Maintenance management

## Fetch a list of Maintenance

> Code samples

```bash
curl https://example.com/maintenance \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /maintenance`

Without params, it returns a list of Maintenance the user has access to

<h3 id="fetch-a-list-of-maintenance-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|all|query|boolean|false|Can only be used by admins or managers to fetch all entities|
|userId|query|integer|false|Standard users can use this only with their own _userId_|
|deviceId|query|integer|false|Standard users can use this only with _deviceId_s, they have access to|
|groupId|query|integer|false|Standard users can use this only with _groupId_s, they have access to|
|refresh|query|boolean|false|none|

> Example responses

> 200 Response

```json
[
  {
    "attributes": {},
    "id": 0,
    "name": "string",
    "period": 0,
    "start": 0,
    "type": "string"
  }
]
```

<h3 id="fetch-a-list-of-maintenance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="fetch-a-list-of-maintenance-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Maintenance](#schemamaintenance)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Create a Maintenance

> Code samples

```bash
curl https://example.com/maintenance \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "attributes": {},
    "id": 0,
    "name": "string",
    "period": 0,
    "start": 0,
    "type": "string"
  }'
```

`POST /maintenance`

> Body parameter

```json
{
  "attributes": {},
  "id": 0,
  "name": "string",
  "period": 0,
  "start": 0,
  "type": "string"
}
```

<h3 id="create-a-maintenance-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Maintenance](#schemamaintenance)|true|none|
|» attributes|body|object|false|none|
|» id|body|integer|false|none|
|» name|body|string|false|none|
|» period|body|number|false|none|
|» start|body|number|false|none|
|» type|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "attributes": {},
  "id": 0,
  "name": "string",
  "period": 0,
  "start": 0,
  "type": "string"
}
```

<h3 id="create-a-maintenance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Maintenance](#schemamaintenance)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Update a Maintenance

> Code samples

```bash
curl https://example.com/maintenance/0 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "attributes": {},
    "id": 0,
    "name": "string",
    "period": 0,
    "start": 0,
    "type": "string"
  }'
```

`PUT /maintenance/{id}`

> Body parameter

```json
{
  "attributes": {},
  "id": 0,
  "name": "string",
  "period": 0,
  "start": 0,
  "type": "string"
}
```

<h3 id="update-a-maintenance-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|none|
|body|body|[Maintenance](#schemamaintenance)|true|none|
|» attributes|body|object|false|none|
|» id|body|integer|false|none|
|» name|body|string|false|none|
|» period|body|number|false|none|
|» start|body|number|false|none|
|» type|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "attributes": {},
  "id": 0,
  "name": "string",
  "period": 0,
  "start": 0,
  "type": "string"
}
```

<h3 id="update-a-maintenance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Maintenance](#schemamaintenance)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Delete a Maintenance

> Code samples

```bash
curl https://example.com/maintenance/0 \
  -X DELETE \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /maintenance/{id}`

<h3 id="delete-a-maintenance-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|none|

<h3 id="delete-a-maintenance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

<h1 id="traccar-calendars">Calendars</h1>

Calendar management

## Fetch a list of Calendars

> Code samples

```bash
curl https://example.com/calendars \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /calendars`

Without params, it returns a list of Calendars the user has access to

<h3 id="fetch-a-list-of-calendars-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|all|query|boolean|false|Can only be used by admins or managers to fetch all entities|
|userId|query|integer|false|Standard users can use this only with their own _userId_|

> Example responses

> 200 Response

```json
[
  {
    "attributes": {},
    "data": "string",
    "id": 0,
    "name": "string"
  }
]
```

<h3 id="fetch-a-list-of-calendars-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="fetch-a-list-of-calendars-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Calendar](#schemacalendar)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Create a Calendar

> Code samples

```bash
curl https://example.com/calendars \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "attributes": {},
    "data": "string",
    "id": 0,
    "name": "string"
  }'
```

`POST /calendars`

> Body parameter

```json
{
  "attributes": {},
  "data": "string",
  "id": 0,
  "name": "string"
}
```

<h3 id="create-a-calendar-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Calendar](#schemacalendar)|true|none|
|» attributes|body|object|false|none|
|» data|body|string|false|base64 encoded in iCalendar format|
|» id|body|integer|false|none|
|» name|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "attributes": {},
  "data": "string",
  "id": 0,
  "name": "string"
}
```

<h3 id="create-a-calendar-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Calendar](#schemacalendar)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Update a Calendar

> Code samples

```bash
curl https://example.com/calendars/0 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "attributes": {},
    "data": "string",
    "id": 0,
    "name": "string"
  }'
```

`PUT /calendars/{id}`

> Body parameter

```json
{
  "attributes": {},
  "data": "string",
  "id": 0,
  "name": "string"
}
```

<h3 id="update-a-calendar-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|none|
|body|body|[Calendar](#schemacalendar)|true|none|
|» attributes|body|object|false|none|
|» data|body|string|false|base64 encoded in iCalendar format|
|» id|body|integer|false|none|
|» name|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "attributes": {},
  "data": "string",
  "id": 0,
  "name": "string"
}
```

<h3 id="update-a-calendar-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Calendar](#schemacalendar)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Delete a Calendar

> Code samples

```bash
curl https://example.com/calendars/0 \
  -X DELETE \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /calendars/{id}`

<h3 id="delete-a-calendar-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|none|

<h3 id="delete-a-calendar-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

<h1 id="traccar-statistics">Statistics</h1>

Retrieving server statistics

## Fetch server Statistics

> Code samples

```bash
curl 'https://example.com/statistics?from=1970-01-01T00%3A00%3A00Z&to=1970-01-01T00%3A00%3A00Z' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /statistics`

<h3 id="fetch-server-statistics-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|from|query|string(date-time)|true|in IS0 8601 format. eg. `1963-11-22T18:30:00Z`|
|to|query|string(date-time)|true|in IS0 8601 format. eg. `1963-11-22T18:30:00Z`|

> Example responses

> 200 Response

```json
[
  {
    "activeDevices": 0,
    "activeUsers": 0,
    "captureTime": "1970-01-01T00:00:00Z",
    "messagesReceived": 0,
    "messagesStored": 0,
    "requests": 0
  }
]
```

<h3 id="fetch-server-statistics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="fetch-server-statistics-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Statistics](#schemastatistics)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

# Schemas

<h2 id="tocS_Attribute">Attribute</h2>
<!-- backwards compatibility -->
<a id="schemaattribute"></a>
<a id="schema_Attribute"></a>
<a id="tocSattribute"></a>
<a id="tocsattribute"></a>

```json
{
  "attribute": "string",
  "description": "string",
  "expression": "string",
  "id": 0,
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attribute|string|false|none|none|
|description|string|false|none|none|
|expression|string|false|none|none|
|id|integer|false|none|none|
|type|string|false|none|String\|Number\|Boolean|

<h2 id="tocS_Calendar">Calendar</h2>
<!-- backwards compatibility -->
<a id="schemacalendar"></a>
<a id="schema_Calendar"></a>
<a id="tocScalendar"></a>
<a id="tocscalendar"></a>

```json
{
  "attributes": {},
  "data": "string",
  "id": 0,
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributes|object|false|none|none|
|data|string|false|none|base64 encoded in iCalendar format|
|id|integer|false|none|none|
|name|string|false|none|none|

<h2 id="tocS_Command">Command</h2>
<!-- backwards compatibility -->
<a id="schemacommand"></a>
<a id="schema_Command"></a>
<a id="tocScommand"></a>
<a id="tocscommand"></a>

```json
{
  "attributes": {},
  "description": "string",
  "deviceId": 0,
  "id": 0,
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributes|object|false|none|none|
|description|string|false|none|none|
|deviceId|integer|false|none|none|
|id|integer|false|none|none|
|type|string|false|none|none|

<h2 id="tocS_CommandType">CommandType</h2>
<!-- backwards compatibility -->
<a id="schemacommandtype"></a>
<a id="schema_CommandType"></a>
<a id="tocScommandtype"></a>
<a id="tocscommandtype"></a>

```json
{
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|none|

<h2 id="tocS_Device">Device</h2>
<!-- backwards compatibility -->
<a id="schemadevice"></a>
<a id="schema_Device"></a>
<a id="tocSdevice"></a>
<a id="tocsdevice"></a>

```json
{
  "attributes": {},
  "category": "string",
  "contact": "string",
  "disabled": true,
  "geofenceIds": [
    0
  ],
  "groupId": 0,
  "id": 0,
  "lastUpdate": "1970-01-01T00:00:00Z",
  "model": "string",
  "name": "string",
  "phone": "string",
  "positionId": 0,
  "status": "string",
  "uniqueId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributes|object|false|none|none|
|category|string|false|none|none|
|contact|string|false|none|none|
|disabled|boolean|false|none|none|
|geofenceIds|[integer]|false|none|none|
|groupId|integer|false|none|none|
|id|integer|false|none|none|
|lastUpdate|string(date-time)|false|none|in IS0 8601 format. eg. `1963-11-22T18:30:00Z`|
|model|string|false|none|none|
|name|string|false|none|none|
|phone|string|false|none|none|
|positionId|integer|false|none|none|
|status|string|false|none|none|
|uniqueId|string|false|none|none|

<h2 id="tocS_DeviceAccumulators">DeviceAccumulators</h2>
<!-- backwards compatibility -->
<a id="schemadeviceaccumulators"></a>
<a id="schema_DeviceAccumulators"></a>
<a id="tocSdeviceaccumulators"></a>
<a id="tocsdeviceaccumulators"></a>

```json
{
  "deviceId": 0,
  "hours": 0,
  "totalDistance": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deviceId|integer|false|none|none|
|hours|number|false|none|none|
|totalDistance|number|false|none|in meters|

<h2 id="tocS_Driver">Driver</h2>
<!-- backwards compatibility -->
<a id="schemadriver"></a>
<a id="schema_Driver"></a>
<a id="tocSdriver"></a>
<a id="tocsdriver"></a>

```json
{
  "attributes": {},
  "id": 0,
  "name": "string",
  "uniqueId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributes|object|false|none|none|
|id|integer|false|none|none|
|name|string|false|none|none|
|uniqueId|string|false|none|none|

<h2 id="tocS_Event">Event</h2>
<!-- backwards compatibility -->
<a id="schemaevent"></a>
<a id="schema_Event"></a>
<a id="tocSevent"></a>
<a id="tocsevent"></a>

```json
{
  "attributes": {},
  "deviceId": 0,
  "eventTime": "1970-01-01T00:00:00Z",
  "geofenceId": 0,
  "id": 0,
  "maintenanceId": 0,
  "positionId": 0,
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributes|object|false|none|none|
|deviceId|integer|false|none|none|
|eventTime|string(date-time)|false|none|in IS0 8601 format. eg. `1963-11-22T18:30:00Z`|
|geofenceId|integer|false|none|none|
|id|integer|false|none|none|
|maintenanceId|integer|false|none|none|
|positionId|integer|false|none|none|
|type|string|false|none|none|

<h2 id="tocS_Geofence">Geofence</h2>
<!-- backwards compatibility -->
<a id="schemageofence"></a>
<a id="schema_Geofence"></a>
<a id="tocSgeofence"></a>
<a id="tocsgeofence"></a>

```json
{
  "area": "string",
  "attributes": {},
  "calendarId": 0,
  "description": "string",
  "id": 0,
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|area|string|false|none|none|
|attributes|object|false|none|none|
|calendarId|integer|false|none|none|
|description|string|false|none|none|
|id|integer|false|none|none|
|name|string|false|none|none|

<h2 id="tocS_Group">Group</h2>
<!-- backwards compatibility -->
<a id="schemagroup"></a>
<a id="schema_Group"></a>
<a id="tocSgroup"></a>
<a id="tocsgroup"></a>

```json
{
  "attributes": {},
  "groupId": 0,
  "id": 0,
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributes|object|false|none|none|
|groupId|integer|false|none|none|
|id|integer|false|none|none|
|name|string|false|none|none|

<h2 id="tocS_Maintenance">Maintenance</h2>
<!-- backwards compatibility -->
<a id="schemamaintenance"></a>
<a id="schema_Maintenance"></a>
<a id="tocSmaintenance"></a>
<a id="tocsmaintenance"></a>

```json
{
  "attributes": {},
  "id": 0,
  "name": "string",
  "period": 0,
  "start": 0,
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributes|object|false|none|none|
|id|integer|false|none|none|
|name|string|false|none|none|
|period|number|false|none|none|
|start|number|false|none|none|
|type|string|false|none|none|

<h2 id="tocS_Notification">Notification</h2>
<!-- backwards compatibility -->
<a id="schemanotification"></a>
<a id="schema_Notification"></a>
<a id="tocSnotification"></a>
<a id="tocsnotification"></a>

```json
{
  "always": true,
  "attributes": {},
  "calendarId": 0,
  "id": 0,
  "mail": true,
  "sms": true,
  "type": "string",
  "web": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|always|boolean|false|none|none|
|attributes|object|false|none|none|
|calendarId|integer|false|none|none|
|id|integer|false|none|none|
|mail|boolean|false|none|none|
|sms|boolean|false|none|none|
|type|string|false|none|none|
|web|boolean|false|none|none|

<h2 id="tocS_NotificationType">NotificationType</h2>
<!-- backwards compatibility -->
<a id="schemanotificationtype"></a>
<a id="schema_NotificationType"></a>
<a id="tocSnotificationtype"></a>
<a id="tocsnotificationtype"></a>

```json
{
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|none|

<h2 id="tocS_Permission">Permission</h2>
<!-- backwards compatibility -->
<a id="schemapermission"></a>
<a id="schema_Permission"></a>
<a id="tocSpermission"></a>
<a id="tocspermission"></a>

```json
{
  "attributeId": 0,
  "calendarId": 0,
  "deviceId": 0,
  "driverId": 0,
  "geofenceId": 0,
  "groupId": 0,
  "managedUserId": 0,
  "notificationId": 0,
  "userId": 0
}
```

This is a permission map that contain two object indexes. It is used to link/unlink objects. Order is important. Example: { deviceId:8, geofenceId: 16 }

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributeId|integer|false|none|Computed Attribute Id, can be second parameter only|
|calendarId|integer|false|none|Calendar Id, can be second parameter only and only in combination with userId|
|deviceId|integer|false|none|Device Id, can be first parameter or second only in combination with userId|
|driverId|integer|false|none|Driver Id, can be second parameter only|
|geofenceId|integer|false|none|Geofence Id, can be second parameter only|
|groupId|integer|false|none|Group Id, can be first parameter or second only in combination with userId|
|managedUserId|integer|false|none|User Id, can be second parameter only and only in combination with userId|
|notificationId|integer|false|none|Notification Id, can be second parameter only|
|userId|integer|false|none|User Id, can be only first parameter|

<h2 id="tocS_Position">Position</h2>
<!-- backwards compatibility -->
<a id="schemaposition"></a>
<a id="schema_Position"></a>
<a id="tocSposition"></a>
<a id="tocsposition"></a>

```json
{
  "accuracy": 0,
  "address": "string",
  "altitude": 0,
  "attributes": {},
  "course": 0,
  "deviceId": 0,
  "deviceTime": "1970-01-01T00:00:00Z",
  "fixTime": "1970-01-01T00:00:00Z",
  "id": 0,
  "latitude": 0,
  "longitude": 0,
  "network": {},
  "outdated": true,
  "protocol": "string",
  "serverTime": "1970-01-01T00:00:00Z",
  "speed": 0,
  "valid": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accuracy|number|false|none|none|
|address|string|false|none|none|
|altitude|number|false|none|none|
|attributes|object|false|none|none|
|course|number|false|none|none|
|deviceId|integer|false|none|none|
|deviceTime|string(date-time)|false|none|in IS0 8601 format. eg. `1963-11-22T18:30:00Z`|
|fixTime|string(date-time)|false|none|in IS0 8601 format. eg. `1963-11-22T18:30:00Z`|
|id|integer|false|none|none|
|latitude|number|false|none|none|
|longitude|number|false|none|none|
|network|object|false|none|none|
|outdated|boolean|false|none|none|
|protocol|string|false|none|none|
|serverTime|string(date-time)|false|none|in IS0 8601 format. eg. `1963-11-22T18:30:00Z`|
|speed|number|false|none|in knots|
|valid|boolean|false|none|none|

<h2 id="tocS_ReportStops">ReportStops</h2>
<!-- backwards compatibility -->
<a id="schemareportstops"></a>
<a id="schema_ReportStops"></a>
<a id="tocSreportstops"></a>
<a id="tocsreportstops"></a>

```json
{
  "address": "string",
  "deviceId": 0,
  "deviceName": "string",
  "duration": 0,
  "endTime": "1970-01-01T00:00:00Z",
  "engineHours": 0,
  "lat": 0,
  "lon": 0,
  "spentFuel": 0,
  "startTime": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|string|false|none|none|
|deviceId|integer|false|none|none|
|deviceName|string|false|none|none|
|duration|integer|false|none|none|
|endTime|string(date-time)|false|none|in IS0 8601 format. eg. `1963-11-22T18:30:00Z`|
|engineHours|integer|false|none|none|
|lat|number|false|none|none|
|lon|number|false|none|none|
|spentFuel|number|false|none|in liters|
|startTime|string(date-time)|false|none|in IS0 8601 format. eg. `1963-11-22T18:30:00Z`|

<h2 id="tocS_ReportSummary">ReportSummary</h2>
<!-- backwards compatibility -->
<a id="schemareportsummary"></a>
<a id="schema_ReportSummary"></a>
<a id="tocSreportsummary"></a>
<a id="tocsreportsummary"></a>

```json
{
  "averageSpeed": 0,
  "deviceId": 0,
  "deviceName": "string",
  "distance": 0,
  "engineHours": 0,
  "maxSpeed": 0,
  "spentFuel": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|averageSpeed|number|false|none|in knots|
|deviceId|integer|false|none|none|
|deviceName|string|false|none|none|
|distance|number|false|none|in meters|
|engineHours|integer|false|none|none|
|maxSpeed|number|false|none|in knots|
|spentFuel|number|false|none|in liters|

<h2 id="tocS_ReportTrips">ReportTrips</h2>
<!-- backwards compatibility -->
<a id="schemareporttrips"></a>
<a id="schema_ReportTrips"></a>
<a id="tocSreporttrips"></a>
<a id="tocsreporttrips"></a>

```json
{
  "averageSpeed": 0,
  "deviceId": 0,
  "deviceName": "string",
  "distance": 0,
  "driverName": "string",
  "driverUniqueId": 0,
  "duration": 0,
  "endAddress": "string",
  "endLat": 0,
  "endLon": 0,
  "endTime": "1970-01-01T00:00:00Z",
  "maxSpeed": 0,
  "spentFuel": 0,
  "startAddress": "string",
  "startLat": 0,
  "startLon": 0,
  "startTime": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|averageSpeed|number|false|none|in knots|
|deviceId|integer|false|none|none|
|deviceName|string|false|none|none|
|distance|number|false|none|in meters|
|driverName|string|false|none|none|
|driverUniqueId|integer|false|none|none|
|duration|integer|false|none|none|
|endAddress|string|false|none|none|
|endLat|number|false|none|none|
|endLon|number|false|none|none|
|endTime|string(date-time)|false|none|in IS0 8601 format. eg. `1963-11-22T18:30:00Z`|
|maxSpeed|number|false|none|in knots|
|spentFuel|number|false|none|in liters|
|startAddress|string|false|none|none|
|startLat|number|false|none|none|
|startLon|number|false|none|none|
|startTime|string(date-time)|false|none|in IS0 8601 format. eg. `1963-11-22T18:30:00Z`|

<h2 id="tocS_Server">Server</h2>
<!-- backwards compatibility -->
<a id="schemaserver"></a>
<a id="schema_Server"></a>
<a id="tocSserver"></a>
<a id="tocsserver"></a>

```json
{
  "attributes": {},
  "bingKey": "string",
  "coordinateFormat": "string",
  "deviceReadonly": true,
  "forceSettings": true,
  "id": 0,
  "latitude": 0,
  "limitCommands": true,
  "longitude": 0,
  "map": "string",
  "mapUrl": "string",
  "poiLayer": "string",
  "readonly": true,
  "registration": true,
  "twelveHourFormat": true,
  "version": "string",
  "zoom": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributes|object|false|none|none|
|bingKey|string|false|none|none|
|coordinateFormat|string|false|none|none|
|deviceReadonly|boolean|false|none|none|
|forceSettings|boolean|false|none|none|
|id|integer|false|none|none|
|latitude|number|false|none|none|
|limitCommands|boolean|false|none|none|
|longitude|number|false|none|none|
|map|string|false|none|none|
|mapUrl|string|false|none|none|
|poiLayer|string|false|none|none|
|readonly|boolean|false|none|none|
|registration|boolean|false|none|none|
|twelveHourFormat|boolean|false|none|none|
|version|string|false|none|none|
|zoom|integer|false|none|none|

<h2 id="tocS_Statistics">Statistics</h2>
<!-- backwards compatibility -->
<a id="schemastatistics"></a>
<a id="schema_Statistics"></a>
<a id="tocSstatistics"></a>
<a id="tocsstatistics"></a>

```json
{
  "activeDevices": 0,
  "activeUsers": 0,
  "captureTime": "1970-01-01T00:00:00Z",
  "messagesReceived": 0,
  "messagesStored": 0,
  "requests": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|activeDevices|integer|false|none|none|
|activeUsers|integer|false|none|none|
|captureTime|string(date-time)|false|none|in IS0 8601 format. eg. `1963-11-22T18:30:00Z`|
|messagesReceived|integer|false|none|none|
|messagesStored|integer|false|none|none|
|requests|integer|false|none|none|

<h2 id="tocS_User">User</h2>
<!-- backwards compatibility -->
<a id="schemauser"></a>
<a id="schema_User"></a>
<a id="tocSuser"></a>
<a id="tocsuser"></a>

```json
{
  "administrator": true,
  "attributes": {},
  "coordinateFormat": "string",
  "deviceLimit": 0,
  "deviceReadonly": true,
  "disabled": true,
  "email": "string",
  "expirationTime": "1970-01-01T00:00:00Z",
  "id": 0,
  "latitude": 0,
  "limitCommands": true,
  "longitude": 0,
  "map": "string",
  "name": "string",
  "password": "string",
  "phone": "string",
  "poiLayer": "string",
  "readonly": true,
  "twelveHourFormat": true,
  "userLimit": 0,
  "zoom": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|administrator|boolean|false|none|none|
|attributes|object|false|none|none|
|coordinateFormat|string|false|none|none|
|deviceLimit|integer|false|none|none|
|deviceReadonly|boolean|false|none|none|
|disabled|boolean|false|none|none|
|email|string|false|none|none|
|expirationTime|string(date-time)|false|none|in IS0 8601 format. eg. `1963-11-22T18:30:00Z`|
|id|integer|false|none|none|
|latitude|number|false|none|none|
|limitCommands|boolean|false|none|none|
|longitude|number|false|none|none|
|map|string|false|none|none|
|name|string|false|none|none|
|password|string|false|none|none|
|phone|string|false|none|none|
|poiLayer|string|false|none|none|
|readonly|boolean|false|none|none|
|twelveHourFormat|boolean|false|none|none|
|userLimit|integer|false|none|none|
|zoom|integer|false|none|none|
