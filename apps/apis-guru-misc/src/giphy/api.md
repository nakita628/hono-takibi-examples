<h1 id="giphy-api">Giphy API v1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Giphy API

Base URLs:

* <a href="https://api.giphy.com/v1">https://api.giphy.com/v1</a>

<a href="https://developers.giphy.com/">Terms of service</a>
Email: <a href="mailto:support@giphy.com">support@giphy.com</a> 

<a href="https://developers.giphy.com/docs/">Official Giphy Documentation</a>

# Authentication

* API Key (api_key)
    - Parameter Name: **api_key**, in: query.

<h1 id="giphy-api-gifs">gifs</h1>

## Get GIFs by ID

<a id="opIdgetGifsById"></a>

> Code samples

```bash
curl "https://example.com/gifs?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /gifs`

A multiget version of the get GIF by ID endpoint.


<h3 id="get-gifs-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ids|query|string|false|Filters results by specified GIF IDs, separated by commas.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "bitly_url": "http://gph.is/1gsWDcL",
      "content_url": "string",
      "create_datetime": "2013-08-01 12:41:48",
      "embded_url": "http://giphy.com/embed/YsTs5ltWtEhnq",
      "featured_tags": [
        "string"
      ],
      "id": "YsTs5ltWtEhnq",
      "images": {
        "downsized": {
          "frames": "15",
          "height": "200",
          "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
          "mp4_size": "25123",
          "size": "32381",
          "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
          "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
          "webp_size": "12321",
          "width": "320"
        },
        "downsized_large": {
          "frames": "15",
          "height": "200",
          "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
          "mp4_size": "25123",
          "size": "32381",
          "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
          "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
          "webp_size": "12321",
          "width": "320"
        },
        "downsized_medium": {
          "frames": "15",
          "height": "200",
          "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
          "mp4_size": "25123",
          "size": "32381",
          "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
          "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
          "webp_size": "12321",
          "width": "320"
        },
        "downsized_small": {
          "frames": "15",
          "height": "200",
          "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
          "mp4_size": "25123",
          "size": "32381",
          "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
          "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
          "webp_size": "12321",
          "width": "320"
        },
        "downsized_still": {
          "frames": "15",
          "height": "200",
          "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
          "mp4_size": "25123",
          "size": "32381",
          "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
          "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
          "webp_size": "12321",
          "width": "320"
        },
        "fixed_height": {
          "frames": "15",
          "height": "200",
          "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
          "mp4_size": "25123",
          "size": "32381",
          "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
          "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
          "webp_size": "12321",
          "width": "320"
        },
        "fixed_height_downsampled": {
          "frames": "15",
          "height": "200",
          "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
          "mp4_size": "25123",
          "size": "32381",
          "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
          "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
          "webp_size": "12321",
          "width": "320"
        },
        "fixed_height_small": {
          "frames": "15",
          "height": "200",
          "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
          "mp4_size": "25123",
          "size": "32381",
          "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
          "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
          "webp_size": "12321",
          "width": "320"
        },
        "fixed_height_small_still": {
          "frames": "15",
          "height": "200",
          "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
          "mp4_size": "25123",
          "size": "32381",
          "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
          "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
          "webp_size": "12321",
          "width": "320"
        },
        "fixed_height_still": {
          "frames": "15",
          "height": "200",
          "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
          "mp4_size": "25123",
          "size": "32381",
          "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
          "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
          "webp_size": "12321",
          "width": "320"
        },
        "fixed_width": {
          "frames": "15",
          "height": "200",
          "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
          "mp4_size": "25123",
          "size": "32381",
          "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
          "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
          "webp_size": "12321",
          "width": "320"
        },
        "fixed_width_downsampled": {
          "frames": "15",
          "height": "200",
          "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
          "mp4_size": "25123",
          "size": "32381",
          "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
          "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
          "webp_size": "12321",
          "width": "320"
        },
        "fixed_width_small": {
          "frames": "15",
          "height": "200",
          "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
          "mp4_size": "25123",
          "size": "32381",
          "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
          "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
          "webp_size": "12321",
          "width": "320"
        },
        "fixed_width_small_still": {
          "frames": "15",
          "height": "200",
          "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
          "mp4_size": "25123",
          "size": "32381",
          "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
          "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
          "webp_size": "12321",
          "width": "320"
        },
        "fixed_width_still": {
          "frames": "15",
          "height": "200",
          "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
          "mp4_size": "25123",
          "size": "32381",
          "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
          "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
          "webp_size": "12321",
          "width": "320"
        },
        "looping": {
          "frames": "15",
          "height": "200",
          "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
          "mp4_size": "25123",
          "size": "32381",
          "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
          "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
          "webp_size": "12321",
          "width": "320"
        },
        "original": {
          "frames": "15",
          "height": "200",
          "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
          "mp4_size": "25123",
          "size": "32381",
          "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
          "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
          "webp_size": "12321",
          "width": "320"
        },
        "original_still": {
          "frames": "15",
          "height": "200",
          "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
          "mp4_size": "25123",
          "size": "32381",
          "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
          "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
          "webp_size": "12321",
          "width": "320"
        },
        "preview": {
          "frames": "15",
          "height": "200",
          "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
          "mp4_size": "25123",
          "size": "32381",
          "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
          "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
          "webp_size": "12321",
          "width": "320"
        },
        "preview_gif": {
          "frames": "15",
          "height": "200",
          "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
          "mp4_size": "25123",
          "size": "32381",
          "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
          "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
          "webp_size": "12321",
          "width": "320"
        }
      },
      "import_datetime": "2013-08-01 12:41:48",
      "rating": "g",
      "slug": "confused-flying-YsTs5ltWtEhnq",
      "source": "http://www.reddit.com/r/reactiongifs/comments/1xpyaa/superman_goes_to_hollywood/",
      "source_post_url": "http://cheezburger.com/5282328320",
      "source_tld": "cheezburger.com",
      "tags": [
        "string"
      ],
      "trending_datetime": "2013-08-01 12:41:48",
      "type": "gif",
      "update_datetime": "2013-08-01 12:41:48",
      "url": "http://giphy.com/gifs/confused-flying-YsTs5ltWtEhnq",
      "user": {
        "avatar_url": "https://media1.giphy.com/avatars/election2016/XwYrZi5H87o6.gif",
        "banner_url": "https://media4.giphy.com/avatars/cheezburger/XkuejOhoGLE6.jpg",
        "display_name": "JoeCool4000",
        "profile_url": "https://giphy.com/cheezburger/",
        "twitter": "@joecool4000",
        "username": "joecool4000"
      },
      "username": "JoeCool4000"
    }
  ],
  "meta": {
    "msg": "OK",
    "response_id": "57eea03c72381f86e05c35d2",
    "status": 200
  },
  "pagination": {
    "count": 25,
    "offset": 75,
    "total_count": 250
  }
}
```

<h3 id="get-gifs-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|400|Bad Request|Your request was formatted incorrectly or missing required parameters.|None|
|403|Forbidden|You weren't authorized to make your request; most likely this indicates an issue with your API Key.|None|
|404|Not Found|The particular GIF you are requesting was not found. This occurs, for example, if you request a GIF by an id that does not exist.|None|
|429|Too Many Requests|Your API Key is making too many requests. Read about [requesting a Production Key](https://developers.giphy.com/docs/#access) to upgrade your API Key rate limits.<br>|None|

<h3 id="get-gifs-by-id-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Gif](#schemagif)]|false|none|none|
|meta|[Meta](#schemameta)|false|none|The Meta Object contains basic information regarding the request, whether it was successful, and the response given by the API.  Check `responses` to see a description of types of response codes the API might give you under different cirumstances.<br>|
|pagination|[Pagination](#schemapagination)|false|none|The Pagination Object contains information relating to the number of total results available as well as the number of results fetched and their relative positions.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Random GIF

<a id="opIdrandomGif"></a>

> Code samples

```bash
curl "https://example.com/gifs/random?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /gifs/random`

Returns a random GIF, limited by tag. Excluding the tag parameter will return a random GIF from the GIPHY catalog.


<h3 id="random-gif-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tag|query|string|false|Filters results by specified tag.|
|rating|query|string|false|Filters results by specified rating.|

> Example responses

> 200 Response

