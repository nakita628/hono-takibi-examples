<h1 id="listen-api-podcast-search-directory-and-insights-api">Listen API: Podcast Search, Directory, and Insights API v2.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Simple & no-nonsense podcast search & directory API. Search all podcasts and episodes by people, places, or topics.

Base URLs:

* <a href="https://listen-api.listennotes.com/api/v2">https://listen-api.listennotes.com/api/v2</a> - API Production Server

<a href="https://www.listennotes.com/api/terms/">Terms of service</a>
Email: <a href="mailto:hello@listennotes.com">Listen Notes</a> 
Web: <a href="https://www.listennotes.com/api/">Listen Notes</a> 

<h1 id="listen-api-podcast-search-directory-and-insights-api-search-api">Search API</h1>

Endpoints to search podcasts

## Fetch related search terms

<a id="opIdgetRelatedSearches"></a>

> Code samples

```bash
curl 'https://example.com/related_searches?q=evergrande' \
  -H 'Accept: application/json' \
  -H 'X-ListenAPI-Key: string'
```

`GET /related_searches`

Suggest related search terms. The results are more comprehensive than from `GET /typeahead`. This endpoint is available only in the PRO/ENTERPRISE plan.

<h3 id="fetch-related-search-terms-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-ListenAPI-Key|header|string|true|Get API Key on listennotes.com/api|
|q|query|string|true|Search term, e.g., person, place, topic...<br>|

> Example responses

> 200 Response

```json
{
  "terms": [
    "evergrande stock",
    "evergrande china",
    "evergrande group",
    "evergrande news"
  ]
}
```

<h3 id="fetch-related-search-terms-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[RelatedSearchesResponse](#schemarelatedsearchesresponse)|
|400|Bad Request|Something wrong on your end (Client side errors), e.g., missing required parameters.|None|
|401|Unauthorized|Wrong api key, or your account is suspended.|None|
|429|Too Many Requests|For FREE plan, exceeding the quota limit; or for all plans, sending too many requests too fast and exceeding the rate limit.|None|
|5XX|Server Error|Something wrong on our end (Unexpected server errors).|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-ListenAPI-FreeQuota|integer||Free quotas of API requests included in your api plan.|
|200|X-ListenAPI-NextBillingDate|string|date-time|The timestamp for the start of next billing cycle. In ISO 8601 format.|
|200|X-ListenAPI-Usage|integer||The number of API requests that you've used in current billing cycle.|
|200|X-listenAPI-Latency-Seconds|number||Latency for this api call, in seconds.|

<aside class="success">
This operation does not require authentication
</aside>

## Full-text search

<a id="opIdsearch"></a>

> Code samples

```bash
curl 'https://example.com/search?q=star%20wars' \
  -H 'Accept: application/json' \
  -H 'X-ListenAPI-Key: string'
```

`GET /search`

Full-text search on episodes, podcasts, or curated lists of podcasts.
Use the `offset` parameter to paginate through search results.
The FREE plan allows to see up to 30 search results (or `offset` < 30) per query.
The PRO plan allows to see up to 300 search results (or `offset` < 300) per query.
The ENTERPRISE plan allows to see up to 10,000 search results (or `offset` < 10000) per query.


<h3 id="full-text-search-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-ListenAPI-Key|header|string|true|Get API Key on listennotes.com/api|
|q|query|string|true|Search term, e.g., person, place, topic... You can use double quotes to do verbatim match, e.g., "game of thrones". Otherwise, it's fuzzy search.<br>|
|sort_by_date|query|integer|false|Sort by date or not? If 0, then sort by relevance. If 1, then sort by date.<br>|
|type|query|string|false|What type of contents do you want to search for? <br>|
|offset|query|integer|false|Offset for search results, for pagination. You'll use **next_offset** from response for this parameter.<br>|
|len_min|query|integer|false|Minimum audio length in minutes. Applicable only when **type** parameter is **episode** or **podcast**.<br>If **type** parameter is **episode**, it's for audio length of an episode.<br>If **type** parameter is **podcast**, it's for average audio length of all episodes in a podcast.<br>|
|len_max|query|integer|false|Maximum audio length in minutes. Applicable only when **type** parameter is **episode** or **podcast**.<br>If **type** parameter is **episode**, it's for audio length of an episode.<br>If **type** parameter is **podcast**, it's for average audio length of all episodes in a podcast.<br>|
|episode_count_min|query|integer|false|Minimum number of episodes. Applicable only when type parameter is **podcast**.<br>|
|episode_count_max|query|integer|false|Maximum number of episodes. Applicable only when type parameter is **podcast**.<br>|
|update_freq_min|query|integer|false|Minimum update frequency in hours (how frequently does a podcast release a new episode). For example, if you want to find "weekly" podcasts, then you can set **update_freq_min**=144 hours (or 6 days) and **update_freq_max**=192 hours (or 8 days). Applicable only when type parameter is **podcast**.<br>|
|update_freq_max|query|integer|false|Maximum update frequency in hours (how frequently does a podcast release a new episode). For example, if you want to find "weekly" podcasts, then you can set **update_freq_min**=144 hours (or 6 days) and **update_freq_max**=192 hours (or 8 days). Applicable only when type parameter is **podcast**.<br>|
|genre_ids|query|string|false|A comma-delimited string of a list of genre ids. If not specified, then all genres are included. You can find the id and the name of all genres from `GET /genres`. It works only when **type** is *episode* or *podcast*.<br>|
|published_before|query|integer|false|Only show episodes/podcasts/curated lists published before this timestamp (in milliseconds). If **published_before** & **published_after** are used at the same time, **published_before** should be bigger than **published_after**.<br>|
|published_after|query|integer|false|Only show episodes/podcasts/curated lists published after this timestamp (in milliseconds). If **published_before** & **published_after** are used at the same time, **published_before** should be bigger than **published_after**.<br>|
|only_in|query|string|false|A comma-delimited string to search only in specific fields. Allowed values are title, description, author, and audio. If not specified, then search every fields.<br>|
|language|query|string|false|Limit search results to a specific language. If not specified, it'll be any language. You can get a list of supported languages from `GET /languages`. It works only when **type** is *episode* or *podcast*.<br>|
|region|query|string|false|Limit search results to a specific region (e.g., us, gb, in...). If not specified, it'll be any region. You can get the supported country codes from `GET /regions`. It works only when **type** is *episode* or *podcast*.<br>|
|ocid|query|string|false|A comma-delimited string of podcast ids (up to 5 podcasts) - you can get a podcast id from the **podcast_id** field in response. This parameter is to limit search results from only a few specific podcasts. It works only when **type** is *episode*.<br>|
|ncid|query|string|false|A comma-delimited string of podcast ids (up to 5 podcasts) - you can get a podcast id from the **podcast_id** field in response. This parameter is to exclude search results of a few specific podcasts. It works only when **type** is *episode*.<br>|
|safe_mode|query|integer|false|Whether or not to exclude podcasts/episodes with explicit language. 1 is yes and 0 is no. It works only when **type** is *episode* or *podcast*.<br>|
|unique_podcasts|query|integer|false|Whether or not to keep only one episode per podcast in search results. 1 is yes and 0 is no. It works only when **type** is *episode*.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sort_by_date|0|
|sort_by_date|1|
|type|episode|
|type|podcast|
|type|curated|
|safe_mode|0|
|safe_mode|1|
|unique_podcasts|0|
|unique_podcasts|1|

> Example responses

> 200 Response

```json
{
  "count": 10,
  "next_offset": 10,
  "results": [
    {
      "audio": "https://www.listennotes.com/e/p/11b34041e804491b9704d11f283c74de/",
      "audio_length_sec": 567,
      "description_highlighted": "...Go to http://Patreon.com/sw7x7 to donate to the <span class=\"ln-search-highlight\">Star</span> <span class=\"ln-search-highlight\">Wars</span> 7x7 podcast, and you'll get some fabulous rewards for your pledge.***  Check out SW7x7.com for full <span class=\"ln-search-highlight\">Star</span> <span class=\"ln-search-highlight\">Wars</span> 7x7 show notes and links, and to\n",
      "description_original": "Yeah, Star Wars Celebration Orlando is 32 days away, but what's the scoop on Celebration 2018? Plus, Rebels Day is Saturday, and much more in our update. Punch it! ***We're listener supported! Go to http://Patreon.com/sw7x7 to donate to the Star Wars 7x7 podcast, and youâ€™ll get some fabulous rewards for your pledge.***  Check out SW7x7.com for full Star Wars 7x7 show notes and links, and to comment on any of the content of this episode! If you like what you've heard, please leave us a rating or review on iTunes or Stitcher, which will also help more people discover this Star Wars podcast. Don't forget to join the Star Wars 7x7 fun on Facebook at Facebook.com/SW7x7, and follow the breaking news Twitter feed at Twitter.com/SW7x7Podcast. We're also on Pinterest and Instagram as \"SW7x7\" too, and we'd love to connect with you there!\n",
      "explicit_content": false,
      "id": "4d82e50314174754a3b603912448e812",
      "image": "https://cdn-images-1.listennotes.com/podcasts/exponent-ben-thompson-james-allworth-OaJSjb4xQv3.1400x1400.jpg",
      "itunes_id": 896354638,
      "link": "https://www.npr.org/2020/01/22/798532179/soleimanis-iran",
      "listennotes_url": "https://www.listennotes.com/e/4d82e50314174754a3b603912448e812/",
      "podcast": {
        "genre_ids": [
          138,
          86,
          160,
          68,
          82,
          100,
          101
        ],
        "id": "4d3fe717742d4963a85562e9f84d8c79",
        "image": "https://cdn-images-1.listennotes.com/podcasts/exponent-ben-thompson-james-allworth-OaJSjb4xQv3.1400x1400.jpg",
        "listen_score": 81,
        "listen_score_global_rank": "0.5%",
        "listennotes_url": "https://www.listennotes.com/c/4d3fe717742d4963a85562e9f84d8c79/",
        "publisher_highlighted": "<span class=\\\"ln-search-highlight\\\">Star</span> <span class=\\\"ln-search-highlight\\\">Wars</span> Daily, by Allen Voivod",
        "publisher_original": "Star Wars Daily, by Allen Voivod",
        "thumbnail": "https://cdn-images-1.listennotes.com/podcasts/exponent-ben-thompson-james-allworth-OaJSjb4xQv3.300x300.jpg",
        "title_highlighted": "<span class=\\\"ln-search-highlight\\\">Star</span> <span class=\\\"ln-search-highlight\\\">Wars</span> 7x7 | <span class=\\\"ln-search-highlight\\\">Star</span> <span class=\\\"ln-search-highlight\\\">Wars</span> News, Interviews, and More!",
        "title_original": "Star Wars 7x7 | Star Wars News, Interviews, and More!"
      },
      "pub_date_ms": 1474873200000,
      "rss": "https://sw7x7.libsyn.com/rss",
      "thumbnail": "https://cdn-images-1.listennotes.com/podcasts/exponent-ben-thompson-james-allworth-OaJSjb4xQv3.300x300.jpg",
      "title_highlighted": "815: <span class=\"ln-search-highlight\">Star</span> <span class=\"ln-search-highlight\">Wars</span> 2020 Movie and Beyond!",
      "title_original": "815: Star Wars 2020 Movie and Beyond!",
      "transcripts_highlighted": [
        "00:21:27  when Disney bought the <span class=\"ln-search-highlight\">Star</span> <span class=\"ln-search-highlight\">Wars</span> franchise from George Lucas they had a plan lots of <span class=\"ln-search-highlight\">Star</span> <span class=\"ln-search-highlight\">Wars</span> movies new <span class=\"ln-search-highlight\">Star</span> <span class=\"ln-search-highlight\">Wars</span> movies every month another one was just released while I was talking\n"
      ]
    }
  ],
  "took": 0.093,
  "total": 1989
}
```

<h3 id="full-text-search-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[SearchResponse](#schemasearchresponse)|
|400|Bad Request|Something wrong on your end (Client side errors), e.g., missing required parameters.|None|
|401|Unauthorized|Wrong api key, or your account is suspended.|None|
|429|Too Many Requests|For FREE plan, exceeding the quota limit; or for all plans, sending too many requests too fast and exceeding the rate limit.|None|
|5XX|Server Error|Something wrong on our end (Unexpected server errors).|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-ListenAPI-FreeQuota|integer||Free quotas of API requests included in your api plan.|
|200|X-ListenAPI-NextBillingDate|string|date-time|The timestamp for the start of next billing cycle. In ISO 8601 format.|
|200|X-ListenAPI-Usage|integer||The number of API requests that you've used in current billing cycle.|
|200|X-listenAPI-Latency-Seconds|number||Latency for this api call, in seconds.|

<aside class="success">
This operation does not require authentication
</aside>

## Spell check on a search term

<a id="opIdspellcheck"></a>

> Code samples

```bash
curl 'https://example.com/spellcheck?q=evergrand%20stok' \
  -H 'Accept: application/json' \
  -H 'X-ListenAPI-Key: string'
```

`GET /spellcheck`

Suggest a list of words that correct the spelling errors of a search term. This endpoint is available only in the PRO/ENTERPRISE plan.

<h3 id="spell-check-on-a-search-term-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-ListenAPI-Key|header|string|true|Get API Key on listennotes.com/api|
|q|query|string|true|Search term, e.g., person, place, topic...<br>|

> Example responses

> 200 Response

```json
{
  "corrected_text_html": "<b><i>evergrande</i></b> stock",
  "tokens": [
    {
      "offset": 5,
      "suggestion": "evergrande",
      "token": "evergrand"
    }
  ]
}
```

<h3 id="spell-check-on-a-search-term-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[SpellCheckResponse](#schemaspellcheckresponse)|
|400|Bad Request|Something wrong on your end (Client side errors), e.g., missing required parameters.|None|
|401|Unauthorized|Wrong api key, or your account is suspended.|None|
|429|Too Many Requests|For FREE plan, exceeding the quota limit; or for all plans, sending too many requests too fast and exceeding the rate limit.|None|
|5XX|Server Error|Something wrong on our end (Unexpected server errors).|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-ListenAPI-FreeQuota|integer||Free quotas of API requests included in your api plan.|
|200|X-ListenAPI-NextBillingDate|string|date-time|The timestamp for the start of next billing cycle. In ISO 8601 format.|
|200|X-ListenAPI-Usage|integer||The number of API requests that you've used in current billing cycle.|
|200|X-listenAPI-Latency-Seconds|number||Latency for this api call, in seconds.|

<aside class="success">
This operation does not require authentication
</aside>

## Fetch trending search terms

<a id="opIdgetTrendingSearches"></a>

> Code samples

```bash
curl https://example.com/trending_searches \
  -H 'Accept: application/json' \
  -H 'X-ListenAPI-Key: string'
```

`GET /trending_searches`

Fetch up to 10 most recent trending search terms on the Listen Notes platform.

<h3 id="fetch-trending-search-terms-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-ListenAPI-Key|header|string|true|Get API Key on listennotes.com/api|

> Example responses

> 200 Response

```json
{
  "terms": [
    "Taliban",
    "Andrew Cuomo",
    "john McAfee"
  ]
}
```

<h3 id="fetch-trending-search-terms-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[TrendingSearchesResponse](#schematrendingsearchesresponse)|
|400|Bad Request|Something wrong on your end (Client side errors), e.g., missing required parameters.|None|
|401|Unauthorized|Wrong api key, or your account is suspended.|None|
|429|Too Many Requests|For FREE plan, exceeding the quota limit; or for all plans, sending too many requests too fast and exceeding the rate limit.|None|
|5XX|Server Error|Something wrong on our end (Unexpected server errors).|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-ListenAPI-FreeQuota|integer||Free quotas of API requests included in your api plan.|
|200|X-ListenAPI-NextBillingDate|string|date-time|The timestamp for the start of next billing cycle. In ISO 8601 format.|
|200|X-ListenAPI-Usage|integer||The number of API requests that you've used in current billing cycle.|
|200|X-listenAPI-Latency-Seconds|number||Latency for this api call, in seconds.|

<aside class="success">
This operation does not require authentication
</aside>

## Typeahead search

<a id="opIdtypeahead"></a>

> Code samples

```bash
curl 'https://example.com/typeahead?q=star%20wars' \
  -H 'Accept: application/json' \
  -H 'X-ListenAPI-Key: string'
```

`GET /typeahead`

Suggest search terms, podcast genres, and podcasts.

<h3 id="typeahead-search-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-ListenAPI-Key|header|string|true|Get API Key on listennotes.com/api|
|q|query|string|true|Search term, e.g., person, place, topic... You can use double quotes to do verbatim match, e.g., "game of thrones". Otherwise, it's fuzzy search.<br>|
|show_podcasts|query|integer|false|Autosuggest podcasts. This only searches podcast title and publisher and returns very limited info of 5 podcasts. 1 is yes, 0 is no. It's a bit slow to autosuggest podcasts, so we turn it off by default. If show_podcasts=1, you can also pass iTunes id (e.g., 474722933) to the q parameter to fetch podcast meta data.<br>|
|show_genres|query|integer|false|Whether or not to autosuggest genres. 1 is yes, 0 is no.<br>|
|safe_mode|query|integer|false|Whether or not to exclude podcasts/episodes with explicit language. 1 is yes and 0 is no. It works only when **show_podcasts** is *1*.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|show_podcasts|0|
|show_podcasts|1|
|show_genres|0|
|show_genres|1|
|safe_mode|0|
|safe_mode|1|

> Example responses

> 200 Response

```json
{
  "genres": [
    {
      "id": 140,
      "name": "Web Design",
      "parent_id": 127
    }
  ],
  "podcasts": [
    {
      "explicit_content": false,
      "id": "4d3fe717742d4963a85562e9f84d8c79",
      "image": "https://cdn-images-1.listennotes.com/podcasts/exponent-ben-thompson-james-allworth-OaJSjb4xQv3.1400x1400.jpg",
      "publisher_highlighted": "<span class=\\\"ln-search-highlight\\\">Star</span> <span class=\\\"ln-search-highlight\\\">Wars</span> Daily, by Allen Voivod",
      "publisher_original": "Star Wars Daily, by Allen Voivod",
      "thumbnail": "https://cdn-images-1.listennotes.com/podcasts/exponent-ben-thompson-james-allworth-OaJSjb4xQv3.300x300.jpg",
      "title_highlighted": "<span class=\\\"ln-search-highlight\\\">Star</span> <span class=\\\"ln-search-highlight\\\">Wars</span> 7x7 | <span class=\\\"ln-search-highlight\\\">Star</span> <span class=\\\"ln-search-highlight\\\">Wars</span> News, Interviews, and More!",
      "title_original": "Star Wars 7x7 | Star Wars News, Interviews, and More!"
    }
  ],
  "terms": [
    "startup sales",
    "startup",
    "startups",
    "star wars"
  ]
}
```

<h3 id="typeahead-search-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[TypeaheadResponse](#schematypeaheadresponse)|
|400|Bad Request|Something wrong on your end (Client side errors), e.g., missing required parameters.|None|
|401|Unauthorized|Wrong api key, or your account is suspended.|None|
|429|Too Many Requests|For FREE plan, exceeding the quota limit; or for all plans, sending too many requests too fast and exceeding the rate limit.|None|
|5XX|Server Error|Something wrong on our end (Unexpected server errors).|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-ListenAPI-FreeQuota|integer||Free quotas of API requests included in your api plan.|
|200|X-ListenAPI-NextBillingDate|string|date-time|The timestamp for the start of next billing cycle. In ISO 8601 format.|
|200|X-ListenAPI-Usage|integer||The number of API requests that you've used in current billing cycle.|
|200|X-listenAPI-Latency-Seconds|number||Latency for this api call, in seconds.|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="listen-api-podcast-search-directory-and-insights-api-directory-api">Directory API</h1>

Endpoints to fetch podcasts data

## Fetch a list of best podcasts by genre

<a id="opIdgetBestPodcasts"></a>

> Code samples

```bash
curl https://example.com/best_podcasts \
  -H 'Accept: application/json' \
  -H 'X-ListenAPI-Key: string'
```

`GET /best_podcasts`

Get a list of curated best podcasts by genre,
which are curated by Listen Notes staffs based on various signals from the Internet, e.g.,
top charts on other podcast platforms, recommendations from mainstream media,
user activities on listennotes.com...
You can get the genre ids from `GET /genres` endpoint.
This endpoint returns same data as https://www.listennotes.com/best-podcasts/


<h3 id="fetch-a-list-of-best-podcasts-by-genre-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-ListenAPI-Key|header|string|true|Get API Key on listennotes.com/api|
|genre_id|query|string|false|You can get the id from `GET /genres`. If not specified, it'll be the overall best podcasts, which can be considered as a special genre.|
|page|query|integer|false|Page number of those podcasts in this genre.|
|region|query|string|false|Filter best podcasts by country/region.<br>Please note that podcasts that are "best" in a country/region may not be produced in that country/region.<br>For example, a podcast from the US may be very popular in Canada.<br>You can get the supported country codes (e.g., us, jp, gb...) from `GET /regions`.<br>If not specified, you'll get "best podcasts" in United States.<br>|
|publisher_region|query|string|false|Filter best podcasts by the publisher's country/region.<br>This is to narrow down the results to include "best podcasts" produced in a specific country/region.<br>You can get the supported country codes (e.g., us, jp, gb...) from `GET /regions`.<br>If not specified, you'll get "best podcasts" produced in any country/region.<br>If you want to get a country/region's "best podcasts" that are also produced in that country/region,<br>then you need to specify both **region** and **publisher_region**,<br>e.g., `region=jp` and `publisher_region=jp`.<br>|
|language|query|string|false|Filter best podcasts by language.<br>You can get a list of supported languages (e.g., English, Chinese, Japanese...) from `GET /languages`.<br>If not specified, you'll get "best podcasts" in any language.<br>|
|sort|query|string|false|How do you want to sort these podcasts?<br>If you'd like to sort by popularity, please use **listen_score**.<br>|
|safe_mode|query|integer|false|Whether or not to exclude podcasts with explicit language. 1 is yes, and 0 is no.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sort|recent_added_first|
|sort|oldest_added_first|
|sort|recent_published_first|
|sort|oldest_published_first|
|sort|listen_score|
|safe_mode|0|
|safe_mode|1|

> Example responses

> 200 Response

```json
{
  "has_next": true,
  "has_previous": true,
  "id": 95,
  "listennotes_url": "https://www.listennotes.com/best-business-news-podcasts-95/",
  "name": "Business News",
  "next_page_number": 3,
  "page_number": 2,
  "parent_id": 93,
  "podcasts": [
    {
      "audio_length_sec": 1291,
      "country": "United States",
      "description": "<p>The Star Wars 7x7 Podcast is Rebel-rousing fun for everyday Jedi, between 7 and 14 minutes a day, 7 days a week. Join host Allen Voivod for Star Wars news, history, interviews, trivia, and deep dives into the Star Wars story as told in movies, books, comics, games, cartoons, and more. Subscribe now for your daily dose of Star Wars joy. It's destiny unleashed!</p>",
      "earliest_pub_date_ms": 1470667902000,
      "email": "hello@example.com",
      "explicit_content": false,
      "extra": {
        "amazon_music_url": "https://music.amazon.com/podcasts/6fc6d683-9ef3-4850-9c35-8e8b1a42a147/the-lock-sportscast",
        "facebook_handle": "sw7x7",
        "google_url": "https://podcasts.google.com/feed/aHR0cHM6Ly9yc3MuYXJ0MTkuY29tL2pvaG4tc29sb21vbi1yZXBvcnRz",
        "instagram_handle": "sw7x7",
        "linkedin_url": "string",
        "patreon_handle": "sw7x7",
        "spotify_url": "https://open.spotify.com/show/2rQJUP9Y3HxemiW3JHt9WV",
        "twitter_handle": "SW7x7podcast",
        "url1": "string",
        "url2": "string",
        "url3": "string",
        "wechat_handle": "string",
        "youtube_url": "https://www.youtube.com/sw7x7"
      },
      "genre_ids": [
        138,
        86,
        160,
        68,
        82,
        100,
        101
      ],
      "id": "4d3fe717742d4963a85562e9f84d8c79",
      "image": "https://cdn-images-1.listennotes.com/podcasts/exponent-ben-thompson-james-allworth-OaJSjb4xQv3.1400x1400.jpg",
      "is_claimed": true,
      "itunes_id": 896354638,
      "language": "English",
      "latest_episode_id": "d057092e57cc4ced80e0efaa196593d9",
      "latest_pub_date_ms": 1557499770000,
      "listen_score": 81,
      "listen_score_global_rank": "0.5%",
      "listennotes_url": "https://www.listennotes.com/c/4d3fe717742d4963a85562e9f84d8c79/",
      "looking_for": {
        "cohosts": true,
        "cross_promotion": true,
        "guests": true,
        "sponsors": true
      },
      "publisher": "Planet Broadcasting",
      "rss": "https://sw7x7.libsyn.com/rss",
      "thumbnail": "https://cdn-images-1.listennotes.com/podcasts/exponent-ben-thompson-james-allworth-OaJSjb4xQv3.300x300.jpg",
      "title": "Star Wars 7x7 | Star Wars News, Interviews, and More!",
      "total_episodes": 324,
      "type": "episodic",
      "update_frequency_hours": 168,
      "website": "http://sw7x7.com/"
    }
  ],
  "previous_page_number": 1,
  "total": 325
}
```

<h3 id="fetch-a-list-of-best-podcasts-by-genre-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[BestPodcastsResponse](#schemabestpodcastsresponse)|
|401|Unauthorized|Wrong api key, or your account is suspended.|None|
|404|Not Found|Endpoint not exist, or podcast / episode not exist.|None|
|429|Too Many Requests|For FREE plan, exceeding the quota limit; or for all plans, sending too many requests too fast and exceeding the rate limit.|None|
|5XX|Server Error|Something wrong on our end (Unexpected server errors).|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-ListenAPI-FreeQuota|integer||Free quotas of API requests included in your api plan.|
|200|X-ListenAPI-NextBillingDate|string|date-time|The timestamp for the start of next billing cycle. In ISO 8601 format.|
|200|X-ListenAPI-Usage|integer||The number of API requests that you've used in current billing cycle.|
|200|X-listenAPI-Latency-Seconds|number||Latency for this api call, in seconds.|

<aside class="success">
This operation does not require authentication
</aside>

## Fetch curated lists of podcasts

<a id="opIdgetCuratedPodcasts"></a>

> Code samples

```bash
curl https://example.com/curated_podcasts \
  -H 'Accept: application/json' \
  -H 'X-ListenAPI-Key: string'
```

`GET /curated_podcasts`

A bunch of curated lists from online media. For each list, you'll get basic info of up to 5 podcasts. To get detailed meta data of all podcasts in a specific list, you need to use `GET /curated_podcasts/{id}`. We add new curated lists to the database on a daily basis.


<h3 id="fetch-curated-lists-of-podcasts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-ListenAPI-Key|header|string|true|Get API Key on listennotes.com/api|
|page|query|integer|false|Page number of curated lists.|

> Example responses

> 200 Response

```json
{
  "curated_lists": [
    {
      "description": "Commuting to work is always better when you have a great new podcast to listen to, and this year, we have discovered some of our favorite podcasts yet for readers and book-lovers. These podcasts for readers entertain us and provide no shortage of new book recommendations too.",
      "id": "Vb017Sx3l8F",
      "listennotes_url": "https://www.listennotes.com/curated-podcasts/7-bookish-podcasts-for-avid-readers-on-H2r-TCWai8K/",
      "podcasts": [
        {
          "id": "4d3fe717742d4963a85562e9f84d8c79",
          "image": "https://cdn-images-1.listennotes.com/podcasts/exponent-ben-thompson-james-allworth-OaJSjb4xQv3.1400x1400.jpg",
          "listen_score": 81,
          "listen_score_global_rank": "0.5%",
          "listennotes_url": "https://www.listennotes.com/c/4d3fe717742d4963a85562e9f84d8c79/",
          "publisher": "Planet Broadcasting",
          "thumbnail": "https://cdn-images-1.listennotes.com/podcasts/exponent-ben-thompson-james-allworth-OaJSjb4xQv3.300x300.jpg",
          "title": "Star Wars 7x7 | Star Wars News, Interviews, and More!"
        }
      ],
      "pub_date_ms": 1556843484301,
      "source_domain": "parade.com",
      "source_url": "https://parade.com/718913/ashley_johnson/7-bookish-podcasts-for-avid-readers-on-the-go/",
      "title": "7 Bookish Podcasts for Avid Readers On the Go",
      "total": 25
    }
  ],
  "has_next": true,
  "has_previous": true,
  "next_page_number": 3,
  "page_number": 2,
  "previous_page_number": 1,
  "total": 25
}
```

<h3 id="fetch-curated-lists-of-podcasts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[GetCuratedPodcastsResponse](#schemagetcuratedpodcastsresponse)|
|401|Unauthorized|Wrong api key, or your account is suspended.|None|
|429|Too Many Requests|For FREE plan, exceeding the quota limit; or for all plans, sending too many requests too fast and exceeding the rate limit.|None|
|5XX|Server Error|Something wrong on our end (Unexpected server errors).|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-ListenAPI-FreeQuota|integer||Free quotas of API requests included in your api plan.|
|200|X-ListenAPI-NextBillingDate|string|date-time|The timestamp for the start of next billing cycle. In ISO 8601 format.|
|200|X-ListenAPI-Usage|integer||The number of API requests that you've used in current billing cycle.|
|200|X-listenAPI-Latency-Seconds|number||Latency for this api call, in seconds.|

<aside class="success">
This operation does not require authentication
</aside>

## Fetch a curated list of podcasts by id

<a id="opIdgetCuratedPodcastById"></a>

> Code samples

```bash
curl https://example.com/curated_podcasts/SDFKduyJ47r \
  -H 'Accept: application/json' \
  -H 'X-ListenAPI-Key: string'
```

`GET /curated_podcasts/{id}`

Get detailed meta data of all podcasts in a specific curated list.
This endpoint returns same data as https://www.listennotes.com/curated-podcasts/


<h3 id="fetch-a-curated-list-of-podcasts-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-ListenAPI-Key|header|string|true|Get API Key on listennotes.com/api|
|id|path|string|true|id for a specific curated list of podcasts. You can get the id from the response of `GET /search?type=curated` or `GET /curated_podcasts`.<br>|

> Example responses

> 200 Response

