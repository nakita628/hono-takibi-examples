<h1 id="jikan-api">Jikan API v4.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

[Jikan](https://jikan.moe) is an **Unofficial** MyAnimeList API.
It scrapes the website to satisfy the need for a complete API - which MyAnimeList lacks.

# Information

⚡ Jikan is powered by its awesome backers - 🙏 [Become a backer](https://www.patreon.com/jikan)

## Rate Limiting

| Duration | Requests |
|----|----|
| Daily | **Unlimited** |
| Per Minute | 60 requests |
| Per Second | 3 requests |

Note: It's still possible to get rate limited from MyAnimeList.net instead.


## JSON Notes
- Any property (except arrays or objects) whose value does not exist or is undetermined, will be `null`.
- Any array or object property whose value does not exist or is undetermined, will be empty.
- Any `score` property whose value does not exist or is undetermined, will be `0`.
- All dates and timestamps are returned in [ISO8601](https://en.wikipedia.org/wiki/ISO_8601) format and in UTC timezone

## Caching
By **CACHING**, we refer to the data parsed from MyAnimeList which is stored temporarily on our servers to provide better API performance.

All requests are cached for **24 hours**.

The following response headers will detail cache information.

| Header | Remarks |
| ---- | ---- |
| `Expires` | Cache expiry date |
| `Last-Modified` | Cache set date |
| `X-Request-Fingerprint` | Unique request fingerprint (only for cachable requests, not queries) |


Note: `X-Request-Fingerprint` will only be available on single resource requests and their child endpoints. e.g `/anime/1`, `/anime/1/relations`.
They won't be available on pages which perform queries, like /anime, or /top/anime, etc.

## Allowed HTTP(s) requests

**Jikan REST API does not provide authenticated requests for MyAnimeList.** This means you can not use it to update your anime/manga list.
Only GET requests are supported which return READ-ONLY data.

## HTTP Responses

All error responses are accompanied by a JSON Error response.

| Exception | HTTP Status | Remarks |
| ---- | ---- | ---- |
| N/A | `200 - OK` | The request was successful |
| N/A | `304 - Not Modified` | You have the latest data (Cache Validation response) |
| `BadRequestException`,`ValidationException` | `400 - Bad Request` | You've made an invalid request. Recheck documentation |
| `BadResponseException` | `404 - Not Found` | The resource was not found or MyAnimeList responded with a `404` |
| `BadRequestException` | `405 - Method Not Allowed` | Requested Method is not supported for resource. Only `GET` requests are allowed |
| `RateLimitException` | `429 - Too Many Request` | You are being rate limited by Jikan or MyAnimeList is rate-limiting our servers (specified in the error response) |
| `UpstreamException`,`ParserException`,etc. | `500 - Internal Server Error` | Something didn't work. Try again later. If you see an error response with a `report_url` URL, please click on it to open an auto-generated GitHub issue |
| `ServiceUnavailableException` | `503 - Service Unavailable` | In most cases this is intentionally done if the service is down for maintenance. |

## JSON Error Response

```json
 {
     "status": 500,
     "type": "InternalException",
     "message": "Exception Message",
     "error": "Exception Trace",
     "report_url": "https://github.com..."
  }
```

| Property | Remarks |
| ---- | ---- |
| `status` | Returned HTTP Status Code |
| `type` | Thrown Exception |
| `message` | Human-readable error message |
| `error` | Error response and trace from the API |
| `report_url` | Clicking this would redirect you to a generated GitHub issue |


## Cache Validation

- All requests return a `ETag` header which is an MD5 hash of the response
- You can use this hash to verify if there's new or updated content by suppliying it as the value for the `If-None-Match` in your next request header
- You will get a HTTP `304 - Not Modified` response if the content has not changed
- If the content has changed, you'll get a HTTP `200 - OK` response with the updated JSON response

![Cache Validation](https://i.imgur.com/925ozVn.png 'Cache Validation')

## Disclaimer

- Jikan is not affiliated with MyAnimeList.net.
- Jikan is a free, open-source API. Please use it responsibly.

----

By using the API, you are agreeing to Jikan's [terms of use](https://jikan.moe/terms) policy.

[v3 Documentation](https://jikan.docs.apiary.io/) - [Wrappers/SDKs](https://github.com/jikan-me/jikan#wrappers) - [Report an issue](https://github.com/jikan-me/jikan-rest/issues/new) - [Host your own server](https://github.com/jikan-me/jikan-rest)

Base URLs:

* <a href="https://api.jikan.moe/v4">https://api.jikan.moe/v4</a> - Jikan REST API

<a href="https://jikan.moe/terms">Terms of service</a>
Web: <a href="http://discord.jikan.moe">API Support (Discord)</a> 
License: <a href="https://github.com/jikan-me/jikan-rest/blob/master/LICENSE">MIT</a>

<a href="https://jikan.moe">About</a>

<h1 id="jikan-api-anime">anime</h1>

## getAnimeFullById

<a id="opIdgetAnimeFullById"></a>

> Code samples

```bash
curl https://api.jikan.moe/v4/anime/0/full \
  -H 'Accept: application/json'
```

`GET /anime/{id}/full`

<h3 id="getanimefullbyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "mal_id": 0,
    "url": "string",
    "images": {
      "jpg": {
        "image_url": "string",
        "small_image_url": "string",
        "large_image_url": "string"
      },
      "webp": {
        "image_url": "string",
        "small_image_url": "string",
        "large_image_url": "string"
      }
    },
    "trailer": {
      "youtube_id": "string",
      "url": "string",
      "embed_url": "string"
    },
    "approved": true,
    "titles": [
      {
        "type": "string",
        "title": "string"
      }
    ],
    "title": "string",
    "title_english": "string",
    "title_japanese": "string",
    "title_synonyms": [
      "string"
    ],
    "type": {},
    "source": "string",
    "episodes": 0,
    "status": "Finished Airing",
    "airing": true,
    "aired": {
      "from": "string",
      "to": "string",
      "prop": {
        "from": {
          "day": 0,
          "month": 0,
          "year": 0
        },
        "to": {
          "day": 0,
          "month": 0,
          "year": 0
        },
        "string": "string"
      }
    },
    "duration": "string",
    "rating": "G - All Ages",
    "score": 0,
    "scored_by": 0,
    "rank": 0,
    "popularity": 0,
    "members": 0,
    "favorites": 0,
    "synopsis": "string",
    "background": "string",
    "season": "summer",
    "year": 0,
    "broadcast": {
      "day": "string",
      "time": "string",
      "timezone": "string",
      "string": "string"
    },
    "producers": [
      {
        "mal_id": 0,
        "type": "string",
        "name": "string",
        "url": "string"
      }
    ],
    "licensors": [
      {
        "mal_id": 0,
        "type": "string",
        "name": "string",
        "url": "string"
      }
    ],
    "studios": [
      {
        "mal_id": 0,
        "type": "string",
        "name": "string",
        "url": "string"
      }
    ],
    "genres": [
      {
        "mal_id": 0,
        "type": "string",
        "name": "string",
        "url": "string"
      }
    ],
    "explicit_genres": [
      {
        "mal_id": 0,
        "type": "string",
        "name": "string",
        "url": "string"
      }
    ],
    "themes": [
      {
        "mal_id": 0,
        "type": "string",
        "name": "string",
        "url": "string"
      }
    ],
    "demographics": [
      {
        "mal_id": 0,
        "type": "string",
        "name": "string",
        "url": "string"
      }
    ],
    "relations": [
      {
        "relation": "string",
        "entry": [
          {
            "mal_id": 0,
            "type": "string",
            "name": "string",
            "url": "string"
          }
        ]
      }
    ],
    "theme": {
      "openings": [
        "string"
      ],
      "endings": [
        "string"
      ]
    },
    "external": [
      {
        "name": "string",
        "url": "string"
      }
    ],
    "streaming": [
      {
        "name": "string",
        "url": "string"
      }
    ]
  }
}
```

<h3 id="getanimefullbyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns complete anime resource data|Inline|
|400|Bad Request|Error: Bad request. When required parameters were not supplied.|None|

<h3 id="getanimefullbyid-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[anime_full](#schemaanime_full)|false|none|Full anime Resource|

<aside class="success">
This operation does not require authentication
</aside>

## getAnimeById

<a id="opIdgetAnimeById"></a>

> Code samples

```bash
curl https://api.jikan.moe/v4/anime/0 \
  -H 'Accept: application/json'
```

`GET /anime/{id}`

<h3 id="getanimebyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "mal_id": 0,
    "url": "string",
    "images": {
      "jpg": {
        "image_url": "string",
        "small_image_url": "string",
        "large_image_url": "string"
      },
      "webp": {
        "image_url": "string",
        "small_image_url": "string",
        "large_image_url": "string"
      }
    },
    "trailer": {
      "youtube_id": "string",
      "url": "string",
      "embed_url": "string"
    },
    "approved": true,
    "titles": [
      {
        "type": "string",
        "title": "string"
      }
    ],
    "title": "string",
    "title_english": "string",
    "title_japanese": "string",
    "title_synonyms": [
      "string"
    ],
    "type": {},
    "source": "string",
    "episodes": 0,
    "status": "Finished Airing",
    "airing": true,
    "aired": {
      "from": "string",
      "to": "string",
      "prop": {
        "from": {
          "day": 0,
          "month": 0,
          "year": 0
        },
        "to": {
          "day": 0,
          "month": 0,
          "year": 0
        },
        "string": "string"
      }
    },
    "duration": "string",
    "rating": "G - All Ages",
    "score": 0,
    "scored_by": 0,
    "rank": 0,
    "popularity": 0,
    "members": 0,
    "favorites": 0,
    "synopsis": "string",
    "background": "string",
    "season": "summer",
    "year": 0,
    "broadcast": {
      "day": "string",
      "time": "string",
      "timezone": "string",
      "string": "string"
    },
    "producers": [
      {
        "mal_id": 0,
        "type": "string",
        "name": "string",
        "url": "string"
      }
    ],
    "licensors": [
      {
        "mal_id": 0,
        "type": "string",
        "name": "string",
        "url": "string"
      }
    ],
    "studios": [
      {
        "mal_id": 0,
        "type": "string",
        "name": "string",
        "url": "string"
      }
    ],
    "genres": [
      {
        "mal_id": 0,
        "type": "string",
        "name": "string",
        "url": "string"
      }
    ],
    "explicit_genres": [
      {
        "mal_id": 0,
        "type": "string",
        "name": "string",
        "url": "string"
      }
    ],
    "themes": [
      {
        "mal_id": 0,
        "type": "string",
        "name": "string",
        "url": "string"
      }
    ],
    "demographics": [
      {
        "mal_id": 0,
        "type": "string",
        "name": "string",
        "url": "string"
      }
    ]
  }
}
```

<h3 id="getanimebyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns anime resource|Inline|
|400|Bad Request|Error: Bad request. When required parameters were not supplied.|None|

<h3 id="getanimebyid-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[anime](#schemaanime)|false|none|Anime Resource|

<aside class="success">
This operation does not require authentication
</aside>

## getAnimeCharacters

<a id="opIdgetAnimeCharacters"></a>

> Code samples

```bash
curl https://api.jikan.moe/v4/anime/0/characters \
  -H 'Accept: application/json'
```

`GET /anime/{id}/characters`

<h3 id="getanimecharacters-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "character": {
        "mal_id": 0,
        "url": "string",
        "images": {
          "jpg": {
            "image_url": "string",
            "small_image_url": "string"
          },
          "webp": {
            "image_url": "string",
            "small_image_url": "string"
          }
        },
        "name": "string"
      },
      "role": "string",
      "voice_actors": [
        {
          "person": {
            "mal_id": 0,
            "url": "string",
            "images": {
              "jpg": {
                "image_url": "string"
              }
            },
            "name": "string"
          },
          "language": "string"
        }
      ]
    }
  ]
}
```

<h3 id="getanimecharacters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns anime characters resource|[anime_characters](#schemaanime_characters)|
|400|Bad Request|Error: Bad request. When required parameters were not supplied.|None|

<aside class="success">
This operation does not require authentication
</aside>

## getAnimeStaff

<a id="opIdgetAnimeStaff"></a>

> Code samples

```bash
curl https://api.jikan.moe/v4/anime/0/staff \
  -H 'Accept: application/json'
```

`GET /anime/{id}/staff`

<h3 id="getanimestaff-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "person": {
        "mal_id": 0,
        "url": "string",
        "images": {
          "jpg": {
            "image_url": "string"
          }
        },
        "name": "string"
      },
      "positions": [
        "string"
      ]
    }
  ]
}
```

<h3 id="getanimestaff-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns anime staff resource|[anime_staff](#schemaanime_staff)|
|400|Bad Request|Error: Bad request. When required parameters were not supplied.|None|

<aside class="success">
This operation does not require authentication
</aside>

## getAnimeEpisodes

<a id="opIdgetAnimeEpisodes"></a>

> Code samples

```bash
curl https://api.jikan.moe/v4/anime/0/episodes \
  -H 'Accept: application/json'
```

`GET /anime/{id}/episodes`

<h3 id="getanimeepisodes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|none|
|page|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "mal_id": 0,
      "url": "string",
      "title": "string",
      "title_japanese": "string",
      "title_romanji": "string",
      "aired": "string",
      "score": null,
      "filler": true,
      "recap": true,
      "forum_url": "string"
    }
  ],
  "pagination": {
    "last_visible_page": 0,
    "has_next_page": true
  }
}
```

<h3 id="getanimeepisodes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns a list of anime episodes|[anime_episodes](#schemaanime_episodes)|
|400|Bad Request|Error: Bad request. When required parameters were not supplied.|None|

<aside class="success">
This operation does not require authentication
</aside>

## getAnimeEpisodeById

<a id="opIdgetAnimeEpisodeById"></a>

> Code samples

```bash
curl https://api.jikan.moe/v4/anime/0/episodes/0 \
  -H 'Accept: application/json'
```

`GET /anime/{id}/episodes/{episode}`

<h3 id="getanimeepisodebyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|none|
|episode|path|integer|true|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "mal_id": 0,
    "url": "string",
    "title": "string",
    "title_japanese": "string",
    "title_romanji": "string",
    "duration": 0,
    "aired": "string",
    "filler": true,
    "recap": true,
    "synopsis": "string"
  }
}
```

<h3 id="getanimeepisodebyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns a single anime episode resource|Inline|
|400|Bad Request|Error: Bad request. When required parameters were not supplied.|None|

<h3 id="getanimeepisodebyid-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[anime_episode](#schemaanime_episode)|false|none|Anime Episode Resource|

<aside class="success">
This operation does not require authentication
</aside>

## getAnimeNews

<a id="opIdgetAnimeNews"></a>

> Code samples

```bash
curl https://api.jikan.moe/v4/anime/0/news \
  -H 'Accept: application/json'
```

`GET /anime/{id}/news`

<h3 id="getanimenews-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|none|
|page|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "pagination": {
    "last_visible_page": 0,
    "has_next_page": true
  },
  "data": [
    {
      "mal_id": 0,
      "url": "string",
      "title": "string",
      "date": "string",
      "author_username": "string",
      "author_url": "string",
      "forum_url": "string",
      "images": {
        "jpg": {
          "image_url": "string"
        }
      },
      "comments": 0,
      "excerpt": "string"
    }
  ]
}
```

<h3 id="getanimenews-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns a list of news articles related to the entry|[anime_news](#schemaanime_news)|
|400|Bad Request|Error: Bad request. When required parameters were not supplied.|None|

<aside class="success">
This operation does not require authentication
</aside>

## getAnimeForum

<a id="opIdgetAnimeForum"></a>

> Code samples

```bash
curl https://api.jikan.moe/v4/anime/0/forum \
  -H 'Accept: application/json'
```

`GET /anime/{id}/forum`

<h3 id="getanimeforum-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|none|
|filter|query|string|false|Filter topics|

#### Enumerated Values

|Parameter|Value|
|---|---|
|filter|all|
|filter|episode|
|filter|other|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "mal_id": 0,
      "url": "string",
      "title": "string",
      "date": "string",
      "author_username": "string",
      "author_url": "string",
      "comments": 0,
      "last_comment": {
        "url": "string",
        "author_username": "string",
        "author_url": "string",
        "date": "string"
      }
    }
  ]
}
```

<h3 id="getanimeforum-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns a list of forum topics related to the entry|[forum](#schemaforum)|
|400|Bad Request|Error: Bad request. When required parameters were not supplied.|None|

<aside class="success">
This operation does not require authentication
</aside>

## getAnimeVideos

<a id="opIdgetAnimeVideos"></a>

> Code samples

```bash
curl https://api.jikan.moe/v4/anime/0/videos \
  -H 'Accept: application/json'
```

`GET /anime/{id}/videos`

<h3 id="getanimevideos-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "promo": [
      {
        "title": "string",
        "trailer": {
          "youtube_id": "string",
          "url": "string",
          "embed_url": "string",
          "images": {
            "image_url": "string",
            "small_image_url": "string",
            "medium_image_url": "string",
            "large_image_url": "string",
            "maximum_image_url": "string"
          }
        }
      }
    ],
    "episodes": [
      {
        "mal_id": 0,
        "url": "string",
        "title": "string",
        "episode": "string",
        "images": {
          "jpg": {
            "image_url": "string"
          }
        }
      }
    ],
    "music_videos": [
      {
        "title": "string",
        "video": {
          "youtube_id": "string",
          "url": "string",
          "embed_url": "string",
          "images": {
            "image_url": "string",
            "small_image_url": "string",
            "medium_image_url": "string",
            "large_image_url": "string",
            "maximum_image_url": "string"
          }
        },
        "meta": {
          "title": "string",
          "author": "string"
        }
      }
    ]
  }
}
```

<h3 id="getanimevideos-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns videos related to the entry|[anime_videos](#schemaanime_videos)|
|400|Bad Request|Error: Bad request. When required parameters were not supplied.|None|

<aside class="success">
This operation does not require authentication
</aside>

## getAnimeVideosEpisodes

<a id="opIdgetAnimeVideosEpisodes"></a>

> Code samples

```bash
curl https://api.jikan.moe/v4/anime/0/videos/episodes \
  -H 'Accept: application/json'
```

`GET /anime/{id}/videos/episodes`

<h3 id="getanimevideosepisodes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|none|
|page|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "mal_id": 0,
      "title": "string",
      "episode": "string",
      "url": "string",
      "images": {
        "jpg": {
          "image_url": "string"
        }
      }
    }
  ],
  "pagination": {
    "last_visible_page": 0,
    "has_next_page": true
  }
}
```

<h3 id="getanimevideosepisodes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns episode videos related to the entry|[anime_videos_episodes](#schemaanime_videos_episodes)|
|400|Bad Request|Error: Bad request. When required parameters were not supplied.|None|

<aside class="success">
This operation does not require authentication
</aside>

## getAnimePictures

<a id="opIdgetAnimePictures"></a>

> Code samples

```bash
curl https://api.jikan.moe/v4/anime/0/pictures \
  -H 'Accept: application/json'
```

`GET /anime/{id}/pictures`

<h3 id="getanimepictures-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "images": {
        "jpg": {
          "image_url": "string"
        }
      }
    }
  ]
}
```

<h3 id="getanimepictures-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns pictures related to the entry|[pictures_variants](#schemapictures_variants)|
|400|Bad Request|Error: Bad request. When required parameters were not supplied.|None|

<aside class="success">
This operation does not require authentication
</aside>

## getAnimeStatistics

<a id="opIdgetAnimeStatistics"></a>

> Code samples

```bash
curl https://api.jikan.moe/v4/anime/0/statistics \
  -H 'Accept: application/json'
```

`GET /anime/{id}/statistics`

<h3 id="getanimestatistics-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "watching": 0,
    "completed": 0,
    "on_hold": 0,
    "dropped": 0,
    "plan_to_watch": 0,
    "total": 0,
    "scores": [
      {
        "score": 0,
        "votes": 0,
        "percentage": 0
      }
    ]
  }
}
```

<h3 id="getanimestatistics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns anime statistics|[anime_statistics](#schemaanime_statistics)|
|400|Bad Request|Error: Bad request. When required parameters were not supplied.|None|

<aside class="success">
This operation does not require authentication
</aside>

## getAnimeMoreInfo

<a id="opIdgetAnimeMoreInfo"></a>

> Code samples

```bash
curl https://api.jikan.moe/v4/anime/0/moreinfo \
  -H 'Accept: application/json'
```

`GET /anime/{id}/moreinfo`

<h3 id="getanimemoreinfo-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "moreinfo": "string"
  }
}
```

<h3 id="getanimemoreinfo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns anime statistics|[moreinfo](#schemamoreinfo)|
|400|Bad Request|Error: Bad request. When required parameters were not supplied.|None|

<aside class="success">
This operation does not require authentication
</aside>

## getAnimeRecommendations

<a id="opIdgetAnimeRecommendations"></a>

> Code samples

```bash
curl https://api.jikan.moe/v4/anime/0/recommendations \
  -H 'Accept: application/json'
```

`GET /anime/{id}/recommendations`

<h3 id="getanimerecommendations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "entry": {
        "mal_id": 0,
        "url": "string",
        "images": {
          "jpg": {
            "image_url": "string",
            "small_image_url": "string",
            "large_image_url": "string"
          },
          "webp": {
            "image_url": "string",
            "small_image_url": "string",
            "large_image_url": "string"
          }
        },
        "title": "string"
      }
    }
  ]
}
```

<h3 id="getanimerecommendations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns anime recommendations|[entry_recommendations](#schemaentry_recommendations)|
|400|Bad Request|Error: Bad request. When required parameters were not supplied.|None|

<aside class="success">
This operation does not require authentication
</aside>

## getAnimeUserUpdates

<a id="opIdgetAnimeUserUpdates"></a>

> Code samples

```bash
curl https://api.jikan.moe/v4/anime/0/userupdates \
  -H 'Accept: application/json'
```

`GET /anime/{id}/userupdates`

<h3 id="getanimeuserupdates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|none|
|page|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "user": {
        "username": "string",
        "url": "string",
        "images": {
          "jpg": {
            "image_url": "string"
          },
          "webp": {
            "image_url": "string"
          }
        }
      },
      "score": 0,
      "status": "string",
      "episodes_seen": 0,
      "episodes_total": 0,
      "date": "string"
    }
  ],
  "pagination": {
    "last_visible_page": 0,
    "has_next_page": true
  }
}
```

<h3 id="getanimeuserupdates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns a list of users who have added/updated/removed the entry on their list|[anime_userupdates](#schemaanime_userupdates)|
|400|Bad Request|Error: Bad request. When required parameters were not supplied.|None|

<aside class="success">
This operation does not require authentication
</aside>

## getAnimeReviews

<a id="opIdgetAnimeReviews"></a>

> Code samples

```bash
curl https://api.jikan.moe/v4/anime/0/reviews \
  -H 'Accept: application/json'
```

`GET /anime/{id}/reviews`

<h3 id="getanimereviews-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|none|
|page|query|integer|false|none|
|preliminary|query|boolean|false|Any reviews left during an ongoing anime/manga, those reviews are tagged as preliminary. NOTE: Preliminary reviews are not returned by default so if the entry is airing/publishing you need to add this otherwise you will get an empty list. e.g usage: `?preliminary=true`|
|spoilers|query|boolean|false|Any reviews that are tagged as a spoiler. Spoiler reviews are not returned by default. e.g usage: `?spoiler=true`|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "user": {
        "username": "string",
        "url": "string",
        "images": {
          "jpg": {
            "image_url": "string"
          },
          "webp": {
            "image_url": "string"
          }
        }
      },
      "mal_id": 0,
      "url": "string",
      "type": "string",
      "reactions": {
        "overall": 0,
        "nice": 0,
        "love_it": 0,
        "funny": 0,
        "confusing": 0,
        "informative": 0,
        "well_written": 0,
        "creative": 0
      },
      "date": "string",
      "review": "string",
      "score": 0,
      "tags": [
        "string"
      ],
      "is_spoiler": true,
      "is_preliminary": true,
      "episodes_watched": 0
    }
  ],
  "pagination": {
    "last_visible_page": 0,
    "has_next_page": true
  }
}
```

<h3 id="getanimereviews-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns anime reviews|[anime_reviews](#schemaanime_reviews)|
|400|Bad Request|Error: Bad request. When required parameters were not supplied.|None|

<aside class="success">
This operation does not require authentication
</aside>

## getAnimeRelations

<a id="opIdgetAnimeRelations"></a>

> Code samples

```bash
curl https://api.jikan.moe/v4/anime/0/relations \
  -H 'Accept: application/json'
```

`GET /anime/{id}/relations`

<h3 id="getanimerelations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "relation": "string",
      "entry": [
        {
          "mal_id": 0,
          "type": "string",
          "name": "string",
          "url": "string"
        }
      ]
    }
  ]
}
```

<h3 id="getanimerelations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns anime relations|Inline|

<h3 id="getanimerelations-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[relation](#schemarelation)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## getAnimeThemes

<a id="opIdgetAnimeThemes"></a>

> Code samples

```bash
curl https://api.jikan.moe/v4/anime/0/themes \
  -H 'Accept: application/json'
```

`GET /anime/{id}/themes`

<h3 id="getanimethemes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "openings": [
      "string"
    ],
    "endings": [
      "string"
    ]
  }
}
```

<h3 id="getanimethemes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns anime themes|[anime_themes](#schemaanime_themes)|
|400|Bad Request|Error: Bad request. When required parameters were not supplied.|None|

<aside class="success">
This operation does not require authentication
</aside>

## getAnimeExternal

<a id="opIdgetAnimeExternal"></a>

> Code samples

```bash
curl https://api.jikan.moe/v4/anime/0/external \
  -H 'Accept: application/json'
```

`GET /anime/{id}/external`

<h3 id="getanimeexternal-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "name": "string",
      "url": "string"
    }
  ]
}
```

<h3 id="getanimeexternal-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns anime external links|[external_links](#schemaexternal_links)|
|400|Bad Request|Error: Bad request. When required parameters were not supplied.|None|

<aside class="success">
This operation does not require authentication
</aside>

## getAnimeStreaming

<a id="opIdgetAnimeStreaming"></a>

> Code samples

```bash
curl https://api.jikan.moe/v4/anime/0/streaming \
  -H 'Accept: application/json'
```

`GET /anime/{id}/streaming`

<h3 id="getanimestreaming-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "name": "string",
      "url": "string"
    }
  ]
}
```

<h3 id="getanimestreaming-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns anime streaming links|[external_links](#schemaexternal_links)|
|400|Bad Request|Error: Bad request. When required parameters were not supplied.|None|

<aside class="success">
This operation does not require authentication
</aside>

## getAnimeSearch

<a id="opIdgetAnimeSearch"></a>

> Code samples

```bash
curl https://api.jikan.moe/v4/anime \
  -H 'Accept: application/json'
```

`GET /anime`

<h3 id="getanimesearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|unapproved|query|boolean|false|This is a flag. When supplied it will include entries which are unapproved. Unapproved entries on MyAnimeList are those that are user submitted and have not yet been approved by MAL to show up on other pages. They will have their own specifc pages and are often removed resulting in a 404 error. You do not need to pass a value to it. e.g usage: `?unapproved`|
|page|query|integer|false|none|
|limit|query|integer|false|none|
|q|query|string|false|none|
|type|query|[anime_search_query_type](#schemaanime_search_query_type)|false|none|
|score|query|number|false|none|
|min_score|query|number|false|Set a minimum score for results.|
|max_score|query|number|false|Set a maximum score for results|
|status|query|[anime_search_query_status](#schemaanime_search_query_status)|false|none|
|rating|query|[anime_search_query_rating](#schemaanime_search_query_rating)|false|none|
|sfw|query|boolean|false|Filter out Adult entries|
|genres|query|string|false|Filter by genre(s) IDs. Can pass multiple with a comma as a delimiter. e.g 1,2,3|
|genres_exclude|query|string|false|Exclude genre(s) IDs. Can pass multiple with a comma as a delimiter. e.g 1,2,3|
|order_by|query|[anime_search_query_orderby](#schemaanime_search_query_orderby)|false|none|
|sort|query|[search_query_sort](#schemasearch_query_sort)|false|none|
|letter|query|string|false|Return entries starting with the given letter|
|producers|query|string|false|Filter by producer(s) IDs. Can pass multiple with a comma as a delimiter. e.g 1,2,3|
|start_date|query|string|false|Filter by starting date. Format: YYYY-MM-DD. e.g `2022`, `2005-05`, `2005-01-01`|
|end_date|query|string|false|Filter by ending date. Format: YYYY-MM-DD. e.g `2022`, `2005-05`, `2005-01-01`|

#### Enumerated Values

|Parameter|Value|
|---|---|
|status|airing|
|status|complete|
|status|upcoming|
|rating|g|
|rating|pg|
|rating|pg13|
|rating|r17|
|rating|r|
|rating|rx|
|order_by|mal_id|
|order_by|title|
|order_by|start_date|
|order_by|end_date|
|order_by|episodes|
|order_by|score|
|order_by|scored_by|
|order_by|rank|
|order_by|popularity|
|order_by|members|
|order_by|favorites|
|sort|desc|
|sort|asc|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "mal_id": 0,
      "url": "string",
      "images": {
        "jpg": {
          "image_url": "string",
          "small_image_url": "string",
          "large_image_url": "string"
        },
        "webp": {
          "image_url": "string",
          "small_image_url": "string",
          "large_image_url": "string"
        }
      },
      "trailer": {
        "youtube_id": "string",
        "url": "string",
        "embed_url": "string"
      },
      "approved": true,
      "titles": [
        {
          "type": "string",
          "title": "string"
        }
      ],
      "title": "string",
      "title_english": "string",
      "title_japanese": "string",
      "title_synonyms": [
        "string"
      ],
      "type": {},
      "source": "string",
      "episodes": 0,
      "status": "Finished Airing",
      "airing": true,
      "aired": {
        "from": "string",
        "to": "string",
        "prop": {
          "from": {
            "day": 0,
            "month": 0,
            "year": 0
          },
          "to": {
            "day": 0,
            "month": 0,
            "year": 0
          },
          "string": "string"
        }
      },
      "duration": "string",
      "rating": "G - All Ages",
      "score": 0,
      "scored_by": 0,
      "rank": 0,
      "popularity": 0,
      "members": 0,
      "favorites": 0,
      "synopsis": "string",
      "background": "string",
      "season": "summer",
      "year": 0,
      "broadcast": {
        "day": "string",
        "time": "string",
        "timezone": "string",
        "string": "string"
      },
      "producers": [
        {
          "mal_id": 0,
          "type": "string",
          "name": "string",
          "url": "string"
        }
      ],
      "licensors": [
        {
          "mal_id": 0,
          "type": "string",
          "name": "string",
          "url": "string"
        }
      ],
      "studios": [
        {
          "mal_id": 0,
          "type": "string",
          "name": "string",
          "url": "string"
        }
      ],
      "genres": [
        {
          "mal_id": 0,
          "type": "string",
          "name": "string",
          "url": "string"
        }
      ],
      "explicit_genres": [
        {
          "mal_id": 0,
          "type": "string",
          "name": "string",
          "url": "string"
        }
      ],
      "themes": [
        {
          "mal_id": 0,
          "type": "string",
          "name": "string",
          "url": "string"
        }
      ],
      "demographics": [
        {
          "mal_id": 0,
          "type": "string",
          "name": "string",
          "url": "string"
        }
      ]
    }
  ],
  "pagination": {
    "last_visible_page": 0,
    "has_next_page": true,
    "current_page": 0,
    "items": {
      "count": 0,
      "total": 0,
      "per_page": 0
    }
  }
}
```

<h3 id="getanimesearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns search results for anime|[anime_search](#schemaanime_search)|
|400|Bad Request|Error: Bad request. When required parameters were not supplied.|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="jikan-api-characters">characters</h1>

## getCharacterFullById

<a id="opIdgetCharacterFullById"></a>

> Code samples

```bash
curl https://api.jikan.moe/v4/characters/0/full \
  -H 'Accept: application/json'
```

`GET /characters/{id}/full`

<h3 id="getcharacterfullbyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "mal_id": 0,
    "url": "string",
    "images": {
      "jpg": {
        "image_url": "string",
        "small_image_url": "string"
      },
      "webp": {
        "image_url": "string",
        "small_image_url": "string"
      }
    },
    "name": "string",
    "name_kanji": "string",
    "nicknames": [
      "string"
    ],
    "favorites": 0,
    "about": "string",
    "anime": [
      {
        "role": "string",
        "anime": {
          "mal_id": 0,
          "url": "string",
          "images": {
            "jpg": {
              "image_url": "string",
              "small_image_url": "string",
              "large_image_url": "string"
            },
            "webp": {
              "image_url": "string",
              "small_image_url": "string",
              "large_image_url": "string"
            }
          },
          "title": "string"
        }
      }
    ],
    "manga": [
      {
        "role": "string",
        "manga": {
          "mal_id": 0,
          "url": "string",
          "images": {
            "jpg": {
              "image_url": "string",
              "small_image_url": "string",
              "large_image_url": "string"
            },
            "webp": {
              "image_url": "string",
              "small_image_url": "string",
              "large_image_url": "string"
            }
          },
          "title": "string"
        }
      }
    ],
    "voices": [
      {
        "language": "string",
        "person": {
          "mal_id": 0,
          "url": "string",
          "images": {
            "jpg": {
              "image_url": "string"
            }
          },
          "name": "string"
        }
      }
    ]
  }
}
```

<h3 id="getcharacterfullbyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns complete character resource data|Inline|
|400|Bad Request|Error: Bad request. When required parameters were not supplied.|None|

<h3 id="getcharacterfullbyid-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[character_full](#schemacharacter_full)|false|none|Character Resource|

<aside class="success">
This operation does not require authentication
</aside>

## getCharacterById

<a id="opIdgetCharacterById"></a>

> Code samples

```bash
curl https://api.jikan.moe/v4/characters/0 \
  -H 'Accept: application/json'
```

`GET /characters/{id}`

<h3 id="getcharacterbyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "mal_id": 0,
    "url": "string",
    "images": {
      "jpg": {
        "image_url": "string",
        "small_image_url": "string"
      },
      "webp": {
        "image_url": "string",
        "small_image_url": "string"
      }
    },
    "name": "string",
    "name_kanji": "string",
    "nicknames": [
      "string"
    ],
    "favorites": 0,
    "about": "string"
  }
}
```

<h3 id="getcharacterbyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns character resource|Inline|
|400|Bad Request|Error: Bad request. When required parameters were not supplied.|None|

<h3 id="getcharacterbyid-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[character](#schemacharacter)|false|none|Character Resource|

<aside class="success">
This operation does not require authentication
</aside>

## getCharacterAnime

<a id="opIdgetCharacterAnime"></a>

> Code samples

```bash
curl https://api.jikan.moe/v4/characters/0/anime \
  -H 'Accept: application/json'
