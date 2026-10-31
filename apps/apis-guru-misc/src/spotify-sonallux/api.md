<h1 id="spotify-web-api-with-fixes-and-improvements-from-sonallux">Spotify Web API with fixes and improvements from sonallux v2023.2.27</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

You can use Spotify's Web API to discover music and podcasts, manage your Spotify library, control audio playback, and much more. Browse our available Web API endpoints using the sidebar at left, or via the navigation bar on top of this page on smaller screens.

In order to make successful Web API requests your app will need a valid access token. One can be obtained through <a href="https://developer.spotify.com/documentation/general/guides/authorization-guide/">OAuth 2.0</a>.

The base URI for all Web API requests is `https://api.spotify.com/v1`.

Need help? See our <a href="https://developer.spotify.com/documentation/web-api/guides/">Web API guides</a> for more information, or visit the <a href="https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer">Spotify for Developers community forum</a> to ask questions and connect with other developers.

Base URLs:

* <a href="https://api.spotify.com/v1">https://api.spotify.com/v1</a>

<a href="https://developer.spotify.com/terms/">Terms of service</a>
Web: <a href="https://github.com/sonallux/spotify-web-api">sonallux</a> 

# Authentication

- oAuth2 authentication. Spotify supports OAuth 2.0 for authenticating all API requests.

    - Flow: authorizationCode
    - Authorization URL = [https://accounts.spotify.com/authorize](https://accounts.spotify.com/authorize)
    - Token URL = [https://accounts.spotify.com/api/token](https://accounts.spotify.com/api/token)

|Scope|Scope Description|
|---|---|
|app-remote-control|Communicate with the Spotify app on your device.<br>|
|playlist-modify-private|Manage your private playlists.<br>|
|playlist-modify-public|Manage your public playlists.<br>|
|playlist-read-collaborative|Access your collaborative playlists.<br>|
|playlist-read-private|Access your private playlists.<br>|
|streaming|Play content and control playback on your other devices.<br>|
|ugc-image-upload|Upload images to Spotify on your behalf.<br>|
|user-follow-modify|Manage your saved content.<br>|
|user-follow-read|Access your followers and who you are following.<br>|
|user-library-modify|Manage your saved content.<br>|
|user-library-read|Access your saved content.<br>|
|user-modify-playback-state|Control playback on your Spotify clients and Spotify Connect devices.<br>|
|user-read-currently-playing|Read your currently playing content.<br>|
|user-read-email|Get your real email address.<br>|
|user-read-playback-position|Read your position in content you have played.<br>|
|user-read-playback-state|Read your currently playing content and Spotify Connect devices information.<br>|
|user-read-private|Access your subscription details.<br>|
|user-read-recently-played|Access your recently played items.<br>|
|user-top-read|Read your top artists and content.<br>|

<h1 id="spotify-web-api-with-fixes-and-improvements-from-sonallux-albums">Albums</h1>

## Get Several Albums

<a id="opIdget-multiple-albums"></a>

> Code samples

```bash
curl 'https://example.com/albums?ids=382ObEPsp2rxGrnsizN5TX%2C1A2GTWGtFfWp7KSQTwWOyo%2C2noRn2Aes5aoNVsU6iWThc' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /albums`

Get Spotify catalog information for multiple albums identified by their Spotify IDs.


<h3 id="get-several-albums-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ids|query|string|true|none|
|market|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "albums": [
    {
      "album_type": "compilation",
      "available_markets": [
        "CA",
        "BR",
        "IT"
      ],
      "external_urls": {
        "spotify": "string"
      },
      "href": "string",
      "id": "2up3OPMp9Tb4dAKM2erWXQ",
      "images": [
        {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
          "width": 300
        }
      ],
      "name": "string",
      "release_date": "1981-12",
      "release_date_precision": "year",
      "restrictions": {
        "reason": "market"
      },
      "total_tracks": 9,
      "type": "album",
      "uri": "spotify:album:2up3OPMp9Tb4dAKM2erWXQ",
      "artists": [
        {
          "external_urls": {
            "spotify": "string"
          },
          "href": "string",
          "id": "string",
          "name": "string",
          "type": "artist",
          "uri": "string"
        }
      ],
      "copyrights": [
        {
          "text": "string",
          "type": "string"
        }
      ],
      "external_ids": {
        "ean": "string",
        "isrc": "string",
        "upc": "string"
      },
      "genres": [
        "string"
      ],
      "label": "string",
      "popularity": 0,
      "tracks": {
        "href": "https://api.spotify.com/v1/me/shows?offset=0&limit=20\n",
        "limit": 20,
        "next": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
        "offset": 0,
        "previous": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
        "total": 4,
        "items": [
          {
            "artists": [
              {
                "external_urls": {
                  "spotify": "string"
                },
                "href": "string",
                "id": "string",
                "name": "string",
                "type": "artist",
                "uri": "string"
              }
            ],
            "available_markets": [
              "string"
            ],
            "disc_number": 0,
            "duration_ms": 0,
            "explicit": true,
            "external_urls": {
              "spotify": "string"
            },
            "href": "string",
            "id": "string",
            "is_local": true,
            "is_playable": true,
            "linked_from": {
              "external_urls": {
                "spotify": "string"
              },
              "href": "string",
              "id": "string",
              "type": "string",
              "uri": "string"
            },
            "name": "string",
            "preview_url": "string",
            "restrictions": {
              "reason": "string"
            },
            "track_number": 0,
            "type": "string",
            "uri": "string"
          }
        ]
      }
    }
  ]
}
```

> 401 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

<h3 id="get-several-albums-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A set of albums|Inline|
|401|Unauthorized|Bad or expired token. This can happen if the user revoked a token or<br>the access token has expired. You should re-authenticate the user.<br>|Inline|
|403|Forbidden|Bad OAuth request (wrong consumer key, bad nonce, expired<br>timestamp...). Unfortunately, re-authenticating the user won't help here.<br>|Inline|
|429|Too Many Requests|The app has exceeded its rate limits.<br>|Inline|

<h3 id="get-several-albums-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|albums|[[AlbumObject](#schemaalbumobject)]|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth_2_0
</aside>

## Get Album

<a id="opIdget-an-album"></a>

> Code samples

```bash
curl https://example.com/albums/4aawyAB9vmqN3uQ7FjRGTy \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /albums/{id}`

Get Spotify catalog information for a single album.


<h3 id="get-album-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|market|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "album_type": "compilation",
  "available_markets": [
    "CA",
    "BR",
    "IT"
  ],
  "external_urls": {
    "spotify": "string"
  },
  "href": "string",
  "id": "2up3OPMp9Tb4dAKM2erWXQ",
  "images": [
    {
      "height": 300,
      "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
      "width": 300
    }
  ],
  "name": "string",
  "release_date": "1981-12",
  "release_date_precision": "year",
  "restrictions": {
    "reason": "market"
  },
  "total_tracks": 9,
  "type": "album",
  "uri": "spotify:album:2up3OPMp9Tb4dAKM2erWXQ",
  "artists": [
    {
      "external_urls": {
        "spotify": "string"
      },
      "href": "string",
      "id": "string",
      "name": "string",
      "type": "artist",
      "uri": "string"
    }
  ],
  "copyrights": [
    {
      "text": "string",
      "type": "string"
    }
  ],
  "external_ids": {
    "ean": "string",
    "isrc": "string",
    "upc": "string"
  },
  "genres": [
    "string"
  ],
  "label": "string",
  "popularity": 0,
  "tracks": {
    "href": "https://api.spotify.com/v1/me/shows?offset=0&limit=20\n",
    "limit": 20,
    "next": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
    "offset": 0,
    "previous": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
    "total": 4,
    "items": [
      {
        "artists": [
          {
            "external_urls": {
              "spotify": "string"
            },
            "href": "string",
            "id": "string",
            "name": "string",
            "type": "artist",
            "uri": "string"
          }
        ],
        "available_markets": [
          "string"
        ],
        "disc_number": 0,
        "duration_ms": 0,
        "explicit": true,
        "external_urls": {
          "spotify": "string"
        },
        "href": "string",
        "id": "string",
        "is_local": true,
        "is_playable": true,
        "linked_from": {
          "external_urls": {
            "spotify": "string"
          },
          "href": "string",
          "id": "string",
          "type": "string",
          "uri": "string"
        },
        "name": "string",
        "preview_url": "string",
        "restrictions": {
          "reason": "string"
        },
        "track_number": 0,
        "type": "string",
        "uri": "string"
      }
    ]
  }
}
```

> 401 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

<h3 id="get-album-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|An album|[AlbumObject](#schemaalbumobject)|
|401|Unauthorized|Bad or expired token. This can happen if the user revoked a token or<br>the access token has expired. You should re-authenticate the user.<br>|Inline|
|403|Forbidden|Bad OAuth request (wrong consumer key, bad nonce, expired<br>timestamp...). Unfortunately, re-authenticating the user won't help here.<br>|Inline|
|429|Too Many Requests|The app has exceeded its rate limits.<br>|Inline|

<h3 id="get-album-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth_2_0
</aside>

## Get Album Tracks

<a id="opIdget-an-albums-tracks"></a>

> Code samples

```bash
curl https://example.com/albums/4aawyAB9vmqN3uQ7FjRGTy/tracks \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /albums/{id}/tracks`

Get Spotify catalog information about an album’s tracks.
Optional parameters can be used to limit the number of tracks returned.


<h3 id="get-album-tracks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|market|query|string|false|none|
|limit|query|integer|false|none|
|offset|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "href": "https://api.spotify.com/v1/me/shows?offset=0&limit=20\n",
  "limit": 20,
  "next": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
  "offset": 0,
  "previous": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
  "total": 4,
  "items": [
    {
      "artists": [
        {
          "external_urls": {
            "spotify": "string"
          },
          "href": "string",
          "id": "string",
          "name": "string",
          "type": "artist",
          "uri": "string"
        }
      ],
      "available_markets": [
        "string"
      ],
      "disc_number": 0,
      "duration_ms": 0,
      "explicit": true,
      "external_urls": {
        "spotify": "string"
      },
      "href": "string",
      "id": "string",
      "is_local": true,
      "is_playable": true,
      "linked_from": {
        "external_urls": {
          "spotify": "string"
        },
        "href": "string",
        "id": "string",
        "type": "string",
        "uri": "string"
      },
      "name": "string",
      "preview_url": "string",
      "restrictions": {
        "reason": "string"
      },
      "track_number": 0,
      "type": "string",
      "uri": "string"
    }
  ]
}
```

> 401 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

<h3 id="get-album-tracks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Pages of tracks|[PagingSimplifiedTrackObject](#schemapagingsimplifiedtrackobject)|
|401|Unauthorized|Bad or expired token. This can happen if the user revoked a token or<br>the access token has expired. You should re-authenticate the user.<br>|Inline|
|403|Forbidden|Bad OAuth request (wrong consumer key, bad nonce, expired<br>timestamp...). Unfortunately, re-authenticating the user won't help here.<br>|Inline|
|429|Too Many Requests|The app has exceeded its rate limits.<br>|Inline|

<h3 id="get-album-tracks-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth_2_0
</aside>

## Get New Releases

<a id="opIdget-new-releases"></a>

> Code samples

```bash
curl https://example.com/browse/new-releases \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /browse/new-releases`

Get a list of new album releases featured in Spotify (shown, for example, on a Spotify player’s “Browse” tab).


<h3 id="get-new-releases-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|country|query|string|false|none|
|limit|query|integer|false|none|
|offset|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "albums": {
    "href": "https://api.spotify.com/v1/me/shows?offset=0&limit=20\n",
    "limit": 20,
    "next": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
    "offset": 0,
    "previous": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
    "total": 4,
    "items": [
      {
        "album_type": "compilation",
        "available_markets": [
          "CA",
          "BR",
          "IT"
        ],
        "external_urls": {
          "spotify": "string"
        },
        "href": "string",
        "id": "2up3OPMp9Tb4dAKM2erWXQ",
        "images": [
          {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
            "width": 300
          }
        ],
        "name": "string",
        "release_date": "1981-12",
        "release_date_precision": "year",
        "restrictions": {
          "reason": "market"
        },
        "total_tracks": 9,
        "type": "album",
        "uri": "spotify:album:2up3OPMp9Tb4dAKM2erWXQ",
        "album_group": "compilation",
        "artists": [
          {
            "external_urls": {
              "spotify": "string"
            },
            "href": "string",
            "id": "string",
            "name": "string",
            "type": "artist",
            "uri": "string"
          }
        ]
      }
    ]
  }
}
```

> 401 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

<h3 id="get-new-releases-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A paged set of albums|Inline|
|401|Unauthorized|Bad or expired token. This can happen if the user revoked a token or<br>the access token has expired. You should re-authenticate the user.<br>|Inline|
|403|Forbidden|Bad OAuth request (wrong consumer key, bad nonce, expired<br>timestamp...). Unfortunately, re-authenticating the user won't help here.<br>|Inline|
|429|Too Many Requests|The app has exceeded its rate limits.<br>|Inline|

<h3 id="get-new-releases-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|albums|[PagingSimplifiedAlbumObject](#schemapagingsimplifiedalbumobject)|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth_2_0
</aside>

## Get User's Saved Albums

<a id="opIdget-users-saved-albums"></a>

> Code samples

```bash
curl https://example.com/me/albums \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /me/albums`

Get a list of the albums saved in the current Spotify user's 'Your Music' library.


<h3 id="get-users-saved-albums-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|none|
|offset|query|integer|false|none|
|market|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "href": "https://api.spotify.com/v1/me/shows?offset=0&limit=20\n",
  "limit": 20,
  "next": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
  "offset": 0,
  "previous": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
  "total": 4,
  "items": [
    {
      "added_at": "1970-01-01T00:00:00Z",
      "album": {
        "album_type": "compilation",
        "available_markets": [
          "CA",
          "BR",
          "IT"
        ],
        "external_urls": {
          "spotify": "string"
        },
        "href": "string",
        "id": "2up3OPMp9Tb4dAKM2erWXQ",
        "images": [
          {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
            "width": 300
          }
        ],
        "name": "string",
        "release_date": "1981-12",
        "release_date_precision": "year",
        "restrictions": {
          "reason": "market"
        },
        "total_tracks": 9,
        "type": "album",
        "uri": "spotify:album:2up3OPMp9Tb4dAKM2erWXQ",
        "artists": [
          {
            "external_urls": {
              "spotify": "string"
            },
            "href": "string",
            "id": "string",
            "name": "string",
            "type": "artist",
            "uri": "string"
          }
        ],
        "copyrights": [
          {
            "text": "string",
            "type": "string"
          }
        ],
        "external_ids": {
          "ean": "string",
          "isrc": "string",
          "upc": "string"
        },
        "genres": [
          "string"
        ],
        "label": "string",
        "popularity": 0,
        "tracks": {
          "href": "https://api.spotify.com/v1/me/shows?offset=0&limit=20\n",
          "limit": 20,
          "next": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
          "offset": 0,
          "previous": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
          "total": 4,
          "items": [
            {
              "artists": [
                {
                  "external_urls": {
                    "spotify": "string"
                  },
                  "href": "string",
                  "id": "string",
                  "name": "string",
                  "type": "artist",
                  "uri": "string"
                }
              ],
              "available_markets": [
                "string"
              ],
              "disc_number": 0,
              "duration_ms": 0,
              "explicit": true,
              "external_urls": {
                "spotify": "string"
              },
              "href": "string",
              "id": "string",
              "is_local": true,
              "is_playable": true,
              "linked_from": {
                "external_urls": {
                  "spotify": "string"
                },
                "href": "string",
                "id": "string",
                "type": "string",
                "uri": "string"
              },
              "name": "string",
              "preview_url": "string",
              "restrictions": {
                "reason": "string"
              },
              "track_number": 0,
              "type": "string",
              "uri": "string"
            }
          ]
        }
      }
    }
  ]
}
```

> 401 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

<h3 id="get-users-saved-albums-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Pages of albums|[PagingSavedAlbumObject](#schemapagingsavedalbumobject)|
|401|Unauthorized|Bad or expired token. This can happen if the user revoked a token or<br>the access token has expired. You should re-authenticate the user.<br>|Inline|
|403|Forbidden|Bad OAuth request (wrong consumer key, bad nonce, expired<br>timestamp...). Unfortunately, re-authenticating the user won't help here.<br>|Inline|
|429|Too Many Requests|The app has exceeded its rate limits.<br>|Inline|

<h3 id="get-users-saved-albums-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth_2_0 ( Scopes: user-library-read )
</aside>

## Save Albums for Current User

<a id="opIdsave-albums-user"></a>

> Code samples

```bash
curl 'https://example.com/me/albums?ids=382ObEPsp2rxGrnsizN5TX%2C1A2GTWGtFfWp7KSQTwWOyo%2C2noRn2Aes5aoNVsU6iWThc' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "ids": [
      "string"
    ]
  }'
```

`PUT /me/albums`

Save one or more albums to the current user's 'Your Music' library.


> Body parameter

```json
{
  "ids": [
    "string"
  ]
}
```

<h3 id="save-albums-for-current-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ids|query|string|true|none|
|body|body|object|false|none|
|» ids|body|[string]|false|A JSON array of the [Spotify IDs](/documentation/web-api/#spotify-uris-and-ids). For example: `["4iV5W9uYEdYUVa79Axb7Rh", "1301WleyT98MSxVHPZCA6M"]`<br/>A maximum of 50 items can be specified in one request. _**Note**: if the `ids` parameter is present in the query string, any IDs listed here in the body will be ignored._<br>|

> Example responses

> 401 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

<h3 id="save-albums-for-current-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The album is saved|None|
|401|Unauthorized|Bad or expired token. This can happen if the user revoked a token or<br>the access token has expired. You should re-authenticate the user.<br>|Inline|
|403|Forbidden|Bad OAuth request (wrong consumer key, bad nonce, expired<br>timestamp...). Unfortunately, re-authenticating the user won't help here.<br>|Inline|
|429|Too Many Requests|The app has exceeded its rate limits.<br>|Inline|

<h3 id="save-albums-for-current-user-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth_2_0 ( Scopes: user-library-modify )
</aside>

## Remove Users' Saved Albums

<a id="opIdremove-albums-user"></a>

> Code samples

```bash
curl 'https://example.com/me/albums?ids=382ObEPsp2rxGrnsizN5TX%2C1A2GTWGtFfWp7KSQTwWOyo%2C2noRn2Aes5aoNVsU6iWThc' \
  -X DELETE \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "ids": [
      "string"
    ]
  }'
```

`DELETE /me/albums`

Remove one or more albums from the current user's 'Your Music' library.


> Body parameter

```json
{
  "ids": [
    "string"
  ]
}
```

<h3 id="remove-users-saved-albums-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ids|query|string|true|none|
|body|body|object|false|none|
|» ids|body|[string]|false|A JSON array of the [Spotify IDs](/documentation/web-api/#spotify-uris-and-ids). For example: `["4iV5W9uYEdYUVa79Axb7Rh", "1301WleyT98MSxVHPZCA6M"]`<br/>A maximum of 50 items can be specified in one request. _**Note**: if the `ids` parameter is present in the query string, any IDs listed here in the body will be ignored._<br>|

> Example responses

> 401 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

<h3 id="remove-users-saved-albums-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Album(s) have been removed from the library|None|
|401|Unauthorized|Bad or expired token. This can happen if the user revoked a token or<br>the access token has expired. You should re-authenticate the user.<br>|Inline|
|403|Forbidden|Bad OAuth request (wrong consumer key, bad nonce, expired<br>timestamp...). Unfortunately, re-authenticating the user won't help here.<br>|Inline|
|429|Too Many Requests|The app has exceeded its rate limits.<br>|Inline|

<h3 id="remove-users-saved-albums-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth_2_0 ( Scopes: user-library-modify )
</aside>

## Check User's Saved Albums

<a id="opIdcheck-users-saved-albums"></a>

> Code samples

```bash
curl 'https://example.com/me/albums/contains?ids=382ObEPsp2rxGrnsizN5TX%2C1A2GTWGtFfWp7KSQTwWOyo%2C2noRn2Aes5aoNVsU6iWThc' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /me/albums/contains`

Check if one or more albums is already saved in the current Spotify user's 'Your Music' library.


<h3 id="check-users-saved-albums-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ids|query|string|true|none|

> Example responses

> 200 Response

```json
[
  false,
  true
]
```

> 401 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

<h3 id="check-users-saved-albums-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Array of booleans|Inline|
|401|Unauthorized|Bad or expired token. This can happen if the user revoked a token or<br>the access token has expired. You should re-authenticate the user.<br>|Inline|
|403|Forbidden|Bad OAuth request (wrong consumer key, bad nonce, expired<br>timestamp...). Unfortunately, re-authenticating the user won't help here.<br>|Inline|
|429|Too Many Requests|The app has exceeded its rate limits.<br>|Inline|

<h3 id="check-users-saved-albums-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[boolean]|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth_2_0 ( Scopes: user-library-read )
</aside>

<h1 id="spotify-web-api-with-fixes-and-improvements-from-sonallux-artists">Artists</h1>

## Get Several Artists

<a id="opIdget-multiple-artists"></a>

> Code samples

```bash
curl 'https://example.com/artists?ids=2CIMQHirSU0MQqyYHq0eOx%2C57dN52uHvrHOxijzpIgu3E%2C1vCWHaC5f2uS3yhpwWbIA6' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /artists`

Get Spotify catalog information for several artists based on their Spotify IDs.


<h3 id="get-several-artists-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ids|query|string|true|none|

> Example responses

> 200 Response

```json
{
  "artists": [
    {
      "external_urls": {
        "spotify": "string"
      },
      "followers": {
        "href": "string",
        "total": 0
      },
      "genres": [
        "Prog rock",
        "Grunge"
      ],
      "href": "string",
      "id": "string",
      "images": [
        {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
          "width": 300
        }
      ],
      "name": "string",
      "popularity": 0,
      "type": "artist",
      "uri": "string"
    }
  ]
}
```

> 401 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

<h3 id="get-several-artists-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A set of artists|Inline|
|401|Unauthorized|Bad or expired token. This can happen if the user revoked a token or<br>the access token has expired. You should re-authenticate the user.<br>|Inline|
|403|Forbidden|Bad OAuth request (wrong consumer key, bad nonce, expired<br>timestamp...). Unfortunately, re-authenticating the user won't help here.<br>|Inline|
|429|Too Many Requests|The app has exceeded its rate limits.<br>|Inline|

<h3 id="get-several-artists-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|artists|[[ArtistObject](#schemaartistobject)]|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth_2_0
</aside>

## Get Artist

<a id="opIdget-an-artist"></a>

> Code samples

```bash
curl https://example.com/artists/0TnOYISbd1XYRBk9myaseg \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /artists/{id}`

Get Spotify catalog information for a single artist identified by their unique Spotify ID.


<h3 id="get-artist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "external_urls": {
    "spotify": "string"
  },
  "followers": {
    "href": "string",
    "total": 0
  },
  "genres": [
    "Prog rock",
    "Grunge"
  ],
  "href": "string",
  "id": "string",
  "images": [
    {
      "height": 300,
      "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
      "width": 300
    }
  ],
  "name": "string",
  "popularity": 0,
  "type": "artist",
  "uri": "string"
}
```

> 401 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

<h3 id="get-artist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|An artist|[ArtistObject](#schemaartistobject)|
|401|Unauthorized|Bad or expired token. This can happen if the user revoked a token or<br>the access token has expired. You should re-authenticate the user.<br>|Inline|
|403|Forbidden|Bad OAuth request (wrong consumer key, bad nonce, expired<br>timestamp...). Unfortunately, re-authenticating the user won't help here.<br>|Inline|
|429|Too Many Requests|The app has exceeded its rate limits.<br>|Inline|

<h3 id="get-artist-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth_2_0
</aside>

## Get Artist's Albums

<a id="opIdget-an-artists-albums"></a>

> Code samples

```bash
curl https://example.com/artists/0TnOYISbd1XYRBk9myaseg/albums \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /artists/{id}/albums`

Get Spotify catalog information about an artist's albums.


<h3 id="get-artists-albums-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|include_groups|query|string|false|none|
|market|query|string|false|none|
|limit|query|integer|false|none|
|offset|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "href": "https://api.spotify.com/v1/me/shows?offset=0&limit=20\n",
  "limit": 20,
  "next": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
  "offset": 0,
  "previous": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
  "total": 4,
  "items": [
    {
      "album_type": "compilation",
      "available_markets": [
        "CA",
        "BR",
        "IT"
      ],
      "external_urls": {
        "spotify": "string"
      },
      "href": "string",
      "id": "2up3OPMp9Tb4dAKM2erWXQ",
      "images": [
        {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
          "width": 300
        }
      ],
      "name": "string",
      "release_date": "1981-12",
      "release_date_precision": "year",
      "restrictions": {
        "reason": "market"
      },
      "total_tracks": 9,
      "type": "album",
      "uri": "spotify:album:2up3OPMp9Tb4dAKM2erWXQ",
      "album_group": "compilation",
      "artists": [
        {
          "external_urls": {
            "spotify": "string"
          },
          "href": "string",
          "id": "string",
          "name": "string",
          "type": "artist",
          "uri": "string"
        }
      ]
    }
  ]
}
```

> 401 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

<h3 id="get-artists-albums-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Pages of albums|[PagingSimplifiedAlbumObject](#schemapagingsimplifiedalbumobject)|
|401|Unauthorized|Bad or expired token. This can happen if the user revoked a token or<br>the access token has expired. You should re-authenticate the user.<br>|Inline|
|403|Forbidden|Bad OAuth request (wrong consumer key, bad nonce, expired<br>timestamp...). Unfortunately, re-authenticating the user won't help here.<br>|Inline|
|429|Too Many Requests|The app has exceeded its rate limits.<br>|Inline|

<h3 id="get-artists-albums-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth_2_0
</aside>

## Get Artist's Related Artists

<a id="opIdget-an-artists-related-artists"></a>

> Code samples

```bash
curl https://example.com/artists/0TnOYISbd1XYRBk9myaseg/related-artists \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /artists/{id}/related-artists`

Get Spotify catalog information about artists similar to a given artist. Similarity is based on analysis of the Spotify community's [listening history](http://news.spotify.com/se/2010/02/03/related-artists/).


<h3 id="get-artists-related-artists-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "artists": [
    {
      "external_urls": {
        "spotify": "string"
      },
      "followers": {
        "href": "string",
        "total": 0
      },
      "genres": [
        "Prog rock",
        "Grunge"
      ],
      "href": "string",
      "id": "string",
      "images": [
        {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
          "width": 300
        }
      ],
      "name": "string",
      "popularity": 0,
      "type": "artist",
      "uri": "string"
    }
  ]
}
```

> 401 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

<h3 id="get-artists-related-artists-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A set of artists|Inline|
|401|Unauthorized|Bad or expired token. This can happen if the user revoked a token or<br>the access token has expired. You should re-authenticate the user.<br>|Inline|
|403|Forbidden|Bad OAuth request (wrong consumer key, bad nonce, expired<br>timestamp...). Unfortunately, re-authenticating the user won't help here.<br>|Inline|
|429|Too Many Requests|The app has exceeded its rate limits.<br>|Inline|

<h3 id="get-artists-related-artists-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|artists|[[ArtistObject](#schemaartistobject)]|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth_2_0
</aside>

## Get Artist's Top Tracks

<a id="opIdget-an-artists-top-tracks"></a>

> Code samples

```bash
curl https://example.com/artists/0TnOYISbd1XYRBk9myaseg/top-tracks \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /artists/{id}/top-tracks`

Get Spotify catalog information about an artist's top tracks by country.


<h3 id="get-artists-top-tracks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|market|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "tracks": [
    {
      "album": {
        "album_type": "compilation",
        "available_markets": [
          "CA",
          "BR",
          "IT"
        ],
        "external_urls": {
          "spotify": "string"
        },
        "href": "string",
        "id": "2up3OPMp9Tb4dAKM2erWXQ",
        "images": [
          {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
            "width": 300
          }
        ],
        "name": "string",
        "release_date": "1981-12",
        "release_date_precision": "year",
        "restrictions": {
          "reason": "market"
        },
        "total_tracks": 9,
        "type": "album",
        "uri": "spotify:album:2up3OPMp9Tb4dAKM2erWXQ",
        "album_group": "compilation",
        "artists": [
          {
            "external_urls": {
              "spotify": "string"
            },
            "href": "string",
            "id": "string",
            "name": "string",
            "type": "artist",
            "uri": "string"
          }
        ]
      },
      "artists": [
        {
          "external_urls": {
            "spotify": "string"
          },
          "followers": {
            "href": "string",
            "total": 0
          },
          "genres": [
            "Prog rock",
            "Grunge"
          ],
          "href": "string",
          "id": "string",
          "images": [
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
              "width": 300
            }
          ],
          "name": "string",
          "popularity": 0,
          "type": "artist",
          "uri": "string"
        }
      ],
      "available_markets": [
        "string"
      ],
      "disc_number": 0,
      "duration_ms": 0,
      "explicit": true,
      "external_ids": {
        "ean": "string",
        "isrc": "string",
        "upc": "string"
      },
      "external_urls": {
        "spotify": "string"
      },
      "href": "string",
      "id": "string",
      "is_local": true,
      "is_playable": true,
      "linked_from": {
        "external_urls": {
          "spotify": "string"
        },
        "href": "string",
        "id": "string",
        "type": "string",
        "uri": "string"
      },
      "name": "string",
      "popularity": 0,
      "preview_url": "string",
      "restrictions": {
        "reason": "string"
      },
      "track_number": 0,
      "type": "track",
      "uri": "string"
    }
  ]
}
```

> 401 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

<h3 id="get-artists-top-tracks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A set of tracks|Inline|
|401|Unauthorized|Bad or expired token. This can happen if the user revoked a token or<br>the access token has expired. You should re-authenticate the user.<br>|Inline|
|403|Forbidden|Bad OAuth request (wrong consumer key, bad nonce, expired<br>timestamp...). Unfortunately, re-authenticating the user won't help here.<br>|Inline|
|429|Too Many Requests|The app has exceeded its rate limits.<br>|Inline|

<h3 id="get-artists-top-tracks-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tracks|[[TrackObject](#schematrackobject)]|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth_2_0
</aside>

<h1 id="spotify-web-api-with-fixes-and-improvements-from-sonallux-tracks">Tracks</h1>

## Get Track's Audio Analysis

<a id="opIdget-audio-analysis"></a>

> Code samples

```bash
curl https://example.com/audio-analysis/11dFghVXANMlKmJXsNCbNl \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /audio-analysis/{id}`

Get a low-level audio analysis for a track in the Spotify catalog. The audio analysis describes the track’s structure and musical content, including rhythm, pitch, and timbre.


<h3 id="get-tracks-audio-analysis-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "bars": [
    {
      "confidence": 0.925,
      "duration": 2.18749,
      "start": 0.49567
    }
  ],
  "beats": [
    {
      "confidence": 0.925,
      "duration": 2.18749,
      "start": 0.49567
    }
  ],
  "meta": {
    "analysis_time": 6.93906,
    "analyzer_version": "4.0.0",
    "detailed_status": "OK",
    "input_process": "libvorbisfile L+R 44100->22050",
    "platform": "Linux",
    "status_code": 0,
    "timestamp": 1495193577
  },
  "sections": [
    {
      "confidence": 1,
      "duration": 6.97092,
      "key": 9,
      "key_confidence": 0.297,
      "loudness": -14.938,
      "mode": -1,
      "mode_confidence": 0.471,
      "start": 0,
      "tempo": 113.178,
      "tempo_confidence": 0.647,
      "time_signature": 4,
      "time_signature_confidence": 1
    }
  ],
  "segments": [
    {
      "confidence": 0.435,
      "duration": 0.19891,
      "loudness_end": 0,
      "loudness_max": -14.25,
      "loudness_max_time": 0.07305,
      "loudness_start": -23.053,
      "pitches": [
        0.212,
        0.141,
        0.294
      ],
      "start": 0.70154,
      "timbre": [
        42.115,
        64.373,
        -0.233
      ]
    }
  ],
  "tatums": [
    {
      "confidence": 0.925,
      "duration": 2.18749,
      "start": 0.49567
    }
  ],
  "track": {
    "analysis_channels": 1,
    "analysis_sample_rate": 22050,
    "code_version": 3.15,
    "codestring": "string",
    "duration": 207.95985,
    "echoprint_version": 4.15,
    "echoprintstring": "string",
    "end_of_fade_in": 0,
    "key": 9,
    "key_confidence": 0.408,
    "loudness": -5.883,
    "mode": 0,
    "mode_confidence": 0.485,
    "num_samples": 4585515,
    "offset_seconds": 0,
    "rhythm_version": 1,
    "rhythmstring": "string",
    "sample_md5": "string",
    "start_of_fade_out": 201.13705,
    "synch_version": 1,
    "synchstring": "string",
    "tempo": 118.211,
    "tempo_confidence": 0.73,
    "time_signature": 4,
    "time_signature_confidence": 0.994,
    "window_seconds": 0
  }
}
```

> 401 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

<h3 id="get-tracks-audio-analysis-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Audio analysis for one track|[AudioAnalysisObject](#schemaaudioanalysisobject)|
|401|Unauthorized|Bad or expired token. This can happen if the user revoked a token or<br>the access token has expired. You should re-authenticate the user.<br>|Inline|
|403|Forbidden|Bad OAuth request (wrong consumer key, bad nonce, expired<br>timestamp...). Unfortunately, re-authenticating the user won't help here.<br>|Inline|
|429|Too Many Requests|The app has exceeded its rate limits.<br>|Inline|

<h3 id="get-tracks-audio-analysis-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth_2_0
</aside>

## Get Tracks' Audio Features

<a id="opIdget-several-audio-features"></a>

> Code samples

```bash
curl 'https://example.com/audio-features?ids=7ouMYWpwJ422jRcDASZB7P%2C4VqPOruhp5EdPBeR92t6lQ%2C2takcwOaAZWiXQijPHIx7B' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /audio-features`

Get audio features for multiple tracks based on their Spotify IDs.


<h3 id="get-tracks-audio-features-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ids|query|string|true|none|

> Example responses

> 200 Response

```json
{
  "audio_features": [
    {
      "acousticness": 0.00242,
      "analysis_url": "https://api.spotify.com/v1/audio-analysis/2takcwOaAZWiXQijPHIx7B\n",
      "danceability": 0.585,
      "duration_ms": 237040,
      "energy": 0.842,
      "id": "2takcwOaAZWiXQijPHIx7B",
      "instrumentalness": 0.00686,
      "key": 9,
      "liveness": 0.0866,
      "loudness": -5.883,
      "mode": 0,
      "speechiness": 0.0556,
      "tempo": 118.211,
      "time_signature": 4,
      "track_href": "https://api.spotify.com/v1/tracks/2takcwOaAZWiXQijPHIx7B\n",
      "type": "audio_features",
      "uri": "spotify:track:2takcwOaAZWiXQijPHIx7B",
      "valence": 0.428
    }
  ]
}
```

> 401 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

<h3 id="get-tracks-audio-features-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A set of audio features|Inline|
|401|Unauthorized|Bad or expired token. This can happen if the user revoked a token or<br>the access token has expired. You should re-authenticate the user.<br>|Inline|
|403|Forbidden|Bad OAuth request (wrong consumer key, bad nonce, expired<br>timestamp...). Unfortunately, re-authenticating the user won't help here.<br>|Inline|
|429|Too Many Requests|The app has exceeded its rate limits.<br>|Inline|

<h3 id="get-tracks-audio-features-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|audio_features|[[AudioFeaturesObject](#schemaaudiofeaturesobject)]|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth_2_0
</aside>

## Get Track's Audio Features

<a id="opIdget-audio-features"></a>

> Code samples

```bash
curl https://example.com/audio-features/11dFghVXANMlKmJXsNCbNl \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /audio-features/{id}`

Get audio feature information for a single track identified by its unique
Spotify ID.


<h3 id="get-tracks-audio-features-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "acousticness": 0.00242,
  "analysis_url": "https://api.spotify.com/v1/audio-analysis/2takcwOaAZWiXQijPHIx7B\n",
  "danceability": 0.585,
  "duration_ms": 237040,
  "energy": 0.842,
  "id": "2takcwOaAZWiXQijPHIx7B",
  "instrumentalness": 0.00686,
  "key": 9,
  "liveness": 0.0866,
  "loudness": -5.883,
  "mode": 0,
  "speechiness": 0.0556,
  "tempo": 118.211,
  "time_signature": 4,
  "track_href": "https://api.spotify.com/v1/tracks/2takcwOaAZWiXQijPHIx7B\n",
  "type": "audio_features",
  "uri": "spotify:track:2takcwOaAZWiXQijPHIx7B",
  "valence": 0.428
}
```

> 401 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

<h3 id="get-tracks-audio-features-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Audio features for one track|[AudioFeaturesObject](#schemaaudiofeaturesobject)|
|401|Unauthorized|Bad or expired token. This can happen if the user revoked a token or<br>the access token has expired. You should re-authenticate the user.<br>|Inline|
|403|Forbidden|Bad OAuth request (wrong consumer key, bad nonce, expired<br>timestamp...). Unfortunately, re-authenticating the user won't help here.<br>|Inline|
|429|Too Many Requests|The app has exceeded its rate limits.<br>|Inline|

<h3 id="get-tracks-audio-features-1-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth_2_0
</aside>

## Get User's Saved Tracks

<a id="opIdget-users-saved-tracks"></a>

> Code samples

```bash
curl https://example.com/me/tracks \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /me/tracks`

Get a list of the songs saved in the current Spotify user's 'Your Music' library.


<h3 id="get-users-saved-tracks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|market|query|string|false|none|
|limit|query|integer|false|none|
|offset|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "href": "https://api.spotify.com/v1/me/shows?offset=0&limit=20\n",
  "limit": 20,
  "next": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
  "offset": 0,
  "previous": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
  "total": 4,
  "items": [
    {
      "added_at": "1970-01-01T00:00:00Z",
      "track": {
        "album": {
          "album_type": "compilation",
          "available_markets": [
            "CA",
            "BR",
            "IT"
          ],
          "external_urls": {
            "spotify": "string"
          },
          "href": "string",
          "id": "2up3OPMp9Tb4dAKM2erWXQ",
          "images": [
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
              "width": 300
            }
          ],
          "name": "string",
          "release_date": "1981-12",
          "release_date_precision": "year",
          "restrictions": {
            "reason": "market"
          },
          "total_tracks": 9,
          "type": "album",
          "uri": "spotify:album:2up3OPMp9Tb4dAKM2erWXQ",
          "album_group": "compilation",
          "artists": [
            {
              "external_urls": {
                "spotify": "string"
              },
              "href": "string",
              "id": "string",
              "name": "string",
              "type": "artist",
              "uri": "string"
            }
          ]
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "string"
            },
            "followers": {
              "href": "string",
              "total": 0
            },
            "genres": [
              "Prog rock",
              "Grunge"
            ],
            "href": "string",
            "id": "string",
            "images": [
              {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
                "width": 300
              }
            ],
            "name": "string",
            "popularity": 0,
            "type": "artist",
            "uri": "string"
          }
        ],
        "available_markets": [
          "string"
        ],
        "disc_number": 0,
        "duration_ms": 0,
        "explicit": true,
        "external_ids": {
          "ean": "string",
          "isrc": "string",
          "upc": "string"
        },
        "external_urls": {
          "spotify": "string"
        },
        "href": "string",
        "id": "string",
        "is_local": true,
        "is_playable": true,
        "linked_from": {
          "external_urls": {
            "spotify": "string"
          },
          "href": "string",
          "id": "string",
          "type": "string",
          "uri": "string"
        },
        "name": "string",
        "popularity": 0,
        "preview_url": "string",
        "restrictions": {
          "reason": "string"
        },
        "track_number": 0,
        "type": "track",
        "uri": "string"
      }
    }
  ]
}
```

> 401 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

<h3 id="get-users-saved-tracks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Pages of tracks|[PagingSavedTrackObject](#schemapagingsavedtrackobject)|
|401|Unauthorized|Bad or expired token. This can happen if the user revoked a token or<br>the access token has expired. You should re-authenticate the user.<br>|Inline|
|403|Forbidden|Bad OAuth request (wrong consumer key, bad nonce, expired<br>timestamp...). Unfortunately, re-authenticating the user won't help here.<br>|Inline|
|429|Too Many Requests|The app has exceeded its rate limits.<br>|Inline|

<h3 id="get-users-saved-tracks-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth_2_0 ( Scopes: user-library-read )
</aside>

## Save Tracks for Current User

<a id="opIdsave-tracks-user"></a>

> Code samples

```bash
curl 'https://example.com/me/tracks?ids=7ouMYWpwJ422jRcDASZB7P%2C4VqPOruhp5EdPBeR92t6lQ%2C2takcwOaAZWiXQijPHIx7B' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "ids": [
      "string"
    ]
  }'
```

`PUT /me/tracks`

Save one or more tracks to the current user's 'Your Music' library.


> Body parameter

```json
{
  "ids": [
    "string"
  ]
}
```

<h3 id="save-tracks-for-current-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ids|query|string|true|none|
|body|body|object|false|none|
|» ids|body|[string]|true|A JSON array of the [Spotify IDs](/documentation/web-api/#spotify-uris-and-ids). For example: `["4iV5W9uYEdYUVa79Axb7Rh", "1301WleyT98MSxVHPZCA6M"]`<br/>A maximum of 50 items can be specified in one request. _**Note**: if the `ids` parameter is present in the query string, any IDs listed here in the body will be ignored._<br>|

> Example responses

> 401 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

<h3 id="save-tracks-for-current-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Track saved|None|
|401|Unauthorized|Bad or expired token. This can happen if the user revoked a token or<br>the access token has expired. You should re-authenticate the user.<br>|Inline|
|403|Forbidden|Bad OAuth request (wrong consumer key, bad nonce, expired<br>timestamp...). Unfortunately, re-authenticating the user won't help here.<br>|Inline|
|429|Too Many Requests|The app has exceeded its rate limits.<br>|Inline|

<h3 id="save-tracks-for-current-user-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth_2_0 ( Scopes: user-library-modify )
</aside>

## Remove User's Saved Tracks

<a id="opIdremove-tracks-user"></a>

> Code samples

```bash
curl 'https://example.com/me/tracks?ids=7ouMYWpwJ422jRcDASZB7P%2C4VqPOruhp5EdPBeR92t6lQ%2C2takcwOaAZWiXQijPHIx7B' \
  -X DELETE \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "ids": [
      "string"
    ]
  }'
```

`DELETE /me/tracks`

Remove one or more tracks from the current user's 'Your Music' library.


> Body parameter

```json
{
  "ids": [
    "string"
  ]
}
```

<h3 id="remove-users-saved-tracks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ids|query|string|true|none|
|body|body|object|false|none|
|» ids|body|[string]|false|A JSON array of the [Spotify IDs](/documentation/web-api/#spotify-uris-and-ids). For example: `["4iV5W9uYEdYUVa79Axb7Rh", "1301WleyT98MSxVHPZCA6M"]`<br/>A maximum of 50 items can be specified in one request. _**Note**: if the `ids` parameter is present in the query string, any IDs listed here in the body will be ignored._<br>|

> Example responses

> 401 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

<h3 id="remove-users-saved-tracks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Track removed|None|
|401|Unauthorized|Bad or expired token. This can happen if the user revoked a token or<br>the access token has expired. You should re-authenticate the user.<br>|Inline|
|403|Forbidden|Bad OAuth request (wrong consumer key, bad nonce, expired<br>timestamp...). Unfortunately, re-authenticating the user won't help here.<br>|Inline|
|429|Too Many Requests|The app has exceeded its rate limits.<br>|Inline|

<h3 id="remove-users-saved-tracks-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth_2_0 ( Scopes: user-library-modify )
</aside>

## Check User's Saved Tracks

<a id="opIdcheck-users-saved-tracks"></a>

> Code samples

```bash
curl 'https://example.com/me/tracks/contains?ids=7ouMYWpwJ422jRcDASZB7P%2C4VqPOruhp5EdPBeR92t6lQ%2C2takcwOaAZWiXQijPHIx7B' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /me/tracks/contains`

Check if one or more tracks is already saved in the current Spotify user's 'Your Music' library.


<h3 id="check-users-saved-tracks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ids|query|string|true|none|

> Example responses

> 200 Response

```json
[
  false,
  true
]
```

> 401 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

<h3 id="check-users-saved-tracks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Array of booleans|Inline|
|401|Unauthorized|Bad or expired token. This can happen if the user revoked a token or<br>the access token has expired. You should re-authenticate the user.<br>|Inline|
|403|Forbidden|Bad OAuth request (wrong consumer key, bad nonce, expired<br>timestamp...). Unfortunately, re-authenticating the user won't help here.<br>|Inline|
|429|Too Many Requests|The app has exceeded its rate limits.<br>|Inline|

<h3 id="check-users-saved-tracks-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[boolean]|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth_2_0 ( Scopes: user-library-read )
</aside>

## Get Recommendations

<a id="opIdget-recommendations"></a>

> Code samples

```bash
curl https://example.com/recommendations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /recommendations`

Recommendations are generated based on the available information for a given seed entity and matched against similar artists and tracks. If there is sufficient information about the provided seeds, a list of tracks will be returned together with pool size details.

For artists and tracks that are very new or obscure there might not be enough data to generate a list of tracks.


<h3 id="get-recommendations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|none|
|market|query|string|false|none|
|seed_artists|query|string|false|none|
|seed_genres|query|string|false|none|
|seed_tracks|query|string|false|none|
|min_acousticness|query|number|false|none|
|max_acousticness|query|number|false|none|
|target_acousticness|query|number|false|none|
|min_danceability|query|number|false|none|
|max_danceability|query|number|false|none|
|target_danceability|query|number|false|none|
|min_duration_ms|query|integer|false|none|
|max_duration_ms|query|integer|false|none|
|target_duration_ms|query|integer|false|none|
|min_energy|query|number|false|none|
|max_energy|query|number|false|none|
|target_energy|query|number|false|none|
|min_instrumentalness|query|number|false|none|
|max_instrumentalness|query|number|false|none|
|target_instrumentalness|query|number|false|none|
|min_key|query|integer|false|none|
|max_key|query|integer|false|none|
|target_key|query|integer|false|none|
|min_liveness|query|number|false|none|
|max_liveness|query|number|false|none|
|target_liveness|query|number|false|none|
|min_loudness|query|number|false|none|
|max_loudness|query|number|false|none|
|target_loudness|query|number|false|none|
|min_mode|query|integer|false|none|
|max_mode|query|integer|false|none|
|target_mode|query|integer|false|none|
|min_popularity|query|integer|false|none|
|max_popularity|query|integer|false|none|
|target_popularity|query|integer|false|none|
|min_speechiness|query|number|false|none|
|max_speechiness|query|number|false|none|
|target_speechiness|query|number|false|none|
|min_tempo|query|number|false|none|
|max_tempo|query|number|false|none|
|target_tempo|query|number|false|none|
|min_time_signature|query|integer|false|none|
|max_time_signature|query|integer|false|none|
|target_time_signature|query|integer|false|none|
|min_valence|query|number|false|none|
|max_valence|query|number|false|none|
|target_valence|query|number|false|none|

> Example responses

> 200 Response

```json
{
  "seeds": [
    {
      "afterFilteringSize": 0,
      "afterRelinkingSize": 0,
      "href": "string",
      "id": "string",
      "initialPoolSize": 0,
      "type": "string"
    }
  ],
  "tracks": [
    {
      "album": {
        "album_type": "compilation",
        "available_markets": [
          "CA",
          "BR",
          "IT"
        ],
        "external_urls": {
          "spotify": "string"
        },
        "href": "string",
        "id": "2up3OPMp9Tb4dAKM2erWXQ",
        "images": [
          {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
            "width": 300
          }
        ],
        "name": "string",
        "release_date": "1981-12",
        "release_date_precision": "year",
        "restrictions": {
          "reason": "market"
        },
        "total_tracks": 9,
        "type": "album",
        "uri": "spotify:album:2up3OPMp9Tb4dAKM2erWXQ",
        "album_group": "compilation",
        "artists": [
          {
            "external_urls": {
              "spotify": "string"
            },
            "href": "string",
            "id": "string",
            "name": "string",
            "type": "artist",
            "uri": "string"
          }
        ]
      },
      "artists": [
        {
          "external_urls": {
            "spotify": "string"
          },
          "followers": {
            "href": "string",
            "total": 0
          },
          "genres": [
            "Prog rock",
            "Grunge"
          ],
          "href": "string",
          "id": "string",
          "images": [
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
              "width": 300
            }
          ],
          "name": "string",
          "popularity": 0,
          "type": "artist",
          "uri": "string"
        }
      ],
      "available_markets": [
        "string"
      ],
      "disc_number": 0,
      "duration_ms": 0,
      "explicit": true,
      "external_ids": {
        "ean": "string",
        "isrc": "string",
        "upc": "string"
      },
      "external_urls": {
        "spotify": "string"
      },
      "href": "string",
      "id": "string",
      "is_local": true,
      "is_playable": true,
      "linked_from": {
        "external_urls": {
          "spotify": "string"
        },
        "href": "string",
        "id": "string",
        "type": "string",
        "uri": "string"
      },
      "name": "string",
      "popularity": 0,
      "preview_url": "string",
      "restrictions": {
        "reason": "string"
      },
      "track_number": 0,
      "type": "track",
      "uri": "string"
    }
  ]
}
```

> 401 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

<h3 id="get-recommendations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A set of recommendations|[RecommendationsObject](#schemarecommendationsobject)|
|401|Unauthorized|Bad or expired token. This can happen if the user revoked a token or<br>the access token has expired. You should re-authenticate the user.<br>|Inline|
|403|Forbidden|Bad OAuth request (wrong consumer key, bad nonce, expired<br>timestamp...). Unfortunately, re-authenticating the user won't help here.<br>|Inline|
|429|Too Many Requests|The app has exceeded its rate limits.<br>|Inline|

<h3 id="get-recommendations-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth_2_0
</aside>

## Get Several Tracks

<a id="opIdget-several-tracks"></a>

> Code samples

```bash
curl 'https://example.com/tracks?ids=7ouMYWpwJ422jRcDASZB7P%2C4VqPOruhp5EdPBeR92t6lQ%2C2takcwOaAZWiXQijPHIx7B' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /tracks`

Get Spotify catalog information for multiple tracks based on their Spotify IDs.


<h3 id="get-several-tracks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|market|query|string|false|none|
|ids|query|string|true|none|

> Example responses

> 200 Response

```json
{
  "tracks": [
    {
      "album": {
        "album_type": "compilation",
        "available_markets": [
          "CA",
          "BR",
          "IT"
        ],
        "external_urls": {
          "spotify": "string"
        },
        "href": "string",
        "id": "2up3OPMp9Tb4dAKM2erWXQ",
        "images": [
          {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
            "width": 300
          }
        ],
        "name": "string",
        "release_date": "1981-12",
        "release_date_precision": "year",
        "restrictions": {
          "reason": "market"
        },
        "total_tracks": 9,
        "type": "album",
        "uri": "spotify:album:2up3OPMp9Tb4dAKM2erWXQ",
        "album_group": "compilation",
        "artists": [
          {
            "external_urls": {
              "spotify": "string"
            },
            "href": "string",
            "id": "string",
            "name": "string",
            "type": "artist",
            "uri": "string"
          }
        ]
      },
      "artists": [
        {
          "external_urls": {
            "spotify": "string"
          },
          "followers": {
            "href": "string",
            "total": 0
          },
          "genres": [
            "Prog rock",
            "Grunge"
          ],
          "href": "string",
          "id": "string",
          "images": [
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
              "width": 300
            }
          ],
          "name": "string",
          "popularity": 0,
          "type": "artist",
          "uri": "string"
        }
      ],
      "available_markets": [
        "string"
      ],
      "disc_number": 0,
      "duration_ms": 0,
      "explicit": true,
      "external_ids": {
        "ean": "string",
        "isrc": "string",
        "upc": "string"
      },
      "external_urls": {
        "spotify": "string"
      },
      "href": "string",
      "id": "string",
      "is_local": true,
      "is_playable": true,
      "linked_from": {
        "external_urls": {
          "spotify": "string"
        },
        "href": "string",
        "id": "string",
        "type": "string",
        "uri": "string"
      },
      "name": "string",
      "popularity": 0,
      "preview_url": "string",
      "restrictions": {
        "reason": "string"
      },
      "track_number": 0,
      "type": "track",
      "uri": "string"
    }
  ]
}
```

> 401 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

<h3 id="get-several-tracks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A set of tracks|Inline|
|401|Unauthorized|Bad or expired token. This can happen if the user revoked a token or<br>the access token has expired. You should re-authenticate the user.<br>|Inline|
|403|Forbidden|Bad OAuth request (wrong consumer key, bad nonce, expired<br>timestamp...). Unfortunately, re-authenticating the user won't help here.<br>|Inline|
|429|Too Many Requests|The app has exceeded its rate limits.<br>|Inline|

<h3 id="get-several-tracks-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tracks|[[TrackObject](#schematrackobject)]|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth_2_0
</aside>

## Get Track

<a id="opIdget-track"></a>

> Code samples

```bash
curl https://example.com/tracks/11dFghVXANMlKmJXsNCbNl \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /tracks/{id}`

Get Spotify catalog information for a single track identified by its
unique Spotify ID.


<h3 id="get-track-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|market|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "album": {
    "album_type": "compilation",
    "available_markets": [
      "CA",
      "BR",
      "IT"
    ],
    "external_urls": {
      "spotify": "string"
    },
    "href": "string",
    "id": "2up3OPMp9Tb4dAKM2erWXQ",
    "images": [
      {
        "height": 300,
        "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
        "width": 300
      }
    ],
    "name": "string",
    "release_date": "1981-12",
    "release_date_precision": "year",
    "restrictions": {
      "reason": "market"
    },
    "total_tracks": 9,
    "type": "album",
    "uri": "spotify:album:2up3OPMp9Tb4dAKM2erWXQ",
    "album_group": "compilation",
    "artists": [
      {
        "external_urls": {
          "spotify": "string"
        },
        "href": "string",
        "id": "string",
        "name": "string",
        "type": "artist",
        "uri": "string"
      }
    ]
  },
  "artists": [
    {
      "external_urls": {
        "spotify": "string"
      },
      "followers": {
        "href": "string",
        "total": 0
      },
      "genres": [
        "Prog rock",
        "Grunge"
      ],
      "href": "string",
      "id": "string",
      "images": [
        {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
          "width": 300
        }
      ],
      "name": "string",
      "popularity": 0,
      "type": "artist",
      "uri": "string"
    }
  ],
  "available_markets": [
    "string"
  ],
  "disc_number": 0,
  "duration_ms": 0,
  "explicit": true,
  "external_ids": {
    "ean": "string",
    "isrc": "string",
    "upc": "string"
  },
  "external_urls": {
    "spotify": "string"
  },
  "href": "string",
  "id": "string",
  "is_local": true,
  "is_playable": true,
  "linked_from": {
    "external_urls": {
      "spotify": "string"
    },
    "href": "string",
    "id": "string",
    "type": "string",
    "uri": "string"
  },
  "name": "string",
  "popularity": 0,
  "preview_url": "string",
  "restrictions": {
    "reason": "string"
  },
  "track_number": 0,
  "type": "track",
  "uri": "string"
}
```

> 401 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

<h3 id="get-track-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A track|[TrackObject](#schematrackobject)|
|401|Unauthorized|Bad or expired token. This can happen if the user revoked a token or<br>the access token has expired. You should re-authenticate the user.<br>|Inline|
|403|Forbidden|Bad OAuth request (wrong consumer key, bad nonce, expired<br>timestamp...). Unfortunately, re-authenticating the user won't help here.<br>|Inline|
|429|Too Many Requests|The app has exceeded its rate limits.<br>|Inline|

<h3 id="get-track-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth_2_0
</aside>

<h1 id="spotify-web-api-with-fixes-and-improvements-from-sonallux-audiobooks">Audiobooks</h1>

## Get Several Audiobooks

<a id="opIdget-multiple-audiobooks"></a>

> Code samples

```bash
curl 'https://example.com/audiobooks?ids=18yVqkdbdRvS24c0Ilj2ci%2C1HGw3J3NxZO1TP1BTtVhpZ%2C7iHfbu1YPACw6oZPAFJtqe' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /audiobooks`

Get Spotify catalog information for several audiobooks identified by their Spotify IDs.<br />
**Note: Audiobooks are only available for the US, UK, Ireland, New Zealand and Australia markets.**


<h3 id="get-several-audiobooks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ids|query|string|true|none|
|market|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "audiobooks": [
    {
      "authors": [
        {
          "name": "string"
        }
      ],
      "available_markets": [
        "string"
      ],
      "copyrights": [
        {
          "text": "string",
          "type": "string"
        }
      ],
      "description": "string",
      "edition": "Unabridged",
      "explicit": true,
      "external_urls": {
        "spotify": "string"
      },
      "href": "string",
      "html_description": "string",
      "id": "string",
      "images": [
        {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
          "width": 300
        }
      ],
      "languages": [
        "string"
      ],
      "media_type": "string",
      "name": "string",
      "narrators": [
        {
          "name": "string"
        }
      ],
      "publisher": "string",
      "total_chapters": 0,
      "type": "audiobook",
      "uri": "string",
      "chapters": {
        "href": "https://api.spotify.com/v1/me/shows?offset=0&limit=20\n",
        "limit": 20,
        "next": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
        "offset": 0,
        "previous": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
        "total": 4,
        "items": [
          {
            "audio_preview_url": "https://p.scdn.co/mp3-preview/2f37da1d4221f40b9d1a98cd191f4d6f1646ad17",
            "available_markets": [
              "string"
            ],
            "chapter_number": 1,
            "description": "A Spotify podcast sharing fresh insights on important topics of the moment—in a way only Spotify can. You’ll hear from experts in the music, podcast and tech industries as we discover and uncover stories about our work and the world around us.\n",
            "duration_ms": 1686230,
            "explicit": true,
            "external_urls": {
              "spotify": "string"
            },
            "href": "https://api.spotify.com/v1/episodes/5Xt5DXGzch68nYYamXrNxZ",
            "html_description": "<p>A Spotify podcast sharing fresh insights on important topics of the moment—in a way only Spotify can. You’ll hear from experts in the music, podcast and tech industries as we discover and uncover stories about our work and the world around us.</p>\n",
            "id": "5Xt5DXGzch68nYYamXrNxZ",
            "images": [
              {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
                "width": 300
              }
            ],
            "is_playable": true,
            "languages": [
              "fr",
              "en"
            ],
            "name": "Starting Your Own Podcast: Tips, Tricks, and Advice From Anchor Creators\n",
            "release_date": "1981-12-15",
            "release_date_precision": "day",
            "restrictions": {
              "reason": "string"
            },
            "resume_point": {
              "fully_played": true,
              "resume_position_ms": 0
            },
            "type": "episode",
            "uri": "spotify:episode:0zLhl3WsOCQHbe1BPTiHgr"
          }
        ]
      }
    }
  ]
}
```

> 401 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

<h3 id="get-several-audiobooks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A set of audiobooks|Inline|
|401|Unauthorized|Bad or expired token. This can happen if the user revoked a token or<br>the access token has expired. You should re-authenticate the user.<br>|Inline|
|403|Forbidden|Bad OAuth request (wrong consumer key, bad nonce, expired<br>timestamp...). Unfortunately, re-authenticating the user won't help here.<br>|Inline|
|429|Too Many Requests|The app has exceeded its rate limits.<br>|Inline|

<h3 id="get-several-audiobooks-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|audiobooks|[[AudiobookObject](#schemaaudiobookobject)]|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth_2_0
</aside>

## Get an Audiobook

<a id="opIdget-an-audiobook"></a>

> Code samples

```bash
curl https://example.com/audiobooks/7iHfbu1YPACw6oZPAFJtqe \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /audiobooks/{id}`

Get Spotify catalog information for a single audiobook.<br />
**Note: Audiobooks are only available for the US, UK, Ireland, New Zealand and Australia markets.**


<h3 id="get-an-audiobook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|market|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "authors": [
    {
      "name": "string"
    }
  ],
  "available_markets": [
    "string"
  ],
  "copyrights": [
    {
      "text": "string",
      "type": "string"
    }
  ],
  "description": "string",
  "edition": "Unabridged",
  "explicit": true,
  "external_urls": {
    "spotify": "string"
  },
  "href": "string",
  "html_description": "string",
  "id": "string",
  "images": [
    {
      "height": 300,
      "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
      "width": 300
    }
  ],
  "languages": [
    "string"
  ],
  "media_type": "string",
  "name": "string",
  "narrators": [
    {
      "name": "string"
    }
  ],
  "publisher": "string",
  "total_chapters": 0,
  "type": "audiobook",
  "uri": "string",
  "chapters": {
    "href": "https://api.spotify.com/v1/me/shows?offset=0&limit=20\n",
    "limit": 20,
    "next": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
    "offset": 0,
    "previous": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
    "total": 4,
    "items": [
      {
        "audio_preview_url": "https://p.scdn.co/mp3-preview/2f37da1d4221f40b9d1a98cd191f4d6f1646ad17",
        "available_markets": [
          "string"
        ],
        "chapter_number": 1,
        "description": "A Spotify podcast sharing fresh insights on important topics of the moment—in a way only Spotify can. You’ll hear from experts in the music, podcast and tech industries as we discover and uncover stories about our work and the world around us.\n",
        "duration_ms": 1686230,
        "explicit": true,
        "external_urls": {
          "spotify": "string"
        },
        "href": "https://api.spotify.com/v1/episodes/5Xt5DXGzch68nYYamXrNxZ",
        "html_description": "<p>A Spotify podcast sharing fresh insights on important topics of the moment—in a way only Spotify can. You’ll hear from experts in the music, podcast and tech industries as we discover and uncover stories about our work and the world around us.</p>\n",
        "id": "5Xt5DXGzch68nYYamXrNxZ",
        "images": [
          {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
            "width": 300
          }
        ],
        "is_playable": true,
        "languages": [
          "fr",
          "en"
        ],
        "name": "Starting Your Own Podcast: Tips, Tricks, and Advice From Anchor Creators\n",
        "release_date": "1981-12-15",
        "release_date_precision": "day",
        "restrictions": {
          "reason": "string"
        },
        "resume_point": {
          "fully_played": true,
          "resume_position_ms": 0
        },
        "type": "episode",
        "uri": "spotify:episode:0zLhl3WsOCQHbe1BPTiHgr"
      }
    ]
  }
}
```

> 401 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

<h3 id="get-an-audiobook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|An Audiobook|[AudiobookObject](#schemaaudiobookobject)|
|401|Unauthorized|Bad or expired token. This can happen if the user revoked a token or<br>the access token has expired. You should re-authenticate the user.<br>|Inline|
|403|Forbidden|Bad OAuth request (wrong consumer key, bad nonce, expired<br>timestamp...). Unfortunately, re-authenticating the user won't help here.<br>|Inline|
|429|Too Many Requests|The app has exceeded its rate limits.<br>|Inline|

<h3 id="get-an-audiobook-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth_2_0
</aside>

## Get Audiobook Chapters

<a id="opIdget-audiobook-chapters"></a>

> Code samples

```bash
curl https://example.com/audiobooks/7iHfbu1YPACw6oZPAFJtqe/chapters \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /audiobooks/{id}/chapters`

Get Spotify catalog information about an audiobook's chapters.<br />
**Note: Audiobooks are only available for the US, UK, Ireland, New Zealand and Australia markets.**


<h3 id="get-audiobook-chapters-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|market|query|string|false|none|
|limit|query|integer|false|none|
|offset|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "href": "https://api.spotify.com/v1/me/shows?offset=0&limit=20\n",
  "limit": 20,
  "next": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
  "offset": 0,
  "previous": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
  "total": 4,
  "items": [
    {
      "audio_preview_url": "https://p.scdn.co/mp3-preview/2f37da1d4221f40b9d1a98cd191f4d6f1646ad17",
      "available_markets": [
        "string"
      ],
      "chapter_number": 1,
      "description": "A Spotify podcast sharing fresh insights on important topics of the moment—in a way only Spotify can. You’ll hear from experts in the music, podcast and tech industries as we discover and uncover stories about our work and the world around us.\n",
      "duration_ms": 1686230,
      "explicit": true,
      "external_urls": {
        "spotify": "string"
      },
      "href": "https://api.spotify.com/v1/episodes/5Xt5DXGzch68nYYamXrNxZ",
      "html_description": "<p>A Spotify podcast sharing fresh insights on important topics of the moment—in a way only Spotify can. You’ll hear from experts in the music, podcast and tech industries as we discover and uncover stories about our work and the world around us.</p>\n",
      "id": "5Xt5DXGzch68nYYamXrNxZ",
      "images": [
        {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
          "width": 300
        }
      ],
      "is_playable": true,
      "languages": [
        "fr",
        "en"
      ],
      "name": "Starting Your Own Podcast: Tips, Tricks, and Advice From Anchor Creators\n",
      "release_date": "1981-12-15",
      "release_date_precision": "day",
      "restrictions": {
        "reason": "string"
      },
      "resume_point": {
        "fully_played": true,
        "resume_position_ms": 0
      },
      "type": "episode",
      "uri": "spotify:episode:0zLhl3WsOCQHbe1BPTiHgr"
    }
  ]
}
```

> 401 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

<h3 id="get-audiobook-chapters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Pages of chapters|[PagingSimplifiedChapterObject](#schemapagingsimplifiedchapterobject)|
|401|Unauthorized|Bad or expired token. This can happen if the user revoked a token or<br>the access token has expired. You should re-authenticate the user.<br>|Inline|
|403|Forbidden|Bad OAuth request (wrong consumer key, bad nonce, expired<br>timestamp...). Unfortunately, re-authenticating the user won't help here.<br>|Inline|
|429|Too Many Requests|The app has exceeded its rate limits.<br>|Inline|

<h3 id="get-audiobook-chapters-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth_2_0
</aside>

## Get User's Saved Audiobooks

<a id="opIdget-users-saved-audiobooks"></a>

> Code samples

```bash
curl https://example.com/me/audiobooks \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /me/audiobooks`

Get a list of the audiobooks saved in the current Spotify user's 'Your Music' library.


<h3 id="get-users-saved-audiobooks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|none|
|offset|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "href": "https://api.spotify.com/v1/me/shows?offset=0&limit=20\n",
  "limit": 20,
  "next": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
  "offset": 0,
  "previous": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
  "total": 4,
  "items": [
    {
      "added_at": "1970-01-01T00:00:00Z",
      "audiobook": {
        "authors": [
          {
            "name": "string"
          }
        ],
        "available_markets": [
          "string"
        ],
        "copyrights": [
          {
            "text": "string",
            "type": "string"
          }
        ],
        "description": "string",
        "edition": "Unabridged",
        "explicit": true,
        "external_urls": {
          "spotify": "string"
        },
        "href": "string",
        "html_description": "string",
        "id": "string",
        "images": [
          {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
            "width": 300
          }
        ],
        "languages": [
          "string"
        ],
        "media_type": "string",
        "name": "string",
        "narrators": [
          {
            "name": "string"
          }
        ],
        "publisher": "string",
        "total_chapters": 0,
        "type": "audiobook",
        "uri": "string",
        "chapters": {
          "href": "https://api.spotify.com/v1/me/shows?offset=0&limit=20\n",
          "limit": 20,
          "next": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
          "offset": 0,
          "previous": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
          "total": 4,
          "items": [
            {
              "audio_preview_url": "https://p.scdn.co/mp3-preview/2f37da1d4221f40b9d1a98cd191f4d6f1646ad17",
              "available_markets": [
                "string"
              ],
              "chapter_number": 1,
              "description": "A Spotify podcast sharing fresh insights on important topics of the moment—in a way only Spotify can. You’ll hear from experts in the music, podcast and tech industries as we discover and uncover stories about our work and the world around us.\n",
              "duration_ms": 1686230,
              "explicit": true,
              "external_urls": {
                "spotify": "string"
              },
              "href": "https://api.spotify.com/v1/episodes/5Xt5DXGzch68nYYamXrNxZ",
              "html_description": "<p>A Spotify podcast sharing fresh insights on important topics of the moment—in a way only Spotify can. You’ll hear from experts in the music, podcast and tech industries as we discover and uncover stories about our work and the world around us.</p>\n",
              "id": "5Xt5DXGzch68nYYamXrNxZ",
              "images": [
                {
                  "height": 300,
                  "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
                  "width": 300
                }
              ],
              "is_playable": true,
              "languages": [
                "fr",
                "en"
              ],
              "name": "Starting Your Own Podcast: Tips, Tricks, and Advice From Anchor Creators\n",
              "release_date": "1981-12-15",
              "release_date_precision": "day",
              "restrictions": {
                "reason": "string"
              },
              "resume_point": {
                "fully_played": true,
                "resume_position_ms": 0
              },
              "type": "episode",
              "uri": "spotify:episode:0zLhl3WsOCQHbe1BPTiHgr"
            }
          ]
        }
      }
    }
  ]
}
```

> 401 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

<h3 id="get-users-saved-audiobooks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Pages of saved audiobooks|[PagingSavedAudiobookObject](#schemapagingsavedaudiobookobject)|
|401|Unauthorized|Bad or expired token. This can happen if the user revoked a token or<br>the access token has expired. You should re-authenticate the user.<br>|Inline|
|403|Forbidden|Bad OAuth request (wrong consumer key, bad nonce, expired<br>timestamp...). Unfortunately, re-authenticating the user won't help here.<br>|Inline|
|429|Too Many Requests|The app has exceeded its rate limits.<br>|Inline|

<h3 id="get-users-saved-audiobooks-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth_2_0 ( Scopes: user-library-read )
</aside>

## Save Audiobooks for Current User

<a id="opIdsave-audiobooks-user"></a>

> Code samples

```bash
curl 'https://example.com/me/audiobooks?ids=18yVqkdbdRvS24c0Ilj2ci%2C1HGw3J3NxZO1TP1BTtVhpZ%2C7iHfbu1YPACw6oZPAFJtqe' \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /me/audiobooks`

Save one or more audiobooks to the current Spotify user's library.


<h3 id="save-audiobooks-for-current-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ids|query|string|true|none|

> Example responses

> 401 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

<h3 id="save-audiobooks-for-current-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Audiobook(s) are saved to the library|None|
|401|Unauthorized|Bad or expired token. This can happen if the user revoked a token or<br>the access token has expired. You should re-authenticate the user.<br>|Inline|
|403|Forbidden|Bad OAuth request (wrong consumer key, bad nonce, expired<br>timestamp...). Unfortunately, re-authenticating the user won't help here.<br>|Inline|
|429|Too Many Requests|The app has exceeded its rate limits.<br>|Inline|

<h3 id="save-audiobooks-for-current-user-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth_2_0 ( Scopes: user-library-modify )
</aside>

## Remove User's Saved Audiobooks

<a id="opIdremove-audiobooks-user"></a>

> Code samples

```bash
curl 'https://example.com/me/audiobooks?ids=18yVqkdbdRvS24c0Ilj2ci%2C1HGw3J3NxZO1TP1BTtVhpZ%2C7iHfbu1YPACw6oZPAFJtqe' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /me/audiobooks`

Remove one or more audiobooks from the Spotify user's library.


<h3 id="remove-users-saved-audiobooks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ids|query|string|true|none|

> Example responses

> 401 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

<h3 id="remove-users-saved-audiobooks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Audiobook(s) have been removed from the library|None|
|401|Unauthorized|Bad or expired token. This can happen if the user revoked a token or<br>the access token has expired. You should re-authenticate the user.<br>|Inline|
|403|Forbidden|Bad OAuth request (wrong consumer key, bad nonce, expired<br>timestamp...). Unfortunately, re-authenticating the user won't help here.<br>|Inline|
|429|Too Many Requests|The app has exceeded its rate limits.<br>|Inline|

<h3 id="remove-users-saved-audiobooks-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth_2_0 ( Scopes: user-library-modify )
</aside>

## Check User's Saved Audiobooks

<a id="opIdcheck-users-saved-audiobooks"></a>

> Code samples

```bash
curl 'https://example.com/me/audiobooks/contains?ids=18yVqkdbdRvS24c0Ilj2ci%2C1HGw3J3NxZO1TP1BTtVhpZ%2C7iHfbu1YPACw6oZPAFJtqe' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /me/audiobooks/contains`

Check if one or more audiobooks are already saved in the current Spotify user's library.


<h3 id="check-users-saved-audiobooks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ids|query|string|true|none|

> Example responses

> 200 Response

```json
[
  false,
  true
]
```

> 401 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

<h3 id="check-users-saved-audiobooks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Array of booleans|Inline|
|401|Unauthorized|Bad or expired token. This can happen if the user revoked a token or<br>the access token has expired. You should re-authenticate the user.<br>|Inline|
|403|Forbidden|Bad OAuth request (wrong consumer key, bad nonce, expired<br>timestamp...). Unfortunately, re-authenticating the user won't help here.<br>|Inline|
|429|Too Many Requests|The app has exceeded its rate limits.<br>|Inline|

<h3 id="check-users-saved-audiobooks-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[boolean]|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth_2_0 ( Scopes: user-library-read )
</aside>

<h1 id="spotify-web-api-with-fixes-and-improvements-from-sonallux-categories">Categories</h1>

## Get Several Browse Categories

<a id="opIdget-categories"></a>

> Code samples

```bash
curl https://example.com/browse/categories \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /browse/categories`

Get a list of categories used to tag items in Spotify (on, for example, the Spotify player’s “Browse” tab).


<h3 id="get-several-browse-categories-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|country|query|string|false|none|
|locale|query|string|false|none|
|limit|query|integer|false|none|
|offset|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "categories": {
    "href": "https://api.spotify.com/v1/me/shows?offset=0&limit=20\n",
    "limit": 20,
    "next": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
    "offset": 0,
    "previous": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
    "total": 4,
    "items": [
      {
        "href": "string",
        "icons": [
          {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
            "width": 300
          }
        ],
        "id": "equal",
        "name": "EQUAL"
      }
    ]
  }
}
```

> 401 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

<h3 id="get-several-browse-categories-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A paged set of categories|Inline|
|401|Unauthorized|Bad or expired token. This can happen if the user revoked a token or<br>the access token has expired. You should re-authenticate the user.<br>|Inline|
|403|Forbidden|Bad OAuth request (wrong consumer key, bad nonce, expired<br>timestamp...). Unfortunately, re-authenticating the user won't help here.<br>|Inline|
|429|Too Many Requests|The app has exceeded its rate limits.<br>|Inline|

<h3 id="get-several-browse-categories-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|categories|object|true|none|none|
|» href|string|true|none|A link to the Web API endpoint returning the full result of the request<br>|
|» limit|integer|true|none|The maximum number of items in the response (as set in the query or by default).<br>|
|» next|string \| null|true|none|URL to the next page of items. ( `null` if none)<br>|
|» offset|integer|true|none|The offset of the items returned (as set in the query or by default)<br>|
|» previous|string \| null|true|none|URL to the previous page of items. ( `null` if none)<br>|
|» total|integer|true|none|The total number of items available to return.<br>|
|» items|[[CategoryObject](#schemacategoryobject)]|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth_2_0
</aside>

## Get Single Browse Category

<a id="opIdget-a-category"></a>

> Code samples

```bash
curl https://example.com/browse/categories/dinner \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /browse/categories/{category_id}`

Get a single category used to tag items in Spotify (on, for example, the Spotify player’s “Browse” tab).


<h3 id="get-single-browse-category-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|category_id|path|string|true|none|
|country|query|string|false|none|
|locale|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "href": "string",
  "icons": [
    {
      "height": 300,
      "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
      "width": 300
    }
  ],
  "id": "equal",
  "name": "EQUAL"
}
```

> 401 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

<h3 id="get-single-browse-category-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A category|[CategoryObject](#schemacategoryobject)|
|401|Unauthorized|Bad or expired token. This can happen if the user revoked a token or<br>the access token has expired. You should re-authenticate the user.<br>|Inline|
|403|Forbidden|Bad OAuth request (wrong consumer key, bad nonce, expired<br>timestamp...). Unfortunately, re-authenticating the user won't help here.<br>|Inline|
|429|Too Many Requests|The app has exceeded its rate limits.<br>|Inline|

<h3 id="get-single-browse-category-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth_2_0
</aside>

<h1 id="spotify-web-api-with-fixes-and-improvements-from-sonallux-playlists">Playlists</h1>

## Get Category's Playlists

<a id="opIdget-a-categories-playlists"></a>

> Code samples

```bash
curl https://example.com/browse/categories/dinner/playlists \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /browse/categories/{category_id}/playlists`

Get a list of Spotify playlists tagged with a particular category.


<h3 id="get-categorys-playlists-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|category_id|path|string|true|none|
|country|query|string|false|none|
|limit|query|integer|false|none|
|offset|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "message": "string",
  "playlists": {
    "href": "https://api.spotify.com/v1/me/shows?offset=0&limit=20\n",
    "limit": 20,
    "next": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
    "offset": 0,
    "previous": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
    "total": 4,
    "items": [
      {
        "collaborative": true,
        "description": "string",
        "external_urls": {
          "spotify": "string"
        },
        "href": "string",
        "id": "string",
        "images": [
          {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
            "width": 300
          }
        ],
        "name": "string",
        "owner": {
          "external_urls": {
            "spotify": "string"
          },
          "followers": {
            "href": "string",
            "total": 0
          },
          "href": "string",
          "id": "string",
          "type": "user",
          "uri": "string",
          "display_name": "string"
        },
        "public": true,
        "snapshot_id": "string",
        "tracks": {
          "href": "string",
          "total": 0
        },
        "type": "string",
        "uri": "string"
      }
    ]
  }
}
```

> 401 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

<h3 id="get-categorys-playlists-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A paged set of playlists|[PagingFeaturedPlaylistObject](#schemapagingfeaturedplaylistobject)|
|401|Unauthorized|Bad or expired token. This can happen if the user revoked a token or<br>the access token has expired. You should re-authenticate the user.<br>|Inline|
|403|Forbidden|Bad OAuth request (wrong consumer key, bad nonce, expired<br>timestamp...). Unfortunately, re-authenticating the user won't help here.<br>|Inline|
|429|Too Many Requests|The app has exceeded its rate limits.<br>|Inline|

<h3 id="get-categorys-playlists-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth_2_0
</aside>

## Get Featured Playlists

<a id="opIdget-featured-playlists"></a>

> Code samples

```bash
curl https://example.com/browse/featured-playlists \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /browse/featured-playlists`

Get a list of Spotify featured playlists (shown, for example, on a Spotify player's 'Browse' tab).


<h3 id="get-featured-playlists-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|country|query|string|false|none|
|locale|query|string|false|none|
|timestamp|query|string|false|none|
|limit|query|integer|false|none|
|offset|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "message": "string",
  "playlists": {
    "href": "https://api.spotify.com/v1/me/shows?offset=0&limit=20\n",
    "limit": 20,
    "next": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
    "offset": 0,
    "previous": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
    "total": 4,
    "items": [
      {
        "collaborative": true,
        "description": "string",
        "external_urls": {
          "spotify": "string"
        },
        "href": "string",
        "id": "string",
        "images": [
          {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
            "width": 300
          }
        ],
        "name": "string",
        "owner": {
          "external_urls": {
            "spotify": "string"
          },
          "followers": {
            "href": "string",
            "total": 0
          },
          "href": "string",
          "id": "string",
          "type": "user",
          "uri": "string",
          "display_name": "string"
        },
        "public": true,
        "snapshot_id": "string",
        "tracks": {
          "href": "string",
          "total": 0
        },
        "type": "string",
        "uri": "string"
      }
    ]
  }
}
```

> 401 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

<h3 id="get-featured-playlists-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A paged set of playlists|[PagingFeaturedPlaylistObject](#schemapagingfeaturedplaylistobject)|
|401|Unauthorized|Bad or expired token. This can happen if the user revoked a token or<br>the access token has expired. You should re-authenticate the user.<br>|Inline|
|403|Forbidden|Bad OAuth request (wrong consumer key, bad nonce, expired<br>timestamp...). Unfortunately, re-authenticating the user won't help here.<br>|Inline|
|429|Too Many Requests|The app has exceeded its rate limits.<br>|Inline|

<h3 id="get-featured-playlists-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth_2_0
</aside>

## Get Current User's Playlists

<a id="opIdget-a-list-of-current-users-playlists"></a>

> Code samples

```bash
curl https://example.com/me/playlists \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /me/playlists`

Get a list of the playlists owned or followed by the current Spotify
user.


<h3 id="get-current-users-playlists-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|none|
|offset|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "href": "https://api.spotify.com/v1/me/shows?offset=0&limit=20\n",
  "limit": 20,
  "next": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
  "offset": 0,
  "previous": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
  "total": 4,
  "items": [
    {
      "collaborative": true,
      "description": "string",
      "external_urls": {
        "spotify": "string"
      },
      "href": "string",
      "id": "string",
      "images": [
        {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
          "width": 300
        }
      ],
      "name": "string",
      "owner": {
        "external_urls": {
          "spotify": "string"
        },
        "followers": {
          "href": "string",
          "total": 0
        },
        "href": "string",
        "id": "string",
        "type": "user",
        "uri": "string",
        "display_name": "string"
      },
      "public": true,
      "snapshot_id": "string",
      "tracks": {
        "href": "string",
        "total": 0
      },
      "type": "string",
      "uri": "string"
    }
  ]
}
```

> 401 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

<h3 id="get-current-users-playlists-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A paged set of playlists|[PagingPlaylistObject](#schemapagingplaylistobject)|
|401|Unauthorized|Bad or expired token. This can happen if the user revoked a token or<br>the access token has expired. You should re-authenticate the user.<br>|Inline|
|403|Forbidden|Bad OAuth request (wrong consumer key, bad nonce, expired<br>timestamp...). Unfortunately, re-authenticating the user won't help here.<br>|Inline|
|429|Too Many Requests|The app has exceeded its rate limits.<br>|Inline|

<h3 id="get-current-users-playlists-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth_2_0 ( Scopes: playlist-read-private )
</aside>

## Get Playlist

<a id="opIdget-playlist"></a>

> Code samples

```bash
curl https://example.com/playlists/3cEYpjA9oz9GiPac4AsH4n \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /playlists/{playlist_id}`

Get a playlist owned by a Spotify user.


<h3 id="get-playlist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|playlist_id|path|string|true|none|
|market|query|string|false|none|
|fields|query|string|false|none|
|additional_types|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "collaborative": true,
  "description": "string",
  "external_urls": {
    "spotify": "string"
  },
  "followers": {
    "href": "string",
    "total": 0
  },
  "href": "string",
  "id": "string",
  "images": [
    {
      "height": 300,
      "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
      "width": 300
    }
  ],
  "name": "string",
  "owner": {
    "external_urls": {
      "spotify": "string"
    },
    "followers": {
      "href": "string",
      "total": 0
    },
    "href": "string",
    "id": "string",
    "type": "user",
    "uri": "string",
    "display_name": "string"
  },
  "public": true,
  "snapshot_id": "string",
  "tracks": {
    "href": "https://api.spotify.com/v1/me/shows?offset=0&limit=20\n",
    "limit": 20,
    "next": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
    "offset": 0,
    "previous": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
    "total": 4,
    "items": [
      {
        "added_at": "1970-01-01T00:00:00Z",
        "added_by": {
          "external_urls": {
            "spotify": "string"
          },
          "followers": {
            "href": "string",
            "total": 0
          },
          "href": "string",
          "id": "string",
          "type": "user",
          "uri": "string"
        },
        "is_local": true,
        "track": {
          "album": {
            "album_type": "compilation",
            "available_markets": [
              "CA",
              "BR",
              "IT"
            ],
            "external_urls": {
              "spotify": "string"
            },
            "href": "string",
            "id": "2up3OPMp9Tb4dAKM2erWXQ",
            "images": [
              {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
                "width": 300
              }
            ],
            "name": "string",
            "release_date": "1981-12",
            "release_date_precision": "year",
            "restrictions": {
              "reason": "market"
            },
            "total_tracks": 9,
            "type": "album",
            "uri": "spotify:album:2up3OPMp9Tb4dAKM2erWXQ",
            "album_group": "compilation",
            "artists": [
              {
                "external_urls": {
                  "spotify": "string"
                },
                "href": "string",
                "id": "string",
                "name": "string",
                "type": "artist",
                "uri": "string"
              }
            ]
          },
          "artists": [
            {
              "external_urls": {
                "spotify": "string"
              },
              "followers": {
                "href": "string",
                "total": 0
              },
              "genres": [
                "Prog rock",
                "Grunge"
              ],
              "href": "string",
              "id": "string",
              "images": [
                {
                  "height": 300,
                  "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
                  "width": 300
                }
              ],
              "name": "string",
              "popularity": 0,
              "type": "artist",
              "uri": "string"
            }
          ],
          "available_markets": [
            "string"
          ],
          "disc_number": 0,
          "duration_ms": 0,
          "explicit": true,
          "external_ids": {
            "ean": "string",
            "isrc": "string",
            "upc": "string"
          },
          "external_urls": {
            "spotify": "string"
          },
          "href": "string",
          "id": "string",
          "is_local": true,
          "is_playable": true,
          "linked_from": {
            "external_urls": {
              "spotify": "string"
            },
            "href": "string",
            "id": "string",
            "type": "string",
            "uri": "string"
          },
          "name": "string",
          "popularity": 0,
          "preview_url": "string",
          "restrictions": {
            "reason": "string"
          },
          "track_number": 0,
          "type": "track",
          "uri": "string"
        }
      }
    ]
  },
  "type": "string",
  "uri": "string"
}
```

> 401 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

<h3 id="get-playlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A playlist|[PlaylistObject](#schemaplaylistobject)|
|401|Unauthorized|Bad or expired token. This can happen if the user revoked a token or<br>the access token has expired. You should re-authenticate the user.<br>|Inline|
|403|Forbidden|Bad OAuth request (wrong consumer key, bad nonce, expired<br>timestamp...). Unfortunately, re-authenticating the user won't help here.<br>|Inline|
|429|Too Many Requests|The app has exceeded its rate limits.<br>|Inline|

<h3 id="get-playlist-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth_2_0
</aside>

## Change Playlist Details

<a id="opIdchange-playlist-details"></a>

> Code samples

```bash
curl https://example.com/playlists/3cEYpjA9oz9GiPac4AsH4n \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "description": "Updated playlist description",
    "name": "Updated Playlist Name",
    "public": false
  }'
```

`PUT /playlists/{playlist_id}`

Change a playlist's name and public/private state. (The user must, of
course, own the playlist.)


> Body parameter

```json
{
  "description": "Updated playlist description",
  "name": "Updated Playlist Name",
  "public": false
}
```

<h3 id="change-playlist-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|playlist_id|path|string|true|none|
|body|body|object|false|none|
|» collaborative|body|boolean|false|If `true`, the playlist will become collaborative and other users will be able to modify the playlist in their Spotify client. <br/><br>_**Note**: You can only set `collaborative` to `true` on non-public playlists._<br>|
|» description|body|string|false|Value for playlist description as displayed in Spotify Clients and in the Web API.<br>|
|» name|body|string|false|The new name for the playlist, for example `"My New Playlist Title"`<br>|
|» public|body|boolean|false|If `true` the playlist will be public, if `false` it will be private.<br>|

> Example responses

> 401 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

<h3 id="change-playlist-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Playlist updated|None|
|401|Unauthorized|Bad or expired token. This can happen if the user revoked a token or<br>the access token has expired. You should re-authenticate the user.<br>|Inline|
|403|Forbidden|Bad OAuth request (wrong consumer key, bad nonce, expired<br>timestamp...). Unfortunately, re-authenticating the user won't help here.<br>|Inline|
|429|Too Many Requests|The app has exceeded its rate limits.<br>|Inline|

<h3 id="change-playlist-details-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth_2_0 ( Scopes: playlist-modify-public playlist-modify-private )
</aside>

## Get Playlist Cover Image

<a id="opIdget-playlist-cover"></a>

> Code samples

```bash
curl https://example.com/playlists/3cEYpjA9oz9GiPac4AsH4n/images \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /playlists/{playlist_id}/images`

Get the current image associated with a specific playlist.


<h3 id="get-playlist-cover-image-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|playlist_id|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "height": 300,
    "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
    "width": 300
  }
]
```

> 401 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

<h3 id="get-playlist-cover-image-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A set of images|Inline|
|401|Unauthorized|Bad or expired token. This can happen if the user revoked a token or<br>the access token has expired. You should re-authenticate the user.<br>|Inline|
|403|Forbidden|Bad OAuth request (wrong consumer key, bad nonce, expired<br>timestamp...). Unfortunately, re-authenticating the user won't help here.<br>|Inline|
|429|Too Many Requests|The app has exceeded its rate limits.<br>|Inline|

<h3 id="get-playlist-cover-image-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ImageObject](#schemaimageobject)]|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth_2_0
</aside>

## Add Custom Playlist Cover Image

<a id="opIdupload-custom-playlist-cover"></a>

> Code samples

```bash
curl https://example.com/playlists/3cEYpjA9oz9GiPac4AsH4n/images \
  -X PUT \
  -H 'Content-Type: image/jpeg' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'string'
```

`PUT /playlists/{playlist_id}/images`

Replace the image used to represent a specific playlist.


> Body parameter

```text
string
```

<h3 id="add-custom-playlist-cover-image-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|playlist_id|path|string|true|none|
|body|body|string(base64)|true|The new cover image of the playlist as a Base64 encoded JPEG image. Maximum payload size is 256KB.|

> Example responses

> 401 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

<h3 id="add-custom-playlist-cover-image-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Image uploaded|None|
|401|Unauthorized|Bad or expired token. This can happen if the user revoked a token or<br>the access token has expired. You should re-authenticate the user.<br>|Inline|
|403|Forbidden|Bad OAuth request (wrong consumer key, bad nonce, expired<br>timestamp...). Unfortunately, re-authenticating the user won't help here.<br>|Inline|
|429|Too Many Requests|The app has exceeded its rate limits.<br>|Inline|

<h3 id="add-custom-playlist-cover-image-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth_2_0 ( Scopes: ugc-image-upload playlist-modify-public playlist-modify-private )
</aside>

## Get Playlist Items

<a id="opIdget-playlists-tracks"></a>

> Code samples

```bash
curl https://example.com/playlists/3cEYpjA9oz9GiPac4AsH4n/tracks \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /playlists/{playlist_id}/tracks`

Get full details of the items of a playlist owned by a Spotify user.


<h3 id="get-playlist-items-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|playlist_id|path|string|true|none|
|market|query|string|false|none|
|fields|query|string|false|none|
|limit|query|integer|false|none|
|offset|query|integer|false|none|
|additional_types|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "href": "https://api.spotify.com/v1/me/shows?offset=0&limit=20\n",
  "limit": 20,
  "next": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
  "offset": 0,
  "previous": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
  "total": 4,
  "items": [
    {
      "added_at": "1970-01-01T00:00:00Z",
      "added_by": {
        "external_urls": {
          "spotify": "string"
        },
        "followers": {
          "href": "string",
          "total": 0
        },
        "href": "string",
        "id": "string",
        "type": "user",
        "uri": "string"
      },
      "is_local": true,
      "track": {
        "album": {
          "album_type": "compilation",
          "available_markets": [
            "CA",
            "BR",
            "IT"
          ],
          "external_urls": {
            "spotify": "string"
          },
          "href": "string",
          "id": "2up3OPMp9Tb4dAKM2erWXQ",
          "images": [
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
              "width": 300
            }
          ],
          "name": "string",
          "release_date": "1981-12",
          "release_date_precision": "year",
          "restrictions": {
            "reason": "market"
          },
          "total_tracks": 9,
          "type": "album",
          "uri": "spotify:album:2up3OPMp9Tb4dAKM2erWXQ",
          "album_group": "compilation",
          "artists": [
            {
              "external_urls": {
                "spotify": "string"
              },
              "href": "string",
              "id": "string",
              "name": "string",
              "type": "artist",
              "uri": "string"
            }
          ]
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "string"
            },
            "followers": {
              "href": "string",
              "total": 0
            },
            "genres": [
              "Prog rock",
              "Grunge"
            ],
            "href": "string",
            "id": "string",
            "images": [
              {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
                "width": 300
              }
            ],
            "name": "string",
            "popularity": 0,
            "type": "artist",
            "uri": "string"
          }
        ],
        "available_markets": [
          "string"
        ],
        "disc_number": 0,
        "duration_ms": 0,
        "explicit": true,
        "external_ids": {
          "ean": "string",
          "isrc": "string",
          "upc": "string"
        },
        "external_urls": {
          "spotify": "string"
        },
        "href": "string",
        "id": "string",
        "is_local": true,
        "is_playable": true,
        "linked_from": {
          "external_urls": {
            "spotify": "string"
          },
          "href": "string",
          "id": "string",
          "type": "string",
          "uri": "string"
        },
        "name": "string",
        "popularity": 0,
        "preview_url": "string",
        "restrictions": {
          "reason": "string"
        },
        "track_number": 0,
        "type": "track",
        "uri": "string"
      }
    }
  ]
}
```

> 401 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

<h3 id="get-playlist-items-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Pages of tracks|[PagingPlaylistTrackObject](#schemapagingplaylisttrackobject)|
|401|Unauthorized|Bad or expired token. This can happen if the user revoked a token or<br>the access token has expired. You should re-authenticate the user.<br>|Inline|
|403|Forbidden|Bad OAuth request (wrong consumer key, bad nonce, expired<br>timestamp...). Unfortunately, re-authenticating the user won't help here.<br>|Inline|
|429|Too Many Requests|The app has exceeded its rate limits.<br>|Inline|

<h3 id="get-playlist-items-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth_2_0 ( Scopes: playlist-read-private )
</aside>

## Update Playlist Items

<a id="opIdreorder-or-replace-playlists-tracks"></a>

> Code samples

```bash
curl https://example.com/playlists/3cEYpjA9oz9GiPac4AsH4n/tracks \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "insert_before": 3,
    "range_length": 2,
    "range_start": 1
  }'
```

`PUT /playlists/{playlist_id}/tracks`

Either reorder or replace items in a playlist depending on the request's parameters.
To reorder items, include `range_start`, `insert_before`, `range_length` and `snapshot_id` in the request's body.
To replace items, include `uris` as either a query parameter or in the request's body.
Replacing items in a playlist will overwrite its existing items. This operation can be used for replacing or clearing items in a playlist.
<br/>
**Note**: Replace and reorder are mutually exclusive operations which share the same endpoint, but have different parameters.
These operations can't be applied together in a single request.


> Body parameter

```json
{
  "insert_before": 3,
  "range_length": 2,
  "range_start": 1
}
```

<h3 id="update-playlist-items-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|playlist_id|path|string|true|none|
|uris|query|string|false|none|
|body|body|object|false|none|
|» insert_before|body|integer|false|The position where the items should be inserted.<br/>To reorder the items to the end of the playlist, simply set _insert_before_ to the position after the last item.<br/>Examples:<br/>To reorder the first item to the last position in a playlist with 10 items, set _range_start_ to 0, and _insert_before_ to 10.<br/>To reorder the last item in a playlist with 10 items to the start of the playlist, set _range_start_ to 9, and _insert_before_ to 0.<br>|
|» range_length|body|integer|false|The amount of items to be reordered. Defaults to 1 if not set.<br/>The range of items to be reordered begins from the _range_start_ position, and includes the _range_length_ subsequent items.<br/>Example:<br/>To move the items at index 9-10 to the start of the playlist, _range_start_ is set to 9, and _range_length_ is set to 2.<br>|
|» range_start|body|integer|false|The position of the first item to be reordered.<br>|
|» snapshot_id|body|string|false|The playlist's snapshot ID against which you want to make the changes.<br>|
|» uris|body|[string]|false|none|

> Example responses

> 200 Response

```json
{
  "snapshot_id": "abc"
}
```

> 401 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

<h3 id="update-playlist-items-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A snapshot ID for the playlist|Inline|
|401|Unauthorized|Bad or expired token. This can happen if the user revoked a token or<br>the access token has expired. You should re-authenticate the user.<br>|Inline|
|403|Forbidden|Bad OAuth request (wrong consumer key, bad nonce, expired<br>timestamp...). Unfortunately, re-authenticating the user won't help here.<br>|Inline|
|429|Too Many Requests|The app has exceeded its rate limits.<br>|Inline|

<h3 id="update-playlist-items-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|snapshot_id|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth_2_0 ( Scopes: playlist-modify-public playlist-modify-private )
</aside>

## Add Items to Playlist

<a id="opIdadd-tracks-to-playlist"></a>

> Code samples

```bash
curl https://example.com/playlists/3cEYpjA9oz9GiPac4AsH4n/tracks \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "position": 0,
    "uris": [
      "string"
    ]
  }'
```

`POST /playlists/{playlist_id}/tracks`

Add one or more items to a user's playlist.


> Body parameter

```json
{
  "position": 0,
  "uris": [
    "string"
  ]
}
```

<h3 id="add-items-to-playlist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|playlist_id|path|string|true|none|
|position|query|integer|false|none|
|uris|query|string|false|none|
|body|body|object|false|none|
|» position|body|integer|false|The position to insert the items, a zero-based index. For example, to insert the items in the first position: `position=0` ; to insert the items in the third position: `position=2`. If omitted, the items will be appended to the playlist. Items are added in the order they appear in the uris array. For example: `{"uris": ["spotify:track:4iV5W9uYEdYUVa79Axb7Rh","spotify:track:1301WleyT98MSxVHPZCA6M"], "position": 3}`<br>|
|» uris|body|[string]|false|A JSON array of the [Spotify URIs](/documentation/web-api/#spotify-uris-and-ids) to add. For example: `{"uris": ["spotify:track:4iV5W9uYEdYUVa79Axb7Rh","spotify:track:1301WleyT98MSxVHPZCA6M", "spotify:episode:512ojhOuo1ktJprKbVcKyQ"]}`<br/>A maximum of 100 items can be added in one request. _**Note**: if the `uris` parameter is present in the query string, any URIs listed here in the body will be ignored._<br>|

> Example responses

> 201 Response

```json
{
  "snapshot_id": "abc"
}
```

> 401 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

<h3 id="add-items-to-playlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|A snapshot ID for the playlist|Inline|
|401|Unauthorized|Bad or expired token. This can happen if the user revoked a token or<br>the access token has expired. You should re-authenticate the user.<br>|Inline|
|403|Forbidden|Bad OAuth request (wrong consumer key, bad nonce, expired<br>timestamp...). Unfortunately, re-authenticating the user won't help here.<br>|Inline|
|429|Too Many Requests|The app has exceeded its rate limits.<br>|Inline|

<h3 id="add-items-to-playlist-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|snapshot_id|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth_2_0 ( Scopes: playlist-modify-public playlist-modify-private )
</aside>

## Remove Playlist Items

<a id="opIdremove-tracks-playlist"></a>

> Code samples

```bash
curl https://example.com/playlists/3cEYpjA9oz9GiPac4AsH4n/tracks \
  -X DELETE \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "snapshot_id": "string",
    "tracks": [
      {
        "uri": "string"
      }
    ]
  }'
```

`DELETE /playlists/{playlist_id}/tracks`

Remove one or more items from a user's playlist.


> Body parameter

```json
{
  "snapshot_id": "string",
  "tracks": [
    {
      "uri": "string"
    }
  ]
}
```

<h3 id="remove-playlist-items-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|playlist_id|path|string|true|none|
|body|body|object|false|none|
|» snapshot_id|body|string|false|The playlist's snapshot ID against which you want to make the changes.<br>The API will validate that the specified items exist and in the specified positions and make the changes,<br>even if more recent changes have been made to the playlist.<br>|
|» tracks|body|[object]|true|An array of objects containing [Spotify URIs](https://developer.spotify.com/documentation/web-api/#spotify-uris-and-ids) of the tracks or episodes to remove.<br>For example: `{ "tracks": [{ "uri": "spotify:track:4iV5W9uYEdYUVa79Axb7Rh" },{ "uri": "spotify:track:1301WleyT98MSxVHPZCA6M" }] }`. A maximum of 100 objects can be sent at once.<br>|
|» » uri|body|string|false|Spotify URI|

> Example responses

> 200 Response

```json
{
  "snapshot_id": "abc"
}
```

> 401 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

<h3 id="remove-playlist-items-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A snapshot ID for the playlist|Inline|
|401|Unauthorized|Bad or expired token. This can happen if the user revoked a token or<br>the access token has expired. You should re-authenticate the user.<br>|Inline|
|403|Forbidden|Bad OAuth request (wrong consumer key, bad nonce, expired<br>timestamp...). Unfortunately, re-authenticating the user won't help here.<br>|Inline|
|429|Too Many Requests|The app has exceeded its rate limits.<br>|Inline|

<h3 id="remove-playlist-items-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|snapshot_id|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth_2_0 ( Scopes: playlist-modify-public playlist-modify-private )
</aside>

## Get User's Playlists

<a id="opIdget-list-users-playlists"></a>

> Code samples

```bash
curl https://example.com/users/smedjan/playlists \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /users/{user_id}/playlists`

Get a list of the playlists owned or followed by a Spotify user.


<h3 id="get-users-playlists-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user_id|path|string|true|none|
|limit|query|integer|false|none|
|offset|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "href": "https://api.spotify.com/v1/me/shows?offset=0&limit=20\n",
  "limit": 20,
  "next": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
  "offset": 0,
  "previous": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
  "total": 4,
  "items": [
    {
      "collaborative": true,
      "description": "string",
      "external_urls": {
        "spotify": "string"
      },
      "href": "string",
      "id": "string",
      "images": [
        {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
          "width": 300
        }
      ],
      "name": "string",
      "owner": {
        "external_urls": {
          "spotify": "string"
        },
        "followers": {
          "href": "string",
          "total": 0
        },
        "href": "string",
        "id": "string",
        "type": "user",
        "uri": "string",
        "display_name": "string"
      },
      "public": true,
      "snapshot_id": "string",
      "tracks": {
        "href": "string",
        "total": 0
      },
      "type": "string",
      "uri": "string"
    }
  ]
}
```

> 401 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

<h3 id="get-users-playlists-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A paged set of playlists|[PagingPlaylistObject](#schemapagingplaylistobject)|
|401|Unauthorized|Bad or expired token. This can happen if the user revoked a token or<br>the access token has expired. You should re-authenticate the user.<br>|Inline|
|403|Forbidden|Bad OAuth request (wrong consumer key, bad nonce, expired<br>timestamp...). Unfortunately, re-authenticating the user won't help here.<br>|Inline|
|429|Too Many Requests|The app has exceeded its rate limits.<br>|Inline|

<h3 id="get-users-playlists-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth_2_0 ( Scopes: playlist-read-private playlist-read-collaborative )
</aside>

## Create Playlist

<a id="opIdcreate-playlist"></a>

> Code samples

```bash
curl https://example.com/users/smedjan/playlists \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "description": "New playlist description",
    "name": "New Playlist",
    "public": false
  }'
```

`POST /users/{user_id}/playlists`

Create a playlist for a Spotify user. (The playlist will be empty until
you [add tracks](/documentation/web-api/reference/#/operations/add-tracks-to-playlist).)


> Body parameter

```json
{
  "description": "New playlist description",
  "name": "New Playlist",
  "public": false
}
```

<h3 id="create-playlist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user_id|path|string|true|none|
|body|body|object|false|none|
|» collaborative|body|boolean|false|Defaults to `false`. If `true` the playlist will be collaborative. _**Note**: to create a collaborative playlist you must also set `public` to `false`. To create collaborative playlists you must have granted `playlist-modify-private` and `playlist-modify-public` [scopes](/documentation/general/guides/authorization-guide/#list-of-scopes)._<br>|
|» description|body|string|false|value for playlist description as displayed in Spotify Clients and in the Web API.<br>|
|» name|body|string|true|The name for the new playlist, for example `"Your Coolest Playlist"`. This name does not need to be unique; a user may have several playlists with the same name.<br>|
|» public|body|boolean|false|Defaults to `true`. If `true` the playlist will be public, if `false` it will be private. To be able to create private playlists, the user must have granted the `playlist-modify-private` [scope](/documentation/general/guides/authorization-guide/#list-of-scopes)<br>|

> Example responses

> 201 Response

```json
{
  "collaborative": true,
  "description": "string",
  "external_urls": {
    "spotify": "string"
  },
  "followers": {
    "href": "string",
    "total": 0
  },
  "href": "string",
  "id": "string",
  "images": [
    {
      "height": 300,
      "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
      "width": 300
    }
  ],
  "name": "string",
  "owner": {
    "external_urls": {
      "spotify": "string"
    },
    "followers": {
      "href": "string",
      "total": 0
    },
    "href": "string",
    "id": "string",
    "type": "user",
    "uri": "string",
    "display_name": "string"
  },
  "public": true,
  "snapshot_id": "string",
  "tracks": {
    "href": "https://api.spotify.com/v1/me/shows?offset=0&limit=20\n",
    "limit": 20,
    "next": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
    "offset": 0,
    "previous": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
    "total": 4,
    "items": [
      {
        "added_at": "1970-01-01T00:00:00Z",
        "added_by": {
          "external_urls": {
            "spotify": "string"
          },
          "followers": {
            "href": "string",
            "total": 0
          },
          "href": "string",
          "id": "string",
          "type": "user",
          "uri": "string"
        },
        "is_local": true,
        "track": {
          "album": {
            "album_type": "compilation",
            "available_markets": [
              "CA",
              "BR",
              "IT"
            ],
            "external_urls": {
              "spotify": "string"
            },
            "href": "string",
            "id": "2up3OPMp9Tb4dAKM2erWXQ",
            "images": [
              {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
                "width": 300
              }
            ],
            "name": "string",
            "release_date": "1981-12",
            "release_date_precision": "year",
            "restrictions": {
              "reason": "market"
            },
            "total_tracks": 9,
            "type": "album",
            "uri": "spotify:album:2up3OPMp9Tb4dAKM2erWXQ",
            "album_group": "compilation",
            "artists": [
              {
                "external_urls": {
                  "spotify": "string"
                },
                "href": "string",
                "id": "string",
                "name": "string",
                "type": "artist",
                "uri": "string"
              }
            ]
          },
          "artists": [
            {
              "external_urls": {
                "spotify": "string"
              },
              "followers": {
                "href": "string",
                "total": 0
              },
              "genres": [
                "Prog rock",
                "Grunge"
              ],
              "href": "string",
              "id": "string",
              "images": [
                {
                  "height": 300,
                  "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
                  "width": 300
                }
              ],
              "name": "string",
              "popularity": 0,
              "type": "artist",
              "uri": "string"
            }
          ],
          "available_markets": [
            "string"
          ],
          "disc_number": 0,
          "duration_ms": 0,
          "explicit": true,
          "external_ids": {
            "ean": "string",
            "isrc": "string",
            "upc": "string"
          },
          "external_urls": {
            "spotify": "string"
          },
          "href": "string",
          "id": "string",
          "is_local": true,
          "is_playable": true,
          "linked_from": {
            "external_urls": {
              "spotify": "string"
            },
            "href": "string",
            "id": "string",
            "type": "string",
            "uri": "string"
          },
          "name": "string",
          "popularity": 0,
          "preview_url": "string",
          "restrictions": {
            "reason": "string"
          },
          "track_number": 0,
          "type": "track",
          "uri": "string"
        }
      }
    ]
  },
  "type": "string",
  "uri": "string"
}
```

> 401 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

<h3 id="create-playlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|A playlist|[PlaylistObject](#schemaplaylistobject)|
|401|Unauthorized|Bad or expired token. This can happen if the user revoked a token or<br>the access token has expired. You should re-authenticate the user.<br>|Inline|
|403|Forbidden|Bad OAuth request (wrong consumer key, bad nonce, expired<br>timestamp...). Unfortunately, re-authenticating the user won't help here.<br>|Inline|
|429|Too Many Requests|The app has exceeded its rate limits.<br>|Inline|

<h3 id="create-playlist-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth_2_0 ( Scopes: playlist-modify-public playlist-modify-private )
</aside>

<h1 id="spotify-web-api-with-fixes-and-improvements-from-sonallux-chapters">Chapters</h1>

## Get Several Chapters

<a id="opIdget-several-chapters"></a>

> Code samples

```bash
curl 'https://example.com/chapters?ids=0IsXVP0JmcB2adSE338GkK%2C3ZXb8FKZGU0EHALYX6uCzU%2C0D5wENdkdwbqlrHoaJ9g29' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /chapters`

Get Spotify catalog information for several chapters identified by their Spotify IDs.<br />
**Note: Chapters are only available for the US, UK, Ireland, New Zealand and Australia markets.**


<h3 id="get-several-chapters-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ids|query|string|true|none|
|market|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "chapters": [
    {
      "audio_preview_url": "https://p.scdn.co/mp3-preview/2f37da1d4221f40b9d1a98cd191f4d6f1646ad17",
      "available_markets": [
        "string"
      ],
      "chapter_number": 1,
      "description": "A Spotify podcast sharing fresh insights on important topics of the moment—in a way only Spotify can. You’ll hear from experts in the music, podcast and tech industries as we discover and uncover stories about our work and the world around us.\n",
      "duration_ms": 1686230,
      "explicit": true,
      "external_urls": {
        "spotify": "string"
      },
      "href": "https://api.spotify.com/v1/episodes/5Xt5DXGzch68nYYamXrNxZ",
      "html_description": "<p>A Spotify podcast sharing fresh insights on important topics of the moment—in a way only Spotify can. You’ll hear from experts in the music, podcast and tech industries as we discover and uncover stories about our work and the world around us.</p>\n",
      "id": "5Xt5DXGzch68nYYamXrNxZ",
      "images": [
        {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
          "width": 300
        }
      ],
      "is_playable": true,
      "languages": [
        "fr",
        "en"
      ],
      "name": "Starting Your Own Podcast: Tips, Tricks, and Advice From Anchor Creators\n",
      "release_date": "1981-12-15",
      "release_date_precision": "day",
      "restrictions": {
        "reason": "string"
      },
      "resume_point": {
        "fully_played": true,
        "resume_position_ms": 0
      },
      "type": "episode",
      "uri": "spotify:episode:0zLhl3WsOCQHbe1BPTiHgr",
      "audiobook": {
        "authors": [
          {
            "name": "string"
          }
        ],
        "available_markets": [
          "string"
        ],
        "copyrights": [
          {
            "text": "string",
            "type": "string"
          }
        ],
        "description": "string",
        "edition": "Unabridged",
        "explicit": true,
        "external_urls": {
          "spotify": "string"
        },
        "href": "string",
        "html_description": "string",
        "id": "string",
        "images": [
          {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
            "width": 300
          }
        ],
        "languages": [
          "string"
        ],
        "media_type": "string",
        "name": "string",
        "narrators": [
          {
            "name": "string"
          }
        ],
        "publisher": "string",
        "total_chapters": 0,
        "type": "audiobook",
        "uri": "string"
      }
    }
  ]
}
```

> 401 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

<h3 id="get-several-chapters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A set of chapters|Inline|
|401|Unauthorized|Bad or expired token. This can happen if the user revoked a token or<br>the access token has expired. You should re-authenticate the user.<br>|Inline|
|403|Forbidden|Bad OAuth request (wrong consumer key, bad nonce, expired<br>timestamp...). Unfortunately, re-authenticating the user won't help here.<br>|Inline|
|429|Too Many Requests|The app has exceeded its rate limits.<br>|Inline|

<h3 id="get-several-chapters-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|chapters|[[ChapterObject](#schemachapterobject)]|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth_2_0
</aside>

## Get a Chapter

<a id="opIdget-a-chapter"></a>

> Code samples

```bash
curl https://example.com/chapters/0D5wENdkdwbqlrHoaJ9g29 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /chapters/{id}`

Get Spotify catalog information for a single chapter.<br />
**Note: Chapters are only available for the US, UK, Ireland, New Zealand and Australia markets.**


<h3 id="get-a-chapter-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|market|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "audio_preview_url": "https://p.scdn.co/mp3-preview/2f37da1d4221f40b9d1a98cd191f4d6f1646ad17",
  "available_markets": [
    "string"
  ],
  "chapter_number": 1,
  "description": "A Spotify podcast sharing fresh insights on important topics of the moment—in a way only Spotify can. You’ll hear from experts in the music, podcast and tech industries as we discover and uncover stories about our work and the world around us.\n",
  "duration_ms": 1686230,
  "explicit": true,
  "external_urls": {
    "spotify": "string"
  },
  "href": "https://api.spotify.com/v1/episodes/5Xt5DXGzch68nYYamXrNxZ",
  "html_description": "<p>A Spotify podcast sharing fresh insights on important topics of the moment—in a way only Spotify can. You’ll hear from experts in the music, podcast and tech industries as we discover and uncover stories about our work and the world around us.</p>\n",
  "id": "5Xt5DXGzch68nYYamXrNxZ",
  "images": [
    {
      "height": 300,
      "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
      "width": 300
    }
  ],
  "is_playable": true,
  "languages": [
    "fr",
    "en"
  ],
  "name": "Starting Your Own Podcast: Tips, Tricks, and Advice From Anchor Creators\n",
  "release_date": "1981-12-15",
  "release_date_precision": "day",
  "restrictions": {
    "reason": "string"
  },
  "resume_point": {
    "fully_played": true,
    "resume_position_ms": 0
  },
  "type": "episode",
  "uri": "spotify:episode:0zLhl3WsOCQHbe1BPTiHgr",
  "audiobook": {
    "authors": [
      {
        "name": "string"
      }
    ],
    "available_markets": [
      "string"
    ],
    "copyrights": [
      {
        "text": "string",
        "type": "string"
      }
    ],
    "description": "string",
    "edition": "Unabridged",
    "explicit": true,
    "external_urls": {
      "spotify": "string"
    },
    "href": "string",
    "html_description": "string",
    "id": "string",
    "images": [
      {
        "height": 300,
        "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
        "width": 300
      }
    ],
    "languages": [
      "string"
    ],
    "media_type": "string",
    "name": "string",
    "narrators": [
      {
        "name": "string"
      }
    ],
    "publisher": "string",
    "total_chapters": 0,
    "type": "audiobook",
    "uri": "string"
  }
}
```

> 401 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

<h3 id="get-a-chapter-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A Chapter|[ChapterObject](#schemachapterobject)|
|401|Unauthorized|Bad or expired token. This can happen if the user revoked a token or<br>the access token has expired. You should re-authenticate the user.<br>|Inline|
|403|Forbidden|Bad OAuth request (wrong consumer key, bad nonce, expired<br>timestamp...). Unfortunately, re-authenticating the user won't help here.<br>|Inline|
|429|Too Many Requests|The app has exceeded its rate limits.<br>|Inline|

<h3 id="get-a-chapter-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth_2_0
</aside>

<h1 id="spotify-web-api-with-fixes-and-improvements-from-sonallux-episodes">Episodes</h1>

## Get Several Episodes

<a id="opIdget-multiple-episodes"></a>

> Code samples

```bash
curl 'https://example.com/episodes?ids=77o6BIVlYM3msb4MMIL1jH%2C0Q86acNRm6V9GYx55SXKwf' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /episodes`

Get Spotify catalog information for several episodes based on their Spotify IDs.


<h3 id="get-several-episodes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ids|query|string|true|none|
|market|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "episodes": [
    {
      "audio_preview_url": "https://p.scdn.co/mp3-preview/2f37da1d4221f40b9d1a98cd191f4d6f1646ad17",
      "description": "A Spotify podcast sharing fresh insights on important topics of the moment—in a way only Spotify can. You’ll hear from experts in the music, podcast and tech industries as we discover and uncover stories about our work and the world around us.\n",
      "duration_ms": 1686230,
      "explicit": true,
      "external_urls": {
        "spotify": "string"
      },
      "href": "https://api.spotify.com/v1/episodes/5Xt5DXGzch68nYYamXrNxZ",
      "html_description": "<p>A Spotify podcast sharing fresh insights on important topics of the moment—in a way only Spotify can. You’ll hear from experts in the music, podcast and tech industries as we discover and uncover stories about our work and the world around us.</p>\n",
      "id": "5Xt5DXGzch68nYYamXrNxZ",
      "images": [
        {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
          "width": 300
        }
      ],
      "is_externally_hosted": true,
      "is_playable": true,
      "language": "en",
      "languages": [
        "fr",
        "en"
      ],
      "name": "Starting Your Own Podcast: Tips, Tricks, and Advice From Anchor Creators\n",
      "release_date": "1981-12-15",
      "release_date_precision": "day",
      "restrictions": {
        "reason": "string"
      },
      "resume_point": {
        "fully_played": true,
        "resume_position_ms": 0
      },
      "type": "episode",
      "uri": "spotify:episode:0zLhl3WsOCQHbe1BPTiHgr",
      "show": {
        "available_markets": [
          "string"
        ],
        "copyrights": [
          {
            "text": "string",
            "type": "string"
          }
        ],
        "description": "string",
        "explicit": true,
        "external_urls": {
          "spotify": "string"
        },
        "href": "string",
        "html_description": "string",
        "id": "string",
        "images": [
          {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
            "width": 300
          }
        ],
        "is_externally_hosted": true,
        "languages": [
          "string"
        ],
        "media_type": "string",
        "name": "string",
        "publisher": "string",
        "total_episodes": 0,
        "type": "show",
        "uri": "string"
      }
    }
  ]
}
```

> 401 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

<h3 id="get-several-episodes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A set of episodes|Inline|
|401|Unauthorized|Bad or expired token. This can happen if the user revoked a token or<br>the access token has expired. You should re-authenticate the user.<br>|Inline|
|403|Forbidden|Bad OAuth request (wrong consumer key, bad nonce, expired<br>timestamp...). Unfortunately, re-authenticating the user won't help here.<br>|Inline|
|429|Too Many Requests|The app has exceeded its rate limits.<br>|Inline|

<h3 id="get-several-episodes-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|episodes|[[EpisodeObject](#schemaepisodeobject)]|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth_2_0 ( Scopes: user-read-playback-position )
</aside>

## Get Episode

<a id="opIdget-an-episode"></a>

> Code samples

```bash
curl https://example.com/episodes/512ojhOuo1ktJprKbVcKyQ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /episodes/{id}`

Get Spotify catalog information for a single episode identified by its
unique Spotify ID.


<h3 id="get-episode-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|market|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "audio_preview_url": "https://p.scdn.co/mp3-preview/2f37da1d4221f40b9d1a98cd191f4d6f1646ad17",
  "description": "A Spotify podcast sharing fresh insights on important topics of the moment—in a way only Spotify can. You’ll hear from experts in the music, podcast and tech industries as we discover and uncover stories about our work and the world around us.\n",
  "duration_ms": 1686230,
  "explicit": true,
  "external_urls": {
    "spotify": "string"
  },
  "href": "https://api.spotify.com/v1/episodes/5Xt5DXGzch68nYYamXrNxZ",
  "html_description": "<p>A Spotify podcast sharing fresh insights on important topics of the moment—in a way only Spotify can. You’ll hear from experts in the music, podcast and tech industries as we discover and uncover stories about our work and the world around us.</p>\n",
  "id": "5Xt5DXGzch68nYYamXrNxZ",
  "images": [
    {
      "height": 300,
      "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
      "width": 300
    }
  ],
  "is_externally_hosted": true,
  "is_playable": true,
  "language": "en",
  "languages": [
    "fr",
    "en"
  ],
  "name": "Starting Your Own Podcast: Tips, Tricks, and Advice From Anchor Creators\n",
  "release_date": "1981-12-15",
  "release_date_precision": "day",
  "restrictions": {
    "reason": "string"
  },
  "resume_point": {
    "fully_played": true,
    "resume_position_ms": 0
  },
  "type": "episode",
  "uri": "spotify:episode:0zLhl3WsOCQHbe1BPTiHgr",
  "show": {
    "available_markets": [
      "string"
    ],
    "copyrights": [
      {
        "text": "string",
        "type": "string"
      }
    ],
    "description": "string",
    "explicit": true,
    "external_urls": {
      "spotify": "string"
    },
    "href": "string",
    "html_description": "string",
    "id": "string",
    "images": [
      {
        "height": 300,
        "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
        "width": 300
      }
    ],
    "is_externally_hosted": true,
    "languages": [
      "string"
    ],
    "media_type": "string",
    "name": "string",
    "publisher": "string",
    "total_episodes": 0,
    "type": "show",
    "uri": "string"
  }
}
```

> 401 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

<h3 id="get-episode-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|An episode|[EpisodeObject](#schemaepisodeobject)|
|401|Unauthorized|Bad or expired token. This can happen if the user revoked a token or<br>the access token has expired. You should re-authenticate the user.<br>|Inline|
|403|Forbidden|Bad OAuth request (wrong consumer key, bad nonce, expired<br>timestamp...). Unfortunately, re-authenticating the user won't help here.<br>|Inline|
|429|Too Many Requests|The app has exceeded its rate limits.<br>|Inline|

<h3 id="get-episode-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth_2_0 ( Scopes: user-read-playback-position )
</aside>

## Get User's Saved Episodes

<a id="opIdget-users-saved-episodes"></a>

> Code samples

```bash
curl https://example.com/me/episodes \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /me/episodes`

Get a list of the episodes saved in the current Spotify user's library.


<h3 id="get-users-saved-episodes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|market|query|string|false|none|
|limit|query|integer|false|none|
|offset|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "href": "https://api.spotify.com/v1/me/shows?offset=0&limit=20\n",
  "limit": 20,
  "next": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
  "offset": 0,
  "previous": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
  "total": 4,
  "items": [
    {
      "added_at": "1970-01-01T00:00:00Z",
      "episode": {
        "audio_preview_url": "https://p.scdn.co/mp3-preview/2f37da1d4221f40b9d1a98cd191f4d6f1646ad17",
        "description": "A Spotify podcast sharing fresh insights on important topics of the moment—in a way only Spotify can. You’ll hear from experts in the music, podcast and tech industries as we discover and uncover stories about our work and the world around us.\n",
        "duration_ms": 1686230,
        "explicit": true,
        "external_urls": {
          "spotify": "string"
        },
        "href": "https://api.spotify.com/v1/episodes/5Xt5DXGzch68nYYamXrNxZ",
        "html_description": "<p>A Spotify podcast sharing fresh insights on important topics of the moment—in a way only Spotify can. You’ll hear from experts in the music, podcast and tech industries as we discover and uncover stories about our work and the world around us.</p>\n",
        "id": "5Xt5DXGzch68nYYamXrNxZ",
        "images": [
          {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
            "width": 300
          }
        ],
        "is_externally_hosted": true,
        "is_playable": true,
        "language": "en",
        "languages": [
          "fr",
          "en"
        ],
        "name": "Starting Your Own Podcast: Tips, Tricks, and Advice From Anchor Creators\n",
        "release_date": "1981-12-15",
        "release_date_precision": "day",
        "restrictions": {
          "reason": "string"
        },
        "resume_point": {
          "fully_played": true,
          "resume_position_ms": 0
        },
        "type": "episode",
        "uri": "spotify:episode:0zLhl3WsOCQHbe1BPTiHgr",
        "show": {
          "available_markets": [
            "string"
          ],
          "copyrights": [
            {
              "text": "string",
              "type": "string"
            }
          ],
          "description": "string",
          "explicit": true,
          "external_urls": {
            "spotify": "string"
          },
          "href": "string",
          "html_description": "string",
          "id": "string",
          "images": [
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
              "width": 300
            }
          ],
          "is_externally_hosted": true,
          "languages": [
            "string"
          ],
          "media_type": "string",
          "name": "string",
          "publisher": "string",
          "total_episodes": 0,
          "type": "show",
          "uri": "string"
        }
      }
    }
  ]
}
```

> 401 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

<h3 id="get-users-saved-episodes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Pages of episodes|[PagingSavedEpisodeObject](#schemapagingsavedepisodeobject)|
|401|Unauthorized|Bad or expired token. This can happen if the user revoked a token or<br>the access token has expired. You should re-authenticate the user.<br>|Inline|
|403|Forbidden|Bad OAuth request (wrong consumer key, bad nonce, expired<br>timestamp...). Unfortunately, re-authenticating the user won't help here.<br>|Inline|
|429|Too Many Requests|The app has exceeded its rate limits.<br>|Inline|

<h3 id="get-users-saved-episodes-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth_2_0 ( Scopes: user-library-read user-read-playback-position )
</aside>

## Save Episodes for Current User

<a id="opIdsave-episodes-user"></a>

> Code samples

```bash
curl 'https://example.com/me/episodes?ids=77o6BIVlYM3msb4MMIL1jH%2C0Q86acNRm6V9GYx55SXKwf' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "ids": [
      "string"
    ]
  }'
```

`PUT /me/episodes`

Save one or more episodes to the current user's library.


> Body parameter

```json
{
  "ids": [
    "string"
  ]
}
```

<h3 id="save-episodes-for-current-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ids|query|string|true|none|
|body|body|object|false|none|
|» ids|body|[string]|true|A JSON array of the [Spotify IDs](/documentation/web-api/#spotify-uris-and-ids). <br/>A maximum of 50 items can be specified in one request. _**Note**: if the `ids` parameter is present in the query string, any IDs listed here in the body will be ignored._<br>|

> Example responses

> 401 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

<h3 id="save-episodes-for-current-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Episode saved|None|
|401|Unauthorized|Bad or expired token. This can happen if the user revoked a token or<br>the access token has expired. You should re-authenticate the user.<br>|Inline|
|403|Forbidden|Bad OAuth request (wrong consumer key, bad nonce, expired<br>timestamp...). Unfortunately, re-authenticating the user won't help here.<br>|Inline|
|429|Too Many Requests|The app has exceeded its rate limits.<br>|Inline|

<h3 id="save-episodes-for-current-user-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth_2_0 ( Scopes: user-library-modify )
</aside>

## Remove User's Saved Episodes

<a id="opIdremove-episodes-user"></a>

> Code samples

```bash
curl 'https://example.com/me/episodes?ids=7ouMYWpwJ422jRcDASZB7P%2C4VqPOruhp5EdPBeR92t6lQ%2C2takcwOaAZWiXQijPHIx7B' \
  -X DELETE \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "ids": [
      "string"
    ]
  }'
```

`DELETE /me/episodes`

Remove one or more episodes from the current user's library.


> Body parameter

```json
{
  "ids": [
    "string"
  ]
}
```

<h3 id="remove-users-saved-episodes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ids|query|string|true|none|
|body|body|object|false|none|
|» ids|body|[string]|false|A JSON array of the [Spotify IDs](/documentation/web-api/#spotify-uris-and-ids). <br/>A maximum of 50 items can be specified in one request. _**Note**: if the `ids` parameter is present in the query string, any IDs listed here in the body will be ignored._<br>|

> Example responses

> 401 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

<h3 id="remove-users-saved-episodes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Episode removed|None|
|401|Unauthorized|Bad or expired token. This can happen if the user revoked a token or<br>the access token has expired. You should re-authenticate the user.<br>|Inline|
|403|Forbidden|Bad OAuth request (wrong consumer key, bad nonce, expired<br>timestamp...). Unfortunately, re-authenticating the user won't help here.<br>|Inline|
|429|Too Many Requests|The app has exceeded its rate limits.<br>|Inline|

<h3 id="remove-users-saved-episodes-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth_2_0 ( Scopes: user-library-modify )
</aside>

## Check User's Saved Episodes

<a id="opIdcheck-users-saved-episodes"></a>

> Code samples

```bash
curl 'https://example.com/me/episodes/contains?ids=77o6BIVlYM3msb4MMIL1jH%2C0Q86acNRm6V9GYx55SXKwf' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /me/episodes/contains`

Check if one or more episodes is already saved in the current Spotify user's 'Your Episodes' library.


<h3 id="check-users-saved-episodes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ids|query|string|true|none|

> Example responses

> 200 Response

```json
[
  false,
  true
]
```

> 401 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

<h3 id="check-users-saved-episodes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Array of booleans|Inline|
|401|Unauthorized|Bad or expired token. This can happen if the user revoked a token or<br>the access token has expired. You should re-authenticate the user.<br>|Inline|
|403|Forbidden|Bad OAuth request (wrong consumer key, bad nonce, expired<br>timestamp...). Unfortunately, re-authenticating the user won't help here.<br>|Inline|
|429|Too Many Requests|The app has exceeded its rate limits.<br>|Inline|

<h3 id="check-users-saved-episodes-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[boolean]|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth_2_0 ( Scopes: user-library-read )
</aside>

<h1 id="spotify-web-api-with-fixes-and-improvements-from-sonallux-markets">Markets</h1>

## Get Available Markets

<a id="opIdget-available-markets"></a>

> Code samples

```bash
curl https://example.com/markets \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /markets`

Get the list of markets where Spotify is available.


> Example responses

> 200 Response

```json
{
  "markets": [
    "CA",
    "BR",
    "IT"
  ]
}
```

> 401 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

<h3 id="get-available-markets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A markets object with an array of country codes|Inline|
|401|Unauthorized|Bad or expired token. This can happen if the user revoked a token or<br>the access token has expired. You should re-authenticate the user.<br>|Inline|
|403|Forbidden|Bad OAuth request (wrong consumer key, bad nonce, expired<br>timestamp...). Unfortunately, re-authenticating the user won't help here.<br>|Inline|
|429|Too Many Requests|The app has exceeded its rate limits.<br>|Inline|

<h3 id="get-available-markets-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|markets|[string]|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth_2_0
</aside>

<h1 id="spotify-web-api-with-fixes-and-improvements-from-sonallux-users">Users</h1>

## Get Current User's Profile

<a id="opIdget-current-users-profile"></a>

> Code samples

```bash
curl https://example.com/me \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /me`

Get detailed profile information about the current user (including the
current user's username).


> Example responses

> 200 Response

```json
{
  "country": "string",
  "display_name": "string",
  "email": "string",
  "explicit_content": {
    "filter_enabled": true,
    "filter_locked": true
  },
  "external_urls": {
    "spotify": "string"
  },
  "followers": {
    "href": "string",
    "total": 0
  },
  "href": "string",
  "id": "string",
  "images": [
    {
      "height": 300,
      "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
      "width": 300
    }
  ],
  "product": "string",
  "type": "string",
  "uri": "string"
}
```

> 401 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

<h3 id="get-current-users-profile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A user|[PrivateUserObject](#schemaprivateuserobject)|
|401|Unauthorized|Bad or expired token. This can happen if the user revoked a token or<br>the access token has expired. You should re-authenticate the user.<br>|Inline|
|403|Forbidden|Bad OAuth request (wrong consumer key, bad nonce, expired<br>timestamp...). Unfortunately, re-authenticating the user won't help here.<br>|Inline|
|429|Too Many Requests|The app has exceeded its rate limits.<br>|Inline|

<h3 id="get-current-users-profile-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth_2_0 ( Scopes: user-read-private user-read-email )
</aside>

## Get Followed Artists

<a id="opIdget-followed"></a>

> Code samples

```bash
curl 'https://example.com/me/following?type=artist' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /me/following`

Get the current user's followed artists.


<h3 id="get-followed-artists-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|type|query|string|true|none|
|after|query|string|false|none|
|limit|query|integer|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|artist|

> Example responses

> 200 Response

```json
{
  "artists": {
    "cursors": {
      "after": "string",
      "before": "string"
    },
    "href": "string",
    "limit": 0,
    "next": "string",
    "total": 0,
    "items": [
      {
        "external_urls": {
          "spotify": "string"
        },
        "followers": {
          "href": "string",
          "total": 0
        },
        "genres": [
          "Prog rock",
          "Grunge"
        ],
        "href": "string",
        "id": "string",
        "images": [
          {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
            "width": 300
          }
        ],
        "name": "string",
        "popularity": 0,
        "type": "artist",
        "uri": "string"
      }
    ]
  }
}
```

> 401 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

<h3 id="get-followed-artists-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A paged set of artists|Inline|
|401|Unauthorized|Bad or expired token. This can happen if the user revoked a token or<br>the access token has expired. You should re-authenticate the user.<br>|Inline|
|403|Forbidden|Bad OAuth request (wrong consumer key, bad nonce, expired<br>timestamp...). Unfortunately, re-authenticating the user won't help here.<br>|Inline|
|429|Too Many Requests|The app has exceeded its rate limits.<br>|Inline|

<h3 id="get-followed-artists-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|artists|[CursorPagingSimplifiedArtistObject](#schemacursorpagingsimplifiedartistobject)|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth_2_0 ( Scopes: user-follow-read )
</aside>

## Follow Artists or Users

<a id="opIdfollow-artists-users"></a>

> Code samples

```bash
curl 'https://example.com/me/following?type=artist&ids=2CIMQHirSU0MQqyYHq0eOx%2C57dN52uHvrHOxijzpIgu3E%2C1vCWHaC5f2uS3yhpwWbIA6' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "ids": [
      "string"
    ]
  }'
```

`PUT /me/following`

Add the current user as a follower of one or more artists or other Spotify users.


> Body parameter

```json
{
  "ids": [
    "string"
  ]
}
```

<h3 id="follow-artists-or-users-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|type|query|string|true|none|
|ids|query|string|true|none|
|body|body|object|false|none|
|» ids|body|[string]|true|A JSON array of the artist or user [Spotify IDs](/documentation/web-api/#spotify-uris-and-ids).<br>For example: `{ids:["74ASZWbe4lXaubB36ztrGX", "08td7MxkoHQkXnWAYD8d6Q"]}`. A maximum of 50 IDs can be sent in one request. _**Note**: if the `ids` parameter is present in the query string, any IDs listed here in the body will be ignored._<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|artist|
|type|user|

> Example responses

> 401 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

<h3 id="follow-artists-or-users-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Artist or user followed|None|
|401|Unauthorized|Bad or expired token. This can happen if the user revoked a token or<br>the access token has expired. You should re-authenticate the user.<br>|Inline|
|403|Forbidden|Bad OAuth request (wrong consumer key, bad nonce, expired<br>timestamp...). Unfortunately, re-authenticating the user won't help here.<br>|Inline|
|429|Too Many Requests|The app has exceeded its rate limits.<br>|Inline|

<h3 id="follow-artists-or-users-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth_2_0 ( Scopes: user-follow-modify )
</aside>

## Unfollow Artists or Users

<a id="opIdunfollow-artists-users"></a>

> Code samples

```bash
curl 'https://example.com/me/following?type=artist&ids=2CIMQHirSU0MQqyYHq0eOx%2C57dN52uHvrHOxijzpIgu3E%2C1vCWHaC5f2uS3yhpwWbIA6' \
  -X DELETE \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "ids": [
      "string"
    ]
  }'
```

`DELETE /me/following`

Remove the current user as a follower of one or more artists or other Spotify users.


> Body parameter

```json
{
  "ids": [
    "string"
  ]
}
```

<h3 id="unfollow-artists-or-users-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|type|query|string|true|none|
|ids|query|string|true|none|
|body|body|object|false|none|
|» ids|body|[string]|false|A JSON array of the artist or user [Spotify IDs](/documentation/web-api/#spotify-uris-and-ids). For example: `{ids:["74ASZWbe4lXaubB36ztrGX", "08td7MxkoHQkXnWAYD8d6Q"]}`. A maximum of 50 IDs can be sent in one request. _**Note**: if the `ids` parameter is present in the query string, any IDs listed here in the body will be ignored._<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|artist|
|type|user|

> Example responses

> 401 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

<h3 id="unfollow-artists-or-users-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Artist or user unfollowed|None|
|401|Unauthorized|Bad or expired token. This can happen if the user revoked a token or<br>the access token has expired. You should re-authenticate the user.<br>|Inline|
|403|Forbidden|Bad OAuth request (wrong consumer key, bad nonce, expired<br>timestamp...). Unfortunately, re-authenticating the user won't help here.<br>|Inline|
|429|Too Many Requests|The app has exceeded its rate limits.<br>|Inline|

<h3 id="unfollow-artists-or-users-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth_2_0 ( Scopes: user-follow-modify )
</aside>

## Check If User Follows Artists or Users

<a id="opIdcheck-current-user-follows"></a>

> Code samples

```bash
curl 'https://example.com/me/following/contains?type=artist&ids=2CIMQHirSU0MQqyYHq0eOx%2C57dN52uHvrHOxijzpIgu3E%2C1vCWHaC5f2uS3yhpwWbIA6' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /me/following/contains`

Check to see if the current user is following one or more artists or other Spotify users.


<h3 id="check-if-user-follows-artists-or-users-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|type|query|string|true|none|
|ids|query|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|artist|
|type|user|

> Example responses

> 200 Response

```json
[
  false,
  true
]
```

> 401 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

<h3 id="check-if-user-follows-artists-or-users-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Array of booleans|Inline|
|401|Unauthorized|Bad or expired token. This can happen if the user revoked a token or<br>the access token has expired. You should re-authenticate the user.<br>|Inline|
|403|Forbidden|Bad OAuth request (wrong consumer key, bad nonce, expired<br>timestamp...). Unfortunately, re-authenticating the user won't help here.<br>|Inline|
|429|Too Many Requests|The app has exceeded its rate limits.<br>|Inline|

<h3 id="check-if-user-follows-artists-or-users-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[boolean]|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth_2_0 ( Scopes: user-follow-read )
</aside>

## Get User's Top Artists

<a id="opIdget-users-top-artists"></a>

> Code samples

```bash
curl https://example.com/me/top/artists \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /me/top/artists`

Get the current user's top artists based on calculated affinity.


<h3 id="get-users-top-artists-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|time_range|query|string|false|none|
|limit|query|integer|false|none|
|offset|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "href": "https://api.spotify.com/v1/me/shows?offset=0&limit=20\n",
  "limit": 20,
  "next": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
  "offset": 0,
  "previous": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
  "total": 4,
  "items": [
    {
      "external_urls": {
        "spotify": "string"
      },
      "followers": {
        "href": "string",
        "total": 0
      },
      "genres": [
        "Prog rock",
        "Grunge"
      ],
      "href": "string",
      "id": "string",
      "images": [
        {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
          "width": 300
        }
      ],
      "name": "string",
      "popularity": 0,
      "type": "artist",
      "uri": "string"
    }
  ]
}
```

> 401 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

<h3 id="get-users-top-artists-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Pages of artists|[PagingArtistObject](#schemapagingartistobject)|
|401|Unauthorized|Bad or expired token. This can happen if the user revoked a token or<br>the access token has expired. You should re-authenticate the user.<br>|Inline|
|403|Forbidden|Bad OAuth request (wrong consumer key, bad nonce, expired<br>timestamp...). Unfortunately, re-authenticating the user won't help here.<br>|Inline|
|429|Too Many Requests|The app has exceeded its rate limits.<br>|Inline|

<h3 id="get-users-top-artists-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth_2_0 ( Scopes: user-top-read )
</aside>

## Get User's Top Tracks

<a id="opIdget-users-top-tracks"></a>

> Code samples

```bash
curl https://example.com/me/top/tracks \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /me/top/tracks`

Get the current user's top tracks based on calculated affinity.


<h3 id="get-users-top-tracks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|time_range|query|string|false|none|
|limit|query|integer|false|none|
|offset|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "href": "https://api.spotify.com/v1/me/shows?offset=0&limit=20\n",
  "limit": 20,
  "next": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
  "offset": 0,
  "previous": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
  "total": 4,
  "items": [
    {
      "album": {
        "album_type": "compilation",
        "available_markets": [
          "CA",
          "BR",
          "IT"
        ],
        "external_urls": {
          "spotify": "string"
        },
        "href": "string",
        "id": "2up3OPMp9Tb4dAKM2erWXQ",
        "images": [
          {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
            "width": 300
          }
        ],
        "name": "string",
        "release_date": "1981-12",
        "release_date_precision": "year",
        "restrictions": {
          "reason": "market"
        },
        "total_tracks": 9,
        "type": "album",
        "uri": "spotify:album:2up3OPMp9Tb4dAKM2erWXQ",
        "album_group": "compilation",
        "artists": [
          {
            "external_urls": {
              "spotify": "string"
            },
            "href": "string",
            "id": "string",
            "name": "string",
            "type": "artist",
            "uri": "string"
          }
        ]
      },
      "artists": [
        {
          "external_urls": {
            "spotify": "string"
          },
          "followers": {
            "href": "string",
            "total": 0
          },
          "genres": [
            "Prog rock",
            "Grunge"
          ],
          "href": "string",
          "id": "string",
          "images": [
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
              "width": 300
            }
          ],
          "name": "string",
          "popularity": 0,
          "type": "artist",
          "uri": "string"
        }
      ],
      "available_markets": [
        "string"
      ],
      "disc_number": 0,
      "duration_ms": 0,
      "explicit": true,
      "external_ids": {
        "ean": "string",
        "isrc": "string",
        "upc": "string"
      },
      "external_urls": {
        "spotify": "string"
      },
      "href": "string",
      "id": "string",
      "is_local": true,
      "is_playable": true,
      "linked_from": {
        "external_urls": {
          "spotify": "string"
        },
        "href": "string",
        "id": "string",
        "type": "string",
        "uri": "string"
      },
      "name": "string",
      "popularity": 0,
      "preview_url": "string",
      "restrictions": {
        "reason": "string"
      },
      "track_number": 0,
      "type": "track",
      "uri": "string"
    }
  ]
}
```

> 401 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

<h3 id="get-users-top-tracks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Pages of tracks|[PagingTrackObject](#schemapagingtrackobject)|
|401|Unauthorized|Bad or expired token. This can happen if the user revoked a token or<br>the access token has expired. You should re-authenticate the user.<br>|Inline|
|403|Forbidden|Bad OAuth request (wrong consumer key, bad nonce, expired<br>timestamp...). Unfortunately, re-authenticating the user won't help here.<br>|Inline|
|429|Too Many Requests|The app has exceeded its rate limits.<br>|Inline|

<h3 id="get-users-top-tracks-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth_2_0 ( Scopes: user-top-read )
</aside>

## Follow Playlist

<a id="opIdfollow-playlist"></a>

> Code samples

```bash
curl https://example.com/playlists/3cEYpjA9oz9GiPac4AsH4n/followers \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "public": false
  }'
```

`PUT /playlists/{playlist_id}/followers`

Add the current user as a follower of a playlist.


> Body parameter

```json
{
  "public": false
}
```

<h3 id="follow-playlist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|playlist_id|path|string|true|none|
|body|body|object|false|none|
|» public|body|boolean|false|Defaults to `true`. If `true` the playlist will be included in user's public playlists, if `false` it will remain private.<br>|

> Example responses

> 401 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

<h3 id="follow-playlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Playlist followed|None|
|401|Unauthorized|Bad or expired token. This can happen if the user revoked a token or<br>the access token has expired. You should re-authenticate the user.<br>|Inline|
|403|Forbidden|Bad OAuth request (wrong consumer key, bad nonce, expired<br>timestamp...). Unfortunately, re-authenticating the user won't help here.<br>|Inline|
|429|Too Many Requests|The app has exceeded its rate limits.<br>|Inline|

<h3 id="follow-playlist-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth_2_0 ( Scopes: playlist-modify-public playlist-modify-private )
</aside>

## Unfollow Playlist

<a id="opIdunfollow-playlist"></a>

> Code samples

```bash
curl https://example.com/playlists/3cEYpjA9oz9GiPac4AsH4n/followers \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /playlists/{playlist_id}/followers`

Remove the current user as a follower of a playlist.


<h3 id="unfollow-playlist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|playlist_id|path|string|true|none|

> Example responses

> 401 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

<h3 id="unfollow-playlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Playlist unfollowed|None|
|401|Unauthorized|Bad or expired token. This can happen if the user revoked a token or<br>the access token has expired. You should re-authenticate the user.<br>|Inline|
|403|Forbidden|Bad OAuth request (wrong consumer key, bad nonce, expired<br>timestamp...). Unfortunately, re-authenticating the user won't help here.<br>|Inline|
|429|Too Many Requests|The app has exceeded its rate limits.<br>|Inline|

<h3 id="unfollow-playlist-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth_2_0 ( Scopes: playlist-modify-public playlist-modify-private )
</aside>

## Check if Users Follow Playlist

<a id="opIdcheck-if-user-follows-playlist"></a>

> Code samples

```bash
curl 'https://example.com/playlists/3cEYpjA9oz9GiPac4AsH4n/followers/contains?ids=jmperezperez%2Cthelinmichael%2Cwizzler' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /playlists/{playlist_id}/followers/contains`

Check to see if one or more Spotify users are following a specified playlist.


<h3 id="check-if-users-follow-playlist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|playlist_id|path|string|true|none|
|ids|query|string|true|none|

> Example responses

> 200 Response

```json
[
  false,
  true
]
```

> 401 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

<h3 id="check-if-users-follow-playlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Array of booleans|Inline|
|401|Unauthorized|Bad or expired token. This can happen if the user revoked a token or<br>the access token has expired. You should re-authenticate the user.<br>|Inline|
|403|Forbidden|Bad OAuth request (wrong consumer key, bad nonce, expired<br>timestamp...). Unfortunately, re-authenticating the user won't help here.<br>|Inline|
|429|Too Many Requests|The app has exceeded its rate limits.<br>|Inline|

<h3 id="check-if-users-follow-playlist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[boolean]|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth_2_0
</aside>

## Get User's Profile

<a id="opIdget-users-profile"></a>

> Code samples

```bash
curl https://example.com/users/smedjan \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /users/{user_id}`

Get public profile information about a Spotify user.


<h3 id="get-users-profile-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "display_name": "string",
  "external_urls": {
    "spotify": "string"
  },
  "followers": {
    "href": "string",
    "total": 0
  },
  "href": "string",
  "id": "string",
  "images": [
    {
      "height": 300,
      "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
      "width": 300
    }
  ],
  "type": "user",
  "uri": "string"
}
```

> 401 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

<h3 id="get-users-profile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A user|[PublicUserObject](#schemapublicuserobject)|
|401|Unauthorized|Bad or expired token. This can happen if the user revoked a token or<br>the access token has expired. You should re-authenticate the user.<br>|Inline|
|403|Forbidden|Bad OAuth request (wrong consumer key, bad nonce, expired<br>timestamp...). Unfortunately, re-authenticating the user won't help here.<br>|Inline|
|429|Too Many Requests|The app has exceeded its rate limits.<br>|Inline|

<h3 id="get-users-profile-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth_2_0
</aside>

<h1 id="spotify-web-api-with-fixes-and-improvements-from-sonallux-player">Player</h1>

## Get Playback State

<a id="opIdget-information-about-the-users-current-playback"></a>

> Code samples

```bash
curl https://example.com/me/player \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /me/player`

Get information about the user’s current playback state, including track or episode, progress, and active device.


<h3 id="get-playback-state-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|market|query|string|false|none|
|additional_types|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "actions": {
    "interrupting_playback": true,
    "pausing": true,
    "resuming": true,
    "seeking": true,
    "skipping_next": true,
    "skipping_prev": true,
    "toggling_repeat_context": true,
    "toggling_repeat_track": true,
    "toggling_shuffle": true,
    "transferring_playback": true
  },
  "context": {
    "external_urls": {
      "spotify": "string"
    },
    "href": "string",
    "type": "string",
    "uri": "string"
  },
  "currently_playing_type": "string",
  "device": {
    "id": "string",
    "is_active": true,
    "is_private_session": true,
    "is_restricted": true,
    "name": "Kitchen speaker",
    "type": "computer",
    "volume_percent": 59
  },
  "is_playing": true,
  "item": {
    "album": {
      "album_type": "compilation",
      "available_markets": [
        "CA",
        "BR",
        "IT"
      ],
      "external_urls": {
        "spotify": "string"
      },
      "href": "string",
      "id": "2up3OPMp9Tb4dAKM2erWXQ",
      "images": [
        {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
          "width": 300
        }
      ],
      "name": "string",
      "release_date": "1981-12",
      "release_date_precision": "year",
      "restrictions": {
        "reason": "market"
      },
      "total_tracks": 9,
      "type": "album",
      "uri": "spotify:album:2up3OPMp9Tb4dAKM2erWXQ",
      "album_group": "compilation",
      "artists": [
        {
          "external_urls": {
            "spotify": "string"
          },
          "href": "string",
          "id": "string",
          "name": "string",
          "type": "artist",
          "uri": "string"
        }
      ]
    },
    "artists": [
      {
        "external_urls": {
          "spotify": "string"
        },
        "followers": {
          "href": "string",
          "total": 0
        },
        "genres": [
          "Prog rock",
          "Grunge"
        ],
        "href": "string",
        "id": "string",
        "images": [
          {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
            "width": 300
          }
        ],
        "name": "string",
        "popularity": 0,
        "type": "artist",
        "uri": "string"
      }
    ],
    "available_markets": [
      "string"
    ],
    "disc_number": 0,
    "duration_ms": 0,
    "explicit": true,
    "external_ids": {
      "ean": "string",
      "isrc": "string",
      "upc": "string"
    },
    "external_urls": {
      "spotify": "string"
    },
    "href": "string",
    "id": "string",
    "is_local": true,
    "is_playable": true,
    "linked_from": {
      "external_urls": {
        "spotify": "string"
      },
      "href": "string",
      "id": "string",
      "type": "string",
      "uri": "string"
    },
    "name": "string",
    "popularity": 0,
    "preview_url": "string",
    "restrictions": {
      "reason": "string"
    },
    "track_number": 0,
    "type": "track",
    "uri": "string"
  },
  "progress_ms": 0,
  "repeat_state": "string",
  "shuffle_state": true,
  "timestamp": 0
}
```

> 401 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

<h3 id="get-playback-state-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Information about playback|[CurrentlyPlayingContextObject](#schemacurrentlyplayingcontextobject)|
|204|No Content|Playback not available or active|None|
|401|Unauthorized|Bad or expired token. This can happen if the user revoked a token or<br>the access token has expired. You should re-authenticate the user.<br>|Inline|
|403|Forbidden|Bad OAuth request (wrong consumer key, bad nonce, expired<br>timestamp...). Unfortunately, re-authenticating the user won't help here.<br>|Inline|
|429|Too Many Requests|The app has exceeded its rate limits.<br>|Inline|

<h3 id="get-playback-state-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth_2_0 ( Scopes: user-read-playback-state )
</aside>

## Transfer Playback

<a id="opIdtransfer-a-users-playback"></a>

> Code samples

```bash
curl https://example.com/me/player \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "device_ids": [
      "74ASZWbe4lXaubB36ztrGX"
    ]
  }'
```

`PUT /me/player`

Transfer playback to a new device and determine if it should start playing.


> Body parameter

```json
{
  "device_ids": [
    "74ASZWbe4lXaubB36ztrGX"
  ]
}
```

<h3 id="transfer-playback-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» device_ids|body|[string]|true|A JSON array containing the ID of the device on which playback should be started/transferred.<br/>For example:`{device_ids:["74ASZWbe4lXaubB36ztrGX"]}`<br/>_**Note**: Although an array is accepted, only a single device_id is currently supported. Supplying more than one will return `400 Bad Request`_<br>|
|» play|body|boolean|false|**true**: ensure playback happens on new device.<br/>**false** or not provided: keep the current playback state.<br>|

> Example responses

> 401 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

<h3 id="transfer-playback-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Playback transferred|None|
|401|Unauthorized|Bad or expired token. This can happen if the user revoked a token or<br>the access token has expired. You should re-authenticate the user.<br>|Inline|
|403|Forbidden|Bad OAuth request (wrong consumer key, bad nonce, expired<br>timestamp...). Unfortunately, re-authenticating the user won't help here.<br>|Inline|
|429|Too Many Requests|The app has exceeded its rate limits.<br>|Inline|

<h3 id="transfer-playback-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth_2_0 ( Scopes: user-modify-playback-state )
</aside>

## Get Currently Playing Track

<a id="opIdget-the-users-currently-playing-track"></a>

> Code samples

```bash
curl https://example.com/me/player/currently-playing \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /me/player/currently-playing`

Get the object currently being played on the user's Spotify account.


<h3 id="get-currently-playing-track-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|market|query|string|false|none|
|additional_types|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "context": {
    "external_urls": {
      "spotify": "string"
    },
    "href": "string",
    "type": "string",
    "uri": "string"
  },
  "currently_playing_type": "string",
  "is_playing": true,
  "item": {
    "album": {
      "album_type": "compilation",
      "available_markets": [
        "CA",
        "BR",
        "IT"
      ],
      "external_urls": {
        "spotify": "string"
      },
      "href": "string",
      "id": "2up3OPMp9Tb4dAKM2erWXQ",
      "images": [
        {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
          "width": 300
        }
      ],
      "name": "string",
      "release_date": "1981-12",
      "release_date_precision": "year",
      "restrictions": {
        "reason": "market"
      },
      "total_tracks": 9,
      "type": "album",
      "uri": "spotify:album:2up3OPMp9Tb4dAKM2erWXQ",
      "album_group": "compilation",
      "artists": [
        {
          "external_urls": {
            "spotify": "string"
          },
          "href": "string",
          "id": "string",
          "name": "string",
          "type": "artist",
          "uri": "string"
        }
      ]
    },
    "artists": [
      {
        "external_urls": {
          "spotify": "string"
        },
        "followers": {
          "href": "string",
          "total": 0
        },
        "genres": [
          "Prog rock",
          "Grunge"
        ],
        "href": "string",
        "id": "string",
        "images": [
          {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
            "width": 300
          }
        ],
        "name": "string",
        "popularity": 0,
        "type": "artist",
        "uri": "string"
      }
    ],
    "available_markets": [
      "string"
    ],
    "disc_number": 0,
    "duration_ms": 0,
    "explicit": true,
    "external_ids": {
      "ean": "string",
      "isrc": "string",
      "upc": "string"
    },
    "external_urls": {
      "spotify": "string"
    },
    "href": "string",
    "id": "string",
    "is_local": true,
    "is_playable": true,
    "linked_from": {
      "external_urls": {
        "spotify": "string"
      },
      "href": "string",
      "id": "string",
      "type": "string",
      "uri": "string"
    },
    "name": "string",
    "popularity": 0,
    "preview_url": "string",
    "restrictions": {
      "reason": "string"
    },
    "track_number": 0,
    "type": "track",
    "uri": "string"
  },
  "progress_ms": 0,
  "timestamp": 0
}
```

> 401 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

<h3 id="get-currently-playing-track-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Information about the currently playing track|[CurrentlyPlayingObject](#schemacurrentlyplayingobject)|
|401|Unauthorized|Bad or expired token. This can happen if the user revoked a token or<br>the access token has expired. You should re-authenticate the user.<br>|Inline|
|403|Forbidden|Bad OAuth request (wrong consumer key, bad nonce, expired<br>timestamp...). Unfortunately, re-authenticating the user won't help here.<br>|Inline|
|429|Too Many Requests|The app has exceeded its rate limits.<br>|Inline|

<h3 id="get-currently-playing-track-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth_2_0 ( Scopes: user-read-currently-playing )
</aside>

## Get Available Devices

<a id="opIdget-a-users-available-devices"></a>

> Code samples

```bash
curl https://example.com/me/player/devices \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /me/player/devices`

Get information about a user’s available devices.


> Example responses

> 200 Response

```json
{
  "devices": [
    {
      "id": "string",
      "is_active": true,
      "is_private_session": true,
      "is_restricted": true,
      "name": "Kitchen speaker",
      "type": "computer",
      "volume_percent": 59
    }
  ]
}
```

> 401 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

<h3 id="get-available-devices-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A set of devices|[DevicesObject](#schemadevicesobject)|
|401|Unauthorized|Bad or expired token. This can happen if the user revoked a token or<br>the access token has expired. You should re-authenticate the user.<br>|Inline|
|403|Forbidden|Bad OAuth request (wrong consumer key, bad nonce, expired<br>timestamp...). Unfortunately, re-authenticating the user won't help here.<br>|Inline|
|429|Too Many Requests|The app has exceeded its rate limits.<br>|Inline|

<h3 id="get-available-devices-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth_2_0 ( Scopes: user-read-playback-state )
</aside>

## Skip To Next

<a id="opIdskip-users-playback-to-next-track"></a>

> Code samples

```bash
curl https://example.com/me/player/next \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /me/player/next`

Skips to next track in the user’s queue.


<h3 id="skip-to-next-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|device_id|query|string|false|none|

> Example responses

> 401 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

<h3 id="skip-to-next-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Command sent|None|
|401|Unauthorized|Bad or expired token. This can happen if the user revoked a token or<br>the access token has expired. You should re-authenticate the user.<br>|Inline|
|403|Forbidden|Bad OAuth request (wrong consumer key, bad nonce, expired<br>timestamp...). Unfortunately, re-authenticating the user won't help here.<br>|Inline|
|429|Too Many Requests|The app has exceeded its rate limits.<br>|Inline|

<h3 id="skip-to-next-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth_2_0 ( Scopes: user-modify-playback-state )
</aside>

## Pause Playback

<a id="opIdpause-a-users-playback"></a>

> Code samples

```bash
curl https://example.com/me/player/pause \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /me/player/pause`

Pause playback on the user's account.


<h3 id="pause-playback-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|device_id|query|string|false|none|

> Example responses

> 401 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

<h3 id="pause-playback-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Playback paused|None|
|401|Unauthorized|Bad or expired token. This can happen if the user revoked a token or<br>the access token has expired. You should re-authenticate the user.<br>|Inline|
|403|Forbidden|Bad OAuth request (wrong consumer key, bad nonce, expired<br>timestamp...). Unfortunately, re-authenticating the user won't help here.<br>|Inline|
|429|Too Many Requests|The app has exceeded its rate limits.<br>|Inline|

<h3 id="pause-playback-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth_2_0 ( Scopes: user-modify-playback-state )
</aside>

## Start/Resume Playback

<a id="opIdstart-a-users-playback"></a>

> Code samples

```bash
curl https://example.com/me/player/play \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "context_uri": "spotify:album:5ht7ItJgpBH7W6vJ5BqpPr",
    "offset": {
      "position": 5
    },
    "position_ms": 0
  }'
```

`PUT /me/player/play`

Start a new context or resume current playback on the user's active device.


> Body parameter

```json
{
  "context_uri": "spotify:album:5ht7ItJgpBH7W6vJ5BqpPr",
  "offset": {
    "position": 5
  },
  "position_ms": 0
}
```

<h3 id="startresume-playback-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|device_id|query|string|false|none|
|body|body|object|false|none|
|» context_uri|body|string|false|Optional. Spotify URI of the context to play.<br>Valid contexts are albums, artists & playlists.<br>`{context_uri:"spotify:album:1Je1IMUlBXcx1Fz0WE7oPT"}`<br>|
|» offset|body|object|false|Optional. Indicates from where in the context playback should start. Only available when context_uri corresponds to an album or playlist object<br>"position" is zero based and can’t be negative. Example: `"offset": {"position": 5}`<br>"uri" is a string representing the uri of the item to start at. Example: `"offset": {"uri": "spotify:track:1301WleyT98MSxVHPZCA6M"}`<br>|
|» position_ms|body|integer|false|Indicates from what position to start playback. Must be a positive number. Passing in a position that is greater than the length of the track will cause the player to start playing the next song.<br>|
|» uris|body|[string]|false|Optional. A JSON array of the Spotify track URIs to play.<br>For example: `{"uris": ["spotify:track:4iV5W9uYEdYUVa79Axb7Rh", "spotify:track:1301WleyT98MSxVHPZCA6M"]}`<br>|

> Example responses

> 401 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

<h3 id="startresume-playback-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Playback started|None|
|401|Unauthorized|Bad or expired token. This can happen if the user revoked a token or<br>the access token has expired. You should re-authenticate the user.<br>|Inline|
|403|Forbidden|Bad OAuth request (wrong consumer key, bad nonce, expired<br>timestamp...). Unfortunately, re-authenticating the user won't help here.<br>|Inline|
|429|Too Many Requests|The app has exceeded its rate limits.<br>|Inline|

<h3 id="startresume-playback-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth_2_0 ( Scopes: user-modify-playback-state )
</aside>

## Skip To Previous

<a id="opIdskip-users-playback-to-previous-track"></a>

> Code samples

```bash
curl https://example.com/me/player/previous \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /me/player/previous`

Skips to previous track in the user’s queue.


<h3 id="skip-to-previous-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|device_id|query|string|false|none|

> Example responses

> 401 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

<h3 id="skip-to-previous-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Command sent|None|
|401|Unauthorized|Bad or expired token. This can happen if the user revoked a token or<br>the access token has expired. You should re-authenticate the user.<br>|Inline|
|403|Forbidden|Bad OAuth request (wrong consumer key, bad nonce, expired<br>timestamp...). Unfortunately, re-authenticating the user won't help here.<br>|Inline|
|429|Too Many Requests|The app has exceeded its rate limits.<br>|Inline|

<h3 id="skip-to-previous-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth_2_0 ( Scopes: user-modify-playback-state )
</aside>

## Get the User's Queue

<a id="opIdget-queue"></a>

> Code samples

```bash
curl https://example.com/me/player/queue \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /me/player/queue`

Get the list of objects that make up the user's queue.


> Example responses

> 200 Response

```json
{
  "currently_playing": {
    "album": {
      "album_type": "compilation",
      "available_markets": [
        "CA",
        "BR",
        "IT"
      ],
      "external_urls": {
        "spotify": "string"
      },
      "href": "string",
      "id": "2up3OPMp9Tb4dAKM2erWXQ",
      "images": [
        {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
          "width": 300
        }
      ],
      "name": "string",
      "release_date": "1981-12",
      "release_date_precision": "year",
      "restrictions": {
        "reason": "market"
      },
      "total_tracks": 9,
      "type": "album",
      "uri": "spotify:album:2up3OPMp9Tb4dAKM2erWXQ",
      "album_group": "compilation",
      "artists": [
        {
          "external_urls": {
            "spotify": "string"
          },
          "href": "string",
          "id": "string",
          "name": "string",
          "type": "artist",
          "uri": "string"
        }
      ]
    },
    "artists": [
      {
        "external_urls": {
          "spotify": "string"
        },
        "followers": {
          "href": "string",
          "total": 0
        },
        "genres": [
          "Prog rock",
          "Grunge"
        ],
        "href": "string",
        "id": "string",
        "images": [
          {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
            "width": 300
          }
        ],
        "name": "string",
        "popularity": 0,
        "type": "artist",
        "uri": "string"
      }
    ],
    "available_markets": [
      "string"
    ],
    "disc_number": 0,
    "duration_ms": 0,
    "explicit": true,
    "external_ids": {
      "ean": "string",
      "isrc": "string",
      "upc": "string"
    },
    "external_urls": {
      "spotify": "string"
    },
    "href": "string",
    "id": "string",
    "is_local": true,
    "is_playable": true,
    "linked_from": {
      "external_urls": {
        "spotify": "string"
      },
      "href": "string",
      "id": "string",
      "type": "string",
      "uri": "string"
    },
    "name": "string",
    "popularity": 0,
    "preview_url": "string",
    "restrictions": {
      "reason": "string"
    },
    "track_number": 0,
    "type": "track",
    "uri": "string"
  },
  "queue": [
    {
      "album": {
        "album_type": "compilation",
        "available_markets": [
          "CA",
          "BR",
          "IT"
        ],
        "external_urls": {
          "spotify": "string"
        },
        "href": "string",
        "id": "2up3OPMp9Tb4dAKM2erWXQ",
        "images": [
          {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
            "width": 300
          }
        ],
        "name": "string",
        "release_date": "1981-12",
        "release_date_precision": "year",
        "restrictions": {
          "reason": "market"
        },
        "total_tracks": 9,
        "type": "album",
        "uri": "spotify:album:2up3OPMp9Tb4dAKM2erWXQ",
        "album_group": "compilation",
        "artists": [
          {
            "external_urls": {
              "spotify": "string"
            },
            "href": "string",
            "id": "string",
            "name": "string",
            "type": "artist",
            "uri": "string"
          }
        ]
      },
      "artists": [
        {
          "external_urls": {
            "spotify": "string"
          },
          "followers": {
            "href": "string",
            "total": 0
          },
          "genres": [
            "Prog rock",
            "Grunge"
          ],
          "href": "string",
          "id": "string",
          "images": [
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
              "width": 300
            }
          ],
          "name": "string",
          "popularity": 0,
          "type": "artist",
          "uri": "string"
        }
      ],
      "available_markets": [
        "string"
      ],
      "disc_number": 0,
      "duration_ms": 0,
      "explicit": true,
      "external_ids": {
        "ean": "string",
        "isrc": "string",
        "upc": "string"
      },
      "external_urls": {
        "spotify": "string"
      },
      "href": "string",
      "id": "string",
      "is_local": true,
      "is_playable": true,
      "linked_from": {
        "external_urls": {
          "spotify": "string"
        },
        "href": "string",
        "id": "string",
        "type": "string",
        "uri": "string"
      },
      "name": "string",
      "popularity": 0,
      "preview_url": "string",
      "restrictions": {
        "reason": "string"
      },
      "track_number": 0,
      "type": "track",
      "uri": "string"
    }
  ]
}
```

> 401 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

<h3 id="get-the-users-queue-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Information about the queue|[QueueObject](#schemaqueueobject)|
|401|Unauthorized|Bad or expired token. This can happen if the user revoked a token or<br>the access token has expired. You should re-authenticate the user.<br>|Inline|
|403|Forbidden|Bad OAuth request (wrong consumer key, bad nonce, expired<br>timestamp...). Unfortunately, re-authenticating the user won't help here.<br>|Inline|
|429|Too Many Requests|The app has exceeded its rate limits.<br>|Inline|

<h3 id="get-the-users-queue-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth_2_0 ( Scopes: user-read-playback-state )
</aside>

## Add Item to Playback Queue

<a id="opIdadd-to-queue"></a>

> Code samples

```bash
curl 'https://example.com/me/player/queue?uri=spotify%3Atrack%3A4iV5W9uYEdYUVa79Axb7Rh' \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /me/player/queue`

Add an item to the end of the user's current playback queue.


<h3 id="add-item-to-playback-queue-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|uri|query|string|true|none|
|device_id|query|string|false|none|

> Example responses

> 401 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

<h3 id="add-item-to-playback-queue-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Command received|None|
|401|Unauthorized|Bad or expired token. This can happen if the user revoked a token or<br>the access token has expired. You should re-authenticate the user.<br>|Inline|
|403|Forbidden|Bad OAuth request (wrong consumer key, bad nonce, expired<br>timestamp...). Unfortunately, re-authenticating the user won't help here.<br>|Inline|
|429|Too Many Requests|The app has exceeded its rate limits.<br>|Inline|

<h3 id="add-item-to-playback-queue-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth_2_0 ( Scopes: user-modify-playback-state )
</aside>

## Get Recently Played Tracks

<a id="opIdget-recently-played"></a>

> Code samples

```bash
curl https://example.com/me/player/recently-played \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /me/player/recently-played`

Get tracks from the current user's recently played tracks.
_**Note**: Currently doesn't support podcast episodes._


<h3 id="get-recently-played-tracks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|none|
|after|query|integer|false|none|
|before|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "cursors": {
    "after": "string",
    "before": "string"
  },
  "href": "string",
  "limit": 0,
  "next": "string",
  "total": 0,
  "items": [
    {
      "context": {
        "external_urls": {
          "spotify": "string"
        },
        "href": "string",
        "type": "string",
        "uri": "string"
      },
      "played_at": "1970-01-01T00:00:00Z",
      "track": {
        "album": {
          "album_type": "compilation",
          "available_markets": [
            "CA",
            "BR",
            "IT"
          ],
          "external_urls": {
            "spotify": "string"
          },
          "href": "string",
          "id": "2up3OPMp9Tb4dAKM2erWXQ",
          "images": [
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
              "width": 300
            }
          ],
          "name": "string",
          "release_date": "1981-12",
          "release_date_precision": "year",
          "restrictions": {
            "reason": "market"
          },
          "total_tracks": 9,
          "type": "album",
          "uri": "spotify:album:2up3OPMp9Tb4dAKM2erWXQ",
          "album_group": "compilation",
          "artists": [
            {
              "external_urls": {
                "spotify": "string"
              },
              "href": "string",
              "id": "string",
              "name": "string",
              "type": "artist",
              "uri": "string"
            }
          ]
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "string"
            },
            "followers": {
              "href": "string",
              "total": 0
            },
            "genres": [
              "Prog rock",
              "Grunge"
            ],
            "href": "string",
            "id": "string",
            "images": [
              {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
                "width": 300
              }
            ],
            "name": "string",
            "popularity": 0,
            "type": "artist",
            "uri": "string"
          }
        ],
        "available_markets": [
          "string"
        ],
        "disc_number": 0,
        "duration_ms": 0,
        "explicit": true,
        "external_ids": {
          "ean": "string",
          "isrc": "string",
          "upc": "string"
        },
        "external_urls": {
          "spotify": "string"
        },
        "href": "string",
        "id": "string",
        "is_local": true,
        "is_playable": true,
        "linked_from": {
          "external_urls": {
            "spotify": "string"
          },
          "href": "string",
          "id": "string",
          "type": "string",
          "uri": "string"
        },
        "name": "string",
        "popularity": 0,
        "preview_url": "string",
        "restrictions": {
          "reason": "string"
        },
        "track_number": 0,
        "type": "track",
        "uri": "string"
      }
    }
  ]
}
```

> 401 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

<h3 id="get-recently-played-tracks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A paged set of tracks|[CursorPagingPlayHistoryObject](#schemacursorpagingplayhistoryobject)|
|401|Unauthorized|Bad or expired token. This can happen if the user revoked a token or<br>the access token has expired. You should re-authenticate the user.<br>|Inline|
|403|Forbidden|Bad OAuth request (wrong consumer key, bad nonce, expired<br>timestamp...). Unfortunately, re-authenticating the user won't help here.<br>|Inline|
|429|Too Many Requests|The app has exceeded its rate limits.<br>|Inline|

<h3 id="get-recently-played-tracks-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth_2_0 ( Scopes: user-read-recently-played )
</aside>

## Set Repeat Mode

<a id="opIdset-repeat-mode-on-users-playback"></a>

> Code samples

```bash
curl 'https://example.com/me/player/repeat?state=context' \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /me/player/repeat`

Set the repeat mode for the user's playback. Options are repeat-track,
repeat-context, and off.


<h3 id="set-repeat-mode-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|state|query|string|true|none|
|device_id|query|string|false|none|

> Example responses

> 401 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

<h3 id="set-repeat-mode-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Command sent|None|
|401|Unauthorized|Bad or expired token. This can happen if the user revoked a token or<br>the access token has expired. You should re-authenticate the user.<br>|Inline|
|403|Forbidden|Bad OAuth request (wrong consumer key, bad nonce, expired<br>timestamp...). Unfortunately, re-authenticating the user won't help here.<br>|Inline|
|429|Too Many Requests|The app has exceeded its rate limits.<br>|Inline|

<h3 id="set-repeat-mode-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth_2_0 ( Scopes: user-modify-playback-state )
</aside>

## Seek To Position

<a id="opIdseek-to-position-in-currently-playing-track"></a>

> Code samples

```bash
curl 'https://example.com/me/player/seek?position_ms=25000' \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /me/player/seek`

Seeks to the given position in the user’s currently playing track.


<h3 id="seek-to-position-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|position_ms|query|integer|true|none|
|device_id|query|string|false|none|

> Example responses

> 401 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

<h3 id="seek-to-position-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Command sent|None|
|401|Unauthorized|Bad or expired token. This can happen if the user revoked a token or<br>the access token has expired. You should re-authenticate the user.<br>|Inline|
|403|Forbidden|Bad OAuth request (wrong consumer key, bad nonce, expired<br>timestamp...). Unfortunately, re-authenticating the user won't help here.<br>|Inline|
|429|Too Many Requests|The app has exceeded its rate limits.<br>|Inline|

<h3 id="seek-to-position-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth_2_0 ( Scopes: user-modify-playback-state )
</aside>

## Toggle Playback Shuffle

<a id="opIdtoggle-shuffle-for-users-playback"></a>

> Code samples

```bash
curl 'https://example.com/me/player/shuffle?state=true' \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /me/player/shuffle`

Toggle shuffle on or off for user’s playback.


<h3 id="toggle-playback-shuffle-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|state|query|boolean|true|none|
|device_id|query|string|false|none|

> Example responses

> 401 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

<h3 id="toggle-playback-shuffle-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Command sent|None|
|401|Unauthorized|Bad or expired token. This can happen if the user revoked a token or<br>the access token has expired. You should re-authenticate the user.<br>|Inline|
|403|Forbidden|Bad OAuth request (wrong consumer key, bad nonce, expired<br>timestamp...). Unfortunately, re-authenticating the user won't help here.<br>|Inline|
|429|Too Many Requests|The app has exceeded its rate limits.<br>|Inline|

<h3 id="toggle-playback-shuffle-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth_2_0 ( Scopes: user-modify-playback-state )
</aside>

## Set Playback Volume

<a id="opIdset-volume-for-users-playback"></a>

> Code samples

```bash
curl 'https://example.com/me/player/volume?volume_percent=50' \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /me/player/volume`

Set the volume for the user’s current playback device.


<h3 id="set-playback-volume-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|volume_percent|query|integer|true|none|
|device_id|query|string|false|none|

> Example responses

> 401 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

<h3 id="set-playback-volume-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Command sent|None|
|401|Unauthorized|Bad or expired token. This can happen if the user revoked a token or<br>the access token has expired. You should re-authenticate the user.<br>|Inline|
|403|Forbidden|Bad OAuth request (wrong consumer key, bad nonce, expired<br>timestamp...). Unfortunately, re-authenticating the user won't help here.<br>|Inline|
|429|Too Many Requests|The app has exceeded its rate limits.<br>|Inline|

<h3 id="set-playback-volume-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth_2_0 ( Scopes: user-modify-playback-state )
</aside>

<h1 id="spotify-web-api-with-fixes-and-improvements-from-sonallux-shows">Shows</h1>

## Get User's Saved Shows

<a id="opIdget-users-saved-shows"></a>

> Code samples

```bash
curl https://example.com/me/shows \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /me/shows`

Get a list of shows saved in the current Spotify user's library. Optional parameters can be used to limit the number of shows returned.


<h3 id="get-users-saved-shows-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|none|
|offset|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "href": "https://api.spotify.com/v1/me/shows?offset=0&limit=20\n",
  "limit": 20,
  "next": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
  "offset": 0,
  "previous": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
  "total": 4,
  "items": [
    {
      "added_at": "1970-01-01T00:00:00Z",
      "show": {
        "available_markets": [
          "string"
        ],
        "copyrights": [
          {
            "text": "string",
            "type": "string"
          }
        ],
        "description": "string",
        "explicit": true,
        "external_urls": {
          "spotify": "string"
        },
        "href": "string",
        "html_description": "string",
        "id": "string",
        "images": [
          {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
            "width": 300
          }
        ],
        "is_externally_hosted": true,
        "languages": [
          "string"
        ],
        "media_type": "string",
        "name": "string",
        "publisher": "string",
        "total_episodes": 0,
        "type": "show",
        "uri": "string"
      }
    }
  ]
}
```

> 401 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

<h3 id="get-users-saved-shows-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Pages of shows|[PagingSavedShowObject](#schemapagingsavedshowobject)|
|401|Unauthorized|Bad or expired token. This can happen if the user revoked a token or<br>the access token has expired. You should re-authenticate the user.<br>|Inline|
|403|Forbidden|Bad OAuth request (wrong consumer key, bad nonce, expired<br>timestamp...). Unfortunately, re-authenticating the user won't help here.<br>|Inline|
|429|Too Many Requests|The app has exceeded its rate limits.<br>|Inline|

<h3 id="get-users-saved-shows-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth_2_0 ( Scopes: user-library-read )
</aside>

## Save Shows for Current User

<a id="opIdsave-shows-user"></a>

> Code samples

```bash
curl 'https://example.com/me/shows?ids=5CfCWKI5pZ28U0uOzXkDHe%2C5as3aKmN2k11yfDDDSrvaZ' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "ids": [
      "string"
    ]
  }'
```

`PUT /me/shows`

Save one or more shows to current Spotify user's library.


> Body parameter

```json
{
  "ids": [
    "string"
  ]
}
```

<h3 id="save-shows-for-current-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ids|query|string|true|none|
|body|body|object|false|none|
|» ids|body|[string]|false|A JSON array of the [Spotify IDs](https://developer.spotify.com/documentation/web-api/#spotify-uris-and-ids).  <br>A maximum of 50 items can be specified in one request. *Note: if the `ids` parameter is present in the query string, any IDs listed here in the body will be ignored.*|

> Example responses

> 401 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

<h3 id="save-shows-for-current-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Show saved|None|
|401|Unauthorized|Bad or expired token. This can happen if the user revoked a token or<br>the access token has expired. You should re-authenticate the user.<br>|Inline|
|403|Forbidden|Bad OAuth request (wrong consumer key, bad nonce, expired<br>timestamp...). Unfortunately, re-authenticating the user won't help here.<br>|Inline|
|429|Too Many Requests|The app has exceeded its rate limits.<br>|Inline|

<h3 id="save-shows-for-current-user-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth_2_0 ( Scopes: user-library-modify )
</aside>

## Remove User's Saved Shows

<a id="opIdremove-shows-user"></a>

> Code samples

```bash
curl 'https://example.com/me/shows?ids=5CfCWKI5pZ28U0uOzXkDHe%2C5as3aKmN2k11yfDDDSrvaZ' \
  -X DELETE \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "ids": [
      "string"
    ]
  }'
```

`DELETE /me/shows`

Delete one or more shows from current Spotify user's library.


> Body parameter

```json
{
  "ids": [
    "string"
  ]
}
```

<h3 id="remove-users-saved-shows-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ids|query|string|true|none|
|market|query|string|false|none|
|body|body|object|false|none|
|» ids|body|[string]|false|A JSON array of the [Spotify IDs](https://developer.spotify.com/documentation/web-api/#spotify-uris-and-ids).  <br>A maximum of 50 items can be specified in one request. *Note: if the `ids` parameter is present in the query string, any IDs listed here in the body will be ignored.*|

> Example responses

> 401 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

<h3 id="remove-users-saved-shows-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Show removed|None|
|401|Unauthorized|Bad or expired token. This can happen if the user revoked a token or<br>the access token has expired. You should re-authenticate the user.<br>|Inline|
|403|Forbidden|Bad OAuth request (wrong consumer key, bad nonce, expired<br>timestamp...). Unfortunately, re-authenticating the user won't help here.<br>|Inline|
|429|Too Many Requests|The app has exceeded its rate limits.<br>|Inline|

<h3 id="remove-users-saved-shows-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth_2_0 ( Scopes: user-library-modify )
</aside>

## Check User's Saved Shows

<a id="opIdcheck-users-saved-shows"></a>

> Code samples

```bash
curl 'https://example.com/me/shows/contains?ids=5CfCWKI5pZ28U0uOzXkDHe%2C5as3aKmN2k11yfDDDSrvaZ' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /me/shows/contains`

Check if one or more shows is already saved in the current Spotify user's library.


<h3 id="check-users-saved-shows-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ids|query|string|true|none|

> Example responses

> 200 Response

```json
[
  false,
  true
]
```

> 401 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

<h3 id="check-users-saved-shows-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Array of booleans|Inline|
|401|Unauthorized|Bad or expired token. This can happen if the user revoked a token or<br>the access token has expired. You should re-authenticate the user.<br>|Inline|
|403|Forbidden|Bad OAuth request (wrong consumer key, bad nonce, expired<br>timestamp...). Unfortunately, re-authenticating the user won't help here.<br>|Inline|
|429|Too Many Requests|The app has exceeded its rate limits.<br>|Inline|

<h3 id="check-users-saved-shows-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[boolean]|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth_2_0 ( Scopes: user-library-read )
</aside>

## Get Several Shows

<a id="opIdget-multiple-shows"></a>

> Code samples

```bash
curl 'https://example.com/shows?ids=5CfCWKI5pZ28U0uOzXkDHe%2C5as3aKmN2k11yfDDDSrvaZ' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /shows`

Get Spotify catalog information for several shows based on their Spotify IDs.


<h3 id="get-several-shows-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|market|query|string|false|none|
|ids|query|string|true|none|

> Example responses

> 200 Response

```json
{
  "shows": [
    {
      "available_markets": [
        "string"
      ],
      "copyrights": [
        {
          "text": "string",
          "type": "string"
        }
      ],
      "description": "string",
      "explicit": true,
      "external_urls": {
        "spotify": "string"
      },
      "href": "string",
      "html_description": "string",
      "id": "string",
      "images": [
        {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
          "width": 300
        }
      ],
      "is_externally_hosted": true,
      "languages": [
        "string"
      ],
      "media_type": "string",
      "name": "string",
      "publisher": "string",
      "total_episodes": 0,
      "type": "show",
      "uri": "string"
    }
  ]
}
```

> 401 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

<h3 id="get-several-shows-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A set of shows|Inline|
|401|Unauthorized|Bad or expired token. This can happen if the user revoked a token or<br>the access token has expired. You should re-authenticate the user.<br>|Inline|
|403|Forbidden|Bad OAuth request (wrong consumer key, bad nonce, expired<br>timestamp...). Unfortunately, re-authenticating the user won't help here.<br>|Inline|
|429|Too Many Requests|The app has exceeded its rate limits.<br>|Inline|

<h3 id="get-several-shows-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|shows|[[SimplifiedShowObject](#schemasimplifiedshowobject)]|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth_2_0
</aside>

## Get Show

<a id="opIdget-a-show"></a>

> Code samples

```bash
curl https://example.com/shows/38bS44xjbVVZ3No3ByF1dJ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /shows/{id}`

Get Spotify catalog information for a single show identified by its
unique Spotify ID.


<h3 id="get-show-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|market|query|string|false|none|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "available_markets": [
    "string"
  ],
  "copyrights": [
    {
      "text": "string",
      "type": "string"
    }
  ],
  "description": "string",
  "explicit": true,
  "external_urls": {
    "spotify": "string"
  },
  "href": "string",
  "html_description": "string",
  "id": "string",
  "images": [
    {
      "height": 300,
      "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
      "width": 300
    }
  ],
  "is_externally_hosted": true,
  "languages": [
    "string"
  ],
  "media_type": "string",
  "name": "string",
  "publisher": "string",
  "total_episodes": 0,
  "type": "show",
  "uri": "string",
  "episodes": {
    "href": "https://api.spotify.com/v1/me/shows?offset=0&limit=20\n",
    "limit": 20,
    "next": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
    "offset": 0,
    "previous": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
    "total": 4,
    "items": [
      {
        "audio_preview_url": "https://p.scdn.co/mp3-preview/2f37da1d4221f40b9d1a98cd191f4d6f1646ad17",
        "description": "A Spotify podcast sharing fresh insights on important topics of the moment—in a way only Spotify can. You’ll hear from experts in the music, podcast and tech industries as we discover and uncover stories about our work and the world around us.\n",
        "duration_ms": 1686230,
        "explicit": true,
        "external_urls": {
          "spotify": "string"
        },
        "href": "https://api.spotify.com/v1/episodes/5Xt5DXGzch68nYYamXrNxZ",
        "html_description": "<p>A Spotify podcast sharing fresh insights on important topics of the moment—in a way only Spotify can. You’ll hear from experts in the music, podcast and tech industries as we discover and uncover stories about our work and the world around us.</p>\n",
        "id": "5Xt5DXGzch68nYYamXrNxZ",
        "images": [
          {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
            "width": 300
          }
        ],
        "is_externally_hosted": true,
        "is_playable": true,
        "language": "en",
        "languages": [
          "fr",
          "en"
        ],
        "name": "Starting Your Own Podcast: Tips, Tricks, and Advice From Anchor Creators\n",
        "release_date": "1981-12-15",
        "release_date_precision": "day",
        "restrictions": {
          "reason": "string"
        },
        "resume_point": {
          "fully_played": true,
          "resume_position_ms": 0
        },
        "type": "episode",
        "uri": "spotify:episode:0zLhl3WsOCQHbe1BPTiHgr"
      }
    ]
  }
}
```

> 401 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

<h3 id="get-show-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A show|[ShowObject](#schemashowobject)|
|401|Unauthorized|Bad or expired token. This can happen if the user revoked a token or<br>the access token has expired. You should re-authenticate the user.<br>|Inline|
|403|Forbidden|Bad OAuth request (wrong consumer key, bad nonce, expired<br>timestamp...). Unfortunately, re-authenticating the user won't help here.<br>|Inline|
|429|Too Many Requests|The app has exceeded its rate limits.<br>|Inline|

<h3 id="get-show-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth_2_0 ( Scopes: user-read-playback-position )
</aside>

## Get Show Episodes

<a id="opIdget-a-shows-episodes"></a>

> Code samples

```bash
curl https://example.com/shows/38bS44xjbVVZ3No3ByF1dJ/episodes \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /shows/{id}/episodes`

Get Spotify catalog information about an show’s episodes. Optional parameters can be used to limit the number of episodes returned.


<h3 id="get-show-episodes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|market|query|string|false|none|
|limit|query|integer|false|none|
|offset|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "href": "https://api.spotify.com/v1/me/shows?offset=0&limit=20\n",
  "limit": 20,
  "next": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
  "offset": 0,
  "previous": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
  "total": 4,
  "items": [
    {
      "audio_preview_url": "https://p.scdn.co/mp3-preview/2f37da1d4221f40b9d1a98cd191f4d6f1646ad17",
      "description": "A Spotify podcast sharing fresh insights on important topics of the moment—in a way only Spotify can. You’ll hear from experts in the music, podcast and tech industries as we discover and uncover stories about our work and the world around us.\n",
      "duration_ms": 1686230,
      "explicit": true,
      "external_urls": {
        "spotify": "string"
      },
      "href": "https://api.spotify.com/v1/episodes/5Xt5DXGzch68nYYamXrNxZ",
      "html_description": "<p>A Spotify podcast sharing fresh insights on important topics of the moment—in a way only Spotify can. You’ll hear from experts in the music, podcast and tech industries as we discover and uncover stories about our work and the world around us.</p>\n",
      "id": "5Xt5DXGzch68nYYamXrNxZ",
      "images": [
        {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
          "width": 300
        }
      ],
      "is_externally_hosted": true,
      "is_playable": true,
      "language": "en",
      "languages": [
        "fr",
        "en"
      ],
      "name": "Starting Your Own Podcast: Tips, Tricks, and Advice From Anchor Creators\n",
      "release_date": "1981-12-15",
      "release_date_precision": "day",
      "restrictions": {
        "reason": "string"
      },
      "resume_point": {
        "fully_played": true,
        "resume_position_ms": 0
      },
      "type": "episode",
      "uri": "spotify:episode:0zLhl3WsOCQHbe1BPTiHgr"
    }
  ]
}
```

> 401 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

<h3 id="get-show-episodes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Pages of episodes|[PagingSimplifiedEpisodeObject](#schemapagingsimplifiedepisodeobject)|
|401|Unauthorized|Bad or expired token. This can happen if the user revoked a token or<br>the access token has expired. You should re-authenticate the user.<br>|Inline|
|403|Forbidden|Bad OAuth request (wrong consumer key, bad nonce, expired<br>timestamp...). Unfortunately, re-authenticating the user won't help here.<br>|Inline|
|429|Too Many Requests|The app has exceeded its rate limits.<br>|Inline|

<h3 id="get-show-episodes-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth_2_0 ( Scopes: user-read-playback-position )
</aside>

<h1 id="spotify-web-api-with-fixes-and-improvements-from-sonallux-genres">Genres</h1>

## Get Available Genre Seeds

<a id="opIdget-recommendation-genres"></a>

> Code samples

```bash
curl https://example.com/recommendations/available-genre-seeds \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /recommendations/available-genre-seeds`

Retrieve a list of available genres seed parameter values for [recommendations](/documentation/web-api/reference/#/operations/get-recommendations).


> Example responses

> 200 Response

```json
{
  "genres": [
    "alternative",
    "samba"
  ]
}
```

> 401 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

<h3 id="get-available-genre-seeds-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A set of genres|Inline|
|401|Unauthorized|Bad or expired token. This can happen if the user revoked a token or<br>the access token has expired. You should re-authenticate the user.<br>|Inline|
|403|Forbidden|Bad OAuth request (wrong consumer key, bad nonce, expired<br>timestamp...). Unfortunately, re-authenticating the user won't help here.<br>|Inline|
|429|Too Many Requests|The app has exceeded its rate limits.<br>|Inline|

<h3 id="get-available-genre-seeds-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|genres|[string]|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth_2_0
</aside>

<h1 id="spotify-web-api-with-fixes-and-improvements-from-sonallux-search">Search</h1>

## Search for Item

<a id="opIdsearch"></a>

> Code samples

```bash
curl 'https://example.com/search?q=remaster%2520track%3ADoxy%2520artist%3AMiles%2520Davis&type=album' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /search`

Get Spotify catalog information about albums, artists, playlists, tracks, shows, episodes or audiobooks
that match a keyword string.<br />
**Note: Audiobooks are only available for the US, UK, Ireland, New Zealand and Australia markets.**


<h3 id="search-for-item-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|q|query|string|true|none|
|type|query|[string]|true|none|
|market|query|string|false|none|
|limit|query|integer|false|none|
|offset|query|integer|false|none|
|include_external|query|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|album|
|type|artist|
|type|playlist|
|type|track|
|type|show|
|type|episode|
|type|audiobook|
|include_external|audio|

> Example responses

> 200 Response

```json
{
  "albums": {
    "href": "https://api.spotify.com/v1/me/shows?offset=0&limit=20\n",
    "limit": 20,
    "next": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
    "offset": 0,
    "previous": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
    "total": 4,
    "items": [
      {
        "album_type": "compilation",
        "available_markets": [
          "CA",
          "BR",
          "IT"
        ],
        "external_urls": {
          "spotify": "string"
        },
        "href": "string",
        "id": "2up3OPMp9Tb4dAKM2erWXQ",
        "images": [
          {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
            "width": 300
          }
        ],
        "name": "string",
        "release_date": "1981-12",
        "release_date_precision": "year",
        "restrictions": {
          "reason": "market"
        },
        "total_tracks": 9,
        "type": "album",
        "uri": "spotify:album:2up3OPMp9Tb4dAKM2erWXQ",
        "album_group": "compilation",
        "artists": [
          {
            "external_urls": {
              "spotify": "string"
            },
            "href": "string",
            "id": "string",
            "name": "string",
            "type": "artist",
            "uri": "string"
          }
        ]
      }
    ]
  },
  "artists": {
    "href": "https://api.spotify.com/v1/me/shows?offset=0&limit=20\n",
    "limit": 20,
    "next": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
    "offset": 0,
    "previous": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
    "total": 4,
    "items": [
      {
        "external_urls": {
          "spotify": "string"
        },
        "followers": {
          "href": "string",
          "total": 0
        },
        "genres": [
          "Prog rock",
          "Grunge"
        ],
        "href": "string",
        "id": "string",
        "images": [
          {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
            "width": 300
          }
        ],
        "name": "string",
        "popularity": 0,
        "type": "artist",
        "uri": "string"
      }
    ]
  },
  "audiobooks": {
    "href": "https://api.spotify.com/v1/me/shows?offset=0&limit=20\n",
    "limit": 20,
    "next": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
    "offset": 0,
    "previous": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
    "total": 4,
    "items": [
      {
        "authors": [
          {
            "name": "string"
          }
        ],
        "available_markets": [
          "string"
        ],
        "copyrights": [
          {
            "text": "string",
            "type": "string"
          }
        ],
        "description": "string",
        "edition": "Unabridged",
        "explicit": true,
        "external_urls": {
          "spotify": "string"
        },
        "href": "string",
        "html_description": "string",
        "id": "string",
        "images": [
          {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
            "width": 300
          }
        ],
        "languages": [
          "string"
        ],
        "media_type": "string",
        "name": "string",
        "narrators": [
          {
            "name": "string"
          }
        ],
        "publisher": "string",
        "total_chapters": 0,
        "type": "audiobook",
        "uri": "string"
      }
    ]
  },
  "episodes": {
    "href": "https://api.spotify.com/v1/me/shows?offset=0&limit=20\n",
    "limit": 20,
    "next": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
    "offset": 0,
    "previous": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
    "total": 4,
    "items": [
      {
        "audio_preview_url": "https://p.scdn.co/mp3-preview/2f37da1d4221f40b9d1a98cd191f4d6f1646ad17",
        "description": "A Spotify podcast sharing fresh insights on important topics of the moment—in a way only Spotify can. You’ll hear from experts in the music, podcast and tech industries as we discover and uncover stories about our work and the world around us.\n",
        "duration_ms": 1686230,
        "explicit": true,
        "external_urls": {
          "spotify": "string"
        },
        "href": "https://api.spotify.com/v1/episodes/5Xt5DXGzch68nYYamXrNxZ",
        "html_description": "<p>A Spotify podcast sharing fresh insights on important topics of the moment—in a way only Spotify can. You’ll hear from experts in the music, podcast and tech industries as we discover and uncover stories about our work and the world around us.</p>\n",
        "id": "5Xt5DXGzch68nYYamXrNxZ",
        "images": [
          {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
            "width": 300
          }
        ],
        "is_externally_hosted": true,
        "is_playable": true,
        "language": "en",
        "languages": [
          "fr",
          "en"
        ],
        "name": "Starting Your Own Podcast: Tips, Tricks, and Advice From Anchor Creators\n",
        "release_date": "1981-12-15",
        "release_date_precision": "day",
        "restrictions": {
          "reason": "string"
        },
        "resume_point": {
          "fully_played": true,
          "resume_position_ms": 0
        },
        "type": "episode",
        "uri": "spotify:episode:0zLhl3WsOCQHbe1BPTiHgr"
      }
    ]
  },
  "playlists": {
    "href": "https://api.spotify.com/v1/me/shows?offset=0&limit=20\n",
    "limit": 20,
    "next": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
    "offset": 0,
    "previous": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
    "total": 4,
    "items": [
      {
        "collaborative": true,
        "description": "string",
        "external_urls": {
          "spotify": "string"
        },
        "href": "string",
        "id": "string",
        "images": [
          {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
            "width": 300
          }
        ],
        "name": "string",
        "owner": {
          "external_urls": {
            "spotify": "string"
          },
          "followers": {
            "href": "string",
            "total": 0
          },
          "href": "string",
          "id": "string",
          "type": "user",
          "uri": "string",
          "display_name": "string"
        },
        "public": true,
        "snapshot_id": "string",
        "tracks": {
          "href": "string",
          "total": 0
        },
        "type": "string",
        "uri": "string"
      }
    ]
  },
  "shows": {
    "href": "https://api.spotify.com/v1/me/shows?offset=0&limit=20\n",
    "limit": 20,
    "next": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
    "offset": 0,
    "previous": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
    "total": 4,
    "items": [
      {
        "available_markets": [
          "string"
        ],
        "copyrights": [
          {
            "text": "string",
            "type": "string"
          }
        ],
        "description": "string",
        "explicit": true,
        "external_urls": {
          "spotify": "string"
        },
        "href": "string",
        "html_description": "string",
        "id": "string",
        "images": [
          {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
            "width": 300
          }
        ],
        "is_externally_hosted": true,
        "languages": [
          "string"
        ],
        "media_type": "string",
        "name": "string",
        "publisher": "string",
        "total_episodes": 0,
        "type": "show",
        "uri": "string"
      }
    ]
  },
  "tracks": {
    "href": "https://api.spotify.com/v1/me/shows?offset=0&limit=20\n",
    "limit": 20,
    "next": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
    "offset": 0,
    "previous": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
    "total": 4,
    "items": [
      {
        "album": {
          "album_type": "compilation",
          "available_markets": [
            "CA",
            "BR",
            "IT"
          ],
          "external_urls": {
            "spotify": "string"
          },
          "href": "string",
          "id": "2up3OPMp9Tb4dAKM2erWXQ",
          "images": [
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
              "width": 300
            }
          ],
          "name": "string",
          "release_date": "1981-12",
          "release_date_precision": "year",
          "restrictions": {
            "reason": "market"
          },
          "total_tracks": 9,
          "type": "album",
          "uri": "spotify:album:2up3OPMp9Tb4dAKM2erWXQ",
          "album_group": "compilation",
          "artists": [
            {
              "external_urls": {
                "spotify": "string"
              },
              "href": "string",
              "id": "string",
              "name": "string",
              "type": "artist",
              "uri": "string"
            }
          ]
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "string"
            },
            "followers": {
              "href": "string",
              "total": 0
            },
            "genres": [
              "Prog rock",
              "Grunge"
            ],
            "href": "string",
            "id": "string",
            "images": [
              {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
                "width": 300
              }
            ],
            "name": "string",
            "popularity": 0,
            "type": "artist",
            "uri": "string"
          }
        ],
        "available_markets": [
          "string"
        ],
        "disc_number": 0,
        "duration_ms": 0,
        "explicit": true,
        "external_ids": {
          "ean": "string",
          "isrc": "string",
          "upc": "string"
        },
        "external_urls": {
          "spotify": "string"
        },
        "href": "string",
        "id": "string",
        "is_local": true,
        "is_playable": true,
        "linked_from": {
          "external_urls": {
            "spotify": "string"
          },
          "href": "string",
          "id": "string",
          "type": "string",
          "uri": "string"
        },
        "name": "string",
        "popularity": 0,
        "preview_url": "string",
        "restrictions": {
          "reason": "string"
        },
        "track_number": 0,
        "type": "track",
        "uri": "string"
      }
    ]
  }
}
```

> 401 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "string",
    "status": 400
  }
}
```

<h3 id="search-for-item-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Search response|Inline|
|401|Unauthorized|Bad or expired token. This can happen if the user revoked a token or<br>the access token has expired. You should re-authenticate the user.<br>|Inline|
|403|Forbidden|Bad OAuth request (wrong consumer key, bad nonce, expired<br>timestamp...). Unfortunately, re-authenticating the user won't help here.<br>|Inline|
|429|Too Many Requests|The app has exceeded its rate limits.<br>|Inline|

<h3 id="search-for-item-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|albums|[PagingSimplifiedAlbumObject](#schemapagingsimplifiedalbumobject)|false|none|none|
|artists|[PagingArtistObject](#schemapagingartistobject)|false|none|none|
|audiobooks|[PagingSimplifiedAudiobookObject](#schemapagingsimplifiedaudiobookobject)|false|none|none|
|episodes|[PagingSimplifiedEpisodeObject](#schemapagingsimplifiedepisodeobject)|false|none|none|
|playlists|[PagingPlaylistObject](#schemapagingplaylistobject)|false|none|none|
|shows|[PagingSimplifiedShowObject](#schemapagingsimplifiedshowobject)|false|none|none|
|tracks|[PagingTrackObject](#schemapagingtrackobject)|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth_2_0
</aside>

# Schemas

<h2 id="tocS_AlbumBase">AlbumBase</h2>
<!-- backwards compatibility -->
<a id="schemaalbumbase"></a>
<a id="schema_AlbumBase"></a>
<a id="tocSalbumbase"></a>
<a id="tocsalbumbase"></a>

```json
{
  "album_type": "compilation",
  "available_markets": [
    "CA",
    "BR",
    "IT"
  ],
  "external_urls": {
    "spotify": "string"
  },
  "href": "string",
  "id": "2up3OPMp9Tb4dAKM2erWXQ",
  "images": [
    {
      "height": 300,
      "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
      "width": 300
    }
  ],
  "name": "string",
  "release_date": "1981-12",
  "release_date_precision": "year",
  "restrictions": {
    "reason": "market"
  },
  "total_tracks": 9,
  "type": "album",
  "uri": "spotify:album:2up3OPMp9Tb4dAKM2erWXQ"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|album_type|string|true|none|The type of the album.<br>|
|available_markets|[string]|true|none|The markets in which the album is available: [ISO 3166-1 alpha-2 country codes](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). _**NOTE**: an album is considered available in a market when at least 1 of its tracks is available in that market._<br>|
|external_urls|object|true|none|Known external URLs for this album.<br>|
|href|string|true|none|A link to the Web API endpoint providing full details of the album.<br>|
|id|string|true|none|The [Spotify ID](/documentation/web-api/#spotify-uris-and-ids) for the album.<br>|
|images|[[ImageObject](#schemaimageobject)]|true|none|The cover art for the album in various sizes, widest first.<br>|
|name|string|true|none|The name of the album. In case of an album takedown, the value may be an empty string.<br>|
|release_date|string|true|none|The date the album was first released.<br>|
|release_date_precision|string|true|none|The precision with which `release_date` value is known.<br>|
|restrictions|object|false|none|Included in the response when a content restriction is applied.<br>|
|total_tracks|integer|true|none|The number of tracks in the album.|
|type|string|true|none|The object type.<br>|
|uri|string|true|none|The [Spotify URI](/documentation/web-api/#spotify-uris-and-ids) for the album.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|album_type|album|
|album_type|single|
|album_type|compilation|
|release_date_precision|year|
|release_date_precision|month|
|release_date_precision|day|
|type|album|

<h2 id="tocS_AlbumObject">AlbumObject</h2>
<!-- backwards compatibility -->
<a id="schemaalbumobject"></a>
<a id="schema_AlbumObject"></a>
<a id="tocSalbumobject"></a>
<a id="tocsalbumobject"></a>

```json
{
  "album_type": "compilation",
  "available_markets": [
    "CA",
    "BR",
    "IT"
  ],
  "external_urls": {
    "spotify": "string"
  },
  "href": "string",
  "id": "2up3OPMp9Tb4dAKM2erWXQ",
  "images": [
    {
      "height": 300,
      "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
      "width": 300
    }
  ],
  "name": "string",
  "release_date": "1981-12",
  "release_date_precision": "year",
  "restrictions": {
    "reason": "market"
  },
  "total_tracks": 9,
  "type": "album",
  "uri": "spotify:album:2up3OPMp9Tb4dAKM2erWXQ",
  "artists": [
    {
      "external_urls": {
        "spotify": "string"
      },
      "href": "string",
      "id": "string",
      "name": "string",
      "type": "artist",
      "uri": "string"
    }
  ],
  "copyrights": [
    {
      "text": "string",
      "type": "string"
    }
  ],
  "external_ids": {
    "ean": "string",
    "isrc": "string",
    "upc": "string"
  },
  "genres": [
    "string"
  ],
  "label": "string",
  "popularity": 0,
  "tracks": {
    "href": "https://api.spotify.com/v1/me/shows?offset=0&limit=20\n",
    "limit": 20,
    "next": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
    "offset": 0,
    "previous": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
    "total": 4,
    "items": [
      {
        "artists": [
          {
            "external_urls": {
              "spotify": "string"
            },
            "href": "string",
            "id": "string",
            "name": "string",
            "type": "artist",
            "uri": "string"
          }
        ],
        "available_markets": [
          "string"
        ],
        "disc_number": 0,
        "duration_ms": 0,
        "explicit": true,
        "external_urls": {
          "spotify": "string"
        },
        "href": "string",
        "id": "string",
        "is_local": true,
        "is_playable": true,
        "linked_from": {
          "external_urls": {
            "spotify": "string"
          },
          "href": "string",
          "id": "string",
          "type": "string",
          "uri": "string"
        },
        "name": "string",
        "preview_url": "string",
        "restrictions": {
          "reason": "string"
        },
        "track_number": 0,
        "type": "string",
        "uri": "string"
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|album_type|string|true|none|The type of the album.<br>|
|available_markets|[string]|true|none|The markets in which the album is available: [ISO 3166-1 alpha-2 country codes](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). _**NOTE**: an album is considered available in a market when at least 1 of its tracks is available in that market._<br>|
|external_urls|object|true|none|Known external URLs for this album.<br>|
|href|string|true|none|A link to the Web API endpoint providing full details of the album.<br>|
|id|string|true|none|The [Spotify ID](/documentation/web-api/#spotify-uris-and-ids) for the album.<br>|
|images|[[ImageObject](#schemaimageobject)]|true|none|The cover art for the album in various sizes, widest first.<br>|
|name|string|true|none|The name of the album. In case of an album takedown, the value may be an empty string.<br>|
|release_date|string|true|none|The date the album was first released.<br>|
|release_date_precision|string|true|none|The precision with which `release_date` value is known.<br>|
|restrictions|object|false|none|Included in the response when a content restriction is applied.<br>|
|total_tracks|integer|true|none|The number of tracks in the album.|
|type|string|true|none|The object type.<br>|
|uri|string|true|none|The [Spotify URI](/documentation/web-api/#spotify-uris-and-ids) for the album.<br>|
|artists|[[SimplifiedArtistObject](#schemasimplifiedartistobject)]|false|none|The artists of the album. Each artist object includes a link in `href` to more detailed information about the artist.<br>|
|copyrights|[[CopyrightObject](#schemacopyrightobject)]|false|none|The copyright statements of the album.|
|external_ids|object|false|none|Known external IDs for the album.<br>|
|genres|[string]|false|none|A list of the genres used to classify the album. (If not yet classified, the array is empty.)|
|label|string|false|none|The label for the album.|
|popularity|integer|false|none|The popularity of the album, with 100 being the most popular. The popularity is calculated from the popularity of the album's individual tracks.|
|tracks|object|false|none|The tracks of the album.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|album_type|album|
|album_type|single|
|album_type|compilation|
|release_date_precision|year|
|release_date_precision|month|
|release_date_precision|day|
|type|album|

<h2 id="tocS_AlbumRestrictionObject">AlbumRestrictionObject</h2>
<!-- backwards compatibility -->
<a id="schemaalbumrestrictionobject"></a>
<a id="schema_AlbumRestrictionObject"></a>
<a id="tocSalbumrestrictionobject"></a>
<a id="tocsalbumrestrictionobject"></a>

```json
{
  "reason": "market"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reason|string|false|none|The reason for the restriction. Albums may be restricted if the content is not available in a given market, to the user's subscription type, or when the user's account is set to not play explicit content.<br>Additional reasons may be added in the future.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|reason|market|
|reason|product|
|reason|explicit|

<h2 id="tocS_ArtistObject">ArtistObject</h2>
<!-- backwards compatibility -->
<a id="schemaartistobject"></a>
<a id="schema_ArtistObject"></a>
<a id="tocSartistobject"></a>
<a id="tocsartistobject"></a>

```json
{
  "external_urls": {
    "spotify": "string"
  },
  "followers": {
    "href": "string",
    "total": 0
  },
  "genres": [
    "Prog rock",
    "Grunge"
  ],
  "href": "string",
  "id": "string",
  "images": [
    {
      "height": 300,
      "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
      "width": 300
    }
  ],
  "name": "string",
  "popularity": 0,
  "type": "artist",
  "uri": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|external_urls|object|false|none|Known external URLs for this artist.<br>|
|followers|object|false|none|Information about the followers of the artist.<br>|
|genres|[string]|false|none|A list of the genres the artist is associated with. If not yet classified, the array is empty.<br>|
|href|string|false|none|A link to the Web API endpoint providing full details of the artist.<br>|
|id|string|false|none|The [Spotify ID](/documentation/web-api/#spotify-uris-and-ids) for the artist.<br>|
|images|[[ImageObject](#schemaimageobject)]|false|none|Images of the artist in various sizes, widest first.<br>|
|name|string|false|none|The name of the artist.<br>|
|popularity|integer|false|none|The popularity of the artist. The value will be between 0 and 100, with 100 being the most popular. The artist's popularity is calculated from the popularity of all the artist's tracks.<br>|
|type|string|false|none|The object type.<br>|
|uri|string|false|none|The [Spotify URI](/documentation/web-api/#spotify-uris-and-ids) for the artist.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|type|artist|

<h2 id="tocS_AudioAnalysisObject">AudioAnalysisObject</h2>
<!-- backwards compatibility -->
<a id="schemaaudioanalysisobject"></a>
<a id="schema_AudioAnalysisObject"></a>
<a id="tocSaudioanalysisobject"></a>
<a id="tocsaudioanalysisobject"></a>

```json
{
  "bars": [
    {
      "confidence": 0.925,
      "duration": 2.18749,
      "start": 0.49567
    }
  ],
  "beats": [
    {
      "confidence": 0.925,
      "duration": 2.18749,
      "start": 0.49567
    }
  ],
  "meta": {
    "analysis_time": 6.93906,
    "analyzer_version": "4.0.0",
    "detailed_status": "OK",
    "input_process": "libvorbisfile L+R 44100->22050",
    "platform": "Linux",
    "status_code": 0,
    "timestamp": 1495193577
  },
  "sections": [
    {
      "confidence": 1,
      "duration": 6.97092,
      "key": 9,
      "key_confidence": 0.297,
      "loudness": -14.938,
      "mode": -1,
      "mode_confidence": 0.471,
      "start": 0,
      "tempo": 113.178,
      "tempo_confidence": 0.647,
      "time_signature": 4,
      "time_signature_confidence": 1
    }
  ],
  "segments": [
    {
      "confidence": 0.435,
      "duration": 0.19891,
      "loudness_end": 0,
      "loudness_max": -14.25,
      "loudness_max_time": 0.07305,
      "loudness_start": -23.053,
      "pitches": [
        0.212,
        0.141,
        0.294
      ],
      "start": 0.70154,
      "timbre": [
        42.115,
        64.373,
        -0.233
      ]
    }
  ],
  "tatums": [
    {
      "confidence": 0.925,
      "duration": 2.18749,
      "start": 0.49567
    }
  ],
  "track": {
    "analysis_channels": 1,
    "analysis_sample_rate": 22050,
    "code_version": 3.15,
    "codestring": "string",
    "duration": 207.95985,
    "echoprint_version": 4.15,
    "echoprintstring": "string",
    "end_of_fade_in": 0,
    "key": 9,
    "key_confidence": 0.408,
    "loudness": -5.883,
    "mode": 0,
    "mode_confidence": 0.485,
    "num_samples": 4585515,
    "offset_seconds": 0,
    "rhythm_version": 1,
    "rhythmstring": "string",
    "sample_md5": "string",
    "start_of_fade_out": 201.13705,
    "synch_version": 1,
    "synchstring": "string",
    "tempo": 118.211,
    "tempo_confidence": 0.73,
    "time_signature": 4,
    "time_signature_confidence": 0.994,
    "window_seconds": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bars|[[TimeIntervalObject](#schematimeintervalobject)]|false|none|The time intervals of the bars throughout the track. A bar (or measure) is a segment of time defined as a given number of beats.|
|beats|[[TimeIntervalObject](#schematimeintervalobject)]|false|none|The time intervals of beats throughout the track. A beat is the basic time unit of a piece of music; for example, each tick of a metronome. Beats are typically multiples of tatums.|
|meta|object|false|none|none|
|sections|[[SectionObject](#schemasectionobject)]|false|none|Sections are defined by large variations in rhythm or timbre, e.g. chorus, verse, bridge, guitar solo, etc. Each section contains its own descriptions of tempo, key, mode, time_signature, and loudness.|
|segments|[[SegmentObject](#schemasegmentobject)]|false|none|Each segment contains a roughly conisistent sound throughout its duration.|
|tatums|[[TimeIntervalObject](#schematimeintervalobject)]|false|none|A tatum represents the lowest regular pulse train that a listener intuitively infers from the timing of perceived musical events (segments).|
|track|object|false|none|none|

<h2 id="tocS_AudioFeaturesObject">AudioFeaturesObject</h2>
<!-- backwards compatibility -->
<a id="schemaaudiofeaturesobject"></a>
<a id="schema_AudioFeaturesObject"></a>
<a id="tocSaudiofeaturesobject"></a>
<a id="tocsaudiofeaturesobject"></a>

```json
{
  "acousticness": 0.00242,
  "analysis_url": "https://api.spotify.com/v1/audio-analysis/2takcwOaAZWiXQijPHIx7B\n",
  "danceability": 0.585,
  "duration_ms": 237040,
  "energy": 0.842,
  "id": "2takcwOaAZWiXQijPHIx7B",
  "instrumentalness": 0.00686,
  "key": 9,
  "liveness": 0.0866,
  "loudness": -5.883,
  "mode": 0,
  "speechiness": 0.0556,
  "tempo": 118.211,
  "time_signature": 4,
  "track_href": "https://api.spotify.com/v1/tracks/2takcwOaAZWiXQijPHIx7B\n",
  "type": "audio_features",
  "uri": "spotify:track:2takcwOaAZWiXQijPHIx7B",
  "valence": 0.428
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acousticness|number(float)|false|none|A confidence measure from 0.0 to 1.0 of whether the track is acoustic. 1.0 represents high confidence the track is acoustic.<br>|
|analysis_url|string|false|none|A URL to access the full audio analysis of this track. An access token is required to access this data.<br>|
|danceability|number(float)|false|none|Danceability describes how suitable a track is for dancing based on a combination of musical elements including tempo, rhythm stability, beat strength, and overall regularity. A value of 0.0 is least danceable and 1.0 is most danceable.<br>|
|duration_ms|integer|false|none|The duration of the track in milliseconds.<br>|
|energy|number(float)|false|none|Energy is a measure from 0.0 to 1.0 and represents a perceptual measure of intensity and activity. Typically, energetic tracks feel fast, loud, and noisy. For example, death metal has high energy, while a Bach prelude scores low on the scale. Perceptual features contributing to this attribute include dynamic range, perceived loudness, timbre, onset rate, and general entropy.<br>|
|id|string|false|none|The Spotify ID for the track.<br>|
|instrumentalness|number(float)|false|none|Predicts whether a track contains no vocals. "Ooh" and "aah" sounds are treated as instrumental in this context. Rap or spoken word tracks are clearly "vocal". The closer the instrumentalness value is to 1.0, the greater likelihood the track contains no vocal content. Values above 0.5 are intended to represent instrumental tracks, but confidence is higher as the value approaches 1.0.<br>|
|key|[Key](#schemakey)|false|none|The key the track is in. Integers map to pitches using standard [Pitch Class notation](https://en.wikipedia.org/wiki/Pitch_class). E.g. 0 = C, 1 = C♯/D♭, 2 = D, and so on. If no key was detected, the value is -1.<br>|
|liveness|number(float)|false|none|Detects the presence of an audience in the recording. Higher liveness values represent an increased probability that the track was performed live. A value above 0.8 provides strong likelihood that the track is live.<br>|
|loudness|[Loudness](#schemaloudness)|false|none|The overall loudness of a track in decibels (dB). Loudness values are averaged across the entire track and are useful for comparing relative loudness of tracks. Loudness is the quality of a sound that is the primary psychological correlate of physical strength (amplitude). Values typically range between -60 and 0 db.<br>|
|mode|[Mode](#schemamode)|false|none|Mode indicates the modality (major or minor) of a track, the type of scale from which its melodic content is derived. Major is represented by 1 and minor is 0.<br>|
|speechiness|number(float)|false|none|Speechiness detects the presence of spoken words in a track. The more exclusively speech-like the recording (e.g. talk show, audio book, poetry), the closer to 1.0 the attribute value. Values above 0.66 describe tracks that are probably made entirely of spoken words. Values between 0.33 and 0.66 describe tracks that may contain both music and speech, either in sections or layered, including such cases as rap music. Values below 0.33 most likely represent music and other non-speech-like tracks.<br>|
|tempo|[Tempo](#schematempo)|false|none|The overall estimated tempo of a track in beats per minute (BPM). In musical terminology, tempo is the speed or pace of a given piece and derives directly from the average beat duration.<br>|
|time_signature|[TimeSignature](#schematimesignature)|false|none|An estimated time signature. The time signature (meter) is a notational convention to specify how many beats are in each bar (or measure). The time signature ranges from 3 to 7 indicating time signatures of "3/4", to "7/4".|
|track_href|string|false|none|A link to the Web API endpoint providing full details of the track.<br>|
|type|string|false|none|The object type.<br>|
|uri|string|false|none|The Spotify URI for the track.<br>|
|valence|number(float)|false|none|A measure from 0.0 to 1.0 describing the musical positiveness conveyed by a track. Tracks with high valence sound more positive (e.g. happy, cheerful, euphoric), while tracks with low valence sound more negative (e.g. sad, depressed, angry).<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|type|audio_features|

<h2 id="tocS_AudiobookBase">AudiobookBase</h2>
<!-- backwards compatibility -->
<a id="schemaaudiobookbase"></a>
<a id="schema_AudiobookBase"></a>
<a id="tocSaudiobookbase"></a>
<a id="tocsaudiobookbase"></a>

```json
{
  "authors": [
    {
      "name": "string"
    }
  ],
  "available_markets": [
    "string"
  ],
  "copyrights": [
    {
      "text": "string",
      "type": "string"
    }
  ],
  "description": "string",
  "edition": "Unabridged",
  "explicit": true,
  "external_urls": {
    "spotify": "string"
  },
  "href": "string",
  "html_description": "string",
  "id": "string",
  "images": [
    {
      "height": 300,
      "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
      "width": 300
    }
  ],
  "languages": [
    "string"
  ],
  "media_type": "string",
  "name": "string",
  "narrators": [
    {
      "name": "string"
    }
  ],
  "publisher": "string",
  "total_chapters": 0,
  "type": "audiobook",
  "uri": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authors|[[AuthorObject](#schemaauthorobject)]|true|none|The author(s) for the audiobook.<br>|
|available_markets|[string]|true|none|A list of the countries in which the audiobook can be played, identified by their [ISO 3166-1 alpha-2](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code.<br>|
|copyrights|[[CopyrightObject](#schemacopyrightobject)]|true|none|The copyright statements of the audiobook.<br>|
|description|string|true|none|A description of the audiobook. HTML tags are stripped away from this field, use `html_description` field in case HTML tags are needed.<br>|
|edition|string|false|none|The edition of the audiobook.<br>|
|explicit|boolean|true|none|Whether or not the audiobook has explicit content (true = yes it does; false = no it does not OR unknown).<br>|
|external_urls|object|true|none|External URLs for this audiobook.<br>|
|href|string|true|none|A link to the Web API endpoint providing full details of the audiobook.<br>|
|html_description|string|true|none|A description of the audiobook. This field may contain HTML tags.<br>|
|id|string|true|none|The [Spotify ID](/documentation/web-api/#spotify-uris-and-ids) for the audiobook.<br>|
|images|[[ImageObject](#schemaimageobject)]|true|none|The cover art for the audiobook in various sizes, widest first.<br>|
|languages|[string]|true|none|A list of the languages used in the audiobook, identified by their [ISO 639](https://en.wikipedia.org/wiki/ISO_639) code.<br>|
|media_type|string|true|none|The media type of the audiobook.<br>|
|name|string|true|none|The name of the audiobook.<br>|
|narrators|[[NarratorObject](#schemanarratorobject)]|true|none|The narrator(s) for the audiobook.<br>|
|publisher|string|true|none|The publisher of the audiobook.<br>|
|total_chapters|integer|true|none|The number of chapters in this audiobook.<br>|
|type|string|true|none|The object type.<br>|
|uri|string|true|none|The [Spotify URI](/documentation/web-api/#spotify-uris-and-ids) for the audiobook.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|type|audiobook|

<h2 id="tocS_AudiobookObject">AudiobookObject</h2>
<!-- backwards compatibility -->
<a id="schemaaudiobookobject"></a>
<a id="schema_AudiobookObject"></a>
<a id="tocSaudiobookobject"></a>
<a id="tocsaudiobookobject"></a>

```json
{
  "authors": [
    {
      "name": "string"
    }
  ],
  "available_markets": [
    "string"
  ],
  "copyrights": [
    {
      "text": "string",
      "type": "string"
    }
  ],
  "description": "string",
  "edition": "Unabridged",
  "explicit": true,
  "external_urls": {
    "spotify": "string"
  },
  "href": "string",
  "html_description": "string",
  "id": "string",
  "images": [
    {
      "height": 300,
      "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
      "width": 300
    }
  ],
  "languages": [
    "string"
  ],
  "media_type": "string",
  "name": "string",
  "narrators": [
    {
      "name": "string"
    }
  ],
  "publisher": "string",
  "total_chapters": 0,
  "type": "audiobook",
  "uri": "string",
  "chapters": {
    "href": "https://api.spotify.com/v1/me/shows?offset=0&limit=20\n",
    "limit": 20,
    "next": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
    "offset": 0,
    "previous": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
    "total": 4,
    "items": [
      {
        "audio_preview_url": "https://p.scdn.co/mp3-preview/2f37da1d4221f40b9d1a98cd191f4d6f1646ad17",
        "available_markets": [
          "string"
        ],
        "chapter_number": 1,
        "description": "A Spotify podcast sharing fresh insights on important topics of the moment—in a way only Spotify can. You’ll hear from experts in the music, podcast and tech industries as we discover and uncover stories about our work and the world around us.\n",
        "duration_ms": 1686230,
        "explicit": true,
        "external_urls": {
          "spotify": "string"
        },
        "href": "https://api.spotify.com/v1/episodes/5Xt5DXGzch68nYYamXrNxZ",
        "html_description": "<p>A Spotify podcast sharing fresh insights on important topics of the moment—in a way only Spotify can. You’ll hear from experts in the music, podcast and tech industries as we discover and uncover stories about our work and the world around us.</p>\n",
        "id": "5Xt5DXGzch68nYYamXrNxZ",
        "images": [
          {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
            "width": 300
          }
        ],
        "is_playable": true,
        "languages": [
          "fr",
          "en"
        ],
        "name": "Starting Your Own Podcast: Tips, Tricks, and Advice From Anchor Creators\n",
        "release_date": "1981-12-15",
        "release_date_precision": "day",
        "restrictions": {
          "reason": "string"
        },
        "resume_point": {
          "fully_played": true,
          "resume_position_ms": 0
        },
        "type": "episode",
        "uri": "spotify:episode:0zLhl3WsOCQHbe1BPTiHgr"
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authors|[[AuthorObject](#schemaauthorobject)]|true|none|The author(s) for the audiobook.<br>|
|available_markets|[string]|true|none|A list of the countries in which the audiobook can be played, identified by their [ISO 3166-1 alpha-2](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code.<br>|
|copyrights|[[CopyrightObject](#schemacopyrightobject)]|true|none|The copyright statements of the audiobook.<br>|
|description|string|true|none|A description of the audiobook. HTML tags are stripped away from this field, use `html_description` field in case HTML tags are needed.<br>|
|edition|string|false|none|The edition of the audiobook.<br>|
|explicit|boolean|true|none|Whether or not the audiobook has explicit content (true = yes it does; false = no it does not OR unknown).<br>|
|external_urls|object|true|none|External URLs for this audiobook.<br>|
|href|string|true|none|A link to the Web API endpoint providing full details of the audiobook.<br>|
|html_description|string|true|none|A description of the audiobook. This field may contain HTML tags.<br>|
|id|string|true|none|The [Spotify ID](/documentation/web-api/#spotify-uris-and-ids) for the audiobook.<br>|
|images|[[ImageObject](#schemaimageobject)]|true|none|The cover art for the audiobook in various sizes, widest first.<br>|
|languages|[string]|true|none|A list of the languages used in the audiobook, identified by their [ISO 639](https://en.wikipedia.org/wiki/ISO_639) code.<br>|
|media_type|string|true|none|The media type of the audiobook.<br>|
|name|string|true|none|The name of the audiobook.<br>|
|narrators|[[NarratorObject](#schemanarratorobject)]|true|none|The narrator(s) for the audiobook.<br>|
|publisher|string|true|none|The publisher of the audiobook.<br>|
|total_chapters|integer|true|none|The number of chapters in this audiobook.<br>|
|type|string|true|none|The object type.<br>|
|uri|string|true|none|The [Spotify URI](/documentation/web-api/#spotify-uris-and-ids) for the audiobook.<br>|
|chapters|object|true|none|The chapters of the audiobook.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|type|audiobook|

<h2 id="tocS_AuthorObject">AuthorObject</h2>
<!-- backwards compatibility -->
<a id="schemaauthorobject"></a>
<a id="schema_AuthorObject"></a>
<a id="tocSauthorobject"></a>
<a id="tocsauthorobject"></a>

```json
{
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The name of the author.<br>|

<h2 id="tocS_CategoryObject">CategoryObject</h2>
<!-- backwards compatibility -->
<a id="schemacategoryobject"></a>
<a id="schema_CategoryObject"></a>
<a id="tocScategoryobject"></a>
<a id="tocscategoryobject"></a>

```json
{
  "href": "string",
  "icons": [
    {
      "height": 300,
      "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
      "width": 300
    }
  ],
  "id": "equal",
  "name": "EQUAL"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|href|string|true|none|A link to the Web API endpoint returning full details of the category.<br>|
|icons|[[ImageObject](#schemaimageobject)]|true|none|The category icon, in various sizes.<br>|
|id|string|true|none|The [Spotify category ID](/documentation/web-api/#spotify-uris-and-ids) of the category.<br>|
|name|string|true|none|The name of the category.<br>|

<h2 id="tocS_ChapterBase">ChapterBase</h2>
<!-- backwards compatibility -->
<a id="schemachapterbase"></a>
<a id="schema_ChapterBase"></a>
<a id="tocSchapterbase"></a>
<a id="tocschapterbase"></a>

```json
{
  "audio_preview_url": "https://p.scdn.co/mp3-preview/2f37da1d4221f40b9d1a98cd191f4d6f1646ad17",
  "available_markets": [
    "string"
  ],
  "chapter_number": 1,
  "description": "A Spotify podcast sharing fresh insights on important topics of the moment—in a way only Spotify can. You’ll hear from experts in the music, podcast and tech industries as we discover and uncover stories about our work and the world around us.\n",
  "duration_ms": 1686230,
  "explicit": true,
  "external_urls": {
    "spotify": "string"
  },
  "href": "https://api.spotify.com/v1/episodes/5Xt5DXGzch68nYYamXrNxZ",
  "html_description": "<p>A Spotify podcast sharing fresh insights on important topics of the moment—in a way only Spotify can. You’ll hear from experts in the music, podcast and tech industries as we discover and uncover stories about our work and the world around us.</p>\n",
  "id": "5Xt5DXGzch68nYYamXrNxZ",
  "images": [
    {
      "height": 300,
      "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
      "width": 300
    }
  ],
  "is_playable": true,
  "languages": [
    "fr",
    "en"
  ],
  "name": "Starting Your Own Podcast: Tips, Tricks, and Advice From Anchor Creators\n",
  "release_date": "1981-12-15",
  "release_date_precision": "day",
  "restrictions": {
    "reason": "string"
  },
  "resume_point": {
    "fully_played": true,
    "resume_position_ms": 0
  },
  "type": "episode",
  "uri": "spotify:episode:0zLhl3WsOCQHbe1BPTiHgr"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|audio_preview_url|string|true|none|A URL to a 30 second preview (MP3 format) of the episode. `null` if not available.<br>|
|available_markets|[string]|false|none|A list of the countries in which the chapter can be played, identified by their [ISO 3166-1 alpha-2](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code.<br>|
|chapter_number|integer|true|none|The number of the chapter<br>|
|description|string|true|none|A description of the episode. HTML tags are stripped away from this field, use `html_description` field in case HTML tags are needed.<br>|
|duration_ms|integer|true|none|The episode length in milliseconds.<br>|
|explicit|boolean|true|none|Whether or not the episode has explicit content (true = yes it does; false = no it does not OR unknown).<br>|
|external_urls|object|true|none|External URLs for this episode.<br>|
|href|string|true|none|A link to the Web API endpoint providing full details of the episode.<br>|
|html_description|string|true|none|A description of the episode. This field may contain HTML tags.<br>|
|id|string|true|none|The [Spotify ID](/documentation/web-api/#spotify-uris-and-ids) for the episode.<br>|
|images|[[ImageObject](#schemaimageobject)]|true|none|The cover art for the episode in various sizes, widest first.<br>|
|is_playable|boolean|true|none|True if the episode is playable in the given market. Otherwise false.<br>|
|languages|[string]|true|none|A list of the languages used in the episode, identified by their [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639) code.<br>|
|name|string|true|none|The name of the episode.<br>|
|release_date|string|true|none|The date the episode was first released, for example `"1981-12-15"`. Depending on the precision, it might be shown as `"1981"` or `"1981-12"`.<br>|
|release_date_precision|string|true|none|The precision with which `release_date` value is known.<br>|
|restrictions|object|false|none|Included in the response when a content restriction is applied.<br>|
|resume_point|object|true|none|The user's most recent position in the episode. Set if the supplied access token is a user token and has the scope 'user-read-playback-position'.<br>|
|type|string|true|none|The object type.<br>|
|uri|string|true|none|The [Spotify URI](/documentation/web-api/#spotify-uris-and-ids) for the episode.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|release_date_precision|year|
|release_date_precision|month|
|release_date_precision|day|
|type|episode|

<h2 id="tocS_ChapterObject">ChapterObject</h2>
<!-- backwards compatibility -->
<a id="schemachapterobject"></a>
<a id="schema_ChapterObject"></a>
<a id="tocSchapterobject"></a>
<a id="tocschapterobject"></a>

```json
{
  "audio_preview_url": "https://p.scdn.co/mp3-preview/2f37da1d4221f40b9d1a98cd191f4d6f1646ad17",
  "available_markets": [
    "string"
  ],
  "chapter_number": 1,
  "description": "A Spotify podcast sharing fresh insights on important topics of the moment—in a way only Spotify can. You’ll hear from experts in the music, podcast and tech industries as we discover and uncover stories about our work and the world around us.\n",
  "duration_ms": 1686230,
  "explicit": true,
  "external_urls": {
    "spotify": "string"
  },
  "href": "https://api.spotify.com/v1/episodes/5Xt5DXGzch68nYYamXrNxZ",
  "html_description": "<p>A Spotify podcast sharing fresh insights on important topics of the moment—in a way only Spotify can. You’ll hear from experts in the music, podcast and tech industries as we discover and uncover stories about our work and the world around us.</p>\n",
  "id": "5Xt5DXGzch68nYYamXrNxZ",
  "images": [
    {
      "height": 300,
      "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
      "width": 300
    }
  ],
  "is_playable": true,
  "languages": [
    "fr",
    "en"
  ],
  "name": "Starting Your Own Podcast: Tips, Tricks, and Advice From Anchor Creators\n",
  "release_date": "1981-12-15",
  "release_date_precision": "day",
  "restrictions": {
    "reason": "string"
  },
  "resume_point": {
    "fully_played": true,
    "resume_position_ms": 0
  },
  "type": "episode",
  "uri": "spotify:episode:0zLhl3WsOCQHbe1BPTiHgr",
  "audiobook": {
    "authors": [
      {
        "name": "string"
      }
    ],
    "available_markets": [
      "string"
    ],
    "copyrights": [
      {
        "text": "string",
        "type": "string"
      }
    ],
    "description": "string",
    "edition": "Unabridged",
    "explicit": true,
    "external_urls": {
      "spotify": "string"
    },
    "href": "string",
    "html_description": "string",
    "id": "string",
    "images": [
      {
        "height": 300,
        "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
        "width": 300
      }
    ],
    "languages": [
      "string"
    ],
    "media_type": "string",
    "name": "string",
    "narrators": [
      {
        "name": "string"
      }
    ],
    "publisher": "string",
    "total_chapters": 0,
    "type": "audiobook",
    "uri": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|audio_preview_url|string|true|none|A URL to a 30 second preview (MP3 format) of the episode. `null` if not available.<br>|
|available_markets|[string]|false|none|A list of the countries in which the chapter can be played, identified by their [ISO 3166-1 alpha-2](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code.<br>|
|chapter_number|integer|true|none|The number of the chapter<br>|
|description|string|true|none|A description of the episode. HTML tags are stripped away from this field, use `html_description` field in case HTML tags are needed.<br>|
|duration_ms|integer|true|none|The episode length in milliseconds.<br>|
|explicit|boolean|true|none|Whether or not the episode has explicit content (true = yes it does; false = no it does not OR unknown).<br>|
|external_urls|object|true|none|External URLs for this episode.<br>|
|href|string|true|none|A link to the Web API endpoint providing full details of the episode.<br>|
|html_description|string|true|none|A description of the episode. This field may contain HTML tags.<br>|
|id|string|true|none|The [Spotify ID](/documentation/web-api/#spotify-uris-and-ids) for the episode.<br>|
|images|[[ImageObject](#schemaimageobject)]|true|none|The cover art for the episode in various sizes, widest first.<br>|
|is_playable|boolean|true|none|True if the episode is playable in the given market. Otherwise false.<br>|
|languages|[string]|true|none|A list of the languages used in the episode, identified by their [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639) code.<br>|
|name|string|true|none|The name of the episode.<br>|
|release_date|string|true|none|The date the episode was first released, for example `"1981-12-15"`. Depending on the precision, it might be shown as `"1981"` or `"1981-12"`.<br>|
|release_date_precision|string|true|none|The precision with which `release_date` value is known.<br>|
|restrictions|object|false|none|Included in the response when a content restriction is applied.<br>|
|resume_point|object|true|none|The user's most recent position in the episode. Set if the supplied access token is a user token and has the scope 'user-read-playback-position'.<br>|
|type|string|true|none|The object type.<br>|
|uri|string|true|none|The [Spotify URI](/documentation/web-api/#spotify-uris-and-ids) for the episode.<br>|
|audiobook|object|true|none|The audiobook for which the chapter belongs.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|release_date_precision|year|
|release_date_precision|month|
|release_date_precision|day|
|type|episode|

<h2 id="tocS_ChapterRestrictionObject">ChapterRestrictionObject</h2>
<!-- backwards compatibility -->
<a id="schemachapterrestrictionobject"></a>
<a id="schema_ChapterRestrictionObject"></a>
<a id="tocSchapterrestrictionobject"></a>
<a id="tocschapterrestrictionobject"></a>

```json
{
  "reason": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reason|string|false|none|The reason for the restriction. Supported values:<br>- `market` - The content item is not available in the given market.<br>- `product` - The content item is not available for the user's subscription type.<br>- `explicit` - The content item is explicit and the user's account is set to not play explicit content.<br>- `payment_required` - Payment is required to play the content item.<br><br>Additional reasons may be added in the future.<br>**Note**: If you use this field, make sure that your application safely handles unknown values.<br>|

<h2 id="tocS_ContextObject">ContextObject</h2>
<!-- backwards compatibility -->
<a id="schemacontextobject"></a>
<a id="schema_ContextObject"></a>
<a id="tocScontextobject"></a>
<a id="tocscontextobject"></a>

```json
{
  "external_urls": {
    "spotify": "string"
  },
  "href": "string",
  "type": "string",
  "uri": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|external_urls|object|false|none|External URLs for this context.|
|href|string|false|none|A link to the Web API endpoint providing full details of the track.|
|type|string|false|none|The object type, e.g. "artist", "playlist", "album", "show".<br>|
|uri|string|false|none|The [Spotify URI](/documentation/web-api/#spotify-uris-and-ids) for the context.<br>|

<h2 id="tocS_CopyrightObject">CopyrightObject</h2>
<!-- backwards compatibility -->
<a id="schemacopyrightobject"></a>
<a id="schema_CopyrightObject"></a>
<a id="tocScopyrightobject"></a>
<a id="tocscopyrightobject"></a>

```json
{
  "text": "string",
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|text|string|false|none|The copyright text for this content.<br>|
|type|string|false|none|The type of copyright: `C` = the copyright, `P` = the sound recording (performance) copyright.<br>|

<h2 id="tocS_CurrentlyPlayingContextObject">CurrentlyPlayingContextObject</h2>
<!-- backwards compatibility -->
<a id="schemacurrentlyplayingcontextobject"></a>
<a id="schema_CurrentlyPlayingContextObject"></a>
<a id="tocScurrentlyplayingcontextobject"></a>
<a id="tocscurrentlyplayingcontextobject"></a>

```json
{
  "actions": {
    "interrupting_playback": true,
    "pausing": true,
    "resuming": true,
    "seeking": true,
    "skipping_next": true,
    "skipping_prev": true,
    "toggling_repeat_context": true,
    "toggling_repeat_track": true,
    "toggling_shuffle": true,
    "transferring_playback": true
  },
  "context": {
    "external_urls": {
      "spotify": "string"
    },
    "href": "string",
    "type": "string",
    "uri": "string"
  },
  "currently_playing_type": "string",
  "device": {
    "id": "string",
    "is_active": true,
    "is_private_session": true,
    "is_restricted": true,
    "name": "Kitchen speaker",
    "type": "computer",
    "volume_percent": 59
  },
  "is_playing": true,
  "item": {
    "album": {
      "album_type": "compilation",
      "available_markets": [
        "CA",
        "BR",
        "IT"
      ],
      "external_urls": {
        "spotify": "string"
      },
      "href": "string",
      "id": "2up3OPMp9Tb4dAKM2erWXQ",
      "images": [
        {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
          "width": 300
        }
      ],
      "name": "string",
      "release_date": "1981-12",
      "release_date_precision": "year",
      "restrictions": {
        "reason": "market"
      },
      "total_tracks": 9,
      "type": "album",
      "uri": "spotify:album:2up3OPMp9Tb4dAKM2erWXQ",
      "album_group": "compilation",
      "artists": [
        {
          "external_urls": {
            "spotify": "string"
          },
          "href": "string",
          "id": "string",
          "name": "string",
          "type": "artist",
          "uri": "string"
        }
      ]
    },
    "artists": [
      {
        "external_urls": {
          "spotify": "string"
        },
        "followers": {
          "href": "string",
          "total": 0
        },
        "genres": [
          "Prog rock",
          "Grunge"
        ],
        "href": "string",
        "id": "string",
        "images": [
          {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
            "width": 300
          }
        ],
        "name": "string",
        "popularity": 0,
        "type": "artist",
        "uri": "string"
      }
    ],
    "available_markets": [
      "string"
    ],
    "disc_number": 0,
    "duration_ms": 0,
    "explicit": true,
    "external_ids": {
      "ean": "string",
      "isrc": "string",
      "upc": "string"
    },
    "external_urls": {
      "spotify": "string"
    },
    "href": "string",
    "id": "string",
    "is_local": true,
    "is_playable": true,
    "linked_from": {
      "external_urls": {
        "spotify": "string"
      },
      "href": "string",
      "id": "string",
      "type": "string",
      "uri": "string"
    },
    "name": "string",
    "popularity": 0,
    "preview_url": "string",
    "restrictions": {
      "reason": "string"
    },
    "track_number": 0,
    "type": "track",
    "uri": "string"
  },
  "progress_ms": 0,
  "repeat_state": "string",
  "shuffle_state": true,
  "timestamp": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actions|object|false|none|Allows to update the user interface based on which playback actions are available within the current context.<br>|
|context|object|false|none|A Context Object. Can be `null`.|
|currently_playing_type|string|false|none|The object type of the currently playing item. Can be one of `track`, `episode`, `ad` or `unknown`.<br>|
|device|object|false|none|The device that is currently active.<br>|
|is_playing|boolean|false|none|If something is currently playing, return `true`.|
|item|[TrackObject](#schematrackobject) \| [EpisodeObject](#schemaepisodeobject)|false|none|The currently playing track or episode. Can be `null`.|
|progress_ms|integer|false|none|Progress into the currently playing track or episode. Can be `null`.|
|repeat_state|string|false|none|off, track, context|
|shuffle_state|boolean|false|none|If shuffle is on or off.|
|timestamp|integer|false|none|Unix Millisecond Timestamp when data was fetched.|

<h2 id="tocS_CurrentlyPlayingObject">CurrentlyPlayingObject</h2>
<!-- backwards compatibility -->
<a id="schemacurrentlyplayingobject"></a>
<a id="schema_CurrentlyPlayingObject"></a>
<a id="tocScurrentlyplayingobject"></a>
<a id="tocscurrentlyplayingobject"></a>

```json
{
  "context": {
    "external_urls": {
      "spotify": "string"
    },
    "href": "string",
    "type": "string",
    "uri": "string"
  },
  "currently_playing_type": "string",
  "is_playing": true,
  "item": {
    "album": {
      "album_type": "compilation",
      "available_markets": [
        "CA",
        "BR",
        "IT"
      ],
      "external_urls": {
        "spotify": "string"
      },
      "href": "string",
      "id": "2up3OPMp9Tb4dAKM2erWXQ",
      "images": [
        {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
          "width": 300
        }
      ],
      "name": "string",
      "release_date": "1981-12",
      "release_date_precision": "year",
      "restrictions": {
        "reason": "market"
      },
      "total_tracks": 9,
      "type": "album",
      "uri": "spotify:album:2up3OPMp9Tb4dAKM2erWXQ",
      "album_group": "compilation",
      "artists": [
        {
          "external_urls": {
            "spotify": "string"
          },
          "href": "string",
          "id": "string",
          "name": "string",
          "type": "artist",
          "uri": "string"
        }
      ]
    },
    "artists": [
      {
        "external_urls": {
          "spotify": "string"
        },
        "followers": {
          "href": "string",
          "total": 0
        },
        "genres": [
          "Prog rock",
          "Grunge"
        ],
        "href": "string",
        "id": "string",
        "images": [
          {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
            "width": 300
          }
        ],
        "name": "string",
        "popularity": 0,
        "type": "artist",
        "uri": "string"
      }
    ],
    "available_markets": [
      "string"
    ],
    "disc_number": 0,
    "duration_ms": 0,
    "explicit": true,
    "external_ids": {
      "ean": "string",
      "isrc": "string",
      "upc": "string"
    },
    "external_urls": {
      "spotify": "string"
    },
    "href": "string",
    "id": "string",
    "is_local": true,
    "is_playable": true,
    "linked_from": {
      "external_urls": {
        "spotify": "string"
      },
      "href": "string",
      "id": "string",
      "type": "string",
      "uri": "string"
    },
    "name": "string",
    "popularity": 0,
    "preview_url": "string",
    "restrictions": {
      "reason": "string"
    },
    "track_number": 0,
    "type": "track",
    "uri": "string"
  },
  "progress_ms": 0,
  "timestamp": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|context|object|false|none|A Context Object. Can be `null`.|
|currently_playing_type|string|false|none|The object type of the currently playing item. Can be one of `track`, `episode`, `ad` or `unknown`.<br>|
|is_playing|boolean|false|none|If something is currently playing, return `true`.|
|item|[TrackObject](#schematrackobject) \| [EpisodeObject](#schemaepisodeobject)|false|none|The currently playing track or episode. Can be `null`.|
|progress_ms|integer|false|none|Progress into the currently playing track or episode. Can be `null`.|
|timestamp|integer|false|none|Unix Millisecond Timestamp when data was fetched|

<h2 id="tocS_CursorObject">CursorObject</h2>
<!-- backwards compatibility -->
<a id="schemacursorobject"></a>
<a id="schema_CursorObject"></a>
<a id="tocScursorobject"></a>
<a id="tocscursorobject"></a>

```json
{
  "after": "string",
  "before": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|after|string|false|none|The cursor to use as key to find the next page of items.|
|before|string|false|none|The cursor to use as key to find the previous page of items.|

<h2 id="tocS_CursorPagingObject">CursorPagingObject</h2>
<!-- backwards compatibility -->
<a id="schemacursorpagingobject"></a>
<a id="schema_CursorPagingObject"></a>
<a id="tocScursorpagingobject"></a>
<a id="tocscursorpagingobject"></a>

```json
{
  "cursors": {
    "after": "string",
    "before": "string"
  },
  "href": "string",
  "limit": 0,
  "next": "string",
  "total": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cursors|object|false|none|The cursors used to find the next set of items.|
|href|string|false|none|A link to the Web API endpoint returning the full result of the request.|
|limit|integer|false|none|The maximum number of items in the response (as set in the query or by default).|
|next|string|false|none|URL to the next page of items. ( `null` if none)|
|total|integer|false|none|The total number of items available to return.|

<h2 id="tocS_CursorPagingPlayHistoryObject">CursorPagingPlayHistoryObject</h2>
<!-- backwards compatibility -->
<a id="schemacursorpagingplayhistoryobject"></a>
<a id="schema_CursorPagingPlayHistoryObject"></a>
<a id="tocScursorpagingplayhistoryobject"></a>
<a id="tocscursorpagingplayhistoryobject"></a>

```json
{
  "cursors": {
    "after": "string",
    "before": "string"
  },
  "href": "string",
  "limit": 0,
  "next": "string",
  "total": 0,
  "items": [
    {
      "context": {
        "external_urls": {
          "spotify": "string"
        },
        "href": "string",
        "type": "string",
        "uri": "string"
      },
      "played_at": "1970-01-01T00:00:00Z",
      "track": {
        "album": {
          "album_type": "compilation",
          "available_markets": [
            "CA",
            "BR",
            "IT"
          ],
          "external_urls": {
            "spotify": "string"
          },
          "href": "string",
          "id": "2up3OPMp9Tb4dAKM2erWXQ",
          "images": [
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
              "width": 300
            }
          ],
          "name": "string",
          "release_date": "1981-12",
          "release_date_precision": "year",
          "restrictions": {
            "reason": "market"
          },
          "total_tracks": 9,
          "type": "album",
          "uri": "spotify:album:2up3OPMp9Tb4dAKM2erWXQ",
          "album_group": "compilation",
          "artists": [
            {
              "external_urls": {
                "spotify": "string"
              },
              "href": "string",
              "id": "string",
              "name": "string",
              "type": "artist",
              "uri": "string"
            }
          ]
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "string"
            },
            "followers": {
              "href": "string",
              "total": 0
            },
            "genres": [
              "Prog rock",
              "Grunge"
            ],
            "href": "string",
            "id": "string",
            "images": [
              {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
                "width": 300
              }
            ],
            "name": "string",
            "popularity": 0,
            "type": "artist",
            "uri": "string"
          }
        ],
        "available_markets": [
          "string"
        ],
        "disc_number": 0,
        "duration_ms": 0,
        "explicit": true,
        "external_ids": {
          "ean": "string",
          "isrc": "string",
          "upc": "string"
        },
        "external_urls": {
          "spotify": "string"
        },
        "href": "string",
        "id": "string",
        "is_local": true,
        "is_playable": true,
        "linked_from": {
          "external_urls": {
            "spotify": "string"
          },
          "href": "string",
          "id": "string",
          "type": "string",
          "uri": "string"
        },
        "name": "string",
        "popularity": 0,
        "preview_url": "string",
        "restrictions": {
          "reason": "string"
        },
        "track_number": 0,
        "type": "track",
        "uri": "string"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cursors|object|false|none|The cursors used to find the next set of items.|
|href|string|false|none|A link to the Web API endpoint returning the full result of the request.|
|limit|integer|false|none|The maximum number of items in the response (as set in the query or by default).|
|next|string|false|none|URL to the next page of items. ( `null` if none)|
|total|integer|false|none|The total number of items available to return.|
|items|[[PlayHistoryObject](#schemaplayhistoryobject)]|false|none|none|

<h2 id="tocS_CursorPagingSimplifiedArtistObject">CursorPagingSimplifiedArtistObject</h2>
<!-- backwards compatibility -->
<a id="schemacursorpagingsimplifiedartistobject"></a>
<a id="schema_CursorPagingSimplifiedArtistObject"></a>
<a id="tocScursorpagingsimplifiedartistobject"></a>
<a id="tocscursorpagingsimplifiedartistobject"></a>

```json
{
  "cursors": {
    "after": "string",
    "before": "string"
  },
  "href": "string",
  "limit": 0,
  "next": "string",
  "total": 0,
  "items": [
    {
      "external_urls": {
        "spotify": "string"
      },
      "followers": {
        "href": "string",
        "total": 0
      },
      "genres": [
        "Prog rock",
        "Grunge"
      ],
      "href": "string",
      "id": "string",
      "images": [
        {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
          "width": 300
        }
      ],
      "name": "string",
      "popularity": 0,
      "type": "artist",
      "uri": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cursors|object|false|none|The cursors used to find the next set of items.|
|href|string|false|none|A link to the Web API endpoint returning the full result of the request.|
|limit|integer|false|none|The maximum number of items in the response (as set in the query or by default).|
|next|string|false|none|URL to the next page of items. ( `null` if none)|
|total|integer|false|none|The total number of items available to return.|
|items|[[ArtistObject](#schemaartistobject)]|false|none|none|

<h2 id="tocS_DeviceObject">DeviceObject</h2>
<!-- backwards compatibility -->
<a id="schemadeviceobject"></a>
<a id="schema_DeviceObject"></a>
<a id="tocSdeviceobject"></a>
<a id="tocsdeviceobject"></a>

```json
{
  "id": "string",
  "is_active": true,
  "is_private_session": true,
  "is_restricted": true,
  "name": "Kitchen speaker",
  "type": "computer",
  "volume_percent": 59
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string \| null|false|none|The device ID.|
|is_active|boolean|false|none|If this device is the currently active device.|
|is_private_session|boolean|false|none|If this device is currently in a private session.|
|is_restricted|boolean|false|none|Whether controlling this device is restricted. At present if this is "true" then no Web API commands will be accepted by this device.|
|name|string|false|none|A human-readable name for the device. Some devices have a name that the user can configure (e.g. \"Loudest speaker\") and some devices have a generic name associated with the manufacturer or device model.|
|type|string|false|none|Device type, such as "computer", "smartphone" or "speaker".|
|volume_percent|integer \| null|false|none|The current volume in percent.|

<h2 id="tocS_DevicesObject">DevicesObject</h2>
<!-- backwards compatibility -->
<a id="schemadevicesobject"></a>
<a id="schema_DevicesObject"></a>
<a id="tocSdevicesobject"></a>
<a id="tocsdevicesobject"></a>

```json
{
  "devices": [
    {
      "id": "string",
      "is_active": true,
      "is_private_session": true,
      "is_restricted": true,
      "name": "Kitchen speaker",
      "type": "computer",
      "volume_percent": 59
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|devices|[[DeviceObject](#schemadeviceobject)]|false|none|A list of 0..n Device objects|

<h2 id="tocS_DisallowsObject">DisallowsObject</h2>
<!-- backwards compatibility -->
<a id="schemadisallowsobject"></a>
<a id="schema_DisallowsObject"></a>
<a id="tocSdisallowsobject"></a>
<a id="tocsdisallowsobject"></a>

```json
{
  "interrupting_playback": true,
  "pausing": true,
  "resuming": true,
  "seeking": true,
  "skipping_next": true,
  "skipping_prev": true,
  "toggling_repeat_context": true,
  "toggling_repeat_track": true,
  "toggling_shuffle": true,
  "transferring_playback": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|interrupting_playback|boolean|false|none|Interrupting playback. Optional field.|
|pausing|boolean|false|none|Pausing. Optional field.|
|resuming|boolean|false|none|Resuming. Optional field.|
|seeking|boolean|false|none|Seeking playback location. Optional field.|
|skipping_next|boolean|false|none|Skipping to the next context. Optional field.|
|skipping_prev|boolean|false|none|Skipping to the previous context. Optional field.|
|toggling_repeat_context|boolean|false|none|Toggling repeat context flag. Optional field.|
|toggling_repeat_track|boolean|false|none|Toggling repeat track flag. Optional field.|
|toggling_shuffle|boolean|false|none|Toggling shuffle flag. Optional field.|
|transferring_playback|boolean|false|none|Transfering playback between devices. Optional field.|

<h2 id="tocS_EpisodeBase">EpisodeBase</h2>
<!-- backwards compatibility -->
<a id="schemaepisodebase"></a>
<a id="schema_EpisodeBase"></a>
<a id="tocSepisodebase"></a>
<a id="tocsepisodebase"></a>

```json
{
  "audio_preview_url": "https://p.scdn.co/mp3-preview/2f37da1d4221f40b9d1a98cd191f4d6f1646ad17",
  "description": "A Spotify podcast sharing fresh insights on important topics of the moment—in a way only Spotify can. You’ll hear from experts in the music, podcast and tech industries as we discover and uncover stories about our work and the world around us.\n",
  "duration_ms": 1686230,
  "explicit": true,
  "external_urls": {
    "spotify": "string"
  },
  "href": "https://api.spotify.com/v1/episodes/5Xt5DXGzch68nYYamXrNxZ",
  "html_description": "<p>A Spotify podcast sharing fresh insights on important topics of the moment—in a way only Spotify can. You’ll hear from experts in the music, podcast and tech industries as we discover and uncover stories about our work and the world around us.</p>\n",
  "id": "5Xt5DXGzch68nYYamXrNxZ",
  "images": [
    {
      "height": 300,
      "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
      "width": 300
    }
  ],
  "is_externally_hosted": true,
  "is_playable": true,
  "language": "en",
  "languages": [
    "fr",
    "en"
  ],
  "name": "Starting Your Own Podcast: Tips, Tricks, and Advice From Anchor Creators\n",
  "release_date": "1981-12-15",
  "release_date_precision": "day",
  "restrictions": {
    "reason": "string"
  },
  "resume_point": {
    "fully_played": true,
    "resume_position_ms": 0
  },
  "type": "episode",
  "uri": "spotify:episode:0zLhl3WsOCQHbe1BPTiHgr"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|audio_preview_url|string|true|none|A URL to a 30 second preview (MP3 format) of the episode. `null` if not available.<br>|
|description|string|true|none|A description of the episode. HTML tags are stripped away from this field, use `html_description` field in case HTML tags are needed.<br>|
|duration_ms|integer|true|none|The episode length in milliseconds.<br>|
|explicit|boolean|true|none|Whether or not the episode has explicit content (true = yes it does; false = no it does not OR unknown).<br>|
|external_urls|object|true|none|External URLs for this episode.<br>|
|href|string|true|none|A link to the Web API endpoint providing full details of the episode.<br>|
|html_description|string|true|none|A description of the episode. This field may contain HTML tags.<br>|
|id|string|true|none|The [Spotify ID](/documentation/web-api/#spotify-uris-and-ids) for the episode.<br>|
|images|[[ImageObject](#schemaimageobject)]|true|none|The cover art for the episode in various sizes, widest first.<br>|
|is_externally_hosted|boolean|true|none|True if the episode is hosted outside of Spotify's CDN.<br>|
|is_playable|boolean|true|none|True if the episode is playable in the given market. Otherwise false.<br>|
|language|string|false|none|**Deprecated.** The language used in the episode, identified by a [ISO 639](https://en.wikipedia.org/wiki/ISO_639) code. This field is deprecated and might be removed in the future. Please use the `languages` field instead.<br>|
|languages|[string]|true|none|A list of the languages used in the episode, identified by their [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639) code.<br>|
|name|string|true|none|The name of the episode.<br>|
|release_date|string|true|none|The date the episode was first released, for example `"1981-12-15"`. Depending on the precision, it might be shown as `"1981"` or `"1981-12"`.<br>|
|release_date_precision|string|true|none|The precision with which `release_date` value is known.<br>|
|restrictions|object|false|none|Included in the response when a content restriction is applied.<br>|
|resume_point|object|true|none|The user's most recent position in the episode. Set if the supplied access token is a user token and has the scope 'user-read-playback-position'.<br>|
|type|string|true|none|The object type.<br>|
|uri|string|true|none|The [Spotify URI](/documentation/web-api/#spotify-uris-and-ids) for the episode.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|release_date_precision|year|
|release_date_precision|month|
|release_date_precision|day|
|type|episode|

<h2 id="tocS_EpisodeObject">EpisodeObject</h2>
<!-- backwards compatibility -->
<a id="schemaepisodeobject"></a>
<a id="schema_EpisodeObject"></a>
<a id="tocSepisodeobject"></a>
<a id="tocsepisodeobject"></a>

```json
{
  "audio_preview_url": "https://p.scdn.co/mp3-preview/2f37da1d4221f40b9d1a98cd191f4d6f1646ad17",
  "description": "A Spotify podcast sharing fresh insights on important topics of the moment—in a way only Spotify can. You’ll hear from experts in the music, podcast and tech industries as we discover and uncover stories about our work and the world around us.\n",
  "duration_ms": 1686230,
  "explicit": true,
  "external_urls": {
    "spotify": "string"
  },
  "href": "https://api.spotify.com/v1/episodes/5Xt5DXGzch68nYYamXrNxZ",
  "html_description": "<p>A Spotify podcast sharing fresh insights on important topics of the moment—in a way only Spotify can. You’ll hear from experts in the music, podcast and tech industries as we discover and uncover stories about our work and the world around us.</p>\n",
  "id": "5Xt5DXGzch68nYYamXrNxZ",
  "images": [
    {
      "height": 300,
      "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
      "width": 300
    }
  ],
  "is_externally_hosted": true,
  "is_playable": true,
  "language": "en",
  "languages": [
    "fr",
    "en"
  ],
  "name": "Starting Your Own Podcast: Tips, Tricks, and Advice From Anchor Creators\n",
  "release_date": "1981-12-15",
  "release_date_precision": "day",
  "restrictions": {
    "reason": "string"
  },
  "resume_point": {
    "fully_played": true,
    "resume_position_ms": 0
  },
  "type": "episode",
  "uri": "spotify:episode:0zLhl3WsOCQHbe1BPTiHgr",
  "show": {
    "available_markets": [
      "string"
    ],
    "copyrights": [
      {
        "text": "string",
        "type": "string"
      }
    ],
    "description": "string",
    "explicit": true,
    "external_urls": {
      "spotify": "string"
    },
    "href": "string",
    "html_description": "string",
    "id": "string",
    "images": [
      {
        "height": 300,
        "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
        "width": 300
      }
    ],
    "is_externally_hosted": true,
    "languages": [
      "string"
    ],
    "media_type": "string",
    "name": "string",
    "publisher": "string",
    "total_episodes": 0,
    "type": "show",
    "uri": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|audio_preview_url|string|true|none|A URL to a 30 second preview (MP3 format) of the episode. `null` if not available.<br>|
|description|string|true|none|A description of the episode. HTML tags are stripped away from this field, use `html_description` field in case HTML tags are needed.<br>|
|duration_ms|integer|true|none|The episode length in milliseconds.<br>|
|explicit|boolean|true|none|Whether or not the episode has explicit content (true = yes it does; false = no it does not OR unknown).<br>|
|external_urls|object|true|none|External URLs for this episode.<br>|
|href|string|true|none|A link to the Web API endpoint providing full details of the episode.<br>|
|html_description|string|true|none|A description of the episode. This field may contain HTML tags.<br>|
|id|string|true|none|The [Spotify ID](/documentation/web-api/#spotify-uris-and-ids) for the episode.<br>|
|images|[[ImageObject](#schemaimageobject)]|true|none|The cover art for the episode in various sizes, widest first.<br>|
|is_externally_hosted|boolean|true|none|True if the episode is hosted outside of Spotify's CDN.<br>|
|is_playable|boolean|true|none|True if the episode is playable in the given market. Otherwise false.<br>|
|language|string|false|none|**Deprecated.** The language used in the episode, identified by a [ISO 639](https://en.wikipedia.org/wiki/ISO_639) code. This field is deprecated and might be removed in the future. Please use the `languages` field instead.<br>|
|languages|[string]|true|none|A list of the languages used in the episode, identified by their [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639) code.<br>|
|name|string|true|none|The name of the episode.<br>|
|release_date|string|true|none|The date the episode was first released, for example `"1981-12-15"`. Depending on the precision, it might be shown as `"1981"` or `"1981-12"`.<br>|
|release_date_precision|string|true|none|The precision with which `release_date` value is known.<br>|
|restrictions|object|false|none|Included in the response when a content restriction is applied.<br>|
|resume_point|object|true|none|The user's most recent position in the episode. Set if the supplied access token is a user token and has the scope 'user-read-playback-position'.<br>|
|type|string|true|none|The object type.<br>|
|uri|string|true|none|The [Spotify URI](/documentation/web-api/#spotify-uris-and-ids) for the episode.<br>|
|show|object|true|none|The show on which the episode belongs.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|release_date_precision|year|
|release_date_precision|month|
|release_date_precision|day|
|type|episode|

<h2 id="tocS_EpisodeRestrictionObject">EpisodeRestrictionObject</h2>
<!-- backwards compatibility -->
<a id="schemaepisoderestrictionobject"></a>
<a id="schema_EpisodeRestrictionObject"></a>
<a id="tocSepisoderestrictionobject"></a>
<a id="tocsepisoderestrictionobject"></a>

```json
{
  "reason": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reason|string|false|none|The reason for the restriction. Supported values:<br>- `market` - The content item is not available in the given market.<br>- `product` - The content item is not available for the user's subscription type.<br>- `explicit` - The content item is explicit and the user's account is set to not play explicit content.<br><br>Additional reasons may be added in the future.<br>**Note**: If you use this field, make sure that your application safely handles unknown values.<br>|

<h2 id="tocS_ErrorObject">ErrorObject</h2>
<!-- backwards compatibility -->
<a id="schemaerrorobject"></a>
<a id="schema_ErrorObject"></a>
<a id="tocSerrorobject"></a>
<a id="tocserrorobject"></a>

```json
{
  "message": "string",
  "status": 400
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|true|none|A short description of the cause of the error.<br>|
|status|integer|true|none|The HTTP status code (also returned in the response header; see [Response Status Codes](/documentation/web-api/#response-status-codes) for more information).<br>|

<h2 id="tocS_ExplicitContentSettingsObject">ExplicitContentSettingsObject</h2>
<!-- backwards compatibility -->
<a id="schemaexplicitcontentsettingsobject"></a>
<a id="schema_ExplicitContentSettingsObject"></a>
<a id="tocSexplicitcontentsettingsobject"></a>
<a id="tocsexplicitcontentsettingsobject"></a>

```json
{
  "filter_enabled": true,
  "filter_locked": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filter_enabled|boolean|false|none|When `true`, indicates that explicit content should not be played.<br>|
|filter_locked|boolean|false|none|When `true`, indicates that the explicit content setting is locked and can't be changed by the user.<br>|

<h2 id="tocS_ExternalIdObject">ExternalIdObject</h2>
<!-- backwards compatibility -->
<a id="schemaexternalidobject"></a>
<a id="schema_ExternalIdObject"></a>
<a id="tocSexternalidobject"></a>
<a id="tocsexternalidobject"></a>

```json
{
  "ean": "string",
  "isrc": "string",
  "upc": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ean|string|false|none|[International Article Number](http://en.wikipedia.org/wiki/International_Article_Number_%28EAN%29)<br>|
|isrc|string|false|none|[International Standard Recording Code](http://en.wikipedia.org/wiki/International_Standard_Recording_Code)<br>|
|upc|string|false|none|[Universal Product Code](http://en.wikipedia.org/wiki/Universal_Product_Code)<br>|

<h2 id="tocS_ExternalUrlObject">ExternalUrlObject</h2>
<!-- backwards compatibility -->
<a id="schemaexternalurlobject"></a>
<a id="schema_ExternalUrlObject"></a>
<a id="tocSexternalurlobject"></a>
<a id="tocsexternalurlobject"></a>

```json
{
  "spotify": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|spotify|string|false|none|The [Spotify URL](/documentation/web-api/#spotify-uris-and-ids) for the object.<br>|

<h2 id="tocS_FollowersObject">FollowersObject</h2>
<!-- backwards compatibility -->
<a id="schemafollowersobject"></a>
<a id="schema_FollowersObject"></a>
<a id="tocSfollowersobject"></a>
<a id="tocsfollowersobject"></a>

```json
{
  "href": "string",
  "total": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|href|string \| null|false|none|This will always be set to null, as the Web API does not support it at the moment.<br>|
|total|integer|false|none|The total number of followers.<br>|

<h2 id="tocS_ImageObject">ImageObject</h2>
<!-- backwards compatibility -->
<a id="schemaimageobject"></a>
<a id="schema_ImageObject"></a>
<a id="tocSimageobject"></a>
<a id="tocsimageobject"></a>

```json
{
  "height": 300,
  "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
  "width": 300
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|height|integer \| null|true|none|The image height in pixels.<br>|
|url|string|true|none|The source URL of the image.<br>|
|width|integer \| null|true|none|The image width in pixels.<br>|

<h2 id="tocS_Key">Key</h2>
<!-- backwards compatibility -->
<a id="schemakey"></a>
<a id="schema_Key"></a>
<a id="tocSkey"></a>
<a id="tocskey"></a>

```json
9
```

The key the track is in. Integers map to pitches using standard [Pitch Class notation](https://en.wikipedia.org/wiki/Pitch_class). E.g. 0 = C, 1 = C♯/D♭, 2 = D, and so on. If no key was detected, the value is -1.

<h2 id="tocS_LinkedTrackObject">LinkedTrackObject</h2>
<!-- backwards compatibility -->
<a id="schemalinkedtrackobject"></a>
<a id="schema_LinkedTrackObject"></a>
<a id="tocSlinkedtrackobject"></a>
<a id="tocslinkedtrackobject"></a>

```json
{
  "external_urls": {
    "spotify": "string"
  },
  "href": "string",
  "id": "string",
  "type": "string",
  "uri": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|external_urls|object|false|none|Known external URLs for this track.<br>|
|href|string|false|none|A link to the Web API endpoint providing full details of the track.<br>|
|id|string|false|none|The [Spotify ID](/documentation/web-api/#spotify-uris-and-ids) for the track.<br>|
|type|string|false|none|The object type: "track".<br>|
|uri|string|false|none|The [Spotify URI](/documentation/web-api/#spotify-uris-and-ids) for the track.<br>|

<h2 id="tocS_Loudness">Loudness</h2>
<!-- backwards compatibility -->
<a id="schemaloudness"></a>
<a id="schema_Loudness"></a>
<a id="tocSloudness"></a>
<a id="tocsloudness"></a>

```json
-5.883
```

The overall loudness of a track in decibels (dB). Loudness values are averaged across the entire track and are useful for comparing relative loudness of tracks. Loudness is the quality of a sound that is the primary psychological correlate of physical strength (amplitude). Values typically range between -60 and 0 db.

<h2 id="tocS_Mode">Mode</h2>
<!-- backwards compatibility -->
<a id="schemamode"></a>
<a id="schema_Mode"></a>
<a id="tocSmode"></a>
<a id="tocsmode"></a>

```json
0
```

Mode indicates the modality (major or minor) of a track, the type of scale from which its melodic content is derived. Major is represented by 1 and minor is 0.

<h2 id="tocS_NarratorObject">NarratorObject</h2>
<!-- backwards compatibility -->
<a id="schemanarratorobject"></a>
<a id="schema_NarratorObject"></a>
<a id="tocSnarratorobject"></a>
<a id="tocsnarratorobject"></a>

```json
{
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The name of the Narrator.<br>|

<h2 id="tocS_PagingArtistObject">PagingArtistObject</h2>
<!-- backwards compatibility -->
<a id="schemapagingartistobject"></a>
<a id="schema_PagingArtistObject"></a>
<a id="tocSpagingartistobject"></a>
<a id="tocspagingartistobject"></a>

```json
{
  "href": "https://api.spotify.com/v1/me/shows?offset=0&limit=20\n",
  "limit": 20,
  "next": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
  "offset": 0,
  "previous": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
  "total": 4,
  "items": [
    {
      "external_urls": {
        "spotify": "string"
      },
      "followers": {
        "href": "string",
        "total": 0
      },
      "genres": [
        "Prog rock",
        "Grunge"
      ],
      "href": "string",
      "id": "string",
      "images": [
        {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
          "width": 300
        }
      ],
      "name": "string",
      "popularity": 0,
      "type": "artist",
      "uri": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|href|string|true|none|A link to the Web API endpoint returning the full result of the request<br>|
|limit|integer|true|none|The maximum number of items in the response (as set in the query or by default).<br>|
|next|string \| null|true|none|URL to the next page of items. ( `null` if none)<br>|
|offset|integer|true|none|The offset of the items returned (as set in the query or by default)<br>|
|previous|string \| null|true|none|URL to the previous page of items. ( `null` if none)<br>|
|total|integer|true|none|The total number of items available to return.<br>|
|items|[[ArtistObject](#schemaartistobject)]|true|none|none|

<h2 id="tocS_PagingFeaturedPlaylistObject">PagingFeaturedPlaylistObject</h2>
<!-- backwards compatibility -->
<a id="schemapagingfeaturedplaylistobject"></a>
<a id="schema_PagingFeaturedPlaylistObject"></a>
<a id="tocSpagingfeaturedplaylistobject"></a>
<a id="tocspagingfeaturedplaylistobject"></a>

```json
{
  "message": "string",
  "playlists": {
    "href": "https://api.spotify.com/v1/me/shows?offset=0&limit=20\n",
    "limit": 20,
    "next": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
    "offset": 0,
    "previous": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
    "total": 4,
    "items": [
      {
        "collaborative": true,
        "description": "string",
        "external_urls": {
          "spotify": "string"
        },
        "href": "string",
        "id": "string",
        "images": [
          {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
            "width": 300
          }
        ],
        "name": "string",
        "owner": {
          "external_urls": {
            "spotify": "string"
          },
          "followers": {
            "href": "string",
            "total": 0
          },
          "href": "string",
          "id": "string",
          "type": "user",
          "uri": "string",
          "display_name": "string"
        },
        "public": true,
        "snapshot_id": "string",
        "tracks": {
          "href": "string",
          "total": 0
        },
        "type": "string",
        "uri": "string"
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|playlists|[PagingPlaylistObject](#schemapagingplaylistobject)|false|none|none|

<h2 id="tocS_PagingObject">PagingObject</h2>
<!-- backwards compatibility -->
<a id="schemapagingobject"></a>
<a id="schema_PagingObject"></a>
<a id="tocSpagingobject"></a>
<a id="tocspagingobject"></a>

```json
{
  "href": "https://api.spotify.com/v1/me/shows?offset=0&limit=20\n",
  "limit": 20,
  "next": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
  "offset": 0,
  "previous": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
  "total": 4
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|href|string|true|none|A link to the Web API endpoint returning the full result of the request<br>|
|limit|integer|true|none|The maximum number of items in the response (as set in the query or by default).<br>|
|next|string \| null|true|none|URL to the next page of items. ( `null` if none)<br>|
|offset|integer|true|none|The offset of the items returned (as set in the query or by default)<br>|
|previous|string \| null|true|none|URL to the previous page of items. ( `null` if none)<br>|
|total|integer|true|none|The total number of items available to return.<br>|

<h2 id="tocS_PagingPlaylistObject">PagingPlaylistObject</h2>
<!-- backwards compatibility -->
<a id="schemapagingplaylistobject"></a>
<a id="schema_PagingPlaylistObject"></a>
<a id="tocSpagingplaylistobject"></a>
<a id="tocspagingplaylistobject"></a>

```json
{
  "href": "https://api.spotify.com/v1/me/shows?offset=0&limit=20\n",
  "limit": 20,
  "next": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
  "offset": 0,
  "previous": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
  "total": 4,
  "items": [
    {
      "collaborative": true,
      "description": "string",
      "external_urls": {
        "spotify": "string"
      },
      "href": "string",
      "id": "string",
      "images": [
        {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
          "width": 300
        }
      ],
      "name": "string",
      "owner": {
        "external_urls": {
          "spotify": "string"
        },
        "followers": {
          "href": "string",
          "total": 0
        },
        "href": "string",
        "id": "string",
        "type": "user",
        "uri": "string",
        "display_name": "string"
      },
      "public": true,
      "snapshot_id": "string",
      "tracks": {
        "href": "string",
        "total": 0
      },
      "type": "string",
      "uri": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|href|string|true|none|A link to the Web API endpoint returning the full result of the request<br>|
|limit|integer|true|none|The maximum number of items in the response (as set in the query or by default).<br>|
|next|string \| null|true|none|URL to the next page of items. ( `null` if none)<br>|
|offset|integer|true|none|The offset of the items returned (as set in the query or by default)<br>|
|previous|string \| null|true|none|URL to the previous page of items. ( `null` if none)<br>|
|total|integer|true|none|The total number of items available to return.<br>|
|items|[[SimplifiedPlaylistObject](#schemasimplifiedplaylistobject)]|true|none|none|

<h2 id="tocS_PagingPlaylistTrackObject">PagingPlaylistTrackObject</h2>
<!-- backwards compatibility -->
<a id="schemapagingplaylisttrackobject"></a>
<a id="schema_PagingPlaylistTrackObject"></a>
<a id="tocSpagingplaylisttrackobject"></a>
<a id="tocspagingplaylisttrackobject"></a>

```json
{
  "href": "https://api.spotify.com/v1/me/shows?offset=0&limit=20\n",
  "limit": 20,
  "next": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
  "offset": 0,
  "previous": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
  "total": 4,
  "items": [
    {
      "added_at": "1970-01-01T00:00:00Z",
      "added_by": {
        "external_urls": {
          "spotify": "string"
        },
        "followers": {
          "href": "string",
          "total": 0
        },
        "href": "string",
        "id": "string",
        "type": "user",
        "uri": "string"
      },
      "is_local": true,
      "track": {
        "album": {
          "album_type": "compilation",
          "available_markets": [
            "CA",
            "BR",
            "IT"
          ],
          "external_urls": {
            "spotify": "string"
          },
          "href": "string",
          "id": "2up3OPMp9Tb4dAKM2erWXQ",
          "images": [
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
              "width": 300
            }
          ],
          "name": "string",
          "release_date": "1981-12",
          "release_date_precision": "year",
          "restrictions": {
            "reason": "market"
          },
          "total_tracks": 9,
          "type": "album",
          "uri": "spotify:album:2up3OPMp9Tb4dAKM2erWXQ",
          "album_group": "compilation",
          "artists": [
            {
              "external_urls": {
                "spotify": "string"
              },
              "href": "string",
              "id": "string",
              "name": "string",
              "type": "artist",
              "uri": "string"
            }
          ]
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "string"
            },
            "followers": {
              "href": "string",
              "total": 0
            },
            "genres": [
              "Prog rock",
              "Grunge"
            ],
            "href": "string",
            "id": "string",
            "images": [
              {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
                "width": 300
              }
            ],
            "name": "string",
            "popularity": 0,
            "type": "artist",
            "uri": "string"
          }
        ],
        "available_markets": [
          "string"
        ],
        "disc_number": 0,
        "duration_ms": 0,
        "explicit": true,
        "external_ids": {
          "ean": "string",
          "isrc": "string",
          "upc": "string"
        },
        "external_urls": {
          "spotify": "string"
        },
        "href": "string",
        "id": "string",
        "is_local": true,
        "is_playable": true,
        "linked_from": {
          "external_urls": {
            "spotify": "string"
          },
          "href": "string",
          "id": "string",
          "type": "string",
          "uri": "string"
        },
        "name": "string",
        "popularity": 0,
        "preview_url": "string",
        "restrictions": {
          "reason": "string"
        },
        "track_number": 0,
        "type": "track",
        "uri": "string"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|href|string|true|none|A link to the Web API endpoint returning the full result of the request<br>|
|limit|integer|true|none|The maximum number of items in the response (as set in the query or by default).<br>|
|next|string \| null|true|none|URL to the next page of items. ( `null` if none)<br>|
|offset|integer|true|none|The offset of the items returned (as set in the query or by default)<br>|
|previous|string \| null|true|none|URL to the previous page of items. ( `null` if none)<br>|
|total|integer|true|none|The total number of items available to return.<br>|
|items|[[PlaylistTrackObject](#schemaplaylisttrackobject)]|true|none|none|

<h2 id="tocS_PagingSavedAlbumObject">PagingSavedAlbumObject</h2>
<!-- backwards compatibility -->
<a id="schemapagingsavedalbumobject"></a>
<a id="schema_PagingSavedAlbumObject"></a>
<a id="tocSpagingsavedalbumobject"></a>
<a id="tocspagingsavedalbumobject"></a>

```json
{
  "href": "https://api.spotify.com/v1/me/shows?offset=0&limit=20\n",
  "limit": 20,
  "next": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
  "offset": 0,
  "previous": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
  "total": 4,
  "items": [
    {
      "added_at": "1970-01-01T00:00:00Z",
      "album": {
        "album_type": "compilation",
        "available_markets": [
          "CA",
          "BR",
          "IT"
        ],
        "external_urls": {
          "spotify": "string"
        },
        "href": "string",
        "id": "2up3OPMp9Tb4dAKM2erWXQ",
        "images": [
          {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
            "width": 300
          }
        ],
        "name": "string",
        "release_date": "1981-12",
        "release_date_precision": "year",
        "restrictions": {
          "reason": "market"
        },
        "total_tracks": 9,
        "type": "album",
        "uri": "spotify:album:2up3OPMp9Tb4dAKM2erWXQ",
        "artists": [
          {
            "external_urls": {
              "spotify": "string"
            },
            "href": "string",
            "id": "string",
            "name": "string",
            "type": "artist",
            "uri": "string"
          }
        ],
        "copyrights": [
          {
            "text": "string",
            "type": "string"
          }
        ],
        "external_ids": {
          "ean": "string",
          "isrc": "string",
          "upc": "string"
        },
        "genres": [
          "string"
        ],
        "label": "string",
        "popularity": 0,
        "tracks": {
          "href": "https://api.spotify.com/v1/me/shows?offset=0&limit=20\n",
          "limit": 20,
          "next": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
          "offset": 0,
          "previous": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
          "total": 4,
          "items": [
            {
              "artists": [
                {
                  "external_urls": {
                    "spotify": "string"
                  },
                  "href": "string",
                  "id": "string",
                  "name": "string",
                  "type": "artist",
                  "uri": "string"
                }
              ],
              "available_markets": [
                "string"
              ],
              "disc_number": 0,
              "duration_ms": 0,
              "explicit": true,
              "external_urls": {
                "spotify": "string"
              },
              "href": "string",
              "id": "string",
              "is_local": true,
              "is_playable": true,
              "linked_from": {
                "external_urls": {
                  "spotify": "string"
                },
                "href": "string",
                "id": "string",
                "type": "string",
                "uri": "string"
              },
              "name": "string",
              "preview_url": "string",
              "restrictions": {
                "reason": "string"
              },
              "track_number": 0,
              "type": "string",
              "uri": "string"
            }
          ]
        }
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|href|string|true|none|A link to the Web API endpoint returning the full result of the request<br>|
|limit|integer|true|none|The maximum number of items in the response (as set in the query or by default).<br>|
|next|string \| null|true|none|URL to the next page of items. ( `null` if none)<br>|
|offset|integer|true|none|The offset of the items returned (as set in the query or by default)<br>|
|previous|string \| null|true|none|URL to the previous page of items. ( `null` if none)<br>|
|total|integer|true|none|The total number of items available to return.<br>|
|items|[[SavedAlbumObject](#schemasavedalbumobject)]|true|none|none|

<h2 id="tocS_PagingSavedAudiobookObject">PagingSavedAudiobookObject</h2>
<!-- backwards compatibility -->
<a id="schemapagingsavedaudiobookobject"></a>
<a id="schema_PagingSavedAudiobookObject"></a>
<a id="tocSpagingsavedaudiobookobject"></a>
<a id="tocspagingsavedaudiobookobject"></a>

```json
{
  "href": "https://api.spotify.com/v1/me/shows?offset=0&limit=20\n",
  "limit": 20,
  "next": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
  "offset": 0,
  "previous": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
  "total": 4,
  "items": [
    {
      "added_at": "1970-01-01T00:00:00Z",
      "audiobook": {
        "authors": [
          {
            "name": "string"
          }
        ],
        "available_markets": [
          "string"
        ],
        "copyrights": [
          {
            "text": "string",
            "type": "string"
          }
        ],
        "description": "string",
        "edition": "Unabridged",
        "explicit": true,
        "external_urls": {
          "spotify": "string"
        },
        "href": "string",
        "html_description": "string",
        "id": "string",
        "images": [
          {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
            "width": 300
          }
        ],
        "languages": [
          "string"
        ],
        "media_type": "string",
        "name": "string",
        "narrators": [
          {
            "name": "string"
          }
        ],
        "publisher": "string",
        "total_chapters": 0,
        "type": "audiobook",
        "uri": "string",
        "chapters": {
          "href": "https://api.spotify.com/v1/me/shows?offset=0&limit=20\n",
          "limit": 20,
          "next": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
          "offset": 0,
          "previous": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
          "total": 4,
          "items": [
            {
              "audio_preview_url": "https://p.scdn.co/mp3-preview/2f37da1d4221f40b9d1a98cd191f4d6f1646ad17",
              "available_markets": [
                "string"
              ],
              "chapter_number": 1,
              "description": "A Spotify podcast sharing fresh insights on important topics of the moment—in a way only Spotify can. You’ll hear from experts in the music, podcast and tech industries as we discover and uncover stories about our work and the world around us.\n",
              "duration_ms": 1686230,
              "explicit": true,
              "external_urls": {
                "spotify": "string"
              },
              "href": "https://api.spotify.com/v1/episodes/5Xt5DXGzch68nYYamXrNxZ",
              "html_description": "<p>A Spotify podcast sharing fresh insights on important topics of the moment—in a way only Spotify can. You’ll hear from experts in the music, podcast and tech industries as we discover and uncover stories about our work and the world around us.</p>\n",
              "id": "5Xt5DXGzch68nYYamXrNxZ",
              "images": [
                {
                  "height": 300,
                  "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
                  "width": 300
                }
              ],
              "is_playable": true,
              "languages": [
                "fr",
                "en"
              ],
              "name": "Starting Your Own Podcast: Tips, Tricks, and Advice From Anchor Creators\n",
              "release_date": "1981-12-15",
              "release_date_precision": "day",
              "restrictions": {
                "reason": "string"
              },
              "resume_point": {
                "fully_played": true,
                "resume_position_ms": 0
              },
              "type": "episode",
              "uri": "spotify:episode:0zLhl3WsOCQHbe1BPTiHgr"
            }
          ]
        }
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|href|string|true|none|A link to the Web API endpoint returning the full result of the request<br>|
|limit|integer|true|none|The maximum number of items in the response (as set in the query or by default).<br>|
|next|string \| null|true|none|URL to the next page of items. ( `null` if none)<br>|
|offset|integer|true|none|The offset of the items returned (as set in the query or by default)<br>|
|previous|string \| null|true|none|URL to the previous page of items. ( `null` if none)<br>|
|total|integer|true|none|The total number of items available to return.<br>|
|items|[[SavedAudiobookObject](#schemasavedaudiobookobject)]|true|none|none|

<h2 id="tocS_PagingSavedEpisodeObject">PagingSavedEpisodeObject</h2>
<!-- backwards compatibility -->
<a id="schemapagingsavedepisodeobject"></a>
<a id="schema_PagingSavedEpisodeObject"></a>
<a id="tocSpagingsavedepisodeobject"></a>
<a id="tocspagingsavedepisodeobject"></a>

```json
{
  "href": "https://api.spotify.com/v1/me/shows?offset=0&limit=20\n",
  "limit": 20,
  "next": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
  "offset": 0,
  "previous": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
  "total": 4,
  "items": [
    {
      "added_at": "1970-01-01T00:00:00Z",
      "episode": {
        "audio_preview_url": "https://p.scdn.co/mp3-preview/2f37da1d4221f40b9d1a98cd191f4d6f1646ad17",
        "description": "A Spotify podcast sharing fresh insights on important topics of the moment—in a way only Spotify can. You’ll hear from experts in the music, podcast and tech industries as we discover and uncover stories about our work and the world around us.\n",
        "duration_ms": 1686230,
        "explicit": true,
        "external_urls": {
          "spotify": "string"
        },
        "href": "https://api.spotify.com/v1/episodes/5Xt5DXGzch68nYYamXrNxZ",
        "html_description": "<p>A Spotify podcast sharing fresh insights on important topics of the moment—in a way only Spotify can. You’ll hear from experts in the music, podcast and tech industries as we discover and uncover stories about our work and the world around us.</p>\n",
        "id": "5Xt5DXGzch68nYYamXrNxZ",
        "images": [
          {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
            "width": 300
          }
        ],
        "is_externally_hosted": true,
        "is_playable": true,
        "language": "en",
        "languages": [
          "fr",
          "en"
        ],
        "name": "Starting Your Own Podcast: Tips, Tricks, and Advice From Anchor Creators\n",
        "release_date": "1981-12-15",
        "release_date_precision": "day",
        "restrictions": {
          "reason": "string"
        },
        "resume_point": {
          "fully_played": true,
          "resume_position_ms": 0
        },
        "type": "episode",
        "uri": "spotify:episode:0zLhl3WsOCQHbe1BPTiHgr",
        "show": {
          "available_markets": [
            "string"
          ],
          "copyrights": [
            {
              "text": "string",
              "type": "string"
            }
          ],
          "description": "string",
          "explicit": true,
          "external_urls": {
            "spotify": "string"
          },
          "href": "string",
          "html_description": "string",
          "id": "string",
          "images": [
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
              "width": 300
            }
          ],
          "is_externally_hosted": true,
          "languages": [
            "string"
          ],
          "media_type": "string",
          "name": "string",
          "publisher": "string",
          "total_episodes": 0,
          "type": "show",
          "uri": "string"
        }
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|href|string|true|none|A link to the Web API endpoint returning the full result of the request<br>|
|limit|integer|true|none|The maximum number of items in the response (as set in the query or by default).<br>|
|next|string \| null|true|none|URL to the next page of items. ( `null` if none)<br>|
|offset|integer|true|none|The offset of the items returned (as set in the query or by default)<br>|
|previous|string \| null|true|none|URL to the previous page of items. ( `null` if none)<br>|
|total|integer|true|none|The total number of items available to return.<br>|
|items|[[SavedEpisodeObject](#schemasavedepisodeobject)]|true|none|none|

<h2 id="tocS_PagingSavedShowObject">PagingSavedShowObject</h2>
<!-- backwards compatibility -->
<a id="schemapagingsavedshowobject"></a>
<a id="schema_PagingSavedShowObject"></a>
<a id="tocSpagingsavedshowobject"></a>
<a id="tocspagingsavedshowobject"></a>

```json
{
  "href": "https://api.spotify.com/v1/me/shows?offset=0&limit=20\n",
  "limit": 20,
  "next": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
  "offset": 0,
  "previous": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
  "total": 4,
  "items": [
    {
      "added_at": "1970-01-01T00:00:00Z",
      "show": {
        "available_markets": [
          "string"
        ],
        "copyrights": [
          {
            "text": "string",
            "type": "string"
          }
        ],
        "description": "string",
        "explicit": true,
        "external_urls": {
          "spotify": "string"
        },
        "href": "string",
        "html_description": "string",
        "id": "string",
        "images": [
          {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
            "width": 300
          }
        ],
        "is_externally_hosted": true,
        "languages": [
          "string"
        ],
        "media_type": "string",
        "name": "string",
        "publisher": "string",
        "total_episodes": 0,
        "type": "show",
        "uri": "string"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|href|string|true|none|A link to the Web API endpoint returning the full result of the request<br>|
|limit|integer|true|none|The maximum number of items in the response (as set in the query or by default).<br>|
|next|string \| null|true|none|URL to the next page of items. ( `null` if none)<br>|
|offset|integer|true|none|The offset of the items returned (as set in the query or by default)<br>|
|previous|string \| null|true|none|URL to the previous page of items. ( `null` if none)<br>|
|total|integer|true|none|The total number of items available to return.<br>|
|items|[[SavedShowObject](#schemasavedshowobject)]|true|none|none|

<h2 id="tocS_PagingSavedTrackObject">PagingSavedTrackObject</h2>
<!-- backwards compatibility -->
<a id="schemapagingsavedtrackobject"></a>
<a id="schema_PagingSavedTrackObject"></a>
<a id="tocSpagingsavedtrackobject"></a>
<a id="tocspagingsavedtrackobject"></a>

```json
{
  "href": "https://api.spotify.com/v1/me/shows?offset=0&limit=20\n",
  "limit": 20,
  "next": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
  "offset": 0,
  "previous": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
  "total": 4,
  "items": [
    {
      "added_at": "1970-01-01T00:00:00Z",
      "track": {
        "album": {
          "album_type": "compilation",
          "available_markets": [
            "CA",
            "BR",
            "IT"
          ],
          "external_urls": {
            "spotify": "string"
          },
          "href": "string",
          "id": "2up3OPMp9Tb4dAKM2erWXQ",
          "images": [
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
              "width": 300
            }
          ],
          "name": "string",
          "release_date": "1981-12",
          "release_date_precision": "year",
          "restrictions": {
            "reason": "market"
          },
          "total_tracks": 9,
          "type": "album",
          "uri": "spotify:album:2up3OPMp9Tb4dAKM2erWXQ",
          "album_group": "compilation",
          "artists": [
            {
              "external_urls": {
                "spotify": "string"
              },
              "href": "string",
              "id": "string",
              "name": "string",
              "type": "artist",
              "uri": "string"
            }
          ]
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "string"
            },
            "followers": {
              "href": "string",
              "total": 0
            },
            "genres": [
              "Prog rock",
              "Grunge"
            ],
            "href": "string",
            "id": "string",
            "images": [
              {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
                "width": 300
              }
            ],
            "name": "string",
            "popularity": 0,
            "type": "artist",
            "uri": "string"
          }
        ],
        "available_markets": [
          "string"
        ],
        "disc_number": 0,
        "duration_ms": 0,
        "explicit": true,
        "external_ids": {
          "ean": "string",
          "isrc": "string",
          "upc": "string"
        },
        "external_urls": {
          "spotify": "string"
        },
        "href": "string",
        "id": "string",
        "is_local": true,
        "is_playable": true,
        "linked_from": {
          "external_urls": {
            "spotify": "string"
          },
          "href": "string",
          "id": "string",
          "type": "string",
          "uri": "string"
        },
        "name": "string",
        "popularity": 0,
        "preview_url": "string",
        "restrictions": {
          "reason": "string"
        },
        "track_number": 0,
        "type": "track",
        "uri": "string"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|href|string|true|none|A link to the Web API endpoint returning the full result of the request<br>|
|limit|integer|true|none|The maximum number of items in the response (as set in the query or by default).<br>|
|next|string \| null|true|none|URL to the next page of items. ( `null` if none)<br>|
|offset|integer|true|none|The offset of the items returned (as set in the query or by default)<br>|
|previous|string \| null|true|none|URL to the previous page of items. ( `null` if none)<br>|
|total|integer|true|none|The total number of items available to return.<br>|
|items|[[SavedTrackObject](#schemasavedtrackobject)]|true|none|none|

<h2 id="tocS_PagingSimplifiedAlbumObject">PagingSimplifiedAlbumObject</h2>
<!-- backwards compatibility -->
<a id="schemapagingsimplifiedalbumobject"></a>
<a id="schema_PagingSimplifiedAlbumObject"></a>
<a id="tocSpagingsimplifiedalbumobject"></a>
<a id="tocspagingsimplifiedalbumobject"></a>

```json
{
  "href": "https://api.spotify.com/v1/me/shows?offset=0&limit=20\n",
  "limit": 20,
  "next": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
  "offset": 0,
  "previous": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
  "total": 4,
  "items": [
    {
      "album_type": "compilation",
      "available_markets": [
        "CA",
        "BR",
        "IT"
      ],
      "external_urls": {
        "spotify": "string"
      },
      "href": "string",
      "id": "2up3OPMp9Tb4dAKM2erWXQ",
      "images": [
        {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
          "width": 300
        }
      ],
      "name": "string",
      "release_date": "1981-12",
      "release_date_precision": "year",
      "restrictions": {
        "reason": "market"
      },
      "total_tracks": 9,
      "type": "album",
      "uri": "spotify:album:2up3OPMp9Tb4dAKM2erWXQ",
      "album_group": "compilation",
      "artists": [
        {
          "external_urls": {
            "spotify": "string"
          },
          "href": "string",
          "id": "string",
          "name": "string",
          "type": "artist",
          "uri": "string"
        }
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|href|string|true|none|A link to the Web API endpoint returning the full result of the request<br>|
|limit|integer|true|none|The maximum number of items in the response (as set in the query or by default).<br>|
|next|string \| null|true|none|URL to the next page of items. ( `null` if none)<br>|
|offset|integer|true|none|The offset of the items returned (as set in the query or by default)<br>|
|previous|string \| null|true|none|URL to the previous page of items. ( `null` if none)<br>|
|total|integer|true|none|The total number of items available to return.<br>|
|items|[[SimplifiedAlbumObject](#schemasimplifiedalbumobject)]|true|none|none|

<h2 id="tocS_PagingSimplifiedArtistObject">PagingSimplifiedArtistObject</h2>
<!-- backwards compatibility -->
<a id="schemapagingsimplifiedartistobject"></a>
<a id="schema_PagingSimplifiedArtistObject"></a>
<a id="tocSpagingsimplifiedartistobject"></a>
<a id="tocspagingsimplifiedartistobject"></a>

```json
{
  "href": "https://api.spotify.com/v1/me/shows?offset=0&limit=20\n",
  "limit": 20,
  "next": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
  "offset": 0,
  "previous": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
  "total": 4,
  "items": [
    {
      "external_urls": {
        "spotify": "string"
      },
      "href": "string",
      "id": "string",
      "name": "string",
      "type": "artist",
      "uri": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|href|string|true|none|A link to the Web API endpoint returning the full result of the request<br>|
|limit|integer|true|none|The maximum number of items in the response (as set in the query or by default).<br>|
|next|string \| null|true|none|URL to the next page of items. ( `null` if none)<br>|
|offset|integer|true|none|The offset of the items returned (as set in the query or by default)<br>|
|previous|string \| null|true|none|URL to the previous page of items. ( `null` if none)<br>|
|total|integer|true|none|The total number of items available to return.<br>|
|items|[[SimplifiedArtistObject](#schemasimplifiedartistobject)]|true|none|none|

<h2 id="tocS_PagingSimplifiedAudiobookObject">PagingSimplifiedAudiobookObject</h2>
<!-- backwards compatibility -->
<a id="schemapagingsimplifiedaudiobookobject"></a>
<a id="schema_PagingSimplifiedAudiobookObject"></a>
<a id="tocSpagingsimplifiedaudiobookobject"></a>
<a id="tocspagingsimplifiedaudiobookobject"></a>

```json
{
  "href": "https://api.spotify.com/v1/me/shows?offset=0&limit=20\n",
  "limit": 20,
  "next": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
  "offset": 0,
  "previous": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
  "total": 4,
  "items": [
    {
      "authors": [
        {
          "name": "string"
        }
      ],
      "available_markets": [
        "string"
      ],
      "copyrights": [
        {
          "text": "string",
          "type": "string"
        }
      ],
      "description": "string",
      "edition": "Unabridged",
      "explicit": true,
      "external_urls": {
        "spotify": "string"
      },
      "href": "string",
      "html_description": "string",
      "id": "string",
      "images": [
        {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
          "width": 300
        }
      ],
      "languages": [
        "string"
      ],
      "media_type": "string",
      "name": "string",
      "narrators": [
        {
          "name": "string"
        }
      ],
      "publisher": "string",
      "total_chapters": 0,
      "type": "audiobook",
      "uri": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|href|string|true|none|A link to the Web API endpoint returning the full result of the request<br>|
|limit|integer|true|none|The maximum number of items in the response (as set in the query or by default).<br>|
|next|string \| null|true|none|URL to the next page of items. ( `null` if none)<br>|
|offset|integer|true|none|The offset of the items returned (as set in the query or by default)<br>|
|previous|string \| null|true|none|URL to the previous page of items. ( `null` if none)<br>|
|total|integer|true|none|The total number of items available to return.<br>|
|items|[[SimplifiedAudiobookObject](#schemasimplifiedaudiobookobject)]|true|none|none|

<h2 id="tocS_PagingSimplifiedChapterObject">PagingSimplifiedChapterObject</h2>
<!-- backwards compatibility -->
<a id="schemapagingsimplifiedchapterobject"></a>
<a id="schema_PagingSimplifiedChapterObject"></a>
<a id="tocSpagingsimplifiedchapterobject"></a>
<a id="tocspagingsimplifiedchapterobject"></a>

```json
{
  "href": "https://api.spotify.com/v1/me/shows?offset=0&limit=20\n",
  "limit": 20,
  "next": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
  "offset": 0,
  "previous": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
  "total": 4,
  "items": [
    {
      "audio_preview_url": "https://p.scdn.co/mp3-preview/2f37da1d4221f40b9d1a98cd191f4d6f1646ad17",
      "available_markets": [
        "string"
      ],
      "chapter_number": 1,
      "description": "A Spotify podcast sharing fresh insights on important topics of the moment—in a way only Spotify can. You’ll hear from experts in the music, podcast and tech industries as we discover and uncover stories about our work and the world around us.\n",
      "duration_ms": 1686230,
      "explicit": true,
      "external_urls": {
        "spotify": "string"
      },
      "href": "https://api.spotify.com/v1/episodes/5Xt5DXGzch68nYYamXrNxZ",
      "html_description": "<p>A Spotify podcast sharing fresh insights on important topics of the moment—in a way only Spotify can. You’ll hear from experts in the music, podcast and tech industries as we discover and uncover stories about our work and the world around us.</p>\n",
      "id": "5Xt5DXGzch68nYYamXrNxZ",
      "images": [
        {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
          "width": 300
        }
      ],
      "is_playable": true,
      "languages": [
        "fr",
        "en"
      ],
      "name": "Starting Your Own Podcast: Tips, Tricks, and Advice From Anchor Creators\n",
      "release_date": "1981-12-15",
      "release_date_precision": "day",
      "restrictions": {
        "reason": "string"
      },
      "resume_point": {
        "fully_played": true,
        "resume_position_ms": 0
      },
      "type": "episode",
      "uri": "spotify:episode:0zLhl3WsOCQHbe1BPTiHgr"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|href|string|true|none|A link to the Web API endpoint returning the full result of the request<br>|
|limit|integer|true|none|The maximum number of items in the response (as set in the query or by default).<br>|
|next|string \| null|true|none|URL to the next page of items. ( `null` if none)<br>|
|offset|integer|true|none|The offset of the items returned (as set in the query or by default)<br>|
|previous|string \| null|true|none|URL to the previous page of items. ( `null` if none)<br>|
|total|integer|true|none|The total number of items available to return.<br>|
|items|[[SimplifiedChapterObject](#schemasimplifiedchapterobject)]|true|none|none|

<h2 id="tocS_PagingSimplifiedEpisodeObject">PagingSimplifiedEpisodeObject</h2>
<!-- backwards compatibility -->
<a id="schemapagingsimplifiedepisodeobject"></a>
<a id="schema_PagingSimplifiedEpisodeObject"></a>
<a id="tocSpagingsimplifiedepisodeobject"></a>
<a id="tocspagingsimplifiedepisodeobject"></a>

```json
{
  "href": "https://api.spotify.com/v1/me/shows?offset=0&limit=20\n",
  "limit": 20,
  "next": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
  "offset": 0,
  "previous": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
  "total": 4,
  "items": [
    {
      "audio_preview_url": "https://p.scdn.co/mp3-preview/2f37da1d4221f40b9d1a98cd191f4d6f1646ad17",
      "description": "A Spotify podcast sharing fresh insights on important topics of the moment—in a way only Spotify can. You’ll hear from experts in the music, podcast and tech industries as we discover and uncover stories about our work and the world around us.\n",
      "duration_ms": 1686230,
      "explicit": true,
      "external_urls": {
        "spotify": "string"
      },
      "href": "https://api.spotify.com/v1/episodes/5Xt5DXGzch68nYYamXrNxZ",
      "html_description": "<p>A Spotify podcast sharing fresh insights on important topics of the moment—in a way only Spotify can. You’ll hear from experts in the music, podcast and tech industries as we discover and uncover stories about our work and the world around us.</p>\n",
      "id": "5Xt5DXGzch68nYYamXrNxZ",
      "images": [
        {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
          "width": 300
        }
      ],
      "is_externally_hosted": true,
      "is_playable": true,
      "language": "en",
      "languages": [
        "fr",
        "en"
      ],
      "name": "Starting Your Own Podcast: Tips, Tricks, and Advice From Anchor Creators\n",
      "release_date": "1981-12-15",
      "release_date_precision": "day",
      "restrictions": {
        "reason": "string"
      },
      "resume_point": {
        "fully_played": true,
        "resume_position_ms": 0
      },
      "type": "episode",
      "uri": "spotify:episode:0zLhl3WsOCQHbe1BPTiHgr"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|href|string|true|none|A link to the Web API endpoint returning the full result of the request<br>|
|limit|integer|true|none|The maximum number of items in the response (as set in the query or by default).<br>|
|next|string \| null|true|none|URL to the next page of items. ( `null` if none)<br>|
|offset|integer|true|none|The offset of the items returned (as set in the query or by default)<br>|
|previous|string \| null|true|none|URL to the previous page of items. ( `null` if none)<br>|
|total|integer|true|none|The total number of items available to return.<br>|
|items|[[SimplifiedEpisodeObject](#schemasimplifiedepisodeobject)]|true|none|none|

<h2 id="tocS_PagingSimplifiedShowObject">PagingSimplifiedShowObject</h2>
<!-- backwards compatibility -->
<a id="schemapagingsimplifiedshowobject"></a>
<a id="schema_PagingSimplifiedShowObject"></a>
<a id="tocSpagingsimplifiedshowobject"></a>
<a id="tocspagingsimplifiedshowobject"></a>

```json
{
  "href": "https://api.spotify.com/v1/me/shows?offset=0&limit=20\n",
  "limit": 20,
  "next": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
  "offset": 0,
  "previous": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
  "total": 4,
  "items": [
    {
      "available_markets": [
        "string"
      ],
      "copyrights": [
        {
          "text": "string",
          "type": "string"
        }
      ],
      "description": "string",
      "explicit": true,
      "external_urls": {
        "spotify": "string"
      },
      "href": "string",
      "html_description": "string",
      "id": "string",
      "images": [
        {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
          "width": 300
        }
      ],
      "is_externally_hosted": true,
      "languages": [
        "string"
      ],
      "media_type": "string",
      "name": "string",
      "publisher": "string",
      "total_episodes": 0,
      "type": "show",
      "uri": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|href|string|true|none|A link to the Web API endpoint returning the full result of the request<br>|
|limit|integer|true|none|The maximum number of items in the response (as set in the query or by default).<br>|
|next|string \| null|true|none|URL to the next page of items. ( `null` if none)<br>|
|offset|integer|true|none|The offset of the items returned (as set in the query or by default)<br>|
|previous|string \| null|true|none|URL to the previous page of items. ( `null` if none)<br>|
|total|integer|true|none|The total number of items available to return.<br>|
|items|[[SimplifiedShowObject](#schemasimplifiedshowobject)]|true|none|none|

<h2 id="tocS_PagingSimplifiedTrackObject">PagingSimplifiedTrackObject</h2>
<!-- backwards compatibility -->
<a id="schemapagingsimplifiedtrackobject"></a>
<a id="schema_PagingSimplifiedTrackObject"></a>
<a id="tocSpagingsimplifiedtrackobject"></a>
<a id="tocspagingsimplifiedtrackobject"></a>

```json
{
  "href": "https://api.spotify.com/v1/me/shows?offset=0&limit=20\n",
  "limit": 20,
  "next": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
  "offset": 0,
  "previous": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
  "total": 4,
  "items": [
    {
      "artists": [
        {
          "external_urls": {
            "spotify": "string"
          },
          "href": "string",
          "id": "string",
          "name": "string",
          "type": "artist",
          "uri": "string"
        }
      ],
      "available_markets": [
        "string"
      ],
      "disc_number": 0,
      "duration_ms": 0,
      "explicit": true,
      "external_urls": {
        "spotify": "string"
      },
      "href": "string",
      "id": "string",
      "is_local": true,
      "is_playable": true,
      "linked_from": {
        "external_urls": {
          "spotify": "string"
        },
        "href": "string",
        "id": "string",
        "type": "string",
        "uri": "string"
      },
      "name": "string",
      "preview_url": "string",
      "restrictions": {
        "reason": "string"
      },
      "track_number": 0,
      "type": "string",
      "uri": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|href|string|true|none|A link to the Web API endpoint returning the full result of the request<br>|
|limit|integer|true|none|The maximum number of items in the response (as set in the query or by default).<br>|
|next|string \| null|true|none|URL to the next page of items. ( `null` if none)<br>|
|offset|integer|true|none|The offset of the items returned (as set in the query or by default)<br>|
|previous|string \| null|true|none|URL to the previous page of items. ( `null` if none)<br>|
|total|integer|true|none|The total number of items available to return.<br>|
|items|[[SimplifiedTrackObject](#schemasimplifiedtrackobject)]|true|none|none|

<h2 id="tocS_PagingTrackObject">PagingTrackObject</h2>
<!-- backwards compatibility -->
<a id="schemapagingtrackobject"></a>
<a id="schema_PagingTrackObject"></a>
<a id="tocSpagingtrackobject"></a>
<a id="tocspagingtrackobject"></a>

```json
{
  "href": "https://api.spotify.com/v1/me/shows?offset=0&limit=20\n",
  "limit": 20,
  "next": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
  "offset": 0,
  "previous": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
  "total": 4,
  "items": [
    {
      "album": {
        "album_type": "compilation",
        "available_markets": [
          "CA",
          "BR",
          "IT"
        ],
        "external_urls": {
          "spotify": "string"
        },
        "href": "string",
        "id": "2up3OPMp9Tb4dAKM2erWXQ",
        "images": [
          {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
            "width": 300
          }
        ],
        "name": "string",
        "release_date": "1981-12",
        "release_date_precision": "year",
        "restrictions": {
          "reason": "market"
        },
        "total_tracks": 9,
        "type": "album",
        "uri": "spotify:album:2up3OPMp9Tb4dAKM2erWXQ",
        "album_group": "compilation",
        "artists": [
          {
            "external_urls": {
              "spotify": "string"
            },
            "href": "string",
            "id": "string",
            "name": "string",
            "type": "artist",
            "uri": "string"
          }
        ]
      },
      "artists": [
        {
          "external_urls": {
            "spotify": "string"
          },
          "followers": {
            "href": "string",
            "total": 0
          },
          "genres": [
            "Prog rock",
            "Grunge"
          ],
          "href": "string",
          "id": "string",
          "images": [
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
              "width": 300
            }
          ],
          "name": "string",
          "popularity": 0,
          "type": "artist",
          "uri": "string"
        }
      ],
      "available_markets": [
        "string"
      ],
      "disc_number": 0,
      "duration_ms": 0,
      "explicit": true,
      "external_ids": {
        "ean": "string",
        "isrc": "string",
        "upc": "string"
      },
      "external_urls": {
        "spotify": "string"
      },
      "href": "string",
      "id": "string",
      "is_local": true,
      "is_playable": true,
      "linked_from": {
        "external_urls": {
          "spotify": "string"
        },
        "href": "string",
        "id": "string",
        "type": "string",
        "uri": "string"
      },
      "name": "string",
      "popularity": 0,
      "preview_url": "string",
      "restrictions": {
        "reason": "string"
      },
      "track_number": 0,
      "type": "track",
      "uri": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|href|string|true|none|A link to the Web API endpoint returning the full result of the request<br>|
|limit|integer|true|none|The maximum number of items in the response (as set in the query or by default).<br>|
|next|string \| null|true|none|URL to the next page of items. ( `null` if none)<br>|
|offset|integer|true|none|The offset of the items returned (as set in the query or by default)<br>|
|previous|string \| null|true|none|URL to the previous page of items. ( `null` if none)<br>|
|total|integer|true|none|The total number of items available to return.<br>|
|items|[[TrackObject](#schematrackobject)]|true|none|none|

<h2 id="tocS_PlayHistoryObject">PlayHistoryObject</h2>
<!-- backwards compatibility -->
<a id="schemaplayhistoryobject"></a>
<a id="schema_PlayHistoryObject"></a>
<a id="tocSplayhistoryobject"></a>
<a id="tocsplayhistoryobject"></a>

```json
{
  "context": {
    "external_urls": {
      "spotify": "string"
    },
    "href": "string",
    "type": "string",
    "uri": "string"
  },
  "played_at": "1970-01-01T00:00:00Z",
  "track": {
    "album": {
      "album_type": "compilation",
      "available_markets": [
        "CA",
        "BR",
        "IT"
      ],
      "external_urls": {
        "spotify": "string"
      },
      "href": "string",
      "id": "2up3OPMp9Tb4dAKM2erWXQ",
      "images": [
        {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
          "width": 300
        }
      ],
      "name": "string",
      "release_date": "1981-12",
      "release_date_precision": "year",
      "restrictions": {
        "reason": "market"
      },
      "total_tracks": 9,
      "type": "album",
      "uri": "spotify:album:2up3OPMp9Tb4dAKM2erWXQ",
      "album_group": "compilation",
      "artists": [
        {
          "external_urls": {
            "spotify": "string"
          },
          "href": "string",
          "id": "string",
          "name": "string",
          "type": "artist",
          "uri": "string"
        }
      ]
    },
    "artists": [
      {
        "external_urls": {
          "spotify": "string"
        },
        "followers": {
          "href": "string",
          "total": 0
        },
        "genres": [
          "Prog rock",
          "Grunge"
        ],
        "href": "string",
        "id": "string",
        "images": [
          {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
            "width": 300
          }
        ],
        "name": "string",
        "popularity": 0,
        "type": "artist",
        "uri": "string"
      }
    ],
    "available_markets": [
      "string"
    ],
    "disc_number": 0,
    "duration_ms": 0,
    "explicit": true,
    "external_ids": {
      "ean": "string",
      "isrc": "string",
      "upc": "string"
    },
    "external_urls": {
      "spotify": "string"
    },
    "href": "string",
    "id": "string",
    "is_local": true,
    "is_playable": true,
    "linked_from": {
      "external_urls": {
        "spotify": "string"
      },
      "href": "string",
      "id": "string",
      "type": "string",
      "uri": "string"
    },
    "name": "string",
    "popularity": 0,
    "preview_url": "string",
    "restrictions": {
      "reason": "string"
    },
    "track_number": 0,
    "type": "track",
    "uri": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|context|object|false|none|The context the track was played from.|
|played_at|string(date-time)|false|none|The date and time the track was played.|
|track|object|false|none|The track the user listened to.|

<h2 id="tocS_PlayerErrorObject">PlayerErrorObject</h2>
<!-- backwards compatibility -->
<a id="schemaplayererrorobject"></a>
<a id="schema_PlayerErrorObject"></a>
<a id="tocSplayererrorobject"></a>
<a id="tocsplayererrorobject"></a>

```json
{
  "message": "string",
  "reason": {},
  "status": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|A short description of the cause of the error.<br>|
|reason|object|false|none|none|
|status|integer|false|none|The HTTP status code. Either `404 NOT FOUND` or `403 FORBIDDEN`.  Also returned in the response header.<br>|

<h2 id="tocS_PlayerErrorReasons">PlayerErrorReasons</h2>
<!-- backwards compatibility -->
<a id="schemaplayererrorreasons"></a>
<a id="schema_PlayerErrorReasons"></a>
<a id="tocSplayererrorreasons"></a>
<a id="tocsplayererrorreasons"></a>

```json
"NO_PREV_TRACK"
```

* `NO_PREV_TRACK` - The command requires a previous track, but there is none in the context.
* `NO_NEXT_TRACK` - The command requires a next track, but there is none in the context.
* `NO_SPECIFIC_TRACK` - The requested track does not exist.
* `ALREADY_PAUSED` - The command requires playback to not be paused.
* `NOT_PAUSED` - The command requires playback to be paused.
* `NOT_PLAYING_LOCALLY` - The command requires playback on the local device.
* `NOT_PLAYING_TRACK` - The command requires that a track is currently playing.
* `NOT_PLAYING_CONTEXT` - The command requires that a context is currently playing.
* `ENDLESS_CONTEXT` - The shuffle command cannot be applied on an endless context.
* `CONTEXT_DISALLOW` - The command could not be performed on the context.
* `ALREADY_PLAYING` - The track should not be restarted if the same track and context is already playing, and there is a resume point.
* `RATE_LIMITED` - The user is rate limited due to too frequent track play, also known as cat-on-the-keyboard spamming.
* `REMOTE_CONTROL_DISALLOW` - The context cannot be remote-controlled.
* `DEVICE_NOT_CONTROLLABLE` - Not possible to remote control the device.
* `VOLUME_CONTROL_DISALLOW` - Not possible to remote control the device's volume.
* `NO_ACTIVE_DEVICE` - Requires an active device and the user has none.
* `PREMIUM_REQUIRED` - The request is prohibited for non-premium users.
* `UNKNOWN` - Certain actions are restricted because of unknown reasons.

<h2 id="tocS_PlaylistObject">PlaylistObject</h2>
<!-- backwards compatibility -->
<a id="schemaplaylistobject"></a>
<a id="schema_PlaylistObject"></a>
<a id="tocSplaylistobject"></a>
<a id="tocsplaylistobject"></a>

```json
{
  "collaborative": true,
  "description": "string",
  "external_urls": {
    "spotify": "string"
  },
  "followers": {
    "href": "string",
    "total": 0
  },
  "href": "string",
  "id": "string",
  "images": [
    {
      "height": 300,
      "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
      "width": 300
    }
  ],
  "name": "string",
  "owner": {
    "external_urls": {
      "spotify": "string"
    },
    "followers": {
      "href": "string",
      "total": 0
    },
    "href": "string",
    "id": "string",
    "type": "user",
    "uri": "string",
    "display_name": "string"
  },
  "public": true,
  "snapshot_id": "string",
  "tracks": {
    "href": "https://api.spotify.com/v1/me/shows?offset=0&limit=20\n",
    "limit": 20,
    "next": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
    "offset": 0,
    "previous": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
    "total": 4,
    "items": [
      {
        "added_at": "1970-01-01T00:00:00Z",
        "added_by": {
          "external_urls": {
            "spotify": "string"
          },
          "followers": {
            "href": "string",
            "total": 0
          },
          "href": "string",
          "id": "string",
          "type": "user",
          "uri": "string"
        },
        "is_local": true,
        "track": {
          "album": {
            "album_type": "compilation",
            "available_markets": [
              "CA",
              "BR",
              "IT"
            ],
            "external_urls": {
              "spotify": "string"
            },
            "href": "string",
            "id": "2up3OPMp9Tb4dAKM2erWXQ",
            "images": [
              {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
                "width": 300
              }
            ],
            "name": "string",
            "release_date": "1981-12",
            "release_date_precision": "year",
            "restrictions": {
              "reason": "market"
            },
            "total_tracks": 9,
            "type": "album",
            "uri": "spotify:album:2up3OPMp9Tb4dAKM2erWXQ",
            "album_group": "compilation",
            "artists": [
              {
                "external_urls": {
                  "spotify": "string"
                },
                "href": "string",
                "id": "string",
                "name": "string",
                "type": "artist",
                "uri": "string"
              }
            ]
          },
          "artists": [
            {
              "external_urls": {
                "spotify": "string"
              },
              "followers": {
                "href": "string",
                "total": 0
              },
              "genres": [
                "Prog rock",
                "Grunge"
              ],
              "href": "string",
              "id": "string",
              "images": [
                {
                  "height": 300,
                  "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
                  "width": 300
                }
              ],
              "name": "string",
              "popularity": 0,
              "type": "artist",
              "uri": "string"
            }
          ],
          "available_markets": [
            "string"
          ],
          "disc_number": 0,
          "duration_ms": 0,
          "explicit": true,
          "external_ids": {
            "ean": "string",
            "isrc": "string",
            "upc": "string"
          },
          "external_urls": {
            "spotify": "string"
          },
          "href": "string",
          "id": "string",
          "is_local": true,
          "is_playable": true,
          "linked_from": {
            "external_urls": {
              "spotify": "string"
            },
            "href": "string",
            "id": "string",
            "type": "string",
            "uri": "string"
          },
          "name": "string",
          "popularity": 0,
          "preview_url": "string",
          "restrictions": {
            "reason": "string"
          },
          "track_number": 0,
          "type": "track",
          "uri": "string"
        }
      }
    ]
  },
  "type": "string",
  "uri": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|collaborative|boolean|false|none|`true` if the owner allows other users to modify the playlist.<br>|
|description|string \| null|false|none|The playlist description. _Only returned for modified, verified playlists, otherwise_ `null`.<br>|
|external_urls|object|false|none|Known external URLs for this playlist.<br>|
|followers|object|false|none|Information about the followers of the playlist.|
|href|string|false|none|A link to the Web API endpoint providing full details of the playlist.<br>|
|id|string|false|none|The [Spotify ID](/documentation/web-api/#spotify-uris-and-ids) for the playlist.<br>|
|images|[[ImageObject](#schemaimageobject)]|false|none|Images for the playlist. The array may be empty or contain up to three images. The images are returned by size in descending order. See [Working with Playlists](/documentation/general/guides/working-with-playlists/). _**Note**: If returned, the source URL for the image (`url`) is temporary and will expire in less than a day._<br>|
|name|string|false|none|The name of the playlist.<br>|
|owner|object|false|none|The user who owns the playlist<br>|
|public|boolean|false|none|The playlist's public/private status: `true` the playlist is public, `false` the playlist is private, `null` the playlist status is not relevant. For more about public/private status, see [Working with Playlists](/documentation/general/guides/working-with-playlists/)<br>|
|snapshot_id|string|false|none|The version identifier for the current playlist. Can be supplied in other requests to target a specific playlist version<br>|
|tracks|object|false|none|The tracks of the playlist.<br>|
|type|string|false|none|The object type: "playlist"<br>|
|uri|string|false|none|The [Spotify URI](/documentation/web-api/#spotify-uris-and-ids) for the playlist.<br>|

<h2 id="tocS_PlaylistOwnerObject">PlaylistOwnerObject</h2>
<!-- backwards compatibility -->
<a id="schemaplaylistownerobject"></a>
<a id="schema_PlaylistOwnerObject"></a>
<a id="tocSplaylistownerobject"></a>
<a id="tocsplaylistownerobject"></a>

```json
{
  "external_urls": {
    "spotify": "string"
  },
  "followers": {
    "href": "string",
    "total": 0
  },
  "href": "string",
  "id": "string",
  "type": "user",
  "uri": "string",
  "display_name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|external_urls|object|false|none|Known public external URLs for this user.<br>|
|followers|object|false|none|Information about the followers of this user.<br>|
|href|string|false|none|A link to the Web API endpoint for this user.<br>|
|id|string|false|none|The [Spotify user ID](/documentation/web-api/#spotify-uris-and-ids) for this user.<br>|
|type|string|false|none|The object type.<br>|
|uri|string|false|none|The [Spotify URI](/documentation/web-api/#spotify-uris-and-ids) for this user.<br>|
|display_name|string \| null|false|none|The name displayed on the user's profile. `null` if not available.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|type|user|

<h2 id="tocS_PlaylistTrackObject">PlaylistTrackObject</h2>
<!-- backwards compatibility -->
<a id="schemaplaylisttrackobject"></a>
<a id="schema_PlaylistTrackObject"></a>
<a id="tocSplaylisttrackobject"></a>
<a id="tocsplaylisttrackobject"></a>

```json
{
  "added_at": "1970-01-01T00:00:00Z",
  "added_by": {
    "external_urls": {
      "spotify": "string"
    },
    "followers": {
      "href": "string",
      "total": 0
    },
    "href": "string",
    "id": "string",
    "type": "user",
    "uri": "string"
  },
  "is_local": true,
  "track": {
    "album": {
      "album_type": "compilation",
      "available_markets": [
        "CA",
        "BR",
        "IT"
      ],
      "external_urls": {
        "spotify": "string"
      },
      "href": "string",
      "id": "2up3OPMp9Tb4dAKM2erWXQ",
      "images": [
        {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
          "width": 300
        }
      ],
      "name": "string",
      "release_date": "1981-12",
      "release_date_precision": "year",
      "restrictions": {
        "reason": "market"
      },
      "total_tracks": 9,
      "type": "album",
      "uri": "spotify:album:2up3OPMp9Tb4dAKM2erWXQ",
      "album_group": "compilation",
      "artists": [
        {
          "external_urls": {
            "spotify": "string"
          },
          "href": "string",
          "id": "string",
          "name": "string",
          "type": "artist",
          "uri": "string"
        }
      ]
    },
    "artists": [
      {
        "external_urls": {
          "spotify": "string"
        },
        "followers": {
          "href": "string",
          "total": 0
        },
        "genres": [
          "Prog rock",
          "Grunge"
        ],
        "href": "string",
        "id": "string",
        "images": [
          {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
            "width": 300
          }
        ],
        "name": "string",
        "popularity": 0,
        "type": "artist",
        "uri": "string"
      }
    ],
    "available_markets": [
      "string"
    ],
    "disc_number": 0,
    "duration_ms": 0,
    "explicit": true,
    "external_ids": {
      "ean": "string",
      "isrc": "string",
      "upc": "string"
    },
    "external_urls": {
      "spotify": "string"
    },
    "href": "string",
    "id": "string",
    "is_local": true,
    "is_playable": true,
    "linked_from": {
      "external_urls": {
        "spotify": "string"
      },
      "href": "string",
      "id": "string",
      "type": "string",
      "uri": "string"
    },
    "name": "string",
    "popularity": 0,
    "preview_url": "string",
    "restrictions": {
      "reason": "string"
    },
    "track_number": 0,
    "type": "track",
    "uri": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|added_at|string(date-time)|false|none|The date and time the track or episode was added. _**Note**: some very old playlists may return `null` in this field._<br>|
|added_by|object|false|none|The Spotify user who added the track or episode. _**Note**: some very old playlists may return `null` in this field._<br>|
|is_local|boolean|false|none|Whether this track or episode is a [local file](https://developer.spotify.com/web-api/local-files-spotify-playlists/) or not.<br>|
|track|[TrackObject](#schematrackobject) \| [EpisodeObject](#schemaepisodeobject)|false|none|Information about the track or episode.|

<h2 id="tocS_PlaylistTracksRefObject">PlaylistTracksRefObject</h2>
<!-- backwards compatibility -->
<a id="schemaplaylisttracksrefobject"></a>
<a id="schema_PlaylistTracksRefObject"></a>
<a id="tocSplaylisttracksrefobject"></a>
<a id="tocsplaylisttracksrefobject"></a>

```json
{
  "href": "string",
  "total": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|href|string|false|none|A link to the Web API endpoint where full details of the playlist's tracks can be retrieved.<br>|
|total|integer|false|none|Number of tracks in the playlist.<br>|

<h2 id="tocS_PlaylistUserObject">PlaylistUserObject</h2>
<!-- backwards compatibility -->
<a id="schemaplaylistuserobject"></a>
<a id="schema_PlaylistUserObject"></a>
<a id="tocSplaylistuserobject"></a>
<a id="tocsplaylistuserobject"></a>

```json
{
  "external_urls": {
    "spotify": "string"
  },
  "followers": {
    "href": "string",
    "total": 0
  },
  "href": "string",
  "id": "string",
  "type": "user",
  "uri": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|external_urls|object|false|none|Known public external URLs for this user.<br>|
|followers|object|false|none|Information about the followers of this user.<br>|
|href|string|false|none|A link to the Web API endpoint for this user.<br>|
|id|string|false|none|The [Spotify user ID](/documentation/web-api/#spotify-uris-and-ids) for this user.<br>|
|type|string|false|none|The object type.<br>|
|uri|string|false|none|The [Spotify URI](/documentation/web-api/#spotify-uris-and-ids) for this user.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|type|user|

<h2 id="tocS_PrivateUserObject">PrivateUserObject</h2>
<!-- backwards compatibility -->
<a id="schemaprivateuserobject"></a>
<a id="schema_PrivateUserObject"></a>
<a id="tocSprivateuserobject"></a>
<a id="tocsprivateuserobject"></a>

```json
{
  "country": "string",
  "display_name": "string",
  "email": "string",
  "explicit_content": {
    "filter_enabled": true,
    "filter_locked": true
  },
  "external_urls": {
    "spotify": "string"
  },
  "followers": {
    "href": "string",
    "total": 0
  },
  "href": "string",
  "id": "string",
  "images": [
    {
      "height": 300,
      "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
      "width": 300
    }
  ],
  "product": "string",
  "type": "string",
  "uri": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|country|string|false|none|The country of the user, as set in the user's account profile. An [ISO 3166-1 alpha-2 country code](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). _This field is only available when the current user has granted access to the [user-read-private](/documentation/general/guides/authorization-guide/#list-of-scopes) scope._<br>|
|display_name|string|false|none|The name displayed on the user's profile. `null` if not available.<br>|
|email|string|false|none|The user's email address, as entered by the user when creating their account. _**Important!** This email address is unverified; there is no proof that it actually belongs to the user._ _This field is only available when the current user has granted access to the [user-read-email](/documentation/general/guides/authorization-guide/#list-of-scopes) scope._<br>|
|explicit_content|object|false|none|The user's explicit content settings. _This field is only available when the current user has granted access to the [user-read-private](/documentation/general/guides/authorization-guide/#list-of-scopes) scope._<br>|
|external_urls|object|false|none|Known external URLs for this user.|
|followers|object|false|none|Information about the followers of the user.|
|href|string|false|none|A link to the Web API endpoint for this user.<br>|
|id|string|false|none|The [Spotify user ID](/documentation/web-api/#spotify-uris-and-ids) for the user.<br>|
|images|[[ImageObject](#schemaimageobject)]|false|none|The user's profile image.|
|product|string|false|none|The user's Spotify subscription level: "premium", "free", etc. (The subscription level "open" can be considered the same as "free".) _This field is only available when the current user has granted access to the [user-read-private](/documentation/general/guides/authorization-guide/#list-of-scopes) scope._<br>|
|type|string|false|none|The object type: "user"<br>|
|uri|string|false|none|The [Spotify URI](/documentation/web-api/#spotify-uris-and-ids) for the user.<br>|

<h2 id="tocS_PublicUserObject">PublicUserObject</h2>
<!-- backwards compatibility -->
<a id="schemapublicuserobject"></a>
<a id="schema_PublicUserObject"></a>
<a id="tocSpublicuserobject"></a>
<a id="tocspublicuserobject"></a>

```json
{
  "display_name": "string",
  "external_urls": {
    "spotify": "string"
  },
  "followers": {
    "href": "string",
    "total": 0
  },
  "href": "string",
  "id": "string",
  "images": [
    {
      "height": 300,
      "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
      "width": 300
    }
  ],
  "type": "user",
  "uri": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|display_name|string \| null|false|none|The name displayed on the user's profile. `null` if not available.<br>|
|external_urls|object|false|none|Known public external URLs for this user.<br>|
|followers|object|false|none|Information about the followers of this user.<br>|
|href|string|false|none|A link to the Web API endpoint for this user.<br>|
|id|string|false|none|The [Spotify user ID](/documentation/web-api/#spotify-uris-and-ids) for this user.<br>|
|images|[[ImageObject](#schemaimageobject)]|false|none|The user's profile image.<br>|
|type|string|false|none|The object type.<br>|
|uri|string|false|none|The [Spotify URI](/documentation/web-api/#spotify-uris-and-ids) for this user.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|type|user|

<h2 id="tocS_QueueObject">QueueObject</h2>
<!-- backwards compatibility -->
<a id="schemaqueueobject"></a>
<a id="schema_QueueObject"></a>
<a id="tocSqueueobject"></a>
<a id="tocsqueueobject"></a>

```json
{
  "currently_playing": {
    "album": {
      "album_type": "compilation",
      "available_markets": [
        "CA",
        "BR",
        "IT"
      ],
      "external_urls": {
        "spotify": "string"
      },
      "href": "string",
      "id": "2up3OPMp9Tb4dAKM2erWXQ",
      "images": [
        {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
          "width": 300
        }
      ],
      "name": "string",
      "release_date": "1981-12",
      "release_date_precision": "year",
      "restrictions": {
        "reason": "market"
      },
      "total_tracks": 9,
      "type": "album",
      "uri": "spotify:album:2up3OPMp9Tb4dAKM2erWXQ",
      "album_group": "compilation",
      "artists": [
        {
          "external_urls": {
            "spotify": "string"
          },
          "href": "string",
          "id": "string",
          "name": "string",
          "type": "artist",
          "uri": "string"
        }
      ]
    },
    "artists": [
      {
        "external_urls": {
          "spotify": "string"
        },
        "followers": {
          "href": "string",
          "total": 0
        },
        "genres": [
          "Prog rock",
          "Grunge"
        ],
        "href": "string",
        "id": "string",
        "images": [
          {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
            "width": 300
          }
        ],
        "name": "string",
        "popularity": 0,
        "type": "artist",
        "uri": "string"
      }
    ],
    "available_markets": [
      "string"
    ],
    "disc_number": 0,
    "duration_ms": 0,
    "explicit": true,
    "external_ids": {
      "ean": "string",
      "isrc": "string",
      "upc": "string"
    },
    "external_urls": {
      "spotify": "string"
    },
    "href": "string",
    "id": "string",
    "is_local": true,
    "is_playable": true,
    "linked_from": {
      "external_urls": {
        "spotify": "string"
      },
      "href": "string",
      "id": "string",
      "type": "string",
      "uri": "string"
    },
    "name": "string",
    "popularity": 0,
    "preview_url": "string",
    "restrictions": {
      "reason": "string"
    },
    "track_number": 0,
    "type": "track",
    "uri": "string"
  },
  "queue": [
    {
      "album": {
        "album_type": "compilation",
        "available_markets": [
          "CA",
          "BR",
          "IT"
        ],
        "external_urls": {
          "spotify": "string"
        },
        "href": "string",
        "id": "2up3OPMp9Tb4dAKM2erWXQ",
        "images": [
          {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
            "width": 300
          }
        ],
        "name": "string",
        "release_date": "1981-12",
        "release_date_precision": "year",
        "restrictions": {
          "reason": "market"
        },
        "total_tracks": 9,
        "type": "album",
        "uri": "spotify:album:2up3OPMp9Tb4dAKM2erWXQ",
        "album_group": "compilation",
        "artists": [
          {
            "external_urls": {
              "spotify": "string"
            },
            "href": "string",
            "id": "string",
            "name": "string",
            "type": "artist",
            "uri": "string"
          }
        ]
      },
      "artists": [
        {
          "external_urls": {
            "spotify": "string"
          },
          "followers": {
            "href": "string",
            "total": 0
          },
          "genres": [
            "Prog rock",
            "Grunge"
          ],
          "href": "string",
          "id": "string",
          "images": [
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
              "width": 300
            }
          ],
          "name": "string",
          "popularity": 0,
          "type": "artist",
          "uri": "string"
        }
      ],
      "available_markets": [
        "string"
      ],
      "disc_number": 0,
      "duration_ms": 0,
      "explicit": true,
      "external_ids": {
        "ean": "string",
        "isrc": "string",
        "upc": "string"
      },
      "external_urls": {
        "spotify": "string"
      },
      "href": "string",
      "id": "string",
      "is_local": true,
      "is_playable": true,
      "linked_from": {
        "external_urls": {
          "spotify": "string"
        },
        "href": "string",
        "id": "string",
        "type": "string",
        "uri": "string"
      },
      "name": "string",
      "popularity": 0,
      "preview_url": "string",
      "restrictions": {
        "reason": "string"
      },
      "track_number": 0,
      "type": "track",
      "uri": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currently_playing|[TrackObject](#schematrackobject) \| [EpisodeObject](#schemaepisodeobject)|false|none|The currently playing track or episode. Can be `null`.|
|queue|[[TrackObject](#schematrackobject) \| [EpisodeObject](#schemaepisodeobject)]|false|none|The tracks or episodes in the queue. Can be empty.|

<h2 id="tocS_RecommendationSeedObject">RecommendationSeedObject</h2>
<!-- backwards compatibility -->
<a id="schemarecommendationseedobject"></a>
<a id="schema_RecommendationSeedObject"></a>
<a id="tocSrecommendationseedobject"></a>
<a id="tocsrecommendationseedobject"></a>

```json
{
  "afterFilteringSize": 0,
  "afterRelinkingSize": 0,
  "href": "string",
  "id": "string",
  "initialPoolSize": 0,
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|afterFilteringSize|integer|false|none|The number of tracks available after min\_\* and max\_\* filters have been applied.<br>|
|afterRelinkingSize|integer|false|none|The number of tracks available after relinking for regional availability.<br>|
|href|string|false|none|A link to the full track or artist data for this seed. For tracks this will be a link to a Track Object. For artists a link to an Artist Object. For genre seeds, this value will be `null`.<br>|
|id|string|false|none|The id used to select this seed. This will be the same as the string used in the `seed_artists`, `seed_tracks` or `seed_genres` parameter.<br>|
|initialPoolSize|integer|false|none|The number of recommended tracks available for this seed.<br>|
|type|string|false|none|The entity type of this seed. One of `artist`, `track` or `genre`.<br>|

<h2 id="tocS_RecommendationsObject">RecommendationsObject</h2>
<!-- backwards compatibility -->
<a id="schemarecommendationsobject"></a>
<a id="schema_RecommendationsObject"></a>
<a id="tocSrecommendationsobject"></a>
<a id="tocsrecommendationsobject"></a>

```json
{
  "seeds": [
    {
      "afterFilteringSize": 0,
      "afterRelinkingSize": 0,
      "href": "string",
      "id": "string",
      "initialPoolSize": 0,
      "type": "string"
    }
  ],
  "tracks": [
    {
      "album": {
        "album_type": "compilation",
        "available_markets": [
          "CA",
          "BR",
          "IT"
        ],
        "external_urls": {
          "spotify": "string"
        },
        "href": "string",
        "id": "2up3OPMp9Tb4dAKM2erWXQ",
        "images": [
          {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
            "width": 300
          }
        ],
        "name": "string",
        "release_date": "1981-12",
        "release_date_precision": "year",
        "restrictions": {
          "reason": "market"
        },
        "total_tracks": 9,
        "type": "album",
        "uri": "spotify:album:2up3OPMp9Tb4dAKM2erWXQ",
        "album_group": "compilation",
        "artists": [
          {
            "external_urls": {
              "spotify": "string"
            },
            "href": "string",
            "id": "string",
            "name": "string",
            "type": "artist",
            "uri": "string"
          }
        ]
      },
      "artists": [
        {
          "external_urls": {
            "spotify": "string"
          },
          "followers": {
            "href": "string",
            "total": 0
          },
          "genres": [
            "Prog rock",
            "Grunge"
          ],
          "href": "string",
          "id": "string",
          "images": [
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
              "width": 300
            }
          ],
          "name": "string",
          "popularity": 0,
          "type": "artist",
          "uri": "string"
        }
      ],
      "available_markets": [
        "string"
      ],
      "disc_number": 0,
      "duration_ms": 0,
      "explicit": true,
      "external_ids": {
        "ean": "string",
        "isrc": "string",
        "upc": "string"
      },
      "external_urls": {
        "spotify": "string"
      },
      "href": "string",
      "id": "string",
      "is_local": true,
      "is_playable": true,
      "linked_from": {
        "external_urls": {
          "spotify": "string"
        },
        "href": "string",
        "id": "string",
        "type": "string",
        "uri": "string"
      },
      "name": "string",
      "popularity": 0,
      "preview_url": "string",
      "restrictions": {
        "reason": "string"
      },
      "track_number": 0,
      "type": "track",
      "uri": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|seeds|[[RecommendationSeedObject](#schemarecommendationseedobject)]|true|none|An array of recommendation seed objects.<br>|
|tracks|[[TrackObject](#schematrackobject)]|true|none|An array of track objects ordered according to the parameters supplied.<br>|

<h2 id="tocS_ResumePointObject">ResumePointObject</h2>
<!-- backwards compatibility -->
<a id="schemaresumepointobject"></a>
<a id="schema_ResumePointObject"></a>
<a id="tocSresumepointobject"></a>
<a id="tocsresumepointobject"></a>

```json
{
  "fully_played": true,
  "resume_position_ms": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fully_played|boolean|false|none|Whether or not the episode has been fully played by the user.<br>|
|resume_position_ms|integer|false|none|The user's most recent position in the episode in milliseconds.<br>|

<h2 id="tocS_SavedAlbumObject">SavedAlbumObject</h2>
<!-- backwards compatibility -->
<a id="schemasavedalbumobject"></a>
<a id="schema_SavedAlbumObject"></a>
<a id="tocSsavedalbumobject"></a>
<a id="tocssavedalbumobject"></a>

```json
{
  "added_at": "1970-01-01T00:00:00Z",
  "album": {
    "album_type": "compilation",
    "available_markets": [
      "CA",
      "BR",
      "IT"
    ],
    "external_urls": {
      "spotify": "string"
    },
    "href": "string",
    "id": "2up3OPMp9Tb4dAKM2erWXQ",
    "images": [
      {
        "height": 300,
        "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
        "width": 300
      }
    ],
    "name": "string",
    "release_date": "1981-12",
    "release_date_precision": "year",
    "restrictions": {
      "reason": "market"
    },
    "total_tracks": 9,
    "type": "album",
    "uri": "spotify:album:2up3OPMp9Tb4dAKM2erWXQ",
    "artists": [
      {
        "external_urls": {
          "spotify": "string"
        },
        "href": "string",
        "id": "string",
        "name": "string",
        "type": "artist",
        "uri": "string"
      }
    ],
    "copyrights": [
      {
        "text": "string",
        "type": "string"
      }
    ],
    "external_ids": {
      "ean": "string",
      "isrc": "string",
      "upc": "string"
    },
    "genres": [
      "string"
    ],
    "label": "string",
    "popularity": 0,
    "tracks": {
      "href": "https://api.spotify.com/v1/me/shows?offset=0&limit=20\n",
      "limit": 20,
      "next": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
      "offset": 0,
      "previous": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
      "total": 4,
      "items": [
        {
          "artists": [
            {
              "external_urls": {
                "spotify": "string"
              },
              "href": "string",
              "id": "string",
              "name": "string",
              "type": "artist",
              "uri": "string"
            }
          ],
          "available_markets": [
            "string"
          ],
          "disc_number": 0,
          "duration_ms": 0,
          "explicit": true,
          "external_urls": {
            "spotify": "string"
          },
          "href": "string",
          "id": "string",
          "is_local": true,
          "is_playable": true,
          "linked_from": {
            "external_urls": {
              "spotify": "string"
            },
            "href": "string",
            "id": "string",
            "type": "string",
            "uri": "string"
          },
          "name": "string",
          "preview_url": "string",
          "restrictions": {
            "reason": "string"
          },
          "track_number": 0,
          "type": "string",
          "uri": "string"
        }
      ]
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|added_at|string(date-time)|false|none|The date and time the album was saved<br>Timestamps are returned in ISO 8601 format as Coordinated Universal Time (UTC) with a zero offset: YYYY-MM-DDTHH:MM:SSZ.<br>If the time is imprecise (for example, the date/time of an album release), an additional field indicates the precision; see for example, release_date in an album object.<br>|
|album|object|false|none|Information about the album.|

<h2 id="tocS_SavedAudiobookObject">SavedAudiobookObject</h2>
<!-- backwards compatibility -->
<a id="schemasavedaudiobookobject"></a>
<a id="schema_SavedAudiobookObject"></a>
<a id="tocSsavedaudiobookobject"></a>
<a id="tocssavedaudiobookobject"></a>

```json
{
  "added_at": "1970-01-01T00:00:00Z",
  "audiobook": {
    "authors": [
      {
        "name": "string"
      }
    ],
    "available_markets": [
      "string"
    ],
    "copyrights": [
      {
        "text": "string",
        "type": "string"
      }
    ],
    "description": "string",
    "edition": "Unabridged",
    "explicit": true,
    "external_urls": {
      "spotify": "string"
    },
    "href": "string",
    "html_description": "string",
    "id": "string",
    "images": [
      {
        "height": 300,
        "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
        "width": 300
      }
    ],
    "languages": [
      "string"
    ],
    "media_type": "string",
    "name": "string",
    "narrators": [
      {
        "name": "string"
      }
    ],
    "publisher": "string",
    "total_chapters": 0,
    "type": "audiobook",
    "uri": "string",
    "chapters": {
      "href": "https://api.spotify.com/v1/me/shows?offset=0&limit=20\n",
      "limit": 20,
      "next": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
      "offset": 0,
      "previous": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
      "total": 4,
      "items": [
        {
          "audio_preview_url": "https://p.scdn.co/mp3-preview/2f37da1d4221f40b9d1a98cd191f4d6f1646ad17",
          "available_markets": [
            "string"
          ],
          "chapter_number": 1,
          "description": "A Spotify podcast sharing fresh insights on important topics of the moment—in a way only Spotify can. You’ll hear from experts in the music, podcast and tech industries as we discover and uncover stories about our work and the world around us.\n",
          "duration_ms": 1686230,
          "explicit": true,
          "external_urls": {
            "spotify": "string"
          },
          "href": "https://api.spotify.com/v1/episodes/5Xt5DXGzch68nYYamXrNxZ",
          "html_description": "<p>A Spotify podcast sharing fresh insights on important topics of the moment—in a way only Spotify can. You’ll hear from experts in the music, podcast and tech industries as we discover and uncover stories about our work and the world around us.</p>\n",
          "id": "5Xt5DXGzch68nYYamXrNxZ",
          "images": [
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
              "width": 300
            }
          ],
          "is_playable": true,
          "languages": [
            "fr",
            "en"
          ],
          "name": "Starting Your Own Podcast: Tips, Tricks, and Advice From Anchor Creators\n",
          "release_date": "1981-12-15",
          "release_date_precision": "day",
          "restrictions": {
            "reason": "string"
          },
          "resume_point": {
            "fully_played": true,
            "resume_position_ms": 0
          },
          "type": "episode",
          "uri": "spotify:episode:0zLhl3WsOCQHbe1BPTiHgr"
        }
      ]
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|added_at|string(date-time)|false|none|The date and time the audiobook was saved<br>Timestamps are returned in ISO 8601 format as Coordinated Universal Time (UTC) with a zero offset: YYYY-MM-DDTHH:MM:SSZ.<br>If the time is imprecise (for example, the date/time of an album release), an additional field indicates the precision; see for example, release_date in an album object.<br>|
|audiobook|object|false|none|Information about the audiobook.|

<h2 id="tocS_SavedEpisodeObject">SavedEpisodeObject</h2>
<!-- backwards compatibility -->
<a id="schemasavedepisodeobject"></a>
<a id="schema_SavedEpisodeObject"></a>
<a id="tocSsavedepisodeobject"></a>
<a id="tocssavedepisodeobject"></a>

```json
{
  "added_at": "1970-01-01T00:00:00Z",
  "episode": {
    "audio_preview_url": "https://p.scdn.co/mp3-preview/2f37da1d4221f40b9d1a98cd191f4d6f1646ad17",
    "description": "A Spotify podcast sharing fresh insights on important topics of the moment—in a way only Spotify can. You’ll hear from experts in the music, podcast and tech industries as we discover and uncover stories about our work and the world around us.\n",
    "duration_ms": 1686230,
    "explicit": true,
    "external_urls": {
      "spotify": "string"
    },
    "href": "https://api.spotify.com/v1/episodes/5Xt5DXGzch68nYYamXrNxZ",
    "html_description": "<p>A Spotify podcast sharing fresh insights on important topics of the moment—in a way only Spotify can. You’ll hear from experts in the music, podcast and tech industries as we discover and uncover stories about our work and the world around us.</p>\n",
    "id": "5Xt5DXGzch68nYYamXrNxZ",
    "images": [
      {
        "height": 300,
        "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
        "width": 300
      }
    ],
    "is_externally_hosted": true,
    "is_playable": true,
    "language": "en",
    "languages": [
      "fr",
      "en"
    ],
    "name": "Starting Your Own Podcast: Tips, Tricks, and Advice From Anchor Creators\n",
    "release_date": "1981-12-15",
    "release_date_precision": "day",
    "restrictions": {
      "reason": "string"
    },
    "resume_point": {
      "fully_played": true,
      "resume_position_ms": 0
    },
    "type": "episode",
    "uri": "spotify:episode:0zLhl3WsOCQHbe1BPTiHgr",
    "show": {
      "available_markets": [
        "string"
      ],
      "copyrights": [
        {
          "text": "string",
          "type": "string"
        }
      ],
      "description": "string",
      "explicit": true,
      "external_urls": {
        "spotify": "string"
      },
      "href": "string",
      "html_description": "string",
      "id": "string",
      "images": [
        {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
          "width": 300
        }
      ],
      "is_externally_hosted": true,
      "languages": [
        "string"
      ],
      "media_type": "string",
      "name": "string",
      "publisher": "string",
      "total_episodes": 0,
      "type": "show",
      "uri": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|added_at|string(date-time)|false|none|The date and time the episode was saved.<br>Timestamps are returned in ISO 8601 format as Coordinated Universal Time (UTC) with a zero offset: YYYY-MM-DDTHH:MM:SSZ.<br>|
|episode|object|false|none|Information about the episode.|

<h2 id="tocS_SavedShowObject">SavedShowObject</h2>
<!-- backwards compatibility -->
<a id="schemasavedshowobject"></a>
<a id="schema_SavedShowObject"></a>
<a id="tocSsavedshowobject"></a>
<a id="tocssavedshowobject"></a>

```json
{
  "added_at": "1970-01-01T00:00:00Z",
  "show": {
    "available_markets": [
      "string"
    ],
    "copyrights": [
      {
        "text": "string",
        "type": "string"
      }
    ],
    "description": "string",
    "explicit": true,
    "external_urls": {
      "spotify": "string"
    },
    "href": "string",
    "html_description": "string",
    "id": "string",
    "images": [
      {
        "height": 300,
        "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
        "width": 300
      }
    ],
    "is_externally_hosted": true,
    "languages": [
      "string"
    ],
    "media_type": "string",
    "name": "string",
    "publisher": "string",
    "total_episodes": 0,
    "type": "show",
    "uri": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|added_at|string(date-time)|false|none|The date and time the show was saved.<br>Timestamps are returned in ISO 8601 format as Coordinated Universal Time (UTC) with a zero offset: YYYY-MM-DDTHH:MM:SSZ.<br>If the time is imprecise (for example, the date/time of an album release), an additional field indicates the precision; see for example, release_date in an album object.<br>|
|show|object|false|none|Information about the show.|

<h2 id="tocS_SavedTrackObject">SavedTrackObject</h2>
<!-- backwards compatibility -->
<a id="schemasavedtrackobject"></a>
<a id="schema_SavedTrackObject"></a>
<a id="tocSsavedtrackobject"></a>
<a id="tocssavedtrackobject"></a>

```json
{
  "added_at": "1970-01-01T00:00:00Z",
  "track": {
    "album": {
      "album_type": "compilation",
      "available_markets": [
        "CA",
        "BR",
        "IT"
      ],
      "external_urls": {
        "spotify": "string"
      },
      "href": "string",
      "id": "2up3OPMp9Tb4dAKM2erWXQ",
      "images": [
        {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
          "width": 300
        }
      ],
      "name": "string",
      "release_date": "1981-12",
      "release_date_precision": "year",
      "restrictions": {
        "reason": "market"
      },
      "total_tracks": 9,
      "type": "album",
      "uri": "spotify:album:2up3OPMp9Tb4dAKM2erWXQ",
      "album_group": "compilation",
      "artists": [
        {
          "external_urls": {
            "spotify": "string"
          },
          "href": "string",
          "id": "string",
          "name": "string",
          "type": "artist",
          "uri": "string"
        }
      ]
    },
    "artists": [
      {
        "external_urls": {
          "spotify": "string"
        },
        "followers": {
          "href": "string",
          "total": 0
        },
        "genres": [
          "Prog rock",
          "Grunge"
        ],
        "href": "string",
        "id": "string",
        "images": [
          {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
            "width": 300
          }
        ],
        "name": "string",
        "popularity": 0,
        "type": "artist",
        "uri": "string"
      }
    ],
    "available_markets": [
      "string"
    ],
    "disc_number": 0,
    "duration_ms": 0,
    "explicit": true,
    "external_ids": {
      "ean": "string",
      "isrc": "string",
      "upc": "string"
    },
    "external_urls": {
      "spotify": "string"
    },
    "href": "string",
    "id": "string",
    "is_local": true,
    "is_playable": true,
    "linked_from": {
      "external_urls": {
        "spotify": "string"
      },
      "href": "string",
      "id": "string",
      "type": "string",
      "uri": "string"
    },
    "name": "string",
    "popularity": 0,
    "preview_url": "string",
    "restrictions": {
      "reason": "string"
    },
    "track_number": 0,
    "type": "track",
    "uri": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|added_at|string(date-time)|false|none|The date and time the track was saved.<br>Timestamps are returned in ISO 8601 format as Coordinated Universal Time (UTC) with a zero offset: YYYY-MM-DDTHH:MM:SSZ.<br>If the time is imprecise (for example, the date/time of an album release), an additional field indicates the precision; see for example, release_date in an album object.<br>|
|track|object|false|none|Information about the track.|

<h2 id="tocS_SectionObject">SectionObject</h2>
<!-- backwards compatibility -->
<a id="schemasectionobject"></a>
<a id="schema_SectionObject"></a>
<a id="tocSsectionobject"></a>
<a id="tocssectionobject"></a>

```json
{
  "confidence": 1,
  "duration": 6.97092,
  "key": 9,
  "key_confidence": 0.297,
  "loudness": -14.938,
  "mode": -1,
  "mode_confidence": 0.471,
  "start": 0,
  "tempo": 113.178,
  "tempo_confidence": 0.647,
  "time_signature": 4,
  "time_signature_confidence": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|confidence|number|false|none|The confidence, from 0.0 to 1.0, of the reliability of the section's "designation".|
|duration|number|false|none|The duration (in seconds) of the section.|
|key|integer|false|none|The estimated overall key of the section. The values in this field ranging from 0 to 11 mapping to pitches using standard Pitch Class notation (E.g. 0 = C, 1 = C♯/D♭, 2 = D, and so on). If no key was detected, the value is -1.|
|key_confidence|number|false|none|The confidence, from 0.0 to 1.0, of the reliability of the key. Songs with many key changes may correspond to low values in this field.|
|loudness|number|false|none|The overall loudness of the section in decibels (dB). Loudness values are useful for comparing relative loudness of sections within tracks.|
|mode|number|false|none|Indicates the modality (major or minor) of a section, the type of scale from which its melodic content is derived. This field will contain a 0 for "minor", a 1 for "major", or a -1 for no result. Note that the major key (e.g. C major) could more likely be confused with the minor key at 3 semitones lower (e.g. A minor) as both keys carry the same pitches.|
|mode_confidence|number|false|none|The confidence, from 0.0 to 1.0, of the reliability of the `mode`.|
|start|number|false|none|The starting point (in seconds) of the section.|
|tempo|number|false|none|The overall estimated tempo of the section in beats per minute (BPM). In musical terminology, tempo is the speed or pace of a given piece and derives directly from the average beat duration.|
|tempo_confidence|number|false|none|The confidence, from 0.0 to 1.0, of the reliability of the tempo. Some tracks contain tempo changes or sounds which don't contain tempo (like pure speech) which would correspond to a low value in this field.|
|time_signature|[TimeSignature](#schematimesignature)|false|none|An estimated time signature. The time signature (meter) is a notational convention to specify how many beats are in each bar (or measure). The time signature ranges from 3 to 7 indicating time signatures of "3/4", to "7/4".|
|time_signature_confidence|number|false|none|The confidence, from 0.0 to 1.0, of the reliability of the `time_signature`. Sections with time signature changes may correspond to low values in this field.|

#### Enumerated Values

|Property|Value|
|---|---|
|mode|-1|
|mode|0|
|mode|1|

<h2 id="tocS_SegmentObject">SegmentObject</h2>
<!-- backwards compatibility -->
<a id="schemasegmentobject"></a>
<a id="schema_SegmentObject"></a>
<a id="tocSsegmentobject"></a>
<a id="tocssegmentobject"></a>

```json
{
  "confidence": 0.435,
  "duration": 0.19891,
  "loudness_end": 0,
  "loudness_max": -14.25,
  "loudness_max_time": 0.07305,
  "loudness_start": -23.053,
  "pitches": [
    0.212,
    0.141,
    0.294
  ],
  "start": 0.70154,
  "timbre": [
    42.115,
    64.373,
    -0.233
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|confidence|number|false|none|The confidence, from 0.0 to 1.0, of the reliability of the segmentation. Segments of the song which are difficult to logically segment (e.g: noise) may correspond to low values in this field.<br>|
|duration|number|false|none|The duration (in seconds) of the segment.|
|loudness_end|number|false|none|The offset loudness of the segment in decibels (dB). This value should be equivalent to the loudness_start of the following segment.|
|loudness_max|number|false|none|The peak loudness of the segment in decibels (dB). Combined with `loudness_start` and `loudness_max_time`, these components can be used to describe the "attack" of the segment.|
|loudness_max_time|number|false|none|The segment-relative offset of the segment peak loudness in seconds. Combined with `loudness_start` and `loudness_max`, these components can be used to desctibe the "attack" of the segment.|
|loudness_start|number|false|none|The onset loudness of the segment in decibels (dB). Combined with `loudness_max` and `loudness_max_time`, these components can be used to describe the "attack" of the segment.|
|pitches|[number]|false|none|Pitch content is given by a “chroma” vector, corresponding to the 12 pitch classes C, C#, D to B, with values ranging from 0 to 1 that describe the relative dominance of every pitch in the chromatic scale. For example a C Major chord would likely be represented by large values of C, E and G (i.e. classes 0, 4, and 7).<br><br>Vectors are normalized to 1 by their strongest dimension, therefore noisy sounds are likely represented by values that are all close to 1, while pure tones are described by one value at 1 (the pitch) and others near 0.<br>As can be seen below, the 12 vector indices are a combination of low-power spectrum values at their respective pitch frequencies.<br>![pitch vector](https://developer.spotify.com/assets/audio/Pitch_vector.png)<br>|
|start|number|false|none|The starting point (in seconds) of the segment.|
|timbre|[number]|false|none|Timbre is the quality of a musical note or sound that distinguishes different types of musical instruments, or voices. It is a complex notion also referred to as sound color, texture, or tone quality, and is derived from the shape of a segment’s spectro-temporal surface, independently of pitch and loudness. The timbre feature is a vector that includes 12 unbounded values roughly centered around 0. Those values are high level abstractions of the spectral surface, ordered by degree of importance.<br><br>For completeness however, the first dimension represents the average loudness of the segment; second emphasizes brightness; third is more closely correlated to the flatness of a sound; fourth to sounds with a stronger attack; etc. See an image below representing the 12 basis functions (i.e. template segments).<br>![timbre basis functions](https://developer.spotify.com/assets/audio/Timbre_basis_functions.png)<br><br>The actual timbre of the segment is best described as a linear combination of these 12 basis functions weighted by the coefficient values: timbre = c1 x b1 + c2 x b2 + ... + c12 x b12, where c1 to c12 represent the 12 coefficients and b1 to b12 the 12 basis functions as displayed below. Timbre vectors are best used in comparison with each other.<br>|

<h2 id="tocS_ShowBase">ShowBase</h2>
<!-- backwards compatibility -->
<a id="schemashowbase"></a>
<a id="schema_ShowBase"></a>
<a id="tocSshowbase"></a>
<a id="tocsshowbase"></a>

```json
{
  "available_markets": [
    "string"
  ],
  "copyrights": [
    {
      "text": "string",
      "type": "string"
    }
  ],
  "description": "string",
  "explicit": true,
  "external_urls": {
    "spotify": "string"
  },
  "href": "string",
  "html_description": "string",
  "id": "string",
  "images": [
    {
      "height": 300,
      "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
      "width": 300
    }
  ],
  "is_externally_hosted": true,
  "languages": [
    "string"
  ],
  "media_type": "string",
  "name": "string",
  "publisher": "string",
  "total_episodes": 0,
  "type": "show",
  "uri": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|available_markets|[string]|true|none|A list of the countries in which the show can be played, identified by their [ISO 3166-1 alpha-2](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code.<br>|
|copyrights|[[CopyrightObject](#schemacopyrightobject)]|true|none|The copyright statements of the show.<br>|
|description|string|true|none|A description of the show. HTML tags are stripped away from this field, use `html_description` field in case HTML tags are needed.<br>|
|explicit|boolean|true|none|Whether or not the show has explicit content (true = yes it does; false = no it does not OR unknown).<br>|
|external_urls|object|true|none|External URLs for this show.<br>|
|href|string|true|none|A link to the Web API endpoint providing full details of the show.<br>|
|html_description|string|true|none|A description of the show. This field may contain HTML tags.<br>|
|id|string|true|none|The [Spotify ID](/documentation/web-api/#spotify-uris-and-ids) for the show.<br>|
|images|[[ImageObject](#schemaimageobject)]|true|none|The cover art for the show in various sizes, widest first.<br>|
|is_externally_hosted|boolean|true|none|True if all of the shows episodes are hosted outside of Spotify's CDN. This field might be `null` in some cases.<br>|
|languages|[string]|true|none|A list of the languages used in the show, identified by their [ISO 639](https://en.wikipedia.org/wiki/ISO_639) code.<br>|
|media_type|string|true|none|The media type of the show.<br>|
|name|string|true|none|The name of the episode.<br>|
|publisher|string|true|none|The publisher of the show.<br>|
|total_episodes|integer|true|none|The total number of episodes in the show.<br>|
|type|string|true|none|The object type.<br>|
|uri|string|true|none|The [Spotify URI](/documentation/web-api/#spotify-uris-and-ids) for the show.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|type|show|

<h2 id="tocS_ShowObject">ShowObject</h2>
<!-- backwards compatibility -->
<a id="schemashowobject"></a>
<a id="schema_ShowObject"></a>
<a id="tocSshowobject"></a>
<a id="tocsshowobject"></a>

```json
{
  "available_markets": [
    "string"
  ],
  "copyrights": [
    {
      "text": "string",
      "type": "string"
    }
  ],
  "description": "string",
  "explicit": true,
  "external_urls": {
    "spotify": "string"
  },
  "href": "string",
  "html_description": "string",
  "id": "string",
  "images": [
    {
      "height": 300,
      "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
      "width": 300
    }
  ],
  "is_externally_hosted": true,
  "languages": [
    "string"
  ],
  "media_type": "string",
  "name": "string",
  "publisher": "string",
  "total_episodes": 0,
  "type": "show",
  "uri": "string",
  "episodes": {
    "href": "https://api.spotify.com/v1/me/shows?offset=0&limit=20\n",
    "limit": 20,
    "next": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
    "offset": 0,
    "previous": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
    "total": 4,
    "items": [
      {
        "audio_preview_url": "https://p.scdn.co/mp3-preview/2f37da1d4221f40b9d1a98cd191f4d6f1646ad17",
        "description": "A Spotify podcast sharing fresh insights on important topics of the moment—in a way only Spotify can. You’ll hear from experts in the music, podcast and tech industries as we discover and uncover stories about our work and the world around us.\n",
        "duration_ms": 1686230,
        "explicit": true,
        "external_urls": {
          "spotify": "string"
        },
        "href": "https://api.spotify.com/v1/episodes/5Xt5DXGzch68nYYamXrNxZ",
        "html_description": "<p>A Spotify podcast sharing fresh insights on important topics of the moment—in a way only Spotify can. You’ll hear from experts in the music, podcast and tech industries as we discover and uncover stories about our work and the world around us.</p>\n",
        "id": "5Xt5DXGzch68nYYamXrNxZ",
        "images": [
          {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
            "width": 300
          }
        ],
        "is_externally_hosted": true,
        "is_playable": true,
        "language": "en",
        "languages": [
          "fr",
          "en"
        ],
        "name": "Starting Your Own Podcast: Tips, Tricks, and Advice From Anchor Creators\n",
        "release_date": "1981-12-15",
        "release_date_precision": "day",
        "restrictions": {
          "reason": "string"
        },
        "resume_point": {
          "fully_played": true,
          "resume_position_ms": 0
        },
        "type": "episode",
        "uri": "spotify:episode:0zLhl3WsOCQHbe1BPTiHgr"
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|available_markets|[string]|true|none|A list of the countries in which the show can be played, identified by their [ISO 3166-1 alpha-2](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code.<br>|
|copyrights|[[CopyrightObject](#schemacopyrightobject)]|true|none|The copyright statements of the show.<br>|
|description|string|true|none|A description of the show. HTML tags are stripped away from this field, use `html_description` field in case HTML tags are needed.<br>|
|explicit|boolean|true|none|Whether or not the show has explicit content (true = yes it does; false = no it does not OR unknown).<br>|
|external_urls|object|true|none|External URLs for this show.<br>|
|href|string|true|none|A link to the Web API endpoint providing full details of the show.<br>|
|html_description|string|true|none|A description of the show. This field may contain HTML tags.<br>|
|id|string|true|none|The [Spotify ID](/documentation/web-api/#spotify-uris-and-ids) for the show.<br>|
|images|[[ImageObject](#schemaimageobject)]|true|none|The cover art for the show in various sizes, widest first.<br>|
|is_externally_hosted|boolean|true|none|True if all of the shows episodes are hosted outside of Spotify's CDN. This field might be `null` in some cases.<br>|
|languages|[string]|true|none|A list of the languages used in the show, identified by their [ISO 639](https://en.wikipedia.org/wiki/ISO_639) code.<br>|
|media_type|string|true|none|The media type of the show.<br>|
|name|string|true|none|The name of the episode.<br>|
|publisher|string|true|none|The publisher of the show.<br>|
|total_episodes|integer|true|none|The total number of episodes in the show.<br>|
|type|string|true|none|The object type.<br>|
|uri|string|true|none|The [Spotify URI](/documentation/web-api/#spotify-uris-and-ids) for the show.<br>|
|episodes|object|true|none|The episodes of the show.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|type|show|

<h2 id="tocS_SimplifiedAlbumObject">SimplifiedAlbumObject</h2>
<!-- backwards compatibility -->
<a id="schemasimplifiedalbumobject"></a>
<a id="schema_SimplifiedAlbumObject"></a>
<a id="tocSsimplifiedalbumobject"></a>
<a id="tocssimplifiedalbumobject"></a>

```json
{
  "album_type": "compilation",
  "available_markets": [
    "CA",
    "BR",
    "IT"
  ],
  "external_urls": {
    "spotify": "string"
  },
  "href": "string",
  "id": "2up3OPMp9Tb4dAKM2erWXQ",
  "images": [
    {
      "height": 300,
      "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
      "width": 300
    }
  ],
  "name": "string",
  "release_date": "1981-12",
  "release_date_precision": "year",
  "restrictions": {
    "reason": "market"
  },
  "total_tracks": 9,
  "type": "album",
  "uri": "spotify:album:2up3OPMp9Tb4dAKM2erWXQ",
  "album_group": "compilation",
  "artists": [
    {
      "external_urls": {
        "spotify": "string"
      },
      "href": "string",
      "id": "string",
      "name": "string",
      "type": "artist",
      "uri": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|album_type|string|true|none|The type of the album.<br>|
|available_markets|[string]|true|none|The markets in which the album is available: [ISO 3166-1 alpha-2 country codes](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). _**NOTE**: an album is considered available in a market when at least 1 of its tracks is available in that market._<br>|
|external_urls|object|true|none|Known external URLs for this album.<br>|
|href|string|true|none|A link to the Web API endpoint providing full details of the album.<br>|
|id|string|true|none|The [Spotify ID](/documentation/web-api/#spotify-uris-and-ids) for the album.<br>|
|images|[[ImageObject](#schemaimageobject)]|true|none|The cover art for the album in various sizes, widest first.<br>|
|name|string|true|none|The name of the album. In case of an album takedown, the value may be an empty string.<br>|
|release_date|string|true|none|The date the album was first released.<br>|
|release_date_precision|string|true|none|The precision with which `release_date` value is known.<br>|
|restrictions|object|false|none|Included in the response when a content restriction is applied.<br>|
|total_tracks|integer|true|none|The number of tracks in the album.|
|type|string|true|none|The object type.<br>|
|uri|string|true|none|The [Spotify URI](/documentation/web-api/#spotify-uris-and-ids) for the album.<br>|
|album_group|string|false|none|The field is present when getting an artist's albums. Compare to album_type this field represents relationship between the artist and the album.<br>|
|artists|[[SimplifiedArtistObject](#schemasimplifiedartistobject)]|true|none|The artists of the album. Each artist object includes a link in `href` to more detailed information about the artist.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|album_type|album|
|album_type|single|
|album_type|compilation|
|release_date_precision|year|
|release_date_precision|month|
|release_date_precision|day|
|type|album|
|album_group|album|
|album_group|single|
|album_group|compilation|
|album_group|appears_on|

<h2 id="tocS_SimplifiedArtistObject">SimplifiedArtistObject</h2>
<!-- backwards compatibility -->
<a id="schemasimplifiedartistobject"></a>
<a id="schema_SimplifiedArtistObject"></a>
<a id="tocSsimplifiedartistobject"></a>
<a id="tocssimplifiedartistobject"></a>

```json
{
  "external_urls": {
    "spotify": "string"
  },
  "href": "string",
  "id": "string",
  "name": "string",
  "type": "artist",
  "uri": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|external_urls|object|false|none|Known external URLs for this artist.<br>|
|href|string|false|none|A link to the Web API endpoint providing full details of the artist.<br>|
|id|string|false|none|The [Spotify ID](/documentation/web-api/#spotify-uris-and-ids) for the artist.<br>|
|name|string|false|none|The name of the artist.<br>|
|type|string|false|none|The object type.<br>|
|uri|string|false|none|The [Spotify URI](/documentation/web-api/#spotify-uris-and-ids) for the artist.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|type|artist|

<h2 id="tocS_SimplifiedAudiobookObject">SimplifiedAudiobookObject</h2>
<!-- backwards compatibility -->
<a id="schemasimplifiedaudiobookobject"></a>
<a id="schema_SimplifiedAudiobookObject"></a>
<a id="tocSsimplifiedaudiobookobject"></a>
<a id="tocssimplifiedaudiobookobject"></a>

```json
{
  "authors": [
    {
      "name": "string"
    }
  ],
  "available_markets": [
    "string"
  ],
  "copyrights": [
    {
      "text": "string",
      "type": "string"
    }
  ],
  "description": "string",
  "edition": "Unabridged",
  "explicit": true,
  "external_urls": {
    "spotify": "string"
  },
  "href": "string",
  "html_description": "string",
  "id": "string",
  "images": [
    {
      "height": 300,
      "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
      "width": 300
    }
  ],
  "languages": [
    "string"
  ],
  "media_type": "string",
  "name": "string",
  "narrators": [
    {
      "name": "string"
    }
  ],
  "publisher": "string",
  "total_chapters": 0,
  "type": "audiobook",
  "uri": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authors|[[AuthorObject](#schemaauthorobject)]|true|none|The author(s) for the audiobook.<br>|
|available_markets|[string]|true|none|A list of the countries in which the audiobook can be played, identified by their [ISO 3166-1 alpha-2](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code.<br>|
|copyrights|[[CopyrightObject](#schemacopyrightobject)]|true|none|The copyright statements of the audiobook.<br>|
|description|string|true|none|A description of the audiobook. HTML tags are stripped away from this field, use `html_description` field in case HTML tags are needed.<br>|
|edition|string|false|none|The edition of the audiobook.<br>|
|explicit|boolean|true|none|Whether or not the audiobook has explicit content (true = yes it does; false = no it does not OR unknown).<br>|
|external_urls|object|true|none|External URLs for this audiobook.<br>|
|href|string|true|none|A link to the Web API endpoint providing full details of the audiobook.<br>|
|html_description|string|true|none|A description of the audiobook. This field may contain HTML tags.<br>|
|id|string|true|none|The [Spotify ID](/documentation/web-api/#spotify-uris-and-ids) for the audiobook.<br>|
|images|[[ImageObject](#schemaimageobject)]|true|none|The cover art for the audiobook in various sizes, widest first.<br>|
|languages|[string]|true|none|A list of the languages used in the audiobook, identified by their [ISO 639](https://en.wikipedia.org/wiki/ISO_639) code.<br>|
|media_type|string|true|none|The media type of the audiobook.<br>|
|name|string|true|none|The name of the audiobook.<br>|
|narrators|[[NarratorObject](#schemanarratorobject)]|true|none|The narrator(s) for the audiobook.<br>|
|publisher|string|true|none|The publisher of the audiobook.<br>|
|total_chapters|integer|true|none|The number of chapters in this audiobook.<br>|
|type|string|true|none|The object type.<br>|
|uri|string|true|none|The [Spotify URI](/documentation/web-api/#spotify-uris-and-ids) for the audiobook.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|type|audiobook|

<h2 id="tocS_SimplifiedChapterObject">SimplifiedChapterObject</h2>
<!-- backwards compatibility -->
<a id="schemasimplifiedchapterobject"></a>
<a id="schema_SimplifiedChapterObject"></a>
<a id="tocSsimplifiedchapterobject"></a>
<a id="tocssimplifiedchapterobject"></a>

```json
{
  "audio_preview_url": "https://p.scdn.co/mp3-preview/2f37da1d4221f40b9d1a98cd191f4d6f1646ad17",
  "available_markets": [
    "string"
  ],
  "chapter_number": 1,
  "description": "A Spotify podcast sharing fresh insights on important topics of the moment—in a way only Spotify can. You’ll hear from experts in the music, podcast and tech industries as we discover and uncover stories about our work and the world around us.\n",
  "duration_ms": 1686230,
  "explicit": true,
  "external_urls": {
    "spotify": "string"
  },
  "href": "https://api.spotify.com/v1/episodes/5Xt5DXGzch68nYYamXrNxZ",
  "html_description": "<p>A Spotify podcast sharing fresh insights on important topics of the moment—in a way only Spotify can. You’ll hear from experts in the music, podcast and tech industries as we discover and uncover stories about our work and the world around us.</p>\n",
  "id": "5Xt5DXGzch68nYYamXrNxZ",
  "images": [
    {
      "height": 300,
      "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
      "width": 300
    }
  ],
  "is_playable": true,
  "languages": [
    "fr",
    "en"
  ],
  "name": "Starting Your Own Podcast: Tips, Tricks, and Advice From Anchor Creators\n",
  "release_date": "1981-12-15",
  "release_date_precision": "day",
  "restrictions": {
    "reason": "string"
  },
  "resume_point": {
    "fully_played": true,
    "resume_position_ms": 0
  },
  "type": "episode",
  "uri": "spotify:episode:0zLhl3WsOCQHbe1BPTiHgr"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|audio_preview_url|string|true|none|A URL to a 30 second preview (MP3 format) of the episode. `null` if not available.<br>|
|available_markets|[string]|false|none|A list of the countries in which the chapter can be played, identified by their [ISO 3166-1 alpha-2](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code.<br>|
|chapter_number|integer|true|none|The number of the chapter<br>|
|description|string|true|none|A description of the episode. HTML tags are stripped away from this field, use `html_description` field in case HTML tags are needed.<br>|
|duration_ms|integer|true|none|The episode length in milliseconds.<br>|
|explicit|boolean|true|none|Whether or not the episode has explicit content (true = yes it does; false = no it does not OR unknown).<br>|
|external_urls|object|true|none|External URLs for this episode.<br>|
|href|string|true|none|A link to the Web API endpoint providing full details of the episode.<br>|
|html_description|string|true|none|A description of the episode. This field may contain HTML tags.<br>|
|id|string|true|none|The [Spotify ID](/documentation/web-api/#spotify-uris-and-ids) for the episode.<br>|
|images|[[ImageObject](#schemaimageobject)]|true|none|The cover art for the episode in various sizes, widest first.<br>|
|is_playable|boolean|true|none|True if the episode is playable in the given market. Otherwise false.<br>|
|languages|[string]|true|none|A list of the languages used in the episode, identified by their [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639) code.<br>|
|name|string|true|none|The name of the episode.<br>|
|release_date|string|true|none|The date the episode was first released, for example `"1981-12-15"`. Depending on the precision, it might be shown as `"1981"` or `"1981-12"`.<br>|
|release_date_precision|string|true|none|The precision with which `release_date` value is known.<br>|
|restrictions|object|false|none|Included in the response when a content restriction is applied.<br>|
|resume_point|object|true|none|The user's most recent position in the episode. Set if the supplied access token is a user token and has the scope 'user-read-playback-position'.<br>|
|type|string|true|none|The object type.<br>|
|uri|string|true|none|The [Spotify URI](/documentation/web-api/#spotify-uris-and-ids) for the episode.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|release_date_precision|year|
|release_date_precision|month|
|release_date_precision|day|
|type|episode|

<h2 id="tocS_SimplifiedEpisodeObject">SimplifiedEpisodeObject</h2>
<!-- backwards compatibility -->
<a id="schemasimplifiedepisodeobject"></a>
<a id="schema_SimplifiedEpisodeObject"></a>
<a id="tocSsimplifiedepisodeobject"></a>
<a id="tocssimplifiedepisodeobject"></a>

```json
{
  "audio_preview_url": "https://p.scdn.co/mp3-preview/2f37da1d4221f40b9d1a98cd191f4d6f1646ad17",
  "description": "A Spotify podcast sharing fresh insights on important topics of the moment—in a way only Spotify can. You’ll hear from experts in the music, podcast and tech industries as we discover and uncover stories about our work and the world around us.\n",
  "duration_ms": 1686230,
  "explicit": true,
  "external_urls": {
    "spotify": "string"
  },
  "href": "https://api.spotify.com/v1/episodes/5Xt5DXGzch68nYYamXrNxZ",
  "html_description": "<p>A Spotify podcast sharing fresh insights on important topics of the moment—in a way only Spotify can. You’ll hear from experts in the music, podcast and tech industries as we discover and uncover stories about our work and the world around us.</p>\n",
  "id": "5Xt5DXGzch68nYYamXrNxZ",
  "images": [
    {
      "height": 300,
      "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
      "width": 300
    }
  ],
  "is_externally_hosted": true,
  "is_playable": true,
  "language": "en",
  "languages": [
    "fr",
    "en"
  ],
  "name": "Starting Your Own Podcast: Tips, Tricks, and Advice From Anchor Creators\n",
  "release_date": "1981-12-15",
  "release_date_precision": "day",
  "restrictions": {
    "reason": "string"
  },
  "resume_point": {
    "fully_played": true,
    "resume_position_ms": 0
  },
  "type": "episode",
  "uri": "spotify:episode:0zLhl3WsOCQHbe1BPTiHgr"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|audio_preview_url|string|true|none|A URL to a 30 second preview (MP3 format) of the episode. `null` if not available.<br>|
|description|string|true|none|A description of the episode. HTML tags are stripped away from this field, use `html_description` field in case HTML tags are needed.<br>|
|duration_ms|integer|true|none|The episode length in milliseconds.<br>|
|explicit|boolean|true|none|Whether or not the episode has explicit content (true = yes it does; false = no it does not OR unknown).<br>|
|external_urls|object|true|none|External URLs for this episode.<br>|
|href|string|true|none|A link to the Web API endpoint providing full details of the episode.<br>|
|html_description|string|true|none|A description of the episode. This field may contain HTML tags.<br>|
|id|string|true|none|The [Spotify ID](/documentation/web-api/#spotify-uris-and-ids) for the episode.<br>|
|images|[[ImageObject](#schemaimageobject)]|true|none|The cover art for the episode in various sizes, widest first.<br>|
|is_externally_hosted|boolean|true|none|True if the episode is hosted outside of Spotify's CDN.<br>|
|is_playable|boolean|true|none|True if the episode is playable in the given market. Otherwise false.<br>|
|language|string|false|none|**Deprecated.** The language used in the episode, identified by a [ISO 639](https://en.wikipedia.org/wiki/ISO_639) code. This field is deprecated and might be removed in the future. Please use the `languages` field instead.<br>|
|languages|[string]|true|none|A list of the languages used in the episode, identified by their [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639) code.<br>|
|name|string|true|none|The name of the episode.<br>|
|release_date|string|true|none|The date the episode was first released, for example `"1981-12-15"`. Depending on the precision, it might be shown as `"1981"` or `"1981-12"`.<br>|
|release_date_precision|string|true|none|The precision with which `release_date` value is known.<br>|
|restrictions|object|false|none|Included in the response when a content restriction is applied.<br>|
|resume_point|object|true|none|The user's most recent position in the episode. Set if the supplied access token is a user token and has the scope 'user-read-playback-position'.<br>|
|type|string|true|none|The object type.<br>|
|uri|string|true|none|The [Spotify URI](/documentation/web-api/#spotify-uris-and-ids) for the episode.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|release_date_precision|year|
|release_date_precision|month|
|release_date_precision|day|
|type|episode|

<h2 id="tocS_SimplifiedPlaylistObject">SimplifiedPlaylistObject</h2>
<!-- backwards compatibility -->
<a id="schemasimplifiedplaylistobject"></a>
<a id="schema_SimplifiedPlaylistObject"></a>
<a id="tocSsimplifiedplaylistobject"></a>
<a id="tocssimplifiedplaylistobject"></a>

```json
{
  "collaborative": true,
  "description": "string",
  "external_urls": {
    "spotify": "string"
  },
  "href": "string",
  "id": "string",
  "images": [
    {
      "height": 300,
      "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
      "width": 300
    }
  ],
  "name": "string",
  "owner": {
    "external_urls": {
      "spotify": "string"
    },
    "followers": {
      "href": "string",
      "total": 0
    },
    "href": "string",
    "id": "string",
    "type": "user",
    "uri": "string",
    "display_name": "string"
  },
  "public": true,
  "snapshot_id": "string",
  "tracks": {
    "href": "string",
    "total": 0
  },
  "type": "string",
  "uri": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|collaborative|boolean|false|none|`true` if the owner allows other users to modify the playlist.<br>|
|description|string|false|none|The playlist description. _Only returned for modified, verified playlists, otherwise_ `null`.<br>|
|external_urls|object|false|none|Known external URLs for this playlist.<br>|
|href|string|false|none|A link to the Web API endpoint providing full details of the playlist.<br>|
|id|string|false|none|The [Spotify ID](/documentation/web-api/#spotify-uris-and-ids) for the playlist.<br>|
|images|[[ImageObject](#schemaimageobject)]|false|none|Images for the playlist. The array may be empty or contain up to three images. The images are returned by size in descending order. See [Working with Playlists](/documentation/general/guides/working-with-playlists/). _**Note**: If returned, the source URL for the image (`url`) is temporary and will expire in less than a day._<br>|
|name|string|false|none|The name of the playlist.<br>|
|owner|object|false|none|The user who owns the playlist<br>|
|public|boolean|false|none|The playlist's public/private status: `true` the playlist is public, `false` the playlist is private, `null` the playlist status is not relevant. For more about public/private status, see [Working with Playlists](/documentation/general/guides/working-with-playlists/)<br>|
|snapshot_id|string|false|none|The version identifier for the current playlist. Can be supplied in other requests to target a specific playlist version<br>|
|tracks|object|false|none|A collection containing a link ( `href` ) to the Web API endpoint where full details of the playlist's tracks can be retrieved, along with the `total` number of tracks in the playlist. Note, a track object may be `null`. This can happen if a track is no longer available.<br>|
|type|string|false|none|The object type: "playlist"<br>|
|uri|string|false|none|The [Spotify URI](/documentation/web-api/#spotify-uris-and-ids) for the playlist.<br>|

<h2 id="tocS_SimplifiedShowObject">SimplifiedShowObject</h2>
<!-- backwards compatibility -->
<a id="schemasimplifiedshowobject"></a>
<a id="schema_SimplifiedShowObject"></a>
<a id="tocSsimplifiedshowobject"></a>
<a id="tocssimplifiedshowobject"></a>

```json
{
  "available_markets": [
    "string"
  ],
  "copyrights": [
    {
      "text": "string",
      "type": "string"
    }
  ],
  "description": "string",
  "explicit": true,
  "external_urls": {
    "spotify": "string"
  },
  "href": "string",
  "html_description": "string",
  "id": "string",
  "images": [
    {
      "height": 300,
      "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
      "width": 300
    }
  ],
  "is_externally_hosted": true,
  "languages": [
    "string"
  ],
  "media_type": "string",
  "name": "string",
  "publisher": "string",
  "total_episodes": 0,
  "type": "show",
  "uri": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|available_markets|[string]|true|none|A list of the countries in which the show can be played, identified by their [ISO 3166-1 alpha-2](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code.<br>|
|copyrights|[[CopyrightObject](#schemacopyrightobject)]|true|none|The copyright statements of the show.<br>|
|description|string|true|none|A description of the show. HTML tags are stripped away from this field, use `html_description` field in case HTML tags are needed.<br>|
|explicit|boolean|true|none|Whether or not the show has explicit content (true = yes it does; false = no it does not OR unknown).<br>|
|external_urls|object|true|none|External URLs for this show.<br>|
|href|string|true|none|A link to the Web API endpoint providing full details of the show.<br>|
|html_description|string|true|none|A description of the show. This field may contain HTML tags.<br>|
|id|string|true|none|The [Spotify ID](/documentation/web-api/#spotify-uris-and-ids) for the show.<br>|
|images|[[ImageObject](#schemaimageobject)]|true|none|The cover art for the show in various sizes, widest first.<br>|
|is_externally_hosted|boolean|true|none|True if all of the shows episodes are hosted outside of Spotify's CDN. This field might be `null` in some cases.<br>|
|languages|[string]|true|none|A list of the languages used in the show, identified by their [ISO 639](https://en.wikipedia.org/wiki/ISO_639) code.<br>|
|media_type|string|true|none|The media type of the show.<br>|
|name|string|true|none|The name of the episode.<br>|
|publisher|string|true|none|The publisher of the show.<br>|
|total_episodes|integer|true|none|The total number of episodes in the show.<br>|
|type|string|true|none|The object type.<br>|
|uri|string|true|none|The [Spotify URI](/documentation/web-api/#spotify-uris-and-ids) for the show.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|type|show|

<h2 id="tocS_SimplifiedTrackObject">SimplifiedTrackObject</h2>
<!-- backwards compatibility -->
<a id="schemasimplifiedtrackobject"></a>
<a id="schema_SimplifiedTrackObject"></a>
<a id="tocSsimplifiedtrackobject"></a>
<a id="tocssimplifiedtrackobject"></a>

```json
{
  "artists": [
    {
      "external_urls": {
        "spotify": "string"
      },
      "href": "string",
      "id": "string",
      "name": "string",
      "type": "artist",
      "uri": "string"
    }
  ],
  "available_markets": [
    "string"
  ],
  "disc_number": 0,
  "duration_ms": 0,
  "explicit": true,
  "external_urls": {
    "spotify": "string"
  },
  "href": "string",
  "id": "string",
  "is_local": true,
  "is_playable": true,
  "linked_from": {
    "external_urls": {
      "spotify": "string"
    },
    "href": "string",
    "id": "string",
    "type": "string",
    "uri": "string"
  },
  "name": "string",
  "preview_url": "string",
  "restrictions": {
    "reason": "string"
  },
  "track_number": 0,
  "type": "string",
  "uri": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|artists|[[SimplifiedArtistObject](#schemasimplifiedartistobject)]|false|none|The artists who performed the track. Each artist object includes a link in `href` to more detailed information about the artist.|
|available_markets|[string]|false|none|A list of the countries in which the track can be played, identified by their [ISO 3166-1 alpha-2](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code.<br>|
|disc_number|integer|false|none|The disc number (usually `1` unless the album consists of more than one disc).|
|duration_ms|integer|false|none|The track length in milliseconds.|
|explicit|boolean|false|none|Whether or not the track has explicit lyrics ( `true` = yes it does; `false` = no it does not OR unknown).|
|external_urls|object|false|none|External URLs for this track.<br>|
|href|string|false|none|A link to the Web API endpoint providing full details of the track.|
|id|string|false|none|The [Spotify ID](/documentation/web-api/#spotify-uris-and-ids) for the track.<br>|
|is_local|boolean|false|none|Whether or not the track is from a local file.<br>|
|is_playable|boolean|false|none|Part of the response when [Track Relinking](/documentation/general/guides/track-relinking-guide/) is applied. If `true`, the track is playable in the given market. Otherwise `false`.<br>|
|linked_from|object|false|none|Part of the response when [Track Relinking](/documentation/general/guides/track-relinking-guide/) is applied and is only part of the response if the track linking, in fact, exists. The requested track has been replaced with a different track. The track in the `linked_from` object contains information about the originally requested track.|
|name|string|false|none|The name of the track.|
|preview_url|string|false|none|A URL to a 30 second preview (MP3 format) of the track.<br>|
|restrictions|object|false|none|Included in the response when a content restriction is applied.<br>|
|track_number|integer|false|none|The number of the track. If an album has several discs, the track number is the number on the specified disc.<br>|
|type|string|false|none|The object type: "track".<br>|
|uri|string|false|none|The [Spotify URI](/documentation/web-api/#spotify-uris-and-ids) for the track.<br>|

<h2 id="tocS_Tempo">Tempo</h2>
<!-- backwards compatibility -->
<a id="schematempo"></a>
<a id="schema_Tempo"></a>
<a id="tocStempo"></a>
<a id="tocstempo"></a>

```json
118.211
```

The overall estimated tempo of a track in beats per minute (BPM). In musical terminology, tempo is the speed or pace of a given piece and derives directly from the average beat duration.

<h2 id="tocS_TimeIntervalObject">TimeIntervalObject</h2>
<!-- backwards compatibility -->
<a id="schematimeintervalobject"></a>
<a id="schema_TimeIntervalObject"></a>
<a id="tocStimeintervalobject"></a>
<a id="tocstimeintervalobject"></a>

```json
{
  "confidence": 0.925,
  "duration": 2.18749,
  "start": 0.49567
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|confidence|number|false|none|The confidence, from 0.0 to 1.0, of the reliability of the interval.|
|duration|number|false|none|The duration (in seconds) of the time interval.|
|start|number|false|none|The starting point (in seconds) of the time interval.|

<h2 id="tocS_TimeSignature">TimeSignature</h2>
<!-- backwards compatibility -->
<a id="schematimesignature"></a>
<a id="schema_TimeSignature"></a>
<a id="tocStimesignature"></a>
<a id="tocstimesignature"></a>

```json
4
```

An estimated time signature. The time signature (meter) is a notational convention to specify how many beats are in each bar (or measure). The time signature ranges from 3 to 7 indicating time signatures of "3/4", to "7/4".

<h2 id="tocS_TrackObject">TrackObject</h2>
<!-- backwards compatibility -->
<a id="schematrackobject"></a>
<a id="schema_TrackObject"></a>
<a id="tocStrackobject"></a>
<a id="tocstrackobject"></a>

```json
{
  "album": {
    "album_type": "compilation",
    "available_markets": [
      "CA",
      "BR",
      "IT"
    ],
    "external_urls": {
      "spotify": "string"
    },
    "href": "string",
    "id": "2up3OPMp9Tb4dAKM2erWXQ",
    "images": [
      {
        "height": 300,
        "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
        "width": 300
      }
    ],
    "name": "string",
    "release_date": "1981-12",
    "release_date_precision": "year",
    "restrictions": {
      "reason": "market"
    },
    "total_tracks": 9,
    "type": "album",
    "uri": "spotify:album:2up3OPMp9Tb4dAKM2erWXQ",
    "album_group": "compilation",
    "artists": [
      {
        "external_urls": {
          "spotify": "string"
        },
        "href": "string",
        "id": "string",
        "name": "string",
        "type": "artist",
        "uri": "string"
      }
    ]
  },
  "artists": [
    {
      "external_urls": {
        "spotify": "string"
      },
      "followers": {
        "href": "string",
        "total": 0
      },
      "genres": [
        "Prog rock",
        "Grunge"
      ],
      "href": "string",
      "id": "string",
      "images": [
        {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
          "width": 300
        }
      ],
      "name": "string",
      "popularity": 0,
      "type": "artist",
      "uri": "string"
    }
  ],
  "available_markets": [
    "string"
  ],
  "disc_number": 0,
  "duration_ms": 0,
  "explicit": true,
  "external_ids": {
    "ean": "string",
    "isrc": "string",
    "upc": "string"
  },
  "external_urls": {
    "spotify": "string"
  },
  "href": "string",
  "id": "string",
  "is_local": true,
  "is_playable": true,
  "linked_from": {
    "external_urls": {
      "spotify": "string"
    },
    "href": "string",
    "id": "string",
    "type": "string",
    "uri": "string"
  },
  "name": "string",
  "popularity": 0,
  "preview_url": "string",
  "restrictions": {
    "reason": "string"
  },
  "track_number": 0,
  "type": "track",
  "uri": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|album|object|false|none|The album on which the track appears. The album object includes a link in `href` to full information about the album.<br>|
|artists|[[ArtistObject](#schemaartistobject)]|false|none|The artists who performed the track. Each artist object includes a link in `href` to more detailed information about the artist.<br>|
|available_markets|[string]|false|none|A list of the countries in which the track can be played, identified by their [ISO 3166-1 alpha-2](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code.<br>|
|disc_number|integer|false|none|The disc number (usually `1` unless the album consists of more than one disc).<br>|
|duration_ms|integer|false|none|The track length in milliseconds.<br>|
|explicit|boolean|false|none|Whether or not the track has explicit lyrics ( `true` = yes it does; `false` = no it does not OR unknown).<br>|
|external_ids|object|false|none|Known external IDs for the track.<br>|
|external_urls|object|false|none|Known external URLs for this track.<br>|
|href|string|false|none|A link to the Web API endpoint providing full details of the track.<br>|
|id|string|false|none|The [Spotify ID](/documentation/web-api/#spotify-uris-and-ids) for the track.<br>|
|is_local|boolean|false|none|Whether or not the track is from a local file.<br>|
|is_playable|boolean|false|none|Part of the response when [Track Relinking](/documentation/general/guides/track-relinking-guide/) is applied. If `true`, the track is playable in the given market. Otherwise `false`.<br>|
|linked_from|object|false|none|Part of the response when [Track Relinking](/documentation/general/guides/track-relinking-guide/) is applied and is only part of the response if the track linking, in fact, exists. The requested track has been replaced with a different track. The track in the `linked_from` object contains information about the originally requested track.|
|name|string|false|none|The name of the track.<br>|
|popularity|integer|false|none|The popularity of the track. The value will be between 0 and 100, with 100 being the most popular.<br/>The popularity of a track is a value between 0 and 100, with 100 being the most popular. The popularity is calculated by algorithm and is based, in the most part, on the total number of plays the track has had and how recent those plays are.<br/>Generally speaking, songs that are being played a lot now will have a higher popularity than songs that were played a lot in the past. Duplicate tracks (e.g. the same track from a single and an album) are rated independently. Artist and album popularity is derived mathematically from track popularity. _**Note**: the popularity value may lag actual popularity by a few days: the value is not updated in real time._<br>|
|preview_url|string|false|none|A link to a 30 second preview (MP3 format) of the track. Can be `null`<br>|
|restrictions|object|false|none|Included in the response when a content restriction is applied.<br>|
|track_number|integer|false|none|The number of the track. If an album has several discs, the track number is the number on the specified disc.<br>|
|type|string|false|none|The object type: "track".<br>|
|uri|string|false|none|The [Spotify URI](/documentation/web-api/#spotify-uris-and-ids) for the track.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|type|track|

<h2 id="tocS_TrackRestrictionObject">TrackRestrictionObject</h2>
<!-- backwards compatibility -->
<a id="schematrackrestrictionobject"></a>
<a id="schema_TrackRestrictionObject"></a>
<a id="tocStrackrestrictionobject"></a>
<a id="tocstrackrestrictionobject"></a>

```json
{
  "reason": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reason|string|false|none|The reason for the restriction. Supported values:<br>- `market` - The content item is not available in the given market.<br>- `product` - The content item is not available for the user's subscription type.<br>- `explicit` - The content item is explicit and the user's account is set to not play explicit content.<br><br>Additional reasons may be added in the future.<br>**Note**: If you use this field, make sure that your application safely handles unknown values.<br>|

<h2 id="tocS_TuneableTrackObject">TuneableTrackObject</h2>
<!-- backwards compatibility -->
<a id="schematuneabletrackobject"></a>
<a id="schema_TuneableTrackObject"></a>
<a id="tocStuneabletrackobject"></a>
<a id="tocstuneabletrackobject"></a>

```json
{
  "acousticness": 0,
  "danceability": 0,
  "duration_ms": 0,
  "energy": 0,
  "instrumentalness": 0,
  "key": 9,
  "liveness": 0,
  "loudness": -5.883,
  "mode": 0,
  "popularity": 0,
  "speechiness": 0,
  "tempo": 118.211,
  "time_signature": 4,
  "valence": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acousticness|number(float)|false|none|A confidence measure from 0.0 to 1.0 of whether the track is acoustic. 1.0 represents high confidence the track is acoustic.<br>|
|danceability|number(float)|false|none|Danceability describes how suitable a track is for dancing based on a combination of musical elements including tempo, rhythm stability, beat strength, and overall regularity. A value of 0.0 is least danceable and 1.0 is most danceable.<br>|
|duration_ms|integer|false|none|The duration of the track in milliseconds.<br>|
|energy|number(float)|false|none|Energy is a measure from 0.0 to 1.0 and represents a perceptual measure of intensity and activity. Typically, energetic tracks feel fast, loud, and noisy. For example, death metal has high energy, while a Bach prelude scores low on the scale. Perceptual features contributing to this attribute include dynamic range, perceived loudness, timbre, onset rate, and general entropy.<br>|
|instrumentalness|number(float)|false|none|Predicts whether a track contains no vocals. "Ooh" and "aah" sounds are treated as instrumental in this context. Rap or spoken word tracks are clearly "vocal". The closer the instrumentalness value is to 1.0, the greater likelihood the track contains no vocal content. Values above 0.5 are intended to represent instrumental tracks, but confidence is higher as the value approaches 1.0.<br>|
|key|[Key](#schemakey)|false|none|The key the track is in. Integers map to pitches using standard [Pitch Class notation](https://en.wikipedia.org/wiki/Pitch_class). E.g. 0 = C, 1 = C♯/D♭, 2 = D, and so on. If no key was detected, the value is -1.<br>|
|liveness|number(float)|false|none|Detects the presence of an audience in the recording. Higher liveness values represent an increased probability that the track was performed live. A value above 0.8 provides strong likelihood that the track is live.<br>|
|loudness|[Loudness](#schemaloudness)|false|none|The overall loudness of a track in decibels (dB). Loudness values are averaged across the entire track and are useful for comparing relative loudness of tracks. Loudness is the quality of a sound that is the primary psychological correlate of physical strength (amplitude). Values typically range between -60 and 0 db.<br>|
|mode|[Mode](#schemamode)|false|none|Mode indicates the modality (major or minor) of a track, the type of scale from which its melodic content is derived. Major is represented by 1 and minor is 0.<br>|
|popularity|number(float)|false|none|The popularity of the track. The value will be between 0 and 100, with 100 being the most popular. The popularity is calculated by algorithm and is based, in the most part, on the total number of plays the track has had and how recent those plays are. _**Note**: When applying track relinking via the `market` parameter, it is expected to find relinked tracks with popularities that do not match `min_*`, `max_*`and `target_*` popularities. These relinked tracks are accurate replacements for unplayable tracks with the expected popularity scores. Original, non-relinked tracks are available via the `linked_from` attribute of the [relinked track response](/documentation/general/guides/track-relinking-guide)._<br>|
|speechiness|number(float)|false|none|Speechiness detects the presence of spoken words in a track. The more exclusively speech-like the recording (e.g. talk show, audio book, poetry), the closer to 1.0 the attribute value. Values above 0.66 describe tracks that are probably made entirely of spoken words. Values between 0.33 and 0.66 describe tracks that may contain both music and speech, either in sections or layered, including such cases as rap music. Values below 0.33 most likely represent music and other non-speech-like tracks.<br>|
|tempo|[Tempo](#schematempo)|false|none|The overall estimated tempo of a track in beats per minute (BPM). In musical terminology, tempo is the speed or pace of a given piece and derives directly from the average beat duration.<br>|
|time_signature|[TimeSignature](#schematimesignature)|false|none|An estimated time signature. The time signature (meter) is a notational convention to specify how many beats are in each bar (or measure). The time signature ranges from 3 to 7 indicating time signatures of "3/4", to "7/4".|
|valence|number(float)|false|none|A measure from 0.0 to 1.0 describing the musical positiveness conveyed by a track. Tracks with high valence sound more positive (e.g. happy, cheerful, euphoric), while tracks with low valence sound more negative (e.g. sad, depressed, angry).<br>|