```json
{
  "description": "Commuting to work is always better when you have a great new podcast to listen to, and this year, we have discovered some of our favorite podcasts yet for readers and book-lovers. These podcasts for readers entertain us and provide no shortage of new book recommendations too.",
  "id": "Vb017Sx3l8F",
  "listennotes_url": "https://www.listennotes.com/curated-podcasts/7-bookish-podcasts-for-avid-readers-on-H2r-TCWai8K/",
  "podcasts": [
    {
      "audio_length_sec": 1291,
      "country": "United States",
      "description": "<p>The Star Wars 7x7 Podcast is Rebel-rousing fun for everyday Jedi, between 7 and 14 minutes a day, 7 days a week. Join host Allen Voivod for Star Wars news, history, interviews, trivia, and deep dives into the Star Wars story as told in movies, books, comics, games, cartoons, and more. Subscribe now for your daily dose of Star Wars joy. It's destiny unleashed!</p>",
      "earliest_pub_date_ms": 1470667902000,
      "email": "hello@example.com",
      "explicit_content": false,
      "extra": {
        "amazon_music_url": "https://music.amazon.com/podcasts/6fc6d683-9ef3-4850-9c35-8e8b1a42a147/the-lock-sportscast",
        "facebook_handle": "sw7x7",
        "google_url": "https://podcasts.google.com/feed/aHR0cHM6Ly9yc3MuYXJ0MTkuY29tL2pvaG4tc29sb21vbi1yZXBvcnRz",
        "instagram_handle": "sw7x7",
        "linkedin_url": "string",
        "patreon_handle": "sw7x7",
        "spotify_url": "https://open.spotify.com/show/2rQJUP9Y3HxemiW3JHt9WV",
        "twitter_handle": "SW7x7podcast",
        "url1": "string",
        "url2": "string",
        "url3": "string",
        "wechat_handle": "string",
        "youtube_url": "https://www.youtube.com/sw7x7"
      },
      "genre_ids": [
        138,
        86,
        160,
        68,
        82,
        100,
        101
      ],
      "id": "4d3fe717742d4963a85562e9f84d8c79",
      "image": "https://cdn-images-1.listennotes.com/podcasts/exponent-ben-thompson-james-allworth-OaJSjb4xQv3.1400x1400.jpg",
      "is_claimed": true,
      "itunes_id": 896354638,
      "language": "English",
      "latest_episode_id": "d057092e57cc4ced80e0efaa196593d9",
      "latest_pub_date_ms": 1557499770000,
      "listen_score": 81,
      "listen_score_global_rank": "0.5%",
      "listennotes_url": "https://www.listennotes.com/c/4d3fe717742d4963a85562e9f84d8c79/",
      "looking_for": {
        "cohosts": true,
        "cross_promotion": true,
        "guests": true,
        "sponsors": true
      },
      "publisher": "Planet Broadcasting",
      "rss": "https://sw7x7.libsyn.com/rss",
      "thumbnail": "https://cdn-images-1.listennotes.com/podcasts/exponent-ben-thompson-james-allworth-OaJSjb4xQv3.300x300.jpg",
      "title": "Star Wars 7x7 | Star Wars News, Interviews, and More!",
      "total_episodes": 324,
      "type": "episodic",
      "update_frequency_hours": 168,
      "website": "http://sw7x7.com/"
    }
  ],
  "pub_date_ms": 1556843484301,
  "source_domain": "parade.com",
  "source_url": "https://parade.com/718913/ashley_johnson/7-bookish-podcasts-for-avid-readers-on-the-go/",
  "title": "7 Bookish Podcasts for Avid Readers On the Go",
  "total": 25
}
```

<h3 id="fetch-a-curated-list-of-podcasts-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[CuratedListFull](#schemacuratedlistfull)|
|401|Unauthorized|Wrong api key, or your account is suspended.|None|
|404|Not Found|Endpoint not exist, or podcast / episode not exist.|None|
|429|Too Many Requests|For FREE plan, exceeding the quota limit; or for all plans, sending too many requests too fast and exceeding the rate limit.|None|
|5XX|Server Error|Something wrong on our end (Unexpected server errors).|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-ListenAPI-FreeQuota|integer||Free quotas of API requests included in your api plan.|
|200|X-ListenAPI-NextBillingDate|string|date-time|The timestamp for the start of next billing cycle. In ISO 8601 format.|
|200|X-ListenAPI-Usage|integer||The number of API requests that you've used in current billing cycle.|
|200|X-listenAPI-Latency-Seconds|number||Latency for this api call, in seconds.|

<aside class="success">
This operation does not require authentication
</aside>

## Batch fetch basic meta data for episodes

<a id="opIdgetEpisodesInBatch"></a>

> Code samples

```bash
curl https://example.com/episodes \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H 'X-ListenAPI-Key: string' \
  -d 'ids=c577d55b2b2b483c969fae3ceb58e362%2C0f34a9099579490993eec9e8c8cebb82'
```

`POST /episodes`

Batch fetch basic meta data for up to 10 episodes. This endpoint could be used to implement custom playlists for individual episodes. For detailed meta data of an individual episode, you need to use `GET /episodes/{id}`. This endpoint is available only in the PRO/ENTERPRISE plan.


> Body parameter

```yaml
ids: "c577d55b2b2b483c969fae3ceb58e362,0f34a9099579490993eec9e8c8cebb82"
```

