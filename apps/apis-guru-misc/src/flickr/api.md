<h1 id="flickr-api-schema">Flickr API Schema v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

A subset of Flickr's API defined in Swagger format.

Base URLs:

* <a href="https://api.flickr.com/services">https://api.flickr.com/services</a>

<a href="https://www.flickr.com/services/api/tos/">Terms of service</a>

<h1 id="flickr-api-schema-public">Public</h1>

## getAccessToken

<a id="opIdgetAccessToken"></a>

> Code samples

```bash
curl 'https://example.com/oauth/access_token?oauth_consumer_key=string&oauth_nonce=string&oauth_timestamp=string&oauth_signature_method=string&oauth_version=string&oauth_signature=string&oauth_verifier=string&oauth_token=string' \
  -H 'Accept: application/json'
```

`GET /oauth/access_token`

Returns an access token

<h3 id="getaccesstoken-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|oauth_consumer_key|query|string|true|none|
|oauth_nonce|query|string|true|none|
|oauth_timestamp|query|string|true|none|
|oauth_signature_method|query|string|true|none|
|oauth_version|query|string|true|none|
|oauth_signature|query|string|true|none|
|oauth_verifier|query|string|true|none|
|oauth_token|query|string|true|none|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="getaccesstoken-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## getRequestToken

<a id="opIdgetRequestToken"></a>

> Code samples

```bash
curl 'https://example.com/oauth/request_token?oauth_consumer_key=string&oauth_nonce=string&oauth_timestamp=string&oauth_signature_method=string&oauth_version=string&oauth_signature=string&oauth_callback=string' \
  -H 'Accept: application/json'
```

`GET /oauth/request_token`

Returns an oauth token and oauth token secret

<h3 id="getrequesttoken-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|oauth_consumer_key|query|string|true|none|
|oauth_nonce|query|string|true|none|
|oauth_timestamp|query|string|true|none|
|oauth_signature_method|query|string|true|none|
|oauth_version|query|string|true|none|
|oauth_signature|query|string|true|none|
|oauth_callback|query|string|true|none|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="getrequesttoken-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## getFavoritesContextByID

<a id="opIdgetFavoritesContextByID"></a>

> Code samples

```bash
curl 'https://example.com/rest?method=flickr.favorites.getContext?api_key=string&photo_id=string' \
  -H 'Accept: application/json'
```

`GET /rest?method=flickr.favorites.getContext`

Returns next and previous favorites for a photo in a user's favorites

<h3 id="getfavoritescontextbyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api_key|query|string|true|none|
|photo_id|query|string|true|none|
|user_id|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "count": {
    "_content": "string"
  },
  "nextphoto": {
    "farm": "string",
    "id": "string",
    "is_faved": true,
    "license": 0,
    "media": "string",
    "owner": "string",
    "safe": true,
    "secret": "string",
    "server": "string",
    "thumb": "string",
    "title": "string",
    "url": "string"
  },
  "prevphoto": {
    "farm": "string",
    "id": "string",
    "is_faved": true,
    "license": 0,
    "media": "string",
    "owner": "string",
    "safe": true,
    "secret": "string",
    "server": "string",
    "thumb": "string",
    "title": "string",
    "url": "string"
  },
  "stat": "string"
}
```

<h3 id="getfavoritescontextbyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getfavoritescontextbyid-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|object|false|none|none|
|» _content|string|false|none|none|
|nextphoto|[ContextPhoto](#schemacontextphoto)|false|none|none|
|prevphoto|[ContextPhoto](#schemacontextphoto)|false|none|none|
|stat|[Stat](#schemastat)|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## getFavoritesByPersonID

<a id="opIdgetFavoritesByPersonID"></a>

> Code samples

```bash
curl 'https://example.com/rest?method=flickr.favorites.getList?api_key=string&user_id=string' \
  -H 'Accept: application/json'
```

`GET /rest?method=flickr.favorites.getList`

Returns a list of the user's favorite photos. Only photos which the calling user has permission to see are returned.

<h3 id="getfavoritesbypersonid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api_key|query|string|true|none|
|user_id|query|string|true|none|
|min_fave_date|query|number|false|none|
|max_fave_date|query|number|false|none|
|page|query|number|false|none|
|per_page|query|number|false|none|

> Example responses

> 200 Response

```json
{
  "page": 0,
  "pages": 0,
  "perpage": 0,
  "photos": [
    {
      "comments": {
        "_content": "string"
      },
      "dates": {
        "lastupdate": "string",
        "posted": "string",
        "taken": "string",
        "takengranularity": "string",
        "takenunknown": true
      },
      "dateuploaded": "string",
      "description": {
        "_content": "string"
      },
      "editability": {
        "canaddmeta": true,
        "cancomment": true
      },
      "farm": "string",
      "id": "string",
      "isfavorite": true,
      "license": "string",
      "media": "string",
      "notes": {
        "note": [
          {
            "description": "string"
          }
        ]
      },
      "originalsecret": "string",
      "owner": {
        "iconfarm": "string",
        "iconserver": "string",
        "is_ad_free": true,
        "ispro": true,
        "location": "string",
        "noindexfollow": true,
        "nsid": "string",
        "path_alias": "string",
        "realname": "string",
        "username": "string"
      },
      "people": {
        "haspeople": true
      },
      "permissions": {
        "permaddmeta": "string",
        "permcomment": "string"
      },
      "publiceditability": {
        "canaddmeta": true,
        "cancomment": true
      },
      "rotation": "string",
      "safe": true,
      "safety_level": "string",
      "secret": "string",
      "server": "string",
      "tags": {
        "tag": [
          {
            "_content": "string",
            "author": "string",
            "authorname": "string",
            "id": "string",
            "machine_tag": true,
            "raw": "string"
          }
        ]
      },
      "title": {
        "_content": "string"
      },
      "urls": {
        "url": [
          {
            "_content": "string",
            "type": "string"
          }
        ]
      },
      "usage": {
        "canblog": true,
        "candownload": true,
        "canprint": true,
        "canshare": true
      },
      "views": "string",
      "visibility": {
        "isfamily": true,
        "isfriend": true,
        "ispublic": true
      }
    }
  ],
  "total": 0
}
```

<h3 id="getfavoritesbypersonid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getfavoritesbypersonid-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|page|number|false|none|none|
|pages|number|false|none|none|
|perpage|number|false|none|none|
|photos|[[Photo](#schemaphoto)]|false|none|none|
|total|number|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## getGalleryPhotosByID

<a id="opIdgetGalleryPhotosByID"></a>

> Code samples

```bash
curl 'https://example.com/rest?method=flickr.galleries.getPhotos?api_key=string&gallery_id=string' \
  -H 'Accept: application/json'
```

`GET /rest?method=flickr.galleries.getPhotos`

Returns a list of photos in a gallery.

<h3 id="getgalleryphotosbyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api_key|query|string|true|none|
|gallery_id|query|string|true|none|

> Example responses

> 200 Response

```json
{
  "photos": [
    {
      "comments": {
        "_content": "string"
      },
      "dates": {
        "lastupdate": "string",
        "posted": "string",
        "taken": "string",
        "takengranularity": "string",
        "takenunknown": true
      },
      "dateuploaded": "string",
      "description": {
        "_content": "string"
      },
      "editability": {
        "canaddmeta": true,
        "cancomment": true
      },
      "farm": "string",
      "id": "string",
      "isfavorite": true,
      "license": "string",
      "media": "string",
      "notes": {
        "note": [
          {
            "description": "string"
          }
        ]
      },
      "originalsecret": "string",
      "owner": {
        "iconfarm": "string",
        "iconserver": "string",
        "is_ad_free": true,
        "ispro": true,
        "location": "string",
        "noindexfollow": true,
        "nsid": "string",
        "path_alias": "string",
        "realname": "string",
        "username": "string"
      },
      "people": {
        "haspeople": true
      },
      "permissions": {
        "permaddmeta": "string",
        "permcomment": "string"
      },
      "publiceditability": {
        "canaddmeta": true,
        "cancomment": true
      },
      "rotation": "string",
      "safe": true,
      "safety_level": "string",
      "secret": "string",
      "server": "string",
      "tags": {
        "tag": [
          {
            "_content": "string",
            "author": "string",
            "authorname": "string",
            "id": "string",
            "machine_tag": true,
            "raw": "string"
          }
        ]
      },
      "title": {
        "_content": "string"
      },
      "urls": {
        "url": [
          {
            "_content": "string",
            "type": "string"
          }
        ]
      },
      "usage": {
        "canblog": true,
        "candownload": true,
        "canprint": true,
        "canshare": true
      },
      "views": "string",
      "visibility": {
        "isfamily": true,
        "isfriend": true,
        "ispublic": true
      }
    }
  ]
}
```

<h3 id="getgalleryphotosbyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getgalleryphotosbyid-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|photos|[[Photo](#schemaphoto)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## getGroupTopicRepliesByID

<a id="opIdgetGroupTopicRepliesByID"></a>

> Code samples

```bash
curl 'https://example.com/rest?method=flickr.groups.discuss.replies.getInfo?api_key=string&topic_id=string&reply_id=string' \
  -H 'Accept: application/json'