```json
{
  "data": {
    "bitly_url": "http://gph.is/1gsWDcL",
    "content_url": "string",
    "create_datetime": "2013-08-01 12:41:48",
    "embded_url": "http://giphy.com/embed/YsTs5ltWtEhnq",
    "featured_tags": [
      "string"
    ],
    "id": "YsTs5ltWtEhnq",
    "images": {
      "downsized": {
        "frames": "15",
        "height": "200",
        "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
        "mp4_size": "25123",
        "size": "32381",
        "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
        "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
        "webp_size": "12321",
        "width": "320"
      },
      "downsized_large": {
        "frames": "15",
        "height": "200",
        "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
        "mp4_size": "25123",
        "size": "32381",
        "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
        "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
        "webp_size": "12321",
        "width": "320"
      },
      "downsized_medium": {
        "frames": "15",
        "height": "200",
        "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
        "mp4_size": "25123",
        "size": "32381",
        "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
        "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
        "webp_size": "12321",
        "width": "320"
      },
      "downsized_small": {
        "frames": "15",
        "height": "200",
        "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
        "mp4_size": "25123",
        "size": "32381",
        "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
        "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
        "webp_size": "12321",
        "width": "320"
      },
      "downsized_still": {
        "frames": "15",
        "height": "200",
        "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
        "mp4_size": "25123",
        "size": "32381",
        "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
        "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
        "webp_size": "12321",
        "width": "320"
      },
      "fixed_height": {
        "frames": "15",
        "height": "200",
        "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
        "mp4_size": "25123",
        "size": "32381",
        "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
        "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
        "webp_size": "12321",
        "width": "320"
      },
      "fixed_height_downsampled": {
        "frames": "15",
        "height": "200",
        "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
        "mp4_size": "25123",
        "size": "32381",
        "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
        "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
        "webp_size": "12321",
        "width": "320"
      },
      "fixed_height_small": {
        "frames": "15",
        "height": "200",
        "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
        "mp4_size": "25123",
        "size": "32381",
        "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
        "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
        "webp_size": "12321",
        "width": "320"
      },
      "fixed_height_small_still": {
        "frames": "15",
        "height": "200",
        "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
        "mp4_size": "25123",
        "size": "32381",
        "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
        "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
        "webp_size": "12321",
        "width": "320"
      },
      "fixed_height_still": {
        "frames": "15",
        "height": "200",
        "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
        "mp4_size": "25123",
        "size": "32381",
        "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
        "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
        "webp_size": "12321",
        "width": "320"
      },
      "fixed_width": {
        "frames": "15",
        "height": "200",
        "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
        "mp4_size": "25123",
        "size": "32381",
        "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
        "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
        "webp_size": "12321",
        "width": "320"
      },
      "fixed_width_downsampled": {
        "frames": "15",
        "height": "200",
        "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
        "mp4_size": "25123",
        "size": "32381",
        "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
        "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
        "webp_size": "12321",
        "width": "320"
      },
      "fixed_width_small": {
        "frames": "15",
        "height": "200",
        "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
        "mp4_size": "25123",
        "size": "32381",
        "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
        "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
        "webp_size": "12321",
        "width": "320"
      },
      "fixed_width_small_still": {
        "frames": "15",
        "height": "200",
        "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
        "mp4_size": "25123",
        "size": "32381",
        "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
        "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
        "webp_size": "12321",
        "width": "320"
      },
      "fixed_width_still": {
        "frames": "15",
        "height": "200",
        "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
        "mp4_size": "25123",
        "size": "32381",
        "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
        "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
        "webp_size": "12321",
        "width": "320"
      },
      "looping": {
        "frames": "15",
        "height": "200",
        "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
        "mp4_size": "25123",
        "size": "32381",
        "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
        "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
        "webp_size": "12321",
        "width": "320"
      },
      "original": {
        "frames": "15",
        "height": "200",
        "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
        "mp4_size": "25123",
        "size": "32381",
        "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
        "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
        "webp_size": "12321",
        "width": "320"
      },
      "original_still": {
        "frames": "15",
        "height": "200",
        "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
        "mp4_size": "25123",
        "size": "32381",
        "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
        "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
        "webp_size": "12321",
        "width": "320"
      },
      "preview": {
        "frames": "15",
        "height": "200",
        "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
        "mp4_size": "25123",
        "size": "32381",
        "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
        "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
        "webp_size": "12321",
        "width": "320"
      },
      "preview_gif": {
        "frames": "15",
        "height": "200",
        "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
        "mp4_size": "25123",
        "size": "32381",
        "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
        "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
        "webp_size": "12321",
        "width": "320"
      }
    },
    "import_datetime": "2013-08-01 12:41:48",
    "rating": "g",
    "slug": "confused-flying-YsTs5ltWtEhnq",
    "source": "http://www.reddit.com/r/reactiongifs/comments/1xpyaa/superman_goes_to_hollywood/",
    "source_post_url": "http://cheezburger.com/5282328320",
    "source_tld": "cheezburger.com",
    "tags": [
      "string"
    ],
    "trending_datetime": "2013-08-01 12:41:48",
    "type": "gif",
    "update_datetime": "2013-08-01 12:41:48",
    "url": "http://giphy.com/gifs/confused-flying-YsTs5ltWtEhnq",
    "user": {
      "avatar_url": "https://media1.giphy.com/avatars/election2016/XwYrZi5H87o6.gif",
      "banner_url": "https://media4.giphy.com/avatars/cheezburger/XkuejOhoGLE6.jpg",
      "display_name": "JoeCool4000",
      "profile_url": "https://giphy.com/cheezburger/",
      "twitter": "@joecool4000",
      "username": "joecool4000"
    },
    "username": "JoeCool4000"
  },
  "meta": {
    "msg": "OK",
    "response_id": "57eea03c72381f86e05c35d2",
    "status": 200
  }
}
```

<h3 id="random-gif-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|400|Bad Request|Your request was formatted incorrectly or missing required parameters.|None|
|403|Forbidden|You weren't authorized to make your request; most likely this indicates an issue with your API Key.|None|
|404|Not Found|The particular GIF you are requesting was not found. This occurs, for example, if you request a GIF by an id that does not exist.|None|
|429|Too Many Requests|Your API Key is making too many requests. Read about [requesting a Production Key](https://developers.giphy.com/docs/#access) to upgrade your API Key rate limits.<br>|None|

<h3 id="random-gif-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Gif](#schemagif)|false|none|none|
|meta|[Meta](#schemameta)|false|none|The Meta Object contains basic information regarding the request, whether it was successful, and the response given by the API.  Check `responses` to see a description of types of response codes the API might give you under different cirumstances.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Search GIFs

<a id="opIdsearchGifs"></a>

> Code samples

```bash
curl "https://example.com/gifs/search?q=string&api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /gifs/search`

Search all GIPHY GIFs for a word or phrase. Punctuation will be stripped and ignored.  Use a plus or url encode for phrases. Example paul+rudd, ryan+gosling or american+psycho.


<h3 id="search-gifs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|q|query|string|true|Search query term or prhase.|
|limit|query|integer(int32)|false|The maximum number of records to return.|
|offset|query|integer(int32)|false|An optional results offset.|
|rating|query|string|false|Filters results by specified rating.|
|lang|query|string|false|Specify default language for regional content; use a 2-letter ISO 639-1 language code.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "bitly_url": "http://gph.is/1gsWDcL",
      "content_url": "string",
      "create_datetime": "2013-08-01 12:41:48",
      "embded_url": "http://giphy.com/embed/YsTs5ltWtEhnq",
      "featured_tags": [
        "string"
      ],
      "id": "YsTs5ltWtEhnq",
      "images": {
        "downsized": {
          "frames": "15",
          "height": "200",
          "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
          "mp4_size": "25123",
          "size": "32381",
          "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
          "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
          "webp_size": "12321",
          "width": "320"
        },
        "downsized_large": {
          "frames": "15",
          "height": "200",
          "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
          "mp4_size": "25123",
          "size": "32381",
          "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
          "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
          "webp_size": "12321",
          "width": "320"
        },
        "downsized_medium": {
          "frames": "15",
          "height": "200",
          "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
          "mp4_size": "25123",
          "size": "32381",
          "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
          "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
          "webp_size": "12321",
          "width": "320"
        },
        "downsized_small": {
          "frames": "15",
          "height": "200",
          "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
          "mp4_size": "25123",
          "size": "32381",
          "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
          "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
          "webp_size": "12321",
          "width": "320"
        },
        "downsized_still": {
          "frames": "15",
          "height": "200",
          "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
          "mp4_size": "25123",
          "size": "32381",
          "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
          "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
          "webp_size": "12321",
          "width": "320"
        },
        "fixed_height": {
          "frames": "15",
          "height": "200",
          "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
          "mp4_size": "25123",
          "size": "32381",
          "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
          "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
          "webp_size": "12321",
          "width": "320"
        },
        "fixed_height_downsampled": {
          "frames": "15",
          "height": "200",
          "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
          "mp4_size": "25123",
          "size": "32381",
          "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
          "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
          "webp_size": "12321",
          "width": "320"
        },
        "fixed_height_small": {
          "frames": "15",
          "height": "200",
          "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
          "mp4_size": "25123",
          "size": "32381",
          "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
          "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
          "webp_size": "12321",
          "width": "320"
        },
        "fixed_height_small_still": {
          "frames": "15",
          "height": "200",
          "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
          "mp4_size": "25123",
          "size": "32381",
          "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
          "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
          "webp_size": "12321",
          "width": "320"
        },
        "fixed_height_still": {
          "frames": "15",
          "height": "200",
          "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
          "mp4_size": "25123",
          "size": "32381",
          "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
          "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
          "webp_size": "12321",
          "width": "320"
        },
        "fixed_width": {
          "frames": "15",
          "height": "200",
          "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
          "mp4_size": "25123",
          "size": "32381",
          "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
          "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
          "webp_size": "12321",
          "width": "320"
        },
        "fixed_width_downsampled": {
          "frames": "15",
          "height": "200",
          "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
          "mp4_size": "25123",
          "size": "32381",
          "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
          "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
          "webp_size": "12321",
          "width": "320"
        },
        "fixed_width_small": {
          "frames": "15",
          "height": "200",
          "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
          "mp4_size": "25123",
          "size": "32381",
          "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
          "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
          "webp_size": "12321",
          "width": "320"
        },
        "fixed_width_small_still": {
          "frames": "15",
          "height": "200",
          "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
          "mp4_size": "25123",
          "size": "32381",
          "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
          "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
          "webp_size": "12321",
          "width": "320"
        },
        "fixed_width_still": {
          "frames": "15",
          "height": "200",
          "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
          "mp4_size": "25123",
          "size": "32381",
          "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
          "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
          "webp_size": "12321",
          "width": "320"
        },
        "looping": {
          "frames": "15",
          "height": "200",
          "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
          "mp4_size": "25123",
          "size": "32381",
          "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
          "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
          "webp_size": "12321",
          "width": "320"
        },
        "original": {
          "frames": "15",
          "height": "200",
          "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
          "mp4_size": "25123",
          "size": "32381",
          "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
          "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
          "webp_size": "12321",
          "width": "320"
        },
        "original_still": {
          "frames": "15",
          "height": "200",
          "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
          "mp4_size": "25123",
          "size": "32381",
          "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
          "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
          "webp_size": "12321",
          "width": "320"
        },
        "preview": {
          "frames": "15",
          "height": "200",
          "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
          "mp4_size": "25123",
          "size": "32381",
          "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
          "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
          "webp_size": "12321",
          "width": "320"
        },
        "preview_gif": {
          "frames": "15",
          "height": "200",
          "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
          "mp4_size": "25123",
          "size": "32381",
          "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
          "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
          "webp_size": "12321",
          "width": "320"
        }
      },
      "import_datetime": "2013-08-01 12:41:48",
      "rating": "g",
      "slug": "confused-flying-YsTs5ltWtEhnq",
      "source": "http://www.reddit.com/r/reactiongifs/comments/1xpyaa/superman_goes_to_hollywood/",
      "source_post_url": "http://cheezburger.com/5282328320",
      "source_tld": "cheezburger.com",
      "tags": [
        "string"
      ],
      "trending_datetime": "2013-08-01 12:41:48",
      "type": "gif",
      "update_datetime": "2013-08-01 12:41:48",
      "url": "http://giphy.com/gifs/confused-flying-YsTs5ltWtEhnq",
      "user": {
        "avatar_url": "https://media1.giphy.com/avatars/election2016/XwYrZi5H87o6.gif",
        "banner_url": "https://media4.giphy.com/avatars/cheezburger/XkuejOhoGLE6.jpg",
        "display_name": "JoeCool4000",
        "profile_url": "https://giphy.com/cheezburger/",
        "twitter": "@joecool4000",
        "username": "joecool4000"
      },
      "username": "JoeCool4000"
    }
  ],
  "meta": {
    "msg": "OK",
    "response_id": "57eea03c72381f86e05c35d2",
    "status": 200
  },
  "pagination": {
    "count": 25,
    "offset": 75,
    "total_count": 250
  }
}
```

<h3 id="search-gifs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Search results|Inline|
|400|Bad Request|Your request was formatted incorrectly or missing required parameters.|None|
|403|Forbidden|You weren't authorized to make your request; most likely this indicates an issue with your API Key.|None|
|404|Not Found|The particular GIF you are requesting was not found. This occurs, for example, if you request a GIF by an id that does not exist.|None|
|429|Too Many Requests|Your API Key is making too many requests. Read about [requesting a Production Key](https://developers.giphy.com/docs/#access) to upgrade your API Key rate limits.<br>|None|

<h3 id="search-gifs-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Gif](#schemagif)]|false|none|none|
|meta|[Meta](#schemameta)|false|none|The Meta Object contains basic information regarding the request, whether it was successful, and the response given by the API.  Check `responses` to see a description of types of response codes the API might give you under different cirumstances.<br>|
|pagination|[Pagination](#schemapagination)|false|none|The Pagination Object contains information relating to the number of total results available as well as the number of results fetched and their relative positions.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Translate phrase to GIF

<a id="opIdtranslateGif"></a>

> Code samples

```bash
curl "https://example.com/gifs/translate?s=string&api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /gifs/translate`

