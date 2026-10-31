<h1 id="bc-gov-news-api-service-10">BC Gov News API Service 1.0 v1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

News API

Base URLs:

* <a href="https://news.api.gov.bc.ca/">https://news.api.gov.bc.ca/</a>

License: <a href="https://www.apache.org/licenses/LICENSE-2.0">Apache 2.0</a>

<h1 id="bc-gov-news-api-service-10-facebookposts">FacebookPosts</h1>

## Get a Facebook post based on a Uri

<a id="opIdFacebookPosts_GetByUri"></a>

> Code samples

```bash
curl 'https://example.com/api/FacebookPosts/ByUri?api-version=1.0' \
  -H 'Accept: application/json'
```

`GET /api/FacebookPosts/ByUri`

<h3 id="get-a-facebook-post-based-on-a-uri-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|uri|query|string|false|none|
|api-version|query|string|true|The requested API version|

> Example responses

> 200 Response

```json
{
  "key": "string",
  "timestamp": "1970-01-01T00:00:00Z",
  "content": "string",
  "facebookObjectId": 0,
  "pictureUri": "string",
  "postComments": 0,
  "postLikes": 0,
  "postShares": 0,
  "poster": "string",
  "posterLikes": 0,
  "posterLogo": "string",
  "posterSubtitle": "string",
  "type": "string"
}
```

<h3 id="get-a-facebook-post-based-on-a-uri-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[FacebookPost](#schemafacebookpost)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="bc-gov-news-api-service-10-home">Home</h1>

## Returns the top level content for the home page

<a id="opIdHome_Get"></a>

> Code samples

```bash
curl 'https://example.com/api/Home?api-version=1.0' \
  -H 'Accept: application/json'
```

`GET /api/Home`

<h3 id="returns-the-top-level-content-for-the-home-page-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api-version|query|string|true|The requested API version|

> Example responses

> 200 Response

```json
{
  "key": "string",
  "timestamp": "1970-01-01T00:00:00Z",
  "featurePostKey": "string",
  "kind": "string",
  "name": "string",
  "topPostKey": "string",
  "liveWebcastFlashMediaManifestUrl": "string",
  "liveWebcastM3uPlaylist": "string"
}
```

<h3 id="returns-the-top-level-content-for-the-home-page-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Home](#schemahome)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="bc-gov-news-api-service-10-ministries">Ministries</h1>

## Get all ministries

<a id="opIdMinistries_GetAll"></a>

> Code samples

```bash
curl 'https://example.com/api/Ministries?api-version=1.0' \
  -H 'Accept: application/json'
```

`GET /api/Ministries`

<h3 id="get-all-ministries-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api-version|query|string|true|The requested API version|

> Example responses

> 200 Response

```json
[
  {
    "key": "string",
    "timestamp": "1970-01-01T00:00:00Z",
    "featurePostKey": "string",
    "kind": "string",
    "name": "string",
    "topPostKey": "string",
    "audioUri": "string",
    "flickrUri": "string",
    "isActive": true,
    "twitterFeedUsername": "string",
    "youtubeUri": "string",
    "childMinistryKey": "string",
    "contactUser": {
      "emailAddress": "string",
      "fullName": "string",
      "mobileNumber": "string",
      "phoneNumber": "string"
    },
    "displayAdditionalName": "string",
    "ministerName": "string",
    "ministryUrl": "string",
    "newsletterLinks": [
      {
        "key": "string",
        "timestamp": "1970-01-01T00:00:00Z",
        "uri": "string"
      }
    ],
    "parentMinistryKey": "string",
    "secondContactUser": {
      "emailAddress": "string",
      "fullName": "string",
      "mobileNumber": "string",
      "phoneNumber": "string"
    },
    "serviceLinks": [
      {
        "key": "string",
        "timestamp": "1970-01-01T00:00:00Z",
        "uri": "string"
      }
    ],
    "topicLinks": [
      {
        "key": "string",
        "timestamp": "1970-01-01T00:00:00Z",
        "uri": "string"
      }
    ],
    "weekendContactNumber": "string"
  }
]
```