```

`GET /rest?method=flickr.groups.discuss.replies.getInfo`

Get information on a group topic reply

<h3 id="getgrouptopicrepliesbyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api_key|query|string|true|none|
|group_id|query|string|false|none|
|topic_id|query|string|true|none|
|reply_id|query|string|true|none|

> Example responses

> 200 Response

```json
{
  "reply": {
    "author": "string",
    "author_is_deleted": true,
    "author_path_alias": "string",
    "authorname": "string",
    "can_delete": true,
    "can_edit": true,
    "datecreate": "string",
    "iconfarm": "string",
    "iconserver": "string",
    "id": "string",
    "is_pro": true,
    "lastedit": "string",
    "message": {
      "_content": "string"
    }
  },
  "stat": "string"
}
```

<h3 id="getgrouptopicrepliesbyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getgrouptopicrepliesbyid-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reply|[TopicReply](#schematopicreply)|false|none|none|
|stat|[Stat](#schemastat)|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## getGroupTopicByID

<a id="opIdgetGroupTopicByID"></a>

> Code samples

```bash
curl 'https://example.com/rest?method=flickr.groups.discuss.topics.getInfo?api_key=string&topic_id=string' \
  -H 'Accept: application/json'
```

`GET /rest?method=flickr.groups.discuss.topics.getInfo`

Get information about a group discussion topic

<h3 id="getgrouptopicbyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api_key|query|string|true|none|
|group_id|query|string|false|none|
|topic_id|query|string|true|none|

> Example responses

> 200 Response

```json
{
  "stat": "string",
  "topic": {
    "author": "string",
    "author_is_deleted": true,
    "author_path_alias": "string",
    "authorname": "string",
    "can_delete": true,
    "can_edit": true,
    "can_reply": true,
    "count_replies": 0,
    "datecreate": "string",
    "datelastpost": "string",
    "iconfarm": "string",
    "iconserver": "string",
    "id": "string",
    "is_locked": true,
    "is_pro": true,
    "is_sticky": true,
    "last_reply": "string",
    "lastedit": "string",
    "message": {
      "_content": "string"
    },
    "role": "string",
    "subject": "string"
  }
}
```

<h3 id="getgrouptopicbyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getgrouptopicbyid-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|stat|[Stat](#schemastat)|false|none|none|
|topic|[Topic](#schematopic)|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## getGroupDiscussionsByID

<a id="opIdgetGroupDiscussionsByID"></a>

> Code samples

```bash
curl 'https://example.com/rest?method=flickr.groups.discuss.topics.getList?api_key=string' \
  -H 'Accept: application/json'
```

`GET /rest?method=flickr.groups.discuss.topics.getList`

Get a list of discussion topics in a group.

<h3 id="getgroupdiscussionsbyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api_key|query|string|true|none|
|group_id|query|string|false|none|
|page|query|number|false|none|
|per_page|query|number|false|none|

> Example responses

> 200 Response

```json
{
  "iconfarm": 0,
  "iconserver": 0,
  "ispoolmoderated": true,
  "lang": "string",
  "members": 0,
  "name": "string",
  "page": 0,
  "pages": 0,
  "per_page": 0,
  "privacy": 0,
  "topics": [
    {
      "author": "string",
      "author_is_deleted": true,
      "author_path_alias": "string",
      "authorname": "string",
      "can_delete": true,
      "can_edit": true,
      "can_reply": true,
      "count_replies": 0,
      "datecreate": "string",
      "datelastpost": "string",
      "iconfarm": "string",
      "iconserver": "string",
      "id": "string",
      "is_locked": true,
      "is_pro": true,
      "is_sticky": true,
      "last_reply": "string",
      "lastedit": "string",
      "message": {
        "_content": "string"
      },
      "role": "string",
      "subject": "string"
    }
  ],
  "total": 0
}
```

<h3 id="getgroupdiscussionsbyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getgroupdiscussionsbyid-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|iconfarm|number|false|none|none|
|iconserver|number|false|none|none|
|ispoolmoderated|boolean|false|none|none|
|lang|string|false|none|none|
|members|number|false|none|none|
|name|string|false|none|none|
|page|number|false|none|none|
|pages|number|false|none|none|
|per_page|number|false|none|none|
|privacy|number|false|none|none|
|topics|[[Topic](#schematopic)]|false|none|none|
|total|number|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## getGroupByID

<a id="opIdgetGroupByID"></a>

> Code samples

```bash
curl 'https://example.com/rest?method=flickr.groups.getInfo?api_key=string' \
  -H 'Accept: application/json'
```

`GET /rest?method=flickr.groups.getInfo`

Get information about a group

<h3 id="getgroupbyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api_key|query|string|true|none|
|group_id|query|string|false|none|
|group_path_alias|query|string|false|none|
|lang|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "group": {
    "blast": {
      "_content": "string",
      "date_blast_added": "string",
      "user_id": "string"
    },
    "cover": {
      "farm": "string",
      "id": "string",
      "isfamily": true,
      "isfriend": true,
      "ispublic": true,
      "owner": "string",
      "secret": "string",
      "server": "string",
      "title": "string",
      "y": "string"
    },
    "coverphoto_farm": "string",
    "coverphoto_server": "string",
    "coverphoto_url": {
      "h": "string",
      "l": "string",
      "s": "string",
      "t": "string"
    },
    "description": {
      "_content": "string"
    },
    "iconfarm": "string",
    "iconserver": "string",
    "id": "string",
    "is_admin": true,
    "is_member": true,
    "is_moderator": true,
    "ispoolmoderated": true,
    "lang": "string",
    "members": {
      "_content": "string"
    },
    "name": {
      "_content": "string"
    },
    "path_alias": "string",
    "pool_count": {
      "_content": "string"
    },
    "pool_rows": 0,
    "privacy": {
      "_content": "string"
    },
    "restrictions": {
      "art_ok": true,
      "has_geo": true,
      "images_ok": true,
      "moderate_ok": true,
      "photos_ok": true,
      "restricted_ok": true,
      "safe_ok": true,
      "screens_ok": true,
      "videos_ok": true
    },
    "roles": {
      "admin": "string",
      "member": "string",
      "moderator": "string"
    },
    "rules": {
      "_content": "string"
    },
    "throttle": {
      "count": 0,
      "mode": "string",
      "remaining": "string"
    },
    "topic_count": {
      "_content": "string"
    }
  },
  "stat": "string"
}
```

<h3 id="getgroupbyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getgroupbyid-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|group|[Group](#schemagroup)|false|none|none|
|stat|[Stat](#schemastat)|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## get/rest?method=flickr.groups.pools.getContext

> Code samples

```bash
curl 'https://example.com/rest?method=flickr.groups.pools.getContext?api_key=string&photo_id=string' \
  -H 'Accept: application/json'
```

`GET /rest?method=flickr.groups.pools.getContext`

Returns next and previous photos for a photo in a group pool

<h3 id="getrestmethodflickrgroupspoolsgetcontext-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api_key|query|string|true|none|
|photo_id|query|string|true|none|
|group_id|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "count": {
    "_content": "string"
  },
  "nextphoto": {
    "farm": "string",
    "id": "string",
    "is_faved": true,
    "license": 0,
    "media": "string",
    "owner": "string",
    "safe": true,
    "secret": "string",
    "server": "string",
    "thumb": "string",
    "title": "string",
    "url": "string"
  },
  "prevphoto": {
    "farm": "string",
    "id": "string",
    "is_faved": true,
    "license": 0,
    "media": "string",
    "owner": "string",
    "safe": true,
    "secret": "string",
    "server": "string",
    "thumb": "string",
    "title": "string",
    "url": "string"
  },
  "stat": "string"
}
```

<h3 id="getrestmethodflickrgroupspoolsgetcontext-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getrestmethodflickrgroupspoolsgetcontext-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|object|false|none|none|
|» _content|string|false|none|none|
|nextphoto|[ContextPhoto](#schemacontextphoto)|false|none|none|
|prevphoto|[ContextPhoto](#schemacontextphoto)|false|none|none|
|stat|[Stat](#schemastat)|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## getGroupPhotosByID

<a id="opIdgetGroupPhotosByID"></a>

> Code samples

```bash
curl 'https://example.com/rest?method=flickr.groups.pools.getPhotos?api_key=string' \
  -H 'Accept: application/json'
