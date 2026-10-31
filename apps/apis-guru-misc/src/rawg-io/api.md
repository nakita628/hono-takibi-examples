<h1 id="rawg-video-games-database-api">RAWG Video Games Database API v1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.


The largest open video games database.

### Why build on RAWG
- More than 350,000 games for 50 platforms including mobiles.
- Rich metadata: tags, genres, developers, publishers, individual creators, official websites, release dates,
Metacritic ratings.
- Where to buy: links to digital distribution services
- Similar games based on visual similarity.
- Player activity data: Steam average playtime and RAWG player counts and ratings.
- Actively developing and constantly getting better by user contribution and our algorithms.

### Terms of Use
- Free for personal use as long as you attribute RAWG as the source of the data and/or images and add an active
hyperlink from every page where the data of RAWG is used.
- Free for commercial use for startups and hobby projects with not more than 100,000 monthly active users or 500,000
page views per month. If your project is larger than that, email us at [api@rawg.io](mailto:api@rawg.io) for
commercial terms.
- No cloning. It would not be cool if you used our API to launch a clone of RAWG. We know it is not always easy
to say what is a duplicate and what isn't. Drop us a line at [api@rawg.io](mailto:api@rawg.io) if you are in doubt,
and we will talk it through.
- You must include an API key with every request. The key can be obtained at https://rawg.io/apidocs.
If you don’t provide it, we may ban your requests.

__[Read more](https://rawg.io/apidocs)__.

Base URLs:

* <a href="https://api.rawg.io/api">https://api.rawg.io/api</a>

<h1 id="rawg-video-games-database-api-creator-roles">creator-roles</h1>

## Get a list of creator positions (jobs).

<a id="opIdcreator-roles_list"></a>

> Code samples

```bash
curl https://example.com/creator-roles \
  -H 'Accept: application/json'
```

`GET /creator-roles`

<h3 id="get-a-list-of-creator-positions-jobs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer|false|A page number within the paginated result set.|
|page_size|query|integer|false|Number of results to return per page.|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "next": "http://example.com",
  "previous": "http://example.com",
  "results": [
    {
      "id": 0,
      "name": "string",
      "slug": "string"
    }
  ]
}
```

<h3 id="get-a-list-of-creator-positions-jobs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="get-a-list-of-creator-positions-jobs-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[Position](#schemaposition)]|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="rawg-video-games-database-api-creators">creators</h1>

## Get a list of game creators.

<a id="opIdcreators_list"></a>

> Code samples

```bash
curl https://example.com/creators \
  -H 'Accept: application/json'
```

`GET /creators`

<h3 id="get-a-list-of-game-creators-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer|false|A page number within the paginated result set.|
|page_size|query|integer|false|Number of results to return per page.|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "next": "http://example.com",
  "previous": "http://example.com",
  "results": [
    {
      "games_count": 0,
      "id": 0,
      "image": "http://example.com",
      "image_background": "http://example.com",
      "name": "string",
      "slug": "string"
    }
  ]
}
```

<h3 id="get-a-list-of-game-creators-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="get-a-list-of-game-creators-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[Person](#schemaperson)]|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get details of the creator.

<a id="opIdcreators_read"></a>

> Code samples

```bash
curl https://example.com/creators/string \
  -H 'Accept: application/json'
```

`GET /creators/{id}`

<h3 id="get-details-of-the-creator-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "description": "string",
  "games_count": 0,
  "id": 0,
  "image": "http://example.com",
  "image_background": "http://example.com",
  "name": "string",
  "rating": "string",
  "rating_top": 0,
  "reviews_count": 0,
  "slug": "string",
  "updated": "1970-01-01T00:00:00Z"
}
```

<h3 id="get-details-of-the-creator-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[PersonSingle](#schemapersonsingle)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="rawg-video-games-database-api-developers">developers</h1>

## Get a list of game developers.

<a id="opIddevelopers_list"></a>

> Code samples

```bash
curl https://example.com/developers \
  -H 'Accept: application/json'
```

`GET /developers`

<h3 id="get-a-list-of-game-developers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer|false|A page number within the paginated result set.|
|page_size|query|integer|false|Number of results to return per page.|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "next": "http://example.com",
  "previous": "http://example.com",
  "results": [
    {
      "games_count": 0,
      "id": 0,
      "image_background": "http://example.com",
      "name": "string",
      "slug": "string"
    }
  ]
}
```

<h3 id="get-a-list-of-game-developers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="get-a-list-of-game-developers-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[Developer](#schemadeveloper)]|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get details of the developer.

<a id="opIddevelopers_read"></a>

> Code samples

```bash
curl https://example.com/developers/0 \
  -H 'Accept: application/json'
```

`GET /developers/{id}`

<h3 id="get-details-of-the-developer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this Developer.|

> Example responses

> 200 Response

```json
{
  "description": "string",
  "games_count": 0,
  "id": 0,
  "image_background": "http://example.com",
  "name": "string",
  "slug": "string"
}
```

<h3 id="get-details-of-the-developer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[DeveloperSingle](#schemadevelopersingle)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="rawg-video-games-database-api-games">games</h1>

## Get a list of games.

<a id="opIdgames_list"></a>

> Code samples

```bash
curl https://example.com/games \
  -H 'Accept: application/json'
```

`GET /games`

<h3 id="get-a-list-of-games-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer|false|A page number within the paginated result set.|
|page_size|query|integer|false|Number of results to return per page.|
|search|query|string|false|Search query.|
|search_precise|query|boolean|false|Disable fuzziness for the search query.|
|search_exact|query|boolean|false|Mark the search query as exact.|
|parent_platforms|query|string|false|Filter by parent platforms, for example: `1,2,3`.|
|platforms|query|string|false|Filter by platforms, for example: `4,5`.|
|stores|query|string|false|Filter by stores, for example: `5,6`.|
|developers|query|string|false|Filter by developers, for example: `1612,18893` or `valve-software,feral-interactive`.|
|publishers|query|string|false|Filter by publishers, for example: `354,20987` or `electronic-arts,microsoft-studios`.|
|genres|query|string|false|Filter by genres, for example: `4,51` or `action,indie`.|
|tags|query|string|false|Filter by tags, for example: `31,7` or `singleplayer,multiplayer`.|
|creators|query|string|false|Filter by creators, for example: `78,28` or `cris-velasco,mike-morasky`.|
|dates|query|string|false|Filter by a release date, for example: `2010-01-01,2018-12-31.1960-01-01,1969-12-31`.|
|updated|query|string|false|Filter by an update date, for example: `2020-12-01,2020-12-31`.|
|platforms_count|query|integer|false|Filter by platforms count, for example: `1`.|
|metacritic|query|string|false|Filter by a metacritic rating, for example: `80,100`.|
|exclude_collection|query|integer|false|Exclude games from a particular collection, for example: `123`.|
|exclude_additions|query|boolean|false|Exclude additions.|
|exclude_parents|query|boolean|false|Exclude games which have additions.|
|exclude_game_series|query|boolean|false|Exclude games which included in a game series.|
|exclude_stores|query|string|false|Exclude stores, for example: `5,6`.|
|ordering|query|string|false|Available fields: `name`, `released`, `added`, `created`, `updated`, `rating`, `metacritic`. You can reverse the sort order adding a hyphen, for example: `-released`.|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "next": "http://example.com",
  "previous": "http://example.com",
  "results": [
    {
      "added": 0,
      "added_by_status": {},
      "background_image": "http://example.com",
      "esrb_rating": {
        "id": 0,
        "name": "Everyone",
        "slug": "everyone"
      },
      "id": 0,
      "metacritic": 0,
      "name": "string",
      "platforms": [
        {
          "platform": {
            "id": 0,
            "name": "string",
            "slug": "string"
          },
          "released_at": "string",
          "requirements": {
            "minimum": "string",
            "recommended": "string"
          }
        }
      ],
      "playtime": 0,
      "rating": 0,
      "rating_top": 0,
      "ratings": {},
      "ratings_count": 0,
      "released": "1970-01-01",
      "reviews_text_count": "string",
      "slug": "string",
      "suggestions_count": 0,
      "tba": true,
      "updated": "1970-01-01T00:00:00Z"
    }
  ]
}
```

<h3 id="get-a-list-of-games-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="get-a-list-of-games-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[Game](#schemagame)]|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get a list of DLC's for the game, GOTY and other editions, companion apps, etc.

<a id="opIdgames_additions_list"></a>

> Code samples

```bash
curl https://example.com/games/string/additions \
  -H 'Accept: application/json'
