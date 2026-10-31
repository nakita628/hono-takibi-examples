<h1 id="facts-api">Facts API v1.5</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

A full featured Facts API. REST access with json/xml/jsonp result support. On this day birth and death support, random fact, keyword search support etc. Below is the documentation for the Random Facts API calls. You can try them out right here. [Click here to subscribe](http://fungenerators.com/api/facts/)

Base URLs:

* <a href="https://api.fungenerators.com">https://api.fungenerators.com</a>

<a href="https://fungenerators.com/terms">Terms of service</a>
Web: <a href="http://fungenerators.com/">Fun Generators</a> 

# Authentication

* API Key (X-Fungenerators-Api-Secret)
    - Parameter Name: **X-Fungenerators-Api-Secret**, in: header.

<h1 id="facts-api-fact-of-the-day">Fact of the day</h1>

Get fact of the day on various categories. This is refreshed daily.

<a href="http://fungenerators.com/api/facts#fact-of-the-day">Find out more</a>

## get/fact/fod

> Code samples

```bash
curl https://example.com/fact/fod \
  -H 'Accept: application/json' \
  -H "X-Fungenerators-Api-Secret: ${API_KEY}"
```

`GET /fact/fod`

Get fact of the day for the given category.

<h3 id="getfactfod-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|category|query|string(string)|false|Category to get the fact of the day from. Must be one from the list returned from /fact/fod/categories|

> Example responses

> 200 Response

```json
"{\n  \"success\": {\n    \"total\": 1\n  },\n  \"contents\": {\n    \"facts\": [\n      {\n        \"description\": \"Science Fact of the day\",\n        \"language\": \"en\",\n        \"background\": \"\",\n        \"category\": \"Science\",\n        \"date\": \"2019-10-09\",\n        \"fact\": \"In 1932 it was discovered that astronomical objects emit radio waves, and a system has been developed that makes it possible to create pictures from the radio waves. Astronomers use radio telescopes to study the radio waves being emitted from planets, dust, stars, gas clouds, comets, and other galaxies.\",\n        \"subcategory\": \"Radio Waves\"\n      }\n    ],\n    \"copyright\": \"2019-22 https://fungenerators.com\"\n  }\n}"
```

> 401 Response

```json
"{\n    \"error\": {\n        \"code\": 401,\n        \"message\": \"Unauthorized\"\n    }\n}                                        "
```

<h3 id="getfactfod-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200  response|None|
|401|Unauthorized|401  response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Fungenerators-Api-Secret
</aside>

## get/fact/fod/categories

> Code samples

```bash
curl https://example.com/fact/fod/categories \
  -H 'Accept: application/json' \
  -H "X-Fungenerators-Api-Secret: ${API_KEY}"
```

`GET /fact/fod/categories`

Get the list of supported fact of the day categories.

> Example responses

> 200 Response

```json
"{\n  \"success\": {\n    \"total\": 2\n  },\n  \"contents\": {\n    \"categories\": [\n      {\n        \"name\": \"random\",\n        \"description\": \"Random Fact of the day\",\n        \"language\": \"en\",\n        \"background\": \"\"\n      },\n      {\n        \"name\": \"science\",\n        \"description\": \"Science Fact of the day\",\n        \"language\": \"en\",\n        \"background\": \"\"\n      }\n    ],\n    \"copyright\": \"2019-22 https://fungenerators.com\"\n  }\n}"
```

> 401 Response

```json
"{\n    \"error\": {\n        \"code\": 401,\n        \"message\": \"Unauthorized\"\n    }\n}"
```

<h3 id="getfactfodcategories-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200  response|None|
|401|Unauthorized|401  response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Fungenerators-Api-Secret
</aside>

<h1 id="facts-api-number-facts">Number Facts</h1>

Get a random interesting fact about a number.

<a href="http://fungenerators.com/api/facts#number">Find out more</a>

## get/fact/numbers

> Code samples

```bash
curl 'https://example.com/fact/numbers?number=0' \
  -H 'Accept: application/json' \
  -H "X-Fungenerators-Api-Secret: ${API_KEY}"
```

`GET /fact/numbers`

Get a random fact about a number

<h3 id="getfactnumbers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|number|query|integer(integer)|true|Number value|

> Example responses

> 200 Response

```json
"{\n  \"success\": {\n    \"total\": 1\n  },\n  \"copyright\": \"2019-22 https://fungenerators.com\",\n  \"contents\": {\n    \"number\": 11,\n    \"fact\": \"11 is the largest known multiplicative persistence.\"\n  }\n}"
```

> 401 Response

```json
"{\n    \"error\": {\n        \"code\": 401,\n        \"message\": \"Unauthorized\"\n    }\n}                                        "
```

<h3 id="getfactnumbers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 Success response|None|
|401|Unauthorized|401 Unauthorized response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Fungenerators-Api-Secret
</aside>

<h1 id="facts-api-random-facts">Random Facts</h1>

Get random facts based on category and other criteria.

<a href="http://fungenerators.com/api/facts#number">Find out more</a>

## get/fact

> Code samples

```bash
curl https://example.com/fact \
  -H 'Accept: application/json' \
  -H "X-Fungenerators-Api-Secret: ${API_KEY}"
```

`GET /fact`

Get a Fact belonging to the id.

<h3 id="getfact-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string(string)|false|ID of the fact to fetch|

> Example responses

> 200 Response

```json
"{\n  \"success\":{\"total\":1},\n  \"contents\":{\n    \"fact\":\"There are more than 1,100 known tributaries flowing into the Amazon River. Tributaries are sources of water such as a small river, stream  or other water flow that reaches the river.\",\n    \"id\":\"LCN5KlSn6BMpcm3ruXhfGweF\",\n    \"category\":null,\n    \"subcategory\":null\n    \n  }\n\n  \n}"
```

> 401 Response

```json
"{\n    \"error\": {\n        \"code\": 401,\n        \"message\": \"Unauthorized\"\n    }\n}"
```

<h3 id="getfact-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200  response|None|
|401|Unauthorized|401  response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Fungenerators-Api-Secret
</aside>

## get/fact/categories

> Code samples

```bash
curl https://example.com/fact/categories \
  -H 'Accept: application/json' \
  -H "X-Fungenerators-Api-Secret: ${API_KEY}"
```

`GET /fact/categories`

Get a random Fact.

<h3 id="getfactcategories-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|start|query|integer(integer)|false|start|

> Example responses

> 200 Response

```json
"{\n    \"success\": {\n        \"total\": 1\n    },\n    \"contents\": [\n        {\n            \"id\": \"VO_foToeaTPvaDn_utYcOweF\",\n            \"question\": \"What is the unit of currency in the United States of America\",\n            \"category\": \"usa\",\n            \"category_name\": \"USA\",\n            \"answer\": [\n                \"Dollar\"\n            ]\n        }\n    ]\n}"
```

> 401 Response

```json
"{\n    \"error\": {\n        \"code\": 401,\n        \"message\": \"Unauthorized\"\n    }\n}"
```

<h3 id="getfactcategories-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200  response|None|
|401|Unauthorized|401  response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Fungenerators-Api-Secret
</aside>

## get/fact/random

> Code samples

```bash
curl https://example.com/fact/random \
  -H 'Accept: application/json' \
  -H "X-Fungenerators-Api-Secret: ${API_KEY}"
```

`GET /fact/random`

Get a random Fact for a given category(optional) and subcategory(optional).

<h3 id="getfactrandom-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|category|query|string(string)|false|Category to get the fact from|
|subcategory|query|string(string)|false|Sub Category to get the fact from|

> Example responses

> 200 Response

```json
"{\n  \"success\":{\"total\":1},\n  \"contents\":{\n    \"fact\":\"There are more than 1,100 known tributaries flowing into the Amazon River. Tributaries are sources of water such as a small river, stream  or other water flow that reaches the river.\",\n    \"id\":\"LCN5KlSn6BMpcm3ruXhfGweF\",\n    \"category\":null,\n    \"subcategory\":null\n    \n  }\n\n  \n}"
```

> 401 Response

```json
"{\n    \"error\": {\n        \"code\": 401,\n        \"message\": \"Unauthorized\"\n    }\n}                    "
```

<h3 id="getfactrandom-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200  response|None|
|401|Unauthorized|401  response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Fungenerators-Api-Secret
</aside>

## get/fact/search

> Code samples

```bash
curl https://example.com/fact/search \
  -H 'Accept: application/json' \
  -H "X-Fungenerators-Api-Secret: ${API_KEY}"
```

`GET /fact/search`

Search for random Fact which has the text in the query, for a given category(optional) and subcategory(optional).

<h3 id="getfactsearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|query|query|string(string)|false|Text to search for in the facts|
|category|query|string(string)|false|Category to get the fact from|
|subcategory|query|string(string)|false|Sub Category to get the fact from|

> Example responses

> 200 Response

```json
"{\n  \"success\":{\"total\":1},\n  \"contents\":{\n    \"fact\":\"There are more than 1,100 known tributaries flowing into the Amazon River. Tributaries are sources of water such as a small river, stream  or other water flow that reaches the river.\",\n    \"id\":\"LCN5KlSn6BMpcm3ruXhfGweF\",\n    \"category\": \"Rivers\",\n    \"subcategory\": \"Amazon River\"\n    \n  }\n\n  \n}"
```

> 401 Response

```json
"{\n    \"error\": {\n        \"code\": 401,\n        \"message\": \"Unauthorized\"\n    }\n}                    "
```

<h3 id="getfactsearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200  response|None|
|401|Unauthorized|401  response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Fungenerators-Api-Secret
</aside>

<h1 id="facts-api-on-this-day">On this day</h1>

On this day historical events for birth, death and other events.

<a href="http://fungenerators.com/api/facts#number">Find out more</a>

## get/fact/onthisday/born

> Code samples

```bash
curl https://example.com/fact/onthisday/born \
  -H 'Accept: application/json' \
  -H "X-Fungenerators-Api-Secret: ${API_KEY}"
```

`GET /fact/onthisday/born`

Returns a random ( famous/ relatively famous ) person born on a given day and month

<h3 id="getfactonthisdayborn-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|month|query|string(string)|false|Optional month (1-12). Defaults to current month|
|day|query|string(string)|false|Optional day of the month (1- 28/30/31 based on the month). Defaults to current day of the month.|

> Example responses

> 200 Response

```json
"{\n  \"success\": {\n    \"total\": 1\n  },\n  \"contents\": [\n    {\n      \"name\": \"Edward R. Bradley\",\n      \"occupation\": \"American businessman and horse owner (1st to own 4 Kentucky Derby winners)\",\n      \"notable\": null,\n      \"born\": \"1859-12-12\",\n      \"died\": \"1946-08-15\"\n    }\n  ]\n}"
```

> 401 Response

```json
"{\n    \"error\": {\n        \"code\": 401,\n        \"message\": \"Unauthorized\"\n    }\n}"
```

<h3 id="getfactonthisdayborn-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200  response|None|
|401|Unauthorized|401  response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Fungenerators-Api-Secret
</aside>

## get/fact/onthisday/died

> Code samples

```bash
curl https://example.com/fact/onthisday/died \
  -H 'Accept: application/json' \
  -H "X-Fungenerators-Api-Secret: ${API_KEY}"
```

`GET /fact/onthisday/died`

Returns a random ( famous/ relatively famous ) person died on a given day and month

<h3 id="getfactonthisdaydied-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|month|query|string(string)|false|Optional month (1-12). Defaults to current month|
|day|query|string(string)|false|Optional day of the month (1- 28/30/31 based on the month). Defaults to current day of the month.|

> Example responses

> 200 Response

```json
"{\n  \"success\": {\n    \"total\": 1\n  },\n  \"contents\": [\n    {\n      \"name\": \"Edward R. Bradley\",\n      \"occupation\": \"American businessman and horse owner (1st to own 4 Kentucky Derby winners)\",\n      \"notable\": null,\n      \"born\": \"1859-12-12\",\n      \"died\": \"1946-08-15\"\n    }\n  ]\n}"
```

> 401 Response

```json
"{\n    \"error\": {\n        \"code\": 401,\n        \"message\": \"Unauthorized\"\n    }\n}"
```

<h3 id="getfactonthisdaydied-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200  response|None|
|401|Unauthorized|401  response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Fungenerators-Api-Secret
</aside>

## get/fact/onthisday/event

> Code samples

```bash
curl https://example.com/fact/onthisday/event \
  -H 'Accept: application/json' \
  -H "X-Fungenerators-Api-Secret: ${API_KEY}"
```

`GET /fact/onthisday/event`

Returns a random ( famous/ relatively famous ) historic event on a given day and month

<h3 id="getfactonthisdayevent-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|month|query|string(string)|false|Optional month (1-12). Defaults to current month|
|day|query|string(string)|false|Optional day of the month (1- 28/30/31 based on the month). Defaults to current day of the month.|

> Example responses

> 200 Response

```json
"{\n  \"success\": {\n    \"total\": 1\n  },\n  \"contents\": {\n    \"id\": \"KVlPpVL119DtLFtphgOxqQeF\",\n    \"day\": \"26\",\n    \"month\": \"8\",\n    \"year\": \"1883\",\n    \"date\": \"1883-8-26\",\n    \"event_type\": \"event\",\n    \"event\": \"The Indonesian island of Krakatoa erupts in the largest explosion recorded in history, heard 2,200 miles away in Madagascar. The resulting destruction sends volcanic ash up 50 miles into the atmosphere and kills almost 36,000 people–both on the island itself and from the resulting 131-foot tidal waves that obliterate 163 villages on the shores of nearby Java and Sumatra.\"\n  }\n}"
```

> 401 Response

```json
"{\n    \"error\": {\n        \"code\": 401,\n        \"message\": \"Unauthorized\"\n    }\n}"
```

<h3 id="getfactonthisdayevent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200  response|None|
|401|Unauthorized|401  response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Fungenerators-Api-Secret
</aside>

<h1 id="facts-api-private-facts">Private Facts</h1>

Store and manage your own Facts online

<a href="http://fungenerators.com/api/facts#private">Find out more</a>

## put/fact

> Code samples

```bash
curl 'https://example.com/fact?fact=string&category=string&subcategory=string&tags=string' \
  -X PUT \
  -H 'Accept: application/json' \
  -H "X-Fungenerators-Api-Secret: ${API_KEY}"
```

`PUT /fact`

Add a Fact entry to the database (private collection).

<h3 id="putfact-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fact|query|string(string)|true|Fact Text|
|category|query|string(string)|true|Category of the fact|
|subcategory|query|string(string)|true|Sub Category of the fact|
|tags|query|string(string)|true|Tags|

> Example responses

> 200 Response

```json
"{\n    \"success\": {\n        \"total\": 1\n    },\n    \"contents\": {\n        \"id\": \"62D6iKM9GSlJxK5nrMf9XwrE\"\n    }\n}"
```

> 401 Response

```json
"{\n    \"error\": {\n        \"code\": 401,\n        \"message\": \"Unauthorized\"\n    }\n}"
```

<h3 id="putfact-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200  response|None|
|401|Unauthorized|401  response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Fungenerators-Api-Secret
</aside>

## delete/fact

> Code samples

```bash
curl 'https://example.com/fact?id=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "X-Fungenerators-Api-Secret: ${API_KEY}"
```

`DELETE /fact`

Delete a Fact entry identified by the id.

<h3 id="deletefact-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string(string)|true|Fact ID|

> Example responses

> 200 Response

```json
"{\n    \"success\": {\n        \"total\": 1\n    },\n    \"contents\": {\n        \"mesg\": \"Fact 62D6iKM9GSlJxK5nrMf9XwrE is deleted\"\n    }\n}"
```

> 401 Response

```json
"{\n    \"error\": {\n        \"code\": 401,\n        \"message\": \"Unauthorized\"\n    }\n}"
```

<h3 id="deletefact-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200  response|None|
|401|Unauthorized|401  response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Fungenerators-Api-Secret
</aside>
