<h1 id="medium-api">Medium API v1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Medium API helps you to quickly extract data from Medium's Website (https://medium.com). 

You can gather data related to users, publications, articles (including its textual content), latest posts &amp; top writers within a topic/niche, etc…

Base URLs:

* <a href="https://medium2.p.rapidapi.com">https://medium2.p.rapidapi.com</a>

<a href="https://github.com/weeping-angel/medium-apis/raw/pages/terms_of_use.pdf">Terms of service</a>
Email: <a href="mailto:nishu@mediumapi.com">Nishu Jain</a> 
Web: <a href="https://mediumapi.com">Nishu Jain</a> 

<a href="https://github.com/Medium/medium-api-docs">Read more on Medium</a>

# Authentication

* API Key (ApiHost)
    - Parameter Name: **x-rapidapi-host**, in: header.

* API Key (ApiKey)
    - Parameter Name: **x-rapidapi-key**, in: header.

<h1 id="medium-api-welcome">Welcome</h1>

## Get Welcome

> Code samples

```bash
curl https://example.com/ \
  -H 'Accept: application/json'
```

`GET /`

**Test Endpoint**
Returns the information about the Medium API


> Example responses

> 200 Response

```json
{
  "developer": "Nishu Jain",
  "documentation": "https://docs.mediumapi.com",
  "email": "nishu@mediumapi.com",
  "linkedin": "https://www.linkedin.com/company/medium-api",
  "name": "Medium API",
  "twitter": "https://twitter.com/medium_api",
  "website": "https://mediumapi.com"
}
```

<h3 id="get-welcome-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-welcome-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|developer|string|false|none|Full name of the API's developer|
|documentation|string|false|none|Link to the Medium API's documentation|
|email|string|false|none|Email ID of the developer|
|linkedin|string|false|none|LinkedIn Page URL|
|name|string|false|none|Full name of the API|
|twitter|string|false|none|Twitter Profile URL|
|website|string|false|none|Link to the Medium API's website|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="medium-api-user">User</h1>

## Get User ID

> Code samples

```bash
curl https://example.com/user/id_for/nishu-jain \
  -H 'Accept: application/json'
```

`GET /user/id_for/{username}`

Returns the unique `user_id` for the given `username`.

**Note:** You can find the `username` from the user's/author's profile page URL. 
- **username**.medium.com
- medium.com/@**username**


<h3 id="get-user-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|username|path|string|true|It's a unique string chosen by every single Medium user.|

> Example responses

> 200 Response

```json
{
  "id": "1985b61817c3"
}
```

<h3 id="get-user-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-user-id-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|Unique hash id of the user.|

<aside class="success">
This operation does not require authentication
</aside>

## Get User Info

> Code samples

```bash
curl https://example.com/user/1985b61817c3 \
  -H 'Accept: application/json'
```

`GET /user/{user_id}`

Returns user related information like *Full name, Bio, Followers count, Following count, Twitter username, Profile-image URL, User ID, etc...* 

It takes `user_id` as the path parameter.

**Note:** If you don't know the `user_id`, then you can get it from the endpoint\
'/user/id_for/{`username`}'.


<h3 id="get-user-info-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user_id|path|string|true|It's a unique hash id assigned to every single Medium user.|

> Example responses

> 200 Response

```json
{
  "allow_notes": true,
  "bio": "Obsessed with Tech Biz Arts &amp; Words; Does NOT dumb down the writing; Skilled Wordsmith; Delivers the best",
  "followers_count": 450,
  "following_count": 4,
  "fullname": "Nishu Jain",
  "has_list": true,
  "id": "1985b61817c3",
  "image_url": "https://miro.medium.com/1*C92Hx7k9nRM7TPlrmhgW9w.jpeg",
  "is_book_author": false,
  "is_suspended": false,
  "is_writer_program_enrolled": true,
  "medium_member_at": "2020-06-24 16:05:46",
  "top_writer_in": [
    "programming"
  ],
  "twitter_username": "one_anachronism",
  "username": "nishu-jain"
}
```

