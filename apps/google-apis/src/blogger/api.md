<h1 id="blogger-api">Blogger API v3</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The Blogger API provides access to posts, comments and pages of a Blogger blog.

Base URLs:

* <a href="https://blogger.googleapis.com/">https://blogger.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://developers.google.com/blogger/docs/3.0/getting_started">External documentation</a>

# Authentication

- oAuth2 authentication. Oauth 2.0 implicit authentication

    - Flow: implicit
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/blogger|Manage your Blogger account|
|https://www.googleapis.com/auth/blogger.readonly|View your Blogger account|

- oAuth2 authentication. Oauth 2.0 authorizationCode authentication

    - Flow: authorizationCode
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)
    - Token URL = [https://accounts.google.com/o/oauth2/token](https://accounts.google.com/o/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/blogger|Manage your Blogger account|
|https://www.googleapis.com/auth/blogger.readonly|View your Blogger account|

<h1 id="blogger-api-blogs">blogs</h1>

## blogger.blogs.getByUrl

<a id="opIdblogger.blogs.getByUrl"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/v3/blogs/byurl?url=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v3/blogs/byurl`

Gets a blog by url.

<h3 id="bloggerblogsgetbyurl-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|url|query|string|true|none|
|view|query|string|false|none|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|view|VIEW_TYPE_UNSPECIFIED|
|view|READER|
|view|AUTHOR|
|view|ADMIN|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "customMetaData": "string",
  "description": "string",
  "id": "string",
  "kind": "string",
  "locale": {
    "country": "string",
    "language": "string",
    "variant": "string"
  },
  "name": "string",
  "pages": {
    "selfLink": "string",
    "totalItems": 0
  },
  "posts": {
    "items": [
      {
        "author": {
          "displayName": "string",
          "id": "string",
          "image": {
            "url": "string"
          },
          "url": "string"
        },
        "blog": {
          "id": "string"
        },
        "content": "string",
        "customMetaData": "string",
        "etag": "string",
        "id": "string",
        "images": [
          {
            "url": "string"
          }
        ],
        "kind": "string",
        "labels": [
          "string"
        ],
        "location": {
          "lat": 0,
          "lng": 0,
          "name": "string",
          "span": "string"
        },
        "published": "string",
        "readerComments": "ALLOW",
        "replies": {
          "items": [
            {
              "author": {
                "displayName": "string",
                "id": "string",
                "image": {
                  "url": "string"
                },
                "url": "string"
              },
              "blog": {
                "id": "string"
              },
              "content": "string",
              "id": "string",
              "inReplyTo": {
                "id": "string"
              },
              "kind": "string",
              "post": {
                "id": "string"
              },
              "published": "string",
              "selfLink": "string",
              "status": "LIVE",
              "updated": "string"
            }
          ],
          "selfLink": "string",
          "totalItems": "string"
        },
        "selfLink": "string",
        "status": "LIVE",
        "title": "string",
        "titleLink": "string",
        "trashed": "string",
        "updated": "string",
        "url": "string"
      }
    ],
    "selfLink": "string",
    "totalItems": 0
  },
  "published": "string",
  "selfLink": "string",
  "status": "LIVE",
  "updated": "string",
  "url": "string"
}
```

<h3 id="bloggerblogsgetbyurl-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Blog](#schemablog)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/blogger ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/blogger ), Oauth2 ( Scopes: https://www.googleapis.com/auth/blogger.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/blogger.readonly )
</aside>

## blogger.blogs.get

<a id="opIdblogger.blogs.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v3/blogs/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v3/blogs/{blogId}`

Gets a blog by id.

<h3 id="bloggerblogsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|blogId|path|string|true|none|
|maxPosts|query|integer|false|none|
|view|query|string|false|none|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|view|VIEW_TYPE_UNSPECIFIED|
|view|READER|
|view|AUTHOR|
|view|ADMIN|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "customMetaData": "string",
  "description": "string",
  "id": "string",
  "kind": "string",
  "locale": {
    "country": "string",
    "language": "string",
    "variant": "string"
  },
  "name": "string",
  "pages": {
    "selfLink": "string",
    "totalItems": 0
  },
  "posts": {
    "items": [
      {
        "author": {
          "displayName": "string",
          "id": "string",
          "image": {
            "url": "string"
          },
          "url": "string"
        },
        "blog": {
          "id": "string"
        },
        "content": "string",
        "customMetaData": "string",
        "etag": "string",
        "id": "string",
        "images": [
          {
            "url": "string"
          }
        ],
        "kind": "string",
        "labels": [
          "string"
        ],
        "location": {
          "lat": 0,
          "lng": 0,
          "name": "string",
          "span": "string"
        },
        "published": "string",
        "readerComments": "ALLOW",
        "replies": {
          "items": [
            {
              "author": {
                "displayName": "string",
                "id": "string",
                "image": {
                  "url": "string"
                },
                "url": "string"
              },
              "blog": {
                "id": "string"
              },
              "content": "string",
              "id": "string",
              "inReplyTo": {
                "id": "string"
              },
              "kind": "string",
              "post": {
                "id": "string"
              },
              "published": "string",
              "selfLink": "string",
              "status": "LIVE",
              "updated": "string"
            }
          ],
          "selfLink": "string",
          "totalItems": "string"
        },
        "selfLink": "string",
        "status": "LIVE",
        "title": "string",
        "titleLink": "string",
        "trashed": "string",
        "updated": "string",
        "url": "string"
      }
    ],
    "selfLink": "string",
    "totalItems": 0
  },
  "published": "string",
  "selfLink": "string",
  "status": "LIVE",
  "updated": "string",
  "url": "string"
}
```

<h3 id="bloggerblogsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Blog](#schemablog)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/blogger ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/blogger ), Oauth2 ( Scopes: https://www.googleapis.com/auth/blogger.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/blogger.readonly )
</aside>

## blogger.blogs.listByUser

<a id="opIdblogger.blogs.listByUser"></a>

> Code samples

```bash
curl https://www.googleapis.com/v3/users/string/blogs \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v3/users/{userId}/blogs`

Lists blogs by user.

<h3 id="bloggerblogslistbyuser-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|none|
|fetchUserInfo|query|boolean|false|none|
|role|query|[string]|false|none|
|status|query|[string]|false|Default value of status is LIVE.|
|view|query|string|false|none|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|role|VIEW_TYPE_UNSPECIFIED|
|role|READER|
|role|AUTHOR|
|role|ADMIN|
|status|LIVE|
|status|DELETED|
|view|VIEW_TYPE_UNSPECIFIED|
|view|READER|
|view|AUTHOR|
|view|ADMIN|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "blogUserInfos": [
    {
      "blog": {
        "customMetaData": "string",
        "description": "string",
        "id": "string",
        "kind": "string",
        "locale": {
          "country": "string",
          "language": "string",
          "variant": "string"
        },
        "name": "string",
        "pages": {
          "selfLink": "string",
          "totalItems": 0
        },
        "posts": {
          "items": [
            {
              "author": {
                "displayName": "string",
                "id": "string",
                "image": {
                  "url": "string"
                },
                "url": "string"
              },
              "blog": {
                "id": "string"
              },
              "content": "string",
              "customMetaData": "string",
              "etag": "string",
              "id": "string",
              "images": [
                {
                  "url": "string"
                }
              ],
              "kind": "string",
              "labels": [
                "string"
              ],
              "location": {
                "lat": 0,
                "lng": 0,
                "name": "string",
                "span": "string"
              },
              "published": "string",
              "readerComments": "ALLOW",
              "replies": {
                "items": [
                  {
                    "author": {
                      "displayName": "string",
                      "id": "string",
                      "image": {
                        "url": "string"
                      },
                      "url": "string"
                    },
                    "blog": {
                      "id": "string"
                    },
                    "content": "string",
                    "id": "string",
                    "inReplyTo": {
                      "id": "string"
                    },
                    "kind": "string",
                    "post": {
                      "id": "string"
                    },
                    "published": "string",
                    "selfLink": "string",
                    "status": "LIVE",
                    "updated": "string"
                  }
                ],
                "selfLink": "string",
                "totalItems": "string"
              },
              "selfLink": "string",
              "status": "LIVE",
              "title": "string",
              "titleLink": "string",
              "trashed": "string",
              "updated": "string",
              "url": "string"
            }
          ],
          "selfLink": "string",
          "totalItems": 0
        },
        "published": "string",
        "selfLink": "string",
        "status": "LIVE",
        "updated": "string",
        "url": "string"
      },
      "blog_user_info": {
        "blogId": "string",
        "hasAdminAccess": true,
        "kind": "string",
        "photosAlbumKey": "string",
        "role": "VIEW_TYPE_UNSPECIFIED",
        "userId": "string"
      },
      "kind": "string"
    }
  ],
  "items": [
    {
      "customMetaData": "string",
      "description": "string",
      "id": "string",
      "kind": "string",
      "locale": {
        "country": "string",
        "language": "string",
        "variant": "string"
      },
      "name": "string",
      "pages": {
        "selfLink": "string",
        "totalItems": 0
      },
      "posts": {
        "items": [
          {
            "author": {
              "displayName": "string",
              "id": "string",
              "image": {
                "url": "string"
              },
              "url": "string"
            },
            "blog": {
              "id": "string"
            },
            "content": "string",
            "customMetaData": "string",
            "etag": "string",
            "id": "string",
            "images": [
              {
                "url": "string"
              }
            ],
            "kind": "string",
            "labels": [
              "string"
            ],
            "location": {
              "lat": 0,
              "lng": 0,
              "name": "string",
              "span": "string"
            },
            "published": "string",
            "readerComments": "ALLOW",
            "replies": {
              "items": [
                {
                  "author": {
                    "displayName": "string",
                    "id": "string",
                    "image": {
                      "url": "string"
                    },
                    "url": "string"
                  },
                  "blog": {
                    "id": "string"
                  },
                  "content": "string",
                  "id": "string",
                  "inReplyTo": {
                    "id": "string"
                  },
                  "kind": "string",
                  "post": {
                    "id": "string"
                  },
                  "published": "string",
                  "selfLink": "string",
                  "status": "LIVE",
                  "updated": "string"
                }
              ],
              "selfLink": "string",
              "totalItems": "string"
            },
            "selfLink": "string",
            "status": "LIVE",
            "title": "string",
            "titleLink": "string",
            "trashed": "string",
            "updated": "string",
            "url": "string"
          }
        ],
        "selfLink": "string",
        "totalItems": 0
      },
      "published": "string",
      "selfLink": "string",
      "status": "LIVE",
      "updated": "string",
      "url": "string"
    }
  ],
  "kind": "string"
}
```

<h3 id="bloggerblogslistbyuser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[BlogList](#schemabloglist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/blogger ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/blogger ), Oauth2 ( Scopes: https://www.googleapis.com/auth/blogger.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/blogger.readonly )
</aside>

<h1 id="blogger-api-bloguserinfos">blogUserInfos</h1>

## blogger.blogUserInfos.get

<a id="opIdblogger.blogUserInfos.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v3/users/string/blogs/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v3/users/{userId}/blogs/{blogId}`

Gets one blog and user info pair by blog id and user id.

<h3 id="bloggerbloguserinfosget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|none|
|blogId|path|string|true|none|
|maxPosts|query|integer|false|none|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "blog": {
    "customMetaData": "string",
    "description": "string",
    "id": "string",
    "kind": "string",
    "locale": {
      "country": "string",
      "language": "string",
      "variant": "string"
    },
    "name": "string",
    "pages": {
      "selfLink": "string",
      "totalItems": 0
    },
    "posts": {
      "items": [
        {
          "author": {
            "displayName": "string",
            "id": "string",
            "image": {
              "url": "string"
            },
            "url": "string"
          },
          "blog": {
            "id": "string"
          },
          "content": "string",
          "customMetaData": "string",
          "etag": "string",
          "id": "string",
          "images": [
            {
              "url": "string"
            }
          ],
          "kind": "string",
          "labels": [
            "string"
          ],
          "location": {
            "lat": 0,
            "lng": 0,
            "name": "string",
            "span": "string"
          },
          "published": "string",
          "readerComments": "ALLOW",
          "replies": {
            "items": [
              {
                "author": {
                  "displayName": "string",
                  "id": "string",
                  "image": {
                    "url": "string"
                  },
                  "url": "string"
                },
                "blog": {
                  "id": "string"
                },
                "content": "string",
                "id": "string",
                "inReplyTo": {
                  "id": "string"
                },
                "kind": "string",
                "post": {
                  "id": "string"
                },
                "published": "string",
                "selfLink": "string",
                "status": "LIVE",
                "updated": "string"
              }
            ],
            "selfLink": "string",
            "totalItems": "string"
          },
          "selfLink": "string",
          "status": "LIVE",
          "title": "string",
          "titleLink": "string",
          "trashed": "string",
          "updated": "string",
          "url": "string"
        }
      ],
      "selfLink": "string",
      "totalItems": 0
    },
    "published": "string",
    "selfLink": "string",
    "status": "LIVE",
    "updated": "string",
    "url": "string"
  },
  "blog_user_info": {
    "blogId": "string",
    "hasAdminAccess": true,
    "kind": "string",
    "photosAlbumKey": "string",
    "role": "VIEW_TYPE_UNSPECIFIED",
    "userId": "string"
  },
  "kind": "string"
}
```

<h3 id="bloggerbloguserinfosget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[BlogUserInfo](#schemabloguserinfo)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/blogger ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/blogger ), Oauth2 ( Scopes: https://www.googleapis.com/auth/blogger.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/blogger.readonly )
</aside>

<h1 id="blogger-api-comments">comments</h1>

## blogger.comments.listByBlog

<a id="opIdblogger.comments.listByBlog"></a>

> Code samples

```bash
curl https://www.googleapis.com/v3/blogs/string/comments \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v3/blogs/{blogId}/comments`