```

`GET /characters/{id}/anime`

<h3 id="getcharacteranime-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "role": "string",
      "anime": {
        "mal_id": 0,
        "url": "string",
        "images": {
          "jpg": {
            "image_url": "string",
            "small_image_url": "string",
            "large_image_url": "string"
          },
          "webp": {
            "image_url": "string",
            "small_image_url": "string",
            "large_image_url": "string"
          }
        },
        "title": "string"
      }
    }
  ]
}
```

<h3 id="getcharacteranime-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns anime that character is in|[character_anime](#schemacharacter_anime)|
|400|Bad Request|Error: Bad request. When required parameters were not supplied.|None|

<aside class="success">
This operation does not require authentication
</aside>

## getCharacterManga

<a id="opIdgetCharacterManga"></a>

> Code samples

```bash
curl https://api.jikan.moe/v4/characters/0/manga \
  -H 'Accept: application/json'
```

`GET /characters/{id}/manga`

<h3 id="getcharactermanga-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "role": "string",
      "manga": {
        "mal_id": 0,
        "url": "string",
        "images": {
          "jpg": {
            "image_url": "string",
            "small_image_url": "string",
            "large_image_url": "string"
          },
          "webp": {
            "image_url": "string",
            "small_image_url": "string",
            "large_image_url": "string"
          }
        },
        "title": "string"
      }
    }
  ]
}
```

<h3 id="getcharactermanga-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns manga that character is in|[character_manga](#schemacharacter_manga)|
|400|Bad Request|Error: Bad request. When required parameters were not supplied.|None|

<aside class="success">
This operation does not require authentication
</aside>

## getCharacterVoiceActors

<a id="opIdgetCharacterVoiceActors"></a>

> Code samples

```bash
curl https://api.jikan.moe/v4/characters/0/voices \
  -H 'Accept: application/json'
```

`GET /characters/{id}/voices`

<h3 id="getcharactervoiceactors-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "language": "string",
      "person": {
        "mal_id": 0,
        "url": "string",
        "images": {
          "jpg": {
            "image_url": "string"
          }
        },
        "name": "string"
      }
    }
  ]
}
```

<h3 id="getcharactervoiceactors-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the character's voice actors|[character_voice_actors](#schemacharacter_voice_actors)|
|400|Bad Request|Error: Bad request. When required parameters were not supplied.|None|

<aside class="success">
This operation does not require authentication
</aside>

## getCharacterPictures

<a id="opIdgetCharacterPictures"></a>

> Code samples

```bash
curl https://api.jikan.moe/v4/characters/0/pictures \
  -H 'Accept: application/json'
```

`GET /characters/{id}/pictures`

<h3 id="getcharacterpictures-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "image_url": "string",
      "large_image_url": "string"
    }
  ]
}
```

<h3 id="getcharacterpictures-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns pictures related to the entry|[character_pictures](#schemacharacter_pictures)|
|400|Bad Request|Error: Bad request. When required parameters were not supplied.|None|

<aside class="success">
This operation does not require authentication
</aside>

## getCharactersSearch

<a id="opIdgetCharactersSearch"></a>

> Code samples

```bash
curl https://api.jikan.moe/v4/characters \
  -H 'Accept: application/json'
```

`GET /characters`

<h3 id="getcharacterssearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer|false|none|
|limit|query|integer|false|none|
|q|query|string|false|none|
|order_by|query|[characters_search_query_orderby](#schemacharacters_search_query_orderby)|false|none|
|sort|query|[search_query_sort](#schemasearch_query_sort)|false|none|
|letter|query|string|false|Return entries starting with the given letter|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order_by|mal_id|
|order_by|name|
|order_by|favorites|
|sort|desc|
|sort|asc|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "mal_id": 0,
      "url": "string",
      "images": {
        "jpg": {
          "image_url": "string",
          "small_image_url": "string"
        },
        "webp": {
          "image_url": "string",
          "small_image_url": "string"
        }
      },
      "name": "string",
      "name_kanji": "string",
      "nicknames": [
        "string"
      ],
      "favorites": 0,
      "about": "string"
    }
  ],
  "pagination": {
    "last_visible_page": 0,
    "has_next_page": true,
    "current_page": 0,
    "items": {
      "count": 0,
      "total": 0,
      "per_page": 0
    }
  }
}
```

<h3 id="getcharacterssearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns search results for characters|[characters_search](#schemacharacters_search)|
|400|Bad Request|Error: Bad request. When required parameters were not supplied.|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="jikan-api-clubs">clubs</h1>

## getClubsById

<a id="opIdgetClubsById"></a>

> Code samples

```bash
curl https://api.jikan.moe/v4/clubs/0 \
  -H 'Accept: application/json'
```

`GET /clubs/{id}`

<h3 id="getclubsbyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "mal_id": 0,
    "name": "string",
    "url": "string",
    "images": {
      "jpg": {
        "image_url": "string"
      }
    },
    "members": 0,
    "category": "actors & artists",
    "created": "string",
    "access": "public"
  }
}
```

<h3 id="getclubsbyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns Club Resource|Inline|
|400|Bad Request|Error: Bad request. When required parameters were not supplied.|None|

<h3 id="getclubsbyid-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[club](#schemaclub)|false|none|Club Resource|

<aside class="success">
This operation does not require authentication
</aside>

## getClubMembers

<a id="opIdgetClubMembers"></a>

> Code samples

```bash
curl https://api.jikan.moe/v4/clubs/0/members \
  -H 'Accept: application/json'
```

`GET /clubs/{id}/members`

<h3 id="getclubmembers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|none|
|page|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "pagination": {
    "last_visible_page": 0,
    "has_next_page": true
  },
  "data": [
    {
      "username": "string",
      "url": "string",
      "images": {
        "jpg": {
          "image_url": "string"
        },
        "webp": {
          "image_url": "string"
        }
      }
    }
  ]
}
```

<h3 id="getclubmembers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns Club Members Resource|Inline|
|400|Bad Request|Error: Bad request. When required parameters were not supplied.|None|

<h3 id="getclubmembers-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pagination|object|false|none|none|
|» last_visible_page|integer|false|none|none|
|» has_next_page|boolean|false|none|none|
|data|[object]|false|none|none|
|» username|string|false|none|User's username|
|» url|string|false|none|User URL|
|» images|[user_images](#schemauser_images)|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## getClubStaff

<a id="opIdgetClubStaff"></a>

> Code samples

```bash
curl https://api.jikan.moe/v4/clubs/0/staff \
  -H 'Accept: application/json'
```

`GET /clubs/{id}/staff`

<h3 id="getclubstaff-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "url": "string",
      "username": "string"
    }
  ]
}
```

<h3 id="getclubstaff-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns Club Staff|[club_staff](#schemaclub_staff)|
|400|Bad Request|Error: Bad request. When required parameters were not supplied.|None|

<aside class="success">
This operation does not require authentication
</aside>

## getClubRelations

<a id="opIdgetClubRelations"></a>

> Code samples

```bash
curl https://api.jikan.moe/v4/clubs/0/relations \
  -H 'Accept: application/json'
```

`GET /clubs/{id}/relations`

<h3 id="getclubrelations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "anime": [
      {
        "mal_id": 0,
        "type": "string",
        "name": "string",
        "url": "string"
      }
    ],
    "manga": [
      {
        "mal_id": 0,
        "type": "string",
        "name": "string",
        "url": "string"
      }
    ],
    "characters": [
      {
        "mal_id": 0,
        "type": "string",
        "name": "string",
        "url": "string"
      }
    ]
  }
}
```

<h3 id="getclubrelations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns Club Relations|[club_relations](#schemaclub_relations)|
|400|Bad Request|Error: Bad request. When required parameters were not supplied.|None|

<aside class="success">
This operation does not require authentication
</aside>

## getClubsSearch

<a id="opIdgetClubsSearch"></a>

> Code samples

```bash
curl https://api.jikan.moe/v4/clubs \
  -H 'Accept: application/json'
```

`GET /clubs`

<h3 id="getclubssearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer|false|none|
|limit|query|integer|false|none|
|q|query|string|false|none|
|type|query|[club_search_query_type](#schemaclub_search_query_type)|false|none|
|category|query|[club_search_query_category](#schemaclub_search_query_category)|false|none|
|order_by|query|[club_search_query_orderby](#schemaclub_search_query_orderby)|false|none|
|sort|query|[search_query_sort](#schemasearch_query_sort)|false|none|
|letter|query|string|false|Return entries starting with the given letter|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|public|
|type|private|
|type|secret|
|category|anime|
|category|manga|
|category|actors_and_artists|
|category|characters|
|category|cities_and_neighborhoods|
|category|companies|
|category|conventions|
|category|games|
|category|japan|
|category|music|
|category|other|
|category|schools|
|order_by|mal_id|
|order_by|name|
|order_by|members_count|
|order_by|created|
|sort|desc|
|sort|asc|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "mal_id": 0,
      "name": "string",
      "url": "string",
      "images": {
        "jpg": {
          "image_url": "string"
        }
      },
      "members": 0,
      "category": "actors & artists",
      "created": "string",
      "access": "public"
    }
  ],
  "pagination": {
    "last_visible_page": 0,
    "has_next_page": true
  }
}
```

<h3 id="getclubssearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns search results for clubs|[clubs_search](#schemaclubs_search)|
|400|Bad Request|Error: Bad request. When required parameters were not supplied.|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="jikan-api-genres">genres</h1>

## getAnimeGenres

<a id="opIdgetAnimeGenres"></a>

> Code samples

```bash
curl https://api.jikan.moe/v4/genres/anime \
  -H 'Accept: application/json'
```

`GET /genres/anime`

<h3 id="getanimegenres-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|filter|query|[genre_query_filter](#schemagenre_query_filter)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|filter|genres|
|filter|explicit_genres|
|filter|themes|
|filter|demographics|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "mal_id": 0,
      "name": "string",
      "url": "string",
      "count": 0
    }
  ]
}
```

<h3 id="getanimegenres-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns entry genres, explicit_genres, themes and demographics|[genres](#schemagenres)|
|400|Bad Request|Error: Bad request. When required parameters were not supplied.|None|

<aside class="success">
This operation does not require authentication
</aside>

## getMangaGenres

<a id="opIdgetMangaGenres"></a>

> Code samples

```bash
curl https://api.jikan.moe/v4/genres/manga \
  -H 'Accept: application/json'
```

`GET /genres/manga`

<h3 id="getmangagenres-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|filter|query|[genre_query_filter](#schemagenre_query_filter)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|filter|genres|
|filter|explicit_genres|
|filter|themes|
|filter|demographics|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "mal_id": 0,
      "name": "string",
      "url": "string",
      "count": 0
    }
  ]
}
```

<h3 id="getmangagenres-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns entry genres, explicit_genres, themes and demographics|[genres](#schemagenres)|
|400|Bad Request|Error: Bad request. When required parameters were not supplied.|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="jikan-api-magazines">magazines</h1>

## getMagazines

<a id="opIdgetMagazines"></a>

> Code samples

```bash
curl https://api.jikan.moe/v4/magazines \
  -H 'Accept: application/json'
```

`GET /magazines`

<h3 id="getmagazines-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer|false|none|
|limit|query|integer|false|none|
|q|query|string|false|none|
|order_by|query|[magazines_query_orderby](#schemamagazines_query_orderby)|false|none|
|sort|query|[search_query_sort](#schemasearch_query_sort)|false|none|
|letter|query|string|false|Return entries starting with the given letter|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order_by|mal_id|
|order_by|name|
|order_by|count|
|sort|desc|
|sort|asc|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "mal_id": 0,
      "name": "string",
      "url": "string",
      "count": 0
    }
  ],
  "pagination": {
    "last_visible_page": 0,
    "has_next_page": true
  }
}
```

<h3 id="getmagazines-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns magazines collection|[magazines](#schemamagazines)|
|400|Bad Request|Error: Bad request. When required parameters were not supplied.|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="jikan-api-manga">manga</h1>

## getMangaFullById

<a id="opIdgetMangaFullById"></a>

> Code samples

```bash
curl https://api.jikan.moe/v4/manga/0/full \
  -H 'Accept: application/json'
```

`GET /manga/{id}/full`

<h3 id="getmangafullbyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "mal_id": 0,
    "url": "string",
    "images": {
      "jpg": {
        "image_url": "string",
        "small_image_url": "string",
        "large_image_url": "string"
      },
      "webp": {
        "image_url": "string",
        "small_image_url": "string",
        "large_image_url": "string"
      }
    },
    "approved": true,
    "titles": [
      {
        "type": "string",
        "title": "string"
      }
    ],
    "title": "string",
    "title_english": "string",
    "title_japanese": "string",
    "title_synonyms": [
      "string"
    ],
    "type": "Manga",
    "chapters": 0,
    "volumes": 0,
    "status": "Finished",
    "publishing": true,
    "published": {
      "from": "string",
      "to": "string",
      "prop": {
        "from": {
          "day": 0,
          "month": 0,
          "year": 0
        },
        "to": {
          "day": 0,
          "month": 0,
          "year": 0
        },
        "string": "string"
      }
    },
    "score": 0,
    "scored_by": 0,
    "rank": 0,
    "popularity": 0,
    "members": 0,
    "favorites": 0,
    "synopsis": "string",
    "background": "string",
    "authors": [
      {
        "mal_id": 0,
        "type": "string",
        "name": "string",
        "url": "string"
      }
    ],
    "serializations": [
      {
        "mal_id": 0,
        "type": "string",
        "name": "string",
        "url": "string"
      }
    ],
    "genres": [
      {
        "mal_id": 0,
        "type": "string",
        "name": "string",
        "url": "string"
      }
    ],
    "explicit_genres": [
      {
        "mal_id": 0,
        "type": "string",
        "name": "string",
        "url": "string"
      }
    ],
    "themes": [
      {
        "mal_id": 0,
        "type": "string",
        "name": "string",
        "url": "string"
      }
    ],
    "demographics": [
      {
        "mal_id": 0,
        "type": "string",
        "name": "string",
        "url": "string"
      }
    ],
    "relations": [
      {
        "relation": "string",
        "entry": [
          {
            "mal_id": 0,
            "type": "string",
            "name": "string",
            "url": "string"
          }
        ]
      }
    ],
    "external": [
      {
        "name": "string",
        "url": "string"
      }
    ]
  }
}
```

<h3 id="getmangafullbyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns complete manga resource data|Inline|
|400|Bad Request|Error: Bad request. When required parameters were not supplied.|None|

<h3 id="getmangafullbyid-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[manga_full](#schemamanga_full)|false|none|Manga Resource|

<aside class="success">
This operation does not require authentication
</aside>

## getMangaById

<a id="opIdgetMangaById"></a>

> Code samples

```bash
curl https://api.jikan.moe/v4/manga/0 \
  -H 'Accept: application/json'
```

`GET /manga/{id}`

<h3 id="getmangabyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "mal_id": 0,
    "url": "string",
    "images": {
      "jpg": {
        "image_url": "string",
        "small_image_url": "string",
        "large_image_url": "string"
      },
      "webp": {
        "image_url": "string",
        "small_image_url": "string",
        "large_image_url": "string"
      }
    },
    "approved": true,
    "titles": [
      {
        "type": "string",
        "title": "string"
      }
    ],
    "title": "string",
    "title_english": "string",
    "title_japanese": "string",
    "type": "Manga",
    "chapters": 0,
    "volumes": 0,
    "status": "Finished",
    "publishing": true,
    "published": {
      "from": "string",
      "to": "string",
      "prop": {
        "from": {
          "day": 0,
          "month": 0,
          "year": 0
        },
        "to": {
          "day": 0,
          "month": 0,
          "year": 0
        },
        "string": "string"
      }
    },
    "score": 0,
    "scored_by": 0,
    "rank": 0,
    "popularity": 0,
    "members": 0,
    "favorites": 0,
    "synopsis": "string",
    "background": "string",
    "authors": [
      {
        "mal_id": 0,
        "type": "string",
        "name": "string",
        "url": "string"
      }
    ],
    "serializations": [
      {
        "mal_id": 0,
        "type": "string",
        "name": "string",
        "url": "string"
      }
    ],
    "genres": [
      {
        "mal_id": 0,
        "type": "string",
        "name": "string",
        "url": "string"
      }
    ],
    "explicit_genres": [
      {
        "mal_id": 0,
        "type": "string",
        "name": "string",
        "url": "string"
      }
    ],
    "themes": [
      {
        "mal_id": 0,
        "type": "string",
        "name": "string",
        "url": "string"
      }
    ],
    "demographics": [
      {
        "mal_id": 0,
        "type": "string",
        "name": "string",
        "url": "string"
      }
    ]
  }
}
```

<h3 id="getmangabyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns pictures related to the entry|Inline|
|400|Bad Request|Error: Bad request. When required parameters were not supplied.|None|

<h3 id="getmangabyid-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[manga](#schemamanga)|false|none|Manga Resource|

<aside class="success">
This operation does not require authentication
</aside>

## getMangaCharacters

<a id="opIdgetMangaCharacters"></a>

> Code samples

```bash
curl https://api.jikan.moe/v4/manga/0/characters \
  -H 'Accept: application/json'
```

`GET /manga/{id}/characters`

<h3 id="getmangacharacters-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "character": {
        "mal_id": 0,
        "url": "string",
        "images": {
          "jpg": {
            "image_url": "string",
            "small_image_url": "string"
          },
          "webp": {
            "image_url": "string",
            "small_image_url": "string"
          }
        },
        "name": "string"
      },
      "role": "string"
    }
  ]
}
```

<h3 id="getmangacharacters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns manga characters resource|[manga_characters](#schemamanga_characters)|
|400|Bad Request|Error: Bad request. When required parameters were not supplied.|None|

<aside class="success">
This operation does not require authentication
</aside>

## getMangaNews

<a id="opIdgetMangaNews"></a>

> Code samples

```bash
curl https://api.jikan.moe/v4/manga/0/news \
  -H 'Accept: application/json'
```

`GET /manga/{id}/news`

<h3 id="getmanganews-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|none|
|page|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "pagination": {
    "last_visible_page": 0,
    "has_next_page": true
  },
  "data": [
    {
      "mal_id": 0,
      "url": "string",
      "title": "string",
      "date": "string",
      "author_username": "string",
      "author_url": "string",
      "forum_url": "string",
      "images": {
        "jpg": {
          "image_url": "string"
        }
      },
      "comments": 0,
      "excerpt": "string"
    }
  ]
}
```

<h3 id="getmanganews-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns a list of manga news topics|[manga_news](#schemamanga_news)|
|400|Bad Request|Error: Bad request. When required parameters were not supplied.|None|

<aside class="success">
This operation does not require authentication
</aside>

## getMangaTopics

<a id="opIdgetMangaTopics"></a>

> Code samples

```bash
curl https://api.jikan.moe/v4/manga/0/forum \
  -H 'Accept: application/json'
```

`GET /manga/{id}/forum`

<h3 id="getmangatopics-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|none|
|filter|query|string|false|Filter topics|

#### Enumerated Values

|Parameter|Value|
|---|---|
|filter|all|
|filter|episode|
|filter|other|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "mal_id": 0,
      "url": "string",
      "title": "string",
      "date": "string",
      "author_username": "string",
      "author_url": "string",
      "comments": 0,
      "last_comment": {
        "url": "string",
        "author_username": "string",
        "author_url": "string",
        "date": "string"
      }
    }
  ]
}
```

<h3 id="getmangatopics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns a list of manga forum topics|[forum](#schemaforum)|
|400|Bad Request|Error: Bad request. When required parameters were not supplied.|None|

<aside class="success">
This operation does not require authentication
</aside>

## getMangaPictures

<a id="opIdgetMangaPictures"></a>

> Code samples

```bash
curl https://api.jikan.moe/v4/manga/0/pictures \
  -H 'Accept: application/json'
```

`GET /manga/{id}/pictures`

<h3 id="getmangapictures-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "jpg": {
        "image_url": "string",
        "small_image_url": "string",
        "large_image_url": "string"
      },
      "webp": {
        "image_url": "string",
        "small_image_url": "string",
        "large_image_url": "string"
      }
    }
  ]
}
```

<h3 id="getmangapictures-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns a list of manga pictures|[manga_pictures](#schemamanga_pictures)|
|400|Bad Request|Error: Bad request. When required parameters were not supplied.|None|

<aside class="success">
This operation does not require authentication
</aside>

## getMangaStatistics

<a id="opIdgetMangaStatistics"></a>

> Code samples

```bash
curl https://api.jikan.moe/v4/manga/0/statistics \
  -H 'Accept: application/json'
```

`GET /manga/{id}/statistics`

<h3 id="getmangastatistics-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "reading": 0,
    "completed": 0,
    "on_hold": 0,
    "dropped": 0,
    "plan_to_read": 0,
    "total": 0,
    "scores": [
      {
        "score": 0,
        "votes": 0,
        "percentage": 0
      }
    ]
  }
}
```

<h3 id="getmangastatistics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns anime statistics|[manga_statistics](#schemamanga_statistics)|
|400|Bad Request|Error: Bad request. When required parameters were not supplied.|None|

<aside class="success">
This operation does not require authentication
</aside>

## getMangaMoreInfo

<a id="opIdgetMangaMoreInfo"></a>

> Code samples

```bash
curl https://api.jikan.moe/v4/manga/0/moreinfo \
  -H 'Accept: application/json'
```

`GET /manga/{id}/moreinfo`

<h3 id="getmangamoreinfo-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "moreinfo": "string"
  }
}
```

<h3 id="getmangamoreinfo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns manga moreinfo|[moreinfo](#schemamoreinfo)|
|400|Bad Request|Error: Bad request. When required parameters were not supplied.|None|

<aside class="success">
This operation does not require authentication
</aside>

## getMangaRecommendations

<a id="opIdgetMangaRecommendations"></a>

> Code samples

```bash
curl https://api.jikan.moe/v4/manga/0/recommendations \
  -H 'Accept: application/json'
```

`GET /manga/{id}/recommendations`

<h3 id="getmangarecommendations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "entry": {
        "mal_id": 0,
        "url": "string",
        "images": {
          "jpg": {
            "image_url": "string",
            "small_image_url": "string",
            "large_image_url": "string"
          },
          "webp": {
            "image_url": "string",
            "small_image_url": "string",
            "large_image_url": "string"
          }
        },
        "title": "string"
      }
    }
  ]
}
```

<h3 id="getmangarecommendations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns manga recommendations|[entry_recommendations](#schemaentry_recommendations)|
|400|Bad Request|Error: Bad request. When required parameters were not supplied.|None|

<aside class="success">
This operation does not require authentication
</aside>

## getMangaUserUpdates

<a id="opIdgetMangaUserUpdates"></a>

> Code samples

```bash
curl https://api.jikan.moe/v4/manga/0/userupdates \
  -H 'Accept: application/json'
```

`GET /manga/{id}/userupdates`

<h3 id="getmangauserupdates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|none|
|page|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "user": {
        "username": "string",
        "url": "string",
        "images": {
          "jpg": {
            "image_url": "string"
          },
          "webp": {
            "image_url": "string"
          }
        }
      },
      "score": 0,
      "status": "string",
      "volumes_read": 0,
      "volumes_total": 0,
      "chapters_read": 0,
      "chapters_total": 0,
      "date": "string"
    }
  ],
  "pagination": {
    "last_visible_page": 0,
    "has_next_page": true
  }
}
```

<h3 id="getmangauserupdates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns manga user updates|[manga_userupdates](#schemamanga_userupdates)|
|400|Bad Request|Error: Bad request. When required parameters were not supplied.|None|

<aside class="success">
This operation does not require authentication
</aside>

## getMangaReviews

<a id="opIdgetMangaReviews"></a>

> Code samples

```bash
curl https://api.jikan.moe/v4/manga/0/reviews \
  -H 'Accept: application/json'
```

`GET /manga/{id}/reviews`

<h3 id="getmangareviews-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|none|
|page|query|integer|false|none|
|preliminary|query|boolean|false|Any reviews left during an ongoing anime/manga, those reviews are tagged as preliminary. NOTE: Preliminary reviews are not returned by default so if the entry is airing/publishing you need to add this otherwise you will get an empty list. e.g usage: `?preliminary=true`|
|spoilers|query|boolean|false|Any reviews that are tagged as a spoiler. Spoiler reviews are not returned by default. e.g usage: `?spoiler=true`|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "user": {
        "username": "string",
        "url": "string",
        "images": {
          "jpg": {
            "image_url": "string"
          },
          "webp": {
            "image_url": "string"
          }
        }
      },
      "mal_id": 0,
      "url": "string",
      "type": "string",
      "reactions": {
        "overall": 0,
        "nice": 0,
        "love_it": 0,
        "funny": 0,
        "confusing": 0,
        "informative": 0,
        "well_written": 0,
        "creative": 0
      },
      "date": "string",
      "review": "string",
      "score": 0,
      "tags": [
        "string"
      ],
      "is_spoiler": true,
      "is_preliminary": true
    }
  ],
  "pagination": {
    "last_visible_page": 0,
    "has_next_page": true
  }
}
```

<h3 id="getmangareviews-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns manga reviews|[manga_reviews](#schemamanga_reviews)|
|400|Bad Request|Error: Bad request. When required parameters were not supplied.|None|

<aside class="success">
This operation does not require authentication
</aside>

## getMangaRelations

<a id="opIdgetMangaRelations"></a>

> Code samples

```bash
curl https://api.jikan.moe/v4/manga/0/relations \
  -H 'Accept: application/json'
```

`GET /manga/{id}/relations`

<h3 id="getmangarelations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "relation": "string",
      "entry": [
        {
          "mal_id": 0,
          "type": "string",
          "name": "string",
          "url": "string"
        }
      ]
    }
  ]
}
```

<h3 id="getmangarelations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns manga relations|Inline|
|400|Bad Request|Error: Bad request. When required parameters were not supplied.|None|

<h3 id="getmangarelations-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[relation](#schemarelation)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## getMangaExternal

<a id="opIdgetMangaExternal"></a>

> Code samples

```bash
curl https://api.jikan.moe/v4/manga/0/external \
  -H 'Accept: application/json'
```

`GET /manga/{id}/external`

<h3 id="getmangaexternal-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "name": "string",
      "url": "string"
    }
  ]
}
```

<h3 id="getmangaexternal-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns manga external links|[external_links](#schemaexternal_links)|
|400|Bad Request|Error: Bad request. When required parameters were not supplied.|None|

<aside class="success">
This operation does not require authentication
</aside>

## getMangaSearch

<a id="opIdgetMangaSearch"></a>

> Code samples

```bash
curl https://api.jikan.moe/v4/manga \
  -H 'Accept: application/json'
```

`GET /manga`

<h3 id="getmangasearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|unapproved|query|boolean|false|This is a flag. When supplied it will include entries which are unapproved. Unapproved entries on MyAnimeList are those that are user submitted and have not yet been approved by MAL to show up on other pages. They will have their own specifc pages and are often removed resulting in a 404 error. You do not need to pass a value to it. e.g usage: `?unapproved`|
|page|query|integer|false|none|
|limit|query|integer|false|none|
|q|query|string|false|none|
|type|query|[manga_search_query_type](#schemamanga_search_query_type)|false|none|
|score|query|number|false|none|
|min_score|query|number|false|Set a minimum score for results.|
|max_score|query|number|false|Set a maximum score for results|
|status|query|[manga_search_query_status](#schemamanga_search_query_status)|false|none|
|sfw|query|boolean|false|Filter out Adult entries|
|genres|query|string|false|Filter by genre(s) IDs. Can pass multiple with a comma as a delimiter. e.g 1,2,3|
|genres_exclude|query|string|false|Exclude genre(s) IDs. Can pass multiple with a comma as a delimiter. e.g 1,2,3|
|order_by|query|[manga_search_query_orderby](#schemamanga_search_query_orderby)|false|none|
|sort|query|[search_query_sort](#schemasearch_query_sort)|false|none|
|letter|query|string|false|Return entries starting with the given letter|
|magazines|query|string|false|Filter by magazine(s) IDs. Can pass multiple with a comma as a delimiter. e.g 1,2,3|
|start_date|query|string|false|Filter by starting date. Format: YYYY-MM-DD. e.g `2022`, `2005-05`, `2005-01-01`|
|end_date|query|string|false|Filter by ending date. Format: YYYY-MM-DD. e.g `2022`, `2005-05`, `2005-01-01`|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|manga|
|type|novel|
|type|lightnovel|
|type|oneshot|
|type|doujin|
|type|manhwa|
|type|manhua|
|status|publishing|
|status|complete|
|status|hiatus|
|status|discontinued|
|status|upcoming|
|order_by|mal_id|
|order_by|title|
|order_by|start_date|
|order_by|end_date|
|order_by|chapters|
|order_by|volumes|
|order_by|score|
|order_by|scored_by|
|order_by|rank|
|order_by|popularity|
|order_by|members|
|order_by|favorites|
|sort|desc|
|sort|asc|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "mal_id": 0,
      "url": "string",
      "images": {
        "jpg": {
          "image_url": "string",
          "small_image_url": "string",
          "large_image_url": "string"
        },
        "webp": {
          "image_url": "string",
          "small_image_url": "string",
          "large_image_url": "string"
        }
      },
      "approved": true,
      "titles": [
        {
          "type": "string",
          "title": "string"
        }
      ],
      "title": "string",
      "title_english": "string",
      "title_japanese": "string",
      "type": "Manga",
      "chapters": 0,
      "volumes": 0,
      "status": "Finished",
      "publishing": true,
      "published": {
        "from": "string",
        "to": "string",
        "prop": {
          "from": {
            "day": 0,
            "month": 0,
            "year": 0
          },
          "to": {
            "day": 0,
            "month": 0,
            "year": 0
          },
          "string": "string"
        }
      },
      "score": 0,
      "scored_by": 0,
      "rank": 0,
      "popularity": 0,
      "members": 0,
      "favorites": 0,
      "synopsis": "string",
      "background": "string",
      "authors": [
        {
          "mal_id": 0,
          "type": "string",
          "name": "string",
          "url": "string"
        }
      ],
      "serializations": [
        {
          "mal_id": 0,
          "type": "string",
          "name": "string",
          "url": "string"
        }
      ],
      "genres": [
        {
          "mal_id": 0,
          "type": "string",
          "name": "string",
          "url": "string"
        }
      ],
      "explicit_genres": [
        {
          "mal_id": 0,
          "type": "string",
          "name": "string",
          "url": "string"
        }
      ],
      "themes": [
        {
          "mal_id": 0,
          "type": "string",
          "name": "string",
          "url": "string"
        }
      ],
      "demographics": [
        {
          "mal_id": 0,
          "type": "string",
          "name": "string",
          "url": "string"
        }
      ]
    }
  ],
  "pagination": {
    "last_visible_page": 0,
    "has_next_page": true,
    "current_page": 0,
    "items": {
      "count": 0,
      "total": 0,
      "per_page": 0
    }
  }
}
```

