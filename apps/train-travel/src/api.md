<h1 id="train-travel-api">Train Travel API v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

API for finding and booking train trips across Europe.

This API definition was ported over from https://github.com/bump-sh-examples/train-travel-api.

Base URLs:

* <a href="https://api.example.com">https://api.example.com</a> - Production

Email: <a href="mailto:support@example.com">Train Support</a> 
Web: <a href="https://example.com/support">Train Support</a> 
License: Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International

# Authentication

- oAuth2 authentication. OAuth 2.0 authorization code following RFC8725 best practices.

    - Flow: authorizationCode
    - Authorization URL = [https://example.com/oauth/authorize](https://example.com/oauth/authorize)
    - Token URL = [https://example.com/oauth/token](https://example.com/oauth/token)

|Scope|Scope Description|
|---|---|
|read|Read access|
|write|Write access|

<h1 id="train-travel-api-stations">Stations</h1>

Find and filter train stations across Europe, including their location  and local timezone.

## Get a list of train stations

<a id="opIdget-stations"></a>

> Code samples

```bash
curl https://api.example.com/stations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /stations`

Returns a list of all train stations in the system.

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "efdbb9d1-02c2-4bc3-afb7-6788d8782b1e",
      "name": "Berlin Hauptbahnhof",
      "address": "Invalidenstraße 10557 Berlin, Germany",
      "country_code": "DE",
      "timezone": "Europe/Berlin"
    },
    {
      "id": "b2e783e1-c824-4d63-b37a-d8d698862f1d",
      "name": "Paris Gare du Nord",
      "address": "18 Rue de Dunkerque 75010 Paris, France",
      "country_code": "FR",
      "timezone": "Europe/Paris"
    }
  ],
  "links": {
    "self": "https://api.example.com/stations&page=2",
    "next": "https://api.example.com/stations?page=3",
    "prev": "https://api.example.com/stations?page=1"
  }
}
```

> 400 Response

```json
{
  "type": "https://example.com/errors/bad-request",
  "title": "Bad Request",
  "status": 400,
  "detail": "The request is invalid or missing required parameters."
}
```

> 401 Response

```json
{
  "type": "https://example.com/errors/unauthorized",
  "title": "Unauthorized",
  "status": 401,
  "detail": "You do not have the necessary permissions."
}
```

> 403 Response

```json
{
  "type": "https://example.com/errors/forbidden",
  "title": "Forbidden",
  "status": 403,
  "detail": "Access is forbidden for the provided credentials."
}
```

> 429 Response

```json
{
  "type": "https://example.com/errors/too-many-requests",
  "title": "Too Many Requests",
  "status": 429,
  "detail": "You have exceeded the rate limit."
}
```

> 500 Response

```json
{
  "type": "https://example.com/errors/internal-server-error",
  "title": "Internal Server Error",
  "status": 500,
  "detail": "An unexpected error occurred."
}
```

<h3 id="get-a-list-of-train-stations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of train stations|Inline|
|400|Bad Request|Bad Request|[Problem](#schemaproblem)|
|401|Unauthorized|Unauthorized|[Problem](#schemaproblem)|
|403|Forbidden|Forbidden|[Problem](#schemaproblem)|
|429|Too Many Requests|Too Many Requests|[Problem](#schemaproblem)|
|500|Internal Server Error|Internal Server Error|[Problem](#schemaproblem)|

<h3 id="get-a-list-of-train-stations-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|false|none|The wrapper for a collection is an array of objects.|
|links|object|false|read-only|A set of hypermedia links which serve as controls for the client.|
|data|[[Station](#schemastation)]|false|none|none|
|links|object|false|none|none|
|» self|string(uri)|false|none|none|
|» next|string(uri)|false|none|none|
|» prev|string(uri)|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|RateLimit|string||The RateLimit header is communicate quota policies, and contains a `limit` to<br>conveys the expiring limit, `remaining` to convey the remaining quota units,<br>and `reset` to convey the time window reset time.<br>|
|400|RateLimit|string||The RateLimit header is communicate quota policies, and contains a `limit` to<br>conveys the expiring limit, `remaining` to convey the remaining quota units,<br>and `reset` to convey the time window reset time.<br>|
|401|RateLimit|string||The RateLimit header is communicate quota policies, and contains a `limit` to<br>conveys the expiring limit, `remaining` to convey the remaining quota units,<br>and `reset` to convey the time window reset time.<br>|
|403|RateLimit|string||The RateLimit header is communicate quota policies, and contains a `limit` to<br>conveys the expiring limit, `remaining` to convey the remaining quota units,<br>and `reset` to convey the time window reset time.<br>|
|429|RateLimit|string||The RateLimit header is communicate quota policies, and contains a `limit` to<br>conveys the expiring limit, `remaining` to convey the remaining quota units,<br>and `reset` to convey the time window reset time.<br>|
|429|Retry-After|string||The Retry-After header indicates how long the user agent should wait before making a follow-up request. <br>The value is in seconds and can be an integer or a date in the future. <br>If the value is an integer, it indicates the number of seconds to wait. <br>If the value is a date, it indicates the time at which the user agent should make a follow-up request. <br>|
|500|RateLimit|string||The RateLimit header is communicate quota policies, and contains a `limit` to<br>conveys the expiring limit, `remaining` to convey the remaining quota units,<br>and `reset` to convey the time window reset time.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read )
</aside>

<h1 id="train-travel-api-trips">Trips</h1>

Timetables and routes for train trips between stations, including  pricing and availability.

## Get available train trips

<a id="opIdget-trips"></a>

> Code samples

```bash
curl 'https://api.example.com/trips?origin=efdbb9d1-02c2-4bc3-afb7-6788d8782b1e&destination=b2e783e1-c824-4d63-b37a-d8d698862f1d&date=2024-02-01T09%3A00%3A00Z' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /trips`

Returns a list of available train trips between the specified origin and destination stations on the given date, and allows for filtering by bicycle and dog allowances.

<h3 id="get-available-train-trips-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|origin|query|string(uuid)|true|The ID of the origin station|
|destination|query|string(uuid)|true|The ID of the destination station|
|date|query|string(date-time)|true|The date and time of the trip in ISO 8601 format in origin station's timezone.|
|bicycles|query|boolean|false|Only return trips where bicycles are known to be allowed|
|dogs|query|boolean|false|Only return trips where dogs are known to be allowed|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "ea399ba1-6d95-433f-92d1-83f67b775594",
      "origin": "efdbb9d1-02c2-4bc3-afb7-6788d8782b1e",
      "destination": "b2e783e1-c824-4d63-b37a-d8d698862f1d",
      "departure_time": "2024-02-01T10:00:00Z",
      "arrival_time": "2024-02-01T16:00:00Z",
      "price": 50,
      "operator": "Deutsche Bahn",
      "bicycles_allowed": true,
      "dogs_allowed": true
    },
    {
      "id": "4d67459c-af07-40bb-bb12-178dbb88e09f",
      "origin": "b2e783e1-c824-4d63-b37a-d8d698862f1d",
      "destination": "efdbb9d1-02c2-4bc3-afb7-6788d8782b1e",
      "departure_time": "2024-02-01T12:00:00Z",
      "arrival_time": "2024-02-01T18:00:00Z",
      "price": 50,
      "operator": "SNCF",
      "bicycles_allowed": true,
      "dogs_allowed": true
    }
  ],
  "links": {
    "self": "https://api.example.com/trips?origin=efdbb9d1-02c2-4bc3-afb7-6788d8782b1e&destination=b2e783e1-c824-4d63-b37a-d8d698862f1d&date=2024-02-01",
    "next": "https://api.example.com/trips?origin=efdbb9d1-02c2-4bc3-afb7-6788d8782b1e&destination=b2e783e1-c824-4d63-b37a-d8d698862f1d&date=2024-02-01&page=2"
  }
}
```

