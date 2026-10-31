<h1 id="chomp-food-database-api-documentation">Chomp Food Database API Documentation v1.0.0-oas3</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

## Important
An **[API key](https://chompthis.com/api/)** is required for access to this API. Get yours at **[https://chompthis.com/api](https://chompthis.com/api/)**.

### Getting Started
  * **[Subscribe](https://chompthis.com/api/#pricing)** to the API.
  * Scroll down and click the "**Authorize**" button.
  * Enter your API key into the "**value**" input, click the "**Authorize**" button, then click the "**Close**" button.
  * Scroll down to the section titled "**default**" and click on the API endpoint you wish to use.
  * Click the "**Try it out**" button.
  * Enter the information the endpoint requires.
  * Click the "**Execute**" button.

### Example 
  * Branded food response object: **[View example &raquo;](https://raw.githubusercontent.com/chompfoods/examples/master/branded-food-response-object.json)**
  * Ingredient response object: **[View example &raquo;](https://raw.githubusercontent.com/chompfoods/examples/master/ingredient-response-object.json)**
  * Error response object: **[View example &raquo;](https://raw.githubusercontent.com/chompfoods/examples/master/error-response-object.json)**

### How Do I Find My API Key?
  * Your API key was sent to the email address you used to create your subscription.
  * You will also find your API key in the **[Client Center](https://chompthis.com/api/manage.php)**.
  * Read **[this article](https://desk.zoho.com/portal/chompthis/kb/articles/how-do-i-find-my-api-key)** for more information.

### Helpful Links
  * **Help & Support**
    * [Knowledge Base &raquo;](https://desk.zoho.com/portal/chompthis/kb/chomp)
    * [Support &raquo;](https://chompthis.com/api/ticket-new.php)
    * [Client Center &raquo;](https://chompthis.com/api/manage.php)
  * **Pricing**
    * [Subscription Options &raquo;](https://chompthis.com/api/)
    * [Cost Calculator &raquo;](https://chompthis.com/api/cost-calculator.php)
  * **Guidelines**
    * [Terms & License &raquo;](https://chompthis.com/api/terms.php)
    * [Attribution &raquo;](https://chompthis.com/api/docs/attribution.php)

Base URLs:

* <a href="https://chompthis.com/api/v2">https://chompthis.com/api/v2</a> - Production server (uses live data)

# Authentication

* API Key (ApiKeyAuth)
    - Parameter Name: **api_key**, in: query.

<h1 id="chomp-food-database-api-documentation-default">Default</h1>

## Get a branded food item using a barcode

> Code samples

```bash
curl "https://example.com/food/branded/barcode.php?code=string&api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /food/branded/barcode.php`

## Get data for a branded food using the food's UPC/EAN barcode.

**Example** 
> ```https://chompthis.com/api/v2/food/branded/barcode.php?api_key=API_KEY&code=CODE```

**Tips**
  * Read our **[Knowledge Base article](https://desk.zoho.com/portal/chompthis/kb/articles/im-having-trouble-getting-matches-for-barcodes-what-can-id-do)** for helpful tips and tricks.


<h3 id="get-a-branded-food-item-using-a-barcode-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|code|query|string|true|#### UPC/EAN barcode<br><br>**Example**<br>> ```&code=0842234000988```<br>|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "allergens": [
        "string"
      ],
      "barcode": "string",
      "brand": "string",
      "brand_list": [
        "string"
      ],
      "categories": [
        "string"
      ],
      "countries": [
        "string"
      ],
      "country_details": {
        "english_speaking": 0,
        "non_english_speaking": 0
      },
      "description": "string",
      "diet_flags": [
        {
          "compatibility_description": "string",
          "compatibility_level": 0,
          "diet_label": "string",
          "ingredient": "string",
          "ingredient_description": "string",
          "is_allergen": true,
          "is_compatible": "string"
        }
      ],
      "diet_labels": {
        "gluten_free": {
          "compatibility_level": 0,
          "confidence": 0,
          "confidence_description": "string",
          "is_compatible": true,
          "name": "string"
        },
        "vegan": {
          "compatibility_level": 0,
          "confidence": 0,
          "confidence_description": "string",
          "is_compatible": true,
          "name": "string"
        },
        "vegetarian": {
          "compatibility_level": 0,
          "confidence": 0,
          "confidence_description": "string",
          "is_compatible": true,
          "name": "string"
        }
      },
      "has_english_ingredients": true,
      "ingredient_list": [
        "string"
      ],
      "ingredients": "string",
      "keywords": [
        "string"
      ],
      "minerals": [
        "string"
      ],
      "name": "string",
      "nutrients": [
        {
          "data_points": 0,
          "description": "string",
          "measurement_unit": "string",
          "name": "string",
          "per_100g": 0,
          "rank": 0
        }
      ],
      "package": {
        "quantity": 0,
        "size": "string"
      },
      "packaging_photos": {
        "front": {
          "display": "string",
          "small": "string",
          "thumb": "string"
        },
        "ingredients": {
          "display": "string",
          "small": "string",
          "thumb": "string"
        },
        "nutrition": {
          "display": "string",
          "small": "string",
          "thumb": "string"
        }
      },
      "palm_oil_ingredients": [
        "string"
      ],
      "serving": {
        "measurement_unit": "string",
        "size": "string",
        "size_fulltext": "string"
      },
      "traces": [
        "string"
      ],
      "vitamins": [
        "string"
      ]
    }
  ]
}
```

<h3 id="get-a-branded-food-item-using-a-barcode-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|**Valid** - Will return an object containing any matching foods. <br>|[BrandedFoodObject](#schemabrandedfoodobject)|
|400|Bad Request|**Validation error** - Invalid parameters or request.<br>|None|
|401|Unauthorized|**Unauthorized** - Invalid API key, unauthorized access, or usage limits exceeded. ***[More information &raquo;](https://desk.zoho.com/portal/chompthis/kb/articles/what-is-a-rate-limit)***<br>|None|
|404|Not Found|**Not found** - No food items were found.<br>|None|
|500|Internal Server Error|**Server error** - Internal server error, request failed, or base error. *Please **[contact us](https://chompthis.com/api/ticket-new.php)** if you see this.*<br>|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Get a branded food item by name

> Code samples

```bash
curl "https://example.com/food/branded/name.php?name=string&api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /food/branded/name.php`

## Search for branded food items by name.

**Example**
> ```https://chompthis.com/api/v2/food/branded/name.php?api_key=API_KEY&name=NAME```

**Tips**
  * Get started by using our **[food lookup tool](https://chompthis.com/api/lookup.php)**.

> This API endpoint is only available to Standard and Premium API subscribers. Please consider upgrading your subscription if you are subscribed to the Limited plan. **[Read this](https://desk.zoho.com/portal/chompthis/kb/articles/can-i-upgrade-downgrade-my-subscription)** if you aren't sure how to upgrade your subscription.


<h3 id="get-a-branded-food-item-by-name-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|query|string|true|#### Search for branded food items using a general food name keyword. This does not have to exactly match the "official" name for the food.<br><br>**Example**<br>> ```&name=Starburst```<br>|
|limit|query|integer|false|#### Set maximum number of records you want the API to return. The default value is "**10**."<br><br>**Example**<br>> ```&limit=10```<br>|
|page|query|integer|false|#### This is how you paginate the search result. By default, you will see the first 10 records. You must increment the page number to access the next 10 records, and so on. The default value is "**1**."<br><br>**Example**<br>> ```&page=1```<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|limit|1|
|limit|2|
|limit|3|
|limit|4|
|limit|5|
|limit|6|
|limit|7|
|limit|8|
|limit|9|
|limit|10|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "allergens": [
        "string"
      ],
      "barcode": "string",
      "brand": "string",
      "brand_list": [
        "string"
      ],
      "categories": [
        "string"
      ],
      "countries": [
        "string"
      ],
      "country_details": {
        "english_speaking": 0,
        "non_english_speaking": 0
      },
      "description": "string",
      "diet_flags": [
        {
          "compatibility_description": "string",
          "compatibility_level": 0,
          "diet_label": "string",
          "ingredient": "string",
          "ingredient_description": "string",
          "is_allergen": true,
          "is_compatible": "string"
        }
      ],
      "diet_labels": {
        "gluten_free": {
          "compatibility_level": 0,
          "confidence": 0,
          "confidence_description": "string",
          "is_compatible": true,
          "name": "string"
        },
        "vegan": {
          "compatibility_level": 0,
          "confidence": 0,
          "confidence_description": "string",
          "is_compatible": true,
          "name": "string"
        },
        "vegetarian": {
          "compatibility_level": 0,
          "confidence": 0,
          "confidence_description": "string",
          "is_compatible": true,
          "name": "string"
        }
      },
      "has_english_ingredients": true,
      "ingredient_list": [
        "string"
      ],
      "ingredients": "string",
      "keywords": [
        "string"
      ],
      "minerals": [
        "string"
      ],
      "name": "string",
      "nutrients": [
        {
          "data_points": 0,
          "description": "string",
          "measurement_unit": "string",
          "name": "string",
          "per_100g": 0,
          "rank": 0
        }
      ],
      "package": {
        "quantity": 0,
        "size": "string"
      },
      "packaging_photos": {
        "front": {
          "display": "string",
          "small": "string",
          "thumb": "string"
        },
        "ingredients": {
          "display": "string",
          "small": "string",
          "thumb": "string"
        },
        "nutrition": {
          "display": "string",
          "small": "string",
          "thumb": "string"
        }
      },
      "palm_oil_ingredients": [
        "string"
      ],
      "serving": {
        "measurement_unit": "string",
        "size": "string",
        "size_fulltext": "string"
      },
      "traces": [
        "string"
      ],
      "vitamins": [
        "string"
      ]
    }
  ]
}
```

<h3 id="get-a-branded-food-item-by-name-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|**Valid** - Will return an object containing any matching foods. <br>|[BrandedFoodObject](#schemabrandedfoodobject)|
|400|Bad Request|**Validation error** - Invalid parameters or request.<br>|None|
|401|Unauthorized|**Unauthorized** - Invalid API key, unauthorized access, or usage limits exceeded. ***[More information &raquo;](https://desk.zoho.com/portal/chompthis/kb/articles/what-is-a-rate-limit)***<br>|None|
|404|Not Found|**Not found** - No food items were found.<br>|None|
|500|Internal Server Error|**Server error** - Internal server error, request failed, or base error. *Please **[contact us](https://chompthis.com/api/ticket-new.php)** if you see this.*<br>|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Get data for branded food items using various search parameters

> Code samples

```bash
curl "https://example.com/food/branded/search.php?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /food/branded/search.php`

## Search for branded food items using various parameters.

**Example**
> ```https://chompthis.com/api/v2/food/branded/search.php?api_key=API_KEY&brand=BRAND&country=COUNTRY&page=1```

**Tips** 
  * Get started by using the **[Query Builder](https://chompthis.com/api/build.php)**.

> This API endpoint is only available to Standard and Premium API subscribers. Please consider upgrading your subscription if you are subscribed to the Limited plan. **[Read this](https://desk.zoho.com/portal/chompthis/kb/articles/can-i-upgrade-downgrade-my-subscription)** if you aren't sure how to upgrade your subscription.


<h3 id="get-data-for-branded-food-items-using-various-search-parameters-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|allergen|query|string|false|#### Filter the search to only include branded foods that contain a specific allergen.<br><br>**Example**<br>> ```&allergen=Peanuts```<br><br>**Important Note**: This parameter cannot be used alone. It must be paired with at least 1 additional parameter.<br>|
|brand|query|string|false|#### Filter the search to only include branded foods that are owned by a specific brand.<br><br>**Example**<br>> ```&brand=Starbucks```<br>|
|category|query|string|false|#### Filter the search to only include branded foods from a specific category.<br><br>**Example**<br>> ```&category=Plant Based Foods```<br>|
|country|query|string|false|#### Filter the search to only include branded foods that are sold in a specific country.<br><br>**Example**<br>> ```&country=United States```<br><br>**Important Note**: This parameter cannot be used alone. It must be paired with at least 1 additional parameter.<br>|
|diet|query|string|false|#### Filter the search to only include branded foods that are considered compatible with a specific diet.<br><br>**Important Note**: This parameter cannot be used alone. It must be paired with at least 1 additional parameter.<br>|
|ingredient|query|string|false|#### Filter the search to only include branded foods that contain a specific ingredient.<br><br>**Example**<br>> ```&ingredient=Salt```<br>|
|keyword|query|string|false|#### Filter the search to only include branded foods that are associated with a specific keyword.<br><br>**Example**<br>> ```&keyword=Organic```<br><br>**Important Note**: This parameter cannot be used alone. It must be paired with at least 1 additional parameter.<br>|
|mineral|query|string|false|#### Filter the search to only include branded foods that contain a specific mineral.<br><br>**Example**<br>> ```&mineral=Potassium```<br>|
|nutrient|query|string|false|#### Filter the search to only include branded foods that contain a specific nutrient.<br><br>**Example**<br>> ```&nutrient=Caffeine```<br><br>**Important Note**: This parameter cannot be used alone. It must be paired with at least 1 additional parameter.<br>|
|palm_oil|query|string|false|#### Filter the search to only include branded foods that contain a specific ingredient made using palm oil.<br><br>**Example**<br>> ```&palm_oil=E160a Beta Carotene```<br>|
|trace|query|string|false|### Filter the search to only include branded foods that contain a specific trace ingredient.<br><br>**Example**<br>> ```&trace=Tree Nuts```<br><br>**Important Note**: This parameter cannot be used alone. It must be paired with at least 1 additional parameter.<br>|
|vitamin|query|string|false|#### Filter the search to only include branded foods that contain a specific vitamin.<br><br>**Example**<br>> ```&vitamin=Biotin```<br>|
|limit|query|integer|false|#### Set maximum number of records you want the API to return. The default value is "**10**."<br><br>**Example**<br>> ```&limit=10```<br>|
|page|query|integer|false|#### This is how you paginate the search result. By default, you will see the first 10 records. You must increment the page number to access the next 10 records, and so on. The default value is "**1**."<br><br>**Example**<br>> ```&page=1```<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|diet|Vegan|
|diet|Vegetarian|
|diet|Gluten Free|
|limit|1|
|limit|2|
|limit|3|
|limit|4|
|limit|5|
|limit|6|
|limit|7|
|limit|8|
|limit|9|
|limit|10|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "allergens": [
        "string"
      ],
      "barcode": "string",
      "brand": "string",
      "brand_list": [
        "string"
      ],
      "categories": [
        "string"
      ],
      "countries": [
        "string"
      ],
      "country_details": {
        "english_speaking": 0,
        "non_english_speaking": 0
      },
      "description": "string",
      "diet_flags": [
        {
          "compatibility_description": "string",
          "compatibility_level": 0,
          "diet_label": "string",
          "ingredient": "string",
          "ingredient_description": "string",
          "is_allergen": true,
          "is_compatible": "string"
        }
      ],
      "diet_labels": {
        "gluten_free": {
          "compatibility_level": 0,
          "confidence": 0,
          "confidence_description": "string",
          "is_compatible": true,
          "name": "string"
        },
        "vegan": {
          "compatibility_level": 0,
          "confidence": 0,
          "confidence_description": "string",
          "is_compatible": true,
          "name": "string"
        },
        "vegetarian": {
          "compatibility_level": 0,
          "confidence": 0,
          "confidence_description": "string",
          "is_compatible": true,
          "name": "string"
        }
      },
      "has_english_ingredients": true,
      "ingredient_list": [
        "string"
      ],
      "ingredients": "string",
      "keywords": [
        "string"
      ],
      "minerals": [
        "string"
      ],
      "name": "string",
      "nutrients": [
        {
          "data_points": 0,
          "description": "string",
          "measurement_unit": "string",
          "name": "string",
          "per_100g": 0,
          "rank": 0
        }
      ],
      "package": {
        "quantity": 0,
        "size": "string"
      },
      "packaging_photos": {
        "front": {
          "display": "string",
          "small": "string",
          "thumb": "string"
        },
        "ingredients": {
          "display": "string",
          "small": "string",
          "thumb": "string"
        },
        "nutrition": {
          "display": "string",
          "small": "string",
          "thumb": "string"
        }
      },
      "palm_oil_ingredients": [
        "string"
      ],
      "serving": {
        "measurement_unit": "string",
        "size": "string",
        "size_fulltext": "string"
      },
      "traces": [
        "string"
      ],
      "vitamins": [
        "string"
      ]
    }
  ]
}
```

<h3 id="get-data-for-branded-food-items-using-various-search-parameters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|**Valid** - Will return an object containing any matching foods. <br>|[BrandedFoodObject](#schemabrandedfoodobject)|
|400|Bad Request|**Validation error** - Invalid parameters or request.<br>|None|
|401|Unauthorized|**Unauthorized** - Invalid API key, unauthorized access, or usage limits exceeded. ***[More information &raquo;](https://desk.zoho.com/portal/chompthis/kb/articles/what-is-a-rate-limit)***<br>|None|
|404|Not Found|**Not found** - No food items were found.<br>|None|
|500|Internal Server Error|**Server error** - Internal server error, request failed, or base error. *Please **[contact us](https://chompthis.com/api/ticket-new.php)** if you see this.*<br>|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Get raw/generic food ingredient item(s)

> Code samples

```bash
curl "https://example.com/food/ingredient/search.php?find=string&api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /food/ingredient/search.php`

## Get data for a specific ingredient or a specific set of ingredients.

**Example #1: Single Ingredient**
> ```https://chompthis.com/api/v2/ingredient/search.php?api_key=API_KEY&find=raw broccoli```

**Example #2: Set of Ingredients**
> ```https://chompthis.com/api/v2/ingredient/search.php?api_key=API_KEY&find=raw broccoli,mashed potatoes,chicken drumstick```

**Tips**
  * Expose ingredient endpoints by using our **[food lookup tool](https://chompthis.com/api/lookup.php)**.

> This API endpoint is only available to Standard and Premium API subscribers. Please consider upgrading your subscription if you are subscribed to the Limited plan. **[Read this](https://desk.zoho.com/portal/chompthis/kb/articles/can-i-upgrade-downgrade-my-subscription)** if you aren't sure how to upgrade your subscription.


<h3 id="get-rawgeneric-food-ingredient-items-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|find|query|string|true|Search our database for a single ingredient or a specific set of ingredients.<br><br>**Example #1: Single Ingredient**<br>> ```&find=raw broccoli```<br><br>**Example #2: Set of Ingredients**<br>> ```&find=raw broccoli,buttermilk waffle,mashed potatoes```<br><br>**Important Notes** <br>  * Comma-separated lists cannot contain more than **10 ingredients**. You must perform additional API calls if you are looking up more than 10 ingredients.<br>|
|limit|query|integer|false|#### Set maximum number of records you want the API to return, per search term. The default value is "**1**."<br><br>**Example**<br>> ```&limit=3```<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|limit|1|
|limit|2|
|limit|3|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "calorie_conversion_factor": {
        "carbohydrate_value": 0,
        "fat_value": 0,
        "protein_value": 0
      },
      "categories": [
        "string"
      ],
      "common_name": "string",
      "components": [
        {
          "data_points": 0,
          "gram_weight": 0,
          "is_refuse": true,
          "name": "string",
          "pct_weight": 0
        }
      ],
      "footnote": "string",
      "name": "string",
      "nutrients": [
        {
          "data_points": 0,
          "description": "string",
          "footnote": "string",
          "max": 0,
          "measurement_unit": "string",
          "median": 0,
          "min": 0,
          "name": "string",
          "per_100g": 0,
          "rank": 0
        }
      ],
      "portions": [
        {
          "data_points": 0,
          "description": "string",
          "footnote": "string",
          "gram_weight": 0,
          "measurement_unit": "string",
          "modifier": "string"
        }
      ],
      "protein_conversion_factor": 0,
      "score": "string",
      "search_term": "string"
    }
  ]
}
```

<h3 id="get-rawgeneric-food-ingredient-items-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|**Valid** - Will return an object containing any matching ingredient foods. <br>|[IngredientObject](#schemaingredientobject)|
|400|Bad Request|**Validation error** - Invalid parameters or request.<br>|None|
|401|Unauthorized|**Unauthorized** - Invalid API key, unauthorized access, or usage limits exceeded. ***[More information &raquo;](https://desk.zoho.com/portal/chompthis/kb/articles/what-is-a-rate-limit)***<br>|None|
|404|Not Found|**Not found** - No food items were found.<br>|None|
|500|Internal Server Error|**Server error** - Internal server error, request failed, or base error. *Please **[contact us](https://chompthis.com/api/ticket-new.php)** if you see this.*<br>|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

# Schemas

<h2 id="tocS_BrandedFoodObject">BrandedFoodObject</h2>
<!-- backwards compatibility -->
<a id="schemabrandedfoodobject"></a>
<a id="schema_BrandedFoodObject"></a>
<a id="tocSbrandedfoodobject"></a>
<a id="tocsbrandedfoodobject"></a>

```json
{
  "items": [
    {
      "allergens": [
        "string"
      ],
      "barcode": "string",
      "brand": "string",
      "brand_list": [
        "string"
      ],
      "categories": [
        "string"
      ],
      "countries": [
        "string"
      ],
      "country_details": {
        "english_speaking": 0,
        "non_english_speaking": 0
      },
      "description": "string",
      "diet_flags": [
        {
          "compatibility_description": "string",
          "compatibility_level": 0,
          "diet_label": "string",
          "ingredient": "string",
          "ingredient_description": "string",
          "is_allergen": true,
          "is_compatible": "string"
        }
      ],
      "diet_labels": {
        "gluten_free": {
          "compatibility_level": 0,
          "confidence": 0,
          "confidence_description": "string",
          "is_compatible": true,
          "name": "string"
        },
        "vegan": {
          "compatibility_level": 0,
          "confidence": 0,
          "confidence_description": "string",
          "is_compatible": true,
          "name": "string"
        },
        "vegetarian": {
          "compatibility_level": 0,
          "confidence": 0,
          "confidence_description": "string",
          "is_compatible": true,
          "name": "string"
        }
      },
      "has_english_ingredients": true,
      "ingredient_list": [
        "string"
      ],
      "ingredients": "string",
      "keywords": [
        "string"
      ],
      "minerals": [
        "string"
      ],
      "name": "string",
      "nutrients": [
        {
          "data_points": 0,
          "description": "string",
          "measurement_unit": "string",
          "name": "string",
          "per_100g": 0,
          "rank": 0
        }
      ],
      "package": {
        "quantity": 0,
        "size": "string"
      },
      "packaging_photos": {
        "front": {
          "display": "string",
          "small": "string",
          "thumb": "string"
        },
        "ingredients": {
          "display": "string",
          "small": "string",
          "thumb": "string"
        },
        "nutrition": {
          "display": "string",
          "small": "string",
          "thumb": "string"
        }
      },
      "palm_oil_ingredients": [
        "string"
      ],
      "serving": {
        "measurement_unit": "string",
        "size": "string",
        "size_fulltext": "string"
      },
      "traces": [
        "string"
      ],
      "vitamins": [
        "string"
      ]
    }
  ]
}
```

Please read the description of each field in this API response object example. By default, the value of each field is **null**. This indicates an unknown state or that no data exists.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[object]|false|none|An array containing an object for each individual item returned by your API call.|

<h2 id="tocS_IngredientObject">IngredientObject</h2>
<!-- backwards compatibility -->
<a id="schemaingredientobject"></a>
<a id="schema_IngredientObject"></a>
<a id="tocSingredientobject"></a>
<a id="tocsingredientobject"></a>

```json
{
  "items": [
    {
      "calorie_conversion_factor": {
        "carbohydrate_value": 0,
        "fat_value": 0,
        "protein_value": 0
      },
      "categories": [
        "string"
      ],
      "common_name": "string",
      "components": [
        {
          "data_points": 0,
          "gram_weight": 0,
          "is_refuse": true,
          "name": "string",
          "pct_weight": 0
        }
      ],
      "footnote": "string",
      "name": "string",
      "nutrients": [
        {
          "data_points": 0,
          "description": "string",
          "footnote": "string",
          "max": 0,
          "measurement_unit": "string",
          "median": 0,
          "min": 0,
          "name": "string",
          "per_100g": 0,
          "rank": 0
        }
      ],
      "portions": [
        {
          "data_points": 0,
          "description": "string",
          "footnote": "string",
          "gram_weight": 0,
          "measurement_unit": "string",
          "modifier": "string"
        }
      ],
      "protein_conversion_factor": 0,
      "score": "string",
      "search_term": "string"
    }
  ]
}
```

Please read the description of each field in this API response object example. By default, the value of each field is **null**. This indicates an unknown state or that no data exists.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[object]|false|none|An array containing an object for each individual item returned by your API call.|