Lists comments by blog.

<h3 id="bloggercommentslistbyblog-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|blogId|path|string|true|none|
|endDate|query|string|false|none|
|fetchBodies|query|boolean|false|none|
|maxResults|query|integer|false|none|
|pageToken|query|string|false|none|
|startDate|query|string|false|none|
|status|query|[string]|false|none|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|status|LIVE|
|status|EMPTIED|
|status|PENDING|
|status|SPAM|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "etag": "string",
  "items": [
    {
      "author": {
        "displayName": "string",
        "id": "string",
        "image": {
          "url": "string"
        },
        "url": "string"
      },
      "blog": {
        "id": "string"
      },
      "content": "string",
      "id": "string",
      "inReplyTo": {
        "id": "string"
      },
      "kind": "string",
      "post": {
        "id": "string"
      },
      "published": "string",
      "selfLink": "string",
      "status": "LIVE",
      "updated": "string"
    }
  ],
  "kind": "string",
  "nextPageToken": "string",
  "prevPageToken": "string"
}
```

<h3 id="bloggercommentslistbyblog-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[CommentList](#schemacommentlist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/blogger ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/blogger ), Oauth2 ( Scopes: https://www.googleapis.com/auth/blogger.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/blogger.readonly )
</aside>

## blogger.comments.list

<a id="opIdblogger.comments.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v3/blogs/string/posts/string/comments \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v3/blogs/{blogId}/posts/{postId}/comments`

Lists comments.

<h3 id="bloggercommentslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|blogId|path|string|true|none|
|postId|path|string|true|none|
|endDate|query|string|false|none|
|fetchBodies|query|boolean|false|none|
|maxResults|query|integer|false|none|
|pageToken|query|string|false|none|
|startDate|query|string|false|none|
|status|query|string|false|none|
|view|query|string|false|none|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|status|LIVE|
|status|EMPTIED|
|status|PENDING|
|status|SPAM|
|view|VIEW_TYPE_UNSPECIFIED|
|view|READER|
|view|AUTHOR|
|view|ADMIN|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "etag": "string",
  "items": [
    {
      "author": {
        "displayName": "string",
        "id": "string",
        "image": {
          "url": "string"
        },
        "url": "string"
      },
      "blog": {
        "id": "string"
      },
      "content": "string",
      "id": "string",
      "inReplyTo": {
        "id": "string"
      },
      "kind": "string",
      "post": {
        "id": "string"
      },
      "published": "string",
      "selfLink": "string",
      "status": "LIVE",
      "updated": "string"
    }
  ],
  "kind": "string",
  "nextPageToken": "string",
  "prevPageToken": "string"
}
```

<h3 id="bloggercommentslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[CommentList](#schemacommentlist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/blogger ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/blogger ), Oauth2 ( Scopes: https://www.googleapis.com/auth/blogger.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/blogger.readonly )
</aside>

## blogger.comments.get

<a id="opIdblogger.comments.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v3/blogs/string/posts/string/comments/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v3/blogs/{blogId}/posts/{postId}/comments/{commentId}`

Gets a comment by id.

<h3 id="bloggercommentsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|blogId|path|string|true|none|
|postId|path|string|true|none|
|commentId|path|string|true|none|
|view|query|string|false|none|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|view|VIEW_TYPE_UNSPECIFIED|
|view|READER|
|view|AUTHOR|
|view|ADMIN|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "author": {
    "displayName": "string",
    "id": "string",
    "image": {
      "url": "string"
    },
    "url": "string"
  },
  "blog": {
    "id": "string"
  },
  "content": "string",
  "id": "string",
  "inReplyTo": {
    "id": "string"
  },
  "kind": "string",
  "post": {
    "id": "string"
  },
  "published": "string",
  "selfLink": "string",
  "status": "LIVE",
  "updated": "string"
}
```

<h3 id="bloggercommentsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Comment](#schemacomment)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/blogger ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/blogger ), Oauth2 ( Scopes: https://www.googleapis.com/auth/blogger.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/blogger.readonly )
</aside>

## blogger.comments.delete

<a id="opIdblogger.comments.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v3/blogs/string/posts/string/comments/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v3/blogs/{blogId}/posts/{postId}/comments/{commentId}`

Deletes a comment by blog id, post id and comment id.

<h3 id="bloggercommentsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|blogId|path|string|true|none|
|postId|path|string|true|none|
|commentId|path|string|true|none|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

<h3 id="bloggercommentsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/blogger ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/blogger )
</aside>

## blogger.comments.approve

<a id="opIdblogger.comments.approve"></a>

> Code samples

```bash
curl https://www.googleapis.com/v3/blogs/string/posts/string/comments/string/approve \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /v3/blogs/{blogId}/posts/{postId}/comments/{commentId}/approve`

Marks a comment as not spam by blog id, post id and comment id.

<h3 id="bloggercommentsapprove-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|blogId|path|string|true|none|
|postId|path|string|true|none|
|commentId|path|string|true|none|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "author": {
    "displayName": "string",
    "id": "string",
    "image": {
      "url": "string"
    },
    "url": "string"
  },
  "blog": {
    "id": "string"
  },
  "content": "string",
  "id": "string",
  "inReplyTo": {
    "id": "string"
  },
  "kind": "string",
  "post": {
    "id": "string"
  },
  "published": "string",
  "selfLink": "string",
  "status": "LIVE",
  "updated": "string"
}
```

<h3 id="bloggercommentsapprove-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Comment](#schemacomment)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/blogger ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/blogger )
</aside>

## blogger.comments.removeContent

<a id="opIdblogger.comments.removeContent"></a>

> Code samples

```bash
curl https://www.googleapis.com/v3/blogs/string/posts/string/comments/string/removecontent \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /v3/blogs/{blogId}/posts/{postId}/comments/{commentId}/removecontent`

Removes the content of a comment by blog id, post id and comment id.

<h3 id="bloggercommentsremovecontent-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|blogId|path|string|true|none|
|postId|path|string|true|none|
|commentId|path|string|true|none|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "author": {
    "displayName": "string",
    "id": "string",
    "image": {
      "url": "string"
    },
    "url": "string"
  },
  "blog": {
    "id": "string"
  },
  "content": "string",
  "id": "string",
  "inReplyTo": {
    "id": "string"
  },
  "kind": "string",
  "post": {
    "id": "string"
  },
  "published": "string",
  "selfLink": "string",
  "status": "LIVE",
  "updated": "string"
}
```

<h3 id="bloggercommentsremovecontent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Comment](#schemacomment)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/blogger ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/blogger )
</aside>

## blogger.comments.markAsSpam

<a id="opIdblogger.comments.markAsSpam"></a>

> Code samples

```bash
curl https://www.googleapis.com/v3/blogs/string/posts/string/comments/string/spam \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /v3/blogs/{blogId}/posts/{postId}/comments/{commentId}/spam`

Marks a comment as spam by blog id, post id and comment id.

<h3 id="bloggercommentsmarkasspam-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|blogId|path|string|true|none|
|postId|path|string|true|none|
|commentId|path|string|true|none|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "author": {
    "displayName": "string",
    "id": "string",
    "image": {
      "url": "string"
    },
    "url": "string"
  },
  "blog": {
    "id": "string"
  },
  "content": "string",
  "id": "string",
  "inReplyTo": {
    "id": "string"
  },
  "kind": "string",
  "post": {
    "id": "string"
  },
  "published": "string",
  "selfLink": "string",
  "status": "LIVE",
  "updated": "string"
}
```

<h3 id="bloggercommentsmarkasspam-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Comment](#schemacomment)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/blogger ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/blogger )
</aside>

<h1 id="blogger-api-pages">pages</h1>

## blogger.pages.list

<a id="opIdblogger.pages.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v3/blogs/string/pages \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v3/blogs/{blogId}/pages`

Lists pages.

<h3 id="bloggerpageslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|blogId|path|string|true|none|
|fetchBodies|query|boolean|false|none|
|maxResults|query|integer|false|none|
|pageToken|query|string|false|none|
|status|query|[string]|false|none|
|view|query|string|false|none|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|status|LIVE|
|status|DRAFT|
|status|SOFT_TRASHED|
|view|VIEW_TYPE_UNSPECIFIED|
|view|READER|
|view|AUTHOR|
|view|ADMIN|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "etag": "string",
  "items": [
    {
      "author": {
        "displayName": "string",
        "id": "string",
        "image": {
          "url": "string"
        },
        "url": "string"
      },
      "blog": {
        "id": "string"
      },
      "content": "string",
      "etag": "string",
      "id": "string",
      "kind": "string",
      "published": "string",
      "selfLink": "string",
      "status": "LIVE",
      "title": "string",
      "trashed": "string",
      "updated": "string",
      "url": "string"
    }
  ],
  "kind": "string",
  "nextPageToken": "string"
}
```

<h3 id="bloggerpageslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[PageList](#schemapagelist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/blogger ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/blogger ), Oauth2 ( Scopes: https://www.googleapis.com/auth/blogger.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/blogger.readonly )
</aside>

## blogger.pages.insert

<a id="opIdblogger.pages.insert"></a>

> Code samples

```bash
curl https://www.googleapis.com/v3/blogs/string/pages \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "author": {
      "displayName": "string",
      "id": "string",
      "image": {
        "url": "string"
      },
      "url": "string"
    },
    "blog": {
      "id": "string"
    },
    "content": "string",
    "etag": "string",
    "id": "string",
    "kind": "string",
    "published": "string",
    "selfLink": "string",
    "status": "LIVE",
    "title": "string",
    "trashed": "string",
    "updated": "string",
    "url": "string"
  }'
```

`POST /v3/blogs/{blogId}/pages`

Inserts a page.

> Body parameter

```json
{
  "author": {
    "displayName": "string",
    "id": "string",
    "image": {
      "url": "string"
    },
    "url": "string"
  },
  "blog": {
    "id": "string"
  },
  "content": "string",
  "etag": "string",
  "id": "string",
  "kind": "string",
  "published": "string",
  "selfLink": "string",
  "status": "LIVE",
  "title": "string",
  "trashed": "string",
  "updated": "string",
  "url": "string"
}
```

<h3 id="bloggerpagesinsert-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|blogId|path|string|true|none|
|isDraft|query|boolean|false|none|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[Page](#schemapage)|false|none|
|» author|body|object|false|The author of this Page.|
|» » displayName|body|string|false|The display name.|
|» » id|body|string|false|The identifier of the creator.|
|» » image|body|object|false|The creator's avatar.|
|» » » url|body|string|false|The creator's avatar URL.|
|» » url|body|string|false|The URL of the creator's Profile page.|
|» blog|body|object|false|Data about the blog containing this Page.|
|» » id|body|string|false|The identifier of the blog containing this page.|
|» content|body|string|false|The body content of this Page, in HTML.|
|» etag|body|string|false|Etag of the resource.|
|» id|body|string|false|The identifier for this resource.|
|» kind|body|string|false|The kind of this entity. Always blogger#page.|
|» published|body|string|false|RFC 3339 date-time when this Page was published.|
|» selfLink|body|string|false|The API REST URL to fetch this resource from.|
|» status|body|string|false|The status of the page for admin resources (either LIVE or DRAFT).|
|» title|body|string|false|The title of this entity. This is the name displayed in the Admin user interface.|
|» trashed|body|string|false|RFC 3339 date-time when this Page was trashed.|
|» updated|body|string|false|RFC 3339 date-time when this Page was last updated.|
|» url|body|string|false|The URL that this Page is displayed at.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» status|LIVE|
|» status|DRAFT|
|» status|SOFT_TRASHED|

> Example responses

> 200 Response

```json
{
  "author": {
    "displayName": "string",
    "id": "string",
    "image": {
      "url": "string"
    },
    "url": "string"
  },
  "blog": {
    "id": "string"
  },
  "content": "string",
  "etag": "string",
  "id": "string",
  "kind": "string",
  "published": "string",
  "selfLink": "string",
  "status": "LIVE",
  "title": "string",
  "trashed": "string",
  "updated": "string",
  "url": "string"
}
```

<h3 id="bloggerpagesinsert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Page](#schemapage)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/blogger ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/blogger )
</aside>

## blogger.pages.get

<a id="opIdblogger.pages.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v3/blogs/string/pages/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v3/blogs/{blogId}/pages/{pageId}`