<h3 id="getmangasearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns search results for manga|[manga_search](#schemamanga_search)|
|400|Bad Request|Error: Bad request. When required parameters were not supplied.|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="jikan-api-people">people</h1>

## getPersonFullById

<a id="opIdgetPersonFullById"></a>

> Code samples

```bash
curl https://api.jikan.moe/v4/people/0/full \
  -H 'Accept: application/json'
```

`GET /people/{id}/full`

<h3 id="getpersonfullbyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "mal_id": 0,
    "url": "string",
    "website_url": "string",
    "images": {
      "jpg": {
        "image_url": "string"
      }
    },
    "name": "string",
    "given_name": "string",
    "family_name": "string",
    "alternate_names": [
      "string"
    ],
    "birthday": "string",
    "favorites": 0,
    "about": "string",
    "anime": [
      {
        "position": "string",
        "anime": {
          "mal_id": 0,
          "url": "string",
          "images": {
            "jpg": {
              "image_url": "string",
              "small_image_url": "string",
              "large_image_url": "string"
            },
            "webp": {
              "image_url": "string",
              "small_image_url": "string",
              "large_image_url": "string"
            }
          },
          "title": "string"
        }
      }
    ],
    "manga": [
      {
        "position": "string",
        "manga": {
          "mal_id": 0,
          "url": "string",
          "images": {
            "jpg": {
              "image_url": "string",
              "small_image_url": "string",
              "large_image_url": "string"
            },
            "webp": {
              "image_url": "string",
              "small_image_url": "string",
              "large_image_url": "string"
            }
          },
          "title": "string"
        }
      }
    ],
    "voices": [
      {
        "role": "string",
        "anime": {
          "mal_id": 0,
          "url": "string",
          "images": {
            "jpg": {
              "image_url": "string",
              "small_image_url": "string",
              "large_image_url": "string"
            },
            "webp": {
              "image_url": "string",
              "small_image_url": "string",
              "large_image_url": "string"
            }
          },
          "title": "string"
        },
        "character": {
          "mal_id": 0,
          "url": "string",
          "images": {
            "jpg": {
              "image_url": "string",
              "small_image_url": "string"
            },
            "webp": {
              "image_url": "string",
              "small_image_url": "string"
            }
          },
          "name": "string"
        }
      }
    ]
  }
}
```

<h3 id="getpersonfullbyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns complete character resource data|Inline|
|400|Bad Request|Error: Bad request. When required parameters were not supplied.|None|

<h3 id="getpersonfullbyid-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[person_full](#schemaperson_full)|false|none|Person Resource|

<aside class="success">
This operation does not require authentication
</aside>

## getPersonById

<a id="opIdgetPersonById"></a>

> Code samples

```bash
curl https://api.jikan.moe/v4/people/0 \
  -H 'Accept: application/json'
```

`GET /people/{id}`

<h3 id="getpersonbyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "mal_id": 0,
    "url": "string",
    "website_url": "string",
    "images": {
      "jpg": {
        "image_url": "string"
      }
    },
    "name": "string",
    "given_name": "string",
    "family_name": "string",
    "alternate_names": [
      "string"
    ],
    "birthday": "string",
    "favorites": 0,
    "about": "string"
  }
}
```

<h3 id="getpersonbyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns pictures related to the entry|Inline|
|400|Bad Request|Error: Bad request. When required parameters were not supplied.|None|

<h3 id="getpersonbyid-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[person](#schemaperson)|false|none|Person Resource|

<aside class="success">
This operation does not require authentication
</aside>

## getPersonAnime

<a id="opIdgetPersonAnime"></a>

> Code samples

```bash
curl https://api.jikan.moe/v4/people/0/anime \
  -H 'Accept: application/json'
```

`GET /people/{id}/anime`

<h3 id="getpersonanime-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "position": "string",
      "anime": {
        "mal_id": 0,
        "url": "string",
        "images": {
          "jpg": {
            "image_url": "string",
            "small_image_url": "string",
            "large_image_url": "string"
          },
          "webp": {
            "image_url": "string",
            "small_image_url": "string",
            "large_image_url": "string"
          }
        },
        "title": "string"
      }
    }
  ]
}
```

<h3 id="getpersonanime-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns person's anime staff positions|[person_anime](#schemaperson_anime)|
|400|Bad Request|Error: Bad request. When required parameters were not supplied.|None|

<aside class="success">
This operation does not require authentication
</aside>

## getPersonVoices

<a id="opIdgetPersonVoices"></a>

> Code samples

```bash
curl https://api.jikan.moe/v4/people/0/voices \
  -H 'Accept: application/json'
```

`GET /people/{id}/voices`

<h3 id="getpersonvoices-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "role": "string",
      "anime": {
        "mal_id": 0,
        "url": "string",
        "images": {
          "jpg": {
            "image_url": "string",
            "small_image_url": "string",
            "large_image_url": "string"
          },
          "webp": {
            "image_url": "string",
            "small_image_url": "string",
            "large_image_url": "string"
          }
        },
        "title": "string"
      },
      "character": {
        "mal_id": 0,
        "url": "string",
        "images": {
          "jpg": {
            "image_url": "string",
            "small_image_url": "string"
          },
          "webp": {
            "image_url": "string",
            "small_image_url": "string"
          }
        },
        "name": "string"
      }
    }
  ]
}
```

<h3 id="getpersonvoices-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns person's voice acting roles|[person_voice_acting_roles](#schemaperson_voice_acting_roles)|
|400|Bad Request|Error: Bad request. When required parameters were not supplied.|None|

<aside class="success">
This operation does not require authentication
</aside>

## getPersonManga

<a id="opIdgetPersonManga"></a>

> Code samples

```bash
curl https://api.jikan.moe/v4/people/0/manga \
  -H 'Accept: application/json'
```

`GET /people/{id}/manga`

<h3 id="getpersonmanga-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "position": "string",
      "manga": {
        "mal_id": 0,
        "url": "string",
        "images": {
          "jpg": {
            "image_url": "string",
            "small_image_url": "string",
            "large_image_url": "string"
          },
          "webp": {
            "image_url": "string",
            "small_image_url": "string",
            "large_image_url": "string"
          }
        },
        "title": "string"
      }
    }
  ]
}
```

<h3 id="getpersonmanga-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns person's published manga works|[person_manga](#schemaperson_manga)|
|400|Bad Request|Error: Bad request. When required parameters were not supplied.|None|

<aside class="success">
This operation does not require authentication
</aside>

## getPersonPictures

<a id="opIdgetPersonPictures"></a>

> Code samples

```bash
curl https://api.jikan.moe/v4/people/0/pictures \
  -H 'Accept: application/json'
```

`GET /people/{id}/pictures`

<h3 id="getpersonpictures-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "jpg": {
        "image_url": "string"
      }
    }
  ]
}
```

<h3 id="getpersonpictures-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns a list of pictures of the person|[person_pictures](#schemaperson_pictures)|
|400|Bad Request|Error: Bad request. When required parameters were not supplied.|None|

<aside class="success">
This operation does not require authentication
</aside>

## getPeopleSearch

<a id="opIdgetPeopleSearch"></a>

> Code samples

```bash
curl https://api.jikan.moe/v4/people \
  -H 'Accept: application/json'
```

`GET /people`

<h3 id="getpeoplesearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer|false|none|
|limit|query|integer|false|none|
|q|query|string|false|none|
|order_by|query|[people_search_query_orderby](#schemapeople_search_query_orderby)|false|none|
|sort|query|[search_query_sort](#schemasearch_query_sort)|false|none|
|letter|query|string|false|Return entries starting with the given letter|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order_by|mal_id|
|order_by|name|
|order_by|birthday|
|order_by|favorites|
|sort|desc|
|sort|asc|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "mal_id": 0,
      "url": "string",
      "website_url": "string",
      "images": {
        "jpg": {
          "image_url": "string"
        }
      },
      "name": "string",
      "given_name": "string",
      "family_name": "string",
      "alternate_names": [
        "string"
      ],
      "birthday": "string",
      "favorites": 0,
      "about": "string"
    }
  ],
  "pagination": {
    "last_visible_page": 0,
    "has_next_page": true,
    "current_page": 0,
    "items": {
      "count": 0,
      "total": 0,
      "per_page": 0
    }
  }
}
```

<h3 id="getpeoplesearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns search results for people|[people_search](#schemapeople_search)|
|400|Bad Request|Error: Bad request. When required parameters were not supplied.|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="jikan-api-producers">producers</h1>

## getProducerById

<a id="opIdgetProducerById"></a>

> Code samples

```bash
curl https://api.jikan.moe/v4/producers/0 \
  -H 'Accept: application/json'
```

`GET /producers/{id}`

<h3 id="getproducerbyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "mal_id": 0,
    "url": "string",
    "titles": [
      {
        "type": "string",
        "title": "string"
      }
    ],
    "images": {
      "jpg": {
        "image_url": "string"
      }
    },
    "favorites": 0,
    "count": 0,
    "established": "string",
    "about": "string"
  }
}
```

<h3 id="getproducerbyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns producer resource|Inline|
|400|Bad Request|Error: Bad request. When required parameters were not supplied.|None|

<h3 id="getproducerbyid-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[producer](#schemaproducer)|false|none|Producers Resource|

<aside class="success">
This operation does not require authentication
</aside>

## getProducerFullById

<a id="opIdgetProducerFullById"></a>

> Code samples

```bash
curl https://api.jikan.moe/v4/producers/0/full \
  -H 'Accept: application/json'
```

`GET /producers/{id}/full`

<h3 id="getproducerfullbyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "mal_id": 0,
    "url": "string",
    "titles": [
      {
        "type": "string",
        "title": "string"
      }
    ],
    "images": {
      "jpg": {
        "image_url": "string"
      }
    },
    "favorites": 0,
    "count": 0,
    "established": "string",
    "about": "string",
    "external": [
      {
        "name": "string",
        "url": "string"
      }
    ]
  }
}
```

<h3 id="getproducerfullbyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns producer resource|Inline|
|400|Bad Request|Error: Bad request. When required parameters were not supplied.|None|

<h3 id="getproducerfullbyid-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[producer_full](#schemaproducer_full)|false|none|Producers Resource|

<aside class="success">
This operation does not require authentication
</aside>

## getProducerExternal

<a id="opIdgetProducerExternal"></a>

> Code samples

```bash
curl https://api.jikan.moe/v4/producers/0/external \
  -H 'Accept: application/json'
```

`GET /producers/{id}/external`

<h3 id="getproducerexternal-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "name": "string",
      "url": "string"
    }
  ]
}
```

<h3 id="getproducerexternal-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns producer's external links|[external_links](#schemaexternal_links)|
|400|Bad Request|Error: Bad request. When required parameters were not supplied.|None|

<aside class="success">
This operation does not require authentication
</aside>

## getProducers

<a id="opIdgetProducers"></a>

> Code samples

```bash
curl https://api.jikan.moe/v4/producers \
  -H 'Accept: application/json'
```

`GET /producers`

<h3 id="getproducers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer|false|none|
|limit|query|integer|false|none|
|q|query|string|false|none|
|order_by|query|[producers_query_orderby](#schemaproducers_query_orderby)|false|none|
|sort|query|[search_query_sort](#schemasearch_query_sort)|false|none|
|letter|query|string|false|Return entries starting with the given letter|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order_by|mal_id|
|order_by|count|
|order_by|favorites|
|order_by|established|
|sort|desc|
|sort|asc|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "mal_id": 0,
      "url": "string",
      "titles": [
        {
          "type": "string",
          "title": "string"
        }
      ],
      "images": {
        "jpg": {
          "image_url": "string"
        }
      },
      "favorites": 0,
      "count": 0,
      "established": "string",
      "about": "string"
    }
  ],
  "pagination": {
    "last_visible_page": 0,
    "has_next_page": true
  }
}
```

<h3 id="getproducers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns producers collection|[producers](#schemaproducers)|
|400|Bad Request|Error: Bad request. When required parameters were not supplied.|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="jikan-api-random">random</h1>

## getRandomAnime

<a id="opIdgetRandomAnime"></a>

> Code samples

```bash
curl https://api.jikan.moe/v4/random/anime \
  -H 'Accept: application/json'
```

`GET /random/anime`

> Example responses

> 200 Response

```json
{
  "data": {
    "mal_id": 0,
    "url": "string",
    "images": {
      "jpg": {
        "image_url": "string",
        "small_image_url": "string",
        "large_image_url": "string"
      },
      "webp": {
        "image_url": "string",
        "small_image_url": "string",
        "large_image_url": "string"
      }
    },
    "trailer": {
      "youtube_id": "string",
      "url": "string",
      "embed_url": "string"
    },
    "approved": true,
    "titles": [
      {
        "type": "string",
        "title": "string"
      }
    ],
    "title": "string",
    "title_english": "string",
    "title_japanese": "string",
    "title_synonyms": [
      "string"
    ],
    "type": {},
    "source": "string",
    "episodes": 0,
    "status": "Finished Airing",
    "airing": true,
    "aired": {
      "from": "string",
      "to": "string",
      "prop": {
        "from": {
          "day": 0,
          "month": 0,
          "year": 0
        },
        "to": {
          "day": 0,
          "month": 0,
          "year": 0
        },
        "string": "string"
      }
    },
    "duration": "string",
    "rating": "G - All Ages",
    "score": 0,
    "scored_by": 0,
    "rank": 0,
    "popularity": 0,
    "members": 0,
    "favorites": 0,
    "synopsis": "string",
    "background": "string",
    "season": "summer",
    "year": 0,
    "broadcast": {
      "day": "string",
      "time": "string",
      "timezone": "string",
      "string": "string"
    },
    "producers": [
      {
        "mal_id": 0,
        "type": "string",
        "name": "string",
        "url": "string"
      }
    ],
    "licensors": [
      {
        "mal_id": 0,
        "type": "string",
        "name": "string",
        "url": "string"
      }
    ],
    "studios": [
      {
        "mal_id": 0,
        "type": "string",
        "name": "string",
        "url": "string"
      }
    ],
    "genres": [
      {
        "mal_id": 0,
        "type": "string",
        "name": "string",
        "url": "string"
      }
    ],
    "explicit_genres": [
      {
        "mal_id": 0,
        "type": "string",
        "name": "string",
        "url": "string"
      }
    ],
    "themes": [
      {
        "mal_id": 0,
        "type": "string",
        "name": "string",
        "url": "string"
      }
    ],
    "demographics": [
      {
        "mal_id": 0,
        "type": "string",
        "name": "string",
        "url": "string"
      }
    ]
  }
}
```

<h3 id="getrandomanime-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns a random anime resource|Inline|
|400|Bad Request|Error: Bad request. When required parameters were not supplied.|None|

<h3 id="getrandomanime-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[anime](#schemaanime)|false|none|Anime Resource|

<aside class="success">
This operation does not require authentication
</aside>

## getRandomManga

<a id="opIdgetRandomManga"></a>

> Code samples

```bash
curl https://api.jikan.moe/v4/random/manga \
  -H 'Accept: application/json'
```

`GET /random/manga`

> Example responses

> 200 Response

```json
{
  "data": {
    "mal_id": 0,
    "url": "string",
    "images": {
      "jpg": {
        "image_url": "string",
        "small_image_url": "string",
        "large_image_url": "string"
      },
      "webp": {
        "image_url": "string",
        "small_image_url": "string",
        "large_image_url": "string"
      }
    },
    "approved": true,
    "titles": [
      {
        "type": "string",
        "title": "string"
      }
    ],
    "title": "string",
    "title_english": "string",
    "title_japanese": "string",
    "type": "Manga",
    "chapters": 0,
    "volumes": 0,
    "status": "Finished",
    "publishing": true,
    "published": {
      "from": "string",
      "to": "string",
      "prop": {
        "from": {
          "day": 0,
          "month": 0,
          "year": 0
        },
        "to": {
          "day": 0,
          "month": 0,
          "year": 0
        },
        "string": "string"
      }
    },
    "score": 0,
    "scored_by": 0,
    "rank": 0,
    "popularity": 0,
    "members": 0,
    "favorites": 0,
    "synopsis": "string",
    "background": "string",
    "authors": [
      {
        "mal_id": 0,
        "type": "string",
        "name": "string",
        "url": "string"
      }
    ],
    "serializations": [
      {
        "mal_id": 0,
        "type": "string",
        "name": "string",
        "url": "string"
      }
    ],
    "genres": [
      {
        "mal_id": 0,
        "type": "string",
        "name": "string",
        "url": "string"
      }
    ],
    "explicit_genres": [
      {
        "mal_id": 0,
        "type": "string",
        "name": "string",
        "url": "string"
      }
    ],
    "themes": [
      {
        "mal_id": 0,
        "type": "string",
        "name": "string",
        "url": "string"
      }
    ],
    "demographics": [
      {
        "mal_id": 0,
        "type": "string",
        "name": "string",
        "url": "string"
      }
    ]
  }
}
```

<h3 id="getrandommanga-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns a random manga resource|Inline|
|400|Bad Request|Error: Bad request. When required parameters were not supplied.|None|

<h3 id="getrandommanga-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[manga](#schemamanga)|false|none|Manga Resource|

<aside class="success">
This operation does not require authentication
</aside>

## getRandomCharacters

<a id="opIdgetRandomCharacters"></a>

> Code samples

```bash
curl https://api.jikan.moe/v4/random/characters \
  -H 'Accept: application/json'
```

`GET /random/characters`

> Example responses

> 200 Response

```json
{
  "data": {
    "mal_id": 0,
    "url": "string",
    "images": {
      "jpg": {
        "image_url": "string",
        "small_image_url": "string"
      },
      "webp": {
        "image_url": "string",
        "small_image_url": "string"
      }
    },
    "name": "string",
    "name_kanji": "string",
    "nicknames": [
      "string"
    ],
    "favorites": 0,
    "about": "string"
  }
}
```

<h3 id="getrandomcharacters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns a random character resource|Inline|
|400|Bad Request|Error: Bad request. When required parameters were not supplied.|None|

<h3 id="getrandomcharacters-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[character](#schemacharacter)|false|none|Character Resource|

<aside class="success">
This operation does not require authentication
</aside>

## getRandomPeople

<a id="opIdgetRandomPeople"></a>

> Code samples

```bash
curl https://api.jikan.moe/v4/random/people \
  -H 'Accept: application/json'
```

`GET /random/people`

> Example responses

> 200 Response

```json
{
  "data": {
    "mal_id": 0,
    "url": "string",
    "website_url": "string",
    "images": {
      "jpg": {
        "image_url": "string"
      }
    },
    "name": "string",
    "given_name": "string",
    "family_name": "string",
    "alternate_names": [
      "string"
    ],
    "birthday": "string",
    "favorites": 0,
    "about": "string"
  }
}
```

<h3 id="getrandompeople-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns a random person resource|Inline|
|400|Bad Request|Error: Bad request. When required parameters were not supplied.|None|

<h3 id="getrandompeople-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[person](#schemaperson)|false|none|Person Resource|

<aside class="success">
This operation does not require authentication
</aside>

## getRandomUsers

<a id="opIdgetRandomUsers"></a>

> Code samples

```bash
curl https://api.jikan.moe/v4/random/users \
  -H 'Accept: application/json'
```

`GET /random/users`

> Example responses

> 200 Response

```json
{
  "data": {
    "mal_id": 0,
    "username": "string",
    "url": "string",
    "images": {
      "jpg": {
        "image_url": "string"
      },
      "webp": {
        "image_url": "string"
      }
    },
    "last_online": "string",
    "gender": "string",
    "birthday": "string",
    "location": "string",
    "joined": "string"
  }
}
```

<h3 id="getrandomusers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns a random user profile resource|Inline|
|400|Bad Request|Error: Bad request. When required parameters were not supplied.|None|

<h3 id="getrandomusers-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[user_profile](#schemauser_profile)|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="jikan-api-recommendations">recommendations</h1>

## getRecentAnimeRecommendations

<a id="opIdgetRecentAnimeRecommendations"></a>

> Code samples

```bash
curl https://api.jikan.moe/v4/recommendations/anime \
  -H 'Accept: application/json'
```

`GET /recommendations/anime`

<h3 id="getrecentanimerecommendations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "mal_id": "string",
      "entry": [
        {
          "mal_id": 0,
          "url": "string",
          "images": {
            "jpg": {
              "image_url": "string",
              "small_image_url": "string",
              "large_image_url": "string"
            },
            "webp": {
              "image_url": "string",
              "small_image_url": "string",
              "large_image_url": "string"
            }
          },
          "title": "string"
        }
      ],
      "content": "string",
      "user": {
        "url": "string",
        "username": "string"
      }
    }
  ],
  "pagination": {
    "last_visible_page": 0,
    "has_next_page": true
  }
}
```

<h3 id="getrecentanimerecommendations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns recent anime recommendations|[recommendations](#schemarecommendations)|
|400|Bad Request|Error: Bad request. When required parameters were not supplied.|None|

<aside class="success">
This operation does not require authentication
</aside>

## getRecentMangaRecommendations

<a id="opIdgetRecentMangaRecommendations"></a>

> Code samples

```bash
curl https://api.jikan.moe/v4/recommendations/manga \
  -H 'Accept: application/json'
```

`GET /recommendations/manga`

<h3 id="getrecentmangarecommendations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "mal_id": "string",
      "entry": [
        {
          "mal_id": 0,
          "url": "string",
          "images": {
            "jpg": {
              "image_url": "string",
              "small_image_url": "string",
              "large_image_url": "string"
            },
            "webp": {
              "image_url": "string",
              "small_image_url": "string",
              "large_image_url": "string"
            }
          },
          "title": "string"
        }
      ],
      "content": "string",
      "user": {
        "url": "string",
        "username": "string"
      }
    }
  ],
  "pagination": {
    "last_visible_page": 0,
    "has_next_page": true
  }
}
```

<h3 id="getrecentmangarecommendations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns recent manga recommendations|[recommendations](#schemarecommendations)|
|400|Bad Request|Error: Bad request. When required parameters were not supplied.|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="jikan-api-reviews">reviews</h1>

## getRecentAnimeReviews

<a id="opIdgetRecentAnimeReviews"></a>

> Code samples

```bash
curl https://api.jikan.moe/v4/reviews/anime \
  -H 'Accept: application/json'
```

`GET /reviews/anime`

<h3 id="getrecentanimereviews-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer|false|none|
|preliminary|query|boolean|false|Any reviews left during an ongoing anime/manga, those reviews are tagged as preliminary. NOTE: Preliminary reviews are not returned by default so if the entry is airing/publishing you need to add this otherwise you will get an empty list. e.g usage: `?preliminary=true`|
|spoilers|query|boolean|false|Any reviews that are tagged as a spoiler. Spoiler reviews are not returned by default. e.g usage: `?spoiler=true`|

> Example responses

> 200 Response

```json
null
```

<h3 id="getrecentanimereviews-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns recent anime reviews|Inline|
|400|Bad Request|Error: Bad request. When required parameters were not supplied.|None|

<aside class="success">
This operation does not require authentication
</aside>

## getRecentMangaReviews

<a id="opIdgetRecentMangaReviews"></a>

> Code samples

```bash
curl https://api.jikan.moe/v4/reviews/manga \
  -H 'Accept: application/json'
```

`GET /reviews/manga`

<h3 id="getrecentmangareviews-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer|false|none|
|preliminary|query|boolean|false|Any reviews left during an ongoing anime/manga, those reviews are tagged as preliminary. NOTE: Preliminary reviews are not returned by default so if the entry is airing/publishing you need to add this otherwise you will get an empty list. e.g usage: `?preliminary=true`|
|spoilers|query|boolean|false|Any reviews that are tagged as a spoiler. Spoiler reviews are not returned by default. e.g usage: `?spoiler=true`|

> Example responses

> 200 Response

```json
null
```

<h3 id="getrecentmangareviews-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns recent manga reviews|Inline|
|400|Bad Request|Error: Bad request. When required parameters were not supplied.|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="jikan-api-schedules">schedules</h1>

## getSchedules

<a id="opIdgetSchedules"></a>

> Code samples

```bash
curl https://api.jikan.moe/v4/schedules \
  -H 'Accept: application/json'
```

`GET /schedules`

<h3 id="getschedules-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|filter|query|string|false|Filter by day|
|kids|query|string|false|When supplied, it will filter entries with the `Kids` Genre Demographic. When supplied as `kids=true`, it will return only Kid entries and when supplied as `kids=false`, it will filter out any Kid entries. Defaults to `false`.|
|sfw|query|string|false|'Safe For Work'. When supplied, it will filter entries with the `Hentai` Genre. When supplied as `sfw=true`, it will return only SFW entries and when supplied as `sfw=false`, it will filter out any Hentai entries. Defaults to `false`.|
|unapproved|query|boolean|false|This is a flag. When supplied it will include entries which are unapproved. Unapproved entries on MyAnimeList are those that are user submitted and have not yet been approved by MAL to show up on other pages. They will have their own specifc pages and are often removed resulting in a 404 error. You do not need to pass a value to it. e.g usage: `?unapproved`|
|page|query|integer|false|none|
|limit|query|integer|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|filter|monday|
|filter|tuesday|
|filter|wednesday|
|filter|thursday|
|filter|friday|
|filter|saturday|
|filter|sunday|
|filter|unknown|
|filter|other|
|kids|true|
|kids|false|
|sfw|true|
|sfw|false|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "mal_id": 0,
      "url": "string",
      "images": {
        "jpg": {
          "image_url": "string",
          "small_image_url": "string",
          "large_image_url": "string"
        },
        "webp": {
          "image_url": "string",
          "small_image_url": "string",
          "large_image_url": "string"
        }
      },
      "trailer": {
        "youtube_id": "string",
        "url": "string",
        "embed_url": "string"
      },
      "approved": true,
      "titles": [
        {
          "type": "string",
          "title": "string"
        }
      ],
      "title": "string",
      "title_english": "string",
      "title_japanese": "string",
      "title_synonyms": [
        "string"
      ],
      "type": {},
      "source": "string",
      "episodes": 0,
      "status": "Finished Airing",
      "airing": true,
      "aired": {
        "from": "string",
        "to": "string",
        "prop": {
          "from": {
            "day": 0,
            "month": 0,
            "year": 0
          },
          "to": {
            "day": 0,
            "month": 0,
            "year": 0
          },
          "string": "string"
        }
      },
      "duration": "string",
      "rating": "G - All Ages",
      "score": 0,
      "scored_by": 0,
      "rank": 0,
      "popularity": 0,
      "members": 0,
      "favorites": 0,
      "synopsis": "string",
      "background": "string",
      "season": "summer",
      "year": 0,
      "broadcast": {
        "day": "string",
        "time": "string",
        "timezone": "string",
        "string": "string"
      },
      "producers": [
        {
          "mal_id": 0,
          "type": "string",
          "name": "string",
          "url": "string"
        }
      ],
      "licensors": [
        {
          "mal_id": 0,
          "type": "string",
          "name": "string",
          "url": "string"
        }
      ],
      "studios": [
        {
          "mal_id": 0,
          "type": "string",
          "name": "string",
          "url": "string"
        }
      ],
      "genres": [
        {
          "mal_id": 0,
          "type": "string",
          "name": "string",
          "url": "string"
        }
      ],
      "explicit_genres": [
        {
          "mal_id": 0,
          "type": "string",
          "name": "string",
          "url": "string"
        }
      ],
      "themes": [
        {
          "mal_id": 0,
          "type": "string",
          "name": "string",
          "url": "string"
        }
      ],
      "demographics": [
        {
          "mal_id": 0,
          "type": "string",
          "name": "string",
          "url": "string"
        }
      ]
    }
  ],
  "pagination": {
    "last_visible_page": 0,
    "has_next_page": true,
    "current_page": 0,
    "items": {
      "count": 0,
      "total": 0,
      "per_page": 0
    }
  }
}
```

<h3 id="getschedules-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns weekly schedule|[schedules](#schemaschedules)|
|400|Bad Request|Error: Bad request. When required parameters were not supplied.|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="jikan-api-users">users</h1>

## getUsersSearch

<a id="opIdgetUsersSearch"></a>

> Code samples

```bash
curl https://api.jikan.moe/v4/users \
  -H 'Accept: application/json'
```

`GET /users`

<h3 id="getuserssearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer|false|none|
|limit|query|integer|false|none|
|q|query|string|false|none|
|gender|query|[users_search_query_gender](#schemausers_search_query_gender)|false|none|
|location|query|string|false|none|
|maxAge|query|integer|false|none|
|minAge|query|integer|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|gender|any|
|gender|male|
|gender|female|
|gender|nonbinary|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "url": "string",
      "username": "string",
      "images": {
        "jpg": {
          "image_url": "string"
        },
        "webp": {
          "image_url": "string"
        }
      },
      "last_online": "string"
    }
  ],
  "pagination": {
    "last_visible_page": 0,
    "has_next_page": true
  }
}
```

<h3 id="getuserssearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns search results for users|[users_search](#schemausers_search)|
|400|Bad Request|Error: Bad request. When required parameters were not supplied.|None|

<aside class="success">
This operation does not require authentication
</aside>

## getUserById

<a id="opIdgetUserById"></a>

> Code samples

```bash
curl https://api.jikan.moe/v4/users/userbyid/0 \
  -H 'Accept: application/json'
```

`GET /users/userbyid/{id}`

<h3 id="getuserbyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "url": "string",
    "username": "string"
  }
}
```

<h3 id="getuserbyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns username by ID search|Inline|
|400|Bad Request|Error: Bad request. When required parameters were not supplied.|None|

<h3 id="getuserbyid-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[user_by_id](#schemauser_by_id)|false|none|User Meta By ID|

<aside class="success">
This operation does not require authentication
</aside>

## getUserFullProfile

<a id="opIdgetUserFullProfile"></a>

