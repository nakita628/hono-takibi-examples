<h1 id="forem-api-v1">Forem API V1 v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Access Forem articles, users and other resources via API.
        For a real-world example of Forem in action, check out [DEV](https://www.dev.to).
        All endpoints can be accessed with the 'api-key' header and a accept header, but
        some of them are accessible publicly without authentication.

        Dates and date times, unless otherwise specified, must be in
        the [RFC 3339](https://tools.ietf.org/html/rfc3339) format.

Base URLs:

* <a href="https://dev.to/api">https://dev.to/api</a> - Production server

# Authentication

* API Key (api-key)
    - Parameter Name: **api-key**, in: header. API Key authentication.

Authentication for some endpoints, like write operations on the
Articles API require a DEV API key.

All authenticated endpoints are CORS disabled, the API key is intended for non-browser scripts.

### Getting an API key

To obtain one, please follow these steps:

  - visit https://dev.to/settings/extensions
  - in the "DEV API Keys" section create a new key by adding a
    description and clicking on "Generate API Key"

    ![obtain a DEV API Key](https://user-images.githubusercontent.com/37842/172718105-bd93664e-76e0-477d-99c4-265dda0b06c5.png)

  - You'll see the newly generated key in the same view
    ![generated DEV API Key](https://user-images.githubusercontent.com/37842/172718151-e7fe26a0-9937-42e8-96c6-333acdab9e49.png)

<h1 id="forem-api-v1-users">users</h1>

## Invite a User

<a id="opIdpostAdminUsersCreate"></a>

> Code samples

```bash
curl https://example.com/api/admin/users \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "api-key: ${API_KEY}" \
  -d '{
    "email": "string",
    "name": "string"
  }'
```

`POST /api/admin/users`

This endpoint allows the client to trigger an invitation to the provided email address.

        It requires a token from a user with `super_admin` privileges.

> Body parameter

```json
{
  "email": "string",
  "name": "string"
}
```

<h3 id="invite-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[UserInviteParam](#schemauserinviteparam)|false|none|
|» email|body|string|false|none|
|» name|body|string \| null|false|none|

> Example responses

> 401 Response

```json
{
  "error": "unauthorized",
  "status": 401
}
```

> 422 Response

```json
{
  "error": "param is missing or the value is empty: email",
  "status": 422
}
```

<h3 id="invite-a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful|None|
|401|Unauthorized|Unauthorized|None|
|422|Unprocessable Entity|Unprocessable Entity|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api-key
</aside>

## The authenticated user

<a id="opIdgetUserMe"></a>

> Code samples

```bash
curl https://example.com/api/users/me \
  -H 'Accept: application/json' \
  -H "api-key: ${API_KEY}"
```

`GET /api/users/me`

This endpoint allows the client to retrieve information about the authenticated user

> Example responses

> 200 Response

```json
{
  "github_username": "github480",
  "id": 916,
  "joined_at": "Feb 27, 2023",
  "location": null,
  "name": "Dennis \"Rodger\" \\:/ Gorczany",
  "profile_image": "/uploads/user/profile_image/916/fc0d6dd7-6dee-4df6-9720-ac6618f19fd5.jpeg",
  "summary": null,
  "twitter_username": "twitter480",
  "type_of": "user",
  "username": "username480",
  "website_url": null
}
```

> 401 Response

```json
{
  "error": "unauthorized",
  "status": 401
}
```

<h3 id="the-authenticated-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful|Inline|
|401|Unauthorized|Unauthorized|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api-key
</aside>

## A User

<a id="opIdgetUser"></a>

> Code samples

```bash
curl https://example.com/api/users/string \
  -H 'Accept: application/json' \
  -H "api-key: ${API_KEY}"
```

`GET /api/users/{id}`

This endpoint allows the client to retrieve a single user, either by id
or by the user's username.

For complete documentation, see the v0 API docs: https://developers.forem.com/api/v0#tag/users/operation/getUser

<h3 id="a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{}
```

<h3 id="a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api-key
</aside>

## Suspend a User

<a id="opIdsuspendUser"></a>

> Code samples

```bash
curl https://example.com/api/users/1/suspend \
  -X PUT \
  -H 'Accept: application/json' \
  -H "api-key: ${API_KEY}"
```

`PUT /api/users/{id}/suspend`

This endpoint allows the client to suspend a user.

The user associated with the API key must have any 'admin' or 'moderator' role.

This specified user will be assigned the 'suspended' role. Suspending a user will stop the
user from posting new posts and comments. It doesn't delete any of the user's content, just
prevents them from creating new content while suspended. Users are not notified of their suspension
in the UI, so if you want them to know about this, you must notify them.

<h3 id="suspend-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The ID of the user to suspend.|

> Example responses

> 401 Response

```json
{
  "error": "unauthorized",
  "status": 401
}
```

> 404 Response

```json
{
  "error": "not found",
  "status": 404
}
```

<h3 id="suspend-a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|User successfully unpublished|None|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Unknown User ID|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api-key
</aside>

## Unpublish a User's Articles and Comments

<a id="opIdunpublishUser"></a>

> Code samples

```bash
curl https://example.com/api/users/1/unpublish \
  -X PUT \
  -H 'Accept: application/json' \
  -H "api-key: ${API_KEY}"
```

`PUT /api/users/{id}/unpublish`

This endpoint allows the client to unpublish all of the articles and
comments created by a user.

The user associated with the API key must have any 'admin' or 'moderator' role.

This specified user's articles and comments will be unpublished and will no longer be
visible to the public. They will remain in the database and will set back to draft status
on the specified user's  dashboard. Any notifications associated with the specified user's
articles and comments will be deleted.

Note this endpoint unpublishes articles and comments asychronously: it will return a 204 NO CONTENT
status code immediately, but the articles and comments will not be unpublished until the
request is completed on the server.

<h3 id="unpublish-a-users-articles-and-comments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The ID of the user to unpublish.|

> Example responses

> 401 Response

```json
{
  "error": "unauthorized",
  "status": 401
}
```

> 404 Response

```json
{
  "error": "not found",
  "status": 404
}
```

<h3 id="unpublish-a-users-articles-and-comments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|User's articles and comments successfully unpublished|None|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Unknown User ID (still accepted for async processing)|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api-key
</aside>

<h1 id="forem-api-v1-articles">articles</h1>

## Published articles

<a id="opIdgetArticles"></a>

> Code samples

```bash
curl https://example.com/api/articles \
  -H 'Accept: application/json'
```

`GET /api/articles`

This endpoint allows the client to retrieve a list of articles.

"Articles" are all the posts that users create on DEV that typically
show up in the feed. They can be a blog post, a discussion question,
a help thread etc. but is referred to as article within the code.

By default it will return featured, published articles ordered
by descending popularity.

It supports pagination, each page will contain `30` articles by default.

<h3 id="published-articles-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer(int32)|false|Pagination page|
|per_page|query|integer(int32)|false|Page size (the number of items to return per page). The default maximum value can be overridden by "API_PER_PAGE_MAX" environment variable.|
|tag|query|string|false|Using this parameter will retrieve articles that contain the requested tag. Articles<br>will be ordered by descending popularity.This parameter can be used in conjuction with `top`.|
|tags|query|string|false|Using this parameter will retrieve articles with any of the comma-separated tags.<br>Articles will be ordered by descending popularity.|
|tags_exclude|query|string|false|Using this parameter will retrieve articles that do _not_ contain _any_<br>of comma-separated tags. Articles will be ordered by descending popularity.|
|username|query|string|false|Using this parameter will retrieve articles belonging<br>            to a User or Organization ordered by descending publication date.<br>            If `state=all` the number of items returned will be `1000` instead of the default `30`.<br>            This parameter can be used in conjuction with `state`.|
|state|query|string|false|Using this parameter will allow the client to check which articles are fresh or rising.<br>            If `state=fresh` the server will return fresh articles.<br>            If `state=rising` the server will return rising articles.<br>            This param can be used in conjuction with `username`, only if set to `all`.|
|top|query|integer(int32)|false|Using this parameter will allow the client to return the most popular articles<br>in the last `N` days.<br>`top` indicates the number of days since publication of the articles returned.<br>This param can be used in conjuction with `tag`.|
|collection_id|query|integer(int32)|false|Adding this will allow the client to return the list of articles<br>belonging to the requested collection, ordered by ascending publication date.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|state|fresh|
|state|rising|
|state|all|

> Example responses

> 200 Response

```json
[
  {
    "canonical_url": "http://localhost:3000/username387/the-winds-twelve-quarters175-p58",
    "collection_id": null,
    "comments_count": 0,
    "cover_image": "http://localhost:3000/assets/10-56ac1726da8a3bcbe4f93b48752287ea41bb79199cd8a8a61a9e4280ce9ae5b8.png",
    "created_at": "2023-02-27T10:58:04Z",
    "crossposted_at": null,
    "description": "Iphone yr etsy goth skateboard sustainable twee direct trade. Freegan cardigan +1 twee blog gastropub...",
    "edited_at": null,
    "flare_tag": {
      "bg_color_hex": "#000000",
      "name": "discuss",
      "text_color_hex": "#ffffff"
    },
    "id": 610,
    "last_comment_at": "2023-02-27T10:58:04Z",
    "organization": {
      "name": "O'Connell, Bosco and Skiles",
      "profile_image": "/uploads/organization/profile_image/72/0ac6f538-133b-4535-a194-9762e9953ed2.png",
      "profile_image_90": "/uploads/organization/profile_image/72/0ac6f538-133b-4535-a194-9762e9953ed2.png",
      "slug": "org70",
      "username": "org70"
    },
    "path": "/username387/the-winds-twelve-quarters175-p58",
    "positive_reactions_count": 0,
    "public_reactions_count": 0,
    "published_at": "2023-02-27T10:58:04Z",
    "published_timestamp": "2023-02-27T10:58:04Z",
    "readable_publish_date": "Feb 27",
    "reading_time_minutes": 1,
    "slug": "the-winds-twelve-quarters175-p58",
    "social_image": "http://localhost:3000/assets/10-56ac1726da8a3bcbe4f93b48752287ea41bb79199cd8a8a61a9e4280ce9ae5b8.png",
    "tag_list": [
      "discuss"
    ],
    "tags": "discuss",
    "title": "The Wind's Twelve Quarters175",
    "type_of": "article",
    "url": "http://localhost:3000/username387/the-winds-twelve-quarters175-p58",
    "user": {
      "github_username": "github387",
      "name": "Boyce \"Jimmy\" \\:/ Ledner",
      "profile_image": "/uploads/user/profile_image/823/265a22f6-a63a-4bae-9f3f-6a5d8d046de5.jpeg",
      "profile_image_90": "/uploads/user/profile_image/823/265a22f6-a63a-4bae-9f3f-6a5d8d046de5.jpeg",
      "twitter_username": "twitter387",
      "user_id": 823,
      "username": "username387",
      "website_url": null
    }
  }
]
```

<h3 id="published-articles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A List of Articles|Inline|

<h3 id="published-articles-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ArticleIndex](#schemaarticleindex)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Publish article

<a id="opIdcreateArticle"></a>

> Code samples

```bash
curl https://example.com/api/articles \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "api-key: ${API_KEY}" \
  -d '{
    "article": {
      "body_markdown": "string",
      "canonical_url": "string",
      "description": "string",
      "main_image": "string",
      "organization_id": 0,
      "published": false,
      "series": "string",
      "tags": "string",
      "title": "string"
    }
  }'
```

`POST /api/articles`

This endpoint allows the client to create a new article.

"Articles" are all the posts that users create on DEV that typically show up in the feed. They can be a blog post, a discussion question, a help thread etc. but is referred to as article within the code.

> Body parameter

```json
{
  "article": {
    "body_markdown": "string",
    "canonical_url": "string",
    "description": "string",
    "main_image": "string",
    "organization_id": 0,
    "published": false,
    "series": "string",
    "tags": "string",
    "title": "string"
  }
}
```

<h3 id="publish-article-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Article](#schemaarticle)|false|none|
|» article|body|object|false|none|
|» » body_markdown|body|string|false|none|
|» » canonical_url|body|string \| null|false|none|
|» » description|body|string|false|none|
|» » main_image|body|string \| null|false|none|
|» » organization_id|body|integer \| null|false|none|
|» » published|body|boolean|false|none|
|» » series|body|string \| null|false|none|
|» » tags|body|string|false|none|
|» » title|body|string|false|none|

> Example responses

> 201 Response

```json
{
  "body_html": "<p><strong>New</strong> body for the article</p>\n\n",
  "body_markdown": "**New** body for the article",
  "canonical_url": "https://dev.to/fdocr/headless-chrome-dual-mode-tests-for-ruby-on-rails-4p6g",
  "collection_id": 16,
  "comments_count": 0,
  "cover_image": "https://thepracticaldev.s3.amazonaws.com/i/5wfo25724gzgk5e5j50g.jpg",
  "created_at": "2023-02-27T10:58:03Z",
  "crossposted_at": null,
  "description": "New post example",
  "edited_at": null,
  "id": 607,
  "last_comment_at": "2023-02-27T10:58:03Z",
  "path": "/username383/new-article-1j5a",
  "positive_reactions_count": 0,
  "public_reactions_count": 0,
  "published_at": "2023-02-27T10:58:03Z",
  "published_timestamp": "2023-02-27T10:58:03Z",
  "readable_publish_date": "Feb 27",
  "reading_time_minutes": 1,
  "slug": "new-article-1j5a",
  "social_image": "https://thepracticaldev.s3.amazonaws.com/i/5wfo25724gzgk5e5j50g.jpg",
  "tag_list": "",
  "tags": [],
  "title": "New article",
  "type_of": "article",
  "url": "http://localhost:3000/username383/new-article-1j5a",
  "user": {
    "github_username": "github383",
    "name": "King \"Kurtis\" \\:/ Hilpert",
    "profile_image": "/uploads/user/profile_image/819/8d11e7ba-593a-4192-8977-14b323d77018.jpeg",
    "profile_image_90": "/uploads/user/profile_image/819/8d11e7ba-593a-4192-8977-14b323d77018.jpeg",
    "twitter_username": "twitter383",
    "user_id": 819,
    "username": "username383",
    "website_url": null
  }
}
```

> 401 Response

```json
{
  "error": "unauthorized",
  "status": 401
}
```

> 422 Response

```json
{
  "error": "param is missing or the value is empty: article",
  "status": 422
}
```

<h3 id="publish-article-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|An Article|None|
|401|Unauthorized|Unauthorized|None|
|422|Unprocessable Entity|Unprocessable Entity|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api-key
</aside>

## Published articles sorted by published date

<a id="opIdgetLatestArticles"></a>

> Code samples

```bash
curl https://example.com/api/articles/latest \
  -H 'Accept: application/json'
```

`GET /api/articles/latest`

This endpoint allows the client to retrieve a list of articles. ordered by descending publish date.

It supports pagination, each page will contain 30 articles by default.

<h3 id="published-articles-sorted-by-published-date-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer(int32)|false|Pagination page|
|per_page|query|integer(int32)|false|Page size (the number of items to return per page). The default maximum value can be overridden by "API_PER_PAGE_MAX" environment variable.|

> Example responses

> 200 Response

```json
[
  {
    "canonical_url": "http://localhost:3000/username390/absalom-absalom178-4a5e",
    "collection_id": null,
    "comments_count": 0,
    "cover_image": "http://localhost:3000/assets/24-377bc0861a9a539e8d1875ea9d4eea9e0226d93e1b6e9317e0c73c754699cc14.png",
    "created_at": "2023-02-27T10:58:04Z",
    "crossposted_at": null,
    "description": "Sartorial photo booth muggle magic chambray occupy umami leggings. Celiac pug paleo yolo...",
    "edited_at": null,
    "flare_tag": {
      "bg_color_hex": "#000000",
      "name": "discuss",
      "text_color_hex": "#ffffff"
    },
    "id": 613,
    "last_comment_at": "2023-02-27T10:58:04Z",
    "path": "/username390/absalom-absalom178-4a5e",
    "positive_reactions_count": 0,
    "public_reactions_count": 0,
    "published_at": "2023-02-27T10:58:04Z",
    "published_timestamp": "2023-02-27T10:58:04Z",
    "readable_publish_date": "Feb 27",
    "reading_time_minutes": 1,
    "slug": "absalom-absalom178-4a5e",
    "social_image": "http://localhost:3000/assets/24-377bc0861a9a539e8d1875ea9d4eea9e0226d93e1b6e9317e0c73c754699cc14.png",
    "tag_list": [
      "javascript",
      "html",
      "discuss"
    ],
    "tags": "javascript, html, discuss",
    "title": "Absalom, Absalom!178",
    "type_of": "article",
    "url": "http://localhost:3000/username390/absalom-absalom178-4a5e",
    "user": {
      "github_username": "github390",
      "name": "Samantha \"Clemencia\" \\:/ Kemmer",
      "profile_image": "/uploads/user/profile_image/826/dd79a3c7-6da2-4138-ac15-fab1628b409d.jpeg",
      "profile_image_90": "/uploads/user/profile_image/826/dd79a3c7-6da2-4138-ac15-fab1628b409d.jpeg",
      "twitter_username": "twitter390",
      "user_id": 826,
      "username": "username390",
      "website_url": null
    }
  },
  {
    "canonical_url": "http://localhost:3000/username389/if-not-now-when177-4iin",
    "collection_id": null,
    "comments_count": 0,
    "cover_image": "http://localhost:3000/assets/2-1a96ae446ded018b65b215cce3aecc40a00e701642da521fdd6edd3c593ff6c1.png",
    "created_at": "2023-02-27T10:58:04Z",
    "crossposted_at": null,
    "description": "Master taxidermy yuccie polaroid tousled 90's street. Green juice helvetica chartreuse listicle banh...",
    "edited_at": null,
    "flare_tag": {
      "bg_color_hex": "#000000",
      "name": "discuss",
      "text_color_hex": "#ffffff"
    },
    "id": 612,
    "last_comment_at": "2023-02-27T10:58:04Z",
    "path": "/username389/if-not-now-when177-4iin",
    "positive_reactions_count": 0,
    "public_reactions_count": 0,
    "published_at": "2023-02-27T10:58:04Z",
    "published_timestamp": "2023-02-27T10:58:04Z",
    "readable_publish_date": "Feb 27",
    "reading_time_minutes": 1,
    "slug": "if-not-now-when177-4iin",
    "social_image": "http://localhost:3000/assets/2-1a96ae446ded018b65b215cce3aecc40a00e701642da521fdd6edd3c593ff6c1.png",
    "tag_list": [
      "javascript",
      "html",
      "discuss"
    ],
    "tags": "javascript, html, discuss",
    "title": "If Not Now, When?177",
    "type_of": "article",
    "url": "http://localhost:3000/username389/if-not-now-when177-4iin",
    "user": {
      "github_username": "github389",
      "name": "Brianna \"Gabriel\" \\:/ Mante",
      "profile_image": "/uploads/user/profile_image/825/3bf3e66f-9268-4e22-89d9-431e0a5fa9dc.jpeg",
      "profile_image_90": "/uploads/user/profile_image/825/3bf3e66f-9268-4e22-89d9-431e0a5fa9dc.jpeg",
      "twitter_username": "twitter389",
      "user_id": 825,
      "username": "username389",
      "website_url": null
    }
  },
  {
    "canonical_url": "http://localhost:3000/username388/have-his-carcase176-1phd",
    "collection_id": null,
    "comments_count": 0,
    "cover_image": "http://localhost:3000/assets/24-377bc0861a9a539e8d1875ea9d4eea9e0226d93e1b6e9317e0c73c754699cc14.png",
    "created_at": "2023-02-27T10:58:04Z",
    "crossposted_at": null,
    "description": "Salvia sartorial carry you probably haven't heard of them try-hard dreamcatcher meggings 8-bit....",
    "edited_at": null,
    "flare_tag": {
      "bg_color_hex": "#000000",
      "name": "discuss",
      "text_color_hex": "#ffffff"
    },
    "id": 611,
    "last_comment_at": "2023-02-27T10:58:04Z",
    "path": "/username388/have-his-carcase176-1phd",
    "positive_reactions_count": 0,
    "public_reactions_count": 0,
    "published_at": "2023-02-27T10:58:04Z",
    "published_timestamp": "2023-02-27T10:58:04Z",
    "readable_publish_date": "Feb 27",
    "reading_time_minutes": 1,
    "slug": "have-his-carcase176-1phd",
    "social_image": "http://localhost:3000/assets/24-377bc0861a9a539e8d1875ea9d4eea9e0226d93e1b6e9317e0c73c754699cc14.png",
    "tag_list": [
      "javascript",
      "html",
      "discuss"
    ],
    "tags": "javascript, html, discuss",
    "title": "Have His Carcase176",
    "type_of": "article",
    "url": "http://localhost:3000/username388/have-his-carcase176-1phd",
    "user": {
      "github_username": "github388",
      "name": "Leeanna \"Miles\" \\:/ Hills",
      "profile_image": "/uploads/user/profile_image/824/50463451-9323-40fc-b439-c7df125a27fa.jpeg",
      "profile_image_90": "/uploads/user/profile_image/824/50463451-9323-40fc-b439-c7df125a27fa.jpeg",
      "twitter_username": "twitter388",
      "user_id": 824,
      "username": "username388",
      "website_url": null
    }
  }
]
```

<h3 id="published-articles-sorted-by-published-date-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A List of Articles|Inline|

<h3 id="published-articles-sorted-by-published-date-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ArticleIndex](#schemaarticleindex)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## User's articles

<a id="opIdgetUserArticles"></a>

> Code samples

```bash
curl https://example.com/api/articles/me \
  -H 'Accept: application/json' \
  -H "api-key: ${API_KEY}"
```

`GET /api/articles/me`

This endpoint allows the client to retrieve a list of published articles on behalf of an authenticated user.

"Articles" are all the posts that users create on DEV that typically show up in the feed. They can be a blog post, a discussion question, a help thread etc. but is referred to as article within the code.

Published articles will be in reverse chronological publication order.

It will return published articles with pagination. By default a page will contain 30 articles.

<h3 id="users-articles-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer(int32)|false|Pagination page|
|per_page|query|integer(int32)|false|Page size (the number of items to return per page). The default maximum value can be overridden by "API_PER_PAGE_MAX" environment variable.|

> Example responses

> 200 Response

```json
[]
```

> 401 Response

```json
{
  "error": "unauthorized",
  "status": 401
}
```

<h3 id="users-articles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A List of the authenticated user's Articles|Inline|
|401|Unauthorized|Unauthorized|None|

<h3 id="users-articles-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ArticleIndex](#schemaarticleindex)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api-key
</aside>

## User's all articles

<a id="opIdgetUserAllArticles"></a>

> Code samples

```bash
curl https://example.com/api/articles/me/all \
  -H 'Accept: application/json' \
  -H "api-key: ${API_KEY}"
```

`GET /api/articles/me/all`

This endpoint allows the client to retrieve a list of all articles on behalf of an authenticated user.

"Articles" are all the posts that users create on DEV that typically show up in the feed. They can be a blog post, a discussion question, a help thread etc. but is referred to as article within the code.

It will return both published and unpublished articles with pagination.

Unpublished articles will be at the top of the list in reverse chronological creation order. Published articles will follow in reverse chronological publication order.

By default a page will contain 30 articles.

<h3 id="users-all-articles-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer(int32)|false|Pagination page|
|per_page|query|integer(int32)|false|Page size (the number of items to return per page). The default maximum value can be overridden by "API_PER_PAGE_MAX" environment variable.|

> Example responses

> 200 Response

```json
[]
```

> 401 Response

```json
{
  "error": "unauthorized",
  "status": 401
}
```

<h3 id="users-all-articles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A List of the authenticated user's Articles|Inline|
|401|Unauthorized|Unauthorized|None|

<h3 id="users-all-articles-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ArticleIndex](#schemaarticleindex)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api-key
</aside>

## User's published articles

<a id="opIdgetUserPublishedArticles"></a>

> Code samples

```bash
curl https://example.com/api/articles/me/published \
  -H 'Accept: application/json' \
  -H "api-key: ${API_KEY}"
```

`GET /api/articles/me/published`

This endpoint allows the client to retrieve a list of published articles on behalf of an authenticated user.

"Articles" are all the posts that users create on DEV that typically show up in the feed. They can be a blog post, a discussion question, a help thread etc. but is referred to as article within the code.

Published articles will be in reverse chronological publication order.

It will return published articles with pagination. By default a page will contain 30 articles.

<h3 id="users-published-articles-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer(int32)|false|Pagination page|
|per_page|query|integer(int32)|false|Page size (the number of items to return per page). The default maximum value can be overridden by "API_PER_PAGE_MAX" environment variable.|

> Example responses

> 200 Response

```json
[]
```

> 401 Response

```json
{
  "error": "unauthorized",
  "status": 401
}
```

<h3 id="users-published-articles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A List of the authenticated user's Articles|Inline|
|401|Unauthorized|Unauthorized|None|

<h3 id="users-published-articles-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ArticleIndex](#schemaarticleindex)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api-key
</aside>

## User's unpublished articles

<a id="opIdgetUserUnpublishedArticles"></a>

> Code samples

```bash
curl https://example.com/api/articles/me/unpublished \
  -H 'Accept: application/json' \
  -H "api-key: ${API_KEY}"
```

`GET /api/articles/me/unpublished`

This endpoint allows the client to retrieve a list of unpublished articles on behalf of an authenticated user.

"Articles" are all the posts that users create on DEV that typically show up in the feed. They can be a blog post, a discussion question, a help thread etc. but is referred to as article within the code.

Unpublished articles will be in reverse chronological creation order.

It will return unpublished articles with pagination. By default a page will contain 30 articles.

<h3 id="users-unpublished-articles-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer(int32)|false|Pagination page|
|per_page|query|integer(int32)|false|Page size (the number of items to return per page). The default maximum value can be overridden by "API_PER_PAGE_MAX" environment variable.|

> Example responses

> 200 Response

```json
[]
```

> 401 Response

```json
{
  "error": "unauthorized",
  "status": 401
}
```

<h3 id="users-unpublished-articles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A List of the authenticated user's Articles|Inline|
|401|Unauthorized|Unauthorized|None|

<h3 id="users-unpublished-articles-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ArticleIndex](#schemaarticleindex)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api-key
</aside>

## Published article by id

<a id="opIdgetArticleById"></a>

> Code samples

```bash
curl https://example.com/api/articles/0 \
  -H 'Accept: application/json'
```

`GET /api/articles/{id}`

This endpoint allows the client to retrieve a single published article given its `id`.

<h3 id="published-article-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|none|

> Example responses

> 200 Response

```json
{
  "body_html": "<p>Banjo carry cray vhs swag. Whatever celiac quinoa pabst chillwave. Vice pickled park lumbersexual salvia synth. Blog etsy austin mustache.</p>\n\n<p>Biodiesel forage street thundercats deep v.</p>\n\n",
  "body_markdown": "---\ntitle: Cover Her Face179\npublished: true\ntags: discuss\ndate: \nseries: \ncanonical_url: \n\n---\n\nBanjo carry cray vhs swag. Whatever celiac quinoa pabst chillwave. Vice pickled park lumbersexual salvia synth. Blog etsy austin mustache.\n\n\nBiodiesel forage street thundercats deep v.\n\n",
  "canonical_url": "http://localhost:3000/username391/cover-her-face179-4gbc",
  "collection_id": null,
  "comments_count": 0,
  "cover_image": "http://localhost:3000/assets/2-1a96ae446ded018b65b215cce3aecc40a00e701642da521fdd6edd3c593ff6c1.png",
  "created_at": "2023-02-27T10:58:04Z",
  "crossposted_at": null,
  "description": "Banjo carry cray vhs swag. Whatever celiac quinoa pabst chillwave. Vice pickled park lumbersexual...",
  "edited_at": null,
  "flare_tag": {
    "bg_color_hex": "#000000",
    "name": "discuss",
    "text_color_hex": "#ffffff"
  },
  "id": 614,
  "last_comment_at": "2023-02-27T10:58:04Z",
  "path": "/username391/cover-her-face179-4gbc",
  "positive_reactions_count": 0,
  "public_reactions_count": 0,
  "published_at": "2023-02-27T10:58:04Z",
  "published_timestamp": "2023-02-27T10:58:04Z",
  "readable_publish_date": "Feb 27",
  "reading_time_minutes": 1,
  "slug": "cover-her-face179-4gbc",
  "social_image": "http://localhost:3000/assets/2-1a96ae446ded018b65b215cce3aecc40a00e701642da521fdd6edd3c593ff6c1.png",
  "tag_list": "discuss",
  "tags": [
    "discuss"
  ],
  "title": "Cover Her Face179",
  "type_of": "article",
  "url": "http://localhost:3000/username391/cover-her-face179-4gbc",
  "user": {
    "github_username": "github391",
    "name": "Von \"Joan\" \\:/ Swaniawski",
    "profile_image": "/uploads/user/profile_image/827/90d87f32-bafb-49f5-8001-c7f1146a84f8.jpeg",
    "profile_image_90": "/uploads/user/profile_image/827/90d87f32-bafb-49f5-8001-c7f1146a84f8.jpeg",
    "twitter_username": "twitter391",
    "user_id": 827,
    "username": "username391",
    "website_url": null
  }
}
```

> 404 Response

```json
{
  "error": "not found",
  "status": 404
}
```

<h3 id="published-article-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|An Article|Inline|
|404|Not Found|Article Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Update an article by id

<a id="opIdupdateArticle"></a>

> Code samples

```bash
curl https://example.com/api/articles/123 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "api-key: ${API_KEY}" \
  -d '{
    "article": {
      "body_markdown": "string",
      "canonical_url": "string",
      "description": "string",
      "main_image": "string",
      "organization_id": 0,
      "published": false,
      "series": "string",
      "tags": "string",
      "title": "string"
    }
  }'
```

`PUT /api/articles/{id}`

This endpoint allows the client to update an existing article.

"Articles" are all the posts that users create on DEV that typically show up in the feed. They can be a blog post, a discussion question, a help thread etc. but is referred to as article within the code.

> Body parameter

```json
{
  "article": {
    "body_markdown": "string",
    "canonical_url": "string",
    "description": "string",
    "main_image": "string",
    "organization_id": 0,
    "published": false,
    "series": "string",
    "tags": "string",
    "title": "string"
  }
}
```

<h3 id="update-an-article-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The ID of the user to unpublish.|
|body|body|[Article](#schemaarticle)|false|none|
|» article|body|object|false|none|
|» » body_markdown|body|string|false|none|
|» » canonical_url|body|string \| null|false|none|
|» » description|body|string|false|none|
|» » main_image|body|string \| null|false|none|
|» » organization_id|body|integer \| null|false|none|
|» » published|body|boolean|false|none|
|» » series|body|string \| null|false|none|
|» » tags|body|string|false|none|
|» » title|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "body_html": "<p><strong>New</strong> body for the article</p>\n\n",
  "body_markdown": "**New** body for the article",
  "canonical_url": "http://localhost:3000/username392/nectar-in-a-sieve180-51j6",
  "collection_id": null,
  "comments_count": 0,
  "cover_image": "http://localhost:3000/assets/16-77521848e7b5fcc073ac3e0bb004826e97f737238194e4c79330f662cc946ab2.png",
  "created_at": "2023-02-27T10:58:04Z",
  "crossposted_at": null,
  "description": "Humblebrag brooklyn master 3 wolf moon small batch thundercats typewriter chia. Gluten-free direct...",
  "edited_at": "2023-02-27T10:58:04Z",
  "id": 615,
  "last_comment_at": "2023-02-27T10:58:04Z",
  "path": "/username392/nectar-in-a-sieve180-51j6",
  "positive_reactions_count": 0,
  "public_reactions_count": 0,
  "published_at": "2023-02-27T10:58:04Z",
  "published_timestamp": "2023-02-27T10:58:04Z",
  "readable_publish_date": "Feb 27",
  "reading_time_minutes": 1,
  "slug": "nectar-in-a-sieve180-51j6",
  "social_image": "http://localhost:3000/assets/16-77521848e7b5fcc073ac3e0bb004826e97f737238194e4c79330f662cc946ab2.png",
  "tag_list": "",
  "tags": [],
  "title": "Nectar in a Sieve180",
  "type_of": "article",
  "url": "http://localhost:3000/username392/nectar-in-a-sieve180-51j6",
  "user": {
    "github_username": "github392",
    "name": "Lyndon \"Kaley\" \\:/ Torphy",
    "profile_image": "/uploads/user/profile_image/828/bd640b77-6394-4cf5-8d72-646c8ef542d5.jpeg",
    "profile_image_90": "/uploads/user/profile_image/828/bd640b77-6394-4cf5-8d72-646c8ef542d5.jpeg",
    "twitter_username": "twitter392",
    "user_id": 828,
    "username": "username392",
    "website_url": null
  }
}
```

> 401 Response

```json
{
  "error": "unauthorized",
  "status": 401
}
```

> 404 Response

```json
{
  "error": "not found",
  "status": 404
}
```

> 422 Response

```json
{
  "error": "param is missing or the value is empty: article",
  "status": 422
}
```

<h3 id="update-an-article-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|An Article|None|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Article Not Found|None|
|422|Unprocessable Entity|Unprocessable Entity|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api-key
</aside>

## Unpublish an article

<a id="opIdunpublishArticle"></a>

> Code samples

```bash
curl https://example.com/api/articles/1/unpublish \
  -X PUT \
  -H 'Accept: application/json' \
  -H "api-key: ${API_KEY}"
```

`PUT /api/articles/{id}/unpublish`

This endpoint allows the client to unpublish an article.

The user associated with the API key must have any 'admin' or 'moderator' role.

The article will be unpublished and will no longer be visible to the public. It will remain
in the database and will set back to draft status on the author's posts dashboard. Any
notifications associated with the article will be deleted. Any comments on the article
will remain.

<h3 id="unpublish-an-article-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The ID of the article to unpublish.|
|note|query|string|false|Content for the note that's created along with unpublishing|

> Example responses

> 401 Response

```json
{
  "error": "unauthorized",
  "status": 401
}
```

> 404 Response

```json
{
  "error": "not found",
  "status": 404
}
```

<h3 id="unpublish-an-article-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Article successfully unpublished|None|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Article Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api-key
</aside>

## Published article by path

<a id="opIdgetArticleByPath"></a>

> Code samples

```bash
curl https://example.com/api/articles/string/string \
  -H 'Accept: application/json'
```

`GET /api/articles/{username}/{slug}`

This endpoint allows the client to retrieve a single published article given its `path`.

<h3 id="published-article-by-path-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|username|path|string|true|none|
|slug|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "body_html": "<p>Synth tote bag venmo vice hoodie disrupt bitters mixtape. Fashion axe goth shoreditch kogi loko literally.</p>\n\n<p>Franzen ramps forage wayfarers thundercats put a bird on it loko.</p>\n\n",
  "body_markdown": "---\ntitle: The Line of Beauty183\npublished: true\ntags: discuss\ndate: \nseries: \ncanonical_url: \n\n---\n\nSynth tote bag venmo vice hoodie disrupt bitters mixtape. Fashion axe goth shoreditch kogi loko literally.\n\n\nFranzen ramps forage wayfarers thundercats put a bird on it loko.\n\n",
  "canonical_url": "http://localhost:3000/username396/the-line-of-beauty183-33nj",
  "collection_id": null,
  "comments_count": 0,
  "cover_image": "http://localhost:3000/assets/3-93b6b57b5a6115cffe5d63d29a22825eb9e65f647bfef57a88244bc2b98186f0.png",
  "created_at": "2023-02-27T10:58:04Z",
  "crossposted_at": null,
  "description": "Synth tote bag venmo vice hoodie disrupt bitters mixtape. Fashion axe goth shoreditch kogi loko...",
  "edited_at": null,
  "flare_tag": {
    "bg_color_hex": "#000000",
    "name": "discuss",
    "text_color_hex": "#ffffff"
  },
  "id": 618,
  "last_comment_at": "2023-02-27T10:58:04Z",
  "path": "/username396/the-line-of-beauty183-33nj",
  "positive_reactions_count": 0,
  "public_reactions_count": 0,
  "published_at": "2023-02-27T10:58:04Z",
  "published_timestamp": "2023-02-27T10:58:04Z",
  "readable_publish_date": "Feb 27",
  "reading_time_minutes": 1,
  "slug": "the-line-of-beauty183-33nj",
  "social_image": "http://localhost:3000/assets/3-93b6b57b5a6115cffe5d63d29a22825eb9e65f647bfef57a88244bc2b98186f0.png",
  "tag_list": "discuss",
  "tags": [
    "discuss"
  ],
  "title": "The Line of Beauty183",
  "type_of": "article",
  "url": "http://localhost:3000/username396/the-line-of-beauty183-33nj",
  "user": {
    "github_username": "github396",
    "name": "Danial \"Charles\" \\:/ Grant",
    "profile_image": "/uploads/user/profile_image/832/80339e58-8c50-4c64-b8a5-0ae9d3bf6d2d.jpeg",
    "profile_image_90": "/uploads/user/profile_image/832/80339e58-8c50-4c64-b8a5-0ae9d3bf6d2d.jpeg",
    "twitter_username": "twitter396",
    "user_id": 832,
    "username": "username396",
    "website_url": null
  }
}
```

> 404 Response

```json
{
  "error": "not found",
  "status": 404
}
```

<h3 id="published-article-by-path-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|An Article|Inline|
|404|Not Found|Article Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="forem-api-v1-comments">comments</h1>

## Comments

<a id="opIdgetCommentsByArticleId"></a>

> Code samples

```bash
curl https://example.com/api/comments \
  -H 'Accept: application/json'
```

`GET /api/comments`

This endpoint allows the client to retrieve all comments belonging to an article or podcast episode as threaded conversations.

It will return the all top level comments with their nested comments as threads. See the format specification for further details.

<h3 id="comments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|a_id|query|string|false|Article identifier.|
|p_id|query|string|false|Podcast Episode identifier.|

> Example responses

> 200 Response

```json
[
  {
    "body_html": "<p>Tumblr organic put a bird on it everyday mustache typewriter pug.</p>\n\n",
    "children": [],
    "created_at": "2023-02-27T10:58:05Z",
    "id_code": "60",
    "type_of": "comment",
    "user": {
      "github_username": "github410",
      "name": "Dwight \"Pedro\" \\:/ Parker",
      "profile_image": "/uploads/user/profile_image/846/8af90bef-f000-41c1-a90f-0e364c163a8a.jpeg",
      "profile_image_90": "/uploads/user/profile_image/846/8af90bef-f000-41c1-a90f-0e364c163a8a.jpeg",
      "twitter_username": "twitter410",
      "user_id": 846,
      "username": "username410",
      "website_url": null
    }
  }
]
```

> 404 Response

```json
{
  "error": "not found",
  "status": 404
}
```

<h3 id="comments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A List of Comments|Inline|
|404|Not Found|Resource Not Found|None|

<h3 id="comments-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Comment](#schemacomment)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Comment by id

<a id="opIdgetCommentById"></a>

> Code samples

```bash
curl https://example.com/api/comments/321 \
  -H 'Accept: application/json'
```

`GET /api/comments/{id}`

This endpoint allows the client to retrieve a comment as well as his descendants comments.

  It will return the required comment (the root) with its nested descendants as a thread.

  See the format specification for further details.

<h3 id="comment-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|Comment identifier.|

> Example responses

> 200 Response

```json
{
  "body_html": "<p>Farm-to-table park banjo. Cronut gentrify farm-to-table. Salvia distillery letterpress deep v keffiyeh kickstarter thundercats cray.</p>\n\n",
  "children": [],
  "created_at": "2023-02-27T10:58:05Z",
  "id_code": "62",
  "type_of": "comment",
  "user": {
    "github_username": "github414",
    "name": "Gilbert \"Alverta\" \\:/ Schroeder",
    "profile_image": "/uploads/user/profile_image/850/6976f67a-4df7-4ed1-967f-0a3ea0d52670.jpeg",
    "profile_image_90": "/uploads/user/profile_image/850/6976f67a-4df7-4ed1-967f-0a3ea0d52670.jpeg",
    "twitter_username": "twitter414",
    "user_id": 850,
    "username": "username414",
    "website_url": null
  }
}
```

> 404 Response

```json
{
  "error": "not found",
  "status": 404
}
```

<h3 id="comment-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A List of the Comments|None|
|404|Not Found|Comment Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="forem-api-v1-display-ads">display ads</h1>

## display ads

> Code samples

```bash
curl https://example.com/api/display_ads \
  -H 'Accept: application/json' \
  -H "api-key: ${API_KEY}"
```

`GET /api/display_ads`

This endpoint allows the client to retrieve a list of all display ads.

> Example responses

> 200 Response

```json
[]
```

> 401 Response

```json
{
  "error": "unauthorized",
  "status": 401
}
```

<h3 id="display-ads-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful|None|
|401|Unauthorized|unauthorized|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api-key
</aside>

## display ads

> Code samples

```bash
curl https://example.com/api/display_ads \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "api-key: ${API_KEY}" \
  -d '{
    "approved": true,
    "body_markdown": "string",
    "creator_id": 0,
    "display_to": "all",
    "name": "string",
    "organization_id": 0,
    "placement_area": "sidebar_left",
    "published": true,
    "tag_list": "string",
    "type_of": "in_house"
  }'
