<h1 id="1000000-recipe-and-grocery-list-api-v2">1,000,000+ Recipe and Grocery List API (v2) vpartner</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

#Documentation

This is the documentation for the partner endpoint of the BigOven Recipe and Grocery List API.

The update brings with it Swagger-based documentation. [Swagger](http://swagger.io) is an emerging standard for describing REST-based APIs, and with this Swagger-compliant endpoint (above), you can make ready-to-go interface libraries for your code via [swagger-codegen](https://github.com/swagger-api/swagger-codegen). For instance, it's easy to generate libraries for Node.js, Java, Ruby, ASP.NET MVC, jQuery, php and more!

You can also try out the endpoint calls with your own api_key right here on this page. Be sure to enter your api_key above to use the "Try it out!" buttons on this page.

##Start Here

Developers new to the BigOven API should start with this version, not with the legacy API. We'll be making improvements to this API over time, and doing only bug fixes on the v1 API.



To pretend you're a BigOven user (for instance, to get your recently viewed recipes or your grocery list), you need to pass in Basic Authentication information in the header, just as with the v1 API. We do now require that you make all calls via https. You need to pass your api_key in with every call, though this can now be done on the header (send a request header "X-BigOven-API-Key" set to your api_key value, e.g., Request["X-BigOven-API-Key"]="your-key-here".)

##Migration Notes

For existing partners, we encourage you to [migrate](https://api2.bigoven.com), and while at this writing we have no hard-and-fast termination date for the v1 API, we strongly prefer that you migrate by January 1, 2017. While the changes aren't overly complex, there are several breaking changes, including refactoring of recipe search and results and removal of support for XML. This is not a simply plug-and-play replacement to the v1 API. With respect to an exclusive focus on JSON, the world has spoken, and it prefers JSON for REST-based API's. We've taken numerous steps to refactor the API to make it more REST-compliant. Note that this v2 API will be the preferred API from this point onward, so we encourage developers to migrate to this new format. We have put together some [migration notes](/web/documentation/migration-to-v2) that we encourage you to read carefully.

##Photos

See our [photos documentation](https://api2.bigoven.com/web/documentation/recipe-images). 

For more information on usage of this API, including features, pricing, rate limits, terms and conditions, please visit the [BigOven API website](https://api2.bigoven.com).

Base URLs:

* <a href="https://api2.bigoven.com">https://api2.bigoven.com</a>

<a href="http://api2.bigoven.com/web/documentation">External documentation</a>

# Authentication

* API Key (api_key)
    - Parameter Name: **X-BigOven-API-Key**, in: header. Pass your api_key in the header (recommended) or as a URL parameter. For the URL parameter, use api_key. For the header, send it as a header value for: X-BigOven-API-Key

- HTTP Authentication, scheme: basic Basic HTTP Authentication is used for those endpoint calls where you want to act as a BigOven user -- e.g., to get the list of favorites of a signed-in user, or add items to their grocery list.

<h1 id="1000000-recipe-and-grocery-list-api-v2-collection">Collection</h1>

## Gets a recipe collection. A recipe collection is a curated set of recipes.

<a id="opIdCollection_GetCollection"></a>

> Code samples

```bash
curl https://example.com/collection/0 \
  -H 'Accept: application/json'
```

`GET /collection/{id}`

<h3 id="gets-a-recipe-collection-a-recipe-collection-is-a-curated-set-of-recipes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|the collection identifier|
|rpp|query|integer(int32)|false|results per page|
|pg|query|integer(int32)|false|page number (starting with 1)|
|test|query|boolean|false|none|
|sessionForLogging|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "ResultCount": 0,
  "Results": [
    {
      "Category": "string",
      "CreationDate": "1970-01-01T00:00:00Z",
      "Cuisine": "string",
      "HasVideos": true,
      "IsBookmark": true,
      "IsPrivate": true,
      "IsRecipeScan": true,
      "Microcategory": "string",
      "PhotoUrl": "string",
      "Poster": {
        "FirstName": "string",
        "LastName": "string",
        "PhotoUrl": "string",
        "UserID": 0,
        "UserName": "string"
      },
      "RecipeID": 0,
      "ReviewCount": 0,
      "Servings": 0,
      "StarRating": 0,
      "Subcategory": "string",
      "Title": "string",
      "TotalTries": 0,
      "WebURL": "string"
    }
  ],
  "SpellSuggest": "string"
}
```

<h3 id="gets-a-recipe-collection-a-recipe-collection-is-a-curated-set-of-recipes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[BigOven.Model.API2.RecipeSearchResult](#schemabigoven.model.api2.recipesearchresult)|

<aside class="success">
This operation does not require authentication
</aside>

## Gets a recipe collection metadata. A recipe collection is a curated set of recipes.

<a id="opIdCollection_GetCollectionMeta"></a>

> Code samples

```bash
curl https://example.com/collection/0/meta \
  -H 'Accept: application/json'
```

`GET /collection/{id}/meta`

<h3 id="gets-a-recipe-collection-metadata-a-recipe-collection-is-a-curated-set-of-recipes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|the collection identifier|

> Example responses

> 200 Response

```json
{
  "Description": "string",
  "ID": 0,
  "IsFiltered": true,
  "IsSponsored": true,
  "MobileUrl": "string",
  "PRO": true,
  "PhotoUrl": "string",
  "Results": [
    {
      "Category": "string",
      "CreationDate": "1970-01-01T00:00:00Z",
      "Cuisine": "string",
      "HasVideos": true,
      "IsBookmark": true,
      "IsPrivate": true,
      "IsRecipeScan": true,
      "Microcategory": "string",
      "PhotoUrl": "string",
      "Poster": {
        "FirstName": "string",
        "LastName": "string",
        "PhotoUrl": "string",
        "UserID": 0,
        "UserName": "string"
      },
      "RecipeID": 0,
      "ReviewCount": 0,
      "Servings": 0,
      "StarRating": 0,
      "Subcategory": "string",
      "Title": "string",
      "TotalTries": 0,
      "WebURL": "string"
    }
  ],
  "Title": "string",
  "Token": "string",
  "WebUrl": "string"
}
```

<h3 id="gets-a-recipe-collection-metadata-a-recipe-collection-is-a-curated-set-of-recipes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[BigOven.Model.API2.CollectionInfo](#schemabigoven.model.api2.collectioninfo)|

<aside class="success">
This operation does not require authentication
</aside>

## Get the list of current, seasonal recipe collections. From here, you can use the /collection/{id} endpoint to retrieve the recipes in those collections.

<a id="opIdCollection_Collections"></a>

> Code samples

```bash
curl https://example.com/collections \
  -H 'Accept: application/json'
```

`GET /collections`

<h3 id="get-the-list-of-current-seasonal-recipe-collections-from-here-you-can-use-the-collectionid-endpoint-to-retrieve-the-recipes-in-those-collections-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|test|query|string|false|none|

> Example responses

> 200 Response

```json
[
  {
    "Description": "string",
    "ID": 0,
    "IsFiltered": true,
    "IsSponsored": true,
    "MobileUrl": "string",
    "PRO": true,
    "PhotoUrl": "string",
    "Results": [
      {
        "Category": "string",
        "CreationDate": "1970-01-01T00:00:00Z",
        "Cuisine": "string",
        "HasVideos": true,
        "IsBookmark": true,
        "IsPrivate": true,
        "IsRecipeScan": true,
        "Microcategory": "string",
        "PhotoUrl": "string",
        "Poster": {
          "FirstName": "string",
          "LastName": "string",
          "PhotoUrl": "string",
          "UserID": 0,
          "UserName": "string"
        },
        "RecipeID": 0,
        "ReviewCount": 0,
        "Servings": 0,
        "StarRating": 0,
        "Subcategory": "string",
        "Title": "string",
        "TotalTries": 0,
        "WebURL": "string"
      }
    ],
    "Title": "string",
    "Token": "string",
    "WebUrl": "string"
  }
]
```

<h3 id="get-the-list-of-current-seasonal-recipe-collections-from-here-you-can-use-the-collectionid-endpoint-to-retrieve-the-recipes-in-those-collections-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-the-list-of-current-seasonal-recipe-collections-from-here-you-can-use-the-collectionid-endpoint-to-retrieve-the-recipes-in-those-collections-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[BigOven.Model.API2.CollectionInfo](#schemabigoven.model.api2.collectioninfo)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="1000000-recipe-and-grocery-list-api-v2-grocerylist">GroceryList</h1>

## Get the user's grocery list. User is determined by Basic Authentication.

<a id="opIdGroceryList_Get"></a>

> Code samples

```bash
curl https://example.com/grocerylist \
  -H 'Accept: application/json'
```

`GET /grocerylist`

> Example responses

> 200 Response

```json
{
  "Items": [
    {
      "BigOvenObject": "string",
      "CreationDate": "1970-01-01T00:00:00Z",
      "Department": "string",
      "DisplayQuantity": "string",
      "GUID": "string",
      "IsChecked": true,
      "ItemID": 0,
      "LastModified": "1970-01-01T00:00:00Z",
      "LocalStatus": "string",
      "Name": "string",
      "Notes": "string",
      "RecipeID": 0,
      "ThirdPartyURL": "string"
    }
  ],
  "LastModified": "1970-01-01T00:00:00Z",
  "Recipes": [
    {
      "Category": "string",
      "CreationDate": "1970-01-01T00:00:00Z",
      "Cuisine": "string",
      "HasVideos": true,
      "IsBookmark": true,
      "IsPrivate": true,
      "IsRecipeScan": true,
      "Microcategory": "string",
      "PhotoUrl": "string",
      "Poster": {
        "FirstName": "string",
        "LastName": "string",
        "PhotoUrl": "string",
        "UserID": 0,
        "UserName": "string"
      },
      "RecipeID": 0,
      "ReviewCount": 0,
      "Servings": 0,
      "StarRating": 0,
      "Subcategory": "string",
      "Title": "string",
      "TotalTries": 0,
      "WebURL": "string"
    }
  ],
  "VersionGuid": "string"
}
```

<h3 id="get-the-users-grocery-list-user-is-determined-by-basic-authentication-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[BigOven.Model.API2.GroceryList](#schemabigoven.model.api2.grocerylist)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete all the items on a grocery list; faster operation than a sync with deleted items.

<a id="opIdGroceryList_Delete"></a>

> Code samples

```bash
curl https://example.com/grocerylist \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /grocerylist`

> Example responses

> 200 Response

```json
{}
```

<h3 id="delete-all-the-items-on-a-grocery-list-faster-operation-than-a-sync-with-deleted-items-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[System.Object](#schemasystem.object)|

<aside class="success">
This operation does not require authentication
</aside>

## Clears the checked lines.

<a id="opIdGroceryList_GroceryListRemoveMarkedItems"></a>

> Code samples

```bash
curl https://example.com/grocerylist/clearcheckedlines \
  -X POST \
  -H 'Accept: application/json'
```

`POST /grocerylist/clearcheckedlines`

> Example responses

> 200 Response

```json
{
  "Items": [
    {
      "BigOvenObject": "string",
      "CreationDate": "1970-01-01T00:00:00Z",
      "Department": "string",
      "DisplayQuantity": "string",
      "GUID": "string",
      "IsChecked": true,
      "ItemID": 0,
      "LastModified": "1970-01-01T00:00:00Z",
      "LocalStatus": "string",
      "Name": "string",
      "Notes": "string",
      "RecipeID": 0,
      "ThirdPartyURL": "string"
    }
  ],
  "LastModified": "1970-01-01T00:00:00Z",
  "Recipes": [
    {
      "Category": "string",
      "CreationDate": "1970-01-01T00:00:00Z",
      "Cuisine": "string",
      "HasVideos": true,
      "IsBookmark": true,
      "IsPrivate": true,
      "IsRecipeScan": true,
      "Microcategory": "string",
      "PhotoUrl": "string",
      "Poster": {
        "FirstName": "string",
        "LastName": "string",
        "PhotoUrl": "string",
        "UserID": 0,
        "UserName": "string"
      },
      "RecipeID": 0,
      "ReviewCount": 0,
      "Servings": 0,
      "StarRating": 0,
      "Subcategory": "string",
      "Title": "string",
      "TotalTries": 0,
      "WebURL": "string"
    }
  ],
  "VersionGuid": "string"
}
```

<h3 id="clears-the-checked-lines-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[BigOven.Model.API2.GroceryList](#schemabigoven.model.api2.grocerylist)|

<aside class="success">
This operation does not require authentication
</aside>

## Departmentalize a list of strings -- used for ad-hoc grocery list item addition

<a id="opIdGroceryList_Department"></a>

> Code samples

```bash
curl https://example.com/grocerylist/department \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "items": "string"
  }'
```

`POST /grocerylist/department`

> Body parameter

```json
{
  "items": "string"
}
```

<h3 id="departmentalize-a-list-of-strings----used-for-ad-hoc-grocery-list-item-addition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[API2.Controllers.WebAPI.GroceryListController.DepartmentModel](#schemaapi2.controllers.webapi.grocerylistcontroller.departmentmodel)|true|see DepartmentModel for the request payload|
|» items|body|string|false|Gets or sets the items.|

> Example responses

> 200 Response

```json
[
  {
    "dept": "string",
    "item": "string"
  }
]
```

<h3 id="departmentalize-a-list-of-strings----used-for-ad-hoc-grocery-list-item-addition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="departmentalize-a-list-of-strings----used-for-ad-hoc-grocery-list-item-addition-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[API2.GroceryListDepartmentResult](#schemaapi2.grocerylistdepartmentresult)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Add a single line item to the grocery list

> Code samples

```bash
curl https://example.com/grocerylist/item \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "department": "string",
    "name": "string",
    "notes": "string",
    "quantity": "string",
    "unit": "string"
  }'
```

`POST /grocerylist/item`

> Body parameter

```json
{
  "department": "string",
  "name": "string",
  "notes": "string",
  "quantity": "string",
  "unit": "string"
}
```

<h3 id="add-a-single-line-item-to-the-grocery-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[API2.Controllers.WebAPI.GroceryListController.PostToGroceryListRecipeRequest](#schemaapi2.controllers.webapi.grocerylistcontroller.posttogrocerylistreciperequest)|true|name, quantity, unit, notes, department|
|» department|body|string|false|Gets or sets the department.|
|» name|body|string|false|Gets or sets the name.|
|» notes|body|string|false|Gets or sets the notes.|
|» quantity|body|string|false|Gets or sets the quantity.|
|» unit|body|string|false|Gets or sets the unit.|

> Example responses

> 200 Response

```json
{
  "DateAdded": "1970-01-01T00:00:00Z",
  "Dept": "string",
  "GUID": "string",
  "HTMLItemName": "string",
  "IsChecked": true,
  "ItemName": "string",
  "LastModified": "1970-01-01T00:00:00Z",
  "ListID": 0,
  "MealPlanID": 0,
  "MealPlanObjectType": 0,
  "Notes": "string",
  "PendingAddition": true,
  "RecipeID": 0,
  "ShoppingListLineID": 0,
  "Store": "string",
  "TextAmt": "string",
  "ThirdPartyHost": "string",
  "ThirdPartyTitle": "string",
  "ThirdPartyURL": "string"
}
```

<h3 id="add-a-single-line-item-to-the-grocery-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[BigOven.Model.ShoppingListLine](#schemabigoven.model.shoppinglistline)|

<aside class="success">
This operation does not require authentication
</aside>

## Update a grocery item by GUID

<a id="opIdGroceryList_GroceryListItemGuid"></a>

> Code samples

```bash
curl https://example.com/grocerylist/item/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "department": "string",
    "guid": "string",
    "ischecked": true,
    "name": "string",
    "notes": "string",
    "quantity": "string",
    "unit": "string"
  }'
```

`PUT /grocerylist/item/{guid}`

> Body parameter

```json
{
  "department": "string",
  "guid": "string",
  "ischecked": true,
  "name": "string",
  "notes": "string",
  "quantity": "string",
  "unit": "string"
}
```

<h3 id="update-a-grocery-item-by-guid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|guid|path|string|true|none|
|body|body|[API2.Controllers.WebAPI.GroceryListController.UpdateItemByGuidRequest](#schemaapi2.controllers.webapi.grocerylistcontroller.updateitembyguidrequest)|true|none|
|» department|body|string|false|Gets or sets the department.|
|» guid|body|string|false|Gets or sets the unique identifier.|
|» ischecked|body|boolean|false|Gets or sets the ischecked.|
|» name|body|string|false|Gets or sets the name.|
|» notes|body|string|false|Gets or sets the notes.|
|» quantity|body|string|false|Gets or sets the quantity.|
|» unit|body|string|false|Gets or sets the unit.|

> Example responses

> 200 Response

```json
{}
```

<h3 id="update-a-grocery-item-by-guid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[System.Object](#schemasystem.object)|

<aside class="success">
This operation does not require authentication
</aside>

## /grocerylist/item/{guid} DELETE will delete this item assuming you own it.

<a id="opIdGroceryList_DeleteItemByGuid"></a>

> Code samples

```bash
curl https://example.com/grocerylist/item/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /grocerylist/item/{guid}`

<h3 id="grocerylistitemguid-delete-will-delete-this-item-assuming-you-own-it-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|guid|path|string|true|none|

> Example responses

> 200 Response

```json
{}
```

<h3 id="grocerylistitemguid-delete-will-delete-this-item-assuming-you-own-it-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[System.Object](#schemasystem.object)|

<aside class="success">
This operation does not require authentication
</aside>

## Add a single line item to the grocery list

<a id="opIdGroceryList_Post"></a>

> Code samples

```bash
curl https://example.com/grocerylist/line \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "text": "string"
  }'
```

`POST /grocerylist/line`

> Body parameter

```json
{
  "text": "string"
}
```

<h3 id="add-a-single-line-item-to-the-grocery-list-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[API2.Controllers.WebAPI.GroceryListController.PostGroceryListAddLineRequest](#schemaapi2.controllers.webapi.grocerylistcontroller.postgrocerylistaddlinerequest)|true|name, quantity, unit, notes, department|
|» text|body|string|false|Gets or sets the text.|

> Example responses

> 200 Response

```json
{
  "DateAdded": "1970-01-01T00:00:00Z",
  "Dept": "string",
  "GUID": "string",
  "HTMLItemName": "string",
  "IsChecked": true,
  "ItemName": "string",
  "LastModified": "1970-01-01T00:00:00Z",
  "ListID": 0,
  "MealPlanID": 0,
  "MealPlanObjectType": 0,
  "Notes": "string",
  "PendingAddition": true,
  "RecipeID": 0,
  "ShoppingListLineID": 0,
  "Store": "string",
  "TextAmt": "string",
  "ThirdPartyHost": "string",
  "ThirdPartyTitle": "string",
  "ThirdPartyURL": "string"
}
```

<h3 id="add-a-single-line-item-to-the-grocery-list-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[BigOven.Model.ShoppingListLine](#schemabigoven.model.shoppinglistline)|

<aside class="success">
This operation does not require authentication
</aside>

## Add a Recipe to the grocery list. In the request data, pass in recipeId, scale (scale=1.0 says to keep the recipe the same size as originally posted), markAsPending (true/false) to indicate that the lines in the recipe should be marked in a &quot;pending&quot; (unconfirmed by user) state.

<a id="opIdGroceryList_AddRecipe"></a>

> Code samples

```bash
curl https://example.com/grocerylist/recipe \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "markAsPending": true,
    "recipeId": 0,
    "scale": 0
  }'
```

`POST /grocerylist/recipe`

> Body parameter

```json
{
  "markAsPending": true,
  "recipeId": 0,
  "scale": 0
}
```

<h3 id="add-a-recipe-to-the-grocery-list-in-the-request-data-pass-in-recipeid-scale-scale10-says-to-keep-the-recipe-the-same-size-as-originally-posted-markaspending-truefalse-to-indicate-that-the-lines-in-the-recipe-should-be-marked-in-a-pending-unconfirmed-by-user-state-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[API2.Controllers.WebAPI.GroceryListController.PostGroceryListRecipeRequest](#schemaapi2.controllers.webapi.grocerylistcontroller.postgrocerylistreciperequest)|true|none|
|» markAsPending|body|boolean|false|Gets or sets the mark as pending.|
|» recipeId|body|integer(int32)|false|Gets or sets the recipe identifier.|
|» scale|body|number(double)|false|Gets or sets the scale.|

> Example responses

> 200 Response

```json
{}
```

<h3 id="add-a-recipe-to-the-grocery-list-in-the-request-data-pass-in-recipeid-scale-scale10-says-to-keep-the-recipe-the-same-size-as-originally-posted-markaspending-truefalse-to-indicate-that-the-lines-in-the-recipe-should-be-marked-in-a-pending-unconfirmed-by-user-state-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[System.Object](#schemasystem.object)|

<aside class="success">
This operation does not require authentication
</aside>

## Synchronize the grocery list. Call this with a POST to /grocerylist/sync

<a id="opIdGroceryList_PostGroceryListSync"></a>

> Code samples

```bash
curl https://example.com/grocerylist/sync \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "list": {
      "Items": [
        {
          "BigOvenObject": "string",
          "CreationDate": "1970-01-01T00:00:00Z",
          "Department": "string",
          "DisplayQuantity": "string",
          "GUID": "string",
          "IsChecked": true,
          "ItemID": 0,
          "LastModified": "1970-01-01T00:00:00Z",
          "LocalStatus": "string",
          "Name": "string",
          "Notes": "string",
          "RecipeID": 0,
          "ThirdPartyURL": "string"
        }
      ],
      "LastModified": "1970-01-01T00:00:00Z",
      "Recipes": [
        {
          "BookmarkURL": "string",
          "Category": "string",
          "CreationDate": "1970-01-01T00:00:00Z",
          "Cuisine": "string",
          "HasVideos": true,
          "HeroPhotoUrl": "string",
          "HideFromPublicSearch": true,
          "ImageURL": "string",
          "ImageURL120": "string",
          "IsBookmark": true,
          "IsPrivate": true,
          "MaxImageSquare": 0,
          "Microcategory": "string",
          "Poster": {
            "FirstName": "string",
            "ImageUrl48": "string",
            "IsKitchenHelper": true,
            "IsPremium": true,
            "IsUsingRecurly": true,
            "LastName": "string",
            "MemberSince": "1970-01-01T00:00:00Z",
            "PhotoUrl": "string",
            "PremiumExpiryDate": "1970-01-01T00:00:00Z",
            "UserID": 0,
            "UserName": "string"
          },
          "QualityScore": 0,
          "RecipeID": 0,
          "ReviewCount": 0,
          "StarRating": 0,
          "StarRatingIMG": "string",
          "Subcategory": "string",
          "Title": "string",
          "TotalTries": 0,
          "WebURL": "string",
          "YieldNumber": 0
        }
      ],
      "VersionGuid": "string"
    },
    "since": "string"
  }'
```

`POST /grocerylist/sync`

> Body parameter

```json
{
  "list": {
    "Items": [
      {
        "BigOvenObject": "string",
        "CreationDate": "1970-01-01T00:00:00Z",
        "Department": "string",
        "DisplayQuantity": "string",
        "GUID": "string",
        "IsChecked": true,
        "ItemID": 0,
        "LastModified": "1970-01-01T00:00:00Z",
        "LocalStatus": "string",
        "Name": "string",
        "Notes": "string",
        "RecipeID": 0,
        "ThirdPartyURL": "string"
      }
    ],
    "LastModified": "1970-01-01T00:00:00Z",
    "Recipes": [
      {
        "BookmarkURL": "string",
        "Category": "string",
        "CreationDate": "1970-01-01T00:00:00Z",
        "Cuisine": "string",
        "HasVideos": true,
        "HeroPhotoUrl": "string",
        "HideFromPublicSearch": true,
        "ImageURL": "string",
        "ImageURL120": "string",
        "IsBookmark": true,
        "IsPrivate": true,
        "MaxImageSquare": 0,
        "Microcategory": "string",
        "Poster": {
          "FirstName": "string",
          "ImageUrl48": "string",
          "IsKitchenHelper": true,
          "IsPremium": true,
          "IsUsingRecurly": true,
          "LastName": "string",
          "MemberSince": "1970-01-01T00:00:00Z",
          "PhotoUrl": "string",
          "PremiumExpiryDate": "1970-01-01T00:00:00Z",
          "UserID": 0,
          "UserName": "string"
        },
        "QualityScore": 0,
        "RecipeID": 0,
        "ReviewCount": 0,
        "StarRating": 0,
        "StarRatingIMG": "string",
        "Subcategory": "string",
        "Title": "string",
        "TotalTries": 0,
        "WebURL": "string",
        "YieldNumber": 0
      }
    ],
    "VersionGuid": "string"
  },
  "since": "string"
}
```

<h3 id="synchronize-the-grocery-list-call-this-with-a-post-to-grocerylistsync-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[API2.Controllers.WebAPI.GroceryListController.PostGroceryListSyncRequest](#schemaapi2.controllers.webapi.grocerylistcontroller.postgrocerylistsyncrequest)|true|none|
|» list|body|[BigOven.Model.API.Grocery.GroceryList](#schemabigoven.model.api.grocery.grocerylist)|false|none|
|» since|body|string|false|Gets or sets the since.|

> Example responses

> 200 Response

```json
{}
```

<h3 id="synchronize-the-grocery-list-call-this-with-a-post-to-grocerylistsync-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[System.Object](#schemasystem.object)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="1000000-recipe-and-grocery-list-api-v2-images">Images</h1>

## POST: /image/avatar Testing with Postman (validated 11/20/2015): 1) Remove the Content-Type header; add authentication information 2) On the request, click Body and choose &quot;form-data&quot;, then add a line item with &quot;key&quot; column set to &quot;file&quot; and on the right, change the type of the input from Text to File. Browse and choose a JPG.

<a id="opIdImages_UploadUserAvatar"></a>

> Code samples

```bash
curl https://example.com/image/avatar \
  -X POST \
  -H 'Accept: application/json'
```

`POST /image/avatar`

> Example responses

> 200 Response

```json
{}
```

<h3 id="post-imageavatar-testing-with-postman-validated-11202015-1-remove-the-content-type-header-add-authentication-information-2-on-the-request-click-body-and-choose-form-data-then-add-a-line-item-with-key-column-set-to-file-and-on-the-right-change-the-type-of-the-input-from-text-to-file-browse-and-choose-a-jpg-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[System.Object](#schemasystem.object)|
|400|Bad Request|if bad request (e.g., missing parameters)|None|
|401|Unauthorized|if the user is unknown|None|
|415|Unsupported Media Type|if unsupported media type (e.g., bad JPG)|None|

<aside class="success">
This operation does not require authentication
</aside>

## Gets the pending by user.

<a id="opIdImages_GetPendingByUser"></a>

> Code samples

```bash
curl https://example.com/recipe/photos/pending \
  -H 'Accept: application/json'
```

`GET /recipe/photos/pending`

> Example responses

> 200 Response

```json
{
  "ResultCount": 0,
  "Results": [
    {
      "Caption": "string",
      "CreationDate": "string",
      "ImageID": 0,
      "IsPrimary": true,
      "MaxImageSquare": 0,
      "PhotoUrl": "string",
      "Poster": {
        "FirstName": "string",
        "LastName": "string",
        "PhotoUrl": "string",
        "UserID": 0,
        "UserName": "string"
      }
    }
  ]
}
```

<h3 id="gets-the-pending-by-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[API2.Controllers.WebAPI.ImagesController.RecipePhotosResponse](#schemaapi2.controllers.webapi.imagescontroller.recipephotosresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## POST: /recipe/{recipeId}/image?lat=42&amp;amp;lng=21&amp;amp;caption=this%20is%20my%20caption Note that caption, lng and lat are all optional, but must go on the request URI as params because this endpoint needs a multipart/mime content header and will not parse JSON in the body along with it. Testing with Postman (validated 11/20/2015): 1) Remove the Content-Type header; add authentication information 2) On the request, click Body and choose &quot;form-data&quot;, then add a line item with &quot;key&quot; column set to &quot;file&quot; and on the right, change the type of the input from Text to File. Browse and choose a JPG.

<a id="opIdImages_UploadRecipeImage"></a>

> Code samples

```bash
curl https://example.com/recipe/string/image \
  -X POST \
  -H 'Accept: application/json'
```

`POST /recipe/{recipeId}/image`

<h3 id="post-reciperecipeidimagelat42amplng21ampcaptionthis20is20my20caption-note-that-caption-lng-and-lat-are-all-optional-but-must-go-on-the-request-uri-as-params-because-this-endpoint-needs-a-multipartmime-content-header-and-will-not-parse-json-in-the-body-along-with-it-testing-with-postman-validated-11202015-1-remove-the-content-type-header-add-authentication-information-2-on-the-request-click-body-and-choose-form-data-then-add-a-line-item-with-key-column-set-to-file-and-on-the-right-change-the-type-of-the-input-from-text-to-file-browse-and-choose-a-jpg-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|recipeId|path|string|true|none|
|caption|query|string|false|none|
|lat|query|number(double)|false|none|
|lng|query|number(double)|false|none|

> Example responses

> 200 Response

```json
{}
```

<h3 id="post-reciperecipeidimagelat42amplng21ampcaptionthis20is20my20caption-note-that-caption-lng-and-lat-are-all-optional-but-must-go-on-the-request-uri-as-params-because-this-endpoint-needs-a-multipartmime-content-header-and-will-not-parse-json-in-the-body-along-with-it-testing-with-postman-validated-11202015-1-remove-the-content-type-header-add-authentication-information-2-on-the-request-click-body-and-choose-form-data-then-add-a-line-item-with-key-column-set-to-file-and-on-the-right-change-the-type-of-the-input-from-text-to-file-browse-and-choose-a-jpg-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[System.Object](#schemasystem.object)|
|400|Bad Request|if bad request (e.g., missing parameters)|None|
|401|Unauthorized|if the user is unknown|None|
|415|Unsupported Media Type|if unsupported media type (e.g., bad JPG)|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get all the images for a recipe. DEPRECATED. Please use /recipe/{recipeId}/photos.

<a id="opIdImages_Get"></a>

> Code samples

```bash
curl https://example.com/recipe/0/images \
  -H 'Accept: application/json'
```

`GET /recipe/{recipeId}/images`

<h3 id="get-all-the-images-for-a-recipe-deprecated-please-use-reciperecipeidphotos-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|recipeId|path|integer(int32)|true|Recipe ID (required)|

> Example responses

> 200 Response

```json
[
  {
    "Caption": "string",
    "CreationDate": "string",
    "ImageID": 0,
    "ImageSquares": [
      0
    ],
    "ImageURL": "string",
    "ImageURL120": "string",
    "ImageURL128": "string",
    "ImageURL200": "string",
    "ImageURL256": "string",
    "ImageURL48": "string",
    "ImageURL64": "string",
    "IsPrimary": true,
    "MaxImageSquare": 0,
    "Poster": {
      "FirstName": "string",
      "ImageUrl48": "string",
      "IsKitchenHelper": true,
      "IsPremium": true,
      "IsUsingRecurly": true,
      "LastName": "string",
      "MemberSince": "1970-01-01T00:00:00Z",
      "PhotoUrl": "string",
      "PhotoUrl48": "string",
      "PremiumExpiryDate": "1970-01-01T00:00:00Z",
      "UserID": 0,
      "UserName": "string",
      "WebUrl": "string"
    }
  }
]
```

<h3 id="get-all-the-images-for-a-recipe-deprecated-please-use-reciperecipeidphotos-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-all-the-images-for-a-recipe-deprecated-please-use-reciperecipeidphotos-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[BigOven.Model.API.Image](#schemabigoven.model.api.image)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get all the photos for a recipe

<a id="opIdImages_GetRecipePhotos"></a>

> Code samples

```bash
curl https://example.com/recipe/0/photos \
  -H 'Accept: application/json'
```

`GET /recipe/{recipeId}/photos`

<h3 id="get-all-the-photos-for-a-recipe-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|recipeId|path|integer(int32)|true|Recipe ID (required)|
|pg|query|integer(int32)|false|none|
|rpp|query|integer(int32)|false|none|

> Example responses

> 200 Response

```json
{
  "ResultCount": 0,
  "Results": [
    {
      "Caption": "string",
      "CreationDate": "string",
      "ImageID": 0,
      "IsPrimary": true,
      "MaxImageSquare": 0,
      "PhotoUrl": "string",
      "Poster": {
        "FirstName": "string",
        "LastName": "string",
        "PhotoUrl": "string",
        "UserID": 0,
        "UserName": "string"
      }
    }
  ]
}
```

<h3 id="get-all-the-photos-for-a-recipe-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[API2.Controllers.WebAPI.ImagesController.RecipePhotosResponse](#schemaapi2.controllers.webapi.imagescontroller.recipephotosresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Gets a list of RecipeScan images for the recipe. There will be at most 3 per recipe.

<a id="opIdImages_GetScanImages"></a>

> Code samples

```bash
curl https://example.com/recipe/0/scans \
  -H 'Accept: application/json'
```

`GET /recipe/{recipeId}/scans`

<h3 id="gets-a-list-of-recipescan-images-for-the-recipe-there-will-be-at-most-3-per-recipe-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|recipeId|path|integer(int32)|true|the recipe identifier (int)|

> Example responses

> 200 Response

```json
[
  {
    "Caption": "string",
    "CreationDate": "string",
    "ImageID": 0,
    "ImageSquares": [
      0
    ],
    "ImageURL": "string",
    "ImageURL120": "string",
    "ImageURL128": "string",
    "ImageURL200": "string",
    "ImageURL256": "string",
    "ImageURL48": "string",
    "ImageURL64": "string",
    "IsPrimary": true,
    "MaxImageSquare": 0,
    "Poster": {
      "FirstName": "string",
      "ImageUrl48": "string",
      "IsKitchenHelper": true,
      "IsPremium": true,
      "IsUsingRecurly": true,
      "LastName": "string",
      "MemberSince": "1970-01-01T00:00:00Z",
      "PhotoUrl": "string",
      "PhotoUrl48": "string",
      "PremiumExpiryDate": "1970-01-01T00:00:00Z",
      "UserID": 0,
      "UserName": "string",
      "WebUrl": "string"
    }
  }
]
```

<h3 id="gets-a-list-of-recipescan-images-for-the-recipe-there-will-be-at-most-3-per-recipe-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="gets-a-list-of-recipescan-images-for-the-recipe-there-will-be-at-most-3-per-recipe-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[BigOven.Model.API.Image](#schemabigoven.model.api.image)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="1000000-recipe-and-grocery-list-api-v2-me">Me</h1>

## Indexes this instance.

<a id="opIdMe_Index"></a>

> Code samples

```bash
curl https://example.com/me \
  -H 'Accept: application/json'
```

`GET /me`

> Example responses

> 200 Response

```json
{
  "Accounting": {
    "CreditBalance": 0,
    "MemberSince": "1970-01-01T00:00:00Z",
    "PremiumExpiryDate": "1970-01-01T00:00:00Z",
    "UserLevel": "string"
  },
  "BOAuthToken": "string",
  "LastChangeLogID": "string",
  "Personal": {
    "Email": "string",
    "Location": {
      "City": "string",
      "Country": "string",
      "DMA": 0
    }
  },
  "Preferences": {
    "EatingStyle": "string"
  },
  "Profile": {
    "AboutMe": "string",
    "BackgroundUrl": "string",
    "Counts": {
      "AddedCount": 0,
      "FollowersCount": 0,
      "FollowingCount": 0,
      "PrivateRecipeCount": 0,
      "PublicRecipeCount": 0,
      "TotalRecipes": 0
    },
    "FirstName": "string",
    "FullName": "string",
    "HomeUrl": "string",
    "LastName": "string",
    "PhotoUrl": "string",
    "UserID": 0,
    "UserName": "string"
  }
}
```

<h3 id="indexes-this-instance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[API2.Models.BigOvenUser](#schemaapi2.models.bigovenuser)|

<aside class="success">
This operation does not require authentication
</aside>

## Puts me.

<a id="opIdMe_PutMe"></a>

> Code samples

```bash
curl https://example.com/me \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "Accounting": {
      "CreditBalance": 0,
      "MemberSince": "1970-01-01T00:00:00Z",
      "PremiumExpiryDate": "1970-01-01T00:00:00Z",
      "UserLevel": "string"
    },
    "BOAuthToken": "string",
    "LastChangeLogID": "string",
    "Personal": {
      "Email": "string",
      "Location": {
        "City": "string",
        "Country": "string",
        "DMA": 0
      }
    },
    "Preferences": {
      "EatingStyle": "string"
    },
    "Profile": {
      "AboutMe": "string",
      "BackgroundUrl": "string",
      "Counts": {
        "AddedCount": 0,
        "FollowersCount": 0,
        "FollowingCount": 0,
        "PrivateRecipeCount": 0,
        "PublicRecipeCount": 0,
        "TotalRecipes": 0
      },
      "FirstName": "string",
      "FullName": "string",
      "HomeUrl": "string",
      "LastName": "string",
      "PhotoUrl": "string",
      "UserID": 0,
      "UserName": "string"
    }
  }'
```

`PUT /me`

> Body parameter

```json
{
  "Accounting": {
    "CreditBalance": 0,
    "MemberSince": "1970-01-01T00:00:00Z",
    "PremiumExpiryDate": "1970-01-01T00:00:00Z",
    "UserLevel": "string"
  },
  "BOAuthToken": "string",
  "LastChangeLogID": "string",
  "Personal": {
    "Email": "string",
    "Location": {
      "City": "string",
      "Country": "string",
      "DMA": 0
    }
  },
  "Preferences": {
    "EatingStyle": "string"
  },
  "Profile": {
    "AboutMe": "string",
    "BackgroundUrl": "string",
    "Counts": {
      "AddedCount": 0,
      "FollowersCount": 0,
      "FollowingCount": 0,
      "PrivateRecipeCount": 0,
      "PublicRecipeCount": 0,
      "TotalRecipes": 0
    },
    "FirstName": "string",
    "FullName": "string",
    "HomeUrl": "string",
    "LastName": "string",
    "PhotoUrl": "string",
    "UserID": 0,
    "UserName": "string"
  }
}
```

<h3 id="puts-me-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[API2.Models.BigOvenUser](#schemaapi2.models.bigovenuser)|true|The req.|
|» Accounting|body|[API2.Models.Accounting](#schemaapi2.models.accounting)|false|none|
|» BOAuthToken|body|string|false|The user-specific authentication token|
|» LastChangeLogID|body|string|false|Last change log|
|» Personal|body|[API2.Models.Personal](#schemaapi2.models.personal)|false|Personal level info -- email, location, etc.|
|» Preferences|body|[API2.Models.Preference](#schemaapi2.models.preference)|false|none|
|» Profile|body|[API2.Models.Profile](#schemaapi2.models.profile)|false|none|

> Example responses

> 200 Response

```json
{
  "Accounting": {
    "CreditBalance": 0,
    "MemberSince": "1970-01-01T00:00:00Z",
    "PremiumExpiryDate": "1970-01-01T00:00:00Z",
    "UserLevel": "string"
  },
  "BOAuthToken": "string",
  "LastChangeLogID": "string",
  "Personal": {
    "Email": "string",
    "Location": {
      "City": "string",
      "Country": "string",
      "DMA": 0
    }
  },
  "Preferences": {
    "EatingStyle": "string"
  },
  "Profile": {
    "AboutMe": "string",
    "BackgroundUrl": "string",
    "Counts": {
      "AddedCount": 0,
      "FollowersCount": 0,
      "FollowingCount": 0,
      "PrivateRecipeCount": 0,
      "PublicRecipeCount": 0,
      "TotalRecipes": 0
    },
    "FirstName": "string",
    "FullName": "string",
    "HomeUrl": "string",
    "LastName": "string",
    "PhotoUrl": "string",
    "UserID": 0,
    "UserName": "string"
  }
}
```

<h3 id="puts-me-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[API2.Models.BigOvenUser](#schemaapi2.models.bigovenuser)|

<aside class="success">
This operation does not require authentication
</aside>

## Puts me personal.

<a id="opIdMe_PutMePersonal"></a>

> Code samples

```bash
curl https://example.com/me/personal \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "Email": "string",
    "Location": {
      "City": "string",
      "Country": "string",
      "DMA": 0
    }
  }'
```

`PUT /me/personal`

> Body parameter

```json
{
  "Email": "string",
  "Location": {
    "City": "string",
    "Country": "string",
    "DMA": 0
  }
}
```

<h3 id="puts-me-personal-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[API2.Models.Personal](#schemaapi2.models.personal)|true|The req.|
|» Email|body|string|false|none|
|» Location|body|[API2.Models.Location](#schemaapi2.models.location)|false|none|

> Example responses

> 200 Response

```json
{
  "Accounting": {
    "CreditBalance": 0,
    "MemberSince": "1970-01-01T00:00:00Z",
    "PremiumExpiryDate": "1970-01-01T00:00:00Z",
    "UserLevel": "string"
  },
  "BOAuthToken": "string",
  "LastChangeLogID": "string",
  "Personal": {
    "Email": "string",
    "Location": {
      "City": "string",
      "Country": "string",
      "DMA": 0
    }
  },
  "Preferences": {
    "EatingStyle": "string"
  },
  "Profile": {
    "AboutMe": "string",
    "BackgroundUrl": "string",
    "Counts": {
      "AddedCount": 0,
      "FollowersCount": 0,
      "FollowingCount": 0,
      "PrivateRecipeCount": 0,
      "PublicRecipeCount": 0,
      "TotalRecipes": 0
    },
    "FirstName": "string",
    "FullName": "string",
    "HomeUrl": "string",
    "LastName": "string",
    "PhotoUrl": "string",
    "UserID": 0,
    "UserName": "string"
  }
}
```

<h3 id="puts-me-personal-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[API2.Models.BigOvenUser](#schemaapi2.models.bigovenuser)|

<aside class="success">
This operation does not require authentication
</aside>

## Puts me preferences.

<a id="opIdMe_PutMePreferences"></a>

> Code samples

```bash
curl https://example.com/me/preferences \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "EatingStyle": "string"
  }'
```

`PUT /me/preferences`

> Body parameter

```json
{
  "EatingStyle": "string"
}
```

<h3 id="puts-me-preferences-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[API2.Models.Preference](#schemaapi2.models.preference)|true|The req.|
|» EatingStyle|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "Accounting": {
    "CreditBalance": 0,
    "MemberSince": "1970-01-01T00:00:00Z",
    "PremiumExpiryDate": "1970-01-01T00:00:00Z",
    "UserLevel": "string"
  },
  "BOAuthToken": "string",
  "LastChangeLogID": "string",
  "Personal": {
    "Email": "string",
    "Location": {
      "City": "string",
      "Country": "string",
      "DMA": 0
    }
  },
  "Preferences": {
    "EatingStyle": "string"
  },
  "Profile": {
    "AboutMe": "string",
    "BackgroundUrl": "string",
    "Counts": {
      "AddedCount": 0,
      "FollowersCount": 0,
      "FollowingCount": 0,
      "PrivateRecipeCount": 0,
      "PublicRecipeCount": 0,
      "TotalRecipes": 0
    },
    "FirstName": "string",
    "FullName": "string",
    "HomeUrl": "string",
    "LastName": "string",
    "PhotoUrl": "string",
    "UserID": 0,
    "UserName": "string"
  }
}
```

<h3 id="puts-me-preferences-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[API2.Models.BigOvenUser](#schemaapi2.models.bigovenuser)|

<aside class="success">
This operation does not require authentication
</aside>

## Gets the options.

<a id="opIdMe_GetOptions"></a>

> Code samples

```bash
curl https://example.com/me/preferences/options \
  -H 'Accept: application/json'
```

`GET /me/preferences/options`

> Example responses

> 200 Response

```json
{
  "EatingStyle": {
    "Options": [
      {
        "Description": "string",
        "Key": "string"
      }
    ]
  }
}
```

<h3 id="gets-the-options-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[API2.Controllers.WebAPI.MeController.PreferenceOptions](#schemaapi2.controllers.webapi.mecontroller.preferenceoptions)|

<aside class="success">
This operation does not require authentication
</aside>

## Puts me.

> Code samples

```bash
curl https://example.com/me/profile \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "AboutMe": "string",
    "BackgroundUrl": "string",
    "Counts": {
      "AddedCount": 0,
      "FollowersCount": 0,
      "FollowingCount": 0,
      "PrivateRecipeCount": 0,
      "PublicRecipeCount": 0,
      "TotalRecipes": 0
    },
    "FirstName": "string",
    "FullName": "string",
    "HomeUrl": "string",
    "LastName": "string",
    "PhotoUrl": "string",
    "UserID": 0,
    "UserName": "string"
  }'
```

`PUT /me/profile`

> Body parameter

```json
{
  "AboutMe": "string",
  "BackgroundUrl": "string",
  "Counts": {
    "AddedCount": 0,
    "FollowersCount": 0,
    "FollowingCount": 0,
    "PrivateRecipeCount": 0,
    "PublicRecipeCount": 0,
    "TotalRecipes": 0
  },
  "FirstName": "string",
  "FullName": "string",
  "HomeUrl": "string",
  "LastName": "string",
  "PhotoUrl": "string",
  "UserID": 0,
  "UserName": "string"
}
```

<h3 id="puts-me-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[API2.Models.Profile](#schemaapi2.models.profile)|true|The req.|
|» AboutMe|body|string|false|none|
|» BackgroundUrl|body|string|false|none|
|» Counts|body|[API2.Models.Counts](#schemaapi2.models.counts)|false|none|
|» FirstName|body|string|false|none|
|» FullName|body|string|false|none|
|» HomeUrl|body|string|false|none|
|» LastName|body|string|false|none|
|» PhotoUrl|body|string|false|none|
|» UserID|body|integer(int64)|false|none|
|» UserName|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "Accounting": {
    "CreditBalance": 0,
    "MemberSince": "1970-01-01T00:00:00Z",
    "PremiumExpiryDate": "1970-01-01T00:00:00Z",
    "UserLevel": "string"
  },
  "BOAuthToken": "string",
  "LastChangeLogID": "string",
  "Personal": {
    "Email": "string",
    "Location": {
      "City": "string",
      "Country": "string",
      "DMA": 0
    }
  },
  "Preferences": {
    "EatingStyle": "string"
  },
  "Profile": {
    "AboutMe": "string",
    "BackgroundUrl": "string",
    "Counts": {
      "AddedCount": 0,
      "FollowersCount": 0,
      "FollowingCount": 0,
      "PrivateRecipeCount": 0,
      "PublicRecipeCount": 0,
      "TotalRecipes": 0
    },
    "FirstName": "string",
    "FullName": "string",
    "HomeUrl": "string",
    "LastName": "string",
    "PhotoUrl": "string",
    "UserID": 0,
    "UserName": "string"
  }
}
```

<h3 id="puts-me-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[API2.Models.BigOvenUser](#schemaapi2.models.bigovenuser)|

<aside class="success">
This operation does not require authentication
</aside>

## Skinnies this instance.

<a id="opIdMe_Skinny"></a>

> Code samples

```bash
curl https://example.com/me/skinny \
  -H 'Accept: application/json'
```

`GET /me/skinny`

> Example responses

> 200 Response

```json
{
  "Accounting": {
    "CreditBalance": 0,
    "MemberSince": "1970-01-01T00:00:00Z",
    "PremiumExpiryDate": "1970-01-01T00:00:00Z",
    "UserLevel": "string"
  },
  "BOAuthToken": "string",
  "LastChangeLogID": "string",
  "Personal": {
    "Email": "string",
    "Location": {
      "City": "string",
      "Country": "string",
      "DMA": 0
    }
  },
  "Preferences": {
    "EatingStyle": "string"
  },
  "Profile": {
    "AboutMe": "string",
    "BackgroundUrl": "string",
    "Counts": {
      "AddedCount": 0,
      "FollowersCount": 0,
      "FollowingCount": 0,
      "PrivateRecipeCount": 0,
      "PublicRecipeCount": 0,
      "TotalRecipes": 0
    },
    "FirstName": "string",
    "FullName": "string",
    "HomeUrl": "string",
    "LastName": "string",
    "PhotoUrl": "string",
    "UserID": 0,
    "UserName": "string"
  }
}
```

<h3 id="skinnies-this-instance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[API2.Models.BigOvenUser](#schemaapi2.models.bigovenuser)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="1000000-recipe-and-grocery-list-api-v2-recipe">Recipe</h1>

## Update a recipe

<a id="opIdRecipe_Put"></a>

> Code samples

```bash
curl https://example.com/recipe \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "ActiveMinutes": 0,
    "AdTags": "string",
    "AdminBoost": 0,
    "AllCategoriesText": "string",
    "BookmarkImageURL": "string",
    "BookmarkSiteLogo": "string",
    "BookmarkURL": "string",
    "Category": "string",
    "Collection": "string",
    "CollectionID": 0,
    "CreationDate": "1970-01-01T00:00:00Z",
    "Cuisine": "string",
    "Description": "string",
    "FavoriteCount": 0,
    "HeroPhotoUrl": "string",
    "ImageSquares": [
      0
    ],
    "ImageURL": "string",
    "Ingredients": [
      {
        "DisplayIndex": 0,
        "DisplayQuantity": "string",
        "HTMLName": "string",
        "IngredientID": 0,
        "IngredientInfo": {
          "Department": "string",
          "MasterIngredientID": 0,
          "Name": "string",
          "UsuallyOnHand": true
        },
        "IsHeading": true,
        "IsLinked": true,
        "MetricDisplayQuantity": "string",
        "MetricQuantity": 0,
        "MetricUnit": "string",
        "Name": "string",
        "PreparationNotes": "string",
        "Quantity": 0,
        "Unit": "string"
      }
    ],
    "IngredientsTextBlock": "string",
    "Instructions": "string",
    "IsBookmark": true,
    "IsPrivate": true,
    "IsRecipeScan": true,
    "IsSponsored": true,
    "LastModified": "1970-01-01T00:00:00Z",
    "MaxImageSquare": 0,
    "MedalCount": 0,
    "MenuCount": 0,
    "Microcategory": "string",
    "NotesCount": 0,
    "NutritionInfo": {
      "CaloriesFromFat": 0,
      "Cholesterol": 0,
      "CholesterolPct": 0,
      "DietaryFiber": 0,
      "DietaryFiberPct": 0,
      "MonoFat": 0,
      "PolyFat": 0,
      "Potassium": 0,
      "PotassiumPct": 0,
      "Protein": 0,
      "ProteinPct": 0,
      "SatFat": 0,
      "SatFatPct": 0,
      "SingularYieldUnit": "string",
      "Sodium": 0,
      "SodiumPct": 0,
      "Sugar": 0,
      "TotalCalories": 0,
      "TotalCarbs": 0,
      "TotalCarbsPct": 0,
      "TotalFat": 0,
      "TotalFatPct": 0,
      "TransFat": 0
    },
    "Poster": {
      "FirstName": "string",
      "ImageUrl48": "string",
      "IsKitchenHelper": true,
      "IsPremium": true,
      "IsUsingRecurly": true,
      "LastName": "string",
      "MemberSince": "1970-01-01T00:00:00Z",
      "PhotoUrl": "string",
      "PremiumExpiryDate": "1970-01-01T00:00:00Z",
      "UserID": 0,
      "UserName": "string"
    },
    "PrimaryIngredient": "string",
    "RecipeID": 0,
    "ReviewCount": 0,
    "StarRating": 0,
    "Subcategory": "string",
    "Title": "string",
    "TotalMinutes": 0,
    "VariantOfRecipeID": 0,
    "VerifiedByClass": "string",
    "VerifiedDateTime": "1970-01-01T00:00:00Z",
    "WebURL": "string",
    "YieldNumber": 0,
    "YieldUnit": "string"
  }'
```

`PUT /recipe`

> Body parameter

```json
{
  "ActiveMinutes": 0,
  "AdTags": "string",
  "AdminBoost": 0,
  "AllCategoriesText": "string",
  "BookmarkImageURL": "string",
  "BookmarkSiteLogo": "string",
  "BookmarkURL": "string",
  "Category": "string",
  "Collection": "string",
  "CollectionID": 0,
  "CreationDate": "1970-01-01T00:00:00Z",
  "Cuisine": "string",
  "Description": "string",
  "FavoriteCount": 0,
  "HeroPhotoUrl": "string",
  "ImageSquares": [
    0
  ],
  "ImageURL": "string",
  "Ingredients": [
    {
      "DisplayIndex": 0,
      "DisplayQuantity": "string",
      "HTMLName": "string",
      "IngredientID": 0,
      "IngredientInfo": {
        "Department": "string",
        "MasterIngredientID": 0,
        "Name": "string",
        "UsuallyOnHand": true
      },
      "IsHeading": true,
      "IsLinked": true,
      "MetricDisplayQuantity": "string",
      "MetricQuantity": 0,
      "MetricUnit": "string",
      "Name": "string",
      "PreparationNotes": "string",
      "Quantity": 0,
      "Unit": "string"
    }
  ],
  "IngredientsTextBlock": "string",
  "Instructions": "string",
  "IsBookmark": true,
  "IsPrivate": true,
  "IsRecipeScan": true,
  "IsSponsored": true,
  "LastModified": "1970-01-01T00:00:00Z",
  "MaxImageSquare": 0,
  "MedalCount": 0,
  "MenuCount": 0,
  "Microcategory": "string",
  "NotesCount": 0,
  "NutritionInfo": {
    "CaloriesFromFat": 0,
    "Cholesterol": 0,
    "CholesterolPct": 0,
    "DietaryFiber": 0,
    "DietaryFiberPct": 0,
    "MonoFat": 0,
    "PolyFat": 0,
    "Potassium": 0,
    "PotassiumPct": 0,
    "Protein": 0,
    "ProteinPct": 0,
    "SatFat": 0,
    "SatFatPct": 0,
    "SingularYieldUnit": "string",
    "Sodium": 0,
    "SodiumPct": 0,
    "Sugar": 0,
    "TotalCalories": 0,
    "TotalCarbs": 0,
    "TotalCarbsPct": 0,
    "TotalFat": 0,
    "TotalFatPct": 0,
    "TransFat": 0
  },
  "Poster": {
    "FirstName": "string",
    "ImageUrl48": "string",
    "IsKitchenHelper": true,
    "IsPremium": true,
    "IsUsingRecurly": true,
    "LastName": "string",
    "MemberSince": "1970-01-01T00:00:00Z",
    "PhotoUrl": "string",
    "PremiumExpiryDate": "1970-01-01T00:00:00Z",
    "UserID": 0,
    "UserName": "string"
  },
  "PrimaryIngredient": "string",
  "RecipeID": 0,
  "ReviewCount": 0,
  "StarRating": 0,
  "Subcategory": "string",
  "Title": "string",
  "TotalMinutes": 0,
  "VariantOfRecipeID": 0,
  "VerifiedByClass": "string",
  "VerifiedDateTime": "1970-01-01T00:00:00Z",
  "WebURL": "string",
  "YieldNumber": 0,
  "YieldUnit": "string"
}
```

<h3 id="update-a-recipe-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[BigOven.Model.API.Recipe](#schemabigoven.model.api.recipe)|true|none|
|» ActiveMinutes|body|integer(int32)|false|none|
|» AdTags|body|string|false|none|
|» AdminBoost|body|integer(int32)|false|none|
|» AllCategoriesText|body|string|false|none|
|» BookmarkImageURL|body|string|false|none|
|» BookmarkSiteLogo|body|string|false|none|
|» BookmarkURL|body|string|false|none|
|» Category|body|string|false|none|
|» Collection|body|string|false|none|
|» CollectionID|body|integer(int32)|false|none|
|» CreationDate|body|string(date-time)|false|none|
|» Cuisine|body|string|false|none|
|» Description|body|string|false|none|
|» FavoriteCount|body|integer(int32)|false|none|
|» HeroPhotoUrl|body|string|false|none|
|» ImageSquares|body|[integer(int32)]|false|none|
|» ImageURL|body|string|false|none|
|» Ingredients|body|[[BigOven.Model.API.Ingredient](#schemabigoven.model.api.ingredient)]|false|none|
|» IngredientsTextBlock|body|string|false|none|
|» Instructions|body|string|false|none|
|» IsBookmark|body|boolean|false|none|
|» IsPrivate|body|boolean|false|none|
|» IsRecipeScan|body|boolean|false|none|
|» IsSponsored|body|boolean|false|none|
|» LastModified|body|string(date-time)|false|none|
|» MaxImageSquare|body|integer(int32)|false|none|
|» MedalCount|body|integer(int32)|false|none|
|» MenuCount|body|integer(int32)|false|none|
|» Microcategory|body|string|false|none|
|» NotesCount|body|integer(int32)|false|none|
|» NutritionInfo|body|[BigOven.Model.API.NutritionInfo](#schemabigoven.model.api.nutritioninfo)|false|none|
|» Poster|body|[BigOven.Model.API.UserInfo](#schemabigoven.model.api.userinfo)|false|none|
|» PrimaryIngredient|body|string|false|none|
|» RecipeID|body|integer(int32)|false|none|
|» ReviewCount|body|integer(int32)|false|none|
|» StarRating|body|number(double)|false|none|
|» Subcategory|body|string|false|none|
|» Title|body|string|false|none|
|» TotalMinutes|body|integer(int32)|false|none|
|» VariantOfRecipeID|body|integer(int32)|false|none|
|» VerifiedByClass|body|string|false|none|
|» VerifiedDateTime|body|string(date-time)|false|none|
|» WebURL|body|string|false|none|
|» YieldNumber|body|number(double)|false|none|
|» YieldUnit|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "ActiveMinutes": 0,
  "AdTags": "string",
  "AdminBoost": 0,
  "AllCategoriesText": "string",
  "BookmarkImageURL": "string",
  "BookmarkSiteLogo": "string",
  "BookmarkURL": "string",
  "Category": "string",
  "Collection": "string",
  "CollectionID": 0,
  "CreationDate": "1970-01-01T00:00:00Z",
  "Cuisine": "string",
  "Description": "string",
  "FavoriteCount": 0,
  "HeroPhotoUrl": "string",
  "ImageSquares": [
    0
  ],
  "ImageURL": "string",
  "Ingredients": [
    {
      "DisplayIndex": 0,
      "DisplayQuantity": "string",
      "HTMLName": "string",
      "IngredientID": 0,
      "IngredientInfo": {
        "Department": "string",
        "MasterIngredientID": 0,
        "Name": "string",
        "UsuallyOnHand": true
      },
      "IsHeading": true,
      "IsLinked": true,
      "MetricDisplayQuantity": "string",
      "MetricQuantity": 0,
      "MetricUnit": "string",
      "Name": "string",
      "PreparationNotes": "string",
      "Quantity": 0,
      "Unit": "string"
    }
  ],
  "IngredientsTextBlock": "string",
  "Instructions": "string",
  "IsBookmark": true,
  "IsPrivate": true,
  "IsRecipeScan": true,
  "IsSponsored": true,
  "LastModified": "1970-01-01T00:00:00Z",
  "MaxImageSquare": 0,
  "MedalCount": 0,
  "MenuCount": 0,
  "Microcategory": "string",
  "NotesCount": 0,
  "NutritionInfo": {
    "CaloriesFromFat": 0,
    "Cholesterol": 0,
    "CholesterolPct": 0,
    "DietaryFiber": 0,
    "DietaryFiberPct": 0,
    "MonoFat": 0,
    "PolyFat": 0,
    "Potassium": 0,
    "PotassiumPct": 0,
    "Protein": 0,
    "ProteinPct": 0,
    "SatFat": 0,
    "SatFatPct": 0,
    "SingularYieldUnit": "string",
    "Sodium": 0,
    "SodiumPct": 0,
    "Sugar": 0,
    "TotalCalories": 0,
    "TotalCarbs": 0,
    "TotalCarbsPct": 0,
    "TotalFat": 0,
    "TotalFatPct": 0,
    "TransFat": 0
  },
  "Poster": {
    "FirstName": "string",
    "ImageUrl48": "string",
    "IsKitchenHelper": true,
    "IsPremium": true,
    "IsUsingRecurly": true,
    "LastName": "string",
    "MemberSince": "1970-01-01T00:00:00Z",
    "PhotoUrl": "string",
    "PhotoUrl48": "string",
    "PremiumExpiryDate": "1970-01-01T00:00:00Z",
    "UserID": 0,
    "UserName": "string",
    "WebUrl": "string"
  },
  "PrimaryIngredient": "string",
  "RecipeID": 0,
  "ReviewCount": 0,
  "StarRating": 0,
  "Subcategory": "string",
  "Title": "string",
  "TotalMinutes": 0,
  "VariantOfRecipeID": 0,
  "VerifiedByClass": "string",
  "VerifiedDateTime": "1970-01-01T00:00:00Z",
  "WebURL": "string",
  "YieldNumber": 0,
  "YieldUnit": "string"
}
```

<h3 id="update-a-recipe-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[BigOven.Model.API.Recipe](#schemabigoven.model.api.recipe)|

<aside class="success">
This operation does not require authentication
</aside>

## Add a new recipe

<a id="opIdRecipe_Post"></a>

> Code samples

```bash
curl https://example.com/recipe \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "ActiveMinutes": 0,
    "AdTags": "string",
    "AdminBoost": 0,
    "AllCategoriesText": "string",
    "BookmarkImageURL": "string",
    "BookmarkSiteLogo": "string",
    "BookmarkURL": "string",
    "Category": "string",
    "Collection": "string",
    "CollectionID": 0,
    "CreationDate": "1970-01-01T00:00:00Z",
    "Cuisine": "string",
    "Description": "string",
    "FavoriteCount": 0,
    "HeroPhotoUrl": "string",
    "ImageSquares": [
      0
    ],
    "ImageURL": "string",
    "Ingredients": [
      {
        "DisplayIndex": 0,
        "DisplayQuantity": "string",
        "HTMLName": "string",
        "IngredientID": 0,
        "IngredientInfo": {
          "Department": "string",
          "MasterIngredientID": 0,
          "Name": "string",
          "UsuallyOnHand": true
        },
        "IsHeading": true,
        "IsLinked": true,
        "MetricDisplayQuantity": "string",
        "MetricQuantity": 0,
        "MetricUnit": "string",
        "Name": "string",
        "PreparationNotes": "string",
        "Quantity": 0,
        "Unit": "string"
      }
    ],
    "IngredientsTextBlock": "string",
    "Instructions": "string",
    "IsBookmark": true,
    "IsPrivate": true,
    "IsRecipeScan": true,
    "IsSponsored": true,
    "LastModified": "1970-01-01T00:00:00Z",
    "MaxImageSquare": 0,
    "MedalCount": 0,
    "MenuCount": 0,
    "Microcategory": "string",
    "NotesCount": 0,
    "NutritionInfo": {
      "CaloriesFromFat": 0,
      "Cholesterol": 0,
      "CholesterolPct": 0,
      "DietaryFiber": 0,
      "DietaryFiberPct": 0,
      "MonoFat": 0,
      "PolyFat": 0,
      "Potassium": 0,
      "PotassiumPct": 0,
      "Protein": 0,
      "ProteinPct": 0,
      "SatFat": 0,
      "SatFatPct": 0,
      "SingularYieldUnit": "string",
      "Sodium": 0,
      "SodiumPct": 0,
      "Sugar": 0,
      "TotalCalories": 0,
      "TotalCarbs": 0,
      "TotalCarbsPct": 0,
      "TotalFat": 0,
      "TotalFatPct": 0,
      "TransFat": 0
    },
    "Poster": {
      "FirstName": "string",
      "ImageUrl48": "string",
      "IsKitchenHelper": true,
      "IsPremium": true,
      "IsUsingRecurly": true,
      "LastName": "string",
      "MemberSince": "1970-01-01T00:00:00Z",
      "PhotoUrl": "string",
      "PremiumExpiryDate": "1970-01-01T00:00:00Z",
      "UserID": 0,
      "UserName": "string"
    },
    "PrimaryIngredient": "string",
    "RecipeID": 0,
    "ReviewCount": 0,
    "StarRating": 0,
    "Subcategory": "string",
    "Title": "string",
    "TotalMinutes": 0,
    "VariantOfRecipeID": 0,
    "VerifiedByClass": "string",
    "VerifiedDateTime": "1970-01-01T00:00:00Z",
    "WebURL": "string",
    "YieldNumber": 0,
    "YieldUnit": "string"
  }'
```

`POST /recipe`

> Body parameter

```json
{
  "ActiveMinutes": 0,
  "AdTags": "string",
  "AdminBoost": 0,
  "AllCategoriesText": "string",
  "BookmarkImageURL": "string",
  "BookmarkSiteLogo": "string",
  "BookmarkURL": "string",
  "Category": "string",
  "Collection": "string",
  "CollectionID": 0,
  "CreationDate": "1970-01-01T00:00:00Z",
  "Cuisine": "string",
  "Description": "string",
  "FavoriteCount": 0,
  "HeroPhotoUrl": "string",
  "ImageSquares": [
    0
  ],
  "ImageURL": "string",
  "Ingredients": [
    {
      "DisplayIndex": 0,
      "DisplayQuantity": "string",
      "HTMLName": "string",
      "IngredientID": 0,
      "IngredientInfo": {
        "Department": "string",
        "MasterIngredientID": 0,
        "Name": "string",
        "UsuallyOnHand": true
      },
      "IsHeading": true,
      "IsLinked": true,
      "MetricDisplayQuantity": "string",
      "MetricQuantity": 0,
      "MetricUnit": "string",
      "Name": "string",
      "PreparationNotes": "string",
      "Quantity": 0,
      "Unit": "string"
    }
  ],
  "IngredientsTextBlock": "string",
  "Instructions": "string",
  "IsBookmark": true,
  "IsPrivate": true,
  "IsRecipeScan": true,
  "IsSponsored": true,
  "LastModified": "1970-01-01T00:00:00Z",
  "MaxImageSquare": 0,
  "MedalCount": 0,
  "MenuCount": 0,
  "Microcategory": "string",
  "NotesCount": 0,
  "NutritionInfo": {
    "CaloriesFromFat": 0,
    "Cholesterol": 0,
    "CholesterolPct": 0,
    "DietaryFiber": 0,
    "DietaryFiberPct": 0,
    "MonoFat": 0,
    "PolyFat": 0,
    "Potassium": 0,
    "PotassiumPct": 0,
    "Protein": 0,
    "ProteinPct": 0,
    "SatFat": 0,
    "SatFatPct": 0,
    "SingularYieldUnit": "string",
    "Sodium": 0,
    "SodiumPct": 0,
    "Sugar": 0,
    "TotalCalories": 0,
    "TotalCarbs": 0,
    "TotalCarbsPct": 0,
    "TotalFat": 0,
    "TotalFatPct": 0,
    "TransFat": 0
  },
  "Poster": {
    "FirstName": "string",
    "ImageUrl48": "string",
    "IsKitchenHelper": true,
    "IsPremium": true,
    "IsUsingRecurly": true,
    "LastName": "string",
    "MemberSince": "1970-01-01T00:00:00Z",
    "PhotoUrl": "string",
    "PremiumExpiryDate": "1970-01-01T00:00:00Z",
    "UserID": 0,
    "UserName": "string"
  },
  "PrimaryIngredient": "string",
  "RecipeID": 0,
  "ReviewCount": 0,
  "StarRating": 0,
  "Subcategory": "string",
  "Title": "string",
  "TotalMinutes": 0,
  "VariantOfRecipeID": 0,
  "VerifiedByClass": "string",
  "VerifiedDateTime": "1970-01-01T00:00:00Z",
  "WebURL": "string",
  "YieldNumber": 0,
  "YieldUnit": "string"
}
```

<h3 id="add-a-new-recipe-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[BigOven.Model.API.Recipe](#schemabigoven.model.api.recipe)|true|none|
|» ActiveMinutes|body|integer(int32)|false|none|
|» AdTags|body|string|false|none|
|» AdminBoost|body|integer(int32)|false|none|
|» AllCategoriesText|body|string|false|none|
|» BookmarkImageURL|body|string|false|none|
|» BookmarkSiteLogo|body|string|false|none|
|» BookmarkURL|body|string|false|none|
|» Category|body|string|false|none|
|» Collection|body|string|false|none|
|» CollectionID|body|integer(int32)|false|none|
|» CreationDate|body|string(date-time)|false|none|
|» Cuisine|body|string|false|none|
|» Description|body|string|false|none|
|» FavoriteCount|body|integer(int32)|false|none|
|» HeroPhotoUrl|body|string|false|none|
|» ImageSquares|body|[integer(int32)]|false|none|
|» ImageURL|body|string|false|none|
|» Ingredients|body|[[BigOven.Model.API.Ingredient](#schemabigoven.model.api.ingredient)]|false|none|
|» IngredientsTextBlock|body|string|false|none|
|» Instructions|body|string|false|none|
|» IsBookmark|body|boolean|false|none|
|» IsPrivate|body|boolean|false|none|
|» IsRecipeScan|body|boolean|false|none|
|» IsSponsored|body|boolean|false|none|
|» LastModified|body|string(date-time)|false|none|
|» MaxImageSquare|body|integer(int32)|false|none|
|» MedalCount|body|integer(int32)|false|none|
|» MenuCount|body|integer(int32)|false|none|
|» Microcategory|body|string|false|none|
|» NotesCount|body|integer(int32)|false|none|
|» NutritionInfo|body|[BigOven.Model.API.NutritionInfo](#schemabigoven.model.api.nutritioninfo)|false|none|
|» Poster|body|[BigOven.Model.API.UserInfo](#schemabigoven.model.api.userinfo)|false|none|
|» PrimaryIngredient|body|string|false|none|
|» RecipeID|body|integer(int32)|false|none|
|» ReviewCount|body|integer(int32)|false|none|
|» StarRating|body|number(double)|false|none|
|» Subcategory|body|string|false|none|
|» Title|body|string|false|none|
|» TotalMinutes|body|integer(int32)|false|none|
|» VariantOfRecipeID|body|integer(int32)|false|none|
|» VerifiedByClass|body|string|false|none|
|» VerifiedDateTime|body|string(date-time)|false|none|
|» WebURL|body|string|false|none|
|» YieldNumber|body|number(double)|false|none|
|» YieldUnit|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "ActiveMinutes": 0,
  "AdTags": "string",
  "AdminBoost": 0,
  "AllCategoriesText": "string",
  "BookmarkImageURL": "string",
  "BookmarkSiteLogo": "string",
  "BookmarkURL": "string",
  "Category": "string",
  "Collection": "string",
  "CollectionID": 0,
  "CreationDate": "1970-01-01T00:00:00Z",
  "Cuisine": "string",
  "Description": "string",
  "FavoriteCount": 0,
  "HeroPhotoUrl": "string",
  "ImageSquares": [
    0
  ],
  "ImageURL": "string",
  "Ingredients": [
    {
      "DisplayIndex": 0,
      "DisplayQuantity": "string",
      "HTMLName": "string",
      "IngredientID": 0,
      "IngredientInfo": {
        "Department": "string",
        "MasterIngredientID": 0,
        "Name": "string",
        "UsuallyOnHand": true
      },
      "IsHeading": true,
      "IsLinked": true,
      "MetricDisplayQuantity": "string",
      "MetricQuantity": 0,
      "MetricUnit": "string",
      "Name": "string",
      "PreparationNotes": "string",
      "Quantity": 0,
      "Unit": "string"
    }
  ],
  "IngredientsTextBlock": "string",
  "Instructions": "string",
  "IsBookmark": true,
  "IsPrivate": true,
  "IsRecipeScan": true,
  "IsSponsored": true,
  "LastModified": "1970-01-01T00:00:00Z",
  "MaxImageSquare": 0,
  "MedalCount": 0,
  "MenuCount": 0,
  "Microcategory": "string",
  "NotesCount": 0,
  "NutritionInfo": {
    "CaloriesFromFat": 0,
    "Cholesterol": 0,
    "CholesterolPct": 0,
    "DietaryFiber": 0,
    "DietaryFiberPct": 0,
    "MonoFat": 0,
    "PolyFat": 0,
    "Potassium": 0,
    "PotassiumPct": 0,
    "Protein": 0,
    "ProteinPct": 0,
    "SatFat": 0,
    "SatFatPct": 0,
    "SingularYieldUnit": "string",
    "Sodium": 0,
    "SodiumPct": 0,
    "Sugar": 0,
    "TotalCalories": 0,
    "TotalCarbs": 0,
    "TotalCarbsPct": 0,
    "TotalFat": 0,
    "TotalFatPct": 0,
    "TransFat": 0
  },
  "Poster": {
    "FirstName": "string",
    "ImageUrl48": "string",
    "IsKitchenHelper": true,
    "IsPremium": true,
    "IsUsingRecurly": true,
    "LastName": "string",
    "MemberSince": "1970-01-01T00:00:00Z",
    "PhotoUrl": "string",
    "PhotoUrl48": "string",
    "PremiumExpiryDate": "1970-01-01T00:00:00Z",
    "UserID": 0,
    "UserName": "string",
    "WebUrl": "string"
  },
  "PrimaryIngredient": "string",
  "RecipeID": 0,
  "ReviewCount": 0,
  "StarRating": 0,
  "Subcategory": "string",
  "Title": "string",
  "TotalMinutes": 0,
  "VariantOfRecipeID": 0,
  "VerifiedByClass": "string",
  "VerifiedDateTime": "1970-01-01T00:00:00Z",
  "WebURL": "string",
  "YieldNumber": 0,
  "YieldUnit": "string"
}
```

<h3 id="add-a-new-recipe-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[BigOven.Model.API.Recipe](#schemabigoven.model.api.recipe)|

<aside class="success">
This operation does not require authentication
</aside>

## Given a query, return recipe titles starting with query. Query must be at least 3 chars in length.

<a id="opIdRecipe_AutoComplete"></a>

> Code samples

```bash
curl 'https://example.com/recipe/autocomplete?query=string' \
  -H 'Accept: application/json'
```

`GET /recipe/autocomplete`

<h3 id="given-a-query-return-recipe-titles-starting-with-query-query-must-be-at-least-3-chars-in-length-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|query|query|string|true|none|
|limit|query|integer(int32)|false|none|

> Example responses

> 200 Response

```json
[
  "string"
]
```

<h3 id="given-a-query-return-recipe-titles-starting-with-query-query-must-be-at-least-3-chars-in-length-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="given-a-query-return-recipe-titles-starting-with-query-query-must-be-at-least-3-chars-in-length-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Automatics the complete all recipes.

<a id="opIdRecipe_AutoCompleteAllRecipes"></a>

> Code samples

```bash
curl 'https://example.com/recipe/autocomplete/all?query=string&limit=0' \
  -H 'Accept: application/json'
```

`GET /recipe/autocomplete/all`

<h3 id="automatics-the-complete-all-recipes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|query|query|string|true|The query.|
|limit|query|integer(int32)|true|The limit.|

> Example responses

> 200 Response

```json
[
  {
    "ImageURL": "string",
    "QualityScore": 0,
    "RecipeID": 0,
    "Servings": 0,
    "Title": "string"
  }
]
```

<h3 id="automatics-the-complete-all-recipes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="automatics-the-complete-all-recipes-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[BigOven.Model.RecipeInfoTiny](#schemabigoven.model.recipeinfotiny)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Automatics the complete my recipes.

<a id="opIdRecipe_AutoCompleteMyRecipes"></a>

> Code samples

```bash
curl 'https://example.com/recipe/autocomplete/mine?query=string&limit=0' \
  -H 'Accept: application/json'
```

`GET /recipe/autocomplete/mine`

<h3 id="automatics-the-complete-my-recipes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|query|query|string|true|The query.|
|limit|query|integer(int32)|true|The limit.|

> Example responses

> 200 Response

```json
[
  {
    "ImageURL": "string",
    "QualityScore": 0,
    "RecipeID": 0,
    "Servings": 0,
    "Title": "string"
  }
]
```

<h3 id="automatics-the-complete-my-recipes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="automatics-the-complete-my-recipes-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[BigOven.Model.RecipeInfoTiny](#schemabigoven.model.recipeinfotiny)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get a list of recipe categories (the ID field can be used for include_cat in search parameters)

<a id="opIdRecipe_Categories"></a>

> Code samples

```bash
curl https://example.com/recipe/categories \
  -H 'Accept: application/json'
```

`GET /recipe/categories`

> Example responses

> 200 Response

```json
[
  {
    "Category": "string",
    "DefaultActiveMinutes": 0,
    "DefaultTotalMinutes": 0,
    "ID": 0,
    "ParentID": 0,
    "PrimaryImage": "string",
    "ShortDescription": "string"
  }
]
```

<h3 id="get-a-list-of-recipe-categories-the-id-field-can-be-used-for-includecat-in-search-parameters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-a-list-of-recipe-categories-the-id-field-can-be-used-for-includecat-in-search-parameters-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[BigOven.Model.RecipeCategory](#schemabigoven.model.recipecategory)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Returns last active recipe for the user

<a id="opIdRecipe_GetActiveRecipe"></a>

> Code samples

```bash
curl 'https://example.com/recipe/get/active/recipe?userName=string' \
  -H 'Accept: application/json'
```

`GET /recipe/get/active/recipe`

<h3 id="returns-last-active-recipe-for-the-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userName|query|string|true|none|

> Example responses

> 200 Response

```json
{
  "Data": {},
  "Message": "string",
  "StatusCode": 0
}
```

<h3 id="returns-last-active-recipe-for-the-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[BigOven.Result](#schemabigoven.result)|

<aside class="success">
This operation does not require authentication
</aside>

## Gets recipe single step as text

<a id="opIdRecipe_GetStep"></a>

> Code samples

```bash
curl 'https://example.com/recipe/get/saved/step?userName=string&recipeId=0&stepId=0' \
  -X POST \
  -H 'Accept: application/json'
```

`POST /recipe/get/saved/step`

<h3 id="gets-recipe-single-step-as-text-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userName|query|string|true|none|
|recipeId|query|integer(int32)|true|none|
|stepId|query|integer(int32)|true|none|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="gets-recipe-single-step-as-text-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Returns stored step number and number of steps in recipe

<a id="opIdRecipe_GetStepNumber"></a>

> Code samples

```bash
curl 'https://example.com/recipe/get/step/number?userName=string&recipeId=0' \
  -X POST \
  -H 'Accept: application/json'
```

`POST /recipe/get/step/number`

<h3 id="returns-stored-step-number-and-number-of-steps-in-recipe-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userName|query|string|true|none|
|recipeId|query|integer(int32)|true|none|

> Example responses

> 200 Response

```json
{
  "Data": {},
  "Message": "string",
  "StatusCode": 0
}
```

<h3 id="returns-stored-step-number-and-number-of-steps-in-recipe-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[API2.Result](#schemaapi2.result)|

<aside class="success">
This operation does not require authentication
</aside>

## Stores recipe step number and returns saved step data

<a id="opIdRecipe_GetSteps"></a>

> Code samples

```bash
curl 'https://example.com/recipe/post/step?userName=string&recipeId=0&stepId=0' \
  -X POST \
  -H 'Accept: application/json'
```

`POST /recipe/post/step`

<h3 id="stores-recipe-step-number-and-returns-saved-step-data-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userName|query|string|true|none|
|recipeId|query|integer(int32)|true|none|
|stepId|query|integer(int32)|true|none|

> Example responses

> 200 Response

```json
{
  "Data": {},
  "Message": "string",
  "StatusCode": 0
}
```

<h3 id="stores-recipe-step-number-and-returns-saved-step-data-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[BigOven.Result](#schemabigoven.result)|

<aside class="success">
This operation does not require authentication
</aside>

## POST an image as a new RecipeScan request 1) Fetch the filename -- DONE 2) Copy it to the pics/scan folder - ENSURE NO NAMING COLLISIONS -- DONE 3) Create 120 thumbnail size in pics/scan/120 -- DONE 4) Insert the CloudTasks record 5) Create the HIT 6) Update the CloudTasks record with the HIT ID 7) Email the requesing user 8) Call out to www.bigoven.com to fetch the image and re-create the thumbnail

<a id="opIdRecipe_Scan"></a>

> Code samples

```bash
curl https://example.com/recipe/scan \
  -X POST
```

`POST /recipe/scan`

<h3 id="post-an-image-as-a-new-recipescan-request-1-fetch-the-filename----done-2-copy-it-to-the-picsscan-folder---ensure-no-naming-collisions----done-3-create-120-thumbnail-size-in-picsscan120----done-4-insert-the-cloudtasks-record-5-create-the-hit-6-update-the-cloudtasks-record-with-the-hit-id-7-email-the-requesing-user-8-call-out-to-wwwbigovencom-to-fetch-the-image-and-re-create-the-thumbnail-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|test|query|boolean|false|none|
|devicetype|query|string|false|none|
|lat|query|number(double)|false|none|
|lng|query|number(double)|false|none|

<h3 id="post-an-image-as-a-new-recipescan-request-1-fetch-the-filename----done-2-copy-it-to-the-picsscan-folder---ensure-no-naming-collisions----done-3-create-120-thumbnail-size-in-picsscan120----done-4-insert-the-cloudtasks-record-5-create-the-hit-6-update-the-cloudtasks-record-with-the-hit-id-7-email-the-requesing-user-8-call-out-to-wwwbigovencom-to-fetch-the-image-and-re-create-the-thumbnail-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|401|Unauthorized|Not authorized|None|
|402|Payment Required|Payment required (not enough credits)|None|
|415|Unsupported Media Type|Bad media type (bad JPG)|None|
|500|Internal Server Error|General error on initiating RecipeScan task; please try again or contact us at support[at]bigoven.com|None|

<aside class="success">
This operation does not require authentication
</aside>

## Return full Recipe detail with steps. Returns 403 if the recipe is owned by someone else.

<a id="opIdRecipe_GetRecipeWithSteps"></a>

> Code samples

```bash
curl https://example.com/recipe/steps/0 \
  -H 'Accept: application/json'
```

`GET /recipe/steps/{id}`

<h3 id="return-full-recipe-detail-with-steps-returns-403-if-the-recipe-is-owned-by-someone-else-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|the Recipe ID to retrieve|
|prefetch|query|boolean|false|none|

> Example responses

> 200 Response

```json
{
  "ActiveMinutes": 0,
  "AdTags": "string",
  "AdminBoost": 0,
  "AllCategoriesText": "string",
  "BookmarkImageURL": "string",
  "BookmarkSiteLogo": "string",
  "BookmarkURL": "string",
  "Category": "string",
  "Collection": "string",
  "CollectionID": 0,
  "CreationDate": "1970-01-01T00:00:00Z",
  "Cuisine": "string",
  "Description": "string",
  "FavoriteCount": 0,
  "ImageSquares": [
    0
  ],
  "ImageURL": "string",
  "Ingredients": [
    {
      "DisplayIndex": 0,
      "DisplayQuantity": "string",
      "HTMLName": "string",
      "IngredientID": 0,
      "IngredientInfo": {
        "Department": "string",
        "MasterIngredientID": 0,
        "Name": "string",
        "UsuallyOnHand": true
      },
      "IsHeading": true,
      "IsLinked": true,
      "MetricDisplayQuantity": "string",
      "MetricQuantity": 0,
      "MetricUnit": "string",
      "Name": "string",
      "PreparationNotes": "string",
      "Quantity": 0,
      "Unit": "string"
    }
  ],
  "IngredientsTextBlock": "string",
  "Instructions": "string",
  "IsBookmark": true,
  "IsPrivate": true,
  "IsRecipeScan": true,
  "IsSponsored": true,
  "LastModified": "1970-01-01T00:00:00Z",
  "MaxImageSquare": 0,
  "MedalCount": 0,
  "MenuCount": 0,
  "Microcategory": "string",
  "NotesCount": 0,
  "NutritionInfo": {
    "CaloriesFromFat": 0,
    "Cholesterol": 0,
    "CholesterolPct": 0,
    "DietaryFiber": 0,
    "DietaryFiberPct": 0,
    "MonoFat": 0,
    "PolyFat": 0,
    "Potassium": 0,
    "PotassiumPct": 0,
    "Protein": 0,
    "ProteinPct": 0,
    "SatFat": 0,
    "SatFatPct": 0,
    "SingularYieldUnit": "string",
    "Sodium": 0,
    "SodiumPct": 0,
    "Sugar": 0,
    "TotalCalories": 0,
    "TotalCarbs": 0,
    "TotalCarbsPct": 0,
    "TotalFat": 0,
    "TotalFatPct": 0,
    "TransFat": 0
  },
  "PhotoUrl": "string",
  "Poster": {
    "FirstName": "string",
    "ImageUrl48": "string",
    "IsKitchenHelper": true,
    "IsPremium": true,
    "IsUsingRecurly": true,
    "LastName": "string",
    "MemberSince": "1970-01-01T00:00:00Z",
    "PhotoUrl": "string",
    "PhotoUrl48": "string",
    "PremiumExpiryDate": "1970-01-01T00:00:00Z",
    "UserID": 0,
    "UserName": "string",
    "WebUrl": "string"
  },
  "PrimaryIngredient": "string",
  "RecipeID": 0,
  "ReviewCount": 0,
  "StarRating": 0,
  "Steps": [
    {
      "EndGantt": 0,
      "StartGantt": 0,
      "Text": "string"
    }
  ],
  "Subcategory": "string",
  "Title": "string",
  "TotalMinutes": 0,
  "VariantOfRecipeID": 0,
  "VerifiedByClass": "string",
  "VerifiedDateTime": "1970-01-01T00:00:00Z",
  "WebURL": "string",
  "YieldNumber": 0,
  "YieldUnit": "string"
}
```

<h3 id="return-full-recipe-detail-with-steps-returns-403-if-the-recipe-is-owned-by-someone-else-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[BigOven.Model.API2.Recipe](#schemabigoven.model.api2.recipe)|

<aside class="success">
This operation does not require authentication
</aside>

## Return full Recipe detail. Returns 403 if the recipe is owned by someone else.

<a id="opIdRecipe_Get"></a>

> Code samples

```bash
curl https://example.com/recipe/0 \
  -H 'Accept: application/json'
```

`GET /recipe/{id}`

<h3 id="return-full-recipe-detail-returns-403-if-the-recipe-is-owned-by-someone-else-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Recipe ID to retrieve|
|prefetch|query|boolean|false|The prefetch.|

> Example responses

> 200 Response

```json
{
  "ActiveMinutes": 0,
  "AdTags": "string",
  "AdminBoost": 0,
  "AllCategoriesText": "string",
  "BookmarkImageURL": "string",
  "BookmarkSiteLogo": "string",
  "BookmarkURL": "string",
  "Category": "string",
  "Collection": "string",
  "CollectionID": 0,
  "CreationDate": "1970-01-01T00:00:00Z",
  "Cuisine": "string",
  "Description": "string",
  "FavoriteCount": 0,
  "ImageSquares": [
    0
  ],
  "ImageURL": "string",
  "Ingredients": [
    {
      "DisplayIndex": 0,
      "DisplayQuantity": "string",
      "HTMLName": "string",
      "IngredientID": 0,
      "IngredientInfo": {
        "Department": "string",
        "MasterIngredientID": 0,
        "Name": "string",
        "UsuallyOnHand": true
      },
      "IsHeading": true,
      "IsLinked": true,
      "MetricDisplayQuantity": "string",
      "MetricQuantity": 0,
      "MetricUnit": "string",
      "Name": "string",
      "PreparationNotes": "string",
      "Quantity": 0,
      "Unit": "string"
    }
  ],
  "IngredientsTextBlock": "string",
  "Instructions": "string",
  "IsBookmark": true,
  "IsPrivate": true,
  "IsRecipeScan": true,
  "IsSponsored": true,
  "LastModified": "1970-01-01T00:00:00Z",
  "MaxImageSquare": 0,
  "MedalCount": 0,
  "MenuCount": 0,
  "Microcategory": "string",
  "NotesCount": 0,
  "NutritionInfo": {
    "CaloriesFromFat": 0,
    "Cholesterol": 0,
    "CholesterolPct": 0,
    "DietaryFiber": 0,
    "DietaryFiberPct": 0,
    "MonoFat": 0,
    "PolyFat": 0,
    "Potassium": 0,
    "PotassiumPct": 0,
    "Protein": 0,
    "ProteinPct": 0,
    "SatFat": 0,
    "SatFatPct": 0,
    "SingularYieldUnit": "string",
    "Sodium": 0,
    "SodiumPct": 0,
    "Sugar": 0,
    "TotalCalories": 0,
    "TotalCarbs": 0,
    "TotalCarbsPct": 0,
    "TotalFat": 0,
    "TotalFatPct": 0,
    "TransFat": 0
  },
  "PhotoUrl": "string",
  "Poster": {
    "FirstName": "string",
    "ImageUrl48": "string",
    "IsKitchenHelper": true,
    "IsPremium": true,
    "IsUsingRecurly": true,
    "LastName": "string",
    "MemberSince": "1970-01-01T00:00:00Z",
    "PhotoUrl": "string",
    "PhotoUrl48": "string",
    "PremiumExpiryDate": "1970-01-01T00:00:00Z",
    "UserID": 0,
    "UserName": "string",
    "WebUrl": "string"
  },
  "PrimaryIngredient": "string",
  "RecipeID": 0,
  "ReviewCount": 0,
  "StarRating": 0,
  "Steps": [
    {
      "EndGantt": 0,
      "StartGantt": 0,
      "Text": "string"
    }
  ],
  "Subcategory": "string",
  "Title": "string",
  "TotalMinutes": 0,
  "VariantOfRecipeID": 0,
  "VerifiedByClass": "string",
  "VerifiedDateTime": "1970-01-01T00:00:00Z",
  "WebURL": "string",
  "YieldNumber": 0,
  "YieldUnit": "string"
}
```

<h3 id="return-full-recipe-detail-returns-403-if-the-recipe-is-owned-by-someone-else-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[BigOven.Model.API2.Recipe](#schemabigoven.model.api2.recipe)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a Recipe (you must be authenticated as an owner of the recipe)

<a id="opIdRecipe_Delete"></a>

> Code samples

```bash
curl https://example.com/recipe/0 \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /recipe/{id}`

<h3 id="delete-a-recipe-you-must-be-authenticated-as-an-owner-of-the-recipe-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

> Example responses

> 200 Response

```json
{}
```

<h3 id="delete-a-recipe-you-must-be-authenticated-as-an-owner-of-the-recipe-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[System.Object](#schemasystem.object)|

<aside class="success">
This operation does not require authentication
</aside>

## Zaps the recipe.

<a id="opIdRecipe_ZapRecipe"></a>

> Code samples

```bash
curl https://example.com/recipe/0/zap \
  -H 'Accept: application/json'
```

`GET /recipe/{id}/zap`

<h3 id="zaps-the-recipe-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The identifier.|

> Example responses

> 200 Response

```json
{}
```

<h3 id="zaps-the-recipe-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[System.Object](#schemasystem.object)|

<aside class="success">
This operation does not require authentication
</aside>

## Feedback on a Recipe -- for internal BigOven editors

<a id="opIdRecipe_Feedback"></a>

> Code samples

```bash
curl https://example.com/recipe/0/feedback \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "feedback": "string"
  }'
```

`POST /recipe/{recipeId}/feedback`

> Body parameter

```json
{
  "feedback": "string"
}
```

<h3 id="feedback-on-a-recipe----for-internal-bigoven-editors-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|recipeId|path|integer(int32)|true|none|
|body|body|[API2.Models.Recipes.FeedbackDTO](#schemaapi2.models.recipes.feedbackdto)|true|The payload for feedback, which includes the field "feedback"|
|» feedback|body|string|false|none|

> Example responses

> 200 Response

```json
{}
```

<h3 id="feedback-on-a-recipe----for-internal-bigoven-editors-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[System.Object](#schemasystem.object)|

<aside class="success">
This operation does not require authentication
</aside>

## Get recipes related to the given recipeId

<a id="opIdRecipe_Related"></a>

> Code samples

```bash
curl https://example.com/recipe/0/related \
  -H 'Accept: application/json'
```

`GET /recipe/{recipeId}/related`

<h3 id="get-recipes-related-to-the-given-recipeid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|recipeId|path|integer(int32)|true|The recipe id|
|pg|query|integer(int32)|false|The page|
|rpp|query|integer(int32)|false|The results per page|

> Example responses

> 200 Response

```json
{
  "ResultCount": 0,
  "Results": [
    {
      "Category": "string",
      "CreationDate": "1970-01-01T00:00:00Z",
      "Cuisine": "string",
      "HasVideos": true,
      "IsBookmark": true,
      "IsPrivate": true,
      "IsRecipeScan": true,
      "Microcategory": "string",
      "PhotoUrl": "string",
      "Poster": {
        "FirstName": "string",
        "LastName": "string",
        "PhotoUrl": "string",
        "UserID": 0,
        "UserName": "string"
      },
      "RecipeID": 0,
      "ReviewCount": 0,
      "Servings": 0,
      "StarRating": 0,
      "Subcategory": "string",
      "Title": "string",
      "TotalTries": 0,
      "WebURL": "string"
    }
  ],
  "SpellSuggest": "string"
}
```

<h3 id="get-recipes-related-to-the-given-recipeid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[BigOven.Model.API2.RecipeSearchResult](#schemabigoven.model.api2.recipesearchresult)|

<aside class="success">
This operation does not require authentication
</aside>

## Search for recipes. There are many parameters that you can apply. Starting with the most common, use title_kw to search within a title. Use any_kw to search across the entire recipe. If you'd like to limit by course, set the parameter &quot;include_primarycat&quot; to one of (appetizers,bread,breakfast,dessert,drinks,maindish,salad,sidedish,soup,marinades,other). If you'd like to exclude a category, set exclude_cat to one or more (comma-separated) list of those categories to exclude. If you'd like to include a category, set include_cat to one or more (comma-separated) of those categories to include. To explicitly include an ingredient in your search, set the parameter &quot;include_ing&quot; to a CSV of up to three ingredients, e.g.:include_ing=mustard,chicken,beef%20tips To explicitly exclude an ingredient in your search, set the parameter &quot;exclude_ing&quot; to a CSV of up to three ingredients. All searches must contain the paging parameters pg and rpp, which are integers, and represent the page number (1-based) and results per page (rpp). So, to get the third page of a result set paged with 25 recipes per page, you'd pass pg=3&amp;amp;rpp=25 If you'd like to target searches to just a single target user's recipes, set userId=the target userId (number). Or, you can set username=theirusername vtn;vgn;chs;glf;ntf;dyf;sff;slf;tnf;wmf;rmf;cps cuisine photos filter=added,try,favorites,myrecipes\r\n\r\n folder=FolderNameCaseSensitive coll=ID of Collection

<a id="opIdRecipe_RecipeSearch"></a>

> Code samples

```bash
curl https://example.com/recipes \
  -H 'Accept: application/json'
```

`GET /recipes`

<h3 id="search-for-recipes-there-are-many-parameters-that-you-can-apply-starting-with-the-most-common-use-titlekw-to-search-within-a-title-use-anykw-to-search-across-the-entire-recipe-if-youd-like-to-limit-by-course-set-the-parameter-includeprimarycat-to-one-of-appetizersbreadbreakfastdessertdrinksmaindishsaladsidedishsoupmarinadesother-if-youd-like-to-exclude-a-category-set-excludecat-to-one-or-more-comma-separated-list-of-those-categories-to-exclude-if-youd-like-to-include-a-category-set-includecat-to-one-or-more-comma-separated-of-those-categories-to-include-to-explicitly-include-an-ingredient-in-your-search-set-the-parameter-includeing-to-a-csv-of-up-to-three-ingredients-egincludeingmustardchickenbeef20tips-to-explicitly-exclude-an-ingredient-in-your-search-set-the-parameter-excludeing-to-a-csv-of-up-to-three-ingredients-all-searches-must-contain-the-paging-parameters-pg-and-rpp-which-are-integers-and-represent-the-page-number-1-based-and-results-per-page-rpp-so-to-get-the-third-page-of-a-result-set-paged-with-25-recipes-per-page-youd-pass-pg3amprpp25-if-youd-like-to-target-searches-to-just-a-single-target-users-recipes-set-useridthe-target-userid-number-or-you-can-set-usernametheirusername-vtnvgnchsglfntfdyfsffslftnfwmfrmfcps-cuisine-photos-filteraddedtryfavoritesmyrecipesrnrn-folderfoldernamecasesensitive-collid-of-collection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|any_kw|query|string|false|Search anywhere in the recipe for the keyword|
|folder|query|string|false|Search in a specific folder name for the authenticated user|
|coll|query|integer(int32)|false|Limit to a collection ID number|
|filter|query|string|false|optionally set to either "myrecipes", "try", "favorites","added" to filter to just the authenticated user's recipe set|
|title_kw|query|string|false|Search just in the recipe title for the keyword|
|userId|query|integer(int32)|false|Set the target userid to search their public recipes|
|username|query|string|false|Set the target username to search their public recipes|
|token|query|string|false|none|
|photos|query|boolean|false|if set to true, limit search results to photos only|
|boostmine|query|boolean|false|if set to true, boost my own recipes in my folders so they show up high in the list (at the expense of other sort orders)|
|include_cat|query|string|false|integer of the subcategory you'd like to limit searches to (see the /recipe/categories endpoint for available id numbers). For instance, 58 is "Main Dish &gt; Casseroles".|
|exclude_cat|query|string|false|like include_cat, set this to an integer to exclude a specific category|
|include_primarycat|query|string|false|csv indicating up to three top-level categories -- valid values are [appetizers,bread,breakfast,desserts,drinks,maindish,salads,sidedish,soups,marinades,other]|
|exclude_primarycat|query|string|false|csv indicating integer values for up to 3 top-level categories -- valid values are 1...11 [appetizers,bread,breakfast,desserts,drinks,maindish,salads,sidedish,soups,marinades,other]|
|include_ing|query|string|false|A CSV representing up to 3 ingredients to include, e.g., tomatoes,corn%20%starch,chicken|
|exclude_ing|query|string|false|A CSV representing up to 3 ingredients to exclude  (Powersearch-capable plan required)|
|cuisine|query|string|false|Limit to a specific cuisine. Cooks can enter anything free-form, but the few dozen preconfigured values are Afghan,African,American,American-South,Asian,Australian,Brazilian,Cajun,Canadian,Caribbean,Chinese,Croatian,Cuban,Dessert,Eastern European,English,French,German,Greek,Hawaiian,Hungarian,India,Indian,Irish,Italian,Japanese,Jewish,Korean,Latin,Mediterranean,Mexican,Middle Eastern,Moroccan,Polish,Russian,Scandanavian,Seafood,Southern,Southwestern,Spanish,Tex-Mex,Thai,Vegan,Vegetarian,Vietnamese|
|db|query|string|false|none|
|userset|query|string|false|If set to a given username, it'll force the search to filter to just that username|
|servingsMin|query|number(double)|false|Limit to yield of a given number size or greater. Note that cooks usually enter recipes by Servings, but sometimes they are posted by "dozen", etc. This parameter simply specifies the minimum number for that value entered in "yield."|
|totalMins|query|integer(int32)|false|Optional. If supplied, will restrict results to recipes that can be made in {totalMins} or less. (Convert "1 hour, 15 minutes" to 75 before passing in.)|
|maxIngredients|query|integer(int32)|false|Optional. If supplied, will restrict results to recipes that can be made with {maxIngredients} ingredients or less|
|minIngredients|query|integer(int32)|false|Optional. If supplied, will restrict results to recipes that have at least {minIngredients}|
|rpp|query|integer(int32)|false|integer; results per page|
|pg|query|integer(int32)|false|integer: the page number|
|vtn|query|integer(int32)|false|when set to 1, limit to vegetarian (Powersearch-capable plan required)|
|vgn|query|integer(int32)|false|when set to 1, limit to vegan (Powersearch-capable plan required)|
|chs|query|integer(int32)|false|when set to 1, limit to contains-cheese (Powersearch-capable plan required)|
|glf|query|integer(int32)|false|when set to 1, limit to gluten-free (Powersearch-capable plan required)|
|ntf|query|integer(int32)|false|when set to 1, limit to nut-free (Powersearch-capable plan required)|
|dyf|query|integer(int32)|false|when set to 1, limit to dairy-free (Powersearch-capable plan required)|
|sff|query|integer(int32)|false|when set to 1, limit to seafood-free (Powersearch-capable plan required)|
|slf|query|integer(int32)|false|when set to 1, limit to shellfish-free (Powersearch-capable plan required)|
|tnf|query|integer(int32)|false|when set to 1, limit to tree-nut free (Powersearch-capable plan required)|
|wmf|query|integer(int32)|false|when set to 1, limit to white-meat free (Powersearch-capable plan required)|
|rmf|query|integer(int32)|false|when set to 1, limit to red-meat free (Powersearch-capable plan required)|
|cps|query|integer(int32)|false|when set to 1, recipe contains pasta, set to 0 means contains no pasta (Powersearch-capable plan required)|
|champion|query|integer(int32)|false|optional. When set to 1, this will limit search results to "best of" recipes as determined by various internal editorial and programmatic algorithms. For the most comprehensive results, don't include this parameter.|
|synonyms|query|boolean|false|optional, default is false. When set to true, BigOven will attempt to apply synonyms in search (e.g., excluding pork will also exclude bacon)|

> Example responses

> 200 Response

```json
{
  "ResultCount": 0,
  "Results": [
    {
      "Category": "string",
      "CreationDate": "1970-01-01T00:00:00Z",
      "Cuisine": "string",
      "HasVideos": true,
      "IsBookmark": true,
      "IsPrivate": true,
      "IsRecipeScan": true,
      "Microcategory": "string",
      "PhotoUrl": "string",
      "Poster": {
        "FirstName": "string",
        "LastName": "string",
        "PhotoUrl": "string",
        "UserID": 0,
        "UserName": "string"
      },
      "RecipeID": 0,
      "ReviewCount": 0,
      "Servings": 0,
      "StarRating": 0,
      "Subcategory": "string",
      "Title": "string",
      "TotalTries": 0,
      "WebURL": "string"
    }
  ],
  "SpellSuggest": "string"
}
```

<h3 id="search-for-recipes-there-are-many-parameters-that-you-can-apply-starting-with-the-most-common-use-titlekw-to-search-within-a-title-use-anykw-to-search-across-the-entire-recipe-if-youd-like-to-limit-by-course-set-the-parameter-includeprimarycat-to-one-of-appetizersbreadbreakfastdessertdrinksmaindishsaladsidedishsoupmarinadesother-if-youd-like-to-exclude-a-category-set-excludecat-to-one-or-more-comma-separated-list-of-those-categories-to-exclude-if-youd-like-to-include-a-category-set-includecat-to-one-or-more-comma-separated-of-those-categories-to-include-to-explicitly-include-an-ingredient-in-your-search-set-the-parameter-includeing-to-a-csv-of-up-to-three-ingredients-egincludeingmustardchickenbeef20tips-to-explicitly-exclude-an-ingredient-in-your-search-set-the-parameter-excludeing-to-a-csv-of-up-to-three-ingredients-all-searches-must-contain-the-paging-parameters-pg-and-rpp-which-are-integers-and-represent-the-page-number-1-based-and-results-per-page-rpp-so-to-get-the-third-page-of-a-result-set-paged-with-25-recipes-per-page-youd-pass-pg3amprpp25-if-youd-like-to-target-searches-to-just-a-single-target-users-recipes-set-useridthe-target-userid-number-or-you-can-set-usernametheirusername-vtnvgnchsglfntfdyfsffslftnfwmfrmfcps-cuisine-photos-filteraddedtryfavoritesmyrecipesrnrn-folderfoldernamecasesensitive-collid-of-collection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[BigOven.Model.API2.RecipeSearchResult](#schemabigoven.model.api2.recipesearchresult)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a random, home-page-quality Recipe.

<a id="opIdRecipe_GetRandomRecipe"></a>

> Code samples

```bash
curl https://example.com/recipes/random \
  -H 'Accept: application/json'
```

`GET /recipes/random`

> Example responses

> 200 Response

```json
{
  "ActiveMinutes": 0,
  "AdTags": "string",
  "AdminBoost": 0,
  "AllCategoriesText": "string",
  "BookmarkImageURL": "string",
  "BookmarkSiteLogo": "string",
  "BookmarkURL": "string",
  "Category": "string",
  "Collection": "string",
  "CollectionID": 0,
  "CreationDate": "1970-01-01T00:00:00Z",
  "Cuisine": "string",
  "Description": "string",
  "FavoriteCount": 0,
  "HeroPhotoUrl": "string",
  "ImageSquares": [
    0
  ],
  "ImageURL": "string",
  "Ingredients": [
    {
      "DisplayIndex": 0,
      "DisplayQuantity": "string",
      "HTMLName": "string",
      "IngredientID": 0,
      "IngredientInfo": {
        "Department": "string",
        "MasterIngredientID": 0,
        "Name": "string",
        "UsuallyOnHand": true
      },
      "IsHeading": true,
      "IsLinked": true,
      "MetricDisplayQuantity": "string",
      "MetricQuantity": 0,
      "MetricUnit": "string",
      "Name": "string",
      "PreparationNotes": "string",
      "Quantity": 0,
      "Unit": "string"
    }
  ],
  "IngredientsTextBlock": "string",
  "Instructions": "string",
  "IsBookmark": true,
  "IsPrivate": true,
  "IsRecipeScan": true,
  "IsSponsored": true,
  "LastModified": "1970-01-01T00:00:00Z",
  "MaxImageSquare": 0,
  "MedalCount": 0,
  "MenuCount": 0,
  "Microcategory": "string",
  "NotesCount": 0,
  "NutritionInfo": {
    "CaloriesFromFat": 0,
    "Cholesterol": 0,
    "CholesterolPct": 0,
    "DietaryFiber": 0,
    "DietaryFiberPct": 0,
    "MonoFat": 0,
    "PolyFat": 0,
    "Potassium": 0,
    "PotassiumPct": 0,
    "Protein": 0,
    "ProteinPct": 0,
    "SatFat": 0,
    "SatFatPct": 0,
    "SingularYieldUnit": "string",
    "Sodium": 0,
    "SodiumPct": 0,
    "Sugar": 0,
    "TotalCalories": 0,
    "TotalCarbs": 0,
    "TotalCarbsPct": 0,
    "TotalFat": 0,
    "TotalFatPct": 0,
    "TransFat": 0
  },
  "Poster": {
    "FirstName": "string",
    "ImageUrl48": "string",
    "IsKitchenHelper": true,
    "IsPremium": true,
    "IsUsingRecurly": true,
    "LastName": "string",
    "MemberSince": "1970-01-01T00:00:00Z",
    "PhotoUrl": "string",
    "PhotoUrl48": "string",
    "PremiumExpiryDate": "1970-01-01T00:00:00Z",
    "UserID": 0,
    "UserName": "string",
    "WebUrl": "string"
  },
  "PrimaryIngredient": "string",
  "RecipeID": 0,
  "ReviewCount": 0,
  "StarRating": 0,
  "Subcategory": "string",
  "Title": "string",
  "TotalMinutes": 0,
  "VariantOfRecipeID": 0,
  "VerifiedByClass": "string",
  "VerifiedDateTime": "1970-01-01T00:00:00Z",
  "WebURL": "string",
  "YieldNumber": 0,
  "YieldUnit": "string"
}
```

<h3 id="get-a-random-home-page-quality-recipe-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[BigOven.Model.API.Recipe](#schemabigoven.model.api.recipe)|

<aside class="success">
This operation does not require authentication
</aside>

## Get the recipe/comment tuples for those recipes with 4 or 5 star ratings

<a id="opIdRecipe_Raves"></a>

> Code samples

```bash
curl https://example.com/recipes/raves \
  -H 'Accept: application/json'
```

`GET /recipes/raves`

<h3 id="get-the-recipecomment-tuples-for-those-recipes-with-4-or-5-star-ratings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pg|query|integer(int32)|false|page, starting with 1|
|rpp|query|integer(int32)|false|results per page|

> Example responses

> 200 Response

```json
[
  {
    "RecipeInfo": {
      "Category": "string",
      "CreationDate": "1970-01-01T00:00:00Z",
      "Cuisine": "string",
      "HasVideos": true,
      "IsBookmark": true,
      "IsPrivate": true,
      "IsRecipeScan": true,
      "Microcategory": "string",
      "PhotoUrl": "string",
      "Poster": {
        "FirstName": "string",
        "LastName": "string",
        "PhotoUrl": "string",
        "UserID": 0,
        "UserName": "string"
      },
      "RecipeID": 0,
      "ReviewCount": 0,
      "Servings": 0,
      "StarRating": 0,
      "Subcategory": "string",
      "Title": "string",
      "TotalTries": 0,
      "WebURL": "string"
    },
    "Review": {
      "ActiveMinutes": 0,
      "Comment": "string",
      "CreationDate": "1970-01-01T00:00:00Z",
      "FeaturedReply": {
        "Comment": "string",
        "CreationDate": "1970-01-01T00:00:00Z",
        "ID": "string",
        "LastModified": "1970-01-01T00:00:00Z",
        "Poster": {
          "FirstName": "string",
          "LastName": "string",
          "PhotoUrl": "string",
          "UserID": 0,
          "UserName": "string"
        },
        "ReviewID": "string"
      },
      "GUID": "string",
      "ID": "string",
      "LastModified": "1970-01-01T00:00:00Z",
      "ParentID": 0,
      "Poster": {
        "FirstName": "string",
        "ImageUrl48": "string",
        "IsKitchenHelper": true,
        "IsPremium": true,
        "IsUsingRecurly": true,
        "LastName": "string",
        "MemberSince": "1970-01-01T00:00:00Z",
        "PhotoUrl": "string",
        "PhotoUrl48": "string",
        "PremiumExpiryDate": "1970-01-01T00:00:00Z",
        "UserID": 0,
        "UserName": "string",
        "WebUrl": "string"
      },
      "Replies": [
        {}
      ],
      "ReplyCount": 0,
      "ReviewID": 0,
      "StarRating": 0,
      "TotalMinutes": 0
    }
  }
]
```

<h3 id="get-the-recipecomment-tuples-for-those-recipes-with-4-or-5-star-ratings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-the-recipecomment-tuples-for-those-recipes-with-4-or-5-star-ratings-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[BigOven.Model.RecipeInfoReviewTuple2](#schemabigoven.model.recipeinforeviewtuple2)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get a list of recipes that the authenticated user has most recently viewed

<a id="opIdRecipe_RecentViews"></a>

> Code samples

```bash
curl https://example.com/recipes/recentviews \
  -H 'Accept: application/json'
```

`GET /recipes/recentviews`

<h3 id="get-a-list-of-recipes-that-the-authenticated-user-has-most-recently-viewed-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pg|query|integer(int32)|false|Page number starting with 1|
|rpp|query|integer(int32)|false|results per page|

> Example responses

> 200 Response

```json
[
  {
    "date": "1970-01-01T00:00:00Z",
    "recipeInfo": {
      "Category": "string",
      "CreationDate": "1970-01-01T00:00:00Z",
      "Cuisine": "string",
      "HasVideos": true,
      "IsBookmark": true,
      "IsPrivate": true,
      "IsRecipeScan": true,
      "Microcategory": "string",
      "PhotoUrl": "string",
      "Poster": {
        "FirstName": "string",
        "LastName": "string",
        "PhotoUrl": "string",
        "UserID": 0,
        "UserName": "string"
      },
      "RecipeID": 0,
      "ReviewCount": 0,
      "Servings": 0,
      "StarRating": 0,
      "Subcategory": "string",
      "Title": "string",
      "TotalTries": 0,
      "WebURL": "string"
    }
  }
]
```

<h3 id="get-a-list-of-recipes-that-the-authenticated-user-has-most-recently-viewed-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-a-list-of-recipes-that-the-authenticated-user-has-most-recently-viewed-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[BigOven.Model.RecipeInfoDateTuple2](#schemabigoven.model.recipeinfodatetuple2)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Search for recipes. There are many parameters that you can apply. Starting with the most common, use title_kw to search within a title. Use any_kw to search across the entire recipe. If you'd like to limit by course, set the parameter &quot;include_primarycat&quot; to one of (appetizers,bread,breakfast,dessert,drinks,maindish,salad,sidedish,soup,marinades,other). If you'd like to exclude a category, set exclude_cat to one or more (comma-separated) list of those categories to exclude. If you'd like to include a category, set include_cat to one or more (comma-separated) of those categories to include. To explicitly include an ingredient in your search, set the parameter &quot;include_ing&quot; to a CSV of up to three ingredients, e.g.:include_ing=mustard,chicken,beef%20tips To explicitly exclude an ingredient in your search, set the parameter &quot;exclude_ing&quot; to a CSV of up to three ingredients. All searches must contain the paging parameters pg and rpp, which are integers, and represent the page number (1-based) and results per page (rpp). So, to get the third page of a result set paged with 25 recipes per page, you'd pass pg=3&amp;amp;rpp=25 If you'd like to target searches to just a single target user's recipes, set userId=the target userId (number). Or, you can set username=theirusername vtn;vgn;chs;glf;ntf;dyf;sff;slf;tnf;wmf;rmf;cps cuisine photos filter=added,try,favorites,myrecipes\r\n\r\n folder=FolderNameCaseSensitive coll=ID of Collection

<a id="opIdRecipe_RecipeSearchRandom"></a>

> Code samples

```bash
curl https://example.com/recipes/top25random \
  -H 'Accept: application/json'
```

`GET /recipes/top25random`

<h3 id="search-for-recipes-there-are-many-parameters-that-you-can-apply-starting-with-the-most-common-use-titlekw-to-search-within-a-title-use-anykw-to-search-across-the-entire-recipe-if-youd-like-to-limit-by-course-set-the-parameter-includeprimarycat-to-one-of-appetizersbreadbreakfastdessertdrinksmaindishsaladsidedishsoupmarinadesother-if-youd-like-to-exclude-a-category-set-excludecat-to-one-or-more-comma-separated-list-of-those-categories-to-exclude-if-youd-like-to-include-a-category-set-includecat-to-one-or-more-comma-separated-of-those-categories-to-include-to-explicitly-include-an-ingredient-in-your-search-set-the-parameter-includeing-to-a-csv-of-up-to-three-ingredients-egincludeingmustardchickenbeef20tips-to-explicitly-exclude-an-ingredient-in-your-search-set-the-parameter-excludeing-to-a-csv-of-up-to-three-ingredients-all-searches-must-contain-the-paging-parameters-pg-and-rpp-which-are-integers-and-represent-the-page-number-1-based-and-results-per-page-rpp-so-to-get-the-third-page-of-a-result-set-paged-with-25-recipes-per-page-youd-pass-pg3amprpp25-if-youd-like-to-target-searches-to-just-a-single-target-users-recipes-set-useridthe-target-userid-number-or-you-can-set-usernametheirusername-vtnvgnchsglfntfdyfsffslftnfwmfrmfcps-cuisine-photos-filteraddedtryfavoritesmyrecipesrnrn-folderfoldernamecasesensitive-collid-of-collection-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|any_kw|query|string|false|Search anywhere in the recipe for the keyword|
|folder|query|string|false|Search in a specific folder name for the authenticated user|
|coll|query|integer(int32)|false|Limit to a collection ID number|
|filter|query|string|false|optionally set to either "myrecipes", "try", "favorites","added" to filter to just the authenticated user's recipe set|
|title_kw|query|string|false|Search just in the recipe title for the keyword|
|userId|query|integer(int32)|false|Set the target userid to search their public recipes|
|username|query|string|false|Set the target username to search their public recipes|
|token|query|string|false|none|
|photos|query|boolean|false|if set to true, limit search results to photos only|
|boostmine|query|boolean|false|if set to true, boost my own recipes in my folders so they show up high in the list (at the expense of other sort orders)|
|include_cat|query|string|false|integer of the subcategory you'd like to limit searches to (see the /recipe/categories endpoint for available id numbers). For instance, 58 is "Main Dish &gt; Casseroles".|
|exclude_cat|query|string|false|like include_cat, set this to an integer to exclude a specific category|
|include_primarycat|query|string|false|csv indicating up to three top-level categories -- valid values are [appetizers,bread,breakfast,desserts,drinks,maindish,salads,sidedish,soups,marinades,other]|
|exclude_primarycat|query|string|false|csv indicating integer values for up to 3 top-level categories -- valid values are 1...11 [appetizers,bread,breakfast,desserts,drinks,maindish,salads,sidedish,soups,marinades,other]|
|include_ing|query|string|false|A CSV representing up to 3 ingredients to include, e.g., tomatoes,corn%20%starch,chicken|
|exclude_ing|query|string|false|A CSV representing up to 3 ingredients to exclude  (Powersearch-capable plan required)|
|cuisine|query|string|false|Limit to a specific cuisine. Cooks can enter anything free-form, but the few dozen preconfigured values are Afghan,African,American,American-South,Asian,Australian,Brazilian,Cajun,Canadian,Caribbean,Chinese,Croatian,Cuban,Dessert,Eastern European,English,French,German,Greek,Hawaiian,Hungarian,India,Indian,Irish,Italian,Japanese,Jewish,Korean,Latin,Mediterranean,Mexican,Middle Eastern,Moroccan,Polish,Russian,Scandanavian,Seafood,Southern,Southwestern,Spanish,Tex-Mex,Thai,Vegan,Vegetarian,Vietnamese|
|db|query|string|false|none|
|userset|query|string|false|If set to a given username, it'll force the search to filter to just that username|
|servingsMin|query|number(double)|false|Limit to yield of a given number size or greater. Note that cooks usually enter recipes by Servings, but sometimes they are posted by "dozen", etc. This parameter simply specifies the minimum number for that value entered in "yield."|
|totalMins|query|integer(int32)|false|Optional. If supplied, will restrict results to recipes that can be made in {totalMins} or less. (Convert "1 hour, 15 minutes" to 75 before passing in.)|
|maxIngredients|query|integer(int32)|false|Optional. If supplied, will restrict results to recipes that can be made with {maxIngredients} ingredients or less|
|minIngredients|query|integer(int32)|false|Optional. If supplied, will restrict results to recipes that have at least {minIngredients}|
|vtn|query|integer(int32)|false|when set to 1, limit to vegetarian (Powersearch-capable plan required)|
|vgn|query|integer(int32)|false|when set to 1, limit to vegan (Powersearch-capable plan required)|
|chs|query|integer(int32)|false|when set to 1, limit to contains-cheese (Powersearch-capable plan required)|
|glf|query|integer(int32)|false|when set to 1, limit to gluten-free (Powersearch-capable plan required)|
|ntf|query|integer(int32)|false|when set to 1, limit to nut-free (Powersearch-capable plan required)|
|dyf|query|integer(int32)|false|when set to 1, limit to dairy-free (Powersearch-capable plan required)|
|sff|query|integer(int32)|false|when set to 1, limit to seafood-free (Powersearch-capable plan required)|
|slf|query|integer(int32)|false|when set to 1, limit to shellfish-free (Powersearch-capable plan required)|
|tnf|query|integer(int32)|false|when set to 1, limit to tree-nut free (Powersearch-capable plan required)|
|wmf|query|integer(int32)|false|when set to 1, limit to white-meat free (Powersearch-capable plan required)|
|rmf|query|integer(int32)|false|when set to 1, limit to red-meat free (Powersearch-capable plan required)|
|cps|query|integer(int32)|false|when set to 1, recipe contains pasta, set to 0 means contains no pasta (Powersearch-capable plan required)|
|champion|query|integer(int32)|false|optional. When set to 1, this will limit search results to "best of" recipes as determined by various internal editorial and programmatic algorithms. For the most comprehensive results, don't include this parameter.|
|synonyms|query|boolean|false|optional, default is false. When set to true, BigOven will attempt to apply synonyms in search (e.g., excluding pork will also exclude bacon)|

> Example responses

> 200 Response

```json
{
  "ResultCount": 0,
  "Results": [
    {
      "Category": "string",
      "CreationDate": "1970-01-01T00:00:00Z",
      "Cuisine": "string",
      "HasVideos": true,
      "IsBookmark": true,
      "IsPrivate": true,
      "IsRecipeScan": true,
      "Microcategory": "string",
      "PhotoUrl": "string",
      "Poster": {
        "FirstName": "string",
        "LastName": "string",
        "PhotoUrl": "string",
        "UserID": 0,
        "UserName": "string"
      },
      "RecipeID": 0,
      "ReviewCount": 0,
      "Servings": 0,
      "StarRating": 0,
      "Subcategory": "string",
      "Title": "string",
      "TotalTries": 0,
      "WebURL": "string"
    }
  ],
  "SpellSuggest": "string"
}
```

<h3 id="search-for-recipes-there-are-many-parameters-that-you-can-apply-starting-with-the-most-common-use-titlekw-to-search-within-a-title-use-anykw-to-search-across-the-entire-recipe-if-youd-like-to-limit-by-course-set-the-parameter-includeprimarycat-to-one-of-appetizersbreadbreakfastdessertdrinksmaindishsaladsidedishsoupmarinadesother-if-youd-like-to-exclude-a-category-set-excludecat-to-one-or-more-comma-separated-list-of-those-categories-to-exclude-if-youd-like-to-include-a-category-set-includecat-to-one-or-more-comma-separated-of-those-categories-to-include-to-explicitly-include-an-ingredient-in-your-search-set-the-parameter-includeing-to-a-csv-of-up-to-three-ingredients-egincludeingmustardchickenbeef20tips-to-explicitly-exclude-an-ingredient-in-your-search-set-the-parameter-excludeing-to-a-csv-of-up-to-three-ingredients-all-searches-must-contain-the-paging-parameters-pg-and-rpp-which-are-integers-and-represent-the-page-number-1-based-and-results-per-page-rpp-so-to-get-the-third-page-of-a-result-set-paged-with-25-recipes-per-page-youd-pass-pg3amprpp25-if-youd-like-to-target-searches-to-just-a-single-target-users-recipes-set-useridthe-target-userid-number-or-you-can-set-usernametheirusername-vtnvgnchsglfntfdyfsffslftnfwmfrmfcps-cuisine-photos-filteraddedtryfavoritesmyrecipesrnrn-folderfoldernamecasesensitive-collid-of-collection-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[BigOven.Model.API2.RecipeSearchResult](#schemabigoven.model.api2.recipesearchresult)|

<aside class="success">
This operation does not require authentication
</aside>

## Same as GET recipe but also includes the recipe videos (if any)

<a id="opIdRecipe_GetV2"></a>

> Code samples

```bash
curl https://example.com/recipes/0 \
  -H 'Accept: application/json'
```

`GET /recipes/{id}`

<h3 id="same-as-get-recipe-but-also-includes-the-recipe-videos-if-any-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Recipe ID to retrieve|
|prefetch|query|boolean|false|The prefetch.|

> Example responses

> 200 Response

```json
{
  "ActiveMinutes": 0,
  "AdTags": "string",
  "AdminBoost": 0,
  "AllCategoriesText": "string",
  "BookmarkImageURL": "string",
  "BookmarkSiteLogo": "string",
  "BookmarkURL": "string",
  "Category": "string",
  "Collection": "string",
  "CollectionID": 0,
  "CreationDate": "1970-01-01T00:00:00Z",
  "Cuisine": "string",
  "Description": "string",
  "FavoriteCount": 0,
  "ImageSquares": [
    0
  ],
  "ImageURL": "string",
  "Ingredients": [
    {
      "DisplayIndex": 0,
      "DisplayQuantity": "string",
      "HTMLName": "string",
      "IngredientID": 0,
      "IngredientInfo": {
        "Department": "string",
        "MasterIngredientID": 0,
        "Name": "string",
        "UsuallyOnHand": true
      },
      "IsHeading": true,
      "IsLinked": true,
      "MetricDisplayQuantity": "string",
      "MetricQuantity": 0,
      "MetricUnit": "string",
      "Name": "string",
      "PreparationNotes": "string",
      "Quantity": 0,
      "Unit": "string"
    }
  ],
  "IngredientsTextBlock": "string",
  "Instructions": "string",
  "IsBookmark": true,
  "IsPrivate": true,
  "IsRecipeScan": true,
  "IsSponsored": true,
  "LastModified": "1970-01-01T00:00:00Z",
  "MaxImageSquare": 0,
  "MedalCount": 0,
  "MenuCount": 0,
  "Microcategory": "string",
  "NotesCount": 0,
  "NutritionInfo": {
    "CaloriesFromFat": 0,
    "Cholesterol": 0,
    "CholesterolPct": 0,
    "DietaryFiber": 0,
    "DietaryFiberPct": 0,
    "MonoFat": 0,
    "PolyFat": 0,
    "Potassium": 0,
    "PotassiumPct": 0,
    "Protein": 0,
    "ProteinPct": 0,
    "SatFat": 0,
    "SatFatPct": 0,
    "SingularYieldUnit": "string",
    "Sodium": 0,
    "SodiumPct": 0,
    "Sugar": 0,
    "TotalCalories": 0,
    "TotalCarbs": 0,
    "TotalCarbsPct": 0,
    "TotalFat": 0,
    "TotalFatPct": 0,
    "TransFat": 0
  },
  "PhotoUrl": "string",
  "Poster": {
    "FirstName": "string",
    "ImageUrl48": "string",
    "IsKitchenHelper": true,
    "IsPremium": true,
    "IsUsingRecurly": true,
    "LastName": "string",
    "MemberSince": "1970-01-01T00:00:00Z",
    "PhotoUrl": "string",
    "PhotoUrl48": "string",
    "PremiumExpiryDate": "1970-01-01T00:00:00Z",
    "UserID": 0,
    "UserName": "string",
    "WebUrl": "string"
  },
  "PrimaryIngredient": "string",
  "RecipeID": 0,
  "ReviewCount": 0,
  "StarRating": 0,
  "Steps": [
    {
      "EndGantt": 0,
      "StartGantt": 0,
      "Text": "string"
    }
  ],
  "Subcategory": "string",
  "Title": "string",
  "TotalMinutes": 0,
  "VariantOfRecipeID": 0,
  "VerifiedByClass": "string",
  "VerifiedDateTime": "1970-01-01T00:00:00Z",
  "Videos": [
    {
      "InsertedOn": "1970-01-01T00:00:00Z",
      "IsPrimaryVideo": true,
      "MediaId": "string",
      "VidId": 0
    }
  ],
  "WebURL": "string",
  "YieldNumber": 0,
  "YieldUnit": "string"
}
```

<h3 id="same-as-get-recipe-but-also-includes-the-recipe-videos-if-any-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[API2.Models.Recipes.RecipeResponse](#schemaapi2.models.recipes.reciperesponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="1000000-recipe-and-grocery-list-api-v2-review">Review</h1>

## Update (PUT) a reply to a given review. Authenticated user must be the original one that posted the reply.

<a id="opIdReview_PutReply"></a>

> Code samples

```bash
curl https://example.com/recipe/review/replies/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "Comment": "string"
  }'
```

`PUT /recipe/review/replies/{replyId}`

> Body parameter

```json
{
  "Comment": "string"
}
```

<h3 id="update-put-a-reply-to-a-given-review-authenticated-user-must-be-the-original-one-that-posted-the-reply-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|replyId|path|string|true|none|
|body|body|[API2.Controllers.WebAPI.ReviewController.PostReplyReq](#schemaapi2.controllers.webapi.reviewcontroller.postreplyreq)|true|none|
|» Comment|body|string|false|The comment. If mentioning any user(s) (optional), include them as @username in the text body. Do not use @ symbol for anything but mentioning @usernames.|

> Example responses

> 200 Response

```json
{
  "Comment": "string",
  "CreationDate": "1970-01-01T00:00:00Z",
  "ID": "string",
  "LastModified": "1970-01-01T00:00:00Z",
  "Poster": {
    "FirstName": "string",
    "LastName": "string",
    "PhotoUrl": "string",
    "UserID": 0,
    "UserName": "string"
  },
  "ReviewID": "string"
}
```

<h3 id="update-put-a-reply-to-a-given-review-authenticated-user-must-be-the-original-one-that-posted-the-reply-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[BigOven.Model.API.Reply](#schemabigoven.model.api.reply)|

<aside class="success">
This operation does not require authentication
</aside>

## DELETE a reply to a given review. Authenticated user must be the one who originally posted the reply.

<a id="opIdReview_DeleteReply"></a>

> Code samples

```bash
curl https://example.com/recipe/review/replies/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /recipe/review/replies/{replyId}`

<h3 id="delete-a-reply-to-a-given-review-authenticated-user-must-be-the-one-who-originally-posted-the-reply-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|replyId|path|string|true|none|

> Example responses

> 200 Response

```json
{}
```

<h3 id="delete-a-reply-to-a-given-review-authenticated-user-must-be-the-one-who-originally-posted-the-reply-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[System.Object](#schemasystem.object)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a given review by string-style ID. This will return a payload with FeaturedReply, ReplyCount. Recommended display is to list top-level reviews with one featured reply underneath. Currently, the FeaturedReply is the most recent one for that rating.

> Code samples

```bash
curl https://example.com/recipe/review/string \
  -H 'Accept: application/json'
```

`GET /recipe/review/{reviewId}`

<h3 id="get-a-given-review-by-string-style-id-this-will-return-a-payload-with-featuredreply-replycount-recommended-display-is-to-list-top-level-reviews-with-one-featured-reply-underneath-currently-the-featuredreply-is-the-most-recent-one-for-that-rating-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|reviewId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "ActiveMinutes": 0,
  "Comment": "string",
  "CreationDate": "1970-01-01T00:00:00Z",
  "FeaturedReply": {
    "Comment": "string",
    "CreationDate": "1970-01-01T00:00:00Z",
    "ID": "string",
    "LastModified": "1970-01-01T00:00:00Z",
    "Poster": {
      "FirstName": "string",
      "LastName": "string",
      "PhotoUrl": "string",
      "UserID": 0,
      "UserName": "string"
    },
    "ReviewID": "string"
  },
  "GUID": "string",
  "ID": "string",
  "LastModified": "1970-01-01T00:00:00Z",
  "ParentID": 0,
  "Poster": {
    "FirstName": "string",
    "ImageUrl48": "string",
    "IsKitchenHelper": true,
    "IsPremium": true,
    "IsUsingRecurly": true,
    "LastName": "string",
    "MemberSince": "1970-01-01T00:00:00Z",
    "PhotoUrl": "string",
    "PhotoUrl48": "string",
    "PremiumExpiryDate": "1970-01-01T00:00:00Z",
    "UserID": 0,
    "UserName": "string",
    "WebUrl": "string"
  },
  "Replies": [
    {}
  ],
  "ReplyCount": 0,
  "ReviewID": 0,
  "StarRating": 0,
  "TotalMinutes": 0
}
```

<h3 id="get-a-given-review-by-string-style-id-this-will-return-a-payload-with-featuredreply-replycount-recommended-display-is-to-list-top-level-reviews-with-one-featured-reply-underneath-currently-the-featuredreply-is-the-most-recent-one-for-that-rating-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[BigOven.Model.API.Review](#schemabigoven.model.api.review)|

<aside class="success">
This operation does not require authentication
</aside>

## Update a given top-level review.

<a id="opIdReview_Put"></a>

> Code samples

```bash
curl https://example.com/recipe/review/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "ActiveMinutes": 0,
    "Comment": "string",
    "MakeAgain": "string",
    "StarRating": 0,
    "TotalMinutes": 0
  }'
```

`PUT /recipe/review/{reviewId}`

> Body parameter

```json
{
  "ActiveMinutes": 0,
  "Comment": "string",
  "MakeAgain": "string",
  "StarRating": 0,
  "TotalMinutes": 0
}
```

<h3 id="update-a-given-top-level-review-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|reviewId|path|string|true|none|
|body|body|[API2.Controllers.WebAPI.ReviewController.ReviewRequest](#schemaapi2.controllers.webapi.reviewcontroller.reviewrequest)|true|none|
|» ActiveMinutes|body|integer(int32)|false|How many minutes of ACTIVE time (i.e., actively working on the recipe, not waiting for rising, baking, etc.) did it <br>            demand of the cook? Optional.|
|» Comment|body|string|false|The notes|
|» MakeAgain|body|string|false|"yes" or "no"|
|» StarRating|body|integer(int32)|false|1, 2, 3, 4, or 5|
|» TotalMinutes|body|integer(int32)|false|How long, start to finish, in minutes (integer) did it take? Optional.|

> Example responses

> 200 Response

```json
{
  "ActiveMinutes": 0,
  "Comment": "string",
  "CreationDate": "1970-01-01T00:00:00Z",
  "FeaturedReply": {
    "Comment": "string",
    "CreationDate": "1970-01-01T00:00:00Z",
    "ID": "string",
    "LastModified": "1970-01-01T00:00:00Z",
    "Poster": {
      "FirstName": "string",
      "LastName": "string",
      "PhotoUrl": "string",
      "UserID": 0,
      "UserName": "string"
    },
    "ReviewID": "string"
  },
  "GUID": "string",
  "ID": "string",
  "LastModified": "1970-01-01T00:00:00Z",
  "ParentID": 0,
  "Poster": {
    "FirstName": "string",
    "ImageUrl48": "string",
    "IsKitchenHelper": true,
    "IsPremium": true,
    "IsUsingRecurly": true,
    "LastName": "string",
    "MemberSince": "1970-01-01T00:00:00Z",
    "PhotoUrl": "string",
    "PhotoUrl48": "string",
    "PremiumExpiryDate": "1970-01-01T00:00:00Z",
    "UserID": 0,
    "UserName": "string",
    "WebUrl": "string"
  },
  "Replies": [
    {}
  ],
  "ReplyCount": 0,
  "ReviewID": 0,
  "StarRating": 0,
  "TotalMinutes": 0
}
```

<h3 id="update-a-given-top-level-review-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[BigOven.Model.API.Review](#schemabigoven.model.api.review)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a paged list of replies for a given review.

<a id="opIdReview_GetReplies"></a>

> Code samples

```bash
curl https://example.com/recipe/review/string/replies \
  -H 'Accept: application/json'
```

`GET /recipe/review/{reviewId}/replies`

<h3 id="get-a-paged-list-of-replies-for-a-given-review-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|reviewId|path|string|true|none|
|pg|query|integer(int32)|false|the page (int), starting with 1|
|rpp|query|integer(int32)|false|results per page (int)|

> Example responses

> 200 Response

```json
[
  {
    "Comment": "string",
    "CreationDate": "1970-01-01T00:00:00Z",
    "ID": "string",
    "LastModified": "1970-01-01T00:00:00Z",
    "Poster": {
      "FirstName": "string",
      "LastName": "string",
      "PhotoUrl": "string",
      "UserID": 0,
      "UserName": "string"
    },
    "ReviewID": "string"
  }
]
```

<h3 id="get-a-paged-list-of-replies-for-a-given-review-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-a-paged-list-of-replies-for-a-given-review-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[BigOven.Model.API.Reply](#schemabigoven.model.api.reply)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## POST a reply to a given review. The date will be set by server. Note that replies no longer have star ratings, only top-level reviews do.

<a id="opIdReview_PostReply"></a>

> Code samples

```bash
curl https://example.com/recipe/review/string/replies \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "Comment": "string"
  }'
```

`POST /recipe/review/{reviewId}/replies`

> Body parameter

```json
{
  "Comment": "string"
}
```

<h3 id="post-a-reply-to-a-given-review-the-date-will-be-set-by-server-note-that-replies-no-longer-have-star-ratings-only-top-level-reviews-do-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|reviewId|path|string|true|none|
|body|body|[API2.Controllers.WebAPI.ReviewController.PostReplyReq](#schemaapi2.controllers.webapi.reviewcontroller.postreplyreq)|true|none|
|» Comment|body|string|false|The comment. If mentioning any user(s) (optional), include them as @username in the text body. Do not use @ symbol for anything but mentioning @usernames.|

> Example responses

> 200 Response

```json
{
  "Comment": "string",
  "CreationDate": "1970-01-01T00:00:00Z",
  "ID": "string",
  "LastModified": "1970-01-01T00:00:00Z",
  "Poster": {
    "FirstName": "string",
    "LastName": "string",
    "PhotoUrl": "string",
    "UserID": 0,
    "UserName": "string"
  },
  "ReviewID": "string"
}
```

<h3 id="post-a-reply-to-a-given-review-the-date-will-be-set-by-server-note-that-replies-no-longer-have-star-ratings-only-top-level-reviews-do-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[BigOven.Model.API.Reply](#schemabigoven.model.api.reply)|

<aside class="success">
This operation does not require authentication
</aside>

## Get *my* review for the recipe {recipeId}, where &quot;me&quot; is determined by standard authentication headers

> Code samples

```bash
curl https://example.com/recipe/0/review \
  -H 'Accept: application/json'
```

`GET /recipe/{recipeId}/review`

<h3 id="get-my-review-for-the-recipe-recipeid-where-me-is-determined-by-standard-authentication-headers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|recipeId|path|integer(int32)|true|none|

> Example responses

> 200 Response

```json
{
  "ActiveMinutes": 0,
  "Comment": "string",
  "CreationDate": "1970-01-01T00:00:00Z",
  "FeaturedReply": {
    "Comment": "string",
    "CreationDate": "1970-01-01T00:00:00Z",
    "ID": "string",
    "LastModified": "1970-01-01T00:00:00Z",
    "Poster": {
      "FirstName": "string",
      "LastName": "string",
      "PhotoUrl": "string",
      "UserID": 0,
      "UserName": "string"
    },
    "ReviewID": "string"
  },
  "GUID": "string",
  "ID": "string",
  "LastModified": "1970-01-01T00:00:00Z",
  "ParentID": 0,
  "Poster": {
    "FirstName": "string",
    "ImageUrl48": "string",
    "IsKitchenHelper": true,
    "IsPremium": true,
    "IsUsingRecurly": true,
    "LastName": "string",
    "MemberSince": "1970-01-01T00:00:00Z",
    "PhotoUrl": "string",
    "PhotoUrl48": "string",
    "PremiumExpiryDate": "1970-01-01T00:00:00Z",
    "UserID": 0,
    "UserName": "string",
    "WebUrl": "string"
  },
  "Replies": [
    {}
  ],
  "ReplyCount": 0,
  "ReviewID": 0,
  "StarRating": 0,
  "TotalMinutes": 0
}
```

<h3 id="get-my-review-for-the-recipe-recipeid-where-me-is-determined-by-standard-authentication-headers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[BigOven.Model.API.Review](#schemabigoven.model.api.review)|

<aside class="success">
This operation does not require authentication
</aside>

## Add a new review. Only one review can be provided per {userId, recipeId} pair. Otherwise your review will be updated.

<a id="opIdReview_Post"></a>

> Code samples

```bash
curl https://example.com/recipe/0/review \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "ActiveMinutes": 0,
    "Comment": "string",
    "MakeAgain": "string",
    "StarRating": 0,
    "TotalMinutes": 0
  }'
```

`POST /recipe/{recipeId}/review`

> Body parameter

```json
{
  "ActiveMinutes": 0,
  "Comment": "string",
  "MakeAgain": "string",
  "StarRating": 0,
  "TotalMinutes": 0
}
```

<h3 id="add-a-new-review-only-one-review-can-be-provided-per-userid-recipeid-pair-otherwise-your-review-will-be-updated-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|recipeId|path|integer(int32)|true|none|
|body|body|[API2.Controllers.WebAPI.ReviewController.ReviewRequest](#schemaapi2.controllers.webapi.reviewcontroller.reviewrequest)|true|none|
|» ActiveMinutes|body|integer(int32)|false|How many minutes of ACTIVE time (i.e., actively working on the recipe, not waiting for rising, baking, etc.) did it <br>            demand of the cook? Optional.|
|» Comment|body|string|false|The notes|
|» MakeAgain|body|string|false|"yes" or "no"|
|» StarRating|body|integer(int32)|false|1, 2, 3, 4, or 5|
|» TotalMinutes|body|integer(int32)|false|How long, start to finish, in minutes (integer) did it take? Optional.|

> Example responses

> 200 Response

```json
{}
```

<h3 id="add-a-new-review-only-one-review-can-be-provided-per-userid-recipeid-pair-otherwise-your-review-will-be-updated-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[System.Object](#schemasystem.object)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a given review - DEPRECATED. See recipe/review/{reviewId} for the current usage. Beginning in January 2017, BigOven moded from an integer-based ID system to a GUID-style string-based ID system for reviews and replies. We are also supporting more of a &quot;Google Play&quot; style model for Reviews and Replies. That is, there are top-level Reviews and then an unlimited list of replies (which do not carry star ratings) underneath existing reviews. Also, a given user can only have one review per recipe. Existing legacy endpoints will continue to work, but we strongly recommend you migrate to using the newer endpoints listed which do NOT carry the &quot;DEPRECATED&quot; flag.

<a id="opIdReview_Get"></a>

> Code samples

```bash
curl https://example.com/recipe/0/review/0 \
  -H 'Accept: application/json'
```

`GET /recipe/{recipeId}/review/{reviewId}`

<h3 id="get-a-given-review---deprecated-see-recipereviewreviewid-for-the-current-usage-beginning-in-january-2017-bigoven-moded-from-an-integer-based-id-system-to-a-guid-style-string-based-id-system-for-reviews-and-replies-we-are-also-supporting-more-of-a-google-play-style-model-for-reviews-and-replies-that-is-there-are-top-level-reviews-and-then-an-unlimited-list-of-replies-which-do-not-carry-star-ratings-underneath-existing-reviews-also-a-given-user-can-only-have-one-review-per-recipe-existing-legacy-endpoints-will-continue-to-work-but-we-strongly-recommend-you-migrate-to-using-the-newer-endpoints-listed-which-do-not-carry-the-deprecated-flag-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|reviewId|path|integer(int32)|true|int|
|recipeId|path|integer(int32)|true|int|

> Example responses

> 200 Response

```json
{
  "ActiveMinutes": 0,
  "Comment": "string",
  "CreationDate": "1970-01-01T00:00:00Z",
  "FeaturedReply": {
    "Comment": "string",
    "CreationDate": "1970-01-01T00:00:00Z",
    "ID": "string",
    "LastModified": "1970-01-01T00:00:00Z",
    "Poster": {
      "FirstName": "string",
      "LastName": "string",
      "PhotoUrl": "string",
      "UserID": 0,
      "UserName": "string"
    },
    "ReviewID": "string"
  },
  "GUID": "string",
  "ID": "string",
  "LastModified": "1970-01-01T00:00:00Z",
  "ParentID": 0,
  "Poster": {
    "FirstName": "string",
    "ImageUrl48": "string",
    "IsKitchenHelper": true,
    "IsPremium": true,
    "IsUsingRecurly": true,
    "LastName": "string",
    "MemberSince": "1970-01-01T00:00:00Z",
    "PhotoUrl": "string",
    "PhotoUrl48": "string",
    "PremiumExpiryDate": "1970-01-01T00:00:00Z",
    "UserID": 0,
    "UserName": "string",
    "WebUrl": "string"
  },
  "Replies": [
    {}
  ],
  "ReplyCount": 0,
  "ReviewID": 0,
  "StarRating": 0,
  "TotalMinutes": 0
}
```

<h3 id="get-a-given-review---deprecated-see-recipereviewreviewid-for-the-current-usage-beginning-in-january-2017-bigoven-moded-from-an-integer-based-id-system-to-a-guid-style-string-based-id-system-for-reviews-and-replies-we-are-also-supporting-more-of-a-google-play-style-model-for-reviews-and-replies-that-is-there-are-top-level-reviews-and-then-an-unlimited-list-of-replies-which-do-not-carry-star-ratings-underneath-existing-reviews-also-a-given-user-can-only-have-one-review-per-recipe-existing-legacy-endpoints-will-continue-to-work-but-we-strongly-recommend-you-migrate-to-using-the-newer-endpoints-listed-which-do-not-carry-the-deprecated-flag-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[BigOven.Model.API.Review](#schemabigoven.model.api.review)|

<aside class="success">
This operation does not require authentication
</aside>

## HTTP PUT (update) a recipe review. DEPRECATED. Please see recipe/review/{reviewId} PUT for the new endpoint. We are moving to a string-based primary key system, no longer integers, for reviews and replies.

<a id="opIdReview_PutLegacy"></a>

> Code samples

```bash
curl https://example.com/recipe/0/review/0 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "ActiveMinutes": 0,
    "Comment": "string",
    "GUID": "string",
    "MakeAgain": "string",
    "ParentID": 0,
    "StarRating": 0,
    "TotalMinutes": 0
  }'
```

`PUT /recipe/{recipeId}/review/{reviewId}`

> Body parameter

```json
{
  "ActiveMinutes": 0,
  "Comment": "string",
  "GUID": "string",
  "MakeAgain": "string",
  "ParentID": 0,
  "StarRating": 0,
  "TotalMinutes": 0
}
```

<h3 id="http-put-update-a-recipe-review-deprecated-please-see-recipereviewreviewid-put-for-the-new-endpoint-we-are-moving-to-a-string-based-primary-key-system-no-longer-integers-for-reviews-and-replies-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|reviewId|path|integer(int32)|true|reviewId (int)|
|recipeId|path|integer(int32)|true|recipeId (int)|
|body|body|[API2.Controllers.WebAPI.ReviewController.ReviewRequestLegacy](#schemaapi2.controllers.webapi.reviewcontroller.reviewrequestlegacy)|true|none|
|» ActiveMinutes|body|integer(int32)|false|none|
|» Comment|body|string|false|none|
|» GUID|body|string|false|none|
|» MakeAgain|body|string|false|none|
|» ParentID|body|integer(int32)|false|none|
|» StarRating|body|integer(int32)|false|none|
|» TotalMinutes|body|integer(int32)|false|none|

> Example responses

> 200 Response

```json
{
  "ActiveMinutes": 0,
  "Comment": "string",
  "CreationDate": "1970-01-01T00:00:00Z",
  "FeaturedReply": {
    "Comment": "string",
    "CreationDate": "1970-01-01T00:00:00Z",
    "ID": "string",
    "LastModified": "1970-01-01T00:00:00Z",
    "Poster": {
      "FirstName": "string",
      "LastName": "string",
      "PhotoUrl": "string",
      "UserID": 0,
      "UserName": "string"
    },
    "ReviewID": "string"
  },
  "GUID": "string",
  "ID": "string",
  "LastModified": "1970-01-01T00:00:00Z",
  "ParentID": 0,
  "Poster": {
    "FirstName": "string",
    "ImageUrl48": "string",
    "IsKitchenHelper": true,
    "IsPremium": true,
    "IsUsingRecurly": true,
    "LastName": "string",
    "MemberSince": "1970-01-01T00:00:00Z",
    "PhotoUrl": "string",
    "PhotoUrl48": "string",
    "PremiumExpiryDate": "1970-01-01T00:00:00Z",
    "UserID": 0,
    "UserName": "string",
    "WebUrl": "string"
  },
  "Replies": [
    {}
  ],
  "ReplyCount": 0,
  "ReviewID": 0,
  "StarRating": 0,
  "TotalMinutes": 0
}
```

<h3 id="http-put-update-a-recipe-review-deprecated-please-see-recipereviewreviewid-put-for-the-new-endpoint-we-are-moving-to-a-string-based-primary-key-system-no-longer-integers-for-reviews-and-replies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[BigOven.Model.API.Review](#schemabigoven.model.api.review)|

<aside class="success">
This operation does not require authentication
</aside>

## DEPRECATED! - Deletes a review by recipeId and reviewId. Please use recipe/review/{reviewId} instead.

<a id="opIdReview_Delete"></a>

> Code samples

```bash
curl https://example.com/recipe/0/review/0 \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /recipe/{recipeId}/review/{reviewId}`

<h3 id="deprecated---deletes-a-review-by-recipeid-and-reviewid-please-use-recipereviewreviewid-instead-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|recipeId|path|integer(int32)|true|none|
|reviewId|path|integer(int64)|true|none|

> Example responses

> 200 Response

```json
{}
```

<h3 id="deprecated---deletes-a-review-by-recipeid-and-reviewid-please-use-recipereviewreviewid-instead-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[System.Object](#schemasystem.object)|

<aside class="success">
This operation does not require authentication
</aside>

## Get paged list of reviews for a recipe. Each review will have at most one FeaturedReply, as well as a ReplyCount.

<a id="opIdReview_GetReviews"></a>

> Code samples

```bash
curl https://example.com/recipe/0/reviews \
  -H 'Accept: application/json'
```

`GET /recipe/{recipeId}/reviews`

<h3 id="get-paged-list-of-reviews-for-a-recipe-each-review-will-have-at-most-one-featuredreply-as-well-as-a-replycount-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|recipeId|path|integer(int32)|true|recipe id (int)|
|pg|query|integer(int32)|false|the page (int), starting with 1|
|rpp|query|integer(int32)|false|results per page (int)|

> Example responses

> 200 Response

```json
[
  {
    "ActiveMinutes": 0,
    "Comment": "string",
    "CreationDate": "1970-01-01T00:00:00Z",
    "FeaturedReply": {
      "Comment": "string",
      "CreationDate": "1970-01-01T00:00:00Z",
      "ID": "string",
      "LastModified": "1970-01-01T00:00:00Z",
      "Poster": {
        "FirstName": "string",
        "LastName": "string",
        "PhotoUrl": "string",
        "UserID": 0,
        "UserName": "string"
      },
      "ReviewID": "string"
    },
    "GUID": "string",
    "ID": "string",
    "LastModified": "1970-01-01T00:00:00Z",
    "ParentID": 0,
    "Poster": {
      "FirstName": "string",
      "ImageUrl48": "string",
      "IsKitchenHelper": true,
      "IsPremium": true,
      "IsUsingRecurly": true,
      "LastName": "string",
      "MemberSince": "1970-01-01T00:00:00Z",
      "PhotoUrl": "string",
      "PhotoUrl48": "string",
      "PremiumExpiryDate": "1970-01-01T00:00:00Z",
      "UserID": 0,
      "UserName": "string",
      "WebUrl": "string"
    },
    "Replies": [
      {}
    ],
    "ReplyCount": 0,
    "ReviewID": 0,
    "StarRating": 0,
    "TotalMinutes": 0
  }
]
```

<h3 id="get-paged-list-of-reviews-for-a-recipe-each-review-will-have-at-most-one-featuredreply-as-well-as-a-replycount-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-paged-list-of-reviews-for-a-recipe-each-review-will-have-at-most-one-featuredreply-as-well-as-a-replycount-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[BigOven.Model.API.Review](#schemabigoven.model.api.review)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="1000000-recipe-and-grocery-list-api-v2-note">Note</h1>

## HTTP POST a new note into the system.

<a id="opIdNote_Post"></a>

> Code samples

```bash
curl https://example.com/recipe/0/note \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "CreationDate": "1970-01-01T00:00:00Z",
    "Date": "1970-01-01T00:00:00Z",
    "DateDT": "string",
    "GUID": "string",
    "ID": 0,
    "Notes": "string",
    "People": "string",
    "RecipeID": 0,
    "UserID": 0,
    "Variations": "string"
  }'
```

`POST /recipe/{recipeId}/note`

> Body parameter

```json
{
  "CreationDate": "1970-01-01T00:00:00Z",
  "Date": "1970-01-01T00:00:00Z",
  "DateDT": "string",
  "GUID": "string",
  "ID": 0,
  "Notes": "string",
  "People": "string",
  "RecipeID": 0,
  "UserID": 0,
  "Variations": "string"
}
```

<h3 id="http-post-a-new-note-into-the-system-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|recipeId|path|integer(int32)|true|recipeId (int)|
|body|body|[API2.Controllers.WebAPI.NoteController.NoteRequest](#schemaapi2.controllers.webapi.notecontroller.noterequest)|true|a recipe note, with fields: Date (YYYY-MM-DD string), Notes (string), People (string), Variations (string), RecipeID (int?)|
|» CreationDate|body|string(date-time)|false|Gets or sets the creation date.|
|» Date|body|string(date-time)|false|Gets or sets the date.|
|» DateDT|body|string|false|Gets or sets the date dt.|
|» GUID|body|string|false|Gets or sets the unique identifier.|
|» ID|body|integer(int32)|false|Gets or sets the identifier.|
|» Notes|body|string|false|Gets or sets the notes.|
|» People|body|string|false|Gets or sets the people.|
|» RecipeID|body|integer(int32)|false|Gets or sets the recipe identifier.|
|» UserID|body|integer(int32)|false|Gets or sets the user identifier.|
|» Variations|body|string|false|Gets or sets the variations.|

> Example responses

> 200 Response

```json
{
  "CreationDate": "1970-01-01T00:00:00Z",
  "Date": "string",
  "DateDT": "1970-01-01T00:00:00Z",
  "GUID": "string",
  "ID": 0,
  "Notes": "string",
  "People": "string",
  "RecipeID": 0,
  "UserID": 0,
  "Variations": "string"
}
```

<h3 id="http-post-a-new-note-into-the-system-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[BigOven.Model.API2.RecipeNote](#schemabigoven.model.api2.recipenote)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a given note. Make sure you're passing authentication information in the header for the user who owns the note.

<a id="opIdNote_Get"></a>

> Code samples

```bash
curl https://example.com/recipe/0/note/0 \
  -H 'Accept: application/json'
```

`GET /recipe/{recipeId}/note/{noteId}`

<h3 id="get-a-given-note-make-sure-youre-passing-authentication-information-in-the-header-for-the-user-who-owns-the-note-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|recipeId|path|integer(int32)|true|recipe identifier (integer)|
|noteId|path|integer(int32)|true|The note ID (note -- it's not the RecipeID)|

> Example responses

> 200 Response

```json
{
  "CreationDate": "1970-01-01T00:00:00Z",
  "Date": "string",
  "DateDT": "1970-01-01T00:00:00Z",
  "GUID": "string",
  "ID": 0,
  "Notes": "string",
  "People": "string",
  "RecipeID": 0,
  "UserID": 0,
  "Variations": "string"
}
```

<h3 id="get-a-given-note-make-sure-youre-passing-authentication-information-in-the-header-for-the-user-who-owns-the-note-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[BigOven.Model.API.RecipeNote](#schemabigoven.model.api.recipenote)|

<aside class="success">
This operation does not require authentication
</aside>

## HTTP PUT (update) a Recipe note (RecipeNote).

<a id="opIdNote_Put"></a>

> Code samples

```bash
curl https://example.com/recipe/0/note/0 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "CreationDate": "1970-01-01T00:00:00Z",
    "Date": "1970-01-01T00:00:00Z",
    "DateDT": "string",
    "GUID": "string",
    "ID": 0,
    "Notes": "string",
    "People": "string",
    "RecipeID": 0,
    "UserID": 0,
    "Variations": "string"
  }'
```

`PUT /recipe/{recipeId}/note/{noteId}`

> Body parameter

```json
{
  "CreationDate": "1970-01-01T00:00:00Z",
  "Date": "1970-01-01T00:00:00Z",
  "DateDT": "string",
  "GUID": "string",
  "ID": 0,
  "Notes": "string",
  "People": "string",
  "RecipeID": 0,
  "UserID": 0,
  "Variations": "string"
}
```

<h3 id="http-put-update-a-recipe-note-recipenote-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|recipeId|path|integer(int32)|true|none|
|noteId|path|integer(int32)|true|none|
|body|body|[API2.Controllers.WebAPI.NoteController.NoteRequest](#schemaapi2.controllers.webapi.notecontroller.noterequest)|true|none|
|» CreationDate|body|string(date-time)|false|Gets or sets the creation date.|
|» Date|body|string(date-time)|false|Gets or sets the date.|
|» DateDT|body|string|false|Gets or sets the date dt.|
|» GUID|body|string|false|Gets or sets the unique identifier.|
|» ID|body|integer(int32)|false|Gets or sets the identifier.|
|» Notes|body|string|false|Gets or sets the notes.|
|» People|body|string|false|Gets or sets the people.|
|» RecipeID|body|integer(int32)|false|Gets or sets the recipe identifier.|
|» UserID|body|integer(int32)|false|Gets or sets the user identifier.|
|» Variations|body|string|false|Gets or sets the variations.|

> Example responses

> 200 Response

```json
{
  "CreationDate": "1970-01-01T00:00:00Z",
  "Date": "string",
  "DateDT": "1970-01-01T00:00:00Z",
  "GUID": "string",
  "ID": 0,
  "Notes": "string",
  "People": "string",
  "RecipeID": 0,
  "UserID": 0,
  "Variations": "string"
}
```

<h3 id="http-put-update-a-recipe-note-recipenote-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[BigOven.Model.API.RecipeNote](#schemabigoven.model.api.recipenote)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a review do a DELETE Http request of /note/{ID}

<a id="opIdNote_Delete"></a>

> Code samples

```bash
curl https://example.com/recipe/0/note/0 \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /recipe/{recipeId}/note/{noteId}`

<h3 id="delete-a-review-do-a-delete-http-request-of-noteid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|recipeId|path|integer(int32)|true|recipeId (int)|
|noteId|path|integer(int32)|true|noteId (int)|

> Example responses

> 200 Response

```json
{}
```

<h3 id="delete-a-review-do-a-delete-http-request-of-noteid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[System.Object](#schemasystem.object)|

<aside class="success">
This operation does not require authentication
</aside>

## recipe/100/notes

<a id="opIdNote_GetNotes"></a>

> Code samples

```bash
curl https://example.com/recipe/0/notes \
  -H 'Accept: application/json'
```

`GET /recipe/{recipeId}/notes`

<h3 id="recipe100notes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|recipeId|path|integer(int32)|true|recipeId (int)|
|pg|query|integer(int32)|false|page (int, starting from 1)|
|rpp|query|integer(int32)|false|recipeId|

> Example responses

> 200 Response

```json
{
  "ResultCount": 0,
  "Results": [
    {
      "CreationDate": "1970-01-01T00:00:00Z",
      "Date": "string",
      "DateDT": "1970-01-01T00:00:00Z",
      "GUID": "string",
      "ID": 0,
      "Notes": "string",
      "People": "string",
      "RecipeID": 0,
      "UserID": 0,
      "Variations": "string"
    }
  ]
}
```

<h3 id="recipe100notes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[BigOven.Model.API.RecipeNoteList](#schemabigoven.model.api.recipenotelist)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_API2.Controllers.WebAPI.GroceryListController.DepartmentModel">API2.Controllers.WebAPI.GroceryListController.DepartmentModel</h2>
<!-- backwards compatibility -->
<a id="schemaapi2.controllers.webapi.grocerylistcontroller.departmentmodel"></a>
<a id="schema_API2.Controllers.WebAPI.GroceryListController.DepartmentModel"></a>
<a id="tocSapi2.controllers.webapi.grocerylistcontroller.departmentmodel"></a>
<a id="tocsapi2.controllers.webapi.grocerylistcontroller.departmentmodel"></a>

```json
{
  "items": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|string|false|none|Gets or sets the items.|

<h2 id="tocS_API2.Controllers.WebAPI.GroceryListController.PostGroceryListAddLineRequest">API2.Controllers.WebAPI.GroceryListController.PostGroceryListAddLineRequest</h2>
<!-- backwards compatibility -->
<a id="schemaapi2.controllers.webapi.grocerylistcontroller.postgrocerylistaddlinerequest"></a>
<a id="schema_API2.Controllers.WebAPI.GroceryListController.PostGroceryListAddLineRequest"></a>
<a id="tocSapi2.controllers.webapi.grocerylistcontroller.postgrocerylistaddlinerequest"></a>
<a id="tocsapi2.controllers.webapi.grocerylistcontroller.postgrocerylistaddlinerequest"></a>

```json
{
  "text": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|text|string|false|none|Gets or sets the text.|

<h2 id="tocS_API2.Controllers.WebAPI.GroceryListController.PostGroceryListRecipeRequest">API2.Controllers.WebAPI.GroceryListController.PostGroceryListRecipeRequest</h2>
<!-- backwards compatibility -->
<a id="schemaapi2.controllers.webapi.grocerylistcontroller.postgrocerylistreciperequest"></a>
<a id="schema_API2.Controllers.WebAPI.GroceryListController.PostGroceryListRecipeRequest"></a>
<a id="tocSapi2.controllers.webapi.grocerylistcontroller.postgrocerylistreciperequest"></a>
<a id="tocsapi2.controllers.webapi.grocerylistcontroller.postgrocerylistreciperequest"></a>

```json
{
  "markAsPending": true,
  "recipeId": 0,
  "scale": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|markAsPending|boolean|false|none|Gets or sets the mark as pending.|
|recipeId|integer(int32)|false|none|Gets or sets the recipe identifier.|
|scale|number(double)|false|none|Gets or sets the scale.|

<h2 id="tocS_API2.Controllers.WebAPI.GroceryListController.PostGroceryListSyncRequest">API2.Controllers.WebAPI.GroceryListController.PostGroceryListSyncRequest</h2>
<!-- backwards compatibility -->
<a id="schemaapi2.controllers.webapi.grocerylistcontroller.postgrocerylistsyncrequest"></a>
<a id="schema_API2.Controllers.WebAPI.GroceryListController.PostGroceryListSyncRequest"></a>
<a id="tocSapi2.controllers.webapi.grocerylistcontroller.postgrocerylistsyncrequest"></a>
<a id="tocsapi2.controllers.webapi.grocerylistcontroller.postgrocerylistsyncrequest"></a>

```json
{
  "list": {
    "Items": [
      {
        "BigOvenObject": "string",
        "CreationDate": "1970-01-01T00:00:00Z",
        "Department": "string",
        "DisplayQuantity": "string",
        "GUID": "string",
        "IsChecked": true,
        "ItemID": 0,
        "LastModified": "1970-01-01T00:00:00Z",
        "LocalStatus": "string",
        "Name": "string",
        "Notes": "string",
        "RecipeID": 0,
        "ThirdPartyURL": "string"
      }
    ],
    "LastModified": "1970-01-01T00:00:00Z",
    "Recipes": [
      {
        "BookmarkURL": "string",
        "Category": "string",
        "CreationDate": "1970-01-01T00:00:00Z",
        "Cuisine": "string",
        "HasVideos": true,
        "HeroPhotoUrl": "string",
        "HideFromPublicSearch": true,
        "ImageURL": "string",
        "ImageURL120": "string",
        "IsBookmark": true,
        "IsPrivate": true,
        "MaxImageSquare": 0,
        "Microcategory": "string",
        "Poster": {
          "FirstName": "string",
          "ImageUrl48": "string",
          "IsKitchenHelper": true,
          "IsPremium": true,
          "IsUsingRecurly": true,
          "LastName": "string",
          "MemberSince": "1970-01-01T00:00:00Z",
          "PhotoUrl": "string",
          "PhotoUrl48": "string",
          "PremiumExpiryDate": "1970-01-01T00:00:00Z",
          "UserID": 0,
          "UserName": "string",
          "WebUrl": "string"
        },
        "QualityScore": 0,
        "RecipeID": 0,
        "ReviewCount": 0,
        "StarRating": 0,
        "StarRatingIMG": "string",
        "Subcategory": "string",
        "Title": "string",
        "TotalTries": 0,
        "WebURL": "string",
        "YieldNumber": 0
      }
    ],
    "VersionGuid": "string"
  },
  "since": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|list|[BigOven.Model.API.Grocery.GroceryList](#schemabigoven.model.api.grocery.grocerylist)|false|none|none|
|since|string|false|none|Gets or sets the since.|

<h2 id="tocS_API2.Controllers.WebAPI.GroceryListController.PostToGroceryListRecipeRequest">API2.Controllers.WebAPI.GroceryListController.PostToGroceryListRecipeRequest</h2>
<!-- backwards compatibility -->
<a id="schemaapi2.controllers.webapi.grocerylistcontroller.posttogrocerylistreciperequest"></a>
<a id="schema_API2.Controllers.WebAPI.GroceryListController.PostToGroceryListRecipeRequest"></a>
<a id="tocSapi2.controllers.webapi.grocerylistcontroller.posttogrocerylistreciperequest"></a>
<a id="tocsapi2.controllers.webapi.grocerylistcontroller.posttogrocerylistreciperequest"></a>

```json
{
  "department": "string",
  "name": "string",
  "notes": "string",
  "quantity": "string",
  "unit": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|department|string|false|none|Gets or sets the department.|
|name|string|false|none|Gets or sets the name.|
|notes|string|false|none|Gets or sets the notes.|
|quantity|string|false|none|Gets or sets the quantity.|
|unit|string|false|none|Gets or sets the unit.|

<h2 id="tocS_API2.Controllers.WebAPI.GroceryListController.UpdateItemByGuidRequest">API2.Controllers.WebAPI.GroceryListController.UpdateItemByGuidRequest</h2>
<!-- backwards compatibility -->
<a id="schemaapi2.controllers.webapi.grocerylistcontroller.updateitembyguidrequest"></a>
<a id="schema_API2.Controllers.WebAPI.GroceryListController.UpdateItemByGuidRequest"></a>
<a id="tocSapi2.controllers.webapi.grocerylistcontroller.updateitembyguidrequest"></a>
<a id="tocsapi2.controllers.webapi.grocerylistcontroller.updateitembyguidrequest"></a>

```json
{
  "department": "string",
  "guid": "string",
  "ischecked": true,
  "name": "string",
  "notes": "string",
  "quantity": "string",
  "unit": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|department|string|false|none|Gets or sets the department.|
|guid|string|false|none|Gets or sets the unique identifier.|
|ischecked|boolean|false|none|Gets or sets the ischecked.|
|name|string|false|none|Gets or sets the name.|
|notes|string|false|none|Gets or sets the notes.|
|quantity|string|false|none|Gets or sets the quantity.|
|unit|string|false|none|Gets or sets the unit.|

<h2 id="tocS_API2.Controllers.WebAPI.ImagesController.RecipePhotosResponse">API2.Controllers.WebAPI.ImagesController.RecipePhotosResponse</h2>
<!-- backwards compatibility -->
<a id="schemaapi2.controllers.webapi.imagescontroller.recipephotosresponse"></a>
<a id="schema_API2.Controllers.WebAPI.ImagesController.RecipePhotosResponse"></a>
<a id="tocSapi2.controllers.webapi.imagescontroller.recipephotosresponse"></a>
<a id="tocsapi2.controllers.webapi.imagescontroller.recipephotosresponse"></a>

```json
{
  "ResultCount": 0,
  "Results": [
    {
      "Caption": "string",
      "CreationDate": "string",
      "ImageID": 0,
      "IsPrimary": true,
      "MaxImageSquare": 0,
      "PhotoUrl": "string",
      "Poster": {
        "FirstName": "string",
        "LastName": "string",
        "PhotoUrl": "string",
        "UserID": 0,
        "UserName": "string"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResultCount|integer(int32)|false|none|Gets or sets the result count.|
|Results|[[BigOven.Model.API2.Photo](#schemabigoven.model.api2.photo)]|false|none|Gets or sets the results.|

<h2 id="tocS_API2.Controllers.WebAPI.MeController.EatingStyle">API2.Controllers.WebAPI.MeController.EatingStyle</h2>
<!-- backwards compatibility -->
<a id="schemaapi2.controllers.webapi.mecontroller.eatingstyle"></a>
<a id="schema_API2.Controllers.WebAPI.MeController.EatingStyle"></a>
<a id="tocSapi2.controllers.webapi.mecontroller.eatingstyle"></a>
<a id="tocsapi2.controllers.webapi.mecontroller.eatingstyle"></a>

```json
{
  "Options": [
    {
      "Description": "string",
      "Key": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Options|[[API2.Controllers.WebAPI.MeController.Option](#schemaapi2.controllers.webapi.mecontroller.option)]|false|none|Gets or sets the options.|

<h2 id="tocS_API2.Controllers.WebAPI.MeController.Option">API2.Controllers.WebAPI.MeController.Option</h2>
<!-- backwards compatibility -->
<a id="schemaapi2.controllers.webapi.mecontroller.option"></a>
<a id="schema_API2.Controllers.WebAPI.MeController.Option"></a>
<a id="tocSapi2.controllers.webapi.mecontroller.option"></a>
<a id="tocsapi2.controllers.webapi.mecontroller.option"></a>

```json
{
  "Description": "string",
  "Key": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Description|string|false|none|Gets or sets the description.|
|Key|string|false|none|Gets or sets the key.|

<h2 id="tocS_API2.Controllers.WebAPI.MeController.PreferenceOptions">API2.Controllers.WebAPI.MeController.PreferenceOptions</h2>
<!-- backwards compatibility -->
<a id="schemaapi2.controllers.webapi.mecontroller.preferenceoptions"></a>
<a id="schema_API2.Controllers.WebAPI.MeController.PreferenceOptions"></a>
<a id="tocSapi2.controllers.webapi.mecontroller.preferenceoptions"></a>
<a id="tocsapi2.controllers.webapi.mecontroller.preferenceoptions"></a>

```json
{
  "EatingStyle": {
    "Options": [
      {
        "Description": "string",
        "Key": "string"
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EatingStyle|[API2.Controllers.WebAPI.MeController.EatingStyle](#schemaapi2.controllers.webapi.mecontroller.eatingstyle)|false|none|none|

<h2 id="tocS_API2.Controllers.WebAPI.NoteController.NoteRequest">API2.Controllers.WebAPI.NoteController.NoteRequest</h2>
<!-- backwards compatibility -->
<a id="schemaapi2.controllers.webapi.notecontroller.noterequest"></a>
<a id="schema_API2.Controllers.WebAPI.NoteController.NoteRequest"></a>
<a id="tocSapi2.controllers.webapi.notecontroller.noterequest"></a>
<a id="tocsapi2.controllers.webapi.notecontroller.noterequest"></a>

```json
{
  "CreationDate": "1970-01-01T00:00:00Z",
  "Date": "1970-01-01T00:00:00Z",
  "DateDT": "string",
  "GUID": "string",
  "ID": 0,
  "Notes": "string",
  "People": "string",
  "RecipeID": 0,
  "UserID": 0,
  "Variations": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CreationDate|string(date-time)|false|none|Gets or sets the creation date.|
|Date|string(date-time)|false|none|Gets or sets the date.|
|DateDT|string|false|none|Gets or sets the date dt.|
|GUID|string|false|none|Gets or sets the unique identifier.|
|ID|integer(int32)|false|none|Gets or sets the identifier.|
|Notes|string|false|none|Gets or sets the notes.|
|People|string|false|none|Gets or sets the people.|
|RecipeID|integer(int32)|false|none|Gets or sets the recipe identifier.|
|UserID|integer(int32)|false|none|Gets or sets the user identifier.|
|Variations|string|false|none|Gets or sets the variations.|

<h2 id="tocS_API2.Controllers.WebAPI.ReviewController.PostReplyReq">API2.Controllers.WebAPI.ReviewController.PostReplyReq</h2>
<!-- backwards compatibility -->
<a id="schemaapi2.controllers.webapi.reviewcontroller.postreplyreq"></a>
<a id="schema_API2.Controllers.WebAPI.ReviewController.PostReplyReq"></a>
<a id="tocSapi2.controllers.webapi.reviewcontroller.postreplyreq"></a>
<a id="tocsapi2.controllers.webapi.reviewcontroller.postreplyreq"></a>

```json
{
  "Comment": "string"
}
```

Reply request parameters

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Comment|string|false|none|The comment. If mentioning any user(s) (optional), include them as @username in the text body. Do not use @ symbol for anything but mentioning @usernames.|

<h2 id="tocS_API2.Controllers.WebAPI.ReviewController.ReviewRequest">API2.Controllers.WebAPI.ReviewController.ReviewRequest</h2>
<!-- backwards compatibility -->
<a id="schemaapi2.controllers.webapi.reviewcontroller.reviewrequest"></a>
<a id="schema_API2.Controllers.WebAPI.ReviewController.ReviewRequest"></a>
<a id="tocSapi2.controllers.webapi.reviewcontroller.reviewrequest"></a>
<a id="tocsapi2.controllers.webapi.reviewcontroller.reviewrequest"></a>

```json
{
  "ActiveMinutes": 0,
  "Comment": "string",
  "MakeAgain": "string",
  "StarRating": 0,
  "TotalMinutes": 0
}
```

Payload for reviews

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ActiveMinutes|integer(int32)|false|none|How many minutes of ACTIVE time (i.e., actively working on the recipe, not waiting for rising, baking, etc.) did it <br>            demand of the cook? Optional.|
|Comment|string|false|none|The notes|
|MakeAgain|string|false|none|"yes" or "no"|
|StarRating|integer(int32)|false|none|1, 2, 3, 4, or 5|
|TotalMinutes|integer(int32)|false|none|How long, start to finish, in minutes (integer) did it take? Optional.|

<h2 id="tocS_API2.Controllers.WebAPI.ReviewController.ReviewRequestLegacy">API2.Controllers.WebAPI.ReviewController.ReviewRequestLegacy</h2>
<!-- backwards compatibility -->
<a id="schemaapi2.controllers.webapi.reviewcontroller.reviewrequestlegacy"></a>
<a id="schema_API2.Controllers.WebAPI.ReviewController.ReviewRequestLegacy"></a>
<a id="tocSapi2.controllers.webapi.reviewcontroller.reviewrequestlegacy"></a>
<a id="tocsapi2.controllers.webapi.reviewcontroller.reviewrequestlegacy"></a>

```json
{
  "ActiveMinutes": 0,
  "Comment": "string",
  "GUID": "string",
  "MakeAgain": "string",
  "ParentID": 0,
  "StarRating": 0,
  "TotalMinutes": 0
}
```

Legacy -- This object here is deprecated. Please use the new "ReviewRequest" structure for all future development

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ActiveMinutes|integer(int32)|false|none|none|
|Comment|string|false|none|none|
|GUID|string|false|none|none|
|MakeAgain|string|false|none|none|
|ParentID|integer(int32)|false|none|none|
|StarRating|integer(int32)|false|none|none|
|TotalMinutes|integer(int32)|false|none|none|

<h2 id="tocS_API2.GroceryListDepartmentResult">API2.GroceryListDepartmentResult</h2>
<!-- backwards compatibility -->
<a id="schemaapi2.grocerylistdepartmentresult"></a>
<a id="schema_API2.GroceryListDepartmentResult"></a>
<a id="tocSapi2.grocerylistdepartmentresult"></a>
<a id="tocsapi2.grocerylistdepartmentresult"></a>

```json
{
  "dept": "string",
  "item": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dept|string|false|none|Gets or sets the dept.|
|item|string|false|none|Gets or sets the item.|

<h2 id="tocS_API2.Models.Accounting">API2.Models.Accounting</h2>
<!-- backwards compatibility -->
<a id="schemaapi2.models.accounting"></a>
<a id="schema_API2.Models.Accounting"></a>
<a id="tocSapi2.models.accounting"></a>
<a id="tocsapi2.models.accounting"></a>

```json
{
  "CreditBalance": 0,
  "MemberSince": "1970-01-01T00:00:00Z",
  "PremiumExpiryDate": "1970-01-01T00:00:00Z",
  "UserLevel": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CreditBalance|integer(int32)|false|none|none|
|MemberSince|string(date-time)|false|none|none|
|PremiumExpiryDate|string(date-time)|false|none|none|
|UserLevel|string|false|none|none|

<h2 id="tocS_API2.Models.BigOvenUser">API2.Models.BigOvenUser</h2>
<!-- backwards compatibility -->
<a id="schemaapi2.models.bigovenuser"></a>
<a id="schema_API2.Models.BigOvenUser"></a>
<a id="tocSapi2.models.bigovenuser"></a>
<a id="tocsapi2.models.bigovenuser"></a>

```json
{
  "Accounting": {
    "CreditBalance": 0,
    "MemberSince": "1970-01-01T00:00:00Z",
    "PremiumExpiryDate": "1970-01-01T00:00:00Z",
    "UserLevel": "string"
  },
  "BOAuthToken": "string",
  "LastChangeLogID": "string",
  "Personal": {
    "Email": "string",
    "Location": {
      "City": "string",
      "Country": "string",
      "DMA": 0
    }
  },
  "Preferences": {
    "EatingStyle": "string"
  },
  "Profile": {
    "AboutMe": "string",
    "BackgroundUrl": "string",
    "Counts": {
      "AddedCount": 0,
      "FollowersCount": 0,
      "FollowingCount": 0,
      "PrivateRecipeCount": 0,
      "PublicRecipeCount": 0,
      "TotalRecipes": 0
    },
    "FirstName": "string",
    "FullName": "string",
    "HomeUrl": "string",
    "LastName": "string",
    "PhotoUrl": "string",
    "UserID": 0,
    "UserName": "string"
  }
}
```

An API2 wrapper object for a user

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Accounting|[API2.Models.Accounting](#schemaapi2.models.accounting)|false|none|none|
|BOAuthToken|string|false|none|The user-specific authentication token|
|LastChangeLogID|string|false|none|Last change log|
|Personal|[API2.Models.Personal](#schemaapi2.models.personal)|false|none|Personal level info -- email, location, etc.|
|Preferences|[API2.Models.Preference](#schemaapi2.models.preference)|false|none|none|
|Profile|[API2.Models.Profile](#schemaapi2.models.profile)|false|none|none|

<h2 id="tocS_API2.Models.Counts">API2.Models.Counts</h2>
<!-- backwards compatibility -->
<a id="schemaapi2.models.counts"></a>
<a id="schema_API2.Models.Counts"></a>
<a id="tocSapi2.models.counts"></a>
<a id="tocsapi2.models.counts"></a>

```json
{
  "AddedCount": 0,
  "FollowersCount": 0,
  "FollowingCount": 0,
  "PrivateRecipeCount": 0,
  "PublicRecipeCount": 0,
  "TotalRecipes": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AddedCount|integer(int64)|false|none|none|
|FollowersCount|integer(int64)|false|none|none|
|FollowingCount|integer(int64)|false|none|none|
|PrivateRecipeCount|integer(int64)|false|none|none|
|PublicRecipeCount|integer(int64)|false|none|none|
|TotalRecipes|integer(int64)|false|none|none|

<h2 id="tocS_API2.Models.Location">API2.Models.Location</h2>
<!-- backwards compatibility -->
<a id="schemaapi2.models.location"></a>
<a id="schema_API2.Models.Location"></a>
<a id="tocSapi2.models.location"></a>
<a id="tocsapi2.models.location"></a>

```json
{
  "City": "string",
  "Country": "string",
  "DMA": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|City|string|false|none|none|
|Country|string|false|none|none|
|DMA|integer(int32)|false|none|none|

<h2 id="tocS_API2.Models.Personal">API2.Models.Personal</h2>
<!-- backwards compatibility -->
<a id="schemaapi2.models.personal"></a>
<a id="schema_API2.Models.Personal"></a>
<a id="tocSapi2.models.personal"></a>
<a id="tocsapi2.models.personal"></a>

```json
{
  "Email": "string",
  "Location": {
    "City": "string",
    "Country": "string",
    "DMA": 0
  }
}
```

Personal level info -- email, location, etc.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Email|string|false|none|none|
|Location|[API2.Models.Location](#schemaapi2.models.location)|false|none|none|

<h2 id="tocS_API2.Models.Preference">API2.Models.Preference</h2>
<!-- backwards compatibility -->
<a id="schemaapi2.models.preference"></a>
<a id="schema_API2.Models.Preference"></a>
<a id="tocSapi2.models.preference"></a>
<a id="tocsapi2.models.preference"></a>

```json
{
  "EatingStyle": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EatingStyle|string|false|none|none|

<h2 id="tocS_API2.Models.Profile">API2.Models.Profile</h2>
<!-- backwards compatibility -->
<a id="schemaapi2.models.profile"></a>
<a id="schema_API2.Models.Profile"></a>
<a id="tocSapi2.models.profile"></a>
<a id="tocsapi2.models.profile"></a>

```json
{
  "AboutMe": "string",
  "BackgroundUrl": "string",
  "Counts": {
    "AddedCount": 0,
    "FollowersCount": 0,
    "FollowingCount": 0,
    "PrivateRecipeCount": 0,
    "PublicRecipeCount": 0,
    "TotalRecipes": 0
  },
  "FirstName": "string",
  "FullName": "string",
  "HomeUrl": "string",
  "LastName": "string",
  "PhotoUrl": "string",
  "UserID": 0,
  "UserName": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AboutMe|string|false|none|none|
|BackgroundUrl|string|false|none|none|
|Counts|[API2.Models.Counts](#schemaapi2.models.counts)|false|none|none|
|FirstName|string|false|none|none|
|FullName|string|false|none|none|
|HomeUrl|string|false|none|none|
|LastName|string|false|none|none|
|PhotoUrl|string|false|none|none|
|UserID|integer(int64)|false|none|none|
|UserName|string|false|none|none|

<h2 id="tocS_API2.Models.Recipes.FeedbackDTO">API2.Models.Recipes.FeedbackDTO</h2>
<!-- backwards compatibility -->
<a id="schemaapi2.models.recipes.feedbackdto"></a>
<a id="schema_API2.Models.Recipes.FeedbackDTO"></a>
<a id="tocSapi2.models.recipes.feedbackdto"></a>
<a id="tocsapi2.models.recipes.feedbackdto"></a>

```json
{
  "feedback": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|feedback|string|false|none|none|

<h2 id="tocS_API2.Models.Recipes.RecipeResponse">API2.Models.Recipes.RecipeResponse</h2>
<!-- backwards compatibility -->
<a id="schemaapi2.models.recipes.reciperesponse"></a>
<a id="schema_API2.Models.Recipes.RecipeResponse"></a>
<a id="tocSapi2.models.recipes.reciperesponse"></a>
<a id="tocsapi2.models.recipes.reciperesponse"></a>

```json
{
  "ActiveMinutes": 0,
  "AdTags": "string",
  "AdminBoost": 0,
  "AllCategoriesText": "string",
  "BookmarkImageURL": "string",
  "BookmarkSiteLogo": "string",
  "BookmarkURL": "string",
  "Category": "string",
  "Collection": "string",
  "CollectionID": 0,
  "CreationDate": "1970-01-01T00:00:00Z",
  "Cuisine": "string",
  "Description": "string",
  "FavoriteCount": 0,
  "ImageSquares": [
    0
  ],
  "ImageURL": "string",
  "Ingredients": [
    {
      "DisplayIndex": 0,
      "DisplayQuantity": "string",
      "HTMLName": "string",
      "IngredientID": 0,
      "IngredientInfo": {
        "Department": "string",
        "MasterIngredientID": 0,
        "Name": "string",
        "UsuallyOnHand": true
      },
      "IsHeading": true,
      "IsLinked": true,
      "MetricDisplayQuantity": "string",
      "MetricQuantity": 0,
      "MetricUnit": "string",
      "Name": "string",
      "PreparationNotes": "string",
      "Quantity": 0,
      "Unit": "string"
    }
  ],
  "IngredientsTextBlock": "string",
  "Instructions": "string",
  "IsBookmark": true,
  "IsPrivate": true,
  "IsRecipeScan": true,
  "IsSponsored": true,
  "LastModified": "1970-01-01T00:00:00Z",
  "MaxImageSquare": 0,
  "MedalCount": 0,
  "MenuCount": 0,
  "Microcategory": "string",
  "NotesCount": 0,
  "NutritionInfo": {
    "CaloriesFromFat": 0,
    "Cholesterol": 0,
    "CholesterolPct": 0,
    "DietaryFiber": 0,
    "DietaryFiberPct": 0,
    "MonoFat": 0,
    "PolyFat": 0,
    "Potassium": 0,
    "PotassiumPct": 0,
    "Protein": 0,
    "ProteinPct": 0,
    "SatFat": 0,
    "SatFatPct": 0,
    "SingularYieldUnit": "string",
    "Sodium": 0,
    "SodiumPct": 0,
    "Sugar": 0,
    "TotalCalories": 0,
    "TotalCarbs": 0,
    "TotalCarbsPct": 0,
    "TotalFat": 0,
    "TotalFatPct": 0,
    "TransFat": 0
  },
  "PhotoUrl": "string",
  "Poster": {
    "FirstName": "string",
    "ImageUrl48": "string",
    "IsKitchenHelper": true,
    "IsPremium": true,
    "IsUsingRecurly": true,
    "LastName": "string",
    "MemberSince": "1970-01-01T00:00:00Z",
    "PhotoUrl": "string",
    "PhotoUrl48": "string",
    "PremiumExpiryDate": "1970-01-01T00:00:00Z",
    "UserID": 0,
    "UserName": "string",
    "WebUrl": "string"
  },
  "PrimaryIngredient": "string",
  "RecipeID": 0,
  "ReviewCount": 0,
  "StarRating": 0,
  "Steps": [
    {
      "EndGantt": 0,
      "StartGantt": 0,
      "Text": "string"
    }
  ],
  "Subcategory": "string",
  "Title": "string",
  "TotalMinutes": 0,
  "VariantOfRecipeID": 0,
  "VerifiedByClass": "string",
  "VerifiedDateTime": "1970-01-01T00:00:00Z",
  "Videos": [
    {
      "InsertedOn": "1970-01-01T00:00:00Z",
      "IsPrimaryVideo": true,
      "MediaId": "string",
      "VidId": 0
    }
  ],
  "WebURL": "string",
  "YieldNumber": 0,
  "YieldUnit": "string"
}
```

DTO used to return a recipe with videos

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ActiveMinutes|integer(int32)|false|none|none|
|AdTags|string|false|none|none|
|AdminBoost|integer(int32)|false|none|none|
|AllCategoriesText|string|false|none|none|
|BookmarkImageURL|string|false|none|none|
|BookmarkSiteLogo|string|false|none|none|
|BookmarkURL|string|false|none|none|
|Category|string|false|none|none|
|Collection|string|false|none|none|
|CollectionID|integer(int32)|false|none|none|
|CreationDate|string(date-time)|false|none|none|
|Cuisine|string|false|none|none|
|Description|string|false|none|none|
|FavoriteCount|integer(int32)|false|none|none|
|ImageSquares|[integer(int32)]|false|none|none|
|ImageURL|string|false|none|none|
|Ingredients|[[BigOven.Model.API.Ingredient](#schemabigoven.model.api.ingredient)]|false|none|none|
|IngredientsTextBlock|string|false|none|none|
|Instructions|string|false|none|none|
|IsBookmark|boolean|false|none|none|
|IsPrivate|boolean|false|none|none|
|IsRecipeScan|boolean|false|none|none|
|IsSponsored|boolean|false|none|none|
|LastModified|string(date-time)|false|none|none|
|MaxImageSquare|integer(int32)|false|none|none|
|MedalCount|integer(int32)|false|none|none|
|MenuCount|integer(int32)|false|none|none|
|Microcategory|string|false|none|none|
|NotesCount|integer(int32)|false|none|none|
|NutritionInfo|[BigOven.Model.API.NutritionInfo](#schemabigoven.model.api.nutritioninfo)|false|none|none|
|PhotoUrl|string|false|none|none|
|Poster|[BigOven.Model.API.UserInfo](#schemabigoven.model.api.userinfo)|false|none|none|
|PrimaryIngredient|string|false|none|none|
|RecipeID|integer(int32)|false|none|none|
|ReviewCount|integer(int32)|false|none|none|
|StarRating|number(double)|false|none|none|
|Steps|[[BigOven.Model.InstructionStep](#schemabigoven.model.instructionstep)]|false|none|none|
|Subcategory|string|false|none|none|
|Title|string|false|none|none|
|TotalMinutes|integer(int32)|false|none|none|
|VariantOfRecipeID|integer(int32)|false|none|none|
|VerifiedByClass|string|false|none|none|
|VerifiedDateTime|string(date-time)|false|none|none|
|Videos|[[API2.Models.Recipes.RecipeVideoResponse](#schemaapi2.models.recipes.recipevideoresponse)]|false|none|Gets or sets the recipe videos, i.e. a list of type {API2.Models.Recipes.RecipeVideoResponse}|
|WebURL|string|false|none|none|
|YieldNumber|number(double)|false|none|none|
|YieldUnit|string|false|none|none|

<h2 id="tocS_API2.Models.Recipes.RecipeVideoResponse">API2.Models.Recipes.RecipeVideoResponse</h2>
<!-- backwards compatibility -->
<a id="schemaapi2.models.recipes.recipevideoresponse"></a>
<a id="schema_API2.Models.Recipes.RecipeVideoResponse"></a>
<a id="tocSapi2.models.recipes.recipevideoresponse"></a>
<a id="tocsapi2.models.recipes.recipevideoresponse"></a>

```json
{
  "InsertedOn": "1970-01-01T00:00:00Z",
  "IsPrimaryVideo": true,
  "MediaId": "string",
  "VidId": 0
}
```

DTO used to return the details of a recipe video

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InsertedOn|string(date-time)|false|none|Gets or sets the date the video was added.|
|IsPrimaryVideo|boolean|false|none|Gets or sets a value indicating whether the video is the primary video of the recipe.|
|MediaId|string|false|none|Gets or sets the JWPlayer media id.|
|VidId|integer(int32)|false|none|Gets or sets the video id.|

<h2 id="tocS_API2.Result">API2.Result</h2>
<!-- backwards compatibility -->
<a id="schemaapi2.result"></a>
<a id="schema_API2.Result"></a>
<a id="tocSapi2.result"></a>
<a id="tocsapi2.result"></a>

```json
{
  "Data": {},
  "Message": "string",
  "StatusCode": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Data|[System.Object](#schemasystem.object)|false|none|none|
|Message|string|false|none|none|
|StatusCode|integer(int32)|false|none|none|

<h2 id="tocS_BigOven.Model.API.Grocery.GroceryList">BigOven.Model.API.Grocery.GroceryList</h2>
<!-- backwards compatibility -->
<a id="schemabigoven.model.api.grocery.grocerylist"></a>
<a id="schema_BigOven.Model.API.Grocery.GroceryList"></a>
<a id="tocSbigoven.model.api.grocery.grocerylist"></a>
<a id="tocsbigoven.model.api.grocery.grocerylist"></a>

```json
{
  "Items": [
    {
      "BigOvenObject": "string",
      "CreationDate": "1970-01-01T00:00:00Z",
      "Department": "string",
      "DisplayQuantity": "string",
      "GUID": "string",
      "IsChecked": true,
      "ItemID": 0,
      "LastModified": "1970-01-01T00:00:00Z",
      "LocalStatus": "string",
      "Name": "string",
      "Notes": "string",
      "RecipeID": 0,
      "ThirdPartyURL": "string"
    }
  ],
  "LastModified": "1970-01-01T00:00:00Z",
  "Recipes": [
    {
      "BookmarkURL": "string",
      "Category": "string",
      "CreationDate": "1970-01-01T00:00:00Z",
      "Cuisine": "string",
      "HasVideos": true,
      "HeroPhotoUrl": "string",
      "HideFromPublicSearch": true,
      "ImageURL": "string",
      "ImageURL120": "string",
      "IsBookmark": true,
      "IsPrivate": true,
      "MaxImageSquare": 0,
      "Microcategory": "string",
      "Poster": {
        "FirstName": "string",
        "ImageUrl48": "string",
        "IsKitchenHelper": true,
        "IsPremium": true,
        "IsUsingRecurly": true,
        "LastName": "string",
        "MemberSince": "1970-01-01T00:00:00Z",
        "PhotoUrl": "string",
        "PhotoUrl48": "string",
        "PremiumExpiryDate": "1970-01-01T00:00:00Z",
        "UserID": 0,
        "UserName": "string",
        "WebUrl": "string"
      },
      "QualityScore": 0,
      "RecipeID": 0,
      "ReviewCount": 0,
      "StarRating": 0,
      "StarRatingIMG": "string",
      "Subcategory": "string",
      "Title": "string",
      "TotalTries": 0,
      "WebURL": "string",
      "YieldNumber": 0
    }
  ],
  "VersionGuid": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Items|[[BigOven.Model.API.Grocery.Item](#schemabigoven.model.api.grocery.item)]|false|none|none|
|LastModified|string(date-time)|false|none|none|
|Recipes|[[BigOven.Model.API.RecipeInfo](#schemabigoven.model.api.recipeinfo)]|false|none|none|
|VersionGuid|string|false|none|none|

<h2 id="tocS_BigOven.Model.API.Grocery.Item">BigOven.Model.API.Grocery.Item</h2>
<!-- backwards compatibility -->
<a id="schemabigoven.model.api.grocery.item"></a>
<a id="schema_BigOven.Model.API.Grocery.Item"></a>
<a id="tocSbigoven.model.api.grocery.item"></a>
<a id="tocsbigoven.model.api.grocery.item"></a>

```json
{
  "BigOvenObject": "string",
  "CreationDate": "1970-01-01T00:00:00Z",
  "Department": "string",
  "DisplayQuantity": "string",
  "GUID": "string",
  "IsChecked": true,
  "ItemID": 0,
  "LastModified": "1970-01-01T00:00:00Z",
  "LocalStatus": "string",
  "Name": "string",
  "Notes": "string",
  "RecipeID": 0,
  "ThirdPartyURL": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BigOvenObject|string|false|none|none|
|CreationDate|string(date-time)|false|none|none|
|Department|string|false|none|none|
|DisplayQuantity|string|false|none|none|
|GUID|string|false|none|none|
|IsChecked|boolean|false|none|none|
|ItemID|integer(int64)|false|none|none|
|LastModified|string(date-time)|false|none|none|
|LocalStatus|string|false|none|none|
|Name|string|false|none|none|
|Notes|string|false|none|none|
|RecipeID|integer(int32)|false|none|none|
|ThirdPartyURL|string|false|none|none|

<h2 id="tocS_BigOven.Model.API.Image">BigOven.Model.API.Image</h2>
<!-- backwards compatibility -->
<a id="schemabigoven.model.api.image"></a>
<a id="schema_BigOven.Model.API.Image"></a>
<a id="tocSbigoven.model.api.image"></a>
<a id="tocsbigoven.model.api.image"></a>

```json
{
  "Caption": "string",
  "CreationDate": "string",
  "ImageID": 0,
  "ImageSquares": [
    0
  ],
  "ImageURL": "string",
  "ImageURL120": "string",
  "ImageURL128": "string",
  "ImageURL200": "string",
  "ImageURL256": "string",
  "ImageURL48": "string",
  "ImageURL64": "string",
  "IsPrimary": true,
  "MaxImageSquare": 0,
  "Poster": {
    "FirstName": "string",
    "ImageUrl48": "string",
    "IsKitchenHelper": true,
    "IsPremium": true,
    "IsUsingRecurly": true,
    "LastName": "string",
    "MemberSince": "1970-01-01T00:00:00Z",
    "PhotoUrl": "string",
    "PhotoUrl48": "string",
    "PremiumExpiryDate": "1970-01-01T00:00:00Z",
    "UserID": 0,
    "UserName": "string",
    "WebUrl": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Caption|string|false|none|none|
|CreationDate|string|false|none|none|
|ImageID|integer(int64)|false|none|none|
|ImageSquares|[integer(int32)]|false|none|none|
|ImageURL|string|false|none|none|
|ImageURL120|string|false|none|none|
|ImageURL128|string|false|none|none|
|ImageURL200|string|false|none|none|
|ImageURL256|string|false|none|none|
|ImageURL48|string|false|none|none|
|ImageURL64|string|false|none|none|
|IsPrimary|boolean|false|none|none|
|MaxImageSquare|integer(int32)|false|none|none|
|Poster|[BigOven.Model.API.UserInfo](#schemabigoven.model.api.userinfo)|false|none|none|

<h2 id="tocS_BigOven.Model.API.Ingredient">BigOven.Model.API.Ingredient</h2>
<!-- backwards compatibility -->
<a id="schemabigoven.model.api.ingredient"></a>
<a id="schema_BigOven.Model.API.Ingredient"></a>
<a id="tocSbigoven.model.api.ingredient"></a>
<a id="tocsbigoven.model.api.ingredient"></a>

```json
{
  "DisplayIndex": 0,
  "DisplayQuantity": "string",
  "HTMLName": "string",
  "IngredientID": 0,
  "IngredientInfo": {
    "Department": "string",
    "MasterIngredientID": 0,
    "Name": "string",
    "UsuallyOnHand": true
  },
  "IsHeading": true,
  "IsLinked": true,
  "MetricDisplayQuantity": "string",
  "MetricQuantity": 0,
  "MetricUnit": "string",
  "Name": "string",
  "PreparationNotes": "string",
  "Quantity": 0,
  "Unit": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DisplayIndex|integer(int32)|false|none|none|
|DisplayQuantity|string|false|none|none|
|HTMLName|string|false|none|none|
|IngredientID|integer(int64)|false|none|none|
|IngredientInfo|[BigOven.Model.API.IngredientInfo](#schemabigoven.model.api.ingredientinfo)|false|none|none|
|IsHeading|boolean|false|none|none|
|IsLinked|boolean|false|none|none|
|MetricDisplayQuantity|string|false|none|none|
|MetricQuantity|number(double)|false|none|none|
|MetricUnit|string|false|none|none|
|Name|string|false|none|none|
|PreparationNotes|string|false|none|none|
|Quantity|number(double)|false|none|none|
|Unit|string|false|none|none|

<h2 id="tocS_BigOven.Model.API.IngredientInfo">BigOven.Model.API.IngredientInfo</h2>
<!-- backwards compatibility -->
<a id="schemabigoven.model.api.ingredientinfo"></a>
<a id="schema_BigOven.Model.API.IngredientInfo"></a>
<a id="tocSbigoven.model.api.ingredientinfo"></a>
<a id="tocsbigoven.model.api.ingredientinfo"></a>

```json
{
  "Department": "string",
  "MasterIngredientID": 0,
  "Name": "string",
  "UsuallyOnHand": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Department|string|false|none|none|
|MasterIngredientID|integer(int32)|false|none|none|
|Name|string|false|none|none|
|UsuallyOnHand|boolean|false|none|none|

<h2 id="tocS_BigOven.Model.API.NutritionInfo">BigOven.Model.API.NutritionInfo</h2>
<!-- backwards compatibility -->
<a id="schemabigoven.model.api.nutritioninfo"></a>
<a id="schema_BigOven.Model.API.NutritionInfo"></a>
<a id="tocSbigoven.model.api.nutritioninfo"></a>
<a id="tocsbigoven.model.api.nutritioninfo"></a>

```json
{
  "CaloriesFromFat": 0,
  "Cholesterol": 0,
  "CholesterolPct": 0,
  "DietaryFiber": 0,
  "DietaryFiberPct": 0,
  "MonoFat": 0,
  "PolyFat": 0,
  "Potassium": 0,
  "PotassiumPct": 0,
  "Protein": 0,
  "ProteinPct": 0,
  "SatFat": 0,
  "SatFatPct": 0,
  "SingularYieldUnit": "string",
  "Sodium": 0,
  "SodiumPct": 0,
  "Sugar": 0,
  "TotalCalories": 0,
  "TotalCarbs": 0,
  "TotalCarbsPct": 0,
  "TotalFat": 0,
  "TotalFatPct": 0,
  "TransFat": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CaloriesFromFat|number(double)|false|none|none|
|Cholesterol|number(double)|false|none|none|
|CholesterolPct|number(double)|false|none|none|
|DietaryFiber|number(double)|false|none|none|
|DietaryFiberPct|number(double)|false|none|none|
|MonoFat|number(double)|false|none|none|
|PolyFat|number(double)|false|none|none|
|Potassium|number(double)|false|none|none|
|PotassiumPct|number(double)|false|none|none|
|Protein|number(double)|false|none|none|
|ProteinPct|number(double)|false|none|none|
|SatFat|number(double)|false|none|none|
|SatFatPct|number(double)|false|none|none|
|SingularYieldUnit|string|false|none|none|
|Sodium|number(double)|false|none|none|
|SodiumPct|number(double)|false|none|none|
|Sugar|number(double)|false|none|none|
|TotalCalories|number(double)|false|none|none|
|TotalCarbs|number(double)|false|none|none|
|TotalCarbsPct|number(double)|false|none|none|
|TotalFat|number(double)|false|none|none|
|TotalFatPct|number(double)|false|none|none|
|TransFat|number(double)|false|none|none|

<h2 id="tocS_BigOven.Model.API.Recipe">BigOven.Model.API.Recipe</h2>
<!-- backwards compatibility -->
<a id="schemabigoven.model.api.recipe"></a>
<a id="schema_BigOven.Model.API.Recipe"></a>
<a id="tocSbigoven.model.api.recipe"></a>
<a id="tocsbigoven.model.api.recipe"></a>

```json
{
  "ActiveMinutes": 0,
  "AdTags": "string",
  "AdminBoost": 0,
  "AllCategoriesText": "string",
  "BookmarkImageURL": "string",
  "BookmarkSiteLogo": "string",
  "BookmarkURL": "string",
  "Category": "string",
  "Collection": "string",
  "CollectionID": 0,
  "CreationDate": "1970-01-01T00:00:00Z",
  "Cuisine": "string",
  "Description": "string",
  "FavoriteCount": 0,
  "HeroPhotoUrl": "string",
  "ImageSquares": [
    0
  ],
  "ImageURL": "string",
  "Ingredients": [
    {
      "DisplayIndex": 0,
      "DisplayQuantity": "string",
      "HTMLName": "string",
      "IngredientID": 0,
      "IngredientInfo": {
        "Department": "string",
        "MasterIngredientID": 0,
        "Name": "string",
        "UsuallyOnHand": true
      },
      "IsHeading": true,
      "IsLinked": true,
      "MetricDisplayQuantity": "string",
      "MetricQuantity": 0,
      "MetricUnit": "string",
      "Name": "string",
      "PreparationNotes": "string",
      "Quantity": 0,
      "Unit": "string"
    }
  ],
  "IngredientsTextBlock": "string",
  "Instructions": "string",
  "IsBookmark": true,
  "IsPrivate": true,
  "IsRecipeScan": true,
  "IsSponsored": true,
  "LastModified": "1970-01-01T00:00:00Z",
  "MaxImageSquare": 0,
  "MedalCount": 0,
  "MenuCount": 0,
  "Microcategory": "string",
  "NotesCount": 0,
  "NutritionInfo": {
    "CaloriesFromFat": 0,
    "Cholesterol": 0,
    "CholesterolPct": 0,
    "DietaryFiber": 0,
    "DietaryFiberPct": 0,
    "MonoFat": 0,
    "PolyFat": 0,
    "Potassium": 0,
    "PotassiumPct": 0,
    "Protein": 0,
    "ProteinPct": 0,
    "SatFat": 0,
    "SatFatPct": 0,
    "SingularYieldUnit": "string",
    "Sodium": 0,
    "SodiumPct": 0,
    "Sugar": 0,
    "TotalCalories": 0,
    "TotalCarbs": 0,
    "TotalCarbsPct": 0,
    "TotalFat": 0,
    "TotalFatPct": 0,
    "TransFat": 0
  },
  "Poster": {
    "FirstName": "string",
    "ImageUrl48": "string",
    "IsKitchenHelper": true,
    "IsPremium": true,
    "IsUsingRecurly": true,
    "LastName": "string",
    "MemberSince": "1970-01-01T00:00:00Z",
    "PhotoUrl": "string",
    "PhotoUrl48": "string",
    "PremiumExpiryDate": "1970-01-01T00:00:00Z",
    "UserID": 0,
    "UserName": "string",
    "WebUrl": "string"
  },
  "PrimaryIngredient": "string",
  "RecipeID": 0,
  "ReviewCount": 0,
  "StarRating": 0,
  "Subcategory": "string",
  "Title": "string",
  "TotalMinutes": 0,
  "VariantOfRecipeID": 0,
  "VerifiedByClass": "string",
  "VerifiedDateTime": "1970-01-01T00:00:00Z",
  "WebURL": "string",
  "YieldNumber": 0,
  "YieldUnit": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ActiveMinutes|integer(int32)|false|none|none|
|AdTags|string|false|none|none|
|AdminBoost|integer(int32)|false|none|none|
|AllCategoriesText|string|false|none|none|
|BookmarkImageURL|string|false|none|none|
|BookmarkSiteLogo|string|false|none|none|
|BookmarkURL|string|false|none|none|
|Category|string|false|none|none|
|Collection|string|false|none|none|
|CollectionID|integer(int32)|false|none|none|
|CreationDate|string(date-time)|false|none|none|
|Cuisine|string|false|none|none|
|Description|string|false|none|none|
|FavoriteCount|integer(int32)|false|none|none|
|HeroPhotoUrl|string|false|none|none|
|ImageSquares|[integer(int32)]|false|none|none|
|ImageURL|string|false|none|none|
|Ingredients|[[BigOven.Model.API.Ingredient](#schemabigoven.model.api.ingredient)]|false|none|none|
|IngredientsTextBlock|string|false|none|none|
|Instructions|string|false|none|none|
|IsBookmark|boolean|false|none|none|
|IsPrivate|boolean|false|none|none|
|IsRecipeScan|boolean|false|none|none|
|IsSponsored|boolean|false|none|none|
|LastModified|string(date-time)|false|none|none|
|MaxImageSquare|integer(int32)|false|none|none|
|MedalCount|integer(int32)|false|none|none|
|MenuCount|integer(int32)|false|none|none|
|Microcategory|string|false|none|none|
|NotesCount|integer(int32)|false|none|none|
|NutritionInfo|[BigOven.Model.API.NutritionInfo](#schemabigoven.model.api.nutritioninfo)|false|none|none|
|Poster|[BigOven.Model.API.UserInfo](#schemabigoven.model.api.userinfo)|false|none|none|
|PrimaryIngredient|string|false|none|none|
|RecipeID|integer(int32)|false|none|none|
|ReviewCount|integer(int32)|false|none|none|
|StarRating|number(double)|false|none|none|
|Subcategory|string|false|none|none|
|Title|string|false|none|none|
|TotalMinutes|integer(int32)|false|none|none|
|VariantOfRecipeID|integer(int32)|false|none|none|
|VerifiedByClass|string|false|none|none|
|VerifiedDateTime|string(date-time)|false|none|none|
|WebURL|string|false|none|none|
|YieldNumber|number(double)|false|none|none|
|YieldUnit|string|false|none|none|

<h2 id="tocS_BigOven.Model.API.RecipeInfo">BigOven.Model.API.RecipeInfo</h2>
<!-- backwards compatibility -->
<a id="schemabigoven.model.api.recipeinfo"></a>
<a id="schema_BigOven.Model.API.RecipeInfo"></a>
<a id="tocSbigoven.model.api.recipeinfo"></a>
<a id="tocsbigoven.model.api.recipeinfo"></a>

```json
{
  "BookmarkURL": "string",
  "Category": "string",
  "CreationDate": "1970-01-01T00:00:00Z",
  "Cuisine": "string",
  "HasVideos": true,
  "HeroPhotoUrl": "string",
  "HideFromPublicSearch": true,
  "ImageURL": "string",
  "ImageURL120": "string",
  "IsBookmark": true,
  "IsPrivate": true,
  "MaxImageSquare": 0,
  "Microcategory": "string",
  "Poster": {
    "FirstName": "string",
    "ImageUrl48": "string",
    "IsKitchenHelper": true,
    "IsPremium": true,
    "IsUsingRecurly": true,
    "LastName": "string",
    "MemberSince": "1970-01-01T00:00:00Z",
    "PhotoUrl": "string",
    "PhotoUrl48": "string",
    "PremiumExpiryDate": "1970-01-01T00:00:00Z",
    "UserID": 0,
    "UserName": "string",
    "WebUrl": "string"
  },
  "QualityScore": 0,
  "RecipeID": 0,
  "ReviewCount": 0,
  "StarRating": 0,
  "StarRatingIMG": "string",
  "Subcategory": "string",
  "Title": "string",
  "TotalTries": 0,
  "WebURL": "string",
  "YieldNumber": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BookmarkURL|string|false|none|none|
|Category|string|false|none|none|
|CreationDate|string(date-time)|false|none|none|
|Cuisine|string|false|none|none|
|HasVideos|boolean|false|none|none|
|HeroPhotoUrl|string|false|none|none|
|HideFromPublicSearch|boolean|false|none|none|
|ImageURL|string|false|none|none|
|ImageURL120|string|false|none|none|
|IsBookmark|boolean|false|none|none|
|IsPrivate|boolean|false|none|none|
|MaxImageSquare|integer(int32)|false|none|none|
|Microcategory|string|false|none|none|
|Poster|[BigOven.Model.API.UserInfo](#schemabigoven.model.api.userinfo)|false|none|none|
|QualityScore|number(double)|false|none|none|
|RecipeID|integer(int32)|false|none|none|
|ReviewCount|integer(int32)|false|none|none|
|StarRating|number(double)|false|none|none|
|StarRatingIMG|string|false|none|none|
|Subcategory|string|false|none|none|
|Title|string|false|none|none|
|TotalTries|integer(int32)|false|none|none|
|WebURL|string|false|none|none|
|YieldNumber|number(double)|false|none|none|

<h2 id="tocS_BigOven.Model.API.RecipeNote">BigOven.Model.API.RecipeNote</h2>
<!-- backwards compatibility -->
<a id="schemabigoven.model.api.recipenote"></a>
<a id="schema_BigOven.Model.API.RecipeNote"></a>
<a id="tocSbigoven.model.api.recipenote"></a>
<a id="tocsbigoven.model.api.recipenote"></a>

```json
{
  "CreationDate": "1970-01-01T00:00:00Z",
  "Date": "string",
  "DateDT": "1970-01-01T00:00:00Z",
  "GUID": "string",
  "ID": 0,
  "Notes": "string",
  "People": "string",
  "RecipeID": 0,
  "UserID": 0,
  "Variations": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CreationDate|string(date-time)|false|none|none|
|Date|string|false|none|none|
|DateDT|string(date-time)|false|none|none|
|GUID|string|false|none|none|
|ID|integer(int32)|false|none|none|
|Notes|string|false|none|none|
|People|string|false|none|none|
|RecipeID|integer(int32)|false|none|none|
|UserID|integer(int32)|false|none|none|
|Variations|string|false|none|none|

<h2 id="tocS_BigOven.Model.API.RecipeNoteList">BigOven.Model.API.RecipeNoteList</h2>
<!-- backwards compatibility -->
<a id="schemabigoven.model.api.recipenotelist"></a>
<a id="schema_BigOven.Model.API.RecipeNoteList"></a>
<a id="tocSbigoven.model.api.recipenotelist"></a>
<a id="tocsbigoven.model.api.recipenotelist"></a>

```json
{
  "ResultCount": 0,
  "Results": [
    {
      "CreationDate": "1970-01-01T00:00:00Z",
      "Date": "string",
      "DateDT": "1970-01-01T00:00:00Z",
      "GUID": "string",
      "ID": 0,
      "Notes": "string",
      "People": "string",
      "RecipeID": 0,
      "UserID": 0,
      "Variations": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResultCount|integer(int32)|false|none|none|
|Results|[[BigOven.Model.API.RecipeNote](#schemabigoven.model.api.recipenote)]|false|none|none|

<h2 id="tocS_BigOven.Model.API.Reply">BigOven.Model.API.Reply</h2>
<!-- backwards compatibility -->
<a id="schemabigoven.model.api.reply"></a>
<a id="schema_BigOven.Model.API.Reply"></a>
<a id="tocSbigoven.model.api.reply"></a>
<a id="tocsbigoven.model.api.reply"></a>

```json
{
  "Comment": "string",
  "CreationDate": "1970-01-01T00:00:00Z",
  "ID": "string",
  "LastModified": "1970-01-01T00:00:00Z",
  "Poster": {
    "FirstName": "string",
    "LastName": "string",
    "PhotoUrl": "string",
    "UserID": 0,
    "UserName": "string"
  },
  "ReviewID": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Comment|string|false|none|none|
|CreationDate|string(date-time)|false|none|none|
|ID|string|false|none|none|
|LastModified|string(date-time)|false|none|none|
|Poster|[BigOven.Model.API.UserInfoTiny](#schemabigoven.model.api.userinfotiny)|false|none|none|
|ReviewID|string|false|none|none|

<h2 id="tocS_BigOven.Model.API.Review">BigOven.Model.API.Review</h2>
<!-- backwards compatibility -->
<a id="schemabigoven.model.api.review"></a>
<a id="schema_BigOven.Model.API.Review"></a>
<a id="tocSbigoven.model.api.review"></a>
<a id="tocsbigoven.model.api.review"></a>

```json
{
  "ActiveMinutes": 0,
  "Comment": "string",
  "CreationDate": "1970-01-01T00:00:00Z",
  "FeaturedReply": {
    "Comment": "string",
    "CreationDate": "1970-01-01T00:00:00Z",
    "ID": "string",
    "LastModified": "1970-01-01T00:00:00Z",
    "Poster": {
      "FirstName": "string",
      "LastName": "string",
      "PhotoUrl": "string",
      "UserID": 0,
      "UserName": "string"
    },
    "ReviewID": "string"
  },
  "GUID": "string",
  "ID": "string",
  "LastModified": "1970-01-01T00:00:00Z",
  "ParentID": 0,
  "Poster": {
    "FirstName": "string",
    "ImageUrl48": "string",
    "IsKitchenHelper": true,
    "IsPremium": true,
    "IsUsingRecurly": true,
    "LastName": "string",
    "MemberSince": "1970-01-01T00:00:00Z",
    "PhotoUrl": "string",
    "PhotoUrl48": "string",
    "PremiumExpiryDate": "1970-01-01T00:00:00Z",
    "UserID": 0,
    "UserName": "string",
    "WebUrl": "string"
  },
  "Replies": [
    {
      "ActiveMinutes": 0,
      "Comment": "string",
      "CreationDate": "1970-01-01T00:00:00Z",
      "FeaturedReply": {
        "Comment": "string",
        "CreationDate": "1970-01-01T00:00:00Z",
        "ID": "string",
        "LastModified": "1970-01-01T00:00:00Z",
        "Poster": {
          "FirstName": "string",
          "LastName": "string",
          "PhotoUrl": "string",
          "UserID": 0,
          "UserName": "string"
        },
        "ReviewID": "string"
      },
      "GUID": "string",
      "ID": "string",
      "LastModified": "1970-01-01T00:00:00Z",
      "ParentID": 0,
      "Poster": {
        "FirstName": "string",
        "ImageUrl48": "string",
        "IsKitchenHelper": true,
        "IsPremium": true,
        "IsUsingRecurly": true,
        "LastName": "string",
        "MemberSince": "1970-01-01T00:00:00Z",
        "PhotoUrl": "string",
        "PhotoUrl48": "string",
        "PremiumExpiryDate": "1970-01-01T00:00:00Z",
        "UserID": 0,
        "UserName": "string",
        "WebUrl": "string"
      },
      "Replies": [
        {}
      ],
      "ReplyCount": 0,
      "ReviewID": 0,
      "StarRating": 0,
      "TotalMinutes": 0
    }
  ],
  "ReplyCount": 0,
  "ReviewID": 0,
  "StarRating": 0,
  "TotalMinutes": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ActiveMinutes|integer(int32)|false|none|none|
|Comment|string|false|none|none|
|CreationDate|string(date-time)|false|none|none|
|FeaturedReply|[BigOven.Model.API.Reply](#schemabigoven.model.api.reply)|false|none|none|
|GUID|string|false|none|none|
|ID|string|false|none|none|
|LastModified|string(date-time)|false|none|none|
|ParentID|integer(int64)|false|none|none|
|Poster|[BigOven.Model.API.UserInfo](#schemabigoven.model.api.userinfo)|false|none|none|
|Replies|[[BigOven.Model.API.Review](#schemabigoven.model.api.review)]|false|none|none|
|ReplyCount|integer(int32)|false|none|none|
|ReviewID|integer(int64)|false|none|none|
|StarRating|number(double)|false|none|none|
|TotalMinutes|integer(int32)|false|none|none|

<h2 id="tocS_BigOven.Model.API.UserInfo">BigOven.Model.API.UserInfo</h2>
<!-- backwards compatibility -->
<a id="schemabigoven.model.api.userinfo"></a>
<a id="schema_BigOven.Model.API.UserInfo"></a>
<a id="tocSbigoven.model.api.userinfo"></a>
<a id="tocsbigoven.model.api.userinfo"></a>

```json
{
  "FirstName": "string",
  "ImageUrl48": "string",
  "IsKitchenHelper": true,
  "IsPremium": true,
  "IsUsingRecurly": true,
  "LastName": "string",
  "MemberSince": "1970-01-01T00:00:00Z",
  "PhotoUrl": "string",
  "PhotoUrl48": "string",
  "PremiumExpiryDate": "1970-01-01T00:00:00Z",
  "UserID": 0,
  "UserName": "string",
  "WebUrl": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FirstName|string|false|none|none|
|ImageUrl48|string|false|none|none|
|IsKitchenHelper|boolean|false|none|none|
|IsPremium|boolean|false|none|none|
|IsUsingRecurly|boolean|false|none|none|
|LastName|string|false|none|none|
|MemberSince|string(date-time)|false|none|none|
|PhotoUrl|string|false|none|none|
|PhotoUrl48|string|false|read-only|none|
|PremiumExpiryDate|string(date-time)|false|none|none|
|UserID|integer(int32)|false|none|none|
|UserName|string|false|none|none|
|WebUrl|string|false|read-only|none|

<h2 id="tocS_BigOven.Model.API.UserInfoTiny">BigOven.Model.API.UserInfoTiny</h2>
<!-- backwards compatibility -->
<a id="schemabigoven.model.api.userinfotiny"></a>
<a id="schema_BigOven.Model.API.UserInfoTiny"></a>
<a id="tocSbigoven.model.api.userinfotiny"></a>
<a id="tocsbigoven.model.api.userinfotiny"></a>

```json
{
  "FirstName": "string",
  "LastName": "string",
  "PhotoUrl": "string",
  "UserID": 0,
  "UserName": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FirstName|string|false|none|none|
|LastName|string|false|none|none|
|PhotoUrl|string|false|none|none|
|UserID|integer(int32)|false|none|none|
|UserName|string|false|none|none|

<h2 id="tocS_BigOven.Model.API2.CollectionInfo">BigOven.Model.API2.CollectionInfo</h2>
<!-- backwards compatibility -->
<a id="schemabigoven.model.api2.collectioninfo"></a>
<a id="schema_BigOven.Model.API2.CollectionInfo"></a>
<a id="tocSbigoven.model.api2.collectioninfo"></a>
<a id="tocsbigoven.model.api2.collectioninfo"></a>

```json
{
  "Description": "string",
  "ID": 0,
  "IsFiltered": true,
  "IsSponsored": true,
  "MobileUrl": "string",
  "PRO": true,
  "PhotoUrl": "string",
  "Results": [
    {
      "Category": "string",
      "CreationDate": "1970-01-01T00:00:00Z",
      "Cuisine": "string",
      "HasVideos": true,
      "IsBookmark": true,
      "IsPrivate": true,
      "IsRecipeScan": true,
      "Microcategory": "string",
      "PhotoUrl": "string",
      "Poster": {
        "FirstName": "string",
        "LastName": "string",
        "PhotoUrl": "string",
        "UserID": 0,
        "UserName": "string"
      },
      "RecipeID": 0,
      "ReviewCount": 0,
      "Servings": 0,
      "StarRating": 0,
      "Subcategory": "string",
      "Title": "string",
      "TotalTries": 0,
      "WebURL": "string"
    }
  ],
  "Title": "string",
  "Token": "string",
  "WebUrl": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Description|string|false|none|none|
|ID|integer(int32)|false|none|none|
|IsFiltered|boolean|false|none|none|
|IsSponsored|boolean|false|none|none|
|MobileUrl|string|false|none|none|
|PRO|boolean|false|none|none|
|PhotoUrl|string|false|none|none|
|Results|[[BigOven.Model.API2.RecipeInfox](#schemabigoven.model.api2.recipeinfox)]|false|none|none|
|Title|string|false|none|none|
|Token|string|false|none|none|
|WebUrl|string|false|none|none|

<h2 id="tocS_BigOven.Model.API2.GroceryList">BigOven.Model.API2.GroceryList</h2>
<!-- backwards compatibility -->
<a id="schemabigoven.model.api2.grocerylist"></a>
<a id="schema_BigOven.Model.API2.GroceryList"></a>
<a id="tocSbigoven.model.api2.grocerylist"></a>
<a id="tocsbigoven.model.api2.grocerylist"></a>

```json
{
  "Items": [
    {
      "BigOvenObject": "string",
      "CreationDate": "1970-01-01T00:00:00Z",
      "Department": "string",
      "DisplayQuantity": "string",
      "GUID": "string",
      "IsChecked": true,
      "ItemID": 0,
      "LastModified": "1970-01-01T00:00:00Z",
      "LocalStatus": "string",
      "Name": "string",
      "Notes": "string",
      "RecipeID": 0,
      "ThirdPartyURL": "string"
    }
  ],
  "LastModified": "1970-01-01T00:00:00Z",
  "Recipes": [
    {
      "Category": "string",
      "CreationDate": "1970-01-01T00:00:00Z",
      "Cuisine": "string",
      "HasVideos": true,
      "IsBookmark": true,
      "IsPrivate": true,
      "IsRecipeScan": true,
      "Microcategory": "string",
      "PhotoUrl": "string",
      "Poster": {
        "FirstName": "string",
        "LastName": "string",
        "PhotoUrl": "string",
        "UserID": 0,
        "UserName": "string"
      },
      "RecipeID": 0,
      "ReviewCount": 0,
      "Servings": 0,
      "StarRating": 0,
      "Subcategory": "string",
      "Title": "string",
      "TotalTries": 0,
      "WebURL": "string"
    }
  ],
  "VersionGuid": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Items|[[BigOven.Model.API.Grocery.Item](#schemabigoven.model.api.grocery.item)]|false|none|none|
|LastModified|string(date-time)|false|none|none|
|Recipes|[[BigOven.Model.API2.RecipeInfox](#schemabigoven.model.api2.recipeinfox)]|false|none|none|
|VersionGuid|string|false|none|none|

<h2 id="tocS_BigOven.Model.API2.Photo">BigOven.Model.API2.Photo</h2>
<!-- backwards compatibility -->
<a id="schemabigoven.model.api2.photo"></a>
<a id="schema_BigOven.Model.API2.Photo"></a>
<a id="tocSbigoven.model.api2.photo"></a>
<a id="tocsbigoven.model.api2.photo"></a>

```json
{
  "Caption": "string",
  "CreationDate": "string",
  "ImageID": 0,
  "IsPrimary": true,
  "MaxImageSquare": 0,
  "PhotoUrl": "string",
  "Poster": {
    "FirstName": "string",
    "LastName": "string",
    "PhotoUrl": "string",
    "UserID": 0,
    "UserName": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Caption|string|false|none|none|
|CreationDate|string|false|none|none|
|ImageID|integer(int64)|false|none|none|
|IsPrimary|boolean|false|none|none|
|MaxImageSquare|integer(int32)|false|none|none|
|PhotoUrl|string|false|none|none|
|Poster|[BigOven.Model.API2.UserInfoTinyx](#schemabigoven.model.api2.userinfotinyx)|false|none|none|

<h2 id="tocS_BigOven.Model.API2.Recipe">BigOven.Model.API2.Recipe</h2>
<!-- backwards compatibility -->
<a id="schemabigoven.model.api2.recipe"></a>
<a id="schema_BigOven.Model.API2.Recipe"></a>
<a id="tocSbigoven.model.api2.recipe"></a>
<a id="tocsbigoven.model.api2.recipe"></a>

```json
{
  "ActiveMinutes": 0,
  "AdTags": "string",
  "AdminBoost": 0,
  "AllCategoriesText": "string",
  "BookmarkImageURL": "string",
  "BookmarkSiteLogo": "string",
  "BookmarkURL": "string",
  "Category": "string",
  "Collection": "string",
  "CollectionID": 0,
  "CreationDate": "1970-01-01T00:00:00Z",
  "Cuisine": "string",
  "Description": "string",
  "FavoriteCount": 0,
  "ImageSquares": [
    0
  ],
  "ImageURL": "string",
  "Ingredients": [
    {
      "DisplayIndex": 0,
      "DisplayQuantity": "string",
      "HTMLName": "string",
      "IngredientID": 0,
      "IngredientInfo": {
        "Department": "string",
        "MasterIngredientID": 0,
        "Name": "string",
        "UsuallyOnHand": true
      },
      "IsHeading": true,
      "IsLinked": true,
      "MetricDisplayQuantity": "string",
      "MetricQuantity": 0,
      "MetricUnit": "string",
      "Name": "string",
      "PreparationNotes": "string",
      "Quantity": 0,
      "Unit": "string"
    }
  ],
  "IngredientsTextBlock": "string",
  "Instructions": "string",
  "IsBookmark": true,
  "IsPrivate": true,
  "IsRecipeScan": true,
  "IsSponsored": true,
  "LastModified": "1970-01-01T00:00:00Z",
  "MaxImageSquare": 0,
  "MedalCount": 0,
  "MenuCount": 0,
  "Microcategory": "string",
  "NotesCount": 0,
  "NutritionInfo": {
    "CaloriesFromFat": 0,
    "Cholesterol": 0,
    "CholesterolPct": 0,
    "DietaryFiber": 0,
    "DietaryFiberPct": 0,
    "MonoFat": 0,
    "PolyFat": 0,
    "Potassium": 0,
    "PotassiumPct": 0,
    "Protein": 0,
    "ProteinPct": 0,
    "SatFat": 0,
    "SatFatPct": 0,
    "SingularYieldUnit": "string",
    "Sodium": 0,
    "SodiumPct": 0,
    "Sugar": 0,
    "TotalCalories": 0,
    "TotalCarbs": 0,
    "TotalCarbsPct": 0,
    "TotalFat": 0,
    "TotalFatPct": 0,
    "TransFat": 0
  },
  "PhotoUrl": "string",
  "Poster": {
    "FirstName": "string",
    "ImageUrl48": "string",
    "IsKitchenHelper": true,
    "IsPremium": true,
    "IsUsingRecurly": true,
    "LastName": "string",
    "MemberSince": "1970-01-01T00:00:00Z",
    "PhotoUrl": "string",
    "PhotoUrl48": "string",
    "PremiumExpiryDate": "1970-01-01T00:00:00Z",
    "UserID": 0,
    "UserName": "string",
    "WebUrl": "string"
  },
  "PrimaryIngredient": "string",
  "RecipeID": 0,
  "ReviewCount": 0,
  "StarRating": 0,
  "Steps": [
    {
      "EndGantt": 0,
      "StartGantt": 0,
      "Text": "string"
    }
  ],
  "Subcategory": "string",
  "Title": "string",
  "TotalMinutes": 0,
  "VariantOfRecipeID": 0,
  "VerifiedByClass": "string",
  "VerifiedDateTime": "1970-01-01T00:00:00Z",
  "WebURL": "string",
  "YieldNumber": 0,
  "YieldUnit": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ActiveMinutes|integer(int32)|false|none|none|
|AdTags|string|false|none|none|
|AdminBoost|integer(int32)|false|none|none|
|AllCategoriesText|string|false|none|none|
|BookmarkImageURL|string|false|none|none|
|BookmarkSiteLogo|string|false|none|none|
|BookmarkURL|string|false|none|none|
|Category|string|false|none|none|
|Collection|string|false|none|none|
|CollectionID|integer(int32)|false|none|none|
|CreationDate|string(date-time)|false|none|none|
|Cuisine|string|false|none|none|
|Description|string|false|none|none|
|FavoriteCount|integer(int32)|false|none|none|
|ImageSquares|[integer(int32)]|false|none|none|
|ImageURL|string|false|none|none|
|Ingredients|[[BigOven.Model.API.Ingredient](#schemabigoven.model.api.ingredient)]|false|none|none|
|IngredientsTextBlock|string|false|none|none|
|Instructions|string|false|none|none|
|IsBookmark|boolean|false|none|none|
|IsPrivate|boolean|false|none|none|
|IsRecipeScan|boolean|false|none|none|
|IsSponsored|boolean|false|none|none|
|LastModified|string(date-time)|false|none|none|
|MaxImageSquare|integer(int32)|false|none|none|
|MedalCount|integer(int32)|false|none|none|
|MenuCount|integer(int32)|false|none|none|
|Microcategory|string|false|none|none|
|NotesCount|integer(int32)|false|none|none|
|NutritionInfo|[BigOven.Model.API.NutritionInfo](#schemabigoven.model.api.nutritioninfo)|false|none|none|
|PhotoUrl|string|false|none|none|
|Poster|[BigOven.Model.API.UserInfo](#schemabigoven.model.api.userinfo)|false|none|none|
|PrimaryIngredient|string|false|none|none|
|RecipeID|integer(int32)|false|none|none|
|ReviewCount|integer(int32)|false|none|none|
|StarRating|number(double)|false|none|none|
|Steps|[[BigOven.Model.InstructionStep](#schemabigoven.model.instructionstep)]|false|none|none|
|Subcategory|string|false|none|none|
|Title|string|false|none|none|
|TotalMinutes|integer(int32)|false|none|none|
|VariantOfRecipeID|integer(int32)|false|none|none|
|VerifiedByClass|string|false|none|none|
|VerifiedDateTime|string(date-time)|false|none|none|
|WebURL|string|false|none|none|
|YieldNumber|number(double)|false|none|none|
|YieldUnit|string|false|none|none|

<h2 id="tocS_BigOven.Model.API2.RecipeInfox">BigOven.Model.API2.RecipeInfox</h2>
<!-- backwards compatibility -->
<a id="schemabigoven.model.api2.recipeinfox"></a>
<a id="schema_BigOven.Model.API2.RecipeInfox"></a>
<a id="tocSbigoven.model.api2.recipeinfox"></a>
<a id="tocsbigoven.model.api2.recipeinfox"></a>

```json
{
  "Category": "string",
  "CreationDate": "1970-01-01T00:00:00Z",
  "Cuisine": "string",
  "HasVideos": true,
  "IsBookmark": true,
  "IsPrivate": true,
  "IsRecipeScan": true,
  "Microcategory": "string",
  "PhotoUrl": "string",
  "Poster": {
    "FirstName": "string",
    "LastName": "string",
    "PhotoUrl": "string",
    "UserID": 0,
    "UserName": "string"
  },
  "RecipeID": 0,
  "ReviewCount": 0,
  "Servings": 0,
  "StarRating": 0,
  "Subcategory": "string",
  "Title": "string",
  "TotalTries": 0,
  "WebURL": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Category|string|false|none|none|
|CreationDate|string(date-time)|false|none|none|
|Cuisine|string|false|none|none|
|HasVideos|boolean|false|none|none|
|IsBookmark|boolean|false|none|none|
|IsPrivate|boolean|false|none|none|
|IsRecipeScan|boolean|false|none|none|
|Microcategory|string|false|none|none|
|PhotoUrl|string|false|none|none|
|Poster|[BigOven.Model.API2.UserInfoTinyx](#schemabigoven.model.api2.userinfotinyx)|false|none|none|
|RecipeID|integer(int32)|false|none|none|
|ReviewCount|integer(int32)|false|none|none|
|Servings|number(double)|false|none|none|
|StarRating|number(double)|false|none|none|
|Subcategory|string|false|none|none|
|Title|string|false|none|none|
|TotalTries|integer(int32)|false|none|none|
|WebURL|string|false|none|none|

<h2 id="tocS_BigOven.Model.API2.RecipeNote">BigOven.Model.API2.RecipeNote</h2>
<!-- backwards compatibility -->
<a id="schemabigoven.model.api2.recipenote"></a>
<a id="schema_BigOven.Model.API2.RecipeNote"></a>
<a id="tocSbigoven.model.api2.recipenote"></a>
<a id="tocsbigoven.model.api2.recipenote"></a>

```json
{
  "CreationDate": "1970-01-01T00:00:00Z",
  "Date": "string",
  "DateDT": "1970-01-01T00:00:00Z",
  "GUID": "string",
  "ID": 0,
  "Notes": "string",
  "People": "string",
  "RecipeID": 0,
  "UserID": 0,
  "Variations": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CreationDate|string(date-time)|false|none|none|
|Date|string|false|none|none|
|DateDT|string(date-time)|false|none|none|
|GUID|string|false|none|none|
|ID|integer(int32)|false|none|none|
|Notes|string|false|none|none|
|People|string|false|none|none|
|RecipeID|integer(int32)|false|none|none|
|UserID|integer(int32)|false|none|none|
|Variations|string|false|none|none|

<h2 id="tocS_BigOven.Model.API2.RecipeSearchResult">BigOven.Model.API2.RecipeSearchResult</h2>
<!-- backwards compatibility -->
<a id="schemabigoven.model.api2.recipesearchresult"></a>
<a id="schema_BigOven.Model.API2.RecipeSearchResult"></a>
<a id="tocSbigoven.model.api2.recipesearchresult"></a>
<a id="tocsbigoven.model.api2.recipesearchresult"></a>

```json
{
  "ResultCount": 0,
  "Results": [
    {
      "Category": "string",
      "CreationDate": "1970-01-01T00:00:00Z",
      "Cuisine": "string",
      "HasVideos": true,
      "IsBookmark": true,
      "IsPrivate": true,
      "IsRecipeScan": true,
      "Microcategory": "string",
      "PhotoUrl": "string",
      "Poster": {
        "FirstName": "string",
        "LastName": "string",
        "PhotoUrl": "string",
        "UserID": 0,
        "UserName": "string"
      },
      "RecipeID": 0,
      "ReviewCount": 0,
      "Servings": 0,
      "StarRating": 0,
      "Subcategory": "string",
      "Title": "string",
      "TotalTries": 0,
      "WebURL": "string"
    }
  ],
  "SpellSuggest": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResultCount|integer(int32)|false|none|none|
|Results|[[BigOven.Model.API2.RecipeInfox](#schemabigoven.model.api2.recipeinfox)]|false|none|none|
|SpellSuggest|string|false|none|none|

<h2 id="tocS_BigOven.Model.API2.UserInfoTinyx">BigOven.Model.API2.UserInfoTinyx</h2>
<!-- backwards compatibility -->
<a id="schemabigoven.model.api2.userinfotinyx"></a>
<a id="schema_BigOven.Model.API2.UserInfoTinyx"></a>
<a id="tocSbigoven.model.api2.userinfotinyx"></a>
<a id="tocsbigoven.model.api2.userinfotinyx"></a>

```json
{
  "FirstName": "string",
  "LastName": "string",
  "PhotoUrl": "string",
  "UserID": 0,
  "UserName": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FirstName|string|false|none|none|
|LastName|string|false|none|none|
|PhotoUrl|string|false|none|none|
|UserID|integer(int32)|false|none|none|
|UserName|string|false|none|none|

<h2 id="tocS_BigOven.Model.InstructionStep">BigOven.Model.InstructionStep</h2>
<!-- backwards compatibility -->
<a id="schemabigoven.model.instructionstep"></a>
<a id="schema_BigOven.Model.InstructionStep"></a>
<a id="tocSbigoven.model.instructionstep"></a>
<a id="tocsbigoven.model.instructionstep"></a>

```json
{
  "EndGantt": 0,
  "StartGantt": 0,
  "Text": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EndGantt|integer(int32)|false|none|none|
|StartGantt|integer(int32)|false|none|none|
|Text|string|false|none|none|

<h2 id="tocS_BigOven.Model.RecipeCategory">BigOven.Model.RecipeCategory</h2>
<!-- backwards compatibility -->
<a id="schemabigoven.model.recipecategory"></a>
<a id="schema_BigOven.Model.RecipeCategory"></a>
<a id="tocSbigoven.model.recipecategory"></a>
<a id="tocsbigoven.model.recipecategory"></a>

```json
{
  "Category": "string",
  "DefaultActiveMinutes": 0,
  "DefaultTotalMinutes": 0,
  "ID": 0,
  "ParentID": 0,
  "PrimaryImage": "string",
  "ShortDescription": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Category|string|false|none|none|
|DefaultActiveMinutes|integer(int32)|false|none|none|
|DefaultTotalMinutes|integer(int32)|false|none|none|
|ID|integer(int32)|false|none|none|
|ParentID|integer(int32)|false|none|none|
|PrimaryImage|string|false|none|none|
|ShortDescription|string|false|none|none|

<h2 id="tocS_BigOven.Model.RecipeInfoDateTuple2">BigOven.Model.RecipeInfoDateTuple2</h2>
<!-- backwards compatibility -->
<a id="schemabigoven.model.recipeinfodatetuple2"></a>
<a id="schema_BigOven.Model.RecipeInfoDateTuple2"></a>
<a id="tocSbigoven.model.recipeinfodatetuple2"></a>
<a id="tocsbigoven.model.recipeinfodatetuple2"></a>

```json
{
  "date": "1970-01-01T00:00:00Z",
  "recipeInfo": {
    "Category": "string",
    "CreationDate": "1970-01-01T00:00:00Z",
    "Cuisine": "string",
    "HasVideos": true,
    "IsBookmark": true,
    "IsPrivate": true,
    "IsRecipeScan": true,
    "Microcategory": "string",
    "PhotoUrl": "string",
    "Poster": {
      "FirstName": "string",
      "LastName": "string",
      "PhotoUrl": "string",
      "UserID": 0,
      "UserName": "string"
    },
    "RecipeID": 0,
    "ReviewCount": 0,
    "Servings": 0,
    "StarRating": 0,
    "Subcategory": "string",
    "Title": "string",
    "TotalTries": 0,
    "WebURL": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|date|string(date-time)|false|none|none|
|recipeInfo|[BigOven.Model.API2.RecipeInfox](#schemabigoven.model.api2.recipeinfox)|false|none|none|

<h2 id="tocS_BigOven.Model.RecipeInfoReviewTuple2">BigOven.Model.RecipeInfoReviewTuple2</h2>
<!-- backwards compatibility -->
<a id="schemabigoven.model.recipeinforeviewtuple2"></a>
<a id="schema_BigOven.Model.RecipeInfoReviewTuple2"></a>
<a id="tocSbigoven.model.recipeinforeviewtuple2"></a>
<a id="tocsbigoven.model.recipeinforeviewtuple2"></a>

```json
{
  "RecipeInfo": {
    "Category": "string",
    "CreationDate": "1970-01-01T00:00:00Z",
    "Cuisine": "string",
    "HasVideos": true,
    "IsBookmark": true,
    "IsPrivate": true,
    "IsRecipeScan": true,
    "Microcategory": "string",
    "PhotoUrl": "string",
    "Poster": {
      "FirstName": "string",
      "LastName": "string",
      "PhotoUrl": "string",
      "UserID": 0,
      "UserName": "string"
    },
    "RecipeID": 0,
    "ReviewCount": 0,
    "Servings": 0,
    "StarRating": 0,
    "Subcategory": "string",
    "Title": "string",
    "TotalTries": 0,
    "WebURL": "string"
  },
  "Review": {
    "ActiveMinutes": 0,
    "Comment": "string",
    "CreationDate": "1970-01-01T00:00:00Z",
    "FeaturedReply": {
      "Comment": "string",
      "CreationDate": "1970-01-01T00:00:00Z",
      "ID": "string",
      "LastModified": "1970-01-01T00:00:00Z",
      "Poster": {
        "FirstName": "string",
        "LastName": "string",
        "PhotoUrl": "string",
        "UserID": 0,
        "UserName": "string"
      },
      "ReviewID": "string"
    },
    "GUID": "string",
    "ID": "string",
    "LastModified": "1970-01-01T00:00:00Z",
    "ParentID": 0,
    "Poster": {
      "FirstName": "string",
      "ImageUrl48": "string",
      "IsKitchenHelper": true,
      "IsPremium": true,
      "IsUsingRecurly": true,
      "LastName": "string",
      "MemberSince": "1970-01-01T00:00:00Z",
      "PhotoUrl": "string",
      "PhotoUrl48": "string",
      "PremiumExpiryDate": "1970-01-01T00:00:00Z",
      "UserID": 0,
      "UserName": "string",
      "WebUrl": "string"
    },
    "Replies": [
      {}
    ],
    "ReplyCount": 0,
    "ReviewID": 0,
    "StarRating": 0,
    "TotalMinutes": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RecipeInfo|[BigOven.Model.API2.RecipeInfox](#schemabigoven.model.api2.recipeinfox)|false|none|none|
|Review|[BigOven.Model.API.Review](#schemabigoven.model.api.review)|false|none|none|

<h2 id="tocS_BigOven.Model.RecipeInfoTiny">BigOven.Model.RecipeInfoTiny</h2>
<!-- backwards compatibility -->
<a id="schemabigoven.model.recipeinfotiny"></a>
<a id="schema_BigOven.Model.RecipeInfoTiny"></a>
<a id="tocSbigoven.model.recipeinfotiny"></a>
<a id="tocsbigoven.model.recipeinfotiny"></a>

```json
{
  "ImageURL": "string",
  "QualityScore": 0,
  "RecipeID": 0,
  "Servings": 0,
  "Title": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ImageURL|string|false|none|none|
|QualityScore|integer(int32)|false|none|none|
|RecipeID|integer(int32)|false|none|none|
|Servings|number(double)|false|none|none|
|Title|string|false|none|none|

<h2 id="tocS_BigOven.Model.ShoppingListLine">BigOven.Model.ShoppingListLine</h2>
<!-- backwards compatibility -->
<a id="schemabigoven.model.shoppinglistline"></a>
<a id="schema_BigOven.Model.ShoppingListLine"></a>
<a id="tocSbigoven.model.shoppinglistline"></a>
<a id="tocsbigoven.model.shoppinglistline"></a>

```json
{
  "DateAdded": "1970-01-01T00:00:00Z",
  "Dept": "string",
  "GUID": "string",
  "HTMLItemName": "string",
  "IsChecked": true,
  "ItemName": "string",
  "LastModified": "1970-01-01T00:00:00Z",
  "ListID": 0,
  "MealPlanID": 0,
  "MealPlanObjectType": 0,
  "Notes": "string",
  "PendingAddition": true,
  "RecipeID": 0,
  "ShoppingListLineID": 0,
  "Store": "string",
  "TextAmt": "string",
  "ThirdPartyHost": "string",
  "ThirdPartyTitle": "string",
  "ThirdPartyURL": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DateAdded|string(date-time)|false|none|none|
|Dept|string|false|none|none|
|GUID|string|false|none|none|
|HTMLItemName|string|false|none|none|
|IsChecked|boolean|false|none|none|
|ItemName|string|false|none|none|
|LastModified|string(date-time)|false|none|none|
|ListID|integer(int64)|false|none|none|
|MealPlanID|integer(int32)|false|none|none|
|MealPlanObjectType|integer(int32)|false|none|none|
|Notes|string|false|none|none|
|PendingAddition|boolean|false|none|none|
|RecipeID|integer(int32)|false|none|none|
|ShoppingListLineID|integer(int64)|false|none|none|
|Store|string|false|none|none|
|TextAmt|string|false|none|none|
|ThirdPartyHost|string|false|none|none|
|ThirdPartyTitle|string|false|none|none|
|ThirdPartyURL|string|false|none|none|

<h2 id="tocS_BigOven.Result">BigOven.Result</h2>
<!-- backwards compatibility -->
<a id="schemabigoven.result"></a>
<a id="schema_BigOven.Result"></a>
<a id="tocSbigoven.result"></a>
<a id="tocsbigoven.result"></a>

```json
{
  "Data": {},
  "Message": "string",
  "StatusCode": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Data|[System.Object](#schemasystem.object)|false|none|none|
|Message|string|false|none|none|
|StatusCode|integer(int32)|false|none|none|

<h2 id="tocS_System.Object">System.Object</h2>
<!-- backwards compatibility -->
<a id="schemasystem.object"></a>
<a id="schema_System.Object"></a>
<a id="tocSsystem.object"></a>
<a id="tocssystem.object"></a>

```json
{}
```
