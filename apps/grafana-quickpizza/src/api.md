<h1 id="quickpizza-api">QuickPizza API v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

QuickPizza is a web application that generates new and exciting pizza combinations.

This API allows you to get random pizza recommendations, rate pizzas, and manage ingredients, tools and other pizza-related data.

Base URLs:

* <a href="http://localhost:3333">http://localhost:3333</a> - Default local server

* <a href="https://quickpizza.grafana.com">https://quickpizza.grafana.com</a> - Production server

Email: <a href="mailto:support@quickpizza.example">support@quickpizza.example</a> 

# Authentication

* API Key (authToken)
    - Parameter Name: **Authorization**, in: header. Authorization token header with format "Token {16 chars}"

<h1 id="quickpizza-api-pizza">pizza</h1>

Pizza related endpoints including recommendations, and catalog of ingredients, doughs and tools

## Get a pizza recommendation

<a id="opIdgetPizzaRecommendation"></a>

> Code samples

```bash
curl http://localhost:3333/api/pizza \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "maxCaloriesPerSlice": 800,
    "mustBeVegetarian": true,
    "excludedIngredients": [
      "anchovies",
      "bacon"
    ],
    "excludedTools": [],
    "maxNumberOfToppings": 4,
    "minNumberOfToppings": 2
  }'
```

`POST /api/pizza`

Returns a randomly generated pizza with ingredients, tool, and calories

> Body parameter

```json
{
  "maxCaloriesPerSlice": 800,
  "mustBeVegetarian": true,
  "excludedIngredients": [
    "anchovies",
    "bacon"
  ],
  "excludedTools": [],
  "maxNumberOfToppings": 4,
  "minNumberOfToppings": 2
}
```

<h3 id="get-a-pizza-recommendation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Restrictions](#schemarestrictions)|false|Restrictions for the pizza recommendation|
|» maxCaloriesPerSlice|body|integer|false|Maximum calories per slice|
|» mustBeVegetarian|body|boolean|false|Whether the pizza must be vegetarian|
|» excludedIngredients|body|[string]|false|Ingredients to exclude|
|» excludedTools|body|[string]|false|Tools to exclude|
|» maxNumberOfToppings|body|integer|false|Maximum number of toppings|
|» minNumberOfToppings|body|integer|false|Minimum number of toppings|
|» customName|body|string|false|Custom name for the pizza|

> Example responses

> 200 Response

```json
{
  "pizza": {
    "id": 1,
    "name": "The Savory Margherita",
    "dough": {
      "id": 1,
      "name": "Traditional",
      "caloriesPerSlice": 200
    },
    "ingredients": [
      {
        "id": 1,
        "name": "Extra Virgin Olive Oil",
        "caloriesPerSlice": 120,
        "vegetarian": true
      },
      {
        "id": 2,
        "name": "San Marzano Tomatoes",
        "caloriesPerSlice": 30,
        "vegetarian": true
      },
      {
        "id": 3,
        "name": "Buffalo Mozzarella",
        "caloriesPerSlice": 150,
        "vegetarian": true
      },
      {
        "id": 4,
        "name": "Fresh Basil",
        "caloriesPerSlice": 5,
        "vegetarian": true
      }
    ],
    "tool": "Wood Fired Oven"
  },
  "calories": 505,
  "vegetarian": true
}
```

<h3 id="get-a-pizza-recommendation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[PizzaRecommendation](#schemapizzarecommendation)|
|401|Unauthorized|Unauthorized|None|
|500|Internal Server Error|Internal server error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authToken
</aside>

## Get a specific pizza recommendation

<a id="opIdgetPizzaById"></a>

> Code samples

```bash
curl http://localhost:3333/api/pizza/1 \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/pizza/{id}`

Returns a specific pizza recommendation by ID

<h3 id="get-a-specific-pizza-recommendation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|ID of the pizza to get|

> Example responses

> 200 Response

```json
{
  "id": 1,
  "name": "The Savory Margherita",
  "dough": {
    "id": 1,
    "name": "Traditional",
    "caloriesPerSlice": 200
  },
  "ingredients": [
    {
      "id": 1,
      "name": "Extra Virgin Olive Oil",
      "caloriesPerSlice": 120,
      "vegetarian": true
    }
  ],
  "tool": "Wood Fired Oven"
}
```

