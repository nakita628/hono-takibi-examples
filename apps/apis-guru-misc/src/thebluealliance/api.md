<h1 id="the-blue-alliance-api-v3">The Blue Alliance API v3 v3.8.2</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

# Overview 

 Information and statistics about FIRST Robotics Competition teams and events. 

# Authentication 

All endpoints require an Auth Key to be passed in the header `X-TBA-Auth-Key`. If you do not have an auth key yet, you can obtain one from your [Account Page](/account).

Base URLs:

* <a href="https://www.thebluealliance.com/api/v3">https://www.thebluealliance.com/api/v3</a>

# Authentication

* API Key (apiKey)
    - Parameter Name: **X-TBA-Auth-Key**, in: header. Your TBA v3 API Key can be obtained from your [Account Page](/account) on the TBA website.

<h1 id="the-blue-alliance-api-v3-tba">TBA</h1>

Calls that expose TBA internals or status.

## getStatus

<a id="opIdgetStatus"></a>

> Code samples

```bash
curl https://example.com/status \
  -H 'Accept: application/json' \
  -H "X-TBA-Auth-Key: ${API_KEY}"
```

`GET /status`

Returns API status, and TBA status information.

<h3 id="getstatus-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-None-Match|header|string|false|Value of the `ETag` header in the most recently cached response by the client.|

> Example responses

> 200 Response

```json
{
  "android": {
    "latest_app_version": 0,
    "min_app_version": 0
  },
  "current_season": 0,
  "down_events": [
    "string"
  ],
  "ios": {
    "latest_app_version": 0,
    "min_app_version": 0
  },
  "is_datafeed_down": true,
  "max_season": 0
}
```

<h3 id="getstatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[API_Status](#schemaapi_status)|
|304|Not Modified|Not Modified - Use Local Cached Value|None|
|401|Unauthorized||None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Cache-Control|string||The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.|
|200|ETag|string||Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

<h1 id="the-blue-alliance-api-v3-list">list</h1>

Calls that return a list of records.

## getTeamEventsStatusesByYear

<a id="opIdgetTeamEventsStatusesByYear"></a>

> Code samples

```bash
curl https://example.com/team/string/events/0/statuses \
  -H 'Accept: application/json' \
  -H "X-TBA-Auth-Key: ${API_KEY}"
```

`GET /team/{team_key}/events/{year}/statuses`

Gets a key-value list of the event statuses for events this team has competed at in the given year.

<h3 id="getteameventsstatusesbyyear-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-None-Match|header|string|false|Value of the `ETag` header in the most recently cached response by the client.|
|team_key|path|string|true|TBA Team Key, eg `frc254`|
|year|path|integer|true|Competition Year (or Season). Must be 4 digits.|

> Example responses

> 200 Response

```json
{
  "property1": {
    "alliance": {
      "backup": {
        "in": "string",
        "out": "string"
      },
      "name": "string",
      "number": 0,
      "pick": 0
    },
    "alliance_status_str": "string",
    "last_match_key": "string",
    "next_match_key": "string",
    "overall_status_str": "string",
    "playoff": {
      "current_level_record": {
        "losses": 0,
        "ties": 0,
        "wins": 0
      },
      "level": "qm",
      "playoff_average": 0,
      "record": {
        "losses": 0,
        "ties": 0,
        "wins": 0
      },
      "status": "won"
    },
    "playoff_status_str": "string",
    "qual": {
      "num_teams": 0,
      "ranking": {
        "dq": 0,
        "matches_played": 0,
        "qual_average": 0,
        "rank": 0,
        "record": {
          "losses": 0,
          "ties": 0,
          "wins": 0
        },
        "sort_orders": [
          0
        ],
        "team_key": "string"
      },
      "sort_order_info": [
        {
          "name": "string",
          "precision": 0
        }
      ],
      "status": "string"
    }
  },
  "property2": {
    "alliance": {
      "backup": {
        "in": "string",
        "out": "string"
      },
      "name": "string",
      "number": 0,
      "pick": 0
    },
    "alliance_status_str": "string",
    "last_match_key": "string",
    "next_match_key": "string",
    "overall_status_str": "string",
    "playoff": {
      "current_level_record": {
        "losses": 0,
        "ties": 0,
        "wins": 0
      },
      "level": "qm",
      "playoff_average": 0,
      "record": {
        "losses": 0,
        "ties": 0,
        "wins": 0
      },
      "status": "won"
    },
    "playoff_status_str": "string",
    "qual": {
      "num_teams": 0,
      "ranking": {
        "dq": 0,
        "matches_played": 0,
        "qual_average": 0,
        "rank": 0,
        "record": {
          "losses": 0,
          "ties": 0,
          "wins": 0
        },
        "sort_orders": [
          0
        ],
        "team_key": "string"
      },
      "sort_order_info": [
        {
          "name": "string",
          "precision": 0
        }
      ],
      "status": "string"
    }
  }
}
```

<h3 id="getteameventsstatusesbyyear-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|Inline|
|304|Not Modified|Not Modified - Use Local Cached Value|None|
|401|Unauthorized||None|

<h3 id="getteameventsstatusesbyyear-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[Team_Event_Status](#schemateam_event_status)|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Cache-Control|string||The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.|
|200|ETag|string||Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

<h1 id="the-blue-alliance-api-v3-team">team</h1>

Calls that return team or team-specific information.

## getTeam

<a id="opIdgetTeam"></a>

> Code samples

```bash
curl https://example.com/team/string \
  -H 'Accept: application/json' \
  -H "X-TBA-Auth-Key: ${API_KEY}"
```

`GET /team/{team_key}`

Gets a `Team` object for the team referenced by the given key.

<h3 id="getteam-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-None-Match|header|string|false|Value of the `ETag` header in the most recently cached response by the client.|
|team_key|path|string|true|TBA Team Key, eg `frc254`|

> Example responses

> 200 Response

```json
{
  "address": "string",
  "city": "string",
  "country": "string",
  "gmaps_place_id": "string",
  "gmaps_url": "http://example.com",
  "home_championship": {},
  "key": "string",
  "lat": 0,
  "lng": 0,
  "location_name": "string",
  "motto": "string",
  "name": "string",
  "nickname": "string",
  "postal_code": "string",
  "rookie_year": 0,
  "school_name": "string",
  "state_prov": "string",
  "team_number": 0,
  "website": "http://example.com"
}
```

<h3 id="getteam-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Team](#schemateam)|
|304|Not Modified|Not Modified - Use Local Cached Value|None|
|401|Unauthorized||None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Cache-Control|string||The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.|
|200|ETag|string||Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## getTeamAwards

<a id="opIdgetTeamAwards"></a>

> Code samples

```bash
curl https://example.com/team/string/awards \
  -H 'Accept: application/json' \
  -H "X-TBA-Auth-Key: ${API_KEY}"
```

`GET /team/{team_key}/awards`

Gets a list of awards the given team has won.

<h3 id="getteamawards-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-None-Match|header|string|false|Value of the `ETag` header in the most recently cached response by the client.|
|team_key|path|string|true|TBA Team Key, eg `frc254`|

> Example responses

> 200 Response

```json
[
  {
    "award_type": 0,
    "event_key": "string",
    "name": "string",
    "recipient_list": [
      {
        "awardee": "string",
        "team_key": "string"
      }
    ],
    "year": 0
  }
]
```

<h3 id="getteamawards-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|Inline|
|304|Not Modified|Not Modified - Use Local Cached Value|None|
|401|Unauthorized||None|

<h3 id="getteamawards-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Award](#schemaaward)]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Cache-Control|string||The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.|
|200|ETag|string||Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## getTeamAwardsByYear

<a id="opIdgetTeamAwardsByYear"></a>

> Code samples

```bash
curl https://example.com/team/string/awards/0 \
  -H 'Accept: application/json' \
  -H "X-TBA-Auth-Key: ${API_KEY}"
```

`GET /team/{team_key}/awards/{year}`

Gets a list of awards the given team has won in a given year.

<h3 id="getteamawardsbyyear-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-None-Match|header|string|false|Value of the `ETag` header in the most recently cached response by the client.|
|team_key|path|string|true|TBA Team Key, eg `frc254`|
|year|path|integer|true|Competition Year (or Season). Must be 4 digits.|

> Example responses

> 200 Response

```json
[
  {
    "award_type": 0,
    "event_key": "string",
    "name": "string",
    "recipient_list": [
      {
        "awardee": "string",
        "team_key": "string"
      }
    ],
    "year": 0
  }
]
```

<h3 id="getteamawardsbyyear-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|Inline|
|304|Not Modified|Not Modified - Use Local Cached Value|None|
|401|Unauthorized||None|

<h3 id="getteamawardsbyyear-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Award](#schemaaward)]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Cache-Control|string||The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.|
|200|ETag|string||Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## getTeamDistricts

<a id="opIdgetTeamDistricts"></a>

> Code samples

```bash
curl https://example.com/team/string/districts \
  -H 'Accept: application/json' \
  -H "X-TBA-Auth-Key: ${API_KEY}"
```

`GET /team/{team_key}/districts`

Gets an array of districts representing each year the team was in a district. Will return an empty array if the team was never in a district.

<h3 id="getteamdistricts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-None-Match|header|string|false|Value of the `ETag` header in the most recently cached response by the client.|
|team_key|path|string|true|TBA Team Key, eg `frc254`|

> Example responses

> 200 Response

```json
[
  {
    "abbreviation": "string",
    "display_name": "string",
    "key": "string",
    "year": 0
  }
]
```

<h3 id="getteamdistricts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|Inline|
|304|Not Modified|Not Modified - Use Local Cached Value|None|
|401|Unauthorized||None|

<h3 id="getteamdistricts-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[District_List](#schemadistrict_list)]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Cache-Control|string||The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.|
|200|ETag|string||Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## getTeamEventAwards

<a id="opIdgetTeamEventAwards"></a>

> Code samples

```bash
curl https://example.com/team/string/event/string/awards \
  -H 'Accept: application/json' \
  -H "X-TBA-Auth-Key: ${API_KEY}"
```

`GET /team/{team_key}/event/{event_key}/awards`

Gets a list of awards the given team won at the given event.

<h3 id="getteameventawards-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-None-Match|header|string|false|Value of the `ETag` header in the most recently cached response by the client.|
|team_key|path|string|true|TBA Team Key, eg `frc254`|
|event_key|path|string|true|TBA Event Key, eg `2016nytr`|

> Example responses

> 200 Response

```json
[
  {
    "award_type": 0,
    "event_key": "string",
    "name": "string",
    "recipient_list": [
      {
        "awardee": "string",
        "team_key": "string"
      }
    ],
    "year": 0
  }
]
```

<h3 id="getteameventawards-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|Inline|
|304|Not Modified|Not Modified - Use Local Cached Value|None|
|401|Unauthorized||None|

<h3 id="getteameventawards-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Award](#schemaaward)]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Cache-Control|string||The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.|
|200|ETag|string||Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## getTeamEventMatches

<a id="opIdgetTeamEventMatches"></a>

> Code samples

```bash
curl https://example.com/team/string/event/string/matches \
  -H 'Accept: application/json' \
  -H "X-TBA-Auth-Key: ${API_KEY}"
```

`GET /team/{team_key}/event/{event_key}/matches`

Gets a list of matches for the given team and event.

<h3 id="getteameventmatches-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-None-Match|header|string|false|Value of the `ETag` header in the most recently cached response by the client.|
|team_key|path|string|true|TBA Team Key, eg `frc254`|
|event_key|path|string|true|TBA Event Key, eg `2016nytr`|

> Example responses

> 200 Response

```json
[
  {
    "actual_time": 0,
    "alliances": {
      "blue": {
        "dq_team_keys": [
          "string"
        ],
        "score": 0,
        "surrogate_team_keys": [
          "string"
        ],
        "team_keys": [
          "string"
        ]
      },
      "red": {
        "dq_team_keys": [
          "string"
        ],
        "score": 0,
        "surrogate_team_keys": [
          "string"
        ],
        "team_keys": [
          "string"
        ]
      }
    },
    "comp_level": "qm",
    "event_key": "string",
    "key": "string",
    "match_number": 0,
    "post_result_time": 0,
    "predicted_time": 0,
    "score_breakdown": {},
    "set_number": 0,
    "time": 0,
    "videos": [
      {
        "key": "string",
        "type": "string"
      }
    ],
    "winning_alliance": "red"
  }
]
```

<h3 id="getteameventmatches-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|Inline|
|304|Not Modified|Not Modified - Use Local Cached Value|None|
|401|Unauthorized||None|

<h3 id="getteameventmatches-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Match](#schemamatch)]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Cache-Control|string||The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.|
|200|ETag|string||Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## getTeamEventMatchesKeys

<a id="opIdgetTeamEventMatchesKeys"></a>

> Code samples

```bash
curl https://example.com/team/string/event/string/matches/keys \
  -H 'Accept: application/json' \
  -H "X-TBA-Auth-Key: ${API_KEY}"
```

`GET /team/{team_key}/event/{event_key}/matches/keys`

Gets a list of match keys for matches for the given team and event.

<h3 id="getteameventmatcheskeys-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-None-Match|header|string|false|Value of the `ETag` header in the most recently cached response by the client.|
|team_key|path|string|true|TBA Team Key, eg `frc254`|
|event_key|path|string|true|TBA Event Key, eg `2016nytr`|

> Example responses

> 200 Response

```json
[
  "string"
]
```

<h3 id="getteameventmatcheskeys-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|Inline|
|304|Not Modified|Not Modified - Use Local Cached Value|None|
|401|Unauthorized||None|

<h3 id="getteameventmatcheskeys-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Cache-Control|string||The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.|
|200|ETag|string||Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## getTeamEventMatchesSimple

<a id="opIdgetTeamEventMatchesSimple"></a>

> Code samples

```bash
curl https://example.com/team/string/event/string/matches/simple \
  -H 'Accept: application/json' \
  -H "X-TBA-Auth-Key: ${API_KEY}"
```

`GET /team/{team_key}/event/{event_key}/matches/simple`

Gets a short-form list of matches for the given team and event.

<h3 id="getteameventmatchessimple-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-None-Match|header|string|false|Value of the `ETag` header in the most recently cached response by the client.|
|team_key|path|string|true|TBA Team Key, eg `frc254`|
|event_key|path|string|true|TBA Event Key, eg `2016nytr`|

> Example responses

> 200 Response

```json
[
  {
    "actual_time": 0,
    "alliances": {
      "blue": {
        "dq_team_keys": [
          "string"
        ],
        "score": 0,
        "surrogate_team_keys": [
          "string"
        ],
        "team_keys": [
          "string"
        ]
      },
      "red": {
        "dq_team_keys": [
          "string"
        ],
        "score": 0,
        "surrogate_team_keys": [
          "string"
        ],
        "team_keys": [
          "string"
        ]
      }
    },
    "comp_level": "qm",
    "event_key": "string",
    "key": "string",
    "match_number": 0,
    "post_result_time": 0,
    "predicted_time": 0,
    "score_breakdown": {},
    "set_number": 0,
    "time": 0,
    "videos": [
      {
        "key": "string",
        "type": "string"
      }
    ],
    "winning_alliance": "red"
  }
]
```

<h3 id="getteameventmatchessimple-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|Inline|
|304|Not Modified|Not Modified - Use Local Cached Value|None|
|401|Unauthorized||None|

<h3 id="getteameventmatchessimple-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Match](#schemamatch)]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Cache-Control|string||The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.|
|200|ETag|string||Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## getTeamEventStatus

<a id="opIdgetTeamEventStatus"></a>

> Code samples

```bash
curl https://example.com/team/string/event/string/status \
  -H 'Accept: application/json' \
  -H "X-TBA-Auth-Key: ${API_KEY}"
```

`GET /team/{team_key}/event/{event_key}/status`

Gets the competition rank and status of the team at the given event.

<h3 id="getteameventstatus-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-None-Match|header|string|false|Value of the `ETag` header in the most recently cached response by the client.|
|team_key|path|string|true|TBA Team Key, eg `frc254`|
|event_key|path|string|true|TBA Event Key, eg `2016nytr`|

> Example responses

> 200 Response

```json
{
  "alliance": {
    "backup": {
      "in": "string",
      "out": "string"
    },
    "name": "string",
    "number": 0,
    "pick": 0
  },
  "alliance_status_str": "string",
  "last_match_key": "string",
  "next_match_key": "string",
  "overall_status_str": "string",
  "playoff": {
    "current_level_record": {
      "losses": 0,
      "ties": 0,
      "wins": 0
    },
    "level": "qm",
    "playoff_average": 0,
    "record": {
      "losses": 0,
      "ties": 0,
      "wins": 0
    },
    "status": "won"
  },
  "playoff_status_str": "string",
  "qual": {
    "num_teams": 0,
    "ranking": {
      "dq": 0,
      "matches_played": 0,
      "qual_average": 0,
      "rank": 0,
      "record": {
        "losses": 0,
        "ties": 0,
        "wins": 0
      },
      "sort_orders": [
        0
      ],
      "team_key": "string"
    },
    "sort_order_info": [
      {
        "name": "string",
        "precision": 0
      }
    ],
    "status": "string"
  }
}
```

<h3 id="getteameventstatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Team_Event_Status](#schemateam_event_status)|
|304|Not Modified|Not Modified - Use Local Cached Value|None|
|401|Unauthorized||None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Cache-Control|string||The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.|
|200|ETag|string||Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## getTeamEvents

<a id="opIdgetTeamEvents"></a>

> Code samples

```bash
curl https://example.com/team/string/events \
  -H 'Accept: application/json' \
  -H "X-TBA-Auth-Key: ${API_KEY}"
```

`GET /team/{team_key}/events`

Gets a list of all events this team has competed at.

<h3 id="getteamevents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-None-Match|header|string|false|Value of the `ETag` header in the most recently cached response by the client.|
|team_key|path|string|true|TBA Team Key, eg `frc254`|

> Example responses

> 200 Response

```json
[
  {
    "address": "string",
    "city": "string",
    "country": "string",
    "district": {
      "abbreviation": "string",
      "display_name": "string",
      "key": "string",
      "year": 0
    },
    "division_keys": [
      "string"
    ],
    "end_date": "1970-01-01",
    "event_code": "string",
    "event_type": 0,
    "event_type_string": "string",
    "first_event_code": "string",
    "first_event_id": "string",
    "gmaps_place_id": "string",
    "gmaps_url": "http://example.com",
    "key": "string",
    "lat": 0,
    "lng": 0,
    "location_name": "string",
    "name": "string",
    "parent_event_key": "string",
    "playoff_type": 0,
    "playoff_type_string": "string",
    "postal_code": "string",
    "short_name": "string",
    "start_date": "1970-01-01",
    "state_prov": "string",
    "timezone": "string",
    "webcasts": [
      {
        "channel": "string",
        "date": "string",
        "file": "string",
        "type": "youtube"
      }
    ],
    "website": "string",
    "week": 0,
    "year": 0
  }
]
```

<h3 id="getteamevents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|Inline|
|304|Not Modified|Not Modified - Use Local Cached Value|None|
|401|Unauthorized||None|

<h3 id="getteamevents-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Event](#schemaevent)]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Cache-Control|string||The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.|
|200|ETag|string||Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## getTeamEventsKeys

<a id="opIdgetTeamEventsKeys"></a>

> Code samples

```bash
curl https://example.com/team/string/events/keys \
  -H 'Accept: application/json' \
  -H "X-TBA-Auth-Key: ${API_KEY}"
```

`GET /team/{team_key}/events/keys`

Gets a list of the event keys for all events this team has competed at.

<h3 id="getteameventskeys-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-None-Match|header|string|false|Value of the `ETag` header in the most recently cached response by the client.|
|team_key|path|string|true|TBA Team Key, eg `frc254`|

> Example responses

> 200 Response

```json
[
  "string"
]
```

<h3 id="getteameventskeys-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|Inline|
|304|Not Modified|Not Modified - Use Local Cached Value|None|
|401|Unauthorized||None|

<h3 id="getteameventskeys-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Cache-Control|string||The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.|
|200|ETag|string||Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## getTeamEventsSimple

<a id="opIdgetTeamEventsSimple"></a>

> Code samples

```bash
curl https://example.com/team/string/events/simple \
  -H 'Accept: application/json' \
  -H "X-TBA-Auth-Key: ${API_KEY}"
```

`GET /team/{team_key}/events/simple`

Gets a short-form list of all events this team has competed at.

<h3 id="getteameventssimple-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-None-Match|header|string|false|Value of the `ETag` header in the most recently cached response by the client.|
|team_key|path|string|true|TBA Team Key, eg `frc254`|

> Example responses

> 200 Response

```json
[
  {
    "city": "string",
    "country": "string",
    "district": {
      "abbreviation": "string",
      "display_name": "string",
      "key": "string",
      "year": 0
    },
    "end_date": "1970-01-01",
    "event_code": "string",
    "event_type": 0,
    "key": "string",
    "name": "string",
    "start_date": "1970-01-01",
    "state_prov": "string",
    "year": 0
  }
]
```

<h3 id="getteameventssimple-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|Inline|
|304|Not Modified|Not Modified - Use Local Cached Value|None|
|401|Unauthorized||None|

<h3 id="getteameventssimple-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Event_Simple](#schemaevent_simple)]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Cache-Control|string||The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.|
|200|ETag|string||Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## getTeamEventsByYear

<a id="opIdgetTeamEventsByYear"></a>

> Code samples

```bash
curl https://example.com/team/string/events/0 \
  -H 'Accept: application/json' \
  -H "X-TBA-Auth-Key: ${API_KEY}"
```

`GET /team/{team_key}/events/{year}`

Gets a list of events this team has competed at in the given year.

<h3 id="getteameventsbyyear-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-None-Match|header|string|false|Value of the `ETag` header in the most recently cached response by the client.|
|team_key|path|string|true|TBA Team Key, eg `frc254`|
|year|path|integer|true|Competition Year (or Season). Must be 4 digits.|

> Example responses

> 200 Response

```json
[
  {
    "address": "string",
    "city": "string",
    "country": "string",
    "district": {
      "abbreviation": "string",
      "display_name": "string",
      "key": "string",
      "year": 0
    },
    "division_keys": [
      "string"
    ],
    "end_date": "1970-01-01",
    "event_code": "string",
    "event_type": 0,
    "event_type_string": "string",
    "first_event_code": "string",
    "first_event_id": "string",
    "gmaps_place_id": "string",
    "gmaps_url": "http://example.com",
    "key": "string",
    "lat": 0,
    "lng": 0,
    "location_name": "string",
    "name": "string",
    "parent_event_key": "string",
    "playoff_type": 0,
    "playoff_type_string": "string",
    "postal_code": "string",
    "short_name": "string",
    "start_date": "1970-01-01",
    "state_prov": "string",
    "timezone": "string",
    "webcasts": [
      {
        "channel": "string",
        "date": "string",
        "file": "string",
        "type": "youtube"
      }
    ],
    "website": "string",
    "week": 0,
    "year": 0
  }
]
```

<h3 id="getteameventsbyyear-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|Inline|
|304|Not Modified|Not Modified - Use Local Cached Value|None|
|401|Unauthorized||None|

<h3 id="getteameventsbyyear-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Event](#schemaevent)]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Cache-Control|string||The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.|
|200|ETag|string||Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## getTeamEventsByYearKeys

<a id="opIdgetTeamEventsByYearKeys"></a>

> Code samples

```bash
curl https://example.com/team/string/events/0/keys \
  -H 'Accept: application/json' \
  -H "X-TBA-Auth-Key: ${API_KEY}"
```

`GET /team/{team_key}/events/{year}/keys`

Gets a list of the event keys for events this team has competed at in the given year.

<h3 id="getteameventsbyyearkeys-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-None-Match|header|string|false|Value of the `ETag` header in the most recently cached response by the client.|
|team_key|path|string|true|TBA Team Key, eg `frc254`|
|year|path|integer|true|Competition Year (or Season). Must be 4 digits.|

> Example responses

> 200 Response

```json
[
  "string"
]
```