```

`POST /api/display_ads`

This endpoint allows the client to create a new display ad.

> Body parameter

```json
{
  "approved": true,
  "body_markdown": "string",
  "creator_id": 0,
  "display_to": "all",
  "name": "string",
  "organization_id": 0,
  "placement_area": "sidebar_left",
  "published": true,
  "tag_list": "string",
  "type_of": "in_house"
}
```

<h3 id="display-ads-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» approved|body|boolean|false|Ad must be both published and approved to be in rotation|
|» body_markdown|body|string|true|The text (in markdown) of the ad (required)|
|» creator_id|body|integer|false|Identifies the user who created the ad.|
|» display_to|body|string|false|Potentially limits visitors to whom the ad is visible|
|» name|body|string|true|For internal use, helps distinguish ads from one another|
|» organization_id|body|integer|false|Identifies the organization to which the ad belongs|
|» placement_area|body|string|true|Identifies which area of site layout the ad can appear in|
|» published|body|boolean|false|Ad must be both published and approved to be in rotation|
|» tag_list|body|string|false|Tags on which this ad can be displayed (blank is all/any tags)|
|» type_of|body|string|false|Types of the billboards:<br>in_house (created by admins),<br>community (created by an entity, appears on entity's content),<br>external ( created by an entity, or a non-entity, can appear everywhere)<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» display_to|all|
|» display_to|logged_in|
|» display_to|logged_out|
|» placement_area|sidebar_left|
|» placement_area|sidebar_left_2|
|» placement_area|sidebar_right|
|» placement_area|post_sidebar|
|» placement_area|post_comments|
|» type_of|in_house|
|» type_of|community|
|» type_of|external|

> Example responses

> 200 Response

```json
{
  "approved": true,
  "body_markdown": "# Hi, this is ad\nYep, it's an ad",
  "cached_tag_list": "",
  "clicks_count": 0,
  "created_at": "2023-02-27T21:58:05.881+11:00",
  "creator_id": null,
  "display_to": "all",
  "id": 10,
  "impressions_count": 0,
  "name": "Example Ad",
  "organization_id": null,
  "placement_area": "post_comments",
  "processed_html": "<h1>  <a href=\"#hi-this-is-ad\" class=\"anchor\">  </a>  Hi, this is ad</h1><p>Yep, it's an ad</p>",
  "published": true,
  "success_rate": 0,
  "tag_list": "",
  "type_of": "in_house",
  "updated_at": "2023-02-27T21:58:05.881+11:00"
}
```

> 401 Response

```json
{
  "error": "unauthorized",
  "status": 401
}
```

> 422 Response

```json
{
  "approved": true,
  "body_markdown": "# Hi, this is ad\nYep, it's an ad",
  "cached_tag_list": null,
  "clicks_count": 0,
  "created_at": null,
  "creator_id": null,
  "display_to": "all",
  "id": null,
  "impressions_count": 0,
  "name": "Example Ad",
  "organization_id": null,
  "placement_area": "moon",
  "processed_html": null,
  "published": true,
  "success_rate": 0,
  "tag_list": null,
  "type_of": "in_house",
  "updated_at": null
}
```

<h3 id="display-ads-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful|None|
|401|Unauthorized|unauthorized|None|
|422|Unprocessable Entity|unprocessable|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api-key
</aside>

## display ad

> Code samples

```bash
curl https://example.com/api/display_ads/123 \
  -H 'Accept: application/json' \
  -H "api-key: ${API_KEY}"
