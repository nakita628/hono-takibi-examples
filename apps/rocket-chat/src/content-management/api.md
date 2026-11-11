<h1 id="content-management">Content Management v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="https://apiexplorer.support.rocket.chat">https://apiexplorer.support.rocket.chat</a>

<h1 id="content-management-assets">Assets</h1>

## Set Asset

<a id="opIdpost-api-v1-assets.setAsset"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/assets.setAsset \
  -X POST \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -F 'asset=string' \
  -F 'assetName=logo' \
  -F 'refreshAllClients=true'
```

`POST /api/v1/assets.setAsset`

Upload an <a href="https://docs.rocket.chat/docs/assets" target="_blank"> asset</a> by name. Permissions required: `manage-assets`. Make sure that the workspace's <a href='https://docs.rocket.chat/docs/file-upload' target='_blank'>file upload settings</a> are configured as required. The allowed file size and type depend on the file upload settings.

### Changelog
| Version      | Description | 
| ---------------- | ------------|
|0.69.0           | Added       |

> Body parameter

```yaml
asset: string
assetName: logo
refreshAllClients: true
```

<h3 id="set-asset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» asset|body|string|true|Upload the file as form-data.|
|» assetName|body|string|true|Type of asset to upload. The value can be one of the following:<br>* `logo`<br>* `background`<br>* `favicon_ico`<br>* `favicon`<br>* `favicon_16`<br>* `favicon_32`<br>* `favicon_192`<br>* `favicon_512`<br>* `touchicon_180`<br>* `touchicon_180_pre`<br>* `tile_70`<br>* `tile_144`<br>* `tile_150`<br>* `tile_310_square`<br>* `tile_310_wide`<br>* `safari_pinned`|
|» refreshAllClients|body|boolean|false|Set to true if all clients must be refreshed to immediately apply the changes.|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "Invalid asset"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="set-asset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="set-asset-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Unset Asset

<a id="opIdpost-api-v1-assets.unsetAsset"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/assets.unsetAsset \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "assetName": "logo",
    "refreshAllClients": true
  }'
```

`POST /api/v1/assets.unsetAsset`

Remove an asset by name. Permissions required: `manage-assets` .

### Changelog
| Version      | Description | 
| ---------------- | ------------|
|0.69.0           | Added       |

> Body parameter

```json
{
  "assetName": "logo",
  "refreshAllClients": true
}
```

<h3 id="unset-asset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» assetName|body|string|true|Type of asset to remove. The value can be one of the following:<br>* `logo`<br>* `background`<br>* `favicon_ico`<br>* `favicon`<br>* `favicon_16`<br>* `favicon_32`<br>* `favicon_192`<br>* `favicon_512`<br>* `touchicon_180`<br>* `touchicon_180_pre`<br>* `tile_70`<br>* `tile_144`<br>* `tile_150`<br>* `tile_310_square`<br>* `tile_310_wide`<br>* `safari_pinned`|
|» refreshAllClients|body|boolean|false|Set to true if all clients must be refreshed to immediately apply the changes.|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "must have required property 'assetName' [error-invalid-params]",
  "errorType": "error-invalid-params"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="unset-asset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="unset-asset-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="content-management-custom-emoji">Custom Emoji</h1>

## List All Custom Emojis