<h3 id="getteameventsbyyearkeys-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|Inline|
|304|Not Modified|Not Modified - Use Local Cached Value|None|
|401|Unauthorized||None|

<h3 id="getteameventsbyyearkeys-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Cache-Control|string||The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.|
|200|ETag|string||Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## getTeamEventsByYearSimple

<a id="opIdgetTeamEventsByYearSimple"></a>

> Code samples

```bash
curl https://example.com/team/string/events/0/simple \
  -H 'Accept: application/json' \
  -H "X-TBA-Auth-Key: ${API_KEY}"
```

`GET /team/{team_key}/events/{year}/simple`

Gets a short-form list of events this team has competed at in the given year.

<h3 id="getteameventsbyyearsimple-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-None-Match|header|string|false|Value of the `ETag` header in the most recently cached response by the client.|
|team_key|path|string|true|TBA Team Key, eg `frc254`|
|year|path|integer|true|Competition Year (or Season). Must be 4 digits.|

> Example responses

> 200 Response

```json
[
  {
    "city": "string",
    "country": "string",
    "district": {
      "abbreviation": "string",
      "display_name": "string",
      "key": "string",
      "year": 0
    },
    "end_date": "1970-01-01",
    "event_code": "string",
    "event_type": 0,
    "key": "string",
    "name": "string",
    "start_date": "1970-01-01",
    "state_prov": "string",
    "year": 0
  }
]
```

<h3 id="getteameventsbyyearsimple-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|Inline|
|304|Not Modified|Not Modified - Use Local Cached Value|None|
|401|Unauthorized||None|

<h3 id="getteameventsbyyearsimple-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Event_Simple](#schemaevent_simple)]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Cache-Control|string||The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.|
|200|ETag|string||Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## getTeamMatchesByYear

<a id="opIdgetTeamMatchesByYear"></a>

> Code samples

```bash
curl https://example.com/team/string/matches/0 \
  -H 'Accept: application/json' \
  -H "X-TBA-Auth-Key: ${API_KEY}"
```

`GET /team/{team_key}/matches/{year}`

Gets a list of matches for the given team and year.

<h3 id="getteammatchesbyyear-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-None-Match|header|string|false|Value of the `ETag` header in the most recently cached response by the client.|
|team_key|path|string|true|TBA Team Key, eg `frc254`|
|year|path|integer|true|Competition Year (or Season). Must be 4 digits.|

> Example responses

> 200 Response

```json
[
  {
    "actual_time": 0,
    "alliances": {
      "blue": {
        "dq_team_keys": [
          "string"
        ],
        "score": 0,
        "surrogate_team_keys": [
          "string"
        ],
        "team_keys": [
          "string"
        ]
      },
      "red": {
        "dq_team_keys": [
          "string"
        ],
        "score": 0,
        "surrogate_team_keys": [
          "string"
        ],
        "team_keys": [
          "string"
        ]
      }
    },
    "comp_level": "qm",
    "event_key": "string",
    "key": "string",
    "match_number": 0,
    "post_result_time": 0,
    "predicted_time": 0,
    "score_breakdown": {},
    "set_number": 0,
    "time": 0,
    "videos": [
      {
        "key": "string",
        "type": "string"
      }
    ],
    "winning_alliance": "red"
  }
]
```

<h3 id="getteammatchesbyyear-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|Inline|
|304|Not Modified|Not Modified - Use Local Cached Value|None|
|401|Unauthorized||None|

<h3 id="getteammatchesbyyear-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Match](#schemamatch)]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Cache-Control|string||The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.|
|200|ETag|string||Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## getTeamMatchesByYearKeys

<a id="opIdgetTeamMatchesByYearKeys"></a>

> Code samples

```bash
curl https://example.com/team/string/matches/0/keys \
  -H 'Accept: application/json' \
  -H "X-TBA-Auth-Key: ${API_KEY}"
```

`GET /team/{team_key}/matches/{year}/keys`

Gets a list of match keys for matches for the given team and year.

<h3 id="getteammatchesbyyearkeys-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-None-Match|header|string|false|Value of the `ETag` header in the most recently cached response by the client.|
|team_key|path|string|true|TBA Team Key, eg `frc254`|
|year|path|integer|true|Competition Year (or Season). Must be 4 digits.|

> Example responses

> 200 Response

```json
[
  "string"
]
```

<h3 id="getteammatchesbyyearkeys-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|Inline|
|304|Not Modified|Not Modified - Use Local Cached Value|None|
|401|Unauthorized||None|

<h3 id="getteammatchesbyyearkeys-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Cache-Control|string||The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.|
|200|ETag|string||Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## getTeamMatchesByYearSimple

<a id="opIdgetTeamMatchesByYearSimple"></a>

> Code samples

```bash
curl https://example.com/team/string/matches/0/simple \
  -H 'Accept: application/json' \
  -H "X-TBA-Auth-Key: ${API_KEY}"
```

`GET /team/{team_key}/matches/{year}/simple`

Gets a short-form list of matches for the given team and year.

<h3 id="getteammatchesbyyearsimple-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-None-Match|header|string|false|Value of the `ETag` header in the most recently cached response by the client.|
|team_key|path|string|true|TBA Team Key, eg `frc254`|
|year|path|integer|true|Competition Year (or Season). Must be 4 digits.|

> Example responses

> 200 Response

```json
[
  {
    "actual_time": 0,
    "alliances": {
      "blue": {
        "dq_team_keys": [
          "string"
        ],
        "score": 0,
        "surrogate_team_keys": [
          "string"
        ],
        "team_keys": [
          "string"
        ]
      },
      "red": {
        "dq_team_keys": [
          "string"
        ],
        "score": 0,
        "surrogate_team_keys": [
          "string"
        ],
        "team_keys": [
          "string"
        ]
      }
    },
    "comp_level": "qm",
    "event_key": "string",
    "key": "string",
    "match_number": 0,
    "predicted_time": 0,
    "set_number": 0,
    "time": 0,
    "winning_alliance": "red"
  }
]
```

<h3 id="getteammatchesbyyearsimple-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|Inline|
|304|Not Modified|Not Modified - Use Local Cached Value|None|
|401|Unauthorized||None|

<h3 id="getteammatchesbyyearsimple-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Match_Simple](#schemamatch_simple)]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Cache-Control|string||The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.|
|200|ETag|string||Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## getTeamMediaByTag

<a id="opIdgetTeamMediaByTag"></a>

> Code samples

```bash
curl https://example.com/team/string/media/tag/string \
  -H 'Accept: application/json' \
  -H "X-TBA-Auth-Key: ${API_KEY}"
```

`GET /team/{team_key}/media/tag/{media_tag}`

Gets a list of Media (videos / pictures) for the given team and tag.

<h3 id="getteammediabytag-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-None-Match|header|string|false|Value of the `ETag` header in the most recently cached response by the client.|
|team_key|path|string|true|TBA Team Key, eg `frc254`|
|media_tag|path|string|true|Media Tag which describes the Media.|

> Example responses

> 200 Response

```json
[
  {
    "details": {},
    "direct_url": "string",
    "foreign_key": "string",
    "preferred": true,
    "type": "youtube",
    "view_url": "string"
  }
]
```

<h3 id="getteammediabytag-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|Inline|
|304|Not Modified|Not Modified - Use Local Cached Value|None|
|401|Unauthorized||None|

<h3 id="getteammediabytag-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Media](#schemamedia)]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Cache-Control|string||The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.|
|200|ETag|string||Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## getTeamMediaByTagYear

<a id="opIdgetTeamMediaByTagYear"></a>

> Code samples

```bash
curl https://example.com/team/string/media/tag/string/0 \
  -H 'Accept: application/json' \
  -H "X-TBA-Auth-Key: ${API_KEY}"
```

`GET /team/{team_key}/media/tag/{media_tag}/{year}`

Gets a list of Media (videos / pictures) for the given team, tag and year.

<h3 id="getteammediabytagyear-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-None-Match|header|string|false|Value of the `ETag` header in the most recently cached response by the client.|
|team_key|path|string|true|TBA Team Key, eg `frc254`|
|media_tag|path|string|true|Media Tag which describes the Media.|
|year|path|integer|true|Competition Year (or Season). Must be 4 digits.|

> Example responses

> 200 Response

```json
[
  {
    "details": {},
    "direct_url": "string",
    "foreign_key": "string",
    "preferred": true,
    "type": "youtube",
    "view_url": "string"
  }
]
```

<h3 id="getteammediabytagyear-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|Inline|
|304|Not Modified|Not Modified - Use Local Cached Value|None|
|401|Unauthorized||None|

<h3 id="getteammediabytagyear-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Media](#schemamedia)]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Cache-Control|string||The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.|
|200|ETag|string||Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## getTeamMediaByYear

<a id="opIdgetTeamMediaByYear"></a>

> Code samples

```bash
curl https://example.com/team/string/media/0 \
  -H 'Accept: application/json' \
  -H "X-TBA-Auth-Key: ${API_KEY}"
```

`GET /team/{team_key}/media/{year}`

Gets a list of Media (videos / pictures) for the given team and year.

<h3 id="getteammediabyyear-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-None-Match|header|string|false|Value of the `ETag` header in the most recently cached response by the client.|
|team_key|path|string|true|TBA Team Key, eg `frc254`|
|year|path|integer|true|Competition Year (or Season). Must be 4 digits.|

> Example responses

> 200 Response

```json
[
  {
    "details": {},
    "direct_url": "string",
    "foreign_key": "string",
    "preferred": true,
    "type": "youtube",
    "view_url": "string"
  }
]
```

<h3 id="getteammediabyyear-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|Inline|
|304|Not Modified|Not Modified - Use Local Cached Value|None|
|401|Unauthorized||None|

<h3 id="getteammediabyyear-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Media](#schemamedia)]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Cache-Control|string||The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.|
|200|ETag|string||Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## getTeamRobots

<a id="opIdgetTeamRobots"></a>

> Code samples

```bash
curl https://example.com/team/string/robots \
  -H 'Accept: application/json' \
  -H "X-TBA-Auth-Key: ${API_KEY}"
```

`GET /team/{team_key}/robots`

Gets a list of year and robot name pairs for each year that a robot name was provided. Will return an empty array if the team has never named a robot.

<h3 id="getteamrobots-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-None-Match|header|string|false|Value of the `ETag` header in the most recently cached response by the client.|
|team_key|path|string|true|TBA Team Key, eg `frc254`|

> Example responses

> 200 Response

```json
[
  {
    "key": "string",
    "robot_name": "string",
    "team_key": "string",
    "year": 0
  }
]
```

<h3 id="getteamrobots-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|Inline|
|304|Not Modified|Not Modified - Use Local Cached Value|None|
|401|Unauthorized||None|

<h3 id="getteamrobots-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Team_Robot](#schemateam_robot)]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Cache-Control|string||The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.|
|200|ETag|string||Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## getTeamSimple

<a id="opIdgetTeamSimple"></a>

> Code samples

```bash
curl https://example.com/team/string/simple \
  -H 'Accept: application/json' \
  -H "X-TBA-Auth-Key: ${API_KEY}"
```

`GET /team/{team_key}/simple`

Gets a `Team_Simple` object for the team referenced by the given key.

<h3 id="getteamsimple-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-None-Match|header|string|false|Value of the `ETag` header in the most recently cached response by the client.|
|team_key|path|string|true|TBA Team Key, eg `frc254`|

> Example responses

> 200 Response

```json
{
  "city": "string",
  "country": "string",
  "key": "string",
  "name": "string",
  "nickname": "string",
  "state_prov": "string",
  "team_number": 0
}
```

<h3 id="getteamsimple-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Team_Simple](#schemateam_simple)|
|304|Not Modified|Not Modified - Use Local Cached Value|None|
|401|Unauthorized||None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Cache-Control|string||The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.|
|200|ETag|string||Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## getTeamSocialMedia

<a id="opIdgetTeamSocialMedia"></a>

> Code samples

```bash
curl https://example.com/team/string/social_media \
  -H 'Accept: application/json' \
  -H "X-TBA-Auth-Key: ${API_KEY}"
```

`GET /team/{team_key}/social_media`

Gets a list of Media (social media) for the given team.

<h3 id="getteamsocialmedia-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-None-Match|header|string|false|Value of the `ETag` header in the most recently cached response by the client.|
|team_key|path|string|true|TBA Team Key, eg `frc254`|

> Example responses

> 200 Response

```json
[
  {
    "details": {},
    "direct_url": "string",
    "foreign_key": "string",
    "preferred": true,
    "type": "youtube",
    "view_url": "string"
  }
]
```

<h3 id="getteamsocialmedia-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|Inline|
|304|Not Modified|Not Modified - Use Local Cached Value|None|
|401|Unauthorized||None|

<h3 id="getteamsocialmedia-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Media](#schemamedia)]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Cache-Control|string||The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.|
|200|ETag|string||Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## getTeamYearsParticipated

<a id="opIdgetTeamYearsParticipated"></a>

> Code samples

```bash
curl https://example.com/team/string/years_participated \
  -H 'Accept: application/json' \
  -H "X-TBA-Auth-Key: ${API_KEY}"
```

`GET /team/{team_key}/years_participated`

Gets a list of years in which the team participated in at least one competition.

<h3 id="getteamyearsparticipated-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-None-Match|header|string|false|Value of the `ETag` header in the most recently cached response by the client.|
|team_key|path|string|true|TBA Team Key, eg `frc254`|

> Example responses

> 200 Response

```json
[
  0
]
```

<h3 id="getteamyearsparticipated-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|Inline|
|304|Not Modified|Not Modified - Use Local Cached Value|None|
|401|Unauthorized||None|

<h3 id="getteamyearsparticipated-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[integer]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Cache-Control|string||The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.|
|200|ETag|string||Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## getTeams

<a id="opIdgetTeams"></a>

> Code samples

```bash
curl https://example.com/teams/0 \
  -H 'Accept: application/json' \
  -H "X-TBA-Auth-Key: ${API_KEY}"
```

`GET /teams/{page_num}`

Gets a list of `Team` objects, paginated in groups of 500.

<h3 id="getteams-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-None-Match|header|string|false|Value of the `ETag` header in the most recently cached response by the client.|
|page_num|path|integer|true|Page number of results to return, zero-indexed|

> Example responses

> 200 Response

```json
[
  {
    "address": "string",
    "city": "string",
    "country": "string",
    "gmaps_place_id": "string",
    "gmaps_url": "http://example.com",
    "home_championship": {},
    "key": "string",
    "lat": 0,
    "lng": 0,
    "location_name": "string",
    "motto": "string",
    "name": "string",
    "nickname": "string",
    "postal_code": "string",
    "rookie_year": 0,
    "school_name": "string",
    "state_prov": "string",
    "team_number": 0,
    "website": "http://example.com"
  }
]
```

<h3 id="getteams-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|Inline|
|304|Not Modified|Not Modified - Use Local Cached Value|None|
|401|Unauthorized||None|

<h3 id="getteams-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Team](#schemateam)]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Cache-Control|string||The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.|
|200|ETag|string||Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## getTeamsKeys

<a id="opIdgetTeamsKeys"></a>

> Code samples

```bash
curl https://example.com/teams/0/keys \
  -H 'Accept: application/json' \
  -H "X-TBA-Auth-Key: ${API_KEY}"
```

`GET /teams/{page_num}/keys`

Gets a list of Team keys, paginated in groups of 500. (Note, each page will not have 500 teams, but will include the teams within that range of 500.)

<h3 id="getteamskeys-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-None-Match|header|string|false|Value of the `ETag` header in the most recently cached response by the client.|
|page_num|path|integer|true|Page number of results to return, zero-indexed|

> Example responses

> 200 Response

```json
[
  "string"
]
```

<h3 id="getteamskeys-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|Inline|
|304|Not Modified|Not Modified - Use Local Cached Value|None|
|401|Unauthorized||None|

<h3 id="getteamskeys-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Cache-Control|string||The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.|
|200|ETag|string||Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## getTeamsSimple

<a id="opIdgetTeamsSimple"></a>

> Code samples

```bash
curl https://example.com/teams/0/simple \
  -H 'Accept: application/json' \
  -H "X-TBA-Auth-Key: ${API_KEY}"
```

`GET /teams/{page_num}/simple`

Gets a list of short form `Team_Simple` objects, paginated in groups of 500.

<h3 id="getteamssimple-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-None-Match|header|string|false|Value of the `ETag` header in the most recently cached response by the client.|
|page_num|path|integer|true|Page number of results to return, zero-indexed|

> Example responses

> 200 Response

```json
[
  {
    "city": "string",
    "country": "string",
    "key": "string",
    "name": "string",
    "nickname": "string",
    "state_prov": "string",
    "team_number": 0
  }
]
```

<h3 id="getteamssimple-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|Inline|
|304|Not Modified|Not Modified - Use Local Cached Value|None|
|401|Unauthorized||None|

<h3 id="getteamssimple-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Team_Simple](#schemateam_simple)]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Cache-Control|string||The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.|
|200|ETag|string||Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## getTeamsByYear

<a id="opIdgetTeamsByYear"></a>

> Code samples

```bash
curl https://example.com/teams/0/0 \
  -H 'Accept: application/json' \
  -H "X-TBA-Auth-Key: ${API_KEY}"
```

`GET /teams/{year}/{page_num}`

Gets a list of `Team` objects that competed in the given year, paginated in groups of 500.

<h3 id="getteamsbyyear-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-None-Match|header|string|false|Value of the `ETag` header in the most recently cached response by the client.|
|year|path|integer|true|Competition Year (or Season). Must be 4 digits.|
|page_num|path|integer|true|Page number of results to return, zero-indexed|

> Example responses

> 200 Response

```json
[
  {
    "address": "string",
    "city": "string",
    "country": "string",
    "gmaps_place_id": "string",
    "gmaps_url": "http://example.com",
    "home_championship": {},
    "key": "string",
    "lat": 0,
    "lng": 0,
    "location_name": "string",
    "motto": "string",
    "name": "string",
    "nickname": "string",
    "postal_code": "string",
    "rookie_year": 0,
    "school_name": "string",
    "state_prov": "string",
    "team_number": 0,
    "website": "http://example.com"
  }
]
```

<h3 id="getteamsbyyear-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|Inline|
|304|Not Modified|Not Modified - Use Local Cached Value|None|
|401|Unauthorized||None|

<h3 id="getteamsbyyear-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Team](#schemateam)]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Cache-Control|string||The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.|
|200|ETag|string||Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## getTeamsByYearKeys

<a id="opIdgetTeamsByYearKeys"></a>

> Code samples

```bash
curl https://example.com/teams/0/0/keys \
  -H 'Accept: application/json' \
  -H "X-TBA-Auth-Key: ${API_KEY}"
```

`GET /teams/{year}/{page_num}/keys`

Gets a list Team Keys that competed in the given year, paginated in groups of 500.

<h3 id="getteamsbyyearkeys-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-None-Match|header|string|false|Value of the `ETag` header in the most recently cached response by the client.|
|year|path|integer|true|Competition Year (or Season). Must be 4 digits.|
|page_num|path|integer|true|Page number of results to return, zero-indexed|

> Example responses

> 200 Response

```json
[
  "string"
]
```

<h3 id="getteamsbyyearkeys-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|Inline|
|304|Not Modified|Not Modified - Use Local Cached Value|None|
|401|Unauthorized||None|

<h3 id="getteamsbyyearkeys-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Cache-Control|string||The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.|
|200|ETag|string||Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## getTeamsByYearSimple

<a id="opIdgetTeamsByYearSimple"></a>

> Code samples

```bash
curl https://example.com/teams/0/0/simple \
  -H 'Accept: application/json' \
  -H "X-TBA-Auth-Key: ${API_KEY}"
```

`GET /teams/{year}/{page_num}/simple`

Gets a list of short form `Team_Simple` objects that competed in the given year, paginated in groups of 500.

<h3 id="getteamsbyyearsimple-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-None-Match|header|string|false|Value of the `ETag` header in the most recently cached response by the client.|
|year|path|integer|true|Competition Year (or Season). Must be 4 digits.|
|page_num|path|integer|true|Page number of results to return, zero-indexed|

> Example responses

> 200 Response

```json
[
  {
    "city": "string",
    "country": "string",
    "key": "string",
    "name": "string",
    "nickname": "string",
    "state_prov": "string",
    "team_number": 0
  }
]
```

<h3 id="getteamsbyyearsimple-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|Inline|
|304|Not Modified|Not Modified - Use Local Cached Value|None|
|401|Unauthorized||None|

<h3 id="getteamsbyyearsimple-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Team_Simple](#schemateam_simple)]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Cache-Control|string||The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.|
|200|ETag|string||Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

<h1 id="the-blue-alliance-api-v3-event">event</h1>

Calls that return event, or event-specific information.

## getEvent

<a id="opIdgetEvent"></a>

> Code samples

```bash
curl https://example.com/event/string \
  -H 'Accept: application/json' \
  -H "X-TBA-Auth-Key: ${API_KEY}"
```

`GET /event/{event_key}`

Gets an Event.

<h3 id="getevent-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-None-Match|header|string|false|Value of the `ETag` header in the most recently cached response by the client.|
|event_key|path|string|true|TBA Event Key, eg `2016nytr`|

> Example responses

> 200 Response

```json
{
  "address": "string",
  "city": "string",
  "country": "string",
  "district": {
    "abbreviation": "string",
    "display_name": "string",
    "key": "string",
    "year": 0
  },
  "division_keys": [
    "string"
  ],
  "end_date": "1970-01-01",
  "event_code": "string",
  "event_type": 0,
  "event_type_string": "string",
  "first_event_code": "string",
  "first_event_id": "string",
  "gmaps_place_id": "string",
  "gmaps_url": "http://example.com",
  "key": "string",
  "lat": 0,
  "lng": 0,
  "location_name": "string",
  "name": "string",
  "parent_event_key": "string",
  "playoff_type": 0,
  "playoff_type_string": "string",
  "postal_code": "string",
  "short_name": "string",
  "start_date": "1970-01-01",
  "state_prov": "string",
  "timezone": "string",
  "webcasts": [
    {
      "channel": "string",
      "date": "string",
      "file": "string",
      "type": "youtube"
    }
  ],
  "website": "string",
  "week": 0,
  "year": 0
}
```

<h3 id="getevent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Event](#schemaevent)|
|304|Not Modified|Not Modified - Use Local Cached Value|None|
|401|Unauthorized||None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Cache-Control|string||The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.|
|200|ETag|string||Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## getEventAlliances

<a id="opIdgetEventAlliances"></a>

> Code samples

```bash
curl https://example.com/event/string/alliances \
  -H 'Accept: application/json' \
  -H "X-TBA-Auth-Key: ${API_KEY}"
```

`GET /event/{event_key}/alliances`

Gets a list of Elimination Alliances for the given Event.

<h3 id="geteventalliances-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-None-Match|header|string|false|Value of the `ETag` header in the most recently cached response by the client.|
|event_key|path|string|true|TBA Event Key, eg `2016nytr`|

> Example responses

> 200 Response

```json
[
  {
    "backup": {
      "in": "string",
      "out": "string"
    },
    "declines": [
      "string"
    ],
    "name": "string",
    "picks": [
      "string"
    ],
    "status": {
      "current_level_record": {
        "losses": 0,
        "ties": 0,
        "wins": 0
      },
      "level": "string",
      "playoff_average": 0,
      "record": {
        "losses": 0,
        "ties": 0,
        "wins": 0
      },
      "status": "string"
    }
  }
]
```

<h3 id="geteventalliances-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|Inline|
|304|Not Modified|Not Modified - Use Local Cached Value|None|
|401|Unauthorized||None|

<h3 id="geteventalliances-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Elimination_Alliance](#schemaelimination_alliance)]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Cache-Control|string||The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.|
|200|ETag|string||Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## getEventAwards

<a id="opIdgetEventAwards"></a>

> Code samples

```bash
curl https://example.com/event/string/awards \
  -H 'Accept: application/json' \
  -H "X-TBA-Auth-Key: ${API_KEY}"
```

`GET /event/{event_key}/awards`

Gets a list of awards from the given event.