```

`GET /rest?method=flickr.groups.pools.getPhotos`

Returns a list of pool photos for a given group

<h3 id="getgroupphotosbyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api_key|query|string|true|none|
|group_id|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "photos": [
    {
      "comments": {
        "_content": "string"
      },
      "dates": {
        "lastupdate": "string",
        "posted": "string",
        "taken": "string",
        "takengranularity": "string",
        "takenunknown": true
      },
      "dateuploaded": "string",
      "description": {
        "_content": "string"
      },
      "editability": {
        "canaddmeta": true,
        "cancomment": true
      },
      "farm": "string",
      "id": "string",
      "isfavorite": true,
      "license": "string",
      "media": "string",
      "notes": {
        "note": [
          {
            "description": "string"
          }
        ]
      },
      "originalsecret": "string",
      "owner": {
        "iconfarm": "string",
        "iconserver": "string",
        "is_ad_free": true,
        "ispro": true,
        "location": "string",
        "noindexfollow": true,
        "nsid": "string",
        "path_alias": "string",
        "realname": "string",
        "username": "string"
      },
      "people": {
        "haspeople": true
      },
      "permissions": {
        "permaddmeta": "string",
        "permcomment": "string"
      },
      "publiceditability": {
        "canaddmeta": true,
        "cancomment": true
      },
      "rotation": "string",
      "safe": true,
      "safety_level": "string",
      "secret": "string",
      "server": "string",
      "tags": {
        "tag": [
          {
            "_content": "string",
            "author": "string",
            "authorname": "string",
            "id": "string",
            "machine_tag": true,
            "raw": "string"
          }
        ]
      },
      "title": {
        "_content": "string"
      },
      "urls": {
        "url": [
          {
            "_content": "string",
            "type": "string"
          }
        ]
      },
      "usage": {
        "canblog": true,
        "candownload": true,
        "canprint": true,
        "canshare": true
      },
      "views": "string",
      "visibility": {
        "isfamily": true,
        "isfriend": true,
        "ispublic": true
      }
    }
  ]
}
```

<h3 id="getgroupphotosbyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getgroupphotosbyid-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|photos|[[Photo](#schemaphoto)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## getPersonByID

<a id="opIdgetPersonByID"></a>

> Code samples

```bash
curl 'https://example.com/rest?method=flickr.people.getInfo?api_key=string' \
  -H 'Accept: application/json'
```

`GET /rest?method=flickr.people.getInfo`

Returns a person

<h3 id="getpersonbyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api_key|query|string|true|none|
|user_id|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "person": {
    "can_buy_pro": true,
    "cover": {
      "farm": "string",
      "id": "string",
      "isfamily": true,
      "isfriend": true,
      "ispublic": true,
      "owner": "string",
      "secret": "string",
      "server": "string",
      "title": "string",
      "y": "string"
    },
    "coverphoto": {
      "h": "string",
      "l": "string",
      "s": "string",
      "t": "string"
    },
    "coverphoto_farm": "string",
    "coverphoto_server": "string",
    "description": {
      "_content": "string"
    },
    "disable_keyboard_shortcuts": {
      "_content": "string"
    },
    "expire": true,
    "has_stats": true,
    "iconfarm": "string",
    "iconserver": "string",
    "id": "string",
    "is_ad_free": true,
    "ispro": true,
    "location": {
      "_content": "string"
    },
    "mbox_sha1sum": {
      "_content": "string"
    },
    "mobileurl": {
      "_content": "string"
    },
    "nsid": "string",
    "path_alias": "string",
    "photos": {
      "count": {
        "_content": "string"
      },
      "firstdate": {
        "_content": "string"
      },
      "firstdatetaken": {
        "_content": "string"
      },
      "views": {
        "_content": "string"
      }
    },
    "photosurl": {
      "_content": "string"
    },
    "profileurl": {
      "_content": "string"
    },
    "realname": {
      "_content": "string"
    },
    "timezone": {
      "label": "string",
      "offset": "string",
      "timezone_id": "string"
    },
    "unread_messages": {
      "_content": "string"
    },
    "user_secret": "string",
    "username": {
      "_content": "string"
    },
    "yintl": "string"
  },
  "stat": "string"
}
```

<h3 id="getpersonbyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getpersonbyid-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|person|[Person](#schemaperson)|false|none|none|
|stat|[Stat](#schemastat)|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## getMediaByPersonID

<a id="opIdgetMediaByPersonID"></a>

> Code samples

```bash
curl 'https://example.com/rest?method=flickr.people.getPhotos?api_key=string&user_id=string' \
  -H 'Accept: application/json'
```

`GET /rest?method=flickr.people.getPhotos`

Return photos from the given user's photostream

<h3 id="getmediabypersonid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api_key|query|string|true|none|
|user_id|query|string|true|none|
|safe_search|query|number|false|none|
|min_upload_date|query|number|false|none|
|max_upload_date|query|number|false|none|
|min_taken_date|query|number|false|none|
|max_taken_date|query|number|false|none|
|content_type|query|number|false|none|
|privacy_filter|query|number|false|none|
|page|query|number|false|none|
|per_page|query|number|false|none|

> Example responses

> 200 Response

```json
{
  "page": 0,
  "pages": 0,
  "perpage": 0,
  "photos": [
    {
      "comments": {
        "_content": "string"
      },
      "dates": {
        "lastupdate": "string",
        "posted": "string",
        "taken": "string",
        "takengranularity": "string",
        "takenunknown": true
      },
      "dateuploaded": "string",
      "description": {
        "_content": "string"
      },
      "editability": {
        "canaddmeta": true,
        "cancomment": true
      },
      "farm": "string",
      "id": "string",
      "isfavorite": true,
      "license": "string",
      "media": "string",
      "notes": {
        "note": [
          {
            "description": "string"
          }
        ]
      },
      "originalsecret": "string",
      "owner": {
        "iconfarm": "string",
        "iconserver": "string",
        "is_ad_free": true,
        "ispro": true,
        "location": "string",
        "noindexfollow": true,
        "nsid": "string",
        "path_alias": "string",
        "realname": "string",
        "username": "string"
      },
      "people": {
        "haspeople": true
      },
      "permissions": {
        "permaddmeta": "string",
        "permcomment": "string"
      },
      "publiceditability": {
        "canaddmeta": true,
        "cancomment": true
      },
      "rotation": "string",
      "safe": true,
      "safety_level": "string",
      "secret": "string",
      "server": "string",
      "tags": {
        "tag": [
          {
            "_content": "string",
            "author": "string",
            "authorname": "string",
            "id": "string",
            "machine_tag": true,
            "raw": "string"
          }
        ]
      },
      "title": {
        "_content": "string"
      },
      "urls": {
        "url": [
          {
            "_content": "string",
            "type": "string"
          }
        ]
      },
      "usage": {
        "canblog": true,
        "candownload": true,
        "canprint": true,
        "canshare": true
      },
      "views": "string",
      "visibility": {
        "isfamily": true,
        "isfriend": true,
        "ispublic": true
      }
    }
  ],
  "total": 0
}
```

<h3 id="getmediabypersonid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getmediabypersonid-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|page|number|false|none|none|
|pages|number|false|none|none|
|perpage|number|false|none|none|
|photos|[[Photo](#schemaphoto)]|false|none|none|
|total|number|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## getPhotolistContextByID

<a id="opIdgetPhotolistContextByID"></a>

> Code samples

```bash
curl 'https://example.com/rest?method=flickr.photolist.getContext?api_key=string&photo_id=string&photolist_id=string' \
  -H 'Accept: application/json'
```

`GET /rest?method=flickr.photolist.getContext`

Returns next and previous photos in a photo list

<h3 id="getphotolistcontextbyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api_key|query|string|true|none|
|photo_id|query|string|true|none|
|photolist_id|query|string|true|none|

> Example responses

> 200 Response

```json
{
  "count": {
    "_content": "string"
  },
  "nextphoto": {
    "farm": "string",
    "id": "string",
    "is_faved": true,
    "license": 0,
    "media": "string",
    "owner": "string",
    "safe": true,
    "secret": "string",
    "server": "string",
    "thumb": "string",
    "title": "string",
    "url": "string"
  },
  "prevphoto": {
    "farm": "string",
    "id": "string",
    "is_faved": true,
    "license": 0,
    "media": "string",
    "owner": "string",
    "safe": true,
    "secret": "string",
    "server": "string",
    "thumb": "string",
    "title": "string",
    "url": "string"
  },
  "stat": "string"
}
```

<h3 id="getphotolistcontextbyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getphotolistcontextbyid-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|object|false|none|none|
|» _content|string|false|none|none|
|nextphoto|[ContextPhoto](#schemacontextphoto)|false|none|none|
|prevphoto|[ContextPhoto](#schemacontextphoto)|false|none|none|
|stat|[Stat](#schemastat)|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## getPhotostreamContextByID

<a id="opIdgetPhotostreamContextByID"></a>

> Code samples

```bash
curl 'https://example.com/rest?method=flickr.photos.getContext?api_key=string&photo_id=string' \
  -H 'Accept: application/json'