```

`GET /api/display_ads/{id}`

This endpoint allows the client to retrieve a single display ad, via its id.

<h3 id="display-ad-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The ID of the user to unpublish.|

> Example responses

> 200 Response

```json
{
  "approved": false,
  "body_markdown": "Hello _hey_ Hey hey 9",
  "cached_tag_list": "",
  "clicks_count": 0,
  "created_at": "2023-02-27T21:58:06.000+11:00",
  "creator_id": null,
  "display_to": "all",
  "id": 11,
  "impressions_count": 0,
  "name": "Display Ad 11",
  "organization_id": 73,
  "placement_area": "sidebar_left",
  "processed_html": "<p>Hello <em>hey</em> Hey hey 9</p>",
  "published": false,
  "success_rate": 0,
  "tag_list": "",
  "type_of": "in_house",
  "updated_at": "2023-02-27T21:58:06.003+11:00"
}
```

> 401 Response

```json
{
  "error": "unauthorized",
  "status": 401
}
```

> 404 Response

```json
{
  "error": "not found",
  "status": 404
}
```

<h3 id="display-ad-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful|None|
|401|Unauthorized|unauthorized|None|
|404|Not Found|Unknown DisplayAd ID|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api-key
</aside>

## display ads

> Code samples

```bash
curl https://example.com/api/display_ads/123 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "api-key: ${API_KEY}" \
  -d '{
    "approved": true,
    "body_markdown": "string",
    "creator_id": 0,
    "display_to": "all",
    "name": "string",
    "organization_id": 0,
    "placement_area": "sidebar_left",
    "published": true,
    "tag_list": "string"
  }'