The translate API draws on search, but uses the GIPHY `special sauce` to handle translating from one vocabulary to another. In this case, words and phrases to GIF


<h3 id="translate-phrase-to-gif-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|s|query|string|true|Search term.|

> Example responses

> 200 Response

```json
{
  "data": {
    "bitly_url": "http://gph.is/1gsWDcL",
    "content_url": "string",
    "create_datetime": "2013-08-01 12:41:48",
    "embded_url": "http://giphy.com/embed/YsTs5ltWtEhnq",
    "featured_tags": [
      "string"
    ],
    "id": "YsTs5ltWtEhnq",
    "images": {
      "downsized": {
        "frames": "15",
        "height": "200",
        "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
        "mp4_size": "25123",
        "size": "32381",
        "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
        "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
        "webp_size": "12321",
        "width": "320"
      },
      "downsized_large": {
        "frames": "15",
        "height": "200",
        "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
        "mp4_size": "25123",
        "size": "32381",
        "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
        "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
        "webp_size": "12321",
        "width": "320"
      },
      "downsized_medium": {
        "frames": "15",
        "height": "200",
        "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
        "mp4_size": "25123",
        "size": "32381",
        "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
        "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
        "webp_size": "12321",
        "width": "320"
      },
      "downsized_small": {
        "frames": "15",
        "height": "200",
        "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
        "mp4_size": "25123",
        "size": "32381",
        "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
        "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
        "webp_size": "12321",
        "width": "320"
      },
      "downsized_still": {
        "frames": "15",
        "height": "200",
        "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
        "mp4_size": "25123",
        "size": "32381",
        "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
        "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
        "webp_size": "12321",
        "width": "320"
      },
      "fixed_height": {
        "frames": "15",
        "height": "200",
        "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
        "mp4_size": "25123",
        "size": "32381",
        "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
        "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
        "webp_size": "12321",
        "width": "320"
      },
      "fixed_height_downsampled": {
        "frames": "15",
        "height": "200",
        "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
        "mp4_size": "25123",
        "size": "32381",
        "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
        "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
        "webp_size": "12321",
        "width": "320"
      },
      "fixed_height_small": {
        "frames": "15",
        "height": "200",
        "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
        "mp4_size": "25123",
        "size": "32381",
        "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
        "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
        "webp_size": "12321",
        "width": "320"
      },
      "fixed_height_small_still": {
        "frames": "15",
        "height": "200",
        "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
        "mp4_size": "25123",
        "size": "32381",
        "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
        "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
        "webp_size": "12321",
        "width": "320"
      },
      "fixed_height_still": {
        "frames": "15",
        "height": "200",
        "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
        "mp4_size": "25123",
        "size": "32381",
        "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
        "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
        "webp_size": "12321",
        "width": "320"
      },
      "fixed_width": {
        "frames": "15",
        "height": "200",
        "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
        "mp4_size": "25123",
        "size": "32381",
        "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
        "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
        "webp_size": "12321",
        "width": "320"
      },
      "fixed_width_downsampled": {
        "frames": "15",
        "height": "200",
        "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
        "mp4_size": "25123",
        "size": "32381",
        "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
        "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
        "webp_size": "12321",
        "width": "320"
      },
      "fixed_width_small": {
        "frames": "15",
        "height": "200",
        "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
        "mp4_size": "25123",
        "size": "32381",
        "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
        "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
        "webp_size": "12321",
        "width": "320"
      },
      "fixed_width_small_still": {
        "frames": "15",
        "height": "200",
        "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
        "mp4_size": "25123",
        "size": "32381",
        "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
        "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
        "webp_size": "12321",
        "width": "320"
      },
      "fixed_width_still": {
        "frames": "15",
        "height": "200",
        "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
        "mp4_size": "25123",
        "size": "32381",
        "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
        "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
        "webp_size": "12321",
        "width": "320"
      },
      "looping": {
        "frames": "15",
        "height": "200",
        "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
        "mp4_size": "25123",
        "size": "32381",
        "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
        "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
        "webp_size": "12321",
        "width": "320"
      },
      "original": {
        "frames": "15",
        "height": "200",
        "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
        "mp4_size": "25123",
        "size": "32381",
        "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
        "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
        "webp_size": "12321",
        "width": "320"
      },
      "original_still": {
        "frames": "15",
        "height": "200",
        "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
        "mp4_size": "25123",
        "size": "32381",
        "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
        "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
        "webp_size": "12321",
        "width": "320"
      },
      "preview": {
        "frames": "15",
        "height": "200",
        "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
        "mp4_size": "25123",
        "size": "32381",
        "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
        "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
        "webp_size": "12321",
        "width": "320"
      },
      "preview_gif": {
        "frames": "15",
        "height": "200",
        "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
        "mp4_size": "25123",
        "size": "32381",
        "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
        "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
        "webp_size": "12321",
        "width": "320"
      }
    },
    "import_datetime": "2013-08-01 12:41:48",
    "rating": "g",
    "slug": "confused-flying-YsTs5ltWtEhnq",
    "source": "http://www.reddit.com/r/reactiongifs/comments/1xpyaa/superman_goes_to_hollywood/",
    "source_post_url": "http://cheezburger.com/5282328320",
    "source_tld": "cheezburger.com",
    "tags": [
      "string"
    ],
    "trending_datetime": "2013-08-01 12:41:48",
    "type": "gif",
    "update_datetime": "2013-08-01 12:41:48",
    "url": "http://giphy.com/gifs/confused-flying-YsTs5ltWtEhnq",
    "user": {
      "avatar_url": "https://media1.giphy.com/avatars/election2016/XwYrZi5H87o6.gif",
      "banner_url": "https://media4.giphy.com/avatars/cheezburger/XkuejOhoGLE6.jpg",
      "display_name": "JoeCool4000",
      "profile_url": "https://giphy.com/cheezburger/",
      "twitter": "@joecool4000",
      "username": "joecool4000"
    },
    "username": "JoeCool4000"
  },
  "meta": {
    "msg": "OK",
    "response_id": "57eea03c72381f86e05c35d2",
    "status": 200
  }
}
```

