<h1 id="fun-generators-api">Fun Generators API v1.5</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Below is the documentation for the API calls. You can try them out right here.

Base URLs:

* <a href="https://api.fungenerators.com">https://api.fungenerators.com</a>

* <a href="http://api.fungenerators.com">http://api.fungenerators.com</a>

# Authentication

* API Key (X-Fungenerators-Api-Secret)
    - Parameter Name: **X-Fungenerators-Api-Secret**, in: header.

<h1 id="fun-generators-api-random-riddle">Random Riddle</h1>

Generate Random Riddles

<a href="http://fungenerators.com/api/riddle">Find out more</a>

## get/riddle/random

> Code samples

```bash
curl https://example.com/riddle/random \
  -H 'Accept: application/json' \
  -H "X-Fungenerators-Api-Secret: ${API_KEY}"
```

`GET /riddle/random`

Get a random riddle for a given category(optional)

<h3 id="getriddlerandom-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|category|query|string(string)|false|Category to get the riddle from|

> Example responses

> 200 Response

```json
"{\n  \"success\": {\n    \"total\": 1\n  },\n  \"contents\": [\n    {\n      \"id\": \"1g58pgg30eUKunTSqJNLgAeF\",\n      \"riddle\": \"Why should you always carry a watch when crossing a desert?\",\n      \"answers\": [\n        \"It has a spring in it\"\n      ],\n      \"category\": \"\",\n      \"category_name\": \"\"\n    }\n  ]\n}"
```

> 401 Response

```json
"{\n    \"error\": {\n        \"code\": 401,\n        \"message\": \"Unauthorized\"\n    }\n}                    "
```

<h3 id="getriddlerandom-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200  response|None|
|401|Unauthorized|401  response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Fungenerators-Api-Secret
</aside>

## get/riddle/search

> Code samples

```bash
curl https://example.com/riddle/search \
  -H 'Accept: application/json' \
  -H "X-Fungenerators-Api-Secret: ${API_KEY}"
```

`GET /riddle/search`

Search for random riddle which has the text in the query, for a given category(optional).

<h3 id="getriddlesearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|query|query|string(string)|false|Text to search for in the riddle|
|category|query|string(string)|false|Category to get the riddle from|

> Example responses

> 200 Response

```json
"{\n  \"success\": {\n    \"total\": 1\n  },\n  \"contents\": [\n    {\n      \"id\": \"1g58pgg30eUKunTSqJNLgAeF\",\n      \"riddle\": \"Why should you always carry a watch when crossing a desert?\",\n      \"answers\": [\n        \"It has a spring in it\"\n      ],\n      \"category\": \"\",\n      \"category_name\": \"\"\n    }\n  ]\n}"
```

> 401 Response

```json
"{\n    \"error\": {\n        \"code\": 401,\n        \"message\": \"Unauthorized\"\n    }\n}                                   "
```

<h3 id="getriddlesearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200  response|None|
|401|Unauthorized|401  response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Fungenerators-Api-Secret
</aside>

<h1 id="fun-generators-api-private-riddles">Private Riddles</h1>

Store and Retrive your Riddles

<a href="http://fungenerators.com/api/riddle">Find out more</a>

## get/riddle

> Code samples

```bash
curl https://example.com/riddle \
  -H 'Accept: application/json' \
  -H "X-Fungenerators-Api-Secret: ${API_KEY}"
```

`GET /riddle`

Get a Riddle entry for a given id. Retrieves a riddle question and answer based on the id.

<h3 id="getriddle-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string(string)|false|ID of the riddle to fetch|

> Example responses

> 200 Response

```json
"{\n  \"success\": {\n    \"total\": 1\n  },\n  \"contents\": [\n    {\n      \"id\": \"1g58pgg30eUKunTSqJNLgAeF\",\n      \"riddle\": \"Why should you always carry a watch when crossing a desert?\",\n      \"answers\": [\n        \"It has a spring in it\"\n      ],\n      \"category\": \"\",\n      \"category_name\": \"\"\n    }\n  ]\n}"
```

> 401 Response

```json
"{\n    \"error\": {\n        \"code\": 401,\n        \"message\": \"Unauthorized\"\n    }\n}"
```

<h3 id="getriddle-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200  response|None|
|401|Unauthorized|401  response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Fungenerators-Api-Secret
</aside>

## put/riddle

> Code samples

```bash
curl 'https://example.com/riddle?question=string&category=string&answer=string' \
  -X PUT \
  -H 'Accept: application/json' \
  -H "X-Fungenerators-Api-Secret: ${API_KEY}"
```

`PUT /riddle`

Create a random Riddle entry.

<h3 id="putriddle-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|question|query|string(string)|true|Riddle Question|
|category|query|string(string)|true|Category of the riddle|
|answer|query|string(string)|true|Answer(s) to the riddle question|

> Example responses

> 200 Response

```json
"{\n    \"success\": {\n        \"total\": 1\n    },\n    \"contents\": {\n        \"id\": \"62D6iKM9GSlJxK5nrMf9XwrE\"\n    }\n}"
```

> 401 Response

```json
"{\n    \"error\": {\n        \"code\": 401,\n        \"message\": \"Unauthorized\"\n    }\n}"
```

<h3 id="putriddle-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200  response|None|
|401|Unauthorized|401  response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Fungenerators-Api-Secret
</aside>

## post/riddle

> Code samples

```bash
curl 'https://example.com/riddle?question=string&category=string&answer=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-Fungenerators-Api-Secret: ${API_KEY}"
```

`POST /riddle`

Create a random Riddle entry. Same as 'PUT' but can be used when some of the client libraries don't support 'PUT'.

<h3 id="postriddle-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|question|query|string(string)|true|Riddle Question|
|category|query|string(string)|true|Category of the riddle|
|answer|query|string(string)|true|Answer(s) to the riddle question|

> Example responses

> 200 Response

```json
"{\n    \"success\": {\n        \"total\": 1\n    },\n    \"contents\": {\n        \"id\": \"62D6iKM9GSlJxK5nrMf9XwrE\"\n    }\n}"
```

> 401 Response

```json
"{\n    \"error\": {\n        \"code\": 401,\n        \"message\": \"Unauthorized\"\n    }\n}"
```

<h3 id="postriddle-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200  response|None|
|401|Unauthorized|401  response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Fungenerators-Api-Secret
</aside>

## delete/riddle

> Code samples

```bash
curl 'https://example.com/riddle?id=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "X-Fungenerators-Api-Secret: ${API_KEY}"
```

`DELETE /riddle`

Create a random Riddle entry.

<h3 id="deleteriddle-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string(string)|true|Riddle ID|

> Example responses

> 200 Response

```json
"{\n    \"success\": {\n        \"total\": 1\n    },\n    \"contents\": {\n        \"mesg\": \"Riddle 62D6iKM9GSlJxK5nrMf9XwrE is deleted\"\n    }\n}"
```

> 401 Response

```json
"{\n    \"error\": {\n        \"code\": 401,\n        \"message\": \"Unauthorized\"\n    }\n}"
```

<h3 id="deleteriddle-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200  response|None|
|401|Unauthorized|401  response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Fungenerators-Api-Secret
</aside>