<h3 id="batch-fetch-basic-meta-data-for-episodes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-ListenAPI-Key|header|string|true|Get API Key on listennotes.com/api|
|body|body|[GetEpisodesInBatchForm](#schemagetepisodesinbatchform)|true|none|
|» ids|body|string|true|Comma-separated list of episode ids.|

> Example responses

> 200 Response

```json
{
  "episodes": [
    {
      "audio": "https://www.listennotes.com/e/p/11b34041e804491b9704d11f283c74de/",
      "audio_length_sec": 567,
      "description": "<p>Disney chief Bob Iger shared news about Star Wars movies in 2020 and beyond, but some media outlets gave conflicting reports about it. Here's the real scoop. Punch it!</p> <p>***We’re listener supported! Go to http://Patreon.com/sw7x7 to donate to the Star Wars 7x7 podcast, and you’ll get some fabulous rewards for your pledge.*** </p> <p>Check out SW7x7.com for full Star Wars 7x7 show notes and links, and to comment on any of the content of this episode! If you like what you've heard, please leave us a rating or review on iTunes or Stitcher, which will also help more people discover this Star Wars podcast.</p> <p>Don't forget to join the Star Wars 7x7 fun on Facebook at Facebook.com/SW7x7, and follow the breaking news Twitter feed at Twitter.com/SW7x7Podcast. We're also on Pinterest and Instagram as \"SW7x7\" too, and we'd love to connect with you there!</p>\n",
      "explicit_content": false,
      "id": "4d82e50314174754a3b603912448e812",
      "image": "https://cdn-images-1.listennotes.com/podcasts/exponent-ben-thompson-james-allworth-OaJSjb4xQv3.1400x1400.jpg",
      "link": "https://www.npr.org/2020/01/22/798532179/soleimanis-iran",
      "listennotes_edit_url": "https://www.listennotes.com/e/11b34041e804491b9704d11f283c74de/#edit",
      "listennotes_url": "https://www.listennotes.com/e/4d82e50314174754a3b603912448e812/",
      "maybe_audio_invalid": false,
      "podcast": {
        "id": "4d3fe717742d4963a85562e9f84d8c79",
        "image": "https://cdn-images-1.listennotes.com/podcasts/exponent-ben-thompson-james-allworth-OaJSjb4xQv3.1400x1400.jpg",
        "listen_score": 81,
        "listen_score_global_rank": "0.5%",
        "listennotes_url": "https://www.listennotes.com/c/4d3fe717742d4963a85562e9f84d8c79/",
        "publisher": "Planet Broadcasting",
        "thumbnail": "https://cdn-images-1.listennotes.com/podcasts/exponent-ben-thompson-james-allworth-OaJSjb4xQv3.300x300.jpg",
        "title": "Star Wars 7x7 | Star Wars News, Interviews, and More!"
      },
      "pub_date_ms": 1474873200000,
      "thumbnail": "https://cdn-images-1.listennotes.com/podcasts/exponent-ben-thompson-james-allworth-OaJSjb4xQv3.300x300.jpg",
      "title": "Celebration Recap, Jason Fry and Christian Blauvelt Interviews – SWBW #101"
    }
  ]
}
```

<h3 id="batch-fetch-basic-meta-data-for-episodes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[GetEpisodesInBatchResponse](#schemagetepisodesinbatchresponse)|
|401|Unauthorized|Wrong api key, or your account is suspended.|None|
|429|Too Many Requests|For FREE plan, exceeding the quota limit; or for all plans, sending too many requests too fast and exceeding the rate limit.|None|
|5XX|Server Error|Something wrong on our end (Unexpected server errors).|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-ListenAPI-FreeQuota|integer||Free quotas of API requests included in your api plan.|
|200|X-ListenAPI-NextBillingDate|string|date-time|The timestamp for the start of next billing cycle. In ISO 8601 format.|
|200|X-ListenAPI-Usage|integer||The number of API requests that you've used in current billing cycle.|
|200|X-listenAPI-Latency-Seconds|number||Latency for this api call, in seconds.|

<aside class="success">
This operation does not require authentication
</aside>

## Fetch detailed meta data for an episode by id

<a id="opIdgetEpisodeById"></a>

> Code samples

```bash
curl https://example.com/episodes/6b6d65930c5a4f71b254465871fed370 \
  -H 'Accept: application/json' \
  -H 'X-ListenAPI-Key: string'
```

`GET /episodes/{id}`

Fetch detailed meta data for a specific episode.

<h3 id="fetch-detailed-meta-data-for-an-episode-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-ListenAPI-Key|header|string|true|Get API Key on listennotes.com/api|
|id|path|string|true|id for a specific episode. You can get episode id from using other endpoints, e.g., `GET /search`...|
|show_transcript|query|integer|false|To include the transcript of this episode or not? If it is 1, then include the transcript in the **transcript** field. The default value is 0 - we don't include transcript by default, because 1) it would make the response data very big, thus slow response time; 2) less than 1% of episodes have transcripts. The transcript field is available only in the PRO/ENTERPRISE plan.|

> Example responses

> 200 Response

```json
{
  "audio": "https://www.listennotes.com/e/p/11b34041e804491b9704d11f283c74de/",
  "audio_length_sec": 567,
  "description": "<p>Disney chief Bob Iger shared news about Star Wars movies in 2020 and beyond, but some media outlets gave conflicting reports about it. Here's the real scoop. Punch it!</p> <p>***We’re listener supported! Go to http://Patreon.com/sw7x7 to donate to the Star Wars 7x7 podcast, and you’ll get some fabulous rewards for your pledge.*** </p> <p>Check out SW7x7.com for full Star Wars 7x7 show notes and links, and to comment on any of the content of this episode! If you like what you've heard, please leave us a rating or review on iTunes or Stitcher, which will also help more people discover this Star Wars podcast.</p> <p>Don't forget to join the Star Wars 7x7 fun on Facebook at Facebook.com/SW7x7, and follow the breaking news Twitter feed at Twitter.com/SW7x7Podcast. We're also on Pinterest and Instagram as \"SW7x7\" too, and we'd love to connect with you there!</p>\n",
  "explicit_content": false,
  "id": "4d82e50314174754a3b603912448e812",
  "image": "https://cdn-images-1.listennotes.com/podcasts/exponent-ben-thompson-james-allworth-OaJSjb4xQv3.1400x1400.jpg",
  "link": "https://www.npr.org/2020/01/22/798532179/soleimanis-iran",
  "listennotes_edit_url": "https://www.listennotes.com/e/11b34041e804491b9704d11f283c74de/#edit",
  "listennotes_url": "https://www.listennotes.com/e/4d82e50314174754a3b603912448e812/",
  "maybe_audio_invalid": false,
  "podcast": {
    "audio_length_sec": 1291,
    "country": "United States",
    "description": "<p>The Star Wars 7x7 Podcast is Rebel-rousing fun for everyday Jedi, between 7 and 14 minutes a day, 7 days a week. Join host Allen Voivod for Star Wars news, history, interviews, trivia, and deep dives into the Star Wars story as told in movies, books, comics, games, cartoons, and more. Subscribe now for your daily dose of Star Wars joy. It's destiny unleashed!</p>",
    "earliest_pub_date_ms": 1470667902000,
    "email": "hello@example.com",
    "explicit_content": false,
    "extra": {
      "amazon_music_url": "https://music.amazon.com/podcasts/6fc6d683-9ef3-4850-9c35-8e8b1a42a147/the-lock-sportscast",
      "facebook_handle": "sw7x7",
      "google_url": "https://podcasts.google.com/feed/aHR0cHM6Ly9yc3MuYXJ0MTkuY29tL2pvaG4tc29sb21vbi1yZXBvcnRz",
      "instagram_handle": "sw7x7",
      "linkedin_url": "string",
      "patreon_handle": "sw7x7",
      "spotify_url": "https://open.spotify.com/show/2rQJUP9Y3HxemiW3JHt9WV",
      "twitter_handle": "SW7x7podcast",
      "url1": "string",
      "url2": "string",
      "url3": "string",
      "wechat_handle": "string",
      "youtube_url": "https://www.youtube.com/sw7x7"
    },
    "genre_ids": [
      138,
      86,
      160,
      68,
      82,
      100,
      101
    ],
    "id": "4d3fe717742d4963a85562e9f84d8c79",
    "image": "https://cdn-images-1.listennotes.com/podcasts/exponent-ben-thompson-james-allworth-OaJSjb4xQv3.1400x1400.jpg",
    "is_claimed": true,
    "itunes_id": 896354638,
    "language": "English",
    "latest_episode_id": "d057092e57cc4ced80e0efaa196593d9",
    "latest_pub_date_ms": 1557499770000,
    "listen_score": 81,
    "listen_score_global_rank": "0.5%",
    "listennotes_url": "https://www.listennotes.com/c/4d3fe717742d4963a85562e9f84d8c79/",
    "looking_for": {
      "cohosts": true,
      "cross_promotion": true,
      "guests": true,
      "sponsors": true
    },
    "publisher": "Planet Broadcasting",
    "rss": "https://sw7x7.libsyn.com/rss",
    "thumbnail": "https://cdn-images-1.listennotes.com/podcasts/exponent-ben-thompson-james-allworth-OaJSjb4xQv3.300x300.jpg",
    "title": "Star Wars 7x7 | Star Wars News, Interviews, and More!",
    "total_episodes": 324,
    "type": "episodic",
    "update_frequency_hours": 168,
    "website": "http://sw7x7.com/"
  },
  "pub_date_ms": 1474873200000,
  "thumbnail": "https://cdn-images-1.listennotes.com/podcasts/exponent-ben-thompson-james-allworth-OaJSjb4xQv3.300x300.jpg",
  "title": "Celebration Recap, Jason Fry and Christian Blauvelt Interviews – SWBW #101",
  "transcript": "00:00:07 Welcome to this podcast...\n"
}
```

<h3 id="fetch-detailed-meta-data-for-an-episode-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[EpisodeFull](#schemaepisodefull)|
|401|Unauthorized|Wrong api key, or your account is suspended.|None|
|404|Not Found|Endpoint not exist, or podcast / episode not exist.|None|
|429|Too Many Requests|For FREE plan, exceeding the quota limit; or for all plans, sending too many requests too fast and exceeding the rate limit.|None|
|5XX|Server Error|Something wrong on our end (Unexpected server errors).|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-ListenAPI-FreeQuota|integer||Free quotas of API requests included in your api plan.|
|200|X-ListenAPI-NextBillingDate|string|date-time|The timestamp for the start of next billing cycle. In ISO 8601 format.|
|200|X-ListenAPI-Usage|integer||The number of API requests that you've used in current billing cycle.|
|200|X-listenAPI-Latency-Seconds|number||Latency for this api call, in seconds.|

<aside class="success">
This operation does not require authentication
</aside>

## Fetch recommendations for an episode

<a id="opIdgetEpisodeRecommendations"></a>

> Code samples

```bash
curl https://example.com/episodes/254444fa6cf64a43a95292a70eb6869b/recommendations \
  -H 'Accept: application/json' \
  -H 'X-ListenAPI-Key: string'
```

`GET /episodes/{id}/recommendations`

Fetch up to 8 episode recommendations based on the given episode id.

<h3 id="fetch-recommendations-for-an-episode-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-ListenAPI-Key|header|string|true|Get API Key on listennotes.com/api|
|id|path|string|true|Episode id.|
|safe_mode|query|integer|false|Whether or not to exclude podcasts with explicit language. 1 is yes, and 0 is no.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|safe_mode|0|
|safe_mode|1|

> Example responses

> 200 Response

```json
{
  "recommendations": [
    {
      "audio": "https://www.listennotes.com/e/p/11b34041e804491b9704d11f283c74de/",
      "audio_length_sec": 567,
      "description": "<p>Disney chief Bob Iger shared news about Star Wars movies in 2020 and beyond, but some media outlets gave conflicting reports about it. Here's the real scoop. Punch it!</p> <p>***We’re listener supported! Go to http://Patreon.com/sw7x7 to donate to the Star Wars 7x7 podcast, and you’ll get some fabulous rewards for your pledge.*** </p> <p>Check out SW7x7.com for full Star Wars 7x7 show notes and links, and to comment on any of the content of this episode! If you like what you've heard, please leave us a rating or review on iTunes or Stitcher, which will also help more people discover this Star Wars podcast.</p> <p>Don't forget to join the Star Wars 7x7 fun on Facebook at Facebook.com/SW7x7, and follow the breaking news Twitter feed at Twitter.com/SW7x7Podcast. We're also on Pinterest and Instagram as \"SW7x7\" too, and we'd love to connect with you there!</p>\n",
      "explicit_content": false,
      "id": "4d82e50314174754a3b603912448e812",
      "image": "https://cdn-images-1.listennotes.com/podcasts/exponent-ben-thompson-james-allworth-OaJSjb4xQv3.1400x1400.jpg",
      "link": "https://www.npr.org/2020/01/22/798532179/soleimanis-iran",
      "listennotes_edit_url": "https://www.listennotes.com/e/11b34041e804491b9704d11f283c74de/#edit",
      "listennotes_url": "https://www.listennotes.com/e/4d82e50314174754a3b603912448e812/",
      "maybe_audio_invalid": false,
      "podcast": {
        "id": "4d3fe717742d4963a85562e9f84d8c79",
        "image": "https://cdn-images-1.listennotes.com/podcasts/exponent-ben-thompson-james-allworth-OaJSjb4xQv3.1400x1400.jpg",
        "listen_score": 81,
        "listen_score_global_rank": "0.5%",
        "listennotes_url": "https://www.listennotes.com/c/4d3fe717742d4963a85562e9f84d8c79/",
        "publisher": "Planet Broadcasting",
        "thumbnail": "https://cdn-images-1.listennotes.com/podcasts/exponent-ben-thompson-james-allworth-OaJSjb4xQv3.300x300.jpg",
        "title": "Star Wars 7x7 | Star Wars News, Interviews, and More!"
      },
      "pub_date_ms": 1474873200000,
      "thumbnail": "https://cdn-images-1.listennotes.com/podcasts/exponent-ben-thompson-james-allworth-OaJSjb4xQv3.300x300.jpg",
      "title": "Celebration Recap, Jason Fry and Christian Blauvelt Interviews – SWBW #101"
    }
  ]
}
```

<h3 id="fetch-recommendations-for-an-episode-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[GetEpisodeRecommendationsResponse](#schemagetepisoderecommendationsresponse)|
|401|Unauthorized|Wrong api key, or your account is suspended.|None|
|404|Not Found|Endpoint not exist, or podcast / episode not exist.|None|
|429|Too Many Requests|For FREE plan, exceeding the quota limit; or for all plans, sending too many requests too fast and exceeding the rate limit.|None|
|5XX|Server Error|Something wrong on our end (Unexpected server errors).|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-ListenAPI-FreeQuota|integer||Free quotas of API requests included in your api plan.|
|200|X-ListenAPI-NextBillingDate|string|date-time|The timestamp for the start of next billing cycle. In ISO 8601 format.|
|200|X-ListenAPI-Usage|integer||The number of API requests that you've used in current billing cycle.|
|200|X-listenAPI-Latency-Seconds|number||Latency for this api call, in seconds.|

<aside class="success">
This operation does not require authentication
</aside>

## Fetch a list of podcast genres

<a id="opIdgetGenres"></a>

> Code samples

```bash
curl https://example.com/genres \
  -H 'Accept: application/json' \
  -H 'X-ListenAPI-Key: string'
```

`GET /genres`

Get a list of podcast genres that are supported in Listen Notes.
The genre id can be passed to other endpoints as a parameter to get podcasts in a specific genre,
e.g., `GET /best_podcasts`, `GET /search`...
You may want to cache the list of genres on the client side.


<h3 id="fetch-a-list-of-podcast-genres-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-ListenAPI-Key|header|string|true|Get API Key on listennotes.com/api|
|top_level_only|query|integer|false|Just show top level genres? If 1, yes, just show top level genres. If 0, no, show all genres.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|top_level_only|0|
|top_level_only|1|

> Example responses

> 200 Response

```json
{
  "genres": [
    {
      "id": 140,
      "name": "Web Design",
      "parent_id": 127
    }
  ]
}
```

<h3 id="fetch-a-list-of-podcast-genres-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[GetGenresResponse](#schemagetgenresresponse)|
|401|Unauthorized|Wrong api key, or your account is suspended.|None|
|429|Too Many Requests|For FREE plan, exceeding the quota limit; or for all plans, sending too many requests too fast and exceeding the rate limit.|None|
|5XX|Server Error|Something wrong on our end (Unexpected server errors).|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-ListenAPI-FreeQuota|integer||Free quotas of API requests included in your api plan.|
|200|X-ListenAPI-NextBillingDate|string|date-time|The timestamp for the start of next billing cycle. In ISO 8601 format.|
|200|X-ListenAPI-Usage|integer||The number of API requests that you've used in current billing cycle.|
|200|X-listenAPI-Latency-Seconds|number||Latency for this api call, in seconds.|

<aside class="success">
This operation does not require authentication
</aside>

## Fetch a random podcast episode

<a id="opIdjustListen"></a>

> Code samples

```bash
curl https://example.com/just_listen \
  -H 'Accept: application/json' \
  -H 'X-ListenAPI-Key: string'
```

`GET /just_listen`

Recently published episodes are more likely to be fetched. Good luck!

<h3 id="fetch-a-random-podcast-episode-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-ListenAPI-Key|header|string|true|Get API Key on listennotes.com/api|

> Example responses

> 200 Response

```json
{
  "audio": "https://www.listennotes.com/e/p/11b34041e804491b9704d11f283c74de/",
  "audio_length_sec": 567,
  "description": "<p>Disney chief Bob Iger shared news about Star Wars movies in 2020 and beyond, but some media outlets gave conflicting reports about it. Here's the real scoop. Punch it!</p> <p>***We’re listener supported! Go to http://Patreon.com/sw7x7 to donate to the Star Wars 7x7 podcast, and you’ll get some fabulous rewards for your pledge.*** </p> <p>Check out SW7x7.com for full Star Wars 7x7 show notes and links, and to comment on any of the content of this episode! If you like what you've heard, please leave us a rating or review on iTunes or Stitcher, which will also help more people discover this Star Wars podcast.</p> <p>Don't forget to join the Star Wars 7x7 fun on Facebook at Facebook.com/SW7x7, and follow the breaking news Twitter feed at Twitter.com/SW7x7Podcast. We're also on Pinterest and Instagram as \"SW7x7\" too, and we'd love to connect with you there!</p>\n",
  "explicit_content": false,
  "id": "4d82e50314174754a3b603912448e812",
  "image": "https://cdn-images-1.listennotes.com/podcasts/exponent-ben-thompson-james-allworth-OaJSjb4xQv3.1400x1400.jpg",
  "link": "https://www.npr.org/2020/01/22/798532179/soleimanis-iran",
  "listennotes_edit_url": "https://www.listennotes.com/e/11b34041e804491b9704d11f283c74de/#edit",
  "listennotes_url": "https://www.listennotes.com/e/4d82e50314174754a3b603912448e812/",
  "maybe_audio_invalid": false,
  "podcast": {
    "id": "4d3fe717742d4963a85562e9f84d8c79",
    "image": "https://cdn-images-1.listennotes.com/podcasts/exponent-ben-thompson-james-allworth-OaJSjb4xQv3.1400x1400.jpg",
    "listen_score": 81,
    "listen_score_global_rank": "0.5%",
    "listennotes_url": "https://www.listennotes.com/c/4d3fe717742d4963a85562e9f84d8c79/",
    "publisher": "Planet Broadcasting",
    "thumbnail": "https://cdn-images-1.listennotes.com/podcasts/exponent-ben-thompson-james-allworth-OaJSjb4xQv3.300x300.jpg",
    "title": "Star Wars 7x7 | Star Wars News, Interviews, and More!"
  },
  "pub_date_ms": 1474873200000,
  "thumbnail": "https://cdn-images-1.listennotes.com/podcasts/exponent-ben-thompson-james-allworth-OaJSjb4xQv3.300x300.jpg",
  "title": "Celebration Recap, Jason Fry and Christian Blauvelt Interviews – SWBW #101"
}
```

<h3 id="fetch-a-random-podcast-episode-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[EpisodeSimple](#schemaepisodesimple)|
|401|Unauthorized|Wrong api key, or your account is suspended.|None|
|429|Too Many Requests|For FREE plan, exceeding the quota limit; or for all plans, sending too many requests too fast and exceeding the rate limit.|None|
|5XX|Server Error|Something wrong on our end (Unexpected server errors).|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-ListenAPI-FreeQuota|integer||Free quotas of API requests included in your api plan.|
|200|X-ListenAPI-NextBillingDate|string|date-time|The timestamp for the start of next billing cycle. In ISO 8601 format.|
|200|X-ListenAPI-Usage|integer||The number of API requests that you've used in current billing cycle.|
|200|X-listenAPI-Latency-Seconds|number||Latency for this api call, in seconds.|

<aside class="success">
This operation does not require authentication
</aside>

## Fetch a list of supported languages for podcasts

<a id="opIdgetLanguages"></a>

> Code samples

```bash
curl https://example.com/languages \
  -H 'Accept: application/json' \
  -H 'X-ListenAPI-Key: string'
```

`GET /languages`

Get a list of languages that are supported in Listen Notes database. You can use the language string as query parameter in `GET /search`.


<h3 id="fetch-a-list-of-supported-languages-for-podcasts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-ListenAPI-Key|header|string|true|Get API Key on listennotes.com/api|

> Example responses

> 200 Response

```json
{
  "languages": [
    "Any language",
    "Afar",
    "Abkhazian",
    "Afrikaans",
    "Akan",
    "Albanian",
    "Arabic",
    "Azerbaijani",
    "Bambara",
    "Bashkir",
    "Basque",
    "Belarusian",
    "Bulgarian",
    "Catalan",
    "Chamorro",
    "Chinese",
    "Croatian",
    "Czech",
    "Danish",
    "Dutch",
    "English",
    "Estonian",
    "Faeroese",
    "Finnish",
    "French",
    "Gaelic",
    "Galician",
    "German",
    "Greek"
  ]
}
```

<h3 id="fetch-a-list-of-supported-languages-for-podcasts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[GetLanguagesResponse](#schemagetlanguagesresponse)|
|401|Unauthorized|Wrong api key, or your account is suspended.|None|
|429|Too Many Requests|For FREE plan, exceeding the quota limit; or for all plans, sending too many requests too fast and exceeding the rate limit.|None|
|5XX|Server Error|Something wrong on our end (Unexpected server errors).|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-ListenAPI-FreeQuota|integer||Free quotas of API requests included in your api plan.|
|200|X-ListenAPI-NextBillingDate|string|date-time|The timestamp for the start of next billing cycle. In ISO 8601 format.|
|200|X-ListenAPI-Usage|integer||The number of API requests that you've used in current billing cycle.|
|200|X-listenAPI-Latency-Seconds|number||Latency for this api call, in seconds.|

<aside class="success">
This operation does not require authentication
</aside>

## Batch fetch basic meta data for podcasts

<a id="opIdgetPodcastsInBatch"></a>

> Code samples

```bash
curl https://example.com/podcasts \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H 'X-ListenAPI-Key: string' \
  -d 'ids=3302bc71139541baa46ecb27dbf6071a%2C68faf62be97149c280ebcc25178aa731%2C37589a3e121e40debe4cef3d9638932a%2C9cf19c590ff0484d97b18b329fed0c6a&itunes_ids=1457514703%2C1386234384%2C659155419&next_episode_pub_date=1557394247000&rsses=https%3A%2F%2Frss.art19.com%2Frecode-decode%2Chttps%3A%2F%2Frss.art19.com%2Fthe-daily%2Chttps%3A%2F%2Fwww.npr.org%2Frss%2Fpodcast.php%3Fid%3D510331%2Chttps%3A%2F%2Fwww.npr.org%2Frss%2Fpodcast.php%3Fid%3D510331&show_latest_episodes=1&spotify_ids=3DDfEsKDIDrTlnPOiG4ZF4%2C4qDNe5Gvl1XxdLinUGEXrC%2C23NZCM4ik6o3UYkM473Itz'
```

`POST /podcasts`

Batch fetch basic meta data for up to 10 podcasts.
This endpoint could be used to build something like OPML import,
allowing users to import a bunch of podcasts via rss urls.
For detailed meta data (including episodes) of an individual podcast, you need to use `GET /podcasts/{id}`. This endpoint is available only in the PRO/ENTERPRISE plan.


> Body parameter

```yaml
ids: "3302bc71139541baa46ecb27dbf6071a,68faf62be97149c280ebcc25178aa731,37589a3e121e40debe4cef3d9638932a,9cf19c590ff0484d97b18b329fed0c6a"
itunes_ids: "1457514703,1386234384,659155419"
next_episode_pub_date: 1557394247000
rsses: "https://rss.art19.com/recode-decode,https://rss.art19.com/the-daily,https://www.npr.org/rss/podcast.php?id=510331,https://www.npr.org/rss/podcast.php?id=510331"
show_latest_episodes: 1
spotify_ids: "3DDfEsKDIDrTlnPOiG4ZF4,4qDNe5Gvl1XxdLinUGEXrC,23NZCM4ik6o3UYkM473Itz"
```

<h3 id="batch-fetch-basic-meta-data-for-podcasts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-ListenAPI-Key|header|string|true|Get API Key on listennotes.com/api|
|body|body|[GetPodcastsInBatchForm](#schemagetpodcastsinbatchform)|false|none|
|» ids|body|string|false|Comma-separated list of podcast ids.|
|» itunes_ids|body|string|false|Comma-separated Apple Podcasts (iTunes) ids, e.g., 659155419|
|» next_episode_pub_date|body|integer|false|For latest episodes pagination. It's the value of **next_episode_pub_date** from the response of last request. If not specified, just return latest 15 episodes.<br>|
|» rsses|body|string|false|Comma-separated rss urls.|
|» show_latest_episodes|body|integer|false|Whether or not to fetch up to 15 latest episodes from these podcasts, sorted by pub_date. 1 is yes, and 0 is no.<br>|
|» spotify_ids|body|string|false|Comma-separated Spotify ids, e.g., 3DDfEsKDIDrTlnPOiG4ZF4|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» show_latest_episodes|0|
|» show_latest_episodes|1|

> Example responses

> 200 Response

```json
{
  "latest_episodes": [
    {
      "audio": "https://www.listennotes.com/e/p/11b34041e804491b9704d11f283c74de/",
      "audio_length_sec": 567,
      "description": "<p>Disney chief Bob Iger shared news about Star Wars movies in 2020 and beyond, but some media outlets gave conflicting reports about it. Here's the real scoop. Punch it!</p> <p>***We’re listener supported! Go to http://Patreon.com/sw7x7 to donate to the Star Wars 7x7 podcast, and you’ll get some fabulous rewards for your pledge.*** </p> <p>Check out SW7x7.com for full Star Wars 7x7 show notes and links, and to comment on any of the content of this episode! If you like what you've heard, please leave us a rating or review on iTunes or Stitcher, which will also help more people discover this Star Wars podcast.</p> <p>Don't forget to join the Star Wars 7x7 fun on Facebook at Facebook.com/SW7x7, and follow the breaking news Twitter feed at Twitter.com/SW7x7Podcast. We're also on Pinterest and Instagram as \"SW7x7\" too, and we'd love to connect with you there!</p>\n",
      "explicit_content": false,
      "id": "4d82e50314174754a3b603912448e812",
      "image": "https://cdn-images-1.listennotes.com/podcasts/exponent-ben-thompson-james-allworth-OaJSjb4xQv3.1400x1400.jpg",
      "link": "https://www.npr.org/2020/01/22/798532179/soleimanis-iran",
      "listennotes_edit_url": "https://www.listennotes.com/e/11b34041e804491b9704d11f283c74de/#edit",
      "listennotes_url": "https://www.listennotes.com/e/4d82e50314174754a3b603912448e812/",
      "maybe_audio_invalid": false,
      "podcast": {
        "id": "4d3fe717742d4963a85562e9f84d8c79",
        "image": "https://cdn-images-1.listennotes.com/podcasts/exponent-ben-thompson-james-allworth-OaJSjb4xQv3.1400x1400.jpg",
        "listen_score": 81,
        "listen_score_global_rank": "0.5%",
        "listennotes_url": "https://www.listennotes.com/c/4d3fe717742d4963a85562e9f84d8c79/",
        "publisher": "Planet Broadcasting",
        "thumbnail": "https://cdn-images-1.listennotes.com/podcasts/exponent-ben-thompson-james-allworth-OaJSjb4xQv3.300x300.jpg",
        "title": "Star Wars 7x7 | Star Wars News, Interviews, and More!"
      },
      "pub_date_ms": 1474873200000,
      "thumbnail": "https://cdn-images-1.listennotes.com/podcasts/exponent-ben-thompson-james-allworth-OaJSjb4xQv3.300x300.jpg",
      "title": "Celebration Recap, Jason Fry and Christian Blauvelt Interviews – SWBW #101"
    }
  ],
  "podcasts": [
    {
      "audio_length_sec": 1291,
      "country": "United States",
      "description": "<p>The Star Wars 7x7 Podcast is Rebel-rousing fun for everyday Jedi, between 7 and 14 minutes a day, 7 days a week. Join host Allen Voivod for Star Wars news, history, interviews, trivia, and deep dives into the Star Wars story as told in movies, books, comics, games, cartoons, and more. Subscribe now for your daily dose of Star Wars joy. It's destiny unleashed!</p>",
      "earliest_pub_date_ms": 1470667902000,
      "email": "hello@example.com",
      "explicit_content": false,
      "extra": {
        "amazon_music_url": "https://music.amazon.com/podcasts/6fc6d683-9ef3-4850-9c35-8e8b1a42a147/the-lock-sportscast",
        "facebook_handle": "sw7x7",
        "google_url": "https://podcasts.google.com/feed/aHR0cHM6Ly9yc3MuYXJ0MTkuY29tL2pvaG4tc29sb21vbi1yZXBvcnRz",
        "instagram_handle": "sw7x7",
        "linkedin_url": "string",
        "patreon_handle": "sw7x7",
        "spotify_url": "https://open.spotify.com/show/2rQJUP9Y3HxemiW3JHt9WV",
        "twitter_handle": "SW7x7podcast",
        "url1": "string",
        "url2": "string",
        "url3": "string",
        "wechat_handle": "string",
        "youtube_url": "https://www.youtube.com/sw7x7"
      },
      "genre_ids": [
        138,
        86,
        160,
        68,
        82,
        100,
        101
      ],
      "id": "4d3fe717742d4963a85562e9f84d8c79",
      "image": "https://cdn-images-1.listennotes.com/podcasts/exponent-ben-thompson-james-allworth-OaJSjb4xQv3.1400x1400.jpg",
      "is_claimed": true,
      "itunes_id": 896354638,
      "language": "English",
      "latest_episode_id": "d057092e57cc4ced80e0efaa196593d9",
      "latest_pub_date_ms": 1557499770000,
      "listen_score": 81,
      "listen_score_global_rank": "0.5%",
      "listennotes_url": "https://www.listennotes.com/c/4d3fe717742d4963a85562e9f84d8c79/",
      "looking_for": {
        "cohosts": true,
        "cross_promotion": true,
        "guests": true,
        "sponsors": true
      },
      "publisher": "Planet Broadcasting",
      "rss": "https://sw7x7.libsyn.com/rss",
      "thumbnail": "https://cdn-images-1.listennotes.com/podcasts/exponent-ben-thompson-james-allworth-OaJSjb4xQv3.300x300.jpg",
      "title": "Star Wars 7x7 | Star Wars News, Interviews, and More!",
      "total_episodes": 324,
      "type": "episodic",
      "update_frequency_hours": 168,
      "website": "http://sw7x7.com/"
    }
  ]
}
```

<h3 id="batch-fetch-basic-meta-data-for-podcasts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[GetPodcastsInBatchResponse](#schemagetpodcastsinbatchresponse)|
|401|Unauthorized|Wrong api key, or your account is suspended.|None|
|429|Too Many Requests|For FREE plan, exceeding the quota limit; or for all plans, sending too many requests too fast and exceeding the rate limit.|None|
|5XX|Server Error|Something wrong on our end (Unexpected server errors).|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-ListenAPI-FreeQuota|integer||Free quotas of API requests included in your api plan.|
|200|X-ListenAPI-NextBillingDate|string|date-time|The timestamp for the start of next billing cycle. In ISO 8601 format.|
|200|X-ListenAPI-Usage|integer||The number of API requests that you've used in current billing cycle.|
|200|X-listenAPI-Latency-Seconds|number||Latency for this api call, in seconds.|

<aside class="success">
This operation does not require authentication
</aside>

## Fetch detailed meta data and episodes for a podcast by id

<a id="opIdgetPodcastById"></a>

> Code samples

```bash
curl https://example.com/podcasts/4d3fe717742d4963a85562e9f84d8c79 \
  -H 'Accept: application/json' \
  -H 'X-ListenAPI-Key: string'
```

`GET /podcasts/{id}`

Fetch detailed meta data and episodes for a specific podcast (up to 10 episodes each time).
You can use the **next_episode_pub_date** parameter to do pagination and fetch more episodes.


<h3 id="fetch-detailed-meta-data-and-episodes-for-a-podcast-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-ListenAPI-Key|header|string|true|Get API Key on listennotes.com/api|
|id|path|string|true|Podcast id. You can get podcast id from using other endpoints, e.g., `GET /search`, `GET /best_podcasts`...|
|next_episode_pub_date|query|integer|false|For episodes pagination. It's the value of **next_episode_pub_date** from the response of last request. If not specified, just return latest 10 episodes or oldest 10 episodes, depending on the value of the **sort** parameter.<br>|
|sort|query|string|false|How do you want to sort the episodes of this podcast?<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sort|recent_first|
|sort|oldest_first|

> Example responses

> 200 Response

```json
{
  "audio_length_sec": 1291,
  "country": "United States",
  "description": "<p>The Star Wars 7x7 Podcast is Rebel-rousing fun for everyday Jedi, between 7 and 14 minutes a day, 7 days a week. Join host Allen Voivod for Star Wars news, history, interviews, trivia, and deep dives into the Star Wars story as told in movies, books, comics, games, cartoons, and more. Subscribe now for your daily dose of Star Wars joy. It's destiny unleashed!</p>",
  "earliest_pub_date_ms": 1470667902000,
  "email": "hello@example.com",
  "episodes": [
    {
      "audio": "https://www.listennotes.com/e/p/11b34041e804491b9704d11f283c74de/",
      "audio_length_sec": 567,
      "description": "<p>Disney chief Bob Iger shared news about Star Wars movies in 2020 and beyond, but some media outlets gave conflicting reports about it. Here's the real scoop. Punch it!</p> <p>***We’re listener supported! Go to http://Patreon.com/sw7x7 to donate to the Star Wars 7x7 podcast, and you’ll get some fabulous rewards for your pledge.*** </p> <p>Check out SW7x7.com for full Star Wars 7x7 show notes and links, and to comment on any of the content of this episode! If you like what you've heard, please leave us a rating or review on iTunes or Stitcher, which will also help more people discover this Star Wars podcast.</p> <p>Don't forget to join the Star Wars 7x7 fun on Facebook at Facebook.com/SW7x7, and follow the breaking news Twitter feed at Twitter.com/SW7x7Podcast. We're also on Pinterest and Instagram as \"SW7x7\" too, and we'd love to connect with you there!</p>\n",
      "explicit_content": false,
      "id": "4d82e50314174754a3b603912448e812",
      "image": "https://cdn-images-1.listennotes.com/podcasts/exponent-ben-thompson-james-allworth-OaJSjb4xQv3.1400x1400.jpg",
      "link": "https://www.npr.org/2020/01/22/798532179/soleimanis-iran",
      "listennotes_edit_url": "https://www.listennotes.com/e/11b34041e804491b9704d11f283c74de/#edit",
      "listennotes_url": "https://www.listennotes.com/e/4d82e50314174754a3b603912448e812/",
      "maybe_audio_invalid": false,
      "pub_date_ms": 1474873200000,
      "thumbnail": "https://cdn-images-1.listennotes.com/podcasts/exponent-ben-thompson-james-allworth-OaJSjb4xQv3.300x300.jpg",
      "title": "Celebration Recap, Jason Fry and Christian Blauvelt Interviews – SWBW #101"
    }
  ],
  "explicit_content": false,
  "extra": {
    "amazon_music_url": "https://music.amazon.com/podcasts/6fc6d683-9ef3-4850-9c35-8e8b1a42a147/the-lock-sportscast",
    "facebook_handle": "sw7x7",
    "google_url": "https://podcasts.google.com/feed/aHR0cHM6Ly9yc3MuYXJ0MTkuY29tL2pvaG4tc29sb21vbi1yZXBvcnRz",
    "instagram_handle": "sw7x7",
    "linkedin_url": "string",
    "patreon_handle": "sw7x7",
    "spotify_url": "https://open.spotify.com/show/2rQJUP9Y3HxemiW3JHt9WV",
    "twitter_handle": "SW7x7podcast",
    "url1": "string",
    "url2": "string",
    "url3": "string",
    "wechat_handle": "string",
    "youtube_url": "https://www.youtube.com/sw7x7"
  },
  "genre_ids": [
    138,
    86,
    160,
    68,
    82,
    100,
    101
  ],
  "id": "4d3fe717742d4963a85562e9f84d8c79",
  "image": "https://cdn-images-1.listennotes.com/podcasts/exponent-ben-thompson-james-allworth-OaJSjb4xQv3.1400x1400.jpg",
  "is_claimed": true,
  "itunes_id": 896354638,
  "language": "English",
  "latest_episode_id": "d057092e57cc4ced80e0efaa196593d9",
  "latest_pub_date_ms": 1557499770000,
  "listen_score": 81,
  "listen_score_global_rank": "0.5%",
  "listennotes_url": "https://www.listennotes.com/c/4d3fe717742d4963a85562e9f84d8c79/",
  "looking_for": {
    "cohosts": true,
    "cross_promotion": true,
    "guests": true,
    "sponsors": true
  },
  "next_episode_pub_date": 1470667902000,
  "publisher": "Planet Broadcasting",
  "rss": "https://sw7x7.libsyn.com/rss",
  "thumbnail": "https://cdn-images-1.listennotes.com/podcasts/exponent-ben-thompson-james-allworth-OaJSjb4xQv3.300x300.jpg",
  "title": "Star Wars 7x7 | Star Wars News, Interviews, and More!",
  "total_episodes": 324,
  "type": "episodic",
  "update_frequency_hours": 168,
  "website": "http://sw7x7.com/"
}
```

<h3 id="fetch-detailed-meta-data-and-episodes-for-a-podcast-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PodcastFull](#schemapodcastfull)|
|401|Unauthorized|Wrong api key, or your account is suspended.|None|
|404|Not Found|Endpoint not exist, or podcast / episode not exist.|None|
|429|Too Many Requests|For FREE plan, exceeding the quota limit; or for all plans, sending too many requests too fast and exceeding the rate limit.|None|
|5XX|Server Error|Something wrong on our end (Unexpected server errors).|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-ListenAPI-FreeQuota|integer||Free quotas of API requests included in your api plan.|
|200|X-ListenAPI-NextBillingDate|string|date-time|The timestamp for the start of next billing cycle. In ISO 8601 format.|
|200|X-ListenAPI-Usage|integer||The number of API requests that you've used in current billing cycle.|
|200|X-listenAPI-Latency-Seconds|number||Latency for this api call, in seconds.|

<aside class="success">
This operation does not require authentication
</aside>

## Fetch recommendations for a podcast

<a id="opIdgetPodcastRecommendations"></a>

> Code samples

```bash
curl https://example.com/podcasts/25212ac3c53240a880dd5032e547047b/recommendations \
  -H 'Accept: application/json' \
  -H 'X-ListenAPI-Key: string'
```

`GET /podcasts/{id}/recommendations`

Fetch up to 8 podcast recommendations based on the given podcast id.

<h3 id="fetch-recommendations-for-a-podcast-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-ListenAPI-Key|header|string|true|Get API Key on listennotes.com/api|
|id|path|string|true|Podcast id.|
|safe_mode|query|integer|false|Whether or not to exclude podcasts with explicit language. 1 is yes, and 0 is no.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|safe_mode|0|
|safe_mode|1|

> Example responses

> 200 Response

```json
{
  "recommendations": [
    {
      "audio_length_sec": 1291,
      "country": "United States",
      "description": "<p>The Star Wars 7x7 Podcast is Rebel-rousing fun for everyday Jedi, between 7 and 14 minutes a day, 7 days a week. Join host Allen Voivod for Star Wars news, history, interviews, trivia, and deep dives into the Star Wars story as told in movies, books, comics, games, cartoons, and more. Subscribe now for your daily dose of Star Wars joy. It's destiny unleashed!</p>",
      "earliest_pub_date_ms": 1470667902000,
      "email": "hello@example.com",
      "explicit_content": false,
      "extra": {
        "amazon_music_url": "https://music.amazon.com/podcasts/6fc6d683-9ef3-4850-9c35-8e8b1a42a147/the-lock-sportscast",
        "facebook_handle": "sw7x7",
        "google_url": "https://podcasts.google.com/feed/aHR0cHM6Ly9yc3MuYXJ0MTkuY29tL2pvaG4tc29sb21vbi1yZXBvcnRz",
        "instagram_handle": "sw7x7",
        "linkedin_url": "string",
        "patreon_handle": "sw7x7",
        "spotify_url": "https://open.spotify.com/show/2rQJUP9Y3HxemiW3JHt9WV",
        "twitter_handle": "SW7x7podcast",
        "url1": "string",
        "url2": "string",
        "url3": "string",
        "wechat_handle": "string",
        "youtube_url": "https://www.youtube.com/sw7x7"
      },
      "genre_ids": [
        138,
        86,
        160,
        68,
        82,
        100,
        101
      ],
      "id": "4d3fe717742d4963a85562e9f84d8c79",
      "image": "https://cdn-images-1.listennotes.com/podcasts/exponent-ben-thompson-james-allworth-OaJSjb4xQv3.1400x1400.jpg",
      "is_claimed": true,
      "itunes_id": 896354638,
      "language": "English",
      "latest_episode_id": "d057092e57cc4ced80e0efaa196593d9",
      "latest_pub_date_ms": 1557499770000,
      "listen_score": 81,
      "listen_score_global_rank": "0.5%",
      "listennotes_url": "https://www.listennotes.com/c/4d3fe717742d4963a85562e9f84d8c79/",
      "looking_for": {
        "cohosts": true,
        "cross_promotion": true,
        "guests": true,
        "sponsors": true
      },
      "publisher": "Planet Broadcasting",
      "rss": "https://sw7x7.libsyn.com/rss",
      "thumbnail": "https://cdn-images-1.listennotes.com/podcasts/exponent-ben-thompson-james-allworth-OaJSjb4xQv3.300x300.jpg",
      "title": "Star Wars 7x7 | Star Wars News, Interviews, and More!",
      "total_episodes": 324,
      "type": "episodic",
      "update_frequency_hours": 168,
      "website": "http://sw7x7.com/"
    }
  ]
}
```

<h3 id="fetch-recommendations-for-a-podcast-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[GetPodcastRecommendationsResponse](#schemagetpodcastrecommendationsresponse)|
|401|Unauthorized|Wrong api key, or your account is suspended.|None|
|404|Not Found|Endpoint not exist, or podcast / episode not exist.|None|
|429|Too Many Requests|For FREE plan, exceeding the quota limit; or for all plans, sending too many requests too fast and exceeding the rate limit.|None|
|5XX|Server Error|Something wrong on our end (Unexpected server errors).|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-ListenAPI-FreeQuota|integer||Free quotas of API requests included in your api plan.|
|200|X-ListenAPI-NextBillingDate|string|date-time|The timestamp for the start of next billing cycle. In ISO 8601 format.|
|200|X-ListenAPI-Usage|integer||The number of API requests that you've used in current billing cycle.|
|200|X-listenAPI-Latency-Seconds|number||Latency for this api call, in seconds.|

<aside class="success">
This operation does not require authentication
</aside>

## Fetch a list of supported countries/regions for best podcasts

<a id="opIdgetRegions"></a>

> Code samples

```bash
curl https://example.com/regions \
  -H 'Accept: application/json' \
  -H 'X-ListenAPI-Key: string'
```

`GET /regions`

It returns a dictionary of country codes (e.g., us, gb...) & country names (United States, United Kingdom...). The country code is used in the query parameter **region** of `GET /best_podcasts`.


<h3 id="fetch-a-list-of-supported-countriesregions-for-best-podcasts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-ListenAPI-Key|header|string|true|Get API Key on listennotes.com/api|

> Example responses

> 200 Response

```json
{
  "regions": {
    "au": "Australia",
    "de": "Germany",
    "ua": "Ukraine",
    "us": "United States"
  }
}
```

<h3 id="fetch-a-list-of-supported-countriesregions-for-best-podcasts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[GetRegionsResponse](#schemagetregionsresponse)|
|401|Unauthorized|Wrong api key, or your account is suspended.|None|
|429|Too Many Requests|For FREE plan, exceeding the quota limit; or for all plans, sending too many requests too fast and exceeding the rate limit.|None|
|5XX|Server Error|Something wrong on our end (Unexpected server errors).|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-ListenAPI-FreeQuota|integer||Free quotas of API requests included in your api plan.|
|200|X-ListenAPI-NextBillingDate|string|date-time|The timestamp for the start of next billing cycle. In ISO 8601 format.|
|200|X-ListenAPI-Usage|integer||The number of API requests that you've used in current billing cycle.|
|200|X-listenAPI-Latency-Seconds|number||Latency for this api call, in seconds.|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="listen-api-podcast-search-directory-and-insights-api-playlist-api">Playlist API</h1>

Endpoints to fetch Listen Later playlists data

## Fetch a list of your playlists.

<a id="opIdgetPlaylists"></a>

> Code samples

```bash
curl https://example.com/playlists \
  -H 'Accept: application/json' \
  -H 'X-ListenAPI-Key: string'
```

`GET /playlists`

This endpoint returns same data as listennotes.com/listen under your account.
You can use the **page** parameter to do pagination and fetch more playlists.


<h3 id="fetch-a-list-of-your-playlists-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-ListenAPI-Key|header|string|true|Get API Key on listennotes.com/api|
|sort|query|string|false|How do you want to sort playlists?<br>|
|page|query|integer|false|Page number of playlists.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sort|recent_added_first|
|sort|oldest_added_first|
|sort|name_a_to_z|
|sort|name_z_to_a|

> Example responses

> 200 Response

```json
{
  "has_next": true,
  "has_previous": true,
  "next_page_number": 3,
  "page_number": 2,
  "playlists": [
    {
      "description": "A curated playlist of podcasts about podcasting.",
      "episode_count": 23,
      "id": "m1pe7z60bsw",
      "image": "https://cdn-images-1.listennotes.com/playlist/image/6907e8ff6b6c45df94cc059753f369cc.JPEG",
      "last_timestamp_ms": 1595641092907,
      "listennotes_url": "https://www.listennotes.com/listen/podcasts-about-podcasting-m1pe7z60bsw/?display=episode",
      "name": "My podcast playlist",
      "podcast_count": 10,
      "thumbnail": "https://d3sv2eduhewoas.cloudfront.net/playlist/image/48477deae02649d7ab9d3f1b3966af38.JPEG",
      "total_audio_length_sec": 234567,
      "visibility": "public"
    }
  ],
  "previous_page_number": 1,
  "total": 325
}
```

<h3 id="fetch-a-list-of-your-playlists-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PlaylistsResponse](#schemaplaylistsresponse)|
|401|Unauthorized|Wrong api key, or your account is suspended.|None|
|429|Too Many Requests|For FREE plan, exceeding the quota limit; or for all plans, sending too many requests too fast and exceeding the rate limit.|None|
|5XX|Server Error|Something wrong on our end (Unexpected server errors).|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-ListenAPI-FreeQuota|integer||Free quotas of API requests included in your api plan.|
|200|X-ListenAPI-NextBillingDate|string|date-time|The timestamp for the start of next billing cycle. In ISO 8601 format.|
|200|X-ListenAPI-Usage|integer||The number of API requests that you've used in current billing cycle.|
|200|X-listenAPI-Latency-Seconds|number||Latency for this api call, in seconds.|

<aside class="success">
This operation does not require authentication
</aside>

## Fetch a playlist's info and items (i.e., episodes or podcasts).

<a id="opIdgetPlaylistById"></a>

> Code samples

```bash
curl https://example.com/playlists/m1pe7z60bsw \
  -H 'Accept: application/json' \
  -H 'X-ListenAPI-Key: string'
```

`GET /playlists/{id}`

A playlist can be an episode list (i.e., all items are episodes) or a podcast list (i.e., all items are podcasts),
which is essentially the same as those created via listennotes.com/listen/.
This endpoint fetches a list of items (i.e., episodes or podcasts) in the playlist.
You can use the **last_pub_date_ms** parameter to do pagination and fetch more items.
A playlist can be **public** (discoverable on ListenNotes.com),
**unlisted** (accessible to anyone who knows the playlist id),
or **private** (accessible to its owner).
You can fetch all playlists created by you, and **public** / **unlisted** playlists created by others.


<h3 id="fetch-a-playlists-info-and-items-ie-episodes-or-podcasts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-ListenAPI-Key|header|string|true|Get API Key on listennotes.com/api|
|id|path|string|true|Playlist id (always 11 characters, e.g., m1pe7z60bsw).<br>You can get the podcast id from the url of a playlist, e.g.,<br>m1pe7z60bsw is the playlist id of listennotes.com/listen/podcasts-about-podcasting-m1pe7z60bsw<br>|
|type|query|string|false|The type of this playlist, which should be either **episode_list** or **podcast_list**.<br>|
|last_timestamp_ms|query|integer|false|For playlist items pagination.<br>It's the value of **last_timestamp_ms** from the response of last request.<br>If it's 0 or not specified, just return the latest or the oldest 20 items,<br>depending on the value of the **sort** parameter.<br>|
|sort|query|string|false|How do you want to sort playlist items?<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|episode_list|
|type|podcast_list|
|sort|recent_added_first|
|sort|oldest_added_first|
|sort|recent_published_first|
|sort|oldest_published_first|

> Example responses

> 200 Response

```json
{
  "description": "A curated playlist of podcasts about podcasting.",
  "id": "m1pe7z60bsw",
  "image": "https://cdn-images-1.listennotes.com/playlist/image/6907e8ff6b6c45df94cc059753f369cc.JPEG",
  "items": [
    {
      "added_at_ms": 1595567004958,
      "data": {
        "audio": "https://www.listennotes.com/e/p/11b34041e804491b9704d11f283c74de/",
        "audio_length_sec": 567,
        "description": "<p>Disney chief Bob Iger shared news about Star Wars movies in 2020 and beyond, but some media outlets gave conflicting reports about it. Here's the real scoop. Punch it!</p> <p>***We’re listener supported! Go to http://Patreon.com/sw7x7 to donate to the Star Wars 7x7 podcast, and you’ll get some fabulous rewards for your pledge.*** </p> <p>Check out SW7x7.com for full Star Wars 7x7 show notes and links, and to comment on any of the content of this episode! If you like what you've heard, please leave us a rating or review on iTunes or Stitcher, which will also help more people discover this Star Wars podcast.</p> <p>Don't forget to join the Star Wars 7x7 fun on Facebook at Facebook.com/SW7x7, and follow the breaking news Twitter feed at Twitter.com/SW7x7Podcast. We're also on Pinterest and Instagram as \"SW7x7\" too, and we'd love to connect with you there!</p>\n",
        "explicit_content": false,
        "id": "4d82e50314174754a3b603912448e812",
        "image": "https://cdn-images-1.listennotes.com/podcasts/exponent-ben-thompson-james-allworth-OaJSjb4xQv3.1400x1400.jpg",
        "link": "https://www.npr.org/2020/01/22/798532179/soleimanis-iran",
        "listennotes_edit_url": "https://www.listennotes.com/e/11b34041e804491b9704d11f283c74de/#edit",
        "listennotes_url": "https://www.listennotes.com/e/4d82e50314174754a3b603912448e812/",
        "maybe_audio_invalid": false,
        "podcast": {
          "id": "4d3fe717742d4963a85562e9f84d8c79",
          "image": "https://cdn-images-1.listennotes.com/podcasts/exponent-ben-thompson-james-allworth-OaJSjb4xQv3.1400x1400.jpg",
          "listen_score": 81,
          "listen_score_global_rank": "0.5%",
          "listennotes_url": "https://www.listennotes.com/c/4d3fe717742d4963a85562e9f84d8c79/",
          "publisher": "Planet Broadcasting",
          "thumbnail": "https://cdn-images-1.listennotes.com/podcasts/exponent-ben-thompson-james-allworth-OaJSjb4xQv3.300x300.jpg",
          "title": "Star Wars 7x7 | Star Wars News, Interviews, and More!"
        },
        "pub_date_ms": 1474873200000,
        "thumbnail": "https://cdn-images-1.listennotes.com/podcasts/exponent-ben-thompson-james-allworth-OaJSjb4xQv3.300x300.jpg",
        "title": "Celebration Recap, Jason Fry and Christian Blauvelt Interviews – SWBW #101"
      },
      "id": 23,
      "notes": "This is a good episode.",
      "type": "episode"
    }
  ],
  "last_timestamp_ms": 1595641092907,
  "listennotes_url": "https://www.listennotes.com/listen/podcasts-about-podcasting-m1pe7z60bsw/?display=episode",
  "name": "My podcast playlist",
  "thumbnail": "https://d3sv2eduhewoas.cloudfront.net/playlist/image/48477deae02649d7ab9d3f1b3966af38.JPEG",
  "total": 325,
  "total_audio_length_sec": 234567,
  "type": "episode_list",
  "visibility": "public"
}
```

<h3 id="fetch-a-playlists-info-and-items-ie-episodes-or-podcasts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PlaylistResponse](#schemaplaylistresponse)|
|401|Unauthorized|Wrong api key, or your account is suspended.|None|
|404|Not Found|Endpoint not exist, or podcast / episode not exist.|None|
|429|Too Many Requests|For FREE plan, exceeding the quota limit; or for all plans, sending too many requests too fast and exceeding the rate limit.|None|
|5XX|Server Error|Something wrong on our end (Unexpected server errors).|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-ListenAPI-FreeQuota|integer||Free quotas of API requests included in your api plan.|
|200|X-ListenAPI-NextBillingDate|string|date-time|The timestamp for the start of next billing cycle. In ISO 8601 format.|
|200|X-ListenAPI-Usage|integer||The number of API requests that you've used in current billing cycle.|
|200|X-listenAPI-Latency-Seconds|number||Latency for this api call, in seconds.|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="listen-api-podcast-search-directory-and-insights-api-podcaster-api">Podcaster API</h1>

Endpoints to improve the podcast database

## Submit a podcast to Listen Notes database

<a id="opIdsubmitPodcast"></a>

> Code samples

```bash
curl https://example.com/podcasts/submit \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H 'X-ListenAPI-Key: string' \
  -d 'email=hello%40example.com&rss=https%3A%2F%2Ffeeds.megaphone.fm%2Fcommitted'
```

`POST /podcasts/submit`

Podcast hosting services can use this endpoint to help your users directly submit a new podcast to Listen Notes database. If the podcast doesn't exist in the database, "status" in the response will be "in review", and we'll review it within 12 hours. If the podcast exists, "status" in the response will be "found". If this submission is rejected, "status" in the response will be "rejected". You can use `POST /podcasts` to check if multiple podcasts exist in the database. If you want to get a notification once the podcast is accepted, you can either specify the "email" parameter or configure a webhook url in the dashboard: listennotes.com/api/dashboard/#webhooks


> Body parameter

```yaml
email: hello@example.com
rss: "https://feeds.megaphone.fm/committed"
```

<h3 id="submit-a-podcast-to-listen-notes-database-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-ListenAPI-Key|header|string|true|Get API Key on listennotes.com/api|
|body|body|[SubmitPodcastForm](#schemasubmitpodcastform)|true|none|
|» email|body|string|false|A valid email address. If **email** is specified, then we'll notify this email address once the podcast is accepted.|
|» rss|body|string|true|A valid podcast rss url.|

> Example responses

> 200 Response

```json
{
  "podcast": {
    "id": "4d3fe717742d4963a85562e9f84d8c79",
    "image": "https://cdn-images-1.listennotes.com/podcasts/exponent-ben-thompson-james-allworth-OaJSjb4xQv3.1400x1400.jpg",
    "listen_score": 81,
    "listen_score_global_rank": "0.5%",
    "listennotes_url": "https://www.listennotes.com/c/4d3fe717742d4963a85562e9f84d8c79/",
    "publisher": "Planet Broadcasting",
    "thumbnail": "https://cdn-images-1.listennotes.com/podcasts/exponent-ben-thompson-james-allworth-OaJSjb4xQv3.300x300.jpg",
    "title": "Star Wars 7x7 | Star Wars News, Interviews, and More!"
  },
  "status": "found"
}
```

<h3 id="submit-a-podcast-to-listen-notes-database-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[SubmitPodcastResponse](#schemasubmitpodcastresponse)|
|400|Bad Request|Something wrong on your end (Client side errors), e.g., missing required parameters.|None|
|401|Unauthorized|Wrong api key, or your account is suspended.|None|
|429|Too Many Requests|For FREE plan, exceeding the quota limit; or for all plans, sending too many requests too fast and exceeding the rate limit.|None|
|5XX|Server Error|Something wrong on our end (Unexpected server errors).|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-ListenAPI-FreeQuota|integer||Free quotas of API requests included in your api plan.|
|200|X-ListenAPI-NextBillingDate|string|date-time|The timestamp for the start of next billing cycle. In ISO 8601 format.|
|200|X-ListenAPI-Usage|integer||The number of API requests that you've used in current billing cycle.|
|200|X-listenAPI-Latency-Seconds|number||Latency for this api call, in seconds.|

<aside class="success">
This operation does not require authentication
</aside>

## Request to delete a podcast

<a id="opIddeletePodcastById"></a>

> Code samples

```bash
curl https://example.com/podcasts/4d3fe717742d4963a85562e9f84d8c79 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H 'X-ListenAPI-Key: string'
```

`DELETE /podcasts/{id}`

Podcast hosting services can use this endpoint to streamline the process of podcast deletion on behave of their users (podcasters). We will review the deletion request within 12 hours. If the podcast is already deleted, the "status" field in the response will be "deleted". Otherwise, the status field will be "in review". If you want to get a notification once the podcast is deleted, you can configure a webhook url in the dashboard: listennotes.com/api/dashboard/#webhooks


<h3 id="request-to-delete-a-podcast-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-ListenAPI-Key|header|string|true|Get API Key on listennotes.com/api|
|id|path|string|true|Podcast id. You can get podcast id from using other endpoints, e.g., `GET /search`, `GET /best_podcasts`...|
|reason|query|string|false|The reason why this podcast should be deleted, e.g., copyright violation, the podcaster wants to delete it... You can put "testing" here to indicate that you are testing this endpoint, so we will not actually delete the podcast.|

> Example responses

> 200 Response

```json
{
  "status": "deleted"
}
```

<h3 id="request-to-delete-a-podcast-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[DeletePodcastResponse](#schemadeletepodcastresponse)|
|401|Unauthorized|Wrong api key, or your account is suspended.|None|
|404|Not Found|Endpoint not exist, or podcast / episode not exist.|None|
|429|Too Many Requests|For FREE plan, exceeding the quota limit; or for all plans, sending too many requests too fast and exceeding the rate limit.|None|
|5XX|Server Error|Something wrong on our end (Unexpected server errors).|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-ListenAPI-FreeQuota|integer||Free quotas of API requests included in your api plan.|
|200|X-ListenAPI-NextBillingDate|string|date-time|The timestamp for the start of next billing cycle. In ISO 8601 format.|
|200|X-ListenAPI-Usage|integer||The number of API requests that you've used in current billing cycle.|
|200|X-listenAPI-Latency-Seconds|number||Latency for this api call, in seconds.|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="listen-api-podcast-search-directory-and-insights-api-insights-api">Insights API</h1>

Endpoints to get insights of podcasts, e.g., audience demographics

## Fetch audience demographics for a podcast

<a id="opIdgetPodcastAudience"></a>

> Code samples

```bash
curl https://example.com/podcasts/25212ac3c53240a880dd5032e547047b/audience \
  -H 'Accept: application/json' \
  -H 'X-ListenAPI-Key: string'
```

`GET /podcasts/{id}/audience`

Fetch audience demographics for a podcast - 1) directly measured on the Listen Notes platform; 2) only supports audience breakdown by regions for now; 3) not every podcast has data.