<h3 id="geteventawards-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-None-Match|header|string|false|Value of the `ETag` header in the most recently cached response by the client.|
|event_key|path|string|true|TBA Event Key, eg `2016nytr`|

> Example responses

> 200 Response

```json
[
  {
    "award_type": 0,
    "event_key": "string",
    "name": "string",
    "recipient_list": [
      {
        "awardee": "string",
        "team_key": "string"
      }
    ],
    "year": 0
  }
]
```

<h3 id="geteventawards-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|Inline|
|304|Not Modified|Not Modified - Use Local Cached Value|None|
|401|Unauthorized||None|

<h3 id="geteventawards-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Award](#schemaaward)]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Cache-Control|string||The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.|
|200|ETag|string||Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## getEventDistrictPoints

<a id="opIdgetEventDistrictPoints"></a>

> Code samples

```bash
curl https://example.com/event/string/district_points \
  -H 'Accept: application/json' \
  -H "X-TBA-Auth-Key: ${API_KEY}"
```

`GET /event/{event_key}/district_points`

Gets a list of team rankings for the Event.

<h3 id="geteventdistrictpoints-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-None-Match|header|string|false|Value of the `ETag` header in the most recently cached response by the client.|
|event_key|path|string|true|TBA Event Key, eg `2016nytr`|

> Example responses

> 200 Response

```json
{
  "points": {
    "property1": {
      "alliance_points": 0,
      "award_points": 0,
      "elim_points": 0,
      "qual_points": 0,
      "total": 0
    },
    "property2": {
      "alliance_points": 0,
      "award_points": 0,
      "elim_points": 0,
      "qual_points": 0,
      "total": 0
    }
  },
  "tiebreakers": {
    "property1": {
      "highest_qual_scores": [
        0
      ],
      "qual_wins": 0
    },
    "property2": {
      "highest_qual_scores": [
        0
      ],
      "qual_wins": 0
    }
  }
}
```

<h3 id="geteventdistrictpoints-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Event_District_Points](#schemaevent_district_points)|
|304|Not Modified|Not Modified - Use Local Cached Value|None|
|401|Unauthorized||None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Cache-Control|string||The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.|
|200|ETag|string||Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## getEventInsights

<a id="opIdgetEventInsights"></a>

> Code samples

```bash
curl https://example.com/event/string/insights \
  -H 'Accept: application/json' \
  -H "X-TBA-Auth-Key: ${API_KEY}"
```

`GET /event/{event_key}/insights`

Gets a set of Event-specific insights for the given Event.

<h3 id="geteventinsights-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-None-Match|header|string|false|Value of the `ETag` header in the most recently cached response by the client.|
|event_key|path|string|true|TBA Event Key, eg `2016nytr`|

> Example responses

> 200 Response

```json
{
  "playoff": {},
  "qual": {}
}
```

<h3 id="geteventinsights-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Event_Insights](#schemaevent_insights)|
|304|Not Modified|Not Modified - Use Local Cached Value|None|
|401|Unauthorized||None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Cache-Control|string||The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.|
|200|ETag|string||Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## getEventMatches

<a id="opIdgetEventMatches"></a>

> Code samples

```bash
curl https://example.com/event/string/matches \
  -H 'Accept: application/json' \
  -H "X-TBA-Auth-Key: ${API_KEY}"
```

`GET /event/{event_key}/matches`

Gets a list of matches for the given event.

<h3 id="geteventmatches-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-None-Match|header|string|false|Value of the `ETag` header in the most recently cached response by the client.|
|event_key|path|string|true|TBA Event Key, eg `2016nytr`|

> Example responses

> 200 Response

```json
[
  {
    "actual_time": 0,
    "alliances": {
      "blue": {
        "dq_team_keys": [
          "string"
        ],
        "score": 0,
        "surrogate_team_keys": [
          "string"
        ],
        "team_keys": [
          "string"
        ]
      },
      "red": {
        "dq_team_keys": [
          "string"
        ],
        "score": 0,
        "surrogate_team_keys": [
          "string"
        ],
        "team_keys": [
          "string"
        ]
      }
    },
    "comp_level": "qm",
    "event_key": "string",
    "key": "string",
    "match_number": 0,
    "post_result_time": 0,
    "predicted_time": 0,
    "score_breakdown": {},
    "set_number": 0,
    "time": 0,
    "videos": [
      {
        "key": "string",
        "type": "string"
      }
    ],
    "winning_alliance": "red"
  }
]
```

<h3 id="geteventmatches-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|Inline|
|304|Not Modified|Not Modified - Use Local Cached Value|None|
|401|Unauthorized||None|

<h3 id="geteventmatches-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Match](#schemamatch)]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Cache-Control|string||The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.|
|200|ETag|string||Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## getEventMatchesKeys

<a id="opIdgetEventMatchesKeys"></a>

> Code samples

```bash
curl https://example.com/event/string/matches/keys \
  -H 'Accept: application/json' \
  -H "X-TBA-Auth-Key: ${API_KEY}"
```

`GET /event/{event_key}/matches/keys`

Gets a list of match keys for the given event.

<h3 id="geteventmatcheskeys-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-None-Match|header|string|false|Value of the `ETag` header in the most recently cached response by the client.|
|event_key|path|string|true|TBA Event Key, eg `2016nytr`|

> Example responses

> 200 Response

```json
[
  "string"
]
```

<h3 id="geteventmatcheskeys-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|Inline|
|304|Not Modified|Not Modified - Use Local Cached Value|None|
|401|Unauthorized||None|

<h3 id="geteventmatcheskeys-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Cache-Control|string||The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.|
|200|ETag|string||Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## getEventMatchesSimple

<a id="opIdgetEventMatchesSimple"></a>

> Code samples

```bash
curl https://example.com/event/string/matches/simple \
  -H 'Accept: application/json' \
  -H "X-TBA-Auth-Key: ${API_KEY}"
```

`GET /event/{event_key}/matches/simple`

Gets a short-form list of matches for the given event.

<h3 id="geteventmatchessimple-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-None-Match|header|string|false|Value of the `ETag` header in the most recently cached response by the client.|
|event_key|path|string|true|TBA Event Key, eg `2016nytr`|

> Example responses

> 200 Response

```json
[
  {
    "actual_time": 0,
    "alliances": {
      "blue": {
        "dq_team_keys": [
          "string"
        ],
        "score": 0,
        "surrogate_team_keys": [
          "string"
        ],
        "team_keys": [
          "string"
        ]
      },
      "red": {
        "dq_team_keys": [
          "string"
        ],
        "score": 0,
        "surrogate_team_keys": [
          "string"
        ],
        "team_keys": [
          "string"
        ]
      }
    },
    "comp_level": "qm",
    "event_key": "string",
    "key": "string",
    "match_number": 0,
    "predicted_time": 0,
    "set_number": 0,
    "time": 0,
    "winning_alliance": "red"
  }
]
```

<h3 id="geteventmatchessimple-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|Inline|
|304|Not Modified|Not Modified - Use Local Cached Value|None|
|401|Unauthorized||None|

<h3 id="geteventmatchessimple-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Match_Simple](#schemamatch_simple)]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Cache-Control|string||The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.|
|200|ETag|string||Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## getEventMatchTimeseries

<a id="opIdgetEventMatchTimeseries"></a>

> Code samples

```bash
curl https://example.com/event/string/matches/timeseries \
  -H 'Accept: application/json' \
  -H "X-TBA-Auth-Key: ${API_KEY}"
```

`GET /event/{event_key}/matches/timeseries`

Gets an array of Match Keys for the given event key that have timeseries data. Returns an empty array if no matches have timeseries data.
*WARNING:* This is *not* official data, and is subject to a significant possibility of error, or missing data. Do not rely on this data for any purpose. In fact, pretend we made it up.
*WARNING:* This endpoint and corresponding data models are under *active development* and may change at any time, including in breaking ways.

<h3 id="geteventmatchtimeseries-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-None-Match|header|string|false|Value of the `ETag` header in the most recently cached response by the client.|
|event_key|path|string|true|TBA Event Key, eg `2016nytr`|

> Example responses

> 200 Response

```json
[
  "string"
]
```

<h3 id="geteventmatchtimeseries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|Inline|
|304|Not Modified|Not Modified - Use Local Cached Value|None|
|401|Unauthorized||None|

<h3 id="geteventmatchtimeseries-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Cache-Control|string||The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.|
|200|ETag|string||Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## getEventOPRs

<a id="opIdgetEventOPRs"></a>

> Code samples

```bash
curl https://example.com/event/string/oprs \
  -H 'Accept: application/json' \
  -H "X-TBA-Auth-Key: ${API_KEY}"
```

`GET /event/{event_key}/oprs`

Gets a set of Event OPRs (including OPR, DPR, and CCWM) for the given Event.

<h3 id="geteventoprs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-None-Match|header|string|false|Value of the `ETag` header in the most recently cached response by the client.|
|event_key|path|string|true|TBA Event Key, eg `2016nytr`|

> Example responses

> 200 Response

```json
{
  "ccwms": {
    "property1": 0,
    "property2": 0
  },
  "dprs": {
    "property1": 0,
    "property2": 0
  },
  "oprs": {
    "property1": 0,
    "property2": 0
  }
}
```

<h3 id="geteventoprs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Event_OPRs](#schemaevent_oprs)|
|304|Not Modified|Not Modified - Use Local Cached Value|None|
|401|Unauthorized||None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Cache-Control|string||The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.|
|200|ETag|string||Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## getEventPredictions

<a id="opIdgetEventPredictions"></a>

> Code samples

```bash
curl https://example.com/event/string/predictions \
  -H 'Accept: application/json' \
  -H "X-TBA-Auth-Key: ${API_KEY}"
```

`GET /event/{event_key}/predictions`

Gets information on TBA-generated predictions for the given Event. Contains year-specific information. *WARNING* This endpoint is currently under development and may change at any time.

<h3 id="geteventpredictions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-None-Match|header|string|false|Value of the `ETag` header in the most recently cached response by the client.|
|event_key|path|string|true|TBA Event Key, eg `2016nytr`|

> Example responses

> 200 Response

```json
{}
```

<h3 id="geteventpredictions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Event_Predictions](#schemaevent_predictions)|
|304|Not Modified|Not Modified - Use Local Cached Value|None|
|401|Unauthorized||None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Cache-Control|string||The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.|
|200|ETag|string||Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## getEventRankings

<a id="opIdgetEventRankings"></a>

> Code samples

```bash
curl https://example.com/event/string/rankings \
  -H 'Accept: application/json' \
  -H "X-TBA-Auth-Key: ${API_KEY}"
```

`GET /event/{event_key}/rankings`

Gets a list of team rankings for the Event.

<h3 id="geteventrankings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-None-Match|header|string|false|Value of the `ETag` header in the most recently cached response by the client.|
|event_key|path|string|true|TBA Event Key, eg `2016nytr`|

> Example responses

> 200 Response

```json
{
  "extra_stats_info": [
    {
      "name": "string",
      "precision": 0
    }
  ],
  "rankings": [
    {
      "dq": 0,
      "extra_stats": [
        0
      ],
      "matches_played": 0,
      "qual_average": 0,
      "rank": 0,
      "record": {
        "losses": 0,
        "ties": 0,
        "wins": 0
      },
      "sort_orders": [
        0
      ],
      "team_key": "string"
    }
  ],
  "sort_order_info": [
    {
      "name": "string",
      "precision": 0
    }
  ]
}
```

<h3 id="geteventrankings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Event_Ranking](#schemaevent_ranking)|
|304|Not Modified|Not Modified - Use Local Cached Value|None|
|401|Unauthorized||None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Cache-Control|string||The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.|
|200|ETag|string||Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## getEventSimple

<a id="opIdgetEventSimple"></a>

> Code samples

```bash
curl https://example.com/event/string/simple \
  -H 'Accept: application/json' \
  -H "X-TBA-Auth-Key: ${API_KEY}"
```

`GET /event/{event_key}/simple`

Gets a short-form Event.

<h3 id="geteventsimple-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-None-Match|header|string|false|Value of the `ETag` header in the most recently cached response by the client.|
|event_key|path|string|true|TBA Event Key, eg `2016nytr`|

> Example responses

> 200 Response

```json
{
  "city": "string",
  "country": "string",
  "district": {
    "abbreviation": "string",
    "display_name": "string",
    "key": "string",
    "year": 0
  },
  "end_date": "1970-01-01",
  "event_code": "string",
  "event_type": 0,
  "key": "string",
  "name": "string",
  "start_date": "1970-01-01",
  "state_prov": "string",
  "year": 0
}
```

<h3 id="geteventsimple-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Event_Simple](#schemaevent_simple)|
|304|Not Modified|Not Modified - Use Local Cached Value|None|
|401|Unauthorized||None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Cache-Control|string||The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.|
|200|ETag|string||Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## getEventTeams

<a id="opIdgetEventTeams"></a>

> Code samples

```bash
curl https://example.com/event/string/teams \
  -H 'Accept: application/json' \
  -H "X-TBA-Auth-Key: ${API_KEY}"
```

`GET /event/{event_key}/teams`

Gets a list of `Team` objects that competed in the given event.

<h3 id="geteventteams-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-None-Match|header|string|false|Value of the `ETag` header in the most recently cached response by the client.|
|event_key|path|string|true|TBA Event Key, eg `2016nytr`|

> Example responses

> 200 Response

```json
[
  {
    "address": "string",
    "city": "string",
    "country": "string",
    "gmaps_place_id": "string",
    "gmaps_url": "http://example.com",
    "home_championship": {},
    "key": "string",
    "lat": 0,
    "lng": 0,
    "location_name": "string",
    "motto": "string",
    "name": "string",
    "nickname": "string",
    "postal_code": "string",
    "rookie_year": 0,
    "school_name": "string",
    "state_prov": "string",
    "team_number": 0,
    "website": "http://example.com"
  }
]
```

<h3 id="geteventteams-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|Inline|
|304|Not Modified|Not Modified - Use Local Cached Value|None|
|401|Unauthorized||None|

<h3 id="geteventteams-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Team](#schemateam)]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Cache-Control|string||The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.|
|200|ETag|string||Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## getEventTeamsKeys

<a id="opIdgetEventTeamsKeys"></a>

> Code samples

```bash
curl https://example.com/event/string/teams/keys \
  -H 'Accept: application/json' \
  -H "X-TBA-Auth-Key: ${API_KEY}"
```

`GET /event/{event_key}/teams/keys`

Gets a list of `Team` keys that competed in the given event.

<h3 id="geteventteamskeys-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-None-Match|header|string|false|Value of the `ETag` header in the most recently cached response by the client.|
|event_key|path|string|true|TBA Event Key, eg `2016nytr`|

> Example responses

> 200 Response

```json
[
  "string"
]
```

<h3 id="geteventteamskeys-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|Inline|
|304|Not Modified|Not Modified - Use Local Cached Value|None|
|401|Unauthorized||None|

<h3 id="geteventteamskeys-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Cache-Control|string||The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.|
|200|ETag|string||Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## getEventTeamsSimple

<a id="opIdgetEventTeamsSimple"></a>

> Code samples

```bash
curl https://example.com/event/string/teams/simple \
  -H 'Accept: application/json' \
  -H "X-TBA-Auth-Key: ${API_KEY}"
```

`GET /event/{event_key}/teams/simple`

Gets a short-form list of `Team` objects that competed in the given event.

<h3 id="geteventteamssimple-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-None-Match|header|string|false|Value of the `ETag` header in the most recently cached response by the client.|
|event_key|path|string|true|TBA Event Key, eg `2016nytr`|

> Example responses

> 200 Response

```json
[
  {
    "city": "string",
    "country": "string",
    "key": "string",
    "name": "string",
    "nickname": "string",
    "state_prov": "string",
    "team_number": 0
  }
]
```

<h3 id="geteventteamssimple-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|Inline|
|304|Not Modified|Not Modified - Use Local Cached Value|None|
|401|Unauthorized||None|

<h3 id="geteventteamssimple-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Team_Simple](#schemateam_simple)]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Cache-Control|string||The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.|
|200|ETag|string||Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## getEventTeamsStatuses

<a id="opIdgetEventTeamsStatuses"></a>

> Code samples

```bash
curl https://example.com/event/string/teams/statuses \
  -H 'Accept: application/json' \
  -H "X-TBA-Auth-Key: ${API_KEY}"
```

`GET /event/{event_key}/teams/statuses`

Gets a key-value list of the event statuses for teams competing at the given event.

<h3 id="geteventteamsstatuses-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-None-Match|header|string|false|Value of the `ETag` header in the most recently cached response by the client.|
|event_key|path|string|true|TBA Event Key, eg `2016nytr`|

> Example responses

> 200 Response

```json
{
  "property1": {
    "alliance": {
      "backup": {
        "in": "string",
        "out": "string"
      },
      "name": "string",
      "number": 0,
      "pick": 0
    },
    "alliance_status_str": "string",
    "last_match_key": "string",
    "next_match_key": "string",
    "overall_status_str": "string",
    "playoff": {
      "current_level_record": {
        "losses": 0,
        "ties": 0,
        "wins": 0
      },
      "level": "qm",
      "playoff_average": 0,
      "record": {
        "losses": 0,
        "ties": 0,
        "wins": 0
      },
      "status": "won"
    },
    "playoff_status_str": "string",
    "qual": {
      "num_teams": 0,
      "ranking": {
        "dq": 0,
        "matches_played": 0,
        "qual_average": 0,
        "rank": 0,
        "record": {
          "losses": 0,
          "ties": 0,
          "wins": 0
        },
        "sort_orders": [
          0
        ],
        "team_key": "string"
      },
      "sort_order_info": [
        {
          "name": "string",
          "precision": 0
        }
      ],
      "status": "string"
    }
  },
  "property2": {
    "alliance": {
      "backup": {
        "in": "string",
        "out": "string"
      },
      "name": "string",
      "number": 0,
      "pick": 0
    },
    "alliance_status_str": "string",
    "last_match_key": "string",
    "next_match_key": "string",
    "overall_status_str": "string",
    "playoff": {
      "current_level_record": {
        "losses": 0,
        "ties": 0,
        "wins": 0
      },
      "level": "qm",
      "playoff_average": 0,
      "record": {
        "losses": 0,
        "ties": 0,
        "wins": 0
      },
      "status": "won"
    },
    "playoff_status_str": "string",
    "qual": {
      "num_teams": 0,
      "ranking": {
        "dq": 0,
        "matches_played": 0,
        "qual_average": 0,
        "rank": 0,
        "record": {
          "losses": 0,
          "ties": 0,
          "wins": 0
        },
        "sort_orders": [
          0
        ],
        "team_key": "string"
      },
      "sort_order_info": [
        {
          "name": "string",
          "precision": 0
        }
      ],
      "status": "string"
    }
  }
}
```

<h3 id="geteventteamsstatuses-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|Inline|
|304|Not Modified|Not Modified - Use Local Cached Value|None|
|401|Unauthorized||None|

<h3 id="geteventteamsstatuses-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[Team_Event_Status](#schemateam_event_status)|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Cache-Control|string||The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.|
|200|ETag|string||Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## getEventsByYear

<a id="opIdgetEventsByYear"></a>

> Code samples

```bash
curl https://example.com/events/0 \
  -H 'Accept: application/json' \
  -H "X-TBA-Auth-Key: ${API_KEY}"
```

`GET /events/{year}`

Gets a list of events in the given year.

<h3 id="geteventsbyyear-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-None-Match|header|string|false|Value of the `ETag` header in the most recently cached response by the client.|
|year|path|integer|true|Competition Year (or Season). Must be 4 digits.|

> Example responses

> 200 Response

```json
[
  {
    "address": "string",
    "city": "string",
    "country": "string",
    "district": {
      "abbreviation": "string",
      "display_name": "string",
      "key": "string",
      "year": 0
    },
    "division_keys": [
      "string"
    ],
    "end_date": "1970-01-01",
    "event_code": "string",
    "event_type": 0,
    "event_type_string": "string",
    "first_event_code": "string",
    "first_event_id": "string",
    "gmaps_place_id": "string",
    "gmaps_url": "http://example.com",
    "key": "string",
    "lat": 0,
    "lng": 0,
    "location_name": "string",
    "name": "string",
    "parent_event_key": "string",
    "playoff_type": 0,
    "playoff_type_string": "string",
    "postal_code": "string",
    "short_name": "string",
    "start_date": "1970-01-01",
    "state_prov": "string",
    "timezone": "string",
    "webcasts": [
      {
        "channel": "string",
        "date": "string",
        "file": "string",
        "type": "youtube"
      }
    ],
    "website": "string",
    "week": 0,
    "year": 0
  }
]
```

<h3 id="geteventsbyyear-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|Inline|
|304|Not Modified|Not Modified - Use Local Cached Value|None|
|401|Unauthorized||None|

<h3 id="geteventsbyyear-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Event](#schemaevent)]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Cache-Control|string||The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.|
|200|ETag|string||Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## getEventsByYearKeys

<a id="opIdgetEventsByYearKeys"></a>

> Code samples

```bash
curl https://example.com/events/0/keys \
  -H 'Accept: application/json' \
  -H "X-TBA-Auth-Key: ${API_KEY}"
```

`GET /events/{year}/keys`

Gets a list of event keys in the given year.

<h3 id="geteventsbyyearkeys-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-None-Match|header|string|false|Value of the `ETag` header in the most recently cached response by the client.|
|year|path|integer|true|Competition Year (or Season). Must be 4 digits.|

> Example responses

> 200 Response

```json
[
  "string"
]
```

<h3 id="geteventsbyyearkeys-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|Inline|
|304|Not Modified|Not Modified - Use Local Cached Value|None|
|401|Unauthorized||None|

<h3 id="geteventsbyyearkeys-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Cache-Control|string||The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.|
|200|ETag|string||Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## getEventsByYearSimple

<a id="opIdgetEventsByYearSimple"></a>

> Code samples

```bash
curl https://example.com/events/0/simple \
  -H 'Accept: application/json' \
  -H "X-TBA-Auth-Key: ${API_KEY}"
```

`GET /events/{year}/simple`

Gets a short-form list of events in the given year.

<h3 id="geteventsbyyearsimple-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-None-Match|header|string|false|Value of the `ETag` header in the most recently cached response by the client.|
|year|path|integer|true|Competition Year (or Season). Must be 4 digits.|

> Example responses

> 200 Response

```json
[
  {
    "city": "string",
    "country": "string",
    "district": {
      "abbreviation": "string",
      "display_name": "string",
      "key": "string",
      "year": 0
    },
    "end_date": "1970-01-01",
    "event_code": "string",
    "event_type": 0,
    "key": "string",
    "name": "string",
    "start_date": "1970-01-01",
    "state_prov": "string",
    "year": 0
  }
]
```

<h3 id="geteventsbyyearsimple-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|Inline|
|304|Not Modified|Not Modified - Use Local Cached Value|None|
|401|Unauthorized||None|

<h3 id="geteventsbyyearsimple-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Event_Simple](#schemaevent_simple)]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Cache-Control|string||The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.|
|200|ETag|string||Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

<h1 id="the-blue-alliance-api-v3-match">match</h1>

Calls that return match, or match-specific information.

## getMatch

<a id="opIdgetMatch"></a>

> Code samples

```bash
curl https://example.com/match/string \
  -H 'Accept: application/json' \
  -H "X-TBA-Auth-Key: ${API_KEY}"
```

`GET /match/{match_key}`

Gets a `Match` object for the given match key.

<h3 id="getmatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-None-Match|header|string|false|Value of the `ETag` header in the most recently cached response by the client.|
|match_key|path|string|true|TBA Match Key, eg `2016nytr_qm1`|

> Example responses

> 200 Response

