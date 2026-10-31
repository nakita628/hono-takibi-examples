<h1 id="promotions-taxes-api">Promotions &amp; Taxes API v1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.


> Check the new [Promotions onboarding guide](https://developers.vtex.com/vtex-rest-api/docs/promotions-overview). We created this guide to improve the onboarding experience for developers at VTEX. It assembles all documentation on our Developer Portal about Promotions and is organized by focusing on the developer's journey.

 The Promotions & Taxes API allows you to manage and retrieve all promotions, coupons and tax rules from your VTEX store.

 ## Index

 ### Coupons 
`POST` [Create multiple coupons](https://developers.vtex.com/vtex-rest-api/reference/post_api-rnb-pvt-multiple-coupons) 
`POST` [Create coupon](https://developers.vtex.com/vtex-rest-api/reference/post_api-rnb-pvt-coupon) 
`GET` [Get coupon by coupon code](https://developers.vtex.com/vtex-rest-api/reference/getbycouponcode) 
`GET` [Get archived coupon by coupon code](https://developers.vtex.com/vtex-rest-api/reference/getarchivedbycouponcode) 
`POST` [Archive coupon by coupon code](https://developers.vtex.com/vtex-rest-api/reference/archivebycouponcode) 
`POST` [Update coupon](https://developers.vtex.com/vtex-rest-api/reference/update) 
`GET` [Get all coupons](https://developers.vtex.com/vtex-rest-api/reference/getall) 
`POST` [Coupon Massive Generation](https://developers.vtex.com/vtex-rest-api/reference/massivegeneration) 
`GET` [Get coupon usage](https://developers.vtex.com/vtex-rest-api/reference/getusage) 
`POST` [Unarchive coupon by coupon code](https://developers.vtex.com/vtex-rest-api/reference/unarchivebycouponcode) 

### Promotions and Taxes 
`GET` [Get All Promotions](https://developers.vtex.com/vtex-rest-api/reference/getallbenefits) 
`GET` [Get All Taxes](https://developers.vtex.com/vtex-rest-api/reference/getalltaxes) 
`GET` [Get Promotion or Tax By ID](https://developers.vtex.com/vtex-rest-api/reference/getcalculatorconfigurationbyid) 
`POST` [Create or Update Promotion or Tax](https://developers.vtex.com/vtex-rest-api/reference/createorupdatecalculatorconfiguration) 
`POST` [Create Multiple SKU Promotion](https://developers.vtex.com/vtex-rest-api/reference/post_api-rnb-pvt-import-calculatorconfiguration) 
`PUT` [Update Multiple SKU Promotion](https://developers.vtex.com/vtex-rest-api/reference/put_api-rnb-pvt-import-calculatorconfiguration-promotionid) 
`POST` [Archive Promotion or Tax](https://developers.vtex.com/vtex-rest-api/reference/archivepromotion-1) 
`POST` [Unarchive Promotion or Tax](https://developers.vtex.com/vtex-rest-api/reference/unarchivepromotion-1) 
`GET` [List archived Promotions](https://developers.vtex.com/vtex-rest-api/reference/getarchivedpromotions) 
`GET` [List archived Taxes](https://developers.vtex.com/vtex-rest-api/reference/getarchivedtaxes) 


### Campaign Audiences 
`GET` [Get campaign audience configuration](https://developers.vtex.com/vtex-rest-api/reference/getcampaignconfiguration) 
`POST` [Create campaign audience](https://developers.vtex.com/vtex-rest-api/reference/setcampaignconfiguration)

Base URLs:

* <a href="https://vtex.local">https://vtex.local</a>

* <a href="https://{accountName}.{environment}.com.br">https://{accountName}.{environment}.com.br</a>

# Authentication

* API Key (appKey)
    - Parameter Name: **X-VTEX-API-AppKey**, in: header.

* API Key (appToken)
    - Parameter Name: **X-VTEX-API-AppToken**, in: header.

<h1 id="promotions-taxes-api-promotions-and-taxes">Promotions and Taxes</h1>

## List Archived Promotions

<a id="opIdGetArchivedPromotions"></a>

> Code samples

```bash
curl https://example.com/api/rnb/pvt/archive/benefits/calculatorConfiguration \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/rnb/pvt/archive/benefits/calculatorConfiguration`

Lists all archived promotions.

<h3 id="list-archived-promotions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "Campaigns": [],
      "activateGiftsMultiplier": false,
      "areSalesChannelIdsExclusive": false,
      "beginDate": "2021-04-15T03:00:00Z",
      "description": "",
      "endDate": "2021-04-16T02:30:00Z",
      "hasMaxPricePerItem": false,
      "idCalculatorConfiguration": "05558233-b415-4f2e-9822-ebdb3918623b",
      "idsSalesChannel": [],
      "isActive": false,
      "isArchived": true,
      "isTax": false,
      "lastModifiedUtc": "2021-04-30T17:56:29.7157634Z",
      "maxUsage": 0,
      "name": "Promoção Progressiva",
      "percentualTax": 0,
      "scope": {
        "allCatalog": true,
        "brands": 0,
        "brandsAreInclusive": true,
        "categories": 0,
        "categoriesAreInclusive": true,
        "collections": 0,
        "collectionsAreInclusive": true,
        "products": 0,
        "productsAreInclusive": true,
        "sellers": 0,
        "sellersAreInclusive": true,
        "skus": 0,
        "skusAreInclusive": true
      },
      "status": "inactive",
      "type": "progressive",
      "utmCampain": "",
      "utmSource": "",
      "utmiCampaign": ""
    }
  ]
}
```

<h3 id="list-archived-promotions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="list-archived-promotions-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[GetPromotions](#schemagetpromotions)|false|none|Array with promotions.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Archive Promotion or Tax

<a id="opIdArchivePromotion"></a>

> Code samples

```bash
curl https://example.com/api/rnb/pvt/archive/calculatorConfiguration/d8a1cd2e-b667-4054-b3ae-b79124c7218e \
  -X POST \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`POST /api/rnb/pvt/archive/calculatorConfiguration/{idCalculatorConfiguration}`

Archives a Promotion or Tax by its ID.

<h3 id="archive-promotion-or-tax-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|
|idCalculatorConfiguration|path|string|true|Promotion ID or tax ID.|

<h3 id="archive-promotion-or-tax-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## List Archived Taxes

<a id="opIdGetArchivedTaxes"></a>

> Code samples

```bash
curl https://example.com/api/rnb/pvt/archive/taxes/calculatorConfiguration \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/rnb/pvt/archive/taxes/calculatorConfiguration`

Lists all archived taxes.

<h3 id="list-archived-taxes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "Campaigns": [],
      "activateGiftsMultiplier": false,
      "areSalesChannelIdsExclusive": false,
      "beginDate": "2022-05-09T03:00:00Z",
      "description": "My description",
      "endDate": "2022-06-01T02:30:00Z",
      "hasMaxPricePerItem": false,
      "idCalculatorConfiguration": "90f4affc-fea0-424c-a7a7-c69aec7bbdc8",
      "idsSalesChannel": [
        "1"
      ],
      "isActive": false,
      "isArchived": true,
      "isTax": true,
      "lastModifiedUtc": "2022-05-16T19:43:06.1801742Z",
      "maxUsage": 0,
      "name": "Test Tax",
      "percentualTax": 10,
      "scope": {
        "allCatalog": false,
        "brands": 1,
        "brandsAreInclusive": true,
        "categories": 1,
        "categoriesAreInclusive": true,
        "collections": 1,
        "collectionsAreInclusive": true,
        "products": 1,
        "productsAreInclusive": true,
        "sellers": 0,
        "sellersAreInclusive": false,
        "skus": 1,
        "skusAreInclusive": true
      },
      "status": "inactive",
      "type": "tax",
      "utmCampain": "",
      "utmSource": "",
      "utmiCampaign": ""
    }
  ]
}
```

<h3 id="list-archived-taxes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="list-archived-taxes-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[GetTaxes](#schemagettaxes)|false|none|Array with taxes.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get All Promotions

<a id="opIdGetAllBenefits"></a>

> Code samples

```bash
curl https://example.com/api/rnb/pvt/benefits/calculatorconfiguration \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/rnb/pvt/benefits/calculatorconfiguration`

Retrieves all promotions from an account. 

> 📘 Onboarding guide 
>
> Check the new [Promotions onboarding guide](https://developers.vtex.com/vtex-rest-api/docs/promotions-overview). We created this guide to improve the onboarding experience for developers at VTEX. It assembles all documentation on our Developer Portal about the Promotions and is organized by focusing on the developer's journey.



<h3 id="get-all-promotions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|

> Example responses

> 200 Response

```json
{
  "archivedItems": [],
  "disabledItems": [],
  "items": [
    {
      "Campaigns": [],
      "activateGiftsMultiplier": false,
      "areSalesChannelIdsExclusive": false,
      "beginDate": "2020-05-01T18:47:15.89Z",
      "conditionsIds": [
        "372e1868-2c0e-4437-be45-1ef8c9cab735"
      ],
      "description": "Promotion for Social Seller",
      "hasMaxPricePerItem": false,
      "idCalculatorConfiguration": "d8a1cd2e-b667-4054-b3ae-b79124c7218e",
      "idsSalesChannel": [],
      "isActive": true,
      "isArchived": false,
      "isTax": false,
      "lastModifiedUtc": "2021-09-17T18:13:16.2896414Z",
      "maxUsage": 0,
      "name": "Promoção Social Seller",
      "percentualTax": 0,
      "scope": {
        "allCatalog": true,
        "brands": 0,
        "brandsAreInclusive": false,
        "categories": 0,
        "categoriesAreInclusive": false,
        "collections": 0,
        "collectionsAreInclusive": false,
        "products": 0,
        "productsAreInclusive": false,
        "sellers": 0,
        "sellersAreInclusive": false,
        "skus": 0,
        "skusAreInclusive": true
      },
      "status": "active",
      "type": "regular",
      "utmCampain": "georgeTest",
      "utmSource": "georgeSource",
      "utmiCampaign": ""
    },
    {
      "Campaigns": [],
      "activateGiftsMultiplier": false,
      "areSalesChannelIdsExclusive": false,
      "beginDate": "2009-12-31T02:00:00Z",
      "description": "",
      "hasMaxPricePerItem": false,
      "idCalculatorConfiguration": "7c946926-7815-4446-9428-83bd577a9135",
      "idsSalesChannel": [],
      "isActive": true,
      "isArchived": false,
      "isTax": false,
      "lastModifiedUtc": "2021-11-12T16:58:30.2553053Z",
      "maxUsage": 0,
      "name": "Progressive Discount",
      "percentualTax": 0,
      "scope": {
        "allCatalog": true,
        "brands": 0,
        "brandsAreInclusive": true,
        "categories": 0,
        "categoriesAreInclusive": true,
        "collections": 0,
        "collectionsAreInclusive": true,
        "products": 0,
        "productsAreInclusive": true,
        "sellers": 0,
        "sellersAreInclusive": true,
        "skus": 0,
        "skusAreInclusive": true
      },
      "status": "active",
      "type": "progressive",
      "utmCampain": "",
      "utmSource": "",
      "utmiCampaign": ""
    }
  ],
  "limitConfiguration": {
    "activesCount": 4,
    "limit": 100
  },
  "limitConfigurationMaxPrice": {
    "activesCount": 0,
    "limit": 10
  }
}
```

<h3 id="get-all-promotions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-all-promotions-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|archivedItems|[string]|false|none|Archived items.|
|disabledItems|[object]|false|none|Disabled items.|
|items|[GetPromotions](#schemagetpromotions)|false|none|Array with promotions.|
|limitConfiguration|object|false|none|Limit configuration.|
|» activesCount|integer|false|none|Actives count.|
|» limit|integer|false|none|Limit.|
|limitConfigurationMaxPrice|object|false|none|Limit configuration max price.|
|» activesCount|integer|false|none|Actives count.|
|» limit|integer|false|none|Limit.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Create or Update Promotion or Tax

<a id="opIdCreateOrUpdateCalculatorConfiguration"></a>

> Code samples

```bash
curl https://example.com/api/rnb/pvt/calculatorconfiguration \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "absoluteShippingDiscountValue": 0,
    "accumulateWithManualPrice": false,
    "activateGiftsMultiplier": false,
    "activeDaysOfWeek": [],
    "affiliates": [],
    "applyToAllShippings": false,
    "areSalesChannelIdsExclusive": false,
    "beginDateUtc": "2020-05-01T18:47:15.89Z",
    "brands": [],
    "brandsAreInclusive": false,
    "campaigns": [],
    "cardIssuers": [],
    "categories": [],
    "categoriesAreInclusive": false,
    "clusterExpressions": [],
    "collections": [],
    "collections1BuyTogether": [],
    "collections2BuyTogether": [],
    "collectionsIsInclusive": false,
    "compareListPriceAndPrice": false,
    "conditionsIds": [
      "372e1868-2c0e-4437-be45-1ef8c9cab735"
    ],
    "coupon": [],
    "cumulative": false,
    "daysAgoOfPurchases": 0,
    "description": "Promotion for Social Seller",
    "disableDeal": false,
    "discountType": "percentual",
    "enableBuyTogetherPerSku": false,
    "firstBuyIsProfileOptimistic": false,
    "giftListTypes": [],
    "idCalculatorConfiguration": "d8a1cd2e-b667-4054-b3ae-b79124c7218e",
    "idSellerIsInclusive": false,
    "idsSalesChannel": [],
    "installment": 0,
    "isActive": true,
    "isArchived": false,
    "isDifferentListPriceAndPrice": false,
    "isFeatured": false,
    "isFirstBuy": false,
    "isMinMaxInstallments": false,
    "isSlaSelected": false,
    "itemMaxPrice": 0,
    "itemMinPrice": 0,
    "lastModified": "2021-09-17T18:13:16.2896414Z",
    "listSku1BuyTogether": [],
    "listSku2BuyTogether": [],
    "marketingTags": [],
    "marketingTagsAreNotInclusive": false,
    "maxInstallment": 0,
    "maxNumberOfAffectedItems": 0,
    "maxNumberOfAffectedItemsGroupKey": "perCart",
    "maxPricesPerItems": [],
    "maxUsage": 0,
    "maxUsagePerClient": 0,
    "maximumUnitPriceDiscount": 0,
    "merchants": [],
    "minInstallment": 0,
    "minimumQuantityBuyTogether": 0,
    "multipleUsePerClient": false,
    "name": "Promoção Social Seller",
    "newOffset": -3,
    "nominalDiscountValue": 0,
    "nominalRewardValue": 0,
    "nominalShippingDiscountValue": 0,
    "nominalTax": 0,
    "offset": -3,
    "orderStatusRewardValue": "invoiced",
    "origin": "marketplace",
    "paymentsMethods": [],
    "paymentsRules": [],
    "percentualDiscountValue": 10,
    "percentualDiscountValueList": [],
    "percentualDiscountValueList1": 0,
    "percentualDiscountValueList2": 0,
    "percentualRewardValue": 0,
    "percentualShippingDiscountValue": 0,
    "percentualTax": 0,
    "products": [],
    "productsAreInclusive": false,
    "productsSpecifications": [],
    "quantityToAffectBuyTogether": 0,
    "rebatePercentualDiscountValue": 0,
    "restrictionsBins": [],
    "shippingPercentualTax": 0,
    "shouldDistributeDiscountAmongMatchedItems": false,
    "skus": [],
    "skusAreInclusive": true,
    "skusGift": {
      "quantitySelectable": 0
    },
    "slasIds": [],
    "stores": [],
    "storesAreInclusive": false,
    "totalValueCeling": 0,
    "totalValueFloor": 0,
    "totalValueIncludeAllItems": false,
    "totalValueMode": "IncludeMatchedItems",
    "totalValuePurchase": 0,
    "type": "regular",
    "useNewProgressiveAlgorithm": false,
    "utmCampaign": "georgeTest",
    "utmSource": "georgeSource",
    "zipCodeRanges": []
  }'
```

`POST /api/rnb/pvt/calculatorconfiguration`

Creates or updates a specific Promotion by its Promotion ID or a specific Tax by its Tax ID.

> Body parameter

```json
{
  "absoluteShippingDiscountValue": 0,
  "accumulateWithManualPrice": false,
  "activateGiftsMultiplier": false,
  "activeDaysOfWeek": [],
  "affiliates": [],
  "applyToAllShippings": false,
  "areSalesChannelIdsExclusive": false,
  "beginDateUtc": "2020-05-01T18:47:15.89Z",
  "brands": [],
  "brandsAreInclusive": false,
  "campaigns": [],
  "cardIssuers": [],
  "categories": [],
  "categoriesAreInclusive": false,
  "clusterExpressions": [],
  "collections": [],
  "collections1BuyTogether": [],
  "collections2BuyTogether": [],
  "collectionsIsInclusive": false,
  "compareListPriceAndPrice": false,
  "conditionsIds": [
    "372e1868-2c0e-4437-be45-1ef8c9cab735"
  ],
  "coupon": [],
  "cumulative": false,
  "daysAgoOfPurchases": 0,
  "description": "Promotion for Social Seller",
  "disableDeal": false,
  "discountType": "percentual",
  "enableBuyTogetherPerSku": false,
  "firstBuyIsProfileOptimistic": false,
  "giftListTypes": [],
  "idCalculatorConfiguration": "d8a1cd2e-b667-4054-b3ae-b79124c7218e",
  "idSellerIsInclusive": false,
  "idsSalesChannel": [],
  "installment": 0,
  "isActive": true,
  "isArchived": false,
  "isDifferentListPriceAndPrice": false,
  "isFeatured": false,
  "isFirstBuy": false,
  "isMinMaxInstallments": false,
  "isSlaSelected": false,
  "itemMaxPrice": 0,
  "itemMinPrice": 0,
  "lastModified": "2021-09-17T18:13:16.2896414Z",
  "listSku1BuyTogether": [],
  "listSku2BuyTogether": [],
  "marketingTags": [],
  "marketingTagsAreNotInclusive": false,
  "maxInstallment": 0,
  "maxNumberOfAffectedItems": 0,
  "maxNumberOfAffectedItemsGroupKey": "perCart",
  "maxPricesPerItems": [],
  "maxUsage": 0,
  "maxUsagePerClient": 0,
  "maximumUnitPriceDiscount": 0,
  "merchants": [],
  "minInstallment": 0,
  "minimumQuantityBuyTogether": 0,
  "multipleUsePerClient": false,
  "name": "Promoção Social Seller",
  "newOffset": -3,
  "nominalDiscountValue": 0,
  "nominalRewardValue": 0,
  "nominalShippingDiscountValue": 0,
  "nominalTax": 0,
  "offset": -3,
  "orderStatusRewardValue": "invoiced",
  "origin": "marketplace",
  "paymentsMethods": [],
  "paymentsRules": [],
  "percentualDiscountValue": 10,
  "percentualDiscountValueList": [],
  "percentualDiscountValueList1": 0,
  "percentualDiscountValueList2": 0,
  "percentualRewardValue": 0,
  "percentualShippingDiscountValue": 0,
  "percentualTax": 0,
  "products": [],
  "productsAreInclusive": false,
  "productsSpecifications": [],
  "quantityToAffectBuyTogether": 0,
  "rebatePercentualDiscountValue": 0,
  "restrictionsBins": [],
  "shippingPercentualTax": 0,
  "shouldDistributeDiscountAmongMatchedItems": false,
  "skus": [],
  "skusAreInclusive": true,
  "skusGift": {
    "quantitySelectable": 0
  },
  "slasIds": [],
  "stores": [],
  "storesAreInclusive": false,
  "totalValueCeling": 0,
  "totalValueFloor": 0,
  "totalValueIncludeAllItems": false,
  "totalValueMode": "IncludeMatchedItems",
  "totalValuePurchase": 0,
  "type": "regular",
  "useNewProgressiveAlgorithm": false,
  "utmCampaign": "georgeTest",
  "utmSource": "georgeSource",
  "zipCodeRanges": []
}
```

<h3 id="create-or-update-promotion-or-tax-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|
|body|body|object|true|none|
|» absoluteShippingDiscountValue|body|number|false|Maximum shipping value.|
|» accumulateWithManualPrice|body|boolean|false|Allows the promotion to apply to products whose prices have been manually added by a call-center operator.|
|» activateGiftsMultiplier|body|boolean|false|If set as `true`, it activates gifts Multiplier.|
|» activeDaysOfWeek|body|[string]|false|Defines which days of the week the Promotion or Tax will applied.|
|» affiliates|body|[object]|false|Marketplace order identifier. The discount will apply to selected affiliates.|
|» » id|body|string|false|Affiliate ID.|
|» » name|body|string|false|Affiliate Name.|
|» applyToAllShippings|body|boolean|false|Promotion or Tax will be applied to all kind of shipping.|
|» areSalesChannelIdsExclusive|body|boolean|false|If set to `false`, this Promotion or Tax will be applied to any trade policies present on the `idsSalesChannel` field. If set to `true`, trade policies present on that field will make this Promotion or Tax not to be applied.|
|» beginDateUtc|body|string|false|Promotion or Tax Begin Date (UTC).|
|» brands|body|[object]|false|Object composed by the brands that will activate or deactivate the Promotion or Tax.|
|» » id|body|string|false|Brand ID.|
|» » name|body|string|false|Brand Name.|
|» brandsAreInclusive|body|boolean|false|If set to `true`, this Promotion or Tax will be applied to any brand present on the `brands` field. If set to `false`, brands present on that field will make this Promotion or Tax not to be applied.|
|» campaigns|body|[object]|false|Campaign Audiences that activate this Promotion or Tax.|
|» cardIssuers|body|[object]|false|**Deprecated.**|
|» categories|body|[object]|false|Object composed by the categories that will activate or deactivate the Promotion or Tax.|
|» » id|body|string|false|Category ID.|
|» » name|body|string|false|Category Name.|
|» categoriesAreInclusive|body|boolean|false|If set to `true`, this Promotion or Tax will be applied to any category present on the `categories` field. If set to `false`, categories present on that field will make this Promotion or Tax not to be applied.|
|» clusterExpressions|body|[string]|false|An expression to use with clusters.|
|» collections|body|[object]|false|Object composed by the collections that will activate or deactivate the Promotion or Tax.|
|» » id|body|string|false|Collection ID.|
|» » name|body|string|false|Collection Name.|
|» collections1BuyTogether|body|[string]|false|Collections that will generate the Promotion, type **Buy Together**, **More for less**, **Progressive Discount**, **Buy One Get One**.|
|» collections2BuyTogether|body|[object]|false|**Deprecated.**|
|» collectionsIsInclusive|body|boolean|false|If set to `true`, this Promotion or Tax will be applied to any collection present on the `collections` field. If set to `false`, collections present on that field will make this Promotion or Tax not to be applied.|
|» compareListPriceAndPrice|body|boolean|false|If the **List Price** and **Price** are the same.|
|» conditionsIds|body|[string]|false|Array with conditions IDs.|
|» coupon|body|[object]|false|**Deprecated.**|
|» cumulative|body|boolean|false|Defines if a Promotion or Tax can accumulate with another one. (`true`) or not (`false`).|
|» daysAgoOfPurchases|body|integer|false|Number of days that are considered to add the purchase history.|
|» description|body|string|false|Internal description of the Promotion or Tax.|
|» disableDeal|body|boolean|false|**Deprecated.**|
|» discountType|body|string|false|The type of discount that will apply to the promotion.|
|» enableBuyTogetherPerSku|body|boolean|false|Enable **Buy Together** per SKU.|
|» endDateUtc|body|string|false|Promotion or Tax End Date (UTC).|
|» firstBuyIsProfileOptimistic|body|boolean|false|Applies the discount even if the user is not logged.|
|» giftListTypes|body|[string]|false|Gifts List Type.|
|» idCalculatorConfiguration|body|string|false|Promotion ID or Tax ID.|
|» idSeller|body|string|false|Seller Name.|
|» idSellerIsInclusive|body|boolean|false|If set to `true`, this Promotion or Tax will be applied to any seller present on the `idSeller` field. If set to `false`, sellers present on that field will make this Promotion or Tax not to be applied.|
|» idsSalesChannel|body|[string]|false|List of Trade Policies that activate this Promotion or Tax.|
|» installment|body|integer|false|**Deprecated.**|
|» isActive|body|boolean|false|If set as `true` the Promotion or Tax is activated. If set as `false` the Promotion or Tax is deactivated.|
|» isArchived|body|boolean|false|If set as `true` the Promotion or Tax is archived. If set as `false` the Promotion or Tax is not archived.|
|» isDifferentListPriceAndPrice|body|boolean|false|Applies the Promotion or Tax only if the list price and price is different.|
|» isFeatured|body|boolean|false|Insert a flag with the promotion name used in the product's window display and page.|
|» isFirstBuy|body|boolean|false|Applies the discount only if it's a first buy.|
|» isMinMaxInstallments|body|boolean|false|Set if the Promotion or Tax will be applied considering a minimum and maximum values for installments.|
|» isSlaSelected|body|boolean|false|Applies selected discount only when one of the defined shipping method is selected by the customer.|
|» itemMaxPrice|body|number|false|Maximum price of the item.|
|» itemMinPrice|body|number|false|Minimum price of the item.|
|» lastModified|body|string|false|Date when the Promotion or Tax was last modified.|
|» listSku1BuyTogether|body|[object]|false|SKU first list for the promotion **Buy Together**.|
|» listSku2BuyTogether|body|[object]|false|SKU second list for the promotion **Buy Together**.|
|» marketingTags|body|[string]|false|Promotion or Tax Marketing tags.|
|» marketingTagsAreNotInclusive|body|boolean|false|If set to `false`, this Promotion or Tax will be applied to any marketing tag present on the `marketingTags` field. If set to `true`, marketing tags present on that field will make this Promotion or Tax not to be applied.|
|» maxInstallment|body|integer|false|Maximum value for installment.|
|» maxNumberOfAffectedItems|body|integer|false|The maximum number of affected items for a promotion.|
|» maxNumberOfAffectedItemsGroupKey|body|string|false|The maximum number of affected items by group key for a promotion.|
|» maxPricesPerItems|body|[object]|false|**Deprecated.**|
|» maxUsage|body|integer|false|Defines how many times the Promotion or Tax can be used.|
|» maxUsagePerClient|body|integer|false|Defines if the promotion can be used multiple times per client.|
|» maximumUnitPriceDiscount|body|number|false|The maximum price for each item of the purchase will be the price set up.|
|» merchants|body|[object]|false|**Deprecated.**|
|» minInstallment|body|integer|false|Minimum value for installment.|
|» minimumQuantityBuyTogether|body|integer|false|Minimum quantity for **Buy Together** promotion.|
|» multipleUsePerClient|body|boolean|false|Defines if the promotion can be used multiple times per client.|
|» name|body|string|false|Promotion name or Tax name.|
|» newOffset|body|number|false|New time offset from UTC in seconds.|
|» nominalDiscountValue|body|number|false|Exact discount to be applied for the total purchase value.|
|» nominalRewardValue|body|number|false|Nominal value for rewards program.|
|» nominalShippingDiscountValue|body|number|false|Exact discount to be applied for the shipping value.|
|» nominalTax|body|number|false|Nominal Tax.|
|» offset|body|integer|false|Time offset from UTC in seconds.|
|» orderStatusRewardValue|body|string|false|Order status reward value.|
|» origin|body|string|false|Origin of the Promotion or Tax, `marketplace` or `Fulfillment`.  Read [Difference between orders with marketplace and fulfillment sources](https://help.vtex.com/en/tutorial/what-are-orders-with-marketplace-source-and-orders-with-fulfillment-source--6eVYrmUAwMOeKICU2KuG06) for more information.|
|» paymentsMethods|body|[object]|false|Array composed by all the Payments Methods that activate this Promotion or Tax.|
|» » id|body|string|false|Payment Method ID.|
|» » name|body|string|false|Payment Method Name.|
|» paymentsRules|body|[object]|false|**Deprecated.**|
|» percentualDiscountValue|body|number|false|Percentage discount to be applied for total purchase value.|
|» percentualDiscountValueList|body|[number]|false|Percentual discount value list.|
|» percentualDiscountValueList1|body|number|false|Valid discounts for the SKUs in `listSku1BuyTogether`, discount list used for Buy Together Promotions.|
|» percentualDiscountValueList2|body|number|false|Equivalent to `percentualDiscountValueList1`.|
|» percentualRewardValue|body|number|false|Percentage value for rewards program.|
|» percentualShippingDiscountValue|body|number|false|Percentage discount to be applied for shipping value.|
|» percentualTax|body|number|false|Percentual Tax over purchase total value.|
|» products|body|[object]|false|Object composed by the products that will activate or deactivate the Promotion or Tax.|
|» » id|body|string|false|Product ID.|
|» » name|body|string|false|Product Name.|
|» productsAreInclusive|body|boolean|false|If set to `true`, this Promotion or Tax will be applied to any product present on the `products` field. If set to `false`, products present on that field will make this Promotion or Tax not to be applied.|
|» productsSpecifications|body|[object]|false|**Deprecated.**|
|» quantityToAffectBuyTogether|body|integer|false|Quantity to affect **Buy Together** promotion.|
|» rebatePercentualDiscountValue|body|number|false|Percentual Shipping Discount Value.|
|» restrictionsBins|body|[string]|false|The discount will be granted if the card's BIN is given.|
|» shippingPercentualTax|body|number|false|Shipping Percentual Tax over purchase total value.|
|» shouldDistributeDiscountAmongMatchedItems|body|boolean|false|Should distribute discount among matched items.|
|» skus|body|[object]|false|Object composed by the SKUs that will activate or deactivate the Promotion or Tax.|
|» » id|body|string|false|SKU ID.|
|» » name|body|string|false|SKU Name.|
|» skusAreInclusive|body|boolean|false|If set to `true`, this Promotion or Tax will be applied to any SKU present on the `skus` field. If set to `false`, SKUs present on that field will make this Promotion or Tax not to be applied.|
|» skusGift|body|object|false|SKU Gift Object. Total discount on the product value set as a gift.|
|» » gifts|body|[object]|false|Array with SKU Gifts IDs.|
|» » quantitySelectable|body|integer|false|Quantity of SKU Gifts.|
|» slasIds|body|[string]|false|The discount will be granted if the shipping method is the same as the one given.|
|» stores|body|[object]|false|**Deprecated.**|
|» storesAreInclusive|body|boolean|false|**Deprecated.**|
|» totalValueCeling|body|number|false|Maximum chart value to activate the Promotion or Tax.|
|» totalValueFloor|body|number|false|Minimum chart value to activate the Promotion or Tax.|
|» totalValueIncludeAllItems|body|boolean|false|**Deprecated.**|
|» totalValueMode|body|string|false|Defines if products that already are receiving a promotion will be considered on the chart total value. There are three options available: `IncludeMatchedItems`, `ExcludeMatchedItems`, `AllItems`.|
|» totalValuePurchase|body|number|false|Total value a client must have in past orders to activate the Promotion or Tax.|
|» type|body|string|false|Defines what is the type of the promotion or indicates if it is a tax. Possible values: `regular` ([Regular Promotion](https://help.vtex.com/tutorial/regular-promotion--tutorials_327)), `combo` ([Buy Together](https://help.vtex.com/en/tutorial/buy-together--tutorials_323)), `forThePriceOf` ([More for Less](https://help.vtex.com/en/tutorial/creating-a-more-for-less-promotion--tutorials_325)), `progressive` ([Progressive Discount](https://help.vtex.com/en/tutorial/progressive-discount--tutorials_324)), `buyAndWin` ([Buy One Get One](https://help.vtex.com/en/tutorial/buy-one-get-one--tutorials_322)), `maxPricePerItem` (Deprecated), `campaign` ([Campaign Promotion](https://help.vtex.com/en/tutorial/campaign-promotion--1ChYXhK2AQGuS6wAqS8Ume)), `tax` (Tax), `multipleEffects` (Multiple Effects).|
|» useNewProgressiveAlgorithm|body|boolean|false|Use new progressive algorithm.|
|» utmCampaign|body|string|false|Coupon utmCampaign code.|
|» utmSource|body|string|false|Coupon utmSource code.|
|» zipCodeRanges|body|[object]|false|Range of the zip code that applies the promotion.|
|» » inclusive|body|boolean|false|Defines if the zip code applies the promotion.|

> Example responses

> 200 Response

```json
{
  "absoluteShippingDiscountValue": 0,
  "accumulateWithManualPrice": false,
  "activateGiftsMultiplier": false,
  "activeDaysOfWeek": [],
  "affiliates": [],
  "applyToAllShippings": false,
  "areSalesChannelIdsExclusive": false,
  "beginDateUtc": "2020-05-01T18:47:15.89Z",
  "brands": [],
  "brandsAreInclusive": false,
  "campaigns": [],
  "cardIssuers": [],
  "categories": [],
  "categoriesAreInclusive": false,
  "clusterExpressions": [],
  "collections": [],
  "collections1BuyTogether": [],
  "collections2BuyTogether": [],
  "collectionsIsInclusive": false,
  "compareListPriceAndPrice": false,
  "conditionsIds": [
    "372e1868-2c0e-4437-be45-1ef8c9cab735"
  ],
  "coupon": [],
  "cumulative": false,
  "daysAgoOfPurchases": 0,
  "disableDeal": false,
  "discountType": "percentual",
  "enableBuyTogetherPerSku": false,
  "firstBuyIsProfileOptimistic": false,
  "giftListTypes": [],
  "idCalculatorConfiguration": "d8a1cd2e-b667-4054-b3ae-b79124c7218e",
  "idSellerIsInclusive": false,
  "idsSalesChannel": [],
  "installment": 0,
  "isActive": true,
  "isArchived": false,
  "isDifferentListPriceAndPrice": false,
  "isFeatured": false,
  "isFirstBuy": false,
  "isMinMaxInstallments": false,
  "isSlaSelected": false,
  "itemMaxPrice": 0,
  "itemMinPrice": 0,
  "lastModified": "2021-02-23T20:58:38.7963862Z",
  "listSku1BuyTogether": [],
  "listSku2BuyTogether": [],
  "marketingTags": [],
  "marketingTagsAreNotInclusive": false,
  "maxInstallment": 0,
  "maxNumberOfAffectedItems": 0,
  "maxNumberOfAffectedItemsGroupKey": "perCart",
  "maxPricesPerItems": [],
  "maxUsage": 0,
  "maxUsagePerClient": 0,
  "maximumUnitPriceDiscount": 0,
  "merchants": [],
  "minInstallment": 0,
  "minimumQuantityBuyTogether": 0,
  "multipleUsePerClient": false,
  "name": "Promoção Social Seller",
  "newOffset": -3,
  "nominalDiscountValue": 0,
  "nominalRewardValue": 0,
  "nominalShippingDiscountValue": 0,
  "nominalTax": 0,
  "offset": -3,
  "orderStatusRewardValue": "invoiced",
  "origin": "marketplace",
  "paymentsMethods": [
    {
      "id": "202",
      "name": "Dinheiro (202)"
    },
    {
      "id": "2",
      "name": "Visa (2)"
    }
  ],
  "paymentsRules": [],
  "percentualDiscountValue": 10,
  "percentualDiscountValueList": [],
  "percentualDiscountValueList1": 0,
  "percentualDiscountValueList2": 0,
  "percentualRewardValue": 0,
  "percentualShippingDiscountValue": 0,
  "percentualTax": 0,
  "products": [],
  "productsAreInclusive": false,
  "productsSpecifications": [],
  "quantityToAffectBuyTogether": 0,
  "rebatePercentualDiscountValue": 0,
  "restrictionsBins": [],
  "shippingPercentualTax": 0,
  "shouldDistributeDiscountAmongMatchedItems": false,
  "skus": [],
  "skusAreInclusive": true,
  "skusGift": {
    "quantitySelectable": 0
  },
  "slasIds": [],
  "stores": [],
  "storesAreInclusive": false,
  "totalValueCeling": 0,
  "totalValueFloor": 0,
  "totalValueIncludeAllItems": false,
  "totalValueMode": "IncludeMatchedItems",
  "totalValuePurchase": 0,
  "type": "regular",
  "useNewProgressiveAlgorithm": false,
  "utmCampaign": "georgeTest",
  "utmSource": "georgeSource",
  "zipCodeRanges": []
}
```

<h3 id="create-or-update-promotion-or-tax-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="create-or-update-promotion-or-tax-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|absoluteShippingDiscountValue|number|false|none|Maximum shipping value.|
|accumulateWithManualPrice|boolean|false|none|Allows the promotion to apply to products whose prices have been manually added by a call-center operator.|
|activateGiftsMultiplier|boolean|false|none|If set as `true`, it activates gifts Multiplier.|
|activeDaysOfWeek|[string]|false|none|Defines which days of the week the promotion will applied.|
|affiliates|[object]|false|none|Marketplace order identifier. The discount will apply to selected affiliates.|
|» id|string|false|none|Affiliate ID.|
|» name|string|false|none|Affiliate Name.|
|applyToAllShippings|boolean|false|none|Promotion will be applied to all kind of shipping.|
|areSalesChannelIdsExclusive|boolean|false|none|If set to `false`, this promotion will be applied to any trade policies present on the `idsSalesChannel` field. If set to `true`, trade policies present on that field will make this promotion not to be applied.|
|beginDateUtc|string|false|none|Promotion Begin Date (UTC).|
|brands|[object]|false|none|Object composed by the brands that will activate or deactivate the promotion.|
|» id|string|false|none|Brand ID.|
|» name|string|false|none|Brand Name.|
|brandsAreInclusive|boolean|false|none|If set to `true`, this promotion will be applied to any brand present on the `brands` field. If set to `false`, brands present on that field will make this promotion not to be applied.|
|campaigns|[object]|false|none|Campaign Audiences that activate this promotion.|
|cardIssuers|[object]|false|none|**Deprecated.**|
|categories|[object]|false|none|Object composed by the categories that will activate or deactivate the promotion.|
|» id|string|false|none|Category ID.|
|» name|string|false|none|Category Name.|
|categoriesAreInclusive|boolean|false|none|If set to `true`, this promotion will be applied to any category present on the `categories` field. If set to `false`, categories present on that field will make this promotion not to be applied.|
|clusterExpressions|[string]|false|none|An expression to use with clusters.|
|collections|[object]|false|none|Object composed by the collections that will activate or deactivate the promotion.|
|» id|string|false|none|Collection ID.|
|» name|string|false|none|Collection Name.|
|collections1BuyTogether|[string]|false|none|Collections that will generate the promotion, type **Buy Together**, **More for less**, **Progressive Discount**, **Buy One Get One**.|
|collections2BuyTogether|[object]|false|none|**Deprecated.**|
|collectionsIsInclusive|boolean|false|none|If set to `true`, this promotion will be applied to any collection present on the `collections` field. If set to `false`, collections present on that field will make this promotion not to be applied.|
|compareListPriceAndPrice|boolean|false|none|If the **List Price** and **Price** are the same.|
|conditionsIds|[string]|false|none|Array with conditions IDs.|
|coupon|[object]|false|none|**Deprecated.**|
|cumulative|boolean|false|none|Defines if a promotion can accumulate with another one. (`true`) or not (`false`).|
|daysAgoOfPurchases|integer|false|none|Number of days that are considered to add the purchase history.|
|description|string|false|none|Promotion internal description.|
|disableDeal|boolean|false|none|**Deprecated.**|
|discountType|string|false|none|The type of discount that will apply to the promotion.|
|enableBuyTogetherPerSku|boolean|false|none|Enable **Buy Together** per SKU.|
|endDateUtc|string|false|none|Promotion End Date (UTC).|
|firstBuyIsProfileOptimistic|boolean|false|none|Applies the discount even if the user is not logged.|
|giftListTypes|[string]|false|none|Gifts List Type.|
|idCalculatorConfiguration|string|false|none|Promotion ID.|
|idSeller|string|false|none|Seller Name.|
|idSellerIsInclusive|boolean|false|none|If set to `true`, this promotion will be applied to any seller present on the `idSeller` field. If set to `false`, sellers present on that field will make this promotion not to be applied.|
|idsSalesChannel|[string]|false|none|List of Trade Policies that activate this promotion.|
|installment|integer|false|none|**Deprecated.**|
|isActive|boolean|false|none|If set as `true` the Promotion is activated. If set as `false` the Promotion is deactivated.|
|isArchived|boolean|false|none|If set as `true` the Promotion is archived. If set as `false` the Promotion is not archived.|
|isDifferentListPriceAndPrice|boolean|false|none|Applies the promotion only if the list price and price is different.|
|isFeatured|boolean|false|none|Insert a flag with the promotion name used in the product's window display and page.|
|isFirstBuy|boolean|false|none|Applies the discount only if it's a first buy.|
|isMinMaxInstallments|boolean|false|none|Set if the promotion will be applied considering a minimum and maximum values for installments.|
|isSlaSelected|boolean|false|none|Applies selected discount only when one of the defined shipping method is selected by the customer.|
|itemMaxPrice|number|false|none|Maximum price of the item.|
|itemMinPrice|number|false|none|Minimum price of the item.|
|lastModified|string|false|none|When the Promotion was last modified.|
|listSku1BuyTogether|[object]|false|none|SKU first list for the promotion **Buy Together**.|
|listSku2BuyTogether|[object]|false|none|SKU second list for the promotion **Buy Together**.|
|marketingTags|[string]|false|none|Promotion Marketing tags.|
|marketingTagsAreNotInclusive|boolean|false|none|If set to `false`, this promotion will be applied to any marketing tag present on the `marketingTags` field. If set to `true`, marketing tags present on that field will make this promotion not to be applied.|
|maxInstallment|integer|false|none|Maximum value for installment.|
|maxNumberOfAffectedItems|integer|false|none|The maximum number of affected items for a promotion.|
|maxNumberOfAffectedItemsGroupKey|string|false|none|The maximum number of affected items by group key for a promotion.|
|maxPricesPerItems|[object]|false|none|**Deprecated.**|
|maxUsage|integer|false|none|Defines how many times the promotion can be used.|
|maxUsagePerClient|integer|false|none|Defines if the promotion can be used multiple times per client.|
|maximumUnitPriceDiscount|number|false|none|The maximum price for each item of the purchase will be the price set up.|
|merchants|[object]|false|none|**Deprecated.**|
|minInstallment|integer|false|none|Minimum value for installment.|
|minimumQuantityBuyTogether|integer|false|none|Minimum quantity for **Buy Together** promotion.|
|multipleUsePerClient|boolean|false|none|Defines if the promotion can be used multiple times per client.|
|name|string|false|none|Promotion Name.|
|newOffset|number|false|none|New time offset from UTC in seconds.|
|nominalDiscountValue|number|false|none|Exact discount to be applied for the total purchase value.|
|nominalRewardValue|number|false|none|Nominal value for rewards program.|
|nominalShippingDiscountValue|number|false|none|Exact discount to be applied for the shipping value.|
|nominalTax|number|false|none|Nominal Tax.|
|offset|integer|false|none|Time offset from UTC in seconds.|
|orderStatusRewardValue|string|false|none|Order status reward value.|
|origin|string|false|none|Origin of the promotion, `marketplace` or `Fulfillment`.  Read [Difference between orders with marketplace and fulfillment sources](https://help.vtex.com/en/tutorial/what-are-orders-with-marketplace-source-and-orders-with-fulfillment-source--6eVYrmUAwMOeKICU2KuG06) for more information.|
|paymentsMethods|[object]|false|none|Array composed by all the Payments Methods.|
|» id|string|false|none|Payment Method ID.|
|» name|string|false|none|Payment Method Name.|
|paymentsRules|[object]|false|none|**Deprecated.**|
|percentualDiscountValue|number|false|none|Percentage discount to be applied for total purchase value.|
|percentualDiscountValueList|[number]|false|none|Percentual discount value list.|
|percentualDiscountValueList1|number|false|none|Valid discounts for the SKUs in `listSku1BuyTogether`, discount list used for Buy Together Promotions.|
|percentualDiscountValueList2|number|false|none|Equivalent to `percentualDiscountValueList1`.|
|percentualRewardValue|number|false|none|Percentage value for rewards program.|
|percentualShippingDiscountValue|number|false|none|Percentage discount to be applied for shipping value.|
|percentualTax|number|false|none|Percentual Tax over purchase total value.|
|products|[object]|false|none|Object composed by the products that will activate or deactivate the promotion.|
|» id|string|false|none|Product ID.|
|» name|string|false|none|Product Name.|
|productsAreInclusive|boolean|false|none|If set to `true`, this promotion will be applied to any product present on the `products` field. If set to `false`, products present on that field will make this promotion not to be applied.|
|productsSpecifications|[object]|false|none|**Deprecated.**|
|quantityToAffectBuyTogether|integer|false|none|Quantity to affect **Buy Together** promotion.|
|rebatePercentualDiscountValue|number|false|none|Percentual Shipping Discount Value.|
|restrictionsBins|[string]|false|none|The discount will be granted if the card's BIN is given.|
|shippingPercentualTax|number|false|none|Shipping Percentual Tax over purchase total value.|
|shouldDistributeDiscountAmongMatchedItems|boolean|false|none|Should distribute discount among matched items.|
|skus|[object]|false|none|Object composed by the SKUs that will activate or deactivate the promotion.|
|» id|string|false|none|SKU ID.|
|» name|string|false|none|SKU Name.|
|skusAreInclusive|boolean|false|none|If set to `true`, this promotion will be applied to any SKU present on the `skus` field. If set to `false`, SKUs present on that field will make this promotion not to be applied.|
|skusGift|object|false|none|SKU Gift Object. Total discount on the product value set as a gift.|
|» gifts|integer|false|none|Array with SKU Gifts IDs.|
|» quantitySelectable|integer|false|none|Quantity of SKU Gifts.|
|slasIds|[string]|false|none|The discount will be granted if the shipping method is the same as the one given.|
|stores|[object]|false|none|**Deprecated.**|
|storesAreInclusive|boolean|false|none|**Deprecated.**|
|totalValueCeling|number|false|none|Maximum chart value to activate the promotion.|
|totalValueFloor|number|false|none|Minimum chart value to activate the promotion.|
|totalValueIncludeAllItems|boolean|false|none|**Deprecated.**|
|totalValueMode|string|false|none|Defines if products that already are receiving a promotion will be considered on the chart total value. There are three options available: `IncludeMatchedItems`, `ExcludeMatchedItems`, `AllItems`.|
|totalValuePurchase|number|false|none|Total value a client must have in past orders to active the promotion.|
|type|string|false|none|Defines what is the type of the promotion or indicates if it is a tax. Possible values: `regular` ([Regular Promotion](https://help.vtex.com/tutorial/regular-promotion--tutorials_327)), `combo` ([Buy Together](https://help.vtex.com/en/tutorial/buy-together--tutorials_323)), `forThePriceOf` ([More for Less](https://help.vtex.com/en/tutorial/creating-a-more-for-less-promotion--tutorials_325)), `progressive` ([Progressive Discount](https://help.vtex.com/en/tutorial/progressive-discount--tutorials_324)), `buyAndWin` ([Buy One Get One](https://help.vtex.com/en/tutorial/buy-one-get-one--tutorials_322)), `maxPricePerItem` (Deprecated), `campaign` ([Campaign Promotion](https://help.vtex.com/en/tutorial/campaign-promotion--1ChYXhK2AQGuS6wAqS8Ume)), `tax` (Tax), `multipleEffects` (Multiple Effects).|
|useNewProgressiveAlgorithm|boolean|false|none|Use new progressive algorithm.|
|utmCampaign|string|false|none|Coupon utmCampaign code.|
|utmSource|string|false|none|Coupon utmSource code.|
|zipCodeRanges|[object]|false|none|Range of the zip code that applies the promotion.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get Promotion or Tax by ID

<a id="opIdGetCalculatorConfigurationById"></a>

> Code samples

```bash
curl https://example.com/api/rnb/pvt/calculatorconfiguration/d8a1cd2e-b667-4054-b3ae-b79124c7218e \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/rnb/pvt/calculatorconfiguration/{idCalculatorConfiguration}`

Retrieves a specific promotion by its Promotion ID or a specific tax by its Tax ID.

<h3 id="get-promotion-or-tax-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|
|idCalculatorConfiguration|path|string|true|Promotion ID or tax ID.|

> Example responses

> 200 Response

```json
{
  "absoluteShippingDiscountValue": 0,
  "accumulateWithManualPrice": false,
  "activateGiftsMultiplier": false,
  "activeDaysOfWeek": [],
  "affiliates": [],
  "applyToAllShippings": false,
  "areSalesChannelIdsExclusive": false,
  "beginDateUtc": "2020-05-01T18:47:15.89Z",
  "brands": [],
  "brandsAreInclusive": false,
  "campaigns": [],
  "cardIssuers": [],
  "categories": [],
  "categoriesAreInclusive": false,
  "clusterExpressions": [],
  "collections": [],
  "collections1BuyTogether": [],
  "collections2BuyTogether": [],
  "collectionsIsInclusive": false,
  "compareListPriceAndPrice": false,
  "conditionsIds": [
    "372e1868-2c0e-4437-be45-1ef8c9cab735"
  ],
  "coupon": [],
  "cumulative": false,
  "daysAgoOfPurchases": 0,
  "disableDeal": false,
  "discountType": "percentual",
  "enableBuyTogetherPerSku": false,
  "firstBuyIsProfileOptimistic": false,
  "giftListTypes": [],
  "idCalculatorConfiguration": "d8a1cd2e-b667-4054-b3ae-b79124c7218e",
  "idSellerIsInclusive": false,
  "idsSalesChannel": [],
  "installment": 0,
  "isActive": true,
  "isArchived": false,
  "isDifferentListPriceAndPrice": false,
  "isFeatured": false,
  "isFirstBuy": false,
  "isMinMaxInstallments": false,
  "isSlaSelected": false,
  "itemMaxPrice": 0,
  "itemMinPrice": 0,
  "lastModified": "2021-02-23T20:58:38.7963862Z",
  "listSku1BuyTogether": [],
  "listSku2BuyTogether": [],
  "marketingTags": [],
  "marketingTagsAreNotInclusive": false,
  "maxInstallment": 0,
  "maxNumberOfAffectedItems": 0,
  "maxNumberOfAffectedItemsGroupKey": "perCart",
  "maxPricesPerItems": [],
  "maxUsage": 0,
  "maxUsagePerClient": 0,
  "maximumUnitPriceDiscount": 0,
  "merchants": [],
  "minInstallment": 0,
  "minimumQuantityBuyTogether": 0,
  "multipleUsePerClient": false,
  "name": "Promoção Social Seller",
  "newOffset": -3,
  "nominalDiscountValue": 0,
  "nominalRewardValue": 0,
  "nominalShippingDiscountValue": 0,
  "nominalTax": 0,
  "offset": -3,
  "orderStatusRewardValue": "invoiced",
  "origin": "marketplace",
  "paymentsMethods": [
    {
      "id": "202",
      "name": "Dinheiro (202)"
    },
    {
      "id": "2",
      "name": "Visa (2)"
    }
  ],
  "paymentsRules": [],
  "percentualDiscountValue": 10,
  "percentualDiscountValueList": [],
  "percentualDiscountValueList1": 0,
  "percentualDiscountValueList2": 0,
  "percentualRewardValue": 0,
  "percentualShippingDiscountValue": 0,
  "percentualTax": 0,
  "products": [],
  "productsAreInclusive": false,
  "productsSpecifications": [],
  "quantityToAffectBuyTogether": 0,
  "rebatePercentualDiscountValue": 0,
  "restrictionsBins": [],
  "shippingPercentualTax": 0,
  "shouldDistributeDiscountAmongMatchedItems": false,
  "skus": [],
  "skusAreInclusive": true,
  "skusGift": {
    "quantitySelectable": 0
  },
  "slasIds": [],
  "stores": [],
  "storesAreInclusive": false,
  "totalValueCeling": 0,
  "totalValueFloor": 0,
  "totalValueIncludeAllItems": false,
  "totalValueMode": "IncludeMatchedItems",
  "totalValuePurchase": 0,
  "type": "regular",
  "useNewProgressiveAlgorithm": false,
  "utmCampaign": "georgeTest",
  "utmSource": "georgeSource",
  "zipCodeRanges": []
}
```

<h3 id="get-promotion-or-tax-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-promotion-or-tax-by-id-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|absoluteShippingDiscountValue|number|false|none|Maximum value for the shipping.|
|accumulateWithManualPrice|boolean|false|none|Allows the promotion to apply to products whose prices have been manually added by a call center operator.|
|activateGiftsMultiplier|boolean|false|none|If set as `true`, it activates gifts Multiplier.|
|activeDaysOfWeek|[string]|false|none|Defines which days of the week the promotion will applied.|
|affiliates|[object]|false|none|Marketplace order identifier. The discount will apply to selected affiliates.|
|» id|string|false|none|Affiliate ID.|
|» name|string|false|none|Affiliate Name.|
|applyToAllShippings|boolean|false|none|Promotion will be applied to all kind of shipping.|
|areSalesChannelIdsExclusive|boolean|false|none|If set to `false`, this promotion will be applied to any trade policies present on the `idsSalesChannel` field. If set to `true`, trade policies present on that field will make this promotion not to be applied.|
|beginDateUtc|string|false|none|Promotion Begin Date (UTC).|
|brands|[object]|false|none|Object composed by the brands that will activate or deactivate the promotion.|
|» id|string|false|none|Brand ID.|
|» name|string|false|none|Brand Name.|
|brandsAreInclusive|boolean|false|none|If set to `true`, this promotion will be applied to any brand present on the `brands` field. If set to `false`, brands present on that field will make this promotion not to be applied.|
|campaigns|[object]|false|none|Campaign Audiences that activate this promotion.|
|cardIssuers|[object]|false|none|**Deprecated.**|
|categories|[object]|false|none|Object composed by the categories that will activate or deactivate the promotion.|
|» id|string|false|none|Category ID.|
|» name|string|false|none|Category Name.|
|categoriesAreInclusive|boolean|false|none|If set to `true`, this promotion will be applied to any category present on the `categories` field. If set to `false`, categories present on that field will make this promotion not to be applied.|
|clusterExpressions|[string]|false|none|An expression to use with clusters.|
|collections|[object]|false|none|Array composed by the collections that will be activated or deactivated the promotion.|
|» id|string|false|none|Collection ID.|
|» name|string|false|none|Collection Name.|
|collections1BuyTogether|[string]|false|none|Collections that will generate the promotion, type **Buy Together**, **More for less**, **Progressive Discount**, **Buy One Get One**.|
|collections2BuyTogether|[object]|false|none|**Deprecated.**|
|collectionsIsInclusive|boolean|false|none|If set to `true`, this promotion will be applied to any collection present on the `collections` field. If set to `false`, collections present on that field will make this promotion not to be applied.|
|compareListPriceAndPrice|boolean|false|none|If the **List Price** and **Price** are the same.|
|conditionsIds|[string]|false|none|Array with conditions IDs.|
|coupon|[object]|false|none|**Deprecated.**|
|cumulative|boolean|false|none|Defines if a promotion can accumulate with another one. (`true`) or not (`false`).|
|daysAgoOfPurchases|integer|false|none|Number of days that are considered to add the purchase history.|
|description|string|false|none|Promotion internal description.|
|disableDeal|boolean|false|none|**Deprecated.**|
|discountType|string|false|none|The type of discount that will apply to the promotion.|
|enableBuyTogetherPerSku|boolean|false|none|Enable **Buy Together** per SKU.|
|endDateUtc|string|false|none|Promotion End Date (UTC).|
|firstBuyIsProfileOptimistic|boolean|false|none|Applies the discount even if the user is not logged.|
|giftListTypes|[string]|false|none|Gifts List Type.|
|idCalculatorConfiguration|string|false|none|Promotion ID.|
|idSeller|string|false|none|Seller Name.|
|idSellerIsInclusive|boolean|false|none|If set to `true`, this promotion will be applied to any seller present on the idSeller field. If set to `false`, sellers present on that field will make this promotion not to be applied.|
|idsSalesChannel|[string]|false|none|List of Trade Policies that activate this promotion.|
|installment|integer|false|none|**Deprecated.**|
|isActive|boolean|false|none|If set as `true` the Promotion is activated. If set as `false` the Promotion is deactivated.|
|isArchived|boolean|false|none|If set as `true` the Promotion is archived. If set as `false` the Promotion is not archived.|
|isDifferentListPriceAndPrice|boolean|false|none|Applies the promotion only if the list price and price is different.|
|isFeatured|boolean|false|none|Insert a flag with the promotion name used in the product's window display and page.|
|isFirstBuy|boolean|false|none|Applies the discount only if it's a first buy.|
|isMinMaxInstallments|boolean|false|none|Set if the promotion will be applied considering a minimum and maximum values for installments.|
|isSlaSelected|boolean|false|none|Applies selected discount only when one of the defined shipping method is selected by the customer.|
|itemMaxPrice|number|false|none|Maximum price of the item.|
|itemMinPrice|number|false|none|Minimum price of the item.|
|lastModified|string|false|none|When the Promotion was last modified.|
|listSku1BuyTogether|[object]|false|none|SKU first list for the promotion **Buy Together**.|
|listSku2BuyTogether|[object]|false|none|SKU second list for the promotion **Buy Together**.|
|marketingTags|[string]|false|none|Promotion Marketing tags.|
|marketingTagsAreNotInclusive|boolean|false|none|If set to `false`, this promotion will be applied to any marketing tag present on the `marketingTags` field. If set to `true`, marketing tags present on that field will make this promotion not to be applied.|
|maxInstallment|integer|false|none|Maximum value for installment.|
|maxNumberOfAffectedItems|integer|false|none|The maximum number of affected items for a promotion.|
|maxNumberOfAffectedItemsGroupKey|string|false|none|The maximum number of affected items by group key for a promotion.|
|maxPricesPerItems|[object]|false|none|**Deprecated.**|
|maxUsage|integer|false|none|Defines how many times the promotion can be used.|
|maxUsagePerClient|integer|false|none|Defines if the promotion can be used multiple times per client.|
|maximumUnitPriceDiscount|number|false|none|The maximum price for each item of the purchase will be the price set up.|
|merchants|[object]|false|none|**Deprecated.**|
|minInstallment|integer|false|none|Minimum value for installment.|
|minimumQuantityBuyTogether|integer|false|none|Minimum quantity for **Buy Together** promotion.|
|multipleSkusCause|object|false|none|Object composed by a list of SKUs on a Multiple Effects promotion. Structure: `"{SkuId}": {PercentageDiscount}`. There is a limit of 400 SKUs for this type of promotion.|
|» **additionalProperties**|string|false|none|SKU ID.|
|multipleUsePerClient|boolean|false|none|Defines if the promotion can be used multiple times per client.|
|name|string|false|none|Promotion Name.|
|newOffset|number|false|none|New time offset from UTC in seconds.|
|nominalDiscountValue|number|false|none|Exact discount to be applied for the total purchase value.|
|nominalRewardValue|number|false|none|Nominal value for rewards program.|
|nominalShippingDiscountValue|number|false|none|Exact discount to be applied for the shipping value.|
|nominalTax|number|false|none|Nominal Tax.|
|offset|integer|false|none|Time offset from UTC in seconds.|
|orderStatusRewardValue|string|false|none|Order status reward value.|
|origin|string|false|none|Origin of the promotion, `marketplace` or `Fulfillment`. Read [Difference between orders with marketplace and fulfillment sources](https://help.vtex.com/en/tutorial/what-are-orders-with-marketplace-source-and-orders-with-fulfillment-source--6eVYrmUAwMOeKICU2KuG06) for more information.|
|paymentsMethods|[object]|false|none|Array composed by all the Payments Methods.|
|» id|string|false|none|Payment Method ID.|
|» name|string|false|none|Payment Method Name.|
|paymentsRules|[object]|false|none|**Deprecated.**|
|percentualDiscountValue|number|false|none|Percentage discount to be applied for total purchase value.|
|percentualDiscountValueList|[number]|false|none|Percentual discount value list.|
|percentualDiscountValueList1|number|false|none|Valid discounts for the SKUs in `listSku1BuyTogether`, discount list used for Buy Together Promotions.|
|percentualDiscountValueList2|number|false|none|Equivalent to `percentualDiscountValueList1`.|
|percentualRewardValue|number|false|none|Percentage value for rewards program.|
|percentualShippingDiscountValue|number|false|none|Percentage discount to be applied for shipping value.|
|percentualTax|number|false|none|Percentual Tax over purchase total value.|
|products|[object]|false|none|Object composed by the products that will activate or deactivate the promotion.|
|» id|string|false|none|Product ID.|
|» name|string|false|none|Product Name.|
|productsAreInclusive|boolean|false|none|If set to `true`, this promotion will be applied to any product present on the `products` field. If set to `false`, products present on that field will make this promotion not to be applied.|
|productsSpecifications|[object]|false|none|**Deprecated.**|
|quantityToAffectBuyTogether|integer|false|none|Quantity to affect **Buy Together** promotion.|
|rebatePercentualDiscountValue|number|false|none|Percentual Shipping Discount Value.|
|restrictionsBins|[string]|false|none|The discount will be granted if the card's BIN is given.|
|shippingPercentualTax|number|false|none|Shipping Percentual Tax over purchase total value.|
|shouldDistributeDiscountAmongMatchedItems|boolean|false|none|Should distribute discount among matched items.|
|skus|[object]|false|none|Object composed by the SKUs that will activate or deactivate the promotion.|
|» id|string|false|none|SKU ID.|
|» name|string|false|none|SKU Name.|
|skusAreInclusive|boolean|false|none|If set to `true`, this promotion will be applied to any SKU present on the `skus` field. If set to `false`, SKUs present on that field will make this promotion not to be applied.|
|skusGift|object|false|none|SKU Gift Object. Total discount on the product value set as a gift.|
|» gifts|integer|false|none|Array with SKU Gifts IDs.|
|» quantitySelectable|integer|false|none|Quantity of SKU Gifts.|
|slasIds|[string]|false|none|The discount will be granted if the shipping method is the same as the one given.|
|stores|[object]|false|none|**Deprecated.**|
|storesAreInclusive|boolean|false|none|**Deprecated.**|
|totalValueCeling|number|false|none|Maximum chart value to activate the promotion.|
|totalValueFloor|number|false|none|Minimum chart value to activate the promotion.|
|totalValueIncludeAllItems|boolean|false|none|**Deprecated.**|
|totalValueMode|string|false|none|If products that already are receiving a promotion, will be considered on the chart total value. There are three options available: `IncludeMatchedItems`, `ExcludeMatchedItems`, `AllItems`.|
|totalValuePurchase|number|false|none|Total value a client must have in past orders to active the promotion.|
|type|string|false|none|Defines what is the type of the promotion or indicates if it is a tax. Possible values: `regular` ([Regular Promotion](https://help.vtex.com/tutorial/regular-promotion--tutorials_327)), `combo` ([Buy Together](https://help.vtex.com/en/tutorial/buy-together--tutorials_323)), `forThePriceOf` ([More for Less](https://help.vtex.com/en/tutorial/creating-a-more-for-less-promotion--tutorials_325)), `progressive` ([Progressive Discount](https://help.vtex.com/en/tutorial/progressive-discount--tutorials_324)), `buyAndWin` ([Buy One Get One](https://help.vtex.com/en/tutorial/buy-one-get-one--tutorials_322)), `maxPricePerItem` (Deprecated), `campaign` ([Campaign Promotion](https://help.vtex.com/en/tutorial/campaign-promotion--1ChYXhK2AQGuS6wAqS8Ume)), `tax` (Tax), `multipleEffects` (Multiple Effects).|
|useNewProgressiveAlgorithm|boolean|false|none|Use new progressive algorithm.|
|utmCampaign|string|false|none|Coupon utmCampaign code.|
|utmSource|string|false|none|Coupon utmSource code.|
|zipCodeRanges|[object]|false|none|Range of the zip code that applies the promotion.|
|» inclusive|boolean|false|none|Defines if the zip code range is included in the promotion.|
|» zipCodeFrom|string|false|none|Initial Zip Code.|
|» zipCodeTo|string|false|none|Final Zip Code.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Create Multiple SKU Promotion

> Code samples

```bash
curl https://example.com/api/rnb/pvt/import/calculatorConfiguration \
  -X POST \
  -H 'Content-Type: text/csv' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -H 'X-VTEX-calculator-name: Test' \
  -H 'X-VTEX-start-date: 2020-08-18T16:00:00+3:00' \
  -H 'X-VTEX-end-date: 2020-08-18T16:30:00+3:00' \
  -H 'X-VTEX-accumulate-with-manual-prices: false' \
  --data-binary '@/path/to/file'
```

`POST /api/rnb/pvt/import/calculatorConfiguration`

Creates a Multiple SKU Promotion. This scenario allows to create a single promotion for multiples SKUs with the Percentage Effect. 
> ⚠️ 
>
> The limit of SKUs on a Multiple Effects promotion is 400.

<h3 id="create-multiple-sku-promotion-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|
|X-VTEX-calculator-name|header|string|true|Promotion Name.|
|X-VTEX-cumulative|header|boolean|false|Defines if the Promotion is cumulative with other promotions.|
|X-VTEX-cluster-operator|header|string|false|This header allows implementing the Promotion in multiples client clusters. You can set the value as `all` - the Promotion will be valid to all the clusters - or `any` - the Promotion will be valid to any of the clusters.|
|X-VTEX-cluster-expression|header|string|false|Cluster that will be included in the Promotion. To add multiple clusters, create a header for each one of them.|
|X-VTEX-start-date|header|string|true|Promotion start date.|
|X-VTEX-end-date|header|string|true|Promotion end date.|
|X-VTEX-accumulate-with-manual-prices|header|boolean|true|Condition that will accumulate the Promotion with manual prices or not.|
|body|body|string(binary)|false|none|

<h3 id="create-multiple-sku-promotion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Update Multiple SKU Promotion

> Code samples

```bash
curl https://example.com/api/rnb/pvt/import/calculatorConfiguration/dc6b6f59-ec2b-4a13-8490-0d1e0c53ddf9 \
  -X PUT \
  -H 'Content-Type: text/csv' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -H 'X-VTEX-calculator-name: Test' \
  -H 'X-VTEX-start-date: 2020-08-18T16:00:00+3:00' \
  -H 'X-VTEX-end-date: 2020-08-18T16:30:00+3:00' \
  -H 'X-VTEX-accumulate-with-manual-prices: false' \
  --data-binary '@/path/to/file'
```

`PUT /api/rnb/pvt/import/calculatorConfiguration/{promotionId}`

Updates information from a Multiple SKU Promotion. This scenario allows to create a single promotion for multiples SKUs with the Percentage Effect.  
> ⚠️ 
>
> The limit of SKUs on a Multiple Effects promotion is 400.

<h3 id="update-multiple-sku-promotion-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|
|X-VTEX-calculator-name|header|string|true|Promotion Name.|
|X-VTEX-cumulative|header|boolean|false|Defines if the Promotion is cumulative with other promotions.|
|X-VTEX-cluster-operator|header|string|false|This header allows implementing the Promotion in multiples client clusters. You can set the value as `all` - the Promotion will be valid to all the clusters - or `any` - the Promotion will be valid to any of the clusters.|
|X-VTEX-cluster-expression|header|string|false|Cluster that will be included in the Promotion. To add multiple clusters, create a header for each one of them.|
|X-VTEX-start-date|header|string|true|Promotion start date.|
|X-VTEX-end-date|header|string|true|Promotion end date.|
|X-VTEX-accumulate-with-manual-prices|header|boolean|true|Condition that will accumulate the Promotion with manual prices or not.|
|promotionId|path|string|true|Promotion unique identifier.|
|body|body|string(binary)|false|none|

<h3 id="update-multiple-sku-promotion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Accepted|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get All Taxes

<a id="opIdGetAllTaxes"></a>

> Code samples

```bash
curl https://example.com/api/rnb/pvt/taxes/calculatorconfiguration \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/rnb/pvt/taxes/calculatorconfiguration`

Retrieves all taxes from an account.

<h3 id="get-all-taxes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|

> Example responses

> 200 Response

```json
{
  "archivedItems": [],
  "disabledItems": [],
  "items": [
    {
      "Campaigns": [],
      "activateGiftsMultiplier": false,
      "areSalesChannelIdsExclusive": false,
      "beginDate": "2022-05-09T03:00:00Z",
      "description": "Tax applied by the government",
      "endDate": "2022-06-01T02:30:00Z",
      "hasMaxPricePerItem": false,
      "idCalculatorConfiguration": "90f4affc-fea0-424c-a7a7-c69aec7bbdc8",
      "idsSalesChannel": [
        "1"
      ],
      "isActive": true,
      "isArchived": false,
      "isTax": true,
      "lastModifiedUtc": "2022-05-10T02:42:52.4493897Z",
      "maxUsage": 0,
      "name": "Government Tax",
      "percentualTax": 10,
      "scope": {
        "allCatalog": false,
        "brands": 1,
        "brandsAreInclusive": true,
        "categories": 1,
        "categoriesAreInclusive": true,
        "collections": 1,
        "collectionsAreInclusive": true,
        "products": 1,
        "productsAreInclusive": true,
        "sellers": 0,
        "sellersAreInclusive": false,
        "skus": 1,
        "skusAreInclusive": true
      },
      "status": "active",
      "type": "tax",
      "utmCampain": "",
      "utmSource": "",
      "utmiCampaign": ""
    }
  ],
  "limitConfiguration": {
    "activesCount": 1,
    "limit": 100
  }
}
```

<h3 id="get-all-taxes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-all-taxes-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|archivedItems|[string]|false|none|Archived items.|
|disabledItems|[string]|false|none|Disabled items.|
|items|[GetTaxes](#schemagettaxes)|false|none|Array with taxes.|
|limitConfiguration|object|false|none|Limit configuration.|
|» activesCount|integer|false|none|Actives count.|
|» limit|integer|false|none|Limit.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Unarchive Promotion or Tax

<a id="opIdUnarchivePromotion"></a>

> Code samples

```bash
curl https://example.com/api/rnb/pvt/unarchive/calculatorConfiguration/d8a1cd2e-b667-4054-b3ae-b79124c7218e \
  -X POST \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`POST /api/rnb/pvt/unarchive/calculatorConfiguration/{idCalculatorConfiguration}`

Unarchives a Promotion or Tax by its ID.

<h3 id="unarchive-promotion-or-tax-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|
|idCalculatorConfiguration|path|string|true|Promotion ID or tax ID.|

<h3 id="unarchive-promotion-or-tax-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

<h1 id="promotions-taxes-api-coupons">Coupons</h1>

## Get archived coupon by coupon code

<a id="opIdGetarchivedbycouponcode"></a>

> Code samples

```bash
curl https://example.com/api/rnb/pvt/archive/coupon/promo10 \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/rnb/pvt/archive/coupon/{couponCode}`

Retrieves a specific archived coupon by its coupon code.

<h3 id="get-archived-coupon-by-coupon-code-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|
|couponCode|path|string|true|Coupon Code|

> Example responses

> 200 Response

```json
{
  "couponCode": "test",
  "expirationIntervalPerUse": "00:00:00",
  "isArchived": true,
  "lastModifiedUtc": "2021-11-10T14:24:39.3683694Z",
  "maxItemsPerClient": 10,
  "utmSource": "coupon3"
}
```

<h3 id="get-archived-coupon-by-coupon-code-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-archived-coupon-by-coupon-code-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|couponCode|string|false|none|Coupon code.|
|expirationIntervalPerUse|string|false|none|Coupon expiration interval per use.|
|isArchived|boolean|false|none|Defines if the coupon is archived (`true`) or not (`false`).|
|lastModifiedUtc|string|false|none|Date and time of the last update of the coupon in UTC format.|
|maxItemsPerClient|integer|false|none|Maximum items per client that the coupon can be applied.|
|utmCampaign|string|false|none|UTM campaign code.|
|utmSource|string|false|none|UTM source code.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Archive coupon by coupon code

<a id="opIdArchivebycouponcode"></a>

> Code samples

```bash
curl https://example.com/api/rnb/pvt/archive/coupon/test \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`POST /api/rnb/pvt/archive/coupon/{couponCode}`

Archives a specifc coupon by its coupon code.

<h3 id="archive-coupon-by-coupon-code-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|
|couponCode|path|string|true|Coupon Code|

> Example responses

> 200 Response

```json
"promo10"
```

<h3 id="archive-coupon-by-coupon-code-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get all coupons

<a id="opIdGetall"></a>

> Code samples

```bash
curl https://example.com/api/rnb/pvt/coupon \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/rnb/pvt/coupon`


> Check the new [Promotions onboarding guide](https://developers.vtex.com/vtex-rest-api/docs/promotions-overview). We created this guide to improve the onboarding experience for developers at VTEX. It assembles all documentation on our Developer Portal about Promotions and is organized by focusing on the developer's journey.

 Retrieves all coupons from an account.

<h3 id="get-all-coupons-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|none|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand|

> Example responses

> 200 Response

```json
[
  {
    "couponCode": "test",
    "expirationIntervalPerUse": "00:00:00",
    "isArchived": false,
    "lastModifiedUtc": "2021-11-10T14:24:39.3683694Z",
    "maxItemsPerClient": 10,
    "utmCampaign": "coupon3",
    "utmSource": "coupon3"
  },
  {
    "couponCode": "test-lucian2",
    "expirationIntervalPerUse": "00:00:00",
    "isArchived": false,
    "lastModifiedUtc": "2020-06-22T18:25:24.4583474Z",
    "maxItemsPerClient": 10,
    "utmSource": "cupom3"
  }
]
```

<h3 id="get-all-coupons-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-all-coupons-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» couponCode|string|false|none|Coupon code.|
|» expirationIntervalPerUse|string|false|none|Coupon expiration interval per use.|
|» isArchived|boolean|false|none|Defines if the coupon is archived (`true`) or not (`false`).|
|» lastModifiedUtc|string|false|none|Date and time of the last update of the coupon in UTC format.|
|» maxItemsPerClient|integer|false|none|Maximum items per client that the coupon can be applied.|
|» utmCampaign|string|false|none|UTM campaign code.|
|» utmSource|string|false|none|UTM source code.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Update coupon

<a id="opIdUpdate"></a>

> Code samples

```bash
curl https://example.com/api/rnb/pvt/coupon \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "couponCode": "test",
    "expirationIntervalPerUse": "00:00:00",
    "isArchived": false,
    "maxItemsPerClient": 10,
    "utmCampaign": "coupon3",
    "utmSource": "coupon3"
  }'
```

`POST /api/rnb/pvt/coupon`

Updates information of a specific coupon.

> Body parameter

```json
{
  "couponCode": "test",
  "expirationIntervalPerUse": "00:00:00",
  "isArchived": false,
  "maxItemsPerClient": 10,
  "utmCampaign": "coupon3",
  "utmSource": "coupon3"
}
```

<h3 id="update-coupon-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|
|body|body|object|true|none|
|» couponCode|body|string|true|Coupon code.|
|» expirationIntervalPerUse|body|string|true|Coupon expiration interval per use.|
|» isArchived|body|boolean|true|Defines if the coupon is archived (`true`) or not (`false`).|
|» maxItemsPerClient|body|integer|true|Maximum items per client that the coupon can be applied.|
|» utmCampaign|body|string|true|UTM campaign code.|
|» utmSource|body|string|true|UTM source code.|

> Example responses

> 200 Response

```json
{
  "couponCode": "test",
  "expirationIntervalPerUse": "00:00:00",
  "isArchived": false,
  "lastModifiedUtc": "2021-11-10T14:24:39.3683694Z",
  "maxItemsPerClient": 10,
  "utmCampaign": "coupon3",
  "utmSource": "coupon3"
}
```

<h3 id="update-coupon-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="update-coupon-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|couponCode|string|false|none|Coupon code.|
|expirationIntervalPerUse|string|false|none|Coupon expiration interval per use.|
|isArchived|boolean|false|none|Defines if the coupon is archived (`true`) or not (`false`).|
|lastModifiedUtc|string|false|none|Date and time of the last update of the coupon in UTC format.|
|maxItemsPerClient|integer|false|none|Maximum items per client that the coupon can be applied.|
|utmCampaign|string|false|none|UTM campaign code.|
|utmSource|string|false|none|UTM source code.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Create coupon

> Code samples

```bash
curl https://example.com/api/rnb/pvt/coupon/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "couponCode": "summersale10",
    "expirationIntervalPerUse": "00:00:00",
    "maxItemsPerClient": 10,
    "utmCampaign": "summer",
    "utmSource": "email"
  }'
```

`POST /api/rnb/pvt/coupon/`

Creates a single new coupon.

> Body parameter

```json
{
  "couponCode": "summersale10",
  "expirationIntervalPerUse": "00:00:00",
  "maxItemsPerClient": 10,
  "utmCampaign": "summer",
  "utmSource": "email"
}
```

<h3 id="create-coupon-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|
|body|body|object|false|none|
|» couponCode|body|string|true|Coupon code.|
|» expirationIntervalPerUse|body|string|true|Coupon expiration interval per use.|
|» maxItemsPerClient|body|integer|true|Maximum items per client that the coupon can be applied.|
|» utmCampaign|body|string|false|UTM campaign code.|
|» utmSource|body|string|true|UTM source code.|

> Example responses

> 201 Response

```json
{
  "couponCode": "summersale10",
  "expirationIntervalPerUse": "00:00:00",
  "isArchived": false,
  "lastModifiedUtc": "2021-11-10T14:24:39.3683694Z",
  "maxItemsPerClient": 10,
  "utmCampaign": "summer",
  "utmSource": "email"
}
```

<h3 id="create-coupon-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|Inline|

<h3 id="create-coupon-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|couponCode|string|false|none|Coupon code.|
|expirationIntervalPerUse|string|false|none|Coupon expiration interval per use.|
|isArchived|boolean|false|none|Defines if the coupon is archived (`true`) or not (`false`).|
|lastModifiedUtc|string|false|none|Date and time of the last update of the coupon in UTC format.|
|maxItemsPerClient|integer|false|none|Maximum items per client that the coupon can be applied.|
|utmCampaign|string|false|none|UTM campaign code.|
|utmSource|string|false|none|UTM source code.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get coupon usage

<a id="opIdGetusage"></a>

> Code samples

```bash
curl https://example.com/api/rnb/pvt/coupon/usage/test \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/rnb/pvt/coupon/usage/{couponCode}`

Retrieves information about the coupon usage.

<h3 id="get-coupon-usage-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|
|couponCode|path|string|true|Coupon Code|

> Example responses

> 200 Response

```json
{
  "couponCode": "test",
  "hostName": "account",
  "profileUsages": {
    "23fa76cd-14e1-43ee-93af-0c04c9f6cfd7": {
      "orderUsage": [
        {
          "orderId": "11636716780563-01",
          "usageDateUtc": "2021-11-03T23:27:54.8305115Z"
        }
      ]
    }
  }
}
```

<h3 id="get-coupon-usage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-coupon-usage-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|couponCode|string|false|none|Coupon code.|
|hostName|string|false|none|Name of the store.|
|profileUsages|object|false|none|Object with information where and when the coupon was used.|
|» profileId|object|false|none|Profile ID.|
|» » orderUsage|[object]|false|none|Array with all the orders that the coupon was used.|
|» » » orderId|string|false|none|Order ID.|
|» » » usageDateUtc|string|false|none|Date and time when the coupon was used in the order in UTC format.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get coupon by coupon code

<a id="opIdGetbycouponcode"></a>

> Code samples

```bash
curl https://example.com/api/rnb/pvt/coupon/promo10 \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/rnb/pvt/coupon/{couponCode}`

Retrieves a specific coupon by its coupon code.

<h3 id="get-coupon-by-coupon-code-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|
|couponCode|path|string|true|Coupon Code|

> Example responses

> 200 Response

```json
{
  "couponCode": "test",
  "expirationIntervalPerUse": "00:00:00",
  "isArchived": false,
  "lastModifiedUtc": "2021-11-10T14:24:39.3683694Z",
  "maxItemsPerClient": 10,
  "utmSource": "coupon3"
}
```

<h3 id="get-coupon-by-coupon-code-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-coupon-by-coupon-code-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|couponCode|string|false|none|Coupon code.|
|expirationIntervalPerUse|string|false|none|Coupon expiration interval per use.|
|isArchived|boolean|false|none|Defines if the coupon is archived (`true`) or not (`false`).|
|lastModifiedUtc|string|false|none|Date and time of the last update of the coupon in UTC format.|
|maxItemsPerClient|integer|false|none|Maximum items per client that the coupon can be applied.|
|utmCampaign|string|false|none|UTM campaign code.|
|utmSource|string|false|none|UTM source code.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Coupon Massive Generation

<a id="opIdMassiveGeneration"></a>

> Code samples

```bash
curl 'https://example.com/api/rnb/pvt/coupons?quantity=10' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "couponCode": "ctest",
    "expirationIntervalPerUse": "00:00:00",
    "maxItemsPerClient": 1,
    "utmCampaign": "cupom3",
    "utmSource": "cupom3"
  }'
```

`POST /api/rnb/pvt/coupons`

Generates a massive amount of coupons

> Body parameter

```json
{
  "couponCode": "ctest",
  "expirationIntervalPerUse": "00:00:00",
  "maxItemsPerClient": 1,
  "utmCampaign": "cupom3",
  "utmSource": "cupom3"
}
```

<h3 id="coupon-massive-generation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|
|quantity|query|integer|true|Quantity of coupons to generate|
|body|body|object|true|none|
|» couponCode|body|string|true|Coupon code.|
|» expirationIntervalPerUse|body|string|true|Coupon expiration interval per use.|
|» maxItemsPerClient|body|integer|true|Defines if the coupon is archived (`true`) or not (`false`).|
|» utmCampaign|body|string|true|UTM campaign code.|
|» utmSource|body|string|true|UTM source code.|

> Example responses

> 200 Response

```json
[
  "ctest-7DLKU492HR4MANV",
  "ctest-QUM3U4HUGJ54301",
  "ctest-0KYBWQUKR3WXV4C",
  "ctest-971CX1N55WZSEBY",
  "ctest-9FCQ0UX80F6K4A7",
  "ctest-HWZEJ7D0D9MP3O7",
  "ctest-7PI34QVEERM8A70",
  "ctest-RT47PC2A116O9QO",
  "ctest-F4T3IQBAGQWRVW7",
  "ctest-8C3MS3U594EPQB8"
]
```

<h3 id="coupon-massive-generation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="coupon-massive-generation-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Create multiple coupons

> Code samples

```bash
curl https://example.com/api/rnb/pvt/multiple-coupons \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '[
    {
      "couponConfiguration": {
        "couponCode": "promobf4",
        "expirationIntervalPerUse": "00:00:00",
        "isArchived": false,
        "maxItemsPerClient": 10,
        "utmCampaign": "bf",
        "utmSource": "fb"
      },
      "quantity": 1
    }
  ]'
```

`POST /api/rnb/pvt/multiple-coupons`

Creates multiple coupons with different coupon codes. This endpoint has a throttling of 60 requests per minute.

> Body parameter

```json
[
  {
    "couponConfiguration": {
      "couponCode": "promobf4",
      "expirationIntervalPerUse": "00:00:00",
      "isArchived": false,
      "maxItemsPerClient": 10,
      "utmCampaign": "bf",
      "utmSource": "fb"
    },
    "quantity": 1
  }
]
```

<h3 id="create-multiple-coupons-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|
|body|body|[object]|false|none|
|» couponConfiguration|body|object|true|Object that contains all coupon configuration.|
|» » couponCode|body|string|true|Coupon code.|
|» » expirationIntervalPerUse|body|string|true|Coupon expiration interval per use.|
|» » isArchived|body|boolean|false|Defines if the coupon is archived (`true`) or not (`false`).|
|» » maxItemsPerClient|body|integer|true|Maximum items per client that the coupon can be applied.|
|» » utmCampaign|body|string|true|utmCampaign code.|
|» » utmSource|body|string|true|utmSource code.|
|» quantity|body|integer|true|Quantity of coupons created. The value must be a minimum of `1` and at maximum `1000`. If the amount is `1`, the coupon code will be the value of the `couponCode` parameter. If the value is greater than `1`, the coupon code will receive a random suffix.|

> Example responses

> 200 Response

```json
[
  "promobf"
]
```

<h3 id="create-multiple-coupons-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="create-multiple-coupons-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Unarchive coupon by coupon code

<a id="opIdUnarchivebycouponcode"></a>

> Code samples

```bash
curl https://example.com/api/rnb/pvt/unarchive/coupon/test \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`POST /api/rnb/pvt/unarchive/coupon/{couponCode}`

Unarchives a specifc coupon by its coupon code.

<h3 id="unarchive-coupon-by-coupon-code-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|
|couponCode|path|string|true|Coupon Code|

> Example responses

> 200 Response

```json
"test"
```

<h3 id="unarchive-coupon-by-coupon-code-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

<h1 id="promotions-taxes-api-campaign-audiences">Campaign Audiences</h1>

## Get all campaign audiences

<a id="opIdGetcampaignaudiences"></a>

> Code samples

```bash
curl https://example.com/api/rnb/pvt/campaignConfiguration \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/rnb/pvt/campaignConfiguration`

Retrieves a list of all campaign audiences and their respective configurations.

<h3 id="get-all-campaign-audiences-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|

> Example responses

> 200 Response

```json
[
  {
    "beginDateUtc": "2020-05-01T21:30:00Z",
    "endDateUtc": "2020-05-02T01:30:00Z",
    "id": "dd270d06-1ed1-47fc-b04e-a2431121b5a4",
    "isActive": true,
    "isAndOperator": false,
    "isArchived": false,
    "lastModified": {
      "dateUtc": "2020-05-01T21:22:01.807398Z",
      "user": "email@email.com"
    },
    "name": "Interna",
    "targetConfigurations": [
      {
        "affiliates": [],
        "areSalesChannelIdsExclusive": false,
        "brands": [],
        "brandsAreInclusive": true,
        "campaigns": [],
        "cardIssuers": [],
        "categories": [],
        "categoriesAreInclusive": true,
        "clusterExpressions": [],
        "clusterOperator": "all",
        "collections": [],
        "collections1BuyTogether": [],
        "collections2BuyTogether": [],
        "collectionsIsInclusive": true,
        "compareListPriceAndPrice": false,
        "coupon": [],
        "daysAgoOfPurchases": 0,
        "enableBuyTogetherPerSku": false,
        "featured": false,
        "firstBuyIsProfileOptimistic": false,
        "giftListTypes": [],
        "id": "77ae1e4c-a216-4b15-a4a3-ae64ec298988",
        "idSellerIsInclusive": false,
        "idsSalesChannel": [],
        "installment": 0,
        "isDifferentListPriceAndPrice": false,
        "isFirstBuy": false,
        "isMinMaxInstallments": false,
        "isSlaSelected": false,
        "itemMaxPrice": 0,
        "itemMinPrice": 0,
        "listBrand1BuyTogether": [],
        "listCategory1BuyTogether": [],
        "listSku1BuyTogether": [],
        "listSku2BuyTogether": [],
        "marketingTags": [
          "MKT1"
        ],
        "marketingTagsAreNotInclusive": false,
        "maxInstallment": 0,
        "maxUsage": 0,
        "maxUsagePerClient": 0,
        "merchants": [],
        "minInstallment": 0,
        "minimumQuantityBuyTogether": 1,
        "multipleUsePerClient": false,
        "name": "Social Sellers",
        "origin": "Marketplace",
        "paymentsMethods": [],
        "paymentsRules": [],
        "percentualDiscountValueList": [],
        "products": [],
        "productsAreInclusive": false,
        "productsSpecifications": [],
        "quantityToAffectBuyTogether": 0,
        "restrictionsBins": [],
        "shouldDistributeDiscountAmongMatchedItems": false,
        "skus": [],
        "skusAreInclusive": true,
        "slasIds": [],
        "stores": [],
        "storesAreInclusive": false,
        "totalValueCeling": 0,
        "totalValueFloor": 0,
        "totalValueIncludeAllItems": false,
        "totalValueMode": "IncludeMatchedItems",
        "totalValuePurchase": 0,
        "useNewProgressiveAlgorithm": false,
        "zipCodeRanges": [
          {
            "inclusive": true
          }
        ]
      }
    ]
  }
]
```

<h3 id="get-all-campaign-audiences-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-all-campaign-audiences-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» beginDateUtc|string|false|none|Start date of the campaign audience in UTC format.|
|» endDateUtc|string|false|none|End date of the campaign audience in UTC format.|
|» id|string|false|none|Campaign audience ID.|
|» isActive|boolean|false|none|Defines if the campaign audience is active (`true`) or not (`false`).|
|» isAndOperator|boolean|false|none|When `true`, determines that all the `targetConfigurations` need to be valid for the campaign audience to be active. When `false`, determines that if at least one of the `targetConfigurations` is valid, the campaign audience will be active.|
|» isArchived|boolean|false|none|Defines if the campaign audience is archived (`true`) or not (`false`).|
|» lastModified|object|false|none|Object with information about the most recent update of the campaign audience.|
|» » dateUtc|string|false|none|Date of the most recent update in UTC format.|
|» » user|string|false|none|Email of the user who updated the campaign audience for the latest time.|
|» name|string|false|none|Campaign audience name.|
|» targetConfigurations|[object]|false|none|Array that contains all target audience that the campaign audience will be valid.|
|» » affiliates|[object]|false|none|Marketplace order identifier. The discount will apply to selected affiliates.|
|» » » id|string|false|none|Affiliate ID.|
|» » » name|string|false|none|Affiliate Name.|
|» » areSalesChannelIdsExclusive|boolean|false|none|Defines if the trade policy IDs are exclusive.|
|» » brands|[object]|false|none|Object composed by the brands that will activate or deactivate the campaign audience.|
|» » » id|string|false|none|Brand ID.|
|» » » name|string|false|none|Brand Name.|
|» » brandsAreInclusive|boolean|false|none|If set to `true`, this campaign audience will be applied to any brand present on the `brands` field. If set to `false`, brands present on that field will make this campaign audience not to be applied.|
|» » campaigns|[object]|false|none|Campaign Audiences that activate this promotion.|
|» » cardIssuers|[object]|false|none|**Deprecated.**|
|» » categories|[object]|false|none|Object composed by the categories that will activate or deactivate the campaign audience.|
|» » » id|string|false|none|Category ID.|
|» » » name|string|false|none|Category Name.|
|» » categoriesAreInclusive|boolean|false|none|If set to `true`, this campaign audience will be applied to any category present on the `categories` field. If set to `false`, categories present on that field will make this campaign audience not to be applied.|
|» » clusterExpressions|[string]|false|none|An expression to use with clusters.|
|» » clusterOperator|string|false|none|**Deprecated.**|
|» » collections|[object]|false|none|Object composed by the collections that will activate or deactivate the campaign audience.|
|» » » id|string|false|none|Collection ID.|
|» » » name|string|false|none|Collection Name.|
|» » collections1BuyTogether|[string]|false|none|Collections that will generate the promotion, type **Buy Together**, **More for less**, **Progressive Discount**, **Buy One Get One**.|
|» » collections2BuyTogether|[object]|false|none|**Deprecated.**|
|» » collectionsIsInclusive|boolean|false|none|If set to `true`, this campaign audience will be applied to any collection present on the `collections` field. If set to `false`, collections present on that field will make this campaign audience not to be applied.|
|» » compareListPriceAndPrice|boolean|false|none|If the **List Price** and **Price** are the same.|
|» » coupon|[object]|false|none|**Deprecated.**|
|» » daysAgoOfPurchases|integer|false|none|Number of days that are considered to add the purchase history.|
|» » enableBuyTogetherPerSku|boolean|false|none|Enable **Buy Together** per SKU.|
|» » featured|boolean|false|none|Defines if the target audience is featured (`true`) or not (`false`).|
|» » firstBuyIsProfileOptimistic|boolean|false|none|Applies the discount even if the user is not logged.|
|» » giftListTypes|[string]|false|none|Gifts List Type.|
|» » id|string|false|none|Target audience ID.|
|» » idSellerIsInclusive|boolean|false|none|Defines if at least one of the sellers must be valid to active the campaign audience.|
|» » idsSalesChannel|[string]|false|none|Array with all the trade policies that activate the campaign audience.|
|» » installment|integer|false|none|**Deprecated.**|
|» » isDifferentListPriceAndPrice|boolean|false|none|Applies the campaign audience only if the list price and price is different.|
|» » isFirstBuy|boolean|false|none|Applies the discount only if it's a first buy.|
|» » isMinMaxInstallments|boolean|false|none|Set if the campaign audience will be applied considering a minimum and maximum values for installments.|
|» » isSlaSelected|boolean|false|none|Applies selected discount only when one of the defined shipping method is selected by the customer.|
|» » itemMaxPrice|number|false|none|Maximum price of the item.|
|» » itemMinPrice|number|false|none|Minimum price of the item.|
|» » listBrand1BuyTogether|[object]|false|none|Brand first list for the promotion **Buy Together.|
|» » listCategory1BuyTogether|[object]|false|none|Category first list for the promotion **Buy Together**.|
|» » listSku1BuyTogether|[object]|false|none|SKU first list for the promotion **Buy Together**.|
|» » listSku2BuyTogether|[object]|false|none|SKU second list for the promotion **Buy Together**.|
|» » marketingTags|[string]|false|none|Array with all the campaign audience's marketing tags.|
|» » marketingTagsAreNotInclusive|boolean|false|none|Defines if marketing tags are not inclusive.|
|» » maxInstallment|integer|false|none|Maximum value for installment.|
|» » maxUsage|integer|false|none|Defines how many times the campaign audience can be used.|
|» » maxUsagePerClient|integer|false|none|Defines if the campaign audience can be used multiple times per client.|
|» » merchants|[object]|false|none|**Deprecated.**|
|» » minInstallment|integer|false|none|Minimum value for installment.|
|» » minimumQuantityBuyTogether|integer|false|none|Minimum quantity for **Buy Together** promotion.|
|» » multipleUsePerClient|boolean|false|none|Defines if the campaign audience can be used multiple times per client.|
|» » name|string|false|none|Target audience name.|
|» » origin|string|false|none|Shows the campaign audience origin, `Marketplace` or `Fulfillment`.  Read [Difference between orders with marketplace and fulfillment sources](https://help.vtex.com/en/tutorial/what-are-orders-with-marketplace-source-and-orders-with-fulfillment-source--6eVYrmUAwMOeKICU2KuG06) for more information.|
|» » paymentsMethods|[object]|false|none|Array composed by all the Payments Methods.|
|» » » id|string|false|none|Payment Method ID.|
|» » » name|string|false|none|Payment Method Name.|
|» » paymentsRules|[object]|false|none|**Deprecated.**|
|» » percentualDiscountValueList|[number]|false|none|Percentual discount value list.|
|» » products|[object]|false|none|Object composed by the products that will activate or deactivate the campaign audience.|
|» » » id|string|false|none|Product ID.|
|» » » name|string|false|none|Product Name.|
|» » productsAreInclusive|boolean|false|none|If set to `true`, this campaign audience will be applied to any product present on the `products` field. If set to `false`, products present on that field will make this campaign audience not to be applied.|
|» » productsSpecifications|[object]|false|none|**Deprecated.**|
|» » quantityToAffectBuyTogether|integer|false|none|Quantity to affect **Buy Together** promotion.|
|» » restrictionsBins|[string]|false|none|The discount will be granted if the card's BIN is given.|
|» » shouldDistributeDiscountAmongMatchedItems|boolean|false|none|Should distribute discount among matched items.|
|» » skus|[object]|false|none|Object composed by the SKUs that will activate or deactivate the campaign audience.|
|» » » id|string|false|none|SKU ID.|
|» » » name|string|false|none|SKU Name.|
|» » skusAreInclusive|boolean|false|none|If set to `true`, this campaign audience will be applied to any SKU present on the `skus` field. If set to `false`, SKUs present on that field will make this campaign audience not to be applied.|
|» » slasIds|[string]|false|none|The discount will be granted if the shipping method is the same as the one given.|
|» » stores|[object]|false|none|**Deprecated.**|
|» » storesAreInclusive|boolean|false|none|**Deprecated.**|
|» » totalValueCeling|number|false|none|Maximum chart value to active the campaign audience.|
|» » totalValueFloor|number|false|none|Minimum chart value to active the campaign audience.|
|» » totalValueIncludeAllItems|boolean|false|none|**Deprecated.**|
|» » totalValueMode|string|false|none|Total chart value to active the campaign audience.|
|» » totalValuePurchase|number|false|none|Total value a client must have in past orders to active the campaign audience.|
|» » useNewProgressiveAlgorithm|boolean|false|none|Use new progressive algorithm.|
|» » zipCodeRanges|[object]|false|none|Range of the zip code that applies the campaign audience.|
|» » » inclusive|boolean|false|none|Defines if the zip code applies the campaign audience.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Create campaign audience

<a id="opIdSetcampaignconfiguration"></a>

> Code samples

```bash
curl https://example.com/api/rnb/pvt/campaignConfiguration \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "beginDateUtc": "2020-05-01T21:30:00Z",
    "endDateUtc": "2020-05-02T01:30:00Z",
    "id": "dd270d06-1ed1-47fc-b04e-a2431121b5a4",
    "isActive": true,
    "isAndOperator": true,
    "isArchived": false,
    "lastModified": {
      "dateUtc": "2020-05-01T21:22:01.807398Z",
      "user": "email@email.com"
    },
    "name": "Interna",
    "targetConfigurations": [
      {
        "affiliates": [
          {
            "id": "1",
            "name": "Amazon"
          }
        ],
        "areSalesChannelIdsExclusive": false,
        "brands": [
          {
            "id": "1",
            "name": "Brand (1)"
          }
        ],
        "brandsAreInclusive": true,
        "campaigns": [],
        "cardIssuers": [
          null
        ],
        "categories": [
          {
            "id": "1",
            "name": "Vinhos Tintos (1)"
          }
        ],
        "categoriesAreInclusive": true,
        "clusterExpressions": [
          "birthday=true"
        ],
        "clusterOperator": "string",
        "collections": [
          {
            "id": "1",
            "name": "Collection (1)"
          }
        ],
        "collections1BuyTogether": [
          "1"
        ],
        "collections2BuyTogether": [
          null
        ],
        "collectionsIsInclusive": true,
        "compareListPriceAndPrice": false,
        "coupon": [
          null
        ],
        "daysAgoOfPurchases": 0,
        "enableBuyTogetherPerSku": false,
        "featured": false,
        "firstBuyIsProfileOptimistic": false,
        "giftListTypes": [
          "Wishlist"
        ],
        "id": "77ae1e4c-a216-4b15-a4a3-ae64ec298988",
        "idSellerIsInclusive": false,
        "idsSalesChannel": [
          "Principal"
        ],
        "installment": 0,
        "isDifferentListPriceAndPrice": false,
        "isFirstBuy": false,
        "isMinMaxInstallments": false,
        "isSlaSelected": false,
        "itemMaxPrice": 0,
        "itemMinPrice": 0,
        "listBrand1BuyTogether": [],
        "listCategory1BuyTogether": [
          {
            "id": "1",
            "name": "Vinhos Tintos (1)"
          }
        ],
        "listSku1BuyTogether": [],
        "listSku2BuyTogether": [],
        "marketingTags": [
          "MKT1"
        ],
        "marketingTagsAreNotInclusive": false,
        "maxInstallment": 0,
        "maxUsage": 0,
        "maxUsagePerClient": 0,
        "merchants": [
          null
        ],
        "minInstallment": 0,
        "minimumQuantityBuyTogether": 1,
        "multipleUsePerClient": false,
        "name": "Social Sellers",
        "origin": "Marketplace",
        "paymentsMethods": [
          {
            "id": "2",
            "name": "Visa (2)"
          }
        ],
        "paymentsRules": [
          null
        ],
        "percentualDiscountValueList": [
          0
        ],
        "products": [
          {
            "id": "1",
            "name": "Vinho (1)"
          }
        ],
        "productsAreInclusive": true,
        "productsSpecifications": [
          null
        ],
        "quantityToAffectBuyTogether": 0,
        "restrictionsBins": [
          "1234"
        ],
        "shouldDistributeDiscountAmongMatchedItems": false,
        "skus": [
          {
            "id": "1",
            "name": "Vinho tinto (1)"
          }
        ],
        "skusAreInclusive": true,
        "slasIds": [
          "Express"
        ],
        "stores": [
          null
        ],
        "storesAreInclusive": true,
        "totalValueCeling": 0,
        "totalValueFloor": 40,
        "totalValueIncludeAllItems": true,
        "totalValueMode": "IncludeMatchedItems",
        "totalValuePurchase": 0,
        "useNewProgressiveAlgorithm": false,
        "zipCodeRanges": [
          {
            "inclusive": false
          }
        ]
      }
    ]
  }'
```

`POST /api/rnb/pvt/campaignConfiguration`

Creates a new campaign audience.

> Body parameter

```json
{
  "beginDateUtc": "2020-05-01T21:30:00Z",
  "endDateUtc": "2020-05-02T01:30:00Z",
  "id": "dd270d06-1ed1-47fc-b04e-a2431121b5a4",
  "isActive": true,
  "isAndOperator": true,
  "isArchived": false,
  "lastModified": {
    "dateUtc": "2020-05-01T21:22:01.807398Z",
    "user": "email@email.com"
  },
  "name": "Interna",
  "targetConfigurations": [
    {
      "affiliates": [
        {
          "id": "1",
          "name": "Amazon"
        }
      ],
      "areSalesChannelIdsExclusive": false,
      "brands": [
        {
          "id": "1",
          "name": "Brand (1)"
        }
      ],
      "brandsAreInclusive": true,
      "campaigns": [],
      "cardIssuers": [
        null
      ],
      "categories": [
        {
          "id": "1",
          "name": "Vinhos Tintos (1)"
        }
      ],
      "categoriesAreInclusive": true,
      "clusterExpressions": [
        "birthday=true"
      ],
      "clusterOperator": "string",
      "collections": [
        {
          "id": "1",
          "name": "Collection (1)"
        }
      ],
      "collections1BuyTogether": [
        "1"
      ],
      "collections2BuyTogether": [
        null
      ],
      "collectionsIsInclusive": true,
      "compareListPriceAndPrice": false,
      "coupon": [
        null
      ],
      "daysAgoOfPurchases": 0,
      "enableBuyTogetherPerSku": false,
      "featured": false,
      "firstBuyIsProfileOptimistic": false,
      "giftListTypes": [
        "Wishlist"
      ],
      "id": "77ae1e4c-a216-4b15-a4a3-ae64ec298988",
      "idSellerIsInclusive": false,
      "idsSalesChannel": [
        "Principal"
      ],
      "installment": 0,
      "isDifferentListPriceAndPrice": false,
      "isFirstBuy": false,
      "isMinMaxInstallments": false,
      "isSlaSelected": false,
      "itemMaxPrice": 0,
      "itemMinPrice": 0,
      "listBrand1BuyTogether": [],
      "listCategory1BuyTogether": [
        {
          "id": "1",
          "name": "Vinhos Tintos (1)"
        }
      ],
      "listSku1BuyTogether": [],
      "listSku2BuyTogether": [],
      "marketingTags": [
        "MKT1"
      ],
      "marketingTagsAreNotInclusive": false,
      "maxInstallment": 0,
      "maxUsage": 0,
      "maxUsagePerClient": 0,
      "merchants": [
        null
      ],
      "minInstallment": 0,
      "minimumQuantityBuyTogether": 1,
      "multipleUsePerClient": false,
      "name": "Social Sellers",
      "origin": "Marketplace",
      "paymentsMethods": [
        {
          "id": "2",
          "name": "Visa (2)"
        }
      ],
      "paymentsRules": [
        null
      ],
      "percentualDiscountValueList": [
        0
      ],
      "products": [
        {
          "id": "1",
          "name": "Vinho (1)"
        }
      ],
      "productsAreInclusive": true,
      "productsSpecifications": [
        null
      ],
      "quantityToAffectBuyTogether": 0,
      "restrictionsBins": [
        "1234"
      ],
      "shouldDistributeDiscountAmongMatchedItems": false,
      "skus": [
        {
          "id": "1",
          "name": "Vinho tinto (1)"
        }
      ],
      "skusAreInclusive": true,
      "slasIds": [
        "Express"
      ],
      "stores": [
        null
      ],
      "storesAreInclusive": true,
      "totalValueCeling": 0,
      "totalValueFloor": 40,
      "totalValueIncludeAllItems": true,
      "totalValueMode": "IncludeMatchedItems",
      "totalValuePurchase": 0,
      "useNewProgressiveAlgorithm": false,
      "zipCodeRanges": [
        {
          "inclusive": false
        }
      ]
    }
  ]
}
```

<h3 id="create-campaign-audience-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|
|body|body|object|true|none|
|» beginDateUtc|body|string|false|Start date of the campaign audience in UTC format.|
|» endDateUtc|body|string|false|End date of the campaign audience in UTC format.|
|» id|body|string|false|Campaign audience ID.|
|» isActive|body|boolean|false|Defines if the campaign audience is active (`true`) or not (`false`).|
|» isAndOperator|body|boolean|false|When `true`, determines that all the `targetConfigurations` need to be valid for the campaign audience to be active. When `false`, determines that if at least one of the `targetConfigurations` is valid, the campaign audience will be active.|
|» isArchived|body|boolean|false|Defines if the campaign audience is archived (`true`) or not (`false`).|
|» lastModified|body|object|false|Object with information about the last update of the campaign audience.|
|» » dateUtc|body|string|false|Date of the last update in UTC format.|
|» » user|body|string|false|Email of the user who made the last update.|
|» name|body|string|false|Campaign audience name.|
|» targetConfigurations|body|[object]|false|Array that contains all target audience that the campaign audience will be valid.|
|» » affiliates|body|[object]|false|Marketplace order identifier. The discount will apply to selected affiliates.|
|» » » id|body|string|false|Affiliate ID.|
|» » » name|body|string|false|Affiliate Name.|
|» » areSalesChannelIdsExclusive|body|boolean|false|Shows if the trade policy IDs are exclusive.|
|» » brands|body|[object]|false|Object composed by the brands that will activate or deactivate the campaign audience.|
|» » » id|body|string|false|Brand ID.|
|» » » name|body|string|false|Brand Name.|
|» » brandsAreInclusive|body|boolean|false|If set to `true`, this campaign audience will be applied to any brand present on the `brands` field. If set to `false`, brands present on that field will make this campaign audience not to be applied.|
|» » campaigns|body|[object]|false|Campaign Audiences that activate this promotion.|
|» » cardIssuers|body|[object]|false|**Deprecated.**|
|» » categories|body|[object]|false|Object composed by the categories that will activate or deactivate the campaign audience.|
|» » » id|body|string|false|Category ID.|
|» » » name|body|string|false|Category Name.|
|» » categoriesAreInclusive|body|boolean|false|If set to `true`, this campaign audience will be applied to any category present on the `categories` field. If set to `false`, categories present on that field will make this campaign audience not to be applied.|
|» » clusterExpressions|body|[string]|false|An expression to use with clusters.|
|» » clusterOperator|body|string|false|**Deprecated.**|
|» » collections|body|[object]|false|Object composed by the collections that will activate or deactivate the campaign audience.|
|» » » id|body|string|false|Collection ID.|
|» » » name|body|string|false|Collection Name.|
|» » collections1BuyTogether|body|[string]|false|Collections that will generate the promotion, type **Buy Together**, **More for less**, **Progressive Discount**, **Buy One Get One**.|
|» » collections2BuyTogether|body|[object]|false|**Deprecated.**|
|» » collectionsIsInclusive|body|boolean|false|If set to `true`, this campaign audience will be applied to any collection present on the `collections` field. If set to `false`, collections present on that field will make this campaign audience not to be applied.|
|» » compareListPriceAndPrice|body|boolean|false|If the **List Price** and **Price** are the same.|
|» » coupon|body|[object]|false|**Deprecated.**|
|» » daysAgoOfPurchases|body|integer|false|Number of days that are considered to add the purchase history.|
|» » enableBuyTogetherPerSku|body|boolean|false|Enable **Buy Together** per SKU.|
|» » featured|body|boolean|false|Defines if the target audience is featured (`true`) or not (`false`).|
|» » firstBuyIsProfileOptimistic|body|boolean|false|Applies the discount even if the user is not logged.|
|» » giftListTypes|body|[string]|false|Gifts List Type.|
|» » id|body|string|false|Target audience ID.|
|» » idSellerIsInclusive|body|boolean|false|Shows if at least one of the sellers must be valid to active the campaign audience.|
|» » idsSalesChannel|body|[string]|false|Shows the trade policies that active the campaign audience.|
|» » installment|body|integer|false|**Deprecated.**|
|» » isDifferentListPriceAndPrice|body|boolean|false|Applies the campaign audience only if the list price and price is different.|
|» » isFirstBuy|body|boolean|false|Applies the discount only if it's a first buy.|
|» » isMinMaxInstallments|body|boolean|false|Set if the campaign audience will be applied considering a minimum and maximum values for installments.|
|» » isSlaSelected|body|boolean|false|Applies selected discount only when one of the defined shipping method is selected by the customer.|
|» » itemMaxPrice|body|number|false|Maximum price of the item.|
|» » itemMinPrice|body|number|false|Minimum price of the item.|
|» » listBrand1BuyTogether|body|[object]|false|Brand first list for the promotion **Buy Together.|
|» » listCategory1BuyTogether|body|[object]|false|Category first list for the promotion **Buy Together**.|
|» » » id|body|string|false|Category ID.|
|» » » name|body|string|false|Category name.|
|» » listSku1BuyTogether|body|[object]|false|SKU first list for the promotion **Buy Together**.|
|» » listSku2BuyTogether|body|[object]|false|SKU second list for the promotion **Buy Together**.|
|» » marketingTags|body|[string]|false|Array with all campaign audience's marketing tags.|
|» » marketingTagsAreNotInclusive|body|boolean|false|Shows if marketing tags are not inclusive.|
|» » maxInstallment|body|integer|false|Maximum value for installment.|
|» » maxUsage|body|integer|false|Defines how many times the campaign audience can be used.|
|» » maxUsagePerClient|body|integer|false|Defines if the campaign audience can be used multiple times per client.|
|» » merchants|body|[object]|false|**Deprecated.**|
|» » minInstallment|body|integer|false|Minimum value for installment.|
|» » minimumQuantityBuyTogether|body|integer|false|Minimum quantity for **Buy Together** promotion.|
|» » multipleUsePerClient|body|boolean|false|Defines if the campaign audience can be used multiple times per client.|
|» » name|body|string|false|Target audience name.|
|» » origin|body|string|false|Shows the campaign audience origin, `Marketplace` or `Fulfillment`.  Read [Difference between orders with marketplace and fulfillment sources](https://help.vtex.com/en/tutorial/what-are-orders-with-marketplace-source-and-orders-with-fulfillment-source--6eVYrmUAwMOeKICU2KuG06) for more information.|
|» » paymentsMethods|body|[object]|false|Array composed by all the Payments Methods.|
|» » » id|body|string|false|Payment Method ID.|
|» » » name|body|string|false|Payment Method Name.|
|» » paymentsRules|body|[object]|false|**Deprecated.**|
|» » percentualDiscountValueList|body|[number]|false|Percentual discount value list.|
|» » products|body|[object]|false|Object composed by the products that will activate or deactivate the campaign audience.|
|» » » id|body|string|false|Product ID.|
|» » » name|body|string|false|Product Name.|
|» » productsAreInclusive|body|boolean|false|If set to `true`, this campaign audience will be applied to any product present on the `products` field. If set to `false`, products present on that field will make this campaign audience not to be applied.|
|» » productsSpecifications|body|[object]|false|**Deprecated.**|
|» » quantityToAffectBuyTogether|body|integer|false|Quantity to affect **Buy Together** promotion.|
|» » restrictionsBins|body|[string]|false|The discount will be granted if the card's BIN is given.|
|» » shouldDistributeDiscountAmongMatchedItems|body|boolean|false|Should distribute discount among matched items.|
|» » skus|body|[object]|false|Object composed by the SKUs that will activate or deactivate the campaign audience.|
|» » » id|body|string|false|SKU ID.|
|» » » name|body|string|false|SKU Name.|
|» » skusAreInclusive|body|boolean|false|If set to `true`, this campaign audience will be applied to any SKU present on the `skus` field. If set to `false`, SKUs present on that field will make this campaign audience not to be applied.|
|» » slasIds|body|[string]|false|The discount will be granted if the shipping method is the same as the one given.|
|» » stores|body|[object]|false|**Deprecated.**|
|» » storesAreInclusive|body|boolean|false|**Deprecated.**|
|» » totalValueCeling|body|number|false|Maximum chart value to active the campaign audience.|
|» » totalValueFloor|body|number|false|Minimum chart value to active the campaign audience.|
|» » totalValueIncludeAllItems|body|boolean|false|**Deprecated.**|
|» » totalValueMode|body|string|false|Total chart value to active the campaign audience.|
|» » totalValuePurchase|body|number|false|Total value a client must have in past orders to active the campaign audience.|
|» » useNewProgressiveAlgorithm|body|boolean|false|Use new progressive algorithm.|
|» » zipCodeRanges|body|[object]|false|Range of the zip code that applies the campaign audience.|
|» » » inclusive|body|boolean|false|Defines if the zip code applies the campaign audience.|

> Example responses

> 200 Response

```json
{
  "beginDateUtc": "2020-05-01T21:30:00Z",
  "endDateUtc": "2020-05-02T01:30:00Z",
  "id": "dd270d06-1ed1-47fc-b04e-a2431121b5a4",
  "isActive": true,
  "isAndOperator": false,
  "isArchived": false,
  "lastModified": {
    "dateUtc": "2020-05-01T21:22:01.807398Z",
    "user": "email@email.com"
  },
  "name": "Interna",
  "targetConfigurations": [
    {
      "affiliates": [],
      "areSalesChannelIdsExclusive": false,
      "brands": [],
      "brandsAreInclusive": true,
      "campaigns": [],
      "cardIssuers": [],
      "categories": [],
      "categoriesAreInclusive": true,
      "clusterExpressions": [],
      "collections": [],
      "collections1BuyTogether": [],
      "collections2BuyTogether": [],
      "collectionsIsInclusive": true,
      "compareListPriceAndPrice": false,
      "coupon": [],
      "daysAgoOfPurchases": 0,
      "enableBuyTogetherPerSku": false,
      "featured": false,
      "firstBuyIsProfileOptimistic": false,
      "giftListTypes": [],
      "id": "77ae1e4c-a216-4b15-a4a3-ae64ec298988",
      "idSellerIsInclusive": false,
      "idsSalesChannel": [],
      "installment": 0,
      "isDifferentListPriceAndPrice": false,
      "isFirstBuy": false,
      "isMinMaxInstallments": false,
      "isSlaSelected": false,
      "itemMaxPrice": 0,
      "itemMinPrice": 0,
      "listBrand1BuyTogether": [],
      "listCategory1BuyTogether": [],
      "listSku1BuyTogether": [],
      "listSku2BuyTogether": [],
      "marketingTags": [
        "MKT1"
      ],
      "marketingTagsAreNotInclusive": false,
      "maxInstallment": 0,
      "maxUsage": 0,
      "maxUsagePerClient": 0,
      "merchants": [],
      "minInstallment": 0,
      "minimumQuantityBuyTogether": 1,
      "multipleUsePerClient": false,
      "name": "Social Sellers",
      "origin": "Marketplace",
      "paymentsMethods": [],
      "paymentsRules": [],
      "percentualDiscountValueList": [],
      "products": [],
      "productsAreInclusive": false,
      "productsSpecifications": [],
      "quantityToAffectBuyTogether": 0,
      "restrictionsBins": [],
      "shouldDistributeDiscountAmongMatchedItems": false,
      "skus": [],
      "skusAreInclusive": true,
      "slasIds": [],
      "stores": [],
      "storesAreInclusive": false,
      "totalValueCeling": 0,
      "totalValueFloor": 0,
      "totalValueIncludeAllItems": false,
      "totalValueMode": "IncludeMatchedItems",
      "totalValuePurchase": 0,
      "useNewProgressiveAlgorithm": false,
      "zipCodeRanges": [
        {
          "inclusive": true
        }
      ]
    }
  ]
}
```

<h3 id="create-campaign-audience-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="create-campaign-audience-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|beginDateUtc|string|false|none|Start date of the campaign audience in UTC format.|
|endDateUtc|string|false|none|End date of the campaign audience in UTC format.|
|id|string|false|none|Campaign audience ID.|
|isActive|boolean|false|none|Defines if the campaign audience is active (`true`) or not (`false`).|
|isAndOperator|boolean|false|none|When `true`, determines that all the `targetConfigurations` need to be valid for the campaign audience to be active. When `false`, determines that if at least one of the `targetConfigurations` is valid, the campaign audience will be active.|
|isArchived|boolean|false|none|Defines if the campaign audience is archived (`true`) or not (`false`).|
|lastModified|object|false|none|Object with information about the most recent update of the campaign audience.|
|» dateUtc|string|false|none|Date of the most recent update in UTC format.|
|» user|string|false|none|Email of the user who updated the campaign audience for the latest time.|
|name|string|false|none|Campaign audience name.|
|targetConfigurations|[object]|false|none|Array that contains all target audience that the campaign audience will be valid.|
|» affiliates|[object]|false|none|Marketplace order identifier. The discount will apply to selected affiliates.|
|» » id|string|false|none|Affiliate ID.|
|» » name|string|false|none|Affiliate Name.|
|» areSalesChannelIdsExclusive|boolean|false|none|Defines if the trade policy IDs are exclusive.|
|» brands|[object]|false|none|Object composed by the brands that will activate or deactivate the campaign audience.|
|» » id|string|false|none|Brand ID.|
|» » name|string|false|none|Brand Name.|
|» brandsAreInclusive|boolean|false|none|If set to `true`, this campaign audience will be applied to any brand present on the `brands` field. If set to `false`, brands present on that field will make this campaign audience not to be applied.|
|» campaigns|[object]|false|none|Campaign Audiences that activate this promotion.|
|» cardIssuers|[object]|false|none|**Deprecated.**|
|» categories|[object]|false|none|Object composed by the categories that will activate or deactivate the campaign audience.|
|» » id|string|false|none|Category ID.|
|» » name|string|false|none|Category Name.|
|» categoriesAreInclusive|boolean|false|none|If set to `true`, this campaign audience will be applied to any category present on the `categories` field. If set to `false`, categories present on that field will make this campaign audience not to be applied.|
|» clusterExpressions|[string]|false|none|An expression to use with clusters.|
|» clusterOperator|string|false|none|**Deprecated.**|
|» collections|[object]|false|none|Object composed by the collections that will activate or deactivate the campaign audience.|
|» » id|string|false|none|Collection ID.|
|» » name|string|false|none|Collection Name.|
|» collections1BuyTogether|[string]|false|none|Collections that will generate the promotion, type **Buy Together**, **More for less**, **Progressive Discount**, **Buy One Get One**.|
|» collections2BuyTogether|[object]|false|none|**Deprecated.**|
|» collectionsIsInclusive|boolean|false|none|If set to `true`, this campaign audience will be applied to any collection present on the `collections` field. If set to `false`, collections present on that field will make this campaign audience not to be applied.|
|» compareListPriceAndPrice|boolean|false|none|If the **List Price** and **Price** are the same.|
|» coupon|[object]|false|none|**Deprecated.**|
|» daysAgoOfPurchases|integer|false|none|Number of days that are considered to add the purchase history.|
|» enableBuyTogetherPerSku|boolean|false|none|Enable **Buy Together** per SKU.|
|» featured|boolean|false|none|Defines if the target audience is feature (`true`) or not (`false`).|
|» firstBuyIsProfileOptimistic|boolean|false|none|Applies the discount even if the user is not logged.|
|» giftListTypes|[string]|false|none|Gifts List Type.|
|» id|string|false|none|Target audience ID.|
|» idSellerIsInclusive|boolean|false|none|Defines if at least one of the sellers must be valid to active the campaign audience.|
|» idsSalesChannel|[string]|false|none|Array with all the trade policies that activate the campaign audience.|
|» installment|integer|false|none|**Deprecated.**|
|» isDifferentListPriceAndPrice|boolean|false|none|Applies the campaign audience only if the list price and price is different.|
|» isFirstBuy|boolean|false|none|Applies the discount only if it's a first buy.|
|» isMinMaxInstallments|boolean|false|none|Set if the campaign audience will be applied considering a minimum and maximum values for installments.|
|» isSlaSelected|boolean|false|none|Applies selected discount only when one of the defined shipping method is selected by the customer.|
|» itemMaxPrice|number|false|none|Maximum price of the item.|
|» itemMinPrice|number|false|none|Minimum price of the item.|
|» listBrand1BuyTogether|[object]|false|none|Brand first list for the promotion **Buy Together.|
|» listCategory1BuyTogether|[object]|false|none|Category first list for the promotion **Buy Together**.|
|» listSku1BuyTogether|[object]|false|none|SKU first list for the promotion **Buy Together**.|
|» listSku2BuyTogether|[object]|false|none|SKU second list for the promotion **Buy Together**.|
|» marketingTags|[string]|false|none|Array with all the campaign audience's marketing tags.|
|» marketingTagsAreNotInclusive|boolean|false|none|Defines if marketing tags are not inclusive.|
|» maxInstallment|integer|false|none|Maximum value for installment.|
|» maxUsage|integer|false|none|Defines how many times the campaign audience can be used.|
|» maxUsagePerClient|integer|false|none|Defines if the campaign audience can be used multiple times per client.|
|» merchants|[object]|false|none|**Deprecated.**|
|» minInstallment|integer|false|none|Minimum value for installment.|
|» minimumQuantityBuyTogether|integer|false|none|Minimum quantity for **Buy Together** promotion.|
|» multipleUsePerClient|boolean|false|none|Defines if the campaign audience can be used multiple times per client.|
|» name|string|false|none|Target audience name.|
|» origin|string|false|none|Shows the campaign audience origin, `Marketplace` or `Fulfillment`.  Read [Difference between orders with marketplace and fulfillment sources](https://help.vtex.com/en/tutorial/what-are-orders-with-marketplace-source-and-orders-with-fulfillment-source--6eVYrmUAwMOeKICU2KuG06) for more information.|
|» paymentsMethods|[object]|false|none|Array composed by all the Payments Methods.|
|» » id|string|false|none|Payment Method ID.|
|» » name|string|false|none|Payment Method Name.|
|» paymentsRules|[object]|false|none|**Deprecated.**|
|» percentualDiscountValueList|[number]|false|none|Percentual discount value list.|
|» products|[object]|false|none|Object composed by the products that will activate or deactivate the campaign audience.|
|» » id|string|false|none|Product ID.|
|» » name|string|false|none|Product Name.|
|» productsAreInclusive|boolean|false|none|If set to `true`, this campaign audience will be applied to any product present on the `products` field. If set to `false`, products present on that field will make this campaign audience not to be applied.|
|» productsSpecifications|[object]|false|none|**Deprecated.**|
|» quantityToAffectBuyTogether|integer|false|none|Quantity to affect **Buy Together** promotion.|
|» restrictionsBins|[string]|false|none|The discount will be granted if the card's BIN is given.|
|» shouldDistributeDiscountAmongMatchedItems|boolean|false|none|Should distribute discount among matched items.|
|» skus|[object]|false|none|Object composed by the SKUs that will activate or deactivate the campaign audience.|
|» » id|string|false|none|SKU ID.|
|» » name|string|false|none|SKU Name.|
|» skusAreInclusive|boolean|false|none|If set to `true`, this campaign audience will be applied to any SKU present on the `skus` field. If set to `false`, SKUs present on that field will make this campaign audience not to be applied.|
|» slasIds|[string]|false|none|The discount will be granted if the shipping method is the same as the one given.|
|» stores|[object]|false|none|**Deprecated.**|
|» storesAreInclusive|boolean|false|none|**Deprecated.**|
|» totalValueCeling|number|false|none|Maximum chart value to active the campaign audience.|
|» totalValueFloor|number|false|none|Minimum chart value to active the campaign audience.|
|» totalValueIncludeAllItems|boolean|false|none|**Deprecated.**|
|» totalValueMode|string|false|none|Total chart value to active the campaign audience.|
|» totalValuePurchase|number|false|none|Total value a client must have in past orders to active the campaign audience.|
|» useNewProgressiveAlgorithm|boolean|false|none|Use new progressive algorithm.|
|» zipCodeRanges|[object]|false|none|Range of the zip code that applies the campaign audience.|
|» » inclusive|boolean|false|none|Defines if the zip code applies the campaign audience.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get campaign audience configuration

<a id="opIdGetcampaignconfiguration"></a>

> Code samples

```bash
curl https://example.com/api/rnb/pvt/campaignConfiguration/dd270d06-1ed1-47fc-b04e-a2431121b5a4 \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/rnb/pvt/campaignConfiguration/{campaignId}`

Retrieves a specific campaign audience configuration by its ID. This API uses the campaign ID, not the campaign name.

<h3 id="get-campaign-audience-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|
|campaignId|path|string|true|Campaign audience unique identifier.|

> Example responses

> 200 Response

```json
{
  "beginDateUtc": "2020-05-01T21:30:00Z",
  "endDateUtc": "2020-05-02T01:30:00Z",
  "id": "dd270d06-1ed1-47fc-b04e-a2431121b5a4",
  "isActive": true,
  "isAndOperator": false,
  "isArchived": false,
  "lastModified": {
    "dateUtc": "2020-05-01T21:22:01.807398Z",
    "user": "email@email.com"
  },
  "name": "Interna",
  "targetConfigurations": [
    {
      "affiliates": [],
      "areSalesChannelIdsExclusive": false,
      "brands": [],
      "brandsAreInclusive": true,
      "campaigns": [],
      "cardIssuers": [],
      "categories": [],
      "categoriesAreInclusive": true,
      "clusterExpressions": [],
      "clusterOperator": "all",
      "collections": [],
      "collections1BuyTogether": [],
      "collections2BuyTogether": [],
      "collectionsIsInclusive": true,
      "compareListPriceAndPrice": false,
      "coupon": [],
      "daysAgoOfPurchases": 0,
      "enableBuyTogetherPerSku": false,
      "featured": false,
      "firstBuyIsProfileOptimistic": false,
      "giftListTypes": [],
      "id": "77ae1e4c-a216-4b15-a4a3-ae64ec298988",
      "idSellerIsInclusive": false,
      "idsSalesChannel": [],
      "installment": 0,
      "isDifferentListPriceAndPrice": false,
      "isFirstBuy": false,
      "isMinMaxInstallments": false,
      "isSlaSelected": false,
      "itemMaxPrice": 0,
      "itemMinPrice": 0,
      "listBrand1BuyTogether": [],
      "listCategory1BuyTogether": [],
      "listSku1BuyTogether": [],
      "listSku2BuyTogether": [],
      "marketingTags": [
        "MKT1"
      ],
      "marketingTagsAreNotInclusive": false,
      "maxInstallment": 0,
      "maxUsage": 0,
      "maxUsagePerClient": 0,
      "merchants": [],
      "minInstallment": 0,
      "minimumQuantityBuyTogether": 1,
      "multipleUsePerClient": false,
      "name": "Social Sellers",
      "origin": "Marketplace",
      "paymentsMethods": [],
      "paymentsRules": [],
      "percentualDiscountValueList": [],
      "products": [],
      "productsAreInclusive": false,
      "productsSpecifications": [],
      "quantityToAffectBuyTogether": 0,
      "restrictionsBins": [],
      "shouldDistributeDiscountAmongMatchedItems": false,
      "skus": [],
      "skusAreInclusive": true,
      "slasIds": [],
      "stores": [],
      "storesAreInclusive": false,
      "totalValueCeling": 0,
      "totalValueFloor": 0,
      "totalValueIncludeAllItems": false,
      "totalValueMode": "IncludeMatchedItems",
      "totalValuePurchase": 0,
      "useNewProgressiveAlgorithm": false,
      "zipCodeRanges": [
        {
          "inclusive": true
        }
      ]
    }
  ]
}
```

<h3 id="get-campaign-audience-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-campaign-audience-configuration-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|beginDateUtc|string|false|none|Start date of the campaign audience in UTC format.|
|endDateUtc|string|false|none|End date of the campaign audience in UTC format.|
|id|string|false|none|Campaign audience ID.|
|isActive|boolean|false|none|Defines if the campaign audience is active (`true`) or not (`false`).|
|isAndOperator|boolean|false|none|When `true`, determines that all the `targetConfigurations` need to be valid for the campaign audience to be active. When `false`, determines that if at least one of the `targetConfigurations` is valid, the campaign audience will be active.|
|isArchived|boolean|false|none|Defines if the campaign audience is archived (`true`) or not (`false`).|
|lastModified|object|false|none|Object with information about the most recent update of the campaign audience.|
|» dateUtc|string|false|none|Date of the most recent update in UTC format.|
|» user|string|false|none|Email of the user who updated the campaign audience for the latest time.|
|name|string|false|none|Campaign audience name.|
|targetConfigurations|[object]|false|none|Array that contains all target audience that the campaign audience will be valid.|
|» affiliates|[object]|false|none|Marketplace order identifier. The discount will apply to selected affiliates.|
|» » id|string|false|none|Affiliate ID.|
|» » name|string|false|none|Affiliate Name.|
|» areSalesChannelIdsExclusive|boolean|false|none|Defines if the trade policy IDs are exclusive.|
|» brands|[object]|false|none|Object composed by the brands that will activate or deactivate the campaign audience.|
|» » id|string|false|none|Brand ID.|
|» » name|string|false|none|Brand Name.|
|» brandsAreInclusive|boolean|false|none|If set to `true`, this campaign audience will be applied to any brand present on the `brands` field. If set to `false`, brands present on that field will make this campaign audience not to be applied.|
|» campaigns|[object]|false|none|Campaign Audiences that activate this promotion.|
|» cardIssuers|[object]|false|none|**Deprecated.**|
|» categories|[object]|false|none|Object composed by the categories that will activate or deactivate the campaign audience.|
|» » id|string|false|none|Category ID.|
|» » name|string|false|none|Category Name.|
|» categoriesAreInclusive|boolean|false|none|If set to `true`, this campaign audience will be applied to any category present on the `categories` field. If set to `false`, categories present on that field will make this campaign audience not to be applied.|
|» clusterExpressions|[string]|false|none|An expression to use with clusters.|
|» collections|[object]|false|none|Object composed by the collections that will activate or deactivate the campaign audience.|
|» » id|string|false|none|Collection ID.|
|» » name|string|false|none|Collection Name.|
|» collections1BuyTogether|[string]|false|none|Collections that will generate the promotion, type **Buy Together**, **More for less**, **Progressive Discount**, **Buy One Get One**.|
|» collections2BuyTogether|[object]|false|none|**Deprecated.**|
|» collectionsIsInclusive|boolean|false|none|If set to `true`, this campaign audience will be applied to any collection present on the `collections` field. If set to `false`, collections present on that field will make this campaign audience not to be applied.|
|» compareListPriceAndPrice|boolean|false|none|If the **List Price** and **Price** are the same.|
|» coupon|[object]|false|none|**Deprecated.**|
|» daysAgoOfPurchases|integer|false|none|Number of days that are considered to add the purchase history.|
|» enableBuyTogetherPerSku|boolean|false|none|Enable **Buy Together** per SKU.|
|» featured|boolean|false|none|Defines if the target audience is featured (`true`) or not (`false`).|
|» firstBuyIsProfileOptimistic|boolean|false|none|Applies the discount even if the user is not logged.|
|» giftListTypes|[string]|false|none|Gifts List Type.|
|» id|string|false|none|Target audience ID.|
|» idSellerIsInclusive|boolean|false|none|Defines if at least one of the sellers must be valid to active the campaign audience.|
|» idsSalesChannel|[string]|false|none|Array with all the trade policies that activate the campaign audience.|
|» installment|integer|false|none|**Deprecated.**|
|» isDifferentListPriceAndPrice|boolean|false|none|Applies the campaign audience only if the list price and price is different.|
|» isFirstBuy|boolean|false|none|Applies the discount only if it's a first buy.|
|» isMinMaxInstallments|boolean|false|none|Set if the campaign audience will be applied considering a minimum and maximum values for installments.|
|» isSlaSelected|boolean|false|none|Applies selected discount only when one of the defined shipping method is selected by the customer.|
|» itemMaxPrice|number|false|none|Maximum price of the item.|
|» itemMinPrice|number|false|none|Minimum price of the item.|
|» listBrand1BuyTogether|[object]|false|none|Brand first list for the promotion **Buy Together.|
|» listCategory1BuyTogether|[object]|false|none|Category first list for the promotion **Buy Together**.|
|» listSku1BuyTogether|[object]|false|none|SKU first list for the promotion **Buy Together**.|
|» listSku2BuyTogether|[object]|false|none|SKU second list for the promotion **Buy Together**.|
|» marketingTags|[string]|false|none|Array with all the campaign audience's marketing tags.|
|» marketingTagsAreNotInclusive|boolean|false|none|Defines if marketing tags are not inclusive.|
|» maxInstallment|integer|false|none|Maximum value for installment.|
|» maxUsage|integer|false|none|Defines how many times the campaign audience can be used.|
|» maxUsagePerClient|integer|false|none|Defines if the campaign audience can be used multiple times per client.|
|» merchants|[object]|false|none|**Deprecated.**|
|» minInstallment|integer|false|none|Minimum value for installment.|
|» minimumQuantityBuyTogether|integer|false|none|Minimum quantity for **Buy Together** promotion.|
|» multipleUsePerClient|boolean|false|none|Defines if the campaign audience can be used multiple times per client.|
|» name|string|false|none|Target audience name.|
|» origin|string|false|none|Shows the campaign audience origin, `Marketplace` or `Fulfillment`.  Read [Difference between orders with marketplace and fulfillment sources](https://help.vtex.com/en/tutorial/what-are-orders-with-marketplace-source-and-orders-with-fulfillment-source--6eVYrmUAwMOeKICU2KuG06) for more information.|
|» paymentsMethods|[object]|false|none|Array composed by all the Payments Methods.|
|» » id|string|false|none|Payment Method ID.|
|» » name|string|false|none|Payment Method Name.|
|» paymentsRules|[object]|false|none|**Deprecated.**|
|» percentualDiscountValueList|[number]|false|none|Percentual discount value list.|
|» products|[object]|false|none|Object composed by the products that will activate or deactivate the campaign audience.|
|» » id|string|false|none|Product ID.|
|» » name|string|false|none|Product Name.|
|» productsAreInclusive|boolean|false|none|If set to `true`, this campaign audience will be applied to any product present on the `products` field. If set to `false`, products present on that field will make this campaign audience not to be applied.|
|» productsSpecifications|[object]|false|none|**Deprecated.**|
|» quantityToAffectBuyTogether|integer|false|none|Quantity to affect **Buy Together** promotion.|
|» restrictionsBins|[string]|false|none|The discount will be granted if the card's BIN is given.|
|» shouldDistributeDiscountAmongMatchedItems|boolean|false|none|Should distribute discount among matched items.|
|» skus|[object]|false|none|Object composed by the SKUs that will activate or deactivate the campaign audience.|
|» » id|string|false|none|SKU ID.|
|» » name|string|false|none|SKU Name.|
|» skusAreInclusive|boolean|false|none|If set to `true`, this campaign audience will be applied to any SKU present on the `skus` field. If set to `false`, SKUs present on that field will make this campaign audience not to be applied.|
|» slasIds|[string]|false|none|The discount will be granted if the shipping method is the same as the one given.|
|» stores|[object]|false|none|**Deprecated.**|
|» storesAreInclusive|boolean|false|none|**Deprecated.**|
|» totalValueCeling|number|false|none|Maximum chart value to active the campaign audience.|
|» totalValueFloor|number|false|none|Minimum chart value to active the campaign audience.|
|» totalValueIncludeAllItems|boolean|false|none|**Deprecated.**|
|» totalValueMode|string|false|none|Total chart value to active the campaign audience.|
|» totalValuePurchase|number|false|none|Total value a client must have in past orders to active the campaign audience.|
|» useNewProgressiveAlgorithm|boolean|false|none|Use new progressive algorithm.|
|» zipCodeRanges|[object]|false|none|Range of the zip code that applies the campaign audience.|
|» » inclusive|boolean|false|none|Defines if the zip code applies the campaign audience.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

<h1 id="promotions-taxes-api-notifications">Notifications</h1>

## Usage notification

<a id="opIdUsagenotification"></a>

> Code samples

```bash
curl https://example.com/api/rnb/pub/notifications \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "accountId": "ffffffff-gggg-hhhh-iiii-jjjjjjjjjjjj",
    "calculatorIds": [
      "discount_basetestqa_1"
    ],
    "coupon": "cupom",
    "itemsCount": 4,
    "orderId": "vbbbbbb-1",
    "profileId": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee",
    "used": true
  }'
```

`POST /api/rnb/pub/notifications`

Usage notification

> Body parameter

```json
{
  "accountId": "ffffffff-gggg-hhhh-iiii-jjjjjjjjjjjj",
  "calculatorIds": [
    "discount_basetestqa_1"
  ],
  "coupon": "cupom",
  "itemsCount": 4,
  "orderId": "vbbbbbb-1",
  "profileId": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee",
  "used": true
}
```

<h3 id="usage-notification-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|
|body|body|[UsagenotificationRequest](#schemausagenotificationrequest)|true|none|
|» accountId|body|string|true|none|
|» calculatorIds|body|[string]|true|none|
|» coupon|body|string|true|none|
|» itemsCount|body|integer(int32)|true|none|
|» orderId|body|string|true|none|
|» profileId|body|string|true|none|
|» used|body|boolean|true|none|

<h3 id="usage-notification-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

<h1 id="promotions-taxes-api-bundles">Bundles</h1>

## Calculate discounts and taxes (Bundles)

<a id="opIdCalculatediscountsandtaxes(Bundles)"></a>

> Code samples

```bash
curl https://example.com/pub/bundles \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "isShoppingCart": true,
    "items": [
      {
        "id": "160",
        "index": 0,
        "isGift": false,
        "logisticsInfos": [],
        "measurementUnit": "un",
        "params": [
          {
            "name": "Seller@CatalogSystem",
            "value": "1"
          },
          {
            "name": "product@CatalogSystem",
            "value": "94"
          }
        ],
        "priceSheet": [],
        "priceTags": [],
        "productSpecifications": [],
        "quantity": 3,
        "sellerId": "1",
        "unitMultiplier": 1
      }
    ],
    "origin": "Marketplace",
    "params": [
      {
        "name": "product@CatalogSystem",
        "value": "2662"
      },
      {
        "name": "couponCode@Marketing",
        "value": "coupon"
      }
    ],
    "profileId": "aa",
    "salesChannel": "1"
  }'
```

`POST /pub/bundles`

Calculate discounts and taxes

> Body parameter

```json
{
  "isShoppingCart": true,
  "items": [
    {
      "id": "160",
      "index": 0,
      "isGift": false,
      "logisticsInfos": [],
      "measurementUnit": "un",
      "params": [
        {
          "name": "Seller@CatalogSystem",
          "value": "1"
        },
        {
          "name": "product@CatalogSystem",
          "value": "94"
        }
      ],
      "priceSheet": [],
      "priceTags": [],
      "productSpecifications": [],
      "quantity": 3,
      "sellerId": "1",
      "unitMultiplier": 1
    }
  ],
  "origin": "Marketplace",
  "params": [
    {
      "name": "product@CatalogSystem",
      "value": "2662"
    },
    {
      "name": "couponCode@Marketing",
      "value": "coupon"
    }
  ],
  "profileId": "aa",
  "salesChannel": "1"
}
```

<h3 id="calculate-discounts-and-taxes-bundles-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|
|body|body|[Calculatediscountsandtaxes_Bundles_Request](#schemacalculatediscountsandtaxes_bundles_request)|true|none|
|» isShoppingCart|body|boolean|true|none|
|» items|body|[[Item](#schemaitem)]|true|none|
|» origin|body|string|true|none|
|» params|body|[[Param](#schemaparam)]|true|none|
|» profileId|body|string|true|none|
|» salesChannel|body|string|true|none|

<h3 id="calculate-discounts-and-taxes-bundles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

<h1 id="promotions-taxes-api-prices-legacy---v1">Prices (Legacy - v1)</h1>

## Save Price

<a id="opIdSaveprice"></a>

> Code samples

```bash
curl 'https://example.com/price-sheet?an=%7B%7BaccountName%7D%7D' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '[
    {
      "itemId": 2390148,
      "listPrice": 1,
      "price": 1,
      "salesChannel": 1,
      "sellerId": 1,
      "validFrom": "2016-01-01T02:00:00Z",
      "validTo": "2017-01-01T02:00:00Z"
    }
  ]'
```

`POST /price-sheet`

Save price. 
> If your account is using Pricing v2, you should avoid using these routes. Please refer directly to the [Pricing v2 API](https://documenter.getpostman.com/view/101975/vtex-pricing-api/6YsWxKT) 

> If you are still using Pricing v1, please [check if your store is able to migrate to take advantage of many more features](https://help.vtex.com/en/faq/how-to-migrate-a-store-to-pricing-v2)

> Body parameter

```json
[
  {
    "itemId": 2390148,
    "listPrice": 1,
    "price": 1,
    "salesChannel": 1,
    "sellerId": 1,
    "validFrom": "2016-01-01T02:00:00Z",
    "validTo": "2017-01-01T02:00:00Z"
  }
]
```

<h3 id="save-price-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|
|an|query|string|true|none|
|body|body|[[SavepriceRequest](#schemasavepricerequest)]|true|none|

<h3 id="save-price-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get all paged prices

<a id="opIdGetallpaged"></a>

> Code samples

```bash
curl 'https://example.com/price-sheet/all/string/string?an=%7B%7BaccountName%7D%7D' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /price-sheet/all/{page}/{pageSize}`

Get all paged prices. 
> If your account is using Pricing v2, you should avoid using these routes. Please refer directly to the [Pricing v2 API](https://documenter.getpostman.com/view/101975/vtex-pricing-api/6YsWxKT) 

> If you are still using Pricing v1, please [check if your store is able to migrate to take advantage of many more features](https://help.vtex.com/en/faq/how-to-migrate-a-store-to-pricing-v2)

<h3 id="get-all-paged-prices-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|
|an|query|string|true|none|
|page|path|string|true|none|
|pageSize|path|string|true|none|

<h3 id="get-all-paged-prices-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get Price by context

<a id="opIdPricebycontext"></a>

> Code samples

```bash
curl 'https://example.com/price-sheet/context?an=%7B%7BaccountName%7D%7D' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "id": 6324,
    "itemId": 2390148,
    "salesChannel": 1,
    "sellerId": "1",
    "validFrom": "1900-01-01T00:00:00",
    "validTo": "4000-01-01T00:00:00"
  }'
```

`POST /price-sheet/context`

Get price by context. 
> If your account is using Pricing v2, you should avoid using these routes. Please refer directly to the [Pricing v2 API](https://documenter.getpostman.com/view/101975/vtex-pricing-api/6YsWxKT) 

> If you are still using Pricing v1, please [check if your store is able to migrate to take advantage of many more features](https://help.vtex.com/en/faq/how-to-migrate-a-store-to-pricing-v2)

> Body parameter

```json
{
  "id": 6324,
  "itemId": 2390148,
  "salesChannel": 1,
  "sellerId": "1",
  "validFrom": "1900-01-01T00:00:00",
  "validTo": "4000-01-01T00:00:00"
}
```

<h3 id="get-price-by-context-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|
|an|query|string|true|none|
|body|body|[PricebycontextRequest](#schemapricebycontextrequest)|true|none|
|» id|body|integer(int32)|true|none|
|» itemId|body|integer(int32)|true|none|
|» salesChannel|body|integer(int32)|true|none|
|» sellerId|body|string|true|none|
|» validFrom|body|string|true|none|
|» validTo|body|string|true|none|

<h3 id="get-price-by-context-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get Price by SKU ID

<a id="opIdPricebyskuId"></a>

> Code samples

```bash
curl 'https://example.com/price-sheet/string?an=%7B%7BaccountName%7D%7D' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /price-sheet/{skuId}`

Price by SKU ID              
> If your account is using Pricing v2, you should avoid using these routes. Please refer directly to the [Pricing v2 API](https://developers.vtex.com/docs/api-reference/pricing-api)

<h3 id="get-price-by-sku-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|
|an|query|string|true|none|
|skuId|path|string|true|none|

<h3 id="get-price-by-sku-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Delete Price by SKU Id

<a id="opIdDeletebyskuId"></a>

> Code samples

```bash
curl 'https://example.com/price-sheet/string?an=%7B%7BaccountName%7D%7D' \
  -X DELETE \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`DELETE /price-sheet/{skuId}`

Delete all prices from an SKU. 
> If your account is using Pricing v2, you should avoid using these routes. Please refer directly to the [Pricing v2 API](https://documenter.getpostman.com/view/101975/vtex-pricing-api/6YsWxKT) 

> If you are still using Pricing v1, please [check if your store is able to migrate to take advantage of many more features](https://help.vtex.com/en/faq/how-to-migrate-a-store-to-pricing-v2)

<h3 id="delete-price-by-sku-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|
|an|query|string|true|none|
|skuId|path|string|true|none|

<h3 id="delete-price-by-sku-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get Price by SKU ID and Trade Policy

<a id="opIdPricebyskuIdandtradePolicy"></a>

> Code samples

```bash
curl 'https://example.com/price-sheet/string/string?an=%7B%7BaccountName%7D%7D' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /price-sheet/{skuId}/{tradePolicy}`

Retrieve price by SKU ID and Trade Policy. 
> If your account is using Pricing v2, you should avoid using these routes. Please refer directly to the [Pricing v2 API](https://documenter.getpostman.com/view/101975/vtex-pricing-api/6YsWxKT) 

> If you are still using Pricing v1, please [check if your store is able to migrate to take advantage of many more features](https://help.vtex.com/en/faq/how-to-migrate-a-store-to-pricing-v2)

<h3 id="get-price-by-sku-id-and-trade-policy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|
|an|query|string|true|none|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|skuId|path|string|true|none|
|tradePolicy|path|string|true|none|

<h3 id="get-price-by-sku-id-and-trade-policy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

# Schemas

<h2 id="tocS_Calculatediscountsandtaxes_Bundles_Request">Calculatediscountsandtaxes_Bundles_Request</h2>
<!-- backwards compatibility -->
<a id="schemacalculatediscountsandtaxes_bundles_request"></a>
<a id="schema_Calculatediscountsandtaxes_Bundles_Request"></a>
<a id="tocScalculatediscountsandtaxes_bundles_request"></a>
<a id="tocscalculatediscountsandtaxes_bundles_request"></a>

```json
{
  "isShoppingCart": true,
  "items": [
    {
      "id": "160",
      "index": 0,
      "isGift": false,
      "logisticsInfos": [],
      "measurementUnit": "un",
      "params": [
        {
          "name": "Seller@CatalogSystem",
          "value": "1"
        },
        {
          "name": "product@CatalogSystem",
          "value": "94"
        }
      ],
      "priceSheet": [],
      "priceTags": [],
      "productSpecifications": [],
      "quantity": 3,
      "sellerId": "1",
      "unitMultiplier": 1
    }
  ],
  "origin": "Marketplace",
  "params": [
    {
      "name": "product@CatalogSystem",
      "value": "2662"
    },
    {
      "name": "couponCode@Marketing",
      "value": "coupon"
    }
  ],
  "profileId": "aa",
  "salesChannel": "1"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|isShoppingCart|boolean|true|none|none|
|items|[[Item](#schemaitem)]|true|none|none|
|origin|string|true|none|none|
|params|[[Param](#schemaparam)]|true|none|none|
|profileId|string|true|none|none|
|salesChannel|string|true|none|none|

<h2 id="tocS_GetPromotions">GetPromotions</h2>
<!-- backwards compatibility -->
<a id="schemagetpromotions"></a>
<a id="schema_GetPromotions"></a>
<a id="tocSgetpromotions"></a>
<a id="tocsgetpromotions"></a>

```json
[
  {
    "Campaigns": [
      "Campaign Audience example"
    ],
    "activateGiftsMultiplier": false,
    "areSalesChannelIdsExclusive": true,
    "beginDate": "string",
    "description": "string",
    "endDate": "string",
    "hasMaxPricePerItem": true,
    "idCalculatorConfiguration": "string",
    "idsSalesChannel": [
      "string"
    ],
    "isActive": true,
    "isArchived": true,
    "isTax": true,
    "lastModifiedUtc": "string",
    "maxUsage": 0,
    "name": "string",
    "percentualTax": 0,
    "scope": {
      "allCatalog": false,
      "brands": 1,
      "brandsAreInclusive": true,
      "categories": 1,
      "categoriesAreInclusive": true,
      "collections": 1,
      "collectionsAreInclusive": true,
      "products": 1,
      "productsAreInclusive": true,
      "sellers": 0,
      "sellersAreInclusive": false,
      "skus": 1,
      "skusAreInclusive": true
    },
    "status": "string",
    "type": "string",
    "utmCampain": "string",
    "utmSource": "string",
    "utmiCampaign": "string"
  }
]
```

Array with promotions.

<h2 id="tocS_GetTaxes">GetTaxes</h2>
<!-- backwards compatibility -->
<a id="schemagettaxes"></a>
<a id="schema_GetTaxes"></a>
<a id="tocSgettaxes"></a>
<a id="tocsgettaxes"></a>

```json
[
  {
    "Campaigns": [
      "Campaign Audience example"
    ],
    "activateGiftsMultiplier": false,
    "areSalesChannelIdsExclusive": true,
    "beginDate": "string",
    "description": "string",
    "endDate": "string",
    "hasMaxPricePerItem": true,
    "idCalculatorConfiguration": "string",
    "idsSalesChannel": [
      "string"
    ],
    "isActive": true,
    "isArchived": true,
    "isTax": true,
    "lastModifiedUtc": "string",
    "maxUsage": 0,
    "name": "string",
    "percentualTax": 0,
    "scope": {
      "allCatalog": false,
      "brands": 1,
      "brandsAreInclusive": true,
      "categories": 1,
      "categoriesAreInclusive": true,
      "collections": 1,
      "collectionsAreInclusive": true,
      "products": 1,
      "productsAreInclusive": true,
      "sellers": 0,
      "sellersAreInclusive": false,
      "skus": 1,
      "skusAreInclusive": true
    },
    "status": "string",
    "type": "string",
    "utmCampain": "string",
    "utmSource": "string",
    "utmiCampaign": "string"
  }
]
```

Array with taxes.

<h2 id="tocS_Item">Item</h2>
<!-- backwards compatibility -->
<a id="schemaitem"></a>
<a id="schema_Item"></a>
<a id="tocSitem"></a>
<a id="tocsitem"></a>

```json
{
  "id": "160",
  "index": 0,
  "isGift": false,
  "logisticsInfos": [],
  "measurementUnit": "un",
  "params": [
    {
      "name": "Seller@CatalogSystem",
      "value": "1"
    },
    {
      "name": "product@CatalogSystem",
      "value": "94"
    }
  ],
  "priceSheet": [],
  "priceTags": [],
  "productSpecifications": [],
  "quantity": 3,
  "sellerId": "1",
  "unitMultiplier": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|index|integer(int32)|true|none|none|
|isGift|boolean|true|none|none|
|logisticsInfos|[string]|true|none|none|
|measurementUnit|string|true|none|none|
|params|[[Param](#schemaparam)]|true|none|none|
|priceSheet|[string]|true|none|none|
|priceTags|[string]|true|none|none|
|productSpecifications|[string]|true|none|none|
|quantity|integer(int32)|true|none|none|
|sellerId|string|true|none|none|
|unitMultiplier|integer(int32)|true|none|none|

<h2 id="tocS_Param">Param</h2>
<!-- backwards compatibility -->
<a id="schemaparam"></a>
<a id="schema_Param"></a>
<a id="tocSparam"></a>
<a id="tocsparam"></a>

```json
{
  "name": "Seller@CatalogSystem",
  "value": "1"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|value|string|true|none|none|

<h2 id="tocS_PricebycontextRequest">PricebycontextRequest</h2>
<!-- backwards compatibility -->
<a id="schemapricebycontextrequest"></a>
<a id="schema_PricebycontextRequest"></a>
<a id="tocSpricebycontextrequest"></a>
<a id="tocspricebycontextrequest"></a>

```json
{
  "id": 6324,
  "itemId": 2390148,
  "salesChannel": 1,
  "sellerId": "1",
  "validFrom": "1900-01-01T00:00:00",
  "validTo": "4000-01-01T00:00:00"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|true|none|none|
|itemId|integer(int32)|true|none|none|
|salesChannel|integer(int32)|true|none|none|
|sellerId|string|true|none|none|
|validFrom|string|true|none|none|
|validTo|string|true|none|none|

<h2 id="tocS_SavepriceRequest">SavepriceRequest</h2>
<!-- backwards compatibility -->
<a id="schemasavepricerequest"></a>
<a id="schema_SavepriceRequest"></a>
<a id="tocSsavepricerequest"></a>
<a id="tocssavepricerequest"></a>

```json
{
  "itemId": 2390148,
  "listPrice": 1,
  "price": 1,
  "salesChannel": 1,
  "sellerId": 1,
  "validFrom": "2016-01-01T02:00:00Z",
  "validTo": "2017-01-01T02:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|itemId|integer(int32)|true|none|none|
|listPrice|integer(int32)|true|none|none|
|price|integer(int32)|true|none|none|
|salesChannel|integer(int32)|true|none|none|
|sellerId|integer(int32)|true|none|none|
|validFrom|string|true|none|none|
|validTo|string|true|none|none|

<h2 id="tocS_UsagenotificationRequest">UsagenotificationRequest</h2>
<!-- backwards compatibility -->
<a id="schemausagenotificationrequest"></a>
<a id="schema_UsagenotificationRequest"></a>
<a id="tocSusagenotificationrequest"></a>
<a id="tocsusagenotificationrequest"></a>

```json
{
  "accountId": "ffffffff-gggg-hhhh-iiii-jjjjjjjjjjjj",
  "calculatorIds": [
    "discount_basetestqa_1"
  ],
  "coupon": "cupom",
  "itemsCount": 4,
  "orderId": "vbbbbbb-1",
  "profileId": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee",
  "used": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|string|true|none|none|
|calculatorIds|[string]|true|none|none|
|coupon|string|true|none|none|
|itemsCount|integer(int32)|true|none|none|
|orderId|string|true|none|none|
|profileId|string|true|none|none|
|used|boolean|true|none|none|

<h2 id="tocS_ZipCodeRange">ZipCodeRange</h2>
<!-- backwards compatibility -->
<a id="schemazipcoderange"></a>
<a id="schema_ZipCodeRange"></a>
<a id="tocSzipcoderange"></a>
<a id="tocszipcoderange"></a>

```json
{
  "inclusive": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inclusive|boolean|true|none|none|