```

`PUT /api/display_ads/{id}`

This endpoint allows the client to update the attributes of a single display ad, via its id.

> Body parameter

```json
{
  "approved": true,
  "body_markdown": "string",
  "creator_id": 0,
  "display_to": "all",
  "name": "string",
  "organization_id": 0,
  "placement_area": "sidebar_left",
  "published": true,
  "tag_list": "string"
}
```

<h3 id="display-ads-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The ID of the user to unpublish.|
|body|body|object|false|none|
|» approved|body|boolean|false|Ad must be both published and approved to be in rotation|
|» body_markdown|body|string|true|The text (in markdown) of the ad (required)|
|» creator_id|body|integer|false|Identifies the user who created the ad.|
|» display_to|body|string|false|Potentially limits visitors to whom the ad is visible|
|» name|body|string|true|For internal use, helps distinguish ads from one another|
|» organization_id|body|integer|false|Identifies the organization to which the ad belongs, required for 'community' type ads|
|» placement_area|body|string|true|Identifies which area of site layout the ad can appear in|
|» published|body|boolean|false|Ad must be both published and approved to be in rotation|
|» tag_list|body|string|false|Tags on which this ad can be displayed (blank is all/any tags)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» display_to|all|
|» display_to|logged_in|
|» display_to|logged_out|
|» placement_area|sidebar_left|
|» placement_area|sidebar_left_2|
|» placement_area|sidebar_right|
|» placement_area|post_sidebar|
|» placement_area|post_comments|

> Example responses

> 200 Response

```json
{
  "approved": false,
  "body_markdown": "Hello _hey_ Hey hey 10",
  "cached_tag_list": "",
  "clicks_count": 0,
  "created_at": "2023-02-27T21:58:06.134+11:00",
  "creator_id": null,
  "display_to": "all",
  "id": 12,
  "impressions_count": 0,
  "name": "Display Ad 12",
  "organization_id": 74,
  "placement_area": "sidebar_left",
  "processed_html": "<p>Hello <em>hey</em> Hey hey 10</p>",
  "published": false,
  "success_rate": 0,
  "tag_list": "",
  "type_of": "in_house",
  "updated_at": "2023-02-27T21:58:06.137+11:00"
}
```

> 401 Response

```json
{
  "error": "unauthorized",
  "status": 401
}
```

> 404 Response

```json
{
  "error": "not found",
  "status": 404
}
```

<h3 id="display-ads-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful|None|
|401|Unauthorized|unauthorized|None|
|404|Not Found|not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api-key
</aside>

## unpublish

> Code samples

```bash
curl https://example.com/api/display_ads/123/unpublish \
  -X PUT \
  -H 'Accept: application/json' \
  -H "api-key: ${API_KEY}"