> Code samples

```bash
curl https://api.jikan.moe/v4/users/string/full \
  -H 'Accept: application/json'
```

`GET /users/{username}/full`

<h3 id="getuserfullprofile-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|username|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "mal_id": 0,
    "username": "string",
    "url": "string",
    "images": {
      "jpg": {
        "image_url": "string"
      },
      "webp": {
        "image_url": "string"
      }
    },
    "last_online": "string",
    "gender": "string",
    "birthday": "string",
    "location": "string",
    "joined": "string",
    "statistics": {
      "anime": {
        "days_watched": 0,
        "mean_score": 0,
        "watching": 0,
        "completed": 0,
        "on_hold": 0,
        "dropped": 0,
        "plan_to_watch": 0,
        "total_entries": 0,
        "rewatched": 0,
        "episodes_watched": 0
      },
      "manga": {
        "days_read": 0,
        "mean_score": 0,
        "reading": 0,
        "completed": 0,
        "on_hold": 0,
        "dropped": 0,
        "plan_to_read": 0,
        "total_entries": 0,
        "reread": 0,
        "chapters_read": 0,
        "volumes_read": 0
      }
    },
    "external": [
      {
        "name": "string",
        "url": "string"
      }
    ]
  }
}
```

<h3 id="getuserfullprofile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns complete user resource data|Inline|
|400|Bad Request|Error: Bad request. When required parameters were not supplied.|None|

<h3 id="getuserfullprofile-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[user_profile_full](#schemauser_profile_full)|false|none|Transform the resource into an array.|

<aside class="success">
This operation does not require authentication
</aside>

## getUserProfile

<a id="opIdgetUserProfile"></a>

> Code samples

```bash
curl https://api.jikan.moe/v4/users/string \
  -H 'Accept: application/json'
```

`GET /users/{username}`

<h3 id="getuserprofile-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|username|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "mal_id": 0,
    "username": "string",
    "url": "string",
    "images": {
      "jpg": {
        "image_url": "string"
      },
      "webp": {
        "image_url": "string"
      }
    },
    "last_online": "string",
    "gender": "string",
    "birthday": "string",
    "location": "string",
    "joined": "string"
  }
}
```

<h3 id="getuserprofile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns user profile|Inline|
|400|Bad Request|Error: Bad request. When required parameters were not supplied.|None|

<h3 id="getuserprofile-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[user_profile](#schemauser_profile)|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## getUserStatistics

<a id="opIdgetUserStatistics"></a>

> Code samples

```bash
curl https://api.jikan.moe/v4/users/string/statistics \
  -H 'Accept: application/json'
```

`GET /users/{username}/statistics`

<h3 id="getuserstatistics-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|username|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "anime": {
      "days_watched": 0,
      "mean_score": 0,
      "watching": 0,
      "completed": 0,
      "on_hold": 0,
      "dropped": 0,
      "plan_to_watch": 0,
      "total_entries": 0,
      "rewatched": 0,
      "episodes_watched": 0
    },
    "manga": {
      "days_read": 0,
      "mean_score": 0,
      "reading": 0,
      "completed": 0,
      "on_hold": 0,
      "dropped": 0,
      "plan_to_read": 0,
      "total_entries": 0,
      "reread": 0,
      "chapters_read": 0,
      "volumes_read": 0
    }
  }
}
```

<h3 id="getuserstatistics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns user statistics|[user_statistics](#schemauser_statistics)|
|400|Bad Request|Error: Bad request. When required parameters were not supplied.|None|

<aside class="success">
This operation does not require authentication
</aside>

## getUserFavorites

<a id="opIdgetUserFavorites"></a>

> Code samples

```bash
curl https://api.jikan.moe/v4/users/string/favorites \
  -H 'Accept: application/json'
```

`GET /users/{username}/favorites`

<h3 id="getuserfavorites-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|username|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "anime": [
      {
        "type": "string",
        "start_year": 0,
        "mal_id": 0,
        "url": "string",
        "images": {
          "jpg": {
            "image_url": "string",
            "small_image_url": "string",
            "large_image_url": "string"
          },
          "webp": {
            "image_url": "string",
            "small_image_url": "string",
            "large_image_url": "string"
          }
        },
        "title": "string"
      }
    ],
    "manga": [
      {
        "type": "string",
        "start_year": 0,
        "mal_id": 0,
        "url": "string",
        "images": {
          "jpg": {
            "image_url": "string",
            "small_image_url": "string",
            "large_image_url": "string"
          },
          "webp": {
            "image_url": "string",
            "small_image_url": "string",
            "large_image_url": "string"
          }
        },
        "title": "string"
      }
    ],
    "characters": [
      {
        "mal_id": 0,
        "url": "string",
        "images": {
          "jpg": {
            "image_url": "string",
            "small_image_url": "string"
          },
          "webp": {
            "image_url": "string",
            "small_image_url": "string"
          }
        },
        "name": "string",
        "type": "string",
        "title": "string"
      }
    ],
    "people": [
      {
        "mal_id": 0,
        "url": "string",
        "images": {
          "jpg": {
            "image_url": "string",
            "small_image_url": "string"
          },
          "webp": {
            "image_url": "string",
            "small_image_url": "string"
          }
        },
        "name": "string"
      }
    ]
  }
}
```

<h3 id="getuserfavorites-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns user favorites|Inline|
|400|Bad Request|Error: Bad request. When required parameters were not supplied.|None|

<h3 id="getuserfavorites-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[user_favorites](#schemauser_favorites)|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## getUserUpdates

<a id="opIdgetUserUpdates"></a>

> Code samples

```bash
curl https://api.jikan.moe/v4/users/string/userupdates \
  -H 'Accept: application/json'
```

`GET /users/{username}/userupdates`

<h3 id="getuserupdates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|username|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "anime": [
      {
        "entry": {
          "mal_id": 0,
          "url": "string",
          "images": {
            "jpg": {
              "image_url": "string",
              "small_image_url": "string",
              "large_image_url": "string"
            },
            "webp": {
              "image_url": "string",
              "small_image_url": "string",
              "large_image_url": "string"
            }
          },
          "title": "string"
        },
        "score": 0,
        "status": "string",
        "episodes_seen": 0,
        "episodes_total": 0,
        "date": "string"
      }
    ],
    "manga": [
      {
        "entry": {
          "mal_id": 0,
          "url": "string",
          "images": {
            "jpg": {
              "image_url": "string",
              "small_image_url": "string",
              "large_image_url": "string"
            },
            "webp": {
              "image_url": "string",
              "small_image_url": "string",
              "large_image_url": "string"
            }
          },
          "title": "string"
        },
        "score": 0,
        "status": "string",
        "chapters_read": 0,
        "chapters_total": 0,
        "volumes_read": 0,
        "volumes_total": 0,
        "date": "string"
      }
    ]
  }
}
```

<h3 id="getuserupdates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns user updates|[user_updates](#schemauser_updates)|
|400|Bad Request|Error: Bad request. When required parameters were not supplied.|None|

<aside class="success">
This operation does not require authentication
</aside>

## getUserAbout

<a id="opIdgetUserAbout"></a>

> Code samples

```bash
curl https://api.jikan.moe/v4/users/string/about \
  -H 'Accept: application/json'
```

`GET /users/{username}/about`

<h3 id="getuserabout-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|username|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "about": "string"
    }
  ]
}
```

<h3 id="getuserabout-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns user about in raw HTML|[user_about](#schemauser_about)|
|400|Bad Request|Error: Bad request. When required parameters were not supplied.|None|

<aside class="success">
This operation does not require authentication
</aside>

## getUserHistory

<a id="opIdgetUserHistory"></a>

> Code samples

```bash
curl https://api.jikan.moe/v4/users/string/history \
  -H 'Accept: application/json'
```

`GET /users/{username}/history`

<h3 id="getuserhistory-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|username|path|string|true|none|
|type|query|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|anime|
|type|manga|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "entry": {
        "mal_id": 0,
        "type": "string",
        "name": "string",
        "url": "string"
      },
      "increment": 0,
      "date": "string"
    }
  ]
}
```

<h3 id="getuserhistory-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns user history (past 30 days)|[user_history](#schemauser_history)|
|400|Bad Request|Error: Bad request. When required parameters were not supplied.|None|

<aside class="success">
This operation does not require authentication
</aside>

## getUserFriends

<a id="opIdgetUserFriends"></a>

> Code samples

```bash
curl https://api.jikan.moe/v4/users/string/friends \
  -H 'Accept: application/json'
```

`GET /users/{username}/friends`

<h3 id="getuserfriends-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|username|path|string|true|none|
|page|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "user": {
        "username": "string",
        "url": "string",
        "images": {
          "jpg": {
            "image_url": "string"
          },
          "webp": {
            "image_url": "string"
          }
        }
      },
      "last_online": "string",
      "friends_since": "string"
    }
  ],
  "pagination": {
    "last_visible_page": 0,
    "has_next_page": true
  }
}
```

<h3 id="getuserfriends-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns user friends|[user_friends](#schemauser_friends)|
|400|Bad Request|Error: Bad request. When required parameters were not supplied.|None|

<aside class="success">
This operation does not require authentication
</aside>

## getUserAnimelist

<a id="opIdgetUserAnimelist"></a>

> Code samples

```bash
curl https://api.jikan.moe/v4/users/string/animelist \
  -H 'Accept: application/json'
```

`GET /users/{username}/animelist`

<aside class="warning">
This operation is deprecated
</aside>

User Anime lists have been discontinued since May 1st, 2022. <a href='https://docs.google.com/document/d/1-6H-agSnqa8Mfmw802UYfGQrceIEnAaEh4uCXAPiX5A'>Read more</a>

<h3 id="getuseranimelist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|username|path|string|true|none|
|status|query|[user_anime_list_status_filter](#schemauser_anime_list_status_filter)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|status|all|
|status|watching|
|status|completed|
|status|onhold|
|status|dropped|
|status|plantowatch|

> Example responses

> 200 Response

```json
null
```

<h3 id="getuseranimelist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns user anime list|Inline|
|400|Bad Request|Error: Bad request. When required parameters were not supplied.|None|

<aside class="success">
This operation does not require authentication
</aside>

## getUserMangaList

<a id="opIdgetUserMangaList"></a>

> Code samples

```bash
curl https://api.jikan.moe/v4/users/string/mangalist \
  -H 'Accept: application/json'
```

`GET /users/{username}/mangalist`

<aside class="warning">
This operation is deprecated
</aside>

User Manga lists have been discontinued since May 1st, 2022. <a href='https://docs.google.com/document/d/1-6H-agSnqa8Mfmw802UYfGQrceIEnAaEh4uCXAPiX5A'>Read more</a>

<h3 id="getusermangalist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|username|path|string|true|none|
|status|query|[user_manga_list_status_filter](#schemauser_manga_list_status_filter)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|status|all|
|status|reading|
|status|completed|
|status|onhold|
|status|dropped|
|status|plantoread|

> Example responses

> 200 Response

```json
null
```

<h3 id="getusermangalist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns user manga list|Inline|
|400|Bad Request|Error: Bad request. When required parameters were not supplied.|None|

<aside class="success">
This operation does not require authentication
</aside>

## getUserReviews

<a id="opIdgetUserReviews"></a>

> Code samples

```bash
curl https://api.jikan.moe/v4/users/string/reviews \
  -H 'Accept: application/json'
```

`GET /users/{username}/reviews`

<h3 id="getuserreviews-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|username|path|string|true|none|
|page|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "data": [
      {
        "user": {
          "username": "string",
          "url": "string",
          "images": {
            "jpg": {
              "image_url": "string"
            },
            "webp": {
              "image_url": "string"
            }
          }
        },
        "anime": {
          "mal_id": 0,
          "url": "string",
          "images": {
            "jpg": {
              "image_url": "string",
              "small_image_url": "string",
              "large_image_url": "string"
            },
            "webp": {
              "image_url": "string",
              "small_image_url": "string",
              "large_image_url": "string"
            }
          },
          "title": "string"
        },
        "mal_id": 0,
        "url": "string",
        "type": "string",
        "reactions": {
          "overall": 0,
          "nice": 0,
          "love_it": 0,
          "funny": 0,
          "confusing": 0,
          "informative": 0,
          "well_written": 0,
          "creative": 0
        },
        "date": "string",
        "review": "string",
        "score": 0,
        "tags": [
          "string"
        ],
        "is_spoiler": true,
        "is_preliminary": true,
        "episodes_watched": 0
      }
    ],
    "pagination": {
      "last_visible_page": 0,
      "has_next_page": true
    }
  }
}
```

<h3 id="getuserreviews-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns user reviews|Inline|
|400|Bad Request|Error: Bad request. When required parameters were not supplied.|None|

<h3 id="getuserreviews-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|
|» data|[object]|false|none|none|
|» » *anyOf*|object|false|none|none|
|» » user|[user_meta](#schemauser_meta)|false|none|none|
|» » anime|[anime_meta](#schemaanime_meta)|false|none|none|
|» » mal_id|integer|false|none|MyAnimeList ID|
|» » url|string|false|none|MyAnimeList review URL|
|» » type|string|false|none|Entry type|
|» » reactions|object|false|none|User reaction count on the review|
|» » » overall|integer|false|none|Overall reaction count|
|» » » nice|integer|false|none|Nice reaction count|
|» » » love_it|integer|false|none|Love it reaction count|
|» » » funny|integer|false|none|Funny reaction count|
|» » » confusing|integer|false|none|Confusing reaction count|
|» » » informative|integer|false|none|Informative reaction count|
|» » » well_written|integer|false|none|Well written reaction count|
|» » » creative|integer|false|none|Creative reaction count|
|» » date|string|false|none|Review created date ISO8601|
|» » review|string|false|none|Review content|
|» » score|integer|false|none|Number of user votes on the Review|
|» » tags|[string]|false|none|Review tags|
|» » is_spoiler|boolean|false|none|The review contains spoiler|
|» » is_preliminary|boolean|false|none|The review was made before the entry was completed|
|» » episodes_watched|integer|false|none|Number of episodes watched|
|» » *anyOf*|object|false|none|none|
|» » user|[user_meta](#schemauser_meta)|false|none|none|
|» » manga|[manga_meta](#schemamanga_meta)|false|none|none|
|» » mal_id|integer|false|none|MyAnimeList ID|
|» » url|string|false|none|MyAnimeList review URL|
|» » type|string|false|none|Entry type|
|» » reactions|object|false|none|User reaction count on the review|
|» » » overall|integer|false|none|Overall reaction count|
|» » » nice|integer|false|none|Nice reaction count|
|» » » love_it|integer|false|none|Love it reaction count|
|» » » funny|integer|false|none|Funny reaction count|
|» » » confusing|integer|false|none|Confusing reaction count|
|» » » informative|integer|false|none|Informative reaction count|
|» » » well_written|integer|false|none|Well written reaction count|
|» » » creative|integer|false|none|Creative reaction count|
|» » date|string|false|none|Review created date ISO8601|
|» » review|string|false|none|Review content|
|» » score|integer|false|none|Number of user votes on the Review|
|» » tags|[string]|false|none|Review tags|
|» » is_spoiler|boolean|false|none|The review contains spoiler|
|» » is_preliminary|boolean|false|none|The review was made before the entry was completed|
|» pagination|object|false|none|none|
|» » last_visible_page|integer|false|none|none|
|» » has_next_page|boolean|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## getUserRecommendations

<a id="opIdgetUserRecommendations"></a>

> Code samples

```bash
curl https://api.jikan.moe/v4/users/string/recommendations \
  -H 'Accept: application/json'
```

`GET /users/{username}/recommendations`

<h3 id="getuserrecommendations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|username|path|string|true|none|
|page|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "mal_id": "string",
      "entry": [
        {
          "mal_id": 0,
          "url": "string",
          "images": {
            "jpg": {
              "image_url": "string",
              "small_image_url": "string",
              "large_image_url": "string"
            },
            "webp": {
              "image_url": "string",
              "small_image_url": "string",
              "large_image_url": "string"
            }
          },
          "title": "string"
        }
      ],
      "content": "string",
      "user": {
        "url": "string",
        "username": "string"
      }
    }
  ],
  "pagination": {
    "last_visible_page": 0,
    "has_next_page": true
  }
}
```

<h3 id="getuserrecommendations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns Recent Anime Recommendations|[recommendations](#schemarecommendations)|
|400|Bad Request|Error: Bad request. When required parameters were not supplied.|None|

<aside class="success">
This operation does not require authentication
</aside>

## getUserClubs

<a id="opIdgetUserClubs"></a>

> Code samples

```bash
curl https://api.jikan.moe/v4/users/string/clubs \
  -H 'Accept: application/json'
```

`GET /users/{username}/clubs`

<h3 id="getuserclubs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|username|path|string|true|none|
|page|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "mal_id": 0,
      "name": "string",
      "url": "string"
    }
  ],
  "pagination": {
    "last_visible_page": 0,
    "has_next_page": true
  }
}
```

<h3 id="getuserclubs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns user clubs|[user_clubs](#schemauser_clubs)|
|400|Bad Request|Error: Bad request. When required parameters were not supplied.|None|

<aside class="success">
This operation does not require authentication
</aside>

## getUserExternal

<a id="opIdgetUserExternal"></a>

> Code samples

```bash
curl https://api.jikan.moe/v4/users/string/external \
  -H 'Accept: application/json'
```

`GET /users/{username}/external`

<h3 id="getuserexternal-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|username|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "name": "string",
      "url": "string"
    }
  ]
}
```

<h3 id="getuserexternal-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns user's external links|[external_links](#schemaexternal_links)|
|400|Bad Request|Error: Bad request. When required parameters were not supplied.|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="jikan-api-seasons">seasons</h1>

## getSeasonNow

<a id="opIdgetSeasonNow"></a>

> Code samples

```bash
curl https://api.jikan.moe/v4/seasons/now \
  -H 'Accept: application/json'
```

`GET /seasons/now`

<h3 id="getseasonnow-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|filter|query|string|false|Entry types|
|sfw|query|boolean|false|'Safe For Work'. This is a flag. When supplied it will filter out entries according to the SFW Policy. You do not need to pass a value to it. e.g usage: `?sfw`|
|unapproved|query|boolean|false|This is a flag. When supplied it will include entries which are unapproved. Unapproved entries on MyAnimeList are those that are user submitted and have not yet been approved by MAL to show up on other pages. They will have their own specifc pages and are often removed resulting in a 404 error. You do not need to pass a value to it. e.g usage: `?unapproved`|
|continuing|query|boolean|false|This is a flag. When supplied it will include entries which are continuing from previous seasons. MAL includes these items on the seasons view in the &#8243;TV (continuing)&#8243; section. (Example: https://myanimelist.net/anime/season/2024/winter) <br />Example usage: `?continuing`|
|page|query|integer|false|none|
|limit|query|integer|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|filter|tv|
|filter|movie|
|filter|ova|
|filter|special|
|filter|ona|
|filter|music|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "mal_id": 0,
      "url": "string",
      "images": {
        "jpg": {
          "image_url": "string",
          "small_image_url": "string",
          "large_image_url": "string"
        },
        "webp": {
          "image_url": "string",
          "small_image_url": "string",
          "large_image_url": "string"
        }
      },
      "trailer": {
        "youtube_id": "string",
        "url": "string",
        "embed_url": "string"
      },
      "approved": true,
      "titles": [
        {
          "type": "string",
          "title": "string"
        }
      ],
      "title": "string",
      "title_english": "string",
      "title_japanese": "string",
      "title_synonyms": [
        "string"
      ],
      "type": {},
      "source": "string",
      "episodes": 0,
      "status": "Finished Airing",
      "airing": true,
      "aired": {
        "from": "string",
        "to": "string",
        "prop": {
          "from": {
            "day": 0,
            "month": 0,
            "year": 0
          },
          "to": {
            "day": 0,
            "month": 0,
            "year": 0
          },
          "string": "string"
        }
      },
      "duration": "string",
      "rating": "G - All Ages",
      "score": 0,
      "scored_by": 0,
      "rank": 0,
      "popularity": 0,
      "members": 0,
      "favorites": 0,
      "synopsis": "string",
      "background": "string",
      "season": "summer",
      "year": 0,
      "broadcast": {
        "day": "string",
        "time": "string",
        "timezone": "string",
        "string": "string"
      },
      "producers": [
        {
          "mal_id": 0,
          "type": "string",
          "name": "string",
          "url": "string"
        }
      ],
      "licensors": [
        {
          "mal_id": 0,
          "type": "string",
          "name": "string",
          "url": "string"
        }
      ],
      "studios": [
        {
          "mal_id": 0,
          "type": "string",
          "name": "string",
          "url": "string"
        }
      ],
      "genres": [
        {
          "mal_id": 0,
          "type": "string",
          "name": "string",
          "url": "string"
        }
      ],
      "explicit_genres": [
        {
          "mal_id": 0,
          "type": "string",
          "name": "string",
          "url": "string"
        }
      ],
      "themes": [
        {
          "mal_id": 0,
          "type": "string",
          "name": "string",
          "url": "string"
        }
      ],
      "demographics": [
        {
          "mal_id": 0,
          "type": "string",
          "name": "string",
          "url": "string"
        }
      ]
    }
  ],
  "pagination": {
    "last_visible_page": 0,
    "has_next_page": true,
    "current_page": 0,
    "items": {
      "count": 0,
      "total": 0,
      "per_page": 0
    }
  }
}
```

<h3 id="getseasonnow-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns current seasonal anime|[anime_search](#schemaanime_search)|
|400|Bad Request|Error: Bad request. When required parameters were not supplied.|None|

<aside class="success">
This operation does not require authentication
</aside>

## getSeason

<a id="opIdgetSeason"></a>

> Code samples

```bash
curl https://api.jikan.moe/v4/seasons/0/string \
  -H 'Accept: application/json'
```

`GET /seasons/{year}/{season}`

<h3 id="getseason-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|year|path|integer|true|none|
|season|path|string|true|none|
|filter|query|string|false|Entry types|
|sfw|query|boolean|false|'Safe For Work'. This is a flag. When supplied it will filter out entries according to the SFW Policy. You do not need to pass a value to it. e.g usage: `?sfw`|
|unapproved|query|boolean|false|This is a flag. When supplied it will include entries which are unapproved. Unapproved entries on MyAnimeList are those that are user submitted and have not yet been approved by MAL to show up on other pages. They will have their own specifc pages and are often removed resulting in a 404 error. You do not need to pass a value to it. e.g usage: `?unapproved`|
|continuing|query|boolean|false|This is a flag. When supplied it will include entries which are continuing from previous seasons. MAL includes these items on the seasons view in the &#8243;TV (continuing)&#8243; section. (Example: https://myanimelist.net/anime/season/2024/winter) <br />Example usage: `?continuing`|
|page|query|integer|false|none|
|limit|query|integer|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|filter|tv|
|filter|movie|
|filter|ova|
|filter|special|
|filter|ona|
|filter|music|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "mal_id": 0,
      "url": "string",
      "images": {
        "jpg": {
          "image_url": "string",
          "small_image_url": "string",
          "large_image_url": "string"
        },
        "webp": {
          "image_url": "string",
          "small_image_url": "string",
          "large_image_url": "string"
        }
      },
      "trailer": {
        "youtube_id": "string",
        "url": "string",
        "embed_url": "string"
      },
      "approved": true,
      "titles": [
        {
          "type": "string",
          "title": "string"
        }
      ],
      "title": "string",
      "title_english": "string",
      "title_japanese": "string",
      "title_synonyms": [
        "string"
      ],
      "type": {},
      "source": "string",
      "episodes": 0,
      "status": "Finished Airing",
      "airing": true,
      "aired": {
        "from": "string",
        "to": "string",
        "prop": {
          "from": {
            "day": 0,
            "month": 0,
            "year": 0
          },
          "to": {
            "day": 0,
            "month": 0,
            "year": 0
          },
          "string": "string"
        }
      },
      "duration": "string",
      "rating": "G - All Ages",
      "score": 0,
      "scored_by": 0,
      "rank": 0,
      "popularity": 0,
      "members": 0,
      "favorites": 0,
      "synopsis": "string",
      "background": "string",
      "season": "summer",
      "year": 0,
      "broadcast": {
        "day": "string",
        "time": "string",
        "timezone": "string",
        "string": "string"
      },
      "producers": [
        {
          "mal_id": 0,
          "type": "string",
          "name": "string",
          "url": "string"
        }
      ],
      "licensors": [
        {
          "mal_id": 0,
          "type": "string",
          "name": "string",
          "url": "string"
        }
      ],
      "studios": [
        {
          "mal_id": 0,
          "type": "string",
          "name": "string",
          "url": "string"
        }
      ],
      "genres": [
        {
          "mal_id": 0,
          "type": "string",
          "name": "string",
          "url": "string"
        }
      ],
      "explicit_genres": [
        {
          "mal_id": 0,
          "type": "string",
          "name": "string",
          "url": "string"
        }
      ],
      "themes": [
        {
          "mal_id": 0,
          "type": "string",
          "name": "string",
          "url": "string"
        }
      ],
      "demographics": [
        {
          "mal_id": 0,
          "type": "string",
          "name": "string",
          "url": "string"
        }
      ]
    }
  ],
  "pagination": {
    "last_visible_page": 0,
    "has_next_page": true,
    "current_page": 0,
    "items": {
      "count": 0,
      "total": 0,
      "per_page": 0
    }
  }
}
```

<h3 id="getseason-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns seasonal anime|[anime_search](#schemaanime_search)|
|400|Bad Request|Error: Bad request. When required parameters were not supplied.|None|

<aside class="success">
This operation does not require authentication
</aside>

## getSeasonsList

<a id="opIdgetSeasonsList"></a>

> Code samples

```bash
curl https://api.jikan.moe/v4/seasons \
  -H 'Accept: application/json'
```

`GET /seasons`

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "year": 0,
      "seasons": [
        "string"
      ]
    }
  ]
}
```

<h3 id="getseasonslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns available list of seasons|[seasons](#schemaseasons)|
|400|Bad Request|Error: Bad request. When required parameters were not supplied.|None|

<aside class="success">
This operation does not require authentication
</aside>

## getSeasonUpcoming

<a id="opIdgetSeasonUpcoming"></a>

> Code samples

```bash
curl https://api.jikan.moe/v4/seasons/upcoming \
  -H 'Accept: application/json'
```

`GET /seasons/upcoming`

<h3 id="getseasonupcoming-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|filter|query|string|false|Entry types|
|sfw|query|boolean|false|'Safe For Work'. This is a flag. When supplied it will filter out entries according to the SFW Policy. You do not need to pass a value to it. e.g usage: `?sfw`|
|unapproved|query|boolean|false|This is a flag. When supplied it will include entries which are unapproved. Unapproved entries on MyAnimeList are those that are user submitted and have not yet been approved by MAL to show up on other pages. They will have their own specifc pages and are often removed resulting in a 404 error. You do not need to pass a value to it. e.g usage: `?unapproved`|
|continuing|query|boolean|false|This is a flag. When supplied it will include entries which are continuing from previous seasons. MAL includes these items on the seasons view in the &#8243;TV (continuing)&#8243; section. (Example: https://myanimelist.net/anime/season/2024/winter) <br />Example usage: `?continuing`|
|page|query|integer|false|none|
|limit|query|integer|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|filter|tv|
|filter|movie|
|filter|ova|
|filter|special|
|filter|ona|
|filter|music|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "mal_id": 0,
      "url": "string",
      "images": {
        "jpg": {
          "image_url": "string",
          "small_image_url": "string",
          "large_image_url": "string"
        },
        "webp": {
          "image_url": "string",
          "small_image_url": "string",
          "large_image_url": "string"
        }
      },
      "trailer": {
        "youtube_id": "string",
        "url": "string",
        "embed_url": "string"
      },
      "approved": true,
      "titles": [
        {
          "type": "string",
          "title": "string"
        }
      ],
      "title": "string",
      "title_english": "string",
      "title_japanese": "string",
      "title_synonyms": [
        "string"
      ],
      "type": {},
      "source": "string",
      "episodes": 0,
      "status": "Finished Airing",
      "airing": true,
      "aired": {
        "from": "string",
        "to": "string",
        "prop": {
          "from": {
            "day": 0,
            "month": 0,
            "year": 0
          },
          "to": {
            "day": 0,
            "month": 0,
            "year": 0
          },
          "string": "string"
        }
      },
      "duration": "string",
      "rating": "G - All Ages",
      "score": 0,
      "scored_by": 0,
      "rank": 0,
      "popularity": 0,
      "members": 0,
      "favorites": 0,
      "synopsis": "string",
      "background": "string",
      "season": "summer",
      "year": 0,
      "broadcast": {
        "day": "string",
        "time": "string",
        "timezone": "string",
        "string": "string"
      },
      "producers": [
        {
          "mal_id": 0,
          "type": "string",
          "name": "string",
          "url": "string"
        }
      ],
      "licensors": [
        {
          "mal_id": 0,
          "type": "string",
          "name": "string",
          "url": "string"
        }
      ],
      "studios": [
        {
          "mal_id": 0,
          "type": "string",
          "name": "string",
          "url": "string"
        }
      ],
      "genres": [
        {
          "mal_id": 0,
          "type": "string",
          "name": "string",
          "url": "string"
        }
      ],
      "explicit_genres": [
        {
          "mal_id": 0,
          "type": "string",
          "name": "string",
          "url": "string"
        }
      ],
      "themes": [
        {
          "mal_id": 0,
          "type": "string",
          "name": "string",
          "url": "string"
        }
      ],
      "demographics": [
        {
          "mal_id": 0,
          "type": "string",
          "name": "string",
          "url": "string"
        }
      ]
    }
  ],
  "pagination": {
    "last_visible_page": 0,
    "has_next_page": true,
    "current_page": 0,
    "items": {
      "count": 0,
      "total": 0,
      "per_page": 0
    }
  }
}
```

<h3 id="getseasonupcoming-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns upcoming season's anime|[anime_search](#schemaanime_search)|
|400|Bad Request|Error: Bad request. When required parameters were not supplied.|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="jikan-api-top">top</h1>

## getTopAnime

<a id="opIdgetTopAnime"></a>

> Code samples

```bash
curl https://api.jikan.moe/v4/top/anime \
  -H 'Accept: application/json'
```

`GET /top/anime`