Gets a page by blog id and page id.

<h3 id="bloggerpagesget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|blogId|path|string|true|none|
|pageId|path|string|true|none|
|view|query|string|false|none|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|view|VIEW_TYPE_UNSPECIFIED|
|view|READER|
|view|AUTHOR|
|view|ADMIN|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "author": {
    "displayName": "string",
    "id": "string",
    "image": {
      "url": "string"
    },
    "url": "string"
  },
  "blog": {
    "id": "string"
  },
  "content": "string",
  "etag": "string",
  "id": "string",
  "kind": "string",
  "published": "string",
  "selfLink": "string",
  "status": "LIVE",
  "title": "string",
  "trashed": "string",
  "updated": "string",
  "url": "string"
}
```

<h3 id="bloggerpagesget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Page](#schemapage)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/blogger ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/blogger ), Oauth2 ( Scopes: https://www.googleapis.com/auth/blogger.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/blogger.readonly )
</aside>

## blogger.pages.update

<a id="opIdblogger.pages.update"></a>

> Code samples

```bash
curl https://www.googleapis.com/v3/blogs/string/pages/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "author": {
      "displayName": "string",
      "id": "string",
      "image": {
        "url": "string"
      },
      "url": "string"
    },
    "blog": {
      "id": "string"
    },
    "content": "string",
    "etag": "string",
    "id": "string",
    "kind": "string",
    "published": "string",
    "selfLink": "string",
    "status": "LIVE",
    "title": "string",
    "trashed": "string",
    "updated": "string",
    "url": "string"
  }'
```

`PUT /v3/blogs/{blogId}/pages/{pageId}`

Updates a page by blog id and page id.

> Body parameter

```json
{
  "author": {
    "displayName": "string",
    "id": "string",
    "image": {
      "url": "string"
    },
    "url": "string"
  },
  "blog": {
    "id": "string"
  },
  "content": "string",
  "etag": "string",
  "id": "string",
  "kind": "string",
  "published": "string",
  "selfLink": "string",
  "status": "LIVE",
  "title": "string",
  "trashed": "string",
  "updated": "string",
  "url": "string"
}
```

<h3 id="bloggerpagesupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|blogId|path|string|true|none|
|pageId|path|string|true|none|
|publish|query|boolean|false|none|
|revert|query|boolean|false|none|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[Page](#schemapage)|false|none|
|» author|body|object|false|The author of this Page.|
|» » displayName|body|string|false|The display name.|
|» » id|body|string|false|The identifier of the creator.|
|» » image|body|object|false|The creator's avatar.|
|» » » url|body|string|false|The creator's avatar URL.|
|» » url|body|string|false|The URL of the creator's Profile page.|
|» blog|body|object|false|Data about the blog containing this Page.|
|» » id|body|string|false|The identifier of the blog containing this page.|
|» content|body|string|false|The body content of this Page, in HTML.|
|» etag|body|string|false|Etag of the resource.|
|» id|body|string|false|The identifier for this resource.|
|» kind|body|string|false|The kind of this entity. Always blogger#page.|
|» published|body|string|false|RFC 3339 date-time when this Page was published.|
|» selfLink|body|string|false|The API REST URL to fetch this resource from.|
|» status|body|string|false|The status of the page for admin resources (either LIVE or DRAFT).|
|» title|body|string|false|The title of this entity. This is the name displayed in the Admin user interface.|
|» trashed|body|string|false|RFC 3339 date-time when this Page was trashed.|
|» updated|body|string|false|RFC 3339 date-time when this Page was last updated.|
|» url|body|string|false|The URL that this Page is displayed at.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» status|LIVE|
|» status|DRAFT|
|» status|SOFT_TRASHED|

> Example responses

> 200 Response

```json
{
  "author": {
    "displayName": "string",
    "id": "string",
    "image": {
      "url": "string"
    },
    "url": "string"
  },
  "blog": {
    "id": "string"
  },
  "content": "string",
  "etag": "string",
  "id": "string",
  "kind": "string",
  "published": "string",
  "selfLink": "string",
  "status": "LIVE",
  "title": "string",
  "trashed": "string",
  "updated": "string",
  "url": "string"
}
```

<h3 id="bloggerpagesupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Page](#schemapage)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/blogger ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/blogger )
</aside>

## blogger.pages.delete

<a id="opIdblogger.pages.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v3/blogs/string/pages/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v3/blogs/{blogId}/pages/{pageId}`

Deletes a page by blog id and page id.

<h3 id="bloggerpagesdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|blogId|path|string|true|none|
|pageId|path|string|true|none|
|useTrash|query|boolean|false|Move to Trash if possible|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

<h3 id="bloggerpagesdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/blogger ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/blogger )
</aside>

## blogger.pages.patch

<a id="opIdblogger.pages.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/v3/blogs/string/pages/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "author": {
      "displayName": "string",
      "id": "string",
      "image": {
        "url": "string"
      },
      "url": "string"
    },
    "blog": {
      "id": "string"
    },
    "content": "string",
    "etag": "string",
    "id": "string",
    "kind": "string",
    "published": "string",
    "selfLink": "string",
    "status": "LIVE",
    "title": "string",
    "trashed": "string",
    "updated": "string",
    "url": "string"
  }'
```

`PATCH /v3/blogs/{blogId}/pages/{pageId}`

Patches a page.

> Body parameter

```json
{
  "author": {
    "displayName": "string",
    "id": "string",
    "image": {
      "url": "string"
    },
    "url": "string"
  },
  "blog": {
    "id": "string"
  },
  "content": "string",
  "etag": "string",
  "id": "string",
  "kind": "string",
  "published": "string",
  "selfLink": "string",
  "status": "LIVE",
  "title": "string",
  "trashed": "string",
  "updated": "string",
  "url": "string"
}
```

<h3 id="bloggerpagespatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|blogId|path|string|true|none|
|pageId|path|string|true|none|
|publish|query|boolean|false|none|
|revert|query|boolean|false|none|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[Page](#schemapage)|false|none|
|» author|body|object|false|The author of this Page.|
|» » displayName|body|string|false|The display name.|
|» » id|body|string|false|The identifier of the creator.|
|» » image|body|object|false|The creator's avatar.|
|» » » url|body|string|false|The creator's avatar URL.|
|» » url|body|string|false|The URL of the creator's Profile page.|
|» blog|body|object|false|Data about the blog containing this Page.|
|» » id|body|string|false|The identifier of the blog containing this page.|
|» content|body|string|false|The body content of this Page, in HTML.|
|» etag|body|string|false|Etag of the resource.|
|» id|body|string|false|The identifier for this resource.|
|» kind|body|string|false|The kind of this entity. Always blogger#page.|
|» published|body|string|false|RFC 3339 date-time when this Page was published.|
|» selfLink|body|string|false|The API REST URL to fetch this resource from.|
|» status|body|string|false|The status of the page for admin resources (either LIVE or DRAFT).|
|» title|body|string|false|The title of this entity. This is the name displayed in the Admin user interface.|
|» trashed|body|string|false|RFC 3339 date-time when this Page was trashed.|
|» updated|body|string|false|RFC 3339 date-time when this Page was last updated.|
|» url|body|string|false|The URL that this Page is displayed at.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» status|LIVE|
|» status|DRAFT|
|» status|SOFT_TRASHED|

> Example responses

> 200 Response

```json
{
  "author": {
    "displayName": "string",
    "id": "string",
    "image": {
      "url": "string"
    },
    "url": "string"
  },
  "blog": {
    "id": "string"
  },
  "content": "string",
  "etag": "string",
  "id": "string",
  "kind": "string",
  "published": "string",
  "selfLink": "string",
  "status": "LIVE",
  "title": "string",
  "trashed": "string",
  "updated": "string",
  "url": "string"
}
```

<h3 id="bloggerpagespatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Page](#schemapage)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/blogger ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/blogger )
</aside>

## blogger.pages.publish

<a id="opIdblogger.pages.publish"></a>

> Code samples

```bash
curl https://www.googleapis.com/v3/blogs/string/pages/string/publish \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /v3/blogs/{blogId}/pages/{pageId}/publish`

Publishes a page.

<h3 id="bloggerpagespublish-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|blogId|path|string|true|none|
|pageId|path|string|true|none|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "author": {
    "displayName": "string",
    "id": "string",
    "image": {
      "url": "string"
    },
    "url": "string"
  },
  "blog": {
    "id": "string"
  },
  "content": "string",
  "etag": "string",
  "id": "string",
  "kind": "string",
  "published": "string",
  "selfLink": "string",
  "status": "LIVE",
  "title": "string",
  "trashed": "string",
  "updated": "string",
  "url": "string"
}
```

<h3 id="bloggerpagespublish-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Page](#schemapage)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/blogger ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/blogger )
</aside>

## blogger.pages.revert

<a id="opIdblogger.pages.revert"></a>

> Code samples

```bash
curl https://www.googleapis.com/v3/blogs/string/pages/string/revert \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /v3/blogs/{blogId}/pages/{pageId}/revert`

Reverts a published or scheduled page to draft state.

<h3 id="bloggerpagesrevert-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|blogId|path|string|true|none|
|pageId|path|string|true|none|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "author": {
    "displayName": "string",
    "id": "string",
    "image": {
      "url": "string"
    },
    "url": "string"
  },
  "blog": {
    "id": "string"
  },
  "content": "string",
  "etag": "string",
  "id": "string",
  "kind": "string",
  "published": "string",
  "selfLink": "string",
  "status": "LIVE",
  "title": "string",
  "trashed": "string",
  "updated": "string",
  "url": "string"
}
```

<h3 id="bloggerpagesrevert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Page](#schemapage)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/blogger ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/blogger )
</aside>

<h1 id="blogger-api-pageviews">pageViews</h1>

## blogger.pageViews.get

<a id="opIdblogger.pageViews.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v3/blogs/string/pageviews \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v3/blogs/{blogId}/pageviews`

Gets page views by blog id.

<h3 id="bloggerpageviewsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|blogId|path|string|true|none|
|range|query|[string]|false|none|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|range|all|
|range|30DAYS|
|range|7DAYS|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "blogId": "string",
  "counts": [
    {
      "count": "string",
      "timeRange": "ALL_TIME"
    }
  ],
  "kind": "string"
}
```

<h3 id="bloggerpageviewsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Pageviews](#schemapageviews)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/blogger ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/blogger )
</aside>

<h1 id="blogger-api-posts">posts</h1>

## blogger.posts.list

<a id="opIdblogger.posts.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v3/blogs/string/posts \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v3/blogs/{blogId}/posts`

Lists posts.

<h3 id="bloggerpostslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|blogId|path|string|true|none|
|endDate|query|string|false|none|
|fetchBodies|query|boolean|false|none|
|fetchImages|query|boolean|false|none|
|labels|query|string|false|none|
|maxResults|query|integer|false|none|
|orderBy|query|string|false|none|
|pageToken|query|string|false|none|
|sortOption|query|string|false|Sort direction applied to post list.|
|startDate|query|string|false|none|
|status|query|[string]|false|none|
|view|query|string|false|none|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|orderBy|ORDER_BY_UNSPECIFIED|
|orderBy|PUBLISHED|
|orderBy|UPDATED|
|sortOption|SORT_OPTION_UNSPECIFIED|
|sortOption|DESCENDING|
|sortOption|ASCENDING|
|status|LIVE|
|status|DRAFT|
|status|SCHEDULED|
|status|SOFT_TRASHED|
|view|VIEW_TYPE_UNSPECIFIED|
|view|READER|
|view|AUTHOR|
|view|ADMIN|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "etag": "string",
  "items": [
    {
      "author": {
        "displayName": "string",
        "id": "string",
        "image": {
          "url": "string"
        },
        "url": "string"
      },
      "blog": {
        "id": "string"
      },
      "content": "string",
      "customMetaData": "string",
      "etag": "string",
      "id": "string",
      "images": [
        {
          "url": "string"
        }
      ],
      "kind": "string",
      "labels": [
        "string"
      ],
      "location": {
        "lat": 0,
        "lng": 0,
        "name": "string",
        "span": "string"
      },
      "published": "string",
      "readerComments": "ALLOW",
      "replies": {
        "items": [
          {
            "author": {
              "displayName": "string",
              "id": "string",
              "image": {
                "url": "string"
              },
              "url": "string"
            },
            "blog": {
              "id": "string"
            },
            "content": "string",
            "id": "string",
            "inReplyTo": {
              "id": "string"
            },
            "kind": "string",
            "post": {
              "id": "string"
            },
            "published": "string",
            "selfLink": "string",
            "status": "LIVE",
            "updated": "string"
          }
        ],
        "selfLink": "string",
        "totalItems": "string"
      },
      "selfLink": "string",
      "status": "LIVE",
      "title": "string",
      "titleLink": "string",
      "trashed": "string",
      "updated": "string",
      "url": "string"
    }
  ],
  "kind": "string",
  "nextPageToken": "string",
  "prevPageToken": "string"
}
```

<h3 id="bloggerpostslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[PostList](#schemapostlist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/blogger ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/blogger ), Oauth2 ( Scopes: https://www.googleapis.com/auth/blogger.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/blogger.readonly )
</aside>

## blogger.posts.insert

<a id="opIdblogger.posts.insert"></a>

> Code samples

```bash
curl https://www.googleapis.com/v3/blogs/string/posts \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "author": {
      "displayName": "string",
      "id": "string",
      "image": {
        "url": "string"
      },
      "url": "string"
    },
    "blog": {
      "id": "string"
    },
    "content": "string",
    "customMetaData": "string",
    "etag": "string",
    "id": "string",
    "images": [
      {
        "url": "string"
      }
    ],
    "kind": "string",
    "labels": [
      "string"
    ],
    "location": {
      "lat": 0,
      "lng": 0,
      "name": "string",
      "span": "string"
    },
    "published": "string",
    "readerComments": "ALLOW",
    "replies": {
      "items": [
        {
          "author": {
            "displayName": "string",
            "id": "string",
            "image": {
              "url": "string"
            },
            "url": "string"
          },
          "blog": {
            "id": "string"
          },
          "content": "string",
          "id": "string",
          "inReplyTo": {
            "id": "string"
          },
          "kind": "string",
          "post": {
            "id": "string"
          },
          "published": "string",
          "selfLink": "string",
          "status": "LIVE",
          "updated": "string"
        }
      ],
      "selfLink": "string",
      "totalItems": "string"
    },
    "selfLink": "string",
    "status": "LIVE",
    "title": "string",
    "titleLink": "string",
    "trashed": "string",
    "updated": "string",
    "url": "string"
  }'