```

`GET /games/{game_pk}/additions`

<h3 id="get-a-list-of-dlcs-for-the-game-goty-and-other-editions-companion-apps-etc-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer|false|A page number within the paginated result set.|
|page_size|query|integer|false|Number of results to return per page.|
|game_pk|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "next": "http://example.com",
  "previous": "http://example.com",
  "results": [
    {
      "added": 0,
      "added_by_status": {},
      "background_image": "http://example.com",
      "esrb_rating": {
        "id": 0,
        "name": "Everyone",
        "slug": "everyone"
      },
      "id": 0,
      "metacritic": 0,
      "name": "string",
      "platforms": [
        {
          "platform": {
            "id": 0,
            "name": "string",
            "slug": "string"
          },
          "released_at": "string",
          "requirements": {
            "minimum": "string",
            "recommended": "string"
          }
        }
      ],
      "playtime": 0,
      "rating": 0,
      "rating_top": 0,
      "ratings": {},
      "ratings_count": 0,
      "released": "1970-01-01",
      "reviews_text_count": "string",
      "slug": "string",
      "suggestions_count": 0,
      "tba": true,
      "updated": "1970-01-01T00:00:00Z"
    }
  ]
}
```

<h3 id="get-a-list-of-dlcs-for-the-game-goty-and-other-editions-companion-apps-etc-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="get-a-list-of-dlcs-for-the-game-goty-and-other-editions-companion-apps-etc-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[Game](#schemagame)]|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get a list of individual creators that were part of the development team.

<a id="opIdgames_development-team_list"></a>

> Code samples

```bash
curl https://example.com/games/string/development-team \
  -H 'Accept: application/json'
```

`GET /games/{game_pk}/development-team`

<h3 id="get-a-list-of-individual-creators-that-were-part-of-the-development-team-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ordering|query|string|false|Which field to use when ordering the results.|
|page|query|integer|false|A page number within the paginated result set.|
|page_size|query|integer|false|Number of results to return per page.|
|game_pk|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "next": "http://example.com",
  "previous": "http://example.com",
  "results": [
    {
      "games_count": 0,
      "id": 0,
      "image": "http://example.com",
      "image_background": "http://example.com",
      "name": "string",
      "slug": "string"
    }
  ]
}
```

<h3 id="get-a-list-of-individual-creators-that-were-part-of-the-development-team-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="get-a-list-of-individual-creators-that-were-part-of-the-development-team-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[GamePersonList](#schemagamepersonlist)]|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get a list of games that are part of the same series.

<a id="opIdgames_game-series_list"></a>

> Code samples

```bash
curl https://example.com/games/string/game-series \
  -H 'Accept: application/json'
```

`GET /games/{game_pk}/game-series`

<h3 id="get-a-list-of-games-that-are-part-of-the-same-series-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer|false|A page number within the paginated result set.|
|page_size|query|integer|false|Number of results to return per page.|
|game_pk|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "next": "http://example.com",
  "previous": "http://example.com",
  "results": [
    {
      "added": 0,
      "added_by_status": {},
      "background_image": "http://example.com",
      "esrb_rating": {
        "id": 0,
        "name": "Everyone",
        "slug": "everyone"
      },
      "id": 0,
      "metacritic": 0,
      "name": "string",
      "platforms": [
        {
          "platform": {
            "id": 0,
            "name": "string",
            "slug": "string"
          },
          "released_at": "string",
          "requirements": {
            "minimum": "string",
            "recommended": "string"
          }
        }
      ],
      "playtime": 0,
      "rating": 0,
      "rating_top": 0,
      "ratings": {},
      "ratings_count": 0,
      "released": "1970-01-01",
      "reviews_text_count": "string",
      "slug": "string",
      "suggestions_count": 0,
      "tba": true,
      "updated": "1970-01-01T00:00:00Z"
    }
  ]
}
```

<h3 id="get-a-list-of-games-that-are-part-of-the-same-series-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="get-a-list-of-games-that-are-part-of-the-same-series-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[Game](#schemagame)]|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get a list of parent games for DLC's and editions.

<a id="opIdgames_parent-games_list"></a>

> Code samples

```bash
curl https://example.com/games/string/parent-games \
  -H 'Accept: application/json'
```

`GET /games/{game_pk}/parent-games`

<h3 id="get-a-list-of-parent-games-for-dlcs-and-editions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer|false|A page number within the paginated result set.|
|page_size|query|integer|false|Number of results to return per page.|
|game_pk|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "next": "http://example.com",
  "previous": "http://example.com",
  "results": [
    {
      "added": 0,
      "added_by_status": {},
      "background_image": "http://example.com",
      "esrb_rating": {
        "id": 0,
        "name": "Everyone",
        "slug": "everyone"
      },
      "id": 0,
      "metacritic": 0,
      "name": "string",
      "platforms": [
        {
          "platform": {
            "id": 0,
            "name": "string",
            "slug": "string"
          },
          "released_at": "string",
          "requirements": {
            "minimum": "string",
            "recommended": "string"
          }
        }
      ],
      "playtime": 0,
      "rating": 0,
      "rating_top": 0,
      "ratings": {},
      "ratings_count": 0,
      "released": "1970-01-01",
      "reviews_text_count": "string",
      "slug": "string",
      "suggestions_count": 0,
      "tba": true,
      "updated": "1970-01-01T00:00:00Z"
    }
  ]
}
```

<h3 id="get-a-list-of-parent-games-for-dlcs-and-editions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="get-a-list-of-parent-games-for-dlcs-and-editions-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[Game](#schemagame)]|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get screenshots for the game.

<a id="opIdgames_screenshots_list"></a>

> Code samples

```bash
curl https://example.com/games/string/screenshots \
  -H 'Accept: application/json'