```json
{
  "actual_time": 0,
  "alliances": {
    "blue": {
      "dq_team_keys": [
        "string"
      ],
      "score": 0,
      "surrogate_team_keys": [
        "string"
      ],
      "team_keys": [
        "string"
      ]
    },
    "red": {
      "dq_team_keys": [
        "string"
      ],
      "score": 0,
      "surrogate_team_keys": [
        "string"
      ],
      "team_keys": [
        "string"
      ]
    }
  },
  "comp_level": "qm",
  "event_key": "string",
  "key": "string",
  "match_number": 0,
  "post_result_time": 0,
  "predicted_time": 0,
  "score_breakdown": {},
  "set_number": 0,
  "time": 0,
  "videos": [
    {
      "key": "string",
      "type": "string"
    }
  ],
  "winning_alliance": "red"
}
```

<h3 id="getmatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Match](#schemamatch)|
|304|Not Modified|Not Modified - Use Local Cached Value|None|
|401|Unauthorized||None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Cache-Control|string||The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.|
|200|ETag|string||Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## getMatchSimple

<a id="opIdgetMatchSimple"></a>

> Code samples

```bash
curl https://example.com/match/string/simple \
  -H 'Accept: application/json' \
  -H "X-TBA-Auth-Key: ${API_KEY}"
```

`GET /match/{match_key}/simple`

Gets a short-form `Match` object for the given match key.

<h3 id="getmatchsimple-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-None-Match|header|string|false|Value of the `ETag` header in the most recently cached response by the client.|
|match_key|path|string|true|TBA Match Key, eg `2016nytr_qm1`|

> Example responses

> 200 Response

```json
{
  "actual_time": 0,
  "alliances": {
    "blue": {
      "dq_team_keys": [
        "string"
      ],
      "score": 0,
      "surrogate_team_keys": [
        "string"
      ],
      "team_keys": [
        "string"
      ]
    },
    "red": {
      "dq_team_keys": [
        "string"
      ],
      "score": 0,
      "surrogate_team_keys": [
        "string"
      ],
      "team_keys": [
        "string"
      ]
    }
  },
  "comp_level": "qm",
  "event_key": "string",
  "key": "string",
  "match_number": 0,
  "predicted_time": 0,
  "set_number": 0,
  "time": 0,
  "winning_alliance": "red"
}
```

<h3 id="getmatchsimple-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Match_Simple](#schemamatch_simple)|
|304|Not Modified|Not Modified - Use Local Cached Value|None|
|401|Unauthorized||None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Cache-Control|string||The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.|
|200|ETag|string||Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## getMatchTimeseries

<a id="opIdgetMatchTimeseries"></a>

> Code samples

```bash
curl https://example.com/match/string/timeseries \
  -H 'Accept: application/json' \
  -H "X-TBA-Auth-Key: ${API_KEY}"
```

`GET /match/{match_key}/timeseries`

Gets an array of game-specific Match Timeseries objects for the given match key or an empty array if not available.
*WARNING:* This is *not* official data, and is subject to a significant possibility of error, or missing data. Do not rely on this data for any purpose. In fact, pretend we made it up.
*WARNING:* This endpoint and corresponding data models are under *active development* and may change at any time, including in breaking ways.

<h3 id="getmatchtimeseries-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-None-Match|header|string|false|Value of the `ETag` header in the most recently cached response by the client.|
|match_key|path|string|true|TBA Match Key, eg `2016nytr_qm1`|

> Example responses

> 200 Response

```json
[
  {}
]
```

<h3 id="getmatchtimeseries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|Inline|
|304|Not Modified|Not Modified - Use Local Cached Value|None|
|401|Unauthorized||None|

<h3 id="getmatchtimeseries-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Cache-Control|string||The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.|
|200|ETag|string||Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## getMatchZebra

<a id="opIdgetMatchZebra"></a>

> Code samples

```bash
curl https://example.com/match/string/zebra_motionworks \
  -H 'Accept: application/json' \
  -H "X-TBA-Auth-Key: ${API_KEY}"
```

`GET /match/{match_key}/zebra_motionworks`

Gets Zebra MotionWorks data for a Match for the given match key.

<h3 id="getmatchzebra-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-None-Match|header|string|false|Value of the `ETag` header in the most recently cached response by the client.|
|match_key|path|string|true|TBA Match Key, eg `2016nytr_qm1`|

> Example responses

> 200 Response

```json
{
  "alliances": {
    "blue": [
      {
        "team_key": "frc7332",
        "xs": [
          [
            2.73,
            2.7,
            null
          ]
        ],
        "ys": [
          [
            2.73,
            2.7,
            null
          ]
        ]
      }
    ],
    "red": [
      {
        "team_key": "frc7332",
        "xs": [
          [
            2.73,
            2.7,
            null
          ]
        ],
        "ys": [
          [
            2.73,
            2.7,
            null
          ]
        ]
      }
    ]
  },
  "key": "string",
  "times": [
    [
      0,
      0.1,
      0.2
    ]
  ]
}
```

<h3 id="getmatchzebra-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Zebra](#schemazebra)|
|304|Not Modified|Not Modified - Use Local Cached Value|None|
|401|Unauthorized||None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Cache-Control|string||The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.|
|200|ETag|string||Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

<h1 id="the-blue-alliance-api-v3-district">district</h1>

Calls that return district, or district-related information.

## getDistrictEvents

<a id="opIdgetDistrictEvents"></a>

> Code samples

```bash
curl https://example.com/district/string/events \
  -H 'Accept: application/json' \
  -H "X-TBA-Auth-Key: ${API_KEY}"
```

`GET /district/{district_key}/events`

Gets a list of events in the given district.

<h3 id="getdistrictevents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-None-Match|header|string|false|Value of the `ETag` header in the most recently cached response by the client.|
|district_key|path|string|true|TBA District Key, eg `2016fim`|

> Example responses

> 200 Response

```json
[
  {
    "address": "string",
    "city": "string",
    "country": "string",
    "district": {
      "abbreviation": "string",
      "display_name": "string",
      "key": "string",
      "year": 0
    },
    "division_keys": [
      "string"
    ],
    "end_date": "1970-01-01",
    "event_code": "string",
    "event_type": 0,
    "event_type_string": "string",
    "first_event_code": "string",
    "first_event_id": "string",
    "gmaps_place_id": "string",
    "gmaps_url": "http://example.com",
    "key": "string",
    "lat": 0,
    "lng": 0,
    "location_name": "string",
    "name": "string",
    "parent_event_key": "string",
    "playoff_type": 0,
    "playoff_type_string": "string",
    "postal_code": "string",
    "short_name": "string",
    "start_date": "1970-01-01",
    "state_prov": "string",
    "timezone": "string",
    "webcasts": [
      {
        "channel": "string",
        "date": "string",
        "file": "string",
        "type": "youtube"
      }
    ],
    "website": "string",
    "week": 0,
    "year": 0
  }
]
```

<h3 id="getdistrictevents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|Inline|
|304|Not Modified|Not Modified - Use Local Cached Value|None|
|401|Unauthorized||None|

<h3 id="getdistrictevents-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Event](#schemaevent)]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Cache-Control|string||The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.|
|200|ETag|string||Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## getDistrictEventsKeys

<a id="opIdgetDistrictEventsKeys"></a>

> Code samples

```bash
curl https://example.com/district/string/events/keys \
  -H 'Accept: application/json' \
  -H "X-TBA-Auth-Key: ${API_KEY}"
```

`GET /district/{district_key}/events/keys`

Gets a list of event keys for events in the given district.

<h3 id="getdistricteventskeys-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-None-Match|header|string|false|Value of the `ETag` header in the most recently cached response by the client.|
|district_key|path|string|true|TBA District Key, eg `2016fim`|

> Example responses

> 200 Response

```json
[
  "string"
]
```

<h3 id="getdistricteventskeys-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|Inline|
|304|Not Modified|Not Modified - Use Local Cached Value|None|
|401|Unauthorized||None|

<h3 id="getdistricteventskeys-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Cache-Control|string||The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.|
|200|ETag|string||Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## getDistrictEventsSimple

<a id="opIdgetDistrictEventsSimple"></a>

> Code samples

```bash
curl https://example.com/district/string/events/simple \
  -H 'Accept: application/json' \
  -H "X-TBA-Auth-Key: ${API_KEY}"
```

`GET /district/{district_key}/events/simple`

Gets a short-form list of events in the given district.

<h3 id="getdistricteventssimple-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-None-Match|header|string|false|Value of the `ETag` header in the most recently cached response by the client.|
|district_key|path|string|true|TBA District Key, eg `2016fim`|

> Example responses

> 200 Response

```json
[
  {
    "city": "string",
    "country": "string",
    "district": {
      "abbreviation": "string",
      "display_name": "string",
      "key": "string",
      "year": 0
    },
    "end_date": "1970-01-01",
    "event_code": "string",
    "event_type": 0,
    "key": "string",
    "name": "string",
    "start_date": "1970-01-01",
    "state_prov": "string",
    "year": 0
  }
]
```

<h3 id="getdistricteventssimple-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|Inline|
|304|Not Modified|Not Modified - Use Local Cached Value|None|
|401|Unauthorized||None|

<h3 id="getdistricteventssimple-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Event_Simple](#schemaevent_simple)]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Cache-Control|string||The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.|
|200|ETag|string||Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## getDistrictRankings

<a id="opIdgetDistrictRankings"></a>

> Code samples

```bash
curl https://example.com/district/string/rankings \
  -H 'Accept: application/json' \
  -H "X-TBA-Auth-Key: ${API_KEY}"
```

`GET /district/{district_key}/rankings`

Gets a list of team district rankings for the given district.

<h3 id="getdistrictrankings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-None-Match|header|string|false|Value of the `ETag` header in the most recently cached response by the client.|
|district_key|path|string|true|TBA District Key, eg `2016fim`|

> Example responses

> 200 Response

```json
[
  {
    "event_points": [
      {
        "alliance_points": 0,
        "award_points": 0,
        "district_cmp": true,
        "elim_points": 0,
        "event_key": "string",
        "qual_points": 0,
        "total": 0
      }
    ],
    "point_total": 0,
    "rank": 0,
    "rookie_bonus": 0,
    "team_key": "string"
  }
]
```

<h3 id="getdistrictrankings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|Inline|
|304|Not Modified|Not Modified - Use Local Cached Value|None|
|401|Unauthorized||None|

<h3 id="getdistrictrankings-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[District_Ranking](#schemadistrict_ranking)]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Cache-Control|string||The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.|
|200|ETag|string||Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## getDistrictTeams

<a id="opIdgetDistrictTeams"></a>

> Code samples

```bash
curl https://example.com/district/string/teams \
  -H 'Accept: application/json' \
  -H "X-TBA-Auth-Key: ${API_KEY}"
```

`GET /district/{district_key}/teams`

Gets a list of `Team` objects that competed in events in the given district.

<h3 id="getdistrictteams-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-None-Match|header|string|false|Value of the `ETag` header in the most recently cached response by the client.|
|district_key|path|string|true|TBA District Key, eg `2016fim`|

> Example responses

> 200 Response

```json
[
  {
    "address": "string",
    "city": "string",
    "country": "string",
    "gmaps_place_id": "string",
    "gmaps_url": "http://example.com",
    "home_championship": {},
    "key": "string",
    "lat": 0,
    "lng": 0,
    "location_name": "string",
    "motto": "string",
    "name": "string",
    "nickname": "string",
    "postal_code": "string",
    "rookie_year": 0,
    "school_name": "string",
    "state_prov": "string",
    "team_number": 0,
    "website": "http://example.com"
  }
]
```

<h3 id="getdistrictteams-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|Inline|
|304|Not Modified|Not Modified - Use Local Cached Value|None|
|401|Unauthorized||None|

<h3 id="getdistrictteams-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Team](#schemateam)]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Cache-Control|string||The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.|
|200|ETag|string||Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## getDistrictTeamsKeys

<a id="opIdgetDistrictTeamsKeys"></a>

> Code samples

```bash
curl https://example.com/district/string/teams/keys \
  -H 'Accept: application/json' \
  -H "X-TBA-Auth-Key: ${API_KEY}"
```

`GET /district/{district_key}/teams/keys`

Gets a list of `Team` objects that competed in events in the given district.

<h3 id="getdistrictteamskeys-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-None-Match|header|string|false|Value of the `ETag` header in the most recently cached response by the client.|
|district_key|path|string|true|TBA District Key, eg `2016fim`|

> Example responses

> 200 Response

```json
[
  "string"
]
```

<h3 id="getdistrictteamskeys-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|Inline|
|304|Not Modified|Not Modified - Use Local Cached Value|None|
|401|Unauthorized||None|

<h3 id="getdistrictteamskeys-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Cache-Control|string||The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.|
|200|ETag|string||Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## getDistrictTeamsSimple

<a id="opIdgetDistrictTeamsSimple"></a>

> Code samples

```bash
curl https://example.com/district/string/teams/simple \
  -H 'Accept: application/json' \
  -H "X-TBA-Auth-Key: ${API_KEY}"
```

`GET /district/{district_key}/teams/simple`

Gets a short-form list of `Team` objects that competed in events in the given district.

<h3 id="getdistrictteamssimple-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-None-Match|header|string|false|Value of the `ETag` header in the most recently cached response by the client.|
|district_key|path|string|true|TBA District Key, eg `2016fim`|

> Example responses

> 200 Response

```json
[
  {
    "city": "string",
    "country": "string",
    "key": "string",
    "name": "string",
    "nickname": "string",
    "state_prov": "string",
    "team_number": 0
  }
]
```

<h3 id="getdistrictteamssimple-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|Inline|
|304|Not Modified|Not Modified - Use Local Cached Value|None|
|401|Unauthorized||None|

<h3 id="getdistrictteamssimple-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Team_Simple](#schemateam_simple)]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Cache-Control|string||The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.|
|200|ETag|string||Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## getDistrictsByYear

<a id="opIdgetDistrictsByYear"></a>

> Code samples

```bash
curl https://example.com/districts/0 \
  -H 'Accept: application/json' \
  -H "X-TBA-Auth-Key: ${API_KEY}"
```

`GET /districts/{year}`

Gets a list of districts and their corresponding district key, for the given year.

<h3 id="getdistrictsbyyear-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-None-Match|header|string|false|Value of the `ETag` header in the most recently cached response by the client.|
|year|path|integer|true|Competition Year (or Season). Must be 4 digits.|

> Example responses

> 200 Response

```json
[
  {
    "abbreviation": "string",
    "display_name": "string",
    "key": "string",
    "year": 0
  }
]
```

<h3 id="getdistrictsbyyear-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|Inline|
|304|Not Modified|Not Modified - Use Local Cached Value|None|
|401|Unauthorized||None|

<h3 id="getdistrictsbyyear-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[District_List](#schemadistrict_list)]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Cache-Control|string||The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.|
|200|ETag|string||Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

# Schemas

<h2 id="tocS_API_Status">API_Status</h2>
<!-- backwards compatibility -->
<a id="schemaapi_status"></a>
<a id="schema_API_Status"></a>
<a id="tocSapi_status"></a>
<a id="tocsapi_status"></a>