```

`PUT /api/display_ads/{id}/unpublish`

This endpoint allows the client to remove a display ad from rotation by un-publishing it.

<h3 id="unpublish-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The ID of the user to unpublish.|

> Example responses

> 401 Response

```json
{
  "error": "unauthorized",
  "status": 401
}
```

> 404 Response

```json
{
  "error": "not found",
  "status": 404
}
```

<h3 id="unpublish-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|no content|None|
|401|Unauthorized|unauthorized|None|
|404|Not Found|not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api-key
</aside>

<h1 id="forem-api-v1-followers">followers</h1>

## Followers

<a id="opIdgetFollowers"></a>

> Code samples

```bash
curl https://example.com/api/followers/users \
  -H 'Accept: application/json' \
  -H "api-key: ${API_KEY}"
```

`GET /api/followers/users`

This endpoint allows the client to retrieve a list of the followers they have.
        "Followers" are users that are following other users on the website.
        It supports pagination, each page will contain 80 followers by default.

<h3 id="followers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer(int32)|false|Pagination page|
|per_page|query|integer(int32)|false|Page size (the number of items to return per page). The default maximum value can be overridden by "API_PER_PAGE_MAX" environment variable.|
|sort|query|string|false|Default is 'created_at'. Specifies the sort order for the created_at param of the follow<br>                                relationship. To sort by newest followers first (descending order) specify<br>                                ?sort=-created_at.|

> Example responses

> 200 Response

```json
[
  {
    "created_at": "2023-02-27T10:58:06Z",
    "id": 7,
    "name": "Benjamin \"Sol\" \\:/ Senger",
    "path": "/username435",
    "profile_image": "/uploads/user/profile_image/871/51d055b1-32e3-4ccd-878a-a63e0ab5f69b.jpeg",
    "type_of": "user_follower",
    "user_id": 871,
    "username": "username435"
  },
  {
    "created_at": "2023-02-27T10:58:06Z",
    "id": 6,
    "name": "Christin \"Anthony\" \\:/ Metz",
    "path": "/username433",
    "profile_image": "/uploads/user/profile_image/869/8ba1b0fb-ed63-4d36-a21d-11615b8e42d0.jpeg",
    "type_of": "user_follower",
    "user_id": 869,
    "username": "username433"
  }
]
```

> 401 Response

```json
{
  "error": "unauthorized",
  "status": 401
}
```

<h3 id="followers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A List of followers|Inline|
|401|Unauthorized|unauthorized|None|

<h3 id="followers-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» id|integer(int32)|false|none|none|
|» name|string|false|none|The follower's name|
|» path|string|false|none|A path to the follower's profile|
|» profile_image|string|false|none|Profile image (640x640)|
|» type_of|string|false|none|user_follower by default|
|» user_id|integer(int32)|false|none|The follower's user id|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api-key
</aside>

<h1 id="forem-api-v1-followedtags">followed_tags</h1>

## Followed Tags

<a id="opIdgetFollowedTags"></a>

> Code samples

```bash
curl https://example.com/api/follows/tags \
  -H 'Accept: application/json' \
  -H "api-key: ${API_KEY}"
```

`GET /api/follows/tags`

This endpoint allows the client to retrieve a list of the tags they follow.

> Example responses

> 200 Response

```json
[
  {
    "id": 1220,
    "name": "tag3",
    "points": 1
  },
  {
    "id": 1221,
    "name": "tag4",
    "points": 1
  }
]
```

> 401 Response

```json
{
  "error": "unauthorized",
  "status": 401
}
```

<h3 id="followed-tags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A List of followed tags|Inline|
|401|Unauthorized|unauthorized|None|

<h3 id="followed-tags-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[FollowedTag](#schemafollowedtag)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api-key
</aside>

<h1 id="forem-api-v1-organizations">organizations</h1>

## An organization

<a id="opIdgetOrganization"></a>

> Code samples

```bash
curl https://example.com/api/organizations/string \
  -H 'Accept: application/json'
```

`GET /api/organizations/{username}`

This endpoint allows the client to retrieve a single organization by their username

<h3 id="an-organization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|username|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "github_username": "org217",
  "id": 79,
  "joined_at": "2023-02-27T10:58:06Z",
  "location": null,
  "name": "Beatty Inc",
  "profile_image": "/uploads/organization/profile_image/79/a1244f11-60ba-4f71-8c00-4e3f29ddf7f3.png",
  "story": null,
  "summary": "Stumptown schlitz umami try-hard blog mumblecore. Typewriter 8-bit five dollar toast neutra locavore put a bird on it farm-to-table tilde.",
  "tag_line": null,
  "tech_stack": null,
  "twitter_username": "org8840",
  "type_of": "organization",
  "url": "http://spinka-armstrong.com/hollis",
  "username": "org77"
}
```

> 404 Response

```json
{
  "error": "not found",
  "status": 404
}
```

<h3 id="an-organization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|An Organization|Inline|
|404|Not Found|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Organization's Articles

<a id="opIdgetOrgArticles"></a>

> Code samples

```bash
curl https://example.com/api/organizations/string/articles \
  -H 'Accept: application/json'
```

`GET /api/organizations/{username}/articles`

This endpoint allows the client to retrieve a list of Articles belonging to the organization

It supports pagination, each page will contain `30` users by default.

<h3 id="organizations-articles-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|username|path|string|true|none|
|page|query|integer(int32)|false|Pagination page|
|per_page|query|integer(int32)|false|Page size (the number of items to return per page). The default maximum value can be overridden by "API_PER_PAGE_MAX" environment variable.|

> Example responses

> 200 Response

```json
[
  {
    "canonical_url": "http://localhost:3000/org81/postern-of-fate195-51k4",
    "collection_id": null,
    "comments_count": 0,
    "cover_image": "http://localhost:3000/assets/12-f9d673ae4ff98002f782ab82c641f2f26673be728e8f5409bea83f2d1de15323.png",
    "created_at": "2023-02-27T10:58:07Z",
    "crossposted_at": null,
    "description": "Tilde master jean shorts farm-to-table yuccie. Poutine freegan semiotics. Cronut tacos post-ironic...",
    "edited_at": null,
    "id": 630,
    "last_comment_at": "2023-02-27T10:58:07Z",
    "organization": {
      "name": "Schaden-Fritsch",
      "profile_image": "/uploads/organization/profile_image/83/8d2996b4-f9fb-4947-aea3-17898ab9d7ec.png",
      "profile_image_90": "/uploads/organization/profile_image/83/8d2996b4-f9fb-4947-aea3-17898ab9d7ec.png",
      "slug": "org81",
      "username": "org81"
    },
    "path": "/org81/postern-of-fate195-51k4",
    "positive_reactions_count": 0,
    "public_reactions_count": 0,
    "published_at": "2023-02-27T10:58:07Z",
    "published_timestamp": "2023-02-27T10:58:07Z",
    "readable_publish_date": "Feb 27",
    "reading_time_minutes": 1,
    "slug": "postern-of-fate195-51k4",
    "social_image": "http://localhost:3000/assets/12-f9d673ae4ff98002f782ab82c641f2f26673be728e8f5409bea83f2d1de15323.png",
    "tag_list": [
      "javascript",
      "html",
      "discuss"
    ],
    "tags": "javascript, html, discuss",
    "title": "Postern of Fate195",
    "type_of": "article",
    "url": "http://localhost:3000/org81/postern-of-fate195-51k4",
    "user": {
      "github_username": "github453",
      "name": "Rowena \"Zack\" \\:/ Howell",
      "profile_image": "/uploads/user/profile_image/889/9d1a2834-1117-4f0d-9e87-aa4f3d3dc525.jpeg",
      "profile_image_90": "/uploads/user/profile_image/889/9d1a2834-1117-4f0d-9e87-aa4f3d3dc525.jpeg",
      "twitter_username": "twitter453",
      "user_id": 889,
      "username": "username453",
      "website_url": null
    }
  }
]
```

