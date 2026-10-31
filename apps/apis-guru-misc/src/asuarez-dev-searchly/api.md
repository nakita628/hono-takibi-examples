<h1 id="searchly-api-v1">SearchLy API v1 v1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

# Introduction
The SearchLy API provides similarity searching based on song lyrics.

# Operations
The API allows for the `/similarity/by_song` operation, which allows clients to search the similarity for an existing song in the database. Also, the API has an additional `/similarity/by_content` endpoint which allows clients to search similarity given a free String input through a JSON request body. Additional `/song/search` operation is available for searching songs given a query String.

# Endpoint
The API endpoint for the SearchLy API v1 is as follows:
```
https://searchly.asuarez.dev/api/v1
```

# Motivation
This project was built in order to create an API for searching similarities based on song lyrics. There are a lot of songs in the industry and most of them are talking about the same topic. What I wanted to prove with SearchLy was to estimate how similar are two songs between them based on the meaning of their lyrics.

SearchLy is using a database of 100k songs from AZLyrics, using [this scraper](https://github.com/AlbertSuarez/azlyrics-scraper), which is being updated periodically. Then, using word2vec and NMSLIB, it was possible to create an index where you can search similarities using the k-nearest neighbors (KNN) algorithm.

> **Note**: I am currently using a micro-instance from DigitalOcean where the API is deployed, so you should expect a bad performance. However, if this API becomes popular I will deploy it in a bigger instance.

Base URLs:

* <a href="https://searchly.asuarez.dev/api/v1">https://searchly.asuarez.dev/api/v1</a>

Email: <a href="mailto:hi@asuarez.dev">hi@asuarez.dev</a> 

<a href="https://searchly.asuarez.dev/">SearchLy demo</a>

<h1 id="searchly-api-v1-similarity">similarity</h1>

## API endpoint to search similarity using content

<a id="opIdsrc.searchly.api.v1.controllers.similarity.by_content"></a>

> Code samples

```bash
curl https://example.com/similarity/by_content \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "content": "string"
  }'
```

`POST /similarity/by_content`

Endpoint for an end-user client to search similarity by content.

If you want to run the /similarity/by_content operation, you can do so via an HTTP POST command to the following URL:

```
https://searchly.asuarez.dev/api/v1/similarity/by_content
```


> Body parameter

```json
{
  "content": "string"
}
```

<h3 id="api-endpoint-to-search-similarity-using-content-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|Body wrapper for the request.|
|» content|body|string|false|Content for searching similarity.|

> Example responses

> 200 Response

```json
{
  "error": true,
  "message": "string",
  "response": {
    "similarity_list": [
      {
        "artist_name": "string",
        "artist_url": "string",
        "id": 0,
        "index_id": 0,
        "lyrics": "string",
        "percentage": 0,
        "song_name": "string",
        "song_url": "string"
      }
    ]
  }
}
```

<h3 id="api-endpoint-to-search-similarity-using-content-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Standard SearchLy API v1 JSON response. You should check the `error` attribute to determine if there was an error.|[APIResponseSimilarity](#schemaapiresponsesimilarity)|
|default|Default|Unexpected error.|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## API endpoint to search similarity using a song identifier

<a id="opIdsrc.searchly.api.v1.controllers.similarity.by_song"></a>

> Code samples

```bash
curl 'https://example.com/similarity/by_song?song_id=234' \
  -H 'Accept: application/json'
```

`GET /similarity/by_song`

Endpoint for an end-user client to search similarity by song identifier.

If you want to run the /similarity/by_song operation, you can do so via an HTTP GET command to the following URL:

```
https://searchly.asuarez.dev/api/v1/similarity/by_song
```


<h3 id="api-endpoint-to-search-similarity-using-a-song-identifier-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|song_id|query|integer|true|Song identifier.|

> Example responses

> 200 Response

```json
{
  "error": true,
  "message": "string",
  "response": {
    "similarity_list": [
      {
        "artist_name": "string",
        "artist_url": "string",
        "id": 0,
        "index_id": 0,
        "lyrics": "string",
        "percentage": 0,
        "song_name": "string",
        "song_url": "string"
      }
    ]
  }
}
```

<h3 id="api-endpoint-to-search-similarity-using-a-song-identifier-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Standard SearchLy API v1 JSON response. You should check the `error` attribute to determine if there was an error.|[APIResponseSimilarity](#schemaapiresponsesimilarity)|
|default|Default|Unexpected error.|Inline|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="searchly-api-v1-song">song</h1>

## API endpoint to search songs from the database given a query

<a id="opIdsrc.searchly.api.v1.controllers.song.search"></a>

> Code samples

```bash
curl 'https://example.com/song/search?query=Miley%20Cyrus' \
  -H 'Accept: application/json'
```

`GET /song/search`

Endpoint for an end-user client to search songs from the database given a String query.

If you want to run the /song/search operation, you can do so via an HTTP GET command to the following URL:

```
https://searchly.asuarez.dev/api/v1/song/search
```


<h3 id="api-endpoint-to-search-songs-from-the-database-given-a-query-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|query|query|string|true|Query.|

> Example responses

> 200 Response

```json
{
  "error": true,
  "message": "string",
  "response": {
    "results": [
      {
        "id": 0,
        "name": "string"
      }
    ]
  }
}
```

<h3 id="api-endpoint-to-search-songs-from-the-database-given-a-query-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Standard SearchLy API v1 JSON response. You should check the `error` attribute to determine if there was an error.|[APIResponseSong](#schemaapiresponsesong)|
|default|Default|Unexpected error.|Inline|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_APIResponseSimilarity">APIResponseSimilarity</h2>
<!-- backwards compatibility -->
<a id="schemaapiresponsesimilarity"></a>
<a id="schema_APIResponseSimilarity"></a>
<a id="tocSapiresponsesimilarity"></a>
<a id="tocsapiresponsesimilarity"></a>

```json
{
  "error": true,
  "message": "string",
  "response": {
    "similarity_list": [
      {
        "artist_name": "string",
        "artist_url": "string",
        "id": 0,
        "index_id": 0,
        "lyrics": "string",
        "percentage": 0,
        "song_name": "string",
        "song_url": "string"
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|boolean|false|none|Whether or not the request was successfully processed or not.|
|message|string|false|none|Error message if the request was unsuccessful.|
|response|object|false|none|Contains the response data if the request was successful.|

<h2 id="tocS_APIResponseSong">APIResponseSong</h2>
<!-- backwards compatibility -->
<a id="schemaapiresponsesong"></a>
<a id="schema_APIResponseSong"></a>
<a id="tocSapiresponsesong"></a>
<a id="tocsapiresponsesong"></a>

```json
{
  "error": true,
  "message": "string",
  "response": {
    "results": [
      {
        "id": 0,
        "name": "string"
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|boolean|false|none|Whether or not the request was successfully processed or not.|
|message|string|false|none|Error message if the request was unsuccessful.|
|response|object|false|none|Contains the response data if the request was successful.|