```json
{
  "android": {
    "latest_app_version": 0,
    "min_app_version": 0
  },
  "current_season": 0,
  "down_events": [
    "string"
  ],
  "ios": {
    "latest_app_version": 0,
    "min_app_version": 0
  },
  "is_datafeed_down": true,
  "max_season": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|android|[API_Status_App_Version](#schemaapi_status_app_version)|true|none|none|
|current_season|integer|true|none|Year of the current FRC season.|
|down_events|[string]|true|none|An array of strings containing event keys of any active events that are no longer updating.|
|ios|[API_Status_App_Version](#schemaapi_status_app_version)|true|none|none|
|is_datafeed_down|boolean|true|none|True if the entire FMS API provided by FIRST is down.|
|max_season|integer|true|none|Maximum FRC season year for valid queries.|

<h2 id="tocS_API_Status_App_Version">API_Status_App_Version</h2>
<!-- backwards compatibility -->
<a id="schemaapi_status_app_version"></a>
<a id="schema_API_Status_App_Version"></a>
<a id="tocSapi_status_app_version"></a>
<a id="tocsapi_status_app_version"></a>

```json
{
  "latest_app_version": 0,
  "min_app_version": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|latest_app_version|integer|true|none|Internal use - Latest application version available.|
|min_app_version|integer|true|none|Internal use - Minimum application version required to correctly connect and process data.|

<h2 id="tocS_Award">Award</h2>
<!-- backwards compatibility -->
<a id="schemaaward"></a>
<a id="schema_Award"></a>
<a id="tocSaward"></a>
<a id="tocsaward"></a>

```json
{
  "award_type": 0,
  "event_key": "string",
  "name": "string",
  "recipient_list": [
    {
      "awardee": "string",
      "team_key": "string"
    }
  ],
  "year": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|award_type|integer|true|none|Type of award given. See https://github.com/the-blue-alliance/the-blue-alliance/blob/master/consts/award_type.py#L6|
|event_key|string|true|none|The event_key of the event the award was won at.|
|name|string|true|none|The name of the award as provided by FIRST. May vary for the same award type.|
|recipient_list|[[Award_Recipient](#schemaaward_recipient)]|true|none|A list of recipients of the award at the event. May have either a team_key or an awardee, both, or neither (in the case the award wasn't awarded at the event).|
|year|integer|true|none|The year this award was won.|

<h2 id="tocS_Award_Recipient">Award_Recipient</h2>
<!-- backwards compatibility -->
<a id="schemaaward_recipient"></a>
<a id="schema_Award_Recipient"></a>
<a id="tocSaward_recipient"></a>
<a id="tocsaward_recipient"></a>

```json
{
  "awardee": "string",
  "team_key": "string"
}
```

An `Award_Recipient` object represents the team and/or person who received an award at an event.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|awardee|string|false|none|The name of the individual given the award. May be null.|
|team_key|string|false|none|The TBA team key for the team that was given the award. May be null.|

<h2 id="tocS_District_List">District_List</h2>
<!-- backwards compatibility -->
<a id="schemadistrict_list"></a>
<a id="schema_District_List"></a>
<a id="tocSdistrict_list"></a>
<a id="tocsdistrict_list"></a>

```json
{
  "abbreviation": "string",
  "display_name": "string",
  "key": "string",
  "year": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|abbreviation|string|true|none|The short identifier for the district.|
|display_name|string|true|none|The long name for the district.|
|key|string|true|none|Key for this district, e.g. `2016ne`.|
|year|integer|true|none|Year this district participated.|

<h2 id="tocS_District_Ranking">District_Ranking</h2>
<!-- backwards compatibility -->
<a id="schemadistrict_ranking"></a>
<a id="schema_District_Ranking"></a>
<a id="tocSdistrict_ranking"></a>
<a id="tocsdistrict_ranking"></a>

```json
{
  "event_points": [
    {
      "alliance_points": 0,
      "award_points": 0,
      "district_cmp": true,
      "elim_points": 0,
      "event_key": "string",
      "qual_points": 0,
      "total": 0
    }
  ],
  "point_total": 0,
  "rank": 0,
  "rookie_bonus": 0,
  "team_key": "string"
}
```

Rank of a team in a district.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|event_points|[object]|false|none|List of events that contributed to the point total for the team.|
|point_total|integer|true|none|Total district points for the team.|
|rank|integer|true|none|Numerical rank of the team, 1 being top rank.|
|rookie_bonus|integer|false|none|Any points added to a team as a result of the rookie bonus.|
|team_key|string|true|none|TBA team key for the team.|

<h2 id="tocS_Elimination_Alliance">Elimination_Alliance</h2>
<!-- backwards compatibility -->
<a id="schemaelimination_alliance"></a>
<a id="schema_Elimination_Alliance"></a>
<a id="tocSelimination_alliance"></a>
<a id="tocselimination_alliance"></a>

```json
{
  "backup": {
    "in": "string",
    "out": "string"
  },
  "declines": [
    "string"
  ],
  "name": "string",
  "picks": [
    "string"
  ],
  "status": {
    "current_level_record": {
      "losses": 0,
      "ties": 0,
      "wins": 0
    },
    "level": "string",
    "playoff_average": 0,
    "record": {
      "losses": 0,
      "ties": 0,
      "wins": 0
    },
    "status": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|backup|object|false|none|Backup team called in, may be null.|
|declines|[string]|false|none|List of teams that declined the alliance.|
|name|string|false|none|Alliance name, may be null.|
|picks|[string]|true|none|List of team keys picked for the alliance. First pick is captain.|
|status|object|false|none|none|

<h2 id="tocS_Event">Event</h2>
<!-- backwards compatibility -->
<a id="schemaevent"></a>
<a id="schema_Event"></a>
<a id="tocSevent"></a>
<a id="tocsevent"></a>

```json
{
  "address": "string",
  "city": "string",
  "country": "string",
  "district": {
    "abbreviation": "string",
    "display_name": "string",
    "key": "string",
    "year": 0
  },
  "division_keys": [
    "string"
  ],
  "end_date": "1970-01-01",
  "event_code": "string",
  "event_type": 0,
  "event_type_string": "string",
  "first_event_code": "string",
  "first_event_id": "string",
  "gmaps_place_id": "string",
  "gmaps_url": "http://example.com",
  "key": "string",
  "lat": 0,
  "lng": 0,
  "location_name": "string",
  "name": "string",
  "parent_event_key": "string",
  "playoff_type": 0,
  "playoff_type_string": "string",
  "postal_code": "string",
  "short_name": "string",
  "start_date": "1970-01-01",
  "state_prov": "string",
  "timezone": "string",
  "webcasts": [
    {
      "channel": "string",
      "date": "string",
      "file": "string",
      "type": "youtube"
    }
  ],
  "website": "string",
  "week": 0,
  "year": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|string|false|none|Address of the event's venue, if available.|
|city|string|false|none|City, town, village, etc. the event is located in.|
|country|string|false|none|Country the event is located in.|
|district|[District_List](#schemadistrict_list)|false|none|none|
|division_keys|[string]|false|none|An array of event keys for the divisions at this event.|
|end_date|string(date)|true|none|Event end date in `yyyy-mm-dd` format.|
|event_code|string|true|none|Event short code, as provided by FIRST.|
|event_type|integer|true|none|Event Type, as defined here: https://github.com/the-blue-alliance/the-blue-alliance/blob/master/consts/event_type.py#L2|
|event_type_string|string|true|none|Event Type, eg Regional, District, or Offseason.|
|first_event_code|string|false|none|Public facing event code used by FIRST (on frc-events.firstinspires.org, for example)|
|first_event_id|string|false|none|The FIRST internal Event ID, used to link to the event on the FRC webpage.|
|gmaps_place_id|string|false|none|Google Maps Place ID for the event address.|
|gmaps_url|string(url)|false|none|Link to address location on Google Maps.|
|key|string|true|none|TBA event key with the format yyyy[EVENT_CODE], where yyyy is the year, and EVENT_CODE is the event code of the event.|
|lat|number(double)|false|none|Latitude for the event address.|
|lng|number(double)|false|none|Longitude for the event address.|
|location_name|string|false|none|Name of the location at the address for the event, eg. Blue Alliance High School.|
|name|string|true|none|Official name of event on record either provided by FIRST or organizers of offseason event.|
|parent_event_key|string|false|none|The TBA Event key that represents the event's parent. Used to link back to the event from a division event. It is also the inverse relation of `divison_keys`.|
|playoff_type|integer|false|none|Playoff Type, as defined here: https://github.com/the-blue-alliance/the-blue-alliance/blob/master/consts/playoff_type.py#L4, or null.|
|playoff_type_string|string|false|none|String representation of the `playoff_type`, or null.|
|postal_code|string|false|none|Postal code from the event address.|
|short_name|string|false|none|Same as `name` but doesn't include event specifiers, such as 'Regional' or 'District'. May be null.|
|start_date|string(date)|true|none|Event start date in `yyyy-mm-dd` format.|
|state_prov|string|false|none|State or Province the event is located in.|
|timezone|string|false|none|Timezone name.|
|webcasts|[[Webcast](#schemawebcast)]|false|none|none|
|website|string|false|none|The event's website, if any.|
|week|integer|false|none|Week of the event relative to the first official season event, zero-indexed. Only valid for Regionals, Districts, and District Championships. Null otherwise. (Eg. A season with a week 0 'preseason' event does not count, and week 1 events will show 0 here. Seasons with a week 0.5 regional event will show week 0 for those event(s) and week 1 for week 1 events and so on.)|
|year|integer|true|none|Year the event data is for.|

<h2 id="tocS_Event_District_Points">Event_District_Points</h2>
<!-- backwards compatibility -->
<a id="schemaevent_district_points"></a>
<a id="schema_Event_District_Points"></a>
<a id="tocSevent_district_points"></a>
<a id="tocsevent_district_points"></a>

```json
{
  "points": {
    "property1": {
      "alliance_points": 0,
      "award_points": 0,
      "elim_points": 0,
      "qual_points": 0,
      "total": 0
    },
    "property2": {
      "alliance_points": 0,
      "award_points": 0,
      "elim_points": 0,
      "qual_points": 0,
      "total": 0
    }
  },
  "tiebreakers": {
    "property1": {
      "highest_qual_scores": [
        0
      ],
      "qual_wins": 0
    },
    "property2": {
      "highest_qual_scores": [
        0
      ],
      "qual_wins": 0
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|points|object|true|none|Points gained for each team at the event. Stored as a key-value pair with the team key as the key, and an object describing the points as its value.|
|tiebreakers|object|false|none|Tiebreaker values for each team at the event. Stored as a key-value pair with the team key as the key, and an object describing the tiebreaker elements as its value.|

<h2 id="tocS_Event_Insights">Event_Insights</h2>
<!-- backwards compatibility -->
<a id="schemaevent_insights"></a>
<a id="schema_Event_Insights"></a>
<a id="tocSevent_insights"></a>
<a id="tocsevent_insights"></a>

```json
{
  "playoff": {},
  "qual": {}
}
```

A year-specific event insight object expressed as a JSON string, separated in to `qual` and `playoff` fields. See also Event_Insights_2016, Event_Insights_2017, etc.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|playoff|object|false|none|Insights for the playoff round of an event|
|qual|object|false|none|Inights for the qualification round of an event|

<h2 id="tocS_Event_Insights_2016">Event_Insights_2016</h2>
<!-- backwards compatibility -->
<a id="schemaevent_insights_2016"></a>
<a id="schema_Event_Insights_2016"></a>
<a id="tocSevent_insights_2016"></a>
<a id="tocsevent_insights_2016"></a>

```json
{
  "A_ChevalDeFrise": [
    0
  ],
  "A_Portcullis": [
    0
  ],
  "B_Moat": [
    0
  ],
  "B_Ramparts": [
    0
  ],
  "C_Drawbridge": [
    0
  ],
  "C_SallyPort": [
    0
  ],
  "D_RockWall": [
    0
  ],
  "D_RoughTerrain": [
    0
  ],
  "LowBar": [
    0
  ],
  "average_auto_score": 0,
  "average_boulder_score": 0,
  "average_crossing_score": 0,
  "average_foul_score": 0,
  "average_high_goals": 0,
  "average_low_goals": 0,
  "average_score": 0,
  "average_tower_score": 0,
  "average_win_margin": 0,
  "average_win_score": 0,
  "breaches": [
    0
  ],
  "captures": [
    0
  ],
  "challenges": [
    0
  ],
  "high_score": [
    "string"
  ],
  "scales": [
    0
  ]
}
```

Insights for FIRST Stronghold qualification and elimination matches.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|A_ChevalDeFrise|[number(float)]|true|none|For the Cheval De Frise - An array with three values, number of times damaged, number of opportunities to damage, and percentage.|
|A_Portcullis|[number(float)]|true|none|For the Portcullis - An array with three values, number of times damaged, number of opportunities to damage, and percentage.|
|B_Moat|[number(float)]|true|none|For the Moat - An array with three values, number of times damaged, number of opportunities to damage, and percentage.|
|B_Ramparts|[number(float)]|true|none|For the Ramparts - An array with three values, number of times damaged, number of opportunities to damage, and percentage.|
|C_Drawbridge|[number(float)]|true|none|For the Drawbridge - An array with three values, number of times damaged, number of opportunities to damage, and percentage.|
|C_SallyPort|[number(float)]|true|none|For the Sally Port - An array with three values, number of times damaged, number of opportunities to damage, and percentage.|
|D_RockWall|[number(float)]|true|none|For the Rock Wall - An array with three values, number of times damaged, number of opportunities to damage, and percentage.|
|D_RoughTerrain|[number(float)]|true|none|For the Rough Terrain - An array with three values, number of times damaged, number of opportunities to damage, and percentage.|
|LowBar|[number(float)]|true|none|For the Low Bar - An array with three values, number of times damaged, number of opportunities to damage, and percentage.|
|average_auto_score|number(float)|true|none|Average autonomous score.|
|average_boulder_score|number(float)|true|none|Average boulder score.|
|average_crossing_score|number(float)|true|none|Average crossing score.|
|average_foul_score|number(float)|true|none|Average foul score.|
|average_high_goals|number(float)|true|none|Average number of high goals scored.|
|average_low_goals|number(float)|true|none|Average number of low goals scored.|
|average_score|number(float)|true|none|Average total score.|
|average_tower_score|number(float)|true|none|Average tower score.|
|average_win_margin|number(float)|true|none|Average margin of victory.|
|average_win_score|number(float)|true|none|Average winning score.|
|breaches|[number(float)]|true|none|An array with three values, number of times breached, number of opportunities to breach, and percentage.|
|captures|[number(float)]|true|none|An array with three values, number of times captured, number of opportunities to capture, and percentage.|
|challenges|[number(float)]|true|none|An array with three values, number of times challenged, number of opportunities to challenge, and percentage.|
|high_score|[string]|true|none|An array with three values, high score, match key from the match with the high score, and the name of the match.|
|scales|[number(float)]|true|none|An array with three values, number of times scaled, number of opportunities to scale, and percentage.|

<h2 id="tocS_Event_Insights_2017">Event_Insights_2017</h2>
<!-- backwards compatibility -->
<a id="schemaevent_insights_2017"></a>
<a id="schema_Event_Insights_2017"></a>
<a id="tocSevent_insights_2017"></a>
<a id="tocsevent_insights_2017"></a>

```json
{
  "average_foul_score": 0,
  "average_fuel_points": 0,
  "average_fuel_points_auto": 0,
  "average_fuel_points_teleop": 0,
  "average_high_goals": 0,
  "average_high_goals_auto": 0,
  "average_high_goals_teleop": 0,
  "average_low_goals": 0,
  "average_low_goals_auto": 0,
  "average_low_goals_teleop": 0,
  "average_mobility_points_auto": 0,
  "average_points_auto": 0,
  "average_points_teleop": 0,
  "average_rotor_points": 0,
  "average_rotor_points_auto": 0,
  "average_rotor_points_teleop": 0,
  "average_score": 0,
  "average_takeoff_points_teleop": 0,
  "average_win_margin": 0,
  "average_win_score": 0,
  "high_kpa": [
    "string"
  ],
  "high_score": [
    "string"
  ],
  "kpa_achieved": [
    0
  ],
  "mobility_counts": [
    0
  ],
  "rotor_1_engaged": [
    0
  ],
  "rotor_1_engaged_auto": [
    0
  ],
  "rotor_2_engaged": [
    0
  ],
  "rotor_2_engaged_auto": [
    0
  ],
  "rotor_3_engaged": [
    0
  ],
  "rotor_4_engaged": [
    0
  ],
  "takeoff_counts": [
    0
  ],
  "unicorn_matches": [
    0
  ]
}
```

Insights for FIRST STEAMWORKS qualification and elimination matches.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|average_foul_score|number(float)|true|none|Average foul score.|
|average_fuel_points|number(float)|true|none|Average fuel points scored.|
|average_fuel_points_auto|number(float)|true|none|Average fuel points scored during auto.|
|average_fuel_points_teleop|number(float)|true|none|Average fuel points scored during teleop.|
|average_high_goals|number(float)|true|none|Average points scored in the high goal.|
|average_high_goals_auto|number(float)|true|none|Average points scored in the high goal during auto.|
|average_high_goals_teleop|number(float)|true|none|Average points scored in the high goal during teleop.|
|average_low_goals|number(float)|true|none|Average points scored in the low goal.|
|average_low_goals_auto|number(float)|true|none|Average points scored in the low goal during auto.|
|average_low_goals_teleop|number(float)|true|none|Average points scored in the low goal during teleop.|
|average_mobility_points_auto|number(float)|true|none|Average mobility points scored during auto.|
|average_points_auto|number(float)|true|none|Average points scored during auto.|
|average_points_teleop|number(float)|true|none|Average points scored during teleop.|
|average_rotor_points|number(float)|true|none|Average rotor points scored.|
|average_rotor_points_auto|number(float)|true|none|Average rotor points scored during auto.|
|average_rotor_points_teleop|number(float)|true|none|Average rotor points scored during teleop.|
|average_score|number(float)|true|none|Average score.|
|average_takeoff_points_teleop|number(float)|true|none|Average takeoff points scored during teleop.|
|average_win_margin|number(float)|true|none|Average margin of victory.|
|average_win_score|number(float)|true|none|Average winning score.|
|high_kpa|[string]|true|none|An array with three values, kPa scored, match key from the match with the high kPa, and the name of the match|
|high_score|[string]|true|none|An array with three values, high score, match key from the match with the high score, and the name of the match|
|kpa_achieved|[number(float)]|true|none|An array with three values, number of times kPa bonus achieved, number of opportunities to bonus, and percentage.|
|mobility_counts|[number(float)]|true|none|An array with three values, number of times mobility bonus achieved, number of opportunities to bonus, and percentage.|
|rotor_1_engaged|[number(float)]|true|none|An array with three values, number of times rotor 1 engaged, number of opportunities to engage, and percentage.|
|rotor_1_engaged_auto|[number(float)]|true|none|An array with three values, number of times rotor 1 engaged in auto, number of opportunities to engage in auto, and percentage.|
|rotor_2_engaged|[number(float)]|true|none|An array with three values, number of times rotor 2 engaged, number of opportunities to engage, and percentage.|
|rotor_2_engaged_auto|[number(float)]|true|none|An array with three values, number of times rotor 2 engaged in auto, number of opportunities to engage in auto, and percentage.|
|rotor_3_engaged|[number(float)]|true|none|An array with three values, number of times rotor 3 engaged, number of opportunities to engage, and percentage.|
|rotor_4_engaged|[number(float)]|true|none|An array with three values, number of times rotor 4 engaged, number of opportunities to engage, and percentage.|
|takeoff_counts|[number(float)]|true|none|An array with three values, number of times takeoff was counted, number of opportunities to takeoff, and percentage.|
|unicorn_matches|[number(float)]|true|none|An array with three values, number of times a unicorn match (Win + kPa & Rotor Bonuses) occured, number of opportunities to have a unicorn match, and percentage.|

<h2 id="tocS_Event_Insights_2018">Event_Insights_2018</h2>
<!-- backwards compatibility -->
<a id="schemaevent_insights_2018"></a>
<a id="schema_Event_Insights_2018"></a>
<a id="tocSevent_insights_2018"></a>
<a id="tocsevent_insights_2018"></a>

```json
{
  "auto_quest_achieved": [
    0
  ],
  "average_boost_played": 0,
  "average_endgame_points": 0,
  "average_force_played": 0,
  "average_foul_score": 0,
  "average_points_auto": 0,
  "average_points_teleop": 0,
  "average_run_points_auto": 0,
  "average_scale_ownership_points": 0,
  "average_scale_ownership_points_auto": 0,
  "average_scale_ownership_points_teleop": 0,
  "average_score": 0,
  "average_switch_ownership_points": 0,
  "average_switch_ownership_points_auto": 0,
  "average_switch_ownership_points_teleop": 0,
  "average_vault_points": 0,
  "average_win_margin": 0,
  "average_win_score": 0,
  "boost_played_counts": [
    0
  ],
  "climb_counts": [
    0
  ],
  "face_the_boss_achieved": [
    0
  ],
  "force_played_counts": [
    0
  ],
  "high_score": [
    "string"
  ],
  "levitate_played_counts": [
    0
  ],
  "run_counts_auto": [
    0
  ],
  "scale_neutral_percentage": 0,
  "scale_neutral_percentage_auto": 0,
  "scale_neutral_percentage_teleop": 0,
  "switch_owned_counts_auto": [
    0
  ],
  "unicorn_matches": [
    0
  ],
  "winning_opp_switch_denial_percentage_teleop": 0,
  "winning_own_switch_ownership_percentage": 0,
  "winning_own_switch_ownership_percentage_auto": 0,
  "winning_own_switch_ownership_percentage_teleop": 0,
  "winning_scale_ownership_percentage": 0,
  "winning_scale_ownership_percentage_auto": 0,
  "winning_scale_ownership_percentage_teleop": 0
}
```

Insights for FIRST Power Up qualification and elimination matches.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|auto_quest_achieved|[number(float)]|true|none|An array with three values, number of times auto quest was completed, number of opportunities to complete the auto quest, and percentage.|
|average_boost_played|number(float)|true|none|Average number of boost power up scored (out of 3).|
|average_endgame_points|number(float)|true|none|Average endgame points.|
|average_force_played|number(float)|true|none|Average number of force power up scored (out of 3).|
|average_foul_score|number(float)|true|none|Average foul score.|
|average_points_auto|number(float)|true|none|Average points scored during auto.|
|average_points_teleop|number(float)|true|none|Average points scored during teleop.|
|average_run_points_auto|number(float)|true|none|Average mobility points scored during auto.|
|average_scale_ownership_points|number(float)|true|none|Average scale ownership points scored.|
|average_scale_ownership_points_auto|number(float)|true|none|Average scale ownership points scored during auto.|
|average_scale_ownership_points_teleop|number(float)|true|none|Average scale ownership points scored during teleop.|
|average_score|number(float)|true|none|Average score.|
|average_switch_ownership_points|number(float)|true|none|Average switch ownership points scored.|
|average_switch_ownership_points_auto|number(float)|true|none|Average switch ownership points scored during auto.|
|average_switch_ownership_points_teleop|number(float)|true|none|Average switch ownership points scored during teleop.|
|average_vault_points|number(float)|true|none|Average value points scored.|
|average_win_margin|number(float)|true|none|Average margin of victory.|
|average_win_score|number(float)|true|none|Average winning score.|
|boost_played_counts|[number(float)]|true|none|An array with three values, number of times a boost power up was played, number of opportunities to play a boost power up, and percentage.|
|climb_counts|[number(float)]|true|none|An array with three values, number of times a climb occurred, number of opportunities to climb, and percentage.|
|face_the_boss_achieved|[number(float)]|true|none|An array with three values, number of times an alliance faced the boss, number of opportunities to face the boss, and percentage.|
|force_played_counts|[number(float)]|true|none|An array with three values, number of times a force power up was played, number of opportunities to play a force power up, and percentage.|
|high_score|[string]|true|none|An array with three values, high score, match key from the match with the high score, and the name of the match|
|levitate_played_counts|[number(float)]|true|none|An array with three values, number of times a levitate power up was played, number of opportunities to play a levitate power up, and percentage.|
|run_counts_auto|[number(float)]|true|none|An array with three values, number of times a team scored mobility points in auto, number of opportunities to score mobility points in auto, and percentage.|
|scale_neutral_percentage|number(float)|true|none|Average scale neutral percentage.|
|scale_neutral_percentage_auto|number(float)|true|none|Average scale neutral percentage during auto.|
|scale_neutral_percentage_teleop|number(float)|true|none|Average scale neutral percentage during teleop.|
|switch_owned_counts_auto|[number(float)]|true|none|An array with three values, number of times a switch was owned during auto, number of opportunities to own a switch during auto, and percentage.|
|unicorn_matches|[number(float)]|true|none|An array with three values, number of times a unicorn match (Win + Auto Quest + Face the Boss) occurred, number of opportunities to have a unicorn match, and percentage.|
|winning_opp_switch_denial_percentage_teleop|number(float)|true|none|Average opposing switch denail percentage for the winning alliance during teleop.|
|winning_own_switch_ownership_percentage|number(float)|true|none|Average own switch ownership percentage for the winning alliance.|
|winning_own_switch_ownership_percentage_auto|number(float)|true|none|Average own switch ownership percentage for the winning alliance during auto.|
|winning_own_switch_ownership_percentage_teleop|number(float)|true|none|Average own switch ownership percentage for the winning alliance during teleop.|
|winning_scale_ownership_percentage|number(float)|true|none|Average scale ownership percentage for the winning alliance.|
|winning_scale_ownership_percentage_auto|number(float)|true|none|Average scale ownership percentage for the winning alliance during auto.|
|winning_scale_ownership_percentage_teleop|number(float)|true|none|Average scale ownership percentage for the winning alliance during teleop.|

<h2 id="tocS_Event_OPRs">Event_OPRs</h2>
<!-- backwards compatibility -->
<a id="schemaevent_oprs"></a>
<a id="schema_Event_OPRs"></a>
<a id="tocSevent_oprs"></a>
<a id="tocsevent_oprs"></a>

```json
{
  "ccwms": {
    "property1": 0,
    "property2": 0
  },
  "dprs": {
    "property1": 0,
    "property2": 0
  },
  "oprs": {
    "property1": 0,
    "property2": 0
  }
}
```

OPR, DPR, and CCWM for teams at the event.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ccwms|object|false|none|A key-value pair with team key (eg `frc254`) as key and CCWM as value.|
|dprs|object|false|none|A key-value pair with team key (eg `frc254`) as key and DPR as value.|
|oprs|object|false|none|A key-value pair with team key (eg `frc254`) as key and OPR as value.|

<h2 id="tocS_Event_Predictions">Event_Predictions</h2>
<!-- backwards compatibility -->
<a id="schemaevent_predictions"></a>
<a id="schema_Event_Predictions"></a>
<a id="tocSevent_predictions"></a>
<a id="tocsevent_predictions"></a>

```json
{}
```

JSON Object containing prediction information for the event. Contains year-specific information and is subject to change.

<h2 id="tocS_Event_Ranking">Event_Ranking</h2>
<!-- backwards compatibility -->
<a id="schemaevent_ranking"></a>
<a id="schema_Event_Ranking"></a>
<a id="tocSevent_ranking"></a>
<a id="tocsevent_ranking"></a>

```json
{
  "extra_stats_info": [
    {
      "name": "string",
      "precision": 0
    }
  ],
  "rankings": [
    {
      "dq": 0,
      "extra_stats": [
        0
      ],
      "matches_played": 0,
      "qual_average": 0,
      "rank": 0,
      "record": {
        "losses": 0,
        "ties": 0,
        "wins": 0
      },
      "sort_orders": [
        0
      ],
      "team_key": "string"
    }
  ],
  "sort_order_info": [
    {
      "name": "string",
      "precision": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|extra_stats_info|[object]|false|none|List of special TBA-generated values provided in the `extra_stats` array for each item.|
|rankings|[object]|true|none|List of rankings at the event.|
|sort_order_info|[object]|true|none|List of year-specific values provided in the `sort_orders` array for each team.|

<h2 id="tocS_Event_Simple">Event_Simple</h2>
<!-- backwards compatibility -->
<a id="schemaevent_simple"></a>
<a id="schema_Event_Simple"></a>
<a id="tocSevent_simple"></a>
<a id="tocsevent_simple"></a>

```json
{
  "city": "string",
  "country": "string",
  "district": {
    "abbreviation": "string",
    "display_name": "string",
    "key": "string",
    "year": 0
  },
  "end_date": "1970-01-01",
  "event_code": "string",
  "event_type": 0,
  "key": "string",
  "name": "string",
  "start_date": "1970-01-01",
  "state_prov": "string",
  "year": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|city|string|false|none|City, town, village, etc. the event is located in.|
|country|string|false|none|Country the event is located in.|
|district|[District_List](#schemadistrict_list)|false|none|none|
|end_date|string(date)|true|none|Event end date in `yyyy-mm-dd` format.|
|event_code|string|true|none|Event short code, as provided by FIRST.|
|event_type|integer|true|none|Event Type, as defined here: https://github.com/the-blue-alliance/the-blue-alliance/blob/master/consts/event_type.py#L2|
|key|string|true|none|TBA event key with the format yyyy[EVENT_CODE], where yyyy is the year, and EVENT_CODE is the event code of the event.|
|name|string|true|none|Official name of event on record either provided by FIRST or organizers of offseason event.|
|start_date|string(date)|true|none|Event start date in `yyyy-mm-dd` format.|
|state_prov|string|false|none|State or Province the event is located in.|
|year|integer|true|none|Year the event data is for.|

<h2 id="tocS_Match">Match</h2>
<!-- backwards compatibility -->
<a id="schemamatch"></a>
<a id="schema_Match"></a>
<a id="tocSmatch"></a>
<a id="tocsmatch"></a>

```json
{
  "actual_time": 0,
  "alliances": {
    "blue": {
      "dq_team_keys": [
        "string"
      ],
      "score": 0,
      "surrogate_team_keys": [
        "string"
      ],
      "team_keys": [
        "string"
      ]
    },
    "red": {
      "dq_team_keys": [
        "string"
      ],
      "score": 0,
      "surrogate_team_keys": [
        "string"
      ],
      "team_keys": [
        "string"
      ]
    }
  },
  "comp_level": "qm",
  "event_key": "string",
  "key": "string",
  "match_number": 0,
  "post_result_time": 0,
  "predicted_time": 0,
  "score_breakdown": {},
  "set_number": 0,
  "time": 0,
  "videos": [
    {
      "key": "string",
      "type": "string"
    }
  ],
  "winning_alliance": "red"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actual_time|integer(int64)|false|none|UNIX timestamp (seconds since 1-Jan-1970 00:00:00) of actual match start time.|
|alliances|object|false|none|A list of alliances, the teams on the alliances, and their score.|
|comp_level|string|true|none|The competition level the match was played at.|
|event_key|string|true|none|Event key of the event the match was played at.|
|key|string|true|none|TBA match key with the format `yyyy[EVENT_CODE]_[COMP_LEVEL]m[MATCH_NUMBER]`, where `yyyy` is the year, and `EVENT_CODE` is the event code of the event, `COMP_LEVEL` is (qm, ef, qf, sf, f), and `MATCH_NUMBER` is the match number in the competition level. A set number may be appended to the competition level if more than one match in required per set.|
|match_number|integer|true|none|The match number of the match in the competition level.|
|post_result_time|integer(int64)|false|none|UNIX timestamp (seconds since 1-Jan-1970 00:00:00) when the match result was posted.|
|predicted_time|integer(int64)|false|none|UNIX timestamp (seconds since 1-Jan-1970 00:00:00) of the TBA predicted match start time.|
|score_breakdown|object|false|none|Score breakdown for auto, teleop, etc. points. Varies from year to year. May be null.|
|set_number|integer|true|none|The set number in a series of matches where more than one match is required in the match series.|
|time|integer(int64)|false|none|UNIX timestamp (seconds since 1-Jan-1970 00:00:00) of the scheduled match time, as taken from the published schedule.|
|videos|[object]|false|none|Array of video objects associated with this match.|
|winning_alliance|string|false|none|The color (red/blue) of the winning alliance. Will contain an empty string in the event of no winner, or a tie.|

#### Enumerated Values

|Property|Value|
|---|---|
|comp_level|qm|
|comp_level|ef|
|comp_level|qf|
|comp_level|sf|
|comp_level|f|
|winning_alliance|red|
|winning_alliance|blue|
|winning_alliance|""|

<h2 id="tocS_Match_Score_Breakdown_2015">Match_Score_Breakdown_2015</h2>
<!-- backwards compatibility -->
<a id="schemamatch_score_breakdown_2015"></a>
<a id="schema_Match_Score_Breakdown_2015"></a>
<a id="tocSmatch_score_breakdown_2015"></a>
<a id="tocsmatch_score_breakdown_2015"></a>

```json
{
  "blue": {
    "adjust_points": 0,
    "auto_points": 0,
    "container_count_level1": 0,
    "container_count_level2": 0,
    "container_count_level3": 0,
    "container_count_level4": 0,
    "container_count_level5": 0,
    "container_count_level6": 0,
    "container_points": 0,
    "container_set": true,
    "foul_count": 0,
    "foul_points": 0,
    "litter_count_container": 0,
    "litter_count_landfill": 0,
    "litter_count_unprocessed": 0,
    "litter_points": 0,
    "robot_set": true,
    "teleop_points": 0,
    "total_points": 0,
    "tote_count_far": 0,
    "tote_count_near": 0,
    "tote_points": 0,
    "tote_set": true,
    "tote_stack": true
  },
  "coopertition": "None",
  "coopertition_points": 0,
  "red": {
    "adjust_points": 0,
    "auto_points": 0,
    "container_count_level1": 0,
    "container_count_level2": 0,
    "container_count_level3": 0,
    "container_count_level4": 0,
    "container_count_level5": 0,
    "container_count_level6": 0,
    "container_points": 0,
    "container_set": true,
    "foul_count": 0,
    "foul_points": 0,
    "litter_count_container": 0,
    "litter_count_landfill": 0,
    "litter_count_unprocessed": 0,
    "litter_points": 0,
    "robot_set": true,
    "teleop_points": 0,
    "total_points": 0,
    "tote_count_far": 0,
    "tote_count_near": 0,
    "tote_points": 0,
    "tote_set": true,
    "tote_stack": true
  }
}
```

See the 2015 FMS API documentation for a description of each value

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|blue|[Match_Score_Breakdown_2015_Alliance](#schemamatch_score_breakdown_2015_alliance)|false|none|none|
|coopertition|string|false|none|none|
|coopertition_points|integer|false|none|none|
|red|[Match_Score_Breakdown_2015_Alliance](#schemamatch_score_breakdown_2015_alliance)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|coopertition|None|
|coopertition|Unknown|
|coopertition|Stack|

<h2 id="tocS_Match_Score_Breakdown_2015_Alliance">Match_Score_Breakdown_2015_Alliance</h2>
<!-- backwards compatibility -->
<a id="schemamatch_score_breakdown_2015_alliance"></a>
<a id="schema_Match_Score_Breakdown_2015_Alliance"></a>
<a id="tocSmatch_score_breakdown_2015_alliance"></a>
<a id="tocsmatch_score_breakdown_2015_alliance"></a>

```json
{
  "adjust_points": 0,
  "auto_points": 0,
  "container_count_level1": 0,
  "container_count_level2": 0,
  "container_count_level3": 0,
  "container_count_level4": 0,
  "container_count_level5": 0,
  "container_count_level6": 0,
  "container_points": 0,
  "container_set": true,
  "foul_count": 0,
  "foul_points": 0,
  "litter_count_container": 0,
  "litter_count_landfill": 0,
  "litter_count_unprocessed": 0,
  "litter_points": 0,
  "robot_set": true,
  "teleop_points": 0,
  "total_points": 0,
  "tote_count_far": 0,
  "tote_count_near": 0,
  "tote_points": 0,
  "tote_set": true,
  "tote_stack": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adjust_points|integer|false|none|none|
|auto_points|integer|false|none|none|
|container_count_level1|integer|false|none|none|
|container_count_level2|integer|false|none|none|
|container_count_level3|integer|false|none|none|
|container_count_level4|integer|false|none|none|
|container_count_level5|integer|false|none|none|
|container_count_level6|integer|false|none|none|
|container_points|integer|false|none|none|
|container_set|boolean|false|none|none|
|foul_count|integer|false|none|none|
|foul_points|integer|false|none|none|
|litter_count_container|integer|false|none|none|
|litter_count_landfill|integer|false|none|none|
|litter_count_unprocessed|integer|false|none|none|
|litter_points|integer|false|none|none|
|robot_set|boolean|false|none|none|
|teleop_points|integer|false|none|none|
|total_points|integer|false|none|none|
|tote_count_far|integer|false|none|none|
|tote_count_near|integer|false|none|none|
|tote_points|integer|false|none|none|
|tote_set|boolean|false|none|none|
|tote_stack|boolean|false|none|none|

<h2 id="tocS_Match_Score_Breakdown_2016">Match_Score_Breakdown_2016</h2>
<!-- backwards compatibility -->
<a id="schemamatch_score_breakdown_2016"></a>
<a id="schema_Match_Score_Breakdown_2016"></a>
<a id="tocSmatch_score_breakdown_2016"></a>
<a id="tocsmatch_score_breakdown_2016"></a>

```json
{
  "blue": {
    "adjustPoints": 0,
    "autoBoulderPoints": 0,
    "autoBouldersHigh": 0,
    "autoBouldersLow": 0,
    "autoCrossingPoints": 0,
    "autoPoints": 0,
    "autoReachPoints": 0,
    "breachPoints": 0,
    "capturePoints": 0,
    "foulCount": 0,
    "foulPoints": 0,
    "position1crossings": 0,
    "position2": "string",
    "position2crossings": 0,
    "position3": "string",
    "position3crossings": 0,
    "position4": "string",
    "position4crossings": 0,
    "position5": "string",
    "position5crossings": 0,
    "robot1Auto": "Crossed",
    "robot2Auto": "Crossed",
    "robot3Auto": "Crossed",
    "techFoulCount": 0,
    "teleopBoulderPoints": 0,
    "teleopBouldersHigh": 0,
    "teleopBouldersLow": 0,
    "teleopChallengePoints": 0,
    "teleopCrossingPoints": 0,
    "teleopDefensesBreached": true,
    "teleopPoints": 0,
    "teleopScalePoints": 0,
    "teleopTowerCaptured": 0,
    "totalPoints": 0,
    "towerEndStrength": 0,
    "towerFaceA": "string",
    "towerFaceB": "string",
    "towerFaceC": "string"
  },
  "red": {
    "adjustPoints": 0,
    "autoBoulderPoints": 0,
    "autoBouldersHigh": 0,
    "autoBouldersLow": 0,
    "autoCrossingPoints": 0,
    "autoPoints": 0,
    "autoReachPoints": 0,
    "breachPoints": 0,
    "capturePoints": 0,
    "foulCount": 0,
    "foulPoints": 0,
    "position1crossings": 0,
    "position2": "string",
    "position2crossings": 0,
    "position3": "string",
    "position3crossings": 0,
    "position4": "string",
    "position4crossings": 0,
    "position5": "string",
    "position5crossings": 0,
    "robot1Auto": "Crossed",
    "robot2Auto": "Crossed",
    "robot3Auto": "Crossed",
    "techFoulCount": 0,
    "teleopBoulderPoints": 0,
    "teleopBouldersHigh": 0,
    "teleopBouldersLow": 0,
    "teleopChallengePoints": 0,
    "teleopCrossingPoints": 0,
    "teleopDefensesBreached": true,
    "teleopPoints": 0,
    "teleopScalePoints": 0,
    "teleopTowerCaptured": 0,
    "totalPoints": 0,
    "towerEndStrength": 0,
    "towerFaceA": "string",
    "towerFaceB": "string",
    "towerFaceC": "string"
  }
}
```

See the 2016 FMS API documentation for a description of each value.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|blue|[Match_Score_Breakdown_2016_Alliance](#schemamatch_score_breakdown_2016_alliance)|false|none|none|
|red|[Match_Score_Breakdown_2016_Alliance](#schemamatch_score_breakdown_2016_alliance)|false|none|none|

<h2 id="tocS_Match_Score_Breakdown_2016_Alliance">Match_Score_Breakdown_2016_Alliance</h2>
<!-- backwards compatibility -->
<a id="schemamatch_score_breakdown_2016_alliance"></a>
<a id="schema_Match_Score_Breakdown_2016_Alliance"></a>
<a id="tocSmatch_score_breakdown_2016_alliance"></a>
<a id="tocsmatch_score_breakdown_2016_alliance"></a>

```json
{
  "adjustPoints": 0,
  "autoBoulderPoints": 0,
  "autoBouldersHigh": 0,
  "autoBouldersLow": 0,
  "autoCrossingPoints": 0,
  "autoPoints": 0,
  "autoReachPoints": 0,
  "breachPoints": 0,
  "capturePoints": 0,
  "foulCount": 0,
  "foulPoints": 0,
  "position1crossings": 0,
  "position2": "string",
  "position2crossings": 0,
  "position3": "string",
  "position3crossings": 0,
  "position4": "string",
  "position4crossings": 0,
  "position5": "string",
  "position5crossings": 0,
  "robot1Auto": "Crossed",
  "robot2Auto": "Crossed",
  "robot3Auto": "Crossed",
  "techFoulCount": 0,
  "teleopBoulderPoints": 0,
  "teleopBouldersHigh": 0,
  "teleopBouldersLow": 0,
  "teleopChallengePoints": 0,
  "teleopCrossingPoints": 0,
  "teleopDefensesBreached": true,
  "teleopPoints": 0,
  "teleopScalePoints": 0,
  "teleopTowerCaptured": 0,
  "totalPoints": 0,
  "towerEndStrength": 0,
  "towerFaceA": "string",
  "towerFaceB": "string",
  "towerFaceC": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adjustPoints|integer|false|none|none|
|autoBoulderPoints|integer|false|none|none|
|autoBouldersHigh|integer|false|none|none|
|autoBouldersLow|integer|false|none|none|
|autoCrossingPoints|integer|false|none|none|
|autoPoints|integer|false|none|none|
|autoReachPoints|integer|false|none|none|
|breachPoints|integer|false|none|none|
|capturePoints|integer|false|none|none|
|foulCount|integer|false|none|none|
|foulPoints|integer|false|none|none|
|position1crossings|integer|false|none|none|
|position2|string|false|none|none|
|position2crossings|integer|false|none|none|
|position3|string|false|none|none|
|position3crossings|integer|false|none|none|
|position4|string|false|none|none|
|position4crossings|integer|false|none|none|
|position5|string|false|none|none|
|position5crossings|integer|false|none|none|
|robot1Auto|string|false|none|none|
|robot2Auto|string|false|none|none|
|robot3Auto|string|false|none|none|
|techFoulCount|integer|false|none|none|
|teleopBoulderPoints|integer|false|none|none|
|teleopBouldersHigh|integer|false|none|none|
|teleopBouldersLow|integer|false|none|none|
|teleopChallengePoints|integer|false|none|none|
|teleopCrossingPoints|integer|false|none|none|
|teleopDefensesBreached|boolean|false|none|none|
|teleopPoints|integer|false|none|none|
|teleopScalePoints|integer|false|none|none|
|teleopTowerCaptured|integer|false|none|none|
|totalPoints|integer|false|none|none|
|towerEndStrength|integer|false|none|none|
|towerFaceA|string|false|none|none|
|towerFaceB|string|false|none|none|
|towerFaceC|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|robot1Auto|Crossed|
|robot1Auto|Reached|
|robot1Auto|None|
|robot2Auto|Crossed|
|robot2Auto|Reached|
|robot2Auto|None|
|robot3Auto|Crossed|
|robot3Auto|Reached|
|robot3Auto|None|

<h2 id="tocS_Match_Score_Breakdown_2017">Match_Score_Breakdown_2017</h2>
<!-- backwards compatibility -->
<a id="schemamatch_score_breakdown_2017"></a>
<a id="schema_Match_Score_Breakdown_2017"></a>
<a id="tocSmatch_score_breakdown_2017"></a>
<a id="tocsmatch_score_breakdown_2017"></a>

```json
{
  "blue": {
    "adjustPoints": 0,
    "autoFuelHigh": 0,
    "autoFuelLow": 0,
    "autoFuelPoints": 0,
    "autoMobilityPoints": 0,
    "autoPoints": 0,
    "autoRotorPoints": 0,
    "foulCount": 0,
    "foulPoints": 0,
    "kPaBonusPoints": 0,
    "kPaRankingPointAchieved": true,
    "robot1Auto": "Unknown",
    "robot2Auto": "Unknown",
    "robot3Auto": "Unknown",
    "rotor1Auto": true,
    "rotor1Engaged": true,
    "rotor2Auto": true,
    "rotor2Engaged": true,
    "rotor3Engaged": true,
    "rotor4Engaged": true,
    "rotorBonusPoints": 0,
    "rotorRankingPointAchieved": true,
    "techFoulCount": 0,
    "teleopFuelHigh": 0,
    "teleopFuelLow": 0,
    "teleopFuelPoints": 0,
    "teleopPoints": 0,
    "teleopRotorPoints": 0,
    "teleopTakeoffPoints": 0,
    "totalPoints": 0,
    "touchpadFar": "string",
    "touchpadMiddle": "string",
    "touchpadNear": "string"
  },
  "red": {
    "adjustPoints": 0,
    "autoFuelHigh": 0,
    "autoFuelLow": 0,
    "autoFuelPoints": 0,
    "autoMobilityPoints": 0,
    "autoPoints": 0,
    "autoRotorPoints": 0,
    "foulCount": 0,
    "foulPoints": 0,
    "kPaBonusPoints": 0,
    "kPaRankingPointAchieved": true,
    "robot1Auto": "Unknown",
    "robot2Auto": "Unknown",
    "robot3Auto": "Unknown",
    "rotor1Auto": true,
    "rotor1Engaged": true,
    "rotor2Auto": true,
    "rotor2Engaged": true,
    "rotor3Engaged": true,
    "rotor4Engaged": true,
    "rotorBonusPoints": 0,
    "rotorRankingPointAchieved": true,
    "techFoulCount": 0,
    "teleopFuelHigh": 0,
    "teleopFuelLow": 0,
    "teleopFuelPoints": 0,
    "teleopPoints": 0,
    "teleopRotorPoints": 0,
    "teleopTakeoffPoints": 0,
    "totalPoints": 0,
    "touchpadFar": "string",
    "touchpadMiddle": "string",
    "touchpadNear": "string"
  }
}
```

See the 2017 FMS API documentation for a description of each value.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|blue|[Match_Score_Breakdown_2017_Alliance](#schemamatch_score_breakdown_2017_alliance)|false|none|none|
|red|[Match_Score_Breakdown_2017_Alliance](#schemamatch_score_breakdown_2017_alliance)|false|none|none|

<h2 id="tocS_Match_Score_Breakdown_2017_Alliance">Match_Score_Breakdown_2017_Alliance</h2>
<!-- backwards compatibility -->
<a id="schemamatch_score_breakdown_2017_alliance"></a>
<a id="schema_Match_Score_Breakdown_2017_Alliance"></a>
<a id="tocSmatch_score_breakdown_2017_alliance"></a>
<a id="tocsmatch_score_breakdown_2017_alliance"></a>

```json
{
  "adjustPoints": 0,
  "autoFuelHigh": 0,
  "autoFuelLow": 0,
  "autoFuelPoints": 0,
  "autoMobilityPoints": 0,
  "autoPoints": 0,
  "autoRotorPoints": 0,
  "foulCount": 0,
  "foulPoints": 0,
  "kPaBonusPoints": 0,
  "kPaRankingPointAchieved": true,
  "robot1Auto": "Unknown",
  "robot2Auto": "Unknown",
  "robot3Auto": "Unknown",
  "rotor1Auto": true,
  "rotor1Engaged": true,
  "rotor2Auto": true,
  "rotor2Engaged": true,
  "rotor3Engaged": true,
  "rotor4Engaged": true,
  "rotorBonusPoints": 0,
  "rotorRankingPointAchieved": true,
  "techFoulCount": 0,
  "teleopFuelHigh": 0,
  "teleopFuelLow": 0,
  "teleopFuelPoints": 0,
  "teleopPoints": 0,
  "teleopRotorPoints": 0,
  "teleopTakeoffPoints": 0,
  "totalPoints": 0,
  "touchpadFar": "string",
  "touchpadMiddle": "string",
  "touchpadNear": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adjustPoints|integer|false|none|none|
|autoFuelHigh|integer|false|none|none|
|autoFuelLow|integer|false|none|none|
|autoFuelPoints|integer|false|none|none|
|autoMobilityPoints|integer|false|none|none|
|autoPoints|integer|false|none|none|
|autoRotorPoints|integer|false|none|none|
|foulCount|integer|false|none|none|
|foulPoints|integer|false|none|none|
|kPaBonusPoints|integer|false|none|none|
|kPaRankingPointAchieved|boolean|false|none|none|
|robot1Auto|string|false|none|none|
|robot2Auto|string|false|none|none|
|robot3Auto|string|false|none|none|
|rotor1Auto|boolean|false|none|none|
|rotor1Engaged|boolean|false|none|none|
|rotor2Auto|boolean|false|none|none|
|rotor2Engaged|boolean|false|none|none|
|rotor3Engaged|boolean|false|none|none|
|rotor4Engaged|boolean|false|none|none|
|rotorBonusPoints|integer|false|none|none|
|rotorRankingPointAchieved|boolean|false|none|none|
|techFoulCount|integer|false|none|none|
|teleopFuelHigh|integer|false|none|none|
|teleopFuelLow|integer|false|none|none|
|teleopFuelPoints|integer|false|none|none|
|teleopPoints|integer|false|none|none|
|teleopRotorPoints|integer|false|none|none|
|teleopTakeoffPoints|integer|false|none|none|
|totalPoints|integer|false|none|none|
|touchpadFar|string|false|none|none|
|touchpadMiddle|string|false|none|none|
|touchpadNear|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|robot1Auto|Unknown|
|robot1Auto|Mobility|
|robot1Auto|None|
|robot2Auto|Unknown|
|robot2Auto|Mobility|
|robot2Auto|None|
|robot3Auto|Unknown|
|robot3Auto|Mobility|
|robot3Auto|None|

<h2 id="tocS_Match_Score_Breakdown_2018">Match_Score_Breakdown_2018</h2>
<!-- backwards compatibility -->
<a id="schemamatch_score_breakdown_2018"></a>
<a id="schema_Match_Score_Breakdown_2018"></a>
<a id="tocSmatch_score_breakdown_2018"></a>
<a id="tocsmatch_score_breakdown_2018"></a>

```json
{
  "blue": {
    "adjustPoints": 0,
    "autoOwnershipPoints": 0,
    "autoPoints": 0,
    "autoQuestRankingPoint": true,
    "autoRobot1": "string",
    "autoRobot2": "string",
    "autoRobot3": "string",
    "autoRunPoints": 0,
    "autoScaleOwnershipSec": 0,
    "autoSwitchAtZero": true,
    "autoSwitchOwnershipSec": 0,
    "endgamePoints": 0,
    "endgameRobot1": "string",
    "endgameRobot2": "string",
    "endgameRobot3": "string",
    "faceTheBossRankingPoint": true,
    "foulCount": 0,
    "foulPoints": 0,
    "rp": 0,
    "tba_gameData": "string",
    "techFoulCount": 0,
    "teleopOwnershipPoints": 0,
    "teleopPoints": 0,
    "teleopScaleBoostSec": 0,
    "teleopScaleForceSec": 0,
    "teleopScaleOwnershipSec": 0,
    "teleopSwitchBoostSec": 0,
    "teleopSwitchForceSec": 0,
    "teleopSwitchOwnershipSec": 0,
    "totalPoints": 0,
    "vaultBoostPlayed": 0,
    "vaultBoostTotal": 0,
    "vaultForcePlayed": 0,
    "vaultForceTotal": 0,
    "vaultLevitatePlayed": 0,
    "vaultLevitateTotal": 0,
    "vaultPoints": 0
  },
  "red": {
    "adjustPoints": 0,
    "autoOwnershipPoints": 0,
    "autoPoints": 0,
    "autoQuestRankingPoint": true,
    "autoRobot1": "string",
    "autoRobot2": "string",
    "autoRobot3": "string",
    "autoRunPoints": 0,
    "autoScaleOwnershipSec": 0,
    "autoSwitchAtZero": true,
    "autoSwitchOwnershipSec": 0,
    "endgamePoints": 0,
    "endgameRobot1": "string",
    "endgameRobot2": "string",
    "endgameRobot3": "string",
    "faceTheBossRankingPoint": true,
    "foulCount": 0,
    "foulPoints": 0,
    "rp": 0,
    "tba_gameData": "string",
    "techFoulCount": 0,
    "teleopOwnershipPoints": 0,
    "teleopPoints": 0,
    "teleopScaleBoostSec": 0,
    "teleopScaleForceSec": 0,
    "teleopScaleOwnershipSec": 0,
    "teleopSwitchBoostSec": 0,
    "teleopSwitchForceSec": 0,
    "teleopSwitchOwnershipSec": 0,
    "totalPoints": 0,
    "vaultBoostPlayed": 0,
    "vaultBoostTotal": 0,
    "vaultForcePlayed": 0,
    "vaultForceTotal": 0,
    "vaultLevitatePlayed": 0,
    "vaultLevitateTotal": 0,
    "vaultPoints": 0
  }
}
```

See the 2018 FMS API documentation for a description of each value. https://frcevents2.docs.apiary.io/#/reference/match-results/score-details

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|blue|[Match_Score_Breakdown_2018_Alliance](#schemamatch_score_breakdown_2018_alliance)|false|none|none|
|red|[Match_Score_Breakdown_2018_Alliance](#schemamatch_score_breakdown_2018_alliance)|false|none|none|

<h2 id="tocS_Match_Score_Breakdown_2018_Alliance">Match_Score_Breakdown_2018_Alliance</h2>
<!-- backwards compatibility -->
<a id="schemamatch_score_breakdown_2018_alliance"></a>
<a id="schema_Match_Score_Breakdown_2018_Alliance"></a>
<a id="tocSmatch_score_breakdown_2018_alliance"></a>
<a id="tocsmatch_score_breakdown_2018_alliance"></a>

```json
{
  "adjustPoints": 0,
  "autoOwnershipPoints": 0,
  "autoPoints": 0,
  "autoQuestRankingPoint": true,
  "autoRobot1": "string",
  "autoRobot2": "string",
  "autoRobot3": "string",
  "autoRunPoints": 0,
  "autoScaleOwnershipSec": 0,
  "autoSwitchAtZero": true,
  "autoSwitchOwnershipSec": 0,
  "endgamePoints": 0,
  "endgameRobot1": "string",
  "endgameRobot2": "string",
  "endgameRobot3": "string",
  "faceTheBossRankingPoint": true,
  "foulCount": 0,
  "foulPoints": 0,
  "rp": 0,
  "tba_gameData": "string",
  "techFoulCount": 0,
  "teleopOwnershipPoints": 0,
  "teleopPoints": 0,
  "teleopScaleBoostSec": 0,
  "teleopScaleForceSec": 0,
  "teleopScaleOwnershipSec": 0,
  "teleopSwitchBoostSec": 0,
  "teleopSwitchForceSec": 0,
  "teleopSwitchOwnershipSec": 0,
  "totalPoints": 0,
  "vaultBoostPlayed": 0,
  "vaultBoostTotal": 0,
  "vaultForcePlayed": 0,
  "vaultForceTotal": 0,
  "vaultLevitatePlayed": 0,
  "vaultLevitateTotal": 0,
  "vaultPoints": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adjustPoints|integer|false|none|none|
|autoOwnershipPoints|integer|false|none|none|
|autoPoints|integer|false|none|none|
|autoQuestRankingPoint|boolean|false|none|none|
|autoRobot1|string|false|none|none|
|autoRobot2|string|false|none|none|
|autoRobot3|string|false|none|none|
|autoRunPoints|integer|false|none|none|
|autoScaleOwnershipSec|integer|false|none|none|
|autoSwitchAtZero|boolean|false|none|none|
|autoSwitchOwnershipSec|integer|false|none|none|
|endgamePoints|integer|false|none|none|
|endgameRobot1|string|false|none|none|
|endgameRobot2|string|false|none|none|
|endgameRobot3|string|false|none|none|
|faceTheBossRankingPoint|boolean|false|none|none|
|foulCount|integer|false|none|none|
|foulPoints|integer|false|none|none|
|rp|integer|false|none|none|
|tba_gameData|string|false|none|Unofficial TBA-computed value of the FMS provided GameData given to the alliance teams at the start of the match. 3 Character String containing `L` and `R` only. The first character represents the near switch, the 2nd the scale, and the 3rd the far, opposing, switch from the alliance's perspective. An `L` in a position indicates the platform on the left will be lit for the alliance while an `R` will indicate the right platform will be lit for the alliance. See also [WPI Screen Steps](https://wpilib.screenstepslive.com/s/currentCS/m/getting_started/l/826278-2018-game-data-details).|
|techFoulCount|integer|false|none|none|
|teleopOwnershipPoints|integer|false|none|none|
|teleopPoints|integer|false|none|none|
|teleopScaleBoostSec|integer|false|none|none|
|teleopScaleForceSec|integer|false|none|none|
|teleopScaleOwnershipSec|integer|false|none|none|
|teleopSwitchBoostSec|integer|false|none|none|
|teleopSwitchForceSec|integer|false|none|none|
|teleopSwitchOwnershipSec|integer|false|none|none|
|totalPoints|integer|false|none|none|
|vaultBoostPlayed|integer|false|none|none|
|vaultBoostTotal|integer|false|none|none|
|vaultForcePlayed|integer|false|none|none|
|vaultForceTotal|integer|false|none|none|
|vaultLevitatePlayed|integer|false|none|none|
|vaultLevitateTotal|integer|false|none|none|
|vaultPoints|integer|false|none|none|

<h2 id="tocS_Match_Score_Breakdown_2019">Match_Score_Breakdown_2019</h2>
<!-- backwards compatibility -->
<a id="schemamatch_score_breakdown_2019"></a>
<a id="schema_Match_Score_Breakdown_2019"></a>
<a id="tocSmatch_score_breakdown_2019"></a>
<a id="tocsmatch_score_breakdown_2019"></a>

```json
{
  "blue": {
    "adjustPoints": 0,
    "autoPoints": 0,
    "bay1": "string",
    "bay2": "string",
    "bay3": "string",
    "bay4": "string",
    "bay5": "string",
    "bay6": "string",
    "bay7": "string",
    "bay8": "string",
    "cargoPoints": 0,
    "completeRocketRankingPoint": true,
    "completedRocketFar": true,
    "completedRocketNear": true,
    "endgameRobot1": "string",
    "endgameRobot2": "string",
    "endgameRobot3": "string",
    "foulCount": 0,
    "foulPoints": 0,
    "habClimbPoints": 0,
    "habDockingRankingPoint": true,
    "habLineRobot1": "string",
    "habLineRobot2": "string",
    "habLineRobot3": "string",
    "hatchPanelPoints": 0,
    "lowLeftRocketFar": "string",
    "lowLeftRocketNear": "string",
    "lowRightRocketFar": "string",
    "lowRightRocketNear": "string",
    "midLeftRocketFar": "string",
    "midLeftRocketNear": "string",
    "midRightRocketFar": "string",
    "midRightRocketNear": "string",
    "preMatchBay1": "string",
    "preMatchBay2": "string",
    "preMatchBay3": "string",
    "preMatchBay6": "string",
    "preMatchBay7": "string",
    "preMatchBay8": "string",
    "preMatchLevelRobot1": "string",
    "preMatchLevelRobot2": "string",
    "preMatchLevelRobot3": "string",
    "rp": 0,
    "sandStormBonusPoints": 0,
    "techFoulCount": 0,
    "teleopPoints": 0,
    "topLeftRocketFar": "string",
    "topLeftRocketNear": "string",
    "topRightRocketFar": "string",
    "topRightRocketNear": "string",
    "totalPoints": 0
  },
  "red": {
    "adjustPoints": 0,
    "autoPoints": 0,
    "bay1": "string",
    "bay2": "string",
    "bay3": "string",
    "bay4": "string",
    "bay5": "string",
    "bay6": "string",
    "bay7": "string",
    "bay8": "string",
    "cargoPoints": 0,
    "completeRocketRankingPoint": true,
    "completedRocketFar": true,
    "completedRocketNear": true,
    "endgameRobot1": "string",
    "endgameRobot2": "string",
    "endgameRobot3": "string",
    "foulCount": 0,
    "foulPoints": 0,
    "habClimbPoints": 0,
    "habDockingRankingPoint": true,
    "habLineRobot1": "string",
    "habLineRobot2": "string",
    "habLineRobot3": "string",
    "hatchPanelPoints": 0,
    "lowLeftRocketFar": "string",
    "lowLeftRocketNear": "string",
    "lowRightRocketFar": "string",
    "lowRightRocketNear": "string",
    "midLeftRocketFar": "string",
    "midLeftRocketNear": "string",
    "midRightRocketFar": "string",
    "midRightRocketNear": "string",
    "preMatchBay1": "string",
    "preMatchBay2": "string",
    "preMatchBay3": "string",
    "preMatchBay6": "string",
    "preMatchBay7": "string",
    "preMatchBay8": "string",
    "preMatchLevelRobot1": "string",
    "preMatchLevelRobot2": "string",
    "preMatchLevelRobot3": "string",
    "rp": 0,
    "sandStormBonusPoints": 0,
    "techFoulCount": 0,
    "teleopPoints": 0,
    "topLeftRocketFar": "string",
    "topLeftRocketNear": "string",
    "topRightRocketFar": "string",
    "topRightRocketNear": "string",
    "totalPoints": 0
  }
}
```

See the 2019 FMS API documentation for a description of each value. https://frcevents2.docs.apiary.io/#/reference/match-results/score-details

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|blue|[Match_Score_Breakdown_2019_Alliance](#schemamatch_score_breakdown_2019_alliance)|false|none|none|
|red|[Match_Score_Breakdown_2019_Alliance](#schemamatch_score_breakdown_2019_alliance)|false|none|none|

<h2 id="tocS_Match_Score_Breakdown_2019_Alliance">Match_Score_Breakdown_2019_Alliance</h2>
<!-- backwards compatibility -->
<a id="schemamatch_score_breakdown_2019_alliance"></a>
<a id="schema_Match_Score_Breakdown_2019_Alliance"></a>
<a id="tocSmatch_score_breakdown_2019_alliance"></a>
<a id="tocsmatch_score_breakdown_2019_alliance"></a>

```json
{
  "adjustPoints": 0,
  "autoPoints": 0,
  "bay1": "string",
  "bay2": "string",
  "bay3": "string",
  "bay4": "string",
  "bay5": "string",
  "bay6": "string",
  "bay7": "string",
  "bay8": "string",
  "cargoPoints": 0,
  "completeRocketRankingPoint": true,
  "completedRocketFar": true,
  "completedRocketNear": true,
  "endgameRobot1": "string",
  "endgameRobot2": "string",
  "endgameRobot3": "string",
  "foulCount": 0,
  "foulPoints": 0,
  "habClimbPoints": 0,
  "habDockingRankingPoint": true,
  "habLineRobot1": "string",
  "habLineRobot2": "string",
  "habLineRobot3": "string",
  "hatchPanelPoints": 0,
  "lowLeftRocketFar": "string",
  "lowLeftRocketNear": "string",
  "lowRightRocketFar": "string",
  "lowRightRocketNear": "string",
  "midLeftRocketFar": "string",
  "midLeftRocketNear": "string",
  "midRightRocketFar": "string",
  "midRightRocketNear": "string",
  "preMatchBay1": "string",
  "preMatchBay2": "string",
  "preMatchBay3": "string",
  "preMatchBay6": "string",
  "preMatchBay7": "string",
  "preMatchBay8": "string",
  "preMatchLevelRobot1": "string",
  "preMatchLevelRobot2": "string",
  "preMatchLevelRobot3": "string",
  "rp": 0,
  "sandStormBonusPoints": 0,
  "techFoulCount": 0,
  "teleopPoints": 0,
  "topLeftRocketFar": "string",
  "topLeftRocketNear": "string",
  "topRightRocketFar": "string",
  "topRightRocketNear": "string",
  "totalPoints": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adjustPoints|integer|false|none|none|
|autoPoints|integer|false|none|none|
|bay1|string|false|none|none|
|bay2|string|false|none|none|
|bay3|string|false|none|none|
|bay4|string|false|none|none|
|bay5|string|false|none|none|
|bay6|string|false|none|none|
|bay7|string|false|none|none|
|bay8|string|false|none|none|
|cargoPoints|integer|false|none|none|
|completeRocketRankingPoint|boolean|false|none|none|
|completedRocketFar|boolean|false|none|none|
|completedRocketNear|boolean|false|none|none|
|endgameRobot1|string|false|none|none|
|endgameRobot2|string|false|none|none|
|endgameRobot3|string|false|none|none|
|foulCount|integer|false|none|none|
|foulPoints|integer|false|none|none|
|habClimbPoints|integer|false|none|none|
|habDockingRankingPoint|boolean|false|none|none|
|habLineRobot1|string|false|none|none|
|habLineRobot2|string|false|none|none|
|habLineRobot3|string|false|none|none|
|hatchPanelPoints|integer|false|none|none|
|lowLeftRocketFar|string|false|none|none|
|lowLeftRocketNear|string|false|none|none|
|lowRightRocketFar|string|false|none|none|
|lowRightRocketNear|string|false|none|none|
|midLeftRocketFar|string|false|none|none|
|midLeftRocketNear|string|false|none|none|
|midRightRocketFar|string|false|none|none|
|midRightRocketNear|string|false|none|none|
|preMatchBay1|string|false|none|none|
|preMatchBay2|string|false|none|none|
|preMatchBay3|string|false|none|none|
|preMatchBay6|string|false|none|none|
|preMatchBay7|string|false|none|none|
|preMatchBay8|string|false|none|none|
|preMatchLevelRobot1|string|false|none|none|
|preMatchLevelRobot2|string|false|none|none|
|preMatchLevelRobot3|string|false|none|none|
|rp|integer|false|none|none|
|sandStormBonusPoints|integer|false|none|none|
|techFoulCount|integer|false|none|none|
|teleopPoints|integer|false|none|none|
|topLeftRocketFar|string|false|none|none|
|topLeftRocketNear|string|false|none|none|
|topRightRocketFar|string|false|none|none|
|topRightRocketNear|string|false|none|none|
|totalPoints|integer|false|none|none|

<h2 id="tocS_Match_Score_Breakdown_2020">Match_Score_Breakdown_2020</h2>
<!-- backwards compatibility -->
<a id="schemamatch_score_breakdown_2020"></a>
<a id="schema_Match_Score_Breakdown_2020"></a>
<a id="tocSmatch_score_breakdown_2020"></a>
<a id="tocsmatch_score_breakdown_2020"></a>

```json
{
  "blue": {
    "adjustPoints": 0,
    "autoCellPoints": 0,
    "autoCellsBottom": 0,
    "autoCellsInner": 0,
    "autoCellsOuter": 0,
    "autoInitLinePoints": 0,
    "autoPoints": 0,
    "controlPanelPoints": 0,
    "endgamePoints": 0,
    "endgameRobot1": "string",
    "endgameRobot2": "string",
    "endgameRobot3": "string",
    "endgameRungIsLevel": "string",
    "foulCount": 0,
    "foulPoints": 0,
    "initLineRobot1": "string",
    "initLineRobot2": "string",
    "initLineRobot3": "string",
    "rp": 0,
    "shieldEnergizedRankingPoint": true,
    "shieldOperationalRankingPoint": true,
    "stage1Activated": true,
    "stage2Activated": true,
    "stage3Activated": true,
    "stage3TargetColor": "string",
    "tba_numRobotsHanging": 0,
    "tba_shieldEnergizedRankingPointFromFoul": true,
    "techFoulCount": 0,
    "teleopCellPoints": 0,
    "teleopCellsBottom": 0,
    "teleopCellsInner": 0,
    "teleopCellsOuter": 0,
    "teleopPoints": 0,
    "totalPoints": 0
  },
  "red": {
    "adjustPoints": 0,
    "autoCellPoints": 0,
    "autoCellsBottom": 0,
    "autoCellsInner": 0,
    "autoCellsOuter": 0,
    "autoInitLinePoints": 0,
    "autoPoints": 0,
    "controlPanelPoints": 0,
    "endgamePoints": 0,
    "endgameRobot1": "string",
    "endgameRobot2": "string",
    "endgameRobot3": "string",
    "endgameRungIsLevel": "string",
    "foulCount": 0,
    "foulPoints": 0,
    "initLineRobot1": "string",
    "initLineRobot2": "string",
    "initLineRobot3": "string",
    "rp": 0,
    "shieldEnergizedRankingPoint": true,
    "shieldOperationalRankingPoint": true,
    "stage1Activated": true,
    "stage2Activated": true,
    "stage3Activated": true,
    "stage3TargetColor": "string",
    "tba_numRobotsHanging": 0,
    "tba_shieldEnergizedRankingPointFromFoul": true,
    "techFoulCount": 0,
    "teleopCellPoints": 0,
    "teleopCellsBottom": 0,
    "teleopCellsInner": 0,
    "teleopCellsOuter": 0,
    "teleopPoints": 0,
    "totalPoints": 0
  }
}
```

See the 2020 FMS API documentation for a description of each value. https://frcevents2.docs.apiary.io/#/reference/match-results/score-details

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|blue|[Match_Score_Breakdown_2020_Alliance](#schemamatch_score_breakdown_2020_alliance)|false|none|none|
|red|[Match_Score_Breakdown_2020_Alliance](#schemamatch_score_breakdown_2020_alliance)|false|none|none|

<h2 id="tocS_Match_Score_Breakdown_2020_Alliance">Match_Score_Breakdown_2020_Alliance</h2>
<!-- backwards compatibility -->
<a id="schemamatch_score_breakdown_2020_alliance"></a>
<a id="schema_Match_Score_Breakdown_2020_Alliance"></a>
<a id="tocSmatch_score_breakdown_2020_alliance"></a>
<a id="tocsmatch_score_breakdown_2020_alliance"></a>

```json
{
  "adjustPoints": 0,
  "autoCellPoints": 0,
  "autoCellsBottom": 0,
  "autoCellsInner": 0,
  "autoCellsOuter": 0,
  "autoInitLinePoints": 0,
  "autoPoints": 0,
  "controlPanelPoints": 0,
  "endgamePoints": 0,
  "endgameRobot1": "string",
  "endgameRobot2": "string",
  "endgameRobot3": "string",
  "endgameRungIsLevel": "string",
  "foulCount": 0,
  "foulPoints": 0,
  "initLineRobot1": "string",
  "initLineRobot2": "string",
  "initLineRobot3": "string",
  "rp": 0,
  "shieldEnergizedRankingPoint": true,
  "shieldOperationalRankingPoint": true,
  "stage1Activated": true,
  "stage2Activated": true,
  "stage3Activated": true,
  "stage3TargetColor": "string",
  "tba_numRobotsHanging": 0,
  "tba_shieldEnergizedRankingPointFromFoul": true,
  "techFoulCount": 0,
  "teleopCellPoints": 0,
  "teleopCellsBottom": 0,
  "teleopCellsInner": 0,
  "teleopCellsOuter": 0,
  "teleopPoints": 0,
  "totalPoints": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adjustPoints|integer|false|none|none|
|autoCellPoints|integer|false|none|none|
|autoCellsBottom|integer|false|none|none|
|autoCellsInner|integer|false|none|none|
|autoCellsOuter|integer|false|none|none|
|autoInitLinePoints|integer|false|none|none|
|autoPoints|integer|false|none|none|
|controlPanelPoints|integer|false|none|none|
|endgamePoints|integer|false|none|none|
|endgameRobot1|string|false|none|none|
|endgameRobot2|string|false|none|none|
|endgameRobot3|string|false|none|none|
|endgameRungIsLevel|string|false|none|none|
|foulCount|integer|false|none|none|
|foulPoints|integer|false|none|none|
|initLineRobot1|string|false|none|none|
|initLineRobot2|string|false|none|none|
|initLineRobot3|string|false|none|none|
|rp|integer|false|none|none|
|shieldEnergizedRankingPoint|boolean|false|none|none|
|shieldOperationalRankingPoint|boolean|false|none|none|
|stage1Activated|boolean|false|none|none|
|stage2Activated|boolean|false|none|none|
|stage3Activated|boolean|false|none|none|
|stage3TargetColor|string|false|none|none|
|tba_numRobotsHanging|integer|false|none|Unofficial TBA-computed value that counts the number of robots who were hanging at the end of the match.|
|tba_shieldEnergizedRankingPointFromFoul|boolean|false|none|Unofficial TBA-computed value that indicates whether the shieldEnergizedRankingPoint was earned normally or awarded due to a foul.|
|techFoulCount|integer|false|none|none|
|teleopCellPoints|integer|false|none|none|
|teleopCellsBottom|integer|false|none|none|
|teleopCellsInner|integer|false|none|none|
|teleopCellsOuter|integer|false|none|none|
|teleopPoints|integer|false|none|none|
|totalPoints|integer|false|none|none|

<h2 id="tocS_Match_Score_Breakdown_2022">Match_Score_Breakdown_2022</h2>
<!-- backwards compatibility -->
<a id="schemamatch_score_breakdown_2022"></a>
<a id="schema_Match_Score_Breakdown_2022"></a>
<a id="tocSmatch_score_breakdown_2022"></a>
<a id="tocsmatch_score_breakdown_2022"></a>

```json
{
  "blue": {
    "adjustPoints": 0,
    "autoCargoLowerBlue": 0,
    "autoCargoLowerFar": 0,
    "autoCargoLowerNear": 0,
    "autoCargoLowerRed": 0,
    "autoCargoPoints": 0,
    "autoCargoTotal": 0,
    "autoCargoUpperBlue": 0,
    "autoCargoUpperFar": 0,
    "autoCargoUpperNear": 0,
    "autoCargoUpperRed": 0,
    "autoPoints": 0,
    "autoTaxiPoints": 0,
    "cargoBonusRankingPoint": true,
    "endgamePoints": 0,
    "endgameRobot1": "Traversal",
    "endgameRobot2": "Traversal",
    "endgameRobot3": "Traversal",
    "foulCount": 0,
    "foulPoints": 0,
    "hangarBonusRankingPoint": true,
    "matchCargoTotal": 0,
    "quintetAchieved": true,
    "rp": 0,
    "taxiRobot1": "Yes",
    "taxiRobot2": "Yes",
    "taxiRobot3": "Yes",
    "techFoulCount": 0,
    "teleopCargoLowerBlue": 0,
    "teleopCargoLowerFar": 0,
    "teleopCargoLowerNear": 0,
    "teleopCargoLowerRed": 0,
    "teleopCargoPoints": 0,
    "teleopCargoTotal": 0,
    "teleopCargoUpperBlue": 0,
    "teleopCargoUpperFar": 0,
    "teleopCargoUpperNear": 0,
    "teleopCargoUpperRed": 0,
    "teleopPoints": 0,
    "totalPoints": 0
  },
  "red": {
    "adjustPoints": 0,
    "autoCargoLowerBlue": 0,
    "autoCargoLowerFar": 0,
    "autoCargoLowerNear": 0,
    "autoCargoLowerRed": 0,
    "autoCargoPoints": 0,
    "autoCargoTotal": 0,
    "autoCargoUpperBlue": 0,
    "autoCargoUpperFar": 0,
    "autoCargoUpperNear": 0,
    "autoCargoUpperRed": 0,
    "autoPoints": 0,
    "autoTaxiPoints": 0,
    "cargoBonusRankingPoint": true,
    "endgamePoints": 0,
    "endgameRobot1": "Traversal",
    "endgameRobot2": "Traversal",
    "endgameRobot3": "Traversal",
    "foulCount": 0,
    "foulPoints": 0,
    "hangarBonusRankingPoint": true,
    "matchCargoTotal": 0,
    "quintetAchieved": true,
    "rp": 0,
    "taxiRobot1": "Yes",
    "taxiRobot2": "Yes",
    "taxiRobot3": "Yes",
    "techFoulCount": 0,
    "teleopCargoLowerBlue": 0,
    "teleopCargoLowerFar": 0,
    "teleopCargoLowerNear": 0,
    "teleopCargoLowerRed": 0,
    "teleopCargoPoints": 0,
    "teleopCargoTotal": 0,
    "teleopCargoUpperBlue": 0,
    "teleopCargoUpperFar": 0,
    "teleopCargoUpperNear": 0,
    "teleopCargoUpperRed": 0,
    "teleopPoints": 0,
    "totalPoints": 0
  }
}
```

See the 2022 FMS API documentation for a description of each value. https://frc-api-docs.firstinspires.org

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|blue|[Match_Score_Breakdown_2022_Alliance](#schemamatch_score_breakdown_2022_alliance)|false|none|none|
|red|[Match_Score_Breakdown_2022_Alliance](#schemamatch_score_breakdown_2022_alliance)|false|none|none|

<h2 id="tocS_Match_Score_Breakdown_2022_Alliance">Match_Score_Breakdown_2022_Alliance</h2>
<!-- backwards compatibility -->
<a id="schemamatch_score_breakdown_2022_alliance"></a>
<a id="schema_Match_Score_Breakdown_2022_Alliance"></a>
<a id="tocSmatch_score_breakdown_2022_alliance"></a>
<a id="tocsmatch_score_breakdown_2022_alliance"></a>

```json
{
  "adjustPoints": 0,
  "autoCargoLowerBlue": 0,
  "autoCargoLowerFar": 0,
  "autoCargoLowerNear": 0,
  "autoCargoLowerRed": 0,
  "autoCargoPoints": 0,
  "autoCargoTotal": 0,
  "autoCargoUpperBlue": 0,
  "autoCargoUpperFar": 0,
  "autoCargoUpperNear": 0,
  "autoCargoUpperRed": 0,
  "autoPoints": 0,
  "autoTaxiPoints": 0,
  "cargoBonusRankingPoint": true,
  "endgamePoints": 0,
  "endgameRobot1": "Traversal",
  "endgameRobot2": "Traversal",
  "endgameRobot3": "Traversal",
  "foulCount": 0,
  "foulPoints": 0,
  "hangarBonusRankingPoint": true,
  "matchCargoTotal": 0,
  "quintetAchieved": true,
  "rp": 0,
  "taxiRobot1": "Yes",
  "taxiRobot2": "Yes",
  "taxiRobot3": "Yes",
  "techFoulCount": 0,
  "teleopCargoLowerBlue": 0,
  "teleopCargoLowerFar": 0,
  "teleopCargoLowerNear": 0,
  "teleopCargoLowerRed": 0,
  "teleopCargoPoints": 0,
  "teleopCargoTotal": 0,
  "teleopCargoUpperBlue": 0,
  "teleopCargoUpperFar": 0,
  "teleopCargoUpperNear": 0,
  "teleopCargoUpperRed": 0,
  "teleopPoints": 0,
  "totalPoints": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adjustPoints|integer|false|none|none|
|autoCargoLowerBlue|integer|false|none|none|
|autoCargoLowerFar|integer|false|none|none|
|autoCargoLowerNear|integer|false|none|none|
|autoCargoLowerRed|integer|false|none|none|
|autoCargoPoints|integer|false|none|none|
|autoCargoTotal|integer|false|none|none|
|autoCargoUpperBlue|integer|false|none|none|
|autoCargoUpperFar|integer|false|none|none|
|autoCargoUpperNear|integer|false|none|none|
|autoCargoUpperRed|integer|false|none|none|
|autoPoints|integer|false|none|none|
|autoTaxiPoints|integer|false|none|none|
|cargoBonusRankingPoint|boolean|false|none|none|
|endgamePoints|integer|false|none|none|
|endgameRobot1|string|false|none|none|
|endgameRobot2|string|false|none|none|
|endgameRobot3|string|false|none|none|
|foulCount|integer|false|none|none|
|foulPoints|integer|false|none|none|
|hangarBonusRankingPoint|boolean|false|none|none|
|matchCargoTotal|integer|false|none|none|
|quintetAchieved|boolean|false|none|none|
|rp|integer|false|none|none|
|taxiRobot1|string|false|none|none|
|taxiRobot2|string|false|none|none|
|taxiRobot3|string|false|none|none|
|techFoulCount|integer|false|none|none|
|teleopCargoLowerBlue|integer|false|none|none|
|teleopCargoLowerFar|integer|false|none|none|
|teleopCargoLowerNear|integer|false|none|none|
|teleopCargoLowerRed|integer|false|none|none|
|teleopCargoPoints|integer|false|none|none|
|teleopCargoTotal|integer|false|none|none|
|teleopCargoUpperBlue|integer|false|none|none|
|teleopCargoUpperFar|integer|false|none|none|
|teleopCargoUpperNear|integer|false|none|none|
|teleopCargoUpperRed|integer|false|none|none|
|teleopPoints|integer|false|none|none|
|totalPoints|integer|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|endgameRobot1|Traversal|
|endgameRobot1|High|
|endgameRobot1|Mid|
|endgameRobot1|Low|
|endgameRobot1|None|
|endgameRobot2|Traversal|
|endgameRobot2|High|
|endgameRobot2|Mid|
|endgameRobot2|Low|
|endgameRobot2|None|
|endgameRobot3|Traversal|
|endgameRobot3|High|
|endgameRobot3|Mid|
|endgameRobot3|Low|
|endgameRobot3|None|
|taxiRobot1|Yes|
|taxiRobot1|No|
|taxiRobot2|Yes|
|taxiRobot2|No|
|taxiRobot3|Yes|
|taxiRobot3|No|

<h2 id="tocS_Match_Simple">Match_Simple</h2>
<!-- backwards compatibility -->
<a id="schemamatch_simple"></a>
<a id="schema_Match_Simple"></a>
<a id="tocSmatch_simple"></a>
<a id="tocsmatch_simple"></a>

```json
{
  "actual_time": 0,
  "alliances": {
    "blue": {
      "dq_team_keys": [
        "string"
      ],
      "score": 0,
      "surrogate_team_keys": [
        "string"
      ],
      "team_keys": [
        "string"
      ]
    },
    "red": {
      "dq_team_keys": [
        "string"
      ],
      "score": 0,
      "surrogate_team_keys": [
        "string"
      ],
      "team_keys": [
        "string"
      ]
    }
  },
  "comp_level": "qm",
  "event_key": "string",
  "key": "string",
  "match_number": 0,
  "predicted_time": 0,
  "set_number": 0,
  "time": 0,
  "winning_alliance": "red"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actual_time|integer(int64)|false|none|UNIX timestamp (seconds since 1-Jan-1970 00:00:00) of actual match start time.|
|alliances|object|false|none|A list of alliances, the teams on the alliances, and their score.|
|comp_level|string|true|none|The competition level the match was played at.|
|event_key|string|true|none|Event key of the event the match was played at.|
|key|string|true|none|TBA match key with the format `yyyy[EVENT_CODE]_[COMP_LEVEL]m[MATCH_NUMBER]`, where `yyyy` is the year, and `EVENT_CODE` is the event code of the event, `COMP_LEVEL` is (qm, ef, qf, sf, f), and `MATCH_NUMBER` is the match number in the competition level. A set number may append the competition level if more than one match in required per set.|
|match_number|integer|true|none|The match number of the match in the competition level.|
|predicted_time|integer(int64)|false|none|UNIX timestamp (seconds since 1-Jan-1970 00:00:00) of the TBA predicted match start time.|
|set_number|integer|true|none|The set number in a series of matches where more than one match is required in the match series.|
|time|integer(int64)|false|none|UNIX timestamp (seconds since 1-Jan-1970 00:00:00) of the scheduled match time, as taken from the published schedule.|
|winning_alliance|string|false|none|The color (red/blue) of the winning alliance. Will contain an empty string in the event of no winner, or a tie.|

#### Enumerated Values

|Property|Value|
|---|---|
|comp_level|qm|
|comp_level|ef|
|comp_level|qf|
|comp_level|sf|
|comp_level|f|
|winning_alliance|red|
|winning_alliance|blue|
|winning_alliance|""|

<h2 id="tocS_Match_Timeseries_2018">Match_Timeseries_2018</h2>
<!-- backwards compatibility -->
<a id="schemamatch_timeseries_2018"></a>
<a id="schema_Match_Timeseries_2018"></a>
<a id="tocSmatch_timeseries_2018"></a>
<a id="tocsmatch_timeseries_2018"></a>

```json
{
  "blue_auto_quest": 0,
  "blue_boost_count": 0,
  "blue_boost_played": 0,
  "blue_current_powerup": "string",
  "blue_face_the_boss": 0,
  "blue_force_count": 0,
  "blue_force_played": 0,
  "blue_levitate_count": 0,
  "blue_levitate_played": 0,
  "blue_powerup_time_remaining": "string",
  "blue_scale_owned": 0,
  "blue_score": 0,
  "blue_switch_owned": 0,
  "event_key": "string",
  "match_id": "string",
  "mode": "string",
  "play": 0,
  "red_auto_quest": 0,
  "red_boost_count": 0,
  "red_boost_played": 0,
  "red_current_powerup": "string",
  "red_face_the_boss": 0,
  "red_force_count": 0,
  "red_force_played": 0,
  "red_levitate_count": 0,
  "red_levitate_played": 0,
  "red_powerup_time_remaining": "string",
  "red_scale_owned": 0,
  "red_score": 0,
  "red_switch_owned": 0,
  "time_remaining": 0
}
```

Timeseries data for the 2018 game *FIRST* POWER UP.
*WARNING:* This is *not* official data, and is subject to a significant possibility of error, or missing data. Do not rely on this data for any purpose. In fact, pretend we made it up.
*WARNING:* This model is currently under active development and may change at any time, including in breaking ways.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|blue_auto_quest|integer|false|none|1 if the blue alliance is credited with the AUTO QUEST, 0 if not.|
|blue_boost_count|integer|false|none|Number of POWER CUBES in the BOOST section of the blue alliance VAULT.|
|blue_boost_played|integer|false|none|Returns 1 if the blue alliance BOOST was played, or 0 if not played.|
|blue_current_powerup|string|false|none|Name of the current blue alliance POWER UP being played, or `null`.|
|blue_face_the_boss|integer|false|none|1 if the blue alliance is credited with FACING THE BOSS, 0 if not.|
|blue_force_count|integer|false|none|Number of POWER CUBES in the FORCE section of the blue alliance VAULT.|
|blue_force_played|integer|false|none|Returns 1 if the blue alliance FORCE was played, or 0 if not played.|
|blue_levitate_count|integer|false|none|Number of POWER CUBES in the LEVITATE section of the blue alliance VAULT.|
|blue_levitate_played|integer|false|none|Returns 1 if the blue alliance LEVITATE was played, or 0 if not played.|
|blue_powerup_time_remaining|string|false|none|Number of seconds remaining in the blue alliance POWER UP time, or 0 if none is active.|
|blue_scale_owned|integer|false|none|1 if the blue alliance owns the SCALE, 0 if not.|
|blue_score|integer|false|none|Current score for the blue alliance.|
|blue_switch_owned|integer|false|none|1 if the blue alliance owns their SWITCH, 0 if not.|
|event_key|string|false|none|TBA event key with the format yyyy[EVENT_CODE], where yyyy is the year, and EVENT_CODE is the event code of the event.|
|match_id|string|false|none|Match ID consisting of the level, match number, and set number, eg `qm45` or `f1m1`.|
|mode|string|false|none|Current mode of play, can be `pre_match`, `auto`, `telop`, or `post_match`.|
|play|integer|false|none|none|
|red_auto_quest|integer|false|none|1 if the red alliance is credited with the AUTO QUEST, 0 if not.|
|red_boost_count|integer|false|none|Number of POWER CUBES in the BOOST section of the red alliance VAULT.|
|red_boost_played|integer|false|none|Returns 1 if the red alliance BOOST was played, or 0 if not played.|
|red_current_powerup|string|false|none|Name of the current red alliance POWER UP being played, or `null`.|
|red_face_the_boss|integer|false|none|1 if the red alliance is credited with FACING THE BOSS, 0 if not.|
|red_force_count|integer|false|none|Number of POWER CUBES in the FORCE section of the red alliance VAULT.|
|red_force_played|integer|false|none|Returns 1 if the red alliance FORCE was played, or 0 if not played.|
|red_levitate_count|integer|false|none|Number of POWER CUBES in the LEVITATE section of the red alliance VAULT.|
|red_levitate_played|integer|false|none|Returns 1 if the red alliance LEVITATE was played, or 0 if not played.|
|red_powerup_time_remaining|string|false|none|Number of seconds remaining in the red alliance POWER UP time, or 0 if none is active.|
|red_scale_owned|integer|false|none|1 if the red alliance owns the SCALE, 0 if not.|
|red_score|integer|false|none|Current score for the red alliance.|
|red_switch_owned|integer|false|none|1 if the red alliance owns their SWITCH, 0 if not.|
|time_remaining|integer|false|none|Amount of time remaining in the match, only valid during `auto` and `teleop` modes.|

<h2 id="tocS_Match_alliance">Match_alliance</h2>
<!-- backwards compatibility -->
<a id="schemamatch_alliance"></a>
<a id="schema_Match_alliance"></a>
<a id="tocSmatch_alliance"></a>
<a id="tocsmatch_alliance"></a>

```json
{
  "dq_team_keys": [
    "string"
  ],
  "score": 0,
  "surrogate_team_keys": [
    "string"
  ],
  "team_keys": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dq_team_keys|[string]|false|none|TBA team keys (eg `frc254`) of any disqualified teams.|
|score|integer|true|none|Score for this alliance. Will be null or -1 for an unplayed match.|
|surrogate_team_keys|[string]|false|none|TBA team keys (eg `frc254`) of any teams playing as a surrogate.|
|team_keys|[string]|true|none|none|

<h2 id="tocS_Media">Media</h2>
<!-- backwards compatibility -->
<a id="schemamedia"></a>
<a id="schema_Media"></a>
<a id="tocSmedia"></a>
<a id="tocsmedia"></a>

```json
{
  "details": {},
  "direct_url": "string",
  "foreign_key": "string",
  "preferred": true,
  "type": "youtube",
  "view_url": "string"
}
```

The `Media` object contains a reference for most any media associated with a team or event on TBA.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|details|object|false|none|If required, a JSON dict of additional media information.|
|direct_url|string|false|none|Direct URL to the media.|
|foreign_key|string|true|none|The key used to identify this media on the media site.|
|preferred|boolean|false|none|True if the media is of high quality.|
|type|string|true|none|String type of the media element.|
|view_url|string|false|none|The URL that leads to the full web page for the media, if one exists.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|youtube|
|type|cdphotothread|
|type|imgur|
|type|facebook-profile|
|type|youtube-channel|
|type|twitter-profile|
|type|github-profile|
|type|instagram-profile|
|type|periscope-profile|
|type|grabcad|
|type|instagram-image|
|type|external-link|
|type|avatar|

<h2 id="tocS_Team">Team</h2>
<!-- backwards compatibility -->
<a id="schemateam"></a>
<a id="schema_Team"></a>
<a id="tocSteam"></a>
<a id="tocsteam"></a>

```json
{
  "address": "string",
  "city": "string",
  "country": "string",
  "gmaps_place_id": "string",
  "gmaps_url": "http://example.com",
  "home_championship": {},
  "key": "string",
  "lat": 0,
  "lng": 0,
  "location_name": "string",
  "motto": "string",
  "name": "string",
  "nickname": "string",
  "postal_code": "string",
  "rookie_year": 0,
  "school_name": "string",
  "state_prov": "string",
  "team_number": 0,
  "website": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|string|false|none|Will be NULL, for future development.|
|city|string|false|none|City of team derived from parsing the address registered with FIRST.|
|country|string|false|none|Country of team derived from parsing the address registered with FIRST.|
|gmaps_place_id|string|false|none|Will be NULL, for future development.|
|gmaps_url|string(url)|false|none|Will be NULL, for future development.|
|home_championship|object|false|none|Location of the team's home championship each year as a key-value pair. The year (as a string) is the key, and the city is the value.|
|key|string|true|none|TBA team key with the format `frcXXXX` with `XXXX` representing the team number.|
|lat|number(double)|false|none|Will be NULL, for future development.|
|lng|number(double)|false|none|Will be NULL, for future development.|
|location_name|string|false|none|Will be NULL, for future development.|
|motto|string|false|none|Team's motto as provided by FIRST. This field is deprecated and will return null - will be removed at end-of-season in 2019.|
|name|string|true|none|Official long name registered with FIRST.|
|nickname|string|false|none|Team nickname provided by FIRST.|
|postal_code|string|false|none|Postal code from the team address.|
|rookie_year|integer|false|none|First year the team officially competed.|
|school_name|string|false|none|Name of team school or affilited group registered with FIRST.|
|state_prov|string|false|none|State of team derived from parsing the address registered with FIRST.|
|team_number|integer|true|none|Official team number issued by FIRST.|
|website|string(url)|false|none|Official website associated with the team.|

<h2 id="tocS_Team_Event_Status">Team_Event_Status</h2>
<!-- backwards compatibility -->
<a id="schemateam_event_status"></a>
<a id="schema_Team_Event_Status"></a>
<a id="tocSteam_event_status"></a>
<a id="tocsteam_event_status"></a>

```json
{
  "alliance": {
    "backup": {
      "in": "string",
      "out": "string"
    },
    "name": "string",
    "number": 0,
    "pick": 0
  },
  "alliance_status_str": "string",
  "last_match_key": "string",
  "next_match_key": "string",
  "overall_status_str": "string",
  "playoff": {
    "current_level_record": {
      "losses": 0,
      "ties": 0,
      "wins": 0
    },
    "level": "qm",
    "playoff_average": 0,
    "record": {
      "losses": 0,
      "ties": 0,
      "wins": 0
    },
    "status": "won"
  },
  "playoff_status_str": "string",
  "qual": {
    "num_teams": 0,
    "ranking": {
      "dq": 0,
      "matches_played": 0,
      "qual_average": 0,
      "rank": 0,
      "record": {
        "losses": 0,
        "ties": 0,
        "wins": 0
      },
      "sort_orders": [
        0
      ],
      "team_key": "string"
    },
    "sort_order_info": [
      {
        "name": "string",
        "precision": 0
      }
    ],
    "status": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alliance|[Team_Event_Status_alliance](#schemateam_event_status_alliance)|false|none|none|
|alliance_status_str|string|false|none|An HTML formatted string suitable for display to the user containing the team's alliance pick status.|
|last_match_key|string|false|none|TBA match key for the last match the team played in at this event, or null.|
|next_match_key|string|false|none|TBA match key for the next match the team is scheduled to play in at this event, or null.|
|overall_status_str|string|false|none|An HTML formatted string suitable for display to the user containing the team's overall status summary of the event.|
|playoff|[Team_Event_Status_playoff](#schemateam_event_status_playoff)|false|none|Playoff status for this team, may be null if the team did not make playoffs, or playoffs have not begun.|
|playoff_status_str|string|false|none|An HTML formatter string suitable for display to the user containing the team's playoff status.|
|qual|[Team_Event_Status_rank](#schemateam_event_status_rank)|false|none|none|

<h2 id="tocS_Team_Event_Status_alliance">Team_Event_Status_alliance</h2>
<!-- backwards compatibility -->
<a id="schemateam_event_status_alliance"></a>
<a id="schema_Team_Event_Status_alliance"></a>
<a id="tocSteam_event_status_alliance"></a>
<a id="tocsteam_event_status_alliance"></a>

```json
{
  "backup": {
    "in": "string",
    "out": "string"
  },
  "name": "string",
  "number": 0,
  "pick": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|backup|[Team_Event_Status_alliance_backup](#schemateam_event_status_alliance_backup)|false|none|Backup status, may be null.|
|name|string|false|none|Alliance name, may be null.|
|number|integer|true|none|Alliance number.|
|pick|integer|true|none|Order the team was picked in the alliance from 0-2, with 0 being alliance captain.|

<h2 id="tocS_Team_Event_Status_alliance_backup">Team_Event_Status_alliance_backup</h2>
<!-- backwards compatibility -->
<a id="schemateam_event_status_alliance_backup"></a>
<a id="schema_Team_Event_Status_alliance_backup"></a>
<a id="tocSteam_event_status_alliance_backup"></a>
<a id="tocsteam_event_status_alliance_backup"></a>

```json
{
  "in": "string",
  "out": "string"
}
```

Backup status, may be null.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|in|string|false|none|TBA key for the backup team called in.|
|out|string|false|none|TBA key for the team replaced by the backup.|

<h2 id="tocS_Team_Event_Status_playoff">Team_Event_Status_playoff</h2>
<!-- backwards compatibility -->
<a id="schemateam_event_status_playoff"></a>
<a id="schema_Team_Event_Status_playoff"></a>
<a id="tocSteam_event_status_playoff"></a>
<a id="tocsteam_event_status_playoff"></a>

```json
{
  "current_level_record": {
    "losses": 0,
    "ties": 0,
    "wins": 0
  },
  "level": "qm",
  "playoff_average": 0,
  "record": {
    "losses": 0,
    "ties": 0,
    "wins": 0
  },
  "status": "won"
}
```

Playoff status for this team, may be null if the team did not make playoffs, or playoffs have not begun.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|current_level_record|[WLT_Record](#schemawlt_record)|false|none|A Win-Loss-Tie record for a team, or an alliance.|
|level|string|false|none|The highest playoff level the team reached.|
|playoff_average|integer|false|none|The average match score during playoffs. Year specific. May be null if not relevant for a given year.|
|record|[WLT_Record](#schemawlt_record)|false|none|A Win-Loss-Tie record for a team, or an alliance.|
|status|string|false|none|Current competition status for the playoffs.|

#### Enumerated Values

|Property|Value|
|---|---|
|level|qm|
|level|ef|
|level|qf|
|level|sf|
|level|f|
|status|won|
|status|eliminated|
|status|playing|

<h2 id="tocS_Team_Event_Status_rank">Team_Event_Status_rank</h2>
<!-- backwards compatibility -->
<a id="schemateam_event_status_rank"></a>
<a id="schema_Team_Event_Status_rank"></a>
<a id="tocSteam_event_status_rank"></a>
<a id="tocsteam_event_status_rank"></a>

```json
{
  "num_teams": 0,
  "ranking": {
    "dq": 0,
    "matches_played": 0,
    "qual_average": 0,
    "rank": 0,
    "record": {
      "losses": 0,
      "ties": 0,
      "wins": 0
    },
    "sort_orders": [
      0
    ],
    "team_key": "string"
  },
  "sort_order_info": [
    {
      "name": "string",
      "precision": 0
    }
  ],
  "status": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|num_teams|integer|false|none|Number of teams ranked.|
|ranking|object|false|none|none|
|sort_order_info|[object]|false|none|Ordered list of names corresponding to the elements of the `sort_orders` array.|
|status|string|false|none|none|

<h2 id="tocS_Team_Robot">Team_Robot</h2>
<!-- backwards compatibility -->
<a id="schemateam_robot"></a>
<a id="schema_Team_Robot"></a>
<a id="tocSteam_robot"></a>
<a id="tocsteam_robot"></a>

```json
{
  "key": "string",
  "robot_name": "string",
  "team_key": "string",
  "year": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|Internal TBA identifier for this robot.|
|robot_name|string|true|none|Name of the robot as provided by the team.|
|team_key|string|true|none|TBA team key for this robot.|
|year|integer|true|none|Year this robot competed in.|

<h2 id="tocS_Team_Simple">Team_Simple</h2>
<!-- backwards compatibility -->
<a id="schemateam_simple"></a>
<a id="schema_Team_Simple"></a>
<a id="tocSteam_simple"></a>
<a id="tocsteam_simple"></a>

```json
{
  "city": "string",
  "country": "string",
  "key": "string",
  "name": "string",
  "nickname": "string",
  "state_prov": "string",
  "team_number": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|city|string|false|none|City of team derived from parsing the address registered with FIRST.|
|country|string|false|none|Country of team derived from parsing the address registered with FIRST.|
|key|string|true|none|TBA team key with the format `frcXXXX` with `XXXX` representing the team number.|
|name|string|true|none|Official long name registered with FIRST.|
|nickname|string|false|none|Team nickname provided by FIRST.|
|state_prov|string|false|none|State of team derived from parsing the address registered with FIRST.|
|team_number|integer|true|none|Official team number issued by FIRST.|

<h2 id="tocS_WLT_Record">WLT_Record</h2>
<!-- backwards compatibility -->
<a id="schemawlt_record"></a>
<a id="schema_WLT_Record"></a>
<a id="tocSwlt_record"></a>
<a id="tocswlt_record"></a>

```json
{
  "losses": 0,
  "ties": 0,
  "wins": 0
}
```

A Win-Loss-Tie record for a team, or an alliance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|losses|integer|true|none|Number of losses.|
|ties|integer|true|none|Number of ties.|
|wins|integer|true|none|Number of wins.|

<h2 id="tocS_Webcast">Webcast</h2>
<!-- backwards compatibility -->
<a id="schemawebcast"></a>
<a id="schema_Webcast"></a>
<a id="tocSwebcast"></a>
<a id="tocswebcast"></a>

```json
{
  "channel": "string",
  "date": "string",
  "file": "string",
  "type": "youtube"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channel|string|true|none|Type specific channel information. May be the YouTube stream, or Twitch channel name. In the case of iframe types, contains HTML to embed the stream in an HTML iframe.|
|date|string|false|none|The date for the webcast in `yyyy-mm-dd` format. May be null.|
|file|string|false|none|File identification as may be required for some types. May be null.|
|type|string|true|none|Type of webcast, typically descriptive of the streaming provider.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|youtube|
|type|twitch|
|type|ustream|
|type|iframe|
|type|html5|
|type|rtmp|
|type|livestream|
|type|direct_link|
|type|mms|
|type|justin|
|type|stemtv|
|type|dacast|

<h2 id="tocS_Zebra">Zebra</h2>
<!-- backwards compatibility -->
<a id="schemazebra"></a>
<a id="schema_Zebra"></a>
<a id="tocSzebra"></a>
<a id="tocszebra"></a>

```json
{
  "alliances": {
    "blue": [
      {
        "team_key": "frc7332",
        "xs": [
          [
            2.73,
            2.7,
            null
          ]
        ],
        "ys": [
          [
            2.73,
            2.7,
            null
          ]
        ]
      }
    ],
    "red": [
      {
        "team_key": "frc7332",
        "xs": [
          [
            2.73,
            2.7,
            null
          ]
        ],
        "ys": [
          [
            2.73,
            2.7,
            null
          ]
        ]
      }
    ]
  },
  "key": "string",
  "times": [
    [
      0,
      0.1,
      0.2
    ]
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alliances|object|true|none|none|
|key|string|true|none|TBA match key with the format `yyyy[EVENT_CODE]_[COMP_LEVEL]m[MATCH_NUMBER]`, where `yyyy` is the year, and `EVENT_CODE` is the event code of the event, `COMP_LEVEL` is (qm, ef, qf, sf, f), and `MATCH_NUMBER` is the match number in the competition level. A set number may be appended to the competition level if more than one match in required per set.|
|times|[number(double)]|true|none|A list of relative timestamps for each data point. Each timestamp will correspond to the X and Y value at the same index in a team xs and ys arrays. `times`, all teams `xs` and all teams `ys` are guarenteed to be the same length.|

<h2 id="tocS_Zebra_team">Zebra_team</h2>
<!-- backwards compatibility -->
<a id="schemazebra_team"></a>
<a id="schema_Zebra_team"></a>
<a id="tocSzebra_team"></a>
<a id="tocszebra_team"></a>

```json
{
  "team_key": "frc7332",
  "xs": [
    [
      2.73,
      2.7,
      null
    ]
  ],
  "ys": [
    [
      2.73,
      2.7,
      null
    ]
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|team_key|string|true|none|The TBA team key for the Zebra MotionWorks data.|
|xs|[number(double)]|true|none|A list containing doubles and nulls representing a teams X position in feet at the corresponding timestamp. A null value represents no tracking data for a given timestamp.|
|ys|[number(double)]|true|none|A list containing doubles and nulls representing a teams Y position in feet at the corresponding timestamp. A null value represents no tracking data for a given timestamp.|