```

`GET /games/{game_pk}/screenshots`

<h3 id="get-screenshots-for-the-game-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ordering|query|string|false|Which field to use when ordering the results.|
|page|query|integer|false|A page number within the paginated result set.|
|page_size|query|integer|false|Number of results to return per page.|
|game_pk|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "next": "http://example.com",
  "previous": "http://example.com",
  "results": [
    {
      "hidden": false,
      "image": "@image.jpg"
    }
  ]
}
```

<h3 id="get-screenshots-for-the-game-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="get-screenshots-for-the-game-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[ScreenShot](#schemascreenshot)]|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get links to the stores that sell the game.

<a id="opIdgames_stores_list"></a>

> Code samples

```bash
curl https://example.com/games/string/stores \
  -H 'Accept: application/json'
```

`GET /games/{game_pk}/stores`

<h3 id="get-links-to-the-stores-that-sell-the-game-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ordering|query|string|false|Which field to use when ordering the results.|
|page|query|integer|false|A page number within the paginated result set.|
|page_size|query|integer|false|Number of results to return per page.|
|game_pk|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "next": "http://example.com",
  "previous": "http://example.com",
  "results": [
    {
      "game_id": "string",
      "id": 0,
      "store_id": "string",
      "url": "http://example.com"
    }
  ]
}
```

<h3 id="get-links-to-the-stores-that-sell-the-game-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="get-links-to-the-stores-that-sell-the-game-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[GameStoreFull](#schemagamestorefull)]|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get details of the game.

<a id="opIdgames_read"></a>

> Code samples

```bash
curl https://example.com/games/string \
  -H 'Accept: application/json'
```

`GET /games/{id}`

<h3 id="get-details-of-the-game-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|An ID or a slug identifying this Game.|

> Example responses

> 200 Response

```json
{
  "achievements_count": 0,
  "added": 0,
  "added_by_status": {},
  "additions_count": 0,
  "alternative_names": [
    "string"
  ],
  "background_image": "http://example.com",
  "background_image_additional": "string",
  "creators_count": 0,
  "description": "string",
  "esrb_rating": {
    "id": 0,
    "name": "Everyone",
    "slug": "everyone"
  },
  "game_series_count": 0,
  "id": 0,
  "metacritic": 0,
  "metacritic_platforms": [
    {
      "metascore": 0,
      "url": "string"
    }
  ],
  "metacritic_url": "string",
  "movies_count": 0,
  "name": "string",
  "name_original": "string",
  "parent_achievements_count": "string",
  "parents_count": 0,
  "platforms": [
    {
      "platform": {
        "id": 0,
        "name": "string",
        "slug": "string"
      },
      "released_at": "string",
      "requirements": {
        "minimum": "string",
        "recommended": "string"
      }
    }
  ],
  "playtime": 0,
  "rating": 0,
  "rating_top": 0,
  "ratings": {},
  "ratings_count": 0,
  "reactions": {},
  "reddit_count": 0,
  "reddit_description": "string",
  "reddit_logo": "http://example.com",
  "reddit_name": "string",
  "reddit_url": "string",
  "released": "1970-01-01",
  "reviews_text_count": "string",
  "screenshots_count": 0,
  "slug": "string",
  "suggestions_count": 0,
  "tba": true,
  "twitch_count": "string",
  "updated": "1970-01-01T00:00:00Z",
  "website": "http://example.com",
  "youtube_count": "string"
}
```

<h3 id="get-details-of-the-game-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[GameSingle](#schemagamesingle)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a list of game achievements.

<a id="opIdgames_achievements_read"></a>

> Code samples

```bash
curl https://example.com/games/string/achievements \
  -H 'Accept: application/json'
```

`GET /games/{id}/achievements`

<h3 id="get-a-list-of-game-achievements-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|An ID or a slug identifying this Game.|

> Example responses

> 200 Response

```json
{
  "description": "string",
  "id": 0,
  "image": "http://example.com",
  "name": "string",
  "percent": "string"
}
```

<h3 id="get-a-list-of-game-achievements-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[ParentAchievement](#schemaparentachievement)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a list of game trailers.

<a id="opIdgames_movies_read"></a>

> Code samples

```bash
curl https://example.com/games/string/movies \
  -H 'Accept: application/json'
```

`GET /games/{id}/movies`

<h3 id="get-a-list-of-game-trailers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|An ID or a slug identifying this Game.|

> Example responses

> 200 Response

```json
{
  "data": {},
  "id": 0,
  "name": "string",
  "preview": "http://example.com"
}
```

<h3 id="get-a-list-of-game-trailers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Movie](#schemamovie)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a list of most recent posts from the game's subreddit.

<a id="opIdgames_reddit_read"></a>

> Code samples

```bash
curl https://example.com/games/string/reddit \
  -H 'Accept: application/json'
```

`GET /games/{id}/reddit`

<h3 id="get-a-list-of-most-recent-posts-from-the-games-subreddit-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|An ID or a slug identifying this Game.|

> Example responses

> 200 Response

```json
{
  "created": "1970-01-01T00:00:00Z",
  "id": 0,
  "image": "http://example.com",
  "name": "string",
  "text": "string",
  "url": "http://example.com",
  "username": "string",
  "username_url": "http://example.com"
}
```

<h3 id="get-a-list-of-most-recent-posts-from-the-games-subreddit-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Reddit](#schemareddit)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a list of visually similar games, available only for business and enterprise API users.

<a id="opIdgames_suggested_read"></a>

> Code samples

```bash
curl https://example.com/games/string/suggested \
  -H 'Accept: application/json'
