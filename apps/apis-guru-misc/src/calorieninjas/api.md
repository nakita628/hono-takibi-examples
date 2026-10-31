<h1 id="calorieninjas">CalorieNinjas v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Natural language nutrition API to extract nutrition data from any text.

Base URLs:

* <a href="api.calorieninjas.com">api.calorieninjas.com</a> - CalorieNinjas API server

<a href="www.calorieninjas.com/tos">Terms of service</a>
Email: <a href="mailto:info@calorieninjas.com">CalorieNinjas team</a> 
Web: <a href="www.calorieninjas.com">CalorieNinjas team</a> 
License: <a href="http://www.apache.org/licenses/LICENSE-2.0.html">Apache 2.0</a>

<a href="www.calorieninjas.com/api">See www.calorieninjas.com/api.</a>

# Authentication

* API Key (x-api-key)
    - Parameter Name: **api_key**, in: header.

<h1 id="calorieninjas-default">Default</h1>

## Get nutrition text for an input string containing food and beverage words.

> Code samples

```bash
curl 'https://example.com/v1/nutrition?query=string' \
  -H "api_key: ${API_KEY}"
```

`GET /v1/nutrition`

Returns a list of food item nutrition facts extracted from an input string containing food and beverage words. 

<a href="www.calorieninjas.com/api">External documentation</a>

<h3 id="get-nutrition-text-for-an-input-string-containing-food-and-beverage-words-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|query|query|string|true|Input query containing food and/or beverage words.|

<h3 id="get-nutrition-text-for-an-input-string-containing-food-and-beverage-words-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Default response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
x-api-key
</aside>