<h3 id="get-a-specific-pizza-recommendation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[Pizza](#schemapizza)|
|404|Not Found|Pizza not found|None|
|500|Internal Server Error|Internal server error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authToken
</aside>

## Get ingredients by type

<a id="opIdgetIngredientsByType"></a>

> Code samples

```bash
curl http://localhost:3333/api/ingredients/topping \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/ingredients/{type}`

Returns ingredients of a specific type (olive_oil, tomato, mozzarella, topping)

<h3 id="get-ingredients-by-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|type|path|string|true|Type of ingredients to get|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|olive_oil|
|type|tomato|
|type|mozzarella|
|type|topping|

> Example responses

> 200 Response

```json
{
  "ingredients": [
    {
      "id": 1,
      "name": "Pepperoni",
      "caloriesPerSlice": 90,
      "vegetarian": false
    },
    {
      "id": 2,
      "name": "Mushrooms",
      "caloriesPerSlice": 15,
      "vegetarian": true
    }
  ]
}
```

<h3 id="get-ingredients-by-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|
|400|Bad Request|Invalid ingredient type|None|
|401|Unauthorized|Unauthorized|None|
|500|Internal Server Error|Internal server error|None|

<h3 id="get-ingredients-by-type-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ingredients|[[Ingredient](#schemaingredient)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authToken
</aside>

## Get all doughs

<a id="opIdgetDoughs"></a>

> Code samples

```bash
curl http://localhost:3333/api/doughs \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/doughs`

Returns all available dough types

> Example responses

> 200 Response

```json
{
  "doughs": [
    {
      "id": 1,
      "name": "Traditional",
      "caloriesPerSlice": 200
    },
    {
      "id": 2,
      "name": "Thin Crust",
      "caloriesPerSlice": 150
    },
    {
      "id": 3,
      "name": "Deep Dish",
      "caloriesPerSlice": 300
    }
  ]
}
```

<h3 id="get-all-doughs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|
|401|Unauthorized|Unauthorized|None|
|500|Internal Server Error|Internal server error|None|

<h3 id="get-all-doughs-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|doughs|[[Dough](#schemadough)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authToken
</aside>

## Get all tools

<a id="opIdgetTools"></a>

> Code samples

```bash
curl http://localhost:3333/api/tools \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/tools`

Returns all available pizza-making tools

> Example responses

> 200 Response

```json
{
  "tools": [
    "Wood Fired Oven",
    "Pizza Stone",
    "Gas Oven",
    "Electric Oven"
  ]
}
```

<h3 id="get-all-tools-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|
|401|Unauthorized|Unauthorized|None|
|500|Internal Server Error|Internal server error|None|

<h3 id="get-all-tools-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tools|[string]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authToken
</aside>

<h1 id="quickpizza-api-pizza-text">pizza-text</h1>

Text content for pizza naming and description

## Get pizza quotes

<a id="opIdgetQuotes"></a>

> Code samples

```bash
curl http://localhost:3333/api/quotes \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/quotes`

Returns a list of pizza-related quotes

> Example responses

> 200 Response

```json
{
  "quotes": [
    "Life is too short for bad pizza.",
    "A slice a day keeps the sadness away.",
    "In crust we trust."
  ]
}
```

<h3 id="get-pizza-quotes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|
|500|Internal Server Error|Internal server error|None|

<h3 id="get-pizza-quotes-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|quotes|[string]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authToken
</aside>

## Get classical names

<a id="opIdgetNames"></a>

> Code samples

```bash
curl http://localhost:3333/api/names \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/names`

Returns a list of classical names for pizza naming

> Example responses

> 200 Response

```json
{
  "names": [
    "Margherita",
    "Napolitana",
    "Quattro Formaggi",
    "Diavola"
  ]
}
```

<h3 id="get-classical-names-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|
|500|Internal Server Error|Internal server error|None|

<h3 id="get-classical-names-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|names|[string]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authToken
</aside>

## Get adjectives

<a id="opIdgetAdjectives"></a>

> Code samples

```bash
curl http://localhost:3333/api/adjectives \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/adjectives`

Returns a list of adjectives for pizza naming

> Example responses

> 200 Response

```json
{
  "adjectives": [
    "Savory",
    "Delicious",
    "Crispy",
    "Amazing"
  ]
}
```

