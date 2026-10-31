<h1 id="they-said-so-quotes-api">They Said So Quotes API v3.1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

 They Said So Quotes API offers a complete feature rich REST API access to its quotes platform.  This is the documentation for the world famous [quotes API](https://theysaidso.com/api).  If you are a subscriber and you are trying this from a console add 'X-TheySaidSo-Api-Secret' header and add your api key as the header value. You can test and play with the API right here on this web page. For using the private end points and subscribing to the API please visit https://theysaidso.com/api.

Base URLs:

* <a href="https://quotes.rest">https://quotes.rest</a>

* <a href="http://quotes.rest">http://quotes.rest</a>

* <a href="http://api01.quotes.rest">http://api01.quotes.rest</a>

<a href="https://theysaidso.com/terms#api">Terms of service</a>
Web: <a href="https://theysaidso.com/api/quote">They Said So</a> 

# Authentication

* API Key (X-TheySaidSo-Api-Secret)
    - Parameter Name: **X-TheySaidSo-Api-Secret**, in: header.

<h1 id="they-said-so-quotes-api-quote-of-the-day">Quote of the day</h1>

Access quote of the day service. Use this to get the quote of the day in various categories. This is a free API that is available to public. You must credit They Said So if you are using the free version.

<a href="https://theysaidso.com/api/quote#qod">Find out more</a>

## get/qod

> Code samples

```bash
curl https://example.com/qod \
  -H 'Accept: application/json' \
  -H "X-TheySaidSo-Api-Secret: ${API_KEY}"
```

`GET /qod`

Gets `Quote of the Day`. Optional `category` param determines the category of returned quote of the day


<h3 id="getqod-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|category|query|string(string)|false|QOD Category|
|language|query|string(string)|false|Language of the QOD. The language must be supported in our QOD system.|

> Example responses

> 200 Response

```json
"{\n    \"success\": {\n        \"total\": 1\n    },\n    \"contents\": {\n        \"quotes\": [\n            {\n                \"quote\": \"Do not worry if you have built your castles in the air. They are where they should be. Now put the foundations under them.\",\n                \"length\": \"122\",\n                \"author\": \"Henry David Thoreau\",\n                \"tags\": [\n                    \"dreams\",\n                    \"inspire\",\n                    \"worry\"\n                ],\n                \"category\": \"inspire\",\n                \"date\": \"2016-11-21\",\n                \"title\": \"Inspiring Quote of the day\",\n                \"background\": \"https://theysaidso.com/img/bgs/man_on_the_mountain.jpg\",\n                \"id\": \"mYpH8syTM8rf8KFORoAJmQeF\"\n            }\n        ]\n    }\n}"
```

> 400 Response

```json
"{\n  \"error\": {\n    \"code\": 400,\n    \"message\": \"Bad Request: QOD category not supported for this category and language combination\"\n  }\n}               "
```

<h3 id="getqod-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200  response|[QuoteResponse](#schemaquoteresponse)|
|400|Bad Request|400  response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-TheySaidSo-Api-Secret
</aside>

## get/qod/categories

> Code samples

```bash
curl https://example.com/qod/categories \
  -H 'Accept: application/json' \
  -H "X-TheySaidSo-Api-Secret: ${API_KEY}"
```

`GET /qod/categories`

Gets a list of `Quote of the Day` Categories.


<h3 id="getqodcategories-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|language|query|string(string)|false|Language of the QOD category. The language must be supported in our QOD system.|
|detailed|query|boolean(boolean)|false|Return detailed information of the categories. Note the data format changes between the two values of this switch.|

> Example responses

> 200 Response

```json
"{\n    \"success\": {\n        \"total\": 8\n    },\n    \"contents\": {\n        \"categories\": {\n            \"inspire\": \"Inspiring Quote of the day\",\n            \"management\": \"Management Quote of the day\",\n            \"sports\": \"Sports Quote of the day\",\n            \"life\": \"Quote of the day about life\",\n            \"funny\": \"Funny Quote of the day\",\n            \"love\": \"Quote of the day about Love\",\n            \"art\": \"Art quote of the day \",\n            \"students\": \"Quote of the day for students\"\n        },\n        \"copyright\": \"2013-15 http://theysaidso.com\"\n    }\n}   "
```

> 400 Response

```json
"{\n  \"error\": {\n    \"code\": 400,\n    \"message\": \"No QOD categories defined for this language.\"\n  }\n}                            "
```

<h3 id="getqodcategories-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200  response|None|
|400|Bad Request|400  response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-TheySaidSo-Api-Secret
</aside>

## get/qod/languages

> Code samples

```bash
curl https://example.com/qod/languages \
  -H 'Accept: application/json' \
  -H "X-TheySaidSo-Api-Secret: ${API_KEY}"
```

`GET /qod/languages`

Gets a list of supported languages for `Quote of the Day`. 


> Example responses

> 200 Response

```json
"{\n  \"success\": {\n    \"total\": 2\n  },\n  \"contents\": {\n    \"languages\": [\n      \"en\",\n      \"fr\",\n      \"ta\"\n    ]\n  },\n  \"baseurl\": \"https://theysaidso.com\",\n  \"copyright\": \"2019-22 https://theysaidso.com\"\n}"
```

<h3 id="getqodlanguages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200  response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-TheySaidSo-Api-Secret
</aside>

<h1 id="they-said-so-quotes-api-quote">Quote</h1>

Access random quote service. Use this to get random quotes , quotes filtered by authors or tags etc. You need an API key to access this service.

## get/quote

> Code samples

```bash
curl https://example.com/quote \
  -H 'Accept: application/json' \
  -H "X-TheySaidSo-Api-Secret: ${API_KEY}"
```

`GET /quote`

Gets a `Quote` with a given `id`.

<h3 id="getquote-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string(string)|false|Quote ID|

> Example responses

> 200 Response

```json
"{\n  \"success\": {\n    \"total\": 1\n  },\n  \"contents\": {\n    \"quote\": \"The day soldiers stop bringing you their problems is the day you have stopped leading them. They have either lost confidence that you can help them or concluded that you do not care. Either case is a failure of leadership.\",\n    \"author\": \"Colin Powell\",\n    \"id\": \"XLa1AmylKv1XF_dXcyhvdweF\",\n    \"language\": \"en\",\n    \"sfw\": \"sfw\",\n    \"permalink\": \"https://theysaidso.com/quote/colin-powell-the-day-soldiers-stop-bringing-you-their-problems-is-the-day-you-ha\",\n    \"requested_category\": \"inspire\",\n    \"categories\": [\n      \"confidence\",\n      \"leadership\",\n      \"management\",\n      \"tod\"\n    ]\n  }\n}"
```

> 401 Response

```json
"{\n    \"error\": {\n        \"code\": 401,\n        \"message\": \"Unauthorized\"\n    }\n}"
```

<h3 id="getquote-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200  response|[QuoteResponse](#schemaquoteresponse)|
|401|Unauthorized|401  response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-TheySaidSo-Api-Secret
</aside>

## get/quote/authors/popular

> Code samples

```bash
curl https://example.com/quote/authors/popular \
  -H 'Accept: application/json' \
  -H "X-TheySaidSo-Api-Secret: ${API_KEY}"
```

`GET /quote/authors/popular`

Gets a list of popular author names in the system. 


<h3 id="getquoteauthorspopular-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|language|query|string(string)|false|Language. A same author may have quotes in two or more different languages. So for example 'Mahatma Gandhi' may be returned for language "en"(English), and "மஹாத்மா காந்தி" may be returned when the language is "ta" (Tamil).|
|detailed|query|boolean(boolean)|false|Should return detailed author information such as `birthday`, `death date`, `occupation`, `description` etc. Only available at certain subscription levels.|
|start|query|integer(int32)|false|Response is paged. This parameter controls where response starts the listing at|
|limit|query|integer(int32)|false|Response is paged. This parameter controls how many is returned in the result. The maximum depends on the subscription level.|

> Example responses

> 200 Response

```json
"{\n  \"success\": {\n    \"total\": \"2646\",\n    \"range\": {\n      \"start\": 0,\n      \"end\": 5\n    }\n  },\n  \"contents\": {\n    \"authors\": [\n      {\n        \"name\": \"Robert Louis Stevenson\",\n        \"slug\": \"robert-louis-stevenson\",\n        \"occupation\": \"Author\",\n        \"born\": \"1850-11-13 00:00:00\",\n        \"dead\": \"1894-12-03 00:00:00\",\n        \"description\": null,\n        \"id\": \"_kobR6QdDXDw_HCo2J_n0AeF\"\n      },\n      {\n        \"name\": \"Steve Jobs\",\n        \"slug\": \"steve-jobs\",\n        \"occupation\": \"Business\",\n        \"born\": \"1955-02-24 00:00:00\",\n        \"dead\": \"2011-10-05 00:00:00\",\n        \"description\": \"\",\n        \"id\": \"WKCl3utqIPYnCXiZubNNKAeF\"\n      },\n      {\n        \"name\": \"Steve Maraboli\",\n        \"slug\": \"steve-maraboli\",\n        \"occupation\": null,\n        \"born\": null,\n        \"dead\": null,\n        \"description\": null,\n        \"id\": \"GfOeOBX2Gwp1emdunDiXDweF\"\n      },\n      {\n        \"name\": \"Steven Wright\",\n        \"slug\": \"steven-wright\",\n        \"occupation\": \"Comic\",\n        \"born\": \"1955-12-06 00:00:00\",\n        \"dead\": null,\n        \"description\": null,\n        \"id\": \"j144PP_Pew72rXVrRKAmgAeF\"\n      },\n      {\n        \"name\": \"Wallace Stevens\",\n        \"slug\": \"wallace-stevens\",\n        \"occupation\": \"Poet\",\n        \"born\": \"1879-10-02 00:00:00\",\n        \"dead\": \"1955-08-02 00:00:00\",\n        \"description\": null,\n        \"id\": \"IF8HZp3hHsP_BzepN65atQeF\"\n      }\n    ],\n    \"matched_query\": \"steve\"\n  },\n  \"baseurl\": \"https://theysaidso.com\",\n  \"copyright\": \"2019-22 https://theysaidso.com\"\n}"
```

> 400 Response

```json
"{\n  \"error\": {\n    \"code\": 400,\n    \"message\": \"Bad Request: Author details retrieval options are not supported for this user (please upgrade your subscription)\"\n  }\n}"
```

<h3 id="getquoteauthorspopular-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200  response|None|
|400|Bad Request|400  response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-TheySaidSo-Api-Secret
</aside>

## get/quote/authors/search

> Code samples

```bash
curl https://example.com/quote/authors/search \
  -H 'Accept: application/json' \
  -H "X-TheySaidSo-Api-Secret: ${API_KEY}"
```

`GET /quote/authors/search`

Gets a list of author names in the system. 


<h3 id="getquoteauthorssearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|query|query|string(string)|false|Text string to search for in author names|
|language|query|string(string)|false|Language. A same author may have quotes in two or more different languages. So for example 'Mahatma Gandhi' may be returned for language "en"(English), and "மஹாத்மா காந்தி" may be returned when the language is "ta" (Tamil).|
|detailed|query|boolean(boolean)|false|Should return detailed author information such as `birthday`, `death date`, `occupation`, `description` etc. Only available at certain subscription levels.|
|start|query|integer(int32)|false|Response is paged. This parameter controls where response starts the listing at|
|limit|query|integer(int32)|false|Response is paged. This parameter controls how many is returned in the result. The maximum depends on the subscription level.|

> Example responses

> 200 Response

```json
"{\n  \"success\": {\n    \"total\": \"2646\",\n    \"range\": {\n      \"start\": 0,\n      \"end\": 5\n    }\n  },\n  \"contents\": {\n    \"authors\": [\n      {\n        \"name\": \"Robert Louis Stevenson\",\n        \"slug\": \"robert-louis-stevenson\",\n        \"occupation\": \"Author\",\n        \"born\": \"1850-11-13 00:00:00\",\n        \"dead\": \"1894-12-03 00:00:00\",\n        \"description\": null,\n        \"id\": \"_kobR6QdDXDw_HCo2J_n0AeF\"\n      },\n      {\n        \"name\": \"Steve Jobs\",\n        \"slug\": \"steve-jobs\",\n        \"occupation\": \"Business\",\n        \"born\": \"1955-02-24 00:00:00\",\n        \"dead\": \"2011-10-05 00:00:00\",\n        \"description\": \"\",\n        \"id\": \"WKCl3utqIPYnCXiZubNNKAeF\"\n      },\n      {\n        \"name\": \"Steve Maraboli\",\n        \"slug\": \"steve-maraboli\",\n        \"occupation\": null,\n        \"born\": null,\n        \"dead\": null,\n        \"description\": null,\n        \"id\": \"GfOeOBX2Gwp1emdunDiXDweF\"\n      },\n      {\n        \"name\": \"Steven Wright\",\n        \"slug\": \"steven-wright\",\n        \"occupation\": \"Comic\",\n        \"born\": \"1955-12-06 00:00:00\",\n        \"dead\": null,\n        \"description\": null,\n        \"id\": \"j144PP_Pew72rXVrRKAmgAeF\"\n      },\n      {\n        \"name\": \"Wallace Stevens\",\n        \"slug\": \"wallace-stevens\",\n        \"occupation\": \"Poet\",\n        \"born\": \"1879-10-02 00:00:00\",\n        \"dead\": \"1955-08-02 00:00:00\",\n        \"description\": null,\n        \"id\": \"IF8HZp3hHsP_BzepN65atQeF\"\n      }\n    ],\n    \"matched_query\": \"steve\"\n  },\n  \"baseurl\": \"https://theysaidso.com\",\n  \"copyright\": \"2019-22 https://theysaidso.com\"\n}"
```

> 400 Response

```json
"{\n  \"error\": {\n    \"code\": 400,\n    \"message\": \"Bad Request: Author details retrieval options are not supported for this user (please upgrade your subscription)\"\n  }\n}"
```

<h3 id="getquoteauthorssearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200  response|None|
|400|Bad Request|400  response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-TheySaidSo-Api-Secret
</aside>

## get/quote/categories/popular

> Code samples

```bash
curl https://example.com/quote/categories/popular \
  -H 'Accept: application/json' \
  -H "X-TheySaidSo-Api-Secret: ${API_KEY}"
```

`GET /quote/categories/popular`

Gets a list of popular `Quote` Categories.


<h3 id="getquotecategoriespopular-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|start|query|integer(int32)|false|Response is paged. This parameter controls where response starts the listing at|
|limit|query|integer(int32)|false|Response is paged. This parameter controls how many is returned in the result. The maximum depends on the subscription level.|

> Example responses

> 200 Response

```json
"{\n  \"success\": {\n    \"total\": 18,\n    \"range\": {\n      \"start\": 0,\n      \"end\": 5\n    }\n  },\n  \"contents\": {\n    \"categories\": [\n      {\n        \"name\": \"inspirational\",\n        \"title\": \"Inspirational Quotes\"\n      },\n      {\n        \"name\": \"work\",\n        \"title\": null\n      },\n      {\n        \"name\": \"women\",\n        \"title\": null\n      },\n      {\n        \"name\": \"people\",\n        \"title\": null\n      },\n      {\n        \"name\": \"death\",\n        \"title\": null\n      }\n    ]\n  },\n  \"baseurl\": \"https://theysaidso.com\",\n  \"copyright\": \"2019-22 https://theysaidso.com\"\n}               "
```

<h3 id="getquotecategoriespopular-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200  response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-TheySaidSo-Api-Secret
</aside>

## get/quote/categories/search

> Code samples

```bash
curl https://example.com/quote/categories/search \
  -H 'Accept: application/json' \
  -H "X-TheySaidSo-Api-Secret: ${API_KEY}"
```

`GET /quote/categories/search`

Gets a list of `Quote` Categories matching the query string.


<h3 id="getquotecategoriessearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|query|query|string(string)|false|Text string to search for in the categories|
|start|query|integer(int32)|false|Response is paged. This parameter controls where response starts the listing at|
|limit|query|integer(int32)|false|Response is paged. This parameter controls how many is returned in the result. The maximum depends on the subscription level.|

> Example responses

> 200 Response

```json
"{\n  \"success\": {\n    \"total\": 34,\n    \"range\": {\n      \"start\": 0,\n      \"end\": 5\n    }\n  },\n  \"contents\": {\n    \"categories\": [\n      {\n        \"name\": \"inspire\",\n        \"title\": null\n      },\n      {\n        \"name\": \"inspired\",\n        \"title\": null\n      },\n      {\n        \"name\": \"words-to-inspire-you\",\n        \"title\": null\n      },\n      {\n        \"name\": \"self-inspired\",\n        \"title\": null\n      },\n      {\n        \"name\": \"inspire-the-world\",\n        \"title\": null\n      }\n    ]\n  },\n  \"baseurl\": \"https://theysaidso.com\",\n  \"copyright\": \"2019-22 https://theysaidso.com\"\n}"
```

<h3 id="getquotecategoriessearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200  response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-TheySaidSo-Api-Secret
</aside>

## put/quote/dislike

> Code samples

```bash
curl 'https://example.com/quote/dislike?quote_id=string' \
  -X PUT \
  -H 'Accept: application/json' \
  -H "X-TheySaidSo-Api-Secret: ${API_KEY}"
```

`PUT /quote/dislike`

Dislike the given Quote as a user of the API Key. Some clients don't cleanly support `PUT`, in such scenarios use the `POST` version of this.

<h3 id="putquotedislike-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|quote_id|query|string(string)|true|Quote ID|

> Example responses

> 200 Response

```json
"{\n  \"success\": {\n    \"total\": 1\n  },\n  \"contents\": \"Disliked the quote\"\n}"
```

> 401 Response

```json
"{\n    \"error\": {\n        \"code\": 401,\n        \"message\": \"Unauthorized\"\n    }\n}"
```

> 404 Response

```json
"{\n    \"error\": {\n        \"code\": 404,\n        \"message\": \"Not Found: Quote not found\"\n    }\n}"
```

<h3 id="putquotedislike-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200  response|None|
|401|Unauthorized|401  response|None|
|404|Not Found|404  response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-TheySaidSo-Api-Secret
</aside>

## post/quote/dislike

> Code samples

```bash
curl 'https://example.com/quote/dislike?quote_id=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-TheySaidSo-Api-Secret: ${API_KEY}"
```

`POST /quote/dislike`

Dislike the given Quote as a user of the API Key. Same as `put` but a convenient alias for those clients that don't support `put` cleanly.

<h3 id="postquotedislike-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|quote_id|query|string(string)|true|Quote ID|

> Example responses

> 200 Response

```json
"{\n  \"success\": {\n    \"total\": 1\n  },\n  \"contents\": \"Disliked the quote\"\n}"
```

> 401 Response

```json
"{\n    \"error\": {\n        \"code\": 401,\n        \"message\": \"Unauthorized\"\n    }\n}"
```

> 404 Response

```json
"{\n    \"error\": {\n        \"code\": 404,\n        \"message\": \"Not Found: Quote not found\"\n    }\n}"
```

<h3 id="postquotedislike-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200  response|None|
|401|Unauthorized|401  response|None|
|404|Not Found|404  response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-TheySaidSo-Api-Secret
</aside>

## delete/quote/dislike

> Code samples

```bash
curl 'https://example.com/quote/dislike?quote_id=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "X-TheySaidSo-Api-Secret: ${API_KEY}"
```

`DELETE /quote/dislike`

Remove the disLike for the given Quote as a user of the API Key.

<h3 id="deletequotedislike-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|quote_id|query|string(string)|true|Quote ID|

> Example responses

> 200 Response

```json
"{\n  \"success\": {\n    \"total\": 1\n  },\n  \"contents\": \"Like / Dislike removed from quote.\"\n}"
```

> 401 Response

```json
"{\n    \"error\": {\n        \"code\": 401,\n        \"message\": \"Unauthorized\"\n    }\n}"
```

> 404 Response

```json
"{\n    \"error\": {\n        \"code\": 404,\n        \"message\": \"Not Found: Quote not found\"\n    }\n}                       "
```

<h3 id="deletequotedislike-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200  response|None|
|401|Unauthorized|401  response|None|
|404|Not Found|404  response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-TheySaidSo-Api-Secret
</aside>

## put/quote/like

> Code samples

```bash
curl 'https://example.com/quote/like?quote_id=string' \
  -X PUT \
  -H 'Accept: application/json' \
  -H "X-TheySaidSo-Api-Secret: ${API_KEY}"
```

`PUT /quote/like`

Like the given Quote as a user of the API Key. Some clients don't cleanly support `PUT`, in such scenarios use the `POST` version of this.

<h3 id="putquotelike-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|quote_id|query|string(string)|true|Quote ID|

> Example responses

> 200 Response

```json
"{\n  \"success\": {\n    \"total\": 1\n  },\n  \"contents\": {\n    \"message\": \"Like added to the quote\"\n  }\n}"
```

> 401 Response

```json
"{\n    \"error\": {\n        \"code\": 401,\n        \"message\": \"Unauthorized\"\n    }\n}"
```

> 404 Response

```json
"{\n    \"error\": {\n        \"code\": 404,\n        \"message\": \"Not Found: Quote not found\"\n    }\n}"
```

<h3 id="putquotelike-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200  response|None|
|401|Unauthorized|401  response|None|
|404|Not Found|404  response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-TheySaidSo-Api-Secret
</aside>

## post/quote/like

> Code samples

```bash
curl 'https://example.com/quote/like?quote_id=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-TheySaidSo-Api-Secret: ${API_KEY}"
```

`POST /quote/like`

Like the given Quote as a user of the API Key. Same as `PUT` but a convenient alias for those clients that don't support `PUT` cleanly.

<h3 id="postquotelike-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|quote_id|query|string(string)|true|Quote ID|

> Example responses

> 200 Response

```json
"{\n  \"success\": {\n    \"total\": 1\n  },\n  \"contents\": {\n    \"message\": \"Like added to the quote\"\n  }\n}"
```

> 401 Response

```json
"{\n    \"error\": {\n        \"code\": 401,\n        \"message\": \"Unauthorized\"\n    }\n}"
```

> 404 Response

```json
"{\n    \"error\": {\n        \"code\": 404,\n        \"message\": \"Not Found: Quote not found\"\n    }\n}"
```

<h3 id="postquotelike-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200  response|None|
|401|Unauthorized|401  response|None|
|404|Not Found|404  response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-TheySaidSo-Api-Secret
</aside>

## delete/quote/like

> Code samples

```bash
curl 'https://example.com/quote/like?quote_id=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "X-TheySaidSo-Api-Secret: ${API_KEY}"
```

`DELETE /quote/like`

Remove the Like for the given Quote as a user of the API Key.

<h3 id="deletequotelike-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|quote_id|query|string(string)|true|Quote ID|

> Example responses

> 200 Response

```json
"{\n}"
```

> 401 Response

```json
"{\n  \"success\": {\n    \"total\": 1\n  },\n  \"contents\": \"Like / Dislike removed from quote.\"\n}"
```

> 404 Response

```json
"{\n    \"error\": {\n        \"code\": 404,\n        \"message\": \"Not Found: Quote not found\"\n    }\n}"
```

<h3 id="deletequotelike-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200  response|None|
|401|Unauthorized|401  response|None|
|404|Not Found|404  response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-TheySaidSo-Api-Secret
</aside>

## get/quote/random

> Code samples

```bash
curl https://example.com/quote/random \
  -H 'Accept: application/json' \
  -H "X-TheySaidSo-Api-Secret: ${API_KEY}"
```

`GET /quote/random`

Gets a `Random Quote`. When you are in a hurry this is what you call to get a random famous quote.

<h3 id="getquoterandom-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|language|query|string(string)|false|Language of the Quote. The language must be supported in our system.|
|limit|query|integer(integer)|false|No of quotes to return. The max limit depends on the subscription level.|

> Example responses

> 200 Response

```json
"{\n    \"success\": {\n        \"total\": 1\n    },\n    \"contents\": {\n        \"quotes\": [\n            {\n                \"quote\": \"The day soldiers stop bringing you their problems is the day you have stopped leading them. They have either lost confidence that you can help them or concluded that you do not care. Either case is a failure of leadership.\",\n                \"length\": \"222\",\n                \"author\": \"Colin Powell\",\n                \"tags\": [\n                    \"confidence\",\n                    \"leadership\",\n                    \"management\"\n                ],\n                \"category\": \"management\",\n                \"id\": \"XLa1AmylKv1XF_dXcyhvdweF\"\n            }\n        ]\n    }\n}"
```

> 401 Response

```json
"{\n    \"error\": {\n        \"code\": 401,\n        \"message\": \"Unauthorized\"\n    }\n}"
```

<h3 id="getquoterandom-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200  response|[QuoteResponse](#schemaquoteresponse)|
|401|Unauthorized|401  response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-TheySaidSo-Api-Secret
</aside>

## get/quote/search

> Code samples

```bash
curl https://example.com/quote/search \
  -H 'Accept: application/json' \
  -H "X-TheySaidSo-Api-Secret: ${API_KEY}"
```

`GET /quote/search`

Search for a `Quote` in They Said So platform. Optional `category` , `author`, `minlength`, `maxlength` params determines the filters applied while searching for the quote. 

<h3 id="getquotesearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|category|query|string(string)|false|Quote Category|
|author|query|string(string)|false|Quote Author|
|minlength|query|integer(int32)|false|Quote minimum Length|
|maxlength|query|integer(int32)|false|Quote maximum Length|
|query|query|string(string)|false|keyword to search for in the quote|
|private|query|boolean(boolean)|false|Should search private collection? Default searches public collection.|
|language|query|string(string)|false|Language of the Quote. The language must be supported in our system.|
|limit|query|integer(integer)|false|No of quotes to return. The max limit depends on the subscription level.|
|sfw|query|boolean(boolean)|false|Should search only SFW (Safe For Work) quotes?|

> Example responses

> 200 Response

```json
"{\n    \"success\": {\n        \"total\": 1\n    },\n    \"contents\": {\n        \"quotes\": [\n            {\n                \"quote\": \"The day soldiers stop bringing you their problems is the day you have stopped leading them. They have either lost confidence that you can help them or concluded that you do not care. Either case is a failure of leadership.\",\n                \"length\": \"222\",\n                \"author\": \"Colin Powell\",\n                \"tags\": [\n                    \"confidence\",\n                    \"leadership\",\n                    \"management\"\n                ],\n                \"category\": \"management\",\n                \"id\": \"XLa1AmylKv1XF_dXcyhvdweF\"\n            }\n        ]\n    }\n}"
```

> 401 Response

```json
"{\n    \"error\": {\n        \"code\": 401,\n        \"message\": \"Unauthorized\"\n    }\n}"
```

> 404 Response

```json
"{\n    \"error\": {\n        \"code\": 404,\n        \"message\": \"No Quote found matching the search filters. Try with different search filters.\"\n    }\n}"
```

<h3 id="getquotesearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200  response|[QuoteResponse](#schemaquoteresponse)|
|401|Unauthorized|401  response|None|
|404|Not Found|404  response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-TheySaidSo-Api-Secret
</aside>

<h1 id="they-said-so-quotes-api-private-quotes">Private Quotes</h1>

Create and manage your own Quotes. You need an API key to access this service.

## put/quote

> Code samples

```bash
curl 'https://example.com/quote?quote=string' \
  -X PUT \
  -H 'Accept: application/json' \
  -H "X-TheySaidSo-Api-Secret: ${API_KEY}"
```

`PUT /quote`

Add a new quote to your private collection.

<h3 id="putquote-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|quote|query|string(string)|true|Quote|
|author|query|string(string)|false|Quote Author|
|tags|query|string(string)|false|Comma Separated tags|
|language|query|string(string)|false|Language. If not supplied an auto detection mechanism will be used to detect a language.|

> Example responses

> 200 Response

```json
"{\n  \"success\": {\n    \"total\": 1\n  },\n  \"content\": {\n    \"quote\": {\n      \"id\": \"0tztT1wYHRzdTf7jIccAzweF\"\n    }\n  }\n}"
```

> 401 Response

```json
"{\n    \"error\": {\n        \"code\": 401,\n        \"message\": \"Unauthorized\"\n    }\n}              "
```

<h3 id="putquote-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200  response|None|
|401|Unauthorized|401  response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-TheySaidSo-Api-Secret
</aside>

## post/quote

> Code samples

```bash
curl 'https://example.com/quote?quote=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-TheySaidSo-Api-Secret: ${API_KEY}"
```

`POST /quote`

Add a new quote to your private collection. Same as 'PUT' but added since some clients don't handle PUT well.

<h3 id="postquote-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|quote|query|string(string)|true|Quote|
|author|query|string(string)|false|Quote Author|
|tags|query|string(string)|false|Comma Separated tags|
|language|query|string(string)|false|Language. If not supplied an auto detection mechanism will be used to detect a language.|

> Example responses

> 200 Response

```json
"{\n  \"success\": {\n    \"total\": 1\n  },\n  \"content\": {\n    \"quote\": {\n      \"id\": \"0tztT1wYHRzdTf7jIccAzweF\"\n    }\n  }\n}"
```

> 401 Response

```json
"{\n    \"error\": {\n        \"code\": 401,\n        \"message\": \"Unauthorized\"\n    }\n}              "
```

<h3 id="postquote-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200  response|None|
|401|Unauthorized|401  response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-TheySaidSo-Api-Secret
</aside>

## delete/quote

> Code samples

```bash
curl 'https://example.com/quote?id=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "X-TheySaidSo-Api-Secret: ${API_KEY}"
```

`DELETE /quote`

Delete a quote. The user needs to be the owner of the quote to be able to delete it.


<h3 id="deletequote-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string(string)|true|Quote ID|

> Example responses

> 200 Response

```text
{}
```

> 401 Response

```json
"{\n    \"error\": {\n        \"code\": 401,\n        \"message\": \"Unauthorized\"\n    }\n}"
```

> 404 Response

```json
"{\n    \"error\": {\n        \"code\": 404,\n        \"message\": \"Not Found: Quote not found\"\n    }\n}                      "
```

<h3 id="deletequote-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200  response|None|
|401|Unauthorized|401  response|None|
|404|Not Found|404  response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-TheySaidSo-Api-Secret
</aside>

## patch/quote

> Code samples

```bash
curl 'https://example.com/quote?id=string' \
  -X PATCH \
  -H 'Accept: application/json' \
  -H "X-TheySaidSo-Api-Secret: ${API_KEY}"
```

`PATCH /quote`

Update a quote

<h3 id="patchquote-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string(string)|true|Quote ID|
|quote|query|string(string)|false|Quote|
|author|query|string(string)|false|Quote Author|
|language|query|string(string)|false|Language. If not supplied an auto detection mechanism will be used to detect a language.|
|tags|query|string|false|Comma Separated tags|

> Example responses

> 200 Response

```json
"{\n  \"success\": {\n    \"total\": 1\n  },\n  \"content\": {\n    \"quote\": {\n      \"id\": \"0tztT1wYHRzdTf7jIccAzweF\"\n    }\n  }\n}"
```

> 401 Response

```json
"{\n    \"error\": {\n        \"code\": 401,\n        \"message\": \"Unauthorized\"\n    }\n}              "
```

<h3 id="patchquote-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200  response|None|
|401|Unauthorized|401  response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-TheySaidSo-Api-Secret
</aside>

## get/quote/list

> Code samples

```bash
curl https://example.com/quote/list \
  -H 'Accept: application/json' \
  -H "X-TheySaidSo-Api-Secret: ${API_KEY}"
```

`GET /quote/list`

Get the list of quotes in your private collection.

<h3 id="getquotelist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|start|query|integer(int32)|false|Response is paged. This parameter controls where response starts the listing at|
|limit|query|integer(int32)|false|Response is paged. This parameter controls how many is returned in the result.|

> Example responses

> 200 Response

```json
"{\n    \"success\": {\n        \"total\": \"263\",\n        \"range\": {\n            \"start\": 0,\n            \"end\": 5\n        }\n    },\n    \"contents\": {\n        \"quotes\": [\n            {\n                \"quote\": \"I think you should defend to the death their right to march, and then go down and meet them with baseball bats.\",\n                \"length\": \"111\",\n                \"author\": \"Woody Allen\",\n                \"tags\": [],\n                \"id\": \"GkeLUydBfiAH0Tcs2w_gwAeF\"\n            },\n            {\n                \"quote\": \"We have come to dedicate a portion of that field, as a final resting place for those who here gave their lives that that nation might live. It is altogether fitting and proper that we should do this. ... The world will little note nor long remember what we say here, but it can never forget what they did here.\",\n                \"length\": \"310\",\n                \"author\": \"Abraham Lincoln\",\n                \"tags\": [],\n                \"id\": \"u6fD9eRFA2NFMHuEoeujaAeF\"\n            },\n            {\n                \"quote\": \"Eighty percent of success is showing up.\",\n                \"length\": \"40\",\n                \"author\": \"Woody Allen\",\n                \"tags\": [\n                    \"success\",\n                    \"tso-top-100\"\n                ],\n                \"id\": \"nLvp0vLfofW06PILxmERHgeF\"\n            },\n            {\n                \"quote\": \"Great ambition is the passion of a great character.  Those endowed with it may perform very good or very bad acts.  All depends on the principals which direct them.\",\n                \"length\": \"164\",\n                \"author\": \"Napoleon Bonaparte\",\n                \"tags\": [\n                    \"ambition\",\n                    \"inspire\",\n                    \"passion\"\n                ],\n                \"id\": \"X8juAoTtvxSEdgA0sGbYeQeF\"\n            },\n            {\n                \"quote\": \"I have had dreams, and I have had nightmares. I overcame the nightmares because of my dreams.\",\n                \"length\": \"93\",\n                \"author\": \"Dr. Jonas Salk\",\n                \"tags\": [\n                    \"dream\",\n                    \"nightmare\"\n                ],\n                \"id\": \"m_6Fj8QcXlVsQiiW7SAMLAeF\"\n            }\n        ]\n    }\n}"
```

> 401 Response

```json
"{\n    \"error\": {\n        \"code\": 401,\n        \"message\": \"Unauthorized\"\n    }\n} "
```

<h3 id="getquotelist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200  response|None|
|401|Unauthorized|401  response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-TheySaidSo-Api-Secret
</aside>

## post/quote/tags/add

> Code samples

```bash
curl 'https://example.com/quote/tags/add?id=string&tags=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-TheySaidSo-Api-Secret: ${API_KEY}"
```

`POST /quote/tags/add`

Add a tag to a given Quote.

<h3 id="postquotetagsadd-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string(string)|true|Quote ID|
|tags|query|string(string)|true|Comma Separated tags|

> Example responses

> 200 Response

```json
"{\n  \"success\": {\n    \"total\": 1\n  },\n  \"contents\": {\n    \"message\": \"Tags added\"\n  }\n}"
```

> 401 Response

```json
"{\n    \"error\": {\n        \"code\": 401,\n        \"message\": \"Unauthorized\"\n    }\n}"
```

> 404 Response

```json
"{\n    \"error\": {\n        \"code\": 404,\n        \"message\": \"Not Found: Quote not found\"\n    }\n}                      "
```

<h3 id="postquotetagsadd-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200  response|None|
|401|Unauthorized|401  response|None|
|404|Not Found|404  response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-TheySaidSo-Api-Secret
</aside>

## post/quote/tags/remove

> Code samples

```bash
curl 'https://example.com/quote/tags/remove?id=string&tags=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-TheySaidSo-Api-Secret: ${API_KEY}"
```

`POST /quote/tags/remove`

Remove a tag from a given quote.

<h3 id="postquotetagsremove-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string(string)|true|Quote ID|
|tags|query|string(string)|true|Comma Separated tags|

> Example responses

> 200 Response

```json
"{\n    \"success\": {\n        \"total\": 1\n    },\n    \"contents\": {\n        \"message\": \"Tags removed.\"\n    }\n}"
```

> 401 Response

```json
"{\n    \"error\": {\n        \"code\": 401,\n        \"message\": \"Unauthorized\"\n    }\n}"
```

> 404 Response

```json
"{\n    \"error\": {\n        \"code\": 404,\n        \"message\": \"Not Found: Quote not found\"\n    }\n}"
```

<h3 id="postquotetagsremove-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200  response|None|
|401|Unauthorized|401  response|None|
|404|Not Found|404  response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-TheySaidSo-Api-Secret
</aside>

<h1 id="they-said-so-quotes-api-quote-images">Quote Images</h1>

Create beatiful quote images or get one of the premade images. You need an API key to access this service.

<a href="https://theysaidso.com/api/quote#image">Find out more about image</a>

## get/quote/image

> Code samples

```bash
curl 'https://example.com/quote/image?id=string' \
  -H 'Accept: application/json' \
  -H "X-TheySaidSo-Api-Secret: ${API_KEY}"
```

`GET /quote/image`

Gets a Quote image for a given id. Response can be an image file as a binary or a base64 encoded contents wrapped in json. `TODO`


<h3 id="getquoteimage-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string(string)|true|Quote Image id|
|binary|query|boolean(boolean)|false|Should the response be a direct file download of the image or a base64 encoded image file wrapped in json?|

> Example responses

> 200 Response

```json
"{\n  \"success\": {\n    \"total\": 1\n  },\n  \"contents\": {\n    \"qimage\": {\n      \"id\": \"75c3EoOmPVolqfB4KeUhXgeF\",\n      \"quote_id\": \"5e0QH_0k5srOUN1Wdu9AgweF\",\n      \"permalink\": \"https://theysaidso.com/i/75c3EoOmPVolqfB4KeUhXgeF\",\n      \"download_uri\": \"https://theysaidso.com/i/image/75c3EoOmPVolqfB4KeUhXgeF\"\n    }\n  },\n  \"copyright\": \"2019-22 https://theysaidso.com\"\n}"
```

> 401 Response

```json
"{\n    \"error\": {\n        \"code\": 401,\n        \"message\": \"Unauthorized\"\n    }\n} "
```

> 404 Response

```json
"{\n    \"error\": {\n        \"code\": 404,\n        \"message\": \"Not Found: Quote image not found\"\n    }\n}                       "
```

<h3 id="getquoteimage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200  response|None|
|401|Unauthorized|401  response|None|
|404|Not Found|404  response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-TheySaidSo-Api-Secret
</aside>

## put/quote/image

> Code samples

```bash
curl 'https://example.com/quote/image?quote_id=string' \
  -X PUT \
  -H 'Accept: application/json' \
  -H "X-TheySaidSo-Api-Secret: ${API_KEY}"
```

`PUT /quote/image`

Create a new quote image for a given quote. Choose background colors/images , choose different font styles and generate a beautiful quote image. Did you just had a feeling of being a god or what?!


<h3 id="putquoteimage-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|quote_id|query|string(string)|true|Quote id|
|bgimage_id|query|string(string)|false|Background Image id ( Will override bgcolor if supplied)|
|bg_color|query|string(string)|false|Background Color(if background image id is not supplied)|
|font_id|query|string(string)|false|Font id|
|text_color|query|string(string)|false|Text Color|
|text_size|query|string(string)|false|Text/font size|
|halign|query|string(string)|false|Horizontal text Alignment Value|
|valign|query|string(string)|false|Vertical text Alignment Value|
|width|query|integer(integer)|false|Image Width(By default this takes the width of the background image)|
|height|query|integer(integer)|false|Image Height(By default this takes the height of the background image)|
|branding|query|boolean(boolean)|false|Disable They Said So branding (Only available in certain subscription levels. Ignored in other levels)|
|include_transparent_layer|query|boolean(boolean)|false|Should include a transparent layer between the text and the background image? This helps when the background image is bright and obscures the text.|

> Example responses

> 200 Response

```json
"{\n  \"success\": {\n    \"total\": 1\n  },\n  \"contents\": {\n      \"id\": \"75c3EoOmPVolqfB4KeUhXgeF\",\n  },\n  \"copyright\": \"2019-22 https://theysaidso.com\"\n}"
```

> 401 Response

```json
"{\n    \"error\": {\n        \"code\": 401,\n        \"message\": \"Unauthorized\"\n    }\n} "
```

> 404 Response

```json
"{\n    \"error\": {\n        \"code\": 404,\n        \"message\": \"Not Found: Quote image not found\"\n    }\n}                         "
```

<h3 id="putquoteimage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200  response|None|
|401|Unauthorized|401  response|None|
|404|Not Found|404  response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-TheySaidSo-Api-Secret
</aside>

## delete/quote/image

> Code samples

```bash
curl 'https://example.com/quote/image?id=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "X-TheySaidSo-Api-Secret: ${API_KEY}"
```

`DELETE /quote/image`

Delete a quote image. The user needs to be the owner of the quote image to be able to delete it.


<h3 id="deletequoteimage-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string(string)|true|Quote Image ID|

> Example responses

> 200 Response

```text
{}
```

> 401 Response

```json
"{\n    \"error\": {\n        \"code\": 401,\n        \"message\": \"Unauthorized\"\n    }\n}"
```

> 404 Response

```json
"{\n    \"error\": {\n        \"code\": 404,\n        \"message\": \"Not Found: Quote not found\"\n    }\n}                      "
```

<h3 id="deletequoteimage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200  response|None|
|401|Unauthorized|401  response|None|
|404|Not Found|404  response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-TheySaidSo-Api-Secret
</aside>

## post/quote/image/background

> Code samples

```bash
curl https://example.com/quote/image/background \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-TheySaidSo-Api-Secret: ${API_KEY}" \
  -F 'image=@/path/to/file' \
  -F 'tags=string'
```

`POST /quote/image/background`

Add an image for use later as a quote background image.

> Body parameter

```yaml
image: string
tags: string
```

<h3 id="postquoteimagebackground-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» image|body|string(binary)|true|Image file to add to your collection (png/jpg/gif are supported)|
|» tags|body|string(string)|false|Optional comma separated tags|

> Example responses

> 200 Response

```json
"{\n  \"success\": {\n    \"total\": 1\n  },\n  \"content\": {\n     \"id\" : \"afBLte5678bnzxc_iRbcg\"\n  }\n}"
```

> 401 Response

```json
"{\n    \"error\": {\n        \"code\": 401,\n        \"message\": \"Unauthorized\"\n    }\n}"
```

<h3 id="postquoteimagebackground-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200  response|None|
|401|Unauthorized|401  response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-TheySaidSo-Api-Secret
</aside>

## delete/quote/image/background

> Code samples

```bash
curl 'https://example.com/quote/image/background?id=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "X-TheySaidSo-Api-Secret: ${API_KEY}"
```

`DELETE /quote/image/background`

Delete a background image file. The user needs to be the owner of the background image to be able to delete it.


<h3 id="deletequoteimagebackground-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string(string)|true|Font ID|

> Example responses

> 200 Response

```text
{
  "success": {
    "total": 1
  },
  "content": "Resource Deleted"
}
```

> 401 Response

```json
"{\n    \"error\": {\n        \"code\": 401,\n        \"message\": \"Unauthorized\"\n    }\n}"
```

> 404 Response

```json
"{\n    \"error\": {\n        \"code\": 404,\n        \"message\": \"Not Found: Resource not found\"\n    }\n}                                          "
```

<h3 id="deletequoteimagebackground-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200  response|None|
|401|Unauthorized|401  response|None|
|404|Not Found|404  response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-TheySaidSo-Api-Secret
</aside>

## get/quote/image/background/list

> Code samples

```bash
curl https://example.com/quote/image/background/list \
  -H 'Accept: application/json' \
  -H "X-TheySaidSo-Api-Secret: ${API_KEY}"
```

`GET /quote/image/background/list`

Lists background images in your private collection. 


<h3 id="getquoteimagebackgroundlist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|start|query|integer(integer)|false|Response is paged. This parameter determines where the response should start.|

> Example responses

> 200 Response

```json
"{\n  \"success\": {\n    \"total\": 1\n  },\n  \"contents\": {\n    \"qimage\": {\n      \"id\": \"75c3EoOmPVolqfB4KeUhXgeF\",\n      \"quote_id\": \"5e0QH_0k5srOUN1Wdu9AgweF\",\n      \"permalink\": \"https://theysaidso.com/i/75c3EoOmPVolqfB4KeUhXgeF\",\n      \"download_uri\": \"https://theysaidso.com/i/image/75c3EoOmPVolqfB4KeUhXgeF\"\n    }\n  },\n  \"copyright\": \"2019-22 https://theysaidso.com\"\n}"
```

> 401 Response

```json
"{\n    \"error\": {\n        \"code\": 401,\n        \"message\": \"Unauthorized\"\n    }\n}     "
```

> 404 Response

```json
"{\n    \"error\": {\n        \"code\": 404,\n        \"message\": \"Not Found: Quote image matching the query criteria not found\"\n    }\n}"
```

<h3 id="getquoteimagebackgroundlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200  response|None|
|401|Unauthorized|401  response|None|
|404|Not Found|404  response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-TheySaidSo-Api-Secret
</aside>

## get/quote/image/background/search

> Code samples

```bash
curl https://example.com/quote/image/background/search \
  -H 'Accept: application/json' \
  -H "X-TheySaidSo-Api-Secret: ${API_KEY}"
```

`GET /quote/image/background/search`

Searches for a background image with a given tag. 


<h3 id="getquoteimagebackgroundsearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|query|query|string(string)|false|Tag string|

> Example responses

> 200 Response

```json
"{\n  \"success\": {\n    \"total\": 1\n  },\n  \"contents\": {\n    \"qimage\": {\n      \"id\": \"75c3EoOmPVolqfB4KeUhXgeF\",\n      \"quote_id\": \"5e0QH_0k5srOUN1Wdu9AgweF\",\n      \"permalink\": \"https://theysaidso.com/i/75c3EoOmPVolqfB4KeUhXgeF\",\n      \"download_uri\": \"https://theysaidso.com/i/image/75c3EoOmPVolqfB4KeUhXgeF\"\n    }\n  },\n  \"copyright\": \"2019-22 https://theysaidso.com\"\n}"
```

> 401 Response

```json
"{\n    \"error\": {\n        \"code\": 401,\n        \"message\": \"Unauthorized\"\n    }\n}     "
```

> 404 Response

```json
"{\n    \"error\": {\n        \"code\": 404,\n        \"message\": \"Not Found: Quote image matching the query criteria not found\"\n    }\n}"
```

<h3 id="getquoteimagebackgroundsearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200  response|None|
|401|Unauthorized|401  response|None|
|404|Not Found|404  response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-TheySaidSo-Api-Secret
</aside>

## post/quote/image/background/tags/add

> Code samples

```bash
curl 'https://example.com/quote/image/background/tags/add?id=string&tags=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-TheySaidSo-Api-Secret: ${API_KEY}"
```

`POST /quote/image/background/tags/add`

Add a tag to a given Image.

<h3 id="postquoteimagebackgroundtagsadd-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string(string)|true|Image ID|
|tags|query|string(string)|true|Comma Separated tags|

> Example responses

> 200 Response

```json
"{\n}"
```

> 401 Response

```json
"{\n    \"error\": {\n        \"code\": 401,\n        \"message\": \"Unauthorized\"\n    }\n}"
```

> 404 Response

```json
"{\n    \"error\": {\n        \"code\": 404,\n        \"message\": \"Not Found: Image not found\"\n    }\n}                      "
```

<h3 id="postquoteimagebackgroundtagsadd-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200  response|None|
|401|Unauthorized|401  response|None|
|404|Not Found|404  response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-TheySaidSo-Api-Secret
</aside>

## post/quote/image/background/tags/remove

> Code samples

```bash
curl 'https://example.com/quote/image/background/tags/remove?id=string&tags=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-TheySaidSo-Api-Secret: ${API_KEY}"
```

`POST /quote/image/background/tags/remove`

Remove a tag from a given Image.

<h3 id="postquoteimagebackgroundtagsremove-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string(string)|true|Image ID|
|tags|query|string(string)|true|Comma Separated tags|

> Example responses

> 200 Response

```json
"{\n}"
```

> 401 Response

```json
"{\n    \"error\": {\n        \"code\": 401,\n        \"message\": \"Unauthorized\"\n    }\n}"
```

> 404 Response

```json
"{\n    \"error\": {\n        \"code\": 404,\n        \"message\": \"Not Found: Image not found\"\n    }\n}"
```

<h3 id="postquoteimagebackgroundtagsremove-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200  response|None|
|401|Unauthorized|401  response|None|
|404|Not Found|404  response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-TheySaidSo-Api-Secret
</aside>

## post/quote/image/font

> Code samples

```bash
curl https://example.com/quote/image/font \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-TheySaidSo-Api-Secret: ${API_KEY}" \
  -F 'font=@/path/to/file' \
  -F 'tags=string'
```

`POST /quote/image/font`

Add a font file for use later in creating a quote image. This is essentially a `PUT` but not many clients handle PUT with binary stream i.e. a file, gracefully.

> Body parameter

```yaml
font: string
tags: string
```

<h3 id="postquoteimagefont-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» font|body|string(binary)|true|Font file to add to your collection (ttf/otf are supported)|
|» tags|body|string(string)|false|Optional comma separated tags|

> Example responses

> 200 Response

```json
"{\n  \"success\": {\n    \"total\": 1\n  },\n  \"content\": {\n     \"id\" : \"afBLte5678bnzxc_iRbcg\"\n  }\n}"
```

> 401 Response

```json
"{\n    \"error\": {\n        \"code\": 401,\n        \"message\": \"Unauthorized\"\n    }\n}"
```

<h3 id="postquoteimagefont-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200  response|None|
|401|Unauthorized|401  response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-TheySaidSo-Api-Secret
</aside>

## delete/quote/image/font

> Code samples

```bash
curl 'https://example.com/quote/image/font?id=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "X-TheySaidSo-Api-Secret: ${API_KEY}"
```

`DELETE /quote/image/font`

Delete a font file. The user needs to be the owner of the font to be able to delete it.


<h3 id="deletequoteimagefont-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string(string)|true|Font ID|

> Example responses

> 200 Response

```text
{
  "success": {
    "total": 1
  },
  "content": "Resource Deleted"
}
```

> 401 Response

```json
"{\n    \"error\": {\n        \"code\": 401,\n        \"message\": \"Unauthorized\"\n    }\n}"
```

> 404 Response

```json
"{\n    \"error\": {\n        \"code\": 404,\n        \"message\": \"Not Found: Resource not found\"\n    }\n}                                          "
```

<h3 id="deletequoteimagefont-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200  response|None|
|401|Unauthorized|401  response|None|
|404|Not Found|404  response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-TheySaidSo-Api-Secret
</aside>

## get/quote/image/font/list

> Code samples

```bash
curl https://example.com/quote/image/font/list \
  -H 'Accept: application/json' \
  -H "X-TheySaidSo-Api-Secret: ${API_KEY}"
```

`GET /quote/image/font/list`

Lists background images in your private collection. 


<h3 id="getquoteimagefontlist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|start|query|integer(integer)|false|Response is paged. This parameter determines where the response should start.|

> Example responses

> 200 Response

```json
"{\n  \"success\": {\n    \"total\": 1\n  },\n  \"contents\": {\n    \"qimage\": {\n      \"id\": \"75c3EoOmPVolqfB4KeUhXgeF\",\n      \"quote_id\": \"5e0QH_0k5srOUN1Wdu9AgweF\",\n      \"permalink\": \"https://theysaidso.com/i/75c3EoOmPVolqfB4KeUhXgeF\",\n      \"download_uri\": \"https://theysaidso.com/i/image/75c3EoOmPVolqfB4KeUhXgeF\"\n    }\n  },\n  \"copyright\": \"2019-22 https://theysaidso.com\"\n}"
```

> 401 Response

```json
"{\n    \"error\": {\n        \"code\": 401,\n        \"message\": \"Unauthorized\"\n    }\n}     "
```

> 404 Response

```json
"{\n    \"error\": {\n        \"code\": 404,\n        \"message\": \"Not Found: Quote image matching the query criteria not found\"\n    }\n}"
```

<h3 id="getquoteimagefontlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200  response|None|
|401|Unauthorized|401  response|None|
|404|Not Found|404  response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-TheySaidSo-Api-Secret
</aside>

## get/quote/image/font/search

> Code samples

```bash
curl https://example.com/quote/image/font/search \
  -H 'Accept: application/json' \
  -H "X-TheySaidSo-Api-Secret: ${API_KEY}"
```

`GET /quote/image/font/search`

Searches for a font with a given tag. 


<h3 id="getquoteimagefontsearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|query|query|string(string)|false|Tag string|

> Example responses

> 200 Response

```json
"{\n  \"success\": {\n    \"total\": 1\n  },\n  \"contents\": {\n    \"qimage\": {\n      \"id\": \"75c3EoOmPVolqfB4KeUhXgeF\",\n      \"quote_id\": \"5e0QH_0k5srOUN1Wdu9AgweF\",\n      \"permalink\": \"https://theysaidso.com/i/75c3EoOmPVolqfB4KeUhXgeF\",\n      \"download_uri\": \"https://theysaidso.com/i/image/75c3EoOmPVolqfB4KeUhXgeF\"\n    }\n  },\n  \"copyright\": \"2019-22 https://theysaidso.com\"\n}"
```

> 401 Response

```json
"{\n    \"error\": {\n        \"code\": 401,\n        \"message\": \"Unauthorized\"\n    }\n}     "
```

> 404 Response

```json
"{\n    \"error\": {\n        \"code\": 404,\n        \"message\": \"Not Found: Quote image matching the query criteria not found\"\n    }\n}"
```

<h3 id="getquoteimagefontsearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200  response|None|
|401|Unauthorized|401  response|None|
|404|Not Found|404  response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-TheySaidSo-Api-Secret
</aside>

## post/quote/image/font/tags/add

> Code samples

```bash
curl 'https://example.com/quote/image/font/tags/add?id=string&tags=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-TheySaidSo-Api-Secret: ${API_KEY}"
```

`POST /quote/image/font/tags/add`

Add a tag to a given font.

<h3 id="postquoteimagefonttagsadd-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string(string)|true|Font ID|
|tags|query|string(string)|true|Comma Separated tags|

> Example responses

> 200 Response

```json
"{\n}"
```

> 401 Response

```json
"{\n    \"error\": {\n        \"code\": 401,\n        \"message\": \"Unauthorized\"\n    }\n}"
```

> 404 Response

```json
"{\n    \"error\": {\n        \"code\": 404,\n        \"message\": \"Not Found: font not found\"\n    }\n}                      "
```

<h3 id="postquoteimagefonttagsadd-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200  response|None|
|401|Unauthorized|401  response|None|
|404|Not Found|404  response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-TheySaidSo-Api-Secret
</aside>

## post/quote/image/font/tags/remove

> Code samples

```bash
curl 'https://example.com/quote/image/font/tags/remove?id=string&tags=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-TheySaidSo-Api-Secret: ${API_KEY}"
```

`POST /quote/image/font/tags/remove`

Remove a tag from a given Font.

<h3 id="postquoteimagefonttagsremove-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string(string)|true|Font ID|
|tags|query|string(string)|true|Comma Separated tags|

> Example responses

> 200 Response

```json
"{\n}"
```

> 401 Response

```json
"{\n    \"error\": {\n        \"code\": 401,\n        \"message\": \"Unauthorized\"\n    }\n}"
```

> 404 Response

```json
"{\n    \"error\": {\n        \"code\": 404,\n        \"message\": \"Not Found: Font not found\"\n    }\n}"
```

<h3 id="postquoteimagefonttagsremove-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200  response|None|
|401|Unauthorized|401  response|None|
|404|Not Found|404  response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-TheySaidSo-Api-Secret
</aside>

## get/quote/image/search

> Code samples

```bash
curl https://example.com/quote/image/search \
  -H 'Accept: application/json' \
  -H "X-TheySaidSo-Api-Secret: ${API_KEY}"
```

`GET /quote/image/search`

Gets a Random Quote image. Optional `category` param determines the category of quote used in the image. Optional `author` param gets the quote image of a given author. 


<h3 id="getquoteimagesearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|category|query|string(string)|false|Quote Category|
|author|query|string(string)|false|Quote Author|
|private|query|boolean(boolean)|false|Should search private collection. Default searches public image collection.|

> Example responses

> 200 Response

```json
"{\n  \"success\": {\n    \"total\": 1\n  },\n  \"contents\": {\n    \"qimage\": {\n      \"id\": \"75c3EoOmPVolqfB4KeUhXgeF\",\n      \"quote_id\": \"5e0QH_0k5srOUN1Wdu9AgweF\",\n      \"permalink\": \"https://theysaidso.com/i/75c3EoOmPVolqfB4KeUhXgeF\",\n      \"download_uri\": \"https://theysaidso.com/i/image/75c3EoOmPVolqfB4KeUhXgeF\"\n    }\n  },\n  \"copyright\": \"2019-22 https://theysaidso.com\"\n}"
```

> 401 Response

```json
"{\n    \"error\": {\n        \"code\": 401,\n        \"message\": \"Unauthorized\"\n    }\n}     "
```

> 404 Response

```json
"{\n    \"error\": {\n        \"code\": 404,\n        \"message\": \"Not Found: Quote image matching the query criteria not found\"\n    }\n}"
```

<h3 id="getquoteimagesearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200  response|None|
|401|Unauthorized|401  response|None|
|404|Not Found|404  response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-TheySaidSo-Api-Secret
</aside>

<h1 id="they-said-so-quotes-api-qshow">Qshow</h1>

Access Qshow - quote collection service. Create curated quotes collection. You can group quotes by any way you want and access them as a single unit. You need an API key to access this service.

## get/qshow

> Code samples

```bash
curl 'https://example.com/qshow?id=string' \
  -H 'Accept: application/json' \
  -H "X-TheySaidSo-Api-Secret: ${API_KEY}"
```

`GET /qshow`

Gets a details about a qshow.


<h3 id="getqshow-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string(string)|true|Qshow ID|

> Example responses

> 200 Response

```json
"{\n    \"success\": {\n        \"total\": 1\n    },\n    \"contents\": {\n        \"qshow\": {\n            \"title\": \"A tribute to Steve Jobs!\",\n            \"description\": \"A collection of great quotes from the master inventor Steve Jobs!\",\n            \"background\": \"https://theysaidso.com\",\n            \"language\": \"en\",\n            \"id\": \"CodzN7F_vU_URoHrPSUvDgeF\"\n        }\n    },\n    \"copyright\": {\n        \"year\": \"2016-18\",\n        \"url\": \"http://theysaidso.com\"\n    }\n}"
```

> 401 Response

```json
"{\n    \"error\": {\n        \"code\": 401,\n        \"message\": \"Unauthorized\"\n    }\n}"
```

> 404 Response

```json
"{\n    \"error\": {\n        \"code\": 404,\n        \"message\": \"Not Found: Qshow not found\"\n    }\n}                 "
```

<h3 id="getqshow-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200  response|None|
|401|Unauthorized|401  response|None|
|404|Not Found|404  response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-TheySaidSo-Api-Secret
</aside>

## put/qshow

> Code samples

```bash
curl 'https://example.com/qshow?title=string' \
  -X PUT \
  -H 'Accept: application/json' \
  -H "X-TheySaidSo-Api-Secret: ${API_KEY}"
```

`PUT /qshow`

Create and add a new qshow to your private collection.

<h3 id="putqshow-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|title|query|string(string)|true|Qshow title|
|description|query|string(string)|false|Qshow description|
|tags|query|[string]|false|Tags for the qshow|

> Example responses

> 200 Response

```json
"{\n  \"success\": {\n    \"total\": 1\n  },\n  \"content\": {\n    \"quote\": {\n      \"id\": \"CodzN7F_vU_URoHrPSUvDgeF\"\n    }\n  }\n}"
```

> 401 Response

```json
"{\n    \"error\": {\n        \"code\": 401,\n        \"message\": \"Unauthorized\"\n    }\n}              "
```

<h3 id="putqshow-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200  response|None|
|401|Unauthorized|401  response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-TheySaidSo-Api-Secret
</aside>

## delete/qshow

> Code samples

```bash
curl 'https://example.com/qshow?id=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "X-TheySaidSo-Api-Secret: ${API_KEY}"
```

`DELETE /qshow`

Delete a qshow.


<h3 id="deleteqshow-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string(string)|true|Qshow ID|

> Example responses

> 200 Response

```text
{}
```

> 401 Response

```json
"{\n    \"error\": {\n        \"code\": 401,\n        \"message\": \"Unauthorized\"\n    }\n}"
```

> 404 Response

```json
"{\n    \"error\": {\n        \"code\": 404,\n        \"message\": \"Not Found: Qshow not found\"\n    }\n}                      "
```

<h3 id="deleteqshow-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200  response|None|
|401|Unauthorized|401  response|None|
|404|Not Found|404  response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-TheySaidSo-Api-Secret
</aside>

## patch/qshow

> Code samples

```bash
curl 'https://example.com/qshow?id=string' \
  -X PATCH \
  -H 'Accept: application/json' \
  -H "X-TheySaidSo-Api-Secret: ${API_KEY}"
```

`PATCH /qshow`

Update an existing qshow.

<h3 id="patchqshow-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string(string)|true|Qshow ID|
|title|query|string(string)|false|Qshow title|
|description|query|string(string)|false|Qshow description|
|tags|query|[string]|false|Tags for the qshow|

> Example responses

> 200 Response

```json
"{\n  \"success\": {\n    \"total\": 1\n  },\n  \"content\": {\n    \"quote\": {\n      \"id\": \"CodzN7F_vU_URoHrPSUvDgeF\"\n    }\n  }\n}"
```

> 401 Response

```json
"{\n    \"error\": {\n        \"code\": 401,\n        \"message\": \"Unauthorized\"\n    }\n}"
```

> 404 Response

```json
"{\n    \"error\": {\n        \"code\": 404,\n        \"message\": \"Not Found: Qshow not found\"\n    }\n}                    "
```

<h3 id="patchqshow-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200  response|None|
|401|Unauthorized|401  response|None|
|404|Not Found|404  response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-TheySaidSo-Api-Secret
</aside>

## get/qshow/list

> Code samples

```bash
curl https://example.com/qshow/list \
  -H 'Accept: application/json' \
  -H "X-TheySaidSo-Api-Secret: ${API_KEY}"
```

`GET /qshow/list`

Get the list of Qshows in They Said So platform.

<h3 id="getqshowlist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|start|query|integer(int32)|false|Response is paged. This parameter controls where response starts the listing at|
|public|query|boolean(boolean)|false|Should include public qshows or not in the list|

> Example responses

> 200 Response

```json
"{\n    \"success\": {\n        \"total\": \"39\",\n        \"start\": 0,\n        \"limit\": 5\n    },\n    \"contents\": {\n        \"qshows\": [\n            {\n                \"title\": \"A tribute to Steve Jobs!\",\n                \"description\": \"A collection of great quotes from the master inventor Steve Jobs!\",\n                \"background\": \"/img/bgs/stevejobs.jpg\",\n                \"language\": \"en\",\n                \"id\": \"CodzN7F_vU_URoHrPSUvDgeF\"\n            },\n            {\n                \"title\": \"Celebrating Life!\",\n                \"description\": \"Eat, Sleep, Live your life!\",\n                \"background\": \"/img/slide-01.jpg\",\n                \"language\": \"en\",\n                \"id\": \"opDfpWwAD6lrfxdW_GBoVAeF\"\n            },\n            {\n                \"title\": \"Books \",\n                \"description\": \"Reading is the greatest pleasure for many! Here's to the bookies!\",\n                \"background\": \"/img/bgs/book.jpg\",\n                \"language\": \"en\",\n                \"id\": \"WMeCgo5WpiLk_qlbdAVyQweF\"\n            },\n            {\n                \"title\": \"Kids\",\n                \"description\": \"\",\n                \"background\": \"\",\n                \"language\": \"en\",\n                \"id\": \"sx9reMTiaGzXdt7lbVWntQeF\"\n            },\n            {\n                \"title\": \"Great quotes to live by\",\n                \"description\": \"Here are some powerful words of wisdom that inspire, educate and motivate a person to take action. \",\n                \"background\": \"/img/slide-03.jpg\",\n                \"language\": \"en\",\n                \"id\": \"k_kwBr7BKzxz3vLTQ6TWMQeF\"\n            }\n        ]\n    },\n    \"copyright\": {\n        \"year\": \"2016-18\",\n        \"url\": \"http://theysaidso.com\"\n    }\n}"
```

> 401 Response

```json
"{\n    \"error\": {\n        \"code\": 401,\n        \"message\": \"Unauthorized\"\n    }\n} "
```

<h3 id="getqshowlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200  response|None|
|401|Unauthorized|401  response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-TheySaidSo-Api-Secret
</aside>

## get/qshow/quotes

> Code samples

```bash
curl 'https://example.com/qshow/quotes?id=string' \
  -H 'Accept: application/json' \
  -H "X-TheySaidSo-Api-Secret: ${API_KEY}"
```

`GET /qshow/quotes`

Get the quotes in a given Qshow.

<h3 id="getqshowquotes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string(string)|true|Qshow ID|

> Example responses

> 200 Response

```json
"{\n    \"success\": {\n        \"total\": 1\n    },\n    \"contents\": {\n        \"qshow\": {\n            \"title\": \"A tribute to Steve Jobs!\",\n            \"description\": \"A collection of great quotes from the master inventor Steve Jobs!\",\n            \"background\": \"https://theysaidso.com/img/bgs/stevejobs.jpg\",\n            \"language\": \"en\",\n            \"id\": \"CodzN7F_vU_URoHrPSUvDgeF\"\n        },\n        \"quotes\": [\n            {\n                \"quote\": \"A lot of people in our industry haven't had very diverse experiences. So they don't have enough dots to connect, and they end up with very linear solutions without a broad perspective on the problem. The broader one's understanding of the human experience, the better design we will have.\",\n                \"length\": \"288\",\n                \"author\": \"Steve Jobs\",\n                \"tags\": [\n                    \"design\",\n                    \"diversity\",\n                    \"experience\",\n                    \"linear-thinking\"\n                ],\n                \"id\": \"6HW5Uopw8VFLRKZEqGKDXQeF\"\n            },\n            {\n                \"quote\": \"Stay hungry. Stay foolish.\",\n                \"length\": \"26\",\n                \"author\": \"Steve Jobs\",\n                \"tags\": [\n                    \"inspirational\"\n                ],\n                \"id\": \"K__p_L1iMZtWulJ1SH4CogeF\"\n            },\n            {\n                \"quote\": \"Your time is limited, so don't waste it living someone else's life.\",\n                \"length\": \"67\",\n                \"author\": \"Steve Jobs\",\n                \"tags\": [\n                    \"life-and-living\",\n                    \"tso-life\"\n                ],\n                \"id\": \"mFjh_dNB_exJMHbyzRFIvQeF\"\n            },\n            {\n                \"quote\": \"If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you'll know when you find it. And, like any great relationship, it just gets better and better as the years roll on.\",\n                \"length\": \"207\",\n                \"author\": \"Steve Jobs\",\n                \"tags\": [\n                    \"careers\",\n                    \"ideas\",\n                    \"ingenuity\",\n                    \"match\",\n                    \"passion\"\n                ],\n                \"id\": \"l3Cww1Bx7cYGlIpB_wZuOAeF\"\n            },\n            {\n                \"quote\": \"Details matter, it's worth waiting to get it right.\",\n                \"length\": \"51\",\n                \"author\": \"Steve Jobs\",\n                \"tags\": [\n                    \"apple\",\n                    \"ileadership\",\n                    \"jobs\",\n                    \"mac\",\n                    \"macintosh\",\n                    \"steve\"\n                ],\n                \"id\": \"A8gqJ6u2x3ZdUDU5VlnIxgeF\"\n            },\n            {\n                \"quote\": \"Be a yardstick of quality. Some people aren't used to an environment where excellence is expected.\",\n                \"length\": \"98\",\n                \"author\": \"Steve Jobs\",\n                \"tags\": [\n                    \"environment\",\n                    \"excellence\",\n                    \"people\",\n                    \"quality\"\n                ],\n                \"id\": \"rlqbJLNmDMPT_qkCpDBjEgeF\"\n            },\n            {\n                \"quote\": \"If you live each day as it was your last, someday you'll most certainly be right\",\n                \"length\": \"80\",\n                \"author\": \"Steve Jobs\",\n                \"tags\": [\n                    \"death\",\n                    \"rip\",\n                    \"steve\",\n                    \"tso-life\"\n                ],\n                \"id\": \"sBse0_uUemQD2l_qdL9BJgeF\"\n            },\n            {\n                \"quote\": \"Death is the destination we all share, no one has ever escaped it. And that is as it should be because death is very likely the single best invention of life.\",\n                \"length\": \"158\",\n                \"author\": \"Steve Jobs\",\n                \"tags\": [\n                    \"death\",\n                    \"destination\",\n                    \"invention\",\n                    \"life-and-death\",\n                    \"tso-life\"\n                ],\n                \"id\": \"LvjYLbdYzBOAqPPKfohvmQeF\"\n            },\n            {\n                \"quote\": \"Why join the navy if you can be a pirate?\",\n                \"length\": \"41\",\n                \"author\": \"Steve Jobs\",\n                \"tags\": [\n                    \"career\"\n                ],\n                \"id\": \"S6xVf_Nluid5r_0iO73ArQeF\"\n            },\n            {\n                \"quote\": \"One more thing...\",\n                \"length\": \"17\",\n                \"author\": \"Steve Jobs\",\n                \"tags\": [\n                    \"inspiration\"\n                ],\n                \"id\": \"X2QetehlwForyBZ5Nbp2YQeF\"\n            }\n        ]\n    },\n    \"copyright\": {\n        \"year\": \"2016-18\",\n        \"url\": \"http://theysaidso.com\"\n    }\n}"
```

> 401 Response

```json
"{\n    \"error\": {\n        \"code\": 401,\n        \"message\": \"Unauthorized\"\n    }\n}"
```

> 404 Response

```json
"{\n    \"error\": {\n        \"code\": 404,\n        \"message\": \"Not Found: Qshow not found\"\n    }\n}                      "
```

<h3 id="getqshowquotes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200  response|None|
|401|Unauthorized|401  response|None|
|404|Not Found|404  response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-TheySaidSo-Api-Secret
</aside>

## post/qshow/quotes/add

> Code samples

```bash
curl 'https://example.com/qshow/quotes/add?id=string&quoteid=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-TheySaidSo-Api-Secret: ${API_KEY}"
```

`POST /qshow/quotes/add`

Add a quote to a given Qshow.

<h3 id="postqshowquotesadd-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string(string)|true|Qshow ID|
|quoteid|query|string(string)|true|Quote ID to add the qshow collection|

> Example responses

> 200 Response

```json
"{\n  \"success\": {\n    \"total\": 1\n  },\n  \"content\": {\n    \"Quote added\"\n  }\n}"
```

> 401 Response

```json
"{\n    \"error\": {\n        \"code\": 401,\n        \"message\": \"Unauthorized\"\n    }\n}"
```

> 404 Response

```json
"{\n    \"error\": {\n        \"code\": 404,\n        \"message\": \"Not Found: Qshow not found\"\n    }\n}                      "
```

<h3 id="postqshowquotesadd-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200  response|None|
|401|Unauthorized|401  response|None|
|404|Not Found|404  response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-TheySaidSo-Api-Secret
</aside>

## post/qshow/quotes/remove

> Code samples

```bash
curl 'https://example.com/qshow/quotes/remove?id=string&quoteid=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-TheySaidSo-Api-Secret: ${API_KEY}"
```

`POST /qshow/quotes/remove`

Remove a quote to a given Qshow.

<h3 id="postqshowquotesremove-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string(string)|true|Qshow ID|
|quoteid|query|string(string)|true|Quote ID to remove from the qshow collection|

> Example responses

> 200 Response

```json
"{\n  \"success\": {\n    \"total\": 1\n  },\n  \"content\": {\n    \"Quote removed from Qshow\"\n  }\n}"
```

> 401 Response

```json
"{\n    \"error\": {\n        \"code\": 401,\n        \"message\": \"Unauthorized\"\n    }\n}"
```

> 404 Response

```json
"{\n    \"error\": {\n        \"code\": 404,\n        \"message\": \"Not Found: Qshow not found\"\n    }\n}                      "
```

<h3 id="postqshowquotesremove-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200  response|None|
|401|Unauthorized|401  response|None|
|404|Not Found|404  response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-TheySaidSo-Api-Secret
</aside>

# Schemas

<h2 id="tocS_NewQuote">NewQuote</h2>
<!-- backwards compatibility -->
<a id="schemanewquote"></a>
<a id="schema_NewQuote"></a>
<a id="tocSnewquote"></a>
<a id="tocsnewquote"></a>

```json
{
  "author": "string",
  "quote": "string",
  "tags": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|author|string|false|none|Author name of quote.|
|quote|string|true|none|The Quote.|
|tags|[string]|false|none|Array of tags/categories.|

<h2 id="tocS_QOD">QOD</h2>
<!-- backwards compatibility -->
<a id="schemaqod"></a>
<a id="schema_QOD"></a>
<a id="tocSqod"></a>
<a id="tocsqod"></a>

```json
{
  "author": "string",
  "quote": "string",
  "tags": [
    "string"
  ],
  "id": "string",
  "image": "string",
  "length": 0,
  "date": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|author|string|false|none|Author name of quote.|
|quote|string|true|none|The Quote.|
|tags|[string]|false|none|Array of tags/categories.|
|id|string|true|none|Unique identifier representing a specific quote in theysaidso.com.|
|image|string|false|none|Image URL that can be used for background to display this quote.|
|length|integer(int32)|false|none|Length of the quote string.|
|date|string|true|none|Date this quote of the day belongs to|

<h2 id="tocS_Quote">Quote</h2>
<!-- backwards compatibility -->
<a id="schemaquote"></a>
<a id="schema_Quote"></a>
<a id="tocSquote"></a>
<a id="tocsquote"></a>

```json
{
  "author": "string",
  "quote": "string",
  "tags": [
    "string"
  ],
  "id": "string",
  "image": "string",
  "length": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|author|string|false|none|Author name of quote.|
|quote|string|true|none|The Quote.|
|tags|[string]|false|none|Array of tags/categories.|
|id|string|true|none|Unique identifier representing a specific quote in theysaidso.com.|
|image|string|false|none|Image URL that can be used for background to display this quote.|
|length|integer(int32)|false|none|Length of the quote string.|

<h2 id="tocS_QuoteResponse">QuoteResponse</h2>
<!-- backwards compatibility -->
<a id="schemaquoteresponse"></a>
<a id="schema_QuoteResponse"></a>
<a id="tocSquoteresponse"></a>
<a id="tocsquoteresponse"></a>

```json
{
  "contents": {
    "quotes": [
      {
        "author": "string",
        "quote": "string",
        "tags": [
          "string"
        ],
        "id": "string",
        "image": "string",
        "length": 0
      }
    ]
  },
  "success": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contents|object|false|none|none|
|success|string|false|none|Metadata about this successful call|