```

`POST /v3/blogs/{blogId}/posts`

Inserts a post.

> Body parameter

```json
{
  "author": {
    "displayName": "string",
    "id": "string",
    "image": {
      "url": "string"
    },
    "url": "string"
  },
  "blog": {
    "id": "string"
  },
  "content": "string",
  "customMetaData": "string",
  "etag": "string",
  "id": "string",
  "images": [
    {
      "url": "string"
    }
  ],
  "kind": "string",
  "labels": [
    "string"
  ],
  "location": {
    "lat": 0,
    "lng": 0,
    "name": "string",
    "span": "string"
  },
  "published": "string",
  "readerComments": "ALLOW",
  "replies": {
    "items": [
      {
        "author": {
          "displayName": "string",
          "id": "string",
          "image": {
            "url": "string"
          },
          "url": "string"
        },
        "blog": {
          "id": "string"
        },
        "content": "string",
        "id": "string",
        "inReplyTo": {
          "id": "string"
        },
        "kind": "string",
        "post": {
          "id": "string"
        },
        "published": "string",
        "selfLink": "string",
        "status": "LIVE",
        "updated": "string"
      }
    ],
    "selfLink": "string",
    "totalItems": "string"
  },
  "selfLink": "string",
  "status": "LIVE",
  "title": "string",
  "titleLink": "string",
  "trashed": "string",
  "updated": "string",
  "url": "string"
}
```

<h3 id="bloggerpostsinsert-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|blogId|path|string|true|none|
|fetchBody|query|boolean|false|none|
|fetchImages|query|boolean|false|none|
|isDraft|query|boolean|false|none|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[Post](#schemapost)|false|none|
|» author|body|object|false|The author of this Post.|
|» » displayName|body|string|false|The display name.|
|» » id|body|string|false|The identifier of the creator.|
|» » image|body|object|false|The creator's avatar.|
|» » » url|body|string|false|The creator's avatar URL.|
|» » url|body|string|false|The URL of the creator's Profile page.|
|» blog|body|object|false|Data about the blog containing this Post.|
|» » id|body|string|false|The identifier of the Blog that contains this Post.|
|» content|body|string|false|The content of the Post. May contain HTML markup.|
|» customMetaData|body|string|false|The JSON meta-data for the Post.|
|» etag|body|string|false|Etag of the resource.|
|» id|body|string|false|The identifier of this Post.|
|» images|body|[object]|false|Display image for the Post.|
|» » url|body|string|false|none|
|» kind|body|string|false|The kind of this entity. Always blogger#post.|
|» labels|body|[string]|false|The list of labels this Post was tagged with.|
|» location|body|object|false|The location for geotagged posts.|
|» » lat|body|number(double)|false|Location's latitude.|
|» » lng|body|number(double)|false|Location's longitude.|
|» » name|body|string|false|Location name.|
|» » span|body|string|false|Location's viewport span. Can be used when rendering a map preview.|
|» published|body|string|false|RFC 3339 date-time when this Post was published.|
|» readerComments|body|string|false|Comment control and display setting for readers of this post.|
|» replies|body|object|false|The container of comments on this Post.|
|» » items|body|[[Comment](#schemacomment)]|false|The List of Comments for this Post.|
|» » selfLink|body|string|false|The URL of the comments on this post.|
|» » totalItems|body|string(int64)|false|The count of comments on this post.|
|» selfLink|body|string|false|The API REST URL to fetch this resource from.|
|» status|body|string|false|Status of the post. Only set for admin-level requests.|
|» title|body|string|false|The title of the Post.|
|» titleLink|body|string|false|The title link URL, similar to atom's related link.|
|» trashed|body|string|false|RFC 3339 date-time when this Post was last trashed.|
|» updated|body|string|false|RFC 3339 date-time when this Post was last updated.|
|» url|body|string|false|The URL where this Post is displayed.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» readerComments|ALLOW|
|» readerComments|DONT_ALLOW_SHOW_EXISTING|
|» readerComments|DONT_ALLOW_HIDE_EXISTING|
|» status|LIVE|
|» status|DRAFT|
|» status|SCHEDULED|
|» status|SOFT_TRASHED|

> Example responses

> 200 Response

```json
{
  "author": {
    "displayName": "string",
    "id": "string",
    "image": {
      "url": "string"
    },
    "url": "string"
  },
  "blog": {
    "id": "string"
  },
  "content": "string",
  "customMetaData": "string",
  "etag": "string",
  "id": "string",
  "images": [
    {
      "url": "string"
    }
  ],
  "kind": "string",
  "labels": [
    "string"
  ],
  "location": {
    "lat": 0,
    "lng": 0,
    "name": "string",
    "span": "string"
  },
  "published": "string",
  "readerComments": "ALLOW",
  "replies": {
    "items": [
      {
        "author": {
          "displayName": "string",
          "id": "string",
          "image": {
            "url": "string"
          },
          "url": "string"
        },
        "blog": {
          "id": "string"
        },
        "content": "string",
        "id": "string",
        "inReplyTo": {
          "id": "string"
        },
        "kind": "string",
        "post": {
          "id": "string"
        },
        "published": "string",
        "selfLink": "string",
        "status": "LIVE",
        "updated": "string"
      }
    ],
    "selfLink": "string",
    "totalItems": "string"
  },
  "selfLink": "string",
  "status": "LIVE",
  "title": "string",
  "titleLink": "string",
  "trashed": "string",
  "updated": "string",
  "url": "string"
}
```

<h3 id="bloggerpostsinsert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Post](#schemapost)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/blogger ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/blogger )
</aside>

## blogger.posts.getByPath

<a id="opIdblogger.posts.getByPath"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/v3/blogs/string/posts/bypath?path=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v3/blogs/{blogId}/posts/bypath`

Gets a post by path.

<h3 id="bloggerpostsgetbypath-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|blogId|path|string|true|none|
|path|query|string|true|none|
|maxComments|query|integer|false|none|
|view|query|string|false|none|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|view|VIEW_TYPE_UNSPECIFIED|
|view|READER|
|view|AUTHOR|
|view|ADMIN|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "author": {
    "displayName": "string",
    "id": "string",
    "image": {
      "url": "string"
    },
    "url": "string"
  },
  "blog": {
    "id": "string"
  },
  "content": "string",
  "customMetaData": "string",
  "etag": "string",
  "id": "string",
  "images": [
    {
      "url": "string"
    }
  ],
  "kind": "string",
  "labels": [
    "string"
  ],
  "location": {
    "lat": 0,
    "lng": 0,
    "name": "string",
    "span": "string"
  },
  "published": "string",
  "readerComments": "ALLOW",
  "replies": {
    "items": [
      {
        "author": {
          "displayName": "string",
          "id": "string",
          "image": {
            "url": "string"
          },
          "url": "string"
        },
        "blog": {
          "id": "string"
        },
        "content": "string",
        "id": "string",
        "inReplyTo": {
          "id": "string"
        },
        "kind": "string",
        "post": {
          "id": "string"
        },
        "published": "string",
        "selfLink": "string",
        "status": "LIVE",
        "updated": "string"
      }
    ],
    "selfLink": "string",
    "totalItems": "string"
  },
  "selfLink": "string",
  "status": "LIVE",
  "title": "string",
  "titleLink": "string",
  "trashed": "string",
  "updated": "string",
  "url": "string"
}
```

<h3 id="bloggerpostsgetbypath-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Post](#schemapost)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/blogger ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/blogger ), Oauth2 ( Scopes: https://www.googleapis.com/auth/blogger.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/blogger.readonly )
</aside>

## blogger.posts.search

<a id="opIdblogger.posts.search"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/v3/blogs/string/posts/search?q=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v3/blogs/{blogId}/posts/search`

Searches for posts matching given query terms in the specified blog.

<h3 id="bloggerpostssearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|blogId|path|string|true|none|
|q|query|string|true|none|
|fetchBodies|query|boolean|false|none|
|orderBy|query|string|false|none|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|orderBy|ORDER_BY_UNSPECIFIED|
|orderBy|PUBLISHED|
|orderBy|UPDATED|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "etag": "string",
  "items": [
    {
      "author": {
        "displayName": "string",
        "id": "string",
        "image": {
          "url": "string"
        },
        "url": "string"
      },
      "blog": {
        "id": "string"
      },
      "content": "string",
      "customMetaData": "string",
      "etag": "string",
      "id": "string",
      "images": [
        {
          "url": "string"
        }
      ],
      "kind": "string",
      "labels": [
        "string"
      ],
      "location": {
        "lat": 0,
        "lng": 0,
        "name": "string",
        "span": "string"
      },
      "published": "string",
      "readerComments": "ALLOW",
      "replies": {
        "items": [
          {
            "author": {
              "displayName": "string",
              "id": "string",
              "image": {
                "url": "string"
              },
              "url": "string"
            },
            "blog": {
              "id": "string"
            },
            "content": "string",
            "id": "string",
            "inReplyTo": {
              "id": "string"
            },
            "kind": "string",
            "post": {
              "id": "string"
            },
            "published": "string",
            "selfLink": "string",
            "status": "LIVE",
            "updated": "string"
          }
        ],
        "selfLink": "string",
        "totalItems": "string"
      },
      "selfLink": "string",
      "status": "LIVE",
      "title": "string",
      "titleLink": "string",
      "trashed": "string",
      "updated": "string",
      "url": "string"
    }
  ],
  "kind": "string",
  "nextPageToken": "string",
  "prevPageToken": "string"
}
```

<h3 id="bloggerpostssearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[PostList](#schemapostlist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/blogger ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/blogger ), Oauth2 ( Scopes: https://www.googleapis.com/auth/blogger.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/blogger.readonly )
</aside>

## blogger.posts.get

<a id="opIdblogger.posts.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v3/blogs/string/posts/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v3/blogs/{blogId}/posts/{postId}`

Gets a post by blog id and post id