<h3 id="get-adjectives-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|
|500|Internal Server Error|Internal server error|None|

<h3 id="get-adjectives-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adjectives|[string]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authToken
</aside>

<h1 id="quickpizza-api-ratings">ratings</h1>

Pizza rating operations

## Get all ratings by user

<a id="opIdgetRatings"></a>

> Code samples

```bash
curl http://localhost:3333/api/ratings \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/ratings`

Returns all ratings made by the current user

> Example responses

> 200 Response

```json
{
  "ratings": [
    {
      "id": 1,
      "stars": 5,
      "pizza_id": 1
    },
    {
      "id": 2,
      "stars": 4,
      "pizza_id": 2
    }
  ]
}
```

<h3 id="get-all-ratings-by-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|
|401|Unauthorized|Unauthorized|None|
|500|Internal Server Error|Internal server error|None|

<h3 id="get-all-ratings-by-user-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ratings|[[Rating](#schemarating)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authToken
</aside>

## Create a new rating

<a id="opIdcreateRating"></a>

> Code samples

```bash
curl http://localhost:3333/api/ratings \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "stars": 5,
    "pizza_id": 1
  }'
```

`POST /api/ratings`

Record a new pizza rating

> Body parameter

```json
{
  "stars": 5,
  "pizza_id": 1
}
```

<h3 id="create-a-new-rating-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Rating](#schemarating)|true|Rating information|
|» stars|body|integer|true|Rating score (1-5)|
|» pizza_id|body|integer(int64)|true|ID of the pizza being rated|

> Example responses

> 201 Response

```json
{
  "id": 1,
  "stars": 5,
  "pizza_id": 1
}
```

<h3 id="create-a-new-rating-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Rating created successfully|[Rating](#schemarating)|
|400|Bad Request|Invalid input|None|
|401|Unauthorized|Unauthorized|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authToken
</aside>

## Delete all ratings

<a id="opIddeleteAllRatings"></a>

> Code samples

```bash
curl http://localhost:3333/api/ratings \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /api/ratings`

Delete all ratings for the current user

<h3 id="delete-all-ratings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|All ratings deleted successfully|None|
|401|Unauthorized|Unauthorized|None|
|500|Internal Server Error|Internal server error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authToken
</aside>

## Get a specific rating

<a id="opIdgetRatingById"></a>

> Code samples

```bash
curl http://localhost:3333/api/ratings/1 \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/ratings/{id}`

Get a specific rating by ID

<h3 id="get-a-specific-rating-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|ID of the rating to get|

> Example responses

> 200 Response

```json
{
  "id": 1,
  "stars": 5,
  "pizza_id": 1
}
```

<h3 id="get-a-specific-rating-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[Rating](#schemarating)|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Rating not found|None|
|500|Internal Server Error|Internal server error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authToken
</aside>

## Update a rating

<a id="opIdupdateRating"></a>

> Code samples

```bash
curl http://localhost:3333/api/ratings/1 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "stars": 4,
    "pizza_id": 1
  }'
```

`PUT /api/ratings/{id}`

Update an existing rating

> Body parameter

```json
{
  "stars": 4,
  "pizza_id": 1
}
```