```

`GET /games/{id}/suggested`

<h3 id="get-a-list-of-visually-similar-games-available-only-for-business-and-enterprise-api-users-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|An ID or a slug identifying this Game.|

> Example responses

> 200 Response

```json
{
  "achievements_count": 0,
  "added": 0,
  "added_by_status": {},
  "additions_count": 0,
  "alternative_names": [
    "string"
  ],
  "background_image": "http://example.com",
  "background_image_additional": "string",
  "creators_count": 0,
  "description": "string",
  "esrb_rating": {
    "id": 0,
    "name": "Everyone",
    "slug": "everyone"
  },
  "game_series_count": 0,
  "id": 0,
  "metacritic": 0,
  "metacritic_platforms": [
    {
      "metascore": 0,
      "url": "string"
    }
  ],
  "metacritic_url": "string",
  "movies_count": 0,
  "name": "string",
  "name_original": "string",
  "parent_achievements_count": "string",
  "parents_count": 0,
  "platforms": [
    {
      "platform": {
        "id": 0,
        "name": "string",
        "slug": "string"
      },
      "released_at": "string",
      "requirements": {
        "minimum": "string",
        "recommended": "string"
      }
    }
  ],
  "playtime": 0,
  "rating": 0,
  "rating_top": 0,
  "ratings": {},
  "ratings_count": 0,
  "reactions": {},
  "reddit_count": 0,
  "reddit_description": "string",
  "reddit_logo": "http://example.com",
  "reddit_name": "string",
  "reddit_url": "string",
  "released": "1970-01-01",
  "reviews_text_count": "string",
  "screenshots_count": 0,
  "slug": "string",
  "suggestions_count": 0,
  "tba": true,
  "twitch_count": "string",
  "updated": "1970-01-01T00:00:00Z",
  "website": "http://example.com",
  "youtube_count": "string"
}
```

<h3 id="get-a-list-of-visually-similar-games-available-only-for-business-and-enterprise-api-users-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[GameSingle](#schemagamesingle)|

<aside class="success">
This operation does not require authentication
</aside>

## Get streams on Twitch associated with the game, available only for business and enterprise API users.

<a id="opIdgames_twitch_read"></a>

> Code samples

```bash
curl https://example.com/games/string/twitch \
  -H 'Accept: application/json'
```

`GET /games/{id}/twitch`

<h3 id="get-streams-on-twitch-associated-with-the-game-available-only-for-business-and-enterprise-api-users-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|An ID or a slug identifying this Game.|

> Example responses

> 200 Response

```json
{
  "created": "1970-01-01T00:00:00Z",
  "description": "string",
  "external_id": 0,
  "id": 0,
  "language": "string",
  "name": "string",
  "published": "1970-01-01T00:00:00Z",
  "thumbnail": "http://example.com",
  "view_count": 0
}
```

<h3 id="get-streams-on-twitch-associated-with-the-game-available-only-for-business-and-enterprise-api-users-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Twitch](#schematwitch)|

<aside class="success">
This operation does not require authentication
</aside>

## Get videos from YouTube associated with the game, available only for business and enterprise API users.

<a id="opIdgames_youtube_read"></a>

> Code samples

```bash
curl https://example.com/games/string/youtube \
  -H 'Accept: application/json'
```

`GET /games/{id}/youtube`

<h3 id="get-videos-from-youtube-associated-with-the-game-available-only-for-business-and-enterprise-api-users-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|An ID or a slug identifying this Game.|

> Example responses

> 200 Response

```json
{
  "channel_id": "string",
  "channel_title": "string",
  "comments_count": 0,
  "created": "1970-01-01T00:00:00Z",
  "description": "string",
  "dislike_count": 0,
  "external_id": "string",
  "favorite_count": 0,
  "id": 0,
  "like_count": 0,
  "name": "string",
  "thumbnails": {},
  "view_count": 0
}
```

<h3 id="get-videos-from-youtube-associated-with-the-game-available-only-for-business-and-enterprise-api-users-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Youtube](#schemayoutube)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="rawg-video-games-database-api-genres">genres</h1>

## Get a list of video game genres.

<a id="opIdgenres_list"></a>

> Code samples

```bash
curl https://example.com/genres \
  -H 'Accept: application/json'
```

`GET /genres`

<h3 id="get-a-list-of-video-game-genres-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ordering|query|string|false|Which field to use when ordering the results.|
|page|query|integer|false|A page number within the paginated result set.|
|page_size|query|integer|false|Number of results to return per page.|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "next": "http://example.com",
  "previous": "http://example.com",
  "results": [
    {
      "games_count": 0,
      "id": 0,
      "image_background": "http://example.com",
      "name": "string",
      "slug": "string"
    }
  ]
}
```

<h3 id="get-a-list-of-video-game-genres-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="get-a-list-of-video-game-genres-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[Genre](#schemagenre)]|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get details of the genre.

<a id="opIdgenres_read"></a>

> Code samples

```bash
curl https://example.com/genres/0 \
  -H 'Accept: application/json'
```

`GET /genres/{id}`

<h3 id="get-details-of-the-genre-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this Genre.|

> Example responses

> 200 Response

```json
{
  "description": "string",
  "games_count": 0,
  "id": 0,
  "image_background": "http://example.com",
  "name": "string",
  "slug": "string"
}
```

<h3 id="get-details-of-the-genre-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[GenreSingle](#schemagenresingle)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="rawg-video-games-database-api-platforms">platforms</h1>

## Get a list of video game platforms.

<a id="opIdplatforms_list"></a>

> Code samples

```bash
curl https://example.com/platforms \
  -H 'Accept: application/json'
```

`GET /platforms`

<h3 id="get-a-list-of-video-game-platforms-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ordering|query|string|false|Which field to use when ordering the results.|
|page|query|integer|false|A page number within the paginated result set.|
|page_size|query|integer|false|Number of results to return per page.|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "next": "http://example.com",
  "previous": "http://example.com",
  "results": [
    {
      "games_count": 0,
      "id": 0,
      "image": "http://example.com",
      "image_background": "http://example.com",
      "name": "string",
      "slug": "string",
      "year_end": 0,
      "year_start": 0
    }
  ]
}
```

<h3 id="get-a-list-of-video-game-platforms-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="get-a-list-of-video-game-platforms-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[Platform](#schemaplatform)]|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get a list of parent platforms.

<a id="opIdplatforms_lists_parents_list"></a>

> Code samples

```bash
curl https://example.com/platforms/lists/parents \
  -H 'Accept: application/json'
```

`GET /platforms/lists/parents`

For instance, for PS2 and PS4 the “parent platform” is PlayStation.

<h3 id="get-a-list-of-parent-platforms-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ordering|query|string|false|Which field to use when ordering the results.|
|page|query|integer|false|A page number within the paginated result set.|
|page_size|query|integer|false|Number of results to return per page.|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "next": "http://example.com",
  "previous": "http://example.com",
  "results": [
    {
      "id": 0,
      "name": "string",
      "platforms": [
        {
          "games_count": 0,
          "id": 0,
          "image": "http://example.com",
          "image_background": "http://example.com",
          "name": "string",
          "slug": "string",
          "year_end": 0,
          "year_start": 0
        }
      ],
      "slug": "string"
    }
  ]
}
```

