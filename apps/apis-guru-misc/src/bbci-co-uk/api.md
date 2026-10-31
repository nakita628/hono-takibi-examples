<h1 id="bbc-iplayer-business-layer">BBC iPlayer Business Layer v1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The definitive iPlayer API.

Base URLs:

* <a href="https://ibl.api.bbci.co.uk/ibl/v1">https://ibl.api.bbci.co.uk/ibl/v1</a>

* <a href="http://ibl.api.bbci.co.uk/ibl/v1">http://ibl.api.bbci.co.uk/ibl/v1</a>

Email: <a href="mailto:ibl-team@lists.forge.bbc.co.uk">Open iBL Project</a> 
Web: <a href="http://developer.bbc.co.uk/">Open iBL Project</a> 
License: <a href="https://opensource.org/licenses/MIT">MIT</a>

<a href="http://smethur.st/posts/176135860">BBC iPlayer documentation</a>

# Authentication

* API Key (api_key)
    - Parameter Name: **api_key**, in: query.

- HTTP Authentication, scheme: basic Used only by store purchases.

<h1 id="bbc-iplayer-business-layer-a-to-z">A to Z</h1>

## Programmes by initial title character

<a id="opIdGet_Programmes AtoZ search_"></a>

> Code samples

```bash
curl 'https://example.com/atoz/string/programmes?rights=web&page=0&per_page=0&initial_child_count=4&sort=title&sort_direction=asc&availability=available' \
  -H 'Accept: application/json'
```

`GET /atoz/{letter}/programmes`

Get the Programmes whose title begins with the given initial character.

<h3 id="programmes-by-initial-title-character-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|letter|path|string|true|Letter to search by, a to z or the string '0-9'|
|rights|query|string|true|The rights group to limit results to.|
|page|query|integer(int64)|true|The page index.|
|per_page|query|integer(int64)|true|The number of results to return.|
|initial_child_count|query|integer|true|The depth to return child entities.|
|sort|query|string|true|The sort order of the results.|
|sort_direction|query|string|true|Whether to sort ascending or descending|
|availability|query|string|true|Whether to return all, or available programmes|

#### Enumerated Values

|Parameter|Value|
|---|---|
|rights|mobile|
|rights|tv|
|rights|web|
|sort|title|
|sort_direction|asc|
|sort_direction|desc|
|availability|all|
|availability|available|

> Example responses

> 200 Response

```json
null
```

<h3 id="programmes-by-initial-title-character-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default response|[ibl](#schemaibl)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="bbc-iplayer-business-layer-categories">Categories</h1>

## Get categories

<a id="opIdGet_Categories_"></a>

> Code samples

```bash
curl 'https://example.com/categories?lang=en' \
  -H 'Accept: application/json'
```

`GET /categories`

Get the list of all the categories in TV & iPlayer.

<h3 id="get-categories-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|lang|query|string|true|The language for any applicable localised strings.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|lang|en|
|lang|cy|
|lang|ga|
|lang|gd|
|lang|pi|

> Example responses

> 200 Response

```json
null
```

<h3 id="get-categories-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default response|[ibl](#schemaibl)|

<aside class="success">
This operation does not require authentication
</aside>

## Get sub-categories

<a id="opIdGet_Sub-categories_"></a>

> Code samples

```bash
curl 'https://example.com/categories/string?lang=en' \
  -H 'Accept: application/json'
```

`GET /categories/{category}`

Get sub-categories

<h3 id="get-sub-categories-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|category|path|string|true|The category identifier to return results from.|
|lang|query|string|true|The language for any applicable localised strings.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|lang|en|
|lang|cy|
|lang|ga|
|lang|gd|
|lang|pi|

> Example responses

> 200 Response

```json
null
```

<h3 id="get-sub-categories-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default response|[ibl](#schemaibl)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="bbc-iplayer-business-layer-episodes">Episodes</h1>

## List all the episodes for a category.

<a id="opIdGet_Episodes by category_"></a>

> Code samples

```bash
curl 'https://example.com/categories/string/episodes?lang=en&rights=web&availability=available&page=0&per_page=0' \
  -H 'Accept: application/json'
```

`GET /categories/{category}/episodes`

Get the list of all the episodes for a given category in TV & iPlayer.

<h3 id="list-all-the-episodes-for-a-category-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|category|path|string|true|The category identifier to return results from.|
|lang|query|string|true|The language for any applicable localised strings.|
|rights|query|string|true|The rights group to limit results to.|
|availability|query|string|true|Whether to return all, or available programmes|
|page|query|integer(int64)|true|The page index.|
|per_page|query|integer(int64)|true|The number of results to return.|
|sort|query|string|false|The sort order of the results.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|lang|en|
|lang|cy|
|lang|ga|
|lang|gd|
|lang|pi|
|rights|mobile|
|rights|tv|
|rights|web|
|availability|all|
|availability|available|
|sort|recent|
|sort|popular|

> Example responses

> 200 Response

```json
null
```

<h3 id="list-all-the-episodes-for-a-category-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default response|[ibl](#schemaibl)|

<aside class="success">
This operation does not require authentication
</aside>

## Get Clips

<a id="opIdGet_Clips_"></a>

> Code samples

```bash
curl 'https://example.com/clips/stringst?rights=web&availability=available' \
  -H 'Accept: application/json'
```

`GET /clips/{pid}`

Get Clips

<h3 id="get-clips-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pid|path|string|true|The programme identifier.|
|rights|query|string|true|The rights group to limit results to.|
|availability|query|string|true|Whether to return all, or available programmes|

#### Enumerated Values

|Parameter|Value|
|---|---|
|rights|mobile|
|rights|tv|
|rights|web|
|availability|all|
|availability|available|

> Example responses

> 200 Response

```json
null
```

<h3 id="get-clips-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default response|[ibl](#schemaibl)|

<aside class="success">
This operation does not require authentication
</aside>

## Episode for a given pid.

<a id="opIdGet_Programme by PID_"></a>

> Code samples

```bash
curl 'https://example.com/episodes/stringst?rights=web&availability=available' \
  -H 'Accept: application/json'
```

`GET /episodes/{pid}`

Get the episode for a given episode identifier.

<h3 id="episode-for-a-given-pid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pid|path|string|true|The programme identifier.|
|rights|query|string|true|The rights group to limit results to.|
|availability|query|string|true|Whether to return all, or available programmes|
|mixin|query|[string]|false|Request additional data in the output|

#### Enumerated Values

|Parameter|Value|
|---|---|
|rights|mobile|
|rights|tv|
|rights|web|
|availability|all|
|availability|available|
|mixin|live|
|mixin|promotions|

> Example responses

> 200 Response

```json
null
```

<h3 id="episode-for-a-given-pid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default response|[ibl](#schemaibl)|

<aside class="success">
This operation does not require authentication
</aside>

## Get Onward Journey

<a id="opIdGet_Onward_Journey"></a>

> Code samples

```bash
curl 'https://example.com/episodes/stringst/next?rights=web&availability=available' \
  -H 'Accept: application/json'
```

`GET /episodes/{pid}/next`

Get Onward Journey (next programme)

<h3 id="get-onward-journey-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pid|path|string|true|The programme identifier.|
|rights|query|string|true|The rights group to limit results to.|
|availability|query|string|true|Whether to return all, or available programmes|

#### Enumerated Values

|Parameter|Value|
|---|---|
|rights|mobile|
|rights|tv|
|rights|web|
|availability|all|
|availability|available|

> Example responses

> 200 Response

```json
null
```

<h3 id="get-onward-journey-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default response|[ibl](#schemaibl)|

<aside class="success">
This operation does not require authentication
</aside>

## Get Follow-ups (post-rolls)

<a id="opIdgetPostRolls"></a>

> Code samples

```bash
curl 'https://example.com/episodes/stringst/postrolls?rights=web&availability=available' \
  -H 'Accept: application/json'
```

`GET /episodes/{pid}/postrolls`

Get Follow-ups (post-rolls)

<h3 id="get-follow-ups-post-rolls-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pid|path|string|true|The programme identifier.|
|rights|query|string|true|The rights group to limit results to.|
|availability|query|string|true|Whether to return all, or available programmes|

#### Enumerated Values

|Parameter|Value|
|---|---|
|rights|mobile|
|rights|tv|
|rights|web|
|availability|all|
|availability|available|

> Example responses

> 200 Response

```json
null
```

<h3 id="get-follow-ups-post-rolls-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default response|[ibl](#schemaibl)|

<aside class="success">
This operation does not require authentication
</aside>

## Get Trailers (pre-rolls)

<a id="opIdGet_Trailers (pre-rolls)_"></a>

> Code samples

```bash
curl 'https://example.com/episodes/stringst/prerolls?rights=web&availability=available' \
  -H 'Accept: application/json'
```

`GET /episodes/{pid}/prerolls`

Get Trailers (pre-rolls)

<h3 id="get-trailers-pre-rolls-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pid|path|string|true|The programme identifier.|
|rights|query|string|true|The rights group to limit results to.|
|availability|query|string|true|Whether to return all, or available programmes|

#### Enumerated Values

|Parameter|Value|
|---|---|
|rights|mobile|
|rights|tv|
|rights|web|
|availability|all|
|availability|available|

> Example responses

> 200 Response

```json
null
```

<h3 id="get-trailers-pre-rolls-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default response|[ibl](#schemaibl)|

<aside class="success">
This operation does not require authentication
</aside>

## Get programme recommendations

<a id="opIdGet_Programme recommendations_"></a>

> Code samples

```bash
curl 'https://example.com/episodes/stringst/recommendations?rights=web&availability=available&page=0&per_page=0' \
  -H 'Accept: application/json'
```

`GET /episodes/{pid}/recommendations`

Get programme recommendations

<h3 id="get-programme-recommendations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pid|path|string|true|The programme identifier.|
|rights|query|string|true|The rights group to limit results to.|
|availability|query|string|true|Whether to return all, or available programmes|
|page|query|integer(int64)|true|The page index.|
|per_page|query|integer(int64)|true|The number of results to return.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|rights|mobile|
|rights|tv|
|rights|web|
|availability|all|
|availability|available|

