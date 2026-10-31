<h1 id="listing-api">Listing API v1_beta.3.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<span class="tablenote"><b>Note:</b> This is a <a href="https://developer.ebay.com/api-docs/static/versioning.html#limited" target="_blank"> <img src="/cms/img/docs/partners-api.svg" class="legend-icon partners-icon" title="Limited Release"  alt="Limited Release" />(Limited Release)</a> API available only to select developers approved by business units.</span><br /><br />Enables a seller adding an ad or item on a Partner's site to automatically create an eBay listing draft using the item details from the Partner's site.

Base URLs:

* <a href="https://api.ebay.com/sell/listing/v1_beta">https://api.ebay.com/sell/listing/v1_beta</a> - Production

License: <a href="https://go.developer.ebay.com/api-license-agreement">eBay API License Agreement</a>

# Authentication

- oAuth2 authentication. The security definitions for this API. Please check individual operations for applicable scopes.

    - Flow: authorizationCode
    - Authorization URL = [https://auth.ebay.com/oauth2/authorize](https://auth.ebay.com/oauth2/authorize)
    - Token URL = [https://api.ebay.com/identity/v1/oauth2/token](https://api.ebay.com/identity/v1/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://api.ebay.com/oauth/api_scope/sell.item.draft|View and manage your item drafts.|

<h1 id="listing-api-itemdraft">item_draft</h1>

## createItemDraft

<a id="opIdcreateItemDraft"></a>

> Code samples

```bash
curl https://api.ebay.com/item_draft/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'X-EBAY-C-MARKETPLACE-ID: string' \
  -d '{
    "categoryId": "string",
    "charity": {
      "charityId": "string",
      "donationPercentage": "string"
    },
    "condition": "string",
    "format": "string",
    "pricingSummary": {
      "auctionReservePrice": {
        "currency": "string",
        "value": "string"
      },
      "auctionStartPrice": {
        "currency": "string",
        "value": "string"
      },
      "price": {
        "currency": "string",
        "value": "string"
      }
    },
    "product": {
      "aspects": [
        {
          "name": "string",
          "values": [
            "string"
          ]
        }
      ],
      "brand": "string",
      "description": "string",
      "epid": "string",
      "imageUrls": [
        "string"
      ],
      "title": "string"
    }
  }'
```

`POST /item_draft/`

This call gives Partners the ability to create an eBay draft of a item for their seller using information from their site. This lets the Partner increase the exposure of items on their site and leverage the eBay user listing experience seamlessly. This experience provides guidance on pricing, aspects, etc. and recommendations that help create a listing that is complete and improves the exposure of the listing in search results. After the listing draft is created, the seller logs into their eBay account and uses the listing experience to finish the listing and publish the item on eBay.

> Body parameter

```json
{
  "categoryId": "string",
  "charity": {
    "charityId": "string",
    "donationPercentage": "string"
  },
  "condition": "string",
  "format": "string",
  "pricingSummary": {
    "auctionReservePrice": {
      "currency": "string",
      "value": "string"
    },
    "auctionStartPrice": {
      "currency": "string",
      "value": "string"
    },
    "price": {
      "currency": "string",
      "value": "string"
    }
  },
  "product": {
    "aspects": [
      {
        "name": "string",
        "values": [
          "string"
        ]
      }
    ],
    "brand": "string",
    "description": "string",
    "epid": "string",
    "imageUrls": [
      "string"
    ],
    "title": "string"
  }
}
```

<h3 id="createitemdraft-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Language|header|string|false|Use this header to specify the natural language of the seller. For details, see Content-Language in HTTP request headers. Required: For EBAY_CA in French. (Content-Language = fr-CA)|
|X-EBAY-C-MARKETPLACE-ID|header|string|true|Use this header to specify an eBay marketplace ID. For a list of supported sites, see API Restrictions in the Listing API overview.|
|body|body|[ItemDraft](#schemaitemdraft)|false|none|
|» categoryId|body|string|false|The ID of the leaf category associated with this item. A leaf category is the lowest level in that category and has no children. Note: If you submit both a category ID and an EPID, eBay determines the best category based on the EPID and uses that. The category ID will be ignored.|
|» charity|body|[Charity](#schemacharity)|false|This container is used to identify the charitable organization that will receive a percentage of sale proceeds for each sale generated by the listing. This container consists of the charityId field to identify the charitable organization, and the donationPercentage field that will set the percentage of the sales proceeds that will be donated to the charitable organization.|
|» condition|body|string|false|The enumeration value passed in here sets the condition of the item, such as NEW or USED_EXCELLENT. See ConditionEnum for the full list of supported values. Supported item conditions can vary by eBay category. To see which item conditions are supported for a category, you can use the getItemConditionPolicies method of the Metadata API. Note: The 'Manufacturer Refurbished' item condition is no longer a valid item condition in any eBay marketplace, and to reflect this change, the pre-existing MANUFACTURER_REFURBISHED enumeration value has been replaced by the CERTIFIED_REFURBISHED enumeration value. CR-eligible sellers should make a note to start using CERTIFIED_REFURBISHED from this point forward. To list an item as 'Certified Refurbished', a seller must be pre-qualified by eBay for this feature. Any seller who is not eligible for this feature will be blocked if they try to create a new listing or revise an existing listing with this item condition. Any seller that is interested in eligibility requirements to list with 'Certified Refurbished' should see the Certified refurbished program page in Seller Center. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/listing/types/api:ConditionEnum'>eBay API documentation</a>|
|» format|body|string|false|The format of the listing. Valid Values: FIXED_PRICE and AUCTION For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/listing/types/api:ListingFormatEnum'>eBay API documentation</a>|
|» pricingSummary|body|[PricingSummary](#schemapricingsummary)|false|The container that for the information about the cost of an item, such as the price or auction start price.|
|» product|body|[Product](#schemaproduct)|false|The container for the product details of the item.|

> Example responses

> 201 Response

```json
{
  "itemDraftId": "string",
  "sellFlowNativeUri": "string",
  "sellFlowUrl": "string"
}
```

<h3 id="createitemdraft-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|OK|[ItemDraftResponse](#schemaitemdraftresponse)|
|400|Bad Request|Bad Request|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope/sell.item.draft )
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

The type that defines the fields for the currency and a monetary amount.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currency|string|false|none|The three-letter ISO 4217 code representing the currency of the amount in the value field. Restriction: Only the currency of the marketplace is supported. For example, on the US marketplace the only currency supported is USD. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/listing/types/bas:CurrencyCodeEnum'>eBay API documentation</a>|
|value|string|false|none|The monetary amount, in the currency specified by the currency field.|

<h2 id="tocS_Aspect">Aspect</h2>
<!-- backwards compatibility -->
<a id="schemaaspect"></a>
<a id="schema_Aspect"></a>
<a id="tocSaspect"></a>
<a id="tocsaspect"></a>

```json
{
  "name": "string",
  "values": [
    "string"
  ]
}
```

The type that defines the fields for the item aspects.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The name of an aspect, such and Brand.|
|values|[string]|false|none|A list of potential values for this aspect.|

<h2 id="tocS_Charity">Charity</h2>
<!-- backwards compatibility -->
<a id="schemacharity"></a>
<a id="schema_Charity"></a>
<a id="tocScharity"></a>
<a id="tocscharity"></a>

```json
{
  "charityId": "string",
  "donationPercentage": "string"
}
```

This type is used to identify the charitable organization that will receive a percentage of sale proceeds for each sale generated by the listing. This container also includes the donation percentage, which is the percentage of the sale proceeds that the charitable organization will get. In order to receive a percentage of the sales proceeds, the non-profit organization must be registered with the PayPal Giving Fund, which is a partner of eBay for Charity.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|charityId|string|false|none|The eBay-assigned unique identifier of the charitable organization that will receive a percentage of the sales proceeds. The charitable organization must be reqistered with the PayPal Giving Fund in order to receive sales proceeds through eBay listings. This field is conditionally required if a seller is planning on donating a percentage of the sale proceeds to a charitable organization. The eBay-assigned unique identifier of a charitable organization can be found using the GetCharities call of the Trading API. In the GetCharities call response, this unique identifier is shown in the id attribute of the Charity container.|
|donationPercentage|string|false|none|This field sets the percentage of the purchase price that the charitable organization (identified in the charityId field) will receive for each sale that the listing generates. This field is conditionally required if a seller is planning on donating a percentage of the sale proceeds to a charitable organization. This numeric value can range from 10 to 100, and in any 5 (percent) increments in between this range (e.g. 10, 15, 20...95,... 100). The seller would pass in 10 for 10 percent, 15 for 15 percent, 20 for 20 percent, and so on, all the way to 100 for 100 percent. Note: For this field, createItemDraft will only validate that a positive integer value is supplied, so the listing draft will still be successfully created (with no error or warning message) if a non-supported value is specified. However, if the seller attempted to publish this listing draft with an unsupported value, the charity information would just be dropped from the listing.|

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

<h2 id="tocS_ItemDraft">ItemDraft</h2>
<!-- backwards compatibility -->
<a id="schemaitemdraft"></a>
<a id="schema_ItemDraft"></a>
<a id="tocSitemdraft"></a>
<a id="tocsitemdraft"></a>

```json
{
  "categoryId": "string",
  "charity": {
    "charityId": "string",
    "donationPercentage": "string"
  },
  "condition": "string",
  "format": "string",
  "pricingSummary": {
    "auctionReservePrice": {
      "currency": "string",
      "value": "string"
    },
    "auctionStartPrice": {
      "currency": "string",
      "value": "string"
    },
    "price": {
      "currency": "string",
      "value": "string"
    }
  },
  "product": {
    "aspects": [
      {
        "name": "string",
        "values": [
          "string"
        ]
      }
    ],
    "brand": "string",
    "description": "string",
    "epid": "string",
    "imageUrls": [
      "string"
    ],
    "title": "string"
  }
}
```

The type that defines the fields for the listing details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|categoryId|string|false|none|The ID of the leaf category associated with this item. A leaf category is the lowest level in that category and has no children. Note: If you submit both a category ID and an EPID, eBay determines the best category based on the EPID and uses that. The category ID will be ignored.|
|charity|[Charity](#schemacharity)|false|none|This container is used to identify the charitable organization that will receive a percentage of sale proceeds for each sale generated by the listing. This container consists of the charityId field to identify the charitable organization, and the donationPercentage field that will set the percentage of the sales proceeds that will be donated to the charitable organization.|
|condition|string|false|none|The enumeration value passed in here sets the condition of the item, such as NEW or USED_EXCELLENT. See ConditionEnum for the full list of supported values. Supported item conditions can vary by eBay category. To see which item conditions are supported for a category, you can use the getItemConditionPolicies method of the Metadata API. Note: The 'Manufacturer Refurbished' item condition is no longer a valid item condition in any eBay marketplace, and to reflect this change, the pre-existing MANUFACTURER_REFURBISHED enumeration value has been replaced by the CERTIFIED_REFURBISHED enumeration value. CR-eligible sellers should make a note to start using CERTIFIED_REFURBISHED from this point forward. To list an item as 'Certified Refurbished', a seller must be pre-qualified by eBay for this feature. Any seller who is not eligible for this feature will be blocked if they try to create a new listing or revise an existing listing with this item condition. Any seller that is interested in eligibility requirements to list with 'Certified Refurbished' should see the Certified refurbished program page in Seller Center. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/listing/types/api:ConditionEnum'>eBay API documentation</a>|
|format|string|false|none|The format of the listing. Valid Values: FIXED_PRICE and AUCTION For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/listing/types/api:ListingFormatEnum'>eBay API documentation</a>|
|pricingSummary|[PricingSummary](#schemapricingsummary)|false|none|The container that for the information about the cost of an item, such as the price or auction start price.|
|product|[Product](#schemaproduct)|false|none|The container for the product details of the item.|

<h2 id="tocS_ItemDraftResponse">ItemDraftResponse</h2>
<!-- backwards compatibility -->
<a id="schemaitemdraftresponse"></a>
<a id="schema_ItemDraftResponse"></a>
<a id="tocSitemdraftresponse"></a>
<a id="tocsitemdraftresponse"></a>

```json
{
  "itemDraftId": "string",
  "sellFlowNativeUri": "string",
  "sellFlowUrl": "string"
}
```

The type that defines the field for the createItemDraft response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|itemDraftId|string|false|none|The eBay generated ID of the listing draft.|
|sellFlowNativeUri|string|false|none|The URI the Partner uses to send the seller to their listing draft that was created on the eBay site. From there the seller can change, update, and publish the item on eBay. This is returned when the seller is using a mobile app.|
|sellFlowUrl|string|false|none|The web URL the Partner uses to send the seller to the listing draft that was created on the eBay site. From there the seller can change, update, and publish the item on eBay. This is returned when the seller is using mobile web (mweb) or the desktop web. Note: You must construct the URL using the URL returned in this field and a session token. For example: sellFlowUrl?id_token=session_token|

<h2 id="tocS_PricingSummary">PricingSummary</h2>
<!-- backwards compatibility -->
<a id="schemapricingsummary"></a>
<a id="schema_PricingSummary"></a>
<a id="tocSpricingsummary"></a>
<a id="tocspricingsummary"></a>

```json
{
  "auctionReservePrice": {
    "currency": "string",
    "value": "string"
  },
  "auctionStartPrice": {
    "currency": "string",
    "value": "string"
  },
  "price": {
    "currency": "string",
    "value": "string"
  }
}
```

The type that defines the fields for the price details for an item.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|auctionReservePrice|[Amount](#schemaamount)|false|none|The minimum amount the seller is willing to sell the item for. If the reserve price isn't met, the item won't be sold. For details, see How reserve prices work. Restrictions: The value is not supported for FIXED_PRICE format. The value format has a maximum of two decimal points.|
|auctionStartPrice|[Amount](#schemaamount)|false|none|The minimum amount required for the first bid. Note: The auctionStartPrice value must be less than the auctionReservePrice value. Restrictions: The value is not supported for FIXED_PRICE format. The value format has a maximum of two decimal points.|
|price|[Amount](#schemaamount)|false|none|The Buy It Now Price for the item.|

<h2 id="tocS_Product">Product</h2>
<!-- backwards compatibility -->
<a id="schemaproduct"></a>
<a id="schema_Product"></a>
<a id="tocSproduct"></a>
<a id="tocsproduct"></a>

```json
{
  "aspects": [
    {
      "name": "string",
      "values": [
        "string"
      ]
    }
  ],
  "brand": "string",
  "description": "string",
  "epid": "string",
  "imageUrls": [
    "string"
  ],
  "title": "string"
}
```

The type that defines the fields for the aspects of a product.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|aspects|[[Aspect](#schemaaspect)]|false|none|The list of item aspects that describe the item (such as size, color, capacity, model, brand, etc.)|
|brand|string|false|none|The name brand of the item, such as Nike, Apple, etc.|
|description|string|false|none|The description of the item that was created by the seller. This field supports plain text or rich content within HTML tags. Note: Active content is not supported. Active content includes animation or video via JavaScript, Flash, plug-ins, or form actions. Max Length: 500,000|
|epid|string|false|none|An EPID is the eBay product identifier of a product from the eBay product catalog. Note: If you submit both a category ID and an EPID, eBay determines the best category based on the EPID and uses that. The category ID will be ignored.|
|imageUrls|[string]|false|none|The image URLs of the item. The first URL will be the primary image, which appears on the View Item page in the eBay listing. The URL can be from the following: The eBay Picture Services (images previously uploaded). A server outside of eBay (self-hosted). For more details, see PictureURL and Introduction to Pictures in Listings. Maximum: 12 URLs (for most categories and marketplaces) Restrictions: You cannot mix self-hosted and EPS-hosted URLs in the same listing. All image URLs must be 'https'.|
|title|string|false|none|The seller-created title of the item. This should include unique characteristics of the item, such as brand, model, color, size, capacity, etc. For example: Levi's 501 size 10 black jeans|