<h3 id="bloggerpostsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|blogId|path|string|true|none|
|postId|path|string|true|none|
|fetchBody|query|boolean|false|none|
|fetchImages|query|boolean|false|none|
|maxComments|query|integer|false|none|
|view|query|string|false|none|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|view|VIEW_TYPE_UNSPECIFIED|
|view|READER|
|view|AUTHOR|
|view|ADMIN|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "author": {
    "displayName": "string",
    "id": "string",
    "image": {
      "url": "string"
    },
    "url": "string"
  },
  "blog": {
    "id": "string"
  },
  "content": "string",
  "customMetaData": "string",
  "etag": "string",
  "id": "string",
  "images": [
    {
      "url": "string"
    }
  ],
  "kind": "string",
  "labels": [
    "string"
  ],
  "location": {
    "lat": 0,
    "lng": 0,
    "name": "string",
    "span": "string"
  },
  "published": "string",
  "readerComments": "ALLOW",
  "replies": {
    "items": [
      {
        "author": {
          "displayName": "string",
          "id": "string",
          "image": {
            "url": "string"
          },
          "url": "string"
        },
        "blog": {
          "id": "string"
        },
        "content": "string",
        "id": "string",
        "inReplyTo": {
          "id": "string"
        },
        "kind": "string",
        "post": {
          "id": "string"
        },
        "published": "string",
        "selfLink": "string",
        "status": "LIVE",
        "updated": "string"
      }
    ],
    "selfLink": "string",
    "totalItems": "string"
  },
  "selfLink": "string",
  "status": "LIVE",
  "title": "string",
  "titleLink": "string",
  "trashed": "string",
  "updated": "string",
  "url": "string"
}
```

<h3 id="bloggerpostsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Post](#schemapost)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/blogger ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/blogger ), Oauth2 ( Scopes: https://www.googleapis.com/auth/blogger.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/blogger.readonly )
</aside>

## blogger.posts.update

<a id="opIdblogger.posts.update"></a>

> Code samples

```bash
curl https://www.googleapis.com/v3/blogs/string/posts/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "author": {
      "displayName": "string",
      "id": "string",
      "image": {
        "url": "string"
      },
      "url": "string"
    },
    "blog": {
      "id": "string"
    },
    "content": "string",
    "customMetaData": "string",
    "etag": "string",
    "id": "string",
    "images": [
      {
        "url": "string"
      }
    ],
    "kind": "string",
    "labels": [
      "string"
    ],
    "location": {
      "lat": 0,
      "lng": 0,
      "name": "string",
      "span": "string"
    },
    "published": "string",
    "readerComments": "ALLOW",
    "replies": {
      "items": [
        {
          "author": {
            "displayName": "string",
            "id": "string",
            "image": {
              "url": "string"
            },
            "url": "string"
          },
          "blog": {
            "id": "string"
          },
          "content": "string",
          "id": "string",
          "inReplyTo": {
            "id": "string"
          },
          "kind": "string",
          "post": {
            "id": "string"
          },
          "published": "string",
          "selfLink": "string",
          "status": "LIVE",
          "updated": "string"
        }
      ],
      "selfLink": "string",
      "totalItems": "string"
    },
    "selfLink": "string",
    "status": "LIVE",
    "title": "string",
    "titleLink": "string",
    "trashed": "string",
    "updated": "string",
    "url": "string"
  }'
```

`PUT /v3/blogs/{blogId}/posts/{postId}`

Updates a post by blog id and post id.

> Body parameter

```json
{
  "author": {
    "displayName": "string",
    "id": "string",
    "image": {
      "url": "string"
    },
    "url": "string"
  },
  "blog": {
    "id": "string"
  },
  "content": "string",
  "customMetaData": "string",
  "etag": "string",
  "id": "string",
  "images": [
    {
      "url": "string"
    }
  ],
  "kind": "string",
  "labels": [
    "string"
  ],
  "location": {
    "lat": 0,
    "lng": 0,
    "name": "string",
    "span": "string"
  },
  "published": "string",
  "readerComments": "ALLOW",
  "replies": {
    "items": [
      {
        "author": {
          "displayName": "string",
          "id": "string",
          "image": {
            "url": "string"
          },
          "url": "string"
        },
        "blog": {
          "id": "string"
        },
        "content": "string",
        "id": "string",
        "inReplyTo": {
          "id": "string"
        },
        "kind": "string",
        "post": {
          "id": "string"
        },
        "published": "string",
        "selfLink": "string",
        "status": "LIVE",
        "updated": "string"
      }
    ],
    "selfLink": "string",
    "totalItems": "string"
  },
  "selfLink": "string",
  "status": "LIVE",
  "title": "string",
  "titleLink": "string",
  "trashed": "string",
  "updated": "string",
  "url": "string"
}
```

<h3 id="bloggerpostsupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|blogId|path|string|true|none|
|postId|path|string|true|none|
|fetchBody|query|boolean|false|none|
|fetchImages|query|boolean|false|none|
|maxComments|query|integer|false|none|
|publish|query|boolean|false|none|
|revert|query|boolean|false|none|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[Post](#schemapost)|false|none|
|» author|body|object|false|The author of this Post.|
|» » displayName|body|string|false|The display name.|
|» » id|body|string|false|The identifier of the creator.|
|» » image|body|object|false|The creator's avatar.|
|» » » url|body|string|false|The creator's avatar URL.|
|» » url|body|string|false|The URL of the creator's Profile page.|
|» blog|body|object|false|Data about the blog containing this Post.|
|» » id|body|string|false|The identifier of the Blog that contains this Post.|
|» content|body|string|false|The content of the Post. May contain HTML markup.|
|» customMetaData|body|string|false|The JSON meta-data for the Post.|
|» etag|body|string|false|Etag of the resource.|
|» id|body|string|false|The identifier of this Post.|
|» images|body|[object]|false|Display image for the Post.|
|» » url|body|string|false|none|
|» kind|body|string|false|The kind of this entity. Always blogger#post.|
|» labels|body|[string]|false|The list of labels this Post was tagged with.|
|» location|body|object|false|The location for geotagged posts.|
|» » lat|body|number(double)|false|Location's latitude.|
|» » lng|body|number(double)|false|Location's longitude.|
|» » name|body|string|false|Location name.|
|» » span|body|string|false|Location's viewport span. Can be used when rendering a map preview.|
|» published|body|string|false|RFC 3339 date-time when this Post was published.|
|» readerComments|body|string|false|Comment control and display setting for readers of this post.|
|» replies|body|object|false|The container of comments on this Post.|
|» » items|body|[[Comment](#schemacomment)]|false|The List of Comments for this Post.|
|» » selfLink|body|string|false|The URL of the comments on this post.|
|» » totalItems|body|string(int64)|false|The count of comments on this post.|
|» selfLink|body|string|false|The API REST URL to fetch this resource from.|
|» status|body|string|false|Status of the post. Only set for admin-level requests.|
|» title|body|string|false|The title of the Post.|
|» titleLink|body|string|false|The title link URL, similar to atom's related link.|
|» trashed|body|string|false|RFC 3339 date-time when this Post was last trashed.|
|» updated|body|string|false|RFC 3339 date-time when this Post was last updated.|
|» url|body|string|false|The URL where this Post is displayed.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» readerComments|ALLOW|
|» readerComments|DONT_ALLOW_SHOW_EXISTING|
|» readerComments|DONT_ALLOW_HIDE_EXISTING|
|» status|LIVE|
|» status|DRAFT|
|» status|SCHEDULED|
|» status|SOFT_TRASHED|

> Example responses

> 200 Response

```json
{
  "author": {
    "displayName": "string",
    "id": "string",
    "image": {
      "url": "string"
    },
    "url": "string"
  },
  "blog": {
    "id": "string"
  },
  "content": "string",
  "customMetaData": "string",
  "etag": "string",
  "id": "string",
  "images": [
    {
      "url": "string"
    }
  ],
  "kind": "string",
  "labels": [
    "string"
  ],
  "location": {
    "lat": 0,
    "lng": 0,
    "name": "string",
    "span": "string"
  },
  "published": "string",
  "readerComments": "ALLOW",
  "replies": {
    "items": [
      {
        "author": {
          "displayName": "string",
          "id": "string",
          "image": {
            "url": "string"
          },
          "url": "string"
        },
        "blog": {
          "id": "string"
        },
        "content": "string",
        "id": "string",
        "inReplyTo": {
          "id": "string"
        },
        "kind": "string",
        "post": {
          "id": "string"
        },
        "published": "string",
        "selfLink": "string",
        "status": "LIVE",
        "updated": "string"
      }
    ],
    "selfLink": "string",
    "totalItems": "string"
  },
  "selfLink": "string",
  "status": "LIVE",
  "title": "string",
  "titleLink": "string",
  "trashed": "string",
  "updated": "string",
  "url": "string"
}
```

<h3 id="bloggerpostsupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Post](#schemapost)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/blogger ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/blogger )
</aside>

## blogger.posts.delete

<a id="opIdblogger.posts.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v3/blogs/string/posts/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v3/blogs/{blogId}/posts/{postId}`

Deletes a post by blog id and post id.

<h3 id="bloggerpostsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|blogId|path|string|true|none|
|postId|path|string|true|none|
|useTrash|query|boolean|false|Move to Trash if possible|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

<h3 id="bloggerpostsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/blogger ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/blogger )
</aside>

## blogger.posts.patch

<a id="opIdblogger.posts.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/v3/blogs/string/posts/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "author": {
      "displayName": "string",
      "id": "string",
      "image": {
        "url": "string"
      },
      "url": "string"
    },
    "blog": {
      "id": "string"
    },
    "content": "string",
    "customMetaData": "string",
    "etag": "string",
    "id": "string",
    "images": [
      {
        "url": "string"
      }
    ],
    "kind": "string",
    "labels": [
      "string"
    ],
    "location": {
      "lat": 0,
      "lng": 0,
      "name": "string",
      "span": "string"
    },
    "published": "string",
    "readerComments": "ALLOW",
    "replies": {
      "items": [
        {
          "author": {
            "displayName": "string",
            "id": "string",
            "image": {
              "url": "string"
            },
            "url": "string"
          },
          "blog": {
            "id": "string"
          },
          "content": "string",
          "id": "string",
          "inReplyTo": {
            "id": "string"
          },
          "kind": "string",
          "post": {
            "id": "string"
          },
          "published": "string",
          "selfLink": "string",
          "status": "LIVE",
          "updated": "string"
        }
      ],
      "selfLink": "string",
      "totalItems": "string"
    },
    "selfLink": "string",
    "status": "LIVE",
    "title": "string",
    "titleLink": "string",
    "trashed": "string",
    "updated": "string",
    "url": "string"
  }'
```

`PATCH /v3/blogs/{blogId}/posts/{postId}`

Patches a post.

> Body parameter

```json
{
  "author": {
    "displayName": "string",
    "id": "string",
    "image": {
      "url": "string"
    },
    "url": "string"
  },
  "blog": {
    "id": "string"
  },
  "content": "string",
  "customMetaData": "string",
  "etag": "string",
  "id": "string",
  "images": [
    {
      "url": "string"
    }
  ],
  "kind": "string",
  "labels": [
    "string"
  ],
  "location": {
    "lat": 0,
    "lng": 0,
    "name": "string",
    "span": "string"
  },
  "published": "string",
  "readerComments": "ALLOW",
  "replies": {
    "items": [
      {
        "author": {
          "displayName": "string",
          "id": "string",
          "image": {
            "url": "string"
          },
          "url": "string"
        },
        "blog": {
          "id": "string"
        },
        "content": "string",
        "id": "string",
        "inReplyTo": {
          "id": "string"
        },
        "kind": "string",
        "post": {
          "id": "string"
        },
        "published": "string",
        "selfLink": "string",
        "status": "LIVE",
        "updated": "string"
      }
    ],
    "selfLink": "string",
    "totalItems": "string"
  },
  "selfLink": "string",
  "status": "LIVE",
  "title": "string",
  "titleLink": "string",
  "trashed": "string",
  "updated": "string",
  "url": "string"
}
```

<h3 id="bloggerpostspatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|blogId|path|string|true|none|
|postId|path|string|true|none|
|fetchBody|query|boolean|false|none|
|fetchImages|query|boolean|false|none|
|maxComments|query|integer|false|none|
|publish|query|boolean|false|none|
|revert|query|boolean|false|none|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[Post](#schemapost)|false|none|
|» author|body|object|false|The author of this Post.|
|» » displayName|body|string|false|The display name.|
|» » id|body|string|false|The identifier of the creator.|
|» » image|body|object|false|The creator's avatar.|
|» » » url|body|string|false|The creator's avatar URL.|
|» » url|body|string|false|The URL of the creator's Profile page.|
|» blog|body|object|false|Data about the blog containing this Post.|
|» » id|body|string|false|The identifier of the Blog that contains this Post.|
|» content|body|string|false|The content of the Post. May contain HTML markup.|
|» customMetaData|body|string|false|The JSON meta-data for the Post.|
|» etag|body|string|false|Etag of the resource.|
|» id|body|string|false|The identifier of this Post.|
|» images|body|[object]|false|Display image for the Post.|
|» » url|body|string|false|none|
|» kind|body|string|false|The kind of this entity. Always blogger#post.|
|» labels|body|[string]|false|The list of labels this Post was tagged with.|
|» location|body|object|false|The location for geotagged posts.|
|» » lat|body|number(double)|false|Location's latitude.|
|» » lng|body|number(double)|false|Location's longitude.|
|» » name|body|string|false|Location name.|
|» » span|body|string|false|Location's viewport span. Can be used when rendering a map preview.|
|» published|body|string|false|RFC 3339 date-time when this Post was published.|
|» readerComments|body|string|false|Comment control and display setting for readers of this post.|
|» replies|body|object|false|The container of comments on this Post.|
|» » items|body|[[Comment](#schemacomment)]|false|The List of Comments for this Post.|
|» » selfLink|body|string|false|The URL of the comments on this post.|
|» » totalItems|body|string(int64)|false|The count of comments on this post.|
|» selfLink|body|string|false|The API REST URL to fetch this resource from.|
|» status|body|string|false|Status of the post. Only set for admin-level requests.|
|» title|body|string|false|The title of the Post.|
|» titleLink|body|string|false|The title link URL, similar to atom's related link.|
|» trashed|body|string|false|RFC 3339 date-time when this Post was last trashed.|
|» updated|body|string|false|RFC 3339 date-time when this Post was last updated.|
|» url|body|string|false|The URL where this Post is displayed.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» readerComments|ALLOW|
|» readerComments|DONT_ALLOW_SHOW_EXISTING|
|» readerComments|DONT_ALLOW_HIDE_EXISTING|
|» status|LIVE|
|» status|DRAFT|
|» status|SCHEDULED|
|» status|SOFT_TRASHED|

> Example responses

> 200 Response

```json
{
  "author": {
    "displayName": "string",
    "id": "string",
    "image": {
      "url": "string"
    },
    "url": "string"
  },
  "blog": {
    "id": "string"
  },
  "content": "string",
  "customMetaData": "string",
  "etag": "string",
  "id": "string",
  "images": [
    {
      "url": "string"
    }
  ],
  "kind": "string",
  "labels": [
    "string"
  ],
  "location": {
    "lat": 0,
    "lng": 0,
    "name": "string",
    "span": "string"
  },
  "published": "string",
  "readerComments": "ALLOW",
  "replies": {
    "items": [
      {
        "author": {
          "displayName": "string",
          "id": "string",
          "image": {
            "url": "string"
          },
          "url": "string"
        },
        "blog": {
          "id": "string"
        },
        "content": "string",
        "id": "string",
        "inReplyTo": {
          "id": "string"
        },
        "kind": "string",
        "post": {
          "id": "string"
        },
        "published": "string",
        "selfLink": "string",
        "status": "LIVE",
        "updated": "string"
      }
    ],
    "selfLink": "string",
    "totalItems": "string"
  },
  "selfLink": "string",
  "status": "LIVE",
  "title": "string",
  "titleLink": "string",
  "trashed": "string",
  "updated": "string",
  "url": "string"
}
```

<h3 id="bloggerpostspatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Post](#schemapost)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/blogger ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/blogger )
</aside>

## blogger.posts.publish

<a id="opIdblogger.posts.publish"></a>

> Code samples

```bash
curl https://www.googleapis.com/v3/blogs/string/posts/string/publish \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /v3/blogs/{blogId}/posts/{postId}/publish`