> Example responses

> 200 Response

```json
null
```

<h3 id="get-programme-recommendations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default response|[ibl](#schemaibl)|

<aside class="success">
This operation does not require authentication
</aside>

## Get programmes popular

<a id="opIdGet_Programmes popular_"></a>

> Code samples

```bash
curl 'https://example.com/groups/popular/episodes?rights=web&page=0&per_page=0&initial_child_count=4&sort=string&sort_direction=asc&availability=available' \
  -H 'Accept: application/json'
```

`GET /groups/popular/episodes`

Get programmes popular

<h3 id="get-programmes-popular-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rights|query|string|true|The rights group to limit results to.|
|page|query|integer(int64)|true|The page index.|
|per_page|query|integer(int64)|true|The number of results to return.|
|initial_child_count|query|integer|true|The depth to return child entities.|
|sort|query|string|true|The sort order of the results.|
|sort_direction|query|string|true|Whether to sort ascending or descending|
|availability|query|string|true|Whether to return all, or available programmes|
|mixin|query|[string]|false|Request additional data in the output|

#### Enumerated Values

|Parameter|Value|
|---|---|
|rights|mobile|
|rights|tv|
|rights|web|
|sort_direction|asc|
|sort_direction|desc|
|availability|all|
|availability|available|
|mixin|live|
|mixin|promotions|

> Example responses

> 200 Response

```json
null
```

<h3 id="get-programmes-popular-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default response|[ibl](#schemaibl)|

<aside class="success">
This operation does not require authentication
</aside>

## Get episodes by group, brand or series

<a id="opIdGet_Episodes by group_"></a>

> Code samples

```bash
curl 'https://example.com/groups/stringst/episodes?rights=web&page=0&per_page=0&initial_child_count=4&sort=string&sort_direction=asc&availability=available' \
  -H 'Accept: application/json'
```

`GET /groups/{pid}/episodes`

Get episodes by group, brand or series

<h3 id="get-episodes-by-group-brand-or-series-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pid|path|string|true|The programme identifier.|
|rights|query|string|true|The rights group to limit results to.|
|page|query|integer(int64)|true|The page index.|
|per_page|query|integer(int64)|true|The number of results to return.|
|initial_child_count|query|integer|true|The depth to return child entities.|
|sort|query|string|true|The sort order of the results.|
|sort_direction|query|string|true|Whether to sort ascending or descending|
|availability|query|string|true|Whether to return all, or available programmes|
|mixin|query|[string]|false|Request additional data in the output|

#### Enumerated Values

|Parameter|Value|
|---|---|
|rights|mobile|
|rights|tv|
|rights|web|
|sort_direction|asc|
|sort_direction|desc|
|availability|all|
|availability|available|
|mixin|live|
|mixin|promotions|

> Example responses

> 200 Response

```json
null
```

<h3 id="get-episodes-by-group-brand-or-series-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default response|[ibl](#schemaibl)|

<aside class="success">
This operation does not require authentication
</aside>

## Child episodes for a given programme pid.

<a id="opIdGet_Episodes by parent PID_"></a>

> Code samples

```bash
curl 'https://example.com/programmes/stringst/episodes?rights=web&availability=available&initial_child_count=4' \
  -H 'Accept: application/json'
```

`GET /programmes/{pid}/episodes`

Get the child episodes belonging to a given programme identifier.

<h3 id="child-episodes-for-a-given-programme-pid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pid|path|string|true|The programme identifier.|
|rights|query|string|true|The rights group to limit results to.|
|availability|query|string|true|Whether to return all, or available programmes|
|initial_child_count|query|integer|true|The depth to return child entities.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|rights|mobile|
|rights|tv|
|rights|web|
|availability|all|
|availability|available|

> Example responses

> 200 Response

```json
null
```

<h3 id="child-episodes-for-a-given-programme-pid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default response|[ibl](#schemaibl)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="bbc-iplayer-business-layer-programmes-tleos">Programmes (TLEOs)</h1>

## List the highlights for a category.

<a id="opIdGet_Highlights by category_"></a>

> Code samples

```bash
curl 'https://example.com/categories/string/highlights?lang=en&rights=web&availability=available' \
  -H 'Accept: application/json'
```

`GET /categories/{category}/highlights`

Get the editorial highlights of a given category in TV & iPlayer.

<h3 id="list-the-highlights-for-a-category-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|category|path|string|true|The category identifier to return results from.|
|lang|query|string|true|The language for any applicable localised strings.|
|rights|query|string|true|The rights group to limit results to.|
|availability|query|string|true|Whether to return all, or available programmes|
|mixin|query|[string]|false|Request additional data in the output|

#### Enumerated Values

|Parameter|Value|
|---|---|
|lang|en|
|lang|cy|
|lang|ga|
|lang|gd|
|lang|pi|
|rights|mobile|
|rights|tv|
|rights|web|
|availability|all|
|availability|available|
|mixin|live|
|mixin|promotions|

> Example responses

> 200 Response

```json
null
```

<h3 id="list-the-highlights-for-a-category-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default response|[ibl](#schemaibl)|

<aside class="success">
This operation does not require authentication
</aside>

## List all the programmes for a category.

<a id="opIdGet_Programmes by category_"></a>

> Code samples

```bash
curl 'https://example.com/categories/string/programmes?lang=en&rights=web&availability=available&page=0&per_page=0' \
  -H 'Accept: application/json'
```

`GET /categories/{category}/programmes`

Get the list of all the Programmes (TLEOs) for a given category in TV & iPlayer.

<h3 id="list-all-the-programmes-for-a-category-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|category|path|string|true|The category identifier to return results from.|
|lang|query|string|true|The language for any applicable localised strings.|
|rights|query|string|true|The rights group to limit results to.|
|availability|query|string|true|Whether to return all, or available programmes|
|page|query|integer(int64)|true|The page index.|
|per_page|query|integer(int64)|true|The number of results to return.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|lang|en|
|lang|cy|
|lang|ga|
|lang|gd|
|lang|pi|
|rights|mobile|
|rights|tv|
|rights|web|
|availability|all|
|availability|available|

> Example responses

> 200 Response

```json
null
```

<h3 id="list-all-the-programmes-for-a-category-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default response|[ibl](#schemaibl)|

<aside class="success">
This operation does not require authentication
</aside>

## Get broadcasts by channel

<a id="opIdGet_Broadcasts by channel_"></a>

> Code samples

```bash
curl 'https://example.com/channels/string/broadcasts?lang=en&rights=web&availability=available&per_page=0' \
  -H 'Accept: application/json'
```

`GET /channels/{channel}/broadcasts`

Get broadcasts by channel

<h3 id="get-broadcasts-by-channel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|channel|path|string|true|The channel identifier to limit results to.|
|lang|query|string|true|The language for any applicable localised strings.|
|rights|query|string|true|The rights group to limit results to.|
|availability|query|string|true|Whether to return all, or available programmes|
|mixin|query|[string]|false|Request additional data in the output|
|per_page|query|integer(int64)|true|The number of results to return.|
|from|query|string|false|Time to return results from, e.g. -3h|

#### Enumerated Values

|Parameter|Value|
|---|---|
|lang|en|
|lang|cy|
|lang|ga|
|lang|gd|
|lang|pi|
|rights|mobile|
|rights|tv|
|rights|web|
|availability|all|
|availability|available|
|mixin|live|
|mixin|promotions|

> Example responses

> 200 Response

```json
null
```

<h3 id="get-broadcasts-by-channel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default response|[ibl](#schemaibl)|

<aside class="success">
This operation does not require authentication
</aside>

## Get programmes by channel

<a id="opIdGet_Programmes by channel_"></a>

> Code samples

```bash
curl 'https://example.com/channels/string/programmes?lang=en&rights=web&availability=available&page=0&per_page=0' \
  -H 'Accept: application/json'
```

`GET /channels/{channel}/programmes`

Get programmes by channel

<h3 id="get-programmes-by-channel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|channel|path|string|true|The channel identifier to limit results to.|
|lang|query|string|true|The language for any applicable localised strings.|
|rights|query|string|true|The rights group to limit results to.|
|availability|query|string|true|Whether to return all, or available programmes|
|page|query|integer(int64)|true|The page index.|
|per_page|query|integer(int64)|true|The number of results to return.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|lang|en|
|lang|cy|
|lang|ga|
|lang|gd|
|lang|pi|
|rights|mobile|
|rights|tv|
|rights|web|
|availability|all|
|availability|available|

> Example responses

> 200 Response

```json
null
```

<h3 id="get-programmes-by-channel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default response|[ibl](#schemaibl)|

<aside class="success">
This operation does not require authentication
</aside>

## Get programme highlights

<a id="opIdGet_Programme highlights_"></a>

> Code samples

```bash
curl 'https://example.com/home/highlights?lang=en&rights=web&availability=available' \
  -H 'Accept: application/json'
```

`GET /home/highlights`

Get programme highlights

<h3 id="get-programme-highlights-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|lang|query|string|true|The language for any applicable localised strings.|
|rights|query|string|true|The rights group to limit results to.|
|availability|query|string|true|Whether to return all, or available programmes|
|mixin|query|[string]|false|Request additional data in the output|

#### Enumerated Values

|Parameter|Value|
|---|---|
|lang|en|
|lang|cy|
|lang|ga|
|lang|gd|
|lang|pi|
|rights|mobile|
|rights|tv|
|rights|web|
|availability|all|
|availability|available|
|mixin|live|
|mixin|promotions|

> Example responses

> 200 Response

```json
null
```

<h3 id="get-programme-highlights-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default response|[ibl](#schemaibl)|

<aside class="success">
This operation does not require authentication
</aside>

## Programme for a given pid.

<a id="opIdGet_Programmes by parent PID_"></a>

> Code samples

```bash
curl 'https://example.com/programmes/stringst?rights=web&availability=available&initial_child_count=4' \
  -H 'Accept: application/json'
```

`GET /programmes/{pid}`

Get the programme for a given programme identifier.

