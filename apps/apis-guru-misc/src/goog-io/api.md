<h1 id="googio-unoffical-google-search-api">goog.io | Unoffical Google Search API v0.1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

# Intoduction

This is the OpenAPI V3 documentation for https://api.goog.io

An API to perform Google Searches. Extremely fast and accurate. Zero proxies. Clean USA IPs.

Simple to use API, but advance enough to support special parameters such as languages, country and geographic locality.

Googio is the ultimate search API for Google Searches, Google News, and Google SERP.
# Docs

> An Unofficial Google Search API

An API to perform Google Searches. Extremely fast and accurate. Zero proxies. Clean USA IPs.

Simple to use API, but advance enough to support special parameters such as languages, country and geographic locality.

# Example Code

 Check out [Github repo](https://github.com/googio/googio_examples) for example code for calling the API with various languages.

# Authentication

### API Key

Optional API key for authenticated access. Note that we use "API key" interchangably in these docs.

Authenticated requests must include an `apikey` header containing your subscription's API Key.

| Security Schema Type | Header Name | Example Token |
| --- | --- | --- |
| API Key | `apikey` | c5bfb018-ab46-4e61-9271-4ec7e9c04a6e |

In the following example, `YOU_APIKEY` represents the auth token for your account.

```
curl --header 'apikey: YOU_APIKEY'
```

You can view and manage your API keys in the [Dashboard](/dashboard).

Be sure to keep your API keys secure. Do not share them in publicly accessible areas such as GitHub, client-side code, and so forth.

Also note that all API requests must be made over **HTTPS**. Calls made over plain HTTP will attempt to be automatically upgraded to HTTPS, though this use cases is discouraged.


## Rate Limits

API requests may be rate limited depending on your subscription plan and traffic patterns. The following response headers will be present in these cases:

| Header | Description |
| ------ | ----------- |
| `X-RateLimit-Limit` | The maximum number of requests that the consumer is permitted to make. |
| `X-RateLimit-Remaining` | The number of requests remaining in the current rate limit window. |
| `X-RateLimit-Reset` | The time at which the current rate limit window resets in UTC epoch seconds. |

When the rate limit is **exceeded**, an error is returned with the status "**429 Too Many Requests**":

```json
{
  "error": {
    "code": "too_many_requests",
    "message": "Rate limit exceeded"
  }
}
```



## Errors

This API uses conventional HTTP response codes to indicate the success or failure of API requests. In general: Codes in the `2xx` range indicate success. Codes in the `4xx` range indicate an error that failed given the information provided (e.g., a required parameter was omitted, endpoint not found, etc.). Codes in the `5xx` range indicate an error with our API (these are rare).

Base URLs:

* <a href="https://api.goog.io">https://api.goog.io</a>

Email: <a href="mailto:support@goog.io">API Support</a> 
Web: <a href="https://goog.io">API Support</a> 

# Authentication

* API Key (apikey)
    - Parameter Name: **apikey**, in: header. You can view and manage your API keys in the [Dashboard](https://goog.io/dashboard)

<h1 id="googio-unoffical-google-search-api-default">Default</h1>

## Status

<a id="opIdGet the status of the API service"></a>

> Code samples

```bash
curl https://example.com/ \
  -H 'Accept: application/json' \
  -H "apikey: ${API_KEY}"
```

`GET /`

It "status" == true then API is up, else the API is down

> Example responses

> 200 Response

```json
{
  "status": false
}
```

<h3 id="status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|404|Not Found|Not Found|None|

<h3 id="status-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|boolean|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apikey
</aside>

## Crawl

<a id="opIdCrawl"></a>

> Code samples

```bash
curl https://example.com/v1/crawl/q%3Dgoogle%2Bsearch%2Bapi \
  -H 'Accept: application/json' \
  -H "apikey: ${API_KEY}"
```

`GET /v1/crawl/{query}`

Perform Google Search

 Parameters
----------
query : the string query to perform search. supports advance queries. Check out https://moz.com/blog/the-ultimate-guide-to-the-google-search-parameters guide for formating

Returns
-------
json: a the html source of the results page

<h3 id="crawl-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|query|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "answer": null,
  "results": [
    "<!doctype html><html itemscope=\"\" itemtype=\"http://schema.org/SearchResultsPage\" lang=\"en\"><head> ... </body></html>"
  ],
  "total": null
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="crawl-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|404|Not Found|Not Found|None|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|
|429|Too Many Requests|Rate limit exceeded|None|

<h3 id="crawl-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|answer|string|false|none|none|
|results|[string]|false|none|none|
|total|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apikey
</aside>

## Images

<a id="opIdImages"></a>

> Code samples

```bash
curl https://example.com/v1/images/string \
  -H 'Accept: application/json' \
  -H "apikey: ${API_KEY}"
```

`GET /v1/images/{query}`

Perform Google Image Search

Parameters
----------
query : the string query to perform search. supports advance queries.

Returns
-------
json: a list of results with the link, description, and title for each result

<h3 id="images-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|query|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "answers": [],
  "image_results": [
    {
      "image": {
        "alt": "The Great Coffee Debate | Rothman Health Solutions",
        "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSvaUJHVnlx7Pe-eUzCvqjaq0SY8IqvBFUmkA&usqp=CAU"
      },
      "link": {
        "domain": "drnicole.com",
        "href": "https://drnicole.com/the-great-coffee-debate/",
        "title": "The Great Coffee Debate | Rothman ..."
      }
    },
    {
      "image": {
        "alt": "Salted Maple Power Coffee - Coconut Butter Power Coffee",
        "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ97hyMluYaS0i-KtnVksz50YHQYfg0cIQkEw&usqp=CAU"
      },
      "link": {
        "domain": "howsweeteats.com",
        "href": "https://www.howsweeteats.com/2018/10/power-coffee/",
        "title": "Salted Maple Power Coffee - Coconut ..."
      }
    },
    {
      "image": {
        "alt": "Is drinking coffee safe during your pregnancy? Get ready for some ...",
        "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRw78AXlFrxddyUVjmee9zl0WgSAqEEjdBXjw&usqp=CAU"
      },
      "link": {
        "domain": "theguardian.com",
        "href": "https://www.theguardian.com/commentisfree/2019/oct/17/is-drinking-coffee-safe-during-your-pregnancy-get-ready-for-some-nuance",
        "title": "Is drinking coffee safe during your ..."
      }
    },
    {
      "image": {
        "alt": "History of Coffee - Surprising Facts About Coffee and Caffeine",
        "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTMXX9ZFy_phkiDpZDzg7md0eXIfUHwmqkAKg&usqp=CAU"
      },
      "link": {
        "domain": "goodhousekeeping.com",
        "href": "https://www.goodhousekeeping.com/health/diet-nutrition/a30303/facts-about-coffee/",
        "title": "Surprising Facts About Coffee and Caffeine"
      }
    },
    {
      "image": {
        "alt": "THE COFFEE GANG - Home | Facebook",
        "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR5Oxi7uPeHpHvi367Br-dOY5ko8YC27ZVxLQ&usqp=CAU"
      },
      "link": {
        "domain": "facebook.com",
        "href": "https://www.facebook.com/thecoffeegangkoeln/",
        "title": "THE COFFEE GANG - Home | Facebook"
      }
    },
    {
      "image": {
        "alt": "How coffee protects the brain",
        "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTOTPLXLBPAPJRLGsg2nmuQP17QPZwp_LZVkA&usqp=CAU"
      },
      "link": {
        "domain": "medicalnewstoday.com",
        "href": "https://www.medicalnewstoday.com/articles/323594",
        "title": "How coffee protects the brain"
      }
    },
    {
      "image": {
        "alt": "National Coffee Day 2019: Where to Find Free Coffee and Other ...",
        "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ72PRQNa22zD2BiLEDx9n7xNOTBoMIk0B40A&usqp=CAU"
      },
      "link": {
        "domain": "foodandwine.com",
        "href": "https://www.foodandwine.com/news/national-coffee-day-2019-deals-free-coffee",
        "title": "National Coffee Day 2019: Where to Find ..."
      }
    },
    {
      "image": {
        "alt": "Health benefits of coffee and a proposed warning label - Harvard ...",
        "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTyWNDiNbIMSPdYc_-fsHs0WnB00kVwN79-og&usqp=CAU"
      },
      "link": {
        "domain": "health.harvard.edu",
        "href": "https://www.health.harvard.edu/blog/health-benefits-of-coffee-and-a-proposed-warning-label-2018072514319",
        "title": "Health benefits of coffee and a ..."
      }
    },
    {
      "image": {
        "alt": "Ebb + Flow Coffee Co | Verrado",
        "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSzGnPX8PwkhUNh0_svnKsnZ8h3aizcu7Tm9w&usqp=CAU"
      },
      "link": {
        "domain": "verrado.com",
        "href": "https://www.verrado.com/ebb-flow-coffee-co/",
        "title": "Ebb + Flow Coffee Co | Verrado"
      }
    },
    {
      "image": {
        "alt": "The untold truth of instant coffee",
        "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQR1-hgmeCmtO-lMRGA_G-QsVtTMgxQwjKjNA&usqp=CAU"
      },
      "link": {
        "domain": "mashed.com",
        "href": "https://www.mashed.com/213334/the-untold-truth-of-instant-coffee/",
        "title": "The untold truth of instant coffee"
      }
    },
    {
      "image": {
        "alt": "All Coffees Great and Small - The Coffee Universe",
        "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRuXOtmAcTEKtbzCvSJU9_FHR8qnwW_H2L_Yw&usqp=CAU"
      },
      "link": {
        "domain": "thecoffeeuniverse.org",
        "href": "http://thecoffeeuniverse.org/all-coffees-great-and-small/",
        "title": "All Coffees Great and Small - The ..."
      }
    },
    {
      "image": {
        "alt": "How to Make Strong Coffee (Ultimate Guide to Better Coffee ...",
        "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTIE2P5rxqxqc2t7pSaAYNPNBL-jYc-TpH_CA&usqp=CAU"
      },
      "link": {
        "domain": "enjoyjava.com",
        "href": "https://enjoyjava.com/how-to-make-strong-coffee/",
        "title": "How to Make Strong Coffee (Ultimate ..."
      }
    },
    {
      "image": {
        "alt": "The barista-approved gear you need to recreate the coffee shop at ...",
        "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRk6uRKrZlcWzL-nMSTL0K43W2evcFqqgTK4Q&usqp=CAU"
      },
      "link": {
        "domain": "engadget.com",
        "href": "https://www.engadget.com/barista-coffee-gear-quarantine-173001511.html",
        "title": "The barista-approved gear you need to ..."
      }
    },
    {
      "image": {
        "alt": "What Fort Worth Coffee Shop Fits Your Personality? - Fort Worth ...",
        "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSrIRqyS9DfB4fagLFwi3nZBgHZ-TYtUjWxVg&usqp=CAU"
      },
      "link": {
        "domain": "fwtx.com",
        "href": "https://fwtx.com/eat-drink/fort-worth-coffee-shop-fits-personality/",
        "title": "What Fort Worth Coffee Shop Fits Your ..."
      }
    },
    {
      "image": {
        "alt": "Is Coffee Good for You? - The New York Times",
        "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT-FANRjp7w693rO7nEuyg_sVrF6D__QiJJKw&usqp=CAU"
      },
      "link": {
        "domain": "nytimes.com",
        "href": "https://www.nytimes.com/2020/02/13/style/self-care/coffee-benefits.html",
        "title": "Is Coffee Good for You? - The New York ..."
      }
    },
    {
      "image": {
        "alt": "Quirky Frisco: Try these 5 unique coffee shop experiences",
        "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQFTJ-7ZHTyt8FMlETrrC2oZm2D_JCAPBwWtg&usqp=CAU"
      },
      "link": {
        "domain": "dallasnews.com",
        "href": "https://www.dallasnews.com/food/2019/09/16/quirky-frisco-try-these-5-unique-coffee-shop-experiences/",
        "title": "Try these 5 unique coffee shop experiences"
      }
    },
    {
      "image": {
        "alt": "The Original Irish Coffee Recipe",
        "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4Ho3fU1oK51tBn0JwBpfdYfTFNOqD6gJk_w&usqp=CAU"
      },
      "link": {
        "domain": "thespruceeats.com",
        "href": "https://www.thespruceeats.com/original-irish-coffee-recipe-759311",
        "title": "The Original Irish Coffee Recipe"
      }
    },
    {
      "image": {
        "alt": "Wild Joe*s Coffee Spot",
        "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQmMEfoc0sUA17iMCu1dPJliI9imDOhhKBK3g&usqp=CAU"
      },
      "link": {
        "domain": "wildjoescoffee.com",
        "href": "https://wildjoescoffee.com/",
        "title": "Wild Joe*s Coffee Spot"
      }
    },
    {
      "image": {
        "alt": "Coffee: Benefits, nutrition, and risks",
        "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSr-1QoS2MwEqG0QVxmJQ8-TL6nZgnm0wO5kg&usqp=CAU"
      },
      "link": {
        "domain": "medicalnewstoday.com",
        "href": "https://www.medicalnewstoday.com/articles/270202",
        "title": "Coffee: Benefits, nutrition, and risks"
      }
    },
    {
      "image": {
        "alt": "Homemade Healthy Coffee Creamer - JoyFoodSunshine",
        "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRc7txgPA1jmLAbEGgRmhkWYQZv-VN7jFUDpg&usqp=CAU"
      },
      "link": {
        "domain": "joyfoodsunshine.com",
        "href": "https://joyfoodsunshine.com/paleo-vanilla-coconut-coffee-creamer/",
        "title": "Homemade Healthy Coffee Creamer ..."
      }
    },
    {
      "image": {
        "alt": "13 Health Benefits of Coffee, Based on Science",
        "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSLBbLYJ_FVF9RAtIx-kdAv0vrRshF4TK_BFg&usqp=CAU"
      },
      "link": {
        "domain": "healthline.com",
        "href": "https://www.healthline.com/nutrition/top-13-evidence-based-health-benefits-of-coffee",
        "title": "13 Health Benefits of Coffee, Based on ..."
      }
    },
    {
      "image": {
        "alt": "Coffee and Kidney Disease: Is it Safe? | National Kidney Foundation",
        "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQA5e8QKcbSWT5G-Epl4dWLpuzxb7BnCLuQfg&usqp=CAU"
      },
      "link": {
        "domain": "kidney.org",
        "href": "https://www.kidney.org/newsletter/coffee-and-kidney-disease",
        "title": "Coffee and Kidney Disease: Is it Safe ..."
      }
    },
    {
      "image": {
        "alt": "Filter coffee is healthier than stove top, French press, decaf ...",
        "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQrHIJL4x1EKMl8aZl1PTN0AK0fYTLRHSZBtw&usqp=CAU"
      },
      "link": {
        "domain": "insider.com",
        "href": "https://www.insider.com/what-is-the-best-way-to-make-coffee-2020-4",
        "title": "Filter coffee is healthier than stove ..."
      }
    },
    {
      "image": {
        "alt": "Recess Coffee – Drink Coffee, Shoot Lightning!",
        "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSAKFuGHaUiUM0e6kP5923DkGL50pX6HxaruA&usqp=CAU"
      },
      "link": {
        "domain": "recesscoffee.com",
        "href": "https://recesscoffee.com/",
        "title": "Recess Coffee – Drink Coffee, Shoot ..."
      }
    },
    {
      "image": {
        "alt": "Is there a healthier way to brew your coffee? | Pittsburgh Post ...",
        "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ7uTsHtb9vLwwZCTh2lpGNxXBdaX6KlfzREg&usqp=CAU"
      },
      "link": {
        "domain": "post-gazette.com",
        "href": "https://www.post-gazette.com/news/health/2020/04/24/healthy-way-brew-coffee-cholesterol/stories/202004240082",
        "title": "healthier way to brew your coffee ..."
      }
    },
    {
      "image": {
        "alt": "What your daily coffee is really doing to your body | Daily Mail ...",
        "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQfHL2uXD4_h03BO3QBpD6jf1R8JcvGaQUv6g&usqp=CAU"
      },
      "link": {
        "domain": "dailymail.co.uk",
        "href": "https://www.dailymail.co.uk/health/article-2987126/It-good-brain-waistline-bad-bones-kidneys-daily-coffee-really-doing-body.html",
        "title": "coffee is really doing to your body ..."
      }
    },
    {
      "image": {
        "alt": "Reinventing the Coffee Industry in Romania",
        "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ80AJo0XdnQPgutOlws6kINluLKDFTP8XPuA&usqp=CAU"
      },
      "link": {
        "domain": "coffeebi.com",
        "href": "https://coffeebi.com/2018/01/23/bucharest-coffee-to-go/",
        "title": "Reinventing the Coffee Industry in Romania"
      }
    },
    {
      "image": {
        "alt": "Whipped Coffee Recipe {3 Ingredients!} | FeelGoodFoodie",
        "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQUqH6leT8YOlOUffEwCiwl-BD9C92e3CR2RQ&usqp=CAU"
      },
      "link": {
        "domain": "feelgoodfoodie.net",
        "href": "https://feelgoodfoodie.net/recipe/whipped-coffee/",
        "title": "Whipped Coffee Recipe {3 Ingredients ..."
      }
    }
  ],
  "results": [],
  "total": null
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="images-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<h3 id="images-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|answers|[string]|false|none|none|
|image_results|[object]|false|none|none|
|» image|object|false|none|none|
|» » alt|string|false|none|none|
|» » src|string|false|none|none|
|» link|object|false|none|none|
|» » domain|string|false|none|none|
|» » href|string|false|none|none|
|» » title|string|false|none|none|
|results|[object]|false|none|none|
|total|integer|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apikey
</aside>

## News

<a id="opIdNews"></a>

> Code samples

```bash
curl https://example.com/v1/news/string \
  -H 'Accept: application/json' \
  -H "apikey: ${API_KEY}"
```

`GET /v1/news/{query}`

Perform Google News Search

 Parameters
----------
query : the string query to perform search for Google news. A simple query for `president` will be `q=president`. An example of multiple keyword would be `q=news+about+presdient+trump`. News can also be filtered by country and language. For `US` news and in English the query will be `q=trump&ceid=US:en` for news in Great Britian the query will be `q=trump&ceid=GB:en`

Returns
-------
json: {"feed": { "title" : "trump" ...} , "entites": [ {"title" : "Trump doubles down on divisive messaging in speech to honor Independence Day - CNN", "links": []} ...]}

<h3 id="news-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|query|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "entries": [
    {
      "guidislink": false,
      "id": "CAIiEJbYpHMf0QD_umAUYNd46A0qGQgEKhAIACoHCAow4uGPCzDQpKMDMOm0sAY",
      "link": "https://www.thisismoney.co.uk/money/investing/article-8490041/EDENTREE-AMITY-UK-performer-steers-clear-sin-stocks.html",
      "links": [
        {
          "href": "https://www.thisismoney.co.uk/money/investing/article-8490041/EDENTREE-AMITY-UK-performer-steers-clear-sin-stocks.html",
          "rel": "alternate",
          "type": "text/html"
        }
      ],
      "published": "Sat, 04 Jul 2020 22:45:37 GMT",
      "published_parsed": [
        2020,
        7,
        4,
        22,
        45,
        37,
        5,
        186,
        0
      ],
      "source": {
        "href": "https://www.thisismoney.co.uk",
        "title": "This is Money"
      },
      "sub_articles": [],
      "summary": "<a href=\"https://www.thisismoney.co.uk/money/investing/article-8490041/EDENTREE-AMITY-UK-performer-steers-clear-sin-stocks.html\" target=\"_blank\">EDENTREE AMITY UK: Top performer steers clear of the 'sin' stocks</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">This is Money</font>",
      "summary_detail": {
        "base": "",
        "language": null,
        "type": "text/html",
        "value": "<a href=\"https://www.thisismoney.co.uk/money/investing/article-8490041/EDENTREE-AMITY-UK-performer-steers-clear-sin-stocks.html\" target=\"_blank\">EDENTREE AMITY UK: Top performer steers clear of the 'sin' stocks</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">This is Money</font>"
      },
      "title": "EDENTREE AMITY UK: Top performer steers clear of the 'sin' stocks - This is Money",
      "title_detail": {
        "base": "",
        "language": null,
        "type": "text/plain",
        "value": "EDENTREE AMITY UK: Top performer steers clear of the 'sin' stocks - This is Money"
      }
    },
    {
      "guidislink": false,
      "id": "CBMihgFodHRwczovL3d3dy5mb29sLmNvLnVrL2ludmVzdGluZy8yMDIwLzA3LzA0L2RvbnQtbWlzcy1vdXQtNC1mdHNlLTEwMC1kaXZpZGVuZC1zdG9ja3MtaS10aGluay1jb3VsZC1oZWxwLXlvdS1nZXQtcmljaC1hbmQtcmV0aXJlLWVhcmx5L9IBAA",
      "link": "https://www.fool.co.uk/investing/2020/07/04/dont-miss-out-4-ftse-100-dividend-stocks-i-think-could-help-you-get-rich-and-retire-early/",
      "links": [
        {
          "href": "https://www.fool.co.uk/investing/2020/07/04/dont-miss-out-4-ftse-100-dividend-stocks-i-think-could-help-you-get-rich-and-retire-early/",
          "rel": "alternate",
          "type": "text/html"
        }
      ],
      "published": "Sat, 04 Jul 2020 12:55:59 GMT",
      "published_parsed": [
        2020,
        7,
        4,
        12,
        55,
        59,
        5,
        186,
        0
      ],
      "source": {
        "href": "https://www.fool.co.uk",
        "title": "Motley Fool UK"
      },
      "sub_articles": [],
      "summary": "<a href=\"https://www.fool.co.uk/investing/2020/07/04/dont-miss-out-4-ftse-100-dividend-stocks-i-think-could-help-you-get-rich-and-retire-early/\" target=\"_blank\">Don't miss out! 4 FTSE 100 dividend stocks I think could help you get rich and retire early</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">Motley Fool UK</font>",
      "summary_detail": {
        "base": "",
        "language": null,
        "type": "text/html",
        "value": "<a href=\"https://www.fool.co.uk/investing/2020/07/04/dont-miss-out-4-ftse-100-dividend-stocks-i-think-could-help-you-get-rich-and-retire-early/\" target=\"_blank\">Don't miss out! 4 FTSE 100 dividend stocks I think could help you get rich and retire early</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">Motley Fool UK</font>"
      },
      "title": "Don't miss out! 4 FTSE 100 dividend stocks I think could help you get rich and retire early - Motley Fool UK",
      "title_detail": {
        "base": "",
        "language": null,
        "type": "text/plain",
        "value": "Don't miss out! 4 FTSE 100 dividend stocks I think could help you get rich and retire early - Motley Fool UK"
      }
    },
    {
      "guidislink": false,
      "id": "CBMiW2h0dHBzOi8vd3d3LmJhcnJvbnMuY29tL2FydGljbGVzLzQtc3RvY2tzLWhhdmUtdHJpbGxpb24tZG9sbGFyLXZhbHVlcy13aG9zLW5leHQtNTE1OTM4NjIyMDHSAV9odHRwczovL3d3dy5iYXJyb25zLmNvbS9hbXAvYXJ0aWNsZXMvNC1zdG9ja3MtaGF2ZS10cmlsbGlvbi1kb2xsYXItdmFsdWVzLXdob3MtbmV4dC01MTU5Mzg2MjIwMQ",
      "link": "https://www.barrons.com/articles/4-stocks-have-trillion-dollar-values-whos-next-51593862201",
      "links": [
        {
          "href": "https://www.barrons.com/articles/4-stocks-have-trillion-dollar-values-whos-next-51593862201",
          "rel": "alternate",
          "type": "text/html"
        }
      ],
      "published": "Sat, 04 Jul 2020 11:30:00 GMT",
      "published_parsed": [
        2020,
        7,
        4,
        11,
        30,
        0,
        5,
        186,
        0
      ],
      "source": {
        "href": "https://www.barrons.com",
        "title": "Barron's"
      },
      "sub_articles": [],
      "summary": "<a href=\"https://www.barrons.com/articles/4-stocks-have-trillion-dollar-values-whos-next-51593862201\" target=\"_blank\">4 Stocks Have Trillion-Dollar Values. Who’s Next?</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">Barron's</font>",
      "summary_detail": {
        "base": "",
        "language": null,
        "type": "text/html",
        "value": "<a href=\"https://www.barrons.com/articles/4-stocks-have-trillion-dollar-values-whos-next-51593862201\" target=\"_blank\">4 Stocks Have Trillion-Dollar Values. Who’s Next?</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">Barron's</font>"
      },
      "title": "4 Stocks Have Trillion-Dollar Values. Who’s Next? - Barron's",
      "title_detail": {
        "base": "",
        "language": null,
        "type": "text/plain",
        "value": "4 Stocks Have Trillion-Dollar Values. Who’s Next? - Barron's"
      }
    },
    {
      "guidislink": false,
      "id": "CAIiEHoLGxjkYXqngfiYs6dDKcwqFQgEKg0IACoGCAowrqkBMKBFMJGBAg",
      "link": "https://www.forbes.com/sites/scottcarpenter/2020/07/04/hedge-fund-marshall-wace-will-bet-on-esg-stocks-with-new-1-billion-fund/",
      "links": [
        {
          "href": "https://www.forbes.com/sites/scottcarpenter/2020/07/04/hedge-fund-marshall-wace-will-bet-on-esg-stocks-with-new-1-billion-fund/",
          "rel": "alternate",
          "type": "text/html"
        }
      ],
      "published": "Sat, 04 Jul 2020 18:31:21 GMT",
      "published_parsed": [
        2020,
        7,
        4,
        18,
        31,
        21,
        5,
        186,
        0
      ],
      "source": {
        "href": "https://www.forbes.com",
        "title": "Forbes"
      },
      "sub_articles": [],
      "summary": "<a href=\"https://www.forbes.com/sites/scottcarpenter/2020/07/04/hedge-fund-marshall-wace-will-bet-on-esg-stocks-with-new-1-billion-fund/\" target=\"_blank\">Hedge Fund Marshall Wace Will Bet On ESG Stocks With New $1 Billion Fund</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">Forbes</font>",
      "summary_detail": {
        "base": "",
        "language": null,
        "type": "text/html",
        "value": "<a href=\"https://www.forbes.com/sites/scottcarpenter/2020/07/04/hedge-fund-marshall-wace-will-bet-on-esg-stocks-with-new-1-billion-fund/\" target=\"_blank\">Hedge Fund Marshall Wace Will Bet On ESG Stocks With New $1 Billion Fund</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">Forbes</font>"
      },
      "title": "Hedge Fund Marshall Wace Will Bet On ESG Stocks With New $1 Billion Fund - Forbes",
      "title_detail": {
        "base": "",
        "language": null,
        "type": "text/plain",
        "value": "Hedge Fund Marshall Wace Will Bet On ESG Stocks With New $1 Billion Fund - Forbes"
      }
    },
    {
      "guidislink": false,
      "id": "CAIiELdLP6CrE6pXTf8VS6mFwYsqFQgEKg0IACoGCAowrqkBMKBFMLKAAg",
      "link": "https://www.forbes.com/sites/tomaspray/2020/07/04/investors-bearish-as-the-stock-market-soars/",
      "links": [
        {
          "href": "https://www.forbes.com/sites/tomaspray/2020/07/04/investors-bearish-as-the-stock-market-soars/",
          "rel": "alternate",
          "type": "text/html"
        }
      ],
      "published": "Sat, 04 Jul 2020 18:22:44 GMT",
      "published_parsed": [
        2020,
        7,
        4,
        18,
        22,
        44,
        5,
        186,
        0
      ],
      "source": {
        "href": "https://www.forbes.com",
        "title": "Forbes"
      },
      "sub_articles": [],
      "summary": "<a href=\"https://www.forbes.com/sites/tomaspray/2020/07/04/investors-bearish-as-the-stock-market-soars/\" target=\"_blank\">Investors Bearish As The Stock Market Soars</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">Forbes</font>",
      "summary_detail": {
        "base": "",
        "language": null,
        "type": "text/html",
        "value": "<a href=\"https://www.forbes.com/sites/tomaspray/2020/07/04/investors-bearish-as-the-stock-market-soars/\" target=\"_blank\">Investors Bearish As The Stock Market Soars</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">Forbes</font>"
      },
      "title": "Investors Bearish As The Stock Market Soars - Forbes",
      "title_detail": {
        "base": "",
        "language": null,
        "type": "text/plain",
        "value": "Investors Bearish As The Stock Market Soars - Forbes"
      }
    },
    {
      "guidislink": false,
      "id": "CAIiEHJp-NyMXN6lxC1B2gutnDsqFQgEKg0IACoGCAowrqkBMKBFMMGBAg",
      "link": "https://www.forbes.com/sites/sergeiklebnikov/2020/07/03/stocks-are-rallying-too-much-on-vaccine-news-says-this-market-expert/",
      "links": [
        {
          "href": "https://www.forbes.com/sites/sergeiklebnikov/2020/07/03/stocks-are-rallying-too-much-on-vaccine-news-says-this-market-expert/",
          "rel": "alternate",
          "type": "text/html"
        }
      ],
      "published": "Fri, 03 Jul 2020 20:03:04 GMT",
      "published_parsed": [
        2020,
        7,
        3,
        20,
        3,
        4,
        4,
        185,
        0
      ],
      "source": {
        "href": "https://www.forbes.com",
        "title": "Forbes"
      },
      "sub_articles": [],
      "summary": "<a href=\"https://www.forbes.com/sites/sergeiklebnikov/2020/07/03/stocks-are-rallying-too-much-on-vaccine-news-says-this-market-expert/\" target=\"_blank\">Stocks Are Rallying Too Much On Vaccine News, Says This Market Expert</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">Forbes</font>",
      "summary_detail": {
        "base": "",
        "language": null,
        "type": "text/html",
        "value": "<a href=\"https://www.forbes.com/sites/sergeiklebnikov/2020/07/03/stocks-are-rallying-too-much-on-vaccine-news-says-this-market-expert/\" target=\"_blank\">Stocks Are Rallying Too Much On Vaccine News, Says This Market Expert</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">Forbes</font>"
      },
      "title": "Stocks Are Rallying Too Much On Vaccine News, Says This Market Expert - Forbes",
      "title_detail": {
        "base": "",
        "language": null,
        "type": "text/plain",
        "value": "Stocks Are Rallying Too Much On Vaccine News, Says This Market Expert - Forbes"
      }
    },
    {
      "guidislink": false,
      "id": "CBMiYWh0dHBzOi8vd3d3LmZvb2wuY29tL2ludmVzdGluZy8yMDIwLzA3LzA0LzUtdG9wLXN0b2Nrcy10by1zZWN1cmUteW91ci1maW5hbmNpYWwtaW5kZXBlbmRlbmNlLmFzcHjSAWVodHRwczovL3d3dy5mb29sLmNvbS9hbXAvaW52ZXN0aW5nLzIwMjAvMDcvMDQvNS10b3Atc3RvY2tzLXRvLXNlY3VyZS15b3VyLWZpbmFuY2lhbC1pbmRlcGVuZGVuY2UuYXNweA",
      "link": "https://www.fool.com/investing/2020/07/04/5-top-stocks-to-secure-your-financial-independence.aspx",
      "links": [
        {
          "href": "https://www.fool.com/investing/2020/07/04/5-top-stocks-to-secure-your-financial-independence.aspx",
          "rel": "alternate",
          "type": "text/html"
        }
      ],
      "published": "Sat, 04 Jul 2020 09:51:00 GMT",
      "published_parsed": [
        2020,
        7,
        4,
        9,
        51,
        0,
        5,
        186,
        0
      ],
      "source": {
        "href": "https://www.fool.com",
        "title": "Motley Fool"
      },
      "sub_articles": [],
      "summary": "<a href=\"https://www.fool.com/investing/2020/07/04/5-top-stocks-to-secure-your-financial-independence.aspx\" target=\"_blank\">5 Top Stocks to Secure Your Financial Independence</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">Motley Fool</font>",
      "summary_detail": {
        "base": "",
        "language": null,
        "type": "text/html",
        "value": "<a href=\"https://www.fool.com/investing/2020/07/04/5-top-stocks-to-secure-your-financial-independence.aspx\" target=\"_blank\">5 Top Stocks to Secure Your Financial Independence</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">Motley Fool</font>"
      },
      "title": "5 Top Stocks to Secure Your Financial Independence - Motley Fool",
      "title_detail": {
        "base": "",
        "language": null,
        "type": "text/plain",
        "value": "5 Top Stocks to Secure Your Financial Independence - Motley Fool"
      }
    },
    {
      "guidislink": false,
      "id": "CBMiZGh0dHBzOi8vd3d3LmZveGJ1c2luZXNzLmNvbS9tYXJrZXRzL3N0b2Nrcy1oYXZlLW1vcmUtcm9vbS10by1ydW4tYWZ0ZXItYmVzdC1xdWFydGVyLWluLW92ZXItMjAteWVhcnPSAWhodHRwczovL3d3dy5mb3hidXNpbmVzcy5jb20vbWFya2V0cy9zdG9ja3MtaGF2ZS1tb3JlLXJvb20tdG8tcnVuLWFmdGVyLWJlc3QtcXVhcnRlci1pbi1vdmVyLTIwLXllYXJzLmFtcA",
      "link": "https://www.foxbusiness.com/markets/stocks-have-more-room-to-run-after-best-quarter-in-over-20-years",
      "links": [
        {
          "href": "https://www.foxbusiness.com/markets/stocks-have-more-room-to-run-after-best-quarter-in-over-20-years",
          "rel": "alternate",
          "type": "text/html"
        }
      ],
      "published": "Sat, 04 Jul 2020 13:43:06 GMT",
      "published_parsed": [
        2020,
        7,
        4,
        13,
        43,
        6,
        5,
        186,
        0
      ],
      "source": {
        "href": "https://www.foxbusiness.com",
        "title": "Fox Business"
      },
      "sub_articles": [],
      "summary": "<a href=\"https://www.foxbusiness.com/markets/stocks-have-more-room-to-run-after-best-quarter-in-over-20-years\" target=\"_blank\">Stocks set to bound higher despite COVID-19 overshadowing breakout quarter</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">Fox Business</font>",
      "summary_detail": {
        "base": "",
        "language": null,
        "type": "text/html",
        "value": "<a href=\"https://www.foxbusiness.com/markets/stocks-have-more-room-to-run-after-best-quarter-in-over-20-years\" target=\"_blank\">Stocks set to bound higher despite COVID-19 overshadowing breakout quarter</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">Fox Business</font>"
      },
      "title": "Stocks set to bound higher despite COVID-19 overshadowing breakout quarter - Fox Business",
      "title_detail": {
        "base": "",
        "language": null,
        "type": "text/plain",
        "value": "Stocks set to bound higher despite COVID-19 overshadowing breakout quarter - Fox Business"
      }
    },
    {
      "guidislink": false,
      "id": "CBMiVGh0dHBzOi8vd3d3LmZvb2wuY29tL2ludmVzdGluZy8yMDIwLzA3LzA0LzMtdG9wLXNtYWxsLWNhcC1zdG9ja3MtdG8tYnV5LWluLWp1bHkuYXNweNIBWGh0dHBzOi8vd3d3LmZvb2wuY29tL2FtcC9pbnZlc3RpbmcvMjAyMC8wNy8wNC8zLXRvcC1zbWFsbC1jYXAtc3RvY2tzLXRvLWJ1eS1pbi1qdWx5LmFzcHg",
      "link": "https://www.fool.com/investing/2020/07/04/3-top-small-cap-stocks-to-buy-in-july.aspx",
      "links": [
        {
          "href": "https://www.fool.com/investing/2020/07/04/3-top-small-cap-stocks-to-buy-in-july.aspx",
          "rel": "alternate",
          "type": "text/html"
        }
      ],
      "published": "Sat, 04 Jul 2020 19:00:00 GMT",
      "published_parsed": [
        2020,
        7,
        4,
        19,
        0,
        0,
        5,
        186,
        0
      ],
      "source": {
        "href": "https://www.fool.com",
        "title": "Motley Fool"
      },
      "sub_articles": [],
      "summary": "<a href=\"https://www.fool.com/investing/2020/07/04/3-top-small-cap-stocks-to-buy-in-july.aspx\" target=\"_blank\">3 Top Small-Cap Stocks to Buy in July</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">Motley Fool</font>",
      "summary_detail": {
        "base": "",
        "language": null,
        "type": "text/html",
        "value": "<a href=\"https://www.fool.com/investing/2020/07/04/3-top-small-cap-stocks-to-buy-in-july.aspx\" target=\"_blank\">3 Top Small-Cap Stocks to Buy in July</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">Motley Fool</font>"
      },
      "title": "3 Top Small-Cap Stocks to Buy in July - Motley Fool",
      "title_detail": {
        "base": "",
        "language": null,
        "type": "text/plain",
        "value": "3 Top Small-Cap Stocks to Buy in July - Motley Fool"
      }
    },
    {
      "guidislink": false,
      "id": "CBMiemh0dHBzOi8vd3d3LmZvb2wuY28udWsvaW52ZXN0aW5nLzIwMjAvMDcvMDQvcmV0aXJlbWVudC1zYXZpbmdzLWlkLWJ1eS1jaGVhcC1zdG9ja3MtYWZ0ZXItdGhlLW1hcmtldC1jcmFzaC10by1yZXRpcmUtZWFybHkv0gEA",
      "link": "https://www.fool.co.uk/investing/2020/07/04/retirement-savings-id-buy-cheap-stocks-after-the-market-crash-to-retire-early/",
      "links": [
        {
          "href": "https://www.fool.co.uk/investing/2020/07/04/retirement-savings-id-buy-cheap-stocks-after-the-market-crash-to-retire-early/",
          "rel": "alternate",
          "type": "text/html"
        }
      ],
      "published": "Sat, 04 Jul 2020 10:41:53 GMT",
      "published_parsed": [
        2020,
        7,
        4,
        10,
        41,
        53,
        5,
        186,
        0
      ],
      "source": {
        "href": "https://www.fool.co.uk",
        "title": "Motley Fool UK"
      },
      "sub_articles": [],
      "summary": "<a href=\"https://www.fool.co.uk/investing/2020/07/04/retirement-savings-id-buy-cheap-stocks-after-the-market-crash-to-retire-early/\" target=\"_blank\">Retirement savings: I'd buy cheap stocks after the market crash to retire early</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">Motley Fool UK</font>",
      "summary_detail": {
        "base": "",
        "language": null,
        "type": "text/html",
        "value": "<a href=\"https://www.fool.co.uk/investing/2020/07/04/retirement-savings-id-buy-cheap-stocks-after-the-market-crash-to-retire-early/\" target=\"_blank\">Retirement savings: I'd buy cheap stocks after the market crash to retire early</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">Motley Fool UK</font>"
      },
      "title": "Retirement savings: I'd buy cheap stocks after the market crash to retire early - Motley Fool UK",
      "title_detail": {
        "base": "",
        "language": null,
        "type": "text/plain",
        "value": "Retirement savings: I'd buy cheap stocks after the market crash to retire early - Motley Fool UK"
      }
    },
    {
      "guidislink": false,
      "id": "CBMiUGh0dHBzOi8vd3d3LmZvb2wuY29tL2ludmVzdGluZy8yMDIwLzA3LzA0LzMtbGFyZ2UtY2FwLXN0b2Nrcy10by1idXktaW4tanVseS5hc3B40gFUaHR0cHM6Ly93d3cuZm9vbC5jb20vYW1wL2ludmVzdGluZy8yMDIwLzA3LzA0LzMtbGFyZ2UtY2FwLXN0b2Nrcy10by1idXktaW4tanVseS5hc3B4",
      "link": "https://www.fool.com/investing/2020/07/04/3-large-cap-stocks-to-buy-in-july.aspx",
      "links": [
        {
          "href": "https://www.fool.com/investing/2020/07/04/3-large-cap-stocks-to-buy-in-july.aspx",
          "rel": "alternate",
          "type": "text/html"
        }
      ],
      "published": "Sat, 04 Jul 2020 13:00:00 GMT",
      "published_parsed": [
        2020,
        7,
        4,
        13,
        0,
        0,
        5,
        186,
        0
      ],
      "source": {
        "href": "https://www.fool.com",
        "title": "Motley Fool"
      },
      "sub_articles": [],
      "summary": "<a href=\"https://www.fool.com/investing/2020/07/04/3-large-cap-stocks-to-buy-in-july.aspx\" target=\"_blank\">3 Large-Cap Stocks to Buy in July</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">Motley Fool</font>",
      "summary_detail": {
        "base": "",
        "language": null,
        "type": "text/html",
        "value": "<a href=\"https://www.fool.com/investing/2020/07/04/3-large-cap-stocks-to-buy-in-july.aspx\" target=\"_blank\">3 Large-Cap Stocks to Buy in July</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">Motley Fool</font>"
      },
      "title": "3 Large-Cap Stocks to Buy in July - Motley Fool",
      "title_detail": {
        "base": "",
        "language": null,
        "type": "text/plain",
        "value": "3 Large-Cap Stocks to Buy in July - Motley Fool"
      }
    },
    {
      "guidislink": false,
      "id": "CBMifWh0dHBzOi8vd3d3LmNuYmMuY29tLzIwMjAvMDcvMDQvaGVyZS1hcmUtc29tZS1kaXZpZGVuZC1zdG9ja3Mtd2l0aC1zdXN0YWluYWJsZS1pbmNvbWUtZm9yLXRoZS1zZWNvbmQtaGFsZi1qZWZmZXJpZXMtc2F5cy5odG1s0gEA",
      "link": "https://www.cnbc.com/2020/07/04/here-are-some-dividend-stocks-with-sustainable-income-for-the-second-half-jefferies-says.html",
      "links": [
        {
          "href": "https://www.cnbc.com/2020/07/04/here-are-some-dividend-stocks-with-sustainable-income-for-the-second-half-jefferies-says.html",
          "rel": "alternate",
          "type": "text/html"
        }
      ],
      "published": "Sat, 04 Jul 2020 12:22:00 GMT",
      "published_parsed": [
        2020,
        7,
        4,
        12,
        22,
        0,
        5,
        186,
        0
      ],
      "source": {
        "href": "https://www.cnbc.com",
        "title": "CNBC"
      },
      "sub_articles": [],
      "summary": "<a href=\"https://www.cnbc.com/2020/07/04/here-are-some-dividend-stocks-with-sustainable-income-for-the-second-half-jefferies-says.html\" target=\"_blank\">Here are some dividend stocks with sustainable income for the second half, Jefferies says</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">CNBC</font>",
      "summary_detail": {
        "base": "",
        "language": null,
        "type": "text/html",
        "value": "<a href=\"https://www.cnbc.com/2020/07/04/here-are-some-dividend-stocks-with-sustainable-income-for-the-second-half-jefferies-says.html\" target=\"_blank\">Here are some dividend stocks with sustainable income for the second half, Jefferies says</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">CNBC</font>"
      },
      "title": "Here are some dividend stocks with sustainable income for the second half, Jefferies says - CNBC",
      "title_detail": {
        "base": "",
        "language": null,
        "type": "text/plain",
        "value": "Here are some dividend stocks with sustainable income for the second half, Jefferies says - CNBC"
      }
    },
    {
      "guidislink": false,
      "id": "CAIiEKCL1QEGVTIA73xRjYlE2QAqFQgEKg0IACoGCAowrqkBMKBFMLKAAg",
      "link": "https://www.forbes.com/sites/simonmoore/2020/07/03/can-the-stock-market-rally-last/",
      "links": [
        {
          "href": "https://www.forbes.com/sites/simonmoore/2020/07/03/can-the-stock-market-rally-last/",
          "rel": "alternate",
          "type": "text/html"
        }
      ],
      "published": "Fri, 03 Jul 2020 22:10:30 GMT",
      "published_parsed": [
        2020,
        7,
        3,
        22,
        10,
        30,
        4,
        185,
        0
      ],
      "source": {
        "href": "https://www.forbes.com",
        "title": "Forbes"
      },
      "sub_articles": [],
      "summary": "<a href=\"https://www.forbes.com/sites/simonmoore/2020/07/03/can-the-stock-market-rally-last/\" target=\"_blank\">Can The Stock Market Rally Last?</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">Forbes</font>",
      "summary_detail": {
        "base": "",
        "language": null,
        "type": "text/html",
        "value": "<a href=\"https://www.forbes.com/sites/simonmoore/2020/07/03/can-the-stock-market-rally-last/\" target=\"_blank\">Can The Stock Market Rally Last?</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">Forbes</font>"
      },
      "title": "Can The Stock Market Rally Last? - Forbes",
      "title_detail": {
        "base": "",
        "language": null,
        "type": "text/plain",
        "value": "Can The Stock Market Rally Last? - Forbes"
      }
    },
    {
      "guidislink": false,
      "id": "CBMiU2h0dHBzOi8vd3d3LmZvb2wuY29tL2ludmVzdGluZy8yMDIwLzA3LzA0LzMtdG9wLWRpdmlkZW5kLXN0b2Nrcy10by1idXktaW4tanVseS5hc3B40gFXaHR0cHM6Ly93d3cuZm9vbC5jb20vYW1wL2ludmVzdGluZy8yMDIwLzA3LzA0LzMtdG9wLWRpdmlkZW5kLXN0b2Nrcy10by1idXktaW4tanVseS5hc3B4",
      "link": "https://www.fool.com/investing/2020/07/04/3-top-dividend-stocks-to-buy-in-july.aspx",
      "links": [
        {
          "href": "https://www.fool.com/investing/2020/07/04/3-top-dividend-stocks-to-buy-in-july.aspx",
          "rel": "alternate",
          "type": "text/html"
        }
      ],
      "published": "Sat, 04 Jul 2020 13:31:00 GMT",
      "published_parsed": [
        2020,
        7,
        4,
        13,
        31,
        0,
        5,
        186,
        0
      ],
      "source": {
        "href": "https://www.fool.com",
        "title": "Motley Fool"
      },
      "sub_articles": [],
      "summary": "<a href=\"https://www.fool.com/investing/2020/07/04/3-top-dividend-stocks-to-buy-in-july.aspx\" target=\"_blank\">3 Top Dividend Stocks to Buy in July</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">Motley Fool</font>",
      "summary_detail": {
        "base": "",
        "language": null,
        "type": "text/html",
        "value": "<a href=\"https://www.fool.com/investing/2020/07/04/3-top-dividend-stocks-to-buy-in-july.aspx\" target=\"_blank\">3 Top Dividend Stocks to Buy in July</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">Motley Fool</font>"
      },
      "title": "3 Top Dividend Stocks to Buy in July - Motley Fool",
      "title_detail": {
        "base": "",
        "language": null,
        "type": "text/plain",
        "value": "3 Top Dividend Stocks to Buy in July - Motley Fool"
      }
    },
    {
      "guidislink": false,
      "id": "CBMiYGh0dHBzOi8vd3d3LmZvb2wuY29tL2ludmVzdGluZy8yMDIwLzA3LzA0LzMtcmlkaWN1bG91c2x5LWNoZWFwLWRpdmlkZW5kLXN0b2Nrcy10by1idXktdG9kYXkuYXNweNIBZGh0dHBzOi8vd3d3LmZvb2wuY29tL2FtcC9pbnZlc3RpbmcvMjAyMC8wNy8wNC8zLXJpZGljdWxvdXNseS1jaGVhcC1kaXZpZGVuZC1zdG9ja3MtdG8tYnV5LXRvZGF5LmFzcHg",
      "link": "https://www.fool.com/investing/2020/07/04/3-ridiculously-cheap-dividend-stocks-to-buy-today.aspx",
      "links": [
        {
          "href": "https://www.fool.com/investing/2020/07/04/3-ridiculously-cheap-dividend-stocks-to-buy-today.aspx",
          "rel": "alternate",
          "type": "text/html"
        }
      ],
      "published": "Sat, 04 Jul 2020 11:02:00 GMT",
      "published_parsed": [
        2020,
        7,
        4,
        11,
        2,
        0,
        5,
        186,
        0
      ],
      "source": {
        "href": "https://www.fool.com",
        "title": "Motley Fool"
      },
      "sub_articles": [],
      "summary": "<a href=\"https://www.fool.com/investing/2020/07/04/3-ridiculously-cheap-dividend-stocks-to-buy-today.aspx\" target=\"_blank\">3 Ridiculously Cheap Dividend Stocks to Buy Today</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">Motley Fool</font>",
      "summary_detail": {
        "base": "",
        "language": null,
        "type": "text/html",
        "value": "<a href=\"https://www.fool.com/investing/2020/07/04/3-ridiculously-cheap-dividend-stocks-to-buy-today.aspx\" target=\"_blank\">3 Ridiculously Cheap Dividend Stocks to Buy Today</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">Motley Fool</font>"
      },
      "title": "3 Ridiculously Cheap Dividend Stocks to Buy Today - Motley Fool",
      "title_detail": {
        "base": "",
        "language": null,
        "type": "text/plain",
        "value": "3 Ridiculously Cheap Dividend Stocks to Buy Today - Motley Fool"
      }
    },
    {
      "guidislink": false,
      "id": "CAIiECbvr1-xx1zGTfTtFYTIxwMqGAgEKg8IACoHCAowjujJATDXzBUwmJS0AQ",
      "link": "https://www.marketwatch.com/story/london-stocks-struggle-while-us-markets-are-closed-for-july-4-holiday-2020-07-03",
      "links": [
        {
          "href": "https://www.marketwatch.com/story/london-stocks-struggle-while-us-markets-are-closed-for-july-4-holiday-2020-07-03",
          "rel": "alternate",
          "type": "text/html"
        }
      ],
      "published": "Fri, 03 Jul 2020 13:28:56 GMT",
      "published_parsed": [
        2020,
        7,
        3,
        13,
        28,
        56,
        4,
        185,
        0
      ],
      "source": {
        "href": "https://www.marketwatch.com",
        "title": "MarketWatch"
      },
      "sub_articles": [],
      "summary": "<a href=\"https://www.marketwatch.com/story/london-stocks-struggle-while-us-markets-are-closed-for-july-4-holiday-2020-07-03\" target=\"_blank\">London stocks struggle while U.S. markets are closed for July 4 holiday</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">MarketWatch</font>",
      "summary_detail": {
        "base": "",
        "language": null,
        "type": "text/html",
        "value": "<a href=\"https://www.marketwatch.com/story/london-stocks-struggle-while-us-markets-are-closed-for-july-4-holiday-2020-07-03\" target=\"_blank\">London stocks struggle while U.S. markets are closed for July 4 holiday</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">MarketWatch</font>"
      },
      "title": "London stocks struggle while U.S. markets are closed for July 4 holiday - MarketWatch",
      "title_detail": {
        "base": "",
        "language": null,
        "type": "text/plain",
        "value": "London stocks struggle while U.S. markets are closed for July 4 holiday - MarketWatch"
      }
    },
    {
      "guidislink": false,
      "id": "CBMiSmh0dHBzOi8vZmluYW5jZS55YWhvby5jb20vbmV3cy9xdWFudC1mdW5kLWdhaW5zLTEwOC1kdW1waW5nLTIzMDAwMDkxNy5odG1s0gFSaHR0cHM6Ly9maW5hbmNlLnlhaG9vLmNvbS9hbXBodG1sL25ld3MvcXVhbnQtZnVuZC1nYWlucy0xMDgtZHVtcGluZy0yMzAwMDA5MTcuaHRtbA",
      "link": "https://finance.yahoo.com/news/quant-fund-gains-108-dumping-230000917.html",
      "links": [
        {
          "href": "https://finance.yahoo.com/news/quant-fund-gains-108-dumping-230000917.html",
          "rel": "alternate",
          "type": "text/html"
        }
      ],
      "published": "Sat, 04 Jul 2020 23:00:00 GMT",
      "published_parsed": [
        2020,
        7,
        4,
        23,
        0,
        0,
        5,
        186,
        0
      ],
      "source": {
        "href": "https://finance.yahoo.com",
        "title": "Yahoo Finance"
      },
      "sub_articles": [],
      "summary": "<a href=\"https://finance.yahoo.com/news/quant-fund-gains-108-dumping-230000917.html\" target=\"_blank\">Quant Fund Gains 108% by Dumping China Stocks a Day After Buying</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">Yahoo Finance</font>",
      "summary_detail": {
        "base": "",
        "language": null,
        "type": "text/html",
        "value": "<a href=\"https://finance.yahoo.com/news/quant-fund-gains-108-dumping-230000917.html\" target=\"_blank\">Quant Fund Gains 108% by Dumping China Stocks a Day After Buying</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">Yahoo Finance</font>"
      },
      "title": "Quant Fund Gains 108% by Dumping China Stocks a Day After Buying - Yahoo Finance",
      "title_detail": {
        "base": "",
        "language": null,
        "type": "text/plain",
        "value": "Quant Fund Gains 108% by Dumping China Stocks a Day After Buying - Yahoo Finance"
      }
    },
    {
      "guidislink": false,
      "id": "CAIiEGnvBCMpOXaebngl8G98Q2gqGQgEKhAIACoHCAow2Nb3CjDivdcCMMPf7gU",
      "link": "https://www.cnbc.com/2020/07/04/tech-employees-open-wallets-to-beat-trump-even-as-stocks-profits-soar.html",
      "links": [
        {
          "href": "https://www.cnbc.com/2020/07/04/tech-employees-open-wallets-to-beat-trump-even-as-stocks-profits-soar.html",
          "rel": "alternate",
          "type": "text/html"
        }
      ],
      "published": "Sat, 04 Jul 2020 18:51:32 GMT",
      "published_parsed": [
        2020,
        7,
        4,
        18,
        51,
        32,
        5,
        186,
        0
      ],
      "source": {
        "href": "https://www.cnbc.com",
        "title": "CNBC"
      },
      "sub_articles": [],
      "summary": "<a href=\"https://www.cnbc.com/2020/07/04/tech-employees-open-wallets-to-beat-trump-even-as-stocks-profits-soar.html\" target=\"_blank\">Tech workers are opening their wallets to beat Trump even with stock prices soaring and profits near records</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">CNBC</font>",
      "summary_detail": {
        "base": "",
        "language": null,
        "type": "text/html",
        "value": "<a href=\"https://www.cnbc.com/2020/07/04/tech-employees-open-wallets-to-beat-trump-even-as-stocks-profits-soar.html\" target=\"_blank\">Tech workers are opening their wallets to beat Trump even with stock prices soaring and profits near records</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">CNBC</font>"
      },
      "title": "Tech workers are opening their wallets to beat Trump even with stock prices soaring and profits near records - CNBC",
      "title_detail": {
        "base": "",
        "language": null,
        "type": "text/plain",
        "value": "Tech workers are opening their wallets to beat Trump even with stock prices soaring and profits near records - CNBC"
      }
    },
    {
      "guidislink": false,
      "id": "CBMiUmh0dHBzOi8vd3d3LmZvb2wuY29tL2ludmVzdGluZy8yMDIwLzA3LzAzL2hlcmVzLW15LXRvcC1zdG9jay10by1idXktcmlnaHQtbm93LmFzcHjSAVZodHRwczovL3d3dy5mb29sLmNvbS9hbXAvaW52ZXN0aW5nLzIwMjAvMDcvMDMvaGVyZXMtbXktdG9wLXN0b2NrLXRvLWJ1eS1yaWdodC1ub3cuYXNweA",
      "link": "https://www.fool.com/investing/2020/07/03/heres-my-top-stock-to-buy-right-now.aspx",
      "links": [
        {
          "href": "https://www.fool.com/investing/2020/07/03/heres-my-top-stock-to-buy-right-now.aspx",
          "rel": "alternate",
          "type": "text/html"
        }
      ],
      "published": "Fri, 03 Jul 2020 10:43:00 GMT",
      "published_parsed": [
        2020,
        7,
        3,
        10,
        43,
        0,
        4,
        185,
        0
      ],
      "source": {
        "href": "https://www.fool.com",
        "title": "Motley Fool"
      },
      "sub_articles": [],
      "summary": "<a href=\"https://www.fool.com/investing/2020/07/03/heres-my-top-stock-to-buy-right-now.aspx\" target=\"_blank\">Here's My Top Stock to Buy Right Now</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">Motley Fool</font>",
      "summary_detail": {
        "base": "",
        "language": null,
        "type": "text/html",
        "value": "<a href=\"https://www.fool.com/investing/2020/07/03/heres-my-top-stock-to-buy-right-now.aspx\" target=\"_blank\">Here's My Top Stock to Buy Right Now</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">Motley Fool</font>"
      },
      "title": "Here's My Top Stock to Buy Right Now - Motley Fool",
      "title_detail": {
        "base": "",
        "language": null,
        "type": "text/plain",
        "value": "Here's My Top Stock to Buy Right Now - Motley Fool"
      }
    },
    {
      "guidislink": false,
      "id": "CAIiENP2T9YhBhQ0GmnujrSIEnIqGQgEKhAIACoHCAowocv1CjCSptoCMPrTpgU",
      "link": "https://www.cnn.com/2020/07/02/investing/dow-stock-market-today-jobs-report/index.html",
      "links": [
        {
          "href": "https://www.cnn.com/2020/07/02/investing/dow-stock-market-today-jobs-report/index.html",
          "rel": "alternate",
          "type": "text/html"
        }
      ],
      "published": "Thu, 02 Jul 2020 20:13:02 GMT",
      "published_parsed": [
        2020,
        7,
        2,
        20,
        13,
        2,
        3,
        184,
        0
      ],
      "source": {
        "href": "https://www.cnn.com",
        "title": "CNN"
      },
      "sub_articles": [],
      "summary": "<a href=\"https://www.cnn.com/2020/07/02/investing/dow-stock-market-today-jobs-report/index.html\" target=\"_blank\">Stocks rise after jobs report</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">CNN</font>",
      "summary_detail": {
        "base": "",
        "language": null,
        "type": "text/html",
        "value": "<a href=\"https://www.cnn.com/2020/07/02/investing/dow-stock-market-today-jobs-report/index.html\" target=\"_blank\">Stocks rise after jobs report</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">CNN</font>"
      },
      "title": "Stocks rise after jobs report - CNN",
      "title_detail": {
        "base": "",
        "language": null,
        "type": "text/plain",
        "value": "Stocks rise after jobs report - CNN"
      }
    },
    {
      "guidislink": false,
      "id": "CAIiENFUul_j8CKDiPOk_jDwrBEqGAgEKg8IACoHCAow1tzJATDnyxUwyMrPBg",
      "link": "https://www.wsj.com/articles/global-stock-markets-dow-update-7-03-2020-11593768198",
      "links": [
        {
          "href": "https://www.wsj.com/articles/global-stock-markets-dow-update-7-03-2020-11593768198",
          "rel": "alternate",
          "type": "text/html"
        }
      ],
      "published": "Fri, 03 Jul 2020 16:21:26 GMT",
      "published_parsed": [
        2020,
        7,
        3,
        16,
        21,
        26,
        4,
        185,
        0
      ],
      "source": {
        "href": "https://www.wsj.com",
        "title": "The Wall Street Journal"
      },
      "sub_articles": [],
      "summary": "<a href=\"https://www.wsj.com/articles/global-stock-markets-dow-update-7-03-2020-11593768198\" target=\"_blank\">European Stocks Drift Lower With U.S. Markets Shut</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">The Wall Street Journal</font>",
      "summary_detail": {
        "base": "",
        "language": null,
        "type": "text/html",
        "value": "<a href=\"https://www.wsj.com/articles/global-stock-markets-dow-update-7-03-2020-11593768198\" target=\"_blank\">European Stocks Drift Lower With U.S. Markets Shut</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">The Wall Street Journal</font>"
      },
      "title": "European Stocks Drift Lower With U.S. Markets Shut - The Wall Street Journal",
      "title_detail": {
        "base": "",
        "language": null,
        "type": "text/plain",
        "value": "European Stocks Drift Lower With U.S. Markets Shut - The Wall Street Journal"
      }
    },
    {
      "guidislink": false,
      "id": "CBMiW2h0dHBzOi8vcGVubnlzdG9ja3MuY29tL2ZlYXR1cmVkLzIwMjAvMDcvMDQvcGVubnktc3RvY2tzLWJyaW5nLWZpcmV3b3Jrcy1hZnRlci1qdWx5LTQtMjAyMC_SAQA",
      "link": "https://pennystocks.com/featured/2020/07/04/penny-stocks-bring-fireworks-after-july-4-2020/",
      "links": [
        {
          "href": "https://pennystocks.com/featured/2020/07/04/penny-stocks-bring-fireworks-after-july-4-2020/",
          "rel": "alternate",
          "type": "text/html"
        }
      ],
      "published": "Sat, 04 Jul 2020 19:46:00 GMT",
      "published_parsed": [
        2020,
        7,
        4,
        19,
        46,
        0,
        5,
        186,
        0
      ],
      "source": {
        "href": "https://pennystocks.com",
        "title": "Penny Stocks"
      },
      "sub_articles": [],
      "summary": "<a href=\"https://pennystocks.com/featured/2020/07/04/penny-stocks-bring-fireworks-after-july-4-2020/\" target=\"_blank\">Will These Penny Stocks Bring Fireworks After The 4th?</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">Penny Stocks</font>",
      "summary_detail": {
        "base": "",
        "language": null,
        "type": "text/html",
        "value": "<a href=\"https://pennystocks.com/featured/2020/07/04/penny-stocks-bring-fireworks-after-july-4-2020/\" target=\"_blank\">Will These Penny Stocks Bring Fireworks After The 4th?</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">Penny Stocks</font>"
      },
      "title": "Will These Penny Stocks Bring Fireworks After The 4th? - Penny Stocks",
      "title_detail": {
        "base": "",
        "language": null,
        "type": "text/plain",
        "value": "Will These Penny Stocks Bring Fireworks After The 4th? - Penny Stocks"
      }
    },
    {
      "guidislink": false,
      "id": "CBMiWmh0dHBzOi8vd3d3LmZvb2wuY29tL2ludmVzdGluZy8yMDIwLzA3LzA0LzMtdG9wLWNsb3VkLWNvbXB1dGluZy1zdG9ja3MtdG8tYnV5LWluLWp1bHkuYXNweNIBXmh0dHBzOi8vd3d3LmZvb2wuY29tL2FtcC9pbnZlc3RpbmcvMjAyMC8wNy8wNC8zLXRvcC1jbG91ZC1jb21wdXRpbmctc3RvY2tzLXRvLWJ1eS1pbi1qdWx5LmFzcHg",
      "link": "https://www.fool.com/investing/2020/07/04/3-top-cloud-computing-stocks-to-buy-in-july.aspx",
      "links": [
        {
          "href": "https://www.fool.com/investing/2020/07/04/3-top-cloud-computing-stocks-to-buy-in-july.aspx",
          "rel": "alternate",
          "type": "text/html"
        }
      ],
      "published": "Sat, 04 Jul 2020 20:20:00 GMT",
      "published_parsed": [
        2020,
        7,
        4,
        20,
        20,
        0,
        5,
        186,
        0
      ],
      "source": {
        "href": "https://www.fool.com",
        "title": "Motley Fool"
      },
      "sub_articles": [],
      "summary": "<a href=\"https://www.fool.com/investing/2020/07/04/3-top-cloud-computing-stocks-to-buy-in-july.aspx\" target=\"_blank\">3 Top Cloud Computing Stocks to Buy in July</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">Motley Fool</font>",
      "summary_detail": {
        "base": "",
        "language": null,
        "type": "text/html",
        "value": "<a href=\"https://www.fool.com/investing/2020/07/04/3-top-cloud-computing-stocks-to-buy-in-july.aspx\" target=\"_blank\">3 Top Cloud Computing Stocks to Buy in July</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">Motley Fool</font>"
      },
      "title": "3 Top Cloud Computing Stocks to Buy in July - Motley Fool",
      "title_detail": {
        "base": "",
        "language": null,
        "type": "text/plain",
        "value": "3 Top Cloud Computing Stocks to Buy in July - Motley Fool"
      }
    },
    {
      "guidislink": false,
      "id": "CBMiggFodHRwczovL3d3dy5pbnZlc3RvcnNjaHJvbmljbGUuY28udWsvY29tbWVudC8yMDIwLzA3LzAzL21hcmtldC1vdXRsb29rLXN0b2Nrcy1zdGVhZHktYXMtcHVicy1wcmVwYXJlLXRvLXJlb3Blbi1yaW8tdGludG8tY21jLW1vcmUv0gEA",
      "link": "https://www.investorschronicle.co.uk/comment/2020/07/03/market-outlook-stocks-steady-as-pubs-prepare-to-reopen-rio-tinto-cmc-more/",
      "links": [
        {
          "href": "https://www.investorschronicle.co.uk/comment/2020/07/03/market-outlook-stocks-steady-as-pubs-prepare-to-reopen-rio-tinto-cmc-more/",
          "rel": "alternate",
          "type": "text/html"
        }
      ],
      "published": "Fri, 03 Jul 2020 08:34:28 GMT",
      "published_parsed": [
        2020,
        7,
        3,
        8,
        34,
        28,
        4,
        185,
        0
      ],
      "source": {
        "href": "https://www.investorschronicle.co.uk",
        "title": "Investors Chronicle"
      },
      "sub_articles": [],
      "summary": "<a href=\"https://www.investorschronicle.co.uk/comment/2020/07/03/market-outlook-stocks-steady-as-pubs-prepare-to-reopen-rio-tinto-cmc-more/\" target=\"_blank\">Market Outlook: Stocks steady as pubs prepare to reopen, Rio Tinto, CMC & more</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">Investors Chronicle</font>",
      "summary_detail": {
        "base": "",
        "language": null,
        "type": "text/html",
        "value": "<a href=\"https://www.investorschronicle.co.uk/comment/2020/07/03/market-outlook-stocks-steady-as-pubs-prepare-to-reopen-rio-tinto-cmc-more/\" target=\"_blank\">Market Outlook: Stocks steady as pubs prepare to reopen, Rio Tinto, CMC & more</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">Investors Chronicle</font>"
      },
      "title": "Market Outlook: Stocks steady as pubs prepare to reopen, Rio Tinto, CMC & more - Investors Chronicle",
      "title_detail": {
        "base": "",
        "language": null,
        "type": "text/plain",
        "value": "Market Outlook: Stocks steady as pubs prepare to reopen, Rio Tinto, CMC & more - Investors Chronicle"
      }
    },
    {
      "guidislink": false,
      "id": "CBMiYWh0dHBzOi8vd3d3LmZvb2wuY29tL2ludmVzdGluZy8yMDIwLzA3LzA0L3doeS1lc2ctc3RvY2tzLWFyZS1wZXJmZWN0LWZvci1yZXRpcmVtZW50LXBvcnRmb2xpLmFzcHjSAWVodHRwczovL3d3dy5mb29sLmNvbS9hbXAvaW52ZXN0aW5nLzIwMjAvMDcvMDQvd2h5LWVzZy1zdG9ja3MtYXJlLXBlcmZlY3QtZm9yLXJldGlyZW1lbnQtcG9ydGZvbGkuYXNweA",
      "link": "https://www.fool.com/investing/2020/07/04/why-esg-stocks-are-perfect-for-retirement-portfoli.aspx",
      "links": [
        {
          "href": "https://www.fool.com/investing/2020/07/04/why-esg-stocks-are-perfect-for-retirement-portfoli.aspx",
          "rel": "alternate",
          "type": "text/html"
        }
      ],
      "published": "Sat, 04 Jul 2020 11:20:00 GMT",
      "published_parsed": [
        2020,
        7,
        4,
        11,
        20,
        0,
        5,
        186,
        0
      ],
      "source": {
        "href": "https://www.fool.com",
        "title": "Motley Fool"
      },
      "sub_articles": [],
      "summary": "<a href=\"https://www.fool.com/investing/2020/07/04/why-esg-stocks-are-perfect-for-retirement-portfoli.aspx\" target=\"_blank\">Why ESG Stocks Are Perfect for Retirement Portfolios</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">Motley Fool</font>",
      "summary_detail": {
        "base": "",
        "language": null,
        "type": "text/html",
        "value": "<a href=\"https://www.fool.com/investing/2020/07/04/why-esg-stocks-are-perfect-for-retirement-portfoli.aspx\" target=\"_blank\">Why ESG Stocks Are Perfect for Retirement Portfolios</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">Motley Fool</font>"
      },
      "title": "Why ESG Stocks Are Perfect for Retirement Portfolios - Motley Fool",
      "title_detail": {
        "base": "",
        "language": null,
        "type": "text/plain",
        "value": "Why ESG Stocks Are Perfect for Retirement Portfolios - Motley Fool"
      }
    },
    {
      "guidislink": false,
      "id": "CBMiYGh0dHBzOi8vbmFpcmFtZXRyaWNzLmNvbS8yMDIwLzA3LzAzL2dsb2JhbC1zdG9ja3Mtc3VyZ2UtdHJpZ2dlcmVkLWJ5LXByb21pc2luZy1jb3ZpZC0xOS12YWNjaW5lL9IBAA",
      "link": "https://nairametrics.com/2020/07/03/global-stocks-surge-triggered-by-promising-covid-19-vaccine/",
      "links": [
        {
          "href": "https://nairametrics.com/2020/07/03/global-stocks-surge-triggered-by-promising-covid-19-vaccine/",
          "rel": "alternate",
          "type": "text/html"
        }
      ],
      "published": "Fri, 03 Jul 2020 07:02:55 GMT",
      "published_parsed": [
        2020,
        7,
        3,
        7,
        2,
        55,
        4,
        185,
        0
      ],
      "source": {
        "href": "https://nairametrics.com",
        "title": "Nairametrics"
      },
      "sub_articles": [],
      "summary": "<a href=\"https://nairametrics.com/2020/07/03/global-stocks-surge-triggered-by-promising-covid-19-vaccine/\" target=\"_blank\">Global stocks surge triggered by promising COVID-19 vaccine</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">Nairametrics</font>",
      "summary_detail": {
        "base": "",
        "language": null,
        "type": "text/html",
        "value": "<a href=\"https://nairametrics.com/2020/07/03/global-stocks-surge-triggered-by-promising-covid-19-vaccine/\" target=\"_blank\">Global stocks surge triggered by promising COVID-19 vaccine</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">Nairametrics</font>"
      },
      "title": "Global stocks surge triggered by promising COVID-19 vaccine - Nairametrics",
      "title_detail": {
        "base": "",
        "language": null,
        "type": "text/plain",
        "value": "Global stocks surge triggered by promising COVID-19 vaccine - Nairametrics"
      }
    },
    {
      "guidislink": false,
      "id": "CBMiV2h0dHBzOi8vd3d3LmZvb2wuY29tL2ludmVzdGluZy8yMDIwLzA3LzA0LzMtdG9wLXN0YXktYXQtaG9tZS1zdG9ja3MtdG8tYnV5LWluLWp1bHkuYXNweNIBW2h0dHBzOi8vd3d3LmZvb2wuY29tL2FtcC9pbnZlc3RpbmcvMjAyMC8wNy8wNC8zLXRvcC1zdGF5LWF0LWhvbWUtc3RvY2tzLXRvLWJ1eS1pbi1qdWx5LmFzcHg",
      "link": "https://www.fool.com/investing/2020/07/04/3-top-stay-at-home-stocks-to-buy-in-july.aspx",
      "links": [
        {
          "href": "https://www.fool.com/investing/2020/07/04/3-top-stay-at-home-stocks-to-buy-in-july.aspx",
          "rel": "alternate",
          "type": "text/html"
        }
      ],
      "published": "Sat, 04 Jul 2020 17:00:00 GMT",
      "published_parsed": [
        2020,
        7,
        4,
        17,
        0,
        0,
        5,
        186,
        0
      ],
      "source": {
        "href": "https://www.fool.com",
        "title": "Motley Fool"
      },
      "sub_articles": [],
      "summary": "<a href=\"https://www.fool.com/investing/2020/07/04/3-top-stay-at-home-stocks-to-buy-in-july.aspx\" target=\"_blank\">3 Top Stay-at-Home Stocks to Buy in July</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">Motley Fool</font>",
      "summary_detail": {
        "base": "",
        "language": null,
        "type": "text/html",
        "value": "<a href=\"https://www.fool.com/investing/2020/07/04/3-top-stay-at-home-stocks-to-buy-in-july.aspx\" target=\"_blank\">3 Top Stay-at-Home Stocks to Buy in July</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">Motley Fool</font>"
      },
      "title": "3 Top Stay-at-Home Stocks to Buy in July - Motley Fool",
      "title_detail": {
        "base": "",
        "language": null,
        "type": "text/plain",
        "value": "3 Top Stay-at-Home Stocks to Buy in July - Motley Fool"
      }
    },
    {
      "guidislink": false,
      "id": "CAIiEGadQUIC2TxWSxgGKXQeMTcqFwgEKg8IACoHCAowjuuKAzCWrzwwqIQY",
      "link": "https://www.nytimes.com/2020/07/03/opinion/stock-market.html",
      "links": [
        {
          "href": "https://www.nytimes.com/2020/07/03/opinion/stock-market.html",
          "rel": "alternate",
          "type": "text/html"
        }
      ],
      "published": "Fri, 03 Jul 2020 20:57:33 GMT",
      "published_parsed": [
        2020,
        7,
        3,
        20,
        57,
        33,
        4,
        185,
        0
      ],
      "source": {
        "href": "https://www.nytimes.com",
        "title": "The New York Times"
      },
      "sub_articles": [],
      "summary": "<a href=\"https://www.nytimes.com/2020/07/03/opinion/stock-market.html\" target=\"_blank\">The Mystery of High Stock Prices</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">The New York Times</font>",
      "summary_detail": {
        "base": "",
        "language": null,
        "type": "text/html",
        "value": "<a href=\"https://www.nytimes.com/2020/07/03/opinion/stock-market.html\" target=\"_blank\">The Mystery of High Stock Prices</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">The New York Times</font>"
      },
      "title": "The Mystery of High Stock Prices - The New York Times",
      "title_detail": {
        "base": "",
        "language": null,
        "type": "text/plain",
        "value": "The Mystery of High Stock Prices - The New York Times"
      }
    },
    {
      "guidislink": false,
      "id": "CBMiY2h0dHBzOi8vd3d3LmNuYmMuY29tLzIwMjAvMDcvMDIvaGVyZS1hcmUtY3JlZGl0LXN1aXNzZXMtYmVzdC1zdG9jay1pZGVhcy1mb3ItdGhlLXRoaXJkLXF1YXJ0ZXIuaHRtbNIBAA",
      "link": "https://www.cnbc.com/2020/07/02/here-are-credit-suisses-best-stock-ideas-for-the-third-quarter.html",
      "links": [
        {
          "href": "https://www.cnbc.com/2020/07/02/here-are-credit-suisses-best-stock-ideas-for-the-third-quarter.html",
          "rel": "alternate",
          "type": "text/html"
        }
      ],
      "published": "Sat, 04 Jul 2020 12:15:00 GMT",
      "published_parsed": [
        2020,
        7,
        4,
        12,
        15,
        0,
        5,
        186,
        0
      ],
      "source": {
        "href": "https://www.cnbc.com",
        "title": "CNBC"
      },
      "sub_articles": [],
      "summary": "<a href=\"https://www.cnbc.com/2020/07/02/here-are-credit-suisses-best-stock-ideas-for-the-third-quarter.html\" target=\"_blank\">Here are Credit Suisse's best stock ideas for the third quarter</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">CNBC</font>",
      "summary_detail": {
        "base": "",
        "language": null,
        "type": "text/html",
        "value": "<a href=\"https://www.cnbc.com/2020/07/02/here-are-credit-suisses-best-stock-ideas-for-the-third-quarter.html\" target=\"_blank\">Here are Credit Suisse's best stock ideas for the third quarter</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">CNBC</font>"
      },
      "title": "Here are Credit Suisse's best stock ideas for the third quarter - CNBC",
      "title_detail": {
        "base": "",
        "language": null,
        "type": "text/plain",
        "value": "Here are Credit Suisse's best stock ideas for the third quarter - CNBC"
      }
    },
    {
      "guidislink": false,
      "id": "CAIiEL1FFXE3Slucbx6k99m9PiUqFQgEKg0IACoGCAowrqkBMKBFMLKAAg",
      "link": "https://www.forbes.com/sites/moneyshow/2020/07/03/todays-5-best-monthly-dividend-paying-stocks/",
      "links": [
        {
          "href": "https://www.forbes.com/sites/moneyshow/2020/07/03/todays-5-best-monthly-dividend-paying-stocks/",
          "rel": "alternate",
          "type": "text/html"
        }
      ],
      "published": "Fri, 03 Jul 2020 11:38:45 GMT",
      "published_parsed": [
        2020,
        7,
        3,
        11,
        38,
        45,
        4,
        185,
        0
      ],
      "source": {
        "href": "https://www.forbes.com",
        "title": "Forbes"
      },
      "sub_articles": [],
      "summary": "<a href=\"https://www.forbes.com/sites/moneyshow/2020/07/03/todays-5-best-monthly-dividend-paying-stocks/\" target=\"_blank\">Today's 5 Best Monthly Dividend Paying Stocks</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">Forbes</font>",
      "summary_detail": {
        "base": "",
        "language": null,
        "type": "text/html",
        "value": "<a href=\"https://www.forbes.com/sites/moneyshow/2020/07/03/todays-5-best-monthly-dividend-paying-stocks/\" target=\"_blank\">Today's 5 Best Monthly Dividend Paying Stocks</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">Forbes</font>"
      },
      "title": "Today's 5 Best Monthly Dividend Paying Stocks - Forbes",
      "title_detail": {
        "base": "",
        "language": null,
        "type": "text/plain",
        "value": "Today's 5 Best Monthly Dividend Paying Stocks - Forbes"
      }
    },
    {
      "guidislink": false,
      "id": "CAIiELUAM8j_7jgaJXCBuJAZekoqMwgEKioIACIQ7FiBDgFJQGDseo8Eq4P1hioUCAoiEOxYgQ4BSUBg7HqPBKuD9YYwvZvLBg",
      "link": "https://markets.businessinsider.com/news/stocks/stock-market-outlook-fund-flows-upside-not-driven-retail-investors-2020-7-1029366679",
      "links": [
        {
          "href": "https://markets.businessinsider.com/news/stocks/stock-market-outlook-fund-flows-upside-not-driven-retail-investors-2020-7-1029366679",
          "rel": "alternate",
          "type": "text/html"
        }
      ],
      "published": "Sat, 04 Jul 2020 12:45:41 GMT",
      "published_parsed": [
        2020,
        7,
        4,
        12,
        45,
        41,
        5,
        186,
        0
      ],
      "source": {
        "href": "https://markets.businessinsider.com",
        "title": "Markets Insider"
      },
      "sub_articles": [],
      "summary": "<a href=\"https://markets.businessinsider.com/news/stocks/stock-market-outlook-fund-flows-upside-not-driven-retail-investors-2020-7-1029366679\" target=\"_blank\">Goldman says an under-the-radar driver is signaling further upside in stocks - one not driven by retail i..</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">Markets Insider</font>",
      "summary_detail": {
        "base": "",
        "language": null,
        "type": "text/html",
        "value": "<a href=\"https://markets.businessinsider.com/news/stocks/stock-market-outlook-fund-flows-upside-not-driven-retail-investors-2020-7-1029366679\" target=\"_blank\">Goldman says an under-the-radar driver is signaling further upside in stocks - one not driven by retail i..</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">Markets Insider</font>"
      },
      "title": "Goldman says an under-the-radar driver is signaling further upside in stocks - one not driven by retail i.. - Markets Insider",
      "title_detail": {
        "base": "",
        "language": null,
        "type": "text/plain",
        "value": "Goldman says an under-the-radar driver is signaling further upside in stocks - one not driven by retail i.. - Markets Insider"
      }
    },
    {
      "guidislink": false,
      "id": "CBMiZGh0dHBzOi8vd3d3LmJ1c2luZXNzaW5zaWRlci5jb20vY29sdW1iaWEtZnVuZC1tYW5hZ2VyLXJhaHVsLW5hcmFuZy1saWtlcy12YWx1ZS1zdG9ja3MtaW4tdGVjaC0yMDIwLTfSAQA",
      "link": "https://www.businessinsider.com/columbia-fund-manager-rahul-narang-likes-value-stocks-in-tech-2020-7",
      "links": [
        {
          "href": "https://www.businessinsider.com/columbia-fund-manager-rahul-narang-likes-value-stocks-in-tech-2020-7",
          "rel": "alternate",
          "type": "text/html"
        }
      ],
      "published": "Sat, 04 Jul 2020 09:04:46 GMT",
      "published_parsed": [
        2020,
        7,
        4,
        9,
        4,
        46,
        5,
        186,
        0
      ],
      "source": {
        "href": "https://www.businessinsider.com",
        "title": "Business Insider"
      },
      "sub_articles": [],
      "summary": "<a href=\"https://www.businessinsider.com/columbia-fund-manager-rahul-narang-likes-value-stocks-in-tech-2020-7\" target=\"_blank\">Columbia fund manager Rahul Narang likes value stocks in tech</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">Business Insider</font>",
      "summary_detail": {
        "base": "",
        "language": null,
        "type": "text/html",
        "value": "<a href=\"https://www.businessinsider.com/columbia-fund-manager-rahul-narang-likes-value-stocks-in-tech-2020-7\" target=\"_blank\">Columbia fund manager Rahul Narang likes value stocks in tech</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">Business Insider</font>"
      },
      "title": "Columbia fund manager Rahul Narang likes value stocks in tech - Business Insider",
      "title_detail": {
        "base": "",
        "language": null,
        "type": "text/plain",
        "value": "Columbia fund manager Rahul Narang likes value stocks in tech - Business Insider"
      }
    },
    {
      "guidislink": false,
      "id": "CBMifmh0dHBzOi8vd3d3LnBvc3RhbmRjb3VyaWVyLmNvbS9idXNpbmVzcy9hLXRhbGUtb2YtdHdvLXF1YXJ0ZXJzLWZvci1zYy1zdG9ja3MvYXJ0aWNsZV8xZTFjOWQ5NC1iYWUyLTExZWEtODJiZC05M2VjNTRkYTRhNmMuaHRtbNIBAA",
      "link": "https://www.postandcourier.com/business/a-tale-of-two-quarters-for-sc-stocks/article_1e1c9d94-bae2-11ea-82bd-93ec54da4a6c.html",
      "links": [
        {
          "href": "https://www.postandcourier.com/business/a-tale-of-two-quarters-for-sc-stocks/article_1e1c9d94-bae2-11ea-82bd-93ec54da4a6c.html",
          "rel": "alternate",
          "type": "text/html"
        }
      ],
      "published": "Sat, 04 Jul 2020 18:10:54 GMT",
      "published_parsed": [
        2020,
        7,
        4,
        18,
        10,
        54,
        5,
        186,
        0
      ],
      "source": {
        "href": "https://www.postandcourier.com",
        "title": "Charleston Post Courier"
      },
      "sub_articles": [],
      "summary": "<a href=\"https://www.postandcourier.com/business/a-tale-of-two-quarters-for-sc-stocks/article_1e1c9d94-bae2-11ea-82bd-93ec54da4a6c.html\" target=\"_blank\">A tale of two quarters for SC stocks</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">Charleston Post Courier</font>",
      "summary_detail": {
        "base": "",
        "language": null,
        "type": "text/html",
        "value": "<a href=\"https://www.postandcourier.com/business/a-tale-of-two-quarters-for-sc-stocks/article_1e1c9d94-bae2-11ea-82bd-93ec54da4a6c.html\" target=\"_blank\">A tale of two quarters for SC stocks</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">Charleston Post Courier</font>"
      },
      "title": "A tale of two quarters for SC stocks - Charleston Post Courier",
      "title_detail": {
        "base": "",
        "language": null,
        "type": "text/plain",
        "value": "A tale of two quarters for SC stocks - Charleston Post Courier"
      }
    },
    {
      "guidislink": false,
      "id": "CBMiXGh0dHBzOi8vd3d3LmJhcnJvbnMuY29tL2FydGljbGVzL2hlcmUtYXJlLXRoZS1iZXN0LTEwLXRlY2gtc3RvY2tzLW9mLTIwMjAtc28tZmFyLTUxNTkzNzMwNjgy0gFgaHR0cHM6Ly93d3cuYmFycm9ucy5jb20vYW1wL2FydGljbGVzL2hlcmUtYXJlLXRoZS1iZXN0LTEwLXRlY2gtc3RvY2tzLW9mLTIwMjAtc28tZmFyLTUxNTkzNzMwNjgy",
      "link": "https://www.barrons.com/articles/here-are-the-best-10-tech-stocks-of-2020-so-far-51593730682",
      "links": [
        {
          "href": "https://www.barrons.com/articles/here-are-the-best-10-tech-stocks-of-2020-so-far-51593730682",
          "rel": "alternate",
          "type": "text/html"
        }
      ],
      "published": "Thu, 02 Jul 2020 22:58:00 GMT",
      "published_parsed": [
        2020,
        7,
        2,
        22,
        58,
        0,
        3,
        184,
        0
      ],
      "source": {
        "href": "https://www.barrons.com",
        "title": "Barron's"
      },
      "sub_articles": [],
      "summary": "<a href=\"https://www.barrons.com/articles/here-are-the-best-10-tech-stocks-of-2020-so-far-51593730682\" target=\"_blank\">Here Are the Best 10 Tech Stocks of 2020, So Far</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">Barron's</font>",
      "summary_detail": {
        "base": "",
        "language": null,
        "type": "text/html",
        "value": "<a href=\"https://www.barrons.com/articles/here-are-the-best-10-tech-stocks-of-2020-so-far-51593730682\" target=\"_blank\">Here Are the Best 10 Tech Stocks of 2020, So Far</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">Barron's</font>"
      },
      "title": "Here Are the Best 10 Tech Stocks of 2020, So Far - Barron's",
      "title_detail": {
        "base": "",
        "language": null,
        "type": "text/plain",
        "value": "Here Are the Best 10 Tech Stocks of 2020, So Far - Barron's"
      }
    },
    {
      "guidislink": false,
      "id": "CBMiYWh0dHBzOi8vd3d3LmZvb2wuY29tL2ludmVzdGluZy8yMDIwLzA3LzAyLzMtc3RvY2tzLXRvLWJ1eS1hbmQtaG9sZC1kdXJpbmctdGhlLWNvcm9uYXZpcnVzLXBhLmFzcHjSAWVodHRwczovL3d3dy5mb29sLmNvbS9hbXAvaW52ZXN0aW5nLzIwMjAvMDcvMDIvMy1zdG9ja3MtdG8tYnV5LWFuZC1ob2xkLWR1cmluZy10aGUtY29yb25hdmlydXMtcGEuYXNweA",
      "link": "https://www.fool.com/investing/2020/07/02/3-stocks-to-buy-and-hold-during-the-coronavirus-pa.aspx",
      "links": [
        {
          "href": "https://www.fool.com/investing/2020/07/02/3-stocks-to-buy-and-hold-during-the-coronavirus-pa.aspx",
          "rel": "alternate",
          "type": "text/html"
        }
      ],
      "published": "Thu, 02 Jul 2020 15:52:00 GMT",
      "published_parsed": [
        2020,
        7,
        2,
        15,
        52,
        0,
        3,
        184,
        0
      ],
      "source": {
        "href": "https://www.fool.com",
        "title": "Motley Fool"
      },
      "sub_articles": [],
      "summary": "<a href=\"https://www.fool.com/investing/2020/07/02/3-stocks-to-buy-and-hold-during-the-coronavirus-pa.aspx\" target=\"_blank\">3 Stocks to Buy and Hold During the Coronavirus Pandemic</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">Motley Fool</font>",
      "summary_detail": {
        "base": "",
        "language": null,
        "type": "text/html",
        "value": "<a href=\"https://www.fool.com/investing/2020/07/02/3-stocks-to-buy-and-hold-during-the-coronavirus-pa.aspx\" target=\"_blank\">3 Stocks to Buy and Hold During the Coronavirus Pandemic</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">Motley Fool</font>"
      },
      "title": "3 Stocks to Buy and Hold During the Coronavirus Pandemic - Motley Fool",
      "title_detail": {
        "base": "",
        "language": null,
        "type": "text/plain",
        "value": "3 Stocks to Buy and Hold During the Coronavirus Pandemic - Motley Fool"
      }
    },
    {
      "guidislink": false,
      "id": "CAIiEIHvLO6oHw445-19iec49EwqGQgEKhAIACoHCAow2pqGCzD954MDMJzyigY",
      "link": "https://economictimes.indiatimes.com/markets/stocks/news/what-tells-the-real-story-in-stock-trading-price-or-trading-volume/articleshow/76781476.cms",
      "links": [
        {
          "href": "https://economictimes.indiatimes.com/markets/stocks/news/what-tells-the-real-story-in-stock-trading-price-or-trading-volume/articleshow/76781476.cms",
          "rel": "alternate",
          "type": "text/html"
        }
      ],
      "published": "Sat, 04 Jul 2020 05:35:55 GMT",
      "published_parsed": [
        2020,
        7,
        4,
        5,
        35,
        55,
        5,
        186,
        0
      ],
      "source": {
        "href": "https://economictimes.indiatimes.com",
        "title": "Economic Times"
      },
      "sub_articles": [],
      "summary": "<a href=\"https://economictimes.indiatimes.com/markets/stocks/news/what-tells-the-real-story-in-stock-trading-price-or-trading-volume/articleshow/76781476.cms\" target=\"_blank\">What tells the real story in stock trading: price or trading volume?</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">Economic Times</font>",
      "summary_detail": {
        "base": "",
        "language": null,
        "type": "text/html",
        "value": "<a href=\"https://economictimes.indiatimes.com/markets/stocks/news/what-tells-the-real-story-in-stock-trading-price-or-trading-volume/articleshow/76781476.cms\" target=\"_blank\">What tells the real story in stock trading: price or trading volume?</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">Economic Times</font>"
      },
      "title": "What tells the real story in stock trading: price or trading volume? - Economic Times",
      "title_detail": {
        "base": "",
        "language": null,
        "type": "text/plain",
        "value": "What tells the real story in stock trading: price or trading volume? - Economic Times"
      }
    },
    {
      "guidislink": false,
      "id": "CBMiYWh0dHBzOi8vd3d3LmZvb2wuY29tL2ludmVzdGluZy8yMDIwLzA3LzAzLzMtY2hlYXAtc3RvY2tzLXRoYXQtY291bGQtYmUtYmFyZ2FpbnMtaWYtdGhlLW1hcmtlLmFzcHjSAWVodHRwczovL3d3dy5mb29sLmNvbS9hbXAvaW52ZXN0aW5nLzIwMjAvMDcvMDMvMy1jaGVhcC1zdG9ja3MtdGhhdC1jb3VsZC1iZS1iYXJnYWlucy1pZi10aGUtbWFya2UuYXNweA",
      "link": "https://www.fool.com/investing/2020/07/03/3-cheap-stocks-that-could-be-bargains-if-the-marke.aspx",
      "links": [
        {
          "href": "https://www.fool.com/investing/2020/07/03/3-cheap-stocks-that-could-be-bargains-if-the-marke.aspx",
          "rel": "alternate",
          "type": "text/html"
        }
      ],
      "published": "Fri, 03 Jul 2020 11:08:00 GMT",
      "published_parsed": [
        2020,
        7,
        3,
        11,
        8,
        0,
        4,
        185,
        0
      ],
      "source": {
        "href": "https://www.fool.com",
        "title": "Motley Fool"
      },
      "sub_articles": [],
      "summary": "<a href=\"https://www.fool.com/investing/2020/07/03/3-cheap-stocks-that-could-be-bargains-if-the-marke.aspx\" target=\"_blank\">3 Cheap Stocks That Could Be Bargains if the Market Crashes</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">Motley Fool</font>",
      "summary_detail": {
        "base": "",
        "language": null,
        "type": "text/html",
        "value": "<a href=\"https://www.fool.com/investing/2020/07/03/3-cheap-stocks-that-could-be-bargains-if-the-marke.aspx\" target=\"_blank\">3 Cheap Stocks That Could Be Bargains if the Market Crashes</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">Motley Fool</font>"
      },
      "title": "3 Cheap Stocks That Could Be Bargains if the Market Crashes - Motley Fool",
      "title_detail": {
        "base": "",
        "language": null,
        "type": "text/plain",
        "value": "3 Cheap Stocks That Could Be Bargains if the Market Crashes - Motley Fool"
      }
    },
    {
      "guidislink": false,
      "id": "CAIiEIycWowffgDom4SPZ4anhmQqGQgEKhAIACoHCAowocv1CjCSptoCMMSUnAY",
      "link": "https://www.cnn.com/2020/07/03/investing/tesla-stock/index.html",
      "links": [
        {
          "href": "https://www.cnn.com/2020/07/03/investing/tesla-stock/index.html",
          "rel": "alternate",
          "type": "text/html"
        }
      ],
      "published": "Fri, 03 Jul 2020 19:15:40 GMT",
      "published_parsed": [
        2020,
        7,
        3,
        19,
        15,
        40,
        4,
        185,
        0
      ],
      "source": {
        "href": "https://www.cnn.com",
        "title": "CNN"
      },
      "sub_articles": [],
      "summary": "<a href=\"https://www.cnn.com/2020/07/03/investing/tesla-stock/index.html\" target=\"_blank\">Tesla stock topped $1,200. Here's how it could hit $2,000</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">CNN</font>",
      "summary_detail": {
        "base": "",
        "language": null,
        "type": "text/html",
        "value": "<a href=\"https://www.cnn.com/2020/07/03/investing/tesla-stock/index.html\" target=\"_blank\">Tesla stock topped $1,200. Here's how it could hit $2,000</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">CNN</font>"
      },
      "title": "Tesla stock topped $1,200. Here's how it could hit $2,000 - CNN",
      "title_detail": {
        "base": "",
        "language": null,
        "type": "text/plain",
        "value": "Tesla stock topped $1,200. Here's how it could hit $2,000 - CNN"
      }
    },
    {
      "guidislink": false,
      "id": "CAIiEAlSY_5XNnHgT5gmWaxRfUgqGQgEKhAIACoHCAow2pqGCzD954MDMJzyigY",
      "link": "https://economictimes.indiatimes.com/markets/stocks/news/negative-interest-rates-to-boost-appeal-of-dividend-stocks-gold/articleshow/76771403.cms",
      "links": [
        {
          "href": "https://economictimes.indiatimes.com/markets/stocks/news/negative-interest-rates-to-boost-appeal-of-dividend-stocks-gold/articleshow/76771403.cms",
          "rel": "alternate",
          "type": "text/html"
        }
      ],
      "published": "Fri, 03 Jul 2020 12:28:49 GMT",
      "published_parsed": [
        2020,
        7,
        3,
        12,
        28,
        49,
        4,
        185,
        0
      ],
      "source": {
        "href": "https://economictimes.indiatimes.com",
        "title": "Economic Times"
      },
      "sub_articles": [],
      "summary": "<a href=\"https://economictimes.indiatimes.com/markets/stocks/news/negative-interest-rates-to-boost-appeal-of-dividend-stocks-gold/articleshow/76771403.cms\" target=\"_blank\">Negative interest rates to boost appeal of dividend stocks, gold</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">Economic Times</font>",
      "summary_detail": {
        "base": "",
        "language": null,
        "type": "text/html",
        "value": "<a href=\"https://economictimes.indiatimes.com/markets/stocks/news/negative-interest-rates-to-boost-appeal-of-dividend-stocks-gold/articleshow/76771403.cms\" target=\"_blank\">Negative interest rates to boost appeal of dividend stocks, gold</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">Economic Times</font>"
      },
      "title": "Negative interest rates to boost appeal of dividend stocks, gold - Economic Times",
      "title_detail": {
        "base": "",
        "language": null,
        "type": "text/plain",
        "value": "Negative interest rates to boost appeal of dividend stocks, gold - Economic Times"
      }
    },
    {
      "guidislink": false,
      "id": "CAIiEJbNF52Xvw_1lUpxqr_6xmAqGQgEKhAIACoHCAow2pqGCzD954MDMJzyigY",
      "link": "https://economictimes.indiatimes.com/markets/stocks/news/despite-recent-rally-these-stocks-are-still-up-to-300-away-from-pre-covid-highs/articleshow/76763937.cms",
      "links": [
        {
          "href": "https://economictimes.indiatimes.com/markets/stocks/news/despite-recent-rally-these-stocks-are-still-up-to-300-away-from-pre-covid-highs/articleshow/76763937.cms",
          "rel": "alternate",
          "type": "text/html"
        }
      ],
      "published": "Fri, 03 Jul 2020 05:36:16 GMT",
      "published_parsed": [
        2020,
        7,
        3,
        5,
        36,
        16,
        4,
        185,
        0
      ],
      "source": {
        "href": "https://economictimes.indiatimes.com",
        "title": "Economic Times"
      },
      "sub_articles": [],
      "summary": "<a href=\"https://economictimes.indiatimes.com/markets/stocks/news/despite-recent-rally-these-stocks-are-still-up-to-300-away-from-pre-covid-highs/articleshow/76763937.cms\" target=\"_blank\">Despite recent rally, these stocks are still up to 300% away from Pre-Covid highs!</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">Economic Times</font>",
      "summary_detail": {
        "base": "",
        "language": null,
        "type": "text/html",
        "value": "<a href=\"https://economictimes.indiatimes.com/markets/stocks/news/despite-recent-rally-these-stocks-are-still-up-to-300-away-from-pre-covid-highs/articleshow/76763937.cms\" target=\"_blank\">Despite recent rally, these stocks are still up to 300% away from Pre-Covid highs!</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">Economic Times</font>"
      },
      "title": "Despite recent rally, these stocks are still up to 300% away from Pre-Covid highs! - Economic Times",
      "title_detail": {
        "base": "",
        "language": null,
        "type": "text/plain",
        "value": "Despite recent rally, these stocks are still up to 300% away from Pre-Covid highs! - Economic Times"
      }
    },
    {
      "guidislink": false,
      "id": "CBMiYGh0dHBzOi8vd3d3LmZvb2wuY29tL2ludmVzdGluZy8yMDIwLzA3LzA0LzMtdG9wLW1lZGljYWwtZGV2aWNlLXN0b2Nrcy10by1idXktZm9yLXRoZS1zZWNvbmQuYXNweNIBZGh0dHBzOi8vd3d3LmZvb2wuY29tL2FtcC9pbnZlc3RpbmcvMjAyMC8wNy8wNC8zLXRvcC1tZWRpY2FsLWRldmljZS1zdG9ja3MtdG8tYnV5LWZvci10aGUtc2Vjb25kLmFzcHg",
      "link": "https://www.fool.com/investing/2020/07/04/3-top-medical-device-stocks-to-buy-for-the-second.aspx",
      "links": [
        {
          "href": "https://www.fool.com/investing/2020/07/04/3-top-medical-device-stocks-to-buy-for-the-second.aspx",
          "rel": "alternate",
          "type": "text/html"
        }
      ],
      "published": "Sat, 04 Jul 2020 11:32:00 GMT",
      "published_parsed": [
        2020,
        7,
        4,
        11,
        32,
        0,
        5,
        186,
        0
      ],
      "source": {
        "href": "https://www.fool.com",
        "title": "Motley Fool"
      },
      "sub_articles": [],
      "summary": "<a href=\"https://www.fool.com/investing/2020/07/04/3-top-medical-device-stocks-to-buy-for-the-second.aspx\" target=\"_blank\">3 Top Medical-Device Stocks to Buy in the Second Half of 2020</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">Motley Fool</font>",
      "summary_detail": {
        "base": "",
        "language": null,
        "type": "text/html",
        "value": "<a href=\"https://www.fool.com/investing/2020/07/04/3-top-medical-device-stocks-to-buy-for-the-second.aspx\" target=\"_blank\">3 Top Medical-Device Stocks to Buy in the Second Half of 2020</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">Motley Fool</font>"
      },
      "title": "3 Top Medical-Device Stocks to Buy in the Second Half of 2020 - Motley Fool",
      "title_detail": {
        "base": "",
        "language": null,
        "type": "text/plain",
        "value": "3 Top Medical-Device Stocks to Buy in the Second Half of 2020 - Motley Fool"
      }
    },
    {
      "guidislink": false,
      "id": "CAIiEE0Fb8aNJ_TcdHwGIM0EJm0qEwgEKgwIACoFCAowgHkwoBEwwjU",
      "link": "https://www.fool.com/investing/2020/07/03/2-hot-stocks-to-buy-in-july.aspx",
      "links": [
        {
          "href": "https://www.fool.com/investing/2020/07/03/2-hot-stocks-to-buy-in-july.aspx",
          "rel": "alternate",
          "type": "text/html"
        }
      ],
      "published": "Sat, 04 Jul 2020 02:49:36 GMT",
      "published_parsed": [
        2020,
        7,
        4,
        2,
        49,
        36,
        5,
        186,
        0
      ],
      "source": {
        "href": "https://www.fool.com",
        "title": "The Motley Fool"
      },
      "sub_articles": [],
      "summary": "<a href=\"https://www.fool.com/investing/2020/07/03/2-hot-stocks-to-buy-in-july.aspx\" target=\"_blank\">2 Hot Stocks to Buy in July</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">The Motley Fool</font>",
      "summary_detail": {
        "base": "",
        "language": null,
        "type": "text/html",
        "value": "<a href=\"https://www.fool.com/investing/2020/07/03/2-hot-stocks-to-buy-in-july.aspx\" target=\"_blank\">2 Hot Stocks to Buy in July</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">The Motley Fool</font>"
      },
      "title": "2 Hot Stocks to Buy in July - The Motley Fool",
      "title_detail": {
        "base": "",
        "language": null,
        "type": "text/plain",
        "value": "2 Hot Stocks to Buy in July - The Motley Fool"
      }
    },
    {
      "guidislink": false,
      "id": "CAIiEL5oZMvlTj2TK9exrSJ4hRoqGAgEKg8IACoHCAown9bJATD3yxUw96_BBg",
      "link": "https://www.barrons.com/articles/beaten-down-utility-stocks-could-power-up-51593710476",
      "links": [
        {
          "href": "https://www.barrons.com/articles/beaten-down-utility-stocks-could-power-up-51593710476",
          "rel": "alternate",
          "type": "text/html"
        }
      ],
      "published": "Sat, 04 Jul 2020 10:08:27 GMT",
      "published_parsed": [
        2020,
        7,
        4,
        10,
        8,
        27,
        5,
        186,
        0
      ],
      "source": {
        "href": "https://www.barrons.com",
        "title": "Barron's"
      },
      "sub_articles": [],
      "summary": "<a href=\"https://www.barrons.com/articles/beaten-down-utility-stocks-could-power-up-51593710476\" target=\"_blank\">How Activist Elliott Management Finds the Top Utility Stocks</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">Barron's</font>",
      "summary_detail": {
        "base": "",
        "language": null,
        "type": "text/html",
        "value": "<a href=\"https://www.barrons.com/articles/beaten-down-utility-stocks-could-power-up-51593710476\" target=\"_blank\">How Activist Elliott Management Finds the Top Utility Stocks</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">Barron's</font>"
      },
      "title": "How Activist Elliott Management Finds the Top Utility Stocks - Barron's",
      "title_detail": {
        "base": "",
        "language": null,
        "type": "text/plain",
        "value": "How Activist Elliott Management Finds the Top Utility Stocks - Barron's"
      }
    },
    {
      "guidislink": false,
      "id": "CAIiEJPypuIHQuNnRDwzp8Rcv6kqEwgEKgwIACoFCAowgHkwoBEwwjU",
      "link": "https://www.fool.com/investing/2020/07/03/3-high-yield-tech-stocks-to-buy-in-july.aspx",
      "links": [
        {
          "href": "https://www.fool.com/investing/2020/07/03/3-high-yield-tech-stocks-to-buy-in-july.aspx",
          "rel": "alternate",
          "type": "text/html"
        }
      ],
      "published": "Sat, 04 Jul 2020 02:48:52 GMT",
      "published_parsed": [
        2020,
        7,
        4,
        2,
        48,
        52,
        5,
        186,
        0
      ],
      "source": {
        "href": "https://www.fool.com",
        "title": "The Motley Fool"
      },
      "sub_articles": [],
      "summary": "<a href=\"https://www.fool.com/investing/2020/07/03/3-high-yield-tech-stocks-to-buy-in-july.aspx\" target=\"_blank\">3 High-Yield Tech Stocks to Buy in July</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">The Motley Fool</font>",
      "summary_detail": {
        "base": "",
        "language": null,
        "type": "text/html",
        "value": "<a href=\"https://www.fool.com/investing/2020/07/03/3-high-yield-tech-stocks-to-buy-in-july.aspx\" target=\"_blank\">3 High-Yield Tech Stocks to Buy in July</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">The Motley Fool</font>"
      },
      "title": "3 High-Yield Tech Stocks to Buy in July - The Motley Fool",
      "title_detail": {
        "base": "",
        "language": null,
        "type": "text/plain",
        "value": "3 High-Yield Tech Stocks to Buy in July - The Motley Fool"
      }
    },
    {
      "guidislink": false,
      "id": "CBMie2h0dHBzOi8vd3d3LmNuYmMuY29tLzIwMjAvMDcvMDMvbWlzc2VkLXRoZS1iaW90ZWNoLWJyZWFrb3V0LXRoZXNlLXN0b2Nrcy1pbi10aGUtaW5kdXN0cnktYXJlLXN0aWxsLXNldC10by1ydW4tbWttLXNheXMuaHRtbNIBAA",
      "link": "https://www.cnbc.com/2020/07/03/missed-the-biotech-breakout-these-stocks-in-the-industry-are-still-set-to-run-mkm-says.html",
      "links": [
        {
          "href": "https://www.cnbc.com/2020/07/03/missed-the-biotech-breakout-these-stocks-in-the-industry-are-still-set-to-run-mkm-says.html",
          "rel": "alternate",
          "type": "text/html"
        }
      ],
      "published": "Fri, 03 Jul 2020 12:37:00 GMT",
      "published_parsed": [
        2020,
        7,
        3,
        12,
        37,
        0,
        4,
        185,
        0
      ],
      "source": {
        "href": "https://www.cnbc.com",
        "title": "CNBC"
      },
      "sub_articles": [],
      "summary": "<a href=\"https://www.cnbc.com/2020/07/03/missed-the-biotech-breakout-these-stocks-in-the-industry-are-still-set-to-run-mkm-says.html\" target=\"_blank\">Missed the biotech breakout? These stocks in the industry are still set to run, MKM says</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">CNBC</font>",
      "summary_detail": {
        "base": "",
        "language": null,
        "type": "text/html",
        "value": "<a href=\"https://www.cnbc.com/2020/07/03/missed-the-biotech-breakout-these-stocks-in-the-industry-are-still-set-to-run-mkm-says.html\" target=\"_blank\">Missed the biotech breakout? These stocks in the industry are still set to run, MKM says</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">CNBC</font>"
      },
      "title": "Missed the biotech breakout? These stocks in the industry are still set to run, MKM says - CNBC",
      "title_detail": {
        "base": "",
        "language": null,
        "type": "text/plain",
        "value": "Missed the biotech breakout? These stocks in the industry are still set to run, MKM says - CNBC"
      }
    },
    {
      "guidislink": false,
      "id": "CBMiZ2h0dHBzOi8vZmluYW5jaWFsdHJpYnVuZS5jb20vYXJ0aWNsZXMvYnVzaW5lc3MtYW5kLW1hcmtldHMvMTA0MTY0L3NtYWxsLWNhcC1zdG9ja3MtZGlwLWluLXRlaHJhbi1tYXJrZXTSAQA",
      "link": "https://financialtribune.com/articles/business-and-markets/104164/small-cap-stocks-dip-in-tehran-market",
      "links": [
        {
          "href": "https://financialtribune.com/articles/business-and-markets/104164/small-cap-stocks-dip-in-tehran-market",
          "rel": "alternate",
          "type": "text/html"
        }
      ],
      "published": "Sat, 04 Jul 2020 20:09:42 GMT",
      "published_parsed": [
        2020,
        7,
        4,
        20,
        9,
        42,
        5,
        186,
        0
      ],
      "source": {
        "href": "https://financialtribune.com",
        "title": "Financial Tribune"
      },
      "sub_articles": [],
      "summary": "<a href=\"https://financialtribune.com/articles/business-and-markets/104164/small-cap-stocks-dip-in-tehran-market\" target=\"_blank\">Small-Cap Stocks Dip in Tehran Market</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">Financial Tribune</font>",
      "summary_detail": {
        "base": "",
        "language": null,
        "type": "text/html",
        "value": "<a href=\"https://financialtribune.com/articles/business-and-markets/104164/small-cap-stocks-dip-in-tehran-market\" target=\"_blank\">Small-Cap Stocks Dip in Tehran Market</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">Financial Tribune</font>"
      },
      "title": "Small-Cap Stocks Dip in Tehran Market - Financial Tribune",
      "title_detail": {
        "base": "",
        "language": null,
        "type": "text/plain",
        "value": "Small-Cap Stocks Dip in Tehran Market - Financial Tribune"
      }
    },
    {
      "guidislink": false,
      "id": "CBMiXWh0dHBzOi8vd3d3LmZvb2wuY29tL2ludmVzdGluZy8yMDIwLzA3LzAzLzMtb2YtdGhlLXNtYXJ0ZXN0LXN0b2Nrcy10by1pbnZlc3QtaW4td2l0aC0xMDAuYXNweNIBYWh0dHBzOi8vd3d3LmZvb2wuY29tL2FtcC9pbnZlc3RpbmcvMjAyMC8wNy8wMy8zLW9mLXRoZS1zbWFydGVzdC1zdG9ja3MtdG8taW52ZXN0LWluLXdpdGgtMTAwLmFzcHg",
      "link": "https://www.fool.com/investing/2020/07/03/3-of-the-smartest-stocks-to-invest-in-with-100.aspx",
      "links": [
        {
          "href": "https://www.fool.com/investing/2020/07/03/3-of-the-smartest-stocks-to-invest-in-with-100.aspx",
          "rel": "alternate",
          "type": "text/html"
        }
      ],
      "published": "Fri, 03 Jul 2020 09:51:00 GMT",
      "published_parsed": [
        2020,
        7,
        3,
        9,
        51,
        0,
        4,
        185,
        0
      ],
      "source": {
        "href": "https://www.fool.com",
        "title": "Motley Fool"
      },
      "sub_articles": [],
      "summary": "<a href=\"https://www.fool.com/investing/2020/07/03/3-of-the-smartest-stocks-to-invest-in-with-100.aspx\" target=\"_blank\">3 of the Smartest Stocks to Invest in With $100</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">Motley Fool</font>",
      "summary_detail": {
        "base": "",
        "language": null,
        "type": "text/html",
        "value": "<a href=\"https://www.fool.com/investing/2020/07/03/3-of-the-smartest-stocks-to-invest-in-with-100.aspx\" target=\"_blank\">3 of the Smartest Stocks to Invest in With $100</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">Motley Fool</font>"
      },
      "title": "3 of the Smartest Stocks to Invest in With $100 - Motley Fool",
      "title_detail": {
        "base": "",
        "language": null,
        "type": "text/plain",
        "value": "3 of the Smartest Stocks to Invest in With $100 - Motley Fool"
      }
    },
    {
      "guidislink": false,
      "id": "CBMiS2h0dHBzOi8vZmluYW5jZS55YWhvby5jb20vbmV3cy90aW0tcGFydGljaXBhY29lcy1zYS10c3UtZ29vZC0xOTE5MDM1ODEuaHRtbNIBU2h0dHBzOi8vZmluYW5jZS55YWhvby5jb20vYW1waHRtbC9uZXdzL3RpbS1wYXJ0aWNpcGFjb2VzLXNhLXRzdS1nb29kLTE5MTkwMzU4MS5odG1s",
      "link": "https://finance.yahoo.com/news/tim-participacoes-sa-tsu-good-191903581.html",
      "links": [
        {
          "href": "https://finance.yahoo.com/news/tim-participacoes-sa-tsu-good-191903581.html",
          "rel": "alternate",
          "type": "text/html"
        }
      ],
      "published": "Sat, 04 Jul 2020 19:19:00 GMT",
      "published_parsed": [
        2020,
        7,
        4,
        19,
        19,
        0,
        5,
        186,
        0
      ],
      "source": {
        "href": "https://finance.yahoo.com",
        "title": "Yahoo Finance"
      },
      "sub_articles": [],
      "summary": "<a href=\"https://finance.yahoo.com/news/tim-participacoes-sa-tsu-good-191903581.html\" target=\"_blank\">Is TIM Participacoes SA (TSU) A Good Stock To Buy?</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">Yahoo Finance</font>",
      "summary_detail": {
        "base": "",
        "language": null,
        "type": "text/html",
        "value": "<a href=\"https://finance.yahoo.com/news/tim-participacoes-sa-tsu-good-191903581.html\" target=\"_blank\">Is TIM Participacoes SA (TSU) A Good Stock To Buy?</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">Yahoo Finance</font>"
      },
      "title": "Is TIM Participacoes SA (TSU) A Good Stock To Buy? - Yahoo Finance",
      "title_detail": {
        "base": "",
        "language": null,
        "type": "text/plain",
        "value": "Is TIM Participacoes SA (TSU) A Good Stock To Buy? - Yahoo Finance"
      }
    },
    {
      "guidislink": false,
      "id": "CBMiVWh0dHBzOi8vc3RvY2tuZXdzLmNvbS9uZXdzL3RzbGEtem0tc2hvcC0zLXN0b2Nrcy10aGF0LWFyZS11cC1tb3JlLXRoYW4tMTAwLXRoaXMteWVhci_SAQA",
      "link": "https://stocknews.com/news/tsla-zm-shop-3-stocks-that-are-up-more-than-100-this-year/",
      "links": [
        {
          "href": "https://stocknews.com/news/tsla-zm-shop-3-stocks-that-are-up-more-than-100-this-year/",
          "rel": "alternate",
          "type": "text/html"
        }
      ],
      "published": "Fri, 03 Jul 2020 18:45:52 GMT",
      "published_parsed": [
        2020,
        7,
        3,
        18,
        45,
        52,
        4,
        185,
        0
      ],
      "source": {
        "href": "https://stocknews.com",
        "title": "StockNews.com"
      },
      "sub_articles": [],
      "summary": "<a href=\"https://stocknews.com/news/tsla-zm-shop-3-stocks-that-are-up-more-than-100-this-year/\" target=\"_blank\">TSLA: 3 Stocks That Are Up More Than 100% This Year</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">StockNews.com</font>",
      "summary_detail": {
        "base": "",
        "language": null,
        "type": "text/html",
        "value": "<a href=\"https://stocknews.com/news/tsla-zm-shop-3-stocks-that-are-up-more-than-100-this-year/\" target=\"_blank\">TSLA: 3 Stocks That Are Up More Than 100% This Year</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">StockNews.com</font>"
      },
      "title": "TSLA: 3 Stocks That Are Up More Than 100% This Year - StockNews.com",
      "title_detail": {
        "base": "",
        "language": null,
        "type": "text/plain",
        "value": "TSLA: 3 Stocks That Are Up More Than 100% This Year - StockNews.com"
      }
    },
    {
      "guidislink": false,
      "id": "CAIiEOVKSPab7TfbItDP0Sk2LzMqGQgEKhAIACoHCAowocv1CjCSptoCMMSUnAY",
      "link": "https://www.cnn.com/2020/07/02/investing/premarket-stocks-trading/index.html",
      "links": [
        {
          "href": "https://www.cnn.com/2020/07/02/investing/premarket-stocks-trading/index.html",
          "rel": "alternate",
          "type": "text/html"
        }
      ],
      "published": "Thu, 02 Jul 2020 14:15:41 GMT",
      "published_parsed": [
        2020,
        7,
        2,
        14,
        15,
        41,
        3,
        184,
        0
      ],
      "source": {
        "href": "https://www.cnn.com",
        "title": "CNN"
      },
      "sub_articles": [],
      "summary": "<a href=\"https://www.cnn.com/2020/07/02/investing/premarket-stocks-trading/index.html\" target=\"_blank\">This data shows the Great Reopening may have stalled</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">CNN</font>",
      "summary_detail": {
        "base": "",
        "language": null,
        "type": "text/html",
        "value": "<a href=\"https://www.cnn.com/2020/07/02/investing/premarket-stocks-trading/index.html\" target=\"_blank\">This data shows the Great Reopening may have stalled</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">CNN</font>"
      },
      "title": "This data shows the Great Reopening may have stalled - CNN",
      "title_detail": {
        "base": "",
        "language": null,
        "type": "text/plain",
        "value": "This data shows the Great Reopening may have stalled - CNN"
      }
    },
    {
      "guidislink": false,
      "id": "CAIiEAmzv2wRlEfhUgTyBrfpn-IqFggEKg0IACoGCAowkqEGMJBZMNL5vAY",
      "link": "https://seekingalpha.com/article/4356924-stocks-to-watch-postmates-walgreens-and-cannabis-plays",
      "links": [
        {
          "href": "https://seekingalpha.com/article/4356924-stocks-to-watch-postmates-walgreens-and-cannabis-plays",
          "rel": "alternate",
          "type": "text/html"
        }
      ],
      "published": "Sat, 04 Jul 2020 12:22:57 GMT",
      "published_parsed": [
        2020,
        7,
        4,
        12,
        22,
        57,
        5,
        186,
        0
      ],
      "source": {
        "href": "https://seekingalpha.com",
        "title": "Seeking Alpha"
      },
      "sub_articles": [],
      "summary": "<a href=\"https://seekingalpha.com/article/4356924-stocks-to-watch-postmates-walgreens-and-cannabis-plays\" target=\"_blank\">Stocks To Watch: Postmates, Walgreens And Cannabis Plays</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">Seeking Alpha</font>",
      "summary_detail": {
        "base": "",
        "language": null,
        "type": "text/html",
        "value": "<a href=\"https://seekingalpha.com/article/4356924-stocks-to-watch-postmates-walgreens-and-cannabis-plays\" target=\"_blank\">Stocks To Watch: Postmates, Walgreens And Cannabis Plays</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">Seeking Alpha</font>"
      },
      "title": "Stocks To Watch: Postmates, Walgreens And Cannabis Plays - Seeking Alpha",
      "title_detail": {
        "base": "",
        "language": null,
        "type": "text/plain",
        "value": "Stocks To Watch: Postmates, Walgreens And Cannabis Plays - Seeking Alpha"
      }
    },
    {
      "guidislink": false,
      "id": "CAIiEDwBRQ7_dMmdq8SMnM1vPLEqGQgEKhAIACoHCAow4uzwCjCF3bsCMIrOrwM",
      "link": "https://www.bloomberg.com/news/articles/2020-07-02/asian-stocks-to-open-higher-after-u-s-gains-markets-wrap",
      "links": [
        {
          "href": "https://www.bloomberg.com/news/articles/2020-07-02/asian-stocks-to-open-higher-after-u-s-gains-markets-wrap",
          "rel": "alternate",
          "type": "text/html"
        }
      ],
      "published": "Sat, 04 Jul 2020 01:51:50 GMT",
      "published_parsed": [
        2020,
        7,
        4,
        1,
        51,
        50,
        5,
        186,
        0
      ],
      "source": {
        "href": "https://www.bloomberg.com",
        "title": "Bloomberg"
      },
      "sub_articles": [],
      "summary": "<a href=\"https://www.bloomberg.com/news/articles/2020-07-02/asian-stocks-to-open-higher-after-u-s-gains-markets-wrap\" target=\"_blank\">Europe Stocks Decline With U.S. Futures; Oil Slips: Markets Wrap</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">Bloomberg</font>",
      "summary_detail": {
        "base": "",
        "language": null,
        "type": "text/html",
        "value": "<a href=\"https://www.bloomberg.com/news/articles/2020-07-02/asian-stocks-to-open-higher-after-u-s-gains-markets-wrap\" target=\"_blank\">Europe Stocks Decline With U.S. Futures; Oil Slips: Markets Wrap</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">Bloomberg</font>"
      },
      "title": "Europe Stocks Decline With U.S. Futures; Oil Slips: Markets Wrap - Bloomberg",
      "title_detail": {
        "base": "",
        "language": null,
        "type": "text/plain",
        "value": "Europe Stocks Decline With U.S. Futures; Oil Slips: Markets Wrap - Bloomberg"
      }
    },
    {
      "guidislink": false,
      "id": "CAIiEDJQ79uvgJprBzV3iEOF9TkqGQgEKhAIACoHCAow2Nb3CjDivdcCMJ_d7gU",
      "link": "https://www.cnbc.com/2020/07/02/coronavirus-update-trump-ambassadors-sold-stocks-as-president-downplayed-pandemic.html",
      "links": [
        {
          "href": "https://www.cnbc.com/2020/07/02/coronavirus-update-trump-ambassadors-sold-stocks-as-president-downplayed-pandemic.html",
          "rel": "alternate",
          "type": "text/html"
        }
      ],
      "published": "Thu, 02 Jul 2020 22:26:03 GMT",
      "published_parsed": [
        2020,
        7,
        2,
        22,
        26,
        3,
        3,
        184,
        0
      ],
      "source": {
        "href": "https://www.cnbc.com",
        "title": "CNBC"
      },
      "sub_articles": [],
      "summary": "<a href=\"https://www.cnbc.com/2020/07/02/coronavirus-update-trump-ambassadors-sold-stocks-as-president-downplayed-pandemic.html\" target=\"_blank\">Trump ambassadors sold stocks as president downplayed pandemic and virus was spreading</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">CNBC</font>",
      "summary_detail": {
        "base": "",
        "language": null,
        "type": "text/html",
        "value": "<a href=\"https://www.cnbc.com/2020/07/02/coronavirus-update-trump-ambassadors-sold-stocks-as-president-downplayed-pandemic.html\" target=\"_blank\">Trump ambassadors sold stocks as president downplayed pandemic and virus was spreading</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">CNBC</font>"
      },
      "title": "Trump ambassadors sold stocks as president downplayed pandemic and virus was spreading - CNBC",
      "title_detail": {
        "base": "",
        "language": null,
        "type": "text/plain",
        "value": "Trump ambassadors sold stocks as president downplayed pandemic and virus was spreading - CNBC"
      }
    },
    {
      "guidislink": false,
      "id": "CAIiEINuQCutFMi59jIP8xsMQzcqEwgEKgwIACoFCAowgHkwoBEwwjU",
      "link": "https://www.fool.com/investing/2020/07/03/hamilton-special-3-hot-stocks-under-10.aspx",
      "links": [
        {
          "href": "https://www.fool.com/investing/2020/07/03/hamilton-special-3-hot-stocks-under-10.aspx",
          "rel": "alternate",
          "type": "text/html"
        }
      ],
      "published": "Sat, 04 Jul 2020 02:49:02 GMT",
      "published_parsed": [
        2020,
        7,
        4,
        2,
        49,
        2,
        5,
        186,
        0
      ],
      "source": {
        "href": "https://www.fool.com",
        "title": "The Motley Fool"
      },
      "sub_articles": [],
      "summary": "<a href=\"https://www.fool.com/investing/2020/07/03/hamilton-special-3-hot-stocks-under-10.aspx\" target=\"_blank\">Hamilton Special: 3 Hot Stocks Under $10</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">The Motley Fool</font>",
      "summary_detail": {
        "base": "",
        "language": null,
        "type": "text/html",
        "value": "<a href=\"https://www.fool.com/investing/2020/07/03/hamilton-special-3-hot-stocks-under-10.aspx\" target=\"_blank\">Hamilton Special: 3 Hot Stocks Under $10</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">The Motley Fool</font>"
      },
      "title": "Hamilton Special: 3 Hot Stocks Under $10 - The Motley Fool",
      "title_detail": {
        "base": "",
        "language": null,
        "type": "text/plain",
        "value": "Hamilton Special: 3 Hot Stocks Under $10 - The Motley Fool"
      }
    },
    {
      "guidislink": false,
      "id": "CBMiemh0dHBzOi8vd3d3LmNuYmMuY29tLzIwMjAvMDcvMDMvaGVyZXMtYS1saXN0LW9mLXN0cm9uZy1idXktcmF0ZWQtc3RvY2tzLXdpdGgtYWJvdmUtYXZlcmFnZS15aWVsZHMtZm9yLXRoZS1zZWNvbmQtaGFsZi5odG1s0gEA",
      "link": "https://www.cnbc.com/2020/07/03/heres-a-list-of-strong-buy-rated-stocks-with-above-average-yields-for-the-second-half.html",
      "links": [
        {
          "href": "https://www.cnbc.com/2020/07/03/heres-a-list-of-strong-buy-rated-stocks-with-above-average-yields-for-the-second-half.html",
          "rel": "alternate",
          "type": "text/html"
        }
      ],
      "published": "Fri, 03 Jul 2020 12:24:00 GMT",
      "published_parsed": [
        2020,
        7,
        3,
        12,
        24,
        0,
        4,
        185,
        0
      ],
      "source": {
        "href": "https://www.cnbc.com",
        "title": "CNBC"
      },
      "sub_articles": [],
      "summary": "<a href=\"https://www.cnbc.com/2020/07/03/heres-a-list-of-strong-buy-rated-stocks-with-above-average-yields-for-the-second-half.html\" target=\"_blank\">Here's a list of strong-buy rated stocks with above-average yields for the second half</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">CNBC</font>",
      "summary_detail": {
        "base": "",
        "language": null,
        "type": "text/html",
        "value": "<a href=\"https://www.cnbc.com/2020/07/03/heres-a-list-of-strong-buy-rated-stocks-with-above-average-yields-for-the-second-half.html\" target=\"_blank\">Here's a list of strong-buy rated stocks with above-average yields for the second half</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">CNBC</font>"
      },
      "title": "Here's a list of strong-buy rated stocks with above-average yields for the second half - CNBC",
      "title_detail": {
        "base": "",
        "language": null,
        "type": "text/plain",
        "value": "Here's a list of strong-buy rated stocks with above-average yields for the second half - CNBC"
      }
    },
    {
      "guidislink": false,
      "id": "CBMiZ2h0dHBzOi8vd3d3LmZvb2wuY28udWsvaW52ZXN0aW5nLzIwMjAvMDcvMDIvMy10b3Atc3RvY2tzLWktdGhpbmstbWlsbGVubmlhbC1pbnZlc3RvcnMtc2hvdWxkLWJlLWJ1eWluZy_SAQA",
      "link": "https://www.fool.co.uk/investing/2020/07/02/3-top-stocks-i-think-millennial-investors-should-be-buying/",
      "links": [
        {
          "href": "https://www.fool.co.uk/investing/2020/07/02/3-top-stocks-i-think-millennial-investors-should-be-buying/",
          "rel": "alternate",
          "type": "text/html"
        }
      ],
      "published": "Thu, 02 Jul 2020 08:49:16 GMT",
      "published_parsed": [
        2020,
        7,
        2,
        8,
        49,
        16,
        3,
        184,
        0
      ],
      "source": {
        "href": "https://www.fool.co.uk",
        "title": "Motley Fool UK"
      },
      "sub_articles": [],
      "summary": "<a href=\"https://www.fool.co.uk/investing/2020/07/02/3-top-stocks-i-think-millennial-investors-should-be-buying/\" target=\"_blank\">Millennial investors: 3 stocks I think they should be buying</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">Motley Fool UK</font>",
      "summary_detail": {
        "base": "",
        "language": null,
        "type": "text/html",
        "value": "<a href=\"https://www.fool.co.uk/investing/2020/07/02/3-top-stocks-i-think-millennial-investors-should-be-buying/\" target=\"_blank\">Millennial investors: 3 stocks I think they should be buying</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">Motley Fool UK</font>"
      },
      "title": "Millennial investors: 3 stocks I think they should be buying - Motley Fool UK",
      "title_detail": {
        "base": "",
        "language": null,
        "type": "text/plain",
        "value": "Millennial investors: 3 stocks I think they should be buying - Motley Fool UK"
      }
    },
    {
      "guidislink": false,
      "id": "CAIiEC1KhjtHMapWmQ3rC_QckawqFQgEKg0IACoGCAowrqkBMKBFMLKAAg",
      "link": "https://www.forbes.com/sites/qai/2020/06/30/top-stocks-to-buy-as-dow-looks-to-end-month-in-positive-territory/",
      "links": [
        {
          "href": "https://www.forbes.com/sites/qai/2020/06/30/top-stocks-to-buy-as-dow-looks-to-end-month-in-positive-territory/",
          "rel": "alternate",
          "type": "text/html"
        }
      ],
      "published": "Tue, 30 Jun 2020 16:39:11 GMT",
      "published_parsed": [
        2020,
        6,
        30,
        16,
        39,
        11,
        1,
        182,
        0
      ],
      "source": {
        "href": "https://www.forbes.com",
        "title": "Forbes"
      },
      "sub_articles": [],
      "summary": "<a href=\"https://www.forbes.com/sites/qai/2020/06/30/top-stocks-to-buy-as-dow-looks-to-end-month-in-positive-territory/\" target=\"_blank\">Top Stocks To Buy As Dow Looks To End Month In Positive Territory</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">Forbes</font>",
      "summary_detail": {
        "base": "",
        "language": null,
        "type": "text/html",
        "value": "<a href=\"https://www.forbes.com/sites/qai/2020/06/30/top-stocks-to-buy-as-dow-looks-to-end-month-in-positive-territory/\" target=\"_blank\">Top Stocks To Buy As Dow Looks To End Month In Positive Territory</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">Forbes</font>"
      },
      "title": "Top Stocks To Buy As Dow Looks To End Month In Positive Territory - Forbes",
      "title_detail": {
        "base": "",
        "language": null,
        "type": "text/plain",
        "value": "Top Stocks To Buy As Dow Looks To End Month In Positive Territory - Forbes"
      }
    },
    {
      "guidislink": false,
      "id": "CBMiX2h0dHBzOi8vZm9ydHVuZS5jb20vMjAyMC8wNy8wMi9zdG9jay1tYXJrZXQtYmVzdC1xdWFydGVyLXRydW1wLXVzLWVjb25vbXktYmFkLW5ld3MtY29yb25hdmlydXMv0gFjaHR0cHM6Ly9mb3J0dW5lLmNvbS8yMDIwLzA3LzAyL3N0b2NrLW1hcmtldC1iZXN0LXF1YXJ0ZXItdHJ1bXAtdXMtZWNvbm9teS1iYWQtbmV3cy1jb3JvbmF2aXJ1cy9hbXAv",
      "link": "https://fortune.com/2020/07/02/stock-market-best-quarter-trump-us-economy-bad-news-coronavirus/",
      "links": [
        {
          "href": "https://fortune.com/2020/07/02/stock-market-best-quarter-trump-us-economy-bad-news-coronavirus/",
          "rel": "alternate",
          "type": "text/html"
        }
      ],
      "published": "Thu, 02 Jul 2020 17:27:24 GMT",
      "published_parsed": [
        2020,
        7,
        2,
        17,
        27,
        24,
        3,
        184,
        0
      ],
      "source": {
        "href": "https://fortune.com",
        "title": "Fortune"
      },
      "sub_articles": [],
      "summary": "<a href=\"https://fortune.com/2020/07/02/stock-market-best-quarter-trump-us-economy-bad-news-coronavirus/\" target=\"_blank\">Stocks had their best quarter in decades. Here’s why that’s bad news for President Trump</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">Fortune</font>",
      "summary_detail": {
        "base": "",
        "language": null,
        "type": "text/html",
        "value": "<a href=\"https://fortune.com/2020/07/02/stock-market-best-quarter-trump-us-economy-bad-news-coronavirus/\" target=\"_blank\">Stocks had their best quarter in decades. Here’s why that’s bad news for President Trump</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">Fortune</font>"
      },
      "title": "Stocks had their best quarter in decades. Here’s why that’s bad news for President Trump - Fortune",
      "title_detail": {
        "base": "",
        "language": null,
        "type": "text/plain",
        "value": "Stocks had their best quarter in decades. Here’s why that’s bad news for President Trump - Fortune"
      }
    },
    {
      "guidislink": false,
      "id": "CAIiEGN2ge3NwZgYbNshbUQPlCcqGQgEKhAIACoHCAow2Nb3CjDivdcCMJ_d7gU",
      "link": "https://www.cnbc.com/2020/07/02/stocks-making-the-biggest-moves-in-the-premarket-mcdonalds-tesla-jetblue-facebook-more.html",
      "links": [
        {
          "href": "https://www.cnbc.com/2020/07/02/stocks-making-the-biggest-moves-in-the-premarket-mcdonalds-tesla-jetblue-facebook-more.html",
          "rel": "alternate",
          "type": "text/html"
        }
      ],
      "published": "Thu, 02 Jul 2020 13:13:27 GMT",
      "published_parsed": [
        2020,
        7,
        2,
        13,
        13,
        27,
        3,
        184,
        0
      ],
      "source": {
        "href": "https://www.cnbc.com",
        "title": "CNBC"
      },
      "sub_articles": [],
      "summary": "<a href=\"https://www.cnbc.com/2020/07/02/stocks-making-the-biggest-moves-in-the-premarket-mcdonalds-tesla-jetblue-facebook-more.html\" target=\"_blank\">Stocks making the biggest moves in the premarket: McDonald's, Tesla, JetBlue, Facebook & more</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">CNBC</font>",
      "summary_detail": {
        "base": "",
        "language": null,
        "type": "text/html",
        "value": "<a href=\"https://www.cnbc.com/2020/07/02/stocks-making-the-biggest-moves-in-the-premarket-mcdonalds-tesla-jetblue-facebook-more.html\" target=\"_blank\">Stocks making the biggest moves in the premarket: McDonald's, Tesla, JetBlue, Facebook & more</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">CNBC</font>"
      },
      "title": "Stocks making the biggest moves in the premarket: McDonald's, Tesla, JetBlue, Facebook & more - CNBC",
      "title_detail": {
        "base": "",
        "language": null,
        "type": "text/plain",
        "value": "Stocks making the biggest moves in the premarket: McDonald's, Tesla, JetBlue, Facebook & more - CNBC"
      }
    },
    {
      "guidislink": false,
      "id": "CBMiiAFodHRwczovL2Vjb25vbWljdGltZXMuaW5kaWF0aW1lcy5jb20vbWFya2V0cy9zdG9ja3MvbmV3cy9tYXJrZXQtdHJlbmRzLXRvcC1zdG9jay1pZGVhcy1pbi02LWNoYXJ0cy90aGUtYmlnLXJld2luZC9zbGlkZXNob3cvNzY3ODMwMTguY21z0gEA",
      "link": "https://economictimes.indiatimes.com/markets/stocks/news/market-trends-top-stock-ideas-in-6-charts/the-big-rewind/slideshow/76783018.cms",
      "links": [
        {
          "href": "https://economictimes.indiatimes.com/markets/stocks/news/market-trends-top-stock-ideas-in-6-charts/the-big-rewind/slideshow/76783018.cms",
          "rel": "alternate",
          "type": "text/html"
        }
      ],
      "published": "Sat, 04 Jul 2020 08:24:00 GMT",
      "published_parsed": [
        2020,
        7,
        4,
        8,
        24,
        0,
        5,
        186,
        0
      ],
      "source": {
        "href": "https://economictimes.indiatimes.com",
        "title": "Economic Times"
      },
      "sub_articles": [],
      "summary": "<a href=\"https://economictimes.indiatimes.com/markets/stocks/news/market-trends-top-stock-ideas-in-6-charts/the-big-rewind/slideshow/76783018.cms\" target=\"_blank\">Market trends and top stock ideas in 6 charts - The Big Rewind</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">Economic Times</font>",
      "summary_detail": {
        "base": "",
        "language": null,
        "type": "text/html",
        "value": "<a href=\"https://economictimes.indiatimes.com/markets/stocks/news/market-trends-top-stock-ideas-in-6-charts/the-big-rewind/slideshow/76783018.cms\" target=\"_blank\">Market trends and top stock ideas in 6 charts - The Big Rewind</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">Economic Times</font>"
      },
      "title": "Market trends and top stock ideas in 6 charts - The Big Rewind - Economic Times",
      "title_detail": {
        "base": "",
        "language": null,
        "type": "text/plain",
        "value": "Market trends and top stock ideas in 6 charts - The Big Rewind - Economic Times"
      }
    },
    {
      "guidislink": false,
      "id": "CAIiEIs5-KDz_u3EHzPaXTzMo14qGAgEKg8IACoHCAowjujJATDXzBUwiJS0AQ",
      "link": "https://www.marketwatch.com/story/no-us-stock-funds-is-this-25-year-old-investor-crazy-or-on-to-something-2020-07-02",
      "links": [
        {
          "href": "https://www.marketwatch.com/story/no-us-stock-funds-is-this-25-year-old-investor-crazy-or-on-to-something-2020-07-02",
          "rel": "alternate",
          "type": "text/html"
        }
      ],
      "published": "Thu, 02 Jul 2020 14:03:43 GMT",
      "published_parsed": [
        2020,
        7,
        2,
        14,
        3,
        43,
        3,
        184,
        0
      ],
      "source": {
        "href": "https://www.marketwatch.com",
        "title": "MarketWatch"
      },
      "sub_articles": [],
      "summary": "<a href=\"https://www.marketwatch.com/story/no-us-stock-funds-is-this-25-year-old-investor-crazy-or-on-to-something-2020-07-02\" target=\"_blank\">No U.S. stock funds? Is this 25-year old investor crazy — or on to something?</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">MarketWatch</font>",
      "summary_detail": {
        "base": "",
        "language": null,
        "type": "text/html",
        "value": "<a href=\"https://www.marketwatch.com/story/no-us-stock-funds-is-this-25-year-old-investor-crazy-or-on-to-something-2020-07-02\" target=\"_blank\">No U.S. stock funds? Is this 25-year old investor crazy — or on to something?</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">MarketWatch</font>"
      },
      "title": "No U.S. stock funds? Is this 25-year old investor crazy — or on to something? - MarketWatch",
      "title_detail": {
        "base": "",
        "language": null,
        "type": "text/plain",
        "value": "No U.S. stock funds? Is this 25-year old investor crazy — or on to something? - MarketWatch"
      }
    },
    {
      "guidislink": false,
      "id": "CAIiEEEQmW9cB0OUXwt4aokEniwqGQgEKhAIACoHCAow2pqGCzD954MDMJzyigY",
      "link": "https://economictimes.indiatimes.com/markets/stocks/news/lic-equity-investment-soars-23-in-q1-these-stocks-delivered-up-to-17x-return/articleshow/76765536.cms",
      "links": [
        {
          "href": "https://economictimes.indiatimes.com/markets/stocks/news/lic-equity-investment-soars-23-in-q1-these-stocks-delivered-up-to-17x-return/articleshow/76765536.cms",
          "rel": "alternate",
          "type": "text/html"
        }
      ],
      "published": "Fri, 03 Jul 2020 09:37:00 GMT",
      "published_parsed": [
        2020,
        7,
        3,
        9,
        37,
        0,
        4,
        185,
        0
      ],
      "source": {
        "href": "https://economictimes.indiatimes.com",
        "title": "Economic Times"
      },
      "sub_articles": [],
      "summary": "<a href=\"https://economictimes.indiatimes.com/markets/stocks/news/lic-equity-investment-soars-23-in-q1-these-stocks-delivered-up-to-17x-return/articleshow/76765536.cms\" target=\"_blank\">LIC equity investment soars 23% in Q1; these stocks delivered up to 17x return</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">Economic Times</font>",
      "summary_detail": {
        "base": "",
        "language": null,
        "type": "text/html",
        "value": "<a href=\"https://economictimes.indiatimes.com/markets/stocks/news/lic-equity-investment-soars-23-in-q1-these-stocks-delivered-up-to-17x-return/articleshow/76765536.cms\" target=\"_blank\">LIC equity investment soars 23% in Q1; these stocks delivered up to 17x return</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">Economic Times</font>"
      },
      "title": "LIC equity investment soars 23% in Q1; these stocks delivered up to 17x return - Economic Times",
      "title_detail": {
        "base": "",
        "language": null,
        "type": "text/plain",
        "value": "LIC equity investment soars 23% in Q1; these stocks delivered up to 17x return - Economic Times"
      }
    },
    {
      "guidislink": false,
      "id": "CBMiYGh0dHBzOi8vd3d3LmZvb2wuY29tL2ludmVzdGluZy8yMDIwLzA3LzA0Lzgtc3RvY2stbWFya2V0LXByZWRpY3Rpb25zLWZvci10aGUtc2Vjb25kLWhhbGYtb2YuYXNweNIBZGh0dHBzOi8vd3d3LmZvb2wuY29tL2FtcC9pbnZlc3RpbmcvMjAyMC8wNy8wNC84LXN0b2NrLW1hcmtldC1wcmVkaWN0aW9ucy1mb3ItdGhlLXNlY29uZC1oYWxmLW9mLmFzcHg",
      "link": "https://www.fool.com/investing/2020/07/04/8-stock-market-predictions-for-the-second-half-of.aspx",
      "links": [
        {
          "href": "https://www.fool.com/investing/2020/07/04/8-stock-market-predictions-for-the-second-half-of.aspx",
          "rel": "alternate",
          "type": "text/html"
        }
      ],
      "published": "Sat, 04 Jul 2020 12:15:00 GMT",
      "published_parsed": [
        2020,
        7,
        4,
        12,
        15,
        0,
        5,
        186,
        0
      ],
      "source": {
        "href": "https://www.fool.com",
        "title": "Motley Fool"
      },
      "sub_articles": [],
      "summary": "<a href=\"https://www.fool.com/investing/2020/07/04/8-stock-market-predictions-for-the-second-half-of.aspx\" target=\"_blank\">8 Stock Market Predictions for the Second Half of the Year</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">Motley Fool</font>",
      "summary_detail": {
        "base": "",
        "language": null,
        "type": "text/html",
        "value": "<a href=\"https://www.fool.com/investing/2020/07/04/8-stock-market-predictions-for-the-second-half-of.aspx\" target=\"_blank\">8 Stock Market Predictions for the Second Half of the Year</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">Motley Fool</font>"
      },
      "title": "8 Stock Market Predictions for the Second Half of the Year - Motley Fool",
      "title_detail": {
        "base": "",
        "language": null,
        "type": "text/plain",
        "value": "8 Stock Market Predictions for the Second Half of the Year - Motley Fool"
      }
    },
    {
      "guidislink": false,
      "id": "CBMif2h0dHBzOi8vd3d3LnJldXRlcnMuY29tL2FydGljbGUvdXMtZXVyb3BlLXN0b2Nrcy9ldXJvcGVhbi1zdG9ja3Mtc2xpZGUtYXMtc3VyZ2UtaW4tdmlydXMtY2FzZXMtaGl0cy1yZWJvdW5kLWhvcGVzLWlkVVNLQk4yNDQwUkHSATRodHRwczovL21vYmlsZS5yZXV0ZXJzLmNvbS9hcnRpY2xlL2FtcC9pZFVTS0JOMjQ0MFJB",
      "link": "https://www.reuters.com/article/us-europe-stocks/european-stocks-slide-as-surge-in-virus-cases-hits-rebound-hopes-idUSKBN2440RA",
      "links": [
        {
          "href": "https://www.reuters.com/article/us-europe-stocks/european-stocks-slide-as-surge-in-virus-cases-hits-rebound-hopes-idUSKBN2440RA",
          "rel": "alternate",
          "type": "text/html"
        }
      ],
      "published": "Fri, 03 Jul 2020 07:38:00 GMT",
      "published_parsed": [
        2020,
        7,
        3,
        7,
        38,
        0,
        4,
        185,
        0
      ],
      "source": {
        "href": "https://www.reuters.com",
        "title": "Reuters"
      },
      "sub_articles": [],
      "summary": "<a href=\"https://www.reuters.com/article/us-europe-stocks/european-stocks-slide-as-surge-in-virus-cases-hits-rebound-hopes-idUSKBN2440RA\" target=\"_blank\">European stocks slide as surge in virus cases hits rebound hopes</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">Reuters</font>",
      "summary_detail": {
        "base": "",
        "language": null,
        "type": "text/html",
        "value": "<a href=\"https://www.reuters.com/article/us-europe-stocks/european-stocks-slide-as-surge-in-virus-cases-hits-rebound-hopes-idUSKBN2440RA\" target=\"_blank\">European stocks slide as surge in virus cases hits rebound hopes</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">Reuters</font>"
      },
      "title": "European stocks slide as surge in virus cases hits rebound hopes - Reuters",
      "title_detail": {
        "base": "",
        "language": null,
        "type": "text/plain",
        "value": "European stocks slide as surge in virus cases hits rebound hopes - Reuters"
      }
    },
    {
      "guidislink": false,
      "id": "CAIiECPcsgxEx91Lj6JrYWu3J-oqGQgEKhAIACoHCAowocv1CjCSptoCMPrTpgU",
      "link": "https://www.cnn.com/2020/07/01/investing/premarket-stocks-trading/index.html",
      "links": [
        {
          "href": "https://www.cnn.com/2020/07/01/investing/premarket-stocks-trading/index.html",
          "rel": "alternate",
          "type": "text/html"
        }
      ],
      "published": "Wed, 01 Jul 2020 12:04:05 GMT",
      "published_parsed": [
        2020,
        7,
        1,
        12,
        4,
        5,
        2,
        183,
        0
      ],
      "source": {
        "href": "https://www.cnn.com",
        "title": "CNN"
      },
      "sub_articles": [],
      "summary": "<a href=\"https://www.cnn.com/2020/07/01/investing/premarket-stocks-trading/index.html\" target=\"_blank\">What stock markets need after their banner quarter</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">CNN</font>",
      "summary_detail": {
        "base": "",
        "language": null,
        "type": "text/html",
        "value": "<a href=\"https://www.cnn.com/2020/07/01/investing/premarket-stocks-trading/index.html\" target=\"_blank\">What stock markets need after their banner quarter</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">CNN</font>"
      },
      "title": "What stock markets need after their banner quarter - CNN",
      "title_detail": {
        "base": "",
        "language": null,
        "type": "text/plain",
        "value": "What stock markets need after their banner quarter - CNN"
      }
    },
    {
      "guidislink": false,
      "id": "CAIiEEyPRKOvARcJeL3cl0OOt94qFwgEKg8IACoHCAowjuuKAzCWrzwwlqlf",
      "link": "https://www.nytimes.com/2020/07/01/business/stock-market-today-coronavirus.html",
      "links": [
        {
          "href": "https://www.nytimes.com/2020/07/01/business/stock-market-today-coronavirus.html",
          "rel": "alternate",
          "type": "text/html"
        }
      ],
      "published": "Thu, 02 Jul 2020 11:51:10 GMT",
      "published_parsed": [
        2020,
        7,
        2,
        11,
        51,
        10,
        3,
        184,
        0
      ],
      "source": {
        "href": "https://www.nytimes.com",
        "title": "The New York Times"
      },
      "sub_articles": [],
      "summary": "<a href=\"https://www.nytimes.com/2020/07/01/business/stock-market-today-coronavirus.html\" target=\"_blank\">Stock Markets Edge Higher: Business Updates</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">The New York Times</font>",
      "summary_detail": {
        "base": "",
        "language": null,
        "type": "text/html",
        "value": "<a href=\"https://www.nytimes.com/2020/07/01/business/stock-market-today-coronavirus.html\" target=\"_blank\">Stock Markets Edge Higher: Business Updates</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">The New York Times</font>"
      },
      "title": "Stock Markets Edge Higher: Business Updates - The New York Times",
      "title_detail": {
        "base": "",
        "language": null,
        "type": "text/plain",
        "value": "Stock Markets Edge Higher: Business Updates - The New York Times"
      }
    },
    {
      "guidislink": false,
      "id": "CAIiEJgAc9xtLybMy7BHyWn5N98qEwgEKgwIACoFCAowgHkwoBEwwjU",
      "link": "https://www.fool.com/investing/2020/07/03/3-gold-stocks-to-buy-in-july.aspx",
      "links": [
        {
          "href": "https://www.fool.com/investing/2020/07/03/3-gold-stocks-to-buy-in-july.aspx",
          "rel": "alternate",
          "type": "text/html"
        }
      ],
      "published": "Sat, 04 Jul 2020 02:48:02 GMT",
      "published_parsed": [
        2020,
        7,
        4,
        2,
        48,
        2,
        5,
        186,
        0
      ],
      "source": {
        "href": "https://www.fool.com",
        "title": "The Motley Fool"
      },
      "sub_articles": [],
      "summary": "<a href=\"https://www.fool.com/investing/2020/07/03/3-gold-stocks-to-buy-in-july.aspx\" target=\"_blank\">3 Gold Stocks to Buy in July</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">The Motley Fool</font>",
      "summary_detail": {
        "base": "",
        "language": null,
        "type": "text/html",
        "value": "<a href=\"https://www.fool.com/investing/2020/07/03/3-gold-stocks-to-buy-in-july.aspx\" target=\"_blank\">3 Gold Stocks to Buy in July</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">The Motley Fool</font>"
      },
      "title": "3 Gold Stocks to Buy in July - The Motley Fool",
      "title_detail": {
        "base": "",
        "language": null,
        "type": "text/plain",
        "value": "3 Gold Stocks to Buy in July - The Motley Fool"
      }
    },
    {
      "guidislink": false,
      "id": "CBMiZ2h0dHBzOi8vd3d3Lm1hcmtldHdhdGNoLmNvbS9zdG9yeS9zdG9ja3Mtb3Blbi1tb2RlcmF0ZWx5LWhpZ2hlci1hZnRlci1wcm9taXNpbmctdmFjY2luZS1uZXdzLTIwMjAtMDctMDHSAWtodHRwczovL3d3dy5tYXJrZXR3YXRjaC5jb20vYW1wL3N0b3J5L3N0b2Nrcy1vcGVuLW1vZGVyYXRlbHktaGlnaGVyLWFmdGVyLXByb21pc2luZy12YWNjaW5lLW5ld3MtMjAyMC0wNy0wMQ",
      "link": "https://www.marketwatch.com/story/stocks-open-moderately-higher-after-promising-vaccine-news-2020-07-01",
      "links": [
        {
          "href": "https://www.marketwatch.com/story/stocks-open-moderately-higher-after-promising-vaccine-news-2020-07-01",
          "rel": "alternate",
          "type": "text/html"
        }
      ],
      "published": "Wed, 01 Jul 2020 13:36:00 GMT",
      "published_parsed": [
        2020,
        7,
        1,
        13,
        36,
        0,
        2,
        183,
        0
      ],
      "source": {
        "href": "https://www.marketwatch.com",
        "title": "MarketWatch"
      },
      "sub_articles": [],
      "summary": "<a href=\"https://www.marketwatch.com/story/stocks-open-moderately-higher-after-promising-vaccine-news-2020-07-01\" target=\"_blank\">Stocks open moderately higher after promising vaccine news</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">MarketWatch</font>",
      "summary_detail": {
        "base": "",
        "language": null,
        "type": "text/html",
        "value": "<a href=\"https://www.marketwatch.com/story/stocks-open-moderately-higher-after-promising-vaccine-news-2020-07-01\" target=\"_blank\">Stocks open moderately higher after promising vaccine news</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">MarketWatch</font>"
      },
      "title": "Stocks open moderately higher after promising vaccine news - MarketWatch",
      "title_detail": {
        "base": "",
        "language": null,
        "type": "text/plain",
        "value": "Stocks open moderately higher after promising vaccine news - MarketWatch"
      }
    },
    {
      "guidislink": false,
      "id": "CAIiEEdKepIEIa66-rNkzlRMkbEqFwgEKg8IACoHCAowjuuKAzCWrzwwt4QY",
      "link": "https://www.nytimes.com/2020/06/30/business/stock-market-earnings-coronavirus.html",
      "links": [
        {
          "href": "https://www.nytimes.com/2020/06/30/business/stock-market-earnings-coronavirus.html",
          "rel": "alternate",
          "type": "text/html"
        }
      ],
      "published": "Tue, 30 Jun 2020 23:27:04 GMT",
      "published_parsed": [
        2020,
        6,
        30,
        23,
        27,
        4,
        1,
        182,
        0
      ],
      "source": {
        "href": "https://www.nytimes.com",
        "title": "The New York Times"
      },
      "sub_articles": [],
      "summary": "<a href=\"https://www.nytimes.com/2020/06/30/business/stock-market-earnings-coronavirus.html\" target=\"_blank\">After a Staggering Rally, What’s Next for Stocks?</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">The New York Times</font>",
      "summary_detail": {
        "base": "",
        "language": null,
        "type": "text/html",
        "value": "<a href=\"https://www.nytimes.com/2020/06/30/business/stock-market-earnings-coronavirus.html\" target=\"_blank\">After a Staggering Rally, What’s Next for Stocks?</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">The New York Times</font>"
      },
      "title": "After a Staggering Rally, What’s Next for Stocks? - The New York Times",
      "title_detail": {
        "base": "",
        "language": null,
        "type": "text/plain",
        "value": "After a Staggering Rally, What’s Next for Stocks? - The New York Times"
      }
    },
    {
      "guidislink": false,
      "id": "CBMicGh0dHBzOi8vd3d3LnRlbGVncmFwaC5jby51ay9pbnZlc3Rpbmcvc2hhcmVzL2RpYXJ5LXByaXZhdGUtaW52ZXN0b3Itd2lubmluZy1zdG9ja3Mtd29udC1idXlpbmctY3VycmVudC1pbmZsYXRlZC_SAXRodHRwczovL3d3dy50ZWxlZ3JhcGguY28udWsvaW52ZXN0aW5nL3NoYXJlcy9kaWFyeS1wcml2YXRlLWludmVzdG9yLXdpbm5pbmctc3RvY2tzLXdvbnQtYnV5aW5nLWN1cnJlbnQtaW5mbGF0ZWQvYW1wLw",
      "link": "https://www.telegraph.co.uk/investing/shares/diary-private-investor-winning-stocks-wont-buying-current-inflated/",
      "links": [
        {
          "href": "https://www.telegraph.co.uk/investing/shares/diary-private-investor-winning-stocks-wont-buying-current-inflated/",
          "rel": "alternate",
          "type": "text/html"
        }
      ],
      "published": "Fri, 03 Jul 2020 04:00:00 GMT",
      "published_parsed": [
        2020,
        7,
        3,
        4,
        0,
        0,
        4,
        185,
        0
      ],
      "source": {
        "href": "https://www.telegraph.co.uk",
        "title": "Telegraph.co.uk"
      },
      "sub_articles": [],
      "summary": "<a href=\"https://www.telegraph.co.uk/investing/shares/diary-private-investor-winning-stocks-wont-buying-current-inflated/\" target=\"_blank\">Diary of a private investor: The ‘winning’ stocks I won’t be buying at their current inflated valuations</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">Telegraph.co.uk</font>",
      "summary_detail": {
        "base": "",
        "language": null,
        "type": "text/html",
        "value": "<a href=\"https://www.telegraph.co.uk/investing/shares/diary-private-investor-winning-stocks-wont-buying-current-inflated/\" target=\"_blank\">Diary of a private investor: The ‘winning’ stocks I won’t be buying at their current inflated valuations</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">Telegraph.co.uk</font>"
      },
      "title": "Diary of a private investor: The ‘winning’ stocks I won’t be buying at their current inflated valuations - Telegraph.co.uk",
      "title_detail": {
        "base": "",
        "language": null,
        "type": "text/plain",
        "value": "Diary of a private investor: The ‘winning’ stocks I won’t be buying at their current inflated valuations - Telegraph.co.uk"
      }
    },
    {
      "guidislink": false,
      "id": "CBMiTGh0dHBzOi8vc3RvY2tuZXdzLmNvbS9uZXdzL3RzbS1hc21sLWF2Z28tMy1zZW1pY29uZHVjdG9yLXN0b2Nrcy1zZXQtdG8tcmlzZS_SAQA",
      "link": "https://stocknews.com/news/tsm-asml-avgo-3-semiconductor-stocks-set-to-rise/",
      "links": [
        {
          "href": "https://stocknews.com/news/tsm-asml-avgo-3-semiconductor-stocks-set-to-rise/",
          "rel": "alternate",
          "type": "text/html"
        }
      ],
      "published": "Fri, 03 Jul 2020 20:15:57 GMT",
      "published_parsed": [
        2020,
        7,
        3,
        20,
        15,
        57,
        4,
        185,
        0
      ],
      "source": {
        "href": "https://stocknews.com",
        "title": "StockNews.com"
      },
      "sub_articles": [],
      "summary": "<a href=\"https://stocknews.com/news/tsm-asml-avgo-3-semiconductor-stocks-set-to-rise/\" target=\"_blank\">TSM: 3 Semiconductor Stocks Set To Rise</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">StockNews.com</font>",
      "summary_detail": {
        "base": "",
        "language": null,
        "type": "text/html",
        "value": "<a href=\"https://stocknews.com/news/tsm-asml-avgo-3-semiconductor-stocks-set-to-rise/\" target=\"_blank\">TSM: 3 Semiconductor Stocks Set To Rise</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">StockNews.com</font>"
      },
      "title": "TSM: 3 Semiconductor Stocks Set To Rise - StockNews.com",
      "title_detail": {
        "base": "",
        "language": null,
        "type": "text/plain",
        "value": "TSM: 3 Semiconductor Stocks Set To Rise - StockNews.com"
      }
    },
    {
      "guidislink": false,
      "id": "CBMiVGh0dHBzOi8vd3d3LmZvb2wuY29tL2ludmVzdGluZy8yMDIwLzA3LzAzLzUtaGlnaC15aWVsZC1kaXZpZGVuZC1zdG9ja3MtdG8td2F0Y2guYXNweNIBWGh0dHBzOi8vd3d3LmZvb2wuY29tL2FtcC9pbnZlc3RpbmcvMjAyMC8wNy8wMy81LWhpZ2gteWllbGQtZGl2aWRlbmQtc3RvY2tzLXRvLXdhdGNoLmFzcHg",
      "link": "https://www.fool.com/investing/2020/07/03/5-high-yield-dividend-stocks-to-watch.aspx",
      "links": [
        {
          "href": "https://www.fool.com/investing/2020/07/03/5-high-yield-dividend-stocks-to-watch.aspx",
          "rel": "alternate",
          "type": "text/html"
        }
      ],
      "published": "Fri, 03 Jul 2020 11:00:00 GMT",
      "published_parsed": [
        2020,
        7,
        3,
        11,
        0,
        0,
        4,
        185,
        0
      ],
      "source": {
        "href": "https://www.fool.com",
        "title": "Motley Fool"
      },
      "sub_articles": [],
      "summary": "<a href=\"https://www.fool.com/investing/2020/07/03/5-high-yield-dividend-stocks-to-watch.aspx\" target=\"_blank\">5 High-Yield Dividend Stocks to Watch</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">Motley Fool</font>",
      "summary_detail": {
        "base": "",
        "language": null,
        "type": "text/html",
        "value": "<a href=\"https://www.fool.com/investing/2020/07/03/5-high-yield-dividend-stocks-to-watch.aspx\" target=\"_blank\">5 High-Yield Dividend Stocks to Watch</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">Motley Fool</font>"
      },
      "title": "5 High-Yield Dividend Stocks to Watch - Motley Fool",
      "title_detail": {
        "base": "",
        "language": null,
        "type": "text/plain",
        "value": "5 High-Yield Dividend Stocks to Watch - Motley Fool"
      }
    },
    {
      "guidislink": false,
      "id": "CBMiS2h0dHBzOi8vZmluYW5jZS55YWhvby5jb20vbmV3cy9pbnNlZWdvLWNvcnAtaW5zZy1oZWRnZS1mdW5kcy0wMDE0MzQxODUuaHRtbNIBU2h0dHBzOi8vZmluYW5jZS55YWhvby5jb20vYW1waHRtbC9uZXdzL2luc2VlZ28tY29ycC1pbnNnLWhlZGdlLWZ1bmRzLTAwMTQzNDE4NS5odG1s",
      "link": "https://finance.yahoo.com/news/inseego-corp-insg-hedge-funds-001434185.html",
      "links": [
        {
          "href": "https://finance.yahoo.com/news/inseego-corp-insg-hedge-funds-001434185.html",
          "rel": "alternate",
          "type": "text/html"
        }
      ],
      "published": "Sun, 05 Jul 2020 00:15:38 GMT",
      "published_parsed": [
        2020,
        7,
        5,
        0,
        15,
        38,
        6,
        187,
        0
      ],
      "source": {
        "href": "https://finance.yahoo.com",
        "title": "Yahoo Finance"
      },
      "sub_articles": [],
      "summary": "<a href=\"https://finance.yahoo.com/news/inseego-corp-insg-hedge-funds-001434185.html\" target=\"_blank\">Inseego Corp. (INSG): Are Hedge Funds Right About This Stock?</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">Yahoo Finance</font>",
      "summary_detail": {
        "base": "",
        "language": null,
        "type": "text/html",
        "value": "<a href=\"https://finance.yahoo.com/news/inseego-corp-insg-hedge-funds-001434185.html\" target=\"_blank\">Inseego Corp. (INSG): Are Hedge Funds Right About This Stock?</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">Yahoo Finance</font>"
      },
      "title": "Inseego Corp. (INSG): Are Hedge Funds Right About This Stock? - Yahoo Finance",
      "title_detail": {
        "base": "",
        "language": null,
        "type": "text/plain",
        "value": "Inseego Corp. (INSG): Are Hedge Funds Right About This Stock? - Yahoo Finance"
      }
    },
    {
      "guidislink": false,
      "id": "CAIiEGeNjo2qZfFkQRHRAk2Di9wqGQgEKhAIACoHCAow2Nb3CjDivdcCMM_rngY",
      "link": "https://www.cnbc.com/2020/07/01/stocks-making-the-biggest-moves-after-hours-inovio-cbl-coty-and-more.html",
      "links": [
        {
          "href": "https://www.cnbc.com/2020/07/01/stocks-making-the-biggest-moves-after-hours-inovio-cbl-coty-and-more.html",
          "rel": "alternate",
          "type": "text/html"
        }
      ],
      "published": "Wed, 01 Jul 2020 22:10:25 GMT",
      "published_parsed": [
        2020,
        7,
        1,
        22,
        10,
        25,
        2,
        183,
        0
      ],
      "source": {
        "href": "https://www.cnbc.com",
        "title": "CNBC"
      },
      "sub_articles": [],
      "summary": "<a href=\"https://www.cnbc.com/2020/07/01/stocks-making-the-biggest-moves-after-hours-inovio-cbl-coty-and-more.html\" target=\"_blank\">Stocks making the biggest moves after hours: Inovio, CBL, Coty and more</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">CNBC</font>",
      "summary_detail": {
        "base": "",
        "language": null,
        "type": "text/html",
        "value": "<a href=\"https://www.cnbc.com/2020/07/01/stocks-making-the-biggest-moves-after-hours-inovio-cbl-coty-and-more.html\" target=\"_blank\">Stocks making the biggest moves after hours: Inovio, CBL, Coty and more</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">CNBC</font>"
      },
      "title": "Stocks making the biggest moves after hours: Inovio, CBL, Coty and more - CNBC",
      "title_detail": {
        "base": "",
        "language": null,
        "type": "text/plain",
        "value": "Stocks making the biggest moves after hours: Inovio, CBL, Coty and more - CNBC"
      }
    },
    {
      "guidislink": false,
      "id": "CAIiEJR2zM2f6txEJ0QiE_ZDGREqGQgEKhAIACoHCAow2Nb3CjDivdcCMJ_5ngY",
      "link": "https://www.cnbc.com/2020/07/02/cramer-deciphers-the-speculative-and-blue-chip-stocks-driving-the-market.html",
      "links": [
        {
          "href": "https://www.cnbc.com/2020/07/02/cramer-deciphers-the-speculative-and-blue-chip-stocks-driving-the-market.html",
          "rel": "alternate",
          "type": "text/html"
        }
      ],
      "published": "Thu, 02 Jul 2020 00:46:54 GMT",
      "published_parsed": [
        2020,
        7,
        2,
        0,
        46,
        54,
        3,
        184,
        0
      ],
      "source": {
        "href": "https://www.cnbc.com",
        "title": "CNBC"
      },
      "sub_articles": [],
      "summary": "<a href=\"https://www.cnbc.com/2020/07/02/cramer-deciphers-the-speculative-and-blue-chip-stocks-driving-the-market.html\" target=\"_blank\">Jim Cramer deciphers the speculative and blue-chip stocks driving the market</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">CNBC</font>",
      "summary_detail": {
        "base": "",
        "language": null,
        "type": "text/html",
        "value": "<a href=\"https://www.cnbc.com/2020/07/02/cramer-deciphers-the-speculative-and-blue-chip-stocks-driving-the-market.html\" target=\"_blank\">Jim Cramer deciphers the speculative and blue-chip stocks driving the market</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">CNBC</font>"
      },
      "title": "Jim Cramer deciphers the speculative and blue-chip stocks driving the market - CNBC",
      "title_detail": {
        "base": "",
        "language": null,
        "type": "text/plain",
        "value": "Jim Cramer deciphers the speculative and blue-chip stocks driving the market - CNBC"
      }
    },
    {
      "guidislink": false,
      "id": "CBMiT2h0dHBzOi8vd3d3LmZvb2wuY28udWsvaW52ZXN0aW5nLzIwMjAvMDcvMDEvdG9wLWJyaXRpc2gtc3RvY2tzLWZvci1qdW5lLTIwMjAtMi_SAQA",
      "link": "https://www.fool.co.uk/investing/2020/07/01/top-british-stocks-for-june-2020-2/",
      "links": [
        {
          "href": "https://www.fool.co.uk/investing/2020/07/01/top-british-stocks-for-june-2020-2/",
          "rel": "alternate",
          "type": "text/html"
        }
      ],
      "published": "Wed, 01 Jul 2020 04:24:11 GMT",
      "published_parsed": [
        2020,
        7,
        1,
        4,
        24,
        11,
        2,
        183,
        0
      ],
      "source": {
        "href": "https://www.fool.co.uk",
        "title": "Motley Fool UK"
      },
      "sub_articles": [],
      "summary": "<a href=\"https://www.fool.co.uk/investing/2020/07/01/top-british-stocks-for-june-2020-2/\" target=\"_blank\">Top British stocks for July 2020 - The Motley Fool UK</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">Motley Fool UK</font>",
      "summary_detail": {
        "base": "",
        "language": null,
        "type": "text/html",
        "value": "<a href=\"https://www.fool.co.uk/investing/2020/07/01/top-british-stocks-for-june-2020-2/\" target=\"_blank\">Top British stocks for July 2020 - The Motley Fool UK</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">Motley Fool UK</font>"
      },
      "title": "Top British stocks for July 2020 - The Motley Fool UK - Motley Fool UK",
      "title_detail": {
        "base": "",
        "language": null,
        "type": "text/plain",
        "value": "Top British stocks for July 2020 - The Motley Fool UK - Motley Fool UK"
      }
    },
    {
      "guidislink": false,
      "id": "CBMilQFodHRwczovL2Vjb25vbWljdGltZXMuaW5kaWF0aW1lcy5jb20vbWFya2V0cy9zdG9ja3MvbmV3cy90aGVzZS0xNS1zdG9ja3MtYXJlLWZsYXNoaW5nLWJ1eS1zaWduYWxzLW9uLXRlY2gtY2hhcnRzL3N0b2NrLXBpY2tpbmcvc2xpZGVzaG93Lzc2NzA4Mjg2LmNtc9IBAA",
      "link": "https://economictimes.indiatimes.com/markets/stocks/news/these-15-stocks-are-flashing-buy-signals-on-tech-charts/stock-picking/slideshow/76708286.cms",
      "links": [
        {
          "href": "https://economictimes.indiatimes.com/markets/stocks/news/these-15-stocks-are-flashing-buy-signals-on-tech-charts/stock-picking/slideshow/76708286.cms",
          "rel": "alternate",
          "type": "text/html"
        }
      ],
      "published": "Tue, 30 Jun 2020 09:23:00 GMT",
      "published_parsed": [
        2020,
        6,
        30,
        9,
        23,
        0,
        1,
        182,
        0
      ],
      "source": {
        "href": "https://economictimes.indiatimes.com",
        "title": "Economic Times"
      },
      "sub_articles": [],
      "summary": "<a href=\"https://economictimes.indiatimes.com/markets/stocks/news/these-15-stocks-are-flashing-buy-signals-on-tech-charts/stock-picking/slideshow/76708286.cms\" target=\"_blank\">These 15 stocks are flashing 'BUY' signals on tech charts - Stock Picking</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">Economic Times</font>",
      "summary_detail": {
        "base": "",
        "language": null,
        "type": "text/html",
        "value": "<a href=\"https://economictimes.indiatimes.com/markets/stocks/news/these-15-stocks-are-flashing-buy-signals-on-tech-charts/stock-picking/slideshow/76708286.cms\" target=\"_blank\">These 15 stocks are flashing 'BUY' signals on tech charts - Stock Picking</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">Economic Times</font>"
      },
      "title": "These 15 stocks are flashing 'BUY' signals on tech charts - Stock Picking - Economic Times",
      "title_detail": {
        "base": "",
        "language": null,
        "type": "text/plain",
        "value": "These 15 stocks are flashing 'BUY' signals on tech charts - Stock Picking - Economic Times"
      }
    },
    {
      "guidislink": false,
      "id": "CBMigQFodHRwczovL3d3dy5mb29sLmNvLnVrL2ludmVzdGluZy8yMDIwLzA3LzAzL3doZW4tc3RvY2stbWFya2V0cy1yZWNvdmVyLXlvdWxsLWJlLWdsYWQteW91LWJvdWdodC1kaXJ0LWNoZWFwLWZ0c2UtMTAwLXNoYXJlcy10b2RheS_SAQA",
      "link": "https://www.fool.co.uk/investing/2020/07/03/when-stock-markets-recover-youll-be-glad-you-bought-dirt-cheap-ftse-100-shares-today/",
      "links": [
        {
          "href": "https://www.fool.co.uk/investing/2020/07/03/when-stock-markets-recover-youll-be-glad-you-bought-dirt-cheap-ftse-100-shares-today/",
          "rel": "alternate",
          "type": "text/html"
        }
      ],
      "published": "Fri, 03 Jul 2020 14:30:21 GMT",
      "published_parsed": [
        2020,
        7,
        3,
        14,
        30,
        21,
        4,
        185,
        0
      ],
      "source": {
        "href": "https://www.fool.co.uk",
        "title": "Motley Fool UK"
      },
      "sub_articles": [],
      "summary": "<a href=\"https://www.fool.co.uk/investing/2020/07/03/when-stock-markets-recover-youll-be-glad-you-bought-dirt-cheap-ftse-100-shares-today/\" target=\"_blank\">When stock markets recover, you'll be glad you bought dirt-cheap FTSE 100 shares today</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">Motley Fool UK</font>",
      "summary_detail": {
        "base": "",
        "language": null,
        "type": "text/html",
        "value": "<a href=\"https://www.fool.co.uk/investing/2020/07/03/when-stock-markets-recover-youll-be-glad-you-bought-dirt-cheap-ftse-100-shares-today/\" target=\"_blank\">When stock markets recover, you'll be glad you bought dirt-cheap FTSE 100 shares today</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">Motley Fool UK</font>"
      },
      "title": "When stock markets recover, you'll be glad you bought dirt-cheap FTSE 100 shares today - Motley Fool UK",
      "title_detail": {
        "base": "",
        "language": null,
        "type": "text/plain",
        "value": "When stock markets recover, you'll be glad you bought dirt-cheap FTSE 100 shares today - Motley Fool UK"
      }
    },
    {
      "guidislink": false,
      "id": "CBMiT2h0dHBzOi8vZmluYW5jZS55YWhvby5jb20vbmV3cy9icm9va2ZpZWxkLXByb3BlcnR5LXJlaXQtaW5jLWJweXUtMDA0ODE5OTk2Lmh0bWzSAVdodHRwczovL2ZpbmFuY2UueWFob28uY29tL2FtcGh0bWwvbmV3cy9icm9va2ZpZWxkLXByb3BlcnR5LXJlaXQtaW5jLWJweXUtMDA0ODE5OTk2Lmh0bWw",
      "link": "https://finance.yahoo.com/news/brookfield-property-reit-inc-bpyu-004819996.html",
      "links": [
        {
          "href": "https://finance.yahoo.com/news/brookfield-property-reit-inc-bpyu-004819996.html",
          "rel": "alternate",
          "type": "text/html"
        }
      ],
      "published": "Sun, 05 Jul 2020 00:52:18 GMT",
      "published_parsed": [
        2020,
        7,
        5,
        0,
        52,
        18,
        6,
        187,
        0
      ],
      "source": {
        "href": "https://finance.yahoo.com",
        "title": "Yahoo Finance"
      },
      "sub_articles": [],
      "summary": "<a href=\"https://finance.yahoo.com/news/brookfield-property-reit-inc-bpyu-004819996.html\" target=\"_blank\">Brookfield Property REIT Inc. (BPYU): Are Hedge Funds Right About This Stock?</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">Yahoo Finance</font>",
      "summary_detail": {
        "base": "",
        "language": null,
        "type": "text/html",
        "value": "<a href=\"https://finance.yahoo.com/news/brookfield-property-reit-inc-bpyu-004819996.html\" target=\"_blank\">Brookfield Property REIT Inc. (BPYU): Are Hedge Funds Right About This Stock?</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">Yahoo Finance</font>"
      },
      "title": "Brookfield Property REIT Inc. (BPYU): Are Hedge Funds Right About This Stock? - Yahoo Finance",
      "title_detail": {
        "base": "",
        "language": null,
        "type": "text/plain",
        "value": "Brookfield Property REIT Inc. (BPYU): Are Hedge Funds Right About This Stock? - Yahoo Finance"
      }
    },
    {
      "guidislink": false,
      "id": "CBMiiQFodHRwczovL3d3dy5pbnZlc3RvcnNjaHJvbmljbGUuY28udWsvY29tbWVudC8yMDIwLzA2LzMwL21hcmtldC1vdXRsb29rLXN0b2Nrcy1oZWFkLWZvci1iZXN0LXF1YXJ0ZXItaW4teWVhcnMtb24tdGhlLWJlYWNoLWNpbmV3b3JsZC1tb3JlL9IBAA",
      "link": "https://www.investorschronicle.co.uk/comment/2020/06/30/market-outlook-stocks-head-for-best-quarter-in-years-on-the-beach-cineworld-more/",
      "links": [
        {
          "href": "https://www.investorschronicle.co.uk/comment/2020/06/30/market-outlook-stocks-head-for-best-quarter-in-years-on-the-beach-cineworld-more/",
          "rel": "alternate",
          "type": "text/html"
        }
      ],
      "published": "Tue, 30 Jun 2020 08:44:30 GMT",
      "published_parsed": [
        2020,
        6,
        30,
        8,
        44,
        30,
        1,
        182,
        0
      ],
      "source": {
        "href": "https://www.investorschronicle.co.uk",
        "title": "Investors Chronicle"
      },
      "sub_articles": [],
      "summary": "<a href=\"https://www.investorschronicle.co.uk/comment/2020/06/30/market-outlook-stocks-head-for-best-quarter-in-years-on-the-beach-cineworld-more/\" target=\"_blank\">Market Outlook: Stocks head for best quarter in years, On The Beach, Cineworld & more</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">Investors Chronicle</font>",
      "summary_detail": {
        "base": "",
        "language": null,
        "type": "text/html",
        "value": "<a href=\"https://www.investorschronicle.co.uk/comment/2020/06/30/market-outlook-stocks-head-for-best-quarter-in-years-on-the-beach-cineworld-more/\" target=\"_blank\">Market Outlook: Stocks head for best quarter in years, On The Beach, Cineworld & more</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">Investors Chronicle</font>"
      },
      "title": "Market Outlook: Stocks head for best quarter in years, On The Beach, Cineworld & more - Investors Chronicle",
      "title_detail": {
        "base": "",
        "language": null,
        "type": "text/plain",
        "value": "Market Outlook: Stocks head for best quarter in years, On The Beach, Cineworld & more - Investors Chronicle"
      }
    },
    {
      "guidislink": false,
      "id": "CAIiEEvM4cINb4V7oYG-EXFGOwIqGAgEKg8IACoHCAowjujJATDXzBUwyJS0AQ",
      "link": "https://www.marketwatch.com/story/day-trading-stocks-is-a-guaranteed-slaughter-so-why-do-it-2020-06-30",
      "links": [
        {
          "href": "https://www.marketwatch.com/story/day-trading-stocks-is-a-guaranteed-slaughter-so-why-do-it-2020-06-30",
          "rel": "alternate",
          "type": "text/html"
        }
      ],
      "published": "Sat, 04 Jul 2020 20:43:25 GMT",
      "published_parsed": [
        2020,
        7,
        4,
        20,
        43,
        25,
        5,
        186,
        0
      ],
      "source": {
        "href": "https://www.marketwatch.com",
        "title": "MarketWatch"
      },
      "sub_articles": [],
      "summary": "<a href=\"https://www.marketwatch.com/story/day-trading-stocks-is-a-guaranteed-slaughter-so-why-do-it-2020-06-30\" target=\"_blank\">Day trading stocks is a guaranteed slaughter. So why do it?</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">MarketWatch</font>",
      "summary_detail": {
        "base": "",
        "language": null,
        "type": "text/html",
        "value": "<a href=\"https://www.marketwatch.com/story/day-trading-stocks-is-a-guaranteed-slaughter-so-why-do-it-2020-06-30\" target=\"_blank\">Day trading stocks is a guaranteed slaughter. So why do it?</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">MarketWatch</font>"
      },
      "title": "Day trading stocks is a guaranteed slaughter. So why do it? - MarketWatch",
      "title_detail": {
        "base": "",
        "language": null,
        "type": "text/plain",
        "value": "Day trading stocks is a guaranteed slaughter. So why do it? - MarketWatch"
      }
    },
    {
      "guidislink": false,
      "id": "CBMiYWh0dHBzOi8vd3d3LmZvb2wuY29tL2ludmVzdGluZy8yMDIwLzA3LzA0L3doeS10aGlzLW9uZS1zdG9jay1jb3VsZC1icmluZy1saWZlY2hhbmdpbmctcmV0dXJuLmFzcHjSAWVodHRwczovL3d3dy5mb29sLmNvbS9hbXAvaW52ZXN0aW5nLzIwMjAvMDcvMDQvd2h5LXRoaXMtb25lLXN0b2NrLWNvdWxkLWJyaW5nLWxpZmVjaGFuZ2luZy1yZXR1cm4uYXNweA",
      "link": "https://www.fool.com/investing/2020/07/04/why-this-one-stock-could-bring-lifechanging-return.aspx",
      "links": [
        {
          "href": "https://www.fool.com/investing/2020/07/04/why-this-one-stock-could-bring-lifechanging-return.aspx",
          "rel": "alternate",
          "type": "text/html"
        }
      ],
      "published": "Sat, 04 Jul 2020 15:00:00 GMT",
      "published_parsed": [
        2020,
        7,
        4,
        15,
        0,
        0,
        5,
        186,
        0
      ],
      "source": {
        "href": "https://www.fool.com",
        "title": "Motley Fool"
      },
      "sub_articles": [],
      "summary": "<a href=\"https://www.fool.com/investing/2020/07/04/why-this-one-stock-could-bring-lifechanging-return.aspx\" target=\"_blank\">Why This One Stock Could Bring Life-Changing Returns</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">Motley Fool</font>",
      "summary_detail": {
        "base": "",
        "language": null,
        "type": "text/html",
        "value": "<a href=\"https://www.fool.com/investing/2020/07/04/why-this-one-stock-could-bring-lifechanging-return.aspx\" target=\"_blank\">Why This One Stock Could Bring Life-Changing Returns</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">Motley Fool</font>"
      },
      "title": "Why This One Stock Could Bring Life-Changing Returns - Motley Fool",
      "title_detail": {
        "base": "",
        "language": null,
        "type": "text/plain",
        "value": "Why This One Stock Could Bring Life-Changing Returns - Motley Fool"
      }
    },
    {
      "guidislink": false,
      "id": "CAIiEAl47wCeDMF3PTQW9ShZyNsqGQgEKhAIACoHCAow4uzwCjCF3bsCMIrOrwM",
      "link": "https://www.bloomberg.com/news/articles/2020-07-01/asian-stock-futures-climb-nasdaq-hits-record-markets-wrap",
      "links": [
        {
          "href": "https://www.bloomberg.com/news/articles/2020-07-01/asian-stock-futures-climb-nasdaq-hits-record-markets-wrap",
          "rel": "alternate",
          "type": "text/html"
        }
      ],
      "published": "Thu, 02 Jul 2020 21:46:12 GMT",
      "published_parsed": [
        2020,
        7,
        2,
        21,
        46,
        12,
        3,
        184,
        0
      ],
      "source": {
        "href": "https://www.bloomberg.com",
        "title": "Bloomberg"
      },
      "sub_articles": [],
      "summary": "<a href=\"https://www.bloomberg.com/news/articles/2020-07-01/asian-stock-futures-climb-nasdaq-hits-record-markets-wrap\" target=\"_blank\">Stocks Pare Gains as Virus Angst Offsets Jobs Data: Markets Wrap</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">Bloomberg</font>",
      "summary_detail": {
        "base": "",
        "language": null,
        "type": "text/html",
        "value": "<a href=\"https://www.bloomberg.com/news/articles/2020-07-01/asian-stock-futures-climb-nasdaq-hits-record-markets-wrap\" target=\"_blank\">Stocks Pare Gains as Virus Angst Offsets Jobs Data: Markets Wrap</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">Bloomberg</font>"
      },
      "title": "Stocks Pare Gains as Virus Angst Offsets Jobs Data: Markets Wrap - Bloomberg",
      "title_detail": {
        "base": "",
        "language": null,
        "type": "text/plain",
        "value": "Stocks Pare Gains as Virus Angst Offsets Jobs Data: Markets Wrap - Bloomberg"
      }
    },
    {
      "guidislink": false,
      "id": "CAIiECEhrjPoz-e_NVNBzDU12hUqFwgEKg4IACoGCAowl6p7MN-zCTClss0G",
      "link": "https://www.theguardian.com/world/2020/jul/03/chinas-stock-market-closes-highest-level-five-years-caixin-markit",
      "links": [
        {
          "href": "https://www.theguardian.com/world/2020/jul/03/chinas-stock-market-closes-highest-level-five-years-caixin-markit",
          "rel": "alternate",
          "type": "text/html"
        }
      ],
      "published": "Fri, 03 Jul 2020 17:42:43 GMT",
      "published_parsed": [
        2020,
        7,
        3,
        17,
        42,
        43,
        4,
        185,
        0
      ],
      "source": {
        "href": "https://www.theguardian.com",
        "title": "The Guardian"
      },
      "sub_articles": [],
      "summary": "<a href=\"https://www.theguardian.com/world/2020/jul/03/chinas-stock-market-closes-highest-level-five-years-caixin-markit\" target=\"_blank\">China's stock market closes at highest level in five years</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">The Guardian</font>",
      "summary_detail": {
        "base": "",
        "language": null,
        "type": "text/html",
        "value": "<a href=\"https://www.theguardian.com/world/2020/jul/03/chinas-stock-market-closes-highest-level-five-years-caixin-markit\" target=\"_blank\">China's stock market closes at highest level in five years</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">The Guardian</font>"
      },
      "title": "China's stock market closes at highest level in five years - The Guardian",
      "title_detail": {
        "base": "",
        "language": null,
        "type": "text/plain",
        "value": "China's stock market closes at highest level in five years - The Guardian"
      }
    },
    {
      "guidislink": false,
      "id": "CBMiTGh0dHBzOi8vZmluYW5jZS55YWhvby5jb20vbmV3cy9maXJzdC1taWR3ZXN0LWJhbmNvcnAtaW5jLWZtYmktMTgxMzQ3MTgxLmh0bWzSAVRodHRwczovL2ZpbmFuY2UueWFob28uY29tL2FtcGh0bWwvbmV3cy9maXJzdC1taWR3ZXN0LWJhbmNvcnAtaW5jLWZtYmktMTgxMzQ3MTgxLmh0bWw",
      "link": "https://finance.yahoo.com/news/first-midwest-bancorp-inc-fmbi-181347181.html",
      "links": [
        {
          "href": "https://finance.yahoo.com/news/first-midwest-bancorp-inc-fmbi-181347181.html",
          "rel": "alternate",
          "type": "text/html"
        }
      ],
      "published": "Sat, 04 Jul 2020 18:13:00 GMT",
      "published_parsed": [
        2020,
        7,
        4,
        18,
        13,
        0,
        5,
        186,
        0
      ],
      "source": {
        "href": "https://finance.yahoo.com",
        "title": "Yahoo Finance"
      },
      "sub_articles": [],
      "summary": "<a href=\"https://finance.yahoo.com/news/first-midwest-bancorp-inc-fmbi-181347181.html\" target=\"_blank\">Is First Midwest Bancorp Inc (FMBI) A Good Stock To Buy?</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">Yahoo Finance</font>",
      "summary_detail": {
        "base": "",
        "language": null,
        "type": "text/html",
        "value": "<a href=\"https://finance.yahoo.com/news/first-midwest-bancorp-inc-fmbi-181347181.html\" target=\"_blank\">Is First Midwest Bancorp Inc (FMBI) A Good Stock To Buy?</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">Yahoo Finance</font>"
      },
      "title": "Is First Midwest Bancorp Inc (FMBI) A Good Stock To Buy? - Yahoo Finance",
      "title_detail": {
        "base": "",
        "language": null,
        "type": "text/plain",
        "value": "Is First Midwest Bancorp Inc (FMBI) A Good Stock To Buy? - Yahoo Finance"
      }
    },
    {
      "guidislink": false,
      "id": "CBMiTGh0dHBzOi8vd3d3LmZvb2wuY29tL2ludmVzdGluZy8yMDIwLzA3LzA0L2lub3Zpby1zdG9jay1idXktc2VsbC1vci1ob2xkLmFzcHjSAVBodHRwczovL3d3dy5mb29sLmNvbS9hbXAvaW52ZXN0aW5nLzIwMjAvMDcvMDQvaW5vdmlvLXN0b2NrLWJ1eS1zZWxsLW9yLWhvbGQuYXNweA",
      "link": "https://www.fool.com/investing/2020/07/04/inovio-stock-buy-sell-or-hold.aspx",
      "links": [
        {
          "href": "https://www.fool.com/investing/2020/07/04/inovio-stock-buy-sell-or-hold.aspx",
          "rel": "alternate",
          "type": "text/html"
        }
      ],
      "published": "Sat, 04 Jul 2020 12:09:00 GMT",
      "published_parsed": [
        2020,
        7,
        4,
        12,
        9,
        0,
        5,
        186,
        0
      ],
      "source": {
        "href": "https://www.fool.com",
        "title": "Motley Fool"
      },
      "sub_articles": [],
      "summary": "<a href=\"https://www.fool.com/investing/2020/07/04/inovio-stock-buy-sell-or-hold.aspx\" target=\"_blank\">Inovio Stock: Buy, Sell, or Hold?</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">Motley Fool</font>",
      "summary_detail": {
        "base": "",
        "language": null,
        "type": "text/html",
        "value": "<a href=\"https://www.fool.com/investing/2020/07/04/inovio-stock-buy-sell-or-hold.aspx\" target=\"_blank\">Inovio Stock: Buy, Sell, or Hold?</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">Motley Fool</font>"
      },
      "title": "Inovio Stock: Buy, Sell, or Hold? - Motley Fool",
      "title_detail": {
        "base": "",
        "language": null,
        "type": "text/plain",
        "value": "Inovio Stock: Buy, Sell, or Hold? - Motley Fool"
      }
    },
    {
      "guidislink": false,
      "id": "CAIiEEuISfk3m9gLqzXws68asREqFggEKg4IACoGCAowl6p7MN-zCTCtvxU",
      "link": "https://www.theguardian.com/us-news/2020/jun/30/us-buys-up-world-stock-of-key-covid-19-drug",
      "links": [
        {
          "href": "https://www.theguardian.com/us-news/2020/jun/30/us-buys-up-world-stock-of-key-covid-19-drug",
          "rel": "alternate",
          "type": "text/html"
        }
      ],
      "published": "Wed, 01 Jul 2020 18:14:19 GMT",
      "published_parsed": [
        2020,
        7,
        1,
        18,
        14,
        19,
        2,
        183,
        0
      ],
      "source": {
        "href": "https://www.theguardian.com",
        "title": "The Guardian"
      },
      "sub_articles": [],
      "summary": "<a href=\"https://www.theguardian.com/us-news/2020/jun/30/us-buys-up-world-stock-of-key-covid-19-drug\" target=\"_blank\">US secures world stock of key Covid-19 drug remdesivir</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">The Guardian</font>",
      "summary_detail": {
        "base": "",
        "language": null,
        "type": "text/html",
        "value": "<a href=\"https://www.theguardian.com/us-news/2020/jun/30/us-buys-up-world-stock-of-key-covid-19-drug\" target=\"_blank\">US secures world stock of key Covid-19 drug remdesivir</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">The Guardian</font>"
      },
      "title": "US secures world stock of key Covid-19 drug remdesivir - The Guardian",
      "title_detail": {
        "base": "",
        "language": null,
        "type": "text/plain",
        "value": "US secures world stock of key Covid-19 drug remdesivir - The Guardian"
      }
    },
    {
      "guidislink": false,
      "id": "CAIiELobEVz5AOlkgzoLnbqgZQwqGQgEKhAIACoHCAow4uGPCzDQpKMDMOm0sAY",
      "link": "https://www.thisismoney.co.uk/money/investing/article-8465971/Snap-undervalued-stocks-bag-bargain.html",
      "links": [
        {
          "href": "https://www.thisismoney.co.uk/money/investing/article-8465971/Snap-undervalued-stocks-bag-bargain.html",
          "rel": "alternate",
          "type": "text/html"
        }
      ],
      "published": "Tue, 30 Jun 2020 08:42:09 GMT",
      "published_parsed": [
        2020,
        6,
        30,
        8,
        42,
        9,
        1,
        182,
        0
      ],
      "source": {
        "href": "https://www.thisismoney.co.uk",
        "title": "This is Money"
      },
      "sub_articles": [],
      "summary": "<a href=\"https://www.thisismoney.co.uk/money/investing/article-8465971/Snap-undervalued-stocks-bag-bargain.html\" target=\"_blank\">Snap up these undervalued stocks and bag a bargain</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">This is Money</font>",
      "summary_detail": {
        "base": "",
        "language": null,
        "type": "text/html",
        "value": "<a href=\"https://www.thisismoney.co.uk/money/investing/article-8465971/Snap-undervalued-stocks-bag-bargain.html\" target=\"_blank\">Snap up these undervalued stocks and bag a bargain</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">This is Money</font>"
      },
      "title": "Snap up these undervalued stocks and bag a bargain - This is Money",
      "title_detail": {
        "base": "",
        "language": null,
        "type": "text/plain",
        "value": "Snap up these undervalued stocks and bag a bargain - This is Money"
      }
    },
    {
      "guidislink": false,
      "id": "CBMiQmh0dHBzOi8vZmluYW5jZS55YWhvby5jb20vbmV3cy9wYy10ZWwtaW5jLXBjdGktZ29vZC0xODE0NDk5NTcuaHRtbNIBSmh0dHBzOi8vZmluYW5jZS55YWhvby5jb20vYW1waHRtbC9uZXdzL3BjLXRlbC1pbmMtcGN0aS1nb29kLTE4MTQ0OTk1Ny5odG1s",
      "link": "https://finance.yahoo.com/news/pc-tel-inc-pcti-good-181449957.html",
      "links": [
        {
          "href": "https://finance.yahoo.com/news/pc-tel-inc-pcti-good-181449957.html",
          "rel": "alternate",
          "type": "text/html"
        }
      ],
      "published": "Sat, 04 Jul 2020 18:14:00 GMT",
      "published_parsed": [
        2020,
        7,
        4,
        18,
        14,
        0,
        5,
        186,
        0
      ],
      "source": {
        "href": "https://finance.yahoo.com",
        "title": "Yahoo Finance"
      },
      "sub_articles": [],
      "summary": "<a href=\"https://finance.yahoo.com/news/pc-tel-inc-pcti-good-181449957.html\" target=\"_blank\">Is PC Tel Inc (PCTI) A Good Stock To Buy?</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">Yahoo Finance</font>",
      "summary_detail": {
        "base": "",
        "language": null,
        "type": "text/html",
        "value": "<a href=\"https://finance.yahoo.com/news/pc-tel-inc-pcti-good-181449957.html\" target=\"_blank\">Is PC Tel Inc (PCTI) A Good Stock To Buy?</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">Yahoo Finance</font>"
      },
      "title": "Is PC Tel Inc (PCTI) A Good Stock To Buy? - Yahoo Finance",
      "title_detail": {
        "base": "",
        "language": null,
        "type": "text/plain",
        "value": "Is PC Tel Inc (PCTI) A Good Stock To Buy? - Yahoo Finance"
      }
    },
    {
      "guidislink": false,
      "id": "CBMijwFodHRwczovL3d3dy5wcmluY2VnZW9yZ2VjaXRpemVuLmNvbS9uZXdzL2xvY2FsLW5ld3MvZmVkcy1jb21taXR0ZWQtdG8tcHJvdGVjdGluZy1mcmFzZXItcml2ZXItY2hpbm9vay1zdG9ja3MtZmlzaGVyaWVzLW1pbmlzdGVyLXNheXMtMS4yNDE2NTA0NdIBAA",
      "link": "https://www.princegeorgecitizen.com/news/local-news/feds-committed-to-protecting-fraser-river-chinook-stocks-fisheries-minister-says-1.24165045",
      "links": [
        {
          "href": "https://www.princegeorgecitizen.com/news/local-news/feds-committed-to-protecting-fraser-river-chinook-stocks-fisheries-minister-says-1.24165045",
          "rel": "alternate",
          "type": "text/html"
        }
      ],
      "published": "Sat, 04 Jul 2020 15:34:00 GMT",
      "published_parsed": [
        2020,
        7,
        4,
        15,
        34,
        0,
        5,
        186,
        0
      ],
      "source": {
        "href": "https://www.princegeorgecitizen.com",
        "title": "Prince George Citizen"
      },
      "sub_articles": [],
      "summary": "<a href=\"https://www.princegeorgecitizen.com/news/local-news/feds-committed-to-protecting-fraser-river-chinook-stocks-fisheries-minister-says-1.24165045\" target=\"_blank\">Feds committed to protecting Fraser River chinook stocks, Fisheries Minister says</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">Prince George Citizen</font>",
      "summary_detail": {
        "base": "",
        "language": null,
        "type": "text/html",
        "value": "<a href=\"https://www.princegeorgecitizen.com/news/local-news/feds-committed-to-protecting-fraser-river-chinook-stocks-fisheries-minister-says-1.24165045\" target=\"_blank\">Feds committed to protecting Fraser River chinook stocks, Fisheries Minister says</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">Prince George Citizen</font>"
      },
      "title": "Feds committed to protecting Fraser River chinook stocks, Fisheries Minister says - Prince George Citizen",
      "title_detail": {
        "base": "",
        "language": null,
        "type": "text/plain",
        "value": "Feds committed to protecting Fraser River chinook stocks, Fisheries Minister says - Prince George Citizen"
      }
    },
    {
      "guidislink": false,
      "id": "CAIiEFh4zDN-g2eE119SALB0-3EqFwgEKg8IACoHCAowhO7OATDh9Cgwm4pR",
      "link": "https://apnews.com/87f8921bf3d4a7659c99f76f39bcfb17",
      "links": [
        {
          "href": "https://apnews.com/87f8921bf3d4a7659c99f76f39bcfb17",
          "rel": "alternate",
          "type": "text/html"
        }
      ],
      "published": "Fri, 03 Jul 2020 17:27:15 GMT",
      "published_parsed": [
        2020,
        7,
        3,
        17,
        27,
        15,
        4,
        185,
        0
      ],
      "source": {
        "href": "https://apnews.com",
        "title": "The Associated Press"
      },
      "sub_articles": [],
      "summary": "<a href=\"https://apnews.com/87f8921bf3d4a7659c99f76f39bcfb17\" target=\"_blank\">World stocks mostly dip with US closed for holiday</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">The Associated Press</font>",
      "summary_detail": {
        "base": "",
        "language": null,
        "type": "text/html",
        "value": "<a href=\"https://apnews.com/87f8921bf3d4a7659c99f76f39bcfb17\" target=\"_blank\">World stocks mostly dip with US closed for holiday</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">The Associated Press</font>"
      },
      "title": "World stocks mostly dip with US closed for holiday - The Associated Press",
      "title_detail": {
        "base": "",
        "language": null,
        "type": "text/plain",
        "value": "World stocks mostly dip with US closed for holiday - The Associated Press"
      }
    },
    {
      "guidislink": false,
      "id": "CBMid2h0dHBzOi8vY2xlYW50ZWNobmljYS5jb20vMjAyMC8wNy8wNC90ZXNsYS1zdG9jay1wb3AtdGhlLWhvdC1ldi1tYXJrZXQtYmlnLWF1dG9zLWV2LW1vbWVudC1lbmVyZ3ktaW5kZXBlbmRlbmNlLXdlZWtlbmQv0gF7aHR0cHM6Ly9jbGVhbnRlY2huaWNhLmNvbS8yMDIwLzA3LzA0L3Rlc2xhLXN0b2NrLXBvcC10aGUtaG90LWV2LW1hcmtldC1iaWctYXV0b3MtZXYtbW9tZW50LWVuZXJneS1pbmRlcGVuZGVuY2Utd2Vla2VuZC9hbXAv",
      "link": "https://cleantechnica.com/2020/07/04/tesla-stock-pop-the-hot-ev-market-big-autos-ev-moment-energy-independence-weekend/",
      "links": [
        {
          "href": "https://cleantechnica.com/2020/07/04/tesla-stock-pop-the-hot-ev-market-big-autos-ev-moment-energy-independence-weekend/",
          "rel": "alternate",
          "type": "text/html"
        }
      ],
      "published": "Sat, 04 Jul 2020 19:48:45 GMT",
      "published_parsed": [
        2020,
        7,
        4,
        19,
        48,
        45,
        5,
        186,
        0
      ],
      "source": {
        "href": "https://cleantechnica.com",
        "title": "CleanTechnica"
      },
      "sub_articles": [],
      "summary": "<a href=\"https://cleantechnica.com/2020/07/04/tesla-stock-pop-the-hot-ev-market-big-autos-ev-moment-energy-independence-weekend/\" target=\"_blank\">Tesla Stock Pop, The Hot EV Market, Big Auto’s EV Moment — Energy Independence Weekend</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">CleanTechnica</font>",
      "summary_detail": {
        "base": "",
        "language": null,
        "type": "text/html",
        "value": "<a href=\"https://cleantechnica.com/2020/07/04/tesla-stock-pop-the-hot-ev-market-big-autos-ev-moment-energy-independence-weekend/\" target=\"_blank\">Tesla Stock Pop, The Hot EV Market, Big Auto’s EV Moment — Energy Independence Weekend</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">CleanTechnica</font>"
      },
      "title": "Tesla Stock Pop, The Hot EV Market, Big Auto’s EV Moment — Energy Independence Weekend - CleanTechnica",
      "title_detail": {
        "base": "",
        "language": null,
        "type": "text/plain",
        "value": "Tesla Stock Pop, The Hot EV Market, Big Auto’s EV Moment — Energy Independence Weekend - CleanTechnica"
      }
    },
    {
      "guidislink": false,
      "id": "CAIiEJGylXl9LqfjILjuXbzbd8wqGQgEKhAIACoHCAow2pqGCzD954MDMJzyigY",
      "link": "https://economictimes.indiatimes.com/markets/stocks/news/etmarkets-survey-15-stocks-that-analysts-say-can-emerge-dark-horses-on-dalal-street/articleshow/76703396.cms",
      "links": [
        {
          "href": "https://economictimes.indiatimes.com/markets/stocks/news/etmarkets-survey-15-stocks-that-analysts-say-can-emerge-dark-horses-on-dalal-street/articleshow/76703396.cms",
          "rel": "alternate",
          "type": "text/html"
        }
      ],
      "published": "Tue, 30 Jun 2020 04:57:22 GMT",
      "published_parsed": [
        2020,
        6,
        30,
        4,
        57,
        22,
        1,
        182,
        0
      ],
      "source": {
        "href": "https://economictimes.indiatimes.com",
        "title": "Economic Times"
      },
      "sub_articles": [],
      "summary": "<a href=\"https://economictimes.indiatimes.com/markets/stocks/news/etmarkets-survey-15-stocks-that-analysts-say-can-emerge-dark-horses-on-dalal-street/articleshow/76703396.cms\" target=\"_blank\">ETMarkets Survey: 15 stocks that analysts say can emerge Dark Horses on Dalal Street</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">Economic Times</font>",
      "summary_detail": {
        "base": "",
        "language": null,
        "type": "text/html",
        "value": "<a href=\"https://economictimes.indiatimes.com/markets/stocks/news/etmarkets-survey-15-stocks-that-analysts-say-can-emerge-dark-horses-on-dalal-street/articleshow/76703396.cms\" target=\"_blank\">ETMarkets Survey: 15 stocks that analysts say can emerge Dark Horses on Dalal Street</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">Economic Times</font>"
      },
      "title": "ETMarkets Survey: 15 stocks that analysts say can emerge Dark Horses on Dalal Street - Economic Times",
      "title_detail": {
        "base": "",
        "language": null,
        "type": "text/plain",
        "value": "ETMarkets Survey: 15 stocks that analysts say can emerge Dark Horses on Dalal Street - Economic Times"
      }
    },
    {
      "guidislink": false,
      "id": "CBMiTGh0dHBzOi8vd3d3LmZvb2wuY2EvMjAyMC8wNy8wNC8yLWNvdmlkLTE5LXJlc2lzdGFudC1zdG9ja3MtdG8tYnV5LXJpZ2h0LW5vdy_SAQA",
      "link": "https://www.fool.ca/2020/07/04/2-covid-19-resistant-stocks-to-buy-right-now/",
      "links": [
        {
          "href": "https://www.fool.ca/2020/07/04/2-covid-19-resistant-stocks-to-buy-right-now/",
          "rel": "alternate",
          "type": "text/html"
        }
      ],
      "published": "Sat, 04 Jul 2020 14:00:22 GMT",
      "published_parsed": [
        2020,
        7,
        4,
        14,
        0,
        22,
        5,
        186,
        0
      ],
      "source": {
        "href": "https://www.fool.ca",
        "title": "The Motley Fool Canada"
      },
      "sub_articles": [],
      "summary": "<a href=\"https://www.fool.ca/2020/07/04/2-covid-19-resistant-stocks-to-buy-right-now/\" target=\"_blank\">2 COVID-19-Resistant Stocks to Buy Right Now</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">The Motley Fool Canada</font>",
      "summary_detail": {
        "base": "",
        "language": null,
        "type": "text/html",
        "value": "<a href=\"https://www.fool.ca/2020/07/04/2-covid-19-resistant-stocks-to-buy-right-now/\" target=\"_blank\">2 COVID-19-Resistant Stocks to Buy Right Now</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">The Motley Fool Canada</font>"
      },
      "title": "2 COVID-19-Resistant Stocks to Buy Right Now - The Motley Fool Canada",
      "title_detail": {
        "base": "",
        "language": null,
        "type": "text/plain",
        "value": "2 COVID-19-Resistant Stocks to Buy Right Now - The Motley Fool Canada"
      }
    },
    {
      "guidislink": false,
      "id": "CBMiW2h0dHBzOi8vc3RvY2tuZXdzLmNvbS9uZXdzL29yY2wtbGx5LWViYXktY29yLTQtZGl2aWRlbmQtc3RvY2tzLXRvLWJ1eS1pZi10aGVyZS1pcy1hLXNlY29uZC_SAQA",
      "link": "https://stocknews.com/news/orcl-lly-ebay-cor-4-dividend-stocks-to-buy-if-there-is-a-second/",
      "links": [
        {
          "href": "https://stocknews.com/news/orcl-lly-ebay-cor-4-dividend-stocks-to-buy-if-there-is-a-second/",
          "rel": "alternate",
          "type": "text/html"
        }
      ],
      "published": "Fri, 03 Jul 2020 18:36:35 GMT",
      "published_parsed": [
        2020,
        7,
        3,
        18,
        36,
        35,
        4,
        185,
        0
      ],
      "source": {
        "href": "https://stocknews.com",
        "title": "StockNews.com"
      },
      "sub_articles": [],
      "summary": "<a href=\"https://stocknews.com/news/orcl-lly-ebay-cor-4-dividend-stocks-to-buy-if-there-is-a-second/\" target=\"_blank\">ORCL: 4 Dividend Stocks to Buy if There is a Second Market Crash</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">StockNews.com</font>",
      "summary_detail": {
        "base": "",
        "language": null,
        "type": "text/html",
        "value": "<a href=\"https://stocknews.com/news/orcl-lly-ebay-cor-4-dividend-stocks-to-buy-if-there-is-a-second/\" target=\"_blank\">ORCL: 4 Dividend Stocks to Buy if There is a Second Market Crash</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">StockNews.com</font>"
      },
      "title": "ORCL: 4 Dividend Stocks to Buy if There is a Second Market Crash - StockNews.com",
      "title_detail": {
        "base": "",
        "language": null,
        "type": "text/plain",
        "value": "ORCL: 4 Dividend Stocks to Buy if There is a Second Market Crash - StockNews.com"
      }
    },
    {
      "guidislink": false,
      "id": "CBMiUGh0dHBzOi8vd3d3LnN1bmRheWd1YXJkaWFubGl2ZS5jb20vYnVzaW5lc3MvdHYxOC1zdG9jay1tYXktZG91YmxlLWN1cnJlbnQtbGV2ZWxz0gEA",
      "link": "https://www.sundayguardianlive.com/business/tv18-stock-may-double-current-levels",
      "links": [
        {
          "href": "https://www.sundayguardianlive.com/business/tv18-stock-may-double-current-levels",
          "rel": "alternate",
          "type": "text/html"
        }
      ],
      "published": "Sat, 04 Jul 2020 21:28:45 GMT",
      "published_parsed": [
        2020,
        7,
        4,
        21,
        28,
        45,
        5,
        186,
        0
      ],
      "source": {
        "href": "https://www.sundayguardianlive.com",
        "title": "The Sunday Guardian"
      },
      "sub_articles": [],
      "summary": "<a href=\"https://www.sundayguardianlive.com/business/tv18-stock-may-double-current-levels\" target=\"_blank\">TV18 stock may double from current levels</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">The Sunday Guardian</font>",
      "summary_detail": {
        "base": "",
        "language": null,
        "type": "text/html",
        "value": "<a href=\"https://www.sundayguardianlive.com/business/tv18-stock-may-double-current-levels\" target=\"_blank\">TV18 stock may double from current levels</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">The Sunday Guardian</font>"
      },
      "title": "TV18 stock may double from current levels - The Sunday Guardian",
      "title_detail": {
        "base": "",
        "language": null,
        "type": "text/plain",
        "value": "TV18 stock may double from current levels - The Sunday Guardian"
      }
    },
    {
      "guidislink": false,
      "id": "CBMiT2h0dHBzOi8vd3d3LmZvb2wuY29tL2ludmVzdGluZy8yMDIwLzA3LzA0L3doeS11YmVycy1zdG9jay1mZWxsLTE0NC1pbi1qdW5lLmFzcHjSAVNodHRwczovL3d3dy5mb29sLmNvbS9hbXAvaW52ZXN0aW5nLzIwMjAvMDcvMDQvd2h5LXViZXJzLXN0b2NrLWZlbGwtMTQ0LWluLWp1bmUuYXNweA",
      "link": "https://www.fool.com/investing/2020/07/04/why-ubers-stock-fell-144-in-june.aspx",
      "links": [
        {
          "href": "https://www.fool.com/investing/2020/07/04/why-ubers-stock-fell-144-in-june.aspx",
          "rel": "alternate",
          "type": "text/html"
        }
      ],
      "published": "Sat, 04 Jul 2020 11:36:00 GMT",
      "published_parsed": [
        2020,
        7,
        4,
        11,
        36,
        0,
        5,
        186,
        0
      ],
      "source": {
        "href": "https://www.fool.com",
        "title": "Motley Fool"
      },
      "sub_articles": [],
      "summary": "<a href=\"https://www.fool.com/investing/2020/07/04/why-ubers-stock-fell-144-in-june.aspx\" target=\"_blank\">Why Uber's Stock Fell 14.4% in June</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">Motley Fool</font>",
      "summary_detail": {
        "base": "",
        "language": null,
        "type": "text/html",
        "value": "<a href=\"https://www.fool.com/investing/2020/07/04/why-ubers-stock-fell-144-in-june.aspx\" target=\"_blank\">Why Uber's Stock Fell 14.4% in June</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">Motley Fool</font>"
      },
      "title": "Why Uber's Stock Fell 14.4% in June - Motley Fool",
      "title_detail": {
        "base": "",
        "language": null,
        "type": "text/plain",
        "value": "Why Uber's Stock Fell 14.4% in June - Motley Fool"
      }
    },
    {
      "guidislink": false,
      "id": "CBMifmh0dHBzOi8vd3d3LmZvb2wuY28udWsvaW52ZXN0aW5nLzIwMjAvMDcvMDEvc3RvY2stbWFya2V0LWNyYXNoLWJhcmdhaW5zLWlkLWJ1eS1jaGVhcC1mdHNlLTEwMC1kaXZpZGVuZC1zaGFyZXMtaW4tYW4taXNhLXRvZGF5L9IBAA",
      "link": "https://www.fool.co.uk/investing/2020/07/01/stock-market-crash-bargains-id-buy-cheap-ftse-100-dividend-shares-in-an-isa-today/",
      "links": [
        {
          "href": "https://www.fool.co.uk/investing/2020/07/01/stock-market-crash-bargains-id-buy-cheap-ftse-100-dividend-shares-in-an-isa-today/",
          "rel": "alternate",
          "type": "text/html"
        }
      ],
      "published": "Wed, 01 Jul 2020 06:57:10 GMT",
      "published_parsed": [
        2020,
        7,
        1,
        6,
        57,
        10,
        2,
        183,
        0
      ],
      "source": {
        "href": "https://www.fool.co.uk",
        "title": "Motley Fool UK"
      },
      "sub_articles": [],
      "summary": "<a href=\"https://www.fool.co.uk/investing/2020/07/01/stock-market-crash-bargains-id-buy-cheap-ftse-100-dividend-shares-in-an-isa-today/\" target=\"_blank\">Stock market crash bargains: I'd buy cheap FTSE 100 dividend shares in an ISA today</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">Motley Fool UK</font>",
      "summary_detail": {
        "base": "",
        "language": null,
        "type": "text/html",
        "value": "<a href=\"https://www.fool.co.uk/investing/2020/07/01/stock-market-crash-bargains-id-buy-cheap-ftse-100-dividend-shares-in-an-isa-today/\" target=\"_blank\">Stock market crash bargains: I'd buy cheap FTSE 100 dividend shares in an ISA today</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">Motley Fool UK</font>"
      },
      "title": "Stock market crash bargains: I'd buy cheap FTSE 100 dividend shares in an ISA today - Motley Fool UK",
      "title_detail": {
        "base": "",
        "language": null,
        "type": "text/plain",
        "value": "Stock market crash bargains: I'd buy cheap FTSE 100 dividend shares in an ISA today - Motley Fool UK"
      }
    },
    {
      "guidislink": false,
      "id": "CBMikwFodHRwczovLzI0N3dhbGxzdC5jb20vaW52ZXN0aW5nLzIwMjAvMDcvMDMvMTAtdW51c3VhbC1oaWdoLXByb2ZpbGUtYW5hbHlzdC11cGdyYWRlcy1hcy1zdG9ja3Mtc3VyZ2UtaW50by1qdWx5LWFrYW1haS1hbWF6b25lYmF5LXNob3BpZnktdGVzbGEtbW9yZS_SAZcBaHR0cHM6Ly8yNDd3YWxsc3QuY29tL2ludmVzdGluZy8yMDIwLzA3LzAzLzEwLXVudXN1YWwtaGlnaC1wcm9maWxlLWFuYWx5c3QtdXBncmFkZXMtYXMtc3RvY2tzLXN1cmdlLWludG8tanVseS1ha2FtYWktYW1hem9uZWJheS1zaG9waWZ5LXRlc2xhLW1vcmUvYW1wLw",
      "link": "https://247wallst.com/investing/2020/07/03/10-unusual-high-profile-analyst-upgrades-as-stocks-surge-into-july-akamai-amazonebay-shopify-tesla-more/",
      "links": [
        {
          "href": "https://247wallst.com/investing/2020/07/03/10-unusual-high-profile-analyst-upgrades-as-stocks-surge-into-july-akamai-amazonebay-shopify-tesla-more/",
          "rel": "alternate",
          "type": "text/html"
        }
      ],
      "published": "Fri, 03 Jul 2020 10:45:55 GMT",
      "published_parsed": [
        2020,
        7,
        3,
        10,
        45,
        55,
        4,
        185,
        0
      ],
      "source": {
        "href": "https://247wallst.com",
        "title": "24/7 Wall St."
      },
      "sub_articles": [],
      "summary": "<a href=\"https://247wallst.com/investing/2020/07/03/10-unusual-high-profile-analyst-upgrades-as-stocks-surge-into-july-akamai-amazonebay-shopify-tesla-more/\" target=\"_blank\">10 Unusual High-Profile Analyst Upgrades as Stocks Surge Into July: Akamai, Amazon,eBay, Shopify, Tesla & More</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">24/7 Wall St.</font>",
      "summary_detail": {
        "base": "",
        "language": null,
        "type": "text/html",
        "value": "<a href=\"https://247wallst.com/investing/2020/07/03/10-unusual-high-profile-analyst-upgrades-as-stocks-surge-into-july-akamai-amazonebay-shopify-tesla-more/\" target=\"_blank\">10 Unusual High-Profile Analyst Upgrades as Stocks Surge Into July: Akamai, Amazon,eBay, Shopify, Tesla & More</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">24/7 Wall St.</font>"
      },
      "title": "10 Unusual High-Profile Analyst Upgrades as Stocks Surge Into July: Akamai, Amazon,eBay, Shopify, Tesla & More - 24/7 Wall St.",
      "title_detail": {
        "base": "",
        "language": null,
        "type": "text/plain",
        "value": "10 Unusual High-Profile Analyst Upgrades as Stocks Surge Into July: Akamai, Amazon,eBay, Shopify, Tesla & More - 24/7 Wall St."
      }
    },
    {
      "guidislink": false,
      "id": "CBMiYGh0dHBzOi8vd3d3LmZvb2wuY29tL2ludmVzdGluZy8yMDIwLzA2LzI3LzctdG9wLXN0b2Nrcy10by1idXktd2hlbi10aGUtc3RvY2stbWFya2V0LWNyYXNoZXMuYXNweNIBZGh0dHBzOi8vd3d3LmZvb2wuY29tL2FtcC9pbnZlc3RpbmcvMjAyMC8wNi8yNy83LXRvcC1zdG9ja3MtdG8tYnV5LXdoZW4tdGhlLXN0b2NrLW1hcmtldC1jcmFzaGVzLmFzcHg",
      "link": "https://www.fool.com/investing/2020/06/27/7-top-stocks-to-buy-when-the-stock-market-crashes.aspx",
      "links": [
        {
          "href": "https://www.fool.com/investing/2020/06/27/7-top-stocks-to-buy-when-the-stock-market-crashes.aspx",
          "rel": "alternate",
          "type": "text/html"
        }
      ],
      "published": "Sat, 27 Jun 2020 09:51:00 GMT",
      "published_parsed": [
        2020,
        6,
        27,
        9,
        51,
        0,
        5,
        179,
        0
      ],
      "source": {
        "href": "https://www.fool.com",
        "title": "Motley Fool"
      },
      "sub_articles": [],
      "summary": "<a href=\"https://www.fool.com/investing/2020/06/27/7-top-stocks-to-buy-when-the-stock-market-crashes.aspx\" target=\"_blank\">7 Top Stocks to Buy When the Stock Market Crashes</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">Motley Fool</font>",
      "summary_detail": {
        "base": "",
        "language": null,
        "type": "text/html",
        "value": "<a href=\"https://www.fool.com/investing/2020/06/27/7-top-stocks-to-buy-when-the-stock-market-crashes.aspx\" target=\"_blank\">7 Top Stocks to Buy When the Stock Market Crashes</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">Motley Fool</font>"
      },
      "title": "7 Top Stocks to Buy When the Stock Market Crashes - Motley Fool",
      "title_detail": {
        "base": "",
        "language": null,
        "type": "text/plain",
        "value": "7 Top Stocks to Buy When the Stock Market Crashes - Motley Fool"
      }
    }
  ],
  "feed": {
    "generator": "NFE/5.0",
    "generator_detail": {
      "name": "NFE/5.0"
    },
    "language": "en-GB",
    "link": "https://news.google.com/search?q=stocks&ceid=GB:en&hl=en-GB&gl=GB",
    "links": [
      {
        "href": "https://news.google.com/search?q=stocks&ceid=GB:en&hl=en-GB&gl=GB",
        "rel": "alternate",
        "type": "text/html"
      }
    ],
    "publisher": "news-webmaster@google.com",
    "publisher_detail": {
      "email": "news-webmaster@google.com"
    },
    "rights": "2020 Google Inc.",
    "rights_detail": {
      "base": "",
      "language": null,
      "type": "text/plain",
      "value": "2020 Google Inc."
    },
    "subtitle": "Google News",
    "subtitle_detail": {
      "base": "",
      "language": null,
      "type": "text/html",
      "value": "Google News"
    },
    "title": "\"stocks\" - Google News",
    "title_detail": {
      "base": "",
      "language": null,
      "type": "text/plain",
      "value": "\"stocks\" - Google News"
    },
    "updated": "Sun, 05 Jul 2020 01:46:30 GMT",
    "updated_parsed": [
      2020,
      7,
      5,
      1,
      46,
      30,
      6,
      187,
      0
    ]
  }
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="news-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|404|Not Found|Not Found|None|
|422|Unprocessable Entity|Unprocessable Entity (WebDAV)|[HTTPValidationError](#schemahttpvalidationerror)|
|429|Too Many Requests|Rate limit exceeded|None|

<h3 id="news-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entries|[object]|false|none|none|
|» guidislink|string|false|none|none|
|» id|string|false|none|none|
|» link|string|false|none|none|
|» links|string|false|none|none|
|» published|string|false|none|none|
|» published_parsed|string|false|none|none|
|» source|string|false|none|none|
|» sub_articles|string|false|none|none|
|» summary|string|false|none|none|
|» summary_detail|string|false|none|none|
|» title|string|false|none|none|
|» title_detail|string|false|none|none|
|feed|object|false|none|none|
|» generator|string|false|none|none|
|» generator_detail|string|false|none|none|
|» language|string|false|none|none|
|» link|string|false|none|none|
|» links|string|false|none|none|
|» publisher|string|false|none|none|
|» publisher_detail|string|false|none|none|
|» rights|string|false|none|none|
|» rights_detail|string|false|none|none|
|» subtitle|string|false|none|none|
|» subtitle_detail|string|false|none|none|
|» title|string|false|none|none|
|» updated|string|false|none|none|
|» updated_parsed|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apikey
</aside>

## Search

<a id="opIdSearch"></a>

> Code samples

```bash
curl https://example.com/v1/search/q%3Dgoogle%2Bsearch%2Bapi \
  -H 'Accept: application/json' \
  -H "apikey: ${API_KEY}"
```

`GET /v1/search/{query}`

Perform Google Search

Parameters
----------
query : the string query to perform search. supports advance queries. Check out https://moz.com/blog/the-ultimate-guide-to-the-google-search-parameters guide for formating

Returns
-------
json: a list of results with the link, description, and title for each result

<h3 id="search-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|query|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "answer": null,
  "results": [
    {
      "description": "Create an account or log in to Instagram - A simple, fun & creative way to capture, edit & share photos, videos & messages with friends & family.",
      "link": "https://www.instagram.com/",
      "title": "Instagram"
    },
    {
      "description": "Bringing you closer to the people and things you love. — Instagram from Facebook Connect with friends, share what you're up to, or see what's new from others ...",
      "link": "https://play.google.com/store/apps/details?id=com.instagram.android&hl=en_US",
      "title": "Instagram - Apps on Google Play"
    },
    {
      "description": "Read reviews, compare customer ratings, see screenshots, and learn more about Instagram. Download Instagram and enjoy it on your iPhone, iPad, and iPod ...",
      "link": "https://apps.apple.com/us/app/instagram/id389801252",
      "title": "‎Instagram on the App Store"
    },
    {
      "description": "Instagram · June 10 at 4:35 PM ·. These powerful posts from the Black community embody resilience and hope ...",
      "link": "https://www.facebook.com/instagram/",
      "title": "Instagram - Home | Facebook"
    },
    {
      "description": "Instagram is an American photo and video-sharing social networking service owned by Facebook, Inc. It was created by Kevin Systrom and Mike Krieger, and ...",
      "link": "https://en.wikipedia.org/wiki/Instagram",
      "title": "Instagram - Wikipedia"
    },
    {
      "description": "2 days ago - Instagram. June 2020. Online influencers under fire for blacking ...",
      "link": "https://www.theguardian.com/technology/instagram",
      "title": "Instagram | Technology | The Guardian"
    },
    {
      "description": "1 day ago - Then, on May 25, George Floyd was killed in police custody in Minneapolis, sparking protests around the country. Instagram had already been a ...",
      "link": "https://www.nytimes.com/2020/06/11/arts/design/art-accounts-to-follow-on-instagram.html",
      "title": "Five Art Accounts to Follow on Instagram Now - The New York ..."
    },
    {
      "description": "May 20, 2020 - Instagram is testing a feature that allows Insta users to share their live streams directly to IGTV as soon as the broadcast is over. These lives don't ...",
      "link": "https://adespresso.com/blog/instagram-updates-you-need-to-make/",
      "title": "Top Instagram Updates in 2020 - May Edition - AdEspresso"
    },
    {
      "description": "Learn how to create captivating visuals, grow your following, and drive engagement on Instagram.",
      "link": "https://www.hubspot.com/instagram-marketing",
      "title": "Instagram Marketing: The Ultimate Guide - HubSpot"
    },
    {
      "description": "2 days ago - It's a nice tool to diversify your Instagram feed and engage more of your followers - and it can, indeed, add a “wow” factor to your social marketing.",
      "link": "https://www.socialmediatoday.com/news/5-tools-to-boost-your-instagram-marketing-efforts-in-2020/579612/",
      "title": "5 Tools to Boost Your Instagram Marketing Efforts in 2020 ..."
    },
    {
      "description": "Learn more about Instagram brand resources and download the Instagram logos, images, screenshots and more you need for your project.",
      "link": "https://instagram-brand.com/",
      "title": "Instagram Brand Resources"
    },
    {
      "description": "Jan 9, 2019 - Everything you need to know about using Instagram for business—from setting up your account to creating a winning strategy.",
      "link": "https://blog.hootsuite.com/how-to-use-instagram-for-business/",
      "title": "How to Use Instagram for Business: A Simple 6-Step Guide"
    },
    {
      "description": "1 day ago - Actor Keegan Allen and influencer Olivia Jade are among two popular Instagram accounts that used the \"BLM — Donate Now\" filter.",
      "link": "https://www.insider.com/influencers-promote-black-lives-matter-donation-instagram-ar-filter-2020-6",
      "title": "Influencers promote Black Lives Matter donation Instagram AR ..."
    },
    {
      "description": "8 hours ago - If you scroll all the way down to Kylie Jenner's first Instagram posts, you'll see that she, too, once fell victim to the duck face selfie and sepia filter ...",
      "link": "https://www.yahoo.com/lifestyle/kylie-jenner-very-first-instagram-154018364.html",
      "title": "Kylie Jenner's first Instagram posts are unbelievably normal ..."
    },
    {
      "description": "Nicki Minaj CRUSHES Instagram With New Bangin' Booty Photos With Tekashi 6ix9ine!! Instagram. Jun 11, 2020 at 20:59 pm UTC By Mike Walters · Nicki Minaj ...",
      "link": "https://theblast.com/c/nicki-minaj-tekashi-6ix9ine-69-trollz-photos-video-smoking-hot-pictures-instagram-rainbow-wig",
      "title": "Nicki Minaj CRUSHES Instagram With New Bangin' Booty ..."
    },
    {
      "description": "Everything you need to know about using Instagram Stories. From posting and scheduling stories, using stickers, and everything in-between.",
      "link": "https://buffer.com/library/instagram-stories/",
      "title": "Instagram Stories: The Complete Guide to Creating Standout ..."
    },
    {
      "description": "1 day ago - Instagram has a bad reputation for negatively influencing the way people see themselves. But a new study shows that its influence can be ...",
      "link": "https://www.ecowatch.com/exercise-study-instagram-2646169143.html",
      "title": "Instagram Gets Couch Potatoes Up and Running, Study Says ..."
    },
    {
      "description": "3 days ago - Instagram lets you add a call to action (CTA) to your ads that goes to a landing page, but you can only add a link to one page. This is why if you're ...",
      "link": "https://www.socialmediaexaminer.com/how-to-improve-instagram-video-ads-5-tips/",
      "title": "How to Improve Your Instagram Video Ads: 5 Tips : Social ..."
    },
    {
      "description": "Instagram allows users to edit and upload photos and short videos through a mobile app. Users can add a caption to each of their posts and use hashtags and ...",
      "link": "https://searchcio.techtarget.com/definition/Instagram",
      "title": "What is Instagram? - Definition from WhatIs.com - SearchCIO"
    },
    {
      "description": "Grow your Instagram and Facebook presence with exclusive insights and best-in-class management tools for your team. Start a 14-day Free Trial.",
      "link": "https://pro.iconosquare.com/",
      "title": "Iconosquare - Instagram & Facebook Analytics and ..."
    },
    {
      "description": "Save Time by Scheduling Your Instagram Posts Ahead of Time. Manage Multiple Accounts, Schedule Video, Reposting, Analytics & Uploading Tools.",
      "link": "https://later.com/",
      "title": "Later: #1 Instagram Scheduler & Social Media Platform"
    },
    {
      "description": "1 day ago - Benafsha Soonawala says that her recent nude picture was removed by Instagram. Check out her latest post.",
      "link": "https://www.hindustantimes.com/tv/benafsha-soonawala-says-instagram-removed-her-topless-pic-they-couldn-t-take-such-extra-hotness/story-ldS0SdnqMwacVxRCK5zfnO.html",
      "title": "Benafsha Soonawala says Instagram removed her topless pic ..."
    },
    {
      "description": "May 27, 2020 - Ads will start showing up on Instagram's IGTV product as the company begins working with creators like Lele Pons and Adam Waheed as well ...",
      "link": "https://www.theverge.com/2020/5/27/21271009/instagram-ads-igtv-live-badges-test-update-creators",
      "title": "Instagram will share revenue with creators for the first time ..."
    },
    {
      "description": "Dec 3, 2019 - How many people use Instagram? In June 2018, Instagram had reached one billion monthly active users, up from 800 million in September ...",
      "link": "https://www.statista.com/statistics/253577/number-of-monthly-active-instagram-users/",
      "title": "• Instagram: active users 2018 | Statista"
    },
    {
      "description": "Why You Should Follow Them: For fun artwork, puns, and extremely important conversations. 3. ZHK DESIGNS. Instagram. View this photo on ...",
      "link": "https://www.buzzfeed.com/sumedha_bharpilania/21-desi-illustrators-you-need-to-follow-on-instagram-right",
      "title": "21 Desi Artists You Absolutely Need To Follow On Instagram"
    },
    {
      "description": "Jun 4, 2020 - Instagram does not provide users of its embedding API a copyright license to display embedded images on other websites, the company said in ...",
      "link": "https://arstechnica.com/tech-policy/2020/06/instagram-just-threw-users-of-its-embedding-api-under-the-bus/",
      "title": "Instagram just threw users of its embedding API under the bus ..."
    },
    {
      "description": "10 hours ago - Black Owned Tour” is an Instagram account dedicated to highlighting local black-owned businesses.",
      "link": "https://www.10tv.com/article/news/local/instagram-account-shines-light-on-local-black-owned-businesses/530-308237a8-958e-4a4d-b7c7-7ab2949ee935",
      "title": "Instagram account shines light on local black-owned businesses"
    },
    {
      "description": "Jun 3, 2020 - This extension better than a mobile version of Instagram! View and upload IG Story and other functions in your browser.",
      "link": "https://chrome.google.com/webstore/detail/web-for-instagram/bonieeblbnamfclndbgnhblogabjijbp?hl=en-US",
      "title": "Web for Instagram™ - Google Chrome"
    },
    {
      "description": "Try our new tools for Instagram™: download photo, video and stories, view Live, mass download, direct message, upload photo.",
      "link": "https://chrome.google.com/webstore/detail/downloader-for-instagram/olkpikmlhoaojbbmmpejnimiglejmboe?hl=en",
      "title": "Downloader for Instagram™ + Direct Message - Google Chrome"
    },
    {
      "description": "Feb 26, 2016 - Download this app from Microsoft Store for Windows 10. See screenshots, read the latest customer reviews, and compare ratings for Instagram.",
      "link": "https://www.microsoft.com/en-us/p/instagram/9nblggh5l9xt",
      "title": "Get Instagram - Microsoft Store"
    },
    {
      "description": "The 6 best #GolfWRX photos on Instagram today (6.11.20). Published. 13 hours ago. on. Jun 11, 2020. By. Gianni Magliocco. Share; Tweet. In this segment ...",
      "link": "http://www.golfwrx.com/614302/the-6-best-golfwrx-photos-on-instagram-today-6-11-20/",
      "title": "The 6 best #GolfWRX photos on Instagram today (6.11.20 ..."
    },
    {
      "description": "May 19, 2020 - Starting today, you'll be able to browse and buy products directly from a business' Facebook Page or Instagram profile. Both Facebook and ...",
      "link": "https://techcrunch.com/2020/05/19/facebook-shops/",
      "title": "Facebook and Instagram roll out Shops, turning business ..."
    },
    {
      "description": "3 days ago - On Wednesday, 50 white celebrity women will hand over their Instagram accounts to 50 black women for the day to foster dialogue and reach ...",
      "link": "https://www.forbes.com/sites/martyswant/2020/06/09/how-bozoma-saint-john-is-amplifying-black-voices-through-white-celebrities-instagram-accounts/",
      "title": "How Bozoma Saint John Is Amplifying Black Voices Through ..."
    },
    {
      "description": "Instagram photo, video, and IGTV downloader - Free, online, and one-click download.",
      "link": "https://downloadgram.com/",
      "title": "DownloadGram - Instagram photo, video and IGTV ..."
    },
    {
      "description": "Feb 18, 2020 - The Instagram Money Calculator estimates earnings for Instagram Influencers. The Instagram Engagement Rate Calculator is a quick way to ...",
      "link": "https://influencermarketinghub.com/instagram-money-calculator/",
      "title": "Instagram Money Calculator (Instagram Influencer ..."
    },
    {
      "description": "BBC News, 1 May. https://www.bbc.com/news/world-africa-36132482 Zappavigna, M. (2016). 'Social media photography: Construing subjectivity in Instagram ...",
      "link": "https://books.google.com/books?id=_QHMDwAAQBAJ&pg=PT208&lpg=PT208&dq=instagram&source=bl&ots=kx1k9_bjvs&sig=ACfU3U28VuLB9EfcIJIJs-Dykyl6zC_Adw&hl=en&sa=X&ved=2ahUKEwjt3fTus_3pAhXsgnIEHTjKBZcQ6AEwRHoECG0QAQ",
      "title": "Instagram: Visual Social Media Cultures - Google Books Result"
    },
    {
      "description": "To log in to your Instagram account and order products in your store, you must now have an Instagram Business account associated with a Facebook Page.",
      "link": "https://www.hivency.com/login-instagram-account/",
      "title": "Login Instagram Account | Hivency"
    },
    {
      "description": "IN THIS CHAPTER Finding Instagram apps for your device or computer Deploying Instagram apps on Windows and Mac computers Installing Instagram apps on ...",
      "link": "https://books.google.com/books?id=9JJFDwAAQBAJ&pg=PT16&lpg=PT16&dq=instagram&source=bl&ots=dvTKF3C37q&sig=ACfU3U0L59-z1pbR2BHuJlOafe3G5SjXcw&hl=en&sa=X&ved=2ahUKEwjt3fTus_3pAhXsgnIEHTjKBZcQ6AEwRnoECG8QAQ",
      "title": "Instagram For Business For Dummies - Google Books Result"
    },
    {
      "description": "Download Instagram followers, comments and likes to excel and Google Sheets ... 4 May 2020 Type up your Instagram bio and copy and paste your favorite font ...",
      "link": "http://vistaballoon.com/o51fbzs/how-to-copy-comments-from-instagram.html",
      "title": "How to copy comments from instagram"
    },
    {
      "description": "Apr 12, 2020 - The following tips can help you make the best out of your own Instagram experience so you can grow your followers and increase engagement.",
      "link": "https://www.lifewire.com/instagram-tips-for-beginners-3485872",
      "title": "11 Instagram Tips for Beginners - Lifewire"
    },
    {
      "description": "23 hours ago - Vanessa Bryant got tattoos to honor her husband Kobe and daughter Gianna in February, according to her tattoo artist's Instagram . TMZ Sports ...",
      "link": "https://bleacherreport.com/articles/2895859-vanessa-bryant-reveals-tattoos-honoring-kobe-gianna-on-instagram",
      "title": "Vanessa Bryant Reveals Tattoos Honoring Kobe, Gianna on ..."
    },
    {
      "description": "1 day ago - Suzanne Somers, 73, reunites with her lookalike granddaughter Violet Somers, 22, in new Instagram video. By Sarah Sotoodeh For ...",
      "link": "https://www.dailymail.co.uk/tvshowbiz/article-8410969/Suzanne-Somers-reunites-lookalike-granddaughter-Violet-Somers-new-Instagram-video.html",
      "title": "Suzanne Somers reunites with her lookalike granddaughter ..."
    },
    {
      "description": "10 hours ago - @fairybonesmusic. Part of what makes Fairy Bones' Instagram feed fun is because you're witnessing a band become stars right before your eyes, ...",
      "link": "https://www.phoenixnewtimes.com/music/best-phoenix-music-instagram-accounts-11406390",
      "title": "20 Best Valley Music Instagram Accounts | Phoenix New Times"
    },
    {
      "description": "You can generate unlimited Likes/Followers for Instagram. com is the best instagram auto liker!Here, you'll find instagram auto liker, instagram auto followers.",
      "link": "http://brittocharette.com/x77c/free-unlimited-likes-on-instagram.html",
      "title": "Free unlimited likes on instagram - Britto Charette"
    },
    {
      "description": "Will The Protests Change Instagram for Good? Maybe. Probably Not. by Andrea Whittle. June 12, 2020 1:01 pm. Cindy Sherman - December 2017.",
      "link": "https://www.wmagazine.com/story/instagram-armchair-activism-influencers-protests/",
      "title": "Is This The End Of Instagram As We Know It? | W Magazine ..."
    },
    {
      "description": "Apr 24, 2018 - Instagram's Snapchat-like feature lets you create sequences of photos and videos that expire after a day. Now with type mode in Stories!",
      "link": "https://www.cnet.com/how-to/how-to-use-instagram-stories/",
      "title": "Instagram Stories: Everything you need to know - CNET"
    },
    {
      "description": "Download Followers Track for Instagram! and enjoy it on your iPhone, iPad, and iPod touch. 6 Software is available for free download: Checker Version 4.",
      "link": "http://marinermedia.com/ik3jcdgzk/instagram-checker-download.html",
      "title": "Instagram checker download - Mariner Media"
    },
    {
      "description": "5 hours ago - Note: These screenshots were captured in the Instagram application on iOS. Step 1: Once you've taken or imported a video in Stories, tap the ...",
      "link": "https://www.adweek.com/digital/instagram-heres-how-to-use-the-sound-on-sticker-in-stories/",
      "title": "Instagram: Here's How to Use the Sound On Sticker in Stories ..."
    },
    {
      "description": "7 hours ago - Instagram has always been an accessible way to armchair travel. During the COVID-19 pandemic, the platform has offered a view of ...",
      "link": "https://www.artsy.net/article/artsy-editorial-7-curators-instagram-provide-access-museums-quarantine",
      "title": "7 Curators Using Instagram to Provide Access to Museums ..."
    },
    {
      "description": "2019 Instagram music ใน story ทำไมของผมใช้ได้ครับ. And 80% of Instagram users come from outside of the United States! I guess a picture really is worth a ...",
      "link": "http://goodcheer.org/bgf7/instagram-music.html",
      "title": "Instagram music - Good Cheer Food Bank"
    },
    {
      "description": "For less than $70, you can get 10,000 Instagram followers! That's enough to start elbowing your way into this industry. It's possible and fairly simple to go live on ...",
      "link": "http://gynecologysurgeons.com/mgvnj/merge-instagram-followers.html",
      "title": "Merge instagram followers"
    },
    {
      "description": "7 hours ago - Okay, not really, but back when Instagram was just a few years old, they definitely used it like us. Case in point: If you scroll all the way down to ...",
      "link": "https://www.intheknow.com/2020/06/12/kylie-jenners-very-first-instagram-posts-are-just-as-basic-as-everyone-elses/",
      "title": "Kylie Jenner's very first Instagram posts are just as basic as ..."
    },
    {
      "description": "row2k Features. row2k features > row2k Exclusives. InstaRowing. This Week's Best of Rowing on Instagram 6/12/2020. June 12, 2020. Erik Dresser, row2k.com.",
      "link": "https://www.row2k.com/features/4017/This-Week-s-Best-of-Rowing-on-Instagram-6-12-2020/",
      "title": "This Week's Best of Rowing on Instagram 6/12/2020 - Row2k"
    },
    {
      "description": "9 hours ago - Yuzvendra Chahal took to Instagram on Friday to post a video of him bowling an impressive leg-spinner to knock over New Zealand batsman ...",
      "link": "https://sports.ndtv.com/cricket/yuzvendra-chahal-trolls-uncle-chris-gayle-praises-kuldeep-yadav-on-instagram-2245380",
      "title": "Yuzvendra Chahal Trolls \"Uncle\" Chris Gayle, Praises ..."
    },
    {
      "description": "9 hours ago - Thanks to her edgy social media presence, this model, photographer, blogger, and painter has become a true Instagram sensation with 4.5 ...",
      "link": "https://www.boredpanda.com/weird-instagram-photography-digital-art-ellen-sheidlin/",
      "title": "This Russian Artist Gained 4.5M Followers On Instagram ..."
    },
    {
      "description": "Open the instagram profile of the user whose profile picture you want to download. ... To Download instagram photos just enter the URL of instagram photo in ...",
      "link": "http://rhodeislanddentalmn.com/gc3/instagram-profile-download-free.html",
      "title": "Instagram profile download free - Rhode Island Dental"
    },
    {
      "description": "1 day ago - Elizabeth Hurley posed in the bath with her arms in the air to mark her 55th birthday on InstagramCredit: Instagram. And other stars are striking ...",
      "link": "https://www.thesun.co.uk/news/11843276/celebrity-instagram-poses-hidden-meanings/",
      "title": "celebrities' favourite Instagram poses and the ... - The Sun"
    },
    {
      "description": "21 hours ago - Bucs TE Rob Gronkowski bid farewell to his hairy companion Mr. Stache today on Instagram.",
      "link": "https://bucswire.usatoday.com/2020/06/11/gronk-bids-farewell-to-mr-stache-on-instagram/",
      "title": "Gronk bids farewell to Mr. Stache on Instagram - Bucs Wire"
    },
    {
      "description": "100k free Instagram likes and free Instagram followers! Home Free Instagram Likes And Followers Welcome to FREEGramLikes. The free likes will increase your ...",
      "link": "http://wafels.be/xmpj7/how-to-get-5000-followers-on-instagram.html",
      "title": "How to get 5000 followers on instagram - Wafels"
    },
    {
      "description": "17 hours ago - Need some training inspiration? You'll find workouts for all levels on our Instagram page.",
      "link": "https://www.coachmag.co.uk/home-workouts/8596/follow-coach-on-instagram-for-video-workouts-from-top-pts",
      "title": "Follow Coach On Instagram For Video Workouts From Top PTs"
    },
    {
      "description": "7 hours ago - OAKLAND — Federal prosecutors have charged an Alameda County man with posing as a 14-year-old girl on Instagram in order to lure boys ...",
      "link": "https://www.mercurynews.com/feds-alameda-man-posed-as-teen-girl-on-instagram-to-lure-boys",
      "title": "Feds: Alameda man posed as teen girl on Instagram to lure boys"
    },
    {
      "description": "In this post, I share the step-by-step instructions on how to create a new location on Instagram. In online mode, the App will use cell towers to determine the ...",
      "link": "http://salmonriverbrewery.com/qzdrls/does-instagram-track-location.html",
      "title": "Does instagram track location - Salmon River Brewery"
    },
    {
      "description": "5 hours ago - In the Zoom segment leaked to Instagram on June 10, Vaksman says, “Because most of the trouble coming from where? From black people.",
      "link": "https://qns.com/story/2020/06/12/st-johns-university-fires-coach-after-racist-comments-leak-on-instagram/",
      "title": "St. John's University fires coach after racist comments leak on ..."
    },
    {
      "description": "46 mins ago - The app has a usability issue for hearing-impaired people and doesn't caption videos. In response, at least one Instagram account is manually ...",
      "link": "https://www.capradio.org/articles/2020/06/12/volunteers-add-captions-to-black-lives-matter-instagram-videos-to-help-hard-of-hearing-community/",
      "title": "Volunteers Add Captions To Black Lives Matter Instagram ..."
    },
    {
      "description": "8 hours ago - This list of 102 Black makers, crafters, designers, gardeners, and musicians will help enrich your Instagram feed and support Black-owned ...",
      "link": "https://www.countryliving.com/life/inspirational-stories/a32791453/black-instagram-accounts-interior-designers-crafters/",
      "title": "102 Black Instagram Accounts to Follow for Home Design ..."
    },
    {
      "description": "5 hours ago - In several Instagram posts, some dating back to at least 2016, Realtor Ryan Jones used language that many online found offensive. In once ...",
      "link": "https://www.baltimoresun.com/maryland/harford/aegis/cng-ag-racist-realtor-20200612-possnm52rfh7je43f6jlg7pq7m-story.html",
      "title": "Harford real estate agent under fire for racially insensitive ..."
    },
    {
      "description": "Jul 3, 2019 - Want to find the best Instagram captions? Whether you like cool captions or need selfie quotes for your photos, you'll find a mega list of captions ...",
      "link": "https://www.oberlo.com/blog/instagram-captions",
      "title": "300+ Best Instagram Captions for Your Photos & Selfies - Oberlo"
    },
    {
      "description": "Mar 24, 2020 - Instagram has launched a new feature called Co-Watching that allows users to share photos and videos over video chat to watch together.",
      "link": "https://markets.businessinsider.com/news/stocks/instagram-co-watching-feature-group-video-calling-sharing-posts-coronavirus-2020-3-1029027937",
      "title": "Instagram sped up rollout on its new feature that lets friends ..."
    },
    {
      "description": "2 days ago - PRINCE CHARLES last year upped his social media game and posted his first ever photograph to Instagram to commemorate the creation of ...",
      "link": "https://www.express.co.uk/news/royal/1294044/prince-charles-latest-royal-family-news-instagram-social-media-queen-elizabeth-spt",
      "title": "Royal landmark: Touching message in Prince Charles' first ..."
    },
    {
      "description": "marchroute-instagram-1024x1024.png. Privacy Policy | Log In. © American Federation of State, County and Municipal Employees, AFL–CIO.",
      "link": "https://wfse.org/file/23503",
      "title": "marchroute-instagram-1024x1024.png | AFSCME at Work"
    },
    {
      "description": "Instagram users can set their privacy settings such that their posted photos and videos are available only to their own followers and require approval from the user ...",
      "link": "http://acumen.lib.ua.edu/content/u0015/0000001/0002349/u0015_0000001_0002349.pdf",
      "title": "INDIVIDUAL, TECHNOLOGICAL, SOCIO ... - Acumen"
    },
    {
      "description": "8 Nov 2019 — Instagram. “Rethink forgotten and abandoned places; places that have the potential of becoming something better. Refine and transform rather ...",
      "link": "https://kjellandersjoberg.se/journal/posts/instagram_2172559166213048498_1387743716/74914119_126573782092340_6580899078930915549_n/",
      "title": "Instagram post of kjellandersjoberg on 2019-11-08 10:34:16 ..."
    },
    {
      "description": "Jul 1, 2016 - This thesis aims to find out how. Leeuwarden and Amsterdam, two cities in the Netherlands, are utilising Instagram by using affordances ...",
      "link": "https://www.diva-portal.org/smash/get/diva2:1038452/FULLTEXT01.pdf",
      "title": "City branding on Instagram: DMOs and their usage of ... - DiVA"
    },
    {
      "description": "May 24, 2018 - To achieve this aim a quantitative content analysis of prominent Swedish politicians' Instagram posts (n=1641) was conducted. The findings show.",
      "link": "http://lup.lub.lu.se/student-papers/record/8945953/file/8945962.pdf",
      "title": "Personalisation on Instagram - Lund University Publications"
    },
    {
      "description": "Nov 21, 2016 - Instagram is rolling out new live video and messaging features with a temporary twist.",
      "link": "https://www.techradar.com/in/news/instagram-has-launched-its-own-take-on-live-video-and-messaging",
      "title": "Instagram has launched its own take on Live Video and ..."
    },
    {
      "description": "“A comparison of Facebook and Instagram concerning emotions regarding, and identification with an automatically generated autobiography”. Deborah Klink.",
      "link": "http://essay.utwente.nl/78313/1/Klink%20Deborah_BA_PSY.pdf",
      "title": "Bachelor Thesis “A comparison of Facebook and Instagram ..."
    },
    {
      "description": "Feb 21, 2018 - Styling for Instagram by Leela Cyd, 9782888933502, available at Book Depository with free delivery worldwide.",
      "link": "https://www.bookdepository.com/Styling-for-Instagram-Leela-Cyd/9782888933502",
      "title": "Styling for Instagram : Leela Cyd : 9782888933502"
    },
    {
      "description": "Next related hashtags on Instagram used with word muscleup are fit training gymnastics strong strength streetworkout shredded fitfam pullups abs ...",
      "link": "https://www.tagsfinder.com/en-us/related/muscleup/",
      "title": "#muscleup and related hashtags on Instagram - TagsFinder.com"
    },
    {
      "description": "1 day ago - The German company apologized last month for the ad promoting its new Golf 8 and removed it from its official Instagram page. The world's ...",
      "link": "https://ktla.com/news/nationworld/volkswagen-resists-firing-responsible-employees-despite-racist-instagram-ad/",
      "title": "Volkswagen resists firing responsible employees despite ..."
    },
    {
      "description": "Hangout this or that Instagram Story Templates TEMPLATE STORIES DO INSTAGRAM MINHA QUARENTENA EM GIFS bsf list questions snapchat #bsf #list # ...",
      "link": "https://www.pinterest.com/amandairyn/instagram-story-template/",
      "title": "16 Best Instagram Story Template images ... - Pinterest"
    },
    {
      "description": "Instagram is the most popular social media platform for influencer marketing (Mohsin, 2019). The platform is mostly used by influencers and consumers who ...",
      "link": "http://arno.uvt.nl/show.cgi?fid=150748",
      "title": "Product placement on Instagram - University of Tilburg"
    },
    {
      "description": "Apr 17, 2019 - Tehran, April 17, IRNA - Iran's Foreign Ministry spokesman condemned the Instagram social network in blocking accounts of some of the ...",
      "link": "https://en.irna.ir/news/83282774/Instagram-s-measure-shows-fragility-of-Western-freedom-Spox",
      "title": "Instagram's measure shows fragility of Western freedom: Spox ..."
    },
    {
      "description": "Instagram Wall § - Benjanin Ball La rede det to aoh - Ency King FRANCIS BALL ' S DESCENDANTS . SCENDANTS . 21 . 21 . fully , 96 years of age . Children : 3 ...",
      "link": "https://books.google.com/books?id=n6wwAAAAMAAJ&pg=PA21&lpg=PA21&dq=instagram&source=bl&ots=jGNZTJ2MuK&sig=ACfU3U2peJK2j-4F3MLjDyRfWMWBZEuZGQ&hl=en&sa=X&ved=2ahUKEwjt3fTus_3pAhXsgnIEHTjKBZcQ6AEwc3oECHEQAQ",
      "title": "Francis Ball's Descendants: Or, The West Springfield Ball ..."
    },
    {
      "description": "Feb 22, 2019 - refer to Instagram posts building upon or reproducing existing copyrighted works. The extent to which UGC must be original to attract copyright ...",
      "link": "https://heinonline.org/hol-cgi-bin/get_pdf.cgi?handle=hein.journals/saclj31&section=10",
      "title": "FAIR USE ON INSTAGRAM Transformative Self ... - HeinOnline"
    },
    {
      "description": "99 111 total followers. Source: Instagram. Created with Highcharts 5.0.14 Followers Jan 24 Jan 26 Jan 28 Jan 30 0 60,000 120,000. Days Weeks ...",
      "link": "https://annons.di.se/en-no/influencers/sophia-anderberg-3710/stats/instagram-6066",
      "title": "Instagram – Sophia Anderberg Statistics - Dagens Industri"
    },
    {
      "description": "Source: Instagram. Created with Highcharts 5.0.14 Followers Apr … Apr 22 Apr 24 Apr 26 Apr 28 Apr 30 May 2 May 4 May 6 May 8 May 10 May 12 May 14 May ...",
      "link": "http://advertise.bonniermag.se/en/influencers/emily-slotte-2630/stats/instagram-5443",
      "title": "Instagram – Emily Slotte Statistics"
    },
    {
      "description": "Aug 2, 2016 - He is the first prime minister of the Instagram age. —Andrew-Gee (2016). While Barack Obama partly transformed dynamics of digital politicking in ...",
      "link": "https://journals.sagepub.com/doi/pdf/10.1177/0002764217744838",
      "title": "Justin Trudeau, Instagram, and Celebrity Politics - SAGE ..."
    },
    {
      "description": "Jun 29, 2017 - Instagram Download. Instagram ist eine kostenlose App für euer Smartphone – egal ob Android oder iOS. Mit diesen Links könnt ihr Instagram ...",
      "link": "https://www.giga.de/downloads/instagram/",
      "title": "Instagram - Giga"
    },
    {
      "description": "INDEX WORDS: admissions, advertising diversity, enrollment management, higher education, Facebook, Instagram, marketing, social media ...",
      "link": "http://search.proquest.com/openview/89d5556d32104dfcb0bd10ca744824e5/1.pdf?pq-origsite=gscholar&cbl=18750&diss=y",
      "title": "HIGHER EDUCATION PRIORITIES REFLECTED THROUGH ..."
    },
    {
      "description": "Keywords: Online food photo, Instagram food photo, Intent to visit restaurant,. Perception on price of food, Experimental study. Ref. code: 25616002040811UKW ...",
      "link": "http://ethesisarchive.library.tu.ac.th/thesis/2018/TU_2018_6002040811_10316_9982.pdf",
      "title": "how online food photos on instagram influence ... - TU e-Thesis"
    },
    {
      "description": "Mar 23, 2015 - Instagram, LinkedIn, Facebook and Google+, where more personal information was leaked. The tools used are discussed, the results of the ...",
      "link": "https://www.mdpi.com/1999-5903/7/1/67/pdf",
      "title": "Download PDF - MDPI"
    },
    {
      "description": "... in a newspaper or in handbills , at least one month previous to the day of exhibition . - instagram : Fifth . All articles offered for premiums must be owned 16.",
      "link": "https://books.google.com/books?id=_ulMAAAAYAAJ&pg=PA16&lpg=PA16&dq=instagram&source=bl&ots=Png5FuqqZQ&sig=ACfU3U0jNcpVhT_oXqjbGx_zmB0honn_lA&hl=en&sa=X&ved=2ahUKEwjt3fTus_3pAhXsgnIEHTjKBZcQ6AEwfHoECHIQAQ",
      "title": "Annual Report of the Indiana State Board of Agriculture"
    },
    {
      "description": "que en un entorn ace 5 a IN I - Puiululla A r e na instagram Phim TORTEMS y aura leygull dhe s hume selon vin ro \" ; W HERE was once an honest gentleman ...",
      "link": "https://books.google.com/books?id=IP4BAAAAQAAJ&pg=PA61&lpg=PA61&dq=instagram&source=bl&ots=4jV1WgChNM&sig=ACfU3U0mJZ807miNyU33EV3XjibRhKOT6g&hl=en&sa=X&ved=2ahUKEwjt3fTus_3pAhXsgnIEHTjKBZcQ6AEwfXoECHQQAQ",
      "title": "The old fairy tales [retold]. - Page 61 - Google Books Result"
    },
    {
      "description": "Slate Run , Snow Shoe , Stone , . . . . . . . . . . . . . fontos a : 58 n Forow the ori ca serbest CONAS OO A DONOS X o SPOR OT * * * 200 I ' m going on instagram : .",
      "link": "https://books.google.com/books?id=XL4WAAAAYAAJ&pg=PA61&lpg=PA61&dq=instagram&source=bl&ots=uvgXITH7Qy&sig=ACfU3U1lFKEffyOIa6D3xQGpqCfvBJAXDA&hl=en&sa=X&ved=2ahUKEwjt3fTus_3pAhXsgnIEHTjKBZcQ6AEwfnoECHMQAQ",
      "title": "Report of the Department of Forestry of the State of ..."
    }
  ],
  "total": 93
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="search-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|404|Not Found|Not Found|None|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|
|429|Too Many Requests|Rate limit exceeded|None|

<h3 id="search-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|answer|string|false|none|none|
|results|[object]|false|none|none|
|» description|string|false|none|none|
|» link|string|false|none|none|
|» title|string|false|none|none|
|total|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apikey
</aside>

## SERP

<a id="opIdserp"></a>

> Code samples

```bash
curl https://example.com/v1/serp/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "apikey: ${API_KEY}" \
  -d '{
    "query": "string",
    "website": "string"
  }'
```

`POST /v1/serp/`

Perform Google Search and search for website in Search Engine Results Pages (SERP)

Parameters
----------
query : the string query to perform search. supports advance queries. Check out https://moz.com/blog/the-ultimate-guide-to-the-google-search-parameters guide for formatting, it is recommended to set the query `&num=100`

Returns
-------
json: a list of results with the query, website, searched_results, and position. json["position"] will be set to -1 if website is not found in results

> Body parameter

```json
{
  "query": "string",
  "website": "string"
}
```

<h3 id="serp-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SerpData](#schemaserpdata)|true|none|
|» query|body|string|true|none|
|» website|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "poisition": "-1",
  "query": "q=google&num=100",
  "searched_results": "100",
  "website": "https://www.exmaple.com"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="serp-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|404|Not Found|Not Found|None|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|
|429|Too Many Requests|Rate limit exceeded|None|

<h3 id="serp-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|position|integer|false|none|none|
|query|string|false|none|none|
|searched_results|integer|false|none|none|
|website|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apikey
</aside>

# Schemas

<h2 id="tocS_HTTPValidationError">HTTPValidationError</h2>
<!-- backwards compatibility -->
<a id="schemahttpvalidationerror"></a>
<a id="schema_HTTPValidationError"></a>
<a id="tocShttpvalidationerror"></a>
<a id="tocshttpvalidationerror"></a>

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|[[ValidationError](#schemavalidationerror)]|false|none|none|

<h2 id="tocS_SerpData">SerpData</h2>
<!-- backwards compatibility -->
<a id="schemaserpdata"></a>
<a id="schema_SerpData"></a>
<a id="tocSserpdata"></a>
<a id="tocsserpdata"></a>

```json
{
  "query": "string",
  "website": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|query|string|true|none|none|
|website|string|true|none|none|

<h2 id="tocS_ValidationError">ValidationError</h2>
<!-- backwards compatibility -->
<a id="schemavalidationerror"></a>
<a id="schema_ValidationError"></a>
<a id="tocSvalidationerror"></a>
<a id="tocsvalidationerror"></a>

```json
{
  "loc": [
    "string"
  ],
  "msg": "string",
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|loc|[string]|true|none|none|
|msg|string|true|none|none|
|type|string|true|none|none|