<h3 id="translate-phrase-to-gif-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|400|Bad Request|Your request was formatted incorrectly or missing required parameters.|None|
|403|Forbidden|You weren't authorized to make your request; most likely this indicates an issue with your API Key.|None|
|404|Not Found|The particular GIF you are requesting was not found. This occurs, for example, if you request a GIF by an id that does not exist.|None|
|429|Too Many Requests|Your API Key is making too many requests. Read about [requesting a Production Key](https://developers.giphy.com/docs/#access) to upgrade your API Key rate limits.<br>|None|

<h3 id="translate-phrase-to-gif-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Gif](#schemagif)|false|none|none|
|meta|[Meta](#schemameta)|false|none|The Meta Object contains basic information regarding the request, whether it was successful, and the response given by the API.  Check `responses` to see a description of types of response codes the API might give you under different cirumstances.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Trending GIFs

<a id="opIdtrendingGifs"></a>

> Code samples

```bash
curl "https://example.com/gifs/trending?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /gifs/trending`

Fetch GIFs currently trending online. Hand curated by the GIPHY editorial team.  The data returned mirrors the GIFs showcased on the GIPHY homepage. Returns 25 results by default.


<h3 id="trending-gifs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer(int32)|false|The maximum number of records to return.|
|offset|query|integer(int32)|false|An optional results offset.|
|rating|query|string|false|Filters results by specified rating.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "bitly_url": "http://gph.is/1gsWDcL",
      "content_url": "string",
      "create_datetime": "2013-08-01 12:41:48",
      "embded_url": "http://giphy.com/embed/YsTs5ltWtEhnq",
      "featured_tags": [
        "string"
      ],
      "id": "YsTs5ltWtEhnq",
      "images": {
        "downsized": {
          "frames": "15",
          "height": "200",
          "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
          "mp4_size": "25123",
          "size": "32381",
          "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
          "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
          "webp_size": "12321",
          "width": "320"
        },
        "downsized_large": {
          "frames": "15",
          "height": "200",
          "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
          "mp4_size": "25123",
          "size": "32381",
          "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
          "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
          "webp_size": "12321",
          "width": "320"
        },
        "downsized_medium": {
          "frames": "15",
          "height": "200",
          "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
          "mp4_size": "25123",
          "size": "32381",
          "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
          "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
          "webp_size": "12321",
          "width": "320"
        },
        "downsized_small": {
          "frames": "15",
          "height": "200",
          "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
          "mp4_size": "25123",
          "size": "32381",
          "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
          "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
          "webp_size": "12321",
          "width": "320"
        },
        "downsized_still": {
          "frames": "15",
          "height": "200",
          "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
          "mp4_size": "25123",
          "size": "32381",
          "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
          "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
          "webp_size": "12321",
          "width": "320"
        },
        "fixed_height": {
          "frames": "15",
          "height": "200",
          "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
          "mp4_size": "25123",
          "size": "32381",
          "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
          "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
          "webp_size": "12321",
          "width": "320"
        },
        "fixed_height_downsampled": {
          "frames": "15",
          "height": "200",
          "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
          "mp4_size": "25123",
          "size": "32381",
          "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
          "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
          "webp_size": "12321",
          "width": "320"
        },
        "fixed_height_small": {
          "frames": "15",
          "height": "200",
          "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
          "mp4_size": "25123",
          "size": "32381",
          "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
          "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
          "webp_size": "12321",
          "width": "320"
        },
        "fixed_height_small_still": {
          "frames": "15",
          "height": "200",
          "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
          "mp4_size": "25123",
          "size": "32381",
          "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
          "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
          "webp_size": "12321",
          "width": "320"
        },
        "fixed_height_still": {
          "frames": "15",
          "height": "200",
          "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
          "mp4_size": "25123",
          "size": "32381",
          "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
          "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
          "webp_size": "12321",
          "width": "320"
        },
        "fixed_width": {
          "frames": "15",
          "height": "200",
          "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
          "mp4_size": "25123",
          "size": "32381",
          "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
          "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
          "webp_size": "12321",
          "width": "320"
        },
        "fixed_width_downsampled": {
          "frames": "15",
          "height": "200",
          "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
          "mp4_size": "25123",
          "size": "32381",
          "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
          "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
          "webp_size": "12321",
          "width": "320"
        },
        "fixed_width_small": {
          "frames": "15",
          "height": "200",
          "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
          "mp4_size": "25123",
          "size": "32381",
          "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
          "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
          "webp_size": "12321",
          "width": "320"
        },
        "fixed_width_small_still": {
          "frames": "15",
          "height": "200",
          "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
          "mp4_size": "25123",
          "size": "32381",
          "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
          "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
          "webp_size": "12321",
          "width": "320"
        },
        "fixed_width_still": {
          "frames": "15",
          "height": "200",
          "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
          "mp4_size": "25123",
          "size": "32381",
          "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
          "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
          "webp_size": "12321",
          "width": "320"
        },
        "looping": {
          "frames": "15",
          "height": "200",
          "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
          "mp4_size": "25123",
          "size": "32381",
          "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
          "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
          "webp_size": "12321",
          "width": "320"
        },
        "original": {
          "frames": "15",
          "height": "200",
          "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
          "mp4_size": "25123",
          "size": "32381",
          "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
          "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
          "webp_size": "12321",
          "width": "320"
        },
        "original_still": {
          "frames": "15",
          "height": "200",
          "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
          "mp4_size": "25123",
          "size": "32381",
          "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
          "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
          "webp_size": "12321",
          "width": "320"
        },
        "preview": {
          "frames": "15",
          "height": "200",
          "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
          "mp4_size": "25123",
          "size": "32381",
          "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
          "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
          "webp_size": "12321",
          "width": "320"
        },
        "preview_gif": {
          "frames": "15",
          "height": "200",
          "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
          "mp4_size": "25123",
          "size": "32381",
          "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
          "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
          "webp_size": "12321",
          "width": "320"
        }
      },
      "import_datetime": "2013-08-01 12:41:48",
      "rating": "g",
      "slug": "confused-flying-YsTs5ltWtEhnq",
      "source": "http://www.reddit.com/r/reactiongifs/comments/1xpyaa/superman_goes_to_hollywood/",
      "source_post_url": "http://cheezburger.com/5282328320",
      "source_tld": "cheezburger.com",
      "tags": [
        "string"
      ],
      "trending_datetime": "2013-08-01 12:41:48",
      "type": "gif",
      "update_datetime": "2013-08-01 12:41:48",
      "url": "http://giphy.com/gifs/confused-flying-YsTs5ltWtEhnq",
      "user": {
        "avatar_url": "https://media1.giphy.com/avatars/election2016/XwYrZi5H87o6.gif",
        "banner_url": "https://media4.giphy.com/avatars/cheezburger/XkuejOhoGLE6.jpg",
        "display_name": "JoeCool4000",
        "profile_url": "https://giphy.com/cheezburger/",
        "twitter": "@joecool4000",
        "username": "joecool4000"
      },
      "username": "JoeCool4000"
    }
  ],
  "meta": {
    "msg": "OK",
    "response_id": "57eea03c72381f86e05c35d2",
    "status": 200
  },
  "pagination": {
    "count": 25,
    "offset": 75,
    "total_count": 250
  }
}
```

<h3 id="trending-gifs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|400|Bad Request|Your request was formatted incorrectly or missing required parameters.|None|
|403|Forbidden|You weren't authorized to make your request; most likely this indicates an issue with your API Key.|None|
|404|Not Found|The particular GIF you are requesting was not found. This occurs, for example, if you request a GIF by an id that does not exist.|None|
|429|Too Many Requests|Your API Key is making too many requests. Read about [requesting a Production Key](https://developers.giphy.com/docs/#access) to upgrade your API Key rate limits.<br>|None|

<h3 id="trending-gifs-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Gif](#schemagif)]|false|none|none|
|meta|[Meta](#schemameta)|false|none|The Meta Object contains basic information regarding the request, whether it was successful, and the response given by the API.  Check `responses` to see a description of types of response codes the API might give you under different cirumstances.<br>|
|pagination|[Pagination](#schemapagination)|false|none|The Pagination Object contains information relating to the number of total results available as well as the number of results fetched and their relative positions.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Get GIF by Id

<a id="opIdgetGifById"></a>

> Code samples

```bash
curl "https://example.com/gifs/0?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /gifs/{gifId}`

Returns a GIF given that GIF's unique ID


<h3 id="get-gif-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|gifId|path|integer(int32)|true|Filters results by specified GIF ID.|

> Example responses

> 200 Response

```json
{
  "data": {
    "bitly_url": "http://gph.is/1gsWDcL",
    "content_url": "string",
    "create_datetime": "2013-08-01 12:41:48",
    "embded_url": "http://giphy.com/embed/YsTs5ltWtEhnq",
    "featured_tags": [
      "string"
    ],
    "id": "YsTs5ltWtEhnq",
    "images": {
      "downsized": {
        "frames": "15",
        "height": "200",
        "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
        "mp4_size": "25123",
        "size": "32381",
        "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
        "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
        "webp_size": "12321",
        "width": "320"
      },
      "downsized_large": {
        "frames": "15",
        "height": "200",
        "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
        "mp4_size": "25123",
        "size": "32381",
        "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
        "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
        "webp_size": "12321",
        "width": "320"
      },
      "downsized_medium": {
        "frames": "15",
        "height": "200",
        "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
        "mp4_size": "25123",
        "size": "32381",
        "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
        "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
        "webp_size": "12321",
        "width": "320"
      },
      "downsized_small": {
        "frames": "15",
        "height": "200",
        "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
        "mp4_size": "25123",
        "size": "32381",
        "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
        "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
        "webp_size": "12321",
        "width": "320"
      },
      "downsized_still": {
        "frames": "15",
        "height": "200",
        "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
        "mp4_size": "25123",
        "size": "32381",
        "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
        "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
        "webp_size": "12321",
        "width": "320"
      },
      "fixed_height": {
        "frames": "15",
        "height": "200",
        "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
        "mp4_size": "25123",
        "size": "32381",
        "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
        "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
        "webp_size": "12321",
        "width": "320"
      },
      "fixed_height_downsampled": {
        "frames": "15",
        "height": "200",
        "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
        "mp4_size": "25123",
        "size": "32381",
        "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
        "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
        "webp_size": "12321",
        "width": "320"
      },
      "fixed_height_small": {
        "frames": "15",
        "height": "200",
        "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
        "mp4_size": "25123",
        "size": "32381",
        "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
        "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
        "webp_size": "12321",
        "width": "320"
      },
      "fixed_height_small_still": {
        "frames": "15",
        "height": "200",
        "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
        "mp4_size": "25123",
        "size": "32381",
        "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
        "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
        "webp_size": "12321",
        "width": "320"
      },
      "fixed_height_still": {
        "frames": "15",
        "height": "200",
        "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
        "mp4_size": "25123",
        "size": "32381",
        "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
        "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
        "webp_size": "12321",
        "width": "320"
      },
      "fixed_width": {
        "frames": "15",
        "height": "200",
        "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
        "mp4_size": "25123",
        "size": "32381",
        "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
        "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
        "webp_size": "12321",
        "width": "320"
      },
      "fixed_width_downsampled": {
        "frames": "15",
        "height": "200",
        "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
        "mp4_size": "25123",
        "size": "32381",
        "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
        "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
        "webp_size": "12321",
        "width": "320"
      },
      "fixed_width_small": {
        "frames": "15",
        "height": "200",
        "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
        "mp4_size": "25123",
        "size": "32381",
        "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
        "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
        "webp_size": "12321",
        "width": "320"
      },
      "fixed_width_small_still": {
        "frames": "15",
        "height": "200",
        "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
        "mp4_size": "25123",
        "size": "32381",
        "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
        "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
        "webp_size": "12321",
        "width": "320"
      },
      "fixed_width_still": {
        "frames": "15",
        "height": "200",
        "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
        "mp4_size": "25123",
        "size": "32381",
        "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
        "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
        "webp_size": "12321",
        "width": "320"
      },
      "looping": {
        "frames": "15",
        "height": "200",
        "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
        "mp4_size": "25123",
        "size": "32381",
        "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
        "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
        "webp_size": "12321",
        "width": "320"
      },
      "original": {
        "frames": "15",
        "height": "200",
        "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
        "mp4_size": "25123",
        "size": "32381",
        "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
        "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
        "webp_size": "12321",
        "width": "320"
      },
      "original_still": {
        "frames": "15",
        "height": "200",
        "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
        "mp4_size": "25123",
        "size": "32381",
        "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
        "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
        "webp_size": "12321",
        "width": "320"
      },
      "preview": {
        "frames": "15",
        "height": "200",
        "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
        "mp4_size": "25123",
        "size": "32381",
        "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
        "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
        "webp_size": "12321",
        "width": "320"
      },
      "preview_gif": {
        "frames": "15",
        "height": "200",
        "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
        "mp4_size": "25123",
        "size": "32381",
        "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
        "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
        "webp_size": "12321",
        "width": "320"
      }
    },
    "import_datetime": "2013-08-01 12:41:48",
    "rating": "g",
    "slug": "confused-flying-YsTs5ltWtEhnq",
    "source": "http://www.reddit.com/r/reactiongifs/comments/1xpyaa/superman_goes_to_hollywood/",
    "source_post_url": "http://cheezburger.com/5282328320",
    "source_tld": "cheezburger.com",
    "tags": [
      "string"
    ],
    "trending_datetime": "2013-08-01 12:41:48",
    "type": "gif",
    "update_datetime": "2013-08-01 12:41:48",
    "url": "http://giphy.com/gifs/confused-flying-YsTs5ltWtEhnq",
    "user": {
      "avatar_url": "https://media1.giphy.com/avatars/election2016/XwYrZi5H87o6.gif",
      "banner_url": "https://media4.giphy.com/avatars/cheezburger/XkuejOhoGLE6.jpg",
      "display_name": "JoeCool4000",
      "profile_url": "https://giphy.com/cheezburger/",
      "twitter": "@joecool4000",
      "username": "joecool4000"
    },
    "username": "JoeCool4000"
  },
  "meta": {
    "msg": "OK",
    "response_id": "57eea03c72381f86e05c35d2",
    "status": 200
  }
}
```

