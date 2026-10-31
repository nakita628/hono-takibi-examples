<h1 id="spoonacular-api">spoonacular API v1.1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The spoonacular Nutrition, Recipe, and Food API allows you to access over thousands of recipes, thousands of ingredients, 800,000 food products, over 100,000 menu items, and restaurants. Our food ontology and semantic recipe search engine makes it possible to search for recipes using natural language queries, such as "gluten free brownies without sugar" or "low fat vegan cupcakes." You can automatically calculate the nutritional information for any recipe, analyze recipe costs, visualize ingredient lists, find recipes for what's in your fridge, find recipes based on special diets, nutritional requirements, or favorite ingredients, classify recipes into types and cuisines, convert ingredient amounts, or even compute an entire meal plan. With our powerful API, you can create many kinds of food and especially nutrition apps.

Special diets/dietary requirements currently available include: vegan, vegetarian, pescetarian, gluten free, grain free, dairy free, high protein, whole 30, low sodium, low carb, Paleo, ketogenic, FODMAP, and Primal.

Base URLs:

* <a href="https://api.spoonacular.com">https://api.spoonacular.com</a>

<a href="https://spoonacular.com/food-api/terms">Terms of service</a>
Email: <a href="mailto:mail@spoonacular.com">David Urbansky</a> 
Web: <a href="https://spoonacular.com/contact">David Urbansky</a> 
License: <a href="https://spoonacular.com/food-api/terms">spoonacular API Terms</a>

<a href="https://spoonacular.com/food-api/docs">The official documentation.</a>

# Authentication

* API Key (apiKeyScheme)
    - Parameter Name: **x-api-key**, in: header.

<h1 id="spoonacular-api-ingredients">ingredients</h1>

## Autocomplete Ingredient Search

<a id="opIdautocompleteIngredientSearch"></a>

> Code samples

```bash
curl https://example.com/food/ingredients/autocomplete \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}"
```

`GET /food/ingredients/autocomplete`

Autocomplete the entry of an ingredient.

<a href="https://spoonacular.com/food-api/docs#Autocomplete-Ingredient-Search">Read entire docs</a>

<h3 id="autocomplete-ingredient-search-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|query|query|string|false|The (natural language) search query.|
|number|query|integer|false|The maximum number of items to return (between 1 and 100). Defaults to 10.|
|metaInformation|query|boolean|false|Whether to return more meta information about the ingredients.|
|intolerances|query|string|false|A comma-separated list of intolerances. All recipes returned must not contain ingredients that are not suitable for people with the intolerances entered. See a full list of supported intolerances.|
|language|query|string|false|The language of the input. Either 'en' or 'de'.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|language|en|
|language|de|

> Example responses

> 200 Response

```json
[
  {
    "aisle": "Produce",
    "id": 9003,
    "image": "apple.jpg",
    "name": "apple",
    "possibleUnits": [
      "small",
      "large",
      "piece",
      "slice",
      "g",
      "extra small",
      "medium",
      "oz",
      "cup slice",
      "cup",
      "serving"
    ]
  },
  {
    "aisle": "Canned and Jarred",
    "id": 9019,
    "image": "applesauce.png",
    "name": "applesauce",
    "possibleUnits": [
      "g",
      "oz",
      "cup",
      "serving",
      "tablespoon"
    ]
  },
  {
    "aisle": "Beverages",
    "id": 9016,
    "image": "apple-juice.jpg",
    "name": "apple juice",
    "possibleUnits": [
      "g",
      "drink box",
      "fl oz",
      "oz",
      "teaspoon",
      "cup",
      "serving",
      "tablespoon"
    ]
  },
  {
    "aisle": "Beverages",
    "id": 1009016,
    "image": "apple-cider.jpg",
    "name": "apple cider",
    "possibleUnits": [
      "g",
      "drink box",
      "fl oz",
      "oz",
      "teaspoon",
      "bottle NFS",
      "cup",
      "serving",
      "tablespoon"
    ]
  },
  {
    "aisle": "Nut butters, Jams, and Honey",
    "id": 10019297,
    "image": "apple-jelly.jpg",
    "name": "apple jelly",
    "possibleUnits": [
      "g",
      "oz",
      "packet",
      "teaspoon",
      "cup",
      "serving",
      "tablespoon"
    ]
  }
]
```

<h3 id="autocomplete-ingredient-search-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="autocomplete-ingredient-search-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» aisle|string|false|none|none|
|» id|integer|false|none|none|
|» image|string|true|none|none|
|» name|string|true|none|none|
|» possibleUnits|[string]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyScheme
</aside>

## Map Ingredients to Grocery Products

<a id="opIdmapIngredientsToGroceryProducts"></a>

> Code samples

```bash
curl https://example.com/food/ingredients/map \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -d '{
    "ingredients": [
      "eggs",
      "bacon"
    ],
    "servings": 2
  }'
```

`POST /food/ingredients/map`

Map a set of ingredients to products you can buy in the grocery store.

<a href="https://spoonacular.com/food-api/docs#Map-Ingredients-to-Grocery-Products">Read entire docs</a>

> Body parameter

```json
{
  "ingredients": [
    "eggs",
    "bacon"
  ],
  "servings": 2
}
```

<h3 id="map-ingredients-to-grocery-products-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» ingredients|body|[string]|true|none|
|» servings|body|number|true|none|

> Example responses

> 200 Response

```json
[
  {
    "ingredientImage": "egg.png",
    "meta": [
      "egg"
    ],
    "original": "eggs",
    "originalName": "eggs",
    "products": [
      {
        "id": 209945,
        "title": "Crystal Farms Eggs - Fresh Accents Peeled Hard Cooked 2 ct Packs",
        "upc": "075925889498"
      },
      {
        "id": 214723,
        "title": "Organic Valley Eggs - Organic Medium Brown",
        "upc": "093966811100"
      },
      {
        "id": 183228,
        "title": "Eggland's Best Grade A Eggs Jumbo - 12 CT",
        "upc": "715141328615"
      }
    ]
  },
  {
    "ingredientImage": "raw-bacon.png",
    "meta": [
      "bacon"
    ],
    "original": "bacon",
    "originalName": "bacon",
    "products": [
      {
        "id": 159164,
        "title": "Wright Bacon - Naturally Hickory Smoked",
        "upc": "079621461552"
      },
      {
        "id": 87924,
        "title": "Sugardale Bacon",
        "upc": "073890006025"
      },
      {
        "id": 213315,
        "title": "John Morrell Bacon - Applewood Smoked",
        "upc": "070100060877"
      },
      {
        "id": 94585,
        "title": "Hormel Black Label Bacon Thick Cut",
        "upc": "037600153041"
      }
    ]
  }
]
```

<h3 id="map-ingredients-to-grocery-products-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="map-ingredients-to-grocery-products-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» ingredientImage|string|true|none|none|
|» meta|[string]|true|none|none|
|» original|string|true|none|none|
|» originalName|string|true|none|none|
|» products|[object]|true|none|none|
|» » id|integer|true|none|none|
|» » title|string|true|none|none|
|» » upc|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyScheme
</aside>

## Ingredient Search

<a id="opIdingredientSearch"></a>

> Code samples

```bash
curl https://example.com/food/ingredients/search \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}"
```

`GET /food/ingredients/search`

Search for simple whole foods (e.g. fruits, vegetables, nuts, grains, meat, fish, dairy etc.).

<a href="https://spoonacular.com/food-api/docs#Ingredient-Search">Read entire docs</a>

<h3 id="ingredient-search-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|query|query|string|false|The (natural language) search query.|
|addChildren|query|boolean|false|Whether to add children of found foods.|
|minProteinPercent|query|number|false|The minimum percentage of protein the food must have (between 0 and 100).|
|maxProteinPercent|query|number|false|The maximum percentage of protein the food can have (between 0 and 100).|
|minFatPercent|query|number|false|The minimum percentage of fat the food must have (between 0 and 100).|
|maxFatPercent|query|number|false|The maximum percentage of fat the food can have (between 0 and 100).|
|minCarbsPercent|query|number|false|The minimum percentage of carbs the food must have (between 0 and 100).|
|maxCarbsPercent|query|number|false|The maximum percentage of carbs the food can have (between 0 and 100).|
|metaInformation|query|boolean|false|Whether to return more meta information about the ingredients.|
|intolerances|query|string|false|A comma-separated list of intolerances. All recipes returned must not contain ingredients that are not suitable for people with the intolerances entered. See a full list of supported intolerances.|
|sort|query|string|false|The strategy to sort recipes by. See a full list of supported sorting options.|
|sortDirection|query|string|false|The direction in which to sort. Must be either 'asc' (ascending) or 'desc' (descending).|
|offset|query|integer|false|The number of results to skip (between 0 and 900).|
|number|query|integer|false|The maximum number of items to return (between 1 and 100). Defaults to 10.|
|language|query|string|false|The language of the input. Either 'en' or 'de'.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|language|en|
|language|de|

> Example responses

> 200 Response

```json
{
  "number": 2,
  "offset": 0,
  "results": [
    {
      "id": 19400,
      "image": "banana-chips.jpg",
      "name": "banana chips"
    },
    {
      "id": 93779,
      "image": "limoncello.jpg",
      "name": "banana liqueur"
    }
  ],
  "totalResults": 13
}
```

<h3 id="ingredient-search-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="ingredient-search-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|number|integer|true|none|none|
|offset|integer|true|none|none|
|results|[object]|true|none|none|
|» id|integer|true|none|none|
|» image|string|true|none|none|
|» name|string|true|none|none|
|totalResults|integer|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyScheme
</aside>

## Get Ingredient Substitutes

<a id="opIdgetIngredientSubstitutes"></a>

> Code samples

```bash
curl 'https://example.com/food/ingredients/substitutes?ingredientName=butter' \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}"
```

`GET /food/ingredients/substitutes`

Search for substitutes for a given ingredient.

<a href="https://spoonacular.com/food-api/docs#Get-Ingredient-Substitutes">Read entire docs</a>

<h3 id="get-ingredient-substitutes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ingredientName|query|string|true|The name of the ingredient you want to replace.|

> Example responses

> 200 Response

```json
{
  "ingredient": "butter",
  "message": "Found 4 substitutes for the ingredient.",
  "substitutes": [
    "1 cup = 7/8 cup shortening and 1/2 tsp salt",
    "1 cup = 7/8 cup vegetable oil + 1/2 tsp salt",
    "1/2 cup = 1/4 cup buttermilk + 1/4 cup unsweetened applesauce",
    "1 cup = 1 cup margarine"
  ]
}
```

<h3 id="get-ingredient-substitutes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="get-ingredient-substitutes-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ingredient|string|true|none|none|
|message|string|true|none|none|
|substitutes|[string]|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyScheme
</aside>

## Compute Ingredient Amount

<a id="opIdcomputeIngredientAmount"></a>

> Code samples

```bash
curl 'https://example.com/food/ingredients/9266/amount?nutrient=protein&target=2' \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}"
```

`GET /food/ingredients/{id}/amount`

Compute the amount you need of a certain ingredient for a certain nutritional goal. For example, how much pineapple do you have to eat to get 10 grams of protein?

<a href="https://spoonacular.com/food-api/docs#Compute-Ingredient-Amount">Read entire docs</a>

<h3 id="compute-ingredient-amount-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|number|true|The id of the ingredient you want the amount for.|
|nutrient|query|string|true|The target nutrient. See a list of supported nutrients.|
|target|query|number|true|The target number of the given nutrient.|
|unit|query|string|false|The target unit.|

> Example responses

> 200 Response

```json
{
  "amount": 65.32,
  "unit": "oz"
}
```

<h3 id="compute-ingredient-amount-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="compute-ingredient-amount-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|number|true|none|none|
|unit|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyScheme
</aside>

## Get Ingredient Information

<a id="opIdgetIngredientInformation"></a>

> Code samples

```bash
curl https://example.com/food/ingredients/9266/information \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}"
```

`GET /food/ingredients/{id}/information`

Use an ingredient id to get all available information about an ingredient, such as its image and supermarket aisle.

<a href="https://spoonacular.com/food-api/docs#Get-Ingredient-Information">Read entire docs</a>

<h3 id="get-ingredient-information-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|number|true|The ingredient id.|
|amount|query|number|false|The amount of this ingredient.|
|unit|query|string|false|The unit for the given amount.|

> Example responses

> 200 Response

```json
{
  "aisle": "Produce",
  "amount": 1,
  "categoryPath": [
    "tropical fruit",
    "fruit"
  ],
  "consistency": "solid",
  "estimatedCost": {
    "unit": "US Cents",
    "value": 299
  },
  "id": 9266,
  "image": "pineapple.jpg",
  "meta": [],
  "name": "pineapples",
  "nameClean": "pineapple",
  "nutrition": {
    "caloricBreakdown": {
      "percentCarbs": 94.18,
      "percentFat": 1.94,
      "percentProtein": 3.88
    },
    "nutrients": [
      {
        "amount": 452.5,
        "name": "Calories",
        "percentOfDailyNeeds": 22.63,
        "unit": "cal"
      },
      {
        "amount": 1.09,
        "name": "Fat",
        "percentOfDailyNeeds": 1.67,
        "unit": "g"
      },
      {
        "amount": 0.08,
        "name": "Saturated Fat",
        "percentOfDailyNeeds": 0.51,
        "unit": "g"
      },
      {
        "amount": 118.74,
        "name": "Carbohydrates",
        "percentOfDailyNeeds": 39.58,
        "unit": "g"
      },
      {
        "amount": 106.07,
        "name": "Net Carbohydrates",
        "percentOfDailyNeeds": 38.57,
        "unit": "g"
      },
      {
        "amount": 89.14,
        "name": "Sugar",
        "percentOfDailyNeeds": 99.05,
        "unit": "g"
      },
      {
        "amount": 0,
        "name": "Cholesterol",
        "percentOfDailyNeeds": 0,
        "unit": "mg"
      },
      {
        "amount": 9.05,
        "name": "Sodium",
        "percentOfDailyNeeds": 0.39,
        "unit": "mg"
      },
      {
        "amount": 4.89,
        "name": "Protein",
        "percentOfDailyNeeds": 9.77,
        "unit": "g"
      },
      {
        "amount": 432.59,
        "name": "Vitamin C",
        "percentOfDailyNeeds": 524.35,
        "unit": "mg"
      },
      {
        "amount": 8.39,
        "name": "Manganese",
        "percentOfDailyNeeds": 419.47,
        "unit": "mg"
      },
      {
        "amount": 12.67,
        "name": "Fiber",
        "percentOfDailyNeeds": 50.68,
        "unit": "g"
      },
      {
        "amount": 1.01,
        "name": "Vitamin B6",
        "percentOfDailyNeeds": 50.68,
        "unit": "mg"
      },
      {
        "amount": 1,
        "name": "Copper",
        "percentOfDailyNeeds": 49.78,
        "unit": "mg"
      },
      {
        "amount": 0.72,
        "name": "Vitamin B1",
        "percentOfDailyNeeds": 47.66,
        "unit": "mg"
      },
      {
        "amount": 162.9,
        "name": "Folate",
        "percentOfDailyNeeds": 40.73,
        "unit": "µg"
      },
      {
        "amount": 986.45,
        "name": "Potassium",
        "percentOfDailyNeeds": 28.18,
        "unit": "mg"
      },
      {
        "amount": 108.6,
        "name": "Magnesium",
        "percentOfDailyNeeds": 27.15,
        "unit": "mg"
      },
      {
        "amount": 4.53,
        "name": "Vitamin B3",
        "percentOfDailyNeeds": 22.63,
        "unit": "mg"
      },
      {
        "amount": 1.93,
        "name": "Vitamin B5",
        "percentOfDailyNeeds": 19.28,
        "unit": "mg"
      },
      {
        "amount": 0.29,
        "name": "Vitamin B2",
        "percentOfDailyNeeds": 17.04,
        "unit": "mg"
      },
      {
        "amount": 2.62,
        "name": "Iron",
        "percentOfDailyNeeds": 14.58,
        "unit": "mg"
      },
      {
        "amount": 117.65,
        "name": "Calcium",
        "percentOfDailyNeeds": 11.77,
        "unit": "mg"
      },
      {
        "amount": 524.9,
        "name": "Vitamin A",
        "percentOfDailyNeeds": 10.5,
        "unit": "IU"
      },
      {
        "amount": 1.09,
        "name": "Zinc",
        "percentOfDailyNeeds": 7.24,
        "unit": "mg"
      },
      {
        "amount": 72.4,
        "name": "Phosphorus",
        "percentOfDailyNeeds": 7.24,
        "unit": "mg"
      },
      {
        "amount": 6.34,
        "name": "Vitamin K",
        "percentOfDailyNeeds": 6.03,
        "unit": "µg"
      },
      {
        "amount": 0.91,
        "name": "Selenium",
        "percentOfDailyNeeds": 1.29,
        "unit": "µg"
      },
      {
        "amount": 0.18,
        "name": "Vitamin E",
        "percentOfDailyNeeds": 1.21,
        "unit": "mg"
      }
    ],
    "properties": [
      {
        "amount": 58.67,
        "name": "Glycemic Index",
        "unit": ""
      },
      {
        "amount": 62.23,
        "name": "Glycemic Load",
        "unit": ""
      }
    ],
    "weightPerServing": {
      "amount": 905,
      "unit": "g"
    }
  },
  "original": "pineapples",
  "originalName": "pineapples",
  "possibleUnits": [
    "piece",
    "slice",
    "fruit",
    "g",
    "oz",
    "cup",
    "serving"
  ],
  "shoppingListUnits": [
    "pieces"
  ],
  "unit": "",
  "unitLong": "",
  "unitShort": ""
}
```

<h3 id="get-ingredient-information-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="get-ingredient-information-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|aisle|string|true|none|none|
|amount|number|true|none|none|
|categoryPath|[string]|true|none|none|
|consistency|string|true|none|none|
|estimatedCost|object|true|none|none|
|» unit|string|true|none|none|
|» value|number|true|none|none|
|id|integer|true|none|none|
|image|string|true|none|none|
|meta|[object]|true|none|none|
|name|string|true|none|none|
|nameClean|string|true|none|none|
|nutrition|object|true|none|none|
|» caloricBreakdown|object|true|none|none|
|» » percentCarbs|number|true|none|none|
|» » percentFat|number|true|none|none|
|» » percentProtein|number|true|none|none|
|» nutrients|[object]|true|none|none|
|» » amount|number|true|none|none|
|» » name|string|true|none|none|
|» » percentOfDailyNeeds|number|true|none|none|
|» » unit|string|true|none|none|
|» properties|[object]|true|none|none|
|» » amount|number|true|none|none|
|» » name|string|true|none|none|
|» » unit|string|true|none|none|
|» weightPerServing|object|true|none|none|
|» » amount|number|true|none|none|
|» » unit|string|true|none|none|
|original|string|true|none|none|
|originalName|string|true|none|none|
|possibleUnits|[string]|true|none|none|
|shoppingListUnits|[string]|true|none|none|
|unit|string|true|none|none|
|unitLong|string|true|none|none|
|unitShort|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyScheme
</aside>

## Get Ingredient Substitutes by ID

<a id="opIdgetIngredientSubstitutesByID"></a>

> Code samples

```bash
curl https://example.com/food/ingredients/1001/substitutes \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}"
```

`GET /food/ingredients/{id}/substitutes`

Search for substitutes for a given ingredient.

<a href="https://spoonacular.com/food-api/docs#Get-Ingredient-Substitutes-by-ID">Read entire docs</a>

<h3 id="get-ingredient-substitutes-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|number|true|The id of the ingredient you want substitutes for.|

> Example responses

> 200 Response

```json
{
  "ingredient": "butter",
  "message": "Found 4 substitutes for the ingredient.",
  "substitutes": [
    "1 cup = 7/8 cup shortening and 1/2 tsp salt",
    "1 cup = 7/8 cup vegetable oil + 1/2 tsp salt",
    "1/2 cup = 1/4 cup buttermilk + 1/4 cup unsweetened applesauce",
    "1 cup = 1 cup margarine"
  ]
}
```

<h3 id="get-ingredient-substitutes-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="get-ingredient-substitutes-by-id-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ingredient|string|true|none|none|
|message|string|true|none|none|
|substitutes|[string]|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyScheme
</aside>

## Ingredients Widget

<a id="opIdvisualizeIngredients"></a>

> Code samples

```bash
curl https://example.com/recipes/visualizeIngredients \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H "x-api-key: ${API_KEY}"
```

`POST /recipes/visualizeIngredients`

Visualize ingredients of a recipe. You can play around with that endpoint!

<a href="https://spoonacular.com/food-api/docs#Ingredients-Widget">Read entire docs</a>

> Body parameter

```yaml
"ingredientList=3 oz flour&servings=2"
```