<h3 id="fetch-audience-demographics-for-a-podcast-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-ListenAPI-Key|header|string|true|Get API Key on listennotes.com/api|
|id|path|string|true|Podcast id.|

> Example responses

> 200 Response

```json
{
  "by_regions": [
    {
      "ratio": "20.22%",
      "region": "us"
    }
  ]
}
```

<h3 id="fetch-audience-demographics-for-a-podcast-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PodcastAudienceResponse](#schemapodcastaudienceresponse)|
|401|Unauthorized|Wrong api key, or your account is suspended.|None|
|404|Not Found|Endpoint not exist, or podcast / episode not exist.|None|
|429|Too Many Requests|For FREE plan, exceeding the quota limit; or for all plans, sending too many requests too fast and exceeding the rate limit.|None|
|5XX|Server Error|Something wrong on our end (Unexpected server errors).|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-ListenAPI-FreeQuota|integer||Free quotas of API requests included in your api plan.|
|200|X-ListenAPI-NextBillingDate|string|date-time|The timestamp for the start of next billing cycle. In ISO 8601 format.|
|200|X-ListenAPI-Usage|integer||The number of API requests that you've used in current billing cycle.|
|200|X-listenAPI-Latency-Seconds|number||Latency for this api call, in seconds.|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="listen-api-podcast-search-directory-and-insights-api-webhooks">Webhooks</h1>

## postpodcastDeleted

`POST podcastDeleted`

> Body parameter

```json
{
  "id": "4d3fe717742d4963a85562e9f84d8c79",
  "image": "https://cdn-images-1.listennotes.com/podcasts/exponent-ben-thompson-james-allworth-OaJSjb4xQv3.1400x1400.jpg",
  "listennotes_url": "https://www.listennotes.com/c/4d3fe717742d4963a85562e9f84d8c79/",
  "publisher": "Planet Broadcasting",
  "rss": "https://sw7x7.libsyn.com/rss",
  "thumbnail": "https://cdn-images-1.listennotes.com/podcasts/exponent-ben-thompson-james-allworth-OaJSjb4xQv3.300x300.jpg",
  "title": "Star Wars 7x7 | Star Wars News, Interviews, and More!"
}
```