<a id="opIdget-api-v1-emoji-custom.all"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/emoji-custom.all \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/emoji-custom.all`

List all custom emojis.


### Changelog
| Version      | Description | 
| ---------------- | ------------|
|7.11.0            | Added the `name` query parameter       |
|0.63.0            | Added       |

<h3 id="list-all-custom-emojis-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|name|query|string|false|Enter the emoji name you want to find. This parameter is optional.|
|offset|query|integer|false|Number of items to "skip" in the query, i.e. requests return count items, skipping the first offset items.  Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#paginations) to learn more.|
|count|query|integer|false|The number of items to return. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|

> Example responses

> 200 Response

```json
{
  "emojis": [
    {
      "_id": "6542e83aa2f73c7460e18efb",
      "name": "happy",
      "aliases": [
        "happy-gang"
      ],
      "extension": "png",
      "_updatedAt": "2023-11-02T00:07:22.433Z"
    }
  ],
  "count": 1,
  "offset": 0,
  "total": 1,
  "success": true
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="list-all-custom-emojis-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="list-all-custom-emojis-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|emojis|[object]|false|none|none|
|» _id|string|false|none|none|
|» name|string|false|none|none|
|» aliases|[string]|false|none|none|
|» extension|string|false|none|none|
|» _updatedAt|string|false|none|none|
|count|integer|false|none|none|
|offset|integer|false|none|none|
|total|integer|false|none|none|
|success|boolean|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Create an Emoji

<a id="opIdpost-api-v1-emoji-custom.create"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/emoji-custom.create \
  -X POST \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -F 'emoji=@/path/to/file' \
  -F 'name=grinning_cat' \
  -F 'aliases=happy_cat,smiley_cat'
```

`POST /api/v1/emoji-custom.create`

Upload a custom emoji to the workspace. Make sure that you have configured the storage system. For details, refer to the [Manage Custom Sounds and Emojis](https://docs.rocket.chat/docs/manage-custom-sounds-and-emojis) document.

Permission required: `manage-emoji`

### Changelog
| Version      | Description | 
| ---------------- | ------------|
|0.74.0            | Added       |


> Body parameter

```yaml
emoji: string
name: grinning_cat
aliases: "happy_cat,smiley_cat"
```

<h3 id="create-an-emoji-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» emoji|body|string(binary)|true|The image file to use as the new custom emoji.|
|» name|body|string|true|The name of the new custom emoji.|
|» aliases|body|string|false|The alias of the new custom emoji. You can enter more than one alias as comma-separated values.|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "Missing Content-Type"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="create-an-emoji-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="create-an-emoji-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a Custom Emoji

<a id="opIdpost-api-v1-emoji-custom.delete"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/emoji-custom.delete \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "emojiId": "6542e83aa2f73c7460e18efb"
  }'
```

`POST /api/v1/emoji-custom.delete`

Delete a custom emoji. Permission required: `manage-emoji`

### Changelog
| Version      | Description | 
| ---------------- | ------------|
|0.74.0            | Added       |

> Body parameter

```json
{
  "emojiId": "6542e83aa2f73c7460e18efb"
}
```

<h3 id="delete-a-custom-emoji-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» emojiId|body|string|true|Enter the emoji ID to delete.|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "The \"emojiId\" params is required!"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="delete-a-custom-emoji-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="delete-a-custom-emoji-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get Updated List of Custom Emojis

<a id="opIdget-api-v1-emoji-custom.list"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/emoji-custom.list \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/emoji-custom.list`

Get a list of updated and removed emojis.

### Changelog
| Version      | Description | 
| ---------------- | ------------|
|9.0.0   | Removed the `query` parameter.       |
|7.0.0            | Added  `_id` and  `_updatedAt` query parameter     |
|0.75.0            | Added       |

<h3 id="get-updated-list-of-custom-emojis-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|updatedSince|query|string|false|Date since the emojis were updated. Format: ISO string. When you provide the `updatedSince` query parameter in the URL then the `update` and `remove` in the response will contain only those updated and removed since this date and time.|
|_updatedAt|query|string|false|none|
|_id|query|string|false|Filter list by custom emoji id.|

> Example responses

> 200 Response

```json
{
  "emojis": {
    "update": [
      {
        "_id": "S5XvYppoLrLd9JvQm",
        "name": "teste",
        "aliases": [],
        "extension": "jpg",
        "_updatedAt": "2019-02-18T16:48:35.119Z"
      }
    ],
    "remove": [
      {
        "_id": "2dbVBG434dnsdh23",
        "name": "teste3",
        "aliases": [],
        "extension": "jpg",
        "_updatedAt": "2019-02-18T16:48:35.119Z"
      }
    ]
  },
  "success": true
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="get-updated-list-of-custom-emojis-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="get-updated-list-of-custom-emojis-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|emojis|object|false|none|none|
|» update|[object]|false|none|none|
|» » _id|string|false|none|none|
|» » name|string|false|none|none|
|» » aliases|[object]|false|none|none|
|» » extension|string|false|none|none|
|» » _updatedAt|string|false|none|none|
|» remove|[object]|false|none|none|
|» » _id|string|false|none|none|
|» » name|string|false|none|none|
|» » aliases|[object]|false|none|none|
|» » extension|string|false|none|none|
|» » _updatedAt|string|false|none|none|
|success|boolean|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Update a Custom Emoji

<a id="opIdpost-api-v1-emoji-custom.update"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/emoji-custom.update \
  -X POST \
  -H 'Accept: application/json' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -F 'emoji=string' \
  -F 'name=my-custom-emoji' \
  -F '_id=AG7DSB2H32YHS' \
  -F 'aliases=emoji-alias'
```

`POST /api/v1/emoji-custom.update`

Update a custom emoji. Permission required: `manage-emoji`

### Changelog
| Version      | Description | 
| ---------------- | ------------|
|0.74.0            | Added       |

> Body parameter

```yaml
emoji: string
name: my-custom-emoji
_id: AG7DSB2H32YHS
aliases: emoji-alias
```

<h3 id="update-a-custom-emoji-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|body|body|object|false|none|
|» emoji|body|string|false|Upload the emoji file that you want to update as form-data.|
|» name|body|string|true|Enter the name of the emoji that you want to update.|
|» _id|body|string|true|Enter the emoji ID to be updated.|
|» aliases|body|string|false|The alias of the custom emoji. You can enter more than one alias as comma-separated values.|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "[The required \"_id\" query param is missing.]",
  "errorType": "The required \"_id\" query param is missing."
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="update-a-custom-emoji-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="update-a-custom-emoji-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="content-management-custom-sounds">Custom Sounds</h1>

## List Custom Sounds

<a id="opIdget-api-v1-custom-sounds.list"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/custom-sounds.list \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/custom-sounds.list`

List all custom sounds. 

### Changelog
| Version      | Description | 
| ---------------- | ------------|
|9.0.0   | Removed the `query` parameter.       |
| 2.4.0            | Added       |
| 2.4.0            | Added `name` query parameter for filtering.      |

<h3 id="list-custom-sounds-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|offset|query|integer|false|Number of items to "skip" in the query, i.e. requests return count items, skipping the first offset items.  Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#paginations) to learn more.|
|count|query|integer|false|The number of items to return. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|name|query|string|false|Filter list by the name of the custom sound.|
|sort|query|object|false|Sort the results in ascending (`1`) or descending (`-1`) order. The options are:<br> * `name`: Sort the results by name. For example, `sort={"name": 1}` (default) or `sort={"name": -1}`.<br> * `_id`: Sort by ID. For example, `sort={"_id": 1}` or `sort={"_id": -1}`.|

> Example responses

> 200 Response

```json
{
  "sounds": [
    {
      "_id": "65462caea2f73c7460e18f83",
      "name": "doremi",
      "extension": "mp3",
      "_updatedAt": "2023-11-04T11:36:14.171Z"
    }
  ],
  "count": 1,
  "offset": 0,
  "total": 1,
  "success": true
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="list-custom-sounds-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="list-custom-sounds-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sounds|[object]|false|none|none|
|» _id|string|false|none|none|
|» name|string|false|none|none|
|» extension|string|false|none|none|
|» _updatedAt|string|false|none|none|
|count|integer|false|none|none|
|offset|integer|false|none|none|
|total|integer|false|none|none|
|success|boolean|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Create Custom Sound

<a id="opIdpost-api-v1-custom-sounds.create"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/custom-sounds.create \
  -X POST \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -F 'name=doremi'
```

`POST /api/v1/custom-sounds.create`

Upload a new custom sound to the workspace.

- The request must be sent as `multipart/form-data` and contain the audio file in the `sound` field and the display name in the `name` field.

- The file size must not exceed `5 MB` (5242880 bytes), and the file MIME type must be one of `audio/mpeg`, `audio/mp3`, `audio/wav`, or `audio/x-wav`.

This endpoint replaces the DDP methods `insertOrUpdateSound` and `uploadCustomSound`, which were removed in 9.0.0.

Permission required: `manage-sounds`

### Changelog
| Version | Description |
| ------- | ----------- |
|9.0.0   | The `403` response returns `errorType: error-forbidden`.       |
| 8.5.0   | Added       |

> Body parameter

```yaml
name: doremi
```

<h3 id="create-custom-sound-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» sound|body|string(binary)|true|The audio file to upload. Allowed MIME types are `audio/mpeg`, `audio/mp3`, `audio/wav`, and `audio/x-wav`. Maximum size is `5 MB` (5242880 bytes).|
|» name|body|string|true|The display name of the custom sound. Must be at least one character long and must not contain colons, whitespace, or the characters `,`, `>`, `<`, `&`, `"`, `'`, `/`, `\`, `(`, or `)`.|

> Example responses

> 200 Response

```json
{
  "sound": {
    "_id": "65462caea2f73c7460e18f83"
  },
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "MIME type not allowed"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

> 403 Response

```json
{
  "success": false,
  "error": "User does not have the permissions required for this action",
  "errorType": "error-forbidden"
}
```

<h3 id="create-custom-sound-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="create-custom-sound-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sound|object|false|none|none|
|» _id|string|false|none|none|
|success|boolean|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Update Custom Sound

<a id="opIdpost-api-v1-custom-sounds.update"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/custom-sounds.update \
  -X POST \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -F '_id=65462caea2f73c7460e18f83' \
  -F 'name=doremi-v2'
```

`POST /api/v1/custom-sounds.update`

Update an existing custom sound.

- The request must be sent as `multipart/form-data`. The `_id` and `name` fields are required; the `sound` file field is optional and only required when replacing the audio file.

- When a new file is provided, the file size must not exceed `5 MB` (5242880 bytes), and the file MIME type must be one of `audio/mpeg`, `audio/mp3`, `audio/wav`, or `audio/x-wav`.

This endpoint replaces the DDP methods `insertOrUpdateSound` and `uploadCustomSound`, which were removed in 9.0.0.

Permission required: `manage-sounds`

### Changelog
| Version | Description |
| ------- | ----------- |
|9.0.0   | The `403` response returns `errorType: error-forbidden`.       |
| 8.5.0   | Added       |

> Body parameter

```yaml
_id: "65462caea2f73c7460e18f83"
name: doremi-v2
```

<h3 id="update-custom-sound-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» _id|body|string|true|The ID of the custom sound to update.|
|» name|body|string|true|The updated display name of the custom sound. Must be at least one character long and must not contain colons, whitespace, or the characters `,`, `>`, `<`, `&`, `"`, `'`, `/`, `\`, `(`, or `)`.|
|» sound|body|string(binary)|false|Optional. A new audio file to replace the existing one. If omitted, the current file is kept. Allowed MIME types are `audio/mpeg`, `audio/mp3`, `audio/wav`, and `audio/x-wav`. Maximum size is `5 MB` (5242880 bytes).|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "Custom Sound not found."
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

> 403 Response

```json
{
  "success": false,
  "error": "User does not have the permissions required for this action",
  "errorType": "error-forbidden"
}
```

<h3 id="update-custom-sound-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="update-custom-sound-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Delete Custom Sound

<a id="opIdpost-api-v1-custom-sounds.delete"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/custom-sounds.delete \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "_id": "65462caea2f73c7460e18f83"
  }'
```

`POST /api/v1/custom-sounds.delete`

Delete a custom sound from the workspace by its `_id`. This also removes the associated audio file from storage. This endpoint replaces the DDP method `deleteCustomSound`, which was removed in 9.0.0.

Permission required: `manage-sounds`

### Changelog
| Version | Description |
| ------- | ----------- |
|9.0.0   | The `403` response returns `errorType: error-forbidden`.       |
| 8.6.0   | Added       |

> Body parameter

```json
{
  "_id": "65462caea2f73c7460e18f83"
}
```

<h3 id="delete-custom-sound-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» _id|body|string|true|The ID of the custom sound to delete. Must be at least one character long.|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "Custom_Sound_Error_Invalid_Sound"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

> 403 Response

```json
{
  "success": false,
  "error": "User does not have the permissions required for this action",
  "errorType": "error-forbidden"
}
```

<h3 id="delete-custom-sound-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="delete-custom-sound-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get Custom Sound

<a id="opIdget-api-v1-custom-sounds.getOne"></a>

> Code samples

```bash
curl 'https://apiexplorer.support.rocket.chat/api/v1/custom-sounds.getOne?_id=65462caea2f73c7460e18f83' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/custom-sounds.getOne`

- Returns one custom sound record for the workspace. You must pass the sound’s `_id` as a query parameter.

- Authentication is required. The response includes the sound’s metadata (`name`, `extension`, `_updatedAt`), not the binary file.

### Changelog

| Version | Description |
| ------- | ----------- |
|9.0.0   | The `403` response returns `errorType: error-forbidden`.       |
| 8.3.0   | Added       |

<h3 id="get-custom-sound-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|_id|query|string|true|ID of the custom sound|

> Example responses

> 200 Response

```json
{
  "success": true,
  "sound": {
    "_id": "65462caea2f73c7460e18f83",
    "name": "doremi",
    "extension": "mp3",
    "_updatedAt": "2023-11-04T11:36:14.171Z"
  }
}
```

> 400 Response

```json
{
  "success": false,
  "error": "[The required \"_id\" query param is missing.]",
  "errorType": "The required \"_id\" query param is missing."
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

> 403 Response

```json
{
  "success": false,
  "error": "User does not have the permissions required for this action",
  "errorType": "error-forbidden"
}
```

> 404 Response

```json
{
  "success": false,
  "error": "Custom Sound not found."
}
```

<h3 id="get-custom-sound-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|
|404|Not Found|Not Found|Inline|

<h3 id="get-custom-sound-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|sound|object|false|none|none|
|» _id|string|false|none|none|
|» name|string|false|none|none|
|» extension|string|false|none|none|
|» _updatedAt|string|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="content-management-custom-user-status">Custom User Status</h1>

## List Custom User Status

<a id="opIdget-api-v1-custom-user-status.list"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/custom-user-status.list \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/custom-user-status.list`

Lists all available custom user's status.

### Changelog
| Version      | Description | 
| ---------------- | ------------|
|9.0.0   | Removed the `query` parameter.       |
|7.0.0           | Added `name` and `_id` query parameters for filtering.      |
|2.4.0            | Added       |

<h3 id="list-custom-user-status-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|name|query|string|false|Filter list by the name of the custom status.|
|_id|query|string|false|Filter list by the _id of the custom status.|
|count|query|integer|false|The number of items to return. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|offset|query|integer|false|Number of items to "skip" in the query, i.e. requests return count items, skipping the first offset items.  Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#paginations) to learn more.|
|sort|query|object|false|Sort the order of custom user status in ascending (`1`) or descending (`-1`) order. The options are:<br> * `name`: Sort by name. For example, `sort={"name": 1}` (default) or `sort={"name": -1}`.<br> * `statusType`: Sort by status type. For example, `sort={"statusType": 1}` or sort=`{"statusType": -1}`.<br> * You can also sort using both parameters. For example, `sort={"name": 1, "statusType": -1}`.|

> Example responses

> 200 Response

```json
{
  "statuses": [
    {
      "_id": "63f61be0b000b6b6d86704c8",
      "name": "brb",
      "statusType": "away",
      "_updatedAt": "2023-02-22T13:42:56.811Z"
    }
  ],
  "count": 1,
  "offset": 0,
  "total": 1,
  "success": true
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="list-custom-user-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="list-custom-user-status-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|statuses|[object]|false|none|none|
|» _id|string|false|none|none|
|» name|string|false|none|none|
|» statusType|string|false|none|none|
|» _updatedAt|string|false|none|none|
|count|integer|false|none|none|
|offset|integer|false|none|none|
|total|integer|false|none|none|
|success|boolean|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Create Custom Status

<a id="opIdpost-api-v1-custom-user-status.create"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/custom-user-status.create \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "name": "caught up",
    "statusType": "busy"
  }'
```

`POST /api/v1/custom-user-status.create`

Create a custom user status. Permission required: `manage-user-status`

### Changelog
| Version      | Description | 
| ---------------- | ------------|
|2.4.0            | Added       |


> Body parameter

```json
{
  "name": "caught up",
  "statusType": "busy"
}
```

<h3 id="create-custom-status-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» name|body|string|true|The name of the custom status.|
|» statusType|body|string|true|The `statusType` of the custom status. Valid status type includes: `Online`, `Busy`, `Away`, `Offline`.|

> Example responses

> 200 Response

```json
{
  "customUserStatus": {
    "_id": "65462e97a2f73c7460e18f84",
    "name": "caught up",
    "statusType": "busy",
    "_updatedAt": "2023-11-04T11:44:23.366Z"
  },
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "The field Name is required [error-the-field-is-required]",
  "errorType": "error-the-field-is-required",
  "details": {
    "method": "insertOrUpdateUserStatus",
    "field": "Name"
  }
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="create-custom-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="create-custom-status-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|customUserStatus|object|false|none|none|
|» _id|string|false|none|none|
|» name|string|false|none|none|
|» statusType|string|false|none|none|
|» _updatedAt|string|false|none|none|
|success|boolean|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|
|details|object|false|none|none|
|» method|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Update Custom Status

<a id="opIdpost-api-v1-custom-user-status.update"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/custom-user-status.update \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "_id": "65462e97a2f73c7460e18f84",
    "name": "caught up again",
    "statusType": "busy"
  }'
```

`POST /api/v1/custom-user-status.update`

Update a custom status. Permission required: `manage-user-status`

### Changelog
| Version      | Description | 
| ---------------- | ------------|
|2.4.0            | Added       |

> Body parameter

```json
{
  "_id": "65462e97a2f73c7460e18f84",
  "name": "caught up again",
  "statusType": "busy"
}
```

<h3 id="update-custom-status-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» _id|body|string|true|The `_id` of the custom status.|
|» name|body|string|true|The updated name of the custom status.|
|» statusType|body|string|true|The updated `statusType` of the custom status|

> Example responses

> 200 Response

```json
{
  "customUserStatus": {
    "_id": "65462e97a2f73c7460e18f84",
    "name": "caught up again",
    "statusType": "busy",
    "_updatedAt": "2023-11-04T11:51:28.353Z"
  },
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "No custom user status found with the id of \"SeZHHb77QXWRbnDh\"."
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="update-custom-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="update-custom-status-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|customUserStatus|object|false|none|none|
|» _id|string|false|none|none|
|» name|string|false|none|none|
|» statusType|string|false|none|none|
|» _updatedAt|string|false|none|none|
|success|boolean|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Delete Custom User Status

<a id="opIdpost-api-v1-custom-user-status.delete"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/custom-user-status.delete \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "customUserStatusId": "65462e97a2f73c7460e18f84"
  }'
```

`POST /api/v1/custom-user-status.delete`

Delete a custom user status. Permission required: `manage-user-status`

### Changelog
| Version      | Description | 
| ---------------- | ------------|
|2.4.0            | Added       |

> Body parameter

```json
{
  "customUserStatusId": "65462e97a2f73c7460e18f84"
}
```

<h3 id="delete-custom-user-status-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» customUserStatusId|body|string|true|The `_id` of the custom status|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "The \"customUserStatusId\" params is required!"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="delete-custom-user-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="delete-custom-user-status-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>
