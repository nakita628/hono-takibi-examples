<h1 id="suggestions">Suggestions v1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.


The **Marketplace API** enables marketplaces and sellers hosted on VTEX to perform their collaborative operations.  

>⚠️ The marketplace must [create an appKey and appToken](https://developers.vtex.com/docs/guides/getting-started-authentication) for each non-VTEX seller that will use this API.

## Index

### Notification

Endpoints used by sellers to notify marketplaces that the price or inventory language has changed for one of their SKUs.

`POST` [Notify marketplace of price update](https://developers.vtex.com/docs/api-reference/marketplace-apis#post-/notificator/-sellerId-/changenotification/-skuId-/price)

`POST` [Notify marketplace of inventory update](https://developers.vtex.com/docs/api-reference/marketplace-apis#post-/notificator/-sellerId-/changenotification/-skuId-/inventory)


### Suggestions

#### Get Suggestions

Search and filter all suggestions using specific criteria.

`GET` [Get all SKU Suggestions](https://developers.vtex.com/docs/api-reference/marketplace-apis-suggestions#get-/suggestions)

`GET` [Get SKU Suggestion by ID](https://developers.vtex.com/docs/api-reference/marketplace-apis-suggestions#get-/suggestions/-sellerId-/-sellerSkuId-)


#### Manage Suggestions

Send or delete SKU suggestions from the seller to marketplace.

`PUT` [Send SKU Suggestion](https://developers.vtex.com/docs/api-reference/marketplace-apis-suggestions#put-/suggestions/-sellerId-/-sellerSkuId-)

`DELETE` [Delete SKU Suggestion](https://developers.vtex.com/docs/api-reference/marketplace-apis-suggestions#delete-/suggestions/-sellerId-/-sellerSkuId-)


#### Get Versions

Search and filter all versions of suggestions, using specific criteria.

`GET` [Get all versions](https://developers.vtex.com/docs/api-reference/marketplace-apis-suggestions#get-/suggestions/-sellerId-/-sellerskuid-/versions)

`GET` [Get version by ID](https://developers.vtex.com/docs/api-reference/marketplace-apis-suggestions#get-/suggestions/-sellerId-/-sellerskuid-/versions/-version-)


#### Match Received SKUs

Match SKU suggestions received in the marketplace.

`PUT` [Match Received SKUs individually](https://developers.vtex.com/docs/api-reference/marketplace-apis-suggestions#put-/suggestions/-sellerId-/-sellerskuid-/versions/-version-/matches/-matchid-)

`PUT` [Match Multiple Received SKUs](https://developers.vtex.com/docs/api-reference/marketplace-apis-suggestions#put-/suggestions/matches/action/-actionName-)


#### SKU Approval Settings

Allows marketplaces to configure rules for automatically and manually approving SKUs received from sellers.

`GET`[Get autoApprove Status in Account Settings](https://developers.vtex.com/docs/api-reference/marketplace-apis-suggestions#get-/suggestions/configuration/autoapproval/toggle)  

`PUT`[Activate autoApprove in Marketplace's Account](https://developers.vtex.com/docs/api-reference/marketplace-apis-suggestions#put-/suggestions/configuration/autoapproval/toggle)  

`GET`[Get Account's Approval Settings](https://developers.vtex.com/docs/api-reference/marketplace-apis-suggestions#get-/suggestions/configuration)

`PUT`[Save Account's Approval Settings](https://developers.vtex.com/docs/api-reference/marketplace-apis-suggestions#put-/suggestions/configuration)

`GET`[Get Seller's Approval Settings](https://developers.vtex.com/docs/api-reference/marketplace-apis-suggestions#get-/suggestions/configuration/seller/-sellerId-)

`PUT`[Save Seller's Approval Settings](https://developers.vtex.com/docs/api-reference/marketplace-apis-suggestions#put-/suggestions/configuration/seller/-sellerId-)

`PUT`[Activate autoApprove Setting for a Seller](https://developers.vtex.com/docs/api-reference/marketplace-apis-suggestions#put-/suggestions/configuration/autoapproval/toggle/seller/-sellerId-)   


### Matched Offers

Offers are seller products and SKUs that were sent to the marketplace, and already have their price and inventory level configured.

`GET`[Get Matched Offers List](https://developers.vtex.com/docs/api-reference/marketplace-apis#get-/offer-manager/pvt/offers)

`GET`[Get Matched Offer's Data by SKU ID](https://developers.vtex.com/docs/api-reference/marketplace-apis#get-/offer-manager/pvt/product/-productId-/sku/-skuId-)  

`GET`[Get Matched Offer's Data by Product ID](https://developers.vtex.com/docs/api-reference/marketplace-apis#get-/offer-manager/pvt/product/-productId-)

Base URLs:

* <a href="https://vtex.local">https://vtex.local</a>

* <a href="https://api.vtex.com/{accountName}">https://api.vtex.com/{accountName}</a> - Suggestions Server URL.

# Authentication

* API Key (appKey)
    - Parameter Name: **X-VTEX-API-AppKey**, in: header.

* API Key (appToken)
    - Parameter Name: **X-VTEX-API-AppToken**, in: header.

<h1 id="suggestions-get-suggestions">Get Suggestions</h1>

Search and filter all suggestions using specific criteria

## Get all SKU suggestions

<a id="opIdGetsuggestions"></a>

> Code samples

```bash
curl 'https://example.com/suggestions?accountName=apiexamples' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /suggestions`

This endpoint retrieves a list of all SKUs sent by the seller for the Marketplace's approval. Marketplace operators should use this endpoint whenever they want to check the full list of received SKUs and their  information. 

Note that all the information sent by the seller will be in the [content] object. All remaining information in this endpoint's response is given by the Matcher. 

Matcher rates received SKUs by correlating the data sent by sellers, to existing fields in the marketplace. The calculation of these scores determines whether the product has been: 

`Approved`: score equal to or greater than 80 points. 

`Pending`: from 31 to 79 points.

`Denied`: from 0 to 30 points. 

Note that  if the autoApprove setting is enabled, the SKUs will be approved, regardless of the Score.

<h3 id="get-all-sku-suggestions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountName|query|string|true|Name of the VTEX account. Used as part of the URL|
|q|query|string|false|This field allows you to customize your search. You can fill in this query param if you want to narrow down your search using the available filters on Received SKU modules.|
|type|query|string|false|This field allows users to filter SKU suggestions, by searching only the new suggestions that were just sent, and suggestions that have already been sent, but were updated. Possible values for this field include `new` and `update`.|
|seller|query|string|false|A string that identifies the seller in the marketplace. This ID must be created by the marketplace and informed to the seller so it can call this endpoint.|
|status|query|string|false|Narrow down you search, filtering by status. Values allowed on this field include: `accepted`, `pending` and `denied.`|
|hasmapping|query|string|false|This field allows you to filter SKUs that have mapping or not. Insert `true` to filter SKUs that have mapping, or `false` to retrieve SKUs that aren't mapped.|
|matcherid|query|string|false|Identifies the matching entity. It can be either VTEX's matcher, or an external matcher developed by partners, for example. The `matcherId`'s value can be obtained through the [Get SKU Suggestion by ID](https://developers.vtex.com/vtex-rest-api/reference/getsuggestion) endpoint.|
|_from|query|integer(int32)|false|Define your pagination range, by adding the pagination starting value. Values should be bigger than 0, with a maximum of 50 records per page.|
|_to|query|integer(int32)|false|Define your pagination range, by adding the pagination ending value. Values should be bigger than 0, with a maximum of 50 records per page.|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|
|Content-Type|header|string|true|Type of the content being sent.|

<h3 id="get-all-sku-suggestions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get SKU Suggestion by ID

<a id="opIdGetSuggestion"></a>

> Code samples

```bash
curl 'https://example.com/suggestions/seller123/1234?accountName=apiexamples' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /suggestions/{sellerId}/{sellerSkuId}`

This endpoint retrieves the data of a specific SKU sent by the seller, to the marketplace. Marketplaces or external matchers can call this endpoint when they want to check the information about a single SKU. 

Note that all the information sent by the seller will be in the [content] object. All remaining information in this endpoint's response is given by the Matcher. 

Matcher rates received SKUs by correlating the data sent by sellers, to existing fields in the marketplace. The calculation of these scores determines whether the product has been: 

`Approved`: score equal to or greater than 80 points. 

`Pending`: from 31 to 79 points.

`Denied`: from 0 to 30 points. 

Note that  if the autoApprove setting is enabled, the SKUs will be approved, regardless of the Score.

<h3 id="get-sku-suggestion-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountName|query|string|true|Name of the VTEX account. Used as part of the URL|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|sellerId|path|string|true|A string that identifies the seller in the marketplace. This ID must be created by the marketplace and informed to the seller before the integration is built.|
|sellerSkuId|path|string|true|A string that identifies the SKU in the marketplace. This is the ID that the marketplace will use for future references to this SKU, such as price and inventory notifications.|

<h3 id="get-sku-suggestion-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

<h1 id="suggestions-manage-suggestions">Manage Suggestions</h1>

Send or delete SKU suggestions from the seller to marketplace

## Send SKU Suggestion

<a id="opIdSaveSuggestion"></a>

> Code samples

```bash
curl 'https://example.com/suggestions/seller123/1234?accountName=apiexamples' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "AvailableQuantity": 111,
    "BrandName": "Brand 1",
    "CategoryFullPath": "Category 1",
    "EAN": "EAN123",
    "Height": 1,
    "Images": [
      {
        "imageName": "Principal",
        "imageUrl": "https://i.pinimg.com/originals/2d/96/4a/2d964a6bf37d9224d0615dc85fccdd62.jpg"
      }
    ],
    "Length": 1,
    "MeasurementUnit": "un",
    "NameComplete": "Complete product name",
    "Pricing": {
      "Currency": "BRL",
      "CurrencySymbol": "R$",
      "SalePrice": 399
    },
    "ProductDescription": "sample",
    "ProductId": "321",
    "ProductName": "Product sample",
    "ProductSpecifications": [
      {
        "fieldName": "Fabric",
        "fieldValues": [
          "Cotton",
          "Velvet"
        ]
      }
    ],
    "RefId": "REFID123",
    "SellerId": "string",
    "SellerStockKeepingUnitId": 567,
    "SkuName": "Sku sample",
    "SkuSpecifications": [
      {
        "fieldName": "Color",
        "fieldValues": [
          "Red",
          "Blue"
        ]
      }
    ],
    "UnitMultiplier": 1,
    "Updated": null,
    "Weight": 1,
    "Width": 1
  }'
```

`PUT /suggestions/{sellerId}/{sellerSkuId}`

This request is used by the seller when it wants to suggest that one of their SKUs is sold in the marketplace.

Before using this request, the seller should always use the [Change Notification](https://developers.vtex.com/vtex-rest-api/reference/catalog-api-get-seller-sku-notification) request in order to check if the SKU already exists in the marketplace. If it doesn't, then this is the next call in the SKU integration flow.

In the Send Suggestion request, the seller must send information about the SKU, such as the product and SKU name, the seller ID, and the image URL. All parameters are explained below. 

> Body parameter

```json
{
  "AvailableQuantity": 111,
  "BrandName": "Brand 1",
  "CategoryFullPath": "Category 1",
  "EAN": "EAN123",
  "Height": 1,
  "Images": [
    {
      "imageName": "Principal",
      "imageUrl": "https://i.pinimg.com/originals/2d/96/4a/2d964a6bf37d9224d0615dc85fccdd62.jpg"
    }
  ],
  "Length": 1,
  "MeasurementUnit": "un",
  "NameComplete": "Complete product name",
  "Pricing": {
    "Currency": "BRL",
    "CurrencySymbol": "R$",
    "SalePrice": 399
  },
  "ProductDescription": "sample",
  "ProductId": "321",
  "ProductName": "Product sample",
  "ProductSpecifications": [
    {
      "fieldName": "Fabric",
      "fieldValues": [
        "Cotton",
        "Velvet"
      ]
    }
  ],
  "RefId": "REFID123",
  "SellerId": "string",
  "SellerStockKeepingUnitId": 567,
  "SkuName": "Sku sample",
  "SkuSpecifications": [
    {
      "fieldName": "Color",
      "fieldValues": [
        "Red",
        "Blue"
      ]
    }
  ],
  "UnitMultiplier": 1,
  "Updated": null,
  "Weight": 1,
  "Width": 1
}
```

<h3 id="send-sku-suggestion-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountName|query|string|true|Name of the VTEX account to which the seller wants to suggest a new SKU. It is used as part of the request URL.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|sellerId|path|string|true|A string that identifies the seller in the marketplace. This ID must be created by the marketplace and informed to the seller before the integration is built.|
|sellerSkuId|path|string|true|A string that identifies the SKU in the seller. This is the ID that the marketplace will use for future references to this SKU, such as price and inventory notifications.|
|body|body|[SaveSuggestionRequest](#schemasavesuggestionrequest)|true|none|
|» AvailableQuantity|body|integer(int32)|true|none|
|» BrandName|body|string|true|Name of the brand to which this SKU belongs. It must match the brand created in the marketplace.|
|» CategoryFullPath|body|string|true|Full path to the SKU's category. It should be written as {department}/{category}. For example: if the department is **Appliances** and the category is **Oven**, the full path should be 'Appliances/Oven'.|
|» EAN|body|string|true|SKU reference code. Mandatory if the RefId is not informed.|
|» Height|body|integer(decimal)|true|Height of the SKU.|
|» Images|body|[[Image](#schemaimage)]|true|Array containing the URLs and names the SKU images.|
|» Length|body|integer(decimal)|true|Length of the SKU.|
|» MeasurementUnit|body|string|false|Measurement unit that should be used for this SKU. If this information doesn't apply, you should use the default value `un`.|
|» Pricing|body|object|true|none|
|» » Currency|body|string|false|none|
|» » CurrencySymbol|body|string|false|none|
|» » SalePrice|body|integer(int32)|false|none|
|» ProductDescription|body|string|true|Product Description containing the main information about the product (not the SKU).|
|» ProductId|body|string|true|Product ID in seller's account.|
|» ProductName|body|string|true|Name of the suggested product. This field has a limit of 150 characters.|
|» ProductSpecifications|body|[[ProductSpecification](#schemaproductspecification)]|false|Array containing the names and values of the product specifications.|
|» RefId|body|string|true|SKU reference code. Mandotory if the EAN is not informed.|
|» SellerId|body|string|true|ID of the seller in the marketplace. This ID must be created by the marketplace and informed to the seller before the integration is built.|
|» SellerStockKeepingUnitId|body|integer(int32)|false|ID of the SKU registered in the seller.|
|» SkuName|body|string|true|Name of the suggested SKU.|
|» SkuSpecifications|body|[[SkuSpecification](#schemaskuspecification)]|false|Array containing the names and values of the SKU specifications.|
|» UnitMultiplier|body|integer(int32)|false|Unit multiplier for this SKU. If this information doesn't apply, you should use the default value `1`.|
|» Weight|body|integer(decimal)|true|Weight of the SKU in grams.|
|» Width|body|integer(decimal)|true|Width of the SKU.|

<h3 id="send-sku-suggestion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Delete SKU Suggestion

<a id="opIdDeleteSuggestion"></a>

> Code samples

```bash
curl 'https://example.com/suggestions/seller123/1234?accountName=apiexamples' \
  -X DELETE \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`DELETE /suggestions/{sellerId}/{sellerSkuId}`

This endpoint deletes a chosen SKU suggestion. Only one SKU should be deleted per request. This request cannot be undone. A workaround to revert its action, is to send the suggestion again, through the Send Suggestion API.

<h3 id="delete-sku-suggestion-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountName|query|string|true|Name of the VTEX account. Used as part of the URL.|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|sellerId|path|string|true|A string that identifies the seller in the marketplace. This ID must be created by the marketplace and informed to the seller before the integration is built.|
|sellerSkuId|path|string|true|A string that identifies the SKU in the marketplace. This is the ID that the marketplace will use for future references to this SKU, such as price and inventory notifications.|

<h3 id="delete-sku-suggestion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

<h1 id="suggestions-get-versions">Get Versions</h1>

Search and filter all versions of suggestions, using specific criteria

## Get all Versions

<a id="opIdGetVersions"></a>

> Code samples

```bash
curl 'https://example.com/suggestions/seller123/1234/versions?accountName=apiexamples' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /suggestions/{sellerId}/{sellerskuid}/versions`

Whenever an SKU Suggestion is updated or changed, a new version of the original one is created. All versions are logged, so you can search for previous our current states of SKU suggestions. 

This endpoint retrieves the data of *all* previous and latest versions of a specific SKU suggestion, sent by the seller. Whenever an SKU is updated, it is important to map previous versions, to compare and identify changes. 

The response's object [latestversion] provides the information of the most recent version of that SKU suggestion.

<h3 id="get-all-versions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountName|query|string|true|Name of the VTEX account. Used as part of the URL|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|sellerId|path|string|true|A string that identifies the seller in the marketplace. This ID must be created by the marketplace and informed to the seller before the integration is built.|
|sellerskuid|path|string|true|A string that identifies the SKU in the marketplace. This is the ID that the marketplace will use for future references to this SKU, such as price and inventory notifications.|

<h3 id="get-all-versions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get Version by ID

<a id="opIdGetSuggestionbyversion"></a>

> Code samples

```bash
curl 'https://example.com/suggestions/seller123/1234/versions/09072021142808277?accountName=apiexamples' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /suggestions/{sellerId}/{sellerskuid}/versions/{version}`

Whenever an SKU Suggestion is updated or changed, a new version of the original one is created. All versions are logged, so you can search for previous our current states of SKU suggestions. 

This endpoint retrieves a specific *version* of a chosen SKU sent by the seller. Add the Seller's ID, Seller's SKU ID, and version ID in the path to detail your search.

<h3 id="get-version-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountName|query|string|true|Name of the VTEX account. Used as part of the URL|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|sellerId|path|string|true|A string that identifies the seller in the marketplace. This ID must be created by the marketplace and informed to the seller before the integration is built.|
|sellerskuid|path|string|true|A string that identifies the SKU in the marketplace. This is the ID that the marketplace will use for future references to this SKU, such as price and inventory notifications.|
|version|path|string|true|Whenever an SKU Suggestion is updated or changed, a new version of the original one is created. All versions are logged, so you can search for previous our current states of SKU suggestions. This field is the `versionId` associated to the version you choose to search for. You can get this field's value through the [Get SKU Suggestion by ID](https://developers.vtex.com/vtex-rest-api/reference/getsuggestion). through the `latestVersionId` field.|

<h3 id="get-version-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

<h1 id="suggestions-sku-approval-settings">SKU Approval Settings</h1>

## Get Account's Approval Settings

<a id="opIdGetaccountconfig"></a>

> Code samples

```bash
curl 'https://example.com/suggestions/configuration?accountName=apiexamples' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /suggestions/configuration`

This endpoint retrieves the current approval settings of a marketplace's Received SKUs module. Its response includes: 

- `Score`: Matcher scores for approving and rejecting SKUs received from sellers. 

- `Matchers`: All Matchers configured on the marketplace, and their respective details. 

- `SpecificationsMapping`: Mapping of product and SKU specifications, per seller. 

- `MatchFlux`: This field determines the type of approval configuration applied to SKUs received from a seller. 

The possible values include: 

-`default`, where the Matcher reviews the SKU, and approves it based on its score. 

-`manual`, for manual approvals through the Received SKU UI, or Match API. 

-`autoApprove`, for every SKU received from a given seller to be approved automatically, regardless of their Matcher Score.

<h3 id="get-accounts-approval-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountName|query|string|true|Name of the VTEX account that belongs to the marketplace. All data extracted, and changes added will be posted into this account.|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|
|Content-Type|header|string|true|Describes the type of the content being sent.|

> Example responses

> 200 Response

```json
{
  "MatchFlux": "Default",
  "Matchers": [
    {
      "Description": null,
      "IsActive": true,
      "MatcherId": "vtex-matcher",
      "UpdatesNotificationEndpoint": null,
      "hook-base-address": "http://portal.vtexinternal.com/api/ssm/hooks"
    }
  ],
  "Rules": {
    "Item": [],
    "Product": []
  },
  "Score": {
    "Approve": 80,
    "Reject": 30
  },
  "SpecificationsMapping": []
}
```

<h3 id="get-accounts-approval-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-accounts-approval-settings-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MatchFlux|string|false|none|This field determines the type of approval configuration applied to SKUs received from a seller.|
|Matchers|[object]|false|none|All Matchers configured on the marketplace, and their respective details.|
|Rules|object|false|none|Items and products.|
|Score|object|false|none|Matcher scores for approving and rejecting SKUs received from sellers.|
|SpecificationsMapping|[object]|false|none|Mapping of product and SKU specifications, per seller.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Save Account's Approval Settings

<a id="opIdSaveaccountconfig"></a>

> Code samples

```bash
curl 'https://example.com/suggestions/configuration?accountName=apiexamples' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "MatchFlux": "AutoApprove",
    "Matchers": [
      {
        "Description": null,
        "IsActive": true,
        "MatcherId": "vtex-matcher",
        "UpdatesNotificationEndpoint": null,
        "hook-base-address": "http://simple-suggestion-matcher.vtex.com.br"
      }
    ],
    "Score": {
      "Approve": 80,
      "Reject": 30
    },
    "SpecificationsMapping": []
  }'
```

`PUT /suggestions/configuration`

Marketplaces use this endpoint to create or update approval settings on their Received SKUs module. 

The request includes all the details necessary to implement the chosen approval settings.

> Body parameter

```json
{
  "MatchFlux": "AutoApprove",
  "Matchers": [
    {
      "Description": null,
      "IsActive": true,
      "MatcherId": "vtex-matcher",
      "UpdatesNotificationEndpoint": null,
      "hook-base-address": "http://simple-suggestion-matcher.vtex.com.br"
    }
  ],
  "Score": {
    "Approve": 80,
    "Reject": 30
  },
  "SpecificationsMapping": []
}
```

<h3 id="save-accounts-approval-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountName|query|string|true|Name of the VTEX account that belongs to the marketplace. All data extracted, and changes added will be posted into this account.|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|body|body|[SaveaccountconfigRequest](#schemasaveaccountconfigrequest)|true|none|
|» MatchFlux|body|string|true|This field determines the type of approval configuration applied to SKUs received  from a seller. The possible values include: <br><br>- `default` where the Matcher reviews the SKU, and approves it based on its score <br><br>- `manual` for manual approvals through the Received SKU UI or Match API <br><br>- `autoApprove` for every SKU received from a given seller to be approved automatically, regardless of the Matcher Score.|
|» Matchers|body|[[Matcher](#schemamatcher)]|true|Matchers for approving and rejecting SKUs received from sellers.|
|» Score|body|[Score](#schemascore)|true|Matcher rates received SKUs by comparing the data sent by sellers to existing fields in the marketplace. The calculation of these scores determines whether the product has been: `Approved` or `Denied`.|
|» SpecificationsMapping|body|[string]|true|This attribute maps product and SKU specifications.|

> Example responses

> 200 Response

```json
{
  "MatchFlux": "AutoApprove",
  "Matchers": [
    {
      "Description": "Note",
      "IsActive": true,
      "MatcherId": "vtex-matcher",
      "UpdatesNotificationEndpoint": "notification.endpoint",
      "hook-base-address": "http://simple-suggestion-matcher.vtex.com.br"
    }
  ],
  "Rules": {
    "Item": [
      1
    ],
    "Product": [
      "Shirt"
    ]
  },
  "Score": {
    "Approve": 80,
    "Reject": 30
  },
  "SpecificationsMapping": [
    {
      "Mapping": {
        "Yellow": "Light yellow"
      },
      "SellerId": "Store1"
    }
  ]
}
```

<h3 id="save-accounts-approval-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="save-accounts-approval-settings-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MatchFlux|string|false|none|Type of approval configuration that apply to received SKUs sent by sellers. The possible values are: <br><br>`default`: the matcher approves the SKU. <br><br>`manual`: manual SKU's approvals. <br><br>`AutoApprove`: automatic SKU's approvals.|
|Matchers|[object]|false|none|[Matchers](https://help.vtex.com/en/tutorial/understanding-vtex-matcher-scoring) configurations for approving and rejecting [received SKUs](https://help.vtex.com/en/tutorial/cataloging-received-skus--tutorials_396) sent by sellers.|
|Rules|object|false|none|Items and products that belong to sellers.|
|» Item|[integer]|false|none|SKUs' ID.|
|» Product|[string]|false|none|Product's name.|
|Score|object|false|none|[Matcher's rates](https://help.vtex.com/en/tutorial/understanding-vtex-matcher-scoring) to approve or reject [received SKUs](https://help.vtex.com/en/tutorial/cataloging-received-skus--tutorials_396) sent by sellers.|
|» Approve|integer|false|none|Score to approve SKUs sent by sellers.|
|» Reject|integer|false|none|Score to reject SKUs sent by sellers.|
|SpecificationsMapping|[object]|false|none|This attribute maps product and SKU's specifications between the marketplace and the seller.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get autoApprove Status in Account Settings

<a id="opIdGetautoApprovevaluefromconfig"></a>

> Code samples

```bash
curl 'https://example.com/suggestions/configuration/autoapproval/toggle?sellerId=seller123&accountName=apiexamples' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /suggestions/configuration/autoapproval/toggle`

This endpoint can be used to check whether the autoapprove setting is active or not, for a specific seller. 

If the response is `true`, the autoapprove setting is active. If the response is `false`, it is inactive.

<h3 id="get-autoapprove-status-in-account-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sellerId|query|string|true|A string that identifies the seller in the marketplace. This ID must be created by the marketplace.|
|accountName|query|string|true|Name of the VTEX account that belongs to the marketplace. All data extracted, and changes added will be posted into this account.|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|
|Content-Type|header|string|true|Describes the type of the content being sent.|

> Example responses

> 200 Response

```json
{
  "Enabled": false
}
```

<h3 id="get-autoapprove-status-in-account-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-autoapprove-status-in-account-settings-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Enabled|boolean|false|none|If the auto-approve setting is active for a given seller (`true`) or not (`false`).|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Activate autoApprove in Marketplace's Account

<a id="opIdSaveautoapproveforaccount"></a>

> Code samples

```bash
curl 'https://example.com/suggestions/configuration/autoapproval/toggle?accountName=apiexamples' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "Enabled": true
  }'
```

`PUT /suggestions/configuration/autoapproval/toggle`

This endpoint enables the autoapprove rule to a marketplace's whole Received SKUs module. Once enabling the rule, received SKUs will be automatically approved on your store, regardless of the seller. 

 For the autoapprove rule to work as expected, the approval [Matcher score](https://help.vtex.com/en/tutorial/entendendo-a-pontuacao-do-vtex-matcher--tutorials_424) should be set up as 80 (default value), but you can configure a different number through the field `Score` in [Save Account's Approval Settings](https://developers.vtex.com/vtex-rest-api/reference/saveaccountconfig).

> Body parameter

```json
{
  "Enabled": true
}
```

<h3 id="activate-autoapprove-in-marketplaces-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountName|query|string|true|Name of the VTEX account that belongs to the marketplace. All data extracted, and changes added will be posted into this account.|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|body|body|[SaveautoapproveforaccountRequest](#schemasaveautoapproveforaccountrequest)|true|none|
|» Enabled|body|boolean|true|Insert `true` if you wish to activate the autoapprove rule for an entire marketplace account. Insert `false` if you wish to deactivate it. Be aware that once enabling the setting through this request, all received SKUs will be automatically approved on your store, regardless of the seller, or the Matcher Score.|

> Example responses

> 200 Response

```json
{
  "Enabled": false
}
```

<h3 id="activate-autoapprove-in-marketplaces-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="activate-autoapprove-in-marketplaces-account-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Enabled|boolean|false|none|If the auto-approve setting is active (`true`) or not (`false`).|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Activate autoApprove Setting for a Seller

<a id="opIdSaveautoapproveforaccountseller"></a>

> Code samples

```bash
curl 'https://example.com/suggestions/configuration/autoapproval/toggle/seller/seller123?accountName=apiexamples' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "Enabled": true
  }'
```

`PUT /suggestions/configuration/autoapproval/toggle/seller/{sellerId}`

This endpoint enables the auto approve setting to received SKUs from a specific seller. Be aware that once enabling the rule through this request, all received SKUs from that seller will be automatically approved on your store, regardless of the Matcher Score.

> Body parameter

```json
{
  "Enabled": true
}
```

<h3 id="activate-autoapprove-setting-for-a-seller-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountName|query|string|true|Name of the VTEX account that belongs to the marketplace. All data extracted, and changes added will be posted into this account.|
|sellerId|path|string|true|A string that identifies the seller in the marketplace. This ID must be created by the marketplace.|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|body|body|[SaveautoapproveforaccountsellerRequest](#schemasaveautoapproveforaccountsellerrequest)|true|none|
|» Enabled|body|boolean|true|Insert `true` if you wish to activate the autoapprove rule for that specific seller account. Insert `false` if you wish to deactivate it. Be aware that once enabling the setting through this request, all SKUs received from this seller will be automatically approved on your store regardless of the Matcher Score.|

<h3 id="activate-autoapprove-setting-for-a-seller-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get Seller's Approval Settings

<a id="opIdGetselleraccountconfig"></a>

> Code samples

```bash
curl 'https://example.com/suggestions/configuration/seller/seller123?accountName=apiexamples' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /suggestions/configuration/seller/{sellerId}`

This endpoint retrieves the current Received SKUs approval settings applied to a specific seller. Its response includes: 

- `sellerId`: A string that identifies the seller in the marketplace. 

- `accountId`: Marketplace’s account ID. 

- `accountName`: Marketplace’s account name. 

- `mapping`: Mapping of SKU and product Specifications. 

- `matchFlux`: This field determines the type of approval configuration applied to SKUs received  from a seller. 

The possible values include:  

-`default`, where the Matcher reviews the SKU, and approves it based on its score. 

-`manual`, for manual approvals through the Received SKU UI and Match API. 

-`autoApprove`, for every SKU received from a given seller to be approved automatically, regardless of the Matcher Score.

<h3 id="get-sellers-approval-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountName|query|string|true|Name of the VTEX account that belongs to the marketplace. All data extracted, and changes added will be posted into this account.|
|sellerId|path|string|true|A string that identifies the seller in the marketplace. This ID must be created by the marketplace.|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|
|Content-Type|header|string|true|Describes the type of the content being sent.|

<h3 id="get-sellers-approval-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Save Seller's Approval Settings

<a id="opIdPutselleraccountconfig"></a>

> Code samples

```bash
curl 'https://example.com/suggestions/configuration/seller/seller123?accountName=apiexamples' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "mapping": null,
    "matchFlux": "Default",
    "sellerId": "1a"
  }'
```

`PUT /suggestions/configuration/seller/{sellerId}`

Marketplaces use this endpoint to create or update approval settings to a specific seller, on the Received SKUs module. 

The request includes all the details necessary to implement the chosen approval settings.

> Body parameter

```json
{
  "mapping": null,
  "matchFlux": "Default",
  "sellerId": "1a"
}
```

<h3 id="save-sellers-approval-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountName|query|string|true|Name of the VTEX account that belongs to the marketplace. All data extracted, and changes added will be posted into this account.|
|sellerId|path|string|true|A string that identifies the seller in the marketplace. This ID must be created by the marketplace.|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|body|body|[PutselleraccountconfigRequest](#schemaputselleraccountconfigrequest)|true|none|
|» mapping|body|object \| null|true|Mapping of SKU and product Specifications. This object should be sent in the following format for all fields you wish to map:<br><br>{specificationName}:{specificationValue},<br><br>Example:<br><br>Choose voltage: Voltage,<br><br>Choose size: Size|
|» matchFlux|body|string|true|This field determines the type of approval configuration applied to SKUs received  from a seller. The possible values include: <br><br>- `default` where the Matcher reviews the SKU, and approves it based on its score <br><br>- `manual` for manual approvals through the Received SKU UI or Match API <br><br>- `autoApprove` for every SKU received from a given seller to be approved automatically, regardless of the Matcher Score.|
|» sellerId|body|string|true|A string that identifies the seller in the marketplace. This ID must be created by the marketplace.|

<h3 id="save-sellers-approval-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

<h1 id="suggestions-match-received-skus">Match Received SKUs</h1>

Match SKU suggestions received in the marketplace

## Match Multiple Received SKUs

<a id="opIdMatchMultiple"></a>

> Code samples

```bash
curl 'https://example.com/suggestions/matches/action/newprodcut?accountName=apiexamples' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '[
    [
      null
    ]
  ]'
```

`PUT /suggestions/matches/action/{actionName}`

This endpoint allows the user to bulk approve, deny, or associate received SKUs. In a single request, you can match up to 25 received SKUs from your sellers.

Through the `actionName` attribute you can select the operation you want to apply to the received SKU. 

Actions include: 

1. `newproduct`: match the SKU as a new product. 

2. `skuassociation`: associate the received SKU to an existing SKU. 

3. `productassociation`: associate the received SKU to an existing product. 

4. `deny`: deny the received SKU.

> Body parameter

```json
[
  [
    null
  ]
]
```

<h3 id="match-multiple-received-skus-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountName|query|string|true|Name of the VTEX account. Used as part of the URL|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand|
|actionName|path|string|true|This field refers to the operation you choose to apply to received SKUs. Values include: newproduct, skuassociation, productassociation or deny.|
|body|body|[[MatchMultiple](#schemamatchmultiple)]|true|none|

<h3 id="match-multiple-received-skus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Match Received SKUs individually

<a id="opIdMatch"></a>

> Code samples

```bash
curl 'https://example.com/suggestions/seller123/1234/versions/09072021142808277/matches/string?accountName=apiexamples' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "matchType": "itemMatch",
    "matcherId": "{{matcherid}}",
    "product": {
      "brandId": 1234567,
      "categoryId": 12,
      "description": "Book description",
      "matchType": "itemMatch",
      "name": "Book A",
      "specifications": null
    },
    "productRef": "{{productRef}}(should be specified when match is a product match)",
    "score": "{{score}} (must be decimal)",
    "sku": {
      "eans": [
        "12345678901213"
      ],
      "height": 1,
      "images": [
        {
          "imagem1.jpg": {
            "imagem1.jpg": "https://imageurl.example"
          }
        }
      ],
      "length": 1,
      "measurementUnit": "un",
      "name": "Sku exemplo",
      "refId": null,
      "specifications": {
        "Embalagem": "3 k   g"
      },
      "unitMultiplier": 1,
      "weight": 1,
      "width": 1
    },
    "skuRef": "{{skuid}}(should be specifed when match is a sku match)"
  }'
```

`PUT /suggestions/{sellerId}/{sellerskuid}/versions/{version}/matches/{matchid}`

All SKUs sent from a seller to a marketplace must be reviewed and matched. Actions in the matching process are added in the request body through the [matchType] object. Match type actions include: 

1. `newproduct`: match the SKU as a new product. 

2. `itemMatch`: associate the received SKU to an existing SKU. 

3. `productMatch`: associate the received SKU to an existing product. 

4. `deny`: deny the received SKU. 

5. `pending`: the received SKU requires attention. 

6. `incomplete`: the received SKU is lacking information to be matched. 

7. `insufficientScore`: the score given by the Matcher to this received SKU doesn't qualify it to be matched. 

Note that  if the autoApprove setting is enabled, the SKUs will be approved, regardless of the Score.

> Body parameter

```json
{
  "matchType": "itemMatch",
  "matcherId": "{{matcherid}}",
  "product": {
    "brandId": 1234567,
    "categoryId": 12,
    "description": "Book description",
    "matchType": "itemMatch",
    "name": "Book A",
    "specifications": null
  },
  "productRef": "{{productRef}}(should be specified when match is a product match)",
  "score": "{{score}} (must be decimal)",
  "sku": {
    "eans": [
      "12345678901213"
    ],
    "height": 1,
    "images": [
      {
        "imagem1.jpg": {
          "imagem1.jpg": "https://imageurl.example"
        }
      }
    ],
    "length": 1,
    "measurementUnit": "un",
    "name": "Sku exemplo",
    "refId": null,
    "specifications": {
      "Embalagem": "3 k   g"
    },
    "unitMultiplier": 1,
    "weight": 1,
    "width": 1
  },
  "skuRef": "{{skuid}}(should be specifed when match is a sku match)"
}
```

<h3 id="match-received-skus-individually-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountName|query|string|true|Name of the VTEX account. Used as part of the URL|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|sellerId|path|string|true|A string that identifies the seller in the marketplace. This ID must be created by the marketplace and informed to the seller before the integration is built.|
|sellerskuid|path|string|true|A string that identifies the SKU in the marketplace. This is the ID that the marketplace will use for future references to this SKU, such as price and inventory notifications.|
|version|path|string|true|Whenever an SKU Suggestion is updated or changed, a new version of the original one is created. All versions are logged, so you can search for previous our current states of SKU suggestions. This field is the versionId associated to the version you choose to search for. You can get this field's value through the[Get SKU Suggestion by ID](https://developers.vtex.com/vtex-rest-api/reference/getsuggestion). through the `latestVersionId` field.|
|matchid|path|string|true|Whenever an SKU suggestion is matched, it is associated to a unique ID. Fill in this field with the matchId you wish to filter by. The `matchId`'s value can be obtained through the *[Get SKU Suggestion by ID](https://developers.vtex.com/vtex-rest-api/reference/getsuggestion) endpoint.|
|body|body|[MatchRequest](#schemamatchrequest)|true|none|
|» matchType|body|string|true|Define the action you want to apply to each SKU. Values include: <br><br>1. `newproduct`: match the SKU as a new product. <br><br>2. `itemMatch`: associate the received SKU to an existing SKU. <br><br>3. `productMatch`: associate the received SKU to an existing product. <br><br>4. `deny`: deny the received SKU. <br><br>5. `pending`: the received SKU requires attention. <br><br>6. `incomplete`: the received SKU is lacking information to be matched. <br><br>7. `insufficientScore`: the score given by the Matcher to this received SKU doesn't qualify it to be matched. <br><br>Note that  if the autoApprove setting is enabled, the SKUs will be approved, regardless of the Score.|
|» matcherId|body|string|true|Identifies the matching entity. It can be either VTEX's matcher, or an external matcher developed by partners, for example. The `matcherId`'s value can be obtained through the [Get SKU Suggestion by ID](https://developers.vtex.com/vtex-rest-api/reference/getsuggestion) endpoint.|
|» product|body|[Product](#schemaproduct)|false|none|
|» productRef|body|string \| null|false|In `productMatch` actions, fill in this field on your request to match the item to an existing product in the marketplace.|
|» score|body|string|true|Matcher rates received SKUs by correlating the data sent by sellers, to existing fields in the marketplace. The calculation of these scores determines whether the product has been: <br><br>`Approved`: score equal to or greater than 80 points. <br><br>`Pending`: from 31 to 79 points.<br><br>`Denied`: from 0 to 30 points. <br><br>Note that  if the autoApprove setting is enabled, the SKUs will be approved, regardless of the Score.|
|» sku|body|[Sku](#schemasku)|false|none|
|» skuRef|body|string \| null|false|In `itemMatch` actions, fill in this field on your request to match the item to an existing SKU in the marketplace.|

<h3 id="match-received-skus-individually-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

# Schemas

<h2 id="tocS_Image">Image</h2>
<!-- backwards compatibility -->
<a id="schemaimage"></a>
<a id="schema_Image"></a>
<a id="tocSimage"></a>
<a id="tocsimage"></a>

```json
{
  "imageName": "Principal",
  "imageUrl": "https://i.pinimg.com/originals/2d/96/4a/2d964a6bf37d9224d0615dc85fccdd62.jpg"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|imageName|string|true|none|Name of the SKU image.|
|imageUrl|string|true|none|URL of the SKU image. The image must be sent through `https` protocol, otherwise it will not be rendered in VTEX Admin.|

<h2 id="tocS_Images">Images</h2>
<!-- backwards compatibility -->
<a id="schemaimages"></a>
<a id="schema_Images"></a>
<a id="tocSimages"></a>
<a id="tocsimages"></a>

```json
[
  {
    "imagem1.jpg": "imageurl.example"
  }
]
```

<h2 id="tocS_MatchMultiple">MatchMultiple</h2>
<!-- backwards compatibility -->
<a id="schemamatchmultiple"></a>
<a id="schema_MatchMultiple"></a>
<a id="tocSmatchmultiple"></a>
<a id="tocsmatchmultiple"></a>

```json
[
  null
]
```

<h2 id="tocS_MatchRequest">MatchRequest</h2>
<!-- backwards compatibility -->
<a id="schemamatchrequest"></a>
<a id="schema_MatchRequest"></a>
<a id="tocSmatchrequest"></a>
<a id="tocsmatchrequest"></a>

```json
{
  "matchType": "itemMatch",
  "matcherId": "{{matcherid}}",
  "product": {
    "brandId": 1234567,
    "categoryId": 12,
    "description": "Descricao exemplo",
    "name": "Produto exemplo",
    "specifications": null
  },
  "productRef": "{{productRef}}(should be specified when match is a product match)",
  "score": "{{score}} (must be decimal)",
  "sku": {
    "eans": [
      "12345678901213"
    ],
    "height": 1,
    "images": [
      {
        "imagem1.jpg": "imageurl.example"
      }
    ],
    "length": 1,
    "measurementUnit": "un",
    "name": "Sku exemplo",
    "refId": null,
    "specifications": {
      "Embalagem": "3 kg"
    },
    "unitMultiplier": 1,
    "weight": 1,
    "width": 1
  },
  "skuRef": "{{skuid}}(should be specifed when match is a sku match)"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|matchType|string|true|none|Define the action you want to apply to each SKU. Values include: <br><br>1. `newproduct`: match the SKU as a new product. <br><br>2. `itemMatch`: associate the received SKU to an existing SKU. <br><br>3. `productMatch`: associate the received SKU to an existing product. <br><br>4. `deny`: deny the received SKU. <br><br>5. `pending`: the received SKU requires attention. <br><br>6. `incomplete`: the received SKU is lacking information to be matched. <br><br>7. `insufficientScore`: the score given by the Matcher to this received SKU doesn't qualify it to be matched. <br><br>Note that  if the autoApprove setting is enabled, the SKUs will be approved, regardless of the Score.|
|matcherId|string|true|none|Identifies the matching entity. It can be either VTEX's matcher, or an external matcher developed by partners, for example. The `matcherId`'s value can be obtained through the [Get SKU Suggestion by ID](https://developers.vtex.com/vtex-rest-api/reference/getsuggestion) endpoint.|
|product|[Product](#schemaproduct)|false|none|none|
|productRef|string \| null|false|none|In `productMatch` actions, fill in this field on your request to match the item to an existing product in the marketplace.|
|score|string|true|none|Matcher rates received SKUs by correlating the data sent by sellers, to existing fields in the marketplace. The calculation of these scores determines whether the product has been: <br><br>`Approved`: score equal to or greater than 80 points. <br><br>`Pending`: from 31 to 79 points.<br><br>`Denied`: from 0 to 30 points. <br><br>Note that  if the autoApprove setting is enabled, the SKUs will be approved, regardless of the Score.|
|sku|[Sku](#schemasku)|false|none|none|
|skuRef|string \| null|false|none|In `itemMatch` actions, fill in this field on your request to match the item to an existing SKU in the marketplace.|

<h2 id="tocS_Matcher">Matcher</h2>
<!-- backwards compatibility -->
<a id="schemamatcher"></a>
<a id="schema_Matcher"></a>
<a id="tocSmatcher"></a>
<a id="tocsmatcher"></a>

```json
{
  "Description": null,
  "IsActive": true,
  "MatcherId": "vtex-matcher",
  "UpdatesNotificationEndpoint": null,
  "hook-base-address": "http://simple-suggestion-matcher.vtex.com.br"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Description|string \| null|false|none|Insert in this field any notes about the approval. This field is optional.|
|IsActive|boolean|true|none|Whether the matcher is active in the account (`true`), or not (`false`).|
|MatcherId|string|true|none|Identifies the matching entity. It can be either VTEX's matcher, or an external matcher developed by partners, for example. The `matcherId`'s value can be obtained through the [Get SKU Suggestion by ID](https://developers.vtex.com/vtex-rest-api/reference/getsuggestion) endpoint.|
|UpdatesNotificationEndpoint|string \| null|true|none|The Received SKUs module uses this endpoint to send updates about a suggestion, to the chosen Matcher.|
|hook-base-address|string|true|none|The chosen Matcher's url. It is the endpoint that the Received SKUs module calls, to send new suggestions for the Matcher's review.|

<h2 id="tocS_Product">Product</h2>
<!-- backwards compatibility -->
<a id="schemaproduct"></a>
<a id="schema_Product"></a>
<a id="tocSproduct"></a>
<a id="tocsproduct"></a>

```json
{
  "brandId": 1234567,
  "categoryId": 12,
  "description": "Description of the product, how it will appear on the marketplace.",
  "name": "Book",
  "specifications": ""
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|brandId|integer(int32)|true|none|Marketplace's Brand ID that the product belongs to, configured in the Catalog. It should be the brand chosen for the received SKU to be matched with. The brandId is already mapped through the Get Suggestions API. This field is nulled when the inserted value is 0.|
|categoryId|integer(int32)|true|none|Marketplace's Category ID that the product belongs to, configured in the Catalog. It should be the category chosen for the received SKU to be matched with. The `categoryId` is already mapped through the [Get SKU Suggestion by ID](https://developers.vtex.com/vtex-rest-api/reference/getsuggestion). You can choose to keep the same suggested `categoryID`, or overwrite it with another value in this request. This field is nulled when the inserted value is 0.|
|description|string|true|none|Product's description.|
|name|string|true|none|Name of the product that will be matched.|
|specifications|string \| null|true|none|This field is optional. Add here any product specifications or details.|

<h2 id="tocS_ProductSpecification">ProductSpecification</h2>
<!-- backwards compatibility -->
<a id="schemaproductspecification"></a>
<a id="schema_ProductSpecification"></a>
<a id="tocSproductspecification"></a>
<a id="tocsproductspecification"></a>

```json
{
  "fieldName": "Color",
  "fieldValues": [
    "Red",
    "Green"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fieldName|string|false|none|Name of the product specification field. Example: 'Fabric'.|
|fieldValues|[string]|false|none|Value of the product specification field. Example: 'Cotton'.|

<h2 id="tocS_PutselleraccountconfigRequest">PutselleraccountconfigRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputselleraccountconfigrequest"></a>
<a id="schema_PutselleraccountconfigRequest"></a>
<a id="tocSputselleraccountconfigrequest"></a>
<a id="tocsputselleraccountconfigrequest"></a>

```json
{
  "mapping": {
    "Choose size": "Size",
    "Choose type": "Type",
    "Choose voltage": "Voltage",
    "Choose volume": "Volume"
  },
  "matchFlux": "autoApprove",
  "sellerId": "seller123"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mapping|object \| null|true|none|Mapping of SKU and product Specifications. This object should be sent in the following format for all fields you wish to map:<br><br>{specificationName}:{specificationValue},<br><br>Example:<br><br>Choose voltage: Voltage,<br><br>Choose size: Size|
|matchFlux|string|true|none|This field determines the type of approval configuration applied to SKUs received  from a seller. The possible values include: <br><br>- `default` where the Matcher reviews the SKU, and approves it based on its score <br><br>- `manual` for manual approvals through the Received SKU UI or Match API <br><br>- `autoApprove` for every SKU received from a given seller to be approved automatically, regardless of the Matcher Score.|
|sellerId|string|true|none|A string that identifies the seller in the marketplace. This ID must be created by the marketplace.|

<h2 id="tocS_SaveSuggestionRequest">SaveSuggestionRequest</h2>
<!-- backwards compatibility -->
<a id="schemasavesuggestionrequest"></a>
<a id="schema_SaveSuggestionRequest"></a>
<a id="tocSsavesuggestionrequest"></a>
<a id="tocssavesuggestionrequest"></a>

```json
{
  "AvailableQuantity": 111,
  "BrandName": "Brand 1",
  "CategoryFullPath": "Category 1",
  "EAN": "EAN123",
  "Height": 1,
  "Images": [
    {
      "imageName": "Principal",
      "imageUrl": "https://i.pinimg.com/originals/2d/96/4a/2d964a6bf37d9224d0615dc85fccdd62.jpg"
    }
  ],
  "Length": 1,
  "MeasurementUnit": "un",
  "NameComplete": "My complete product name?",
  "Pricing": {
    "Currency": "BRL",
    "CurrencySymbol": "R$",
    "SalePrice": 399
  },
  "ProductDescription": "sample",
  "ProductId": "321",
  "ProductName": "Product sample",
  "ProductSpecifications": [
    {
      "fieldName": "prodspec1",
      "fieldValues": [
        "value1",
        "value2"
      ]
    }
  ],
  "RefId": "REFID123",
  "SellerId": "123",
  "SellerStockKeepingUnitId": 567,
  "SkuName": "Sku sample",
  "SkuSpecifications": [
    {
      "fieldName": "skuspec1",
      "fieldValues": [
        "value1",
        "value2"
      ]
    }
  ],
  "UnitMultiplier": 1,
  "Updated": null,
  "Weight": 1,
  "Width": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AvailableQuantity|integer(int32)|true|none|none|
|BrandName|string|true|none|Name of the brand to which this SKU belongs. It must match the brand created in the marketplace.|
|CategoryFullPath|string|true|none|Full path to the SKU's category. It should be written as {department}/{category}. For example: if the department is **Appliances** and the category is **Oven**, the full path should be 'Appliances/Oven'.|
|EAN|string|true|none|SKU reference code. Mandatory if the RefId is not informed.|
|Height|integer(decimal)|true|none|Height of the SKU.|
|Images|[[Image](#schemaimage)]|true|none|Array containing the URLs and names the SKU images.|
|Length|integer(decimal)|true|none|Length of the SKU.|
|MeasurementUnit|string|false|none|Measurement unit that should be used for this SKU. If this information doesn't apply, you should use the default value `un`.|
|Pricing|object|true|none|none|
|ProductDescription|string|true|none|Product Description containing the main information about the product (not the SKU).|
|ProductId|string|true|none|Product ID in seller's account.|
|ProductName|string|true|none|Name of the suggested product. This field has a limit of 150 characters.|
|ProductSpecifications|[[ProductSpecification](#schemaproductspecification)]|false|none|Array containing the names and values of the product specifications.|
|RefId|string|true|none|SKU reference code. Mandotory if the EAN is not informed.|
|SellerId|string|true|none|ID of the seller in the marketplace. This ID must be created by the marketplace and informed to the seller before the integration is built.|
|SellerStockKeepingUnitId|integer(int32)|false|none|ID of the SKU registered in the seller.|
|SkuName|string|true|none|Name of the suggested SKU.|
|SkuSpecifications|[[SkuSpecification](#schemaskuspecification)]|false|none|Array containing the names and values of the SKU specifications.|
|UnitMultiplier|integer(int32)|false|none|Unit multiplier for this SKU. If this information doesn't apply, you should use the default value `1`.|
|Weight|integer(decimal)|true|none|Weight of the SKU in grams.|
|Width|integer(decimal)|true|none|Width of the SKU.|

<h2 id="tocS_SaveaccountconfigRequest">SaveaccountconfigRequest</h2>
<!-- backwards compatibility -->
<a id="schemasaveaccountconfigrequest"></a>
<a id="schema_SaveaccountconfigRequest"></a>
<a id="tocSsaveaccountconfigrequest"></a>
<a id="tocssaveaccountconfigrequest"></a>

```json
{
  "MatchFlux": "AutoApprove",
  "Matchers": [
    {
      "Description": null,
      "IsActive": true,
      "MatcherId": "vtex-matcher",
      "UpdatesNotificationEndpoint": null,
      "hook-base-address": "http://simple-suggestion-matcher.vtex.com.br"
    }
  ],
  "Score": {
    "Approve": 80,
    "Reject": 30
  },
  "SpecificationsMapping": []
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MatchFlux|string|true|none|This field determines the type of approval configuration applied to SKUs received  from a seller. The possible values include: <br><br>- `default` where the Matcher reviews the SKU, and approves it based on its score <br><br>- `manual` for manual approvals through the Received SKU UI or Match API <br><br>- `autoApprove` for every SKU received from a given seller to be approved automatically, regardless of the Matcher Score.|
|Matchers|[[Matcher](#schemamatcher)]|true|none|Matchers for approving and rejecting SKUs received from sellers.|
|Score|[Score](#schemascore)|true|none|Matcher rates received SKUs by comparing the data sent by sellers to existing fields in the marketplace. The calculation of these scores determines whether the product has been: `Approved` or `Denied`.|
|SpecificationsMapping|[string]|true|none|This attribute maps product and SKU specifications.|

<h2 id="tocS_SaveautoapproveforaccountRequest">SaveautoapproveforaccountRequest</h2>
<!-- backwards compatibility -->
<a id="schemasaveautoapproveforaccountrequest"></a>
<a id="schema_SaveautoapproveforaccountRequest"></a>
<a id="tocSsaveautoapproveforaccountrequest"></a>
<a id="tocssaveautoapproveforaccountrequest"></a>

```json
{
  "Enabled": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Enabled|boolean|true|none|Insert `true` if you wish to activate the autoapprove rule for an entire marketplace account. Insert `false` if you wish to deactivate it. Be aware that once enabling the setting through this request, all received SKUs will be automatically approved on your store, regardless of the seller, or the Matcher Score.|

<h2 id="tocS_SaveautoapproveforaccountsellerRequest">SaveautoapproveforaccountsellerRequest</h2>
<!-- backwards compatibility -->
<a id="schemasaveautoapproveforaccountsellerrequest"></a>
<a id="schema_SaveautoapproveforaccountsellerRequest"></a>
<a id="tocSsaveautoapproveforaccountsellerrequest"></a>
<a id="tocssaveautoapproveforaccountsellerrequest"></a>

```json
{
  "Enabled": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Enabled|boolean|true|none|Insert `true` if you wish to activate the autoapprove rule for that specific seller account. Insert `false` if you wish to deactivate it. Be aware that once enabling the setting through this request, all SKUs received from this seller will be automatically approved on your store regardless of the Matcher Score.|

<h2 id="tocS_Score">Score</h2>
<!-- backwards compatibility -->
<a id="schemascore"></a>
<a id="schema_Score"></a>
<a id="tocSscore"></a>
<a id="tocsscore"></a>

```json
{
  "Approve": 80,
  "Reject": 30
}
```

Matcher rates received SKUs by comparing the data sent by sellers to existing fields in the marketplace. The calculation of these scores determines whether the product has been: `Approved` or `Denied`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Approve|integer(int32)|true|none|Insert in this field the desired minimum score to approve SKUs. If this field is set as 99, it means all approvals will be made manually.|
|Reject|integer(int32)|true|none|Insert in this field the desired maximum score to reject SKUs.|

<h2 id="tocS_Sku">Sku</h2>
<!-- backwards compatibility -->
<a id="schemasku"></a>
<a id="schema_Sku"></a>
<a id="tocSsku"></a>
<a id="tocssku"></a>

```json
{
  "eans": [
    "12345678901213"
  ],
  "height": 1,
  "images": [
    {
      "imagem1.jpg": "imageurl.example"
    }
  ],
  "length": 1,
  "measurementUnit": "un",
  "name": "Sku exemplo",
  "refId": null,
  "specifications": {
    "Embalagem": "3 kg"
  },
  "unitMultiplier": 1,
  "weight": 1,
  "width": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|eans|[string]|true|none|SKU reference code.|
|height|integer(int32)|true|none|Height of the SKU.|
|images|[Images](#schemaimages)|true|none|none|
|length|integer(int32)|true|none|Length of the SKU.|
|measurementUnit|string \| null|true|none|Measurement unit that should be used for this SKU. If this information doesn't apply, you should use the default value un.|
|name|string|true|none|none|
|refId|string \| null|true|none|SKU reference code.|
|specifications|[Specifications](#schemaspecifications)|true|none|none|
|unitMultiplier|integer(int32)|true|none|Unit multiplier for this SKU. If this information doesn't apply, you should use the default value 1.|
|weight|integer(int32)|true|none|Weight of the SKU.|
|width|integer(int32)|true|none|Width of the SKU.|

<h2 id="tocS_SkuSpecification">SkuSpecification</h2>
<!-- backwards compatibility -->
<a id="schemaskuspecification"></a>
<a id="schema_SkuSpecification"></a>
<a id="tocSskuspecification"></a>
<a id="tocsskuspecification"></a>

```json
{
  "fieldName": "Color",
  "fieldValues": [
    "Red",
    "Green"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fieldName|string|false|none|Name of the SKU specification field. Example: 'Color'.|
|fieldValues|[string]|false|none|Array with values of the SKU specification field. Example: 'Red'.|

<h2 id="tocS_Specifications">Specifications</h2>
<!-- backwards compatibility -->
<a id="schemaspecifications"></a>
<a id="schema_Specifications"></a>
<a id="tocSspecifications"></a>
<a id="tocsspecifications"></a>

```json
{
  "Embalagem": "3 kg"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Embalagem|string|true|none|Packaging specifications. Should include package's weight.|