<h3 id="get-gif-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|400|Bad Request|Your request was formatted incorrectly or missing required parameters.|None|
|403|Forbidden|You weren't authorized to make your request; most likely this indicates an issue with your API Key.|None|
|404|Not Found|The particular GIF you are requesting was not found. This occurs, for example, if you request a GIF by an id that does not exist.|None|
|429|Too Many Requests|Your API Key is making too many requests. Read about [requesting a Production Key](https://developers.giphy.com/docs/#access) to upgrade your API Key rate limits.<br>|None|

<h3 id="get-gif-by-id-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Gif](#schemagif)|false|none|none|
|meta|[Meta](#schemameta)|false|none|The Meta Object contains basic information regarding the request, whether it was successful, and the response given by the API.  Check `responses` to see a description of types of response codes the API might give you under different cirumstances.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

<h1 id="giphy-api-stickers">stickers</h1>

## Random Sticker

<a id="opIdrandomSticker"></a>

> Code samples

```bash
curl "https://example.com/stickers/random?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /stickers/random`

Returns a random GIF, limited by tag. Excluding the tag parameter will return a random GIF from the GIPHY catalog.


<h3 id="random-sticker-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tag|query|string|false|Filters results by specified tag.|
|rating|query|string|false|Filters results by specified rating.|

> Example responses

> 200 Response

```json
{
  "data": {
    "bitly_url": "http://gph.is/1gsWDcL",
    "content_url": "string",
    "create_datetime": "2013-08-01 12:41:48",
    "embded_url": "http://giphy.com/embed/YsTs5ltWtEhnq",
    "featured_tags": [
      "string"
    ],
    "id": "YsTs5ltWtEhnq",
    "images": {
      "downsized": {
        "frames": "15",
        "height": "200",
        "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
        "mp4_size": "25123",
        "size": "32381",
        "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
        "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
        "webp_size": "12321",
        "width": "320"
      },
      "downsized_large": {
        "frames": "15",
        "height": "200",
        "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
        "mp4_size": "25123",
        "size": "32381",
        "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
        "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
        "webp_size": "12321",
        "width": "320"
      },
      "downsized_medium": {
        "frames": "15",
        "height": "200",
        "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
        "mp4_size": "25123",
        "size": "32381",
        "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
        "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
        "webp_size": "12321",
        "width": "320"
      },
      "downsized_small": {
        "frames": "15",
        "height": "200",
        "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
        "mp4_size": "25123",
        "size": "32381",
        "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
        "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
        "webp_size": "12321",
        "width": "320"
      },
      "downsized_still": {
        "frames": "15",
        "height": "200",
        "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
        "mp4_size": "25123",
        "size": "32381",
        "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
        "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
        "webp_size": "12321",
        "width": "320"
      },
      "fixed_height": {
        "frames": "15",
        "height": "200",
        "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
        "mp4_size": "25123",
        "size": "32381",
        "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
        "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
        "webp_size": "12321",
        "width": "320"
      },
      "fixed_height_downsampled": {
        "frames": "15",
        "height": "200",
        "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
        "mp4_size": "25123",
        "size": "32381",
        "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
        "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
        "webp_size": "12321",
        "width": "320"
      },
      "fixed_height_small": {
        "frames": "15",
        "height": "200",
        "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
        "mp4_size": "25123",
        "size": "32381",
        "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
        "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
        "webp_size": "12321",
        "width": "320"
      },
      "fixed_height_small_still": {
        "frames": "15",
        "height": "200",
        "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
        "mp4_size": "25123",
        "size": "32381",
        "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
        "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
        "webp_size": "12321",
        "width": "320"
      },
      "fixed_height_still": {
        "frames": "15",
        "height": "200",
        "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
        "mp4_size": "25123",
        "size": "32381",
        "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
        "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
        "webp_size": "12321",
        "width": "320"
      },
      "fixed_width": {
        "frames": "15",
        "height": "200",
        "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
        "mp4_size": "25123",
        "size": "32381",
        "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
        "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
        "webp_size": "12321",
        "width": "320"
      },
      "fixed_width_downsampled": {
        "frames": "15",
        "height": "200",
        "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
        "mp4_size": "25123",
        "size": "32381",
        "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
        "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
        "webp_size": "12321",
        "width": "320"
      },
      "fixed_width_small": {
        "frames": "15",
        "height": "200",
        "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
        "mp4_size": "25123",
        "size": "32381",
        "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
        "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
        "webp_size": "12321",
        "width": "320"
      },
      "fixed_width_small_still": {
        "frames": "15",
        "height": "200",
        "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
        "mp4_size": "25123",
        "size": "32381",
        "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
        "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
        "webp_size": "12321",
        "width": "320"
      },
      "fixed_width_still": {
        "frames": "15",
        "height": "200",
        "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
        "mp4_size": "25123",
        "size": "32381",
        "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
        "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
        "webp_size": "12321",
        "width": "320"
      },
      "looping": {
        "frames": "15",
        "height": "200",
        "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
        "mp4_size": "25123",
        "size": "32381",
        "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
        "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
        "webp_size": "12321",
        "width": "320"
      },
      "original": {
        "frames": "15",
        "height": "200",
        "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
        "mp4_size": "25123",
        "size": "32381",
        "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
        "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
        "webp_size": "12321",
        "width": "320"
      },
      "original_still": {
        "frames": "15",
        "height": "200",
        "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
        "mp4_size": "25123",
        "size": "32381",
        "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
        "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
        "webp_size": "12321",
        "width": "320"
      },
      "preview": {
        "frames": "15",
        "height": "200",
        "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
        "mp4_size": "25123",
        "size": "32381",
        "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
        "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
        "webp_size": "12321",
        "width": "320"
      },
      "preview_gif": {
        "frames": "15",
        "height": "200",
        "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
        "mp4_size": "25123",
        "size": "32381",
        "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
        "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
        "webp_size": "12321",
        "width": "320"
      }
    },
    "import_datetime": "2013-08-01 12:41:48",
    "rating": "g",
    "slug": "confused-flying-YsTs5ltWtEhnq",
    "source": "http://www.reddit.com/r/reactiongifs/comments/1xpyaa/superman_goes_to_hollywood/",
    "source_post_url": "http://cheezburger.com/5282328320",
    "source_tld": "cheezburger.com",
    "tags": [
      "string"
    ],
    "trending_datetime": "2013-08-01 12:41:48",
    "type": "gif",
    "update_datetime": "2013-08-01 12:41:48",
    "url": "http://giphy.com/gifs/confused-flying-YsTs5ltWtEhnq",
    "user": {
      "avatar_url": "https://media1.giphy.com/avatars/election2016/XwYrZi5H87o6.gif",
      "banner_url": "https://media4.giphy.com/avatars/cheezburger/XkuejOhoGLE6.jpg",
      "display_name": "JoeCool4000",
      "profile_url": "https://giphy.com/cheezburger/",
      "twitter": "@joecool4000",
      "username": "joecool4000"
    },
    "username": "JoeCool4000"
  },
  "meta": {
    "msg": "OK",
    "response_id": "57eea03c72381f86e05c35d2",
    "status": 200
  }
}
```

<h3 id="random-sticker-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|400|Bad Request|Your request was formatted incorrectly or missing required parameters.|None|
|403|Forbidden|You weren't authorized to make your request; most likely this indicates an issue with your API Key.|None|
|404|Not Found|The particular GIF you are requesting was not found. This occurs, for example, if you request a GIF by an id that does not exist.|None|
|429|Too Many Requests|Your API Key is making too many requests. Read about [requesting a Production Key](https://developers.giphy.com/docs/#access) to upgrade your API Key rate limits.<br>|None|

<h3 id="random-sticker-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Gif](#schemagif)|false|none|none|
|meta|[Meta](#schemameta)|false|none|The Meta Object contains basic information regarding the request, whether it was successful, and the response given by the API.  Check `responses` to see a description of types of response codes the API might give you under different cirumstances.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Search Stickers

<a id="opIdsearchStickers"></a>

> Code samples

```bash
curl "https://example.com/stickers/search?q=string&api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /stickers/search`

Replicates the functionality and requirements of the classic GIPHY search, but returns animated stickers rather than GIFs.


<h3 id="search-stickers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|q|query|string|true|Search query term or prhase.|
|limit|query|integer(int32)|false|The maximum number of records to return.|
|offset|query|integer(int32)|false|An optional results offset.|
|rating|query|string|false|Filters results by specified rating.|
|lang|query|string|false|Specify default language for regional content; use a 2-letter ISO 639-1 language code.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "bitly_url": "http://gph.is/1gsWDcL",
      "content_url": "string",
      "create_datetime": "2013-08-01 12:41:48",
      "embded_url": "http://giphy.com/embed/YsTs5ltWtEhnq",
      "featured_tags": [
        "string"
      ],
      "id": "YsTs5ltWtEhnq",
      "images": {
        "downsized": {
          "frames": "15",
          "height": "200",
          "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
          "mp4_size": "25123",
          "size": "32381",
          "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
          "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
          "webp_size": "12321",
          "width": "320"
        },
        "downsized_large": {
          "frames": "15",
          "height": "200",
          "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
          "mp4_size": "25123",
          "size": "32381",
          "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
          "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
          "webp_size": "12321",
          "width": "320"
        },
        "downsized_medium": {
          "frames": "15",
          "height": "200",
          "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
          "mp4_size": "25123",
          "size": "32381",
          "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
          "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
          "webp_size": "12321",
          "width": "320"
        },
        "downsized_small": {
          "frames": "15",
          "height": "200",
          "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
          "mp4_size": "25123",
          "size": "32381",
          "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
          "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
          "webp_size": "12321",
          "width": "320"
        },
        "downsized_still": {
          "frames": "15",
          "height": "200",
          "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
          "mp4_size": "25123",
          "size": "32381",
          "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
          "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
          "webp_size": "12321",
          "width": "320"
        },
        "fixed_height": {
          "frames": "15",
          "height": "200",
          "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
          "mp4_size": "25123",
          "size": "32381",
          "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
          "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
          "webp_size": "12321",
          "width": "320"
        },
        "fixed_height_downsampled": {
          "frames": "15",
          "height": "200",
          "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
          "mp4_size": "25123",
          "size": "32381",
          "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
          "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
          "webp_size": "12321",
          "width": "320"
        },
        "fixed_height_small": {
          "frames": "15",
          "height": "200",
          "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
          "mp4_size": "25123",
          "size": "32381",
          "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
          "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
          "webp_size": "12321",
          "width": "320"
        },
        "fixed_height_small_still": {
          "frames": "15",
          "height": "200",
          "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
          "mp4_size": "25123",
          "size": "32381",
          "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
          "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
          "webp_size": "12321",
          "width": "320"
        },
        "fixed_height_still": {
          "frames": "15",
          "height": "200",
          "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
          "mp4_size": "25123",
          "size": "32381",
          "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
          "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
          "webp_size": "12321",
          "width": "320"
        },
        "fixed_width": {
          "frames": "15",
          "height": "200",
          "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
          "mp4_size": "25123",
          "size": "32381",
          "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
          "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
          "webp_size": "12321",
          "width": "320"
        },
        "fixed_width_downsampled": {
          "frames": "15",
          "height": "200",
          "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
          "mp4_size": "25123",
          "size": "32381",
          "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
          "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
          "webp_size": "12321",
          "width": "320"
        },
        "fixed_width_small": {
          "frames": "15",
          "height": "200",
          "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
          "mp4_size": "25123",
          "size": "32381",
          "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
          "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
          "webp_size": "12321",
          "width": "320"
        },
        "fixed_width_small_still": {
          "frames": "15",
          "height": "200",
          "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
          "mp4_size": "25123",
          "size": "32381",
          "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
          "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
          "webp_size": "12321",
          "width": "320"
        },
        "fixed_width_still": {
          "frames": "15",
          "height": "200",
          "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
          "mp4_size": "25123",
          "size": "32381",
          "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
          "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
          "webp_size": "12321",
          "width": "320"
        },
        "looping": {
          "frames": "15",
          "height": "200",
          "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
          "mp4_size": "25123",
          "size": "32381",
          "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
          "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
          "webp_size": "12321",
          "width": "320"
        },
        "original": {
          "frames": "15",
          "height": "200",
          "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
          "mp4_size": "25123",
          "size": "32381",
          "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
          "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
          "webp_size": "12321",
          "width": "320"
        },
        "original_still": {
          "frames": "15",
          "height": "200",
          "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
          "mp4_size": "25123",
          "size": "32381",
          "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
          "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
          "webp_size": "12321",
          "width": "320"
        },
        "preview": {
          "frames": "15",
          "height": "200",
          "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
          "mp4_size": "25123",
          "size": "32381",
          "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
          "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
          "webp_size": "12321",
          "width": "320"
        },
        "preview_gif": {
          "frames": "15",
          "height": "200",
          "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
          "mp4_size": "25123",
          "size": "32381",
          "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
          "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
          "webp_size": "12321",
          "width": "320"
        }
      },
      "import_datetime": "2013-08-01 12:41:48",
      "rating": "g",
      "slug": "confused-flying-YsTs5ltWtEhnq",
      "source": "http://www.reddit.com/r/reactiongifs/comments/1xpyaa/superman_goes_to_hollywood/",
      "source_post_url": "http://cheezburger.com/5282328320",
      "source_tld": "cheezburger.com",
      "tags": [
        "string"
      ],
      "trending_datetime": "2013-08-01 12:41:48",
      "type": "gif",
      "update_datetime": "2013-08-01 12:41:48",
      "url": "http://giphy.com/gifs/confused-flying-YsTs5ltWtEhnq",
      "user": {
        "avatar_url": "https://media1.giphy.com/avatars/election2016/XwYrZi5H87o6.gif",
        "banner_url": "https://media4.giphy.com/avatars/cheezburger/XkuejOhoGLE6.jpg",
        "display_name": "JoeCool4000",
        "profile_url": "https://giphy.com/cheezburger/",
        "twitter": "@joecool4000",
        "username": "joecool4000"
      },
      "username": "JoeCool4000"
    }
  ],
  "meta": {
    "msg": "OK",
    "response_id": "57eea03c72381f86e05c35d2",
    "status": 200
  },
  "pagination": {
    "count": 25,
    "offset": 75,
    "total_count": 250
  }
}
```

<h3 id="search-stickers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Search results|Inline|
|400|Bad Request|Your request was formatted incorrectly or missing required parameters.|None|
|403|Forbidden|You weren't authorized to make your request; most likely this indicates an issue with your API Key.|None|
|404|Not Found|The particular GIF you are requesting was not found. This occurs, for example, if you request a GIF by an id that does not exist.|None|
|429|Too Many Requests|Your API Key is making too many requests. Read about [requesting a Production Key](https://developers.giphy.com/docs/#access) to upgrade your API Key rate limits.<br>|None|

<h3 id="search-stickers-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Gif](#schemagif)]|false|none|none|
|meta|[Meta](#schemameta)|false|none|The Meta Object contains basic information regarding the request, whether it was successful, and the response given by the API.  Check `responses` to see a description of types of response codes the API might give you under different cirumstances.<br>|
|pagination|[Pagination](#schemapagination)|false|none|The Pagination Object contains information relating to the number of total results available as well as the number of results fetched and their relative positions.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Translate phrase to Sticker

<a id="opIdtranslateSticker"></a>

> Code samples

```bash
curl "https://example.com/stickers/translate?s=string&api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /stickers/translate`

The translate API draws on search, but uses the GIPHY `special sauce` to handle translating from one vocabulary to another. In this case, words and phrases to GIFs.


<h3 id="translate-phrase-to-sticker-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|s|query|string|true|Search term.|

> Example responses

> 200 Response

```json
{
  "data": {
    "bitly_url": "http://gph.is/1gsWDcL",
    "content_url": "string",
    "create_datetime": "2013-08-01 12:41:48",
    "embded_url": "http://giphy.com/embed/YsTs5ltWtEhnq",
    "featured_tags": [
      "string"
    ],
    "id": "YsTs5ltWtEhnq",
    "images": {
      "downsized": {
        "frames": "15",
        "height": "200",
        "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
        "mp4_size": "25123",
        "size": "32381",
        "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
        "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
        "webp_size": "12321",
        "width": "320"
      },
      "downsized_large": {
        "frames": "15",
        "height": "200",
        "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
        "mp4_size": "25123",
        "size": "32381",
        "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
        "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
        "webp_size": "12321",
        "width": "320"
      },
      "downsized_medium": {
        "frames": "15",
        "height": "200",
        "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
        "mp4_size": "25123",
        "size": "32381",
        "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
        "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
        "webp_size": "12321",
        "width": "320"
      },
      "downsized_small": {
        "frames": "15",
        "height": "200",
        "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
        "mp4_size": "25123",
        "size": "32381",
        "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
        "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
        "webp_size": "12321",
        "width": "320"
      },
      "downsized_still": {
        "frames": "15",
        "height": "200",
        "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
        "mp4_size": "25123",
        "size": "32381",
        "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
        "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
        "webp_size": "12321",
        "width": "320"
      },
      "fixed_height": {
        "frames": "15",
        "height": "200",
        "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
        "mp4_size": "25123",
        "size": "32381",
        "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
        "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
        "webp_size": "12321",
        "width": "320"
      },
      "fixed_height_downsampled": {
        "frames": "15",
        "height": "200",
        "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
        "mp4_size": "25123",
        "size": "32381",
        "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
        "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
        "webp_size": "12321",
        "width": "320"
      },
      "fixed_height_small": {
        "frames": "15",
        "height": "200",
        "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
        "mp4_size": "25123",
        "size": "32381",
        "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
        "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
        "webp_size": "12321",
        "width": "320"
      },
      "fixed_height_small_still": {
        "frames": "15",
        "height": "200",
        "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
        "mp4_size": "25123",
        "size": "32381",
        "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
        "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
        "webp_size": "12321",
        "width": "320"
      },
      "fixed_height_still": {
        "frames": "15",
        "height": "200",
        "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
        "mp4_size": "25123",
        "size": "32381",
        "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
        "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
        "webp_size": "12321",
        "width": "320"
      },
      "fixed_width": {
        "frames": "15",
        "height": "200",
        "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
        "mp4_size": "25123",
        "size": "32381",
        "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
        "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
        "webp_size": "12321",
        "width": "320"
      },
      "fixed_width_downsampled": {
        "frames": "15",
        "height": "200",
        "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
        "mp4_size": "25123",
        "size": "32381",
        "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
        "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
        "webp_size": "12321",
        "width": "320"
      },
      "fixed_width_small": {
        "frames": "15",
        "height": "200",
        "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
        "mp4_size": "25123",
        "size": "32381",
        "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
        "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
        "webp_size": "12321",
        "width": "320"
      },
      "fixed_width_small_still": {
        "frames": "15",
        "height": "200",
        "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
        "mp4_size": "25123",
        "size": "32381",
        "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
        "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
        "webp_size": "12321",
        "width": "320"
      },
      "fixed_width_still": {
        "frames": "15",
        "height": "200",
        "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
        "mp4_size": "25123",
        "size": "32381",
        "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
        "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
        "webp_size": "12321",
        "width": "320"
      },
      "looping": {
        "frames": "15",
        "height": "200",
        "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
        "mp4_size": "25123",
        "size": "32381",
        "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
        "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
        "webp_size": "12321",
        "width": "320"
      },
      "original": {
        "frames": "15",
        "height": "200",
        "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
        "mp4_size": "25123",
        "size": "32381",
        "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
        "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
        "webp_size": "12321",
        "width": "320"
      },
      "original_still": {
        "frames": "15",
        "height": "200",
        "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
        "mp4_size": "25123",
        "size": "32381",
        "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
        "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
        "webp_size": "12321",
        "width": "320"
      },
      "preview": {
        "frames": "15",
        "height": "200",
        "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
        "mp4_size": "25123",
        "size": "32381",
        "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
        "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
        "webp_size": "12321",
        "width": "320"
      },
      "preview_gif": {
        "frames": "15",
        "height": "200",
        "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
        "mp4_size": "25123",
        "size": "32381",
        "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
        "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
        "webp_size": "12321",
        "width": "320"
      }
    },
    "import_datetime": "2013-08-01 12:41:48",
    "rating": "g",
    "slug": "confused-flying-YsTs5ltWtEhnq",
    "source": "http://www.reddit.com/r/reactiongifs/comments/1xpyaa/superman_goes_to_hollywood/",
    "source_post_url": "http://cheezburger.com/5282328320",
    "source_tld": "cheezburger.com",
    "tags": [
      "string"
    ],
    "trending_datetime": "2013-08-01 12:41:48",
    "type": "gif",
    "update_datetime": "2013-08-01 12:41:48",
    "url": "http://giphy.com/gifs/confused-flying-YsTs5ltWtEhnq",
    "user": {
      "avatar_url": "https://media1.giphy.com/avatars/election2016/XwYrZi5H87o6.gif",
      "banner_url": "https://media4.giphy.com/avatars/cheezburger/XkuejOhoGLE6.jpg",
      "display_name": "JoeCool4000",
      "profile_url": "https://giphy.com/cheezburger/",
      "twitter": "@joecool4000",
      "username": "joecool4000"
    },
    "username": "JoeCool4000"
  },
  "meta": {
    "msg": "OK",
    "response_id": "57eea03c72381f86e05c35d2",
    "status": 200
  }
}
```

<h3 id="translate-phrase-to-sticker-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|400|Bad Request|Your request was formatted incorrectly or missing required parameters.|None|
|403|Forbidden|You weren't authorized to make your request; most likely this indicates an issue with your API Key.|None|
|404|Not Found|The particular GIF you are requesting was not found. This occurs, for example, if you request a GIF by an id that does not exist.|None|
|429|Too Many Requests|Your API Key is making too many requests. Read about [requesting a Production Key](https://developers.giphy.com/docs/#access) to upgrade your API Key rate limits.<br>|None|

<h3 id="translate-phrase-to-sticker-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Gif](#schemagif)|false|none|none|
|meta|[Meta](#schemameta)|false|none|The Meta Object contains basic information regarding the request, whether it was successful, and the response given by the API.  Check `responses` to see a description of types of response codes the API might give you under different cirumstances.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Trending Stickers

<a id="opIdtrendingStickers"></a>

> Code samples

```bash
curl "https://example.com/stickers/trending?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /stickers/trending`

Fetch Stickers currently trending online. Hand curated by the GIPHY editorial team. Returns 25 results by default.


<h3 id="trending-stickers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer(int32)|false|The maximum number of records to return.|
|offset|query|integer(int32)|false|An optional results offset.|
|rating|query|string|false|Filters results by specified rating.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "bitly_url": "http://gph.is/1gsWDcL",
      "content_url": "string",
      "create_datetime": "2013-08-01 12:41:48",
      "embded_url": "http://giphy.com/embed/YsTs5ltWtEhnq",
      "featured_tags": [
        "string"
      ],
      "id": "YsTs5ltWtEhnq",
      "images": {
        "downsized": {
          "frames": "15",
          "height": "200",
          "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
          "mp4_size": "25123",
          "size": "32381",
          "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
          "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
          "webp_size": "12321",
          "width": "320"
        },
        "downsized_large": {
          "frames": "15",
          "height": "200",
          "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
          "mp4_size": "25123",
          "size": "32381",
          "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
          "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
          "webp_size": "12321",
          "width": "320"
        },
        "downsized_medium": {
          "frames": "15",
          "height": "200",
          "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
          "mp4_size": "25123",
          "size": "32381",
          "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
          "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
          "webp_size": "12321",
          "width": "320"
        },
        "downsized_small": {
          "frames": "15",
          "height": "200",
          "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
          "mp4_size": "25123",
          "size": "32381",
          "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
          "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
          "webp_size": "12321",
          "width": "320"
        },
        "downsized_still": {
          "frames": "15",
          "height": "200",
          "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
          "mp4_size": "25123",
          "size": "32381",
          "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
          "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
          "webp_size": "12321",
          "width": "320"
        },
        "fixed_height": {
          "frames": "15",
          "height": "200",
          "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
          "mp4_size": "25123",
          "size": "32381",
          "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
          "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
          "webp_size": "12321",
          "width": "320"
        },
        "fixed_height_downsampled": {
          "frames": "15",
          "height": "200",
          "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
          "mp4_size": "25123",
          "size": "32381",
          "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
          "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
          "webp_size": "12321",
          "width": "320"
        },
        "fixed_height_small": {
          "frames": "15",
          "height": "200",
          "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
          "mp4_size": "25123",
          "size": "32381",
          "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
          "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
          "webp_size": "12321",
          "width": "320"
        },
        "fixed_height_small_still": {
          "frames": "15",
          "height": "200",
          "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
          "mp4_size": "25123",
          "size": "32381",
          "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
          "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
          "webp_size": "12321",
          "width": "320"
        },
        "fixed_height_still": {
          "frames": "15",
          "height": "200",
          "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
          "mp4_size": "25123",
          "size": "32381",
          "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
          "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
          "webp_size": "12321",
          "width": "320"
        },
        "fixed_width": {
          "frames": "15",
          "height": "200",
          "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
          "mp4_size": "25123",
          "size": "32381",
          "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
          "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
          "webp_size": "12321",
          "width": "320"
        },
        "fixed_width_downsampled": {
          "frames": "15",
          "height": "200",
          "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
          "mp4_size": "25123",
          "size": "32381",
          "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
          "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
          "webp_size": "12321",
          "width": "320"
        },
        "fixed_width_small": {
          "frames": "15",
          "height": "200",
          "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
          "mp4_size": "25123",
          "size": "32381",
          "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
          "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
          "webp_size": "12321",
          "width": "320"
        },
        "fixed_width_small_still": {
          "frames": "15",
          "height": "200",
          "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
          "mp4_size": "25123",
          "size": "32381",
          "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
          "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
          "webp_size": "12321",
          "width": "320"
        },
        "fixed_width_still": {
          "frames": "15",
          "height": "200",
          "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
          "mp4_size": "25123",
          "size": "32381",
          "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
          "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
          "webp_size": "12321",
          "width": "320"
        },
        "looping": {
          "frames": "15",
          "height": "200",
          "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
          "mp4_size": "25123",
          "size": "32381",
          "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
          "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
          "webp_size": "12321",
          "width": "320"
        },
        "original": {
          "frames": "15",
          "height": "200",
          "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
          "mp4_size": "25123",
          "size": "32381",
          "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
          "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
          "webp_size": "12321",
          "width": "320"
        },
        "original_still": {
          "frames": "15",
          "height": "200",
          "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
          "mp4_size": "25123",
          "size": "32381",
          "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
          "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
          "webp_size": "12321",
          "width": "320"
        },
        "preview": {
          "frames": "15",
          "height": "200",
          "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
          "mp4_size": "25123",
          "size": "32381",
          "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
          "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
          "webp_size": "12321",
          "width": "320"
        },
        "preview_gif": {
          "frames": "15",
          "height": "200",
          "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
          "mp4_size": "25123",
          "size": "32381",
          "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
          "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
          "webp_size": "12321",
          "width": "320"
        }
      },
      "import_datetime": "2013-08-01 12:41:48",
      "rating": "g",
      "slug": "confused-flying-YsTs5ltWtEhnq",
      "source": "http://www.reddit.com/r/reactiongifs/comments/1xpyaa/superman_goes_to_hollywood/",
      "source_post_url": "http://cheezburger.com/5282328320",
      "source_tld": "cheezburger.com",
      "tags": [
        "string"
      ],
      "trending_datetime": "2013-08-01 12:41:48",
      "type": "gif",
      "update_datetime": "2013-08-01 12:41:48",
      "url": "http://giphy.com/gifs/confused-flying-YsTs5ltWtEhnq",
      "user": {
        "avatar_url": "https://media1.giphy.com/avatars/election2016/XwYrZi5H87o6.gif",
        "banner_url": "https://media4.giphy.com/avatars/cheezburger/XkuejOhoGLE6.jpg",
        "display_name": "JoeCool4000",
        "profile_url": "https://giphy.com/cheezburger/",
        "twitter": "@joecool4000",
        "username": "joecool4000"
      },
      "username": "JoeCool4000"
    }
  ],
  "meta": {
    "msg": "OK",
    "response_id": "57eea03c72381f86e05c35d2",
    "status": 200
  },
  "pagination": {
    "count": 25,
    "offset": 75,
    "total_count": 250
  }
}
```

<h3 id="trending-stickers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|400|Bad Request|Your request was formatted incorrectly or missing required parameters.|None|
|403|Forbidden|You weren't authorized to make your request; most likely this indicates an issue with your API Key.|None|
|404|Not Found|The particular GIF you are requesting was not found. This occurs, for example, if you request a GIF by an id that does not exist.|None|
|429|Too Many Requests|Your API Key is making too many requests. Read about [requesting a Production Key](https://developers.giphy.com/docs/#access) to upgrade your API Key rate limits.<br>|None|

<h3 id="trending-stickers-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Gif](#schemagif)]|false|none|none|
|meta|[Meta](#schemameta)|false|none|The Meta Object contains basic information regarding the request, whether it was successful, and the response given by the API.  Check `responses` to see a description of types of response codes the API might give you under different cirumstances.<br>|
|pagination|[Pagination](#schemapagination)|false|none|The Pagination Object contains information relating to the number of total results available as well as the number of results fetched and their relative positions.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

# Schemas

<h2 id="tocS_Gif">Gif</h2>
<!-- backwards compatibility -->
<a id="schemagif"></a>
<a id="schema_Gif"></a>
<a id="tocSgif"></a>
<a id="tocsgif"></a>

```json
{
  "bitly_url": "http://gph.is/1gsWDcL",
  "content_url": "string",
  "create_datetime": "2013-08-01 12:41:48",
  "embded_url": "http://giphy.com/embed/YsTs5ltWtEhnq",
  "featured_tags": [
    "string"
  ],
  "id": "YsTs5ltWtEhnq",
  "images": {
    "downsized": {
      "frames": "15",
      "height": "200",
      "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
      "mp4_size": "25123",
      "size": "32381",
      "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
      "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
      "webp_size": "12321",
      "width": "320"
    },
    "downsized_large": {
      "frames": "15",
      "height": "200",
      "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
      "mp4_size": "25123",
      "size": "32381",
      "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
      "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
      "webp_size": "12321",
      "width": "320"
    },
    "downsized_medium": {
      "frames": "15",
      "height": "200",
      "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
      "mp4_size": "25123",
      "size": "32381",
      "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
      "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
      "webp_size": "12321",
      "width": "320"
    },
    "downsized_small": {
      "frames": "15",
      "height": "200",
      "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
      "mp4_size": "25123",
      "size": "32381",
      "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
      "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
      "webp_size": "12321",
      "width": "320"
    },
    "downsized_still": {
      "frames": "15",
      "height": "200",
      "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
      "mp4_size": "25123",
      "size": "32381",
      "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
      "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
      "webp_size": "12321",
      "width": "320"
    },
    "fixed_height": {
      "frames": "15",
      "height": "200",
      "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
      "mp4_size": "25123",
      "size": "32381",
      "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
      "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
      "webp_size": "12321",
      "width": "320"
    },
    "fixed_height_downsampled": {
      "frames": "15",
      "height": "200",
      "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
      "mp4_size": "25123",
      "size": "32381",
      "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
      "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
      "webp_size": "12321",
      "width": "320"
    },
    "fixed_height_small": {
      "frames": "15",
      "height": "200",
      "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
      "mp4_size": "25123",
      "size": "32381",
      "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
      "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
      "webp_size": "12321",
      "width": "320"
    },
    "fixed_height_small_still": {
      "frames": "15",
      "height": "200",
      "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
      "mp4_size": "25123",
      "size": "32381",
      "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
      "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
      "webp_size": "12321",
      "width": "320"
    },
    "fixed_height_still": {
      "frames": "15",
      "height": "200",
      "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
      "mp4_size": "25123",
      "size": "32381",
      "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
      "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
      "webp_size": "12321",
      "width": "320"
    },
    "fixed_width": {
      "frames": "15",
      "height": "200",
      "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
      "mp4_size": "25123",
      "size": "32381",
      "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
      "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
      "webp_size": "12321",
      "width": "320"
    },
    "fixed_width_downsampled": {
      "frames": "15",
      "height": "200",
      "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
      "mp4_size": "25123",
      "size": "32381",
      "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
      "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
      "webp_size": "12321",
      "width": "320"
    },
    "fixed_width_small": {
      "frames": "15",
      "height": "200",
      "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
      "mp4_size": "25123",
      "size": "32381",
      "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
      "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
      "webp_size": "12321",
      "width": "320"
    },
    "fixed_width_small_still": {
      "frames": "15",
      "height": "200",
      "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
      "mp4_size": "25123",
      "size": "32381",
      "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
      "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
      "webp_size": "12321",
      "width": "320"
    },
    "fixed_width_still": {
      "frames": "15",
      "height": "200",
      "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
      "mp4_size": "25123",
      "size": "32381",
      "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
      "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
      "webp_size": "12321",
      "width": "320"
    },
    "looping": {
      "frames": "15",
      "height": "200",
      "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
      "mp4_size": "25123",
      "size": "32381",
      "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
      "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
      "webp_size": "12321",
      "width": "320"
    },
    "original": {
      "frames": "15",
      "height": "200",
      "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
      "mp4_size": "25123",
      "size": "32381",
      "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
      "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
      "webp_size": "12321",
      "width": "320"
    },
    "original_still": {
      "frames": "15",
      "height": "200",
      "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
      "mp4_size": "25123",
      "size": "32381",
      "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
      "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
      "webp_size": "12321",
      "width": "320"
    },
    "preview": {
      "frames": "15",
      "height": "200",
      "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
      "mp4_size": "25123",
      "size": "32381",
      "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
      "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
      "webp_size": "12321",
      "width": "320"
    },
    "preview_gif": {
      "frames": "15",
      "height": "200",
      "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
      "mp4_size": "25123",
      "size": "32381",
      "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
      "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
      "webp_size": "12321",
      "width": "320"
    }
  },
  "import_datetime": "2013-08-01 12:41:48",
  "rating": "g",
  "slug": "confused-flying-YsTs5ltWtEhnq",
  "source": "http://www.reddit.com/r/reactiongifs/comments/1xpyaa/superman_goes_to_hollywood/",
  "source_post_url": "http://cheezburger.com/5282328320",
  "source_tld": "cheezburger.com",
  "tags": [
    "string"
  ],
  "trending_datetime": "2013-08-01 12:41:48",
  "type": "gif",
  "update_datetime": "2013-08-01 12:41:48",
  "url": "http://giphy.com/gifs/confused-flying-YsTs5ltWtEhnq",
  "user": {
    "avatar_url": "https://media1.giphy.com/avatars/election2016/XwYrZi5H87o6.gif",
    "banner_url": "https://media4.giphy.com/avatars/cheezburger/XkuejOhoGLE6.jpg",
    "display_name": "JoeCool4000",
    "profile_url": "https://giphy.com/cheezburger/",
    "twitter": "@joecool4000",
    "username": "joecool4000"
  },
  "username": "JoeCool4000"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bitly_url|string|false|none|The unique bit.ly URL for this GIF|
|content_url|string|false|none|Currently unused|
|create_datetime|string(date-time)|false|none|The date this GIF was added to the GIPHY database.|
|embded_url|string|false|none|A URL used for embedding this GIF|
|featured_tags|[string]|false|none|An array of featured tags for this GIF (Note: Not available when using the Public Beta Key)<br>|
|id|string|false|none|This GIF's unique ID|
|images|object|false|none|An object containing data for various available formats and sizes of this GIF.|
|import_datetime|string(date-time)|false|none|The creation or upload date from this GIF's source.|
|rating|string|false|none|The MPAA-style rating for this content. Examples include Y, G, PG, PG-13 and R|
|slug|string|false|none|The unique slug used in this GIF's URL|
|source|string|false|none|The page on which this GIF was found|
|source_post_url|string|false|none|The URL of the webpage on which this GIF was found.|
|source_tld|string|false|none|The top level domain of the source URL.|
|tags|[string]|false|none|An array of tags for this GIF (Note: Not available when using the Public Beta Key)<br>|
|trending_datetime|string(date-time)|false|none|The date on which this gif was marked trending, if applicable.|
|type|string|false|none|Type of the gif. By default, this is almost always gif|
|update_datetime|string(date-time)|false|none|The date on which this GIF was last updated.|
|url|string|false|none|The unique URL for this GIF|
|user|[User](#schemauser)|false|none|The User Object contains information about the user associated with a GIF and URLs to assets such as that user's avatar image, profile, and more.|
|username|string|false|none|The username this GIF is attached to, if applicable|

#### Enumerated Values

|Property|Value|
|---|---|
|type|gif|

<h2 id="tocS_Image">Image</h2>
<!-- backwards compatibility -->
<a id="schemaimage"></a>
<a id="schema_Image"></a>
<a id="tocSimage"></a>
<a id="tocsimage"></a>

```json
{
  "frames": "15",
  "height": "200",
  "mp4": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4",
  "mp4_size": "25123",
  "size": "32381",
  "url": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif",
  "webp": "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp",
  "webp_size": "12321",
  "width": "320"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|frames|string|false|none|The number of frames in this GIF.|
|height|string|false|none|The height of this GIF in pixels.|
|mp4|string|false|none|The URL for this GIF in .MP4 format.|
|mp4_size|string|false|none|The size in bytes of the .MP4 file corresponding to this GIF.|
|size|string|false|none|The size of this GIF in bytes.|
|url|string|false|none|The publicly-accessible direct URL for this GIF.|
|webp|string|false|none|The URL for this GIF in .webp format.|
|webp_size|string|false|none|The size in bytes of the .webp file corresponding to this GIF.|
|width|string|false|none|The width of this GIF in pixels.|

<h2 id="tocS_Meta">Meta</h2>
<!-- backwards compatibility -->
<a id="schemameta"></a>
<a id="schema_Meta"></a>
<a id="tocSmeta"></a>
<a id="tocsmeta"></a>

```json
{
  "msg": "OK",
  "response_id": "57eea03c72381f86e05c35d2",
  "status": 200
}
```

The Meta Object contains basic information regarding the request, whether it was successful, and the response given by the API.  Check `responses` to see a description of types of response codes the API might give you under different cirumstances.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|msg|string|false|none|HTTP Response Message|
|response_id|string|false|none|A unique ID paired with this response from the API.|
|status|integer(int32)|false|none|HTTP Response Code|

<h2 id="tocS_Pagination">Pagination</h2>
<!-- backwards compatibility -->
<a id="schemapagination"></a>
<a id="schema_Pagination"></a>
<a id="tocSpagination"></a>
<a id="tocspagination"></a>

```json
{
  "count": 25,
  "offset": 75,
  "total_count": 250
}
```

The Pagination Object contains information relating to the number of total results available as well as the number of results fetched and their relative positions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer(int32)|false|none|Total number of items returned.|
|offset|integer(int32)|false|none|Position in pagination.|
|total_count|integer(int32)|false|none|Total number of items available.|

<h2 id="tocS_User">User</h2>
<!-- backwards compatibility -->
<a id="schemauser"></a>
<a id="schema_User"></a>
<a id="tocSuser"></a>
<a id="tocsuser"></a>

```json
{
  "avatar_url": "https://media1.giphy.com/avatars/election2016/XwYrZi5H87o6.gif",
  "banner_url": "https://media4.giphy.com/avatars/cheezburger/XkuejOhoGLE6.jpg",
  "display_name": "JoeCool4000",
  "profile_url": "https://giphy.com/cheezburger/",
  "twitter": "@joecool4000",
  "username": "joecool4000"
}
```

The User Object contains information about the user associated with a GIF and URLs to assets such as that user's avatar image, profile, and more.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|avatar_url|string|false|none|The URL for this user's avatar image.|
|banner_url|string|false|none|The URL for the banner image that appears atop this user's profile page.|
|display_name|string|false|none|The display name associated with this user (contains formatting the base username might not).|
|profile_url|string|false|none|The URL for this user's profile.|
|twitter|string|false|none|The Twitter username associated with this user, if applicable.|
|username|string|false|none|The username associated with this user.|
