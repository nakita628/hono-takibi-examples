<h1 id="negotiation-api">Negotiation API v1.1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The <b>Negotiations API</b> gives sellers the ability to proactively send discount offers to buyers who have shown an "interest" in their listings.  <br><br>By sending buyers discount offers on listings where they have shown an interest, sellers can increase the velocity of their sales.  <br><br>There are various ways for a buyer to show <i>interest </i> in a listing. For example, if a buyer adds the listing to their <b>Watch</b> list, or if they add the listing to their shopping cart and later abandon the cart, they are deemed to have shown an interest in the listing.  <br><br>In the offers that sellers send, they can discount their listings by either a percentage off the listing price, or they can set a new discounted price that is lower than the original listing price.  <br><br>For details about how seller offers work, see <a href="/api-docs/sell/static/marketing/offers-to-buyers.html" title="Selling Integration Guide">Sending offers to buyers</a>.

Base URLs:

* <a href="https://api.ebay.com/sell/negotiation/v1">https://api.ebay.com/sell/negotiation/v1</a> - Production

License: <a href="https://go.developer.ebay.com/api-license-agreement">eBay API License Agreement</a>

# Authentication

- oAuth2 authentication. The security definitions for this API. Please check individual operations for applicable scopes.

    - Flow: authorizationCode
    - Authorization URL = [https://auth.ebay.com/oauth2/authorize](https://auth.ebay.com/oauth2/authorize)
    - Token URL = [https://api.ebay.com/identity/v1/oauth2/token](https://api.ebay.com/identity/v1/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://api.ebay.com/oauth/api_scope/sell.inventory|View and manage your inventory and offers|
|https://api.ebay.com/oauth/api_scope/sell.inventory.readonly|View your inventory and offers|

<h1 id="negotiation-api-offer">offer</h1>

## findEligibleItems

<a id="opIdfindEligibleItems"></a>

> Code samples

```bash
curl https://api.ebay.com/find_eligible_items \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'X-EBAY-C-MARKETPLACE-ID: string'
```

`GET /find_eligible_items`

This method evaluates a seller's current listings and returns the set of IDs that are eligible for a seller-initiated discount offer to a buyer. A listing ID is returned only when one or more buyers have shown an &quot;interest&quot; in the listing. If any buyers have shown interest in a listing, the seller can initiate a &quot;negotiation&quot; with them by calling sendOfferToInterestedBuyers, which sends all interested buyers a message that offers the listing at a discount. For details about how to create seller offers to buyers, see Sending offers to buyers.

<h3 id="findeligibleitems-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|string|false|This query parameter specifies the maximum number of items to return from the result set on a page in the paginated response. Minimum: 1 &nbsp; &nbsp;Maximum: 200 Default: 10|
|offset|query|string|false|This query parameter specifies the number of results to skip in the result set before returning the first result in the paginated response. Combine offset with the limit query parameter to control the items returned in the response. For example, if you supply an offset of 0 and a limit of 10, the first page of the response contains the first 10 results from the complete list of items retrieved by the call. If offset is 10 and limit is 20, the first page of the response contains items 11-30 from the complete result set. Default: 0|
|X-EBAY-C-MARKETPLACE-ID|header|string|true|The eBay marketplace on which you want to search for eligible listings. For a complete list of supported marketplaces, see Negotiation API requirements and restrictions.|

> Example responses

> 200 Response

```json
{
  "eligibleItems": [
    {
      "listingId": "string"
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

<h3 id="findeligibleitems-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PagedEligibleItemCollection](#schemapagedeligibleitemcollection)|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope/sell.inventory.readonly https://api.ebay.com/oauth/api_scope/sell.inventory )
</aside>

## sendOfferToInterestedBuyers

<a id="opIdsendOfferToInterestedBuyers"></a>

> Code samples

```bash
curl https://api.ebay.com/send_offer_to_interested_buyers \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'X-EBAY-C-MARKETPLACE-ID: string' \
  -d '{
    "allowCounterOffer": true,
    "message": "string",
    "offerDuration": {
      "unit": "string",
      "value": 0
    },
    "offeredItems": [
      {
        "discountPercentage": "string",
        "listingId": "string",
        "price": {
          "currency": "string",
          "value": "string"
        },
        "quantity": 0
      }
    ]
  }'
```

`POST /send_offer_to_interested_buyers`

This method sends eligible buyers offers to purchase items in a listing at a discount. When a buyer has shown interest in a listing, they become &quot;eligible&quot; to receive a seller-initiated offer to purchase the item(s). Sellers use findEligibleItems to get the set of listings that have interested buyers. If a listing has interested buyers, sellers can use this method (sendOfferToInterestedBuyers) to send an offer to the buyers who are interested in the listing. The offer gives buyers the ability to purchase the associated listings at a discounted price. For details about how to create seller offers to buyers, see Sending offers to buyers.

> Body parameter

```json
{
  "allowCounterOffer": true,
  "message": "string",
  "offerDuration": {
    "unit": "string",
    "value": 0
  },
  "offeredItems": [
    {
      "discountPercentage": "string",
      "listingId": "string",
      "price": {
        "currency": "string",
        "value": "string"
      },
      "quantity": 0
    }
  ]
}
```

<h3 id="sendoffertointerestedbuyers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-EBAY-C-MARKETPLACE-ID|header|string|true|The eBay marketplace on which your listings with &quot;eligible&quot; buyers appear. For a complete list of supported marketplaces, see Negotiation API requirements and restrictions.|
|body|body|[CreateOffersRequest](#schemacreateoffersrequest)|false|Send offer to eligible items request.|
|» allowCounterOffer|body|boolean|false|If set to true, the buyer is allowed to make a counter-offer to the seller's offer. Note: Currently, you must set this field to false; counter-offers are not supported in this release. Default: false|
|» message|body|string|false|A seller-defined message related to the offer being made. This message is sent to the list of &quot;interested&quot; buyers. To increase the conversion rate of the offers a seller makes to buyers, eBay recommends you always add a customized message to your offers. Maximum length: 2,000 characters|
|» offerDuration|body|[TimeDuration](#schematimeduration)|false|The length of time the offer is valid from when it is created. The duration of the offer begins at the date and time denoted by creationDate. When the span of time specified by offerDuration passes beyond the creationDate, the offer expires. Note: offerDuration currently defaults to 2 days and you cannot set it to any other value (if specified, the unit and value fields in TimeDuration must be set to DAY and 2, respectively). Default: 2 Days|
|» offeredItems|body|[[OfferedItem](#schemaoffereditem)]|false|An array of objects where each object contains the details of an offer and the ID of the listing on which the offer is being made. Note that the service does not currently support the creation of multiple offers with a single call to sendOfferToInterestedBuyer. With this, each request can target only one listing at a time and you must populate this array with a single element that contains the details of one offer.|

> Example responses

> 200 Response

```json
{
  "offers": [
    {
      "allowCounterOffer": true,
      "buyer": {
        "maskedUsername": "string"
      },
      "creationDate": "string",
      "initiatedBy": "string",
      "lastModifiedDate": "string",
      "message": "string",
      "offerDuration": {
        "unit": "string",
        "value": 0
      },
      "offerId": "string",
      "offerStatus": "string",
      "offerType": "string",
      "offeredItems": [
        {
          "discountPercentage": "string",
          "listingId": "string",
          "price": {
            "currency": "string",
            "value": "string"
          },
          "quantity": 0
        }
      ],
      "revision": "string"
    }
  ]
}
```

<h3 id="sendoffertointerestedbuyers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SendOfferToInterestedBuyersCollectionResponse](#schemasendoffertointerestedbuyerscollectionresponse)|
|400|Bad Request|Bad Request|None|
|409|Conflict|Conflict|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope/sell.inventory )
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

A complex type that describes the value of a monetary amount as represented by a global currency.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currency|string|false|none|The base currency applied to the value field to establish a monetary amount. The currency is represented as a 3-letter ISO4217 currency code. For example, the code for the Canadian Dollar is CAD. Default: The default currency of the eBay marketplace that hosts the listing. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/negotiation/types/bas:CurrencyCodeEnum'>eBay API documentation</a>|
|value|string|false|none|The monetary amount in the specified currency.|

<h2 id="tocS_CreateOffersRequest">CreateOffersRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateoffersrequest"></a>
<a id="schema_CreateOffersRequest"></a>
<a id="tocScreateoffersrequest"></a>
<a id="tocscreateoffersrequest"></a>

```json
{
  "allowCounterOffer": true,
  "message": "string",
  "offerDuration": {
    "unit": "string",
    "value": 0
  },
  "offeredItems": [
    {
      "discountPercentage": "string",
      "listingId": "string",
      "price": {
        "currency": "string",
        "value": "string"
      },
      "quantity": 0
    }
  ]
}
```

This complex type contains the fields needed to create an offer to a buyer that is initiated by the seller.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowCounterOffer|boolean|false|none|If set to true, the buyer is allowed to make a counter-offer to the seller's offer. Note: Currently, you must set this field to false; counter-offers are not supported in this release. Default: false|
|message|string|false|none|A seller-defined message related to the offer being made. This message is sent to the list of &quot;interested&quot; buyers. To increase the conversion rate of the offers a seller makes to buyers, eBay recommends you always add a customized message to your offers. Maximum length: 2,000 characters|
|offerDuration|[TimeDuration](#schematimeduration)|false|none|The length of time the offer is valid from when it is created. The duration of the offer begins at the date and time denoted by creationDate. When the span of time specified by offerDuration passes beyond the creationDate, the offer expires. Note: offerDuration currently defaults to 2 days and you cannot set it to any other value (if specified, the unit and value fields in TimeDuration must be set to DAY and 2, respectively). Default: 2 Days|
|offeredItems|[[OfferedItem](#schemaoffereditem)]|false|none|An array of objects where each object contains the details of an offer and the ID of the listing on which the offer is being made. Note that the service does not currently support the creation of multiple offers with a single call to sendOfferToInterestedBuyer. With this, each request can target only one listing at a time and you must populate this array with a single element that contains the details of one offer.|

<h2 id="tocS_EligibleItem">EligibleItem</h2>
<!-- backwards compatibility -->
<a id="schemaeligibleitem"></a>
<a id="schema_EligibleItem"></a>
<a id="tocSeligibleitem"></a>
<a id="tocseligibleitem"></a>

```json
{
  "listingId": "string"
}
```

A listing that is eligible for a seller-initiated offer to a buyer. Listings are identified by a listingId value that is generated and assigned by eBay when a seller lists an item using the Trading API. Note: The Negotiation API does not currently support listings that are managed with the Inventory API.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|listingId|string|false|none|The unique eBay-assigned ID for an eBay listing. A listingId is assigned by eBay when a seller creates a listing with the Trading API.|

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

<h2 id="tocS_Offer">Offer</h2>
<!-- backwards compatibility -->
<a id="schemaoffer"></a>
<a id="schema_Offer"></a>
<a id="tocSoffer"></a>
<a id="tocsoffer"></a>

```json
{
  "allowCounterOffer": true,
  "buyer": {
    "maskedUsername": "string"
  },
  "creationDate": "string",
  "initiatedBy": "string",
  "lastModifiedDate": "string",
  "message": "string",
  "offerDuration": {
    "unit": "string",
    "value": 0
  },
  "offerId": "string",
  "offerStatus": "string",
  "offerType": "string",
  "offeredItems": [
    {
      "discountPercentage": "string",
      "listingId": "string",
      "price": {
        "currency": "string",
        "value": "string"
      },
      "quantity": 0
    }
  ],
  "revision": "string"
}
```

A complex type that defines an offer that a seller makes to eligible buyers.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowCounterOffer|boolean|false|none|If set to true, the buyer is allowed to make a counter-offer to the seller's offer.|
|buyer|[User](#schemauser)|false|none|The buyer who has been sent the offer.|
|creationDate|string|false|none|The date and time when the seller's offer was created. The returned timestamp is formatted as an ISO 8601 string, which is based on the 24-hour Coordinated Universal Time (UTC) clock. Format: [YYYY]-[MM]-[DD]T[hh]:[mm]:[ss].[sss]Z Example: 2018-08-20T07:09:00.000Z|
|initiatedBy|string|false|none|The eBay UserName of the user (seller) who initiated the offer.|
|lastModifiedDate|string|false|none|The date and time when the offer was last modified. The returned timestamp is formatted as an ISO 8601 string.|
|message|string|false|none|A seller-defined message related to the offer being made. This message is sent to the list of &quot;interested&quot; buyers along with the offer message from eBay.|
|offerDuration|[TimeDuration](#schematimeduration)|false|none|The length of time that the offer is valid. The duration of the offer begins at the date and time denoted by creationDate. When the span of time specified by offerDuration passes beyond the creationDate, the offer expires.|
|offerId|string|false|none|A unique eBay-assigned identifier for the offer.|
|offerStatus|string|false|none|The current state, or status, of an offer. Status states include PENDING, COUNTERED, ACCEPTED, and DECLINED. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/negotiation/types/api:OfferStatusEnum'>eBay API documentation</a>|
|offerType|string|false|none|The type of offer being made. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/negotiation/types/api:OfferTypeEnum'>eBay API documentation</a>|
|offeredItems|[[OfferedItem](#schemaoffereditem)]|false|none|The list of items associated with the offer. Currently, the offer list is restricted to a single offer.|
|revision|string|false|none|A unique, eBay-assigned ID for the revision of the offer.|

<h2 id="tocS_OfferedItem">OfferedItem</h2>
<!-- backwards compatibility -->
<a id="schemaoffereditem"></a>
<a id="schema_OfferedItem"></a>
<a id="tocSoffereditem"></a>
<a id="tocsoffereditem"></a>

```json
{
  "discountPercentage": "string",
  "listingId": "string",
  "price": {
    "currency": "string",
    "value": "string"
  },
  "quantity": 0
}
```

A complex type that defines the offer being made to an &quot;interested&quot; buyer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|discountPercentage|string|false|none|This value denotes the percentage that the listing in the offer will be discounted from its original listed price. The seller can specify either the exact price of the discounted items with the price field or they can use this field to specify the percentage that the listing will be discounted, but not both. Minimum: 5 Required if you do not specify a price value.|
|listingId|string|false|none|This value is a unique eBay-assigned ID that identifies the listing to which the offer pertains. A listingId value is generated by eBay when you list an item with the Trading API.|
|price|[Amount](#schemaamount)|false|none|This value denotes the final discounted price of the listing in the offer being made to the buyer. This value must be lower than the original price of the item as stated in the original listing. The seller can use either this field to specify the exact discounted price of the listing or they can use the discountPercentage field to specify the percentage that the listing will be discounted, but not both. Required if you do not specify a discountPercentage value.|
|quantity|integer(int32)|false|none|This integer value indicates the number of items in the eBay listing for which the offer is being made. The offer being made by the seller is an &quot;all or nothing&quot; offer, meaning the buyer must purchase the indicated quantity of items in order to receive the discount on the transaction. Default: 1|

<h2 id="tocS_PagedEligibleItemCollection">PagedEligibleItemCollection</h2>
<!-- backwards compatibility -->
<a id="schemapagedeligibleitemcollection"></a>
<a id="schema_PagedEligibleItemCollection"></a>
<a id="tocSpagedeligibleitemcollection"></a>
<a id="tocspagedeligibleitemcollection"></a>

```json
{
  "eligibleItems": [
    {
      "listingId": "string"
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

This complex type defines a collection of listings that are eligible for an offer to a buyer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|eligibleItems|[[EligibleItem](#schemaeligibleitem)]|false|none|A list of items that are eligible for a seller-initiated offer to a buyer. Each element in the list contains the listing ID of a listed item. These IDs represent the listings for which buyers have shown an interest.|
|href|string|false|none|The URI of the current page of results from the result set.|
|limit|integer(int32)|false|none|The number of items returned on a single page from the result set. This value can be set in the request with the limit query parameter.|
|next|string|false|none|The URI for the following page of results. This value is returned only if there is an additional page of results to display from the result set. Max length: 2048|
|offset|integer(int32)|false|none|The number of results skipped in the result set before listing the first returned result. This value can be set in the request with the offset query parameter. Note: The items in a paginated result set use a zero-based list where the first item in the list has an offset of 0.|
|prev|string|false|none|The URI for the preceding page of results. This value is returned only if there is a previous page of results to display from the result set. Max length: 2048|
|total|integer(int32)|false|none|The total number of items retrieved in the result set. If no items match the search criteria, the server returns the HTTP status code 204 No Content.|

<h2 id="tocS_SendOfferToInterestedBuyersCollectionResponse">SendOfferToInterestedBuyersCollectionResponse</h2>
<!-- backwards compatibility -->
<a id="schemasendoffertointerestedbuyerscollectionresponse"></a>
<a id="schema_SendOfferToInterestedBuyersCollectionResponse"></a>
<a id="tocSsendoffertointerestedbuyerscollectionresponse"></a>
<a id="tocssendoffertointerestedbuyerscollectionresponse"></a>

```json
{
  "offers": [
    {
      "allowCounterOffer": true,
      "buyer": {
        "maskedUsername": "string"
      },
      "creationDate": "string",
      "initiatedBy": "string",
      "lastModifiedDate": "string",
      "message": "string",
      "offerDuration": {
        "unit": "string",
        "value": 0
      },
      "offerId": "string",
      "offerStatus": "string",
      "offerType": "string",
      "offeredItems": [
        {
          "discountPercentage": "string",
          "listingId": "string",
          "price": {
            "currency": "string",
            "value": "string"
          },
          "quantity": 0
        }
      ],
      "revision": "string"
    }
  ]
}
```

The response object returned from a SendOfferToInterestedBuyers request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|offers|[[Offer](#schemaoffer)]|false|none|The offers container returns a list of the offers sent to buyers who have shown an interest in listings included in the offer.|

<h2 id="tocS_TimeDuration">TimeDuration</h2>
<!-- backwards compatibility -->
<a id="schematimeduration"></a>
<a id="schema_TimeDuration"></a>
<a id="tocStimeduration"></a>
<a id="tocstimeduration"></a>

```json
{
  "unit": "string",
  "value": 0
}
```

A complex type that specifies a period of time using a specified time-measurement unit.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|unit|string|false|none|A time-measurement unit that specifies a singular period of time. A span of time is defined when you apply the value specified in the value field to the value specified for unit. Time-measurement units can be YEAR, MONTH, DAY, and so on. See TimeDurationUnitEnum for a complete list of possible time-measurement units. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/negotiation/types/bas:TimeDurationUnitEnum'>eBay API documentation</a>|
|value|integer(int32)|false|none|An integer that represents an amount of time, as measured by the time-measurement unit specified in the unit field.|

<h2 id="tocS_User">User</h2>
<!-- backwards compatibility -->
<a id="schemauser"></a>
<a id="schema_User"></a>
<a id="tocSuser"></a>
<a id="tocsuser"></a>

```json
{
  "maskedUsername": "string"
}
```

This complex type identifies an eBay user.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|maskedUsername|string|false|none|The masked user name is a user name that has certain characters hidden for privacy of the user.|
