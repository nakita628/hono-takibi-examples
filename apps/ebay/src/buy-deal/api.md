<h1 id="deal-api">Deal API v1.3.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<span class="tablenote"><b>Note:</b> This is a <a href="https://developer.ebay.com/api-docs/static/versioning.html#limited" target="_blank"> <img src="/cms/img/docs/partners-api.svg" class="legend-icon partners-icon" title="Limited Release"  alt="Limited Release" />(Limited Release)</a> API available only to select developers approved by business units.</span><br /><br />This API allows third-party developers to search for and retrieve details about eBay deals and events, as well as the items associated with those deals and events.

Base URLs:

* <a href="https://api.ebay.com/buy/deal/v1">https://api.ebay.com/buy/deal/v1</a> - Production

License: <a href="https://go.developer.ebay.com/api-license-agreement">eBay API License Agreement</a>

# Authentication

- oAuth2 authentication. The security definitions for this API. Please check individual operations for applicable scopes.

    - Flow: clientCredentials
    - Token URL = [https://api.ebay.com/identity/v1/oauth2/token](https://api.ebay.com/identity/v1/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://api.ebay.com/oauth/api_scope/buy.deal|View eBay sale events and deals.|

<h1 id="deal-api-dealitem">deal_item</h1>

## getDealItems

<a id="opIdgetDealItems"></a>

> Code samples

```bash
curl https://api.ebay.com/deal_item \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'X-EBAY-C-MARKETPLACE-ID: string'
```

`GET /deal_item`

This method retrieves a paginated set of deal items. The result set contains all deal items associated with the specified search criteria and marketplace ID. Request headers This method uses the X-EBAY-C-ENDUSERCTX request header to support revenue sharing for eBay Partner Networks and to improve the accuracy of shipping and delivery time estimations. For details see, Request headers in the Buying Integration Guide. Restrictions This method can return a maximum of 10,000 items. For a list of supported sites and other restrictions, see API Restrictions. eBay Partner Network: In order to receive a commission for your sales, you must use the URL returned in the itemAffiliateWebUrl field to forward your buyer to the ebay.com site.

<h3 id="getdealitems-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|category_ids|query|string|false|The unique identifier of the eBay category for the search.|
|commissionable|query|string|false|A filter for commissionable deals. Restriction: This filter is currently only supported for the US marketplace.|
|delivery_country|query|string|false|A filter for items that can be shipped to the specified country.|
|limit|query|string|false|The maximum number of items, from the current result set, returned on a single page.|
|offset|query|string|false|The number of items that will be skipped in the result set. This is used with the limit field to control the pagination of the output. For example, if the offset is set to 0 and the limit is set to 10, the method will retrieve items 1 through 10 from the list of items returned. If the offset is set to 10 and the limit is set to 10, the method will retrieve items 11 through 20 from the list of items returned. Default: 0|
|X-EBAY-C-MARKETPLACE-ID|header|string|true|A header used to specify the eBay marketplace ID.|

> Example responses

> 200 Response

```json
{
  "dealItems": [
    {
      "additionalImages": [
        {
          "height": "string",
          "imageUrl": "string",
          "text": "string",
          "width": "string"
        }
      ],
      "categoryAncestorIds": [
        "string"
      ],
      "categoryId": "string",
      "commissionable": true,
      "dealAffiliateWebUrl": "string",
      "dealEndDate": "string",
      "dealStartDate": "string",
      "dealWebUrl": "string",
      "energyEfficiencyClass": "string",
      "image": {
        "height": "string",
        "imageUrl": "string",
        "text": "string",
        "width": "string"
      },
      "itemAffiliateWebUrl": "string",
      "itemGroupId": "string",
      "itemGroupType": "string",
      "itemId": "string",
      "itemWebUrl": "string",
      "legacyItemId": "string",
      "marketingPrice": {
        "discountAmount": {
          "currency": "string",
          "value": "string"
        },
        "discountPercentage": "string",
        "originalPrice": {
          "currency": "string",
          "value": "string"
        },
        "priceTreatment": "string"
      },
      "price": {
        "currency": "string",
        "value": "string"
      },
      "qualifiedPrograms": [
        "string"
      ],
      "shippingOptions": [
        {
          "shippingCost": {
            "currency": "string",
            "value": "string"
          },
          "shippingCostType": "string"
        }
      ],
      "title": "string",
      "unitPrice": {
        "currency": "string",
        "value": "string"
      },
      "unitPricingMeasure": "string"
    }
  ],
  "href": "string",
  "limit": 0,
  "next": "string",
  "offset": 0,
  "prev": "string",
  "total": 0
}
```

<h3 id="getdealitems-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[DealItemSearchResponse](#schemadealitemsearchresponse)|
|400|Bad Request|Bad Request|None|
|403|Forbidden|Forbidden|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope/buy.deal )
</aside>