<h3 id="get-user-info-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-user-info-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allow_notes|boolean|false|none|none|
|bio|string|false|none|none|
|followers_count|integer(int32)|false|none|none|
|following_count|integer(int32)|false|none|none|
|fullname|string|false|none|none|
|has_list|boolean|false|none|none|
|id|string|false|none|none|
|image_url|string|false|none|none|
|is_book_author|boolean|false|none|none|
|is_suspended|boolean|false|none|none|
|is_writer_program_enrolled|boolean|false|none|none|
|medium_member_at|string|false|none|none|
|top_writer_in|[string]|false|none|none|
|twitter_username|string|false|none|none|
|username|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get User's Articles

> Code samples

```bash
curl https://example.com/user/1985b61817c3/articles \
  -H 'Accept: application/json'
```

`GET /user/{user_id}/articles`

Returns the list of articles (`article_ids`) written by the user.


<h3 id="get-users-articles-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user_id|path|string|true|Unique hash id assigned to every single Medium user.|

> Example responses

> 200 Response

```json
{
  "associated_articles": [
    "562c5821b5f0"
  ]
}
```

<h3 id="get-users-articles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-users-articles-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|associated_articles|[string]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get User Followers

> Code samples

```bash
curl https://example.com/user/1985b61817c3/followers \
  -H 'Accept: application/json'
```

`GET /user/{user_id}/followers`

Returns the list of `user_ids` of the user's followers.

**Note:** The length of this followers' list might be different from what you get in  the "Get User Info" Endpoint. It's because, this list doesn't include Medium Users who  left the platform.
If you really need the exact followers' count, use this endpoint to get the followers'  list and take its length as the exact followers' count


<h3 id="get-user-followers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user_id|path|string|true|Unique hash id assigned to every single Medium user.|
|count|query|integer|false|To limit the number of results. (count &lt; 1500)|

> Example responses

> 200 Response

```json
{
  "followers": [
    "105e6602fb79"
  ],
  "id": "14d5c41e0264"
}
```

<h3 id="get-user-followers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-user-followers-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|followers|[string]|false|none|none|
|id|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get User Following

> Code samples

```bash
curl https://example.com/user/14d5c41e0264/following \
  -H 'Accept: application/json'
```

`GET /user/{user_id}/following`

Returns the list of `user_ids` of the user's followings.

**Note:** Currently, this list does not contain the `publication_ids` of the publications that the user is following.


<h3 id="get-user-following-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user_id|path|string|true|Unique hash id assigned to every single Medium user.|
|count|query|integer|false|To limit the number of results. (count &lt; 1500)|

> Example responses

> 200 Response

```json
{
  "following": [
    "c61f93eeb8a5"
  ],
  "id": "14d5c41e0264"
}
```

<h3 id="get-user-following-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-user-following-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|following|[string]|false|none|none|
|id|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get User's Interests

> Code samples

```bash
curl https://example.com/user/1985b61817c3/interests \
  -H 'Accept: application/json'
```

`GET /user/{user_id}/interests`

Returns a list of tags that the given user follows.


<h3 id="get-users-interests-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user_id|path|string|true|Unique hash id assigned to every single Medium user.|

> Example responses

> 200 Response

```json
{
  "tags_followed": [
    "software-engineering"
  ]
}
```

<h3 id="get-users-interests-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-users-interests-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tags_followed|[string]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get User's Lists

> Code samples

```bash
curl https://example.com/user/5142451174a3/lists \
  -H 'Accept: application/json'
```

`GET /user/{user_id}/lists`

Returns an array of `list_ids` created by the user.

**Note:** You can check whether the use has created lists or not beforehand. Check the  `has_list` attribute in the "Article Info" endpoint.


<h3 id="get-users-lists-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user_id|path|string|true|Unique hash id assigned to every single Medium user.|

> Example responses

> 200 Response

```json
{
  "lists": [
    "95b41261bee0"
  ],
  "user_id": "5142451174a3"
}
```

<h3 id="get-users-lists-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-users-lists-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lists|[string]|false|none|none|
|user_id|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get User's Publications

> Code samples

```bash
curl https://example.com/user/14d5c41e0264/publications \
  -H 'Accept: application/json'
```