<h3 id="programme-for-a-given-pid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pid|path|string|true|The programme identifier.|
|rights|query|string|true|The rights group to limit results to.|
|availability|query|string|true|Whether to return all, or available programmes|
|initial_child_count|query|integer|true|The depth to return child entities.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|rights|mobile|
|rights|tv|
|rights|web|
|availability|all|
|availability|available|

> Example responses

> 200 Response

```json
null
```

<h3 id="programme-for-a-given-pid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default response|[ibl](#schemaibl)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="bbc-iplayer-business-layer-channels">Channels</h1>

## List all the channels.

<a id="opIdGet_Channels_"></a>

> Code samples

```bash
curl 'https://example.com/channels?lang=en' \
  -H 'Accept: application/json'
```

`GET /channels`

Get the list of all the channels TV & iPlayer.

<h3 id="list-all-the-channels-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|region|query|string|false|The region to get the channels for.|
|lang|query|string|true|The language for any applicable localised strings.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|lang|en|
|lang|cy|
|lang|ga|
|lang|gd|
|lang|pi|

> Example responses

> 200 Response

```json
null
```

<h3 id="list-all-the-channels-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default response|[ibl](#schemaibl)|

<aside class="success">
This operation does not require authentication
</aside>

## List the highlights for a channel.

<a id="opIdGet_Highlights by channel_"></a>

> Code samples

```bash
curl 'https://example.com/channels/string/highlights?lang=en&rights=web&availability=available' \
  -H 'Accept: application/json'
```

`GET /channels/{channel}/highlights`

Get the editorial highlights of a given channel in TV & iPlayer.

<h3 id="list-the-highlights-for-a-channel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|channel|path|string|true|The channel identifier to limit results to.|
|lang|query|string|true|The language for any applicable localised strings.|
|rights|query|string|true|The rights group to limit results to.|
|availability|query|string|true|Whether to return all, or available programmes|
|live|query|boolean|false|Whether to include live programmes|
|mixin|query|[string]|false|Request additional data in the output|

#### Enumerated Values

|Parameter|Value|
|---|---|
|lang|en|
|lang|cy|
|lang|ga|
|lang|gd|
|lang|pi|
|rights|mobile|
|rights|tv|
|rights|web|
|availability|all|
|availability|available|
|mixin|live|
|mixin|promotions|

> Example responses

> 200 Response

```json
null
```

<h3 id="list-the-highlights-for-a-channel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default response|[ibl](#schemaibl)|

<aside class="success">
This operation does not require authentication
</aside>

## Get schedule by channel

<a id="opIdGet_Schedule by channel_"></a>

> Code samples

```bash
curl 'https://example.com/channels/string/schedule/string?lang=en&rights=web&availability=available' \
  -H 'Accept: application/json'
```

`GET /channels/{channel}/schedule/{date}`

Get schedule by channel

<h3 id="get-schedule-by-channel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|channel|path|string|true|The channel identifier to limit results to.|
|date|path|string|true|The date to return the schedule for, yyyy-mm-dd format|
|lang|query|string|true|The language for any applicable localised strings.|
|rights|query|string|true|The rights group to limit results to.|
|availability|query|string|true|Whether to return all, or available programmes|

#### Enumerated Values

|Parameter|Value|
|---|---|
|lang|en|
|lang|cy|
|lang|ga|
|lang|gd|
|lang|pi|
|rights|mobile|
|rights|tv|
|rights|web|
|availability|all|
|availability|available|

> Example responses

> 200 Response

```json
null
```

<h3 id="get-schedule-by-channel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default response|[ibl](#schemaibl)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="bbc-iplayer-business-layer-regions">Regions</h1>

## List all regions

<a id="opIdGet_Regions_"></a>

> Code samples

```bash
curl 'https://example.com/regions?lang=en' \
  -H 'Accept: application/json'
```

`GET /regions`

Get the list of all the regions TV & iPlayer.

<h3 id="list-all-regions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|lang|query|string|true|The language for any applicable localised strings.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|lang|en|
|lang|cy|
|lang|ga|
|lang|gd|
|lang|pi|

> Example responses

> 200 Response

```json
null
```

<h3 id="list-all-regions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default response|[ibl](#schemaibl)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="bbc-iplayer-business-layer-metadata">Metadata</h1>

## Get schema

<a id="opIdGet_Schema_"></a>

> Code samples

```bash
curl https://example.com/schema/ibl.json \
  -H 'Accept: application/json'
```

`GET /schema/ibl.json`

Get schema

> Example responses

> 200 Response

```json
null
```

<h3 id="get-schema-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default response|[ibl](#schemaibl)|

<aside class="success">
This operation does not require authentication
</aside>

## Get status

<a id="opIdGet_Status_"></a>

> Code samples

```bash
curl https://example.com/status \
  -H 'Accept: application/json'
```

`GET /status`

Get the current iPlayer business layer status. This tells the caller the status of the iPlayer data, but not necessarily the overall status of the website. In the future it might include the status of the dependent data services within the BBC.

> Example responses

> 200 Response

```json
null
```

<h3 id="get-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default response|[ibl](#schemaibl)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="bbc-iplayer-business-layer-search">Search</h1>

## Search

<a id="opIdSearch_"></a>

> Code samples

```bash
curl 'https://example.com/search?q=string&lang=en&rights=web&availability=available' \
  -H 'Accept: application/json'
```

`GET /search`

Search

<h3 id="search-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|q|query|string|true|The term to search for.|
|lang|query|string|true|The language for any applicable localised strings.|
|rights|query|string|true|The rights group to limit results to.|
|availability|query|string|true|Whether to return all, or available programmes|

#### Enumerated Values

|Parameter|Value|
|---|---|
|lang|en|
|lang|cy|
|lang|ga|
|lang|gd|
|lang|pi|
|rights|mobile|
|rights|tv|
|rights|web|
|availability|all|
|availability|available|

> Example responses

> 200 Response

```json
null
```

<h3 id="search-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default response|[ibl](#schemaibl)|

<aside class="success">
This operation does not require authentication
</aside>

## Search-suggest

<a id="opIdSearch-suggest_"></a>

> Code samples

```bash
curl 'https://example.com/search-suggest?q=string&lang=en&rights=web&availability=available' \
  -H 'Accept: application/json'
```

`GET /search-suggest`

Search-suggest

<h3 id="search-suggest-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|q|query|string|true|The term to search for.|
|lang|query|string|true|The language for any applicable localised strings.|
|rights|query|string|true|The rights group to limit results to.|
|availability|query|string|true|Whether to return all, or available programmes|

#### Enumerated Values

|Parameter|Value|
|---|---|
|lang|en|
|lang|cy|
|lang|ga|
|lang|gd|
|lang|pi|
|rights|mobile|
|rights|tv|
|rights|web|
|availability|all|
|availability|available|

> Example responses

> 200 Response

```json
null
```

<h3 id="search-suggest-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default response|[ibl](#schemaibl)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="bbc-iplayer-business-layer-user">User</h1>

## Get user store purchases

<a id="opIdGet_User store purchases_"></a>

> Code samples

```bash
curl 'https://example.com/user/purchases?identity_cookie=0' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /user/purchases`

Get user store purchases

<h3 id="get-user-store-purchases-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|identity_cookie|query|number(double)|true|The BBC-id cookie value|

> Example responses

> 200 Response

```json
null
```

<h3 id="get-user-store-purchases-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default response|[ibl](#schemaibl)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic
</aside>

## Get user store recommendations

<a id="opIdGet_User store recommendations_"></a>

> Code samples

```bash
curl 'https://example.com/user/recommendations?identity_cookie=0' \
  -H 'Accept: application/json'
```

`GET /user/recommendations`

Get user store recommendations

<h3 id="get-user-store-recommendations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|identity_cookie|query|number(double)|true|The BBC-id cookie value|

> Example responses

> 200 Response

```json
null
```

<h3 id="get-user-store-recommendations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default response|[ibl](#schemaibl)|

<aside class="success">
This operation does not require authentication
</aside>

## Get user watching

<a id="opIdGet_User watching_"></a>

> Code samples

```bash
curl 'https://example.com/user/watching?identity_cookie=0' \
  -H 'Accept: application/json'
```

`GET /user/watching`

Get user watching

<h3 id="get-user-watching-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|identity_cookie|query|number(double)|true|The BBC-id cookie value|

> Example responses

> 200 Response

```json
null
```

<h3 id="get-user-watching-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default response|[ibl](#schemaibl)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_added">added</h2>
<!-- backwards compatibility -->
<a id="schemaadded"></a>
<a id="schema_added"></a>
<a id="tocSadded"></a>
<a id="tocsadded"></a>