<h3 id="gettopanime-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|type|query|[anime_search_query_type](#schemaanime_search_query_type)|false|none|
|filter|query|[top_anime_filter](#schematop_anime_filter)|false|none|
|rating|query|[anime_search_query_rating](#schemaanime_search_query_rating)|false|none|
|sfw|query|boolean|false|Filter out Adult entries|
|page|query|integer|false|none|
|limit|query|integer|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|filter|airing|
|filter|upcoming|
|filter|bypopularity|
|filter|favorite|
|rating|g|
|rating|pg|
|rating|pg13|
|rating|r17|
|rating|r|
|rating|rx|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "mal_id": 0,
      "url": "string",
      "images": {
        "jpg": {
          "image_url": "string",
          "small_image_url": "string",
          "large_image_url": "string"
        },
        "webp": {
          "image_url": "string",
          "small_image_url": "string",
          "large_image_url": "string"
        }
      },
      "trailer": {
        "youtube_id": "string",
        "url": "string",
        "embed_url": "string"
      },
      "approved": true,
      "titles": [
        {
          "type": "string",
          "title": "string"
        }
      ],
      "title": "string",
      "title_english": "string",
      "title_japanese": "string",
      "title_synonyms": [
        "string"
      ],
      "type": {},
      "source": "string",
      "episodes": 0,
      "status": "Finished Airing",
      "airing": true,
      "aired": {
        "from": "string",
        "to": "string",
        "prop": {
          "from": {
            "day": 0,
            "month": 0,
            "year": 0
          },
          "to": {
            "day": 0,
            "month": 0,
            "year": 0
          },
          "string": "string"
        }
      },
      "duration": "string",
      "rating": "G - All Ages",
      "score": 0,
      "scored_by": 0,
      "rank": 0,
      "popularity": 0,
      "members": 0,
      "favorites": 0,
      "synopsis": "string",
      "background": "string",
      "season": "summer",
      "year": 0,
      "broadcast": {
        "day": "string",
        "time": "string",
        "timezone": "string",
        "string": "string"
      },
      "producers": [
        {
          "mal_id": 0,
          "type": "string",
          "name": "string",
          "url": "string"
        }
      ],
      "licensors": [
        {
          "mal_id": 0,
          "type": "string",
          "name": "string",
          "url": "string"
        }
      ],
      "studios": [
        {
          "mal_id": 0,
          "type": "string",
          "name": "string",
          "url": "string"
        }
      ],
      "genres": [
        {
          "mal_id": 0,
          "type": "string",
          "name": "string",
          "url": "string"
        }
      ],
      "explicit_genres": [
        {
          "mal_id": 0,
          "type": "string",
          "name": "string",
          "url": "string"
        }
      ],
      "themes": [
        {
          "mal_id": 0,
          "type": "string",
          "name": "string",
          "url": "string"
        }
      ],
      "demographics": [
        {
          "mal_id": 0,
          "type": "string",
          "name": "string",
          "url": "string"
        }
      ]
    }
  ],
  "pagination": {
    "last_visible_page": 0,
    "has_next_page": true,
    "current_page": 0,
    "items": {
      "count": 0,
      "total": 0,
      "per_page": 0
    }
  }
}
```

<h3 id="gettopanime-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns top anime|[anime_search](#schemaanime_search)|
|400|Bad Request|Error: Bad request. When required parameters were not supplied.|None|

<aside class="success">
This operation does not require authentication
</aside>

## getTopManga

<a id="opIdgetTopManga"></a>

> Code samples

```bash
curl https://api.jikan.moe/v4/top/manga \
  -H 'Accept: application/json'
```

`GET /top/manga`

<h3 id="gettopmanga-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|type|query|[manga_search_query_type](#schemamanga_search_query_type)|false|none|
|filter|query|[top_manga_filter](#schematop_manga_filter)|false|none|
|page|query|integer|false|none|
|limit|query|integer|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|manga|
|type|novel|
|type|lightnovel|
|type|oneshot|
|type|doujin|
|type|manhwa|
|type|manhua|
|filter|publishing|
|filter|upcoming|
|filter|bypopularity|
|filter|favorite|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "mal_id": 0,
      "url": "string",
      "images": {
        "jpg": {
          "image_url": "string",
          "small_image_url": "string",
          "large_image_url": "string"
        },
        "webp": {
          "image_url": "string",
          "small_image_url": "string",
          "large_image_url": "string"
        }
      },
      "approved": true,
      "titles": [
        {
          "type": "string",
          "title": "string"
        }
      ],
      "title": "string",
      "title_english": "string",
      "title_japanese": "string",
      "type": "Manga",
      "chapters": 0,
      "volumes": 0,
      "status": "Finished",
      "publishing": true,
      "published": {
        "from": "string",
        "to": "string",
        "prop": {
          "from": {
            "day": 0,
            "month": 0,
            "year": 0
          },
          "to": {
            "day": 0,
            "month": 0,
            "year": 0
          },
          "string": "string"
        }
      },
      "score": 0,
      "scored_by": 0,
      "rank": 0,
      "popularity": 0,
      "members": 0,
      "favorites": 0,
      "synopsis": "string",
      "background": "string",
      "authors": [
        {
          "mal_id": 0,
          "type": "string",
          "name": "string",
          "url": "string"
        }
      ],
      "serializations": [
        {
          "mal_id": 0,
          "type": "string",
          "name": "string",
          "url": "string"
        }
      ],
      "genres": [
        {
          "mal_id": 0,
          "type": "string",
          "name": "string",
          "url": "string"
        }
      ],
      "explicit_genres": [
        {
          "mal_id": 0,
          "type": "string",
          "name": "string",
          "url": "string"
        }
      ],
      "themes": [
        {
          "mal_id": 0,
          "type": "string",
          "name": "string",
          "url": "string"
        }
      ],
      "demographics": [
        {
          "mal_id": 0,
          "type": "string",
          "name": "string",
          "url": "string"
        }
      ]
    }
  ],
  "pagination": {
    "last_visible_page": 0,
    "has_next_page": true,
    "current_page": 0,
    "items": {
      "count": 0,
      "total": 0,
      "per_page": 0
    }
  }
}
```

<h3 id="gettopmanga-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns top manga|[manga_search](#schemamanga_search)|
|400|Bad Request|Error: Bad request. When required parameters were not supplied.|None|

<aside class="success">
This operation does not require authentication
</aside>

## getTopPeople

<a id="opIdgetTopPeople"></a>

> Code samples

```bash
curl https://api.jikan.moe/v4/top/people \
  -H 'Accept: application/json'
```

`GET /top/people`

<h3 id="gettoppeople-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer|false|none|
|limit|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "mal_id": 0,
      "url": "string",
      "website_url": "string",
      "images": {
        "jpg": {
          "image_url": "string"
        }
      },
      "name": "string",
      "given_name": "string",
      "family_name": "string",
      "alternate_names": [
        "string"
      ],
      "birthday": "string",
      "favorites": 0,
      "about": "string"
    }
  ],
  "pagination": {
    "last_visible_page": 0,
    "has_next_page": true,
    "current_page": 0,
    "items": {
      "count": 0,
      "total": 0,
      "per_page": 0
    }
  }
}
```

<h3 id="gettoppeople-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns top people|[people_search](#schemapeople_search)|
|400|Bad Request|Error: Bad request. When required parameters were not supplied.|None|

<aside class="success">
This operation does not require authentication
</aside>

## getTopCharacters

<a id="opIdgetTopCharacters"></a>

> Code samples

```bash
curl https://api.jikan.moe/v4/top/characters \
  -H 'Accept: application/json'
```

`GET /top/characters`

<h3 id="gettopcharacters-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer|false|none|
|limit|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "mal_id": 0,
      "url": "string",
      "images": {
        "jpg": {
          "image_url": "string",
          "small_image_url": "string"
        },
        "webp": {
          "image_url": "string",
          "small_image_url": "string"
        }
      },
      "name": "string",
      "name_kanji": "string",
      "nicknames": [
        "string"
      ],
      "favorites": 0,
      "about": "string"
    }
  ],
  "pagination": {
    "last_visible_page": 0,
    "has_next_page": true,
    "current_page": 0,
    "items": {
      "count": 0,
      "total": 0,
      "per_page": 0
    }
  }
}
```

<h3 id="gettopcharacters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns top characters|[characters_search](#schemacharacters_search)|
|400|Bad Request|Error: Bad request. When required parameters were not supplied.|None|

<aside class="success">
This operation does not require authentication
</aside>

## getTopReviews

<a id="opIdgetTopReviews"></a>

> Code samples

```bash
curl https://api.jikan.moe/v4/top/reviews \
  -H 'Accept: application/json'
```

`GET /top/reviews`

<h3 id="gettopreviews-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer|false|none|
|type|query|[top_reviews_type_enum](#schematop_reviews_type_enum)|false|none|
|preliminary|query|boolean|false|Whether the results include preliminary reviews or not. Defaults to true.|
|spoilers|query|boolean|false|Whether the results include reviews with spoilers or not. Defaults to true.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|anime|
|type|manga|

> Example responses

> 200 Response

```json
{
  "data": {
    "data": [
      {
        "user": {
          "username": "string",
          "url": "string",
          "images": {
            "jpg": {
              "image_url": "string"
            },
            "webp": {
              "image_url": "string"
            }
          }
        },
        "anime": {
          "mal_id": 0,
          "url": "string",
          "images": {
            "jpg": {
              "image_url": "string",
              "small_image_url": "string",
              "large_image_url": "string"
            },
            "webp": {
              "image_url": "string",
              "small_image_url": "string",
              "large_image_url": "string"
            }
          },
          "title": "string"
        },
        "mal_id": 0,
        "url": "string",
        "type": "string",
        "reactions": {
          "overall": 0,
          "nice": 0,
          "love_it": 0,
          "funny": 0,
          "confusing": 0,
          "informative": 0,
          "well_written": 0,
          "creative": 0
        },
        "date": "string",
        "review": "string",
        "score": 0,
        "tags": [
          "string"
        ],
        "is_spoiler": true,
        "is_preliminary": true,
        "episodes_watched": 0
      }
    ],
    "pagination": {
      "last_visible_page": 0,
      "has_next_page": true
    }
  }
}
```

<h3 id="gettopreviews-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns top reviews|Inline|
|400|Bad Request|Error: Bad request. When required parameters were not supplied.|None|

<h3 id="gettopreviews-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|
|» data|[object]|false|none|none|
|» » *anyOf*|object|false|none|none|
|» » user|[user_meta](#schemauser_meta)|false|none|none|
|» » anime|[anime_meta](#schemaanime_meta)|false|none|none|
|» » mal_id|integer|false|none|MyAnimeList ID|
|» » url|string|false|none|MyAnimeList review URL|
|» » type|string|false|none|Entry type|
|» » reactions|object|false|none|User reaction count on the review|
|» » » overall|integer|false|none|Overall reaction count|
|» » » nice|integer|false|none|Nice reaction count|
|» » » love_it|integer|false|none|Love it reaction count|
|» » » funny|integer|false|none|Funny reaction count|
|» » » confusing|integer|false|none|Confusing reaction count|
|» » » informative|integer|false|none|Informative reaction count|
|» » » well_written|integer|false|none|Well written reaction count|
|» » » creative|integer|false|none|Creative reaction count|
|» » date|string|false|none|Review created date ISO8601|
|» » review|string|false|none|Review content|
|» » score|integer|false|none|Number of user votes on the Review|
|» » tags|[string]|false|none|Review tags|
|» » is_spoiler|boolean|false|none|The review contains spoiler|
|» » is_preliminary|boolean|false|none|The review was made before the entry was completed|
|» » episodes_watched|integer|false|none|Number of episodes watched|
|» » *anyOf*|object|false|none|none|
|» » user|[user_meta](#schemauser_meta)|false|none|none|
|» » manga|[manga_meta](#schemamanga_meta)|false|none|none|
|» » mal_id|integer|false|none|MyAnimeList ID|
|» » url|string|false|none|MyAnimeList review URL|
|» » type|string|false|none|Entry type|
|» » reactions|object|false|none|User reaction count on the review|
|» » » overall|integer|false|none|Overall reaction count|
|» » » nice|integer|false|none|Nice reaction count|
|» » » love_it|integer|false|none|Love it reaction count|
|» » » funny|integer|false|none|Funny reaction count|
|» » » confusing|integer|false|none|Confusing reaction count|
|» » » informative|integer|false|none|Informative reaction count|
|» » » well_written|integer|false|none|Well written reaction count|
|» » » creative|integer|false|none|Creative reaction count|
|» » date|string|false|none|Review created date ISO8601|
|» » review|string|false|none|Review content|
|» » score|integer|false|none|Number of user votes on the Review|
|» » tags|[string]|false|none|Review tags|
|» » is_spoiler|boolean|false|none|The review contains spoiler|
|» » is_preliminary|boolean|false|none|The review was made before the entry was completed|
|» pagination|object|false|none|none|
|» » last_visible_page|integer|false|none|none|
|» » has_next_page|boolean|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="jikan-api-watch">watch</h1>

## getWatchRecentEpisodes

<a id="opIdgetWatchRecentEpisodes"></a>

> Code samples

```bash
curl https://api.jikan.moe/v4/watch/episodes \
  -H 'Accept: application/json'
```

`GET /watch/episodes`

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "entry": {
        "mal_id": 0,
        "url": "string",
        "images": {
          "jpg": {
            "image_url": "string",
            "small_image_url": "string",
            "large_image_url": "string"
          },
          "webp": {
            "image_url": "string",
            "small_image_url": "string",
            "large_image_url": "string"
          }
        },
        "title": "string"
      },
      "episodes": [
        {
          "mal_id": "string",
          "url": "string",
          "title": "string",
          "premium": true
        }
      ],
      "region_locked": true
    }
  ],
  "pagination": {
    "last_visible_page": 0,
    "has_next_page": true
  }
}
```

<h3 id="getwatchrecentepisodes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns Recently Added Episodes|[watch_episodes](#schemawatch_episodes)|
|400|Bad Request|Error: Bad request. When required parameters were not supplied.|None|

<aside class="success">
This operation does not require authentication
</aside>

## getWatchPopularEpisodes

<a id="opIdgetWatchPopularEpisodes"></a>

> Code samples

```bash
curl https://api.jikan.moe/v4/watch/episodes/popular \
  -H 'Accept: application/json'
```

`GET /watch/episodes/popular`

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "entry": {
        "mal_id": 0,
        "url": "string",
        "images": {
          "jpg": {
            "image_url": "string",
            "small_image_url": "string",
            "large_image_url": "string"
          },
          "webp": {
            "image_url": "string",
            "small_image_url": "string",
            "large_image_url": "string"
          }
        },
        "title": "string"
      },
      "episodes": [
        {
          "mal_id": "string",
          "url": "string",
          "title": "string",
          "premium": true
        }
      ],
      "region_locked": true
    }
  ],
  "pagination": {
    "last_visible_page": 0,
    "has_next_page": true
  }
}
```

<h3 id="getwatchpopularepisodes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns Popular Episodes|[watch_episodes](#schemawatch_episodes)|
|400|Bad Request|Error: Bad request. When required parameters were not supplied.|None|

<aside class="success">
This operation does not require authentication
</aside>

## getWatchRecentPromos

<a id="opIdgetWatchRecentPromos"></a>

> Code samples

```bash
curl https://api.jikan.moe/v4/watch/promos \
  -H 'Accept: application/json'
```

`GET /watch/promos`

<h3 id="getwatchrecentpromos-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "pagination": {
    "last_visible_page": 0,
    "has_next_page": true
  },
  "data": [
    {
      "title": "string",
      "entry": {
        "mal_id": 0,
        "url": "string",
        "images": {
          "jpg": {
            "image_url": "string",
            "small_image_url": "string",
            "large_image_url": "string"
          },
          "webp": {
            "image_url": "string",
            "small_image_url": "string",
            "large_image_url": "string"
          }
        },
        "title": "string"
      },
      "trailer": {
        "youtube_id": "string",
        "url": "string",
        "embed_url": "string",
        "images": {
          "image_url": "string",
          "small_image_url": "string",
          "medium_image_url": "string",
          "large_image_url": "string",
          "maximum_image_url": "string"
        }
      }
    }
  ]
}
```

<h3 id="getwatchrecentpromos-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns Recently Added Promotional Videos|[watch_promos](#schemawatch_promos)|
|400|Bad Request|Error: Bad request. When required parameters were not supplied.|None|

<aside class="success">
This operation does not require authentication
</aside>

## getWatchPopularPromos

<a id="opIdgetWatchPopularPromos"></a>

> Code samples

```bash
curl https://api.jikan.moe/v4/watch/promos/popular \
  -H 'Accept: application/json'