`GET /user/{user_id}/publications`

Returns a list of `publication_ids` where the user is the editor and/or creator.


<h3 id="get-users-publications-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user_id|path|string|true|Unique hash id assigned to every single Medium user.|

> Example responses

> 200 Response

```json
{
  "publications": [
    "bff2346ccdf1"
  ],
  "user_id": "14d5c41e0264"
}
```

<h3 id="get-users-publications-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-users-publications-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|publications|[string]|false|none|none|
|user_id|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get User's Top Articles

> Code samples

```bash
curl https://example.com/user/1985b61817c3/top_articles \
  -H 'Accept: application/json'
```

`GET /user/{user_id}/top_articles`

Returns a list of `article_ids` of the top 10 articles on the user's profile, for a given `user_id`.


<h3 id="get-users-top-articles-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user_id|path|string|true|Unique hash id assigned to every single Medium user.|

> Example responses

> 200 Response

```json
{
  "associated_articles": [
    "562c5821b5f0"
  ]
}
```

<h3 id="get-users-top-articles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-users-top-articles-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|associated_articles|[string]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="medium-api-publication">Publication</h1>

## Get Publication ID

> Code samples

```bash
curl https://example.com/publication/id_for/codex \
  -H 'Accept: application/json'
```

`GET /publication/id_for/{publication_slug}`

Returns the unique `publication_id` for the given `publication_slug`.