<h3 id="get-all-ministries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="get-all-ministries-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Ministry](#schemaministry)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get the Ministry associated with the ministry key

<a id="opIdMinistries_GetOne"></a>

> Code samples

```bash
curl 'https://example.com/api/Ministries/string?api-version=1.0' \
  -H 'Accept: application/json'
```

`GET /api/Ministries/{key}`

<h3 id="get-the-ministry-associated-with-the-ministry-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|key|path|string|true|none|
|api-version|query|string|true|The requested API version|

> Example responses

> 200 Response

```json
{
  "key": "string",
  "timestamp": "1970-01-01T00:00:00Z",
  "featurePostKey": "string",
  "kind": "string",
  "name": "string",
  "topPostKey": "string",
  "audioUri": "string",
  "flickrUri": "string",
  "isActive": true,
  "twitterFeedUsername": "string",
  "youtubeUri": "string",
  "childMinistryKey": "string",
  "contactUser": {
    "emailAddress": "string",
    "fullName": "string",
    "mobileNumber": "string",
    "phoneNumber": "string"
  },
  "displayAdditionalName": "string",
  "ministerName": "string",
  "ministryUrl": "string",
  "newsletterLinks": [
    {
      "key": "string",
      "timestamp": "1970-01-01T00:00:00Z",
      "uri": "string"
    }
  ],
  "parentMinistryKey": "string",
  "secondContactUser": {
    "emailAddress": "string",
    "fullName": "string",
    "mobileNumber": "string",
    "phoneNumber": "string"
  },
  "serviceLinks": [
    {
      "key": "string",
      "timestamp": "1970-01-01T00:00:00Z",
      "uri": "string"
    }
  ],
  "topicLinks": [
    {
      "key": "string",
      "timestamp": "1970-01-01T00:00:00Z",
      "uri": "string"
    }
  ],
  "weekendContactNumber": "string"
}
```

<h3 id="get-the-ministry-associated-with-the-ministry-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Ministry](#schemaministry)|

<aside class="success">
This operation does not require authentication
</aside>

## Get the Minister associated with the ministry key

<a id="opIdMinistries_GetMinister"></a>

> Code samples

```bash
curl 'https://example.com/api/Ministries/string/Minister?api-version=1.0' \
  -H 'Accept: application/json'
```

`GET /api/Ministries/{key}/Minister`

<h3 id="get-the-minister-associated-with-the-ministry-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|key|path|string|true|none|
|api-version|query|string|true|The requested API version|

> Example responses

> 200 Response

```json
{
  "key": "string",
  "timestamp": "1970-01-01T00:00:00Z",
  "details": "string",
  "emailHtml": "string",
  "headline": "string",
  "photo": "string",
  "post": "string",
  "summary": "string"
}
```

<h3 id="get-the-minister-associated-with-the-ministry-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Minister](#schemaminister)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="bc-gov-news-api-service-10-newsletters">Newsletters</h1>

## Get all newsletters

<a id="opIdNewsletters_GetAll"></a>

> Code samples

```bash
curl 'https://example.com/api/Newsletters?api-version=1.0' \
  -H 'Accept: application/json'
```

`GET /api/Newsletters`

<h3 id="get-all-newsletters-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api-version|query|string|true|The requested API version|

> Example responses

> 200 Response

```json
[
  {
    "key": "string",
    "timestamp": "1970-01-01T00:00:00Z",
    "description": "string",
    "editions": [
      {
        "key": "string",
        "value": "string"
      }
    ],
    "ministryName": "string",
    "name": "string"
  }
]
```

<h3 id="get-all-newsletters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="get-all-newsletters-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Newsletter](#schemanewsletter)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get the image object reference by of a Newsletter Edition associated with the image guid

<a id="opIdNewsletters_GetImage"></a>

> Code samples

```bash
curl 'https://example.com/api/Newsletters/Images/string?api-version=1.0' \
  -H 'Accept: application/json'
```

`GET /api/Newsletters/Images/{guid}`

<h3 id="get-the-image-object-reference-by-of-a-newsletter-edition-associated-with-the-image-guid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|guid|path|string|true|none|
|api-version|query|string|true|The requested API version|

> Example responses

> 200 Response

```json
{
  "key": "string",
  "timestamp": "1970-01-01T00:00:00Z",
  "fileName": "string",
  "imageBytes": "string",
  "imageType": "string"
}
```

<h3 id="get-the-image-object-reference-by-of-a-newsletter-edition-associated-with-the-image-guid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[EditionImage](#schemaeditionimage)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a specific newsletter

<a id="opIdNewsletters_GetOne"></a>

> Code samples

```bash
curl 'https://example.com/api/Newsletters/string?api-version=1.0' \
  -H 'Accept: application/json'
```

`GET /api/Newsletters/{newsletterKey}`

<h3 id="get-a-specific-newsletter-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|newsletterKey|path|string|true|none|
|api-version|query|string|true|The requested API version|

> Example responses

> 200 Response

```json
{
  "key": "string",
  "timestamp": "1970-01-01T00:00:00Z",
  "description": "string",
  "editions": [
    {
      "key": "string",
      "value": "string"
    }
  ],
  "ministryName": "string",
  "name": "string"
}
```

<h3 id="get-a-specific-newsletter-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Newsletter](#schemanewsletter)|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a specific edition of a newsletter

<a id="opIdNewsletters_GetEdition"></a>

> Code samples

```bash
curl 'https://example.com/api/Newsletters/string/Editions/string?api-version=1.0' \
  -H 'Accept: application/json'
```

`GET /api/Newsletters/{newsletterKey}/Editions/{editionKey}`

<h3 id="returns-a-specific-edition-of-a-newsletter-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|newsletterKey|path|string|true|none|
|editionKey|path|string|true|none|
|api-version|query|string|true|The requested API version|

> Example responses

> 200 Response

```json
{
  "key": "string",
  "timestamp": "1970-01-01T00:00:00Z",
  "htmlBody": "string",
  "name": "string"
}
```

<h3 id="returns-a-specific-edition-of-a-newsletter-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Edition](#schemaedition)|

<aside class="success">
This operation does not require authentication
</aside>

## Get an article belonging to a Newsletter edition

<a id="opIdNewsletters_GetArticle"></a>

> Code samples

```bash
curl 'https://example.com/api/Newsletters/string/Editions/string/Articles/string?api-version=1.0' \
  -H 'Accept: application/json'
```

`GET /api/Newsletters/{newsletterKey}/Editions/{editionKey}/Articles/{articleKey}`

<h3 id="get-an-article-belonging-to-a-newsletter-edition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|newsletterKey|path|string|true|none|
|editionKey|path|string|true|none|
|articleKey|path|string|true|none|
|api-version|query|string|true|The requested API version|

> Example responses

> 200 Response

```json
{
  "key": "string",
  "timestamp": "1970-01-01T00:00:00Z",
  "editionName": "string",
  "htmlBody": "string"
}
```

<h3 id="get-an-article-belonging-to-a-newsletter-edition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Article](#schemaarticle)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="bc-gov-news-api-service-10-posts">Posts</h1>

## Get the posts associated with the keys in the list passed in.

<a id="opIdPosts_Get"></a>

> Code samples

```bash
curl 'https://example.com/api/Posts?api-version=1.0' \
  -H 'Accept: application/json'
```

`GET /api/Posts`

<h3 id="get-the-posts-associated-with-the-keys-in-the-list-passed-in-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|postKeys|query|[string]|false|none|
|api-version|query|string|true|The requested API version|

> Example responses

> 200 Response

```json
[
  {
    "key": "string",
    "timestamp": "1970-01-01T00:00:00Z",
    "assetUrl": "string",
    "atomId": "string",
    "azureAssets": [
      {
        "key": "string",
        "label": "string",
        "length": 0
      }
    ],
    "documents": [
      {
        "byline": "string",
        "contacts": [
          {
            "details": "string",
            "title": "string"
          }
        ],
        "detailsHtml": "string",
        "headline": "string",
        "languageId": 0,
        "pageTitle": "string",
        "subheadline": "string"
      }
    ],
    "facebookPictureUri": "string",
    "hasMediaAssets": true,
    "isNewsOnDemand": true,
    "keywords": "string",
    "kind": "string",
    "leadMinistryKey": "string",
    "location": "string",
    "ministryKeys": [
      "string"
    ],
    "publishDate": "1970-01-01T00:00:00Z",
    "redirectUri": "string",
    "reference": "string",
    "sectorKeys": [
      "string"
    ],
    "serviceKeys": [
      "string"
    ],
    "socialMediaHeadline": "string",
    "socialMediaSummary": "string",
    "summary": "string"
  }
]
```

<h3 id="get-the-posts-associated-with-the-keys-in-the-list-passed-in-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="get-the-posts-associated-with-the-keys-in-the-list-passed-in-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Post](#schemapost)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get all keys for the specified index (newsroom or category)

<a id="opIdPosts_GetAllKeys"></a>

> Code samples

```bash
curl 'https://example.com/api/Posts/Keys/string/string?api-version=1.0' \
  -H 'Accept: application/json'
```

`GET /api/Posts/Keys/{indexKind}/{indexKey}`

<h3 id="get-all-keys-for-the-specified-index-newsroom-or-category-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|indexKind|path|string|true|home or one of categories|
|indexKey|path|string|true|default or one key of the categories (ministries, sectors, services, tags, themes)|
|postKind|query|string|false|One of: releases, stories, factsheets, updates or default (releases+stories+factsheets)|
|count|query|integer(int32)|false|number of posts to return|
|skip|query|integer(int32)|false|number of posts to skip|
|api-version|query|string|true|The requested API version|

> Example responses

> 200 Response

```json
[
  {
    "key": "string",
    "value": "string"
  }
]
```

<h3 id="get-all-keys-for-the-specified-index-newsroom-or-category-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="get-all-keys-for-the-specified-index-newsroom-or-category-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[KeyValuePair_2](#schemakeyvaluepair_2)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get the post key associated with the reference.

<a id="opIdPosts_GetKeyFromReference"></a>

> Code samples

```bash
curl 'https://example.com/api/Posts/Keys/string?api-version=1.0' \
  -H 'Accept: application/json'
```

`GET /api/Posts/Keys/{reference}`

<h3 id="get-the-post-key-associated-with-the-reference-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|reference|path|string|true|none|
|api-version|query|string|true|The requested API version|

> Example responses

> 200 Response

```json
{
  "key": "string",
  "value": "string"
}
```

<h3 id="get-the-post-key-associated-with-the-reference-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[KeyValuePair_2](#schemakeyvaluepair_2)|

<aside class="success">
This operation does not require authentication
</aside>

## Get the latest posts of postKind for the specified index (default or category)

<a id="opIdPosts_GetLatest"></a>

> Code samples

```bash
curl 'https://example.com/api/Posts/Latest/string/string?api-version=1.0' \
  -H 'Accept: application/json'
```

`GET /api/Posts/Latest/{indexKind}/{indexKey}`

<h3 id="get-the-latest-posts-of-postkind-for-the-specified-index-default-or-category-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|indexKind|path|string|true|home or one of categories|
|indexKey|path|string|true|default or one key of the categories (ministries, sectors, services, tags, themes)|
|postKind|query|string|false|One of: releases, stories, factsheets, updates or default (releases+stories except top/feature)|
|count|query|integer(int32)|false|number of posts to return|
|skip|query|integer(int32)|false|number of posts to skip|
|api-version|query|string|true|The requested API version|

> Example responses

> 200 Response

```json
[
  {
    "key": "string",
    "timestamp": "1970-01-01T00:00:00Z",
    "assetUrl": "string",
    "atomId": "string",
    "azureAssets": [
      {
        "key": "string",
        "label": "string",
        "length": 0
      }
    ],
    "documents": [
      {
        "byline": "string",
        "contacts": [
          {
            "details": "string",
            "title": "string"
          }
        ],
        "detailsHtml": "string",
        "headline": "string",
        "languageId": 0,
        "pageTitle": "string",
        "subheadline": "string"
      }
    ],
    "facebookPictureUri": "string",
    "hasMediaAssets": true,
    "isNewsOnDemand": true,
    "keywords": "string",
    "kind": "string",
    "leadMinistryKey": "string",
    "location": "string",
    "ministryKeys": [
      "string"
    ],
    "publishDate": "1970-01-01T00:00:00Z",
    "redirectUri": "string",
    "reference": "string",
    "sectorKeys": [
      "string"
    ],
    "serviceKeys": [
      "string"
    ],
    "socialMediaHeadline": "string",
    "socialMediaSummary": "string",
    "summary": "string"
  }
]
```

<h3 id="get-the-latest-posts-of-postkind-for-the-specified-index-default-or-category-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="get-the-latest-posts-of-postkind-for-the-specified-index-default-or-category-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Post](#schemapost)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Gets the latest Social Media post for the social media type passed in.

<a id="opIdPosts_GetLatestMediaUri"></a>

> Code samples

```bash
curl 'https://example.com/api/Posts/LatestMediaUri/string?api-version=1.0' \
  -H 'Accept: application/json'
```

`GET /api/Posts/LatestMediaUri/{mediaType}`

<h3 id="gets-the-latest-social-media-post-for-the-social-media-type-passed-in-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|mediaType|path|string|true|none|
|api-version|query|string|true|The requested API version|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="gets-the-latest-social-media-post-for-the-social-media-type-passed-in-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Get the post associated with the key

<a id="opIdPosts_GetOne"></a>

> Code samples

```bash
curl 'https://example.com/api/Posts/string?api-version=1.0' \
  -H 'Accept: application/json'
```

`GET /api/Posts/{key}`

<h3 id="get-the-post-associated-with-the-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|key|path|string|true|none|
|api-version|query|string|true|The requested API version|

> Example responses

> 200 Response

```json
{
  "key": "string",
  "timestamp": "1970-01-01T00:00:00Z",
  "assetUrl": "string",
  "atomId": "string",
  "azureAssets": [
    {
      "key": "string",
      "label": "string",
      "length": 0
    }
  ],
  "documents": [
    {
      "byline": "string",
      "contacts": [
        {
          "details": "string",
          "title": "string"
        }
      ],
      "detailsHtml": "string",
      "headline": "string",
      "languageId": 0,
      "pageTitle": "string",
      "subheadline": "string"
    }
  ],
  "facebookPictureUri": "string",
  "hasMediaAssets": true,
  "isNewsOnDemand": true,
  "keywords": "string",
  "kind": "string",
  "leadMinistryKey": "string",
  "location": "string",
  "ministryKeys": [
    "string"
  ],
  "publishDate": "1970-01-01T00:00:00Z",
  "redirectUri": "string",
  "reference": "string",
  "sectorKeys": [
    "string"
  ],
  "serviceKeys": [
    "string"
  ],
  "socialMediaHeadline": "string",
  "socialMediaSummary": "string",
  "summary": "string"
}
```

<h3 id="get-the-post-associated-with-the-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Post](#schemapost)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="bc-gov-news-api-service-10-resourcelinks">ResourceLinks</h1>

## Get all resource links

<a id="opIdResourceLinks_GetAll"></a>

> Code samples

```bash
curl 'https://example.com/api/ResourceLinks?api-version=1.0' \
  -H 'Accept: application/json'
```

`GET /api/ResourceLinks`

<h3 id="get-all-resource-links-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api-version|query|string|true|The requested API version|

> Example responses

> 200 Response

```json
[
  {
    "key": "string",
    "timestamp": "1970-01-01T00:00:00Z",
    "uri": "string"
  }
]
```

<h3 id="get-all-resource-links-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="get-all-resource-links-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ResourceLink](#schemaresourcelink)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="bc-gov-news-api-service-10-sectors">Sectors</h1>

## Get all Sectors

<a id="opIdSectors_GetAll"></a>

> Code samples

```bash
curl 'https://example.com/api/Sectors?api-version=1.0' \
  -H 'Accept: application/json'
```

`GET /api/Sectors`

<h3 id="get-all-sectors-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api-version|query|string|true|The requested API version|

> Example responses

> 200 Response

```json
[
  {
    "key": "string",
    "timestamp": "1970-01-01T00:00:00Z",
    "featurePostKey": "string",
    "kind": "string",
    "name": "string",
    "topPostKey": "string",
    "audioUri": "string",
    "flickrUri": "string",
    "isActive": true,
    "twitterFeedUsername": "string",
    "youtubeUri": "string"
  }
]
```

<h3 id="get-all-sectors-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="get-all-sectors-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Sector](#schemasector)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get the sector associated with the key

<a id="opIdSectors_GetOne"></a>

> Code samples

```bash
curl 'https://example.com/api/Sectors/string?api-version=1.0' \
  -H 'Accept: application/json'
```

`GET /api/Sectors/{key}`

<h3 id="get-the-sector-associated-with-the-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|key|path|string|true|none|
|api-version|query|string|true|The requested API version|

> Example responses

> 200 Response

```json
{
  "key": "string",
  "timestamp": "1970-01-01T00:00:00Z",
  "featurePostKey": "string",
  "kind": "string",
  "name": "string",
  "topPostKey": "string",
  "audioUri": "string",
  "flickrUri": "string",
  "isActive": true,
  "twitterFeedUsername": "string",
  "youtubeUri": "string"
}
```

<h3 id="get-the-sector-associated-with-the-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Sector](#schemasector)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="bc-gov-news-api-service-10-services">Services</h1>

## Get all Services

<a id="opIdServices_GetAll"></a>

> Code samples

```bash
curl 'https://example.com/api/Services?api-version=1.0' \
  -H 'Accept: application/json'
```

`GET /api/Services`

<h3 id="get-all-services-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api-version|query|string|true|The requested API version|

> Example responses

> 200 Response

```json
[
  {
    "key": "string",
    "timestamp": "1970-01-01T00:00:00Z",
    "featurePostKey": "string",
    "kind": "string",
    "name": "string",
    "topPostKey": "string",
    "audioUri": "string",
    "flickrUri": "string",
    "isActive": true,
    "twitterFeedUsername": "string",
    "youtubeUri": "string"
  }
]
```

<h3 id="get-all-services-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="get-all-services-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Service](#schemaservice)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get the service associated with the passed key

<a id="opIdServices_GetOne"></a>

> Code samples

```bash
curl 'https://example.com/api/Services/string?api-version=1.0' \
  -H 'Accept: application/json'
```

`GET /api/Services/{key}`

<h3 id="get-the-service-associated-with-the-passed-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|key|path|string|true|none|
|api-version|query|string|true|The requested API version|

> Example responses

> 200 Response

```json
{
  "key": "string",
  "timestamp": "1970-01-01T00:00:00Z",
  "featurePostKey": "string",
  "kind": "string",
  "name": "string",
  "topPostKey": "string",
  "audioUri": "string",
  "flickrUri": "string",
  "isActive": true,
  "twitterFeedUsername": "string",
  "youtubeUri": "string"
}
```

<h3 id="get-the-service-associated-with-the-passed-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Service](#schemaservice)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="bc-gov-news-api-service-10-slides">Slides</h1>

## Get all Slides

<a id="opIdSlides_GetAll"></a>

> Code samples

```bash
curl 'https://example.com/api/Slides?api-version=1.0' \
  -H 'Accept: application/json'
```

`GET /api/Slides`

<h3 id="get-all-slides-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api-version|query|string|true|The requested API version|

> Example responses

> 200 Response

```json
[
  {
    "key": "string",
    "timestamp": "1970-01-01T00:00:00Z",
    "actionLabel": "string",
    "actionUri": "string",
    "facebookPostUri": "string",
    "headline": "string",
    "image": "string",
    "imageType": "string",
    "justify": "string",
    "slideId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "summary": "string"
  }
]
```

<h3 id="get-all-slides-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="get-all-slides-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Slide](#schemaslide)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get the slide associated to the id

<a id="opIdSlides_GetOne"></a>

> Code samples

```bash
curl 'https://example.com/api/Slides/string?api-version=1.0' \
  -H 'Accept: application/json'
```

`GET /api/Slides/{id}`

<h3 id="get-the-slide-associated-to-the-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|api-version|query|string|true|The requested API version|

> Example responses

> 200 Response

```json
{
  "key": "string",
  "timestamp": "1970-01-01T00:00:00Z",
  "actionLabel": "string",
  "actionUri": "string",
  "facebookPostUri": "string",
  "headline": "string",
  "image": "string",
  "imageType": "string",
  "justify": "string",
  "slideId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "summary": "string"
}
```

<h3 id="get-the-slide-associated-to-the-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Slide](#schemaslide)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="bc-gov-news-api-service-10-tags">Tags</h1>

## Get all Tags

<a id="opIdTags_GetAll"></a>

> Code samples

```bash
curl 'https://example.com/api/Tags?api-version=1.0' \
  -H 'Accept: application/json'
```

`GET /api/Tags`

<h3 id="get-all-tags-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api-version|query|string|true|The requested API version|

> Example responses

> 200 Response

```json
[
  {
    "key": "string",
    "timestamp": "1970-01-01T00:00:00Z",
    "featurePostKey": "string",
    "kind": "string",
    "name": "string",
    "topPostKey": "string",
    "audioUri": "string",
    "flickrUri": "string",
    "isActive": true,
    "twitterFeedUsername": "string",
    "youtubeUri": "string"
  }
]
```

<h3 id="get-all-tags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="get-all-tags-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Tag](#schematag)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get the Tag associated with the key

<a id="opIdTags_GetOne"></a>

> Code samples

```bash
curl 'https://example.com/api/Tags/string?api-version=1.0' \
  -H 'Accept: application/json'
```

`GET /api/Tags/{key}`

<h3 id="get-the-tag-associated-with-the-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|key|path|string|true|none|
|api-version|query|string|true|The requested API version|

> Example responses

> 200 Response

```json
{
  "key": "string",
  "timestamp": "1970-01-01T00:00:00Z",
  "featurePostKey": "string",
  "kind": "string",
  "name": "string",
  "topPostKey": "string",
  "audioUri": "string",
  "flickrUri": "string",
  "isActive": true,
  "twitterFeedUsername": "string",
  "youtubeUri": "string"
}
```

<h3 id="get-the-tag-associated-with-the-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Tag](#schematag)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="bc-gov-news-api-service-10-themes">Themes</h1>

## Get all Themes

<a id="opIdThemes_GetAll"></a>

> Code samples

```bash
curl 'https://example.com/api/Themes?api-version=1.0' \
  -H 'Accept: application/json'
```

`GET /api/Themes`

<h3 id="get-all-themes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api-version|query|string|true|The requested API version|

> Example responses

> 200 Response

```json
[
  {
    "key": "string",
    "timestamp": "1970-01-01T00:00:00Z",
    "featurePostKey": "string",
    "kind": "string",
    "name": "string",
    "topPostKey": "string",
    "audioUri": "string",
    "flickrUri": "string",
    "isActive": true,
    "twitterFeedUsername": "string",
    "youtubeUri": "string"
  }
]
```

<h3 id="get-all-themes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="get-all-themes-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Theme](#schematheme)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get the Theme associated with the key

<a id="opIdThemes_GetOne"></a>

> Code samples

```bash
curl 'https://example.com/api/Themes/string?api-version=1.0' \
  -H 'Accept: application/json'
```

`GET /api/Themes/{key}`

<h3 id="get-the-theme-associated-with-the-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|key|path|string|true|none|
|api-version|query|string|true|The requested API version|

> Example responses

> 200 Response

```json
{
  "key": "string",
  "timestamp": "1970-01-01T00:00:00Z",
  "featurePostKey": "string",
  "kind": "string",
  "name": "string",
  "topPostKey": "string",
  "audioUri": "string",
  "flickrUri": "string",
  "isActive": true,
  "twitterFeedUsername": "string",
  "youtubeUri": "string"
}
```

<h3 id="get-the-theme-associated-with-the-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Theme](#schematheme)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_Article">Article</h2>
<!-- backwards compatibility -->
<a id="schemaarticle"></a>
<a id="schema_Article"></a>
<a id="tocSarticle"></a>
<a id="tocsarticle"></a>

```json
{
  "key": "string",
  "timestamp": "1970-01-01T00:00:00Z",
  "editionName": "string",
  "htmlBody": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|false|none|none|
|timestamp|string(date-time)|false|none|none|
|editionName|string|false|none|none|
|htmlBody|string|false|none|none|

<h2 id="tocS_Asset">Asset</h2>
<!-- backwards compatibility -->
<a id="schemaasset"></a>
<a id="schema_Asset"></a>
<a id="tocSasset"></a>
<a id="tocsasset"></a>

```json
{
  "key": "string",
  "label": "string",
  "length": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|false|none|none|
|label|string|false|none|none|
|length|integer(int64)|false|none|none|

<h2 id="tocS_Category">Category</h2>
<!-- backwards compatibility -->
<a id="schemacategory"></a>
<a id="schema_Category"></a>
<a id="tocScategory"></a>
<a id="tocscategory"></a>

```json
{
  "key": "string",
  "timestamp": "1970-01-01T00:00:00Z",
  "featurePostKey": "string",
  "kind": "string",
  "name": "string",
  "topPostKey": "string",
  "audioUri": "string",
  "flickrUri": "string",
  "isActive": true,
  "twitterFeedUsername": "string",
  "youtubeUri": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|false|none|none|
|timestamp|string(date-time)|false|none|none|
|featurePostKey|string|false|none|none|
|kind|string|false|none|none|
|name|string|false|none|none|
|topPostKey|string|false|none|none|
|audioUri|string|false|none|none|
|featurePostKey|string|false|none|none|
|flickrUri|string|false|none|none|
|isActive|boolean|false|none|none|
|name|string|false|none|none|
|topPostKey|string|false|none|none|
|twitterFeedUsername|string|false|none|none|
|youtubeUri|string|false|none|none|

<h2 id="tocS_Contact">Contact</h2>
<!-- backwards compatibility -->
<a id="schemacontact"></a>
<a id="schema_Contact"></a>
<a id="tocScontact"></a>
<a id="tocscontact"></a>

```json
{
  "emailAddress": "string",
  "fullName": "string",
  "mobileNumber": "string",
  "phoneNumber": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|emailAddress|string|false|none|none|
|fullName|string|false|none|none|
|mobileNumber|string|false|none|none|
|phoneNumber|string|false|none|none|

<h2 id="tocS_DataIndex">DataIndex</h2>
<!-- backwards compatibility -->
<a id="schemadataindex"></a>
<a id="schema_DataIndex"></a>
<a id="tocSdataindex"></a>
<a id="tocsdataindex"></a>

```json
{
  "key": "string",
  "timestamp": "1970-01-01T00:00:00Z",
  "featurePostKey": "string",
  "kind": "string",
  "name": "string",
  "topPostKey": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|false|none|none|
|timestamp|string(date-time)|false|none|none|
|featurePostKey|string|false|none|none|
|kind|string|false|none|none|
|name|string|false|none|none|
|topPostKey|string|false|none|none|

<h2 id="tocS_DataModel">DataModel</h2>
<!-- backwards compatibility -->
<a id="schemadatamodel"></a>
<a id="schema_DataModel"></a>
<a id="tocSdatamodel"></a>
<a id="tocsdatamodel"></a>

```json
{
  "key": "string",
  "timestamp": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|false|none|none|
|timestamp|string(date-time)|false|none|none|

<h2 id="tocS_Document">Document</h2>
<!-- backwards compatibility -->
<a id="schemadocument"></a>
<a id="schema_Document"></a>
<a id="tocSdocument"></a>
<a id="tocsdocument"></a>

```json
{
  "byline": "string",
  "contacts": [
    {
      "details": "string",
      "title": "string"
    }
  ],
  "detailsHtml": "string",
  "headline": "string",
  "languageId": 0,
  "pageTitle": "string",
  "subheadline": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|byline|string|false|none|none|
|contacts|[[DocumentContact](#schemadocumentcontact)]|false|none|none|
|detailsHtml|string|false|none|none|
|headline|string|false|none|none|
|languageId|integer(int32)|false|none|none|
|pageTitle|string|false|none|none|
|subheadline|string|false|none|none|

<h2 id="tocS_DocumentContact">DocumentContact</h2>
<!-- backwards compatibility -->
<a id="schemadocumentcontact"></a>
<a id="schema_DocumentContact"></a>
<a id="tocSdocumentcontact"></a>
<a id="tocsdocumentcontact"></a>

```json
{
  "details": "string",
  "title": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|details|string|false|none|none|
|title|string|false|none|none|

<h2 id="tocS_Edition">Edition</h2>
<!-- backwards compatibility -->
<a id="schemaedition"></a>
<a id="schema_Edition"></a>
<a id="tocSedition"></a>
<a id="tocsedition"></a>

```json
{
  "key": "string",
  "timestamp": "1970-01-01T00:00:00Z",
  "htmlBody": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|false|none|none|
|timestamp|string(date-time)|false|none|none|
|htmlBody|string|false|none|none|
|name|string|false|none|none|

<h2 id="tocS_EditionImage">EditionImage</h2>
<!-- backwards compatibility -->
<a id="schemaeditionimage"></a>
<a id="schema_EditionImage"></a>
<a id="tocSeditionimage"></a>
<a id="tocseditionimage"></a>

```json
{
  "key": "string",
  "timestamp": "1970-01-01T00:00:00Z",
  "fileName": "string",
  "imageBytes": "string",
  "imageType": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|false|none|none|
|timestamp|string(date-time)|false|none|none|
|fileName|string|false|none|none|
|imageBytes|string(byte)|false|none|none|
|imageType|string|false|none|none|

<h2 id="tocS_FacebookPost">FacebookPost</h2>
<!-- backwards compatibility -->
<a id="schemafacebookpost"></a>
<a id="schema_FacebookPost"></a>
<a id="tocSfacebookpost"></a>
<a id="tocsfacebookpost"></a>

```json
{
  "key": "string",
  "timestamp": "1970-01-01T00:00:00Z",
  "content": "string",
  "facebookObjectId": 0,
  "pictureUri": "string",
  "postComments": 0,
  "postLikes": 0,
  "postShares": 0,
  "poster": "string",
  "posterLikes": 0,
  "posterLogo": "string",
  "posterSubtitle": "string",
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|false|none|none|
|timestamp|string(date-time)|false|none|none|
|content|string|false|none|none|
|facebookObjectId|integer(int32)|false|none|none|
|pictureUri|string|false|none|none|
|postComments|integer(int32)|false|none|none|
|postLikes|integer(int32)|false|none|none|
|postShares|integer(int32)|false|none|none|
|poster|string|false|none|none|
|posterLikes|integer(int32)|false|none|none|
|posterLogo|string|false|none|none|
|posterSubtitle|string|false|none|none|
|type|string|false|none|none|

<h2 id="tocS_Home">Home</h2>
<!-- backwards compatibility -->
<a id="schemahome"></a>
<a id="schema_Home"></a>
<a id="tocShome"></a>
<a id="tocshome"></a>

```json
{
  "key": "string",
  "timestamp": "1970-01-01T00:00:00Z",
  "featurePostKey": "string",
  "kind": "string",
  "name": "string",
  "topPostKey": "string",
  "liveWebcastFlashMediaManifestUrl": "string",
  "liveWebcastM3uPlaylist": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|false|none|none|
|timestamp|string(date-time)|false|none|none|
|featurePostKey|string|false|none|none|
|kind|string|false|none|none|
|name|string|false|none|none|
|topPostKey|string|false|none|none|
|featurePostKey|string|false|none|none|
|liveWebcastFlashMediaManifestUrl|string|false|none|none|
|liveWebcastM3uPlaylist|string|false|none|none|
|name|string|false|none|none|
|topPostKey|string|false|none|none|

<h2 id="tocS_KeyValuePair_2">KeyValuePair_2</h2>
<!-- backwards compatibility -->
<a id="schemakeyvaluepair_2"></a>
<a id="schema_KeyValuePair_2"></a>
<a id="tocSkeyvaluepair_2"></a>
<a id="tocskeyvaluepair_2"></a>

```json
{
  "key": "string",
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|false|read-only|none|
|value|string|false|read-only|none|

<h2 id="tocS_Minister">Minister</h2>
<!-- backwards compatibility -->
<a id="schemaminister"></a>
<a id="schema_Minister"></a>
<a id="tocSminister"></a>
<a id="tocsminister"></a>

```json
{
  "key": "string",
  "timestamp": "1970-01-01T00:00:00Z",
  "details": "string",
  "emailHtml": "string",
  "headline": "string",
  "photo": "string",
  "post": "string",
  "summary": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|false|none|none|
|timestamp|string(date-time)|false|none|none|
|details|string|false|none|none|
|emailHtml|string|false|none|none|
|headline|string|false|none|none|
|photo|string|false|none|none|
|post|string|false|none|none|
|summary|string|false|none|none|

<h2 id="tocS_Ministry">Ministry</h2>
<!-- backwards compatibility -->
<a id="schemaministry"></a>
<a id="schema_Ministry"></a>
<a id="tocSministry"></a>
<a id="tocsministry"></a>

```json
{
  "key": "string",
  "timestamp": "1970-01-01T00:00:00Z",
  "featurePostKey": "string",
  "kind": "string",
  "name": "string",
  "topPostKey": "string",
  "audioUri": "string",
  "flickrUri": "string",
  "isActive": true,
  "twitterFeedUsername": "string",
  "youtubeUri": "string",
  "childMinistryKey": "string",
  "contactUser": {
    "emailAddress": "string",
    "fullName": "string",
    "mobileNumber": "string",
    "phoneNumber": "string"
  },
  "displayAdditionalName": "string",
  "ministerName": "string",
  "ministryUrl": "string",
  "newsletterLinks": [
    {
      "key": "string",
      "timestamp": "1970-01-01T00:00:00Z",
      "uri": "string"
    }
  ],
  "parentMinistryKey": "string",
  "secondContactUser": {
    "emailAddress": "string",
    "fullName": "string",
    "mobileNumber": "string",
    "phoneNumber": "string"
  },
  "serviceLinks": [
    {
      "key": "string",
      "timestamp": "1970-01-01T00:00:00Z",
      "uri": "string"
    }
  ],
  "topicLinks": [
    {
      "key": "string",
      "timestamp": "1970-01-01T00:00:00Z",
      "uri": "string"
    }
  ],
  "weekendContactNumber": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|false|none|none|
|timestamp|string(date-time)|false|none|none|
|featurePostKey|string|false|none|none|
|kind|string|false|none|none|
|name|string|false|none|none|
|topPostKey|string|false|none|none|
|audioUri|string|false|none|none|
|featurePostKey|string|false|none|none|
|flickrUri|string|false|none|none|
|isActive|boolean|false|none|none|
|name|string|false|none|none|
|topPostKey|string|false|none|none|
|twitterFeedUsername|string|false|none|none|
|youtubeUri|string|false|none|none|
|audioUri|string|false|none|none|
|childMinistryKey|string|false|none|none|
|contactUser|[Contact](#schemacontact)|false|none|none|
|displayAdditionalName|string|false|none|none|
|featurePostKey|string|false|none|none|
|flickrUri|string|false|none|none|
|isActive|boolean|false|none|none|
|ministerName|string|false|none|none|
|ministryUrl|string|false|none|none|
|name|string|false|none|none|
|newsletterLinks|[[ResourceLink](#schemaresourcelink)]|false|none|none|
|parentMinistryKey|string|false|none|none|
|secondContactUser|[Contact](#schemacontact)|false|none|none|
|serviceLinks|[[ResourceLink](#schemaresourcelink)]|false|none|none|
|topPostKey|string|false|none|none|
|topicLinks|[[ResourceLink](#schemaresourcelink)]|false|none|none|
|twitterFeedUsername|string|false|none|none|
|weekendContactNumber|string|false|none|none|
|youtubeUri|string|false|none|none|

<h2 id="tocS_Newsletter">Newsletter</h2>
<!-- backwards compatibility -->
<a id="schemanewsletter"></a>
<a id="schema_Newsletter"></a>
<a id="tocSnewsletter"></a>
<a id="tocsnewsletter"></a>

```json
{
  "key": "string",
  "timestamp": "1970-01-01T00:00:00Z",
  "description": "string",
  "editions": [
    {
      "key": "string",
      "value": "string"
    }
  ],
  "ministryName": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|false|none|none|
|timestamp|string(date-time)|false|none|none|
|description|string|false|none|none|
|editions|[[KeyValuePair_2](#schemakeyvaluepair_2)]|false|none|none|
|ministryName|string|false|none|none|
|name|string|false|none|none|

<h2 id="tocS_Post">Post</h2>
<!-- backwards compatibility -->
<a id="schemapost"></a>
<a id="schema_Post"></a>
<a id="tocSpost"></a>
<a id="tocspost"></a>

```json
{
  "key": "string",
  "timestamp": "1970-01-01T00:00:00Z",
  "assetUrl": "string",
  "atomId": "string",
  "azureAssets": [
    {
      "key": "string",
      "label": "string",
      "length": 0
    }
  ],
  "documents": [
    {
      "byline": "string",
      "contacts": [
        {
          "details": "string",
          "title": "string"
        }
      ],
      "detailsHtml": "string",
      "headline": "string",
      "languageId": 0,
      "pageTitle": "string",
      "subheadline": "string"
    }
  ],
  "facebookPictureUri": "string",
  "hasMediaAssets": true,
  "isNewsOnDemand": true,
  "keywords": "string",
  "kind": "string",
  "leadMinistryKey": "string",
  "location": "string",
  "ministryKeys": [
    "string"
  ],
  "publishDate": "1970-01-01T00:00:00Z",
  "redirectUri": "string",
  "reference": "string",
  "sectorKeys": [
    "string"
  ],
  "serviceKeys": [
    "string"
  ],
  "socialMediaHeadline": "string",
  "socialMediaSummary": "string",
  "summary": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|false|none|none|
|timestamp|string(date-time)|false|none|none|
|assetUrl|string|false|none|none|
|atomId|string|false|none|none|
|azureAssets|[[Asset](#schemaasset)]|false|none|none|
|documents|[[Document](#schemadocument)]|false|none|none|
|facebookPictureUri|string|false|none|none|
|hasMediaAssets|boolean|false|none|none|
|isNewsOnDemand|boolean|false|none|none|
|keywords|string|false|none|none|
|kind|string|false|none|none|
|leadMinistryKey|string|false|none|none|
|location|string|false|none|none|
|ministryKeys|[string]|false|none|none|
|publishDate|string(date-time)|false|none|none|
|redirectUri|string|false|none|none|
|reference|string|false|none|none|
|sectorKeys|[string]|false|none|none|
|serviceKeys|[string]|false|none|none|
|socialMediaHeadline|string|false|none|none|
|socialMediaSummary|string|false|none|none|
|summary|string|false|none|none|

<h2 id="tocS_ResourceLink">ResourceLink</h2>
<!-- backwards compatibility -->
<a id="schemaresourcelink"></a>
<a id="schema_ResourceLink"></a>
<a id="tocSresourcelink"></a>
<a id="tocsresourcelink"></a>

```json
{
  "key": "string",
  "timestamp": "1970-01-01T00:00:00Z",
  "uri": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|false|none|none|
|timestamp|string(date-time)|false|none|none|
|uri|string|false|none|none|

<h2 id="tocS_Sector">Sector</h2>
<!-- backwards compatibility -->
<a id="schemasector"></a>
<a id="schema_Sector"></a>
<a id="tocSsector"></a>
<a id="tocssector"></a>

```json
{
  "key": "string",
  "timestamp": "1970-01-01T00:00:00Z",
  "featurePostKey": "string",
  "kind": "string",
  "name": "string",
  "topPostKey": "string",
  "audioUri": "string",
  "flickrUri": "string",
  "isActive": true,
  "twitterFeedUsername": "string",
  "youtubeUri": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|false|none|none|
|timestamp|string(date-time)|false|none|none|
|featurePostKey|string|false|none|none|
|kind|string|false|none|none|
|name|string|false|none|none|
|topPostKey|string|false|none|none|
|audioUri|string|false|none|none|
|featurePostKey|string|false|none|none|
|flickrUri|string|false|none|none|
|isActive|boolean|false|none|none|
|name|string|false|none|none|
|topPostKey|string|false|none|none|
|twitterFeedUsername|string|false|none|none|
|youtubeUri|string|false|none|none|
|audioUri|string|false|none|none|
|featurePostKey|string|false|none|none|
|flickrUri|string|false|none|none|
|isActive|boolean|false|none|none|
|name|string|false|none|none|
|topPostKey|string|false|none|none|
|twitterFeedUsername|string|false|none|none|
|youtubeUri|string|false|none|none|

<h2 id="tocS_Service">Service</h2>
<!-- backwards compatibility -->
<a id="schemaservice"></a>
<a id="schema_Service"></a>
<a id="tocSservice"></a>
<a id="tocsservice"></a>

```json
{
  "key": "string",
  "timestamp": "1970-01-01T00:00:00Z",
  "featurePostKey": "string",
  "kind": "string",
  "name": "string",
  "topPostKey": "string",
  "audioUri": "string",
  "flickrUri": "string",
  "isActive": true,
  "twitterFeedUsername": "string",
  "youtubeUri": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|false|none|none|
|timestamp|string(date-time)|false|none|none|
|featurePostKey|string|false|none|none|
|kind|string|false|none|none|
|name|string|false|none|none|
|topPostKey|string|false|none|none|
|audioUri|string|false|none|none|
|featurePostKey|string|false|none|none|
|flickrUri|string|false|none|none|
|isActive|boolean|false|none|none|
|name|string|false|none|none|
|topPostKey|string|false|none|none|
|twitterFeedUsername|string|false|none|none|
|youtubeUri|string|false|none|none|
|audioUri|string|false|none|none|
|featurePostKey|string|false|none|none|
|flickrUri|string|false|none|none|
|isActive|boolean|false|none|none|
|name|string|false|none|none|
|topPostKey|string|false|none|none|
|twitterFeedUsername|string|false|none|none|
|youtubeUri|string|false|none|none|

<h2 id="tocS_Slide">Slide</h2>
<!-- backwards compatibility -->
<a id="schemaslide"></a>
<a id="schema_Slide"></a>
<a id="tocSslide"></a>
<a id="tocsslide"></a>

```json
{
  "key": "string",
  "timestamp": "1970-01-01T00:00:00Z",
  "actionLabel": "string",
  "actionUri": "string",
  "facebookPostUri": "string",
  "headline": "string",
  "image": "string",
  "imageType": "string",
  "justify": "string",
  "slideId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "summary": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|false|none|none|
|timestamp|string(date-time)|false|none|none|
|actionLabel|string|false|none|none|
|actionUri|string|false|none|none|
|facebookPostUri|string|false|none|none|
|headline|string|false|none|none|
|image|string(byte)|false|none|none|
|imageType|string|false|read-only|none|
|justify|string|false|none|none|
|slideId|string(uuid)|false|none|none|
|summary|string|false|none|none|

<h2 id="tocS_Tag">Tag</h2>
<!-- backwards compatibility -->
<a id="schematag"></a>
<a id="schema_Tag"></a>
<a id="tocStag"></a>
<a id="tocstag"></a>

```json
{
  "key": "string",
  "timestamp": "1970-01-01T00:00:00Z",
  "featurePostKey": "string",
  "kind": "string",
  "name": "string",
  "topPostKey": "string",
  "audioUri": "string",
  "flickrUri": "string",
  "isActive": true,
  "twitterFeedUsername": "string",
  "youtubeUri": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|false|none|none|
|timestamp|string(date-time)|false|none|none|
|featurePostKey|string|false|none|none|
|kind|string|false|none|none|
|name|string|false|none|none|
|topPostKey|string|false|none|none|
|audioUri|string|false|none|none|
|featurePostKey|string|false|none|none|
|flickrUri|string|false|none|none|
|isActive|boolean|false|none|none|
|name|string|false|none|none|
|topPostKey|string|false|none|none|
|twitterFeedUsername|string|false|none|none|
|youtubeUri|string|false|none|none|
|audioUri|string|false|none|none|
|featurePostKey|string|false|none|none|
|flickrUri|string|false|none|none|
|isActive|boolean|false|none|none|
|name|string|false|none|none|
|topPostKey|string|false|none|none|
|twitterFeedUsername|string|false|none|none|
|youtubeUri|string|false|none|none|

<h2 id="tocS_Theme">Theme</h2>
<!-- backwards compatibility -->
<a id="schematheme"></a>
<a id="schema_Theme"></a>
<a id="tocStheme"></a>
<a id="tocstheme"></a>

```json
{
  "key": "string",
  "timestamp": "1970-01-01T00:00:00Z",
  "featurePostKey": "string",
  "kind": "string",
  "name": "string",
  "topPostKey": "string",
  "audioUri": "string",
  "flickrUri": "string",
  "isActive": true,
  "twitterFeedUsername": "string",
  "youtubeUri": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|false|none|none|
|timestamp|string(date-time)|false|none|none|
|featurePostKey|string|false|none|none|
|kind|string|false|none|none|
|name|string|false|none|none|
|topPostKey|string|false|none|none|
|audioUri|string|false|none|none|
|featurePostKey|string|false|none|none|
|flickrUri|string|false|none|none|
|isActive|boolean|false|none|none|
|name|string|false|none|none|
|topPostKey|string|false|none|none|
|twitterFeedUsername|string|false|none|none|
|youtubeUri|string|false|none|none|
|audioUri|string|false|none|none|
|featurePostKey|string|false|none|none|
|flickrUri|string|false|none|none|
|isActive|boolean|false|none|none|
|name|string|false|none|none|
|topPostKey|string|false|none|none|
|twitterFeedUsername|string|false|none|none|
|youtubeUri|string|false|none|none|
