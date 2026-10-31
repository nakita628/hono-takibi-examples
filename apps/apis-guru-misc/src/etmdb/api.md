<h1 id="etmdb-rest-api-v1">EtMDB REST API v1 v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The Ethiopian Movie Database

Base URLs:

* <a href="https://etmdb.com">https://etmdb.com</a>

# Authentication

- oAuth2 authentication. OAuth2.0 Authorization for the EtMDB API

    - Flow: authorizationCode
    - Authorization URL = [https://etmdb.com/api/oauth/authorize/](https://etmdb.com/api/oauth/authorize/)
    - Token URL = [https://etmdb.com/api/oauth/token/](https://etmdb.com/api/oauth/token/)

|Scope|Scope Description|
|---|---|
|admin|Grants read and write access to administrative information|
|groups|Grants access to groups|
|read|Grants read access|
|write|Grants write access|

<h1 id="etmdb-rest-api-v1-cinema-detail">cinema-detail</h1>

## Return cinema details search result

<a id="opIdcinema-detail_search_read"></a>

> Code samples

```bash
curl https://example.com/api/v1/cinema-detail/search/string
```

`GET /api/v1/cinema-detail/search/{cinema_name}`

Return cinema details search result

### Response Class (Status 200)

* __{cinema_name}__: Used as a key word to search cinemas,

For more details on how cinemas are listed [see here][ref].
[ref]: https://etmdb.com/en/cinema-list/-updated_date

<h3 id="return-cinema-details-search-result-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cinema_name|path|string|true|none|

<h3 id="return-cinema-details-search-result-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="etmdb-rest-api-v1-cinema-schedule">cinema-schedule</h1>

## Return cinema schedule search result

<a id="opIdcinema-schedule_search_read"></a>

> Code samples

```bash
curl https://example.com/api/v1/cinema-schedule/search/string
```

`GET /api/v1/cinema-schedule/search/{movie_title}`

Return cinema schedule search result

### Response Class (Status 200)

* __{movie_title}__: Used as a key word to search movie cast
* You can use both Amharic or English charset/font to search

For more details about cinema schedule, check each cinema from the cinema list [see here][ref].
[ref]: https://etmdb.com/en/movie-list/-updated_date

<h3 id="return-cinema-schedule-search-result-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|movie_title|path|string|true|none|

<h3 id="return-cinema-schedule-search-result-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Return cinema schedule search result

<a id="opIdcinema-schedule_searchall_read"></a>

> Code samples

```bash
curl https://example.com/api/v1/cinema-schedule/searchall/string
```

`GET /api/v1/cinema-schedule/searchall/{param}`

Return cinema schedule search result

### Response Class (Status 200)
__{param}__ argument can be
* movie title
* cinema name
* cinema hall name or
* cinema technology

For more details about cinema schedule, check each cinema from the cinema list [see here][ref].
[ref]: https://etmdb.com/en/movie-list/-updated_date

<h3 id="return-cinema-schedule-search-result-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|param|path|string|true|none|

<h3 id="return-cinema-schedule-search-result-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="etmdb-rest-api-v1-cinema-shedule-showtime">cinema-shedule-showtime</h1>

## Return cinema schedule and showtime search result

<a id="opIdcinema-shedule-showtime_search_read"></a>

> Code samples

```bash
curl https://example.com/api/v1/cinema-shedule-showtime/search/string
```

`GET /api/v1/cinema-shedule-showtime/search/{movie_title}`

Return cinema schedule and showtime search result

### Response Class (Status 200)
* __{movie_title}__: Used as a key word to search movie cast
* You can use both Amharic or English charset/font to search

For more details about cinema schedule showtime, check each cinema from the cinema list [see here][ref].
[ref]: https://etmdb.com/en/movie-list/-updated_date

<h3 id="return-cinema-schedule-and-showtime-search-result-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|movie_title|path|string|true|none|

<h3 id="return-cinema-schedule-and-showtime-search-result-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Return cinema schedule and showtime search result

<a id="opIdcinema-shedule-showtime_searchall_read"></a>

> Code samples

```bash
curl https://example.com/api/v1/cinema-shedule-showtime/searchall/string
```

`GET /api/v1/cinema-shedule-showtime/searchall/{param}`

Return cinema schedule and showtime search result

### Response Class (Status 200)
__{param}__ argument can be
* movie title
* cinema name
* cinema hall name
* showtime starting date
* showtime ending date or
* cinema technology

For more details about cinema schedule, check each cinema from the cinema list [see here][ref].
[ref]: https://etmdb.com/en/movie-list/-updated_date

<h3 id="return-cinema-schedule-and-showtime-search-result-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|param|path|string|true|none|

<h3 id="return-cinema-schedule-and-showtime-search-result-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="etmdb-rest-api-v1-cinema">cinema</h1>

## Return cinema search result

<a id="opIdcinema_search_read"></a>

> Code samples

```bash
curl https://example.com/api/v1/cinema/search/string
```

`GET /api/v1/cinema/search/{id}`

Return cinema search result

### Response Class (Status 200)

* __{id}__: Used as a key to search cinemas,

For more details on how cinemas are listed [see here][ref].
[ref]: https://etmdb.com/en/cinema-list/-updated_date

<h3 id="return-cinema-search-result-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

<h3 id="return-cinema-search-result-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="etmdb-rest-api-v1-company-credits">company-credits</h1>

## Return company credits search result

<a id="opIdcompany-credits_search_read"></a>

> Code samples

```bash
curl https://example.com/api/v1/company-credits/search/string
```

`GET /api/v1/company-credits/search/{movie_title}`

Return company credits search result

### Response Class (Status 200)

* __{movie_title}__: Used as a key word to search company credits for the movie
* You can use both Amharic or English charset/font to search

For more details on how company credits are listed [see here][ref].
[ref]: https://etmdb.com/en/movie-list/-updated_date

<h3 id="return-company-credits-search-result-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|movie_title|path|string|true|none|

<h3 id="return-company-credits-search-result-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Return company credits search result

<a id="opIdcompany-credits_searchall_read"></a>

> Code samples

```bash
curl https://example.com/api/v1/company-credits/searchall/string
```

`GET /api/v1/company-credits/searchall/{param}`

Return company credits search result

### Response Class (Status 200)
__{param}__ argument can be
* company name
* movie title or
* company credit description (such as production, cinematography, etc)

For more details on how company credits are listed [see here][ref].
[ref]: https://etmdb.com/en/company-list/company_name

<h3 id="return-company-credits-search-result-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|param|path|string|true|none|

<h3 id="return-company-credits-search-result-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="etmdb-rest-api-v1-company">company</h1>

## Return company search result

<a id="opIdcompany_search_read"></a>

> Code samples

```bash
curl https://example.com/api/v1/company/search/string
```

`GET /api/v1/company/search/{company_name}`

Return company search result

### Response Class (Status 200)

* __{company_name}__: Used as a key word to search companies,

For more details on how companies are listed [see here][ref].
[ref]: https://etmdb.com/en/company-list/-updated_date

<h3 id="return-company-search-result-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|company_name|path|string|true|none|

<h3 id="return-company-search-result-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="etmdb-rest-api-v1-filmography-type">filmography-type</h1>

## Return filmography type search result

<a id="opIdfilmography-type_search_read"></a>

> Code samples

```bash
curl https://example.com/api/v1/filmography-type/search/string
```

`GET /api/v1/filmography-type/search/{filmography_description}`

Return filmography type search result

### Response Class (Status 200)

* __{filmography_description}__: Used as a key word to search filmography types

For more details on how filmography types are listed [see here][ref].
[ref]: https://etmdb.com/en/movie-list/-updated_date

<h3 id="return-filmography-type-search-result-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|filmography_description|path|string|true|none|

<h3 id="return-filmography-type-search-result-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="etmdb-rest-api-v1-filmography">filmography</h1>

## Return filmography search result

<a id="opIdfilmography_search_read"></a>

> Code samples

```bash
curl https://example.com/api/v1/filmography/search/string
```

`GET /api/v1/filmography/search/{movie_title}`

Return filmography search result

### Response Class (Status 200)

* __{movie_title}__: Used as a key word to search movies
* You can use both Amharic or English charset/font to search

For more details on how filmographies are listed [see here][ref].
[ref]: https://etmdb.com/en/movie-list/-updated_date

<h3 id="return-filmography-search-result-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|movie_title|path|string|true|none|

<h3 id="return-filmography-search-result-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Return filmography search result

<a id="opIdfilmography_searchall_read"></a>

> Code samples

```bash
curl https://example.com/api/v1/filmography/searchall/string
```

`GET /api/v1/filmography/searchall/{param}`

Return filmography search result

### Response Class (Status 200)
__{param}__ argument can be
* artist first name
* artist last name
* artist username
* movie title or
* filmography description (such as director, actor, producer, etc)

For more details on how filmographies are listed [see here][ref].
[ref]: https://etmdb.com/en/movie-list/-updated_date

<h3 id="return-filmography-search-result-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|param|path|string|true|none|

<h3 id="return-filmography-search-result-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="etmdb-rest-api-v1-genre-type">genre-type</h1>

## Return genre type search result

<a id="opIdgenre-type_search_read"></a>

> Code samples

```bash
curl https://example.com/api/v1/genre-type/search/string
```

`GET /api/v1/genre-type/search/{genre_description}`

Return genre type search result

### Response Class (Status 200)

* __{genre_description}__: Used as a key word to search genre types

For more details on how genre types are listed [see here][ref].
[ref]: https://etmdb.com/en/movie-list/-updated_date

<h3 id="return-genre-type-search-result-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|genre_description|path|string|true|none|

<h3 id="return-genre-type-search-result-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="etmdb-rest-api-v1-genre">genre</h1>

## Return movie genre search result

<a id="opIdgenre_search_read"></a>

> Code samples

```bash
curl https://example.com/api/v1/genre/search/string
```

`GET /api/v1/genre/search/{movie_title}`

Return movie genre search result

### Response Class (Status 200)

* __{movie_title}__: Used as a key word to search movie genres
* You can use both Amharic or English charset/font to search

For more details on how movies are listed [see here][ref].
[ref]: https://etmdb.com/en/movie-list/-updated_date

<h3 id="return-movie-genre-search-result-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|movie_title|path|string|true|none|

<h3 id="return-movie-genre-search-result-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Return movie genre search result

<a id="opIdgenre_searchall_read"></a>

> Code samples

```bash
curl https://example.com/api/v1/genre/searchall/string
```

`GET /api/v1/genre/searchall/{movie_genre_type}`

Return movie genre search result

### Response Class (Status 200)

* __{movie_genre_type}__: Used as a key word to search movie genres

For more details on how movies are listed [see here][ref].
[ref]: https://etmdb.com/en/movie-list/-updated_date

<h3 id="return-movie-genre-search-result-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|movie_genre_type|path|string|true|none|

<h3 id="return-movie-genre-search-result-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="etmdb-rest-api-v1-job">job</h1>

## Return job details search result

<a id="opIdjob_search_read"></a>

> Code samples

```bash
curl https://example.com/api/v1/job/search/string
```

`GET /api/v1/job/search/{job_title}`

Return job details search result

### Response Class (Status 200)

* __{job_title}__: Used as a key word to search jobs,

For more details on how job are listed [see here][ref].
[ref]: https://etmdb.com/en/job-list/-updated_date

<h3 id="return-job-details-search-result-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|job_title|path|string|true|none|

<h3 id="return-job-details-search-result-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Return job details search result

<a id="opIdjob_searchall_read"></a>

> Code samples

```bash
curl https://example.com/api/v1/job/searchall/string
```

`GET /api/v1/job/searchall/{company_name}`

Return job details search result

### Response Class (Status 200)

* __{company_name}__: Used as a key word to search jobs,

For more details on how job are listed [see here][ref].
[ref]: https://etmdb.com/en/job-list/-updated_date

<h3 id="return-job-details-search-result-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|company_name|path|string|true|none|

<h3 id="return-job-details-search-result-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="etmdb-rest-api-v1-media">media</h1>

## Return movie media search result

<a id="opIdmedia_search_read"></a>

> Code samples

```bash
curl https://example.com/api/v1/media/search/string
```

`GET /api/v1/media/search/{movie_title}`

Return movie media search result

### Response Class (Status 200)

* __{movie_title}__: Used as a key word to search media for movies
* You can use both Amharic or English charset/font to search

For more details on how media is listed [see here][ref].
[ref]: https://etmdb.com/en/movie-list/-updated_date

<h3 id="return-movie-media-search-result-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|movie_title|path|string|true|none|

<h3 id="return-movie-media-search-result-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Return cast media search result

<a id="opIdmedia_searchall_read"></a>

> Code samples

```bash
curl https://example.com/api/v1/media/searchall/string
```

`GET /api/v1/media/searchall/{user}`

Return cast media search result

### Response Class (Status 200)
__{user}__ argument can be
* artist first name
* artist last name
* artist username

For more details on how cast media is listed [see here][ref].
[ref]: https://etmdb.com/en/cast-list/-updated_date

<h3 id="return-cast-media-search-result-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user|path|string|true|none|

<h3 id="return-cast-media-search-result-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="etmdb-rest-api-v1-movie-cast">movie-cast</h1>

## Return movie cast search result

<a id="opIdmovie-cast_search_read"></a>

> Code samples

```bash
curl https://example.com/api/v1/movie-cast/search/string
```

`GET /api/v1/movie-cast/search/{movie_title}`

Return movie cast search result

### Response Class (Status 200)

* __{movie_title}__: Used as a key word to search movie cast
* You can use both Amharic or English charset/font to search

For more details on how movie casts are listed [see here][ref].
[ref]: https://etmdb.com/en/movie-list/-updated_date

<h3 id="return-movie-cast-search-result-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|movie_title|path|string|true|none|

<h3 id="return-movie-cast-search-result-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Return movie cast search result

<a id="opIdmovie-cast_searchall_read"></a>

> Code samples

```bash
curl https://example.com/api/v1/movie-cast/searchall/string
```

`GET /api/v1/movie-cast/searchall/{param}`

Return movie cast search result

### Response Class (Status 200)
__{param}__ argument can be
* artist first name
* artist last name
* artist username
* movie title or
* character name

For more details on how movie casts are listed [see here][ref].
[ref]: https://etmdb.com/en/movie-list/-updated_date

<h3 id="return-movie-cast-search-result-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|param|path|string|true|none|

<h3 id="return-movie-cast-search-result-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="etmdb-rest-api-v1-movie">movie</h1>

## Return movie search result

<a id="opIdmovie_search_read"></a>

> Code samples

```bash
curl https://example.com/api/v1/movie/search/string
```

`GET /api/v1/movie/search/{movie_title}`

Return movie search result

### Response Class (Status 200)

* __{movie_title}__: Used as a key word to search movies
* You can use both Amharic or English charset/font to search

For more details on how movies are listed [see here][ref].
[ref]: https://etmdb.com/en/movie-list/-updated_date

<h3 id="return-movie-search-result-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|movie_title|path|string|true|none|

<h3 id="return-movie-search-result-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="etmdb-rest-api-v1-news">news</h1>

## Return news or article search result

<a id="opIdnews_search_read"></a>

> Code samples

```bash
curl https://example.com/api/v1/news/search/string
```

`GET /api/v1/news/search/{title}`

Return news or article search result

### Response Class (Status 200)

* __{title}__: Used as a key word to search news and articles,

For more details on how news & articles are listed [see here][ref].
[ref]: https://etmdb.com/en/news-list/-updated_date

<h3 id="return-news-or-article-search-result-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|title|path|string|true|none|

<h3 id="return-news-or-article-search-result-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="etmdb-rest-api-v1-people">people</h1>

## Return cast search result

<a id="opIdpeople_search_read"></a>

> Code samples

```bash
curl https://example.com/api/v1/people/search/string
```

`GET /api/v1/people/search/{user}`

Return cast search result

### Response Class (Status 200)
__{param}__ argument can be
* artist first name
* artist last name
* artist username

For more details on how cast are listed [see here][ref].
[ref]: https://etmdb.com/en/cast-list/-updated_date

<h3 id="return-cast-search-result-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user|path|string|true|none|

<h3 id="return-cast-search-result-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="etmdb-rest-api-v1-showtime">showtime</h1>

## Return showtime search result

<a id="opIdshowtime_searchall_read"></a>

> Code samples

```bash
curl https://example.com/api/v1/showtime/searchall/string
```

`GET /api/v1/showtime/searchall/{param}`

Return showtime search result

### Response Class (Status 200)
__{param}__ argument can be
* show time or
* day of the week [Mon=1, Tue=2, Wed=3, Thu=4, Fri=5, Sat=6, Sun=7]

For more details about showtime, check each cinema from the cinema list [see here][ref].
[ref]: https://etmdb.com/en/movie-list/-updated_date

<h3 id="return-showtime-search-result-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|param|path|string|true|none|

<h3 id="return-showtime-search-result-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="etmdb-rest-api-v1-watchlist">watchlist</h1>

## Return watchlist search result

<a id="opIdwatchlist_search_read"></a>

> Code samples

```bash
curl https://example.com/api/v1/watchlist/search/string
```

`GET /api/v1/watchlist/search/{movie_title}`

Return watchlist search result

### Response Class (Status 200)

* __{movie_title}__: Used as a key word to search movies on watchlist
* You can use both Amharic or English charset/font to search

For more details on how watchlist are listed [see here][ref].
[ref]: https://etmdb.com/en/movies/watchlist/id

<h3 id="return-watchlist-search-result-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|movie_title|path|string|true|none|

<h3 id="return-watchlist-search-result-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Return watchlist search result

<a id="opIdwatchlist_searchall_read"></a>

> Code samples

```bash
curl https://example.com/api/v1/watchlist/searchall/string
```

`GET /api/v1/watchlist/searchall/{param}`

Return watchlist search result

### Response Class (Status 200)
__{param}__ argument can be
* artist first name
* artist last name
* artist username
* movie title or

For more details on how watchlist are listed [see here][ref].
[ref]: https://etmdb.com/en/movies/watchlist/id

<h3 id="return-watchlist-search-result-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|param|path|string|true|none|

<h3 id="return-watchlist-search-result-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>