<h3 id="ingredients-widget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|false|The content type.|
|language|query|string|false|The language of the input. Either 'en' or 'de'.|
|Accept|header|string|false|Accept header.|
|body|body|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Content-Type|application/x-www-form-urlencoded|
|Content-Type|application/json|
|Content-Type|multipart/form-data|
|language|en|
|language|de|
|Accept|application/json|
|Accept|text/html|
|Accept|media/*|

<h3 id="ingredients-widget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyScheme
</aside>

## Ingredients by ID Image

<a id="opIdingredientsByIDImage"></a>

> Code samples

```bash
curl https://example.com/recipes/1082038/ingredientWidget.png \
  -H "x-api-key: ${API_KEY}"
```

`GET /recipes/{id}/ingredientWidget.png`

Visualize a recipe's ingredient list.

<a href="https://spoonacular.com/food-api/docs#Ingredients-by-ID-Image">Read entire docs</a>

<h3 id="ingredients-by-id-image-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|number|true|The recipe id.|
|measure|query|string|false|Whether the the measures should be 'us' or 'metric'.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|measure|us|
|measure|metric|

<h3 id="ingredients-by-id-image-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyScheme
</aside>

<h1 id="spoonacular-api-meal-planning">meal planning</h1>

## Generate Meal Plan

<a id="opIdgenerateMealPlan"></a>

> Code samples

```bash
curl https://example.com/mealplanner/generate \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}"
```

`GET /mealplanner/generate`

Generate a meal plan with three meals per day (breakfast, lunch, and dinner).

<a href="https://spoonacular.com/food-api/docs#Generate-Meal-Plan">Read entire docs</a>

<h3 id="generate-meal-plan-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|timeFrame|query|string|false|Either for one "day" or an entire "week".|
|targetCalories|query|number|false|What is the caloric target for one day? The meal plan generator will try to get as close as possible to that goal.|
|diet|query|string|false|Enter a diet that the meal plan has to adhere to. See a full list of supported diets.|
|exclude|query|string|false|A comma-separated list of allergens or ingredients that must be excluded.|

> Example responses

> 200 Response

```json
{
  "meals": [
    {
      "id": 655219,
      "imageType": "jpg",
      "readyInMinutes": 45,
      "servings": 1,
      "sourceUrl": "https://spoonacular.com/recipes/peanut-butter-and-chocolate-oatmeal-655219",
      "title": "Peanut Butter And Chocolate Oatmeal"
    },
    {
      "id": 649931,
      "imageType": "jpg",
      "readyInMinutes": 45,
      "servings": 4,
      "sourceUrl": "https://spoonacular.com/recipes/lentil-salad-with-vegetables-649931",
      "title": "Lentil Salad With Vegetables"
    },
    {
      "id": 632854,
      "imageType": "jpg",
      "readyInMinutes": 45,
      "servings": 4,
      "sourceUrl": "https://spoonacular.com/recipes/asian-noodles-632854",
      "title": "Asian Noodles"
    }
  ],
  "nutrients": {
    "calories": 1735.81,
    "carbohydrates": 235.17,
    "fat": 69.22,
    "protein": 55.43
  }
}
```

<h3 id="generate-meal-plan-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="generate-meal-plan-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meals|[object]|true|none|none|
|» id|integer|true|none|none|
|» imageType|string|true|none|none|
|» readyInMinutes|integer|true|none|none|
|» servings|number|true|none|none|
|» sourceUrl|string|true|none|none|
|» title|string|true|none|none|
|nutrients|object|true|none|none|
|» calories|number|true|none|none|
|» carbohydrates|number|true|none|none|
|» fat|number|true|none|none|
|» protein|number|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyScheme
</aside>

## Clear Meal Plan Day

<a id="opIdclearMealPlanDay"></a>

> Code samples

```bash
curl 'https://example.com/mealplanner/dsky/day/2020-06-01?hash=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -d '{"date":"2020-06-01","hash":"4b5v4398573406","username":"dsky"}'
```

`DELETE /mealplanner/{username}/day/{date}`

Delete all planned items from the user's meal plan for a specific day.

<a href="https://spoonacular.com/food-api/docs#Clear-Meal-Plan-Day">Read entire docs</a>

> Body parameter

```json
{
  "date": "2020-06-01",
  "hash": "4b5v4398573406",
  "username": "dsky"
}
```

<h3 id="clear-meal-plan-day-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|username|path|string|true|The username.|
|date|path|string|true|The date in the format yyyy-mm-dd.|
|hash|query|string|true|The private hash for the username.|
|body|body|object|true|none|
|» date|body|string|true|The date in the format yyyy-mm-dd.|
|» hash|body|string|true|The private hash for the username.|
|» username|body|string|true|The username.|

> Example responses

> 200 Response

```json
{}
```

<h3 id="clear-meal-plan-day-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyScheme
</aside>

## Add to Meal Plan

<a id="opIdaddToMealPlan"></a>

> Code samples

```bash
curl 'https://example.com/mealplanner/dsky/items?hash=string' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -d '{
    "date": 1589500800,
    "position": 0,
    "slot": 1,
    "type": "INGREDIENTS",
    "value": {
      "ingredients": [
        {
          "name": "1 banana"
        }
      ]
    }
  }'
```

`POST /mealplanner/{username}/items`

Add an item to the user's meal plan.

<a href="https://spoonacular.com/food-api/docs#Add-to-Meal-Plan">Read entire docs</a>

> Body parameter

```json
{
  "date": 1589500800,
  "position": 0,
  "slot": 1,
  "type": "INGREDIENTS",
  "value": {
    "ingredients": [
      {
        "name": "1 banana"
      }
    ]
  }
}
```

<h3 id="add-to-meal-plan-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|username|path|string|true|The username.|
|hash|query|string|true|The private hash for the username.|
|body|body|object|true|none|
|» date|body|number|true|none|
|» position|body|integer|true|none|
|» slot|body|integer|true|none|
|» type|body|string|true|none|
|» value|body|object|true|none|
|» » ingredients|body|[object]|true|none|
|» » » name|body|string|true|none|

> Example responses

> 200 Response

```json
{}
```

<h3 id="add-to-meal-plan-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyScheme
</aside>

## Delete from Meal Plan

<a id="opIddeleteFromMealPlan"></a>

> Code samples

```bash
curl 'https://example.com/mealplanner/dsky/items/15678?hash=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -d '{"hash":"4b5v4398573406","id":15678,"username":"dsky"}'
```

`DELETE /mealplanner/{username}/items/{id}`

Delete an item from the user's meal plan.

<a href="https://spoonacular.com/food-api/docs#Delete-from-Meal-Plan">Read entire docs</a>

> Body parameter

```json
{
  "hash": "4b5v4398573406",
  "id": 15678,
  "username": "dsky"
}
```

<h3 id="delete-from-meal-plan-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|username|path|string|true|The username.|
|id|path|number|true|The shopping list item id.|
|hash|query|string|true|The private hash for the username.|
|body|body|object|true|none|
|» hash|body|string|true|The private hash for the username.|
|» id|body|number|true|The shopping list item id.|
|» username|body|string|true|The username.|

> Example responses

> 200 Response

```json
{}
```

<h3 id="delete-from-meal-plan-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyScheme
</aside>

## Get Shopping List

<a id="opIdgetShoppingList"></a>

> Code samples

```bash
curl 'https://example.com/mealplanner/dsky/shopping-list?hash=string' \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}"
```

`GET /mealplanner/{username}/shopping-list`

Get the current shopping list for the given user.

<a href="https://spoonacular.com/food-api/docs#Get-Shopping-List">Read entire docs</a>

<h3 id="get-shopping-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|username|path|string|true|The username.|
|hash|query|string|true|The private hash for the username.|

> Example responses

> 200 Response

```json
{
  "aisles": [
    {
      "aisle": "Baking",
      "items": [
        {
          "aisle": "Baking",
          "cost": 0.71,
          "id": 115388,
          "ingredientId": 18369,
          "measures": {
            "metric": {
              "amount": 1,
              "unit": "pkg"
            },
            "original": {
              "amount": 1,
              "unit": "package"
            },
            "us": {
              "amount": 1,
              "unit": "pkg"
            }
          },
          "name": "baking powder",
          "pantryItem": false
        }
      ]
    }
  ],
  "cost": 1.43,
  "endDate": 1588896000,
  "startDate": 1588291200
}
```

<h3 id="get-shopping-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="get-shopping-list-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|aisles|[object]|true|none|none|
|» aisle|string|true|none|none|
|» items|[object]|false|none|none|
|» » aisle|string|true|none|none|
|» » cost|number|true|none|none|
|» » id|integer|true|none|none|
|» » ingredientId|integer|true|none|none|
|» » measures|object|false|none|none|
|» » » metric|object|true|none|none|
|» » » » amount|number|true|none|none|
|» » » » unit|string|true|none|none|
|» » » original|object|true|none|none|
|» » » » amount|number|true|none|none|
|» » » » unit|string|true|none|none|
|» » » us|object|true|none|none|
|» » » » amount|number|true|none|none|
|» » » » unit|string|true|none|none|
|» » name|string|true|none|none|
|» » pantryItem|boolean|true|none|none|
|cost|number|true|none|none|
|endDate|number|true|none|none|
|startDate|number|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyScheme
</aside>

## Add to Shopping List

<a id="opIdaddToShoppingList"></a>

> Code samples

```bash
curl 'https://example.com/mealplanner/dsky/shopping-list/items?hash=string' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -d '{
    "aisle": "Baking",
    "item": "1 package baking powder",
    "parse": true
  }'
```

`POST /mealplanner/{username}/shopping-list/items`

Add an item to the current shopping list of a user.

<a href="https://spoonacular.com/food-api/docs#Add-to-Shopping-List">Read entire docs</a>

> Body parameter

```json
{
  "aisle": "Baking",
  "item": "1 package baking powder",
  "parse": true
}
```

<h3 id="add-to-shopping-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|username|path|string|true|The username.|
|hash|query|string|true|The private hash for the username.|
|body|body|object|true|none|
|» aisle|body|string|true|none|
|» item|body|string|true|none|
|» parse|body|boolean|true|none|

> Example responses

> 200 Response

```json
{
  "aisles": [
    {
      "aisle": "Baking",
      "items": [
        {
          "aisle": "Baking",
          "cost": 0.71,
          "id": 115388,
          "ingredientId": 18369,
          "measures": {
            "metric": {
              "amount": 1,
              "unit": "pkg"
            },
            "original": {
              "amount": 1,
              "unit": "package"
            },
            "us": {
              "amount": 1,
              "unit": "pkg"
            }
          },
          "name": "baking powder",
          "pantryItem": false
        }
      ]
    }
  ],
  "cost": 0.71,
  "endDate": 1588896000,
  "startDate": 1588291200
}
```

<h3 id="add-to-shopping-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="add-to-shopping-list-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|aisles|[object]|true|none|none|
|» aisle|string|true|none|none|
|» items|[object]|false|none|none|
|» » aisle|string|true|none|none|
|» » cost|number|true|none|none|
|» » id|integer|true|none|none|
|» » ingredientId|integer|true|none|none|
|» » measures|object|false|none|none|
|» » » metric|object|true|none|none|
|» » » » amount|number|true|none|none|
|» » » » unit|string|true|none|none|
|» » » original|object|true|none|none|
|» » » » amount|number|true|none|none|
|» » » » unit|string|true|none|none|
|» » » us|object|true|none|none|
|» » » » amount|number|true|none|none|
|» » » » unit|string|true|none|none|
|» » name|string|true|none|none|
|» » pantryItem|boolean|true|none|none|
|cost|number|true|none|none|
|endDate|number|true|none|none|
|startDate|number|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyScheme
</aside>

## Delete from Shopping List

<a id="opIddeleteFromShoppingList"></a>

> Code samples

```bash
curl 'https://example.com/mealplanner/dsky/shopping-list/items/15678?hash=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -d '{"hash":"4b5v4398573406","id":15678,"username":"dsky"}'
```

`DELETE /mealplanner/{username}/shopping-list/items/{id}`

Delete an item from the current shopping list of the user.

<a href="https://spoonacular.com/food-api/docs#Delete-from-Shopping-List">Read entire docs</a>

> Body parameter

```json
{
  "hash": "4b5v4398573406",
  "id": 15678,
  "username": "dsky"
}
```

<h3 id="delete-from-shopping-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|username|path|string|true|The username.|
|id|path|number|true|The shopping list item id.|
|hash|query|string|true|The private hash for the username.|
|body|body|object|true|none|
|» hash|body|string|true|The private hash for the username.|
|» id|body|number|true|The shopping list item id.|
|» username|body|string|true|The username.|

> Example responses

> 200 Response

```json
{}
```

<h3 id="delete-from-shopping-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyScheme
</aside>

## Generate Shopping List

<a id="opIdgenerateShoppingList"></a>

> Code samples

```bash
curl 'https://example.com/mealplanner/dsky/shopping-list/2020-06-01/2020-06-07?hash=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -d '{"end-date":"2020-06-07","hash":"4b5v4398573406","start-date":"2020-06-01","username":"dsky"}'
```

`POST /mealplanner/{username}/shopping-list/{start-date}/{end-date}`

Generate the shopping list for a user from the meal planner in a given time frame.

<a href="https://spoonacular.com/food-api/docs#Generate-Shopping-List">Read entire docs</a>

> Body parameter

```json
{
  "end-date": "2020-06-07",
  "hash": "4b5v4398573406",
  "start-date": "2020-06-01",
  "username": "dsky"
}
```

<h3 id="generate-shopping-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|username|path|string|true|The username.|
|start-date|path|string|true|The start date in the format yyyy-mm-dd.|
|end-date|path|string|true|The end date in the format yyyy-mm-dd.|
|hash|query|string|true|The private hash for the username.|
|body|body|object|true|none|
|» end-date|body|string|true|The end date in the format yyyy-mm-dd.|
|» hash|body|string|true|The private hash for the username.|
|» start-date|body|string|true|The start date in the format yyyy-mm-dd.|
|» username|body|string|true|The username.|

> Example responses

> 200 Response

```json
{
  "aisles": [
    {
      "aisle": "Baking",
      "items": [
        {
          "aisle": "Baking",
          "cost": 0.71,
          "id": 115388,
          "ingredientId": 18369,
          "measures": {
            "metric": {
              "amount": 1,
              "unit": "pkg"
            },
            "original": {
              "amount": 1,
              "unit": "package"
            },
            "us": {
              "amount": 1,
              "unit": "pkg"
            }
          },
          "name": "baking powder",
          "pantryItem": false
        }
      ]
    }
  ],
  "cost": 0.71,
  "endDate": 1588896000,
  "startDate": 1588291200
}
```

<h3 id="generate-shopping-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="generate-shopping-list-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|aisles|[object]|true|none|none|
|» aisle|string|true|none|none|
|» items|[object]|false|none|none|
|» » aisle|string|true|none|none|
|» » cost|number|true|none|none|
|» » id|integer|true|none|none|
|» » ingredientId|integer|true|none|none|
|» » measures|object|false|none|none|
|» » » metric|object|true|none|none|
|» » » » amount|number|true|none|none|
|» » » » unit|string|true|none|none|
|» » » original|object|true|none|none|
|» » » » amount|number|true|none|none|
|» » » » unit|string|true|none|none|
|» » » us|object|true|none|none|
|» » » » amount|number|true|none|none|
|» » » » unit|string|true|none|none|
|» » name|string|true|none|none|
|» » pantryItem|boolean|true|none|none|
|cost|number|true|none|none|
|endDate|number|true|none|none|
|startDate|number|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyScheme
</aside>

## Get Meal Plan Templates

<a id="opIdgetMealPlanTemplates"></a>

> Code samples

```bash
curl 'https://example.com/mealplanner/dsky/templates?hash=string' \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}"
```

`GET /mealplanner/{username}/templates`

Get meal plan templates from user or public ones.

<a href="https://spoonacular.com/food-api/docs#Get-Meal-Plan-Templates">Read entire docs</a>

<h3 id="get-meal-plan-templates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|username|path|string|true|The username.|
|hash|query|string|true|The private hash for the username.|

> Example responses

> 200 Response

```json
{
  "templates": [
    {
      "id": 37,
      "name": "Busy Work Week"
    },
    {
      "id": 480,
      "name": "Keto Meal Plan"
    },
    {
      "id": 120,
      "name": "Not-So-Strict Paleo Meal Plan"
    },
    {
      "id": 451,
      "name": "Week 1 Meal Plan"
    },
    {
      "id": 581,
      "name": "Whole30 Meal Plan"
    }
  ]
}
```

<h3 id="get-meal-plan-templates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="get-meal-plan-templates-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|templates|[object]|true|none|none|
|» id|integer|true|none|none|
|» name|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyScheme
</aside>

## Add Meal Plan Template

<a id="opIdaddMealPlanTemplate"></a>

> Code samples

```bash
curl 'https://example.com/mealplanner/dsky/templates?hash=4b5v4398573406' \
  -X POST \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -d '{"hash":"4b5v4398573406","username":"dsky"}'
```

`POST /mealplanner/{username}/templates`

Add a meal plan template for a user.

<a href="https://spoonacular.com/food-api/docs#Add-Meal-Plan-Template">Read entire docs</a>

> Body parameter

```json
{
  "hash": "4b5v4398573406",
  "username": "dsky"
}
```

<h3 id="add-meal-plan-template-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|username|path|string|true|The username.|
|hash|query|string|true|The private hash for the username.|
|body|body|object|true|none|
|» hash|body|string|true|The private hash for the username.|
|» username|body|string|true|The username.|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "day": 1,
      "position": 0,
      "slot": 1,
      "type": "RECIPE",
      "value": {
        "id": 296213,
        "imageType": "jpg",
        "servings": 2,
        "title": "Spinach Salad with Roasted Vegetables and Spiced Chickpea"
      }
    },
    {
      "day": 2,
      "position": 0,
      "slot": 1,
      "type": "PRODUCT",
      "value": {
        "id": 183433,
        "imageType": "jpg",
        "servings": 1,
        "title": "Ahold Lasagna with Meat Sauce"
      }
    },
    {
      "day": 3,
      "position": 0,
      "slot": 1,
      "type": "MENU_ITEM",
      "value": {
        "id": 378557,
        "imageType": "png",
        "servings": 1,
        "title": "Pizza 73 BBQ Steak Pizza, 9"
      }
    },
    {
      "day": 4,
      "position": 0,
      "slot": 1,
      "type": "CUSTOM_FOOD",
      "value": {
        "id": 348,
        "image": "https://spoonacular.com/cdn/ingredients_100x100/cashews.jpg",
        "servings": 1,
        "title": "Aldi Spicy Cashews - 30g"
      }
    },
    {
      "day": 5,
      "position": 0,
      "slot": 1,
      "type": "INGREDIENTS",
      "value": {
        "ingredients": [
          {
            "name": "1 banana"
          },
          {
            "amount": "1",
            "image": "https://spoonacular.com/cdn/ingredients_100x100/brewed-coffee.jpg",
            "name": "coffee",
            "unit": "cup"
          }
        ]
      }
    }
  ],
  "name": "My new meal plan template",
  "publishAsPublic": false
}
```

<h3 id="add-meal-plan-template-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="add-meal-plan-template-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[object]|true|none|none|
|» day|integer|true|none|none|
|» position|integer|true|none|none|
|» slot|integer|true|none|none|
|» type|string|true|none|none|
|» value|object|false|none|none|
|» » id|integer|false|none|none|
|» » imageType|string|false|none|none|
|» » servings|number|false|none|none|
|» » title|string|false|none|none|
|name|string|true|none|none|
|publishAsPublic|boolean|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyScheme
</aside>

## Get Meal Plan Template

<a id="opIdgetMealPlanTemplate"></a>

> Code samples

```bash
curl 'https://example.com/mealplanner/dsky/templates/15678?hash=string' \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}"
```

`GET /mealplanner/{username}/templates/{id}`

Get information about a meal plan template.

<a href="https://spoonacular.com/food-api/docs#Get-Meal-Plan-Template">Read entire docs</a>

<h3 id="get-meal-plan-template-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|username|path|string|true|The username.|
|id|path|number|true|The shopping list item id.|
|hash|query|string|true|The private hash for the username.|

> Example responses

> 200 Response

```json
{
  "days": [
    {
      "day": "1",
      "items": [
        {
          "id": 2403,
          "position": 0,
          "slot": 1,
          "type": "RECIPE",
          "value": {
            "id": 630657,
            "imageType": "jpg",
            "title": "Double Chocolate Protein Cookies"
          }
        },
        {
          "id": 2404,
          "position": 0,
          "slot": 1,
          "type": "INGREDIENTS",
          "value": {
            "id": 785,
            "imageType": "jpg",
            "ingredients": [
              {
                "amount": 1,
                "image": "https://spoonacular.com/cdn/ingredients_100x100/orange.jpg",
                "name": "orange",
                "unit": ""
              }
            ],
            "name": "",
            "servings": "1",
            "title": "orange"
          }
        },
        {
          "id": 2405,
          "position": 0,
          "slot": 2,
          "type": "RECIPE",
          "value": {
            "id": 296213,
            "imageType": "jpg",
            "title": "Spinach Salad with Roasted Vegetables and Spiced Chickpea"
          }
        },
        {
          "id": 2406,
          "position": 0,
          "slot": 3,
          "type": "RECIPE",
          "value": {
            "id": 237677,
            "imageType": "jpg",
            "title": "Chicken Parmesan with Spaghetti"
          }
        },
        {
          "id": 2407,
          "position": 0,
          "slot": 3,
          "type": "INGREDIENTS",
          "value": {
            "id": 787,
            "imageType": "jpg",
            "ingredients": [
              {
                "amount": 1,
                "image": "https://spoonacular.com/cdn/ingredients_100x100/broccoli.jpg",
                "name": "broccoli",
                "unit": "cup"
              }
            ],
            "name": "",
            "servings": "1",
            "title": "broccoli"
          }
        },
        {
          "id": 2408,
          "position": 0,
          "slot": 3,
          "type": "PRODUCT",
          "value": {
            "id": 146191,
            "imageType": "jpg",
            "title": "Lindt Dark Chocolate"
          }
        }
      ],
      "nutritionSummary": {
        "nutrients": [
          {
            "amount": 1293,
            "name": "Calories",
            "percentDailyNeeds": 65,
            "unit": "cal"
          },
          {
            "amount": 65,
            "name": "Fat",
            "percentDailyNeeds": 100,
            "unit": "g"
          },
          {
            "amount": 102,
            "name": "Carbohydrates",
            "percentDailyNeeds": 34,
            "unit": "g"
          },
          {
            "amount": 83,
            "name": "Protein",
            "percentDailyNeeds": 166,
            "unit": "g"
          }
        ]
      },
      "nutritionSummaryBreakfast": {
        "nutrients": [
          {
            "amount": 132,
            "name": "Calories",
            "percentDailyNeeds": 7,
            "unit": "cal"
          },
          {
            "amount": 3,
            "name": "Fat",
            "percentDailyNeeds": 4,
            "unit": "g"
          },
          {
            "amount": 25,
            "name": "Carbohydrates",
            "percentDailyNeeds": 8,
            "unit": "g"
          },
          {
            "amount": 3,
            "name": "Protein",
            "percentDailyNeeds": 5,
            "unit": "g"
          }
        ]
      },
      "nutritionSummaryDinner": {
        "nutrients": [
          {
            "amount": 706,
            "name": "Calories",
            "percentDailyNeeds": 35,
            "unit": "cal"
          },
          {
            "amount": 29,
            "name": "Fat",
            "percentDailyNeeds": 45,
            "unit": "g"
          },
          {
            "amount": 76,
            "name": "Carbohydrates",
            "percentDailyNeeds": 25,
            "unit": "g"
          },
          {
            "amount": 46,
            "name": "Protein",
            "percentDailyNeeds": 91,
            "unit": "g"
          }
        ]
      },
      "nutritionSummaryLunch": {
        "nutrients": [
          {
            "amount": 455,
            "name": "Calories",
            "percentDailyNeeds": 23,
            "unit": "cal"
          },
          {
            "amount": 34,
            "name": "Fat",
            "percentDailyNeeds": 52,
            "unit": "g"
          },
          {
            "amount": 1,
            "name": "Carbohydrates",
            "percentDailyNeeds": 0,
            "unit": "g"
          },
          {
            "amount": 35,
            "name": "Protein",
            "percentDailyNeeds": 70,
            "unit": "g"
          }
        ]
      }
    },
    {
      "day": "2",
      "items": [
        {
          "id": 2409,
          "position": 0,
          "slot": 1,
          "type": "PRODUCT",
          "value": {
            "id": 101999,
            "imageType": "jpg",
            "title": "Greek Gods Yogurt"
          }
        },
        {
          "id": 2410,
          "position": 0,
          "slot": 1,
          "type": "INGREDIENTS",
          "value": {
            "id": 457,
            "imageType": "jpg",
            "ingredients": [
              {
                "amount": 1,
                "image": "https://spoonacular.com/cdn/ingredients_100x100/berries-mixed.jpg",
                "name": "berries",
                "unit": "cup"
              }
            ],
            "name": "",
            "servings": "1",
            "title": "berries"
          }
        },
        {
          "id": 2411,
          "position": 0,
          "slot": 2,
          "type": "RECIPE",
          "value": {
            "id": 516377,
            "imageType": "jpg",
            "title": "Southwest Quinoa Salad"
          }
        },
        {
          "id": 2412,
          "position": 0,
          "slot": 3,
          "type": "RECIPE",
          "value": {
            "id": 247683,
            "imageType": "jpg",
            "title": "Pesto Caprese Omelette"
          }
        },
        {
          "id": 2413,
          "position": 0,
          "slot": 3,
          "type": "RECIPE",
          "value": {
            "id": 484337,
            "imageType": "jpg",
            "title": "One Ingredient Banana Ice Cream"
          }
        }
      ],
      "nutritionSummary": {
        "nutrients": [
          {
            "amount": 1386,
            "name": "Calories",
            "percentDailyNeeds": 69,
            "unit": "cal"
          },
          {
            "amount": 66,
            "name": "Fat",
            "percentDailyNeeds": 102,
            "unit": "g"
          },
          {
            "amount": 162,
            "name": "Carbohydrates",
            "percentDailyNeeds": 54,
            "unit": "g"
          },
          {
            "amount": 48,
            "name": "Protein",
            "percentDailyNeeds": 96,
            "unit": "g"
          }
        ]
      },
      "nutritionSummaryBreakfast": {
        "nutrients": [
          {
            "amount": 239,
            "name": "Calories",
            "percentDailyNeeds": 12,
            "unit": "cal"
          },
          {
            "amount": 11,
            "name": "Fat",
            "percentDailyNeeds": 17,
            "unit": "g"
          },
          {
            "amount": 34,
            "name": "Carbohydrates",
            "percentDailyNeeds": 11,
            "unit": "g"
          },
          {
            "amount": 5,
            "name": "Protein",
            "percentDailyNeeds": 9,
            "unit": "g"
          }
        ]
      },
      "nutritionSummaryDinner": {
        "nutrients": [
          {
            "amount": 414,
            "name": "Calories",
            "percentDailyNeeds": 21,
            "unit": "cal"
          },
          {
            "amount": 22,
            "name": "Fat",
            "percentDailyNeeds": 33,
            "unit": "g"
          },
          {
            "amount": 37,
            "name": "Carbohydrates",
            "percentDailyNeeds": 12,
            "unit": "g"
          },
          {
            "amount": 21,
            "name": "Protein",
            "percentDailyNeeds": 43,
            "unit": "g"
          }
        ]
      },
      "nutritionSummaryLunch": {
        "nutrients": [
          {
            "amount": 732,
            "name": "Calories",
            "percentDailyNeeds": 37,
            "unit": "cal"
          },
          {
            "amount": 33,
            "name": "Fat",
            "percentDailyNeeds": 51,
            "unit": "g"
          },
          {
            "amount": 91,
            "name": "Carbohydrates",
            "percentDailyNeeds": 30,
            "unit": "g"
          },
          {
            "amount": 22,
            "name": "Protein",
            "percentDailyNeeds": 44,
            "unit": "g"
          }
        ]
      }
    },
    {
      "day": "3",
      "items": [
        {
          "id": 2414,
          "position": 0,
          "slot": 1,
          "type": "RECIPE",
          "value": {
            "id": 157259,
            "imageType": "jpg",
            "title": "Cocoa Protein Pancakes"
          }
        },
        {
          "id": 2415,
          "position": 0,
          "slot": 1,
          "type": "INGREDIENTS",
          "value": {
            "id": 878,
            "imageType": "jpg",
            "ingredients": [
              {
                "amount": 1,
                "image": "https://spoonacular.com/cdn/ingredients_100x100/orange.jpg",
                "name": "orange",
                "unit": ""
              }
            ],
            "name": "",
            "servings": "1",
            "title": "orange"
          }
        },
        {
          "id": 2416,
          "position": 0,
          "slot": 2,
          "type": "RECIPE",
          "value": {
            "id": 535856,
            "imageType": "jpg",
            "title": "BLT Chopped Salad"
          }
        },
        {
          "id": 2417,
          "position": 0,
          "slot": 2,
          "type": "PRODUCT",
          "value": {
            "id": 71144,
            "imageType": "jpg",
            "title": "Kind Plus Fruit & Nut Bar - Almond Walnut Macadamia with Peanuts Plus Protein"
          }
        },
        {
          "id": 2418,
          "position": 0,
          "slot": 3,
          "type": "RECIPE",
          "value": {
            "id": 519197,
            "imageType": "png",
            "title": "Zesty Sriracha Shrimp and Quinoa"
          }
        },
        {
          "id": 2419,
          "position": 0,
          "slot": 3,
          "type": "PRODUCT",
          "value": {
            "id": 163427,
            "imageType": "jpg",
            "title": "Green Giant Valley Fresh Steamers - Select Sugar Snap Peas"
          }
        },
        {
          "id": 2420,
          "position": 0,
          "slot": 3,
          "type": "PRODUCT",
          "value": {
            "id": 146191,
            "imageType": "jpg",
            "title": "Lindt Dark Chocolate"
          }
        }
      ],
      "nutritionSummary": {
        "nutrients": [
          {
            "amount": 1589,
            "name": "Calories",
            "percentDailyNeeds": 79,
            "unit": "cal"
          },
          {
            "amount": 77,
            "name": "Fat",
            "percentDailyNeeds": 118,
            "unit": "g"
          },
          {
            "amount": 158,
            "name": "Carbohydrates",
            "percentDailyNeeds": 53,
            "unit": "g"
          },
          {
            "amount": 84,
            "name": "Protein",
            "percentDailyNeeds": 168,
            "unit": "g"
          }
        ]
      },
      "nutritionSummaryBreakfast": {
        "nutrients": [
          {
            "amount": 472,
            "name": "Calories",
            "percentDailyNeeds": 24,
            "unit": "cal"
          },
          {
            "amount": 14,
            "name": "Fat",
            "percentDailyNeeds": 21,
            "unit": "g"
          },
          {
            "amount": 62,
            "name": "Carbohydrates",
            "percentDailyNeeds": 21,
            "unit": "g"
          },
          {
            "amount": 27,
            "name": "Protein",
            "percentDailyNeeds": 54,
            "unit": "g"
          }
        ]
      },
      "nutritionSummaryDinner": {
        "nutrients": [
          {
            "amount": 549,
            "name": "Calories",
            "percentDailyNeeds": 27,
            "unit": "cal"
          },
          {
            "amount": 18,
            "name": "Fat",
            "percentDailyNeeds": 27,
            "unit": "g"
          },
          {
            "amount": 65,
            "name": "Carbohydrates",
            "percentDailyNeeds": 22,
            "unit": "g"
          },
          {
            "amount": 39,
            "name": "Protein",
            "percentDailyNeeds": 78,
            "unit": "g"
          }
        ]
      },
      "nutritionSummaryLunch": {
        "nutrients": [
          {
            "amount": 568,
            "name": "Calories",
            "percentDailyNeeds": 28,
            "unit": "cal"
          },
          {
            "amount": 45,
            "name": "Fat",
            "percentDailyNeeds": 69,
            "unit": "g"
          },
          {
            "amount": 31,
            "name": "Carbohydrates",
            "percentDailyNeeds": 10,
            "unit": "g"
          },
          {
            "amount": 18,
            "name": "Protein",
            "percentDailyNeeds": 36,
            "unit": "g"
          }
        ]
      }
    },
    {
      "day": "4",
      "items": [
        {
          "id": 2421,
          "position": 0,
          "slot": 1,
          "type": "PRODUCT",
          "value": {
            "id": 101999,
            "imageType": "jpg",
            "title": "Greek Gods Yogurt"
          }
        },
        {
          "id": 2422,
          "position": 0,
          "slot": 1,
          "type": "INGREDIENTS",
          "value": {
            "id": 877,
            "imageType": "jpg",
            "ingredients": [
              {
                "amount": 1,
                "image": "https://spoonacular.com/cdn/ingredients_100x100/berries-mixed.jpg",
                "name": "berries",
                "unit": "cup"
              }
            ],
            "name": "",
            "servings": "1",
            "title": "berries"
          }
        },
        {
          "id": 2423,
          "position": 0,
          "slot": 2,
          "type": "RECIPE",
          "value": {
            "id": 535563,
            "imageType": "jpg",
            "title": "Black Bean Quinoa Salad"
          }
        },
        {
          "id": 2424,
          "position": 0,
          "slot": 3,
          "type": "RECIPE",
          "value": {
            "id": 622598,
            "imageType": "jpg",
            "title": "Pittata - Pizza Frittata"
          }
        },
        {
          "id": 2425,
          "position": 0,
          "slot": 3,
          "type": "RECIPE",
          "value": {
            "id": 484337,
            "imageType": "jpg",
            "title": "One Ingredient Banana Ice Cream"
          }
        }
      ],
      "nutritionSummary": {
        "nutrients": [
          {
            "amount": 1343,
            "name": "Calories",
            "percentDailyNeeds": 67,
            "unit": "cal"
          },
          {
            "amount": 70,
            "name": "Fat",
            "percentDailyNeeds": 108,
            "unit": "g"
          },
          {
            "amount": 123,
            "name": "Carbohydrates",
            "percentDailyNeeds": 41,
            "unit": "g"
          },
          {
            "amount": 61,
            "name": "Protein",
            "percentDailyNeeds": 122,
            "unit": "g"
          }
        ]
      },
      "nutritionSummaryBreakfast": {
        "nutrients": [
          {
            "amount": 239,
            "name": "Calories",
            "percentDailyNeeds": 12,
            "unit": "cal"
          },
          {
            "amount": 11,
            "name": "Fat",
            "percentDailyNeeds": 17,
            "unit": "g"
          },
          {
            "amount": 34,
            "name": "Carbohydrates",
            "percentDailyNeeds": 11,
            "unit": "g"
          },
          {
            "amount": 5,
            "name": "Protein",
            "percentDailyNeeds": 9,
            "unit": "g"
          }
        ]
      },
      "nutritionSummaryDinner": {
        "nutrients": [
          {
            "amount": 698,
            "name": "Calories",
            "percentDailyNeeds": 35,
            "unit": "cal"
          },
          {
            "amount": 43,
            "name": "Fat",
            "percentDailyNeeds": 66,
            "unit": "g"
          },
          {
            "amount": 34,
            "name": "Carbohydrates",
            "percentDailyNeeds": 11,
            "unit": "g"
          },
          {
            "amount": 46,
            "name": "Protein",
            "percentDailyNeeds": 92,
            "unit": "g"
          }
        ]
      },
      "nutritionSummaryLunch": {
        "nutrients": [
          {
            "amount": 406,
            "name": "Calories",
            "percentDailyNeeds": 20,
            "unit": "cal"
          },
          {
            "amount": 17,
            "name": "Fat",
            "percentDailyNeeds": 26,
            "unit": "g"
          },
          {
            "amount": 56,
            "name": "Carbohydrates",
            "percentDailyNeeds": 19,
            "unit": "g"
          },
          {
            "amount": 10,
            "name": "Protein",
            "percentDailyNeeds": 21,
            "unit": "g"
          }
        ]
      }
    },
    {
      "day": "5",
      "items": [
        {
          "id": 2426,
          "position": 0,
          "slot": 1,
          "type": "PRODUCT",
          "value": {
            "id": 71144,
            "imageType": "jpg",
            "title": "Kind Plus Fruit & Nut Bar - Almond Walnut Macadamia with Peanuts Plus Protein"
          }
        },
        {
          "id": 2427,
          "position": 0,
          "slot": 1,
          "type": "INGREDIENTS",
          "value": {
            "id": 877,
            "imageType": "jpg",
            "ingredients": [
              {
                "amount": 1,
                "image": "https://spoonacular.com/cdn/ingredients_100x100/bananas.jpg",
                "name": "banana",
                "unit": ""
              }
            ],
            "name": "",
            "servings": "1",
            "title": "banana"
          }
        },
        {
          "id": 2428,
          "position": 0,
          "slot": 2,
          "type": "RECIPE",
          "value": {
            "id": 296213,
            "imageType": "jpg",
            "title": "Spinach Salad with Roasted Vegetables and Spiced Chickpea"
          }
        },
        {
          "id": 2429,
          "position": 0,
          "slot": 3,
          "type": "RECIPE",
          "value": {
            "id": 497301,
            "imageType": "jpg",
            "title": "Shrimp Scampi"
          }
        },
        {
          "id": 2430,
          "position": 0,
          "slot": 3,
          "type": "RECIPE",
          "value": {
            "id": 581021,
            "imageType": "jpg",
            "title": "Black Bean Brownies: Fudgy Fun"
          }
        }
      ],
      "nutritionSummary": {
        "nutrients": [
          {
            "amount": 1247,
            "name": "Calories",
            "percentDailyNeeds": 62,
            "unit": "cal"
          },
          {
            "amount": 61,
            "name": "Fat",
            "percentDailyNeeds": 95,
            "unit": "g"
          },
          {
            "amount": 103,
            "name": "Carbohydrates",
            "percentDailyNeeds": 34,
            "unit": "g"
          },
          {
            "amount": 78,
            "name": "Protein",
            "percentDailyNeeds": 156,
            "unit": "g"
          }
        ]
      },
      "nutritionSummaryBreakfast": {
        "nutrients": [
          {
            "amount": 295,
            "name": "Calories",
            "percentDailyNeeds": 15,
            "unit": "cal"
          },
          {
            "amount": 12,
            "name": "Fat",
            "percentDailyNeeds": 19,
            "unit": "g"
          },
          {
            "amount": 42,
            "name": "Carbohydrates",
            "percentDailyNeeds": 14,
            "unit": "g"
          },
          {
            "amount": 11,
            "name": "Protein",
            "percentDailyNeeds": 23,
            "unit": "g"
          }
        ]
      },
      "nutritionSummaryDinner": {
        "nutrients": [
          {
            "amount": 497,
            "name": "Calories",
            "percentDailyNeeds": 25,
            "unit": "cal"
          },
          {
            "amount": 15,
            "name": "Fat",
            "percentDailyNeeds": 24,
            "unit": "g"
          },
          {
            "amount": 60,
            "name": "Carbohydrates",
            "percentDailyNeeds": 20,
            "unit": "g"
          },
          {
            "amount": 32,
            "name": "Protein",
            "percentDailyNeeds": 63,
            "unit": "g"
          }
        ]
      },
      "nutritionSummaryLunch": {
        "nutrients": [
          {
            "amount": 455,
            "name": "Calories",
            "percentDailyNeeds": 23,
            "unit": "cal"
          },
          {
            "amount": 34,
            "name": "Fat",
            "percentDailyNeeds": 52,
            "unit": "g"
          },
          {
            "amount": 1,
            "name": "Carbohydrates",
            "percentDailyNeeds": 0,
            "unit": "g"
          },
          {
            "amount": 35,
            "name": "Protein",
            "percentDailyNeeds": 70,
            "unit": "g"
          }
        ]
      }
    },
    {
      "day": "6",
      "items": [
        {
          "id": 2431,
          "position": 0,
          "slot": 1,
          "type": "RECIPE",
          "value": {
            "id": 157259,
            "imageType": "jpg",
            "title": "Cocoa Protein Pancakes"
          }
        },
        {
          "id": 2432,
          "position": 0,
          "slot": 1,
          "type": "INGREDIENTS",
          "value": {
            "id": 877,
            "imageType": "jpg",
            "ingredients": [
              {
                "amount": 1,
                "image": "https://spoonacular.com/cdn/ingredients_100x100/berries-mixed.jpg",
                "name": "berries",
                "unit": "cup"
              }
            ],
            "name": "",
            "servings": "1",
            "title": "berries"
          }
        },
        {
          "id": 2433,
          "position": 0,
          "slot": 2,
          "type": "RECIPE",
          "value": {
            "id": 535856,
            "imageType": "jpg",
            "title": "BLT Chopped Salad"
          }
        },
        {
          "id": 2434,
          "position": 0,
          "slot": 3,
          "type": "RECIPE",
          "value": {
            "id": 149425,
            "imageType": "jpg",
            "title": "Herb and Cheddar Cordon Bleu"
          }
        },
        {
          "id": 2435,
          "position": 0,
          "slot": 3,
          "type": "INGREDIENTS",
          "value": {
            "id": 877,
            "imageType": "jpg",
            "ingredients": [
              {
                "amount": 1,
                "image": "https://spoonacular.com/cdn/ingredients_100x100/brussels-sprouts.jpg",
                "name": "brussels sprouts",
                "unit": "cup"
              }
            ],
            "name": "",
            "servings": "1",
            "title": "sprouts"
          }
        },
        {
          "id": 2436,
          "position": 0,
          "slot": 3,
          "type": "INGREDIENTS",
          "value": {
            "id": 877,
            "imageType": "jpg",
            "ingredients": [
              {
                "amount": 5,
                "image": "https://spoonacular.com/cdn/ingredients_100x100/white-wine.jpg",
                "name": "wine",
                "unit": "ounces"
              }
            ],
            "name": "",
            "servings": "1",
            "title": "wine"
          }
        }
      ],
      "nutritionSummary": {
        "nutrients": [
          {
            "amount": 1683,
            "name": "Calories",
            "percentDailyNeeds": 84,
            "unit": "cal"
          },
          {
            "amount": 68,
            "name": "Fat",
            "percentDailyNeeds": 105,
            "unit": "g"
          },
          {
            "amount": 139,
            "name": "Carbohydrates",
            "percentDailyNeeds": 46,
            "unit": "g"
          },
          {
            "amount": 106,
            "name": "Protein",
            "percentDailyNeeds": 212,
            "unit": "g"
          }
        ]
      },
      "nutritionSummaryBreakfast": {
        "nutrients": [
          {
            "amount": 490,
            "name": "Calories",
            "percentDailyNeeds": 24,
            "unit": "cal"
          },
          {
            "amount": 15,
            "name": "Fat",
            "percentDailyNeeds": 23,
            "unit": "g"
          },
          {
            "amount": 65,
            "name": "Carbohydrates",
            "percentDailyNeeds": 22,
            "unit": "g"
          },
          {
            "amount": 26,
            "name": "Protein",
            "percentDailyNeeds": 53,
            "unit": "g"
          }
        ]
      },
      "nutritionSummaryDinner": {
        "nutrients": [
          {
            "amount": 816,
            "name": "Calories",
            "percentDailyNeeds": 41,
            "unit": "cal"
          },
          {
            "amount": 21,
            "name": "Fat",
            "percentDailyNeeds": 32,
            "unit": "g"
          },
          {
            "amount": 58,
            "name": "Carbohydrates",
            "percentDailyNeeds": 19,
            "unit": "g"
          },
          {
            "amount": 72,
            "name": "Protein",
            "percentDailyNeeds": 144,
            "unit": "g"
          }
        ]
      },
      "nutritionSummaryLunch": {
        "nutrients": [
          {
            "amount": 378,
            "name": "Calories",
            "percentDailyNeeds": 19,
            "unit": "cal"
          },
          {
            "amount": 33,
            "name": "Fat",
            "percentDailyNeeds": 51,
            "unit": "g"
          },
          {
            "amount": 16,
            "name": "Carbohydrates",
            "percentDailyNeeds": 5,
            "unit": "g"
          },
          {
            "amount": 8,
            "name": "Protein",
            "percentDailyNeeds": 16,
            "unit": "g"
          }
        ]
      }
    },
    {
      "day": "7",
      "items": [
        {
          "id": 2437,
          "position": 0,
          "slot": 1,
          "type": "RECIPE",
          "value": {
            "id": 619085,
            "imageType": "jpg",
            "title": "Protein Packed Healthy French Toast with Chocolate and Peanut Butter {Super Simple, Whole Wheat}"
          }
        },
        {
          "id": 2438,
          "position": 0,
          "slot": 1,
          "type": "INGREDIENTS",
          "value": {
            "id": 877,
            "imageType": "jpg",
            "ingredients": [
              {
                "amount": 1,
                "image": "https://spoonacular.com/cdn/ingredients_100x100/orange.jpg",
                "name": "orange",
                "unit": ""
              }
            ],
            "name": "",
            "servings": "1",
            "title": "orange"
          }
        },
        {
          "id": 2439,
          "position": 0,
          "slot": 2,
          "type": "RECIPE",
          "value": {
            "id": 535563,
            "imageType": "jpg",
            "title": "Black Bean Quinoa Salad"
          }
        },
        {
          "id": 2440,
          "position": 0,
          "slot": 3,
          "type": "RECIPE",
          "value": {
            "id": 590570,
            "imageType": "jpg",
            "title": "Asian Beef Lettuce Wraps"
          }
        },
        {
          "id": 2441,
          "position": 0,
          "slot": 3,
          "type": "PRODUCT",
          "value": {
            "id": 146191,
            "imageType": "jpg",
            "title": "Lindt Dark Chocolate"
          }
        }
      ],
      "nutritionSummary": {
        "nutrients": [
          {
            "amount": 1442,
            "name": "Calories",
            "percentDailyNeeds": 72,
            "unit": "cal"
          },
          {
            "amount": 69,
            "name": "Fat",
            "percentDailyNeeds": 106,
            "unit": "g"
          },
          {
            "amount": 147,
            "name": "Carbohydrates",
            "percentDailyNeeds": 49,
            "unit": "g"
          },
          {
            "amount": 73,
            "name": "Protein",
            "percentDailyNeeds": 147,
            "unit": "g"
          }
        ]
      },
      "nutritionSummaryBreakfast": {
        "nutrients": [
          {
            "amount": 444,
            "name": "Calories",
            "percentDailyNeeds": 22,
            "unit": "cal"
          },
          {
            "amount": 12,
            "name": "Fat",
            "percentDailyNeeds": 19,
            "unit": "g"
          },
          {
            "amount": 51,
            "name": "Carbohydrates",
            "percentDailyNeeds": 17,
            "unit": "g"
          },
          {
            "amount": 38,
            "name": "Protein",
            "percentDailyNeeds": 76,
            "unit": "g"
          }
        ]
      },
      "nutritionSummaryDinner": {
        "nutrients": [
          {
            "amount": 593,
            "name": "Calories",
            "percentDailyNeeds": 30,
            "unit": "cal"
          },
          {
            "amount": 40,
            "name": "Fat",
            "percentDailyNeeds": 62,
            "unit": "g"
          },
          {
            "amount": 41,
            "name": "Carbohydrates",
            "percentDailyNeeds": 14,
            "unit": "g"
          },
          {
            "amount": 25,
            "name": "Protein",
            "percentDailyNeeds": 50,
            "unit": "g"
          }
        ]
      },
      "nutritionSummaryLunch": {
        "nutrients": [
          {
            "amount": 406,
            "name": "Calories",
            "percentDailyNeeds": 20,
            "unit": "cal"
          },
          {
            "amount": 17,
            "name": "Fat",
            "percentDailyNeeds": 26,
            "unit": "g"
          },
          {
            "amount": 56,
            "name": "Carbohydrates",
            "percentDailyNeeds": 19,
            "unit": "g"
          },
          {
            "amount": 10,
            "name": "Protein",
            "percentDailyNeeds": 21,
            "unit": "g"
          }
        ]
      }
    }
  ],
  "id": 128,
  "name": "1500 Calorie Meal Plan"
}
```

<h3 id="get-meal-plan-template-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="get-meal-plan-template-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|days|[object]|true|none|none|
|» day|string|true|none|none|
|» items|[object]|false|none|none|
|» » id|integer|true|none|none|
|» » position|integer|true|none|none|
|» » slot|integer|true|none|none|
|» » type|string|true|none|none|
|» » value|object|false|none|none|
|» » » id|number|true|none|none|
|» » » imageType|string|true|none|none|
|» » » title|string|true|none|none|
|» nutritionSummary|object|false|none|none|
|» » nutrients|[object]|true|none|none|
|» » » amount|number|true|none|none|
|» » » name|string|true|none|none|
|» » » percentDailyNeeds|number|true|none|none|
|» » » unit|string|true|none|none|
|» nutritionSummaryBreakfast|object|false|none|none|
|» » nutrients|[object]|true|none|none|
|» » » amount|number|true|none|none|
|» » » name|string|true|none|none|
|» » » percentDailyNeeds|number|true|none|none|
|» » » unit|string|true|none|none|
|» nutritionSummaryDinner|object|false|none|none|
|» » nutrients|[object]|true|none|none|
|» » » amount|number|true|none|none|
|» » » name|string|true|none|none|
|» » » percentDailyNeeds|number|true|none|none|
|» » » unit|string|true|none|none|
|» nutritionSummaryLunch|object|false|none|none|
|» » nutrients|[object]|true|none|none|
|» » » amount|number|true|none|none|
|» » » name|string|true|none|none|
|» » » percentDailyNeeds|number|true|none|none|
|» » » unit|string|true|none|none|
|id|integer|true|none|none|
|name|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyScheme
</aside>

## Delete Meal Plan Template

<a id="opIddeleteMealPlanTemplate"></a>

> Code samples

```bash
curl 'https://example.com/mealplanner/dsky/templates/15678?hash=4b5v4398573406' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -d '{"hash":"4b5v4398573406","id":15678,"username":"dsky"}'
```

`DELETE /mealplanner/{username}/templates/{id}`

Delete a meal plan template for a user.

<a href="https://spoonacular.com/food-api/docs#Delete-Meal-Plan-Template">Read entire docs</a>

> Body parameter

```json
{
  "hash": "4b5v4398573406",
  "id": 15678,
  "username": "dsky"
}
```

<h3 id="delete-meal-plan-template-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|username|path|string|true|The username.|
|id|path|number|true|The shopping list item id.|
|hash|query|string|true|The private hash for the username.|
|body|body|object|true|none|
|» hash|body|string|true|The private hash for the username.|
|» id|body|number|true|The shopping list item id.|
|» username|body|string|true|The username.|

> Example responses

> 200 Response

```json
{}
```

<h3 id="delete-meal-plan-template-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyScheme
</aside>

## Get Meal Plan Week

<a id="opIdgetMealPlanWeek"></a>

> Code samples

```bash
curl 'https://example.com/mealplanner/dsky/week/2020-06-01?hash=string' \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}"
```

`GET /mealplanner/{username}/week/{start-date}`

Retrieve a meal planned week for the given user. The username must be a spoonacular user and the hash must the the user's hash that can be found in his/her account.

<a href="https://spoonacular.com/food-api/docs#Get-Meal-Plan-Week">Read entire docs</a>

<h3 id="get-meal-plan-week-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|username|path|string|true|The username.|
|start-date|path|string|true|The start date of the meal planned week in the format yyyy-mm-dd.|
|hash|query|string|true|The private hash for the username.|

> Example responses

> 200 Response

```json
{
  "days": [
    {
      "date": 1589155200,
      "day": "Monday",
      "items": [
        {
          "id": 1976489,
          "position": 1,
          "slot": 1,
          "type": "RECIPE",
          "value": {
            "id": 1023004,
            "imageType": "",
            "servings": 2,
            "title": "Foolproof Meatloaf"
          }
        },
        {
          "id": 1976490,
          "position": 2,
          "slot": 2,
          "type": "CUSTOM_FOOD",
          "value": {
            "id": 345,
            "image": "https://spoonacular.com/cdn/ingredients_100x100/bratwurst.jpg",
            "imageType": "jpg",
            "servings": 1,
            "title": "Denn's Lamb Bratwurst - 1/2 Pkg"
          }
        }
      ],
      "nutritionSummary": {
        "nutrients": [
          {
            "amount": 310,
            "name": "Calories",
            "percentDailyNeeds": 16,
            "unit": "cal"
          },
          {
            "amount": 25,
            "name": "Fat",
            "percentDailyNeeds": 38,
            "unit": "g"
          },
          {
            "amount": 1,
            "name": "Carbohydrates",
            "percentDailyNeeds": 0,
            "unit": "g"
          },
          {
            "amount": 20,
            "name": "Protein",
            "percentDailyNeeds": 40,
            "unit": "g"
          }
        ]
      },
      "nutritionSummaryBreakfast": {
        "nutrients": [
          {
            "amount": 0,
            "name": "Calories",
            "percentDailyNeeds": 0,
            "unit": "cal"
          },
          {
            "amount": 0,
            "name": "Fat",
            "percentDailyNeeds": 0,
            "unit": "g"
          },
          {
            "amount": 0,
            "name": "Carbohydrates",
            "percentDailyNeeds": 0,
            "unit": "g"
          },
          {
            "amount": 0,
            "name": "Protein",
            "percentDailyNeeds": 0,
            "unit": "g"
          }
        ]
      },
      "nutritionSummaryDinner": {
        "nutrients": [
          {
            "amount": 0,
            "name": "Calories",
            "percentDailyNeeds": 0,
            "unit": "cal"
          },
          {
            "amount": 0,
            "name": "Fat",
            "percentDailyNeeds": 0,
            "unit": "g"
          },
          {
            "amount": 0,
            "name": "Carbohydrates",
            "percentDailyNeeds": 0,
            "unit": "g"
          },
          {
            "amount": 0,
            "name": "Protein",
            "percentDailyNeeds": 0,
            "unit": "g"
          }
        ]
      },
      "nutritionSummaryLunch": {
        "nutrients": [
          {
            "amount": 310,
            "name": "Calories",
            "percentDailyNeeds": 16,
            "unit": "cal"
          },
          {
            "amount": 25,
            "name": "Fat",
            "percentDailyNeeds": 38,
            "unit": "g"
          },
          {
            "amount": 1,
            "name": "Carbohydrates",
            "percentDailyNeeds": 0,
            "unit": "g"
          },
          {
            "amount": 20,
            "name": "Protein",
            "percentDailyNeeds": 40,
            "unit": "g"
          }
        ]
      }
    },
    {
      "date": 1589241600,
      "day": "Tuesday",
      "items": [
        {
          "id": 1976491,
          "position": 3,
          "slot": 1,
          "type": "INGREDIENTS",
          "value": {
            "id": 877,
            "imageType": "jpg",
            "ingredients": [
              {
                "amount": "1",
                "image": "https://spoonacular.com/cdn/ingredients_100x100/apple.jpg",
                "name": "apple",
                "unit": ""
              },
              {
                "amount": "1",
                "image": "https://spoonacular.com/cdn/ingredients_100x100/bananas.jpg",
                "name": "banana",
                "unit": ""
              }
            ],
            "name": "",
            "servings": 1,
            "title": "apple and banana"
          }
        }
      ],
      "nutritionSummary": {
        "nutrients": [
          {
            "amount": 200,
            "name": "Calories",
            "percentDailyNeeds": 10,
            "unit": "cal"
          },
          {
            "amount": 1,
            "name": "Fat",
            "percentDailyNeeds": 1,
            "unit": "g"
          },
          {
            "amount": 52,
            "name": "Carbohydrates",
            "percentDailyNeeds": 17,
            "unit": "g"
          },
          {
            "amount": 2,
            "name": "Protein",
            "percentDailyNeeds": 4,
            "unit": "g"
          }
        ]
      },
      "nutritionSummaryBreakfast": {
        "nutrients": [
          {
            "amount": 200,
            "name": "Calories",
            "percentDailyNeeds": 10,
            "unit": "cal"
          },
          {
            "amount": 1,
            "name": "Fat",
            "percentDailyNeeds": 1,
            "unit": "g"
          },
          {
            "amount": 52,
            "name": "Carbohydrates",
            "percentDailyNeeds": 17,
            "unit": "g"
          },
          {
            "amount": 2,
            "name": "Protein",
            "percentDailyNeeds": 4,
            "unit": "g"
          }
        ]
      },
      "nutritionSummaryDinner": {
        "nutrients": [
          {
            "amount": 0,
            "name": "Calories",
            "percentDailyNeeds": 0,
            "unit": "cal"
          },
          {
            "amount": 0,
            "name": "Fat",
            "percentDailyNeeds": 0,
            "unit": "g"
          },
          {
            "amount": 0,
            "name": "Carbohydrates",
            "percentDailyNeeds": 0,
            "unit": "g"
          },
          {
            "amount": 0,
            "name": "Protein",
            "percentDailyNeeds": 0,
            "unit": "g"
          }
        ]
      },
      "nutritionSummaryLunch": {
        "nutrients": [
          {
            "amount": 0,
            "name": "Calories",
            "percentDailyNeeds": 0,
            "unit": "cal"
          },
          {
            "amount": 0,
            "name": "Fat",
            "percentDailyNeeds": 0,
            "unit": "g"
          },
          {
            "amount": 0,
            "name": "Carbohydrates",
            "percentDailyNeeds": 0,
            "unit": "g"
          },
          {
            "amount": 0,
            "name": "Protein",
            "percentDailyNeeds": 0,
            "unit": "g"
          }
        ]
      }
    },
    {
      "date": 1589328000,
      "day": "Wednesday",
      "items": [
        {
          "id": 1976492,
          "position": 4,
          "slot": 1,
          "type": "MENU_ITEM",
          "value": {
            "id": 378557,
            "image": "https://images.spoonacular.com/file/wximages/378557-312x231.png",
            "imageType": "png",
            "servings": 1,
            "title": "BBQ Steak Pizza, 9"
          }
        }
      ],
      "nutritionSummary": {
        "nutrients": [
          {
            "amount": 180,
            "name": "Calories",
            "percentDailyNeeds": 9,
            "unit": "cal"
          },
          {
            "amount": 6,
            "name": "Fat",
            "percentDailyNeeds": 9,
            "unit": "g"
          },
          {
            "amount": 22,
            "name": "Carbohydrates",
            "percentDailyNeeds": 7,
            "unit": "g"
          },
          {
            "amount": 10,
            "name": "Protein",
            "percentDailyNeeds": 20,
            "unit": "g"
          }
        ]
      },
      "nutritionSummaryBreakfast": {
        "nutrients": [
          {
            "amount": 180,
            "name": "Calories",
            "percentDailyNeeds": 9,
            "unit": "cal"
          },
          {
            "amount": 6,
            "name": "Fat",
            "percentDailyNeeds": 9,
            "unit": "g"
          },
          {
            "amount": 22,
            "name": "Carbohydrates",
            "percentDailyNeeds": 7,
            "unit": "g"
          },
          {
            "amount": 10,
            "name": "Protein",
            "percentDailyNeeds": 20,
            "unit": "g"
          }
        ]
      },
      "nutritionSummaryDinner": {
        "nutrients": [
          {
            "amount": 0,
            "name": "Calories",
            "percentDailyNeeds": 0,
            "unit": "cal"
          },
          {
            "amount": 0,
            "name": "Fat",
            "percentDailyNeeds": 0,
            "unit": "g"
          },
          {
            "amount": 0,
            "name": "Carbohydrates",
            "percentDailyNeeds": 0,
            "unit": "g"
          },
          {
            "amount": 0,
            "name": "Protein",
            "percentDailyNeeds": 0,
            "unit": "g"
          }
        ]
      },
      "nutritionSummaryLunch": {
        "nutrients": [
          {
            "amount": 0,
            "name": "Calories",
            "percentDailyNeeds": 0,
            "unit": "cal"
          },
          {
            "amount": 0,
            "name": "Fat",
            "percentDailyNeeds": 0,
            "unit": "g"
          },
          {
            "amount": 0,
            "name": "Carbohydrates",
            "percentDailyNeeds": 0,
            "unit": "g"
          },
          {
            "amount": 0,
            "name": "Protein",
            "percentDailyNeeds": 0,
            "unit": "g"
          }
        ]
      }
    }
  ]
}
```

<h3 id="get-meal-plan-week-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="get-meal-plan-week-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|days|[object]|true|none|none|
|» date|number|true|none|none|
|» day|string|true|none|none|
|» items|[object]|false|none|none|
|» » id|integer|true|none|none|
|» » position|integer|true|none|none|
|» » slot|integer|true|none|none|
|» » type|string|true|none|none|
|» » value|object|false|none|none|
|» » » id|number|true|none|none|
|» » » imageType|string|true|none|none|
|» » » servings|number|true|none|none|
|» » » title|string|true|none|none|
|» nutritionSummary|object|false|none|none|
|» » nutrients|[object]|true|none|none|
|» » » amount|number|true|none|none|
|» » » name|string|true|none|none|
|» » » percentDailyNeeds|number|true|none|none|
|» » » unit|string|true|none|none|
|» nutritionSummaryBreakfast|object|false|none|none|
|» » nutrients|[object]|true|none|none|
|» » » amount|number|true|none|none|
|» » » name|string|true|none|none|
|» » » percentDailyNeeds|number|true|none|none|
|» » » unit|string|true|none|none|
|» nutritionSummaryDinner|object|false|none|none|
|» » nutrients|[object]|true|none|none|
|» » » amount|number|true|none|none|
|» » » name|string|true|none|none|
|» » » percentDailyNeeds|number|true|none|none|
|» » » unit|string|true|none|none|
|» nutritionSummaryLunch|object|false|none|none|
|» » nutrients|[object]|true|none|none|
|» » » amount|number|true|none|none|
|» » » name|string|true|none|none|
|» » » percentDailyNeeds|number|true|none|none|
|» » » unit|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyScheme
</aside>

## Connect User

<a id="opIdconnectUser"></a>

> Code samples

```bash
curl https://example.com/users/connect \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -d '{
    "email": "your user'\''s email",
    "firstName": "your user'\''s first name",
    "lastName": "your user'\''s last name",
    "username": "your user'\''s name"
  }'
```

`POST /users/connect`

In order to call user-specific endpoints, you need to connect your app's users to spoonacular users.

<a href="https://spoonacular.com/food-api/docs#Connect-User">Read entire docs</a>

> Body parameter

```json
{
  "email": "your user's email",
  "firstName": "your user's first name",
  "lastName": "your user's last name",
  "username": "your user's name"
}
```

<h3 id="connect-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» email|body|string|true|none|
|» firstName|body|string|true|none|
|» lastName|body|string|true|none|
|» username|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "hash": "q572587bq2405724q05",
  "username": "api_123_user"
}
```

<h3 id="connect-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="connect-user-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hash|string|true|none|none|
|username|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyScheme
</aside>

<h1 id="spoonacular-api-menu-items">menu items</h1>

## Search Menu Items

<a id="opIdsearchMenuItems"></a>

> Code samples

```bash
curl https://example.com/food/menuItems/search \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}"
```

`GET /food/menuItems/search`

Search over 115,000 menu items from over 800 fast food and chain restaurants. For example, McDonald's Big Mac or Starbucks Mocha.

<a href="https://spoonacular.com/food-api/docs#Search-Menu-Items">Read entire docs</a>

<h3 id="search-menu-items-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|query|query|string|false|The (natural language) search query.|
|minCalories|query|number|false|The minimum amount of calories the menu item must have.|
|maxCalories|query|number|false|The maximum amount of calories the menu item can have.|
|minCarbs|query|number|false|The minimum amount of carbohydrates in grams the menu item must have.|
|maxCarbs|query|number|false|The maximum amount of carbohydrates in grams the menu item can have.|
|minProtein|query|number|false|The minimum amount of protein in grams the menu item must have.|
|maxProtein|query|number|false|The maximum amount of protein in grams the menu item can have.|
|minFat|query|number|false|The minimum amount of fat in grams the menu item must have.|
|maxFat|query|number|false|The maximum amount of fat in grams the menu item can have.|
|addMenuItemInformation|query|boolean|false|If set to true, you get more information about the menu items returned.|
|offset|query|integer|false|The number of results to skip (between 0 and 900).|
|number|query|integer|false|The maximum number of items to return (between 1 and 100). Defaults to 10.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|addMenuItemInformation|false|
|addMenuItemInformation|true|

> Example responses

> 200 Response

```json
{
  "menuItems": [
    {
      "id": 419357,
      "image": "https://images.spoonacular.com/file/wximages/419357-312x231.png",
      "imageType": "png",
      "restaurantChain": "Hooters",
      "servings": {
        "number": 1,
        "size": 2,
        "unit": "oz"
      },
      "title": "Burger Sliders"
    },
    {
      "id": 424571,
      "image": "https://images.spoonacular.com/file/wximages/424571-312x231.png",
      "imageType": "png",
      "restaurantChain": "Burger King",
      "servings": {
        "number": 1,
        "size": 2,
        "unit": "oz"
      },
      "title": "Bacon King Burger"
    }
  ],
  "number": 2,
  "offset": 0,
  "totalMenuItems": 6749,
  "type": "menuItem"
}
```

<h3 id="search-menu-items-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="search-menu-items-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|menuItems|[object]|true|none|none|
|» id|integer|true|none|none|
|» image|string|true|none|none|
|» imageType|string|true|none|none|
|» restaurantChain|string|true|none|none|
|» servings|object|false|none|none|
|» » number|number|true|none|none|
|» » size|number|true|none|none|
|» » unit|string|true|none|none|
|» title|string|true|none|none|
|number|integer|true|none|none|
|offset|integer|true|none|none|
|totalMenuItems|integer|true|none|none|
|type|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyScheme
</aside>

## Autocomplete Menu Item Search

<a id="opIdautocompleteMenuItemSearch"></a>

> Code samples

```bash
curl 'https://example.com/food/menuItems/suggest?query=chicke' \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}"
```

`GET /food/menuItems/suggest`

Generate suggestions for menu items based on a (partial) query. The matches will be found by looking in the title only.

<a href="https://spoonacular.com/food-api/docs#Autocomplete-Menu-Item-Search">Read entire docs</a>

<h3 id="autocomplete-menu-item-search-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|query|query|string|true|The (partial) search query.|
|number|query|number|false|The number of results to return (between 1 and 25).|

> Example responses

> 200 Response

```json
{
  "results": [
    {
      "id": 253419,
      "title": "pei wei asian diner thai chicken lettuce wraps"
    },
    {
      "id": 380722,
      "title": "camille's chicken caesar salad includes 2 oz. caesar dressing"
    }
  ]
}
```

<h3 id="autocomplete-menu-item-search-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="autocomplete-menu-item-search-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[object]|true|none|none|
|» id|integer|true|none|none|
|» title|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyScheme
</aside>

## Get Menu Item Information

<a id="opIdgetMenuItemInformation"></a>

> Code samples

```bash
curl https://example.com/food/menuItems/424571 \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}"
```

`GET /food/menuItems/{id}`

Use a menu item id to get all available information about a menu item, such as nutrition.

<a href="https://spoonacular.com/food-api/docs#Get-Menu-Item-Information">Read entire docs</a>

<h3 id="get-menu-item-information-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|number|true|The menu item id.|

> Example responses

> 200 Response

```json
{
  "badges": [],
  "breadcrumbs": [
    "burger",
    "main course",
    "food product category"
  ],
  "generatedText": "",
  "id": 424571,
  "imageType": "png",
  "likes": 0,
  "nutrition": {
    "caloricBreakdown": {
      "percentCarbs": 35,
      "percentFat": 30,
      "percentProtein": 35
    },
    "nutrients": [
      {
        "amount": 69,
        "name": "Fat",
        "percentOfDailyNeeds": 30,
        "unit": "g"
      },
      {
        "amount": 57,
        "name": "Protein",
        "percentOfDailyNeeds": 35,
        "unit": "g"
      },
      {
        "amount": 1040,
        "name": "Calories",
        "percentOfDailyNeeds": 50,
        "unit": "cal"
      },
      {
        "amount": 48,
        "name": "Carbohydrates",
        "percentOfDailyNeeds": 35,
        "unit": "g"
      }
    ]
  },
  "price": 2.35,
  "restaurantChain": "Burger King",
  "servings": {
    "number": 1,
    "size": 2,
    "unit": "oz"
  },
  "spoonacularScore": 12.5,
  "title": "Bacon King Burger"
}
```

<h3 id="get-menu-item-information-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="get-menu-item-information-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|badges|[string]|true|none|none|
|breadcrumbs|[string]|true|none|none|
|generatedText|string|false|none|none|
|id|integer|true|none|none|
|imageType|string|true|none|none|
|likes|number|true|none|none|
|nutrition|object|true|none|none|
|» caloricBreakdown|object|true|none|none|
|» » percentCarbs|number|true|none|none|
|» » percentFat|number|true|none|none|
|» » percentProtein|number|true|none|none|
|» nutrients|[object]|true|none|none|
|» » amount|number|true|none|none|
|» » name|string|true|none|none|
|» » percentOfDailyNeeds|number|true|none|none|
|» » unit|string|true|none|none|
|price|number|false|none|none|
|restaurantChain|string|true|none|none|
|servings|object|true|none|none|
|» number|number|true|none|none|
|» size|number|true|none|none|
|» unit|string|true|none|none|
|spoonacularScore|number|false|none|none|
|title|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyScheme
</aside>

## Menu Item Nutrition Label Widget

<a id="opIdmenuItemNutritionLabelWidget"></a>

> Code samples

```bash
curl https://example.com/food/menuItems/342313/nutritionLabel \
  -H "x-api-key: ${API_KEY}"
```

`GET /food/menuItems/{id}/nutritionLabel`

Visualize a menu item's nutritional label information as HTML including CSS.

<a href="https://spoonacular.com/food-api/docs#Menu-Item-Nutrition-Label-Widget">Read entire docs</a>

<h3 id="menu-item-nutrition-label-widget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|number|true|The menu item id.|
|defaultCss|query|boolean|false|Whether the default CSS should be added to the response.|
|showOptionalNutrients|query|boolean|false|Whether to show optional nutrients.|
|showZeroValues|query|boolean|false|Whether to show zero values.|
|showIngredients|query|boolean|false|Whether to show a list of ingredients.|

<h3 id="menu-item-nutrition-label-widget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyScheme
</aside>

## Menu Item Nutrition Label Image

<a id="opIdmenuItemNutritionLabelImage"></a>

> Code samples

```bash
curl https://example.com/food/menuItems/342313/nutritionLabel.png \
  -H "x-api-key: ${API_KEY}"
```

`GET /food/menuItems/{id}/nutritionLabel.png`

Visualize a menu item's nutritional label information as an image.

<a href="https://spoonacular.com/food-api/docs#Menu-Item-Nutrition-Label-Image">Read entire docs</a>

<h3 id="menu-item-nutrition-label-image-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|number|true|The menu item id.|
|showOptionalNutrients|query|boolean|false|Whether to show optional nutrients.|
|showZeroValues|query|boolean|false|Whether to show zero values.|
|showIngredients|query|boolean|false|Whether to show a list of ingredients.|

<h3 id="menu-item-nutrition-label-image-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyScheme
</aside>

## Menu Item Nutrition by ID Widget

<a id="opIdvisualizeMenuItemNutritionByID"></a>

> Code samples

```bash
curl https://example.com/food/menuItems/1003464/nutritionWidget \
  -H "x-api-key: ${API_KEY}"
```

`GET /food/menuItems/{id}/nutritionWidget`

Visualize a menu item's nutritional information as HTML including CSS.

<a href="https://spoonacular.com/food-api/docs#Menu-Item-Nutrition-by-ID-Widget">Read entire docs</a>

<h3 id="menu-item-nutrition-by-id-widget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|number|true|The menu item id.|
|defaultCss|query|boolean|false|Whether the default CSS should be added to the response.|
|Accept|header|string|false|Accept header.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Accept|application/json|
|Accept|text/html|
|Accept|media/*|

<h3 id="menu-item-nutrition-by-id-widget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyScheme
</aside>

## Menu Item Nutrition by ID Image

<a id="opIdmenuItemNutritionByIDImage"></a>

> Code samples

```bash
curl https://example.com/food/menuItems/424571/nutritionWidget.png \
  -H "x-api-key: ${API_KEY}"
```

`GET /food/menuItems/{id}/nutritionWidget.png`

Visualize a menu item's nutritional information as HTML including CSS.

<a href="https://spoonacular.com/food-api/docs#Menu-Item-Nutrition-by-ID-Image">Read entire docs</a>

<h3 id="menu-item-nutrition-by-id-image-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|number|true|The menu item id.|

<h3 id="menu-item-nutrition-by-id-image-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyScheme
</aside>

<h1 id="spoonacular-api-misc">misc</h1>

## Talk to Chatbot

<a id="opIdtalkToChatbot"></a>

> Code samples

```bash
curl 'https://example.com/food/converse?text=donut%20recipes' \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}"
```

`GET /food/converse`

This endpoint can be used to have a conversation about food with the spoonacular chatbot. Use the "Get Conversation Suggests" endpoint to show your user what he or she can say.

<a href="https://spoonacular.com/food-api/docs#Talk-to-Chatbot">Read entire docs</a>

<h3 id="talk-to-chatbot-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|true|The request / question / answer from the user to the chatbot.|
|contextId|query|string|false|An arbitrary globally unique id for your conversation. The conversation can contain states so you should pass your context id if you want the bot to be able to remember the conversation.|

> Example responses

> 200 Response

```json
{
  "answerText": "Baby, if you were a fruit you'd be a fineapple.",
  "media": []
}
```

<h3 id="talk-to-chatbot-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="talk-to-chatbot-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|answerText|string|true|none|none|
|media|[object]|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyScheme
</aside>

## Conversation Suggests

<a id="opIdgetConversationSuggests"></a>

> Code samples

```bash
curl 'https://example.com/food/converse/suggest?query=tell' \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}"
```

`GET /food/converse/suggest`

This endpoint returns suggestions for things the user can say or ask the chatbot.

<a href="https://spoonacular.com/food-api/docs#Conversation-Suggests">Read entire docs</a>

<h3 id="conversation-suggests-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|query|query|string|true|A (partial) query from the user. The endpoint will return if it matches topics it can talk about.|
|number|query|number|false|The number of suggestions to return (between 1 and 25).|

> Example responses

> 200 Response

```json
{
  "suggests": {
    "_": [
      {
        "name": "Tell me something funny"
      },
      {
        "name": "Tell me a food fact"
      },
      {
        "name": "Tell me a joke"
      },
      {
        "name": "Tell me food trivia"
      },
      {
        "name": "Tell me a fact about food"
      }
    ]
  },
  "words": []
}
```

<h3 id="conversation-suggests-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="conversation-suggests-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|suggests|object|true|none|none|
|» _|[object]|true|none|none|
|» » name|string|true|none|none|
|words|[object]|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyScheme
</aside>

## Search Custom Foods

<a id="opIdsearchCustomFoods"></a>

> Code samples

```bash
curl 'https://example.com/food/customFoods/search?username=dsky&hash=4b5v4398573406' \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}"
```

`GET /food/customFoods/search`

Search custom foods in a user's account.

<a href="https://spoonacular.com/food-api/docs#Search-Custom-Foods">Read entire docs</a>

<h3 id="search-custom-foods-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|query|query|string|false|The (natural language) search query.|
|username|query|string|true|The username.|
|hash|query|string|true|The private hash for the username.|
|offset|query|integer|false|The number of results to skip (between 0 and 900).|
|number|query|integer|false|The maximum number of items to return (between 1 and 100). Defaults to 10.|

> Example responses

> 200 Response

```json
{
  "customFoods": [
    {
      "id": 15,
      "imageUrl": "https://spoonacular.com/cdn/ingredients_100x100/bratwurst.jpg",
      "price": 6.9,
      "servings": 1,
      "title": "Max Cafe Curry Bratwurst"
    }
  ],
  "number": 10,
  "offset": 0,
  "type": "customFood"
}
```

<h3 id="search-custom-foods-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="search-custom-foods-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|customFoods|[object]|true|none|none|
|» id|integer|true|none|none|
|» imageUrl|string|true|none|none|
|» price|number|true|none|none|
|» servings|number|true|none|none|
|» title|string|true|none|none|
|number|integer|true|none|none|
|offset|integer|true|none|none|
|type|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyScheme
</aside>

## Detect Food in Text

<a id="opIddetectFoodInText"></a>

> Code samples

```bash
curl https://example.com/food/detect \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}"
```

`POST /food/detect`

Take any text and find all mentions of food contained within it. This task is also called Named Entity Recognition (NER). In this case, the entities are foods. Either dishes, such as pizza or cheeseburger, or ingredients, such as cucumber or almonds.

<a href="https://spoonacular.com/food-api/docs#Detect-Food-in-Text">Read entire docs</a>

> Body parameter

```yaml
"text=I like to eat delicious tacos. The only thing better is a cheeseburger with cheddar. But then again, pizza with pepperoni, mushrooms, and tomatoes is so good too!"
```

<h3 id="detect-food-in-text-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|false|The content type.|
|body|body|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Content-Type|application/x-www-form-urlencoded|
|Content-Type|application/json|
|Content-Type|multipart/form-data|

> Example responses

> 200 Response

```json
{
  "annotations": [
    {
      "annotation": "cheeseburger",
      "image": "https://spoonacular.com/menuItemImages/cheeseburger.jpg",
      "tag": "dish"
    },
    {
      "annotation": "mushrooms",
      "image": "https://spoonacular.com/cdn/ingredients_100x100/mushrooms.png",
      "tag": "ingredient"
    },
    {
      "annotation": "pepperoni",
      "image": "https://spoonacular.com/cdn/ingredients_100x100/pepperoni.png",
      "tag": "ingredient"
    },
    {
      "annotation": "tomatoes",
      "image": "https://spoonacular.com/cdn/ingredients_100x100/tomato.png",
      "tag": "ingredient"
    },
    {
      "annotation": "cheddar",
      "image": "https://spoonacular.com/cdn/ingredients_100x100/cheddar-cheese.png",
      "tag": "ingredient"
    },
    {
      "annotation": "tacos",
      "image": "https://spoonacular.com/menuItemImages/taco-isolated.jpg",
      "tag": "dish"
    },
    {
      "annotation": "pizza",
      "image": "https://spoonacular.com/menuItemImages/cheese-pizza.png",
      "tag": "dish"
    }
  ]
}
```

<h3 id="detect-food-in-text-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="detect-food-in-text-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|annotations|[object]|true|none|none|
|» annotation|string|true|none|none|
|» image|string|true|none|none|
|» tag|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyScheme
</aside>

## Image Analysis by URL

<a id="opIdimageAnalysisByURL"></a>

> Code samples

```bash
curl 'https://example.com/food/images/analyze?imageUrl=https%3A%2F%2Fspoonacular.com%2FrecipeImages%2F635350-240x150.jpg' \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}"
```

`GET /food/images/analyze`

Analyze a food image. The API tries to classify the image, guess the nutrition, and find a matching recipes.

<a href="https://spoonacular.com/food-api/docs#Image-Analysis-by-URL">Read entire docs</a>

<h3 id="image-analysis-by-url-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|imageUrl|query|string|true|The URL of the image to be analyzed.|

> Example responses

> 200 Response

```json
{
  "category": {
    "name": "burger",
    "probability": 0.9998999999999999
  },
  "nutrition": {
    "calories": {
      "confidenceRange95Percent": {
        "max": 571.98,
        "min": 428.97
      },
      "standardDeviation": 182.4,
      "unit": "calories",
      "value": 508
    },
    "carbs": {
      "confidenceRange95Percent": {
        "max": 44.96,
        "min": 29.74
      },
      "standardDeviation": 19.42,
      "unit": "g",
      "value": 40
    },
    "fat": {
      "confidenceRange95Percent": {
        "max": 32.95,
        "min": 21.29
      },
      "standardDeviation": 14.88,
      "unit": "g",
      "value": 21
    },
    "protein": {
      "confidenceRange95Percent": {
        "max": 33.7,
        "min": 22.58
      },
      "standardDeviation": 14.19,
      "unit": "g",
      "value": 29
    },
    "recipesUsed": 25
  },
  "recipes": [
    {
      "id": 477749,
      "imageType": "jpg",
      "title": "Burger Club: Award-Winning Logan County Burger Patty Melt",
      "url": "http://www.barbarabakes.com/2010/05/burger-club-award-winning-logan-county/"
    },
    {
      "id": 493632,
      "imageType": "jpg",
      "title": "New York Burger Week: Pretzel Burger with Beer Cheese",
      "url": "http://www.foodrepublic.com/2013/09/23/new-york-burger-week-pretzel-burger-beer-cheese"
    },
    {
      "id": 23359,
      "imageType": "jpg",
      "title": "Beef Burger Recipe (elvis Burger With Salad & Gherkin)",
      "url": "http://www.jamieoliver.com/recipes/beef-recipes/elvis-burger-with-pickled-gherkin"
    },
    {
      "id": 149115,
      "imageType": "jpg",
      "title": "Surf N' Turf Burger (Grilled Burger with Lobster and Bacon)",
      "url": "http://www.seriouseats.com/recipes/2013/06/lobster-bacon-burger-recipe.html"
    },
    {
      "id": 861442,
      "imageType": "jpg",
      "title": "Istanbul-Style Wet Burger (Islak Burger)",
      "url": "http://www.epicurious.com/recipes/food/views/istanbul-style-wet-burger-islak-burger?mbid=nl_02272017_Daily_CTN_PM+(1)"
    },
    {
      "id": 600423,
      "imageType": "jpg",
      "title": "Rajma Burger (Red Kidney Beans Burger)",
      "url": "http://www.spiceupthecurry.com/rajma-burger-red-kidney-beans-burger/"
    },
    {
      "id": 493634,
      "imageType": "jpg",
      "title": "Chicago Burger Week: The Chicago Deep Dish Pizza Burger",
      "url": "http://www.foodrepublic.com/2013/09/30/chicago-burger-week-chicago-deep-dish-pizza-burger"
    },
    {
      "id": 487346,
      "imageType": "jpg",
      "title": "aloo tikki burger , north indian style aloo tikki burger",
      "url": "http://www.vegrecipesofindia.com/aloo-tikki-burger/"
    },
    {
      "id": 607330,
      "imageType": "jpg",
      "title": "Aloo Tikki Burger | How to make aloo tikki burger at home",
      "url": "http://www.spiceupthecurry.com/aloo-tikki-burger-recipe/"
    }
  ]
}
```

<h3 id="image-analysis-by-url-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="image-analysis-by-url-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category|object|true|none|none|
|» name|string|true|none|none|
|» probability|number|true|none|none|
|nutrition|object|true|none|none|
|» calories|object|true|none|none|
|» » confidenceRange95Percent|object|true|none|none|
|» » » max|number|true|none|none|
|» » » min|number|true|none|none|
|» » standardDeviation|number|true|none|none|
|» » unit|string|true|none|none|
|» » value|number|true|none|none|
|» carbs|object|true|none|none|
|» » confidenceRange95Percent|object|true|none|none|
|» » » max|number|true|none|none|
|» » » min|number|true|none|none|
|» » standardDeviation|number|true|none|none|
|» » unit|string|true|none|none|
|» » value|number|true|none|none|
|» fat|object|true|none|none|
|» » confidenceRange95Percent|object|true|none|none|
|» » » max|number|true|none|none|
|» » » min|number|true|none|none|
|» » standardDeviation|number|true|none|none|
|» » unit|string|true|none|none|
|» » value|number|true|none|none|
|» protein|object|true|none|none|
|» » confidenceRange95Percent|object|true|none|none|
|» » » max|number|true|none|none|
|» » » min|number|true|none|none|
|» » standardDeviation|number|true|none|none|
|» » unit|string|true|none|none|
|» » value|number|true|none|none|
|» recipesUsed|integer|true|none|none|
|recipes|[object]|true|none|none|
|» id|integer|true|none|none|
|» imageType|string|true|none|none|
|» title|string|true|none|none|
|» url|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyScheme
</aside>

## Image Classification by URL

<a id="opIdimageClassificationByURL"></a>

> Code samples

```bash
curl 'https://example.com/food/images/classify?imageUrl=https%3A%2F%2Fspoonacular.com%2FrecipeImages%2F635350-240x150.jpg' \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}"
```

`GET /food/images/classify`

Classify a food image.

<a href="https://spoonacular.com/food-api/docs#Image-Classification-by-URL">Read entire docs</a>

<h3 id="image-classification-by-url-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|imageUrl|query|string|true|The URL of the image to be classified.|

> Example responses

> 200 Response

```json
{
  "category": "burger",
  "probability": 0.91354
}
```

<h3 id="image-classification-by-url-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="image-classification-by-url-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category|string|true|none|none|
|probability|number|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyScheme
</aside>

## Random Food Joke

<a id="opIdgetARandomFoodJoke"></a>

> Code samples

```bash
curl https://example.com/food/jokes/random \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}"
```

`GET /food/jokes/random`

Get a random joke that is related to food. Caution: this is an endpoint for adults!

<a href="https://spoonacular.com/food-api/docs#Random-Food-Joke">Read entire docs</a>

> Example responses

> 200 Response

```json
{
  "text": "Any salad can be a Caesar salad if you stab it enough."
}
```

<h3 id="random-food-joke-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="random-food-joke-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|text|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyScheme
</aside>

## Search All Food

<a id="opIdsearchAllFood"></a>

> Code samples

```bash
curl 'https://example.com/food/search?query=apple' \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}"
```

`GET /food/search`

Search all food content with one call. That includes recipes, grocery products, menu items, simple foods (ingredients), and food videos.

<a href="https://spoonacular.com/food-api/docs#Search-All-Food">Read entire docs</a>

<h3 id="search-all-food-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|query|query|string|true|The search query.|
|offset|query|integer|false|The number of results to skip (between 0 and 900).|
|number|query|integer|false|The maximum number of items to return (between 1 and 100). Defaults to 10.|

> Example responses

> 200 Response

```json
{
  "limit": 2,
  "offset": 0,
  "query": "apple",
  "searchResults": [
    {
      "name": "Recipes",
      "results": [
        {
          "content": "Apple Cake might be just the dessert you are searching for...",
          "id": "632485",
          "image": "https://spoonacular.com/recipeImages/632485-312x231.jpg",
          "link": "https://spoonacular.com/recipes/apple-cake-632485",
          "name": "Apple Cake",
          "relevance": 10000,
          "type": "HTML"
        },
        {
          "content": "Apple Crumble might be just the dessert you are searching for...",
          "id": "632522",
          "image": "https://spoonacular.com/recipeImages/632522-312x231.jpg",
          "link": "https://spoonacular.com/recipes/apple-crumble-632522",
          "name": "Apple Crumble",
          "relevance": 9999,
          "type": "HTML"
        }
      ],
      "totalResults": 167
    },
    {
      "name": "Products",
      "results": [
        {
          "content": null,
          "id": "5487",
          "image": "https://spoonacular.com/productImages/469604-312x231.jpg",
          "link": "https://spoonacular.com/products/pleasant-valley-apple-wine-469604",
          "name": "Pleasant Valley Apple Wine",
          "relevance": 10000,
          "type": "HTML"
        },
        {
          "content": null,
          "id": "428573",
          "image": "https://spoonacular.com/productImages/428573-312x231.jpg",
          "link": "https://spoonacular.com/products/nv-georgetown-vineyards-apple-wine-428573",
          "name": "NV Georgetown Vineyards Apple Wine",
          "relevance": 9999,
          "type": "HTML"
        }
      ],
      "totalResults": 3219
    },
    {
      "name": "Menu Items",
      "results": [
        {
          "content": null,
          "id": "334550",
          "image": null,
          "link": "https://spoonacular.com/menu-items/old-chicago-applewood-spiced-bbq-chicken-pizza-chicago-thick-12-inch--334550",
          "name": "Old Chicago Applewood Spiced BBQ Chicken Pizza, Chicago Thick, 12 Inch (Slice)",
          "relevance": 10000,
          "type": "HTML"
        },
        {
          "content": null,
          "id": "422013",
          "image": null,
          "link": "https://spoonacular.com/menu-items/huddle-house-apple-cobbler-a-la-mode-422013",
          "name": "Huddle House Apple Cobbler a la mode",
          "relevance": 9999,
          "type": "HTML"
        }
      ],
      "totalResults": 2410
    },
    {
      "name": "Articles",
      "results": [
        {
          "content": null,
          "id": "578",
          "image": "https://spoonacular.com/cdn/ingredients_100x100/braeburn-apples.jpg",
          "link": "https://spoonacular.com/academy/apples",
          "name": "Apples",
          "relevance": 90.46,
          "type": "HTML"
        },
        {
          "content": null,
          "id": "252",
          "image": "https://spoonacular.com/cdn/ingredients_100x100/red-wine-vinegar.jpg",
          "link": "https://spoonacular.com/academy/vinegar",
          "name": "Vinegar",
          "relevance": 23.8,
          "type": "HTML"
        }
      ],
      "totalResults": 28
    },
    {
      "name": "Videos",
      "results": [
        {
          "content": "FULL RECIPE HERE: https://tatyanaseverydayfood.com/recipe-items/pineapple-bundt-cake/...",
          "id": "G0HENy59YkE",
          "image": "https://i.ytimg.com/vi/G0HENy59YkE/hqdefault.jpg",
          "link": "https://www.youtube.com/watch?v=G0HENy59YkE",
          "name": "Pineapple Bundt Cake",
          "relevance": 10000,
          "type": "YOUTUBE_VIDEO"
        },
        {
          "content": "RECIPE: Below in description.\nThese Pineapple Shrimp Tacos cook in 5 minutes and assembly is a breeze...",
          "id": "xEENgO5Z5To",
          "image": "https://i.ytimg.com/vi/xEENgO5Z5To/mqdefault.jpg",
          "link": null,
          "name": "Pineapple Shrimp Tacos",
          "relevance": 9999,
          "type": "YOUTUBE_VIDEO"
        }
      ],
      "totalResults": 2
    },
    {
      "name": "Simple Foods",
      "results": [
        {
          "content": null,
          "id": "78541",
          "image": "apple.jpg",
          "link": null,
          "name": "apple",
          "relevance": 10000,
          "type": "HTML"
        },
        {
          "content": null,
          "id": "8782",
          "image": "applesauce.png",
          "link": null,
          "name": "applesauce",
          "relevance": 9999,
          "type": "HTML"
        }
      ],
      "totalResults": 2
    }
  ],
  "totalResults": 5826
}
```

<h3 id="search-all-food-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="search-all-food-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|limit|integer|true|none|none|
|offset|integer|true|none|none|
|query|string|true|none|none|
|searchResults|[object]|true|none|none|
|» name|string|true|none|none|
|» results|[object]|false|none|none|
|» » content|string \| null|true|none|none|
|» » id|string|true|none|none|
|» » image|string \| null|true|none|none|
|» » link|string \| null|true|none|none|
|» » name|string|true|none|none|
|» » relevance|number|true|none|none|
|» » type|string|true|none|none|
|» totalResults|integer|true|none|none|
|totalResults|integer|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyScheme
</aside>

## Search Site Content

<a id="opIdsearchSiteContent"></a>

> Code samples

```bash
curl 'https://example.com/food/site/search?query=past' \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}"
```

`GET /food/site/search`

Search spoonacular's site content. You'll be able to find everything that you could also find using the search suggestions on spoonacular.com. This is a suggest API so you can send partial strings as queries.

<a href="https://spoonacular.com/food-api/docs#Search-Site-Content">Read entire docs</a>

<h3 id="search-site-content-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|query|query|string|true|The query to search for. You can also use partial queries such as "spagh" to already find spaghetti recipes, articles, grocery products, and other content.|

> Example responses

> 200 Response

```json
{
  "Articles": [
    {
      "dataPoints": [],
      "image": "https://spoonacular.com/application/frontend/images/academy/vietnamese-cuisine.jpg",
      "link": "https://spoonacular.com/academy/vietnamese",
      "name": "Traditional Vietnamese Recipes"
    },
    {
      "dataPoints": [],
      "image": "https://spoonacular.com/application/frontend/images/academy/thai-cuisine.jpg",
      "link": "https://spoonacular.com/academy/thai",
      "name": "Authentic Thai Recipes"
    },
    {
      "dataPoints": [],
      "image": "https://spoonacular.com/application/frontend/images/academy/korean-food.jpg",
      "link": "https://spoonacular.com/academy/korean",
      "name": "Typical Korean Recipes"
    }
  ],
  "Grocery Products": [
    {
      "dataPoints": [
        {
          "key": "Calories",
          "value": "30 Calories"
        },
        {
          "key": "Protein",
          "value": "2g Protein"
        },
        {
          "key": "Fat",
          "value": "0.0g Total Fat"
        },
        {
          "key": "Carbs",
          "value": "6g Carbs"
        }
      ],
      "image": "https://spoonacular.com/productImages/218909-312x231.jpg",
      "link": "https://spoonacular.com/products/vine-ripe-tomato-paste-218909",
      "name": "Vine-ripe Tomato Paste"
    },
    {
      "dataPoints": [
        {
          "key": "Calories",
          "value": "30 Calories"
        },
        {
          "key": "Protein",
          "value": "2g Protein"
        },
        {
          "key": "Fat",
          "value": "0.0g Total Fat"
        },
        {
          "key": "Carbs",
          "value": "6g Carbs"
        }
      ],
      "image": "https://spoonacular.com/productImages/178883-312x231.jpg",
      "link": "https://spoonacular.com/products/contadina-tomato-paste-178883",
      "name": "Contadina Tomato Paste"
    },
    {
      "dataPoints": [
        {
          "key": "Calories",
          "value": "30 Calories"
        },
        {
          "key": "Protein",
          "value": "2g Protein"
        },
        {
          "key": "Fat",
          "value": "0.0g Total Fat"
        },
        {
          "key": "Carbs",
          "value": "6g Carbs"
        }
      ],
      "image": "https://spoonacular.com/productImages/137031-312x231.jpg",
      "link": "https://spoonacular.com/products/cento-tomato-paste-137031",
      "name": "Cento Tomato Paste"
    }
  ],
  "Menu Items": [
    {
      "dataPoints": [
        {
          "key": "Calories",
          "value": "230 Calories"
        },
        {
          "key": "Protein",
          "value": "1g Protein"
        },
        {
          "key": "Fat",
          "value": "15g Total Fat"
        },
        {
          "key": "Carbs",
          "value": "23g Carbs"
        }
      ],
      "image": "https://spoonacular.com/menuItemImages/stir-fry.jpg",
      "link": "https://spoonacular.com/menu-items/thai-express-stir-fry-chilli-paste-401670",
      "name": "Thai Express Stir-Fry, Chilli Paste"
    }
  ],
  "Recipes": [
    {
      "dataPoints": [
        {
          "key": "Cost",
          "value": "$10.51 per serving"
        },
        {
          "key": "Calories",
          "value": "400 Calories"
        },
        {
          "key": "Protein",
          "value": "9g Protein"
        },
        {
          "key": "Fat",
          "value": "32g Total Fat"
        },
        {
          "key": "Carbs",
          "value": "26g Carbs"
        }
      ],
      "image": "https://webknox.com/recipeImages/224844-556x370.jpg",
      "link": "https://spoonacular.com/recipes/chermoula-paste-224844",
      "name": "Chermoula Paste"
    },
    {
      "dataPoints": [
        {
          "key": "Cost",
          "value": "$8.37 per serving"
        },
        {
          "key": "Calories",
          "value": "3560 Calories"
        },
        {
          "key": "Protein",
          "value": "119g Protein"
        },
        {
          "key": "Fat",
          "value": "319g Total Fat"
        },
        {
          "key": "Carbs",
          "value": "54g Carbs"
        }
      ],
      "image": "https://webknox.com/recipeImages/146847-556x370.jpg",
      "link": "https://spoonacular.com/recipes/lulu-paste-146847",
      "name": "Lulu Paste"
    },
    {
      "dataPoints": [
        {
          "key": "Cost",
          "value": "$6.68 per serving"
        },
        {
          "key": "Calories",
          "value": "990 Calories"
        },
        {
          "key": "Protein",
          "value": "53g Protein"
        },
        {
          "key": "Fat",
          "value": "86g Total Fat"
        },
        {
          "key": "Carbs",
          "value": "0.82g Carbs"
        }
      ],
      "image": "https://webknox.com/recipeImages/84670-556x370.jpg",
      "link": "https://spoonacular.com/recipes/steak-paste-84670",
      "name": "Steak Paste"
    }
  ]
}
```

<h3 id="search-site-content-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="search-site-content-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Articles|[object]|true|none|none|
|» dataPoints|[object]|false|none|none|
|» image|string|true|none|none|
|» link|string|true|none|none|
|» name|string|true|none|none|
|Grocery Products|[object]|true|none|none|
|» dataPoints|[object]|false|none|none|
|» » key|string|true|none|none|
|» » value|string|true|none|none|
|» image|string|true|none|none|
|» link|string|true|none|none|
|» name|string|true|none|none|
|Menu Items|[object]|true|none|none|
|» dataPoints|[object]|false|none|none|
|» » key|string|true|none|none|
|» » value|string|true|none|none|
|» image|string|true|none|none|
|» link|string|true|none|none|
|» name|string|true|none|none|
|Recipes|[object]|true|none|none|
|» dataPoints|[object]|false|none|none|
|» » key|string|true|none|none|
|» » value|string|true|none|none|
|» image|string|true|none|none|
|» link|string|true|none|none|
|» name|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyScheme
</aside>

## Random Food Trivia

<a id="opIdgetRandomFoodTrivia"></a>

> Code samples

```bash
curl https://example.com/food/trivia/random \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}"
```

`GET /food/trivia/random`

Returns random food trivia.

<a href="https://spoonacular.com/food-api/docs#Random-Food-Trivia">Read entire docs</a>

> Example responses

> 200 Response

```json
{
  "text": "The red food-coloring carmine used in Skittles and other candies is made from boiled cochineal bugs, a type of beetle."
}
```

<h3 id="random-food-trivia-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="random-food-trivia-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|text|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyScheme
</aside>

## Search Food Videos

<a id="opIdsearchFoodVideos"></a>

> Code samples

```bash
curl https://example.com/food/videos/search \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}"
```

`GET /food/videos/search`

Find recipe and other food related videos.

<a href="https://spoonacular.com/food-api/docs#Search-Food-Videos">Read entire docs</a>

<h3 id="search-food-videos-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|query|query|string|false|The (natural language) search query.|
|type|query|string|false|The type of the recipes. See a full list of supported meal types.|
|cuisine|query|string|false|The cuisine(s) of the recipes. One or more, comma separated. See a full list of supported cuisines.|
|diet|query|string|false|The diet for which the recipes must be suitable. See a full list of supported diets.|
|includeIngredients|query|string|false|A comma-separated list of ingredients that the recipes should contain.|
|excludeIngredients|query|string|false|A comma-separated list of ingredients or ingredient types that the recipes must not contain.|
|minLength|query|number|false|Minimum video length in seconds.|
|maxLength|query|number|false|Maximum video length in seconds.|
|offset|query|integer|false|The number of results to skip (between 0 and 900).|
|number|query|integer|false|The maximum number of items to return (between 1 and 100). Defaults to 10.|

> Example responses

> 200 Response

```json
{
  "totalResults": 172,
  "videos": [
    {
      "length": 370,
      "rating": 0.985984219269103,
      "shortTitle": "8 One-Pot Pastas",
      "thumbnail": "https://i.ytimg.com/vi/YTZGPCCB2FU/mqdefault.jpg",
      "title": "8 One-Pot Pastas",
      "views": 550467,
      "youTubeId": "YTZGPCCB2FU"
    },
    {
      "length": 333,
      "rating": 1,
      "shortTitle": "Macaroni salad",
      "thumbnail": "https://i.ytimg.com/vi/81bn4p8H3Kg/mqdefault.jpg",
      "title": "Macaroni salad - pasta salad recipes - healthy recipe channel - quick tasty recipe - cooking channel",
      "views": 307,
      "youTubeId": "81bn4p8H3Kg"
    }
  ]
}
```

<h3 id="search-food-videos-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="search-food-videos-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|totalResults|integer|true|none|none|
|videos|[object]|true|none|none|
|» length|integer|true|none|none|
|» rating|number|true|none|none|
|» shortTitle|string|true|none|none|
|» thumbnail|string|true|none|none|
|» title|string|true|none|none|
|» views|integer|true|none|none|
|» youTubeId|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyScheme
</aside>

<h1 id="spoonacular-api-products">products</h1>

## Classify Grocery Product

<a id="opIdclassifyGroceryProduct"></a>

> Code samples

```bash
curl https://example.com/food/products/classify \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -d '{
    "plu_code": "",
    "title": "Kroger Vitamin A & D Reduced Fat 2% Milk",
    "upc": ""
  }'
```

`POST /food/products/classify`

This endpoint allows you to match a packaged food to a basic category, e.g. a specific brand of milk to the category milk.

<a href="https://spoonacular.com/food-api/docs#Classify-Grocery-Product">Read entire docs</a>

> Body parameter

```json
{
  "plu_code": "",
  "title": "Kroger Vitamin A & D Reduced Fat 2% Milk",
  "upc": ""
}
```

<h3 id="classify-grocery-product-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|locale|query|string|false|The display name of the returned category, supported is en_US (for American English) and en_GB (for British English).|
|body|body|object|true|none|
|» plu_code|body|string|true|none|
|» title|body|string|true|none|
|» upc|body|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|locale|en_US|
|locale|en_GB|

> Example responses

> 200 Response

```json
{
  "breadcrumbs": [
    "2 percent milk",
    "milk",
    "drink",
    "ingredient"
  ],
  "category": "2 percent milk",
  "cleanTitle": "Kroger Vitamin A & D Reduced Fat 2% Milk",
  "image": "https://spoonacular.com/cdn/ingredients_100x100/milk.png",
  "usdaCode": 1174
}
```

<h3 id="classify-grocery-product-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="classify-grocery-product-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|breadcrumbs|[string]|true|none|none|
|category|string|true|none|none|
|cleanTitle|string|true|none|none|
|image|string|true|none|none|
|usdaCode|integer|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyScheme
</aside>

## Classify Grocery Product Bulk

<a id="opIdclassifyGroceryProductBulk"></a>

> Code samples

```bash
curl https://example.com/food/products/classifyBatch \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -d '[
    {
      "plu_code": "",
      "title": "Kroger Vitamin A & D Reduced Fat 2% Milk",
      "upc": ""
    }
  ]'
```

`POST /food/products/classifyBatch`

Provide a set of product jsons, get back classified products.

<a href="https://spoonacular.com/food-api/docs#Classify-Grocery-Product-Bulk">Read entire docs</a>

> Body parameter

```json
[
  {
    "plu_code": "",
    "title": "Kroger Vitamin A & D Reduced Fat 2% Milk",
    "upc": ""
  }
]
```

<h3 id="classify-grocery-product-bulk-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|locale|query|string|false|The display name of the returned category, supported is en_US (for American English) and en_GB (for British English).|
|body|body|[object]|true|none|
|» plu_code|body|string|true|none|
|» title|body|string|true|none|
|» upc|body|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "breadcrumbs": [
      "2 percent milk",
      "milk",
      "drink",
      "ingredient"
    ],
    "category": "2 percent milk",
    "cleanTitle": "Kroger Vitamin A & D Reduced Fat 2% Milk",
    "image": "https://spoonacular.com/cdn/ingredients_100x100/milk.png",
    "usdaCode": 1174
  }
]
```

<h3 id="classify-grocery-product-bulk-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="classify-grocery-product-bulk-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» breadcrumbs|[string]|true|none|none|
|» category|string|true|none|none|
|» cleanTitle|string|true|none|none|
|» image|string|true|none|none|
|» usdaCode|integer|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyScheme
</aside>

## Search Grocery Products

<a id="opIdsearchGroceryProducts"></a>

> Code samples

```bash
curl https://example.com/food/products/search \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}"
```

`GET /food/products/search`

Search packaged food products, such as frozen pizza or Greek yogurt.

<a href="https://spoonacular.com/food-api/docs#Search-Grocery-Products">Read entire docs</a>

<h3 id="search-grocery-products-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|query|query|string|false|The (natural language) search query.|
|minCalories|query|number|false|The minimum amount of calories the product must have.|
|maxCalories|query|number|false|The maximum amount of calories the product can have.|
|minCarbs|query|number|false|The minimum amount of carbohydrates in grams the product must have.|
|maxCarbs|query|number|false|The maximum amount of carbohydrates in grams the product can have.|
|minProtein|query|number|false|The minimum amount of protein in grams the product must have.|
|maxProtein|query|number|false|The maximum amount of protein in grams the product can have.|
|minFat|query|number|false|The minimum amount of fat in grams the product must have.|
|maxFat|query|number|false|The maximum amount of fat in grams the product can have.|
|addProductInformation|query|boolean|false|If set to true, you get more information about the products returned.|
|offset|query|integer|false|The number of results to skip (between 0 and 900).|
|number|query|integer|false|The maximum number of items to return (between 1 and 100). Defaults to 10.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|addProductInformation|false|
|addProductInformation|true|

> Example responses

> 200 Response

```json
{
  "number": 2,
  "offset": 0,
  "products": [
    {
      "id": 192386,
      "imageType": "jpg",
      "title": "Pizza Buddy: Frozen Pizza Dough, 16 Oz"
    },
    {
      "id": 27693,
      "imageType": "jpg",
      "title": "Uno Pizza"
    }
  ],
  "totalProducts": 1258,
  "type": "product"
}
```

<h3 id="search-grocery-products-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="search-grocery-products-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|number|integer|true|none|none|
|offset|integer|true|none|none|
|products|[object]|true|none|none|
|» id|integer|true|none|none|
|» imageType|string|true|none|none|
|» title|string|true|none|none|
|totalProducts|integer|true|none|none|
|type|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyScheme
</aside>

## Autocomplete Product Search

<a id="opIdautocompleteProductSearch"></a>

> Code samples

```bash
curl 'https://example.com/food/products/suggest?query=chicke' \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}"
```

`GET /food/products/suggest`

Generate suggestions for grocery products based on a (partial) query. The matches will be found by looking in the title only.

<a href="https://spoonacular.com/food-api/docs#Autocomplete-Product-Search">Read entire docs</a>

<h3 id="autocomplete-product-search-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|query|query|string|true|The (partial) search query.|
|number|query|integer|false|The number of results to return (between 1 and 25).|

> Example responses

> 200 Response

```json
{
  "results": [
    {
      "id": 208698,
      "title": "buddig premium deli chicken breast - rotisserie flavored"
    },
    {
      "id": 41291,
      "title": "tyson all natural chicken breasts tenderloins"
    }
  ]
}
```

<h3 id="autocomplete-product-search-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="autocomplete-product-search-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[object]|true|none|none|
|» id|integer|true|none|none|
|» title|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyScheme
</aside>

## Search Grocery Products by UPC

<a id="opIdsearchGroceryProductsByUPC"></a>

> Code samples

```bash
curl https://example.com/food/products/upc/41631000564 \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}"
```

`GET /food/products/upc/{upc}`

Get information about a packaged food using its UPC.

<a href="https://spoonacular.com/food-api/docs#Search-Grocery-Products-by-UPC">Read entire docs</a>

<h3 id="search-grocery-products-by-upc-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|upc|path|number|true|The product's UPC.|

> Example responses

> 200 Response

```json
{
  "badges": [
    "egg_free",
    "wheat_free",
    "grain_free",
    "peanut_free",
    "primal",
    "vegetarian",
    "nut_free",
    "vegan",
    "pescetarian",
    "dairy_free",
    "paleo",
    "gluten_free"
  ],
  "breadcrumbs": [
    "flour"
  ],
  "generatedText": "Swan Flour: This product is an awesome fit if you are searching for a healthy flour. This product has 1 ingredient (in our experience: the fewer ingredients, the better!) This product contains no ingredients that some research suggests you should avoid. One serving of this product provides 30 calories, 0g grams of fat, 0g grams of protein, and 8g grams of carbs.",
  "id": 30004,
  "imageType": "jpg",
  "importantBadges": [
    "gluten_free",
    "paleo",
    "primal",
    "wheat_free",
    "grain_free"
  ],
  "ingredientCount": 1,
  "ingredientList": "Potato Starch",
  "ingredients": [
    {
      "description": null,
      "name": "",
      "safety_level": null
    },
    {
      "description": null,
      "name": "starch",
      "safety_level": null
    },
    {
      "description": null,
      "name": "potato starch",
      "safety_level": null
    }
  ],
  "likes": 0,
  "nutrition": {
    "caloricBreakdown": {
      "percentCarbs": 57.78,
      "percentFat": 20,
      "percentProtein": 22.22
    },
    "nutrients": [
      {
        "amount": 0,
        "name": "Fat",
        "percentOfDailyNeeds": 0,
        "unit": "g"
      },
      {
        "amount": 0,
        "name": "Protein",
        "percentOfDailyNeeds": 0,
        "unit": "g"
      },
      {
        "amount": 30,
        "name": "Calories",
        "percentOfDailyNeeds": 10,
        "unit": "cal"
      },
      {
        "amount": 8,
        "name": "Carbohydrates",
        "percentOfDailyNeeds": 9.45,
        "unit": "g"
      }
    ]
  },
  "price": 0,
  "servings": {
    "number": 34,
    "size": 1,
    "unit": "tbsp"
  },
  "spoonacularScore": 99,
  "title": "Swan Flour"
}
```

<h3 id="search-grocery-products-by-upc-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="search-grocery-products-by-upc-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|badges|[string]|true|none|none|
|breadcrumbs|[string]|true|none|none|
|generatedText|string|true|none|none|
|id|integer|true|none|none|
|imageType|string|true|none|none|
|importantBadges|[string]|true|none|none|
|ingredientCount|integer|false|none|none|
|ingredientList|string|true|none|none|
|ingredients|[object]|true|none|none|
|» description|object|false|none|none|
|» name|string|true|none|none|
|» safety_level|object|false|none|none|
|likes|number|true|none|none|
|nutrition|object|true|none|none|
|» caloricBreakdown|object|true|none|none|
|» » percentCarbs|number|true|none|none|
|» » percentFat|number|true|none|none|
|» » percentProtein|number|true|none|none|
|» nutrients|[object]|true|none|none|
|» » amount|number|true|none|none|
|» » name|string|true|none|none|
|» » percentOfDailyNeeds|number|true|none|none|
|» » unit|string|true|none|none|
|price|number|true|none|none|
|servings|object|true|none|none|
|» number|number|true|none|none|
|» size|number|true|none|none|
|» unit|string|true|none|none|
|spoonacularScore|number|true|none|none|
|title|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyScheme
</aside>

## Get Comparable Products

<a id="opIdgetComparableProducts"></a>

> Code samples

```bash
curl https://example.com/food/products/upc/33698816271/comparable \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}"
```

`GET /food/products/upc/{upc}/comparable`

Find comparable products to the given one.

<a href="https://spoonacular.com/food-api/docs#Get-Comparable-Products">Read entire docs</a>

<h3 id="get-comparable-products-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|upc|path|number|true|The UPC of the product for which you want to find comparable products.|

> Example responses

> 200 Response

```json
{
  "comparableProducts": {
    "calories": [],
    "likes": [],
    "price": [],
    "protein": [
      {
        "difference": 3,
        "id": 11797,
        "image": "https://webknox.com/productImages/11797.jpg",
        "title": "Casa Visco Capers"
      },
      {
        "difference": 1,
        "id": 90962,
        "image": "https://webknox.com/productImages/90962.jpg",
        "title": "Colavita Capers"
      },
      {
        "difference": 1,
        "id": 88139,
        "image": "https://webknox.com/productImages/88139.jpg",
        "title": "Mezzetta Capers"
      },
      {
        "difference": 1,
        "id": 152832,
        "image": "https://webknox.com/productImages/152832.jpg",
        "title": "Victoria Imported Capers"
      }
    ],
    "spoonacularScore": [
      {
        "difference": 7,
        "id": 125354,
        "image": "https://webknox.com/productImages/125354.jpg",
        "title": "DeLallo Capers"
      },
      {
        "difference": 7,
        "id": 118361,
        "image": "https://webknox.com/productImages/118361.jpg",
        "title": "Haddon House Non Pareil Capers"
      },
      {
        "difference": 7,
        "id": 113686,
        "image": "https://webknox.com/productImages/113686.jpg",
        "title": "Dell Alpe Capers"
      },
      {
        "difference": 7,
        "id": 112078,
        "image": "https://webknox.com/productImages/112078.jpg",
        "title": "Paesana Imported Capers"
      }
    ],
    "sugar": []
  }
}
```

<h3 id="get-comparable-products-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="get-comparable-products-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|comparableProducts|object|true|none|none|
|» calories|[object]|true|none|none|
|» likes|[object]|true|none|none|
|» price|[object]|true|none|none|
|» protein|[object]|true|none|none|
|» » difference|number|true|none|none|
|» » id|integer|true|none|none|
|» » image|string|true|none|none|
|» » title|string|true|none|none|
|» spoonacularScore|[object]|true|none|none|
|» » difference|number|true|none|none|
|» » id|integer|true|none|none|
|» » image|string|true|none|none|
|» » title|string|true|none|none|
|» sugar|[object]|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyScheme
</aside>

## Get Product Information

<a id="opIdgetProductInformation"></a>

> Code samples

```bash
curl https://example.com/food/products/22347 \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}"
```

`GET /food/products/{id}`

Use a product id to get full information about a product, such as ingredients, nutrition, etc. The nutritional information is per serving.

<a href="https://spoonacular.com/food-api/docs#Get-Product-Information">Read entire docs</a>

<h3 id="get-product-information-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|number|true|The id of the packaged food.|

> Example responses

> 200 Response

```json
{
  "aisle": "Sweet Snacks",
  "badges": [
    "msg_free",
    "no_artificial_colors",
    "no_artificial_flavors",
    "no_artificial_ingredients",
    "gluten_free"
  ],
  "breadcrumbs": [
    "bars"
  ],
  "generatedText": null,
  "id": 22347,
  "imageType": "jpg",
  "importantBadges": [
    "no_artificial_flavors",
    "no_artificial_colors",
    "no_artificial_ingredients",
    "gluten_free",
    "msg_free"
  ],
  "ingredientCount": 32,
  "ingredientList": "Snickers Brand Almond Bar: Milk Chocolate (Sugar, Cocoa Butter, Chocolate, Skim Milk, Lactose, Milkfat, Soy Lecithin, Artificial Flavor), Corn Syrup, Almonds, Sugar, Milkfat, Skim Milk, Less than 2% - Lactose, Salt, Hydrogenated Palm Kernel Oil and/or Palm Oil, Egg Whites, Chocolate, Artificial Flavor. Snickers Brand: Milk Chocolate (Sugar, Cocoa Butter, Chocolate, Skim Milk, Lactose, Milkfat, Soy Lecithin, Artificial Flavor), Peanuts, Corn Syrup, Sugar, Milkfat, Skim Milk, Partially Hydrogenated Soybean Oil, Lactose, Salt, Egg Whites, Chocolate, Artificial Flavor. Snickers Brand Peanut Butter Squared Bars: Milk Chocolate (Sugar, Cocoa Butter, Chocolate, Skim Milk, Lactose, Milkfat, Soy Lecithin, Artificial Flavor), Peanut Butter (Peanuts, Partially Hydrogenated Soybean Oil), Peanuts, Sugar, Corn Syrup, Vegetable Oil (Hydrogenated Palm Kernel Oil, Palm Oil, Rapeseed Oil and Cottonseed Oil and/or Partially Hydrogenated Palm Kernel Oil), Lactose, Corn Syrup Solids, Invert Sugar, Less than 2% - Glycerin, Dextrose, Skim Milk, Salt, Calcium Carbonate, Partially Hydrogenated Soybean Oil, Egg Whites, Artificial Flavor, TBHQ to Maintain Freshness",
  "ingredients": [
    {
      "description": null,
      "name": "emulsifier",
      "safety_level": null
    },
    {
      "description": null,
      "name": "added sugar",
      "safety_level": null
    },
    {
      "description": null,
      "name": "sweetener",
      "safety_level": null
    },
    {
      "description": null,
      "name": "cooking fat",
      "safety_level": null
    },
    {
      "description": null,
      "name": "cooking oil",
      "safety_level": null
    },
    {
      "description": null,
      "name": "lecithin",
      "safety_level": null
    },
    {
      "description": null,
      "name": "yeast",
      "safety_level": null
    },
    {
      "description": null,
      "name": "menu item type",
      "safety_level": null
    },
    {
      "description": null,
      "name": "nuts",
      "safety_level": null
    },
    {
      "description": null,
      "name": "partially hydrogenated vegetable oil",
      "safety_level": "low"
    },
    {
      "description": "Unlike partially hydrogenated oils, fully hydrogenated oils do not contain trans fat and thus are currently considered safer.",
      "name": "hydrogenated vegetable oil",
      "safety_level": "high"
    },
    {
      "description": null,
      "name": "calcium",
      "safety_level": null
    },
    {
      "description": null,
      "name": "nut butter",
      "safety_level": null
    },
    {
      "description": null,
      "name": "legumes",
      "safety_level": null
    },
    {
      "description": null,
      "name": "refined sweetener",
      "safety_level": null
    },
    {
      "description": null,
      "name": "non food item",
      "safety_level": null
    },
    {
      "description": null,
      "name": "tree nuts",
      "safety_level": null
    },
    {
      "description": null,
      "name": "chocolate",
      "safety_level": null
    },
    {
      "description": null,
      "name": "sugar",
      "safety_level": null
    },
    {
      "description": null,
      "name": "snack",
      "safety_level": null
    },
    {
      "description": null,
      "name": "corn syrup",
      "safety_level": null
    },
    {
      "description": null,
      "name": "drink",
      "safety_level": null
    },
    {
      "description": null,
      "name": "milk",
      "safety_level": null
    },
    {
      "description": null,
      "name": "spread",
      "safety_level": null
    },
    {
      "description": null,
      "name": "vegetable oil",
      "safety_level": null
    },
    {
      "description": null,
      "name": "yeast nutrient",
      "safety_level": null
    },
    {
      "description": null,
      "name": "palm kernel oil",
      "safety_level": null
    },
    {
      "description": null,
      "name": "artificial ingredient",
      "safety_level": null
    },
    {
      "description": null,
      "name": "stabilizer",
      "safety_level": null
    },
    {
      "description": null,
      "name": "additive",
      "safety_level": null
    },
    {
      "description": null,
      "name": "nutrient",
      "safety_level": null
    },
    {
      "description": null,
      "name": "soybean oil",
      "safety_level": null
    },
    {
      "description": null,
      "name": "supplement",
      "safety_level": null
    },
    {
      "description": null,
      "name": "mineral",
      "safety_level": null
    },
    {
      "description": null,
      "name": "artificial flavor",
      "safety_level": "medium"
    },
    {
      "description": null,
      "name": "skim milk",
      "safety_level": null
    },
    {
      "description": null,
      "name": "peanuts",
      "safety_level": null
    },
    {
      "description": null,
      "name": "corn syrup solids",
      "safety_level": "medium"
    },
    {
      "description": "Unlike partially hydrogenated oils, fully hydrogenated oils do not contain trans fat and thus are currently considered safer.",
      "name": "hydrogenated palm kernel oil",
      "safety_level": "high"
    },
    {
      "description": null,
      "name": "cottonseed oil",
      "safety_level": null
    },
    {
      "description": null,
      "name": "milkfat",
      "safety_level": "high"
    },
    {
      "description": null,
      "name": "lactose",
      "safety_level": null
    },
    {
      "description": null,
      "name": "corn syrup",
      "safety_level": null
    },
    {
      "description": null,
      "name": "cocoa butter",
      "safety_level": "high"
    },
    {
      "description": null,
      "name": "tbhq to maintain freshness",
      "safety_level": null
    },
    {
      "description": null,
      "name": "peanut butter",
      "safety_level": null
    },
    {
      "description": null,
      "name": "egg whites",
      "safety_level": null
    },
    {
      "description": null,
      "name": "sugar",
      "safety_level": null
    },
    {
      "description": null,
      "name": "milk chocolate",
      "safety_level": null
    },
    {
      "description": null,
      "name": "palm oil",
      "safety_level": null
    },
    {
      "description": null,
      "name": "artificial flavor",
      "safety_level": null
    },
    {
      "description": null,
      "name": "salt",
      "safety_level": null
    },
    {
      "description": null,
      "name": "almonds",
      "safety_level": null
    },
    {
      "description": null,
      "name": "skim milk less than 2% - lactose",
      "safety_level": null
    },
    {
      "description": null,
      "name": "vegetable oil",
      "safety_level": null
    },
    {
      "description": null,
      "name": "less than 2% - glycerin",
      "safety_level": null
    },
    {
      "description": null,
      "name": "dextrose",
      "safety_level": "high"
    },
    {
      "description": "Soy lecithin is not a concern for most people allergic to soy.",
      "name": "soy lecithin",
      "safety_level": "high"
    },
    {
      "description": null,
      "name": "invert sugar",
      "safety_level": "high"
    },
    {
      "description": null,
      "name": "chocolate",
      "safety_level": null
    },
    {
      "description": null,
      "name": "rapeseed oil",
      "safety_level": null
    },
    {
      "description": null,
      "name": "partially hydrogenated soybean oil",
      "safety_level": "low"
    },
    {
      "description": null,
      "name": "calcium carbonate",
      "safety_level": "high"
    },
    {
      "description": null,
      "name": "partially hydrogenated palm kernel oil",
      "safety_level": "low"
    },
    {
      "description": null,
      "name": "artificial flavor.snickers brand",
      "safety_level": null
    },
    {
      "description": null,
      "name": "snickers brand almond bar",
      "safety_level": null
    }
  ],
  "likes": 0,
  "nutrition": {
    "caloricBreakdown": {
      "percentCarbs": 57.78,
      "percentFat": 20,
      "percentProtein": 22.22
    },
    "nutrients": [
      {
        "amount": 4,
        "name": "Fat",
        "percentOfDailyNeeds": 6.15,
        "unit": "g"
      },
      {
        "amount": 10,
        "name": "Protein",
        "percentOfDailyNeeds": 20,
        "unit": "g"
      },
      {
        "amount": 200,
        "name": "Calories",
        "percentOfDailyNeeds": 10,
        "unit": "cal"
      },
      {
        "amount": 26,
        "name": "Carbohydrates",
        "percentOfDailyNeeds": 9.45,
        "unit": "g"
      }
    ]
  },
  "price": 324,
  "servings": {
    "number": 8,
    "size": 4,
    "unit": "pieces"
  },
  "spoonacularScore": 0,
  "title": "SNICKERS Minis Size Chocolate Candy Bars Variety Mix 10.5-oz. Bag"
}
```

<h3 id="get-product-information-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="get-product-information-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|aisle|string|true|none|none|
|badges|[string]|true|none|none|
|breadcrumbs|[string]|true|none|none|
|generatedText|object|false|none|none|
|id|integer|true|none|none|
|imageType|string|true|none|none|
|importantBadges|[string]|true|none|none|
|ingredientCount|integer|true|none|none|
|ingredientList|string|true|none|none|
|ingredients|[object]|true|none|none|
|» description|object|false|none|none|
|» name|string|true|none|none|
|» safety_level|object|false|none|none|
|likes|number|true|none|none|
|nutrition|object|true|none|none|
|» caloricBreakdown|object|true|none|none|
|» » percentCarbs|number|true|none|none|
|» » percentFat|number|true|none|none|
|» » percentProtein|number|true|none|none|
|» nutrients|[object]|true|none|none|
|» » amount|number|true|none|none|
|» » name|string|true|none|none|
|» » percentOfDailyNeeds|number|true|none|none|
|» » unit|string|true|none|none|
|price|number|true|none|none|
|servings|object|true|none|none|
|» number|number|true|none|none|
|» size|number|true|none|none|
|» unit|string|true|none|none|
|spoonacularScore|number|true|none|none|
|title|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyScheme
</aside>

## Product Nutrition Label Widget

<a id="opIdproductNutritionLabelWidget"></a>

> Code samples

```bash
curl https://example.com/food/products/22347/nutritionLabel \
  -H "x-api-key: ${API_KEY}"
```

`GET /food/products/{id}/nutritionLabel`

Get a product's nutrition label as an HTML widget.

<a href="https://spoonacular.com/food-api/docs#Product-Nutrition-Label-Widget">Read entire docs</a>

<h3 id="product-nutrition-label-widget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|number|true|The product id.|
|defaultCss|query|boolean|false|Whether the default CSS should be added to the response.|
|showOptionalNutrients|query|boolean|false|Whether to show optional nutrients.|
|showZeroValues|query|boolean|false|Whether to show zero values.|
|showIngredients|query|boolean|false|Whether to show a list of ingredients.|

<h3 id="product-nutrition-label-widget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyScheme
</aside>

## Product Nutrition Label Image

<a id="opIdproductNutritionLabelImage"></a>

> Code samples

```bash
curl https://example.com/food/products/22347/nutritionLabel.png \
  -H "x-api-key: ${API_KEY}"
```

`GET /food/products/{id}/nutritionLabel.png`

Get a product's nutrition label as an image.

<a href="https://spoonacular.com/food-api/docs#Product-Nutrition-Label-Image">Read entire docs</a>

<h3 id="product-nutrition-label-image-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|number|true|The product id.|
|showOptionalNutrients|query|boolean|false|Whether to show optional nutrients.|
|showZeroValues|query|boolean|false|Whether to show zero values.|
|showIngredients|query|boolean|false|Whether to show a list of ingredients.|

<h3 id="product-nutrition-label-image-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyScheme
</aside>

## Product Nutrition by ID Widget

<a id="opIdvisualizeProductNutritionByID"></a>

> Code samples

```bash
curl https://example.com/food/products/7657/nutritionWidget \
  -H "x-api-key: ${API_KEY}"
```

`GET /food/products/{id}/nutritionWidget`

Visualize a product's nutritional information as HTML including CSS.

<a href="https://spoonacular.com/food-api/docs#Product-Nutrition-by-ID-Widget">Read entire docs</a>

<h3 id="product-nutrition-by-id-widget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|number|true|The id of the product.|
|defaultCss|query|boolean|false|Whether the default CSS should be added to the response.|
|Accept|header|string|false|Accept header.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Accept|application/json|
|Accept|text/html|
|Accept|media/*|

> Example responses

> 200 Response

```text
string
```

<h3 id="product-nutrition-by-id-widget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyScheme
</aside>

## Product Nutrition by ID Image

<a id="opIdproductNutritionByIDImage"></a>

> Code samples

```bash
curl https://example.com/food/products/7657/nutritionWidget.png \
  -H "x-api-key: ${API_KEY}"
```

`GET /food/products/{id}/nutritionWidget.png`

Visualize a product's nutritional information as an image.

<a href="https://spoonacular.com/food-api/docs#Product-Nutrition-by-ID-Image">Read entire docs</a>

<h3 id="product-nutrition-by-id-image-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|number|true|The id of the product.|

<h3 id="product-nutrition-by-id-image-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyScheme
</aside>

<h1 id="spoonacular-api-recipes">recipes</h1>

## Compute Glycemic Load

<a id="opIdcomputeGlycemicLoad"></a>

> Code samples

```bash
curl https://example.com/food/ingredients/glycemicLoad \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -d '{
    "ingredients": [
      "1 kiwi",
      "2 cups rice",
      "2 glasses of water"
    ]
  }'
```

`POST /food/ingredients/glycemicLoad`

Retrieve the glycemic index for a list of ingredients and compute the individual and total glycemic load.

<a href="https://spoonacular.com/food-api/docs#Compute-Glycemic-Load">Read entire docs</a>

> Body parameter

```json
{
  "ingredients": [
    "1 kiwi",
    "2 cups rice",
    "2 glasses of water"
  ]
}
```

<h3 id="compute-glycemic-load-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|language|query|string|false|The language of the input. Either 'en' or 'de'.|
|body|body|object|true|none|
|» ingredients|body|[string]|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|language|en|
|language|de|

> Example responses

> 200 Response

```json
{
  "ingredients": [
    {
      "glycemicIndex": 52.67,
      "glycemicLoad": 5.59,
      "id": 9148,
      "original": "1 kiwi"
    },
    {
      "glycemicIndex": 61.19,
      "glycemicLoad": 178.05,
      "id": 20444,
      "original": "2 cups rice"
    },
    {
      "glycemicIndex": 0,
      "glycemicLoad": 0,
      "id": 14412,
      "original": "2 glasses of water"
    }
  ],
  "totalGlycemicLoad": 183.64
}
```

<h3 id="compute-glycemic-load-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="compute-glycemic-load-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ingredients|[object]|true|none|none|
|» glycemicIndex|number|true|none|none|
|» glycemicLoad|number|true|none|none|
|» id|integer|true|none|none|
|» original|string|true|none|none|
|totalGlycemicLoad|number|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyScheme
</aside>

## Analyze Recipe Instructions

<a id="opIdanalyzeRecipeInstructions"></a>

> Code samples

```bash
curl https://example.com/recipes/analyzeInstructions \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}"
```

`POST /recipes/analyzeInstructions`

This endpoint allows you to break down instructions into atomic steps. Furthermore, each step will contain the ingredients and equipment required. Additionally, all ingredients and equipment from the recipe's instructions will be extracted independently of the step they're used in.

<a href="https://spoonacular.com/food-api/docs#Analyze-Recipe-Instructions">Read entire docs</a>

> Body parameter

```yaml
"instructions=Put the garlic in a pan and then add the onion. Add some salt and oregano."
```

<h3 id="analyze-recipe-instructions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|false|The content type.|
|body|body|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Content-Type|application/x-www-form-urlencoded|
|Content-Type|application/json|
|Content-Type|multipart/form-data|

> Example responses

> 200 Response

```json
{
  "equipment": [
    {
      "id": 404645,
      "name": "frying pan"
    }
  ],
  "ingredients": [
    {
      "id": 2027,
      "name": "oregano"
    },
    {
      "id": 11215,
      "name": "garlic"
    },
    {
      "id": 11282,
      "name": "onion"
    },
    {
      "id": 2047,
      "name": "salt"
    }
  ],
  "parsedInstructions": [
    {
      "name": "",
      "steps": [
        {
          "equipment": [
            {
              "id": 404645,
              "image": "pan.png",
              "localizedName": "frying pan",
              "name": "frying pan"
            }
          ],
          "ingredients": [
            {
              "id": 11215,
              "image": "garlic.png",
              "localizedName": "garlic",
              "name": "garlic"
            },
            {
              "id": 11282,
              "image": "brown-onion.png",
              "localizedName": "onion",
              "name": "onion"
            }
          ],
          "number": 1,
          "step": "Put the garlic in a pan and then add the onion."
        },
        {
          "equipment": [],
          "ingredients": [
            {
              "id": 2027,
              "image": "oregano.jpg",
              "localizedName": "oregano",
              "name": "oregano"
            },
            {
              "id": 2047,
              "image": "salt.jpg",
              "localizedName": "salt",
              "name": "salt"
            }
          ],
          "number": 2,
          "step": "Add some salt and oregano."
        }
      ]
    }
  ]
}
```

<h3 id="analyze-recipe-instructions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="analyze-recipe-instructions-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|equipment|[object]|true|none|none|
|» id|number|true|none|none|
|» name|string|true|none|none|
|ingredients|[object]|true|none|none|
|» id|number|true|none|none|
|» name|string|true|none|none|
|parsedInstructions|[object]|true|none|none|
|» name|string|true|none|none|
|» steps|[object]|false|none|none|
|» » equipment|[object]|false|none|none|
|» » » id|number|true|none|none|
|» » » image|string|true|none|none|
|» » » localizedName|string|true|none|none|
|» » » name|string|true|none|none|
|» » ingredients|[object]|false|none|none|
|» » » id|number|true|none|none|
|» » » image|string|true|none|none|
|» » » localizedName|string|true|none|none|
|» » » name|string|true|none|none|
|» » number|number|true|none|none|
|» » step|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyScheme
</aside>

## Autocomplete Recipe Search

<a id="opIdautocompleteRecipeSearch"></a>

> Code samples

```bash
curl https://example.com/recipes/autocomplete \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}"
```

`GET /recipes/autocomplete`

Autocomplete a partial input to suggest possible recipe names.

<a href="https://spoonacular.com/food-api/docs#Autocomplete-Recipe-Search">Read entire docs</a>

<h3 id="autocomplete-recipe-search-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|query|query|string|false|The (natural language) search query.|
|number|query|integer|false|The maximum number of items to return (between 1 and 100). Defaults to 10.|

> Example responses

> 200 Response

```json
[
  {
    "id": 296687,
    "imageType": "jpg",
    "title": "chicken"
  },
  {
    "id": 42569,
    "imageType": "jpg",
    "title": "chicken bbq"
  },
  {
    "id": 83890,
    "imageType": "jpg",
    "title": "chicken blt"
  },
  {
    "id": 737543,
    "imageType": "jpg",
    "title": "chicken pie"
  }
]
```

<h3 id="autocomplete-recipe-search-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="autocomplete-recipe-search-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» id|integer|true|none|none|
|» imageType|string|true|none|none|
|» title|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyScheme
</aside>

## Search Recipes

<a id="opIdsearchRecipes"></a>

> Code samples

```bash
curl https://example.com/recipes/complexSearch \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}"
```

`GET /recipes/complexSearch`

Search through hundreds of thousands of recipes using advanced filtering and ranking. NOTE: This method combines searching by query, by ingredients, and by nutrients into one endpoint.

<a href="https://spoonacular.com/food-api/docs#Search-Recipes">Read entire docs</a>

<h3 id="search-recipes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|query|query|string|false|The (natural language) search query.|
|cuisine|query|string|false|The cuisine(s) of the recipes. One or more, comma separated (will be interpreted as 'OR'). See a full list of supported cuisines.|
|excludeCuisine|query|string|false|The cuisine(s) the recipes must not match. One or more, comma separated (will be interpreted as 'AND'). See a full list of supported cuisines.|
|diet|query|string|false|The diet for which the recipes must be suitable. See a full list of supported diets.|
|intolerances|query|string|false|A comma-separated list of intolerances. All recipes returned must not contain ingredients that are not suitable for people with the intolerances entered. See a full list of supported intolerances.|
|equipment|query|string|false|The equipment required. Multiple values will be interpreted as 'or'. For example, value could be "blender, frying pan, bowl".|
|includeIngredients|query|string|false|A comma-separated list of ingredients that should/must be used in the recipes.|
|excludeIngredients|query|string|false|A comma-separated list of ingredients or ingredient types that the recipes must not contain.|
|type|query|string|false|The type of recipe. See a full list of supported meal types.|
|instructionsRequired|query|boolean|false|Whether the recipes must have instructions.|
|fillIngredients|query|boolean|false|Add information about the ingredients and whether they are used or missing in relation to the query.|
|addRecipeInformation|query|boolean|false|If set to true, you get more information about the recipes returned.|
|addRecipeNutrition|query|boolean|false|If set to true, you get nutritional information about each recipes returned.|
|author|query|string|false|The username of the recipe author.|
|tags|query|string|false|The tags (can be diets, meal types, cuisines, or intolerances) that the recipe must have.|
|recipeBoxId|query|number|false|The id of the recipe box to which the search should be limited to.|
|titleMatch|query|string|false|Enter text that must be found in the title of the recipes.|
|maxReadyTime|query|number|false|The maximum time in minutes it should take to prepare and cook the recipe.|
|ignorePantry|query|boolean|false|Whether to ignore typical pantry items, such as water, salt, flour, etc.|
|sort|query|string|false|The strategy to sort recipes by. See a full list of supported sorting options.|
|sortDirection|query|string|false|The direction in which to sort. Must be either 'asc' (ascending) or 'desc' (descending).|
|minCarbs|query|number|false|The minimum amount of carbohydrates in grams the recipe must have.|
|maxCarbs|query|number|false|The maximum amount of carbohydrates in grams the recipe can have.|
|minProtein|query|number|false|The minimum amount of protein in grams the recipe must have.|
|maxProtein|query|number|false|The maximum amount of protein in grams the recipe can have.|
|minCalories|query|number|false|The minimum amount of calories the recipe must have.|
|maxCalories|query|number|false|The maximum amount of calories the recipe can have.|
|minFat|query|number|false|The minimum amount of fat in grams the recipe must have.|
|maxFat|query|number|false|The maximum amount of fat in grams the recipe can have.|
|minAlcohol|query|number|false|The minimum amount of alcohol in grams the recipe must have.|
|maxAlcohol|query|number|false|The maximum amount of alcohol in grams the recipe can have.|
|minCaffeine|query|number|false|The minimum amount of caffeine in milligrams the recipe must have.|
|maxCaffeine|query|number|false|The maximum amount of caffeine in milligrams the recipe can have.|
|minCopper|query|number|false|The minimum amount of copper in milligrams the recipe must have.|
|maxCopper|query|number|false|The maximum amount of copper in milligrams the recipe can have.|
|minCalcium|query|number|false|The minimum amount of calcium in milligrams the recipe must have.|
|maxCalcium|query|number|false|The maximum amount of calcium in milligrams the recipe can have.|
|minCholine|query|number|false|The minimum amount of choline in milligrams the recipe must have.|
|maxCholine|query|number|false|The maximum amount of choline in milligrams the recipe can have.|
|minCholesterol|query|number|false|The minimum amount of cholesterol in milligrams the recipe must have.|
|maxCholesterol|query|number|false|The maximum amount of cholesterol in milligrams the recipe can have.|
|minFluoride|query|number|false|The minimum amount of fluoride in milligrams the recipe must have.|
|maxFluoride|query|number|false|The maximum amount of fluoride in milligrams the recipe can have.|
|minSaturatedFat|query|number|false|The minimum amount of saturated fat in grams the recipe must have.|
|maxSaturatedFat|query|number|false|The maximum amount of saturated fat in grams the recipe can have.|
|minVitaminA|query|number|false|The minimum amount of Vitamin A in IU the recipe must have.|
|maxVitaminA|query|number|false|The maximum amount of Vitamin A in IU the recipe can have.|
|minVitaminC|query|number|false|The minimum amount of Vitamin C milligrams the recipe must have.|
|maxVitaminC|query|number|false|The maximum amount of Vitamin C in milligrams the recipe can have.|
|minVitaminD|query|number|false|The minimum amount of Vitamin D in micrograms the recipe must have.|
|maxVitaminD|query|number|false|The maximum amount of Vitamin D in micrograms the recipe can have.|
|minVitaminE|query|number|false|The minimum amount of Vitamin E in milligrams the recipe must have.|
|maxVitaminE|query|number|false|The maximum amount of Vitamin E in milligrams the recipe can have.|
|minVitaminK|query|number|false|The minimum amount of Vitamin K in micrograms the recipe must have.|
|maxVitaminK|query|number|false|The maximum amount of Vitamin K in micrograms the recipe can have.|
|minVitaminB1|query|number|false|The minimum amount of Vitamin B1 in milligrams the recipe must have.|
|maxVitaminB1|query|number|false|The maximum amount of Vitamin B1 in milligrams the recipe can have.|
|minVitaminB2|query|number|false|The minimum amount of Vitamin B2 in milligrams the recipe must have.|
|maxVitaminB2|query|number|false|The maximum amount of Vitamin B2 in milligrams the recipe can have.|
|minVitaminB5|query|number|false|The minimum amount of Vitamin B5 in milligrams the recipe must have.|
|maxVitaminB5|query|number|false|The maximum amount of Vitamin B5 in milligrams the recipe can have.|
|minVitaminB3|query|number|false|The minimum amount of Vitamin B3 in milligrams the recipe must have.|
|maxVitaminB3|query|number|false|The maximum amount of Vitamin B3 in milligrams the recipe can have.|
|minVitaminB6|query|number|false|The minimum amount of Vitamin B6 in milligrams the recipe must have.|
|maxVitaminB6|query|number|false|The maximum amount of Vitamin B6 in milligrams the recipe can have.|
|minVitaminB12|query|number|false|The minimum amount of Vitamin B12 in micrograms the recipe must have.|
|maxVitaminB12|query|number|false|The maximum amount of Vitamin B12 in micrograms the recipe can have.|
|minFiber|query|number|false|The minimum amount of fiber in grams the recipe must have.|
|maxFiber|query|number|false|The maximum amount of fiber in grams the recipe can have.|
|minFolate|query|number|false|The minimum amount of folate in micrograms the recipe must have.|
|maxFolate|query|number|false|The maximum amount of folate in micrograms the recipe can have.|
|minFolicAcid|query|number|false|The minimum amount of folic acid in micrograms the recipe must have.|
|maxFolicAcid|query|number|false|The maximum amount of folic acid in micrograms the recipe can have.|
|minIodine|query|number|false|The minimum amount of iodine in micrograms the recipe must have.|
|maxIodine|query|number|false|The maximum amount of iodine in micrograms the recipe can have.|
|minIron|query|number|false|The minimum amount of iron in milligrams the recipe must have.|
|maxIron|query|number|false|The maximum amount of iron in milligrams the recipe can have.|
|minMagnesium|query|number|false|The minimum amount of magnesium in milligrams the recipe must have.|
|maxMagnesium|query|number|false|The maximum amount of magnesium in milligrams the recipe can have.|
|minManganese|query|number|false|The minimum amount of manganese in milligrams the recipe must have.|
|maxManganese|query|number|false|The maximum amount of manganese in milligrams the recipe can have.|
|minPhosphorus|query|number|false|The minimum amount of phosphorus in milligrams the recipe must have.|
|maxPhosphorus|query|number|false|The maximum amount of phosphorus in milligrams the recipe can have.|
|minPotassium|query|number|false|The minimum amount of potassium in milligrams the recipe must have.|
|maxPotassium|query|number|false|The maximum amount of potassium in milligrams the recipe can have.|
|minSelenium|query|number|false|The minimum amount of selenium in micrograms the recipe must have.|
|maxSelenium|query|number|false|The maximum amount of selenium in micrograms the recipe can have.|
|minSodium|query|number|false|The minimum amount of sodium in milligrams the recipe must have.|
|maxSodium|query|number|false|The maximum amount of sodium in milligrams the recipe can have.|
|minSugar|query|number|false|The minimum amount of sugar in grams the recipe must have.|
|maxSugar|query|number|false|The maximum amount of sugar in grams the recipe can have.|
|minZinc|query|number|false|The minimum amount of zinc in milligrams the recipe must have.|
|maxZinc|query|number|false|The maximum amount of zinc in milligrams the recipe can have.|
|offset|query|integer|false|The number of results to skip (between 0 and 900).|
|number|query|integer|false|The maximum number of items to return (between 1 and 100). Defaults to 10.|
|limitLicense|query|boolean|false|Whether the recipes should have an open license that allows display with proper attribution.|

> Example responses

> 200 Response

```json
{
  "number": 2,
  "offset": 0,
  "results": [
    {
      "calories": 584,
      "carbs": "84g",
      "fat": "20g",
      "id": 716429,
      "image": "https://spoonacular.com/recipeImages/716429-312x231.jpg",
      "imageType": "jpg",
      "protein": "19g",
      "title": "Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs"
    },
    {
      "calories": 521,
      "carbs": "69g",
      "fat": "10g",
      "id": 715538,
      "image": "https://spoonacular.com/recipeImages/715538-312x231.jpg",
      "imageType": "jpg",
      "protein": "35g",
      "title": "What to make for dinner tonight?? Bruschetta Style Pork & Pasta"
    }
  ],
  "totalResults": 86
}
```

<h3 id="search-recipes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="search-recipes-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|number|integer|true|none|none|
|offset|integer|true|none|none|
|results|[object]|true|none|none|
|» calories|number|true|none|none|
|» carbs|string|true|none|none|
|» fat|string|true|none|none|
|» id|integer|true|none|none|
|» image|string|true|none|none|
|» imageType|string|true|none|none|
|» protein|string|true|none|none|
|» title|string|true|none|none|
|totalResults|integer|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyScheme
</aside>

## Convert Amounts

<a id="opIdconvertAmounts"></a>

> Code samples

```bash
curl 'https://example.com/recipes/convert?ingredientName=flour&sourceAmount=2.5&sourceUnit=cups&targetUnit=grams' \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}"
```

`GET /recipes/convert`

Convert amounts like "2 cups of flour to grams".

<a href="https://spoonacular.com/food-api/docs#Convert-Amounts">Read entire docs</a>

<h3 id="convert-amounts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ingredientName|query|string|true|The ingredient which you want to convert.|
|sourceAmount|query|number|true|The amount from which you want to convert, e.g. the 2.5 in "2.5 cups of flour to grams".|
|sourceUnit|query|string|true|The unit from which you want to convert, e.g. the grams in "2.5 cups of flour to grams". You can also use "piece", e.g. "3.4 oz tomatoes to piece"|
|targetUnit|query|string|true|The unit to which you want to convert, e.g. the grams in "2.5 cups of flour to grams". You can also use "piece", e.g. "3.4 oz tomatoes to piece"|

> Example responses

> 200 Response

```json
{
  "answer": "2.5 cups flour translates to 312.5 grams.",
  "sourceAmount": 2.5,
  "sourceUnit": "cups",
  "targetAmount": 312.5,
  "targetUnit": "grams"
}
```

<h3 id="convert-amounts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="convert-amounts-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|answer|string|true|none|none|
|sourceAmount|number|true|none|none|
|sourceUnit|string|true|none|none|
|targetAmount|number|true|none|none|
|targetUnit|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyScheme
</aside>

## Classify Cuisine

<a id="opIdclassifyCuisine"></a>

> Code samples

```bash
curl https://example.com/recipes/cuisine \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}"
```

`POST /recipes/cuisine`

Classify the recipe's cuisine.

<a href="https://spoonacular.com/food-api/docs#Classify-Cuisine">Read entire docs</a>

> Body parameter

```yaml
"title=Pork roast with green beans&ingredientList=3 oz pork shoulder"
```

<h3 id="classify-cuisine-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|false|The content type.|
|body|body|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Content-Type|application/x-www-form-urlencoded|
|Content-Type|application/json|
|Content-Type|multipart/form-data|

> Example responses

> 200 Response

```json
{
  "confidence": 0,
  "cuisine": "Mediterranean",
  "cuisines": [
    "Mediterranean",
    "European",
    "Italian"
  ]
}
```

<h3 id="classify-cuisine-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="classify-cuisine-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|confidence|number|true|none|none|
|cuisine|string|true|none|none|
|cuisines|[string]|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyScheme
</aside>

## Extract Recipe from Website

<a id="opIdextractRecipeFromWebsite"></a>

> Code samples

```bash
curl 'https://example.com/recipes/extract?url=https%3A%2F%2Ffoodista.com%2Frecipe%2FZHK4KPB6%2Fchocolate-crinkle-cookies' \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}"
```

`GET /recipes/extract`

This endpoint lets you extract recipe data such as title, ingredients, and instructions from any properly formatted Website.

<a href="https://spoonacular.com/food-api/docs#Extract-Recipe-from-Website">Read entire docs</a>

<h3 id="extract-recipe-from-website-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|url|query|string|true|The URL of the recipe page.|
|forceExtraction|query|boolean|false|If true, the extraction will be triggered whether we already know the recipe or not. Use this only if information is missing as this operation is slower.|
|analyze|query|boolean|false|If true, the recipe will be analyzed and classified resolving in more data such as cuisines, dish types, and more.|
|includeNutrition|query|boolean|false|Include nutrition data in the recipe information. Nutrition data is per serving. If you want the nutrition data for the entire recipe, just multiply by the number of servings.|
|includeTaste|query|boolean|false|Whether taste data should be added to correctly parsed ingredients.|

> Example responses

> 200 Response

```json
{
  "aggregateLikes": 209,
  "analyzedInstructions": [],
  "cheap": false,
  "creditsText": "Full Belly Sisters",
  "cuisines": [],
  "dairyFree": false,
  "diets": [],
  "dishTypes": [
    "lunch",
    "main course",
    "main dish",
    "dinner"
  ],
  "extendedIngredients": [
    {
      "aisle": "Milk, Eggs, Other Dairy",
      "amount": 1,
      "consitency": "solid",
      "id": 1001,
      "image": "butter-sliced.jpg",
      "measures": {
        "metric": {
          "amount": 1,
          "unitLong": "Tbsp",
          "unitShort": "Tbsp"
        },
        "us": {
          "amount": 1,
          "unitLong": "Tbsp",
          "unitShort": "Tbsp"
        }
      },
      "meta": [],
      "name": "butter",
      "original": "1 tbsp butter",
      "originalName": "butter",
      "unit": "tbsp"
    },
    {
      "aisle": "Produce",
      "amount": 2,
      "consitency": "solid",
      "id": 10011135,
      "image": "cauliflower.jpg",
      "measures": {
        "metric": {
          "amount": 473.176,
          "unitLong": "milliliters",
          "unitShort": "ml"
        },
        "us": {
          "amount": 2,
          "unitLong": "cups",
          "unitShort": "cups"
        }
      },
      "meta": [
        "frozen",
        "thawed",
        "cut into bite-sized pieces"
      ],
      "name": "cauliflower florets",
      "original": "about 2 cups frozen cauliflower florets, thawed, cut into bite-sized pieces",
      "originalName": "about frozen cauliflower florets, thawed, cut into bite-sized pieces",
      "unit": "cups"
    },
    {
      "aisle": "Cheese",
      "amount": 2,
      "consitency": "solid",
      "id": 1041009,
      "image": "cheddar-cheese.png",
      "measures": {
        "metric": {
          "amount": 2,
          "unitLong": "Tbsps",
          "unitShort": "Tbsps"
        },
        "us": {
          "amount": 2,
          "unitLong": "Tbsps",
          "unitShort": "Tbsps"
        }
      },
      "meta": [
        "grated",
        "(I used romano)"
      ],
      "name": "cheese",
      "original": "2 tbsp grated cheese (I used romano)",
      "originalName": "grated cheese (I used romano)",
      "unit": "tbsp"
    },
    {
      "aisle": "Oil, Vinegar, Salad Dressing",
      "amount": 1,
      "consitency": "liquid",
      "id": 1034053,
      "image": "olive-oil.jpg",
      "measures": {
        "metric": {
          "amount": 1,
          "unitLong": "Tbsp",
          "unitShort": "Tbsp"
        },
        "us": {
          "amount": 1,
          "unitLong": "Tbsp",
          "unitShort": "Tbsp"
        }
      },
      "meta": [],
      "name": "extra virgin olive oil",
      "original": "1-2 tbsp extra virgin olive oil",
      "originalName": "extra virgin olive oil",
      "unit": "tbsp"
    },
    {
      "aisle": "Produce",
      "amount": 5,
      "consitency": "solid",
      "id": 11215,
      "image": "garlic.jpg",
      "measures": {
        "metric": {
          "amount": 5,
          "unitLong": "cloves",
          "unitShort": "cloves"
        },
        "us": {
          "amount": 5,
          "unitLong": "cloves",
          "unitShort": "cloves"
        }
      },
      "meta": [],
      "name": "garlic",
      "original": "5-6 cloves garlic",
      "originalName": "garlic",
      "unit": "cloves"
    },
    {
      "aisle": "Pasta and Rice",
      "amount": 6,
      "consitency": "solid",
      "id": 20420,
      "image": "fusilli.jpg",
      "measures": {
        "metric": {
          "amount": 170.097,
          "unitLong": "grams",
          "unitShort": "g"
        },
        "us": {
          "amount": 6,
          "unitLong": "ounces",
          "unitShort": "oz"
        }
      },
      "meta": [
        "(I used linguine)"
      ],
      "name": "pasta",
      "original": "6-8 ounces pasta (I used linguine)",
      "originalName": "pasta (I used linguine)",
      "unit": "ounces"
    },
    {
      "aisle": "Spices and Seasonings",
      "amount": 2,
      "consitency": "solid",
      "id": 1032009,
      "image": "red-pepper-flakes.jpg",
      "measures": {
        "metric": {
          "amount": 2,
          "unitLong": "pinches",
          "unitShort": "pinches"
        },
        "us": {
          "amount": 2,
          "unitLong": "pinches",
          "unitShort": "pinches"
        }
      },
      "meta": [
        "red"
      ],
      "name": "red pepper flakes",
      "original": "couple of pinches red pepper flakes, optional",
      "originalName": "couple of red pepper flakes, optional",
      "unit": "pinches"
    },
    {
      "aisle": "Spices and Seasonings",
      "amount": 2,
      "consitency": "solid",
      "id": 1102047,
      "image": "salt-and-pepper.jpg",
      "measures": {
        "metric": {
          "amount": 2,
          "unitLong": "servings",
          "unitShort": "servings"
        },
        "us": {
          "amount": 2,
          "unitLong": "servings",
          "unitShort": "servings"
        }
      },
      "meta": [
        "to taste"
      ],
      "name": "salt and pepper",
      "original": "salt and pepper, to taste",
      "originalName": "salt and pepper, to taste",
      "unit": "servings"
    },
    {
      "aisle": "Produce",
      "amount": 3,
      "consitency": "solid",
      "id": 11291,
      "image": "spring-onions.jpg",
      "measures": {
        "metric": {
          "amount": 3,
          "unitLong": "",
          "unitShort": ""
        },
        "us": {
          "amount": 3,
          "unitLong": "",
          "unitShort": ""
        }
      },
      "meta": [
        "white",
        "green",
        "separated",
        "chopped"
      ],
      "name": "scallions",
      "original": "3 scallions, chopped, white and green parts separated",
      "originalName": "scallions, chopped, white and green parts separated",
      "unit": ""
    },
    {
      "aisle": "Alcoholic Beverages",
      "amount": 2,
      "consitency": "liquid",
      "id": 14106,
      "image": "white-wine.jpg",
      "measures": {
        "metric": {
          "amount": 2,
          "unitLong": "Tbsps",
          "unitShort": "Tbsps"
        },
        "us": {
          "amount": 2,
          "unitLong": "Tbsps",
          "unitShort": "Tbsps"
        }
      },
      "meta": [
        "white"
      ],
      "name": "white wine",
      "original": "2-3 tbsp white wine",
      "originalName": "white wine",
      "unit": "tbsp"
    },
    {
      "aisle": "Pasta and Rice",
      "amount": 0.25,
      "consitency": "solid",
      "id": 99025,
      "image": "breadcrumbs.jpg",
      "measures": {
        "metric": {
          "amount": 59.147,
          "unitLong": "milliliters",
          "unitShort": "ml"
        },
        "us": {
          "amount": 0.25,
          "unitLong": "cups",
          "unitShort": "cups"
        }
      },
      "meta": [
        "whole wheat",
        "(I used panko)"
      ],
      "name": "whole wheat bread crumbs",
      "original": "1/4 cup whole wheat bread crumbs (I used panko)",
      "originalName": "whole wheat bread crumbs (I used panko)",
      "unit": "cup"
    }
  ],
  "gaps": "no",
  "glutenFree": false,
  "healthScore": 19,
  "id": 716429,
  "image": "https://spoonacular.com/recipeImages/716429-556x370.jpg",
  "imageType": "jpg",
  "instructions": "",
  "ketogenic": false,
  "license": "CC BY-SA 3.0",
  "lowFodmap": false,
  "occasions": [],
  "pricePerServing": 163.15,
  "readyInMinutes": 45,
  "servings": 2,
  "sourceName": "Full Belly Sisters",
  "sourceUrl": "http://fullbellysisters.blogspot.com/2012/06/pasta-with-garlic-scallions-cauliflower.html",
  "spoonacularScore": 83,
  "spoonacularSourceUrl": "https://spoonacular.com/pasta-with-garlic-scallions-cauliflower-breadcrumbs-716429",
  "summary": "Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs might be a good recipe to expand your main course repertoire. One portion of this dish contains approximately <b>19g of protein </b>,  <b>20g of fat </b>, and a total of  <b>584 calories </b>. For  <b>$1.63 per serving </b>, this recipe  <b>covers 23% </b> of your daily requirements of vitamins and minerals. This recipe serves 2. It is brought to you by fullbellysisters.blogspot.com. 209 people were glad they tried this recipe. A mixture of scallions, salt and pepper, white wine, and a handful of other ingredients are all it takes to make this recipe so scrumptious. From preparation to the plate, this recipe takes approximately  <b>45 minutes </b>. All things considered, we decided this recipe  <b>deserves a spoonacular score of 83% </b>. This score is awesome. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/cauliflower-gratin-with-garlic-breadcrumbs-318375\">Cauliflower Gratin with Garlic Breadcrumbs</a>, < href=\"https://spoonacular.com/recipes/pasta-with-cauliflower-sausage-breadcrumbs-30437\">Pasta With Cauliflower, Sausage, & Breadcrumbs</a>, and <a href=\"https://spoonacular.com/recipes/pasta-with-roasted-cauliflower-parsley-and-breadcrumbs-30738\">Pasta With Roasted Cauliflower, Parsley, And Breadcrumbs</a>.",
  "sustainable": false,
  "title": "Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs",
  "vegan": false,
  "vegetarian": false,
  "veryHealthy": false,
  "veryPopular": false,
  "weightWatcherSmartPoints": 17,
  "whole30": false,
  "winePairing": {
    "pairedWines": [
      "chardonnay",
      "gruener veltliner",
      "sauvignon blanc"
    ],
    "pairingText": "Chardonnay, Gruener Veltliner, and Sauvignon Blanc are great choices for Pasta. Sauvignon Blanc and Gruner Veltliner both have herby notes that complement salads with enough acid to match tart vinaigrettes, while a Chardonnay can be a good pick for creamy salad dressings. The Buddha Kat Winery Chardonnay with a 4 out of 5 star rating seems like a good match. It costs about 25 dollars per bottle.",
    "productMatches": [
      {
        "averageRating": 0.8,
        "description": "We barrel ferment our Chardonnay and age it in a mix of Oak and Stainless. Giving this light bodied wine modest oak character, a delicate floral aroma, and a warming finish.",
        "id": 469199,
        "imageUrl": "https://spoonacular.com/productImages/469199-312x231.jpg",
        "link": "https://www.amazon.com/2015-Buddha-Kat-Winery-Chardonnay/dp/B00OSAVVM4?tag=spoonacular-20",
        "price": "$25.0",
        "ratingCount": 1,
        "score": 0.55,
        "title": "Buddha Kat Winery Chardonnay"
      }
    ]
  }
}
```

<h3 id="extract-recipe-from-website-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="extract-recipe-from-website-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|aggregateLikes|integer|true|none|none|
|analyzedInstructions|[object]|true|none|none|
|cheap|boolean|true|none|none|
|creditsText|string|true|none|none|
|cuisines|[string]|true|none|none|
|dairyFree|boolean|true|none|none|
|diets|[string]|true|none|none|
|dishTypes|[string]|true|none|none|
|extendedIngredients|[object]|true|none|none|
|» aisle|string|true|none|none|
|» amount|number|true|none|none|
|» consitency|string|true|none|none|
|» id|integer|true|none|none|
|» image|string|true|none|none|
|» measures|object|false|none|none|
|» » metric|object|true|none|none|
|» » » amount|number|true|none|none|
|» » » unitLong|string|true|none|none|
|» » » unitShort|string|true|none|none|
|» » us|object|true|none|none|
|» » » amount|number|true|none|none|
|» » » unitLong|string|true|none|none|
|» » » unitShort|string|true|none|none|
|» meta|[string]|false|none|none|
|» name|string|true|none|none|
|» original|string|true|none|none|
|» originalName|string|true|none|none|
|» unit|string|true|none|none|
|gaps|string|true|none|none|
|glutenFree|boolean|true|none|none|
|healthScore|number|true|none|none|
|id|integer|true|none|none|
|image|string|true|none|none|
|imageType|string|true|none|none|
|instructions|string|true|none|none|
|ketogenic|boolean|true|none|none|
|license|string|true|none|none|
|lowFodmap|boolean|true|none|none|
|occasions|[string]|true|none|none|
|pricePerServing|number|true|none|none|
|readyInMinutes|integer|true|none|none|
|servings|number|true|none|none|
|sourceName|string|true|none|none|
|sourceUrl|string|true|none|none|
|spoonacularScore|number|true|none|none|
|spoonacularSourceUrl|string|true|none|none|
|summary|string|true|none|none|
|sustainable|boolean|true|none|none|
|title|string|true|none|none|
|vegan|boolean|true|none|none|
|vegetarian|boolean|true|none|none|
|veryHealthy|boolean|true|none|none|
|veryPopular|boolean|true|none|none|
|weightWatcherSmartPoints|number|true|none|none|
|whole30|boolean|true|none|none|
|winePairing|object|true|none|none|
|» pairedWines|[string]|true|none|none|
|» pairingText|string|true|none|none|
|» productMatches|[object]|true|none|none|
|» » averageRating|number|true|none|none|
|» » description|string|true|none|none|
|» » id|integer|true|none|none|
|» » imageUrl|string|true|none|none|
|» » link|string|true|none|none|
|» » price|string|true|none|none|
|» » ratingCount|integer|true|none|none|
|» » score|number|true|none|none|
|» » title|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyScheme
</aside>

## Search Recipes by Ingredients

<a id="opIdsearchRecipesByIngredients"></a>

> Code samples

```bash
curl https://example.com/recipes/findByIngredients \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}"
```

`GET /recipes/findByIngredients`


Ever wondered what recipes you can cook with the ingredients you have in your fridge or pantry? This endpoint lets you find recipes that either maximize the usage of ingredients you have at hand (pre shopping) or minimize the ingredients that you don't currently have (post shopping).
        

<a href="https://spoonacular.com/food-api/docs#Search-Recipes-by-Ingredients">Read entire docs</a>

<h3 id="search-recipes-by-ingredients-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ingredients|query|string|false|A comma-separated list of ingredients that the recipes should contain.|
|number|query|integer|false|The maximum number of items to return (between 1 and 100). Defaults to 10.|
|limitLicense|query|boolean|false|Whether the recipes should have an open license that allows display with proper attribution.|
|ranking|query|number|false|Whether to maximize used ingredients (1) or minimize missing ingredients (2) first.|
|ignorePantry|query|boolean|false|Whether to ignore typical pantry items, such as water, salt, flour, etc.|

> Example responses

> 200 Response

```json
[
  {
    "id": 73420,
    "image": "https://spoonacular.com/recipeImages/73420-312x231.jpg",
    "imageType": "jpg",
    "likes": 0,
    "missedIngredientCount": 3,
    "missedIngredients": [
      {
        "aisle": "Baking",
        "amount": 1,
        "id": 18371,
        "image": "https://spoonacular.com/cdn/ingredients_100x100/white-powder.jpg",
        "meta": [],
        "name": "baking powder",
        "original": "1 tsp baking powder",
        "originalName": "baking powder",
        "unit": "tsp",
        "unitLong": "teaspoon",
        "unitShort": "tsp"
      },
      {
        "aisle": "Spices and Seasonings",
        "amount": 1,
        "id": 2010,
        "image": "https://spoonacular.com/cdn/ingredients_100x100/cinnamon.jpg",
        "meta": [],
        "name": "cinnamon",
        "original": "1 tsp cinnamon",
        "originalName": "cinnamon",
        "unit": "tsp",
        "unitLong": "teaspoon",
        "unitShort": "tsp"
      },
      {
        "aisle": "Milk, Eggs, Other Dairy",
        "amount": 1,
        "id": 1123,
        "image": "https://spoonacular.com/cdn/ingredients_100x100/egg.png",
        "meta": [],
        "name": "egg",
        "original": "1 egg",
        "originalName": "egg",
        "unit": "",
        "unitLong": "",
        "unitShort": ""
      }
    ],
    "title": "Apple Or Peach Strudel",
    "unusedIngredients": [],
    "usedIngredientCount": 1,
    "usedIngredients": [
      {
        "aisle": "Produce",
        "amount": 6,
        "id": 9003,
        "image": "https://spoonacular.com/cdn/ingredients_100x100/apple.jpg",
        "meta": [],
        "name": "apples",
        "original": "6 large baking apples",
        "originalName": "baking apples",
        "unit": "large",
        "unitLong": "larges",
        "unitShort": "large"
      }
    ]
  },
  {
    "id": 632660,
    "image": "https://spoonacular.com/recipeImages/632660-312x231.jpg",
    "imageType": "jpg",
    "likes": 3,
    "missedIngredientCount": 4,
    "missedIngredients": [
      {
        "aisle": "Milk, Eggs, Other Dairy",
        "amount": 1.5,
        "extendedName": "unsalted butter",
        "id": 1001,
        "image": "https://spoonacular.com/cdn/ingredients_100x100/butter-sliced.jpg",
        "meta": [
          "unsalted",
          "cold"
        ],
        "name": "butter",
        "original": "1 1/2 sticks cold unsalted butter cold unsalted butter<",
        "originalName": "cold unsalted butter cold unsalted butter<",
        "unit": "sticks",
        "unitLong": "sticks",
        "unitShort": "sticks"
      },
      {
        "aisle": "Produce",
        "amount": 4,
        "id": 1079003,
        "image": "https://spoonacular.com/cdn/ingredients_100x100/red-delicious-apples.png",
        "meta": [
          "red",
          " such as golden delicious, peeled, cored and cut into 1/4-inch-thick slices "
        ],
        "name": "red apples",
        "original": "4 larges red apples, such as Golden Delicious, peeled, cored and cut into 1/4-inch-thick slices",
        "originalName": "s red apples, such as Golden Delicious, peeled, cored and cut into 1/4-inch-thick slices",
        "unit": "large",
        "unitLong": "larges",
        "unitShort": "large"
      },
      {
        "aisle": "Spices and Seasonings",
        "amount": 2,
        "id": 2010,
        "image": "https://spoonacular.com/cdn/ingredients_100x100/cinnamon.jpg",
        "meta": [],
        "name": "cinnamon",
        "original": "2 teaspoons cinnamon",
        "originalName": "cinnamon",
        "unit": "teaspoons",
        "unitLong": "teaspoons",
        "unitShort": "tsp"
      },
      {
        "aisle": "Nut butters, Jams, and Honey",
        "amount": 2,
        "id": 19719,
        "image": "https://spoonacular.com/cdn/ingredients_100x100/apricot-jam.jpg",
        "meta": [
          "melted"
        ],
        "name": "apricot preserves",
        "original": "2 tablespoons apricot preserves, melted and strained",
        "originalName": "apricot preserves, melted and strained",
        "unit": "tablespoons",
        "unitLong": "tablespoons",
        "unitShort": "Tbsp"
      }
    ],
    "title": "Apricot Glazed Apple Tart",
    "unusedIngredients": [
      {
        "aisle": "Produce",
        "amount": 1,
        "id": 9003,
        "image": "https://spoonacular.com/cdn/ingredients_100x100/apple.jpg",
        "meta": [],
        "name": "apples",
        "original": "apples",
        "originalName": "apples",
        "unit": "serving",
        "unitLong": "serving",
        "unitShort": "serving"
      }
    ],
    "usedIngredientCount": 0,
    "usedIngredients": []
  }
]
```

<h3 id="search-recipes-by-ingredients-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="search-recipes-by-ingredients-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» id|integer|true|none|none|
|» image|string|true|none|none|
|» imageType|string|true|none|none|
|» likes|integer|true|none|none|
|» missedIngredientCount|integer|true|none|none|
|» missedIngredients|[object]|true|none|none|
|» » aisle|string|true|none|none|
|» » amount|number|true|none|none|
|» » id|integer|true|none|none|
|» » image|string|true|none|none|
|» » meta|[string]|false|none|none|
|» » name|string|true|none|none|
|» » original|string|true|none|none|
|» » originalName|string|true|none|none|
|» » unit|string|true|none|none|
|» » unitLong|string|true|none|none|
|» » unitShort|string|true|none|none|
|» title|string|true|none|none|
|» unusedIngredients|[object]|true|none|none|
|» usedIngredientCount|number|true|none|none|
|» usedIngredients|[object]|true|none|none|
|» » aisle|string|true|none|none|
|» » amount|number|true|none|none|
|» » id|integer|true|none|none|
|» » image|string|true|none|none|
|» » meta|[string]|false|none|none|
|» » name|string|true|none|none|
|» » original|string|true|none|none|
|» » originalName|string|true|none|none|
|» » unit|string|true|none|none|
|» » unitLong|string|true|none|none|
|» » unitShort|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyScheme
</aside>

## Search Recipes by Nutrients

<a id="opIdsearchRecipesByNutrients"></a>

> Code samples

```bash
curl https://example.com/recipes/findByNutrients \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}"
```

`GET /recipes/findByNutrients`

Find a set of recipes that adhere to the given nutritional limits. You may set limits for macronutrients (calories, protein, fat, and carbohydrate) and/or many micronutrients.

<a href="https://spoonacular.com/food-api/docs#Search-Recipes-by-Nutrients">Read entire docs</a>

<h3 id="search-recipes-by-nutrients-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|minCarbs|query|number|false|The minimum amount of carbohydrates in grams the recipe must have.|
|maxCarbs|query|number|false|The maximum amount of carbohydrates in grams the recipe can have.|
|minProtein|query|number|false|The minimum amount of protein in grams the recipe must have.|
|maxProtein|query|number|false|The maximum amount of protein in grams the recipe can have.|
|minCalories|query|number|false|The minimum amount of calories the recipe must have.|
|maxCalories|query|number|false|The maximum amount of calories the recipe can have.|
|minFat|query|number|false|The minimum amount of fat in grams the recipe must have.|
|maxFat|query|number|false|The maximum amount of fat in grams the recipe can have.|
|minAlcohol|query|number|false|The minimum amount of alcohol in grams the recipe must have.|
|maxAlcohol|query|number|false|The maximum amount of alcohol in grams the recipe can have.|
|minCaffeine|query|number|false|The minimum amount of caffeine in milligrams the recipe must have.|
|maxCaffeine|query|number|false|The maximum amount of caffeine in milligrams the recipe can have.|
|minCopper|query|number|false|The minimum amount of copper in milligrams the recipe must have.|
|maxCopper|query|number|false|The maximum amount of copper in milligrams the recipe can have.|
|minCalcium|query|number|false|The minimum amount of calcium in milligrams the recipe must have.|
|maxCalcium|query|number|false|The maximum amount of calcium in milligrams the recipe can have.|
|minCholine|query|number|false|The minimum amount of choline in milligrams the recipe must have.|
|maxCholine|query|number|false|The maximum amount of choline in milligrams the recipe can have.|
|minCholesterol|query|number|false|The minimum amount of cholesterol in milligrams the recipe must have.|
|maxCholesterol|query|number|false|The maximum amount of cholesterol in milligrams the recipe can have.|
|minFluoride|query|number|false|The minimum amount of fluoride in milligrams the recipe must have.|
|maxFluoride|query|number|false|The maximum amount of fluoride in milligrams the recipe can have.|
|minSaturatedFat|query|number|false|The minimum amount of saturated fat in grams the recipe must have.|
|maxSaturatedFat|query|number|false|The maximum amount of saturated fat in grams the recipe can have.|
|minVitaminA|query|number|false|The minimum amount of Vitamin A in IU the recipe must have.|
|maxVitaminA|query|number|false|The maximum amount of Vitamin A in IU the recipe can have.|
|minVitaminC|query|number|false|The minimum amount of Vitamin C in milligrams the recipe must have.|
|maxVitaminC|query|number|false|The maximum amount of Vitamin C in milligrams the recipe can have.|
|minVitaminD|query|number|false|The minimum amount of Vitamin D in micrograms the recipe must have.|
|maxVitaminD|query|number|false|The maximum amount of Vitamin D in micrograms the recipe can have.|
|minVitaminE|query|number|false|The minimum amount of Vitamin E in milligrams the recipe must have.|
|maxVitaminE|query|number|false|The maximum amount of Vitamin E in milligrams the recipe can have.|
|minVitaminK|query|number|false|The minimum amount of Vitamin K in micrograms the recipe must have.|
|maxVitaminK|query|number|false|The maximum amount of Vitamin K in micrograms the recipe can have.|
|minVitaminB1|query|number|false|The minimum amount of Vitamin B1 in milligrams the recipe must have.|
|maxVitaminB1|query|number|false|The maximum amount of Vitamin B1 in milligrams the recipe can have.|
|minVitaminB2|query|number|false|The minimum amount of Vitamin B2 in milligrams the recipe must have.|
|maxVitaminB2|query|number|false|The maximum amount of Vitamin B2 in milligrams the recipe can have.|
|minVitaminB5|query|number|false|The minimum amount of Vitamin B5 in milligrams the recipe must have.|
|maxVitaminB5|query|number|false|The maximum amount of Vitamin B5 in milligrams the recipe can have.|
|minVitaminB3|query|number|false|The minimum amount of Vitamin B3 in milligrams the recipe must have.|
|maxVitaminB3|query|number|false|The maximum amount of Vitamin B3 in milligrams the recipe can have.|
|minVitaminB6|query|number|false|The minimum amount of Vitamin B6 in milligrams the recipe must have.|
|maxVitaminB6|query|number|false|The maximum amount of Vitamin B6 in milligrams the recipe can have.|
|minVitaminB12|query|number|false|The minimum amount of Vitamin B12 in micrograms the recipe must have.|
|maxVitaminB12|query|number|false|The maximum amount of Vitamin B12 in micrograms the recipe can have.|
|minFiber|query|number|false|The minimum amount of fiber in grams the recipe must have.|
|maxFiber|query|number|false|The maximum amount of fiber in grams the recipe can have.|
|minFolate|query|number|false|The minimum amount of folate in micrograms the recipe must have.|
|maxFolate|query|number|false|The maximum amount of folate in micrograms the recipe can have.|
|minFolicAcid|query|number|false|The minimum amount of folic acid in micrograms the recipe must have.|
|maxFolicAcid|query|number|false|The maximum amount of folic acid in micrograms the recipe can have.|
|minIodine|query|number|false|The minimum amount of iodine in micrograms the recipe must have.|
|maxIodine|query|number|false|The maximum amount of iodine in micrograms the recipe can have.|
|minIron|query|number|false|The minimum amount of iron in milligrams the recipe must have.|
|maxIron|query|number|false|The maximum amount of iron in milligrams the recipe can have.|
|minMagnesium|query|number|false|The minimum amount of magnesium in milligrams the recipe must have.|
|maxMagnesium|query|number|false|The maximum amount of magnesium in milligrams the recipe can have.|
|minManganese|query|number|false|The minimum amount of manganese in milligrams the recipe must have.|
|maxManganese|query|number|false|The maximum amount of manganese in milligrams the recipe can have.|
|minPhosphorus|query|number|false|The minimum amount of phosphorus in milligrams the recipe must have.|
|maxPhosphorus|query|number|false|The maximum amount of phosphorus in milligrams the recipe can have.|
|minPotassium|query|number|false|The minimum amount of potassium in milligrams the recipe must have.|
|maxPotassium|query|number|false|The maximum amount of potassium in milligrams the recipe can have.|
|minSelenium|query|number|false|The minimum amount of selenium in micrograms the recipe must have.|
|maxSelenium|query|number|false|The maximum amount of selenium in micrograms the recipe can have.|
|minSodium|query|number|false|The minimum amount of sodium in milligrams the recipe must have.|
|maxSodium|query|number|false|The maximum amount of sodium in milligrams the recipe can have.|
|minSugar|query|number|false|The minimum amount of sugar in grams the recipe must have.|
|maxSugar|query|number|false|The maximum amount of sugar in grams the recipe can have.|
|minZinc|query|number|false|The minimum amount of zinc in milligrams the recipe must have.|
|maxZinc|query|number|false|The maximum amount of zinc in milligrams the recipe can have.|
|offset|query|integer|false|The number of results to skip (between 0 and 900).|
|number|query|integer|false|The maximum number of items to return (between 1 and 100). Defaults to 10.|
|random|query|boolean|false|If true, every request will give you a random set of recipes within the requested limits.|
|limitLicense|query|boolean|false|Whether the recipes should have an open license that allows display with proper attribution.|

> Example responses

> 200 Response

```json
[
  {
    "calories": 210,
    "carbs": "43g",
    "fat": "3g",
    "id": 90629,
    "image": "https://spoonacular.com/recipeImages/90629-312x231.jpg",
    "imageType": "jpg",
    "protein": "1g",
    "title": "Baked Apples in White Wine"
  },
  {
    "calories": 226,
    "carbs": "33g",
    "fat": "10g",
    "id": 284420,
    "image": "https://spoonacular.com/recipeImages/284420-312x231.jpg",
    "imageType": "jpg",
    "protein": "2g",
    "title": "Chocolate Silk Pie with Marshmallow Meringue"
  }
]
```

<h3 id="search-recipes-by-nutrients-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="search-recipes-by-nutrients-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» calories|number|true|none|none|
|» carbs|string|true|none|none|
|» fat|string|true|none|none|
|» id|integer|true|none|none|
|» image|string|true|none|none|
|» imageType|string|true|none|none|
|» protein|string|true|none|none|
|» title|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyScheme
</aside>

## Guess Nutrition by Dish Name

<a id="opIdguessNutritionByDishName"></a>

> Code samples

```bash
curl 'https://example.com/recipes/guessNutrition?title=Spaghetti%20Aglio%20et%20Olio' \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}"
```

`GET /recipes/guessNutrition`

Estimate the macronutrients of a dish based on its title.

<a href="https://spoonacular.com/food-api/docs#Guess-Nutrition-by-Dish-Name">Read entire docs</a>

<h3 id="guess-nutrition-by-dish-name-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|title|query|string|true|The title of the dish.|

> Example responses

> 200 Response

```json
{
  "calories": {
    "confidenceRange95Percent": {
      "max": 574.07,
      "min": 389.92
    },
    "standardDeviation": 148.55,
    "unit": "calories",
    "value": 428
  },
  "carbs": {
    "confidenceRange95Percent": {
      "max": 78.19,
      "min": 55.54
    },
    "standardDeviation": 18.27,
    "unit": "g",
    "value": 65
  },
  "fat": {
    "confidenceRange95Percent": {
      "max": 19.2,
      "min": 12.27
    },
    "standardDeviation": 5.59,
    "unit": "g",
    "value": 16
  },
  "protein": {
    "confidenceRange95Percent": {
      "max": 29.31,
      "min": 8.12
    },
    "standardDeviation": 17.09,
    "unit": "g",
    "value": 13
  },
  "recipesUsed": 10
}
```

<h3 id="guess-nutrition-by-dish-name-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="guess-nutrition-by-dish-name-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|calories|object|true|none|none|
|» confidenceRange95Percent|object|true|none|none|
|» » max|number|true|none|none|
|» » min|number|true|none|none|
|» standardDeviation|number|true|none|none|
|» unit|string|true|none|none|
|» value|number|true|none|none|
|carbs|object|true|none|none|
|» confidenceRange95Percent|object|true|none|none|
|» » max|number|true|none|none|
|» » min|number|true|none|none|
|» standardDeviation|number|true|none|none|
|» unit|string|true|none|none|
|» value|number|true|none|none|
|fat|object|true|none|none|
|» confidenceRange95Percent|object|true|none|none|
|» » max|number|true|none|none|
|» » min|number|true|none|none|
|» standardDeviation|number|true|none|none|
|» unit|string|true|none|none|
|» value|number|true|none|none|
|protein|object|true|none|none|
|» confidenceRange95Percent|object|true|none|none|
|» » max|number|true|none|none|
|» » min|number|true|none|none|
|» standardDeviation|number|true|none|none|
|» unit|string|true|none|none|
|» value|number|true|none|none|
|recipesUsed|integer|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyScheme
</aside>

## Get Recipe Information Bulk

<a id="opIdgetRecipeInformationBulk"></a>

> Code samples

```bash
curl 'https://example.com/recipes/informationBulk?ids=715538%2C716429' \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}"
```

`GET /recipes/informationBulk`

Get information about multiple recipes at once. This is equivalent to calling the Get Recipe Information endpoint multiple times, but faster.

<a href="https://spoonacular.com/food-api/docs#Get-Recipe-Information-Bulk">Read entire docs</a>

<h3 id="get-recipe-information-bulk-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ids|query|string|true|A comma-separated list of recipe ids.|
|includeNutrition|query|boolean|false|Include nutrition data in the recipe information. Nutrition data is per serving. If you want the nutrition data for the entire recipe, just multiply by the number of servings.|

> Example responses

> 200 Response

```json
[
  {
    "aggregateLikes": 209,
    "analyzedInstructions": [],
    "cheap": false,
    "creditsText": "Full Belly Sisters",
    "cuisines": [],
    "dairyFree": false,
    "diets": [],
    "dishTypes": [
      "lunch",
      "main course",
      "main dish",
      "dinner"
    ],
    "extendedIngredients": [
      {
        "aisle": "Milk, Eggs, Other Dairy",
        "amount": 1,
        "consitency": "solid",
        "id": 1001,
        "image": "butter-sliced.jpg",
        "measures": {
          "metric": {
            "amount": 1,
            "unitLong": "Tbsp",
            "unitShort": "Tbsp"
          },
          "us": {
            "amount": 1,
            "unitLong": "Tbsp",
            "unitShort": "Tbsp"
          }
        },
        "meta": [],
        "name": "butter",
        "original": "1 tbsp butter",
        "originalName": "butter",
        "unit": "tbsp"
      },
      {
        "aisle": "Produce",
        "amount": 2,
        "consitency": "solid",
        "id": 10011135,
        "image": "cauliflower.jpg",
        "measures": {
          "metric": {
            "amount": 473.176,
            "unitLong": "milliliters",
            "unitShort": "ml"
          },
          "us": {
            "amount": 2,
            "unitLong": "cups",
            "unitShort": "cups"
          }
        },
        "meta": [
          "frozen",
          "thawed",
          "cut into bite-sized pieces"
        ],
        "name": "cauliflower florets",
        "original": "about 2 cups frozen cauliflower florets, thawed, cut into bite-sized pieces",
        "originalName": "about frozen cauliflower florets, thawed, cut into bite-sized pieces",
        "unit": "cups"
      },
      {
        "aisle": "Cheese",
        "amount": 2,
        "consitency": "solid",
        "id": 1041009,
        "image": "cheddar-cheese.png",
        "measures": {
          "metric": {
            "amount": 2,
            "unitLong": "Tbsps",
            "unitShort": "Tbsps"
          },
          "us": {
            "amount": 2,
            "unitLong": "Tbsps",
            "unitShort": "Tbsps"
          }
        },
        "meta": [
          "grated",
          "(I used romano)"
        ],
        "name": "cheese",
        "original": "2 tbsp grated cheese (I used romano)",
        "originalName": "grated cheese (I used romano)",
        "unit": "tbsp"
      },
      {
        "aisle": "Oil, Vinegar, Salad Dressing",
        "amount": 1,
        "consitency": "liquid",
        "id": 1034053,
        "image": "olive-oil.jpg",
        "measures": {
          "metric": {
            "amount": 1,
            "unitLong": "Tbsp",
            "unitShort": "Tbsp"
          },
          "us": {
            "amount": 1,
            "unitLong": "Tbsp",
            "unitShort": "Tbsp"
          }
        },
        "meta": [],
        "name": "extra virgin olive oil",
        "original": "1-2 tbsp extra virgin olive oil",
        "originalName": "extra virgin olive oil",
        "unit": "tbsp"
      },
      {
        "aisle": "Produce",
        "amount": 5,
        "consitency": "solid",
        "id": 11215,
        "image": "garlic.jpg",
        "measures": {
          "metric": {
            "amount": 5,
            "unitLong": "cloves",
            "unitShort": "cloves"
          },
          "us": {
            "amount": 5,
            "unitLong": "cloves",
            "unitShort": "cloves"
          }
        },
        "meta": [],
        "name": "garlic",
        "original": "5-6 cloves garlic",
        "originalName": "garlic",
        "unit": "cloves"
      },
      {
        "aisle": "Pasta and Rice",
        "amount": 6,
        "consitency": "solid",
        "id": 20420,
        "image": "fusilli.jpg",
        "measures": {
          "metric": {
            "amount": 170.097,
            "unitLong": "grams",
            "unitShort": "g"
          },
          "us": {
            "amount": 6,
            "unitLong": "ounces",
            "unitShort": "oz"
          }
        },
        "meta": [
          "(I used linguine)"
        ],
        "name": "pasta",
        "original": "6-8 ounces pasta (I used linguine)",
        "originalName": "pasta (I used linguine)",
        "unit": "ounces"
      },
      {
        "aisle": "Spices and Seasonings",
        "amount": 2,
        "consitency": "solid",
        "id": 1032009,
        "image": "red-pepper-flakes.jpg",
        "measures": {
          "metric": {
            "amount": 2,
            "unitLong": "pinches",
            "unitShort": "pinches"
          },
          "us": {
            "amount": 2,
            "unitLong": "pinches",
            "unitShort": "pinches"
          }
        },
        "meta": [
          "red"
        ],
        "name": "red pepper flakes",
        "original": "couple of pinches red pepper flakes, optional",
        "originalName": "couple of red pepper flakes, optional",
        "unit": "pinches"
      },
      {
        "aisle": "Spices and Seasonings",
        "amount": 2,
        "consitency": "solid",
        "id": 1102047,
        "image": "salt-and-pepper.jpg",
        "measures": {
          "metric": {
            "amount": 2,
            "unitLong": "servings",
            "unitShort": "servings"
          },
          "us": {
            "amount": 2,
            "unitLong": "servings",
            "unitShort": "servings"
          }
        },
        "meta": [
          "to taste"
        ],
        "name": "salt and pepper",
        "original": "salt and pepper, to taste",
        "originalName": "salt and pepper, to taste",
        "unit": "servings"
      },
      {
        "aisle": "Produce",
        "amount": 3,
        "consitency": "solid",
        "id": 11291,
        "image": "spring-onions.jpg",
        "measures": {
          "metric": {
            "amount": 3,
            "unitLong": "",
            "unitShort": ""
          },
          "us": {
            "amount": 3,
            "unitLong": "",
            "unitShort": ""
          }
        },
        "meta": [
          "white",
          "green",
          "separated",
          "chopped"
        ],
        "name": "scallions",
        "original": "3 scallions, chopped, white and green parts separated",
        "originalName": "scallions, chopped, white and green parts separated",
        "unit": ""
      },
      {
        "aisle": "Alcoholic Beverages",
        "amount": 2,
        "consitency": "liquid",
        "id": 14106,
        "image": "white-wine.jpg",
        "measures": {
          "metric": {
            "amount": 2,
            "unitLong": "Tbsps",
            "unitShort": "Tbsps"
          },
          "us": {
            "amount": 2,
            "unitLong": "Tbsps",
            "unitShort": "Tbsps"
          }
        },
        "meta": [
          "white"
        ],
        "name": "white wine",
        "original": "2-3 tbsp white wine",
        "originalName": "white wine",
        "unit": "tbsp"
      },
      {
        "aisle": "Pasta and Rice",
        "amount": 0.25,
        "consitency": "solid",
        "id": 99025,
        "image": "breadcrumbs.jpg",
        "measures": {
          "metric": {
            "amount": 59.147,
            "unitLong": "milliliters",
            "unitShort": "ml"
          },
          "us": {
            "amount": 0.25,
            "unitLong": "cups",
            "unitShort": "cups"
          }
        },
        "meta": [
          "whole wheat",
          "(I used panko)"
        ],
        "name": "whole wheat bread crumbs",
        "original": "1/4 cup whole wheat bread crumbs (I used panko)",
        "originalName": "whole wheat bread crumbs (I used panko)",
        "unit": "cup"
      }
    ],
    "gaps": "no",
    "glutenFree": false,
    "healthScore": 19,
    "id": 716429,
    "image": "https://spoonacular.com/recipeImages/716429-556x370.jpg",
    "imageType": "jpg",
    "instructions": "",
    "ketogenic": false,
    "license": "CC BY-SA 3.0",
    "lowFodmap": false,
    "occasions": [],
    "pricePerServing": 163.15,
    "readyInMinutes": 45,
    "servings": 2,
    "sourceName": "Full Belly Sisters",
    "sourceUrl": "http://fullbellysisters.blogspot.com/2012/06/pasta-with-garlic-scallions-cauliflower.html",
    "spoonacularScore": 83,
    "spoonacularSourceUrl": "https://spoonacular.com/pasta-with-garlic-scallions-cauliflower-breadcrumbs-716429",
    "summary": "Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs might be a good recipe to expand your main course repertoire. One portion of this dish contains approximately &lt;b&gt;19g of protein &lt;/b&gt;,  &lt;b&gt;20g of fat &lt;/b&gt;, and a total of  &lt;b&gt;584 calories &lt;/b&gt;. For  &lt;b&gt;$1.63 per serving &lt;/b&gt;, this recipe  &lt;b&gt;covers 23% &lt;/b&gt; of your daily requirements of vitamins and minerals. This recipe serves 2. It is brought to you by fullbellysisters.blogspot.com. 209 people were glad they tried this recipe. A mixture of scallions, salt and pepper, white wine, and a handful of other ingredients are all it takes to make this recipe so scrumptious. From preparation to the plate, this recipe takes approximately  &lt;b&gt;45 minutes &lt;/b&gt;. All things considered, we decided this recipe  &lt;b&gt;deserves a spoonacular score of 83% &lt;/b&gt;. This score is awesome. If you like this recipe, take a look at these similar recipes: &lt;a href=\"https://spoonacular.com/recipes/cauliflower-gratin-with-garlic-breadcrumbs-318375\">Cauliflower Gratin with Garlic Breadcrumbs&lt;/a&gt;, &lt; href=\"https://spoonacular.com/recipes/pasta-with-cauliflower-sausage-breadcrumbs-30437\">Pasta With Cauliflower, Sausage, & Breadcrumbs&lt;/a&gt;, and &lt;a href=\"https://spoonacular.com/recipes/pasta-with-roasted-cauliflower-parsley-and-breadcrumbs-30738\">Pasta With Roasted Cauliflower, Parsley, And Breadcrumbs&lt;/a&gt;.",
    "sustainable": false,
    "title": "Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs",
    "vegan": false,
    "vegetarian": false,
    "veryHealthy": false,
    "veryPopular": false,
    "weightWatcherSmartPoints": 17,
    "whole30": false,
    "winePairing": {
      "pairedWines": [
        "chardonnay",
        "gruener veltliner",
        "sauvignon blanc"
      ],
      "pairingText": "Chardonnay, Gruener Veltliner, and Sauvignon Blanc are great choices for Pasta. Sauvignon Blanc and Gruner Veltliner both have herby notes that complement salads with enough acid to match tart vinaigrettes, while a Chardonnay can be a good pick for creamy salad dressings. The Buddha Kat Winery Chardonnay with a 4 out of 5 star rating seems like a good match. It costs about 25 dollars per bottle.",
      "productMatches": [
        {
          "averageRating": 0.8,
          "description": "We barrel ferment our Chardonnay and age it in a mix of Oak and Stainless. Giving this light bodied wine modest oak character, a delicate floral aroma, and a warming finish.",
          "id": 469199,
          "imageUrl": "https://spoonacular.com/productImages/469199-312x231.jpg",
          "link": "https://www.amazon.com/2015-Buddha-Kat-Winery-Chardonnay/dp/B00OSAVVM4?tag=spoonacular-20",
          "price": "$25.0",
          "ratingCount": 1,
          "score": 0.55,
          "title": "Buddha Kat Winery Chardonnay"
        }
      ]
    }
  }
]
```

<h3 id="get-recipe-information-bulk-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="get-recipe-information-bulk-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» aggregateLikes|integer|true|none|none|
|» analyzedInstructions|[string]|true|none|none|
|» cheap|boolean|true|none|none|
|» creditsText|string|true|none|none|
|» cuisines|[string]|true|none|none|
|» dairyFree|boolean|true|none|none|
|» diets|[string]|true|none|none|
|» dishTypes|[string]|true|none|none|
|» extendedIngredients|[object]|true|none|none|
|» » aisle|string|true|none|none|
|» » amount|number|true|none|none|
|» » consitency|string|true|none|none|
|» » id|integer|true|none|none|
|» » image|string|true|none|none|
|» » measures|object|false|none|none|
|» » » metric|object|true|none|none|
|» » » » amount|number|true|none|none|
|» » » » unitLong|string|true|none|none|
|» » » » unitShort|string|true|none|none|
|» » » us|object|true|none|none|
|» » » » amount|number|true|none|none|
|» » » » unitLong|string|true|none|none|
|» » » » unitShort|string|true|none|none|
|» » meta|[string]|false|none|none|
|» » name|string|true|none|none|
|» » original|string|true|none|none|
|» » originalName|string|true|none|none|
|» » unit|string|true|none|none|
|» gaps|string|true|none|none|
|» glutenFree|boolean|true|none|none|
|» healthScore|number|true|none|none|
|» id|integer|true|none|none|
|» image|string|true|none|none|
|» imageType|string|true|none|none|
|» instructions|string|true|none|none|
|» ketogenic|boolean|true|none|none|
|» license|string|true|none|none|
|» lowFodmap|boolean|true|none|none|
|» occasions|[string]|true|none|none|
|» pricePerServing|number|true|none|none|
|» readyInMinutes|integer|true|none|none|
|» servings|number|true|none|none|
|» sourceName|string|true|none|none|
|» sourceUrl|string|true|none|none|
|» spoonacularScore|number|true|none|none|
|» spoonacularSourceUrl|string|true|none|none|
|» summary|string|true|none|none|
|» sustainable|boolean|true|none|none|
|» title|string|true|none|none|
|» vegan|boolean|true|none|none|
|» vegetarian|boolean|true|none|none|
|» veryHealthy|boolean|true|none|none|
|» veryPopular|boolean|true|none|none|
|» weightWatcherSmartPoints|number|true|none|none|
|» whole30|boolean|true|none|none|
|» winePairing|object|true|none|none|
|» » pairedWines|[string]|true|none|none|
|» » pairingText|string|true|none|none|
|» » productMatches|[object]|true|none|none|
|» » » averageRating|number|true|none|none|
|» » » description|string|true|none|none|
|» » » id|integer|true|none|none|
|» » » imageUrl|string|true|none|none|
|» » » link|string|true|none|none|
|» » » price|string|true|none|none|
|» » » ratingCount|integer|true|none|none|
|» » » score|number|true|none|none|
|» » » title|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyScheme
</aside>

## Parse Ingredients

<a id="opIdparseIngredients"></a>

> Code samples

```bash
curl https://example.com/recipes/parseIngredients \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}"
```

`POST /recipes/parseIngredients`

Extract an ingredient from plain text.

<a href="https://spoonacular.com/food-api/docs#Parse-Ingredients">Read entire docs</a>

> Body parameter

```yaml
"ingredientList=1 cup green tea&servings=1"
```

<h3 id="parse-ingredients-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|false|The content type.|
|language|query|string|false|The language of the input. Either 'en' or 'de'.|
|body|body|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Content-Type|application/x-www-form-urlencoded|
|Content-Type|application/json|
|Content-Type|multipart/form-data|
|language|en|
|language|de|

> Example responses

> 200 Response

```json
[
  {
    "aisle": "Tea and Coffee",
    "amount": 1,
    "consistency": "solid",
    "estimatedCost": {
      "unit": "US Cents",
      "value": 1786.86
    },
    "id": 10014355,
    "image": "green-tea-leaves.jpg",
    "meta": [
      "green"
    ],
    "name": "tea",
    "nameClean": "green tea",
    "nutrition": {
      "caloricBreakdown": {
        "percentCarbs": 100,
        "percentFat": 0,
        "percentProtein": 0
      },
      "flavonoids": [
        {
          "amount": 0,
          "name": "Cyanidin",
          "unit": ""
        },
        {
          "amount": 0,
          "name": "Petunidin",
          "unit": ""
        },
        {
          "amount": 0,
          "name": "Delphinidin",
          "unit": ""
        },
        {
          "amount": 0,
          "name": "Malvidin",
          "unit": ""
        },
        {
          "amount": 0,
          "name": "Pelargonidin",
          "unit": ""
        },
        {
          "amount": 0,
          "name": "Peonidin",
          "unit": ""
        },
        {
          "amount": 3.56,
          "name": "Catechin",
          "unit": "mg"
        },
        {
          "amount": 19,
          "name": "Epigallocatechin",
          "unit": "mg"
        },
        {
          "amount": 5.03,
          "name": "Epicatechin",
          "unit": "mg"
        },
        {
          "amount": 13.83,
          "name": "Epicatechin 3-gallate",
          "unit": "mg"
        },
        {
          "amount": 22.09,
          "name": "Epigallocatechin 3-gallate",
          "unit": "mg"
        },
        {
          "amount": 3.73,
          "name": "Theaflavin",
          "unit": "mg"
        },
        {
          "amount": 191.87,
          "name": "Thearubigins",
          "unit": "mg"
        },
        {
          "amount": 0,
          "name": "Eriodictyol",
          "unit": ""
        },
        {
          "amount": 0,
          "name": "Hesperetin",
          "unit": ""
        },
        {
          "amount": 0,
          "name": "Naringenin",
          "unit": ""
        },
        {
          "amount": 0,
          "name": "Apigenin",
          "unit": "mg"
        },
        {
          "amount": 0,
          "name": "Luteolin",
          "unit": "mg"
        },
        {
          "amount": 0,
          "name": "Isorhamnetin",
          "unit": ""
        },
        {
          "amount": 3.33,
          "name": "Kaempferol",
          "unit": "mg"
        },
        {
          "amount": 1.06,
          "name": "Myricetin",
          "unit": "mg"
        },
        {
          "amount": 5.17,
          "name": "Quercetin",
          "unit": "mg"
        },
        {
          "amount": 4.13,
          "name": "Theaflavin-3,3'-digallate",
          "unit": "mg"
        },
        {
          "amount": 3.56,
          "name": "Theaflavin-3'-gallate",
          "unit": "mg"
        },
        {
          "amount": 0,
          "name": "Theaflavin-3-gallate",
          "unit": ""
        },
        {
          "amount": 2.95,
          "name": "Gallocatechin",
          "unit": "mg"
        }
      ],
      "nutrients": [
        {
          "amount": 2.36,
          "name": "Calories",
          "percentOfDailyNeeds": 0.12,
          "unit": "kcal"
        },
        {
          "amount": 0,
          "name": "Fat",
          "percentOfDailyNeeds": 0,
          "unit": "g"
        },
        {
          "amount": 0,
          "name": "Saturated Fat",
          "percentOfDailyNeeds": 0.03,
          "unit": "g"
        },
        {
          "amount": 0.71,
          "name": "Carbohydrates",
          "percentOfDailyNeeds": 0.24,
          "unit": "g"
        },
        {
          "amount": 0.71,
          "name": "Net Carbohydrates",
          "percentOfDailyNeeds": 0.26,
          "unit": "g"
        },
        {
          "amount": 0,
          "name": "Sugar",
          "percentOfDailyNeeds": 0,
          "unit": "g"
        },
        {
          "amount": 0,
          "name": "Cholesterol",
          "percentOfDailyNeeds": 0,
          "unit": "mg"
        },
        {
          "amount": 7.08,
          "name": "Sodium",
          "percentOfDailyNeeds": 0.31,
          "unit": "mg"
        },
        {
          "amount": 47.2,
          "name": "Caffeine",
          "percentOfDailyNeeds": 15.73,
          "unit": "mg"
        },
        {
          "amount": 0,
          "name": "Protein",
          "percentOfDailyNeeds": 0,
          "unit": "g"
        },
        {
          "amount": 0.52,
          "name": "Manganese",
          "percentOfDailyNeeds": 25.84,
          "unit": "mg"
        },
        {
          "amount": 11.8,
          "name": "Folate",
          "percentOfDailyNeeds": 2.95,
          "unit": "µg"
        },
        {
          "amount": 87.32,
          "name": "Potassium",
          "percentOfDailyNeeds": 2.49,
          "unit": "mg"
        },
        {
          "amount": 0.03,
          "name": "Vitamin B2",
          "percentOfDailyNeeds": 1.94,
          "unit": "mg"
        },
        {
          "amount": 7.08,
          "name": "Magnesium",
          "percentOfDailyNeeds": 1.77,
          "unit": "mg"
        },
        {
          "amount": 0.02,
          "name": "Copper",
          "percentOfDailyNeeds": 1.18,
          "unit": "mg"
        }
      ],
      "properties": [
        {
          "amount": 0,
          "name": "Glycemic Index",
          "unit": ""
        },
        {
          "amount": 0,
          "name": "Glycemic Load",
          "unit": ""
        }
      ],
      "weightPerServing": {
        "amount": 236,
        "unit": "g"
      }
    },
    "original": "1 cup green tea",
    "originalName": "green tea",
    "possibleUnits": [
      "g",
      "oz",
      "fluid ounce",
      "cup"
    ],
    "unit": "cup",
    "unitLong": "cup",
    "unitShort": "cup"
  }
]
```

<h3 id="parse-ingredients-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="parse-ingredients-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» aisle|string|true|none|none|
|» amount|number|true|none|none|
|» consistency|string|true|none|none|
|» estimatedCost|object|true|none|none|
|» » unit|string|true|none|none|
|» » value|number|true|none|none|
|» id|integer|true|none|none|
|» image|string|true|none|none|
|» meta|[string]|true|none|none|
|» name|string|true|none|none|
|» nameClean|string|true|none|none|
|» nutrition|object|true|none|none|
|» » caloricBreakdown|object|true|none|none|
|» » » percentCarbs|number|true|none|none|
|» » » percentFat|number|true|none|none|
|» » » percentProtein|number|true|none|none|
|» » flavonoids|[object]|true|none|none|
|» » » amount|number|true|none|none|
|» » » name|string|true|none|none|
|» » » unit|string|true|none|none|
|» » nutrients|[object]|true|none|none|
|» » » amount|number|true|none|none|
|» » » name|string|true|none|none|
|» » » percentOfDailyNeeds|number|true|none|none|
|» » » unit|string|true|none|none|
|» » properties|[object]|true|none|none|
|» » » amount|number|true|none|none|
|» » » name|string|true|none|none|
|» » » unit|string|true|none|none|
|» » weightPerServing|object|true|none|none|
|» » » amount|number|true|none|none|
|» » » unit|string|true|none|none|
|» original|string|true|none|none|
|» originalName|string|true|none|none|
|» possibleUnits|[string]|true|none|none|
|» unit|string|true|none|none|
|» unitLong|string|true|none|none|
|» unitShort|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyScheme
</aside>

## Analyze a Recipe Search Query

<a id="opIdanalyzeARecipeSearchQuery"></a>

> Code samples

```bash
curl 'https://example.com/recipes/queries/analyze?q=salmon%20with%20fusilli%20and%20no%20nuts' \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}"
```

`GET /recipes/queries/analyze`

Parse a recipe search query to find out its intention.

<a href="https://spoonacular.com/food-api/docs#Analyze-a-Recipe-Search-Query">Read entire docs</a>

<h3 id="analyze-a-recipe-search-query-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|q|query|string|true|The recipe search query.|

> Example responses

> 200 Response

```json
{
  "cuisines": [],
  "dishes": [
    {
      "image": "https://spoonacular.com/cdn/ingredients_100x100/salmon.png",
      "name": "salmon"
    }
  ],
  "ingredients": [
    {
      "image": "fusilli.jpg",
      "include": true,
      "name": "fusilli"
    },
    {
      "image": "nuts-mixed.jpg",
      "include": false,
      "name": "nuts mixed"
    }
  ],
  "modifiers": []
}
```

<h3 id="analyze-a-recipe-search-query-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="analyze-a-recipe-search-query-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cuisines|[string]|true|none|none|
|dishes|[object]|true|none|none|
|» image|string|true|none|none|
|» name|string|true|none|none|
|ingredients|[object]|true|none|none|
|» image|string|true|none|none|
|» include|boolean|true|none|none|
|» name|string|true|none|none|
|modifiers|[string]|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyScheme
</aside>

## Quick Answer

<a id="opIdquickAnswer"></a>

> Code samples

```bash
curl 'https://example.com/recipes/quickAnswer?q=How%20much%20vitamin%20c%20is%20in%202%20apples%3F' \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}"
```

`GET /recipes/quickAnswer`

Answer a nutrition related natural language question.

<a href="https://spoonacular.com/food-api/docs#Quick-Answer">Read entire docs</a>

<h3 id="quick-answer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|q|query|string|true|The nutrition related question.|

> Example responses

> 200 Response

```json
{
  "answer": "There are 16.74 mg of Vitamin C in 2 apples. This covers about 20% of your daily needs of Vitamin C.",
  "image": "https://spoonacular.com/cdn/ingredients_100x100/apple.jpg"
}
```

<h3 id="quick-answer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="quick-answer-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|answer|string|true|none|none|
|image|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyScheme
</aside>

## Get Random Recipes

<a id="opIdgetRandomRecipes"></a>

> Code samples

```bash
curl https://example.com/recipes/random \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}"
```

`GET /recipes/random`

Find random (popular) recipes. If you need to filter recipes by diet, nutrition etc. you might want to consider using the complex recipe search endpoint and set the sort request parameter to random.

<a href="https://spoonacular.com/food-api/docs#Get-Random-Recipes">Read entire docs</a>

<h3 id="get-random-recipes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limitLicense|query|boolean|false|Whether the recipes should have an open license that allows display with proper attribution.|
|tags|query|string|false|The tags (can be diets, meal types, cuisines, or intolerances) that the recipe must have.|
|number|query|integer|false|The maximum number of items to return (between 1 and 100). Defaults to 10.|

> Example responses

> 200 Response

```json
{
  "recipes": [
    {
      "aggregateLikes": 209,
      "analyzedInstructions": [],
      "cheap": false,
      "creditsText": "Full Belly Sisters",
      "cuisines": [],
      "dairyFree": false,
      "diets": [],
      "dishTypes": [
        "lunch",
        "main course",
        "main dish",
        "dinner"
      ],
      "extendedIngredients": [
        {
          "aisle": "Milk, Eggs, Other Dairy",
          "amount": 1,
          "consitency": "solid",
          "id": 1001,
          "image": "butter-sliced.jpg",
          "measures": {
            "metric": {
              "amount": 1,
              "unitLong": "Tbsp",
              "unitShort": "Tbsp"
            },
            "us": {
              "amount": 1,
              "unitLong": "Tbsp",
              "unitShort": "Tbsp"
            }
          },
          "meta": [],
          "name": "butter",
          "original": "1 tbsp butter",
          "originalName": "butter",
          "unit": "tbsp"
        },
        {
          "aisle": "Produce",
          "amount": 2,
          "consitency": "solid",
          "id": 10011135,
          "image": "cauliflower.jpg",
          "measures": {
            "metric": {
              "amount": 473.176,
              "unitLong": "milliliters",
              "unitShort": "ml"
            },
            "us": {
              "amount": 2,
              "unitLong": "cups",
              "unitShort": "cups"
            }
          },
          "meta": [
            "frozen",
            "thawed",
            "cut into bite-sized pieces"
          ],
          "name": "cauliflower florets",
          "original": "about 2 cups frozen cauliflower florets, thawed, cut into bite-sized pieces",
          "originalName": "about frozen cauliflower florets, thawed, cut into bite-sized pieces",
          "unit": "cups"
        },
        {
          "aisle": "Cheese",
          "amount": 2,
          "consitency": "solid",
          "id": 1041009,
          "image": "cheddar-cheese.png",
          "measures": {
            "metric": {
              "amount": 2,
              "unitLong": "Tbsps",
              "unitShort": "Tbsps"
            },
            "us": {
              "amount": 2,
              "unitLong": "Tbsps",
              "unitShort": "Tbsps"
            }
          },
          "meta": [
            "grated",
            "(I used romano)"
          ],
          "name": "cheese",
          "original": "2 tbsp grated cheese (I used romano)",
          "originalName": "grated cheese (I used romano)",
          "unit": "tbsp"
        },
        {
          "aisle": "Oil, Vinegar, Salad Dressing",
          "amount": 1,
          "consitency": "liquid",
          "id": 1034053,
          "image": "olive-oil.jpg",
          "measures": {
            "metric": {
              "amount": 1,
              "unitLong": "Tbsp",
              "unitShort": "Tbsp"
            },
            "us": {
              "amount": 1,
              "unitLong": "Tbsp",
              "unitShort": "Tbsp"
            }
          },
          "meta": [],
          "name": "extra virgin olive oil",
          "original": "1-2 tbsp extra virgin olive oil",
          "originalName": "extra virgin olive oil",
          "unit": "tbsp"
        },
        {
          "aisle": "Produce",
          "amount": 5,
          "consitency": "solid",
          "id": 11215,
          "image": "garlic.jpg",
          "measures": {
            "metric": {
              "amount": 5,
              "unitLong": "cloves",
              "unitShort": "cloves"
            },
            "us": {
              "amount": 5,
              "unitLong": "cloves",
              "unitShort": "cloves"
            }
          },
          "meta": [],
          "name": "garlic",
          "original": "5-6 cloves garlic",
          "originalName": "garlic",
          "unit": "cloves"
        },
        {
          "aisle": "Pasta and Rice",
          "amount": 6,
          "consitency": "solid",
          "id": 20420,
          "image": "fusilli.jpg",
          "measures": {
            "metric": {
              "amount": 170.097,
              "unitLong": "grams",
              "unitShort": "g"
            },
            "us": {
              "amount": 6,
              "unitLong": "ounces",
              "unitShort": "oz"
            }
          },
          "meta": [
            "(I used linguine)"
          ],
          "name": "pasta",
          "original": "6-8 ounces pasta (I used linguine)",
          "originalName": "pasta (I used linguine)",
          "unit": "ounces"
        },
        {
          "aisle": "Spices and Seasonings",
          "amount": 2,
          "consitency": "solid",
          "id": 1032009,
          "image": "red-pepper-flakes.jpg",
          "measures": {
            "metric": {
              "amount": 2,
              "unitLong": "pinches",
              "unitShort": "pinches"
            },
            "us": {
              "amount": 2,
              "unitLong": "pinches",
              "unitShort": "pinches"
            }
          },
          "meta": [
            "red"
          ],
          "name": "red pepper flakes",
          "original": "couple of pinches red pepper flakes, optional",
          "originalName": "couple of red pepper flakes, optional",
          "unit": "pinches"
        },
        {
          "aisle": "Spices and Seasonings",
          "amount": 2,
          "consitency": "solid",
          "id": 1102047,
          "image": "salt-and-pepper.jpg",
          "measures": {
            "metric": {
              "amount": 2,
              "unitLong": "servings",
              "unitShort": "servings"
            },
            "us": {
              "amount": 2,
              "unitLong": "servings",
              "unitShort": "servings"
            }
          },
          "meta": [
            "to taste"
          ],
          "name": "salt and pepper",
          "original": "salt and pepper, to taste",
          "originalName": "salt and pepper, to taste",
          "unit": "servings"
        },
        {
          "aisle": "Produce",
          "amount": 3,
          "consitency": "solid",
          "id": 11291,
          "image": "spring-onions.jpg",
          "measures": {
            "metric": {
              "amount": 3,
              "unitLong": "",
              "unitShort": ""
            },
            "us": {
              "amount": 3,
              "unitLong": "",
              "unitShort": ""
            }
          },
          "meta": [
            "white",
            "green",
            "separated",
            "chopped"
          ],
          "name": "scallions",
          "original": "3 scallions, chopped, white and green parts separated",
          "originalName": "scallions, chopped, white and green parts separated",
          "unit": ""
        },
        {
          "aisle": "Alcoholic Beverages",
          "amount": 2,
          "consitency": "liquid",
          "id": 14106,
          "image": "white-wine.jpg",
          "measures": {
            "metric": {
              "amount": 2,
              "unitLong": "Tbsps",
              "unitShort": "Tbsps"
            },
            "us": {
              "amount": 2,
              "unitLong": "Tbsps",
              "unitShort": "Tbsps"
            }
          },
          "meta": [
            "white"
          ],
          "name": "white wine",
          "original": "2-3 tbsp white wine",
          "originalName": "white wine",
          "unit": "tbsp"
        },
        {
          "aisle": "Pasta and Rice",
          "amount": 0.25,
          "consitency": "solid",
          "id": 99025,
          "image": "breadcrumbs.jpg",
          "measures": {
            "metric": {
              "amount": 59.147,
              "unitLong": "milliliters",
              "unitShort": "ml"
            },
            "us": {
              "amount": 0.25,
              "unitLong": "cups",
              "unitShort": "cups"
            }
          },
          "meta": [
            "whole wheat",
            "(I used panko)"
          ],
          "name": "whole wheat bread crumbs",
          "original": "1/4 cup whole wheat bread crumbs (I used panko)",
          "originalName": "whole wheat bread crumbs (I used panko)",
          "unit": "cup"
        }
      ],
      "gaps": "no",
      "glutenFree": false,
      "healthScore": 19,
      "id": 716429,
      "image": "https://spoonacular.com/recipeImages/716429-556x370.jpg",
      "imageType": "jpg",
      "instructions": "",
      "ketogenic": false,
      "license": "CC BY-SA 3.0",
      "lowFodmap": false,
      "occasions": [],
      "pricePerServing": 163.15,
      "readyInMinutes": 45,
      "servings": 2,
      "sourceName": "Full Belly Sisters",
      "sourceUrl": "http://fullbellysisters.blogspot.com/2012/06/pasta-with-garlic-scallions-cauliflower.html",
      "spoonacularScore": 83,
      "spoonacularSourceUrl": "https://spoonacular.com/pasta-with-garlic-scallions-cauliflower-breadcrumbs-716429",
      "summary": "Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs might be a good recipe to expand your main course repertoire. One portion of this dish contains approximately &lt;b&gt;19g of protein &lt;/b&gt;,  &lt;b&gt;20g of fat &lt;/b&gt;, and a total of  &lt;b&gt;584 calories &lt;/b&gt;. For  &lt;b&gt;$1.63 per serving &lt;/b&gt;, this recipe  &lt;b&gt;covers 23% &lt;/b&gt; of your daily requirements of vitamins and minerals. This recipe serves 2. It is brought to you by fullbellysisters.blogspot.com. 209 people were glad they tried this recipe. A mixture of scallions, salt and pepper, white wine, and a handful of other ingredients are all it takes to make this recipe so scrumptious. From preparation to the plate, this recipe takes approximately  &lt;b&gt;45 minutes &lt;/b&gt;. All things considered, we decided this recipe  &lt;b&gt;deserves a spoonacular score of 83% &lt;/b&gt;. This score is awesome. If you like this recipe, take a look at these similar recipes: &lt;a href=\"https://spoonacular.com/recipes/cauliflower-gratin-with-garlic-breadcrumbs-318375\">Cauliflower Gratin with Garlic Breadcrumbs&lt;/a&gt;, &lt; href=\"https://spoonacular.com/recipes/pasta-with-cauliflower-sausage-breadcrumbs-30437\">Pasta With Cauliflower, Sausage, & Breadcrumbs&lt;/a&gt;, and &lt;a href=\"https://spoonacular.com/recipes/pasta-with-roasted-cauliflower-parsley-and-breadcrumbs-30738\">Pasta With Roasted Cauliflower, Parsley, And Breadcrumbs&lt;/a&gt;.",
      "sustainable": false,
      "title": "Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs",
      "vegan": false,
      "vegetarian": false,
      "veryHealthy": false,
      "veryPopular": false,
      "weightWatcherSmartPoints": 17,
      "whole30": false,
      "winePairing": {
        "pairedWines": [
          "chardonnay",
          "gruener veltliner",
          "sauvignon blanc"
        ],
        "pairingText": "Chardonnay, Gruener Veltliner, and Sauvignon Blanc are great choices for Pasta. Sauvignon Blanc and Gruner Veltliner both have herby notes that complement salads with enough acid to match tart vinaigrettes, while a Chardonnay can be a good pick for creamy salad dressings. The Buddha Kat Winery Chardonnay with a 4 out of 5 star rating seems like a good match. It costs about 25 dollars per bottle.",
        "productMatches": [
          {
            "averageRating": 0.8,
            "description": "We barrel ferment our Chardonnay and age it in a mix of Oak and Stainless. Giving this light bodied wine modest oak character, a delicate floral aroma, and a warming finish.",
            "id": 469199,
            "imageUrl": "https://spoonacular.com/productImages/469199-312x231.jpg",
            "link": "https://www.amazon.com/2015-Buddha-Kat-Winery-Chardonnay/dp/B00OSAVVM4?tag=spoonacular-20",
            "price": "$25.0",
            "ratingCount": 1,
            "score": 0.55,
            "title": "Buddha Kat Winery Chardonnay"
          }
        ]
      }
    }
  ]
}
```

<h3 id="get-random-recipes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="get-random-recipes-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|recipes|[object]|true|none|none|
|» aggregateLikes|number|true|none|none|
|» analyzedInstructions|[object]|false|none|none|
|» cheap|boolean|true|none|none|
|» creditsText|string|true|none|none|
|» cuisines|[string]|false|none|none|
|» dairyFree|boolean|true|none|none|
|» diets|[string]|false|none|none|
|» dishTypes|[string]|false|none|none|
|» extendedIngredients|[object]|false|none|none|
|» » aisle|string|true|none|none|
|» » amount|number|true|none|none|
|» » consitency|string|true|none|none|
|» » id|integer|true|none|none|
|» » image|string|true|none|none|
|» » measures|object|false|none|none|
|» » » metric|object|true|none|none|
|» » » » amount|number|true|none|none|
|» » » » unitLong|string|true|none|none|
|» » » » unitShort|string|true|none|none|
|» » » us|object|true|none|none|
|» » » » amount|number|true|none|none|
|» » » » unitLong|string|true|none|none|
|» » » » unitShort|string|true|none|none|
|» » meta|[string]|false|none|none|
|» » name|string|true|none|none|
|» » original|string|true|none|none|
|» » originalName|string|true|none|none|
|» » unit|string|true|none|none|
|» gaps|string|true|none|none|
|» glutenFree|boolean|true|none|none|
|» healthScore|number|true|none|none|
|» id|integer|true|none|none|
|» image|string|true|none|none|
|» imageType|string|true|none|none|
|» instructions|string|true|none|none|
|» ketogenic|boolean|true|none|none|
|» license|string|true|none|none|
|» lowFodmap|boolean|true|none|none|
|» occasions|[string]|false|none|none|
|» pricePerServing|number|true|none|none|
|» readyInMinutes|integer|true|none|none|
|» servings|number|true|none|none|
|» sourceName|string|true|none|none|
|» sourceUrl|string|true|none|none|
|» spoonacularScore|number|true|none|none|
|» spoonacularSourceUrl|string|true|none|none|
|» summary|string|true|none|none|
|» sustainable|boolean|true|none|none|
|» title|string|true|none|none|
|» vegan|boolean|true|none|none|
|» vegetarian|boolean|true|none|none|
|» veryHealthy|boolean|true|none|none|
|» veryPopular|boolean|true|none|none|
|» weightWatcherSmartPoints|number|true|none|none|
|» whole30|boolean|true|none|none|
|» winePairing|object|false|none|none|
|» » pairedWines|[string]|true|none|none|
|» » pairingText|string|true|none|none|
|» » productMatches|[object]|true|none|none|
|» » » averageRating|number|true|none|none|
|» » » description|string|true|none|none|
|» » » id|integer|true|none|none|
|» » » imageUrl|string|true|none|none|
|» » » link|string|true|none|none|
|» » » price|string|true|none|none|
|» » » ratingCount|integer|true|none|none|
|» » » score|number|true|none|none|
|» » » title|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyScheme
</aside>

## Equipment Widget

<a id="opIdvisualizeEquipment"></a>

> Code samples

```bash
curl https://example.com/recipes/visualizeEquipment \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H "x-api-key: ${API_KEY}"
```

`POST /recipes/visualizeEquipment`

Visualize the equipment used to make a recipe.

<a href="https://spoonacular.com/food-api/docs#Equipment-Widget">Read entire docs</a>

> Body parameter

```yaml
"instructions=Preheat oven. Cut cucumber with a knife and put in a blender."
```

<h3 id="equipment-widget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|false|The content type.|
|Accept|header|string|false|Accept header.|
|body|body|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Content-Type|application/x-www-form-urlencoded|
|Content-Type|application/json|
|Content-Type|multipart/form-data|
|Accept|application/json|
|Accept|text/html|
|Accept|media/*|

<h3 id="equipment-widget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyScheme
</aside>

## Recipe Nutrition Widget

<a id="opIdvisualizeRecipeNutrition"></a>

> Code samples

```bash
curl https://example.com/recipes/visualizeNutrition \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H "x-api-key: ${API_KEY}"
```

`POST /recipes/visualizeNutrition`

Visualize a recipe's nutritional information as HTML including CSS.

<a href="https://spoonacular.com/food-api/docs#Recipe-Nutrition-Widget">Read entire docs</a>

> Body parameter

```yaml
"ingredientList=3 oz flour&servings=2"
```

<h3 id="recipe-nutrition-widget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|false|The content type.|
|Accept|header|string|false|Accept header.|
|language|query|string|false|The language of the input. Either 'en' or 'de'.|
|body|body|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Content-Type|application/x-www-form-urlencoded|
|Content-Type|application/json|
|Content-Type|multipart/form-data|
|Accept|application/json|
|Accept|text/html|
|Accept|media/*|
|language|en|
|language|de|

<h3 id="recipe-nutrition-widget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyScheme
</aside>

## Price Breakdown Widget

<a id="opIdvisualizePriceBreakdown"></a>

> Code samples

```bash
curl https://example.com/recipes/visualizePriceEstimator \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H "x-api-key: ${API_KEY}"
```

`POST /recipes/visualizePriceEstimator`

Visualize the price breakdown of a recipe.

<a href="https://spoonacular.com/food-api/docs#Price-Breakdown-Widget">Read entire docs</a>

> Body parameter

```yaml
"ingredientList=3 oz flour&servings=2"
```

<h3 id="price-breakdown-widget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|false|The content type.|
|Accept|header|string|false|Accept header.|
|language|query|string|false|The language of the input. Either 'en' or 'de'.|
|body|body|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Content-Type|application/x-www-form-urlencoded|
|Content-Type|application/json|
|Content-Type|multipart/form-data|
|Accept|application/json|
|Accept|text/html|
|Accept|media/*|
|language|en|
|language|de|

<h3 id="price-breakdown-widget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyScheme
</aside>

## Create Recipe Card

<a id="opIdcreateRecipeCard"></a>

> Code samples

```bash
curl https://example.com/recipes/visualizeRecipe \
  -X POST \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}"
```

`POST /recipes/visualizeRecipe`

Generate a recipe card for a recipe.

<a href="https://spoonacular.com/food-api/docs#Create-Recipe-Card">Read entire docs</a>

> Body parameter

```yaml
"title=My recipe&ingredients=2 cups of green beans&instructions=cook the beans&readyInMinutes=60&servings=2&mask=ellipseMask&backgroundImage=background1"
```

<h3 id="create-recipe-card-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|false|The content type.|
|body|body|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Content-Type|application/x-www-form-urlencoded|
|Content-Type|application/json|
|Content-Type|multipart/form-data|

> Example responses

> 200 Response

```json
{
  "url": "https://spoonacular.com/url-to-generated-recipe-card.jpg"
}
```

<h3 id="create-recipe-card-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="create-recipe-card-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|url|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyScheme
</aside>

## Recipe Taste Widget

<a id="opIdvisualizeRecipeTaste"></a>

> Code samples

```bash
curl https://example.com/recipes/visualizeTaste \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H "x-api-key: ${API_KEY}"
```

`POST /recipes/visualizeTaste`

Visualize a recipe's taste information as HTML including CSS. You can play around with that endpoint!

<a href="https://spoonacular.com/food-api/docs#Recipe-Taste-Widget">Read entire docs</a>

> Body parameter

```yaml
"ingredientList=3 tomatoes, 5 oranges, 1 tsp salt"
```

<h3 id="recipe-taste-widget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|language|query|string|false|The language of the input. Either 'en' or 'de'.|
|Content-Type|header|string|false|The content type.|
|Accept|header|string|false|Accept header.|
|normalize|query|boolean|false|Whether to normalize to the strongest taste.|
|rgb|query|string|false|Red, green, blue values for the chart color.|
|body|body|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|language|en|
|language|de|
|Content-Type|application/x-www-form-urlencoded|
|Content-Type|application/json|
|Content-Type|multipart/form-data|
|Accept|application/json|
|Accept|text/html|
|Accept|media/*|

<h3 id="recipe-taste-widget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyScheme
</aside>

## Get Analyzed Recipe Instructions

<a id="opIdgetAnalyzedRecipeInstructions"></a>

> Code samples

```bash
curl https://example.com/recipes/324694/analyzedInstructions \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}"
```

`GET /recipes/{id}/analyzedInstructions`

Get an analyzed breakdown of a recipe's instructions. Each step is enriched with the ingredients and equipment required.

<a href="https://spoonacular.com/food-api/docs#Get-Analyzed-Recipe-Instructions">Read entire docs</a>

<h3 id="get-analyzed-recipe-instructions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|number|true|The recipe id.|
|stepBreakdown|query|boolean|false|Whether to break down the recipe steps even more.|

> Example responses

> 200 Response

```json
{
  "equipment": [
    {
      "id": 404645,
      "name": "frying pan"
    }
  ],
  "ingredients": [
    {
      "id": 2027,
      "name": "oregano"
    },
    {
      "id": 11215,
      "name": "garlic"
    },
    {
      "id": 11282,
      "name": "onion"
    },
    {
      "id": 2047,
      "name": "salt"
    }
  ],
  "parsedInstructions": [
    {
      "name": "",
      "steps": [
        {
          "equipment": [
            {
              "id": 404645,
              "image": "pan.png",
              "localizedName": "frying pan",
              "name": "frying pan"
            }
          ],
          "ingredients": [
            {
              "id": 11215,
              "image": "garlic.png",
              "localizedName": "garlic",
              "name": "garlic"
            },
            {
              "id": 11282,
              "image": "brown-onion.png",
              "localizedName": "onion",
              "name": "onion"
            }
          ],
          "number": 1,
          "step": "Put the garlic in a pan and then add the onion."
        },
        {
          "equipment": [],
          "ingredients": [
            {
              "id": 2027,
              "image": "oregano.jpg",
              "localizedName": "oregano",
              "name": "oregano"
            },
            {
              "id": 2047,
              "image": "salt.jpg",
              "localizedName": "salt",
              "name": "salt"
            }
          ],
          "number": 2,
          "step": "Add some salt and oregano."
        }
      ]
    }
  ]
}
```

<h3 id="get-analyzed-recipe-instructions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="get-analyzed-recipe-instructions-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|equipment|[object]|true|none|none|
|» id|integer|true|none|none|
|» name|string|true|none|none|
|ingredients|[object]|true|none|none|
|» id|integer|true|none|none|
|» name|string|true|none|none|
|parsedInstructions|[object]|true|none|none|
|» name|string|true|none|none|
|» steps|[object]|false|none|none|
|» » equipment|[object]|false|none|none|
|» » » id|integer|true|none|none|
|» » » image|string|true|none|none|
|» » » localizedName|string|true|none|none|
|» » » name|string|true|none|none|
|» » ingredients|[object]|false|none|none|
|» » » id|integer|true|none|none|
|» » » image|string|true|none|none|
|» » » localizedName|string|true|none|none|
|» » » name|string|true|none|none|
|» » number|number|true|none|none|
|» » step|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyScheme
</aside>

## Equipment by ID Widget

<a id="opIdvisualizeRecipeEquipmentByID"></a>

> Code samples

```bash
curl https://example.com/recipes/44860/equipmentWidget \
  -H "x-api-key: ${API_KEY}"
```

`GET /recipes/{id}/equipmentWidget`

Visualize a recipe's equipment list.

<a href="https://spoonacular.com/food-api/docs#Equipment-by-ID-Widget">Read entire docs</a>

<h3 id="equipment-by-id-widget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|number|true|The recipe id.|
|defaultCss|query|boolean|false|Whether the default CSS should be added to the response.|

<h3 id="equipment-by-id-widget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyScheme
</aside>

## Equipment by ID

<a id="opIdgetRecipeEquipmentByID"></a>

> Code samples

```bash
curl https://example.com/recipes/1003464/equipmentWidget.json \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}"
```

`GET /recipes/{id}/equipmentWidget.json`

Get a recipe's equipment list.

<a href="https://spoonacular.com/food-api/docs#Equipment-by-ID">Read entire docs</a>

<h3 id="equipment-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|number|true|The recipe id.|

> Example responses

> 200 Response

```json
{
  "equipment": [
    {
      "image": "pie-pan.png",
      "name": "pie form"
    },
    {
      "image": "bowl.jpg",
      "name": "bowl"
    },
    {
      "image": "oven.jpg",
      "name": "oven"
    },
    {
      "image": "pan.png",
      "name": "frying pan"
    }
  ]
}
```

<h3 id="equipment-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="equipment-by-id-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|equipment|[object]|true|none|none|
|» image|string|true|none|none|
|» name|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyScheme
</aside>

## Equipment by ID Image

<a id="opIdequipmentByIDImage"></a>

> Code samples

```bash
curl https://example.com/recipes/44860/equipmentWidget.png \
  -H "x-api-key: ${API_KEY}"
```

`GET /recipes/{id}/equipmentWidget.png`

Visualize a recipe's equipment list as an image.

<a href="https://spoonacular.com/food-api/docs#Equipment-by-ID-Image">Read entire docs</a>

<h3 id="equipment-by-id-image-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|number|true|The recipe id.|

<h3 id="equipment-by-id-image-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyScheme
</aside>

## Get Recipe Information

<a id="opIdgetRecipeInformation"></a>

> Code samples

```bash
curl https://example.com/recipes/716429/information \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}"
```

`GET /recipes/{id}/information`

Use a recipe id to get full information about a recipe, such as ingredients, nutrition, diet and allergen information, etc.

<a href="https://spoonacular.com/food-api/docs#Get-Recipe-Information">Read entire docs</a>

<h3 id="get-recipe-information-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|number|true|The id of the recipe.|
|includeNutrition|query|boolean|false|Include nutrition data in the recipe information. Nutrition data is per serving. If you want the nutrition data for the entire recipe, just multiply by the number of servings.|

> Example responses

> 200 Response

```json
{
  "aggregateLikes": 209,
  "analyzedInstructions": [],
  "cheap": false,
  "creditsText": "Full Belly Sisters",
  "cuisines": [],
  "dairyFree": false,
  "diets": [],
  "dishTypes": [
    "lunch",
    "main course",
    "main dish",
    "dinner"
  ],
  "extendedIngredients": [
    {
      "aisle": "Milk, Eggs, Other Dairy",
      "amount": 1,
      "consitency": "solid",
      "id": 1001,
      "image": "butter-sliced.jpg",
      "measures": {
        "metric": {
          "amount": 1,
          "unitLong": "Tbsp",
          "unitShort": "Tbsp"
        },
        "us": {
          "amount": 1,
          "unitLong": "Tbsp",
          "unitShort": "Tbsp"
        }
      },
      "meta": [],
      "name": "butter",
      "original": "1 tbsp butter",
      "originalName": "butter",
      "unit": "tbsp"
    },
    {
      "aisle": "Produce",
      "amount": 2,
      "consitency": "solid",
      "id": 10011135,
      "image": "cauliflower.jpg",
      "measures": {
        "metric": {
          "amount": 473.176,
          "unitLong": "milliliters",
          "unitShort": "ml"
        },
        "us": {
          "amount": 2,
          "unitLong": "cups",
          "unitShort": "cups"
        }
      },
      "meta": [
        "frozen",
        "thawed",
        "cut into bite-sized pieces"
      ],
      "name": "cauliflower florets",
      "original": "about 2 cups frozen cauliflower florets, thawed, cut into bite-sized pieces",
      "originalName": "about frozen cauliflower florets, thawed, cut into bite-sized pieces",
      "unit": "cups"
    },
    {
      "aisle": "Cheese",
      "amount": 2,
      "consitency": "solid",
      "id": 1041009,
      "image": "cheddar-cheese.png",
      "measures": {
        "metric": {
          "amount": 2,
          "unitLong": "Tbsps",
          "unitShort": "Tbsps"
        },
        "us": {
          "amount": 2,
          "unitLong": "Tbsps",
          "unitShort": "Tbsps"
        }
      },
      "meta": [
        "grated",
        "(I used romano)"
      ],
      "name": "cheese",
      "original": "2 tbsp grated cheese (I used romano)",
      "originalName": "grated cheese (I used romano)",
      "unit": "tbsp"
    },
    {
      "aisle": "Oil, Vinegar, Salad Dressing",
      "amount": 1,
      "consitency": "liquid",
      "id": 1034053,
      "image": "olive-oil.jpg",
      "measures": {
        "metric": {
          "amount": 1,
          "unitLong": "Tbsp",
          "unitShort": "Tbsp"
        },
        "us": {
          "amount": 1,
          "unitLong": "Tbsp",
          "unitShort": "Tbsp"
        }
      },
      "meta": [],
      "name": "extra virgin olive oil",
      "original": "1-2 tbsp extra virgin olive oil",
      "originalName": "extra virgin olive oil",
      "unit": "tbsp"
    },
    {
      "aisle": "Produce",
      "amount": 5,
      "consitency": "solid",
      "id": 11215,
      "image": "garlic.jpg",
      "measures": {
        "metric": {
          "amount": 5,
          "unitLong": "cloves",
          "unitShort": "cloves"
        },
        "us": {
          "amount": 5,
          "unitLong": "cloves",
          "unitShort": "cloves"
        }
      },
      "meta": [],
      "name": "garlic",
      "original": "5-6 cloves garlic",
      "originalName": "garlic",
      "unit": "cloves"
    },
    {
      "aisle": "Pasta and Rice",
      "amount": 6,
      "consitency": "solid",
      "id": 20420,
      "image": "fusilli.jpg",
      "measures": {
        "metric": {
          "amount": 170.097,
          "unitLong": "grams",
          "unitShort": "g"
        },
        "us": {
          "amount": 6,
          "unitLong": "ounces",
          "unitShort": "oz"
        }
      },
      "meta": [
        "(I used linguine)"
      ],
      "name": "pasta",
      "original": "6-8 ounces pasta (I used linguine)",
      "originalName": "pasta (I used linguine)",
      "unit": "ounces"
    },
    {
      "aisle": "Spices and Seasonings",
      "amount": 2,
      "consitency": "solid",
      "id": 1032009,
      "image": "red-pepper-flakes.jpg",
      "measures": {
        "metric": {
          "amount": 2,
          "unitLong": "pinches",
          "unitShort": "pinches"
        },
        "us": {
          "amount": 2,
          "unitLong": "pinches",
          "unitShort": "pinches"
        }
      },
      "meta": [
        "red"
      ],
      "name": "red pepper flakes",
      "original": "couple of pinches red pepper flakes, optional",
      "originalName": "couple of red pepper flakes, optional",
      "unit": "pinches"
    },
    {
      "aisle": "Spices and Seasonings",
      "amount": 2,
      "consitency": "solid",
      "id": 1102047,
      "image": "salt-and-pepper.jpg",
      "measures": {
        "metric": {
          "amount": 2,
          "unitLong": "servings",
          "unitShort": "servings"
        },
        "us": {
          "amount": 2,
          "unitLong": "servings",
          "unitShort": "servings"
        }
      },
      "meta": [
        "to taste"
      ],
      "name": "salt and pepper",
      "original": "salt and pepper, to taste",
      "originalName": "salt and pepper, to taste",
      "unit": "servings"
    },
    {
      "aisle": "Produce",
      "amount": 3,
      "consitency": "solid",
      "id": 11291,
      "image": "spring-onions.jpg",
      "measures": {
        "metric": {
          "amount": 3,
          "unitLong": "",
          "unitShort": ""
        },
        "us": {
          "amount": 3,
          "unitLong": "",
          "unitShort": ""
        }
      },
      "meta": [
        "white",
        "green",
        "separated",
        "chopped"
      ],
      "name": "scallions",
      "original": "3 scallions, chopped, white and green parts separated",
      "originalName": "scallions, chopped, white and green parts separated",
      "unit": ""
    },
    {
      "aisle": "Alcoholic Beverages",
      "amount": 2,
      "consitency": "liquid",
      "id": 14106,
      "image": "white-wine.jpg",
      "measures": {
        "metric": {
          "amount": 2,
          "unitLong": "Tbsps",
          "unitShort": "Tbsps"
        },
        "us": {
          "amount": 2,
          "unitLong": "Tbsps",
          "unitShort": "Tbsps"
        }
      },
      "meta": [
        "white"
      ],
      "name": "white wine",
      "original": "2-3 tbsp white wine",
      "originalName": "white wine",
      "unit": "tbsp"
    },
    {
      "aisle": "Pasta and Rice",
      "amount": 0.25,
      "consitency": "solid",
      "id": 99025,
      "image": "breadcrumbs.jpg",
      "measures": {
        "metric": {
          "amount": 59.147,
          "unitLong": "milliliters",
          "unitShort": "ml"
        },
        "us": {
          "amount": 0.25,
          "unitLong": "cups",
          "unitShort": "cups"
        }
      },
      "meta": [
        "whole wheat",
        "(I used panko)"
      ],
      "name": "whole wheat bread crumbs",
      "original": "1/4 cup whole wheat bread crumbs (I used panko)",
      "originalName": "whole wheat bread crumbs (I used panko)",
      "unit": "cup"
    }
  ],
  "gaps": "no",
  "glutenFree": false,
  "healthScore": 19,
  "id": 716429,
  "image": "https://spoonacular.com/recipeImages/716429-556x370.jpg",
  "imageType": "jpg",
  "instructions": "",
  "ketogenic": false,
  "license": "CC BY-SA 3.0",
  "lowFodmap": false,
  "occasions": [],
  "pricePerServing": 163.15,
  "readyInMinutes": 45,
  "servings": 2,
  "sourceName": "Full Belly Sisters",
  "sourceUrl": "http://fullbellysisters.blogspot.com/2012/06/pasta-with-garlic-scallions-cauliflower.html",
  "spoonacularScore": 83,
  "spoonacularSourceUrl": "https://spoonacular.com/pasta-with-garlic-scallions-cauliflower-breadcrumbs-716429",
  "summary": "Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs might be a good recipe to expand your main course repertoire. One portion of this dish contains approximately &lt;b&gt;19g of protein &lt;/b&gt;,  &lt;b&gt;20g of fat &lt;/b&gt;, and a total of  &lt;b&gt;584 calories &lt;/b&gt;. For  &lt;b&gt;$1.63 per serving &lt;/b&gt;, this recipe  &lt;b&gt;covers 23% &lt;/b&gt; of your daily requirements of vitamins and minerals. This recipe serves 2. It is brought to you by fullbellysisters.blogspot.com. 209 people were glad they tried this recipe. A mixture of scallions, salt and pepper, white wine, and a handful of other ingredients are all it takes to make this recipe so scrumptious. From preparation to the plate, this recipe takes approximately  &lt;b&gt;45 minutes &lt;/b&gt;. All things considered, we decided this recipe  &lt;b&gt;deserves a spoonacular score of 83% &lt;/b&gt;. This score is awesome. If you like this recipe, take a look at these similar recipes: &lt;a href=\"https://spoonacular.com/recipes/cauliflower-gratin-with-garlic-breadcrumbs-318375\">Cauliflower Gratin with Garlic Breadcrumbs&lt;/a&gt;, &lt; href=\"https://spoonacular.com/recipes/pasta-with-cauliflower-sausage-breadcrumbs-30437\">Pasta With Cauliflower, Sausage, & Breadcrumbs&lt;/a&gt;, and &lt;a href=\"https://spoonacular.com/recipes/pasta-with-roasted-cauliflower-parsley-and-breadcrumbs-30738\">Pasta With Roasted Cauliflower, Parsley, And Breadcrumbs&lt;/a&gt;.",
  "sustainable": false,
  "title": "Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs",
  "vegan": false,
  "vegetarian": false,
  "veryHealthy": false,
  "veryPopular": false,
  "weightWatcherSmartPoints": 17,
  "whole30": false,
  "winePairing": {
    "pairedWines": [
      "chardonnay",
      "gruener veltliner",
      "sauvignon blanc"
    ],
    "pairingText": "Chardonnay, Gruener Veltliner, and Sauvignon Blanc are great choices for Pasta. Sauvignon Blanc and Gruner Veltliner both have herby notes that complement salads with enough acid to match tart vinaigrettes, while a Chardonnay can be a good pick for creamy salad dressings. The Buddha Kat Winery Chardonnay with a 4 out of 5 star rating seems like a good match. It costs about 25 dollars per bottle.",
    "productMatches": [
      {
        "averageRating": 0.8,
        "description": "We barrel ferment our Chardonnay and age it in a mix of Oak and Stainless. Giving this light bodied wine modest oak character, a delicate floral aroma, and a warming finish.",
        "id": 469199,
        "imageUrl": "https://spoonacular.com/productImages/469199-312x231.jpg",
        "link": "https://www.amazon.com/2015-Buddha-Kat-Winery-Chardonnay/dp/B00OSAVVM4?tag=spoonacular-20",
        "price": "$25.0",
        "ratingCount": 1,
        "score": 0.55,
        "title": "Buddha Kat Winery Chardonnay"
      }
    ]
  }
}
```

<h3 id="get-recipe-information-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="get-recipe-information-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|aggregateLikes|integer|true|none|none|
|analyzedInstructions|[object]|true|none|none|
|cheap|boolean|true|none|none|
|creditsText|string|true|none|none|
|cuisines|[string]|true|none|none|
|dairyFree|boolean|true|none|none|
|diets|[string]|true|none|none|
|dishTypes|[string]|true|none|none|
|extendedIngredients|[object]|true|none|none|
|» aisle|string|true|none|none|
|» amount|number|true|none|none|
|» consitency|string|true|none|none|
|» id|integer|true|none|none|
|» image|string|true|none|none|
|» measures|object|false|none|none|
|» » metric|object|true|none|none|
|» » » amount|number|true|none|none|
|» » » unitLong|string|true|none|none|
|» » » unitShort|string|true|none|none|
|» » us|object|true|none|none|
|» » » amount|number|true|none|none|
|» » » unitLong|string|true|none|none|
|» » » unitShort|string|true|none|none|
|» meta|[string]|false|none|none|
|» name|string|true|none|none|
|» original|string|true|none|none|
|» originalName|string|true|none|none|
|» unit|string|true|none|none|
|gaps|string|true|none|none|
|glutenFree|boolean|true|none|none|
|healthScore|number|true|none|none|
|id|integer|true|none|none|
|image|string|true|none|none|
|imageType|string|true|none|none|
|instructions|string|true|none|none|
|ketogenic|boolean|true|none|none|
|license|string|true|none|none|
|lowFodmap|boolean|true|none|none|
|occasions|[string]|true|none|none|
|pricePerServing|number|true|none|none|
|readyInMinutes|integer|true|none|none|
|servings|number|true|none|none|
|sourceName|string|true|none|none|
|sourceUrl|string|true|none|none|
|spoonacularScore|number|true|none|none|
|spoonacularSourceUrl|string|true|none|none|
|summary|string|true|none|none|
|sustainable|boolean|true|none|none|
|title|string|true|none|none|
|vegan|boolean|true|none|none|
|vegetarian|boolean|true|none|none|
|veryHealthy|boolean|true|none|none|
|veryPopular|boolean|true|none|none|
|weightWatcherSmartPoints|number|true|none|none|
|whole30|boolean|true|none|none|
|winePairing|object|true|none|none|
|» pairedWines|[string]|true|none|none|
|» pairingText|string|true|none|none|
|» productMatches|[object]|true|none|none|
|» » averageRating|number|true|none|none|
|» » description|string|true|none|none|
|» » id|integer|true|none|none|
|» » imageUrl|string|true|none|none|
|» » link|string|true|none|none|
|» » price|string|true|none|none|
|» » ratingCount|integer|true|none|none|
|» » score|number|true|none|none|
|» » title|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyScheme
</aside>

## Ingredients by ID Widget

<a id="opIdvisualizeRecipeIngredientsByID"></a>

> Code samples

```bash
curl https://example.com/recipes/1082038/ingredientWidget \
  -H "x-api-key: ${API_KEY}"
```

`GET /recipes/{id}/ingredientWidget`

Visualize a recipe's ingredient list.

<a href="https://spoonacular.com/food-api/docs#Ingredients-by-ID-Widget">Read entire docs</a>

<h3 id="ingredients-by-id-widget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|number|true|The recipe id.|
|defaultCss|query|boolean|false|Whether the default CSS should be added to the response.|
|measure|query|string|false|Whether the the measures should be 'us' or 'metric'.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|measure|us|
|measure|metric|

<h3 id="ingredients-by-id-widget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyScheme
</aside>

## Ingredients by ID

<a id="opIdgetRecipeIngredientsByID"></a>

> Code samples

```bash
curl https://example.com/recipes/1003464/ingredientWidget.json \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}"
```

`GET /recipes/{id}/ingredientWidget.json`

Get a recipe's ingredient list.

<a href="https://spoonacular.com/food-api/docs#Ingredients-by-ID">Read entire docs</a>

<h3 id="ingredients-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|number|true|The recipe id.|

> Example responses

> 200 Response

```json
{
  "ingredients": [
    {
      "amount": {
        "metric": {
          "unit": "g",
          "value": 222
        },
        "us": {
          "unit": "cups",
          "value": 1.5
        }
      },
      "image": "blueberries.jpg",
      "name": "blueberries"
    },
    {
      "amount": {
        "metric": {
          "unit": "",
          "value": 1
        },
        "us": {
          "unit": "",
          "value": 1
        }
      },
      "image": "egg-white.jpg",
      "name": "egg white"
    },
    {
      "amount": {
        "metric": {
          "unit": "Tbsps",
          "value": 2
        },
        "us": {
          "unit": "Tbsps",
          "value": 2
        }
      },
      "image": "flour.png",
      "name": "flour"
    },
    {
      "amount": {
        "metric": {
          "unit": "g",
          "value": 150
        },
        "us": {
          "unit": "cup",
          "value": 0.75
        }
      },
      "image": "sugar-in-bowl.png",
      "name": "granulated sugar"
    },
    {
      "amount": {
        "metric": {
          "unit": "tsp",
          "value": 1
        },
        "us": {
          "unit": "tsp",
          "value": 1
        }
      },
      "image": "lemon-juice.jpg",
      "name": "fresh lemon juice"
    },
    {
      "amount": {
        "metric": {
          "unit": "pinch",
          "value": 1
        },
        "us": {
          "unit": "pinch",
          "value": 1
        }
      },
      "image": "ground-nutmeg.jpg",
      "name": "nutmeg"
    },
    {
      "amount": {
        "metric": {
          "unit": "",
          "value": 2
        },
        "us": {
          "unit": "",
          "value": 2
        }
      },
      "image": "pie-crust.jpg",
      "name": "pie dough round"
    },
    {
      "amount": {
        "metric": {
          "unit": "Tbsps",
          "value": 2
        },
        "us": {
          "unit": "Tbsps",
          "value": 2
        }
      },
      "image": "tapioca-pearls.png",
      "name": "quick cooking tapioca"
    },
    {
      "amount": {
        "metric": {
          "unit": "g",
          "value": 305
        },
        "us": {
          "unit": "cups",
          "value": 2.5
        }
      },
      "image": "rhubarb.jpg",
      "name": "trimmed rhubarb"
    },
    {
      "amount": {
        "metric": {
          "unit": "tsps",
          "value": 0.333
        },
        "us": {
          "unit": "tsps",
          "value": 0.333
        }
      },
      "image": "salt.jpg",
      "name": "salt"
    },
    {
      "amount": {
        "metric": {
          "unit": "Tbsps",
          "value": 0.5
        },
        "us": {
          "unit": "Tbsps",
          "value": 0.5
        }
      },
      "image": "butter-sliced.jpg",
      "name": "unsalted butter"
    }
  ]
}
```

<h3 id="ingredients-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="ingredients-by-id-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ingredients|[object]|true|none|none|
|» amount|object|false|none|none|
|» » metric|object|true|none|none|
|» » » unit|string|true|none|none|
|» » » value|number|true|none|none|
|» » us|object|true|none|none|
|» » » unit|string|true|none|none|
|» » » value|number|true|none|none|
|» image|string|true|none|none|
|» name|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyScheme
</aside>

## Recipe Nutrition Label Widget

<a id="opIdrecipeNutritionLabelWidget"></a>

> Code samples

```bash
curl https://example.com/recipes/641166/nutritionLabel \
  -H "x-api-key: ${API_KEY}"
```

`GET /recipes/{id}/nutritionLabel`

Get a recipe's nutrition label as an HTML widget.

<a href="https://spoonacular.com/food-api/docs#Recipe-Nutrition-Label-Widget">Read entire docs</a>

<h3 id="recipe-nutrition-label-widget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|number|true|The recipe id.|
|defaultCss|query|boolean|false|Whether the default CSS should be added to the response.|
|showOptionalNutrients|query|boolean|false|Whether to show optional nutrients.|
|showZeroValues|query|boolean|false|Whether to show zero values.|
|showIngredients|query|boolean|false|Whether to show a list of ingredients.|

<h3 id="recipe-nutrition-label-widget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyScheme
</aside>

## Recipe Nutrition Label Image

<a id="opIdrecipeNutritionLabelImage"></a>

> Code samples

```bash
curl https://example.com/recipes/641166/nutritionLabel.png \
  -H "x-api-key: ${API_KEY}"
```

`GET /recipes/{id}/nutritionLabel.png`

Get a recipe's nutrition label as an image.

<a href="https://spoonacular.com/food-api/docs#Recipe-Nutrition-Label-Image">Read entire docs</a>

<h3 id="recipe-nutrition-label-image-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|number|true|The recipe id.|
|showOptionalNutrients|query|boolean|false|Whether to show optional nutrients.|
|showZeroValues|query|boolean|false|Whether to show zero values.|
|showIngredients|query|boolean|false|Whether to show a list of ingredients.|

<h3 id="recipe-nutrition-label-image-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyScheme
</aside>

## Recipe Nutrition by ID Widget

<a id="opIdvisualizeRecipeNutritionByID"></a>

> Code samples

```bash
curl https://example.com/recipes/1082038/nutritionWidget \
  -H "x-api-key: ${API_KEY}"
```

`GET /recipes/{id}/nutritionWidget`

Visualize a recipe's nutritional information as HTML including CSS.

<a href="https://spoonacular.com/food-api/docs#Recipe-Nutrition-by-ID-Widget">Read entire docs</a>

<h3 id="recipe-nutrition-by-id-widget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|number|true|The recipe id.|
|defaultCss|query|boolean|false|Whether the default CSS should be added to the response.|
|Accept|header|string|false|Accept header.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Accept|application/json|
|Accept|text/html|
|Accept|media/*|

<h3 id="recipe-nutrition-by-id-widget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyScheme
</aside>

## Nutrition by ID

<a id="opIdgetRecipeNutritionWidgetByID"></a>

> Code samples

```bash
curl https://example.com/recipes/1003464/nutritionWidget.json \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}"
```

`GET /recipes/{id}/nutritionWidget.json`

Get a recipe's nutrition data.

<a href="https://spoonacular.com/food-api/docs#Nutrition-by-ID">Read entire docs</a>

<h3 id="nutrition-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|number|true|The recipe id.|

> Example responses

> 200 Response

```json
{
  "bad": [
    {
      "amount": "316",
      "indented": false,
      "name": "Calories",
      "percentOfDailyNeeds": 15.84
    },
    {
      "amount": "12g",
      "indented": false,
      "name": "Fat",
      "percentOfDailyNeeds": 18.51
    },
    {
      "amount": "3g",
      "indented": true,
      "name": "Saturated Fat",
      "percentOfDailyNeeds": 24.88
    },
    {
      "amount": "49g",
      "indented": false,
      "name": "Carbohydrates",
      "percentOfDailyNeeds": 16.44
    },
    {
      "amount": "21g",
      "indented": true,
      "name": "Sugar",
      "percentOfDailyNeeds": 24.42
    },
    {
      "amount": "1mg",
      "indented": false,
      "name": "Cholesterol",
      "percentOfDailyNeeds": 0.63
    },
    {
      "amount": "279mg",
      "indented": false,
      "name": "Sodium",
      "percentOfDailyNeeds": 12.13
    }
  ],
  "calories": "316",
  "carbs": "49g",
  "fat": "12g",
  "good": [
    {
      "amount": "3g",
      "indented": false,
      "name": "Protein",
      "percentOfDailyNeeds": 7.57
    },
    {
      "amount": "19µg",
      "indented": false,
      "name": "Vitamin K",
      "percentOfDailyNeeds": 18.76
    },
    {
      "amount": "0.37mg",
      "indented": false,
      "name": "Manganese",
      "percentOfDailyNeeds": 18.69
    },
    {
      "amount": "0.15mg",
      "indented": false,
      "name": "Vitamin B1",
      "percentOfDailyNeeds": 10.02
    },
    {
      "amount": "2g",
      "indented": false,
      "name": "Fiber",
      "percentOfDailyNeeds": 9.97
    },
    {
      "amount": "37µg",
      "indented": false,
      "name": "Folate",
      "percentOfDailyNeeds": 9.48
    },
    {
      "amount": "1mg",
      "indented": false,
      "name": "Iron",
      "percentOfDailyNeeds": 7.62
    },
    {
      "amount": "1mg",
      "indented": false,
      "name": "Vitamin B3",
      "percentOfDailyNeeds": 7.48
    },
    {
      "amount": "0.12mg",
      "indented": false,
      "name": "Vitamin B2",
      "percentOfDailyNeeds": 7.34
    },
    {
      "amount": "5mg",
      "indented": false,
      "name": "Vitamin C",
      "percentOfDailyNeeds": 7.26
    },
    {
      "amount": "4µg",
      "indented": false,
      "name": "Selenium",
      "percentOfDailyNeeds": 6.26
    },
    {
      "amount": "182mg",
      "indented": false,
      "name": "Potassium",
      "percentOfDailyNeeds": 5.21
    },
    {
      "amount": "43mg",
      "indented": false,
      "name": "Calcium",
      "percentOfDailyNeeds": 4.38
    },
    {
      "amount": "42mg",
      "indented": false,
      "name": "Phosphorus",
      "percentOfDailyNeeds": 4.24
    },
    {
      "amount": "13mg",
      "indented": false,
      "name": "Magnesium",
      "percentOfDailyNeeds": 3.43
    },
    {
      "amount": "0.48mg",
      "indented": false,
      "name": "Vitamin E",
      "percentOfDailyNeeds": 3.19
    },
    {
      "amount": "0.06mg",
      "indented": false,
      "name": "Copper",
      "percentOfDailyNeeds": 3.11
    },
    {
      "amount": "0.26mg",
      "indented": false,
      "name": "Vitamin B5",
      "percentOfDailyNeeds": 2.56
    },
    {
      "amount": "0.05mg",
      "indented": false,
      "name": "Vitamin B6",
      "percentOfDailyNeeds": 2.32
    },
    {
      "amount": "0.29mg",
      "indented": false,
      "name": "Zinc",
      "percentOfDailyNeeds": 1.96
    },
    {
      "amount": "76IU",
      "indented": false,
      "name": "Vitamin A",
      "percentOfDailyNeeds": 1.53
    }
  ],
  "protein": "3g"
}
```

<h3 id="nutrition-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="nutrition-by-id-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bad|[object]|true|none|none|
|» amount|string|true|none|none|
|» indented|boolean|true|none|none|
|» name|string|true|none|none|
|» percentOfDailyNeeds|number|true|none|none|
|calories|string|true|none|none|
|carbs|string|true|none|none|
|fat|string|true|none|none|
|good|[object]|true|none|none|
|» amount|string|true|none|none|
|» indented|boolean|true|none|none|
|» name|string|true|none|none|
|» percentOfDailyNeeds|number|true|none|none|
|protein|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyScheme
</aside>

## Recipe Nutrition by ID Image

<a id="opIdrecipeNutritionByIDImage"></a>

> Code samples

```bash
curl https://example.com/recipes/1082038/nutritionWidget.png \
  -H "x-api-key: ${API_KEY}"
```

`GET /recipes/{id}/nutritionWidget.png`

Visualize a recipe's nutritional information as an image.

<a href="https://spoonacular.com/food-api/docs#Recipe-Nutrition-by-ID-Image">Read entire docs</a>

<h3 id="recipe-nutrition-by-id-image-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|number|true|The recipe id.|

<h3 id="recipe-nutrition-by-id-image-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyScheme
</aside>

## Price Breakdown by ID Widget

<a id="opIdvisualizeRecipePriceBreakdownByID"></a>

> Code samples

```bash
curl https://example.com/recipes/1082038/priceBreakdownWidget \
  -H "x-api-key: ${API_KEY}"
```

`GET /recipes/{id}/priceBreakdownWidget`

Visualize a recipe's price breakdown.

<a href="https://spoonacular.com/food-api/docs#Price-Breakdown-by-ID-Widget">Read entire docs</a>

<h3 id="price-breakdown-by-id-widget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|number|true|The recipe id.|
|defaultCss|query|boolean|false|Whether the default CSS should be added to the response.|

<h3 id="price-breakdown-by-id-widget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyScheme
</aside>

## Price Breakdown by ID

<a id="opIdgetRecipePriceBreakdownByID"></a>

> Code samples

```bash
curl https://example.com/recipes/1003464/priceBreakdownWidget.json \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}"
```

`GET /recipes/{id}/priceBreakdownWidget.json`

Get a recipe's price breakdown data.

<a href="https://spoonacular.com/food-api/docs#Price-Breakdown-by-ID">Read entire docs</a>

<h3 id="price-breakdown-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|number|true|The recipe id.|

> Example responses

> 200 Response

```json
{
  "ingredients": [
    {
      "amount": {
        "metric": {
          "unit": "g",
          "value": 222
        },
        "us": {
          "unit": "cups",
          "value": 1.5
        }
      },
      "image": "blueberries.jpg",
      "name": "blueberries",
      "price": 174.43
    },
    {
      "amount": {
        "metric": {
          "unit": "",
          "value": 1
        },
        "us": {
          "unit": "",
          "value": 1
        }
      },
      "image": "egg-white.jpg",
      "name": "egg white",
      "price": 18.21
    },
    {
      "amount": {
        "metric": {
          "unit": "Tbsps",
          "value": 2
        },
        "us": {
          "unit": "Tbsps",
          "value": 2
        }
      },
      "image": "flour.png",
      "name": "flour",
      "price": 2
    },
    {
      "amount": {
        "metric": {
          "unit": "g",
          "value": 150
        },
        "us": {
          "unit": "cup",
          "value": 0.75
        }
      },
      "image": "sugar-in-bowl.png",
      "name": "granulated sugar",
      "price": 20.67
    },
    {
      "amount": {
        "metric": {
          "unit": "tsp",
          "value": 1
        },
        "us": {
          "unit": "tsp",
          "value": 1
        }
      },
      "image": "lemon-juice.jpg",
      "name": "fresh lemon juice",
      "price": 3.39
    },
    {
      "amount": {
        "metric": {
          "unit": "pinch",
          "value": 1
        },
        "us": {
          "unit": "pinch",
          "value": 1
        }
      },
      "image": "ground-nutmeg.jpg",
      "name": "nutmeg",
      "price": 7.39
    },
    {
      "amount": {
        "metric": {
          "unit": "",
          "value": 2
        },
        "us": {
          "unit": "",
          "value": 2
        }
      },
      "image": "pie-crust.jpg",
      "name": "pie dough round",
      "price": 364.29
    },
    {
      "amount": {
        "metric": {
          "unit": "Tbsps",
          "value": 2
        },
        "us": {
          "unit": "Tbsps",
          "value": 2
        }
      },
      "image": "tapioca-pearls.png",
      "name": "quick cooking tapioca",
      "price": 50.89
    },
    {
      "amount": {
        "metric": {
          "unit": "g",
          "value": 305
        },
        "us": {
          "unit": "cups",
          "value": 2.5
        }
      },
      "image": "rhubarb.jpg",
      "name": "trimmed rhubarb",
      "price": 185.18
    },
    {
      "amount": {
        "metric": {
          "unit": "Tbsps",
          "value": 0.5
        },
        "us": {
          "unit": "Tbsps",
          "value": 0.5
        }
      },
      "image": "butter-sliced.jpg",
      "name": "unsalted butter",
      "price": 6
    }
  ],
  "totalCost": 832.45,
  "totalCostPerServing": 104.06
}
```

<h3 id="price-breakdown-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="price-breakdown-by-id-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ingredients|[object]|true|none|none|
|» amount|object|false|none|none|
|» » metric|object|true|none|none|
|» » » unit|string|true|none|none|
|» » » value|number|true|none|none|
|» » us|object|true|none|none|
|» » » unit|string|true|none|none|
|» » » value|number|true|none|none|
|» image|string|true|none|none|
|» name|string|true|none|none|
|» price|number|true|none|none|
|totalCost|number|true|none|none|
|totalCostPerServing|number|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyScheme
</aside>

## Price Breakdown by ID Image

<a id="opIdpriceBreakdownByIDImage"></a>

> Code samples

```bash
curl https://example.com/recipes/1082038/priceBreakdownWidget.png \
  -H "x-api-key: ${API_KEY}"
```

`GET /recipes/{id}/priceBreakdownWidget.png`

Visualize a recipe's price breakdown.

<a href="https://spoonacular.com/food-api/docs#Price-Breakdown-by-ID-Image">Read entire docs</a>

<h3 id="price-breakdown-by-id-image-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|number|true|The recipe id.|

<h3 id="price-breakdown-by-id-image-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyScheme
</aside>

## Get Similar Recipes

<a id="opIdgetSimilarRecipes"></a>

> Code samples

```bash
curl https://example.com/recipes/715538/similar \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}"
```

`GET /recipes/{id}/similar`

Find recipes which are similar to the given one.

<a href="https://spoonacular.com/food-api/docs#Get-Similar-Recipes">Read entire docs</a>

<h3 id="get-similar-recipes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|number|true|The id of the source recipe for which similar recipes should be found.|
|number|query|integer|false|The maximum number of items to return (between 1 and 100). Defaults to 10.|
|limitLicense|query|boolean|false|Whether the recipes should have an open license that allows display with proper attribution.|

> Example responses

> 200 Response

```json
[
  {
    "id": 209128,
    "imageType": "jpg",
    "readyInMinutes": 45,
    "servings": 4,
    "sourceUrl": "http://www.seriouseats.com/recipes/2008/07/grilled-romesco-style-pork-salad-recipe.html",
    "title": "Dinner Tonight: Grilled Romesco-Style Pork"
  },
  {
    "id": 31868,
    "imageType": "jpg",
    "readyInMinutes": 45,
    "servings": 2,
    "sourceUrl": "http://www.seriouseats.com/recipes/2009/06/dinner-tonight-chickpea-bruschetta-babbo-nyc-recipe.html",
    "title": "Dinner Tonight: Chickpea Bruschetta"
  }
]
```

<h3 id="get-similar-recipes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="get-similar-recipes-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» id|integer|true|none|none|
|» imageType|string|true|none|none|
|» readyInMinutes|integer|true|none|none|
|» servings|number|true|none|none|
|» sourceUrl|string|true|none|none|
|» title|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyScheme
</aside>

## Summarize Recipe

<a id="opIdsummarizeRecipe"></a>

> Code samples

```bash
curl https://example.com/recipes/4632/summary \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}"
```

`GET /recipes/{id}/summary`

Automatically generate a short description that summarizes key information about the recipe.

<a href="https://spoonacular.com/food-api/docs#Summarize-Recipe">Read entire docs</a>

<h3 id="summarize-recipe-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|number|true|The recipe id.|

> Example responses

> 200 Response

```json
{
  "id": 4632,
  "summary": "The recipe Soy-and-Ginger-Glazed Salmon with Udon Noodles can be made  <b>in approximately 1 hour and 35 minutes </b>. One portion of this dish contains about  <b>48g of protein </b>,  <b>17g of fat </b>, and a total of  <b>552 calories </b>. This recipe serves 4. For  <b>$5.91 per serving </b>, this recipe  <b>covers 47% </b> of your daily requirements of vitamins and minerals. It works well as a main course. 1 person has tried and liked this recipe. It is brought to you by Food and Wine. If you have fresh ginger, udon noodles, salmon fillets, and a few other ingredients on hand, you can make it. It is a good option if you're following a  <b>dairy free and pescatarian </b> diet. All things considered, we decided this recipe  <b>deserves a spoonacular score of 92% </b>. This score is great. If you like this recipe, take a look at these similar recipes: Salmon With Soy-ginger Noodles, Ginger-Soy Salmon With Soba Noodles, and Soy & ginger salmon with soba noodles.",
  "title": "Soy-and-Ginger-Glazed Salmon with Udon Noodles"
}
```

<h3 id="summarize-recipe-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="summarize-recipe-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|true|none|none|
|summary|string|true|none|none|
|title|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyScheme
</aside>

## Recipe Taste by ID Widget

<a id="opIdvisualizeRecipeTasteByID"></a>

> Code samples

```bash
curl https://example.com/recipes/69095/tasteWidget \
  -H "x-api-key: ${API_KEY}"
```

`GET /recipes/{id}/tasteWidget`

Get a recipe's taste. The tastes supported are sweet, salty, sour, bitter, savory, and fatty.

<a href="https://spoonacular.com/food-api/docs#Recipe-Taste-by-ID-Widget">Read entire docs</a>

<h3 id="recipe-taste-by-id-widget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|number|true|The recipe id.|
|normalize|query|boolean|false|Whether to normalize to the strongest taste.|
|rgb|query|string|false|Red, green, blue values for the chart color.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|normalize|true|
|normalize|false|

<h3 id="recipe-taste-by-id-widget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyScheme
</aside>

## Taste by ID

<a id="opIdgetRecipeTasteByID"></a>

> Code samples

```bash
curl https://example.com/recipes/69095/tasteWidget.json \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}"
```

`GET /recipes/{id}/tasteWidget.json`

Get a recipe's taste. The tastes supported are sweet, salty, sour, bitter, savory, and fatty.

<a href="https://spoonacular.com/food-api/docs#Taste-by-ID">Read entire docs</a>

<h3 id="taste-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|number|true|The recipe id.|
|normalize|query|boolean|false|Normalize to the strongest taste.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|normalize|false|
|normalize|true|

> Example responses

> 200 Response

```json
{
  "bitterness": 12.38,
  "fattiness": 100,
  "saltiness": 26.74,
  "savoriness": 11.8,
  "sourness": 6.22,
  "spiciness": 0,
  "sweetness": 28.79
}
```

<h3 id="taste-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="taste-by-id-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bitterness|number|true|none|none|
|fattiness|number|true|none|none|
|saltiness|number|true|none|none|
|savoriness|number|true|none|none|
|sourness|number|true|none|none|
|spiciness|number|true|none|none|
|sweetness|number|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyScheme
</aside>

## Recipe Taste by ID Image

<a id="opIdrecipeTasteByIDImage"></a>

> Code samples

```bash
curl https://example.com/recipes/69095/tasteWidget.png \
  -H "x-api-key: ${API_KEY}"
```

`GET /recipes/{id}/tasteWidget.png`

Get a recipe's taste as an image. The tastes supported are sweet, salty, sour, bitter, savory, and fatty.

<a href="https://spoonacular.com/food-api/docs#Recipe-Taste-by-ID-Image">Read entire docs</a>

<h3 id="recipe-taste-by-id-image-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|number|true|The recipe id.|
|normalize|query|boolean|false|Normalize to the strongest taste.|
|rgb|query|string|false|Red, green, blue values for the chart color.|

<h3 id="recipe-taste-by-id-image-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyScheme
</aside>

<h1 id="spoonacular-api-wine">wine</h1>

## Wine Description

<a id="opIdgetWineDescription"></a>

> Code samples

```bash
curl 'https://example.com/food/wine/description?wine=merlot' \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}"
```

`GET /food/wine/description`

Get a simple description of a certain wine, e.g. "malbec", "riesling", or "merlot".

<a href="https://spoonacular.com/food-api/docs#Wine-Description">Read entire docs</a>

<h3 id="wine-description-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|wine|query|string|true|The name of the wine that should be paired, e.g. "merlot", "riesling", or "malbec".|

> Example responses

> 200 Response

```json
{
  "wineDescription": "Merlot is a dry red wine which is smooth and medium bodied."
}
```

<h3 id="wine-description-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="wine-description-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|wineDescription|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyScheme
</aside>

## Dish Pairing for Wine

<a id="opIdgetDishPairingForWine"></a>

> Code samples

```bash
curl 'https://example.com/food/wine/dishes?wine=malbec' \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}"
```

`GET /food/wine/dishes`

Find a dish that goes well with a given wine.

<a href="https://spoonacular.com/food-api/docs#Dish-Pairing-for-Wine">Read entire docs</a>

<h3 id="dish-pairing-for-wine-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|wine|query|string|true|The type of wine that should be paired, e.g. "merlot", "riesling", or "malbec".|

> Example responses

> 200 Response

```json
{
  "pairings": [
    "stew",
    "steak",
    "chili",
    "burger"
  ],
  "text": "Malbec is a dry red wine which is bold and full bodied. It goes especially well with round steak, tri tip steak, steak, boneless pork chops, and pizza burger."
}
```

<h3 id="dish-pairing-for-wine-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="dish-pairing-for-wine-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pairings|[string]|true|none|none|
|text|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyScheme
</aside>

## Wine Pairing

<a id="opIdgetWinePairing"></a>

> Code samples

```bash
curl 'https://example.com/food/wine/pairing?food=steak' \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}"
```

`GET /food/wine/pairing`

Find a wine that goes well with a food. Food can be a dish name ("steak"), an ingredient name ("salmon"), or a cuisine ("italian").

<a href="https://spoonacular.com/food-api/docs#Wine-Pairing">Read entire docs</a>

<h3 id="wine-pairing-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|food|query|string|true|The food to get a pairing for. This can be a dish ("steak"), an ingredient ("salmon"), or a cuisine ("italian").|
|maxPrice|query|number|false|The maximum price for the specific wine recommendation in USD.|

> Example responses

> 200 Response

```json
{
  "pairedWines": [
    "merlot",
    "cabernet sauvignon",
    "pinot noir"
  ],
  "pairingText": "Merlot, Cabernet Sauvignon, and Pinot Noir are my top picks for Steak. After all, beef and red wine are a classic combination. Generally, leaner steaks go well with light or medium-bodied reds, such as pinot noir or merlot, while fattier steaks can handle a bold red, such as cabernet sauvingnon. The Sterling Vineyards Merlot with a 5 out of 5 star rating seems like a good match. It costs about 29 dollars per bottle.",
  "productMatches": [
    {
      "averageRating": 1,
      "description": null,
      "id": 428278,
      "imageUrl": "https://spoonacular.com/productImages/428278-312x231.jpg",
      "link": "https://www.amazon.com/2014-Sterling-Vineyards-Valley-Merlot/dp/B071FP8NPG?tag=spoonacular-20",
      "price": "$28.99",
      "ratingCount": 1,
      "score": 0.75,
      "title": "Sterling Vineyards Merlot"
    }
  ]
}
```

<h3 id="wine-pairing-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="wine-pairing-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pairedWines|[string]|true|none|none|
|pairingText|string|true|none|none|
|productMatches|[object]|true|none|none|
|» averageRating|number|true|none|none|
|» description|object|false|none|none|
|» id|integer|true|none|none|
|» imageUrl|string|true|none|none|
|» link|string|true|none|none|
|» price|string|true|none|none|
|» ratingCount|integer|true|none|none|
|» score|number|true|none|none|
|» title|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyScheme
</aside>

## Wine Recommendation

<a id="opIdgetWineRecommendation"></a>

> Code samples

```bash
curl 'https://example.com/food/wine/recommendation?wine=merlot' \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}"
```

`GET /food/wine/recommendation`

Get a specific wine recommendation (concrete product) for a given wine type, e.g. "merlot".

<a href="https://spoonacular.com/food-api/docs#Wine-Recommendation">Read entire docs</a>

<h3 id="wine-recommendation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|wine|query|string|true|The type of wine to get a specific product recommendation for.|
|maxPrice|query|number|false|The maximum price for the specific wine recommendation in USD.|
|minRating|query|number|false|The minimum rating of the recommended wine between 0 and 1. For example, 0.8 equals 4 out of 5 stars.|
|number|query|number|false|The number of wine recommendations expected (between 1 and 100).|

> Example responses

> 200 Response

```json
{
  "recommendedWines": [
    {
      "averageRating": 0.96,
      "description": "Enticing and lively red color; beautifully aromatic with black cherry and ripe plum. On the palate a purity of blackcurrant, cedar and mint flavors blend together seamlessly. Soft and supple, this wine has a medium-bodied mouth-feel with plush tannins that integrate with the generous finish.Our favorite pairings for this wine include chicken parmesan, cedar-planked salmon over wild rice, and mushroom pizza.",
      "id": 447938,
      "imageUrl": "https://spoonacular.com/productImages/447938-312x231.jpg",
      "link": "https://click.linksynergy.com/deeplink?id=*QCiIS6t4gA&mid=2025&murl=https%3A%2F%2Fwww.wine.com%2Fproduct%2Frombauer-merlot-2008%2F116883",
      "price": "$25.59",
      "ratingCount": 5,
      "score": 0.8975,
      "title": "Rombauer Merlot"
    },
    {
      "averageRating": 0.9,
      "description": "A ripe and rounded Merlot with notes of plum, blackberry, and hint of spice.",
      "id": 430475,
      "imageUrl": "https://spoonacular.com/productImages/430475-312x231.jpg",
      "link": "https://www.amazon.com/Big-Kahuna-Merlot-Red-Wine/dp/B01F5XPTUW?tag=spoonacular-20",
      "price": "$6.99",
      "ratingCount": 4,
      "score": 0.823076923076923,
      "title": "NV The Big Kahuna Merlot"
    }
  ],
  "totalFound": 21
}
```

<h3 id="wine-recommendation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="wine-recommendation-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|recommendedWines|[object]|true|none|none|
|» averageRating|number|true|none|none|
|» description|string|true|none|none|
|» id|integer|true|none|none|
|» imageUrl|string|true|none|none|
|» link|string|true|none|none|
|» price|string|true|none|none|
|» ratingCount|integer|true|none|none|
|» score|number|true|none|none|
|» title|string|true|none|none|
|totalFound|integer|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyScheme
</aside>

<h1 id="spoonacular-api-default">Default</h1>

## Search Restaurants

<a id="opIdsearchRestaurants"></a>

> Code samples

```bash
curl https://example.com/food/restaurants/search \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}"
```

`GET /food/restaurants/search`

Search through thousands of restaurants (in North America) by location, cuisine, budget, and more.

<a href="https://spoonacular.com/food-api/docs#Search-Restaurants">Read entire docs</a>

<h3 id="search-restaurants-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|query|query|string|false|The search query.|
|lat|query|number|false|The latitude of the user's location.|
|lng|query|number|false|The longitude of the user's location.".|
|distance|query|number|false|The distance around the location in miles.|
|budget|query|number|false|The user's budget for a meal in USD.|
|cuisine|query|string|false|The cuisine of the restaurant.|
|min-rating|query|number|false|The minimum rating of the restaurant between 0 and 5.|
|is-open|query|boolean|false|Whether the restaurant must be open at the time of search.|
|sort|query|string|false|How to sort the results, one of the following 'cheapest', 'fastest', 'rating', 'distance' or the default 'relevance'.|
|page|query|number|false|The page number of results.|

> Example responses

> 200 Response

```json
{
  "restaurants": [
    {
      "_id": "string",
      "address": {
        "city": "string",
        "country": "string",
        "lat": 0,
        "latitude": 0,
        "lon": 0,
        "longitude": 0,
        "state": "string",
        "street_addr": "string",
        "street_addr_2": "string",
        "zipcode": "string"
      },
      "aggregated_rating_count": 0,
      "cuisines": [
        "string"
      ],
      "delivery_enabled": true,
      "description": "string",
      "dollar_signs": 0,
      "food_photos": [
        "string"
      ],
      "is_open": true,
      "local_hours": {
        "delivery": {
          "Friday": "string",
          "Monday": "string",
          "Saturday": "string",
          "Sunday": "string",
          "Thursday": "string",
          "Tuesday": "string",
          "Wednesday": "string"
        },
        "dine_in": {
          "Friday": "string",
          "Monday": "string",
          "Saturday": "string",
          "Sunday": "string",
          "Thursday": "string",
          "Tuesday": "string",
          "Wednesday": "string"
        },
        "operational": {
          "Friday": "string",
          "Monday": "string",
          "Saturday": "string",
          "Sunday": "string",
          "Thursday": "string",
          "Tuesday": "string",
          "Wednesday": "string"
        },
        "pickup": {
          "Friday": "string",
          "Monday": "string",
          "Saturday": "string",
          "Sunday": "string",
          "Thursday": "string",
          "Tuesday": "string",
          "Wednesday": "string"
        }
      },
      "logo_photos": [
        "string"
      ],
      "miles": 0,
      "name": "string",
      "offers_first_party_delivery": true,
      "offers_third_party_delivery": true,
      "phone_number": 0,
      "pickup_enabled": true,
      "store_photos": [
        {}
      ],
      "type": "string",
      "weighted_rating_value": 0
    }
  ]
}
```

<h3 id="search-restaurants-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="search-restaurants-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|restaurants|[object]|false|none|none|
|» _id|string|false|none|none|
|» address|object|false|none|none|
|» » city|string|false|none|none|
|» » country|string|false|none|none|
|» » lat|number|false|none|none|
|» » latitude|number|false|none|none|
|» » lon|number|false|none|none|
|» » longitude|number|false|none|none|
|» » state|string|false|none|none|
|» » street_addr|string|false|none|none|
|» » street_addr_2|string|false|none|none|
|» » zipcode|string|false|none|none|
|» aggregated_rating_count|integer|false|none|none|
|» cuisines|[string]|false|none|none|
|» delivery_enabled|boolean|false|none|none|
|» description|string|false|none|none|
|» dollar_signs|integer|false|none|none|
|» food_photos|[string]|false|none|none|
|» is_open|boolean|false|none|none|
|» local_hours|object|false|none|none|
|» » delivery|object|false|none|none|
|» » » Friday|string|false|none|none|
|» » » Monday|string|false|none|none|
|» » » Saturday|string|false|none|none|
|» » » Sunday|string|false|none|none|
|» » » Thursday|string|false|none|none|
|» » » Tuesday|string|false|none|none|
|» » » Wednesday|string|false|none|none|
|» » dine_in|object|false|none|none|
|» » » Friday|string|false|none|none|
|» » » Monday|string|false|none|none|
|» » » Saturday|string|false|none|none|
|» » » Sunday|string|false|none|none|
|» » » Thursday|string|false|none|none|
|» » » Tuesday|string|false|none|none|
|» » » Wednesday|string|false|none|none|
|» » operational|object|false|none|none|
|» » » Friday|string|false|none|none|
|» » » Monday|string|false|none|none|
|» » » Saturday|string|false|none|none|
|» » » Sunday|string|false|none|none|
|» » » Thursday|string|false|none|none|
|» » » Tuesday|string|false|none|none|
|» » » Wednesday|string|false|none|none|
|» » pickup|object|false|none|none|
|» » » Friday|string|false|none|none|
|» » » Monday|string|false|none|none|
|» » » Saturday|string|false|none|none|
|» » » Sunday|string|false|none|none|
|» » » Thursday|string|false|none|none|
|» » » Tuesday|string|false|none|none|
|» » » Wednesday|string|false|none|none|
|» logo_photos|[string]|false|none|none|
|» miles|number|false|none|none|
|» name|string|false|none|none|
|» offers_first_party_delivery|boolean|false|none|none|
|» offers_third_party_delivery|boolean|false|none|none|
|» phone_number|integer|false|none|none|
|» pickup_enabled|boolean|false|none|none|
|» store_photos|[object]|false|none|none|
|» type|string|false|none|none|
|» weighted_rating_value|number|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyScheme
</aside>

## Analyze Recipe

<a id="opIdanalyzeRecipe"></a>

> Code samples

```bash
curl https://example.com/recipes/analyze \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -d '{
    "ingredients": [
      "1 lb spaghetti",
      "3.5 oz pancetta",
      "2 Tbsps olive oil",
      "1  egg",
      "0.5 cup parmesan cheese"
    ],
    "instructions": "Bring a large pot of water to a boil and season generously with salt. Add the pasta to the water once boiling and cook until al dente. Reserve 2 cups of cooking water and drain the pasta. ",
    "servings": 2,
    "title": "Spaghetti Carbonara"
  }'
```

`POST /recipes/analyze`

This endpoint allows you to send raw recipe information, such as title, servings, and ingredients, to then see what we compute (badges, diets, nutrition, and more). This is useful if you have your own recipe data and want to enrich it with our semantic analysis.

<a href="https://spoonacular.com/food-api/docs#Analyze-Recipe">Read entire docs</a>

> Body parameter

```json
{
  "ingredients": [
    "1 lb spaghetti",
    "3.5 oz pancetta",
    "2 Tbsps olive oil",
    "1  egg",
    "0.5 cup parmesan cheese"
  ],
  "instructions": "Bring a large pot of water to a boil and season generously with salt. Add the pasta to the water once boiling and cook until al dente. Reserve 2 cups of cooking water and drain the pasta. ",
  "servings": 2,
  "title": "Spaghetti Carbonara"
}
```

<h3 id="analyze-recipe-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|language|query|string|false|The input language, either "en" or "de".|
|includeNutrition|query|boolean|false|Whether nutrition data should be added to correctly parsed ingredients.|
|includeTaste|query|boolean|false|Whether taste data should be added to correctly parsed ingredients.|
|body|body|object|true|Example request body.|
|» ingredients|body|[string]|false|none|
|» instructions|body|string|false|none|
|» servings|body|integer|false|none|
|» title|body|string|false|none|

> Example responses

> 200 Response

```json
{}
```

<h3 id="analyze-recipe-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyScheme
</aside>

## Create Recipe Card

<a id="opIdcreateRecipeCardGet"></a>

> Code samples

```bash
curl https://example.com/recipes/4632/card \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}"
```

`GET /recipes/{id}/card`

Generate a recipe card for a recipe.

<a href="https://spoonacular.com/food-api/docs#Create-Recipe-Card">Read entire docs</a>

<h3 id="create-recipe-card-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|number|true|The recipe id.|
|mask|query|string|false|The mask to put over the recipe image ("ellipseMask", "diamondMask", "starMask", "heartMask", "potMask", "fishMask").|
|backgroundImage|query|string|false|The background image ("none","background1", or "background2").|
|backgroundColor|query|string|false|The background color for the recipe card as a hex-string.|
|fontColor|query|string|false|The font color for the recipe card as a hex-string.|

> Example responses

> 200 Response

```json
{}
```

<h3 id="create-recipe-card-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyScheme
</aside>