**Note:** You can find the `publication_slug` from the publication's homepage URL.
- medium.com/**publication_slug**


<h3 id="get-publication-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|publication_slug|path|string|true|It's a lowercased hyphen-separated unique string alloted to each Medium Publication.|

> Example responses

> 200 Response

```json
{
  "publication_id": "29038077e4c6",
  "publication_slug": "codex"
}
```

<h3 id="get-publication-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-publication-id-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|publication_id|string|false|none|Unique hash id of the publication.|
|publication_slug|string|false|none|Same publication slug that you passed in the path parameters.|

<aside class="success">
This operation does not require authentication
</aside>

## Get Publication Info

> Code samples

```bash
curl https://example.com/publication/98111c9905da \
  -H 'Accept: application/json'
```

`GET /publication/{publication_id}`

Returns the publication related information such as *Publication name, Tagline, Description, Tags, Followers Count, Twitter username, Instagram username, Facebook Page name, etc …*

**Note:** If you don't know the `publication_id`, you can get it from any article published by it. Use endpoint "/article/{article_id}" to retrieve the `publication_id`.


<h3 id="get-publication-info-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|publication_id|path|string|true|It's a unique hash id assigned to every Medium Publication.|

> Example responses

> 200 Response

```json
{
  "creator": "8a819983d566",
  "description": "Towards AI is the world's leading AI and technology publication. Publishing unbiased AI and technology-related articles. Read by thought-leaders and decision-makers around the world.",
  "editors": [
    "aea8a19ea239"
  ],
  "facebook_pagename": "towardsAl",
  "followers": 25260,
  "id": "98111c9905da",
  "instagram_username": "towards_ai",
  "name": "Towards AI",
  "slug": "towards-artificial-intelligence",
  "tagline": "The World's Leading AI and Technology Publication",
  "tags": [
    "ARTIFICIAL INTELLIGENCE"
  ],
  "twitter_username": "towards_AI",
  "url": "pub.towardsai.net"
}
```

<h3 id="get-publication-info-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-publication-info-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|creator|string|false|none|none|
|description|string|false|none|none|
|editors|[string]|false|none|none|
|facebook_pagename|string|false|none|none|
|followers|integer(int32)|false|none|none|
|id|string|false|none|none|
|instagram_username|string|false|none|none|
|name|string|false|none|none|
|slug|string|false|none|none|
|tagline|string|false|none|none|
|tags|[string]|false|none|none|
|twitter_username|string|false|none|none|
|url|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get Publication Articles

> Code samples

```bash
curl https://example.com/publication/98111c9905da/articles \
  -H 'Accept: application/json'
```

`GET /publication/{publication_id}/articles`

Returns the list of `articles_ids`, of the latest 25 articles, posted in that publication.


<h3 id="get-publication-articles-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|publication_id|path|string|true|It's a unique hash id assigned to every Medium Publication.|
|from|query|string|false|To get the articles before specified date and time.|

> Example responses

> 200 Response

```json
{
  "publication_articles": [
    "67fa62fc1971"
  ]
}
```

<h3 id="get-publication-articles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-publication-articles-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|publication_articles|[string]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get Publication Newsletter

> Code samples

```bash
curl https://example.com/publication/98111c9905da/newsletter \
  -H 'Accept: application/json'
```

`GET /publication/{publication_id}/newsletter`

Returns the newsletter related information such as *id, name, description, slug, creator_id, subscribers, image_url, etc …*

**Note:** If you don't know the `publication_id`, you can get it from any article published by it. Use endpoint "/article/{article_id}" to retrieve the `publication_id`.


<h3 id="get-publication-newsletter-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|publication_id|path|string|true|It's a unique hash id assigned to every Medium Publication.|

> Example responses

> 200 Response

```json
{
  "creator_id": "aea8a19ea239",
  "description": "We have moved our newsletter. Subscribe → https://ws.towardsai.net/subscribe",
  "id": "d710a73cd042",
  "image": "https://miro.medium.com/1*j2OVd7j2o2FHeE7T8TzpXw.png",
  "name": "This AI newsletter is all you need",
  "slug": "this-ai-newsletter-is-all-you-need",
  "subscribers": 6752
}
```

<h3 id="get-publication-newsletter-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-publication-newsletter-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|creator_id|string|false|none|none|
|description|string|false|none|none|
|id|string|false|none|none|
|image|string|false|none|none|
|name|string|false|none|none|
|slug|string|false|none|none|
|subscribers|integer(int32)|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="medium-api-article">Article</h1>

## Get Article Info

> Code samples

```bash
curl https://example.com/article/f06086080568 \
  -H 'Accept: application/json'
```

`GET /article/{article_id}`

Returns the article related information such as *Title, Subtitle, Tags,  Topics* (assigned by Medium), *Publication, Published date and time,  Clap Count, Voter Count, Word Count, Reading Time, Language, etc…*


<h3 id="get-article-info-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|article_id|path|string|true|It's a unique hash id assigned to every Medium Article.|

> Example responses

> 200 Response

```json
{
  "author": "1985b61817c3",
  "claps": 53,
  "id": "f06086080568",
  "image_url": "https://miro.medium.com/1*W0wM9xIeeIR3_Oo0E_thaA.png",
  "is_locked": true,
  "is_series": false,
  "lang": "en",
  "last_modified_at": "2021-05-28 04:22:48",
  "publication_id": "e7040e67514c",
  "published_at": "2020-08-25 11:08:18",
  "reading_time": 3.5720125786164,
  "responses_count": 10,
  "subtitle": "Re-energize your relationship in the midst of a crisis",
  "tags": [
    "relationships"
  ],
  "title": "4 Tips to Strengthen Your Bonds — Now",
  "topics": [
    "mental-health"
  ],
  "url": "https://medium.com/age-of-awareness/re-energizing-your-relationship-in-the-midst-of-a-crisis-f06086080568",
  "voters": 3,
  "word_count": 845
}
```

<h3 id="get-article-info-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-article-info-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|author|string|false|none|none|
|claps|integer(int32)|false|none|none|
|id|string|false|none|none|
|image_url|string|false|none|none|
|is_locked|boolean|false|none|none|
|is_series|boolean|false|none|none|
|lang|string|false|none|none|
|last_modified_at|string|false|none|none|
|publication_id|string|false|none|none|
|published_at|string|false|none|none|
|reading_time|number|false|none|none|
|responses_count|integer(int32)|false|none|none|
|subtitle|string|false|none|none|
|tags|[string]|false|none|none|
|title|string|false|none|none|
|topics|[string]|false|none|none|
|url|string|false|none|none|
|voters|integer(int32)|false|none|none|
|word_count|integer(int32)|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get Article's Content

> Code samples

```bash
curl https://example.com/article/562c5821b5f0/content \
  -H 'Accept: application/json'
```

`GET /article/{article_id}/content`

Returns the content of an article/story, for the corresponding `article_id`


<h3 id="get-articles-content-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|article_id|path|string|true|It's a unique hash id assigned to every Medium Article.|

> Example responses

> 200 Response

```json
{
  "content": "Article title\nArticle Subtitle\nArticle Content ....\n"
}
```

<h3 id="get-articles-content-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-articles-content-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get Article Fans

> Code samples

```bash
curl https://example.com/article/67fa62fc1971/fans \
  -H 'Accept: application/json'
```

`GET /article/{article_id}/fans`

Returns a list of `user_ids` of the people who clapped on the article (a.k.a `voters`).


<h3 id="get-article-fans-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|article_id|path|string|true|It's a unique hash id assigned to every Medium Article.|

> Example responses

> 200 Response

```json
{
  "article_id": "67fa62fc1971",
  "count": 145,
  "voters": [
    "fa40650a485"
  ]
}
```

<h3 id="get-article-fans-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-article-fans-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|article_id|string|false|none|none|
|count|integer(int32)|false|none|none|
|voters|[string]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get Article's Markdown

> Code samples

```bash
curl https://example.com/article/67fa62fc1971/markdown \
  -H 'Accept: application/json'
```

`GET /article/{article_id}/markdown`

Returns the markdown of an article/story from Medium, for the corresponding `article_id`


<h3 id="get-articles-markdown-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|article_id|path|string|true|It's a unique hash id assigned to every Medium Article.|

> Example responses

> 200 Response

```json
{
  "markdown": "# Article title\n## Article Subtitle\nArticle **Content** with lot of _markups_ ....\n![Images Alt](Image URL)\n"
}
```

<h3 id="get-articles-markdown-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-articles-markdown-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|markdown|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get Related Articles

> Code samples

```bash
curl https://example.com/article/67fa62fc1971/related \
  -H 'Accept: application/json'
```

`GET /article/{article_id}/related`

Returns a list of `article_ids` of the related posts. (Length = 5)

**Note:** If the given article is self-published, related posts will belong to the same author,  else related posts will belong to the publication in which the article is published.


<h3 id="get-related-articles-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|article_id|path|string|true|It's a unique hash id assigned to every Medium Article.|

> Example responses

> 200 Response

```json
{
  "id": "67fa62fc1971",
  "related_articles": [
    "f393206c6626"
  ]
}
```

<h3 id="get-related-articles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-related-articles-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|related_articles|[string]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get Article Responses

> Code samples

```bash
curl https://example.com/article/67fa62fc1971/responses \
  -H 'Accept: application/json'
```

`GET /article/{article_id}/responses`

Returns a list of responses (`response_ids`, same as `article_ids`) for a given article (`article_id`)
Note: To see the content of the response, use the "Get Article's Content" endpoint


<h3 id="get-article-responses-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|article_id|path|string|true|It's a unique hash id assigned to every Medium Article.|

> Example responses

> 200 Response

```json
{
  "id": "67fa62fc1971",
  "responses": [
    "a9bbc22aa1e6"
  ]
}
```

<h3 id="get-article-responses-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-article-responses-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|responses|[string]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="medium-api-misc">Misc</h1>

## Get Latest Posts

> Code samples

```bash
curl https://example.com/latestposts/artificial-intelligence \
  -H 'Accept: application/json'
```

`GET /latestposts/{topic_slug}`

Returns a list of latest posts (`article_ids`) for a topic/niche (as classified by the Medium platform). Example of a topic/niche can be:
* blockchain
* relationships
* mental-health, etc …

These are known as `topic_slugs`. At any given moment, this endpoint will return a list of 25 articles (`article_ids`).


<h3 id="get-latest-posts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|topic_slug|path|string|true|It's a unique string, usually hyphen-separated, representing a topic/niche, as classified by Medium.|

> Example responses

> 200 Response

```json
{
  "latestposts": [
    "67fa62fc1971"
  ]
}
```

<h3 id="get-latest-posts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-latest-posts-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|latestposts|[string]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get Related Tags

> Code samples

```bash
curl https://example.com/related_tags/blockchain \
  -H 'Accept: application/json'
```

`GET /related_tags/{tag}`

Returns a list of `related_tags` for the given `tag`.


<h3 id="get-related-tags-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tag|path|string|true|It's a unique string, usually hyphen-separated, representing a class of content.|

> Example responses

> 200 Response

```json
{
  "given_tag": "blockchain",
  "related_tags": [
    "cryptocurrency"
  ]
}
```

<h3 id="get-related-tags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-related-tags-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|given_tag|string|false|none|none|
|related_tags|[string]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get Top Writers

> Code samples

```bash
curl https://example.com/top_writer/relationships \
  -H 'Accept: application/json'
```

`GET /top_writer/{topic_slug}`

Returns a list of top writers (`user_ids`) within a particular topic/niche (`topic_slug`). 
e.g. 
- blockchain
- relationships
- artificial-intelligence, etc ...

**Note:** You can use optional `count` query parameter to limit the number of results.  The maximum number of top writers within a topic/niche will be 250.


<h3 id="get-top-writers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|topic_slug|path|string|true|It's a unique string, usually hyphen-separated, representing a topic/niche, as classified by Medium.|
|count|query|integer|false|Limits the number of `article_ids` in the result.|

> Example responses

> 200 Response

```json
{
  "top_writers": [
    "1985b61817c3"
  ]
}
```

<h3 id="get-top-writers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-top-writers-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|top_writers|[string]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get Topfeeds

> Code samples

```bash
curl https://example.com/topfeeds/artificial-intelligence/new \
  -H 'Accept: application/json'
```

`GET /topfeeds/{tag}/{mode}`

Returns a list of `article_ids` (length: 25) for the given `tag` and `mode`.


<h3 id="get-topfeeds-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tag|path|string|true|It's a unique string, usually hyphen-separated, representing a class of content.|
|mode|path|string|true|Mode:<br><br>  - `hot` : For getting trending articles<br>  - `new` : For getting latest articles<br>  - `top_year` : For getting best articles of the year<br>  - `top_month` : For getting best articles of the month<br>  - `top_week` : For getting best articles of the week<br>  - `top_all_time`: For getting best article of all time<br>|
|after|query|integer|false|To get the subsequent top feeds. (`after` &lt; 250)|
|count|query|integer|false|To limit the number of top feeds. (`count` &lt; 25)|

> Example responses

> 200 Response

```json
{
  "topfeeds": [
    "b2076afc4930"
  ]
}
```

<h3 id="get-topfeeds-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-topfeeds-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|topfeeds|[string]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="medium-api-list">List</h1>

## Get List Info

> Code samples

```bash
curl https://example.com/list/38f9e0f9bea6 \
  -H 'Accept: application/json'
```

`GET /list/{list_id}`

Returns the list-related information such as *id, name, author, description,  thumbnail image url, creation datetime, last article inserted datetime,  number of articles in the list, claps, voters, and comments/responses*.


<h3 id="get-list-info-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|list_id|path|string|true|It's a unique hash id assigned to every Medium List.|

> Example responses

> 200 Response

```json
{
  "author": "1985b61817c3",
  "claps": 48,
  "count": 18,
  "created_at": "2023-03-12 06:46:46",
  "description": "Collections of all the articles and resources related to Medium API",
  "id": "38f9e0f9bea6",
  "last_item_inserted_at": "2023-03-12 06:53:02",
  "name": "Medium API",
  "responses_count": 1,
  "thumbnail": "https://miro.medium.com/0*8f634a2860234802375db89fbfcccb5cc717f3fd.jpeg",
  "voters": 1
}
```

<h3 id="get-list-info-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-list-info-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|author|string|false|none|`user_id` of the author|
|claps|integer(int32)|false|none|none|
|count|integer(int32)|false|none|Number of articles in the list|
|created_at|string|false|none|none|
|description|string|false|none|none|
|id|string|false|none|none|
|last_item_inserted_at|string|false|none|none|
|name|string|false|none|none|
|responses_count|integer(int32)|false|none|none|
|thumbnail|string|false|none|Image URL|
|voters|integer(int32)|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get List Articles

> Code samples

```bash
curl https://example.com/list/38f9e0f9bea6/articles \
  -H 'Accept: application/json'
```

`GET /list/{list_id}/articles`

Returns an array of `articles_ids` present in the given Medium List.


<h3 id="get-list-articles-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|list_id|path|string|true|It's a unique hash id assigned to every Medium List.|

> Example responses

> 200 Response

```json
{
  "id": "38f9e0f9bea6",
  "list_articles": [
    "90a01549d8db"
  ]
}
```

<h3 id="get-list-articles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-list-articles-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|list_articles|[string]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get List Responses

> Code samples

```bash
curl https://example.com/list/38f9e0f9bea6/responses \
  -H 'Accept: application/json'
```

`GET /list/{list_id}/responses`

Returns an array of `response_ids` of the comments (same as `article_ids`) on the given Medium List.


<h3 id="get-list-responses-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|list_id|path|string|true|It's a unique hash id assigned to every Medium List.|

> Example responses

> 200 Response

```json
{
  "id": "38f9e0f9bea6",
  "responses": [
    "f31a257b42e8"
  ]
}
```

<h3 id="get-list-responses-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-list-responses-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|responses|[string]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="medium-api-search">Search</h1>

## Search Articles

> Code samples

```bash
curl 'https://example.com/search/articles?query={query}?query=startup' \
  -H 'Accept: application/json'
```

`GET /search/articles?query={query}`

Returns the list of `articles_ids` for the given search query results. (Max Length = 1000)


<h3 id="search-articles-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|query|query|string|true|Search query|

> Example responses

> 200 Response

```json
{
  "articles": [
    "6556feb21311"
  ],
  "search_query": "startup"
}
```

<h3 id="search-articles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="search-articles-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|articles|[string]|false|none|none|
|search_query|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Search Lists

> Code samples

```bash
curl 'https://example.com/search/lists?query={query}?query=artificial%20intelligence' \
  -H 'Accept: application/json'
```

`GET /search/lists?query={query}`

Returns an array of `list_ids` for the given search query results. (Max Length = 1000)


<h3 id="search-lists-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|query|query|string|true|Search query|

> Example responses

> 200 Response

```json
{
  "lists": [
    "a8266c175cda"
  ],
  "search_query": "artificial intelligence"
}
```

<h3 id="search-lists-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="search-lists-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lists|[string]|false|none|none|
|search_query|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Search Publications

> Code samples

```bash
curl 'https://example.com/search/publications?query={query}?query=mental%20health' \
  -H 'Accept: application/json'
```

`GET /search/publications?query={query}`

Returns the list of `publication_ids` for the given search query results. (Max Length = 1000)


<h3 id="search-publications-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|query|query|string|true|Search query|

> Example responses

> 200 Response

```json
{
  "publications": [
    "8d6b8a439e32"
  ],
  "search_query": "mental health"
}
```

<h3 id="search-publications-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="search-publications-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|publications|[string]|false|none|none|
|search_query|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Search Tags

> Code samples

```bash
curl 'https://example.com/search/tags?query={query}?query=blockchain' \
  -H 'Accept: application/json'
```

`GET /search/tags?query={query}`

Returns a list of `tags` for the given search query results. (Max Length = 1000)


<h3 id="search-tags-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|query|query|string|true|Search query|

> Example responses

> 200 Response

```json
{
  "search_query": "blockchain",
  "tags": [
    "blockchain-technology"
  ]
}
```

<h3 id="search-tags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="search-tags-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|search_query|string|false|none|none|
|tags|[string]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Search Users

> Code samples

```bash
curl 'https://example.com/search/users?query={query}?query=data%20engineer' \
  -H 'Accept: application/json'
```

`GET /search/users?query={query}`

Returns a list of `user_ids` for the given search query results. (Max Length = 1000)


<h3 id="search-users-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|query|query|string|true|Search query|

> Example responses

> 200 Response

```json
{
  "search_query": "data engineer",
  "users": [
    "1985b61817c3"
  ]
}
```

<h3 id="search-users-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="search-users-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|search_query|string|false|none|none|
|users|[string]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>