```json
{
  "programme": {
    "categories": [
      "string"
    ],
    "count": 0,
    "id": "string",
    "images": {
      "inherited_from": "string",
      "standard": "string",
      "type": "image"
    },
    "initial_children": [
      {
        "audio_described": true,
        "categories": [
          "string"
        ],
        "childrens": true,
        "editorial_subtitle": "string",
        "editorial_title": "string",
        "event_group_id": "string",
        "guidance": true,
        "has_credits": true,
        "id": "string",
        "images": {
          "character_image": "string",
          "inherited_from": "string",
          "live": "string",
          "portrait": "string",
          "promotional": "string",
          "promotional_with_logo": "string",
          "standard": "string",
          "type": "image"
        },
        "labels": {
          "category": "string",
          "editorial": "string",
          "editorial_category": "string",
          "time": "string"
        },
        "lexical_sort_letter": "string",
        "live": true,
        "live_subtitle": "string",
        "live_title": "string",
        "master_brand": {
          "attribution": "string",
          "id": "string",
          "ident_id": "string",
          "titles": {
            "large": "string",
            "medium": "string",
            "small": "string"
          }
        },
        "next_broadcast": {
          "channel_title": "string",
          "scheduled_start": "string"
        },
        "numeric_tleo_position": 0,
        "original_title": "string",
        "parent_id": "string",
        "parent_position": 0,
        "preview_id": "string",
        "programme_type": "narrative",
        "promoted": true,
        "related_links": [
          {
            "id": "string",
            "kind": "string",
            "title": "string",
            "type": "link",
            "url": "string"
          }
        ],
        "release_date": "string",
        "release_date_time": "string",
        "requires_ab": [
          "u13"
        ],
        "requires_sign_in": true,
        "requires_tv_licence": true,
        "signed": true,
        "slice_id": "string",
        "slice_subtitle": "string",
        "status": "available",
        "subtitle": "string",
        "synopses": {
          "editorial": "string",
          "large": "string",
          "live": "string",
          "medium": "string",
          "preview": "string",
          "programme_small": "string",
          "small": "string"
        },
        "tests": [
          {
            "id": "string",
            "status": "active",
            "variants": [
              {
                "data": {
                  "images": {
                    "standard": "string",
                    "type": "episode"
                  }
                },
                "id": "string"
              }
            ]
          }
        ],
        "title": "string",
        "tleo_id": "string",
        "tleo_type": "episode",
        "type": "episode",
        "versions": [
          {
            "availability": {
              "accurate_start": "string",
              "end": "string",
              "remaining": {
                "text": "string"
              },
              "start": "string"
            },
            "credits_start": 0,
            "download": true,
            "duration": {
              "text": "string",
              "value": "string"
            },
            "events": [
              {
                "name": "string",
                "offset": 0,
                "system": "string"
              }
            ],
            "first_broadcast": "string",
            "first_broadcast_date_time": "string",
            "guidance": {
              "id": "string",
              "text": {
                "large": "string",
                "medium": "string",
                "small": "string"
              }
            },
            "hd": true,
            "id": "string",
            "interactions": [
              {
                "interaction_points": {
                  "show_from": 0,
                  "skip_to": 0
                },
                "subtype": "string",
                "title": {
                  "long": "string",
                  "short": "string"
                },
                "type": "string"
              }
            ],
            "kind": "legal",
            "rrc": {
              "description": {
                "large": "string",
                "small": "string"
              },
              "url": "string"
            },
            "service_id": "string",
            "type": "version",
            "uhd": true
          }
        ]
      }
    ],
    "labels": {
      "category": "string"
    },
    "lexical_sort_letter": "string",
    "master_brand": {
      "attribution": "string",
      "id": "string",
      "ident_id": "string",
      "titles": {
        "large": "string",
        "medium": "string",
        "small": "string"
      }
    },
    "programme_type": "narrative",
    "status": "available",
    "synopses": {
      "large": "string",
      "medium": "string",
      "small": "string"
    },
    "title": "string",
    "tleo_type": "brand",
    "type": "programme"
  },
  "type": "added",
  "urn": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|programme|[programme](#schemaprogramme)|true|none|none|
|type|string|true|none|none|
|urn|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|added|

<h2 id="tocS_broadcast">broadcast</h2>
<!-- backwards compatibility -->
<a id="schemabroadcast"></a>
<a id="schema_broadcast"></a>
<a id="tocSbroadcast"></a>
<a id="tocsbroadcast"></a>

```json
{
  "available_on_hd_service": "string",
  "blanked": true,
  "channel_title": "string",
  "duration": {
    "text": "string",
    "value": "string"
  },
  "episode": {
    "audio_described": true,
    "categories": [
      "string"
    ],
    "childrens": true,
    "editorial_subtitle": "string",
    "editorial_title": "string",
    "event_group_id": "string",
    "guidance": true,
    "has_credits": true,
    "id": "string",
    "images": {
      "character_image": "string",
      "inherited_from": "string",
      "live": "string",
      "portrait": "string",
      "promotional": "string",
      "promotional_with_logo": "string",
      "standard": "string",
      "type": "image"
    },
    "labels": {
      "category": "string",
      "editorial": "string",
      "editorial_category": "string",
      "time": "string"
    },
    "lexical_sort_letter": "string",
    "live": true,
    "live_subtitle": "string",
    "live_title": "string",
    "master_brand": {
      "attribution": "string",
      "id": "string",
      "ident_id": "string",
      "titles": {
        "large": "string",
        "medium": "string",
        "small": "string"
      }
    },
    "next_broadcast": {
      "channel_title": "string",
      "scheduled_start": "string"
    },
    "numeric_tleo_position": 0,
    "original_title": "string",
    "parent_id": "string",
    "parent_position": 0,
    "preview_id": "string",
    "programme_type": "narrative",
    "promoted": true,
    "related_links": [
      {
        "id": "string",
        "kind": "string",
        "title": "string",
        "type": "link",
        "url": "string"
      }
    ],
    "release_date": "string",
    "release_date_time": "string",
    "requires_ab": [
      "u13"
    ],
    "requires_sign_in": true,
    "requires_tv_licence": true,
    "signed": true,
    "slice_id": "string",
    "slice_subtitle": "string",
    "status": "available",
    "subtitle": "string",
    "synopses": {
      "editorial": "string",
      "large": "string",
      "live": "string",
      "medium": "string",
      "preview": "string",
      "programme_small": "string",
      "small": "string"
    },
    "tests": [
      {
        "id": "string",
        "status": "active",
        "variants": [
          {
            "data": {
              "images": {
                "standard": "string",
                "type": "episode"
              }
            },
            "id": "string"
          }
        ]
      }
    ],
    "title": "string",
    "tleo_id": "string",
    "tleo_type": "episode",
    "type": "episode",
    "versions": [
      {
        "availability": {
          "accurate_start": "string",
          "end": "string",
          "remaining": {
            "text": "string"
          },
          "start": "string"
        },
        "credits_start": 0,
        "download": true,
        "duration": {
          "text": "string",
          "value": "string"
        },
        "events": [
          {
            "name": "string",
            "offset": 0,
            "system": "string"
          }
        ],
        "first_broadcast": "string",
        "first_broadcast_date_time": "string",
        "guidance": {
          "id": "string",
          "text": {
            "large": "string",
            "medium": "string",
            "small": "string"
          }
        },
        "hd": true,
        "id": "string",
        "interactions": [
          {
            "interaction_points": {
              "show_from": 0,
              "skip_to": 0
            },
            "subtype": "string",
            "title": {
              "long": "string",
              "short": "string"
            },
            "type": "string"
          }
        ],
        "kind": "legal",
        "rrc": {
          "description": {
            "large": "string",
            "small": "string"
          },
          "url": "string"
        },
        "service_id": "string",
        "type": "version",
        "uhd": true
      }
    ]
  },
  "episode_id": "string",
  "events": [
    {
      "name": "string",
      "system": "string",
      "time": "string"
    }
  ],
  "id": "string",
  "repeat": true,
  "scheduled_end": "string",
  "scheduled_start": "string",
  "service_id": "string",
  "transmission_end": "string",
  "transmission_start": "string",
  "type": "broadcast",
  "version_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|available_on_hd_service|string \| null|false|none|none|
|blanked|boolean|true|none|none|
|channel_title|string|false|none|none|
|duration|object|false|none|none|
|episode|[episode](#schemaepisode)|true|none|none|
|episode_id|string|true|none|none|
|events|[object]|false|none|none|
|id|string|true|none|none|
|repeat|boolean|true|none|none|
|scheduled_end|string|true|none|none|
|scheduled_start|string|true|none|none|
|service_id|string|true|none|none|
|transmission_end|string|false|none|none|
|transmission_start|string|false|none|none|
|type|string|true|none|none|
|version_id|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|broadcast|

<h2 id="tocS_category">category</h2>
<!-- backwards compatibility -->
<a id="schemacategory"></a>
<a id="schema_category"></a>
<a id="tocScategory"></a>
<a id="tocscategory"></a>

```json
{
  "child_episode_count": 0,
  "child_programme_count": 0,
  "contextual_title": "string",
  "id": "string",
  "kind": "genre",
  "parent_category": "string",
  "sub_categories": [
    {
      "child_episode_count": 0,
      "child_programme_count": 0,
      "contextual_title": "string",
      "id": "string",
      "kind": "genre",
      "parent_category": "string",
      "sub_categories": [
        {}
      ],
      "title": "string",
      "type": "category"
    }
  ],
  "title": "string",
  "type": "category"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|child_episode_count|number|false|none|none|
|child_programme_count|number|false|none|none|
|contextual_title|string|false|none|none|
|id|string|true|none|none|
|kind|string|true|none|none|
|parent_category|string|false|none|none|
|sub_categories|[[category](#schemacategory)]|false|none|none|
|title|string|true|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|kind|genre|
|kind|accessibility|
|kind|national|
|kind|childrens|
|type|category|

<h2 id="tocS_channel">channel</h2>
<!-- backwards compatibility -->
<a id="schemachannel"></a>
<a id="schema_channel"></a>
<a id="tocSchannel"></a>
<a id="tocschannel"></a>

```json
{
  "has_schedule": true,
  "id": "string",
  "master_brand_id": "string",
  "master_brand_title": "string",
  "on_air": true,
  "title": "string",
  "type": "channel"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|has_schedule|boolean|true|none|none|
|id|string|true|none|none|
|master_brand_id|string|true|none|none|
|master_brand_title|string|true|none|none|
|on_air|boolean|false|none|none|
|title|string|true|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|channel|

<h2 id="tocS_clip">clip</h2>
<!-- backwards compatibility -->
<a id="schemaclip"></a>
<a id="schema_clip"></a>
<a id="tocSclip"></a>
<a id="tocsclip"></a>

```json
{
  "id": "string",
  "images": {
    "inherited_from": "string",
    "standard": "string",
    "type": "image"
  },
  "labels": {
    "category": "string",
    "editorial": "string"
  },
  "master_brand": {
    "attribution": "string",
    "id": "string",
    "ident_id": "string",
    "titles": {
      "large": "string",
      "medium": "string",
      "small": "string"
    }
  },
  "onward_journey": {
    "id": "string",
    "type": "episode"
  },
  "promotion_type": "available_now",
  "synopses": {
    "editorial": "string",
    "large": "string",
    "medium": "string",
    "small": "string"
  },
  "title": "string",
  "tleo_id": "string",
  "tleo_type": "episode",
  "type": "clip",
  "versions": [
    {
      "availability": {
        "accurate_start": "string",
        "end": "string",
        "remaining": {
          "text": "string"
        },
        "start": "string"
      },
      "credits_start": 0,
      "download": true,
      "duration": {
        "text": "string",
        "value": "string"
      },
      "events": [
        {
          "name": "string",
          "offset": 0,
          "system": "string"
        }
      ],
      "first_broadcast": "string",
      "first_broadcast_date_time": "string",
      "guidance": {
        "id": "string",
        "text": {
          "large": "string",
          "medium": "string",
          "small": "string"
        }
      },
      "hd": true,
      "id": "string",
      "interactions": [
        {
          "interaction_points": {
            "show_from": 0,
            "skip_to": 0
          },
          "subtype": "string",
          "title": {
            "long": "string",
            "short": "string"
          },
          "type": "string"
        }
      ],
      "kind": "legal",
      "rrc": {
        "description": {
          "large": "string",
          "small": "string"
        },
        "url": "string"
      },
      "service_id": "string",
      "type": "version",
      "uhd": true
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|images|object|true|none|none|
|labels|object|false|none|none|
|master_brand|[master_brand](#schemamaster_brand)|true|none|none|
|onward_journey|object|false|none|none|
|promotion_type|string|false|none|none|
|synopses|object|true|none|none|
|title|string|true|none|none|
|tleo_id|string|true|none|none|
|tleo_type|string|false|none|none|
|type|string|true|none|none|
|versions|[object]|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|promotion_type|available_now|
|promotion_type|coming_soon|
|tleo_type|episode|
|tleo_type|brand|
|tleo_type|series|
|type|clip|

<h2 id="tocS_episode">episode</h2>
<!-- backwards compatibility -->
<a id="schemaepisode"></a>
<a id="schema_episode"></a>
<a id="tocSepisode"></a>
<a id="tocsepisode"></a>

```json
{
  "audio_described": true,
  "categories": [
    "string"
  ],
  "childrens": true,
  "editorial_subtitle": "string",
  "editorial_title": "string",
  "event_group_id": "string",
  "guidance": true,
  "has_credits": true,
  "id": "string",
  "images": {
    "character_image": "string",
    "inherited_from": "string",
    "live": "string",
    "portrait": "string",
    "promotional": "string",
    "promotional_with_logo": "string",
    "standard": "string",
    "type": "image"
  },
  "labels": {
    "category": "string",
    "editorial": "string",
    "editorial_category": "string",
    "time": "string"
  },
  "lexical_sort_letter": "string",
  "live": true,
  "live_subtitle": "string",
  "live_title": "string",
  "master_brand": {
    "attribution": "string",
    "id": "string",
    "ident_id": "string",
    "titles": {
      "large": "string",
      "medium": "string",
      "small": "string"
    }
  },
  "next_broadcast": {
    "channel_title": "string",
    "scheduled_start": "string"
  },
  "numeric_tleo_position": 0,
  "original_title": "string",
  "parent_id": "string",
  "parent_position": 0,
  "preview_id": "string",
  "programme_type": "narrative",
  "promoted": true,
  "related_links": [
    {
      "id": "string",
      "kind": "string",
      "title": "string",
      "type": "link",
      "url": "string"
    }
  ],
  "release_date": "string",
  "release_date_time": "string",
  "requires_ab": [
    "u13"
  ],
  "requires_sign_in": true,
  "requires_tv_licence": true,
  "signed": true,
  "slice_id": "string",
  "slice_subtitle": "string",
  "status": "available",
  "subtitle": "string",
  "synopses": {
    "editorial": "string",
    "large": "string",
    "live": "string",
    "medium": "string",
    "preview": "string",
    "programme_small": "string",
    "small": "string"
  },
  "tests": [
    {
      "id": "string",
      "status": "active",
      "variants": [
        {
          "data": {
            "images": {
              "standard": "string",
              "type": "episode"
            }
          },
          "id": "string"
        }
      ]
    }
  ],
  "title": "string",
  "tleo_id": "string",
  "tleo_type": "episode",
  "type": "episode",
  "versions": [
    {
      "availability": {
        "accurate_start": "string",
        "end": "string",
        "remaining": {
          "text": "string"
        },
        "start": "string"
      },
      "credits_start": 0,
      "download": true,
      "duration": {
        "text": "string",
        "value": "string"
      },
      "events": [
        {
          "name": "string",
          "offset": 0,
          "system": "string"
        }
      ],
      "first_broadcast": "string",
      "first_broadcast_date_time": "string",
      "guidance": {
        "id": "string",
        "text": {
          "large": "string",
          "medium": "string",
          "small": "string"
        }
      },
      "hd": true,
      "id": "string",
      "interactions": [
        {
          "interaction_points": {
            "show_from": 0,
            "skip_to": 0
          },
          "subtype": "string",
          "title": {
            "long": "string",
            "short": "string"
          },
          "type": "string"
        }
      ],
      "kind": "legal",
      "rrc": {
        "description": {
          "large": "string",
          "small": "string"
        },
        "url": "string"
      },
      "service_id": "string",
      "type": "version",
      "uhd": true
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|audio_described|boolean|true|none|none|
|categories|[string]|true|none|none|
|childrens|boolean|false|none|none|
|editorial_subtitle|string|false|none|none|
|editorial_title|string|false|none|none|
|event_group_id|string|false|none|none|
|guidance|boolean|true|none|none|
|has_credits|boolean|false|none|none|
|id|string|true|none|none|
|images|object|true|none|none|
|labels|object|false|none|none|
|lexical_sort_letter|string|true|none|none|
|live|boolean|false|none|none|
|live_subtitle|string|false|none|none|
|live_title|string|false|none|none|
|master_brand|[master_brand](#schemamaster_brand)|true|none|none|
|next_broadcast|object|false|none|none|
|numeric_tleo_position|number|false|none|none|
|original_title|string|false|none|none|
|parent_id|string|false|none|none|
|parent_position|number|false|none|none|
|preview_id|string|false|none|none|
|programme_type|string|false|none|none|
|promoted|boolean|false|none|none|
|related_links|[object]|false|none|none|
|release_date|string|false|none|none|
|release_date_time|string|false|none|none|
|requires_ab|[string]|false|none|none|
|requires_sign_in|boolean|true|none|none|
|requires_tv_licence|boolean|false|none|none|
|signed|boolean|true|none|none|
|slice_id|string|false|none|none|
|slice_subtitle|string|false|none|none|
|status|string|true|none|none|
|subtitle|string|false|none|none|
|synopses|object|true|none|none|
|tests|[object]|false|none|none|
|title|string|true|none|none|
|tleo_id|string|true|none|none|
|tleo_type|string|true|none|none|
|type|string|true|none|none|
|versions|[object]|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|programme_type|narrative|
|programme_type|sequential|
|programme_type|self-contained|
|programme_type|strand|
|programme_type|unclassified|
|programme_type|one-off|
|requires_ab|u13|
|requires_ab|u16|
|requires_ab|u18|
|requires_ab|o18|
|status|available|
|status|unavailable|
|tleo_type|episode|
|tleo_type|brand|
|tleo_type|series|
|type|episode|
|type|episode_large|

<h2 id="tocS_group">group</h2>
<!-- backwards compatibility -->
<a id="schemagroup"></a>
<a id="schema_group"></a>
<a id="tocSgroup"></a>
<a id="tocsgroup"></a>

```json
{
  "count": 0,
  "episode_sort_direction": "string",
  "group_type": "tleo",
  "id": "string",
  "images": {
    "standard": "string",
    "type": "image",
    "vertical": "string"
  },
  "initial_children": [
    {
      "audio_described": true,
      "categories": [
        "string"
      ],
      "childrens": true,
      "editorial_subtitle": "string",
      "editorial_title": "string",
      "event_group_id": "string",
      "guidance": true,
      "has_credits": true,
      "id": "string",
      "images": {
        "character_image": "string",
        "inherited_from": "string",
        "live": "string",
        "portrait": "string",
        "promotional": "string",
        "promotional_with_logo": "string",
        "standard": "string",
        "type": "image"
      },
      "labels": {
        "category": "string",
        "editorial": "string",
        "editorial_category": "string",
        "time": "string"
      },
      "lexical_sort_letter": "string",
      "live": true,
      "live_subtitle": "string",
      "live_title": "string",
      "master_brand": {
        "attribution": "string",
        "id": "string",
        "ident_id": "string",
        "titles": {
          "large": "string",
          "medium": "string",
          "small": "string"
        }
      },
      "next_broadcast": {
        "channel_title": "string",
        "scheduled_start": "string"
      },
      "numeric_tleo_position": 0,
      "original_title": "string",
      "parent_id": "string",
      "parent_position": 0,
      "preview_id": "string",
      "programme_type": "narrative",
      "promoted": true,
      "related_links": [
        {
          "id": "string",
          "kind": "string",
          "title": "string",
          "type": "link",
          "url": "string"
        }
      ],
      "release_date": "string",
      "release_date_time": "string",
      "requires_ab": [
        "u13"
      ],
      "requires_sign_in": true,
      "requires_tv_licence": true,
      "signed": true,
      "slice_id": "string",
      "slice_subtitle": "string",
      "status": "available",
      "subtitle": "string",
      "synopses": {
        "editorial": "string",
        "large": "string",
        "live": "string",
        "medium": "string",
        "preview": "string",
        "programme_small": "string",
        "small": "string"
      },
      "tests": [
        {
          "id": "string",
          "status": "active",
          "variants": [
            {
              "data": {
                "images": {
                  "standard": "string",
                  "type": "episode"
                }
              },
              "id": "string"
            }
          ]
        }
      ],
      "title": "string",
      "tleo_id": "string",
      "tleo_type": "episode",
      "type": "episode",
      "versions": [
        {
          "availability": {
            "accurate_start": "string",
            "end": "string",
            "remaining": {
              "text": "string"
            },
            "start": "string"
          },
          "credits_start": 0,
          "download": true,
          "duration": {
            "text": "string",
            "value": "string"
          },
          "events": [
            {
              "name": "string",
              "offset": 0,
              "system": "string"
            }
          ],
          "first_broadcast": "string",
          "first_broadcast_date_time": "string",
          "guidance": {
            "id": "string",
            "text": {
              "large": "string",
              "medium": "string",
              "small": "string"
            }
          },
          "hd": true,
          "id": "string",
          "interactions": [
            {
              "interaction_points": {
                "show_from": 0,
                "skip_to": 0
              },
              "subtype": "string",
              "title": {
                "long": "string",
                "short": "string"
              },
              "type": "string"
            }
          ],
          "kind": "legal",
          "rrc": {
            "description": {
              "large": "string",
              "small": "string"
            },
            "url": "string"
          },
          "service_id": "string",
          "type": "version",
          "uhd": true
        }
      ]
    }
  ],
  "master_brand": {
    "attribution": "string",
    "id": "string",
    "ident_id": "string",
    "titles": {
      "large": "string",
      "medium": "string",
      "small": "string"
    }
  },
  "related_links": [
    {
      "kind": "string",
      "title": "string",
      "url": "string"
    }
  ],
  "short_title": "string",
  "stacked": true,
  "synopses": {
    "large": "string",
    "medium": "string",
    "small": "string"
  },
  "title": "string",
  "type": "group"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|number|false|none|none|
|episode_sort_direction|string|false|none|none|
|group_type|string|false|none|none|
|id|string|true|none|none|
|images|object|false|none|none|
|initial_children|[[episode](#schemaepisode) \| [broadcast](#schemabroadcast)]|false|none|none|
|master_brand|[master_brand](#schemamaster_brand)|false|none|none|
|related_links|[object]|false|none|none|
|short_title|string|false|none|none|
|stacked|boolean|false|none|none|
|synopses|object|false|none|none|
|title|string|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|group_type|tleo|
|group_type|curated|
|group_type|automated|
|group_type|event|
|type|group|
|type|group_large|

<h2 id="tocS_ibl">ibl</h2>
<!-- backwards compatibility -->
<a id="schemaibl"></a>
<a id="schema_ibl"></a>
<a id="tocSibl"></a>
<a id="tocsibl"></a>

```json
null
```

<h2 id="tocS_interaction">interaction</h2>
<!-- backwards compatibility -->
<a id="schemainteraction"></a>
<a id="schema_interaction"></a>
<a id="tocSinteraction"></a>
<a id="tocsinteraction"></a>

```json
{
  "interaction_points": {
    "show_from": 0,
    "skip_to": 0
  },
  "subtype": "string",
  "title": {
    "long": "string",
    "short": "string"
  },
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|interaction_points|object|true|none|none|
|subtype|string|true|none|none|
|title|object|true|none|none|
|type|string|true|none|none|

<h2 id="tocS_master_brand">master_brand</h2>
<!-- backwards compatibility -->
<a id="schemamaster_brand"></a>
<a id="schema_master_brand"></a>
<a id="tocSmaster_brand"></a>
<a id="tocsmaster_brand"></a>

```json
{
  "attribution": "string",
  "id": "string",
  "ident_id": "string",
  "titles": {
    "large": "string",
    "medium": "string",
    "small": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attribution|string|true|none|none|
|id|string|true|none|none|
|ident_id|string|false|none|none|
|titles|object|true|none|none|

<h2 id="tocS_programme">programme</h2>
<!-- backwards compatibility -->
<a id="schemaprogramme"></a>
<a id="schema_programme"></a>
<a id="tocSprogramme"></a>
<a id="tocsprogramme"></a>

```json
{
  "categories": [
    "string"
  ],
  "count": 0,
  "id": "string",
  "images": {
    "inherited_from": "string",
    "standard": "string",
    "type": "image"
  },
  "initial_children": [
    {
      "audio_described": true,
      "categories": [
        "string"
      ],
      "childrens": true,
      "editorial_subtitle": "string",
      "editorial_title": "string",
      "event_group_id": "string",
      "guidance": true,
      "has_credits": true,
      "id": "string",
      "images": {
        "character_image": "string",
        "inherited_from": "string",
        "live": "string",
        "portrait": "string",
        "promotional": "string",
        "promotional_with_logo": "string",
        "standard": "string",
        "type": "image"
      },
      "labels": {
        "category": "string",
        "editorial": "string",
        "editorial_category": "string",
        "time": "string"
      },
      "lexical_sort_letter": "string",
      "live": true,
      "live_subtitle": "string",
      "live_title": "string",
      "master_brand": {
        "attribution": "string",
        "id": "string",
        "ident_id": "string",
        "titles": {
          "large": "string",
          "medium": "string",
          "small": "string"
        }
      },
      "next_broadcast": {
        "channel_title": "string",
        "scheduled_start": "string"
      },
      "numeric_tleo_position": 0,
      "original_title": "string",
      "parent_id": "string",
      "parent_position": 0,
      "preview_id": "string",
      "programme_type": "narrative",
      "promoted": true,
      "related_links": [
        {
          "id": "string",
          "kind": "string",
          "title": "string",
          "type": "link",
          "url": "string"
        }
      ],
      "release_date": "string",
      "release_date_time": "string",
      "requires_ab": [
        "u13"
      ],
      "requires_sign_in": true,
      "requires_tv_licence": true,
      "signed": true,
      "slice_id": "string",
      "slice_subtitle": "string",
      "status": "available",
      "subtitle": "string",
      "synopses": {
        "editorial": "string",
        "large": "string",
        "live": "string",
        "medium": "string",
        "preview": "string",
        "programme_small": "string",
        "small": "string"
      },
      "tests": [
        {
          "id": "string",
          "status": "active",
          "variants": [
            {
              "data": {
                "images": {
                  "standard": "string",
                  "type": "episode"
                }
              },
              "id": "string"
            }
          ]
        }
      ],
      "title": "string",
      "tleo_id": "string",
      "tleo_type": "episode",
      "type": "episode",
      "versions": [
        {
          "availability": {
            "accurate_start": "string",
            "end": "string",
            "remaining": {
              "text": "string"
            },
            "start": "string"
          },
          "credits_start": 0,
          "download": true,
          "duration": {
            "text": "string",
            "value": "string"
          },
          "events": [
            {
              "name": "string",
              "offset": 0,
              "system": "string"
            }
          ],
          "first_broadcast": "string",
          "first_broadcast_date_time": "string",
          "guidance": {
            "id": "string",
            "text": {
              "large": "string",
              "medium": "string",
              "small": "string"
            }
          },
          "hd": true,
          "id": "string",
          "interactions": [
            {
              "interaction_points": {
                "show_from": 0,
                "skip_to": 0
              },
              "subtype": "string",
              "title": {
                "long": "string",
                "short": "string"
              },
              "type": "string"
            }
          ],
          "kind": "legal",
          "rrc": {
            "description": {
              "large": "string",
              "small": "string"
            },
            "url": "string"
          },
          "service_id": "string",
          "type": "version",
          "uhd": true
        }
      ]
    }
  ],
  "labels": {
    "category": "string"
  },
  "lexical_sort_letter": "string",
  "master_brand": {
    "attribution": "string",
    "id": "string",
    "ident_id": "string",
    "titles": {
      "large": "string",
      "medium": "string",
      "small": "string"
    }
  },
  "programme_type": "narrative",
  "status": "available",
  "synopses": {
    "large": "string",
    "medium": "string",
    "small": "string"
  },
  "title": "string",
  "tleo_type": "brand",
  "type": "programme"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|categories|[string]|true|none|none|
|count|number|true|none|none|
|id|string|true|none|none|
|images|object|true|none|none|
|initial_children|[[episode](#schemaepisode)]|true|none|none|
|labels|object|false|none|none|
|lexical_sort_letter|string|true|none|none|
|master_brand|[master_brand](#schemamaster_brand)|true|none|none|
|programme_type|string|false|none|none|
|status|string|true|none|none|
|synopses|object|true|none|none|
|title|string|true|none|none|
|tleo_type|string|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|programme_type|narrative|
|programme_type|sequential|
|programme_type|self-contained|
|programme_type|strand|
|programme_type|unclassified|
|programme_type|one-off|
|status|available|
|status|unavailable|
|tleo_type|brand|
|tleo_type|series|
|tleo_type|episode|
|type|programme|
|type|programme_large|

<h2 id="tocS_promotion">promotion</h2>
<!-- backwards compatibility -->
<a id="schemapromotion"></a>
<a id="schema_promotion"></a>
<a id="tocSpromotion"></a>
<a id="tocspromotion"></a>

```json
{
  "id": "string",
  "images": {
    "inherited_from": "string",
    "standard": "string",
    "type": "image"
  },
  "labels": {
    "promotion": "string"
  },
  "subtitle": "string",
  "synopses": {
    "large": "string",
    "medium": "string",
    "small": "string"
  },
  "title": "string",
  "type": "promotion",
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|images|object|false|none|none|
|labels|object|false|none|none|
|subtitle|string|false|none|none|
|synopses|object|false|none|none|
|title|string|false|none|none|
|type|string|true|none|none|
|url|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|promotion|

<h2 id="tocS_region">region</h2>
<!-- backwards compatibility -->
<a id="schemaregion"></a>
<a id="schema_region"></a>
<a id="tocSregion"></a>
<a id="tocsregion"></a>

```json
{
  "id": "string",
  "kind": "regional",
  "short_id": "string",
  "title": "string",
  "type": "region"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|kind|string|true|none|none|
|short_id|string|true|none|none|
|title|string|true|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|kind|regional|
|kind|national|
|type|region|

<h2 id="tocS_search_group">search_group</h2>
<!-- backwards compatibility -->
<a id="schemasearch_group"></a>
<a id="schema_search_group"></a>
<a id="tocSsearch_group"></a>
<a id="tocssearch_group"></a>

```json
{
  "episode": {
    "audio_described": true,
    "categories": [
      "string"
    ],
    "childrens": true,
    "editorial_subtitle": "string",
    "editorial_title": "string",
    "event_group_id": "string",
    "guidance": true,
    "has_credits": true,
    "id": "string",
    "images": {
      "character_image": "string",
      "inherited_from": "string",
      "live": "string",
      "portrait": "string",
      "promotional": "string",
      "promotional_with_logo": "string",
      "standard": "string",
      "type": "image"
    },
    "labels": {
      "category": "string",
      "editorial": "string",
      "editorial_category": "string",
      "time": "string"
    },
    "lexical_sort_letter": "string",
    "live": true,
    "live_subtitle": "string",
    "live_title": "string",
    "master_brand": {
      "attribution": "string",
      "id": "string",
      "ident_id": "string",
      "titles": {
        "large": "string",
        "medium": "string",
        "small": "string"
      }
    },
    "next_broadcast": {
      "channel_title": "string",
      "scheduled_start": "string"
    },
    "numeric_tleo_position": 0,
    "original_title": "string",
    "parent_id": "string",
    "parent_position": 0,
    "preview_id": "string",
    "programme_type": "narrative",
    "promoted": true,
    "related_links": [
      {
        "id": "string",
        "kind": "string",
        "title": "string",
        "type": "link",
        "url": "string"
      }
    ],
    "release_date": "string",
    "release_date_time": "string",
    "requires_ab": [
      "u13"
    ],
    "requires_sign_in": true,
    "requires_tv_licence": true,
    "signed": true,
    "slice_id": "string",
    "slice_subtitle": "string",
    "status": "available",
    "subtitle": "string",
    "synopses": {
      "editorial": "string",
      "large": "string",
      "live": "string",
      "medium": "string",
      "preview": "string",
      "programme_small": "string",
      "small": "string"
    },
    "tests": [
      {
        "id": "string",
        "status": "active",
        "variants": [
          {
            "data": {
              "images": {
                "standard": "string",
                "type": "episode"
              }
            },
            "id": "string"
          }
        ]
      }
    ],
    "title": "string",
    "tleo_id": "string",
    "tleo_type": "episode",
    "type": "episode",
    "versions": [
      {
        "availability": {
          "accurate_start": "string",
          "end": "string",
          "remaining": {
            "text": "string"
          },
          "start": "string"
        },
        "credits_start": 0,
        "download": true,
        "duration": {
          "text": "string",
          "value": "string"
        },
        "events": [
          {
            "name": "string",
            "offset": 0,
            "system": "string"
          }
        ],
        "first_broadcast": "string",
        "first_broadcast_date_time": "string",
        "guidance": {
          "id": "string",
          "text": {
            "large": "string",
            "medium": "string",
            "small": "string"
          }
        },
        "hd": true,
        "id": "string",
        "interactions": [
          {
            "interaction_points": {
              "show_from": 0,
              "skip_to": 0
            },
            "subtype": "string",
            "title": {
              "long": "string",
              "short": "string"
            },
            "type": "string"
          }
        ],
        "kind": "legal",
        "rrc": {
          "description": {
            "large": "string",
            "small": "string"
          },
          "url": "string"
        },
        "service_id": "string",
        "type": "version",
        "uhd": true
      }
    ]
  },
  "id": "string",
  "type": "search_group"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|episode|[episode](#schemaepisode)|true|none|none|
|id|string|true|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|search_group|

<h2 id="tocS_store_version">store_version</h2>
<!-- backwards compatibility -->
<a id="schemastore_version"></a>
<a id="schema_store_version"></a>
<a id="tocSstore_version"></a>
<a id="tocsstore_version"></a>

```json
{
  "download": true,
  "duration": {
    "text": "string",
    "value": "string"
  },
  "guidance": {
    "id": "string",
    "text": {
      "large": "string",
      "medium": "string",
      "small": "string"
    }
  },
  "hd": true,
  "id": "string",
  "kind": "string",
  "store_id": "string",
  "store_profile": "string",
  "store_session": {
    "ceiling": 0,
    "stats": {
      "assetName": "string",
      "contentType": "string",
      "contentVariant": "string",
      "episodeName": "string",
      "parentPID": "string",
      "parentPIDType": "string",
      "productVariant": "string",
      "viewerId": "string"
    },
    "token": "string"
  },
  "type": "store_version"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|download|boolean|true|none|none|
|duration|object|true|none|none|
|guidance|object|false|none|none|
|hd|boolean|true|none|none|
|id|string|true|none|none|
|kind|string|true|none|none|
|store_id|string|true|none|none|
|store_profile|string|true|none|none|
|store_session|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|store_version|

<h2 id="tocS_trailer">trailer</h2>
<!-- backwards compatibility -->
<a id="schematrailer"></a>
<a id="schema_trailer"></a>
<a id="tocStrailer"></a>
<a id="tocstrailer"></a>

```json
{
  "id": "string",
  "kind": "available_now",
  "message": "string",
  "title": "string",
  "type": "trailer",
  "version_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|kind|string|true|none|none|
|message|string|true|none|none|
|title|string|true|none|none|
|type|string|true|none|none|
|version_id|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|kind|available_now|
|kind|watch_now|
|kind|coming_soon|
|kind|streaming_now_sounds|
|kind|other|
|type|trailer|

<h2 id="tocS_user_recommendation">user_recommendation</h2>
<!-- backwards compatibility -->
<a id="schemauser_recommendation"></a>
<a id="schema_user_recommendation"></a>
<a id="tocSuser_recommendation"></a>
<a id="tocsuser_recommendation"></a>

```json
{
  "algorithm": "string",
  "episode": {
    "audio_described": true,
    "categories": [
      "string"
    ],
    "childrens": true,
    "editorial_subtitle": "string",
    "editorial_title": "string",
    "event_group_id": "string",
    "guidance": true,
    "has_credits": true,
    "id": "string",
    "images": {
      "character_image": "string",
      "inherited_from": "string",
      "live": "string",
      "portrait": "string",
      "promotional": "string",
      "promotional_with_logo": "string",
      "standard": "string",
      "type": "image"
    },
    "labels": {
      "category": "string",
      "editorial": "string",
      "editorial_category": "string",
      "time": "string"
    },
    "lexical_sort_letter": "string",
    "live": true,
    "live_subtitle": "string",
    "live_title": "string",
    "master_brand": {
      "attribution": "string",
      "id": "string",
      "ident_id": "string",
      "titles": {
        "large": "string",
        "medium": "string",
        "small": "string"
      }
    },
    "next_broadcast": {
      "channel_title": "string",
      "scheduled_start": "string"
    },
    "numeric_tleo_position": 0,
    "original_title": "string",
    "parent_id": "string",
    "parent_position": 0,
    "preview_id": "string",
    "programme_type": "narrative",
    "promoted": true,
    "related_links": [
      {
        "id": "string",
        "kind": "string",
        "title": "string",
        "type": "link",
        "url": "string"
      }
    ],
    "release_date": "string",
    "release_date_time": "string",
    "requires_ab": [
      "u13"
    ],
    "requires_sign_in": true,
    "requires_tv_licence": true,
    "signed": true,
    "slice_id": "string",
    "slice_subtitle": "string",
    "status": "available",
    "subtitle": "string",
    "synopses": {
      "editorial": "string",
      "large": "string",
      "live": "string",
      "medium": "string",
      "preview": "string",
      "programme_small": "string",
      "small": "string"
    },
    "tests": [
      {
        "id": "string",
        "status": "active",
        "variants": [
          {
            "data": {
              "images": {
                "standard": "string",
                "type": "episode"
              }
            },
            "id": "string"
          }
        ]
      }
    ],
    "title": "string",
    "tleo_id": "string",
    "tleo_type": "episode",
    "type": "episode",
    "versions": [
      {
        "availability": {
          "accurate_start": "string",
          "end": "string",
          "remaining": {
            "text": "string"
          },
          "start": "string"
        },
        "credits_start": 0,
        "download": true,
        "duration": {
          "text": "string",
          "value": "string"
        },
        "events": [
          {
            "name": "string",
            "offset": 0,
            "system": "string"
          }
        ],
        "first_broadcast": "string",
        "first_broadcast_date_time": "string",
        "guidance": {
          "id": "string",
          "text": {
            "large": "string",
            "medium": "string",
            "small": "string"
          }
        },
        "hd": true,
        "id": "string",
        "interactions": [
          {
            "interaction_points": {
              "show_from": 0,
              "skip_to": 0
            },
            "subtype": "string",
            "title": {
              "long": "string",
              "short": "string"
            },
            "type": "string"
          }
        ],
        "kind": "legal",
        "rrc": {
          "description": {
            "large": "string",
            "small": "string"
          },
          "url": "string"
        },
        "service_id": "string",
        "type": "version",
        "uhd": true
      }
    ]
  },
  "type": "user_recommendation"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|algorithm|string|true|none|none|
|episode|[episode](#schemaepisode)|true|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|user_recommendation|

<h2 id="tocS_version">version</h2>
<!-- backwards compatibility -->
<a id="schemaversion"></a>
<a id="schema_version"></a>
<a id="tocSversion"></a>
<a id="tocsversion"></a>

```json
{
  "availability": {
    "accurate_start": "string",
    "end": "string",
    "remaining": {
      "text": "string"
    },
    "start": "string"
  },
  "credits_start": 0,
  "download": true,
  "duration": {
    "text": "string",
    "value": "string"
  },
  "events": [
    {
      "name": "string",
      "offset": 0,
      "system": "string"
    }
  ],
  "first_broadcast": "string",
  "first_broadcast_date_time": "string",
  "guidance": {
    "id": "string",
    "text": {
      "large": "string",
      "medium": "string",
      "small": "string"
    }
  },
  "hd": true,
  "id": "string",
  "interactions": [
    {
      "interaction_points": {
        "show_from": 0,
        "skip_to": 0
      },
      "subtype": "string",
      "title": {
        "long": "string",
        "short": "string"
      },
      "type": "string"
    }
  ],
  "kind": "legal",
  "rrc": {
    "description": {
      "large": "string",
      "small": "string"
    },
    "url": "string"
  },
  "service_id": "string",
  "type": "version",
  "uhd": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|availability|object|true|none|none|
|credits_start|number|false|none|none|
|download|boolean|true|none|none|
|duration|object|true|none|none|
|events|[object]|false|none|none|
|first_broadcast|string|false|none|none|
|first_broadcast_date_time|string|false|none|none|
|guidance|object|false|none|none|
|hd|boolean|true|none|none|
|id|string|true|none|none|
|interactions|[[interaction](#schemainteraction)]|false|none|none|
|kind|string|true|none|none|
|rrc|object|false|none|none|
|service_id|string|false|none|none|
|type|string|true|none|none|
|uhd|boolean|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|kind|legal|
|kind|editorial|
|kind|technical-replacement|
|kind|original|
|kind|iplayer-version|
|kind|lengthened|
|kind|shortened|
|kind|pre-watershed|
|kind|post-watershed|
|kind|warnings-higher|
|kind|warnings-lower|
|kind|warnings-none|
|kind|duplication|
|kind|open-subtitled|
|kind|other|
|kind|audio-described|
|kind|signed|
|kind|webcast|
|kind|simulcast|
|type|version|
|type|version_large|

<h2 id="tocS_watching">watching</h2>
<!-- backwards compatibility -->
<a id="schemawatching"></a>
<a id="schema_watching"></a>
<a id="tocSwatching"></a>
<a id="tocswatching"></a>

```json
{
  "episode": {
    "audio_described": true,
    "categories": [
      "string"
    ],
    "childrens": true,
    "editorial_subtitle": "string",
    "editorial_title": "string",
    "event_group_id": "string",
    "guidance": true,
    "has_credits": true,
    "id": "string",
    "images": {
      "character_image": "string",
      "inherited_from": "string",
      "live": "string",
      "portrait": "string",
      "promotional": "string",
      "promotional_with_logo": "string",
      "standard": "string",
      "type": "image"
    },
    "labels": {
      "category": "string",
      "editorial": "string",
      "editorial_category": "string",
      "time": "string"
    },
    "lexical_sort_letter": "string",
    "live": true,
    "live_subtitle": "string",
    "live_title": "string",
    "master_brand": {
      "attribution": "string",
      "id": "string",
      "ident_id": "string",
      "titles": {
        "large": "string",
        "medium": "string",
        "small": "string"
      }
    },
    "next_broadcast": {
      "channel_title": "string",
      "scheduled_start": "string"
    },
    "numeric_tleo_position": 0,
    "original_title": "string",
    "parent_id": "string",
    "parent_position": 0,
    "preview_id": "string",
    "programme_type": "narrative",
    "promoted": true,
    "related_links": [
      {
        "id": "string",
        "kind": "string",
        "title": "string",
        "type": "link",
        "url": "string"
      }
    ],
    "release_date": "string",
    "release_date_time": "string",
    "requires_ab": [
      "u13"
    ],
    "requires_sign_in": true,
    "requires_tv_licence": true,
    "signed": true,
    "slice_id": "string",
    "slice_subtitle": "string",
    "status": "available",
    "subtitle": "string",
    "synopses": {
      "editorial": "string",
      "large": "string",
      "live": "string",
      "medium": "string",
      "preview": "string",
      "programme_small": "string",
      "small": "string"
    },
    "tests": [
      {
        "id": "string",
        "status": "active",
        "variants": [
          {
            "data": {
              "images": {
                "standard": "string",
                "type": "episode"
              }
            },
            "id": "string"
          }
        ]
      }
    ],
    "title": "string",
    "tleo_id": "string",
    "tleo_type": "episode",
    "type": "episode",
    "versions": [
      {
        "availability": {
          "accurate_start": "string",
          "end": "string",
          "remaining": {
            "text": "string"
          },
          "start": "string"
        },
        "credits_start": 0,
        "download": true,
        "duration": {
          "text": "string",
          "value": "string"
        },
        "events": [
          {
            "name": "string",
            "offset": 0,
            "system": "string"
          }
        ],
        "first_broadcast": "string",
        "first_broadcast_date_time": "string",
        "guidance": {
          "id": "string",
          "text": {
            "large": "string",
            "medium": "string",
            "small": "string"
          }
        },
        "hd": true,
        "id": "string",
        "interactions": [
          {
            "interaction_points": {
              "show_from": 0,
              "skip_to": 0
            },
            "subtype": "string",
            "title": {
              "long": "string",
              "short": "string"
            },
            "type": "string"
          }
        ],
        "kind": "legal",
        "rrc": {
          "description": {
            "large": "string",
            "small": "string"
          },
          "url": "string"
        },
        "service_id": "string",
        "type": "version",
        "uhd": true
      }
    ]
  },
  "has_next": true,
  "offset": 0,
  "programme": {
    "categories": [
      "string"
    ],
    "count": 0,
    "id": "string",
    "images": {
      "inherited_from": "string",
      "standard": "string",
      "type": "image"
    },
    "initial_children": [
      {
        "audio_described": true,
        "categories": [
          "string"
        ],
        "childrens": true,
        "editorial_subtitle": "string",
        "editorial_title": "string",
        "event_group_id": "string",
        "guidance": true,
        "has_credits": true,
        "id": "string",
        "images": {
          "character_image": "string",
          "inherited_from": "string",
          "live": "string",
          "portrait": "string",
          "promotional": "string",
          "promotional_with_logo": "string",
          "standard": "string",
          "type": "image"
        },
        "labels": {
          "category": "string",
          "editorial": "string",
          "editorial_category": "string",
          "time": "string"
        },
        "lexical_sort_letter": "string",
        "live": true,
        "live_subtitle": "string",
        "live_title": "string",
        "master_brand": {
          "attribution": "string",
          "id": "string",
          "ident_id": "string",
          "titles": {
            "large": "string",
            "medium": "string",
            "small": "string"
          }
        },
        "next_broadcast": {
          "channel_title": "string",
          "scheduled_start": "string"
        },
        "numeric_tleo_position": 0,
        "original_title": "string",
        "parent_id": "string",
        "parent_position": 0,
        "preview_id": "string",
        "programme_type": "narrative",
        "promoted": true,
        "related_links": [
          {
            "id": "string",
            "kind": "string",
            "title": "string",
            "type": "link",
            "url": "string"
          }
        ],
        "release_date": "string",
        "release_date_time": "string",
        "requires_ab": [
          "u13"
        ],
        "requires_sign_in": true,
        "requires_tv_licence": true,
        "signed": true,
        "slice_id": "string",
        "slice_subtitle": "string",
        "status": "available",
        "subtitle": "string",
        "synopses": {
          "editorial": "string",
          "large": "string",
          "live": "string",
          "medium": "string",
          "preview": "string",
          "programme_small": "string",
          "small": "string"
        },
        "tests": [
          {
            "id": "string",
            "status": "active",
            "variants": [
              {
                "data": {
                  "images": {
                    "standard": "string",
                    "type": "episode"
                  }
                },
                "id": "string"
              }
            ]
          }
        ],
        "title": "string",
        "tleo_id": "string",
        "tleo_type": "episode",
        "type": "episode",
        "versions": [
          {
            "availability": {
              "accurate_start": "string",
              "end": "string",
              "remaining": {
                "text": "string"
              },
              "start": "string"
            },
            "credits_start": 0,
            "download": true,
            "duration": {
              "text": "string",
              "value": "string"
            },
            "events": [
              {
                "name": "string",
                "offset": 0,
                "system": "string"
              }
            ],
            "first_broadcast": "string",
            "first_broadcast_date_time": "string",
            "guidance": {
              "id": "string",
              "text": {
                "large": "string",
                "medium": "string",
                "small": "string"
              }
            },
            "hd": true,
            "id": "string",
            "interactions": [
              {
                "interaction_points": {
                  "show_from": 0,
                  "skip_to": 0
                },
                "subtype": "string",
                "title": {
                  "long": "string",
                  "short": "string"
                },
                "type": "string"
              }
            ],
            "kind": "legal",
            "rrc": {
              "description": {
                "large": "string",
                "small": "string"
              },
              "url": "string"
            },
            "service_id": "string",
            "type": "version",
            "uhd": true
          }
        ]
      }
    ],
    "labels": {
      "category": "string"
    },
    "lexical_sort_letter": "string",
    "master_brand": {
      "attribution": "string",
      "id": "string",
      "ident_id": "string",
      "titles": {
        "large": "string",
        "medium": "string",
        "small": "string"
      }
    },
    "programme_type": "narrative",
    "status": "available",
    "synopses": {
      "large": "string",
      "medium": "string",
      "small": "string"
    },
    "title": "string",
    "tleo_type": "brand",
    "type": "programme"
  },
  "progress": 0,
  "remaining": 0,
  "status": "current",
  "type": "watching",
  "urn": "string",
  "version": {
    "availability": {
      "accurate_start": "string",
      "end": "string",
      "remaining": {
        "text": "string"
      },
      "start": "string"
    },
    "credits_start": 0,
    "download": true,
    "duration": {
      "text": "string",
      "value": "string"
    },
    "events": [
      {
        "name": "string",
        "offset": 0,
        "system": "string"
      }
    ],
    "first_broadcast": "string",
    "first_broadcast_date_time": "string",
    "guidance": {
      "id": "string",
      "text": {
        "large": "string",
        "medium": "string",
        "small": "string"
      }
    },
    "hd": true,
    "id": "string",
    "interactions": [
      {
        "interaction_points": {
          "show_from": 0,
          "skip_to": 0
        },
        "subtype": "string",
        "title": {
          "long": "string",
          "short": "string"
        },
        "type": "string"
      }
    ],
    "kind": "legal",
    "rrc": {
      "description": {
        "large": "string",
        "small": "string"
      },
      "url": "string"
    },
    "service_id": "string",
    "type": "version",
    "uhd": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|episode|[episode](#schemaepisode)|true|none|none|
|has_next|boolean|true|none|none|
|offset|number|false|none|none|
|programme|[programme](#schemaprogramme)|true|none|none|
|progress|number|false|none|none|
|remaining|number|false|none|none|
|status|string|false|none|none|
|type|string|true|none|none|
|urn|string|true|none|none|
|version|[version](#schemaversion)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|current|
|status|next|
|status|ended|
|type|watching|