<h1 id="deal-api-event">event</h1>

## getEvents

<a id="opIdgetEvents"></a>

> Code samples

```bash
curl https://api.ebay.com/event \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'X-EBAY-C-MARKETPLACE-ID: string'
```

`GET /event`

This method returns paginated results containing all eBay events for the specified marketplace. Request headers This method uses the X-EBAY-C-ENDUSERCTX request header to support revenue sharing for eBay Partner Networks and to improve the accuracy of shipping and delivery time estimations. For details see, Request headers in the Buying Integration Guide. Restrictions This method can return a maximum of 10,000 items. For a list of supported sites and other restrictions, see API Restrictions. eBay Partner Network: In order to receive a commission for your sales, you must use the URL returned in the itemAffiliateWebUrl field to forward your buyer to the ebay.com site.

<h3 id="getevents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|string|false|The maximum number of items, from the current result set, returned on a single page. Default: 20 Maximum Value: 100|
|offset|query|string|false|The number of items that will be skipped in the result set. This is used with the limit field to control the pagination of the output. For example, if the offset is set to 0 and the limit is set to 10, the method will retrieve items 1 through 10 from the list of items returned. If the offset is set to 10 and the limit is set to 10, the method will retrieve items 11 through 20 from the list of items returned. Default: 0|
|X-EBAY-C-MARKETPLACE-ID|header|string|true|A header used to specify the eBay marketplace ID.|

> Example responses

> 200 Response

```json
{
  "events": [
    {
      "applicableCoupons": [
        {
          "redemptionCode": "string",
          "terms": {
            "fullText": "string",
            "summary": "string"
          }
        }
      ],
      "description": "string",
      "endDate": "string",
      "eventAffiliateWebUrl": "string",
      "eventId": "string",
      "eventWebUrl": "string",
      "images": [
        {
          "height": "string",
          "imageUrl": "string",
          "text": "string",
          "width": "string"
        }
      ],
      "startDate": "string",
      "terms": {
        "fullText": "string",
        "summary": "string"
      },
      "title": "string"
    }
  ],
  "href": "string",
  "limit": 0,
  "next": "string",
  "offset": 0,
  "prev": "string",
  "total": 0
}
```

<h3 id="getevents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[EventSearchResponse](#schemaeventsearchresponse)|
|400|Bad Request|Bad Request|None|
|403|Forbidden|Forbidden|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope/buy.deal )
</aside>

## getEvent

<a id="opIdgetEvent"></a>

> Code samples

```bash
curl https://api.ebay.com/event/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'X-EBAY-C-MARKETPLACE-ID: string'
```

`GET /event/{event_id}`

This method retrieves the details for an eBay event. The result set contains detailed information associated with the specified event ID, such as applicable coupons, start and end dates, and event terms. Request headers This method uses the X-EBAY-C-ENDUSERCTX request header to support revenue sharing for eBay Partner Networks and to improve the accuracy of shipping and delivery time estimations. For details see, Request headers in the Buying Integration Guide. Restrictions This method can return a maximum of 10,000 items. For a list of supported sites and other restrictions, see API Restrictions. eBay Partner Network: In order to receive a commission for your sales, you must use the URL returned in the itemAffiliateWebUrl field to forward your buyer to the ebay.com site.

<h3 id="getevent-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-EBAY-C-MARKETPLACE-ID|header|string|true|A header used to specify the eBay marketplace ID.|
|event_id|path|string|true|The unique identifier for the eBay event.|

> Example responses

> 200 Response

```json
{
  "applicableCoupons": [
    {
      "redemptionCode": "string",
      "terms": {
        "fullText": "string",
        "summary": "string"
      }
    }
  ],
  "description": "string",
  "endDate": "string",
  "eventAffiliateWebUrl": "string",
  "eventId": "string",
  "eventWebUrl": "string",
  "images": [
    {
      "height": "string",
      "imageUrl": "string",
      "text": "string",
      "width": "string"
    }
  ],
  "startDate": "string",
  "terms": {
    "fullText": "string",
    "summary": "string"
  },
  "title": "string"
}
```

<h3 id="getevent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Event](#schemaevent)|
|400|Bad Request|Bad Request|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope/buy.deal )
</aside>

<h1 id="deal-api-eventitem">event_item</h1>

## getEventItems

<a id="opIdgetEventItems"></a>

> Code samples

