<h1 id="simplest-link">Simplest Link v1.0.1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<h1 id="simplest-link-default">Default</h1>

## get/users/{username}

> Code samples

```bash
curl https://example.com/users/string \
  -H 'Accept: application/json'
```

`GET /users/{username}`

<h3 id="getusersusername-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|username|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": 243,
  "firstname": "Reginald",
  "lastname": "McDougall"
}
```

<h3 id="getusersusername-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A representation of a user|Inline|

<h3 id="getusersusername-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|none|none|
|firstname|string|false|none|none|
|lastname|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## getPhoto

<a id="opIdgetPhoto"></a>

> Code samples

```bash
curl https://example.com/users/0/photo
```

`GET /users/{userid}/photo`

<h3 id="getphoto-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userid|path|integer|true|none|

<h3 id="getphoto-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A photo image|None|

<aside class="success">
This operation does not require authentication
</aside>
