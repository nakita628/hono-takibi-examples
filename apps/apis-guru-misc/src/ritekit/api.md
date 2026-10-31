<h1 id="ritekit-api">RiteKit API v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

RiteKit API is based on REST principles.

Authentication uses standard OAuth 2.0 process

##Getting started

1. Sign up for [RiteKit](https://ritekit.com/)

1. Go to [developer dashboard](https://ritekit.com/developer/dashboard/)

1. Click "Create a token" button to get your **Client ID** and **Client secret**

1. When you reach your free limit of calls per month, [upgrade to paid tiers](https://ritekit.com/developer/)

## Options for authorizing API Calls

#### Using Client ID directly

You can directly connect to our API using your **client ID** by sending it as a GET query parameter. This option is simple (no need for oAuth) but it should be used only in case the Client ID is not exposed publicly.

GET  https://api.ritekit.com/v1/stats/multiple-hashtags?tags=php&client_id=292c6912e7710c838347ae178b4a

Base URLs:

* <a href="https://api.ritekit.com">https://api.ritekit.com</a>

<h1 id="ritekit-api-default">Default</h1>

## Auto-Emojify

<a id="opIdAuto-Emojify"></a>

> Code samples

```bash
curl 'https://example.com/v1/emoji/auto-emojify?text=Why%20robots%20may%20soon%20steal%20all%20manufacturing%20jobs%20%E2%80%93%20but%20it%E2%80%99s%20not%20all%20bad%20news' \
  -H 'Accept: application/json'
```

`GET /v1/emoji/auto-emojify`

Returns text of the post with emoji added

<h3 id="auto-emojify-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|true|Text of the post|

> Example responses

> 200 Response

```json
{
  "code": 200,
  "message": "OK",
  "result": true,
  "text": "Why robots may soon steal all manufacturing jobs – but it’s not all bad news 🤖🗞❓"
}
```

<h3 id="auto-emojify-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Emoji Suggestions

<a id="opIdEmoji Suggestions"></a>

> Code samples

```bash
curl 'https://example.com/v1/emoji/suggestions?text=Why%20robots%20may%20soon%20steal%20all%20manufacturing%20jobs%20%E2%80%93%20but%20it%E2%80%99s%20not%20all%20bad%20news' \
  -H 'Accept: application/json'
```

`GET /v1/emoji/suggestions`

Returns list of emoji suggestions for a given text of the post

<h3 id="emoji-suggestions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|true|Text of the post|

> Example responses

> 200 Response

```json
{
  "code": 200,
  "emojis": [
    "🤖",
    "🗞",
    "❓"
  ],
  "message": "OK",
  "result": true
}
```

<h3 id="emoji-suggestions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Animate Image

<a id="opIdAnimate Image"></a>

> Code samples

```bash
curl 'https://example.com/v1/images/animate?url=https%3A%2F%2Fjpeg.org%2Fimages%2Fjpeg-home.jpg&type=glint'
```

`GET /v1/images/animate`

Returns URL of an animated GIF.

<h3 id="animate-image-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|url|query|string|true|URL of the company|
|type|query|string|true|URL of the company|

> Example responses

> 200 Response

```text

```

<h3 id="animate-image-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Company Logo

<a id="opIdCompany Logo"></a>

> Code samples

```bash
curl 'https://example.com/v1/images/logo?domain=google.com'
```

`GET /v1/images/logo`

Returns a company logo based on website domain. If the logo is not in our database yet, it will be extracted from the site on the fly. White logo background is automatically removed to make the logo look better on color backgrounds.

Note: It is not possible to access our company logo API publicly without authentication. If you wish to do so, you have to create proxy on your own server that calls our API from the server side.

<h3 id="company-logo-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|domain|query|string|true|URL of the company|

> Example responses

> 200 Response

```text

```

<h3 id="company-logo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Text to Image

<a id="opIdText to Image"></a>

> Code samples

```bash
curl 'https://example.com/v1/images/quote?quote=If%20you%20love%20life%2C%20don'\''t%20waste%20time%2C%20for%20time%20is%20what%20life%20is%20made%20up%20of&author=Bruce%20Lee&fontSize=60&quoteFont=Lora&quoteFontColor=%234f4f4f&authorFont=Lato%20Black&authorFontColor=%23e5e5e5&enableHighlight=1&highlightColor=%23f0ea66&bgType=gradient&backgroundColor=%23000000&gradientType=linear&gradientColor1=%231ee691&gradientColor2=%231ddad6&brandLogo=https%3A%2F%2Fcdn.ritekit.com%2Fassets%2Fimg%2Fcommon%2Fmade-with-ritekit-white.png&animation=glint' \
  -H 'Accept: application/json'
```

`GET /v1/images/quote`

Returns URL of an image created from text according to given style parameters

<h3 id="text-to-image-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|quote|query|string|true|Text of the quote|
|author|query|string|true|Name of the author/source|
|fontSize|query|integer|true|Font size for the quote (author font size is calculated automatically)|
|quoteFont|query|string|true|Font-family used for quote text|
|quoteFontColor|query|string|true|Font color of the quote text|
|authorFont|query|string|true|Font-family used for author name|
|authorFontColor|query|string|true|Font color of the author|
|enableHighlight|query|integer|true|Enable highlight on quote text|
|highlightColor|query|string|true|Color used for highlight|
|bgType|query|string|true|Background type (gradient/solid)|
|backgroundColor|query|string|true|Background color for solid background type|
|gradientType|query|string|true|Type of gradient background (linear/radial)|
|gradientColor1|query|string|true|First color for gradient background type|
|gradientColor2|query|string|true|Second color for gradient background type|
|brandLogo|query|string|true|URL of the brand logo|
|animation|query|string|true|Animation type: none, rays, glint, circle|
|showQuoteMark|query|integer|false|showing/hiding quote mark|

> Example responses

> 200 Response

```json
{
  "result": true,
  "url": "https://media.ritekit.com/media/images/82a4d5be-6981-4913-8018-94161a5e190e.jpeg"
}
```

<h3 id="text-to-image-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## List of CTAs

<a id="opIdList of CTAs"></a>

> Code samples

```bash
curl https://example.com/v1/link/cta \
  -H 'Accept: application/json'
```

`GET /v1/link/cta`

Returns list of available CTA for current user. Requires each user to authenticate with RiteKit

> Example responses

> 200 Response

```json
{
  "list": [
    {
      "code": "Bit.ly",
      "default": 0,
      "id": "bit.ly",
      "name": "Bit.ly"
    },
    {
      "code": "test",
      "default": 0,
      "id": 2163,
      "name": "test"
    }
  ],
  "result": true
}
```

<h3 id="list-of-ctas-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Shorten Link

<a id="opIdShorten Link"></a>

> Code samples

```bash
curl 'https://example.com/v1/link/short-link?url=https%3A%2F%2Fritekit.com&cta=6530' \
  -H 'Accept: application/json'
```

`GET /v1/link/short-link`

Returns a shorten link with a given CTA.

<h3 id="shorten-link-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|url|query|string|true|URL|
|cta|query|integer|true|cta id|

> Example responses

> 200 Response

```json
{
  "ctaId": "6530",
  "limit": {
    "remaining": 1000
  },
  "original": "https://ritekit.com",
  "result": true,
  "service": "rite.ly",
  "url": "rite.ly/jr6e"
}
```

<h3 id="shorten-link-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Trending Hashtags

<a id="opIdTrending Hashtags"></a>

> Code samples

```bash
curl https://example.com/v1/search/trending \
  -H 'Accept: application/json'
```

`GET /v1/search/trending`

Returns list of hashtags currently trending on Twitter

<h3 id="trending-hashtags-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|green|query|boolean|false|Restrict results only to green hashtags. Hides overused (red) hashtags.|
|latin|query|boolean|false|Restrict results only to hashtags with latin characters|

> Example responses

> 200 Response

```json
{
  "code": 200,
  "message": "OK",
  "result": true,
  "tags": [
    {
      "color": 3,
      "exposure": 122017712,
      "links": 0.6537888,
      "mentions": 0.2131563,
      "photos": 0.2045048,
      "retweets": 10025,
      "tag": "blackfriday",
      "tweets": 6704
    },
    {
      "color": 3,
      "exposure": 51914008,
      "links": 0.4114146,
      "mentions": 0.1771709,
      "photos": 0.327556,
      "retweets": 9184,
      "tag": "happythanksgiving",
      "tweets": 5712
    },
    {
      "color": 3,
      "exposure": 5492292,
      "links": 0.9990805,
      "mentions": 0.0031261,
      "photos": 0.0283192,
      "retweets": 179,
      "tag": "job",
      "tweets": 5438
    },
    {
      "color": 3,
      "exposure": 7558725,
      "links": 0.0007849,
      "mentions": 0,
      "photos": 0.0007849,
      "retweets": 104,
      "tag": "hadith",
      "tweets": 5096
    },
    {
      "color": 3,
      "exposure": 5989358,
      "links": 0.1435726,
      "mentions": 0.4252922,
      "photos": 0.1087229,
      "retweets": 8846,
      "tag": "ariasharrystyles",
      "tweets": 4792
    },
    {
      "color": 3,
      "exposure": 541196,
      "links": 0.9822763,
      "mentions": 0.0036302,
      "photos": 0,
      "retweets": 192,
      "tag": "mtvstars",
      "tweets": 4683
    },
    {
      "color": 3,
      "exposure": 4334317,
      "links": 0.0017961,
      "mentions": 0.0121239,
      "photos": 0.9982039,
      "retweets": 2200,
      "tag": "newprofilepic",
      "tweets": 4454
    },
    {
      "color": 3,
      "exposure": 4363421,
      "links": 1,
      "mentions": 0.0059172,
      "photos": 0.0089941,
      "retweets": 67,
      "tag": "hiring",
      "tweets": 4225
    },
    {
      "color": 3,
      "exposure": 11793633,
      "links": 0.0803743,
      "mentions": 0.2557115,
      "photos": 0.0195431,
      "retweets": 446,
      "tag": "boxluansantana10anos",
      "tweets": 3633
    },
    {
      "color": 3,
      "exposure": 7265592,
      "links": 0.97724,
      "mentions": 0.04552,
      "photos": 0.0959378,
      "retweets": 358,
      "tag": "ad",
      "tweets": 3471
    },
    {
      "color": 3,
      "exposure": 30332321,
      "links": 0.963461,
      "mentions": 0.0561239,
      "photos": 0.1584332,
      "retweets": 987,
      "tag": "news",
      "tweets": 3421
    },
    {
      "color": 3,
      "exposure": 8032954,
      "links": 0.0552941,
      "mentions": 0.0035294,
      "photos": 0.0035294,
      "retweets": 212,
      "tag": "quran",
      "tweets": 3400
    },
    {
      "color": 3,
      "exposure": 72458,
      "links": 1,
      "mentions": 0,
      "photos": 1,
      "retweets": 17,
      "tag": "trecru",
      "tweets": 3200
    },
    {
      "color": 3,
      "exposure": 6195338,
      "links": 1,
      "mentions": 0.1421536,
      "photos": 0.0013132,
      "retweets": 21,
      "tag": "tuitutil",
      "tweets": 3046
    },
    {
      "color": 3,
      "exposure": 47011650,
      "links": 0.8405505,
      "mentions": 0.2349782,
      "photos": 0.1285666,
      "retweets": 4009,
      "tag": "rt",
      "tweets": 2979
    },
    {
      "color": 3,
      "exposure": 19059058,
      "links": 0.7874807,
      "mentions": 0.3203246,
      "photos": 0.070711,
      "retweets": 1054,
      "tag": "np",
      "tweets": 2588
    },
    {
      "color": 3,
      "exposure": 2478625,
      "links": 0.1447261,
      "mentions": 0.1054783,
      "photos": 0.1210139,
      "retweets": 14304,
      "tag": "indonesia",
      "tweets": 2446
    },
    {
      "color": 3,
      "exposure": 54113471,
      "links": 0.9290407,
      "mentions": 0.1533071,
      "photos": 0.1060009,
      "retweets": 559,
      "tag": "music",
      "tweets": 2283
    },
    {
      "color": 3,
      "exposure": 5046671,
      "links": 0.9981884,
      "mentions": 0.0076993,
      "photos": 0.0303442,
      "retweets": 42,
      "tag": "jobs",
      "tweets": 2208
    }
  ]
}
```

<h3 id="trending-hashtags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Auto-Hashtag

<a id="opIdAuto-Hashtag"></a>

> Code samples

```bash
curl 'https://example.com/v1/stats/auto-hashtag?post=Is%20artificial%20intelligence%20the%20future%20of%20customer%20service%3F' \
  -H 'Accept: application/json'
```

`GET /v1/stats/auto-hashtag`

Returns auto-hashtagged text of the post.

<h3 id="auto-hashtag-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|post|query|string|true|Text of the post|
|maxHashtags|query|integer|false|Max number of hashtags.|
|hashtagPosition|query|string|false|Position of hashtags: end => at the end, auto => anywhere|

> Example responses

> 200 Response

```json
{
  "code": 200,
  "message": "OK",
  "post": "Is #ArtificialIntelligence the future of #CustomerService?",
  "result": true
}
```

<h3 id="auto-hashtag-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Hashtag Suggestions

<a id="opIdHashtag Suggestions"></a>

> Code samples

```bash
curl 'https://example.com/v1/stats/hashtag-suggestions?text=seo' \
  -H 'Accept: application/json'
```

`GET /v1/stats/hashtag-suggestions`

Returns list of hashtag suggestions for a single-word topic or a shorter text up to 1000 characters. Takes into account both semantic relevancy and real-time hashtag popularity.

<h3 id="hashtag-suggestions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|true|Topic|

> Example responses

> 200 Response

```json
{
  "code": 200,
  "data": [
    {
      "color": 3,
      "exposure": 5217908,
      "hashtag": "seo",
      "images": 31.33333,
      "links": 98,
      "mentions": 14.66667,
      "retweets": 338,
      "tag": "seo",
      "tweets": 600
    }
  ],
  "hashtag": "seo",
  "message": "OK",
  "result": true
}
```

<h3 id="hashtag-suggestions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Hashtag History

<a id="opIdHashtag History"></a>

> Code samples

```bash
curl https://example.com/v1/stats/history/job \
  -H 'Accept: application/json'
```

`GET /v1/stats/history/{hashtag}`

Returns historical stats for a given hashtag from the last 30 days

<h3 id="hashtag-history-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|hashtag|path|string|true|Hashtag without # mark|

> Example responses

> 200 Response

```json
{
  "code": 200,
  "color": [
    "Unused",
    "Overused",
    "Good",
    "Great"
  ],
  "data": [
    {
      "color": 3,
      "date": "2017-10-25",
      "exposure": 160471200,
      "images": 0.03,
      "links": 1,
      "mentions": 0.01,
      "retweets": 3100,
      "tag": "job",
      "tweets": 153000
    },
    {
      "color": 3,
      "date": "2017-10-26",
      "exposure": 109069700,
      "images": 0.02,
      "links": 1,
      "mentions": 0.01,
      "retweets": 4100,
      "tag": "job",
      "tweets": 151000
    },
    {
      "color": 3,
      "date": "2017-10-27",
      "exposure": 137699400,
      "images": 0.03,
      "links": 1,
      "mentions": 0.01,
      "retweets": 3500,
      "tag": "job",
      "tweets": 148800
    },
    {
      "color": 3,
      "date": "2017-10-28",
      "exposure": 235051400,
      "images": 0.03,
      "links": 1,
      "mentions": 0.01,
      "retweets": 4600,
      "tag": "job",
      "tweets": 137300
    },
    {
      "color": 3,
      "date": "2017-10-29",
      "exposure": 121564000,
      "images": 0.02,
      "links": 1,
      "mentions": 0,
      "retweets": 3500,
      "tag": "job",
      "tweets": 134500
    },
    {
      "color": 3,
      "date": "2017-10-30",
      "exposure": 128854800,
      "images": 0.02,
      "links": 1,
      "mentions": 0.01,
      "retweets": 3600,
      "tag": "job",
      "tweets": 143000
    },
    {
      "color": 3,
      "date": "2017-10-31",
      "exposure": 132086500,
      "images": 0.02,
      "links": 1,
      "mentions": 0.01,
      "retweets": 4100,
      "tag": "job",
      "tweets": 140800
    },
    {
      "color": 3,
      "date": "2017-11-01",
      "exposure": 131824000,
      "images": 0.02,
      "links": 0.99,
      "mentions": 0.01,
      "retweets": 3400,
      "tag": "job",
      "tweets": 145400
    },
    {
      "color": 3,
      "date": "2017-11-02",
      "exposure": 184530800,
      "images": 0.02,
      "links": 1,
      "mentions": 0.01,
      "retweets": 3600,
      "tag": "job",
      "tweets": 155700
    },
    {
      "color": 3,
      "date": "2017-11-03",
      "exposure": 144650100,
      "images": 0.02,
      "links": 1,
      "mentions": 0.01,
      "retweets": 4200,
      "tag": "job",
      "tweets": 153100
    },
    {
      "color": 3,
      "date": "2017-11-04",
      "exposure": 109752200,
      "images": 0.02,
      "links": 1,
      "mentions": 0.01,
      "retweets": 4700,
      "tag": "job",
      "tweets": 137800
    },
    {
      "color": 3,
      "date": "2017-11-05",
      "exposure": 135693300,
      "images": 0.02,
      "links": 1,
      "mentions": 0.01,
      "retweets": 3600,
      "tag": "job",
      "tweets": 136400
    },
    {
      "color": 3,
      "date": "2017-11-06",
      "exposure": 156251100,
      "images": 0.02,
      "links": 1,
      "mentions": 0.01,
      "retweets": 3400,
      "tag": "job",
      "tweets": 151500
    },
    {
      "color": 3,
      "date": "2017-11-07",
      "exposure": 172000300,
      "images": 0.02,
      "links": 1,
      "mentions": 0.01,
      "retweets": 4500,
      "tag": "job",
      "tweets": 157300
    },
    {
      "color": 3,
      "date": "2017-11-08",
      "exposure": 179755400,
      "images": 0.02,
      "links": 1,
      "mentions": 0.01,
      "retweets": 3800,
      "tag": "job",
      "tweets": 155800
    },
    {
      "color": 3,
      "date": "2017-11-09",
      "exposure": 146006500,
      "images": 0.02,
      "links": 1,
      "mentions": 0.01,
      "retweets": 2800,
      "tag": "job",
      "tweets": 164300
    },
    {
      "color": 3,
      "date": "2017-11-10",
      "exposure": 109453700,
      "images": 0.03,
      "links": 1,
      "mentions": 0.01,
      "retweets": 2700,
      "tag": "job",
      "tweets": 153500
    },
    {
      "color": 3,
      "date": "2017-11-11",
      "exposure": 103181700,
      "images": 0.01,
      "links": 1,
      "mentions": 0.01,
      "retweets": 1800,
      "tag": "job",
      "tweets": 144800
    },
    {
      "color": 3,
      "date": "2017-11-12",
      "exposure": 67415600,
      "images": 0.02,
      "links": 1,
      "mentions": 0.01,
      "retweets": 800,
      "tag": "job",
      "tweets": 40200
    },
    {
      "color": 3,
      "date": "2017-11-13",
      "exposure": 102777900,
      "images": 0.02,
      "links": 1,
      "mentions": 0.01,
      "retweets": 2400,
      "tag": "job",
      "tweets": 115200
    },
    {
      "color": 3,
      "date": "2017-11-14",
      "exposure": 100626300,
      "images": 0.03,
      "links": 1,
      "mentions": 0.01,
      "retweets": 2500,
      "tag": "job",
      "tweets": 120400
    },
    {
      "color": 3,
      "date": "2017-11-15",
      "exposure": 103573900,
      "images": 0.03,
      "links": 1,
      "mentions": 0.01,
      "retweets": 2300,
      "tag": "job",
      "tweets": 148200
    },
    {
      "color": 3,
      "date": "2017-11-16",
      "exposure": 104332600,
      "images": 0.02,
      "links": 1,
      "mentions": 0.01,
      "retweets": 3900,
      "tag": "job",
      "tweets": 153000
    },
    {
      "color": 3,
      "date": "2017-11-17",
      "exposure": 114890500,
      "images": 0.03,
      "links": 1,
      "mentions": 0.01,
      "retweets": 2600,
      "tag": "job",
      "tweets": 124000
    },
    {
      "color": 3,
      "date": "2017-11-18",
      "exposure": 78934500,
      "images": 0.03,
      "links": 1,
      "mentions": 0.01,
      "retweets": 1900,
      "tag": "job",
      "tweets": 116400
    },
    {
      "color": 3,
      "date": "2017-11-19",
      "exposure": 125604100,
      "images": 0.03,
      "links": 1,
      "mentions": 0.01,
      "retweets": 2600,
      "tag": "job",
      "tweets": 120400
    },
    {
      "color": 3,
      "date": "2017-11-20",
      "exposure": 157730700,
      "images": 0.03,
      "links": 1,
      "mentions": 0.01,
      "retweets": 3400,
      "tag": "job",
      "tweets": 128300
    },
    {
      "color": 3,
      "date": "2017-11-21",
      "exposure": 109622600,
      "images": 0.02,
      "links": 1,
      "mentions": 0,
      "retweets": 3100,
      "tag": "job",
      "tweets": 130000
    },
    {
      "color": 3,
      "date": "2017-11-22",
      "exposure": 85755200,
      "images": 0.02,
      "links": 1,
      "mentions": 0.01,
      "retweets": 1700,
      "tag": "job",
      "tweets": 111600
    },
    {
      "color": 3,
      "date": "2017-11-23",
      "exposure": 189899700,
      "images": 0.03,
      "links": 1,
      "mentions": 0.01,
      "retweets": 3300,
      "tag": "job",
      "tweets": 131400
    }
  ],
  "hashtag": "job",
  "message": "OK",
  "result": true
}
```

<h3 id="hashtag-history-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Hashtag Stats

<a id="opIdHashtag Stats"></a>

> Code samples

```bash
curl 'https://example.com/v1/stats/multiple-hashtags?tags=jobs%2Chello' \
  -H 'Accept: application/json'
```

`GET /v1/stats/multiple-hashtags`

Returns real-time stats for up to 100 hashtags (updated hourly).

<h3 id="hashtag-stats-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tags|query|[object]|true|Hashtag(s) without # mark|

> Example responses

> 200 Response

```json
{
  "code": 200,
  "color": [
    "Unused",
    "Overused",
    "Good",
    "Great"
  ],
  "hashtags": [
    "jobs",
    "hello"
  ],
  "message": "OK",
  "result": true,
  "stats": [
    {
      "color": 3,
      "exposure": 5046671,
      "hashtag": "jobs",
      "images": 0.0303442,
      "links": 0.9981884,
      "mentions": 0.0076993,
      "retweets": 42,
      "tag": "jobs",
      "tweets": 2208
    },
    {
      "color": 2,
      "exposure": 5254,
      "hashtag": "hello",
      "images": 0.5714286,
      "links": 0.3809524,
      "mentions": 0.1904762,
      "retweets": 12,
      "tag": "hello",
      "tweets": 21
    }
  ]
}
```

<h3 id="hashtag-stats-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Hashtags cleaner

<a id="opIdHashtags cleaner"></a>

> Code samples

```bash
curl 'https://example.com/v2/instagram/hashtags-cleaner?post=%23instaphotography%20%23instabeauty%20%23instagirls%20%23instanature%20%23instagirl%20%23photography%20%23beauty%20%23girls%20%23nature%20%23girl%20%23sky%20%23water%20%23lady%20%23ladies%20%23woman%20%23women%20%23photograph%20%23photographs%20%23beauties%20%23sunlight%20%23sitting%20%23waters%20%23skies%20%23sit%20%23photographies' \
  -H 'Accept: application/json'
```

`GET /v2/instagram/hashtags-cleaner`

Remove banned hashtags before posting to Instagram

<h3 id="hashtags-cleaner-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|post|query|string|true|post|

> Example responses

> 200 Response

```json
{
  "bannedHashtags": [
    "#instagirl",
    "#woman",
    "#women"
  ],
  "message": "OK",
  "post": "#instaphotography #instabeauty #instagirls #instanature #photography #beauty #girls #nature #girl #sky #water #lady #ladies #photograph #photographs #beauties #sunlight #sitting #waters #skies #sit #photographies",
  "result": true
}
```

<h3 id="hashtags-cleaner-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_Emojis">Emojis</h2>
<!-- backwards compatibility -->
<a id="schemaemojis"></a>
<a id="schema_Emojis"></a>
<a id="tocSemojis"></a>
<a id="tocsemojis"></a>

```json
null
```

<h2 id="tocS_Hashtags">Hashtags</h2>
<!-- backwards compatibility -->
<a id="schemahashtags"></a>
<a id="schema_Hashtags"></a>
<a id="tocShashtags"></a>
<a id="tocshashtags"></a>

```json
null
```

<h2 id="tocS_Images">Images</h2>
<!-- backwards compatibility -->
<a id="schemaimages"></a>
<a id="schema_Images"></a>
<a id="tocSimages"></a>
<a id="tocsimages"></a>

```json
null
```

<h2 id="tocS_Instagram">Instagram</h2>
<!-- backwards compatibility -->
<a id="schemainstagram"></a>
<a id="schema_Instagram"></a>
<a id="tocSinstagram"></a>
<a id="tocsinstagram"></a>

```json
null
```

<h2 id="tocS_Link_shortening">Link_shortening</h2>
<!-- backwards compatibility -->
<a id="schemalink_shortening"></a>
<a id="schema_Link_shortening"></a>
<a id="tocSlink_shortening"></a>
<a id="tocslink_shortening"></a>

```json
null
```
