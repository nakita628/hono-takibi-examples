<h1 id="extpose">Extpose v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Extpose — in‑store performance analytics and optimization tool for Chrome extensions. [https://extpose.com](https://extpose.com)

Base URLs:

* <a href="https://extpose.com/api/v1">https://extpose.com/api/v1</a>

<a href="https://extpose.com/privacy-policy">Terms of service</a>
Email: <a href="mailto:info@extpose.com">info@extpose.com</a> 

<a href="https://extpose.com">Find out more about Extpose</a>

# Authentication

* API Key (api_key)
    - Parameter Name: **X-API-Key**, in: header.

<h1 id="extpose-user">user</h1>

user-specific methods

## Get User Extensions

<a id="opIdgetUserExtensions"></a>

> Code samples

```bash
curl https://example.com/user-extensions \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}"
```

`GET /user-extensions`

This endpoint allows you to get list of your extensions including extensions from the watchlist.

> Example responses

> 200 Response

```json
[
  {
    "avg_rating": 4.5,
    "extension_id": 4186,
    "install_count": 2333,
    "prev_avg_rating": 4.57142857142857,
    "prev_install_count": 1225,
    "prev_rating_count": 7,
    "rating_count": 10,
    "update_ts": "Tue, 24 Sep 2019 22:16:41 GMT",
    "url": "https://chrome.google.com/webstore/detail/bitcoin-price-ticker/bgddejjmhilkdllbakkgddjodommlimc"
  }
]
```

<h3 id="get-user-extensions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid status value|None|

<h3 id="get-user-extensions-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Extension](#schemaextension)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

# Schemas

<h2 id="tocS_Extension">Extension</h2>
<!-- backwards compatibility -->
<a id="schemaextension"></a>
<a id="schema_Extension"></a>
<a id="tocSextension"></a>
<a id="tocsextension"></a>

```json
{
  "avg_rating": 4.5,
  "extension_id": 4186,
  "install_count": 2333,
  "prev_avg_rating": 4.57142857142857,
  "prev_install_count": 1225,
  "prev_rating_count": 7,
  "rating_count": 10,
  "update_ts": "Tue, 24 Sep 2019 22:16:41 GMT",
  "url": "https://chrome.google.com/webstore/detail/bitcoin-price-ticker/bgddejjmhilkdllbakkgddjodommlimc"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|avg_rating|number(float)|false|none|none|
|extension_id|integer(int64)|false|none|none|
|install_count|integer(int64)|false|none|none|
|prev_avg_rating|number(float)|false|none|none|
|prev_install_count|integer(int64)|false|none|none|
|prev_rating_count|integer(int64)|false|none|none|
|rating_count|integer(int64)|false|none|none|
|update_ts|string(date-time)|false|none|none|
|url|string(uri)|false|none|none|
