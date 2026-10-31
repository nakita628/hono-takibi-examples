<h1 id="lidarr">Lidarr v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Lidarr API docs

Base URLs:

* <a href="http://localhost:8686">http://localhost:8686</a>

License: <a href="https://github.com/Lidarr/Lidarr/blob/develop/LICENSE.md">GPL-3.0</a>

# Authentication

* API Key (X-Api-Key)
    - Parameter Name: **X-Api-Key**, in: header. Apikey passed as header

* API Key (apikey)
    - Parameter Name: **apikey**, in: query. Apikey passed as query parameter

<h1 id="lidarr-album">Album</h1>

## get/api/v1/album

> Code samples

```bash
curl http://localhost:8686/api/v1/album \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/album`

<h3 id="getapiv1album-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|artistId|query|integer(int32)|false|none|
|albumIds|query|[integer(int32)]|false|none|
|foreignAlbumId|query|string|false|none|
|includeAllArtistAlbums|query|boolean|false|none|

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "title": "string",
    "disambiguation": "string",
    "overview": "string",
    "artistId": 0,
    "foreignAlbumId": "string",
    "monitored": true,
    "anyReleaseOk": true,
    "profileId": 0,
    "duration": 0,
    "albumType": "string",
    "secondaryTypes": [
      "string"
    ],
    "mediumCount": 0,
    "ratings": {
      "votes": 0,
      "value": 0
    },
    "releaseDate": "1970-01-01T00:00:00Z",
    "releases": [
      {
        "id": 0,
        "albumId": 0,
        "foreignReleaseId": "string",
        "title": "string",
        "status": "string",
        "duration": 0,
        "trackCount": 0,
        "media": [
          {
            "mediumNumber": 0,
            "mediumName": "string",
            "mediumFormat": "string"
          }
        ],
        "mediumCount": 0,
        "disambiguation": "string",
        "country": [
          "string"
        ],
        "label": [
          "string"
        ],
        "format": "string",
        "monitored": true
      }
    ],
    "genres": [
      "string"
    ],
    "media": [
      {
        "mediumNumber": 0,
        "mediumName": "string",
        "mediumFormat": "string"
      }
    ],
    "artist": {},
    "images": [
      {
        "url": "string",
        "coverType": "unknown",
        "extension": "string",
        "remoteUrl": "string"
      }
    ],
    "links": [
      {
        "url": "string",
        "name": "string"
      }
    ],
    "lastSearchTime": "1970-01-01T00:00:00Z",
    "statistics": {
      "trackFileCount": 0,
      "trackCount": 0,
      "totalTrackCount": 0,
      "sizeOnDisk": 0,
      "percentOfTracks": 0
    },
    "addOptions": {
      "addType": "automatic",
      "searchForNewAlbum": true
    },
    "remoteCover": "string"
  }
]
```

<h3 id="getapiv1album-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getapiv1album-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[AlbumResource](#schemaalbumresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## post/api/v1/album

> Code samples

```bash
curl http://localhost:8686/api/v1/album \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "id": 0,
    "title": "string",
    "disambiguation": "string",
    "overview": "string",
    "artistId": 0,
    "foreignAlbumId": "string",
    "monitored": true,
    "anyReleaseOk": true,
    "profileId": 0,
    "duration": 0,
    "albumType": "string",
    "secondaryTypes": [
      "string"
    ],
    "ratings": {
      "votes": 0,
      "value": 0
    },
    "releaseDate": "1970-01-01T00:00:00Z",
    "releases": [
      {
        "id": 0,
        "albumId": 0,
        "foreignReleaseId": "string",
        "title": "string",
        "status": "string",
        "duration": 0,
        "trackCount": 0,
        "media": [
          {
            "mediumNumber": 0,
            "mediumName": "string",
            "mediumFormat": "string"
          }
        ],
        "disambiguation": "string",
        "country": [
          "string"
        ],
        "label": [
          "string"
        ],
        "format": "string",
        "monitored": true
      }
    ],
    "genres": [
      "string"
    ],
    "media": [
      {
        "mediumNumber": 0,
        "mediumName": "string",
        "mediumFormat": "string"
      }
    ],
    "artist": {},
    "images": [
      {
        "url": "string",
        "coverType": "unknown",
        "remoteUrl": "string"
      }
    ],
    "links": [
      {
        "url": "string",
        "name": "string"
      }
    ],
    "lastSearchTime": "1970-01-01T00:00:00Z",
    "statistics": {
      "trackFileCount": 0,
      "trackCount": 0,
      "totalTrackCount": 0,
      "sizeOnDisk": 0
    },
    "addOptions": {
      "addType": "automatic",
      "searchForNewAlbum": true
    },
    "remoteCover": "string"
  }'
```

`POST /api/v1/album`

> Body parameter

```json
{
  "id": 0,
  "title": "string",
  "disambiguation": "string",
  "overview": "string",
  "artistId": 0,
  "foreignAlbumId": "string",
  "monitored": true,
  "anyReleaseOk": true,
  "profileId": 0,
  "duration": 0,
  "albumType": "string",
  "secondaryTypes": [
    "string"
  ],
  "ratings": {
    "votes": 0,
    "value": 0
  },
  "releaseDate": "1970-01-01T00:00:00Z",
  "releases": [
    {
      "id": 0,
      "albumId": 0,
      "foreignReleaseId": "string",
      "title": "string",
      "status": "string",
      "duration": 0,
      "trackCount": 0,
      "media": [
        {
          "mediumNumber": 0,
          "mediumName": "string",
          "mediumFormat": "string"
        }
      ],
      "disambiguation": "string",
      "country": [
        "string"
      ],
      "label": [
        "string"
      ],
      "format": "string",
      "monitored": true
    }
  ],
  "genres": [
    "string"
  ],
  "media": [
    {
      "mediumNumber": 0,
      "mediumName": "string",
      "mediumFormat": "string"
    }
  ],
  "artist": {},
  "images": [
    {
      "url": "string",
      "coverType": "unknown",
      "remoteUrl": "string"
    }
  ],
  "links": [
    {
      "url": "string",
      "name": "string"
    }
  ],
  "lastSearchTime": "1970-01-01T00:00:00Z",
  "statistics": {
    "trackFileCount": 0,
    "trackCount": 0,
    "totalTrackCount": 0,
    "sizeOnDisk": 0
  },
  "addOptions": {
    "addType": "automatic",
    "searchForNewAlbum": true
  },
  "remoteCover": "string"
}
```

<h3 id="postapiv1album-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AlbumResource](#schemaalbumresource)|false|none|
|» id|body|integer(int32)|false|none|
|» title|body|string \| null|false|none|
|» disambiguation|body|string \| null|false|none|
|» overview|body|string \| null|false|none|
|» artistId|body|integer(int32)|false|none|
|» foreignAlbumId|body|string \| null|false|none|
|» monitored|body|boolean|false|none|
|» anyReleaseOk|body|boolean|false|none|
|» profileId|body|integer(int32)|false|none|
|» duration|body|integer(int32)|false|none|
|» albumType|body|string \| null|false|none|
|» secondaryTypes|body|[string]|false|none|
|» ratings|body|[Ratings](#schemaratings)|false|none|
|» releaseDate|body|string(date-time) \| null|false|none|
|» releases|body|[[AlbumReleaseResource](#schemaalbumreleaseresource)]|false|none|
|» genres|body|[string]|false|none|
|» media|body|[[MediumResource](#schemamediumresource)]|false|none|
|» artist|body|[ArtistResource](#schemaartistresource)|false|none|
|» images|body|[[MediaCover](#schemamediacover)]|false|none|
|» links|body|[[Links](#schemalinks)]|false|none|
|» lastSearchTime|body|string(date-time) \| null|false|none|
|» statistics|body|[AlbumStatisticsResource](#schemaalbumstatisticsresource)|false|none|
|» addOptions|body|[AddAlbumOptions](#schemaaddalbumoptions)|false|none|
|» remoteCover|body|string \| null|false|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "title": "string",
  "disambiguation": "string",
  "overview": "string",
  "artistId": 0,
  "foreignAlbumId": "string",
  "monitored": true,
  "anyReleaseOk": true,
  "profileId": 0,
  "duration": 0,
  "albumType": "string",
  "secondaryTypes": [
    "string"
  ],
  "mediumCount": 0,
  "ratings": {
    "votes": 0,
    "value": 0
  },
  "releaseDate": "1970-01-01T00:00:00Z",
  "releases": [
    {
      "id": 0,
      "albumId": 0,
      "foreignReleaseId": "string",
      "title": "string",
      "status": "string",
      "duration": 0,
      "trackCount": 0,
      "media": [
        {
          "mediumNumber": 0,
          "mediumName": "string",
          "mediumFormat": "string"
        }
      ],
      "mediumCount": 0,
      "disambiguation": "string",
      "country": [
        "string"
      ],
      "label": [
        "string"
      ],
      "format": "string",
      "monitored": true
    }
  ],
  "genres": [
    "string"
  ],
  "media": [
    {
      "mediumNumber": 0,
      "mediumName": "string",
      "mediumFormat": "string"
    }
  ],
  "artist": {},
  "images": [
    {
      "url": "string",
      "coverType": "unknown",
      "extension": "string",
      "remoteUrl": "string"
    }
  ],
  "links": [
    {
      "url": "string",
      "name": "string"
    }
  ],
  "lastSearchTime": "1970-01-01T00:00:00Z",
  "statistics": {
    "trackFileCount": 0,
    "trackCount": 0,
    "totalTrackCount": 0,
    "sizeOnDisk": 0,
    "percentOfTracks": 0
  },
  "addOptions": {
    "addType": "automatic",
    "searchForNewAlbum": true
  },
  "remoteCover": "string"
}
```

<h3 id="postapiv1album-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[AlbumResource](#schemaalbumresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v1/album/{id}

> Code samples

```bash
curl http://localhost:8686/api/v1/album/0 \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/album/{id}`

<h3 id="getapiv1albumid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "title": "string",
  "disambiguation": "string",
  "overview": "string",
  "artistId": 0,
  "foreignAlbumId": "string",
  "monitored": true,
  "anyReleaseOk": true,
  "profileId": 0,
  "duration": 0,
  "albumType": "string",
  "secondaryTypes": [
    "string"
  ],
  "mediumCount": 0,
  "ratings": {
    "votes": 0,
    "value": 0
  },
  "releaseDate": "1970-01-01T00:00:00Z",
  "releases": [
    {
      "id": 0,
      "albumId": 0,
      "foreignReleaseId": "string",
      "title": "string",
      "status": "string",
      "duration": 0,
      "trackCount": 0,
      "media": [
        {
          "mediumNumber": 0,
          "mediumName": "string",
          "mediumFormat": "string"
        }
      ],
      "mediumCount": 0,
      "disambiguation": "string",
      "country": [
        "string"
      ],
      "label": [
        "string"
      ],
      "format": "string",
      "monitored": true
    }
  ],
  "genres": [
    "string"
  ],
  "media": [
    {
      "mediumNumber": 0,
      "mediumName": "string",
      "mediumFormat": "string"
    }
  ],
  "artist": {},
  "images": [
    {
      "url": "string",
      "coverType": "unknown",
      "extension": "string",
      "remoteUrl": "string"
    }
  ],
  "links": [
    {
      "url": "string",
      "name": "string"
    }
  ],
  "lastSearchTime": "1970-01-01T00:00:00Z",
  "statistics": {
    "trackFileCount": 0,
    "trackCount": 0,
    "totalTrackCount": 0,
    "sizeOnDisk": 0,
    "percentOfTracks": 0
  },
  "addOptions": {
    "addType": "automatic",
    "searchForNewAlbum": true
  },
  "remoteCover": "string"
}
```

<h3 id="getapiv1albumid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[AlbumResource](#schemaalbumresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## put/api/v1/album/{id}

> Code samples

```bash
curl http://localhost:8686/api/v1/album/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "id": 0,
    "title": "string",
    "disambiguation": "string",
    "overview": "string",
    "artistId": 0,
    "foreignAlbumId": "string",
    "monitored": true,
    "anyReleaseOk": true,
    "profileId": 0,
    "duration": 0,
    "albumType": "string",
    "secondaryTypes": [
      "string"
    ],
    "ratings": {
      "votes": 0,
      "value": 0
    },
    "releaseDate": "1970-01-01T00:00:00Z",
    "releases": [
      {
        "id": 0,
        "albumId": 0,
        "foreignReleaseId": "string",
        "title": "string",
        "status": "string",
        "duration": 0,
        "trackCount": 0,
        "media": [
          {
            "mediumNumber": 0,
            "mediumName": "string",
            "mediumFormat": "string"
          }
        ],
        "disambiguation": "string",
        "country": [
          "string"
        ],
        "label": [
          "string"
        ],
        "format": "string",
        "monitored": true
      }
    ],
    "genres": [
      "string"
    ],
    "media": [
      {
        "mediumNumber": 0,
        "mediumName": "string",
        "mediumFormat": "string"
      }
    ],
    "artist": {},
    "images": [
      {
        "url": "string",
        "coverType": "unknown",
        "remoteUrl": "string"
      }
    ],
    "links": [
      {
        "url": "string",
        "name": "string"
      }
    ],
    "lastSearchTime": "1970-01-01T00:00:00Z",
    "statistics": {
      "trackFileCount": 0,
      "trackCount": 0,
      "totalTrackCount": 0,
      "sizeOnDisk": 0
    },
    "addOptions": {
      "addType": "automatic",
      "searchForNewAlbum": true
    },
    "remoteCover": "string"
  }'
```

`PUT /api/v1/album/{id}`

> Body parameter

```json
{
  "id": 0,
  "title": "string",
  "disambiguation": "string",
  "overview": "string",
  "artistId": 0,
  "foreignAlbumId": "string",
  "monitored": true,
  "anyReleaseOk": true,
  "profileId": 0,
  "duration": 0,
  "albumType": "string",
  "secondaryTypes": [
    "string"
  ],
  "ratings": {
    "votes": 0,
    "value": 0
  },
  "releaseDate": "1970-01-01T00:00:00Z",
  "releases": [
    {
      "id": 0,
      "albumId": 0,
      "foreignReleaseId": "string",
      "title": "string",
      "status": "string",
      "duration": 0,
      "trackCount": 0,
      "media": [
        {
          "mediumNumber": 0,
          "mediumName": "string",
          "mediumFormat": "string"
        }
      ],
      "disambiguation": "string",
      "country": [
        "string"
      ],
      "label": [
        "string"
      ],
      "format": "string",
      "monitored": true
    }
  ],
  "genres": [
    "string"
  ],
  "media": [
    {
      "mediumNumber": 0,
      "mediumName": "string",
      "mediumFormat": "string"
    }
  ],
  "artist": {},
  "images": [
    {
      "url": "string",
      "coverType": "unknown",
      "remoteUrl": "string"
    }
  ],
  "links": [
    {
      "url": "string",
      "name": "string"
    }
  ],
  "lastSearchTime": "1970-01-01T00:00:00Z",
  "statistics": {
    "trackFileCount": 0,
    "trackCount": 0,
    "totalTrackCount": 0,
    "sizeOnDisk": 0
  },
  "addOptions": {
    "addType": "automatic",
    "searchForNewAlbum": true
  },
  "remoteCover": "string"
}
```

<h3 id="putapiv1albumid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|[AlbumResource](#schemaalbumresource)|false|none|
|» id|body|integer(int32)|false|none|
|» title|body|string \| null|false|none|
|» disambiguation|body|string \| null|false|none|
|» overview|body|string \| null|false|none|
|» artistId|body|integer(int32)|false|none|
|» foreignAlbumId|body|string \| null|false|none|
|» monitored|body|boolean|false|none|
|» anyReleaseOk|body|boolean|false|none|
|» profileId|body|integer(int32)|false|none|
|» duration|body|integer(int32)|false|none|
|» albumType|body|string \| null|false|none|
|» secondaryTypes|body|[string]|false|none|
|» ratings|body|[Ratings](#schemaratings)|false|none|
|» releaseDate|body|string(date-time) \| null|false|none|
|» releases|body|[[AlbumReleaseResource](#schemaalbumreleaseresource)]|false|none|
|» genres|body|[string]|false|none|
|» media|body|[[MediumResource](#schemamediumresource)]|false|none|
|» artist|body|[ArtistResource](#schemaartistresource)|false|none|
|» images|body|[[MediaCover](#schemamediacover)]|false|none|
|» links|body|[[Links](#schemalinks)]|false|none|
|» lastSearchTime|body|string(date-time) \| null|false|none|
|» statistics|body|[AlbumStatisticsResource](#schemaalbumstatisticsresource)|false|none|
|» addOptions|body|[AddAlbumOptions](#schemaaddalbumoptions)|false|none|
|» remoteCover|body|string \| null|false|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "title": "string",
  "disambiguation": "string",
  "overview": "string",
  "artistId": 0,
  "foreignAlbumId": "string",
  "monitored": true,
  "anyReleaseOk": true,
  "profileId": 0,
  "duration": 0,
  "albumType": "string",
  "secondaryTypes": [
    "string"
  ],
  "mediumCount": 0,
  "ratings": {
    "votes": 0,
    "value": 0
  },
  "releaseDate": "1970-01-01T00:00:00Z",
  "releases": [
    {
      "id": 0,
      "albumId": 0,
      "foreignReleaseId": "string",
      "title": "string",
      "status": "string",
      "duration": 0,
      "trackCount": 0,
      "media": [
        {
          "mediumNumber": 0,
          "mediumName": "string",
          "mediumFormat": "string"
        }
      ],
      "mediumCount": 0,
      "disambiguation": "string",
      "country": [
        "string"
      ],
      "label": [
        "string"
      ],
      "format": "string",
      "monitored": true
    }
  ],
  "genres": [
    "string"
  ],
  "media": [
    {
      "mediumNumber": 0,
      "mediumName": "string",
      "mediumFormat": "string"
    }
  ],
  "artist": {},
  "images": [
    {
      "url": "string",
      "coverType": "unknown",
      "extension": "string",
      "remoteUrl": "string"
    }
  ],
  "links": [
    {
      "url": "string",
      "name": "string"
    }
  ],
  "lastSearchTime": "1970-01-01T00:00:00Z",
  "statistics": {
    "trackFileCount": 0,
    "trackCount": 0,
    "totalTrackCount": 0,
    "sizeOnDisk": 0,
    "percentOfTracks": 0
  },
  "addOptions": {
    "addType": "automatic",
    "searchForNewAlbum": true
  },
  "remoteCover": "string"
}
```

<h3 id="putapiv1albumid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[AlbumResource](#schemaalbumresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## delete/api/v1/album/{id}

> Code samples

```bash
curl http://localhost:8686/api/v1/album/0 \
  -X DELETE \
  -H "X-Api-Key: ${API_KEY}"
```

`DELETE /api/v1/album/{id}`

<h3 id="deleteapiv1albumid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|
|deleteFiles|query|boolean|false|none|
|addImportListExclusion|query|boolean|false|none|

<h3 id="deleteapiv1albumid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## put/api/v1/album/monitor

> Code samples

```bash
curl http://localhost:8686/api/v1/album/monitor \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "albumIds": [
      0
    ],
    "monitored": true
  }'
```

`PUT /api/v1/album/monitor`

> Body parameter

```json
{
  "albumIds": [
    0
  ],
  "monitored": true
}
```

<h3 id="putapiv1albummonitor-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AlbumsMonitoredResource](#schemaalbumsmonitoredresource)|false|none|
|» albumIds|body|[integer(int32)]|false|none|
|» monitored|body|boolean|false|none|

<h3 id="putapiv1albummonitor-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="lidarr-albumlookup">AlbumLookup</h1>

## get/api/v1/album/lookup

> Code samples

```bash
curl http://localhost:8686/api/v1/album/lookup \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/album/lookup`

<h3 id="getapiv1albumlookup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|term|query|string|false|none|

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "title": "string",
    "disambiguation": "string",
    "overview": "string",
    "artistId": 0,
    "foreignAlbumId": "string",
    "monitored": true,
    "anyReleaseOk": true,
    "profileId": 0,
    "duration": 0,
    "albumType": "string",
    "secondaryTypes": [
      "string"
    ],
    "mediumCount": 0,
    "ratings": {
      "votes": 0,
      "value": 0
    },
    "releaseDate": "1970-01-01T00:00:00Z",
    "releases": [
      {
        "id": 0,
        "albumId": 0,
        "foreignReleaseId": "string",
        "title": "string",
        "status": "string",
        "duration": 0,
        "trackCount": 0,
        "media": [
          {
            "mediumNumber": 0,
            "mediumName": "string",
            "mediumFormat": "string"
          }
        ],
        "mediumCount": 0,
        "disambiguation": "string",
        "country": [
          "string"
        ],
        "label": [
          "string"
        ],
        "format": "string",
        "monitored": true
      }
    ],
    "genres": [
      "string"
    ],
    "media": [
      {
        "mediumNumber": 0,
        "mediumName": "string",
        "mediumFormat": "string"
      }
    ],
    "artist": {},
    "images": [
      {
        "url": "string",
        "coverType": "unknown",
        "extension": "string",
        "remoteUrl": "string"
      }
    ],
    "links": [
      {
        "url": "string",
        "name": "string"
      }
    ],
    "lastSearchTime": "1970-01-01T00:00:00Z",
    "statistics": {
      "trackFileCount": 0,
      "trackCount": 0,
      "totalTrackCount": 0,
      "sizeOnDisk": 0,
      "percentOfTracks": 0
    },
    "addOptions": {
      "addType": "automatic",
      "searchForNewAlbum": true
    },
    "remoteCover": "string"
  }
]
```

<h3 id="getapiv1albumlookup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getapiv1albumlookup-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[AlbumResource](#schemaalbumresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="lidarr-albumstudio">AlbumStudio</h1>

## post/api/v1/albumstudio

> Code samples

```bash
curl http://localhost:8686/api/v1/albumstudio \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "artist": [
      {
        "id": 0,
        "monitored": true,
        "albums": [
          {
            "id": 0,
            "title": "string",
            "disambiguation": "string",
            "overview": "string",
            "artistId": 0,
            "foreignAlbumId": "string",
            "monitored": true,
            "anyReleaseOk": true,
            "profileId": 0,
            "duration": 0,
            "albumType": "string",
            "secondaryTypes": [
              "string"
            ],
            "ratings": {
              "votes": 0,
              "value": 0
            },
            "releaseDate": "1970-01-01T00:00:00Z",
            "releases": [
              {
                "id": 0,
                "albumId": 0,
                "foreignReleaseId": "string",
                "title": "string",
                "status": "string",
                "duration": 0,
                "trackCount": 0,
                "media": [
                  {
                    "mediumNumber": 0,
                    "mediumName": "string",
                    "mediumFormat": "string"
                  }
                ],
                "disambiguation": "string",
                "country": [
                  "string"
                ],
                "label": [
                  "string"
                ],
                "format": "string",
                "monitored": true
              }
            ],
            "genres": [
              "string"
            ],
            "media": [
              {
                "mediumNumber": 0,
                "mediumName": "string",
                "mediumFormat": "string"
              }
            ],
            "artist": {},
            "images": [
              {
                "url": "string",
                "coverType": "unknown",
                "remoteUrl": "string"
              }
            ],
            "links": [
              {
                "url": "string",
                "name": "string"
              }
            ],
            "lastSearchTime": "1970-01-01T00:00:00Z",
            "statistics": {
              "trackFileCount": 0,
              "trackCount": 0,
              "totalTrackCount": 0,
              "sizeOnDisk": 0
            },
            "addOptions": {
              "addType": "automatic",
              "searchForNewAlbum": true
            },
            "remoteCover": "string"
          }
        ]
      }
    ],
    "monitoringOptions": {
      "monitor": "all",
      "albumsToMonitor": [
        "string"
      ],
      "monitored": true
    },
    "monitorNewItems": "all"
  }'
```

`POST /api/v1/albumstudio`

> Body parameter

```json
{
  "artist": [
    {
      "id": 0,
      "monitored": true,
      "albums": [
        {
          "id": 0,
          "title": "string",
          "disambiguation": "string",
          "overview": "string",
          "artistId": 0,
          "foreignAlbumId": "string",
          "monitored": true,
          "anyReleaseOk": true,
          "profileId": 0,
          "duration": 0,
          "albumType": "string",
          "secondaryTypes": [
            "string"
          ],
          "ratings": {
            "votes": 0,
            "value": 0
          },
          "releaseDate": "1970-01-01T00:00:00Z",
          "releases": [
            {
              "id": 0,
              "albumId": 0,
              "foreignReleaseId": "string",
              "title": "string",
              "status": "string",
              "duration": 0,
              "trackCount": 0,
              "media": [
                {
                  "mediumNumber": 0,
                  "mediumName": "string",
                  "mediumFormat": "string"
                }
              ],
              "disambiguation": "string",
              "country": [
                "string"
              ],
              "label": [
                "string"
              ],
              "format": "string",
              "monitored": true
            }
          ],
          "genres": [
            "string"
          ],
          "media": [
            {
              "mediumNumber": 0,
              "mediumName": "string",
              "mediumFormat": "string"
            }
          ],
          "artist": {},
          "images": [
            {
              "url": "string",
              "coverType": "unknown",
              "remoteUrl": "string"
            }
          ],
          "links": [
            {
              "url": "string",
              "name": "string"
            }
          ],
          "lastSearchTime": "1970-01-01T00:00:00Z",
          "statistics": {
            "trackFileCount": 0,
            "trackCount": 0,
            "totalTrackCount": 0,
            "sizeOnDisk": 0
          },
          "addOptions": {
            "addType": "automatic",
            "searchForNewAlbum": true
          },
          "remoteCover": "string"
        }
      ]
    }
  ],
  "monitoringOptions": {
    "monitor": "all",
    "albumsToMonitor": [
      "string"
    ],
    "monitored": true
  },
  "monitorNewItems": "all"
}
```

<h3 id="postapiv1albumstudio-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AlbumStudioResource](#schemaalbumstudioresource)|false|none|
|» artist|body|[[AlbumStudioArtistResource](#schemaalbumstudioartistresource)]|false|none|
|» monitoringOptions|body|[MonitoringOptions](#schemamonitoringoptions)|false|none|
|» monitorNewItems|body|[NewItemMonitorTypes](#schemanewitemmonitortypes)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» monitorNewItems|all|
|» monitorNewItems|none|
|» monitorNewItems|new|

<h3 id="postapiv1albumstudio-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="lidarr-apiinfo">ApiInfo</h1>

## get/api

> Code samples

```bash
curl http://localhost:8686/api \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api`

<h3 id="getapi-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="lidarr-artist">Artist</h1>

## get/api/v1/artist/{id}

> Code samples

```bash
curl http://localhost:8686/api/v1/artist/0 \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/artist/{id}`

<h3 id="getapiv1artistid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "status": "continuing",
  "ended": true,
  "artistName": "string",
  "foreignArtistId": "string",
  "mbId": "string",
  "tadbId": 0,
  "discogsId": 0,
  "allMusicId": "string",
  "overview": "string",
  "artistType": "string",
  "disambiguation": "string",
  "links": [
    {
      "url": "string",
      "name": "string"
    }
  ],
  "nextAlbum": {},
  "lastAlbum": {},
  "images": [
    {
      "url": "string",
      "coverType": "unknown",
      "extension": "string",
      "remoteUrl": "string"
    }
  ],
  "members": [
    {
      "name": "string",
      "instrument": "string",
      "images": [
        {
          "url": "string",
          "coverType": "unknown",
          "extension": "string",
          "remoteUrl": "string"
        }
      ]
    }
  ],
  "remotePoster": "string",
  "path": "string",
  "qualityProfileId": 0,
  "metadataProfileId": 0,
  "monitored": true,
  "monitorNewItems": "all",
  "rootFolderPath": "string",
  "folder": "string",
  "genres": [
    "string"
  ],
  "cleanName": "string",
  "sortName": "string",
  "tags": [
    0
  ],
  "added": "1970-01-01T00:00:00Z",
  "addOptions": {
    "monitor": "all",
    "albumsToMonitor": [
      "string"
    ],
    "monitored": true,
    "searchForMissingAlbums": true
  },
  "ratings": {
    "votes": 0,
    "value": 0
  },
  "statistics": {
    "albumCount": 0,
    "trackFileCount": 0,
    "trackCount": 0,
    "totalTrackCount": 0,
    "sizeOnDisk": 0,
    "percentOfTracks": 0
  }
}
```

<h3 id="getapiv1artistid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ArtistResource](#schemaartistresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## put/api/v1/artist/{id}

> Code samples

```bash
curl http://localhost:8686/api/v1/artist/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "id": 0,
    "status": "continuing",
    "artistName": "string",
    "foreignArtistId": "string",
    "mbId": "string",
    "tadbId": 0,
    "discogsId": 0,
    "allMusicId": "string",
    "overview": "string",
    "artistType": "string",
    "disambiguation": "string",
    "links": [
      {
        "url": "string",
        "name": "string"
      }
    ],
    "nextAlbum": {},
    "lastAlbum": {},
    "images": [
      {
        "url": "string",
        "coverType": "unknown",
        "remoteUrl": "string"
      }
    ],
    "members": [
      {
        "name": "string",
        "instrument": "string",
        "images": [
          {
            "url": "string",
            "coverType": "unknown",
            "remoteUrl": "string"
          }
        ]
      }
    ],
    "remotePoster": "string",
    "path": "string",
    "qualityProfileId": 0,
    "metadataProfileId": 0,
    "monitored": true,
    "monitorNewItems": "all",
    "rootFolderPath": "string",
    "folder": "string",
    "genres": [
      "string"
    ],
    "cleanName": "string",
    "sortName": "string",
    "tags": [
      0
    ],
    "added": "1970-01-01T00:00:00Z",
    "addOptions": {
      "monitor": "all",
      "albumsToMonitor": [
        "string"
      ],
      "monitored": true,
      "searchForMissingAlbums": true
    },
    "ratings": {
      "votes": 0,
      "value": 0
    },
    "statistics": {
      "albumCount": 0,
      "trackFileCount": 0,
      "trackCount": 0,
      "totalTrackCount": 0,
      "sizeOnDisk": 0
    }
  }'
```

`PUT /api/v1/artist/{id}`

> Body parameter

```json
{
  "id": 0,
  "status": "continuing",
  "artistName": "string",
  "foreignArtistId": "string",
  "mbId": "string",
  "tadbId": 0,
  "discogsId": 0,
  "allMusicId": "string",
  "overview": "string",
  "artistType": "string",
  "disambiguation": "string",
  "links": [
    {
      "url": "string",
      "name": "string"
    }
  ],
  "nextAlbum": {},
  "lastAlbum": {},
  "images": [
    {
      "url": "string",
      "coverType": "unknown",
      "remoteUrl": "string"
    }
  ],
  "members": [
    {
      "name": "string",
      "instrument": "string",
      "images": [
        {
          "url": "string",
          "coverType": "unknown",
          "remoteUrl": "string"
        }
      ]
    }
  ],
  "remotePoster": "string",
  "path": "string",
  "qualityProfileId": 0,
  "metadataProfileId": 0,
  "monitored": true,
  "monitorNewItems": "all",
  "rootFolderPath": "string",
  "folder": "string",
  "genres": [
    "string"
  ],
  "cleanName": "string",
  "sortName": "string",
  "tags": [
    0
  ],
  "added": "1970-01-01T00:00:00Z",
  "addOptions": {
    "monitor": "all",
    "albumsToMonitor": [
      "string"
    ],
    "monitored": true,
    "searchForMissingAlbums": true
  },
  "ratings": {
    "votes": 0,
    "value": 0
  },
  "statistics": {
    "albumCount": 0,
    "trackFileCount": 0,
    "trackCount": 0,
    "totalTrackCount": 0,
    "sizeOnDisk": 0
  }
}
```

<h3 id="putapiv1artistid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|moveFiles|query|boolean|false|none|
|id|path|string|true|none|
|body|body|[ArtistResource](#schemaartistresource)|false|none|
|» id|body|integer(int32)|false|none|
|» status|body|[ArtistStatusType](#schemaartiststatustype)|false|none|
|» artistName|body|string \| null|false|none|
|» foreignArtistId|body|string \| null|false|none|
|» mbId|body|string \| null|false|none|
|» tadbId|body|integer(int32)|false|none|
|» discogsId|body|integer(int32)|false|none|
|» allMusicId|body|string \| null|false|none|
|» overview|body|string \| null|false|none|
|» artistType|body|string \| null|false|none|
|» disambiguation|body|string \| null|false|none|
|» links|body|[[Links](#schemalinks)]|false|none|
|» nextAlbum|body|[AlbumResource](#schemaalbumresource)|false|none|
|» lastAlbum|body|[AlbumResource](#schemaalbumresource)|false|none|
|» images|body|[[MediaCover](#schemamediacover)]|false|none|
|» members|body|[[Member](#schemamember)]|false|none|
|» remotePoster|body|string \| null|false|none|
|» path|body|string \| null|false|none|
|» qualityProfileId|body|integer(int32)|false|none|
|» metadataProfileId|body|integer(int32)|false|none|
|» monitored|body|boolean|false|none|
|» monitorNewItems|body|[NewItemMonitorTypes](#schemanewitemmonitortypes)|false|none|
|» rootFolderPath|body|string \| null|false|none|
|» folder|body|string \| null|false|none|
|» genres|body|[string]|false|none|
|» cleanName|body|string \| null|false|none|
|» sortName|body|string \| null|false|none|
|» tags|body|[integer(int32)]|false|none|
|» added|body|string(date-time)|false|none|
|» addOptions|body|[AddArtistOptions](#schemaaddartistoptions)|false|none|
|» ratings|body|[Ratings](#schemaratings)|false|none|
|» statistics|body|[ArtistStatisticsResource](#schemaartiststatisticsresource)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» status|continuing|
|» status|ended|
|» status|deleted|
|» monitorNewItems|all|
|» monitorNewItems|none|
|» monitorNewItems|new|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "status": "continuing",
  "ended": true,
  "artistName": "string",
  "foreignArtistId": "string",
  "mbId": "string",
  "tadbId": 0,
  "discogsId": 0,
  "allMusicId": "string",
  "overview": "string",
  "artistType": "string",
  "disambiguation": "string",
  "links": [
    {
      "url": "string",
      "name": "string"
    }
  ],
  "nextAlbum": {},
  "lastAlbum": {},
  "images": [
    {
      "url": "string",
      "coverType": "unknown",
      "extension": "string",
      "remoteUrl": "string"
    }
  ],
  "members": [
    {
      "name": "string",
      "instrument": "string",
      "images": [
        {
          "url": "string",
          "coverType": "unknown",
          "extension": "string",
          "remoteUrl": "string"
        }
      ]
    }
  ],
  "remotePoster": "string",
  "path": "string",
  "qualityProfileId": 0,
  "metadataProfileId": 0,
  "monitored": true,
  "monitorNewItems": "all",
  "rootFolderPath": "string",
  "folder": "string",
  "genres": [
    "string"
  ],
  "cleanName": "string",
  "sortName": "string",
  "tags": [
    0
  ],
  "added": "1970-01-01T00:00:00Z",
  "addOptions": {
    "monitor": "all",
    "albumsToMonitor": [
      "string"
    ],
    "monitored": true,
    "searchForMissingAlbums": true
  },
  "ratings": {
    "votes": 0,
    "value": 0
  },
  "statistics": {
    "albumCount": 0,
    "trackFileCount": 0,
    "trackCount": 0,
    "totalTrackCount": 0,
    "sizeOnDisk": 0,
    "percentOfTracks": 0
  }
}
```

<h3 id="putapiv1artistid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ArtistResource](#schemaartistresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## delete/api/v1/artist/{id}

> Code samples

```bash
curl http://localhost:8686/api/v1/artist/0 \
  -X DELETE \
  -H "X-Api-Key: ${API_KEY}"
```

`DELETE /api/v1/artist/{id}`

<h3 id="deleteapiv1artistid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|
|deleteFiles|query|boolean|false|none|
|addImportListExclusion|query|boolean|false|none|

<h3 id="deleteapiv1artistid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v1/artist

> Code samples

```bash
curl http://localhost:8686/api/v1/artist \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/artist`

<h3 id="getapiv1artist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|mbId|query|string(uuid)|false|none|

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "status": "continuing",
    "ended": true,
    "artistName": "string",
    "foreignArtistId": "string",
    "mbId": "string",
    "tadbId": 0,
    "discogsId": 0,
    "allMusicId": "string",
    "overview": "string",
    "artistType": "string",
    "disambiguation": "string",
    "links": [
      {
        "url": "string",
        "name": "string"
      }
    ],
    "nextAlbum": {},
    "lastAlbum": {},
    "images": [
      {
        "url": "string",
        "coverType": "unknown",
        "extension": "string",
        "remoteUrl": "string"
      }
    ],
    "members": [
      {
        "name": "string",
        "instrument": "string",
        "images": [
          {
            "url": "string",
            "coverType": "unknown",
            "extension": "string",
            "remoteUrl": "string"
          }
        ]
      }
    ],
    "remotePoster": "string",
    "path": "string",
    "qualityProfileId": 0,
    "metadataProfileId": 0,
    "monitored": true,
    "monitorNewItems": "all",
    "rootFolderPath": "string",
    "folder": "string",
    "genres": [
      "string"
    ],
    "cleanName": "string",
    "sortName": "string",
    "tags": [
      0
    ],
    "added": "1970-01-01T00:00:00Z",
    "addOptions": {
      "monitor": "all",
      "albumsToMonitor": [
        "string"
      ],
      "monitored": true,
      "searchForMissingAlbums": true
    },
    "ratings": {
      "votes": 0,
      "value": 0
    },
    "statistics": {
      "albumCount": 0,
      "trackFileCount": 0,
      "trackCount": 0,
      "totalTrackCount": 0,
      "sizeOnDisk": 0,
      "percentOfTracks": 0
    }
  }
]
```

<h3 id="getapiv1artist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getapiv1artist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ArtistResource](#schemaartistresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## post/api/v1/artist

> Code samples

```bash
curl http://localhost:8686/api/v1/artist \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "id": 0,
    "status": "continuing",
    "artistName": "string",
    "foreignArtistId": "string",
    "mbId": "string",
    "tadbId": 0,
    "discogsId": 0,
    "allMusicId": "string",
    "overview": "string",
    "artistType": "string",
    "disambiguation": "string",
    "links": [
      {
        "url": "string",
        "name": "string"
      }
    ],
    "nextAlbum": {},
    "lastAlbum": {},
    "images": [
      {
        "url": "string",
        "coverType": "unknown",
        "remoteUrl": "string"
      }
    ],
    "members": [
      {
        "name": "string",
        "instrument": "string",
        "images": [
          {
            "url": "string",
            "coverType": "unknown",
            "remoteUrl": "string"
          }
        ]
      }
    ],
    "remotePoster": "string",
    "path": "string",
    "qualityProfileId": 0,
    "metadataProfileId": 0,
    "monitored": true,
    "monitorNewItems": "all",
    "rootFolderPath": "string",
    "folder": "string",
    "genres": [
      "string"
    ],
    "cleanName": "string",
    "sortName": "string",
    "tags": [
      0
    ],
    "added": "1970-01-01T00:00:00Z",
    "addOptions": {
      "monitor": "all",
      "albumsToMonitor": [
        "string"
      ],
      "monitored": true,
      "searchForMissingAlbums": true
    },
    "ratings": {
      "votes": 0,
      "value": 0
    },
    "statistics": {
      "albumCount": 0,
      "trackFileCount": 0,
      "trackCount": 0,
      "totalTrackCount": 0,
      "sizeOnDisk": 0
    }
  }'
```

`POST /api/v1/artist`

> Body parameter

```json
{
  "id": 0,
  "status": "continuing",
  "artistName": "string",
  "foreignArtistId": "string",
  "mbId": "string",
  "tadbId": 0,
  "discogsId": 0,
  "allMusicId": "string",
  "overview": "string",
  "artistType": "string",
  "disambiguation": "string",
  "links": [
    {
      "url": "string",
      "name": "string"
    }
  ],
  "nextAlbum": {},
  "lastAlbum": {},
  "images": [
    {
      "url": "string",
      "coverType": "unknown",
      "remoteUrl": "string"
    }
  ],
  "members": [
    {
      "name": "string",
      "instrument": "string",
      "images": [
        {
          "url": "string",
          "coverType": "unknown",
          "remoteUrl": "string"
        }
      ]
    }
  ],
  "remotePoster": "string",
  "path": "string",
  "qualityProfileId": 0,
  "metadataProfileId": 0,
  "monitored": true,
  "monitorNewItems": "all",
  "rootFolderPath": "string",
  "folder": "string",
  "genres": [
    "string"
  ],
  "cleanName": "string",
  "sortName": "string",
  "tags": [
    0
  ],
  "added": "1970-01-01T00:00:00Z",
  "addOptions": {
    "monitor": "all",
    "albumsToMonitor": [
      "string"
    ],
    "monitored": true,
    "searchForMissingAlbums": true
  },
  "ratings": {
    "votes": 0,
    "value": 0
  },
  "statistics": {
    "albumCount": 0,
    "trackFileCount": 0,
    "trackCount": 0,
    "totalTrackCount": 0,
    "sizeOnDisk": 0
  }
}
```

<h3 id="postapiv1artist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ArtistResource](#schemaartistresource)|false|none|
|» id|body|integer(int32)|false|none|
|» status|body|[ArtistStatusType](#schemaartiststatustype)|false|none|
|» artistName|body|string \| null|false|none|
|» foreignArtistId|body|string \| null|false|none|
|» mbId|body|string \| null|false|none|
|» tadbId|body|integer(int32)|false|none|
|» discogsId|body|integer(int32)|false|none|
|» allMusicId|body|string \| null|false|none|
|» overview|body|string \| null|false|none|
|» artistType|body|string \| null|false|none|
|» disambiguation|body|string \| null|false|none|
|» links|body|[[Links](#schemalinks)]|false|none|
|» nextAlbum|body|[AlbumResource](#schemaalbumresource)|false|none|
|» lastAlbum|body|[AlbumResource](#schemaalbumresource)|false|none|
|» images|body|[[MediaCover](#schemamediacover)]|false|none|
|» members|body|[[Member](#schemamember)]|false|none|
|» remotePoster|body|string \| null|false|none|
|» path|body|string \| null|false|none|
|» qualityProfileId|body|integer(int32)|false|none|
|» metadataProfileId|body|integer(int32)|false|none|
|» monitored|body|boolean|false|none|
|» monitorNewItems|body|[NewItemMonitorTypes](#schemanewitemmonitortypes)|false|none|
|» rootFolderPath|body|string \| null|false|none|
|» folder|body|string \| null|false|none|
|» genres|body|[string]|false|none|
|» cleanName|body|string \| null|false|none|
|» sortName|body|string \| null|false|none|
|» tags|body|[integer(int32)]|false|none|
|» added|body|string(date-time)|false|none|
|» addOptions|body|[AddArtistOptions](#schemaaddartistoptions)|false|none|
|» ratings|body|[Ratings](#schemaratings)|false|none|
|» statistics|body|[ArtistStatisticsResource](#schemaartiststatisticsresource)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» status|continuing|
|» status|ended|
|» status|deleted|
|» monitorNewItems|all|
|» monitorNewItems|none|
|» monitorNewItems|new|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "status": "continuing",
  "ended": true,
  "artistName": "string",
  "foreignArtistId": "string",
  "mbId": "string",
  "tadbId": 0,
  "discogsId": 0,
  "allMusicId": "string",
  "overview": "string",
  "artistType": "string",
  "disambiguation": "string",
  "links": [
    {
      "url": "string",
      "name": "string"
    }
  ],
  "nextAlbum": {},
  "lastAlbum": {},
  "images": [
    {
      "url": "string",
      "coverType": "unknown",
      "extension": "string",
      "remoteUrl": "string"
    }
  ],
  "members": [
    {
      "name": "string",
      "instrument": "string",
      "images": [
        {
          "url": "string",
          "coverType": "unknown",
          "extension": "string",
          "remoteUrl": "string"
        }
      ]
    }
  ],
  "remotePoster": "string",
  "path": "string",
  "qualityProfileId": 0,
  "metadataProfileId": 0,
  "monitored": true,
  "monitorNewItems": "all",
  "rootFolderPath": "string",
  "folder": "string",
  "genres": [
    "string"
  ],
  "cleanName": "string",
  "sortName": "string",
  "tags": [
    0
  ],
  "added": "1970-01-01T00:00:00Z",
  "addOptions": {
    "monitor": "all",
    "albumsToMonitor": [
      "string"
    ],
    "monitored": true,
    "searchForMissingAlbums": true
  },
  "ratings": {
    "votes": 0,
    "value": 0
  },
  "statistics": {
    "albumCount": 0,
    "trackFileCount": 0,
    "trackCount": 0,
    "totalTrackCount": 0,
    "sizeOnDisk": 0,
    "percentOfTracks": 0
  }
}
```

<h3 id="postapiv1artist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ArtistResource](#schemaartistresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="lidarr-artisteditor">ArtistEditor</h1>

## put/api/v1/artist/editor

> Code samples

```bash
curl http://localhost:8686/api/v1/artist/editor \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "artistIds": [
      0
    ],
    "monitored": true,
    "monitorNewItems": "all",
    "qualityProfileId": 0,
    "metadataProfileId": 0,
    "rootFolderPath": "string",
    "tags": [
      0
    ],
    "applyTags": "add",
    "moveFiles": true,
    "deleteFiles": true,
    "addImportListExclusion": true
  }'
```

`PUT /api/v1/artist/editor`

> Body parameter

```json
{
  "artistIds": [
    0
  ],
  "monitored": true,
  "monitorNewItems": "all",
  "qualityProfileId": 0,
  "metadataProfileId": 0,
  "rootFolderPath": "string",
  "tags": [
    0
  ],
  "applyTags": "add",
  "moveFiles": true,
  "deleteFiles": true,
  "addImportListExclusion": true
}
```

<h3 id="putapiv1artisteditor-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ArtistEditorResource](#schemaartisteditorresource)|false|none|
|» artistIds|body|[integer(int32)]|false|none|
|» monitored|body|boolean \| null|false|none|
|» monitorNewItems|body|[NewItemMonitorTypes](#schemanewitemmonitortypes)|false|none|
|» qualityProfileId|body|integer(int32) \| null|false|none|
|» metadataProfileId|body|integer(int32) \| null|false|none|
|» rootFolderPath|body|string \| null|false|none|
|» tags|body|[integer(int32)]|false|none|
|» applyTags|body|[ApplyTags](#schemaapplytags)|false|none|
|» moveFiles|body|boolean|false|none|
|» deleteFiles|body|boolean|false|none|
|» addImportListExclusion|body|boolean|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» monitorNewItems|all|
|» monitorNewItems|none|
|» monitorNewItems|new|
|» applyTags|add|
|» applyTags|remove|
|» applyTags|replace|

<h3 id="putapiv1artisteditor-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## delete/api/v1/artist/editor

> Code samples

```bash
curl http://localhost:8686/api/v1/artist/editor \
  -X DELETE \
  -H 'Content-Type: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "artistIds": [
      0
    ],
    "monitored": true,
    "monitorNewItems": "all",
    "qualityProfileId": 0,
    "metadataProfileId": 0,
    "rootFolderPath": "string",
    "tags": [
      0
    ],
    "applyTags": "add",
    "moveFiles": true,
    "deleteFiles": true,
    "addImportListExclusion": true
  }'
```

`DELETE /api/v1/artist/editor`

> Body parameter

```json
{
  "artistIds": [
    0
  ],
  "monitored": true,
  "monitorNewItems": "all",
  "qualityProfileId": 0,
  "metadataProfileId": 0,
  "rootFolderPath": "string",
  "tags": [
    0
  ],
  "applyTags": "add",
  "moveFiles": true,
  "deleteFiles": true,
  "addImportListExclusion": true
}
```

<h3 id="deleteapiv1artisteditor-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ArtistEditorResource](#schemaartisteditorresource)|false|none|
|» artistIds|body|[integer(int32)]|false|none|
|» monitored|body|boolean \| null|false|none|
|» monitorNewItems|body|[NewItemMonitorTypes](#schemanewitemmonitortypes)|false|none|
|» qualityProfileId|body|integer(int32) \| null|false|none|
|» metadataProfileId|body|integer(int32) \| null|false|none|
|» rootFolderPath|body|string \| null|false|none|
|» tags|body|[integer(int32)]|false|none|
|» applyTags|body|[ApplyTags](#schemaapplytags)|false|none|
|» moveFiles|body|boolean|false|none|
|» deleteFiles|body|boolean|false|none|
|» addImportListExclusion|body|boolean|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» monitorNewItems|all|
|» monitorNewItems|none|
|» monitorNewItems|new|
|» applyTags|add|
|» applyTags|remove|
|» applyTags|replace|

<h3 id="deleteapiv1artisteditor-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="lidarr-artistlookup">ArtistLookup</h1>

## get/api/v1/artist/lookup

> Code samples

```bash
curl http://localhost:8686/api/v1/artist/lookup \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/artist/lookup`

<h3 id="getapiv1artistlookup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|term|query|string|false|none|

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "status": "continuing",
    "ended": true,
    "artistName": "string",
    "foreignArtistId": "string",
    "mbId": "string",
    "tadbId": 0,
    "discogsId": 0,
    "allMusicId": "string",
    "overview": "string",
    "artistType": "string",
    "disambiguation": "string",
    "links": [
      {
        "url": "string",
        "name": "string"
      }
    ],
    "nextAlbum": {},
    "lastAlbum": {},
    "images": [
      {
        "url": "string",
        "coverType": "unknown",
        "extension": "string",
        "remoteUrl": "string"
      }
    ],
    "members": [
      {
        "name": "string",
        "instrument": "string",
        "images": [
          {
            "url": "string",
            "coverType": "unknown",
            "extension": "string",
            "remoteUrl": "string"
          }
        ]
      }
    ],
    "remotePoster": "string",
    "path": "string",
    "qualityProfileId": 0,
    "metadataProfileId": 0,
    "monitored": true,
    "monitorNewItems": "all",
    "rootFolderPath": "string",
    "folder": "string",
    "genres": [
      "string"
    ],
    "cleanName": "string",
    "sortName": "string",
    "tags": [
      0
    ],
    "added": "1970-01-01T00:00:00Z",
    "addOptions": {
      "monitor": "all",
      "albumsToMonitor": [
        "string"
      ],
      "monitored": true,
      "searchForMissingAlbums": true
    },
    "ratings": {
      "votes": 0,
      "value": 0
    },
    "statistics": {
      "albumCount": 0,
      "trackFileCount": 0,
      "trackCount": 0,
      "totalTrackCount": 0,
      "sizeOnDisk": 0,
      "percentOfTracks": 0
    }
  }
]
```

<h3 id="getapiv1artistlookup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getapiv1artistlookup-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ArtistResource](#schemaartistresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="lidarr-staticresource">StaticResource</h1>

## get/login

> Code samples

```bash
curl http://localhost:8686/login \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /login`

<h3 id="getlogin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/content/{path}

> Code samples

```bash
curl http://localhost:8686/content/string \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /content/{path}`

<h3 id="getcontentpath-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|path|path|string|true|none|

<h3 id="getcontentpath-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/

> Code samples

```bash
curl http://localhost:8686/ \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /`

<h3 id="get-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|path|path|string|true|none|

<h3 id="get-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/{path}

> Code samples

```bash
curl http://localhost:8686/string \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /{path}`

<h3 id="getpath-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|path|path|string|true|none|

<h3 id="getpath-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="lidarr-authentication">Authentication</h1>

## post/login

> Code samples

```bash
curl http://localhost:8686/login \
  -X POST \
  -H "X-Api-Key: ${API_KEY}" \
  -F 'username=string' \
  -F 'password=string' \
  -F 'rememberMe=string'
```

`POST /login`

> Body parameter

```yaml
username: string
password: string
rememberMe: string
```

<h3 id="postlogin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|returnUrl|query|string|false|none|
|body|body|object|false|none|
|» username|body|string|false|none|
|» password|body|string|false|none|
|» rememberMe|body|string|false|none|

<h3 id="postlogin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/logout

> Code samples

```bash
curl http://localhost:8686/logout \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /logout`

<h3 id="getlogout-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="lidarr-autotagging">AutoTagging</h1>

## get/api/v1/autotagging/{id}

> Code samples

```bash
curl http://localhost:8686/api/v1/autotagging/0 \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/autotagging/{id}`

<h3 id="getapiv1autotaggingid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "removeTagsAutomatically": true,
  "tags": [
    0
  ],
  "specifications": [
    {
      "id": 0,
      "name": "string",
      "implementation": "string",
      "implementationName": "string",
      "negate": true,
      "required": true,
      "fields": [
        {
          "order": 0,
          "name": "string",
          "label": "string",
          "unit": "string",
          "helpText": "string",
          "helpTextWarning": "string",
          "helpLink": "string",
          "value": null,
          "type": "string",
          "advanced": true,
          "selectOptions": [
            {
              "value": 0,
              "name": "string",
              "order": 0,
              "hint": "string"
            }
          ],
          "selectOptionsProviderAction": "string",
          "section": "string",
          "hidden": "string",
          "privacy": "normal",
          "placeholder": "string",
          "isFloat": true
        }
      ]
    }
  ]
}
```

<h3 id="getapiv1autotaggingid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[AutoTaggingResource](#schemaautotaggingresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## put/api/v1/autotagging/{id}

> Code samples

```bash
curl http://localhost:8686/api/v1/autotagging/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "id": 0,
    "name": "string",
    "removeTagsAutomatically": true,
    "tags": [
      0
    ],
    "specifications": [
      {
        "id": 0,
        "name": "string",
        "implementation": "string",
        "implementationName": "string",
        "negate": true,
        "required": true,
        "fields": [
          {
            "order": 0,
            "name": "string",
            "label": "string",
            "unit": "string",
            "helpText": "string",
            "helpTextWarning": "string",
            "helpLink": "string",
            "value": null,
            "type": "string",
            "advanced": true,
            "selectOptions": [
              {
                "value": 0,
                "name": "string",
                "order": 0,
                "hint": "string"
              }
            ],
            "selectOptionsProviderAction": "string",
            "section": "string",
            "hidden": "string",
            "privacy": "normal",
            "placeholder": "string",
            "isFloat": true
          }
        ]
      }
    ]
  }'
```

`PUT /api/v1/autotagging/{id}`

> Body parameter

```json
{
  "id": 0,
  "name": "string",
  "removeTagsAutomatically": true,
  "tags": [
    0
  ],
  "specifications": [
    {
      "id": 0,
      "name": "string",
      "implementation": "string",
      "implementationName": "string",
      "negate": true,
      "required": true,
      "fields": [
        {
          "order": 0,
          "name": "string",
          "label": "string",
          "unit": "string",
          "helpText": "string",
          "helpTextWarning": "string",
          "helpLink": "string",
          "value": null,
          "type": "string",
          "advanced": true,
          "selectOptions": [
            {
              "value": 0,
              "name": "string",
              "order": 0,
              "hint": "string"
            }
          ],
          "selectOptionsProviderAction": "string",
          "section": "string",
          "hidden": "string",
          "privacy": "normal",
          "placeholder": "string",
          "isFloat": true
        }
      ]
    }
  ]
}
```

<h3 id="putapiv1autotaggingid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|[AutoTaggingResource](#schemaautotaggingresource)|false|none|
|» id|body|integer(int32)|false|none|
|» name|body|string \| null|false|none|
|» removeTagsAutomatically|body|boolean|false|none|
|» tags|body|[integer(int32)]|false|none|
|» specifications|body|[[AutoTaggingSpecificationSchema](#schemaautotaggingspecificationschema)]|false|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "removeTagsAutomatically": true,
  "tags": [
    0
  ],
  "specifications": [
    {
      "id": 0,
      "name": "string",
      "implementation": "string",
      "implementationName": "string",
      "negate": true,
      "required": true,
      "fields": [
        {
          "order": 0,
          "name": "string",
          "label": "string",
          "unit": "string",
          "helpText": "string",
          "helpTextWarning": "string",
          "helpLink": "string",
          "value": null,
          "type": "string",
          "advanced": true,
          "selectOptions": [
            {
              "value": 0,
              "name": "string",
              "order": 0,
              "hint": "string"
            }
          ],
          "selectOptionsProviderAction": "string",
          "section": "string",
          "hidden": "string",
          "privacy": "normal",
          "placeholder": "string",
          "isFloat": true
        }
      ]
    }
  ]
}
```

<h3 id="putapiv1autotaggingid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[AutoTaggingResource](#schemaautotaggingresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## delete/api/v1/autotagging/{id}

> Code samples

```bash
curl http://localhost:8686/api/v1/autotagging/0 \
  -X DELETE \
  -H "X-Api-Key: ${API_KEY}"
```

`DELETE /api/v1/autotagging/{id}`

<h3 id="deleteapiv1autotaggingid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

<h3 id="deleteapiv1autotaggingid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v1/autotagging

> Code samples

```bash
curl http://localhost:8686/api/v1/autotagging \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/autotagging`

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "name": "string",
    "removeTagsAutomatically": true,
    "tags": [
      0
    ],
    "specifications": [
      {
        "id": 0,
        "name": "string",
        "implementation": "string",
        "implementationName": "string",
        "negate": true,
        "required": true,
        "fields": [
          {
            "order": 0,
            "name": "string",
            "label": "string",
            "unit": "string",
            "helpText": "string",
            "helpTextWarning": "string",
            "helpLink": "string",
            "value": null,
            "type": "string",
            "advanced": true,
            "selectOptions": [
              {
                "value": 0,
                "name": "string",
                "order": 0,
                "hint": "string"
              }
            ],
            "selectOptionsProviderAction": "string",
            "section": "string",
            "hidden": "string",
            "privacy": "normal",
            "placeholder": "string",
            "isFloat": true
          }
        ]
      }
    ]
  }
]
```

<h3 id="getapiv1autotagging-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getapiv1autotagging-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[AutoTaggingResource](#schemaautotaggingresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## post/api/v1/autotagging

> Code samples

```bash
curl http://localhost:8686/api/v1/autotagging \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "id": 0,
    "name": "string",
    "removeTagsAutomatically": true,
    "tags": [
      0
    ],
    "specifications": [
      {
        "id": 0,
        "name": "string",
        "implementation": "string",
        "implementationName": "string",
        "negate": true,
        "required": true,
        "fields": [
          {
            "order": 0,
            "name": "string",
            "label": "string",
            "unit": "string",
            "helpText": "string",
            "helpTextWarning": "string",
            "helpLink": "string",
            "value": null,
            "type": "string",
            "advanced": true,
            "selectOptions": [
              {
                "value": 0,
                "name": "string",
                "order": 0,
                "hint": "string"
              }
            ],
            "selectOptionsProviderAction": "string",
            "section": "string",
            "hidden": "string",
            "privacy": "normal",
            "placeholder": "string",
            "isFloat": true
          }
        ]
      }
    ]
  }'
```

`POST /api/v1/autotagging`

> Body parameter

```json
{
  "id": 0,
  "name": "string",
  "removeTagsAutomatically": true,
  "tags": [
    0
  ],
  "specifications": [
    {
      "id": 0,
      "name": "string",
      "implementation": "string",
      "implementationName": "string",
      "negate": true,
      "required": true,
      "fields": [
        {
          "order": 0,
          "name": "string",
          "label": "string",
          "unit": "string",
          "helpText": "string",
          "helpTextWarning": "string",
          "helpLink": "string",
          "value": null,
          "type": "string",
          "advanced": true,
          "selectOptions": [
            {
              "value": 0,
              "name": "string",
              "order": 0,
              "hint": "string"
            }
          ],
          "selectOptionsProviderAction": "string",
          "section": "string",
          "hidden": "string",
          "privacy": "normal",
          "placeholder": "string",
          "isFloat": true
        }
      ]
    }
  ]
}
```

<h3 id="postapiv1autotagging-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AutoTaggingResource](#schemaautotaggingresource)|false|none|
|» id|body|integer(int32)|false|none|
|» name|body|string \| null|false|none|
|» removeTagsAutomatically|body|boolean|false|none|
|» tags|body|[integer(int32)]|false|none|
|» specifications|body|[[AutoTaggingSpecificationSchema](#schemaautotaggingspecificationschema)]|false|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "removeTagsAutomatically": true,
  "tags": [
    0
  ],
  "specifications": [
    {
      "id": 0,
      "name": "string",
      "implementation": "string",
      "implementationName": "string",
      "negate": true,
      "required": true,
      "fields": [
        {
          "order": 0,
          "name": "string",
          "label": "string",
          "unit": "string",
          "helpText": "string",
          "helpTextWarning": "string",
          "helpLink": "string",
          "value": null,
          "type": "string",
          "advanced": true,
          "selectOptions": [
            {
              "value": 0,
              "name": "string",
              "order": 0,
              "hint": "string"
            }
          ],
          "selectOptionsProviderAction": "string",
          "section": "string",
          "hidden": "string",
          "privacy": "normal",
          "placeholder": "string",
          "isFloat": true
        }
      ]
    }
  ]
}
```

<h3 id="postapiv1autotagging-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[AutoTaggingResource](#schemaautotaggingresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v1/autotagging/schema

> Code samples

```bash
curl http://localhost:8686/api/v1/autotagging/schema \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/autotagging/schema`

<h3 id="getapiv1autotaggingschema-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="lidarr-backup">Backup</h1>

## get/api/v1/system/backup

> Code samples

```bash
curl http://localhost:8686/api/v1/system/backup \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/system/backup`

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "name": "string",
    "path": "string",
    "type": "scheduled",
    "size": 0,
    "time": "1970-01-01T00:00:00Z"
  }
]
```

<h3 id="getapiv1systembackup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getapiv1systembackup-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[BackupResource](#schemabackupresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## delete/api/v1/system/backup/{id}

> Code samples

```bash
curl http://localhost:8686/api/v1/system/backup/0 \
  -X DELETE \
  -H "X-Api-Key: ${API_KEY}"
```

`DELETE /api/v1/system/backup/{id}`

<h3 id="deleteapiv1systembackupid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

<h3 id="deleteapiv1systembackupid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## post/api/v1/system/backup/restore/{id}

> Code samples

```bash
curl http://localhost:8686/api/v1/system/backup/restore/0 \
  -X POST \
  -H "X-Api-Key: ${API_KEY}"
```

`POST /api/v1/system/backup/restore/{id}`

<h3 id="postapiv1systembackuprestoreid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

<h3 id="postapiv1systembackuprestoreid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## post/api/v1/system/backup/restore/upload

> Code samples

```bash
curl http://localhost:8686/api/v1/system/backup/restore/upload \
  -X POST \
  -H "X-Api-Key: ${API_KEY}"
```

`POST /api/v1/system/backup/restore/upload`

<h3 id="postapiv1systembackuprestoreupload-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="lidarr-blocklist">Blocklist</h1>

## get/api/v1/blocklist

> Code samples

```bash
curl http://localhost:8686/api/v1/blocklist \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/blocklist`

<h3 id="getapiv1blocklist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer(int32)|false|none|
|pageSize|query|integer(int32)|false|none|
|sortKey|query|string|false|none|
|sortDirection|query|[SortDirection](#schemasortdirection)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sortDirection|default|
|sortDirection|ascending|
|sortDirection|descending|

> Example responses

> 200 Response

```json
{
  "page": 0,
  "pageSize": 0,
  "sortKey": "string",
  "sortDirection": "default",
  "totalRecords": 0,
  "records": [
    {
      "id": 0,
      "artistId": 0,
      "albumIds": [
        0
      ],
      "sourceTitle": "string",
      "quality": {
        "quality": {
          "id": 0,
          "name": "string"
        },
        "revision": {
          "version": 0,
          "real": 0,
          "isRepack": true
        }
      },
      "customFormats": [
        {
          "id": 0,
          "name": "string",
          "includeCustomFormatWhenRenaming": true,
          "specifications": [
            {
              "id": 0,
              "name": "string",
              "implementation": "string",
              "implementationName": "string",
              "infoLink": "string",
              "negate": true,
              "required": true,
              "fields": [
                {
                  "order": 0,
                  "name": "string",
                  "label": "string",
                  "unit": "string",
                  "helpText": "string",
                  "helpTextWarning": "string",
                  "helpLink": "string",
                  "value": null,
                  "type": "string",
                  "advanced": true,
                  "selectOptions": [
                    {
                      "value": 0,
                      "name": "string",
                      "order": 0,
                      "hint": "string"
                    }
                  ],
                  "selectOptionsProviderAction": "string",
                  "section": "string",
                  "hidden": "string",
                  "privacy": "normal",
                  "placeholder": "string",
                  "isFloat": true
                }
              ],
              "presets": [
                {}
              ]
            }
          ]
        }
      ],
      "date": "1970-01-01T00:00:00Z",
      "protocol": "unknown",
      "indexer": "string",
      "message": "string",
      "artist": {
        "id": 0,
        "status": "continuing",
        "ended": true,
        "artistName": "string",
        "foreignArtistId": "string",
        "mbId": "string",
        "tadbId": 0,
        "discogsId": 0,
        "allMusicId": "string",
        "overview": "string",
        "artistType": "string",
        "disambiguation": "string",
        "links": [
          {
            "url": "string",
            "name": "string"
          }
        ],
        "nextAlbum": {},
        "lastAlbum": {},
        "images": [
          {
            "url": "string",
            "coverType": "unknown",
            "extension": "string",
            "remoteUrl": "string"
          }
        ],
        "members": [
          {
            "name": "string",
            "instrument": "string",
            "images": [
              {
                "url": "string",
                "coverType": "unknown",
                "extension": "string",
                "remoteUrl": "string"
              }
            ]
          }
        ],
        "remotePoster": "string",
        "path": "string",
        "qualityProfileId": 0,
        "metadataProfileId": 0,
        "monitored": true,
        "monitorNewItems": "all",
        "rootFolderPath": "string",
        "folder": "string",
        "genres": [
          "string"
        ],
        "cleanName": "string",
        "sortName": "string",
        "tags": [
          0
        ],
        "added": "1970-01-01T00:00:00Z",
        "addOptions": {
          "monitor": "all",
          "albumsToMonitor": [
            "string"
          ],
          "monitored": true,
          "searchForMissingAlbums": true
        },
        "ratings": {
          "votes": 0,
          "value": 0
        },
        "statistics": {
          "albumCount": 0,
          "trackFileCount": 0,
          "trackCount": 0,
          "totalTrackCount": 0,
          "sizeOnDisk": 0,
          "percentOfTracks": 0
        }
      }
    }
  ]
}
```

<h3 id="getapiv1blocklist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[BlocklistResourcePagingResource](#schemablocklistresourcepagingresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## delete/api/v1/blocklist/{id}

> Code samples

```bash
curl http://localhost:8686/api/v1/blocklist/0 \
  -X DELETE \
  -H "X-Api-Key: ${API_KEY}"
```

`DELETE /api/v1/blocklist/{id}`

<h3 id="deleteapiv1blocklistid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

<h3 id="deleteapiv1blocklistid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## delete/api/v1/blocklist/bulk

> Code samples

```bash
curl http://localhost:8686/api/v1/blocklist/bulk \
  -X DELETE \
  -H 'Content-Type: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "ids": [
      0
    ]
  }'
```

`DELETE /api/v1/blocklist/bulk`

> Body parameter

```json
{
  "ids": [
    0
  ]
}
```

<h3 id="deleteapiv1blocklistbulk-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[BlocklistBulkResource](#schemablocklistbulkresource)|false|none|
|» ids|body|[integer(int32)]|false|none|

<h3 id="deleteapiv1blocklistbulk-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="lidarr-calendar">Calendar</h1>

## get/api/v1/calendar

> Code samples

```bash
curl http://localhost:8686/api/v1/calendar \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/calendar`

<h3 id="getapiv1calendar-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|start|query|string(date-time)|false|none|
|end|query|string(date-time)|false|none|
|unmonitored|query|boolean|false|none|
|includeArtist|query|boolean|false|none|
|tags|query|string|false|none|

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "title": "string",
    "disambiguation": "string",
    "overview": "string",
    "artistId": 0,
    "foreignAlbumId": "string",
    "monitored": true,
    "anyReleaseOk": true,
    "profileId": 0,
    "duration": 0,
    "albumType": "string",
    "secondaryTypes": [
      "string"
    ],
    "mediumCount": 0,
    "ratings": {
      "votes": 0,
      "value": 0
    },
    "releaseDate": "1970-01-01T00:00:00Z",
    "releases": [
      {
        "id": 0,
        "albumId": 0,
        "foreignReleaseId": "string",
        "title": "string",
        "status": "string",
        "duration": 0,
        "trackCount": 0,
        "media": [
          {
            "mediumNumber": 0,
            "mediumName": "string",
            "mediumFormat": "string"
          }
        ],
        "mediumCount": 0,
        "disambiguation": "string",
        "country": [
          "string"
        ],
        "label": [
          "string"
        ],
        "format": "string",
        "monitored": true
      }
    ],
    "genres": [
      "string"
    ],
    "media": [
      {
        "mediumNumber": 0,
        "mediumName": "string",
        "mediumFormat": "string"
      }
    ],
    "artist": {},
    "images": [
      {
        "url": "string",
        "coverType": "unknown",
        "extension": "string",
        "remoteUrl": "string"
      }
    ],
    "links": [
      {
        "url": "string",
        "name": "string"
      }
    ],
    "lastSearchTime": "1970-01-01T00:00:00Z",
    "statistics": {
      "trackFileCount": 0,
      "trackCount": 0,
      "totalTrackCount": 0,
      "sizeOnDisk": 0,
      "percentOfTracks": 0
    },
    "addOptions": {
      "addType": "automatic",
      "searchForNewAlbum": true
    },
    "remoteCover": "string"
  }
]
```

<h3 id="getapiv1calendar-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getapiv1calendar-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[AlbumResource](#schemaalbumresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v1/calendar/{id}

> Code samples

```bash
curl http://localhost:8686/api/v1/calendar/0 \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/calendar/{id}`

<h3 id="getapiv1calendarid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "title": "string",
  "disambiguation": "string",
  "overview": "string",
  "artistId": 0,
  "foreignAlbumId": "string",
  "monitored": true,
  "anyReleaseOk": true,
  "profileId": 0,
  "duration": 0,
  "albumType": "string",
  "secondaryTypes": [
    "string"
  ],
  "mediumCount": 0,
  "ratings": {
    "votes": 0,
    "value": 0
  },
  "releaseDate": "1970-01-01T00:00:00Z",
  "releases": [
    {
      "id": 0,
      "albumId": 0,
      "foreignReleaseId": "string",
      "title": "string",
      "status": "string",
      "duration": 0,
      "trackCount": 0,
      "media": [
        {
          "mediumNumber": 0,
          "mediumName": "string",
          "mediumFormat": "string"
        }
      ],
      "mediumCount": 0,
      "disambiguation": "string",
      "country": [
        "string"
      ],
      "label": [
        "string"
      ],
      "format": "string",
      "monitored": true
    }
  ],
  "genres": [
    "string"
  ],
  "media": [
    {
      "mediumNumber": 0,
      "mediumName": "string",
      "mediumFormat": "string"
    }
  ],
  "artist": {},
  "images": [
    {
      "url": "string",
      "coverType": "unknown",
      "extension": "string",
      "remoteUrl": "string"
    }
  ],
  "links": [
    {
      "url": "string",
      "name": "string"
    }
  ],
  "lastSearchTime": "1970-01-01T00:00:00Z",
  "statistics": {
    "trackFileCount": 0,
    "trackCount": 0,
    "totalTrackCount": 0,
    "sizeOnDisk": 0,
    "percentOfTracks": 0
  },
  "addOptions": {
    "addType": "automatic",
    "searchForNewAlbum": true
  },
  "remoteCover": "string"
}
```

<h3 id="getapiv1calendarid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[AlbumResource](#schemaalbumresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="lidarr-calendarfeed">CalendarFeed</h1>

## get/feed/v1/calendar/lidarr.ics

> Code samples

```bash
curl http://localhost:8686/feed/v1/calendar/lidarr.ics \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /feed/v1/calendar/lidarr.ics`

<h3 id="getfeedv1calendarlidarrics-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pastDays|query|integer(int32)|false|none|
|futureDays|query|integer(int32)|false|none|
|tags|query|string|false|none|
|unmonitored|query|boolean|false|none|

<h3 id="getfeedv1calendarlidarrics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="lidarr-command">Command</h1>

## get/api/v1/command/{id}

> Code samples

```bash
curl http://localhost:8686/api/v1/command/0 \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/command/{id}`

<h3 id="getapiv1commandid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "commandName": "string",
  "message": "string",
  "body": {
    "sendUpdatesToClient": true,
    "updateScheduledTask": true,
    "completionMessage": "string",
    "requiresDiskAccess": true,
    "isExclusive": true,
    "isTypeExclusive": true,
    "isLongRunning": true,
    "name": "string",
    "lastExecutionTime": "1970-01-01T00:00:00Z",
    "lastStartTime": "1970-01-01T00:00:00Z",
    "trigger": "unspecified",
    "suppressMessages": true,
    "clientUserAgent": "string"
  },
  "priority": "normal",
  "status": "queued",
  "result": "unknown",
  "queued": "1970-01-01T00:00:00Z",
  "started": "1970-01-01T00:00:00Z",
  "ended": "1970-01-01T00:00:00Z",
  "duration": "string",
  "exception": "string",
  "trigger": "unspecified",
  "clientUserAgent": "string",
  "stateChangeTime": "1970-01-01T00:00:00Z",
  "sendUpdatesToClient": true,
  "updateScheduledTask": true,
  "lastExecutionTime": "1970-01-01T00:00:00Z"
}
```

<h3 id="getapiv1commandid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[CommandResource](#schemacommandresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## delete/api/v1/command/{id}

> Code samples

```bash
curl http://localhost:8686/api/v1/command/0 \
  -X DELETE \
  -H "X-Api-Key: ${API_KEY}"
```

`DELETE /api/v1/command/{id}`

<h3 id="deleteapiv1commandid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

<h3 id="deleteapiv1commandid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v1/command

> Code samples

```bash
curl http://localhost:8686/api/v1/command \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/command`

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "name": "string",
    "commandName": "string",
    "message": "string",
    "body": {
      "sendUpdatesToClient": true,
      "updateScheduledTask": true,
      "completionMessage": "string",
      "requiresDiskAccess": true,
      "isExclusive": true,
      "isTypeExclusive": true,
      "isLongRunning": true,
      "name": "string",
      "lastExecutionTime": "1970-01-01T00:00:00Z",
      "lastStartTime": "1970-01-01T00:00:00Z",
      "trigger": "unspecified",
      "suppressMessages": true,
      "clientUserAgent": "string"
    },
    "priority": "normal",
    "status": "queued",
    "result": "unknown",
    "queued": "1970-01-01T00:00:00Z",
    "started": "1970-01-01T00:00:00Z",
    "ended": "1970-01-01T00:00:00Z",
    "duration": "string",
    "exception": "string",
    "trigger": "unspecified",
    "clientUserAgent": "string",
    "stateChangeTime": "1970-01-01T00:00:00Z",
    "sendUpdatesToClient": true,
    "updateScheduledTask": true,
    "lastExecutionTime": "1970-01-01T00:00:00Z"
  }
]
```

<h3 id="getapiv1command-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getapiv1command-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[CommandResource](#schemacommandresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## post/api/v1/command

> Code samples

```bash
curl http://localhost:8686/api/v1/command \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "id": 0,
    "name": "string",
    "commandName": "string",
    "message": "string",
    "body": {
      "sendUpdatesToClient": true,
      "lastExecutionTime": "1970-01-01T00:00:00Z",
      "lastStartTime": "1970-01-01T00:00:00Z",
      "trigger": "unspecified",
      "suppressMessages": true,
      "clientUserAgent": "string"
    },
    "priority": "normal",
    "status": "queued",
    "result": "unknown",
    "queued": "1970-01-01T00:00:00Z",
    "started": "1970-01-01T00:00:00Z",
    "ended": "1970-01-01T00:00:00Z",
    "duration": "string",
    "exception": "string",
    "trigger": "unspecified",
    "clientUserAgent": "string",
    "stateChangeTime": "1970-01-01T00:00:00Z",
    "sendUpdatesToClient": true,
    "updateScheduledTask": true,
    "lastExecutionTime": "1970-01-01T00:00:00Z"
  }'
```

`POST /api/v1/command`

> Body parameter

```json
{
  "id": 0,
  "name": "string",
  "commandName": "string",
  "message": "string",
  "body": {
    "sendUpdatesToClient": true,
    "lastExecutionTime": "1970-01-01T00:00:00Z",
    "lastStartTime": "1970-01-01T00:00:00Z",
    "trigger": "unspecified",
    "suppressMessages": true,
    "clientUserAgent": "string"
  },
  "priority": "normal",
  "status": "queued",
  "result": "unknown",
  "queued": "1970-01-01T00:00:00Z",
  "started": "1970-01-01T00:00:00Z",
  "ended": "1970-01-01T00:00:00Z",
  "duration": "string",
  "exception": "string",
  "trigger": "unspecified",
  "clientUserAgent": "string",
  "stateChangeTime": "1970-01-01T00:00:00Z",
  "sendUpdatesToClient": true,
  "updateScheduledTask": true,
  "lastExecutionTime": "1970-01-01T00:00:00Z"
}
```

<h3 id="postapiv1command-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CommandResource](#schemacommandresource)|false|none|
|» id|body|integer(int32)|false|none|
|» name|body|string \| null|false|none|
|» commandName|body|string \| null|false|none|
|» message|body|string \| null|false|none|
|» body|body|[Command](#schemacommand)|false|none|
|» priority|body|[CommandPriority](#schemacommandpriority)|false|none|
|» status|body|[CommandStatus](#schemacommandstatus)|false|none|
|» result|body|[CommandResult](#schemacommandresult)|false|none|
|» queued|body|string(date-time)|false|none|
|» started|body|string(date-time) \| null|false|none|
|» ended|body|string(date-time) \| null|false|none|
|» duration|body|string(date-span) \| null|false|none|
|» exception|body|string \| null|false|none|
|» trigger|body|[CommandTrigger](#schemacommandtrigger)|false|none|
|» clientUserAgent|body|string \| null|false|none|
|» stateChangeTime|body|string(date-time) \| null|false|none|
|» sendUpdatesToClient|body|boolean|false|none|
|» updateScheduledTask|body|boolean|false|none|
|» lastExecutionTime|body|string(date-time) \| null|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» priority|normal|
|» priority|high|
|» priority|low|
|» status|queued|
|» status|started|
|» status|completed|
|» status|failed|
|» status|aborted|
|» status|cancelled|
|» status|orphaned|
|» result|unknown|
|» result|successful|
|» result|unsuccessful|
|» trigger|unspecified|
|» trigger|manual|
|» trigger|scheduled|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "commandName": "string",
  "message": "string",
  "body": {
    "sendUpdatesToClient": true,
    "updateScheduledTask": true,
    "completionMessage": "string",
    "requiresDiskAccess": true,
    "isExclusive": true,
    "isTypeExclusive": true,
    "isLongRunning": true,
    "name": "string",
    "lastExecutionTime": "1970-01-01T00:00:00Z",
    "lastStartTime": "1970-01-01T00:00:00Z",
    "trigger": "unspecified",
    "suppressMessages": true,
    "clientUserAgent": "string"
  },
  "priority": "normal",
  "status": "queued",
  "result": "unknown",
  "queued": "1970-01-01T00:00:00Z",
  "started": "1970-01-01T00:00:00Z",
  "ended": "1970-01-01T00:00:00Z",
  "duration": "string",
  "exception": "string",
  "trigger": "unspecified",
  "clientUserAgent": "string",
  "stateChangeTime": "1970-01-01T00:00:00Z",
  "sendUpdatesToClient": true,
  "updateScheduledTask": true,
  "lastExecutionTime": "1970-01-01T00:00:00Z"
}
```

<h3 id="postapiv1command-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[CommandResource](#schemacommandresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="lidarr-customfilter">CustomFilter</h1>

## get/api/v1/customfilter/{id}

> Code samples

```bash
curl http://localhost:8686/api/v1/customfilter/0 \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/customfilter/{id}`

<h3 id="getapiv1customfilterid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "type": "string",
  "label": "string",
  "filters": [
    {
      "property1": null,
      "property2": null
    }
  ]
}
```

<h3 id="getapiv1customfilterid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[CustomFilterResource](#schemacustomfilterresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## put/api/v1/customfilter/{id}

> Code samples

```bash
curl http://localhost:8686/api/v1/customfilter/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "id": 0,
    "type": "string",
    "label": "string",
    "filters": [
      {
        "property1": null,
        "property2": null
      }
    ]
  }'
```

`PUT /api/v1/customfilter/{id}`

> Body parameter

```json
{
  "id": 0,
  "type": "string",
  "label": "string",
  "filters": [
    {
      "property1": null,
      "property2": null
    }
  ]
}
```

<h3 id="putapiv1customfilterid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|[CustomFilterResource](#schemacustomfilterresource)|false|none|
|» id|body|integer(int32)|false|none|
|» type|body|string \| null|false|none|
|» label|body|string \| null|false|none|
|» filters|body|[object]|false|none|
|» » **additionalProperties**|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "type": "string",
  "label": "string",
  "filters": [
    {
      "property1": null,
      "property2": null
    }
  ]
}
```

<h3 id="putapiv1customfilterid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[CustomFilterResource](#schemacustomfilterresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## delete/api/v1/customfilter/{id}

> Code samples

```bash
curl http://localhost:8686/api/v1/customfilter/0 \
  -X DELETE \
  -H "X-Api-Key: ${API_KEY}"
```

`DELETE /api/v1/customfilter/{id}`

<h3 id="deleteapiv1customfilterid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

<h3 id="deleteapiv1customfilterid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v1/customfilter

> Code samples

```bash
curl http://localhost:8686/api/v1/customfilter \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/customfilter`

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "type": "string",
    "label": "string",
    "filters": [
      {
        "property1": null,
        "property2": null
      }
    ]
  }
]
```

<h3 id="getapiv1customfilter-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getapiv1customfilter-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[CustomFilterResource](#schemacustomfilterresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## post/api/v1/customfilter

> Code samples

```bash
curl http://localhost:8686/api/v1/customfilter \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "id": 0,
    "type": "string",
    "label": "string",
    "filters": [
      {
        "property1": null,
        "property2": null
      }
    ]
  }'
```

`POST /api/v1/customfilter`

> Body parameter

```json
{
  "id": 0,
  "type": "string",
  "label": "string",
  "filters": [
    {
      "property1": null,
      "property2": null
    }
  ]
}
```

<h3 id="postapiv1customfilter-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CustomFilterResource](#schemacustomfilterresource)|false|none|
|» id|body|integer(int32)|false|none|
|» type|body|string \| null|false|none|
|» label|body|string \| null|false|none|
|» filters|body|[object]|false|none|
|» » **additionalProperties**|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "type": "string",
  "label": "string",
  "filters": [
    {
      "property1": null,
      "property2": null
    }
  ]
}
```

<h3 id="postapiv1customfilter-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[CustomFilterResource](#schemacustomfilterresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="lidarr-customformat">CustomFormat</h1>

## get/api/v1/customformat/{id}

> Code samples

```bash
curl http://localhost:8686/api/v1/customformat/0 \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/customformat/{id}`

<h3 id="getapiv1customformatid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "includeCustomFormatWhenRenaming": true,
  "specifications": [
    {
      "id": 0,
      "name": "string",
      "implementation": "string",
      "implementationName": "string",
      "infoLink": "string",
      "negate": true,
      "required": true,
      "fields": [
        {
          "order": 0,
          "name": "string",
          "label": "string",
          "unit": "string",
          "helpText": "string",
          "helpTextWarning": "string",
          "helpLink": "string",
          "value": null,
          "type": "string",
          "advanced": true,
          "selectOptions": [
            {
              "value": 0,
              "name": "string",
              "order": 0,
              "hint": "string"
            }
          ],
          "selectOptionsProviderAction": "string",
          "section": "string",
          "hidden": "string",
          "privacy": "normal",
          "placeholder": "string",
          "isFloat": true
        }
      ],
      "presets": [
        {}
      ]
    }
  ]
}
```

<h3 id="getapiv1customformatid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[CustomFormatResource](#schemacustomformatresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## put/api/v1/customformat/{id}

> Code samples

```bash
curl http://localhost:8686/api/v1/customformat/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "id": 0,
    "name": "string",
    "includeCustomFormatWhenRenaming": true,
    "specifications": [
      {
        "id": 0,
        "name": "string",
        "implementation": "string",
        "implementationName": "string",
        "infoLink": "string",
        "negate": true,
        "required": true,
        "fields": [
          {
            "order": 0,
            "name": "string",
            "label": "string",
            "unit": "string",
            "helpText": "string",
            "helpTextWarning": "string",
            "helpLink": "string",
            "value": null,
            "type": "string",
            "advanced": true,
            "selectOptions": [
              {
                "value": 0,
                "name": "string",
                "order": 0,
                "hint": "string"
              }
            ],
            "selectOptionsProviderAction": "string",
            "section": "string",
            "hidden": "string",
            "privacy": "normal",
            "placeholder": "string",
            "isFloat": true
          }
        ],
        "presets": [
          {}
        ]
      }
    ]
  }'
```

`PUT /api/v1/customformat/{id}`

> Body parameter

```json
{
  "id": 0,
  "name": "string",
  "includeCustomFormatWhenRenaming": true,
  "specifications": [
    {
      "id": 0,
      "name": "string",
      "implementation": "string",
      "implementationName": "string",
      "infoLink": "string",
      "negate": true,
      "required": true,
      "fields": [
        {
          "order": 0,
          "name": "string",
          "label": "string",
          "unit": "string",
          "helpText": "string",
          "helpTextWarning": "string",
          "helpLink": "string",
          "value": null,
          "type": "string",
          "advanced": true,
          "selectOptions": [
            {
              "value": 0,
              "name": "string",
              "order": 0,
              "hint": "string"
            }
          ],
          "selectOptionsProviderAction": "string",
          "section": "string",
          "hidden": "string",
          "privacy": "normal",
          "placeholder": "string",
          "isFloat": true
        }
      ],
      "presets": [
        {}
      ]
    }
  ]
}
```

<h3 id="putapiv1customformatid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|[CustomFormatResource](#schemacustomformatresource)|false|none|
|» id|body|integer(int32)|false|none|
|» name|body|string \| null|false|none|
|» includeCustomFormatWhenRenaming|body|boolean \| null|false|none|
|» specifications|body|[[CustomFormatSpecificationSchema](#schemacustomformatspecificationschema)]|false|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "includeCustomFormatWhenRenaming": true,
  "specifications": [
    {
      "id": 0,
      "name": "string",
      "implementation": "string",
      "implementationName": "string",
      "infoLink": "string",
      "negate": true,
      "required": true,
      "fields": [
        {
          "order": 0,
          "name": "string",
          "label": "string",
          "unit": "string",
          "helpText": "string",
          "helpTextWarning": "string",
          "helpLink": "string",
          "value": null,
          "type": "string",
          "advanced": true,
          "selectOptions": [
            {
              "value": 0,
              "name": "string",
              "order": 0,
              "hint": "string"
            }
          ],
          "selectOptionsProviderAction": "string",
          "section": "string",
          "hidden": "string",
          "privacy": "normal",
          "placeholder": "string",
          "isFloat": true
        }
      ],
      "presets": [
        {}
      ]
    }
  ]
}
```

<h3 id="putapiv1customformatid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[CustomFormatResource](#schemacustomformatresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## delete/api/v1/customformat/{id}

> Code samples

```bash
curl http://localhost:8686/api/v1/customformat/0 \
  -X DELETE \
  -H "X-Api-Key: ${API_KEY}"
```

`DELETE /api/v1/customformat/{id}`

<h3 id="deleteapiv1customformatid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

<h3 id="deleteapiv1customformatid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v1/customformat

> Code samples

```bash
curl http://localhost:8686/api/v1/customformat \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/customformat`

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "name": "string",
    "includeCustomFormatWhenRenaming": true,
    "specifications": [
      {
        "id": 0,
        "name": "string",
        "implementation": "string",
        "implementationName": "string",
        "infoLink": "string",
        "negate": true,
        "required": true,
        "fields": [
          {
            "order": 0,
            "name": "string",
            "label": "string",
            "unit": "string",
            "helpText": "string",
            "helpTextWarning": "string",
            "helpLink": "string",
            "value": null,
            "type": "string",
            "advanced": true,
            "selectOptions": [
              {
                "value": 0,
                "name": "string",
                "order": 0,
                "hint": "string"
              }
            ],
            "selectOptionsProviderAction": "string",
            "section": "string",
            "hidden": "string",
            "privacy": "normal",
            "placeholder": "string",
            "isFloat": true
          }
        ],
        "presets": [
          {}
        ]
      }
    ]
  }
]
```

<h3 id="getapiv1customformat-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getapiv1customformat-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[CustomFormatResource](#schemacustomformatresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## post/api/v1/customformat

> Code samples

```bash
curl http://localhost:8686/api/v1/customformat \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "id": 0,
    "name": "string",
    "includeCustomFormatWhenRenaming": true,
    "specifications": [
      {
        "id": 0,
        "name": "string",
        "implementation": "string",
        "implementationName": "string",
        "infoLink": "string",
        "negate": true,
        "required": true,
        "fields": [
          {
            "order": 0,
            "name": "string",
            "label": "string",
            "unit": "string",
            "helpText": "string",
            "helpTextWarning": "string",
            "helpLink": "string",
            "value": null,
            "type": "string",
            "advanced": true,
            "selectOptions": [
              {
                "value": 0,
                "name": "string",
                "order": 0,
                "hint": "string"
              }
            ],
            "selectOptionsProviderAction": "string",
            "section": "string",
            "hidden": "string",
            "privacy": "normal",
            "placeholder": "string",
            "isFloat": true
          }
        ],
        "presets": [
          {}
        ]
      }
    ]
  }'
```

`POST /api/v1/customformat`

> Body parameter

```json
{
  "id": 0,
  "name": "string",
  "includeCustomFormatWhenRenaming": true,
  "specifications": [
    {
      "id": 0,
      "name": "string",
      "implementation": "string",
      "implementationName": "string",
      "infoLink": "string",
      "negate": true,
      "required": true,
      "fields": [
        {
          "order": 0,
          "name": "string",
          "label": "string",
          "unit": "string",
          "helpText": "string",
          "helpTextWarning": "string",
          "helpLink": "string",
          "value": null,
          "type": "string",
          "advanced": true,
          "selectOptions": [
            {
              "value": 0,
              "name": "string",
              "order": 0,
              "hint": "string"
            }
          ],
          "selectOptionsProviderAction": "string",
          "section": "string",
          "hidden": "string",
          "privacy": "normal",
          "placeholder": "string",
          "isFloat": true
        }
      ],
      "presets": [
        {}
      ]
    }
  ]
}
```

<h3 id="postapiv1customformat-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CustomFormatResource](#schemacustomformatresource)|false|none|
|» id|body|integer(int32)|false|none|
|» name|body|string \| null|false|none|
|» includeCustomFormatWhenRenaming|body|boolean \| null|false|none|
|» specifications|body|[[CustomFormatSpecificationSchema](#schemacustomformatspecificationschema)]|false|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "includeCustomFormatWhenRenaming": true,
  "specifications": [
    {
      "id": 0,
      "name": "string",
      "implementation": "string",
      "implementationName": "string",
      "infoLink": "string",
      "negate": true,
      "required": true,
      "fields": [
        {
          "order": 0,
          "name": "string",
          "label": "string",
          "unit": "string",
          "helpText": "string",
          "helpTextWarning": "string",
          "helpLink": "string",
          "value": null,
          "type": "string",
          "advanced": true,
          "selectOptions": [
            {
              "value": 0,
              "name": "string",
              "order": 0,
              "hint": "string"
            }
          ],
          "selectOptionsProviderAction": "string",
          "section": "string",
          "hidden": "string",
          "privacy": "normal",
          "placeholder": "string",
          "isFloat": true
        }
      ],
      "presets": [
        {}
      ]
    }
  ]
}
```

<h3 id="postapiv1customformat-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[CustomFormatResource](#schemacustomformatresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## put/api/v1/customformat/bulk

> Code samples

```bash
curl http://localhost:8686/api/v1/customformat/bulk \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "ids": [
      0
    ],
    "includeCustomFormatWhenRenaming": true
  }'
```

`PUT /api/v1/customformat/bulk`

> Body parameter

```json
{
  "ids": [
    0
  ],
  "includeCustomFormatWhenRenaming": true
}
```

<h3 id="putapiv1customformatbulk-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CustomFormatBulkResource](#schemacustomformatbulkresource)|false|none|
|» ids|body|[integer(int32)]|false|none|
|» includeCustomFormatWhenRenaming|body|boolean \| null|false|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "includeCustomFormatWhenRenaming": true,
  "specifications": [
    {
      "id": 0,
      "name": "string",
      "implementation": "string",
      "implementationName": "string",
      "infoLink": "string",
      "negate": true,
      "required": true,
      "fields": [
        {
          "order": 0,
          "name": "string",
          "label": "string",
          "unit": "string",
          "helpText": "string",
          "helpTextWarning": "string",
          "helpLink": "string",
          "value": null,
          "type": "string",
          "advanced": true,
          "selectOptions": [
            {
              "value": 0,
              "name": "string",
              "order": 0,
              "hint": "string"
            }
          ],
          "selectOptionsProviderAction": "string",
          "section": "string",
          "hidden": "string",
          "privacy": "normal",
          "placeholder": "string",
          "isFloat": true
        }
      ],
      "presets": [
        {}
      ]
    }
  ]
}
```

<h3 id="putapiv1customformatbulk-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[CustomFormatResource](#schemacustomformatresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## delete/api/v1/customformat/bulk

> Code samples

```bash
curl http://localhost:8686/api/v1/customformat/bulk \
  -X DELETE \
  -H 'Content-Type: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "ids": [
      0
    ],
    "includeCustomFormatWhenRenaming": true
  }'
```

`DELETE /api/v1/customformat/bulk`

> Body parameter

```json
{
  "ids": [
    0
  ],
  "includeCustomFormatWhenRenaming": true
}
```

<h3 id="deleteapiv1customformatbulk-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CustomFormatBulkResource](#schemacustomformatbulkresource)|false|none|
|» ids|body|[integer(int32)]|false|none|
|» includeCustomFormatWhenRenaming|body|boolean \| null|false|none|

<h3 id="deleteapiv1customformatbulk-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v1/customformat/schema

> Code samples

```bash
curl http://localhost:8686/api/v1/customformat/schema \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/customformat/schema`

<h3 id="getapiv1customformatschema-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="lidarr-cutoff">Cutoff</h1>

## get/api/v1/wanted/cutoff

> Code samples

```bash
curl http://localhost:8686/api/v1/wanted/cutoff \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/wanted/cutoff`

<h3 id="getapiv1wantedcutoff-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer(int32)|false|none|
|pageSize|query|integer(int32)|false|none|
|sortKey|query|string|false|none|
|sortDirection|query|[SortDirection](#schemasortdirection)|false|none|
|includeArtist|query|boolean|false|none|
|monitored|query|boolean|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sortDirection|default|
|sortDirection|ascending|
|sortDirection|descending|

> Example responses

> 200 Response

```json
{
  "page": 0,
  "pageSize": 0,
  "sortKey": "string",
  "sortDirection": "default",
  "totalRecords": 0,
  "records": [
    {
      "id": 0,
      "title": "string",
      "disambiguation": "string",
      "overview": "string",
      "artistId": 0,
      "foreignAlbumId": "string",
      "monitored": true,
      "anyReleaseOk": true,
      "profileId": 0,
      "duration": 0,
      "albumType": "string",
      "secondaryTypes": [
        "string"
      ],
      "mediumCount": 0,
      "ratings": {
        "votes": 0,
        "value": 0
      },
      "releaseDate": "1970-01-01T00:00:00Z",
      "releases": [
        {
          "id": 0,
          "albumId": 0,
          "foreignReleaseId": "string",
          "title": "string",
          "status": "string",
          "duration": 0,
          "trackCount": 0,
          "media": [
            {
              "mediumNumber": 0,
              "mediumName": "string",
              "mediumFormat": "string"
            }
          ],
          "mediumCount": 0,
          "disambiguation": "string",
          "country": [
            "string"
          ],
          "label": [
            "string"
          ],
          "format": "string",
          "monitored": true
        }
      ],
      "genres": [
        "string"
      ],
      "media": [
        {
          "mediumNumber": 0,
          "mediumName": "string",
          "mediumFormat": "string"
        }
      ],
      "artist": {},
      "images": [
        {
          "url": "string",
          "coverType": "unknown",
          "extension": "string",
          "remoteUrl": "string"
        }
      ],
      "links": [
        {
          "url": "string",
          "name": "string"
        }
      ],
      "lastSearchTime": "1970-01-01T00:00:00Z",
      "statistics": {
        "trackFileCount": 0,
        "trackCount": 0,
        "totalTrackCount": 0,
        "sizeOnDisk": 0,
        "percentOfTracks": 0
      },
      "addOptions": {
        "addType": "automatic",
        "searchForNewAlbum": true
      },
      "remoteCover": "string"
    }
  ]
}
```

<h3 id="getapiv1wantedcutoff-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[AlbumResourcePagingResource](#schemaalbumresourcepagingresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v1/wanted/cutoff/{id}

> Code samples

```bash
curl http://localhost:8686/api/v1/wanted/cutoff/0 \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/wanted/cutoff/{id}`

<h3 id="getapiv1wantedcutoffid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "title": "string",
  "disambiguation": "string",
  "overview": "string",
  "artistId": 0,
  "foreignAlbumId": "string",
  "monitored": true,
  "anyReleaseOk": true,
  "profileId": 0,
  "duration": 0,
  "albumType": "string",
  "secondaryTypes": [
    "string"
  ],
  "mediumCount": 0,
  "ratings": {
    "votes": 0,
    "value": 0
  },
  "releaseDate": "1970-01-01T00:00:00Z",
  "releases": [
    {
      "id": 0,
      "albumId": 0,
      "foreignReleaseId": "string",
      "title": "string",
      "status": "string",
      "duration": 0,
      "trackCount": 0,
      "media": [
        {
          "mediumNumber": 0,
          "mediumName": "string",
          "mediumFormat": "string"
        }
      ],
      "mediumCount": 0,
      "disambiguation": "string",
      "country": [
        "string"
      ],
      "label": [
        "string"
      ],
      "format": "string",
      "monitored": true
    }
  ],
  "genres": [
    "string"
  ],
  "media": [
    {
      "mediumNumber": 0,
      "mediumName": "string",
      "mediumFormat": "string"
    }
  ],
  "artist": {},
  "images": [
    {
      "url": "string",
      "coverType": "unknown",
      "extension": "string",
      "remoteUrl": "string"
    }
  ],
  "links": [
    {
      "url": "string",
      "name": "string"
    }
  ],
  "lastSearchTime": "1970-01-01T00:00:00Z",
  "statistics": {
    "trackFileCount": 0,
    "trackCount": 0,
    "totalTrackCount": 0,
    "sizeOnDisk": 0,
    "percentOfTracks": 0
  },
  "addOptions": {
    "addType": "automatic",
    "searchForNewAlbum": true
  },
  "remoteCover": "string"
}
```

<h3 id="getapiv1wantedcutoffid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[AlbumResource](#schemaalbumresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="lidarr-delayprofile">DelayProfile</h1>

## get/api/v1/delayprofile

> Code samples

```bash
curl http://localhost:8686/api/v1/delayprofile \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/delayprofile`

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "enableUsenet": true,
    "enableTorrent": true,
    "preferredProtocol": "unknown",
    "usenetDelay": 0,
    "torrentDelay": 0,
    "bypassIfHighestQuality": true,
    "bypassIfAboveCustomFormatScore": true,
    "minimumCustomFormatScore": 0,
    "order": 0,
    "tags": [
      0
    ]
  }
]
```

<h3 id="getapiv1delayprofile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getapiv1delayprofile-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[DelayProfileResource](#schemadelayprofileresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## post/api/v1/delayprofile

> Code samples

```bash
curl http://localhost:8686/api/v1/delayprofile \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "id": 0,
    "enableUsenet": true,
    "enableTorrent": true,
    "preferredProtocol": "unknown",
    "usenetDelay": 0,
    "torrentDelay": 0,
    "bypassIfHighestQuality": true,
    "bypassIfAboveCustomFormatScore": true,
    "minimumCustomFormatScore": 0,
    "order": 0,
    "tags": [
      0
    ]
  }'
```

`POST /api/v1/delayprofile`

> Body parameter

```json
{
  "id": 0,
  "enableUsenet": true,
  "enableTorrent": true,
  "preferredProtocol": "unknown",
  "usenetDelay": 0,
  "torrentDelay": 0,
  "bypassIfHighestQuality": true,
  "bypassIfAboveCustomFormatScore": true,
  "minimumCustomFormatScore": 0,
  "order": 0,
  "tags": [
    0
  ]
}
```

<h3 id="postapiv1delayprofile-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[DelayProfileResource](#schemadelayprofileresource)|false|none|
|» id|body|integer(int32)|false|none|
|» enableUsenet|body|boolean|false|none|
|» enableTorrent|body|boolean|false|none|
|» preferredProtocol|body|[DownloadProtocol](#schemadownloadprotocol)|false|none|
|» usenetDelay|body|integer(int32)|false|none|
|» torrentDelay|body|integer(int32)|false|none|
|» bypassIfHighestQuality|body|boolean|false|none|
|» bypassIfAboveCustomFormatScore|body|boolean|false|none|
|» minimumCustomFormatScore|body|integer(int32)|false|none|
|» order|body|integer(int32)|false|none|
|» tags|body|[integer(int32)]|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» preferredProtocol|unknown|
|» preferredProtocol|usenet|
|» preferredProtocol|torrent|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "enableUsenet": true,
  "enableTorrent": true,
  "preferredProtocol": "unknown",
  "usenetDelay": 0,
  "torrentDelay": 0,
  "bypassIfHighestQuality": true,
  "bypassIfAboveCustomFormatScore": true,
  "minimumCustomFormatScore": 0,
  "order": 0,
  "tags": [
    0
  ]
}
```

<h3 id="postapiv1delayprofile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[DelayProfileResource](#schemadelayprofileresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v1/delayprofile/{id}

> Code samples

```bash
curl http://localhost:8686/api/v1/delayprofile/0 \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/delayprofile/{id}`

<h3 id="getapiv1delayprofileid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "enableUsenet": true,
  "enableTorrent": true,
  "preferredProtocol": "unknown",
  "usenetDelay": 0,
  "torrentDelay": 0,
  "bypassIfHighestQuality": true,
  "bypassIfAboveCustomFormatScore": true,
  "minimumCustomFormatScore": 0,
  "order": 0,
  "tags": [
    0
  ]
}
```

<h3 id="getapiv1delayprofileid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[DelayProfileResource](#schemadelayprofileresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## put/api/v1/delayprofile/{id}

> Code samples

```bash
curl http://localhost:8686/api/v1/delayprofile/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "id": 0,
    "enableUsenet": true,
    "enableTorrent": true,
    "preferredProtocol": "unknown",
    "usenetDelay": 0,
    "torrentDelay": 0,
    "bypassIfHighestQuality": true,
    "bypassIfAboveCustomFormatScore": true,
    "minimumCustomFormatScore": 0,
    "order": 0,
    "tags": [
      0
    ]
  }'
```

`PUT /api/v1/delayprofile/{id}`

> Body parameter

```json
{
  "id": 0,
  "enableUsenet": true,
  "enableTorrent": true,
  "preferredProtocol": "unknown",
  "usenetDelay": 0,
  "torrentDelay": 0,
  "bypassIfHighestQuality": true,
  "bypassIfAboveCustomFormatScore": true,
  "minimumCustomFormatScore": 0,
  "order": 0,
  "tags": [
    0
  ]
}
```

<h3 id="putapiv1delayprofileid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|[DelayProfileResource](#schemadelayprofileresource)|false|none|
|» id|body|integer(int32)|false|none|
|» enableUsenet|body|boolean|false|none|
|» enableTorrent|body|boolean|false|none|
|» preferredProtocol|body|[DownloadProtocol](#schemadownloadprotocol)|false|none|
|» usenetDelay|body|integer(int32)|false|none|
|» torrentDelay|body|integer(int32)|false|none|
|» bypassIfHighestQuality|body|boolean|false|none|
|» bypassIfAboveCustomFormatScore|body|boolean|false|none|
|» minimumCustomFormatScore|body|integer(int32)|false|none|
|» order|body|integer(int32)|false|none|
|» tags|body|[integer(int32)]|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» preferredProtocol|unknown|
|» preferredProtocol|usenet|
|» preferredProtocol|torrent|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "enableUsenet": true,
  "enableTorrent": true,
  "preferredProtocol": "unknown",
  "usenetDelay": 0,
  "torrentDelay": 0,
  "bypassIfHighestQuality": true,
  "bypassIfAboveCustomFormatScore": true,
  "minimumCustomFormatScore": 0,
  "order": 0,
  "tags": [
    0
  ]
}
```

<h3 id="putapiv1delayprofileid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[DelayProfileResource](#schemadelayprofileresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## delete/api/v1/delayprofile/{id}

> Code samples

```bash
curl http://localhost:8686/api/v1/delayprofile/0 \
  -X DELETE \
  -H "X-Api-Key: ${API_KEY}"
```

`DELETE /api/v1/delayprofile/{id}`

<h3 id="deleteapiv1delayprofileid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

<h3 id="deleteapiv1delayprofileid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## put/api/v1/delayprofile/reorder/{id}

> Code samples

```bash
curl http://localhost:8686/api/v1/delayprofile/reorder/0 \
  -X PUT \
  -H "X-Api-Key: ${API_KEY}"
```

`PUT /api/v1/delayprofile/reorder/{id}`

<h3 id="putapiv1delayprofilereorderid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|
|afterId|query|integer(int32)|false|none|

<h3 id="putapiv1delayprofilereorderid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="lidarr-diskspace">DiskSpace</h1>

## get/api/v1/diskspace

> Code samples

```bash
curl http://localhost:8686/api/v1/diskspace \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/diskspace`

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "path": "string",
    "label": "string",
    "freeSpace": 0,
    "totalSpace": 0
  }
]
```

<h3 id="getapiv1diskspace-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getapiv1diskspace-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[DiskSpaceResource](#schemadiskspaceresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="lidarr-downloadclient">DownloadClient</h1>

## get/api/v1/downloadclient/{id}

> Code samples

```bash
curl http://localhost:8686/api/v1/downloadclient/0 \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/downloadclient/{id}`

<h3 id="getapiv1downloadclientid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "fields": [
    {
      "order": 0,
      "name": "string",
      "label": "string",
      "unit": "string",
      "helpText": "string",
      "helpTextWarning": "string",
      "helpLink": "string",
      "value": null,
      "type": "string",
      "advanced": true,
      "selectOptions": [
        {
          "value": 0,
          "name": "string",
          "order": 0,
          "hint": "string"
        }
      ],
      "selectOptionsProviderAction": "string",
      "section": "string",
      "hidden": "string",
      "privacy": "normal",
      "placeholder": "string",
      "isFloat": true
    }
  ],
  "implementationName": "string",
  "implementation": "string",
  "configContract": "string",
  "infoLink": "string",
  "message": {
    "message": "string",
    "type": "info"
  },
  "tags": [
    0
  ],
  "presets": [
    {}
  ],
  "enable": true,
  "protocol": "unknown",
  "priority": 0,
  "removeCompletedDownloads": true,
  "removeFailedDownloads": true
}
```

<h3 id="getapiv1downloadclientid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[DownloadClientResource](#schemadownloadclientresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## put/api/v1/downloadclient/{id}

> Code samples

```bash
curl http://localhost:8686/api/v1/downloadclient/0 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "id": 0,
    "name": "string",
    "fields": [
      {
        "order": 0,
        "name": "string",
        "label": "string",
        "unit": "string",
        "helpText": "string",
        "helpTextWarning": "string",
        "helpLink": "string",
        "value": null,
        "type": "string",
        "advanced": true,
        "selectOptions": [
          {
            "value": 0,
            "name": "string",
            "order": 0,
            "hint": "string"
          }
        ],
        "selectOptionsProviderAction": "string",
        "section": "string",
        "hidden": "string",
        "privacy": "normal",
        "placeholder": "string",
        "isFloat": true
      }
    ],
    "implementationName": "string",
    "implementation": "string",
    "configContract": "string",
    "infoLink": "string",
    "message": {
      "message": "string",
      "type": "info"
    },
    "tags": [
      0
    ],
    "presets": [
      {}
    ],
    "enable": true,
    "protocol": "unknown",
    "priority": 0,
    "removeCompletedDownloads": true,
    "removeFailedDownloads": true
  }'
```

`PUT /api/v1/downloadclient/{id}`

> Body parameter

```json
{
  "id": 0,
  "name": "string",
  "fields": [
    {
      "order": 0,
      "name": "string",
      "label": "string",
      "unit": "string",
      "helpText": "string",
      "helpTextWarning": "string",
      "helpLink": "string",
      "value": null,
      "type": "string",
      "advanced": true,
      "selectOptions": [
        {
          "value": 0,
          "name": "string",
          "order": 0,
          "hint": "string"
        }
      ],
      "selectOptionsProviderAction": "string",
      "section": "string",
      "hidden": "string",
      "privacy": "normal",
      "placeholder": "string",
      "isFloat": true
    }
  ],
  "implementationName": "string",
  "implementation": "string",
  "configContract": "string",
  "infoLink": "string",
  "message": {
    "message": "string",
    "type": "info"
  },
  "tags": [
    0
  ],
  "presets": [
    {}
  ],
  "enable": true,
  "protocol": "unknown",
  "priority": 0,
  "removeCompletedDownloads": true,
  "removeFailedDownloads": true
}
```

<h3 id="putapiv1downloadclientid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|
|forceSave|query|boolean|false|none|
|body|body|[DownloadClientResource](#schemadownloadclientresource)|false|none|
|» id|body|integer(int32)|false|none|
|» name|body|string \| null|false|none|
|» fields|body|[[Field](#schemafield)]|false|none|
|» implementationName|body|string \| null|false|none|
|» implementation|body|string \| null|false|none|
|» configContract|body|string \| null|false|none|
|» infoLink|body|string \| null|false|none|
|» message|body|[ProviderMessage](#schemaprovidermessage)|false|none|
|» tags|body|[integer(int32)]|false|none|
|» presets|body|[[DownloadClientResource](#schemadownloadclientresource)]|false|none|
|» enable|body|boolean|false|none|
|» protocol|body|[DownloadProtocol](#schemadownloadprotocol)|false|none|
|» priority|body|integer(int32)|false|none|
|» removeCompletedDownloads|body|boolean|false|none|
|» removeFailedDownloads|body|boolean|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» protocol|unknown|
|» protocol|usenet|
|» protocol|torrent|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "fields": [
    {
      "order": 0,
      "name": "string",
      "label": "string",
      "unit": "string",
      "helpText": "string",
      "helpTextWarning": "string",
      "helpLink": "string",
      "value": null,
      "type": "string",
      "advanced": true,
      "selectOptions": [
        {
          "value": 0,
          "name": "string",
          "order": 0,
          "hint": "string"
        }
      ],
      "selectOptionsProviderAction": "string",
      "section": "string",
      "hidden": "string",
      "privacy": "normal",
      "placeholder": "string",
      "isFloat": true
    }
  ],
  "implementationName": "string",
  "implementation": "string",
  "configContract": "string",
  "infoLink": "string",
  "message": {
    "message": "string",
    "type": "info"
  },
  "tags": [
    0
  ],
  "presets": [
    {}
  ],
  "enable": true,
  "protocol": "unknown",
  "priority": 0,
  "removeCompletedDownloads": true,
  "removeFailedDownloads": true
}
```

<h3 id="putapiv1downloadclientid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[DownloadClientResource](#schemadownloadclientresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## delete/api/v1/downloadclient/{id}

> Code samples

```bash
curl http://localhost:8686/api/v1/downloadclient/0 \
  -X DELETE \
  -H "X-Api-Key: ${API_KEY}"
```

`DELETE /api/v1/downloadclient/{id}`

<h3 id="deleteapiv1downloadclientid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

<h3 id="deleteapiv1downloadclientid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v1/downloadclient

> Code samples

```bash
curl http://localhost:8686/api/v1/downloadclient \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/downloadclient`

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "name": "string",
    "fields": [
      {
        "order": 0,
        "name": "string",
        "label": "string",
        "unit": "string",
        "helpText": "string",
        "helpTextWarning": "string",
        "helpLink": "string",
        "value": null,
        "type": "string",
        "advanced": true,
        "selectOptions": [
          {
            "value": 0,
            "name": "string",
            "order": 0,
            "hint": "string"
          }
        ],
        "selectOptionsProviderAction": "string",
        "section": "string",
        "hidden": "string",
        "privacy": "normal",
        "placeholder": "string",
        "isFloat": true
      }
    ],
    "implementationName": "string",
    "implementation": "string",
    "configContract": "string",
    "infoLink": "string",
    "message": {
      "message": "string",
      "type": "info"
    },
    "tags": [
      0
    ],
    "presets": [
      {}
    ],
    "enable": true,
    "protocol": "unknown",
    "priority": 0,
    "removeCompletedDownloads": true,
    "removeFailedDownloads": true
  }
]
```

<h3 id="getapiv1downloadclient-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getapiv1downloadclient-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[DownloadClientResource](#schemadownloadclientresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## post/api/v1/downloadclient

> Code samples

```bash
curl http://localhost:8686/api/v1/downloadclient \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "id": 0,
    "name": "string",
    "fields": [
      {
        "order": 0,
        "name": "string",
        "label": "string",
        "unit": "string",
        "helpText": "string",
        "helpTextWarning": "string",
        "helpLink": "string",
        "value": null,
        "type": "string",
        "advanced": true,
        "selectOptions": [
          {
            "value": 0,
            "name": "string",
            "order": 0,
            "hint": "string"
          }
        ],
        "selectOptionsProviderAction": "string",
        "section": "string",
        "hidden": "string",
        "privacy": "normal",
        "placeholder": "string",
        "isFloat": true
      }
    ],
    "implementationName": "string",
    "implementation": "string",
    "configContract": "string",
    "infoLink": "string",
    "message": {
      "message": "string",
      "type": "info"
    },
    "tags": [
      0
    ],
    "presets": [
      {}
    ],
    "enable": true,
    "protocol": "unknown",
    "priority": 0,
    "removeCompletedDownloads": true,
    "removeFailedDownloads": true
  }'
```

`POST /api/v1/downloadclient`

> Body parameter

```json
{
  "id": 0,
  "name": "string",
  "fields": [
    {
      "order": 0,
      "name": "string",
      "label": "string",
      "unit": "string",
      "helpText": "string",
      "helpTextWarning": "string",
      "helpLink": "string",
      "value": null,
      "type": "string",
      "advanced": true,
      "selectOptions": [
        {
          "value": 0,
          "name": "string",
          "order": 0,
          "hint": "string"
        }
      ],
      "selectOptionsProviderAction": "string",
      "section": "string",
      "hidden": "string",
      "privacy": "normal",
      "placeholder": "string",
      "isFloat": true
    }
  ],
  "implementationName": "string",
  "implementation": "string",
  "configContract": "string",
  "infoLink": "string",
  "message": {
    "message": "string",
    "type": "info"
  },
  "tags": [
    0
  ],
  "presets": [
    {}
  ],
  "enable": true,
  "protocol": "unknown",
  "priority": 0,
  "removeCompletedDownloads": true,
  "removeFailedDownloads": true
}
```

<h3 id="postapiv1downloadclient-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|forceSave|query|boolean|false|none|
|body|body|[DownloadClientResource](#schemadownloadclientresource)|false|none|
|» id|body|integer(int32)|false|none|
|» name|body|string \| null|false|none|
|» fields|body|[[Field](#schemafield)]|false|none|
|» implementationName|body|string \| null|false|none|
|» implementation|body|string \| null|false|none|
|» configContract|body|string \| null|false|none|
|» infoLink|body|string \| null|false|none|
|» message|body|[ProviderMessage](#schemaprovidermessage)|false|none|
|» tags|body|[integer(int32)]|false|none|
|» presets|body|[[DownloadClientResource](#schemadownloadclientresource)]|false|none|
|» enable|body|boolean|false|none|
|» protocol|body|[DownloadProtocol](#schemadownloadprotocol)|false|none|
|» priority|body|integer(int32)|false|none|
|» removeCompletedDownloads|body|boolean|false|none|
|» removeFailedDownloads|body|boolean|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» protocol|unknown|
|» protocol|usenet|
|» protocol|torrent|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "fields": [
    {
      "order": 0,
      "name": "string",
      "label": "string",
      "unit": "string",
      "helpText": "string",
      "helpTextWarning": "string",
      "helpLink": "string",
      "value": null,
      "type": "string",
      "advanced": true,
      "selectOptions": [
        {
          "value": 0,
          "name": "string",
          "order": 0,
          "hint": "string"
        }
      ],
      "selectOptionsProviderAction": "string",
      "section": "string",
      "hidden": "string",
      "privacy": "normal",
      "placeholder": "string",
      "isFloat": true
    }
  ],
  "implementationName": "string",
  "implementation": "string",
  "configContract": "string",
  "infoLink": "string",
  "message": {
    "message": "string",
    "type": "info"
  },
  "tags": [
    0
  ],
  "presets": [
    {}
  ],
  "enable": true,
  "protocol": "unknown",
  "priority": 0,
  "removeCompletedDownloads": true,
  "removeFailedDownloads": true
}
```

<h3 id="postapiv1downloadclient-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[DownloadClientResource](#schemadownloadclientresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## put/api/v1/downloadclient/bulk

> Code samples

```bash
curl http://localhost:8686/api/v1/downloadclient/bulk \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "ids": [
      0
    ],
    "tags": [
      0
    ],
    "applyTags": "add",
    "enable": true,
    "priority": 0,
    "removeCompletedDownloads": true,
    "removeFailedDownloads": true
  }'
```

`PUT /api/v1/downloadclient/bulk`

> Body parameter

```json
{
  "ids": [
    0
  ],
  "tags": [
    0
  ],
  "applyTags": "add",
  "enable": true,
  "priority": 0,
  "removeCompletedDownloads": true,
  "removeFailedDownloads": true
}
```

<h3 id="putapiv1downloadclientbulk-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[DownloadClientBulkResource](#schemadownloadclientbulkresource)|false|none|
|» ids|body|[integer(int32)]|false|none|
|» tags|body|[integer(int32)]|false|none|
|» applyTags|body|[ApplyTags](#schemaapplytags)|false|none|
|» enable|body|boolean \| null|false|none|
|» priority|body|integer(int32) \| null|false|none|
|» removeCompletedDownloads|body|boolean \| null|false|none|
|» removeFailedDownloads|body|boolean \| null|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» applyTags|add|
|» applyTags|remove|
|» applyTags|replace|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "fields": [
    {
      "order": 0,
      "name": "string",
      "label": "string",
      "unit": "string",
      "helpText": "string",
      "helpTextWarning": "string",
      "helpLink": "string",
      "value": null,
      "type": "string",
      "advanced": true,
      "selectOptions": [
        {
          "value": 0,
          "name": "string",
          "order": 0,
          "hint": "string"
        }
      ],
      "selectOptionsProviderAction": "string",
      "section": "string",
      "hidden": "string",
      "privacy": "normal",
      "placeholder": "string",
      "isFloat": true
    }
  ],
  "implementationName": "string",
  "implementation": "string",
  "configContract": "string",
  "infoLink": "string",
  "message": {
    "message": "string",
    "type": "info"
  },
  "tags": [
    0
  ],
  "presets": [
    {}
  ],
  "enable": true,
  "protocol": "unknown",
  "priority": 0,
  "removeCompletedDownloads": true,
  "removeFailedDownloads": true
}
```

<h3 id="putapiv1downloadclientbulk-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[DownloadClientResource](#schemadownloadclientresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## delete/api/v1/downloadclient/bulk

> Code samples

```bash
curl http://localhost:8686/api/v1/downloadclient/bulk \
  -X DELETE \
  -H 'Content-Type: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "ids": [
      0
    ],
    "tags": [
      0
    ],
    "applyTags": "add",
    "enable": true,
    "priority": 0,
    "removeCompletedDownloads": true,
    "removeFailedDownloads": true
  }'
```

`DELETE /api/v1/downloadclient/bulk`

> Body parameter

```json
{
  "ids": [
    0
  ],
  "tags": [
    0
  ],
  "applyTags": "add",
  "enable": true,
  "priority": 0,
  "removeCompletedDownloads": true,
  "removeFailedDownloads": true
}
```

<h3 id="deleteapiv1downloadclientbulk-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[DownloadClientBulkResource](#schemadownloadclientbulkresource)|false|none|
|» ids|body|[integer(int32)]|false|none|
|» tags|body|[integer(int32)]|false|none|
|» applyTags|body|[ApplyTags](#schemaapplytags)|false|none|
|» enable|body|boolean \| null|false|none|
|» priority|body|integer(int32) \| null|false|none|
|» removeCompletedDownloads|body|boolean \| null|false|none|
|» removeFailedDownloads|body|boolean \| null|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» applyTags|add|
|» applyTags|remove|
|» applyTags|replace|

<h3 id="deleteapiv1downloadclientbulk-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v1/downloadclient/schema

> Code samples

```bash
curl http://localhost:8686/api/v1/downloadclient/schema \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/downloadclient/schema`

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "name": "string",
    "fields": [
      {
        "order": 0,
        "name": "string",
        "label": "string",
        "unit": "string",
        "helpText": "string",
        "helpTextWarning": "string",
        "helpLink": "string",
        "value": null,
        "type": "string",
        "advanced": true,
        "selectOptions": [
          {
            "value": 0,
            "name": "string",
            "order": 0,
            "hint": "string"
          }
        ],
        "selectOptionsProviderAction": "string",
        "section": "string",
        "hidden": "string",
        "privacy": "normal",
        "placeholder": "string",
        "isFloat": true
      }
    ],
    "implementationName": "string",
    "implementation": "string",
    "configContract": "string",
    "infoLink": "string",
    "message": {
      "message": "string",
      "type": "info"
    },
    "tags": [
      0
    ],
    "presets": [
      {}
    ],
    "enable": true,
    "protocol": "unknown",
    "priority": 0,
    "removeCompletedDownloads": true,
    "removeFailedDownloads": true
  }
]
```

<h3 id="getapiv1downloadclientschema-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getapiv1downloadclientschema-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[DownloadClientResource](#schemadownloadclientresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## post/api/v1/downloadclient/test

> Code samples

```bash
curl http://localhost:8686/api/v1/downloadclient/test \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "id": 0,
    "name": "string",
    "fields": [
      {
        "order": 0,
        "name": "string",
        "label": "string",
        "unit": "string",
        "helpText": "string",
        "helpTextWarning": "string",
        "helpLink": "string",
        "value": null,
        "type": "string",
        "advanced": true,
        "selectOptions": [
          {
            "value": 0,
            "name": "string",
            "order": 0,
            "hint": "string"
          }
        ],
        "selectOptionsProviderAction": "string",
        "section": "string",
        "hidden": "string",
        "privacy": "normal",
        "placeholder": "string",
        "isFloat": true
      }
    ],
    "implementationName": "string",
    "implementation": "string",
    "configContract": "string",
    "infoLink": "string",
    "message": {
      "message": "string",
      "type": "info"
    },
    "tags": [
      0
    ],
    "presets": [
      {}
    ],
    "enable": true,
    "protocol": "unknown",
    "priority": 0,
    "removeCompletedDownloads": true,
    "removeFailedDownloads": true
  }'
```

`POST /api/v1/downloadclient/test`

> Body parameter

```json
{
  "id": 0,
  "name": "string",
  "fields": [
    {
      "order": 0,
      "name": "string",
      "label": "string",
      "unit": "string",
      "helpText": "string",
      "helpTextWarning": "string",
      "helpLink": "string",
      "value": null,
      "type": "string",
      "advanced": true,
      "selectOptions": [
        {
          "value": 0,
          "name": "string",
          "order": 0,
          "hint": "string"
        }
      ],
      "selectOptionsProviderAction": "string",
      "section": "string",
      "hidden": "string",
      "privacy": "normal",
      "placeholder": "string",
      "isFloat": true
    }
  ],
  "implementationName": "string",
  "implementation": "string",
  "configContract": "string",
  "infoLink": "string",
  "message": {
    "message": "string",
    "type": "info"
  },
  "tags": [
    0
  ],
  "presets": [
    {}
  ],
  "enable": true,
  "protocol": "unknown",
  "priority": 0,
  "removeCompletedDownloads": true,
  "removeFailedDownloads": true
}
```

<h3 id="postapiv1downloadclienttest-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|forceTest|query|boolean|false|none|
|body|body|[DownloadClientResource](#schemadownloadclientresource)|false|none|
|» id|body|integer(int32)|false|none|
|» name|body|string \| null|false|none|
|» fields|body|[[Field](#schemafield)]|false|none|
|» implementationName|body|string \| null|false|none|
|» implementation|body|string \| null|false|none|
|» configContract|body|string \| null|false|none|
|» infoLink|body|string \| null|false|none|
|» message|body|[ProviderMessage](#schemaprovidermessage)|false|none|
|» tags|body|[integer(int32)]|false|none|
|» presets|body|[[DownloadClientResource](#schemadownloadclientresource)]|false|none|
|» enable|body|boolean|false|none|
|» protocol|body|[DownloadProtocol](#schemadownloadprotocol)|false|none|
|» priority|body|integer(int32)|false|none|
|» removeCompletedDownloads|body|boolean|false|none|
|» removeFailedDownloads|body|boolean|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» protocol|unknown|
|» protocol|usenet|
|» protocol|torrent|

<h3 id="postapiv1downloadclienttest-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## post/api/v1/downloadclient/testall

> Code samples

```bash
curl http://localhost:8686/api/v1/downloadclient/testall \
  -X POST \
  -H "X-Api-Key: ${API_KEY}"
```

`POST /api/v1/downloadclient/testall`

<h3 id="postapiv1downloadclienttestall-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## post/api/v1/downloadclient/action/{name}

> Code samples

```bash
curl http://localhost:8686/api/v1/downloadclient/action/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "id": 0,
    "name": "string",
    "fields": [
      {
        "order": 0,
        "name": "string",
        "label": "string",
        "unit": "string",
        "helpText": "string",
        "helpTextWarning": "string",
        "helpLink": "string",
        "value": null,
        "type": "string",
        "advanced": true,
        "selectOptions": [
          {
            "value": 0,
            "name": "string",
            "order": 0,
            "hint": "string"
          }
        ],
        "selectOptionsProviderAction": "string",
        "section": "string",
        "hidden": "string",
        "privacy": "normal",
        "placeholder": "string",
        "isFloat": true
      }
    ],
    "implementationName": "string",
    "implementation": "string",
    "configContract": "string",
    "infoLink": "string",
    "message": {
      "message": "string",
      "type": "info"
    },
    "tags": [
      0
    ],
    "presets": [
      {}
    ],
    "enable": true,
    "protocol": "unknown",
    "priority": 0,
    "removeCompletedDownloads": true,
    "removeFailedDownloads": true
  }'
```

`POST /api/v1/downloadclient/action/{name}`

> Body parameter

```json
{
  "id": 0,
  "name": "string",
  "fields": [
    {
      "order": 0,
      "name": "string",
      "label": "string",
      "unit": "string",
      "helpText": "string",
      "helpTextWarning": "string",
      "helpLink": "string",
      "value": null,
      "type": "string",
      "advanced": true,
      "selectOptions": [
        {
          "value": 0,
          "name": "string",
          "order": 0,
          "hint": "string"
        }
      ],
      "selectOptionsProviderAction": "string",
      "section": "string",
      "hidden": "string",
      "privacy": "normal",
      "placeholder": "string",
      "isFloat": true
    }
  ],
  "implementationName": "string",
  "implementation": "string",
  "configContract": "string",
  "infoLink": "string",
  "message": {
    "message": "string",
    "type": "info"
  },
  "tags": [
    0
  ],
  "presets": [
    {}
  ],
  "enable": true,
  "protocol": "unknown",
  "priority": 0,
  "removeCompletedDownloads": true,
  "removeFailedDownloads": true
}
```

<h3 id="postapiv1downloadclientactionname-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|none|
|body|body|[DownloadClientResource](#schemadownloadclientresource)|false|none|
|» id|body|integer(int32)|false|none|
|» name|body|string \| null|false|none|
|» fields|body|[[Field](#schemafield)]|false|none|
|» implementationName|body|string \| null|false|none|
|» implementation|body|string \| null|false|none|
|» configContract|body|string \| null|false|none|
|» infoLink|body|string \| null|false|none|
|» message|body|[ProviderMessage](#schemaprovidermessage)|false|none|
|» tags|body|[integer(int32)]|false|none|
|» presets|body|[[DownloadClientResource](#schemadownloadclientresource)]|false|none|
|» enable|body|boolean|false|none|
|» protocol|body|[DownloadProtocol](#schemadownloadprotocol)|false|none|
|» priority|body|integer(int32)|false|none|
|» removeCompletedDownloads|body|boolean|false|none|
|» removeFailedDownloads|body|boolean|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» protocol|unknown|
|» protocol|usenet|
|» protocol|torrent|

<h3 id="postapiv1downloadclientactionname-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="lidarr-downloadclientconfig">DownloadClientConfig</h1>

## get/api/v1/config/downloadclient/{id}

> Code samples

```bash
curl http://localhost:8686/api/v1/config/downloadclient/0 \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/config/downloadclient/{id}`

<h3 id="getapiv1configdownloadclientid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "downloadClientWorkingFolders": "string",
  "enableCompletedDownloadHandling": true,
  "autoRedownloadFailed": true,
  "autoRedownloadFailedFromInteractiveSearch": true
}
```

<h3 id="getapiv1configdownloadclientid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[DownloadClientConfigResource](#schemadownloadclientconfigresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## put/api/v1/config/downloadclient/{id}

> Code samples

```bash
curl http://localhost:8686/api/v1/config/downloadclient/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "id": 0,
    "downloadClientWorkingFolders": "string",
    "enableCompletedDownloadHandling": true,
    "autoRedownloadFailed": true,
    "autoRedownloadFailedFromInteractiveSearch": true
  }'
```

`PUT /api/v1/config/downloadclient/{id}`

> Body parameter

```json
{
  "id": 0,
  "downloadClientWorkingFolders": "string",
  "enableCompletedDownloadHandling": true,
  "autoRedownloadFailed": true,
  "autoRedownloadFailedFromInteractiveSearch": true
}
```

<h3 id="putapiv1configdownloadclientid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|[DownloadClientConfigResource](#schemadownloadclientconfigresource)|false|none|
|» id|body|integer(int32)|false|none|
|» downloadClientWorkingFolders|body|string \| null|false|none|
|» enableCompletedDownloadHandling|body|boolean|false|none|
|» autoRedownloadFailed|body|boolean|false|none|
|» autoRedownloadFailedFromInteractiveSearch|body|boolean|false|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "downloadClientWorkingFolders": "string",
  "enableCompletedDownloadHandling": true,
  "autoRedownloadFailed": true,
  "autoRedownloadFailedFromInteractiveSearch": true
}
```

<h3 id="putapiv1configdownloadclientid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[DownloadClientConfigResource](#schemadownloadclientconfigresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v1/config/downloadclient

> Code samples

```bash
curl http://localhost:8686/api/v1/config/downloadclient \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/config/downloadclient`

> Example responses

> 200 Response

```json
{
  "id": 0,
  "downloadClientWorkingFolders": "string",
  "enableCompletedDownloadHandling": true,
  "autoRedownloadFailed": true,
  "autoRedownloadFailedFromInteractiveSearch": true
}
```

<h3 id="getapiv1configdownloadclient-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[DownloadClientConfigResource](#schemadownloadclientconfigresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="lidarr-filesystem">FileSystem</h1>

## get/api/v1/filesystem

> Code samples

```bash
curl http://localhost:8686/api/v1/filesystem \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/filesystem`

<h3 id="getapiv1filesystem-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|path|query|string|false|none|
|includeFiles|query|boolean|false|none|
|allowFoldersWithoutTrailingSlashes|query|boolean|false|none|

<h3 id="getapiv1filesystem-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v1/filesystem/type

> Code samples

```bash
curl http://localhost:8686/api/v1/filesystem/type \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/filesystem/type`

<h3 id="getapiv1filesystemtype-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|path|query|string|false|none|

<h3 id="getapiv1filesystemtype-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v1/filesystem/mediafiles

> Code samples

```bash
curl http://localhost:8686/api/v1/filesystem/mediafiles \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/filesystem/mediafiles`

<h3 id="getapiv1filesystemmediafiles-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|path|query|string|false|none|

<h3 id="getapiv1filesystemmediafiles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="lidarr-health">Health</h1>

## get/api/v1/health

> Code samples

```bash
curl http://localhost:8686/api/v1/health \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/health`

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "source": "string",
    "type": "ok",
    "message": "string",
    "wikiUrl": "string"
  }
]
```

<h3 id="getapiv1health-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getapiv1health-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[HealthResource](#schemahealthresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="lidarr-history">History</h1>

## get/api/v1/history

> Code samples

```bash
curl http://localhost:8686/api/v1/history \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/history`

<h3 id="getapiv1history-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer(int32)|false|none|
|pageSize|query|integer(int32)|false|none|
|sortKey|query|string|false|none|
|sortDirection|query|[SortDirection](#schemasortdirection)|false|none|
|includeArtist|query|boolean|false|none|
|includeAlbum|query|boolean|false|none|
|includeTrack|query|boolean|false|none|
|eventType|query|[integer(int32)]|false|none|
|albumId|query|integer(int32)|false|none|
|downloadId|query|string|false|none|
|artistIds|query|[integer(int32)]|false|none|
|quality|query|[integer(int32)]|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sortDirection|default|
|sortDirection|ascending|
|sortDirection|descending|

> Example responses

> 200 Response

```json
{
  "page": 0,
  "pageSize": 0,
  "sortKey": "string",
  "sortDirection": "default",
  "totalRecords": 0,
  "records": [
    {
      "id": 0,
      "albumId": 0,
      "artistId": 0,
      "trackId": 0,
      "sourceTitle": "string",
      "quality": {
        "quality": {
          "id": 0,
          "name": "string"
        },
        "revision": {
          "version": 0,
          "real": 0,
          "isRepack": true
        }
      },
      "customFormats": [
        {
          "id": 0,
          "name": "string",
          "includeCustomFormatWhenRenaming": true,
          "specifications": [
            {
              "id": 0,
              "name": "string",
              "implementation": "string",
              "implementationName": "string",
              "infoLink": "string",
              "negate": true,
              "required": true,
              "fields": [
                {
                  "order": 0,
                  "name": "string",
                  "label": "string",
                  "unit": "string",
                  "helpText": "string",
                  "helpTextWarning": "string",
                  "helpLink": "string",
                  "value": null,
                  "type": "string",
                  "advanced": true,
                  "selectOptions": [
                    {
                      "value": 0,
                      "name": "string",
                      "order": 0,
                      "hint": "string"
                    }
                  ],
                  "selectOptionsProviderAction": "string",
                  "section": "string",
                  "hidden": "string",
                  "privacy": "normal",
                  "placeholder": "string",
                  "isFloat": true
                }
              ],
              "presets": [
                {}
              ]
            }
          ]
        }
      ],
      "customFormatScore": 0,
      "qualityCutoffNotMet": true,
      "date": "1970-01-01T00:00:00Z",
      "downloadId": "string",
      "eventType": "unknown",
      "data": {
        "property1": "string",
        "property2": "string"
      },
      "album": {
        "id": 0,
        "title": "string",
        "disambiguation": "string",
        "overview": "string",
        "artistId": 0,
        "foreignAlbumId": "string",
        "monitored": true,
        "anyReleaseOk": true,
        "profileId": 0,
        "duration": 0,
        "albumType": "string",
        "secondaryTypes": [
          "string"
        ],
        "mediumCount": 0,
        "ratings": {
          "votes": 0,
          "value": 0
        },
        "releaseDate": "1970-01-01T00:00:00Z",
        "releases": [
          {
            "id": 0,
            "albumId": 0,
            "foreignReleaseId": "string",
            "title": "string",
            "status": "string",
            "duration": 0,
            "trackCount": 0,
            "media": [
              {
                "mediumNumber": 0,
                "mediumName": "string",
                "mediumFormat": "string"
              }
            ],
            "mediumCount": 0,
            "disambiguation": "string",
            "country": [
              "string"
            ],
            "label": [
              "string"
            ],
            "format": "string",
            "monitored": true
          }
        ],
        "genres": [
          "string"
        ],
        "media": [
          {
            "mediumNumber": 0,
            "mediumName": "string",
            "mediumFormat": "string"
          }
        ],
        "artist": {},
        "images": [
          {
            "url": "string",
            "coverType": "unknown",
            "extension": "string",
            "remoteUrl": "string"
          }
        ],
        "links": [
          {
            "url": "string",
            "name": "string"
          }
        ],
        "lastSearchTime": "1970-01-01T00:00:00Z",
        "statistics": {
          "trackFileCount": 0,
          "trackCount": 0,
          "totalTrackCount": 0,
          "sizeOnDisk": 0,
          "percentOfTracks": 0
        },
        "addOptions": {
          "addType": "automatic",
          "searchForNewAlbum": true
        },
        "remoteCover": "string"
      },
      "artist": {
        "id": 0,
        "status": "continuing",
        "ended": true,
        "artistName": "string",
        "foreignArtistId": "string",
        "mbId": "string",
        "tadbId": 0,
        "discogsId": 0,
        "allMusicId": "string",
        "overview": "string",
        "artistType": "string",
        "disambiguation": "string",
        "links": [
          {
            "url": "string",
            "name": "string"
          }
        ],
        "nextAlbum": {},
        "lastAlbum": {},
        "images": [
          {
            "url": "string",
            "coverType": "unknown",
            "extension": "string",
            "remoteUrl": "string"
          }
        ],
        "members": [
          {
            "name": "string",
            "instrument": "string",
            "images": [
              {
                "url": "string",
                "coverType": "unknown",
                "extension": "string",
                "remoteUrl": "string"
              }
            ]
          }
        ],
        "remotePoster": "string",
        "path": "string",
        "qualityProfileId": 0,
        "metadataProfileId": 0,
        "monitored": true,
        "monitorNewItems": "all",
        "rootFolderPath": "string",
        "folder": "string",
        "genres": [
          "string"
        ],
        "cleanName": "string",
        "sortName": "string",
        "tags": [
          0
        ],
        "added": "1970-01-01T00:00:00Z",
        "addOptions": {
          "monitor": "all",
          "albumsToMonitor": [
            "string"
          ],
          "monitored": true,
          "searchForMissingAlbums": true
        },
        "ratings": {
          "votes": 0,
          "value": 0
        },
        "statistics": {
          "albumCount": 0,
          "trackFileCount": 0,
          "trackCount": 0,
          "totalTrackCount": 0,
          "sizeOnDisk": 0,
          "percentOfTracks": 0
        }
      },
      "track": {
        "id": 0,
        "artistId": 0,
        "foreignTrackId": "string",
        "foreignRecordingId": "string",
        "trackFileId": 0,
        "albumId": 0,
        "explicit": true,
        "absoluteTrackNumber": 0,
        "trackNumber": "string",
        "title": "string",
        "duration": 0,
        "trackFile": {
          "id": 0,
          "artistId": 0,
          "albumId": 0,
          "path": "string",
          "size": 0,
          "dateAdded": "1970-01-01T00:00:00Z",
          "sceneName": "string",
          "releaseGroup": "string",
          "quality": {
            "quality": {
              "id": 0,
              "name": "string"
            },
            "revision": {
              "version": 0,
              "real": 0,
              "isRepack": true
            }
          },
          "qualityWeight": 0,
          "customFormats": [
            {
              "id": 0,
              "name": "string",
              "includeCustomFormatWhenRenaming": true,
              "specifications": [
                {
                  "id": 0,
                  "name": "string",
                  "implementation": "string",
                  "implementationName": "string",
                  "infoLink": "string",
                  "negate": true,
                  "required": true,
                  "fields": [
                    {
                      "order": 0,
                      "name": "string",
                      "label": "string",
                      "unit": "string",
                      "helpText": "string",
                      "helpTextWarning": "string",
                      "helpLink": "string",
                      "value": null,
                      "type": "string",
                      "advanced": true,
                      "selectOptions": [
                        {
                          "value": 0,
                          "name": "string",
                          "order": 0,
                          "hint": "string"
                        }
                      ],
                      "selectOptionsProviderAction": "string",
                      "section": "string",
                      "hidden": "string",
                      "privacy": "normal",
                      "placeholder": "string",
                      "isFloat": true
                    }
                  ],
                  "presets": [
                    {}
                  ]
                }
              ]
            }
          ],
          "customFormatScore": 0,
          "indexerFlags": 0,
          "mediaInfo": {
            "id": 0,
            "audioChannels": 0,
            "audioBitRate": "string",
            "audioCodec": "string",
            "audioBits": "string",
            "audioSampleRate": "string"
          },
          "qualityCutoffNotMet": true,
          "audioTags": {
            "title": "string",
            "cleanTitle": "string",
            "artistTitle": "string",
            "albumTitle": "string",
            "artistTitleInfo": {
              "title": "string",
              "titleWithoutYear": "string",
              "year": 0
            },
            "artistMBId": "string",
            "albumMBId": "string",
            "releaseMBId": "string",
            "recordingMBId": "string",
            "trackMBId": "string",
            "discNumber": 0,
            "discCount": 0,
            "country": {
              "twoLetterCode": "string",
              "name": "string"
            },
            "year": 0,
            "label": "string",
            "catalogNumber": "string",
            "disambiguation": "string",
            "duration": "string",
            "quality": {
              "quality": {
                "id": 0,
                "name": "string"
              },
              "revision": {
                "version": 0,
                "real": 0,
                "isRepack": true
              }
            },
            "mediaInfo": {
              "audioFormat": "string",
              "audioBitrate": 0,
              "audioChannels": 0,
              "audioBits": 0,
              "audioSampleRate": 0
            },
            "trackNumbers": [
              0
            ],
            "releaseGroup": "string",
            "releaseHash": "string"
          }
        },
        "mediumNumber": 0,
        "hasFile": true,
        "artist": {
          "id": 0,
          "status": "continuing",
          "ended": true,
          "artistName": "string",
          "foreignArtistId": "string",
          "mbId": "string",
          "tadbId": 0,
          "discogsId": 0,
          "allMusicId": "string",
          "overview": "string",
          "artistType": "string",
          "disambiguation": "string",
          "links": [
            {
              "url": "string",
              "name": "string"
            }
          ],
          "nextAlbum": {},
          "lastAlbum": {},
          "images": [
            {
              "url": "string",
              "coverType": "unknown",
              "extension": "string",
              "remoteUrl": "string"
            }
          ],
          "members": [
            {
              "name": "string",
              "instrument": "string",
              "images": [
                {
                  "url": "string",
                  "coverType": "unknown",
                  "extension": "string",
                  "remoteUrl": "string"
                }
              ]
            }
          ],
          "remotePoster": "string",
          "path": "string",
          "qualityProfileId": 0,
          "metadataProfileId": 0,
          "monitored": true,
          "monitorNewItems": "all",
          "rootFolderPath": "string",
          "folder": "string",
          "genres": [
            "string"
          ],
          "cleanName": "string",
          "sortName": "string",
          "tags": [
            0
          ],
          "added": "1970-01-01T00:00:00Z",
          "addOptions": {
            "monitor": "all",
            "albumsToMonitor": [
              "string"
            ],
            "monitored": true,
            "searchForMissingAlbums": true
          },
          "ratings": {
            "votes": 0,
            "value": 0
          },
          "statistics": {
            "albumCount": 0,
            "trackFileCount": 0,
            "trackCount": 0,
            "totalTrackCount": 0,
            "sizeOnDisk": 0,
            "percentOfTracks": 0
          }
        },
        "ratings": {
          "votes": 0,
          "value": 0
        }
      }
    }
  ]
}
```

<h3 id="getapiv1history-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[HistoryResourcePagingResource](#schemahistoryresourcepagingresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v1/history/since

> Code samples

```bash
curl http://localhost:8686/api/v1/history/since \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/history/since`

<h3 id="getapiv1historysince-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|date|query|string(date-time)|false|none|
|eventType|query|[EntityHistoryEventType](#schemaentityhistoryeventtype)|false|none|
|includeArtist|query|boolean|false|none|
|includeAlbum|query|boolean|false|none|
|includeTrack|query|boolean|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|eventType|unknown|
|eventType|grabbed|
|eventType|artistFolderImported|
|eventType|trackFileImported|
|eventType|downloadFailed|
|eventType|trackFileDeleted|
|eventType|trackFileRenamed|
|eventType|albumImportIncomplete|
|eventType|downloadImported|
|eventType|trackFileRetagged|
|eventType|downloadIgnored|

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "albumId": 0,
    "artistId": 0,
    "trackId": 0,
    "sourceTitle": "string",
    "quality": {
      "quality": {
        "id": 0,
        "name": "string"
      },
      "revision": {
        "version": 0,
        "real": 0,
        "isRepack": true
      }
    },
    "customFormats": [
      {
        "id": 0,
        "name": "string",
        "includeCustomFormatWhenRenaming": true,
        "specifications": [
          {
            "id": 0,
            "name": "string",
            "implementation": "string",
            "implementationName": "string",
            "infoLink": "string",
            "negate": true,
            "required": true,
            "fields": [
              {
                "order": 0,
                "name": "string",
                "label": "string",
                "unit": "string",
                "helpText": "string",
                "helpTextWarning": "string",
                "helpLink": "string",
                "value": null,
                "type": "string",
                "advanced": true,
                "selectOptions": [
                  {
                    "value": 0,
                    "name": "string",
                    "order": 0,
                    "hint": "string"
                  }
                ],
                "selectOptionsProviderAction": "string",
                "section": "string",
                "hidden": "string",
                "privacy": "normal",
                "placeholder": "string",
                "isFloat": true
              }
            ],
            "presets": [
              {}
            ]
          }
        ]
      }
    ],
    "customFormatScore": 0,
    "qualityCutoffNotMet": true,
    "date": "1970-01-01T00:00:00Z",
    "downloadId": "string",
    "eventType": "unknown",
    "data": {
      "property1": "string",
      "property2": "string"
    },
    "album": {
      "id": 0,
      "title": "string",
      "disambiguation": "string",
      "overview": "string",
      "artistId": 0,
      "foreignAlbumId": "string",
      "monitored": true,
      "anyReleaseOk": true,
      "profileId": 0,
      "duration": 0,
      "albumType": "string",
      "secondaryTypes": [
        "string"
      ],
      "mediumCount": 0,
      "ratings": {
        "votes": 0,
        "value": 0
      },
      "releaseDate": "1970-01-01T00:00:00Z",
      "releases": [
        {
          "id": 0,
          "albumId": 0,
          "foreignReleaseId": "string",
          "title": "string",
          "status": "string",
          "duration": 0,
          "trackCount": 0,
          "media": [
            {
              "mediumNumber": 0,
              "mediumName": "string",
              "mediumFormat": "string"
            }
          ],
          "mediumCount": 0,
          "disambiguation": "string",
          "country": [
            "string"
          ],
          "label": [
            "string"
          ],
          "format": "string",
          "monitored": true
        }
      ],
      "genres": [
        "string"
      ],
      "media": [
        {
          "mediumNumber": 0,
          "mediumName": "string",
          "mediumFormat": "string"
        }
      ],
      "artist": {},
      "images": [
        {
          "url": "string",
          "coverType": "unknown",
          "extension": "string",
          "remoteUrl": "string"
        }
      ],
      "links": [
        {
          "url": "string",
          "name": "string"
        }
      ],
      "lastSearchTime": "1970-01-01T00:00:00Z",
      "statistics": {
        "trackFileCount": 0,
        "trackCount": 0,
        "totalTrackCount": 0,
        "sizeOnDisk": 0,
        "percentOfTracks": 0
      },
      "addOptions": {
        "addType": "automatic",
        "searchForNewAlbum": true
      },
      "remoteCover": "string"
    },
    "artist": {
      "id": 0,
      "status": "continuing",
      "ended": true,
      "artistName": "string",
      "foreignArtistId": "string",
      "mbId": "string",
      "tadbId": 0,
      "discogsId": 0,
      "allMusicId": "string",
      "overview": "string",
      "artistType": "string",
      "disambiguation": "string",
      "links": [
        {
          "url": "string",
          "name": "string"
        }
      ],
      "nextAlbum": {},
      "lastAlbum": {},
      "images": [
        {
          "url": "string",
          "coverType": "unknown",
          "extension": "string",
          "remoteUrl": "string"
        }
      ],
      "members": [
        {
          "name": "string",
          "instrument": "string",
          "images": [
            {
              "url": "string",
              "coverType": "unknown",
              "extension": "string",
              "remoteUrl": "string"
            }
          ]
        }
      ],
      "remotePoster": "string",
      "path": "string",
      "qualityProfileId": 0,
      "metadataProfileId": 0,
      "monitored": true,
      "monitorNewItems": "all",
      "rootFolderPath": "string",
      "folder": "string",
      "genres": [
        "string"
      ],
      "cleanName": "string",
      "sortName": "string",
      "tags": [
        0
      ],
      "added": "1970-01-01T00:00:00Z",
      "addOptions": {
        "monitor": "all",
        "albumsToMonitor": [
          "string"
        ],
        "monitored": true,
        "searchForMissingAlbums": true
      },
      "ratings": {
        "votes": 0,
        "value": 0
      },
      "statistics": {
        "albumCount": 0,
        "trackFileCount": 0,
        "trackCount": 0,
        "totalTrackCount": 0,
        "sizeOnDisk": 0,
        "percentOfTracks": 0
      }
    },
    "track": {
      "id": 0,
      "artistId": 0,
      "foreignTrackId": "string",
      "foreignRecordingId": "string",
      "trackFileId": 0,
      "albumId": 0,
      "explicit": true,
      "absoluteTrackNumber": 0,
      "trackNumber": "string",
      "title": "string",
      "duration": 0,
      "trackFile": {
        "id": 0,
        "artistId": 0,
        "albumId": 0,
        "path": "string",
        "size": 0,
        "dateAdded": "1970-01-01T00:00:00Z",
        "sceneName": "string",
        "releaseGroup": "string",
        "quality": {
          "quality": {
            "id": 0,
            "name": "string"
          },
          "revision": {
            "version": 0,
            "real": 0,
            "isRepack": true
          }
        },
        "qualityWeight": 0,
        "customFormats": [
          {
            "id": 0,
            "name": "string",
            "includeCustomFormatWhenRenaming": true,
            "specifications": [
              {
                "id": 0,
                "name": "string",
                "implementation": "string",
                "implementationName": "string",
                "infoLink": "string",
                "negate": true,
                "required": true,
                "fields": [
                  {
                    "order": 0,
                    "name": "string",
                    "label": "string",
                    "unit": "string",
                    "helpText": "string",
                    "helpTextWarning": "string",
                    "helpLink": "string",
                    "value": null,
                    "type": "string",
                    "advanced": true,
                    "selectOptions": [
                      {
                        "value": 0,
                        "name": "string",
                        "order": 0,
                        "hint": "string"
                      }
                    ],
                    "selectOptionsProviderAction": "string",
                    "section": "string",
                    "hidden": "string",
                    "privacy": "normal",
                    "placeholder": "string",
                    "isFloat": true
                  }
                ],
                "presets": [
                  {}
                ]
              }
            ]
          }
        ],
        "customFormatScore": 0,
        "indexerFlags": 0,
        "mediaInfo": {
          "id": 0,
          "audioChannels": 0,
          "audioBitRate": "string",
          "audioCodec": "string",
          "audioBits": "string",
          "audioSampleRate": "string"
        },
        "qualityCutoffNotMet": true,
        "audioTags": {
          "title": "string",
          "cleanTitle": "string",
          "artistTitle": "string",
          "albumTitle": "string",
          "artistTitleInfo": {
            "title": "string",
            "titleWithoutYear": "string",
            "year": 0
          },
          "artistMBId": "string",
          "albumMBId": "string",
          "releaseMBId": "string",
          "recordingMBId": "string",
          "trackMBId": "string",
          "discNumber": 0,
          "discCount": 0,
          "country": {
            "twoLetterCode": "string",
            "name": "string"
          },
          "year": 0,
          "label": "string",
          "catalogNumber": "string",
          "disambiguation": "string",
          "duration": "string",
          "quality": {
            "quality": {
              "id": 0,
              "name": "string"
            },
            "revision": {
              "version": 0,
              "real": 0,
              "isRepack": true
            }
          },
          "mediaInfo": {
            "audioFormat": "string",
            "audioBitrate": 0,
            "audioChannels": 0,
            "audioBits": 0,
            "audioSampleRate": 0
          },
          "trackNumbers": [
            0
          ],
          "releaseGroup": "string",
          "releaseHash": "string"
        }
      },
      "mediumNumber": 0,
      "hasFile": true,
      "artist": {
        "id": 0,
        "status": "continuing",
        "ended": true,
        "artistName": "string",
        "foreignArtistId": "string",
        "mbId": "string",
        "tadbId": 0,
        "discogsId": 0,
        "allMusicId": "string",
        "overview": "string",
        "artistType": "string",
        "disambiguation": "string",
        "links": [
          {
            "url": "string",
            "name": "string"
          }
        ],
        "nextAlbum": {},
        "lastAlbum": {},
        "images": [
          {
            "url": "string",
            "coverType": "unknown",
            "extension": "string",
            "remoteUrl": "string"
          }
        ],
        "members": [
          {
            "name": "string",
            "instrument": "string",
            "images": [
              {
                "url": "string",
                "coverType": "unknown",
                "extension": "string",
                "remoteUrl": "string"
              }
            ]
          }
        ],
        "remotePoster": "string",
        "path": "string",
        "qualityProfileId": 0,
        "metadataProfileId": 0,
        "monitored": true,
        "monitorNewItems": "all",
        "rootFolderPath": "string",
        "folder": "string",
        "genres": [
          "string"
        ],
        "cleanName": "string",
        "sortName": "string",
        "tags": [
          0
        ],
        "added": "1970-01-01T00:00:00Z",
        "addOptions": {
          "monitor": "all",
          "albumsToMonitor": [
            "string"
          ],
          "monitored": true,
          "searchForMissingAlbums": true
        },
        "ratings": {
          "votes": 0,
          "value": 0
        },
        "statistics": {
          "albumCount": 0,
          "trackFileCount": 0,
          "trackCount": 0,
          "totalTrackCount": 0,
          "sizeOnDisk": 0,
          "percentOfTracks": 0
        }
      },
      "ratings": {
        "votes": 0,
        "value": 0
      }
    }
  }
]
```

<h3 id="getapiv1historysince-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getapiv1historysince-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[HistoryResource](#schemahistoryresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v1/history/artist

> Code samples

```bash
curl http://localhost:8686/api/v1/history/artist \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/history/artist`

<h3 id="getapiv1historyartist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|artistId|query|integer(int32)|false|none|
|albumId|query|integer(int32)|false|none|
|eventType|query|[EntityHistoryEventType](#schemaentityhistoryeventtype)|false|none|
|includeArtist|query|boolean|false|none|
|includeAlbum|query|boolean|false|none|
|includeTrack|query|boolean|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|eventType|unknown|
|eventType|grabbed|
|eventType|artistFolderImported|
|eventType|trackFileImported|
|eventType|downloadFailed|
|eventType|trackFileDeleted|
|eventType|trackFileRenamed|
|eventType|albumImportIncomplete|
|eventType|downloadImported|
|eventType|trackFileRetagged|
|eventType|downloadIgnored|

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "albumId": 0,
    "artistId": 0,
    "trackId": 0,
    "sourceTitle": "string",
    "quality": {
      "quality": {
        "id": 0,
        "name": "string"
      },
      "revision": {
        "version": 0,
        "real": 0,
        "isRepack": true
      }
    },
    "customFormats": [
      {
        "id": 0,
        "name": "string",
        "includeCustomFormatWhenRenaming": true,
        "specifications": [
          {
            "id": 0,
            "name": "string",
            "implementation": "string",
            "implementationName": "string",
            "infoLink": "string",
            "negate": true,
            "required": true,
            "fields": [
              {
                "order": 0,
                "name": "string",
                "label": "string",
                "unit": "string",
                "helpText": "string",
                "helpTextWarning": "string",
                "helpLink": "string",
                "value": null,
                "type": "string",
                "advanced": true,
                "selectOptions": [
                  {
                    "value": 0,
                    "name": "string",
                    "order": 0,
                    "hint": "string"
                  }
                ],
                "selectOptionsProviderAction": "string",
                "section": "string",
                "hidden": "string",
                "privacy": "normal",
                "placeholder": "string",
                "isFloat": true
              }
            ],
            "presets": [
              {}
            ]
          }
        ]
      }
    ],
    "customFormatScore": 0,
    "qualityCutoffNotMet": true,
    "date": "1970-01-01T00:00:00Z",
    "downloadId": "string",
    "eventType": "unknown",
    "data": {
      "property1": "string",
      "property2": "string"
    },
    "album": {
      "id": 0,
      "title": "string",
      "disambiguation": "string",
      "overview": "string",
      "artistId": 0,
      "foreignAlbumId": "string",
      "monitored": true,
      "anyReleaseOk": true,
      "profileId": 0,
      "duration": 0,
      "albumType": "string",
      "secondaryTypes": [
        "string"
      ],
      "mediumCount": 0,
      "ratings": {
        "votes": 0,
        "value": 0
      },
      "releaseDate": "1970-01-01T00:00:00Z",
      "releases": [
        {
          "id": 0,
          "albumId": 0,
          "foreignReleaseId": "string",
          "title": "string",
          "status": "string",
          "duration": 0,
          "trackCount": 0,
          "media": [
            {
              "mediumNumber": 0,
              "mediumName": "string",
              "mediumFormat": "string"
            }
          ],
          "mediumCount": 0,
          "disambiguation": "string",
          "country": [
            "string"
          ],
          "label": [
            "string"
          ],
          "format": "string",
          "monitored": true
        }
      ],
      "genres": [
        "string"
      ],
      "media": [
        {
          "mediumNumber": 0,
          "mediumName": "string",
          "mediumFormat": "string"
        }
      ],
      "artist": {},
      "images": [
        {
          "url": "string",
          "coverType": "unknown",
          "extension": "string",
          "remoteUrl": "string"
        }
      ],
      "links": [
        {
          "url": "string",
          "name": "string"
        }
      ],
      "lastSearchTime": "1970-01-01T00:00:00Z",
      "statistics": {
        "trackFileCount": 0,
        "trackCount": 0,
        "totalTrackCount": 0,
        "sizeOnDisk": 0,
        "percentOfTracks": 0
      },
      "addOptions": {
        "addType": "automatic",
        "searchForNewAlbum": true
      },
      "remoteCover": "string"
    },
    "artist": {
      "id": 0,
      "status": "continuing",
      "ended": true,
      "artistName": "string",
      "foreignArtistId": "string",
      "mbId": "string",
      "tadbId": 0,
      "discogsId": 0,
      "allMusicId": "string",
      "overview": "string",
      "artistType": "string",
      "disambiguation": "string",
      "links": [
        {
          "url": "string",
          "name": "string"
        }
      ],
      "nextAlbum": {},
      "lastAlbum": {},
      "images": [
        {
          "url": "string",
          "coverType": "unknown",
          "extension": "string",
          "remoteUrl": "string"
        }
      ],
      "members": [
        {
          "name": "string",
          "instrument": "string",
          "images": [
            {
              "url": "string",
              "coverType": "unknown",
              "extension": "string",
              "remoteUrl": "string"
            }
          ]
        }
      ],
      "remotePoster": "string",
      "path": "string",
      "qualityProfileId": 0,
      "metadataProfileId": 0,
      "monitored": true,
      "monitorNewItems": "all",
      "rootFolderPath": "string",
      "folder": "string",
      "genres": [
        "string"
      ],
      "cleanName": "string",
      "sortName": "string",
      "tags": [
        0
      ],
      "added": "1970-01-01T00:00:00Z",
      "addOptions": {
        "monitor": "all",
        "albumsToMonitor": [
          "string"
        ],
        "monitored": true,
        "searchForMissingAlbums": true
      },
      "ratings": {
        "votes": 0,
        "value": 0
      },
      "statistics": {
        "albumCount": 0,
        "trackFileCount": 0,
        "trackCount": 0,
        "totalTrackCount": 0,
        "sizeOnDisk": 0,
        "percentOfTracks": 0
      }
    },
    "track": {
      "id": 0,
      "artistId": 0,
      "foreignTrackId": "string",
      "foreignRecordingId": "string",
      "trackFileId": 0,
      "albumId": 0,
      "explicit": true,
      "absoluteTrackNumber": 0,
      "trackNumber": "string",
      "title": "string",
      "duration": 0,
      "trackFile": {
        "id": 0,
        "artistId": 0,
        "albumId": 0,
        "path": "string",
        "size": 0,
        "dateAdded": "1970-01-01T00:00:00Z",
        "sceneName": "string",
        "releaseGroup": "string",
        "quality": {
          "quality": {
            "id": 0,
            "name": "string"
          },
          "revision": {
            "version": 0,
            "real": 0,
            "isRepack": true
          }
        },
        "qualityWeight": 0,
        "customFormats": [
          {
            "id": 0,
            "name": "string",
            "includeCustomFormatWhenRenaming": true,
            "specifications": [
              {
                "id": 0,
                "name": "string",
                "implementation": "string",
                "implementationName": "string",
                "infoLink": "string",
                "negate": true,
                "required": true,
                "fields": [
                  {
                    "order": 0,
                    "name": "string",
                    "label": "string",
                    "unit": "string",
                    "helpText": "string",
                    "helpTextWarning": "string",
                    "helpLink": "string",
                    "value": null,
                    "type": "string",
                    "advanced": true,
                    "selectOptions": [
                      {
                        "value": 0,
                        "name": "string",
                        "order": 0,
                        "hint": "string"
                      }
                    ],
                    "selectOptionsProviderAction": "string",
                    "section": "string",
                    "hidden": "string",
                    "privacy": "normal",
                    "placeholder": "string",
                    "isFloat": true
                  }
                ],
                "presets": [
                  {}
                ]
              }
            ]
          }
        ],
        "customFormatScore": 0,
        "indexerFlags": 0,
        "mediaInfo": {
          "id": 0,
          "audioChannels": 0,
          "audioBitRate": "string",
          "audioCodec": "string",
          "audioBits": "string",
          "audioSampleRate": "string"
        },
        "qualityCutoffNotMet": true,
        "audioTags": {
          "title": "string",
          "cleanTitle": "string",
          "artistTitle": "string",
          "albumTitle": "string",
          "artistTitleInfo": {
            "title": "string",
            "titleWithoutYear": "string",
            "year": 0
          },
          "artistMBId": "string",
          "albumMBId": "string",
          "releaseMBId": "string",
          "recordingMBId": "string",
          "trackMBId": "string",
          "discNumber": 0,
          "discCount": 0,
          "country": {
            "twoLetterCode": "string",
            "name": "string"
          },
          "year": 0,
          "label": "string",
          "catalogNumber": "string",
          "disambiguation": "string",
          "duration": "string",
          "quality": {
            "quality": {
              "id": 0,
              "name": "string"
            },
            "revision": {
              "version": 0,
              "real": 0,
              "isRepack": true
            }
          },
          "mediaInfo": {
            "audioFormat": "string",
            "audioBitrate": 0,
            "audioChannels": 0,
            "audioBits": 0,
            "audioSampleRate": 0
          },
          "trackNumbers": [
            0
          ],
          "releaseGroup": "string",
          "releaseHash": "string"
        }
      },
      "mediumNumber": 0,
      "hasFile": true,
      "artist": {
        "id": 0,
        "status": "continuing",
        "ended": true,
        "artistName": "string",
        "foreignArtistId": "string",
        "mbId": "string",
        "tadbId": 0,
        "discogsId": 0,
        "allMusicId": "string",
        "overview": "string",
        "artistType": "string",
        "disambiguation": "string",
        "links": [
          {
            "url": "string",
            "name": "string"
          }
        ],
        "nextAlbum": {},
        "lastAlbum": {},
        "images": [
          {
            "url": "string",
            "coverType": "unknown",
            "extension": "string",
            "remoteUrl": "string"
          }
        ],
        "members": [
          {
            "name": "string",
            "instrument": "string",
            "images": [
              {
                "url": "string",
                "coverType": "unknown",
                "extension": "string",
                "remoteUrl": "string"
              }
            ]
          }
        ],
        "remotePoster": "string",
        "path": "string",
        "qualityProfileId": 0,
        "metadataProfileId": 0,
        "monitored": true,
        "monitorNewItems": "all",
        "rootFolderPath": "string",
        "folder": "string",
        "genres": [
          "string"
        ],
        "cleanName": "string",
        "sortName": "string",
        "tags": [
          0
        ],
        "added": "1970-01-01T00:00:00Z",
        "addOptions": {
          "monitor": "all",
          "albumsToMonitor": [
            "string"
          ],
          "monitored": true,
          "searchForMissingAlbums": true
        },
        "ratings": {
          "votes": 0,
          "value": 0
        },
        "statistics": {
          "albumCount": 0,
          "trackFileCount": 0,
          "trackCount": 0,
          "totalTrackCount": 0,
          "sizeOnDisk": 0,
          "percentOfTracks": 0
        }
      },
      "ratings": {
        "votes": 0,
        "value": 0
      }
    }
  }
]
```

<h3 id="getapiv1historyartist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getapiv1historyartist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[HistoryResource](#schemahistoryresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## post/api/v1/history/failed/{id}

> Code samples

```bash
curl http://localhost:8686/api/v1/history/failed/0 \
  -X POST \
  -H "X-Api-Key: ${API_KEY}"
```

`POST /api/v1/history/failed/{id}`

<h3 id="postapiv1historyfailedid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

<h3 id="postapiv1historyfailedid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="lidarr-hostconfig">HostConfig</h1>

## get/api/v1/config/host/{id}

> Code samples

```bash
curl http://localhost:8686/api/v1/config/host/0 \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/config/host/{id}`

<h3 id="getapiv1confighostid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "bindAddress": "string",
  "port": 0,
  "sslPort": 0,
  "enableSsl": true,
  "launchBrowser": true,
  "authenticationMethod": "none",
  "authenticationRequired": "enabled",
  "analyticsEnabled": true,
  "username": "string",
  "password": "string",
  "passwordConfirmation": "string",
  "logLevel": "string",
  "logSizeLimit": 0,
  "consoleLogLevel": "string",
  "branch": "string",
  "apiKey": "string",
  "sslCertPath": "string",
  "sslCertPassword": "string",
  "urlBase": "string",
  "instanceName": "string",
  "applicationUrl": "string",
  "updateAutomatically": true,
  "updateMechanism": "builtIn",
  "updateScriptPath": "string",
  "proxyEnabled": true,
  "proxyType": "http",
  "proxyHostname": "string",
  "proxyPort": 0,
  "proxyUsername": "string",
  "proxyPassword": "string",
  "proxyBypassFilter": "string",
  "proxyBypassLocalAddresses": true,
  "certificateValidation": "enabled",
  "backupFolder": "string",
  "backupInterval": 0,
  "backupRetention": 0,
  "trustCgnatIpAddresses": true
}
```

<h3 id="getapiv1confighostid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[HostConfigResource](#schemahostconfigresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## put/api/v1/config/host/{id}

> Code samples

```bash
curl http://localhost:8686/api/v1/config/host/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "id": 0,
    "bindAddress": "string",
    "port": 0,
    "sslPort": 0,
    "enableSsl": true,
    "launchBrowser": true,
    "authenticationMethod": "none",
    "authenticationRequired": "enabled",
    "analyticsEnabled": true,
    "username": "string",
    "password": "string",
    "passwordConfirmation": "string",
    "logLevel": "string",
    "logSizeLimit": 0,
    "consoleLogLevel": "string",
    "branch": "string",
    "apiKey": "string",
    "sslCertPath": "string",
    "sslCertPassword": "string",
    "urlBase": "string",
    "instanceName": "string",
    "applicationUrl": "string",
    "updateAutomatically": true,
    "updateMechanism": "builtIn",
    "updateScriptPath": "string",
    "proxyEnabled": true,
    "proxyType": "http",
    "proxyHostname": "string",
    "proxyPort": 0,
    "proxyUsername": "string",
    "proxyPassword": "string",
    "proxyBypassFilter": "string",
    "proxyBypassLocalAddresses": true,
    "certificateValidation": "enabled",
    "backupFolder": "string",
    "backupInterval": 0,
    "backupRetention": 0,
    "trustCgnatIpAddresses": true
  }'
```

`PUT /api/v1/config/host/{id}`

> Body parameter

```json
{
  "id": 0,
  "bindAddress": "string",
  "port": 0,
  "sslPort": 0,
  "enableSsl": true,
  "launchBrowser": true,
  "authenticationMethod": "none",
  "authenticationRequired": "enabled",
  "analyticsEnabled": true,
  "username": "string",
  "password": "string",
  "passwordConfirmation": "string",
  "logLevel": "string",
  "logSizeLimit": 0,
  "consoleLogLevel": "string",
  "branch": "string",
  "apiKey": "string",
  "sslCertPath": "string",
  "sslCertPassword": "string",
  "urlBase": "string",
  "instanceName": "string",
  "applicationUrl": "string",
  "updateAutomatically": true,
  "updateMechanism": "builtIn",
  "updateScriptPath": "string",
  "proxyEnabled": true,
  "proxyType": "http",
  "proxyHostname": "string",
  "proxyPort": 0,
  "proxyUsername": "string",
  "proxyPassword": "string",
  "proxyBypassFilter": "string",
  "proxyBypassLocalAddresses": true,
  "certificateValidation": "enabled",
  "backupFolder": "string",
  "backupInterval": 0,
  "backupRetention": 0,
  "trustCgnatIpAddresses": true
}
```

<h3 id="putapiv1confighostid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|[HostConfigResource](#schemahostconfigresource)|false|none|
|» id|body|integer(int32)|false|none|
|» bindAddress|body|string \| null|false|none|
|» port|body|integer(int32)|false|none|
|» sslPort|body|integer(int32)|false|none|
|» enableSsl|body|boolean|false|none|
|» launchBrowser|body|boolean|false|none|
|» authenticationMethod|body|[AuthenticationType](#schemaauthenticationtype)|false|none|
|» authenticationRequired|body|[AuthenticationRequiredType](#schemaauthenticationrequiredtype)|false|none|
|» analyticsEnabled|body|boolean|false|none|
|» username|body|string \| null|false|none|
|» password|body|string \| null|false|none|
|» passwordConfirmation|body|string \| null|false|none|
|» logLevel|body|string \| null|false|none|
|» logSizeLimit|body|integer(int32)|false|none|
|» consoleLogLevel|body|string \| null|false|none|
|» branch|body|string \| null|false|none|
|» apiKey|body|string \| null|false|none|
|» sslCertPath|body|string \| null|false|none|
|» sslCertPassword|body|string \| null|false|none|
|» urlBase|body|string \| null|false|none|
|» instanceName|body|string \| null|false|none|
|» applicationUrl|body|string \| null|false|none|
|» updateAutomatically|body|boolean|false|none|
|» updateMechanism|body|[UpdateMechanism](#schemaupdatemechanism)|false|none|
|» updateScriptPath|body|string \| null|false|none|
|» proxyEnabled|body|boolean|false|none|
|» proxyType|body|[ProxyType](#schemaproxytype)|false|none|
|» proxyHostname|body|string \| null|false|none|
|» proxyPort|body|integer(int32)|false|none|
|» proxyUsername|body|string \| null|false|none|
|» proxyPassword|body|string \| null|false|none|
|» proxyBypassFilter|body|string \| null|false|none|
|» proxyBypassLocalAddresses|body|boolean|false|none|
|» certificateValidation|body|[CertificateValidationType](#schemacertificatevalidationtype)|false|none|
|» backupFolder|body|string \| null|false|none|
|» backupInterval|body|integer(int32)|false|none|
|» backupRetention|body|integer(int32)|false|none|
|» trustCgnatIpAddresses|body|boolean|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» authenticationMethod|none|
|» authenticationMethod|basic|
|» authenticationMethod|forms|
|» authenticationMethod|external|
|» authenticationRequired|enabled|
|» authenticationRequired|disabledForLocalAddresses|
|» updateMechanism|builtIn|
|» updateMechanism|script|
|» updateMechanism|external|
|» updateMechanism|apt|
|» updateMechanism|docker|
|» proxyType|http|
|» proxyType|socks4|
|» proxyType|socks5|
|» certificateValidation|enabled|
|» certificateValidation|disabledForLocalAddresses|
|» certificateValidation|disabled|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "bindAddress": "string",
  "port": 0,
  "sslPort": 0,
  "enableSsl": true,
  "launchBrowser": true,
  "authenticationMethod": "none",
  "authenticationRequired": "enabled",
  "analyticsEnabled": true,
  "username": "string",
  "password": "string",
  "passwordConfirmation": "string",
  "logLevel": "string",
  "logSizeLimit": 0,
  "consoleLogLevel": "string",
  "branch": "string",
  "apiKey": "string",
  "sslCertPath": "string",
  "sslCertPassword": "string",
  "urlBase": "string",
  "instanceName": "string",
  "applicationUrl": "string",
  "updateAutomatically": true,
  "updateMechanism": "builtIn",
  "updateScriptPath": "string",
  "proxyEnabled": true,
  "proxyType": "http",
  "proxyHostname": "string",
  "proxyPort": 0,
  "proxyUsername": "string",
  "proxyPassword": "string",
  "proxyBypassFilter": "string",
  "proxyBypassLocalAddresses": true,
  "certificateValidation": "enabled",
  "backupFolder": "string",
  "backupInterval": 0,
  "backupRetention": 0,
  "trustCgnatIpAddresses": true
}
```

<h3 id="putapiv1confighostid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[HostConfigResource](#schemahostconfigresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v1/config/host

> Code samples

```bash
curl http://localhost:8686/api/v1/config/host \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/config/host`

> Example responses

> 200 Response

```json
{
  "id": 0,
  "bindAddress": "string",
  "port": 0,
  "sslPort": 0,
  "enableSsl": true,
  "launchBrowser": true,
  "authenticationMethod": "none",
  "authenticationRequired": "enabled",
  "analyticsEnabled": true,
  "username": "string",
  "password": "string",
  "passwordConfirmation": "string",
  "logLevel": "string",
  "logSizeLimit": 0,
  "consoleLogLevel": "string",
  "branch": "string",
  "apiKey": "string",
  "sslCertPath": "string",
  "sslCertPassword": "string",
  "urlBase": "string",
  "instanceName": "string",
  "applicationUrl": "string",
  "updateAutomatically": true,
  "updateMechanism": "builtIn",
  "updateScriptPath": "string",
  "proxyEnabled": true,
  "proxyType": "http",
  "proxyHostname": "string",
  "proxyPort": 0,
  "proxyUsername": "string",
  "proxyPassword": "string",
  "proxyBypassFilter": "string",
  "proxyBypassLocalAddresses": true,
  "certificateValidation": "enabled",
  "backupFolder": "string",
  "backupInterval": 0,
  "backupRetention": 0,
  "trustCgnatIpAddresses": true
}
```

<h3 id="getapiv1confighost-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[HostConfigResource](#schemahostconfigresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="lidarr-importlist">ImportList</h1>

## get/api/v1/importlist/{id}

> Code samples

```bash
curl http://localhost:8686/api/v1/importlist/0 \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/importlist/{id}`

<h3 id="getapiv1importlistid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "fields": [
    {
      "order": 0,
      "name": "string",
      "label": "string",
      "unit": "string",
      "helpText": "string",
      "helpTextWarning": "string",
      "helpLink": "string",
      "value": null,
      "type": "string",
      "advanced": true,
      "selectOptions": [
        {
          "value": 0,
          "name": "string",
          "order": 0,
          "hint": "string"
        }
      ],
      "selectOptionsProviderAction": "string",
      "section": "string",
      "hidden": "string",
      "privacy": "normal",
      "placeholder": "string",
      "isFloat": true
    }
  ],
  "implementationName": "string",
  "implementation": "string",
  "configContract": "string",
  "infoLink": "string",
  "message": {
    "message": "string",
    "type": "info"
  },
  "tags": [
    0
  ],
  "presets": [
    {}
  ],
  "enableAutomaticAdd": true,
  "shouldMonitor": "none",
  "shouldMonitorExisting": true,
  "shouldSearch": true,
  "rootFolderPath": "string",
  "monitorNewItems": "all",
  "qualityProfileId": 0,
  "metadataProfileId": 0,
  "listType": "program",
  "listOrder": 0,
  "minRefreshInterval": "string"
}
```

<h3 id="getapiv1importlistid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ImportListResource](#schemaimportlistresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## put/api/v1/importlist/{id}

> Code samples

```bash
curl http://localhost:8686/api/v1/importlist/0 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "id": 0,
    "name": "string",
    "fields": [
      {
        "order": 0,
        "name": "string",
        "label": "string",
        "unit": "string",
        "helpText": "string",
        "helpTextWarning": "string",
        "helpLink": "string",
        "value": null,
        "type": "string",
        "advanced": true,
        "selectOptions": [
          {
            "value": 0,
            "name": "string",
            "order": 0,
            "hint": "string"
          }
        ],
        "selectOptionsProviderAction": "string",
        "section": "string",
        "hidden": "string",
        "privacy": "normal",
        "placeholder": "string",
        "isFloat": true
      }
    ],
    "implementationName": "string",
    "implementation": "string",
    "configContract": "string",
    "infoLink": "string",
    "message": {
      "message": "string",
      "type": "info"
    },
    "tags": [
      0
    ],
    "presets": [
      {}
    ],
    "enableAutomaticAdd": true,
    "shouldMonitor": "none",
    "shouldMonitorExisting": true,
    "shouldSearch": true,
    "rootFolderPath": "string",
    "monitorNewItems": "all",
    "qualityProfileId": 0,
    "metadataProfileId": 0,
    "listType": "program",
    "listOrder": 0,
    "minRefreshInterval": "string"
  }'
```

`PUT /api/v1/importlist/{id}`

> Body parameter

```json
{
  "id": 0,
  "name": "string",
  "fields": [
    {
      "order": 0,
      "name": "string",
      "label": "string",
      "unit": "string",
      "helpText": "string",
      "helpTextWarning": "string",
      "helpLink": "string",
      "value": null,
      "type": "string",
      "advanced": true,
      "selectOptions": [
        {
          "value": 0,
          "name": "string",
          "order": 0,
          "hint": "string"
        }
      ],
      "selectOptionsProviderAction": "string",
      "section": "string",
      "hidden": "string",
      "privacy": "normal",
      "placeholder": "string",
      "isFloat": true
    }
  ],
  "implementationName": "string",
  "implementation": "string",
  "configContract": "string",
  "infoLink": "string",
  "message": {
    "message": "string",
    "type": "info"
  },
  "tags": [
    0
  ],
  "presets": [
    {}
  ],
  "enableAutomaticAdd": true,
  "shouldMonitor": "none",
  "shouldMonitorExisting": true,
  "shouldSearch": true,
  "rootFolderPath": "string",
  "monitorNewItems": "all",
  "qualityProfileId": 0,
  "metadataProfileId": 0,
  "listType": "program",
  "listOrder": 0,
  "minRefreshInterval": "string"
}
```

<h3 id="putapiv1importlistid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|
|forceSave|query|boolean|false|none|
|body|body|[ImportListResource](#schemaimportlistresource)|false|none|
|» id|body|integer(int32)|false|none|
|» name|body|string \| null|false|none|
|» fields|body|[[Field](#schemafield)]|false|none|
|» implementationName|body|string \| null|false|none|
|» implementation|body|string \| null|false|none|
|» configContract|body|string \| null|false|none|
|» infoLink|body|string \| null|false|none|
|» message|body|[ProviderMessage](#schemaprovidermessage)|false|none|
|» tags|body|[integer(int32)]|false|none|
|» presets|body|[[ImportListResource](#schemaimportlistresource)]|false|none|
|» enableAutomaticAdd|body|boolean|false|none|
|» shouldMonitor|body|[ImportListMonitorType](#schemaimportlistmonitortype)|false|none|
|» shouldMonitorExisting|body|boolean|false|none|
|» shouldSearch|body|boolean|false|none|
|» rootFolderPath|body|string \| null|false|none|
|» monitorNewItems|body|[NewItemMonitorTypes](#schemanewitemmonitortypes)|false|none|
|» qualityProfileId|body|integer(int32)|false|none|
|» metadataProfileId|body|integer(int32)|false|none|
|» listType|body|[ImportListType](#schemaimportlisttype)|false|none|
|» listOrder|body|integer(int32)|false|none|
|» minRefreshInterval|body|string(date-span)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» shouldMonitor|none|
|» shouldMonitor|specificAlbum|
|» shouldMonitor|entireArtist|
|» monitorNewItems|all|
|» monitorNewItems|none|
|» monitorNewItems|new|
|» listType|program|
|» listType|spotify|
|» listType|lastFm|
|» listType|other|
|» listType|advanced|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "fields": [
    {
      "order": 0,
      "name": "string",
      "label": "string",
      "unit": "string",
      "helpText": "string",
      "helpTextWarning": "string",
      "helpLink": "string",
      "value": null,
      "type": "string",
      "advanced": true,
      "selectOptions": [
        {
          "value": 0,
          "name": "string",
          "order": 0,
          "hint": "string"
        }
      ],
      "selectOptionsProviderAction": "string",
      "section": "string",
      "hidden": "string",
      "privacy": "normal",
      "placeholder": "string",
      "isFloat": true
    }
  ],
  "implementationName": "string",
  "implementation": "string",
  "configContract": "string",
  "infoLink": "string",
  "message": {
    "message": "string",
    "type": "info"
  },
  "tags": [
    0
  ],
  "presets": [
    {}
  ],
  "enableAutomaticAdd": true,
  "shouldMonitor": "none",
  "shouldMonitorExisting": true,
  "shouldSearch": true,
  "rootFolderPath": "string",
  "monitorNewItems": "all",
  "qualityProfileId": 0,
  "metadataProfileId": 0,
  "listType": "program",
  "listOrder": 0,
  "minRefreshInterval": "string"
}
```

<h3 id="putapiv1importlistid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ImportListResource](#schemaimportlistresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## delete/api/v1/importlist/{id}

> Code samples

```bash
curl http://localhost:8686/api/v1/importlist/0 \
  -X DELETE \
  -H "X-Api-Key: ${API_KEY}"
```

`DELETE /api/v1/importlist/{id}`

<h3 id="deleteapiv1importlistid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

<h3 id="deleteapiv1importlistid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v1/importlist

> Code samples

```bash
curl http://localhost:8686/api/v1/importlist \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/importlist`

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "name": "string",
    "fields": [
      {
        "order": 0,
        "name": "string",
        "label": "string",
        "unit": "string",
        "helpText": "string",
        "helpTextWarning": "string",
        "helpLink": "string",
        "value": null,
        "type": "string",
        "advanced": true,
        "selectOptions": [
          {
            "value": 0,
            "name": "string",
            "order": 0,
            "hint": "string"
          }
        ],
        "selectOptionsProviderAction": "string",
        "section": "string",
        "hidden": "string",
        "privacy": "normal",
        "placeholder": "string",
        "isFloat": true
      }
    ],
    "implementationName": "string",
    "implementation": "string",
    "configContract": "string",
    "infoLink": "string",
    "message": {
      "message": "string",
      "type": "info"
    },
    "tags": [
      0
    ],
    "presets": [
      {}
    ],
    "enableAutomaticAdd": true,
    "shouldMonitor": "none",
    "shouldMonitorExisting": true,
    "shouldSearch": true,
    "rootFolderPath": "string",
    "monitorNewItems": "all",
    "qualityProfileId": 0,
    "metadataProfileId": 0,
    "listType": "program",
    "listOrder": 0,
    "minRefreshInterval": "string"
  }
]
```

<h3 id="getapiv1importlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getapiv1importlist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ImportListResource](#schemaimportlistresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## post/api/v1/importlist

> Code samples

```bash
curl http://localhost:8686/api/v1/importlist \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "id": 0,
    "name": "string",
    "fields": [
      {
        "order": 0,
        "name": "string",
        "label": "string",
        "unit": "string",
        "helpText": "string",
        "helpTextWarning": "string",
        "helpLink": "string",
        "value": null,
        "type": "string",
        "advanced": true,
        "selectOptions": [
          {
            "value": 0,
            "name": "string",
            "order": 0,
            "hint": "string"
          }
        ],
        "selectOptionsProviderAction": "string",
        "section": "string",
        "hidden": "string",
        "privacy": "normal",
        "placeholder": "string",
        "isFloat": true
      }
    ],
    "implementationName": "string",
    "implementation": "string",
    "configContract": "string",
    "infoLink": "string",
    "message": {
      "message": "string",
      "type": "info"
    },
    "tags": [
      0
    ],
    "presets": [
      {}
    ],
    "enableAutomaticAdd": true,
    "shouldMonitor": "none",
    "shouldMonitorExisting": true,
    "shouldSearch": true,
    "rootFolderPath": "string",
    "monitorNewItems": "all",
    "qualityProfileId": 0,
    "metadataProfileId": 0,
    "listType": "program",
    "listOrder": 0,
    "minRefreshInterval": "string"
  }'
```

`POST /api/v1/importlist`

> Body parameter

```json
{
  "id": 0,
  "name": "string",
  "fields": [
    {
      "order": 0,
      "name": "string",
      "label": "string",
      "unit": "string",
      "helpText": "string",
      "helpTextWarning": "string",
      "helpLink": "string",
      "value": null,
      "type": "string",
      "advanced": true,
      "selectOptions": [
        {
          "value": 0,
          "name": "string",
          "order": 0,
          "hint": "string"
        }
      ],
      "selectOptionsProviderAction": "string",
      "section": "string",
      "hidden": "string",
      "privacy": "normal",
      "placeholder": "string",
      "isFloat": true
    }
  ],
  "implementationName": "string",
  "implementation": "string",
  "configContract": "string",
  "infoLink": "string",
  "message": {
    "message": "string",
    "type": "info"
  },
  "tags": [
    0
  ],
  "presets": [
    {}
  ],
  "enableAutomaticAdd": true,
  "shouldMonitor": "none",
  "shouldMonitorExisting": true,
  "shouldSearch": true,
  "rootFolderPath": "string",
  "monitorNewItems": "all",
  "qualityProfileId": 0,
  "metadataProfileId": 0,
  "listType": "program",
  "listOrder": 0,
  "minRefreshInterval": "string"
}
```

<h3 id="postapiv1importlist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|forceSave|query|boolean|false|none|
|body|body|[ImportListResource](#schemaimportlistresource)|false|none|
|» id|body|integer(int32)|false|none|
|» name|body|string \| null|false|none|
|» fields|body|[[Field](#schemafield)]|false|none|
|» implementationName|body|string \| null|false|none|
|» implementation|body|string \| null|false|none|
|» configContract|body|string \| null|false|none|
|» infoLink|body|string \| null|false|none|
|» message|body|[ProviderMessage](#schemaprovidermessage)|false|none|
|» tags|body|[integer(int32)]|false|none|
|» presets|body|[[ImportListResource](#schemaimportlistresource)]|false|none|
|» enableAutomaticAdd|body|boolean|false|none|
|» shouldMonitor|body|[ImportListMonitorType](#schemaimportlistmonitortype)|false|none|
|» shouldMonitorExisting|body|boolean|false|none|
|» shouldSearch|body|boolean|false|none|
|» rootFolderPath|body|string \| null|false|none|
|» monitorNewItems|body|[NewItemMonitorTypes](#schemanewitemmonitortypes)|false|none|
|» qualityProfileId|body|integer(int32)|false|none|
|» metadataProfileId|body|integer(int32)|false|none|
|» listType|body|[ImportListType](#schemaimportlisttype)|false|none|
|» listOrder|body|integer(int32)|false|none|
|» minRefreshInterval|body|string(date-span)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» shouldMonitor|none|
|» shouldMonitor|specificAlbum|
|» shouldMonitor|entireArtist|
|» monitorNewItems|all|
|» monitorNewItems|none|
|» monitorNewItems|new|
|» listType|program|
|» listType|spotify|
|» listType|lastFm|
|» listType|other|
|» listType|advanced|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "fields": [
    {
      "order": 0,
      "name": "string",
      "label": "string",
      "unit": "string",
      "helpText": "string",
      "helpTextWarning": "string",
      "helpLink": "string",
      "value": null,
      "type": "string",
      "advanced": true,
      "selectOptions": [
        {
          "value": 0,
          "name": "string",
          "order": 0,
          "hint": "string"
        }
      ],
      "selectOptionsProviderAction": "string",
      "section": "string",
      "hidden": "string",
      "privacy": "normal",
      "placeholder": "string",
      "isFloat": true
    }
  ],
  "implementationName": "string",
  "implementation": "string",
  "configContract": "string",
  "infoLink": "string",
  "message": {
    "message": "string",
    "type": "info"
  },
  "tags": [
    0
  ],
  "presets": [
    {}
  ],
  "enableAutomaticAdd": true,
  "shouldMonitor": "none",
  "shouldMonitorExisting": true,
  "shouldSearch": true,
  "rootFolderPath": "string",
  "monitorNewItems": "all",
  "qualityProfileId": 0,
  "metadataProfileId": 0,
  "listType": "program",
  "listOrder": 0,
  "minRefreshInterval": "string"
}
```

<h3 id="postapiv1importlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ImportListResource](#schemaimportlistresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## put/api/v1/importlist/bulk

> Code samples

```bash
curl http://localhost:8686/api/v1/importlist/bulk \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "ids": [
      0
    ],
    "tags": [
      0
    ],
    "applyTags": "add",
    "enableAutomaticAdd": true,
    "rootFolderPath": "string",
    "qualityProfileId": 0
  }'
```

`PUT /api/v1/importlist/bulk`

> Body parameter

```json
{
  "ids": [
    0
  ],
  "tags": [
    0
  ],
  "applyTags": "add",
  "enableAutomaticAdd": true,
  "rootFolderPath": "string",
  "qualityProfileId": 0
}
```

<h3 id="putapiv1importlistbulk-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ImportListBulkResource](#schemaimportlistbulkresource)|false|none|
|» ids|body|[integer(int32)]|false|none|
|» tags|body|[integer(int32)]|false|none|
|» applyTags|body|[ApplyTags](#schemaapplytags)|false|none|
|» enableAutomaticAdd|body|boolean \| null|false|none|
|» rootFolderPath|body|string \| null|false|none|
|» qualityProfileId|body|integer(int32) \| null|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» applyTags|add|
|» applyTags|remove|
|» applyTags|replace|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "fields": [
    {
      "order": 0,
      "name": "string",
      "label": "string",
      "unit": "string",
      "helpText": "string",
      "helpTextWarning": "string",
      "helpLink": "string",
      "value": null,
      "type": "string",
      "advanced": true,
      "selectOptions": [
        {
          "value": 0,
          "name": "string",
          "order": 0,
          "hint": "string"
        }
      ],
      "selectOptionsProviderAction": "string",
      "section": "string",
      "hidden": "string",
      "privacy": "normal",
      "placeholder": "string",
      "isFloat": true
    }
  ],
  "implementationName": "string",
  "implementation": "string",
  "configContract": "string",
  "infoLink": "string",
  "message": {
    "message": "string",
    "type": "info"
  },
  "tags": [
    0
  ],
  "presets": [
    {}
  ],
  "enableAutomaticAdd": true,
  "shouldMonitor": "none",
  "shouldMonitorExisting": true,
  "shouldSearch": true,
  "rootFolderPath": "string",
  "monitorNewItems": "all",
  "qualityProfileId": 0,
  "metadataProfileId": 0,
  "listType": "program",
  "listOrder": 0,
  "minRefreshInterval": "string"
}
```

<h3 id="putapiv1importlistbulk-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ImportListResource](#schemaimportlistresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## delete/api/v1/importlist/bulk

> Code samples

```bash
curl http://localhost:8686/api/v1/importlist/bulk \
  -X DELETE \
  -H 'Content-Type: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "ids": [
      0
    ],
    "tags": [
      0
    ],
    "applyTags": "add",
    "enableAutomaticAdd": true,
    "rootFolderPath": "string",
    "qualityProfileId": 0
  }'
```

`DELETE /api/v1/importlist/bulk`

> Body parameter

```json
{
  "ids": [
    0
  ],
  "tags": [
    0
  ],
  "applyTags": "add",
  "enableAutomaticAdd": true,
  "rootFolderPath": "string",
  "qualityProfileId": 0
}
```

<h3 id="deleteapiv1importlistbulk-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ImportListBulkResource](#schemaimportlistbulkresource)|false|none|
|» ids|body|[integer(int32)]|false|none|
|» tags|body|[integer(int32)]|false|none|
|» applyTags|body|[ApplyTags](#schemaapplytags)|false|none|
|» enableAutomaticAdd|body|boolean \| null|false|none|
|» rootFolderPath|body|string \| null|false|none|
|» qualityProfileId|body|integer(int32) \| null|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» applyTags|add|
|» applyTags|remove|
|» applyTags|replace|

<h3 id="deleteapiv1importlistbulk-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v1/importlist/schema

> Code samples

```bash
curl http://localhost:8686/api/v1/importlist/schema \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/importlist/schema`

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "name": "string",
    "fields": [
      {
        "order": 0,
        "name": "string",
        "label": "string",
        "unit": "string",
        "helpText": "string",
        "helpTextWarning": "string",
        "helpLink": "string",
        "value": null,
        "type": "string",
        "advanced": true,
        "selectOptions": [
          {
            "value": 0,
            "name": "string",
            "order": 0,
            "hint": "string"
          }
        ],
        "selectOptionsProviderAction": "string",
        "section": "string",
        "hidden": "string",
        "privacy": "normal",
        "placeholder": "string",
        "isFloat": true
      }
    ],
    "implementationName": "string",
    "implementation": "string",
    "configContract": "string",
    "infoLink": "string",
    "message": {
      "message": "string",
      "type": "info"
    },
    "tags": [
      0
    ],
    "presets": [
      {}
    ],
    "enableAutomaticAdd": true,
    "shouldMonitor": "none",
    "shouldMonitorExisting": true,
    "shouldSearch": true,
    "rootFolderPath": "string",
    "monitorNewItems": "all",
    "qualityProfileId": 0,
    "metadataProfileId": 0,
    "listType": "program",
    "listOrder": 0,
    "minRefreshInterval": "string"
  }
]
```

<h3 id="getapiv1importlistschema-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getapiv1importlistschema-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ImportListResource](#schemaimportlistresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## post/api/v1/importlist/test

> Code samples

```bash
curl http://localhost:8686/api/v1/importlist/test \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "id": 0,
    "name": "string",
    "fields": [
      {
        "order": 0,
        "name": "string",
        "label": "string",
        "unit": "string",
        "helpText": "string",
        "helpTextWarning": "string",
        "helpLink": "string",
        "value": null,
        "type": "string",
        "advanced": true,
        "selectOptions": [
          {
            "value": 0,
            "name": "string",
            "order": 0,
            "hint": "string"
          }
        ],
        "selectOptionsProviderAction": "string",
        "section": "string",
        "hidden": "string",
        "privacy": "normal",
        "placeholder": "string",
        "isFloat": true
      }
    ],
    "implementationName": "string",
    "implementation": "string",
    "configContract": "string",
    "infoLink": "string",
    "message": {
      "message": "string",
      "type": "info"
    },
    "tags": [
      0
    ],
    "presets": [
      {}
    ],
    "enableAutomaticAdd": true,
    "shouldMonitor": "none",
    "shouldMonitorExisting": true,
    "shouldSearch": true,
    "rootFolderPath": "string",
    "monitorNewItems": "all",
    "qualityProfileId": 0,
    "metadataProfileId": 0,
    "listType": "program",
    "listOrder": 0,
    "minRefreshInterval": "string"
  }'
```

`POST /api/v1/importlist/test`

> Body parameter

```json
{
  "id": 0,
  "name": "string",
  "fields": [
    {
      "order": 0,
      "name": "string",
      "label": "string",
      "unit": "string",
      "helpText": "string",
      "helpTextWarning": "string",
      "helpLink": "string",
      "value": null,
      "type": "string",
      "advanced": true,
      "selectOptions": [
        {
          "value": 0,
          "name": "string",
          "order": 0,
          "hint": "string"
        }
      ],
      "selectOptionsProviderAction": "string",
      "section": "string",
      "hidden": "string",
      "privacy": "normal",
      "placeholder": "string",
      "isFloat": true
    }
  ],
  "implementationName": "string",
  "implementation": "string",
  "configContract": "string",
  "infoLink": "string",
  "message": {
    "message": "string",
    "type": "info"
  },
  "tags": [
    0
  ],
  "presets": [
    {}
  ],
  "enableAutomaticAdd": true,
  "shouldMonitor": "none",
  "shouldMonitorExisting": true,
  "shouldSearch": true,
  "rootFolderPath": "string",
  "monitorNewItems": "all",
  "qualityProfileId": 0,
  "metadataProfileId": 0,
  "listType": "program",
  "listOrder": 0,
  "minRefreshInterval": "string"
}
```

<h3 id="postapiv1importlisttest-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|forceTest|query|boolean|false|none|
|body|body|[ImportListResource](#schemaimportlistresource)|false|none|
|» id|body|integer(int32)|false|none|
|» name|body|string \| null|false|none|
|» fields|body|[[Field](#schemafield)]|false|none|
|» implementationName|body|string \| null|false|none|
|» implementation|body|string \| null|false|none|
|» configContract|body|string \| null|false|none|
|» infoLink|body|string \| null|false|none|
|» message|body|[ProviderMessage](#schemaprovidermessage)|false|none|
|» tags|body|[integer(int32)]|false|none|
|» presets|body|[[ImportListResource](#schemaimportlistresource)]|false|none|
|» enableAutomaticAdd|body|boolean|false|none|
|» shouldMonitor|body|[ImportListMonitorType](#schemaimportlistmonitortype)|false|none|
|» shouldMonitorExisting|body|boolean|false|none|
|» shouldSearch|body|boolean|false|none|
|» rootFolderPath|body|string \| null|false|none|
|» monitorNewItems|body|[NewItemMonitorTypes](#schemanewitemmonitortypes)|false|none|
|» qualityProfileId|body|integer(int32)|false|none|
|» metadataProfileId|body|integer(int32)|false|none|
|» listType|body|[ImportListType](#schemaimportlisttype)|false|none|
|» listOrder|body|integer(int32)|false|none|
|» minRefreshInterval|body|string(date-span)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» shouldMonitor|none|
|» shouldMonitor|specificAlbum|
|» shouldMonitor|entireArtist|
|» monitorNewItems|all|
|» monitorNewItems|none|
|» monitorNewItems|new|
|» listType|program|
|» listType|spotify|
|» listType|lastFm|
|» listType|other|
|» listType|advanced|

<h3 id="postapiv1importlisttest-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## post/api/v1/importlist/testall

> Code samples

```bash
curl http://localhost:8686/api/v1/importlist/testall \
  -X POST \
  -H "X-Api-Key: ${API_KEY}"
```

`POST /api/v1/importlist/testall`

<h3 id="postapiv1importlisttestall-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## post/api/v1/importlist/action/{name}

> Code samples

```bash
curl http://localhost:8686/api/v1/importlist/action/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "id": 0,
    "name": "string",
    "fields": [
      {
        "order": 0,
        "name": "string",
        "label": "string",
        "unit": "string",
        "helpText": "string",
        "helpTextWarning": "string",
        "helpLink": "string",
        "value": null,
        "type": "string",
        "advanced": true,
        "selectOptions": [
          {
            "value": 0,
            "name": "string",
            "order": 0,
            "hint": "string"
          }
        ],
        "selectOptionsProviderAction": "string",
        "section": "string",
        "hidden": "string",
        "privacy": "normal",
        "placeholder": "string",
        "isFloat": true
      }
    ],
    "implementationName": "string",
    "implementation": "string",
    "configContract": "string",
    "infoLink": "string",
    "message": {
      "message": "string",
      "type": "info"
    },
    "tags": [
      0
    ],
    "presets": [
      {}
    ],
    "enableAutomaticAdd": true,
    "shouldMonitor": "none",
    "shouldMonitorExisting": true,
    "shouldSearch": true,
    "rootFolderPath": "string",
    "monitorNewItems": "all",
    "qualityProfileId": 0,
    "metadataProfileId": 0,
    "listType": "program",
    "listOrder": 0,
    "minRefreshInterval": "string"
  }'
```

`POST /api/v1/importlist/action/{name}`

> Body parameter

```json
{
  "id": 0,
  "name": "string",
  "fields": [
    {
      "order": 0,
      "name": "string",
      "label": "string",
      "unit": "string",
      "helpText": "string",
      "helpTextWarning": "string",
      "helpLink": "string",
      "value": null,
      "type": "string",
      "advanced": true,
      "selectOptions": [
        {
          "value": 0,
          "name": "string",
          "order": 0,
          "hint": "string"
        }
      ],
      "selectOptionsProviderAction": "string",
      "section": "string",
      "hidden": "string",
      "privacy": "normal",
      "placeholder": "string",
      "isFloat": true
    }
  ],
  "implementationName": "string",
  "implementation": "string",
  "configContract": "string",
  "infoLink": "string",
  "message": {
    "message": "string",
    "type": "info"
  },
  "tags": [
    0
  ],
  "presets": [
    {}
  ],
  "enableAutomaticAdd": true,
  "shouldMonitor": "none",
  "shouldMonitorExisting": true,
  "shouldSearch": true,
  "rootFolderPath": "string",
  "monitorNewItems": "all",
  "qualityProfileId": 0,
  "metadataProfileId": 0,
  "listType": "program",
  "listOrder": 0,
  "minRefreshInterval": "string"
}
```

<h3 id="postapiv1importlistactionname-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|none|
|body|body|[ImportListResource](#schemaimportlistresource)|false|none|
|» id|body|integer(int32)|false|none|
|» name|body|string \| null|false|none|
|» fields|body|[[Field](#schemafield)]|false|none|
|» implementationName|body|string \| null|false|none|
|» implementation|body|string \| null|false|none|
|» configContract|body|string \| null|false|none|
|» infoLink|body|string \| null|false|none|
|» message|body|[ProviderMessage](#schemaprovidermessage)|false|none|
|» tags|body|[integer(int32)]|false|none|
|» presets|body|[[ImportListResource](#schemaimportlistresource)]|false|none|
|» enableAutomaticAdd|body|boolean|false|none|
|» shouldMonitor|body|[ImportListMonitorType](#schemaimportlistmonitortype)|false|none|
|» shouldMonitorExisting|body|boolean|false|none|
|» shouldSearch|body|boolean|false|none|
|» rootFolderPath|body|string \| null|false|none|
|» monitorNewItems|body|[NewItemMonitorTypes](#schemanewitemmonitortypes)|false|none|
|» qualityProfileId|body|integer(int32)|false|none|
|» metadataProfileId|body|integer(int32)|false|none|
|» listType|body|[ImportListType](#schemaimportlisttype)|false|none|
|» listOrder|body|integer(int32)|false|none|
|» minRefreshInterval|body|string(date-span)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» shouldMonitor|none|
|» shouldMonitor|specificAlbum|
|» shouldMonitor|entireArtist|
|» monitorNewItems|all|
|» monitorNewItems|none|
|» monitorNewItems|new|
|» listType|program|
|» listType|spotify|
|» listType|lastFm|
|» listType|other|
|» listType|advanced|

<h3 id="postapiv1importlistactionname-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="lidarr-importlistexclusion">ImportListExclusion</h1>

## get/api/v1/importlistexclusion/{id}

> Code samples

```bash
curl http://localhost:8686/api/v1/importlistexclusion/0 \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/importlistexclusion/{id}`

<h3 id="getapiv1importlistexclusionid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "foreignId": "string",
  "artistName": "string"
}
```

<h3 id="getapiv1importlistexclusionid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ImportListExclusionResource](#schemaimportlistexclusionresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## put/api/v1/importlistexclusion/{id}

> Code samples

```bash
curl http://localhost:8686/api/v1/importlistexclusion/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "id": 0,
    "foreignId": "string",
    "artistName": "string"
  }'
```

`PUT /api/v1/importlistexclusion/{id}`

> Body parameter

```json
{
  "id": 0,
  "foreignId": "string",
  "artistName": "string"
}
```

<h3 id="putapiv1importlistexclusionid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|[ImportListExclusionResource](#schemaimportlistexclusionresource)|false|none|
|» id|body|integer(int32)|false|none|
|» foreignId|body|string \| null|false|none|
|» artistName|body|string \| null|false|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "foreignId": "string",
  "artistName": "string"
}
```

<h3 id="putapiv1importlistexclusionid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ImportListExclusionResource](#schemaimportlistexclusionresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## delete/api/v1/importlistexclusion/{id}

> Code samples

```bash
curl http://localhost:8686/api/v1/importlistexclusion/0 \
  -X DELETE \
  -H "X-Api-Key: ${API_KEY}"
```

`DELETE /api/v1/importlistexclusion/{id}`

<h3 id="deleteapiv1importlistexclusionid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

<h3 id="deleteapiv1importlistexclusionid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v1/importlistexclusion

> Code samples

```bash
curl http://localhost:8686/api/v1/importlistexclusion \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/importlistexclusion`

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "foreignId": "string",
    "artistName": "string"
  }
]
```

<h3 id="getapiv1importlistexclusion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getapiv1importlistexclusion-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ImportListExclusionResource](#schemaimportlistexclusionresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## post/api/v1/importlistexclusion

> Code samples

```bash
curl http://localhost:8686/api/v1/importlistexclusion \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "id": 0,
    "foreignId": "string",
    "artistName": "string"
  }'
```

`POST /api/v1/importlistexclusion`

> Body parameter

```json
{
  "id": 0,
  "foreignId": "string",
  "artistName": "string"
}
```

<h3 id="postapiv1importlistexclusion-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ImportListExclusionResource](#schemaimportlistexclusionresource)|false|none|
|» id|body|integer(int32)|false|none|
|» foreignId|body|string \| null|false|none|
|» artistName|body|string \| null|false|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "foreignId": "string",
  "artistName": "string"
}
```

<h3 id="postapiv1importlistexclusion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ImportListExclusionResource](#schemaimportlistexclusionresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="lidarr-indexer">Indexer</h1>

## get/api/v1/indexer/{id}

> Code samples

```bash
curl http://localhost:8686/api/v1/indexer/0 \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/indexer/{id}`

<h3 id="getapiv1indexerid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "fields": [
    {
      "order": 0,
      "name": "string",
      "label": "string",
      "unit": "string",
      "helpText": "string",
      "helpTextWarning": "string",
      "helpLink": "string",
      "value": null,
      "type": "string",
      "advanced": true,
      "selectOptions": [
        {
          "value": 0,
          "name": "string",
          "order": 0,
          "hint": "string"
        }
      ],
      "selectOptionsProviderAction": "string",
      "section": "string",
      "hidden": "string",
      "privacy": "normal",
      "placeholder": "string",
      "isFloat": true
    }
  ],
  "implementationName": "string",
  "implementation": "string",
  "configContract": "string",
  "infoLink": "string",
  "message": {
    "message": "string",
    "type": "info"
  },
  "tags": [
    0
  ],
  "presets": [
    {}
  ],
  "enableRss": true,
  "enableAutomaticSearch": true,
  "enableInteractiveSearch": true,
  "supportsRss": true,
  "supportsSearch": true,
  "protocol": "unknown",
  "priority": 0,
  "downloadClientId": 0
}
```

<h3 id="getapiv1indexerid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[IndexerResource](#schemaindexerresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## put/api/v1/indexer/{id}

> Code samples

```bash
curl http://localhost:8686/api/v1/indexer/0 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "id": 0,
    "name": "string",
    "fields": [
      {
        "order": 0,
        "name": "string",
        "label": "string",
        "unit": "string",
        "helpText": "string",
        "helpTextWarning": "string",
        "helpLink": "string",
        "value": null,
        "type": "string",
        "advanced": true,
        "selectOptions": [
          {
            "value": 0,
            "name": "string",
            "order": 0,
            "hint": "string"
          }
        ],
        "selectOptionsProviderAction": "string",
        "section": "string",
        "hidden": "string",
        "privacy": "normal",
        "placeholder": "string",
        "isFloat": true
      }
    ],
    "implementationName": "string",
    "implementation": "string",
    "configContract": "string",
    "infoLink": "string",
    "message": {
      "message": "string",
      "type": "info"
    },
    "tags": [
      0
    ],
    "presets": [
      {}
    ],
    "enableRss": true,
    "enableAutomaticSearch": true,
    "enableInteractiveSearch": true,
    "supportsRss": true,
    "supportsSearch": true,
    "protocol": "unknown",
    "priority": 0,
    "downloadClientId": 0
  }'
```

`PUT /api/v1/indexer/{id}`

> Body parameter

```json
{
  "id": 0,
  "name": "string",
  "fields": [
    {
      "order": 0,
      "name": "string",
      "label": "string",
      "unit": "string",
      "helpText": "string",
      "helpTextWarning": "string",
      "helpLink": "string",
      "value": null,
      "type": "string",
      "advanced": true,
      "selectOptions": [
        {
          "value": 0,
          "name": "string",
          "order": 0,
          "hint": "string"
        }
      ],
      "selectOptionsProviderAction": "string",
      "section": "string",
      "hidden": "string",
      "privacy": "normal",
      "placeholder": "string",
      "isFloat": true
    }
  ],
  "implementationName": "string",
  "implementation": "string",
  "configContract": "string",
  "infoLink": "string",
  "message": {
    "message": "string",
    "type": "info"
  },
  "tags": [
    0
  ],
  "presets": [
    {}
  ],
  "enableRss": true,
  "enableAutomaticSearch": true,
  "enableInteractiveSearch": true,
  "supportsRss": true,
  "supportsSearch": true,
  "protocol": "unknown",
  "priority": 0,
  "downloadClientId": 0
}
```

<h3 id="putapiv1indexerid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|
|forceSave|query|boolean|false|none|
|body|body|[IndexerResource](#schemaindexerresource)|false|none|
|» id|body|integer(int32)|false|none|
|» name|body|string \| null|false|none|
|» fields|body|[[Field](#schemafield)]|false|none|
|» implementationName|body|string \| null|false|none|
|» implementation|body|string \| null|false|none|
|» configContract|body|string \| null|false|none|
|» infoLink|body|string \| null|false|none|
|» message|body|[ProviderMessage](#schemaprovidermessage)|false|none|
|» tags|body|[integer(int32)]|false|none|
|» presets|body|[[IndexerResource](#schemaindexerresource)]|false|none|
|» enableRss|body|boolean|false|none|
|» enableAutomaticSearch|body|boolean|false|none|
|» enableInteractiveSearch|body|boolean|false|none|
|» supportsRss|body|boolean|false|none|
|» supportsSearch|body|boolean|false|none|
|» protocol|body|[DownloadProtocol](#schemadownloadprotocol)|false|none|
|» priority|body|integer(int32)|false|none|
|» downloadClientId|body|integer(int32)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» protocol|unknown|
|» protocol|usenet|
|» protocol|torrent|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "fields": [
    {
      "order": 0,
      "name": "string",
      "label": "string",
      "unit": "string",
      "helpText": "string",
      "helpTextWarning": "string",
      "helpLink": "string",
      "value": null,
      "type": "string",
      "advanced": true,
      "selectOptions": [
        {
          "value": 0,
          "name": "string",
          "order": 0,
          "hint": "string"
        }
      ],
      "selectOptionsProviderAction": "string",
      "section": "string",
      "hidden": "string",
      "privacy": "normal",
      "placeholder": "string",
      "isFloat": true
    }
  ],
  "implementationName": "string",
  "implementation": "string",
  "configContract": "string",
  "infoLink": "string",
  "message": {
    "message": "string",
    "type": "info"
  },
  "tags": [
    0
  ],
  "presets": [
    {}
  ],
  "enableRss": true,
  "enableAutomaticSearch": true,
  "enableInteractiveSearch": true,
  "supportsRss": true,
  "supportsSearch": true,
  "protocol": "unknown",
  "priority": 0,
  "downloadClientId": 0
}
```

<h3 id="putapiv1indexerid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[IndexerResource](#schemaindexerresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## delete/api/v1/indexer/{id}

> Code samples

```bash
curl http://localhost:8686/api/v1/indexer/0 \
  -X DELETE \
  -H "X-Api-Key: ${API_KEY}"
```

`DELETE /api/v1/indexer/{id}`

<h3 id="deleteapiv1indexerid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

<h3 id="deleteapiv1indexerid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v1/indexer

> Code samples

```bash
curl http://localhost:8686/api/v1/indexer \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/indexer`

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "name": "string",
    "fields": [
      {
        "order": 0,
        "name": "string",
        "label": "string",
        "unit": "string",
        "helpText": "string",
        "helpTextWarning": "string",
        "helpLink": "string",
        "value": null,
        "type": "string",
        "advanced": true,
        "selectOptions": [
          {
            "value": 0,
            "name": "string",
            "order": 0,
            "hint": "string"
          }
        ],
        "selectOptionsProviderAction": "string",
        "section": "string",
        "hidden": "string",
        "privacy": "normal",
        "placeholder": "string",
        "isFloat": true
      }
    ],
    "implementationName": "string",
    "implementation": "string",
    "configContract": "string",
    "infoLink": "string",
    "message": {
      "message": "string",
      "type": "info"
    },
    "tags": [
      0
    ],
    "presets": [
      {}
    ],
    "enableRss": true,
    "enableAutomaticSearch": true,
    "enableInteractiveSearch": true,
    "supportsRss": true,
    "supportsSearch": true,
    "protocol": "unknown",
    "priority": 0,
    "downloadClientId": 0
  }
]
```

<h3 id="getapiv1indexer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getapiv1indexer-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[IndexerResource](#schemaindexerresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## post/api/v1/indexer

> Code samples

```bash
curl http://localhost:8686/api/v1/indexer \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "id": 0,
    "name": "string",
    "fields": [
      {
        "order": 0,
        "name": "string",
        "label": "string",
        "unit": "string",
        "helpText": "string",
        "helpTextWarning": "string",
        "helpLink": "string",
        "value": null,
        "type": "string",
        "advanced": true,
        "selectOptions": [
          {
            "value": 0,
            "name": "string",
            "order": 0,
            "hint": "string"
          }
        ],
        "selectOptionsProviderAction": "string",
        "section": "string",
        "hidden": "string",
        "privacy": "normal",
        "placeholder": "string",
        "isFloat": true
      }
    ],
    "implementationName": "string",
    "implementation": "string",
    "configContract": "string",
    "infoLink": "string",
    "message": {
      "message": "string",
      "type": "info"
    },
    "tags": [
      0
    ],
    "presets": [
      {}
    ],
    "enableRss": true,
    "enableAutomaticSearch": true,
    "enableInteractiveSearch": true,
    "supportsRss": true,
    "supportsSearch": true,
    "protocol": "unknown",
    "priority": 0,
    "downloadClientId": 0
  }'
```

`POST /api/v1/indexer`

> Body parameter

```json
{
  "id": 0,
  "name": "string",
  "fields": [
    {
      "order": 0,
      "name": "string",
      "label": "string",
      "unit": "string",
      "helpText": "string",
      "helpTextWarning": "string",
      "helpLink": "string",
      "value": null,
      "type": "string",
      "advanced": true,
      "selectOptions": [
        {
          "value": 0,
          "name": "string",
          "order": 0,
          "hint": "string"
        }
      ],
      "selectOptionsProviderAction": "string",
      "section": "string",
      "hidden": "string",
      "privacy": "normal",
      "placeholder": "string",
      "isFloat": true
    }
  ],
  "implementationName": "string",
  "implementation": "string",
  "configContract": "string",
  "infoLink": "string",
  "message": {
    "message": "string",
    "type": "info"
  },
  "tags": [
    0
  ],
  "presets": [
    {}
  ],
  "enableRss": true,
  "enableAutomaticSearch": true,
  "enableInteractiveSearch": true,
  "supportsRss": true,
  "supportsSearch": true,
  "protocol": "unknown",
  "priority": 0,
  "downloadClientId": 0
}
```

<h3 id="postapiv1indexer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|forceSave|query|boolean|false|none|
|body|body|[IndexerResource](#schemaindexerresource)|false|none|
|» id|body|integer(int32)|false|none|
|» name|body|string \| null|false|none|
|» fields|body|[[Field](#schemafield)]|false|none|
|» implementationName|body|string \| null|false|none|
|» implementation|body|string \| null|false|none|
|» configContract|body|string \| null|false|none|
|» infoLink|body|string \| null|false|none|
|» message|body|[ProviderMessage](#schemaprovidermessage)|false|none|
|» tags|body|[integer(int32)]|false|none|
|» presets|body|[[IndexerResource](#schemaindexerresource)]|false|none|
|» enableRss|body|boolean|false|none|
|» enableAutomaticSearch|body|boolean|false|none|
|» enableInteractiveSearch|body|boolean|false|none|
|» supportsRss|body|boolean|false|none|
|» supportsSearch|body|boolean|false|none|
|» protocol|body|[DownloadProtocol](#schemadownloadprotocol)|false|none|
|» priority|body|integer(int32)|false|none|
|» downloadClientId|body|integer(int32)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» protocol|unknown|
|» protocol|usenet|
|» protocol|torrent|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "fields": [
    {
      "order": 0,
      "name": "string",
      "label": "string",
      "unit": "string",
      "helpText": "string",
      "helpTextWarning": "string",
      "helpLink": "string",
      "value": null,
      "type": "string",
      "advanced": true,
      "selectOptions": [
        {
          "value": 0,
          "name": "string",
          "order": 0,
          "hint": "string"
        }
      ],
      "selectOptionsProviderAction": "string",
      "section": "string",
      "hidden": "string",
      "privacy": "normal",
      "placeholder": "string",
      "isFloat": true
    }
  ],
  "implementationName": "string",
  "implementation": "string",
  "configContract": "string",
  "infoLink": "string",
  "message": {
    "message": "string",
    "type": "info"
  },
  "tags": [
    0
  ],
  "presets": [
    {}
  ],
  "enableRss": true,
  "enableAutomaticSearch": true,
  "enableInteractiveSearch": true,
  "supportsRss": true,
  "supportsSearch": true,
  "protocol": "unknown",
  "priority": 0,
  "downloadClientId": 0
}
```

<h3 id="postapiv1indexer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[IndexerResource](#schemaindexerresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## put/api/v1/indexer/bulk

> Code samples

```bash
curl http://localhost:8686/api/v1/indexer/bulk \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "ids": [
      0
    ],
    "tags": [
      0
    ],
    "applyTags": "add",
    "enableRss": true,
    "enableAutomaticSearch": true,
    "enableInteractiveSearch": true,
    "priority": 0
  }'
```

`PUT /api/v1/indexer/bulk`

> Body parameter

```json
{
  "ids": [
    0
  ],
  "tags": [
    0
  ],
  "applyTags": "add",
  "enableRss": true,
  "enableAutomaticSearch": true,
  "enableInteractiveSearch": true,
  "priority": 0
}
```

<h3 id="putapiv1indexerbulk-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[IndexerBulkResource](#schemaindexerbulkresource)|false|none|
|» ids|body|[integer(int32)]|false|none|
|» tags|body|[integer(int32)]|false|none|
|» applyTags|body|[ApplyTags](#schemaapplytags)|false|none|
|» enableRss|body|boolean \| null|false|none|
|» enableAutomaticSearch|body|boolean \| null|false|none|
|» enableInteractiveSearch|body|boolean \| null|false|none|
|» priority|body|integer(int32) \| null|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» applyTags|add|
|» applyTags|remove|
|» applyTags|replace|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "fields": [
    {
      "order": 0,
      "name": "string",
      "label": "string",
      "unit": "string",
      "helpText": "string",
      "helpTextWarning": "string",
      "helpLink": "string",
      "value": null,
      "type": "string",
      "advanced": true,
      "selectOptions": [
        {
          "value": 0,
          "name": "string",
          "order": 0,
          "hint": "string"
        }
      ],
      "selectOptionsProviderAction": "string",
      "section": "string",
      "hidden": "string",
      "privacy": "normal",
      "placeholder": "string",
      "isFloat": true
    }
  ],
  "implementationName": "string",
  "implementation": "string",
  "configContract": "string",
  "infoLink": "string",
  "message": {
    "message": "string",
    "type": "info"
  },
  "tags": [
    0
  ],
  "presets": [
    {}
  ],
  "enableRss": true,
  "enableAutomaticSearch": true,
  "enableInteractiveSearch": true,
  "supportsRss": true,
  "supportsSearch": true,
  "protocol": "unknown",
  "priority": 0,
  "downloadClientId": 0
}
```

<h3 id="putapiv1indexerbulk-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[IndexerResource](#schemaindexerresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## delete/api/v1/indexer/bulk

> Code samples

```bash
curl http://localhost:8686/api/v1/indexer/bulk \
  -X DELETE \
  -H 'Content-Type: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "ids": [
      0
    ],
    "tags": [
      0
    ],
    "applyTags": "add",
    "enableRss": true,
    "enableAutomaticSearch": true,
    "enableInteractiveSearch": true,
    "priority": 0
  }'
```

`DELETE /api/v1/indexer/bulk`

> Body parameter

```json
{
  "ids": [
    0
  ],
  "tags": [
    0
  ],
  "applyTags": "add",
  "enableRss": true,
  "enableAutomaticSearch": true,
  "enableInteractiveSearch": true,
  "priority": 0
}
```

<h3 id="deleteapiv1indexerbulk-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[IndexerBulkResource](#schemaindexerbulkresource)|false|none|
|» ids|body|[integer(int32)]|false|none|
|» tags|body|[integer(int32)]|false|none|
|» applyTags|body|[ApplyTags](#schemaapplytags)|false|none|
|» enableRss|body|boolean \| null|false|none|
|» enableAutomaticSearch|body|boolean \| null|false|none|
|» enableInteractiveSearch|body|boolean \| null|false|none|
|» priority|body|integer(int32) \| null|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» applyTags|add|
|» applyTags|remove|
|» applyTags|replace|

<h3 id="deleteapiv1indexerbulk-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v1/indexer/schema

> Code samples

```bash
curl http://localhost:8686/api/v1/indexer/schema \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/indexer/schema`

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "name": "string",
    "fields": [
      {
        "order": 0,
        "name": "string",
        "label": "string",
        "unit": "string",
        "helpText": "string",
        "helpTextWarning": "string",
        "helpLink": "string",
        "value": null,
        "type": "string",
        "advanced": true,
        "selectOptions": [
          {
            "value": 0,
            "name": "string",
            "order": 0,
            "hint": "string"
          }
        ],
        "selectOptionsProviderAction": "string",
        "section": "string",
        "hidden": "string",
        "privacy": "normal",
        "placeholder": "string",
        "isFloat": true
      }
    ],
    "implementationName": "string",
    "implementation": "string",
    "configContract": "string",
    "infoLink": "string",
    "message": {
      "message": "string",
      "type": "info"
    },
    "tags": [
      0
    ],
    "presets": [
      {}
    ],
    "enableRss": true,
    "enableAutomaticSearch": true,
    "enableInteractiveSearch": true,
    "supportsRss": true,
    "supportsSearch": true,
    "protocol": "unknown",
    "priority": 0,
    "downloadClientId": 0
  }
]
```

<h3 id="getapiv1indexerschema-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getapiv1indexerschema-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[IndexerResource](#schemaindexerresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## post/api/v1/indexer/test

> Code samples

```bash
curl http://localhost:8686/api/v1/indexer/test \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "id": 0,
    "name": "string",
    "fields": [
      {
        "order": 0,
        "name": "string",
        "label": "string",
        "unit": "string",
        "helpText": "string",
        "helpTextWarning": "string",
        "helpLink": "string",
        "value": null,
        "type": "string",
        "advanced": true,
        "selectOptions": [
          {
            "value": 0,
            "name": "string",
            "order": 0,
            "hint": "string"
          }
        ],
        "selectOptionsProviderAction": "string",
        "section": "string",
        "hidden": "string",
        "privacy": "normal",
        "placeholder": "string",
        "isFloat": true
      }
    ],
    "implementationName": "string",
    "implementation": "string",
    "configContract": "string",
    "infoLink": "string",
    "message": {
      "message": "string",
      "type": "info"
    },
    "tags": [
      0
    ],
    "presets": [
      {}
    ],
    "enableRss": true,
    "enableAutomaticSearch": true,
    "enableInteractiveSearch": true,
    "supportsRss": true,
    "supportsSearch": true,
    "protocol": "unknown",
    "priority": 0,
    "downloadClientId": 0
  }'
```

`POST /api/v1/indexer/test`

> Body parameter

```json
{
  "id": 0,
  "name": "string",
  "fields": [
    {
      "order": 0,
      "name": "string",
      "label": "string",
      "unit": "string",
      "helpText": "string",
      "helpTextWarning": "string",
      "helpLink": "string",
      "value": null,
      "type": "string",
      "advanced": true,
      "selectOptions": [
        {
          "value": 0,
          "name": "string",
          "order": 0,
          "hint": "string"
        }
      ],
      "selectOptionsProviderAction": "string",
      "section": "string",
      "hidden": "string",
      "privacy": "normal",
      "placeholder": "string",
      "isFloat": true
    }
  ],
  "implementationName": "string",
  "implementation": "string",
  "configContract": "string",
  "infoLink": "string",
  "message": {
    "message": "string",
    "type": "info"
  },
  "tags": [
    0
  ],
  "presets": [
    {}
  ],
  "enableRss": true,
  "enableAutomaticSearch": true,
  "enableInteractiveSearch": true,
  "supportsRss": true,
  "supportsSearch": true,
  "protocol": "unknown",
  "priority": 0,
  "downloadClientId": 0
}
```

<h3 id="postapiv1indexertest-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|forceTest|query|boolean|false|none|
|body|body|[IndexerResource](#schemaindexerresource)|false|none|
|» id|body|integer(int32)|false|none|
|» name|body|string \| null|false|none|
|» fields|body|[[Field](#schemafield)]|false|none|
|» implementationName|body|string \| null|false|none|
|» implementation|body|string \| null|false|none|
|» configContract|body|string \| null|false|none|
|» infoLink|body|string \| null|false|none|
|» message|body|[ProviderMessage](#schemaprovidermessage)|false|none|
|» tags|body|[integer(int32)]|false|none|
|» presets|body|[[IndexerResource](#schemaindexerresource)]|false|none|
|» enableRss|body|boolean|false|none|
|» enableAutomaticSearch|body|boolean|false|none|
|» enableInteractiveSearch|body|boolean|false|none|
|» supportsRss|body|boolean|false|none|
|» supportsSearch|body|boolean|false|none|
|» protocol|body|[DownloadProtocol](#schemadownloadprotocol)|false|none|
|» priority|body|integer(int32)|false|none|
|» downloadClientId|body|integer(int32)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» protocol|unknown|
|» protocol|usenet|
|» protocol|torrent|

<h3 id="postapiv1indexertest-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## post/api/v1/indexer/testall

> Code samples

```bash
curl http://localhost:8686/api/v1/indexer/testall \
  -X POST \
  -H "X-Api-Key: ${API_KEY}"
```

`POST /api/v1/indexer/testall`

<h3 id="postapiv1indexertestall-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## post/api/v1/indexer/action/{name}

> Code samples

```bash
curl http://localhost:8686/api/v1/indexer/action/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "id": 0,
    "name": "string",
    "fields": [
      {
        "order": 0,
        "name": "string",
        "label": "string",
        "unit": "string",
        "helpText": "string",
        "helpTextWarning": "string",
        "helpLink": "string",
        "value": null,
        "type": "string",
        "advanced": true,
        "selectOptions": [
          {
            "value": 0,
            "name": "string",
            "order": 0,
            "hint": "string"
          }
        ],
        "selectOptionsProviderAction": "string",
        "section": "string",
        "hidden": "string",
        "privacy": "normal",
        "placeholder": "string",
        "isFloat": true
      }
    ],
    "implementationName": "string",
    "implementation": "string",
    "configContract": "string",
    "infoLink": "string",
    "message": {
      "message": "string",
      "type": "info"
    },
    "tags": [
      0
    ],
    "presets": [
      {}
    ],
    "enableRss": true,
    "enableAutomaticSearch": true,
    "enableInteractiveSearch": true,
    "supportsRss": true,
    "supportsSearch": true,
    "protocol": "unknown",
    "priority": 0,
    "downloadClientId": 0
  }'
```

`POST /api/v1/indexer/action/{name}`

> Body parameter

```json
{
  "id": 0,
  "name": "string",
  "fields": [
    {
      "order": 0,
      "name": "string",
      "label": "string",
      "unit": "string",
      "helpText": "string",
      "helpTextWarning": "string",
      "helpLink": "string",
      "value": null,
      "type": "string",
      "advanced": true,
      "selectOptions": [
        {
          "value": 0,
          "name": "string",
          "order": 0,
          "hint": "string"
        }
      ],
      "selectOptionsProviderAction": "string",
      "section": "string",
      "hidden": "string",
      "privacy": "normal",
      "placeholder": "string",
      "isFloat": true
    }
  ],
  "implementationName": "string",
  "implementation": "string",
  "configContract": "string",
  "infoLink": "string",
  "message": {
    "message": "string",
    "type": "info"
  },
  "tags": [
    0
  ],
  "presets": [
    {}
  ],
  "enableRss": true,
  "enableAutomaticSearch": true,
  "enableInteractiveSearch": true,
  "supportsRss": true,
  "supportsSearch": true,
  "protocol": "unknown",
  "priority": 0,
  "downloadClientId": 0
}
```

<h3 id="postapiv1indexeractionname-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|none|
|body|body|[IndexerResource](#schemaindexerresource)|false|none|
|» id|body|integer(int32)|false|none|
|» name|body|string \| null|false|none|
|» fields|body|[[Field](#schemafield)]|false|none|
|» implementationName|body|string \| null|false|none|
|» implementation|body|string \| null|false|none|
|» configContract|body|string \| null|false|none|
|» infoLink|body|string \| null|false|none|
|» message|body|[ProviderMessage](#schemaprovidermessage)|false|none|
|» tags|body|[integer(int32)]|false|none|
|» presets|body|[[IndexerResource](#schemaindexerresource)]|false|none|
|» enableRss|body|boolean|false|none|
|» enableAutomaticSearch|body|boolean|false|none|
|» enableInteractiveSearch|body|boolean|false|none|
|» supportsRss|body|boolean|false|none|
|» supportsSearch|body|boolean|false|none|
|» protocol|body|[DownloadProtocol](#schemadownloadprotocol)|false|none|
|» priority|body|integer(int32)|false|none|
|» downloadClientId|body|integer(int32)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» protocol|unknown|
|» protocol|usenet|
|» protocol|torrent|

<h3 id="postapiv1indexeractionname-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="lidarr-indexerconfig">IndexerConfig</h1>

## get/api/v1/config/indexer/{id}

> Code samples

```bash
curl http://localhost:8686/api/v1/config/indexer/0 \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/config/indexer/{id}`

<h3 id="getapiv1configindexerid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "minimumAge": 0,
  "maximumSize": 0,
  "retention": 0,
  "rssSyncInterval": 0
}
```

<h3 id="getapiv1configindexerid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[IndexerConfigResource](#schemaindexerconfigresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## put/api/v1/config/indexer/{id}

> Code samples

```bash
curl http://localhost:8686/api/v1/config/indexer/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "id": 0,
    "minimumAge": 0,
    "maximumSize": 0,
    "retention": 0,
    "rssSyncInterval": 0
  }'
```

`PUT /api/v1/config/indexer/{id}`

> Body parameter

```json
{
  "id": 0,
  "minimumAge": 0,
  "maximumSize": 0,
  "retention": 0,
  "rssSyncInterval": 0
}
```

<h3 id="putapiv1configindexerid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|[IndexerConfigResource](#schemaindexerconfigresource)|false|none|
|» id|body|integer(int32)|false|none|
|» minimumAge|body|integer(int32)|false|none|
|» maximumSize|body|integer(int32)|false|none|
|» retention|body|integer(int32)|false|none|
|» rssSyncInterval|body|integer(int32)|false|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "minimumAge": 0,
  "maximumSize": 0,
  "retention": 0,
  "rssSyncInterval": 0
}
```

<h3 id="putapiv1configindexerid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[IndexerConfigResource](#schemaindexerconfigresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v1/config/indexer

> Code samples

```bash
curl http://localhost:8686/api/v1/config/indexer \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/config/indexer`

> Example responses

> 200 Response

```json
{
  "id": 0,
  "minimumAge": 0,
  "maximumSize": 0,
  "retention": 0,
  "rssSyncInterval": 0
}
```

<h3 id="getapiv1configindexer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[IndexerConfigResource](#schemaindexerconfigresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="lidarr-indexerflag">IndexerFlag</h1>

## get/api/v1/indexerflag

> Code samples

```bash
curl http://localhost:8686/api/v1/indexerflag \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/indexerflag`

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "name": "string",
    "nameLower": "string"
  }
]
```

<h3 id="getapiv1indexerflag-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getapiv1indexerflag-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[IndexerFlagResource](#schemaindexerflagresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="lidarr-language">Language</h1>

## get/api/v1/language/{id}

> Code samples

```bash
curl http://localhost:8686/api/v1/language/0 \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/language/{id}`

<h3 id="getapiv1languageid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "nameLower": "string"
}
```

<h3 id="getapiv1languageid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[LanguageResource](#schemalanguageresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v1/language

> Code samples

```bash
curl http://localhost:8686/api/v1/language \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/language`

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "name": "string",
    "nameLower": "string"
  }
]
```

<h3 id="getapiv1language-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getapiv1language-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[LanguageResource](#schemalanguageresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="lidarr-localization">Localization</h1>

## get/api/v1/localization

> Code samples

```bash
curl http://localhost:8686/api/v1/localization \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/localization`

> Example responses

> 200 Response

```json
{
  "id": 0,
  "strings": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="getapiv1localization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[LocalizationResource](#schemalocalizationresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="lidarr-log">Log</h1>

## get/api/v1/log

> Code samples

```bash
curl http://localhost:8686/api/v1/log \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/log`

<h3 id="getapiv1log-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer(int32)|false|none|
|pageSize|query|integer(int32)|false|none|
|sortKey|query|string|false|none|
|sortDirection|query|[SortDirection](#schemasortdirection)|false|none|
|level|query|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sortDirection|default|
|sortDirection|ascending|
|sortDirection|descending|

> Example responses

> 200 Response

```json
{
  "page": 0,
  "pageSize": 0,
  "sortKey": "string",
  "sortDirection": "default",
  "totalRecords": 0,
  "records": [
    {
      "id": 0,
      "time": "1970-01-01T00:00:00Z",
      "exception": "string",
      "exceptionType": "string",
      "level": "string",
      "logger": "string",
      "message": "string",
      "method": "string"
    }
  ]
}
```

<h3 id="getapiv1log-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[LogResourcePagingResource](#schemalogresourcepagingresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="lidarr-logfile">LogFile</h1>

## get/api/v1/log/file

> Code samples

```bash
curl http://localhost:8686/api/v1/log/file \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/log/file`

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "filename": "string",
    "lastWriteTime": "1970-01-01T00:00:00Z",
    "contentsUrl": "string",
    "downloadUrl": "string"
  }
]
```

<h3 id="getapiv1logfile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getapiv1logfile-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[LogFileResource](#schemalogfileresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v1/log/file/{filename}

> Code samples

```bash
curl http://localhost:8686/api/v1/log/file/string \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/log/file/{filename}`

<h3 id="getapiv1logfilefilename-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|filename|path|string|true|none|

<h3 id="getapiv1logfilefilename-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="lidarr-manualimport">ManualImport</h1>

## get/api/v1/manualimport

> Code samples

```bash
curl http://localhost:8686/api/v1/manualimport \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/manualimport`

<h3 id="getapiv1manualimport-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|folder|query|string|false|none|
|downloadId|query|string|false|none|
|artistId|query|integer(int32)|false|none|
|filterExistingFiles|query|boolean|false|none|
|replaceExistingFiles|query|boolean|false|none|

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "path": "string",
    "name": "string",
    "size": 0,
    "artist": {
      "id": 0,
      "status": "continuing",
      "ended": true,
      "artistName": "string",
      "foreignArtistId": "string",
      "mbId": "string",
      "tadbId": 0,
      "discogsId": 0,
      "allMusicId": "string",
      "overview": "string",
      "artistType": "string",
      "disambiguation": "string",
      "links": [
        {
          "url": "string",
          "name": "string"
        }
      ],
      "nextAlbum": {},
      "lastAlbum": {},
      "images": [
        {
          "url": "string",
          "coverType": "unknown",
          "extension": "string",
          "remoteUrl": "string"
        }
      ],
      "members": [
        {
          "name": "string",
          "instrument": "string",
          "images": [
            {
              "url": "string",
              "coverType": "unknown",
              "extension": "string",
              "remoteUrl": "string"
            }
          ]
        }
      ],
      "remotePoster": "string",
      "path": "string",
      "qualityProfileId": 0,
      "metadataProfileId": 0,
      "monitored": true,
      "monitorNewItems": "all",
      "rootFolderPath": "string",
      "folder": "string",
      "genres": [
        "string"
      ],
      "cleanName": "string",
      "sortName": "string",
      "tags": [
        0
      ],
      "added": "1970-01-01T00:00:00Z",
      "addOptions": {
        "monitor": "all",
        "albumsToMonitor": [
          "string"
        ],
        "monitored": true,
        "searchForMissingAlbums": true
      },
      "ratings": {
        "votes": 0,
        "value": 0
      },
      "statistics": {
        "albumCount": 0,
        "trackFileCount": 0,
        "trackCount": 0,
        "totalTrackCount": 0,
        "sizeOnDisk": 0,
        "percentOfTracks": 0
      }
    },
    "album": {
      "id": 0,
      "title": "string",
      "disambiguation": "string",
      "overview": "string",
      "artistId": 0,
      "foreignAlbumId": "string",
      "monitored": true,
      "anyReleaseOk": true,
      "profileId": 0,
      "duration": 0,
      "albumType": "string",
      "secondaryTypes": [
        "string"
      ],
      "mediumCount": 0,
      "ratings": {
        "votes": 0,
        "value": 0
      },
      "releaseDate": "1970-01-01T00:00:00Z",
      "releases": [
        {
          "id": 0,
          "albumId": 0,
          "foreignReleaseId": "string",
          "title": "string",
          "status": "string",
          "duration": 0,
          "trackCount": 0,
          "media": [
            {
              "mediumNumber": 0,
              "mediumName": "string",
              "mediumFormat": "string"
            }
          ],
          "mediumCount": 0,
          "disambiguation": "string",
          "country": [
            "string"
          ],
          "label": [
            "string"
          ],
          "format": "string",
          "monitored": true
        }
      ],
      "genres": [
        "string"
      ],
      "media": [
        {
          "mediumNumber": 0,
          "mediumName": "string",
          "mediumFormat": "string"
        }
      ],
      "artist": {},
      "images": [
        {
          "url": "string",
          "coverType": "unknown",
          "extension": "string",
          "remoteUrl": "string"
        }
      ],
      "links": [
        {
          "url": "string",
          "name": "string"
        }
      ],
      "lastSearchTime": "1970-01-01T00:00:00Z",
      "statistics": {
        "trackFileCount": 0,
        "trackCount": 0,
        "totalTrackCount": 0,
        "sizeOnDisk": 0,
        "percentOfTracks": 0
      },
      "addOptions": {
        "addType": "automatic",
        "searchForNewAlbum": true
      },
      "remoteCover": "string"
    },
    "albumReleaseId": 0,
    "tracks": [
      {
        "id": 0,
        "artistId": 0,
        "foreignTrackId": "string",
        "foreignRecordingId": "string",
        "trackFileId": 0,
        "albumId": 0,
        "explicit": true,
        "absoluteTrackNumber": 0,
        "trackNumber": "string",
        "title": "string",
        "duration": 0,
        "trackFile": {
          "id": 0,
          "artistId": 0,
          "albumId": 0,
          "path": "string",
          "size": 0,
          "dateAdded": "1970-01-01T00:00:00Z",
          "sceneName": "string",
          "releaseGroup": "string",
          "quality": {
            "quality": {
              "id": 0,
              "name": "string"
            },
            "revision": {
              "version": 0,
              "real": 0,
              "isRepack": true
            }
          },
          "qualityWeight": 0,
          "customFormats": [
            {
              "id": 0,
              "name": "string",
              "includeCustomFormatWhenRenaming": true,
              "specifications": [
                {
                  "id": 0,
                  "name": "string",
                  "implementation": "string",
                  "implementationName": "string",
                  "infoLink": "string",
                  "negate": true,
                  "required": true,
                  "fields": [
                    {
                      "order": 0,
                      "name": "string",
                      "label": "string",
                      "unit": "string",
                      "helpText": "string",
                      "helpTextWarning": "string",
                      "helpLink": "string",
                      "value": null,
                      "type": "string",
                      "advanced": true,
                      "selectOptions": [
                        {
                          "value": 0,
                          "name": "string",
                          "order": 0,
                          "hint": "string"
                        }
                      ],
                      "selectOptionsProviderAction": "string",
                      "section": "string",
                      "hidden": "string",
                      "privacy": "normal",
                      "placeholder": "string",
                      "isFloat": true
                    }
                  ],
                  "presets": [
                    {}
                  ]
                }
              ]
            }
          ],
          "customFormatScore": 0,
          "indexerFlags": 0,
          "mediaInfo": {
            "id": 0,
            "audioChannels": 0,
            "audioBitRate": "string",
            "audioCodec": "string",
            "audioBits": "string",
            "audioSampleRate": "string"
          },
          "qualityCutoffNotMet": true,
          "audioTags": {
            "title": "string",
            "cleanTitle": "string",
            "artistTitle": "string",
            "albumTitle": "string",
            "artistTitleInfo": {
              "title": "string",
              "titleWithoutYear": "string",
              "year": 0
            },
            "artistMBId": "string",
            "albumMBId": "string",
            "releaseMBId": "string",
            "recordingMBId": "string",
            "trackMBId": "string",
            "discNumber": 0,
            "discCount": 0,
            "country": {
              "twoLetterCode": "string",
              "name": "string"
            },
            "year": 0,
            "label": "string",
            "catalogNumber": "string",
            "disambiguation": "string",
            "duration": "string",
            "quality": {
              "quality": {
                "id": 0,
                "name": "string"
              },
              "revision": {
                "version": 0,
                "real": 0,
                "isRepack": true
              }
            },
            "mediaInfo": {
              "audioFormat": "string",
              "audioBitrate": 0,
              "audioChannels": 0,
              "audioBits": 0,
              "audioSampleRate": 0
            },
            "trackNumbers": [
              0
            ],
            "releaseGroup": "string",
            "releaseHash": "string"
          }
        },
        "mediumNumber": 0,
        "hasFile": true,
        "artist": {
          "id": 0,
          "status": "continuing",
          "ended": true,
          "artistName": "string",
          "foreignArtistId": "string",
          "mbId": "string",
          "tadbId": 0,
          "discogsId": 0,
          "allMusicId": "string",
          "overview": "string",
          "artistType": "string",
          "disambiguation": "string",
          "links": [
            {
              "url": "string",
              "name": "string"
            }
          ],
          "nextAlbum": {},
          "lastAlbum": {},
          "images": [
            {
              "url": "string",
              "coverType": "unknown",
              "extension": "string",
              "remoteUrl": "string"
            }
          ],
          "members": [
            {
              "name": "string",
              "instrument": "string",
              "images": [
                {
                  "url": "string",
                  "coverType": "unknown",
                  "extension": "string",
                  "remoteUrl": "string"
                }
              ]
            }
          ],
          "remotePoster": "string",
          "path": "string",
          "qualityProfileId": 0,
          "metadataProfileId": 0,
          "monitored": true,
          "monitorNewItems": "all",
          "rootFolderPath": "string",
          "folder": "string",
          "genres": [
            "string"
          ],
          "cleanName": "string",
          "sortName": "string",
          "tags": [
            0
          ],
          "added": "1970-01-01T00:00:00Z",
          "addOptions": {
            "monitor": "all",
            "albumsToMonitor": [
              "string"
            ],
            "monitored": true,
            "searchForMissingAlbums": true
          },
          "ratings": {
            "votes": 0,
            "value": 0
          },
          "statistics": {
            "albumCount": 0,
            "trackFileCount": 0,
            "trackCount": 0,
            "totalTrackCount": 0,
            "sizeOnDisk": 0,
            "percentOfTracks": 0
          }
        },
        "ratings": {
          "votes": 0,
          "value": 0
        }
      }
    ],
    "quality": {
      "quality": {
        "id": 0,
        "name": "string"
      },
      "revision": {
        "version": 0,
        "real": 0,
        "isRepack": true
      }
    },
    "releaseGroup": "string",
    "qualityWeight": 0,
    "downloadId": "string",
    "indexerFlags": 0,
    "rejections": [
      {
        "reason": "string",
        "type": "permanent"
      }
    ],
    "audioTags": {
      "title": "string",
      "cleanTitle": "string",
      "artistTitle": "string",
      "albumTitle": "string",
      "artistTitleInfo": {
        "title": "string",
        "titleWithoutYear": "string",
        "year": 0
      },
      "artistMBId": "string",
      "albumMBId": "string",
      "releaseMBId": "string",
      "recordingMBId": "string",
      "trackMBId": "string",
      "discNumber": 0,
      "discCount": 0,
      "country": {
        "twoLetterCode": "string",
        "name": "string"
      },
      "year": 0,
      "label": "string",
      "catalogNumber": "string",
      "disambiguation": "string",
      "duration": "string",
      "quality": {
        "quality": {
          "id": 0,
          "name": "string"
        },
        "revision": {
          "version": 0,
          "real": 0,
          "isRepack": true
        }
      },
      "mediaInfo": {
        "audioFormat": "string",
        "audioBitrate": 0,
        "audioChannels": 0,
        "audioBits": 0,
        "audioSampleRate": 0
      },
      "trackNumbers": [
        0
      ],
      "releaseGroup": "string",
      "releaseHash": "string"
    },
    "additionalFile": true,
    "replaceExistingFiles": true,
    "disableReleaseSwitching": true
  }
]
```

<h3 id="getapiv1manualimport-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getapiv1manualimport-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ManualImportResource](#schemamanualimportresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## post/api/v1/manualimport

> Code samples

```bash
curl http://localhost:8686/api/v1/manualimport \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '[
    {
      "id": 0,
      "path": "string",
      "name": "string",
      "artistId": 0,
      "albumId": 0,
      "albumReleaseId": 0,
      "tracks": [
        {
          "id": 0,
          "artistId": 0,
          "foreignTrackId": "string",
          "foreignRecordingId": "string",
          "trackFileId": 0,
          "albumId": 0,
          "explicit": true,
          "absoluteTrackNumber": 0,
          "trackNumber": "string",
          "title": "string",
          "duration": 0,
          "trackFile": {
            "id": 0,
            "artistId": 0,
            "albumId": 0,
            "path": "string",
            "size": 0,
            "dateAdded": "1970-01-01T00:00:00Z",
            "sceneName": "string",
            "releaseGroup": "string",
            "quality": {
              "quality": {
                "id": 0,
                "name": "string"
              },
              "revision": {
                "version": 0,
                "real": 0,
                "isRepack": true
              }
            },
            "qualityWeight": 0,
            "customFormats": [
              {
                "id": 0,
                "name": "string",
                "includeCustomFormatWhenRenaming": true,
                "specifications": [
                  {
                    "id": 0,
                    "name": "string",
                    "implementation": "string",
                    "implementationName": "string",
                    "infoLink": "string",
                    "negate": true,
                    "required": true,
                    "fields": [
                      {
                        "order": 0,
                        "name": "string",
                        "label": "string",
                        "unit": "string",
                        "helpText": "string",
                        "helpTextWarning": "string",
                        "helpLink": "string",
                        "value": null,
                        "type": "string",
                        "advanced": true,
                        "selectOptions": [
                          {
                            "value": 0,
                            "name": "string",
                            "order": 0,
                            "hint": "string"
                          }
                        ],
                        "selectOptionsProviderAction": "string",
                        "section": "string",
                        "hidden": "string",
                        "privacy": "normal",
                        "placeholder": "string",
                        "isFloat": true
                      }
                    ],
                    "presets": [
                      {}
                    ]
                  }
                ]
              }
            ],
            "customFormatScore": 0,
            "indexerFlags": 0,
            "mediaInfo": {
              "id": 0,
              "audioChannels": 0,
              "audioBitRate": "string",
              "audioCodec": "string",
              "audioBits": "string",
              "audioSampleRate": "string"
            },
            "qualityCutoffNotMet": true,
            "audioTags": {
              "title": "string",
              "cleanTitle": "string",
              "artistTitle": "string",
              "albumTitle": "string",
              "artistTitleInfo": {
                "title": "string",
                "titleWithoutYear": "string",
                "year": 0
              },
              "artistMBId": "string",
              "albumMBId": "string",
              "releaseMBId": "string",
              "recordingMBId": "string",
              "trackMBId": "string",
              "discNumber": 0,
              "discCount": 0,
              "country": {
                "twoLetterCode": "string",
                "name": "string"
              },
              "year": 0,
              "label": "string",
              "catalogNumber": "string",
              "disambiguation": "string",
              "duration": "string",
              "quality": {
                "quality": {
                  "id": 0,
                  "name": "string"
                },
                "revision": {
                  "version": 0,
                  "real": 0,
                  "isRepack": true
                }
              },
              "mediaInfo": {
                "audioFormat": "string",
                "audioBitrate": 0,
                "audioChannels": 0,
                "audioBits": 0,
                "audioSampleRate": 0
              },
              "trackNumbers": [
                0
              ],
              "releaseGroup": "string",
              "releaseHash": "string"
            }
          },
          "mediumNumber": 0,
          "hasFile": true,
          "artist": {
            "id": 0,
            "status": "continuing",
            "artistName": "string",
            "foreignArtistId": "string",
            "mbId": "string",
            "tadbId": 0,
            "discogsId": 0,
            "allMusicId": "string",
            "overview": "string",
            "artistType": "string",
            "disambiguation": "string",
            "links": [
              {
                "url": "string",
                "name": "string"
              }
            ],
            "nextAlbum": {},
            "lastAlbum": {},
            "images": [
              {
                "url": "string",
                "coverType": "unknown",
                "remoteUrl": "string"
              }
            ],
            "members": [
              {
                "name": "string",
                "instrument": "string",
                "images": [
                  {
                    "url": "string",
                    "coverType": "unknown",
                    "remoteUrl": "string"
                  }
                ]
              }
            ],
            "remotePoster": "string",
            "path": "string",
            "qualityProfileId": 0,
            "metadataProfileId": 0,
            "monitored": true,
            "monitorNewItems": "all",
            "rootFolderPath": "string",
            "folder": "string",
            "genres": [
              "string"
            ],
            "cleanName": "string",
            "sortName": "string",
            "tags": [
              0
            ],
            "added": "1970-01-01T00:00:00Z",
            "addOptions": {
              "monitor": "all",
              "albumsToMonitor": [
                "string"
              ],
              "monitored": true,
              "searchForMissingAlbums": true
            },
            "ratings": {
              "votes": 0,
              "value": 0
            },
            "statistics": {
              "albumCount": 0,
              "trackFileCount": 0,
              "trackCount": 0,
              "totalTrackCount": 0,
              "sizeOnDisk": 0
            }
          },
          "ratings": {
            "votes": 0,
            "value": 0
          }
        }
      ],
      "trackIds": [
        0
      ],
      "quality": {
        "quality": {
          "id": 0,
          "name": "string"
        },
        "revision": {
          "version": 0,
          "real": 0,
          "isRepack": true
        }
      },
      "releaseGroup": "string",
      "indexerFlags": 0,
      "downloadId": "string",
      "additionalFile": true,
      "replaceExistingFiles": true,
      "disableReleaseSwitching": true,
      "rejections": [
        {
          "reason": "string",
          "type": "permanent"
        }
      ]
    }
  ]'
```

`POST /api/v1/manualimport`

> Body parameter

```json
[
  {
    "id": 0,
    "path": "string",
    "name": "string",
    "artistId": 0,
    "albumId": 0,
    "albumReleaseId": 0,
    "tracks": [
      {
        "id": 0,
        "artistId": 0,
        "foreignTrackId": "string",
        "foreignRecordingId": "string",
        "trackFileId": 0,
        "albumId": 0,
        "explicit": true,
        "absoluteTrackNumber": 0,
        "trackNumber": "string",
        "title": "string",
        "duration": 0,
        "trackFile": {
          "id": 0,
          "artistId": 0,
          "albumId": 0,
          "path": "string",
          "size": 0,
          "dateAdded": "1970-01-01T00:00:00Z",
          "sceneName": "string",
          "releaseGroup": "string",
          "quality": {
            "quality": {
              "id": 0,
              "name": "string"
            },
            "revision": {
              "version": 0,
              "real": 0,
              "isRepack": true
            }
          },
          "qualityWeight": 0,
          "customFormats": [
            {
              "id": 0,
              "name": "string",
              "includeCustomFormatWhenRenaming": true,
              "specifications": [
                {
                  "id": 0,
                  "name": "string",
                  "implementation": "string",
                  "implementationName": "string",
                  "infoLink": "string",
                  "negate": true,
                  "required": true,
                  "fields": [
                    {
                      "order": 0,
                      "name": "string",
                      "label": "string",
                      "unit": "string",
                      "helpText": "string",
                      "helpTextWarning": "string",
                      "helpLink": "string",
                      "value": null,
                      "type": "string",
                      "advanced": true,
                      "selectOptions": [
                        {
                          "value": 0,
                          "name": "string",
                          "order": 0,
                          "hint": "string"
                        }
                      ],
                      "selectOptionsProviderAction": "string",
                      "section": "string",
                      "hidden": "string",
                      "privacy": "normal",
                      "placeholder": "string",
                      "isFloat": true
                    }
                  ],
                  "presets": [
                    {}
                  ]
                }
              ]
            }
          ],
          "customFormatScore": 0,
          "indexerFlags": 0,
          "mediaInfo": {
            "id": 0,
            "audioChannels": 0,
            "audioBitRate": "string",
            "audioCodec": "string",
            "audioBits": "string",
            "audioSampleRate": "string"
          },
          "qualityCutoffNotMet": true,
          "audioTags": {
            "title": "string",
            "cleanTitle": "string",
            "artistTitle": "string",
            "albumTitle": "string",
            "artistTitleInfo": {
              "title": "string",
              "titleWithoutYear": "string",
              "year": 0
            },
            "artistMBId": "string",
            "albumMBId": "string",
            "releaseMBId": "string",
            "recordingMBId": "string",
            "trackMBId": "string",
            "discNumber": 0,
            "discCount": 0,
            "country": {
              "twoLetterCode": "string",
              "name": "string"
            },
            "year": 0,
            "label": "string",
            "catalogNumber": "string",
            "disambiguation": "string",
            "duration": "string",
            "quality": {
              "quality": {
                "id": 0,
                "name": "string"
              },
              "revision": {
                "version": 0,
                "real": 0,
                "isRepack": true
              }
            },
            "mediaInfo": {
              "audioFormat": "string",
              "audioBitrate": 0,
              "audioChannels": 0,
              "audioBits": 0,
              "audioSampleRate": 0
            },
            "trackNumbers": [
              0
            ],
            "releaseGroup": "string",
            "releaseHash": "string"
          }
        },
        "mediumNumber": 0,
        "hasFile": true,
        "artist": {
          "id": 0,
          "status": "continuing",
          "artistName": "string",
          "foreignArtistId": "string",
          "mbId": "string",
          "tadbId": 0,
          "discogsId": 0,
          "allMusicId": "string",
          "overview": "string",
          "artistType": "string",
          "disambiguation": "string",
          "links": [
            {
              "url": "string",
              "name": "string"
            }
          ],
          "nextAlbum": {},
          "lastAlbum": {},
          "images": [
            {
              "url": "string",
              "coverType": "unknown",
              "remoteUrl": "string"
            }
          ],
          "members": [
            {
              "name": "string",
              "instrument": "string",
              "images": [
                {
                  "url": "string",
                  "coverType": "unknown",
                  "remoteUrl": "string"
                }
              ]
            }
          ],
          "remotePoster": "string",
          "path": "string",
          "qualityProfileId": 0,
          "metadataProfileId": 0,
          "monitored": true,
          "monitorNewItems": "all",
          "rootFolderPath": "string",
          "folder": "string",
          "genres": [
            "string"
          ],
          "cleanName": "string",
          "sortName": "string",
          "tags": [
            0
          ],
          "added": "1970-01-01T00:00:00Z",
          "addOptions": {
            "monitor": "all",
            "albumsToMonitor": [
              "string"
            ],
            "monitored": true,
            "searchForMissingAlbums": true
          },
          "ratings": {
            "votes": 0,
            "value": 0
          },
          "statistics": {
            "albumCount": 0,
            "trackFileCount": 0,
            "trackCount": 0,
            "totalTrackCount": 0,
            "sizeOnDisk": 0
          }
        },
        "ratings": {
          "votes": 0,
          "value": 0
        }
      }
    ],
    "trackIds": [
      0
    ],
    "quality": {
      "quality": {
        "id": 0,
        "name": "string"
      },
      "revision": {
        "version": 0,
        "real": 0,
        "isRepack": true
      }
    },
    "releaseGroup": "string",
    "indexerFlags": 0,
    "downloadId": "string",
    "additionalFile": true,
    "replaceExistingFiles": true,
    "disableReleaseSwitching": true,
    "rejections": [
      {
        "reason": "string",
        "type": "permanent"
      }
    ]
  }
]
```

<h3 id="postapiv1manualimport-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[[ManualImportUpdateResource](#schemamanualimportupdateresource)]|false|none|

<h3 id="postapiv1manualimport-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="lidarr-mediacover">MediaCover</h1>

## get/api/v1/mediacover/artist/{artistId}/{filename}

> Code samples

```bash
curl http://localhost:8686/api/v1/mediacover/artist/0/string \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/mediacover/artist/{artistId}/{filename}`

<h3 id="getapiv1mediacoverartistartistidfilename-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|artistId|path|integer(int32)|true|none|
|filename|path|string|true|none|

<h3 id="getapiv1mediacoverartistartistidfilename-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v1/mediacover/album/{albumId}/{filename}

> Code samples

```bash
curl http://localhost:8686/api/v1/mediacover/album/0/string \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/mediacover/album/{albumId}/{filename}`

<h3 id="getapiv1mediacoveralbumalbumidfilename-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|albumId|path|integer(int32)|true|none|
|filename|path|string|true|none|

<h3 id="getapiv1mediacoveralbumalbumidfilename-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="lidarr-mediamanagementconfig">MediaManagementConfig</h1>

## get/api/v1/config/mediamanagement/{id}

> Code samples

```bash
curl http://localhost:8686/api/v1/config/mediamanagement/0 \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/config/mediamanagement/{id}`

<h3 id="getapiv1configmediamanagementid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "autoUnmonitorPreviouslyDownloadedTracks": true,
  "recycleBin": "string",
  "recycleBinCleanupDays": 0,
  "downloadPropersAndRepacks": "preferAndUpgrade",
  "createEmptyArtistFolders": true,
  "deleteEmptyFolders": true,
  "fileDate": "none",
  "watchLibraryForChanges": true,
  "rescanAfterRefresh": "always",
  "allowFingerprinting": "never",
  "setPermissionsLinux": true,
  "chmodFolder": "string",
  "chownGroup": "string",
  "skipFreeSpaceCheckWhenImporting": true,
  "minimumFreeSpaceWhenImporting": 0,
  "copyUsingHardlinks": true,
  "enableMediaInfo": true,
  "useScriptImport": true,
  "scriptImportPath": "string",
  "importExtraFiles": true,
  "extraFileExtensions": "string"
}
```

<h3 id="getapiv1configmediamanagementid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[MediaManagementConfigResource](#schemamediamanagementconfigresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## put/api/v1/config/mediamanagement/{id}

> Code samples

```bash
curl http://localhost:8686/api/v1/config/mediamanagement/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "id": 0,
    "autoUnmonitorPreviouslyDownloadedTracks": true,
    "recycleBin": "string",
    "recycleBinCleanupDays": 0,
    "downloadPropersAndRepacks": "preferAndUpgrade",
    "createEmptyArtistFolders": true,
    "deleteEmptyFolders": true,
    "fileDate": "none",
    "watchLibraryForChanges": true,
    "rescanAfterRefresh": "always",
    "allowFingerprinting": "never",
    "setPermissionsLinux": true,
    "chmodFolder": "string",
    "chownGroup": "string",
    "skipFreeSpaceCheckWhenImporting": true,
    "minimumFreeSpaceWhenImporting": 0,
    "copyUsingHardlinks": true,
    "enableMediaInfo": true,
    "useScriptImport": true,
    "scriptImportPath": "string",
    "importExtraFiles": true,
    "extraFileExtensions": "string"
  }'
```

`PUT /api/v1/config/mediamanagement/{id}`

> Body parameter

```json
{
  "id": 0,
  "autoUnmonitorPreviouslyDownloadedTracks": true,
  "recycleBin": "string",
  "recycleBinCleanupDays": 0,
  "downloadPropersAndRepacks": "preferAndUpgrade",
  "createEmptyArtistFolders": true,
  "deleteEmptyFolders": true,
  "fileDate": "none",
  "watchLibraryForChanges": true,
  "rescanAfterRefresh": "always",
  "allowFingerprinting": "never",
  "setPermissionsLinux": true,
  "chmodFolder": "string",
  "chownGroup": "string",
  "skipFreeSpaceCheckWhenImporting": true,
  "minimumFreeSpaceWhenImporting": 0,
  "copyUsingHardlinks": true,
  "enableMediaInfo": true,
  "useScriptImport": true,
  "scriptImportPath": "string",
  "importExtraFiles": true,
  "extraFileExtensions": "string"
}
```

<h3 id="putapiv1configmediamanagementid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|[MediaManagementConfigResource](#schemamediamanagementconfigresource)|false|none|
|» id|body|integer(int32)|false|none|
|» autoUnmonitorPreviouslyDownloadedTracks|body|boolean|false|none|
|» recycleBin|body|string \| null|false|none|
|» recycleBinCleanupDays|body|integer(int32)|false|none|
|» downloadPropersAndRepacks|body|[ProperDownloadTypes](#schemaproperdownloadtypes)|false|none|
|» createEmptyArtistFolders|body|boolean|false|none|
|» deleteEmptyFolders|body|boolean|false|none|
|» fileDate|body|[FileDateType](#schemafiledatetype)|false|none|
|» watchLibraryForChanges|body|boolean|false|none|
|» rescanAfterRefresh|body|[RescanAfterRefreshType](#schemarescanafterrefreshtype)|false|none|
|» allowFingerprinting|body|[AllowFingerprinting](#schemaallowfingerprinting)|false|none|
|» setPermissionsLinux|body|boolean|false|none|
|» chmodFolder|body|string \| null|false|none|
|» chownGroup|body|string \| null|false|none|
|» skipFreeSpaceCheckWhenImporting|body|boolean|false|none|
|» minimumFreeSpaceWhenImporting|body|integer(int32)|false|none|
|» copyUsingHardlinks|body|boolean|false|none|
|» enableMediaInfo|body|boolean|false|none|
|» useScriptImport|body|boolean|false|none|
|» scriptImportPath|body|string \| null|false|none|
|» importExtraFiles|body|boolean|false|none|
|» extraFileExtensions|body|string \| null|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» downloadPropersAndRepacks|preferAndUpgrade|
|» downloadPropersAndRepacks|doNotUpgrade|
|» downloadPropersAndRepacks|doNotPrefer|
|» fileDate|none|
|» fileDate|albumReleaseDate|
|» rescanAfterRefresh|always|
|» rescanAfterRefresh|afterManual|
|» rescanAfterRefresh|never|
|» allowFingerprinting|never|
|» allowFingerprinting|newFiles|
|» allowFingerprinting|allFiles|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "autoUnmonitorPreviouslyDownloadedTracks": true,
  "recycleBin": "string",
  "recycleBinCleanupDays": 0,
  "downloadPropersAndRepacks": "preferAndUpgrade",
  "createEmptyArtistFolders": true,
  "deleteEmptyFolders": true,
  "fileDate": "none",
  "watchLibraryForChanges": true,
  "rescanAfterRefresh": "always",
  "allowFingerprinting": "never",
  "setPermissionsLinux": true,
  "chmodFolder": "string",
  "chownGroup": "string",
  "skipFreeSpaceCheckWhenImporting": true,
  "minimumFreeSpaceWhenImporting": 0,
  "copyUsingHardlinks": true,
  "enableMediaInfo": true,
  "useScriptImport": true,
  "scriptImportPath": "string",
  "importExtraFiles": true,
  "extraFileExtensions": "string"
}
```

<h3 id="putapiv1configmediamanagementid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[MediaManagementConfigResource](#schemamediamanagementconfigresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v1/config/mediamanagement

> Code samples

```bash
curl http://localhost:8686/api/v1/config/mediamanagement \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/config/mediamanagement`

> Example responses

> 200 Response

```json
{
  "id": 0,
  "autoUnmonitorPreviouslyDownloadedTracks": true,
  "recycleBin": "string",
  "recycleBinCleanupDays": 0,
  "downloadPropersAndRepacks": "preferAndUpgrade",
  "createEmptyArtistFolders": true,
  "deleteEmptyFolders": true,
  "fileDate": "none",
  "watchLibraryForChanges": true,
  "rescanAfterRefresh": "always",
  "allowFingerprinting": "never",
  "setPermissionsLinux": true,
  "chmodFolder": "string",
  "chownGroup": "string",
  "skipFreeSpaceCheckWhenImporting": true,
  "minimumFreeSpaceWhenImporting": 0,
  "copyUsingHardlinks": true,
  "enableMediaInfo": true,
  "useScriptImport": true,
  "scriptImportPath": "string",
  "importExtraFiles": true,
  "extraFileExtensions": "string"
}
```

<h3 id="getapiv1configmediamanagement-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[MediaManagementConfigResource](#schemamediamanagementconfigresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="lidarr-metadata">Metadata</h1>

## get/api/v1/metadata/{id}

> Code samples

```bash
curl http://localhost:8686/api/v1/metadata/0 \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/metadata/{id}`

<h3 id="getapiv1metadataid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "fields": [
    {
      "order": 0,
      "name": "string",
      "label": "string",
      "unit": "string",
      "helpText": "string",
      "helpTextWarning": "string",
      "helpLink": "string",
      "value": null,
      "type": "string",
      "advanced": true,
      "selectOptions": [
        {
          "value": 0,
          "name": "string",
          "order": 0,
          "hint": "string"
        }
      ],
      "selectOptionsProviderAction": "string",
      "section": "string",
      "hidden": "string",
      "privacy": "normal",
      "placeholder": "string",
      "isFloat": true
    }
  ],
  "implementationName": "string",
  "implementation": "string",
  "configContract": "string",
  "infoLink": "string",
  "message": {
    "message": "string",
    "type": "info"
  },
  "tags": [
    0
  ],
  "presets": [
    {}
  ],
  "enable": true
}
```

<h3 id="getapiv1metadataid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[MetadataResource](#schemametadataresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## put/api/v1/metadata/{id}

> Code samples

```bash
curl http://localhost:8686/api/v1/metadata/0 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "id": 0,
    "name": "string",
    "fields": [
      {
        "order": 0,
        "name": "string",
        "label": "string",
        "unit": "string",
        "helpText": "string",
        "helpTextWarning": "string",
        "helpLink": "string",
        "value": null,
        "type": "string",
        "advanced": true,
        "selectOptions": [
          {
            "value": 0,
            "name": "string",
            "order": 0,
            "hint": "string"
          }
        ],
        "selectOptionsProviderAction": "string",
        "section": "string",
        "hidden": "string",
        "privacy": "normal",
        "placeholder": "string",
        "isFloat": true
      }
    ],
    "implementationName": "string",
    "implementation": "string",
    "configContract": "string",
    "infoLink": "string",
    "message": {
      "message": "string",
      "type": "info"
    },
    "tags": [
      0
    ],
    "presets": [
      {}
    ],
    "enable": true
  }'
```

`PUT /api/v1/metadata/{id}`

> Body parameter

```json
{
  "id": 0,
  "name": "string",
  "fields": [
    {
      "order": 0,
      "name": "string",
      "label": "string",
      "unit": "string",
      "helpText": "string",
      "helpTextWarning": "string",
      "helpLink": "string",
      "value": null,
      "type": "string",
      "advanced": true,
      "selectOptions": [
        {
          "value": 0,
          "name": "string",
          "order": 0,
          "hint": "string"
        }
      ],
      "selectOptionsProviderAction": "string",
      "section": "string",
      "hidden": "string",
      "privacy": "normal",
      "placeholder": "string",
      "isFloat": true
    }
  ],
  "implementationName": "string",
  "implementation": "string",
  "configContract": "string",
  "infoLink": "string",
  "message": {
    "message": "string",
    "type": "info"
  },
  "tags": [
    0
  ],
  "presets": [
    {}
  ],
  "enable": true
}
```

<h3 id="putapiv1metadataid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|
|forceSave|query|boolean|false|none|
|body|body|[MetadataResource](#schemametadataresource)|false|none|
|» id|body|integer(int32)|false|none|
|» name|body|string \| null|false|none|
|» fields|body|[[Field](#schemafield)]|false|none|
|» implementationName|body|string \| null|false|none|
|» implementation|body|string \| null|false|none|
|» configContract|body|string \| null|false|none|
|» infoLink|body|string \| null|false|none|
|» message|body|[ProviderMessage](#schemaprovidermessage)|false|none|
|» tags|body|[integer(int32)]|false|none|
|» presets|body|[[MetadataResource](#schemametadataresource)]|false|none|
|» enable|body|boolean|false|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "fields": [
    {
      "order": 0,
      "name": "string",
      "label": "string",
      "unit": "string",
      "helpText": "string",
      "helpTextWarning": "string",
      "helpLink": "string",
      "value": null,
      "type": "string",
      "advanced": true,
      "selectOptions": [
        {
          "value": 0,
          "name": "string",
          "order": 0,
          "hint": "string"
        }
      ],
      "selectOptionsProviderAction": "string",
      "section": "string",
      "hidden": "string",
      "privacy": "normal",
      "placeholder": "string",
      "isFloat": true
    }
  ],
  "implementationName": "string",
  "implementation": "string",
  "configContract": "string",
  "infoLink": "string",
  "message": {
    "message": "string",
    "type": "info"
  },
  "tags": [
    0
  ],
  "presets": [
    {}
  ],
  "enable": true
}
```

<h3 id="putapiv1metadataid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[MetadataResource](#schemametadataresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## delete/api/v1/metadata/{id}

> Code samples

```bash
curl http://localhost:8686/api/v1/metadata/0 \
  -X DELETE \
  -H "X-Api-Key: ${API_KEY}"
```

`DELETE /api/v1/metadata/{id}`

<h3 id="deleteapiv1metadataid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

<h3 id="deleteapiv1metadataid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v1/metadata

> Code samples

```bash
curl http://localhost:8686/api/v1/metadata \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/metadata`

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "name": "string",
    "fields": [
      {
        "order": 0,
        "name": "string",
        "label": "string",
        "unit": "string",
        "helpText": "string",
        "helpTextWarning": "string",
        "helpLink": "string",
        "value": null,
        "type": "string",
        "advanced": true,
        "selectOptions": [
          {
            "value": 0,
            "name": "string",
            "order": 0,
            "hint": "string"
          }
        ],
        "selectOptionsProviderAction": "string",
        "section": "string",
        "hidden": "string",
        "privacy": "normal",
        "placeholder": "string",
        "isFloat": true
      }
    ],
    "implementationName": "string",
    "implementation": "string",
    "configContract": "string",
    "infoLink": "string",
    "message": {
      "message": "string",
      "type": "info"
    },
    "tags": [
      0
    ],
    "presets": [
      {}
    ],
    "enable": true
  }
]
```

<h3 id="getapiv1metadata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getapiv1metadata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[MetadataResource](#schemametadataresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## post/api/v1/metadata

> Code samples

```bash
curl http://localhost:8686/api/v1/metadata \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "id": 0,
    "name": "string",
    "fields": [
      {
        "order": 0,
        "name": "string",
        "label": "string",
        "unit": "string",
        "helpText": "string",
        "helpTextWarning": "string",
        "helpLink": "string",
        "value": null,
        "type": "string",
        "advanced": true,
        "selectOptions": [
          {
            "value": 0,
            "name": "string",
            "order": 0,
            "hint": "string"
          }
        ],
        "selectOptionsProviderAction": "string",
        "section": "string",
        "hidden": "string",
        "privacy": "normal",
        "placeholder": "string",
        "isFloat": true
      }
    ],
    "implementationName": "string",
    "implementation": "string",
    "configContract": "string",
    "infoLink": "string",
    "message": {
      "message": "string",
      "type": "info"
    },
    "tags": [
      0
    ],
    "presets": [
      {}
    ],
    "enable": true
  }'
```

`POST /api/v1/metadata`

> Body parameter

```json
{
  "id": 0,
  "name": "string",
  "fields": [
    {
      "order": 0,
      "name": "string",
      "label": "string",
      "unit": "string",
      "helpText": "string",
      "helpTextWarning": "string",
      "helpLink": "string",
      "value": null,
      "type": "string",
      "advanced": true,
      "selectOptions": [
        {
          "value": 0,
          "name": "string",
          "order": 0,
          "hint": "string"
        }
      ],
      "selectOptionsProviderAction": "string",
      "section": "string",
      "hidden": "string",
      "privacy": "normal",
      "placeholder": "string",
      "isFloat": true
    }
  ],
  "implementationName": "string",
  "implementation": "string",
  "configContract": "string",
  "infoLink": "string",
  "message": {
    "message": "string",
    "type": "info"
  },
  "tags": [
    0
  ],
  "presets": [
    {}
  ],
  "enable": true
}
```

<h3 id="postapiv1metadata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|forceSave|query|boolean|false|none|
|body|body|[MetadataResource](#schemametadataresource)|false|none|
|» id|body|integer(int32)|false|none|
|» name|body|string \| null|false|none|
|» fields|body|[[Field](#schemafield)]|false|none|
|» implementationName|body|string \| null|false|none|
|» implementation|body|string \| null|false|none|
|» configContract|body|string \| null|false|none|
|» infoLink|body|string \| null|false|none|
|» message|body|[ProviderMessage](#schemaprovidermessage)|false|none|
|» tags|body|[integer(int32)]|false|none|
|» presets|body|[[MetadataResource](#schemametadataresource)]|false|none|
|» enable|body|boolean|false|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "fields": [
    {
      "order": 0,
      "name": "string",
      "label": "string",
      "unit": "string",
      "helpText": "string",
      "helpTextWarning": "string",
      "helpLink": "string",
      "value": null,
      "type": "string",
      "advanced": true,
      "selectOptions": [
        {
          "value": 0,
          "name": "string",
          "order": 0,
          "hint": "string"
        }
      ],
      "selectOptionsProviderAction": "string",
      "section": "string",
      "hidden": "string",
      "privacy": "normal",
      "placeholder": "string",
      "isFloat": true
    }
  ],
  "implementationName": "string",
  "implementation": "string",
  "configContract": "string",
  "infoLink": "string",
  "message": {
    "message": "string",
    "type": "info"
  },
  "tags": [
    0
  ],
  "presets": [
    {}
  ],
  "enable": true
}
```

<h3 id="postapiv1metadata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[MetadataResource](#schemametadataresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v1/metadata/schema

> Code samples

```bash
curl http://localhost:8686/api/v1/metadata/schema \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/metadata/schema`

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "name": "string",
    "fields": [
      {
        "order": 0,
        "name": "string",
        "label": "string",
        "unit": "string",
        "helpText": "string",
        "helpTextWarning": "string",
        "helpLink": "string",
        "value": null,
        "type": "string",
        "advanced": true,
        "selectOptions": [
          {
            "value": 0,
            "name": "string",
            "order": 0,
            "hint": "string"
          }
        ],
        "selectOptionsProviderAction": "string",
        "section": "string",
        "hidden": "string",
        "privacy": "normal",
        "placeholder": "string",
        "isFloat": true
      }
    ],
    "implementationName": "string",
    "implementation": "string",
    "configContract": "string",
    "infoLink": "string",
    "message": {
      "message": "string",
      "type": "info"
    },
    "tags": [
      0
    ],
    "presets": [
      {}
    ],
    "enable": true
  }
]
```

<h3 id="getapiv1metadataschema-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getapiv1metadataschema-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[MetadataResource](#schemametadataresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## post/api/v1/metadata/test

> Code samples

```bash
curl http://localhost:8686/api/v1/metadata/test \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "id": 0,
    "name": "string",
    "fields": [
      {
        "order": 0,
        "name": "string",
        "label": "string",
        "unit": "string",
        "helpText": "string",
        "helpTextWarning": "string",
        "helpLink": "string",
        "value": null,
        "type": "string",
        "advanced": true,
        "selectOptions": [
          {
            "value": 0,
            "name": "string",
            "order": 0,
            "hint": "string"
          }
        ],
        "selectOptionsProviderAction": "string",
        "section": "string",
        "hidden": "string",
        "privacy": "normal",
        "placeholder": "string",
        "isFloat": true
      }
    ],
    "implementationName": "string",
    "implementation": "string",
    "configContract": "string",
    "infoLink": "string",
    "message": {
      "message": "string",
      "type": "info"
    },
    "tags": [
      0
    ],
    "presets": [
      {}
    ],
    "enable": true
  }'
```

`POST /api/v1/metadata/test`

> Body parameter

```json
{
  "id": 0,
  "name": "string",
  "fields": [
    {
      "order": 0,
      "name": "string",
      "label": "string",
      "unit": "string",
      "helpText": "string",
      "helpTextWarning": "string",
      "helpLink": "string",
      "value": null,
      "type": "string",
      "advanced": true,
      "selectOptions": [
        {
          "value": 0,
          "name": "string",
          "order": 0,
          "hint": "string"
        }
      ],
      "selectOptionsProviderAction": "string",
      "section": "string",
      "hidden": "string",
      "privacy": "normal",
      "placeholder": "string",
      "isFloat": true
    }
  ],
  "implementationName": "string",
  "implementation": "string",
  "configContract": "string",
  "infoLink": "string",
  "message": {
    "message": "string",
    "type": "info"
  },
  "tags": [
    0
  ],
  "presets": [
    {}
  ],
  "enable": true
}
```

<h3 id="postapiv1metadatatest-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|forceTest|query|boolean|false|none|
|body|body|[MetadataResource](#schemametadataresource)|false|none|
|» id|body|integer(int32)|false|none|
|» name|body|string \| null|false|none|
|» fields|body|[[Field](#schemafield)]|false|none|
|» implementationName|body|string \| null|false|none|
|» implementation|body|string \| null|false|none|
|» configContract|body|string \| null|false|none|
|» infoLink|body|string \| null|false|none|
|» message|body|[ProviderMessage](#schemaprovidermessage)|false|none|
|» tags|body|[integer(int32)]|false|none|
|» presets|body|[[MetadataResource](#schemametadataresource)]|false|none|
|» enable|body|boolean|false|none|

<h3 id="postapiv1metadatatest-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## post/api/v1/metadata/testall

> Code samples

```bash
curl http://localhost:8686/api/v1/metadata/testall \
  -X POST \
  -H "X-Api-Key: ${API_KEY}"
```

`POST /api/v1/metadata/testall`

<h3 id="postapiv1metadatatestall-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## post/api/v1/metadata/action/{name}

> Code samples

```bash
curl http://localhost:8686/api/v1/metadata/action/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "id": 0,
    "name": "string",
    "fields": [
      {
        "order": 0,
        "name": "string",
        "label": "string",
        "unit": "string",
        "helpText": "string",
        "helpTextWarning": "string",
        "helpLink": "string",
        "value": null,
        "type": "string",
        "advanced": true,
        "selectOptions": [
          {
            "value": 0,
            "name": "string",
            "order": 0,
            "hint": "string"
          }
        ],
        "selectOptionsProviderAction": "string",
        "section": "string",
        "hidden": "string",
        "privacy": "normal",
        "placeholder": "string",
        "isFloat": true
      }
    ],
    "implementationName": "string",
    "implementation": "string",
    "configContract": "string",
    "infoLink": "string",
    "message": {
      "message": "string",
      "type": "info"
    },
    "tags": [
      0
    ],
    "presets": [
      {}
    ],
    "enable": true
  }'
```

`POST /api/v1/metadata/action/{name}`

> Body parameter

```json
{
  "id": 0,
  "name": "string",
  "fields": [
    {
      "order": 0,
      "name": "string",
      "label": "string",
      "unit": "string",
      "helpText": "string",
      "helpTextWarning": "string",
      "helpLink": "string",
      "value": null,
      "type": "string",
      "advanced": true,
      "selectOptions": [
        {
          "value": 0,
          "name": "string",
          "order": 0,
          "hint": "string"
        }
      ],
      "selectOptionsProviderAction": "string",
      "section": "string",
      "hidden": "string",
      "privacy": "normal",
      "placeholder": "string",
      "isFloat": true
    }
  ],
  "implementationName": "string",
  "implementation": "string",
  "configContract": "string",
  "infoLink": "string",
  "message": {
    "message": "string",
    "type": "info"
  },
  "tags": [
    0
  ],
  "presets": [
    {}
  ],
  "enable": true
}
```

<h3 id="postapiv1metadataactionname-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|none|
|body|body|[MetadataResource](#schemametadataresource)|false|none|
|» id|body|integer(int32)|false|none|
|» name|body|string \| null|false|none|
|» fields|body|[[Field](#schemafield)]|false|none|
|» implementationName|body|string \| null|false|none|
|» implementation|body|string \| null|false|none|
|» configContract|body|string \| null|false|none|
|» infoLink|body|string \| null|false|none|
|» message|body|[ProviderMessage](#schemaprovidermessage)|false|none|
|» tags|body|[integer(int32)]|false|none|
|» presets|body|[[MetadataResource](#schemametadataresource)]|false|none|
|» enable|body|boolean|false|none|

<h3 id="postapiv1metadataactionname-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="lidarr-metadataprofile">MetadataProfile</h1>

## get/api/v1/metadataprofile

> Code samples

```bash
curl http://localhost:8686/api/v1/metadataprofile \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/metadataprofile`

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "name": "string",
    "primaryAlbumTypes": [
      {
        "id": 0,
        "albumType": {
          "id": 0,
          "name": "string"
        },
        "allowed": true
      }
    ],
    "secondaryAlbumTypes": [
      {
        "id": 0,
        "albumType": {
          "id": 0,
          "name": "string"
        },
        "allowed": true
      }
    ],
    "releaseStatuses": [
      {
        "id": 0,
        "releaseStatus": {
          "id": 0,
          "name": "string"
        },
        "allowed": true
      }
    ]
  }
]
```

<h3 id="getapiv1metadataprofile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getapiv1metadataprofile-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[MetadataProfileResource](#schemametadataprofileresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## post/api/v1/metadataprofile

> Code samples

```bash
curl http://localhost:8686/api/v1/metadataprofile \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "id": 0,
    "name": "string",
    "primaryAlbumTypes": [
      {
        "id": 0,
        "albumType": {
          "id": 0,
          "name": "string"
        },
        "allowed": true
      }
    ],
    "secondaryAlbumTypes": [
      {
        "id": 0,
        "albumType": {
          "id": 0,
          "name": "string"
        },
        "allowed": true
      }
    ],
    "releaseStatuses": [
      {
        "id": 0,
        "releaseStatus": {
          "id": 0,
          "name": "string"
        },
        "allowed": true
      }
    ]
  }'
```

`POST /api/v1/metadataprofile`

> Body parameter

```json
{
  "id": 0,
  "name": "string",
  "primaryAlbumTypes": [
    {
      "id": 0,
      "albumType": {
        "id": 0,
        "name": "string"
      },
      "allowed": true
    }
  ],
  "secondaryAlbumTypes": [
    {
      "id": 0,
      "albumType": {
        "id": 0,
        "name": "string"
      },
      "allowed": true
    }
  ],
  "releaseStatuses": [
    {
      "id": 0,
      "releaseStatus": {
        "id": 0,
        "name": "string"
      },
      "allowed": true
    }
  ]
}
```

<h3 id="postapiv1metadataprofile-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[MetadataProfileResource](#schemametadataprofileresource)|false|none|
|» id|body|integer(int32)|false|none|
|» name|body|string \| null|false|none|
|» primaryAlbumTypes|body|[[ProfilePrimaryAlbumTypeItemResource](#schemaprofileprimaryalbumtypeitemresource)]|false|none|
|» secondaryAlbumTypes|body|[[ProfileSecondaryAlbumTypeItemResource](#schemaprofilesecondaryalbumtypeitemresource)]|false|none|
|» releaseStatuses|body|[[ProfileReleaseStatusItemResource](#schemaprofilereleasestatusitemresource)]|false|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "primaryAlbumTypes": [
    {
      "id": 0,
      "albumType": {
        "id": 0,
        "name": "string"
      },
      "allowed": true
    }
  ],
  "secondaryAlbumTypes": [
    {
      "id": 0,
      "albumType": {
        "id": 0,
        "name": "string"
      },
      "allowed": true
    }
  ],
  "releaseStatuses": [
    {
      "id": 0,
      "releaseStatus": {
        "id": 0,
        "name": "string"
      },
      "allowed": true
    }
  ]
}
```

<h3 id="postapiv1metadataprofile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[MetadataProfileResource](#schemametadataprofileresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v1/metadataprofile/{id}

> Code samples

```bash
curl http://localhost:8686/api/v1/metadataprofile/0 \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/metadataprofile/{id}`

<h3 id="getapiv1metadataprofileid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "primaryAlbumTypes": [
    {
      "id": 0,
      "albumType": {
        "id": 0,
        "name": "string"
      },
      "allowed": true
    }
  ],
  "secondaryAlbumTypes": [
    {
      "id": 0,
      "albumType": {
        "id": 0,
        "name": "string"
      },
      "allowed": true
    }
  ],
  "releaseStatuses": [
    {
      "id": 0,
      "releaseStatus": {
        "id": 0,
        "name": "string"
      },
      "allowed": true
    }
  ]
}
```

<h3 id="getapiv1metadataprofileid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[MetadataProfileResource](#schemametadataprofileresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## put/api/v1/metadataprofile/{id}

> Code samples

```bash
curl http://localhost:8686/api/v1/metadataprofile/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "id": 0,
    "name": "string",
    "primaryAlbumTypes": [
      {
        "id": 0,
        "albumType": {
          "id": 0,
          "name": "string"
        },
        "allowed": true
      }
    ],
    "secondaryAlbumTypes": [
      {
        "id": 0,
        "albumType": {
          "id": 0,
          "name": "string"
        },
        "allowed": true
      }
    ],
    "releaseStatuses": [
      {
        "id": 0,
        "releaseStatus": {
          "id": 0,
          "name": "string"
        },
        "allowed": true
      }
    ]
  }'
```

`PUT /api/v1/metadataprofile/{id}`

> Body parameter

```json
{
  "id": 0,
  "name": "string",
  "primaryAlbumTypes": [
    {
      "id": 0,
      "albumType": {
        "id": 0,
        "name": "string"
      },
      "allowed": true
    }
  ],
  "secondaryAlbumTypes": [
    {
      "id": 0,
      "albumType": {
        "id": 0,
        "name": "string"
      },
      "allowed": true
    }
  ],
  "releaseStatuses": [
    {
      "id": 0,
      "releaseStatus": {
        "id": 0,
        "name": "string"
      },
      "allowed": true
    }
  ]
}
```

<h3 id="putapiv1metadataprofileid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|[MetadataProfileResource](#schemametadataprofileresource)|false|none|
|» id|body|integer(int32)|false|none|
|» name|body|string \| null|false|none|
|» primaryAlbumTypes|body|[[ProfilePrimaryAlbumTypeItemResource](#schemaprofileprimaryalbumtypeitemresource)]|false|none|
|» secondaryAlbumTypes|body|[[ProfileSecondaryAlbumTypeItemResource](#schemaprofilesecondaryalbumtypeitemresource)]|false|none|
|» releaseStatuses|body|[[ProfileReleaseStatusItemResource](#schemaprofilereleasestatusitemresource)]|false|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "primaryAlbumTypes": [
    {
      "id": 0,
      "albumType": {
        "id": 0,
        "name": "string"
      },
      "allowed": true
    }
  ],
  "secondaryAlbumTypes": [
    {
      "id": 0,
      "albumType": {
        "id": 0,
        "name": "string"
      },
      "allowed": true
    }
  ],
  "releaseStatuses": [
    {
      "id": 0,
      "releaseStatus": {
        "id": 0,
        "name": "string"
      },
      "allowed": true
    }
  ]
}
```

<h3 id="putapiv1metadataprofileid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[MetadataProfileResource](#schemametadataprofileresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## delete/api/v1/metadataprofile/{id}

> Code samples

```bash
curl http://localhost:8686/api/v1/metadataprofile/0 \
  -X DELETE \
  -H "X-Api-Key: ${API_KEY}"
```

`DELETE /api/v1/metadataprofile/{id}`

<h3 id="deleteapiv1metadataprofileid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

<h3 id="deleteapiv1metadataprofileid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="lidarr-metadataprofileschema">MetadataProfileSchema</h1>

## get/api/v1/metadataprofile/schema

> Code samples

```bash
curl http://localhost:8686/api/v1/metadataprofile/schema \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/metadataprofile/schema`

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "primaryAlbumTypes": [
    {
      "id": 0,
      "albumType": {
        "id": 0,
        "name": "string"
      },
      "allowed": true
    }
  ],
  "secondaryAlbumTypes": [
    {
      "id": 0,
      "albumType": {
        "id": 0,
        "name": "string"
      },
      "allowed": true
    }
  ],
  "releaseStatuses": [
    {
      "id": 0,
      "releaseStatus": {
        "id": 0,
        "name": "string"
      },
      "allowed": true
    }
  ]
}
```

<h3 id="getapiv1metadataprofileschema-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[MetadataProfileResource](#schemametadataprofileresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="lidarr-metadataproviderconfig">MetadataProviderConfig</h1>

## get/api/v1/config/metadataprovider/{id}

> Code samples

```bash
curl http://localhost:8686/api/v1/config/metadataprovider/0 \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/config/metadataprovider/{id}`

<h3 id="getapiv1configmetadataproviderid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "metadataSource": "string",
  "writeAudioTags": "no",
  "scrubAudioTags": true,
  "embedCoverArt": true
}
```

<h3 id="getapiv1configmetadataproviderid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[MetadataProviderConfigResource](#schemametadataproviderconfigresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## put/api/v1/config/metadataprovider/{id}

> Code samples

```bash
curl http://localhost:8686/api/v1/config/metadataprovider/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "id": 0,
    "metadataSource": "string",
    "writeAudioTags": "no",
    "scrubAudioTags": true,
    "embedCoverArt": true
  }'
```

`PUT /api/v1/config/metadataprovider/{id}`

> Body parameter

```json
{
  "id": 0,
  "metadataSource": "string",
  "writeAudioTags": "no",
  "scrubAudioTags": true,
  "embedCoverArt": true
}
```

<h3 id="putapiv1configmetadataproviderid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|[MetadataProviderConfigResource](#schemametadataproviderconfigresource)|false|none|
|» id|body|integer(int32)|false|none|
|» metadataSource|body|string \| null|false|none|
|» writeAudioTags|body|[WriteAudioTagsType](#schemawriteaudiotagstype)|false|none|
|» scrubAudioTags|body|boolean|false|none|
|» embedCoverArt|body|boolean|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» writeAudioTags|no|
|» writeAudioTags|newFiles|
|» writeAudioTags|allFiles|
|» writeAudioTags|sync|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "metadataSource": "string",
  "writeAudioTags": "no",
  "scrubAudioTags": true,
  "embedCoverArt": true
}
```

<h3 id="putapiv1configmetadataproviderid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[MetadataProviderConfigResource](#schemametadataproviderconfigresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v1/config/metadataprovider

> Code samples

```bash
curl http://localhost:8686/api/v1/config/metadataprovider \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/config/metadataprovider`

> Example responses

> 200 Response

```json
{
  "id": 0,
  "metadataSource": "string",
  "writeAudioTags": "no",
  "scrubAudioTags": true,
  "embedCoverArt": true
}
```

<h3 id="getapiv1configmetadataprovider-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[MetadataProviderConfigResource](#schemametadataproviderconfigresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="lidarr-missing">Missing</h1>

## get/api/v1/wanted/missing

> Code samples

```bash
curl http://localhost:8686/api/v1/wanted/missing \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/wanted/missing`

<h3 id="getapiv1wantedmissing-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer(int32)|false|none|
|pageSize|query|integer(int32)|false|none|
|sortKey|query|string|false|none|
|sortDirection|query|[SortDirection](#schemasortdirection)|false|none|
|includeArtist|query|boolean|false|none|
|monitored|query|boolean|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sortDirection|default|
|sortDirection|ascending|
|sortDirection|descending|

> Example responses

> 200 Response

```json
{
  "page": 0,
  "pageSize": 0,
  "sortKey": "string",
  "sortDirection": "default",
  "totalRecords": 0,
  "records": [
    {
      "id": 0,
      "title": "string",
      "disambiguation": "string",
      "overview": "string",
      "artistId": 0,
      "foreignAlbumId": "string",
      "monitored": true,
      "anyReleaseOk": true,
      "profileId": 0,
      "duration": 0,
      "albumType": "string",
      "secondaryTypes": [
        "string"
      ],
      "mediumCount": 0,
      "ratings": {
        "votes": 0,
        "value": 0
      },
      "releaseDate": "1970-01-01T00:00:00Z",
      "releases": [
        {
          "id": 0,
          "albumId": 0,
          "foreignReleaseId": "string",
          "title": "string",
          "status": "string",
          "duration": 0,
          "trackCount": 0,
          "media": [
            {
              "mediumNumber": 0,
              "mediumName": "string",
              "mediumFormat": "string"
            }
          ],
          "mediumCount": 0,
          "disambiguation": "string",
          "country": [
            "string"
          ],
          "label": [
            "string"
          ],
          "format": "string",
          "monitored": true
        }
      ],
      "genres": [
        "string"
      ],
      "media": [
        {
          "mediumNumber": 0,
          "mediumName": "string",
          "mediumFormat": "string"
        }
      ],
      "artist": {},
      "images": [
        {
          "url": "string",
          "coverType": "unknown",
          "extension": "string",
          "remoteUrl": "string"
        }
      ],
      "links": [
        {
          "url": "string",
          "name": "string"
        }
      ],
      "lastSearchTime": "1970-01-01T00:00:00Z",
      "statistics": {
        "trackFileCount": 0,
        "trackCount": 0,
        "totalTrackCount": 0,
        "sizeOnDisk": 0,
        "percentOfTracks": 0
      },
      "addOptions": {
        "addType": "automatic",
        "searchForNewAlbum": true
      },
      "remoteCover": "string"
    }
  ]
}
```

<h3 id="getapiv1wantedmissing-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[AlbumResourcePagingResource](#schemaalbumresourcepagingresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v1/wanted/missing/{id}

> Code samples

```bash
curl http://localhost:8686/api/v1/wanted/missing/0 \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/wanted/missing/{id}`

<h3 id="getapiv1wantedmissingid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "title": "string",
  "disambiguation": "string",
  "overview": "string",
  "artistId": 0,
  "foreignAlbumId": "string",
  "monitored": true,
  "anyReleaseOk": true,
  "profileId": 0,
  "duration": 0,
  "albumType": "string",
  "secondaryTypes": [
    "string"
  ],
  "mediumCount": 0,
  "ratings": {
    "votes": 0,
    "value": 0
  },
  "releaseDate": "1970-01-01T00:00:00Z",
  "releases": [
    {
      "id": 0,
      "albumId": 0,
      "foreignReleaseId": "string",
      "title": "string",
      "status": "string",
      "duration": 0,
      "trackCount": 0,
      "media": [
        {
          "mediumNumber": 0,
          "mediumName": "string",
          "mediumFormat": "string"
        }
      ],
      "mediumCount": 0,
      "disambiguation": "string",
      "country": [
        "string"
      ],
      "label": [
        "string"
      ],
      "format": "string",
      "monitored": true
    }
  ],
  "genres": [
    "string"
  ],
  "media": [
    {
      "mediumNumber": 0,
      "mediumName": "string",
      "mediumFormat": "string"
    }
  ],
  "artist": {},
  "images": [
    {
      "url": "string",
      "coverType": "unknown",
      "extension": "string",
      "remoteUrl": "string"
    }
  ],
  "links": [
    {
      "url": "string",
      "name": "string"
    }
  ],
  "lastSearchTime": "1970-01-01T00:00:00Z",
  "statistics": {
    "trackFileCount": 0,
    "trackCount": 0,
    "totalTrackCount": 0,
    "sizeOnDisk": 0,
    "percentOfTracks": 0
  },
  "addOptions": {
    "addType": "automatic",
    "searchForNewAlbum": true
  },
  "remoteCover": "string"
}
```

<h3 id="getapiv1wantedmissingid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[AlbumResource](#schemaalbumresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="lidarr-namingconfig">NamingConfig</h1>

## get/api/v1/config/naming/{id}

> Code samples

```bash
curl http://localhost:8686/api/v1/config/naming/0 \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/config/naming/{id}`

<h3 id="getapiv1confignamingid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "renameTracks": true,
  "replaceIllegalCharacters": true,
  "colonReplacementFormat": 0,
  "standardTrackFormat": "string",
  "multiDiscTrackFormat": "string",
  "artistFolderFormat": "string",
  "includeArtistName": true,
  "includeAlbumTitle": true,
  "includeQuality": true,
  "replaceSpaces": true,
  "separator": "string",
  "numberStyle": "string"
}
```

<h3 id="getapiv1confignamingid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[NamingConfigResource](#schemanamingconfigresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## put/api/v1/config/naming/{id}

> Code samples

```bash
curl http://localhost:8686/api/v1/config/naming/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "id": 0,
    "renameTracks": true,
    "replaceIllegalCharacters": true,
    "colonReplacementFormat": 0,
    "standardTrackFormat": "string",
    "multiDiscTrackFormat": "string",
    "artistFolderFormat": "string",
    "includeArtistName": true,
    "includeAlbumTitle": true,
    "includeQuality": true,
    "replaceSpaces": true,
    "separator": "string",
    "numberStyle": "string"
  }'
```

`PUT /api/v1/config/naming/{id}`

> Body parameter

```json
{
  "id": 0,
  "renameTracks": true,
  "replaceIllegalCharacters": true,
  "colonReplacementFormat": 0,
  "standardTrackFormat": "string",
  "multiDiscTrackFormat": "string",
  "artistFolderFormat": "string",
  "includeArtistName": true,
  "includeAlbumTitle": true,
  "includeQuality": true,
  "replaceSpaces": true,
  "separator": "string",
  "numberStyle": "string"
}
```

<h3 id="putapiv1confignamingid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|[NamingConfigResource](#schemanamingconfigresource)|false|none|
|» id|body|integer(int32)|false|none|
|» renameTracks|body|boolean|false|none|
|» replaceIllegalCharacters|body|boolean|false|none|
|» colonReplacementFormat|body|integer(int32)|false|none|
|» standardTrackFormat|body|string \| null|false|none|
|» multiDiscTrackFormat|body|string \| null|false|none|
|» artistFolderFormat|body|string \| null|false|none|
|» includeArtistName|body|boolean|false|none|
|» includeAlbumTitle|body|boolean|false|none|
|» includeQuality|body|boolean|false|none|
|» replaceSpaces|body|boolean|false|none|
|» separator|body|string \| null|false|none|
|» numberStyle|body|string \| null|false|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "renameTracks": true,
  "replaceIllegalCharacters": true,
  "colonReplacementFormat": 0,
  "standardTrackFormat": "string",
  "multiDiscTrackFormat": "string",
  "artistFolderFormat": "string",
  "includeArtistName": true,
  "includeAlbumTitle": true,
  "includeQuality": true,
  "replaceSpaces": true,
  "separator": "string",
  "numberStyle": "string"
}
```

<h3 id="putapiv1confignamingid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[NamingConfigResource](#schemanamingconfigresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v1/config/naming

> Code samples

```bash
curl http://localhost:8686/api/v1/config/naming \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/config/naming`

> Example responses

> 200 Response

```json
{
  "id": 0,
  "renameTracks": true,
  "replaceIllegalCharacters": true,
  "colonReplacementFormat": 0,
  "standardTrackFormat": "string",
  "multiDiscTrackFormat": "string",
  "artistFolderFormat": "string",
  "includeArtistName": true,
  "includeAlbumTitle": true,
  "includeQuality": true,
  "replaceSpaces": true,
  "separator": "string",
  "numberStyle": "string"
}
```

<h3 id="getapiv1confignaming-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[NamingConfigResource](#schemanamingconfigresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v1/config/naming/examples

> Code samples

```bash
curl http://localhost:8686/api/v1/config/naming/examples \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/config/naming/examples`

<h3 id="getapiv1confignamingexamples-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|renameTracks|query|boolean|false|none|
|replaceIllegalCharacters|query|boolean|false|none|
|colonReplacementFormat|query|integer(int32)|false|none|
|standardTrackFormat|query|string|false|none|
|multiDiscTrackFormat|query|string|false|none|
|artistFolderFormat|query|string|false|none|
|includeArtistName|query|boolean|false|none|
|includeAlbumTitle|query|boolean|false|none|
|includeQuality|query|boolean|false|none|
|replaceSpaces|query|boolean|false|none|
|separator|query|string|false|none|
|numberStyle|query|string|false|none|
|id|query|integer(int32)|false|none|
|resourceName|query|string|false|none|

<h3 id="getapiv1confignamingexamples-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="lidarr-notification">Notification</h1>

## get/api/v1/notification/{id}

> Code samples

```bash
curl http://localhost:8686/api/v1/notification/0 \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/notification/{id}`

<h3 id="getapiv1notificationid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "fields": [
    {
      "order": 0,
      "name": "string",
      "label": "string",
      "unit": "string",
      "helpText": "string",
      "helpTextWarning": "string",
      "helpLink": "string",
      "value": null,
      "type": "string",
      "advanced": true,
      "selectOptions": [
        {
          "value": 0,
          "name": "string",
          "order": 0,
          "hint": "string"
        }
      ],
      "selectOptionsProviderAction": "string",
      "section": "string",
      "hidden": "string",
      "privacy": "normal",
      "placeholder": "string",
      "isFloat": true
    }
  ],
  "implementationName": "string",
  "implementation": "string",
  "configContract": "string",
  "infoLink": "string",
  "message": {
    "message": "string",
    "type": "info"
  },
  "tags": [
    0
  ],
  "presets": [
    {}
  ],
  "link": "string",
  "onGrab": true,
  "onReleaseImport": true,
  "onUpgrade": true,
  "onRename": true,
  "onArtistAdd": true,
  "onArtistDelete": true,
  "onAlbumDelete": true,
  "onHealthIssue": true,
  "onHealthRestored": true,
  "onDownloadFailure": true,
  "onImportFailure": true,
  "onTrackRetag": true,
  "onApplicationUpdate": true,
  "supportsOnGrab": true,
  "supportsOnReleaseImport": true,
  "supportsOnUpgrade": true,
  "supportsOnRename": true,
  "supportsOnArtistAdd": true,
  "supportsOnArtistDelete": true,
  "supportsOnAlbumDelete": true,
  "supportsOnHealthIssue": true,
  "supportsOnHealthRestored": true,
  "includeHealthWarnings": true,
  "supportsOnDownloadFailure": true,
  "supportsOnImportFailure": true,
  "supportsOnTrackRetag": true,
  "supportsOnApplicationUpdate": true,
  "testCommand": "string"
}
```

<h3 id="getapiv1notificationid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[NotificationResource](#schemanotificationresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## put/api/v1/notification/{id}

> Code samples

```bash
curl http://localhost:8686/api/v1/notification/0 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "id": 0,
    "name": "string",
    "fields": [
      {
        "order": 0,
        "name": "string",
        "label": "string",
        "unit": "string",
        "helpText": "string",
        "helpTextWarning": "string",
        "helpLink": "string",
        "value": null,
        "type": "string",
        "advanced": true,
        "selectOptions": [
          {
            "value": 0,
            "name": "string",
            "order": 0,
            "hint": "string"
          }
        ],
        "selectOptionsProviderAction": "string",
        "section": "string",
        "hidden": "string",
        "privacy": "normal",
        "placeholder": "string",
        "isFloat": true
      }
    ],
    "implementationName": "string",
    "implementation": "string",
    "configContract": "string",
    "infoLink": "string",
    "message": {
      "message": "string",
      "type": "info"
    },
    "tags": [
      0
    ],
    "presets": [
      {}
    ],
    "link": "string",
    "onGrab": true,
    "onReleaseImport": true,
    "onUpgrade": true,
    "onRename": true,
    "onArtistAdd": true,
    "onArtistDelete": true,
    "onAlbumDelete": true,
    "onHealthIssue": true,
    "onHealthRestored": true,
    "onDownloadFailure": true,
    "onImportFailure": true,
    "onTrackRetag": true,
    "onApplicationUpdate": true,
    "supportsOnGrab": true,
    "supportsOnReleaseImport": true,
    "supportsOnUpgrade": true,
    "supportsOnRename": true,
    "supportsOnArtistAdd": true,
    "supportsOnArtistDelete": true,
    "supportsOnAlbumDelete": true,
    "supportsOnHealthIssue": true,
    "supportsOnHealthRestored": true,
    "includeHealthWarnings": true,
    "supportsOnDownloadFailure": true,
    "supportsOnImportFailure": true,
    "supportsOnTrackRetag": true,
    "supportsOnApplicationUpdate": true,
    "testCommand": "string"
  }'
```

`PUT /api/v1/notification/{id}`

> Body parameter

```json
{
  "id": 0,
  "name": "string",
  "fields": [
    {
      "order": 0,
      "name": "string",
      "label": "string",
      "unit": "string",
      "helpText": "string",
      "helpTextWarning": "string",
      "helpLink": "string",
      "value": null,
      "type": "string",
      "advanced": true,
      "selectOptions": [
        {
          "value": 0,
          "name": "string",
          "order": 0,
          "hint": "string"
        }
      ],
      "selectOptionsProviderAction": "string",
      "section": "string",
      "hidden": "string",
      "privacy": "normal",
      "placeholder": "string",
      "isFloat": true
    }
  ],
  "implementationName": "string",
  "implementation": "string",
  "configContract": "string",
  "infoLink": "string",
  "message": {
    "message": "string",
    "type": "info"
  },
  "tags": [
    0
  ],
  "presets": [
    {}
  ],
  "link": "string",
  "onGrab": true,
  "onReleaseImport": true,
  "onUpgrade": true,
  "onRename": true,
  "onArtistAdd": true,
  "onArtistDelete": true,
  "onAlbumDelete": true,
  "onHealthIssue": true,
  "onHealthRestored": true,
  "onDownloadFailure": true,
  "onImportFailure": true,
  "onTrackRetag": true,
  "onApplicationUpdate": true,
  "supportsOnGrab": true,
  "supportsOnReleaseImport": true,
  "supportsOnUpgrade": true,
  "supportsOnRename": true,
  "supportsOnArtistAdd": true,
  "supportsOnArtistDelete": true,
  "supportsOnAlbumDelete": true,
  "supportsOnHealthIssue": true,
  "supportsOnHealthRestored": true,
  "includeHealthWarnings": true,
  "supportsOnDownloadFailure": true,
  "supportsOnImportFailure": true,
  "supportsOnTrackRetag": true,
  "supportsOnApplicationUpdate": true,
  "testCommand": "string"
}
```

<h3 id="putapiv1notificationid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|
|forceSave|query|boolean|false|none|
|body|body|[NotificationResource](#schemanotificationresource)|false|none|
|» id|body|integer(int32)|false|none|
|» name|body|string \| null|false|none|
|» fields|body|[[Field](#schemafield)]|false|none|
|» implementationName|body|string \| null|false|none|
|» implementation|body|string \| null|false|none|
|» configContract|body|string \| null|false|none|
|» infoLink|body|string \| null|false|none|
|» message|body|[ProviderMessage](#schemaprovidermessage)|false|none|
|» tags|body|[integer(int32)]|false|none|
|» presets|body|[[NotificationResource](#schemanotificationresource)]|false|none|
|» link|body|string \| null|false|none|
|» onGrab|body|boolean|false|none|
|» onReleaseImport|body|boolean|false|none|
|» onUpgrade|body|boolean|false|none|
|» onRename|body|boolean|false|none|
|» onArtistAdd|body|boolean|false|none|
|» onArtistDelete|body|boolean|false|none|
|» onAlbumDelete|body|boolean|false|none|
|» onHealthIssue|body|boolean|false|none|
|» onHealthRestored|body|boolean|false|none|
|» onDownloadFailure|body|boolean|false|none|
|» onImportFailure|body|boolean|false|none|
|» onTrackRetag|body|boolean|false|none|
|» onApplicationUpdate|body|boolean|false|none|
|» supportsOnGrab|body|boolean|false|none|
|» supportsOnReleaseImport|body|boolean|false|none|
|» supportsOnUpgrade|body|boolean|false|none|
|» supportsOnRename|body|boolean|false|none|
|» supportsOnArtistAdd|body|boolean|false|none|
|» supportsOnArtistDelete|body|boolean|false|none|
|» supportsOnAlbumDelete|body|boolean|false|none|
|» supportsOnHealthIssue|body|boolean|false|none|
|» supportsOnHealthRestored|body|boolean|false|none|
|» includeHealthWarnings|body|boolean|false|none|
|» supportsOnDownloadFailure|body|boolean|false|none|
|» supportsOnImportFailure|body|boolean|false|none|
|» supportsOnTrackRetag|body|boolean|false|none|
|» supportsOnApplicationUpdate|body|boolean|false|none|
|» testCommand|body|string \| null|false|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "fields": [
    {
      "order": 0,
      "name": "string",
      "label": "string",
      "unit": "string",
      "helpText": "string",
      "helpTextWarning": "string",
      "helpLink": "string",
      "value": null,
      "type": "string",
      "advanced": true,
      "selectOptions": [
        {
          "value": 0,
          "name": "string",
          "order": 0,
          "hint": "string"
        }
      ],
      "selectOptionsProviderAction": "string",
      "section": "string",
      "hidden": "string",
      "privacy": "normal",
      "placeholder": "string",
      "isFloat": true
    }
  ],
  "implementationName": "string",
  "implementation": "string",
  "configContract": "string",
  "infoLink": "string",
  "message": {
    "message": "string",
    "type": "info"
  },
  "tags": [
    0
  ],
  "presets": [
    {}
  ],
  "link": "string",
  "onGrab": true,
  "onReleaseImport": true,
  "onUpgrade": true,
  "onRename": true,
  "onArtistAdd": true,
  "onArtistDelete": true,
  "onAlbumDelete": true,
  "onHealthIssue": true,
  "onHealthRestored": true,
  "onDownloadFailure": true,
  "onImportFailure": true,
  "onTrackRetag": true,
  "onApplicationUpdate": true,
  "supportsOnGrab": true,
  "supportsOnReleaseImport": true,
  "supportsOnUpgrade": true,
  "supportsOnRename": true,
  "supportsOnArtistAdd": true,
  "supportsOnArtistDelete": true,
  "supportsOnAlbumDelete": true,
  "supportsOnHealthIssue": true,
  "supportsOnHealthRestored": true,
  "includeHealthWarnings": true,
  "supportsOnDownloadFailure": true,
  "supportsOnImportFailure": true,
  "supportsOnTrackRetag": true,
  "supportsOnApplicationUpdate": true,
  "testCommand": "string"
}
```

<h3 id="putapiv1notificationid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[NotificationResource](#schemanotificationresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## delete/api/v1/notification/{id}

> Code samples

```bash
curl http://localhost:8686/api/v1/notification/0 \
  -X DELETE \
  -H "X-Api-Key: ${API_KEY}"
```

`DELETE /api/v1/notification/{id}`

<h3 id="deleteapiv1notificationid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

<h3 id="deleteapiv1notificationid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v1/notification

> Code samples

```bash
curl http://localhost:8686/api/v1/notification \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/notification`

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "name": "string",
    "fields": [
      {
        "order": 0,
        "name": "string",
        "label": "string",
        "unit": "string",
        "helpText": "string",
        "helpTextWarning": "string",
        "helpLink": "string",
        "value": null,
        "type": "string",
        "advanced": true,
        "selectOptions": [
          {
            "value": 0,
            "name": "string",
            "order": 0,
            "hint": "string"
          }
        ],
        "selectOptionsProviderAction": "string",
        "section": "string",
        "hidden": "string",
        "privacy": "normal",
        "placeholder": "string",
        "isFloat": true
      }
    ],
    "implementationName": "string",
    "implementation": "string",
    "configContract": "string",
    "infoLink": "string",
    "message": {
      "message": "string",
      "type": "info"
    },
    "tags": [
      0
    ],
    "presets": [
      {}
    ],
    "link": "string",
    "onGrab": true,
    "onReleaseImport": true,
    "onUpgrade": true,
    "onRename": true,
    "onArtistAdd": true,
    "onArtistDelete": true,
    "onAlbumDelete": true,
    "onHealthIssue": true,
    "onHealthRestored": true,
    "onDownloadFailure": true,
    "onImportFailure": true,
    "onTrackRetag": true,
    "onApplicationUpdate": true,
    "supportsOnGrab": true,
    "supportsOnReleaseImport": true,
    "supportsOnUpgrade": true,
    "supportsOnRename": true,
    "supportsOnArtistAdd": true,
    "supportsOnArtistDelete": true,
    "supportsOnAlbumDelete": true,
    "supportsOnHealthIssue": true,
    "supportsOnHealthRestored": true,
    "includeHealthWarnings": true,
    "supportsOnDownloadFailure": true,
    "supportsOnImportFailure": true,
    "supportsOnTrackRetag": true,
    "supportsOnApplicationUpdate": true,
    "testCommand": "string"
  }
]
```

<h3 id="getapiv1notification-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getapiv1notification-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[NotificationResource](#schemanotificationresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## post/api/v1/notification

> Code samples

```bash
curl http://localhost:8686/api/v1/notification \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "id": 0,
    "name": "string",
    "fields": [
      {
        "order": 0,
        "name": "string",
        "label": "string",
        "unit": "string",
        "helpText": "string",
        "helpTextWarning": "string",
        "helpLink": "string",
        "value": null,
        "type": "string",
        "advanced": true,
        "selectOptions": [
          {
            "value": 0,
            "name": "string",
            "order": 0,
            "hint": "string"
          }
        ],
        "selectOptionsProviderAction": "string",
        "section": "string",
        "hidden": "string",
        "privacy": "normal",
        "placeholder": "string",
        "isFloat": true
      }
    ],
    "implementationName": "string",
    "implementation": "string",
    "configContract": "string",
    "infoLink": "string",
    "message": {
      "message": "string",
      "type": "info"
    },
    "tags": [
      0
    ],
    "presets": [
      {}
    ],
    "link": "string",
    "onGrab": true,
    "onReleaseImport": true,
    "onUpgrade": true,
    "onRename": true,
    "onArtistAdd": true,
    "onArtistDelete": true,
    "onAlbumDelete": true,
    "onHealthIssue": true,
    "onHealthRestored": true,
    "onDownloadFailure": true,
    "onImportFailure": true,
    "onTrackRetag": true,
    "onApplicationUpdate": true,
    "supportsOnGrab": true,
    "supportsOnReleaseImport": true,
    "supportsOnUpgrade": true,
    "supportsOnRename": true,
    "supportsOnArtistAdd": true,
    "supportsOnArtistDelete": true,
    "supportsOnAlbumDelete": true,
    "supportsOnHealthIssue": true,
    "supportsOnHealthRestored": true,
    "includeHealthWarnings": true,
    "supportsOnDownloadFailure": true,
    "supportsOnImportFailure": true,
    "supportsOnTrackRetag": true,
    "supportsOnApplicationUpdate": true,
    "testCommand": "string"
  }'
```

`POST /api/v1/notification`

> Body parameter

```json
{
  "id": 0,
  "name": "string",
  "fields": [
    {
      "order": 0,
      "name": "string",
      "label": "string",
      "unit": "string",
      "helpText": "string",
      "helpTextWarning": "string",
      "helpLink": "string",
      "value": null,
      "type": "string",
      "advanced": true,
      "selectOptions": [
        {
          "value": 0,
          "name": "string",
          "order": 0,
          "hint": "string"
        }
      ],
      "selectOptionsProviderAction": "string",
      "section": "string",
      "hidden": "string",
      "privacy": "normal",
      "placeholder": "string",
      "isFloat": true
    }
  ],
  "implementationName": "string",
  "implementation": "string",
  "configContract": "string",
  "infoLink": "string",
  "message": {
    "message": "string",
    "type": "info"
  },
  "tags": [
    0
  ],
  "presets": [
    {}
  ],
  "link": "string",
  "onGrab": true,
  "onReleaseImport": true,
  "onUpgrade": true,
  "onRename": true,
  "onArtistAdd": true,
  "onArtistDelete": true,
  "onAlbumDelete": true,
  "onHealthIssue": true,
  "onHealthRestored": true,
  "onDownloadFailure": true,
  "onImportFailure": true,
  "onTrackRetag": true,
  "onApplicationUpdate": true,
  "supportsOnGrab": true,
  "supportsOnReleaseImport": true,
  "supportsOnUpgrade": true,
  "supportsOnRename": true,
  "supportsOnArtistAdd": true,
  "supportsOnArtistDelete": true,
  "supportsOnAlbumDelete": true,
  "supportsOnHealthIssue": true,
  "supportsOnHealthRestored": true,
  "includeHealthWarnings": true,
  "supportsOnDownloadFailure": true,
  "supportsOnImportFailure": true,
  "supportsOnTrackRetag": true,
  "supportsOnApplicationUpdate": true,
  "testCommand": "string"
}
```

<h3 id="postapiv1notification-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|forceSave|query|boolean|false|none|
|body|body|[NotificationResource](#schemanotificationresource)|false|none|
|» id|body|integer(int32)|false|none|
|» name|body|string \| null|false|none|
|» fields|body|[[Field](#schemafield)]|false|none|
|» implementationName|body|string \| null|false|none|
|» implementation|body|string \| null|false|none|
|» configContract|body|string \| null|false|none|
|» infoLink|body|string \| null|false|none|
|» message|body|[ProviderMessage](#schemaprovidermessage)|false|none|
|» tags|body|[integer(int32)]|false|none|
|» presets|body|[[NotificationResource](#schemanotificationresource)]|false|none|
|» link|body|string \| null|false|none|
|» onGrab|body|boolean|false|none|
|» onReleaseImport|body|boolean|false|none|
|» onUpgrade|body|boolean|false|none|
|» onRename|body|boolean|false|none|
|» onArtistAdd|body|boolean|false|none|
|» onArtistDelete|body|boolean|false|none|
|» onAlbumDelete|body|boolean|false|none|
|» onHealthIssue|body|boolean|false|none|
|» onHealthRestored|body|boolean|false|none|
|» onDownloadFailure|body|boolean|false|none|
|» onImportFailure|body|boolean|false|none|
|» onTrackRetag|body|boolean|false|none|
|» onApplicationUpdate|body|boolean|false|none|
|» supportsOnGrab|body|boolean|false|none|
|» supportsOnReleaseImport|body|boolean|false|none|
|» supportsOnUpgrade|body|boolean|false|none|
|» supportsOnRename|body|boolean|false|none|
|» supportsOnArtistAdd|body|boolean|false|none|
|» supportsOnArtistDelete|body|boolean|false|none|
|» supportsOnAlbumDelete|body|boolean|false|none|
|» supportsOnHealthIssue|body|boolean|false|none|
|» supportsOnHealthRestored|body|boolean|false|none|
|» includeHealthWarnings|body|boolean|false|none|
|» supportsOnDownloadFailure|body|boolean|false|none|
|» supportsOnImportFailure|body|boolean|false|none|
|» supportsOnTrackRetag|body|boolean|false|none|
|» supportsOnApplicationUpdate|body|boolean|false|none|
|» testCommand|body|string \| null|false|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "fields": [
    {
      "order": 0,
      "name": "string",
      "label": "string",
      "unit": "string",
      "helpText": "string",
      "helpTextWarning": "string",
      "helpLink": "string",
      "value": null,
      "type": "string",
      "advanced": true,
      "selectOptions": [
        {
          "value": 0,
          "name": "string",
          "order": 0,
          "hint": "string"
        }
      ],
      "selectOptionsProviderAction": "string",
      "section": "string",
      "hidden": "string",
      "privacy": "normal",
      "placeholder": "string",
      "isFloat": true
    }
  ],
  "implementationName": "string",
  "implementation": "string",
  "configContract": "string",
  "infoLink": "string",
  "message": {
    "message": "string",
    "type": "info"
  },
  "tags": [
    0
  ],
  "presets": [
    {}
  ],
  "link": "string",
  "onGrab": true,
  "onReleaseImport": true,
  "onUpgrade": true,
  "onRename": true,
  "onArtistAdd": true,
  "onArtistDelete": true,
  "onAlbumDelete": true,
  "onHealthIssue": true,
  "onHealthRestored": true,
  "onDownloadFailure": true,
  "onImportFailure": true,
  "onTrackRetag": true,
  "onApplicationUpdate": true,
  "supportsOnGrab": true,
  "supportsOnReleaseImport": true,
  "supportsOnUpgrade": true,
  "supportsOnRename": true,
  "supportsOnArtistAdd": true,
  "supportsOnArtistDelete": true,
  "supportsOnAlbumDelete": true,
  "supportsOnHealthIssue": true,
  "supportsOnHealthRestored": true,
  "includeHealthWarnings": true,
  "supportsOnDownloadFailure": true,
  "supportsOnImportFailure": true,
  "supportsOnTrackRetag": true,
  "supportsOnApplicationUpdate": true,
  "testCommand": "string"
}
```

<h3 id="postapiv1notification-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[NotificationResource](#schemanotificationresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v1/notification/schema

> Code samples

```bash
curl http://localhost:8686/api/v1/notification/schema \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/notification/schema`

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "name": "string",
    "fields": [
      {
        "order": 0,
        "name": "string",
        "label": "string",
        "unit": "string",
        "helpText": "string",
        "helpTextWarning": "string",
        "helpLink": "string",
        "value": null,
        "type": "string",
        "advanced": true,
        "selectOptions": [
          {
            "value": 0,
            "name": "string",
            "order": 0,
            "hint": "string"
          }
        ],
        "selectOptionsProviderAction": "string",
        "section": "string",
        "hidden": "string",
        "privacy": "normal",
        "placeholder": "string",
        "isFloat": true
      }
    ],
    "implementationName": "string",
    "implementation": "string",
    "configContract": "string",
    "infoLink": "string",
    "message": {
      "message": "string",
      "type": "info"
    },
    "tags": [
      0
    ],
    "presets": [
      {}
    ],
    "link": "string",
    "onGrab": true,
    "onReleaseImport": true,
    "onUpgrade": true,
    "onRename": true,
    "onArtistAdd": true,
    "onArtistDelete": true,
    "onAlbumDelete": true,
    "onHealthIssue": true,
    "onHealthRestored": true,
    "onDownloadFailure": true,
    "onImportFailure": true,
    "onTrackRetag": true,
    "onApplicationUpdate": true,
    "supportsOnGrab": true,
    "supportsOnReleaseImport": true,
    "supportsOnUpgrade": true,
    "supportsOnRename": true,
    "supportsOnArtistAdd": true,
    "supportsOnArtistDelete": true,
    "supportsOnAlbumDelete": true,
    "supportsOnHealthIssue": true,
    "supportsOnHealthRestored": true,
    "includeHealthWarnings": true,
    "supportsOnDownloadFailure": true,
    "supportsOnImportFailure": true,
    "supportsOnTrackRetag": true,
    "supportsOnApplicationUpdate": true,
    "testCommand": "string"
  }
]
```

<h3 id="getapiv1notificationschema-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getapiv1notificationschema-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[NotificationResource](#schemanotificationresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## post/api/v1/notification/test

> Code samples

```bash
curl http://localhost:8686/api/v1/notification/test \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "id": 0,
    "name": "string",
    "fields": [
      {
        "order": 0,
        "name": "string",
        "label": "string",
        "unit": "string",
        "helpText": "string",
        "helpTextWarning": "string",
        "helpLink": "string",
        "value": null,
        "type": "string",
        "advanced": true,
        "selectOptions": [
          {
            "value": 0,
            "name": "string",
            "order": 0,
            "hint": "string"
          }
        ],
        "selectOptionsProviderAction": "string",
        "section": "string",
        "hidden": "string",
        "privacy": "normal",
        "placeholder": "string",
        "isFloat": true
      }
    ],
    "implementationName": "string",
    "implementation": "string",
    "configContract": "string",
    "infoLink": "string",
    "message": {
      "message": "string",
      "type": "info"
    },
    "tags": [
      0
    ],
    "presets": [
      {}
    ],
    "link": "string",
    "onGrab": true,
    "onReleaseImport": true,
    "onUpgrade": true,
    "onRename": true,
    "onArtistAdd": true,
    "onArtistDelete": true,
    "onAlbumDelete": true,
    "onHealthIssue": true,
    "onHealthRestored": true,
    "onDownloadFailure": true,
    "onImportFailure": true,
    "onTrackRetag": true,
    "onApplicationUpdate": true,
    "supportsOnGrab": true,
    "supportsOnReleaseImport": true,
    "supportsOnUpgrade": true,
    "supportsOnRename": true,
    "supportsOnArtistAdd": true,
    "supportsOnArtistDelete": true,
    "supportsOnAlbumDelete": true,
    "supportsOnHealthIssue": true,
    "supportsOnHealthRestored": true,
    "includeHealthWarnings": true,
    "supportsOnDownloadFailure": true,
    "supportsOnImportFailure": true,
    "supportsOnTrackRetag": true,
    "supportsOnApplicationUpdate": true,
    "testCommand": "string"
  }'
```

`POST /api/v1/notification/test`

> Body parameter

```json
{
  "id": 0,
  "name": "string",
  "fields": [
    {
      "order": 0,
      "name": "string",
      "label": "string",
      "unit": "string",
      "helpText": "string",
      "helpTextWarning": "string",
      "helpLink": "string",
      "value": null,
      "type": "string",
      "advanced": true,
      "selectOptions": [
        {
          "value": 0,
          "name": "string",
          "order": 0,
          "hint": "string"
        }
      ],
      "selectOptionsProviderAction": "string",
      "section": "string",
      "hidden": "string",
      "privacy": "normal",
      "placeholder": "string",
      "isFloat": true
    }
  ],
  "implementationName": "string",
  "implementation": "string",
  "configContract": "string",
  "infoLink": "string",
  "message": {
    "message": "string",
    "type": "info"
  },
  "tags": [
    0
  ],
  "presets": [
    {}
  ],
  "link": "string",
  "onGrab": true,
  "onReleaseImport": true,
  "onUpgrade": true,
  "onRename": true,
  "onArtistAdd": true,
  "onArtistDelete": true,
  "onAlbumDelete": true,
  "onHealthIssue": true,
  "onHealthRestored": true,
  "onDownloadFailure": true,
  "onImportFailure": true,
  "onTrackRetag": true,
  "onApplicationUpdate": true,
  "supportsOnGrab": true,
  "supportsOnReleaseImport": true,
  "supportsOnUpgrade": true,
  "supportsOnRename": true,
  "supportsOnArtistAdd": true,
  "supportsOnArtistDelete": true,
  "supportsOnAlbumDelete": true,
  "supportsOnHealthIssue": true,
  "supportsOnHealthRestored": true,
  "includeHealthWarnings": true,
  "supportsOnDownloadFailure": true,
  "supportsOnImportFailure": true,
  "supportsOnTrackRetag": true,
  "supportsOnApplicationUpdate": true,
  "testCommand": "string"
}
```

<h3 id="postapiv1notificationtest-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|forceTest|query|boolean|false|none|
|body|body|[NotificationResource](#schemanotificationresource)|false|none|
|» id|body|integer(int32)|false|none|
|» name|body|string \| null|false|none|
|» fields|body|[[Field](#schemafield)]|false|none|
|» implementationName|body|string \| null|false|none|
|» implementation|body|string \| null|false|none|
|» configContract|body|string \| null|false|none|
|» infoLink|body|string \| null|false|none|
|» message|body|[ProviderMessage](#schemaprovidermessage)|false|none|
|» tags|body|[integer(int32)]|false|none|
|» presets|body|[[NotificationResource](#schemanotificationresource)]|false|none|
|» link|body|string \| null|false|none|
|» onGrab|body|boolean|false|none|
|» onReleaseImport|body|boolean|false|none|
|» onUpgrade|body|boolean|false|none|
|» onRename|body|boolean|false|none|
|» onArtistAdd|body|boolean|false|none|
|» onArtistDelete|body|boolean|false|none|
|» onAlbumDelete|body|boolean|false|none|
|» onHealthIssue|body|boolean|false|none|
|» onHealthRestored|body|boolean|false|none|
|» onDownloadFailure|body|boolean|false|none|
|» onImportFailure|body|boolean|false|none|
|» onTrackRetag|body|boolean|false|none|
|» onApplicationUpdate|body|boolean|false|none|
|» supportsOnGrab|body|boolean|false|none|
|» supportsOnReleaseImport|body|boolean|false|none|
|» supportsOnUpgrade|body|boolean|false|none|
|» supportsOnRename|body|boolean|false|none|
|» supportsOnArtistAdd|body|boolean|false|none|
|» supportsOnArtistDelete|body|boolean|false|none|
|» supportsOnAlbumDelete|body|boolean|false|none|
|» supportsOnHealthIssue|body|boolean|false|none|
|» supportsOnHealthRestored|body|boolean|false|none|
|» includeHealthWarnings|body|boolean|false|none|
|» supportsOnDownloadFailure|body|boolean|false|none|
|» supportsOnImportFailure|body|boolean|false|none|
|» supportsOnTrackRetag|body|boolean|false|none|
|» supportsOnApplicationUpdate|body|boolean|false|none|
|» testCommand|body|string \| null|false|none|

<h3 id="postapiv1notificationtest-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## post/api/v1/notification/testall

> Code samples

```bash
curl http://localhost:8686/api/v1/notification/testall \
  -X POST \
  -H "X-Api-Key: ${API_KEY}"
```

`POST /api/v1/notification/testall`

<h3 id="postapiv1notificationtestall-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## post/api/v1/notification/action/{name}

> Code samples

```bash
curl http://localhost:8686/api/v1/notification/action/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "id": 0,
    "name": "string",
    "fields": [
      {
        "order": 0,
        "name": "string",
        "label": "string",
        "unit": "string",
        "helpText": "string",
        "helpTextWarning": "string",
        "helpLink": "string",
        "value": null,
        "type": "string",
        "advanced": true,
        "selectOptions": [
          {
            "value": 0,
            "name": "string",
            "order": 0,
            "hint": "string"
          }
        ],
        "selectOptionsProviderAction": "string",
        "section": "string",
        "hidden": "string",
        "privacy": "normal",
        "placeholder": "string",
        "isFloat": true
      }
    ],
    "implementationName": "string",
    "implementation": "string",
    "configContract": "string",
    "infoLink": "string",
    "message": {
      "message": "string",
      "type": "info"
    },
    "tags": [
      0
    ],
    "presets": [
      {}
    ],
    "link": "string",
    "onGrab": true,
    "onReleaseImport": true,
    "onUpgrade": true,
    "onRename": true,
    "onArtistAdd": true,
    "onArtistDelete": true,
    "onAlbumDelete": true,
    "onHealthIssue": true,
    "onHealthRestored": true,
    "onDownloadFailure": true,
    "onImportFailure": true,
    "onTrackRetag": true,
    "onApplicationUpdate": true,
    "supportsOnGrab": true,
    "supportsOnReleaseImport": true,
    "supportsOnUpgrade": true,
    "supportsOnRename": true,
    "supportsOnArtistAdd": true,
    "supportsOnArtistDelete": true,
    "supportsOnAlbumDelete": true,
    "supportsOnHealthIssue": true,
    "supportsOnHealthRestored": true,
    "includeHealthWarnings": true,
    "supportsOnDownloadFailure": true,
    "supportsOnImportFailure": true,
    "supportsOnTrackRetag": true,
    "supportsOnApplicationUpdate": true,
    "testCommand": "string"
  }'
```

`POST /api/v1/notification/action/{name}`

> Body parameter

```json
{
  "id": 0,
  "name": "string",
  "fields": [
    {
      "order": 0,
      "name": "string",
      "label": "string",
      "unit": "string",
      "helpText": "string",
      "helpTextWarning": "string",
      "helpLink": "string",
      "value": null,
      "type": "string",
      "advanced": true,
      "selectOptions": [
        {
          "value": 0,
          "name": "string",
          "order": 0,
          "hint": "string"
        }
      ],
      "selectOptionsProviderAction": "string",
      "section": "string",
      "hidden": "string",
      "privacy": "normal",
      "placeholder": "string",
      "isFloat": true
    }
  ],
  "implementationName": "string",
  "implementation": "string",
  "configContract": "string",
  "infoLink": "string",
  "message": {
    "message": "string",
    "type": "info"
  },
  "tags": [
    0
  ],
  "presets": [
    {}
  ],
  "link": "string",
  "onGrab": true,
  "onReleaseImport": true,
  "onUpgrade": true,
  "onRename": true,
  "onArtistAdd": true,
  "onArtistDelete": true,
  "onAlbumDelete": true,
  "onHealthIssue": true,
  "onHealthRestored": true,
  "onDownloadFailure": true,
  "onImportFailure": true,
  "onTrackRetag": true,
  "onApplicationUpdate": true,
  "supportsOnGrab": true,
  "supportsOnReleaseImport": true,
  "supportsOnUpgrade": true,
  "supportsOnRename": true,
  "supportsOnArtistAdd": true,
  "supportsOnArtistDelete": true,
  "supportsOnAlbumDelete": true,
  "supportsOnHealthIssue": true,
  "supportsOnHealthRestored": true,
  "includeHealthWarnings": true,
  "supportsOnDownloadFailure": true,
  "supportsOnImportFailure": true,
  "supportsOnTrackRetag": true,
  "supportsOnApplicationUpdate": true,
  "testCommand": "string"
}
```

<h3 id="postapiv1notificationactionname-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|none|
|body|body|[NotificationResource](#schemanotificationresource)|false|none|
|» id|body|integer(int32)|false|none|
|» name|body|string \| null|false|none|
|» fields|body|[[Field](#schemafield)]|false|none|
|» implementationName|body|string \| null|false|none|
|» implementation|body|string \| null|false|none|
|» configContract|body|string \| null|false|none|
|» infoLink|body|string \| null|false|none|
|» message|body|[ProviderMessage](#schemaprovidermessage)|false|none|
|» tags|body|[integer(int32)]|false|none|
|» presets|body|[[NotificationResource](#schemanotificationresource)]|false|none|
|» link|body|string \| null|false|none|
|» onGrab|body|boolean|false|none|
|» onReleaseImport|body|boolean|false|none|
|» onUpgrade|body|boolean|false|none|
|» onRename|body|boolean|false|none|
|» onArtistAdd|body|boolean|false|none|
|» onArtistDelete|body|boolean|false|none|
|» onAlbumDelete|body|boolean|false|none|
|» onHealthIssue|body|boolean|false|none|
|» onHealthRestored|body|boolean|false|none|
|» onDownloadFailure|body|boolean|false|none|
|» onImportFailure|body|boolean|false|none|
|» onTrackRetag|body|boolean|false|none|
|» onApplicationUpdate|body|boolean|false|none|
|» supportsOnGrab|body|boolean|false|none|
|» supportsOnReleaseImport|body|boolean|false|none|
|» supportsOnUpgrade|body|boolean|false|none|
|» supportsOnRename|body|boolean|false|none|
|» supportsOnArtistAdd|body|boolean|false|none|
|» supportsOnArtistDelete|body|boolean|false|none|
|» supportsOnAlbumDelete|body|boolean|false|none|
|» supportsOnHealthIssue|body|boolean|false|none|
|» supportsOnHealthRestored|body|boolean|false|none|
|» includeHealthWarnings|body|boolean|false|none|
|» supportsOnDownloadFailure|body|boolean|false|none|
|» supportsOnImportFailure|body|boolean|false|none|
|» supportsOnTrackRetag|body|boolean|false|none|
|» supportsOnApplicationUpdate|body|boolean|false|none|
|» testCommand|body|string \| null|false|none|

<h3 id="postapiv1notificationactionname-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="lidarr-parse">Parse</h1>

## get/api/v1/parse

> Code samples

```bash
curl http://localhost:8686/api/v1/parse \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/parse`

<h3 id="getapiv1parse-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|title|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "title": "string",
  "parsedAlbumInfo": {
    "releaseTitle": "string",
    "albumTitle": "string",
    "artistName": "string",
    "albumType": "string",
    "artistTitleInfo": {
      "title": "string",
      "titleWithoutYear": "string",
      "year": 0
    },
    "quality": {
      "quality": {
        "id": 0,
        "name": "string"
      },
      "revision": {
        "version": 0,
        "real": 0,
        "isRepack": true
      }
    },
    "releaseDate": "string",
    "discography": true,
    "discographyStart": 0,
    "discographyEnd": 0,
    "releaseGroup": "string",
    "releaseHash": "string",
    "releaseVersion": "string"
  },
  "artist": {
    "id": 0,
    "status": "continuing",
    "ended": true,
    "artistName": "string",
    "foreignArtistId": "string",
    "mbId": "string",
    "tadbId": 0,
    "discogsId": 0,
    "allMusicId": "string",
    "overview": "string",
    "artistType": "string",
    "disambiguation": "string",
    "links": [
      {
        "url": "string",
        "name": "string"
      }
    ],
    "nextAlbum": {},
    "lastAlbum": {},
    "images": [
      {
        "url": "string",
        "coverType": "unknown",
        "extension": "string",
        "remoteUrl": "string"
      }
    ],
    "members": [
      {
        "name": "string",
        "instrument": "string",
        "images": [
          {
            "url": "string",
            "coverType": "unknown",
            "extension": "string",
            "remoteUrl": "string"
          }
        ]
      }
    ],
    "remotePoster": "string",
    "path": "string",
    "qualityProfileId": 0,
    "metadataProfileId": 0,
    "monitored": true,
    "monitorNewItems": "all",
    "rootFolderPath": "string",
    "folder": "string",
    "genres": [
      "string"
    ],
    "cleanName": "string",
    "sortName": "string",
    "tags": [
      0
    ],
    "added": "1970-01-01T00:00:00Z",
    "addOptions": {
      "monitor": "all",
      "albumsToMonitor": [
        "string"
      ],
      "monitored": true,
      "searchForMissingAlbums": true
    },
    "ratings": {
      "votes": 0,
      "value": 0
    },
    "statistics": {
      "albumCount": 0,
      "trackFileCount": 0,
      "trackCount": 0,
      "totalTrackCount": 0,
      "sizeOnDisk": 0,
      "percentOfTracks": 0
    }
  },
  "albums": [
    {
      "id": 0,
      "title": "string",
      "disambiguation": "string",
      "overview": "string",
      "artistId": 0,
      "foreignAlbumId": "string",
      "monitored": true,
      "anyReleaseOk": true,
      "profileId": 0,
      "duration": 0,
      "albumType": "string",
      "secondaryTypes": [
        "string"
      ],
      "mediumCount": 0,
      "ratings": {
        "votes": 0,
        "value": 0
      },
      "releaseDate": "1970-01-01T00:00:00Z",
      "releases": [
        {
          "id": 0,
          "albumId": 0,
          "foreignReleaseId": "string",
          "title": "string",
          "status": "string",
          "duration": 0,
          "trackCount": 0,
          "media": [
            {
              "mediumNumber": 0,
              "mediumName": "string",
              "mediumFormat": "string"
            }
          ],
          "mediumCount": 0,
          "disambiguation": "string",
          "country": [
            "string"
          ],
          "label": [
            "string"
          ],
          "format": "string",
          "monitored": true
        }
      ],
      "genres": [
        "string"
      ],
      "media": [
        {
          "mediumNumber": 0,
          "mediumName": "string",
          "mediumFormat": "string"
        }
      ],
      "artist": {},
      "images": [
        {
          "url": "string",
          "coverType": "unknown",
          "extension": "string",
          "remoteUrl": "string"
        }
      ],
      "links": [
        {
          "url": "string",
          "name": "string"
        }
      ],
      "lastSearchTime": "1970-01-01T00:00:00Z",
      "statistics": {
        "trackFileCount": 0,
        "trackCount": 0,
        "totalTrackCount": 0,
        "sizeOnDisk": 0,
        "percentOfTracks": 0
      },
      "addOptions": {
        "addType": "automatic",
        "searchForNewAlbum": true
      },
      "remoteCover": "string"
    }
  ],
  "customFormats": [
    {
      "id": 0,
      "name": "string",
      "includeCustomFormatWhenRenaming": true,
      "specifications": [
        {
          "id": 0,
          "name": "string",
          "implementation": "string",
          "implementationName": "string",
          "infoLink": "string",
          "negate": true,
          "required": true,
          "fields": [
            {
              "order": 0,
              "name": "string",
              "label": "string",
              "unit": "string",
              "helpText": "string",
              "helpTextWarning": "string",
              "helpLink": "string",
              "value": null,
              "type": "string",
              "advanced": true,
              "selectOptions": [
                {
                  "value": 0,
                  "name": "string",
                  "order": 0,
                  "hint": "string"
                }
              ],
              "selectOptionsProviderAction": "string",
              "section": "string",
              "hidden": "string",
              "privacy": "normal",
              "placeholder": "string",
              "isFloat": true
            }
          ],
          "presets": [
            {}
          ]
        }
      ]
    }
  ],
  "customFormatScore": 0
}
```

<h3 id="getapiv1parse-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ParseResource](#schemaparseresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="lidarr-ping">Ping</h1>

## get/ping

> Code samples

```bash
curl http://localhost:8686/ping \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /ping`

> Example responses

> 200 Response

```json
{
  "status": "string"
}
```

<h3 id="getping-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PingResource](#schemapingresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## head/ping

> Code samples

```bash
curl http://localhost:8686/ping \
  -X HEAD \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`HEAD /ping`

> Example responses

> 200 Response

```json
{
  "status": "string"
}
```

<h3 id="headping-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PingResource](#schemapingresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="lidarr-qualitydefinition">QualityDefinition</h1>

## get/api/v1/qualitydefinition/{id}

> Code samples

```bash
curl http://localhost:8686/api/v1/qualitydefinition/0 \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/qualitydefinition/{id}`

<h3 id="getapiv1qualitydefinitionid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "quality": {
    "id": 0,
    "name": "string"
  },
  "title": "string",
  "weight": 0,
  "minSize": 0,
  "maxSize": 0,
  "preferredSize": 0
}
```

<h3 id="getapiv1qualitydefinitionid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[QualityDefinitionResource](#schemaqualitydefinitionresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## put/api/v1/qualitydefinition/{id}

> Code samples

```bash
curl http://localhost:8686/api/v1/qualitydefinition/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "id": 0,
    "quality": {
      "id": 0,
      "name": "string"
    },
    "title": "string",
    "weight": 0,
    "minSize": 0,
    "maxSize": 0,
    "preferredSize": 0
  }'
```

`PUT /api/v1/qualitydefinition/{id}`

> Body parameter

```json
{
  "id": 0,
  "quality": {
    "id": 0,
    "name": "string"
  },
  "title": "string",
  "weight": 0,
  "minSize": 0,
  "maxSize": 0,
  "preferredSize": 0
}
```

<h3 id="putapiv1qualitydefinitionid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|[QualityDefinitionResource](#schemaqualitydefinitionresource)|false|none|
|» id|body|integer(int32)|false|none|
|» quality|body|[Quality](#schemaquality)|false|none|
|» title|body|string \| null|false|none|
|» weight|body|integer(int32)|false|none|
|» minSize|body|number(double) \| null|false|none|
|» maxSize|body|number(double) \| null|false|none|
|» preferredSize|body|number(double) \| null|false|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "quality": {
    "id": 0,
    "name": "string"
  },
  "title": "string",
  "weight": 0,
  "minSize": 0,
  "maxSize": 0,
  "preferredSize": 0
}
```

<h3 id="putapiv1qualitydefinitionid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[QualityDefinitionResource](#schemaqualitydefinitionresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v1/qualitydefinition

> Code samples

```bash
curl http://localhost:8686/api/v1/qualitydefinition \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/qualitydefinition`

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "quality": {
      "id": 0,
      "name": "string"
    },
    "title": "string",
    "weight": 0,
    "minSize": 0,
    "maxSize": 0,
    "preferredSize": 0
  }
]
```

<h3 id="getapiv1qualitydefinition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getapiv1qualitydefinition-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[QualityDefinitionResource](#schemaqualitydefinitionresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## put/api/v1/qualitydefinition/update

> Code samples

```bash
curl http://localhost:8686/api/v1/qualitydefinition/update \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '[
    {
      "id": 0,
      "quality": {
        "id": 0,
        "name": "string"
      },
      "title": "string",
      "weight": 0,
      "minSize": 0,
      "maxSize": 0,
      "preferredSize": 0
    }
  ]'
```

`PUT /api/v1/qualitydefinition/update`

> Body parameter

```json
[
  {
    "id": 0,
    "quality": {
      "id": 0,
      "name": "string"
    },
    "title": "string",
    "weight": 0,
    "minSize": 0,
    "maxSize": 0,
    "preferredSize": 0
  }
]
```

<h3 id="putapiv1qualitydefinitionupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[[QualityDefinitionResource](#schemaqualitydefinitionresource)]|false|none|

<h3 id="putapiv1qualitydefinitionupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="lidarr-qualityprofile">QualityProfile</h1>

## get/api/v1/qualityprofile

> Code samples

```bash
curl http://localhost:8686/api/v1/qualityprofile \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/qualityprofile`

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "name": "string",
    "upgradeAllowed": true,
    "cutoff": 0,
    "items": [
      {
        "id": 0,
        "name": "string",
        "quality": {
          "id": 0,
          "name": "string"
        },
        "items": [
          {}
        ],
        "allowed": true
      }
    ],
    "minFormatScore": 0,
    "cutoffFormatScore": 0,
    "formatItems": [
      {
        "id": 0,
        "format": 0,
        "name": "string",
        "score": 0
      }
    ]
  }
]
```

<h3 id="getapiv1qualityprofile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getapiv1qualityprofile-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[QualityProfileResource](#schemaqualityprofileresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## post/api/v1/qualityprofile

> Code samples

```bash
curl http://localhost:8686/api/v1/qualityprofile \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "id": 0,
    "name": "string",
    "upgradeAllowed": true,
    "cutoff": 0,
    "items": [
      {
        "id": 0,
        "name": "string",
        "quality": {
          "id": 0,
          "name": "string"
        },
        "items": [
          {}
        ],
        "allowed": true
      }
    ],
    "minFormatScore": 0,
    "cutoffFormatScore": 0,
    "formatItems": [
      {
        "id": 0,
        "format": 0,
        "name": "string",
        "score": 0
      }
    ]
  }'
```

`POST /api/v1/qualityprofile`

> Body parameter

```json
{
  "id": 0,
  "name": "string",
  "upgradeAllowed": true,
  "cutoff": 0,
  "items": [
    {
      "id": 0,
      "name": "string",
      "quality": {
        "id": 0,
        "name": "string"
      },
      "items": [
        {}
      ],
      "allowed": true
    }
  ],
  "minFormatScore": 0,
  "cutoffFormatScore": 0,
  "formatItems": [
    {
      "id": 0,
      "format": 0,
      "name": "string",
      "score": 0
    }
  ]
}
```

<h3 id="postapiv1qualityprofile-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[QualityProfileResource](#schemaqualityprofileresource)|false|none|
|» id|body|integer(int32)|false|none|
|» name|body|string \| null|false|none|
|» upgradeAllowed|body|boolean|false|none|
|» cutoff|body|integer(int32)|false|none|
|» items|body|[[QualityProfileQualityItemResource](#schemaqualityprofilequalityitemresource)]|false|none|
|» minFormatScore|body|integer(int32)|false|none|
|» cutoffFormatScore|body|integer(int32)|false|none|
|» formatItems|body|[[ProfileFormatItemResource](#schemaprofileformatitemresource)]|false|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "upgradeAllowed": true,
  "cutoff": 0,
  "items": [
    {
      "id": 0,
      "name": "string",
      "quality": {
        "id": 0,
        "name": "string"
      },
      "items": [
        {}
      ],
      "allowed": true
    }
  ],
  "minFormatScore": 0,
  "cutoffFormatScore": 0,
  "formatItems": [
    {
      "id": 0,
      "format": 0,
      "name": "string",
      "score": 0
    }
  ]
}
```

<h3 id="postapiv1qualityprofile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[QualityProfileResource](#schemaqualityprofileresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v1/qualityprofile/{id}

> Code samples

```bash
curl http://localhost:8686/api/v1/qualityprofile/0 \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/qualityprofile/{id}`

<h3 id="getapiv1qualityprofileid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "upgradeAllowed": true,
  "cutoff": 0,
  "items": [
    {
      "id": 0,
      "name": "string",
      "quality": {
        "id": 0,
        "name": "string"
      },
      "items": [
        {}
      ],
      "allowed": true
    }
  ],
  "minFormatScore": 0,
  "cutoffFormatScore": 0,
  "formatItems": [
    {
      "id": 0,
      "format": 0,
      "name": "string",
      "score": 0
    }
  ]
}
```

<h3 id="getapiv1qualityprofileid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[QualityProfileResource](#schemaqualityprofileresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## put/api/v1/qualityprofile/{id}

> Code samples

```bash
curl http://localhost:8686/api/v1/qualityprofile/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "id": 0,
    "name": "string",
    "upgradeAllowed": true,
    "cutoff": 0,
    "items": [
      {
        "id": 0,
        "name": "string",
        "quality": {
          "id": 0,
          "name": "string"
        },
        "items": [
          {}
        ],
        "allowed": true
      }
    ],
    "minFormatScore": 0,
    "cutoffFormatScore": 0,
    "formatItems": [
      {
        "id": 0,
        "format": 0,
        "name": "string",
        "score": 0
      }
    ]
  }'
```

`PUT /api/v1/qualityprofile/{id}`

> Body parameter

```json
{
  "id": 0,
  "name": "string",
  "upgradeAllowed": true,
  "cutoff": 0,
  "items": [
    {
      "id": 0,
      "name": "string",
      "quality": {
        "id": 0,
        "name": "string"
      },
      "items": [
        {}
      ],
      "allowed": true
    }
  ],
  "minFormatScore": 0,
  "cutoffFormatScore": 0,
  "formatItems": [
    {
      "id": 0,
      "format": 0,
      "name": "string",
      "score": 0
    }
  ]
}
```

<h3 id="putapiv1qualityprofileid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|[QualityProfileResource](#schemaqualityprofileresource)|false|none|
|» id|body|integer(int32)|false|none|
|» name|body|string \| null|false|none|
|» upgradeAllowed|body|boolean|false|none|
|» cutoff|body|integer(int32)|false|none|
|» items|body|[[QualityProfileQualityItemResource](#schemaqualityprofilequalityitemresource)]|false|none|
|» minFormatScore|body|integer(int32)|false|none|
|» cutoffFormatScore|body|integer(int32)|false|none|
|» formatItems|body|[[ProfileFormatItemResource](#schemaprofileformatitemresource)]|false|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "upgradeAllowed": true,
  "cutoff": 0,
  "items": [
    {
      "id": 0,
      "name": "string",
      "quality": {
        "id": 0,
        "name": "string"
      },
      "items": [
        {}
      ],
      "allowed": true
    }
  ],
  "minFormatScore": 0,
  "cutoffFormatScore": 0,
  "formatItems": [
    {
      "id": 0,
      "format": 0,
      "name": "string",
      "score": 0
    }
  ]
}
```

<h3 id="putapiv1qualityprofileid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[QualityProfileResource](#schemaqualityprofileresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## delete/api/v1/qualityprofile/{id}

> Code samples

```bash
curl http://localhost:8686/api/v1/qualityprofile/0 \
  -X DELETE \
  -H "X-Api-Key: ${API_KEY}"
```

`DELETE /api/v1/qualityprofile/{id}`

<h3 id="deleteapiv1qualityprofileid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

<h3 id="deleteapiv1qualityprofileid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="lidarr-qualityprofileschema">QualityProfileSchema</h1>

## get/api/v1/qualityprofile/schema

> Code samples

```bash
curl http://localhost:8686/api/v1/qualityprofile/schema \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/qualityprofile/schema`

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "upgradeAllowed": true,
  "cutoff": 0,
  "items": [
    {
      "id": 0,
      "name": "string",
      "quality": {
        "id": 0,
        "name": "string"
      },
      "items": [
        {}
      ],
      "allowed": true
    }
  ],
  "minFormatScore": 0,
  "cutoffFormatScore": 0,
  "formatItems": [
    {
      "id": 0,
      "format": 0,
      "name": "string",
      "score": 0
    }
  ]
}
```

<h3 id="getapiv1qualityprofileschema-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[QualityProfileResource](#schemaqualityprofileresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="lidarr-queue">Queue</h1>

## delete/api/v1/queue/{id}

> Code samples

```bash
curl http://localhost:8686/api/v1/queue/0 \
  -X DELETE \
  -H "X-Api-Key: ${API_KEY}"
```

`DELETE /api/v1/queue/{id}`

<h3 id="deleteapiv1queueid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|
|removeFromClient|query|boolean|false|none|
|blocklist|query|boolean|false|none|
|skipRedownload|query|boolean|false|none|
|changeCategory|query|boolean|false|none|

<h3 id="deleteapiv1queueid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## delete/api/v1/queue/bulk

> Code samples

```bash
curl http://localhost:8686/api/v1/queue/bulk \
  -X DELETE \
  -H 'Content-Type: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "ids": [
      0
    ]
  }'
```

`DELETE /api/v1/queue/bulk`

> Body parameter

```json
{
  "ids": [
    0
  ]
}
```

<h3 id="deleteapiv1queuebulk-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|removeFromClient|query|boolean|false|none|
|blocklist|query|boolean|false|none|
|skipRedownload|query|boolean|false|none|
|changeCategory|query|boolean|false|none|
|body|body|[QueueBulkResource](#schemaqueuebulkresource)|false|none|
|» ids|body|[integer(int32)]|false|none|

<h3 id="deleteapiv1queuebulk-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v1/queue

> Code samples

```bash
curl http://localhost:8686/api/v1/queue \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/queue`

<h3 id="getapiv1queue-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer(int32)|false|none|
|pageSize|query|integer(int32)|false|none|
|sortKey|query|string|false|none|
|sortDirection|query|[SortDirection](#schemasortdirection)|false|none|
|includeUnknownArtistItems|query|boolean|false|none|
|includeArtist|query|boolean|false|none|
|includeAlbum|query|boolean|false|none|
|artistIds|query|[integer(int32)]|false|none|
|protocol|query|[DownloadProtocol](#schemadownloadprotocol)|false|none|
|quality|query|[integer(int32)]|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sortDirection|default|
|sortDirection|ascending|
|sortDirection|descending|
|protocol|unknown|
|protocol|usenet|
|protocol|torrent|

> Example responses

> 200 Response

```json
{
  "page": 0,
  "pageSize": 0,
  "sortKey": "string",
  "sortDirection": "default",
  "totalRecords": 0,
  "records": [
    {
      "id": 0,
      "artistId": 0,
      "albumId": 0,
      "artist": {
        "id": 0,
        "status": "continuing",
        "ended": true,
        "artistName": "string",
        "foreignArtistId": "string",
        "mbId": "string",
        "tadbId": 0,
        "discogsId": 0,
        "allMusicId": "string",
        "overview": "string",
        "artistType": "string",
        "disambiguation": "string",
        "links": [
          {
            "url": "string",
            "name": "string"
          }
        ],
        "nextAlbum": {},
        "lastAlbum": {},
        "images": [
          {
            "url": "string",
            "coverType": "unknown",
            "extension": "string",
            "remoteUrl": "string"
          }
        ],
        "members": [
          {
            "name": "string",
            "instrument": "string",
            "images": [
              {
                "url": "string",
                "coverType": "unknown",
                "extension": "string",
                "remoteUrl": "string"
              }
            ]
          }
        ],
        "remotePoster": "string",
        "path": "string",
        "qualityProfileId": 0,
        "metadataProfileId": 0,
        "monitored": true,
        "monitorNewItems": "all",
        "rootFolderPath": "string",
        "folder": "string",
        "genres": [
          "string"
        ],
        "cleanName": "string",
        "sortName": "string",
        "tags": [
          0
        ],
        "added": "1970-01-01T00:00:00Z",
        "addOptions": {
          "monitor": "all",
          "albumsToMonitor": [
            "string"
          ],
          "monitored": true,
          "searchForMissingAlbums": true
        },
        "ratings": {
          "votes": 0,
          "value": 0
        },
        "statistics": {
          "albumCount": 0,
          "trackFileCount": 0,
          "trackCount": 0,
          "totalTrackCount": 0,
          "sizeOnDisk": 0,
          "percentOfTracks": 0
        }
      },
      "album": {
        "id": 0,
        "title": "string",
        "disambiguation": "string",
        "overview": "string",
        "artistId": 0,
        "foreignAlbumId": "string",
        "monitored": true,
        "anyReleaseOk": true,
        "profileId": 0,
        "duration": 0,
        "albumType": "string",
        "secondaryTypes": [
          "string"
        ],
        "mediumCount": 0,
        "ratings": {
          "votes": 0,
          "value": 0
        },
        "releaseDate": "1970-01-01T00:00:00Z",
        "releases": [
          {
            "id": 0,
            "albumId": 0,
            "foreignReleaseId": "string",
            "title": "string",
            "status": "string",
            "duration": 0,
            "trackCount": 0,
            "media": [
              {
                "mediumNumber": 0,
                "mediumName": "string",
                "mediumFormat": "string"
              }
            ],
            "mediumCount": 0,
            "disambiguation": "string",
            "country": [
              "string"
            ],
            "label": [
              "string"
            ],
            "format": "string",
            "monitored": true
          }
        ],
        "genres": [
          "string"
        ],
        "media": [
          {
            "mediumNumber": 0,
            "mediumName": "string",
            "mediumFormat": "string"
          }
        ],
        "artist": {},
        "images": [
          {
            "url": "string",
            "coverType": "unknown",
            "extension": "string",
            "remoteUrl": "string"
          }
        ],
        "links": [
          {
            "url": "string",
            "name": "string"
          }
        ],
        "lastSearchTime": "1970-01-01T00:00:00Z",
        "statistics": {
          "trackFileCount": 0,
          "trackCount": 0,
          "totalTrackCount": 0,
          "sizeOnDisk": 0,
          "percentOfTracks": 0
        },
        "addOptions": {
          "addType": "automatic",
          "searchForNewAlbum": true
        },
        "remoteCover": "string"
      },
      "quality": {
        "quality": {
          "id": 0,
          "name": "string"
        },
        "revision": {
          "version": 0,
          "real": 0,
          "isRepack": true
        }
      },
      "customFormats": [
        {
          "id": 0,
          "name": "string",
          "includeCustomFormatWhenRenaming": true,
          "specifications": [
            {
              "id": 0,
              "name": "string",
              "implementation": "string",
              "implementationName": "string",
              "infoLink": "string",
              "negate": true,
              "required": true,
              "fields": [
                {
                  "order": 0,
                  "name": "string",
                  "label": "string",
                  "unit": "string",
                  "helpText": "string",
                  "helpTextWarning": "string",
                  "helpLink": "string",
                  "value": null,
                  "type": "string",
                  "advanced": true,
                  "selectOptions": [
                    {
                      "value": 0,
                      "name": "string",
                      "order": 0,
                      "hint": "string"
                    }
                  ],
                  "selectOptionsProviderAction": "string",
                  "section": "string",
                  "hidden": "string",
                  "privacy": "normal",
                  "placeholder": "string",
                  "isFloat": true
                }
              ],
              "presets": [
                {}
              ]
            }
          ]
        }
      ],
      "customFormatScore": 0,
      "size": 0,
      "title": "string",
      "sizeleft": 0,
      "timeleft": "string",
      "estimatedCompletionTime": "1970-01-01T00:00:00Z",
      "added": "1970-01-01T00:00:00Z",
      "status": "string",
      "trackedDownloadStatus": "ok",
      "trackedDownloadState": "downloading",
      "statusMessages": [
        {
          "title": "string",
          "messages": [
            "string"
          ]
        }
      ],
      "errorMessage": "string",
      "downloadId": "string",
      "protocol": "unknown",
      "downloadClient": "string",
      "downloadClientHasPostImportCategory": true,
      "indexer": "string",
      "outputPath": "string",
      "trackFileCount": 0,
      "trackHasFileCount": 0,
      "downloadForced": true
    }
  ]
}
```

<h3 id="getapiv1queue-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[QueueResourcePagingResource](#schemaqueueresourcepagingresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="lidarr-queueaction">QueueAction</h1>

## post/api/v1/queue/grab/{id}

> Code samples

```bash
curl http://localhost:8686/api/v1/queue/grab/0 \
  -X POST \
  -H "X-Api-Key: ${API_KEY}"
```

`POST /api/v1/queue/grab/{id}`

<h3 id="postapiv1queuegrabid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

<h3 id="postapiv1queuegrabid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## post/api/v1/queue/grab/bulk

> Code samples

```bash
curl http://localhost:8686/api/v1/queue/grab/bulk \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "ids": [
      0
    ]
  }'
```

`POST /api/v1/queue/grab/bulk`

> Body parameter

```json
{
  "ids": [
    0
  ]
}
```

<h3 id="postapiv1queuegrabbulk-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[QueueBulkResource](#schemaqueuebulkresource)|false|none|
|» ids|body|[integer(int32)]|false|none|

<h3 id="postapiv1queuegrabbulk-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="lidarr-queuedetails">QueueDetails</h1>

## get/api/v1/queue/details

> Code samples

```bash
curl http://localhost:8686/api/v1/queue/details \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/queue/details`

<h3 id="getapiv1queuedetails-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|artistId|query|integer(int32)|false|none|
|albumIds|query|[integer(int32)]|false|none|
|includeArtist|query|boolean|false|none|
|includeAlbum|query|boolean|false|none|

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "artistId": 0,
    "albumId": 0,
    "artist": {
      "id": 0,
      "status": "continuing",
      "ended": true,
      "artistName": "string",
      "foreignArtistId": "string",
      "mbId": "string",
      "tadbId": 0,
      "discogsId": 0,
      "allMusicId": "string",
      "overview": "string",
      "artistType": "string",
      "disambiguation": "string",
      "links": [
        {
          "url": "string",
          "name": "string"
        }
      ],
      "nextAlbum": {},
      "lastAlbum": {},
      "images": [
        {
          "url": "string",
          "coverType": "unknown",
          "extension": "string",
          "remoteUrl": "string"
        }
      ],
      "members": [
        {
          "name": "string",
          "instrument": "string",
          "images": [
            {
              "url": "string",
              "coverType": "unknown",
              "extension": "string",
              "remoteUrl": "string"
            }
          ]
        }
      ],
      "remotePoster": "string",
      "path": "string",
      "qualityProfileId": 0,
      "metadataProfileId": 0,
      "monitored": true,
      "monitorNewItems": "all",
      "rootFolderPath": "string",
      "folder": "string",
      "genres": [
        "string"
      ],
      "cleanName": "string",
      "sortName": "string",
      "tags": [
        0
      ],
      "added": "1970-01-01T00:00:00Z",
      "addOptions": {
        "monitor": "all",
        "albumsToMonitor": [
          "string"
        ],
        "monitored": true,
        "searchForMissingAlbums": true
      },
      "ratings": {
        "votes": 0,
        "value": 0
      },
      "statistics": {
        "albumCount": 0,
        "trackFileCount": 0,
        "trackCount": 0,
        "totalTrackCount": 0,
        "sizeOnDisk": 0,
        "percentOfTracks": 0
      }
    },
    "album": {
      "id": 0,
      "title": "string",
      "disambiguation": "string",
      "overview": "string",
      "artistId": 0,
      "foreignAlbumId": "string",
      "monitored": true,
      "anyReleaseOk": true,
      "profileId": 0,
      "duration": 0,
      "albumType": "string",
      "secondaryTypes": [
        "string"
      ],
      "mediumCount": 0,
      "ratings": {
        "votes": 0,
        "value": 0
      },
      "releaseDate": "1970-01-01T00:00:00Z",
      "releases": [
        {
          "id": 0,
          "albumId": 0,
          "foreignReleaseId": "string",
          "title": "string",
          "status": "string",
          "duration": 0,
          "trackCount": 0,
          "media": [
            {
              "mediumNumber": 0,
              "mediumName": "string",
              "mediumFormat": "string"
            }
          ],
          "mediumCount": 0,
          "disambiguation": "string",
          "country": [
            "string"
          ],
          "label": [
            "string"
          ],
          "format": "string",
          "monitored": true
        }
      ],
      "genres": [
        "string"
      ],
      "media": [
        {
          "mediumNumber": 0,
          "mediumName": "string",
          "mediumFormat": "string"
        }
      ],
      "artist": {},
      "images": [
        {
          "url": "string",
          "coverType": "unknown",
          "extension": "string",
          "remoteUrl": "string"
        }
      ],
      "links": [
        {
          "url": "string",
          "name": "string"
        }
      ],
      "lastSearchTime": "1970-01-01T00:00:00Z",
      "statistics": {
        "trackFileCount": 0,
        "trackCount": 0,
        "totalTrackCount": 0,
        "sizeOnDisk": 0,
        "percentOfTracks": 0
      },
      "addOptions": {
        "addType": "automatic",
        "searchForNewAlbum": true
      },
      "remoteCover": "string"
    },
    "quality": {
      "quality": {
        "id": 0,
        "name": "string"
      },
      "revision": {
        "version": 0,
        "real": 0,
        "isRepack": true
      }
    },
    "customFormats": [
      {
        "id": 0,
        "name": "string",
        "includeCustomFormatWhenRenaming": true,
        "specifications": [
          {
            "id": 0,
            "name": "string",
            "implementation": "string",
            "implementationName": "string",
            "infoLink": "string",
            "negate": true,
            "required": true,
            "fields": [
              {
                "order": 0,
                "name": "string",
                "label": "string",
                "unit": "string",
                "helpText": "string",
                "helpTextWarning": "string",
                "helpLink": "string",
                "value": null,
                "type": "string",
                "advanced": true,
                "selectOptions": [
                  {
                    "value": 0,
                    "name": "string",
                    "order": 0,
                    "hint": "string"
                  }
                ],
                "selectOptionsProviderAction": "string",
                "section": "string",
                "hidden": "string",
                "privacy": "normal",
                "placeholder": "string",
                "isFloat": true
              }
            ],
            "presets": [
              {}
            ]
          }
        ]
      }
    ],
    "customFormatScore": 0,
    "size": 0,
    "title": "string",
    "sizeleft": 0,
    "timeleft": "string",
    "estimatedCompletionTime": "1970-01-01T00:00:00Z",
    "added": "1970-01-01T00:00:00Z",
    "status": "string",
    "trackedDownloadStatus": "ok",
    "trackedDownloadState": "downloading",
    "statusMessages": [
      {
        "title": "string",
        "messages": [
          "string"
        ]
      }
    ],
    "errorMessage": "string",
    "downloadId": "string",
    "protocol": "unknown",
    "downloadClient": "string",
    "downloadClientHasPostImportCategory": true,
    "indexer": "string",
    "outputPath": "string",
    "trackFileCount": 0,
    "trackHasFileCount": 0,
    "downloadForced": true
  }
]
```

<h3 id="getapiv1queuedetails-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getapiv1queuedetails-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[QueueResource](#schemaqueueresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="lidarr-queuestatus">QueueStatus</h1>

## get/api/v1/queue/status

> Code samples

```bash
curl http://localhost:8686/api/v1/queue/status \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/queue/status`

> Example responses

> 200 Response

```json
{
  "id": 0,
  "totalCount": 0,
  "count": 0,
  "unknownCount": 0,
  "errors": true,
  "warnings": true,
  "unknownErrors": true,
  "unknownWarnings": true
}
```

<h3 id="getapiv1queuestatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[QueueStatusResource](#schemaqueuestatusresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="lidarr-release">Release</h1>

## get/api/v1/release

> Code samples

```bash
curl http://localhost:8686/api/v1/release \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/release`

<h3 id="getapiv1release-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|albumId|query|integer(int32)|false|none|
|artistId|query|integer(int32)|false|none|

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "guid": "string",
    "quality": {
      "quality": {
        "id": 0,
        "name": "string"
      },
      "revision": {
        "version": 0,
        "real": 0,
        "isRepack": true
      }
    },
    "qualityWeight": 0,
    "age": 0,
    "ageHours": 0,
    "ageMinutes": 0,
    "size": 0,
    "indexerId": 0,
    "indexer": "string",
    "releaseGroup": "string",
    "subGroup": "string",
    "releaseHash": "string",
    "title": "string",
    "discography": true,
    "sceneSource": true,
    "airDate": "string",
    "artistName": "string",
    "albumTitle": "string",
    "approved": true,
    "temporarilyRejected": true,
    "rejected": true,
    "rejections": [
      "string"
    ],
    "publishDate": "1970-01-01T00:00:00Z",
    "commentUrl": "string",
    "downloadUrl": "string",
    "infoUrl": "string",
    "downloadAllowed": true,
    "releaseWeight": 0,
    "customFormats": [
      {
        "id": 0,
        "name": "string",
        "includeCustomFormatWhenRenaming": true,
        "specifications": [
          {
            "id": 0,
            "name": "string",
            "implementation": "string",
            "implementationName": "string",
            "infoLink": "string",
            "negate": true,
            "required": true,
            "fields": [
              {
                "order": 0,
                "name": "string",
                "label": "string",
                "unit": "string",
                "helpText": "string",
                "helpTextWarning": "string",
                "helpLink": "string",
                "value": null,
                "type": "string",
                "advanced": true,
                "selectOptions": [
                  {
                    "value": 0,
                    "name": "string",
                    "order": 0,
                    "hint": "string"
                  }
                ],
                "selectOptionsProviderAction": "string",
                "section": "string",
                "hidden": "string",
                "privacy": "normal",
                "placeholder": "string",
                "isFloat": true
              }
            ],
            "presets": [
              {}
            ]
          }
        ]
      }
    ],
    "customFormatScore": 0,
    "magnetUrl": "string",
    "infoHash": "string",
    "seeders": 0,
    "leechers": 0,
    "protocol": "unknown",
    "indexerFlags": 0,
    "artistId": 0,
    "albumId": 0,
    "downloadClientId": 0,
    "downloadClient": "string"
  }
]
```

<h3 id="getapiv1release-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getapiv1release-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ReleaseResource](#schemareleaseresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## post/api/v1/release

> Code samples

```bash
curl http://localhost:8686/api/v1/release \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "id": 0,
    "guid": "string",
    "quality": {
      "quality": {
        "id": 0,
        "name": "string"
      },
      "revision": {
        "version": 0,
        "real": 0,
        "isRepack": true
      }
    },
    "qualityWeight": 0,
    "age": 0,
    "ageHours": 0,
    "ageMinutes": 0,
    "size": 0,
    "indexerId": 0,
    "indexer": "string",
    "releaseGroup": "string",
    "subGroup": "string",
    "releaseHash": "string",
    "title": "string",
    "discography": true,
    "sceneSource": true,
    "airDate": "string",
    "artistName": "string",
    "albumTitle": "string",
    "approved": true,
    "temporarilyRejected": true,
    "rejected": true,
    "rejections": [
      "string"
    ],
    "publishDate": "1970-01-01T00:00:00Z",
    "commentUrl": "string",
    "downloadUrl": "string",
    "infoUrl": "string",
    "downloadAllowed": true,
    "releaseWeight": 0,
    "customFormats": [
      {
        "id": 0,
        "name": "string",
        "includeCustomFormatWhenRenaming": true,
        "specifications": [
          {
            "id": 0,
            "name": "string",
            "implementation": "string",
            "implementationName": "string",
            "infoLink": "string",
            "negate": true,
            "required": true,
            "fields": [
              {
                "order": 0,
                "name": "string",
                "label": "string",
                "unit": "string",
                "helpText": "string",
                "helpTextWarning": "string",
                "helpLink": "string",
                "value": null,
                "type": "string",
                "advanced": true,
                "selectOptions": [
                  {
                    "value": 0,
                    "name": "string",
                    "order": 0,
                    "hint": "string"
                  }
                ],
                "selectOptionsProviderAction": "string",
                "section": "string",
                "hidden": "string",
                "privacy": "normal",
                "placeholder": "string",
                "isFloat": true
              }
            ],
            "presets": [
              {}
            ]
          }
        ]
      }
    ],
    "customFormatScore": 0,
    "magnetUrl": "string",
    "infoHash": "string",
    "seeders": 0,
    "leechers": 0,
    "protocol": "unknown",
    "indexerFlags": 0,
    "artistId": 0,
    "albumId": 0,
    "downloadClientId": 0,
    "downloadClient": "string"
  }'
```

`POST /api/v1/release`

> Body parameter

```json
{
  "id": 0,
  "guid": "string",
  "quality": {
    "quality": {
      "id": 0,
      "name": "string"
    },
    "revision": {
      "version": 0,
      "real": 0,
      "isRepack": true
    }
  },
  "qualityWeight": 0,
  "age": 0,
  "ageHours": 0,
  "ageMinutes": 0,
  "size": 0,
  "indexerId": 0,
  "indexer": "string",
  "releaseGroup": "string",
  "subGroup": "string",
  "releaseHash": "string",
  "title": "string",
  "discography": true,
  "sceneSource": true,
  "airDate": "string",
  "artistName": "string",
  "albumTitle": "string",
  "approved": true,
  "temporarilyRejected": true,
  "rejected": true,
  "rejections": [
    "string"
  ],
  "publishDate": "1970-01-01T00:00:00Z",
  "commentUrl": "string",
  "downloadUrl": "string",
  "infoUrl": "string",
  "downloadAllowed": true,
  "releaseWeight": 0,
  "customFormats": [
    {
      "id": 0,
      "name": "string",
      "includeCustomFormatWhenRenaming": true,
      "specifications": [
        {
          "id": 0,
          "name": "string",
          "implementation": "string",
          "implementationName": "string",
          "infoLink": "string",
          "negate": true,
          "required": true,
          "fields": [
            {
              "order": 0,
              "name": "string",
              "label": "string",
              "unit": "string",
              "helpText": "string",
              "helpTextWarning": "string",
              "helpLink": "string",
              "value": null,
              "type": "string",
              "advanced": true,
              "selectOptions": [
                {
                  "value": 0,
                  "name": "string",
                  "order": 0,
                  "hint": "string"
                }
              ],
              "selectOptionsProviderAction": "string",
              "section": "string",
              "hidden": "string",
              "privacy": "normal",
              "placeholder": "string",
              "isFloat": true
            }
          ],
          "presets": [
            {}
          ]
        }
      ]
    }
  ],
  "customFormatScore": 0,
  "magnetUrl": "string",
  "infoHash": "string",
  "seeders": 0,
  "leechers": 0,
  "protocol": "unknown",
  "indexerFlags": 0,
  "artistId": 0,
  "albumId": 0,
  "downloadClientId": 0,
  "downloadClient": "string"
}
```

<h3 id="postapiv1release-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ReleaseResource](#schemareleaseresource)|false|none|
|» id|body|integer(int32)|false|none|
|» guid|body|string \| null|false|none|
|» quality|body|[QualityModel](#schemaqualitymodel)|false|none|
|» qualityWeight|body|integer(int32)|false|none|
|» age|body|integer(int32)|false|none|
|» ageHours|body|number(double)|false|none|
|» ageMinutes|body|number(double)|false|none|
|» size|body|integer(int64)|false|none|
|» indexerId|body|integer(int32)|false|none|
|» indexer|body|string \| null|false|none|
|» releaseGroup|body|string \| null|false|none|
|» subGroup|body|string \| null|false|none|
|» releaseHash|body|string \| null|false|none|
|» title|body|string \| null|false|none|
|» discography|body|boolean|false|none|
|» sceneSource|body|boolean|false|none|
|» airDate|body|string \| null|false|none|
|» artistName|body|string \| null|false|none|
|» albumTitle|body|string \| null|false|none|
|» approved|body|boolean|false|none|
|» temporarilyRejected|body|boolean|false|none|
|» rejected|body|boolean|false|none|
|» rejections|body|[string]|false|none|
|» publishDate|body|string(date-time)|false|none|
|» commentUrl|body|string \| null|false|none|
|» downloadUrl|body|string \| null|false|none|
|» infoUrl|body|string \| null|false|none|
|» downloadAllowed|body|boolean|false|none|
|» releaseWeight|body|integer(int32)|false|none|
|» customFormats|body|[[CustomFormatResource](#schemacustomformatresource)]|false|none|
|» customFormatScore|body|integer(int32)|false|none|
|» magnetUrl|body|string \| null|false|none|
|» infoHash|body|string \| null|false|none|
|» seeders|body|integer(int32) \| null|false|none|
|» leechers|body|integer(int32) \| null|false|none|
|» protocol|body|[DownloadProtocol](#schemadownloadprotocol)|false|none|
|» indexerFlags|body|integer(int32)|false|none|
|» artistId|body|integer(int32) \| null|false|none|
|» albumId|body|integer(int32) \| null|false|none|
|» downloadClientId|body|integer(int32) \| null|false|none|
|» downloadClient|body|string \| null|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» protocol|unknown|
|» protocol|usenet|
|» protocol|torrent|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "guid": "string",
  "quality": {
    "quality": {
      "id": 0,
      "name": "string"
    },
    "revision": {
      "version": 0,
      "real": 0,
      "isRepack": true
    }
  },
  "qualityWeight": 0,
  "age": 0,
  "ageHours": 0,
  "ageMinutes": 0,
  "size": 0,
  "indexerId": 0,
  "indexer": "string",
  "releaseGroup": "string",
  "subGroup": "string",
  "releaseHash": "string",
  "title": "string",
  "discography": true,
  "sceneSource": true,
  "airDate": "string",
  "artistName": "string",
  "albumTitle": "string",
  "approved": true,
  "temporarilyRejected": true,
  "rejected": true,
  "rejections": [
    "string"
  ],
  "publishDate": "1970-01-01T00:00:00Z",
  "commentUrl": "string",
  "downloadUrl": "string",
  "infoUrl": "string",
  "downloadAllowed": true,
  "releaseWeight": 0,
  "customFormats": [
    {
      "id": 0,
      "name": "string",
      "includeCustomFormatWhenRenaming": true,
      "specifications": [
        {
          "id": 0,
          "name": "string",
          "implementation": "string",
          "implementationName": "string",
          "infoLink": "string",
          "negate": true,
          "required": true,
          "fields": [
            {
              "order": 0,
              "name": "string",
              "label": "string",
              "unit": "string",
              "helpText": "string",
              "helpTextWarning": "string",
              "helpLink": "string",
              "value": null,
              "type": "string",
              "advanced": true,
              "selectOptions": [
                {
                  "value": 0,
                  "name": "string",
                  "order": 0,
                  "hint": "string"
                }
              ],
              "selectOptionsProviderAction": "string",
              "section": "string",
              "hidden": "string",
              "privacy": "normal",
              "placeholder": "string",
              "isFloat": true
            }
          ],
          "presets": [
            {}
          ]
        }
      ]
    }
  ],
  "customFormatScore": 0,
  "magnetUrl": "string",
  "infoHash": "string",
  "seeders": 0,
  "leechers": 0,
  "protocol": "unknown",
  "indexerFlags": 0,
  "artistId": 0,
  "albumId": 0,
  "downloadClientId": 0,
  "downloadClient": "string"
}
```

<h3 id="postapiv1release-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ReleaseResource](#schemareleaseresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="lidarr-releaseprofile">ReleaseProfile</h1>

## get/api/v1/releaseprofile/{id}

> Code samples

```bash
curl http://localhost:8686/api/v1/releaseprofile/0 \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/releaseprofile/{id}`

<h3 id="getapiv1releaseprofileid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "enabled": true,
  "required": [
    "string"
  ],
  "ignored": [
    "string"
  ],
  "indexerId": 0,
  "tags": [
    0
  ]
}
```

<h3 id="getapiv1releaseprofileid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ReleaseProfileResource](#schemareleaseprofileresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## put/api/v1/releaseprofile/{id}

> Code samples

```bash
curl http://localhost:8686/api/v1/releaseprofile/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "id": 0,
    "enabled": true,
    "required": [
      "string"
    ],
    "ignored": [
      "string"
    ],
    "indexerId": 0,
    "tags": [
      0
    ]
  }'
```

`PUT /api/v1/releaseprofile/{id}`

> Body parameter

```json
{
  "id": 0,
  "enabled": true,
  "required": [
    "string"
  ],
  "ignored": [
    "string"
  ],
  "indexerId": 0,
  "tags": [
    0
  ]
}
```

<h3 id="putapiv1releaseprofileid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|[ReleaseProfileResource](#schemareleaseprofileresource)|false|none|
|» id|body|integer(int32)|false|none|
|» enabled|body|boolean|false|none|
|» required|body|[string]|false|none|
|» ignored|body|[string]|false|none|
|» indexerId|body|integer(int32)|false|none|
|» tags|body|[integer(int32)]|false|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "enabled": true,
  "required": [
    "string"
  ],
  "ignored": [
    "string"
  ],
  "indexerId": 0,
  "tags": [
    0
  ]
}
```

<h3 id="putapiv1releaseprofileid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ReleaseProfileResource](#schemareleaseprofileresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## delete/api/v1/releaseprofile/{id}

> Code samples

```bash
curl http://localhost:8686/api/v1/releaseprofile/0 \
  -X DELETE \
  -H "X-Api-Key: ${API_KEY}"
```

`DELETE /api/v1/releaseprofile/{id}`

<h3 id="deleteapiv1releaseprofileid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

<h3 id="deleteapiv1releaseprofileid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v1/releaseprofile

> Code samples

```bash
curl http://localhost:8686/api/v1/releaseprofile \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/releaseprofile`

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "enabled": true,
    "required": [
      "string"
    ],
    "ignored": [
      "string"
    ],
    "indexerId": 0,
    "tags": [
      0
    ]
  }
]
```

<h3 id="getapiv1releaseprofile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getapiv1releaseprofile-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ReleaseProfileResource](#schemareleaseprofileresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## post/api/v1/releaseprofile

> Code samples

```bash
curl http://localhost:8686/api/v1/releaseprofile \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "id": 0,
    "enabled": true,
    "required": [
      "string"
    ],
    "ignored": [
      "string"
    ],
    "indexerId": 0,
    "tags": [
      0
    ]
  }'
```

`POST /api/v1/releaseprofile`

> Body parameter

```json
{
  "id": 0,
  "enabled": true,
  "required": [
    "string"
  ],
  "ignored": [
    "string"
  ],
  "indexerId": 0,
  "tags": [
    0
  ]
}
```

<h3 id="postapiv1releaseprofile-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ReleaseProfileResource](#schemareleaseprofileresource)|false|none|
|» id|body|integer(int32)|false|none|
|» enabled|body|boolean|false|none|
|» required|body|[string]|false|none|
|» ignored|body|[string]|false|none|
|» indexerId|body|integer(int32)|false|none|
|» tags|body|[integer(int32)]|false|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "enabled": true,
  "required": [
    "string"
  ],
  "ignored": [
    "string"
  ],
  "indexerId": 0,
  "tags": [
    0
  ]
}
```

<h3 id="postapiv1releaseprofile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ReleaseProfileResource](#schemareleaseprofileresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="lidarr-releasepush">ReleasePush</h1>

## post/api/v1/release/push

> Code samples

```bash
curl http://localhost:8686/api/v1/release/push \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "id": 0,
    "guid": "string",
    "quality": {
      "quality": {
        "id": 0,
        "name": "string"
      },
      "revision": {
        "version": 0,
        "real": 0,
        "isRepack": true
      }
    },
    "qualityWeight": 0,
    "age": 0,
    "ageHours": 0,
    "ageMinutes": 0,
    "size": 0,
    "indexerId": 0,
    "indexer": "string",
    "releaseGroup": "string",
    "subGroup": "string",
    "releaseHash": "string",
    "title": "string",
    "discography": true,
    "sceneSource": true,
    "airDate": "string",
    "artistName": "string",
    "albumTitle": "string",
    "approved": true,
    "temporarilyRejected": true,
    "rejected": true,
    "rejections": [
      "string"
    ],
    "publishDate": "1970-01-01T00:00:00Z",
    "commentUrl": "string",
    "downloadUrl": "string",
    "infoUrl": "string",
    "downloadAllowed": true,
    "releaseWeight": 0,
    "customFormats": [
      {
        "id": 0,
        "name": "string",
        "includeCustomFormatWhenRenaming": true,
        "specifications": [
          {
            "id": 0,
            "name": "string",
            "implementation": "string",
            "implementationName": "string",
            "infoLink": "string",
            "negate": true,
            "required": true,
            "fields": [
              {
                "order": 0,
                "name": "string",
                "label": "string",
                "unit": "string",
                "helpText": "string",
                "helpTextWarning": "string",
                "helpLink": "string",
                "value": null,
                "type": "string",
                "advanced": true,
                "selectOptions": [
                  {
                    "value": 0,
                    "name": "string",
                    "order": 0,
                    "hint": "string"
                  }
                ],
                "selectOptionsProviderAction": "string",
                "section": "string",
                "hidden": "string",
                "privacy": "normal",
                "placeholder": "string",
                "isFloat": true
              }
            ],
            "presets": [
              {}
            ]
          }
        ]
      }
    ],
    "customFormatScore": 0,
    "magnetUrl": "string",
    "infoHash": "string",
    "seeders": 0,
    "leechers": 0,
    "protocol": "unknown",
    "indexerFlags": 0,
    "artistId": 0,
    "albumId": 0,
    "downloadClientId": 0,
    "downloadClient": "string"
  }'
```

`POST /api/v1/release/push`

> Body parameter

```json
{
  "id": 0,
  "guid": "string",
  "quality": {
    "quality": {
      "id": 0,
      "name": "string"
    },
    "revision": {
      "version": 0,
      "real": 0,
      "isRepack": true
    }
  },
  "qualityWeight": 0,
  "age": 0,
  "ageHours": 0,
  "ageMinutes": 0,
  "size": 0,
  "indexerId": 0,
  "indexer": "string",
  "releaseGroup": "string",
  "subGroup": "string",
  "releaseHash": "string",
  "title": "string",
  "discography": true,
  "sceneSource": true,
  "airDate": "string",
  "artistName": "string",
  "albumTitle": "string",
  "approved": true,
  "temporarilyRejected": true,
  "rejected": true,
  "rejections": [
    "string"
  ],
  "publishDate": "1970-01-01T00:00:00Z",
  "commentUrl": "string",
  "downloadUrl": "string",
  "infoUrl": "string",
  "downloadAllowed": true,
  "releaseWeight": 0,
  "customFormats": [
    {
      "id": 0,
      "name": "string",
      "includeCustomFormatWhenRenaming": true,
      "specifications": [
        {
          "id": 0,
          "name": "string",
          "implementation": "string",
          "implementationName": "string",
          "infoLink": "string",
          "negate": true,
          "required": true,
          "fields": [
            {
              "order": 0,
              "name": "string",
              "label": "string",
              "unit": "string",
              "helpText": "string",
              "helpTextWarning": "string",
              "helpLink": "string",
              "value": null,
              "type": "string",
              "advanced": true,
              "selectOptions": [
                {
                  "value": 0,
                  "name": "string",
                  "order": 0,
                  "hint": "string"
                }
              ],
              "selectOptionsProviderAction": "string",
              "section": "string",
              "hidden": "string",
              "privacy": "normal",
              "placeholder": "string",
              "isFloat": true
            }
          ],
          "presets": [
            {}
          ]
        }
      ]
    }
  ],
  "customFormatScore": 0,
  "magnetUrl": "string",
  "infoHash": "string",
  "seeders": 0,
  "leechers": 0,
  "protocol": "unknown",
  "indexerFlags": 0,
  "artistId": 0,
  "albumId": 0,
  "downloadClientId": 0,
  "downloadClient": "string"
}
```

<h3 id="postapiv1releasepush-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ReleaseResource](#schemareleaseresource)|false|none|
|» id|body|integer(int32)|false|none|
|» guid|body|string \| null|false|none|
|» quality|body|[QualityModel](#schemaqualitymodel)|false|none|
|» qualityWeight|body|integer(int32)|false|none|
|» age|body|integer(int32)|false|none|
|» ageHours|body|number(double)|false|none|
|» ageMinutes|body|number(double)|false|none|
|» size|body|integer(int64)|false|none|
|» indexerId|body|integer(int32)|false|none|
|» indexer|body|string \| null|false|none|
|» releaseGroup|body|string \| null|false|none|
|» subGroup|body|string \| null|false|none|
|» releaseHash|body|string \| null|false|none|
|» title|body|string \| null|false|none|
|» discography|body|boolean|false|none|
|» sceneSource|body|boolean|false|none|
|» airDate|body|string \| null|false|none|
|» artistName|body|string \| null|false|none|
|» albumTitle|body|string \| null|false|none|
|» approved|body|boolean|false|none|
|» temporarilyRejected|body|boolean|false|none|
|» rejected|body|boolean|false|none|
|» rejections|body|[string]|false|none|
|» publishDate|body|string(date-time)|false|none|
|» commentUrl|body|string \| null|false|none|
|» downloadUrl|body|string \| null|false|none|
|» infoUrl|body|string \| null|false|none|
|» downloadAllowed|body|boolean|false|none|
|» releaseWeight|body|integer(int32)|false|none|
|» customFormats|body|[[CustomFormatResource](#schemacustomformatresource)]|false|none|
|» customFormatScore|body|integer(int32)|false|none|
|» magnetUrl|body|string \| null|false|none|
|» infoHash|body|string \| null|false|none|
|» seeders|body|integer(int32) \| null|false|none|
|» leechers|body|integer(int32) \| null|false|none|
|» protocol|body|[DownloadProtocol](#schemadownloadprotocol)|false|none|
|» indexerFlags|body|integer(int32)|false|none|
|» artistId|body|integer(int32) \| null|false|none|
|» albumId|body|integer(int32) \| null|false|none|
|» downloadClientId|body|integer(int32) \| null|false|none|
|» downloadClient|body|string \| null|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» protocol|unknown|
|» protocol|usenet|
|» protocol|torrent|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "guid": "string",
  "quality": {
    "quality": {
      "id": 0,
      "name": "string"
    },
    "revision": {
      "version": 0,
      "real": 0,
      "isRepack": true
    }
  },
  "qualityWeight": 0,
  "age": 0,
  "ageHours": 0,
  "ageMinutes": 0,
  "size": 0,
  "indexerId": 0,
  "indexer": "string",
  "releaseGroup": "string",
  "subGroup": "string",
  "releaseHash": "string",
  "title": "string",
  "discography": true,
  "sceneSource": true,
  "airDate": "string",
  "artistName": "string",
  "albumTitle": "string",
  "approved": true,
  "temporarilyRejected": true,
  "rejected": true,
  "rejections": [
    "string"
  ],
  "publishDate": "1970-01-01T00:00:00Z",
  "commentUrl": "string",
  "downloadUrl": "string",
  "infoUrl": "string",
  "downloadAllowed": true,
  "releaseWeight": 0,
  "customFormats": [
    {
      "id": 0,
      "name": "string",
      "includeCustomFormatWhenRenaming": true,
      "specifications": [
        {
          "id": 0,
          "name": "string",
          "implementation": "string",
          "implementationName": "string",
          "infoLink": "string",
          "negate": true,
          "required": true,
          "fields": [
            {
              "order": 0,
              "name": "string",
              "label": "string",
              "unit": "string",
              "helpText": "string",
              "helpTextWarning": "string",
              "helpLink": "string",
              "value": null,
              "type": "string",
              "advanced": true,
              "selectOptions": [
                {
                  "value": 0,
                  "name": "string",
                  "order": 0,
                  "hint": "string"
                }
              ],
              "selectOptionsProviderAction": "string",
              "section": "string",
              "hidden": "string",
              "privacy": "normal",
              "placeholder": "string",
              "isFloat": true
            }
          ],
          "presets": [
            {}
          ]
        }
      ]
    }
  ],
  "customFormatScore": 0,
  "magnetUrl": "string",
  "infoHash": "string",
  "seeders": 0,
  "leechers": 0,
  "protocol": "unknown",
  "indexerFlags": 0,
  "artistId": 0,
  "albumId": 0,
  "downloadClientId": 0,
  "downloadClient": "string"
}
```

<h3 id="postapiv1releasepush-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ReleaseResource](#schemareleaseresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="lidarr-remotepathmapping">RemotePathMapping</h1>

## get/api/v1/remotepathmapping/{id}

> Code samples

```bash
curl http://localhost:8686/api/v1/remotepathmapping/0 \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/remotepathmapping/{id}`

<h3 id="getapiv1remotepathmappingid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "host": "string",
  "remotePath": "string",
  "localPath": "string"
}
```

<h3 id="getapiv1remotepathmappingid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[RemotePathMappingResource](#schemaremotepathmappingresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## put/api/v1/remotepathmapping/{id}

> Code samples

```bash
curl http://localhost:8686/api/v1/remotepathmapping/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "id": 0,
    "host": "string",
    "remotePath": "string",
    "localPath": "string"
  }'
```

`PUT /api/v1/remotepathmapping/{id}`

> Body parameter

```json
{
  "id": 0,
  "host": "string",
  "remotePath": "string",
  "localPath": "string"
}
```

<h3 id="putapiv1remotepathmappingid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|[RemotePathMappingResource](#schemaremotepathmappingresource)|false|none|
|» id|body|integer(int32)|false|none|
|» host|body|string \| null|false|none|
|» remotePath|body|string \| null|false|none|
|» localPath|body|string \| null|false|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "host": "string",
  "remotePath": "string",
  "localPath": "string"
}
```

<h3 id="putapiv1remotepathmappingid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[RemotePathMappingResource](#schemaremotepathmappingresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## delete/api/v1/remotepathmapping/{id}

> Code samples

```bash
curl http://localhost:8686/api/v1/remotepathmapping/0 \
  -X DELETE \
  -H "X-Api-Key: ${API_KEY}"
```

`DELETE /api/v1/remotepathmapping/{id}`

<h3 id="deleteapiv1remotepathmappingid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

<h3 id="deleteapiv1remotepathmappingid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v1/remotepathmapping

> Code samples

```bash
curl http://localhost:8686/api/v1/remotepathmapping \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/remotepathmapping`

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "host": "string",
    "remotePath": "string",
    "localPath": "string"
  }
]
```

<h3 id="getapiv1remotepathmapping-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getapiv1remotepathmapping-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[RemotePathMappingResource](#schemaremotepathmappingresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## post/api/v1/remotepathmapping

> Code samples

```bash
curl http://localhost:8686/api/v1/remotepathmapping \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "id": 0,
    "host": "string",
    "remotePath": "string",
    "localPath": "string"
  }'
```

`POST /api/v1/remotepathmapping`

> Body parameter

```json
{
  "id": 0,
  "host": "string",
  "remotePath": "string",
  "localPath": "string"
}
```

<h3 id="postapiv1remotepathmapping-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[RemotePathMappingResource](#schemaremotepathmappingresource)|false|none|
|» id|body|integer(int32)|false|none|
|» host|body|string \| null|false|none|
|» remotePath|body|string \| null|false|none|
|» localPath|body|string \| null|false|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "host": "string",
  "remotePath": "string",
  "localPath": "string"
}
```

<h3 id="postapiv1remotepathmapping-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[RemotePathMappingResource](#schemaremotepathmappingresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="lidarr-renametrack">RenameTrack</h1>

## get/api/v1/rename

> Code samples

```bash
curl http://localhost:8686/api/v1/rename \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/rename`

<h3 id="getapiv1rename-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|artistId|query|integer(int32)|false|none|
|albumId|query|integer(int32)|false|none|

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "artistId": 0,
    "albumId": 0,
    "trackNumbers": [
      0
    ],
    "trackFileId": 0,
    "existingPath": "string",
    "newPath": "string"
  }
]
```

<h3 id="getapiv1rename-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getapiv1rename-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[RenameTrackResource](#schemarenametrackresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="lidarr-retagtrack">RetagTrack</h1>

## get/api/v1/retag

> Code samples

```bash
curl http://localhost:8686/api/v1/retag \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/retag`

<h3 id="getapiv1retag-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|artistId|query|integer(int32)|false|none|
|albumId|query|integer(int32)|false|none|

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "artistId": 0,
    "albumId": 0,
    "trackNumbers": [
      0
    ],
    "trackFileId": 0,
    "path": "string",
    "changes": [
      {
        "field": "string",
        "oldValue": "string",
        "newValue": "string"
      }
    ]
  }
]
```

<h3 id="getapiv1retag-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getapiv1retag-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[RetagTrackResource](#schemaretagtrackresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="lidarr-rootfolder">RootFolder</h1>

## get/api/v1/rootfolder/{id}

> Code samples

```bash
curl http://localhost:8686/api/v1/rootfolder/0 \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/rootfolder/{id}`

<h3 id="getapiv1rootfolderid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "path": "string",
  "defaultMetadataProfileId": 0,
  "defaultQualityProfileId": 0,
  "defaultMonitorOption": "all",
  "defaultNewItemMonitorOption": "all",
  "defaultTags": [
    0
  ],
  "accessible": true,
  "freeSpace": 0,
  "totalSpace": 0
}
```

<h3 id="getapiv1rootfolderid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[RootFolderResource](#schemarootfolderresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## put/api/v1/rootfolder/{id}

> Code samples

```bash
curl http://localhost:8686/api/v1/rootfolder/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "id": 0,
    "name": "string",
    "path": "string",
    "defaultMetadataProfileId": 0,
    "defaultQualityProfileId": 0,
    "defaultMonitorOption": "all",
    "defaultNewItemMonitorOption": "all",
    "defaultTags": [
      0
    ],
    "accessible": true,
    "freeSpace": 0,
    "totalSpace": 0
  }'
```

`PUT /api/v1/rootfolder/{id}`

> Body parameter

```json
{
  "id": 0,
  "name": "string",
  "path": "string",
  "defaultMetadataProfileId": 0,
  "defaultQualityProfileId": 0,
  "defaultMonitorOption": "all",
  "defaultNewItemMonitorOption": "all",
  "defaultTags": [
    0
  ],
  "accessible": true,
  "freeSpace": 0,
  "totalSpace": 0
}
```

<h3 id="putapiv1rootfolderid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|[RootFolderResource](#schemarootfolderresource)|false|none|
|» id|body|integer(int32)|false|none|
|» name|body|string \| null|false|none|
|» path|body|string \| null|false|none|
|» defaultMetadataProfileId|body|integer(int32)|false|none|
|» defaultQualityProfileId|body|integer(int32)|false|none|
|» defaultMonitorOption|body|[MonitorTypes](#schemamonitortypes)|false|none|
|» defaultNewItemMonitorOption|body|[NewItemMonitorTypes](#schemanewitemmonitortypes)|false|none|
|» defaultTags|body|[integer(int32)]|false|none|
|» accessible|body|boolean|false|none|
|» freeSpace|body|integer(int64) \| null|false|none|
|» totalSpace|body|integer(int64) \| null|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» defaultMonitorOption|all|
|» defaultMonitorOption|future|
|» defaultMonitorOption|missing|
|» defaultMonitorOption|existing|
|» defaultMonitorOption|latest|
|» defaultMonitorOption|first|
|» defaultMonitorOption|none|
|» defaultMonitorOption|unknown|
|» defaultNewItemMonitorOption|all|
|» defaultNewItemMonitorOption|none|
|» defaultNewItemMonitorOption|new|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "path": "string",
  "defaultMetadataProfileId": 0,
  "defaultQualityProfileId": 0,
  "defaultMonitorOption": "all",
  "defaultNewItemMonitorOption": "all",
  "defaultTags": [
    0
  ],
  "accessible": true,
  "freeSpace": 0,
  "totalSpace": 0
}
```

<h3 id="putapiv1rootfolderid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[RootFolderResource](#schemarootfolderresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## delete/api/v1/rootfolder/{id}

> Code samples

```bash
curl http://localhost:8686/api/v1/rootfolder/0 \
  -X DELETE \
  -H "X-Api-Key: ${API_KEY}"
```

`DELETE /api/v1/rootfolder/{id}`

<h3 id="deleteapiv1rootfolderid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

<h3 id="deleteapiv1rootfolderid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v1/rootfolder

> Code samples

```bash
curl http://localhost:8686/api/v1/rootfolder \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/rootfolder`

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "name": "string",
    "path": "string",
    "defaultMetadataProfileId": 0,
    "defaultQualityProfileId": 0,
    "defaultMonitorOption": "all",
    "defaultNewItemMonitorOption": "all",
    "defaultTags": [
      0
    ],
    "accessible": true,
    "freeSpace": 0,
    "totalSpace": 0
  }
]
```

<h3 id="getapiv1rootfolder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getapiv1rootfolder-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[RootFolderResource](#schemarootfolderresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## post/api/v1/rootfolder

> Code samples

```bash
curl http://localhost:8686/api/v1/rootfolder \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "id": 0,
    "name": "string",
    "path": "string",
    "defaultMetadataProfileId": 0,
    "defaultQualityProfileId": 0,
    "defaultMonitorOption": "all",
    "defaultNewItemMonitorOption": "all",
    "defaultTags": [
      0
    ],
    "accessible": true,
    "freeSpace": 0,
    "totalSpace": 0
  }'
```

`POST /api/v1/rootfolder`

> Body parameter

```json
{
  "id": 0,
  "name": "string",
  "path": "string",
  "defaultMetadataProfileId": 0,
  "defaultQualityProfileId": 0,
  "defaultMonitorOption": "all",
  "defaultNewItemMonitorOption": "all",
  "defaultTags": [
    0
  ],
  "accessible": true,
  "freeSpace": 0,
  "totalSpace": 0
}
```

<h3 id="postapiv1rootfolder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[RootFolderResource](#schemarootfolderresource)|false|none|
|» id|body|integer(int32)|false|none|
|» name|body|string \| null|false|none|
|» path|body|string \| null|false|none|
|» defaultMetadataProfileId|body|integer(int32)|false|none|
|» defaultQualityProfileId|body|integer(int32)|false|none|
|» defaultMonitorOption|body|[MonitorTypes](#schemamonitortypes)|false|none|
|» defaultNewItemMonitorOption|body|[NewItemMonitorTypes](#schemanewitemmonitortypes)|false|none|
|» defaultTags|body|[integer(int32)]|false|none|
|» accessible|body|boolean|false|none|
|» freeSpace|body|integer(int64) \| null|false|none|
|» totalSpace|body|integer(int64) \| null|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» defaultMonitorOption|all|
|» defaultMonitorOption|future|
|» defaultMonitorOption|missing|
|» defaultMonitorOption|existing|
|» defaultMonitorOption|latest|
|» defaultMonitorOption|first|
|» defaultMonitorOption|none|
|» defaultMonitorOption|unknown|
|» defaultNewItemMonitorOption|all|
|» defaultNewItemMonitorOption|none|
|» defaultNewItemMonitorOption|new|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "path": "string",
  "defaultMetadataProfileId": 0,
  "defaultQualityProfileId": 0,
  "defaultMonitorOption": "all",
  "defaultNewItemMonitorOption": "all",
  "defaultTags": [
    0
  ],
  "accessible": true,
  "freeSpace": 0,
  "totalSpace": 0
}
```

<h3 id="postapiv1rootfolder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[RootFolderResource](#schemarootfolderresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="lidarr-search">Search</h1>

## get/api/v1/search

> Code samples

```bash
curl http://localhost:8686/api/v1/search \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/search`

<h3 id="getapiv1search-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|term|query|string|false|none|

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "foreignId": "string",
    "artist": {
      "id": 0,
      "status": "continuing",
      "ended": true,
      "artistName": "string",
      "foreignArtistId": "string",
      "mbId": "string",
      "tadbId": 0,
      "discogsId": 0,
      "allMusicId": "string",
      "overview": "string",
      "artistType": "string",
      "disambiguation": "string",
      "links": [
        {
          "url": "string",
          "name": "string"
        }
      ],
      "nextAlbum": {},
      "lastAlbum": {},
      "images": [
        {
          "url": "string",
          "coverType": "unknown",
          "extension": "string",
          "remoteUrl": "string"
        }
      ],
      "members": [
        {
          "name": "string",
          "instrument": "string",
          "images": [
            {
              "url": "string",
              "coverType": "unknown",
              "extension": "string",
              "remoteUrl": "string"
            }
          ]
        }
      ],
      "remotePoster": "string",
      "path": "string",
      "qualityProfileId": 0,
      "metadataProfileId": 0,
      "monitored": true,
      "monitorNewItems": "all",
      "rootFolderPath": "string",
      "folder": "string",
      "genres": [
        "string"
      ],
      "cleanName": "string",
      "sortName": "string",
      "tags": [
        0
      ],
      "added": "1970-01-01T00:00:00Z",
      "addOptions": {
        "monitor": "all",
        "albumsToMonitor": [
          "string"
        ],
        "monitored": true,
        "searchForMissingAlbums": true
      },
      "ratings": {
        "votes": 0,
        "value": 0
      },
      "statistics": {
        "albumCount": 0,
        "trackFileCount": 0,
        "trackCount": 0,
        "totalTrackCount": 0,
        "sizeOnDisk": 0,
        "percentOfTracks": 0
      }
    },
    "album": {
      "id": 0,
      "title": "string",
      "disambiguation": "string",
      "overview": "string",
      "artistId": 0,
      "foreignAlbumId": "string",
      "monitored": true,
      "anyReleaseOk": true,
      "profileId": 0,
      "duration": 0,
      "albumType": "string",
      "secondaryTypes": [
        "string"
      ],
      "mediumCount": 0,
      "ratings": {
        "votes": 0,
        "value": 0
      },
      "releaseDate": "1970-01-01T00:00:00Z",
      "releases": [
        {
          "id": 0,
          "albumId": 0,
          "foreignReleaseId": "string",
          "title": "string",
          "status": "string",
          "duration": 0,
          "trackCount": 0,
          "media": [
            {
              "mediumNumber": 0,
              "mediumName": "string",
              "mediumFormat": "string"
            }
          ],
          "mediumCount": 0,
          "disambiguation": "string",
          "country": [
            "string"
          ],
          "label": [
            "string"
          ],
          "format": "string",
          "monitored": true
        }
      ],
      "genres": [
        "string"
      ],
      "media": [
        {
          "mediumNumber": 0,
          "mediumName": "string",
          "mediumFormat": "string"
        }
      ],
      "artist": {},
      "images": [
        {
          "url": "string",
          "coverType": "unknown",
          "extension": "string",
          "remoteUrl": "string"
        }
      ],
      "links": [
        {
          "url": "string",
          "name": "string"
        }
      ],
      "lastSearchTime": "1970-01-01T00:00:00Z",
      "statistics": {
        "trackFileCount": 0,
        "trackCount": 0,
        "totalTrackCount": 0,
        "sizeOnDisk": 0,
        "percentOfTracks": 0
      },
      "addOptions": {
        "addType": "automatic",
        "searchForNewAlbum": true
      },
      "remoteCover": "string"
    }
  }
]
```

<h3 id="getapiv1search-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getapiv1search-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[SearchResource](#schemasearchresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="lidarr-system">System</h1>

## get/api/v1/system/status

> Code samples

```bash
curl http://localhost:8686/api/v1/system/status \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/system/status`

> Example responses

> 200 Response

```json
{
  "appName": "string",
  "instanceName": "string",
  "version": "string",
  "buildTime": "1970-01-01T00:00:00Z",
  "isDebug": true,
  "isProduction": true,
  "isAdmin": true,
  "isUserInteractive": true,
  "startupPath": "string",
  "appData": "string",
  "osName": "string",
  "osVersion": "string",
  "isNetCore": true,
  "isLinux": true,
  "isOsx": true,
  "isWindows": true,
  "isDocker": true,
  "mode": "console",
  "branch": "string",
  "databaseType": "sqLite",
  "databaseVersion": "string",
  "authentication": "none",
  "migrationVersion": 0,
  "urlBase": "string",
  "runtimeVersion": "string",
  "runtimeName": "string",
  "startTime": "1970-01-01T00:00:00Z",
  "packageVersion": "string",
  "packageAuthor": "string",
  "packageUpdateMechanism": "builtIn",
  "packageUpdateMechanismMessage": "string"
}
```

<h3 id="getapiv1systemstatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[SystemResource](#schemasystemresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v1/system/routes

> Code samples

```bash
curl http://localhost:8686/api/v1/system/routes \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/system/routes`

<h3 id="getapiv1systemroutes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v1/system/routes/duplicate

> Code samples

```bash
curl http://localhost:8686/api/v1/system/routes/duplicate \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/system/routes/duplicate`

<h3 id="getapiv1systemroutesduplicate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## post/api/v1/system/shutdown

> Code samples

```bash
curl http://localhost:8686/api/v1/system/shutdown \
  -X POST \
  -H "X-Api-Key: ${API_KEY}"
```

`POST /api/v1/system/shutdown`

<h3 id="postapiv1systemshutdown-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## post/api/v1/system/restart

> Code samples

```bash
curl http://localhost:8686/api/v1/system/restart \
  -X POST \
  -H "X-Api-Key: ${API_KEY}"
```

`POST /api/v1/system/restart`

<h3 id="postapiv1systemrestart-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="lidarr-tag">Tag</h1>

## get/api/v1/tag/{id}

> Code samples

```bash
curl http://localhost:8686/api/v1/tag/0 \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/tag/{id}`

<h3 id="getapiv1tagid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "label": "string"
}
```

<h3 id="getapiv1tagid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[TagResource](#schematagresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## put/api/v1/tag/{id}

> Code samples

```bash
curl http://localhost:8686/api/v1/tag/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "id": 0,
    "label": "string"
  }'
```

`PUT /api/v1/tag/{id}`

> Body parameter

```json
{
  "id": 0,
  "label": "string"
}
```

<h3 id="putapiv1tagid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|[TagResource](#schematagresource)|false|none|
|» id|body|integer(int32)|false|none|
|» label|body|string \| null|false|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "label": "string"
}
```

<h3 id="putapiv1tagid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[TagResource](#schematagresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## delete/api/v1/tag/{id}

> Code samples

```bash
curl http://localhost:8686/api/v1/tag/0 \
  -X DELETE \
  -H "X-Api-Key: ${API_KEY}"
```

`DELETE /api/v1/tag/{id}`

<h3 id="deleteapiv1tagid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

<h3 id="deleteapiv1tagid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v1/tag

> Code samples

```bash
curl http://localhost:8686/api/v1/tag \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/tag`

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "label": "string"
  }
]
```

<h3 id="getapiv1tag-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getapiv1tag-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[TagResource](#schematagresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## post/api/v1/tag

> Code samples

```bash
curl http://localhost:8686/api/v1/tag \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "id": 0,
    "label": "string"
  }'
```

`POST /api/v1/tag`

> Body parameter

```json
{
  "id": 0,
  "label": "string"
}
```

<h3 id="postapiv1tag-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[TagResource](#schematagresource)|false|none|
|» id|body|integer(int32)|false|none|
|» label|body|string \| null|false|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "label": "string"
}
```

<h3 id="postapiv1tag-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[TagResource](#schematagresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="lidarr-tagdetails">TagDetails</h1>

## get/api/v1/tag/detail/{id}

> Code samples

```bash
curl http://localhost:8686/api/v1/tag/detail/0 \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/tag/detail/{id}`

<h3 id="getapiv1tagdetailid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "label": "string",
  "delayProfileIds": [
    0
  ],
  "importListIds": [
    0
  ],
  "notificationIds": [
    0
  ],
  "restrictionIds": [
    0
  ],
  "indexerIds": [
    0
  ],
  "downloadClientIds": [
    0
  ],
  "autoTagIds": [
    0
  ],
  "artistIds": [
    0
  ]
}
```

<h3 id="getapiv1tagdetailid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[TagDetailsResource](#schematagdetailsresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v1/tag/detail

> Code samples

```bash
curl http://localhost:8686/api/v1/tag/detail \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/tag/detail`

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "label": "string",
    "delayProfileIds": [
      0
    ],
    "importListIds": [
      0
    ],
    "notificationIds": [
      0
    ],
    "restrictionIds": [
      0
    ],
    "indexerIds": [
      0
    ],
    "downloadClientIds": [
      0
    ],
    "autoTagIds": [
      0
    ],
    "artistIds": [
      0
    ]
  }
]
```

<h3 id="getapiv1tagdetail-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getapiv1tagdetail-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[TagDetailsResource](#schematagdetailsresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="lidarr-task">Task</h1>

## get/api/v1/system/task

> Code samples

```bash
curl http://localhost:8686/api/v1/system/task \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/system/task`

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "name": "string",
    "taskName": "string",
    "interval": 0,
    "lastExecution": "1970-01-01T00:00:00Z",
    "lastStartTime": "1970-01-01T00:00:00Z",
    "nextExecution": "1970-01-01T00:00:00Z",
    "lastDuration": "string"
  }
]
```

<h3 id="getapiv1systemtask-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getapiv1systemtask-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[TaskResource](#schemataskresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v1/system/task/{id}

> Code samples

```bash
curl http://localhost:8686/api/v1/system/task/0 \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/system/task/{id}`

<h3 id="getapiv1systemtaskid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "taskName": "string",
  "interval": 0,
  "lastExecution": "1970-01-01T00:00:00Z",
  "lastStartTime": "1970-01-01T00:00:00Z",
  "nextExecution": "1970-01-01T00:00:00Z",
  "lastDuration": "string"
}
```

<h3 id="getapiv1systemtaskid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[TaskResource](#schemataskresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="lidarr-track">Track</h1>

## get/api/v1/track

> Code samples

```bash
curl http://localhost:8686/api/v1/track \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/track`

<h3 id="getapiv1track-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|artistId|query|integer(int32)|false|none|
|albumId|query|integer(int32)|false|none|
|albumReleaseId|query|integer(int32)|false|none|
|trackIds|query|[integer(int32)]|false|none|

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "artistId": 0,
    "foreignTrackId": "string",
    "foreignRecordingId": "string",
    "trackFileId": 0,
    "albumId": 0,
    "explicit": true,
    "absoluteTrackNumber": 0,
    "trackNumber": "string",
    "title": "string",
    "duration": 0,
    "trackFile": {
      "id": 0,
      "artistId": 0,
      "albumId": 0,
      "path": "string",
      "size": 0,
      "dateAdded": "1970-01-01T00:00:00Z",
      "sceneName": "string",
      "releaseGroup": "string",
      "quality": {
        "quality": {
          "id": 0,
          "name": "string"
        },
        "revision": {
          "version": 0,
          "real": 0,
          "isRepack": true
        }
      },
      "qualityWeight": 0,
      "customFormats": [
        {
          "id": 0,
          "name": "string",
          "includeCustomFormatWhenRenaming": true,
          "specifications": [
            {
              "id": 0,
              "name": "string",
              "implementation": "string",
              "implementationName": "string",
              "infoLink": "string",
              "negate": true,
              "required": true,
              "fields": [
                {
                  "order": 0,
                  "name": "string",
                  "label": "string",
                  "unit": "string",
                  "helpText": "string",
                  "helpTextWarning": "string",
                  "helpLink": "string",
                  "value": null,
                  "type": "string",
                  "advanced": true,
                  "selectOptions": [
                    {
                      "value": 0,
                      "name": "string",
                      "order": 0,
                      "hint": "string"
                    }
                  ],
                  "selectOptionsProviderAction": "string",
                  "section": "string",
                  "hidden": "string",
                  "privacy": "normal",
                  "placeholder": "string",
                  "isFloat": true
                }
              ],
              "presets": [
                {}
              ]
            }
          ]
        }
      ],
      "customFormatScore": 0,
      "indexerFlags": 0,
      "mediaInfo": {
        "id": 0,
        "audioChannels": 0,
        "audioBitRate": "string",
        "audioCodec": "string",
        "audioBits": "string",
        "audioSampleRate": "string"
      },
      "qualityCutoffNotMet": true,
      "audioTags": {
        "title": "string",
        "cleanTitle": "string",
        "artistTitle": "string",
        "albumTitle": "string",
        "artistTitleInfo": {
          "title": "string",
          "titleWithoutYear": "string",
          "year": 0
        },
        "artistMBId": "string",
        "albumMBId": "string",
        "releaseMBId": "string",
        "recordingMBId": "string",
        "trackMBId": "string",
        "discNumber": 0,
        "discCount": 0,
        "country": {
          "twoLetterCode": "string",
          "name": "string"
        },
        "year": 0,
        "label": "string",
        "catalogNumber": "string",
        "disambiguation": "string",
        "duration": "string",
        "quality": {
          "quality": {
            "id": 0,
            "name": "string"
          },
          "revision": {
            "version": 0,
            "real": 0,
            "isRepack": true
          }
        },
        "mediaInfo": {
          "audioFormat": "string",
          "audioBitrate": 0,
          "audioChannels": 0,
          "audioBits": 0,
          "audioSampleRate": 0
        },
        "trackNumbers": [
          0
        ],
        "releaseGroup": "string",
        "releaseHash": "string"
      }
    },
    "mediumNumber": 0,
    "hasFile": true,
    "artist": {
      "id": 0,
      "status": "continuing",
      "ended": true,
      "artistName": "string",
      "foreignArtistId": "string",
      "mbId": "string",
      "tadbId": 0,
      "discogsId": 0,
      "allMusicId": "string",
      "overview": "string",
      "artistType": "string",
      "disambiguation": "string",
      "links": [
        {
          "url": "string",
          "name": "string"
        }
      ],
      "nextAlbum": {},
      "lastAlbum": {},
      "images": [
        {
          "url": "string",
          "coverType": "unknown",
          "extension": "string",
          "remoteUrl": "string"
        }
      ],
      "members": [
        {
          "name": "string",
          "instrument": "string",
          "images": [
            {
              "url": "string",
              "coverType": "unknown",
              "extension": "string",
              "remoteUrl": "string"
            }
          ]
        }
      ],
      "remotePoster": "string",
      "path": "string",
      "qualityProfileId": 0,
      "metadataProfileId": 0,
      "monitored": true,
      "monitorNewItems": "all",
      "rootFolderPath": "string",
      "folder": "string",
      "genres": [
        "string"
      ],
      "cleanName": "string",
      "sortName": "string",
      "tags": [
        0
      ],
      "added": "1970-01-01T00:00:00Z",
      "addOptions": {
        "monitor": "all",
        "albumsToMonitor": [
          "string"
        ],
        "monitored": true,
        "searchForMissingAlbums": true
      },
      "ratings": {
        "votes": 0,
        "value": 0
      },
      "statistics": {
        "albumCount": 0,
        "trackFileCount": 0,
        "trackCount": 0,
        "totalTrackCount": 0,
        "sizeOnDisk": 0,
        "percentOfTracks": 0
      }
    },
    "ratings": {
      "votes": 0,
      "value": 0
    }
  }
]
```

<h3 id="getapiv1track-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getapiv1track-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[TrackResource](#schematrackresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v1/track/{id}

> Code samples

```bash
curl http://localhost:8686/api/v1/track/0 \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/track/{id}`

<h3 id="getapiv1trackid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "artistId": 0,
  "foreignTrackId": "string",
  "foreignRecordingId": "string",
  "trackFileId": 0,
  "albumId": 0,
  "explicit": true,
  "absoluteTrackNumber": 0,
  "trackNumber": "string",
  "title": "string",
  "duration": 0,
  "trackFile": {
    "id": 0,
    "artistId": 0,
    "albumId": 0,
    "path": "string",
    "size": 0,
    "dateAdded": "1970-01-01T00:00:00Z",
    "sceneName": "string",
    "releaseGroup": "string",
    "quality": {
      "quality": {
        "id": 0,
        "name": "string"
      },
      "revision": {
        "version": 0,
        "real": 0,
        "isRepack": true
      }
    },
    "qualityWeight": 0,
    "customFormats": [
      {
        "id": 0,
        "name": "string",
        "includeCustomFormatWhenRenaming": true,
        "specifications": [
          {
            "id": 0,
            "name": "string",
            "implementation": "string",
            "implementationName": "string",
            "infoLink": "string",
            "negate": true,
            "required": true,
            "fields": [
              {
                "order": 0,
                "name": "string",
                "label": "string",
                "unit": "string",
                "helpText": "string",
                "helpTextWarning": "string",
                "helpLink": "string",
                "value": null,
                "type": "string",
                "advanced": true,
                "selectOptions": [
                  {
                    "value": 0,
                    "name": "string",
                    "order": 0,
                    "hint": "string"
                  }
                ],
                "selectOptionsProviderAction": "string",
                "section": "string",
                "hidden": "string",
                "privacy": "normal",
                "placeholder": "string",
                "isFloat": true
              }
            ],
            "presets": [
              {}
            ]
          }
        ]
      }
    ],
    "customFormatScore": 0,
    "indexerFlags": 0,
    "mediaInfo": {
      "id": 0,
      "audioChannels": 0,
      "audioBitRate": "string",
      "audioCodec": "string",
      "audioBits": "string",
      "audioSampleRate": "string"
    },
    "qualityCutoffNotMet": true,
    "audioTags": {
      "title": "string",
      "cleanTitle": "string",
      "artistTitle": "string",
      "albumTitle": "string",
      "artistTitleInfo": {
        "title": "string",
        "titleWithoutYear": "string",
        "year": 0
      },
      "artistMBId": "string",
      "albumMBId": "string",
      "releaseMBId": "string",
      "recordingMBId": "string",
      "trackMBId": "string",
      "discNumber": 0,
      "discCount": 0,
      "country": {
        "twoLetterCode": "string",
        "name": "string"
      },
      "year": 0,
      "label": "string",
      "catalogNumber": "string",
      "disambiguation": "string",
      "duration": "string",
      "quality": {
        "quality": {
          "id": 0,
          "name": "string"
        },
        "revision": {
          "version": 0,
          "real": 0,
          "isRepack": true
        }
      },
      "mediaInfo": {
        "audioFormat": "string",
        "audioBitrate": 0,
        "audioChannels": 0,
        "audioBits": 0,
        "audioSampleRate": 0
      },
      "trackNumbers": [
        0
      ],
      "releaseGroup": "string",
      "releaseHash": "string"
    }
  },
  "mediumNumber": 0,
  "hasFile": true,
  "artist": {
    "id": 0,
    "status": "continuing",
    "ended": true,
    "artistName": "string",
    "foreignArtistId": "string",
    "mbId": "string",
    "tadbId": 0,
    "discogsId": 0,
    "allMusicId": "string",
    "overview": "string",
    "artistType": "string",
    "disambiguation": "string",
    "links": [
      {
        "url": "string",
        "name": "string"
      }
    ],
    "nextAlbum": {},
    "lastAlbum": {},
    "images": [
      {
        "url": "string",
        "coverType": "unknown",
        "extension": "string",
        "remoteUrl": "string"
      }
    ],
    "members": [
      {
        "name": "string",
        "instrument": "string",
        "images": [
          {
            "url": "string",
            "coverType": "unknown",
            "extension": "string",
            "remoteUrl": "string"
          }
        ]
      }
    ],
    "remotePoster": "string",
    "path": "string",
    "qualityProfileId": 0,
    "metadataProfileId": 0,
    "monitored": true,
    "monitorNewItems": "all",
    "rootFolderPath": "string",
    "folder": "string",
    "genres": [
      "string"
    ],
    "cleanName": "string",
    "sortName": "string",
    "tags": [
      0
    ],
    "added": "1970-01-01T00:00:00Z",
    "addOptions": {
      "monitor": "all",
      "albumsToMonitor": [
        "string"
      ],
      "monitored": true,
      "searchForMissingAlbums": true
    },
    "ratings": {
      "votes": 0,
      "value": 0
    },
    "statistics": {
      "albumCount": 0,
      "trackFileCount": 0,
      "trackCount": 0,
      "totalTrackCount": 0,
      "sizeOnDisk": 0,
      "percentOfTracks": 0
    }
  },
  "ratings": {
    "votes": 0,
    "value": 0
  }
}
```

<h3 id="getapiv1trackid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[TrackResource](#schematrackresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="lidarr-trackfile">TrackFile</h1>

## get/api/v1/trackfile/{id}

> Code samples

```bash
curl http://localhost:8686/api/v1/trackfile/0 \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/trackfile/{id}`

<h3 id="getapiv1trackfileid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "artistId": 0,
  "albumId": 0,
  "path": "string",
  "size": 0,
  "dateAdded": "1970-01-01T00:00:00Z",
  "sceneName": "string",
  "releaseGroup": "string",
  "quality": {
    "quality": {
      "id": 0,
      "name": "string"
    },
    "revision": {
      "version": 0,
      "real": 0,
      "isRepack": true
    }
  },
  "qualityWeight": 0,
  "customFormats": [
    {
      "id": 0,
      "name": "string",
      "includeCustomFormatWhenRenaming": true,
      "specifications": [
        {
          "id": 0,
          "name": "string",
          "implementation": "string",
          "implementationName": "string",
          "infoLink": "string",
          "negate": true,
          "required": true,
          "fields": [
            {
              "order": 0,
              "name": "string",
              "label": "string",
              "unit": "string",
              "helpText": "string",
              "helpTextWarning": "string",
              "helpLink": "string",
              "value": null,
              "type": "string",
              "advanced": true,
              "selectOptions": [
                {
                  "value": 0,
                  "name": "string",
                  "order": 0,
                  "hint": "string"
                }
              ],
              "selectOptionsProviderAction": "string",
              "section": "string",
              "hidden": "string",
              "privacy": "normal",
              "placeholder": "string",
              "isFloat": true
            }
          ],
          "presets": [
            {}
          ]
        }
      ]
    }
  ],
  "customFormatScore": 0,
  "indexerFlags": 0,
  "mediaInfo": {
    "id": 0,
    "audioChannels": 0,
    "audioBitRate": "string",
    "audioCodec": "string",
    "audioBits": "string",
    "audioSampleRate": "string"
  },
  "qualityCutoffNotMet": true,
  "audioTags": {
    "title": "string",
    "cleanTitle": "string",
    "artistTitle": "string",
    "albumTitle": "string",
    "artistTitleInfo": {
      "title": "string",
      "titleWithoutYear": "string",
      "year": 0
    },
    "artistMBId": "string",
    "albumMBId": "string",
    "releaseMBId": "string",
    "recordingMBId": "string",
    "trackMBId": "string",
    "discNumber": 0,
    "discCount": 0,
    "country": {
      "twoLetterCode": "string",
      "name": "string"
    },
    "year": 0,
    "label": "string",
    "catalogNumber": "string",
    "disambiguation": "string",
    "duration": "string",
    "quality": {
      "quality": {
        "id": 0,
        "name": "string"
      },
      "revision": {
        "version": 0,
        "real": 0,
        "isRepack": true
      }
    },
    "mediaInfo": {
      "audioFormat": "string",
      "audioBitrate": 0,
      "audioChannels": 0,
      "audioBits": 0,
      "audioSampleRate": 0
    },
    "trackNumbers": [
      0
    ],
    "releaseGroup": "string",
    "releaseHash": "string"
  }
}
```

<h3 id="getapiv1trackfileid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[TrackFileResource](#schematrackfileresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## put/api/v1/trackfile/{id}

> Code samples

```bash
curl http://localhost:8686/api/v1/trackfile/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "id": 0,
    "artistId": 0,
    "albumId": 0,
    "path": "string",
    "size": 0,
    "dateAdded": "1970-01-01T00:00:00Z",
    "sceneName": "string",
    "releaseGroup": "string",
    "quality": {
      "quality": {
        "id": 0,
        "name": "string"
      },
      "revision": {
        "version": 0,
        "real": 0,
        "isRepack": true
      }
    },
    "qualityWeight": 0,
    "customFormats": [
      {
        "id": 0,
        "name": "string",
        "includeCustomFormatWhenRenaming": true,
        "specifications": [
          {
            "id": 0,
            "name": "string",
            "implementation": "string",
            "implementationName": "string",
            "infoLink": "string",
            "negate": true,
            "required": true,
            "fields": [
              {
                "order": 0,
                "name": "string",
                "label": "string",
                "unit": "string",
                "helpText": "string",
                "helpTextWarning": "string",
                "helpLink": "string",
                "value": null,
                "type": "string",
                "advanced": true,
                "selectOptions": [
                  {
                    "value": 0,
                    "name": "string",
                    "order": 0,
                    "hint": "string"
                  }
                ],
                "selectOptionsProviderAction": "string",
                "section": "string",
                "hidden": "string",
                "privacy": "normal",
                "placeholder": "string",
                "isFloat": true
              }
            ],
            "presets": [
              {}
            ]
          }
        ]
      }
    ],
    "customFormatScore": 0,
    "indexerFlags": 0,
    "mediaInfo": {
      "id": 0,
      "audioChannels": 0,
      "audioBitRate": "string",
      "audioCodec": "string",
      "audioBits": "string",
      "audioSampleRate": "string"
    },
    "qualityCutoffNotMet": true,
    "audioTags": {
      "title": "string",
      "cleanTitle": "string",
      "artistTitle": "string",
      "albumTitle": "string",
      "artistTitleInfo": {
        "title": "string",
        "titleWithoutYear": "string",
        "year": 0
      },
      "artistMBId": "string",
      "albumMBId": "string",
      "releaseMBId": "string",
      "recordingMBId": "string",
      "trackMBId": "string",
      "discNumber": 0,
      "discCount": 0,
      "country": {
        "twoLetterCode": "string",
        "name": "string"
      },
      "year": 0,
      "label": "string",
      "catalogNumber": "string",
      "disambiguation": "string",
      "duration": "string",
      "quality": {
        "quality": {
          "id": 0,
          "name": "string"
        },
        "revision": {
          "version": 0,
          "real": 0,
          "isRepack": true
        }
      },
      "mediaInfo": {
        "audioFormat": "string",
        "audioBitrate": 0,
        "audioChannels": 0,
        "audioBits": 0,
        "audioSampleRate": 0
      },
      "trackNumbers": [
        0
      ],
      "releaseGroup": "string",
      "releaseHash": "string"
    }
  }'
```

`PUT /api/v1/trackfile/{id}`

> Body parameter

```json
{
  "id": 0,
  "artistId": 0,
  "albumId": 0,
  "path": "string",
  "size": 0,
  "dateAdded": "1970-01-01T00:00:00Z",
  "sceneName": "string",
  "releaseGroup": "string",
  "quality": {
    "quality": {
      "id": 0,
      "name": "string"
    },
    "revision": {
      "version": 0,
      "real": 0,
      "isRepack": true
    }
  },
  "qualityWeight": 0,
  "customFormats": [
    {
      "id": 0,
      "name": "string",
      "includeCustomFormatWhenRenaming": true,
      "specifications": [
        {
          "id": 0,
          "name": "string",
          "implementation": "string",
          "implementationName": "string",
          "infoLink": "string",
          "negate": true,
          "required": true,
          "fields": [
            {
              "order": 0,
              "name": "string",
              "label": "string",
              "unit": "string",
              "helpText": "string",
              "helpTextWarning": "string",
              "helpLink": "string",
              "value": null,
              "type": "string",
              "advanced": true,
              "selectOptions": [
                {
                  "value": 0,
                  "name": "string",
                  "order": 0,
                  "hint": "string"
                }
              ],
              "selectOptionsProviderAction": "string",
              "section": "string",
              "hidden": "string",
              "privacy": "normal",
              "placeholder": "string",
              "isFloat": true
            }
          ],
          "presets": [
            {}
          ]
        }
      ]
    }
  ],
  "customFormatScore": 0,
  "indexerFlags": 0,
  "mediaInfo": {
    "id": 0,
    "audioChannels": 0,
    "audioBitRate": "string",
    "audioCodec": "string",
    "audioBits": "string",
    "audioSampleRate": "string"
  },
  "qualityCutoffNotMet": true,
  "audioTags": {
    "title": "string",
    "cleanTitle": "string",
    "artistTitle": "string",
    "albumTitle": "string",
    "artistTitleInfo": {
      "title": "string",
      "titleWithoutYear": "string",
      "year": 0
    },
    "artistMBId": "string",
    "albumMBId": "string",
    "releaseMBId": "string",
    "recordingMBId": "string",
    "trackMBId": "string",
    "discNumber": 0,
    "discCount": 0,
    "country": {
      "twoLetterCode": "string",
      "name": "string"
    },
    "year": 0,
    "label": "string",
    "catalogNumber": "string",
    "disambiguation": "string",
    "duration": "string",
    "quality": {
      "quality": {
        "id": 0,
        "name": "string"
      },
      "revision": {
        "version": 0,
        "real": 0,
        "isRepack": true
      }
    },
    "mediaInfo": {
      "audioFormat": "string",
      "audioBitrate": 0,
      "audioChannels": 0,
      "audioBits": 0,
      "audioSampleRate": 0
    },
    "trackNumbers": [
      0
    ],
    "releaseGroup": "string",
    "releaseHash": "string"
  }
}
```

<h3 id="putapiv1trackfileid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|[TrackFileResource](#schematrackfileresource)|false|none|
|» id|body|integer(int32)|false|none|
|» artistId|body|integer(int32)|false|none|
|» albumId|body|integer(int32)|false|none|
|» path|body|string \| null|false|none|
|» size|body|integer(int64)|false|none|
|» dateAdded|body|string(date-time)|false|none|
|» sceneName|body|string \| null|false|none|
|» releaseGroup|body|string \| null|false|none|
|» quality|body|[QualityModel](#schemaqualitymodel)|false|none|
|» qualityWeight|body|integer(int32)|false|none|
|» customFormats|body|[[CustomFormatResource](#schemacustomformatresource)]|false|none|
|» customFormatScore|body|integer(int32)|false|none|
|» indexerFlags|body|integer(int32) \| null|false|none|
|» mediaInfo|body|[MediaInfoResource](#schemamediainforesource)|false|none|
|» qualityCutoffNotMet|body|boolean|false|none|
|» audioTags|body|[ParsedTrackInfo](#schemaparsedtrackinfo)|false|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "artistId": 0,
  "albumId": 0,
  "path": "string",
  "size": 0,
  "dateAdded": "1970-01-01T00:00:00Z",
  "sceneName": "string",
  "releaseGroup": "string",
  "quality": {
    "quality": {
      "id": 0,
      "name": "string"
    },
    "revision": {
      "version": 0,
      "real": 0,
      "isRepack": true
    }
  },
  "qualityWeight": 0,
  "customFormats": [
    {
      "id": 0,
      "name": "string",
      "includeCustomFormatWhenRenaming": true,
      "specifications": [
        {
          "id": 0,
          "name": "string",
          "implementation": "string",
          "implementationName": "string",
          "infoLink": "string",
          "negate": true,
          "required": true,
          "fields": [
            {
              "order": 0,
              "name": "string",
              "label": "string",
              "unit": "string",
              "helpText": "string",
              "helpTextWarning": "string",
              "helpLink": "string",
              "value": null,
              "type": "string",
              "advanced": true,
              "selectOptions": [
                {
                  "value": 0,
                  "name": "string",
                  "order": 0,
                  "hint": "string"
                }
              ],
              "selectOptionsProviderAction": "string",
              "section": "string",
              "hidden": "string",
              "privacy": "normal",
              "placeholder": "string",
              "isFloat": true
            }
          ],
          "presets": [
            {}
          ]
        }
      ]
    }
  ],
  "customFormatScore": 0,
  "indexerFlags": 0,
  "mediaInfo": {
    "id": 0,
    "audioChannels": 0,
    "audioBitRate": "string",
    "audioCodec": "string",
    "audioBits": "string",
    "audioSampleRate": "string"
  },
  "qualityCutoffNotMet": true,
  "audioTags": {
    "title": "string",
    "cleanTitle": "string",
    "artistTitle": "string",
    "albumTitle": "string",
    "artistTitleInfo": {
      "title": "string",
      "titleWithoutYear": "string",
      "year": 0
    },
    "artistMBId": "string",
    "albumMBId": "string",
    "releaseMBId": "string",
    "recordingMBId": "string",
    "trackMBId": "string",
    "discNumber": 0,
    "discCount": 0,
    "country": {
      "twoLetterCode": "string",
      "name": "string"
    },
    "year": 0,
    "label": "string",
    "catalogNumber": "string",
    "disambiguation": "string",
    "duration": "string",
    "quality": {
      "quality": {
        "id": 0,
        "name": "string"
      },
      "revision": {
        "version": 0,
        "real": 0,
        "isRepack": true
      }
    },
    "mediaInfo": {
      "audioFormat": "string",
      "audioBitrate": 0,
      "audioChannels": 0,
      "audioBits": 0,
      "audioSampleRate": 0
    },
    "trackNumbers": [
      0
    ],
    "releaseGroup": "string",
    "releaseHash": "string"
  }
}
```

<h3 id="putapiv1trackfileid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[TrackFileResource](#schematrackfileresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## delete/api/v1/trackfile/{id}

> Code samples

```bash
curl http://localhost:8686/api/v1/trackfile/0 \
  -X DELETE \
  -H "X-Api-Key: ${API_KEY}"
```

`DELETE /api/v1/trackfile/{id}`

<h3 id="deleteapiv1trackfileid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

<h3 id="deleteapiv1trackfileid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v1/trackfile

> Code samples

```bash
curl http://localhost:8686/api/v1/trackfile \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/trackfile`

<h3 id="getapiv1trackfile-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|artistId|query|integer(int32)|false|none|
|trackFileIds|query|[integer(int32)]|false|none|
|albumId|query|[integer(int32)]|false|none|
|unmapped|query|boolean|false|none|

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "artistId": 0,
    "albumId": 0,
    "path": "string",
    "size": 0,
    "dateAdded": "1970-01-01T00:00:00Z",
    "sceneName": "string",
    "releaseGroup": "string",
    "quality": {
      "quality": {
        "id": 0,
        "name": "string"
      },
      "revision": {
        "version": 0,
        "real": 0,
        "isRepack": true
      }
    },
    "qualityWeight": 0,
    "customFormats": [
      {
        "id": 0,
        "name": "string",
        "includeCustomFormatWhenRenaming": true,
        "specifications": [
          {
            "id": 0,
            "name": "string",
            "implementation": "string",
            "implementationName": "string",
            "infoLink": "string",
            "negate": true,
            "required": true,
            "fields": [
              {
                "order": 0,
                "name": "string",
                "label": "string",
                "unit": "string",
                "helpText": "string",
                "helpTextWarning": "string",
                "helpLink": "string",
                "value": null,
                "type": "string",
                "advanced": true,
                "selectOptions": [
                  {
                    "value": 0,
                    "name": "string",
                    "order": 0,
                    "hint": "string"
                  }
                ],
                "selectOptionsProviderAction": "string",
                "section": "string",
                "hidden": "string",
                "privacy": "normal",
                "placeholder": "string",
                "isFloat": true
              }
            ],
            "presets": [
              {}
            ]
          }
        ]
      }
    ],
    "customFormatScore": 0,
    "indexerFlags": 0,
    "mediaInfo": {
      "id": 0,
      "audioChannels": 0,
      "audioBitRate": "string",
      "audioCodec": "string",
      "audioBits": "string",
      "audioSampleRate": "string"
    },
    "qualityCutoffNotMet": true,
    "audioTags": {
      "title": "string",
      "cleanTitle": "string",
      "artistTitle": "string",
      "albumTitle": "string",
      "artistTitleInfo": {
        "title": "string",
        "titleWithoutYear": "string",
        "year": 0
      },
      "artistMBId": "string",
      "albumMBId": "string",
      "releaseMBId": "string",
      "recordingMBId": "string",
      "trackMBId": "string",
      "discNumber": 0,
      "discCount": 0,
      "country": {
        "twoLetterCode": "string",
        "name": "string"
      },
      "year": 0,
      "label": "string",
      "catalogNumber": "string",
      "disambiguation": "string",
      "duration": "string",
      "quality": {
        "quality": {
          "id": 0,
          "name": "string"
        },
        "revision": {
          "version": 0,
          "real": 0,
          "isRepack": true
        }
      },
      "mediaInfo": {
        "audioFormat": "string",
        "audioBitrate": 0,
        "audioChannels": 0,
        "audioBits": 0,
        "audioSampleRate": 0
      },
      "trackNumbers": [
        0
      ],
      "releaseGroup": "string",
      "releaseHash": "string"
    }
  }
]
```

<h3 id="getapiv1trackfile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getapiv1trackfile-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[TrackFileResource](#schematrackfileresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## put/api/v1/trackfile/editor

> Code samples

```bash
curl http://localhost:8686/api/v1/trackfile/editor \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "trackFileIds": [
      0
    ],
    "quality": {
      "quality": {
        "id": 0,
        "name": "string"
      },
      "revision": {
        "version": 0,
        "real": 0,
        "isRepack": true
      }
    },
    "sceneName": "string",
    "releaseGroup": "string"
  }'
```

`PUT /api/v1/trackfile/editor`

> Body parameter

```json
{
  "trackFileIds": [
    0
  ],
  "quality": {
    "quality": {
      "id": 0,
      "name": "string"
    },
    "revision": {
      "version": 0,
      "real": 0,
      "isRepack": true
    }
  },
  "sceneName": "string",
  "releaseGroup": "string"
}
```

<h3 id="putapiv1trackfileeditor-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[TrackFileListResource](#schematrackfilelistresource)|false|none|
|» trackFileIds|body|[integer(int32)]|false|none|
|» quality|body|[QualityModel](#schemaqualitymodel)|false|none|
|» sceneName|body|string \| null|false|none|
|» releaseGroup|body|string \| null|false|none|

<h3 id="putapiv1trackfileeditor-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## delete/api/v1/trackfile/bulk

> Code samples

```bash
curl http://localhost:8686/api/v1/trackfile/bulk \
  -X DELETE \
  -H 'Content-Type: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "trackFileIds": [
      0
    ],
    "quality": {
      "quality": {
        "id": 0,
        "name": "string"
      },
      "revision": {
        "version": 0,
        "real": 0,
        "isRepack": true
      }
    },
    "sceneName": "string",
    "releaseGroup": "string"
  }'
```

`DELETE /api/v1/trackfile/bulk`

> Body parameter

```json
{
  "trackFileIds": [
    0
  ],
  "quality": {
    "quality": {
      "id": 0,
      "name": "string"
    },
    "revision": {
      "version": 0,
      "real": 0,
      "isRepack": true
    }
  },
  "sceneName": "string",
  "releaseGroup": "string"
}
```

<h3 id="deleteapiv1trackfilebulk-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[TrackFileListResource](#schematrackfilelistresource)|false|none|
|» trackFileIds|body|[integer(int32)]|false|none|
|» quality|body|[QualityModel](#schemaqualitymodel)|false|none|
|» sceneName|body|string \| null|false|none|
|» releaseGroup|body|string \| null|false|none|

<h3 id="deleteapiv1trackfilebulk-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="lidarr-uiconfig">UiConfig</h1>

## get/api/v1/config/ui/{id}

> Code samples

```bash
curl http://localhost:8686/api/v1/config/ui/0 \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/config/ui/{id}`

<h3 id="getapiv1configuiid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "firstDayOfWeek": 0,
  "calendarWeekColumnHeader": "string",
  "shortDateFormat": "string",
  "longDateFormat": "string",
  "timeFormat": "string",
  "showRelativeDates": true,
  "enableColorImpairedMode": true,
  "uiLanguage": 0,
  "expandAlbumByDefault": true,
  "expandSingleByDefault": true,
  "expandEPByDefault": true,
  "expandBroadcastByDefault": true,
  "expandOtherByDefault": true,
  "theme": "string"
}
```

<h3 id="getapiv1configuiid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[UiConfigResource](#schemauiconfigresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## put/api/v1/config/ui/{id}

> Code samples

```bash
curl http://localhost:8686/api/v1/config/ui/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "id": 0,
    "firstDayOfWeek": 0,
    "calendarWeekColumnHeader": "string",
    "shortDateFormat": "string",
    "longDateFormat": "string",
    "timeFormat": "string",
    "showRelativeDates": true,
    "enableColorImpairedMode": true,
    "uiLanguage": 0,
    "expandAlbumByDefault": true,
    "expandSingleByDefault": true,
    "expandEPByDefault": true,
    "expandBroadcastByDefault": true,
    "expandOtherByDefault": true,
    "theme": "string"
  }'
```

`PUT /api/v1/config/ui/{id}`

> Body parameter

```json
{
  "id": 0,
  "firstDayOfWeek": 0,
  "calendarWeekColumnHeader": "string",
  "shortDateFormat": "string",
  "longDateFormat": "string",
  "timeFormat": "string",
  "showRelativeDates": true,
  "enableColorImpairedMode": true,
  "uiLanguage": 0,
  "expandAlbumByDefault": true,
  "expandSingleByDefault": true,
  "expandEPByDefault": true,
  "expandBroadcastByDefault": true,
  "expandOtherByDefault": true,
  "theme": "string"
}
```

<h3 id="putapiv1configuiid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|[UiConfigResource](#schemauiconfigresource)|false|none|
|» id|body|integer(int32)|false|none|
|» firstDayOfWeek|body|integer(int32)|false|none|
|» calendarWeekColumnHeader|body|string \| null|false|none|
|» shortDateFormat|body|string \| null|false|none|
|» longDateFormat|body|string \| null|false|none|
|» timeFormat|body|string \| null|false|none|
|» showRelativeDates|body|boolean|false|none|
|» enableColorImpairedMode|body|boolean|false|none|
|» uiLanguage|body|integer(int32)|false|none|
|» expandAlbumByDefault|body|boolean|false|none|
|» expandSingleByDefault|body|boolean|false|none|
|» expandEPByDefault|body|boolean|false|none|
|» expandBroadcastByDefault|body|boolean|false|none|
|» expandOtherByDefault|body|boolean|false|none|
|» theme|body|string \| null|false|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "firstDayOfWeek": 0,
  "calendarWeekColumnHeader": "string",
  "shortDateFormat": "string",
  "longDateFormat": "string",
  "timeFormat": "string",
  "showRelativeDates": true,
  "enableColorImpairedMode": true,
  "uiLanguage": 0,
  "expandAlbumByDefault": true,
  "expandSingleByDefault": true,
  "expandEPByDefault": true,
  "expandBroadcastByDefault": true,
  "expandOtherByDefault": true,
  "theme": "string"
}
```

<h3 id="putapiv1configuiid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[UiConfigResource](#schemauiconfigresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v1/config/ui

> Code samples

```bash
curl http://localhost:8686/api/v1/config/ui \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/config/ui`

> Example responses

> 200 Response

```json
{
  "id": 0,
  "firstDayOfWeek": 0,
  "calendarWeekColumnHeader": "string",
  "shortDateFormat": "string",
  "longDateFormat": "string",
  "timeFormat": "string",
  "showRelativeDates": true,
  "enableColorImpairedMode": true,
  "uiLanguage": 0,
  "expandAlbumByDefault": true,
  "expandSingleByDefault": true,
  "expandEPByDefault": true,
  "expandBroadcastByDefault": true,
  "expandOtherByDefault": true,
  "theme": "string"
}
```

<h3 id="getapiv1configui-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[UiConfigResource](#schemauiconfigresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="lidarr-update">Update</h1>

## get/api/v1/update

> Code samples

```bash
curl http://localhost:8686/api/v1/update \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/update`

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "version": "string",
    "branch": "string",
    "releaseDate": "1970-01-01T00:00:00Z",
    "fileName": "string",
    "url": "string",
    "installed": true,
    "installedOn": "1970-01-01T00:00:00Z",
    "installable": true,
    "latest": true,
    "changes": {
      "new": [
        "string"
      ],
      "fixed": [
        "string"
      ]
    },
    "hash": "string"
  }
]
```

<h3 id="getapiv1update-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getapiv1update-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[UpdateResource](#schemaupdateresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="lidarr-updatelogfile">UpdateLogFile</h1>

## get/api/v1/log/file/update

> Code samples

```bash
curl http://localhost:8686/api/v1/log/file/update \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/log/file/update`

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "filename": "string",
    "lastWriteTime": "1970-01-01T00:00:00Z",
    "contentsUrl": "string",
    "downloadUrl": "string"
  }
]
```

<h3 id="getapiv1logfileupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getapiv1logfileupdate-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[LogFileResource](#schemalogfileresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v1/log/file/update/{filename}

> Code samples

```bash
curl http://localhost:8686/api/v1/log/file/update/string \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/log/file/update/{filename}`

<h3 id="getapiv1logfileupdatefilename-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|filename|path|string|true|none|

<h3 id="getapiv1logfileupdatefilename-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

# Schemas

<h2 id="tocS_AddAlbumOptions">AddAlbumOptions</h2>
<!-- backwards compatibility -->
<a id="schemaaddalbumoptions"></a>
<a id="schema_AddAlbumOptions"></a>
<a id="tocSaddalbumoptions"></a>
<a id="tocsaddalbumoptions"></a>

```json
{
  "addType": "automatic",
  "searchForNewAlbum": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addType|[AlbumAddType](#schemaalbumaddtype)|false|none|none|
|searchForNewAlbum|boolean|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|addType|automatic|
|addType|manual|

<h2 id="tocS_AddArtistOptions">AddArtistOptions</h2>
<!-- backwards compatibility -->
<a id="schemaaddartistoptions"></a>
<a id="schema_AddArtistOptions"></a>
<a id="tocSaddartistoptions"></a>
<a id="tocsaddartistoptions"></a>

```json
{
  "monitor": "all",
  "albumsToMonitor": [
    "string"
  ],
  "monitored": true,
  "searchForMissingAlbums": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|monitor|[MonitorTypes](#schemamonitortypes)|false|none|none|
|albumsToMonitor|[string]|false|none|none|
|monitored|boolean|false|none|none|
|searchForMissingAlbums|boolean|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|monitor|all|
|monitor|future|
|monitor|missing|
|monitor|existing|
|monitor|latest|
|monitor|first|
|monitor|none|
|monitor|unknown|

<h2 id="tocS_AlbumAddType">AlbumAddType</h2>
<!-- backwards compatibility -->
<a id="schemaalbumaddtype"></a>
<a id="schema_AlbumAddType"></a>
<a id="tocSalbumaddtype"></a>
<a id="tocsalbumaddtype"></a>

```json
"automatic"
```

<h2 id="tocS_AlbumReleaseResource">AlbumReleaseResource</h2>
<!-- backwards compatibility -->
<a id="schemaalbumreleaseresource"></a>
<a id="schema_AlbumReleaseResource"></a>
<a id="tocSalbumreleaseresource"></a>
<a id="tocsalbumreleaseresource"></a>

```json
{
  "id": 0,
  "albumId": 0,
  "foreignReleaseId": "string",
  "title": "string",
  "status": "string",
  "duration": 0,
  "trackCount": 0,
  "media": [
    {
      "mediumNumber": 0,
      "mediumName": "string",
      "mediumFormat": "string"
    }
  ],
  "mediumCount": 0,
  "disambiguation": "string",
  "country": [
    "string"
  ],
  "label": [
    "string"
  ],
  "format": "string",
  "monitored": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|albumId|integer(int32)|false|none|none|
|foreignReleaseId|string \| null|false|none|none|
|title|string \| null|false|none|none|
|status|string \| null|false|none|none|
|duration|integer(int32)|false|none|none|
|trackCount|integer(int32)|false|none|none|
|media|[[MediumResource](#schemamediumresource)]|false|none|none|
|mediumCount|integer(int32)|false|read-only|none|
|disambiguation|string \| null|false|none|none|
|country|[string]|false|none|none|
|label|[string]|false|none|none|
|format|string \| null|false|none|none|
|monitored|boolean|false|none|none|

<h2 id="tocS_AlbumResource">AlbumResource</h2>
<!-- backwards compatibility -->
<a id="schemaalbumresource"></a>
<a id="schema_AlbumResource"></a>
<a id="tocSalbumresource"></a>
<a id="tocsalbumresource"></a>

```json
{
  "id": 0,
  "title": "string",
  "disambiguation": "string",
  "overview": "string",
  "artistId": 0,
  "foreignAlbumId": "string",
  "monitored": true,
  "anyReleaseOk": true,
  "profileId": 0,
  "duration": 0,
  "albumType": "string",
  "secondaryTypes": [
    "string"
  ],
  "mediumCount": 0,
  "ratings": {
    "votes": 0,
    "value": 0
  },
  "releaseDate": "1970-01-01T00:00:00Z",
  "releases": [
    {
      "id": 0,
      "albumId": 0,
      "foreignReleaseId": "string",
      "title": "string",
      "status": "string",
      "duration": 0,
      "trackCount": 0,
      "media": [
        {
          "mediumNumber": 0,
          "mediumName": "string",
          "mediumFormat": "string"
        }
      ],
      "mediumCount": 0,
      "disambiguation": "string",
      "country": [
        "string"
      ],
      "label": [
        "string"
      ],
      "format": "string",
      "monitored": true
    }
  ],
  "genres": [
    "string"
  ],
  "media": [
    {
      "mediumNumber": 0,
      "mediumName": "string",
      "mediumFormat": "string"
    }
  ],
  "artist": {
    "id": 0,
    "status": "continuing",
    "ended": true,
    "artistName": "string",
    "foreignArtistId": "string",
    "mbId": "string",
    "tadbId": 0,
    "discogsId": 0,
    "allMusicId": "string",
    "overview": "string",
    "artistType": "string",
    "disambiguation": "string",
    "links": [
      {
        "url": "string",
        "name": "string"
      }
    ],
    "nextAlbum": {},
    "lastAlbum": {},
    "images": [
      {
        "url": "string",
        "coverType": "unknown",
        "extension": "string",
        "remoteUrl": "string"
      }
    ],
    "members": [
      {
        "name": "string",
        "instrument": "string",
        "images": [
          {
            "url": "string",
            "coverType": "unknown",
            "extension": "string",
            "remoteUrl": "string"
          }
        ]
      }
    ],
    "remotePoster": "string",
    "path": "string",
    "qualityProfileId": 0,
    "metadataProfileId": 0,
    "monitored": true,
    "monitorNewItems": "all",
    "rootFolderPath": "string",
    "folder": "string",
    "genres": [
      "string"
    ],
    "cleanName": "string",
    "sortName": "string",
    "tags": [
      0
    ],
    "added": "1970-01-01T00:00:00Z",
    "addOptions": {
      "monitor": "all",
      "albumsToMonitor": [
        "string"
      ],
      "monitored": true,
      "searchForMissingAlbums": true
    },
    "ratings": {
      "votes": 0,
      "value": 0
    },
    "statistics": {
      "albumCount": 0,
      "trackFileCount": 0,
      "trackCount": 0,
      "totalTrackCount": 0,
      "sizeOnDisk": 0,
      "percentOfTracks": 0
    }
  },
  "images": [
    {
      "url": "string",
      "coverType": "unknown",
      "extension": "string",
      "remoteUrl": "string"
    }
  ],
  "links": [
    {
      "url": "string",
      "name": "string"
    }
  ],
  "lastSearchTime": "1970-01-01T00:00:00Z",
  "statistics": {
    "trackFileCount": 0,
    "trackCount": 0,
    "totalTrackCount": 0,
    "sizeOnDisk": 0,
    "percentOfTracks": 0
  },
  "addOptions": {
    "addType": "automatic",
    "searchForNewAlbum": true
  },
  "remoteCover": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|title|string \| null|false|none|none|
|disambiguation|string \| null|false|none|none|
|overview|string \| null|false|none|none|
|artistId|integer(int32)|false|none|none|
|foreignAlbumId|string \| null|false|none|none|
|monitored|boolean|false|none|none|
|anyReleaseOk|boolean|false|none|none|
|profileId|integer(int32)|false|none|none|
|duration|integer(int32)|false|none|none|
|albumType|string \| null|false|none|none|
|secondaryTypes|[string]|false|none|none|
|mediumCount|integer(int32)|false|read-only|none|
|ratings|[Ratings](#schemaratings)|false|none|none|
|releaseDate|string(date-time) \| null|false|none|none|
|releases|[[AlbumReleaseResource](#schemaalbumreleaseresource)]|false|none|none|
|genres|[string]|false|none|none|
|media|[[MediumResource](#schemamediumresource)]|false|none|none|
|artist|[ArtistResource](#schemaartistresource)|false|none|none|
|images|[[MediaCover](#schemamediacover)]|false|none|none|
|links|[[Links](#schemalinks)]|false|none|none|
|lastSearchTime|string(date-time) \| null|false|none|none|
|statistics|[AlbumStatisticsResource](#schemaalbumstatisticsresource)|false|none|none|
|addOptions|[AddAlbumOptions](#schemaaddalbumoptions)|false|none|none|
|remoteCover|string \| null|false|none|none|

<h2 id="tocS_AlbumResourcePagingResource">AlbumResourcePagingResource</h2>
<!-- backwards compatibility -->
<a id="schemaalbumresourcepagingresource"></a>
<a id="schema_AlbumResourcePagingResource"></a>
<a id="tocSalbumresourcepagingresource"></a>
<a id="tocsalbumresourcepagingresource"></a>

```json
{
  "page": 0,
  "pageSize": 0,
  "sortKey": "string",
  "sortDirection": "default",
  "totalRecords": 0,
  "records": [
    {
      "id": 0,
      "title": "string",
      "disambiguation": "string",
      "overview": "string",
      "artistId": 0,
      "foreignAlbumId": "string",
      "monitored": true,
      "anyReleaseOk": true,
      "profileId": 0,
      "duration": 0,
      "albumType": "string",
      "secondaryTypes": [
        "string"
      ],
      "mediumCount": 0,
      "ratings": {
        "votes": 0,
        "value": 0
      },
      "releaseDate": "1970-01-01T00:00:00Z",
      "releases": [
        {
          "id": 0,
          "albumId": 0,
          "foreignReleaseId": "string",
          "title": "string",
          "status": "string",
          "duration": 0,
          "trackCount": 0,
          "media": [
            {
              "mediumNumber": 0,
              "mediumName": "string",
              "mediumFormat": "string"
            }
          ],
          "mediumCount": 0,
          "disambiguation": "string",
          "country": [
            "string"
          ],
          "label": [
            "string"
          ],
          "format": "string",
          "monitored": true
        }
      ],
      "genres": [
        "string"
      ],
      "media": [
        {
          "mediumNumber": 0,
          "mediumName": "string",
          "mediumFormat": "string"
        }
      ],
      "artist": {},
      "images": [
        {
          "url": "string",
          "coverType": "unknown",
          "extension": "string",
          "remoteUrl": "string"
        }
      ],
      "links": [
        {
          "url": "string",
          "name": "string"
        }
      ],
      "lastSearchTime": "1970-01-01T00:00:00Z",
      "statistics": {
        "trackFileCount": 0,
        "trackCount": 0,
        "totalTrackCount": 0,
        "sizeOnDisk": 0,
        "percentOfTracks": 0
      },
      "addOptions": {
        "addType": "automatic",
        "searchForNewAlbum": true
      },
      "remoteCover": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|page|integer(int32)|false|none|none|
|pageSize|integer(int32)|false|none|none|
|sortKey|string \| null|false|none|none|
|sortDirection|[SortDirection](#schemasortdirection)|false|none|none|
|totalRecords|integer(int32)|false|none|none|
|records|[[AlbumResource](#schemaalbumresource)]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|sortDirection|default|
|sortDirection|ascending|
|sortDirection|descending|

<h2 id="tocS_AlbumStatisticsResource">AlbumStatisticsResource</h2>
<!-- backwards compatibility -->
<a id="schemaalbumstatisticsresource"></a>
<a id="schema_AlbumStatisticsResource"></a>
<a id="tocSalbumstatisticsresource"></a>
<a id="tocsalbumstatisticsresource"></a>

```json
{
  "trackFileCount": 0,
  "trackCount": 0,
  "totalTrackCount": 0,
  "sizeOnDisk": 0,
  "percentOfTracks": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|trackFileCount|integer(int32)|false|none|none|
|trackCount|integer(int32)|false|none|none|
|totalTrackCount|integer(int32)|false|none|none|
|sizeOnDisk|integer(int64)|false|none|none|
|percentOfTracks|number(double)|false|read-only|none|

<h2 id="tocS_AlbumStudioArtistResource">AlbumStudioArtistResource</h2>
<!-- backwards compatibility -->
<a id="schemaalbumstudioartistresource"></a>
<a id="schema_AlbumStudioArtistResource"></a>
<a id="tocSalbumstudioartistresource"></a>
<a id="tocsalbumstudioartistresource"></a>

```json
{
  "id": 0,
  "monitored": true,
  "albums": [
    {
      "id": 0,
      "title": "string",
      "disambiguation": "string",
      "overview": "string",
      "artistId": 0,
      "foreignAlbumId": "string",
      "monitored": true,
      "anyReleaseOk": true,
      "profileId": 0,
      "duration": 0,
      "albumType": "string",
      "secondaryTypes": [
        "string"
      ],
      "mediumCount": 0,
      "ratings": {
        "votes": 0,
        "value": 0
      },
      "releaseDate": "1970-01-01T00:00:00Z",
      "releases": [
        {
          "id": 0,
          "albumId": 0,
          "foreignReleaseId": "string",
          "title": "string",
          "status": "string",
          "duration": 0,
          "trackCount": 0,
          "media": [
            {
              "mediumNumber": 0,
              "mediumName": "string",
              "mediumFormat": "string"
            }
          ],
          "mediumCount": 0,
          "disambiguation": "string",
          "country": [
            "string"
          ],
          "label": [
            "string"
          ],
          "format": "string",
          "monitored": true
        }
      ],
      "genres": [
        "string"
      ],
      "media": [
        {
          "mediumNumber": 0,
          "mediumName": "string",
          "mediumFormat": "string"
        }
      ],
      "artist": {},
      "images": [
        {
          "url": "string",
          "coverType": "unknown",
          "extension": "string",
          "remoteUrl": "string"
        }
      ],
      "links": [
        {
          "url": "string",
          "name": "string"
        }
      ],
      "lastSearchTime": "1970-01-01T00:00:00Z",
      "statistics": {
        "trackFileCount": 0,
        "trackCount": 0,
        "totalTrackCount": 0,
        "sizeOnDisk": 0,
        "percentOfTracks": 0
      },
      "addOptions": {
        "addType": "automatic",
        "searchForNewAlbum": true
      },
      "remoteCover": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|monitored|boolean \| null|false|none|none|
|albums|[[AlbumResource](#schemaalbumresource)]|false|none|none|

<h2 id="tocS_AlbumStudioResource">AlbumStudioResource</h2>
<!-- backwards compatibility -->
<a id="schemaalbumstudioresource"></a>
<a id="schema_AlbumStudioResource"></a>
<a id="tocSalbumstudioresource"></a>
<a id="tocsalbumstudioresource"></a>

```json
{
  "artist": [
    {
      "id": 0,
      "monitored": true,
      "albums": [
        {
          "id": 0,
          "title": "string",
          "disambiguation": "string",
          "overview": "string",
          "artistId": 0,
          "foreignAlbumId": "string",
          "monitored": true,
          "anyReleaseOk": true,
          "profileId": 0,
          "duration": 0,
          "albumType": "string",
          "secondaryTypes": [
            "string"
          ],
          "mediumCount": 0,
          "ratings": {
            "votes": 0,
            "value": 0
          },
          "releaseDate": "1970-01-01T00:00:00Z",
          "releases": [
            {
              "id": 0,
              "albumId": 0,
              "foreignReleaseId": "string",
              "title": "string",
              "status": "string",
              "duration": 0,
              "trackCount": 0,
              "media": [
                {
                  "mediumNumber": 0,
                  "mediumName": "string",
                  "mediumFormat": "string"
                }
              ],
              "mediumCount": 0,
              "disambiguation": "string",
              "country": [
                "string"
              ],
              "label": [
                "string"
              ],
              "format": "string",
              "monitored": true
            }
          ],
          "genres": [
            "string"
          ],
          "media": [
            {
              "mediumNumber": 0,
              "mediumName": "string",
              "mediumFormat": "string"
            }
          ],
          "artist": {},
          "images": [
            {
              "url": "string",
              "coverType": "unknown",
              "extension": "string",
              "remoteUrl": "string"
            }
          ],
          "links": [
            {
              "url": "string",
              "name": "string"
            }
          ],
          "lastSearchTime": "1970-01-01T00:00:00Z",
          "statistics": {
            "trackFileCount": 0,
            "trackCount": 0,
            "totalTrackCount": 0,
            "sizeOnDisk": 0,
            "percentOfTracks": 0
          },
          "addOptions": {
            "addType": "automatic",
            "searchForNewAlbum": true
          },
          "remoteCover": "string"
        }
      ]
    }
  ],
  "monitoringOptions": {
    "monitor": "all",
    "albumsToMonitor": [
      "string"
    ],
    "monitored": true
  },
  "monitorNewItems": "all"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|artist|[[AlbumStudioArtistResource](#schemaalbumstudioartistresource)]|false|none|none|
|monitoringOptions|[MonitoringOptions](#schemamonitoringoptions)|false|none|none|
|monitorNewItems|[NewItemMonitorTypes](#schemanewitemmonitortypes)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|monitorNewItems|all|
|monitorNewItems|none|
|monitorNewItems|new|

<h2 id="tocS_AlbumsMonitoredResource">AlbumsMonitoredResource</h2>
<!-- backwards compatibility -->
<a id="schemaalbumsmonitoredresource"></a>
<a id="schema_AlbumsMonitoredResource"></a>
<a id="tocSalbumsmonitoredresource"></a>
<a id="tocsalbumsmonitoredresource"></a>

```json
{
  "albumIds": [
    0
  ],
  "monitored": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|albumIds|[integer(int32)]|false|none|none|
|monitored|boolean|false|none|none|

<h2 id="tocS_AllowFingerprinting">AllowFingerprinting</h2>
<!-- backwards compatibility -->
<a id="schemaallowfingerprinting"></a>
<a id="schema_AllowFingerprinting"></a>
<a id="tocSallowfingerprinting"></a>
<a id="tocsallowfingerprinting"></a>

```json
"never"
```

<h2 id="tocS_ApplyTags">ApplyTags</h2>
<!-- backwards compatibility -->
<a id="schemaapplytags"></a>
<a id="schema_ApplyTags"></a>
<a id="tocSapplytags"></a>
<a id="tocsapplytags"></a>

```json
"add"
```

<h2 id="tocS_ArtistEditorResource">ArtistEditorResource</h2>
<!-- backwards compatibility -->
<a id="schemaartisteditorresource"></a>
<a id="schema_ArtistEditorResource"></a>
<a id="tocSartisteditorresource"></a>
<a id="tocsartisteditorresource"></a>

```json
{
  "artistIds": [
    0
  ],
  "monitored": true,
  "monitorNewItems": "all",
  "qualityProfileId": 0,
  "metadataProfileId": 0,
  "rootFolderPath": "string",
  "tags": [
    0
  ],
  "applyTags": "add",
  "moveFiles": true,
  "deleteFiles": true,
  "addImportListExclusion": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|artistIds|[integer(int32)]|false|none|none|
|monitored|boolean \| null|false|none|none|
|monitorNewItems|[NewItemMonitorTypes](#schemanewitemmonitortypes)|false|none|none|
|qualityProfileId|integer(int32) \| null|false|none|none|
|metadataProfileId|integer(int32) \| null|false|none|none|
|rootFolderPath|string \| null|false|none|none|
|tags|[integer(int32)]|false|none|none|
|applyTags|[ApplyTags](#schemaapplytags)|false|none|none|
|moveFiles|boolean|false|none|none|
|deleteFiles|boolean|false|none|none|
|addImportListExclusion|boolean|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|monitorNewItems|all|
|monitorNewItems|none|
|monitorNewItems|new|
|applyTags|add|
|applyTags|remove|
|applyTags|replace|

<h2 id="tocS_ArtistResource">ArtistResource</h2>
<!-- backwards compatibility -->
<a id="schemaartistresource"></a>
<a id="schema_ArtistResource"></a>
<a id="tocSartistresource"></a>
<a id="tocsartistresource"></a>

```json
{
  "id": 0,
  "status": "continuing",
  "ended": true,
  "artistName": "string",
  "foreignArtistId": "string",
  "mbId": "string",
  "tadbId": 0,
  "discogsId": 0,
  "allMusicId": "string",
  "overview": "string",
  "artistType": "string",
  "disambiguation": "string",
  "links": [
    {
      "url": "string",
      "name": "string"
    }
  ],
  "nextAlbum": {
    "id": 0,
    "title": "string",
    "disambiguation": "string",
    "overview": "string",
    "artistId": 0,
    "foreignAlbumId": "string",
    "monitored": true,
    "anyReleaseOk": true,
    "profileId": 0,
    "duration": 0,
    "albumType": "string",
    "secondaryTypes": [
      "string"
    ],
    "mediumCount": 0,
    "ratings": {
      "votes": 0,
      "value": 0
    },
    "releaseDate": "1970-01-01T00:00:00Z",
    "releases": [
      {
        "id": 0,
        "albumId": 0,
        "foreignReleaseId": "string",
        "title": "string",
        "status": "string",
        "duration": 0,
        "trackCount": 0,
        "media": [
          {
            "mediumNumber": 0,
            "mediumName": "string",
            "mediumFormat": "string"
          }
        ],
        "mediumCount": 0,
        "disambiguation": "string",
        "country": [
          "string"
        ],
        "label": [
          "string"
        ],
        "format": "string",
        "monitored": true
      }
    ],
    "genres": [
      "string"
    ],
    "media": [
      {
        "mediumNumber": 0,
        "mediumName": "string",
        "mediumFormat": "string"
      }
    ],
    "artist": {},
    "images": [
      {
        "url": "string",
        "coverType": "unknown",
        "extension": "string",
        "remoteUrl": "string"
      }
    ],
    "links": [
      {
        "url": "string",
        "name": "string"
      }
    ],
    "lastSearchTime": "1970-01-01T00:00:00Z",
    "statistics": {
      "trackFileCount": 0,
      "trackCount": 0,
      "totalTrackCount": 0,
      "sizeOnDisk": 0,
      "percentOfTracks": 0
    },
    "addOptions": {
      "addType": "automatic",
      "searchForNewAlbum": true
    },
    "remoteCover": "string"
  },
  "lastAlbum": {
    "id": 0,
    "title": "string",
    "disambiguation": "string",
    "overview": "string",
    "artistId": 0,
    "foreignAlbumId": "string",
    "monitored": true,
    "anyReleaseOk": true,
    "profileId": 0,
    "duration": 0,
    "albumType": "string",
    "secondaryTypes": [
      "string"
    ],
    "mediumCount": 0,
    "ratings": {
      "votes": 0,
      "value": 0
    },
    "releaseDate": "1970-01-01T00:00:00Z",
    "releases": [
      {
        "id": 0,
        "albumId": 0,
        "foreignReleaseId": "string",
        "title": "string",
        "status": "string",
        "duration": 0,
        "trackCount": 0,
        "media": [
          {
            "mediumNumber": 0,
            "mediumName": "string",
            "mediumFormat": "string"
          }
        ],
        "mediumCount": 0,
        "disambiguation": "string",
        "country": [
          "string"
        ],
        "label": [
          "string"
        ],
        "format": "string",
        "monitored": true
      }
    ],
    "genres": [
      "string"
    ],
    "media": [
      {
        "mediumNumber": 0,
        "mediumName": "string",
        "mediumFormat": "string"
      }
    ],
    "artist": {},
    "images": [
      {
        "url": "string",
        "coverType": "unknown",
        "extension": "string",
        "remoteUrl": "string"
      }
    ],
    "links": [
      {
        "url": "string",
        "name": "string"
      }
    ],
    "lastSearchTime": "1970-01-01T00:00:00Z",
    "statistics": {
      "trackFileCount": 0,
      "trackCount": 0,
      "totalTrackCount": 0,
      "sizeOnDisk": 0,
      "percentOfTracks": 0
    },
    "addOptions": {
      "addType": "automatic",
      "searchForNewAlbum": true
    },
    "remoteCover": "string"
  },
  "images": [
    {
      "url": "string",
      "coverType": "unknown",
      "extension": "string",
      "remoteUrl": "string"
    }
  ],
  "members": [
    {
      "name": "string",
      "instrument": "string",
      "images": [
        {
          "url": "string",
          "coverType": "unknown",
          "extension": "string",
          "remoteUrl": "string"
        }
      ]
    }
  ],
  "remotePoster": "string",
  "path": "string",
  "qualityProfileId": 0,
  "metadataProfileId": 0,
  "monitored": true,
  "monitorNewItems": "all",
  "rootFolderPath": "string",
  "folder": "string",
  "genres": [
    "string"
  ],
  "cleanName": "string",
  "sortName": "string",
  "tags": [
    0
  ],
  "added": "1970-01-01T00:00:00Z",
  "addOptions": {
    "monitor": "all",
    "albumsToMonitor": [
      "string"
    ],
    "monitored": true,
    "searchForMissingAlbums": true
  },
  "ratings": {
    "votes": 0,
    "value": 0
  },
  "statistics": {
    "albumCount": 0,
    "trackFileCount": 0,
    "trackCount": 0,
    "totalTrackCount": 0,
    "sizeOnDisk": 0,
    "percentOfTracks": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|status|[ArtistStatusType](#schemaartiststatustype)|false|none|none|
|ended|boolean|false|read-only|none|
|artistName|string \| null|false|none|none|
|foreignArtistId|string \| null|false|none|none|
|mbId|string \| null|false|none|none|
|tadbId|integer(int32)|false|none|none|
|discogsId|integer(int32)|false|none|none|
|allMusicId|string \| null|false|none|none|
|overview|string \| null|false|none|none|
|artistType|string \| null|false|none|none|
|disambiguation|string \| null|false|none|none|
|links|[[Links](#schemalinks)]|false|none|none|
|nextAlbum|[AlbumResource](#schemaalbumresource)|false|none|none|
|lastAlbum|[AlbumResource](#schemaalbumresource)|false|none|none|
|images|[[MediaCover](#schemamediacover)]|false|none|none|
|members|[[Member](#schemamember)]|false|none|none|
|remotePoster|string \| null|false|none|none|
|path|string \| null|false|none|none|
|qualityProfileId|integer(int32)|false|none|none|
|metadataProfileId|integer(int32)|false|none|none|
|monitored|boolean|false|none|none|
|monitorNewItems|[NewItemMonitorTypes](#schemanewitemmonitortypes)|false|none|none|
|rootFolderPath|string \| null|false|none|none|
|folder|string \| null|false|none|none|
|genres|[string]|false|none|none|
|cleanName|string \| null|false|none|none|
|sortName|string \| null|false|none|none|
|tags|[integer(int32)]|false|none|none|
|added|string(date-time)|false|none|none|
|addOptions|[AddArtistOptions](#schemaaddartistoptions)|false|none|none|
|ratings|[Ratings](#schemaratings)|false|none|none|
|statistics|[ArtistStatisticsResource](#schemaartiststatisticsresource)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|continuing|
|status|ended|
|status|deleted|
|monitorNewItems|all|
|monitorNewItems|none|
|monitorNewItems|new|

<h2 id="tocS_ArtistStatisticsResource">ArtistStatisticsResource</h2>
<!-- backwards compatibility -->
<a id="schemaartiststatisticsresource"></a>
<a id="schema_ArtistStatisticsResource"></a>
<a id="tocSartiststatisticsresource"></a>
<a id="tocsartiststatisticsresource"></a>

```json
{
  "albumCount": 0,
  "trackFileCount": 0,
  "trackCount": 0,
  "totalTrackCount": 0,
  "sizeOnDisk": 0,
  "percentOfTracks": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|albumCount|integer(int32)|false|none|none|
|trackFileCount|integer(int32)|false|none|none|
|trackCount|integer(int32)|false|none|none|
|totalTrackCount|integer(int32)|false|none|none|
|sizeOnDisk|integer(int64)|false|none|none|
|percentOfTracks|number(double)|false|read-only|none|

<h2 id="tocS_ArtistStatusType">ArtistStatusType</h2>
<!-- backwards compatibility -->
<a id="schemaartiststatustype"></a>
<a id="schema_ArtistStatusType"></a>
<a id="tocSartiststatustype"></a>
<a id="tocsartiststatustype"></a>

```json
"continuing"
```

<h2 id="tocS_ArtistTitleInfo">ArtistTitleInfo</h2>
<!-- backwards compatibility -->
<a id="schemaartisttitleinfo"></a>
<a id="schema_ArtistTitleInfo"></a>
<a id="tocSartisttitleinfo"></a>
<a id="tocsartisttitleinfo"></a>

```json
{
  "title": "string",
  "titleWithoutYear": "string",
  "year": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|title|string \| null|false|none|none|
|titleWithoutYear|string \| null|false|none|none|
|year|integer(int32)|false|none|none|

<h2 id="tocS_AuthenticationRequiredType">AuthenticationRequiredType</h2>
<!-- backwards compatibility -->
<a id="schemaauthenticationrequiredtype"></a>
<a id="schema_AuthenticationRequiredType"></a>
<a id="tocSauthenticationrequiredtype"></a>
<a id="tocsauthenticationrequiredtype"></a>

```json
"enabled"
```

<h2 id="tocS_AuthenticationType">AuthenticationType</h2>
<!-- backwards compatibility -->
<a id="schemaauthenticationtype"></a>
<a id="schema_AuthenticationType"></a>
<a id="tocSauthenticationtype"></a>
<a id="tocsauthenticationtype"></a>

```json
"none"
```

<h2 id="tocS_AutoTaggingResource">AutoTaggingResource</h2>
<!-- backwards compatibility -->
<a id="schemaautotaggingresource"></a>
<a id="schema_AutoTaggingResource"></a>
<a id="tocSautotaggingresource"></a>
<a id="tocsautotaggingresource"></a>

```json
{
  "id": 0,
  "name": "string",
  "removeTagsAutomatically": true,
  "tags": [
    0
  ],
  "specifications": [
    {
      "id": 0,
      "name": "string",
      "implementation": "string",
      "implementationName": "string",
      "negate": true,
      "required": true,
      "fields": [
        {
          "order": 0,
          "name": "string",
          "label": "string",
          "unit": "string",
          "helpText": "string",
          "helpTextWarning": "string",
          "helpLink": "string",
          "value": null,
          "type": "string",
          "advanced": true,
          "selectOptions": [
            {
              "value": 0,
              "name": "string",
              "order": 0,
              "hint": "string"
            }
          ],
          "selectOptionsProviderAction": "string",
          "section": "string",
          "hidden": "string",
          "privacy": "normal",
          "placeholder": "string",
          "isFloat": true
        }
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|name|string \| null|false|none|none|
|removeTagsAutomatically|boolean|false|none|none|
|tags|[integer(int32)]|false|none|none|
|specifications|[[AutoTaggingSpecificationSchema](#schemaautotaggingspecificationschema)]|false|none|none|

<h2 id="tocS_AutoTaggingSpecificationSchema">AutoTaggingSpecificationSchema</h2>
<!-- backwards compatibility -->
<a id="schemaautotaggingspecificationschema"></a>
<a id="schema_AutoTaggingSpecificationSchema"></a>
<a id="tocSautotaggingspecificationschema"></a>
<a id="tocsautotaggingspecificationschema"></a>

```json
{
  "id": 0,
  "name": "string",
  "implementation": "string",
  "implementationName": "string",
  "negate": true,
  "required": true,
  "fields": [
    {
      "order": 0,
      "name": "string",
      "label": "string",
      "unit": "string",
      "helpText": "string",
      "helpTextWarning": "string",
      "helpLink": "string",
      "value": null,
      "type": "string",
      "advanced": true,
      "selectOptions": [
        {
          "value": 0,
          "name": "string",
          "order": 0,
          "hint": "string"
        }
      ],
      "selectOptionsProviderAction": "string",
      "section": "string",
      "hidden": "string",
      "privacy": "normal",
      "placeholder": "string",
      "isFloat": true
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|name|string \| null|false|none|none|
|implementation|string \| null|false|none|none|
|implementationName|string \| null|false|none|none|
|negate|boolean|false|none|none|
|required|boolean|false|none|none|
|fields|[[Field](#schemafield)]|false|none|none|

<h2 id="tocS_BackupResource">BackupResource</h2>
<!-- backwards compatibility -->
<a id="schemabackupresource"></a>
<a id="schema_BackupResource"></a>
<a id="tocSbackupresource"></a>
<a id="tocsbackupresource"></a>

```json
{
  "id": 0,
  "name": "string",
  "path": "string",
  "type": "scheduled",
  "size": 0,
  "time": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|name|string \| null|false|none|none|
|path|string \| null|false|none|none|
|type|[BackupType](#schemabackuptype)|false|none|none|
|size|integer(int64)|false|none|none|
|time|string(date-time)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|scheduled|
|type|manual|
|type|update|

<h2 id="tocS_BackupType">BackupType</h2>
<!-- backwards compatibility -->
<a id="schemabackuptype"></a>
<a id="schema_BackupType"></a>
<a id="tocSbackuptype"></a>
<a id="tocsbackuptype"></a>

```json
"scheduled"
```

<h2 id="tocS_BlocklistBulkResource">BlocklistBulkResource</h2>
<!-- backwards compatibility -->
<a id="schemablocklistbulkresource"></a>
<a id="schema_BlocklistBulkResource"></a>
<a id="tocSblocklistbulkresource"></a>
<a id="tocsblocklistbulkresource"></a>

```json
{
  "ids": [
    0
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ids|[integer(int32)]|false|none|none|

<h2 id="tocS_BlocklistResource">BlocklistResource</h2>
<!-- backwards compatibility -->
<a id="schemablocklistresource"></a>
<a id="schema_BlocklistResource"></a>
<a id="tocSblocklistresource"></a>
<a id="tocsblocklistresource"></a>

```json
{
  "id": 0,
  "artistId": 0,
  "albumIds": [
    0
  ],
  "sourceTitle": "string",
  "quality": {
    "quality": {
      "id": 0,
      "name": "string"
    },
    "revision": {
      "version": 0,
      "real": 0,
      "isRepack": true
    }
  },
  "customFormats": [
    {
      "id": 0,
      "name": "string",
      "includeCustomFormatWhenRenaming": true,
      "specifications": [
        {
          "id": 0,
          "name": "string",
          "implementation": "string",
          "implementationName": "string",
          "infoLink": "string",
          "negate": true,
          "required": true,
          "fields": [
            {
              "order": 0,
              "name": "string",
              "label": "string",
              "unit": "string",
              "helpText": "string",
              "helpTextWarning": "string",
              "helpLink": "string",
              "value": null,
              "type": "string",
              "advanced": true,
              "selectOptions": [
                {
                  "value": 0,
                  "name": "string",
                  "order": 0,
                  "hint": "string"
                }
              ],
              "selectOptionsProviderAction": "string",
              "section": "string",
              "hidden": "string",
              "privacy": "normal",
              "placeholder": "string",
              "isFloat": true
            }
          ],
          "presets": [
            {}
          ]
        }
      ]
    }
  ],
  "date": "1970-01-01T00:00:00Z",
  "protocol": "unknown",
  "indexer": "string",
  "message": "string",
  "artist": {
    "id": 0,
    "status": "continuing",
    "ended": true,
    "artistName": "string",
    "foreignArtistId": "string",
    "mbId": "string",
    "tadbId": 0,
    "discogsId": 0,
    "allMusicId": "string",
    "overview": "string",
    "artistType": "string",
    "disambiguation": "string",
    "links": [
      {
        "url": "string",
        "name": "string"
      }
    ],
    "nextAlbum": {},
    "lastAlbum": {},
    "images": [
      {
        "url": "string",
        "coverType": "unknown",
        "extension": "string",
        "remoteUrl": "string"
      }
    ],
    "members": [
      {
        "name": "string",
        "instrument": "string",
        "images": [
          {
            "url": "string",
            "coverType": "unknown",
            "extension": "string",
            "remoteUrl": "string"
          }
        ]
      }
    ],
    "remotePoster": "string",
    "path": "string",
    "qualityProfileId": 0,
    "metadataProfileId": 0,
    "monitored": true,
    "monitorNewItems": "all",
    "rootFolderPath": "string",
    "folder": "string",
    "genres": [
      "string"
    ],
    "cleanName": "string",
    "sortName": "string",
    "tags": [
      0
    ],
    "added": "1970-01-01T00:00:00Z",
    "addOptions": {
      "monitor": "all",
      "albumsToMonitor": [
        "string"
      ],
      "monitored": true,
      "searchForMissingAlbums": true
    },
    "ratings": {
      "votes": 0,
      "value": 0
    },
    "statistics": {
      "albumCount": 0,
      "trackFileCount": 0,
      "trackCount": 0,
      "totalTrackCount": 0,
      "sizeOnDisk": 0,
      "percentOfTracks": 0
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|artistId|integer(int32)|false|none|none|
|albumIds|[integer(int32)]|false|none|none|
|sourceTitle|string \| null|false|none|none|
|quality|[QualityModel](#schemaqualitymodel)|false|none|none|
|customFormats|[[CustomFormatResource](#schemacustomformatresource)]|false|none|none|
|date|string(date-time)|false|none|none|
|protocol|[DownloadProtocol](#schemadownloadprotocol)|false|none|none|
|indexer|string \| null|false|none|none|
|message|string \| null|false|none|none|
|artist|[ArtistResource](#schemaartistresource)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|protocol|unknown|
|protocol|usenet|
|protocol|torrent|

<h2 id="tocS_BlocklistResourcePagingResource">BlocklistResourcePagingResource</h2>
<!-- backwards compatibility -->
<a id="schemablocklistresourcepagingresource"></a>
<a id="schema_BlocklistResourcePagingResource"></a>
<a id="tocSblocklistresourcepagingresource"></a>
<a id="tocsblocklistresourcepagingresource"></a>

```json
{
  "page": 0,
  "pageSize": 0,
  "sortKey": "string",
  "sortDirection": "default",
  "totalRecords": 0,
  "records": [
    {
      "id": 0,
      "artistId": 0,
      "albumIds": [
        0
      ],
      "sourceTitle": "string",
      "quality": {
        "quality": {
          "id": 0,
          "name": "string"
        },
        "revision": {
          "version": 0,
          "real": 0,
          "isRepack": true
        }
      },
      "customFormats": [
        {
          "id": 0,
          "name": "string",
          "includeCustomFormatWhenRenaming": true,
          "specifications": [
            {
              "id": 0,
              "name": "string",
              "implementation": "string",
              "implementationName": "string",
              "infoLink": "string",
              "negate": true,
              "required": true,
              "fields": [
                {
                  "order": 0,
                  "name": "string",
                  "label": "string",
                  "unit": "string",
                  "helpText": "string",
                  "helpTextWarning": "string",
                  "helpLink": "string",
                  "value": null,
                  "type": "string",
                  "advanced": true,
                  "selectOptions": [
                    {
                      "value": 0,
                      "name": "string",
                      "order": 0,
                      "hint": "string"
                    }
                  ],
                  "selectOptionsProviderAction": "string",
                  "section": "string",
                  "hidden": "string",
                  "privacy": "normal",
                  "placeholder": "string",
                  "isFloat": true
                }
              ],
              "presets": [
                {}
              ]
            }
          ]
        }
      ],
      "date": "1970-01-01T00:00:00Z",
      "protocol": "unknown",
      "indexer": "string",
      "message": "string",
      "artist": {
        "id": 0,
        "status": "continuing",
        "ended": true,
        "artistName": "string",
        "foreignArtistId": "string",
        "mbId": "string",
        "tadbId": 0,
        "discogsId": 0,
        "allMusicId": "string",
        "overview": "string",
        "artistType": "string",
        "disambiguation": "string",
        "links": [
          {
            "url": "string",
            "name": "string"
          }
        ],
        "nextAlbum": {},
        "lastAlbum": {},
        "images": [
          {
            "url": "string",
            "coverType": "unknown",
            "extension": "string",
            "remoteUrl": "string"
          }
        ],
        "members": [
          {
            "name": "string",
            "instrument": "string",
            "images": [
              {
                "url": "string",
                "coverType": "unknown",
                "extension": "string",
                "remoteUrl": "string"
              }
            ]
          }
        ],
        "remotePoster": "string",
        "path": "string",
        "qualityProfileId": 0,
        "metadataProfileId": 0,
        "monitored": true,
        "monitorNewItems": "all",
        "rootFolderPath": "string",
        "folder": "string",
        "genres": [
          "string"
        ],
        "cleanName": "string",
        "sortName": "string",
        "tags": [
          0
        ],
        "added": "1970-01-01T00:00:00Z",
        "addOptions": {
          "monitor": "all",
          "albumsToMonitor": [
            "string"
          ],
          "monitored": true,
          "searchForMissingAlbums": true
        },
        "ratings": {
          "votes": 0,
          "value": 0
        },
        "statistics": {
          "albumCount": 0,
          "trackFileCount": 0,
          "trackCount": 0,
          "totalTrackCount": 0,
          "sizeOnDisk": 0,
          "percentOfTracks": 0
        }
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|page|integer(int32)|false|none|none|
|pageSize|integer(int32)|false|none|none|
|sortKey|string \| null|false|none|none|
|sortDirection|[SortDirection](#schemasortdirection)|false|none|none|
|totalRecords|integer(int32)|false|none|none|
|records|[[BlocklistResource](#schemablocklistresource)]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|sortDirection|default|
|sortDirection|ascending|
|sortDirection|descending|

<h2 id="tocS_CertificateValidationType">CertificateValidationType</h2>
<!-- backwards compatibility -->
<a id="schemacertificatevalidationtype"></a>
<a id="schema_CertificateValidationType"></a>
<a id="tocScertificatevalidationtype"></a>
<a id="tocscertificatevalidationtype"></a>

```json
"enabled"
```

<h2 id="tocS_Command">Command</h2>
<!-- backwards compatibility -->
<a id="schemacommand"></a>
<a id="schema_Command"></a>
<a id="tocScommand"></a>
<a id="tocscommand"></a>

```json
{
  "sendUpdatesToClient": true,
  "updateScheduledTask": true,
  "completionMessage": "string",
  "requiresDiskAccess": true,
  "isExclusive": true,
  "isTypeExclusive": true,
  "isLongRunning": true,
  "name": "string",
  "lastExecutionTime": "1970-01-01T00:00:00Z",
  "lastStartTime": "1970-01-01T00:00:00Z",
  "trigger": "unspecified",
  "suppressMessages": true,
  "clientUserAgent": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sendUpdatesToClient|boolean|false|none|none|
|updateScheduledTask|boolean|false|read-only|none|
|completionMessage|string \| null|false|read-only|none|
|requiresDiskAccess|boolean|false|read-only|none|
|isExclusive|boolean|false|read-only|none|
|isTypeExclusive|boolean|false|read-only|none|
|isLongRunning|boolean|false|read-only|none|
|name|string \| null|false|read-only|none|
|lastExecutionTime|string(date-time) \| null|false|none|none|
|lastStartTime|string(date-time) \| null|false|none|none|
|trigger|[CommandTrigger](#schemacommandtrigger)|false|none|none|
|suppressMessages|boolean|false|none|none|
|clientUserAgent|string \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|trigger|unspecified|
|trigger|manual|
|trigger|scheduled|

<h2 id="tocS_CommandPriority">CommandPriority</h2>
<!-- backwards compatibility -->
<a id="schemacommandpriority"></a>
<a id="schema_CommandPriority"></a>
<a id="tocScommandpriority"></a>
<a id="tocscommandpriority"></a>

```json
"normal"
```

<h2 id="tocS_CommandResource">CommandResource</h2>
<!-- backwards compatibility -->
<a id="schemacommandresource"></a>
<a id="schema_CommandResource"></a>
<a id="tocScommandresource"></a>
<a id="tocscommandresource"></a>

```json
{
  "id": 0,
  "name": "string",
  "commandName": "string",
  "message": "string",
  "body": {
    "sendUpdatesToClient": true,
    "updateScheduledTask": true,
    "completionMessage": "string",
    "requiresDiskAccess": true,
    "isExclusive": true,
    "isTypeExclusive": true,
    "isLongRunning": true,
    "name": "string",
    "lastExecutionTime": "1970-01-01T00:00:00Z",
    "lastStartTime": "1970-01-01T00:00:00Z",
    "trigger": "unspecified",
    "suppressMessages": true,
    "clientUserAgent": "string"
  },
  "priority": "normal",
  "status": "queued",
  "result": "unknown",
  "queued": "1970-01-01T00:00:00Z",
  "started": "1970-01-01T00:00:00Z",
  "ended": "1970-01-01T00:00:00Z",
  "duration": "string",
  "exception": "string",
  "trigger": "unspecified",
  "clientUserAgent": "string",
  "stateChangeTime": "1970-01-01T00:00:00Z",
  "sendUpdatesToClient": true,
  "updateScheduledTask": true,
  "lastExecutionTime": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|name|string \| null|false|none|none|
|commandName|string \| null|false|none|none|
|message|string \| null|false|none|none|
|body|[Command](#schemacommand)|false|none|none|
|priority|[CommandPriority](#schemacommandpriority)|false|none|none|
|status|[CommandStatus](#schemacommandstatus)|false|none|none|
|result|[CommandResult](#schemacommandresult)|false|none|none|
|queued|string(date-time)|false|none|none|
|started|string(date-time) \| null|false|none|none|
|ended|string(date-time) \| null|false|none|none|
|duration|string(date-span) \| null|false|none|none|
|exception|string \| null|false|none|none|
|trigger|[CommandTrigger](#schemacommandtrigger)|false|none|none|
|clientUserAgent|string \| null|false|none|none|
|stateChangeTime|string(date-time) \| null|false|none|none|
|sendUpdatesToClient|boolean|false|none|none|
|updateScheduledTask|boolean|false|none|none|
|lastExecutionTime|string(date-time) \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|priority|normal|
|priority|high|
|priority|low|
|status|queued|
|status|started|
|status|completed|
|status|failed|
|status|aborted|
|status|cancelled|
|status|orphaned|
|result|unknown|
|result|successful|
|result|unsuccessful|
|trigger|unspecified|
|trigger|manual|
|trigger|scheduled|

<h2 id="tocS_CommandResult">CommandResult</h2>
<!-- backwards compatibility -->
<a id="schemacommandresult"></a>
<a id="schema_CommandResult"></a>
<a id="tocScommandresult"></a>
<a id="tocscommandresult"></a>

```json
"unknown"
```

<h2 id="tocS_CommandStatus">CommandStatus</h2>
<!-- backwards compatibility -->
<a id="schemacommandstatus"></a>
<a id="schema_CommandStatus"></a>
<a id="tocScommandstatus"></a>
<a id="tocscommandstatus"></a>

```json
"queued"
```

<h2 id="tocS_CommandTrigger">CommandTrigger</h2>
<!-- backwards compatibility -->
<a id="schemacommandtrigger"></a>
<a id="schema_CommandTrigger"></a>
<a id="tocScommandtrigger"></a>
<a id="tocscommandtrigger"></a>

```json
"unspecified"
```

<h2 id="tocS_CustomFilterResource">CustomFilterResource</h2>
<!-- backwards compatibility -->
<a id="schemacustomfilterresource"></a>
<a id="schema_CustomFilterResource"></a>
<a id="tocScustomfilterresource"></a>
<a id="tocscustomfilterresource"></a>

```json
{
  "id": 0,
  "type": "string",
  "label": "string",
  "filters": [
    {
      "property1": null,
      "property2": null
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|type|string \| null|false|none|none|
|label|string \| null|false|none|none|
|filters|[object]|false|none|none|

<h2 id="tocS_CustomFormatBulkResource">CustomFormatBulkResource</h2>
<!-- backwards compatibility -->
<a id="schemacustomformatbulkresource"></a>
<a id="schema_CustomFormatBulkResource"></a>
<a id="tocScustomformatbulkresource"></a>
<a id="tocscustomformatbulkresource"></a>

```json
{
  "ids": [
    0
  ],
  "includeCustomFormatWhenRenaming": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ids|[integer(int32)]|false|none|none|
|includeCustomFormatWhenRenaming|boolean \| null|false|none|none|

<h2 id="tocS_CustomFormatResource">CustomFormatResource</h2>
<!-- backwards compatibility -->
<a id="schemacustomformatresource"></a>
<a id="schema_CustomFormatResource"></a>
<a id="tocScustomformatresource"></a>
<a id="tocscustomformatresource"></a>

```json
{
  "id": 0,
  "name": "string",
  "includeCustomFormatWhenRenaming": true,
  "specifications": [
    {
      "id": 0,
      "name": "string",
      "implementation": "string",
      "implementationName": "string",
      "infoLink": "string",
      "negate": true,
      "required": true,
      "fields": [
        {
          "order": 0,
          "name": "string",
          "label": "string",
          "unit": "string",
          "helpText": "string",
          "helpTextWarning": "string",
          "helpLink": "string",
          "value": null,
          "type": "string",
          "advanced": true,
          "selectOptions": [
            {
              "value": 0,
              "name": "string",
              "order": 0,
              "hint": "string"
            }
          ],
          "selectOptionsProviderAction": "string",
          "section": "string",
          "hidden": "string",
          "privacy": "normal",
          "placeholder": "string",
          "isFloat": true
        }
      ],
      "presets": [
        {}
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|name|string \| null|false|none|none|
|includeCustomFormatWhenRenaming|boolean \| null|false|none|none|
|specifications|[[CustomFormatSpecificationSchema](#schemacustomformatspecificationschema)]|false|none|none|

<h2 id="tocS_CustomFormatSpecificationSchema">CustomFormatSpecificationSchema</h2>
<!-- backwards compatibility -->
<a id="schemacustomformatspecificationschema"></a>
<a id="schema_CustomFormatSpecificationSchema"></a>
<a id="tocScustomformatspecificationschema"></a>
<a id="tocscustomformatspecificationschema"></a>

```json
{
  "id": 0,
  "name": "string",
  "implementation": "string",
  "implementationName": "string",
  "infoLink": "string",
  "negate": true,
  "required": true,
  "fields": [
    {
      "order": 0,
      "name": "string",
      "label": "string",
      "unit": "string",
      "helpText": "string",
      "helpTextWarning": "string",
      "helpLink": "string",
      "value": null,
      "type": "string",
      "advanced": true,
      "selectOptions": [
        {
          "value": 0,
          "name": "string",
          "order": 0,
          "hint": "string"
        }
      ],
      "selectOptionsProviderAction": "string",
      "section": "string",
      "hidden": "string",
      "privacy": "normal",
      "placeholder": "string",
      "isFloat": true
    }
  ],
  "presets": [
    {
      "id": 0,
      "name": "string",
      "implementation": "string",
      "implementationName": "string",
      "infoLink": "string",
      "negate": true,
      "required": true,
      "fields": [
        {
          "order": 0,
          "name": "string",
          "label": "string",
          "unit": "string",
          "helpText": "string",
          "helpTextWarning": "string",
          "helpLink": "string",
          "value": null,
          "type": "string",
          "advanced": true,
          "selectOptions": [
            {
              "value": 0,
              "name": "string",
              "order": 0,
              "hint": "string"
            }
          ],
          "selectOptionsProviderAction": "string",
          "section": "string",
          "hidden": "string",
          "privacy": "normal",
          "placeholder": "string",
          "isFloat": true
        }
      ],
      "presets": [
        {}
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|name|string \| null|false|none|none|
|implementation|string \| null|false|none|none|
|implementationName|string \| null|false|none|none|
|infoLink|string \| null|false|none|none|
|negate|boolean|false|none|none|
|required|boolean|false|none|none|
|fields|[[Field](#schemafield)]|false|none|none|
|presets|[[CustomFormatSpecificationSchema](#schemacustomformatspecificationschema)]|false|none|none|

<h2 id="tocS_DatabaseType">DatabaseType</h2>
<!-- backwards compatibility -->
<a id="schemadatabasetype"></a>
<a id="schema_DatabaseType"></a>
<a id="tocSdatabasetype"></a>
<a id="tocsdatabasetype"></a>

```json
"sqLite"
```

<h2 id="tocS_DelayProfileResource">DelayProfileResource</h2>
<!-- backwards compatibility -->
<a id="schemadelayprofileresource"></a>
<a id="schema_DelayProfileResource"></a>
<a id="tocSdelayprofileresource"></a>
<a id="tocsdelayprofileresource"></a>

```json
{
  "id": 0,
  "enableUsenet": true,
  "enableTorrent": true,
  "preferredProtocol": "unknown",
  "usenetDelay": 0,
  "torrentDelay": 0,
  "bypassIfHighestQuality": true,
  "bypassIfAboveCustomFormatScore": true,
  "minimumCustomFormatScore": 0,
  "order": 0,
  "tags": [
    0
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|enableUsenet|boolean|false|none|none|
|enableTorrent|boolean|false|none|none|
|preferredProtocol|[DownloadProtocol](#schemadownloadprotocol)|false|none|none|
|usenetDelay|integer(int32)|false|none|none|
|torrentDelay|integer(int32)|false|none|none|
|bypassIfHighestQuality|boolean|false|none|none|
|bypassIfAboveCustomFormatScore|boolean|false|none|none|
|minimumCustomFormatScore|integer(int32)|false|none|none|
|order|integer(int32)|false|none|none|
|tags|[integer(int32)]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|preferredProtocol|unknown|
|preferredProtocol|usenet|
|preferredProtocol|torrent|

<h2 id="tocS_DiskSpaceResource">DiskSpaceResource</h2>
<!-- backwards compatibility -->
<a id="schemadiskspaceresource"></a>
<a id="schema_DiskSpaceResource"></a>
<a id="tocSdiskspaceresource"></a>
<a id="tocsdiskspaceresource"></a>

```json
{
  "id": 0,
  "path": "string",
  "label": "string",
  "freeSpace": 0,
  "totalSpace": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|path|string \| null|false|none|none|
|label|string \| null|false|none|none|
|freeSpace|integer(int64)|false|none|none|
|totalSpace|integer(int64)|false|none|none|

<h2 id="tocS_DownloadClientBulkResource">DownloadClientBulkResource</h2>
<!-- backwards compatibility -->
<a id="schemadownloadclientbulkresource"></a>
<a id="schema_DownloadClientBulkResource"></a>
<a id="tocSdownloadclientbulkresource"></a>
<a id="tocsdownloadclientbulkresource"></a>

```json
{
  "ids": [
    0
  ],
  "tags": [
    0
  ],
  "applyTags": "add",
  "enable": true,
  "priority": 0,
  "removeCompletedDownloads": true,
  "removeFailedDownloads": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ids|[integer(int32)]|false|none|none|
|tags|[integer(int32)]|false|none|none|
|applyTags|[ApplyTags](#schemaapplytags)|false|none|none|
|enable|boolean \| null|false|none|none|
|priority|integer(int32) \| null|false|none|none|
|removeCompletedDownloads|boolean \| null|false|none|none|
|removeFailedDownloads|boolean \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|applyTags|add|
|applyTags|remove|
|applyTags|replace|

<h2 id="tocS_DownloadClientConfigResource">DownloadClientConfigResource</h2>
<!-- backwards compatibility -->
<a id="schemadownloadclientconfigresource"></a>
<a id="schema_DownloadClientConfigResource"></a>
<a id="tocSdownloadclientconfigresource"></a>
<a id="tocsdownloadclientconfigresource"></a>

```json
{
  "id": 0,
  "downloadClientWorkingFolders": "string",
  "enableCompletedDownloadHandling": true,
  "autoRedownloadFailed": true,
  "autoRedownloadFailedFromInteractiveSearch": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|downloadClientWorkingFolders|string \| null|false|none|none|
|enableCompletedDownloadHandling|boolean|false|none|none|
|autoRedownloadFailed|boolean|false|none|none|
|autoRedownloadFailedFromInteractiveSearch|boolean|false|none|none|

<h2 id="tocS_DownloadClientResource">DownloadClientResource</h2>
<!-- backwards compatibility -->
<a id="schemadownloadclientresource"></a>
<a id="schema_DownloadClientResource"></a>
<a id="tocSdownloadclientresource"></a>
<a id="tocsdownloadclientresource"></a>

```json
{
  "id": 0,
  "name": "string",
  "fields": [
    {
      "order": 0,
      "name": "string",
      "label": "string",
      "unit": "string",
      "helpText": "string",
      "helpTextWarning": "string",
      "helpLink": "string",
      "value": null,
      "type": "string",
      "advanced": true,
      "selectOptions": [
        {
          "value": 0,
          "name": "string",
          "order": 0,
          "hint": "string"
        }
      ],
      "selectOptionsProviderAction": "string",
      "section": "string",
      "hidden": "string",
      "privacy": "normal",
      "placeholder": "string",
      "isFloat": true
    }
  ],
  "implementationName": "string",
  "implementation": "string",
  "configContract": "string",
  "infoLink": "string",
  "message": {
    "message": "string",
    "type": "info"
  },
  "tags": [
    0
  ],
  "presets": [
    {
      "id": 0,
      "name": "string",
      "fields": [
        {
          "order": 0,
          "name": "string",
          "label": "string",
          "unit": "string",
          "helpText": "string",
          "helpTextWarning": "string",
          "helpLink": "string",
          "value": null,
          "type": "string",
          "advanced": true,
          "selectOptions": [
            {
              "value": 0,
              "name": "string",
              "order": 0,
              "hint": "string"
            }
          ],
          "selectOptionsProviderAction": "string",
          "section": "string",
          "hidden": "string",
          "privacy": "normal",
          "placeholder": "string",
          "isFloat": true
        }
      ],
      "implementationName": "string",
      "implementation": "string",
      "configContract": "string",
      "infoLink": "string",
      "message": {
        "message": "string",
        "type": "info"
      },
      "tags": [
        0
      ],
      "presets": [
        {}
      ],
      "enable": true,
      "protocol": "unknown",
      "priority": 0,
      "removeCompletedDownloads": true,
      "removeFailedDownloads": true
    }
  ],
  "enable": true,
  "protocol": "unknown",
  "priority": 0,
  "removeCompletedDownloads": true,
  "removeFailedDownloads": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|name|string \| null|false|none|none|
|fields|[[Field](#schemafield)]|false|none|none|
|implementationName|string \| null|false|none|none|
|implementation|string \| null|false|none|none|
|configContract|string \| null|false|none|none|
|infoLink|string \| null|false|none|none|
|message|[ProviderMessage](#schemaprovidermessage)|false|none|none|
|tags|[integer(int32)]|false|none|none|
|presets|[[DownloadClientResource](#schemadownloadclientresource)]|false|none|none|
|enable|boolean|false|none|none|
|protocol|[DownloadProtocol](#schemadownloadprotocol)|false|none|none|
|priority|integer(int32)|false|none|none|
|removeCompletedDownloads|boolean|false|none|none|
|removeFailedDownloads|boolean|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|protocol|unknown|
|protocol|usenet|
|protocol|torrent|

<h2 id="tocS_DownloadProtocol">DownloadProtocol</h2>
<!-- backwards compatibility -->
<a id="schemadownloadprotocol"></a>
<a id="schema_DownloadProtocol"></a>
<a id="tocSdownloadprotocol"></a>
<a id="tocsdownloadprotocol"></a>

```json
"unknown"
```

<h2 id="tocS_EntityHistoryEventType">EntityHistoryEventType</h2>
<!-- backwards compatibility -->
<a id="schemaentityhistoryeventtype"></a>
<a id="schema_EntityHistoryEventType"></a>
<a id="tocSentityhistoryeventtype"></a>
<a id="tocsentityhistoryeventtype"></a>

```json
"unknown"
```

<h2 id="tocS_Field">Field</h2>
<!-- backwards compatibility -->
<a id="schemafield"></a>
<a id="schema_Field"></a>
<a id="tocSfield"></a>
<a id="tocsfield"></a>

```json
{
  "order": 0,
  "name": "string",
  "label": "string",
  "unit": "string",
  "helpText": "string",
  "helpTextWarning": "string",
  "helpLink": "string",
  "value": null,
  "type": "string",
  "advanced": true,
  "selectOptions": [
    {
      "value": 0,
      "name": "string",
      "order": 0,
      "hint": "string"
    }
  ],
  "selectOptionsProviderAction": "string",
  "section": "string",
  "hidden": "string",
  "privacy": "normal",
  "placeholder": "string",
  "isFloat": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|order|integer(int32)|false|none|none|
|name|string \| null|false|none|none|
|label|string \| null|false|none|none|
|unit|string \| null|false|none|none|
|helpText|string \| null|false|none|none|
|helpTextWarning|string \| null|false|none|none|
|helpLink|string \| null|false|none|none|
|value|object \| null|false|none|none|
|type|string \| null|false|none|none|
|advanced|boolean|false|none|none|
|selectOptions|[[SelectOption](#schemaselectoption)]|false|none|none|
|selectOptionsProviderAction|string \| null|false|none|none|
|section|string \| null|false|none|none|
|hidden|string \| null|false|none|none|
|privacy|[PrivacyLevel](#schemaprivacylevel)|false|none|none|
|placeholder|string \| null|false|none|none|
|isFloat|boolean|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|privacy|normal|
|privacy|password|
|privacy|apiKey|
|privacy|userName|

<h2 id="tocS_FileDateType">FileDateType</h2>
<!-- backwards compatibility -->
<a id="schemafiledatetype"></a>
<a id="schema_FileDateType"></a>
<a id="tocSfiledatetype"></a>
<a id="tocsfiledatetype"></a>

```json
"none"
```

<h2 id="tocS_HealthCheckResult">HealthCheckResult</h2>
<!-- backwards compatibility -->
<a id="schemahealthcheckresult"></a>
<a id="schema_HealthCheckResult"></a>
<a id="tocShealthcheckresult"></a>
<a id="tocshealthcheckresult"></a>

```json
"ok"
```

<h2 id="tocS_HealthResource">HealthResource</h2>
<!-- backwards compatibility -->
<a id="schemahealthresource"></a>
<a id="schema_HealthResource"></a>
<a id="tocShealthresource"></a>
<a id="tocshealthresource"></a>

```json
{
  "id": 0,
  "source": "string",
  "type": "ok",
  "message": "string",
  "wikiUrl": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|source|string \| null|false|none|none|
|type|[HealthCheckResult](#schemahealthcheckresult)|false|none|none|
|message|string \| null|false|none|none|
|wikiUrl|string \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|ok|
|type|notice|
|type|warning|
|type|error|

<h2 id="tocS_HistoryResource">HistoryResource</h2>
<!-- backwards compatibility -->
<a id="schemahistoryresource"></a>
<a id="schema_HistoryResource"></a>
<a id="tocShistoryresource"></a>
<a id="tocshistoryresource"></a>

```json
{
  "id": 0,
  "albumId": 0,
  "artistId": 0,
  "trackId": 0,
  "sourceTitle": "string",
  "quality": {
    "quality": {
      "id": 0,
      "name": "string"
    },
    "revision": {
      "version": 0,
      "real": 0,
      "isRepack": true
    }
  },
  "customFormats": [
    {
      "id": 0,
      "name": "string",
      "includeCustomFormatWhenRenaming": true,
      "specifications": [
        {
          "id": 0,
          "name": "string",
          "implementation": "string",
          "implementationName": "string",
          "infoLink": "string",
          "negate": true,
          "required": true,
          "fields": [
            {
              "order": 0,
              "name": "string",
              "label": "string",
              "unit": "string",
              "helpText": "string",
              "helpTextWarning": "string",
              "helpLink": "string",
              "value": null,
              "type": "string",
              "advanced": true,
              "selectOptions": [
                {
                  "value": 0,
                  "name": "string",
                  "order": 0,
                  "hint": "string"
                }
              ],
              "selectOptionsProviderAction": "string",
              "section": "string",
              "hidden": "string",
              "privacy": "normal",
              "placeholder": "string",
              "isFloat": true
            }
          ],
          "presets": [
            {}
          ]
        }
      ]
    }
  ],
  "customFormatScore": 0,
  "qualityCutoffNotMet": true,
  "date": "1970-01-01T00:00:00Z",
  "downloadId": "string",
  "eventType": "unknown",
  "data": {
    "property1": "string",
    "property2": "string"
  },
  "album": {
    "id": 0,
    "title": "string",
    "disambiguation": "string",
    "overview": "string",
    "artistId": 0,
    "foreignAlbumId": "string",
    "monitored": true,
    "anyReleaseOk": true,
    "profileId": 0,
    "duration": 0,
    "albumType": "string",
    "secondaryTypes": [
      "string"
    ],
    "mediumCount": 0,
    "ratings": {
      "votes": 0,
      "value": 0
    },
    "releaseDate": "1970-01-01T00:00:00Z",
    "releases": [
      {
        "id": 0,
        "albumId": 0,
        "foreignReleaseId": "string",
        "title": "string",
        "status": "string",
        "duration": 0,
        "trackCount": 0,
        "media": [
          {
            "mediumNumber": 0,
            "mediumName": "string",
            "mediumFormat": "string"
          }
        ],
        "mediumCount": 0,
        "disambiguation": "string",
        "country": [
          "string"
        ],
        "label": [
          "string"
        ],
        "format": "string",
        "monitored": true
      }
    ],
    "genres": [
      "string"
    ],
    "media": [
      {
        "mediumNumber": 0,
        "mediumName": "string",
        "mediumFormat": "string"
      }
    ],
    "artist": {},
    "images": [
      {
        "url": "string",
        "coverType": "unknown",
        "extension": "string",
        "remoteUrl": "string"
      }
    ],
    "links": [
      {
        "url": "string",
        "name": "string"
      }
    ],
    "lastSearchTime": "1970-01-01T00:00:00Z",
    "statistics": {
      "trackFileCount": 0,
      "trackCount": 0,
      "totalTrackCount": 0,
      "sizeOnDisk": 0,
      "percentOfTracks": 0
    },
    "addOptions": {
      "addType": "automatic",
      "searchForNewAlbum": true
    },
    "remoteCover": "string"
  },
  "artist": {
    "id": 0,
    "status": "continuing",
    "ended": true,
    "artistName": "string",
    "foreignArtistId": "string",
    "mbId": "string",
    "tadbId": 0,
    "discogsId": 0,
    "allMusicId": "string",
    "overview": "string",
    "artistType": "string",
    "disambiguation": "string",
    "links": [
      {
        "url": "string",
        "name": "string"
      }
    ],
    "nextAlbum": {},
    "lastAlbum": {},
    "images": [
      {
        "url": "string",
        "coverType": "unknown",
        "extension": "string",
        "remoteUrl": "string"
      }
    ],
    "members": [
      {
        "name": "string",
        "instrument": "string",
        "images": [
          {
            "url": "string",
            "coverType": "unknown",
            "extension": "string",
            "remoteUrl": "string"
          }
        ]
      }
    ],
    "remotePoster": "string",
    "path": "string",
    "qualityProfileId": 0,
    "metadataProfileId": 0,
    "monitored": true,
    "monitorNewItems": "all",
    "rootFolderPath": "string",
    "folder": "string",
    "genres": [
      "string"
    ],
    "cleanName": "string",
    "sortName": "string",
    "tags": [
      0
    ],
    "added": "1970-01-01T00:00:00Z",
    "addOptions": {
      "monitor": "all",
      "albumsToMonitor": [
        "string"
      ],
      "monitored": true,
      "searchForMissingAlbums": true
    },
    "ratings": {
      "votes": 0,
      "value": 0
    },
    "statistics": {
      "albumCount": 0,
      "trackFileCount": 0,
      "trackCount": 0,
      "totalTrackCount": 0,
      "sizeOnDisk": 0,
      "percentOfTracks": 0
    }
  },
  "track": {
    "id": 0,
    "artistId": 0,
    "foreignTrackId": "string",
    "foreignRecordingId": "string",
    "trackFileId": 0,
    "albumId": 0,
    "explicit": true,
    "absoluteTrackNumber": 0,
    "trackNumber": "string",
    "title": "string",
    "duration": 0,
    "trackFile": {
      "id": 0,
      "artistId": 0,
      "albumId": 0,
      "path": "string",
      "size": 0,
      "dateAdded": "1970-01-01T00:00:00Z",
      "sceneName": "string",
      "releaseGroup": "string",
      "quality": {
        "quality": {
          "id": 0,
          "name": "string"
        },
        "revision": {
          "version": 0,
          "real": 0,
          "isRepack": true
        }
      },
      "qualityWeight": 0,
      "customFormats": [
        {
          "id": 0,
          "name": "string",
          "includeCustomFormatWhenRenaming": true,
          "specifications": [
            {
              "id": 0,
              "name": "string",
              "implementation": "string",
              "implementationName": "string",
              "infoLink": "string",
              "negate": true,
              "required": true,
              "fields": [
                {
                  "order": 0,
                  "name": "string",
                  "label": "string",
                  "unit": "string",
                  "helpText": "string",
                  "helpTextWarning": "string",
                  "helpLink": "string",
                  "value": null,
                  "type": "string",
                  "advanced": true,
                  "selectOptions": [
                    {
                      "value": 0,
                      "name": "string",
                      "order": 0,
                      "hint": "string"
                    }
                  ],
                  "selectOptionsProviderAction": "string",
                  "section": "string",
                  "hidden": "string",
                  "privacy": "normal",
                  "placeholder": "string",
                  "isFloat": true
                }
              ],
              "presets": [
                {}
              ]
            }
          ]
        }
      ],
      "customFormatScore": 0,
      "indexerFlags": 0,
      "mediaInfo": {
        "id": 0,
        "audioChannels": 0,
        "audioBitRate": "string",
        "audioCodec": "string",
        "audioBits": "string",
        "audioSampleRate": "string"
      },
      "qualityCutoffNotMet": true,
      "audioTags": {
        "title": "string",
        "cleanTitle": "string",
        "artistTitle": "string",
        "albumTitle": "string",
        "artistTitleInfo": {
          "title": "string",
          "titleWithoutYear": "string",
          "year": 0
        },
        "artistMBId": "string",
        "albumMBId": "string",
        "releaseMBId": "string",
        "recordingMBId": "string",
        "trackMBId": "string",
        "discNumber": 0,
        "discCount": 0,
        "country": {
          "twoLetterCode": "string",
          "name": "string"
        },
        "year": 0,
        "label": "string",
        "catalogNumber": "string",
        "disambiguation": "string",
        "duration": "string",
        "quality": {
          "quality": {
            "id": 0,
            "name": "string"
          },
          "revision": {
            "version": 0,
            "real": 0,
            "isRepack": true
          }
        },
        "mediaInfo": {
          "audioFormat": "string",
          "audioBitrate": 0,
          "audioChannels": 0,
          "audioBits": 0,
          "audioSampleRate": 0
        },
        "trackNumbers": [
          0
        ],
        "releaseGroup": "string",
        "releaseHash": "string"
      }
    },
    "mediumNumber": 0,
    "hasFile": true,
    "artist": {
      "id": 0,
      "status": "continuing",
      "ended": true,
      "artistName": "string",
      "foreignArtistId": "string",
      "mbId": "string",
      "tadbId": 0,
      "discogsId": 0,
      "allMusicId": "string",
      "overview": "string",
      "artistType": "string",
      "disambiguation": "string",
      "links": [
        {
          "url": "string",
          "name": "string"
        }
      ],
      "nextAlbum": {},
      "lastAlbum": {},
      "images": [
        {
          "url": "string",
          "coverType": "unknown",
          "extension": "string",
          "remoteUrl": "string"
        }
      ],
      "members": [
        {
          "name": "string",
          "instrument": "string",
          "images": [
            {
              "url": "string",
              "coverType": "unknown",
              "extension": "string",
              "remoteUrl": "string"
            }
          ]
        }
      ],
      "remotePoster": "string",
      "path": "string",
      "qualityProfileId": 0,
      "metadataProfileId": 0,
      "monitored": true,
      "monitorNewItems": "all",
      "rootFolderPath": "string",
      "folder": "string",
      "genres": [
        "string"
      ],
      "cleanName": "string",
      "sortName": "string",
      "tags": [
        0
      ],
      "added": "1970-01-01T00:00:00Z",
      "addOptions": {
        "monitor": "all",
        "albumsToMonitor": [
          "string"
        ],
        "monitored": true,
        "searchForMissingAlbums": true
      },
      "ratings": {
        "votes": 0,
        "value": 0
      },
      "statistics": {
        "albumCount": 0,
        "trackFileCount": 0,
        "trackCount": 0,
        "totalTrackCount": 0,
        "sizeOnDisk": 0,
        "percentOfTracks": 0
      }
    },
    "ratings": {
      "votes": 0,
      "value": 0
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|albumId|integer(int32)|false|none|none|
|artistId|integer(int32)|false|none|none|
|trackId|integer(int32)|false|none|none|
|sourceTitle|string \| null|false|none|none|
|quality|[QualityModel](#schemaqualitymodel)|false|none|none|
|customFormats|[[CustomFormatResource](#schemacustomformatresource)]|false|none|none|
|customFormatScore|integer(int32)|false|none|none|
|qualityCutoffNotMet|boolean|false|none|none|
|date|string(date-time)|false|none|none|
|downloadId|string \| null|false|none|none|
|eventType|[EntityHistoryEventType](#schemaentityhistoryeventtype)|false|none|none|
|data|object \| null|false|none|none|
|album|[AlbumResource](#schemaalbumresource)|false|none|none|
|artist|[ArtistResource](#schemaartistresource)|false|none|none|
|track|[TrackResource](#schematrackresource)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|eventType|unknown|
|eventType|grabbed|
|eventType|artistFolderImported|
|eventType|trackFileImported|
|eventType|downloadFailed|
|eventType|trackFileDeleted|
|eventType|trackFileRenamed|
|eventType|albumImportIncomplete|
|eventType|downloadImported|
|eventType|trackFileRetagged|
|eventType|downloadIgnored|

<h2 id="tocS_HistoryResourcePagingResource">HistoryResourcePagingResource</h2>
<!-- backwards compatibility -->
<a id="schemahistoryresourcepagingresource"></a>
<a id="schema_HistoryResourcePagingResource"></a>
<a id="tocShistoryresourcepagingresource"></a>
<a id="tocshistoryresourcepagingresource"></a>

```json
{
  "page": 0,
  "pageSize": 0,
  "sortKey": "string",
  "sortDirection": "default",
  "totalRecords": 0,
  "records": [
    {
      "id": 0,
      "albumId": 0,
      "artistId": 0,
      "trackId": 0,
      "sourceTitle": "string",
      "quality": {
        "quality": {
          "id": 0,
          "name": "string"
        },
        "revision": {
          "version": 0,
          "real": 0,
          "isRepack": true
        }
      },
      "customFormats": [
        {
          "id": 0,
          "name": "string",
          "includeCustomFormatWhenRenaming": true,
          "specifications": [
            {
              "id": 0,
              "name": "string",
              "implementation": "string",
              "implementationName": "string",
              "infoLink": "string",
              "negate": true,
              "required": true,
              "fields": [
                {
                  "order": 0,
                  "name": "string",
                  "label": "string",
                  "unit": "string",
                  "helpText": "string",
                  "helpTextWarning": "string",
                  "helpLink": "string",
                  "value": null,
                  "type": "string",
                  "advanced": true,
                  "selectOptions": [
                    {
                      "value": 0,
                      "name": "string",
                      "order": 0,
                      "hint": "string"
                    }
                  ],
                  "selectOptionsProviderAction": "string",
                  "section": "string",
                  "hidden": "string",
                  "privacy": "normal",
                  "placeholder": "string",
                  "isFloat": true
                }
              ],
              "presets": [
                {}
              ]
            }
          ]
        }
      ],
      "customFormatScore": 0,
      "qualityCutoffNotMet": true,
      "date": "1970-01-01T00:00:00Z",
      "downloadId": "string",
      "eventType": "unknown",
      "data": {
        "property1": "string",
        "property2": "string"
      },
      "album": {
        "id": 0,
        "title": "string",
        "disambiguation": "string",
        "overview": "string",
        "artistId": 0,
        "foreignAlbumId": "string",
        "monitored": true,
        "anyReleaseOk": true,
        "profileId": 0,
        "duration": 0,
        "albumType": "string",
        "secondaryTypes": [
          "string"
        ],
        "mediumCount": 0,
        "ratings": {
          "votes": 0,
          "value": 0
        },
        "releaseDate": "1970-01-01T00:00:00Z",
        "releases": [
          {
            "id": 0,
            "albumId": 0,
            "foreignReleaseId": "string",
            "title": "string",
            "status": "string",
            "duration": 0,
            "trackCount": 0,
            "media": [
              {
                "mediumNumber": 0,
                "mediumName": "string",
                "mediumFormat": "string"
              }
            ],
            "mediumCount": 0,
            "disambiguation": "string",
            "country": [
              "string"
            ],
            "label": [
              "string"
            ],
            "format": "string",
            "monitored": true
          }
        ],
        "genres": [
          "string"
        ],
        "media": [
          {
            "mediumNumber": 0,
            "mediumName": "string",
            "mediumFormat": "string"
          }
        ],
        "artist": {},
        "images": [
          {
            "url": "string",
            "coverType": "unknown",
            "extension": "string",
            "remoteUrl": "string"
          }
        ],
        "links": [
          {
            "url": "string",
            "name": "string"
          }
        ],
        "lastSearchTime": "1970-01-01T00:00:00Z",
        "statistics": {
          "trackFileCount": 0,
          "trackCount": 0,
          "totalTrackCount": 0,
          "sizeOnDisk": 0,
          "percentOfTracks": 0
        },
        "addOptions": {
          "addType": "automatic",
          "searchForNewAlbum": true
        },
        "remoteCover": "string"
      },
      "artist": {
        "id": 0,
        "status": "continuing",
        "ended": true,
        "artistName": "string",
        "foreignArtistId": "string",
        "mbId": "string",
        "tadbId": 0,
        "discogsId": 0,
        "allMusicId": "string",
        "overview": "string",
        "artistType": "string",
        "disambiguation": "string",
        "links": [
          {
            "url": "string",
            "name": "string"
          }
        ],
        "nextAlbum": {},
        "lastAlbum": {},
        "images": [
          {
            "url": "string",
            "coverType": "unknown",
            "extension": "string",
            "remoteUrl": "string"
          }
        ],
        "members": [
          {
            "name": "string",
            "instrument": "string",
            "images": [
              {
                "url": "string",
                "coverType": "unknown",
                "extension": "string",
                "remoteUrl": "string"
              }
            ]
          }
        ],
        "remotePoster": "string",
        "path": "string",
        "qualityProfileId": 0,
        "metadataProfileId": 0,
        "monitored": true,
        "monitorNewItems": "all",
        "rootFolderPath": "string",
        "folder": "string",
        "genres": [
          "string"
        ],
        "cleanName": "string",
        "sortName": "string",
        "tags": [
          0
        ],
        "added": "1970-01-01T00:00:00Z",
        "addOptions": {
          "monitor": "all",
          "albumsToMonitor": [
            "string"
          ],
          "monitored": true,
          "searchForMissingAlbums": true
        },
        "ratings": {
          "votes": 0,
          "value": 0
        },
        "statistics": {
          "albumCount": 0,
          "trackFileCount": 0,
          "trackCount": 0,
          "totalTrackCount": 0,
          "sizeOnDisk": 0,
          "percentOfTracks": 0
        }
      },
      "track": {
        "id": 0,
        "artistId": 0,
        "foreignTrackId": "string",
        "foreignRecordingId": "string",
        "trackFileId": 0,
        "albumId": 0,
        "explicit": true,
        "absoluteTrackNumber": 0,
        "trackNumber": "string",
        "title": "string",
        "duration": 0,
        "trackFile": {
          "id": 0,
          "artistId": 0,
          "albumId": 0,
          "path": "string",
          "size": 0,
          "dateAdded": "1970-01-01T00:00:00Z",
          "sceneName": "string",
          "releaseGroup": "string",
          "quality": {
            "quality": {
              "id": 0,
              "name": "string"
            },
            "revision": {
              "version": 0,
              "real": 0,
              "isRepack": true
            }
          },
          "qualityWeight": 0,
          "customFormats": [
            {
              "id": 0,
              "name": "string",
              "includeCustomFormatWhenRenaming": true,
              "specifications": [
                {
                  "id": 0,
                  "name": "string",
                  "implementation": "string",
                  "implementationName": "string",
                  "infoLink": "string",
                  "negate": true,
                  "required": true,
                  "fields": [
                    {
                      "order": 0,
                      "name": "string",
                      "label": "string",
                      "unit": "string",
                      "helpText": "string",
                      "helpTextWarning": "string",
                      "helpLink": "string",
                      "value": null,
                      "type": "string",
                      "advanced": true,
                      "selectOptions": [
                        {
                          "value": 0,
                          "name": "string",
                          "order": 0,
                          "hint": "string"
                        }
                      ],
                      "selectOptionsProviderAction": "string",
                      "section": "string",
                      "hidden": "string",
                      "privacy": "normal",
                      "placeholder": "string",
                      "isFloat": true
                    }
                  ],
                  "presets": [
                    {}
                  ]
                }
              ]
            }
          ],
          "customFormatScore": 0,
          "indexerFlags": 0,
          "mediaInfo": {
            "id": 0,
            "audioChannels": 0,
            "audioBitRate": "string",
            "audioCodec": "string",
            "audioBits": "string",
            "audioSampleRate": "string"
          },
          "qualityCutoffNotMet": true,
          "audioTags": {
            "title": "string",
            "cleanTitle": "string",
            "artistTitle": "string",
            "albumTitle": "string",
            "artistTitleInfo": {
              "title": "string",
              "titleWithoutYear": "string",
              "year": 0
            },
            "artistMBId": "string",
            "albumMBId": "string",
            "releaseMBId": "string",
            "recordingMBId": "string",
            "trackMBId": "string",
            "discNumber": 0,
            "discCount": 0,
            "country": {
              "twoLetterCode": "string",
              "name": "string"
            },
            "year": 0,
            "label": "string",
            "catalogNumber": "string",
            "disambiguation": "string",
            "duration": "string",
            "quality": {
              "quality": {
                "id": 0,
                "name": "string"
              },
              "revision": {
                "version": 0,
                "real": 0,
                "isRepack": true
              }
            },
            "mediaInfo": {
              "audioFormat": "string",
              "audioBitrate": 0,
              "audioChannels": 0,
              "audioBits": 0,
              "audioSampleRate": 0
            },
            "trackNumbers": [
              0
            ],
            "releaseGroup": "string",
            "releaseHash": "string"
          }
        },
        "mediumNumber": 0,
        "hasFile": true,
        "artist": {
          "id": 0,
          "status": "continuing",
          "ended": true,
          "artistName": "string",
          "foreignArtistId": "string",
          "mbId": "string",
          "tadbId": 0,
          "discogsId": 0,
          "allMusicId": "string",
          "overview": "string",
          "artistType": "string",
          "disambiguation": "string",
          "links": [
            {
              "url": "string",
              "name": "string"
            }
          ],
          "nextAlbum": {},
          "lastAlbum": {},
          "images": [
            {
              "url": "string",
              "coverType": "unknown",
              "extension": "string",
              "remoteUrl": "string"
            }
          ],
          "members": [
            {
              "name": "string",
              "instrument": "string",
              "images": [
                {
                  "url": "string",
                  "coverType": "unknown",
                  "extension": "string",
                  "remoteUrl": "string"
                }
              ]
            }
          ],
          "remotePoster": "string",
          "path": "string",
          "qualityProfileId": 0,
          "metadataProfileId": 0,
          "monitored": true,
          "monitorNewItems": "all",
          "rootFolderPath": "string",
          "folder": "string",
          "genres": [
            "string"
          ],
          "cleanName": "string",
          "sortName": "string",
          "tags": [
            0
          ],
          "added": "1970-01-01T00:00:00Z",
          "addOptions": {
            "monitor": "all",
            "albumsToMonitor": [
              "string"
            ],
            "monitored": true,
            "searchForMissingAlbums": true
          },
          "ratings": {
            "votes": 0,
            "value": 0
          },
          "statistics": {
            "albumCount": 0,
            "trackFileCount": 0,
            "trackCount": 0,
            "totalTrackCount": 0,
            "sizeOnDisk": 0,
            "percentOfTracks": 0
          }
        },
        "ratings": {
          "votes": 0,
          "value": 0
        }
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|page|integer(int32)|false|none|none|
|pageSize|integer(int32)|false|none|none|
|sortKey|string \| null|false|none|none|
|sortDirection|[SortDirection](#schemasortdirection)|false|none|none|
|totalRecords|integer(int32)|false|none|none|
|records|[[HistoryResource](#schemahistoryresource)]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|sortDirection|default|
|sortDirection|ascending|
|sortDirection|descending|

<h2 id="tocS_HostConfigResource">HostConfigResource</h2>
<!-- backwards compatibility -->
<a id="schemahostconfigresource"></a>
<a id="schema_HostConfigResource"></a>
<a id="tocShostconfigresource"></a>
<a id="tocshostconfigresource"></a>

```json
{
  "id": 0,
  "bindAddress": "string",
  "port": 0,
  "sslPort": 0,
  "enableSsl": true,
  "launchBrowser": true,
  "authenticationMethod": "none",
  "authenticationRequired": "enabled",
  "analyticsEnabled": true,
  "username": "string",
  "password": "string",
  "passwordConfirmation": "string",
  "logLevel": "string",
  "logSizeLimit": 0,
  "consoleLogLevel": "string",
  "branch": "string",
  "apiKey": "string",
  "sslCertPath": "string",
  "sslCertPassword": "string",
  "urlBase": "string",
  "instanceName": "string",
  "applicationUrl": "string",
  "updateAutomatically": true,
  "updateMechanism": "builtIn",
  "updateScriptPath": "string",
  "proxyEnabled": true,
  "proxyType": "http",
  "proxyHostname": "string",
  "proxyPort": 0,
  "proxyUsername": "string",
  "proxyPassword": "string",
  "proxyBypassFilter": "string",
  "proxyBypassLocalAddresses": true,
  "certificateValidation": "enabled",
  "backupFolder": "string",
  "backupInterval": 0,
  "backupRetention": 0,
  "trustCgnatIpAddresses": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|bindAddress|string \| null|false|none|none|
|port|integer(int32)|false|none|none|
|sslPort|integer(int32)|false|none|none|
|enableSsl|boolean|false|none|none|
|launchBrowser|boolean|false|none|none|
|authenticationMethod|[AuthenticationType](#schemaauthenticationtype)|false|none|none|
|authenticationRequired|[AuthenticationRequiredType](#schemaauthenticationrequiredtype)|false|none|none|
|analyticsEnabled|boolean|false|none|none|
|username|string \| null|false|none|none|
|password|string \| null|false|none|none|
|passwordConfirmation|string \| null|false|none|none|
|logLevel|string \| null|false|none|none|
|logSizeLimit|integer(int32)|false|none|none|
|consoleLogLevel|string \| null|false|none|none|
|branch|string \| null|false|none|none|
|apiKey|string \| null|false|none|none|
|sslCertPath|string \| null|false|none|none|
|sslCertPassword|string \| null|false|none|none|
|urlBase|string \| null|false|none|none|
|instanceName|string \| null|false|none|none|
|applicationUrl|string \| null|false|none|none|
|updateAutomatically|boolean|false|none|none|
|updateMechanism|[UpdateMechanism](#schemaupdatemechanism)|false|none|none|
|updateScriptPath|string \| null|false|none|none|
|proxyEnabled|boolean|false|none|none|
|proxyType|[ProxyType](#schemaproxytype)|false|none|none|
|proxyHostname|string \| null|false|none|none|
|proxyPort|integer(int32)|false|none|none|
|proxyUsername|string \| null|false|none|none|
|proxyPassword|string \| null|false|none|none|
|proxyBypassFilter|string \| null|false|none|none|
|proxyBypassLocalAddresses|boolean|false|none|none|
|certificateValidation|[CertificateValidationType](#schemacertificatevalidationtype)|false|none|none|
|backupFolder|string \| null|false|none|none|
|backupInterval|integer(int32)|false|none|none|
|backupRetention|integer(int32)|false|none|none|
|trustCgnatIpAddresses|boolean|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|authenticationMethod|none|
|authenticationMethod|basic|
|authenticationMethod|forms|
|authenticationMethod|external|
|authenticationRequired|enabled|
|authenticationRequired|disabledForLocalAddresses|
|updateMechanism|builtIn|
|updateMechanism|script|
|updateMechanism|external|
|updateMechanism|apt|
|updateMechanism|docker|
|proxyType|http|
|proxyType|socks4|
|proxyType|socks5|
|certificateValidation|enabled|
|certificateValidation|disabledForLocalAddresses|
|certificateValidation|disabled|

<h2 id="tocS_ImportListBulkResource">ImportListBulkResource</h2>
<!-- backwards compatibility -->
<a id="schemaimportlistbulkresource"></a>
<a id="schema_ImportListBulkResource"></a>
<a id="tocSimportlistbulkresource"></a>
<a id="tocsimportlistbulkresource"></a>

```json
{
  "ids": [
    0
  ],
  "tags": [
    0
  ],
  "applyTags": "add",
  "enableAutomaticAdd": true,
  "rootFolderPath": "string",
  "qualityProfileId": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ids|[integer(int32)]|false|none|none|
|tags|[integer(int32)]|false|none|none|
|applyTags|[ApplyTags](#schemaapplytags)|false|none|none|
|enableAutomaticAdd|boolean \| null|false|none|none|
|rootFolderPath|string \| null|false|none|none|
|qualityProfileId|integer(int32) \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|applyTags|add|
|applyTags|remove|
|applyTags|replace|

<h2 id="tocS_ImportListExclusionResource">ImportListExclusionResource</h2>
<!-- backwards compatibility -->
<a id="schemaimportlistexclusionresource"></a>
<a id="schema_ImportListExclusionResource"></a>
<a id="tocSimportlistexclusionresource"></a>
<a id="tocsimportlistexclusionresource"></a>

```json
{
  "id": 0,
  "foreignId": "string",
  "artistName": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|foreignId|string \| null|false|none|none|
|artistName|string \| null|false|none|none|

<h2 id="tocS_ImportListMonitorType">ImportListMonitorType</h2>
<!-- backwards compatibility -->
<a id="schemaimportlistmonitortype"></a>
<a id="schema_ImportListMonitorType"></a>
<a id="tocSimportlistmonitortype"></a>
<a id="tocsimportlistmonitortype"></a>

```json
"none"
```

<h2 id="tocS_ImportListResource">ImportListResource</h2>
<!-- backwards compatibility -->
<a id="schemaimportlistresource"></a>
<a id="schema_ImportListResource"></a>
<a id="tocSimportlistresource"></a>
<a id="tocsimportlistresource"></a>

```json
{
  "id": 0,
  "name": "string",
  "fields": [
    {
      "order": 0,
      "name": "string",
      "label": "string",
      "unit": "string",
      "helpText": "string",
      "helpTextWarning": "string",
      "helpLink": "string",
      "value": null,
      "type": "string",
      "advanced": true,
      "selectOptions": [
        {
          "value": 0,
          "name": "string",
          "order": 0,
          "hint": "string"
        }
      ],
      "selectOptionsProviderAction": "string",
      "section": "string",
      "hidden": "string",
      "privacy": "normal",
      "placeholder": "string",
      "isFloat": true
    }
  ],
  "implementationName": "string",
  "implementation": "string",
  "configContract": "string",
  "infoLink": "string",
  "message": {
    "message": "string",
    "type": "info"
  },
  "tags": [
    0
  ],
  "presets": [
    {
      "id": 0,
      "name": "string",
      "fields": [
        {
          "order": 0,
          "name": "string",
          "label": "string",
          "unit": "string",
          "helpText": "string",
          "helpTextWarning": "string",
          "helpLink": "string",
          "value": null,
          "type": "string",
          "advanced": true,
          "selectOptions": [
            {
              "value": 0,
              "name": "string",
              "order": 0,
              "hint": "string"
            }
          ],
          "selectOptionsProviderAction": "string",
          "section": "string",
          "hidden": "string",
          "privacy": "normal",
          "placeholder": "string",
          "isFloat": true
        }
      ],
      "implementationName": "string",
      "implementation": "string",
      "configContract": "string",
      "infoLink": "string",
      "message": {
        "message": "string",
        "type": "info"
      },
      "tags": [
        0
      ],
      "presets": [
        {}
      ],
      "enableAutomaticAdd": true,
      "shouldMonitor": "none",
      "shouldMonitorExisting": true,
      "shouldSearch": true,
      "rootFolderPath": "string",
      "monitorNewItems": "all",
      "qualityProfileId": 0,
      "metadataProfileId": 0,
      "listType": "program",
      "listOrder": 0,
      "minRefreshInterval": "string"
    }
  ],
  "enableAutomaticAdd": true,
  "shouldMonitor": "none",
  "shouldMonitorExisting": true,
  "shouldSearch": true,
  "rootFolderPath": "string",
  "monitorNewItems": "all",
  "qualityProfileId": 0,
  "metadataProfileId": 0,
  "listType": "program",
  "listOrder": 0,
  "minRefreshInterval": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|name|string \| null|false|none|none|
|fields|[[Field](#schemafield)]|false|none|none|
|implementationName|string \| null|false|none|none|
|implementation|string \| null|false|none|none|
|configContract|string \| null|false|none|none|
|infoLink|string \| null|false|none|none|
|message|[ProviderMessage](#schemaprovidermessage)|false|none|none|
|tags|[integer(int32)]|false|none|none|
|presets|[[ImportListResource](#schemaimportlistresource)]|false|none|none|
|enableAutomaticAdd|boolean|false|none|none|
|shouldMonitor|[ImportListMonitorType](#schemaimportlistmonitortype)|false|none|none|
|shouldMonitorExisting|boolean|false|none|none|
|shouldSearch|boolean|false|none|none|
|rootFolderPath|string \| null|false|none|none|
|monitorNewItems|[NewItemMonitorTypes](#schemanewitemmonitortypes)|false|none|none|
|qualityProfileId|integer(int32)|false|none|none|
|metadataProfileId|integer(int32)|false|none|none|
|listType|[ImportListType](#schemaimportlisttype)|false|none|none|
|listOrder|integer(int32)|false|none|none|
|minRefreshInterval|string(date-span)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|shouldMonitor|none|
|shouldMonitor|specificAlbum|
|shouldMonitor|entireArtist|
|monitorNewItems|all|
|monitorNewItems|none|
|monitorNewItems|new|
|listType|program|
|listType|spotify|
|listType|lastFm|
|listType|other|
|listType|advanced|

<h2 id="tocS_ImportListType">ImportListType</h2>
<!-- backwards compatibility -->
<a id="schemaimportlisttype"></a>
<a id="schema_ImportListType"></a>
<a id="tocSimportlisttype"></a>
<a id="tocsimportlisttype"></a>

```json
"program"
```

<h2 id="tocS_IndexerBulkResource">IndexerBulkResource</h2>
<!-- backwards compatibility -->
<a id="schemaindexerbulkresource"></a>
<a id="schema_IndexerBulkResource"></a>
<a id="tocSindexerbulkresource"></a>
<a id="tocsindexerbulkresource"></a>

```json
{
  "ids": [
    0
  ],
  "tags": [
    0
  ],
  "applyTags": "add",
  "enableRss": true,
  "enableAutomaticSearch": true,
  "enableInteractiveSearch": true,
  "priority": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ids|[integer(int32)]|false|none|none|
|tags|[integer(int32)]|false|none|none|
|applyTags|[ApplyTags](#schemaapplytags)|false|none|none|
|enableRss|boolean \| null|false|none|none|
|enableAutomaticSearch|boolean \| null|false|none|none|
|enableInteractiveSearch|boolean \| null|false|none|none|
|priority|integer(int32) \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|applyTags|add|
|applyTags|remove|
|applyTags|replace|

<h2 id="tocS_IndexerConfigResource">IndexerConfigResource</h2>
<!-- backwards compatibility -->
<a id="schemaindexerconfigresource"></a>
<a id="schema_IndexerConfigResource"></a>
<a id="tocSindexerconfigresource"></a>
<a id="tocsindexerconfigresource"></a>

```json
{
  "id": 0,
  "minimumAge": 0,
  "maximumSize": 0,
  "retention": 0,
  "rssSyncInterval": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|minimumAge|integer(int32)|false|none|none|
|maximumSize|integer(int32)|false|none|none|
|retention|integer(int32)|false|none|none|
|rssSyncInterval|integer(int32)|false|none|none|

<h2 id="tocS_IndexerFlagResource">IndexerFlagResource</h2>
<!-- backwards compatibility -->
<a id="schemaindexerflagresource"></a>
<a id="schema_IndexerFlagResource"></a>
<a id="tocSindexerflagresource"></a>
<a id="tocsindexerflagresource"></a>

```json
{
  "id": 0,
  "name": "string",
  "nameLower": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|name|string \| null|false|none|none|
|nameLower|string \| null|false|read-only|none|

<h2 id="tocS_IndexerResource">IndexerResource</h2>
<!-- backwards compatibility -->
<a id="schemaindexerresource"></a>
<a id="schema_IndexerResource"></a>
<a id="tocSindexerresource"></a>
<a id="tocsindexerresource"></a>

```json
{
  "id": 0,
  "name": "string",
  "fields": [
    {
      "order": 0,
      "name": "string",
      "label": "string",
      "unit": "string",
      "helpText": "string",
      "helpTextWarning": "string",
      "helpLink": "string",
      "value": null,
      "type": "string",
      "advanced": true,
      "selectOptions": [
        {
          "value": 0,
          "name": "string",
          "order": 0,
          "hint": "string"
        }
      ],
      "selectOptionsProviderAction": "string",
      "section": "string",
      "hidden": "string",
      "privacy": "normal",
      "placeholder": "string",
      "isFloat": true
    }
  ],
  "implementationName": "string",
  "implementation": "string",
  "configContract": "string",
  "infoLink": "string",
  "message": {
    "message": "string",
    "type": "info"
  },
  "tags": [
    0
  ],
  "presets": [
    {
      "id": 0,
      "name": "string",
      "fields": [
        {
          "order": 0,
          "name": "string",
          "label": "string",
          "unit": "string",
          "helpText": "string",
          "helpTextWarning": "string",
          "helpLink": "string",
          "value": null,
          "type": "string",
          "advanced": true,
          "selectOptions": [
            {
              "value": 0,
              "name": "string",
              "order": 0,
              "hint": "string"
            }
          ],
          "selectOptionsProviderAction": "string",
          "section": "string",
          "hidden": "string",
          "privacy": "normal",
          "placeholder": "string",
          "isFloat": true
        }
      ],
      "implementationName": "string",
      "implementation": "string",
      "configContract": "string",
      "infoLink": "string",
      "message": {
        "message": "string",
        "type": "info"
      },
      "tags": [
        0
      ],
      "presets": [
        {}
      ],
      "enableRss": true,
      "enableAutomaticSearch": true,
      "enableInteractiveSearch": true,
      "supportsRss": true,
      "supportsSearch": true,
      "protocol": "unknown",
      "priority": 0,
      "downloadClientId": 0
    }
  ],
  "enableRss": true,
  "enableAutomaticSearch": true,
  "enableInteractiveSearch": true,
  "supportsRss": true,
  "supportsSearch": true,
  "protocol": "unknown",
  "priority": 0,
  "downloadClientId": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|name|string \| null|false|none|none|
|fields|[[Field](#schemafield)]|false|none|none|
|implementationName|string \| null|false|none|none|
|implementation|string \| null|false|none|none|
|configContract|string \| null|false|none|none|
|infoLink|string \| null|false|none|none|
|message|[ProviderMessage](#schemaprovidermessage)|false|none|none|
|tags|[integer(int32)]|false|none|none|
|presets|[[IndexerResource](#schemaindexerresource)]|false|none|none|
|enableRss|boolean|false|none|none|
|enableAutomaticSearch|boolean|false|none|none|
|enableInteractiveSearch|boolean|false|none|none|
|supportsRss|boolean|false|none|none|
|supportsSearch|boolean|false|none|none|
|protocol|[DownloadProtocol](#schemadownloadprotocol)|false|none|none|
|priority|integer(int32)|false|none|none|
|downloadClientId|integer(int32)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|protocol|unknown|
|protocol|usenet|
|protocol|torrent|

<h2 id="tocS_IsoCountry">IsoCountry</h2>
<!-- backwards compatibility -->
<a id="schemaisocountry"></a>
<a id="schema_IsoCountry"></a>
<a id="tocSisocountry"></a>
<a id="tocsisocountry"></a>

```json
{
  "twoLetterCode": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|twoLetterCode|string \| null|false|none|none|
|name|string \| null|false|none|none|

<h2 id="tocS_LanguageResource">LanguageResource</h2>
<!-- backwards compatibility -->
<a id="schemalanguageresource"></a>
<a id="schema_LanguageResource"></a>
<a id="tocSlanguageresource"></a>
<a id="tocslanguageresource"></a>

```json
{
  "id": 0,
  "name": "string",
  "nameLower": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|name|string \| null|false|none|none|
|nameLower|string \| null|false|read-only|none|

<h2 id="tocS_Links">Links</h2>
<!-- backwards compatibility -->
<a id="schemalinks"></a>
<a id="schema_Links"></a>
<a id="tocSlinks"></a>
<a id="tocslinks"></a>

```json
{
  "url": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|url|string \| null|false|none|none|
|name|string \| null|false|none|none|

<h2 id="tocS_LocalizationResource">LocalizationResource</h2>
<!-- backwards compatibility -->
<a id="schemalocalizationresource"></a>
<a id="schema_LocalizationResource"></a>
<a id="tocSlocalizationresource"></a>
<a id="tocslocalizationresource"></a>

```json
{
  "id": 0,
  "strings": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|strings|object \| null|false|none|none|

<h2 id="tocS_LogFileResource">LogFileResource</h2>
<!-- backwards compatibility -->
<a id="schemalogfileresource"></a>
<a id="schema_LogFileResource"></a>
<a id="tocSlogfileresource"></a>
<a id="tocslogfileresource"></a>

```json
{
  "id": 0,
  "filename": "string",
  "lastWriteTime": "1970-01-01T00:00:00Z",
  "contentsUrl": "string",
  "downloadUrl": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|filename|string \| null|false|none|none|
|lastWriteTime|string(date-time)|false|none|none|
|contentsUrl|string \| null|false|none|none|
|downloadUrl|string \| null|false|none|none|

<h2 id="tocS_LogResource">LogResource</h2>
<!-- backwards compatibility -->
<a id="schemalogresource"></a>
<a id="schema_LogResource"></a>
<a id="tocSlogresource"></a>
<a id="tocslogresource"></a>

```json
{
  "id": 0,
  "time": "1970-01-01T00:00:00Z",
  "exception": "string",
  "exceptionType": "string",
  "level": "string",
  "logger": "string",
  "message": "string",
  "method": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|time|string(date-time)|false|none|none|
|exception|string \| null|false|none|none|
|exceptionType|string \| null|false|none|none|
|level|string \| null|false|none|none|
|logger|string \| null|false|none|none|
|message|string \| null|false|none|none|
|method|string \| null|false|none|none|

<h2 id="tocS_LogResourcePagingResource">LogResourcePagingResource</h2>
<!-- backwards compatibility -->
<a id="schemalogresourcepagingresource"></a>
<a id="schema_LogResourcePagingResource"></a>
<a id="tocSlogresourcepagingresource"></a>
<a id="tocslogresourcepagingresource"></a>

```json
{
  "page": 0,
  "pageSize": 0,
  "sortKey": "string",
  "sortDirection": "default",
  "totalRecords": 0,
  "records": [
    {
      "id": 0,
      "time": "1970-01-01T00:00:00Z",
      "exception": "string",
      "exceptionType": "string",
      "level": "string",
      "logger": "string",
      "message": "string",
      "method": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|page|integer(int32)|false|none|none|
|pageSize|integer(int32)|false|none|none|
|sortKey|string \| null|false|none|none|
|sortDirection|[SortDirection](#schemasortdirection)|false|none|none|
|totalRecords|integer(int32)|false|none|none|
|records|[[LogResource](#schemalogresource)]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|sortDirection|default|
|sortDirection|ascending|
|sortDirection|descending|

<h2 id="tocS_ManualImportResource">ManualImportResource</h2>
<!-- backwards compatibility -->
<a id="schemamanualimportresource"></a>
<a id="schema_ManualImportResource"></a>
<a id="tocSmanualimportresource"></a>
<a id="tocsmanualimportresource"></a>

```json
{
  "id": 0,
  "path": "string",
  "name": "string",
  "size": 0,
  "artist": {
    "id": 0,
    "status": "continuing",
    "ended": true,
    "artistName": "string",
    "foreignArtistId": "string",
    "mbId": "string",
    "tadbId": 0,
    "discogsId": 0,
    "allMusicId": "string",
    "overview": "string",
    "artistType": "string",
    "disambiguation": "string",
    "links": [
      {
        "url": "string",
        "name": "string"
      }
    ],
    "nextAlbum": {},
    "lastAlbum": {},
    "images": [
      {
        "url": "string",
        "coverType": "unknown",
        "extension": "string",
        "remoteUrl": "string"
      }
    ],
    "members": [
      {
        "name": "string",
        "instrument": "string",
        "images": [
          {
            "url": "string",
            "coverType": "unknown",
            "extension": "string",
            "remoteUrl": "string"
          }
        ]
      }
    ],
    "remotePoster": "string",
    "path": "string",
    "qualityProfileId": 0,
    "metadataProfileId": 0,
    "monitored": true,
    "monitorNewItems": "all",
    "rootFolderPath": "string",
    "folder": "string",
    "genres": [
      "string"
    ],
    "cleanName": "string",
    "sortName": "string",
    "tags": [
      0
    ],
    "added": "1970-01-01T00:00:00Z",
    "addOptions": {
      "monitor": "all",
      "albumsToMonitor": [
        "string"
      ],
      "monitored": true,
      "searchForMissingAlbums": true
    },
    "ratings": {
      "votes": 0,
      "value": 0
    },
    "statistics": {
      "albumCount": 0,
      "trackFileCount": 0,
      "trackCount": 0,
      "totalTrackCount": 0,
      "sizeOnDisk": 0,
      "percentOfTracks": 0
    }
  },
  "album": {
    "id": 0,
    "title": "string",
    "disambiguation": "string",
    "overview": "string",
    "artistId": 0,
    "foreignAlbumId": "string",
    "monitored": true,
    "anyReleaseOk": true,
    "profileId": 0,
    "duration": 0,
    "albumType": "string",
    "secondaryTypes": [
      "string"
    ],
    "mediumCount": 0,
    "ratings": {
      "votes": 0,
      "value": 0
    },
    "releaseDate": "1970-01-01T00:00:00Z",
    "releases": [
      {
        "id": 0,
        "albumId": 0,
        "foreignReleaseId": "string",
        "title": "string",
        "status": "string",
        "duration": 0,
        "trackCount": 0,
        "media": [
          {
            "mediumNumber": 0,
            "mediumName": "string",
            "mediumFormat": "string"
          }
        ],
        "mediumCount": 0,
        "disambiguation": "string",
        "country": [
          "string"
        ],
        "label": [
          "string"
        ],
        "format": "string",
        "monitored": true
      }
    ],
    "genres": [
      "string"
    ],
    "media": [
      {
        "mediumNumber": 0,
        "mediumName": "string",
        "mediumFormat": "string"
      }
    ],
    "artist": {},
    "images": [
      {
        "url": "string",
        "coverType": "unknown",
        "extension": "string",
        "remoteUrl": "string"
      }
    ],
    "links": [
      {
        "url": "string",
        "name": "string"
      }
    ],
    "lastSearchTime": "1970-01-01T00:00:00Z",
    "statistics": {
      "trackFileCount": 0,
      "trackCount": 0,
      "totalTrackCount": 0,
      "sizeOnDisk": 0,
      "percentOfTracks": 0
    },
    "addOptions": {
      "addType": "automatic",
      "searchForNewAlbum": true
    },
    "remoteCover": "string"
  },
  "albumReleaseId": 0,
  "tracks": [
    {
      "id": 0,
      "artistId": 0,
      "foreignTrackId": "string",
      "foreignRecordingId": "string",
      "trackFileId": 0,
      "albumId": 0,
      "explicit": true,
      "absoluteTrackNumber": 0,
      "trackNumber": "string",
      "title": "string",
      "duration": 0,
      "trackFile": {
        "id": 0,
        "artistId": 0,
        "albumId": 0,
        "path": "string",
        "size": 0,
        "dateAdded": "1970-01-01T00:00:00Z",
        "sceneName": "string",
        "releaseGroup": "string",
        "quality": {
          "quality": {
            "id": 0,
            "name": "string"
          },
          "revision": {
            "version": 0,
            "real": 0,
            "isRepack": true
          }
        },
        "qualityWeight": 0,
        "customFormats": [
          {
            "id": 0,
            "name": "string",
            "includeCustomFormatWhenRenaming": true,
            "specifications": [
              {
                "id": 0,
                "name": "string",
                "implementation": "string",
                "implementationName": "string",
                "infoLink": "string",
                "negate": true,
                "required": true,
                "fields": [
                  {
                    "order": 0,
                    "name": "string",
                    "label": "string",
                    "unit": "string",
                    "helpText": "string",
                    "helpTextWarning": "string",
                    "helpLink": "string",
                    "value": null,
                    "type": "string",
                    "advanced": true,
                    "selectOptions": [
                      {
                        "value": 0,
                        "name": "string",
                        "order": 0,
                        "hint": "string"
                      }
                    ],
                    "selectOptionsProviderAction": "string",
                    "section": "string",
                    "hidden": "string",
                    "privacy": "normal",
                    "placeholder": "string",
                    "isFloat": true
                  }
                ],
                "presets": [
                  {}
                ]
              }
            ]
          }
        ],
        "customFormatScore": 0,
        "indexerFlags": 0,
        "mediaInfo": {
          "id": 0,
          "audioChannels": 0,
          "audioBitRate": "string",
          "audioCodec": "string",
          "audioBits": "string",
          "audioSampleRate": "string"
        },
        "qualityCutoffNotMet": true,
        "audioTags": {
          "title": "string",
          "cleanTitle": "string",
          "artistTitle": "string",
          "albumTitle": "string",
          "artistTitleInfo": {
            "title": "string",
            "titleWithoutYear": "string",
            "year": 0
          },
          "artistMBId": "string",
          "albumMBId": "string",
          "releaseMBId": "string",
          "recordingMBId": "string",
          "trackMBId": "string",
          "discNumber": 0,
          "discCount": 0,
          "country": {
            "twoLetterCode": "string",
            "name": "string"
          },
          "year": 0,
          "label": "string",
          "catalogNumber": "string",
          "disambiguation": "string",
          "duration": "string",
          "quality": {
            "quality": {
              "id": 0,
              "name": "string"
            },
            "revision": {
              "version": 0,
              "real": 0,
              "isRepack": true
            }
          },
          "mediaInfo": {
            "audioFormat": "string",
            "audioBitrate": 0,
            "audioChannels": 0,
            "audioBits": 0,
            "audioSampleRate": 0
          },
          "trackNumbers": [
            0
          ],
          "releaseGroup": "string",
          "releaseHash": "string"
        }
      },
      "mediumNumber": 0,
      "hasFile": true,
      "artist": {
        "id": 0,
        "status": "continuing",
        "ended": true,
        "artistName": "string",
        "foreignArtistId": "string",
        "mbId": "string",
        "tadbId": 0,
        "discogsId": 0,
        "allMusicId": "string",
        "overview": "string",
        "artistType": "string",
        "disambiguation": "string",
        "links": [
          {
            "url": "string",
            "name": "string"
          }
        ],
        "nextAlbum": {},
        "lastAlbum": {},
        "images": [
          {
            "url": "string",
            "coverType": "unknown",
            "extension": "string",
            "remoteUrl": "string"
          }
        ],
        "members": [
          {
            "name": "string",
            "instrument": "string",
            "images": [
              {
                "url": "string",
                "coverType": "unknown",
                "extension": "string",
                "remoteUrl": "string"
              }
            ]
          }
        ],
        "remotePoster": "string",
        "path": "string",
        "qualityProfileId": 0,
        "metadataProfileId": 0,
        "monitored": true,
        "monitorNewItems": "all",
        "rootFolderPath": "string",
        "folder": "string",
        "genres": [
          "string"
        ],
        "cleanName": "string",
        "sortName": "string",
        "tags": [
          0
        ],
        "added": "1970-01-01T00:00:00Z",
        "addOptions": {
          "monitor": "all",
          "albumsToMonitor": [
            "string"
          ],
          "monitored": true,
          "searchForMissingAlbums": true
        },
        "ratings": {
          "votes": 0,
          "value": 0
        },
        "statistics": {
          "albumCount": 0,
          "trackFileCount": 0,
          "trackCount": 0,
          "totalTrackCount": 0,
          "sizeOnDisk": 0,
          "percentOfTracks": 0
        }
      },
      "ratings": {
        "votes": 0,
        "value": 0
      }
    }
  ],
  "quality": {
    "quality": {
      "id": 0,
      "name": "string"
    },
    "revision": {
      "version": 0,
      "real": 0,
      "isRepack": true
    }
  },
  "releaseGroup": "string",
  "qualityWeight": 0,
  "downloadId": "string",
  "indexerFlags": 0,
  "rejections": [
    {
      "reason": "string",
      "type": "permanent"
    }
  ],
  "audioTags": {
    "title": "string",
    "cleanTitle": "string",
    "artistTitle": "string",
    "albumTitle": "string",
    "artistTitleInfo": {
      "title": "string",
      "titleWithoutYear": "string",
      "year": 0
    },
    "artistMBId": "string",
    "albumMBId": "string",
    "releaseMBId": "string",
    "recordingMBId": "string",
    "trackMBId": "string",
    "discNumber": 0,
    "discCount": 0,
    "country": {
      "twoLetterCode": "string",
      "name": "string"
    },
    "year": 0,
    "label": "string",
    "catalogNumber": "string",
    "disambiguation": "string",
    "duration": "string",
    "quality": {
      "quality": {
        "id": 0,
        "name": "string"
      },
      "revision": {
        "version": 0,
        "real": 0,
        "isRepack": true
      }
    },
    "mediaInfo": {
      "audioFormat": "string",
      "audioBitrate": 0,
      "audioChannels": 0,
      "audioBits": 0,
      "audioSampleRate": 0
    },
    "trackNumbers": [
      0
    ],
    "releaseGroup": "string",
    "releaseHash": "string"
  },
  "additionalFile": true,
  "replaceExistingFiles": true,
  "disableReleaseSwitching": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|path|string \| null|false|none|none|
|name|string \| null|false|none|none|
|size|integer(int64)|false|none|none|
|artist|[ArtistResource](#schemaartistresource)|false|none|none|
|album|[AlbumResource](#schemaalbumresource)|false|none|none|
|albumReleaseId|integer(int32)|false|none|none|
|tracks|[[TrackResource](#schematrackresource)]|false|none|none|
|quality|[QualityModel](#schemaqualitymodel)|false|none|none|
|releaseGroup|string \| null|false|none|none|
|qualityWeight|integer(int32)|false|none|none|
|downloadId|string \| null|false|none|none|
|indexerFlags|integer(int32)|false|none|none|
|rejections|[[Rejection](#schemarejection)]|false|none|none|
|audioTags|[ParsedTrackInfo](#schemaparsedtrackinfo)|false|none|none|
|additionalFile|boolean|false|none|none|
|replaceExistingFiles|boolean|false|none|none|
|disableReleaseSwitching|boolean|false|none|none|

<h2 id="tocS_ManualImportUpdateResource">ManualImportUpdateResource</h2>
<!-- backwards compatibility -->
<a id="schemamanualimportupdateresource"></a>
<a id="schema_ManualImportUpdateResource"></a>
<a id="tocSmanualimportupdateresource"></a>
<a id="tocsmanualimportupdateresource"></a>

```json
{
  "id": 0,
  "path": "string",
  "name": "string",
  "artistId": 0,
  "albumId": 0,
  "albumReleaseId": 0,
  "tracks": [
    {
      "id": 0,
      "artistId": 0,
      "foreignTrackId": "string",
      "foreignRecordingId": "string",
      "trackFileId": 0,
      "albumId": 0,
      "explicit": true,
      "absoluteTrackNumber": 0,
      "trackNumber": "string",
      "title": "string",
      "duration": 0,
      "trackFile": {
        "id": 0,
        "artistId": 0,
        "albumId": 0,
        "path": "string",
        "size": 0,
        "dateAdded": "1970-01-01T00:00:00Z",
        "sceneName": "string",
        "releaseGroup": "string",
        "quality": {
          "quality": {
            "id": 0,
            "name": "string"
          },
          "revision": {
            "version": 0,
            "real": 0,
            "isRepack": true
          }
        },
        "qualityWeight": 0,
        "customFormats": [
          {
            "id": 0,
            "name": "string",
            "includeCustomFormatWhenRenaming": true,
            "specifications": [
              {
                "id": 0,
                "name": "string",
                "implementation": "string",
                "implementationName": "string",
                "infoLink": "string",
                "negate": true,
                "required": true,
                "fields": [
                  {
                    "order": 0,
                    "name": "string",
                    "label": "string",
                    "unit": "string",
                    "helpText": "string",
                    "helpTextWarning": "string",
                    "helpLink": "string",
                    "value": null,
                    "type": "string",
                    "advanced": true,
                    "selectOptions": [
                      {
                        "value": 0,
                        "name": "string",
                        "order": 0,
                        "hint": "string"
                      }
                    ],
                    "selectOptionsProviderAction": "string",
                    "section": "string",
                    "hidden": "string",
                    "privacy": "normal",
                    "placeholder": "string",
                    "isFloat": true
                  }
                ],
                "presets": [
                  {}
                ]
              }
            ]
          }
        ],
        "customFormatScore": 0,
        "indexerFlags": 0,
        "mediaInfo": {
          "id": 0,
          "audioChannels": 0,
          "audioBitRate": "string",
          "audioCodec": "string",
          "audioBits": "string",
          "audioSampleRate": "string"
        },
        "qualityCutoffNotMet": true,
        "audioTags": {
          "title": "string",
          "cleanTitle": "string",
          "artistTitle": "string",
          "albumTitle": "string",
          "artistTitleInfo": {
            "title": "string",
            "titleWithoutYear": "string",
            "year": 0
          },
          "artistMBId": "string",
          "albumMBId": "string",
          "releaseMBId": "string",
          "recordingMBId": "string",
          "trackMBId": "string",
          "discNumber": 0,
          "discCount": 0,
          "country": {
            "twoLetterCode": "string",
            "name": "string"
          },
          "year": 0,
          "label": "string",
          "catalogNumber": "string",
          "disambiguation": "string",
          "duration": "string",
          "quality": {
            "quality": {
              "id": 0,
              "name": "string"
            },
            "revision": {
              "version": 0,
              "real": 0,
              "isRepack": true
            }
          },
          "mediaInfo": {
            "audioFormat": "string",
            "audioBitrate": 0,
            "audioChannels": 0,
            "audioBits": 0,
            "audioSampleRate": 0
          },
          "trackNumbers": [
            0
          ],
          "releaseGroup": "string",
          "releaseHash": "string"
        }
      },
      "mediumNumber": 0,
      "hasFile": true,
      "artist": {
        "id": 0,
        "status": "continuing",
        "ended": true,
        "artistName": "string",
        "foreignArtistId": "string",
        "mbId": "string",
        "tadbId": 0,
        "discogsId": 0,
        "allMusicId": "string",
        "overview": "string",
        "artistType": "string",
        "disambiguation": "string",
        "links": [
          {
            "url": "string",
            "name": "string"
          }
        ],
        "nextAlbum": {},
        "lastAlbum": {},
        "images": [
          {
            "url": "string",
            "coverType": "unknown",
            "extension": "string",
            "remoteUrl": "string"
          }
        ],
        "members": [
          {
            "name": "string",
            "instrument": "string",
            "images": [
              {
                "url": "string",
                "coverType": "unknown",
                "extension": "string",
                "remoteUrl": "string"
              }
            ]
          }
        ],
        "remotePoster": "string",
        "path": "string",
        "qualityProfileId": 0,
        "metadataProfileId": 0,
        "monitored": true,
        "monitorNewItems": "all",
        "rootFolderPath": "string",
        "folder": "string",
        "genres": [
          "string"
        ],
        "cleanName": "string",
        "sortName": "string",
        "tags": [
          0
        ],
        "added": "1970-01-01T00:00:00Z",
        "addOptions": {
          "monitor": "all",
          "albumsToMonitor": [
            "string"
          ],
          "monitored": true,
          "searchForMissingAlbums": true
        },
        "ratings": {
          "votes": 0,
          "value": 0
        },
        "statistics": {
          "albumCount": 0,
          "trackFileCount": 0,
          "trackCount": 0,
          "totalTrackCount": 0,
          "sizeOnDisk": 0,
          "percentOfTracks": 0
        }
      },
      "ratings": {
        "votes": 0,
        "value": 0
      }
    }
  ],
  "trackIds": [
    0
  ],
  "quality": {
    "quality": {
      "id": 0,
      "name": "string"
    },
    "revision": {
      "version": 0,
      "real": 0,
      "isRepack": true
    }
  },
  "releaseGroup": "string",
  "indexerFlags": 0,
  "downloadId": "string",
  "additionalFile": true,
  "replaceExistingFiles": true,
  "disableReleaseSwitching": true,
  "rejections": [
    {
      "reason": "string",
      "type": "permanent"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|path|string \| null|false|none|none|
|name|string \| null|false|none|none|
|artistId|integer(int32) \| null|false|none|none|
|albumId|integer(int32) \| null|false|none|none|
|albumReleaseId|integer(int32) \| null|false|none|none|
|tracks|[[TrackResource](#schematrackresource)]|false|none|none|
|trackIds|[integer(int32)]|false|none|none|
|quality|[QualityModel](#schemaqualitymodel)|false|none|none|
|releaseGroup|string \| null|false|none|none|
|indexerFlags|integer(int32)|false|none|none|
|downloadId|string \| null|false|none|none|
|additionalFile|boolean|false|none|none|
|replaceExistingFiles|boolean|false|none|none|
|disableReleaseSwitching|boolean|false|none|none|
|rejections|[[Rejection](#schemarejection)]|false|none|none|

<h2 id="tocS_MediaCover">MediaCover</h2>
<!-- backwards compatibility -->
<a id="schemamediacover"></a>
<a id="schema_MediaCover"></a>
<a id="tocSmediacover"></a>
<a id="tocsmediacover"></a>

```json
{
  "url": "string",
  "coverType": "unknown",
  "extension": "string",
  "remoteUrl": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|url|string \| null|false|none|none|
|coverType|[MediaCoverTypes](#schemamediacovertypes)|false|none|none|
|extension|string \| null|false|read-only|none|
|remoteUrl|string \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|coverType|unknown|
|coverType|poster|
|coverType|banner|
|coverType|fanart|
|coverType|screenshot|
|coverType|headshot|
|coverType|cover|
|coverType|disc|
|coverType|logo|
|coverType|clearlogo|

<h2 id="tocS_MediaCoverTypes">MediaCoverTypes</h2>
<!-- backwards compatibility -->
<a id="schemamediacovertypes"></a>
<a id="schema_MediaCoverTypes"></a>
<a id="tocSmediacovertypes"></a>
<a id="tocsmediacovertypes"></a>

```json
"unknown"
```

<h2 id="tocS_MediaInfoModel">MediaInfoModel</h2>
<!-- backwards compatibility -->
<a id="schemamediainfomodel"></a>
<a id="schema_MediaInfoModel"></a>
<a id="tocSmediainfomodel"></a>
<a id="tocsmediainfomodel"></a>

```json
{
  "audioFormat": "string",
  "audioBitrate": 0,
  "audioChannels": 0,
  "audioBits": 0,
  "audioSampleRate": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|audioFormat|string \| null|false|none|none|
|audioBitrate|integer(int32)|false|none|none|
|audioChannels|integer(int32)|false|none|none|
|audioBits|integer(int32)|false|none|none|
|audioSampleRate|integer(int32)|false|none|none|

<h2 id="tocS_MediaInfoResource">MediaInfoResource</h2>
<!-- backwards compatibility -->
<a id="schemamediainforesource"></a>
<a id="schema_MediaInfoResource"></a>
<a id="tocSmediainforesource"></a>
<a id="tocsmediainforesource"></a>

```json
{
  "id": 0,
  "audioChannels": 0,
  "audioBitRate": "string",
  "audioCodec": "string",
  "audioBits": "string",
  "audioSampleRate": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|audioChannels|number(double)|false|none|none|
|audioBitRate|string \| null|false|none|none|
|audioCodec|string \| null|false|none|none|
|audioBits|string \| null|false|none|none|
|audioSampleRate|string \| null|false|none|none|

<h2 id="tocS_MediaManagementConfigResource">MediaManagementConfigResource</h2>
<!-- backwards compatibility -->
<a id="schemamediamanagementconfigresource"></a>
<a id="schema_MediaManagementConfigResource"></a>
<a id="tocSmediamanagementconfigresource"></a>
<a id="tocsmediamanagementconfigresource"></a>

```json
{
  "id": 0,
  "autoUnmonitorPreviouslyDownloadedTracks": true,
  "recycleBin": "string",
  "recycleBinCleanupDays": 0,
  "downloadPropersAndRepacks": "preferAndUpgrade",
  "createEmptyArtistFolders": true,
  "deleteEmptyFolders": true,
  "fileDate": "none",
  "watchLibraryForChanges": true,
  "rescanAfterRefresh": "always",
  "allowFingerprinting": "never",
  "setPermissionsLinux": true,
  "chmodFolder": "string",
  "chownGroup": "string",
  "skipFreeSpaceCheckWhenImporting": true,
  "minimumFreeSpaceWhenImporting": 0,
  "copyUsingHardlinks": true,
  "enableMediaInfo": true,
  "useScriptImport": true,
  "scriptImportPath": "string",
  "importExtraFiles": true,
  "extraFileExtensions": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|autoUnmonitorPreviouslyDownloadedTracks|boolean|false|none|none|
|recycleBin|string \| null|false|none|none|
|recycleBinCleanupDays|integer(int32)|false|none|none|
|downloadPropersAndRepacks|[ProperDownloadTypes](#schemaproperdownloadtypes)|false|none|none|
|createEmptyArtistFolders|boolean|false|none|none|
|deleteEmptyFolders|boolean|false|none|none|
|fileDate|[FileDateType](#schemafiledatetype)|false|none|none|
|watchLibraryForChanges|boolean|false|none|none|
|rescanAfterRefresh|[RescanAfterRefreshType](#schemarescanafterrefreshtype)|false|none|none|
|allowFingerprinting|[AllowFingerprinting](#schemaallowfingerprinting)|false|none|none|
|setPermissionsLinux|boolean|false|none|none|
|chmodFolder|string \| null|false|none|none|
|chownGroup|string \| null|false|none|none|
|skipFreeSpaceCheckWhenImporting|boolean|false|none|none|
|minimumFreeSpaceWhenImporting|integer(int32)|false|none|none|
|copyUsingHardlinks|boolean|false|none|none|
|enableMediaInfo|boolean|false|none|none|
|useScriptImport|boolean|false|none|none|
|scriptImportPath|string \| null|false|none|none|
|importExtraFiles|boolean|false|none|none|
|extraFileExtensions|string \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|downloadPropersAndRepacks|preferAndUpgrade|
|downloadPropersAndRepacks|doNotUpgrade|
|downloadPropersAndRepacks|doNotPrefer|
|fileDate|none|
|fileDate|albumReleaseDate|
|rescanAfterRefresh|always|
|rescanAfterRefresh|afterManual|
|rescanAfterRefresh|never|
|allowFingerprinting|never|
|allowFingerprinting|newFiles|
|allowFingerprinting|allFiles|

<h2 id="tocS_MediumResource">MediumResource</h2>
<!-- backwards compatibility -->
<a id="schemamediumresource"></a>
<a id="schema_MediumResource"></a>
<a id="tocSmediumresource"></a>
<a id="tocsmediumresource"></a>

```json
{
  "mediumNumber": 0,
  "mediumName": "string",
  "mediumFormat": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mediumNumber|integer(int32)|false|none|none|
|mediumName|string \| null|false|none|none|
|mediumFormat|string \| null|false|none|none|

<h2 id="tocS_Member">Member</h2>
<!-- backwards compatibility -->
<a id="schemamember"></a>
<a id="schema_Member"></a>
<a id="tocSmember"></a>
<a id="tocsmember"></a>

```json
{
  "name": "string",
  "instrument": "string",
  "images": [
    {
      "url": "string",
      "coverType": "unknown",
      "extension": "string",
      "remoteUrl": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string \| null|false|none|none|
|instrument|string \| null|false|none|none|
|images|[[MediaCover](#schemamediacover)]|false|none|none|

<h2 id="tocS_MetadataProfileResource">MetadataProfileResource</h2>
<!-- backwards compatibility -->
<a id="schemametadataprofileresource"></a>
<a id="schema_MetadataProfileResource"></a>
<a id="tocSmetadataprofileresource"></a>
<a id="tocsmetadataprofileresource"></a>

```json
{
  "id": 0,
  "name": "string",
  "primaryAlbumTypes": [
    {
      "id": 0,
      "albumType": {
        "id": 0,
        "name": "string"
      },
      "allowed": true
    }
  ],
  "secondaryAlbumTypes": [
    {
      "id": 0,
      "albumType": {
        "id": 0,
        "name": "string"
      },
      "allowed": true
    }
  ],
  "releaseStatuses": [
    {
      "id": 0,
      "releaseStatus": {
        "id": 0,
        "name": "string"
      },
      "allowed": true
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|name|string \| null|false|none|none|
|primaryAlbumTypes|[[ProfilePrimaryAlbumTypeItemResource](#schemaprofileprimaryalbumtypeitemresource)]|false|none|none|
|secondaryAlbumTypes|[[ProfileSecondaryAlbumTypeItemResource](#schemaprofilesecondaryalbumtypeitemresource)]|false|none|none|
|releaseStatuses|[[ProfileReleaseStatusItemResource](#schemaprofilereleasestatusitemresource)]|false|none|none|

<h2 id="tocS_MetadataProviderConfigResource">MetadataProviderConfigResource</h2>
<!-- backwards compatibility -->
<a id="schemametadataproviderconfigresource"></a>
<a id="schema_MetadataProviderConfigResource"></a>
<a id="tocSmetadataproviderconfigresource"></a>
<a id="tocsmetadataproviderconfigresource"></a>

```json
{
  "id": 0,
  "metadataSource": "string",
  "writeAudioTags": "no",
  "scrubAudioTags": true,
  "embedCoverArt": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|metadataSource|string \| null|false|none|none|
|writeAudioTags|[WriteAudioTagsType](#schemawriteaudiotagstype)|false|none|none|
|scrubAudioTags|boolean|false|none|none|
|embedCoverArt|boolean|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|writeAudioTags|no|
|writeAudioTags|newFiles|
|writeAudioTags|allFiles|
|writeAudioTags|sync|

<h2 id="tocS_MetadataResource">MetadataResource</h2>
<!-- backwards compatibility -->
<a id="schemametadataresource"></a>
<a id="schema_MetadataResource"></a>
<a id="tocSmetadataresource"></a>
<a id="tocsmetadataresource"></a>

```json
{
  "id": 0,
  "name": "string",
  "fields": [
    {
      "order": 0,
      "name": "string",
      "label": "string",
      "unit": "string",
      "helpText": "string",
      "helpTextWarning": "string",
      "helpLink": "string",
      "value": null,
      "type": "string",
      "advanced": true,
      "selectOptions": [
        {
          "value": 0,
          "name": "string",
          "order": 0,
          "hint": "string"
        }
      ],
      "selectOptionsProviderAction": "string",
      "section": "string",
      "hidden": "string",
      "privacy": "normal",
      "placeholder": "string",
      "isFloat": true
    }
  ],
  "implementationName": "string",
  "implementation": "string",
  "configContract": "string",
  "infoLink": "string",
  "message": {
    "message": "string",
    "type": "info"
  },
  "tags": [
    0
  ],
  "presets": [
    {
      "id": 0,
      "name": "string",
      "fields": [
        {
          "order": 0,
          "name": "string",
          "label": "string",
          "unit": "string",
          "helpText": "string",
          "helpTextWarning": "string",
          "helpLink": "string",
          "value": null,
          "type": "string",
          "advanced": true,
          "selectOptions": [
            {
              "value": 0,
              "name": "string",
              "order": 0,
              "hint": "string"
            }
          ],
          "selectOptionsProviderAction": "string",
          "section": "string",
          "hidden": "string",
          "privacy": "normal",
          "placeholder": "string",
          "isFloat": true
        }
      ],
      "implementationName": "string",
      "implementation": "string",
      "configContract": "string",
      "infoLink": "string",
      "message": {
        "message": "string",
        "type": "info"
      },
      "tags": [
        0
      ],
      "presets": [
        {}
      ],
      "enable": true
    }
  ],
  "enable": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|name|string \| null|false|none|none|
|fields|[[Field](#schemafield)]|false|none|none|
|implementationName|string \| null|false|none|none|
|implementation|string \| null|false|none|none|
|configContract|string \| null|false|none|none|
|infoLink|string \| null|false|none|none|
|message|[ProviderMessage](#schemaprovidermessage)|false|none|none|
|tags|[integer(int32)]|false|none|none|
|presets|[[MetadataResource](#schemametadataresource)]|false|none|none|
|enable|boolean|false|none|none|

<h2 id="tocS_MonitorTypes">MonitorTypes</h2>
<!-- backwards compatibility -->
<a id="schemamonitortypes"></a>
<a id="schema_MonitorTypes"></a>
<a id="tocSmonitortypes"></a>
<a id="tocsmonitortypes"></a>

```json
"all"
```

<h2 id="tocS_MonitoringOptions">MonitoringOptions</h2>
<!-- backwards compatibility -->
<a id="schemamonitoringoptions"></a>
<a id="schema_MonitoringOptions"></a>
<a id="tocSmonitoringoptions"></a>
<a id="tocsmonitoringoptions"></a>

```json
{
  "monitor": "all",
  "albumsToMonitor": [
    "string"
  ],
  "monitored": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|monitor|[MonitorTypes](#schemamonitortypes)|false|none|none|
|albumsToMonitor|[string]|false|none|none|
|monitored|boolean|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|monitor|all|
|monitor|future|
|monitor|missing|
|monitor|existing|
|monitor|latest|
|monitor|first|
|monitor|none|
|monitor|unknown|

<h2 id="tocS_NamingConfigResource">NamingConfigResource</h2>
<!-- backwards compatibility -->
<a id="schemanamingconfigresource"></a>
<a id="schema_NamingConfigResource"></a>
<a id="tocSnamingconfigresource"></a>
<a id="tocsnamingconfigresource"></a>

```json
{
  "id": 0,
  "renameTracks": true,
  "replaceIllegalCharacters": true,
  "colonReplacementFormat": 0,
  "standardTrackFormat": "string",
  "multiDiscTrackFormat": "string",
  "artistFolderFormat": "string",
  "includeArtistName": true,
  "includeAlbumTitle": true,
  "includeQuality": true,
  "replaceSpaces": true,
  "separator": "string",
  "numberStyle": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|renameTracks|boolean|false|none|none|
|replaceIllegalCharacters|boolean|false|none|none|
|colonReplacementFormat|integer(int32)|false|none|none|
|standardTrackFormat|string \| null|false|none|none|
|multiDiscTrackFormat|string \| null|false|none|none|
|artistFolderFormat|string \| null|false|none|none|
|includeArtistName|boolean|false|none|none|
|includeAlbumTitle|boolean|false|none|none|
|includeQuality|boolean|false|none|none|
|replaceSpaces|boolean|false|none|none|
|separator|string \| null|false|none|none|
|numberStyle|string \| null|false|none|none|

<h2 id="tocS_NewItemMonitorTypes">NewItemMonitorTypes</h2>
<!-- backwards compatibility -->
<a id="schemanewitemmonitortypes"></a>
<a id="schema_NewItemMonitorTypes"></a>
<a id="tocSnewitemmonitortypes"></a>
<a id="tocsnewitemmonitortypes"></a>

```json
"all"
```

<h2 id="tocS_NotificationResource">NotificationResource</h2>
<!-- backwards compatibility -->
<a id="schemanotificationresource"></a>
<a id="schema_NotificationResource"></a>
<a id="tocSnotificationresource"></a>
<a id="tocsnotificationresource"></a>

```json
{
  "id": 0,
  "name": "string",
  "fields": [
    {
      "order": 0,
      "name": "string",
      "label": "string",
      "unit": "string",
      "helpText": "string",
      "helpTextWarning": "string",
      "helpLink": "string",
      "value": null,
      "type": "string",
      "advanced": true,
      "selectOptions": [
        {
          "value": 0,
          "name": "string",
          "order": 0,
          "hint": "string"
        }
      ],
      "selectOptionsProviderAction": "string",
      "section": "string",
      "hidden": "string",
      "privacy": "normal",
      "placeholder": "string",
      "isFloat": true
    }
  ],
  "implementationName": "string",
  "implementation": "string",
  "configContract": "string",
  "infoLink": "string",
  "message": {
    "message": "string",
    "type": "info"
  },
  "tags": [
    0
  ],
  "presets": [
    {
      "id": 0,
      "name": "string",
      "fields": [
        {
          "order": 0,
          "name": "string",
          "label": "string",
          "unit": "string",
          "helpText": "string",
          "helpTextWarning": "string",
          "helpLink": "string",
          "value": null,
          "type": "string",
          "advanced": true,
          "selectOptions": [
            {
              "value": 0,
              "name": "string",
              "order": 0,
              "hint": "string"
            }
          ],
          "selectOptionsProviderAction": "string",
          "section": "string",
          "hidden": "string",
          "privacy": "normal",
          "placeholder": "string",
          "isFloat": true
        }
      ],
      "implementationName": "string",
      "implementation": "string",
      "configContract": "string",
      "infoLink": "string",
      "message": {
        "message": "string",
        "type": "info"
      },
      "tags": [
        0
      ],
      "presets": [
        {}
      ],
      "link": "string",
      "onGrab": true,
      "onReleaseImport": true,
      "onUpgrade": true,
      "onRename": true,
      "onArtistAdd": true,
      "onArtistDelete": true,
      "onAlbumDelete": true,
      "onHealthIssue": true,
      "onHealthRestored": true,
      "onDownloadFailure": true,
      "onImportFailure": true,
      "onTrackRetag": true,
      "onApplicationUpdate": true,
      "supportsOnGrab": true,
      "supportsOnReleaseImport": true,
      "supportsOnUpgrade": true,
      "supportsOnRename": true,
      "supportsOnArtistAdd": true,
      "supportsOnArtistDelete": true,
      "supportsOnAlbumDelete": true,
      "supportsOnHealthIssue": true,
      "supportsOnHealthRestored": true,
      "includeHealthWarnings": true,
      "supportsOnDownloadFailure": true,
      "supportsOnImportFailure": true,
      "supportsOnTrackRetag": true,
      "supportsOnApplicationUpdate": true,
      "testCommand": "string"
    }
  ],
  "link": "string",
  "onGrab": true,
  "onReleaseImport": true,
  "onUpgrade": true,
  "onRename": true,
  "onArtistAdd": true,
  "onArtistDelete": true,
  "onAlbumDelete": true,
  "onHealthIssue": true,
  "onHealthRestored": true,
  "onDownloadFailure": true,
  "onImportFailure": true,
  "onTrackRetag": true,
  "onApplicationUpdate": true,
  "supportsOnGrab": true,
  "supportsOnReleaseImport": true,
  "supportsOnUpgrade": true,
  "supportsOnRename": true,
  "supportsOnArtistAdd": true,
  "supportsOnArtistDelete": true,
  "supportsOnAlbumDelete": true,
  "supportsOnHealthIssue": true,
  "supportsOnHealthRestored": true,
  "includeHealthWarnings": true,
  "supportsOnDownloadFailure": true,
  "supportsOnImportFailure": true,
  "supportsOnTrackRetag": true,
  "supportsOnApplicationUpdate": true,
  "testCommand": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|name|string \| null|false|none|none|
|fields|[[Field](#schemafield)]|false|none|none|
|implementationName|string \| null|false|none|none|
|implementation|string \| null|false|none|none|
|configContract|string \| null|false|none|none|
|infoLink|string \| null|false|none|none|
|message|[ProviderMessage](#schemaprovidermessage)|false|none|none|
|tags|[integer(int32)]|false|none|none|
|presets|[[NotificationResource](#schemanotificationresource)]|false|none|none|
|link|string \| null|false|none|none|
|onGrab|boolean|false|none|none|
|onReleaseImport|boolean|false|none|none|
|onUpgrade|boolean|false|none|none|
|onRename|boolean|false|none|none|
|onArtistAdd|boolean|false|none|none|
|onArtistDelete|boolean|false|none|none|
|onAlbumDelete|boolean|false|none|none|
|onHealthIssue|boolean|false|none|none|
|onHealthRestored|boolean|false|none|none|
|onDownloadFailure|boolean|false|none|none|
|onImportFailure|boolean|false|none|none|
|onTrackRetag|boolean|false|none|none|
|onApplicationUpdate|boolean|false|none|none|
|supportsOnGrab|boolean|false|none|none|
|supportsOnReleaseImport|boolean|false|none|none|
|supportsOnUpgrade|boolean|false|none|none|
|supportsOnRename|boolean|false|none|none|
|supportsOnArtistAdd|boolean|false|none|none|
|supportsOnArtistDelete|boolean|false|none|none|
|supportsOnAlbumDelete|boolean|false|none|none|
|supportsOnHealthIssue|boolean|false|none|none|
|supportsOnHealthRestored|boolean|false|none|none|
|includeHealthWarnings|boolean|false|none|none|
|supportsOnDownloadFailure|boolean|false|none|none|
|supportsOnImportFailure|boolean|false|none|none|
|supportsOnTrackRetag|boolean|false|none|none|
|supportsOnApplicationUpdate|boolean|false|none|none|
|testCommand|string \| null|false|none|none|

<h2 id="tocS_ParseResource">ParseResource</h2>
<!-- backwards compatibility -->
<a id="schemaparseresource"></a>
<a id="schema_ParseResource"></a>
<a id="tocSparseresource"></a>
<a id="tocsparseresource"></a>

```json
{
  "id": 0,
  "title": "string",
  "parsedAlbumInfo": {
    "releaseTitle": "string",
    "albumTitle": "string",
    "artistName": "string",
    "albumType": "string",
    "artistTitleInfo": {
      "title": "string",
      "titleWithoutYear": "string",
      "year": 0
    },
    "quality": {
      "quality": {
        "id": 0,
        "name": "string"
      },
      "revision": {
        "version": 0,
        "real": 0,
        "isRepack": true
      }
    },
    "releaseDate": "string",
    "discography": true,
    "discographyStart": 0,
    "discographyEnd": 0,
    "releaseGroup": "string",
    "releaseHash": "string",
    "releaseVersion": "string"
  },
  "artist": {
    "id": 0,
    "status": "continuing",
    "ended": true,
    "artistName": "string",
    "foreignArtistId": "string",
    "mbId": "string",
    "tadbId": 0,
    "discogsId": 0,
    "allMusicId": "string",
    "overview": "string",
    "artistType": "string",
    "disambiguation": "string",
    "links": [
      {
        "url": "string",
        "name": "string"
      }
    ],
    "nextAlbum": {},
    "lastAlbum": {},
    "images": [
      {
        "url": "string",
        "coverType": "unknown",
        "extension": "string",
        "remoteUrl": "string"
      }
    ],
    "members": [
      {
        "name": "string",
        "instrument": "string",
        "images": [
          {
            "url": "string",
            "coverType": "unknown",
            "extension": "string",
            "remoteUrl": "string"
          }
        ]
      }
    ],
    "remotePoster": "string",
    "path": "string",
    "qualityProfileId": 0,
    "metadataProfileId": 0,
    "monitored": true,
    "monitorNewItems": "all",
    "rootFolderPath": "string",
    "folder": "string",
    "genres": [
      "string"
    ],
    "cleanName": "string",
    "sortName": "string",
    "tags": [
      0
    ],
    "added": "1970-01-01T00:00:00Z",
    "addOptions": {
      "monitor": "all",
      "albumsToMonitor": [
        "string"
      ],
      "monitored": true,
      "searchForMissingAlbums": true
    },
    "ratings": {
      "votes": 0,
      "value": 0
    },
    "statistics": {
      "albumCount": 0,
      "trackFileCount": 0,
      "trackCount": 0,
      "totalTrackCount": 0,
      "sizeOnDisk": 0,
      "percentOfTracks": 0
    }
  },
  "albums": [
    {
      "id": 0,
      "title": "string",
      "disambiguation": "string",
      "overview": "string",
      "artistId": 0,
      "foreignAlbumId": "string",
      "monitored": true,
      "anyReleaseOk": true,
      "profileId": 0,
      "duration": 0,
      "albumType": "string",
      "secondaryTypes": [
        "string"
      ],
      "mediumCount": 0,
      "ratings": {
        "votes": 0,
        "value": 0
      },
      "releaseDate": "1970-01-01T00:00:00Z",
      "releases": [
        {
          "id": 0,
          "albumId": 0,
          "foreignReleaseId": "string",
          "title": "string",
          "status": "string",
          "duration": 0,
          "trackCount": 0,
          "media": [
            {
              "mediumNumber": 0,
              "mediumName": "string",
              "mediumFormat": "string"
            }
          ],
          "mediumCount": 0,
          "disambiguation": "string",
          "country": [
            "string"
          ],
          "label": [
            "string"
          ],
          "format": "string",
          "monitored": true
        }
      ],
      "genres": [
        "string"
      ],
      "media": [
        {
          "mediumNumber": 0,
          "mediumName": "string",
          "mediumFormat": "string"
        }
      ],
      "artist": {},
      "images": [
        {
          "url": "string",
          "coverType": "unknown",
          "extension": "string",
          "remoteUrl": "string"
        }
      ],
      "links": [
        {
          "url": "string",
          "name": "string"
        }
      ],
      "lastSearchTime": "1970-01-01T00:00:00Z",
      "statistics": {
        "trackFileCount": 0,
        "trackCount": 0,
        "totalTrackCount": 0,
        "sizeOnDisk": 0,
        "percentOfTracks": 0
      },
      "addOptions": {
        "addType": "automatic",
        "searchForNewAlbum": true
      },
      "remoteCover": "string"
    }
  ],
  "customFormats": [
    {
      "id": 0,
      "name": "string",
      "includeCustomFormatWhenRenaming": true,
      "specifications": [
        {
          "id": 0,
          "name": "string",
          "implementation": "string",
          "implementationName": "string",
          "infoLink": "string",
          "negate": true,
          "required": true,
          "fields": [
            {
              "order": 0,
              "name": "string",
              "label": "string",
              "unit": "string",
              "helpText": "string",
              "helpTextWarning": "string",
              "helpLink": "string",
              "value": null,
              "type": "string",
              "advanced": true,
              "selectOptions": [
                {
                  "value": 0,
                  "name": "string",
                  "order": 0,
                  "hint": "string"
                }
              ],
              "selectOptionsProviderAction": "string",
              "section": "string",
              "hidden": "string",
              "privacy": "normal",
              "placeholder": "string",
              "isFloat": true
            }
          ],
          "presets": [
            {}
          ]
        }
      ]
    }
  ],
  "customFormatScore": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|title|string \| null|false|none|none|
|parsedAlbumInfo|[ParsedAlbumInfo](#schemaparsedalbuminfo)|false|none|none|
|artist|[ArtistResource](#schemaartistresource)|false|none|none|
|albums|[[AlbumResource](#schemaalbumresource)]|false|none|none|
|customFormats|[[CustomFormatResource](#schemacustomformatresource)]|false|none|none|
|customFormatScore|integer(int32)|false|none|none|

<h2 id="tocS_ParsedAlbumInfo">ParsedAlbumInfo</h2>
<!-- backwards compatibility -->
<a id="schemaparsedalbuminfo"></a>
<a id="schema_ParsedAlbumInfo"></a>
<a id="tocSparsedalbuminfo"></a>
<a id="tocsparsedalbuminfo"></a>

```json
{
  "releaseTitle": "string",
  "albumTitle": "string",
  "artistName": "string",
  "albumType": "string",
  "artistTitleInfo": {
    "title": "string",
    "titleWithoutYear": "string",
    "year": 0
  },
  "quality": {
    "quality": {
      "id": 0,
      "name": "string"
    },
    "revision": {
      "version": 0,
      "real": 0,
      "isRepack": true
    }
  },
  "releaseDate": "string",
  "discography": true,
  "discographyStart": 0,
  "discographyEnd": 0,
  "releaseGroup": "string",
  "releaseHash": "string",
  "releaseVersion": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|releaseTitle|string \| null|false|none|none|
|albumTitle|string \| null|false|none|none|
|artistName|string \| null|false|none|none|
|albumType|string \| null|false|none|none|
|artistTitleInfo|[ArtistTitleInfo](#schemaartisttitleinfo)|false|none|none|
|quality|[QualityModel](#schemaqualitymodel)|false|none|none|
|releaseDate|string \| null|false|none|none|
|discography|boolean|false|none|none|
|discographyStart|integer(int32)|false|none|none|
|discographyEnd|integer(int32)|false|none|none|
|releaseGroup|string \| null|false|none|none|
|releaseHash|string \| null|false|none|none|
|releaseVersion|string \| null|false|none|none|

<h2 id="tocS_ParsedTrackInfo">ParsedTrackInfo</h2>
<!-- backwards compatibility -->
<a id="schemaparsedtrackinfo"></a>
<a id="schema_ParsedTrackInfo"></a>
<a id="tocSparsedtrackinfo"></a>
<a id="tocsparsedtrackinfo"></a>

```json
{
  "title": "string",
  "cleanTitle": "string",
  "artistTitle": "string",
  "albumTitle": "string",
  "artistTitleInfo": {
    "title": "string",
    "titleWithoutYear": "string",
    "year": 0
  },
  "artistMBId": "string",
  "albumMBId": "string",
  "releaseMBId": "string",
  "recordingMBId": "string",
  "trackMBId": "string",
  "discNumber": 0,
  "discCount": 0,
  "country": {
    "twoLetterCode": "string",
    "name": "string"
  },
  "year": 0,
  "label": "string",
  "catalogNumber": "string",
  "disambiguation": "string",
  "duration": "string",
  "quality": {
    "quality": {
      "id": 0,
      "name": "string"
    },
    "revision": {
      "version": 0,
      "real": 0,
      "isRepack": true
    }
  },
  "mediaInfo": {
    "audioFormat": "string",
    "audioBitrate": 0,
    "audioChannels": 0,
    "audioBits": 0,
    "audioSampleRate": 0
  },
  "trackNumbers": [
    0
  ],
  "releaseGroup": "string",
  "releaseHash": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|title|string \| null|false|none|none|
|cleanTitle|string \| null|false|none|none|
|artistTitle|string \| null|false|none|none|
|albumTitle|string \| null|false|none|none|
|artistTitleInfo|[ArtistTitleInfo](#schemaartisttitleinfo)|false|none|none|
|artistMBId|string \| null|false|none|none|
|albumMBId|string \| null|false|none|none|
|releaseMBId|string \| null|false|none|none|
|recordingMBId|string \| null|false|none|none|
|trackMBId|string \| null|false|none|none|
|discNumber|integer(int32)|false|none|none|
|discCount|integer(int32)|false|none|none|
|country|[IsoCountry](#schemaisocountry)|false|none|none|
|year|integer(int32)|false|none|none|
|label|string \| null|false|none|none|
|catalogNumber|string \| null|false|none|none|
|disambiguation|string \| null|false|none|none|
|duration|string(date-span)|false|none|none|
|quality|[QualityModel](#schemaqualitymodel)|false|none|none|
|mediaInfo|[MediaInfoModel](#schemamediainfomodel)|false|none|none|
|trackNumbers|[integer(int32)]|false|none|none|
|releaseGroup|string \| null|false|none|none|
|releaseHash|string \| null|false|none|none|

<h2 id="tocS_PingResource">PingResource</h2>
<!-- backwards compatibility -->
<a id="schemapingresource"></a>
<a id="schema_PingResource"></a>
<a id="tocSpingresource"></a>
<a id="tocspingresource"></a>

```json
{
  "status": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string \| null|false|none|none|

<h2 id="tocS_PrimaryAlbumType">PrimaryAlbumType</h2>
<!-- backwards compatibility -->
<a id="schemaprimaryalbumtype"></a>
<a id="schema_PrimaryAlbumType"></a>
<a id="tocSprimaryalbumtype"></a>
<a id="tocsprimaryalbumtype"></a>

```json
{
  "id": 0,
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|name|string \| null|false|none|none|

<h2 id="tocS_PrivacyLevel">PrivacyLevel</h2>
<!-- backwards compatibility -->
<a id="schemaprivacylevel"></a>
<a id="schema_PrivacyLevel"></a>
<a id="tocSprivacylevel"></a>
<a id="tocsprivacylevel"></a>

```json
"normal"
```

<h2 id="tocS_ProfileFormatItemResource">ProfileFormatItemResource</h2>
<!-- backwards compatibility -->
<a id="schemaprofileformatitemresource"></a>
<a id="schema_ProfileFormatItemResource"></a>
<a id="tocSprofileformatitemresource"></a>
<a id="tocsprofileformatitemresource"></a>

```json
{
  "id": 0,
  "format": 0,
  "name": "string",
  "score": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|format|integer(int32)|false|none|none|
|name|string \| null|false|none|none|
|score|integer(int32)|false|none|none|

<h2 id="tocS_ProfilePrimaryAlbumTypeItemResource">ProfilePrimaryAlbumTypeItemResource</h2>
<!-- backwards compatibility -->
<a id="schemaprofileprimaryalbumtypeitemresource"></a>
<a id="schema_ProfilePrimaryAlbumTypeItemResource"></a>
<a id="tocSprofileprimaryalbumtypeitemresource"></a>
<a id="tocsprofileprimaryalbumtypeitemresource"></a>

```json
{
  "id": 0,
  "albumType": {
    "id": 0,
    "name": "string"
  },
  "allowed": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|albumType|[PrimaryAlbumType](#schemaprimaryalbumtype)|false|none|none|
|allowed|boolean|false|none|none|

<h2 id="tocS_ProfileReleaseStatusItemResource">ProfileReleaseStatusItemResource</h2>
<!-- backwards compatibility -->
<a id="schemaprofilereleasestatusitemresource"></a>
<a id="schema_ProfileReleaseStatusItemResource"></a>
<a id="tocSprofilereleasestatusitemresource"></a>
<a id="tocsprofilereleasestatusitemresource"></a>

```json
{
  "id": 0,
  "releaseStatus": {
    "id": 0,
    "name": "string"
  },
  "allowed": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|releaseStatus|[ReleaseStatus](#schemareleasestatus)|false|none|none|
|allowed|boolean|false|none|none|

<h2 id="tocS_ProfileSecondaryAlbumTypeItemResource">ProfileSecondaryAlbumTypeItemResource</h2>
<!-- backwards compatibility -->
<a id="schemaprofilesecondaryalbumtypeitemresource"></a>
<a id="schema_ProfileSecondaryAlbumTypeItemResource"></a>
<a id="tocSprofilesecondaryalbumtypeitemresource"></a>
<a id="tocsprofilesecondaryalbumtypeitemresource"></a>

```json
{
  "id": 0,
  "albumType": {
    "id": 0,
    "name": "string"
  },
  "allowed": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|albumType|[SecondaryAlbumType](#schemasecondaryalbumtype)|false|none|none|
|allowed|boolean|false|none|none|

<h2 id="tocS_ProperDownloadTypes">ProperDownloadTypes</h2>
<!-- backwards compatibility -->
<a id="schemaproperdownloadtypes"></a>
<a id="schema_ProperDownloadTypes"></a>
<a id="tocSproperdownloadtypes"></a>
<a id="tocsproperdownloadtypes"></a>

```json
"preferAndUpgrade"
```

<h2 id="tocS_ProviderMessage">ProviderMessage</h2>
<!-- backwards compatibility -->
<a id="schemaprovidermessage"></a>
<a id="schema_ProviderMessage"></a>
<a id="tocSprovidermessage"></a>
<a id="tocsprovidermessage"></a>

```json
{
  "message": "string",
  "type": "info"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string \| null|false|none|none|
|type|[ProviderMessageType](#schemaprovidermessagetype)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|info|
|type|warning|
|type|error|

<h2 id="tocS_ProviderMessageType">ProviderMessageType</h2>
<!-- backwards compatibility -->
<a id="schemaprovidermessagetype"></a>
<a id="schema_ProviderMessageType"></a>
<a id="tocSprovidermessagetype"></a>
<a id="tocsprovidermessagetype"></a>

```json
"info"
```

<h2 id="tocS_ProxyType">ProxyType</h2>
<!-- backwards compatibility -->
<a id="schemaproxytype"></a>
<a id="schema_ProxyType"></a>
<a id="tocSproxytype"></a>
<a id="tocsproxytype"></a>

```json
"http"
```

<h2 id="tocS_Quality">Quality</h2>
<!-- backwards compatibility -->
<a id="schemaquality"></a>
<a id="schema_Quality"></a>
<a id="tocSquality"></a>
<a id="tocsquality"></a>

```json
{
  "id": 0,
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|name|string \| null|false|none|none|

<h2 id="tocS_QualityDefinitionResource">QualityDefinitionResource</h2>
<!-- backwards compatibility -->
<a id="schemaqualitydefinitionresource"></a>
<a id="schema_QualityDefinitionResource"></a>
<a id="tocSqualitydefinitionresource"></a>
<a id="tocsqualitydefinitionresource"></a>

```json
{
  "id": 0,
  "quality": {
    "id": 0,
    "name": "string"
  },
  "title": "string",
  "weight": 0,
  "minSize": 0,
  "maxSize": 0,
  "preferredSize": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|quality|[Quality](#schemaquality)|false|none|none|
|title|string \| null|false|none|none|
|weight|integer(int32)|false|none|none|
|minSize|number(double) \| null|false|none|none|
|maxSize|number(double) \| null|false|none|none|
|preferredSize|number(double) \| null|false|none|none|

<h2 id="tocS_QualityModel">QualityModel</h2>
<!-- backwards compatibility -->
<a id="schemaqualitymodel"></a>
<a id="schema_QualityModel"></a>
<a id="tocSqualitymodel"></a>
<a id="tocsqualitymodel"></a>

```json
{
  "quality": {
    "id": 0,
    "name": "string"
  },
  "revision": {
    "version": 0,
    "real": 0,
    "isRepack": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|quality|[Quality](#schemaquality)|false|none|none|
|revision|[Revision](#schemarevision)|false|none|none|

<h2 id="tocS_QualityProfileQualityItemResource">QualityProfileQualityItemResource</h2>
<!-- backwards compatibility -->
<a id="schemaqualityprofilequalityitemresource"></a>
<a id="schema_QualityProfileQualityItemResource"></a>
<a id="tocSqualityprofilequalityitemresource"></a>
<a id="tocsqualityprofilequalityitemresource"></a>

```json
{
  "id": 0,
  "name": "string",
  "quality": {
    "id": 0,
    "name": "string"
  },
  "items": [
    {
      "id": 0,
      "name": "string",
      "quality": {
        "id": 0,
        "name": "string"
      },
      "items": [
        {}
      ],
      "allowed": true
    }
  ],
  "allowed": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|name|string \| null|false|none|none|
|quality|[Quality](#schemaquality)|false|none|none|
|items|[[QualityProfileQualityItemResource](#schemaqualityprofilequalityitemresource)]|false|none|none|
|allowed|boolean|false|none|none|

<h2 id="tocS_QualityProfileResource">QualityProfileResource</h2>
<!-- backwards compatibility -->
<a id="schemaqualityprofileresource"></a>
<a id="schema_QualityProfileResource"></a>
<a id="tocSqualityprofileresource"></a>
<a id="tocsqualityprofileresource"></a>

```json
{
  "id": 0,
  "name": "string",
  "upgradeAllowed": true,
  "cutoff": 0,
  "items": [
    {
      "id": 0,
      "name": "string",
      "quality": {
        "id": 0,
        "name": "string"
      },
      "items": [
        {}
      ],
      "allowed": true
    }
  ],
  "minFormatScore": 0,
  "cutoffFormatScore": 0,
  "formatItems": [
    {
      "id": 0,
      "format": 0,
      "name": "string",
      "score": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|name|string \| null|false|none|none|
|upgradeAllowed|boolean|false|none|none|
|cutoff|integer(int32)|false|none|none|
|items|[[QualityProfileQualityItemResource](#schemaqualityprofilequalityitemresource)]|false|none|none|
|minFormatScore|integer(int32)|false|none|none|
|cutoffFormatScore|integer(int32)|false|none|none|
|formatItems|[[ProfileFormatItemResource](#schemaprofileformatitemresource)]|false|none|none|

<h2 id="tocS_QueueBulkResource">QueueBulkResource</h2>
<!-- backwards compatibility -->
<a id="schemaqueuebulkresource"></a>
<a id="schema_QueueBulkResource"></a>
<a id="tocSqueuebulkresource"></a>
<a id="tocsqueuebulkresource"></a>

```json
{
  "ids": [
    0
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ids|[integer(int32)]|false|none|none|

<h2 id="tocS_QueueResource">QueueResource</h2>
<!-- backwards compatibility -->
<a id="schemaqueueresource"></a>
<a id="schema_QueueResource"></a>
<a id="tocSqueueresource"></a>
<a id="tocsqueueresource"></a>

```json
{
  "id": 0,
  "artistId": 0,
  "albumId": 0,
  "artist": {
    "id": 0,
    "status": "continuing",
    "ended": true,
    "artistName": "string",
    "foreignArtistId": "string",
    "mbId": "string",
    "tadbId": 0,
    "discogsId": 0,
    "allMusicId": "string",
    "overview": "string",
    "artistType": "string",
    "disambiguation": "string",
    "links": [
      {
        "url": "string",
        "name": "string"
      }
    ],
    "nextAlbum": {},
    "lastAlbum": {},
    "images": [
      {
        "url": "string",
        "coverType": "unknown",
        "extension": "string",
        "remoteUrl": "string"
      }
    ],
    "members": [
      {
        "name": "string",
        "instrument": "string",
        "images": [
          {
            "url": "string",
            "coverType": "unknown",
            "extension": "string",
            "remoteUrl": "string"
          }
        ]
      }
    ],
    "remotePoster": "string",
    "path": "string",
    "qualityProfileId": 0,
    "metadataProfileId": 0,
    "monitored": true,
    "monitorNewItems": "all",
    "rootFolderPath": "string",
    "folder": "string",
    "genres": [
      "string"
    ],
    "cleanName": "string",
    "sortName": "string",
    "tags": [
      0
    ],
    "added": "1970-01-01T00:00:00Z",
    "addOptions": {
      "monitor": "all",
      "albumsToMonitor": [
        "string"
      ],
      "monitored": true,
      "searchForMissingAlbums": true
    },
    "ratings": {
      "votes": 0,
      "value": 0
    },
    "statistics": {
      "albumCount": 0,
      "trackFileCount": 0,
      "trackCount": 0,
      "totalTrackCount": 0,
      "sizeOnDisk": 0,
      "percentOfTracks": 0
    }
  },
  "album": {
    "id": 0,
    "title": "string",
    "disambiguation": "string",
    "overview": "string",
    "artistId": 0,
    "foreignAlbumId": "string",
    "monitored": true,
    "anyReleaseOk": true,
    "profileId": 0,
    "duration": 0,
    "albumType": "string",
    "secondaryTypes": [
      "string"
    ],
    "mediumCount": 0,
    "ratings": {
      "votes": 0,
      "value": 0
    },
    "releaseDate": "1970-01-01T00:00:00Z",
    "releases": [
      {
        "id": 0,
        "albumId": 0,
        "foreignReleaseId": "string",
        "title": "string",
        "status": "string",
        "duration": 0,
        "trackCount": 0,
        "media": [
          {
            "mediumNumber": 0,
            "mediumName": "string",
            "mediumFormat": "string"
          }
        ],
        "mediumCount": 0,
        "disambiguation": "string",
        "country": [
          "string"
        ],
        "label": [
          "string"
        ],
        "format": "string",
        "monitored": true
      }
    ],
    "genres": [
      "string"
    ],
    "media": [
      {
        "mediumNumber": 0,
        "mediumName": "string",
        "mediumFormat": "string"
      }
    ],
    "artist": {},
    "images": [
      {
        "url": "string",
        "coverType": "unknown",
        "extension": "string",
        "remoteUrl": "string"
      }
    ],
    "links": [
      {
        "url": "string",
        "name": "string"
      }
    ],
    "lastSearchTime": "1970-01-01T00:00:00Z",
    "statistics": {
      "trackFileCount": 0,
      "trackCount": 0,
      "totalTrackCount": 0,
      "sizeOnDisk": 0,
      "percentOfTracks": 0
    },
    "addOptions": {
      "addType": "automatic",
      "searchForNewAlbum": true
    },
    "remoteCover": "string"
  },
  "quality": {
    "quality": {
      "id": 0,
      "name": "string"
    },
    "revision": {
      "version": 0,
      "real": 0,
      "isRepack": true
    }
  },
  "customFormats": [
    {
      "id": 0,
      "name": "string",
      "includeCustomFormatWhenRenaming": true,
      "specifications": [
        {
          "id": 0,
          "name": "string",
          "implementation": "string",
          "implementationName": "string",
          "infoLink": "string",
          "negate": true,
          "required": true,
          "fields": [
            {
              "order": 0,
              "name": "string",
              "label": "string",
              "unit": "string",
              "helpText": "string",
              "helpTextWarning": "string",
              "helpLink": "string",
              "value": null,
              "type": "string",
              "advanced": true,
              "selectOptions": [
                {
                  "value": 0,
                  "name": "string",
                  "order": 0,
                  "hint": "string"
                }
              ],
              "selectOptionsProviderAction": "string",
              "section": "string",
              "hidden": "string",
              "privacy": "normal",
              "placeholder": "string",
              "isFloat": true
            }
          ],
          "presets": [
            {}
          ]
        }
      ]
    }
  ],
  "customFormatScore": 0,
  "size": 0,
  "title": "string",
  "sizeleft": 0,
  "timeleft": "string",
  "estimatedCompletionTime": "1970-01-01T00:00:00Z",
  "added": "1970-01-01T00:00:00Z",
  "status": "string",
  "trackedDownloadStatus": "ok",
  "trackedDownloadState": "downloading",
  "statusMessages": [
    {
      "title": "string",
      "messages": [
        "string"
      ]
    }
  ],
  "errorMessage": "string",
  "downloadId": "string",
  "protocol": "unknown",
  "downloadClient": "string",
  "downloadClientHasPostImportCategory": true,
  "indexer": "string",
  "outputPath": "string",
  "trackFileCount": 0,
  "trackHasFileCount": 0,
  "downloadForced": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|artistId|integer(int32) \| null|false|none|none|
|albumId|integer(int32) \| null|false|none|none|
|artist|[ArtistResource](#schemaartistresource)|false|none|none|
|album|[AlbumResource](#schemaalbumresource)|false|none|none|
|quality|[QualityModel](#schemaqualitymodel)|false|none|none|
|customFormats|[[CustomFormatResource](#schemacustomformatresource)]|false|none|none|
|customFormatScore|integer(int32)|false|none|none|
|size|number(double)|false|none|none|
|title|string \| null|false|none|none|
|sizeleft|number(double)|false|none|none|
|timeleft|string(date-span) \| null|false|none|none|
|estimatedCompletionTime|string(date-time) \| null|false|none|none|
|added|string(date-time) \| null|false|none|none|
|status|string \| null|false|none|none|
|trackedDownloadStatus|[TrackedDownloadStatus](#schematrackeddownloadstatus)|false|none|none|
|trackedDownloadState|[TrackedDownloadState](#schematrackeddownloadstate)|false|none|none|
|statusMessages|[[TrackedDownloadStatusMessage](#schematrackeddownloadstatusmessage)]|false|none|none|
|errorMessage|string \| null|false|none|none|
|downloadId|string \| null|false|none|none|
|protocol|[DownloadProtocol](#schemadownloadprotocol)|false|none|none|
|downloadClient|string \| null|false|none|none|
|downloadClientHasPostImportCategory|boolean|false|none|none|
|indexer|string \| null|false|none|none|
|outputPath|string \| null|false|none|none|
|trackFileCount|integer(int32)|false|none|none|
|trackHasFileCount|integer(int32)|false|none|none|
|downloadForced|boolean|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|trackedDownloadStatus|ok|
|trackedDownloadStatus|warning|
|trackedDownloadStatus|error|
|trackedDownloadState|downloading|
|trackedDownloadState|downloadFailed|
|trackedDownloadState|downloadFailedPending|
|trackedDownloadState|importBlocked|
|trackedDownloadState|importPending|
|trackedDownloadState|importing|
|trackedDownloadState|importFailed|
|trackedDownloadState|imported|
|trackedDownloadState|ignored|
|protocol|unknown|
|protocol|usenet|
|protocol|torrent|

<h2 id="tocS_QueueResourcePagingResource">QueueResourcePagingResource</h2>
<!-- backwards compatibility -->
<a id="schemaqueueresourcepagingresource"></a>
<a id="schema_QueueResourcePagingResource"></a>
<a id="tocSqueueresourcepagingresource"></a>
<a id="tocsqueueresourcepagingresource"></a>

```json
{
  "page": 0,
  "pageSize": 0,
  "sortKey": "string",
  "sortDirection": "default",
  "totalRecords": 0,
  "records": [
    {
      "id": 0,
      "artistId": 0,
      "albumId": 0,
      "artist": {
        "id": 0,
        "status": "continuing",
        "ended": true,
        "artistName": "string",
        "foreignArtistId": "string",
        "mbId": "string",
        "tadbId": 0,
        "discogsId": 0,
        "allMusicId": "string",
        "overview": "string",
        "artistType": "string",
        "disambiguation": "string",
        "links": [
          {
            "url": "string",
            "name": "string"
          }
        ],
        "nextAlbum": {},
        "lastAlbum": {},
        "images": [
          {
            "url": "string",
            "coverType": "unknown",
            "extension": "string",
            "remoteUrl": "string"
          }
        ],
        "members": [
          {
            "name": "string",
            "instrument": "string",
            "images": [
              {
                "url": "string",
                "coverType": "unknown",
                "extension": "string",
                "remoteUrl": "string"
              }
            ]
          }
        ],
        "remotePoster": "string",
        "path": "string",
        "qualityProfileId": 0,
        "metadataProfileId": 0,
        "monitored": true,
        "monitorNewItems": "all",
        "rootFolderPath": "string",
        "folder": "string",
        "genres": [
          "string"
        ],
        "cleanName": "string",
        "sortName": "string",
        "tags": [
          0
        ],
        "added": "1970-01-01T00:00:00Z",
        "addOptions": {
          "monitor": "all",
          "albumsToMonitor": [
            "string"
          ],
          "monitored": true,
          "searchForMissingAlbums": true
        },
        "ratings": {
          "votes": 0,
          "value": 0
        },
        "statistics": {
          "albumCount": 0,
          "trackFileCount": 0,
          "trackCount": 0,
          "totalTrackCount": 0,
          "sizeOnDisk": 0,
          "percentOfTracks": 0
        }
      },
      "album": {
        "id": 0,
        "title": "string",
        "disambiguation": "string",
        "overview": "string",
        "artistId": 0,
        "foreignAlbumId": "string",
        "monitored": true,
        "anyReleaseOk": true,
        "profileId": 0,
        "duration": 0,
        "albumType": "string",
        "secondaryTypes": [
          "string"
        ],
        "mediumCount": 0,
        "ratings": {
          "votes": 0,
          "value": 0
        },
        "releaseDate": "1970-01-01T00:00:00Z",
        "releases": [
          {
            "id": 0,
            "albumId": 0,
            "foreignReleaseId": "string",
            "title": "string",
            "status": "string",
            "duration": 0,
            "trackCount": 0,
            "media": [
              {
                "mediumNumber": 0,
                "mediumName": "string",
                "mediumFormat": "string"
              }
            ],
            "mediumCount": 0,
            "disambiguation": "string",
            "country": [
              "string"
            ],
            "label": [
              "string"
            ],
            "format": "string",
            "monitored": true
          }
        ],
        "genres": [
          "string"
        ],
        "media": [
          {
            "mediumNumber": 0,
            "mediumName": "string",
            "mediumFormat": "string"
          }
        ],
        "artist": {},
        "images": [
          {
            "url": "string",
            "coverType": "unknown",
            "extension": "string",
            "remoteUrl": "string"
          }
        ],
        "links": [
          {
            "url": "string",
            "name": "string"
          }
        ],
        "lastSearchTime": "1970-01-01T00:00:00Z",
        "statistics": {
          "trackFileCount": 0,
          "trackCount": 0,
          "totalTrackCount": 0,
          "sizeOnDisk": 0,
          "percentOfTracks": 0
        },
        "addOptions": {
          "addType": "automatic",
          "searchForNewAlbum": true
        },
        "remoteCover": "string"
      },
      "quality": {
        "quality": {
          "id": 0,
          "name": "string"
        },
        "revision": {
          "version": 0,
          "real": 0,
          "isRepack": true
        }
      },
      "customFormats": [
        {
          "id": 0,
          "name": "string",
          "includeCustomFormatWhenRenaming": true,
          "specifications": [
            {
              "id": 0,
              "name": "string",
              "implementation": "string",
              "implementationName": "string",
              "infoLink": "string",
              "negate": true,
              "required": true,
              "fields": [
                {
                  "order": 0,
                  "name": "string",
                  "label": "string",
                  "unit": "string",
                  "helpText": "string",
                  "helpTextWarning": "string",
                  "helpLink": "string",
                  "value": null,
                  "type": "string",
                  "advanced": true,
                  "selectOptions": [
                    {
                      "value": 0,
                      "name": "string",
                      "order": 0,
                      "hint": "string"
                    }
                  ],
                  "selectOptionsProviderAction": "string",
                  "section": "string",
                  "hidden": "string",
                  "privacy": "normal",
                  "placeholder": "string",
                  "isFloat": true
                }
              ],
              "presets": [
                {}
              ]
            }
          ]
        }
      ],
      "customFormatScore": 0,
      "size": 0,
      "title": "string",
      "sizeleft": 0,
      "timeleft": "string",
      "estimatedCompletionTime": "1970-01-01T00:00:00Z",
      "added": "1970-01-01T00:00:00Z",
      "status": "string",
      "trackedDownloadStatus": "ok",
      "trackedDownloadState": "downloading",
      "statusMessages": [
        {
          "title": "string",
          "messages": [
            "string"
          ]
        }
      ],
      "errorMessage": "string",
      "downloadId": "string",
      "protocol": "unknown",
      "downloadClient": "string",
      "downloadClientHasPostImportCategory": true,
      "indexer": "string",
      "outputPath": "string",
      "trackFileCount": 0,
      "trackHasFileCount": 0,
      "downloadForced": true
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|page|integer(int32)|false|none|none|
|pageSize|integer(int32)|false|none|none|
|sortKey|string \| null|false|none|none|
|sortDirection|[SortDirection](#schemasortdirection)|false|none|none|
|totalRecords|integer(int32)|false|none|none|
|records|[[QueueResource](#schemaqueueresource)]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|sortDirection|default|
|sortDirection|ascending|
|sortDirection|descending|

<h2 id="tocS_QueueStatusResource">QueueStatusResource</h2>
<!-- backwards compatibility -->
<a id="schemaqueuestatusresource"></a>
<a id="schema_QueueStatusResource"></a>
<a id="tocSqueuestatusresource"></a>
<a id="tocsqueuestatusresource"></a>

```json
{
  "id": 0,
  "totalCount": 0,
  "count": 0,
  "unknownCount": 0,
  "errors": true,
  "warnings": true,
  "unknownErrors": true,
  "unknownWarnings": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|totalCount|integer(int32)|false|none|none|
|count|integer(int32)|false|none|none|
|unknownCount|integer(int32)|false|none|none|
|errors|boolean|false|none|none|
|warnings|boolean|false|none|none|
|unknownErrors|boolean|false|none|none|
|unknownWarnings|boolean|false|none|none|

<h2 id="tocS_Ratings">Ratings</h2>
<!-- backwards compatibility -->
<a id="schemaratings"></a>
<a id="schema_Ratings"></a>
<a id="tocSratings"></a>
<a id="tocsratings"></a>

```json
{
  "votes": 0,
  "value": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|votes|integer(int32)|false|none|none|
|value|number(double)|false|none|none|

<h2 id="tocS_Rejection">Rejection</h2>
<!-- backwards compatibility -->
<a id="schemarejection"></a>
<a id="schema_Rejection"></a>
<a id="tocSrejection"></a>
<a id="tocsrejection"></a>

```json
{
  "reason": "string",
  "type": "permanent"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reason|string \| null|false|none|none|
|type|[RejectionType](#schemarejectiontype)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|permanent|
|type|temporary|

<h2 id="tocS_RejectionType">RejectionType</h2>
<!-- backwards compatibility -->
<a id="schemarejectiontype"></a>
<a id="schema_RejectionType"></a>
<a id="tocSrejectiontype"></a>
<a id="tocsrejectiontype"></a>

```json
"permanent"
```

<h2 id="tocS_ReleaseProfileResource">ReleaseProfileResource</h2>
<!-- backwards compatibility -->
<a id="schemareleaseprofileresource"></a>
<a id="schema_ReleaseProfileResource"></a>
<a id="tocSreleaseprofileresource"></a>
<a id="tocsreleaseprofileresource"></a>

```json
{
  "id": 0,
  "enabled": true,
  "required": [
    "string"
  ],
  "ignored": [
    "string"
  ],
  "indexerId": 0,
  "tags": [
    0
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|enabled|boolean|false|none|none|
|required|[string]|false|none|none|
|ignored|[string]|false|none|none|
|indexerId|integer(int32)|false|none|none|
|tags|[integer(int32)]|false|none|none|

<h2 id="tocS_ReleaseResource">ReleaseResource</h2>
<!-- backwards compatibility -->
<a id="schemareleaseresource"></a>
<a id="schema_ReleaseResource"></a>
<a id="tocSreleaseresource"></a>
<a id="tocsreleaseresource"></a>

```json
{
  "id": 0,
  "guid": "string",
  "quality": {
    "quality": {
      "id": 0,
      "name": "string"
    },
    "revision": {
      "version": 0,
      "real": 0,
      "isRepack": true
    }
  },
  "qualityWeight": 0,
  "age": 0,
  "ageHours": 0,
  "ageMinutes": 0,
  "size": 0,
  "indexerId": 0,
  "indexer": "string",
  "releaseGroup": "string",
  "subGroup": "string",
  "releaseHash": "string",
  "title": "string",
  "discography": true,
  "sceneSource": true,
  "airDate": "string",
  "artistName": "string",
  "albumTitle": "string",
  "approved": true,
  "temporarilyRejected": true,
  "rejected": true,
  "rejections": [
    "string"
  ],
  "publishDate": "1970-01-01T00:00:00Z",
  "commentUrl": "string",
  "downloadUrl": "string",
  "infoUrl": "string",
  "downloadAllowed": true,
  "releaseWeight": 0,
  "customFormats": [
    {
      "id": 0,
      "name": "string",
      "includeCustomFormatWhenRenaming": true,
      "specifications": [
        {
          "id": 0,
          "name": "string",
          "implementation": "string",
          "implementationName": "string",
          "infoLink": "string",
          "negate": true,
          "required": true,
          "fields": [
            {
              "order": 0,
              "name": "string",
              "label": "string",
              "unit": "string",
              "helpText": "string",
              "helpTextWarning": "string",
              "helpLink": "string",
              "value": null,
              "type": "string",
              "advanced": true,
              "selectOptions": [
                {
                  "value": 0,
                  "name": "string",
                  "order": 0,
                  "hint": "string"
                }
              ],
              "selectOptionsProviderAction": "string",
              "section": "string",
              "hidden": "string",
              "privacy": "normal",
              "placeholder": "string",
              "isFloat": true
            }
          ],
          "presets": [
            {}
          ]
        }
      ]
    }
  ],
  "customFormatScore": 0,
  "magnetUrl": "string",
  "infoHash": "string",
  "seeders": 0,
  "leechers": 0,
  "protocol": "unknown",
  "indexerFlags": 0,
  "artistId": 0,
  "albumId": 0,
  "downloadClientId": 0,
  "downloadClient": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|guid|string \| null|false|none|none|
|quality|[QualityModel](#schemaqualitymodel)|false|none|none|
|qualityWeight|integer(int32)|false|none|none|
|age|integer(int32)|false|none|none|
|ageHours|number(double)|false|none|none|
|ageMinutes|number(double)|false|none|none|
|size|integer(int64)|false|none|none|
|indexerId|integer(int32)|false|none|none|
|indexer|string \| null|false|none|none|
|releaseGroup|string \| null|false|none|none|
|subGroup|string \| null|false|none|none|
|releaseHash|string \| null|false|none|none|
|title|string \| null|false|none|none|
|discography|boolean|false|none|none|
|sceneSource|boolean|false|none|none|
|airDate|string \| null|false|none|none|
|artistName|string \| null|false|none|none|
|albumTitle|string \| null|false|none|none|
|approved|boolean|false|none|none|
|temporarilyRejected|boolean|false|none|none|
|rejected|boolean|false|none|none|
|rejections|[string]|false|none|none|
|publishDate|string(date-time)|false|none|none|
|commentUrl|string \| null|false|none|none|
|downloadUrl|string \| null|false|none|none|
|infoUrl|string \| null|false|none|none|
|downloadAllowed|boolean|false|none|none|
|releaseWeight|integer(int32)|false|none|none|
|customFormats|[[CustomFormatResource](#schemacustomformatresource)]|false|none|none|
|customFormatScore|integer(int32)|false|none|none|
|magnetUrl|string \| null|false|none|none|
|infoHash|string \| null|false|none|none|
|seeders|integer(int32) \| null|false|none|none|
|leechers|integer(int32) \| null|false|none|none|
|protocol|[DownloadProtocol](#schemadownloadprotocol)|false|none|none|
|indexerFlags|integer(int32)|false|none|none|
|artistId|integer(int32) \| null|false|none|none|
|albumId|integer(int32) \| null|false|none|none|
|downloadClientId|integer(int32) \| null|false|none|none|
|downloadClient|string \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|protocol|unknown|
|protocol|usenet|
|protocol|torrent|

<h2 id="tocS_ReleaseStatus">ReleaseStatus</h2>
<!-- backwards compatibility -->
<a id="schemareleasestatus"></a>
<a id="schema_ReleaseStatus"></a>
<a id="tocSreleasestatus"></a>
<a id="tocsreleasestatus"></a>

```json
{
  "id": 0,
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|name|string \| null|false|none|none|

<h2 id="tocS_RemotePathMappingResource">RemotePathMappingResource</h2>
<!-- backwards compatibility -->
<a id="schemaremotepathmappingresource"></a>
<a id="schema_RemotePathMappingResource"></a>
<a id="tocSremotepathmappingresource"></a>
<a id="tocsremotepathmappingresource"></a>

```json
{
  "id": 0,
  "host": "string",
  "remotePath": "string",
  "localPath": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|host|string \| null|false|none|none|
|remotePath|string \| null|false|none|none|
|localPath|string \| null|false|none|none|

<h2 id="tocS_RenameTrackResource">RenameTrackResource</h2>
<!-- backwards compatibility -->
<a id="schemarenametrackresource"></a>
<a id="schema_RenameTrackResource"></a>
<a id="tocSrenametrackresource"></a>
<a id="tocsrenametrackresource"></a>

```json
{
  "id": 0,
  "artistId": 0,
  "albumId": 0,
  "trackNumbers": [
    0
  ],
  "trackFileId": 0,
  "existingPath": "string",
  "newPath": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|artistId|integer(int32)|false|none|none|
|albumId|integer(int32)|false|none|none|
|trackNumbers|[integer(int32)]|false|none|none|
|trackFileId|integer(int32)|false|none|none|
|existingPath|string \| null|false|none|none|
|newPath|string \| null|false|none|none|

<h2 id="tocS_RescanAfterRefreshType">RescanAfterRefreshType</h2>
<!-- backwards compatibility -->
<a id="schemarescanafterrefreshtype"></a>
<a id="schema_RescanAfterRefreshType"></a>
<a id="tocSrescanafterrefreshtype"></a>
<a id="tocsrescanafterrefreshtype"></a>

```json
"always"
```

<h2 id="tocS_RetagTrackResource">RetagTrackResource</h2>
<!-- backwards compatibility -->
<a id="schemaretagtrackresource"></a>
<a id="schema_RetagTrackResource"></a>
<a id="tocSretagtrackresource"></a>
<a id="tocsretagtrackresource"></a>

```json
{
  "id": 0,
  "artistId": 0,
  "albumId": 0,
  "trackNumbers": [
    0
  ],
  "trackFileId": 0,
  "path": "string",
  "changes": [
    {
      "field": "string",
      "oldValue": "string",
      "newValue": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|artistId|integer(int32)|false|none|none|
|albumId|integer(int32)|false|none|none|
|trackNumbers|[integer(int32)]|false|none|none|
|trackFileId|integer(int32)|false|none|none|
|path|string \| null|false|none|none|
|changes|[[TagDifference](#schematagdifference)]|false|none|none|

<h2 id="tocS_Revision">Revision</h2>
<!-- backwards compatibility -->
<a id="schemarevision"></a>
<a id="schema_Revision"></a>
<a id="tocSrevision"></a>
<a id="tocsrevision"></a>

```json
{
  "version": 0,
  "real": 0,
  "isRepack": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|version|integer(int32)|false|none|none|
|real|integer(int32)|false|none|none|
|isRepack|boolean|false|none|none|

<h2 id="tocS_RootFolderResource">RootFolderResource</h2>
<!-- backwards compatibility -->
<a id="schemarootfolderresource"></a>
<a id="schema_RootFolderResource"></a>
<a id="tocSrootfolderresource"></a>
<a id="tocsrootfolderresource"></a>

```json
{
  "id": 0,
  "name": "string",
  "path": "string",
  "defaultMetadataProfileId": 0,
  "defaultQualityProfileId": 0,
  "defaultMonitorOption": "all",
  "defaultNewItemMonitorOption": "all",
  "defaultTags": [
    0
  ],
  "accessible": true,
  "freeSpace": 0,
  "totalSpace": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|name|string \| null|false|none|none|
|path|string \| null|false|none|none|
|defaultMetadataProfileId|integer(int32)|false|none|none|
|defaultQualityProfileId|integer(int32)|false|none|none|
|defaultMonitorOption|[MonitorTypes](#schemamonitortypes)|false|none|none|
|defaultNewItemMonitorOption|[NewItemMonitorTypes](#schemanewitemmonitortypes)|false|none|none|
|defaultTags|[integer(int32)]|false|none|none|
|accessible|boolean|false|none|none|
|freeSpace|integer(int64) \| null|false|none|none|
|totalSpace|integer(int64) \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|defaultMonitorOption|all|
|defaultMonitorOption|future|
|defaultMonitorOption|missing|
|defaultMonitorOption|existing|
|defaultMonitorOption|latest|
|defaultMonitorOption|first|
|defaultMonitorOption|none|
|defaultMonitorOption|unknown|
|defaultNewItemMonitorOption|all|
|defaultNewItemMonitorOption|none|
|defaultNewItemMonitorOption|new|

<h2 id="tocS_RuntimeMode">RuntimeMode</h2>
<!-- backwards compatibility -->
<a id="schemaruntimemode"></a>
<a id="schema_RuntimeMode"></a>
<a id="tocSruntimemode"></a>
<a id="tocsruntimemode"></a>

```json
"console"
```

<h2 id="tocS_SearchResource">SearchResource</h2>
<!-- backwards compatibility -->
<a id="schemasearchresource"></a>
<a id="schema_SearchResource"></a>
<a id="tocSsearchresource"></a>
<a id="tocssearchresource"></a>

```json
{
  "id": 0,
  "foreignId": "string",
  "artist": {
    "id": 0,
    "status": "continuing",
    "ended": true,
    "artistName": "string",
    "foreignArtistId": "string",
    "mbId": "string",
    "tadbId": 0,
    "discogsId": 0,
    "allMusicId": "string",
    "overview": "string",
    "artistType": "string",
    "disambiguation": "string",
    "links": [
      {
        "url": "string",
        "name": "string"
      }
    ],
    "nextAlbum": {},
    "lastAlbum": {},
    "images": [
      {
        "url": "string",
        "coverType": "unknown",
        "extension": "string",
        "remoteUrl": "string"
      }
    ],
    "members": [
      {
        "name": "string",
        "instrument": "string",
        "images": [
          {
            "url": "string",
            "coverType": "unknown",
            "extension": "string",
            "remoteUrl": "string"
          }
        ]
      }
    ],
    "remotePoster": "string",
    "path": "string",
    "qualityProfileId": 0,
    "metadataProfileId": 0,
    "monitored": true,
    "monitorNewItems": "all",
    "rootFolderPath": "string",
    "folder": "string",
    "genres": [
      "string"
    ],
    "cleanName": "string",
    "sortName": "string",
    "tags": [
      0
    ],
    "added": "1970-01-01T00:00:00Z",
    "addOptions": {
      "monitor": "all",
      "albumsToMonitor": [
        "string"
      ],
      "monitored": true,
      "searchForMissingAlbums": true
    },
    "ratings": {
      "votes": 0,
      "value": 0
    },
    "statistics": {
      "albumCount": 0,
      "trackFileCount": 0,
      "trackCount": 0,
      "totalTrackCount": 0,
      "sizeOnDisk": 0,
      "percentOfTracks": 0
    }
  },
  "album": {
    "id": 0,
    "title": "string",
    "disambiguation": "string",
    "overview": "string",
    "artistId": 0,
    "foreignAlbumId": "string",
    "monitored": true,
    "anyReleaseOk": true,
    "profileId": 0,
    "duration": 0,
    "albumType": "string",
    "secondaryTypes": [
      "string"
    ],
    "mediumCount": 0,
    "ratings": {
      "votes": 0,
      "value": 0
    },
    "releaseDate": "1970-01-01T00:00:00Z",
    "releases": [
      {
        "id": 0,
        "albumId": 0,
        "foreignReleaseId": "string",
        "title": "string",
        "status": "string",
        "duration": 0,
        "trackCount": 0,
        "media": [
          {
            "mediumNumber": 0,
            "mediumName": "string",
            "mediumFormat": "string"
          }
        ],
        "mediumCount": 0,
        "disambiguation": "string",
        "country": [
          "string"
        ],
        "label": [
          "string"
        ],
        "format": "string",
        "monitored": true
      }
    ],
    "genres": [
      "string"
    ],
    "media": [
      {
        "mediumNumber": 0,
        "mediumName": "string",
        "mediumFormat": "string"
      }
    ],
    "artist": {},
    "images": [
      {
        "url": "string",
        "coverType": "unknown",
        "extension": "string",
        "remoteUrl": "string"
      }
    ],
    "links": [
      {
        "url": "string",
        "name": "string"
      }
    ],
    "lastSearchTime": "1970-01-01T00:00:00Z",
    "statistics": {
      "trackFileCount": 0,
      "trackCount": 0,
      "totalTrackCount": 0,
      "sizeOnDisk": 0,
      "percentOfTracks": 0
    },
    "addOptions": {
      "addType": "automatic",
      "searchForNewAlbum": true
    },
    "remoteCover": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|foreignId|string \| null|false|none|none|
|artist|[ArtistResource](#schemaartistresource)|false|none|none|
|album|[AlbumResource](#schemaalbumresource)|false|none|none|

<h2 id="tocS_SecondaryAlbumType">SecondaryAlbumType</h2>
<!-- backwards compatibility -->
<a id="schemasecondaryalbumtype"></a>
<a id="schema_SecondaryAlbumType"></a>
<a id="tocSsecondaryalbumtype"></a>
<a id="tocssecondaryalbumtype"></a>

```json
{
  "id": 0,
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|name|string \| null|false|none|none|

<h2 id="tocS_SelectOption">SelectOption</h2>
<!-- backwards compatibility -->
<a id="schemaselectoption"></a>
<a id="schema_SelectOption"></a>
<a id="tocSselectoption"></a>
<a id="tocsselectoption"></a>

```json
{
  "value": 0,
  "name": "string",
  "order": 0,
  "hint": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|integer(int32)|false|none|none|
|name|string \| null|false|none|none|
|order|integer(int32)|false|none|none|
|hint|string \| null|false|none|none|

<h2 id="tocS_SortDirection">SortDirection</h2>
<!-- backwards compatibility -->
<a id="schemasortdirection"></a>
<a id="schema_SortDirection"></a>
<a id="tocSsortdirection"></a>
<a id="tocssortdirection"></a>

```json
"default"
```

<h2 id="tocS_SystemResource">SystemResource</h2>
<!-- backwards compatibility -->
<a id="schemasystemresource"></a>
<a id="schema_SystemResource"></a>
<a id="tocSsystemresource"></a>
<a id="tocssystemresource"></a>

```json
{
  "appName": "string",
  "instanceName": "string",
  "version": "string",
  "buildTime": "1970-01-01T00:00:00Z",
  "isDebug": true,
  "isProduction": true,
  "isAdmin": true,
  "isUserInteractive": true,
  "startupPath": "string",
  "appData": "string",
  "osName": "string",
  "osVersion": "string",
  "isNetCore": true,
  "isLinux": true,
  "isOsx": true,
  "isWindows": true,
  "isDocker": true,
  "mode": "console",
  "branch": "string",
  "databaseType": "sqLite",
  "databaseVersion": "string",
  "authentication": "none",
  "migrationVersion": 0,
  "urlBase": "string",
  "runtimeVersion": "string",
  "runtimeName": "string",
  "startTime": "1970-01-01T00:00:00Z",
  "packageVersion": "string",
  "packageAuthor": "string",
  "packageUpdateMechanism": "builtIn",
  "packageUpdateMechanismMessage": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appName|string \| null|false|none|none|
|instanceName|string \| null|false|none|none|
|version|string \| null|false|none|none|
|buildTime|string(date-time)|false|none|none|
|isDebug|boolean|false|none|none|
|isProduction|boolean|false|none|none|
|isAdmin|boolean|false|none|none|
|isUserInteractive|boolean|false|none|none|
|startupPath|string \| null|false|none|none|
|appData|string \| null|false|none|none|
|osName|string \| null|false|none|none|
|osVersion|string \| null|false|none|none|
|isNetCore|boolean|false|none|none|
|isLinux|boolean|false|none|none|
|isOsx|boolean|false|none|none|
|isWindows|boolean|false|none|none|
|isDocker|boolean|false|none|none|
|mode|[RuntimeMode](#schemaruntimemode)|false|none|none|
|branch|string \| null|false|none|none|
|databaseType|[DatabaseType](#schemadatabasetype)|false|none|none|
|databaseVersion|string \| null|false|none|none|
|authentication|[AuthenticationType](#schemaauthenticationtype)|false|none|none|
|migrationVersion|integer(int32)|false|none|none|
|urlBase|string \| null|false|none|none|
|runtimeVersion|string \| null|false|none|none|
|runtimeName|string \| null|false|none|none|
|startTime|string(date-time)|false|none|none|
|packageVersion|string \| null|false|none|none|
|packageAuthor|string \| null|false|none|none|
|packageUpdateMechanism|[UpdateMechanism](#schemaupdatemechanism)|false|none|none|
|packageUpdateMechanismMessage|string \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|mode|console|
|mode|service|
|mode|tray|
|databaseType|sqLite|
|databaseType|postgreSQL|
|authentication|none|
|authentication|basic|
|authentication|forms|
|authentication|external|
|packageUpdateMechanism|builtIn|
|packageUpdateMechanism|script|
|packageUpdateMechanism|external|
|packageUpdateMechanism|apt|
|packageUpdateMechanism|docker|

<h2 id="tocS_TagDetailsResource">TagDetailsResource</h2>
<!-- backwards compatibility -->
<a id="schematagdetailsresource"></a>
<a id="schema_TagDetailsResource"></a>
<a id="tocStagdetailsresource"></a>
<a id="tocstagdetailsresource"></a>

```json
{
  "id": 0,
  "label": "string",
  "delayProfileIds": [
    0
  ],
  "importListIds": [
    0
  ],
  "notificationIds": [
    0
  ],
  "restrictionIds": [
    0
  ],
  "indexerIds": [
    0
  ],
  "downloadClientIds": [
    0
  ],
  "autoTagIds": [
    0
  ],
  "artistIds": [
    0
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|label|string \| null|false|none|none|
|delayProfileIds|[integer(int32)]|false|none|none|
|importListIds|[integer(int32)]|false|none|none|
|notificationIds|[integer(int32)]|false|none|none|
|restrictionIds|[integer(int32)]|false|none|none|
|indexerIds|[integer(int32)]|false|none|none|
|downloadClientIds|[integer(int32)]|false|none|none|
|autoTagIds|[integer(int32)]|false|none|none|
|artistIds|[integer(int32)]|false|none|none|

<h2 id="tocS_TagDifference">TagDifference</h2>
<!-- backwards compatibility -->
<a id="schematagdifference"></a>
<a id="schema_TagDifference"></a>
<a id="tocStagdifference"></a>
<a id="tocstagdifference"></a>

```json
{
  "field": "string",
  "oldValue": "string",
  "newValue": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|field|string \| null|false|none|none|
|oldValue|string \| null|false|none|none|
|newValue|string \| null|false|none|none|

<h2 id="tocS_TagResource">TagResource</h2>
<!-- backwards compatibility -->
<a id="schematagresource"></a>
<a id="schema_TagResource"></a>
<a id="tocStagresource"></a>
<a id="tocstagresource"></a>

```json
{
  "id": 0,
  "label": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|label|string \| null|false|none|none|

<h2 id="tocS_TaskResource">TaskResource</h2>
<!-- backwards compatibility -->
<a id="schemataskresource"></a>
<a id="schema_TaskResource"></a>
<a id="tocStaskresource"></a>
<a id="tocstaskresource"></a>

```json
{
  "id": 0,
  "name": "string",
  "taskName": "string",
  "interval": 0,
  "lastExecution": "1970-01-01T00:00:00Z",
  "lastStartTime": "1970-01-01T00:00:00Z",
  "nextExecution": "1970-01-01T00:00:00Z",
  "lastDuration": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|name|string \| null|false|none|none|
|taskName|string \| null|false|none|none|
|interval|integer(int32)|false|none|none|
|lastExecution|string(date-time)|false|none|none|
|lastStartTime|string(date-time)|false|none|none|
|nextExecution|string(date-time)|false|none|none|
|lastDuration|string(date-span)|false|read-only|none|

<h2 id="tocS_TrackFileListResource">TrackFileListResource</h2>
<!-- backwards compatibility -->
<a id="schematrackfilelistresource"></a>
<a id="schema_TrackFileListResource"></a>
<a id="tocStrackfilelistresource"></a>
<a id="tocstrackfilelistresource"></a>

```json
{
  "trackFileIds": [
    0
  ],
  "quality": {
    "quality": {
      "id": 0,
      "name": "string"
    },
    "revision": {
      "version": 0,
      "real": 0,
      "isRepack": true
    }
  },
  "sceneName": "string",
  "releaseGroup": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|trackFileIds|[integer(int32)]|false|none|none|
|quality|[QualityModel](#schemaqualitymodel)|false|none|none|
|sceneName|string \| null|false|none|none|
|releaseGroup|string \| null|false|none|none|

<h2 id="tocS_TrackFileResource">TrackFileResource</h2>
<!-- backwards compatibility -->
<a id="schematrackfileresource"></a>
<a id="schema_TrackFileResource"></a>
<a id="tocStrackfileresource"></a>
<a id="tocstrackfileresource"></a>

```json
{
  "id": 0,
  "artistId": 0,
  "albumId": 0,
  "path": "string",
  "size": 0,
  "dateAdded": "1970-01-01T00:00:00Z",
  "sceneName": "string",
  "releaseGroup": "string",
  "quality": {
    "quality": {
      "id": 0,
      "name": "string"
    },
    "revision": {
      "version": 0,
      "real": 0,
      "isRepack": true
    }
  },
  "qualityWeight": 0,
  "customFormats": [
    {
      "id": 0,
      "name": "string",
      "includeCustomFormatWhenRenaming": true,
      "specifications": [
        {
          "id": 0,
          "name": "string",
          "implementation": "string",
          "implementationName": "string",
          "infoLink": "string",
          "negate": true,
          "required": true,
          "fields": [
            {
              "order": 0,
              "name": "string",
              "label": "string",
              "unit": "string",
              "helpText": "string",
              "helpTextWarning": "string",
              "helpLink": "string",
              "value": null,
              "type": "string",
              "advanced": true,
              "selectOptions": [
                {
                  "value": 0,
                  "name": "string",
                  "order": 0,
                  "hint": "string"
                }
              ],
              "selectOptionsProviderAction": "string",
              "section": "string",
              "hidden": "string",
              "privacy": "normal",
              "placeholder": "string",
              "isFloat": true
            }
          ],
          "presets": [
            {}
          ]
        }
      ]
    }
  ],
  "customFormatScore": 0,
  "indexerFlags": 0,
  "mediaInfo": {
    "id": 0,
    "audioChannels": 0,
    "audioBitRate": "string",
    "audioCodec": "string",
    "audioBits": "string",
    "audioSampleRate": "string"
  },
  "qualityCutoffNotMet": true,
  "audioTags": {
    "title": "string",
    "cleanTitle": "string",
    "artistTitle": "string",
    "albumTitle": "string",
    "artistTitleInfo": {
      "title": "string",
      "titleWithoutYear": "string",
      "year": 0
    },
    "artistMBId": "string",
    "albumMBId": "string",
    "releaseMBId": "string",
    "recordingMBId": "string",
    "trackMBId": "string",
    "discNumber": 0,
    "discCount": 0,
    "country": {
      "twoLetterCode": "string",
      "name": "string"
    },
    "year": 0,
    "label": "string",
    "catalogNumber": "string",
    "disambiguation": "string",
    "duration": "string",
    "quality": {
      "quality": {
        "id": 0,
        "name": "string"
      },
      "revision": {
        "version": 0,
        "real": 0,
        "isRepack": true
      }
    },
    "mediaInfo": {
      "audioFormat": "string",
      "audioBitrate": 0,
      "audioChannels": 0,
      "audioBits": 0,
      "audioSampleRate": 0
    },
    "trackNumbers": [
      0
    ],
    "releaseGroup": "string",
    "releaseHash": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|artistId|integer(int32)|false|none|none|
|albumId|integer(int32)|false|none|none|
|path|string \| null|false|none|none|
|size|integer(int64)|false|none|none|
|dateAdded|string(date-time)|false|none|none|
|sceneName|string \| null|false|none|none|
|releaseGroup|string \| null|false|none|none|
|quality|[QualityModel](#schemaqualitymodel)|false|none|none|
|qualityWeight|integer(int32)|false|none|none|
|customFormats|[[CustomFormatResource](#schemacustomformatresource)]|false|none|none|
|customFormatScore|integer(int32)|false|none|none|
|indexerFlags|integer(int32) \| null|false|none|none|
|mediaInfo|[MediaInfoResource](#schemamediainforesource)|false|none|none|
|qualityCutoffNotMet|boolean|false|none|none|
|audioTags|[ParsedTrackInfo](#schemaparsedtrackinfo)|false|none|none|

<h2 id="tocS_TrackResource">TrackResource</h2>
<!-- backwards compatibility -->
<a id="schematrackresource"></a>
<a id="schema_TrackResource"></a>
<a id="tocStrackresource"></a>
<a id="tocstrackresource"></a>

```json
{
  "id": 0,
  "artistId": 0,
  "foreignTrackId": "string",
  "foreignRecordingId": "string",
  "trackFileId": 0,
  "albumId": 0,
  "explicit": true,
  "absoluteTrackNumber": 0,
  "trackNumber": "string",
  "title": "string",
  "duration": 0,
  "trackFile": {
    "id": 0,
    "artistId": 0,
    "albumId": 0,
    "path": "string",
    "size": 0,
    "dateAdded": "1970-01-01T00:00:00Z",
    "sceneName": "string",
    "releaseGroup": "string",
    "quality": {
      "quality": {
        "id": 0,
        "name": "string"
      },
      "revision": {
        "version": 0,
        "real": 0,
        "isRepack": true
      }
    },
    "qualityWeight": 0,
    "customFormats": [
      {
        "id": 0,
        "name": "string",
        "includeCustomFormatWhenRenaming": true,
        "specifications": [
          {
            "id": 0,
            "name": "string",
            "implementation": "string",
            "implementationName": "string",
            "infoLink": "string",
            "negate": true,
            "required": true,
            "fields": [
              {
                "order": 0,
                "name": "string",
                "label": "string",
                "unit": "string",
                "helpText": "string",
                "helpTextWarning": "string",
                "helpLink": "string",
                "value": null,
                "type": "string",
                "advanced": true,
                "selectOptions": [
                  {
                    "value": 0,
                    "name": "string",
                    "order": 0,
                    "hint": "string"
                  }
                ],
                "selectOptionsProviderAction": "string",
                "section": "string",
                "hidden": "string",
                "privacy": "normal",
                "placeholder": "string",
                "isFloat": true
              }
            ],
            "presets": [
              {}
            ]
          }
        ]
      }
    ],
    "customFormatScore": 0,
    "indexerFlags": 0,
    "mediaInfo": {
      "id": 0,
      "audioChannels": 0,
      "audioBitRate": "string",
      "audioCodec": "string",
      "audioBits": "string",
      "audioSampleRate": "string"
    },
    "qualityCutoffNotMet": true,
    "audioTags": {
      "title": "string",
      "cleanTitle": "string",
      "artistTitle": "string",
      "albumTitle": "string",
      "artistTitleInfo": {
        "title": "string",
        "titleWithoutYear": "string",
        "year": 0
      },
      "artistMBId": "string",
      "albumMBId": "string",
      "releaseMBId": "string",
      "recordingMBId": "string",
      "trackMBId": "string",
      "discNumber": 0,
      "discCount": 0,
      "country": {
        "twoLetterCode": "string",
        "name": "string"
      },
      "year": 0,
      "label": "string",
      "catalogNumber": "string",
      "disambiguation": "string",
      "duration": "string",
      "quality": {
        "quality": {
          "id": 0,
          "name": "string"
        },
        "revision": {
          "version": 0,
          "real": 0,
          "isRepack": true
        }
      },
      "mediaInfo": {
        "audioFormat": "string",
        "audioBitrate": 0,
        "audioChannels": 0,
        "audioBits": 0,
        "audioSampleRate": 0
      },
      "trackNumbers": [
        0
      ],
      "releaseGroup": "string",
      "releaseHash": "string"
    }
  },
  "mediumNumber": 0,
  "hasFile": true,
  "artist": {
    "id": 0,
    "status": "continuing",
    "ended": true,
    "artistName": "string",
    "foreignArtistId": "string",
    "mbId": "string",
    "tadbId": 0,
    "discogsId": 0,
    "allMusicId": "string",
    "overview": "string",
    "artistType": "string",
    "disambiguation": "string",
    "links": [
      {
        "url": "string",
        "name": "string"
      }
    ],
    "nextAlbum": {},
    "lastAlbum": {},
    "images": [
      {
        "url": "string",
        "coverType": "unknown",
        "extension": "string",
        "remoteUrl": "string"
      }
    ],
    "members": [
      {
        "name": "string",
        "instrument": "string",
        "images": [
          {
            "url": "string",
            "coverType": "unknown",
            "extension": "string",
            "remoteUrl": "string"
          }
        ]
      }
    ],
    "remotePoster": "string",
    "path": "string",
    "qualityProfileId": 0,
    "metadataProfileId": 0,
    "monitored": true,
    "monitorNewItems": "all",
    "rootFolderPath": "string",
    "folder": "string",
    "genres": [
      "string"
    ],
    "cleanName": "string",
    "sortName": "string",
    "tags": [
      0
    ],
    "added": "1970-01-01T00:00:00Z",
    "addOptions": {
      "monitor": "all",
      "albumsToMonitor": [
        "string"
      ],
      "monitored": true,
      "searchForMissingAlbums": true
    },
    "ratings": {
      "votes": 0,
      "value": 0
    },
    "statistics": {
      "albumCount": 0,
      "trackFileCount": 0,
      "trackCount": 0,
      "totalTrackCount": 0,
      "sizeOnDisk": 0,
      "percentOfTracks": 0
    }
  },
  "ratings": {
    "votes": 0,
    "value": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|artistId|integer(int32)|false|none|none|
|foreignTrackId|string \| null|false|none|none|
|foreignRecordingId|string \| null|false|none|none|
|trackFileId|integer(int32)|false|none|none|
|albumId|integer(int32)|false|none|none|
|explicit|boolean|false|none|none|
|absoluteTrackNumber|integer(int32)|false|none|none|
|trackNumber|string \| null|false|none|none|
|title|string \| null|false|none|none|
|duration|integer(int32)|false|none|none|
|trackFile|[TrackFileResource](#schematrackfileresource)|false|none|none|
|mediumNumber|integer(int32)|false|none|none|
|hasFile|boolean|false|none|none|
|artist|[ArtistResource](#schemaartistresource)|false|none|none|
|ratings|[Ratings](#schemaratings)|false|none|none|

<h2 id="tocS_TrackedDownloadState">TrackedDownloadState</h2>
<!-- backwards compatibility -->
<a id="schematrackeddownloadstate"></a>
<a id="schema_TrackedDownloadState"></a>
<a id="tocStrackeddownloadstate"></a>
<a id="tocstrackeddownloadstate"></a>

```json
"downloading"
```

<h2 id="tocS_TrackedDownloadStatus">TrackedDownloadStatus</h2>
<!-- backwards compatibility -->
<a id="schematrackeddownloadstatus"></a>
<a id="schema_TrackedDownloadStatus"></a>
<a id="tocStrackeddownloadstatus"></a>
<a id="tocstrackeddownloadstatus"></a>

```json
"ok"
```

<h2 id="tocS_TrackedDownloadStatusMessage">TrackedDownloadStatusMessage</h2>
<!-- backwards compatibility -->
<a id="schematrackeddownloadstatusmessage"></a>
<a id="schema_TrackedDownloadStatusMessage"></a>
<a id="tocStrackeddownloadstatusmessage"></a>
<a id="tocstrackeddownloadstatusmessage"></a>

```json
{
  "title": "string",
  "messages": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|title|string \| null|false|none|none|
|messages|[string]|false|none|none|

<h2 id="tocS_UiConfigResource">UiConfigResource</h2>
<!-- backwards compatibility -->
<a id="schemauiconfigresource"></a>
<a id="schema_UiConfigResource"></a>
<a id="tocSuiconfigresource"></a>
<a id="tocsuiconfigresource"></a>

```json
{
  "id": 0,
  "firstDayOfWeek": 0,
  "calendarWeekColumnHeader": "string",
  "shortDateFormat": "string",
  "longDateFormat": "string",
  "timeFormat": "string",
  "showRelativeDates": true,
  "enableColorImpairedMode": true,
  "uiLanguage": 0,
  "expandAlbumByDefault": true,
  "expandSingleByDefault": true,
  "expandEPByDefault": true,
  "expandBroadcastByDefault": true,
  "expandOtherByDefault": true,
  "theme": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|firstDayOfWeek|integer(int32)|false|none|none|
|calendarWeekColumnHeader|string \| null|false|none|none|
|shortDateFormat|string \| null|false|none|none|
|longDateFormat|string \| null|false|none|none|
|timeFormat|string \| null|false|none|none|
|showRelativeDates|boolean|false|none|none|
|enableColorImpairedMode|boolean|false|none|none|
|uiLanguage|integer(int32)|false|none|none|
|expandAlbumByDefault|boolean|false|none|none|
|expandSingleByDefault|boolean|false|none|none|
|expandEPByDefault|boolean|false|none|none|
|expandBroadcastByDefault|boolean|false|none|none|
|expandOtherByDefault|boolean|false|none|none|
|theme|string \| null|false|none|none|

<h2 id="tocS_UpdateChanges">UpdateChanges</h2>
<!-- backwards compatibility -->
<a id="schemaupdatechanges"></a>
<a id="schema_UpdateChanges"></a>
<a id="tocSupdatechanges"></a>
<a id="tocsupdatechanges"></a>

```json
{
  "new": [
    "string"
  ],
  "fixed": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|new|[string]|false|none|none|
|fixed|[string]|false|none|none|

<h2 id="tocS_UpdateMechanism">UpdateMechanism</h2>
<!-- backwards compatibility -->
<a id="schemaupdatemechanism"></a>
<a id="schema_UpdateMechanism"></a>
<a id="tocSupdatemechanism"></a>
<a id="tocsupdatemechanism"></a>

```json
"builtIn"
```

<h2 id="tocS_UpdateResource">UpdateResource</h2>
<!-- backwards compatibility -->
<a id="schemaupdateresource"></a>
<a id="schema_UpdateResource"></a>
<a id="tocSupdateresource"></a>
<a id="tocsupdateresource"></a>

```json
{
  "id": 0,
  "version": "string",
  "branch": "string",
  "releaseDate": "1970-01-01T00:00:00Z",
  "fileName": "string",
  "url": "string",
  "installed": true,
  "installedOn": "1970-01-01T00:00:00Z",
  "installable": true,
  "latest": true,
  "changes": {
    "new": [
      "string"
    ],
    "fixed": [
      "string"
    ]
  },
  "hash": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|version|string \| null|false|none|none|
|branch|string \| null|false|none|none|
|releaseDate|string(date-time)|false|none|none|
|fileName|string \| null|false|none|none|
|url|string \| null|false|none|none|
|installed|boolean|false|none|none|
|installedOn|string(date-time) \| null|false|none|none|
|installable|boolean|false|none|none|
|latest|boolean|false|none|none|
|changes|[UpdateChanges](#schemaupdatechanges)|false|none|none|
|hash|string \| null|false|none|none|

<h2 id="tocS_WriteAudioTagsType">WriteAudioTagsType</h2>
<!-- backwards compatibility -->
<a id="schemawriteaudiotagstype"></a>
<a id="schema_WriteAudioTagsType"></a>
<a id="tocSwriteaudiotagstype"></a>
<a id="tocswriteaudiotagstype"></a>

```json
"no"
```