> 404 Response

```json
{
  "error": "not found",
  "status": 404
}
```

<h3 id="organizations-articles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|An Organization's Articles|Inline|
|404|Not Found|Not Found|None|

<h3 id="organizations-articles-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ArticleIndex](#schemaarticleindex)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Organization's users

<a id="opIdgetOrgUsers"></a>

> Code samples

```bash
curl https://example.com/api/organizations/string/users \
  -H 'Accept: application/json'
```

`GET /api/organizations/{username}/users`

This endpoint allows the client to retrieve a list of users belonging to the organization

It supports pagination, each page will contain `30` users by default.

<h3 id="organizations-users-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|username|path|string|true|none|
|page|query|integer(int32)|false|Pagination page|
|per_page|query|integer(int32)|false|Page size (the number of items to return per page). The default maximum value can be overridden by "API_PER_PAGE_MAX" environment variable.|

> Example responses

> 200 Response

```json
[
  {
    "github_username": "github445",
    "id": 881,
    "joined_at": "Feb 27, 2023",
    "location": null,
    "name": "Jeromy \"Spencer\" \\:/ VonRueden",
    "profile_image": "/uploads/user/profile_image/881/66c7cfc8-df38-4758-aad0-3d8b6b225a35.jpeg",
    "summary": null,
    "twitter_username": "twitter445",
    "type_of": "user",
    "username": "username445",
    "website_url": null
  },
  {
    "github_username": "github446",
    "id": 882,
    "joined_at": "Feb 27, 2023",
    "location": null,
    "name": "Annabel \"Tisa\" \\:/ Rogahn",
    "profile_image": "/uploads/user/profile_image/882/9cc02e02-adbb-4735-85bf-5f336714bb18.jpeg",
    "summary": null,
    "twitter_username": "twitter446",
    "type_of": "user",
    "username": "username446",
    "website_url": null
  }
]
```

> 404 Response

```json
{
  "error": "not found",
  "status": 404
}
```

<h3 id="organizations-users-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|An Organization's users|Inline|
|404|Not Found|Not Found|None|

<h3 id="organizations-users-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[User](#schemauser)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="forem-api-v1-pages">pages</h1>

## show details for all pages

> Code samples

```bash
curl https://example.com/api/pages \
  -H 'Accept: application/json'
```

`GET /api/pages`

This endpoint allows the client to retrieve details for all Page objects.

> Example responses

> 200 Response

```json
[
  {
    "body_html": null,
    "body_json": null,
    "body_markdown": "Velit autem nisi distinctio.",
    "description": "Voluptas ut laboriosam neque.",
    "id": 1,
    "is_top_level_path": false,
    "landing_page": false,
    "processed_html": "<p>Velit autem nisi distinctio.</p>\n\n",
    "slug": "push_premium",
    "social_image": {
      "url": null
    },
    "template": "contained",
    "title": "This Side of Paradise"
  }
]
```

<h3 id="show-details-for-all-pages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful|Inline|

<h3 id="show-details-for-all-pages-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Page](#schemapage)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## pages

> Code samples

```bash
curl https://example.com/api/pages \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "api-key: ${API_KEY}" \
  -d '{
    "body_json": "string",
    "body_markdown": "string",
    "description": "string",
    "is_top_level_path": true,
    "slug": "string",
    "template": "contained",
    "title": "string"
  }'
```

`POST /api/pages`

This endpoint allows the client to create a new page.

> Body parameter

```json
{
  "body_json": "string",
  "body_markdown": "string",
  "description": "string",
  "is_top_level_path": true,
  "slug": "string",
  "template": "contained",
  "title": "string"
}
```

<h3 id="pages-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» body_json|body|string|false|For JSON pages, the JSON body|
|» body_markdown|body|string|false|The text (in markdown) of the ad (required)|
|» description|body|string|false|For internal use, helps similar pages from one another|
|» is_top_level_path|body|boolean|false|If true, the page is available at '/{slug}' instead of '/page/{slug}', use with caution|
|» slug|body|string|false|Used to link to this page in URLs, must be unique and URL-safe|
|» template|body|string|false|Controls what kind of layout the page is rendered in|
|» title|body|string|false|Title of the page|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» template|contained|
|» template|full_within_layout|
|» template|nav_bar_included|
|» template|json|

> Example responses

> 200 Response

```json
{
  "body_html": null,
  "body_json": null,
  "body_markdown": "# Hi, this is a New Page\nYep, it's an a new page",
  "description": "a new page",
  "id": 3,
  "is_top_level_path": false,
  "landing_page": false,
  "processed_html": "<h1>\n  <a name=\"hi-this-is-a-new-page\" href=\"#hi-this-is-a-new-page\">\n  </a>\n  Hi, this is a New Page\n</h1>\n\n<p>Yep, it's an a new page</p>\n\n",
  "slug": "example1",
  "social_image": {
    "url": null
  },
  "template": "contained",
  "title": "Example Page"
}
```

> 401 Response

```json
{
  "error": "unauthorized",
  "status": 401
}
```

> 422 Response

```json
{
  "body_html": null,
  "body_json": null,
  "body_markdown": "# Hi, this is a New Page\nYep, it's an a new page",
  "description": "a new page",
  "id": null,
  "is_top_level_path": false,
  "landing_page": false,
  "processed_html": null,
  "slug": "example1",
  "social_image": {
    "url": null
  },
  "template": "moon",
  "title": "Example Page"
}
```

<h3 id="pages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful|None|
|401|Unauthorized|unauthorized|None|
|422|Unprocessable Entity|unprocessable|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api-key
</aside>

## show details for a page

> Code samples

```bash
curl https://example.com/api/pages/1 \
  -H 'Accept: application/json'
```

`GET /api/pages/{id}`

This endpoint allows the client to retrieve details for a single Page object, specified by ID.

<h3 id="show-details-for-a-page-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The ID of the page.|

> Example responses

> 200 Response

```json
{
  "body_html": null,
  "body_json": null,
  "body_markdown": "Amet rerum nostrum earum.",
  "description": "Voluptatibus quod dolor dolores.",
  "id": 6,
  "is_top_level_path": false,
  "landing_page": false,
  "processed_html": "<p>Amet rerum nostrum earum.</p>\n\n",
  "slug": "satisfaction-scale",
  "social_image": {
    "url": null
  },
  "template": "contained",
  "title": "In a Glass Darkly"
}
```

<h3 id="show-details-for-a-page-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful|[Page](#schemapage)|

<aside class="success">
This operation does not require authentication
</aside>

## update details for a page

> Code samples

```bash
curl https://example.com/api/pages/1 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "api-key: ${API_KEY}" \
  -d '{
    "body_json": "string",
    "body_markdown": "string",
    "description": "string",
    "is_top_level_path": true,
    "slug": "string",
    "social_image": {},
    "template": "contained",
    "title": "string"
  }'
```

`PUT /api/pages/{id}`

This endpoint allows the client to retrieve details for a single Page object, specified by ID.

> Body parameter

```json
{
  "body_json": "string",
  "body_markdown": "string",
  "description": "string",
  "is_top_level_path": true,
  "slug": "string",
  "social_image": {},
  "template": "contained",
  "title": "string"
}
```

