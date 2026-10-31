<h1 id="aggregators-api-service">Aggregators API Service v0.6-99cfdac</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Aggregators API

Base URLs:

* <a href="https://api.zeno.fm">https://api.zeno.fm</a> - Generated server url

# Authentication

* API Key (API_Key)
    - Parameter Name: **x-zeno-api-key**, in: header.

<h1 id="aggregators-api-service-api-v2">API-v2</h1>

## getPodcastCategories

<a id="opIdgetPodcastCategories"></a>

> Code samples

```bash
curl https://example.com/api/v2/podcasts/categories \
  -H "x-zeno-api-key: ${API_KEY}"
```

`GET /api/v2/podcasts/categories`

Get the list of Categories that can be used to filter podcasts in the search podcasts request

<h3 id="getpodcastcategories-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getpodcastcategories-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[PodcastCategory](#schemapodcastcategory)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API_Key
</aside>

## getPodcastCountries

<a id="opIdgetPodcastCountries"></a>

> Code samples

```bash
curl https://example.com/api/v2/podcasts/countries \
  -H "x-zeno-api-key: ${API_KEY}"
```

`GET /api/v2/podcasts/countries`

Get the list of Countries that can be used to filter podcasts in the search podcasts request

<h3 id="getpodcastcountries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getpodcastcountries-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Country](#schemacountry)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API_Key
</aside>

## createPodcast

<a id="opIdcreatePodcast"></a>

> Code samples

```bash
curl https://example.com/api/v2/podcasts/create \
  -X POST \
  -H "x-zeno-api-key: ${API_KEY}" \
  -F 'file_logo=@/path/to/file' \
  -F 'podcast={"author":"string","block":true,"categories":["string"],"copyright":"string","country":"string","description":"string","explicit":true,"image":"string","key":"string","keywords":["string"],"language":"string","link":"string","ownerEmail":"string","ownerName":"string","showType":"string","subtitle":"string","summary":"string","title":"string"}'
```

`POST /api/v2/podcasts/create`

Create podcast

> Body parameter

```yaml
file_logo: string
podcast:
  author: string
  block: true
  categories:
    - string
  copyright: string
  country: string
  description: string
  explicit: true
  image: string
  key: string
  keywords:
    - string
  language: string
  link: string
  ownerEmail: string
  ownerName: string
  showType: string
  subtitle: string
  summary: string
  title: string
```

