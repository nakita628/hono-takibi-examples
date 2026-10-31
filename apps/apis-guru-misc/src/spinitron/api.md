<h1 id="spinitron-v2-api">Spinitron v2 API v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

## Notes

**Tutorial demo** using this API is at [https://spinitron.com/v2-api-demo/](https://spinitron.com/v2-api-demo/). For web integration using iframes and/or JavaScript instead of an API, see [https://spinitron.github.io/v2-web-integration/](https://spinitron.github.io/v2-web-integration/).

**Your API key** is found in the Spinitron web app. Log in to Spinitron and go to *Automation & API* in the *Admin* menu.

**Authenticate** by presenting your API key using either HTTP Bearer Authorization
(preferred)

    curl -H 'Authorization: Bearer YOURAPIKEY' 'https://spinitron.com/api/spins'

or in the query parameter `access-token` (less secure owing to webserver
log files)

    curl 'https://spinitron.com/api/spins?access-token=YOURAPIKEY'

**Limit** per page of results is 20 by default and miximally 200.

**Try it out** below works to
generate example cURL requests but not to get responses from Spinitron. We
do not accept queries sent from web browsers. Copy-paste the cURL commands
and run them from your computer.

**Cache** the data you get from the API if you are using it in web or mobile integration. It's not ok to query the API on *every* page request you serve. The [demo](https://spinitron.com/v2-api-demo/) shows how easy it can be to implement a file cache.

An extension to this API with access to all stations for partner applications is available. Contact us.

Base URLs:

* <a href="https://spinitron.com/api">https://spinitron.com/api</a>

# Authentication

* API Key (accessToken)
    - Parameter Name: **access-token**, in: query.

- HTTP Authentication, scheme: bearer

<h1 id="spinitron-v2-api-persona">Persona</h1>

## Get Personas

> Code samples

```bash
curl https://example.com/personas \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /personas`

<h3 id="get-personas-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|query|string|false|Filter by Persona name|
|count|query|integer|false|Amount of items to return|
|page|query|integer|false|Offset, used together with count|
|fields|query|[string]|false|Allows to select only needed fields|
|expand|query|[string]|false|Allows to select extra fields|

> Example responses

> 200 Response

```json
{
  "_links": {
    "self": {
      "href": "string"
    }
  },
  "_meta": {
    "currentPage": 0,
    "pageCount": 0,
    "perPage": 0,
    "totalCount": 0
  },
  "items": [
    {
      "_links": {
        "self": {
          "href": "string"
        },
        "shows": [
          {
            "href": "string"
          }
        ]
      },
      "bio": "<p>Besides DJ'ing industrial and experimental music since 1991, Deftly has performed in industrial ...",
      "email": "example@spinitron.com",
      "id": 2832,
      "image": "https://spinitron.com/images/Persona/28/2832-img_profile-original.jpg",
      "name": "Deftly-D",
      "since": 1991,
      "website": "https://spinitron.com/example/doesnt/exist"
    }
  ]
}
```

<h3 id="get-personas-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The personas|Inline|

<h3 id="get-personas-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_links|object|false|none|none|
|» self|[Link](#schemalink)|false|none|none|
|_meta|[Pagination](#schemapagination)|false|none|none|
|items|[[Persona](#schemapersona)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
httpBearer, accessToken
</aside>

## Get Persona by id

> Code samples

```bash
curl https://example.com/personas/0 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /personas/{id}`

<h3 id="get-persona-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|none|
|fields|query|[string]|false|Allows to select only needed fields|
|expand|query|[string]|false|Allows to select extra fields|

> Example responses

> 200 Response

```json
{
  "_links": {
    "self": {
      "href": "string"
    },
    "shows": [
      {
        "href": "string"
      }
    ]
  },
  "bio": "<p>Besides DJ'ing industrial and experimental music since 1991, Deftly has performed in industrial ...",
  "email": "example@spinitron.com",
  "id": 2832,
  "image": "https://spinitron.com/images/Persona/28/2832-img_profile-original.jpg",
  "name": "Deftly-D",
  "since": 1991,
  "website": "https://spinitron.com/example/doesnt/exist"
}
```

> 404 Response

```json
{
  "code": 0,
  "message": "string",
  "name": "string",
  "status": 0,
  "type": "string"
}
```

<h3 id="get-persona-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The Persona|[Persona](#schemapersona)|
|404|Not Found|Persona not found|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
httpBearer, accessToken
</aside>

<h1 id="spinitron-v2-api-show">Show</h1>

## Returns scheduled shows optionally filtered by {start} and/or {end} datetimes

> Code samples

```bash
curl https://example.com/shows \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /shows`

**Terminology**: Spinitron defines a *show* as a radio program. A show can have one or more *schedules*,
each of which may specify either an *occurence* or a *repetition*, which represents a set of occurences.
Thus scheduled shows have occurences that, for example, may be displayed in a calendar.

In the response, `items` is an array of objects representing occurences of scheduled shows.

You may optionally filter `items` to a datetime *range* by including in the request {start} and/or {end}
parameters, both of which must be no more than one hour in the past. An occurence starting at {end} is
included in the reponse.

`itmes` can include occurences that begin *or* end within the filter range. A show that goes on air before
{start} appears in `items` if it ends *after* but not *at* {start}. An occurence starting at or before {end}
is included.

If the request omits the {start} parameter, the server sets its value to the current time so that the filter
range's start is always defined. If the request specifies {end} then the requested range is *bounded*,
otherwise it is *unbounded*.

For a bounded request, `items` includes *every* occurence of all shows occuring in the range. The only
difference between objects in `items` representing a given show will be the `start` field value.

For an unbounded request, `items` includes *only one* occurence per show, specifically, the
next occurrence after {start} of all shows occuring after {start}.

Use an unbounded request to get a straight list all shows. Use a bounded request to get a calendar/agenda
of shows expanded into occurrences by thir shedules and repetitions.

Objects in `items` are ordered first by `datetime` and then by `id`.


<h3 id="returns-scheduled-shows-optionally-filtered-by-start-andor-end-datetimes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|start|query|string(date-time)|false|The datetime starting from items must be returned. Maximum 1 hour in past.<br>|
|end|query|string(date-time)|false|The ending datetime. Maximum 1 hour in past.<br>|
|count|query|integer|false|Amount of items to return|
|page|query|integer|false|Offset, used together with count|
|fields|query|[string]|false|Allows to select only needed fields|
|expand|query|[string]|false|Allows to select extra fields|

> Example responses

> 200 Response

```json
{
  "_links": {
    "self": {
      "href": "string"
    }
  },
  "_meta": {
    "currentPage": 0,
    "pageCount": 0,
    "perPage": 0,
    "totalCount": 0
  },
  "items": [
    {
      "_links": {
        "personas": [
          {
            "href": "string"
          }
        ],
        "playlists": {
          "href": "string"
        },
        "self": {
          "href": "string"
        }
      },
      "category": "Music",
      "description": "<p>Since 2001, <strong>The High Voltage Circumcision</strong> show has delivered a full spectrum barrage of dark hard and experimental music from industrial to noise to idm to ebm to bizarre to audio collage often with a side of live guests, social consciousness, interviews, twisted humor, studio experiments and left turns.</p>",
      "duration": 10800,
      "end": "2018-04-03T02:00:00+0000",
      "hide_dj": false,
      "id": 4498,
      "image": "https://spinitron.com/images/Show/44/4498/img_show-original.jpg",
      "one_off": false,
      "since": 2001,
      "start": "2018-04-02T23:00:00+0000",
      "timezone": "America/Chicago",
      "title": "Voidstar Productions’ High Voltage Circumcision Show",
      "url": "https://spinitron.com/example/doesnt/exist"
    }
  ]
}
```

> 422 Response

```json
{
  "code": 0,
  "message": "string",
  "name": "string",
  "status": 0,
  "type": "string"
}
```

<h3 id="returns-scheduled-shows-optionally-filtered-by-start-andor-end-datetimes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The shows|Inline|
|422|Unprocessable Entity|Invalid datetimes in filter: either too old or {end} is less than {start}.<br>|[Error](#schemaerror)|

<h3 id="returns-scheduled-shows-optionally-filtered-by-start-andor-end-datetimes-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_links|object|false|none|none|
|» self|[Link](#schemalink)|false|none|none|
|_meta|[Pagination](#schemapagination)|false|none|none|
|items|[[Show](#schemashow)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
httpBearer, accessToken
</aside>

## Get a Show by id

> Code samples

```bash
curl https://example.com/shows/0 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /shows/{id}`

The response object represents the next occurence of the show specified by {id}.

Status 404 is returned if a show with {id} does not exist or if it does but all its scheduled occurences elapsed in the past.


<h3 id="get-a-show-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|none|
|fields|query|[string]|false|Allows to select only needed fields|
|expand|query|[string]|false|Allows to select extra fields|

> Example responses

> 200 Response

```json
{
  "_links": {
    "personas": [
      {
        "href": "string"
      }
    ],
    "playlists": {
      "href": "string"
    },
    "self": {
      "href": "string"
    }
  },
  "category": "Music",
  "description": "<p>Since 2001, <strong>The High Voltage Circumcision</strong> show has delivered a full spectrum barrage of dark hard and experimental music from industrial to noise to idm to ebm to bizarre to audio collage often with a side of live guests, social consciousness, interviews, twisted humor, studio experiments and left turns.</p>",
  "duration": 10800,
  "end": "2018-04-03T02:00:00+0000",
  "hide_dj": false,
  "id": 4498,
  "image": "https://spinitron.com/images/Show/44/4498/img_show-original.jpg",
  "one_off": false,
  "since": 2001,
  "start": "2018-04-02T23:00:00+0000",
  "timezone": "America/Chicago",
  "title": "Voidstar Productions’ High Voltage Circumcision Show",
  "url": "https://spinitron.com/example/doesnt/exist"
}
```

> 404 Response

```json
{
  "code": 0,
  "message": "string",
  "name": "string",
  "status": 0,
  "type": "string"
}
```

<h3 id="get-a-show-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The Show|[Show](#schemashow)|
|404|Not Found|Show not found or too old|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
httpBearer, accessToken
</aside>

<h1 id="spinitron-v2-api-playlist">Playlist</h1>

## Returns playlists optionally filtered by {start} and/or {end} datetimes

> Code samples

```bash
curl https://example.com/playlists \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /playlists`

Get Playlists optionally filtered by a datetime range.
Only past Playlists will be returned (with allowed tolerance equals 1 hour in future).

Ordered chronologically from newest to oldest.


<h3 id="returns-playlists-optionally-filtered-by-start-andor-end-datetimes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|start|query|string(date-time)|false|The datetime starting from items must be returned. Maximum 1 hour in future.<br>|
|end|query|string(date-time)|false|The ending datetime. Maximum 1 hour in future.<br>|
|show_id|query|integer|false|Filter by show|
|persona_id|query|integer|false|Filter by persona|
|count|query|integer|false|Amount of items to return|
|page|query|integer|false|Offset, used together with count|
|fields|query|[string]|false|Allows to select only needed fields|
|expand|query|[string]|false|Allows to select extra fields|

> Example responses

> 200 Response

```json
{
  "_links": {
    "self": {
      "href": "string"
    }
  },
  "_meta": {
    "currentPage": 0,
    "pageCount": 0,
    "perPage": 0,
    "totalCount": 0
  },
  "items": [
    {
      "_links": {
        "persona": {
          "href": "string"
        },
        "self": {
          "href": "string"
        },
        "show": {
          "href": "string"
        },
        "spins": {
          "href": "string"
        }
      },
      "automation": false,
      "category": "Music",
      "description": "It is a <em>cross-­cultural musical journey united in voices and rhythms</em>.",
      "duration": 3600,
      "end": "2018-03-30T14:00:00+0000",
      "episode_description": "<p>Episode description</p>",
      "episode_name": "string",
      "hide_dj": false,
      "id": 219992,
      "image": "https://spinitron.com/images/Show/44/4498/img_show-original.jpg",
      "persona_id": 2832,
      "show_id": 4498,
      "since": 1999,
      "start": "2018-03-30T13:00:00+0000",
      "timezone": "America/Chicago",
      "title": "Transworld Airwaves",
      "url": "http://example.com"
    }
  ]
}
```

<h3 id="returns-playlists-optionally-filtered-by-start-andor-end-datetimes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The playlists|Inline|

<h3 id="returns-playlists-optionally-filtered-by-start-andor-end-datetimes-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_links|object|false|none|none|
|» self|[Link](#schemalink)|false|none|none|
|_meta|[Pagination](#schemapagination)|false|none|none|
|items|[[Playlist](#schemaplaylist)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
httpBearer, accessToken
</aside>

## Get a Playlist by id

> Code samples

```bash
curl https://example.com/playlists/0 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /playlists/{id}`

The response object represents the playlist specified by {id}.

Status 404 is returned if a playlist with {id} does not exist or if it does but starts in the future (with allowed tolerance equals 1 hour in future).


<h3 id="get-a-playlist-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|none|
|fields|query|[string]|false|Allows to select only needed fields|
|expand|query|[string]|false|Allows to select extra fields|

> Example responses

> 200 Response

```json
{
  "_links": {
    "persona": {
      "href": "string"
    },
    "self": {
      "href": "string"
    },
    "show": {
      "href": "string"
    },
    "spins": {
      "href": "string"
    }
  },
  "automation": false,
  "category": "Music",
  "description": "It is a <em>cross-­cultural musical journey united in voices and rhythms</em>.",
  "duration": 3600,
  "end": "2018-03-30T14:00:00+0000",
  "episode_description": "<p>Episode description</p>",
  "episode_name": "string",
  "hide_dj": false,
  "id": 219992,
  "image": "https://spinitron.com/images/Show/44/4498/img_show-original.jpg",
  "persona_id": 2832,
  "show_id": 4498,
  "since": 1999,
  "start": "2018-03-30T13:00:00+0000",
  "timezone": "America/Chicago",
  "title": "Transworld Airwaves",
  "url": "http://example.com"
}
```

> 404 Response

```json
{
  "code": 0,
  "message": "string",
  "name": "string",
  "status": 0,
  "type": "string"
}
```

<h3 id="get-a-playlist-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The playlist|[Playlist](#schemaplaylist)|
|404|Not Found|Playlist not found or is in the future|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
httpBearer, accessToken
</aside>

<h1 id="spinitron-v2-api-spin">Spin</h1>

## Returns spins optionally filtered by {start} and/or {end} datetimes

> Code samples

```bash
curl https://example.com/spins \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /spins`

Get Spins optionally filtered by a datetime range. Only past Spins will be returned.


<h3 id="returns-spins-optionally-filtered-by-start-andor-end-datetimes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|start|query|string(date-time)|false|The datetime starting from items must be returned.<br>|
|end|query|string(date-time)|false|The ending datetime.<br>|
|playlist_id|query|integer|false|Filter by playlist|
|show_id|query|integer|false|Filter by show|
|count|query|integer|false|Amount of items to return|
|page|query|integer|false|Offset, used together with count|
|fields|query|[string]|false|Allows to select only needed fields|
|expand|query|[string]|false|Allows to select extra fields|

> Example responses

> 200 Response

```json
{
  "_links": {
    "self": {
      "href": "string"
    }
  },
  "_meta": {
    "currentPage": 0,
    "pageCount": 0,
    "perPage": 0,
    "totalCount": 0
  },
  "items": [
    {
      "_links": {
        "playlist": {
          "href": "string"
        },
        "self": {
          "href": "string"
        }
      },
      "artist": "The Beatles",
      "artist-custom": "string",
      "catalog-number": "5C 006-04982",
      "classical": false,
      "composer": "Lennon - McCartney",
      "conductor": "Herbert von Karajan",
      "duration": 199,
      "end": "2018-03-30T13:10:25+0000",
      "ensemble": "Vienna Philharmonic Orchestra",
      "genre": "Pop",
      "id": 8017277,
      "image": "https://is5-ssl.mzstatic.com/image/thumb/Music3/v4/ef/e8/67/efe8674e-467a-adfe-9f67-8d50860b4f1e/dj.sokyjuyt.jpg/170x170bb.jpg",
      "isrc": "GBAYE9901218",
      "iswc": "T-010.434.166-3",
      "label": "Apple Records",
      "label-custom": "string",
      "local": false,
      "medium": "7\"",
      "new": false,
      "note": "B-side of the <strong>original</strong> 7\" vinyl in the station's collection.",
      "performers": "Rohan DeSaram (cello), Marianne Schroeder (piano)",
      "playlist_id": 336722,
      "release": "All Together Now / Hey Bulldog",
      "release-custom": "string",
      "released": 1972,
      "request": false,
      "song": "Hey Bulldog",
      "start": "2018-03-30T13:07:08+0000",
      "timezone": "America/Chicago",
      "upc": "4006408126775",
      "va": false,
      "work": "The Marriage of Figaro"
    }
  ]
}
```

<h3 id="returns-spins-optionally-filtered-by-start-andor-end-datetimes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The spins|Inline|

<h3 id="returns-spins-optionally-filtered-by-start-andor-end-datetimes-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_links|object|false|none|none|
|» self|[Link](#schemalink)|false|none|none|
|_meta|[Pagination](#schemapagination)|false|none|none|
|items|[[Spin](#schemaspin)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
httpBearer, accessToken
</aside>

## Log a Spin

> Code samples

```bash
curl https://example.com/spins \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'artist=string&composer=string&duration=0&genre=string&isrc=string&label=string&live=true&release=string&song=string&start=1970-01-01T00%3A00%3A00Z'
```

`POST /spins`

An endpoint for automation systems to log spins into the spin table.

> Body parameter

```yaml
artist: string
composer: string
duration: 0
genre: string
isrc: string
label: string
live: true
release: string
song: string
start: "1970-01-01T00:00:00Z"
```

<h3 id="log-a-spin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» artist|body|string|true|none|
|» composer|body|string|false|none|
|» duration|body|integer|false|none|
|» genre|body|string|false|none|
|» isrc|body|string|false|none|
|» label|body|string|false|none|
|» live|body|boolean|false|Only when automation params are configured with the "Pass through" mode.<br>Enables "live assist" mode. Default mode is "full automation".<br>|
|» release|body|string|false|none|
|» song|body|string|true|none|
|» start|body|string(date-time)|false|none|

> Example responses

> 201 Response

```json
{
  "_links": {
    "playlist": {
      "href": "string"
    },
    "self": {
      "href": "string"
    }
  },
  "artist": "The Beatles",
  "artist-custom": "string",
  "catalog-number": "5C 006-04982",
  "classical": false,
  "composer": "Lennon - McCartney",
  "conductor": "Herbert von Karajan",
  "duration": 199,
  "end": "2018-03-30T13:10:25+0000",
  "ensemble": "Vienna Philharmonic Orchestra",
  "genre": "Pop",
  "id": 8017277,
  "image": "https://is5-ssl.mzstatic.com/image/thumb/Music3/v4/ef/e8/67/efe8674e-467a-adfe-9f67-8d50860b4f1e/dj.sokyjuyt.jpg/170x170bb.jpg",
  "isrc": "GBAYE9901218",
  "iswc": "T-010.434.166-3",
  "label": "Apple Records",
  "label-custom": "string",
  "local": false,
  "medium": "7\"",
  "new": false,
  "note": "B-side of the <strong>original</strong> 7\" vinyl in the station's collection.",
  "performers": "Rohan DeSaram (cello), Marianne Schroeder (piano)",
  "playlist_id": 336722,
  "release": "All Together Now / Hey Bulldog",
  "release-custom": "string",
  "released": 1972,
  "request": false,
  "song": "Hey Bulldog",
  "start": "2018-03-30T13:07:08+0000",
  "timezone": "America/Chicago",
  "upc": "4006408126775",
  "va": false,
  "work": "The Marriage of Figaro"
}
```

> 422 Response

```json
[
  {
    "field": "string",
    "message": "string"
  }
]
```

> default Response

```json
{
  "code": 0,
  "message": "string",
  "name": "string",
  "status": 0,
  "type": "string"
}
```

<h3 id="log-a-spin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The new created Spin.|[Spin](#schemaspin)|
|422|Unprocessable Entity|Validation failed.|Inline|
|default|Default|Failed to create the object for unknown reason.|[Error](#schemaerror)|

<h3 id="log-a-spin-responseschema">Response Schema</h3>

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ValidationError](#schemavalidationerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
httpBearer, accessToken
</aside>

## Get a Spin by id

> Code samples

```bash
curl https://example.com/spins/0 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /spins/{id}`

<h3 id="get-a-spin-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|none|
|fields|query|[string]|false|Allows to select only needed fields|
|expand|query|[string]|false|Allows to select extra fields|

> Example responses

> 200 Response

```json
{
  "_links": {
    "playlist": {
      "href": "string"
    },
    "self": {
      "href": "string"
    }
  },
  "artist": "The Beatles",
  "artist-custom": "string",
  "catalog-number": "5C 006-04982",
  "classical": false,
  "composer": "Lennon - McCartney",
  "conductor": "Herbert von Karajan",
  "duration": 199,
  "end": "2018-03-30T13:10:25+0000",
  "ensemble": "Vienna Philharmonic Orchestra",
  "genre": "Pop",
  "id": 8017277,
  "image": "https://is5-ssl.mzstatic.com/image/thumb/Music3/v4/ef/e8/67/efe8674e-467a-adfe-9f67-8d50860b4f1e/dj.sokyjuyt.jpg/170x170bb.jpg",
  "isrc": "GBAYE9901218",
  "iswc": "T-010.434.166-3",
  "label": "Apple Records",
  "label-custom": "string",
  "local": false,
  "medium": "7\"",
  "new": false,
  "note": "B-side of the <strong>original</strong> 7\" vinyl in the station's collection.",
  "performers": "Rohan DeSaram (cello), Marianne Schroeder (piano)",
  "playlist_id": 336722,
  "release": "All Together Now / Hey Bulldog",
  "release-custom": "string",
  "released": 1972,
  "request": false,
  "song": "Hey Bulldog",
  "start": "2018-03-30T13:07:08+0000",
  "timezone": "America/Chicago",
  "upc": "4006408126775",
  "va": false,
  "work": "The Marriage of Figaro"
}
```

> 404 Response

```json
{
  "code": 0,
  "message": "string",
  "name": "string",
  "status": 0,
  "type": "string"
}
```

<h3 id="get-a-spin-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The spin|[Spin](#schemaspin)|
|404|Not Found|Spin not found|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
httpBearer, accessToken
</aside>

# Schemas

<h2 id="tocS_BaseIndexResponse">BaseIndexResponse</h2>
<!-- backwards compatibility -->
<a id="schemabaseindexresponse"></a>
<a id="schema_BaseIndexResponse"></a>
<a id="tocSbaseindexresponse"></a>
<a id="tocsbaseindexresponse"></a>

```json
{
  "_links": {
    "self": {
      "href": "string"
    }
  },
  "_meta": {
    "currentPage": 0,
    "pageCount": 0,
    "perPage": 0,
    "totalCount": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_links|object|false|none|none|
|_meta|[Pagination](#schemapagination)|false|none|none|

<h2 id="tocS_Error">Error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_Error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
{
  "code": 0,
  "message": "string",
  "name": "string",
  "status": 0,
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|message|string|false|none|none|
|name|string|false|none|none|
|status|integer|false|none|none|
|type|string|false|none|none|

<h2 id="tocS_Link">Link</h2>
<!-- backwards compatibility -->
<a id="schemalink"></a>
<a id="schema_Link"></a>
<a id="tocSlink"></a>
<a id="tocslink"></a>

```json
{
  "href": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|href|string|false|none|none|

<h2 id="tocS_Pagination">Pagination</h2>
<!-- backwards compatibility -->
<a id="schemapagination"></a>
<a id="schema_Pagination"></a>
<a id="tocSpagination"></a>
<a id="tocspagination"></a>

```json
{
  "currentPage": 0,
  "pageCount": 0,
  "perPage": 0,
  "totalCount": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currentPage|integer|false|none|none|
|pageCount|integer|false|none|none|
|perPage|integer|false|none|none|
|totalCount|integer|false|none|none|

<h2 id="tocS_Persona">Persona</h2>
<!-- backwards compatibility -->
<a id="schemapersona"></a>
<a id="schema_Persona"></a>
<a id="tocSpersona"></a>
<a id="tocspersona"></a>

```json
{
  "_links": {
    "self": {
      "href": "string"
    },
    "shows": [
      {
        "href": "string"
      }
    ]
  },
  "bio": "<p>Besides DJ'ing industrial and experimental music since 1991, Deftly has performed in industrial ...",
  "email": "example@spinitron.com",
  "id": 2832,
  "image": "https://spinitron.com/images/Persona/28/2832-img_profile-original.jpg",
  "name": "Deftly-D",
  "since": 1991,
  "website": "https://spinitron.com/example/doesnt/exist"
}
```

The `Persona` object describes a radio DJ/host. One person can have multiple personas

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_links|object|false|none|none|
|bio|string|false|none|HTML-formatted biography|
|email|string(email)|false|none|DJ/host's email address|
|id|integer|false|none|none|
|image|string(url)|false|none|none|
|name|string|false|none|On-air DJ/host name|
|since|integer(year)|false|none|Since what year has the DJ/host been at the station?|
|website|string(url)|false|none|URL to web site for the DJ/host|

<h2 id="tocS_Playlist">Playlist</h2>
<!-- backwards compatibility -->
<a id="schemaplaylist"></a>
<a id="schema_Playlist"></a>
<a id="tocSplaylist"></a>
<a id="tocsplaylist"></a>

```json
{
  "_links": {
    "persona": {
      "href": "string"
    },
    "self": {
      "href": "string"
    },
    "show": {
      "href": "string"
    },
    "spins": {
      "href": "string"
    }
  },
  "automation": false,
  "category": "Music",
  "description": "It is a <em>cross-­cultural musical journey united in voices and rhythms</em>.",
  "duration": 3600,
  "end": "2018-03-30T14:00:00+0000",
  "episode_description": "<p>Episode description</p>",
  "episode_name": "string",
  "hide_dj": false,
  "id": 219992,
  "image": "https://spinitron.com/images/Show/44/4498/img_show-original.jpg",
  "persona_id": 2832,
  "show_id": 4498,
  "since": 1999,
  "start": "2018-03-30T13:00:00+0000",
  "timezone": "America/Chicago",
  "title": "Transworld Airwaves",
  "url": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_links|object|false|none|none|
|automation|boolean|false|none|Was the playlist created playlists created by a radio station automation system?|
|category|string|false|none|Program/show category|
|description|string|false|none|HTML-formatted description of the playlist or program/show|
|duration|integer|false|none|Duration in seconds|
|end|string(date-time)|false|none|UTC datetime ISO-8601|
|episode_description|string|false|none|HTML-formatted description of the episode|
|episode_name|string|false|none|Title of this episode of the program/show|
|hide_dj|boolean|false|none|Should the client application hide information about the playlist's DJ/host?|
|id|integer|false|none|none|
|image|string(url)|false|none|none|
|persona_id|integer|false|none|none|
|show_id|integer|false|none|none|
|since|integer(year)|false|none|Since what year has the program/show existed?|
|start|string(date-time)|false|none|UTC datetime ISO-8601|
|timezone|string|false|none|Station's time zone|
|title|string|false|none|Program/show title|
|url|string(url)|false|none|URL to web site for the playlist or program/show|

<h2 id="tocS_Show">Show</h2>
<!-- backwards compatibility -->
<a id="schemashow"></a>
<a id="schema_Show"></a>
<a id="tocSshow"></a>
<a id="tocsshow"></a>

```json
{
  "_links": {
    "personas": [
      {
        "href": "string"
      }
    ],
    "playlists": {
      "href": "string"
    },
    "self": {
      "href": "string"
    }
  },
  "category": "Music",
  "description": "<p>Since 2001, <strong>The High Voltage Circumcision</strong> show has delivered a full spectrum barrage of dark hard and experimental music from industrial to noise to idm to ebm to bizarre to audio collage often with a side of live guests, social consciousness, interviews, twisted humor, studio experiments and left turns.</p>",
  "duration": 10800,
  "end": "2018-04-03T02:00:00+0000",
  "hide_dj": false,
  "id": 4498,
  "image": "https://spinitron.com/images/Show/44/4498/img_show-original.jpg",
  "one_off": false,
  "since": 2001,
  "start": "2018-04-02T23:00:00+0000",
  "timezone": "America/Chicago",
  "title": "Voidstar Productions’ High Voltage Circumcision Show",
  "url": "https://spinitron.com/example/doesnt/exist"
}
```

A `Show` object describes one occurrence of a radio program. A result set may contain multiple occurrences of the same show with difference `start` and `end` values.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_links|object|false|none|none|
|category|string|false|none|Program/show category|
|description|string|false|none|HTML-formatted description of the playlist or program/show|
|duration|integer|false|none|Duration in seconds|
|end|string(date-time)|false|none|UTC datetime ISO-8601|
|hide_dj|boolean|false|none|Should the client application hide information about the show's DJs/hosts?|
|id|integer|false|none|none|
|image|string(url)|false|none|none|
|one_off|boolean|false|none|Is the show a one-off in the schedule instead of repeating?|
|since|integer(year)|false|none|Since what year has the program/show existed?|
|start|string(date-time)|false|none|UTC datetime ISO-8601|
|timezone|string|false|none|Station's time zone|
|title|string|false|none|Program/show title|
|url|string(url)|false|none|URL to web site for the program/show|

<h2 id="tocS_Spin">Spin</h2>
<!-- backwards compatibility -->
<a id="schemaspin"></a>
<a id="schema_Spin"></a>
<a id="tocSspin"></a>
<a id="tocsspin"></a>

```json
{
  "_links": {
    "playlist": {
      "href": "string"
    },
    "self": {
      "href": "string"
    }
  },
  "artist": "The Beatles",
  "artist-custom": "string",
  "catalog-number": "5C 006-04982",
  "classical": false,
  "composer": "Lennon - McCartney",
  "conductor": "Herbert von Karajan",
  "duration": 199,
  "end": "2018-03-30T13:10:25+0000",
  "ensemble": "Vienna Philharmonic Orchestra",
  "genre": "Pop",
  "id": 8017277,
  "image": "https://is5-ssl.mzstatic.com/image/thumb/Music3/v4/ef/e8/67/efe8674e-467a-adfe-9f67-8d50860b4f1e/dj.sokyjuyt.jpg/170x170bb.jpg",
  "isrc": "GBAYE9901218",
  "iswc": "T-010.434.166-3",
  "label": "Apple Records",
  "label-custom": "string",
  "local": false,
  "medium": "7\"",
  "new": false,
  "note": "B-side of the <strong>original</strong> 7\" vinyl in the station's collection.",
  "performers": "Rohan DeSaram (cello), Marianne Schroeder (piano)",
  "playlist_id": 336722,
  "release": "All Together Now / Hey Bulldog",
  "release-custom": "string",
  "released": 1972,
  "request": false,
  "song": "Hey Bulldog",
  "start": "2018-03-30T13:07:08+0000",
  "timezone": "America/Chicago",
  "upc": "4006408126775",
  "va": false,
  "work": "The Marriage of Figaro"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_links|object|false|none|none|
|artist|string|false|none|none|
|artist-custom|string|false|none|Station-specific custom field relating to the song's artist|
|catalog-number|string|false|none|Reference number in the record label's catalog|
|classical|boolean|false|none|Is the track's metadata schema "classical" rather than "popular"?|
|composer|string|false|none|none|
|conductor|string|false|none|For classical music, conducor of the ensemble|
|duration|integer|false|none|Duration in seconds|
|end|string(date-time)|false|none|UTC datetime ISO-8601|
|ensemble|string|false|none|For classical music, orchestra, performing ensemble, choir, etc.|
|genre|string|false|none|none|
|id|integer|false|none|none|
|image|string(url)|false|none|Cover art|
|isrc|string|false|none|none|
|iswc|string|false|none|none|
|label|string|false|none|Record label, i.e. publisher of the sound recording|
|label-custom|string|false|none|Station-specific custom field relating to the record label|
|local|boolean|false|none|Is the artist local to the station?|
|medium|string|false|none|Media format in which the sound recording was reased|
|new|boolean|false|none|Is this a recent release?|
|note|string|false|none|HTML-formatted DJ annotation of the spin, can include images etc.|
|performers|string|false|none|For classical music, featured performing artists, e.g. soloists|
|playlist_id|integer|false|none|none|
|release|string|false|none|none|
|release-custom|string|false|none|Station-specific custom field relating to the release|
|released|integer|false|none|Year of initial release|
|request|boolean|false|none|Was the spin requested by a listener?|
|song|string|false|none|Title of the song or track|
|start|string(date-time)|false|none|UTC datetime ISO-8601|
|timezone|string|false|none|Station's time zone|
|upc|string|false|none|Universal Product Code of the release|
|va|boolean|false|none|Is it a "Various Artists" release?|
|work|string|false|none|For classical music, the main compositional work the track (see `song` field) belongs to|

<h2 id="tocS_ValidationError">ValidationError</h2>
<!-- backwards compatibility -->
<a id="schemavalidationerror"></a>
<a id="schema_ValidationError"></a>
<a id="tocSvalidationerror"></a>
<a id="tocsvalidationerror"></a>

```json
{
  "field": "string",
  "message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|field|string|false|none|none|
|message|string|false|none|none|