<h3 id="postpodcastdeleted-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[PodcastMinimumRss](#schemapodcastminimumrss)|false|Triggered by your request to DELETE /podcasts/{id}, if the podcast is actually deleted.|
|» id|body|[PodcastIdField](#schemapodcastidfield)|false|Podcast id, which can be used to further fetch detailed podcast metadata via `GET /podcasts/{id}`.|
|» image|body|[ImageField](#schemaimagefield)|false|Image url for this podcast's artwork. If you are using PRO/ENTERPRISE plan, then it's<br>a high resolution image (1400x1400). If you are using FREE plan, then it's the same as **thumbnail**,<br>low resolution image (300x300).<br>|
|» listennotes_url|body|[PodcastLNUrlField](#schemapodcastlnurlfield)|false|The url of this podcast on [ListenNotes.com](https://www.ListenNotes.com).|
|» publisher|body|[PublisherField](#schemapublisherfield)|false|Podcast publisher name.|
|» rss|body|[RssField](#schemarssfield)|false|RSS url of this podcast. This field is available only in the PRO/ENTERPRISE plan.|
|» thumbnail|body|[ThumbnailField](#schemathumbnailfield)|false|Thumbnail image url for this podcast's artwork (300x300).|
|» title|body|[PodcastNameField](#schemapodcastnamefield)|false|Podcast name.|

<h3 id="postpodcastdeleted-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Return a 200 status to indicate that the data was received successfully|None|

<aside class="success">
This operation does not require authentication
</aside>

## postpodcastsSubmitAccepted

`POST podcastsSubmitAccepted`

> Body parameter

```json
{
  "id": "4d3fe717742d4963a85562e9f84d8c79",
  "image": "https://cdn-images-1.listennotes.com/podcasts/exponent-ben-thompson-james-allworth-OaJSjb4xQv3.1400x1400.jpg",
  "listennotes_url": "https://www.listennotes.com/c/4d3fe717742d4963a85562e9f84d8c79/",
  "publisher": "Planet Broadcasting",
  "rss": "https://sw7x7.libsyn.com/rss",
  "thumbnail": "https://cdn-images-1.listennotes.com/podcasts/exponent-ben-thompson-james-allworth-OaJSjb4xQv3.300x300.jpg",
  "title": "Star Wars 7x7 | Star Wars News, Interviews, and More!"
}
```

<h3 id="postpodcastssubmitaccepted-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[PodcastMinimumRss](#schemapodcastminimumrss)|false|Triggered by your request to POST /podcasts/submit, if the podcast submission is accepted.|
|» id|body|[PodcastIdField](#schemapodcastidfield)|false|Podcast id, which can be used to further fetch detailed podcast metadata via `GET /podcasts/{id}`.|
|» image|body|[ImageField](#schemaimagefield)|false|Image url for this podcast's artwork. If you are using PRO/ENTERPRISE plan, then it's<br>a high resolution image (1400x1400). If you are using FREE plan, then it's the same as **thumbnail**,<br>low resolution image (300x300).<br>|
|» listennotes_url|body|[PodcastLNUrlField](#schemapodcastlnurlfield)|false|The url of this podcast on [ListenNotes.com](https://www.ListenNotes.com).|
|» publisher|body|[PublisherField](#schemapublisherfield)|false|Podcast publisher name.|
|» rss|body|[RssField](#schemarssfield)|false|RSS url of this podcast. This field is available only in the PRO/ENTERPRISE plan.|
|» thumbnail|body|[ThumbnailField](#schemathumbnailfield)|false|Thumbnail image url for this podcast's artwork (300x300).|
|» title|body|[PodcastNameField](#schemapodcastnamefield)|false|Podcast name.|

<h3 id="postpodcastssubmitaccepted-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Return a 200 status to indicate that the data was received successfully|None|

<aside class="success">
This operation does not require authentication
</aside>

## postpodcastsSubmitRejected

`POST podcastsSubmitRejected`

> Body parameter

```json
{
  "podcast": {
    "rss": "https://sw7x7.libsyn.com/rss"
  }
}
```

<h3 id="postpodcastssubmitrejected-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|Triggered by your request to POST /podcasts/submit, if the podcast submission is rejected.|
|» podcast|body|object|false|none|
|» » rss|body|[RssField](#schemarssfield)|false|RSS url of this podcast. This field is available only in the PRO/ENTERPRISE plan.|

<h3 id="postpodcastssubmitrejected-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Return a 200 status to indicate that the data was received successfully|None|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_AudioField">AudioField</h2>
<!-- backwards compatibility -->
<a id="schemaaudiofield"></a>
<a id="schema_AudioField"></a>
<a id="tocSaudiofield"></a>
<a id="tocsaudiofield"></a>

```json
"https://www.listennotes.com/e/p/11b34041e804491b9704d11f283c74de/"
```

Audio url of this episode, which can be played directly.

<h2 id="tocS_AudioLengthSecField">AudioLengthSecField</h2>
<!-- backwards compatibility -->
<a id="schemaaudiolengthsecfield"></a>
<a id="schema_AudioLengthSecField"></a>
<a id="tocSaudiolengthsecfield"></a>
<a id="tocsaudiolengthsecfield"></a>

```json
567
```

Audio length of this episode. In seconds.

<h2 id="tocS_AvgAudioLengthSecField">AvgAudioLengthSecField</h2>
<!-- backwards compatibility -->
<a id="schemaavgaudiolengthsecfield"></a>
<a id="schema_AvgAudioLengthSecField"></a>
<a id="tocSavgaudiolengthsecfield"></a>
<a id="tocsavgaudiolengthsecfield"></a>

```json
1291
```

Average audio length of all episodes of this podcast. In seconds.

<h2 id="tocS_BestPodcastsLNUrlField">BestPodcastsLNUrlField</h2>
<!-- backwards compatibility -->
<a id="schemabestpodcastslnurlfield"></a>
<a id="schema_BestPodcastsLNUrlField"></a>
<a id="tocSbestpodcastslnurlfield"></a>
<a id="tocsbestpodcastslnurlfield"></a>

```json
"https://www.listennotes.com/best-business-news-podcasts-95/"
```

Url of the list of best podcasts on [ListenNotes.com](https://www.ListenNotes.com).

<h2 id="tocS_BestPodcastsResponse">BestPodcastsResponse</h2>
<!-- backwards compatibility -->
<a id="schemabestpodcastsresponse"></a>
<a id="schema_BestPodcastsResponse"></a>
<a id="tocSbestpodcastsresponse"></a>
<a id="tocsbestpodcastsresponse"></a>

```json
{
  "has_next": true,
  "has_previous": true,
  "id": 95,
  "listennotes_url": "https://www.listennotes.com/best-business-news-podcasts-95/",
  "name": "Business News",
  "next_page_number": 3,
  "page_number": 2,
  "parent_id": 93,
  "podcasts": [
    {
      "audio_length_sec": 1291,
      "country": "United States",
      "description": "<p>The Star Wars 7x7 Podcast is Rebel-rousing fun for everyday Jedi, between 7 and 14 minutes a day, 7 days a week. Join host Allen Voivod for Star Wars news, history, interviews, trivia, and deep dives into the Star Wars story as told in movies, books, comics, games, cartoons, and more. Subscribe now for your daily dose of Star Wars joy. It's destiny unleashed!</p>",
      "earliest_pub_date_ms": 1470667902000,
      "email": "hello@example.com",
      "explicit_content": false,
      "extra": {
        "amazon_music_url": "https://music.amazon.com/podcasts/6fc6d683-9ef3-4850-9c35-8e8b1a42a147/the-lock-sportscast",
        "facebook_handle": "sw7x7",
        "google_url": "https://podcasts.google.com/feed/aHR0cHM6Ly9yc3MuYXJ0MTkuY29tL2pvaG4tc29sb21vbi1yZXBvcnRz",
        "instagram_handle": "sw7x7",
        "linkedin_url": "string",
        "patreon_handle": "sw7x7",
        "spotify_url": "https://open.spotify.com/show/2rQJUP9Y3HxemiW3JHt9WV",
        "twitter_handle": "SW7x7podcast",
        "url1": "string",
        "url2": "string",
        "url3": "string",
        "wechat_handle": "string",
        "youtube_url": "https://www.youtube.com/sw7x7"
      },
      "genre_ids": [
        138,
        86,
        160,
        68,
        82,
        100,
        101
      ],
      "id": "4d3fe717742d4963a85562e9f84d8c79",
      "image": "https://cdn-images-1.listennotes.com/podcasts/exponent-ben-thompson-james-allworth-OaJSjb4xQv3.1400x1400.jpg",
      "is_claimed": true,
      "itunes_id": 896354638,
      "language": "English",
      "latest_episode_id": "d057092e57cc4ced80e0efaa196593d9",
      "latest_pub_date_ms": 1557499770000,
      "listen_score": 81,
      "listen_score_global_rank": "0.5%",
      "listennotes_url": "https://www.listennotes.com/c/4d3fe717742d4963a85562e9f84d8c79/",
      "looking_for": {
        "cohosts": true,
        "cross_promotion": true,
        "guests": true,
        "sponsors": true
      },
      "publisher": "Planet Broadcasting",
      "rss": "https://sw7x7.libsyn.com/rss",
      "thumbnail": "https://cdn-images-1.listennotes.com/podcasts/exponent-ben-thompson-james-allworth-OaJSjb4xQv3.300x300.jpg",
      "title": "Star Wars 7x7 | Star Wars News, Interviews, and More!",
      "total_episodes": 324,
      "type": "episodic",
      "update_frequency_hours": 168,
      "website": "http://sw7x7.com/"
    }
  ],
  "previous_page_number": 1,
  "total": 325
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|has_next|boolean|true|none|none|
|has_previous|boolean|true|none|none|
|id|integer|true|none|The id of this genre|
|listennotes_url|[BestPodcastsLNUrlField](#schemabestpodcastslnurlfield)|true|none|Url of the list of best podcasts on [ListenNotes.com](https://www.ListenNotes.com).|
|name|string|true|none|This genre's name.|
|next_page_number|integer|true|none|none|
|page_number|integer|true|none|none|
|parent_id|integer|true|none|The id of parent genre.|
|podcasts|[[PodcastSimple](#schemapodcastsimple)]|true|none|none|
|previous_page_number|integer|true|none|none|
|total|integer|true|none|none|

<h2 id="tocS_CountryField">CountryField</h2>
<!-- backwards compatibility -->
<a id="schemacountryfield"></a>
<a id="schema_CountryField"></a>
<a id="tocScountryfield"></a>
<a id="tocscountryfield"></a>

```json
"United States"
```

The country where this podcast is produced.

<h2 id="tocS_CuratedDescriptionField">CuratedDescriptionField</h2>
<!-- backwards compatibility -->
<a id="schemacurateddescriptionfield"></a>
<a id="schema_CuratedDescriptionField"></a>
<a id="tocScurateddescriptionfield"></a>
<a id="tocscurateddescriptionfield"></a>

```json
"Commuting to work is always better when you have a great new podcast to listen to, and this year, we have discovered some of our favorite podcasts yet for readers and book-lovers. These podcasts for readers entertain us and provide no shortage of new book recommendations too."
```

This curated list's description.

<h2 id="tocS_CuratedIdField">CuratedIdField</h2>
<!-- backwards compatibility -->
<a id="schemacuratedidfield"></a>
<a id="schema_CuratedIdField"></a>
<a id="tocScuratedidfield"></a>
<a id="tocscuratedidfield"></a>

```json
"Vb017Sx3l8F"
```

Curated list id, which can be used to further fetch detailed curated list metadata via `GET /curated_podcasts/{id}`.

<h2 id="tocS_CuratedLNUrlField">CuratedLNUrlField</h2>
<!-- backwards compatibility -->
<a id="schemacuratedlnurlfield"></a>
<a id="schema_CuratedLNUrlField"></a>
<a id="tocScuratedlnurlfield"></a>
<a id="tocscuratedlnurlfield"></a>

```json
"https://www.listennotes.com/curated-podcasts/7-bookish-podcasts-for-avid-readers-on-H2r-TCWai8K/"
```

The url of this curated list on [ListenNotes.com](https://www.ListenNotes.com).

<h2 id="tocS_CuratedListFull">CuratedListFull</h2>
<!-- backwards compatibility -->
<a id="schemacuratedlistfull"></a>
<a id="schema_CuratedListFull"></a>
<a id="tocScuratedlistfull"></a>
<a id="tocscuratedlistfull"></a>

```json
{
  "description": "Commuting to work is always better when you have a great new podcast to listen to, and this year, we have discovered some of our favorite podcasts yet for readers and book-lovers. These podcasts for readers entertain us and provide no shortage of new book recommendations too.",
  "id": "Vb017Sx3l8F",
  "listennotes_url": "https://www.listennotes.com/curated-podcasts/7-bookish-podcasts-for-avid-readers-on-H2r-TCWai8K/",
  "podcasts": [
    {
      "audio_length_sec": 1291,
      "country": "United States",
      "description": "<p>The Star Wars 7x7 Podcast is Rebel-rousing fun for everyday Jedi, between 7 and 14 minutes a day, 7 days a week. Join host Allen Voivod for Star Wars news, history, interviews, trivia, and deep dives into the Star Wars story as told in movies, books, comics, games, cartoons, and more. Subscribe now for your daily dose of Star Wars joy. It's destiny unleashed!</p>",
      "earliest_pub_date_ms": 1470667902000,
      "email": "hello@example.com",
      "explicit_content": false,
      "extra": {
        "amazon_music_url": "https://music.amazon.com/podcasts/6fc6d683-9ef3-4850-9c35-8e8b1a42a147/the-lock-sportscast",
        "facebook_handle": "sw7x7",
        "google_url": "https://podcasts.google.com/feed/aHR0cHM6Ly9yc3MuYXJ0MTkuY29tL2pvaG4tc29sb21vbi1yZXBvcnRz",
        "instagram_handle": "sw7x7",
        "linkedin_url": "string",
        "patreon_handle": "sw7x7",
        "spotify_url": "https://open.spotify.com/show/2rQJUP9Y3HxemiW3JHt9WV",
        "twitter_handle": "SW7x7podcast",
        "url1": "string",
        "url2": "string",
        "url3": "string",
        "wechat_handle": "string",
        "youtube_url": "https://www.youtube.com/sw7x7"
      },
      "genre_ids": [
        138,
        86,
        160,
        68,
        82,
        100,
        101
      ],
      "id": "4d3fe717742d4963a85562e9f84d8c79",
      "image": "https://cdn-images-1.listennotes.com/podcasts/exponent-ben-thompson-james-allworth-OaJSjb4xQv3.1400x1400.jpg",
      "is_claimed": true,
      "itunes_id": 896354638,
      "language": "English",
      "latest_episode_id": "d057092e57cc4ced80e0efaa196593d9",
      "latest_pub_date_ms": 1557499770000,
      "listen_score": 81,
      "listen_score_global_rank": "0.5%",
      "listennotes_url": "https://www.listennotes.com/c/4d3fe717742d4963a85562e9f84d8c79/",
      "looking_for": {
        "cohosts": true,
        "cross_promotion": true,
        "guests": true,
        "sponsors": true
      },
      "publisher": "Planet Broadcasting",
      "rss": "https://sw7x7.libsyn.com/rss",
      "thumbnail": "https://cdn-images-1.listennotes.com/podcasts/exponent-ben-thompson-james-allworth-OaJSjb4xQv3.300x300.jpg",
      "title": "Star Wars 7x7 | Star Wars News, Interviews, and More!",
      "total_episodes": 324,
      "type": "episodic",
      "update_frequency_hours": 168,
      "website": "http://sw7x7.com/"
    }
  ],
  "pub_date_ms": 1556843484301,
  "source_domain": "parade.com",
  "source_url": "https://parade.com/718913/ashley_johnson/7-bookish-podcasts-for-avid-readers-on-the-go/",
  "title": "7 Bookish Podcasts for Avid Readers On the Go",
  "total": 25
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|[CuratedDescriptionField](#schemacurateddescriptionfield)|false|none|This curated list's description.|
|id|[CuratedIdField](#schemacuratedidfield)|false|none|Curated list id, which can be used to further fetch detailed curated list metadata via `GET /curated_podcasts/{id}`.|
|listennotes_url|[CuratedLNUrlField](#schemacuratedlnurlfield)|false|none|The url of this curated list on [ListenNotes.com](https://www.ListenNotes.com).|
|podcasts|[[PodcastSimple](#schemapodcastsimple)]|false|none|Complete meta data of all podcasts in this curated list.|
|pub_date_ms|[CuratedPubDateMsField](#schemacuratedpubdatemsfield)|false|none|Published date of this curated list. In milliseconds.|
|source_domain|[CuratedSourceDomainField](#schemacuratedsourcedomainfield)|false|none|The domain name of the source of this curated list.|
|source_url|[CuratedSourceUrlField](#schemacuratedsourceurlfield)|false|none|Url of the source of this curated list.|
|title|[CuratedNameField](#schemacuratednamefield)|false|none|Curated list name.|
|total|[CuratedTotalPodcastsField](#schemacuratedtotalpodcastsfield)|false|none|The total number of podcasts in this curated list.|

<h2 id="tocS_CuratedListSearchResult">CuratedListSearchResult</h2>
<!-- backwards compatibility -->
<a id="schemacuratedlistsearchresult"></a>
<a id="schema_CuratedListSearchResult"></a>
<a id="tocScuratedlistsearchresult"></a>
<a id="tocscuratedlistsearchresult"></a>

```json
{
  "description_highlighted": "...<span class=\"ln-search-highlight\">Star</span> <span class=\"ln-search-highlight\">Wars</span> fans in Reddit shared their favorite podcasts.",
  "description_original": "Star Wars fans in Reddit shared their favorite podcasts.",
  "id": "Vb017Sx3l8F",
  "listennotes_url": "https://www.listennotes.com/curated-podcasts/7-bookish-podcasts-for-avid-readers-on-H2r-TCWai8K/",
  "podcasts": [
    {
      "id": "4d3fe717742d4963a85562e9f84d8c79",
      "image": "https://cdn-images-1.listennotes.com/podcasts/exponent-ben-thompson-james-allworth-OaJSjb4xQv3.1400x1400.jpg",
      "listen_score": 81,
      "listen_score_global_rank": "0.5%",
      "listennotes_url": "https://www.listennotes.com/c/4d3fe717742d4963a85562e9f84d8c79/",
      "publisher": "Planet Broadcasting",
      "thumbnail": "https://cdn-images-1.listennotes.com/podcasts/exponent-ben-thompson-james-allworth-OaJSjb4xQv3.300x300.jpg",
      "title": "Star Wars 7x7 | Star Wars News, Interviews, and More!"
    }
  ],
  "pub_date_ms": 1556843484301,
  "source_domain": "parade.com",
  "source_url": "https://parade.com/718913/ashley_johnson/7-bookish-podcasts-for-avid-readers-on-the-go/",
  "title_highlighted": "What are some good <span class=\"ln-search-highlight\">Star</span> <span class=\"ln-search-highlight\">Wars</span> Podcast to listen to?\n",
  "title_original": "What are some good Star Wars Podcast to listen to?",
  "total": 25
}
```

When **type** is *curated*.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description_highlighted|string|false|none|Highlighted segment of this curated list's description|
|description_original|string|false|none|Plain text of this curated list's description|
|id|[CuratedIdField](#schemacuratedidfield)|false|none|Curated list id, which can be used to further fetch detailed curated list metadata via `GET /curated_podcasts/{id}`.|
|listennotes_url|[CuratedLNUrlField](#schemacuratedlnurlfield)|false|none|The url of this curated list on [ListenNotes.com](https://www.ListenNotes.com).|
|podcasts|[[PodcastMinimum](#schemapodcastminimum)]|false|none|Up to 5 podcasts in this curated list.|
|pub_date_ms|[CuratedPubDateMsField](#schemacuratedpubdatemsfield)|false|none|Published date of this curated list. In milliseconds.|
|source_domain|[CuratedSourceDomainField](#schemacuratedsourcedomainfield)|false|none|The domain name of the source of this curated list.|
|source_url|[CuratedSourceUrlField](#schemacuratedsourceurlfield)|false|none|Url of the source of this curated list.|
|title_highlighted|string|false|none|Highlighted segment of this curated list's title|
|title_original|string|false|none|Plain text of this curated list's title|
|total|[CuratedTotalPodcastsField](#schemacuratedtotalpodcastsfield)|false|none|The total number of podcasts in this curated list.|

<h2 id="tocS_CuratedListSimple">CuratedListSimple</h2>
<!-- backwards compatibility -->
<a id="schemacuratedlistsimple"></a>
<a id="schema_CuratedListSimple"></a>
<a id="tocScuratedlistsimple"></a>
<a id="tocscuratedlistsimple"></a>

```json
{
  "description": "Commuting to work is always better when you have a great new podcast to listen to, and this year, we have discovered some of our favorite podcasts yet for readers and book-lovers. These podcasts for readers entertain us and provide no shortage of new book recommendations too.",
  "id": "Vb017Sx3l8F",
  "listennotes_url": "https://www.listennotes.com/curated-podcasts/7-bookish-podcasts-for-avid-readers-on-H2r-TCWai8K/",
  "podcasts": [
    {
      "id": "4d3fe717742d4963a85562e9f84d8c79",
      "image": "https://cdn-images-1.listennotes.com/podcasts/exponent-ben-thompson-james-allworth-OaJSjb4xQv3.1400x1400.jpg",
      "listen_score": 81,
      "listen_score_global_rank": "0.5%",
      "listennotes_url": "https://www.listennotes.com/c/4d3fe717742d4963a85562e9f84d8c79/",
      "publisher": "Planet Broadcasting",
      "thumbnail": "https://cdn-images-1.listennotes.com/podcasts/exponent-ben-thompson-james-allworth-OaJSjb4xQv3.300x300.jpg",
      "title": "Star Wars 7x7 | Star Wars News, Interviews, and More!"
    }
  ],
  "pub_date_ms": 1556843484301,
  "source_domain": "parade.com",
  "source_url": "https://parade.com/718913/ashley_johnson/7-bookish-podcasts-for-avid-readers-on-the-go/",
  "title": "7 Bookish Podcasts for Avid Readers On the Go",
  "total": 25
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|[CuratedDescriptionField](#schemacurateddescriptionfield)|false|none|This curated list's description.|
|id|[CuratedIdField](#schemacuratedidfield)|false|none|Curated list id, which can be used to further fetch detailed curated list metadata via `GET /curated_podcasts/{id}`.|
|listennotes_url|[CuratedLNUrlField](#schemacuratedlnurlfield)|false|none|The url of this curated list on [ListenNotes.com](https://www.ListenNotes.com).|
|podcasts|[[PodcastMinimum](#schemapodcastminimum)]|false|none|Minimum meta data of up to 5 podcasts in this curated list.|
|pub_date_ms|[CuratedPubDateMsField](#schemacuratedpubdatemsfield)|false|none|Published date of this curated list. In milliseconds.|
|source_domain|[CuratedSourceDomainField](#schemacuratedsourcedomainfield)|false|none|The domain name of the source of this curated list.|
|source_url|[CuratedSourceUrlField](#schemacuratedsourceurlfield)|false|none|Url of the source of this curated list.|
|title|[CuratedNameField](#schemacuratednamefield)|false|none|Curated list name.|
|total|[CuratedTotalPodcastsField](#schemacuratedtotalpodcastsfield)|false|none|The total number of podcasts in this curated list.|

<h2 id="tocS_CuratedNameField">CuratedNameField</h2>
<!-- backwards compatibility -->
<a id="schemacuratednamefield"></a>
<a id="schema_CuratedNameField"></a>
<a id="tocScuratednamefield"></a>
<a id="tocscuratednamefield"></a>

```json
"7 Bookish Podcasts for Avid Readers On the Go"
```

Curated list name.

<h2 id="tocS_CuratedPubDateMsField">CuratedPubDateMsField</h2>
<!-- backwards compatibility -->
<a id="schemacuratedpubdatemsfield"></a>
<a id="schema_CuratedPubDateMsField"></a>
<a id="tocScuratedpubdatemsfield"></a>
<a id="tocscuratedpubdatemsfield"></a>

```json
1556843484301
```

Published date of this curated list. In milliseconds.

<h2 id="tocS_CuratedSourceDomainField">CuratedSourceDomainField</h2>
<!-- backwards compatibility -->
<a id="schemacuratedsourcedomainfield"></a>
<a id="schema_CuratedSourceDomainField"></a>
<a id="tocScuratedsourcedomainfield"></a>
<a id="tocscuratedsourcedomainfield"></a>

```json
"parade.com"
```

The domain name of the source of this curated list.

<h2 id="tocS_CuratedSourceUrlField">CuratedSourceUrlField</h2>
<!-- backwards compatibility -->
<a id="schemacuratedsourceurlfield"></a>
<a id="schema_CuratedSourceUrlField"></a>
<a id="tocScuratedsourceurlfield"></a>
<a id="tocscuratedsourceurlfield"></a>

```json
"https://parade.com/718913/ashley_johnson/7-bookish-podcasts-for-avid-readers-on-the-go/"
```

Url of the source of this curated list.

<h2 id="tocS_CuratedTotalPodcastsField">CuratedTotalPodcastsField</h2>
<!-- backwards compatibility -->
<a id="schemacuratedtotalpodcastsfield"></a>
<a id="schema_CuratedTotalPodcastsField"></a>
<a id="tocScuratedtotalpodcastsfield"></a>
<a id="tocscuratedtotalpodcastsfield"></a>

```json
25
```

The total number of podcasts in this curated list.

<h2 id="tocS_CustomAudio">CustomAudio</h2>
<!-- backwards compatibility -->
<a id="schemacustomaudio"></a>
<a id="schema_CustomAudio"></a>
<a id="tocScustomaudio"></a>
<a id="tocscustomaudio"></a>

```json
{
  "audio": "https://example.com/audio.mp3",
  "audio_length_sec": 253,
  "image": "https://cdn-images-1.listennotes.com/playlist/image/6907e8ff6b6c45df94cc059753f369cc.JPEG",
  "pub_date_ms": 1595567028133,
  "thumbnail": "https://d3sv2eduhewoas.cloudfront.net/playlist/image/48477deae02649d7ab9d3f1b3966af38.JPEG",
  "title": "An awesome audio to listen."
}
```

A custom audio in a playlist, which is a type of playlist item.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|audio|string|false|none|Audio url, which can be played directly.|
|audio_length_sec|integer|false|none|Audio length in seconds.|
|image|string|false|none|High resolution image url of this custom audio.|
|pub_date_ms|integer|false|none|Published date (in milliseconds) of this custom audio.<br>For now, it's the same as **added_at_ms** of this playlist item.<br>|
|thumbnail|string|false|none|Low resolution image url of this custom audio.|
|title|string|false|none|Custom audio title.|

<h2 id="tocS_DeletePodcastResponse">DeletePodcastResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletepodcastresponse"></a>
<a id="schema_DeletePodcastResponse"></a>
<a id="tocSdeletepodcastresponse"></a>
<a id="tocsdeletepodcastresponse"></a>

```json
{
  "status": "deleted"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|The status of this podcast deletion request.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|deleted|
|status|in review|

<h2 id="tocS_DeletedItem">DeletedItem</h2>
<!-- backwards compatibility -->
<a id="schemadeleteditem"></a>
<a id="schema_DeletedItem"></a>
<a id="tocSdeleteditem"></a>
<a id="tocsdeleteditem"></a>

```json
{
  "error": "This episode is deleted from the podcast database, because...",
  "id": "96fc400171364e32897b25d84a8ed8ec",
  "status": "deleted",
  "title": "This is a test episode"
}
```

A deleted episode or podcast.
An episode or a podcast could be deleted from our podcast database.
Possible reasons: 1) Podcast producers sometimes delete their old episodes. 2) Copyright issues.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|Why this episode or podcast is deleted?|
|id|string|false|none|Episode id or podcast id.|
|status|string|false|none|The status of this episode or podcast. For now, the only possible value is **deleted**.|
|title|string|false|none|Episode title or podcast title.|

<h2 id="tocS_EarliestPubDateMsField">EarliestPubDateMsField</h2>
<!-- backwards compatibility -->
<a id="schemaearliestpubdatemsfield"></a>
<a id="schema_EarliestPubDateMsField"></a>
<a id="tocSearliestpubdatemsfield"></a>
<a id="tocsearliestpubdatemsfield"></a>

```json
1470667902000
```

The published date of the oldest episode of this podcast. In milliseconds

<h2 id="tocS_EmailField">EmailField</h2>
<!-- backwards compatibility -->
<a id="schemaemailfield"></a>
<a id="schema_EmailField"></a>
<a id="tocSemailfield"></a>
<a id="tocsemailfield"></a>

```json
"hello@example.com"
```

The email of this podcast's producer. This field is available only in the PRO/ENTERPRISE plan.

<h2 id="tocS_EpisodeDescriptionField">EpisodeDescriptionField</h2>
<!-- backwards compatibility -->
<a id="schemaepisodedescriptionfield"></a>
<a id="schema_EpisodeDescriptionField"></a>
<a id="tocSepisodedescriptionfield"></a>
<a id="tocsepisodedescriptionfield"></a>

```json
"<p>Disney chief Bob Iger shared news about Star Wars movies in 2020 and beyond, but some media outlets gave conflicting reports about it. Here's the real scoop. Punch it!</p> <p>***We’re listener supported! Go to http://Patreon.com/sw7x7 to donate to the Star Wars 7x7 podcast, and you’ll get some fabulous rewards for your pledge.*** </p> <p>Check out SW7x7.com for full Star Wars 7x7 show notes and links, and to comment on any of the content of this episode! If you like what you've heard, please leave us a rating or review on iTunes or Stitcher, which will also help more people discover this Star Wars podcast.</p> <p>Don't forget to join the Star Wars 7x7 fun on Facebook at Facebook.com/SW7x7, and follow the breaking news Twitter feed at Twitter.com/SW7x7Podcast. We're also on Pinterest and Instagram as \"SW7x7\" too, and we'd love to connect with you there!</p>\n"
```

Html of this episode's full description

<h2 id="tocS_EpisodeFull">EpisodeFull</h2>
<!-- backwards compatibility -->
<a id="schemaepisodefull"></a>
<a id="schema_EpisodeFull"></a>
<a id="tocSepisodefull"></a>
<a id="tocsepisodefull"></a>

```json
{
  "audio": "https://www.listennotes.com/e/p/11b34041e804491b9704d11f283c74de/",
  "audio_length_sec": 567,
  "description": "<p>Disney chief Bob Iger shared news about Star Wars movies in 2020 and beyond, but some media outlets gave conflicting reports about it. Here's the real scoop. Punch it!</p> <p>***We’re listener supported! Go to http://Patreon.com/sw7x7 to donate to the Star Wars 7x7 podcast, and you’ll get some fabulous rewards for your pledge.*** </p> <p>Check out SW7x7.com for full Star Wars 7x7 show notes and links, and to comment on any of the content of this episode! If you like what you've heard, please leave us a rating or review on iTunes or Stitcher, which will also help more people discover this Star Wars podcast.</p> <p>Don't forget to join the Star Wars 7x7 fun on Facebook at Facebook.com/SW7x7, and follow the breaking news Twitter feed at Twitter.com/SW7x7Podcast. We're also on Pinterest and Instagram as \"SW7x7\" too, and we'd love to connect with you there!</p>\n",
  "explicit_content": false,
  "id": "4d82e50314174754a3b603912448e812",
  "image": "https://cdn-images-1.listennotes.com/podcasts/exponent-ben-thompson-james-allworth-OaJSjb4xQv3.1400x1400.jpg",
  "link": "https://www.npr.org/2020/01/22/798532179/soleimanis-iran",
  "listennotes_edit_url": "https://www.listennotes.com/e/11b34041e804491b9704d11f283c74de/#edit",
  "listennotes_url": "https://www.listennotes.com/e/4d82e50314174754a3b603912448e812/",
  "maybe_audio_invalid": false,
  "podcast": {
    "audio_length_sec": 1291,
    "country": "United States",
    "description": "<p>The Star Wars 7x7 Podcast is Rebel-rousing fun for everyday Jedi, between 7 and 14 minutes a day, 7 days a week. Join host Allen Voivod for Star Wars news, history, interviews, trivia, and deep dives into the Star Wars story as told in movies, books, comics, games, cartoons, and more. Subscribe now for your daily dose of Star Wars joy. It's destiny unleashed!</p>",
    "earliest_pub_date_ms": 1470667902000,
    "email": "hello@example.com",
    "explicit_content": false,
    "extra": {
      "amazon_music_url": "https://music.amazon.com/podcasts/6fc6d683-9ef3-4850-9c35-8e8b1a42a147/the-lock-sportscast",
      "facebook_handle": "sw7x7",
      "google_url": "https://podcasts.google.com/feed/aHR0cHM6Ly9yc3MuYXJ0MTkuY29tL2pvaG4tc29sb21vbi1yZXBvcnRz",
      "instagram_handle": "sw7x7",
      "linkedin_url": "string",
      "patreon_handle": "sw7x7",
      "spotify_url": "https://open.spotify.com/show/2rQJUP9Y3HxemiW3JHt9WV",
      "twitter_handle": "SW7x7podcast",
      "url1": "string",
      "url2": "string",
      "url3": "string",
      "wechat_handle": "string",
      "youtube_url": "https://www.youtube.com/sw7x7"
    },
    "genre_ids": [
      138,
      86,
      160,
      68,
      82,
      100,
      101
    ],
    "id": "4d3fe717742d4963a85562e9f84d8c79",
    "image": "https://cdn-images-1.listennotes.com/podcasts/exponent-ben-thompson-james-allworth-OaJSjb4xQv3.1400x1400.jpg",
    "is_claimed": true,
    "itunes_id": 896354638,
    "language": "English",
    "latest_episode_id": "d057092e57cc4ced80e0efaa196593d9",
    "latest_pub_date_ms": 1557499770000,
    "listen_score": 81,
    "listen_score_global_rank": "0.5%",
    "listennotes_url": "https://www.listennotes.com/c/4d3fe717742d4963a85562e9f84d8c79/",
    "looking_for": {
      "cohosts": true,
      "cross_promotion": true,
      "guests": true,
      "sponsors": true
    },
    "publisher": "Planet Broadcasting",
    "rss": "https://sw7x7.libsyn.com/rss",
    "thumbnail": "https://cdn-images-1.listennotes.com/podcasts/exponent-ben-thompson-james-allworth-OaJSjb4xQv3.300x300.jpg",
    "title": "Star Wars 7x7 | Star Wars News, Interviews, and More!",
    "total_episodes": 324,
    "type": "episodic",
    "update_frequency_hours": 168,
    "website": "http://sw7x7.com/"
  },
  "pub_date_ms": 1474873200000,
  "thumbnail": "https://cdn-images-1.listennotes.com/podcasts/exponent-ben-thompson-james-allworth-OaJSjb4xQv3.300x300.jpg",
  "title": "Celebration Recap, Jason Fry and Christian Blauvelt Interviews – SWBW #101",
  "transcript": "00:00:07 Welcome to this podcast...\n"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|audio|[AudioField](#schemaaudiofield)|false|none|Audio url of this episode, which can be played directly.|
|audio_length_sec|[AudioLengthSecField](#schemaaudiolengthsecfield)|false|none|Audio length of this episode. In seconds.|
|description|[EpisodeDescriptionField](#schemaepisodedescriptionfield)|false|none|Html of this episode's full description|
|explicit_content|[ExplicitField](#schemaexplicitfield)|false|none|Whether this podcast contains explicit language.|
|id|[EpisodeIdField](#schemaepisodeidfield)|false|none|Episode id, which can be used to further fetch detailed episode metadata via `GET /episodes/{id}`.|
|image|[EpisodeImageField](#schemaepisodeimagefield)|false|none|Image url for this episode.<br>If an episode doesn't have its own image, then this field would be the url of the podcast artwork image.<br>If you are using PRO/ENTERPRISE plan, then it's<br>a high resolution image (1400x1400). If you are using FREE plan, then it's the same as **thumbnail**,<br>low resolution image (300x300).<br>|
|link|[LinkField](#schemalinkfield)|false|none|Web link of this episode.|
|listennotes_edit_url|[EpisodeLNEditUrlField](#schemaepisodelnediturlfield)|false|none|Edit url of this episode where you can update the audio url if you find the audio is broken.|
|listennotes_url|[EpisodeLNUrlField](#schemaepisodelnurlfield)|false|none|The url of this episode on [ListenNotes.com](https://www.ListenNotes.com).|
|maybe_audio_invalid|[MaybeAudioInvalidField](#schemamaybeaudioinvalidfield)|false|none|Whether or not this episode's audio is invalid. Podcasters may delete the original audio.|
|podcast|[PodcastSimple](#schemapodcastsimple)|false|none|none|
|pub_date_ms|[EpisodePubDateMsField](#schemaepisodepubdatemsfield)|false|none|Published date for this episode. In millisecond.|
|thumbnail|[EpisodeThumbnailField](#schemaepisodethumbnailfield)|false|none|Thumbnail image (300x300) url for this episode.<br>If an episode doesn't have its own image, then this field would be the url of the podcast artwork thumbnail image.<br>|
|title|[EpisodeNameField](#schemaepisodenamefield)|false|none|Episode name.|
|transcript|[TranscriptField](#schematranscriptfield)|false|none|The transcript of this episode, in plain text (with the newline character \n). If there's not transcript, it is null. This field is available only in the PRO/ENTERPRISE plan.|

<h2 id="tocS_EpisodeIdField">EpisodeIdField</h2>
<!-- backwards compatibility -->
<a id="schemaepisodeidfield"></a>
<a id="schema_EpisodeIdField"></a>
<a id="tocSepisodeidfield"></a>
<a id="tocsepisodeidfield"></a>

```json
"4d82e50314174754a3b603912448e812"
```

Episode id, which can be used to further fetch detailed episode metadata via `GET /episodes/{id}`.

<h2 id="tocS_EpisodeImageField">EpisodeImageField</h2>
<!-- backwards compatibility -->
<a id="schemaepisodeimagefield"></a>
<a id="schema_EpisodeImageField"></a>
<a id="tocSepisodeimagefield"></a>
<a id="tocsepisodeimagefield"></a>

```json
"https://cdn-images-1.listennotes.com/podcasts/exponent-ben-thompson-james-allworth-OaJSjb4xQv3.1400x1400.jpg"
```

Image url for this episode.
If an episode doesn't have its own image, then this field would be the url of the podcast artwork image.
If you are using PRO/ENTERPRISE plan, then it's
a high resolution image (1400x1400). If you are using FREE plan, then it's the same as **thumbnail**,
low resolution image (300x300).

<h2 id="tocS_EpisodeLNEditUrlField">EpisodeLNEditUrlField</h2>
<!-- backwards compatibility -->
<a id="schemaepisodelnediturlfield"></a>
<a id="schema_EpisodeLNEditUrlField"></a>
<a id="tocSepisodelnediturlfield"></a>
<a id="tocsepisodelnediturlfield"></a>

```json
"https://www.listennotes.com/e/11b34041e804491b9704d11f283c74de/#edit"
```

Edit url of this episode where you can update the audio url if you find the audio is broken.

<h2 id="tocS_EpisodeLNUrlField">EpisodeLNUrlField</h2>
<!-- backwards compatibility -->
<a id="schemaepisodelnurlfield"></a>
<a id="schema_EpisodeLNUrlField"></a>
<a id="tocSepisodelnurlfield"></a>
<a id="tocsepisodelnurlfield"></a>

```json
"https://www.listennotes.com/e/4d82e50314174754a3b603912448e812/"
```

The url of this episode on [ListenNotes.com](https://www.ListenNotes.com).

<h2 id="tocS_EpisodeMinimum">EpisodeMinimum</h2>
<!-- backwards compatibility -->
<a id="schemaepisodeminimum"></a>
<a id="schema_EpisodeMinimum"></a>
<a id="tocSepisodeminimum"></a>
<a id="tocsepisodeminimum"></a>

```json
{
  "audio": "https://www.listennotes.com/e/p/11b34041e804491b9704d11f283c74de/",
  "audio_length_sec": 567,
  "description": "<p>Disney chief Bob Iger shared news about Star Wars movies in 2020 and beyond, but some media outlets gave conflicting reports about it. Here's the real scoop. Punch it!</p> <p>***We’re listener supported! Go to http://Patreon.com/sw7x7 to donate to the Star Wars 7x7 podcast, and you’ll get some fabulous rewards for your pledge.*** </p> <p>Check out SW7x7.com for full Star Wars 7x7 show notes and links, and to comment on any of the content of this episode! If you like what you've heard, please leave us a rating or review on iTunes or Stitcher, which will also help more people discover this Star Wars podcast.</p> <p>Don't forget to join the Star Wars 7x7 fun on Facebook at Facebook.com/SW7x7, and follow the breaking news Twitter feed at Twitter.com/SW7x7Podcast. We're also on Pinterest and Instagram as \"SW7x7\" too, and we'd love to connect with you there!</p>\n",
  "explicit_content": false,
  "id": "4d82e50314174754a3b603912448e812",
  "image": "https://cdn-images-1.listennotes.com/podcasts/exponent-ben-thompson-james-allworth-OaJSjb4xQv3.1400x1400.jpg",
  "link": "https://www.npr.org/2020/01/22/798532179/soleimanis-iran",
  "listennotes_edit_url": "https://www.listennotes.com/e/11b34041e804491b9704d11f283c74de/#edit",
  "listennotes_url": "https://www.listennotes.com/e/4d82e50314174754a3b603912448e812/",
  "maybe_audio_invalid": false,
  "pub_date_ms": 1474873200000,
  "thumbnail": "https://cdn-images-1.listennotes.com/podcasts/exponent-ben-thompson-james-allworth-OaJSjb4xQv3.300x300.jpg",
  "title": "Celebration Recap, Jason Fry and Christian Blauvelt Interviews – SWBW #101"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|audio|[AudioField](#schemaaudiofield)|false|none|Audio url of this episode, which can be played directly.|
|audio_length_sec|[AudioLengthSecField](#schemaaudiolengthsecfield)|false|none|Audio length of this episode. In seconds.|
|description|[EpisodeDescriptionField](#schemaepisodedescriptionfield)|false|none|Html of this episode's full description|
|explicit_content|[ExplicitField](#schemaexplicitfield)|false|none|Whether this podcast contains explicit language.|
|id|[EpisodeIdField](#schemaepisodeidfield)|false|none|Episode id, which can be used to further fetch detailed episode metadata via `GET /episodes/{id}`.|
|image|[ImageField](#schemaimagefield)|false|none|Image url for this podcast's artwork. If you are using PRO/ENTERPRISE plan, then it's<br>a high resolution image (1400x1400). If you are using FREE plan, then it's the same as **thumbnail**,<br>low resolution image (300x300).<br>|
|link|[LinkField](#schemalinkfield)|false|none|Web link of this episode.|
|listennotes_edit_url|[EpisodeLNEditUrlField](#schemaepisodelnediturlfield)|false|none|Edit url of this episode where you can update the audio url if you find the audio is broken.|
|listennotes_url|[EpisodeLNUrlField](#schemaepisodelnurlfield)|false|none|The url of this episode on [ListenNotes.com](https://www.ListenNotes.com).|
|maybe_audio_invalid|[MaybeAudioInvalidField](#schemamaybeaudioinvalidfield)|false|none|Whether or not this episode's audio is invalid. Podcasters may delete the original audio.|
|pub_date_ms|[EpisodePubDateMsField](#schemaepisodepubdatemsfield)|false|none|Published date for this episode. In millisecond.|
|thumbnail|[ThumbnailField](#schemathumbnailfield)|false|none|Thumbnail image url for this podcast's artwork (300x300).|
|title|[EpisodeNameField](#schemaepisodenamefield)|false|none|Episode name.|

<h2 id="tocS_EpisodeNameField">EpisodeNameField</h2>
<!-- backwards compatibility -->
<a id="schemaepisodenamefield"></a>
<a id="schema_EpisodeNameField"></a>
<a id="tocSepisodenamefield"></a>
<a id="tocsepisodenamefield"></a>

```json
"Celebration Recap, Jason Fry and Christian Blauvelt Interviews – SWBW #101"
```

Episode name.

<h2 id="tocS_EpisodePubDateMsField">EpisodePubDateMsField</h2>
<!-- backwards compatibility -->
<a id="schemaepisodepubdatemsfield"></a>
<a id="schema_EpisodePubDateMsField"></a>
<a id="tocSepisodepubdatemsfield"></a>
<a id="tocsepisodepubdatemsfield"></a>

```json
1474873200000
```

Published date for this episode. In millisecond.

<h2 id="tocS_EpisodeSearchResult">EpisodeSearchResult</h2>
<!-- backwards compatibility -->
<a id="schemaepisodesearchresult"></a>
<a id="schema_EpisodeSearchResult"></a>
<a id="tocSepisodesearchresult"></a>
<a id="tocsepisodesearchresult"></a>

```json
{
  "audio": "https://www.listennotes.com/e/p/11b34041e804491b9704d11f283c74de/",
  "audio_length_sec": 567,
  "description_highlighted": "...Go to http://Patreon.com/sw7x7 to donate to the <span class=\"ln-search-highlight\">Star</span> <span class=\"ln-search-highlight\">Wars</span> 7x7 podcast, and you'll get some fabulous rewards for your pledge.***  Check out SW7x7.com for full <span class=\"ln-search-highlight\">Star</span> <span class=\"ln-search-highlight\">Wars</span> 7x7 show notes and links, and to\n",
  "description_original": "Yeah, Star Wars Celebration Orlando is 32 days away, but what's the scoop on Celebration 2018? Plus, Rebels Day is Saturday, and much more in our update. Punch it! ***We're listener supported! Go to http://Patreon.com/sw7x7 to donate to the Star Wars 7x7 podcast, and youâ€™ll get some fabulous rewards for your pledge.***  Check out SW7x7.com for full Star Wars 7x7 show notes and links, and to comment on any of the content of this episode! If you like what you've heard, please leave us a rating or review on iTunes or Stitcher, which will also help more people discover this Star Wars podcast. Don't forget to join the Star Wars 7x7 fun on Facebook at Facebook.com/SW7x7, and follow the breaking news Twitter feed at Twitter.com/SW7x7Podcast. We're also on Pinterest and Instagram as \"SW7x7\" too, and we'd love to connect with you there!\n",
  "explicit_content": false,
  "id": "4d82e50314174754a3b603912448e812",
  "image": "https://cdn-images-1.listennotes.com/podcasts/exponent-ben-thompson-james-allworth-OaJSjb4xQv3.1400x1400.jpg",
  "itunes_id": 896354638,
  "link": "https://www.npr.org/2020/01/22/798532179/soleimanis-iran",
  "listennotes_url": "https://www.listennotes.com/e/4d82e50314174754a3b603912448e812/",
  "podcast": {
    "genre_ids": [
      138,
      86,
      160,
      68,
      82,
      100,
      101
    ],
    "id": "4d3fe717742d4963a85562e9f84d8c79",
    "image": "https://cdn-images-1.listennotes.com/podcasts/exponent-ben-thompson-james-allworth-OaJSjb4xQv3.1400x1400.jpg",
    "listen_score": 81,
    "listen_score_global_rank": "0.5%",
    "listennotes_url": "https://www.listennotes.com/c/4d3fe717742d4963a85562e9f84d8c79/",
    "publisher_highlighted": "<span class=\\\"ln-search-highlight\\\">Star</span> <span class=\\\"ln-search-highlight\\\">Wars</span> Daily, by Allen Voivod",
    "publisher_original": "Star Wars Daily, by Allen Voivod",
    "thumbnail": "https://cdn-images-1.listennotes.com/podcasts/exponent-ben-thompson-james-allworth-OaJSjb4xQv3.300x300.jpg",
    "title_highlighted": "<span class=\\\"ln-search-highlight\\\">Star</span> <span class=\\\"ln-search-highlight\\\">Wars</span> 7x7 | <span class=\\\"ln-search-highlight\\\">Star</span> <span class=\\\"ln-search-highlight\\\">Wars</span> News, Interviews, and More!",
    "title_original": "Star Wars 7x7 | Star Wars News, Interviews, and More!"
  },
  "pub_date_ms": 1474873200000,
  "rss": "https://sw7x7.libsyn.com/rss",
  "thumbnail": "https://cdn-images-1.listennotes.com/podcasts/exponent-ben-thompson-james-allworth-OaJSjb4xQv3.300x300.jpg",
  "title_highlighted": "815: <span class=\"ln-search-highlight\">Star</span> <span class=\"ln-search-highlight\">Wars</span> 2020 Movie and Beyond!",
  "title_original": "815: Star Wars 2020 Movie and Beyond!",
  "transcripts_highlighted": [
    "00:21:27  when Disney bought the <span class=\"ln-search-highlight\">Star</span> <span class=\"ln-search-highlight\">Wars</span> franchise from George Lucas they had a plan lots of <span class=\"ln-search-highlight\">Star</span> <span class=\"ln-search-highlight\">Wars</span> movies new <span class=\"ln-search-highlight\">Star</span> <span class=\"ln-search-highlight\">Wars</span> movies every month another one was just released while I was talking\n"
  ]
}
```

When **type** is *episode*.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|audio|[AudioField](#schemaaudiofield)|false|none|Audio url of this episode, which can be played directly.|
|audio_length_sec|[AudioLengthSecField](#schemaaudiolengthsecfield)|false|none|Audio length of this episode. In seconds.|
|description_highlighted|string|false|none|Highlighted segment of this episode's description|
|description_original|string|false|none|Plain text of this episode's description|
|explicit_content|[ExplicitField](#schemaexplicitfield)|false|none|Whether this podcast contains explicit language.|
|id|[EpisodeIdField](#schemaepisodeidfield)|false|none|Episode id, which can be used to further fetch detailed episode metadata via `GET /episodes/{id}`.|
|image|[EpisodeImageField](#schemaepisodeimagefield)|false|none|Image url for this episode.<br>If an episode doesn't have its own image, then this field would be the url of the podcast artwork image.<br>If you are using PRO/ENTERPRISE plan, then it's<br>a high resolution image (1400x1400). If you are using FREE plan, then it's the same as **thumbnail**,<br>low resolution image (300x300).<br>|
|itunes_id|[iTunesIdField](#schemaitunesidfield)|false|none|iTunes id for this podcast.|
|link|[LinkField](#schemalinkfield)|false|none|Web link of this episode.|
|listennotes_url|[EpisodeLNUrlField](#schemaepisodelnurlfield)|false|none|The url of this episode on [ListenNotes.com](https://www.ListenNotes.com).|
|podcast|object|false|none|The podcast that this episode belongs to.|
|pub_date_ms|[EpisodePubDateMsField](#schemaepisodepubdatemsfield)|false|none|Published date for this episode. In millisecond.|
|rss|[RssField](#schemarssfield)|false|none|RSS url of this podcast. This field is available only in the PRO/ENTERPRISE plan.|
|thumbnail|[EpisodeThumbnailField](#schemaepisodethumbnailfield)|false|none|Thumbnail image (300x300) url for this episode.<br>If an episode doesn't have its own image, then this field would be the url of the podcast artwork thumbnail image.<br>|
|title_highlighted|string|false|none|Highlighted segment of this episode's title|
|title_original|string|false|none|Plain text of this episode' title|
|transcripts_highlighted|[string]|false|none|Up to 2 highlighted segments of the audio transcript of this episode.|

<h2 id="tocS_EpisodeSimple">EpisodeSimple</h2>
<!-- backwards compatibility -->
<a id="schemaepisodesimple"></a>
<a id="schema_EpisodeSimple"></a>
<a id="tocSepisodesimple"></a>
<a id="tocsepisodesimple"></a>

```json
{
  "audio": "https://www.listennotes.com/e/p/11b34041e804491b9704d11f283c74de/",
  "audio_length_sec": 567,
  "description": "<p>Disney chief Bob Iger shared news about Star Wars movies in 2020 and beyond, but some media outlets gave conflicting reports about it. Here's the real scoop. Punch it!</p> <p>***We’re listener supported! Go to http://Patreon.com/sw7x7 to donate to the Star Wars 7x7 podcast, and you’ll get some fabulous rewards for your pledge.*** </p> <p>Check out SW7x7.com for full Star Wars 7x7 show notes and links, and to comment on any of the content of this episode! If you like what you've heard, please leave us a rating or review on iTunes or Stitcher, which will also help more people discover this Star Wars podcast.</p> <p>Don't forget to join the Star Wars 7x7 fun on Facebook at Facebook.com/SW7x7, and follow the breaking news Twitter feed at Twitter.com/SW7x7Podcast. We're also on Pinterest and Instagram as \"SW7x7\" too, and we'd love to connect with you there!</p>\n",
  "explicit_content": false,
  "id": "4d82e50314174754a3b603912448e812",
  "image": "https://cdn-images-1.listennotes.com/podcasts/exponent-ben-thompson-james-allworth-OaJSjb4xQv3.1400x1400.jpg",
  "link": "https://www.npr.org/2020/01/22/798532179/soleimanis-iran",
  "listennotes_edit_url": "https://www.listennotes.com/e/11b34041e804491b9704d11f283c74de/#edit",
  "listennotes_url": "https://www.listennotes.com/e/4d82e50314174754a3b603912448e812/",
  "maybe_audio_invalid": false,
  "podcast": {
    "id": "4d3fe717742d4963a85562e9f84d8c79",
    "image": "https://cdn-images-1.listennotes.com/podcasts/exponent-ben-thompson-james-allworth-OaJSjb4xQv3.1400x1400.jpg",
    "listen_score": 81,
    "listen_score_global_rank": "0.5%",
    "listennotes_url": "https://www.listennotes.com/c/4d3fe717742d4963a85562e9f84d8c79/",
    "publisher": "Planet Broadcasting",
    "thumbnail": "https://cdn-images-1.listennotes.com/podcasts/exponent-ben-thompson-james-allworth-OaJSjb4xQv3.300x300.jpg",
    "title": "Star Wars 7x7 | Star Wars News, Interviews, and More!"
  },
  "pub_date_ms": 1474873200000,
  "thumbnail": "https://cdn-images-1.listennotes.com/podcasts/exponent-ben-thompson-james-allworth-OaJSjb4xQv3.300x300.jpg",
  "title": "Celebration Recap, Jason Fry and Christian Blauvelt Interviews – SWBW #101"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|audio|[AudioField](#schemaaudiofield)|false|none|Audio url of this episode, which can be played directly.|
|audio_length_sec|[AudioLengthSecField](#schemaaudiolengthsecfield)|false|none|Audio length of this episode. In seconds.|
|description|[EpisodeDescriptionField](#schemaepisodedescriptionfield)|false|none|Html of this episode's full description|
|explicit_content|[ExplicitField](#schemaexplicitfield)|false|none|Whether this podcast contains explicit language.|
|id|[EpisodeIdField](#schemaepisodeidfield)|false|none|Episode id, which can be used to further fetch detailed episode metadata via `GET /episodes/{id}`.|
|image|[EpisodeImageField](#schemaepisodeimagefield)|false|none|Image url for this episode.<br>If an episode doesn't have its own image, then this field would be the url of the podcast artwork image.<br>If you are using PRO/ENTERPRISE plan, then it's<br>a high resolution image (1400x1400). If you are using FREE plan, then it's the same as **thumbnail**,<br>low resolution image (300x300).<br>|
|link|[LinkField](#schemalinkfield)|false|none|Web link of this episode.|
|listennotes_edit_url|[EpisodeLNEditUrlField](#schemaepisodelnediturlfield)|false|none|Edit url of this episode where you can update the audio url if you find the audio is broken.|
|listennotes_url|[EpisodeLNUrlField](#schemaepisodelnurlfield)|false|none|The url of this episode on [ListenNotes.com](https://www.ListenNotes.com).|
|maybe_audio_invalid|[MaybeAudioInvalidField](#schemamaybeaudioinvalidfield)|false|none|Whether or not this episode's audio is invalid. Podcasters may delete the original audio.|
|podcast|[PodcastMinimum](#schemapodcastminimum)|false|none|none|
|pub_date_ms|[EpisodePubDateMsField](#schemaepisodepubdatemsfield)|false|none|Published date for this episode. In millisecond.|
|thumbnail|[EpisodeThumbnailField](#schemaepisodethumbnailfield)|false|none|Thumbnail image (300x300) url for this episode.<br>If an episode doesn't have its own image, then this field would be the url of the podcast artwork thumbnail image.<br>|
|title|[EpisodeNameField](#schemaepisodenamefield)|false|none|Episode name.|

<h2 id="tocS_EpisodeThumbnailField">EpisodeThumbnailField</h2>
<!-- backwards compatibility -->
<a id="schemaepisodethumbnailfield"></a>
<a id="schema_EpisodeThumbnailField"></a>
<a id="tocSepisodethumbnailfield"></a>
<a id="tocsepisodethumbnailfield"></a>

```json
"https://cdn-images-1.listennotes.com/podcasts/exponent-ben-thompson-james-allworth-OaJSjb4xQv3.300x300.jpg"
```

Thumbnail image (300x300) url for this episode.
If an episode doesn't have its own image, then this field would be the url of the podcast artwork thumbnail image.

<h2 id="tocS_ExplicitField">ExplicitField</h2>
<!-- backwards compatibility -->
<a id="schemaexplicitfield"></a>
<a id="schema_ExplicitField"></a>
<a id="tocSexplicitfield"></a>
<a id="tocsexplicitfield"></a>

```json
false
```

Whether this podcast contains explicit language.

<h2 id="tocS_Genre">Genre</h2>
<!-- backwards compatibility -->
<a id="schemagenre"></a>
<a id="schema_Genre"></a>
<a id="tocSgenre"></a>
<a id="tocsgenre"></a>

```json
{
  "id": 140,
  "name": "Web Design",
  "parent_id": 127
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|none|Genre id|
|name|string|false|none|Genre name.|
|parent_id|integer|false|none|Parent genre id.|

<h2 id="tocS_GenreIdsField">GenreIdsField</h2>
<!-- backwards compatibility -->
<a id="schemagenreidsfield"></a>
<a id="schema_GenreIdsField"></a>
<a id="tocSgenreidsfield"></a>
<a id="tocsgenreidsfield"></a>

```json
[
  138,
  86,
  160,
  68,
  82,
  100,
  101
]
```

<h2 id="tocS_GetCuratedPodcastsResponse">GetCuratedPodcastsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetcuratedpodcastsresponse"></a>
<a id="schema_GetCuratedPodcastsResponse"></a>
<a id="tocSgetcuratedpodcastsresponse"></a>
<a id="tocsgetcuratedpodcastsresponse"></a>

```json
{
  "curated_lists": [
    {
      "description": "Commuting to work is always better when you have a great new podcast to listen to, and this year, we have discovered some of our favorite podcasts yet for readers and book-lovers. These podcasts for readers entertain us and provide no shortage of new book recommendations too.",
      "id": "Vb017Sx3l8F",
      "listennotes_url": "https://www.listennotes.com/curated-podcasts/7-bookish-podcasts-for-avid-readers-on-H2r-TCWai8K/",
      "podcasts": [
        {
          "id": "4d3fe717742d4963a85562e9f84d8c79",
          "image": "https://cdn-images-1.listennotes.com/podcasts/exponent-ben-thompson-james-allworth-OaJSjb4xQv3.1400x1400.jpg",
          "listen_score": 81,
          "listen_score_global_rank": "0.5%",
          "listennotes_url": "https://www.listennotes.com/c/4d3fe717742d4963a85562e9f84d8c79/",
          "publisher": "Planet Broadcasting",
          "thumbnail": "https://cdn-images-1.listennotes.com/podcasts/exponent-ben-thompson-james-allworth-OaJSjb4xQv3.300x300.jpg",
          "title": "Star Wars 7x7 | Star Wars News, Interviews, and More!"
        }
      ],
      "pub_date_ms": 1556843484301,
      "source_domain": "parade.com",
      "source_url": "https://parade.com/718913/ashley_johnson/7-bookish-podcasts-for-avid-readers-on-the-go/",
      "title": "7 Bookish Podcasts for Avid Readers On the Go",
      "total": 25
    }
  ],
  "has_next": true,
  "has_previous": true,
  "next_page_number": 3,
  "page_number": 2,
  "previous_page_number": 1,
  "total": 25
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|curated_lists|[[CuratedListSimple](#schemacuratedlistsimple)]|true|none|none|
|has_next|boolean|true|none|none|
|has_previous|boolean|true|none|none|
|next_page_number|integer|true|none|none|
|page_number|integer|true|none|none|
|previous_page_number|integer|true|none|none|
|total|integer|true|none|none|

<h2 id="tocS_GetEpisodeRecommendationsResponse">GetEpisodeRecommendationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetepisoderecommendationsresponse"></a>
<a id="schema_GetEpisodeRecommendationsResponse"></a>
<a id="tocSgetepisoderecommendationsresponse"></a>
<a id="tocsgetepisoderecommendationsresponse"></a>

```json
{
  "recommendations": [
    {
      "audio": "https://www.listennotes.com/e/p/11b34041e804491b9704d11f283c74de/",
      "audio_length_sec": 567,
      "description": "<p>Disney chief Bob Iger shared news about Star Wars movies in 2020 and beyond, but some media outlets gave conflicting reports about it. Here's the real scoop. Punch it!</p> <p>***We’re listener supported! Go to http://Patreon.com/sw7x7 to donate to the Star Wars 7x7 podcast, and you’ll get some fabulous rewards for your pledge.*** </p> <p>Check out SW7x7.com for full Star Wars 7x7 show notes and links, and to comment on any of the content of this episode! If you like what you've heard, please leave us a rating or review on iTunes or Stitcher, which will also help more people discover this Star Wars podcast.</p> <p>Don't forget to join the Star Wars 7x7 fun on Facebook at Facebook.com/SW7x7, and follow the breaking news Twitter feed at Twitter.com/SW7x7Podcast. We're also on Pinterest and Instagram as \"SW7x7\" too, and we'd love to connect with you there!</p>\n",
      "explicit_content": false,
      "id": "4d82e50314174754a3b603912448e812",
      "image": "https://cdn-images-1.listennotes.com/podcasts/exponent-ben-thompson-james-allworth-OaJSjb4xQv3.1400x1400.jpg",
      "link": "https://www.npr.org/2020/01/22/798532179/soleimanis-iran",
      "listennotes_edit_url": "https://www.listennotes.com/e/11b34041e804491b9704d11f283c74de/#edit",
      "listennotes_url": "https://www.listennotes.com/e/4d82e50314174754a3b603912448e812/",
      "maybe_audio_invalid": false,
      "podcast": {
        "id": "4d3fe717742d4963a85562e9f84d8c79",
        "image": "https://cdn-images-1.listennotes.com/podcasts/exponent-ben-thompson-james-allworth-OaJSjb4xQv3.1400x1400.jpg",
        "listen_score": 81,
        "listen_score_global_rank": "0.5%",
        "listennotes_url": "https://www.listennotes.com/c/4d3fe717742d4963a85562e9f84d8c79/",
        "publisher": "Planet Broadcasting",
        "thumbnail": "https://cdn-images-1.listennotes.com/podcasts/exponent-ben-thompson-james-allworth-OaJSjb4xQv3.300x300.jpg",
        "title": "Star Wars 7x7 | Star Wars News, Interviews, and More!"
      },
      "pub_date_ms": 1474873200000,
      "thumbnail": "https://cdn-images-1.listennotes.com/podcasts/exponent-ben-thompson-james-allworth-OaJSjb4xQv3.300x300.jpg",
      "title": "Celebration Recap, Jason Fry and Christian Blauvelt Interviews – SWBW #101"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|recommendations|[[EpisodeSimple](#schemaepisodesimple)]|true|none|none|

<h2 id="tocS_GetEpisodesInBatchForm">GetEpisodesInBatchForm</h2>
<!-- backwards compatibility -->
<a id="schemagetepisodesinbatchform"></a>
<a id="schema_GetEpisodesInBatchForm"></a>
<a id="tocSgetepisodesinbatchform"></a>
<a id="tocsgetepisodesinbatchform"></a>

```json
{
  "ids": "c577d55b2b2b483c969fae3ceb58e362,0f34a9099579490993eec9e8c8cebb82"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ids|string|true|none|Comma-separated list of episode ids.|

<h2 id="tocS_GetEpisodesInBatchResponse">GetEpisodesInBatchResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetepisodesinbatchresponse"></a>
<a id="schema_GetEpisodesInBatchResponse"></a>
<a id="tocSgetepisodesinbatchresponse"></a>
<a id="tocsgetepisodesinbatchresponse"></a>

```json
{
  "episodes": [
    {
      "audio": "https://www.listennotes.com/e/p/11b34041e804491b9704d11f283c74de/",
      "audio_length_sec": 567,
      "description": "<p>Disney chief Bob Iger shared news about Star Wars movies in 2020 and beyond, but some media outlets gave conflicting reports about it. Here's the real scoop. Punch it!</p> <p>***We’re listener supported! Go to http://Patreon.com/sw7x7 to donate to the Star Wars 7x7 podcast, and you’ll get some fabulous rewards for your pledge.*** </p> <p>Check out SW7x7.com for full Star Wars 7x7 show notes and links, and to comment on any of the content of this episode! If you like what you've heard, please leave us a rating or review on iTunes or Stitcher, which will also help more people discover this Star Wars podcast.</p> <p>Don't forget to join the Star Wars 7x7 fun on Facebook at Facebook.com/SW7x7, and follow the breaking news Twitter feed at Twitter.com/SW7x7Podcast. We're also on Pinterest and Instagram as \"SW7x7\" too, and we'd love to connect with you there!</p>\n",
      "explicit_content": false,
      "id": "4d82e50314174754a3b603912448e812",
      "image": "https://cdn-images-1.listennotes.com/podcasts/exponent-ben-thompson-james-allworth-OaJSjb4xQv3.1400x1400.jpg",
      "link": "https://www.npr.org/2020/01/22/798532179/soleimanis-iran",
      "listennotes_edit_url": "https://www.listennotes.com/e/11b34041e804491b9704d11f283c74de/#edit",
      "listennotes_url": "https://www.listennotes.com/e/4d82e50314174754a3b603912448e812/",
      "maybe_audio_invalid": false,
      "podcast": {
        "id": "4d3fe717742d4963a85562e9f84d8c79",
        "image": "https://cdn-images-1.listennotes.com/podcasts/exponent-ben-thompson-james-allworth-OaJSjb4xQv3.1400x1400.jpg",
        "listen_score": 81,
        "listen_score_global_rank": "0.5%",
        "listennotes_url": "https://www.listennotes.com/c/4d3fe717742d4963a85562e9f84d8c79/",
        "publisher": "Planet Broadcasting",
        "thumbnail": "https://cdn-images-1.listennotes.com/podcasts/exponent-ben-thompson-james-allworth-OaJSjb4xQv3.300x300.jpg",
        "title": "Star Wars 7x7 | Star Wars News, Interviews, and More!"
      },
      "pub_date_ms": 1474873200000,
      "thumbnail": "https://cdn-images-1.listennotes.com/podcasts/exponent-ben-thompson-james-allworth-OaJSjb4xQv3.300x300.jpg",
      "title": "Celebration Recap, Jason Fry and Christian Blauvelt Interviews – SWBW #101"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|episodes|[[EpisodeSimple](#schemaepisodesimple)]|true|none|none|

<h2 id="tocS_GetGenresResponse">GetGenresResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetgenresresponse"></a>
<a id="schema_GetGenresResponse"></a>
<a id="tocSgetgenresresponse"></a>
<a id="tocsgetgenresresponse"></a>

```json
{
  "genres": [
    {
      "id": 140,
      "name": "Web Design",
      "parent_id": 127
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|genres|[[Genre](#schemagenre)]|true|none|none|

<h2 id="tocS_GetLanguagesResponse">GetLanguagesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetlanguagesresponse"></a>
<a id="schema_GetLanguagesResponse"></a>
<a id="tocSgetlanguagesresponse"></a>
<a id="tocsgetlanguagesresponse"></a>

```json
{
  "languages": [
    "Any language",
    "Afar",
    "Abkhazian",
    "Afrikaans",
    "Akan",
    "Albanian",
    "Arabic",
    "Azerbaijani",
    "Bambara",
    "Bashkir",
    "Basque",
    "Belarusian",
    "Bulgarian",
    "Catalan",
    "Chamorro",
    "Chinese",
    "Croatian",
    "Czech",
    "Danish",
    "Dutch",
    "English",
    "Estonian",
    "Faeroese",
    "Finnish",
    "French",
    "Gaelic",
    "Galician",
    "German",
    "Greek"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|languages|[string]|true|none|none|

<h2 id="tocS_GetPodcastRecommendationsResponse">GetPodcastRecommendationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetpodcastrecommendationsresponse"></a>
<a id="schema_GetPodcastRecommendationsResponse"></a>
<a id="tocSgetpodcastrecommendationsresponse"></a>
<a id="tocsgetpodcastrecommendationsresponse"></a>

```json
{
  "recommendations": [
    {
      "audio_length_sec": 1291,
      "country": "United States",
      "description": "<p>The Star Wars 7x7 Podcast is Rebel-rousing fun for everyday Jedi, between 7 and 14 minutes a day, 7 days a week. Join host Allen Voivod for Star Wars news, history, interviews, trivia, and deep dives into the Star Wars story as told in movies, books, comics, games, cartoons, and more. Subscribe now for your daily dose of Star Wars joy. It's destiny unleashed!</p>",
      "earliest_pub_date_ms": 1470667902000,
      "email": "hello@example.com",
      "explicit_content": false,
      "extra": {
        "amazon_music_url": "https://music.amazon.com/podcasts/6fc6d683-9ef3-4850-9c35-8e8b1a42a147/the-lock-sportscast",
        "facebook_handle": "sw7x7",
        "google_url": "https://podcasts.google.com/feed/aHR0cHM6Ly9yc3MuYXJ0MTkuY29tL2pvaG4tc29sb21vbi1yZXBvcnRz",
        "instagram_handle": "sw7x7",
        "linkedin_url": "string",
        "patreon_handle": "sw7x7",
        "spotify_url": "https://open.spotify.com/show/2rQJUP9Y3HxemiW3JHt9WV",
        "twitter_handle": "SW7x7podcast",
        "url1": "string",
        "url2": "string",
        "url3": "string",
        "wechat_handle": "string",
        "youtube_url": "https://www.youtube.com/sw7x7"
      },
      "genre_ids": [
        138,
        86,
        160,
        68,
        82,
        100,
        101
      ],
      "id": "4d3fe717742d4963a85562e9f84d8c79",
      "image": "https://cdn-images-1.listennotes.com/podcasts/exponent-ben-thompson-james-allworth-OaJSjb4xQv3.1400x1400.jpg",
      "is_claimed": true,
      "itunes_id": 896354638,
      "language": "English",
      "latest_episode_id": "d057092e57cc4ced80e0efaa196593d9",
      "latest_pub_date_ms": 1557499770000,
      "listen_score": 81,
      "listen_score_global_rank": "0.5%",
      "listennotes_url": "https://www.listennotes.com/c/4d3fe717742d4963a85562e9f84d8c79/",
      "looking_for": {
        "cohosts": true,
        "cross_promotion": true,
        "guests": true,
        "sponsors": true
      },
      "publisher": "Planet Broadcasting",
      "rss": "https://sw7x7.libsyn.com/rss",
      "thumbnail": "https://cdn-images-1.listennotes.com/podcasts/exponent-ben-thompson-james-allworth-OaJSjb4xQv3.300x300.jpg",
      "title": "Star Wars 7x7 | Star Wars News, Interviews, and More!",
      "total_episodes": 324,
      "type": "episodic",
      "update_frequency_hours": 168,
      "website": "http://sw7x7.com/"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|recommendations|[[PodcastSimple](#schemapodcastsimple)]|true|none|none|

<h2 id="tocS_GetPodcastsInBatchForm">GetPodcastsInBatchForm</h2>
<!-- backwards compatibility -->
<a id="schemagetpodcastsinbatchform"></a>
<a id="schema_GetPodcastsInBatchForm"></a>
<a id="tocSgetpodcastsinbatchform"></a>
<a id="tocsgetpodcastsinbatchform"></a>

```json
{
  "ids": "3302bc71139541baa46ecb27dbf6071a,68faf62be97149c280ebcc25178aa731,37589a3e121e40debe4cef3d9638932a,9cf19c590ff0484d97b18b329fed0c6a",
  "itunes_ids": "1457514703,1386234384,659155419",
  "next_episode_pub_date": 1557394247000,
  "rsses": "https://rss.art19.com/recode-decode,https://rss.art19.com/the-daily,https://www.npr.org/rss/podcast.php?id=510331,https://www.npr.org/rss/podcast.php?id=510331",
  "show_latest_episodes": 1,
  "spotify_ids": "3DDfEsKDIDrTlnPOiG4ZF4,4qDNe5Gvl1XxdLinUGEXrC,23NZCM4ik6o3UYkM473Itz"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ids|string|false|none|Comma-separated list of podcast ids.|
|itunes_ids|string|false|none|Comma-separated Apple Podcasts (iTunes) ids, e.g., 659155419|
|next_episode_pub_date|integer|false|none|For latest episodes pagination. It's the value of **next_episode_pub_date** from the response of last request. If not specified, just return latest 15 episodes.<br>|
|rsses|string|false|none|Comma-separated rss urls.|
|show_latest_episodes|integer|false|none|Whether or not to fetch up to 15 latest episodes from these podcasts, sorted by pub_date. 1 is yes, and 0 is no.<br>|
|spotify_ids|string|false|none|Comma-separated Spotify ids, e.g., 3DDfEsKDIDrTlnPOiG4ZF4|

#### Enumerated Values

|Property|Value|
|---|---|
|show_latest_episodes|0|
|show_latest_episodes|1|

<h2 id="tocS_GetPodcastsInBatchResponse">GetPodcastsInBatchResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetpodcastsinbatchresponse"></a>
<a id="schema_GetPodcastsInBatchResponse"></a>
<a id="tocSgetpodcastsinbatchresponse"></a>
<a id="tocsgetpodcastsinbatchresponse"></a>

```json
{
  "latest_episodes": [
    {
      "audio": "https://www.listennotes.com/e/p/11b34041e804491b9704d11f283c74de/",
      "audio_length_sec": 567,
      "description": "<p>Disney chief Bob Iger shared news about Star Wars movies in 2020 and beyond, but some media outlets gave conflicting reports about it. Here's the real scoop. Punch it!</p> <p>***We’re listener supported! Go to http://Patreon.com/sw7x7 to donate to the Star Wars 7x7 podcast, and you’ll get some fabulous rewards for your pledge.*** </p> <p>Check out SW7x7.com for full Star Wars 7x7 show notes and links, and to comment on any of the content of this episode! If you like what you've heard, please leave us a rating or review on iTunes or Stitcher, which will also help more people discover this Star Wars podcast.</p> <p>Don't forget to join the Star Wars 7x7 fun on Facebook at Facebook.com/SW7x7, and follow the breaking news Twitter feed at Twitter.com/SW7x7Podcast. We're also on Pinterest and Instagram as \"SW7x7\" too, and we'd love to connect with you there!</p>\n",
      "explicit_content": false,
      "id": "4d82e50314174754a3b603912448e812",
      "image": "https://cdn-images-1.listennotes.com/podcasts/exponent-ben-thompson-james-allworth-OaJSjb4xQv3.1400x1400.jpg",
      "link": "https://www.npr.org/2020/01/22/798532179/soleimanis-iran",
      "listennotes_edit_url": "https://www.listennotes.com/e/11b34041e804491b9704d11f283c74de/#edit",
      "listennotes_url": "https://www.listennotes.com/e/4d82e50314174754a3b603912448e812/",
      "maybe_audio_invalid": false,
      "podcast": {
        "id": "4d3fe717742d4963a85562e9f84d8c79",
        "image": "https://cdn-images-1.listennotes.com/podcasts/exponent-ben-thompson-james-allworth-OaJSjb4xQv3.1400x1400.jpg",
        "listen_score": 81,
        "listen_score_global_rank": "0.5%",
        "listennotes_url": "https://www.listennotes.com/c/4d3fe717742d4963a85562e9f84d8c79/",
        "publisher": "Planet Broadcasting",
        "thumbnail": "https://cdn-images-1.listennotes.com/podcasts/exponent-ben-thompson-james-allworth-OaJSjb4xQv3.300x300.jpg",
        "title": "Star Wars 7x7 | Star Wars News, Interviews, and More!"
      },
      "pub_date_ms": 1474873200000,
      "thumbnail": "https://cdn-images-1.listennotes.com/podcasts/exponent-ben-thompson-james-allworth-OaJSjb4xQv3.300x300.jpg",
      "title": "Celebration Recap, Jason Fry and Christian Blauvelt Interviews – SWBW #101"
    }
  ],
  "podcasts": [
    {
      "audio_length_sec": 1291,
      "country": "United States",
      "description": "<p>The Star Wars 7x7 Podcast is Rebel-rousing fun for everyday Jedi, between 7 and 14 minutes a day, 7 days a week. Join host Allen Voivod for Star Wars news, history, interviews, trivia, and deep dives into the Star Wars story as told in movies, books, comics, games, cartoons, and more. Subscribe now for your daily dose of Star Wars joy. It's destiny unleashed!</p>",
      "earliest_pub_date_ms": 1470667902000,
      "email": "hello@example.com",
      "explicit_content": false,
      "extra": {
        "amazon_music_url": "https://music.amazon.com/podcasts/6fc6d683-9ef3-4850-9c35-8e8b1a42a147/the-lock-sportscast",
        "facebook_handle": "sw7x7",
        "google_url": "https://podcasts.google.com/feed/aHR0cHM6Ly9yc3MuYXJ0MTkuY29tL2pvaG4tc29sb21vbi1yZXBvcnRz",
        "instagram_handle": "sw7x7",
        "linkedin_url": "string",
        "patreon_handle": "sw7x7",
        "spotify_url": "https://open.spotify.com/show/2rQJUP9Y3HxemiW3JHt9WV",
        "twitter_handle": "SW7x7podcast",
        "url1": "string",
        "url2": "string",
        "url3": "string",
        "wechat_handle": "string",
        "youtube_url": "https://www.youtube.com/sw7x7"
      },
      "genre_ids": [
        138,
        86,
        160,
        68,
        82,
        100,
        101
      ],
      "id": "4d3fe717742d4963a85562e9f84d8c79",
      "image": "https://cdn-images-1.listennotes.com/podcasts/exponent-ben-thompson-james-allworth-OaJSjb4xQv3.1400x1400.jpg",
      "is_claimed": true,
      "itunes_id": 896354638,
      "language": "English",
      "latest_episode_id": "d057092e57cc4ced80e0efaa196593d9",
      "latest_pub_date_ms": 1557499770000,
      "listen_score": 81,
      "listen_score_global_rank": "0.5%",
      "listennotes_url": "https://www.listennotes.com/c/4d3fe717742d4963a85562e9f84d8c79/",
      "looking_for": {
        "cohosts": true,
        "cross_promotion": true,
        "guests": true,
        "sponsors": true
      },
      "publisher": "Planet Broadcasting",
      "rss": "https://sw7x7.libsyn.com/rss",
      "thumbnail": "https://cdn-images-1.listennotes.com/podcasts/exponent-ben-thompson-james-allworth-OaJSjb4xQv3.300x300.jpg",
      "title": "Star Wars 7x7 | Star Wars News, Interviews, and More!",
      "total_episodes": 324,
      "type": "episodic",
      "update_frequency_hours": 168,
      "website": "http://sw7x7.com/"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|latest_episodes|[[EpisodeSimple](#schemaepisodesimple)]|false|none|Up to 10 latest episodes from these podcasts, sorted by **pub_date**. This field shows up only when **show_latest_episodes** is 1.<br>|
|podcasts|[[PodcastSimple](#schemapodcastsimple)]|true|none|none|

<h2 id="tocS_GetRegionsResponse">GetRegionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetregionsresponse"></a>
<a id="schema_GetRegionsResponse"></a>
<a id="tocSgetregionsresponse"></a>
<a id="tocsgetregionsresponse"></a>

```json
{
  "regions": {
    "au": "Australia",
    "de": "Germany",
    "ua": "Ukraine",
    "us": "United States"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|regions|object|true|none|none|

<h2 id="tocS_ImageField">ImageField</h2>
<!-- backwards compatibility -->
<a id="schemaimagefield"></a>
<a id="schema_ImageField"></a>
<a id="tocSimagefield"></a>
<a id="tocsimagefield"></a>

```json
"https://cdn-images-1.listennotes.com/podcasts/exponent-ben-thompson-james-allworth-OaJSjb4xQv3.1400x1400.jpg"
```

Image url for this podcast's artwork. If you are using PRO/ENTERPRISE plan, then it's
a high resolution image (1400x1400). If you are using FREE plan, then it's the same as **thumbnail**,
low resolution image (300x300).

<h2 id="tocS_IsClaimedField">IsClaimedField</h2>
<!-- backwards compatibility -->
<a id="schemaisclaimedfield"></a>
<a id="schema_IsClaimedField"></a>
<a id="tocSisclaimedfield"></a>
<a id="tocsisclaimedfield"></a>

```json
true
```

Whether this podcast is claimed by its producer on [ListenNotes.com](https://www.ListenNotes.com).

<h2 id="tocS_LanguageField">LanguageField</h2>
<!-- backwards compatibility -->
<a id="schemalanguagefield"></a>
<a id="schema_LanguageField"></a>
<a id="tocSlanguagefield"></a>
<a id="tocslanguagefield"></a>

```json
"English"
```

The language of this podcast. You can get all supported languages from `GET /languages`.

<h2 id="tocS_LatestEpisodeIdField">LatestEpisodeIdField</h2>
<!-- backwards compatibility -->
<a id="schemalatestepisodeidfield"></a>
<a id="schema_LatestEpisodeIdField"></a>
<a id="tocSlatestepisodeidfield"></a>
<a id="tocslatestepisodeidfield"></a>

```json
"d057092e57cc4ced80e0efaa196593d9"
```

The id of the most recently published episode of this podcast, which can be used to further fetch detailed episode metadata via `GET /episodes/{id}`.

<h2 id="tocS_LatestPubDateMsField">LatestPubDateMsField</h2>
<!-- backwards compatibility -->
<a id="schemalatestpubdatemsfield"></a>
<a id="schema_LatestPubDateMsField"></a>
<a id="tocSlatestpubdatemsfield"></a>
<a id="tocslatestpubdatemsfield"></a>

```json
1557499770000
```

The published date of the latest episode of this podcast. In milliseconds

<h2 id="tocS_LinkField">LinkField</h2>
<!-- backwards compatibility -->
<a id="schemalinkfield"></a>
<a id="schema_LinkField"></a>
<a id="tocSlinkfield"></a>
<a id="tocslinkfield"></a>

```json
"https://www.npr.org/2020/01/22/798532179/soleimanis-iran"
```

Web link of this episode.

<h2 id="tocS_ListenScoreField">ListenScoreField</h2>
<!-- backwards compatibility -->
<a id="schemalistenscorefield"></a>
<a id="schema_ListenScoreField"></a>
<a id="tocSlistenscorefield"></a>
<a id="tocslistenscorefield"></a>

```json
81
```

The estimated popularity score of a podcast compared to all other rss-based public podcasts in the world on a scale from 0 to 100.
If the score is not available, it'll be null. Learn more at listennotes.com/listen-score

<h2 id="tocS_ListenScoreGlobalRankField">ListenScoreGlobalRankField</h2>
<!-- backwards compatibility -->
<a id="schemalistenscoreglobalrankfield"></a>
<a id="schema_ListenScoreGlobalRankField"></a>
<a id="tocSlistenscoreglobalrankfield"></a>
<a id="tocslistenscoreglobalrankfield"></a>

```json
"0.5%"
```

The estimated popularity ranking of a podcast compared to all other rss-based public podcasts in the world.
For example, if the value is 0.5%, then this podcast is one of the top 0.5% most popular shows out of all podcasts globally, ranked by Listen Score.
If the ranking is not available, it'll be null. Learn more at listennotes.com/listen-score

<h2 id="tocS_MaybeAudioInvalidField">MaybeAudioInvalidField</h2>
<!-- backwards compatibility -->
<a id="schemamaybeaudioinvalidfield"></a>
<a id="schema_MaybeAudioInvalidField"></a>
<a id="tocSmaybeaudioinvalidfield"></a>
<a id="tocsmaybeaudioinvalidfield"></a>

```json
false
```

Whether or not this episode's audio is invalid. Podcasters may delete the original audio.

<h2 id="tocS_NextEpisodePubDateField">NextEpisodePubDateField</h2>
<!-- backwards compatibility -->
<a id="schemanextepisodepubdatefield"></a>
<a id="schema_NextEpisodePubDateField"></a>
<a id="tocSnextepisodepubdatefield"></a>
<a id="tocsnextepisodepubdatefield"></a>

```json
1470667902000
```

Passed to the **next_episode_pub_date** parameter of `GET /podcasts/{id}` to paginate through episodes of that podcast.

<h2 id="tocS_PlaylistDescriptionField">PlaylistDescriptionField</h2>
<!-- backwards compatibility -->
<a id="schemaplaylistdescriptionfield"></a>
<a id="schema_PlaylistDescriptionField"></a>
<a id="tocSplaylistdescriptionfield"></a>
<a id="tocsplaylistdescriptionfield"></a>

```json
"A curated playlist of podcasts about podcasting."
```

Playlist description.

<h2 id="tocS_PlaylistIdField">PlaylistIdField</h2>
<!-- backwards compatibility -->
<a id="schemaplaylistidfield"></a>
<a id="schema_PlaylistIdField"></a>
<a id="tocSplaylistidfield"></a>
<a id="tocsplaylistidfield"></a>

```json
"m1pe7z60bsw"
```

A 11-character playlist id, which can be used to further fetch detailed playlist metadata via `GET /playlists/{id}`.

<h2 id="tocS_PlaylistImageField">PlaylistImageField</h2>
<!-- backwards compatibility -->
<a id="schemaplaylistimagefield"></a>
<a id="schema_PlaylistImageField"></a>
<a id="tocSplaylistimagefield"></a>
<a id="tocsplaylistimagefield"></a>

```json
"https://cdn-images-1.listennotes.com/playlist/image/6907e8ff6b6c45df94cc059753f369cc.JPEG"
```

High resolution image url of the playlist.

<h2 id="tocS_PlaylistItem">PlaylistItem</h2>
<!-- backwards compatibility -->
<a id="schemaplaylistitem"></a>
<a id="schema_PlaylistItem"></a>
<a id="tocSplaylistitem"></a>
<a id="tocsplaylistitem"></a>

```json
{
  "added_at_ms": 1595567004958,
  "data": {
    "audio": "https://www.listennotes.com/e/p/11b34041e804491b9704d11f283c74de/",
    "audio_length_sec": 567,
    "description": "<p>Disney chief Bob Iger shared news about Star Wars movies in 2020 and beyond, but some media outlets gave conflicting reports about it. Here's the real scoop. Punch it!</p> <p>***We’re listener supported! Go to http://Patreon.com/sw7x7 to donate to the Star Wars 7x7 podcast, and you’ll get some fabulous rewards for your pledge.*** </p> <p>Check out SW7x7.com for full Star Wars 7x7 show notes and links, and to comment on any of the content of this episode! If you like what you've heard, please leave us a rating or review on iTunes or Stitcher, which will also help more people discover this Star Wars podcast.</p> <p>Don't forget to join the Star Wars 7x7 fun on Facebook at Facebook.com/SW7x7, and follow the breaking news Twitter feed at Twitter.com/SW7x7Podcast. We're also on Pinterest and Instagram as \"SW7x7\" too, and we'd love to connect with you there!</p>\n",
    "explicit_content": false,
    "id": "4d82e50314174754a3b603912448e812",
    "image": "https://cdn-images-1.listennotes.com/podcasts/exponent-ben-thompson-james-allworth-OaJSjb4xQv3.1400x1400.jpg",
    "link": "https://www.npr.org/2020/01/22/798532179/soleimanis-iran",
    "listennotes_edit_url": "https://www.listennotes.com/e/11b34041e804491b9704d11f283c74de/#edit",
    "listennotes_url": "https://www.listennotes.com/e/4d82e50314174754a3b603912448e812/",
    "maybe_audio_invalid": false,
    "podcast": {
      "id": "4d3fe717742d4963a85562e9f84d8c79",
      "image": "https://cdn-images-1.listennotes.com/podcasts/exponent-ben-thompson-james-allworth-OaJSjb4xQv3.1400x1400.jpg",
      "listen_score": 81,
      "listen_score_global_rank": "0.5%",
      "listennotes_url": "https://www.listennotes.com/c/4d3fe717742d4963a85562e9f84d8c79/",
      "publisher": "Planet Broadcasting",
      "thumbnail": "https://cdn-images-1.listennotes.com/podcasts/exponent-ben-thompson-james-allworth-OaJSjb4xQv3.300x300.jpg",
      "title": "Star Wars 7x7 | Star Wars News, Interviews, and More!"
    },
    "pub_date_ms": 1474873200000,
    "thumbnail": "https://cdn-images-1.listennotes.com/podcasts/exponent-ben-thompson-james-allworth-OaJSjb4xQv3.300x300.jpg",
    "title": "Celebration Recap, Jason Fry and Christian Blauvelt Interviews – SWBW #101"
  },
  "id": 23,
  "notes": "This is a good episode.",
  "type": "episode"
}
```

An item in a playlist

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|added_at_ms|integer|false|none|Timestamp (in milliseconds) when this item is added.|
|data|[EpisodeSimple](#schemaepisodesimple) \| [PodcastSimple](#schemapodcastsimple) \| [CustomAudio](#schemacustomaudio) \| [DeletedItem](#schemadeleteditem)|false|none|none|
|id|integer|false|none|Playlist item id.|
|notes|string|false|none|Notes for this item.|
|type|string|false|none|The type of this playlist item.<br>If a playlist is **episode_list**, then an item could be either **episode** or **custom_audio**.<br>If it's **podcast_list**, then an item can only be **podcast**.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|type|episode|
|type|custom_audio|
|type|podcast|

<h2 id="tocS_PlaylistLastTimestampMsField">PlaylistLastTimestampMsField</h2>
<!-- backwards compatibility -->
<a id="schemaplaylistlasttimestampmsfield"></a>
<a id="schema_PlaylistLastTimestampMsField"></a>
<a id="tocSplaylistlasttimestampmsfield"></a>
<a id="tocsplaylistlasttimestampmsfield"></a>

```json
1595641092907
```

Passed to the **last_timestamp_ms** parameter of `GET /playlists/{id}` to paginate through items of that playlist.

<h2 id="tocS_PlaylistListennotesUrlField">PlaylistListennotesUrlField</h2>
<!-- backwards compatibility -->
<a id="schemaplaylistlistennotesurlfield"></a>
<a id="schema_PlaylistListennotesUrlField"></a>
<a id="tocSplaylistlistennotesurlfield"></a>
<a id="tocsplaylistlistennotesurlfield"></a>

```json
"https://www.listennotes.com/listen/podcasts-about-podcasting-m1pe7z60bsw/?display=episode"
```

The url of this playlist on ListenNotes.com.

<h2 id="tocS_PlaylistNameField">PlaylistNameField</h2>
<!-- backwards compatibility -->
<a id="schemaplaylistnamefield"></a>
<a id="schema_PlaylistNameField"></a>
<a id="tocSplaylistnamefield"></a>
<a id="tocsplaylistnamefield"></a>

```json
"My podcast playlist"
```

Playlist name.

<h2 id="tocS_PlaylistResponse">PlaylistResponse</h2>
<!-- backwards compatibility -->
<a id="schemaplaylistresponse"></a>
<a id="schema_PlaylistResponse"></a>
<a id="tocSplaylistresponse"></a>
<a id="tocsplaylistresponse"></a>

```json
{
  "description": "A curated playlist of podcasts about podcasting.",
  "id": "m1pe7z60bsw",
  "image": "https://cdn-images-1.listennotes.com/playlist/image/6907e8ff6b6c45df94cc059753f369cc.JPEG",
  "items": [
    {
      "added_at_ms": 1595567004958,
      "data": {
        "audio": "https://www.listennotes.com/e/p/11b34041e804491b9704d11f283c74de/",
        "audio_length_sec": 567,
        "description": "<p>Disney chief Bob Iger shared news about Star Wars movies in 2020 and beyond, but some media outlets gave conflicting reports about it. Here's the real scoop. Punch it!</p> <p>***We’re listener supported! Go to http://Patreon.com/sw7x7 to donate to the Star Wars 7x7 podcast, and you’ll get some fabulous rewards for your pledge.*** </p> <p>Check out SW7x7.com for full Star Wars 7x7 show notes and links, and to comment on any of the content of this episode! If you like what you've heard, please leave us a rating or review on iTunes or Stitcher, which will also help more people discover this Star Wars podcast.</p> <p>Don't forget to join the Star Wars 7x7 fun on Facebook at Facebook.com/SW7x7, and follow the breaking news Twitter feed at Twitter.com/SW7x7Podcast. We're also on Pinterest and Instagram as \"SW7x7\" too, and we'd love to connect with you there!</p>\n",
        "explicit_content": false,
        "id": "4d82e50314174754a3b603912448e812",
        "image": "https://cdn-images-1.listennotes.com/podcasts/exponent-ben-thompson-james-allworth-OaJSjb4xQv3.1400x1400.jpg",
        "link": "https://www.npr.org/2020/01/22/798532179/soleimanis-iran",
        "listennotes_edit_url": "https://www.listennotes.com/e/11b34041e804491b9704d11f283c74de/#edit",
        "listennotes_url": "https://www.listennotes.com/e/4d82e50314174754a3b603912448e812/",
        "maybe_audio_invalid": false,
        "podcast": {
          "id": "4d3fe717742d4963a85562e9f84d8c79",
          "image": "https://cdn-images-1.listennotes.com/podcasts/exponent-ben-thompson-james-allworth-OaJSjb4xQv3.1400x1400.jpg",
          "listen_score": 81,
          "listen_score_global_rank": "0.5%",
          "listennotes_url": "https://www.listennotes.com/c/4d3fe717742d4963a85562e9f84d8c79/",
          "publisher": "Planet Broadcasting",
          "thumbnail": "https://cdn-images-1.listennotes.com/podcasts/exponent-ben-thompson-james-allworth-OaJSjb4xQv3.300x300.jpg",
          "title": "Star Wars 7x7 | Star Wars News, Interviews, and More!"
        },
        "pub_date_ms": 1474873200000,
        "thumbnail": "https://cdn-images-1.listennotes.com/podcasts/exponent-ben-thompson-james-allworth-OaJSjb4xQv3.300x300.jpg",
        "title": "Celebration Recap, Jason Fry and Christian Blauvelt Interviews – SWBW #101"
      },
      "id": 23,
      "notes": "This is a good episode.",
      "type": "episode"
    }
  ],
  "last_timestamp_ms": 1595641092907,
  "listennotes_url": "https://www.listennotes.com/listen/podcasts-about-podcasting-m1pe7z60bsw/?display=episode",
  "name": "My podcast playlist",
  "thumbnail": "https://d3sv2eduhewoas.cloudfront.net/playlist/image/48477deae02649d7ab9d3f1b3966af38.JPEG",
  "total": 325,
  "total_audio_length_sec": 234567,
  "type": "episode_list",
  "visibility": "public"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|[PlaylistDescriptionField](#schemaplaylistdescriptionfield)|false|none|Playlist description.|
|id|[PlaylistIdField](#schemaplaylistidfield)|false|none|A 11-character playlist id, which can be used to further fetch detailed playlist metadata via `GET /playlists/{id}`.|
|image|[PlaylistImageField](#schemaplaylistimagefield)|false|none|High resolution image url of the playlist.|
|items|[[PlaylistItem](#schemaplaylistitem)]|false|none|A list of playlist items.|
|last_timestamp_ms|[PlaylistLastTimestampMsField](#schemaplaylistlasttimestampmsfield)|false|none|Passed to the **last_timestamp_ms** parameter of `GET /playlists/{id}` to paginate through items of that playlist.<br>|
|listennotes_url|[PlaylistListennotesUrlField](#schemaplaylistlistennotesurlfield)|false|none|The url of this playlist on ListenNotes.com.|
|name|[PlaylistNameField](#schemaplaylistnamefield)|false|none|Playlist name.|
|thumbnail|[PlaylistThumbnailField](#schemaplaylistthumbnailfield)|false|none|Low resolution image url of the playlist.|
|total|integer|false|none|Total number of items in this playlist.|
|total_audio_length_sec|integer|false|none|Total audio length of all episodes in this playlist, in seconds. It will have a valid value only when type is **episode_list**. In other words, it will be 0 if type is **podcast_list**.|
|type|string|false|none|The type of this playlist, which should be either **episode_list** or **podcast_list**.<br>|
|visibility|[PlaylistVisibilityField](#schemaplaylistvisibilityfield)|false|none|Visibility of this playlist.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|episode_list|
|type|podcast_list|
|visibility|public|
|visibility|unlisted|
|visibility|private|

<h2 id="tocS_PlaylistThumbnailField">PlaylistThumbnailField</h2>
<!-- backwards compatibility -->
<a id="schemaplaylistthumbnailfield"></a>
<a id="schema_PlaylistThumbnailField"></a>
<a id="tocSplaylistthumbnailfield"></a>
<a id="tocsplaylistthumbnailfield"></a>

```json
"https://d3sv2eduhewoas.cloudfront.net/playlist/image/48477deae02649d7ab9d3f1b3966af38.JPEG"
```

Low resolution image url of the playlist.

<h2 id="tocS_PlaylistVisibilityField">PlaylistVisibilityField</h2>
<!-- backwards compatibility -->
<a id="schemaplaylistvisibilityfield"></a>
<a id="schema_PlaylistVisibilityField"></a>
<a id="tocSplaylistvisibilityfield"></a>
<a id="tocsplaylistvisibilityfield"></a>

```json
"public"
```

Visibility of this playlist.

<h2 id="tocS_PlaylistsResponse">PlaylistsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaplaylistsresponse"></a>
<a id="schema_PlaylistsResponse"></a>
<a id="tocSplaylistsresponse"></a>
<a id="tocsplaylistsresponse"></a>

```json
{
  "has_next": true,
  "has_previous": true,
  "next_page_number": 3,
  "page_number": 2,
  "playlists": [
    {
      "description": "A curated playlist of podcasts about podcasting.",
      "episode_count": 23,
      "id": "m1pe7z60bsw",
      "image": "https://cdn-images-1.listennotes.com/playlist/image/6907e8ff6b6c45df94cc059753f369cc.JPEG",
      "last_timestamp_ms": 1595641092907,
      "listennotes_url": "https://www.listennotes.com/listen/podcasts-about-podcasting-m1pe7z60bsw/?display=episode",
      "name": "My podcast playlist",
      "podcast_count": 10,
      "thumbnail": "https://d3sv2eduhewoas.cloudfront.net/playlist/image/48477deae02649d7ab9d3f1b3966af38.JPEG",
      "total_audio_length_sec": 234567,
      "visibility": "public"
    }
  ],
  "previous_page_number": 1,
  "total": 325
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|has_next|boolean|false|none|none|
|has_previous|boolean|false|none|none|
|next_page_number|integer|false|none|none|
|page_number|integer|false|none|none|
|playlists|[object]|false|none|none|
|previous_page_number|integer|false|none|none|
|total|integer|false|none|none|

<h2 id="tocS_PodcastAudienceResponse">PodcastAudienceResponse</h2>
<!-- backwards compatibility -->
<a id="schemapodcastaudienceresponse"></a>
<a id="schema_PodcastAudienceResponse"></a>
<a id="tocSpodcastaudienceresponse"></a>
<a id="tocspodcastaudienceresponse"></a>

```json
{
  "by_regions": [
    {
      "ratio": "20.22%",
      "region": "us"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|by_regions|[object]|false|none|none|

<h2 id="tocS_PodcastDescriptionField">PodcastDescriptionField</h2>
<!-- backwards compatibility -->
<a id="schemapodcastdescriptionfield"></a>
<a id="schema_PodcastDescriptionField"></a>
<a id="tocSpodcastdescriptionfield"></a>
<a id="tocspodcastdescriptionfield"></a>

```json
"<p>The Star Wars 7x7 Podcast is Rebel-rousing fun for everyday Jedi, between 7 and 14 minutes a day, 7 days a week. Join host Allen Voivod for Star Wars news, history, interviews, trivia, and deep dives into the Star Wars story as told in movies, books, comics, games, cartoons, and more. Subscribe now for your daily dose of Star Wars joy. It's destiny unleashed!</p>"
```

Html of this episode's full description

<h2 id="tocS_PodcastExtraField">PodcastExtraField</h2>
<!-- backwards compatibility -->
<a id="schemapodcastextrafield"></a>
<a id="schema_PodcastExtraField"></a>
<a id="tocSpodcastextrafield"></a>
<a id="tocspodcastextrafield"></a>

```json
{
  "amazon_music_url": "https://music.amazon.com/podcasts/6fc6d683-9ef3-4850-9c35-8e8b1a42a147/the-lock-sportscast",
  "facebook_handle": "sw7x7",
  "google_url": "https://podcasts.google.com/feed/aHR0cHM6Ly9yc3MuYXJ0MTkuY29tL2pvaG4tc29sb21vbi1yZXBvcnRz",
  "instagram_handle": "sw7x7",
  "linkedin_url": "string",
  "patreon_handle": "sw7x7",
  "spotify_url": "https://open.spotify.com/show/2rQJUP9Y3HxemiW3JHt9WV",
  "twitter_handle": "SW7x7podcast",
  "url1": "string",
  "url2": "string",
  "url3": "string",
  "wechat_handle": "string",
  "youtube_url": "https://www.youtube.com/sw7x7"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amazon_music_url|string|false|none|Amazon Music url for this podcast|
|facebook_handle|string|false|none|Facebook username affiliated with this podcast|
|google_url|string|false|none|Google Podcasts url for this podcast|
|instagram_handle|string|false|none|Instagram username affiliated with this podcast|
|linkedin_url|string|false|none|LinkedIn url affiliated with this podcast|
|patreon_handle|string|false|none|Patreon username affiliated with this podcast|
|spotify_url|string|false|none|Spotify url for this podcast|
|twitter_handle|string|false|none|Twitter username affiliated with this podcast|
|url1|string|false|none|Url affiliated with this podcast|
|url2|string|false|none|Url affiliated with this podcast|
|url3|string|false|none|Url affiliated with this podcast|
|wechat_handle|string|false|none|WeChat username affiliated with this podcast|
|youtube_url|string|false|none|YouTube url affiliated with this podcast|

<h2 id="tocS_PodcastFull">PodcastFull</h2>
<!-- backwards compatibility -->
<a id="schemapodcastfull"></a>
<a id="schema_PodcastFull"></a>
<a id="tocSpodcastfull"></a>
<a id="tocspodcastfull"></a>

```json
{
  "audio_length_sec": 1291,
  "country": "United States",
  "description": "<p>The Star Wars 7x7 Podcast is Rebel-rousing fun for everyday Jedi, between 7 and 14 minutes a day, 7 days a week. Join host Allen Voivod for Star Wars news, history, interviews, trivia, and deep dives into the Star Wars story as told in movies, books, comics, games, cartoons, and more. Subscribe now for your daily dose of Star Wars joy. It's destiny unleashed!</p>",
  "earliest_pub_date_ms": 1470667902000,
  "email": "hello@example.com",
  "episodes": [
    {
      "audio": "https://www.listennotes.com/e/p/11b34041e804491b9704d11f283c74de/",
      "audio_length_sec": 567,
      "description": "<p>Disney chief Bob Iger shared news about Star Wars movies in 2020 and beyond, but some media outlets gave conflicting reports about it. Here's the real scoop. Punch it!</p> <p>***We’re listener supported! Go to http://Patreon.com/sw7x7 to donate to the Star Wars 7x7 podcast, and you’ll get some fabulous rewards for your pledge.*** </p> <p>Check out SW7x7.com for full Star Wars 7x7 show notes and links, and to comment on any of the content of this episode! If you like what you've heard, please leave us a rating or review on iTunes or Stitcher, which will also help more people discover this Star Wars podcast.</p> <p>Don't forget to join the Star Wars 7x7 fun on Facebook at Facebook.com/SW7x7, and follow the breaking news Twitter feed at Twitter.com/SW7x7Podcast. We're also on Pinterest and Instagram as \"SW7x7\" too, and we'd love to connect with you there!</p>\n",
      "explicit_content": false,
      "id": "4d82e50314174754a3b603912448e812",
      "image": "https://cdn-images-1.listennotes.com/podcasts/exponent-ben-thompson-james-allworth-OaJSjb4xQv3.1400x1400.jpg",
      "link": "https://www.npr.org/2020/01/22/798532179/soleimanis-iran",
      "listennotes_edit_url": "https://www.listennotes.com/e/11b34041e804491b9704d11f283c74de/#edit",
      "listennotes_url": "https://www.listennotes.com/e/4d82e50314174754a3b603912448e812/",
      "maybe_audio_invalid": false,
      "pub_date_ms": 1474873200000,
      "thumbnail": "https://cdn-images-1.listennotes.com/podcasts/exponent-ben-thompson-james-allworth-OaJSjb4xQv3.300x300.jpg",
      "title": "Celebration Recap, Jason Fry and Christian Blauvelt Interviews – SWBW #101"
    }
  ],
  "explicit_content": false,
  "extra": {
    "amazon_music_url": "https://music.amazon.com/podcasts/6fc6d683-9ef3-4850-9c35-8e8b1a42a147/the-lock-sportscast",
    "facebook_handle": "sw7x7",
    "google_url": "https://podcasts.google.com/feed/aHR0cHM6Ly9yc3MuYXJ0MTkuY29tL2pvaG4tc29sb21vbi1yZXBvcnRz",
    "instagram_handle": "sw7x7",
    "linkedin_url": "string",
    "patreon_handle": "sw7x7",
    "spotify_url": "https://open.spotify.com/show/2rQJUP9Y3HxemiW3JHt9WV",
    "twitter_handle": "SW7x7podcast",
    "url1": "string",
    "url2": "string",
    "url3": "string",
    "wechat_handle": "string",
    "youtube_url": "https://www.youtube.com/sw7x7"
  },
  "genre_ids": [
    138,
    86,
    160,
    68,
    82,
    100,
    101
  ],
  "id": "4d3fe717742d4963a85562e9f84d8c79",
  "image": "https://cdn-images-1.listennotes.com/podcasts/exponent-ben-thompson-james-allworth-OaJSjb4xQv3.1400x1400.jpg",
  "is_claimed": true,
  "itunes_id": 896354638,
  "language": "English",
  "latest_episode_id": "d057092e57cc4ced80e0efaa196593d9",
  "latest_pub_date_ms": 1557499770000,
  "listen_score": 81,
  "listen_score_global_rank": "0.5%",
  "listennotes_url": "https://www.listennotes.com/c/4d3fe717742d4963a85562e9f84d8c79/",
  "looking_for": {
    "cohosts": true,
    "cross_promotion": true,
    "guests": true,
    "sponsors": true
  },
  "next_episode_pub_date": 1470667902000,
  "publisher": "Planet Broadcasting",
  "rss": "https://sw7x7.libsyn.com/rss",
  "thumbnail": "https://cdn-images-1.listennotes.com/podcasts/exponent-ben-thompson-james-allworth-OaJSjb4xQv3.300x300.jpg",
  "title": "Star Wars 7x7 | Star Wars News, Interviews, and More!",
  "total_episodes": 324,
  "type": "episodic",
  "update_frequency_hours": 168,
  "website": "http://sw7x7.com/"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|audio_length_sec|[AvgAudioLengthSecField](#schemaavgaudiolengthsecfield)|false|none|Average audio length of all episodes of this podcast. In seconds.|
|country|[CountryField](#schemacountryfield)|false|none|The country where this podcast is produced.|
|description|[PodcastDescriptionField](#schemapodcastdescriptionfield)|false|none|Html of this episode's full description|
|earliest_pub_date_ms|[EarliestPubDateMsField](#schemaearliestpubdatemsfield)|false|none|The published date of the oldest episode of this podcast. In milliseconds|
|email|[EmailField](#schemaemailfield)|false|none|The email of this podcast's producer. This field is available only in the PRO/ENTERPRISE plan.|
|episodes|[[EpisodeMinimum](#schemaepisodeminimum)]|false|none|none|
|explicit_content|[ExplicitField](#schemaexplicitfield)|false|none|Whether this podcast contains explicit language.|
|extra|[PodcastExtraField](#schemapodcastextrafield)|false|none|none|
|genre_ids|[GenreIdsField](#schemagenreidsfield)|false|none|none|
|id|[PodcastIdField](#schemapodcastidfield)|false|none|Podcast id, which can be used to further fetch detailed podcast metadata via `GET /podcasts/{id}`.|
|image|[ImageField](#schemaimagefield)|false|none|Image url for this podcast's artwork. If you are using PRO/ENTERPRISE plan, then it's<br>a high resolution image (1400x1400). If you are using FREE plan, then it's the same as **thumbnail**,<br>low resolution image (300x300).<br>|
|is_claimed|[IsClaimedField](#schemaisclaimedfield)|false|none|Whether this podcast is claimed by its producer on [ListenNotes.com](https://www.ListenNotes.com).|
|itunes_id|[iTunesIdField](#schemaitunesidfield)|false|none|iTunes id for this podcast.|
|language|[LanguageField](#schemalanguagefield)|false|none|The language of this podcast. You can get all supported languages from `GET /languages`.|
|latest_episode_id|[LatestEpisodeIdField](#schemalatestepisodeidfield)|false|none|The id of the most recently published episode of this podcast, which can be used to further fetch detailed episode metadata via `GET /episodes/{id}`.|
|latest_pub_date_ms|[LatestPubDateMsField](#schemalatestpubdatemsfield)|false|none|The published date of the latest episode of this podcast. In milliseconds|
|listen_score|[ListenScoreField](#schemalistenscorefield)|false|none|The estimated popularity score of a podcast compared to all other rss-based public podcasts in the world on a scale from 0 to 100.<br>If the score is not available, it'll be null. Learn more at listennotes.com/listen-score<br>|
|listen_score_global_rank|[ListenScoreGlobalRankField](#schemalistenscoreglobalrankfield)|false|none|The estimated popularity ranking of a podcast compared to all other rss-based public podcasts in the world.<br>For example, if the value is 0.5%, then this podcast is one of the top 0.5% most popular shows out of all podcasts globally, ranked by Listen Score.<br>If the ranking is not available, it'll be null. Learn more at listennotes.com/listen-score<br>|
|listennotes_url|[PodcastLNUrlField](#schemapodcastlnurlfield)|false|none|The url of this podcast on [ListenNotes.com](https://www.ListenNotes.com).|
|looking_for|[PodcastLookingForField](#schemapodcastlookingforfield)|false|none|none|
|next_episode_pub_date|[NextEpisodePubDateField](#schemanextepisodepubdatefield)|false|none|Passed to the **next_episode_pub_date** parameter of `GET /podcasts/{id}` to paginate through episodes of that podcast.|
|publisher|[PublisherField](#schemapublisherfield)|false|none|Podcast publisher name.|
|rss|[RssField](#schemarssfield)|false|none|RSS url of this podcast. This field is available only in the PRO/ENTERPRISE plan.|
|thumbnail|[ThumbnailField](#schemathumbnailfield)|false|none|Thumbnail image url for this podcast's artwork (300x300).|
|title|[PodcastNameField](#schemapodcastnamefield)|false|none|Podcast name.|
|total_episodes|[TotalEpisodesField](#schematotalepisodesfield)|false|none|Total number of episodes in this podcast.|
|type|[PodcastTypeField](#schemapodcasttypefield)|false|none|The type of this podcast - episodic or serial.|
|update_frequency_hours|[UpdateFrequencyHoursField](#schemaupdatefrequencyhoursfield)|false|none|How frequently does this podcast release a new episode? In hours. For example, if the value is 166, then it's every 166 hours (or weekly).|
|website|[WebsiteField](#schemawebsitefield)|false|none|Website url of this podcast.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|episodic|
|type|serial|

<h2 id="tocS_PodcastIdField">PodcastIdField</h2>
<!-- backwards compatibility -->
<a id="schemapodcastidfield"></a>
<a id="schema_PodcastIdField"></a>
<a id="tocSpodcastidfield"></a>
<a id="tocspodcastidfield"></a>

```json
"4d3fe717742d4963a85562e9f84d8c79"
```

Podcast id, which can be used to further fetch detailed podcast metadata via `GET /podcasts/{id}`.

<h2 id="tocS_PodcastLNUrlField">PodcastLNUrlField</h2>
<!-- backwards compatibility -->
<a id="schemapodcastlnurlfield"></a>
<a id="schema_PodcastLNUrlField"></a>
<a id="tocSpodcastlnurlfield"></a>
<a id="tocspodcastlnurlfield"></a>

```json
"https://www.listennotes.com/c/4d3fe717742d4963a85562e9f84d8c79/"
```

The url of this podcast on [ListenNotes.com](https://www.ListenNotes.com).

<h2 id="tocS_PodcastLookingForField">PodcastLookingForField</h2>
<!-- backwards compatibility -->
<a id="schemapodcastlookingforfield"></a>
<a id="schema_PodcastLookingForField"></a>
<a id="tocSpodcastlookingforfield"></a>
<a id="tocspodcastlookingforfield"></a>

```json
{
  "cohosts": true,
  "cross_promotion": true,
  "guests": true,
  "sponsors": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cohosts|boolean|false|none|Whether this podcast is looking for cohosts.|
|cross_promotion|boolean|false|none|Whether this podcast is looking for cross promotion opportunities with other podcasts.|
|guests|boolean|false|none|Whether this podcast is looking for guests.|
|sponsors|boolean|false|none|Whether this podcast is looking for sponsors.|

<h2 id="tocS_PodcastMinimum">PodcastMinimum</h2>
<!-- backwards compatibility -->
<a id="schemapodcastminimum"></a>
<a id="schema_PodcastMinimum"></a>
<a id="tocSpodcastminimum"></a>
<a id="tocspodcastminimum"></a>

```json
{
  "id": "4d3fe717742d4963a85562e9f84d8c79",
  "image": "https://cdn-images-1.listennotes.com/podcasts/exponent-ben-thompson-james-allworth-OaJSjb4xQv3.1400x1400.jpg",
  "listen_score": 81,
  "listen_score_global_rank": "0.5%",
  "listennotes_url": "https://www.listennotes.com/c/4d3fe717742d4963a85562e9f84d8c79/",
  "publisher": "Planet Broadcasting",
  "thumbnail": "https://cdn-images-1.listennotes.com/podcasts/exponent-ben-thompson-james-allworth-OaJSjb4xQv3.300x300.jpg",
  "title": "Star Wars 7x7 | Star Wars News, Interviews, and More!"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[PodcastIdField](#schemapodcastidfield)|false|none|Podcast id, which can be used to further fetch detailed podcast metadata via `GET /podcasts/{id}`.|
|image|[ImageField](#schemaimagefield)|false|none|Image url for this podcast's artwork. If you are using PRO/ENTERPRISE plan, then it's<br>a high resolution image (1400x1400). If you are using FREE plan, then it's the same as **thumbnail**,<br>low resolution image (300x300).<br>|
|listen_score|[ListenScoreField](#schemalistenscorefield)|false|none|The estimated popularity score of a podcast compared to all other rss-based public podcasts in the world on a scale from 0 to 100.<br>If the score is not available, it'll be null. Learn more at listennotes.com/listen-score<br>|
|listen_score_global_rank|[ListenScoreGlobalRankField](#schemalistenscoreglobalrankfield)|false|none|The estimated popularity ranking of a podcast compared to all other rss-based public podcasts in the world.<br>For example, if the value is 0.5%, then this podcast is one of the top 0.5% most popular shows out of all podcasts globally, ranked by Listen Score.<br>If the ranking is not available, it'll be null. Learn more at listennotes.com/listen-score<br>|
|listennotes_url|[PodcastLNUrlField](#schemapodcastlnurlfield)|false|none|The url of this podcast on [ListenNotes.com](https://www.ListenNotes.com).|
|publisher|[PublisherField](#schemapublisherfield)|false|none|Podcast publisher name.|
|thumbnail|[ThumbnailField](#schemathumbnailfield)|false|none|Thumbnail image url for this podcast's artwork (300x300).|
|title|[PodcastNameField](#schemapodcastnamefield)|false|none|Podcast name.|

<h2 id="tocS_PodcastMinimumRss">PodcastMinimumRss</h2>
<!-- backwards compatibility -->
<a id="schemapodcastminimumrss"></a>
<a id="schema_PodcastMinimumRss"></a>
<a id="tocSpodcastminimumrss"></a>
<a id="tocspodcastminimumrss"></a>

```json
{
  "id": "4d3fe717742d4963a85562e9f84d8c79",
  "image": "https://cdn-images-1.listennotes.com/podcasts/exponent-ben-thompson-james-allworth-OaJSjb4xQv3.1400x1400.jpg",
  "listennotes_url": "https://www.listennotes.com/c/4d3fe717742d4963a85562e9f84d8c79/",
  "publisher": "Planet Broadcasting",
  "rss": "https://sw7x7.libsyn.com/rss",
  "thumbnail": "https://cdn-images-1.listennotes.com/podcasts/exponent-ben-thompson-james-allworth-OaJSjb4xQv3.300x300.jpg",
  "title": "Star Wars 7x7 | Star Wars News, Interviews, and More!"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[PodcastIdField](#schemapodcastidfield)|false|none|Podcast id, which can be used to further fetch detailed podcast metadata via `GET /podcasts/{id}`.|
|image|[ImageField](#schemaimagefield)|false|none|Image url for this podcast's artwork. If you are using PRO/ENTERPRISE plan, then it's<br>a high resolution image (1400x1400). If you are using FREE plan, then it's the same as **thumbnail**,<br>low resolution image (300x300).<br>|
|listennotes_url|[PodcastLNUrlField](#schemapodcastlnurlfield)|false|none|The url of this podcast on [ListenNotes.com](https://www.ListenNotes.com).|
|publisher|[PublisherField](#schemapublisherfield)|false|none|Podcast publisher name.|
|rss|[RssField](#schemarssfield)|false|none|RSS url of this podcast. This field is available only in the PRO/ENTERPRISE plan.|
|thumbnail|[ThumbnailField](#schemathumbnailfield)|false|none|Thumbnail image url for this podcast's artwork (300x300).|
|title|[PodcastNameField](#schemapodcastnamefield)|false|none|Podcast name.|

<h2 id="tocS_PodcastNameField">PodcastNameField</h2>
<!-- backwards compatibility -->
<a id="schemapodcastnamefield"></a>
<a id="schema_PodcastNameField"></a>
<a id="tocSpodcastnamefield"></a>
<a id="tocspodcastnamefield"></a>

```json
"Star Wars 7x7 | Star Wars News, Interviews, and More!"
```

Podcast name.

<h2 id="tocS_PodcastSearchResult">PodcastSearchResult</h2>
<!-- backwards compatibility -->
<a id="schemapodcastsearchresult"></a>
<a id="schema_PodcastSearchResult"></a>
<a id="tocSpodcastsearchresult"></a>
<a id="tocspodcastsearchresult"></a>

```json
{
  "audio_length_sec": 1291,
  "description_highlighted": "...Join host Allen Voivod for <span class=\"ln-search-highlight\">Star</span> <span class=\"ln-search-highlight\">Wars</span> news, history, interviews, trivia, and deep dives into the <span class=\"ln-search-highlight\">Star</span> <span class=\"ln-search-highlight\">Wars</span> story as told in movies, books, comics, games, cartoons, and more.\n",
  "description_original": "The Star Wars 7x7 Podcast is Rebel-rousing fun for everyday Jedi, between 7 and 14 minutes a day, 7 days a week. Join host Allen Voivod for Star Wars news, history, interviews, trivia, and deep dives into the Star Wars story as told in movies, books, comics, games, cartoons, and more. Subscribe now for your daily dose of Star Wars joy. It's destiny unleashed! #SW7x7\n",
  "earliest_pub_date_ms": 1470667902000,
  "email": "hello@example.com",
  "explicit_content": false,
  "genre_ids": [
    138,
    86,
    160,
    68,
    82,
    100,
    101
  ],
  "id": "4d3fe717742d4963a85562e9f84d8c79",
  "image": "https://cdn-images-1.listennotes.com/podcasts/exponent-ben-thompson-james-allworth-OaJSjb4xQv3.1400x1400.jpg",
  "itunes_id": 896354638,
  "latest_episode_id": "d057092e57cc4ced80e0efaa196593d9",
  "latest_pub_date_ms": 1557499770000,
  "listen_score": 81,
  "listen_score_global_rank": "0.5%",
  "listennotes_url": "https://www.listennotes.com/c/4d3fe717742d4963a85562e9f84d8c79/",
  "publisher_highlighted": "<span class=\\\"ln-search-highlight\\\">Star</span> <span class=\\\"ln-search-highlight\\\">Wars</span> Daily, by Allen Voivod",
  "publisher_original": "Star Wars Daily, by Allen Voivod",
  "rss": "https://sw7x7.libsyn.com/rss",
  "thumbnail": "https://cdn-images-1.listennotes.com/podcasts/exponent-ben-thompson-james-allworth-OaJSjb4xQv3.300x300.jpg",
  "title_highlighted": "<span class=\\\"ln-search-highlight\\\">Star</span> <span class=\\\"ln-search-highlight\\\">Wars</span> 7x7 | <span class=\\\"ln-search-highlight\\\">Star</span> <span class=\\\"ln-search-highlight\\\">Wars</span> News, Interviews, and More!",
  "title_original": "Star Wars 7x7 | Star Wars News, Interviews, and More!",
  "total_episodes": 324,
  "update_frequency_hours": 168,
  "website": "http://sw7x7.com/"
}
```

When **type** is *podcast*.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|audio_length_sec|[AvgAudioLengthSecField](#schemaavgaudiolengthsecfield)|false|none|Average audio length of all episodes of this podcast. In seconds.|
|description_highlighted|string|false|none|Highlighted segment of podcast description|
|description_original|string|false|none|Plain text of podcast description|
|earliest_pub_date_ms|[EarliestPubDateMsField](#schemaearliestpubdatemsfield)|false|none|The published date of the oldest episode of this podcast. In milliseconds|
|email|[EmailField](#schemaemailfield)|false|none|The email of this podcast's producer. This field is available only in the PRO/ENTERPRISE plan.|
|explicit_content|[ExplicitField](#schemaexplicitfield)|false|none|Whether this podcast contains explicit language.|
|genre_ids|[GenreIdsField](#schemagenreidsfield)|false|none|none|
|id|[PodcastIdField](#schemapodcastidfield)|false|none|Podcast id, which can be used to further fetch detailed podcast metadata via `GET /podcasts/{id}`.|
|image|[ImageField](#schemaimagefield)|false|none|Image url for this podcast's artwork. If you are using PRO/ENTERPRISE plan, then it's<br>a high resolution image (1400x1400). If you are using FREE plan, then it's the same as **thumbnail**,<br>low resolution image (300x300).<br>|
|itunes_id|[iTunesIdField](#schemaitunesidfield)|false|none|iTunes id for this podcast.|
|latest_episode_id|[LatestEpisodeIdField](#schemalatestepisodeidfield)|false|none|The id of the most recently published episode of this podcast, which can be used to further fetch detailed episode metadata via `GET /episodes/{id}`.|
|latest_pub_date_ms|[LatestPubDateMsField](#schemalatestpubdatemsfield)|false|none|The published date of the latest episode of this podcast. In milliseconds|
|listen_score|[ListenScoreField](#schemalistenscorefield)|false|none|The estimated popularity score of a podcast compared to all other rss-based public podcasts in the world on a scale from 0 to 100.<br>If the score is not available, it'll be null. Learn more at listennotes.com/listen-score<br>|
|listen_score_global_rank|[ListenScoreGlobalRankField](#schemalistenscoreglobalrankfield)|false|none|The estimated popularity ranking of a podcast compared to all other rss-based public podcasts in the world.<br>For example, if the value is 0.5%, then this podcast is one of the top 0.5% most popular shows out of all podcasts globally, ranked by Listen Score.<br>If the ranking is not available, it'll be null. Learn more at listennotes.com/listen-score<br>|
|listennotes_url|[PodcastLNUrlField](#schemapodcastlnurlfield)|false|none|The url of this podcast on [ListenNotes.com](https://www.ListenNotes.com).|
|publisher_highlighted|[PublisherHighlightedField](#schemapublisherhighlightedfield)|false|none|Highlighted segment of this podcast's publisher name.|
|publisher_original|[PublisherOriginalField](#schemapublisheroriginalfield)|false|none|Plain text of this podcast's publisher name.|
|rss|[RssField](#schemarssfield)|false|none|RSS url of this podcast. This field is available only in the PRO/ENTERPRISE plan.|
|thumbnail|[ThumbnailField](#schemathumbnailfield)|false|none|Thumbnail image url for this podcast's artwork (300x300).|
|title_highlighted|[PodcastTitleHighlightedField](#schemapodcasttitlehighlightedfield)|false|none|Highlighted segment of podcast name.|
|title_original|[PodcastTitleOriginalField](#schemapodcasttitleoriginalfield)|false|none|Plain text of podcast name.|
|total_episodes|[TotalEpisodesField](#schematotalepisodesfield)|false|none|Total number of episodes in this podcast.|
|update_frequency_hours|[UpdateFrequencyHoursField](#schemaupdatefrequencyhoursfield)|false|none|How frequently does this podcast release a new episode? In hours. For example, if the value is 166, then it's every 166 hours (or weekly).|
|website|[WebsiteField](#schemawebsitefield)|false|none|Website url of this podcast.|

<h2 id="tocS_PodcastSimple">PodcastSimple</h2>
<!-- backwards compatibility -->
<a id="schemapodcastsimple"></a>
<a id="schema_PodcastSimple"></a>
<a id="tocSpodcastsimple"></a>
<a id="tocspodcastsimple"></a>

```json
{
  "audio_length_sec": 1291,
  "country": "United States",
  "description": "<p>The Star Wars 7x7 Podcast is Rebel-rousing fun for everyday Jedi, between 7 and 14 minutes a day, 7 days a week. Join host Allen Voivod for Star Wars news, history, interviews, trivia, and deep dives into the Star Wars story as told in movies, books, comics, games, cartoons, and more. Subscribe now for your daily dose of Star Wars joy. It's destiny unleashed!</p>",
  "earliest_pub_date_ms": 1470667902000,
  "email": "hello@example.com",
  "explicit_content": false,
  "extra": {
    "amazon_music_url": "https://music.amazon.com/podcasts/6fc6d683-9ef3-4850-9c35-8e8b1a42a147/the-lock-sportscast",
    "facebook_handle": "sw7x7",
    "google_url": "https://podcasts.google.com/feed/aHR0cHM6Ly9yc3MuYXJ0MTkuY29tL2pvaG4tc29sb21vbi1yZXBvcnRz",
    "instagram_handle": "sw7x7",
    "linkedin_url": "string",
    "patreon_handle": "sw7x7",
    "spotify_url": "https://open.spotify.com/show/2rQJUP9Y3HxemiW3JHt9WV",
    "twitter_handle": "SW7x7podcast",
    "url1": "string",
    "url2": "string",
    "url3": "string",
    "wechat_handle": "string",
    "youtube_url": "https://www.youtube.com/sw7x7"
  },
  "genre_ids": [
    138,
    86,
    160,
    68,
    82,
    100,
    101
  ],
  "id": "4d3fe717742d4963a85562e9f84d8c79",
  "image": "https://cdn-images-1.listennotes.com/podcasts/exponent-ben-thompson-james-allworth-OaJSjb4xQv3.1400x1400.jpg",
  "is_claimed": true,
  "itunes_id": 896354638,
  "language": "English",
  "latest_episode_id": "d057092e57cc4ced80e0efaa196593d9",
  "latest_pub_date_ms": 1557499770000,
  "listen_score": 81,
  "listen_score_global_rank": "0.5%",
  "listennotes_url": "https://www.listennotes.com/c/4d3fe717742d4963a85562e9f84d8c79/",
  "looking_for": {
    "cohosts": true,
    "cross_promotion": true,
    "guests": true,
    "sponsors": true
  },
  "publisher": "Planet Broadcasting",
  "rss": "https://sw7x7.libsyn.com/rss",
  "thumbnail": "https://cdn-images-1.listennotes.com/podcasts/exponent-ben-thompson-james-allworth-OaJSjb4xQv3.300x300.jpg",
  "title": "Star Wars 7x7 | Star Wars News, Interviews, and More!",
  "total_episodes": 324,
  "type": "episodic",
  "update_frequency_hours": 168,
  "website": "http://sw7x7.com/"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|audio_length_sec|[AvgAudioLengthSecField](#schemaavgaudiolengthsecfield)|false|none|Average audio length of all episodes of this podcast. In seconds.|
|country|[CountryField](#schemacountryfield)|false|none|The country where this podcast is produced.|
|description|[PodcastDescriptionField](#schemapodcastdescriptionfield)|false|none|Html of this episode's full description|
|earliest_pub_date_ms|[EarliestPubDateMsField](#schemaearliestpubdatemsfield)|false|none|The published date of the oldest episode of this podcast. In milliseconds|
|email|[EmailField](#schemaemailfield)|false|none|The email of this podcast's producer. This field is available only in the PRO/ENTERPRISE plan.|
|explicit_content|[ExplicitField](#schemaexplicitfield)|false|none|Whether this podcast contains explicit language.|
|extra|[PodcastExtraField](#schemapodcastextrafield)|false|none|none|
|genre_ids|[GenreIdsField](#schemagenreidsfield)|false|none|none|
|id|[PodcastIdField](#schemapodcastidfield)|false|none|Podcast id, which can be used to further fetch detailed podcast metadata via `GET /podcasts/{id}`.|
|image|[ImageField](#schemaimagefield)|false|none|Image url for this podcast's artwork. If you are using PRO/ENTERPRISE plan, then it's<br>a high resolution image (1400x1400). If you are using FREE plan, then it's the same as **thumbnail**,<br>low resolution image (300x300).<br>|
|is_claimed|[IsClaimedField](#schemaisclaimedfield)|false|none|Whether this podcast is claimed by its producer on [ListenNotes.com](https://www.ListenNotes.com).|
|itunes_id|[iTunesIdField](#schemaitunesidfield)|false|none|iTunes id for this podcast.|
|language|[LanguageField](#schemalanguagefield)|false|none|The language of this podcast. You can get all supported languages from `GET /languages`.|
|latest_episode_id|[LatestEpisodeIdField](#schemalatestepisodeidfield)|false|none|The id of the most recently published episode of this podcast, which can be used to further fetch detailed episode metadata via `GET /episodes/{id}`.|
|latest_pub_date_ms|[LatestPubDateMsField](#schemalatestpubdatemsfield)|false|none|The published date of the latest episode of this podcast. In milliseconds|
|listen_score|[ListenScoreField](#schemalistenscorefield)|false|none|The estimated popularity score of a podcast compared to all other rss-based public podcasts in the world on a scale from 0 to 100.<br>If the score is not available, it'll be null. Learn more at listennotes.com/listen-score<br>|
|listen_score_global_rank|[ListenScoreGlobalRankField](#schemalistenscoreglobalrankfield)|false|none|The estimated popularity ranking of a podcast compared to all other rss-based public podcasts in the world.<br>For example, if the value is 0.5%, then this podcast is one of the top 0.5% most popular shows out of all podcasts globally, ranked by Listen Score.<br>If the ranking is not available, it'll be null. Learn more at listennotes.com/listen-score<br>|
|listennotes_url|[PodcastLNUrlField](#schemapodcastlnurlfield)|false|none|The url of this podcast on [ListenNotes.com](https://www.ListenNotes.com).|
|looking_for|[PodcastLookingForField](#schemapodcastlookingforfield)|false|none|none|
|publisher|[PublisherField](#schemapublisherfield)|false|none|Podcast publisher name.|
|rss|[RssField](#schemarssfield)|false|none|RSS url of this podcast. This field is available only in the PRO/ENTERPRISE plan.|
|thumbnail|[ThumbnailField](#schemathumbnailfield)|false|none|Thumbnail image url for this podcast's artwork (300x300).|
|title|[PodcastNameField](#schemapodcastnamefield)|false|none|Podcast name.|
|total_episodes|[TotalEpisodesField](#schematotalepisodesfield)|false|none|Total number of episodes in this podcast.|
|type|[PodcastTypeField](#schemapodcasttypefield)|false|none|The type of this podcast - episodic or serial.|
|update_frequency_hours|[UpdateFrequencyHoursField](#schemaupdatefrequencyhoursfield)|false|none|How frequently does this podcast release a new episode? In hours. For example, if the value is 166, then it's every 166 hours (or weekly).|
|website|[WebsiteField](#schemawebsitefield)|false|none|Website url of this podcast.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|episodic|
|type|serial|

<h2 id="tocS_PodcastTitleHighlightedField">PodcastTitleHighlightedField</h2>
<!-- backwards compatibility -->
<a id="schemapodcasttitlehighlightedfield"></a>
<a id="schema_PodcastTitleHighlightedField"></a>
<a id="tocSpodcasttitlehighlightedfield"></a>
<a id="tocspodcasttitlehighlightedfield"></a>

```json
"<span class=\\\"ln-search-highlight\\\">Star</span> <span class=\\\"ln-search-highlight\\\">Wars</span> 7x7 | <span class=\\\"ln-search-highlight\\\">Star</span> <span class=\\\"ln-search-highlight\\\">Wars</span> News, Interviews, and More!"
```

Highlighted segment of podcast name.

<h2 id="tocS_PodcastTitleOriginalField">PodcastTitleOriginalField</h2>
<!-- backwards compatibility -->
<a id="schemapodcasttitleoriginalfield"></a>
<a id="schema_PodcastTitleOriginalField"></a>
<a id="tocSpodcasttitleoriginalfield"></a>
<a id="tocspodcasttitleoriginalfield"></a>

```json
"Star Wars 7x7 | Star Wars News, Interviews, and More!"
```

Plain text of podcast name.

<h2 id="tocS_PodcastTypeField">PodcastTypeField</h2>
<!-- backwards compatibility -->
<a id="schemapodcasttypefield"></a>
<a id="schema_PodcastTypeField"></a>
<a id="tocSpodcasttypefield"></a>
<a id="tocspodcasttypefield"></a>

```json
"episodic"
```

The type of this podcast - episodic or serial.

<h2 id="tocS_PodcastTypeaheadResult">PodcastTypeaheadResult</h2>
<!-- backwards compatibility -->
<a id="schemapodcasttypeaheadresult"></a>
<a id="schema_PodcastTypeaheadResult"></a>
<a id="tocSpodcasttypeaheadresult"></a>
<a id="tocspodcasttypeaheadresult"></a>

```json
{
  "explicit_content": false,
  "id": "4d3fe717742d4963a85562e9f84d8c79",
  "image": "https://cdn-images-1.listennotes.com/podcasts/exponent-ben-thompson-james-allworth-OaJSjb4xQv3.1400x1400.jpg",
  "publisher_highlighted": "<span class=\\\"ln-search-highlight\\\">Star</span> <span class=\\\"ln-search-highlight\\\">Wars</span> Daily, by Allen Voivod",
  "publisher_original": "Star Wars Daily, by Allen Voivod",
  "thumbnail": "https://cdn-images-1.listennotes.com/podcasts/exponent-ben-thompson-james-allworth-OaJSjb4xQv3.300x300.jpg",
  "title_highlighted": "<span class=\\\"ln-search-highlight\\\">Star</span> <span class=\\\"ln-search-highlight\\\">Wars</span> 7x7 | <span class=\\\"ln-search-highlight\\\">Star</span> <span class=\\\"ln-search-highlight\\\">Wars</span> News, Interviews, and More!",
  "title_original": "Star Wars 7x7 | Star Wars News, Interviews, and More!"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|explicit_content|[ExplicitField](#schemaexplicitfield)|false|none|Whether this podcast contains explicit language.|
|id|[PodcastIdField](#schemapodcastidfield)|false|none|Podcast id, which can be used to further fetch detailed podcast metadata via `GET /podcasts/{id}`.|
|image|[ImageField](#schemaimagefield)|false|none|Image url for this podcast's artwork. If you are using PRO/ENTERPRISE plan, then it's<br>a high resolution image (1400x1400). If you are using FREE plan, then it's the same as **thumbnail**,<br>low resolution image (300x300).<br>|
|publisher_highlighted|[PublisherHighlightedField](#schemapublisherhighlightedfield)|false|none|Highlighted segment of this podcast's publisher name.|
|publisher_original|[PublisherOriginalField](#schemapublisheroriginalfield)|false|none|Plain text of this podcast's publisher name.|
|thumbnail|[ThumbnailField](#schemathumbnailfield)|false|none|Thumbnail image url for this podcast's artwork (300x300).|
|title_highlighted|[PodcastTitleHighlightedField](#schemapodcasttitlehighlightedfield)|false|none|Highlighted segment of podcast name.|
|title_original|[PodcastTitleOriginalField](#schemapodcasttitleoriginalfield)|false|none|Plain text of podcast name.|

<h2 id="tocS_PublisherField">PublisherField</h2>
<!-- backwards compatibility -->
<a id="schemapublisherfield"></a>
<a id="schema_PublisherField"></a>
<a id="tocSpublisherfield"></a>
<a id="tocspublisherfield"></a>

```json
"Planet Broadcasting"
```

Podcast publisher name.

<h2 id="tocS_PublisherHighlightedField">PublisherHighlightedField</h2>
<!-- backwards compatibility -->
<a id="schemapublisherhighlightedfield"></a>
<a id="schema_PublisherHighlightedField"></a>
<a id="tocSpublisherhighlightedfield"></a>
<a id="tocspublisherhighlightedfield"></a>

```json
"<span class=\\\"ln-search-highlight\\\">Star</span> <span class=\\\"ln-search-highlight\\\">Wars</span> Daily, by Allen Voivod"
```

Highlighted segment of this podcast's publisher name.

<h2 id="tocS_PublisherOriginalField">PublisherOriginalField</h2>
<!-- backwards compatibility -->
<a id="schemapublisheroriginalfield"></a>
<a id="schema_PublisherOriginalField"></a>
<a id="tocSpublisheroriginalfield"></a>
<a id="tocspublisheroriginalfield"></a>

```json
"Star Wars Daily, by Allen Voivod"
```

Plain text of this podcast's publisher name.

<h2 id="tocS_RelatedSearchesResponse">RelatedSearchesResponse</h2>
<!-- backwards compatibility -->
<a id="schemarelatedsearchesresponse"></a>
<a id="schema_RelatedSearchesResponse"></a>
<a id="tocSrelatedsearchesresponse"></a>
<a id="tocsrelatedsearchesresponse"></a>

```json
{
  "terms": [
    "evergrande stock",
    "evergrande china",
    "evergrande group",
    "evergrande news"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|terms|[string]|true|none|Related search terms|

<h2 id="tocS_RssField">RssField</h2>
<!-- backwards compatibility -->
<a id="schemarssfield"></a>
<a id="schema_RssField"></a>
<a id="tocSrssfield"></a>
<a id="tocsrssfield"></a>

```json
"https://sw7x7.libsyn.com/rss"
```

RSS url of this podcast. This field is available only in the PRO/ENTERPRISE plan.

<h2 id="tocS_SearchResponse">SearchResponse</h2>
<!-- backwards compatibility -->
<a id="schemasearchresponse"></a>
<a id="schema_SearchResponse"></a>
<a id="tocSsearchresponse"></a>
<a id="tocssearchresponse"></a>

```json
{
  "count": 10,
  "next_offset": 10,
  "results": [
    {
      "audio": "https://www.listennotes.com/e/p/11b34041e804491b9704d11f283c74de/",
      "audio_length_sec": 567,
      "description_highlighted": "...Go to http://Patreon.com/sw7x7 to donate to the <span class=\"ln-search-highlight\">Star</span> <span class=\"ln-search-highlight\">Wars</span> 7x7 podcast, and you'll get some fabulous rewards for your pledge.***  Check out SW7x7.com for full <span class=\"ln-search-highlight\">Star</span> <span class=\"ln-search-highlight\">Wars</span> 7x7 show notes and links, and to\n",
      "description_original": "Yeah, Star Wars Celebration Orlando is 32 days away, but what's the scoop on Celebration 2018? Plus, Rebels Day is Saturday, and much more in our update. Punch it! ***We're listener supported! Go to http://Patreon.com/sw7x7 to donate to the Star Wars 7x7 podcast, and youâ€™ll get some fabulous rewards for your pledge.***  Check out SW7x7.com for full Star Wars 7x7 show notes and links, and to comment on any of the content of this episode! If you like what you've heard, please leave us a rating or review on iTunes or Stitcher, which will also help more people discover this Star Wars podcast. Don't forget to join the Star Wars 7x7 fun on Facebook at Facebook.com/SW7x7, and follow the breaking news Twitter feed at Twitter.com/SW7x7Podcast. We're also on Pinterest and Instagram as \"SW7x7\" too, and we'd love to connect with you there!\n",
      "explicit_content": false,
      "id": "4d82e50314174754a3b603912448e812",
      "image": "https://cdn-images-1.listennotes.com/podcasts/exponent-ben-thompson-james-allworth-OaJSjb4xQv3.1400x1400.jpg",
      "itunes_id": 896354638,
      "link": "https://www.npr.org/2020/01/22/798532179/soleimanis-iran",
      "listennotes_url": "https://www.listennotes.com/e/4d82e50314174754a3b603912448e812/",
      "podcast": {
        "genre_ids": [
          138,
          86,
          160,
          68,
          82,
          100,
          101
        ],
        "id": "4d3fe717742d4963a85562e9f84d8c79",
        "image": "https://cdn-images-1.listennotes.com/podcasts/exponent-ben-thompson-james-allworth-OaJSjb4xQv3.1400x1400.jpg",
        "listen_score": 81,
        "listen_score_global_rank": "0.5%",
        "listennotes_url": "https://www.listennotes.com/c/4d3fe717742d4963a85562e9f84d8c79/",
        "publisher_highlighted": "<span class=\\\"ln-search-highlight\\\">Star</span> <span class=\\\"ln-search-highlight\\\">Wars</span> Daily, by Allen Voivod",
        "publisher_original": "Star Wars Daily, by Allen Voivod",
        "thumbnail": "https://cdn-images-1.listennotes.com/podcasts/exponent-ben-thompson-james-allworth-OaJSjb4xQv3.300x300.jpg",
        "title_highlighted": "<span class=\\\"ln-search-highlight\\\">Star</span> <span class=\\\"ln-search-highlight\\\">Wars</span> 7x7 | <span class=\\\"ln-search-highlight\\\">Star</span> <span class=\\\"ln-search-highlight\\\">Wars</span> News, Interviews, and More!",
        "title_original": "Star Wars 7x7 | Star Wars News, Interviews, and More!"
      },
      "pub_date_ms": 1474873200000,
      "rss": "https://sw7x7.libsyn.com/rss",
      "thumbnail": "https://cdn-images-1.listennotes.com/podcasts/exponent-ben-thompson-james-allworth-OaJSjb4xQv3.300x300.jpg",
      "title_highlighted": "815: <span class=\"ln-search-highlight\">Star</span> <span class=\"ln-search-highlight\">Wars</span> 2020 Movie and Beyond!",
      "title_original": "815: Star Wars 2020 Movie and Beyond!",
      "transcripts_highlighted": [
        "00:21:27  when Disney bought the <span class=\"ln-search-highlight\">Star</span> <span class=\"ln-search-highlight\">Wars</span> franchise from George Lucas they had a plan lots of <span class=\"ln-search-highlight\">Star</span> <span class=\"ln-search-highlight\">Wars</span> movies new <span class=\"ln-search-highlight\">Star</span> <span class=\"ln-search-highlight\">Wars</span> movies every month another one was just released while I was talking\n"
      ]
    }
  ],
  "took": 0.093,
  "total": 1989
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|false|none|The number of search results in this page.|
|next_offset|integer|false|none|Pass this value to the **offset** parameter to do pagination of search results.|
|results|[[EpisodeSearchResult](#schemaepisodesearchresult) \| [PodcastSearchResult](#schemapodcastsearchresult) \| [CuratedListSearchResult](#schemacuratedlistsearchresult)]|false|none|A list of search results.|
|took|number|false|none|The time it took to fetch these search results. In seconds.|
|total|integer|false|none|The total number of search results.|

<h2 id="tocS_SpellCheckResponse">SpellCheckResponse</h2>
<!-- backwards compatibility -->
<a id="schemaspellcheckresponse"></a>
<a id="schema_SpellCheckResponse"></a>
<a id="tocSspellcheckresponse"></a>
<a id="tocsspellcheckresponse"></a>

```json
{
  "corrected_text_html": "<b><i>evergrande</i></b> stock",
  "tokens": [
    {
      "offset": 5,
      "suggestion": "evergrande",
      "token": "evergrand"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|corrected_text_html|string|true|none|The corrected text for the entire search term (multiple words/tokens), where misspelled tokens are replaced with the correct texts and html tags <b><i>|
|tokens|[object]|true|none|The word in the text query string that is not spelled correctly|

<h2 id="tocS_SubmitPodcastForm">SubmitPodcastForm</h2>
<!-- backwards compatibility -->
<a id="schemasubmitpodcastform"></a>
<a id="schema_SubmitPodcastForm"></a>
<a id="tocSsubmitpodcastform"></a>
<a id="tocssubmitpodcastform"></a>

```json
{
  "email": "hello@example.com",
  "rss": "https://feeds.megaphone.fm/committed"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|false|none|A valid email address. If **email** is specified, then we'll notify this email address once the podcast is accepted.|
|rss|string|true|none|A valid podcast rss url.|

<h2 id="tocS_SubmitPodcastResponse">SubmitPodcastResponse</h2>
<!-- backwards compatibility -->
<a id="schemasubmitpodcastresponse"></a>
<a id="schema_SubmitPodcastResponse"></a>
<a id="tocSsubmitpodcastresponse"></a>
<a id="tocssubmitpodcastresponse"></a>

```json
{
  "podcast": {
    "id": "4d3fe717742d4963a85562e9f84d8c79",
    "image": "https://cdn-images-1.listennotes.com/podcasts/exponent-ben-thompson-james-allworth-OaJSjb4xQv3.1400x1400.jpg",
    "listen_score": 81,
    "listen_score_global_rank": "0.5%",
    "listennotes_url": "https://www.listennotes.com/c/4d3fe717742d4963a85562e9f84d8c79/",
    "publisher": "Planet Broadcasting",
    "thumbnail": "https://cdn-images-1.listennotes.com/podcasts/exponent-ben-thompson-james-allworth-OaJSjb4xQv3.300x300.jpg",
    "title": "Star Wars 7x7 | Star Wars News, Interviews, and More!"
  },
  "status": "found"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|podcast|[PodcastMinimum](#schemapodcastminimum)|true|none|none|
|status|string|true|none|The status of this submission.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|found|
|status|in review|
|status|rejected|

<h2 id="tocS_ThumbnailField">ThumbnailField</h2>
<!-- backwards compatibility -->
<a id="schemathumbnailfield"></a>
<a id="schema_ThumbnailField"></a>
<a id="tocSthumbnailfield"></a>
<a id="tocsthumbnailfield"></a>

```json
"https://cdn-images-1.listennotes.com/podcasts/exponent-ben-thompson-james-allworth-OaJSjb4xQv3.300x300.jpg"
```

Thumbnail image url for this podcast's artwork (300x300).

<h2 id="tocS_TotalEpisodesField">TotalEpisodesField</h2>
<!-- backwards compatibility -->
<a id="schematotalepisodesfield"></a>
<a id="schema_TotalEpisodesField"></a>
<a id="tocStotalepisodesfield"></a>
<a id="tocstotalepisodesfield"></a>

```json
324
```

Total number of episodes in this podcast.

<h2 id="tocS_TranscriptField">TranscriptField</h2>
<!-- backwards compatibility -->
<a id="schematranscriptfield"></a>
<a id="schema_TranscriptField"></a>
<a id="tocStranscriptfield"></a>
<a id="tocstranscriptfield"></a>

```json
"00:00:07 Welcome to this podcast...\n"
```

The transcript of this episode, in plain text (with the newline character \n). If there's not transcript, it is null. This field is available only in the PRO/ENTERPRISE plan.

<h2 id="tocS_TrendingSearchesResponse">TrendingSearchesResponse</h2>
<!-- backwards compatibility -->
<a id="schematrendingsearchesresponse"></a>
<a id="schema_TrendingSearchesResponse"></a>
<a id="tocStrendingsearchesresponse"></a>
<a id="tocstrendingsearchesresponse"></a>

```json
{
  "terms": [
    "Taliban",
    "Andrew Cuomo",
    "john McAfee"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|terms|[string]|true|none|Trending search terms|

<h2 id="tocS_TypeaheadResponse">TypeaheadResponse</h2>
<!-- backwards compatibility -->
<a id="schematypeaheadresponse"></a>
<a id="schema_TypeaheadResponse"></a>
<a id="tocStypeaheadresponse"></a>
<a id="tocstypeaheadresponse"></a>

```json
{
  "genres": [
    {
      "id": 140,
      "name": "Web Design",
      "parent_id": 127
    }
  ],
  "podcasts": [
    {
      "explicit_content": false,
      "id": "4d3fe717742d4963a85562e9f84d8c79",
      "image": "https://cdn-images-1.listennotes.com/podcasts/exponent-ben-thompson-james-allworth-OaJSjb4xQv3.1400x1400.jpg",
      "publisher_highlighted": "<span class=\\\"ln-search-highlight\\\">Star</span> <span class=\\\"ln-search-highlight\\\">Wars</span> Daily, by Allen Voivod",
      "publisher_original": "Star Wars Daily, by Allen Voivod",
      "thumbnail": "https://cdn-images-1.listennotes.com/podcasts/exponent-ben-thompson-james-allworth-OaJSjb4xQv3.300x300.jpg",
      "title_highlighted": "<span class=\\\"ln-search-highlight\\\">Star</span> <span class=\\\"ln-search-highlight\\\">Wars</span> 7x7 | <span class=\\\"ln-search-highlight\\\">Star</span> <span class=\\\"ln-search-highlight\\\">Wars</span> News, Interviews, and More!",
      "title_original": "Star Wars 7x7 | Star Wars News, Interviews, and More!"
    }
  ],
  "terms": [
    "startup sales",
    "startup",
    "startups",
    "star wars"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|genres|[[Genre](#schemagenre)]|false|none|Genre suggestions. It'll show up when the **show_genres** parameter is *1*.|
|podcasts|[[PodcastTypeaheadResult](#schemapodcasttypeaheadresult)]|false|none|Podcast suggestions. It'll show up when the **show_podcasts** parameter is 1.|
|terms|[string]|true|none|Search term suggestions.|

<h2 id="tocS_UpdateFrequencyHoursField">UpdateFrequencyHoursField</h2>
<!-- backwards compatibility -->
<a id="schemaupdatefrequencyhoursfield"></a>
<a id="schema_UpdateFrequencyHoursField"></a>
<a id="tocSupdatefrequencyhoursfield"></a>
<a id="tocsupdatefrequencyhoursfield"></a>

```json
168
```

How frequently does this podcast release a new episode? In hours. For example, if the value is 166, then it's every 166 hours (or weekly).

<h2 id="tocS_WebsiteField">WebsiteField</h2>
<!-- backwards compatibility -->
<a id="schemawebsitefield"></a>
<a id="schema_WebsiteField"></a>
<a id="tocSwebsitefield"></a>
<a id="tocswebsitefield"></a>

```json
"http://sw7x7.com/"
```

Website url of this podcast.

<h2 id="tocS_iTunesIdField">iTunesIdField</h2>
<!-- backwards compatibility -->
<a id="schemaitunesidfield"></a>
<a id="schema_iTunesIdField"></a>
<a id="tocSitunesidfield"></a>
<a id="tocsitunesidfield"></a>

```json
896354638
```

iTunes id for this podcast.