<h3 id="get-a-list-of-parent-platforms-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="get-a-list-of-parent-platforms-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[PlatformParentSingle](#schemaplatformparentsingle)]|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get details of the platform.

<a id="opIdplatforms_read"></a>

> Code samples

```bash
curl https://example.com/platforms/0 \
  -H 'Accept: application/json'
```

`GET /platforms/{id}`

<h3 id="get-details-of-the-platform-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this Platform.|

> Example responses

> 200 Response

```json
{
  "description": "string",
  "games_count": 0,
  "id": 0,
  "image": "http://example.com",
  "image_background": "http://example.com",
  "name": "string",
  "slug": "string",
  "year_end": 0,
  "year_start": 0
}
```

<h3 id="get-details-of-the-platform-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[PlatformSingle](#schemaplatformsingle)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="rawg-video-games-database-api-publishers">publishers</h1>

## Get a list of video game publishers.

<a id="opIdpublishers_list"></a>

> Code samples

```bash
curl https://example.com/publishers \
  -H 'Accept: application/json'
```

`GET /publishers`

<h3 id="get-a-list-of-video-game-publishers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer|false|A page number within the paginated result set.|
|page_size|query|integer|false|Number of results to return per page.|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "next": "http://example.com",
  "previous": "http://example.com",
  "results": [
    {
      "games_count": 0,
      "id": 0,
      "image_background": "http://example.com",
      "name": "string",
      "slug": "string"
    }
  ]
}
```

<h3 id="get-a-list-of-video-game-publishers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="get-a-list-of-video-game-publishers-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[Publisher](#schemapublisher)]|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get details of the publisher.

<a id="opIdpublishers_read"></a>

> Code samples

```bash
curl https://example.com/publishers/0 \
  -H 'Accept: application/json'
```

`GET /publishers/{id}`

<h3 id="get-details-of-the-publisher-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this Publisher.|

> Example responses

> 200 Response

```json
{
  "description": "string",
  "games_count": 0,
  "id": 0,
  "image_background": "http://example.com",
  "name": "string",
  "slug": "string"
}
```

<h3 id="get-details-of-the-publisher-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[PublisherSingle](#schemapublishersingle)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="rawg-video-games-database-api-stores">stores</h1>

## Get a list of video game storefronts.

<a id="opIdstores_list"></a>

> Code samples

```bash
curl https://example.com/stores \
  -H 'Accept: application/json'
```

`GET /stores`

<h3 id="get-a-list-of-video-game-storefronts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ordering|query|string|false|Which field to use when ordering the results.|
|page|query|integer|false|A page number within the paginated result set.|
|page_size|query|integer|false|Number of results to return per page.|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "next": "http://example.com",
  "previous": "http://example.com",
  "results": [
    {
      "domain": "string",
      "games_count": 0,
      "id": 0,
      "image_background": "http://example.com",
      "name": "string",
      "slug": "string"
    }
  ]
}
```

<h3 id="get-a-list-of-video-game-storefronts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="get-a-list-of-video-game-storefronts-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[Store](#schemastore)]|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get details of the store.

<a id="opIdstores_read"></a>

> Code samples

```bash
curl https://example.com/stores/0 \
  -H 'Accept: application/json'
```

`GET /stores/{id}`

<h3 id="get-details-of-the-store-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this Store.|

> Example responses

> 200 Response

```json
{
  "description": "string",
  "domain": "string",
  "games_count": 0,
  "id": 0,
  "image_background": "http://example.com",
  "name": "string",
  "slug": "string"
}
```

<h3 id="get-details-of-the-store-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[StoreSingle](#schemastoresingle)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="rawg-video-games-database-api-tags">tags</h1>

## Get a list of tags.

<a id="opIdtags_list"></a>

> Code samples

```bash
curl https://example.com/tags \
  -H 'Accept: application/json'
```

`GET /tags`

<h3 id="get-a-list-of-tags-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer|false|A page number within the paginated result set.|
|page_size|query|integer|false|Number of results to return per page.|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "next": "http://example.com",
  "previous": "http://example.com",
  "results": [
    {
      "games_count": 0,
      "id": 0,
      "image_background": "http://example.com",
      "language": "string",
      "name": "string",
      "slug": "string"
    }
  ]
}
```

<h3 id="get-a-list-of-tags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="get-a-list-of-tags-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[Tag](#schematag)]|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get details of the tag.

<a id="opIdtags_read"></a>

> Code samples

```bash
curl https://example.com/tags/0 \
  -H 'Accept: application/json'