```bash
curl 'https://api.ebay.com/event_item?event_ids=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'X-EBAY-C-MARKETPLACE-ID: string'
```

`GET /event_item`

This method returns a paginated set of event items. The result set contains all event items associated with the specified search criteria and marketplace ID. Request headers This method uses the X-EBAY-C-ENDUSERCTX request header to support revenue sharing for eBay Partner Networks and to improve the accuracy of shipping and delivery time estimations. For details see, Request headers in the Buying Integration Guide. Restrictions This method can return a maximum of 10,000 items. For a list of supported sites and other restrictions, see API Restrictions. eBay Partner Network: In order to receive a commission for your sales, you must use the URL returned in the itemAffiliateWebUrl field to forward your buyer to the ebay.com site.

<h3 id="geteventitems-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|category_ids|query|string|false|The unique identifier of the eBay category for the search. Maximum Value: 1|
|delivery_country|query|string|false|A filter for items that can be shipped to the specified country.|
|event_ids|query|string|true|The unique identifiers for the eBay events. Maximum Value: 1|
|limit|query|string|false|The maximum number of items, from the current result set, returned on a single page. Default: 20|
|offset|query|string|false|The number of items that will be skipped in the result set. This is used with the limit field to control the pagination of the output. For example, if the offset is set to 0 and the limit is set to 10, the method will retrieve items 1 through 10 from the list of items returned. If the offset is set to 10 and the limit is set to 10, the method will retrieve items 11 through 20 from the list of items returned. Default: 0|
|X-EBAY-C-MARKETPLACE-ID|header|string|true|A header used to specify the eBay marketplace ID.|

> Example responses

> 200 Response

```json
{
  "eventItems": [
    {
      "additionalImages": [
        {
          "height": "string",
          "imageUrl": "string",
          "text": "string",
          "width": "string"
        }
      ],
      "categoryAncestorIds": [
        "string"
      ],
      "categoryId": "string",
      "energyEfficiencyClass": "string",
      "eventId": "string",
      "image": {
        "height": "string",
        "imageUrl": "string",
        "text": "string",
        "width": "string"
      },
      "itemAffiliateWebUrl": "string",
      "itemGroupId": "string",
      "itemGroupType": "string",
      "itemId": "string",
      "itemWebUrl": "string",
      "legacyItemId": "string",
      "marketingPrice": {
        "discountAmount": {
          "currency": "string",
          "value": "string"
        },
        "discountPercentage": "string",
        "originalPrice": {
          "currency": "string",
          "value": "string"
        },
        "priceTreatment": "string"
      },
      "price": {
        "currency": "string",
        "value": "string"
      },
      "qualifiedPrograms": [
        "string"
      ],
      "shippingOptions": [
        {
          "shippingCost": {
            "currency": "string",
            "value": "string"
          },
          "shippingCostType": "string"
        }
      ],
      "title": "string",
      "unitPrice": {
        "currency": "string",
        "value": "string"
      },
      "unitPricingMeasure": "string"
    }
  ],
  "href": "string",
  "limit": 0,
  "next": "string",
  "offset": 0,
  "prev": "string",
  "total": 0
}
```

<h3 id="geteventitems-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[EventItemSearchResponse](#schemaeventitemsearchresponse)|
|400|Bad Request|Bad Request|None|
|403|Forbidden|Forbidden|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope/buy.deal )
</aside>

# Schemas

<h2 id="tocS_Amount">Amount</h2>
<!-- backwards compatibility -->
<a id="schemaamount"></a>
<a id="schema_Amount"></a>
<a id="tocSamount"></a>
<a id="tocsamount"></a>

```json
{
  "currency": "string",
  "value": "string"
}
```

The currency and value of the item.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currency|string|false|none|The three-letter ISO 4217 code representing the currency of the amount in the value field. Default: The currency of the authenticated user's country. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/buy/deal/types/bas:CurrencyCodeEnum'>eBay API documentation</a>|
|value|string|false|none|The monetary value, in the currency specified by the currency field.|

<h2 id="tocS_Coupon">Coupon</h2>
<!-- backwards compatibility -->
<a id="schemacoupon"></a>
<a id="schema_Coupon"></a>
<a id="tocScoupon"></a>
<a id="tocscoupon"></a>

```json
{
  "redemptionCode": "string",
  "terms": {
    "fullText": "string",
    "summary": "string"
  }
}
```