<h3 id="createpodcast-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» file_logo|body|string(binary)|true|none|
|» podcast|body|[Podcast](#schemapodcast)|true|Podcast model|

<h3 id="createpodcast-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Podcast](#schemapodcast)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API_Key
</aside>

## getPodcastLanguages

<a id="opIdgetPodcastLanguages"></a>

> Code samples

```bash
curl https://example.com/api/v2/podcasts/languages \
  -H "x-zeno-api-key: ${API_KEY}"
```

`GET /api/v2/podcasts/languages`

Get the list of Languages that can be used to filter podcasts in the search podcasts request

<h3 id="getpodcastlanguages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getpodcastlanguages-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Language](#schemalanguage)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API_Key
</aside>

## searchPodcasts

<a id="opIdsearchPodcasts"></a>

> Code samples

```bash
curl https://example.com/api/v2/podcasts/search \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "x-zeno-api-key: ${API_KEY}" \
  -d '{
    "filters": {
      "category": [
        "string"
      ],
      "country": [
        "string"
      ],
      "language": [
        "string"
      ],
      "podcastType": "podcasts"
    },
    "hitsPerPage": 10,
    "page": 1,
    "query": "string"
  }'
```

`POST /api/v2/podcasts/search`

Search podcasts

> Body parameter

```json
{
  "filters": {
    "category": [
      "string"
    ],
    "country": [
      "string"
    ],
    "language": [
      "string"
    ],
    "podcastType": "podcasts"
  },
  "hitsPerPage": 10,
  "page": 1,
  "query": "string"
}
```

<h3 id="searchpodcasts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[PodcastSearchParams](#schemapodcastsearchparams)|true|none|
|» filters|body|[PodcastFilters](#schemapodcastfilters)|false|Filters for podcast search|
|» hitsPerPage|body|integer(int32)|false|none|
|» page|body|integer(int32)|false|none|
|» query|body|string|false|none|

<h3 id="searchpodcasts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PodcastSearchResults](#schemapodcastsearchresults)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API_Key
</aside>

## getPodcast

<a id="opIdgetPodcast"></a>

> Code samples

```bash
curl https://example.com/api/v2/podcasts/string \
  -H "x-zeno-api-key: ${API_KEY}"
```

`GET /api/v2/podcasts/{podcastKey}`

Get podcast

<h3 id="getpodcast-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|podcastKey|path|string|true|none|

<h3 id="getpodcast-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Podcast](#schemapodcast)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API_Key
</aside>

## updatePodcast

<a id="opIdupdatePodcast"></a>

> Code samples

```bash
curl https://example.com/api/v2/podcasts/string \
  -X PUT \
  -H "x-zeno-api-key: ${API_KEY}" \
  -F 'file_logo=@/path/to/file' \
  -F 'podcast={"author":"string","block":true,"categories":["string"],"copyright":"string","country":"string","description":"string","explicit":true,"image":"string","key":"string","keywords":["string"],"language":"string","link":"string","ownerEmail":"string","ownerName":"string","showType":"string","subtitle":"string","summary":"string","title":"string"}'
```

`PUT /api/v2/podcasts/{podcastKey}`

Update podcast

> Body parameter

```yaml
file_logo: string
podcast:
  author: string
  block: true
  categories:
    - string
  copyright: string
  country: string
  description: string
  explicit: true
  image: string
  key: string
  keywords:
    - string
  language: string
  link: string
  ownerEmail: string
  ownerName: string
  showType: string
  subtitle: string
  summary: string
  title: string
```

<h3 id="updatepodcast-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|podcastKey|path|string|true|none|
|body|body|object|false|none|
|» file_logo|body|string(binary)|false|none|
|» podcast|body|[Podcast](#schemapodcast)|true|Podcast model|

<h3 id="updatepodcast-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Podcast](#schemapodcast)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API_Key
</aside>

## deletePodcast

<a id="opIddeletePodcast"></a>

> Code samples

```bash
curl https://example.com/api/v2/podcasts/string \
  -X DELETE \
  -H "x-zeno-api-key: ${API_KEY}"
```

`DELETE /api/v2/podcasts/{podcastKey}`

Delete podcast

<h3 id="deletepodcast-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|podcastKey|path|string|true|none|

<h3 id="deletepodcast-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API_Key
</aside>

## getPodcastEpisodes

<a id="opIdgetPodcastEpisodes"></a>

> Code samples

```bash
curl https://example.com/api/v2/podcasts/string/episodes \
  -H "x-zeno-api-key: ${API_KEY}"
```

`GET /api/v2/podcasts/{podcastKey}/episodes`

Get podcast episodes

<h3 id="getpodcastepisodes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|podcastKey|path|string|true|none|
|limit|query|string|false|none|
|offset|query|string|false|none|

<h3 id="getpodcastepisodes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PodcastEpisodeList](#schemapodcastepisodelist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API_Key
</aside>

## createPodcastEpisode

<a id="opIdcreatePodcastEpisode"></a>

> Code samples

```bash
curl https://example.com/api/v2/podcasts/string/episodes/create \
  -X POST \
  -H "x-zeno-api-key: ${API_KEY}" \
  -F 'episode={"author":"string","block":true,"description":"string","duration":0,"episode":0,"episodeType":"string","explicit":true,"fileUrl":"string","image":"string","key":"string","link":"string","publishDate":"1970-01-01T00:00:00Z","season":0,"size":0,"subtitle":"string","summary":"string","tags":["string"],"title":"string"}' \
  -F 'file_logo=@/path/to/file' \
  -F 'file_media=@/path/to/file'
```

`POST /api/v2/podcasts/{podcastKey}/episodes/create`

Create podcast episode

> Body parameter

```yaml
episode:
  author: string
  block: true
  description: string
  duration: 0
  episode: 0
  episodeType: string
  explicit: true
  fileUrl: string
  image: string
  key: string
  link: string
  publishDate: "1970-01-01T00:00:00Z"
  season: 0
  size: 0
  subtitle: string
  summary: string
  tags:
    - string
  title: string
file_logo: string
file_media: string
```

<h3 id="createpodcastepisode-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|podcastKey|path|string|true|none|
|body|body|object|false|none|
|» episode|body|[PodcastEpisode](#schemapodcastepisode)|true|PodcastEpisode model|
|» file_logo|body|string(binary)|true|none|
|» file_media|body|string(binary)|true|none|

<h3 id="createpodcastepisode-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PodcastEpisode](#schemapodcastepisode)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API_Key
</aside>

## getPodcastEpisode

<a id="opIdgetPodcastEpisode"></a>

> Code samples

```bash
curl https://example.com/api/v2/podcasts/string/episodes/string \
  -H "x-zeno-api-key: ${API_KEY}"
```

`GET /api/v2/podcasts/{podcastKey}/episodes/{episodeKey}`

Get podcast episode

<h3 id="getpodcastepisode-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|podcastKey|path|string|true|none|
|episodeKey|path|string|true|none|

<h3 id="getpodcastepisode-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PodcastEpisode](#schemapodcastepisode)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API_Key
</aside>

## updatePodcastEpisode

<a id="opIdupdatePodcastEpisode"></a>

> Code samples

```bash
curl https://example.com/api/v2/podcasts/string/episodes/string \
  -X PUT \
  -H "x-zeno-api-key: ${API_KEY}" \
  -F 'episode={"author":"string","block":true,"description":"string","duration":0,"episode":0,"episodeType":"string","explicit":true,"fileUrl":"string","image":"string","key":"string","link":"string","publishDate":"1970-01-01T00:00:00Z","season":0,"size":0,"subtitle":"string","summary":"string","tags":["string"],"title":"string"}' \
  -F 'file_logo=@/path/to/file'
```

`PUT /api/v2/podcasts/{podcastKey}/episodes/{episodeKey}`

Update podcast episode

> Body parameter

```yaml
episode:
  author: string
  block: true
  description: string
  duration: 0
  episode: 0
  episodeType: string
  explicit: true
  fileUrl: string
  image: string
  key: string
  link: string
  publishDate: "1970-01-01T00:00:00Z"
  season: 0
  size: 0
  subtitle: string
  summary: string
  tags:
    - string
  title: string
file_logo: string
```

<h3 id="updatepodcastepisode-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|podcastKey|path|string|true|none|
|episodeKey|path|string|true|none|
|body|body|object|false|none|
|» episode|body|[PodcastEpisode](#schemapodcastepisode)|true|PodcastEpisode model|
|» file_logo|body|string(binary)|false|none|

<h3 id="updatepodcastepisode-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PodcastEpisode](#schemapodcastepisode)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API_Key
</aside>

## deletePodcast_1

<a id="opIddeletePodcast_1"></a>

> Code samples

```bash
curl https://example.com/api/v2/podcasts/string/episodes/string \
  -X DELETE \
  -H "x-zeno-api-key: ${API_KEY}"
```

`DELETE /api/v2/podcasts/{podcastKey}/episodes/{episodeKey}`

Delete podcast episode

<h3 id="deletepodcast1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|podcastKey|path|string|true|none|
|episodeKey|path|string|true|none|

<h3 id="deletepodcast1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API_Key
</aside>

## getStationCountries

<a id="opIdgetStationCountries"></a>

> Code samples

```bash
curl https://example.com/api/v2/stations/countries \
  -H "x-zeno-api-key: ${API_KEY}"
```

`GET /api/v2/stations/countries`

Get the list of Countries that can be used to filter stations in the search stations request

<h3 id="getstationcountries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getstationcountries-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Country](#schemacountry)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API_Key
</aside>

## getStationGenres

<a id="opIdgetStationGenres"></a>

> Code samples

```bash
curl https://example.com/api/v2/stations/genres \
  -H "x-zeno-api-key: ${API_KEY}"
```

`GET /api/v2/stations/genres`

Get the list of Genres that can be used to filter stations in the search stations request

<h3 id="getstationgenres-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getstationgenres-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[StationGenre](#schemastationgenre)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API_Key
</aside>

## getStationLanguages

<a id="opIdgetStationLanguages"></a>

> Code samples

```bash
curl https://example.com/api/v2/stations/languages \
  -H "x-zeno-api-key: ${API_KEY}"
```

`GET /api/v2/stations/languages`

Get the list of Languages that can be used to filter stations in the search stations request

<h3 id="getstationlanguages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getstationlanguages-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Language](#schemalanguage)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API_Key
</aside>

## getPartnerAggregatorStations

<a id="opIdgetPartnerAggregatorStations"></a>

> Code samples

```bash
curl https://example.com/api/v2/stations/list \
  -H "x-zeno-api-key: ${API_KEY}"
```

`GET /api/v2/stations/list`

List stations

<h3 id="getpartneraggregatorstations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|string|false|none|
|hitsPerPage|query|string|false|none|

<h3 id="getpartneraggregatorstations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[StationList](#schemastationlist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API_Key
</aside>

## searchStations

<a id="opIdsearchStations"></a>

> Code samples

```bash
curl https://example.com/api/v2/stations/search \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "x-zeno-api-key: ${API_KEY}" \
  -d '{
    "filters": {
      "country": [
        "string"
      ],
      "genre": [
        "string"
      ],
      "language": [
        "string"
      ]
    },
    "hitsPerPage": 10,
    "page": 1,
    "query": "string"
  }'
```

`POST /api/v2/stations/search`

Search stations

> Body parameter

```json
{
  "filters": {
    "country": [
      "string"
    ],
    "genre": [
      "string"
    ],
    "language": [
      "string"
    ]
  },
  "hitsPerPage": 10,
  "page": 1,
  "query": "string"
}
```

<h3 id="searchstations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[StationSearchParams](#schemastationsearchparams)|true|none|
|» filters|body|[StationFilters](#schemastationfilters)|false|Filters for station search|
|» hitsPerPage|body|integer(int32)|false|none|
|» page|body|integer(int32)|false|none|
|» query|body|string|false|none|

<h3 id="searchstations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[StationSearchResults](#schemastationsearchresults)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API_Key
</aside>

# Schemas

<h2 id="tocS_Country">Country</h2>
<!-- backwards compatibility -->
<a id="schemacountry"></a>
<a id="schema_Country"></a>
<a id="tocScountry"></a>
<a id="tocscountry"></a>

```json
{
  "iso": "string",
  "iso3": "string",
  "name": "string"
}
```

Country model

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|iso|string|false|none|none|
|iso3|string|false|none|none|
|name|string|false|none|none|

<h2 id="tocS_Language">Language</h2>
<!-- backwards compatibility -->
<a id="schemalanguage"></a>
<a id="schema_Language"></a>
<a id="tocSlanguage"></a>
<a id="tocslanguage"></a>

```json
{
  "name": "string"
}
```

Language model

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|

<h2 id="tocS_Podcast">Podcast</h2>
<!-- backwards compatibility -->
<a id="schemapodcast"></a>
<a id="schema_Podcast"></a>
<a id="tocSpodcast"></a>
<a id="tocspodcast"></a>

```json
{
  "author": "string",
  "block": true,
  "categories": [
    "string"
  ],
  "copyright": "string",
  "country": "string",
  "description": "string",
  "explicit": true,
  "image": "string",
  "key": "string",
  "keywords": [
    "string"
  ],
  "language": "string",
  "link": "string",
  "ownerEmail": "string",
  "ownerName": "string",
  "showType": "string",
  "subtitle": "string",
  "summary": "string",
  "title": "string"
}
```

Podcast model

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|author|string|false|none|none|
|block|boolean|false|none|none|
|categories|[string]|true|none|none|
|copyright|string|false|none|none|
|country|string|false|none|none|
|description|string|true|none|none|
|explicit|boolean|false|none|none|
|image|string|false|none|none|
|key|string|false|none|none|
|keywords|[string]|false|none|none|
|language|string|true|none|none|
|link|string|false|none|none|
|ownerEmail|string|false|none|none|
|ownerName|string|false|none|none|
|showType|string|false|none|none|
|subtitle|string|false|none|none|
|summary|string|true|none|none|
|title|string|true|none|none|

<h2 id="tocS_PodcastCategory">PodcastCategory</h2>
<!-- backwards compatibility -->
<a id="schemapodcastcategory"></a>
<a id="schema_PodcastCategory"></a>
<a id="tocSpodcastcategory"></a>
<a id="tocspodcastcategory"></a>

```json
{
  "id": "string",
  "parent": "string",
  "text": "string"
}
```

PodcastCategory model

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|parent|string|false|none|none|
|text|string|false|none|none|

<h2 id="tocS_PodcastEpisode">PodcastEpisode</h2>
<!-- backwards compatibility -->
<a id="schemapodcastepisode"></a>
<a id="schema_PodcastEpisode"></a>
<a id="tocSpodcastepisode"></a>
<a id="tocspodcastepisode"></a>

```json
{
  "author": "string",
  "block": true,
  "description": "string",
  "duration": 0,
  "episode": 0,
  "episodeType": "string",
  "explicit": true,
  "fileUrl": "string",
  "image": "string",
  "key": "string",
  "link": "string",
  "publishDate": "1970-01-01T00:00:00Z",
  "season": 0,
  "size": 0,
  "subtitle": "string",
  "summary": "string",
  "tags": [
    "string"
  ],
  "title": "string"
}
```

PodcastEpisode model

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|author|string|false|none|none|
|block|boolean|false|none|none|
|description|string|true|none|none|
|duration|integer(int64)|false|none|none|
|episode|integer(int64)|false|none|none|
|episodeType|string|false|none|none|
|explicit|boolean|false|none|none|
|fileUrl|string|false|none|none|
|image|string|false|none|none|
|key|string|false|none|none|
|link|string|false|none|none|
|publishDate|string(date-time)|true|none|none|
|season|integer(int64)|false|none|none|
|size|integer(int64)|false|none|none|
|subtitle|string|false|none|none|
|summary|string|true|none|none|
|tags|[string]|false|none|none|
|title|string|true|none|none|

<h2 id="tocS_PodcastEpisodeList">PodcastEpisodeList</h2>
<!-- backwards compatibility -->
<a id="schemapodcastepisodelist"></a>
<a id="schema_PodcastEpisodeList"></a>
<a id="tocSpodcastepisodelist"></a>
<a id="tocspodcastepisodelist"></a>

```json
{
  "items": [
    {
      "author": "string",
      "block": true,
      "description": "string",
      "duration": 0,
      "episode": 0,
      "episodeType": "string",
      "explicit": true,
      "fileUrl": "string",
      "image": "string",
      "key": "string",
      "link": "string",
      "publishDate": "1970-01-01T00:00:00Z",
      "season": 0,
      "size": 0,
      "subtitle": "string",
      "summary": "string",
      "tags": [
        "string"
      ],
      "title": "string"
    }
  ],
  "total": 0
}
```

List of PodcastEpisode

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[PodcastEpisode](#schemapodcastepisode)]|false|none|none|
|total|integer(int64)|false|none|none|

<h2 id="tocS_PodcastFilters">PodcastFilters</h2>
<!-- backwards compatibility -->
<a id="schemapodcastfilters"></a>
<a id="schema_PodcastFilters"></a>
<a id="tocSpodcastfilters"></a>
<a id="tocspodcastfilters"></a>

```json
{
  "category": [
    "string"
  ],
  "country": [
    "string"
  ],
  "language": [
    "string"
  ],
  "podcastType": "podcasts"
}
```

Filters for podcast search

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category|[string]|false|none|none|
|country|[string]|false|none|none|
|language|[string]|false|none|none|
|podcastType|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|podcastType|podcasts|
|podcastType|shows|

<h2 id="tocS_PodcastSearchParams">PodcastSearchParams</h2>
<!-- backwards compatibility -->
<a id="schemapodcastsearchparams"></a>
<a id="schema_PodcastSearchParams"></a>
<a id="tocSpodcastsearchparams"></a>
<a id="tocspodcastsearchparams"></a>

```json
{
  "filters": {
    "category": [
      "string"
    ],
    "country": [
      "string"
    ],
    "language": [
      "string"
    ],
    "podcastType": "podcasts"
  },
  "hitsPerPage": 10,
  "page": 1,
  "query": "string"
}
```

Podcast search params

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filters|[PodcastFilters](#schemapodcastfilters)|false|none|Filters for podcast search|
|hitsPerPage|integer(int32)|false|none|none|
|page|integer(int32)|false|none|none|
|query|string|false|none|none|

<h2 id="tocS_PodcastSearchResults">PodcastSearchResults</h2>
<!-- backwards compatibility -->
<a id="schemapodcastsearchresults"></a>
<a id="schema_PodcastSearchResults"></a>
<a id="tocSpodcastsearchresults"></a>
<a id="tocspodcastsearchresults"></a>

```json
{
  "hits": [
    {
      "author": "string",
      "block": true,
      "categories": [
        "string"
      ],
      "copyright": "string",
      "country": "string",
      "description": "string",
      "explicit": true,
      "image": "string",
      "key": "string",
      "keywords": [
        "string"
      ],
      "language": "string",
      "link": "string",
      "ownerEmail": "string",
      "ownerName": "string",
      "showType": "string",
      "subtitle": "string",
      "summary": "string",
      "title": "string"
    }
  ],
  "total": 0
}
```

Podcast search results

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hits|[[Podcast](#schemapodcast)]|false|none|none|
|total|integer(int64)|false|none|none|

<h2 id="tocS_Station">Station</h2>
<!-- backwards compatibility -->
<a id="schemastation"></a>
<a id="schema_Station"></a>
<a id="tocSstation"></a>
<a id="tocsstation"></a>

```json
{
  "city": "string",
  "country": "string",
  "description": "string",
  "genre": "string",
  "key": "string",
  "language": "string",
  "logo": "string",
  "name": "string",
  "stream": "string",
  "website": "string"
}
```

Station model

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|city|string|false|none|none|
|country|string|false|none|none|
|description|string|false|none|none|
|genre|string|false|none|none|
|key|string|false|none|none|
|language|string|false|none|none|
|logo|string|false|none|none|
|name|string|false|none|none|
|stream|string|false|none|none|
|website|string|false|none|none|

<h2 id="tocS_StationFilters">StationFilters</h2>
<!-- backwards compatibility -->
<a id="schemastationfilters"></a>
<a id="schema_StationFilters"></a>
<a id="tocSstationfilters"></a>
<a id="tocsstationfilters"></a>

```json
{
  "country": [
    "string"
  ],
  "genre": [
    "string"
  ],
  "language": [
    "string"
  ]
}
```

Filters for station search

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|country|[string]|false|none|none|
|genre|[string]|false|none|none|
|language|[string]|false|none|none|

<h2 id="tocS_StationGenre">StationGenre</h2>
<!-- backwards compatibility -->
<a id="schemastationgenre"></a>
<a id="schema_StationGenre"></a>
<a id="tocSstationgenre"></a>
<a id="tocsstationgenre"></a>

```json
{
  "name": "string"
}
```

StationGenre model

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|

<h2 id="tocS_StationList">StationList</h2>
<!-- backwards compatibility -->
<a id="schemastationlist"></a>
<a id="schema_StationList"></a>
<a id="tocSstationlist"></a>
<a id="tocsstationlist"></a>

```json
{
  "items": [
    {
      "city": "string",
      "country": "string",
      "description": "string",
      "genre": "string",
      "key": "string",
      "language": "string",
      "logo": "string",
      "name": "string",
      "stream": "string",
      "website": "string"
    }
  ],
  "total": 0
}
```

List of Station

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[Station](#schemastation)]|false|none|none|
|total|integer(int64)|false|none|none|

<h2 id="tocS_StationSearchParams">StationSearchParams</h2>
<!-- backwards compatibility -->
<a id="schemastationsearchparams"></a>
<a id="schema_StationSearchParams"></a>
<a id="tocSstationsearchparams"></a>
<a id="tocsstationsearchparams"></a>

```json
{
  "filters": {
    "country": [
      "string"
    ],
    "genre": [
      "string"
    ],
    "language": [
      "string"
    ]
  },
  "hitsPerPage": 10,
  "page": 1,
  "query": "string"
}
```

Station search params

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filters|[StationFilters](#schemastationfilters)|false|none|Filters for station search|
|hitsPerPage|integer(int32)|false|none|none|
|page|integer(int32)|false|none|none|
|query|string|false|none|none|

<h2 id="tocS_StationSearchResults">StationSearchResults</h2>
<!-- backwards compatibility -->
<a id="schemastationsearchresults"></a>
<a id="schema_StationSearchResults"></a>
<a id="tocSstationsearchresults"></a>
<a id="tocsstationsearchresults"></a>

```json
{
  "hits": [
    {
      "city": "string",
      "country": "string",
      "description": "string",
      "genre": "string",
      "key": "string",
      "language": "string",
      "logo": "string",
      "name": "string",
      "stream": "string",
      "website": "string"
    }
  ],
  "total": 0
}
```

Station search results

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hits|[[Station](#schemastation)]|false|none|none|
|total|integer(int64)|false|none|none|