```

`GET /rest?method=flickr.photos.getContext`

Returns next and previous photos for a photo in a photostream

<h3 id="getphotostreamcontextbyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api_key|query|string|true|none|
|photo_id|query|string|true|none|

> Example responses

> 200 Response

```json
{
  "count": {
    "_content": "string"
  },
  "nextphoto": {
    "farm": "string",
    "id": "string",
    "is_faved": true,
    "license": 0,
    "media": "string",
    "owner": "string",
    "safe": true,
    "secret": "string",
    "server": "string",
    "thumb": "string",
    "title": "string",
    "url": "string"
  },
  "prevphoto": {
    "farm": "string",
    "id": "string",
    "is_faved": true,
    "license": 0,
    "media": "string",
    "owner": "string",
    "safe": true,
    "secret": "string",
    "server": "string",
    "thumb": "string",
    "title": "string",
    "url": "string"
  },
  "stat": "string"
}
```

<h3 id="getphotostreamcontextbyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getphotostreamcontextbyid-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|object|false|none|none|
|» _content|string|false|none|none|
|nextphoto|[ContextPhoto](#schemacontextphoto)|false|none|none|
|prevphoto|[ContextPhoto](#schemacontextphoto)|false|none|none|
|stat|[Stat](#schemastat)|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## getPhotoExifByID

<a id="opIdgetPhotoExifByID"></a>

> Code samples

```bash
curl 'https://example.com/rest?method=flickr.photos.getExif?api_key=string&photo_id=string' \
  -H 'Accept: application/json'
```

`GET /rest?method=flickr.photos.getExif`

Retrieves a list of EXIF/TIFF/GPS tags for a given photo. The calling user must have permission to view the photo.

<h3 id="getphotoexifbyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api_key|query|string|true|none|
|photo_id|query|string|true|none|
|secret|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "photo": {
    "camera": "string",
    "exif": [
      {
        "label": "string",
        "raw": {
          "_content": "string"
        },
        "tag": "string",
        "tagspace": "string",
        "tagspaceid": "string"
      }
    ],
    "farm": "string",
    "id": "string",
    "secret": "string",
    "server": "string"
  },
  "stat": "string"
}
```