```

`GET /tags/{id}`

<h3 id="get-details-of-the-tag-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this Tag.|

> Example responses

> 200 Response

```json
{
  "description": "string",
  "games_count": 0,
  "id": 0,
  "image_background": "http://example.com",
  "name": "string",
  "slug": "string"
}
```

<h3 id="get-details-of-the-tag-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[TagSingle](#schematagsingle)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_Developer">Developer</h2>
<!-- backwards compatibility -->
<a id="schemadeveloper"></a>
<a id="schema_Developer"></a>
<a id="tocSdeveloper"></a>
<a id="tocsdeveloper"></a>

```json
{
  "games_count": 0,
  "id": 0,
  "image_background": "http://example.com",
  "name": "string",
  "slug": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|games_count|integer|false|read-only|none|
|id|integer|false|read-only|none|
|image_background|string(uri)|false|read-only|none|
|name|string|true|none|none|
|slug|string(slug)|false|read-only|none|

<h2 id="tocS_DeveloperSingle">DeveloperSingle</h2>
<!-- backwards compatibility -->
<a id="schemadevelopersingle"></a>
<a id="schema_DeveloperSingle"></a>
<a id="tocSdevelopersingle"></a>
<a id="tocsdevelopersingle"></a>

```json
{
  "description": "string",
  "games_count": 0,
  "id": 0,
  "image_background": "http://example.com",
  "name": "string",
  "slug": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|none|
|games_count|integer|false|read-only|none|
|id|integer|false|read-only|none|
|image_background|string(uri)|false|read-only|none|
|name|string|true|none|none|
|slug|string(slug)|false|read-only|none|

<h2 id="tocS_Game">Game</h2>
<!-- backwards compatibility -->
<a id="schemagame"></a>
<a id="schema_Game"></a>
<a id="tocSgame"></a>
<a id="tocsgame"></a>

```json
{
  "added": 0,
  "added_by_status": {},
  "background_image": "http://example.com",
  "esrb_rating": {
    "id": 0,
    "name": "Everyone",
    "slug": "everyone"
  },
  "id": 0,
  "metacritic": 0,
  "name": "string",
  "platforms": [
    {
      "platform": {
        "id": 0,
        "name": "string",
        "slug": "string"
      },
      "released_at": "string",
      "requirements": {
        "minimum": "string",
        "recommended": "string"
      }
    }
  ],
  "playtime": 0,
  "rating": 0,
  "rating_top": 0,
  "ratings": {},
  "ratings_count": 0,
  "released": "1970-01-01",
  "reviews_text_count": "string",
  "slug": "string",
  "suggestions_count": 0,
  "tba": true,
  "updated": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|added|integer|false|read-only|none|
|added_by_status|object|false|read-only|none|
|background_image|string(uri)|false|read-only|none|
|esrb_rating|object \| null|false|none|none|
|id|integer|false|read-only|none|
|metacritic|integer|false|read-only|none|
|name|string|false|read-only|none|
|platforms|[object]|false|none|none|
|playtime|integer|false|read-only|in hours|
|rating|number|true|none|none|
|rating_top|integer|false|read-only|none|
|ratings|object|false|read-only|none|
|ratings_count|integer|false|read-only|none|
|released|string(date)|false|read-only|none|
|reviews_text_count|string|false|read-only|none|
|slug|string(slug)|false|read-only|none|
|suggestions_count|integer|false|read-only|none|
|tba|boolean|false|read-only|none|
|updated|string(date-time)|false|read-only|none|

<h2 id="tocS_GamePersonList">GamePersonList</h2>
<!-- backwards compatibility -->
<a id="schemagamepersonlist"></a>
<a id="schema_GamePersonList"></a>
<a id="tocSgamepersonlist"></a>
<a id="tocsgamepersonlist"></a>

```json
{
  "games_count": 0,
  "id": 0,
  "image": "http://example.com",
  "image_background": "http://example.com",
  "name": "string",
  "slug": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|games_count|integer|false|read-only|none|
|id|integer|false|read-only|none|
|image|string(uri)|false|read-only|none|
|image_background|string(uri)|false|read-only|none|
|name|string|true|none|none|
|slug|string(slug)|false|read-only|none|

<h2 id="tocS_GamePlatformMetacritic">GamePlatformMetacritic</h2>
<!-- backwards compatibility -->
<a id="schemagameplatformmetacritic"></a>
<a id="schema_GamePlatformMetacritic"></a>
<a id="tocSgameplatformmetacritic"></a>
<a id="tocsgameplatformmetacritic"></a>

```json
{
  "metascore": 0,
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|metascore|integer|false|read-only|none|
|url|string|false|read-only|none|

<h2 id="tocS_GameSingle">GameSingle</h2>
<!-- backwards compatibility -->
<a id="schemagamesingle"></a>
<a id="schema_GameSingle"></a>
<a id="tocSgamesingle"></a>
<a id="tocsgamesingle"></a>

```json
{
  "achievements_count": 0,
  "added": 0,
  "added_by_status": {},
  "additions_count": 0,
  "alternative_names": [
    "string"
  ],
  "background_image": "http://example.com",
  "background_image_additional": "string",
  "creators_count": 0,
  "description": "string",
  "esrb_rating": {
    "id": 0,
    "name": "Everyone",
    "slug": "everyone"
  },
  "game_series_count": 0,
  "id": 0,
  "metacritic": 0,
  "metacritic_platforms": [
    {
      "metascore": 0,
      "url": "string"
    }
  ],
  "metacritic_url": "string",
  "movies_count": 0,
  "name": "string",
  "name_original": "string",
  "parent_achievements_count": "string",
  "parents_count": 0,
  "platforms": [
    {
      "platform": {
        "id": 0,
        "name": "string",
        "slug": "string"
      },
      "released_at": "string",
      "requirements": {
        "minimum": "string",
        "recommended": "string"
      }
    }
  ],
  "playtime": 0,
  "rating": 0,
  "rating_top": 0,
  "ratings": {},
  "ratings_count": 0,
  "reactions": {},
  "reddit_count": 0,
  "reddit_description": "string",
  "reddit_logo": "http://example.com",
  "reddit_name": "string",
  "reddit_url": "string",
  "released": "1970-01-01",
  "reviews_text_count": "string",
  "screenshots_count": 0,
  "slug": "string",
  "suggestions_count": 0,
  "tba": true,
  "twitch_count": "string",
  "updated": "1970-01-01T00:00:00Z",
  "website": "http://example.com",
  "youtube_count": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|achievements_count|integer|false|read-only|none|
|added|integer|false|read-only|none|
|added_by_status|object|false|read-only|none|
|additions_count|integer|false|read-only|none|
|alternative_names|[string]|false|read-only|none|
|background_image|string(uri)|false|read-only|none|
|background_image_additional|string|false|read-only|none|
|creators_count|integer|false|read-only|none|
|description|string|false|read-only|none|
|esrb_rating|object \| null|false|none|none|
|game_series_count|integer|false|read-only|none|
|id|integer|false|read-only|none|
|metacritic|integer|false|read-only|none|
|metacritic_platforms|[[GamePlatformMetacritic](#schemagameplatformmetacritic)]|false|read-only|none|
|metacritic_url|string|false|read-only|For example "http://www.metacritic.com/game/playstation-4/the-witcher-3-wild-hunt"|
|movies_count|integer|false|read-only|none|
|name|string|false|read-only|none|
|name_original|string|false|read-only|none|
|parent_achievements_count|string|false|read-only|none|
|parents_count|integer|false|read-only|none|
|platforms|[object]|false|none|none|
|playtime|integer|false|read-only|in hours|
|rating|number|true|none|none|
|rating_top|integer|false|read-only|none|
|ratings|object|false|read-only|none|
|ratings_count|integer|false|read-only|none|
|reactions|object|false|read-only|none|
|reddit_count|integer|false|read-only|none|
|reddit_description|string|false|read-only|none|
|reddit_logo|string(uri)|false|read-only|none|
|reddit_name|string|false|read-only|none|
|reddit_url|string|false|read-only|For example "https://www.reddit.com/r/uncharted/" or "uncharted"|
|released|string(date)|false|read-only|none|
|reviews_text_count|string|false|read-only|none|
|screenshots_count|integer|false|read-only|none|
|slug|string(slug)|false|read-only|none|
|suggestions_count|integer|false|read-only|none|
|tba|boolean|false|read-only|none|
|twitch_count|string|false|read-only|none|
|updated|string(date-time)|false|read-only|none|
|website|string(uri)|false|read-only|none|
|youtube_count|string|false|read-only|none|

<h2 id="tocS_GameStoreFull">GameStoreFull</h2>
<!-- backwards compatibility -->
<a id="schemagamestorefull"></a>
<a id="schema_GameStoreFull"></a>
<a id="tocSgamestorefull"></a>
<a id="tocsgamestorefull"></a>

```json
{
  "game_id": "string",
  "id": 0,
  "store_id": "string",
  "url": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|game_id|string|false|read-only|none|
|id|integer|false|read-only|none|
|store_id|string|false|read-only|none|
|url|string(uri)|true|none|none|

<h2 id="tocS_Genre">Genre</h2>
<!-- backwards compatibility -->
<a id="schemagenre"></a>
<a id="schema_Genre"></a>
<a id="tocSgenre"></a>
<a id="tocsgenre"></a>

```json
{
  "games_count": 0,
  "id": 0,
  "image_background": "http://example.com",
  "name": "string",
  "slug": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|games_count|integer|false|read-only|none|
|id|integer|false|read-only|none|
|image_background|string(uri)|false|read-only|none|
|name|string|true|none|none|
|slug|string(slug)|false|read-only|none|

<h2 id="tocS_GenreSingle">GenreSingle</h2>
<!-- backwards compatibility -->
<a id="schemagenresingle"></a>
<a id="schema_GenreSingle"></a>
<a id="tocSgenresingle"></a>
<a id="tocsgenresingle"></a>

```json
{
  "description": "string",
  "games_count": 0,
  "id": 0,
  "image_background": "http://example.com",
  "name": "string",
  "slug": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|none|
|games_count|integer|false|read-only|none|
|id|integer|false|read-only|none|
|image_background|string(uri)|false|read-only|none|
|name|string|true|none|none|
|slug|string(slug)|false|read-only|none|

<h2 id="tocS_Movie">Movie</h2>
<!-- backwards compatibility -->
<a id="schemamovie"></a>
<a id="schema_Movie"></a>
<a id="tocSmovie"></a>
<a id="tocsmovie"></a>

```json
{
  "data": {},
  "id": 0,
  "name": "string",
  "preview": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|read-only|none|
|id|integer|false|read-only|none|
|name|string|false|read-only|none|
|preview|string(uri)|false|read-only|none|

<h2 id="tocS_ParentAchievement">ParentAchievement</h2>
<!-- backwards compatibility -->
<a id="schemaparentachievement"></a>
<a id="schema_ParentAchievement"></a>
<a id="tocSparentachievement"></a>
<a id="tocsparentachievement"></a>

```json
{
  "description": "string",
  "id": 0,
  "image": "http://example.com",
  "name": "string",
  "percent": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|read-only|none|
|id|integer|false|read-only|none|
|image|string(uri)|false|read-only|none|
|name|string|false|read-only|none|
|percent|string(decimal)|false|read-only|none|

<h2 id="tocS_Person">Person</h2>
<!-- backwards compatibility -->
<a id="schemaperson"></a>
<a id="schema_Person"></a>
<a id="tocSperson"></a>
<a id="tocsperson"></a>

```json
{
  "games_count": 0,
  "id": 0,
  "image": "http://example.com",
  "image_background": "http://example.com",
  "name": "string",
  "slug": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|games_count|integer|false|read-only|none|
|id|integer|false|read-only|none|
|image|string(uri)|false|read-only|none|
|image_background|string(uri)|false|read-only|none|
|name|string|true|none|none|
|slug|string(slug)|false|read-only|none|

<h2 id="tocS_PersonSingle">PersonSingle</h2>
<!-- backwards compatibility -->
<a id="schemapersonsingle"></a>
<a id="schema_PersonSingle"></a>
<a id="tocSpersonsingle"></a>
<a id="tocspersonsingle"></a>

```json
{
  "description": "string",
  "games_count": 0,
  "id": 0,
  "image": "http://example.com",
  "image_background": "http://example.com",
  "name": "string",
  "rating": "string",
  "rating_top": 0,
  "reviews_count": 0,
  "slug": "string",
  "updated": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|none|
|games_count|integer|false|read-only|none|
|id|integer|false|read-only|none|
|image|string(uri)|false|read-only|none|
|image_background|string(uri)|false|read-only|none|
|name|string|true|none|none|
|rating|string(decimal)|false|read-only|none|
|rating_top|integer|false|read-only|none|
|reviews_count|integer|false|read-only|none|
|slug|string(slug)|false|read-only|none|
|updated|string(date-time)|false|read-only|none|

<h2 id="tocS_Platform">Platform</h2>
<!-- backwards compatibility -->
<a id="schemaplatform"></a>
<a id="schema_Platform"></a>
<a id="tocSplatform"></a>
<a id="tocsplatform"></a>

```json
{
  "games_count": 0,
  "id": 0,
  "image": "http://example.com",
  "image_background": "http://example.com",
  "name": "string",
  "slug": "string",
  "year_end": 0,
  "year_start": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|games_count|integer|false|read-only|none|
|id|integer|false|read-only|none|
|image|string(uri) \| null|false|read-only|none|
|image_background|string(uri)|false|read-only|none|
|name|string|true|none|none|
|slug|string(slug)|false|read-only|none|
|year_end|integer \| null|false|none|none|
|year_start|integer \| null|false|none|none|

<h2 id="tocS_PlatformParentSingle">PlatformParentSingle</h2>
<!-- backwards compatibility -->
<a id="schemaplatformparentsingle"></a>
<a id="schema_PlatformParentSingle"></a>
<a id="tocSplatformparentsingle"></a>
<a id="tocsplatformparentsingle"></a>

```json
{
  "id": 0,
  "name": "string",
  "platforms": [
    {
      "games_count": 0,
      "id": 0,
      "image": "http://example.com",
      "image_background": "http://example.com",
      "name": "string",
      "slug": "string",
      "year_end": 0,
      "year_start": 0
    }
  ],
  "slug": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|read-only|none|
|name|string|true|none|none|
|platforms|[[Platform](#schemaplatform)]|true|none|none|
|slug|string(slug)|false|read-only|none|

<h2 id="tocS_PlatformSingle">PlatformSingle</h2>
<!-- backwards compatibility -->
<a id="schemaplatformsingle"></a>
<a id="schema_PlatformSingle"></a>
<a id="tocSplatformsingle"></a>
<a id="tocsplatformsingle"></a>

```json
{
  "description": "string",
  "games_count": 0,
  "id": 0,
  "image": "http://example.com",
  "image_background": "http://example.com",
  "name": "string",
  "slug": "string",
  "year_end": 0,
  "year_start": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|none|
|games_count|integer|false|read-only|none|
|id|integer|false|read-only|none|
|image|string(uri) \| null|false|read-only|none|
|image_background|string(uri)|false|read-only|none|
|name|string|true|none|none|
|slug|string(slug)|false|read-only|none|
|year_end|integer \| null|false|none|none|
|year_start|integer \| null|false|none|none|

<h2 id="tocS_Position">Position</h2>
<!-- backwards compatibility -->
<a id="schemaposition"></a>
<a id="schema_Position"></a>
<a id="tocSposition"></a>
<a id="tocsposition"></a>

```json
{
  "id": 0,
  "name": "string",
  "slug": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|read-only|none|
|name|string|false|read-only|none|
|slug|string(slug)|false|read-only|none|

<h2 id="tocS_Publisher">Publisher</h2>
<!-- backwards compatibility -->
<a id="schemapublisher"></a>
<a id="schema_Publisher"></a>
<a id="tocSpublisher"></a>
<a id="tocspublisher"></a>

```json
{
  "games_count": 0,
  "id": 0,
  "image_background": "http://example.com",
  "name": "string",
  "slug": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|games_count|integer|false|read-only|none|
|id|integer|false|read-only|none|
|image_background|string(uri)|false|read-only|none|
|name|string|true|none|none|
|slug|string(slug)|false|read-only|none|

<h2 id="tocS_PublisherSingle">PublisherSingle</h2>
<!-- backwards compatibility -->
<a id="schemapublishersingle"></a>
<a id="schema_PublisherSingle"></a>
<a id="tocSpublishersingle"></a>
<a id="tocspublishersingle"></a>

```json
{
  "description": "string",
  "games_count": 0,
  "id": 0,
  "image_background": "http://example.com",
  "name": "string",
  "slug": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|none|
|games_count|integer|false|read-only|none|
|id|integer|false|read-only|none|
|image_background|string(uri)|false|read-only|none|
|name|string|true|none|none|
|slug|string(slug)|false|read-only|none|

<h2 id="tocS_Reddit">Reddit</h2>
<!-- backwards compatibility -->
<a id="schemareddit"></a>
<a id="schema_Reddit"></a>
<a id="tocSreddit"></a>
<a id="tocsreddit"></a>

```json
{
  "created": "1970-01-01T00:00:00Z",
  "id": 0,
  "image": "http://example.com",
  "name": "string",
  "text": "string",
  "url": "http://example.com",
  "username": "string",
  "username_url": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created|string(date-time)|false|read-only|none|
|id|integer|false|read-only|none|
|image|string(uri)|false|read-only|none|
|name|string|false|read-only|none|
|text|string|false|read-only|none|
|url|string(uri)|false|read-only|none|
|username|string|false|read-only|none|
|username_url|string(uri)|false|read-only|none|

<h2 id="tocS_ScreenShot">ScreenShot</h2>
<!-- backwards compatibility -->
<a id="schemascreenshot"></a>
<a id="schema_ScreenShot"></a>
<a id="tocSscreenshot"></a>
<a id="tocsscreenshot"></a>

```json
{
  "hidden": false,
  "image": "@image.jpg"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|height|integer|false|read-only|none|
|hidden|boolean|false|none|Set image as hidden or visible.|
|id|integer|false|read-only|none|
|image|string(uri)|false|read-only|An image file with size up to 20 MB.|
|width|integer|false|read-only|none|

<h2 id="tocS_Store">Store</h2>
<!-- backwards compatibility -->
<a id="schemastore"></a>
<a id="schema_Store"></a>
<a id="tocSstore"></a>
<a id="tocsstore"></a>

```json
{
  "domain": "string",
  "games_count": 0,
  "id": 0,
  "image_background": "http://example.com",
  "name": "string",
  "slug": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domain|string \| null|false|none|none|
|games_count|integer|false|read-only|none|
|id|integer|false|read-only|none|
|image_background|string(uri)|false|read-only|none|
|name|string|true|none|none|
|slug|string(slug)|false|read-only|none|

<h2 id="tocS_StoreSingle">StoreSingle</h2>
<!-- backwards compatibility -->
<a id="schemastoresingle"></a>
<a id="schema_StoreSingle"></a>
<a id="tocSstoresingle"></a>
<a id="tocsstoresingle"></a>

```json
{
  "description": "string",
  "domain": "string",
  "games_count": 0,
  "id": 0,
  "image_background": "http://example.com",
  "name": "string",
  "slug": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|none|
|domain|string \| null|false|none|none|
|games_count|integer|false|read-only|none|
|id|integer|false|read-only|none|
|image_background|string(uri)|false|read-only|none|
|name|string|true|none|none|
|slug|string(slug)|false|read-only|none|

<h2 id="tocS_Tag">Tag</h2>
<!-- backwards compatibility -->
<a id="schematag"></a>
<a id="schema_Tag"></a>
<a id="tocStag"></a>
<a id="tocstag"></a>

```json
{
  "games_count": 0,
  "id": 0,
  "image_background": "http://example.com",
  "language": "string",
  "name": "string",
  "slug": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|games_count|integer|false|read-only|none|
|id|integer|false|read-only|none|
|image_background|string(uri)|false|read-only|none|
|language|string|false|read-only|none|
|name|string|true|none|none|
|slug|string(slug)|false|read-only|none|

<h2 id="tocS_TagSingle">TagSingle</h2>
<!-- backwards compatibility -->
<a id="schematagsingle"></a>
<a id="schema_TagSingle"></a>
<a id="tocStagsingle"></a>
<a id="tocstagsingle"></a>

```json
{
  "description": "string",
  "games_count": 0,
  "id": 0,
  "image_background": "http://example.com",
  "name": "string",
  "slug": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|none|
|games_count|integer|false|read-only|none|
|id|integer|false|read-only|none|
|image_background|string(uri)|false|read-only|none|
|name|string|true|none|none|
|slug|string(slug)|false|read-only|none|

<h2 id="tocS_Twitch">Twitch</h2>
<!-- backwards compatibility -->
<a id="schematwitch"></a>
<a id="schema_Twitch"></a>
<a id="tocStwitch"></a>
<a id="tocstwitch"></a>

```json
{
  "created": "1970-01-01T00:00:00Z",
  "description": "string",
  "external_id": 0,
  "id": 0,
  "language": "string",
  "name": "string",
  "published": "1970-01-01T00:00:00Z",
  "thumbnail": "http://example.com",
  "view_count": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created|string(date-time)|false|read-only|none|
|description|string|false|read-only|none|
|external_id|integer|false|read-only|none|
|id|integer|false|read-only|none|
|language|string|false|read-only|none|
|name|string|false|read-only|none|
|published|string(date-time)|false|read-only|none|
|thumbnail|string(uri)|false|read-only|none|
|view_count|integer|false|read-only|none|

<h2 id="tocS_Youtube">Youtube</h2>
<!-- backwards compatibility -->
<a id="schemayoutube"></a>
<a id="schema_Youtube"></a>
<a id="tocSyoutube"></a>
<a id="tocsyoutube"></a>

```json
{
  "channel_id": "string",
  "channel_title": "string",
  "comments_count": 0,
  "created": "1970-01-01T00:00:00Z",
  "description": "string",
  "dislike_count": 0,
  "external_id": "string",
  "favorite_count": 0,
  "id": 0,
  "like_count": 0,
  "name": "string",
  "thumbnails": {},
  "view_count": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channel_id|string|false|read-only|none|
|channel_title|string|false|read-only|none|
|comments_count|integer|false|read-only|none|
|created|string(date-time)|false|read-only|none|
|description|string|false|read-only|none|
|dislike_count|integer|false|read-only|none|
|external_id|string|false|read-only|none|
|favorite_count|integer|false|read-only|none|
|id|integer|false|read-only|none|
|like_count|integer|false|read-only|none|
|name|string|false|read-only|none|
|thumbnails|object|false|read-only|none|
|view_count|integer|false|read-only|none|
