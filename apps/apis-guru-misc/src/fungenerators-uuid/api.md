<h1 id="uuid-generation-api">UUID Generation API v1.5</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

A full featured, REST based UUID generator with json/xml/jsonp result support. You can try them out right here. [Click here to subscribe](http://fungenerators.com/api/uuid/)

Base URLs:

* <a href="https://api.fungenerators.com">https://api.fungenerators.com</a>

<a href="https://fungenerators.com/terms">Terms of service</a>
Web: <a href="https://fungenerators.com/">Fun Generators</a> 

# Authentication

* API Key (X-Fungenerators-Api-Secret)
    - Parameter Name: **X-Fungenerators-Api-Secret**, in: header.

<h1 id="uuid-generation-api-uuid-generation">UUID Generation</h1>

Generate different versions of UUID easily.

<a href="https://fungenerators.com/api/uuid/">Find out more</a>

## get/uuid

> Code samples

```bash
curl https://example.com/uuid \
  -H 'Accept: application/json' \
  -H "X-Fungenerators-Api-Secret: ${API_KEY}"
```

`GET /uuid`

Generate a random UUID (v4).

<h3 id="getuuid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|count|query|integer(integer)|false|Number of UUID's to generate (defaults to 1)|

> Example responses

> 200 Response

```json
"{\n  \"success\": {\n    \"total\": 4\n  },\n  \"contents\": {\n    \"uuid\": [\n      {\n        \"uuid\": \"b201b88e-b0d2-4e82-9ea8-d2d1e25b3bd0\",\n        \"version\": 4\n      },\n      {\n        \"uuid\": \"75becbbb-ae68-4e1a-95b1-c2dfc7a5891a\",\n        \"version\": 4\n      },\n      {\n        \"uuid\": \"3cffa9ad-00a9-4d7a-87f3-85626808444f\",\n        \"version\": 4\n      },\n      {\n        \"uuid\": \"d2c477c2-a2e3-463a-a3c5-0f131c9826c2\",\n        \"version\": 4\n      }\n    ],\n    \"copyright\": {\n        \"year\": \"2020\",\n        \"url\": \"  https://fungenerators.com/random/uuid\"\n    }\n  }\n}"
```

> 401 Response

```json
"{\n    \"error\": {\n        \"code\": 401,\n        \"message\": \"Unauthorized\"\n    }\n}"
```

<h3 id="getuuid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200  response|None|
|401|Unauthorized|401  response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Fungenerators-Api-Secret
</aside>

## get/uuid/version/{version}

> Code samples

```bash
curl https://example.com/uuid/version/0 \
  -H 'Accept: application/json' \
  -H "X-Fungenerators-Api-Secret: ${API_KEY}"
```

`GET /uuid/version/{version}`

Generate a random UUID (v4).

<h3 id="getuuidversionversion-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|count|query|integer(integer)|false|Number of UUID's to generate (defaults to 1)|
|version|path|integer(integer)|true|Version of the UUID spec to use. (0-5), Use '0' for nil (00000000-0000-0000-0000-000000000000) UUID.|
|type|query|string(string)|false|For v3 and v5 of UUID Spec you can supply the type (dns/url/oid/x500/nil).|
|text|query|string(string)|false|For v3 and v5 of UUID Spec supply the text value for the type specified dns/url/oid/x500/nil. For example specify a dns/domain string if the type is "dns"|

> Example responses

> 200 Response

```json
"{\n  \"success\": {\n    \"total\": 4\n  },\n  \"contents\": {\n    \"uuid\": [\n      {\n        \"uuid\": \"b201b88e-b0d2-4e82-9ea8-d2d1e25b3bd0\",\n        \"version\": 4\n      },\n      {\n        \"uuid\": \"75becbbb-ae68-4e1a-95b1-c2dfc7a5891a\",\n        \"version\": 4\n      },\n      {\n        \"uuid\": \"3cffa9ad-00a9-4d7a-87f3-85626808444f\",\n        \"version\": 4\n      },\n      {\n        \"uuid\": \"d2c477c2-a2e3-463a-a3c5-0f131c9826c2\",\n        \"version\": 4\n      }\n    ],\n    \"copyright\": {\n        \"year\": \"2020\",\n        \"url\": \"  https://fungenerators.com/random/uuid\"\n    }\n  }\n}"
```

> 401 Response

```json
"{\n    \"error\": {\n        \"code\": 401,\n        \"message\": \"Unauthorized\"\n    }\n}"
```

<h3 id="getuuidversionversion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200  response|None|
|401|Unauthorized|401  response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Fungenerators-Api-Secret
</aside>

<h1 id="uuid-generation-api-uuid-parsing">UUID Parsing</h1>

Parse UUID string and check for its validity and return version details

<a href="https://fungenerators.com/api/uuid/">Find out more</a>

## post/uuid

> Code samples

```bash
curl 'https://example.com/uuid?uuidstr=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-Fungenerators-Api-Secret: ${API_KEY}"
```

`POST /uuid`

Parse a UUID string and return its version and check whether it is valid.

<h3 id="postuuid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|uuidstr|query|string(string)|true|UUID String to parse|

> Example responses

> 200 Response

```json
"{\n  \"success\": {\n    \"total\": 1\n  },\n  \"contents\": {\n    \"uuid\": [\n      {\n        \"is_valid\": true,\n        \"uuid\": \"14cdb9b4-de01-3faa-aff5-65bc2f771745\",\n        \"version\": 3\n      }\n    ],\n    \"copyright\": {\n      \"year\": \"2020\",\n      \"url\": \"  https://fungenerators.com/random/uuid\"\n    }\n  }\n}"
```

> 401 Response

```json
"{\n    \"error\": {\n        \"code\": 401,\n        \"message\": \"Unauthorized\"\n    }\n}"
```

<h3 id="postuuid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200  response|None|
|401|Unauthorized|401  response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Fungenerators-Api-Secret
</aside>