Publishes a post.

<h3 id="bloggerpostspublish-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|blogId|path|string|true|none|
|postId|path|string|true|none|
|publishDate|query|string|false|none|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "author": {
    "displayName": "string",
    "id": "string",
    "image": {
      "url": "string"
    },
    "url": "string"
  },
  "blog": {
    "id": "string"
  },
  "content": "string",
  "customMetaData": "string",
  "etag": "string",
  "id": "string",
  "images": [
    {
      "url": "string"
    }
  ],
  "kind": "string",
  "labels": [
    "string"
  ],
  "location": {
    "lat": 0,
    "lng": 0,
    "name": "string",
    "span": "string"
  },
  "published": "string",
  "readerComments": "ALLOW",
  "replies": {
    "items": [
      {
        "author": {
          "displayName": "string",
          "id": "string",
          "image": {
            "url": "string"
          },
          "url": "string"
        },
        "blog": {
          "id": "string"
        },
        "content": "string",
        "id": "string",
        "inReplyTo": {
          "id": "string"
        },
        "kind": "string",
        "post": {
          "id": "string"
        },
        "published": "string",
        "selfLink": "string",
        "status": "LIVE",
        "updated": "string"
      }
    ],
    "selfLink": "string",
    "totalItems": "string"
  },
  "selfLink": "string",
  "status": "LIVE",
  "title": "string",
  "titleLink": "string",
  "trashed": "string",
  "updated": "string",
  "url": "string"
}
```

<h3 id="bloggerpostspublish-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Post](#schemapost)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/blogger ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/blogger )
</aside>

## blogger.posts.revert

<a id="opIdblogger.posts.revert"></a>

> Code samples

```bash
curl https://www.googleapis.com/v3/blogs/string/posts/string/revert \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /v3/blogs/{blogId}/posts/{postId}/revert`

Reverts a published or scheduled post to draft state.

<h3 id="bloggerpostsrevert-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|blogId|path|string|true|none|
|postId|path|string|true|none|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "author": {
    "displayName": "string",
    "id": "string",
    "image": {
      "url": "string"
    },
    "url": "string"
  },
  "blog": {
    "id": "string"
  },
  "content": "string",
  "customMetaData": "string",
  "etag": "string",
  "id": "string",
  "images": [
    {
      "url": "string"
    }
  ],
  "kind": "string",
  "labels": [
    "string"
  ],
  "location": {
    "lat": 0,
    "lng": 0,
    "name": "string",
    "span": "string"
  },
  "published": "string",
  "readerComments": "ALLOW",
  "replies": {
    "items": [
      {
        "author": {
          "displayName": "string",
          "id": "string",
          "image": {
            "url": "string"
          },
          "url": "string"
        },
        "blog": {
          "id": "string"
        },
        "content": "string",
        "id": "string",
        "inReplyTo": {
          "id": "string"
        },
        "kind": "string",
        "post": {
          "id": "string"
        },
        "published": "string",
        "selfLink": "string",
        "status": "LIVE",
        "updated": "string"
      }
    ],
    "selfLink": "string",
    "totalItems": "string"
  },
  "selfLink": "string",
  "status": "LIVE",
  "title": "string",
  "titleLink": "string",
  "trashed": "string",
  "updated": "string",
  "url": "string"
}
```

<h3 id="bloggerpostsrevert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Post](#schemapost)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/blogger ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/blogger )
</aside>

<h1 id="blogger-api-postuserinfos">postUserInfos</h1>

## blogger.postUserInfos.list

<a id="opIdblogger.postUserInfos.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v3/users/string/blogs/string/posts \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v3/users/{userId}/blogs/{blogId}/posts`

Lists post and user info pairs.

<h3 id="bloggerpostuserinfoslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|none|
|blogId|path|string|true|none|
|endDate|query|string|false|none|
|fetchBodies|query|boolean|false|none|
|labels|query|string|false|none|
|maxResults|query|integer|false|none|
|orderBy|query|string|false|none|
|pageToken|query|string|false|none|
|startDate|query|string|false|none|
|status|query|[string]|false|none|
|view|query|string|false|none|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|orderBy|ORDER_BY_UNSPECIFIED|
|orderBy|PUBLISHED|
|orderBy|UPDATED|
|status|LIVE|
|status|DRAFT|
|status|SCHEDULED|
|status|SOFT_TRASHED|
|view|VIEW_TYPE_UNSPECIFIED|
|view|READER|
|view|AUTHOR|
|view|ADMIN|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "kind": "string",
      "post": {
        "author": {
          "displayName": "string",
          "id": "string",
          "image": {
            "url": "string"
          },
          "url": "string"
        },
        "blog": {
          "id": "string"
        },
        "content": "string",
        "customMetaData": "string",
        "etag": "string",
        "id": "string",
        "images": [
          {
            "url": "string"
          }
        ],
        "kind": "string",
        "labels": [
          "string"
        ],
        "location": {
          "lat": 0,
          "lng": 0,
          "name": "string",
          "span": "string"
        },
        "published": "string",
        "readerComments": "ALLOW",
        "replies": {
          "items": [
            {
              "author": {
                "displayName": "string",
                "id": "string",
                "image": {
                  "url": "string"
                },
                "url": "string"
              },
              "blog": {
                "id": "string"
              },
              "content": "string",
              "id": "string",
              "inReplyTo": {
                "id": "string"
              },
              "kind": "string",
              "post": {
                "id": "string"
              },
              "published": "string",
              "selfLink": "string",
              "status": "LIVE",
              "updated": "string"
            }
          ],
          "selfLink": "string",
          "totalItems": "string"
        },
        "selfLink": "string",
        "status": "LIVE",
        "title": "string",
        "titleLink": "string",
        "trashed": "string",
        "updated": "string",
        "url": "string"
      },
      "post_user_info": {
        "blogId": "string",
        "hasEditAccess": true,
        "kind": "string",
        "postId": "string",
        "userId": "string"
      }
    }
  ],
  "kind": "string",
  "nextPageToken": "string"
}
```

<h3 id="bloggerpostuserinfoslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[PostUserInfosList](#schemapostuserinfoslist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/blogger ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/blogger ), Oauth2 ( Scopes: https://www.googleapis.com/auth/blogger.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/blogger.readonly )
</aside>

## blogger.postUserInfos.get

<a id="opIdblogger.postUserInfos.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v3/users/string/blogs/string/posts/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v3/users/{userId}/blogs/{blogId}/posts/{postId}`

Gets one post and user info pair, by post_id and user_id.

<h3 id="bloggerpostuserinfosget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|none|
|blogId|path|string|true|none|
|postId|path|string|true|none|
|maxComments|query|integer|false|none|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "kind": "string",
  "post": {
    "author": {
      "displayName": "string",
      "id": "string",
      "image": {
        "url": "string"
      },
      "url": "string"
    },
    "blog": {
      "id": "string"
    },
    "content": "string",
    "customMetaData": "string",
    "etag": "string",
    "id": "string",
    "images": [
      {
        "url": "string"
      }
    ],
    "kind": "string",
    "labels": [
      "string"
    ],
    "location": {
      "lat": 0,
      "lng": 0,
      "name": "string",
      "span": "string"
    },
    "published": "string",
    "readerComments": "ALLOW",
    "replies": {
      "items": [
        {
          "author": {
            "displayName": "string",
            "id": "string",
            "image": {
              "url": "string"
            },
            "url": "string"
          },
          "blog": {
            "id": "string"
          },
          "content": "string",
          "id": "string",
          "inReplyTo": {
            "id": "string"
          },
          "kind": "string",
          "post": {
            "id": "string"
          },
          "published": "string",
          "selfLink": "string",
          "status": "LIVE",
          "updated": "string"
        }
      ],
      "selfLink": "string",
      "totalItems": "string"
    },
    "selfLink": "string",
    "status": "LIVE",
    "title": "string",
    "titleLink": "string",
    "trashed": "string",
    "updated": "string",
    "url": "string"
  },
  "post_user_info": {
    "blogId": "string",
    "hasEditAccess": true,
    "kind": "string",
    "postId": "string",
    "userId": "string"
  }
}
```

<h3 id="bloggerpostuserinfosget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[PostUserInfo](#schemapostuserinfo)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/blogger ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/blogger ), Oauth2 ( Scopes: https://www.googleapis.com/auth/blogger.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/blogger.readonly )
</aside>

<h1 id="blogger-api-users">users</h1>

## blogger.users.get

<a id="opIdblogger.users.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v3/users/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v3/users/{userId}`

Gets one user by user_id.