```

`GET /watch/promos/popular`

> Example responses

> 200 Response

```json
{
  "pagination": {
    "last_visible_page": 0,
    "has_next_page": true
  },
  "data": [
    {
      "title": "string",
      "entry": {
        "mal_id": 0,
        "url": "string",
        "images": {
          "jpg": {
            "image_url": "string",
            "small_image_url": "string",
            "large_image_url": "string"
          },
          "webp": {
            "image_url": "string",
            "small_image_url": "string",
            "large_image_url": "string"
          }
        },
        "title": "string"
      },
      "trailer": {
        "youtube_id": "string",
        "url": "string",
        "embed_url": "string",
        "images": {
          "image_url": "string",
          "small_image_url": "string",
          "medium_image_url": "string",
          "large_image_url": "string",
          "maximum_image_url": "string"
        }
      }
    }
  ]
}
```

<h3 id="getwatchpopularpromos-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns Popular Promotional Videos|[watch_promos](#schemawatch_promos)|
|400|Bad Request|Error: Bad request. When required parameters were not supplied.|None|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_user_anime_list_status_filter">user_anime_list_status_filter</h2>
<!-- backwards compatibility -->
<a id="schemauser_anime_list_status_filter"></a>
<a id="schema_user_anime_list_status_filter"></a>
<a id="tocSuser_anime_list_status_filter"></a>
<a id="tocsuser_anime_list_status_filter"></a>

```json
"all"
```

User's anime list status filter options

<h2 id="tocS_anime_search_query_orderby">anime_search_query_orderby</h2>
<!-- backwards compatibility -->
<a id="schemaanime_search_query_orderby"></a>
<a id="schema_anime_search_query_orderby"></a>
<a id="tocSanime_search_query_orderby"></a>
<a id="tocsanime_search_query_orderby"></a>

```json
"mal_id"
```

Available Anime order_by properties

<h2 id="tocS_anime_search_query_rating">anime_search_query_rating</h2>
<!-- backwards compatibility -->
<a id="schemaanime_search_query_rating"></a>
<a id="schema_anime_search_query_rating"></a>
<a id="tocSanime_search_query_rating"></a>
<a id="tocsanime_search_query_rating"></a>

```json
"g"
```

Available Anime audience ratings<br><br><b>Ratings</b><br><ul><li>G - All Ages</li><li>PG - Children</li><li>PG-13 - Teens 13 or older</li><li>R - 17+ (violence & profanity)</li><li>R+ - Mild Nudity</li><li>Rx - Hentai</li></ul>

<h2 id="tocS_anime_search_query_status">anime_search_query_status</h2>
<!-- backwards compatibility -->
<a id="schemaanime_search_query_status"></a>
<a id="schema_anime_search_query_status"></a>
<a id="tocSanime_search_query_status"></a>
<a id="tocsanime_search_query_status"></a>

```json
"airing"
```

Available Anime statuses

<h2 id="tocS_anime_search_query_type">anime_search_query_type</h2>
<!-- backwards compatibility -->
<a id="schemaanime_search_query_type"></a>
<a id="schema_anime_search_query_type"></a>
<a id="tocSanime_search_query_type"></a>
<a id="tocsanime_search_query_type"></a>

```json
{}
```

Available Anime types

<h2 id="tocS_characters_search_query_orderby">characters_search_query_orderby</h2>
<!-- backwards compatibility -->
<a id="schemacharacters_search_query_orderby"></a>
<a id="schema_characters_search_query_orderby"></a>
<a id="tocScharacters_search_query_orderby"></a>
<a id="tocscharacters_search_query_orderby"></a>

```json
"mal_id"
```

Available Character order_by properties

<h2 id="tocS_club_search_query_category">club_search_query_category</h2>
<!-- backwards compatibility -->
<a id="schemaclub_search_query_category"></a>
<a id="schema_club_search_query_category"></a>
<a id="tocSclub_search_query_category"></a>
<a id="tocsclub_search_query_category"></a>

```json
"anime"
```

Club Search Query Category

<h2 id="tocS_club_search_query_orderby">club_search_query_orderby</h2>
<!-- backwards compatibility -->
<a id="schemaclub_search_query_orderby"></a>
<a id="schema_club_search_query_orderby"></a>
<a id="tocSclub_search_query_orderby"></a>
<a id="tocsclub_search_query_orderby"></a>

```json
"mal_id"
```

Club Search Query OrderBy

<h2 id="tocS_club_search_query_type">club_search_query_type</h2>
<!-- backwards compatibility -->
<a id="schemaclub_search_query_type"></a>
<a id="schema_club_search_query_type"></a>
<a id="tocSclub_search_query_type"></a>
<a id="tocsclub_search_query_type"></a>

```json
"public"
```

Club Search Query Type

<h2 id="tocS_users_search_query_gender">users_search_query_gender</h2>
<!-- backwards compatibility -->
<a id="schemausers_search_query_gender"></a>
<a id="schema_users_search_query_gender"></a>
<a id="tocSusers_search_query_gender"></a>
<a id="tocsusers_search_query_gender"></a>

```json
"any"
```

Users Search Query Gender.

<h2 id="tocS_genre_query_filter">genre_query_filter</h2>
<!-- backwards compatibility -->
<a id="schemagenre_query_filter"></a>
<a id="schema_genre_query_filter"></a>
<a id="tocSgenre_query_filter"></a>
<a id="tocsgenre_query_filter"></a>

```json
"genres"
```

Filter genres by type

<h2 id="tocS_magazines_query_orderby">magazines_query_orderby</h2>
<!-- backwards compatibility -->
<a id="schemamagazines_query_orderby"></a>
<a id="schema_magazines_query_orderby"></a>
<a id="tocSmagazines_query_orderby"></a>
<a id="tocsmagazines_query_orderby"></a>

```json
"mal_id"
```

Order by magazine data

<h2 id="tocS_user_manga_list_status_filter">user_manga_list_status_filter</h2>
<!-- backwards compatibility -->
<a id="schemauser_manga_list_status_filter"></a>
<a id="schema_user_manga_list_status_filter"></a>
<a id="tocSuser_manga_list_status_filter"></a>
<a id="tocsuser_manga_list_status_filter"></a>

```json
"all"
```

User's anime list status filter options

<h2 id="tocS_manga_search_query_orderby">manga_search_query_orderby</h2>
<!-- backwards compatibility -->
<a id="schemamanga_search_query_orderby"></a>
<a id="schema_manga_search_query_orderby"></a>
<a id="tocSmanga_search_query_orderby"></a>
<a id="tocsmanga_search_query_orderby"></a>

```json
"mal_id"
```

Available Manga order_by properties

<h2 id="tocS_manga_search_query_status">manga_search_query_status</h2>
<!-- backwards compatibility -->
<a id="schemamanga_search_query_status"></a>
<a id="schema_manga_search_query_status"></a>
<a id="tocSmanga_search_query_status"></a>
<a id="tocsmanga_search_query_status"></a>

```json
"publishing"
```

Available Manga statuses

<h2 id="tocS_manga_search_query_type">manga_search_query_type</h2>
<!-- backwards compatibility -->
<a id="schemamanga_search_query_type"></a>
<a id="schema_manga_search_query_type"></a>
<a id="tocSmanga_search_query_type"></a>
<a id="tocsmanga_search_query_type"></a>

```json
"manga"
```

Available Manga types

<h2 id="tocS_people_search_query_orderby">people_search_query_orderby</h2>
<!-- backwards compatibility -->
<a id="schemapeople_search_query_orderby"></a>
<a id="schema_people_search_query_orderby"></a>
<a id="tocSpeople_search_query_orderby"></a>
<a id="tocspeople_search_query_orderby"></a>

```json
"mal_id"
```

Available People order_by properties

<h2 id="tocS_producers_query_orderby">producers_query_orderby</h2>
<!-- backwards compatibility -->
<a id="schemaproducers_query_orderby"></a>
<a id="schema_producers_query_orderby"></a>
<a id="tocSproducers_query_orderby"></a>
<a id="tocsproducers_query_orderby"></a>

```json
"mal_id"
```

Producers Search Query Order By

<h2 id="tocS_search_query_sort">search_query_sort</h2>
<!-- backwards compatibility -->
<a id="schemasearch_query_sort"></a>
<a id="schema_search_query_sort"></a>
<a id="tocSsearch_query_sort"></a>
<a id="tocssearch_query_sort"></a>

```json
"desc"
```

Search query sort direction

<h2 id="tocS_top_anime_filter">top_anime_filter</h2>
<!-- backwards compatibility -->
<a id="schematop_anime_filter"></a>
<a id="schema_top_anime_filter"></a>
<a id="tocStop_anime_filter"></a>
<a id="tocstop_anime_filter"></a>

```json
"airing"
```

Top items filter types

<h2 id="tocS_top_manga_filter">top_manga_filter</h2>
<!-- backwards compatibility -->
<a id="schematop_manga_filter"></a>
<a id="schema_top_manga_filter"></a>
<a id="tocStop_manga_filter"></a>
<a id="tocstop_manga_filter"></a>

```json
"publishing"
```

Top items filter types

<h2 id="tocS_top_reviews_type_enum">top_reviews_type_enum</h2>
<!-- backwards compatibility -->
<a id="schematop_reviews_type_enum"></a>
<a id="schema_top_reviews_type_enum"></a>
<a id="tocStop_reviews_type_enum"></a>
<a id="tocstop_reviews_type_enum"></a>

```json
"anime"
```

The type of reviews to filter by. Defaults to anime.

<h2 id="tocS_anime_episodes">anime_episodes</h2>
<!-- backwards compatibility -->
<a id="schemaanime_episodes"></a>
<a id="schema_anime_episodes"></a>
<a id="tocSanime_episodes"></a>
<a id="tocsanime_episodes"></a>

```json
{
  "data": [
    {
      "mal_id": 0,
      "url": "string",
      "title": "string",
      "title_japanese": "string",
      "title_romanji": "string",
      "aired": "string",
      "score": null,
      "filler": true,
      "recap": true,
      "forum_url": "string"
    }
  ],
  "pagination": {
    "last_visible_page": 0,
    "has_next_page": true
  }
}
```

Anime Episodes Resource

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|false|none|none|
|pagination|object|false|none|none|

<h2 id="tocS_anime_news">anime_news</h2>
<!-- backwards compatibility -->
<a id="schemaanime_news"></a>
<a id="schema_anime_news"></a>
<a id="tocSanime_news"></a>
<a id="tocsanime_news"></a>

```json
{
  "pagination": {
    "last_visible_page": 0,
    "has_next_page": true
  },
  "data": [
    {
      "mal_id": 0,
      "url": "string",
      "title": "string",
      "date": "string",
      "author_username": "string",
      "author_url": "string",
      "forum_url": "string",
      "images": {
        "jpg": {
          "image_url": "string"
        }
      },
      "comments": 0,
      "excerpt": "string"
    }
  ]
}
```

Anime News Resource

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pagination|object|false|none|none|
|data|[object]|false|none|none|

<h2 id="tocS_anime_videos_episodes">anime_videos_episodes</h2>
<!-- backwards compatibility -->
<a id="schemaanime_videos_episodes"></a>
<a id="schema_anime_videos_episodes"></a>
<a id="tocSanime_videos_episodes"></a>
<a id="tocsanime_videos_episodes"></a>

```json
{
  "data": [
    {
      "mal_id": 0,
      "title": "string",
      "episode": "string",
      "url": "string",
      "images": {
        "jpg": {
          "image_url": "string"
        }
      }
    }
  ],
  "pagination": {
    "last_visible_page": 0,
    "has_next_page": true
  }
}
```

Anime Videos Episodes Resource

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|false|none|none|
|pagination|object|false|none|none|

<h2 id="tocS_character_pictures">character_pictures</h2>
<!-- backwards compatibility -->
<a id="schemacharacter_pictures"></a>
<a id="schema_character_pictures"></a>
<a id="tocScharacter_pictures"></a>
<a id="tocscharacter_pictures"></a>

```json
{
  "data": [
    {
      "image_url": "string",
      "large_image_url": "string"
    }
  ]
}
```

Character Pictures

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|false|none|none|

<h2 id="tocS_club_member">club_member</h2>
<!-- backwards compatibility -->
<a id="schemaclub_member"></a>
<a id="schema_club_member"></a>
<a id="tocSclub_member"></a>
<a id="tocsclub_member"></a>

```json
{
  "data": [
    {
      "username": "string",
      "url": "string",
      "images": {
        "jpg": {
          "image_url": "string"
        },
        "webp": {
          "image_url": "string"
        }
      }
    }
  ]
}
```

Club Member

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|false|none|none|

<h2 id="tocS_manga_news">manga_news</h2>
<!-- backwards compatibility -->
<a id="schemamanga_news"></a>
<a id="schema_manga_news"></a>
<a id="tocSmanga_news"></a>
<a id="tocsmanga_news"></a>

```json
{
  "pagination": {
    "last_visible_page": 0,
    "has_next_page": true
  },
  "data": [
    {
      "mal_id": 0,
      "url": "string",
      "title": "string",
      "date": "string",
      "author_username": "string",
      "author_url": "string",
      "forum_url": "string",
      "images": {
        "jpg": {
          "image_url": "string"
        }
      },
      "comments": 0,
      "excerpt": "string"
    }
  ]
}
```

Manga News Resource

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pagination|object|false|none|none|
|data|[object]|false|none|none|

<h2 id="tocS_manga_pictures">manga_pictures</h2>
<!-- backwards compatibility -->
<a id="schemamanga_pictures"></a>
<a id="schema_manga_pictures"></a>
<a id="tocSmanga_pictures"></a>
<a id="tocsmanga_pictures"></a>

```json
{
  "data": [
    {
      "jpg": {
        "image_url": "string",
        "small_image_url": "string",
        "large_image_url": "string"
      },
      "webp": {
        "image_url": "string",
        "small_image_url": "string",
        "large_image_url": "string"
      }
    }
  ]
}
```

Manga Pictures

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[manga_images](#schemamanga_images)]|false|none|none|

<h2 id="tocS_person_pictures">person_pictures</h2>
<!-- backwards compatibility -->
<a id="schemaperson_pictures"></a>
<a id="schema_person_pictures"></a>
<a id="tocSperson_pictures"></a>
<a id="tocsperson_pictures"></a>

```json
{
  "data": [
    {
      "jpg": {
        "image_url": "string"
      }
    }
  ]
}
```

Character Pictures

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[people_images](#schemapeople_images)]|false|none|none|

<h2 id="tocS_random">random</h2>
<!-- backwards compatibility -->
<a id="schemarandom"></a>
<a id="schema_random"></a>
<a id="tocSrandom"></a>
<a id="tocsrandom"></a>

```json
{
  "data": [
    {
      "mal_id": 0,
      "url": "string",
      "images": {
        "jpg": {
          "image_url": "string",
          "small_image_url": "string",
          "large_image_url": "string"
        },
        "webp": {
          "image_url": "string",
          "small_image_url": "string",
          "large_image_url": "string"
        }
      },
      "trailer": {
        "youtube_id": "string",
        "url": "string",
        "embed_url": "string"
      },
      "approved": true,
      "titles": [
        {
          "type": "string",
          "title": "string"
        }
      ],
      "title": "string",
      "title_english": "string",
      "title_japanese": "string",
      "title_synonyms": [
        "string"
      ],
      "type": {},
      "source": "string",
      "episodes": 0,
      "status": "Finished Airing",
      "airing": true,
      "aired": {
        "from": "string",
        "to": "string",
        "prop": {
          "from": {
            "day": 0,
            "month": 0,
            "year": 0
          },
          "to": {
            "day": 0,
            "month": 0,
            "year": 0
          },
          "string": "string"
        }
      },
      "duration": "string",
      "rating": "G - All Ages",
      "score": 0,
      "scored_by": 0,
      "rank": 0,
      "popularity": 0,
      "members": 0,
      "favorites": 0,
      "synopsis": "string",
      "background": "string",
      "season": "summer",
      "year": 0,
      "broadcast": {
        "day": "string",
        "time": "string",
        "timezone": "string",
        "string": "string"
      },
      "producers": [
        {
          "mal_id": 0,
          "type": "string",
          "name": "string",
          "url": "string"
        }
      ],
      "licensors": [
        {
          "mal_id": 0,
          "type": "string",
          "name": "string",
          "url": "string"
        }
      ],
      "studios": [
        {
          "mal_id": 0,
          "type": "string",
          "name": "string",
          "url": "string"
        }
      ],
      "genres": [
        {
          "mal_id": 0,
          "type": "string",
          "name": "string",
          "url": "string"
        }
      ],
      "explicit_genres": [
        {
          "mal_id": 0,
          "type": "string",
          "name": "string",
          "url": "string"
        }
      ],
      "themes": [
        {
          "mal_id": 0,
          "type": "string",
          "name": "string",
          "url": "string"
        }
      ],
      "demographics": [
        {
          "mal_id": 0,
          "type": "string",
          "name": "string",
          "url": "string"
        }
      ]
    }
  ]
}
```

Random Resources

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|false|none|none|

<h2 id="tocS_schedules">schedules</h2>
<!-- backwards compatibility -->
<a id="schemaschedules"></a>
<a id="schema_schedules"></a>
<a id="tocSschedules"></a>
<a id="tocsschedules"></a>

```json
{
  "data": [
    {
      "mal_id": 0,
      "url": "string",
      "images": {
        "jpg": {
          "image_url": "string",
          "small_image_url": "string",
          "large_image_url": "string"
        },
        "webp": {
          "image_url": "string",
          "small_image_url": "string",
          "large_image_url": "string"
        }
      },
      "trailer": {
        "youtube_id": "string",
        "url": "string",
        "embed_url": "string"
      },
      "approved": true,
      "titles": [
        {
          "type": "string",
          "title": "string"
        }
      ],
      "title": "string",
      "title_english": "string",
      "title_japanese": "string",
      "title_synonyms": [
        "string"
      ],
      "type": {},
      "source": "string",
      "episodes": 0,
      "status": "Finished Airing",
      "airing": true,
      "aired": {
        "from": "string",
        "to": "string",
        "prop": {
          "from": {
            "day": 0,
            "month": 0,
            "year": 0
          },
          "to": {
            "day": 0,
            "month": 0,
            "year": 0
          },
          "string": "string"
        }
      },
      "duration": "string",
      "rating": "G - All Ages",
      "score": 0,
      "scored_by": 0,
      "rank": 0,
      "popularity": 0,
      "members": 0,
      "favorites": 0,
      "synopsis": "string",
      "background": "string",
      "season": "summer",
      "year": 0,
      "broadcast": {
        "day": "string",
        "time": "string",
        "timezone": "string",
        "string": "string"
      },
      "producers": [
        {
          "mal_id": 0,
          "type": "string",
          "name": "string",
          "url": "string"
        }
      ],
      "licensors": [
        {
          "mal_id": 0,
          "type": "string",
          "name": "string",
          "url": "string"
        }
      ],
      "studios": [
        {
          "mal_id": 0,
          "type": "string",
          "name": "string",
          "url": "string"
        }
      ],
      "genres": [
        {
          "mal_id": 0,
          "type": "string",
          "name": "string",
          "url": "string"
        }
      ],
      "explicit_genres": [
        {
          "mal_id": 0,
          "type": "string",
          "name": "string",
          "url": "string"
        }
      ],
      "themes": [
        {
          "mal_id": 0,
          "type": "string",
          "name": "string",
          "url": "string"
        }
      ],
      "demographics": [
        {
          "mal_id": 0,
          "type": "string",
          "name": "string",
          "url": "string"
        }
      ]
    }
  ],
  "pagination": {
    "last_visible_page": 0,
    "has_next_page": true,
    "current_page": 0,
    "items": {
      "count": 0,
      "total": 0,
      "per_page": 0
    }
  }
}
```

Anime resources currently airing

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[anime](#schemaanime)]|false|none|none|
|pagination|object|false|none|none|

<h2 id="tocS_users_search">users_search</h2>
<!-- backwards compatibility -->
<a id="schemausers_search"></a>
<a id="schema_users_search"></a>
<a id="tocSusers_search"></a>
<a id="tocsusers_search"></a>

```json
{
  "data": [
    {
      "url": "string",
      "username": "string",
      "images": {
        "jpg": {
          "image_url": "string"
        },
        "webp": {
          "image_url": "string"
        }
      },
      "last_online": "string"
    }
  ],
  "pagination": {
    "last_visible_page": 0,
    "has_next_page": true
  }
}
```

User Results

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|false|none|none|
|pagination|object|false|none|none|

<h2 id="tocS_seasons">seasons</h2>
<!-- backwards compatibility -->
<a id="schemaseasons"></a>
<a id="schema_seasons"></a>
<a id="tocSseasons"></a>
<a id="tocsseasons"></a>

```json
{
  "data": [
    {
      "year": 0,
      "seasons": [
        "string"
      ]
    }
  ]
}
```

List of available seasons

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|false|none|none|

<h2 id="tocS_reviews_collection">reviews_collection</h2>
<!-- backwards compatibility -->
<a id="schemareviews_collection"></a>
<a id="schema_reviews_collection"></a>
<a id="tocSreviews_collection"></a>
<a id="tocsreviews_collection"></a>

```json
{
  "data": [
    {
      "mal_id": 0,
      "url": "string",
      "type": "string",
      "reactions": {
        "overall": 0,
        "nice": 0,
        "love_it": 0,
        "funny": 0,
        "confusing": 0,
        "informative": 0,
        "well_written": 0,
        "creative": 0
      },
      "date": "string",
      "review": "string",
      "score": 0,
      "tags": [
        "string"
      ],
      "is_spoiler": true,
      "is_preliminary": true,
      "episodes_watched": 0
    }
  ]
}
```

Anime & Manga Reviews Resource

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|false|none|none|

<h2 id="tocS_user_friends">user_friends</h2>
<!-- backwards compatibility -->
<a id="schemauser_friends"></a>
<a id="schema_user_friends"></a>
<a id="tocSuser_friends"></a>
<a id="tocsuser_friends"></a>

```json
{
  "data": [
    {
      "user": {
        "username": "string",
        "url": "string",
        "images": {
          "jpg": {
            "image_url": "string"
          },
          "webp": {
            "image_url": "string"
          }
        }
      },
      "last_online": "string",
      "friends_since": "string"
    }
  ],
  "pagination": {
    "last_visible_page": 0,
    "has_next_page": true
  }
}
```

User Friends

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|false|none|none|
|pagination|object|false|none|none|

<h2 id="tocS_user_clubs">user_clubs</h2>
<!-- backwards compatibility -->
<a id="schemauser_clubs"></a>
<a id="schema_user_clubs"></a>
<a id="tocSuser_clubs"></a>
<a id="tocsuser_clubs"></a>

```json
{
  "data": [
    {
      "mal_id": 0,
      "name": "string",
      "url": "string"
    }
  ],
  "pagination": {
    "last_visible_page": 0,
    "has_next_page": true
  }
}
```

User Clubs

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|false|none|none|
|pagination|object|false|none|none|

<h2 id="tocS_watch_episodes">watch_episodes</h2>
<!-- backwards compatibility -->
<a id="schemawatch_episodes"></a>
<a id="schema_watch_episodes"></a>
<a id="tocSwatch_episodes"></a>
<a id="tocswatch_episodes"></a>

```json
{
  "data": [
    {
      "entry": {
        "mal_id": 0,
        "url": "string",
        "images": {
          "jpg": {
            "image_url": "string",
            "small_image_url": "string",
            "large_image_url": "string"
          },
          "webp": {
            "image_url": "string",
            "small_image_url": "string",
            "large_image_url": "string"
          }
        },
        "title": "string"
      },
      "episodes": [
        {
          "mal_id": "string",
          "url": "string",
          "title": "string",
          "premium": true
        }
      ],
      "region_locked": true
    }
  ],
  "pagination": {
    "last_visible_page": 0,
    "has_next_page": true
  }
}
```

Watch Episodes

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|false|none|none|
|pagination|object|false|none|none|

<h2 id="tocS_watch_promos">watch_promos</h2>
<!-- backwards compatibility -->
<a id="schemawatch_promos"></a>
<a id="schema_watch_promos"></a>
<a id="tocSwatch_promos"></a>
<a id="tocswatch_promos"></a>

```json
{
  "pagination": {
    "last_visible_page": 0,
    "has_next_page": true
  },
  "data": [
    {
      "title": "string",
      "entry": {
        "mal_id": 0,
        "url": "string",
        "images": {
          "jpg": {
            "image_url": "string",
            "small_image_url": "string",
            "large_image_url": "string"
          },
          "webp": {
            "image_url": "string",
            "small_image_url": "string",
            "large_image_url": "string"
          }
        },
        "title": "string"
      },
      "trailer": {
        "youtube_id": "string",
        "url": "string",
        "embed_url": "string",
        "images": {
          "image_url": "string",
          "small_image_url": "string",
          "medium_image_url": "string",
          "large_image_url": "string",
          "maximum_image_url": "string"
        }
      }
    }
  ]
}
```

Watch Promos

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pagination|object|false|none|none|
|data|[object]|false|none|none|

<h2 id="tocS_anime_characters">anime_characters</h2>
<!-- backwards compatibility -->
<a id="schemaanime_characters"></a>
<a id="schema_anime_characters"></a>
<a id="tocSanime_characters"></a>
<a id="tocsanime_characters"></a>

```json
{
  "data": [
    {
      "character": {
        "mal_id": 0,
        "url": "string",
        "images": {
          "jpg": {
            "image_url": "string",
            "small_image_url": "string"
          },
          "webp": {
            "image_url": "string",
            "small_image_url": "string"
          }
        },
        "name": "string"
      },
      "role": "string",
      "voice_actors": [
        {
          "person": {
            "mal_id": 0,
            "url": "string",
            "images": {
              "jpg": {
                "image_url": "string"
              }
            },
            "name": "string"
          },
          "language": "string"
        }
      ]
    }
  ]
}
```

Anime Characters Resource

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|false|none|none|

<h2 id="tocS_anime_search">anime_search</h2>
<!-- backwards compatibility -->
<a id="schemaanime_search"></a>
<a id="schema_anime_search"></a>
<a id="tocSanime_search"></a>
<a id="tocsanime_search"></a>

```json
{
  "data": [
    {
      "mal_id": 0,
      "url": "string",
      "images": {
        "jpg": {
          "image_url": "string",
          "small_image_url": "string",
          "large_image_url": "string"
        },
        "webp": {
          "image_url": "string",
          "small_image_url": "string",
          "large_image_url": "string"
        }
      },
      "trailer": {
        "youtube_id": "string",
        "url": "string",
        "embed_url": "string"
      },
      "approved": true,
      "titles": [
        {
          "type": "string",
          "title": "string"
        }
      ],
      "title": "string",
      "title_english": "string",
      "title_japanese": "string",
      "title_synonyms": [
        "string"
      ],
      "type": {},
      "source": "string",
      "episodes": 0,
      "status": "Finished Airing",
      "airing": true,
      "aired": {
        "from": "string",
        "to": "string",
        "prop": {
          "from": {
            "day": 0,
            "month": 0,
            "year": 0
          },
          "to": {
            "day": 0,
            "month": 0,
            "year": 0
          },
          "string": "string"
        }
      },
      "duration": "string",
      "rating": "G - All Ages",
      "score": 0,
      "scored_by": 0,
      "rank": 0,
      "popularity": 0,
      "members": 0,
      "favorites": 0,
      "synopsis": "string",
      "background": "string",
      "season": "summer",
      "year": 0,
      "broadcast": {
        "day": "string",
        "time": "string",
        "timezone": "string",
        "string": "string"
      },
      "producers": [
        {
          "mal_id": 0,
          "type": "string",
          "name": "string",
          "url": "string"
        }
      ],
      "licensors": [
        {
          "mal_id": 0,
          "type": "string",
          "name": "string",
          "url": "string"
        }
      ],
      "studios": [
        {
          "mal_id": 0,
          "type": "string",
          "name": "string",
          "url": "string"
        }
      ],
      "genres": [
        {
          "mal_id": 0,
          "type": "string",
          "name": "string",
          "url": "string"
        }
      ],
      "explicit_genres": [
        {
          "mal_id": 0,
          "type": "string",
          "name": "string",
          "url": "string"
        }
      ],
      "themes": [
        {
          "mal_id": 0,
          "type": "string",
          "name": "string",
          "url": "string"
        }
      ],
      "demographics": [
        {
          "mal_id": 0,
          "type": "string",
          "name": "string",
          "url": "string"
        }
      ]
    }
  ],
  "pagination": {
    "last_visible_page": 0,
    "has_next_page": true,
    "current_page": 0,
    "items": {
      "count": 0,
      "total": 0,
      "per_page": 0
    }
  }
}
```

Anime Collection Resource

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[anime](#schemaanime)]|false|none|none|
|pagination|object|false|none|none|

<h2 id="tocS_anime_episode">anime_episode</h2>
<!-- backwards compatibility -->
<a id="schemaanime_episode"></a>
<a id="schema_anime_episode"></a>
<a id="tocSanime_episode"></a>
<a id="tocsanime_episode"></a>

```json
{
  "mal_id": 0,
  "url": "string",
  "title": "string",
  "title_japanese": "string",
  "title_romanji": "string",
  "duration": 0,
  "aired": "string",
  "filler": true,
  "recap": true,
  "synopsis": "string"
}
```

Anime Episode Resource

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mal_id|integer|false|none|MyAnimeList ID|
|url|string|false|none|MyAnimeList URL|
|title|string|false|none|Title|
|title_japanese|string \| null|false|none|Title Japanese|
|title_romanji|string \| null|false|none|title_romanji|
|duration|integer \| null|false|none|Episode duration in seconds|
|aired|string \| null|false|none|Aired Date ISO8601|
|filler|boolean|false|none|Filler episode|
|recap|boolean|false|none|Recap episode|
|synopsis|string \| null|false|none|Episode Synopsis|

<h2 id="tocS_anime_full">anime_full</h2>
<!-- backwards compatibility -->
<a id="schemaanime_full"></a>
<a id="schema_anime_full"></a>
<a id="tocSanime_full"></a>
<a id="tocsanime_full"></a>

```json
{
  "mal_id": 0,
  "url": "string",
  "images": {
    "jpg": {
      "image_url": "string",
      "small_image_url": "string",
      "large_image_url": "string"
    },
    "webp": {
      "image_url": "string",
      "small_image_url": "string",
      "large_image_url": "string"
    }
  },
  "trailer": {
    "youtube_id": "string",
    "url": "string",
    "embed_url": "string"
  },
  "approved": true,
  "titles": [
    {
      "type": "string",
      "title": "string"
    }
  ],
  "title": "string",
  "title_english": "string",
  "title_japanese": "string",
  "title_synonyms": [
    "string"
  ],
  "type": {},
  "source": "string",
  "episodes": 0,
  "status": "Finished Airing",
  "airing": true,
  "aired": {
    "from": "string",
    "to": "string",
    "prop": {
      "from": {
        "day": 0,
        "month": 0,
        "year": 0
      },
      "to": {
        "day": 0,
        "month": 0,
        "year": 0
      },
      "string": "string"
    }
  },
  "duration": "string",
  "rating": "G - All Ages",
  "score": 0,
  "scored_by": 0,
  "rank": 0,
  "popularity": 0,
  "members": 0,
  "favorites": 0,
  "synopsis": "string",
  "background": "string",
  "season": "summer",
  "year": 0,
  "broadcast": {
    "day": "string",
    "time": "string",
    "timezone": "string",
    "string": "string"
  },
  "producers": [
    {
      "mal_id": 0,
      "type": "string",
      "name": "string",
      "url": "string"
    }
  ],
  "licensors": [
    {
      "mal_id": 0,
      "type": "string",
      "name": "string",
      "url": "string"
    }
  ],
  "studios": [
    {
      "mal_id": 0,
      "type": "string",
      "name": "string",
      "url": "string"
    }
  ],
  "genres": [
    {
      "mal_id": 0,
      "type": "string",
      "name": "string",
      "url": "string"
    }
  ],
  "explicit_genres": [
    {
      "mal_id": 0,
      "type": "string",
      "name": "string",
      "url": "string"
    }
  ],
  "themes": [
    {
      "mal_id": 0,
      "type": "string",
      "name": "string",
      "url": "string"
    }
  ],
  "demographics": [
    {
      "mal_id": 0,
      "type": "string",
      "name": "string",
      "url": "string"
    }
  ],
  "relations": [
    {
      "relation": "string",
      "entry": [
        {
          "mal_id": 0,
          "type": "string",
          "name": "string",
          "url": "string"
        }
      ]
    }
  ],
  "theme": {
    "openings": [
      "string"
    ],
    "endings": [
      "string"
    ]
  },
  "external": [
    {
      "name": "string",
      "url": "string"
    }
  ],
  "streaming": [
    {
      "name": "string",
      "url": "string"
    }
  ]
}
```

Full anime Resource

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mal_id|integer|false|none|MyAnimeList ID|
|url|string|false|none|MyAnimeList URL|
|images|[anime_images](#schemaanime_images)|false|none|none|
|trailer|[trailer_base](#schematrailer_base)|false|none|Youtube Details|
|approved|boolean|false|none|Whether the entry is pending approval on MAL or not|
|titles|[[title](#schematitle)]|false|none|All titles|
|title|string|false|none|**Deprecated.** Title|
|title_english|string \| null|false|none|**Deprecated.** English Title|
|title_japanese|string \| null|false|none|**Deprecated.** Japanese Title|
|title_synonyms|[string]|false|none|**Deprecated.** Other Titles|
|type|object \| null|false|none|none|
|source|string \| null|false|none|Original Material/Source adapted from|
|episodes|integer \| null|false|none|Episode count|
|status|string \| null|false|none|Airing status|
|airing|boolean|false|none|Airing boolean|
|aired|[daterange](#schemadaterange)|false|none|Date range|
|duration|string \| null|false|none|Parsed raw duration|
|rating|string \| null|false|none|Anime audience rating|
|score|number(float) \| null|false|none|Score|
|scored_by|integer \| null|false|none|Number of users|
|rank|integer \| null|false|none|Ranking|
|popularity|integer \| null|false|none|Popularity|
|members|integer \| null|false|none|Number of users who have added this entry to their list|
|favorites|integer \| null|false|none|Number of users who have favorited this entry|
|synopsis|string \| null|false|none|Synopsis|
|background|string \| null|false|none|Background|
|season|string \| null|false|none|Season|
|year|integer \| null|false|none|Year|
|broadcast|[broadcast](#schemabroadcast)|false|none|Broadcast Details|
|producers|[[mal_url](#schemamal_url)]|false|none|none|
|licensors|[[mal_url](#schemamal_url)]|false|none|none|
|studios|[[mal_url](#schemamal_url)]|false|none|none|
|genres|[[mal_url](#schemamal_url)]|false|none|none|
|explicit_genres|[[mal_url](#schemamal_url)]|false|none|none|
|themes|[[mal_url](#schemamal_url)]|false|none|none|
|demographics|[[mal_url](#schemamal_url)]|false|none|none|
|relations|[object]|false|none|none|
|theme|object|false|none|none|
|external|[object]|false|none|none|
|streaming|[object]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|Finished Airing|
|status|Currently Airing|
|status|Not yet aired|
|rating|G - All Ages|
|rating|PG - Children|
|rating|PG-13 - Teens 13 or older|
|rating|R - 17+ (violence & profanity)|
|rating|R+ - Mild Nudity|
|rating|Rx - Hentai|
|season|summer|
|season|winter|
|season|spring|
|season|fall|

<h2 id="tocS_anime_relations">anime_relations</h2>
<!-- backwards compatibility -->
<a id="schemaanime_relations"></a>
<a id="schema_anime_relations"></a>
<a id="tocSanime_relations"></a>
<a id="tocsanime_relations"></a>

```json
{
  "data": [
    {
      "relation": "string",
      "entry": [
        {
          "mal_id": 0,
          "type": "string",
          "name": "string",
          "url": "string"
        }
      ]
    }
  ]
}
```

Anime Relations

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|false|none|none|

<h2 id="tocS_anime">anime</h2>
<!-- backwards compatibility -->
<a id="schemaanime"></a>
<a id="schema_anime"></a>
<a id="tocSanime"></a>
<a id="tocsanime"></a>

```json
{
  "mal_id": 0,
  "url": "string",
  "images": {
    "jpg": {
      "image_url": "string",
      "small_image_url": "string",
      "large_image_url": "string"
    },
    "webp": {
      "image_url": "string",
      "small_image_url": "string",
      "large_image_url": "string"
    }
  },
  "trailer": {
    "youtube_id": "string",
    "url": "string",
    "embed_url": "string"
  },
  "approved": true,
  "titles": [
    {
      "type": "string",
      "title": "string"
    }
  ],
  "title": "string",
  "title_english": "string",
  "title_japanese": "string",
  "title_synonyms": [
    "string"
  ],
  "type": {},
  "source": "string",
  "episodes": 0,
  "status": "Finished Airing",
  "airing": true,
  "aired": {
    "from": "string",
    "to": "string",
    "prop": {
      "from": {
        "day": 0,
        "month": 0,
        "year": 0
      },
      "to": {
        "day": 0,
        "month": 0,
        "year": 0
      },
      "string": "string"
    }
  },
  "duration": "string",
  "rating": "G - All Ages",
  "score": 0,
  "scored_by": 0,
  "rank": 0,
  "popularity": 0,
  "members": 0,
  "favorites": 0,
  "synopsis": "string",
  "background": "string",
  "season": "summer",
  "year": 0,
  "broadcast": {
    "day": "string",
    "time": "string",
    "timezone": "string",
    "string": "string"
  },
  "producers": [
    {
      "mal_id": 0,
      "type": "string",
      "name": "string",
      "url": "string"
    }
  ],
  "licensors": [
    {
      "mal_id": 0,
      "type": "string",
      "name": "string",
      "url": "string"
    }
  ],
  "studios": [
    {
      "mal_id": 0,
      "type": "string",
      "name": "string",
      "url": "string"
    }
  ],
  "genres": [
    {
      "mal_id": 0,
      "type": "string",
      "name": "string",
      "url": "string"
    }
  ],
  "explicit_genres": [
    {
      "mal_id": 0,
      "type": "string",
      "name": "string",
      "url": "string"
    }
  ],
  "themes": [
    {
      "mal_id": 0,
      "type": "string",
      "name": "string",
      "url": "string"
    }
  ],
  "demographics": [
    {
      "mal_id": 0,
      "type": "string",
      "name": "string",
      "url": "string"
    }
  ]
}
```

Anime Resource

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mal_id|integer|false|none|MyAnimeList ID|
|url|string|false|none|MyAnimeList URL|
|images|[anime_images](#schemaanime_images)|false|none|none|
|trailer|[trailer_base](#schematrailer_base)|false|none|Youtube Details|
|approved|boolean|false|none|Whether the entry is pending approval on MAL or not|
|titles|[[title](#schematitle)]|false|none|All titles|
|title|string|false|none|**Deprecated.** Title|
|title_english|string \| null|false|none|**Deprecated.** English Title|
|title_japanese|string \| null|false|none|**Deprecated.** Japanese Title|
|title_synonyms|[string]|false|none|**Deprecated.** Other Titles|
|type|object \| null|false|none|none|
|source|string \| null|false|none|Original Material/Source adapted from|
|episodes|integer \| null|false|none|Episode count|
|status|string \| null|false|none|Airing status|
|airing|boolean|false|none|Airing boolean|
|aired|[daterange](#schemadaterange)|false|none|Date range|
|duration|string \| null|false|none|Parsed raw duration|
|rating|string \| null|false|none|Anime audience rating|
|score|number(float) \| null|false|none|Score|
|scored_by|integer \| null|false|none|Number of users|
|rank|integer \| null|false|none|Ranking|
|popularity|integer \| null|false|none|Popularity|
|members|integer \| null|false|none|Number of users who have added this entry to their list|
|favorites|integer \| null|false|none|Number of users who have favorited this entry|
|synopsis|string \| null|false|none|Synopsis|
|background|string \| null|false|none|Background|
|season|string \| null|false|none|Season|
|year|integer \| null|false|none|Year|
|broadcast|[broadcast](#schemabroadcast)|false|none|Broadcast Details|
|producers|[[mal_url](#schemamal_url)]|false|none|none|
|licensors|[[mal_url](#schemamal_url)]|false|none|none|
|studios|[[mal_url](#schemamal_url)]|false|none|none|
|genres|[[mal_url](#schemamal_url)]|false|none|none|
|explicit_genres|[[mal_url](#schemamal_url)]|false|none|none|
|themes|[[mal_url](#schemamal_url)]|false|none|none|
|demographics|[[mal_url](#schemamal_url)]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|Finished Airing|
|status|Currently Airing|
|status|Not yet aired|
|rating|G - All Ages|
|rating|PG - Children|
|rating|PG-13 - Teens 13 or older|
|rating|R - 17+ (violence & profanity)|
|rating|R+ - Mild Nudity|
|rating|Rx - Hentai|
|season|summer|
|season|winter|
|season|spring|
|season|fall|

<h2 id="tocS_anime_staff">anime_staff</h2>
<!-- backwards compatibility -->
<a id="schemaanime_staff"></a>
<a id="schema_anime_staff"></a>
<a id="tocSanime_staff"></a>
<a id="tocsanime_staff"></a>

```json
{
  "data": [
    {
      "person": {
        "mal_id": 0,
        "url": "string",
        "images": {
          "jpg": {
            "image_url": "string"
          }
        },
        "name": "string"
      },
      "positions": [
        "string"
      ]
    }
  ]
}
```

Anime Staff Resource

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|false|none|none|

<h2 id="tocS_anime_statistics">anime_statistics</h2>
<!-- backwards compatibility -->
<a id="schemaanime_statistics"></a>
<a id="schema_anime_statistics"></a>
<a id="tocSanime_statistics"></a>
<a id="tocsanime_statistics"></a>

```json
{
  "data": {
    "watching": 0,
    "completed": 0,
    "on_hold": 0,
    "dropped": 0,
    "plan_to_watch": 0,
    "total": 0,
    "scores": [
      {
        "score": 0,
        "votes": 0,
        "percentage": 0
      }
    ]
  }
}
```

Anime Statistics Resource

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|

<h2 id="tocS_anime_themes">anime_themes</h2>
<!-- backwards compatibility -->
<a id="schemaanime_themes"></a>
<a id="schema_anime_themes"></a>
<a id="tocSanime_themes"></a>
<a id="tocsanime_themes"></a>

```json
{
  "data": {
    "openings": [
      "string"
    ],
    "endings": [
      "string"
    ]
  }
}
```

Anime Opening and Ending Themes

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|

<h2 id="tocS_anime_videos">anime_videos</h2>
<!-- backwards compatibility -->
<a id="schemaanime_videos"></a>
<a id="schema_anime_videos"></a>
<a id="tocSanime_videos"></a>
<a id="tocsanime_videos"></a>

```json
{
  "data": {
    "promo": [
      {
        "title": "string",
        "trailer": {
          "youtube_id": "string",
          "url": "string",
          "embed_url": "string",
          "images": {
            "image_url": "string",
            "small_image_url": "string",
            "medium_image_url": "string",
            "large_image_url": "string",
            "maximum_image_url": "string"
          }
        }
      }
    ],
    "episodes": [
      {
        "mal_id": 0,
        "url": "string",
        "title": "string",
        "episode": "string",
        "images": {
          "jpg": {
            "image_url": "string"
          }
        }
      }
    ],
    "music_videos": [
      {
        "title": "string",
        "video": {
          "youtube_id": "string",
          "url": "string",
          "embed_url": "string",
          "images": {
            "image_url": "string",
            "small_image_url": "string",
            "medium_image_url": "string",
            "large_image_url": "string",
            "maximum_image_url": "string"
          }
        },
        "meta": {
          "title": "string",
          "author": "string"
        }
      }
    ]
  }
}
```

Anime Videos Resource

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|

<h2 id="tocS_anime_types">anime_types</h2>
<!-- backwards compatibility -->
<a id="schemaanime_types"></a>
<a id="schema_anime_types"></a>
<a id="tocSanime_types"></a>
<a id="tocsanime_types"></a>

```json
"TV"
```

Anime Type

<h2 id="tocS_character_anime">character_anime</h2>
<!-- backwards compatibility -->
<a id="schemacharacter_anime"></a>
<a id="schema_character_anime"></a>
<a id="tocScharacter_anime"></a>
<a id="tocscharacter_anime"></a>

```json
{
  "data": [
    {
      "role": "string",
      "anime": {
        "mal_id": 0,
        "url": "string",
        "images": {
          "jpg": {
            "image_url": "string",
            "small_image_url": "string",
            "large_image_url": "string"
          },
          "webp": {
            "image_url": "string",
            "small_image_url": "string",
            "large_image_url": "string"
          }
        },
        "title": "string"
      }
    }
  ]
}
```

Character casted in anime

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|false|none|none|

<h2 id="tocS_characters_search">characters_search</h2>
<!-- backwards compatibility -->
<a id="schemacharacters_search"></a>
<a id="schema_characters_search"></a>
<a id="tocScharacters_search"></a>
<a id="tocscharacters_search"></a>

```json
{
  "data": [
    {
      "mal_id": 0,
      "url": "string",
      "images": {
        "jpg": {
          "image_url": "string",
          "small_image_url": "string"
        },
        "webp": {
          "image_url": "string",
          "small_image_url": "string"
        }
      },
      "name": "string",
      "name_kanji": "string",
      "nicknames": [
        "string"
      ],
      "favorites": 0,
      "about": "string"
    }
  ],
  "pagination": {
    "last_visible_page": 0,
    "has_next_page": true,
    "current_page": 0,
    "items": {
      "count": 0,
      "total": 0,
      "per_page": 0
    }
  }
}
```

Characters Search Resource

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[character](#schemacharacter)]|false|none|none|
|pagination|object|false|none|none|

<h2 id="tocS_character_full">character_full</h2>
<!-- backwards compatibility -->
<a id="schemacharacter_full"></a>
<a id="schema_character_full"></a>
<a id="tocScharacter_full"></a>
<a id="tocscharacter_full"></a>

```json
{
  "mal_id": 0,
  "url": "string",
  "images": {
    "jpg": {
      "image_url": "string",
      "small_image_url": "string"
    },
    "webp": {
      "image_url": "string",
      "small_image_url": "string"
    }
  },
  "name": "string",
  "name_kanji": "string",
  "nicknames": [
    "string"
  ],
  "favorites": 0,
  "about": "string",
  "anime": [
    {
      "role": "string",
      "anime": {
        "mal_id": 0,
        "url": "string",
        "images": {
          "jpg": {
            "image_url": "string",
            "small_image_url": "string",
            "large_image_url": "string"
          },
          "webp": {
            "image_url": "string",
            "small_image_url": "string",
            "large_image_url": "string"
          }
        },
        "title": "string"
      }
    }
  ],
  "manga": [
    {
      "role": "string",
      "manga": {
        "mal_id": 0,
        "url": "string",
        "images": {
          "jpg": {
            "image_url": "string",
            "small_image_url": "string",
            "large_image_url": "string"
          },
          "webp": {
            "image_url": "string",
            "small_image_url": "string",
            "large_image_url": "string"
          }
        },
        "title": "string"
      }
    }
  ],
  "voices": [
    {
      "language": "string",
      "person": {
        "mal_id": 0,
        "url": "string",
        "images": {
          "jpg": {
            "image_url": "string"
          }
        },
        "name": "string"
      }
    }
  ]
}
```

Character Resource

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mal_id|integer|false|none|MyAnimeList ID|
|url|string|false|none|MyAnimeList URL|
|images|[character_images](#schemacharacter_images)|false|none|none|
|name|string|false|none|Name|
|name_kanji|string \| null|false|none|Name|
|nicknames|[string]|false|none|Other Names|
|favorites|integer|false|none|Number of users who have favorited this entry|
|about|string \| null|false|none|Biography|
|anime|[object]|false|none|none|
|manga|[object]|false|none|none|
|voices|[object]|false|none|none|

<h2 id="tocS_character_manga">character_manga</h2>
<!-- backwards compatibility -->
<a id="schemacharacter_manga"></a>
<a id="schema_character_manga"></a>
<a id="tocScharacter_manga"></a>
<a id="tocscharacter_manga"></a>

```json
{
  "data": [
    {
      "role": "string",
      "manga": {
        "mal_id": 0,
        "url": "string",
        "images": {
          "jpg": {
            "image_url": "string",
            "small_image_url": "string",
            "large_image_url": "string"
          },
          "webp": {
            "image_url": "string",
            "small_image_url": "string",
            "large_image_url": "string"
          }
        },
        "title": "string"
      }
    }
  ]
}
```

Character casted in manga

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|false|none|none|

<h2 id="tocS_character">character</h2>
<!-- backwards compatibility -->
<a id="schemacharacter"></a>
<a id="schema_character"></a>
<a id="tocScharacter"></a>
<a id="tocscharacter"></a>

```json
{
  "mal_id": 0,
  "url": "string",
  "images": {
    "jpg": {
      "image_url": "string",
      "small_image_url": "string"
    },
    "webp": {
      "image_url": "string",
      "small_image_url": "string"
    }
  },
  "name": "string",
  "name_kanji": "string",
  "nicknames": [
    "string"
  ],
  "favorites": 0,
  "about": "string"
}
```

Character Resource

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mal_id|integer|false|none|MyAnimeList ID|
|url|string|false|none|MyAnimeList URL|
|images|[character_images](#schemacharacter_images)|false|none|none|
|name|string|false|none|Name|
|name_kanji|string \| null|false|none|Name|
|nicknames|[string]|false|none|Other Names|
|favorites|integer|false|none|Number of users who have favorited this entry|
|about|string \| null|false|none|Biography|

<h2 id="tocS_character_voice_actors">character_voice_actors</h2>
<!-- backwards compatibility -->
<a id="schemacharacter_voice_actors"></a>
<a id="schema_character_voice_actors"></a>
<a id="tocScharacter_voice_actors"></a>
<a id="tocscharacter_voice_actors"></a>

```json
{
  "data": [
    {
      "language": "string",
      "person": {
        "mal_id": 0,
        "url": "string",
        "images": {
          "jpg": {
            "image_url": "string"
          }
        },
        "name": "string"
      }
    }
  ]
}
```

Character voice actors

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|false|none|none|

<h2 id="tocS_clubs_search">clubs_search</h2>
<!-- backwards compatibility -->
<a id="schemaclubs_search"></a>
<a id="schema_clubs_search"></a>
<a id="tocSclubs_search"></a>
<a id="tocsclubs_search"></a>

```json
{
  "data": [
    {
      "mal_id": 0,
      "name": "string",
      "url": "string",
      "images": {
        "jpg": {
          "image_url": "string"
        }
      },
      "members": 0,
      "category": "actors & artists",
      "created": "string",
      "access": "public"
    }
  ],
  "pagination": {
    "last_visible_page": 0,
    "has_next_page": true
  }
}
```

Clubs Search Resource

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[club](#schemaclub)]|false|none|none|
|pagination|object|false|none|none|

<h2 id="tocS_club_relations">club_relations</h2>
<!-- backwards compatibility -->
<a id="schemaclub_relations"></a>
<a id="schema_club_relations"></a>
<a id="tocSclub_relations"></a>
<a id="tocsclub_relations"></a>

```json
{
  "data": {
    "anime": [
      {
        "mal_id": 0,
        "type": "string",
        "name": "string",
        "url": "string"
      }
    ],
    "manga": [
      {
        "mal_id": 0,
        "type": "string",
        "name": "string",
        "url": "string"
      }
    ],
    "characters": [
      {
        "mal_id": 0,
        "type": "string",
        "name": "string",
        "url": "string"
      }
    ]
  }
}
```

Club Relations

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|

<h2 id="tocS_club">club</h2>
<!-- backwards compatibility -->
<a id="schemaclub"></a>
<a id="schema_club"></a>
<a id="tocSclub"></a>
<a id="tocsclub"></a>

```json
{
  "mal_id": 0,
  "name": "string",
  "url": "string",
  "images": {
    "jpg": {
      "image_url": "string"
    }
  },
  "members": 0,
  "category": "actors & artists",
  "created": "string",
  "access": "public"
}
```

Club Resource

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mal_id|integer|false|none|MyAnimeList ID|
|name|string|false|none|Club name|
|url|string|false|none|Club URL|
|images|[common_images](#schemacommon_images)|false|none|none|
|members|integer|false|none|Number of club members|
|category|string|false|none|Club Category|
|created|string|false|none|Date Created ISO8601|
|access|string|false|none|Club access|

#### Enumerated Values

|Property|Value|
|---|---|
|category|actors & artists|
|category|anime|
|category|characters|
|category|cities & neighborhoods|
|category|companies|
|category|conventions|
|category|games|
|category|japan|
|category|manga|
|category|music|
|category|others|
|category|schools|
|access|public|
|access|private|
|access|secret|

<h2 id="tocS_club_staff">club_staff</h2>
<!-- backwards compatibility -->
<a id="schemaclub_staff"></a>
<a id="schema_club_staff"></a>
<a id="tocSclub_staff"></a>
<a id="tocsclub_staff"></a>

```json
{
  "data": [
    {
      "url": "string",
      "username": "string"
    }
  ]
}
```

Club Staff Resource

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|false|none|none|

<h2 id="tocS_trailer">trailer</h2>
<!-- backwards compatibility -->
<a id="schematrailer"></a>
<a id="schema_trailer"></a>
<a id="tocStrailer"></a>
<a id="tocstrailer"></a>

```json
{
  "youtube_id": "string",
  "url": "string",
  "embed_url": "string",
  "images": {
    "image_url": "string",
    "small_image_url": "string",
    "medium_image_url": "string",
    "large_image_url": "string",
    "maximum_image_url": "string"
  }
}
```

Youtube Details

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|youtube_id|string \| null|false|none|YouTube ID|
|url|string \| null|false|none|YouTube URL|
|embed_url|string \| null|false|none|Parsed Embed URL|
|images|object|false|none|none|

<h2 id="tocS_trailer_base">trailer_base</h2>
<!-- backwards compatibility -->
<a id="schematrailer_base"></a>
<a id="schema_trailer_base"></a>
<a id="tocStrailer_base"></a>
<a id="tocstrailer_base"></a>

```json
{
  "youtube_id": "string",
  "url": "string",
  "embed_url": "string"
}
```

Youtube Details

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|youtube_id|string \| null|false|none|YouTube ID|
|url|string \| null|false|none|YouTube URL|
|embed_url|string \| null|false|none|Parsed Embed URL|

<h2 id="tocS_trailer_images">trailer_images</h2>
<!-- backwards compatibility -->
<a id="schematrailer_images"></a>
<a id="schema_trailer_images"></a>
<a id="tocStrailer_images"></a>
<a id="tocstrailer_images"></a>

```json
{
  "images": {
    "image_url": "string",
    "small_image_url": "string",
    "medium_image_url": "string",
    "large_image_url": "string",
    "maximum_image_url": "string"
  }
}
```

Youtube Images

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|images|object|false|none|none|

<h2 id="tocS_daterange">daterange</h2>
<!-- backwards compatibility -->
<a id="schemadaterange"></a>
<a id="schema_daterange"></a>
<a id="tocSdaterange"></a>
<a id="tocsdaterange"></a>

```json
{
  "from": "string",
  "to": "string",
  "prop": {
    "from": {
      "day": 0,
      "month": 0,
      "year": 0
    },
    "to": {
      "day": 0,
      "month": 0,
      "year": 0
    },
    "string": "string"
  }
}
```

Date range

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|from|string \| null|false|none|Date ISO8601|
|to|string \| null|false|none|Date ISO8601|
|prop|object|false|none|Date Prop|

<h2 id="tocS_broadcast">broadcast</h2>
<!-- backwards compatibility -->
<a id="schemabroadcast"></a>
<a id="schema_broadcast"></a>
<a id="tocSbroadcast"></a>
<a id="tocsbroadcast"></a>

```json
{
  "day": "string",
  "time": "string",
  "timezone": "string",
  "string": "string"
}
```

Broadcast Details

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|day|string \| null|false|none|Day of the week|
|time|string \| null|false|none|Time in 24 hour format|
|timezone|string \| null|false|none|Timezone (Tz Database format https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)|
|string|string \| null|false|none|Raw parsed broadcast string|

<h2 id="tocS_mal_url">mal_url</h2>
<!-- backwards compatibility -->
<a id="schemamal_url"></a>
<a id="schema_mal_url"></a>
<a id="tocSmal_url"></a>
<a id="tocsmal_url"></a>

```json
{
  "mal_id": 0,
  "type": "string",
  "name": "string",
  "url": "string"
}
```

Parsed URL Data

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mal_id|integer|false|none|MyAnimeList ID|
|type|string|false|none|Type of resource|
|name|string|false|none|Resource Name/Title|
|url|string|false|none|MyAnimeList URL|

<h2 id="tocS_mal_url_2">mal_url_2</h2>
<!-- backwards compatibility -->
<a id="schemamal_url_2"></a>
<a id="schema_mal_url_2"></a>
<a id="tocSmal_url_2"></a>
<a id="tocsmal_url_2"></a>

```json
{
  "mal_id": 0,
  "type": "string",
  "title": "string",
  "url": "string"
}
```

Parsed URL Data

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mal_id|integer|false|none|MyAnimeList ID|
|type|string|false|none|Type of resource|
|title|string|false|none|Resource Name/Title|
|url|string|false|none|MyAnimeList URL|

<h2 id="tocS_entry_meta">entry_meta</h2>
<!-- backwards compatibility -->
<a id="schemaentry_meta"></a>
<a id="schema_entry_meta"></a>
<a id="tocSentry_meta"></a>
<a id="tocsentry_meta"></a>

```json
{
  "mal_id": 0,
  "url": "string",
  "image_url": "string",
  "name": "string"
}
```

Entry Meta data

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mal_id|integer|false|none|MyAnimeList ID|
|url|string|false|none|MyAnimeList URL|
|image_url|string|false|none|Image URL|
|name|string|false|none|Entry Name/Title|

<h2 id="tocS_relation">relation</h2>
<!-- backwards compatibility -->
<a id="schemarelation"></a>
<a id="schema_relation"></a>
<a id="tocSrelation"></a>
<a id="tocsrelation"></a>

```json
{
  "relation": "string",
  "entry": [
    {
      "mal_id": 0,
      "type": "string",
      "name": "string",
      "url": "string"
    }
  ]
}
```

Related resources

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|relation|string|false|none|Relation type|
|entry|[[mal_url](#schemamal_url)]|false|none|Related entries|

<h2 id="tocS_pagination">pagination</h2>
<!-- backwards compatibility -->
<a id="schemapagination"></a>
<a id="schema_pagination"></a>
<a id="tocSpagination"></a>
<a id="tocspagination"></a>

```json
{
  "pagination": {
    "last_visible_page": 0,
    "has_next_page": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pagination|object|false|none|none|

<h2 id="tocS_pagination_plus">pagination_plus</h2>
<!-- backwards compatibility -->
<a id="schemapagination_plus"></a>
<a id="schema_pagination_plus"></a>
<a id="tocSpagination_plus"></a>
<a id="tocspagination_plus"></a>

```json
{
  "pagination": {
    "last_visible_page": 0,
    "has_next_page": true,
    "current_page": 0,
    "items": {
      "count": 0,
      "total": 0,
      "per_page": 0
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pagination|object|false|none|none|

<h2 id="tocS_user_meta">user_meta</h2>
<!-- backwards compatibility -->
<a id="schemauser_meta"></a>
<a id="schema_user_meta"></a>
<a id="tocSuser_meta"></a>
<a id="tocsuser_meta"></a>

```json
{
  "username": "string",
  "url": "string",
  "images": {
    "jpg": {
      "image_url": "string"
    },
    "webp": {
      "image_url": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|username|string|false|none|MyAnimeList Username|
|url|string|false|none|MyAnimeList Profile URL|
|images|[user_images](#schemauser_images)|false|none|none|

<h2 id="tocS_user_by_id">user_by_id</h2>
<!-- backwards compatibility -->
<a id="schemauser_by_id"></a>
<a id="schema_user_by_id"></a>
<a id="tocSuser_by_id"></a>
<a id="tocsuser_by_id"></a>

```json
{
  "url": "string",
  "username": "string"
}
```

User Meta By ID

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|url|string|false|none|MyAnimeList URL|
|username|string|false|none|MyAnimeList Username|

<h2 id="tocS_user_images">user_images</h2>
<!-- backwards compatibility -->
<a id="schemauser_images"></a>
<a id="schema_user_images"></a>
<a id="tocSuser_images"></a>
<a id="tocsuser_images"></a>

```json
{
  "jpg": {
    "image_url": "string"
  },
  "webp": {
    "image_url": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jpg|object|false|none|Available images in JPG|
|webp|object|false|none|Available images in WEBP|

<h2 id="tocS_anime_meta">anime_meta</h2>
<!-- backwards compatibility -->
<a id="schemaanime_meta"></a>
<a id="schema_anime_meta"></a>
<a id="tocSanime_meta"></a>
<a id="tocsanime_meta"></a>

```json
{
  "mal_id": 0,
  "url": "string",
  "images": {
    "jpg": {
      "image_url": "string",
      "small_image_url": "string",
      "large_image_url": "string"
    },
    "webp": {
      "image_url": "string",
      "small_image_url": "string",
      "large_image_url": "string"
    }
  },
  "title": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mal_id|integer|false|none|MyAnimeList ID|
|url|string|false|none|MyAnimeList URL|
|images|[anime_images](#schemaanime_images)|false|none|none|
|title|string|false|none|Entry title|

<h2 id="tocS_manga_meta">manga_meta</h2>
<!-- backwards compatibility -->
<a id="schemamanga_meta"></a>
<a id="schema_manga_meta"></a>
<a id="tocSmanga_meta"></a>
<a id="tocsmanga_meta"></a>

```json
{
  "mal_id": 0,
  "url": "string",
  "images": {
    "jpg": {
      "image_url": "string",
      "small_image_url": "string",
      "large_image_url": "string"
    },
    "webp": {
      "image_url": "string",
      "small_image_url": "string",
      "large_image_url": "string"
    }
  },
  "title": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mal_id|integer|false|none|MyAnimeList ID|
|url|string|false|none|MyAnimeList URL|
|images|[manga_images](#schemamanga_images)|false|none|none|
|title|string|false|none|Entry title|

<h2 id="tocS_character_meta">character_meta</h2>
<!-- backwards compatibility -->
<a id="schemacharacter_meta"></a>
<a id="schema_character_meta"></a>
<a id="tocScharacter_meta"></a>
<a id="tocscharacter_meta"></a>

```json
{
  "mal_id": 0,
  "url": "string",
  "images": {
    "jpg": {
      "image_url": "string",
      "small_image_url": "string"
    },
    "webp": {
      "image_url": "string",
      "small_image_url": "string"
    }
  },
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mal_id|integer|false|none|MyAnimeList ID|
|url|string|false|none|MyAnimeList URL|
|images|[character_images](#schemacharacter_images)|false|none|none|
|name|string|false|none|Entry name|

<h2 id="tocS_person_meta">person_meta</h2>
<!-- backwards compatibility -->
<a id="schemaperson_meta"></a>
<a id="schema_person_meta"></a>
<a id="tocSperson_meta"></a>
<a id="tocsperson_meta"></a>

```json
{
  "mal_id": 0,
  "url": "string",
  "images": {
    "jpg": {
      "image_url": "string"
    }
  },
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mal_id|integer|false|none|MyAnimeList ID|
|url|string|false|none|MyAnimeList URL|
|images|[people_images](#schemapeople_images)|false|none|none|
|name|string|false|none|Entry name|

<h2 id="tocS_anime_images">anime_images</h2>
<!-- backwards compatibility -->
<a id="schemaanime_images"></a>
<a id="schema_anime_images"></a>
<a id="tocSanime_images"></a>
<a id="tocsanime_images"></a>

```json
{
  "jpg": {
    "image_url": "string",
    "small_image_url": "string",
    "large_image_url": "string"
  },
  "webp": {
    "image_url": "string",
    "small_image_url": "string",
    "large_image_url": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jpg|object|false|none|Available images in JPG|
|webp|object|false|none|Available images in WEBP|

<h2 id="tocS_manga_images">manga_images</h2>
<!-- backwards compatibility -->
<a id="schemamanga_images"></a>
<a id="schema_manga_images"></a>
<a id="tocSmanga_images"></a>
<a id="tocsmanga_images"></a>

```json
{
  "jpg": {
    "image_url": "string",
    "small_image_url": "string",
    "large_image_url": "string"
  },
  "webp": {
    "image_url": "string",
    "small_image_url": "string",
    "large_image_url": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jpg|object|false|none|Available images in JPG|
|webp|object|false|none|Available images in WEBP|

<h2 id="tocS_character_images">character_images</h2>
<!-- backwards compatibility -->
<a id="schemacharacter_images"></a>
<a id="schema_character_images"></a>
<a id="tocScharacter_images"></a>
<a id="tocscharacter_images"></a>

```json
{
  "jpg": {
    "image_url": "string",
    "small_image_url": "string"
  },
  "webp": {
    "image_url": "string",
    "small_image_url": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jpg|object|false|none|Available images in JPG|
|webp|object|false|none|Available images in WEBP|

<h2 id="tocS_people_images">people_images</h2>
<!-- backwards compatibility -->
<a id="schemapeople_images"></a>
<a id="schema_people_images"></a>
<a id="tocSpeople_images"></a>
<a id="tocspeople_images"></a>

```json
{
  "jpg": {
    "image_url": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jpg|object|false|none|Available images in JPG|

<h2 id="tocS_common_images">common_images</h2>
<!-- backwards compatibility -->
<a id="schemacommon_images"></a>
<a id="schema_common_images"></a>
<a id="tocScommon_images"></a>
<a id="tocscommon_images"></a>

```json
{
  "jpg": {
    "image_url": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jpg|object|false|none|Available images in JPG|

<h2 id="tocS_title">title</h2>
<!-- backwards compatibility -->
<a id="schematitle"></a>
<a id="schema_title"></a>
<a id="tocStitle"></a>
<a id="tocstitle"></a>

```json
{
  "type": "string",
  "title": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|Title type|
|title|string|false|none|Title value|

<h2 id="tocS_external_links">external_links</h2>
<!-- backwards compatibility -->
<a id="schemaexternal_links"></a>
<a id="schema_external_links"></a>
<a id="tocSexternal_links"></a>
<a id="tocsexternal_links"></a>

```json
{
  "data": [
    {
      "name": "string",
      "url": "string"
    }
  ]
}
```

External links

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|false|none|none|

<h2 id="tocS_forum">forum</h2>
<!-- backwards compatibility -->
<a id="schemaforum"></a>
<a id="schema_forum"></a>
<a id="tocSforum"></a>
<a id="tocsforum"></a>

```json
{
  "data": [
    {
      "mal_id": 0,
      "url": "string",
      "title": "string",
      "date": "string",
      "author_username": "string",
      "author_url": "string",
      "comments": 0,
      "last_comment": {
        "url": "string",
        "author_username": "string",
        "author_url": "string",
        "date": "string"
      }
    }
  ]
}
```

Forum Resource

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|false|none|none|

<h2 id="tocS_genres">genres</h2>
<!-- backwards compatibility -->
<a id="schemagenres"></a>
<a id="schema_genres"></a>
<a id="tocSgenres"></a>
<a id="tocsgenres"></a>

```json
{
  "data": [
    {
      "mal_id": 0,
      "name": "string",
      "url": "string",
      "count": 0
    }
  ]
}
```

Genres Collection Resource

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[genre](#schemagenre)]|false|none|none|

<h2 id="tocS_genre">genre</h2>
<!-- backwards compatibility -->
<a id="schemagenre"></a>
<a id="schema_genre"></a>
<a id="tocSgenre"></a>
<a id="tocsgenre"></a>

```json
{
  "mal_id": 0,
  "name": "string",
  "url": "string",
  "count": 0
}
```

Genre Resource

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mal_id|integer|false|none|MyAnimeList ID|
|name|string|false|none|Genre Name|
|url|string|false|none|MyAnimeList URL|
|count|integer|false|none|Genre's entry count|

<h2 id="tocS_magazines">magazines</h2>
<!-- backwards compatibility -->
<a id="schemamagazines"></a>
<a id="schema_magazines"></a>
<a id="tocSmagazines"></a>
<a id="tocsmagazines"></a>

```json
{
  "data": [
    {
      "mal_id": 0,
      "name": "string",
      "url": "string",
      "count": 0
    }
  ],
  "pagination": {
    "last_visible_page": 0,
    "has_next_page": true
  }
}
```

Magazine Collection Resource

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[magazine](#schemamagazine)]|false|none|none|
|pagination|object|false|none|none|

<h2 id="tocS_magazine">magazine</h2>
<!-- backwards compatibility -->
<a id="schemamagazine"></a>
<a id="schema_magazine"></a>
<a id="tocSmagazine"></a>
<a id="tocsmagazine"></a>

```json
{
  "mal_id": 0,
  "name": "string",
  "url": "string",
  "count": 0
}
```

Magazine Resource

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mal_id|integer|false|none|MyAnimeList ID|
|name|string|false|none|Magazine Name|
|url|string|false|none|MyAnimeList URL|
|count|integer|false|none|Magazine's manga count|

<h2 id="tocS_manga_characters">manga_characters</h2>
<!-- backwards compatibility -->
<a id="schemamanga_characters"></a>
<a id="schema_manga_characters"></a>
<a id="tocSmanga_characters"></a>
<a id="tocsmanga_characters"></a>

```json
{
  "data": [
    {
      "character": {
        "mal_id": 0,
        "url": "string",
        "images": {
          "jpg": {
            "image_url": "string",
            "small_image_url": "string"
          },
          "webp": {
            "image_url": "string",
            "small_image_url": "string"
          }
        },
        "name": "string"
      },
      "role": "string"
    }
  ]
}
```

Manga Characters Resource

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|false|none|none|

<h2 id="tocS_manga_search">manga_search</h2>
<!-- backwards compatibility -->
<a id="schemamanga_search"></a>
<a id="schema_manga_search"></a>
<a id="tocSmanga_search"></a>
<a id="tocsmanga_search"></a>

```json
{
  "data": [
    {
      "mal_id": 0,
      "url": "string",
      "images": {
        "jpg": {
          "image_url": "string",
          "small_image_url": "string",
          "large_image_url": "string"
        },
        "webp": {
          "image_url": "string",
          "small_image_url": "string",
          "large_image_url": "string"
        }
      },
      "approved": true,
      "titles": [
        {
          "type": "string",
          "title": "string"
        }
      ],
      "title": "string",
      "title_english": "string",
      "title_japanese": "string",
      "type": "Manga",
      "chapters": 0,
      "volumes": 0,
      "status": "Finished",
      "publishing": true,
      "published": {
        "from": "string",
        "to": "string",
        "prop": {
          "from": {
            "day": 0,
            "month": 0,
            "year": 0
          },
          "to": {
            "day": 0,
            "month": 0,
            "year": 0
          },
          "string": "string"
        }
      },
      "score": 0,
      "scored_by": 0,
      "rank": 0,
      "popularity": 0,
      "members": 0,
      "favorites": 0,
      "synopsis": "string",
      "background": "string",
      "authors": [
        {
          "mal_id": 0,
          "type": "string",
          "name": "string",
          "url": "string"
        }
      ],
      "serializations": [
        {
          "mal_id": 0,
          "type": "string",
          "name": "string",
          "url": "string"
        }
      ],
      "genres": [
        {
          "mal_id": 0,
          "type": "string",
          "name": "string",
          "url": "string"
        }
      ],
      "explicit_genres": [
        {
          "mal_id": 0,
          "type": "string",
          "name": "string",
          "url": "string"
        }
      ],
      "themes": [
        {
          "mal_id": 0,
          "type": "string",
          "name": "string",
          "url": "string"
        }
      ],
      "demographics": [
        {
          "mal_id": 0,
          "type": "string",
          "name": "string",
          "url": "string"
        }
      ]
    }
  ],
  "pagination": {
    "last_visible_page": 0,
    "has_next_page": true,
    "current_page": 0,
    "items": {
      "count": 0,
      "total": 0,
      "per_page": 0
    }
  }
}
```

Manga Search Resource

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[manga](#schemamanga)]|false|none|none|
|pagination|object|false|none|none|

<h2 id="tocS_manga_full">manga_full</h2>
<!-- backwards compatibility -->
<a id="schemamanga_full"></a>
<a id="schema_manga_full"></a>
<a id="tocSmanga_full"></a>
<a id="tocsmanga_full"></a>

```json
{
  "mal_id": 0,
  "url": "string",
  "images": {
    "jpg": {
      "image_url": "string",
      "small_image_url": "string",
      "large_image_url": "string"
    },
    "webp": {
      "image_url": "string",
      "small_image_url": "string",
      "large_image_url": "string"
    }
  },
  "approved": true,
  "titles": [
    {
      "type": "string",
      "title": "string"
    }
  ],
  "title": "string",
  "title_english": "string",
  "title_japanese": "string",
  "title_synonyms": [
    "string"
  ],
  "type": "Manga",
  "chapters": 0,
  "volumes": 0,
  "status": "Finished",
  "publishing": true,
  "published": {
    "from": "string",
    "to": "string",
    "prop": {
      "from": {
        "day": 0,
        "month": 0,
        "year": 0
      },
      "to": {
        "day": 0,
        "month": 0,
        "year": 0
      },
      "string": "string"
    }
  },
  "score": 0,
  "scored_by": 0,
  "rank": 0,
  "popularity": 0,
  "members": 0,
  "favorites": 0,
  "synopsis": "string",
  "background": "string",
  "authors": [
    {
      "mal_id": 0,
      "type": "string",
      "name": "string",
      "url": "string"
    }
  ],
  "serializations": [
    {
      "mal_id": 0,
      "type": "string",
      "name": "string",
      "url": "string"
    }
  ],
  "genres": [
    {
      "mal_id": 0,
      "type": "string",
      "name": "string",
      "url": "string"
    }
  ],
  "explicit_genres": [
    {
      "mal_id": 0,
      "type": "string",
      "name": "string",
      "url": "string"
    }
  ],
  "themes": [
    {
      "mal_id": 0,
      "type": "string",
      "name": "string",
      "url": "string"
    }
  ],
  "demographics": [
    {
      "mal_id": 0,
      "type": "string",
      "name": "string",
      "url": "string"
    }
  ],
  "relations": [
    {
      "relation": "string",
      "entry": [
        {
          "mal_id": 0,
          "type": "string",
          "name": "string",
          "url": "string"
        }
      ]
    }
  ],
  "external": [
    {
      "name": "string",
      "url": "string"
    }
  ]
}
```

Manga Resource

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mal_id|integer|false|none|MyAnimeList ID|
|url|string|false|none|MyAnimeList URL|
|images|[manga_images](#schemamanga_images)|false|none|none|
|approved|boolean|false|none|Whether the entry is pending approval on MAL or not|
|titles|[[title](#schematitle)]|false|none|All Titles|
|title|string|false|none|**Deprecated.** Title|
|title_english|string \| null|false|none|**Deprecated.** English Title|
|title_japanese|string \| null|false|none|**Deprecated.** Japanese Title|
|title_synonyms|[string]|false|none|**Deprecated.** Other Titles|
|type|string \| null|false|none|Manga Type|
|chapters|integer \| null|false|none|Chapter count|
|volumes|integer \| null|false|none|Volume count|
|status|string|false|none|Publishing status|
|publishing|boolean|false|none|Publishing boolean|
|published|[daterange](#schemadaterange)|false|none|Date range|
|score|number(float) \| null|false|none|Score|
|scored_by|integer \| null|false|none|Number of users|
|rank|integer \| null|false|none|Ranking|
|popularity|integer \| null|false|none|Popularity|
|members|integer \| null|false|none|Number of users who have added this entry to their list|
|favorites|integer \| null|false|none|Number of users who have favorited this entry|
|synopsis|string \| null|false|none|Synopsis|
|background|string \| null|false|none|Background|
|authors|[[mal_url](#schemamal_url)]|false|none|none|
|serializations|[[mal_url](#schemamal_url)]|false|none|none|
|genres|[[mal_url](#schemamal_url)]|false|none|none|
|explicit_genres|[[mal_url](#schemamal_url)]|false|none|none|
|themes|[[mal_url](#schemamal_url)]|false|none|none|
|demographics|[[mal_url](#schemamal_url)]|false|none|none|
|relations|[object]|false|none|none|
|external|[object]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|Manga|
|type|Novel|
|type|Light Novel|
|type|One-shot|
|type|Doujinshi|
|type|Manhua|
|type|Manhwa|
|type|OEL|
|status|Finished|
|status|Publishing|
|status|On Hiatus|
|status|Discontinued|
|status|Not yet published|

<h2 id="tocS_manga">manga</h2>
<!-- backwards compatibility -->
<a id="schemamanga"></a>
<a id="schema_manga"></a>
<a id="tocSmanga"></a>
<a id="tocsmanga"></a>

```json
{
  "mal_id": 0,
  "url": "string",
  "images": {
    "jpg": {
      "image_url": "string",
      "small_image_url": "string",
      "large_image_url": "string"
    },
    "webp": {
      "image_url": "string",
      "small_image_url": "string",
      "large_image_url": "string"
    }
  },
  "approved": true,
  "titles": [
    {
      "type": "string",
      "title": "string"
    }
  ],
  "title": "string",
  "title_english": "string",
  "title_japanese": "string",
  "type": "Manga",
  "chapters": 0,
  "volumes": 0,
  "status": "Finished",
  "publishing": true,
  "published": {
    "from": "string",
    "to": "string",
    "prop": {
      "from": {
        "day": 0,
        "month": 0,
        "year": 0
      },
      "to": {
        "day": 0,
        "month": 0,
        "year": 0
      },
      "string": "string"
    }
  },
  "score": 0,
  "scored_by": 0,
  "rank": 0,
  "popularity": 0,
  "members": 0,
  "favorites": 0,
  "synopsis": "string",
  "background": "string",
  "authors": [
    {
      "mal_id": 0,
      "type": "string",
      "name": "string",
      "url": "string"
    }
  ],
  "serializations": [
    {
      "mal_id": 0,
      "type": "string",
      "name": "string",
      "url": "string"
    }
  ],
  "genres": [
    {
      "mal_id": 0,
      "type": "string",
      "name": "string",
      "url": "string"
    }
  ],
  "explicit_genres": [
    {
      "mal_id": 0,
      "type": "string",
      "name": "string",
      "url": "string"
    }
  ],
  "themes": [
    {
      "mal_id": 0,
      "type": "string",
      "name": "string",
      "url": "string"
    }
  ],
  "demographics": [
    {
      "mal_id": 0,
      "type": "string",
      "name": "string",
      "url": "string"
    }
  ]
}
```

Manga Resource

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mal_id|integer|false|none|MyAnimeList ID|
|url|string|false|none|MyAnimeList URL|
|images|[manga_images](#schemamanga_images)|false|none|none|
|approved|boolean|false|none|Whether the entry is pending approval on MAL or not|
|titles|[[title](#schematitle)]|false|none|All Titles|
|title|string|false|none|**Deprecated.** Title|
|title_english|string \| null|false|none|**Deprecated.** English Title|
|title_japanese|string \| null|false|none|**Deprecated.** Japanese Title|
|type|string \| null|false|none|Manga Type|
|chapters|integer \| null|false|none|Chapter count|
|volumes|integer \| null|false|none|Volume count|
|status|string|false|none|Publishing status|
|publishing|boolean|false|none|Publishing boolean|
|published|[daterange](#schemadaterange)|false|none|Date range|
|score|number(float) \| null|false|none|Score|
|scored_by|integer \| null|false|none|Number of users|
|rank|integer \| null|false|none|Ranking|
|popularity|integer \| null|false|none|Popularity|
|members|integer \| null|false|none|Number of users who have added this entry to their list|
|favorites|integer \| null|false|none|Number of users who have favorited this entry|
|synopsis|string \| null|false|none|Synopsis|
|background|string \| null|false|none|Background|
|authors|[[mal_url](#schemamal_url)]|false|none|none|
|serializations|[[mal_url](#schemamal_url)]|false|none|none|
|genres|[[mal_url](#schemamal_url)]|false|none|none|
|explicit_genres|[[mal_url](#schemamal_url)]|false|none|none|
|themes|[[mal_url](#schemamal_url)]|false|none|none|
|demographics|[[mal_url](#schemamal_url)]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|Manga|
|type|Novel|
|type|Light Novel|
|type|One-shot|
|type|Doujinshi|
|type|Manhua|
|type|Manhwa|
|type|OEL|
|status|Finished|
|status|Publishing|
|status|On Hiatus|
|status|Discontinued|
|status|Not yet published|

<h2 id="tocS_manga_statistics">manga_statistics</h2>
<!-- backwards compatibility -->
<a id="schemamanga_statistics"></a>
<a id="schema_manga_statistics"></a>
<a id="tocSmanga_statistics"></a>
<a id="tocsmanga_statistics"></a>

```json
{
  "data": {
    "reading": 0,
    "completed": 0,
    "on_hold": 0,
    "dropped": 0,
    "plan_to_read": 0,
    "total": 0,
    "scores": [
      {
        "score": 0,
        "votes": 0,
        "percentage": 0
      }
    ]
  }
}
```

Manga Statistics Resource

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|

<h2 id="tocS_moreinfo">moreinfo</h2>
<!-- backwards compatibility -->
<a id="schemamoreinfo"></a>
<a id="schema_moreinfo"></a>
<a id="tocSmoreinfo"></a>
<a id="tocsmoreinfo"></a>

```json
{
  "data": {
    "moreinfo": "string"
  }
}
```

More Info Resource

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|

<h2 id="tocS_news">news</h2>
<!-- backwards compatibility -->
<a id="schemanews"></a>
<a id="schema_news"></a>
<a id="tocSnews"></a>
<a id="tocsnews"></a>

```json
{
  "data": [
    {
      "mal_id": 0,
      "url": "string",
      "title": "string",
      "date": "string",
      "author_username": "string",
      "author_url": "string",
      "forum_url": "string",
      "images": {
        "jpg": {
          "image_url": "string"
        }
      },
      "comments": 0,
      "excerpt": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|false|none|none|

<h2 id="tocS_person_anime">person_anime</h2>
<!-- backwards compatibility -->
<a id="schemaperson_anime"></a>
<a id="schema_person_anime"></a>
<a id="tocSperson_anime"></a>
<a id="tocsperson_anime"></a>

```json
{
  "data": [
    {
      "position": "string",
      "anime": {
        "mal_id": 0,
        "url": "string",
        "images": {
          "jpg": {
            "image_url": "string",
            "small_image_url": "string",
            "large_image_url": "string"
          },
          "webp": {
            "image_url": "string",
            "small_image_url": "string",
            "large_image_url": "string"
          }
        },
        "title": "string"
      }
    }
  ]
}
```

Person anime staff positions

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|false|none|none|

<h2 id="tocS_people_search">people_search</h2>
<!-- backwards compatibility -->
<a id="schemapeople_search"></a>
<a id="schema_people_search"></a>
<a id="tocSpeople_search"></a>
<a id="tocspeople_search"></a>

```json
{
  "data": [
    {
      "mal_id": 0,
      "url": "string",
      "website_url": "string",
      "images": {
        "jpg": {
          "image_url": "string"
        }
      },
      "name": "string",
      "given_name": "string",
      "family_name": "string",
      "alternate_names": [
        "string"
      ],
      "birthday": "string",
      "favorites": 0,
      "about": "string"
    }
  ],
  "pagination": {
    "last_visible_page": 0,
    "has_next_page": true,
    "current_page": 0,
    "items": {
      "count": 0,
      "total": 0,
      "per_page": 0
    }
  }
}
```

People Search

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|false|none|none|
|pagination|object|false|none|none|

<h2 id="tocS_person_full">person_full</h2>
<!-- backwards compatibility -->
<a id="schemaperson_full"></a>
<a id="schema_person_full"></a>
<a id="tocSperson_full"></a>
<a id="tocsperson_full"></a>

```json
{
  "mal_id": 0,
  "url": "string",
  "website_url": "string",
  "images": {
    "jpg": {
      "image_url": "string"
    }
  },
  "name": "string",
  "given_name": "string",
  "family_name": "string",
  "alternate_names": [
    "string"
  ],
  "birthday": "string",
  "favorites": 0,
  "about": "string",
  "anime": [
    {
      "position": "string",
      "anime": {
        "mal_id": 0,
        "url": "string",
        "images": {
          "jpg": {
            "image_url": "string",
            "small_image_url": "string",
            "large_image_url": "string"
          },
          "webp": {
            "image_url": "string",
            "small_image_url": "string",
            "large_image_url": "string"
          }
        },
        "title": "string"
      }
    }
  ],
  "manga": [
    {
      "position": "string",
      "manga": {
        "mal_id": 0,
        "url": "string",
        "images": {
          "jpg": {
            "image_url": "string",
            "small_image_url": "string",
            "large_image_url": "string"
          },
          "webp": {
            "image_url": "string",
            "small_image_url": "string",
            "large_image_url": "string"
          }
        },
        "title": "string"
      }
    }
  ],
  "voices": [
    {
      "role": "string",
      "anime": {
        "mal_id": 0,
        "url": "string",
        "images": {
          "jpg": {
            "image_url": "string",
            "small_image_url": "string",
            "large_image_url": "string"
          },
          "webp": {
            "image_url": "string",
            "small_image_url": "string",
            "large_image_url": "string"
          }
        },
        "title": "string"
      },
      "character": {
        "mal_id": 0,
        "url": "string",
        "images": {
          "jpg": {
            "image_url": "string",
            "small_image_url": "string"
          },
          "webp": {
            "image_url": "string",
            "small_image_url": "string"
          }
        },
        "name": "string"
      }
    }
  ]
}
```

Person Resource

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mal_id|integer|false|none|MyAnimeList ID|
|url|string|false|none|MyAnimeList URL|
|website_url|string \| null|false|none|Person's website URL|
|images|[people_images](#schemapeople_images)|false|none|none|
|name|string|false|none|Name|
|given_name|string \| null|false|none|Given Name|
|family_name|string \| null|false|none|Family Name|
|alternate_names|[string]|false|none|Other Names|
|birthday|string \| null|false|none|Birthday Date ISO8601|
|favorites|integer|false|none|Number of users who have favorited this entry|
|about|string \| null|false|none|Biography|
|anime|[object]|false|none|none|
|manga|[object]|false|none|none|
|voices|[object]|false|none|none|

<h2 id="tocS_person_manga">person_manga</h2>
<!-- backwards compatibility -->
<a id="schemaperson_manga"></a>
<a id="schema_person_manga"></a>
<a id="tocSperson_manga"></a>
<a id="tocsperson_manga"></a>

```json
{
  "data": [
    {
      "position": "string",
      "manga": {
        "mal_id": 0,
        "url": "string",
        "images": {
          "jpg": {
            "image_url": "string",
            "small_image_url": "string",
            "large_image_url": "string"
          },
          "webp": {
            "image_url": "string",
            "small_image_url": "string",
            "large_image_url": "string"
          }
        },
        "title": "string"
      }
    }
  ]
}
```

Person's mangaography

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|false|none|none|

<h2 id="tocS_person">person</h2>
<!-- backwards compatibility -->
<a id="schemaperson"></a>
<a id="schema_person"></a>
<a id="tocSperson"></a>
<a id="tocsperson"></a>

```json
{
  "mal_id": 0,
  "url": "string",
  "website_url": "string",
  "images": {
    "jpg": {
      "image_url": "string"
    }
  },
  "name": "string",
  "given_name": "string",
  "family_name": "string",
  "alternate_names": [
    "string"
  ],
  "birthday": "string",
  "favorites": 0,
  "about": "string"
}
```

Person Resource

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mal_id|integer|false|none|MyAnimeList ID|
|url|string|false|none|MyAnimeList URL|
|website_url|string \| null|false|none|Person's website URL|
|images|[people_images](#schemapeople_images)|false|none|none|
|name|string|false|none|Name|
|given_name|string \| null|false|none|Given Name|
|family_name|string \| null|false|none|Family Name|
|alternate_names|[string]|false|none|Other Names|
|birthday|string \| null|false|none|Birthday Date ISO8601|
|favorites|integer|false|none|Number of users who have favorited this entry|
|about|string \| null|false|none|Biography|

<h2 id="tocS_person_voice_acting_roles">person_voice_acting_roles</h2>
<!-- backwards compatibility -->
<a id="schemaperson_voice_acting_roles"></a>
<a id="schema_person_voice_acting_roles"></a>
<a id="tocSperson_voice_acting_roles"></a>
<a id="tocsperson_voice_acting_roles"></a>

```json
{
  "data": [
    {
      "role": "string",
      "anime": {
        "mal_id": 0,
        "url": "string",
        "images": {
          "jpg": {
            "image_url": "string",
            "small_image_url": "string",
            "large_image_url": "string"
          },
          "webp": {
            "image_url": "string",
            "small_image_url": "string",
            "large_image_url": "string"
          }
        },
        "title": "string"
      },
      "character": {
        "mal_id": 0,
        "url": "string",
        "images": {
          "jpg": {
            "image_url": "string",
            "small_image_url": "string"
          },
          "webp": {
            "image_url": "string",
            "small_image_url": "string"
          }
        },
        "name": "string"
      }
    }
  ]
}
```

Person's voice acting roles

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|false|none|none|

<h2 id="tocS_pictures">pictures</h2>
<!-- backwards compatibility -->
<a id="schemapictures"></a>
<a id="schema_pictures"></a>
<a id="tocSpictures"></a>
<a id="tocspictures"></a>

```json
{
  "data": [
    {
      "images": {
        "jpg": {
          "image_url": "string",
          "small_image_url": "string",
          "large_image_url": "string"
        },
        "webp": {
          "image_url": "string",
          "small_image_url": "string",
          "large_image_url": "string"
        }
      }
    }
  ]
}
```

Pictures Resource

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|false|none|none|

<h2 id="tocS_pictures_variants">pictures_variants</h2>
<!-- backwards compatibility -->
<a id="schemapictures_variants"></a>
<a id="schema_pictures_variants"></a>
<a id="tocSpictures_variants"></a>
<a id="tocspictures_variants"></a>

```json
{
  "data": [
    {
      "images": {
        "jpg": {
          "image_url": "string"
        }
      }
    }
  ]
}
```

Pictures Resource

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|false|none|none|

<h2 id="tocS_producers">producers</h2>
<!-- backwards compatibility -->
<a id="schemaproducers"></a>
<a id="schema_producers"></a>
<a id="tocSproducers"></a>
<a id="tocsproducers"></a>

```json
{
  "data": [
    {
      "mal_id": 0,
      "url": "string",
      "titles": [
        {
          "type": "string",
          "title": "string"
        }
      ],
      "images": {
        "jpg": {
          "image_url": "string"
        }
      },
      "favorites": 0,
      "count": 0,
      "established": "string",
      "about": "string"
    }
  ],
  "pagination": {
    "last_visible_page": 0,
    "has_next_page": true
  }
}
```

Producers Collection Resource

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[producer](#schemaproducer)]|false|none|none|
|pagination|object|false|none|none|

<h2 id="tocS_producer_full">producer_full</h2>
<!-- backwards compatibility -->
<a id="schemaproducer_full"></a>
<a id="schema_producer_full"></a>
<a id="tocSproducer_full"></a>
<a id="tocsproducer_full"></a>

```json
{
  "mal_id": 0,
  "url": "string",
  "titles": [
    {
      "type": "string",
      "title": "string"
    }
  ],
  "images": {
    "jpg": {
      "image_url": "string"
    }
  },
  "favorites": 0,
  "count": 0,
  "established": "string",
  "about": "string",
  "external": [
    {
      "name": "string",
      "url": "string"
    }
  ]
}
```

Producers Resource

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mal_id|integer|false|none|MyAnimeList ID|
|url|string|false|none|MyAnimeList URL|
|titles|[[title](#schematitle)]|false|none|All titles|
|images|[common_images](#schemacommon_images)|false|none|none|
|favorites|integer|false|none|Producers's member favorites count|
|count|integer|false|none|Producers's anime count|
|established|string \| null|false|none|Established Date ISO8601|
|about|string \| null|false|none|About the Producer|
|external|[object]|false|none|none|

<h2 id="tocS_producer">producer</h2>
<!-- backwards compatibility -->
<a id="schemaproducer"></a>
<a id="schema_producer"></a>
<a id="tocSproducer"></a>
<a id="tocsproducer"></a>

```json
{
  "mal_id": 0,
  "url": "string",
  "titles": [
    {
      "type": "string",
      "title": "string"
    }
  ],
  "images": {
    "jpg": {
      "image_url": "string"
    }
  },
  "favorites": 0,
  "count": 0,
  "established": "string",
  "about": "string"
}
```

Producers Resource

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mal_id|integer|false|none|MyAnimeList ID|
|url|string|false|none|MyAnimeList URL|
|titles|[[title](#schematitle)]|false|none|All titles|
|images|[common_images](#schemacommon_images)|false|none|none|
|favorites|integer|false|none|Producers's member favorites count|
|count|integer|false|none|Producers's anime count|
|established|string \| null|false|none|Established Date ISO8601|
|about|string \| null|false|none|About the Producer|

<h2 id="tocS_user_about">user_about</h2>
<!-- backwards compatibility -->
<a id="schemauser_about"></a>
<a id="schema_user_about"></a>
<a id="tocSuser_about"></a>
<a id="tocsuser_about"></a>

```json
{
  "data": [
    {
      "about": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|false|none|none|

<h2 id="tocS_user_favorites">user_favorites</h2>
<!-- backwards compatibility -->
<a id="schemauser_favorites"></a>
<a id="schema_user_favorites"></a>
<a id="tocSuser_favorites"></a>
<a id="tocsuser_favorites"></a>

```json
{
  "anime": [
    {
      "type": "string",
      "start_year": 0,
      "mal_id": 0,
      "url": "string",
      "images": {
        "jpg": {
          "image_url": "string",
          "small_image_url": "string",
          "large_image_url": "string"
        },
        "webp": {
          "image_url": "string",
          "small_image_url": "string",
          "large_image_url": "string"
        }
      },
      "title": "string"
    }
  ],
  "manga": [
    {
      "type": "string",
      "start_year": 0,
      "mal_id": 0,
      "url": "string",
      "images": {
        "jpg": {
          "image_url": "string",
          "small_image_url": "string",
          "large_image_url": "string"
        },
        "webp": {
          "image_url": "string",
          "small_image_url": "string",
          "large_image_url": "string"
        }
      },
      "title": "string"
    }
  ],
  "characters": [
    {
      "mal_id": 0,
      "url": "string",
      "images": {
        "jpg": {
          "image_url": "string",
          "small_image_url": "string"
        },
        "webp": {
          "image_url": "string",
          "small_image_url": "string"
        }
      },
      "name": "string",
      "type": "string",
      "title": "string"
    }
  ],
  "people": [
    {
      "mal_id": 0,
      "url": "string",
      "images": {
        "jpg": {
          "image_url": "string",
          "small_image_url": "string"
        },
        "webp": {
          "image_url": "string",
          "small_image_url": "string"
        }
      },
      "name": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|anime|[object]|false|none|Favorite Anime|
|manga|[object]|false|none|Favorite Manga|
|characters|[object]|false|none|Favorite Characters|
|people|[[character_meta](#schemacharacter_meta)]|false|none|Favorite People|

<h2 id="tocS_user_profile_full">user_profile_full</h2>
<!-- backwards compatibility -->
<a id="schemauser_profile_full"></a>
<a id="schema_user_profile_full"></a>
<a id="tocSuser_profile_full"></a>
<a id="tocsuser_profile_full"></a>

```json
{
  "mal_id": 0,
  "username": "string",
  "url": "string",
  "images": {
    "jpg": {
      "image_url": "string"
    },
    "webp": {
      "image_url": "string"
    }
  },
  "last_online": "string",
  "gender": "string",
  "birthday": "string",
  "location": "string",
  "joined": "string",
  "statistics": {
    "anime": {
      "days_watched": 0,
      "mean_score": 0,
      "watching": 0,
      "completed": 0,
      "on_hold": 0,
      "dropped": 0,
      "plan_to_watch": 0,
      "total_entries": 0,
      "rewatched": 0,
      "episodes_watched": 0
    },
    "manga": {
      "days_read": 0,
      "mean_score": 0,
      "reading": 0,
      "completed": 0,
      "on_hold": 0,
      "dropped": 0,
      "plan_to_read": 0,
      "total_entries": 0,
      "reread": 0,
      "chapters_read": 0,
      "volumes_read": 0
    }
  },
  "external": [
    {
      "name": "string",
      "url": "string"
    }
  ]
}
```

Transform the resource into an array.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mal_id|integer \| null|false|none|MyAnimeList ID|
|username|string|false|none|MyAnimeList Username|
|url|string|false|none|MyAnimeList URL|
|images|[user_images](#schemauser_images)|false|none|none|
|last_online|string \| null|false|none|Last Online Date ISO8601|
|gender|string \| null|false|none|User Gender|
|birthday|string \| null|false|none|Birthday Date ISO8601|
|location|string \| null|false|none|Location|
|joined|string \| null|false|none|Joined Date ISO8601|
|statistics|object|false|none|none|
|external|[object]|false|none|none|

<h2 id="tocS_user_history">user_history</h2>
<!-- backwards compatibility -->
<a id="schemauser_history"></a>
<a id="schema_user_history"></a>
<a id="tocSuser_history"></a>
<a id="tocsuser_history"></a>

```json
{
  "data": [
    {
      "entry": {
        "mal_id": 0,
        "type": "string",
        "name": "string",
        "url": "string"
      },
      "increment": 0,
      "date": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[history](#schemahistory)]|false|none|none|

<h2 id="tocS_history">history</h2>
<!-- backwards compatibility -->
<a id="schemahistory"></a>
<a id="schema_history"></a>
<a id="tocShistory"></a>
<a id="tocshistory"></a>

```json
{
  "entry": {
    "mal_id": 0,
    "type": "string",
    "name": "string",
    "url": "string"
  },
  "increment": 0,
  "date": "string"
}
```

Transform the resource into an array.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entry|[mal_url](#schemamal_url)|false|none|Parsed URL Data|
|increment|integer|false|none|Number of episodes/chapters watched/read|
|date|string|false|none|Date ISO8601|

<h2 id="tocS_user_updates">user_updates</h2>
<!-- backwards compatibility -->
<a id="schemauser_updates"></a>
<a id="schema_user_updates"></a>
<a id="tocSuser_updates"></a>
<a id="tocsuser_updates"></a>

```json
{
  "data": {
    "anime": [
      {
        "entry": {
          "mal_id": 0,
          "url": "string",
          "images": {
            "jpg": {
              "image_url": "string",
              "small_image_url": "string",
              "large_image_url": "string"
            },
            "webp": {
              "image_url": "string",
              "small_image_url": "string",
              "large_image_url": "string"
            }
          },
          "title": "string"
        },
        "score": 0,
        "status": "string",
        "episodes_seen": 0,
        "episodes_total": 0,
        "date": "string"
      }
    ],
    "manga": [
      {
        "entry": {
          "mal_id": 0,
          "url": "string",
          "images": {
            "jpg": {
              "image_url": "string",
              "small_image_url": "string",
              "large_image_url": "string"
            },
            "webp": {
              "image_url": "string",
              "small_image_url": "string",
              "large_image_url": "string"
            }
          },
          "title": "string"
        },
        "score": 0,
        "status": "string",
        "chapters_read": 0,
        "chapters_total": 0,
        "volumes_read": 0,
        "volumes_total": 0,
        "date": "string"
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|

<h2 id="tocS_user_profile">user_profile</h2>
<!-- backwards compatibility -->
<a id="schemauser_profile"></a>
<a id="schema_user_profile"></a>
<a id="tocSuser_profile"></a>
<a id="tocsuser_profile"></a>

```json
{
  "mal_id": 0,
  "username": "string",
  "url": "string",
  "images": {
    "jpg": {
      "image_url": "string"
    },
    "webp": {
      "image_url": "string"
    }
  },
  "last_online": "string",
  "gender": "string",
  "birthday": "string",
  "location": "string",
  "joined": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mal_id|integer \| null|false|none|MyAnimeList ID|
|username|string|false|none|MyAnimeList Username|
|url|string|false|none|MyAnimeList URL|
|images|[user_images](#schemauser_images)|false|none|none|
|last_online|string \| null|false|none|Last Online Date ISO8601|
|gender|string \| null|false|none|User Gender|
|birthday|string \| null|false|none|Birthday Date ISO8601|
|location|string \| null|false|none|Location|
|joined|string \| null|false|none|Joined Date ISO8601|

<h2 id="tocS_users_temp">users_temp</h2>
<!-- backwards compatibility -->
<a id="schemausers_temp"></a>
<a id="schema_users_temp"></a>
<a id="tocSusers_temp"></a>
<a id="tocsusers_temp"></a>

```json
{
  "data": [
    {
      "mal_id": 0,
      "username": "string",
      "url": "string",
      "images": {
        "jpg": {
          "image_url": "string"
        },
        "webp": {
          "image_url": "string"
        }
      },
      "last_online": "string",
      "gender": "string",
      "birthday": "string",
      "location": "string",
      "joined": "string",
      "anime_stats": {
        "days_watched": 0,
        "mean_score": 0,
        "watching": 0,
        "completed": 0,
        "on_hold": 0,
        "dropped": 0,
        "plan_to_watch": 0,
        "total_entries": 0,
        "rewatched": 0,
        "episodes_watched": 0
      },
      "manga_stats": {
        "days_read": 0,
        "mean_score": 0,
        "reading": 0,
        "completed": 0,
        "on_hold": 0,
        "dropped": 0,
        "plan_to_read": 0,
        "total_entries": 0,
        "reread": 0,
        "chapters_read": 0,
        "volumes_read": 0
      },
      "favorites": {
        "anime": [
          {
            "mal_id": 0,
            "url": "string",
            "image_url": "string",
            "name": "string"
          }
        ],
        "manga": [
          {
            "mal_id": 0,
            "url": "string",
            "image_url": "string",
            "name": "string"
          }
        ],
        "characters": [
          {
            "mal_id": 0,
            "url": "string",
            "image_url": "string",
            "name": "string"
          }
        ],
        "people": [
          {
            "mal_id": 0,
            "url": "string",
            "image_url": "string",
            "name": "string"
          }
        ]
      },
      "about": "string"
    }
  ]
}
```

Transform the resource into an array.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|false|none|none|

<h2 id="tocS_user_statistics">user_statistics</h2>
<!-- backwards compatibility -->
<a id="schemauser_statistics"></a>
<a id="schema_user_statistics"></a>
<a id="tocSuser_statistics"></a>
<a id="tocsuser_statistics"></a>

```json
{
  "data": {
    "anime": {
      "days_watched": 0,
      "mean_score": 0,
      "watching": 0,
      "completed": 0,
      "on_hold": 0,
      "dropped": 0,
      "plan_to_watch": 0,
      "total_entries": 0,
      "rewatched": 0,
      "episodes_watched": 0
    },
    "manga": {
      "days_read": 0,
      "mean_score": 0,
      "reading": 0,
      "completed": 0,
      "on_hold": 0,
      "dropped": 0,
      "plan_to_read": 0,
      "total_entries": 0,
      "reread": 0,
      "chapters_read": 0,
      "volumes_read": 0
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|

<h2 id="tocS_recommendations">recommendations</h2>
<!-- backwards compatibility -->
<a id="schemarecommendations"></a>
<a id="schema_recommendations"></a>
<a id="tocSrecommendations"></a>
<a id="tocsrecommendations"></a>

```json
{
  "data": [
    {
      "mal_id": "string",
      "entry": [
        {
          "mal_id": 0,
          "url": "string",
          "images": {
            "jpg": {
              "image_url": "string",
              "small_image_url": "string",
              "large_image_url": "string"
            },
            "webp": {
              "image_url": "string",
              "small_image_url": "string",
              "large_image_url": "string"
            }
          },
          "title": "string"
        }
      ],
      "content": "string",
      "user": {
        "url": "string",
        "username": "string"
      }
    }
  ],
  "pagination": {
    "last_visible_page": 0,
    "has_next_page": true
  }
}
```

Recommendations

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|false|none|none|
|pagination|object|false|none|none|

<h2 id="tocS_entry_recommendations">entry_recommendations</h2>
<!-- backwards compatibility -->
<a id="schemaentry_recommendations"></a>
<a id="schema_entry_recommendations"></a>
<a id="tocSentry_recommendations"></a>
<a id="tocsentry_recommendations"></a>

```json
{
  "data": [
    {
      "entry": {
        "mal_id": 0,
        "url": "string",
        "images": {
          "jpg": {
            "image_url": "string",
            "small_image_url": "string",
            "large_image_url": "string"
          },
          "webp": {
            "image_url": "string",
            "small_image_url": "string",
            "large_image_url": "string"
          }
        },
        "title": "string"
      }
    }
  ]
}
```

Entry Recommendations Resource

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|false|none|none|

<h2 id="tocS_manga_review">manga_review</h2>
<!-- backwards compatibility -->
<a id="schemamanga_review"></a>
<a id="schema_manga_review"></a>
<a id="tocSmanga_review"></a>
<a id="tocsmanga_review"></a>

```json
{
  "mal_id": 0,
  "url": "string",
  "type": "string",
  "reactions": {
    "overall": 0,
    "nice": 0,
    "love_it": 0,
    "funny": 0,
    "confusing": 0,
    "informative": 0,
    "well_written": 0,
    "creative": 0
  },
  "date": "string",
  "review": "string",
  "score": 0,
  "tags": [
    "string"
  ],
  "is_spoiler": true,
  "is_preliminary": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mal_id|integer|false|none|MyAnimeList ID|
|url|string|false|none|MyAnimeList review URL|
|type|string|false|none|Entry type|
|reactions|object|false|none|User reaction count on the review|
|date|string|false|none|Review created date ISO8601|
|review|string|false|none|Review content|
|score|integer|false|none|Number of user votes on the Review|
|tags|[string]|false|none|Review tags|
|is_spoiler|boolean|false|none|The review contains spoiler|
|is_preliminary|boolean|false|none|The review was made before the entry was completed|

<h2 id="tocS_anime_review">anime_review</h2>
<!-- backwards compatibility -->
<a id="schemaanime_review"></a>
<a id="schema_anime_review"></a>
<a id="tocSanime_review"></a>
<a id="tocsanime_review"></a>

```json
{
  "mal_id": 0,
  "url": "string",
  "type": "string",
  "reactions": {
    "overall": 0,
    "nice": 0,
    "love_it": 0,
    "funny": 0,
    "confusing": 0,
    "informative": 0,
    "well_written": 0,
    "creative": 0
  },
  "date": "string",
  "review": "string",
  "score": 0,
  "tags": [
    "string"
  ],
  "is_spoiler": true,
  "is_preliminary": true,
  "episodes_watched": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mal_id|integer|false|none|MyAnimeList ID|
|url|string|false|none|MyAnimeList review URL|
|type|string|false|none|Entry type|
|reactions|object|false|none|User reaction count on the review|
|date|string|false|none|Review created date ISO8601|
|review|string|false|none|Review content|
|score|integer|false|none|Number of user votes on the Review|
|tags|[string]|false|none|Review tags|
|is_spoiler|boolean|false|none|The review contains spoiler|
|is_preliminary|boolean|false|none|The review was made before the entry was completed|
|episodes_watched|integer|false|none|Number of episodes watched|

<h2 id="tocS_anime_reviews">anime_reviews</h2>
<!-- backwards compatibility -->
<a id="schemaanime_reviews"></a>
<a id="schema_anime_reviews"></a>
<a id="tocSanime_reviews"></a>
<a id="tocsanime_reviews"></a>

```json
{
  "data": [
    {
      "user": {
        "username": "string",
        "url": "string",
        "images": {
          "jpg": {
            "image_url": "string"
          },
          "webp": {
            "image_url": "string"
          }
        }
      },
      "mal_id": 0,
      "url": "string",
      "type": "string",
      "reactions": {
        "overall": 0,
        "nice": 0,
        "love_it": 0,
        "funny": 0,
        "confusing": 0,
        "informative": 0,
        "well_written": 0,
        "creative": 0
      },
      "date": "string",
      "review": "string",
      "score": 0,
      "tags": [
        "string"
      ],
      "is_spoiler": true,
      "is_preliminary": true,
      "episodes_watched": 0
    }
  ],
  "pagination": {
    "last_visible_page": 0,
    "has_next_page": true
  }
}
```

Anime Reviews Resource

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|false|none|none|
|pagination|object|false|none|none|

<h2 id="tocS_manga_reviews">manga_reviews</h2>
<!-- backwards compatibility -->
<a id="schemamanga_reviews"></a>
<a id="schema_manga_reviews"></a>
<a id="tocSmanga_reviews"></a>
<a id="tocsmanga_reviews"></a>

```json
{
  "data": [
    {
      "user": {
        "username": "string",
        "url": "string",
        "images": {
          "jpg": {
            "image_url": "string"
          },
          "webp": {
            "image_url": "string"
          }
        }
      },
      "mal_id": 0,
      "url": "string",
      "type": "string",
      "reactions": {
        "overall": 0,
        "nice": 0,
        "love_it": 0,
        "funny": 0,
        "confusing": 0,
        "informative": 0,
        "well_written": 0,
        "creative": 0
      },
      "date": "string",
      "review": "string",
      "score": 0,
      "tags": [
        "string"
      ],
      "is_spoiler": true,
      "is_preliminary": true
    }
  ],
  "pagination": {
    "last_visible_page": 0,
    "has_next_page": true
  }
}
```

Manga Reviews Resource

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|false|none|none|
|pagination|object|false|none|none|

<h2 id="tocS_streaming_links">streaming_links</h2>
<!-- backwards compatibility -->
<a id="schemastreaming_links"></a>
<a id="schema_streaming_links"></a>
<a id="tocSstreaming_links"></a>
<a id="tocsstreaming_links"></a>

```json
{
  "data": [
    {
      "name": "string",
      "url": "string"
    }
  ]
}
```

Streaming links

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|false|none|none|

<h2 id="tocS_anime_userupdates">anime_userupdates</h2>
<!-- backwards compatibility -->
<a id="schemaanime_userupdates"></a>
<a id="schema_anime_userupdates"></a>
<a id="tocSanime_userupdates"></a>
<a id="tocsanime_userupdates"></a>

```json
{
  "data": [
    {
      "user": {
        "username": "string",
        "url": "string",
        "images": {
          "jpg": {
            "image_url": "string"
          },
          "webp": {
            "image_url": "string"
          }
        }
      },
      "score": 0,
      "status": "string",
      "episodes_seen": 0,
      "episodes_total": 0,
      "date": "string"
    }
  ],
  "pagination": {
    "last_visible_page": 0,
    "has_next_page": true
  }
}
```

Anime User Updates Resource

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|false|none|none|
|pagination|object|false|none|none|

<h2 id="tocS_manga_userupdates">manga_userupdates</h2>
<!-- backwards compatibility -->
<a id="schemamanga_userupdates"></a>
<a id="schema_manga_userupdates"></a>
<a id="tocSmanga_userupdates"></a>
<a id="tocsmanga_userupdates"></a>

```json
{
  "data": [
    {
      "user": {
        "username": "string",
        "url": "string",
        "images": {
          "jpg": {
            "image_url": "string"
          },
          "webp": {
            "image_url": "string"
          }
        }
      },
      "score": 0,
      "status": "string",
      "volumes_read": 0,
      "volumes_total": 0,
      "chapters_read": 0,
      "chapters_total": 0,
      "date": "string"
    }
  ],
  "pagination": {
    "last_visible_page": 0,
    "has_next_page": true
  }
}
```

Manga User Updates Resource

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|false|none|none|
|pagination|object|false|none|none|