> 400 Response

```json
{
  "type": "https://example.com/errors/bad-request",
  "title": "Bad Request",
  "status": 400,
  "detail": "The request is invalid or missing required parameters."
}
```

> 401 Response

```json
{
  "type": "https://example.com/errors/unauthorized",
  "title": "Unauthorized",
  "status": 401,
  "detail": "You do not have the necessary permissions."
}
```

> 403 Response

```json
{
  "type": "https://example.com/errors/forbidden",
  "title": "Forbidden",
  "status": 403,
  "detail": "Access is forbidden for the provided credentials."
}
```

> 429 Response

```json
{
  "type": "https://example.com/errors/too-many-requests",
  "title": "Too Many Requests",
  "status": 429,
  "detail": "You have exceeded the rate limit."
}
```

> 500 Response

```json
{
  "type": "https://example.com/errors/internal-server-error",
  "title": "Internal Server Error",
  "status": 500,
  "detail": "An unexpected error occurred."
}
```

<h3 id="get-available-train-trips-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of available train trips|Inline|
|400|Bad Request|Bad Request|[Problem](#schemaproblem)|
|401|Unauthorized|Unauthorized|[Problem](#schemaproblem)|
|403|Forbidden|Forbidden|[Problem](#schemaproblem)|
|429|Too Many Requests|Too Many Requests|[Problem](#schemaproblem)|
|500|Internal Server Error|Internal Server Error|[Problem](#schemaproblem)|

<h3 id="get-available-train-trips-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|false|none|The wrapper for a collection is an array of objects.|
|links|object|false|read-only|A set of hypermedia links which serve as controls for the client.|
|data|[[Trip](#schematrip)]|false|none|none|
|links|object|false|none|none|
|» self|string(uri)|false|none|none|
|» next|string(uri)|false|none|none|
|» prev|string(uri)|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|RateLimit|string||The RateLimit header is communicate quota policies, and contains a `limit` to<br>conveys the expiring limit, `remaining` to convey the remaining quota units,<br>and `reset` to convey the time window reset time.<br>|
|400|RateLimit|string||The RateLimit header is communicate quota policies, and contains a `limit` to<br>conveys the expiring limit, `remaining` to convey the remaining quota units,<br>and `reset` to convey the time window reset time.<br>|
|401|RateLimit|string||The RateLimit header is communicate quota policies, and contains a `limit` to<br>conveys the expiring limit, `remaining` to convey the remaining quota units,<br>and `reset` to convey the time window reset time.<br>|
|403|RateLimit|string||The RateLimit header is communicate quota policies, and contains a `limit` to<br>conveys the expiring limit, `remaining` to convey the remaining quota units,<br>and `reset` to convey the time window reset time.<br>|
|429|RateLimit|string||The RateLimit header is communicate quota policies, and contains a `limit` to<br>conveys the expiring limit, `remaining` to convey the remaining quota units,<br>and `reset` to convey the time window reset time.<br>|
|429|Retry-After|string||The Retry-After header indicates how long the user agent should wait before making a follow-up request. <br>The value is in seconds and can be an integer or a date in the future. <br>If the value is an integer, it indicates the number of seconds to wait. <br>If the value is a date, it indicates the time at which the user agent should make a follow-up request. <br>|
|500|RateLimit|string||The RateLimit header is communicate quota policies, and contains a `limit` to<br>conveys the expiring limit, `remaining` to convey the remaining quota units,<br>and `reset` to convey the time window reset time.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read )
</aside>

<h1 id="train-travel-api-bookings">Bookings</h1>

Create and manage bookings for train trips, including passenger  details and optional extras.

## List existing bookings

<a id="opIdget-bookings"></a>

> Code samples

```bash
curl https://api.example.com/bookings \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /bookings`

Returns a list of all trips booking by the authenticated user.

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "efdbb9d1-02c2-4bc3-afb7-6788d8782b1e",
      "trip_id": "efdbb9d1-02c2-4bc3-afb7-6788d8782b1e",
      "passenger_name": "John Doe",
      "has_bicycle": true,
      "has_dog": true
    },
    {
      "id": "b2e783e1-c824-4d63-b37a-d8d698862f1d",
      "trip_id": "b2e783e1-c824-4d63-b37a-d8d698862f1d",
      "passenger_name": "Jane Smith",
      "has_bicycle": false,
      "has_dog": false
    }
  ],
  "links": {
    "self": "https://api.example.com/bookings",
    "next": "https://api.example.com/bookings?page=2"
  }
}
```

> 400 Response

```json
{
  "type": "https://example.com/errors/bad-request",
  "title": "Bad Request",
  "status": 400,
  "detail": "The request is invalid or missing required parameters."
}
```

> 401 Response

```json
{
  "type": "https://example.com/errors/unauthorized",
  "title": "Unauthorized",
  "status": 401,
  "detail": "You do not have the necessary permissions."
}
```

> 403 Response

```json
{
  "type": "https://example.com/errors/forbidden",
  "title": "Forbidden",
  "status": 403,
  "detail": "Access is forbidden for the provided credentials."
}
```

> 429 Response

```json
{
  "type": "https://example.com/errors/too-many-requests",
  "title": "Too Many Requests",
  "status": 429,
  "detail": "You have exceeded the rate limit."
}
```

> 500 Response

```json
{
  "type": "https://example.com/errors/internal-server-error",
  "title": "Internal Server Error",
  "status": 500,
  "detail": "An unexpected error occurred."
}
```

<h3 id="list-existing-bookings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of bookings|Inline|
|400|Bad Request|Bad Request|[Problem](#schemaproblem)|
|401|Unauthorized|Unauthorized|[Problem](#schemaproblem)|
|403|Forbidden|Forbidden|[Problem](#schemaproblem)|
|429|Too Many Requests|Too Many Requests|[Problem](#schemaproblem)|
|500|Internal Server Error|Internal Server Error|[Problem](#schemaproblem)|

<h3 id="list-existing-bookings-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|false|none|The wrapper for a collection is an array of objects.|
|links|object|false|read-only|A set of hypermedia links which serve as controls for the client.|
|data|[[Booking](#schemabooking)]|false|none|none|
|links|object|false|none|none|
|» self|string(uri)|false|none|none|
|» next|string(uri)|false|none|none|
|» prev|string(uri)|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|RateLimit|string||The RateLimit header is communicate quota policies, and contains a `limit` to<br>conveys the expiring limit, `remaining` to convey the remaining quota units,<br>and `reset` to convey the time window reset time.<br>|
|400|RateLimit|string||The RateLimit header is communicate quota policies, and contains a `limit` to<br>conveys the expiring limit, `remaining` to convey the remaining quota units,<br>and `reset` to convey the time window reset time.<br>|
|401|RateLimit|string||The RateLimit header is communicate quota policies, and contains a `limit` to<br>conveys the expiring limit, `remaining` to convey the remaining quota units,<br>and `reset` to convey the time window reset time.<br>|
|403|RateLimit|string||The RateLimit header is communicate quota policies, and contains a `limit` to<br>conveys the expiring limit, `remaining` to convey the remaining quota units,<br>and `reset` to convey the time window reset time.<br>|
|429|RateLimit|string||The RateLimit header is communicate quota policies, and contains a `limit` to<br>conveys the expiring limit, `remaining` to convey the remaining quota units,<br>and `reset` to convey the time window reset time.<br>|
|429|Retry-After|string||The Retry-After header indicates how long the user agent should wait before making a follow-up request. <br>The value is in seconds and can be an integer or a date in the future. <br>If the value is an integer, it indicates the number of seconds to wait. <br>If the value is a date, it indicates the time at which the user agent should make a follow-up request. <br>|
|500|RateLimit|string||The RateLimit header is communicate quota policies, and contains a `limit` to<br>conveys the expiring limit, `remaining` to convey the remaining quota units,<br>and `reset` to convey the time window reset time.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read )
</aside>

## Create a booking

<a id="opIdcreate-booking"></a>

> Code samples

```bash
curl https://api.example.com/bookings \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "trip_id": "4f4e4e1-c824-4d63-b37a-d8d698862f1d",
    "passenger_name": "John Doe",
    "has_bicycle": true,
    "has_dog": true
  }'
```

`POST /bookings`

A booking is a temporary hold on a trip. It is not confirmed until the payment is processed.

> Body parameter

```json
{
  "trip_id": "4f4e4e1-c824-4d63-b37a-d8d698862f1d",
  "passenger_name": "John Doe",
  "has_bicycle": true,
  "has_dog": true
}
```

<h3 id="create-a-booking-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Booking](#schemabooking)|true|none|
|» trip_id|body|string(uuid)|false|Identifier of the booked trip|
|» passenger_name|body|string|false|Name of the passenger|
|» has_bicycle|body|boolean|false|Indicates whether the passenger has a bicycle.|
|» has_dog|body|boolean|false|Indicates whether the passenger has a dog.|

> Example responses

> 201 Response

```json
{
  "id": "efdbb9d1-02c2-4bc3-afb7-6788d8782b1e",
  "trip_id": "efdbb9d1-02c2-4bc3-afb7-6788d8782b1e",
  "passenger_name": "John Doe",
  "has_bicycle": true,
  "has_dog": true,
  "links": {
    "self": "https://api.example.com/bookings/efdbb9d1-02c2-4bc3-afb7-6788d8782b1e"
  }
}
```

> 400 Response

```json
{
  "type": "https://example.com/errors/bad-request",
  "title": "Bad Request",
  "status": 400,
  "detail": "The request is invalid or missing required parameters."
}
```

> 401 Response

```json
{
  "type": "https://example.com/errors/unauthorized",
  "title": "Unauthorized",
  "status": 401,
  "detail": "You do not have the necessary permissions."
}
```

> 404 Response

```json
{
  "type": "https://example.com/errors/not-found",
  "title": "Not Found",
  "status": 404,
  "detail": "The requested resource was not found."
}
```

> 409 Response

```json
{
  "type": "https://example.com/errors/conflict",
  "title": "Conflict",
  "status": 409,
  "detail": "There is a conflict with an existing resource."
}
```

> 429 Response

```json
{
  "type": "https://example.com/errors/too-many-requests",
  "title": "Too Many Requests",
  "status": 429,
  "detail": "You have exceeded the rate limit."
}
```

> 500 Response

```json
{
  "type": "https://example.com/errors/internal-server-error",
  "title": "Internal Server Error",
  "status": 500,
  "detail": "An unexpected error occurred."
}
```

<h3 id="create-a-booking-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Booking successful|Inline|
|400|Bad Request|Bad Request|[Problem](#schemaproblem)|
|401|Unauthorized|Unauthorized|[Problem](#schemaproblem)|
|404|Not Found|Not Found|[Problem](#schemaproblem)|
|409|Conflict|Conflict|[Problem](#schemaproblem)|
|429|Too Many Requests|Too Many Requests|[Problem](#schemaproblem)|
|500|Internal Server Error|Internal Server Error|[Problem](#schemaproblem)|

<h3 id="create-a-booking-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|read-only|Unique identifier for the booking|
|trip_id|string(uuid)|false|none|Identifier of the booked trip|
|passenger_name|string|false|none|Name of the passenger|
|has_bicycle|boolean|false|none|Indicates whether the passenger has a bicycle.|
|has_dog|boolean|false|none|Indicates whether the passenger has a dog.|
|links|[Links-Self](#schemalinks-self)|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|400|RateLimit|string||The RateLimit header is communicate quota policies, and contains a `limit` to<br>conveys the expiring limit, `remaining` to convey the remaining quota units,<br>and `reset` to convey the time window reset time.<br>|
|401|RateLimit|string||The RateLimit header is communicate quota policies, and contains a `limit` to<br>conveys the expiring limit, `remaining` to convey the remaining quota units,<br>and `reset` to convey the time window reset time.<br>|
|404|RateLimit|string||The RateLimit header is communicate quota policies, and contains a `limit` to<br>conveys the expiring limit, `remaining` to convey the remaining quota units,<br>and `reset` to convey the time window reset time.<br>|
|409|RateLimit|string||The RateLimit header is communicate quota policies, and contains a `limit` to<br>conveys the expiring limit, `remaining` to convey the remaining quota units,<br>and `reset` to convey the time window reset time.<br>|
|429|RateLimit|string||The RateLimit header is communicate quota policies, and contains a `limit` to<br>conveys the expiring limit, `remaining` to convey the remaining quota units,<br>and `reset` to convey the time window reset time.<br>|
|429|Retry-After|string||The Retry-After header indicates how long the user agent should wait before making a follow-up request. <br>The value is in seconds and can be an integer or a date in the future. <br>If the value is an integer, it indicates the number of seconds to wait. <br>If the value is a date, it indicates the time at which the user agent should make a follow-up request. <br>|
|500|RateLimit|string||The RateLimit header is communicate quota policies, and contains a `limit` to<br>conveys the expiring limit, `remaining` to convey the remaining quota units,<br>and `reset` to convey the time window reset time.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: write )
</aside>

## Get a booking

<a id="opIdget-booking"></a>

> Code samples

```bash
curl https://api.example.com/bookings/1725ff48-ab45-4bb5-9d02-88745177dedb \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /bookings/{bookingId}`

Returns the details of a specific booking.

<h3 id="get-a-booking-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bookingId|path|string(uuid)|true|The ID of the booking to retrieve.|

> Example responses

> 200 Response

```json
{
  "id": "efdbb9d1-02c2-4bc3-afb7-6788d8782b1e",
  "trip_id": "efdbb9d1-02c2-4bc3-afb7-6788d8782b1e",
  "passenger_name": "John Doe",
  "has_bicycle": true,
  "has_dog": true,
  "links": {
    "self": "https://api.example.com/bookings/1725ff48-ab45-4bb5-9d02-88745177dedb"
  }
}
```

> 400 Response

```json
{
  "type": "https://example.com/errors/bad-request",
  "title": "Bad Request",
  "status": 400,
  "detail": "The request is invalid or missing required parameters."
}
```

> 401 Response

```json
{
  "type": "https://example.com/errors/unauthorized",
  "title": "Unauthorized",
  "status": 401,
  "detail": "You do not have the necessary permissions."
}
```

> 403 Response

```json
{
  "type": "https://example.com/errors/forbidden",
  "title": "Forbidden",
  "status": 403,
  "detail": "Access is forbidden for the provided credentials."
}
```

> 404 Response

```json
{
  "type": "https://example.com/errors/not-found",
  "title": "Not Found",
  "status": 404,
  "detail": "The requested resource was not found."
}
```

> 429 Response

```json
{
  "type": "https://example.com/errors/too-many-requests",
  "title": "Too Many Requests",
  "status": 429,
  "detail": "You have exceeded the rate limit."
}
```

> 500 Response

```json
{
  "type": "https://example.com/errors/internal-server-error",
  "title": "Internal Server Error",
  "status": 500,
  "detail": "An unexpected error occurred."
}
```

<h3 id="get-a-booking-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The booking details|Inline|
|400|Bad Request|Bad Request|[Problem](#schemaproblem)|
|401|Unauthorized|Unauthorized|[Problem](#schemaproblem)|
|403|Forbidden|Forbidden|[Problem](#schemaproblem)|
|404|Not Found|Not Found|[Problem](#schemaproblem)|
|429|Too Many Requests|Too Many Requests|[Problem](#schemaproblem)|
|500|Internal Server Error|Internal Server Error|[Problem](#schemaproblem)|

<h3 id="get-a-booking-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|read-only|Unique identifier for the booking|
|trip_id|string(uuid)|false|none|Identifier of the booked trip|
|passenger_name|string|false|none|Name of the passenger|
|has_bicycle|boolean|false|none|Indicates whether the passenger has a bicycle.|
|has_dog|boolean|false|none|Indicates whether the passenger has a dog.|
|links|[Links-Self](#schemalinks-self)|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|RateLimit|string||The RateLimit header is communicate quota policies, and contains a `limit` to<br>conveys the expiring limit, `remaining` to convey the remaining quota units,<br>and `reset` to convey the time window reset time.<br>|
|400|RateLimit|string||The RateLimit header is communicate quota policies, and contains a `limit` to<br>conveys the expiring limit, `remaining` to convey the remaining quota units,<br>and `reset` to convey the time window reset time.<br>|
|401|RateLimit|string||The RateLimit header is communicate quota policies, and contains a `limit` to<br>conveys the expiring limit, `remaining` to convey the remaining quota units,<br>and `reset` to convey the time window reset time.<br>|
|403|RateLimit|string||The RateLimit header is communicate quota policies, and contains a `limit` to<br>conveys the expiring limit, `remaining` to convey the remaining quota units,<br>and `reset` to convey the time window reset time.<br>|
|404|RateLimit|string||The RateLimit header is communicate quota policies, and contains a `limit` to<br>conveys the expiring limit, `remaining` to convey the remaining quota units,<br>and `reset` to convey the time window reset time.<br>|
|429|RateLimit|string||The RateLimit header is communicate quota policies, and contains a `limit` to<br>conveys the expiring limit, `remaining` to convey the remaining quota units,<br>and `reset` to convey the time window reset time.<br>|
|429|Retry-After|string||The Retry-After header indicates how long the user agent should wait before making a follow-up request. <br>The value is in seconds and can be an integer or a date in the future. <br>If the value is an integer, it indicates the number of seconds to wait. <br>If the value is a date, it indicates the time at which the user agent should make a follow-up request. <br>|
|500|RateLimit|string||The RateLimit header is communicate quota policies, and contains a `limit` to<br>conveys the expiring limit, `remaining` to convey the remaining quota units,<br>and `reset` to convey the time window reset time.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read )
</aside>

## Delete a booking

<a id="opIddelete-booking"></a>

> Code samples

```bash
curl https://api.example.com/bookings/1725ff48-ab45-4bb5-9d02-88745177dedb \
  -X DELETE \
  -H 'Accept: application/problem+json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /bookings/{bookingId}`

Deletes a booking, cancelling the hold on the trip.

<h3 id="delete-a-booking-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bookingId|path|string(uuid)|true|The ID of the booking to retrieve.|

> Example responses

> 400 Response

```json
{
  "type": "https://example.com/errors/bad-request",
  "title": "Bad Request",
  "status": 400,
  "detail": "The request is invalid or missing required parameters."
}
```

> 401 Response

```json
{
  "type": "https://example.com/errors/unauthorized",
  "title": "Unauthorized",
  "status": 401,
  "detail": "You do not have the necessary permissions."
}
```

> 403 Response

```json
{
  "type": "https://example.com/errors/forbidden",
  "title": "Forbidden",
  "status": 403,
  "detail": "Access is forbidden for the provided credentials."
}
```

> 404 Response

```json
{
  "type": "https://example.com/errors/not-found",
  "title": "Not Found",
  "status": 404,
  "detail": "The requested resource was not found."
}
```

> 429 Response

```json
{
  "type": "https://example.com/errors/too-many-requests",
  "title": "Too Many Requests",
  "status": 429,
  "detail": "You have exceeded the rate limit."
}
```

> 500 Response

```json
{
  "type": "https://example.com/errors/internal-server-error",
  "title": "Internal Server Error",
  "status": 500,
  "detail": "An unexpected error occurred."
}
```

<h3 id="delete-a-booking-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Booking deleted|None|
|400|Bad Request|Bad Request|[Problem](#schemaproblem)|
|401|Unauthorized|Unauthorized|[Problem](#schemaproblem)|
|403|Forbidden|Forbidden|[Problem](#schemaproblem)|
|404|Not Found|Not Found|[Problem](#schemaproblem)|
|429|Too Many Requests|Too Many Requests|[Problem](#schemaproblem)|
|500|Internal Server Error|Internal Server Error|[Problem](#schemaproblem)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|400|RateLimit|string||The RateLimit header is communicate quota policies, and contains a `limit` to<br>conveys the expiring limit, `remaining` to convey the remaining quota units,<br>and `reset` to convey the time window reset time.<br>|
|401|RateLimit|string||The RateLimit header is communicate quota policies, and contains a `limit` to<br>conveys the expiring limit, `remaining` to convey the remaining quota units,<br>and `reset` to convey the time window reset time.<br>|
|403|RateLimit|string||The RateLimit header is communicate quota policies, and contains a `limit` to<br>conveys the expiring limit, `remaining` to convey the remaining quota units,<br>and `reset` to convey the time window reset time.<br>|
|404|RateLimit|string||The RateLimit header is communicate quota policies, and contains a `limit` to<br>conveys the expiring limit, `remaining` to convey the remaining quota units,<br>and `reset` to convey the time window reset time.<br>|
|429|RateLimit|string||The RateLimit header is communicate quota policies, and contains a `limit` to<br>conveys the expiring limit, `remaining` to convey the remaining quota units,<br>and `reset` to convey the time window reset time.<br>|
|429|Retry-After|string||The Retry-After header indicates how long the user agent should wait before making a follow-up request. <br>The value is in seconds and can be an integer or a date in the future. <br>If the value is an integer, it indicates the number of seconds to wait. <br>If the value is a date, it indicates the time at which the user agent should make a follow-up request. <br>|
|500|RateLimit|string||The RateLimit header is communicate quota policies, and contains a `limit` to<br>conveys the expiring limit, `remaining` to convey the remaining quota units,<br>and `reset` to convey the time window reset time.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: write )
</aside>

<h1 id="train-travel-api-payments">Payments</h1>

Pay for bookings using a card or bank account, and view payment
status and history.

> warn
> Bookings usually expire within 1 hour so you'll need to make your payment before the expiry date 


## Pay for a Booking

<a id="opIdcreate-booking-payment"></a>

> Code samples

```bash
curl https://api.example.com/bookings/1725ff48-ab45-4bb5-9d02-88745177dedb/payment \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "amount": 49.99,
    "currency": "gbp",
    "source": {
      "object": "card",
      "name": "J. Doe",
      "number": "4242424242424242",
      "cvc": 123,
      "exp_month": 12,
      "exp_year": 2025,
      "address_line1": "123 Fake Street",
      "address_line2": "4th Floor",
      "address_city": "London",
      "address_country": "gb",
      "address_post_code": "N12 9XX"
    }
  }'
```

`POST /bookings/{bookingId}/payment`

A payment is an attempt to pay for the booking, which will confirm the booking for the user and enable them to get their tickets.

> Body parameter

```json
{
  "amount": 49.99,
  "currency": "gbp",
  "source": {
    "object": "card",
    "name": "J. Doe",
    "number": "4242424242424242",
    "cvc": 123,
    "exp_month": 12,
    "exp_year": 2025,
    "address_line1": "123 Fake Street",
    "address_line2": "4th Floor",
    "address_city": "London",
    "address_country": "gb",
    "address_post_code": "N12 9XX"
  }
}
```

<h3 id="pay-for-a-booking-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bookingId|path|string(uuid)|true|The ID of the booking to pay for.|
|body|body|[BookingPayment](#schemabookingpayment)|false|none|
|» amount|body|number|false|Amount intended to be collected by this payment. A positive decimal figure describing the amount to be collected.|
|» currency|body|string|false|Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase.|
|» source|body|object|false|The payment source to take the payment from. This can be a card or a bank account. Some of these properties will be hidden on read to protect PII leaking.|
|» » *anyOf*|body|object|false|A card (debit or credit) to take payment from.|
|» » object|body|string|false|none|
|» » name|body|string|true|Cardholder's full name as it appears on the card.|
|» » number|body|string|true|The card number, as a string without any separators. On read all but the last four digits will be masked for security.|
|» » cvc|body|integer|true|Card security code, 3 or 4 digits usually found on the back of the card.|
|» » exp_month|body|integer(int64)|true|Two-digit number representing the card's expiration month.|
|» » exp_year|body|integer(int64)|true|Four-digit number representing the card's expiration year.|
|» » address_line1|body|string|false|none|
|» » address_line2|body|string|false|none|
|» » address_city|body|string|false|none|
|» » address_country|body|string|true|none|
|» » address_post_code|body|string|false|none|
|» » *anyOf*|body|object|false|A bank account to take payment from. Must be able to make payments in the currency specified in the payment.|
|» » object|body|string|false|none|
|» » name|body|string|true|none|
|» » number|body|string|true|The account number for the bank account, in string form. Must be a current account.|
|» » sort_code|body|string|false|The sort code for the bank account, in string form. Must be a six-digit number.|
|» » account_type|body|string|true|The type of entity that holds the account. This can be either `individual` or `company`.|
|» » bank_name|body|string|true|The name of the bank associated with the routing number.|
|» » country|body|string|true|Two-letter country code (ISO 3166-1 alpha-2).|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» currency|bam|
|» currency|bgn|
|» currency|chf|
|» currency|eur|
|» currency|gbp|
|» currency|nok|
|» currency|sek|
|» currency|try|
|» » account_type|individual|
|» » account_type|company|

> Example responses

> 200 Response

```json
{
  "id": "2e3b4f5a-6b7c-8d9e-0f1a-2b3c4d5e6f7a",
  "amount": 49.99,
  "currency": "gbp",
  "source": {
    "object": "card",
    "name": "J. Doe",
    "number": "************4242",
    "cvc": 123,
    "exp_month": 12,
    "exp_year": 2025,
    "address_country": "gb",
    "address_post_code": "N12 9XX"
  },
  "status": "succeeded",
  "links": {
    "booking": "https://api.example.com/bookings/1725ff48-ab45-4bb5-9d02-88745177dedb/payment"
  }
}
```

> 400 Response

```json
{
  "type": "https://example.com/errors/bad-request",
  "title": "Bad Request",
  "status": 400,
  "detail": "The request is invalid or missing required parameters."
}
```

> 401 Response

```json
{
  "type": "https://example.com/errors/unauthorized",
  "title": "Unauthorized",
  "status": 401,
  "detail": "You do not have the necessary permissions."
}
```

> 403 Response

```json
{
  "type": "https://example.com/errors/forbidden",
  "title": "Forbidden",
  "status": 403,
  "detail": "Access is forbidden for the provided credentials."
}
```

> 429 Response

```json
{
  "type": "https://example.com/errors/too-many-requests",
  "title": "Too Many Requests",
  "status": 429,
  "detail": "You have exceeded the rate limit."
}
```

> 500 Response

```json
{
  "type": "https://example.com/errors/internal-server-error",
  "title": "Internal Server Error",
  "status": 500,
  "detail": "An unexpected error occurred."
}
```

<h3 id="pay-for-a-booking-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Payment successful|Inline|
|400|Bad Request|Bad Request|[Problem](#schemaproblem)|
|401|Unauthorized|Unauthorized|[Problem](#schemaproblem)|
|403|Forbidden|Forbidden|[Problem](#schemaproblem)|
|429|Too Many Requests|Too Many Requests|[Problem](#schemaproblem)|
|500|Internal Server Error|Internal Server Error|[Problem](#schemaproblem)|

<h3 id="pay-for-a-booking-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|read-only|Unique identifier for the payment. This will be a unique identifier for the payment, and is used to reference the payment in other objects.|
|amount|number|false|none|Amount intended to be collected by this payment. A positive decimal figure describing the amount to be collected.|
|currency|string|false|none|Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase.|
|source|object|false|none|The payment source to take the payment from. This can be a card or a bank account. Some of these properties will be hidden on read to protect PII leaking.|
|» *anyOf*|object|false|none|A card (debit or credit) to take payment from.|
|» object|string|false|none|none|
|» name|string|true|none|Cardholder's full name as it appears on the card.|
|» number|string|true|none|The card number, as a string without any separators. On read all but the last four digits will be masked for security.|
|» exp_month|integer(int64)|true|none|Two-digit number representing the card's expiration month.|
|» exp_year|integer(int64)|true|none|Four-digit number representing the card's expiration year.|
|» address_city|string|false|none|none|
|» address_country|string|true|none|none|
|» address_post_code|string|false|none|none|
|» *anyOf*|object|false|none|A bank account to take payment from. Must be able to make payments in the currency specified in the payment.|
|» object|string|false|none|none|
|» name|string|true|none|none|
|» number|string|true|none|The account number for the bank account, in string form. Must be a current account.|
|» sort_code|string|false|none|The sort code for the bank account, in string form. Must be a six-digit number.|
|» account_type|string|true|none|The type of entity that holds the account. This can be either `individual` or `company`.|
|» bank_name|string|true|none|The name of the bank associated with the routing number.|
|» country|string|true|none|Two-letter country code (ISO 3166-1 alpha-2).|
|status|string|false|read-only|The status of the payment, one of `pending`, `succeeded`, or `failed`.|
|links|[Links-Booking](#schemalinks-booking)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|currency|bam|
|currency|bgn|
|currency|chf|
|currency|eur|
|currency|gbp|
|currency|nok|
|currency|sek|
|currency|try|
|» account_type|individual|
|» account_type|company|
|status|pending|
|status|succeeded|
|status|failed|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|RateLimit|string||The RateLimit header is communicate quota policies, and contains a `limit` to<br>conveys the expiring limit, `remaining` to convey the remaining quota units,<br>and `reset` to convey the time window reset time.<br>|
|400|RateLimit|string||The RateLimit header is communicate quota policies, and contains a `limit` to<br>conveys the expiring limit, `remaining` to convey the remaining quota units,<br>and `reset` to convey the time window reset time.<br>|
|401|RateLimit|string||The RateLimit header is communicate quota policies, and contains a `limit` to<br>conveys the expiring limit, `remaining` to convey the remaining quota units,<br>and `reset` to convey the time window reset time.<br>|
|403|RateLimit|string||The RateLimit header is communicate quota policies, and contains a `limit` to<br>conveys the expiring limit, `remaining` to convey the remaining quota units,<br>and `reset` to convey the time window reset time.<br>|
|429|RateLimit|string||The RateLimit header is communicate quota policies, and contains a `limit` to<br>conveys the expiring limit, `remaining` to convey the remaining quota units,<br>and `reset` to convey the time window reset time.<br>|
|429|Retry-After|string||The Retry-After header indicates how long the user agent should wait before making a follow-up request. <br>The value is in seconds and can be an integer or a date in the future. <br>If the value is an integer, it indicates the number of seconds to wait. <br>If the value is a date, it indicates the time at which the user agent should make a follow-up request. <br>|
|500|RateLimit|string||The RateLimit header is communicate quota policies, and contains a `limit` to<br>conveys the expiring limit, `remaining` to convey the remaining quota units,<br>and `reset` to convey the time window reset time.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read )
</aside>

<h1 id="train-travel-api-webhooks">Webhooks</h1>

## New Booking

<a id="opIdnew-booking"></a>

`POST newBooking`

Subscribe to new bookings being created, to update integrations for your users.  Related data is available via the links provided in the request.


> Body parameter

```json
{
  "id": "efdbb9d1-02c2-4bc3-afb7-6788d8782b1e",
  "trip_id": "efdbb9d1-02c2-4bc3-afb7-6788d8782b1e",
  "passenger_name": "John Doe",
  "has_bicycle": true,
  "has_dog": true,
  "links": {
    "self": "https://api.example.com/bookings/1725ff48-ab45-4bb5-9d02-88745177dedb"
  }
}
```

<h3 id="new-booking-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» trip_id|body|string(uuid)|false|Identifier of the booked trip|
|» passenger_name|body|string|false|Name of the passenger|
|» has_bicycle|body|boolean|false|Indicates whether the passenger has a bicycle.|
|» has_dog|body|boolean|false|Indicates whether the passenger has a dog.|
|» links|body|object|false|none|
|» » self|body|string(uri)|false|none|
|» » next|body|string(uri)|false|none|
|» » prev|body|string(uri)|false|none|

<h3 id="new-booking-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Return a 200 status to indicate that the data was received successfully.|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|RateLimit|string||The RateLimit header is communicate quota policies, and contains a `limit` to<br>conveys the expiring limit, `remaining` to convey the remaining quota units,<br>and `reset` to convey the time window reset time.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read )
</aside>

# Schemas

<h2 id="tocS_Station">Station</h2>
<!-- backwards compatibility -->
<a id="schemastation"></a>
<a id="schema_Station"></a>
<a id="tocSstation"></a>
<a id="tocsstation"></a>

```json
{
  "id": "efdbb9d1-02c2-4bc3-afb7-6788d8782b1e",
  "name": "Berlin Hauptbahnhof",
  "address": "Invalidenstraße 10557 Berlin, Germany",
  "country_code": "DE",
  "timezone": "Europe/Berlin"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|none|Unique identifier for the station.|
|name|string|true|none|The name of the station|
|address|string|true|none|The address of the station.|
|country_code|string(iso-country-code)|true|none|The country code of the station.|
|timezone|string|false|none|The timezone of the station in the [IANA Time Zone Database format](https://www.iana.org/time-zones).|

<h2 id="tocS_Links-Self">Links-Self</h2>
<!-- backwards compatibility -->
<a id="schemalinks-self"></a>
<a id="schema_Links-Self"></a>
<a id="tocSlinks-self"></a>
<a id="tocslinks-self"></a>

```json
{
  "self": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|self|string(uri)|false|none|none|

<h2 id="tocS_Links-Pagination">Links-Pagination</h2>
<!-- backwards compatibility -->
<a id="schemalinks-pagination"></a>
<a id="schema_Links-Pagination"></a>
<a id="tocSlinks-pagination"></a>
<a id="tocslinks-pagination"></a>

```json
{
  "next": "http://example.com",
  "prev": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next|string(uri)|false|none|none|
|prev|string(uri)|false|none|none|

<h2 id="tocS_Problem">Problem</h2>
<!-- backwards compatibility -->
<a id="schemaproblem"></a>
<a id="schema_Problem"></a>
<a id="tocSproblem"></a>
<a id="tocsproblem"></a>

```json
{
  "type": "https://example.com/probs/out-of-credit",
  "title": "You do not have enough credit.",
  "detail": "Your current balance is 30, but that costs 50.",
  "instance": "/account/12345/msgs/abc",
  "status": 400
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|A URI reference that identifies the problem type|
|title|string|false|none|A short, human-readable summary of the problem type|
|detail|string|false|none|A human-readable explanation specific to this occurrence of the problem|
|instance|string|false|none|A URI reference that identifies the specific occurrence of the problem|
|status|integer|false|none|The HTTP status code|

<h2 id="tocS_Trip">Trip</h2>
<!-- backwards compatibility -->
<a id="schematrip"></a>
<a id="schema_Trip"></a>
<a id="tocStrip"></a>
<a id="tocstrip"></a>

```json
{
  "id": "4f4e4e1-c824-4d63-b37a-d8d698862f1d",
  "origin": "Berlin Hauptbahnhof",
  "destination": "Paris Gare du Nord",
  "departure_time": "2024-02-01T10:00:00Z",
  "arrival_time": "2024-02-01T16:00:00Z",
  "operator": "Deutsche Bahn",
  "price": 50,
  "bicycles_allowed": true,
  "dogs_allowed": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|Unique identifier for the trip|
|origin|string|false|none|The starting station of the trip|
|destination|string|false|none|The destination station of the trip|
|departure_time|string(date-time)|false|none|The date and time when the trip departs|
|arrival_time|string(date-time)|false|none|The date and time when the trip arrives|
|operator|string|false|none|The name of the operator of the trip|
|price|number|false|none|The cost of the trip|
|bicycles_allowed|boolean|false|none|Indicates whether bicycles are allowed on the trip|
|dogs_allowed|boolean|false|none|Indicates whether dogs are allowed on the trip|

<h2 id="tocS_Booking">Booking</h2>
<!-- backwards compatibility -->
<a id="schemabooking"></a>
<a id="schema_Booking"></a>
<a id="tocSbooking"></a>
<a id="tocsbooking"></a>

```json
{
  "id": "3f3e3e1-c824-4d63-b37a-d8d698862f1d",
  "trip_id": "4f4e4e1-c824-4d63-b37a-d8d698862f1d",
  "passenger_name": "John Doe",
  "has_bicycle": true,
  "has_dog": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|read-only|Unique identifier for the booking|
|trip_id|string(uuid)|false|none|Identifier of the booked trip|
|passenger_name|string|false|none|Name of the passenger|
|has_bicycle|boolean|false|none|Indicates whether the passenger has a bicycle.|
|has_dog|boolean|false|none|Indicates whether the passenger has a dog.|

<h2 id="tocS_Wrapper-Collection">Wrapper-Collection</h2>
<!-- backwards compatibility -->
<a id="schemawrapper-collection"></a>
<a id="schema_Wrapper-Collection"></a>
<a id="tocSwrapper-collection"></a>
<a id="tocswrapper-collection"></a>

```json
{
  "data": [
    {}
  ],
  "links": {}
}
```

This is a generic request/response wrapper which contains both data and links which serve as hypermedia controls (HATEOAS).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|false|none|The wrapper for a collection is an array of objects.|
|links|object|false|read-only|A set of hypermedia links which serve as controls for the client.|

<h2 id="tocS_BookingPayment">BookingPayment</h2>
<!-- backwards compatibility -->
<a id="schemabookingpayment"></a>
<a id="schema_BookingPayment"></a>
<a id="tocSbookingpayment"></a>
<a id="tocsbookingpayment"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "amount": 49.99,
  "currency": "bam",
  "source": {
    "object": "card",
    "name": "Francis Bourgeois",
    "number": "4242424242424242",
    "cvc": 123,
    "exp_month": 12,
    "exp_year": 2025,
    "address_line1": "string",
    "address_line2": "string",
    "address_city": "string",
    "address_country": "string",
    "address_post_code": "string"
  },
  "status": "pending"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|read-only|Unique identifier for the payment. This will be a unique identifier for the payment, and is used to reference the payment in other objects.|
|amount|number|false|none|Amount intended to be collected by this payment. A positive decimal figure describing the amount to be collected.|
|currency|string|false|none|Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase.|
|source|object|false|none|The payment source to take the payment from. This can be a card or a bank account. Some of these properties will be hidden on read to protect PII leaking.|
|status|string|false|read-only|The status of the payment, one of `pending`, `succeeded`, or `failed`.|

#### Enumerated Values

|Property|Value|
|---|---|
|currency|bam|
|currency|bgn|
|currency|chf|
|currency|eur|
|currency|gbp|
|currency|nok|
|currency|sek|
|currency|try|
|status|pending|
|status|succeeded|
|status|failed|

<h2 id="tocS_Links-Booking">Links-Booking</h2>
<!-- backwards compatibility -->
<a id="schemalinks-booking"></a>
<a id="schema_Links-Booking"></a>
<a id="tocSlinks-booking"></a>
<a id="tocslinks-booking"></a>

```json
{
  "booking": "https://api.example.com/bookings/1725ff48-ab45-4bb5-9d02-88745177dedb"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|booking|string(uri)|false|none|none|