<h3 id="update-details-for-a-page-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The ID of the page.|
|body|body|[Page](#schemapage)|false|none|
|» body_json|body|string \| null|false|For JSON pages, the JSON body|
|» body_markdown|body|string \| null|false|The text (in markdown) of the ad (required)|
|» description|body|string|true|For internal use, helps similar pages from one another|
|» is_top_level_path|body|boolean|false|If true, the page is available at '/{slug}' instead of '/page/{slug}', use with caution|
|» slug|body|string|true|Used to link to this page in URLs, must be unique and URL-safe|
|» social_image|body|object \| null|false|none|
|» template|body|string|true|Controls what kind of layout the page is rendered in|
|» title|body|string|true|Title of the page|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» template|contained|
|» template|full_within_layout|
|» template|nav_bar_included|
|» template|json|

> Example responses

> 200 Response

```json
{
  "body_html": null,
  "body_json": null,
  "body_markdown": "Qui sed sit dolorem.",
  "description": "Ut reiciendis qui iste.",
  "id": 7,
  "is_top_level_path": false,
  "landing_page": false,
  "processed_html": "<p>Qui sed sit dolorem.</p>\n\n",
  "slug": "corn-premium",
  "social_image": {
    "url": null
  },
  "template": "contained",
  "title": "New Title"
}
```

> 401 Response

```json
{
  "error": "unauthorized",
  "status": 401
}
```

> 422 Response

```json
{
  "body_html": null,
  "body_json": null,
  "body_markdown": "Dolorum earum quod deleniti.",
  "description": "Sapiente rerum labore est.",
  "id": 9,
  "is_top_level_path": false,
  "landing_page": false,
  "processed_html": "<p>Voluptas illo dolorem nisi.</p>\n\n",
  "slug": "seller_arena",
  "social_image": {
    "url": null
  },
  "template": "moon",
  "title": "Dying of the Light"
}
```

<h3 id="update-details-for-a-page-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful|[Page](#schemapage)|
|401|Unauthorized|unauthorized|None|
|422|Unprocessable Entity|unprocessable|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api-key
</aside>

## remove a page

> Code samples

```bash
curl https://example.com/api/pages/1 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "api-key: ${API_KEY}"
```

`DELETE /api/pages/{id}`

This endpoint allows the client to delete a single Page object, specified by ID.

<h3 id="remove-a-page-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The ID of the page.|

> Example responses

> 200 Response

```json
{
  "body_html": null,
  "body_json": null,
  "body_markdown": "In soluta qui odio.",
  "description": "Est molestias eius voluptas.",
  "id": 10,
  "is_top_level_path": false,
  "landing_page": false,
  "processed_html": "<p>In soluta qui odio.</p>\n\n",
  "slug": "message-premium",
  "social_image": {
    "url": null
  },
  "template": "contained",
  "title": "The Green Bay Tree"
}
```

> 401 Response

```json
{
  "error": "unauthorized",
  "status": 401
}
```

> 422 Response

```json
{
  "__expired": false,
  "__sending_message": null,
  "doubled_module": {
    "const_name": "Page",
    "object": "Page"
  },
  "name": null
}
```

<h3 id="remove-a-page-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful|[Page](#schemapage)|
|401|Unauthorized|unauthorized|None|
|422|Unprocessable Entity|unprocessable|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api-key
</aside>

<h1 id="forem-api-v1-podcastepisodes">podcast_episodes</h1>

## Podcast Episodes

<a id="opIdgetPodcastEpisodes"></a>

> Code samples

```bash
curl https://example.com/api/podcast_episodes \
  -H 'Accept: application/json'
```

`GET /api/podcast_episodes`

This endpoint allows the client to retrieve a list of podcast episodes.
        "Podcast episodes" are episodes belonging to podcasts.
        It will only return active (reachable) podcast episodes that belong to published podcasts available on the platform, ordered by descending publication date.
        It supports pagination, each page will contain 30 articles by default.

<h3 id="podcast-episodes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer(int32)|false|Pagination page|
|per_page|query|integer(int32)|false|Page size (the number of items to return per page). The default maximum value can be overridden by "API_PER_PAGE_MAX" environment variable.|
|username|query|string|false|Using this parameter will retrieve episodes belonging to a specific podcast.|

> Example responses

> 200 Response

```json
[
  {
    "class_name": "PodcastEpisode",
    "id": 4,
    "image_url": "/uploads/podcast/image/4/5e637d0a-0446-47a1-a77c-09dd5adaa4b6.jpeg",
    "path": "/codenewbie/slug-4",
    "podcast": {
      "image_url": "/uploads/podcast/image/4/5e637d0a-0446-47a1-a77c-09dd5adaa4b6.jpeg",
      "slug": "codenewbie",
      "title": "Delirium Tremens"
    },
    "title": "20",
    "type_of": "podcast_episodes"
  }
]
```

> 404 Response

```json
{
  "error": "not found",
  "status": 404
}
```

<h3 id="podcast-episodes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A List of Podcast episodes filtered by username|Inline|
|404|Not Found|Unknown Podcast username|None|

<h3 id="podcast-episodes-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[PodcastEpisodeIndex](#schemapodcastepisodeindex)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="forem-api-v1-profile-images">profile images</h1>

## A Users or organizations profile image

<a id="opIdgetProfileImage"></a>

> Code samples

```bash
curl https://example.com/api/profile_images/janedoe \
  -H 'Accept: application/json' \
  -H "api-key: ${API_KEY}"
```

`GET /api/profile_images/{username}`

This endpoint allows the client to retrieve a user or organization profile image information by its
        corresponding username.

<h3 id="a-users-or-organizations-profile-image-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|username|path|string|true|The parameter is the username of the user or the username of the organization.|

> Example responses

> 200 Response

```json
{
  "image_of": "user",
  "profile_image": "/uploads/user/profile_image/904/b992f4eb-7fca-49a1-b292-d3f9b013d81c.jpeg",
  "profile_image_90": "/uploads/user/profile_image/904/b992f4eb-7fca-49a1-b292-d3f9b013d81c.jpeg",
  "type_of": "profile_image"
}
```

> 404 Response

```json
{
  "error": "not found",
  "status": 404
}
```

<h3 id="a-users-or-organizations-profile-image-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|An object containing profile image details|Inline|
|404|Not Found|Resource Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api-key
</aside>

<h1 id="forem-api-v1-reactions">reactions</h1>

## create reaction

> Code samples

```bash
curl 'https://example.com/api/reactions?category=like&reactable_id=0&reactable_type=Comment' \
  -X POST \
  -H 'Accept: application/json' \
  -H "api-key: ${API_KEY}"
```

`POST /api/reactions`

This endpoint allows the client to create a reaction to a specified reactable (eg, Article, Comment, or User). For examples:
        * "Like"ing an Article will create a new "like" Reaction from the user for that Articles
        * "Like"ing that Article a second time will return the previous "like"

<h3 id="create-reaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|category|query|string|true|none|
|reactable_id|query|integer(int32)|true|none|
|reactable_type|query|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|category|like|
|category|unicorn|
|category|exploding_head|
|category|raised_hands|
|category|fire|
|reactable_type|Comment|
|reactable_type|Article|
|reactable_type|User|

> Example responses

> 200 Response

```json
{
  "category": "like",
  "id": 11,
  "reactable_id": 634,
  "reactable_type": "Article",
  "result": "none"
}
```

> 401 Response

```json
{
  "error": "unauthorized",
  "status": 401
}
```

<h3 id="create-reaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful|None|
|401|Unauthorized|unauthorized|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api-key
</aside>

## toggle reaction

> Code samples

```bash
curl 'https://example.com/api/reactions/toggle?category=like&reactable_id=0&reactable_type=Comment' \
  -X POST \
  -H 'Accept: application/json' \
  -H "api-key: ${API_KEY}"
```

`POST /api/reactions/toggle`

This endpoint allows the client to toggle the user's reaction to a specified reactable (eg, Article, Comment, or User). For examples:
        * "Like"ing an Article will create a new "like" Reaction from the user for that Articles
        * "Like"ing that Article a second time will remove the "like" from the user

<h3 id="toggle-reaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|category|query|string|true|none|
|reactable_id|query|integer(int32)|true|none|
|reactable_type|query|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|category|like|
|category|unicorn|
|category|exploding_head|
|category|raised_hands|
|category|fire|
|reactable_type|Comment|
|reactable_type|Article|
|reactable_type|User|

> Example responses

> 200 Response

```json
{
  "category": "like",
  "id": 9,
  "reactable_id": 632,
  "reactable_type": "Article",
  "result": "create"
}
```

> 401 Response

```json
{
  "error": "unauthorized",
  "status": 401
}
```

<h3 id="toggle-reaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful|None|
|401|Unauthorized|unauthorized|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api-key
</aside>

<h1 id="forem-api-v1-readinglist">readinglist</h1>

## Readinglist

<a id="opIdgetReadinglist"></a>

> Code samples

```bash
curl https://example.com/api/readinglist \
  -H 'Accept: application/json' \
  -H "api-key: ${API_KEY}"
```

`GET /api/readinglist`

This endpoint allows the client to retrieve a list of articles that were saved to a Users readinglist.
        It supports pagination, each page will contain `30` articles by default

<h3 id="readinglist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer(int32)|false|Pagination page|
|per_page|query|integer(int32)|false|Page size (the number of items to return per page). The default maximum value can be overridden by "API_PER_PAGE_MAX" environment variable.|

> Example responses

> 200 Response

```json
[]
```

> 401 Response

```json
{
  "error": "unauthorized",
  "status": 401
}
```

<h3 id="readinglist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of articles in the users readinglist|Inline|
|401|Unauthorized|Unauthorized|None|

<h3 id="readinglist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ArticleIndex](#schemaarticleindex)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api-key
</aside>

<h1 id="forem-api-v1-tags">tags</h1>

## Tags

<a id="opIdgetTags"></a>

> Code samples

```bash
curl https://example.com/api/tags \
  -H 'Accept: application/json'
```

`GET /api/tags`

This endpoint allows the client to retrieve a list of tags that can be used to tag articles.

It will return tags ordered by popularity.

It supports pagination, each page will contain 10 tags by default.

<h3 id="tags-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer(int32)|false|Pagination page|
|per_page|query|integer(int32)|false|Page size (the number of items to return per page). The default maximum value can be overridden by "API_PER_PAGE_MAX" environment variable.|

> Example responses

> 200 Response

```json
[
  {
    "bg_color_hex": null,
    "id": 1254,
    "name": "tag7",
    "text_color_hex": null
  },
  {
    "bg_color_hex": null,
    "id": 1253,
    "name": "tag6",
    "text_color_hex": null
  },
  {
    "bg_color_hex": null,
    "id": 1252,
    "name": "tag5",
    "text_color_hex": null
  }
]
```

<h3 id="tags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A List of all tags|Inline|

<h3 id="tags-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Tag](#schematag)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="forem-api-v1-videos">videos</h1>

## Articles with a video

<a id="opIdvideos"></a>

> Code samples

```bash
curl https://example.com/api/videos \
  -H 'Accept: application/json'
```

`GET /api/videos`

This endpoint allows the client to retrieve a list of articles that are uploaded with a video.

It will only return published video articles ordered by descending popularity.

It supports pagination, each page will contain 24 articles by default.

<h3 id="articles-with-a-video-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer(int32)|false|Pagination page|
|per_page|query|integer(int32)|false|Page size (the number of items to return per page). The default maximum value can be overridden by "API_PER_PAGE_MAX" environment variable.|

> Example responses

> 200 Response

```json
[
  {
    "cloudinary_video_url": "https://dw71fyauz7yz9.cloudfront.net/video-upload__1e42eb0bab4abb3c63baeb5e8bdfe69f/thumbs-video-upload__1e42eb0bab4abb3c63baeb5e8bdfe69f-00001.png",
    "id": 636,
    "path": "/username499/i-know-why-the-caged-bird-sings201-4ncl",
    "title": "I Know Why the Caged Bird Sings201",
    "type_of": "video_article",
    "user": {
      "name": "Kenneth \"Ardelia\" \\:/ Luettgen"
    },
    "user_id": 936,
    "video_duration_in_minutes": "00:00",
    "video_source_url": "https://dw71fyauz7yz9.cloudfront.net/video-upload__1e42eb0bab4abb3c63baeb5e8bdfe69f/video-upload__1e42eb0bab4abb3c63baeb5e8bdfe69f.m3u8"
  },
  {
    "cloudinary_video_url": "https://dw71fyauz7yz9.cloudfront.net/video-upload__1e42eb0bab4abb3c63baeb5e8bdfe69f/thumbs-video-upload__1e42eb0bab4abb3c63baeb5e8bdfe69f-00001.png",
    "id": 637,
    "path": "/username500/as-i-lay-dying202-1ba2",
    "title": "As I Lay Dying202",
    "type_of": "video_article",
    "user": {
      "name": "Fleta \"Alleen\" \\:/ Jerde"
    },
    "user_id": 937,
    "video_duration_in_minutes": "00:00",
    "video_source_url": "https://dw71fyauz7yz9.cloudfront.net/video-upload__1e42eb0bab4abb3c63baeb5e8bdfe69f/video-upload__1e42eb0bab4abb3c63baeb5e8bdfe69f.m3u8"
  }
]
```

<h3 id="articles-with-a-video-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A List of all articles with videos|Inline|

<h3 id="articles-with-a-video-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[VideoArticle](#schemavideoarticle)]|false|none|none|

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
  "article": {
    "body_markdown": "string",
    "canonical_url": "string",
    "description": "string",
    "main_image": "string",
    "organization_id": 0,
    "published": false,
    "series": "string",
    "tags": "string",
    "title": "string"
  }
}
```

Representation of an Article to be created/updated

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|article|object|false|none|none|

<h2 id="tocS_ArticleFlareTag">ArticleFlareTag</h2>
<!-- backwards compatibility -->
<a id="schemaarticleflaretag"></a>
<a id="schema_ArticleFlareTag"></a>
<a id="tocSarticleflaretag"></a>
<a id="tocsarticleflaretag"></a>

```json
{
  "bg_color_hex": "string",
  "name": "string",
  "text_color_hex": "string"
}
```

Flare tag of the article

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bg_color_hex|string \| null|false|none|Background color (hexadecimal)|
|name|string|false|none|none|
|text_color_hex|string \| null|false|none|Text color (hexadecimal)|

<h2 id="tocS_ArticleIndex">ArticleIndex</h2>
<!-- backwards compatibility -->
<a id="schemaarticleindex"></a>
<a id="schema_ArticleIndex"></a>
<a id="tocSarticleindex"></a>
<a id="tocsarticleindex"></a>

```json
{
  "canonical_url": "http://example.com",
  "cover_image": "http://example.com",
  "created_at": "1970-01-01T00:00:00Z",
  "crossposted_at": "1970-01-01T00:00:00Z",
  "description": "string",
  "edited_at": "1970-01-01T00:00:00Z",
  "flare_tag": {
    "bg_color_hex": "string",
    "name": "string",
    "text_color_hex": "string"
  },
  "id": 0,
  "last_comment_at": "1970-01-01T00:00:00Z",
  "organization": {
    "name": "string",
    "profile_image": "http://example.com",
    "profile_image_90": "http://example.com",
    "slug": "string",
    "username": "string"
  },
  "path": "string",
  "positive_reactions_count": 0,
  "public_reactions_count": 0,
  "published_at": "1970-01-01T00:00:00Z",
  "published_timestamp": "1970-01-01T00:00:00Z",
  "readable_publish_date": "string",
  "reading_time_minutes": 0,
  "slug": "string",
  "social_image": "http://example.com",
  "tag_list": [
    "string"
  ],
  "tags": "string",
  "title": "string",
  "type_of": "string",
  "url": "http://example.com",
  "user": {
    "github_username": "string",
    "name": "string",
    "profile_image": "string",
    "profile_image_90": "string",
    "twitter_username": "string",
    "username": "string",
    "website_url": "http://example.com"
  }
}
```

Representation of an article or post returned in a list

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|canonical_url|string(url)|true|none|none|
|cover_image|string(url) \| null|true|none|none|
|created_at|string(date-time)|true|none|none|
|crossposted_at|string(date-time) \| null|true|none|none|
|description|string|true|none|none|
|edited_at|string(date-time) \| null|true|none|none|
|flare_tag|[ArticleFlareTag](#schemaarticleflaretag)|false|none|Flare tag of the article|
|id|integer(int32)|true|none|none|
|last_comment_at|string(date-time)|true|none|none|
|organization|[SharedOrganization](#schemasharedorganization)|false|none|The organization the resource belongs to|
|path|string(path)|true|none|none|
|positive_reactions_count|integer(int32)|true|none|none|
|public_reactions_count|integer(int32)|true|none|none|
|published_at|string(date-time)|true|none|none|
|published_timestamp|string(date-time)|true|none|Crossposting or published date time|
|readable_publish_date|string|true|none|none|
|reading_time_minutes|integer(int32)|true|none|Reading time, in minutes|
|slug|string|true|none|none|
|social_image|string(url)|true|none|none|
|tag_list|[string]|true|none|none|
|tags|string|true|none|none|
|title|string|true|none|none|
|type_of|string|true|none|none|
|url|string(url)|true|none|none|
|user|[SharedUser](#schemashareduser)|true|none|The resource creator|

<h2 id="tocS_Comment">Comment</h2>
<!-- backwards compatibility -->
<a id="schemacomment"></a>
<a id="schema_Comment"></a>
<a id="tocScomment"></a>
<a id="tocscomment"></a>

```json
{
  "created_at": "1970-01-01T00:00:00Z",
  "id_code": "string",
  "image_url": "http://example.com",
  "type_of": "string"
}
```

A Comment on an Article or Podcast Episode

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created_at|string(date-time)|false|none|none|
|id_code|string|false|none|none|
|image_url|string(url)|false|none|Podcast image url|
|type_of|string|false|none|none|

<h2 id="tocS_FollowedTag">FollowedTag</h2>
<!-- backwards compatibility -->
<a id="schemafollowedtag"></a>
<a id="schema_FollowedTag"></a>
<a id="tocSfollowedtag"></a>
<a id="tocsfollowedtag"></a>

```json
{
  "id": 0,
  "name": "string",
  "points": 0
}
```

Representation of a followed tag

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|true|none|Tag id|
|name|string|true|none|none|
|points|number(float)|true|none|none|

<h2 id="tocS_Organization">Organization</h2>
<!-- backwards compatibility -->
<a id="schemaorganization"></a>
<a id="schema_Organization"></a>
<a id="tocSorganization"></a>
<a id="tocsorganization"></a>

```json
{
  "github_username": "string",
  "joined_at": "string",
  "location": "string",
  "name": "string",
  "story": "string",
  "summary": "string",
  "tag_line": "string",
  "tech_stack": "string",
  "twitter_username": "string",
  "type_of": "string",
  "url": "string",
  "username": "string"
}
```

Representation of an Organization

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|github_username|string|false|none|none|
|joined_at|string|false|none|none|
|location|string|false|none|none|
|name|string|false|none|none|
|story|string \| null|false|none|none|
|summary|string|false|none|none|
|tag_line|string \| null|false|none|none|
|tech_stack|string|false|none|none|
|twitter_username|string|false|none|none|
|type_of|string|false|none|none|
|url|string|false|none|none|
|username|string|false|none|none|

<h2 id="tocS_Page">Page</h2>
<!-- backwards compatibility -->
<a id="schemapage"></a>
<a id="schema_Page"></a>
<a id="tocSpage"></a>
<a id="tocspage"></a>

```json
{
  "body_json": "string",
  "body_markdown": "string",
  "description": "string",
  "is_top_level_path": true,
  "slug": "string",
  "social_image": {},
  "template": "contained",
  "title": "string"
}
```

Representation of a page object

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|body_json|string \| null|false|none|For JSON pages, the JSON body|
|body_markdown|string \| null|false|none|The text (in markdown) of the ad (required)|
|description|string|true|none|For internal use, helps similar pages from one another|
|is_top_level_path|boolean|false|none|If true, the page is available at '/{slug}' instead of '/page/{slug}', use with caution|
|slug|string|true|none|Used to link to this page in URLs, must be unique and URL-safe|
|social_image|object \| null|false|none|none|
|template|string|true|none|Controls what kind of layout the page is rendered in|
|title|string|true|none|Title of the page|

#### Enumerated Values

|Property|Value|
|---|---|
|template|contained|
|template|full_within_layout|
|template|nav_bar_included|
|template|json|

<h2 id="tocS_PodcastEpisodeIndex">PodcastEpisodeIndex</h2>
<!-- backwards compatibility -->
<a id="schemapodcastepisodeindex"></a>
<a id="schema_PodcastEpisodeIndex"></a>
<a id="tocSpodcastepisodeindex"></a>
<a id="tocspodcastepisodeindex"></a>

```json
{
  "class_name": "string",
  "id": 0,
  "image_url": "http://example.com",
  "path": "string",
  "podcast": {
    "image_url": "http://example.com",
    "slug": "string",
    "title": "string"
  },
  "title": "string",
  "type_of": "string"
}
```

Representation of a podcast episode returned in a list

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|class_name|string|true|none|none|
|id|integer(int32)|true|none|none|
|image_url|string(url)|true|none|Podcast episode image url or podcast image url|
|path|string(path)|true|none|none|
|podcast|[SharedPodcast](#schemasharedpodcast)|true|none|The podcast that the resource belongs to|
|title|string|true|none|none|
|type_of|string|true|none|none|

<h2 id="tocS_ProfileImage">ProfileImage</h2>
<!-- backwards compatibility -->
<a id="schemaprofileimage"></a>
<a id="schema_ProfileImage"></a>
<a id="tocSprofileimage"></a>
<a id="tocsprofileimage"></a>

```json
{
  "image_of": "string",
  "profile_image": "string",
  "profile_image_90": "string",
  "type_of": "string"
}
```

A profile image object

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|image_of|string|false|none|Determines the type of the profile image owner (user or organization)|
|profile_image|string|false|none|Profile image (640x640)|
|profile_image_90|string|false|none|Profile image (90x90)|
|type_of|string|false|none|Return profile_image|

<h2 id="tocS_SharedOrganization">SharedOrganization</h2>
<!-- backwards compatibility -->
<a id="schemasharedorganization"></a>
<a id="schema_SharedOrganization"></a>
<a id="tocSsharedorganization"></a>
<a id="tocssharedorganization"></a>

```json
{
  "name": "string",
  "profile_image": "http://example.com",
  "profile_image_90": "http://example.com",
  "slug": "string",
  "username": "string"
}
```

The organization the resource belongs to

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|profile_image|string(url)|false|none|Profile image (640x640)|
|profile_image_90|string(url)|false|none|Profile image (90x90)|
|slug|string|false|none|none|
|username|string|false|none|none|

<h2 id="tocS_SharedPodcast">SharedPodcast</h2>
<!-- backwards compatibility -->
<a id="schemasharedpodcast"></a>
<a id="schema_SharedPodcast"></a>
<a id="tocSsharedpodcast"></a>
<a id="tocssharedpodcast"></a>

```json
{
  "image_url": "http://example.com",
  "slug": "string",
  "title": "string"
}
```

The podcast that the resource belongs to

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|image_url|string(url)|false|none|Podcast image url|
|slug|string|false|none|none|
|title|string|false|none|none|

<h2 id="tocS_SharedUser">SharedUser</h2>
<!-- backwards compatibility -->
<a id="schemashareduser"></a>
<a id="schema_SharedUser"></a>
<a id="tocSshareduser"></a>
<a id="tocsshareduser"></a>

```json
{
  "github_username": "string",
  "name": "string",
  "profile_image": "string",
  "profile_image_90": "string",
  "twitter_username": "string",
  "username": "string",
  "website_url": "http://example.com"
}
```

The resource creator

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|github_username|string \| null|false|none|none|
|name|string|false|none|none|
|profile_image|string|false|none|Profile image (640x640)|
|profile_image_90|string|false|none|Profile image (90x90)|
|twitter_username|string \| null|false|none|none|
|username|string|false|none|none|
|website_url|string(url) \| null|false|none|none|

<h2 id="tocS_Tag">Tag</h2>
<!-- backwards compatibility -->
<a id="schematag"></a>
<a id="schema_Tag"></a>
<a id="tocStag"></a>
<a id="tocstag"></a>

```json
{
  "bg_color_hex": "string",
  "id": 0,
  "name": "string",
  "text_color_hex": "string"
}
```

Representation of a tag

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bg_color_hex|string \| null|false|none|none|
|id|integer(int64)|false|none|Tag id|
|name|string|false|none|none|
|text_color_hex|string \| null|false|none|none|

<h2 id="tocS_User">User</h2>
<!-- backwards compatibility -->
<a id="schemauser"></a>
<a id="schema_User"></a>
<a id="tocSuser"></a>
<a id="tocsuser"></a>

```json
{
  "github_username": "string",
  "id": 0,
  "joined_at": "string",
  "location": "string",
  "name": "string",
  "profile_image": "string",
  "summary": "string",
  "twitter_username": "string",
  "type_of": "string",
  "username": "string",
  "website_url": "string"
}
```

The representation of a user

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|github_username|string|false|none|none|
|id|integer(int64)|false|none|none|
|joined_at|string|false|none|none|
|location|string \| null|false|none|none|
|name|string|false|none|none|
|profile_image|string|false|none|none|
|summary|string \| null|false|none|none|
|twitter_username|string|false|none|none|
|type_of|string|false|none|none|
|username|string|false|none|none|
|website_url|string \| null|false|none|none|

<h2 id="tocS_UserInviteParam">UserInviteParam</h2>
<!-- backwards compatibility -->
<a id="schemauserinviteparam"></a>
<a id="schema_UserInviteParam"></a>
<a id="tocSuserinviteparam"></a>
<a id="tocsuserinviteparam"></a>

```json
{
  "email": "string",
  "name": "string"
}
```

User invite parameters

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|false|none|none|
|name|string \| null|false|none|none|

<h2 id="tocS_VideoArticle">VideoArticle</h2>
<!-- backwards compatibility -->
<a id="schemavideoarticle"></a>
<a id="schema_VideoArticle"></a>
<a id="tocSvideoarticle"></a>
<a id="tocsvideoarticle"></a>

```json
{
  "cloudinary_video_url": "string",
  "id": 0,
  "path": "string",
  "title": "string",
  "type_of": "string",
  "user": {
    "name": "string"
  },
  "user_id": 0,
  "video_duration_in_minutes": "string",
  "video_source_url": "string"
}
```

Representation of an Article with video

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cloudinary_video_url|string|false|none|none|
|id|integer(int64)|false|none|none|
|path|string|false|none|none|
|title|string|false|none|none|
|type_of|string|false|none|none|
|user|object|false|none|Author of the article|
|user_id|integer(int64)|false|none|none|
|video_duration_in_minutes|string|false|none|none|
|video_source_url|string|false|none|none|