<h3 id="getphotoexifbyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getphotoexifbyid-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|photo|object|false|none|none|
|» camera|string|false|none|none|
|» exif|[object]|false|none|none|
|» » label|string|false|none|none|
|» » raw|object|false|none|none|
|» » » _content|string|false|none|none|
|» » tag|string|false|none|none|
|» » tagspace|string|false|none|none|
|» » tagspaceid|string|false|none|none|
|» farm|string|false|none|none|
|» id|string|false|none|none|
|» secret|string|false|none|none|
|» server|string|false|none|none|
|stat|[Stat](#schemastat)|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## getPhotoByID

<a id="opIdgetPhotoByID"></a>

> Code samples

```bash
curl 'https://example.com/rest?method=flickr.photos.getInfo?api_key=string&photo_id=string' \
  -H 'Accept: application/json'
```

`GET /rest?method=flickr.photos.getInfo`

Returns a photo

<h3 id="getphotobyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api_key|query|string|true|none|
|photo_id|query|string|true|none|

> Example responses

> 200 Response

```json
{
  "photo": {
    "comments": {
      "_content": "string"
    },
    "dates": {
      "lastupdate": "string",
      "posted": "string",
      "taken": "string",
      "takengranularity": "string",
      "takenunknown": true
    },
    "dateuploaded": "string",
    "description": {
      "_content": "string"
    },
    "editability": {
      "canaddmeta": true,
      "cancomment": true
    },
    "farm": "string",
    "id": "string",
    "isfavorite": true,
    "license": "string",
    "media": "string",
    "notes": {
      "note": [
        {
          "description": "string"
        }
      ]
    },
    "originalsecret": "string",
    "owner": {
      "iconfarm": "string",
      "iconserver": "string",
      "is_ad_free": true,
      "ispro": true,
      "location": "string",
      "noindexfollow": true,
      "nsid": "string",
      "path_alias": "string",
      "realname": "string",
      "username": "string"
    },
    "people": {
      "haspeople": true
    },
    "permissions": {
      "permaddmeta": "string",
      "permcomment": "string"
    },
    "publiceditability": {
      "canaddmeta": true,
      "cancomment": true
    },
    "rotation": "string",
    "safe": true,
    "safety_level": "string",
    "secret": "string",
    "server": "string",
    "tags": {
      "tag": [
        {
          "_content": "string",
          "author": "string",
          "authorname": "string",
          "id": "string",
          "machine_tag": true,
          "raw": "string"
        }
      ]
    },
    "title": {
      "_content": "string"
    },
    "urls": {
      "url": [
        {
          "_content": "string",
          "type": "string"
        }
      ]
    },
    "usage": {
      "canblog": true,
      "candownload": true,
      "canprint": true,
      "canshare": true
    },
    "views": "string",
    "visibility": {
      "isfamily": true,
      "isfriend": true,
      "ispublic": true
    }
  },
  "stat": "string"
}
```

<h3 id="getphotobyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|a photo|Inline|

<h3 id="getphotobyid-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|photo|[Photo](#schemaphoto)|false|none|none|
|stat|[Stat](#schemastat)|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## getPhotoSizesByID

<a id="opIdgetPhotoSizesByID"></a>

> Code samples

```bash
curl 'https://example.com/rest?method=flickr.photos.getSizes?api_key=string&photo_id=string' \
  -H 'Accept: application/json'
```

`GET /rest?method=flickr.photos.getSizes`

Returns photo sizes

<h3 id="getphotosizesbyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api_key|query|string|true|none|
|photo_id|query|string|true|none|

> Example responses

> 200 Response

```json
{
  "sizes": {
    "canblog": 0,
    "candownload": 0,
    "canprint": 0,
    "sizes": [
      {
        "height": 0,
        "label": "string",
        "media": "string",
        "source": "string",
        "url": "string",
        "width": 0
      }
    ]
  },
  "stat": "string"
}
```

<h3 id="getphotosizesbyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Photo sizes|Inline|

<h3 id="getphotosizesbyid-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sizes|object|false|none|none|
|» canblog|number|false|none|none|
|» candownload|number|false|none|none|
|» canprint|number|false|none|none|
|» sizes|[[Size](#schemasize)]|false|none|none|
|stat|[Stat](#schemastat)|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## getLicenseByID

<a id="opIdgetLicenseByID"></a>

> Code samples

```bash
curl 'https://example.com/rest?method=flickr.photos.licenses.getInfo?api_key=string' \
  -H 'Accept: application/json'
```

`GET /rest?method=flickr.photos.licenses.getInfo`

Fetches a list of available photo licenses for Flickr

<h3 id="getlicensebyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api_key|query|string|true|none|

> Example responses

> 200 Response

```json
{
  "licenses": {
    "license": [
      {
        "id": 0,
        "name": "string",
        "url": "string"
      }
    ]
  },
  "stat": "string"
}
```

<h3 id="getlicensebyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getlicensebyid-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|licenses|object|false|none|none|
|» license|[object]|false|none|none|
|» » id|integer|false|none|none|
|» » name|string|false|none|none|
|» » url|string|false|none|none|
|stat|[Stat](#schemastat)|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## getMediaBySearch

<a id="opIdgetMediaBySearch"></a>

> Code samples

```bash
curl 'https://example.com/rest?method=flickr.photos.search?api_key=string' \
  -H 'Accept: application/json'
```

`GET /rest?method=flickr.photos.search`

Return a list of photos matching some criteria.

<h3 id="getmediabysearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api_key|query|string|true|none|
|text|query|string|false|A free text search. Photos who's title, description or tags contain the text will be returned. You can exclude results that match a term by prepending it with a - character.|
|tags|query|string|false|A comma-delimited list of tags. Photos with one or more of the tags listed will be returned. You can exclude results that match a term by prepending it with a - character.|
|user_id|query|string|false|The NSID of the user who's photo to search. If this parameter isn't passed then everybody's public photos will be searched. A value of "me" will search against the calling user's photos for authenticated calls.|
|min_upload_date|query|string|false|Minimum upload date. Photos with an upload date greater than or equal to this value will be returned. The date can be in the form of a unix timestamp or mysql datetime.|
|max_upload_date|query|string|false|Maximum upload date. Photos with an upload date less than or equal to this value will be returned. The date can be in the form of a unix timestamp or mysql datetime.|
|min_taken_date|query|string|false|Minimum taken date. Photos with an taken date greater than or equal to this value will be returned. The date can be in the form of a mysql datetime or unix timestamp.|
|max_taken_date|query|string|false|Maximum taken date. Photos with an taken date less than or equal to this value will be returned. The date can be in the form of a mysql datetime or unix timestamp.|
|license|query|string|false|The license id for photos (for possible values see the flickr.photos.licenses.getInfo method). Multiple licenses may be comma-separated.|
|sort|query|string|false|The order in which to sort returned photos. Deafults to date-posted-desc (unless you are doing a radial geo query, in which case the default sorting is by ascending distance from the point specified). The possible values are:<br>  date-posted-asc,<br>  date-posted-desc,<br>  date-taken-asc,<br>  date-taken-desc,<br>  interestingness-desc,<br>  interestingness-asc, and<br>  relevance.<br>|
|privacy_filter|query|number|false|Return photos only matching a certain privacy level. This only applies when making an authenticated call to view photos you own. Valid values are:,<br>  1: public photos,<br>  2: private photos visible to friends,<br>  3: private photos visible to family,<br>  4: private photos visible to friends & family,<br>  5: completely private photos<br>|
|bbox|query|string|false|A comma-delimited list of 4 values defining the Bounding Box of the area that will be searched.|
|accuracy|query|string|false|Recorded accuracy level of the location information. Current range is 1-16:<br>  World level is 1<br>  Country is ~3<br>  Region is ~6<br>  City is ~11<br>  Street is ~16<br>|
|safe_search|query|number|false|Safe search setting:<br>  1: for safe,<br>  2: for moderate,<br>  3: for restricted<br>|
|content_type|query|number|false|Content Type setting:<br>  1: photos only.<br>  2: screenshots only.<br>  3: 'other' only.<br>  4: photos and screenshots.<br>  5: screenshots and 'other'.<br>  6: photos and 'other'.<br>  7: photos, screenshots, and 'other' (all).<br>|
|machine_tags|query|string|false|Aside from passing in a fully formed machine tag, there is a special syntax for searching on specific properties : Find photos using the 'dc' namespace : "machine_tags" => "dc:" Find photos with a title in the 'dc' namespace : "machine_tags" => "dc:title=" Find photos titled "mr. camera" in the 'dc' namespace : "machine_tags" => "dc:title=\"mr. camera\" Find photos whose value is "mr. camera" : "machine_tags" => "*:*=\"mr. camera\"" Find photos that have a title, in any namespace : "machine_tags" => "*:title=" Find photos that have a title, in any namespace, whose value is "mr. camera" : "machine_tags" => "*:title=\"mr. camera\"" Find photos, in the 'dc' namespace whose value is "mr. camera" : "machine_tags" => "dc:*=\"mr. camera\"" Multiple machine tags may be queried by passing a comma-separated list. The number of machine tags you can pass in a single query depends on the tag mode (AND or OR) that you are querying with. "AND" queries are limited to (16) machine tags. "OR" queries are limited to (8).<br>|
|machine_tag_mode|query|string|false|Either 'any' for an OR combination of tags, or 'all' for an AND combination. Defaults to 'any' if not specified.|
|group_id|query|string|false|The id of a group who's pool to search. If specified, only matching photos posted to the group's pool will be returned.|
|contacts|query|string|false|Search your contacts. Either 'all' or 'ff' for just friends and family. (Experimental)|
|woe_id|query|string|false|A 32-bit identifier that uniquely represents spatial entities. (not used if bbox argument is present).|
|place_id|query|string|false|A Flickr place id. (not used if bbox argument is present). Geo queries require some sort of limiting agent in order to prevent the database from crying. This is basically like the check against "parameterless searches" for queries without a geo component. A tag, for instance, is considered a limiting agent as are user defined min_date_taken and min_date_upload parameters — If no limiting factor is passed we return only photos added in the last 12 hours (though we may extend the limit in the future).<br>|
|media|query|string|false|Filter results by media type. Possible values are all (default), photos or videos|
|has_geo|query|string|false|Any photo that has been geotagged, or if the value is "0" any photo that has not been geotagged. Geo queries require some sort of limiting agent in order to prevent the database from crying. This is basically like the check against "parameterless searches" for queries without a geo component. A tag, for instance, is considered a limiting agent as are user defined min_date_taken and min_date_upload parameters — If no limiting factor is passed we return only photos added in the last 12 hours (though we may extend the limit in the future).<br>|
|geo_context|query|string|false|Geo context is a numeric value representing the photo's geotagginess beyond latitude and longitude. For example, you may wish to search for photos that were taken "indoors" or "outdoors". The current list of context IDs is: 0, not defined. 1, indoors. 2, outdoors. Geo queries require some sort of limiting agent in order to prevent the database from crying. This is basically like the check against "parameterless searches" for queries without a geo component. A tag, for instance, is considered a limiting agent as are user defined min_date_taken and min_date_upload parameters — If no limiting factor is passed we return only photos added in the last 12 hours (though we may extend the limit in the future).<br>|
|lat|query|string|false|A valid latitude, in decimal format, for doing radial geo queries. Geo queries require some sort of limiting agent in order to prevent the database from crying. This is basically like the check against "parameterless searches" for queries without a geo component. A tag, for instance, is considered a limiting agent as are user defined min_date_taken and min_date_upload parameters — If no limiting factor is passed we return only photos added in the last 12 hours (though we may extend the limit in the future).<br>|
|lon|query|string|false|A valid longitude, in decimal format, for doing radial geo queries. Geo queries require some sort of limiting agent in order to prevent the database from crying. This is basically like the check against "parameterless searches" for queries without a geo component. A tag, for instance, is considered a limiting agent as are user defined min_date_taken and min_date_upload parameters — If no limiting factor is passed we return only photos added in the last 12 hours (though we may extend the limit in the future).<br>|
|radius|query|number|false|A valid radius used for geo queries, greater than zero and less than 20 miles (or 32 kilometers), for use with point-based geo queries. The default value is 5 (km).|
|radius_units|query|string|false|The unit of measure when doing radial geo queries. Valid options are "mi" (miles) and "km" (kilometers). The default is "km".|
|is_commons|query|boolean|false|Limit the scope of the search to only photos that are part of the Flickr Commons project. Default is false.|
|in_gallery|query|boolean|false|Limit the scope of the search to only photos that are in a gallery? Default is false, search all photos.|
|is_getty|query|boolean|false|Limit the scope of the search to only photos that are for sale on Getty. Default is false.|
|per_page|query|number|false|Number of photos to return per page. If this argument is omitted, it defaults to 100. The maximum allowed value is 500.|
|page|query|number|false|The page of results to return. If this argument is omitted, it defaults to 1.|

> Example responses

> 200 Response

```json
{
  "page": 0,
  "pages": 0,
  "perpage": 0,
  "photos": [
    {
      "comments": {
        "_content": "string"
      },
      "dates": {
        "lastupdate": "string",
        "posted": "string",
        "taken": "string",
        "takengranularity": "string",
        "takenunknown": true
      },
      "dateuploaded": "string",
      "description": {
        "_content": "string"
      },
      "editability": {
        "canaddmeta": true,
        "cancomment": true
      },
      "farm": "string",
      "id": "string",
      "isfavorite": true,
      "license": "string",
      "media": "string",
      "notes": {
        "note": [
          {
            "description": "string"
          }
        ]
      },
      "originalsecret": "string",
      "owner": {
        "iconfarm": "string",
        "iconserver": "string",
        "is_ad_free": true,
        "ispro": true,
        "location": "string",
        "noindexfollow": true,
        "nsid": "string",
        "path_alias": "string",
        "realname": "string",
        "username": "string"
      },
      "people": {
        "haspeople": true
      },
      "permissions": {
        "permaddmeta": "string",
        "permcomment": "string"
      },
      "publiceditability": {
        "canaddmeta": true,
        "cancomment": true
      },
      "rotation": "string",
      "safe": true,
      "safety_level": "string",
      "secret": "string",
      "server": "string",
      "tags": {
        "tag": [
          {
            "_content": "string",
            "author": "string",
            "authorname": "string",
            "id": "string",
            "machine_tag": true,
            "raw": "string"
          }
        ]
      },
      "title": {
        "_content": "string"
      },
      "urls": {
        "url": [
          {
            "_content": "string",
            "type": "string"
          }
        ]
      },
      "usage": {
        "canblog": true,
        "candownload": true,
        "canprint": true,
        "canshare": true
      },
      "views": "string",
      "visibility": {
        "isfamily": true,
        "isfriend": true,
        "ispublic": true
      }
    }
  ],
  "total": 0
}
```

<h3 id="getmediabysearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getmediabysearch-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|page|number|false|none|none|
|pages|number|false|none|none|
|perpage|number|false|none|none|
|photos|[[Photo](#schemaphoto)]|false|none|none|
|total|number|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## getAlbumContextByID

<a id="opIdgetAlbumContextByID"></a>

> Code samples

```bash
curl 'https://example.com/rest?method=flickr.photosets.getContext?api_key=string&photo_id=string' \
  -H 'Accept: application/json'
```

`GET /rest?method=flickr.photosets.getContext`

Returns next and previous photos for a photo in a set

<h3 id="getalbumcontextbyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api_key|query|string|true|none|
|photo_id|query|string|true|none|
|photoset_id|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "count": {
    "_content": "string"
  },
  "nextphoto": {
    "farm": "string",
    "id": "string",
    "is_faved": true,
    "license": 0,
    "media": "string",
    "owner": "string",
    "safe": true,
    "secret": "string",
    "server": "string",
    "thumb": "string",
    "title": "string",
    "url": "string"
  },
  "prevphoto": {
    "farm": "string",
    "id": "string",
    "is_faved": true,
    "license": 0,
    "media": "string",
    "owner": "string",
    "safe": true,
    "secret": "string",
    "server": "string",
    "thumb": "string",
    "title": "string",
    "url": "string"
  },
  "stat": "string"
}
```

<h3 id="getalbumcontextbyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getalbumcontextbyid-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|object|false|none|none|
|» _content|string|false|none|none|
|nextphoto|[ContextPhoto](#schemacontextphoto)|false|none|none|
|prevphoto|[ContextPhoto](#schemacontextphoto)|false|none|none|
|stat|[Stat](#schemastat)|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## getAlbumsByPersonID

<a id="opIdgetAlbumsByPersonID"></a>

> Code samples

```bash
curl 'https://example.com/rest?method=flickr.photosets.getList?api_key=string&user_id=string' \
  -H 'Accept: application/json'
```

`GET /rest?method=flickr.photosets.getList`

Returns the albums belonging to the specified user

<h3 id="getalbumsbypersonid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api_key|query|string|true|none|
|user_id|query|string|true|none|
|page|query|number|false|none|
|per_page|query|number|false|none|

> Example responses

> 200 Response

```json
{
  "page": 0,
  "pages": 0,
  "perpage": 0,
  "photosets": [
    {
      "can_comment": true,
      "count_comments": 0,
      "count_views": 0,
      "date_create": 0,
      "date_update": 0,
      "description": "string",
      "farm": "string",
      "id": "string",
      "photos": 0,
      "primary": "string",
      "secret": "string",
      "server": "string",
      "title": "string",
      "videos": 0
    }
  ],
  "total": 0
}
```

<h3 id="getalbumsbypersonid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getalbumsbypersonid-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|page|number|false|none|none|
|pages|number|false|none|none|
|perpage|number|false|none|none|
|photosets|[[Album](#schemaalbum)]|false|none|none|
|total|number|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## getAlbumByID

<a id="opIdgetAlbumByID"></a>

> Code samples

```bash
curl 'https://example.com/rest?method=flickr.photosets.getPhotos?api_key=string&photoset_id=string' \
  -H 'Accept: application/json'
```

`GET /rest?method=flickr.photosets.getPhotos`

Returns a list of photos in an album.

<h3 id="getalbumbyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api_key|query|string|true|none|
|photoset_id|query|string|true|none|

> Example responses

> 200 Response

```json
{
  "photoset": [
    {
      "comments": {
        "_content": "string"
      },
      "dates": {
        "lastupdate": "string",
        "posted": "string",
        "taken": "string",
        "takengranularity": "string",
        "takenunknown": true
      },
      "dateuploaded": "string",
      "description": {
        "_content": "string"
      },
      "editability": {
        "canaddmeta": true,
        "cancomment": true
      },
      "farm": "string",
      "id": "string",
      "isfavorite": true,
      "license": "string",
      "media": "string",
      "notes": {
        "note": [
          {
            "description": "string"
          }
        ]
      },
      "originalsecret": "string",
      "owner": {
        "iconfarm": "string",
        "iconserver": "string",
        "is_ad_free": true,
        "ispro": true,
        "location": "string",
        "noindexfollow": true,
        "nsid": "string",
        "path_alias": "string",
        "realname": "string",
        "username": "string"
      },
      "people": {
        "haspeople": true
      },
      "permissions": {
        "permaddmeta": "string",
        "permcomment": "string"
      },
      "publiceditability": {
        "canaddmeta": true,
        "cancomment": true
      },
      "rotation": "string",
      "safe": true,
      "safety_level": "string",
      "secret": "string",
      "server": "string",
      "tags": {
        "tag": [
          {
            "_content": "string",
            "author": "string",
            "authorname": "string",
            "id": "string",
            "machine_tag": true,
            "raw": "string"
          }
        ]
      },
      "title": {
        "_content": "string"
      },
      "urls": {
        "url": [
          {
            "_content": "string",
            "type": "string"
          }
        ]
      },
      "usage": {
        "canblog": true,
        "candownload": true,
        "canprint": true,
        "canshare": true
      },
      "views": "string",
      "visibility": {
        "isfamily": true,
        "isfriend": true,
        "ispublic": true
      }
    }
  ]
}
```

<h3 id="getalbumbyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getalbumbyid-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|photoset|[[Photo](#schemaphoto)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## echo

<a id="opIdecho"></a>

> Code samples

```bash
curl 'https://example.com/rest?method=flickr.test.echo?api_key=string' \
  -H 'Accept: application/json'
```

`GET /rest?method=flickr.test.echo`

Echos the input parameters back in the response

<h3 id="echo-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api_key|query|string|true|none|
|echo|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "echo": {
    "_content": "string"
  }
}
```

<h3 id="echo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="echo-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|echo|object|false|none|none|
|» _content|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## uploadPhoto

<a id="opIduploadPhoto"></a>

> Code samples

```bash
curl https://example.com/upload \
  -X POST \
  -H 'Accept: application/json' \
  -F 'api_key=string' \
  -F 'content_type=1' \
  -F 'description=string' \
  -F 'hidden=1' \
  -F 'is_family=0' \
  -F 'is_friend=0' \
  -F 'is_public=0' \
  -F 'photo=@/path/to/file' \
  -F 'safety_level=1' \
  -F 'tags=string' \
  -F 'title=string'
```

`POST /upload`

Uploads a new photo to Flickr

> Body parameter

```yaml
api_key: string
content_type: "1"
description: string
hidden: "1"
is_family: "0"
is_friend: "0"
is_public: "0"
photo: string
safety_level: "1"
tags: string
title: string
```

<h3 id="uploadphoto-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» api_key|body|string|true|none|
|» content_type|body|string|false|none|
|» description|body|string|false|none|
|» hidden|body|string|false|none|
|» is_family|body|string|false|none|
|» is_friend|body|string|false|none|
|» is_public|body|string|false|none|
|» photo|body|string(binary)|true|none|
|» safety_level|body|string|false|none|
|» tags|body|string|false|none|
|» title|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» content_type|1|
|» content_type|2|
|» content_type|3|
|» hidden|1|
|» hidden|2|
|» is_family|0|
|» is_family|1|
|» is_friend|0|
|» is_friend|1|
|» is_public|0|
|» is_public|1|
|» safety_level|1|
|» safety_level|2|
|» safety_level|3|

> Example responses

> 200 Response

```json
{}
```

<h3 id="uploadphoto-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_Album">Album</h2>
<!-- backwards compatibility -->
<a id="schemaalbum"></a>
<a id="schema_Album"></a>
<a id="tocSalbum"></a>
<a id="tocsalbum"></a>

```json
{
  "can_comment": true,
  "count_comments": 0,
  "count_views": 0,
  "date_create": 0,
  "date_update": 0,
  "description": "string",
  "farm": "string",
  "id": "string",
  "photos": 0,
  "primary": "string",
  "secret": "string",
  "server": "string",
  "title": "string",
  "videos": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|can_comment|boolean|false|none|none|
|count_comments|number|false|none|none|
|count_views|number|false|none|none|
|date_create|number|false|none|none|
|date_update|number|false|none|none|
|description|string|false|none|none|
|farm|string|false|none|none|
|id|string|false|none|none|
|photos|number|false|none|none|
|primary|string|false|none|none|
|secret|string|false|none|none|
|server|string|false|none|none|
|title|string|false|none|none|
|videos|number|false|none|none|

<h2 id="tocS_ContextPhoto">ContextPhoto</h2>
<!-- backwards compatibility -->
<a id="schemacontextphoto"></a>
<a id="schema_ContextPhoto"></a>
<a id="tocScontextphoto"></a>
<a id="tocscontextphoto"></a>

```json
{
  "farm": "string",
  "id": "string",
  "is_faved": true,
  "license": 0,
  "media": "string",
  "owner": "string",
  "safe": true,
  "secret": "string",
  "server": "string",
  "thumb": "string",
  "title": "string",
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|farm|string|false|none|none|
|id|string|false|none|none|
|is_faved|boolean|false|none|none|
|license|integer|false|none|none|
|media|string|false|none|none|
|owner|string|false|none|none|
|safe|boolean|false|none|none|
|secret|string|false|none|none|
|server|string|false|none|none|
|thumb|string|false|none|none|
|title|string|false|none|none|
|url|string|false|none|none|

<h2 id="tocS_ContextPhotos">ContextPhotos</h2>
<!-- backwards compatibility -->
<a id="schemacontextphotos"></a>
<a id="schema_ContextPhotos"></a>
<a id="tocScontextphotos"></a>
<a id="tocscontextphotos"></a>

```json
{
  "photos": [
    {
      "farm": "string",
      "id": "string",
      "is_faved": true,
      "license": 0,
      "media": "string",
      "owner": "string",
      "safe": true,
      "secret": "string",
      "server": "string",
      "thumb": "string",
      "title": "string",
      "url": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|photos|[[ContextPhoto](#schemacontextphoto)]|false|none|none|

<h2 id="tocS_Cover">Cover</h2>
<!-- backwards compatibility -->
<a id="schemacover"></a>
<a id="schema_Cover"></a>
<a id="tocScover"></a>
<a id="tocscover"></a>

```json
{
  "farm": "string",
  "id": "string",
  "isfamily": true,
  "isfriend": true,
  "ispublic": true,
  "owner": "string",
  "secret": "string",
  "server": "string",
  "title": "string",
  "y": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|farm|string|false|none|none|
|id|string|false|none|none|
|isfamily|boolean|false|none|none|
|isfriend|boolean|false|none|none|
|ispublic|boolean|false|none|none|
|owner|string|false|none|none|
|secret|string|false|none|none|
|server|string|false|none|none|
|title|string|false|none|none|
|y|string|false|none|none|

<h2 id="tocS_Group">Group</h2>
<!-- backwards compatibility -->
<a id="schemagroup"></a>
<a id="schema_Group"></a>
<a id="tocSgroup"></a>
<a id="tocsgroup"></a>

```json
{
  "blast": {
    "_content": "string",
    "date_blast_added": "string",
    "user_id": "string"
  },
  "cover": {
    "farm": "string",
    "id": "string",
    "isfamily": true,
    "isfriend": true,
    "ispublic": true,
    "owner": "string",
    "secret": "string",
    "server": "string",
    "title": "string",
    "y": "string"
  },
  "coverphoto_farm": "string",
  "coverphoto_server": "string",
  "coverphoto_url": {
    "h": "string",
    "l": "string",
    "s": "string",
    "t": "string"
  },
  "description": {
    "_content": "string"
  },
  "iconfarm": "string",
  "iconserver": "string",
  "id": "string",
  "is_admin": true,
  "is_member": true,
  "is_moderator": true,
  "ispoolmoderated": true,
  "lang": "string",
  "members": {
    "_content": "string"
  },
  "name": {
    "_content": "string"
  },
  "path_alias": "string",
  "pool_count": {
    "_content": "string"
  },
  "pool_rows": 0,
  "privacy": {
    "_content": "string"
  },
  "restrictions": {
    "art_ok": true,
    "has_geo": true,
    "images_ok": true,
    "moderate_ok": true,
    "photos_ok": true,
    "restricted_ok": true,
    "safe_ok": true,
    "screens_ok": true,
    "videos_ok": true
  },
  "roles": {
    "admin": "string",
    "member": "string",
    "moderator": "string"
  },
  "rules": {
    "_content": "string"
  },
  "throttle": {
    "count": 0,
    "mode": "string",
    "remaining": "string"
  },
  "topic_count": {
    "_content": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|blast|object|false|none|none|
|cover|[Cover](#schemacover)|false|none|none|
|coverphoto_farm|string|false|none|none|
|coverphoto_server|string|false|none|none|
|coverphoto_url|[PhotoURLs](#schemaphotourls)|false|none|none|
|description|object|false|none|none|
|iconfarm|string|false|none|none|
|iconserver|string|false|none|none|
|id|string|false|none|none|
|is_admin|boolean|false|none|none|
|is_member|boolean|false|none|none|
|is_moderator|boolean|false|none|none|
|ispoolmoderated|boolean|false|none|none|
|lang|string|false|none|none|
|members|object|false|none|none|
|name|object|false|none|none|
|path_alias|string|false|none|none|
|pool_count|object|false|none|none|
|pool_rows|integer|false|none|none|
|privacy|object|false|none|none|
|restrictions|object|false|none|none|
|roles|object|false|none|none|
|rules|object|false|none|none|
|throttle|object|false|none|none|
|topic_count|object|false|none|none|

<h2 id="tocS_Note">Note</h2>
<!-- backwards compatibility -->
<a id="schemanote"></a>
<a id="schema_Note"></a>
<a id="tocSnote"></a>
<a id="tocsnote"></a>

```json
{
  "description": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|none|

<h2 id="tocS_Owner">Owner</h2>
<!-- backwards compatibility -->
<a id="schemaowner"></a>
<a id="schema_Owner"></a>
<a id="tocSowner"></a>
<a id="tocsowner"></a>

```json
{
  "iconfarm": "string",
  "iconserver": "string",
  "is_ad_free": true,
  "ispro": true,
  "location": "string",
  "noindexfollow": true,
  "nsid": "string",
  "path_alias": "string",
  "realname": "string",
  "username": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|iconfarm|string|false|none|none|
|iconserver|string|false|none|none|
|is_ad_free|boolean|false|none|none|
|ispro|boolean|false|none|none|
|location|string|false|none|none|
|noindexfollow|boolean|false|none|none|
|nsid|string|false|none|none|
|path_alias|string|false|none|none|
|realname|string|false|none|none|
|username|string|false|none|none|

<h2 id="tocS_Person">Person</h2>
<!-- backwards compatibility -->
<a id="schemaperson"></a>
<a id="schema_Person"></a>
<a id="tocSperson"></a>
<a id="tocsperson"></a>

```json
{
  "can_buy_pro": true,
  "cover": {
    "farm": "string",
    "id": "string",
    "isfamily": true,
    "isfriend": true,
    "ispublic": true,
    "owner": "string",
    "secret": "string",
    "server": "string",
    "title": "string",
    "y": "string"
  },
  "coverphoto": {
    "h": "string",
    "l": "string",
    "s": "string",
    "t": "string"
  },
  "coverphoto_farm": "string",
  "coverphoto_server": "string",
  "description": {
    "_content": "string"
  },
  "disable_keyboard_shortcuts": {
    "_content": "string"
  },
  "expire": true,
  "has_stats": true,
  "iconfarm": "string",
  "iconserver": "string",
  "id": "string",
  "is_ad_free": true,
  "ispro": true,
  "location": {
    "_content": "string"
  },
  "mbox_sha1sum": {
    "_content": "string"
  },
  "mobileurl": {
    "_content": "string"
  },
  "nsid": "string",
  "path_alias": "string",
  "photos": {
    "count": {
      "_content": "string"
    },
    "firstdate": {
      "_content": "string"
    },
    "firstdatetaken": {
      "_content": "string"
    },
    "views": {
      "_content": "string"
    }
  },
  "photosurl": {
    "_content": "string"
  },
  "profileurl": {
    "_content": "string"
  },
  "realname": {
    "_content": "string"
  },
  "timezone": {
    "label": "string",
    "offset": "string",
    "timezone_id": "string"
  },
  "unread_messages": {
    "_content": "string"
  },
  "user_secret": "string",
  "username": {
    "_content": "string"
  },
  "yintl": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|can_buy_pro|boolean|false|none|none|
|cover|[Cover](#schemacover)|false|none|none|
|coverphoto|[PhotoURLs](#schemaphotourls)|false|none|none|
|coverphoto_farm|string|false|none|none|
|coverphoto_server|string|false|none|none|
|description|object|false|none|none|
|disable_keyboard_shortcuts|object|false|none|none|
|expire|boolean|false|none|none|
|has_stats|boolean|false|none|none|
|iconfarm|string|false|none|none|
|iconserver|string|false|none|none|
|id|string|false|none|none|
|is_ad_free|boolean|false|none|none|
|ispro|boolean|false|none|none|
|location|object|false|none|none|
|mbox_sha1sum|object|false|none|none|
|mobileurl|object|false|none|none|
|nsid|string|false|none|none|
|path_alias|string|false|none|none|
|photos|object|false|none|none|
|photosurl|object|false|none|none|
|profileurl|object|false|none|none|
|realname|object|false|none|none|
|timezone|object|false|none|none|
|unread_messages|object|false|none|none|
|user_secret|string|false|none|none|
|username|object|false|none|none|
|yintl|string|false|none|none|

<h2 id="tocS_Photo">Photo</h2>
<!-- backwards compatibility -->
<a id="schemaphoto"></a>
<a id="schema_Photo"></a>
<a id="tocSphoto"></a>
<a id="tocsphoto"></a>

```json
{
  "comments": {
    "_content": "string"
  },
  "dates": {
    "lastupdate": "string",
    "posted": "string",
    "taken": "string",
    "takengranularity": "string",
    "takenunknown": true
  },
  "dateuploaded": "string",
  "description": {
    "_content": "string"
  },
  "editability": {
    "canaddmeta": true,
    "cancomment": true
  },
  "farm": "string",
  "id": "string",
  "isfavorite": true,
  "license": "string",
  "media": "string",
  "notes": {
    "note": [
      {
        "description": "string"
      }
    ]
  },
  "originalsecret": "string",
  "owner": {
    "iconfarm": "string",
    "iconserver": "string",
    "is_ad_free": true,
    "ispro": true,
    "location": "string",
    "noindexfollow": true,
    "nsid": "string",
    "path_alias": "string",
    "realname": "string",
    "username": "string"
  },
  "people": {
    "haspeople": true
  },
  "permissions": {
    "permaddmeta": "string",
    "permcomment": "string"
  },
  "publiceditability": {
    "canaddmeta": true,
    "cancomment": true
  },
  "rotation": "string",
  "safe": true,
  "safety_level": "string",
  "secret": "string",
  "server": "string",
  "tags": {
    "tag": [
      {
        "_content": "string",
        "author": "string",
        "authorname": "string",
        "id": "string",
        "machine_tag": true,
        "raw": "string"
      }
    ]
  },
  "title": {
    "_content": "string"
  },
  "urls": {
    "url": [
      {
        "_content": "string",
        "type": "string"
      }
    ]
  },
  "usage": {
    "canblog": true,
    "candownload": true,
    "canprint": true,
    "canshare": true
  },
  "views": "string",
  "visibility": {
    "isfamily": true,
    "isfriend": true,
    "ispublic": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|comments|object|false|none|none|
|dates|object|false|none|none|
|dateuploaded|string|false|none|none|
|description|object|false|none|none|
|editability|object|false|none|none|
|farm|string|false|none|none|
|id|string|false|none|none|
|isfavorite|boolean|false|none|none|
|license|string|false|none|none|
|media|string|false|none|none|
|notes|object|false|none|none|
|originalsecret|string|false|none|none|
|owner|[Owner](#schemaowner)|false|none|none|
|people|object|false|none|none|
|permissions|object|false|none|none|
|publiceditability|object|false|none|none|
|rotation|string|false|none|none|
|safe|boolean|false|none|none|
|safety_level|string|false|none|none|
|secret|string|false|none|none|
|server|string|false|none|none|
|tags|object|false|none|none|
|title|object|false|none|none|
|urls|object|false|none|none|
|usage|object|false|none|none|
|views|string|false|none|none|
|visibility|object|false|none|none|

<h2 id="tocS_PhotoURLs">PhotoURLs</h2>
<!-- backwards compatibility -->
<a id="schemaphotourls"></a>
<a id="schema_PhotoURLs"></a>
<a id="tocSphotourls"></a>
<a id="tocsphotourls"></a>

```json
{
  "h": "string",
  "l": "string",
  "s": "string",
  "t": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|h|string|false|none|none|
|l|string|false|none|none|
|s|string|false|none|none|
|t|string|false|none|none|

<h2 id="tocS_Size">Size</h2>
<!-- backwards compatibility -->
<a id="schemasize"></a>
<a id="schema_Size"></a>
<a id="tocSsize"></a>
<a id="tocssize"></a>

```json
{
  "height": 0,
  "label": "string",
  "media": "string",
  "source": "string",
  "url": "string",
  "width": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|height|number|false|none|none|
|label|string|false|none|none|
|media|string|false|none|none|
|source|string|false|none|none|
|url|string|false|none|none|
|width|number|false|none|none|

<h2 id="tocS_Stat">Stat</h2>
<!-- backwards compatibility -->
<a id="schemastat"></a>
<a id="schema_Stat"></a>
<a id="tocSstat"></a>
<a id="tocsstat"></a>

```json
"string"
```

<h2 id="tocS_Tag">Tag</h2>
<!-- backwards compatibility -->
<a id="schematag"></a>
<a id="schema_Tag"></a>
<a id="tocStag"></a>
<a id="tocstag"></a>

```json
{
  "_content": "string",
  "author": "string",
  "authorname": "string",
  "id": "string",
  "machine_tag": true,
  "raw": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_content|string|false|none|none|
|author|string|false|none|none|
|authorname|string|false|none|none|
|id|string|false|none|none|
|machine_tag|boolean|false|none|none|
|raw|string|false|none|none|

<h2 id="tocS_Topic">Topic</h2>
<!-- backwards compatibility -->
<a id="schematopic"></a>
<a id="schema_Topic"></a>
<a id="tocStopic"></a>
<a id="tocstopic"></a>

```json
{
  "author": "string",
  "author_is_deleted": true,
  "author_path_alias": "string",
  "authorname": "string",
  "can_delete": true,
  "can_edit": true,
  "can_reply": true,
  "count_replies": 0,
  "datecreate": "string",
  "datelastpost": "string",
  "iconfarm": "string",
  "iconserver": "string",
  "id": "string",
  "is_locked": true,
  "is_pro": true,
  "is_sticky": true,
  "last_reply": "string",
  "lastedit": "string",
  "message": {
    "_content": "string"
  },
  "role": "string",
  "subject": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|author|string|false|none|none|
|author_is_deleted|boolean|false|none|none|
|author_path_alias|string|false|none|none|
|authorname|string|false|none|none|
|can_delete|boolean|false|none|none|
|can_edit|boolean|false|none|none|
|can_reply|boolean|false|none|none|
|count_replies|integer|false|none|none|
|datecreate|string|false|none|none|
|datelastpost|string|false|none|none|
|iconfarm|string|false|none|none|
|iconserver|string|false|none|none|
|id|string|false|none|none|
|is_locked|boolean|false|none|none|
|is_pro|boolean|false|none|none|
|is_sticky|boolean|false|none|none|
|last_reply|string|false|none|none|
|lastedit|string|false|none|none|
|message|object|false|none|none|
|role|string|false|none|none|
|subject|string|false|none|none|

<h2 id="tocS_TopicReply">TopicReply</h2>
<!-- backwards compatibility -->
<a id="schematopicreply"></a>
<a id="schema_TopicReply"></a>
<a id="tocStopicreply"></a>
<a id="tocstopicreply"></a>

```json
{
  "author": "string",
  "author_is_deleted": true,
  "author_path_alias": "string",
  "authorname": "string",
  "can_delete": true,
  "can_edit": true,
  "datecreate": "string",
  "iconfarm": "string",
  "iconserver": "string",
  "id": "string",
  "is_pro": true,
  "lastedit": "string",
  "message": {
    "_content": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|author|string|false|none|none|
|author_is_deleted|boolean|false|none|none|
|author_path_alias|string|false|none|none|
|authorname|string|false|none|none|
|can_delete|boolean|false|none|none|
|can_edit|boolean|false|none|none|
|datecreate|string|false|none|none|
|iconfarm|string|false|none|none|
|iconserver|string|false|none|none|
|id|string|false|none|none|
|is_pro|boolean|false|none|none|
|lastedit|string|false|none|none|
|message|object|false|none|none|

<h2 id="tocS_URL">URL</h2>
<!-- backwards compatibility -->
<a id="schemaurl"></a>
<a id="schema_URL"></a>
<a id="tocSurl"></a>
<a id="tocsurl"></a>

```json
{
  "_content": "string",
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_content|string|false|none|none|
|type|string|false|none|none|