The details for the coupon available for the item.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|redemptionCode|string|false|none|The coupon code.|
|terms|[Terms](#schematerms)|false|none|The terms of use associated with the coupon.|

<h2 id="tocS_DealItem">DealItem</h2>
<!-- backwards compatibility -->
<a id="schemadealitem"></a>
<a id="schema_DealItem"></a>
<a id="tocSdealitem"></a>
<a id="tocsdealitem"></a>

```json
{
  "additionalImages": [
    {
      "height": "string",
      "imageUrl": "string",
      "text": "string",
      "width": "string"
    }
  ],
  "categoryAncestorIds": [
    "string"
  ],
  "categoryId": "string",
  "commissionable": true,
  "dealAffiliateWebUrl": "string",
  "dealEndDate": "string",
  "dealStartDate": "string",
  "dealWebUrl": "string",
  "energyEfficiencyClass": "string",
  "image": {
    "height": "string",
    "imageUrl": "string",
    "text": "string",
    "width": "string"
  },
  "itemAffiliateWebUrl": "string",
  "itemGroupId": "string",
  "itemGroupType": "string",
  "itemId": "string",
  "itemWebUrl": "string",
  "legacyItemId": "string",
  "marketingPrice": {
    "discountAmount": {
      "currency": "string",
      "value": "string"
    },
    "discountPercentage": "string",
    "originalPrice": {
      "currency": "string",
      "value": "string"
    },
    "priceTreatment": "string"
  },
  "price": {
    "currency": "string",
    "value": "string"
  },
  "qualifiedPrograms": [
    "string"
  ],
  "shippingOptions": [
    {
      "shippingCost": {
        "currency": "string",
        "value": "string"
      },
      "shippingCostType": "string"
    }
  ],
  "title": "string",
  "unitPrice": {
    "currency": "string",
    "value": "string"
  },
  "unitPricingMeasure": "string"
}
```

The detailed data returned for the deal item.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalImages|[[Image](#schemaimage)]|false|none|The additional images for the deal item.|
|categoryAncestorIds|[string]|false|none|The IDs of the ancestors for the primary category.|
|categoryId|string|false|none|The ID of the leaf category for the deal item. A leaf category is the lowest level in a category and has no children.|
|commissionable|boolean|false|none|A boolean value specifying whether the listing has commission.|
|dealAffiliateWebUrl|string|false|none|The deal associated with the item with affiliate attribution.|
|dealEndDate|string|false|none|The date after which the deal ends.|
|dealStartDate|string|false|none|The date on which the deal starts.|
|dealWebUrl|string|false|none|The web URL for the deal associated with the item.|
|energyEfficiencyClass|string|false|none|A string value specifying the Energy Efficiency class.|
|image|[Image](#schemaimage)|false|none|The primary image for the deal item.|
|itemAffiliateWebUrl|string|false|none|The item web URL with affiliate attribution.|
|itemGroupId|string|false|none|The unique identifier for the deal item group. This is the parent item ID for the seller-defined variations. Note: This field is returned for multiple-SKU items.|
|itemGroupType|string|false|none|An enumeration value that indicates the type of item group. An item group contains items that have various aspect differences, such as color, size, or storage capacity. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/buy/deal/types/api:ItemGroupTypeEnum'>eBay API documentation</a>|
|itemId|string|false|none|The unique identifier for the deal item. Note: This field is only returned for single-SKU items.|
|itemWebUrl|string|false|none|The web URL for the deal item.|
|legacyItemId|string|false|none|The legacy item ID associated with the deal item.|
|marketingPrice|[MarketingPrice](#schemamarketingprice)|false|none|The original price for the deal item, and the discount amount and percentage.|
|price|[Amount](#schemaamount)|false|none|The price for the deal item. Note: The price does include the value-added tax (VAT) for applicable jurisdictions when requested from supported marketplaces. In this case, users must pass the X-EBAY-C-MARKETPLACE-ID request header specifying the supported marketplace (such as EBAY_GB) to see the VAT-inclusive pricing. For more information on VAT, refer to VAT Obligations in the EU.|
|qualifiedPrograms|[string]|false|none|A list of programs applicable to the item.|
|shippingOptions|[[ShippingOption](#schemashippingoption)]|false|none|The cost required to ship the deal item.|
|title|string|false|none|The title of the deal item.|
|unitPrice|[Amount](#schemaamount)|false|none|The price per unit for the deal item. Some European countries require listings for certain types of products to include the price per unit so that buyers can accurately compare prices. For example: &quot;unitPricingMeasure&quot;: &quot;100g&quot;, &quot;unitPrice&quot;: { &nbsp;&nbsp;&quot;value&quot;: &quot;7.99&quot;, &nbsp;&nbsp;&quot;currency&quot;: &quot;GBP&quot;|
|unitPricingMeasure|string|false|none|The designation used to specify the quantity of the deal item, such as size, weight, volume, and count. This helps buyers compare prices. For example, the following tells the buyer that the item is 7.99 per 100 grams. &quot;unitPricingMeasure&quot;: &quot;100g&quot;, &quot;unitPrice&quot;: { &nbsp;&nbsp;&quot;value&quot;: &quot;7.99&quot;, &nbsp;&nbsp;&quot;currency&quot;: &quot;GBP&quot;|

<h2 id="tocS_DealItemSearchResponse">DealItemSearchResponse</h2>
<!-- backwards compatibility -->
<a id="schemadealitemsearchresponse"></a>
<a id="schema_DealItemSearchResponse"></a>
<a id="tocSdealitemsearchresponse"></a>
<a id="tocsdealitemsearchresponse"></a>

```json
{
  "dealItems": [
    {
      "additionalImages": [
        {
          "height": "string",
          "imageUrl": "string",
          "text": "string",
          "width": "string"
        }
      ],
      "categoryAncestorIds": [
        "string"
      ],
      "categoryId": "string",
      "commissionable": true,
      "dealAffiliateWebUrl": "string",
      "dealEndDate": "string",
      "dealStartDate": "string",
      "dealWebUrl": "string",
      "energyEfficiencyClass": "string",
      "image": {
        "height": "string",
        "imageUrl": "string",
        "text": "string",
        "width": "string"
      },
      "itemAffiliateWebUrl": "string",
      "itemGroupId": "string",
      "itemGroupType": "string",
      "itemId": "string",
      "itemWebUrl": "string",
      "legacyItemId": "string",
      "marketingPrice": {
        "discountAmount": {
          "currency": "string",
          "value": "string"
        },
        "discountPercentage": "string",
        "originalPrice": {
          "currency": "string",
          "value": "string"
        },
        "priceTreatment": "string"
      },
      "price": {
        "currency": "string",
        "value": "string"
      },
      "qualifiedPrograms": [
        "string"
      ],
      "shippingOptions": [
        {
          "shippingCost": {
            "currency": "string",
            "value": "string"
          },
          "shippingCostType": "string"
        }
      ],
      "title": "string",
      "unitPrice": {
        "currency": "string",
        "value": "string"
      },
      "unitPricingMeasure": "string"
    }
  ],
  "href": "string",
  "limit": 0,
  "next": "string",
  "offset": 0,
  "prev": "string",
  "total": 0
}
```

The result set for the deal item search.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dealItems|[[DealItem](#schemadealitem)]|false|none|A list of deal items that match the search criteria.|
|href|string|false|none|The relative path to the current set of results.|
|limit|integer(int32)|false|none|The maximum number of items, from the current result set, returned on a single page. Default: 20|
|next|string|false|none|The relative path to the next set of results.|
|offset|integer(int32)|false|none|The number of items that will be skipped in the result set. This is used with the limit field to control the pagination of the output. For example, if the offset is set to 0 and the limit is set to 10, the method will retrieve items 1 through 10 from the list of items returned. If the offset is set to 10 and the limit is set to 10, the method will retrieve items 11 through 20 from the list of items returned. Default: 0|
|prev|string|false|none|The relative path to the previous set of results.|
|total|integer(int32)|false|none|The total number of matches for the search criteria.|

<h2 id="tocS_Error">Error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_Error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
{
  "category": "string",
  "domain": "string",
  "errorId": 0,
  "inputRefIds": [
    "string"
  ],
  "longMessage": "string",
  "message": "string",
  "outputRefIds": [
    "string"
  ],
  "parameters": [
    {
      "name": "string",
      "value": "string"
    }
  ],
  "subdomain": "string"
}
```

This type defines the fields that can be returned in an error.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category|string|false|none|Identifies the type of erro.|
|domain|string|false|none|Name for the primary system where the error occurred. This is relevant for application errors.|
|errorId|integer(int32)|false|none|A unique number to identify the error.|
|inputRefIds|[string]|false|none|An array of request elements most closely associated to the error.|
|longMessage|string|false|none|A more detailed explanation of the error.|
|message|string|false|none|Information on how to correct the problem, in the end user's terms and language where applicable.|
|outputRefIds|[string]|false|none|An array of request elements most closely associated to the error.|
|parameters|[[ErrorParameter](#schemaerrorparameter)]|false|none|An array of name/value pairs that describe details the error condition. These are useful when multiple errors are returned.|
|subdomain|string|false|none|Further helps indicate which subsystem the error is coming from. System subcategories include: Initialization, Serialization, Security, Monitoring, Rate Limiting, etc.|

<h2 id="tocS_ErrorParameter">ErrorParameter</h2>
<!-- backwards compatibility -->
<a id="schemaerrorparameter"></a>
<a id="schema_ErrorParameter"></a>
<a id="tocSerrorparameter"></a>
<a id="tocserrorparameter"></a>

```json
{
  "name": "string",
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The object of the error.|
|value|string|false|none|The value of the object.|

<h2 id="tocS_Event">Event</h2>
<!-- backwards compatibility -->
<a id="schemaevent"></a>
<a id="schema_Event"></a>
<a id="tocSevent"></a>
<a id="tocsevent"></a>

```json
{
  "applicableCoupons": [
    {
      "redemptionCode": "string",
      "terms": {
        "fullText": "string",
        "summary": "string"
      }
    }
  ],
  "description": "string",
  "endDate": "string",
  "eventAffiliateWebUrl": "string",
  "eventId": "string",
  "eventWebUrl": "string",
  "images": [
    {
      "height": "string",
      "imageUrl": "string",
      "text": "string",
      "width": "string"
    }
  ],
  "startDate": "string",
  "terms": {
    "fullText": "string",
    "summary": "string"
  },
  "title": "string"
}
```

The result set for the event search.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|applicableCoupons|[[Coupon](#schemacoupon)]|false|none|A list of coupons associated with the event.|
|description|string|false|none|The event description.|
|endDate|string|false|none|The end date for the event.|
|eventAffiliateWebUrl|string|false|none|The URL of the View Event page for the event, which includes the affiliate tracking ID.|
|eventId|string|false|none|The unique identifier for the event.|
|eventWebUrl|string|false|none|The web URL for the event.|
|images|[[Image](#schemaimage)]|false|none|The images for the event.|
|startDate|string|false|none|The start date for the event.|
|terms|[Terms](#schematerms)|false|none|The terms associated with the event.|
|title|string|false|none|The title of the event.|

<h2 id="tocS_EventItem">EventItem</h2>
<!-- backwards compatibility -->
<a id="schemaeventitem"></a>
<a id="schema_EventItem"></a>
<a id="tocSeventitem"></a>
<a id="tocseventitem"></a>

```json
{
  "additionalImages": [
    {
      "height": "string",
      "imageUrl": "string",
      "text": "string",
      "width": "string"
    }
  ],
  "categoryAncestorIds": [
    "string"
  ],
  "categoryId": "string",
  "energyEfficiencyClass": "string",
  "eventId": "string",
  "image": {
    "height": "string",
    "imageUrl": "string",
    "text": "string",
    "width": "string"
  },
  "itemAffiliateWebUrl": "string",
  "itemGroupId": "string",
  "itemGroupType": "string",
  "itemId": "string",
  "itemWebUrl": "string",
  "legacyItemId": "string",
  "marketingPrice": {
    "discountAmount": {
      "currency": "string",
      "value": "string"
    },
    "discountPercentage": "string",
    "originalPrice": {
      "currency": "string",
      "value": "string"
    },
    "priceTreatment": "string"
  },
  "price": {
    "currency": "string",
    "value": "string"
  },
  "qualifiedPrograms": [
    "string"
  ],
  "shippingOptions": [
    {
      "shippingCost": {
        "currency": "string",
        "value": "string"
      },
      "shippingCostType": "string"
    }
  ],
  "title": "string",
  "unitPrice": {
    "currency": "string",
    "value": "string"
  },
  "unitPricingMeasure": "string"
}
```

The detailed data returned for the event item.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalImages|[[Image](#schemaimage)]|false|none|The additional images for the event item.|
|categoryAncestorIds|[string]|false|none|The IDs of the ancestors for the primary category.|
|categoryId|string|false|none|The ID of the leaf category for the event item. A leaf category is the lowest level in a category and has no children.|
|energyEfficiencyClass|string|false|none|A string value specifying the Energy Efficiency class.|
|eventId|string|false|none|The unique event identifier associated with the item.|
|image|[Image](#schemaimage)|false|none|The image for the event item.|
|itemAffiliateWebUrl|string|false|none|The item web URL with affiliate attribution.|
|itemGroupId|string|false|none|The unique identifier for the event item group. This is the parent item ID for the seller-defined variations. Note: This field is returned for multiple-SKU items.|
|itemGroupType|string|false|none|An enumeration value that indicates the type of item group. An item group contains items that have various aspect differences, such as color, size, or storage capacity. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/buy/deal/types/api:ItemGroupTypeEnum'>eBay API documentation</a>|
|itemId|string|false|none|The unique identifier for the event item. Note: This field is only returned for single-SKU items.|
|itemWebUrl|string|false|none|The web URL for the event item.|
|legacyItemId|string|false|none|The legacy item ID associated with the event item.|
|marketingPrice|[MarketingPrice](#schemamarketingprice)|false|none|The original price for the event item, and the discount amount and percentage.|
|price|[Amount](#schemaamount)|false|none|The applicable price for the event item.|
|qualifiedPrograms|[string]|false|none|A list of programs applicable to the event item.|
|shippingOptions|[[ShippingOption](#schemashippingoption)]|false|none|The cost required to ship the event item.|
|title|string|false|none|The title of the event item.|
|unitPrice|[Amount](#schemaamount)|false|none|The price per unit for the event item. Some European countries require listings for certain types of products to include the price per unit so that buyers can accurately compare prices. For example: &quot;unitPricingMeasure&quot;: &quot;100g&quot;, &quot;unitPrice&quot;: { &nbsp;&nbsp;&quot;value&quot;: &quot;7.99&quot;, &nbsp;&nbsp;&quot;currency&quot;: &quot;GBP&quot;|
|unitPricingMeasure|string|false|none|The designation used to specify the quantity of the event item, such as size, weight, volume, and count. This helps buyers compare prices. For example, the following tells the buyer that the item is 7.99 per 100 grams. &quot;unitPricingMeasure&quot;: &quot;100g&quot;, &quot;unitPrice&quot;: { &nbsp;&nbsp;&quot;value&quot;: &quot;7.99&quot;, &nbsp;&nbsp;&quot;currency&quot;: &quot;GBP&quot;|

<h2 id="tocS_EventItemSearchResponse">EventItemSearchResponse</h2>
<!-- backwards compatibility -->
<a id="schemaeventitemsearchresponse"></a>
<a id="schema_EventItemSearchResponse"></a>
<a id="tocSeventitemsearchresponse"></a>
<a id="tocseventitemsearchresponse"></a>

```json
{
  "eventItems": [
    {
      "additionalImages": [
        {
          "height": "string",
          "imageUrl": "string",
          "text": "string",
          "width": "string"
        }
      ],
      "categoryAncestorIds": [
        "string"
      ],
      "categoryId": "string",
      "energyEfficiencyClass": "string",
      "eventId": "string",
      "image": {
        "height": "string",
        "imageUrl": "string",
        "text": "string",
        "width": "string"
      },
      "itemAffiliateWebUrl": "string",
      "itemGroupId": "string",
      "itemGroupType": "string",
      "itemId": "string",
      "itemWebUrl": "string",
      "legacyItemId": "string",
      "marketingPrice": {
        "discountAmount": {
          "currency": "string",
          "value": "string"
        },
        "discountPercentage": "string",
        "originalPrice": {
          "currency": "string",
          "value": "string"
        },
        "priceTreatment": "string"
      },
      "price": {
        "currency": "string",
        "value": "string"
      },
      "qualifiedPrograms": [
        "string"
      ],
      "shippingOptions": [
        {
          "shippingCost": {
            "currency": "string",
            "value": "string"
          },
          "shippingCostType": "string"
        }
      ],
      "title": "string",
      "unitPrice": {
        "currency": "string",
        "value": "string"
      },
      "unitPricingMeasure": "string"
    }
  ],
  "href": "string",
  "limit": 0,
  "next": "string",
  "offset": 0,
  "prev": "string",
  "total": 0
}
```

The result set for the event item search.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|eventItems|[[EventItem](#schemaeventitem)]|false|none|A list of event items that match the search criteria.|
|href|string|false|none|The relative path to the current set of results.|
|limit|integer(int32)|false|none|The maximum number of items, from the current result set, returned on a single page. Default: 20|
|next|string|false|none|The relative path to the next set of results.|
|offset|integer(int32)|false|none|The number of items that will be skipped in the result set. This is used with the limit field to control the pagination of the output. For example, if the offset is set to 0 and the limit is set to 10, the method will retrieve items 1 through 10 from the list of items returned. If the offset is set to 10 and the limit is set to 10, the method will retrieve items 11 through 20 from the list of items returned. Default: 0|
|prev|string|false|none|The relative path to the previous set of results.|
|total|integer(int32)|false|none|The total number of matches for the specified search criteria.|

<h2 id="tocS_EventSearchResponse">EventSearchResponse</h2>
<!-- backwards compatibility -->
<a id="schemaeventsearchresponse"></a>
<a id="schema_EventSearchResponse"></a>
<a id="tocSeventsearchresponse"></a>
<a id="tocseventsearchresponse"></a>

```json
{
  "events": [
    {
      "applicableCoupons": [
        {
          "redemptionCode": "string",
          "terms": {
            "fullText": "string",
            "summary": "string"
          }
        }
      ],
      "description": "string",
      "endDate": "string",
      "eventAffiliateWebUrl": "string",
      "eventId": "string",
      "eventWebUrl": "string",
      "images": [
        {
          "height": "string",
          "imageUrl": "string",
          "text": "string",
          "width": "string"
        }
      ],
      "startDate": "string",
      "terms": {
        "fullText": "string",
        "summary": "string"
      },
      "title": "string"
    }
  ],
  "href": "string",
  "limit": 0,
  "next": "string",
  "offset": 0,
  "prev": "string",
  "total": 0
}
```

The result set for the specified event search criteria.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|events|[[Event](#schemaevent)]|false|none|A list of results that match the search criteria.|
|href|string|false|none|The relative path to the current set of results.|
|limit|integer(int32)|false|none|The maximum number of items, from the current result set, returned on a single page. Default: 20|
|next|string|false|none|The relative path to the next set of results.|
|offset|integer(int32)|false|none|The number of items that will be skipped in the result set. This is used with the limit field to control the pagination of the output. For example, if the offset is set to 0 and the limit is set to 10, the method will retrieve items 1 through 10 from the list of items returned. If the offset is set to 10 and the limit is set to 10, the method will retrieve items 11 through 20 from the list of items returned. Default: 0|
|prev|string|false|none|The relative path to the previous set of results.|
|total|integer(int32)|false|none|The total number of matches for the specified search criteria.|

<h2 id="tocS_Image">Image</h2>
<!-- backwards compatibility -->
<a id="schemaimage"></a>
<a id="schema_Image"></a>
<a id="tocSimage"></a>
<a id="tocsimage"></a>

```json
{
  "height": "string",
  "imageUrl": "string",
  "text": "string",
  "width": "string"
}
```

The type that defines the details of an image, such as size and URL.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|height|string|false|none|The height of the image.|
|imageUrl|string|false|none|The relative path to the image location.|
|text|string|false|none|The text associated with the image.|
|width|string|false|none|The width of the image.|

<h2 id="tocS_MarketingPrice">MarketingPrice</h2>
<!-- backwards compatibility -->
<a id="schemamarketingprice"></a>
<a id="schema_MarketingPrice"></a>
<a id="tocSmarketingprice"></a>
<a id="tocsmarketingprice"></a>

```json
{
  "discountAmount": {
    "currency": "string",
    "value": "string"
  },
  "discountPercentage": "string",
  "originalPrice": {
    "currency": "string",
    "value": "string"
  },
  "priceTreatment": "string"
}
```

A type that describes the seller discount.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|discountAmount|[Amount](#schemaamount)|false|none|The monetary value of the seller discount.|
|discountPercentage|string|false|none|The percentage of the seller discount based on the value returned in the originalPrice field.|
|originalPrice|[Amount](#schemaamount)|false|none|The monetary value of the item prior to the discount.|
|priceTreatment|string|false|none|The pricing treatment (discount) that was applied to the price of the item. Note: The pricing treatment affects how and where the discounted price can be displayed. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/buy/deal/types/api:PriceTreatmentEnum'>eBay API documentation</a>|

<h2 id="tocS_ShippingOption">ShippingOption</h2>
<!-- backwards compatibility -->
<a id="schemashippingoption"></a>
<a id="schema_ShippingOption"></a>
<a id="tocSshippingoption"></a>
<a id="tocsshippingoption"></a>

```json
{
  "shippingCost": {
    "currency": "string",
    "value": "string"
  },
  "shippingCostType": "string"
}
```

The details provided for the shipping provider, such as shipping cost and type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|shippingCost|[Amount](#schemaamount)|false|none|The final shipping cost for all items after all discounts are applied. Note: The price does include the value-added tax (VAT) for applicable jurisdictions when requested from supported marketplaces. In this case, users must pass the X-EBAY-C-MARKETPLACE-ID request header specifying the supported marketplace (such as EBAY_GB) to see the VAT-inclusive pricing. For more information on VAT, refer to VAT Obligations in the EU.|
|shippingCostType|string|false|none|The class of the shipping cost. Valid Values: FIXED or CALCULATED Code so that your app gracefully handles any future changes to this list.|

<h2 id="tocS_Terms">Terms</h2>
<!-- backwards compatibility -->
<a id="schematerms"></a>
<a id="schema_Terms"></a>
<a id="tocSterms"></a>
<a id="tocsterms"></a>

```json
{
  "fullText": "string",
  "summary": "string"
}
```

The terms for the event, provided in a full-text description and summary.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fullText|string|false|none|A full-text description of the terms.|
|summary|string|false|none|A summarized description of the terms.|