<h3 id="bloggerusersget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|none|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "about": "string",
  "blogs": {
    "selfLink": "string"
  },
  "created": "string",
  "displayName": "string",
  "id": "string",
  "kind": "string",
  "locale": {
    "country": "string",
    "language": "string",
    "variant": "string"
  },
  "selfLink": "string",
  "url": "string"
}
```

<h3 id="bloggerusersget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[User](#schemauser)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/blogger ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/blogger ), Oauth2 ( Scopes: https://www.googleapis.com/auth/blogger.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/blogger.readonly )
</aside>

# Schemas

<h2 id="tocS_Blog">Blog</h2>
<!-- backwards compatibility -->
<a id="schemablog"></a>
<a id="schema_Blog"></a>
<a id="tocSblog"></a>
<a id="tocsblog"></a>

```json
{
  "customMetaData": "string",
  "description": "string",
  "id": "string",
  "kind": "string",
  "locale": {
    "country": "string",
    "language": "string",
    "variant": "string"
  },
  "name": "string",
  "pages": {
    "selfLink": "string",
    "totalItems": 0
  },
  "posts": {
    "items": [
      {
        "author": {
          "displayName": "string",
          "id": "string",
          "image": {
            "url": "string"
          },
          "url": "string"
        },
        "blog": {
          "id": "string"
        },
        "content": "string",
        "customMetaData": "string",
        "etag": "string",
        "id": "string",
        "images": [
          {
            "url": "string"
          }
        ],
        "kind": "string",
        "labels": [
          "string"
        ],
        "location": {
          "lat": 0,
          "lng": 0,
          "name": "string",
          "span": "string"
        },
        "published": "string",
        "readerComments": "ALLOW",
        "replies": {
          "items": [
            {
              "author": {
                "displayName": "string",
                "id": "string",
                "image": {
                  "url": "string"
                },
                "url": "string"
              },
              "blog": {
                "id": "string"
              },
              "content": "string",
              "id": "string",
              "inReplyTo": {
                "id": "string"
              },
              "kind": "string",
              "post": {
                "id": "string"
              },
              "published": "string",
              "selfLink": "string",
              "status": "LIVE",
              "updated": "string"
            }
          ],
          "selfLink": "string",
          "totalItems": "string"
        },
        "selfLink": "string",
        "status": "LIVE",
        "title": "string",
        "titleLink": "string",
        "trashed": "string",
        "updated": "string",
        "url": "string"
      }
    ],
    "selfLink": "string",
    "totalItems": 0
  },
  "published": "string",
  "selfLink": "string",
  "status": "LIVE",
  "updated": "string",
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|customMetaData|string|false|none|The JSON custom meta-data for the Blog.|
|description|string|false|none|The description of this blog. This is displayed underneath the title.|
|id|string|false|none|The identifier for this resource.|
|kind|string|false|none|The kind of this entry. Always blogger#blog.|
|locale|object|false|none|The locale this Blog is set to.|
|name|string|false|none|The name of this blog. This is displayed as the title.|
|pages|object|false|none|The container of pages in this blog.|
|posts|object|false|none|The container of posts in this blog.|
|published|string|false|none|RFC 3339 date-time when this blog was published.|
|selfLink|string|false|none|The API REST URL to fetch this resource from.|
|status|string|false|none|The status of the blog.|
|updated|string|false|none|RFC 3339 date-time when this blog was last updated.|
|url|string|false|none|The URL where this blog is published.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|LIVE|
|status|DELETED|

<h2 id="tocS_BlogList">BlogList</h2>
<!-- backwards compatibility -->
<a id="schemabloglist"></a>
<a id="schema_BlogList"></a>
<a id="tocSbloglist"></a>
<a id="tocsbloglist"></a>

```json
{
  "blogUserInfos": [
    {
      "blog": {
        "customMetaData": "string",
        "description": "string",
        "id": "string",
        "kind": "string",
        "locale": {
          "country": "string",
          "language": "string",
          "variant": "string"
        },
        "name": "string",
        "pages": {
          "selfLink": "string",
          "totalItems": 0
        },
        "posts": {
          "items": [
            {
              "author": {
                "displayName": "string",
                "id": "string",
                "image": {
                  "url": "string"
                },
                "url": "string"
              },
              "blog": {
                "id": "string"
              },
              "content": "string",
              "customMetaData": "string",
              "etag": "string",
              "id": "string",
              "images": [
                {
                  "url": "string"
                }
              ],
              "kind": "string",
              "labels": [
                "string"
              ],
              "location": {
                "lat": 0,
                "lng": 0,
                "name": "string",
                "span": "string"
              },
              "published": "string",
              "readerComments": "ALLOW",
              "replies": {
                "items": [
                  {
                    "author": {
                      "displayName": "string",
                      "id": "string",
                      "image": {
                        "url": "string"
                      },
                      "url": "string"
                    },
                    "blog": {
                      "id": "string"
                    },
                    "content": "string",
                    "id": "string",
                    "inReplyTo": {
                      "id": "string"
                    },
                    "kind": "string",
                    "post": {
                      "id": "string"
                    },
                    "published": "string",
                    "selfLink": "string",
                    "status": "LIVE",
                    "updated": "string"
                  }
                ],
                "selfLink": "string",
                "totalItems": "string"
              },
              "selfLink": "string",
              "status": "LIVE",
              "title": "string",
              "titleLink": "string",
              "trashed": "string",
              "updated": "string",
              "url": "string"
            }
          ],
          "selfLink": "string",
          "totalItems": 0
        },
        "published": "string",
        "selfLink": "string",
        "status": "LIVE",
        "updated": "string",
        "url": "string"
      },
      "blog_user_info": {
        "blogId": "string",
        "hasAdminAccess": true,
        "kind": "string",
        "photosAlbumKey": "string",
        "role": "VIEW_TYPE_UNSPECIFIED",
        "userId": "string"
      },
      "kind": "string"
    }
  ],
  "items": [
    {
      "customMetaData": "string",
      "description": "string",
      "id": "string",
      "kind": "string",
      "locale": {
        "country": "string",
        "language": "string",
        "variant": "string"
      },
      "name": "string",
      "pages": {
        "selfLink": "string",
        "totalItems": 0
      },
      "posts": {
        "items": [
          {
            "author": {
              "displayName": "string",
              "id": "string",
              "image": {
                "url": "string"
              },
              "url": "string"
            },
            "blog": {
              "id": "string"
            },
            "content": "string",
            "customMetaData": "string",
            "etag": "string",
            "id": "string",
            "images": [
              {
                "url": "string"
              }
            ],
            "kind": "string",
            "labels": [
              "string"
            ],
            "location": {
              "lat": 0,
              "lng": 0,
              "name": "string",
              "span": "string"
            },
            "published": "string",
            "readerComments": "ALLOW",
            "replies": {
              "items": [
                {
                  "author": {
                    "displayName": "string",
                    "id": "string",
                    "image": {
                      "url": "string"
                    },
                    "url": "string"
                  },
                  "blog": {
                    "id": "string"
                  },
                  "content": "string",
                  "id": "string",
                  "inReplyTo": {
                    "id": "string"
                  },
                  "kind": "string",
                  "post": {
                    "id": "string"
                  },
                  "published": "string",
                  "selfLink": "string",
                  "status": "LIVE",
                  "updated": "string"
                }
              ],
              "selfLink": "string",
              "totalItems": "string"
            },
            "selfLink": "string",
            "status": "LIVE",
            "title": "string",
            "titleLink": "string",
            "trashed": "string",
            "updated": "string",
            "url": "string"
          }
        ],
        "selfLink": "string",
        "totalItems": 0
      },
      "published": "string",
      "selfLink": "string",
      "status": "LIVE",
      "updated": "string",
      "url": "string"
    }
  ],
  "kind": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|blogUserInfos|[[BlogUserInfo](#schemabloguserinfo)]|false|none|Admin level list of blog per-user information.|
|items|[[Blog](#schemablog)]|false|none|The list of Blogs this user has Authorship or Admin rights over.|
|kind|string|false|none|The kind of this entity. Always blogger#blogList.|

<h2 id="tocS_BlogPerUserInfo">BlogPerUserInfo</h2>
<!-- backwards compatibility -->
<a id="schemablogperuserinfo"></a>
<a id="schema_BlogPerUserInfo"></a>
<a id="tocSblogperuserinfo"></a>
<a id="tocsblogperuserinfo"></a>

```json
{
  "blogId": "string",
  "hasAdminAccess": true,
  "kind": "string",
  "photosAlbumKey": "string",
  "role": "VIEW_TYPE_UNSPECIFIED",
  "userId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|blogId|string|false|none|ID of the Blog resource.|
|hasAdminAccess|boolean|false|none|True if the user has Admin level access to the blog.|
|kind|string|false|none|The kind of this entity. Always blogger#blogPerUserInfo.|
|photosAlbumKey|string|false|none|The Photo Album Key for the user when adding photos to the blog.|
|role|string|false|none|Access permissions that the user has for the blog (ADMIN, AUTHOR, or READER).|
|userId|string|false|none|ID of the User.|

#### Enumerated Values

|Property|Value|
|---|---|
|role|VIEW_TYPE_UNSPECIFIED|
|role|READER|
|role|AUTHOR|
|role|ADMIN|

<h2 id="tocS_BlogUserInfo">BlogUserInfo</h2>
<!-- backwards compatibility -->
<a id="schemabloguserinfo"></a>
<a id="schema_BlogUserInfo"></a>
<a id="tocSbloguserinfo"></a>
<a id="tocsbloguserinfo"></a>

```json
{
  "blog": {
    "customMetaData": "string",
    "description": "string",
    "id": "string",
    "kind": "string",
    "locale": {
      "country": "string",
      "language": "string",
      "variant": "string"
    },
    "name": "string",
    "pages": {
      "selfLink": "string",
      "totalItems": 0
    },
    "posts": {
      "items": [
        {
          "author": {
            "displayName": "string",
            "id": "string",
            "image": {
              "url": "string"
            },
            "url": "string"
          },
          "blog": {
            "id": "string"
          },
          "content": "string",
          "customMetaData": "string",
          "etag": "string",
          "id": "string",
          "images": [
            {
              "url": "string"
            }
          ],
          "kind": "string",
          "labels": [
            "string"
          ],
          "location": {
            "lat": 0,
            "lng": 0,
            "name": "string",
            "span": "string"
          },
          "published": "string",
          "readerComments": "ALLOW",
          "replies": {
            "items": [
              {
                "author": {
                  "displayName": "string",
                  "id": "string",
                  "image": {
                    "url": "string"
                  },
                  "url": "string"
                },
                "blog": {
                  "id": "string"
                },
                "content": "string",
                "id": "string",
                "inReplyTo": {
                  "id": "string"
                },
                "kind": "string",
                "post": {
                  "id": "string"
                },
                "published": "string",
                "selfLink": "string",
                "status": "LIVE",
                "updated": "string"
              }
            ],
            "selfLink": "string",
            "totalItems": "string"
          },
          "selfLink": "string",
          "status": "LIVE",
          "title": "string",
          "titleLink": "string",
          "trashed": "string",
          "updated": "string",
          "url": "string"
        }
      ],
      "selfLink": "string",
      "totalItems": 0
    },
    "published": "string",
    "selfLink": "string",
    "status": "LIVE",
    "updated": "string",
    "url": "string"
  },
  "blog_user_info": {
    "blogId": "string",
    "hasAdminAccess": true,
    "kind": "string",
    "photosAlbumKey": "string",
    "role": "VIEW_TYPE_UNSPECIFIED",
    "userId": "string"
  },
  "kind": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|blog|[Blog](#schemablog)|false|none|The Blog resource.|
|blog_user_info|[BlogPerUserInfo](#schemablogperuserinfo)|false|none|Information about a User for the Blog.|
|kind|string|false|none|The kind of this entity. Always blogger#blogUserInfo.|

<h2 id="tocS_Comment">Comment</h2>
<!-- backwards compatibility -->
<a id="schemacomment"></a>
<a id="schema_Comment"></a>
<a id="tocScomment"></a>
<a id="tocscomment"></a>

```json
{
  "author": {
    "displayName": "string",
    "id": "string",
    "image": {
      "url": "string"
    },
    "url": "string"
  },
  "blog": {
    "id": "string"
  },
  "content": "string",
  "id": "string",
  "inReplyTo": {
    "id": "string"
  },
  "kind": "string",
  "post": {
    "id": "string"
  },
  "published": "string",
  "selfLink": "string",
  "status": "LIVE",
  "updated": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|author|object|false|none|The author of this Comment.|
|blog|object|false|none|Data about the blog containing this comment.|
|content|string|false|none|The actual content of the comment. May include HTML markup.|
|id|string|false|none|The identifier for this resource.|
|inReplyTo|object|false|none|Data about the comment this is in reply to.|
|kind|string|false|none|The kind of this entry. Always blogger#comment.|
|post|object|false|none|Data about the post containing this comment.|
|published|string|false|none|RFC 3339 date-time when this comment was published.|
|selfLink|string|false|none|The API REST URL to fetch this resource from.|
|status|string|false|none|The status of the comment (only populated for admin users).|
|updated|string|false|none|RFC 3339 date-time when this comment was last updated.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|LIVE|
|status|EMPTIED|
|status|PENDING|
|status|SPAM|

<h2 id="tocS_CommentList">CommentList</h2>
<!-- backwards compatibility -->
<a id="schemacommentlist"></a>
<a id="schema_CommentList"></a>
<a id="tocScommentlist"></a>
<a id="tocscommentlist"></a>

```json
{
  "etag": "string",
  "items": [
    {
      "author": {
        "displayName": "string",
        "id": "string",
        "image": {
          "url": "string"
        },
        "url": "string"
      },
      "blog": {
        "id": "string"
      },
      "content": "string",
      "id": "string",
      "inReplyTo": {
        "id": "string"
      },
      "kind": "string",
      "post": {
        "id": "string"
      },
      "published": "string",
      "selfLink": "string",
      "status": "LIVE",
      "updated": "string"
    }
  ],
  "kind": "string",
  "nextPageToken": "string",
  "prevPageToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|etag|string|false|none|Etag of the response.|
|items|[[Comment](#schemacomment)]|false|none|The List of Comments for a Post.|
|kind|string|false|none|The kind of this entry. Always blogger#commentList.|
|nextPageToken|string|false|none|Pagination token to fetch the next page, if one exists.|
|prevPageToken|string|false|none|Pagination token to fetch the previous page, if one exists.|

<h2 id="tocS_Page">Page</h2>
<!-- backwards compatibility -->
<a id="schemapage"></a>
<a id="schema_Page"></a>
<a id="tocSpage"></a>
<a id="tocspage"></a>

```json
{
  "author": {
    "displayName": "string",
    "id": "string",
    "image": {
      "url": "string"
    },
    "url": "string"
  },
  "blog": {
    "id": "string"
  },
  "content": "string",
  "etag": "string",
  "id": "string",
  "kind": "string",
  "published": "string",
  "selfLink": "string",
  "status": "LIVE",
  "title": "string",
  "trashed": "string",
  "updated": "string",
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|author|object|false|none|The author of this Page.|
|blog|object|false|none|Data about the blog containing this Page.|
|content|string|false|none|The body content of this Page, in HTML.|
|etag|string|false|none|Etag of the resource.|
|id|string|false|none|The identifier for this resource.|
|kind|string|false|none|The kind of this entity. Always blogger#page.|
|published|string|false|none|RFC 3339 date-time when this Page was published.|
|selfLink|string|false|none|The API REST URL to fetch this resource from.|
|status|string|false|none|The status of the page for admin resources (either LIVE or DRAFT).|
|title|string|false|none|The title of this entity. This is the name displayed in the Admin user interface.|
|trashed|string|false|none|RFC 3339 date-time when this Page was trashed.|
|updated|string|false|none|RFC 3339 date-time when this Page was last updated.|
|url|string|false|none|The URL that this Page is displayed at.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|LIVE|
|status|DRAFT|
|status|SOFT_TRASHED|

<h2 id="tocS_PageList">PageList</h2>
<!-- backwards compatibility -->
<a id="schemapagelist"></a>
<a id="schema_PageList"></a>
<a id="tocSpagelist"></a>
<a id="tocspagelist"></a>

```json
{
  "etag": "string",
  "items": [
    {
      "author": {
        "displayName": "string",
        "id": "string",
        "image": {
          "url": "string"
        },
        "url": "string"
      },
      "blog": {
        "id": "string"
      },
      "content": "string",
      "etag": "string",
      "id": "string",
      "kind": "string",
      "published": "string",
      "selfLink": "string",
      "status": "LIVE",
      "title": "string",
      "trashed": "string",
      "updated": "string",
      "url": "string"
    }
  ],
  "kind": "string",
  "nextPageToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|etag|string|false|none|Etag of the response.|
|items|[[Page](#schemapage)]|false|none|The list of Pages for a Blog.|
|kind|string|false|none|The kind of this entity. Always blogger#pageList.|
|nextPageToken|string|false|none|Pagination token to fetch the next page, if one exists.|

<h2 id="tocS_Pageviews">Pageviews</h2>
<!-- backwards compatibility -->
<a id="schemapageviews"></a>
<a id="schema_Pageviews"></a>
<a id="tocSpageviews"></a>
<a id="tocspageviews"></a>

```json
{
  "blogId": "string",
  "counts": [
    {
      "count": "string",
      "timeRange": "ALL_TIME"
    }
  ],
  "kind": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|blogId|string|false|none|Blog Id.|
|counts|[object]|false|none|The container of posts in this blog.|
|kind|string|false|none|The kind of this entry. Always blogger#page_views.|

<h2 id="tocS_Post">Post</h2>
<!-- backwards compatibility -->
<a id="schemapost"></a>
<a id="schema_Post"></a>
<a id="tocSpost"></a>
<a id="tocspost"></a>

```json
{
  "author": {
    "displayName": "string",
    "id": "string",
    "image": {
      "url": "string"
    },
    "url": "string"
  },
  "blog": {
    "id": "string"
  },
  "content": "string",
  "customMetaData": "string",
  "etag": "string",
  "id": "string",
  "images": [
    {
      "url": "string"
    }
  ],
  "kind": "string",
  "labels": [
    "string"
  ],
  "location": {
    "lat": 0,
    "lng": 0,
    "name": "string",
    "span": "string"
  },
  "published": "string",
  "readerComments": "ALLOW",
  "replies": {
    "items": [
      {
        "author": {
          "displayName": "string",
          "id": "string",
          "image": {
            "url": "string"
          },
          "url": "string"
        },
        "blog": {
          "id": "string"
        },
        "content": "string",
        "id": "string",
        "inReplyTo": {
          "id": "string"
        },
        "kind": "string",
        "post": {
          "id": "string"
        },
        "published": "string",
        "selfLink": "string",
        "status": "LIVE",
        "updated": "string"
      }
    ],
    "selfLink": "string",
    "totalItems": "string"
  },
  "selfLink": "string",
  "status": "LIVE",
  "title": "string",
  "titleLink": "string",
  "trashed": "string",
  "updated": "string",
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|author|object|false|none|The author of this Post.|
|blog|object|false|none|Data about the blog containing this Post.|
|content|string|false|none|The content of the Post. May contain HTML markup.|
|customMetaData|string|false|none|The JSON meta-data for the Post.|
|etag|string|false|none|Etag of the resource.|
|id|string|false|none|The identifier of this Post.|
|images|[object]|false|none|Display image for the Post.|
|kind|string|false|none|The kind of this entity. Always blogger#post.|
|labels|[string]|false|none|The list of labels this Post was tagged with.|
|location|object|false|none|The location for geotagged posts.|
|published|string|false|none|RFC 3339 date-time when this Post was published.|
|readerComments|string|false|none|Comment control and display setting for readers of this post.|
|replies|object|false|none|The container of comments on this Post.|
|selfLink|string|false|none|The API REST URL to fetch this resource from.|
|status|string|false|none|Status of the post. Only set for admin-level requests.|
|title|string|false|none|The title of the Post.|
|titleLink|string|false|none|The title link URL, similar to atom's related link.|
|trashed|string|false|none|RFC 3339 date-time when this Post was last trashed.|
|updated|string|false|none|RFC 3339 date-time when this Post was last updated.|
|url|string|false|none|The URL where this Post is displayed.|

#### Enumerated Values

|Property|Value|
|---|---|
|readerComments|ALLOW|
|readerComments|DONT_ALLOW_SHOW_EXISTING|
|readerComments|DONT_ALLOW_HIDE_EXISTING|
|status|LIVE|
|status|DRAFT|
|status|SCHEDULED|
|status|SOFT_TRASHED|

<h2 id="tocS_PostList">PostList</h2>
<!-- backwards compatibility -->
<a id="schemapostlist"></a>
<a id="schema_PostList"></a>
<a id="tocSpostlist"></a>
<a id="tocspostlist"></a>

```json
{
  "etag": "string",
  "items": [
    {
      "author": {
        "displayName": "string",
        "id": "string",
        "image": {
          "url": "string"
        },
        "url": "string"
      },
      "blog": {
        "id": "string"
      },
      "content": "string",
      "customMetaData": "string",
      "etag": "string",
      "id": "string",
      "images": [
        {
          "url": "string"
        }
      ],
      "kind": "string",
      "labels": [
        "string"
      ],
      "location": {
        "lat": 0,
        "lng": 0,
        "name": "string",
        "span": "string"
      },
      "published": "string",
      "readerComments": "ALLOW",
      "replies": {
        "items": [
          {
            "author": {
              "displayName": "string",
              "id": "string",
              "image": {
                "url": "string"
              },
              "url": "string"
            },
            "blog": {
              "id": "string"
            },
            "content": "string",
            "id": "string",
            "inReplyTo": {
              "id": "string"
            },
            "kind": "string",
            "post": {
              "id": "string"
            },
            "published": "string",
            "selfLink": "string",
            "status": "LIVE",
            "updated": "string"
          }
        ],
        "selfLink": "string",
        "totalItems": "string"
      },
      "selfLink": "string",
      "status": "LIVE",
      "title": "string",
      "titleLink": "string",
      "trashed": "string",
      "updated": "string",
      "url": "string"
    }
  ],
  "kind": "string",
  "nextPageToken": "string",
  "prevPageToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|etag|string|false|none|Etag of the response.|
|items|[[Post](#schemapost)]|false|none|The list of Posts for this Blog.|
|kind|string|false|none|The kind of this entity. Always blogger#postList.|
|nextPageToken|string|false|none|Pagination token to fetch the next page, if one exists.|
|prevPageToken|string|false|none|Pagination token to fetch the previous page, if one exists.|

<h2 id="tocS_PostPerUserInfo">PostPerUserInfo</h2>
<!-- backwards compatibility -->
<a id="schemapostperuserinfo"></a>
<a id="schema_PostPerUserInfo"></a>
<a id="tocSpostperuserinfo"></a>
<a id="tocspostperuserinfo"></a>

```json
{
  "blogId": "string",
  "hasEditAccess": true,
  "kind": "string",
  "postId": "string",
  "userId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|blogId|string|false|none|ID of the Blog that the post resource belongs to.|
|hasEditAccess|boolean|false|none|True if the user has Author level access to the post.|
|kind|string|false|none|The kind of this entity. Always blogger#postPerUserInfo.|
|postId|string|false|none|ID of the Post resource.|
|userId|string|false|none|ID of the User.|

<h2 id="tocS_PostUserInfo">PostUserInfo</h2>
<!-- backwards compatibility -->
<a id="schemapostuserinfo"></a>
<a id="schema_PostUserInfo"></a>
<a id="tocSpostuserinfo"></a>
<a id="tocspostuserinfo"></a>

```json
{
  "kind": "string",
  "post": {
    "author": {
      "displayName": "string",
      "id": "string",
      "image": {
        "url": "string"
      },
      "url": "string"
    },
    "blog": {
      "id": "string"
    },
    "content": "string",
    "customMetaData": "string",
    "etag": "string",
    "id": "string",
    "images": [
      {
        "url": "string"
      }
    ],
    "kind": "string",
    "labels": [
      "string"
    ],
    "location": {
      "lat": 0,
      "lng": 0,
      "name": "string",
      "span": "string"
    },
    "published": "string",
    "readerComments": "ALLOW",
    "replies": {
      "items": [
        {
          "author": {
            "displayName": "string",
            "id": "string",
            "image": {
              "url": "string"
            },
            "url": "string"
          },
          "blog": {
            "id": "string"
          },
          "content": "string",
          "id": "string",
          "inReplyTo": {
            "id": "string"
          },
          "kind": "string",
          "post": {
            "id": "string"
          },
          "published": "string",
          "selfLink": "string",
          "status": "LIVE",
          "updated": "string"
        }
      ],
      "selfLink": "string",
      "totalItems": "string"
    },
    "selfLink": "string",
    "status": "LIVE",
    "title": "string",
    "titleLink": "string",
    "trashed": "string",
    "updated": "string",
    "url": "string"
  },
  "post_user_info": {
    "blogId": "string",
    "hasEditAccess": true,
    "kind": "string",
    "postId": "string",
    "userId": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kind|string|false|none|The kind of this entity. Always blogger#postUserInfo.|
|post|[Post](#schemapost)|false|none|The Post resource.|
|post_user_info|[PostPerUserInfo](#schemapostperuserinfo)|false|none|Information about a User for the Post.|

<h2 id="tocS_PostUserInfosList">PostUserInfosList</h2>
<!-- backwards compatibility -->
<a id="schemapostuserinfoslist"></a>
<a id="schema_PostUserInfosList"></a>
<a id="tocSpostuserinfoslist"></a>
<a id="tocspostuserinfoslist"></a>

```json
{
  "items": [
    {
      "kind": "string",
      "post": {
        "author": {
          "displayName": "string",
          "id": "string",
          "image": {
            "url": "string"
          },
          "url": "string"
        },
        "blog": {
          "id": "string"
        },
        "content": "string",
        "customMetaData": "string",
        "etag": "string",
        "id": "string",
        "images": [
          {
            "url": "string"
          }
        ],
        "kind": "string",
        "labels": [
          "string"
        ],
        "location": {
          "lat": 0,
          "lng": 0,
          "name": "string",
          "span": "string"
        },
        "published": "string",
        "readerComments": "ALLOW",
        "replies": {
          "items": [
            {
              "author": {
                "displayName": "string",
                "id": "string",
                "image": {
                  "url": "string"
                },
                "url": "string"
              },
              "blog": {
                "id": "string"
              },
              "content": "string",
              "id": "string",
              "inReplyTo": {
                "id": "string"
              },
              "kind": "string",
              "post": {
                "id": "string"
              },
              "published": "string",
              "selfLink": "string",
              "status": "LIVE",
              "updated": "string"
            }
          ],
          "selfLink": "string",
          "totalItems": "string"
        },
        "selfLink": "string",
        "status": "LIVE",
        "title": "string",
        "titleLink": "string",
        "trashed": "string",
        "updated": "string",
        "url": "string"
      },
      "post_user_info": {
        "blogId": "string",
        "hasEditAccess": true,
        "kind": "string",
        "postId": "string",
        "userId": "string"
      }
    }
  ],
  "kind": "string",
  "nextPageToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[PostUserInfo](#schemapostuserinfo)]|false|none|The list of Posts with User information for the post, for this Blog.|
|kind|string|false|none|The kind of this entity. Always blogger#postList.|
|nextPageToken|string|false|none|Pagination token to fetch the next page, if one exists.|

<h2 id="tocS_User">User</h2>
<!-- backwards compatibility -->
<a id="schemauser"></a>
<a id="schema_User"></a>
<a id="tocSuser"></a>
<a id="tocsuser"></a>

```json
{
  "about": "string",
  "blogs": {
    "selfLink": "string"
  },
  "created": "string",
  "displayName": "string",
  "id": "string",
  "kind": "string",
  "locale": {
    "country": "string",
    "language": "string",
    "variant": "string"
  },
  "selfLink": "string",
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|about|string|false|none|Profile summary information.|
|blogs|object|false|none|The container of blogs for this user.|
|created|string|false|none|The timestamp of when this profile was created, in seconds since epoch.|
|displayName|string|false|none|The display name.|
|id|string|false|none|The identifier for this User.|
|kind|string|false|none|The kind of this entity. Always blogger#user.|
|locale|object|false|none|This user's locale|
|selfLink|string|false|none|The API REST URL to fetch this resource from.|
|url|string|false|none|The user's profile page.|
