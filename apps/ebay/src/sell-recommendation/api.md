<h1 id="recommendation-api">Recommendation API v1.1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The <b>Recommendation API</b> returns information that sellers can use to optimize the configuration of their listings on eBay. <br><br>Currently, the API contains a single method, <b>findListingRecommendations</b>. This method provides information that sellers can use to configure Promoted Listings ad campaigns to maximize the visibility of their items in the eBay marketplace.

Base URLs:

* <a href="https://api.ebay.com/sell/recommendation/v1">https://api.ebay.com/sell/recommendation/v1</a> - Production

License: <a href="https://go.developer.ebay.com/api-license-agreement">eBay API License Agreement</a>

# Authentication

- oAuth2 authentication. The security definitions for this API. Please check individual operations for applicable scopes.

    - Flow: authorizationCode
    - Authorization URL = [https://auth.ebay.com/oauth2/authorize](https://auth.ebay.com/oauth2/authorize)
    - Token URL = [https://api.ebay.com/identity/v1/oauth2/token](https://api.ebay.com/identity/v1/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://api.ebay.com/oauth/api_scope/sell.inventory|View and manage your inventory and offers|

<h1 id="recommendation-api-listingrecommendation">listing_recommendation</h1>

## findListingRecommendations

<a id="opIdfindListingRecommendations"></a>

> Code samples

```bash
curl https://api.ebay.com/find \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'X-EBAY-C-MARKETPLACE-ID: string' \
  -d '{
    "listingIds": [
      "string"
    ]
  }'
```

`POST /find`

The find method currently returns information for a single recommendation type (AD) which contains information that sellers can use to configure Promoted Listings ad campaigns. The response from this method includes an array of the seller's listing IDs, where each element in the array contains recommendations related to the associated listing ID. For details on how to use this method, see Using the Recommendation API to help configure campaigns. The AD recommendation type The AD type contains two sets of information: The promoteWithAd indicator The promoteWithAd response field indicates whether or not eBay recommends you place the associated listing in a Promoted Listings ad campaign. The returned value is set to either RECOMMENDED or UNDETERMINED, where RECOMMENDED identifies the listings that will benefit the most from having them included in an ad campaign. The bid percentage Also known as the &quot;ad rate,&quot; the bidPercentage field provides the current trending bid percentage of similarly promoted items in the marketplace. The ad rate is a user-specified value that indicates the level of promotion that eBay applies to the campaign across the marketplace. The value is also used to calculate the Promotion Listings fee, which is assessed to the seller if a Promoted Listings action results in the sale of an item. Configuring the request You can configure a request to review all of a seller's currently active listings, or just a subset of them. All active listings &ndash; If you leave the request body empty, the request targets all the items currently listed by the seller. Here, the response is filtered to contain only the items where promoteWithAd equals RECOMMENDED. In this case, eBay recommends that all the returned listings should be included in a Promoted Listings ad campaign. Selected listing IDs &ndash; If you populate the request body with a set of listingIds, the response contains data for all the specified listing IDs. In this scenario, the response provides you with information on listings where the promoteWithAd can be either RECOMMENDED or UNDETERMINED. The paginated response Because the response can contain many listing IDs, the findListingRecommendations method paginates the response set. You can control size of the returned pages, as well as an offset that dictates where to start the pagination, using query parameters in the request.

> Body parameter

```json
{
  "listingIds": [
    "string"
  ]
}
```

<h3 id="findlistingrecommendations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|filter|query|string|false|Provide a list of key-value pairs to specify the criteria you want to use to filter the response. In the list, separate each filter key from its associated value with a colon (&quot;:&quot;). Currently, the only supported filter value is recommendationTypes and it supports only the (&quot;AD&quot;) type. Follow the recommendationTypes specifier with the filter type(s) enclosed in curly braces (&quot;{ }&quot;), and separate multiple types with commas. Example: filter=recommendationTypes:{AD} Default: recommendationTypes:{AD}|
|limit|query|string|false|Use this query parameter to set the maximum number of ads to return on a page from the paginated response. Default: 10 Maximum: 500|
|offset|query|string|false|Specifies the number of ads to skip in the result set before returning the first ad in the paginated response. Combine offset with the limit query parameter to control the items returned in the response. For example, if you supply an offset of 0 and a limit of 10, the first page of the response contains the first 10 items from the complete list of items retrieved by the call. If offset is 10 and limit is 20, the first page of the response contains items 11-30 from the complete result set. Default: 0|
|X-EBAY-C-MARKETPLACE-ID|header|string|true|Use this header to specify the eBay marketplace where you list the items for which you want to get recommendations.|
|body|body|[FindListingRecommendationRequest](#schemafindlistingrecommendationrequest)|false|none|
|» listingIds|body|[string]|false|A comma-separated list of listing IDs for which you want Promoted Listings ad configuration information. Currently, this method accepts only listingId values from the Trading API. Max: 500 listing IDs|

> Example responses

> 200 Response

```json
{
  "href": "string",
  "limit": 0,
  "listingRecommendations": [
    {
      "listingId": "string",
      "marketing": {
        "ad": {
          "bidPercentages": [
            {
              "basis": "string",
              "value": "string"
            }
          ],
          "promoteWithAd": "string"
        },
        "message": "string"
      }
    }
  ],
  "next": "string",
  "offset": 0,
  "prev": "string",
  "total": 0
}
```

<h3 id="findlistingrecommendations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PagedListingRecommendationCollection](#schemapagedlistingrecommendationcollection)|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope/sell.inventory )
</aside>

# Schemas

<h2 id="tocS_Ad">Ad</h2>
<!-- backwards compatibility -->
<a id="schemaad"></a>
<a id="schema_Ad"></a>
<a id="tocSad"></a>
<a id="tocsad"></a>

```json
{
  "bidPercentages": [
    {
      "basis": "string",
      "value": "string"
    }
  ],
  "promoteWithAd": "string"
}
```

A complex type that contains recommendations and information on how to configure Promoted Listings ad campaigns.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bidPercentages|[[BidPercentages](#schemabidpercentages)]|false|none|This field returns information that you can use to configure the bidPercentage field in a Promoted Listings campaign. Note: Currently, ITEM and TRENDING are the only supported bid percentage types. The ITEM suggested bid percentages are tailored to each of your items and are designed to help you stay competitive while finding an optimal balance between performance and cost. The recommendations are calculated based on a variety of factors that may include item attributes, seasonality, past performance, and current competition for each of your listings. The TRENDING suggested bid percentages are calculated by reviewing the category level average ad rates in the marketplace. Setting the bidPercentage of your ad campaign based on these rate recommendations will help the items in the campaign be competitive with other items in the marketplace by improving their chances of being displayed more often in the marketplace.|
|promoteWithAd|string|false|none|An enum whose values describe whether or not eBay recommends you place the associated listing in a Promoted Listings ad campaign. IDs deemed RECOMMENDED by eBay are the listings with the highest potential of benefiting from being promoted. The recommendation calculation is based on marketplace trends, like buyer demand and the competition in the item&rsquo;s category. Note: A promoteWithAd value cannot be calculated for listings that are part of Promoted Listings campaigns. Because of this, if you call findListingRecommendations with a specific set of listing IDs, the promoteWithAd field is not returned for any of the listings that are involved in a promotion. However, as long as they are eligible, the trending bidPercentage is returned for all specified listings, even if they are part of an ad campaign. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/recommendation/types/api:PromoteWithAd'>eBay API documentation</a>|

<h2 id="tocS_BidPercentages">BidPercentages</h2>
<!-- backwards compatibility -->
<a id="schemabidpercentages"></a>
<a id="schema_BidPercentages"></a>
<a id="tocSbidpercentages"></a>
<a id="tocsbidpercentages"></a>

```json
{
  "basis": "string",
  "value": "string"
}
```

A complex type that returns data related to Promoted Listings bid percentages.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|basis|string|false|none|The basis by which the ad rate is calculated. Valid Values: ITEM and TRENDING For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/recommendation/types/api:Basis'>eBay API documentation</a>|
|value|string|false|none|The bid percentage data is a single precision value, as calculated by the associated basis. In Promoted listings ad campaigns, the bid percentage (also known as the ad rate) is a user-defined value that sets the level that eBay raises the visibility of the listing in the marketplace. It is also the rate that is used to calculate the Promoted Listings fee. Minimum value: 1.0 &nbsp; Maximum value: 100.0|

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

<h2 id="tocS_FindListingRecommendationRequest">FindListingRecommendationRequest</h2>
<!-- backwards compatibility -->
<a id="schemafindlistingrecommendationrequest"></a>
<a id="schema_FindListingRecommendationRequest"></a>
<a id="tocSfindlistingrecommendationrequest"></a>
<a id="tocsfindlistingrecommendationrequest"></a>

```json
{
  "listingIds": [
    "string"
  ]
}
```

An list of listing ID values for which you want Promoted Listings ad configuration information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|listingIds|[string]|false|none|A comma-separated list of listing IDs for which you want Promoted Listings ad configuration information. Currently, this method accepts only listingId values from the Trading API. Max: 500 listing IDs|

<h2 id="tocS_ListingRecommendation">ListingRecommendation</h2>
<!-- backwards compatibility -->
<a id="schemalistingrecommendation"></a>
<a id="schema_ListingRecommendation"></a>
<a id="tocSlistingrecommendation"></a>
<a id="tocslistingrecommendation"></a>

```json
{
  "listingId": "string",
  "marketing": {
    "ad": {
      "bidPercentages": [
        {
          "basis": "string",
          "value": "string"
        }
      ],
      "promoteWithAd": "string"
    },
    "message": "string"
  }
}
```

A complex type that contains the ID of an actively listed item and a set of related listing recommendations. The recommendations contain information the seller can use to optimize their listing configurations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|listingId|string|false|none|An ID that identifies the active listing associated with the eBay recommendations.|
|marketing|[MarketingRecommendation](#schemamarketingrecommendation)|false|none|This return object provides the eBay recommendations and information related to the associated listing ID. The container currently returns the AD recommendation type, which contains information that sellers can use to configure Promoted Listings ad campaigns. This container is returned with each ListingRecommendation object, except when: The listing ID is not eligible for Promoted Listings The listing ID is currently in a Promoted Listings campaign The listing ID is invalid|

<h2 id="tocS_MarketingRecommendation">MarketingRecommendation</h2>
<!-- backwards compatibility -->
<a id="schemamarketingrecommendation"></a>
<a id="schema_MarketingRecommendation"></a>
<a id="tocSmarketingrecommendation"></a>
<a id="tocsmarketingrecommendation"></a>

```json
{
  "ad": {
    "bidPercentages": [
      {
        "basis": "string",
        "value": "string"
      }
    ],
    "promoteWithAd": "string"
  },
  "message": "string"
}
```

A complex type that contains information about how a seller can improve their listing configurations. The AD object contains Promoted Listings recommendations and information, which the seller can use to improve buyer conversions. The response can also contain an optional message about the returned data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ad|[Ad](#schemaad)|false|none|An object that contains Promoted Listings recommendations and information related to the associated listing ID.|
|message|string|false|none|A message that can conditionally accompany the listing information.|

<h2 id="tocS_PagedListingRecommendationCollection">PagedListingRecommendationCollection</h2>
<!-- backwards compatibility -->
<a id="schemapagedlistingrecommendationcollection"></a>
<a id="schema_PagedListingRecommendationCollection"></a>
<a id="tocSpagedlistingrecommendationcollection"></a>
<a id="tocspagedlistingrecommendationcollection"></a>

```json
{
  "href": "string",
  "limit": 0,
  "listingRecommendations": [
    {
      "listingId": "string",
      "marketing": {
        "ad": {
          "bidPercentages": [
            {
              "basis": "string",
              "value": "string"
            }
          ],
          "promoteWithAd": "string"
        },
        "message": "string"
      }
    }
  ],
  "next": "string",
  "offset": 0,
  "prev": "string",
  "total": 0
}
```

The high-level object used to return a set of Promoted Listings ad recommendations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|href|string|false|none|The URI of the current page of results from the result set.|
|limit|integer(int32)|false|none|The number of items returned on a single page from the result set. This value can be set in the request with the limit query parameter.|
|listingRecommendations|[[ListingRecommendation](#schemalistingrecommendation)]|false|none|Returns a list of listingRecommendations, where each element in the list offers recommendations for the associated listingId. Which elements are returned depend on how you structure the request. For example, if you request recommendations for all of a sellers listings (by leaving the request payload empty), ad recommendations are returned only for those listings where promoteWithAd is set to RECOMMENDED.|
|next|string|false|none|The URI for the following page of results. This value is returned only if there is an additional page of results to display from the result set. Max length: 2048|
|offset|integer(int32)|false|none|The number of results skipped in the result set before listing the first returned result. This value can be set in the request with the offset query parameter. Note: The items in a paginated result set use a zero-based list where the first item in the list has an offset of 0.|
|prev|string|false|none|The URI for the preceding page of results. This value is returned only if there is a previous page of results to display from the result set. Max length: 2048|
|total|integer(int32)|false|none|The total number of items retrieved in the result set. If no items are found, this field is returned with a value of 0.|