<h3 id="update-a-rating-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|ID of the rating to update|
|body|body|[Rating](#schemarating)|true|Updated rating|
|» stars|body|integer|true|Rating score (1-5)|
|» pizza_id|body|integer(int64)|true|ID of the pizza being rated|

> Example responses

> 200 Response

```json
{
  "id": 1,
  "stars": 4,
  "pizza_id": 1
}
```

<h3 id="update-a-rating-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Rating updated successfully|[Rating](#schemarating)|
|400|Bad Request|Invalid input|None|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Rating not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authToken
</aside>

## Delete a rating

<a id="opIddeleteRating"></a>

> Code samples

```bash
curl http://localhost:3333/api/ratings/1 \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /api/ratings/{id}`

Delete a rating by ID

<h3 id="delete-a-rating-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|ID of the rating to delete|

<h3 id="delete-a-rating-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Rating deleted successfully|None|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Rating not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authToken
</aside>

## Partially update a rating

<a id="opIdpatchRating"></a>

> Code samples

```bash
curl http://localhost:3333/api/ratings/1 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "stars": 3
  }'
```

`PATCH /api/ratings/{id}`

Partially update an existing rating

> Body parameter

```json
{
  "stars": 3
}
```

<h3 id="partially-update-a-rating-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|ID of the rating to update|
|body|body|[Rating](#schemarating)|true|Updated rating fields|
|» stars|body|integer|true|Rating score (1-5)|
|» pizza_id|body|integer(int64)|true|ID of the pizza being rated|

> Example responses

> 200 Response

```json
{
  "id": 1,
  "stars": 3,
  "pizza_id": 1
}
```

<h3 id="partially-update-a-rating-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Rating updated successfully|[Rating](#schemarating)|
|400|Bad Request|Invalid input|None|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Rating not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authToken
</aside>

<h1 id="quickpizza-api-users">users</h1>

User management

## Register a new user

<a id="opIdregisterUser"></a>

> Code samples

```bash
curl http://localhost:3333/api/users \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "username": "pizzalover123",
    "password": "securepassword"
  }'
```

`POST /api/users`

Create a new user account

> Body parameter

```json
{
  "username": "pizzalover123",
  "password": "securepassword"
}
```

<h3 id="register-a-new-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|User registration information|
|» username|body|string|true|none|
|» password|body|string|true|none|

> Example responses

> 201 Response

```json
{
  "id": 1,
  "username": "pizzalover123"
}
```

<h3 id="register-a-new-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|User created successfully|Inline|
|400|Bad Request|Invalid input or username already taken|None|

<h3 id="register-a-new-user-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|false|none|none|
|username|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authToken
</aside>

## User login

<a id="opIdloginUser"></a>

> Code samples

```bash
curl http://localhost:3333/api/users/token/login \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "username": "pizzalover123",
    "password": "securepassword",
    "csrf": "abc123def456ghi789"
  }'
```

`POST /api/users/token/login`

Authenticate a user and receive an auth token

> Body parameter

```json
{
  "username": "pizzalover123",
  "password": "securepassword",
  "csrf": "abc123def456ghi789"
}
```

<h3 id="user-login-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|set_cookie|query|boolean|false|Whether to set authentication cookie|
|body|body|object|true|Login information|
|» username|body|string|true|none|
|» password|body|string|true|none|
|» csrf|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "token": "abcdef1234567890"
}
```

<h3 id="user-login-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Login successful|Inline|
|401|Unauthorized|Invalid credentials|None|

<h3 id="user-login-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|token|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authToken
</aside>

## User logout

<a id="opIdlogoutUser"></a>

> Code samples

```bash
curl http://localhost:3333/api/users/token/logout \
  -X POST \
  -H "Authorization: ${API_KEY}"
```

`POST /api/users/token/logout`

Invalidate the user token cookie

<h3 id="user-logout-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Logout successful|None|
|401|Unauthorized|Unauthorized|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authToken
</aside>

## Admin login

<a id="opIdadminLogin"></a>

> Code samples

```bash
curl 'http://localhost:3333/api/admin/login?user=admin&password=admin' \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`POST /api/admin/login`

Login as an administrator

<h3 id="admin-login-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user|query|string|true|Admin username|
|password|query|string|true|Admin password|

> Example responses

> 200 Response

```json
{
  "token": "c7jn1o1kb71p30h7f1bg"
}
```

<h3 id="admin-login-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Admin login successful|Inline|
|400|Bad Request|Missing credentials|None|
|401|Unauthorized|Invalid credentials|None|

<h3 id="admin-login-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|token|string|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Set-Cookie|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authToken
</aside>

## Get CSRF token

<a id="opIdgetCsrfToken"></a>

> Code samples

```bash
curl http://localhost:3333/api/csrf-token \
  -X POST \
  -H "Authorization: ${API_KEY}"
```

`POST /api/csrf-token`

Get a CSRF token for form submissions

<h3 id="get-csrf-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|CSRF token set in cookies|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Set-Cookie|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authToken
</aside>

<h1 id="quickpizza-api-system">system</h1>

Endpoints for system health and readiness checks along with metrics

## Get application configuration

<a id="opIdgetConfig"></a>

> Code samples

```bash
curl http://localhost:3333/api/config \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/config`

Get the current application configuration

> Example responses

> 200 Response

```json
{
  "version": "1.0.0",
  "environment": "development"
}
```

<h3 id="get-application-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|
|500|Internal Server Error|Internal server error|None|

<h3 id="get-application-configuration-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authToken
</aside>

## Readiness probe

<a id="opIdreadinessProbe"></a>

> Code samples

```bash
curl http://localhost:3333/ready \
  -H "Authorization: ${API_KEY}"
```

`GET /ready`

Check if the application is ready to accept requests

<h3 id="readiness-probe-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Application is ready|None|
|500|Internal Server Error|Application is not ready|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authToken
</aside>

## Liveness probe

<a id="opIdlivenessProbe"></a>

> Code samples

```bash
curl http://localhost:3333/healthz \
  -H "Authorization: ${API_KEY}"
```

`GET /healthz`

Check if the application is live

<h3 id="liveness-probe-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Application is live|None|
|500|Internal Server Error|Application is not live|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authToken
</aside>

## Prometheus metrics

<a id="opIdgetMetrics"></a>

> Code samples

```bash
curl http://localhost:3333/metrics \
  -H "Authorization: ${API_KEY}"
```

`GET /metrics`

Get Prometheus metrics

<h3 id="prometheus-metrics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Metrics returned|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authToken
</aside>

<h1 id="quickpizza-api-httptesting">httptesting</h1>

HTTP testing endpoints similar to httpbin.org

## Return specific status code

<a id="opIdgetStatus"></a>

> Code samples

```bash
curl http://localhost:3333/api/status/418 \
  -H "Authorization: ${API_KEY}"
```

`GET /api/status/{status}`

Returns the specified HTTP status code. The status code must be between 100 and 599 (inclusive). Any values outside this range will result in a 400 Bad Request response.

<h3 id="return-specific-status-code-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|status|path|integer|true|Status code to return (must be between 100 and 599 inclusive)|

<h3 id="return-specific-status-code-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Response with the requested status code|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authToken
</aside>

## Get random bytes

<a id="opIdgetBytes"></a>

> Code samples

```bash
curl http://localhost:3333/api/bytes/1024 \
  -H "Authorization: ${API_KEY}"
```

`GET /api/bytes/{n}`

Returns n random bytes

<h3 id="get-random-bytes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|n|path|integer|true|Number of bytes to return|

<h3 id="get-random-bytes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Random bytes|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authToken
</aside>

## Delayed response

<a id="opIdgetDelay"></a>

> Code samples

```bash
curl http://localhost:3333/api/delay/2s \
  -H "Authorization: ${API_KEY}"
```

`GET /api/delay/{delay}`

Delays the response for the specified time

<h3 id="delayed-response-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|delay|path|string|true|Delay duration (with or without unit, defaults to seconds)|

<h3 id="delayed-response-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Response after delay|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authToken
</aside>

## Simple GET endpoint

<a id="opIdhttpGet"></a>

> Code samples

```bash
curl http://localhost:3333/api/get \
  -H "Authorization: ${API_KEY}"
```

`GET /api/get`

Test endpoint for GET requests

<h3 id="simple-get-endpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authToken
</aside>

## Simple DELETE endpoint

<a id="opIdhttpDelete"></a>

> Code samples

```bash
curl http://localhost:3333/api/delete \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /api/delete`

Test endpoint for DELETE requests

<h3 id="simple-delete-endpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authToken
</aside>

## Echo POST data

<a id="opIdhttpPost"></a>

> Code samples

```bash
curl http://localhost:3333/api/post \
  -X POST \
  -H 'Content-Type: */*' \
  -H "Authorization: ${API_KEY}" \
  -d 'string'
```

`POST /api/post`

Returns the POSTed data back in the response

> Body parameter

```text
string
```

<h3 id="echo-post-data-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|string|false|none|

<h3 id="echo-post-data-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Request body echoed back|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authToken
</aside>

## Echo PUT data

<a id="opIdhttpPut"></a>

> Code samples

```bash
curl http://localhost:3333/api/put \
  -X PUT \
  -H 'Content-Type: */*' \
  -H "Authorization: ${API_KEY}" \
  -d 'string'
```

`PUT /api/put`

Returns the PUT data back in the response

> Body parameter

```text
string
```

<h3 id="echo-put-data-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|string|false|none|

<h3 id="echo-put-data-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Request body echoed back|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authToken
</aside>

## Echo PATCH data

<a id="opIdhttpPatch"></a>

> Code samples

```bash
curl http://localhost:3333/api/patch \
  -X PATCH \
  -H 'Content-Type: */*' \
  -H "Authorization: ${API_KEY}" \
  -d 'string'
```

`PATCH /api/patch`

Returns the PATCH data back in the response

> Body parameter

```text
string
```

<h3 id="echo-patch-data-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|string|false|none|

<h3 id="echo-patch-data-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Request body echoed back|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authToken
</aside>

## Get cookies

<a id="opIdgetCookies"></a>

> Code samples

```bash
curl http://localhost:3333/api/cookies \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/cookies`

Returns all the cookies sent with the request

> Example responses

> 200 Response

```json
{
  "cookies": {
    "cookie1": "value1",
    "cookie2": "value2"
  }
}
```

<h3 id="get-cookies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Cookies in the request|Inline|

<h3 id="get-cookies-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cookies|object|false|none|none|
|» **additionalProperties**|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authToken
</aside>

## Set cookies

<a id="opIdsetCookies"></a>

> Code samples

```bash
curl http://localhost:3333/api/cookies \
  -X POST \
  -H "Authorization: ${API_KEY}"
```

`POST /api/cookies`

Sets cookies according to query parameters

<h3 id="set-cookies-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cookieName|query|string|false|Cookie name and value (multiple query parameters allowed)|

<h3 id="set-cookies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Cookies have been set|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Set-Cookie|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authToken
</aside>

## Get request headers

<a id="opIdgetHeaders"></a>

> Code samples

```bash
curl http://localhost:3333/api/headers \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/headers`

Returns the headers sent with the request

> Example responses

> 200 Response

```json
{
  "headers": {
    "User-Agent": "curl/7.64.1",
    "Accept": "*/*",
    "Host": "localhost:3333"
  }
}
```

<h3 id="get-request-headers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Headers in the request|Inline|

<h3 id="get-request-headers-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|headers|object|false|none|none|
|» **additionalProperties**|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authToken
</aside>

## Basic auth test

<a id="opIdbasicAuth"></a>

> Code samples

```bash
curl http://localhost:3333/api/basic-auth/user/password \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/basic-auth/{username}/{password}`

Test endpoint for basic auth

<h3 id="basic-auth-test-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|username|path|string|true|Expected username|
|password|path|string|true|Expected password|

> Example responses

> 200 Response

```json
{
  "user": "user",
  "password": "password",
  "authenticated": true
}
```

<h3 id="basic-auth-test-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Basic auth result|Inline|

<h3 id="basic-auth-test-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|user|string|false|none|none|
|password|string|false|none|none|
|authenticated|boolean|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authToken
</aside>

## Query params as JSON

<a id="opIdgetJson"></a>

> Code samples

```bash
curl http://localhost:3333/api/json \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/json`

Returns the query parameters as JSON

<h3 id="query-params-as-json-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|param|query|string|false|Any query parameter (multiple allowed)|

> Example responses

> 200 Response

```json
{
  "param1": "value1",
  "param2": "value2"
}
```

<h3 id="query-params-as-json-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Query parameters as JSON|Inline|

<h3 id="query-params-as-json-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authToken
</aside>

## Query params as XML

<a id="opIdgetXml"></a>

> Code samples

```bash
curl http://localhost:3333/api/xml \
  -H "Authorization: ${API_KEY}"
```

`GET /api/xml`

Returns the query parameters as XML

<h3 id="query-params-as-xml-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|param|query|string|false|Any query parameter (multiple allowed)|

> Example responses

> 200 Response

```text
<response>
  <params>
    <key>param1</key>
    <value>value1</value>
    <index>0</index>
  </params>
  <params>
    <key>param2</key>
    <value>value2</value>
    <index>1</index>
  </params>
</response>

```

<h3 id="query-params-as-xml-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Query parameters as XML|Inline|

<h3 id="query-params-as-xml-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|params|[object]|false|none|none|
|» key|string|false|none|none|
|» value|string|false|none|none|
|» index|integer|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authToken
</aside>

# Schemas

<h2 id="tocS_PizzaRecommendation">PizzaRecommendation</h2>
<!-- backwards compatibility -->
<a id="schemapizzarecommendation"></a>
<a id="schema_PizzaRecommendation"></a>
<a id="tocSpizzarecommendation"></a>
<a id="tocspizzarecommendation"></a>

```json
{
  "pizza": {
    "id": 1,
    "name": "The Savory Margherita",
    "dough": {
      "id": 1,
      "name": "Traditional",
      "caloriesPerSlice": 200
    },
    "ingredients": [
      {
        "id": 1,
        "name": "Extra Virgin Olive Oil",
        "caloriesPerSlice": 120,
        "vegetarian": true
      }
    ],
    "tool": "Wood Fired Oven"
  },
  "calories": 505,
  "vegetarian": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pizza|[Pizza](#schemapizza)|false|none|none|
|calories|integer|false|none|Total calories per slice|
|vegetarian|boolean|false|none|Whether the pizza is vegetarian|

<h2 id="tocS_Pizza">Pizza</h2>
<!-- backwards compatibility -->
<a id="schemapizza"></a>
<a id="schema_Pizza"></a>
<a id="tocSpizza"></a>
<a id="tocspizza"></a>

```json
{
  "id": 1,
  "name": "The Savory Margherita",
  "dough": {
    "id": 1,
    "name": "Traditional",
    "caloriesPerSlice": 200
  },
  "ingredients": [
    {
      "id": 1,
      "name": "Extra Virgin Olive Oil",
      "caloriesPerSlice": 120,
      "vegetarian": true
    }
  ],
  "tool": "Wood Fired Oven"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|false|none|none|
|name|string|false|none|none|
|dough|[Dough](#schemadough)|false|none|none|
|ingredients|[[Ingredient](#schemaingredient)]|false|none|none|
|tool|string|false|none|Tool used to make the pizza|

<h2 id="tocS_Dough">Dough</h2>
<!-- backwards compatibility -->
<a id="schemadough"></a>
<a id="schema_Dough"></a>
<a id="tocSdough"></a>
<a id="tocsdough"></a>

```json
{
  "id": 1,
  "name": "Traditional",
  "caloriesPerSlice": 200
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|false|none|none|
|name|string|false|none|none|
|caloriesPerSlice|integer|false|none|none|

<h2 id="tocS_Ingredient">Ingredient</h2>
<!-- backwards compatibility -->
<a id="schemaingredient"></a>
<a id="schema_Ingredient"></a>
<a id="tocSingredient"></a>
<a id="tocsingredient"></a>

```json
{
  "id": 1,
  "name": "Extra Virgin Olive Oil",
  "caloriesPerSlice": 120,
  "vegetarian": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|false|none|none|
|name|string|false|none|none|
|caloriesPerSlice|integer|false|none|none|
|vegetarian|boolean|false|none|none|

<h2 id="tocS_Rating">Rating</h2>
<!-- backwards compatibility -->
<a id="schemarating"></a>
<a id="schema_Rating"></a>
<a id="tocSrating"></a>
<a id="tocsrating"></a>

```json
{
  "id": 1,
  "stars": 5,
  "pizza_id": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|false|read-only|none|
|stars|integer|true|none|Rating score (1-5)|
|pizza_id|integer(int64)|true|none|ID of the pizza being rated|

<h2 id="tocS_Restrictions">Restrictions</h2>
<!-- backwards compatibility -->
<a id="schemarestrictions"></a>
<a id="schema_Restrictions"></a>
<a id="tocSrestrictions"></a>
<a id="tocsrestrictions"></a>

```json
{
  "maxCaloriesPerSlice": 800,
  "mustBeVegetarian": true,
  "excludedIngredients": [
    "anchovies",
    "bacon"
  ],
  "excludedTools": [],
  "maxNumberOfToppings": 4,
  "minNumberOfToppings": 2,
  "customName": "My Special Pizza"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|maxCaloriesPerSlice|integer|false|none|Maximum calories per slice|
|mustBeVegetarian|boolean|false|none|Whether the pizza must be vegetarian|
|excludedIngredients|[string]|false|none|Ingredients to exclude|
|excludedTools|[string]|false|none|Tools to exclude|
|maxNumberOfToppings|integer|false|none|Maximum number of toppings|
|minNumberOfToppings|integer|false|none|Minimum number of toppings|
|customName|string|false|none|Custom name for the pizza|
