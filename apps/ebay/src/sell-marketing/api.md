<h1 id="marketing-api">Marketing API v1.15.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<p>The <i>Marketing API </i> offers two platforms that sellers can use to promote and advertise their products:</p> <ul><li><b>Promoted Listings</b> is an eBay ad service that lets sellers set up <i>ad campaigns </i> for the products they want to promote. eBay displays the ads in search results and in other marketing modules as <b>SPONSORED</b> listings. If an item in a Promoted Listings campaign sells, the seller is assessed a Promoted Listings fee, which is a seller-specified percentage applied to the sales price. For complete details, refer to the <a href="/api-docs/sell/static/marketing/pl-landing.html">Promoted Listings playbook</a>.</li><li><b>Promotions Manager</b> gives sellers a way to offer discounts on specific items as a way to attract buyers to their inventory. Sellers can set up discounts (such as "20% off" and other types of offers) on specific items or on an entire customer order. To further attract buyers, eBay prominently displays promotion <i>teasers</i> throughout buyer flows. For complete details, see <a href="/api-docs/sell/static/marketing/promotions-manager.html">Promotions Manager</a>.</li></ul>  <p><b>Marketing reports</b>, on both the Promoted Listings and Promotions Manager platforms, give sellers information that shows the effectiveness of their marketing strategies. The data gives sellers the ability to review and fine tune their marketing efforts.</p> <p class="tablenote"><b>Important!</b> Sellers must have an active eBay Store subscription, and they must accept the <b>Terms and Conditions</b> before they can make requests to these APIs in the Production environment. There are also site-specific listings requirements and restrictions associated with these marketing tools, as listed in the "requirements and restrictions" sections for <a href="/api-docs/sell/marketing/static/overview.html#PL-requirements">Promoted Listings</a> and <a href="/api-docs/sell/marketing/static/overview.html#PM-requirements">Promotions Manager</a>.</p> <p>The table below lists all the Marketing API calls grouped by resource.</p>

Base URLs:

* <a href="https://api.ebay.com/sell/marketing/v1">https://api.ebay.com/sell/marketing/v1</a> - Production

License: <a href="https://go.developer.ebay.com/api-license-agreement">eBay API License Agreement</a>

# Authentication

- oAuth2 authentication. The security definitions for this API. Please check individual operations for applicable scopes.

    - Flow: authorizationCode
    - Authorization URL = [https://auth.ebay.com/oauth2/authorize](https://auth.ebay.com/oauth2/authorize)
    - Token URL = [https://api.ebay.com/identity/v1/oauth2/token](https://api.ebay.com/identity/v1/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://api.ebay.com/oauth/api_scope/sell.marketing|View and manage your eBay marketing activities, such as ad campaigns and listing promotions|
|https://api.ebay.com/oauth/api_scope/sell.marketing.readonly|View your eBay marketing activities, such as ad campaigns and listing promotions|

    - Flow: clientCredentials
    - Token URL = [https://api.ebay.com/identity/v1/oauth2/token](https://api.ebay.com/identity/v1/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://api.ebay.com/oauth/api_scope|View public data from eBay|

<h1 id="marketing-api-campaign">campaign</h1>

## getCampaigns

<a id="opIdgetCampaigns"></a>

> Code samples

```bash
curl https://api.ebay.com/ad_campaign \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /ad_campaign`

This method retrieves the details for all of the seller's defined campaigns. Request parameters can be used to retrieve a specific campaign, such as the campaign's name, the start and end date, the status, and the funding model (Cost Per Sale (CPS) or Cost Per Click (CPC). <p>You can filter the result set by a campaign name, end date range, start date range, or campaign status. You can also paginate the records returned from the result set using the <b>limit</b> query parameter, and control which records to return using the  <b>offset</b> parameter.</p>

<h3 id="getcampaigns-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|campaign_name|query|string|false|Specifies the campaign name. The results are filtered to include only the campaign by the specified name.<br /><br /><b>Note: </b>The results might be null if other filters exclude the campaign with this name. <br /><br /><b>Maximum: </b> 1 campaign name|
|campaign_status|query|string|false|Include this filter and input a specific campaign status to retrieve campaigns currently in that state. <br /><br /><b>Note: </b>The results might not include all the campaigns with this status if other filters exclude them. <br /><br /><b>Valid values:</b> See <a href="/api-docs/sell/marketing/types/pls:CampaignStatusEnum">CampaignStatusEnum</a> <br /><br /><b>Maximum: </b> 1 status|
|end_date_range|query|string|false|Specifies the range of a campaign's end date. The results are filtered to include only campaigns with an end date that is within specified range. <br><br><b>Valid format (UTC)</b>: <ul><li><code> yyyy-MM-ddThh:mm:ssZ..yyyy-MM-ddThh:mm:ssZ </code>  (campaign ends within this range)</li><li><code>yyyy-MM-ddThh:mm:ssZ..</code> (campaign ends on or after this date)</li><li><code>..yyyy-MM-ddThh:mm:ssZ </code> (campaign ends on or before this date)</li><li><code>2016-09-08T00:00.00.000Z..2016-09-09T00:00:00Z</code> (campaign ends on September 08, 2016)</li></ul> <br /><br /><b>Note: </b>The results might not include all the campaigns ending on this date if other filters exclude them.|
|funding_strategy|query|string|false|Specifies the funding strategy for the campaign.<br /><br />The results will be filtered to only include campaigns with the specified funding model. If not specified, all campaigns matching the other filter parameters will be returned. The results might not include these campaigns if other search conditions exclude them.<br /><br /><b>Valid Values:</b><ul><li><code>COST_PER_SALE</code></li><li><code>COST_PER_CLICK</code></li></ul>|
|limit|query|string|false|<p>Specifies the maximum number of campaigns to return on a page in the paginated response.</p>  <b>Default: </b>10 <br><b>Maximum: </b> 500|
|offset|query|string|false|Specifies the number of campaigns to skip in the result set before returning the first report in the paginated response.  <p>Combine <b>offset</b> with the <b>limit</b> query parameter to control the items returned in the response. For example, if you supply an <b>offset</b> of <code>0</code> and a <b>limit</b> of <code>10</code>, the first page of the response contains the first 10 items from the complete list of items retrieved by the call. If <b>offset</b> is <code>10</code> and <b>limit</b> is <code>20</code>, the first page of the response contains items 11-30 from the complete result set.</p> <p><b>Default:</b> 0</p>|
|start_date_range|query|string|false|Specifies the range of a campaign's start date in which to filter the results. The results are filtered to include only campaigns with a start date that is equal to this date or is within specified range.<br><br><b>Valid format (UTC): </b> <ul><li><code>yyyy-MM-ddThh:mm:ssZ..yyyy-MM-ddThh:mm:ssZ</code> (starts within this range)</li><li><code>yyyy-MM-ddThh:mm:ssZ</code> (campaign starts on or after this date)</li><li><code>..yyyy-MM-ddThh:mm:ssZ </code>(campaign starts on or before this date)</li><li><code>2016-09-08T00:00.00.000Z..2016-09-09T00:00:00Z</code> (campaign starts on September 08, 2016)</li></ul><br /><br /><b>Note: </b>The results might not include all the campaigns with this start date if other filters exclude them.|

> Example responses

> 200 Response

```json
{
  "campaigns": [
    {
      "alerts": [
        {
          "alertType": "string",
          "details": [
            {
              "aspect": {
                "key": "string",
                "value": "string"
              },
              "dimension": {
                "key": "string",
                "value": "string"
              }
            }
          ]
        }
      ],
      "budget": {
        "daily": {
          "amount": {
            "currency": "string",
            "value": "string"
          },
          "budgetStatus": "string"
        }
      },
      "campaignCriterion": {
        "autoSelectFutureInventory": true,
        "criterionType": "string",
        "selectionRules": [
          {
            "brands": [
              "string"
            ],
            "categoryIds": [
              "string"
            ],
            "categoryScope": "string",
            "listingConditionIds": [
              "string"
            ],
            "maxPrice": {
              "currency": "string",
              "value": "string"
            },
            "minPrice": {
              "currency": "string",
              "value": "string"
            }
          }
        ]
      },
      "campaignId": "string",
      "campaignName": "string",
      "campaignStatus": "string",
      "endDate": "string",
      "fundingStrategy": {
        "adRateStrategy": "string",
        "bidPercentage": "string",
        "dynamicAdRatePreferences": [
          {
            "adRateAdjustmentPercent": "string",
            "adRateCapPercent": "string"
          }
        ],
        "fundingModel": "string"
      },
      "marketplaceId": "string",
      "startDate": "string"
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

<h3 id="getcampaigns-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CampaignPagedCollectionResponse](#schemacampaignpagedcollectionresponse)|
|400|Bad Request|Bad Request|None|
|409|Conflict|Conflict|None|
|500|Internal Server Error|Internal Server error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope/sell.marketing.readonly https://api.ebay.com/oauth/api_scope/sell.marketing )
</aside>

## createCampaign

<a id="opIdcreateCampaign"></a>

> Code samples

```bash
curl https://api.ebay.com/ad_campaign \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "budget": {
      "daily": {
        "amount": {
          "currency": "string",
          "value": "string"
        }
      }
    },
    "campaignCriterion": {
      "autoSelectFutureInventory": true,
      "criterionType": "string",
      "selectionRules": [
        {
          "brands": [
            "string"
          ],
          "categoryIds": [
            "string"
          ],
          "categoryScope": "string",
          "listingConditionIds": [
            "string"
          ],
          "maxPrice": {
            "currency": "string",
            "value": "string"
          },
          "minPrice": {
            "currency": "string",
            "value": "string"
          }
        }
      ]
    },
    "campaignName": "string",
    "endDate": "string",
    "fundingStrategy": {
      "adRateStrategy": "string",
      "bidPercentage": "string",
      "dynamicAdRatePreferences": [
        {
          "adRateAdjustmentPercent": "string",
          "adRateCapPercent": "string"
        }
      ],
      "fundingModel": "string"
    },
    "marketplaceId": "string",
    "startDate": "string"
  }'
```

`POST /ad_campaign`

This method creates a Promoted Listings ad campaign. <p>A Promoted Listings <i>campaign</i> is the structure into which you place the ads or ad group for the listings you want to promote.</p>  <p>Identify the items you want to place into a campaign either by "key" or by "rule" as follows:</p> <ul><li><b>Rules-based campaigns</b> &ndash; A rules-based campaign adds items to the campaign according to the <i>criteria</i> you specify in your call to <b>createCampaign</b>. You can set the <b>autoSelectFutureInventory</b> request field to <code>true</code> so that after your campaign launches, eBay will regularly assess your new, revised, or newly-eligible listings to determine whether any should be added or removed from your campaign according to the rules you set. If there are, eBay will add or remove them automatically on a daily basis.</li> <li><b>Key-based campaigns</b> &ndash; Add items to an existing campaign using either listing ID values or Inventory Reference values: <ul><li>Add <b>listingId</b> values to an existing campaign by calling either <b>createAdByListingID</b> or <b>bulkCreateAdsByListingId</b>.</li>  <li>Add <b>inventoryReference</b> values to an existing campaign by calling either <b>createAdByInventoryReference</b> or <b>bulkCreateAdsByInventoryReference</b>.</li><li>Add an <b>ad group</b> to an existing campaign by calling <b>createAdGroup</b>.</li></ul><p class="tablenote"><b>Note:</b> No matter how you add items to a Promoted Listings campaign, each campaign can contain ads for a maximum of 50,000 items. <br><br>If a rules-based campaign identifies more than 50,000 items, ads are created for only the first 50,000 items identified by the specified criteria, and ads are not created for the remaining items.</p>  <p><b>Creating a campaign</b></p> <p>To create a basic campaign, supply:</p>  <ul><li>The user-defined campaign name</li> <li>The start date (and optionally the end date) of the campaign</li> <li>The eBay marketplace on which the campaign is hosted</li> <li>Details on the campaign funding model</li></ul>  <p>The campaign funding model specifies how the Promoted Listings fee is calculated. Currently, the supported funding models are <code>COST_PER_SALE</code> and <code>COST_PER_CLICK</code>. For complete information on how the fee is calculated and when it applies, see <a href="/api-docs/sell/static/marketing/pl-overview.html#pl-fees">Promoted Listings fees</a>.</p>   <p>If you populate the <b>campaignCriterion</b> object in your <b>createCampaign</b> request, campaign "ads" are created by "rule" for the listings that meet the criteria you specify, and these ads are associated with the newly created campaign.</p>  <p>For details on creating Promoted Listings campaigns and how to select the items to be included in your campaigns, see <a href="/api-docs/sell/static/marketing/pl-create-campaign.html">Promoted Listings campaign creation</a>.</p>  <p>For recommendations on which listings are prime for a Promoted Listings ad campaign and to get guidance on how to set the <b>bidPercentage</b> field, see <a href="/api-docs/sell/static/marketing/pl-reco-api.html">Using the Recommendation API to help configure campaigns</a>.</p>  <p class="tablenote"><b>Tip:</b> See <a href="/api-docs/sell/marketing/static/overview.html#PL-requirements">Promoted Listings requirements and restrictions</a> for the details on the marketplaces that support Promoted Listings via the API. See <a href="/api-docs/sell/static/marketing/pl-restrictions">Promoted Listings restrictions</a> for details about campaign limitations and restrictions.</p>

> Body parameter

```json
{
  "budget": {
    "daily": {
      "amount": {
        "currency": "string",
        "value": "string"
      }
    }
  },
  "campaignCriterion": {
    "autoSelectFutureInventory": true,
    "criterionType": "string",
    "selectionRules": [
      {
        "brands": [
          "string"
        ],
        "categoryIds": [
          "string"
        ],
        "categoryScope": "string",
        "listingConditionIds": [
          "string"
        ],
        "maxPrice": {
          "currency": "string",
          "value": "string"
        },
        "minPrice": {
          "currency": "string",
          "value": "string"
        }
      }
    ]
  },
  "campaignName": "string",
  "endDate": "string",
  "fundingStrategy": {
    "adRateStrategy": "string",
    "bidPercentage": "string",
    "dynamicAdRatePreferences": [
      {
        "adRateAdjustmentPercent": "string",
        "adRateCapPercent": "string"
      }
    ],
    "fundingModel": "string"
  },
  "marketplaceId": "string",
  "startDate": "string"
}
```

<h3 id="createcampaign-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateCampaignRequest](#schemacreatecampaignrequest)|true|This type defines the fields for the create campaign request.|
|» budget|body|[CampaignBudgetRequest](#schemacampaignbudgetrequest)|false|The allocated daily budget for the Cost Per Click (CPC) Promoted Listings campaign.<br /><br /><i>Required if</i> the campaign funding model is CPC.|
|» campaignCriterion|body|[CampaignCriterion](#schemacampaigncriterion)|false|This container is used if the seller wishes to create one or more rules for a rules-based campaign. If you populate the <b>campaignCriterion</b> object in your <b>createCampaign</b> request, ads for the campaign are created by rule for the listings that meet the criteria you specify, and these ads are associated with the campaign to be created.|
|» campaignName|body|string|false|A seller-defined name for the campaign. This value must be unique for the seller. <p>You can use any alphanumeric characters in the name, except the less than (&lt;) or greater than (&gt;) characters.</p><b>Max length: </b>80 characters|
|» endDate|body|string|false|The date and time the campaign ends, in UTC format (<code>yyyy-MM-ddThh:mm:ssZ</code>). If this field is omitted, the campaign will have no defined end date, and will not end until the seller makes a decision to end the campaign with an <a href="/api-docs/sell/marketing/resources/campaign/methods/endCampaign">endCampaign</a> call, or if they update the campaign at a later time with an end date.|
|» fundingStrategy|body|[FundingStrategy](#schemafundingstrategy)|false|This container is used to set the funding model and default bid percentage for a Cost Per Sale (CPS) campaign.|
|» marketplaceId|body|string|false|The ID of the eBay marketplace where the campaign is hosted. See the <b>MarketplaceIdEnum</b> type to get the appropriate enumeration value for the listing marketplace. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/ba:MarketplaceIdEnum'>eBay API documentation</a>|
|» startDate|body|string|false|The date and time the campaign starts, in UTC format (<code>yyyy-MM-ddThh:mm:ssZ</code>). For display purposes, convert this time into the local time of the seller.  <p>On the date specified, the service derives the keywords for each listing in the campaign, creates an ad for each listing, and associates each new ad with the campaign. The campaign starts after this process is completed. The amount of time it takes the service to start the campaign depends on the number of listings in the campaign. Call <b>getCampaign</b> to check the status of the campaign.</p>|

> Example responses

> 201 Response

```json
{}
```

<h3 id="createcampaign-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|Inline|
|400|Bad Request|Bad Request|None|
|409|Conflict|Conflict|None|
|500|Internal Server Error|Internal Server Error|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope/sell.marketing )
</aside>

## findCampaignByAdReference

<a id="opIdfindCampaignByAdReference"></a>

> Code samples

```bash
curl https://api.ebay.com/ad_campaign/find_campaign_by_ad_reference \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /ad_campaign/find_campaign_by_ad_reference`

This method retrieves the campaigns containing the listing that is specified using either a listing ID, or an inventory reference ID and inventory reference type pair. The request accepts either a <b>listing_id</b>, <i>or</i> an <b>inventory_reference_id</b> and <b>inventory_reference_type</b> pair, as used in the Inventory API.<br /><br />eBay <i>listing IDs</i> are generated by either the <a href="/Devzone/XML/docs/Reference/eBay/index.html" title="Trading API Reference">Trading API</a> or the <a href="/api-docs/sell/inventory/resources/methods">Inventory API</a> when you create a listing.<br /><br />An <i>inventory reference ID</i> can be either a seller-defined <b>SKU</b> or <b>inventoryItemGroupKey</b>, as specified in the Inventory API.<br /><br /><span class="tablenote"><b>Note:</b> This method only applies to the Cost Per Sale (CPS) funding model; it does not apply to the Cost Per Click (CPC) funding model. See <a href="/api-docs/sell/static/marketing/pl-overview.html#funding-model">Funding Models</a> in the <i>Promoted Listings Playbook</i> for more information.</span>

<h3 id="findcampaignbyadreference-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|inventory_reference_id|query|string|false|The seller's inventory reference ID of the listing to be used to find the campaign in which it is associated.  This will either be a seller-defined <b>SKU</b> value or inventory item group ID, depending on the reference type specified. You must always pass in both  <b>inventory_reference_id</b> and <b>inventory_reference_type</b>.|
|inventory_reference_type|query|string|false|The type of the seller's inventory reference ID, which is a listing or group of items. You must always pass in both <b>inventory_reference_id</b> and <b>inventory_reference_type</b>.|
|listing_id|query|string|false|Identifier of the eBay listing associated with the ad.|

> Example responses

> 200 Response

```json
{
  "campaigns": [
    {
      "alerts": [
        {
          "alertType": "string",
          "details": [
            {
              "aspect": {
                "key": "string",
                "value": "string"
              },
              "dimension": {
                "key": "string",
                "value": "string"
              }
            }
          ]
        }
      ],
      "budget": {
        "daily": {
          "amount": {
            "currency": "string",
            "value": "string"
          },
          "budgetStatus": "string"
        }
      },
      "campaignCriterion": {
        "autoSelectFutureInventory": true,
        "criterionType": "string",
        "selectionRules": [
          {
            "brands": [
              "string"
            ],
            "categoryIds": [
              "string"
            ],
            "categoryScope": "string",
            "listingConditionIds": [
              "string"
            ],
            "maxPrice": {
              "currency": "string",
              "value": "string"
            },
            "minPrice": {
              "currency": "string",
              "value": "string"
            }
          }
        ]
      },
      "campaignId": "string",
      "campaignName": "string",
      "campaignStatus": "string",
      "endDate": "string",
      "fundingStrategy": {
        "adRateStrategy": "string",
        "bidPercentage": "string",
        "dynamicAdRatePreferences": [
          {
            "adRateAdjustmentPercent": "string",
            "adRateCapPercent": "string"
          }
        ],
        "fundingModel": "string"
      },
      "marketplaceId": "string",
      "startDate": "string"
    }
  ]
}
```

<h3 id="findcampaignbyadreference-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Campaigns](#schemacampaigns)|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not Found|None|
|409|Conflict|Business error|None|
|500|Internal Server Error|Internal Server error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope/sell.marketing.readonly https://api.ebay.com/oauth/api_scope/sell.marketing )
</aside>

## getCampaignByName

<a id="opIdgetCampaignByName"></a>

> Code samples

```bash
curl 'https://api.ebay.com/ad_campaign/get_campaign_by_name?campaign_name=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /ad_campaign/get_campaign_by_name`

This method retrieves the details of a single campaign, as specified with the <b>campaign_name</b> query parameter. Note that the campaign name you specify must be an exact, case-sensitive match of the name of the campaign you want to retrieve.</p><p>Call <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> to retrieve a list of the seller's campaign names.</p>

<h3 id="getcampaignbyname-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|campaign_name|query|string|true|The name of the campaign.|

> Example responses

> 200 Response

```json
{
  "alerts": [
    {
      "alertType": "string",
      "details": [
        {
          "aspect": {
            "key": "string",
            "value": "string"
          },
          "dimension": {
            "key": "string",
            "value": "string"
          }
        }
      ]
    }
  ],
  "budget": {
    "daily": {
      "amount": {
        "currency": "string",
        "value": "string"
      },
      "budgetStatus": "string"
    }
  },
  "campaignCriterion": {
    "autoSelectFutureInventory": true,
    "criterionType": "string",
    "selectionRules": [
      {
        "brands": [
          "string"
        ],
        "categoryIds": [
          "string"
        ],
        "categoryScope": "string",
        "listingConditionIds": [
          "string"
        ],
        "maxPrice": {
          "currency": "string",
          "value": "string"
        },
        "minPrice": {
          "currency": "string",
          "value": "string"
        }
      }
    ]
  },
  "campaignId": "string",
  "campaignName": "string",
  "campaignStatus": "string",
  "endDate": "string",
  "fundingStrategy": {
    "adRateStrategy": "string",
    "bidPercentage": "string",
    "dynamicAdRatePreferences": [
      {
        "adRateAdjustmentPercent": "string",
        "adRateCapPercent": "string"
      }
    ],
    "fundingModel": "string"
  },
  "marketplaceId": "string",
  "startDate": "string"
}
```

<h3 id="getcampaignbyname-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Campaign](#schemacampaign)|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not Found|None|
|409|Conflict|Business error|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope/sell.marketing.readonly https://api.ebay.com/oauth/api_scope/sell.marketing )
</aside>

## getCampaign

<a id="opIdgetCampaign"></a>

> Code samples

```bash
curl https://api.ebay.com/ad_campaign/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /ad_campaign/{campaign_id}`

This method retrieves the details of a single campaign, as specified with the <b>campaign_id</b> query parameter.  <p>This method returns all the details of a campaign (including the campaign's the selection rules), except the for the listing IDs or inventory reference IDs included in the campaign. These IDs are returned by <a href="/api-docs/sell/marketing/resources/ad/methods/getAds">getAds</a>.</p>  <p>Call <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> to retrieve a list of the seller's campaign IDs.</p>

<h3 id="getcampaign-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|campaign_id|path|string|true|A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created.<br /><br /><span class="tablenote"><b>Note:</b> You can retrieve the campaign IDs for a specified seller using the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method.</span>|

> Example responses

> 200 Response

```json
{
  "alerts": [
    {
      "alertType": "string",
      "details": [
        {
          "aspect": {
            "key": "string",
            "value": "string"
          },
          "dimension": {
            "key": "string",
            "value": "string"
          }
        }
      ]
    }
  ],
  "budget": {
    "daily": {
      "amount": {
        "currency": "string",
        "value": "string"
      },
      "budgetStatus": "string"
    }
  },
  "campaignCriterion": {
    "autoSelectFutureInventory": true,
    "criterionType": "string",
    "selectionRules": [
      {
        "brands": [
          "string"
        ],
        "categoryIds": [
          "string"
        ],
        "categoryScope": "string",
        "listingConditionIds": [
          "string"
        ],
        "maxPrice": {
          "currency": "string",
          "value": "string"
        },
        "minPrice": {
          "currency": "string",
          "value": "string"
        }
      }
    ]
  },
  "campaignId": "string",
  "campaignName": "string",
  "campaignStatus": "string",
  "endDate": "string",
  "fundingStrategy": {
    "adRateStrategy": "string",
    "bidPercentage": "string",
    "dynamicAdRatePreferences": [
      {
        "adRateAdjustmentPercent": "string",
        "adRateCapPercent": "string"
      }
    ],
    "fundingModel": "string"
  },
  "marketplaceId": "string",
  "startDate": "string"
}
```

<h3 id="getcampaign-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Campaign](#schemacampaign)|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not Found|None|
|409|Conflict|Business error|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope/sell.marketing.readonly https://api.ebay.com/oauth/api_scope/sell.marketing )
</aside>

## deleteCampaign

<a id="opIddeleteCampaign"></a>

> Code samples

```bash
curl https://api.ebay.com/ad_campaign/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /ad_campaign/{campaign_id}`

This method deletes the campaign specified by the <code>campaign_id</code> query parameter.<br /><br /><span class="tablenote"><b>Note: </b> You can only delete campaigns that have ended.</span><br /><br />Call <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> to retrieve the <b>campaign_id</b> and the campaign status (<code>RUNNING</code>, <code>PAUSED</code>, <code>ENDED</code>, and so on) for all the seller's campaigns.

<h3 id="deletecampaign-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|campaign_id|path|string|true|A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created.<br /><br /><span class="tablenote"><b>Note:</b> You can retrieve the campaign IDs for a specified seller using the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method.</span>|

<h3 id="deletecampaign-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not Found|None|
|409|Conflict|Conflict|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope/sell.marketing )
</aside>

## cloneCampaign

<a id="opIdcloneCampaign"></a>

> Code samples

```bash
curl https://api.ebay.com/ad_campaign/string/clone \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "campaignName": "string",
    "endDate": "string",
    "fundingStrategy": {
      "adRateStrategy": "string",
      "bidPercentage": "string",
      "dynamicAdRatePreferences": [
        {
          "adRateAdjustmentPercent": "string",
          "adRateCapPercent": "string"
        }
      ],
      "fundingModel": "string"
    },
    "startDate": "string"
  }'
```

`POST /ad_campaign/{campaign_id}/clone`

This method clones (makes a copy of) the specified campaign's <b>campaign criterion</b>. The <b>campaign criterion</b> is a container for the fields that define the criteria for a rule-based campaign.<p>To clone a campaign, supply the <b>campaign_id</b> as a path parameter in your call. There is no request payload.</p>  <p>The ID of the newly-cloned campaign is returned in the <b>Location</b> response header.</p><p>Call <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> to retrieve a seller's current campaign IDs.</p>  <p><b>Requirement: </b>In order to clone a campaign, the <b>campaignStatus</b> must be <code>ENDED</code> and the campaign must define a set of selection rules (it must be a rules-based campaign).</p><span class="tablenote"><b>Note:</b> This method only applies to the Cost Per Sale (CPS) funding model; it does not apply to the Cost Per Click (CPC) funding model. See <a href="/api-docs/sell/static/marketing/pl-overview.html#funding-model">Funding Models</a> in the <i>Promoted Listings Playbook</i> for more information.</span>

> Body parameter

```json
{
  "campaignName": "string",
  "endDate": "string",
  "fundingStrategy": {
    "adRateStrategy": "string",
    "bidPercentage": "string",
    "dynamicAdRatePreferences": [
      {
        "adRateAdjustmentPercent": "string",
        "adRateCapPercent": "string"
      }
    ],
    "fundingModel": "string"
  },
  "startDate": "string"
}
```

<h3 id="clonecampaign-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|campaign_id|path|string|true|A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created. This ID is the campaign ID of the campaign being cloned.<br /><br /><span class="tablenote"><b>Note:</b> You can retrieve the campaign IDs for a specified seller using the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method.</span>|
|body|body|[CloneCampaignRequest](#schemaclonecampaignrequest)|true|This type defines the fields for a clone campaign request.|
|» campaignName|body|string|false|A seller-defined name for the newly-cloned campaign. This value must be unique for the seller. <p>You can use any alphanumeric characters in the name, except the less than (&lt;) or greater than (&gt;) characters.</p><b>Max length: </b>80 characters|
|» endDate|body|string|false|The date and time the campaign ends, in UTC format (<code>yyyy-MM-ddThh:mm:ssZ</code>). If this field is omitted, the campaign will have no defined end date, and will not end until the seller makes a decision to end the campaign with an <a href="/api-docs/sell/marketing/resources/campaign/methods/endCampaign">endCampaign</a> call, or if they update the campaign at a later time with an end date.|
|» fundingStrategy|body|[FundingStrategy](#schemafundingstrategy)|false|This container is used to set the funding model and default bid percentage for the campaign to be cloned.|
|» startDate|body|string|false|The date and time the cloned campaign starts, in UTC format (<code>yyyy-MM-ddThh:mm:ssZ</code>). For display purposes, convert this time into the local time of the seller.  <p>On the date specified, the service derives the keywords for each listing in the campaign, creates an ad for each listing, and associates each new ad with the campaign. The campaign starts after this process is completed. The amount of time it takes the service to start the campaign depends on the number of listings in the campaign. Call <b>getCampaign</b> to check the status of the campaign.</p>|

> Example responses

> 201 Response

```json
{}
```

<h3 id="clonecampaign-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|Inline|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not Found|None|
|409|Conflict|Conflict|None|
|500|Internal Server Error|Internal Server Error|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope/sell.marketing )
</aside>

## endCampaign

<a id="opIdendCampaign"></a>

> Code samples

```bash
curl https://api.ebay.com/ad_campaign/string/end \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /ad_campaign/{campaign_id}/end`

This method ends an active (<code>RUNNING</code>) or paused campaign. Specify the campaign you want to end by supplying its campaign ID in a query parameter.  <p>Call <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> to retrieve the <b>campaign_id</b> and the campaign status (<code>RUNNING</code>, <code>PAUSED</code>, <code>ENDED</code>, and so on) for all the seller's campaigns.</p>

<h3 id="endcampaign-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|campaign_id|path|string|true|A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created.<br /><br /><span class="tablenote"><b>Note:</b> You can retrieve the campaign IDs for a specified seller using the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method.</span>|

<h3 id="endcampaign-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not Found|None|
|409|Conflict|Business error|None|
|500|Internal Server Error|Internal Server error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope/sell.marketing )
</aside>

## pauseCampaign

<a id="opIdpauseCampaign"></a>

> Code samples

```bash
curl https://api.ebay.com/ad_campaign/string/pause \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /ad_campaign/{campaign_id}/pause`

This method pauses an active (RUNNING) campaign.  <p>You can restart the campaign by calling <a href="/api-docs/sell/marketing/resources/campaign/methods/resumeCampaign">resumeCampaign</a>, as long as the campaign's end date is in the future.</p>  <p><b>Note: </b> The listings associated with a paused campaign cannot be added into another campaign.</p>  <p>Call <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> to retrieve the <b>campaign_id</b> and the campaign status (<code>RUNNING</code>, <code>PAUSED</code>, <code>ENDED</code>, and so on) for all the seller's campaigns.</p>

<h3 id="pausecampaign-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|campaign_id|path|string|true|A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created.<br /><br /><span class="tablenote"><b>Note:</b> You can retrieve the campaign IDs for a specified seller using the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method.</span>|

<h3 id="pausecampaign-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not Found|None|
|409|Conflict|Conflict|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope/sell.marketing )
</aside>

## resumeCampaign

<a id="opIdresumeCampaign"></a>

> Code samples

```bash
curl https://api.ebay.com/ad_campaign/string/resume \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /ad_campaign/{campaign_id}/resume`

This method resumes a paused campaign, as long as its end date is in the future. Supply the <b>campaign_id</b> for the campaign you want to restart as a query parameter in the request.  <p>Call <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> to retrieve the <b>campaign_id</b> and the campaign status (<code>RUNNING</code>, <code>PAUSED</code>, <code>ENDED</code>, and so on) for all the seller's campaigns.</p>

<h3 id="resumecampaign-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|campaign_id|path|string|true|A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created.<br /><br /><span class="tablenote"><b>Note:</b> You can retrieve the campaign IDs for a specified seller using the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method.</span>|

<h3 id="resumecampaign-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not Found|None|
|409|Conflict|Business error|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope/sell.marketing )
</aside>

## suggestItems

<a id="opIdsuggestItems"></a>

> Code samples

```bash
curl https://api.ebay.com/ad_campaign/string/suggest_items \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /ad_campaign/{campaign_id}/suggest_items`

<span class="tablenote"><b>Note:</b> This method is only available for select partners who have been approved for the eBay Promoted Listings Advanced (PLA) program. For information about how to request access to this program, refer to <a href="/api-docs/sell/static/marketing/pl-verify-eligibility.html#access-requests " target="_blank "> Promoted Listings Advanced Access Requests</a> in the Promoted Listings Playbook. To determine if a seller qualifies for PLA, use the <a href="/api-docs/sell/account/resources/advertising_eligibility/methods/getAdvertisingEligibility " target="_blank ">getAdvertisingEligibility</a> method in Account API.</span><br />This method allows sellers to obtain ideas for listings, which can be targeted for Promoted Listings campaigns.

<h3 id="suggestitems-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|campaign_id|path|string|true|A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created.<br /><br /><span class="tablenote"><b>Note:</b> You can retrieve the campaign IDs for a specified seller using the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method.</span>|
|category_ids|query|string|false|Specifies the category ID that is used to limit the results. This refers to an exact leaf category (the lowest level in that category and has no children). This field can have one category ID, or a comma-separated list of IDs. To return all category IDs, set to <code>null</code>. <br /><br /><b>Maximum: </b> 10 |
|limit|query|string|false|Specifies the maximum number of campaigns to return on a page in the paginated response. If no value is specified, the default value is used. <br /><br /><b>Default: </b>10 <br /><br /><b>Minimum: </b> 1<br /><br /><b>Maximum: </b> 1000|
|offset|query|string|false|Specifies the number of campaigns to skip in the result set before returning the first report in the paginated response.  <p>Combine <b>offset</b> with the <b>limit</b> query parameter to control the items returned in the response. For example, if you supply an <b>offset</b> of <code>0</code> and a <b>limit</b> of <code>10</code>, the first page of the response contains the first 10 items from the complete list of items retrieved by the call. If <b>offset</b> is <code>10</code> and <b>limit</b> is <code>20</code>, the first page of the response contains items 11-30 from the complete result set.</p> <p><b>Default:</b> 0</p>|

> Example responses

> 200 Response

```json
{
  "href": "string",
  "limit": 0,
  "next": "string",
  "offset": 0,
  "prev": "string",
  "suggestedItems": [
    {
      "bases": [
        {
          "estimatedValue": 0,
          "metric": "string"
        }
      ],
      "listingId": "string"
    }
  ],
  "total": 0
}
```

<h3 id="suggestitems-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TargetedAdsPagedCollection](#schematargetedadspagedcollection)|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not Found|None|
|409|Conflict|Business error|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope/sell.marketing )
</aside>

## updateAdRateStrategy

<a id="opIdupdateAdRateStrategy"></a>

> Code samples

```bash
curl https://api.ebay.com/ad_campaign/string/update_ad_rate_strategy \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "adRateStrategy": "string",
    "bidPercentage": "string",
    "dynamicAdRatePreferences": [
      {
        "adRateAdjustmentPercent": "string",
        "adRateCapPercent": "string"
      }
    ]
  }'
```

`POST /ad_campaign/{campaign_id}/update_ad_rate_strategy`

This method updates the ad rate strategy for an existing Promoted Listings Standard (PLS) rules-based ad campaign that uses the Cost Per Sale (CPS) funding model.<br /><br />Specify the <b>campaign_id</b> as a path parameter. You can retrieve the campaign IDs for a seller by calling the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method.<br /><br /><span class="tablenote"><b>Note:</b> This method only applies to the CPS funding model; it does not apply to the Cost Per Click (CPC) funding model. See <a href="/api-docs/sell/static/marketing/pl-overview.html#funding-model">Funding Models</a> in the <i>Promoted Listings Playbook</i> for more information.</span>

> Body parameter

```json
{
  "adRateStrategy": "string",
  "bidPercentage": "string",
  "dynamicAdRatePreferences": [
    {
      "adRateAdjustmentPercent": "string",
      "adRateCapPercent": "string"
    }
  ]
}
```

<h3 id="updateadratestrategy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|campaign_id|path|string|true|A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created.<br /><br /><span class="tablenote"><b>Note:</b> You can retrieve the campaign IDs for a specified seller using the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method.</span>|
|body|body|[UpdateAdrateStrategyRequest](#schemaupdateadratestrategyrequest)|true|This type defines the request fields for the ad rate strategy that shall be updated.|
|» adRateStrategy|body|string|false|The ad rate strategy that shall be applied to the campaign. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:AdRateStrategyEnum'>eBay API documentation</a>|
|» bidPercentage|body|string|false|The user-defined <b>bid percentage</b> (also known as the <i>ad rate</i>) sets the level that eBay increases the visibility in search results for the associated listing. The higher the <b>bidPercentage</b> value, the more eBay promotes the listing.  <br><br>The value specified here is also used to calculate the Promoted Listings fee. This percentage value is multiplied by the final sales price to determine the fee. <br><br>The Promoted Listings fee is determined at the time the transaction completes and the seller is assessed the fee only when an item sells through a Promoted Listings ad campaign. <br><br>The <b>bidPercentage</b> is a single precision value that is guided by the following rules: <ul><li>These values are <b>valid</b>:<br>&nbsp;&nbsp;&nbsp;<code>4.1</code>, &nbsp;&nbsp;&nbsp;<code>5.0</code>, &nbsp;&nbsp;&nbsp;<code>5.5</code>, ...</li>  <li>These values are <b>not valid</b>:<br /> &nbsp;&nbsp;&nbsp;<code>0.01</code>, &nbsp;&nbsp;&nbsp;<code>10.75</code>, &nbsp;&nbsp;&nbsp;<code>99.99</code>,<br /> &nbsp;&nbsp;&nbsp;and so on.</li></ul>This is the default bid percentage for the campaigns using the Cost Per Sale (CPS) funding model, and this value will be overridden by any ads in the campaign that have their own set bid percentages.<br /><br />If a bid percentage is not provided for an ad, eBay uses the default bid percentage of the associated campaign.<br /><br /><b>Minimum value:</b> 2.0 <br><b>Maximum value:</b> 100.0|
|» dynamicAdRatePreferences|body|[[DynamicAdRatePreference](#schemadynamicadratepreference)]|false|A field that indicates whether a single, user-defined bid percentage (also known as the <i>ad rate</i>) should be used, or whether eBay should automatically adjust listings to maintain the daily suggested bid percentage.<br /><br /><span class="tablenote"><span style="color:#004680"><strong>Note:</strong></span> Dynamic adjustment is only applicable when the <b>adRateStrategy</b> is set to <code>DYNAMIC</code>.</span><br /><b>Default:</b> <code>FIXED</code>|

<h3 id="updateadratestrategy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not Found|None|
|409|Conflict|Conflict|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope/sell.marketing )
</aside>

## updateCampaignBudget

<a id="opIdupdateCampaignBudget"></a>

> Code samples

```bash
curl https://api.ebay.com/ad_campaign/string/update_campaign_budget \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "daily": {
      "amount": {
        "currency": "string",
        "value": "string"
      }
    }
  }'
```

`POST /ad_campaign/{campaign_id}/update_campaign_budget`

<span class="tablenote"><b>Note:</b> This method is only available for select partners who have been approved for the eBay Promoted Listings Advanced (PLA) program. For information about how to request access to this program, refer to <a href="/api-docs/sell/static/marketing/pl-verify-eligibility.html#access-requests " target="_blank "> Promoted Listings Advanced Access Requests</a> in the Promoted Listings Playbook. To determine if a seller qualifies for PLA, use the <a href="/api-docs/sell/account/resources/advertising_eligibility/methods/getAdvertisingEligibility " target="_blank ">getAdvertisingEligibility</a> method in Account API.</span><br />This method updates the daily budget for a PLA campaign that uses the Cost Per Click (CPC) funding model.<br /><br />A click occurs when an eBay user finds and clicks on the seller’s listing (within the search results) after using a keyword that the seller has created for the campaign. For each ad in an ad group in the campaign, each click triggers a cost, which gets subtracted from the campaign’s daily budget. If the cost of the clicks exceeds the daily budget, the Promoted Listings campaign will be paused until the next day.<br /><br />Specify the <b>campaign_id</b> as a path parameter. You can retrieve the campaign IDs for a seller by calling the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method.

> Body parameter

```json
{
  "daily": {
    "amount": {
      "currency": "string",
      "value": "string"
    }
  }
}
```

<h3 id="updatecampaignbudget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|campaign_id|path|string|true|A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created.<br /><br /><span class="tablenote"><b>Note:</b> You can retrieve the campaign IDs for a specified seller using the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method.</span>|
|body|body|[UpdateCampaignBudgetRequest](#schemaupdatecampaignbudgetrequest)|true|This type defines the request fields for the budget details that shall be updated.|
|» daily|body|[BudgetRequest](#schemabudgetrequest)|false|The daily budget limit for the Cost Per Click (CPC) Promoted Listings campaign. This will be a dollar value. All clicks using the keywords defined for the campaign will go towards expending the daily budget. Once the daily budget is exceeded for the campaign, all Promoted Listings under the campaign will be turned off until the next day.<br /><br /><b>Valid Values</b>:<ul><li><code>50.00</code></li><li><code>100.00</code></li></ul>|

<h3 id="updatecampaignbudget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not Found|None|
|409|Conflict|Conflict|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope/sell.marketing )
</aside>

## updateCampaignIdentification

<a id="opIdupdateCampaignIdentification"></a>

> Code samples

```bash
curl https://api.ebay.com/ad_campaign/string/update_campaign_identification \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "campaignName": "string",
    "endDate": "string",
    "startDate": "string"
  }'
```

`POST /ad_campaign/{campaign_id}/update_campaign_identification`

This method can be used to change the name of a campaign, as well as modify the start or end dates. <p>Specify the <b>campaign_id</b> you want to update as a URI parameter, and configure the <b>campaignName</b> and <b>startDate</b> in the request payload.  <p>If you want to change only the end date of the campaign, specify the current campaign name, set <b>endDate</b> as desired, and set <b>startDate</b> to the actual start date of the campaign. This applies if the campaign status is <code>RUNNING</code> or <code>PAUSED</code>. You can retrieve the <b>startDate</b> using the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaign#response.startDate">getCampaign</a> method.</p> <p>Note that if you do not set a new end date in this call, any current <b>endDate</b> value will be set to <code>null</code>. To preserve the currently-set end date, you must specify the value again in your request.</p>  <p>Call <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> to retrieve a seller's campaign details, including the campaign ID, campaign name, and the start and end dates of the campaign.

> Body parameter

```json
{
  "campaignName": "string",
  "endDate": "string",
  "startDate": "string"
}
```

<h3 id="updatecampaignidentification-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|campaign_id|path|string|true|A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created.<br /><br /><span class="tablenote"><b>Note:</b> You can retrieve the campaign IDs for a specified seller using the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method.</span>|
|body|body|[UpdateCampaignIdentificationRequest](#schemaupdatecampaignidentificationrequest)|true|This type defines the fields to update the campaign name and start and end dates.|
|» campaignName|body|string|false|The new seller-defined name for the campaign. This value must be unique for the seller. <p>If you don't want to change the name of the campaign, specify the current campaign name in this field.<p>You can use any alphanumeric characters in the name, except the less than (&lt;) or greater than (&gt;) characters.</p><b>Max length: </b>80 characters.|
|» endDate|body|string|false|The date and time the campaign ends, in UTC format (<code>yyyy-MM-ddThh:mm:ssZ</code>). If this field is omitted, the campaign will have no defined end date, and will not end until the seller makes a decision to end the campaign with an <a href="/api-docs/sell/marketing/resources/campaign/methods/endCampaign">endCampaign</a> call, or if they update the campaign at a later time with an end date.<p>If you want to change only the end date of the campaign, you must specify the current campaign name, set the <b>endDate</b> as desired, and set the <b>startDate</b> to the actual start date of the campaign. This applies if the campaign status is <code>RUNNING</code> or <code>PAUSED</code>. You can retrieve the <b>startDate</b> using the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaign#response.startDate">getCampaign</a> method.</p> <p>Note that if you do not set a new end date in this call, any current endDate value will be set to null. To preserve the currently-set end date, you must specify the value again in your request.</p>|
|» startDate|body|string|false|The new start date for the campaign, in UTC format (<code>yyyy-MM-ddThh:mm:ssZ</code>).<p>If the campaign status is <code>RUNNING</code> or <code>PAUSED</code>, the <b>startDate</b> must be specified and must be the actual start date of the campaign, even if you are only changing the <b>endDate</b>. You can retrieve the campaign's <b>startDate</b> using the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaign#response.startDate">getCampaign</a> method.</p><p>On the date specified, the service derives the keywords for each listing in the campaign, creates an ad for each listing, and associates each new ad with the campaign. The campaign starts after this process is completed. The amount of time it takes the service to start the campaign depends on the number of listings in the campaign.</p>  <p>Call <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> to retrieve the <b>campaign_id</b> and the campaign status (<code>RUNNING</code>, <code>PAUSED</code>, <code>ENDED</code>, and so on) for all the seller's campaigns.</p>|

<h3 id="updatecampaignidentification-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not Found|None|
|409|Conflict|Conflict|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope/sell.marketing )
</aside>

<h1 id="marketing-api-ad">ad</h1>

## getAds

<a id="opIdgetAds"></a>

> Code samples

```bash
curl https://api.ebay.com/ad_campaign/string/ad \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /ad_campaign/{campaign_id}/ad`

This method retrieves Promoted Listings ads that are associated with listings created with either the <a href="/Devzone/XML/docs/Reference/eBay/index.html" title="Trading API Reference">Trading API</a> or the <a href="/api-docs/sell/inventory/resources/methods" title="Inventory API Reference">Inventory API</a>. <p>The method retrieves ads related to the specified campaign. Specify the Promoted Listings campaign to target with the <b>campaign_id</b> path parameter.</p>  <p>Because of the large number of possible results, you can use query parameters to paginate the result set by specifying a <b>limit</b>, which dictates how many ads to return on each page of the response. You can also specify how many ads to skip in the result set before returning the first result using the <b>offset</b> path parameter.</p>  <p>Call <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> to retrieve the current campaign IDs for the seller.</p>

<h3 id="getads-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ad_group_ids|query|string|false|A comma-separated list of ad group IDs. The results will be filtered to only include active ads for these ad groups. Call <a href="/api-docs/sell/marketing/resources/adgroup/methods/getAdGroups">getAdGroups</a> to retrieve the ad group ID for the ad group.<br /><br /><span class="tablenote"><b>Note:</b> This field only applies to the Cost Per Click (CPC) funding model; it does not apply to the Cost Per Sale (CPS) funding model.</span>|
|ad_status|query|string|false|A comma-separated list of ad statuses. The results will be filtered to only include the given statuses of the ad. If none are provided, all ads are returned.|
|campaign_id|path|string|true|A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created.<br /><br /><span class="tablenote"><b>Note:</b> You can retrieve the campaign IDs for a specified seller using the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method.</span>|
|limit|query|string|false|Specifies the maximum number of ads to return on a page in the paginated response. <p><b>Default: </b>10 <br><b>Maximum:</b> 500</p>|
|listing_ids|query|string|false|A comma-separated list of listing IDs. The response includes only active ads (ads associated with a RUNNING campaign). The results do not include listing IDs that are excluded by other conditions.|
|offset|query|string|false|Specifies the number of ads to skip in the result set before returning the first ad in the paginated response.  <p>Combine <b>offset</b> with the <b>limit</b> query parameter to control the items returned in the response. For example, if you supply an <b>offset</b> of <code>0</code> and a <b>limit</b> of <code>10</code>, the first page of the response contains the first 10 items from the complete list of items retrieved by the call. If <b>offset</b> is <code>10</code> and <b>limit</b> is <code>20</code>, the first page of the response contains items 11-30 from the complete result set.</p> <p><b>Default:</b> 0</p>|

> Example responses

> 200 Response

```json
{
  "ads": [
    {
      "adGroupId": "string",
      "adId": "string",
      "adStatus": "string",
      "alerts": [
        {
          "alertType": "string",
          "details": [
            {
              "aspect": {
                "key": "string",
                "value": "string"
              },
              "dimension": {
                "key": "string",
                "value": "string"
              }
            }
          ]
        }
      ],
      "bidPercentage": "string",
      "inventoryReferenceId": "string",
      "inventoryReferenceType": "string",
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

<h3 id="getads-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AdPagedCollectionResponse](#schemaadpagedcollectionresponse)|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not Found|None|
|409|Conflict|Conflict|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope/sell.marketing.readonly https://api.ebay.com/oauth/api_scope/sell.marketing )
</aside>

## createAdByListingId

<a id="opIdcreateAdByListingId"></a>

> Code samples

```bash
curl https://api.ebay.com/ad_campaign/string/ad \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "adGroupId": "string",
    "bidPercentage": "string",
    "listingId": "string"
  }'
```

`POST /ad_campaign/{campaign_id}/ad`

This method adds a listing to an existing Promoted Listings campaign using a <b>listingId</b> value generated by the <a href="/Devzone/XML/docs/Reference/eBay/index.html" title="Trading API Reference">Trading API</a> or <a href="/api-docs/sell/inventory/resources/methods" title="Inventory API Reference">Inventory API</a>, or using a value generated by an ad group ID. <p>For Promoted Listings Standard (PLS) campaigns using the Cost Per Sale (CPS) funding model, an ad may be directly created for the listing.</p><p>For the listing ID specified in the request, this method:</p>  <ul><li>Creates an ad for the listing.</li> <li>Sets the bid percentage (also known as the <i>ad rate</i>) for the ad.</li> <li>Associates the ad with the specified campaign.</li></ul>  <p>To create an ad for a listing, specify its <b>listingId</b>, plus the <b>bidPercentage</b> for the ad in the payload of the request. Specify the campaign to associate the ad with using the <b>campaign_id</b> path parameter. Listing IDs are generated by eBay when a seller creates listings with the Trading API.</p><p>For Promoted Listings Advanced (PLA) campaigns using the Cost Per Click (CPC) funding model, an ad group must be created first. If no ad group has been created for the campaign, an ad cannot be created.</p><p>For the ad group specified in the request, this method associates the ad with the specified ad group.</p><p>To create an ad for an ad group, specify the name of the ad group in the payload of the request. Specify the campaign to associate the ads with using the <b>campaign_id</b> path parameter. Ad groups are generated using the <a href="/api-docs/sell/marketing/resources/adgroup/methods/createAdGroup">createAdGroup</a> method.</p> <p>You can specify one or more ad groups per campaign.</p><p>Use <a href="/api-docs/sell/marketing/resources/campaign/methods/createCampaign">createCampaign</a> to create a new campaign and use <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> to get a list of existing campaigns.</p><p>This call has no response payload. If the ad is successfully created, a <code>201 Created</code> HTTP status code and the <a href="/api-docs/sell/marketing/resources/ad/methods/getAd">getAd</a> URI of the ad are returned in the location header.</p>

> Body parameter

```json
{
  "adGroupId": "string",
  "bidPercentage": "string",
  "listingId": "string"
}
```

<h3 id="createadbylistingid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|campaign_id|path|string|true|A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created.<br /><br /><span class="tablenote"><b>Note:</b> You can retrieve the campaign IDs for a specified seller using the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method.</span>|
|body|body|[CreateAdRequest](#schemacreateadrequest)|true|This request object defines the fields used in the <b>createAdByListingId</b> request.|
|» adGroupId|body|string|false|A unique eBay-assigned ID for an ad group in a campaign that uses the Cost Per Click (CPC) funding model. <p><i>Required if</i> the campaign's funding model is Cost Per Click (CPC).</p><p>Create an ad group using the <a href="/api-docs/sell/marketing/resources/adgroup/methods/createAdGroup">createAdGroup</a> method.</p><p>Specify the campaign to associate the ad group with using the <b>campaign_id</b> path parameter. </p><span class="tablenote"><b>Note:</b> You can call the  <a href="/api-docs/sell/marketing/resources/adgroup/methods/getAdGroups">getAdGroups</a> method to retrieve the ad group IDs for a seller.</span>|
|» bidPercentage|body|string|false|The user-defined <b>bid percentage</b> (also known as the <i>ad rate</i>) sets the level that eBay increases the visibility in search results for the associated listing. The higher the <b>bidPercentage</b> value, the more eBay promotes the listing.<br><br><i>Required if</i> the campaign's funding model is Cost Per Sale (CPS).  <br><br>The value specified here is also used to calculate the Promoted Listings fee. This percentage value is multiplied by the final sales price to determine the fee. <br><br>The Promoted Listings fee is determined at the time the transaction completes and the seller is assessed the fee only when an item sells through a Promoted Listings ad campaign. <br><br>The <b>bidPercentage</b> is a single precision value that is guided by the following rules: <ul><li>These values are <b>valid</b>:<br>&nbsp;&nbsp;&nbsp;<code>4.1</code>,&nbsp;&nbsp;&nbsp;<code>5.0</code>, &nbsp;&nbsp;&nbsp;<code>5.5</code>, ...</li>  <li>These values are <b>not valid</b>:<br /> &nbsp;&nbsp;&nbsp;<code>0.01</code>, &nbsp;&nbsp;&nbsp;<code>10.75</code>, &nbsp;&nbsp;&nbsp;<code>99.99</code>,<br /> &nbsp;&nbsp;&nbsp;and so on.</li></ul>This is default bid percentage for the campaigns using the Cost Per Sale (CPS) funding model, and this value will be overridden by any ads in the campaign that have their own set bid percentages.<br /><br />If a bid percentage is not provided for an ad, eBay uses the default bid percentage of the associated campaign.<br /><br /><b>Minimum value:</b> 2.0 <br><b>Maximum value:</b> 100.0|
|» listingId|body|string|false|A unique eBay-assigned ID for a listing that is generated when the listing is created.  <p class="tablenote"><b>Note:</b> This field accepts listing IDs, as generated by the Inventory API, and item IDs, as used in the eBay Traditional API set (e.g., the Trading and Finding APIs).</p>|

> Example responses

> 201 Response

```json
{}
```

<h3 id="createadbylistingid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|Inline|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not Found|None|
|409|Conflict|Business error|None|
|500|Internal Server Error|Internal Server Error|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope/sell.marketing )
</aside>

## getAd

<a id="opIdgetAd"></a>

> Code samples

```bash
curl https://api.ebay.com/ad_campaign/string/ad/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /ad_campaign/{campaign_id}/ad/{ad_id}`

This method retrieves the specified ad from the specified campaign.  <p>In the request, supply the <b>campaign_id</b> and <b>ad_id</b> as path parameters.</p> <p>Call <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> to retrieve a list of the seller's current campaign IDs and call <a href="/api-docs/sell/marketing/resources/ad/methods/getAds">getAds</a> to retrieve their current ad IDs.</p>

<h3 id="getad-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ad_id|path|string|true|A unique identifier for an ad. This ID is generated when the ad is created.|
|campaign_id|path|string|true|A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created.<br /><br /><span class="tablenote"><b>Note:</b> You can retrieve the campaign IDs for a specified seller using the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method.</span>|

> Example responses

> 200 Response

```json
{
  "adGroupId": "string",
  "adId": "string",
  "adStatus": "string",
  "alerts": [
    {
      "alertType": "string",
      "details": [
        {
          "aspect": {
            "key": "string",
            "value": "string"
          },
          "dimension": {
            "key": "string",
            "value": "string"
          }
        }
      ]
    }
  ],
  "bidPercentage": "string",
  "inventoryReferenceId": "string",
  "inventoryReferenceType": "string",
  "listingId": "string"
}
```

<h3 id="getad-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Ad](#schemaad)|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not Found|None|
|409|Conflict|Business error|None|
|500|Internal Server Error|Internal Server error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope/sell.marketing.readonly https://api.ebay.com/oauth/api_scope/sell.marketing )
</aside>

## deleteAd

<a id="opIddeleteAd"></a>

> Code samples

```bash
curl https://api.ebay.com/ad_campaign/string/ad/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /ad_campaign/{campaign_id}/ad/{ad_id}`

This method removes the specified ad from the specified campaign.<br /><br />Pass the ID of the ad to delete with the ID of the campaign associated with the ad as path parameters to the call.<br /><br />Call <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> to get the current list of the seller's campaign IDs.<br /><br /><span class="tablenote"><b>Note:</b> This method only applies to the Cost Per Sale (CPS) funding model; it does not apply to the Cost Per Click (CPC) funding model. See <a href="/api-docs/sell/static/marketing/pl-overview.html#funding-model">Funding Models</a> in the <i>Promoted Listings Playbook</i> for more information.</span><br /><br />When using the CPC funding model, use the <b>bulkUpdateAdsStatusByListingId</b> method to change the status of ads to ARCHIVED.

<h3 id="deletead-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ad_id|path|string|true|Identifier of an ad. This ID was generated when the ad was created.|
|campaign_id|path|string|true|A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created.<br /><br /><span class="tablenote"><b>Note:</b> You can retrieve the campaign IDs for a specified seller using the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method.</span>|

<h3 id="deletead-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not Found|None|
|409|Conflict|Conflict|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope/sell.marketing )
</aside>

## updateBid

<a id="opIdupdateBid"></a>

> Code samples

```bash
curl https://api.ebay.com/ad_campaign/string/ad/string/update_bid \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "bidPercentage": "string"
  }'
```

`POST /ad_campaign/{campaign_id}/ad/{ad_id}/update_bid`

This method updates the bid percentage (also known as the "ad rate") for the specified ad in the specified campaign. <p>In the request, supply the <b>campaign_id</b> and <b>ad_id</b> as path parameters, and supply the new <b>bidPercentage</b> value in the payload of the call.</p>  <p>Call <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> to retrieve a seller's current campaign IDs and call <a href="/api-docs/sell/marketing/resources/ad/methods/getAds">getAds</a> to get their ad IDs.</p><span class="tablenote"><b>Note:</b> This method only applies to the Cost Per Sale (CPS) funding model; it does not apply to the Cost Per Click (CPC) funding model. See <a href="/api-docs/sell/static/marketing/pl-overview.html#funding-model">Funding Models</a> in the <i>Promoted Listings Playbook</i> for more information.</span>

> Body parameter

```json
{
  "bidPercentage": "string"
}
```

<h3 id="updatebid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ad_id|path|string|true|A unique eBay-assigned ID for an ad that's generated when an ad is created.|
|campaign_id|path|string|true|A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created.<br /><br /><span class="tablenote"><b>Note:</b> You can retrieve the campaign IDs for a specified seller using the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method.</span>|
|body|body|[UpdateBidPercentageRequest](#schemaupdatebidpercentagerequest)|true|This type defines the fields for the <b>updateBid</b> request.|
|» bidPercentage|body|string|false|The user-defined <b>bid percentage</b> (also known as the <i>ad rate</i>) sets the level that eBay increases the visibility in search results for the associated listing. The higher the <b>bidPercentage</b> value, the more eBay promotes the listing.  <br><br>The value specified here is also used to calculate the Promoted Listings fee. This percentage value is multiplied by the final sales price to determine the fee. <br><br>The Promoted Listings fee is determined at the time the transaction completes and the seller is assessed the fee only when an item sells through a Promoted Listings ad campaign. <br><br>The <b>bidPercentage</b> is a single precision value that is guided by the following rules: <ul><li>These values are <b>valid</b>:<br>&nbsp;&nbsp;&nbsp;<code>4.1</code>, &nbsp;&nbsp;&nbsp;<code>5.0</code>, &nbsp;&nbsp;&nbsp;<code>5.5</code>, ...</li>  <li>These values are <b>not valid</b>:<br /> &nbsp;&nbsp;&nbsp;<code>0.01</code>, &nbsp;&nbsp;&nbsp;<code>10.75</code>, &nbsp;&nbsp;&nbsp;<code>99.99</code>,<br /> &nbsp;&nbsp;&nbsp;and so on.</li></ul>This is default bid percentage for the campaigns using the Cost Per Sale (CPS) funding model, and this value will be overridden by any ads in the campaign that have their own set bid percentages.<br /><br />If a bid percentage is not provided for an ad, eBay uses the default bid percentage of the associated campaign.<br /><br /><b>Minimum value:</b> 2.0 <br><b>Maximum value:</b> 100.0|

<h3 id="updatebid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not Found|None|
|409|Conflict|Conflict|None|
|500|Internal Server Error|Internal Server error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope/sell.marketing )
</aside>

## bulkCreateAdsByInventoryReference

<a id="opIdbulkCreateAdsByInventoryReference"></a>

> Code samples

```bash
curl https://api.ebay.com/ad_campaign/string/bulk_create_ads_by_inventory_reference \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "requests": [
      {
        "adGroupId": "string",
        "bidPercentage": "string",
        "inventoryReferenceId": "string",
        "inventoryReferenceType": "string"
      }
    ]
  }'
```

`POST /ad_campaign/{campaign_id}/bulk_create_ads_by_inventory_reference`

This method adds multiple listings that are managed with the <a href="/api-docs/sell/inventory/resources/methods" title="Inventory API Reference">Inventory API</a> to an existing Promoted Listings campaign.<br /><br />For Promoted Listings Standard (PLS) campaigns using the Cost Per Sale (CPS) model, bulk ads may be directly created for the listing.<br /><br />For each listing specified in the request, this method:<br /><ul><li>Creates an ad for the listing.</li> <li>Sets the bid percentage (also known as the <i>ad rate</i>) for the ads created.</li> <li>Associates the ads created with the specified campaign.</li></ul><br />To create ads for a listing, specify their <b>inventoryReferenceId</b> and <b>inventoryReferenceType</b>, plus the <b>bidPercentage</b> for the ad in the payload of the request. Specify the campaign to which you want to associate the ads using the <b>campaign_id</b> path parameter.<br /><br /><span class="tablenote"><b>Note:</b> This method only applies to the Cost Per Sale (CPS) funding model; it does not apply to the Cost Per Click (CPC) funding model. See <a href="/api-docs/sell/static/marketing/pl-overview.html#funding-model">Funding Models</a> in the <i>Promoted Listings Playbook</i> for more information.</span><br /><br />Use <a href="/api-docs/sell/marketing/resources/campaign/methods/createCampaign">createCampaign</a> to create a new campaign and use <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> to get a list of existing campaigns.

> Body parameter

```json
{
  "requests": [
    {
      "adGroupId": "string",
      "bidPercentage": "string",
      "inventoryReferenceId": "string",
      "inventoryReferenceType": "string"
    }
  ]
}
```

<h3 id="bulkcreateadsbyinventoryreference-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|campaign_id|path|string|true|A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created. Get a seller's campaign IDs by calling <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a>.|
|body|body|[BulkCreateAdsByInventoryReferenceRequest](#schemabulkcreateadsbyinventoryreferencerequest)|true|The container for the bulk request to create ads for eBay inventory reference IDs. eBay inventory reference IDs are seller-defined IDs used by theInventory API.|
|» requests|body|[[CreateAdsByInventoryReferenceRequest](#schemacreateadsbyinventoryreferencerequest)]|false|A list of inventory reference ID and inventory reference type pairs, and the bid percentage, which the call uses to create ads in bulk.|

> Example responses

> 200 Response

```json
{
  "responses": [
    {
      "adGroupId": "string",
      "ads": [
        {
          "adId": "string",
          "href": "string"
        }
      ],
      "errors": [
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
      ],
      "inventoryReferenceId": "string",
      "inventoryReferenceType": "string",
      "statusCode": 0
    }
  ]
}
```

<h3 id="bulkcreateadsbyinventoryreference-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BulkCreateAdsByInventoryReferenceResponse](#schemabulkcreateadsbyinventoryreferenceresponse)|
|207|Multi-Status|Multi Status|None|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not Found|None|
|409|Conflict|Conflict|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope/sell.marketing )
</aside>

## bulkCreateAdsByListingId

<a id="opIdbulkCreateAdsByListingId"></a>

> Code samples

```bash
curl https://api.ebay.com/ad_campaign/string/bulk_create_ads_by_listing_id \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "requests": [
      {
        "adGroupId": "string",
        "bidPercentage": "string",
        "listingId": "string"
      }
    ]
  }'
```

`POST /ad_campaign/{campaign_id}/bulk_create_ads_by_listing_id`

This method adds multiple listings to an existing Promoted Listings campaign using <b>listingId</b> values generated by the <a href="/Devzone/XML/docs/Reference/eBay/index.html" title="Trading API Reference">Trading API</a> or <a href="/api-docs/sell/inventory/resources/methods" title="Inventory API Reference">Inventory API</a>, or using values generated by an ad group ID.<p>For Promoted Listings Standard (PLS) campaigns using the Cost Per Sale (CPS) funding model, bulk ads may be directly created for the listing.</p><p>For each listing ID specified in the request, this method:</p>  <ul><li>Creates an ad for the listing.</li> <li>Sets the bid percentage (also known as the <i>ad rate</i>) for the ad.</li> <li>Associates the ad with the specified campaign.</li></ul><p>To create an ad for a listing, specify its <b>listingId</b>, plus the <b>bidPercentage</b> for the ad in the payload of the request. Specify the campaign to associate the ads with using the <b>campaign_id</b> path parameter. Listing IDs are generated by eBay when a seller creates listings with the Trading API.</p><p>You can specify a maximum of <b>500 listings per call</b> and each campaign can have ads for a maximum of 50,000 items. Be aware when using this call that each variation in a multiple-variation listing creates an individual ad.</p><p>For Promoted Listings Advanced (PLA) campaigns using the Cost Per Click (CPC) funding model, an ad group must be created first. If no ad group has been created for the campaign, ads cannot be created.</p><p>For the ad group specified in the request, this method associates the ad with the specified ad group.</p><p>To create an ad for an ad group, specify the name of the ad group plus the <b>defaultBid</b> for the ad in the payload of the request. Specify the campaign to associate the ads with using the <b>campaign_id</b> path parameter. Ad groups are generated using the <a href="/api-docs/sell/marketing/resources/adgroup/methods/createAdGroup">createAdGroup</a>  method.</p> <p>You can specify one or more ad groups per campaign.</p><p>Use <a href="/api-docs/sell/marketing/resources/campaign/methods/createCampaign">createCampaign</a> to create a new campaign and use <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> to get a list of existing campaigns.</p>

> Body parameter

```json
{
  "requests": [
    {
      "adGroupId": "string",
      "bidPercentage": "string",
      "listingId": "string"
    }
  ]
}
```

<h3 id="bulkcreateadsbylistingid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|campaign_id|path|string|true|A unique eBay-assigned ID for an ad campaign that's generated when a campaign is created. Get a seller's campaign IDs by calling <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a>.|
|body|body|[BulkCreateAdRequest](#schemabulkcreateadrequest)|true|The container for the bulk request to create ads for eBay listing IDs. eBay listing IDs are generated by the Trading API and Inventory API when the listing is created on eBay.|
|» requests|body|[[CreateAdRequest](#schemacreateadrequest)]|false|An array of listing IDs and their associated bid percentages, which the request uses to create ads in bulk. This request accepts both listing IDs, as generated by the Inventory API, and an item IDs, as used in the eBay Traditional API set (e.g., the Trading and Finding APIs).  <br><br><b>Maximum: </b> 500 IDs per call|

> Example responses

> 200 Response

```json
{
  "responses": [
    {
      "adGroupId": "string",
      "adId": "string",
      "errors": [
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
      ],
      "href": "string",
      "listingId": "string",
      "statusCode": 0
    }
  ]
}
```

<h3 id="bulkcreateadsbylistingid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BulkAdResponse](#schemabulkadresponse)|
|207|Multi-Status|Multi Status|None|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not Found|None|
|409|Conflict|Conflict|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope/sell.marketing )
</aside>

## bulkDeleteAdsByInventoryReference

<a id="opIdbulkDeleteAdsByInventoryReference"></a>

> Code samples

```bash
curl https://api.ebay.com/ad_campaign/string/bulk_delete_ads_by_inventory_reference \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "requests": [
      {
        "inventoryReferenceId": "string",
        "inventoryReferenceType": "string"
      }
    ]
  }'
```

`POST /ad_campaign/{campaign_id}/bulk_delete_ads_by_inventory_reference`

This method works with listings created with the <a href="/api-docs/sell/inventory/resources/methods" title="Inventory API Reference">Inventory API</a>.<br /><br />The method deletes a set of ads, as specified by a list of inventory reference IDs, from the specified campaign. <i>Inventory reference IDs</i> are seller-defined IDs that are used with the Inventory API</a>.<br /><br />Pass the <b>campaign_id</b> as a path parameter and populate the payload with a list of <b>inventoryReferenceId</b> and <b>inventoryReferenceType</b> pairs that you want to delete.<br /><br />Get the campaign IDs for a seller by calling <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> and call <a href="/api-docs/sell/marketing/resources/ad/methods/getAds">getAds</a> to get a list of the seller's inventory reference IDs.<br /><br /><span class="tablenote"><b>Note:</b> This method only applies to the Cost Per Sale (CPS) funding model; it does not apply to the Cost Per Click (CPC) funding model. See <a href="/api-docs/sell/static/marketing/pl-overview.html#funding-model">Funding Models</a> in the <i>Promoted Listings Playbook</i> for more information.</span>

> Body parameter

```json
{
  "requests": [
    {
      "inventoryReferenceId": "string",
      "inventoryReferenceType": "string"
    }
  ]
}
```

<h3 id="bulkdeleteadsbyinventoryreference-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|campaign_id|path|string|true|A unique eBay-assigned ID for an ad campaign that's generated when a campaign is created. Get a seller's campaign IDs by calling <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a>.|
|body|body|[BulkDeleteAdsByInventoryReferenceRequest](#schemabulkdeleteadsbyinventoryreferencerequest)|true|This request works with listings created via the <a href="/api-docs/sell/inventory/resources/methods">Inventory API</a>.<br /><br />The request is to delete a set of ads in bulk, as specified by a list of inventory reference IDs from the specified campaign.|
|» requests|body|[[DeleteAdsByInventoryReferenceRequest](#schemadeleteadsbyinventoryreferencerequest)]|false|A list of inventory referenceID and inventory reference type pairs that specify the set of ads to remove in bulk.|

> Example responses

> 200 Response

```json
{
  "responses": [
    {
      "adIds": [
        "string"
      ],
      "errors": [
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
      ],
      "inventoryReferenceId": "string",
      "inventoryReferenceType": "string",
      "statusCode": 0
    }
  ]
}
```

<h3 id="bulkdeleteadsbyinventoryreference-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BulkDeleteAdsByInventoryReferenceResponse](#schemabulkdeleteadsbyinventoryreferenceresponse)|
|207|Multi-Status|Multi Status|None|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not Found|None|
|409|Conflict|Conflict|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope/sell.marketing )
</aside>

## bulkDeleteAdsByListingId

<a id="opIdbulkDeleteAdsByListingId"></a>

> Code samples

```bash
curl https://api.ebay.com/ad_campaign/string/bulk_delete_ads_by_listing_id \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "requests": [
      {
        "listingId": "string"
      }
    ]
  }'
```

`POST /ad_campaign/{campaign_id}/bulk_delete_ads_by_listing_id`

This method works with listing IDs created with either the <a href="/Devzone/XML/docs/Reference/eBay/index.html" title="Trading API Reference">Trading API</a> or the <a href="/api-docs/sell/inventory/resources/methods" title="Inventory API Reference">Inventory API</a>.<br /><br />The method deletes a set of ads, as specified by a list of <b>listingID</b> values from a Promoted Listings campaign. A listing ID value is generated by eBay when a seller creates a listing with either the Trading API and Inventory API.<br /><br />Pass the <b>campaign_id</b> as a path parameter and populate the payload with the set of listing IDs that you want to delete.<br /><br />Get the campaign IDs for a seller by calling <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> and call <a href="/api-docs/sell/marketing/resources/ad/methods/getAds">getAds</a> to get a list of the seller's inventory reference IDs.<br /><br /><span class="tablenote"><b>Note:</b> This method only applies to the Cost Per Sale (CPS) funding model; it does not apply to the Cost Per Click (CPC) funding model. See <a href="/api-docs/sell/static/marketing/pl-overview.html#funding-model">Funding Models</a> in the <i>Promoted Listings Playbook</i> for more information.</span><br /><br />When using the CPC funding model, use the <a href="/api-docs/sell/marketing/resources/ad/methods/bulkUpdateAdsStatusByListingId">bulkUpdateAdsStatusByListingId</a> method to change the status of ads to ARCHIVED.

> Body parameter

```json
{
  "requests": [
    {
      "listingId": "string"
    }
  ]
}
```

<h3 id="bulkdeleteadsbylistingid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|campaign_id|path|string|true|A unique eBay-assigned ID for an ad campaign that's generated when a campaign is created. Get a seller's campaign IDs by calling <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a>.|
|body|body|[BulkDeleteAdRequest](#schemabulkdeleteadrequest)|true|This request object defines the fields for the <b>bulkDeleteAdsByListingId</b> request.|
|» requests|body|[[DeleteAdRequest](#schemadeleteadrequest)]|false|An array of the listing IDs that identify the ads to remove.|

> Example responses

> 200 Response

```json
{
  "responses": [
    {
      "adId": "string",
      "errors": [
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
      ],
      "listingId": "string",
      "statusCode": 0
    }
  ]
}
```

<h3 id="bulkdeleteadsbylistingid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BulkDeleteAdResponse](#schemabulkdeleteadresponse)|
|207|Multi-Status|Multi Status|None|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not Found|None|
|409|Conflict|Conflict|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope/sell.marketing )
</aside>

## bulkUpdateAdsBidByInventoryReference

<a id="opIdbulkUpdateAdsBidByInventoryReference"></a>

> Code samples

```bash
curl https://api.ebay.com/ad_campaign/string/bulk_update_ads_bid_by_inventory_reference \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "requests": [
      {
        "adGroupId": "string",
        "bidPercentage": "string",
        "inventoryReferenceId": "string",
        "inventoryReferenceType": "string"
      }
    ]
  }'
```

`POST /ad_campaign/{campaign_id}/bulk_update_ads_bid_by_inventory_reference`

This method works with listings created with either the <a href="/Devzone/XML/docs/Reference/eBay/index.html" title="Trading API Reference">Trading API</a> or the <a href="/api-docs/sell/inventory/resources/methods" title="Inventory API Reference">Inventory API</a>.  <p>The method updates the <b>bidPercentage</b> values for a set of ads associated with the specified campaign.</p>  <p>Specify the <b>campaign_id</b> as a path parameter and supply a set of listing IDs with their associated updated <b>bidPercentage</b> values in the request body. An eBay listing ID is generated when a listing is created with the Trading API.</p>  <p>Get the campaign IDs for a seller by calling <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> and call <a href="/api-docs/sell/marketing/resources/ad/methods/getAds">getAds</a> to get a list of the seller's inventory reference IDs.</p><span class="tablenote"><b>Note:</b> This method only applies to the Cost Per Sale (CPS) funding model; it does not apply to the Cost Per Click (CPC) funding model. See <a href="/api-docs/sell/static/marketing/pl-overview.html#funding-model">Funding Models</a> in the <i>Promoted Listings Playbook</i> for more information.</span>

> Body parameter

```json
{
  "requests": [
    {
      "adGroupId": "string",
      "bidPercentage": "string",
      "inventoryReferenceId": "string",
      "inventoryReferenceType": "string"
    }
  ]
}
```

<h3 id="bulkupdateadsbidbyinventoryreference-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|campaign_id|path|string|true|A unique eBay-assigned ID for an ad campaign that's generated when a campaign is created. Get a seller's campaign IDs by calling <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a>.|
|body|body|[BulkCreateAdsByInventoryReferenceRequest](#schemabulkcreateadsbyinventoryreferencerequest)|true|This request object defines the fields for the <b>BulkCreateAdsByInventoryReference</b> request.|
|» requests|body|[[CreateAdsByInventoryReferenceRequest](#schemacreateadsbyinventoryreferencerequest)]|false|A list of inventory reference ID and inventory reference type pairs, and the bid percentage, which the call uses to create ads in bulk.|

> Example responses

> 200 Response

```json
{
  "responses": [
    {
      "ads": [
        {
          "adId": "string",
          "href": "string"
        }
      ],
      "errors": [
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
      ],
      "inventoryReferenceId": "string",
      "inventoryReferenceType": "string",
      "statusCode": 0
    }
  ]
}
```

<h3 id="bulkupdateadsbidbyinventoryreference-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BulkUpdateAdsByInventoryReferenceResponse](#schemabulkupdateadsbyinventoryreferenceresponse)|
|207|Multi-Status|Multi Status|None|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not Found|None|
|409|Conflict|Conflict|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope/sell.marketing )
</aside>

## bulkUpdateAdsBidByListingId

<a id="opIdbulkUpdateAdsBidByListingId"></a>

> Code samples

```bash
curl https://api.ebay.com/ad_campaign/string/bulk_update_ads_bid_by_listing_id \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "requests": [
      {
        "adGroupId": "string",
        "bidPercentage": "string",
        "listingId": "string"
      }
    ]
  }'
```

`POST /ad_campaign/{campaign_id}/bulk_update_ads_bid_by_listing_id`

This method works with listings created with either the <a href="/Devzone/XML/docs/Reference/eBay/index.html" title="Trading API Reference">Trading API</a> or the <a href="/api-docs/sell/inventory/resources/methods" title="Inventory API Reference">Inventory API</a>.  <p>The method updates the <b>bidPercentage</b> values for a set of ads associated with the specified campaign.</p>  <p>Specify the <b>campaign_id</b> as a path parameter and supply a set of listing IDs with their associated updated <b>bidPercentage</b> values in the request body. An eBay listing ID is generated when a listing is created with the Trading API.</p>  <p>Get the campaign IDs for a seller by calling <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> and call <a href="/api-docs/sell/marketing/resources/ad/methods/getAds">getAds</a> to get a list of the seller's inventory reference IDs.</p><span class="tablenote"><b>Note:</b> This method only applies to the Cost Per Sale (CPS) funding model; it does not apply to the Cost Per Click (CPC) funding model. See <a href="/api-docs/sell/static/marketing/pl-overview.html#funding-model">Funding Models</a> in the <i>Promoted Listings Playbook</i> for more information.</span>

> Body parameter

```json
{
  "requests": [
    {
      "adGroupId": "string",
      "bidPercentage": "string",
      "listingId": "string"
    }
  ]
}
```

<h3 id="bulkupdateadsbidbylistingid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|campaign_id|path|string|true|A unique eBay-assigned ID for an ad campaign that's generated when a campaign is created. Get a seller's campaign IDs by calling <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a>.|
|body|body|[BulkCreateAdRequest](#schemabulkcreateadrequest)|true|This request object defines the fields for the <b>BulkCreateAdsByListingId</b> request.|
|» requests|body|[[CreateAdRequest](#schemacreateadrequest)]|false|An array of listing IDs and their associated bid percentages, which the request uses to create ads in bulk. This request accepts both listing IDs, as generated by the Inventory API, and an item IDs, as used in the eBay Traditional API set (e.g., the Trading and Finding APIs).  <br><br><b>Maximum: </b> 500 IDs per call|

> Example responses

> 200 Response

```json
{
  "responses": [
    {
      "adId": "string",
      "errors": [
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
      ],
      "href": "string",
      "listingId": "string",
      "statusCode": 0
    }
  ]
}
```

<h3 id="bulkupdateadsbidbylistingid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BulkAdUpdateResponse](#schemabulkadupdateresponse)|
|207|Multi-Status|Multi Status|None|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not Found|None|
|409|Conflict|Business error|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope/sell.marketing )
</aside>

## bulkUpdateAdsStatus

<a id="opIdbulkUpdateAdsStatus"></a>

> Code samples

```bash
curl https://api.ebay.com/ad_campaign/string/bulk_update_ads_status \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "requests": [
      {
        "adId": "string",
        "adStatus": "string"
      }
    ]
  }'
```

`POST /ad_campaign/{campaign_id}/bulk_update_ads_status`

<span class="tablenote"><b>Note:</b> This method is only available for select partners who have been approved for the eBay Promoted Listings Advanced (PLA) program. For information about how to request access to this program, refer to <a href="/api-docs/sell/static/marketing/pl-verify-eligibility.html#access-requests " target="_blank "> Promoted Listings Advanced Access Requests</a> in the Promoted Listings Playbook. To determine if a seller qualifies for PLA, use the <a href="/api-docs/sell/account/resources/advertising_eligibility/methods/getAdvertisingEligibility " target="_blank ">getAdvertisingEligibility</a> method in Account API.</span><br />This method works with listings created with either the <a href= "/Devzone/XML/docs/Reference/eBay/index.html">Trading API</a> or the <a href="/api-docs/sell/inventory/resources/methods">Inventory API</a>.<br /><br />This method updates the status of ads in bulk.<br /><br />Specify the <b>campaign_id</b> you want to update as a URI parameter, and configure the <b>adGroupStatus</b> in the request payload.

> Body parameter

```json
{
  "requests": [
    {
      "adId": "string",
      "adStatus": "string"
    }
  ]
}
```

<h3 id="bulkupdateadsstatus-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|campaign_id|path|string|true|A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created.<br /><br /><span class="tablenote"><b>Note:</b> You can retrieve the campaign IDs for a specified seller using the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method.</span>|
|body|body|[BulkUpdateAdStatusRequest](#schemabulkupdateadstatusrequest)|true|The bulk request to update the ads.|
|» requests|body|[[UpdateAdStatusRequest](#schemaupdateadstatusrequest)]|false|An array of listing IDs and bid percentages.|

> Example responses

> 200 Response

```json
{
  "responses": [
    {
      "adId": "string",
      "errors": [
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
      ],
      "href": "string",
      "statusCode": 0
    }
  ]
}
```

<h3 id="bulkupdateadsstatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BulkAdUpdateStatusResponse](#schemabulkadupdatestatusresponse)|
|207|Multi-Status|Multi Status|None|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not Found|None|
|409|Conflict|Conflict|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope/sell.marketing )
</aside>

## bulkUpdateAdsStatusByListingId

<a id="opIdbulkUpdateAdsStatusByListingId"></a>

> Code samples

```bash
curl https://api.ebay.com/ad_campaign/string/bulk_update_ads_status_by_listing_id \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "requests": [
      {
        "adGroupId": "string",
        "adStatus": "string",
        "listingId": "string"
      }
    ]
  }'
```

`POST /ad_campaign/{campaign_id}/bulk_update_ads_status_by_listing_id`

<span class="tablenote"><b>Note:</b> This method is only available for select partners who have been approved for the eBay Promoted Listings Advanced (PLA) program. For information about how to request access to this program, refer to <a href="/api-docs/sell/static/marketing/pl-verify-eligibility.html#access-requests " target="_blank "> Promoted Listings Advanced Access Requests</a> in the Promoted Listings Playbook. To determine if a seller qualifies for PLA, use the <a href="/api-docs/sell/account/resources/advertising_eligibility/methods/getAdvertisingEligibility " target="_blank ">getAdvertisingEligibility</a> method in Account API.</span><br />This method works with listings created with either the <a href="/Devzone/XML/docs/Reference/eBay/index.html">Trading API</a> or the <a href="/api-docs/sell/inventory/resources/methods">Inventory API</a>.<br /><br />The method updates the status of ads in bulk, based on listing ID values.<br /><br />Specify the <b>campaign_id</b> as a path parameter and supply a set of listing IDs with their updated <b>adStatus</b> values in the request body. An eBay listing ID is generated when a listing is created with the Trading API.<br /><br />Get the campaign IDs for a seller by calling <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> and call <a href="/api-docs/sell/marketing/resources/ad/methods/getAds">getAds</a> to retrieve a list of seller inventory reference IDs.

> Body parameter

```json
{
  "requests": [
    {
      "adGroupId": "string",
      "adStatus": "string",
      "listingId": "string"
    }
  ]
}
```

<h3 id="bulkupdateadsstatusbylistingid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|campaign_id|path|string|true|A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created.<br /><br /><span class="tablenote"><b>Note:</b> You can retrieve the campaign IDs for a specified seller using the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method.</span>|
|body|body|[BulkUpdateAdStatusByListingIdRequest](#schemabulkupdateadstatusbylistingidrequest)|true|The bulk request to update ads.|
|» requests|body|[[UpdateAdStatusByListingIdRequest](#schemaupdateadstatusbylistingidrequest)]|false|An array of listing IDs and bid percentages.|

> Example responses

> 200 Response

```json
{
  "responses": [
    {
      "adGroupId": "string",
      "errors": [
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
      ],
      "href": "string",
      "listingId": "string",
      "statusCode": 0
    }
  ]
}
```

<h3 id="bulkupdateadsstatusbylistingid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BulkAdUpdateStatusByListingIdResponse](#schemabulkadupdatestatusbylistingidresponse)|
|207|Multi-Status|Multi Status|None|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not Found|None|
|409|Conflict|Conflict|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope/sell.marketing )
</aside>

## createAdsByInventoryReference

<a id="opIdcreateAdsByInventoryReference"></a>

> Code samples

```bash
curl https://api.ebay.com/ad_campaign/string/create_ads_by_inventory_reference \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "adGroupId": "string",
    "bidPercentage": "string",
    "inventoryReferenceId": "string",
    "inventoryReferenceType": "string"
  }'
```

`POST /ad_campaign/{campaign_id}/create_ads_by_inventory_reference`

This method adds a listing that is managed with the <a href="/api-docs/sell/inventory/resources/methods" title="Inventory API Reference">Inventory API</a> to an existing Promoted Listings campaign.<br /><br />For Promoted Listings Standard (PLS) campaigns using the Cost Per Sale (CPS) funding model, an ad may be directly created for the listing.<br /><br />For each listing specified in the request, this method:<br /><ul><li>Creates an ad for the listing.</li> <li>Sets the bid percentage (also known as the <i>ad rate</i>) for the ads created.</li> <li>Associates the created ad with the specified campaign.</li></ul><br />To create an ad for a listing, specify its <b>inventoryReferenceId</b> and <b>inventoryReferenceType</b>, plus the <b>bidPercentage</b> for the ad in the payload of the request. Specify the campaign to associate the ad with using the <b>campaign_id</b> path parameter.<br /><br /><span class="tablenote"><b>Note:</b> This method only applies to the Cost Per Sale (CPS) funding model; it does not apply to the Cost Per Click (CPC) funding model. See <a href="/api-docs/sell/static/marketing/pl-overview.html#funding-model">Funding Models</a> in the <i>Promoted Listings Playbook</i> for more information.</span><br /><br />Use <a href="/api-docs/sell/marketing/resources/campaign/methods/createCampaign">createCampaign</a> to create a new campaign and use <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> to get a list of existing campaigns.

> Body parameter

```json
{
  "adGroupId": "string",
  "bidPercentage": "string",
  "inventoryReferenceId": "string",
  "inventoryReferenceType": "string"
}
```

<h3 id="createadsbyinventoryreference-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|campaign_id|path|string|true|A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created.<br /><br /><span class="tablenote"><b>Note:</b> You can retrieve the campaign IDs for a specified seller using the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method.</span>|
|body|body|[CreateAdsByInventoryReferenceRequest](#schemacreateadsbyinventoryreferencerequest)|true|This request object defines the fields used in the <b>createAdsByInventoryReference</b> request.|
|» adGroupId|body|string|false|<span class="tablenote"><b>Note:</b> This field is not currently in use. Ad groups are only applicable to Promoted Listings Advanced (PLA) ad campaigns that use the Cost Per Click (CPC) funding model. See <a href="/api-docs/sell/static/marketing/pl-overview.html#funding-model">Funding Models</a> in the <i>Promoted Listings Playbook</i> for more information.</span>|
|» bidPercentage|body|string|false|The user-defined <b>bid percentage</b> (also known as the <i>ad rate</i>) sets the level that eBay increases the visibility in search results for the associated listing. The higher the <b>bidPercentage</b> value, the more eBay promotes the listing.<br /><br /><i>Required if</i> the campaign's funding model is Cost Per Sale (CPS).<br /><br />The value specified here is also used to calculate the Promoted Listings fee. This percentage value is multiplied by the final sales price to determine the fee.<br /><br />The Promoted Listings fee is determined at the time the transaction completes and the seller is assessed the fee only when an item sells through a Promoted Listings ad campaign.<br /><br />The <b>bidPercentage</b> is a single precision value that is guided by the following rules: <ul><li>These values are <b>valid</b>:<br>&nbsp;&nbsp;&nbsp;<code>4.1</code>, &nbsp;&nbsp;&nbsp;<code>5.0</code>,&nbsp;&nbsp;&nbsp;<code>5.5</code>, ...</li>  <li>These values are <b>not valid</b>:<br /> &nbsp;&nbsp;&nbsp;<code>0.01</code>, &nbsp;&nbsp;&nbsp;<code>10.75</code>, &nbsp;&nbsp;&nbsp;<code>99.99</code>,<br /> &nbsp;&nbsp;&nbsp;and so on.</li></ul>This is default bid percentage for the campaigns using the Cost Per Sale (CPS) funding model, and this value will be overridden by any ads in the campaign that have their own set bid percentages.<br /><br />If a bid percentage is not provided for an ad, eBay uses the default bid percentage of the associated campaign.<br /><br /><b>Minimum value:</b> 2.0 <br><b>Maximum value:</b> 100.0|
|» inventoryReferenceId|body|string|false|An ID that identifies a single-item listing or multiple-variation listing that is managed with the <a href="/api-docs/sell/inventory/resources/methods" title="Inventory API Reference">Inventory API</a>. <p>The <i>inventory reference ID</i> is a seller-defined value that can be either an <b>SKU</b> for a single-item listing or an <b>inventoryItemGroupKey</b> for a multiple-value listing.</p>  <p>An <i>inventoryItemGroupKey</i> is a value that the seller defines to indicate a listing that's the parent of an inventory item group (a multiple-variation listing, such as a listing for a shirt that's available in multiple sizes and colors).</p>  <p>You must always specify both an <b>inventoryReferenceId</b> and an <b>inventoryReferenceType</b> to indicate an item that's managed with the Inventory API.</p>|
|» inventoryReferenceType|body|string|false|Indicates the type of item the <b>inventoryReferenceId</b> references. The item can be either an <code>INVENTORY_ITEM</code> or <code>INVENTORY_ITEM_GROUP</code>. <p>You must always pair an <b>inventoryReferenceId</b> with and <b>inventoryReferenceType</b>.</p> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:InventoryReferenceTypeEnum'>eBay API documentation</a>|

> Example responses

> 201 Response

```json
{
  "ads": [
    {
      "adId": "string",
      "href": "string"
    }
  ]
}
```

<h3 id="createadsbyinventoryreference-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|[AdReferences](#schemaadreferences)|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not Found|None|
|409|Conflict|Conflict|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope/sell.marketing )
</aside>

## deleteAdsByInventoryReference

<a id="opIddeleteAdsByInventoryReference"></a>

> Code samples

```bash
curl https://api.ebay.com/ad_campaign/string/delete_ads_by_inventory_reference \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "inventoryReferenceId": "string",
    "inventoryReferenceType": "string"
  }'
```

`POST /ad_campaign/{campaign_id}/delete_ads_by_inventory_reference`

This method works with listings that are managed with the <a href="/api-docs/sell/inventory/resources/methods" title="Inventory API Reference">Inventory API</a>.  <p>The method deletes ads using a list of seller-defined inventory reference IDs, used with the Inventory API, that are associated with the specified campaign ID.</p> <p>Specify the campaign ID (as a path parameter) and a list of <b>inventoryReferenceId</b> and <b>inventoryReferenceType</b> pairs to be deleted.</p>  <p>Call <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> to get a list of the seller's current campaign IDs.</p><span class="tablenote"><b>Note:</b> This method only applies to the Cost Per Sale (CPS) funding model; it does not apply to the Cost Per Click (CPC) funding model. See <a href="/api-docs/sell/static/marketing/pl-overview.html#funding-model">Funding Models</a> in the <i>Promoted Listings Playbook</i> for more information.</span><br /><br />When using the CPC funding model, use the bulkUpdateAdsStatusByInventoryReference method to change the status of ads to ARCHIVED.

> Body parameter

```json
{
  "inventoryReferenceId": "string",
  "inventoryReferenceType": "string"
}
```

<h3 id="deleteadsbyinventoryreference-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|campaign_id|path|string|true|A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created.<br /><br /><span class="tablenote"><b>Note:</b> You can retrieve the campaign IDs for a specified seller using the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method.</span>|
|body|body|[DeleteAdsByInventoryReferenceRequest](#schemadeleteadsbyinventoryreferencerequest)|true|This request object defines the fields for the <b>deleteAdsByInventoryReference</b> request.|
|» inventoryReferenceId|body|string|false|The inventory reference ID is a seller-defined SKU value for a single-item listing, or a seller-defined identifier for an inventory item group. Both of these values are defined when using the Inventory API, and an inventory item group is used to create a multiple-variation listing.|
|» inventoryReferenceType|body|string|false|The enumeration value passed into this field indicates the type of value used for the corresponding <b>inventoryReferenceId</b> value. The enumeration value used here will either be <code>INVENTORY_ITEM</code> (to delete the ad for a single SKU listing) or <code>INVENTORY_ITEM_GROUP</code> (to delete the ad for a multiple-variation listing). For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:InventoryReferenceTypeEnum'>eBay API documentation</a>|

> Example responses

> 200 Response

```json
{
  "adIds": [
    "string"
  ]
}
```

<h3 id="deleteadsbyinventoryreference-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AdIds](#schemaadids)|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not Found|None|
|409|Conflict|Conflict|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope/sell.marketing )
</aside>

## getAdsByInventoryReference

<a id="opIdgetAdsByInventoryReference"></a>

> Code samples

```bash
curl 'https://api.ebay.com/ad_campaign/string/get_ads_by_inventory_reference?inventory_reference_id=string&inventory_reference_type=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /ad_campaign/{campaign_id}/get_ads_by_inventory_reference`

This method retrieves Promoted Listings ads associated with listings that are managed with the <a href="/api-docs/sell/inventory/resources/methods" title="Inventory API Reference">Inventory API</a> from the specified campaign.<br /><br />Supply the <b>campaign_id</b> as a path parameter and use query parameters to specify the <b>inventory_reference_id</b> and <b>inventory_reference_type</b> pairs.<br /><br />In the Inventory API, an <i>inventory reference ID</i> is either a seller-defined <b>SKU</b> value or an <b>inventoryItemGroupKey</b> (a seller-defined ID for an inventory item group, which is an entity that's used in the Inventory API to create a multiple-variation listing). To indicate a listing managed by the Inventory API, you must always specify both an <b>inventory_reference_id</b> and the associated <b>inventory_reference_type</b>.<br /><br />Call <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> to retrieve all of the seller's the current campaign IDs.<br /><br /><span class="tablenote"><b>Note:</b> This method only applies to the Cost Per Sale (CPS) funding model; it does not apply to the Cost Per Click (CPC) funding model. See <a href="/api-docs/sell/static/marketing/pl-overview.html#funding-model">Funding Models</a> in the <i>Promoted Listings Playbook</i> for more information.</span>

<h3 id="getadsbyinventoryreference-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|campaign_id|path|string|true|A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created.<br /><br /><span class="tablenote"><b>Note:</b> You can retrieve the campaign IDs for a specified seller using the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method.</span>|
|inventory_reference_id|query|string|true|The inventory reference ID associated with the ad you want returned. A seller's inventory reference ID is the ID of either a listing or the ID of an inventory item group (the parent of a multi-variation listing, such as a shirt that is available in multiple sizes and colors). You must always supply in both an <b>inventory_reference_id</b> and an <b>inventory_reference_type</b>.|
|inventory_reference_type|query|string|true|The type of the inventory reference ID. Set this value to either <code>INVENTORY_ITEM</CODE> (a single listing) or <code>INVENTORY_ITEM_GROUP</CODE> (a multi-variation listing). You must always pass in both an <b>inventory_reference_id</b> and an <b>inventory_reference_type</b>. |

> Example responses

> 200 Response

```json
{
  "ads": [
    {
      "adGroupId": "string",
      "adId": "string",
      "adStatus": "string",
      "alerts": [
        {
          "alertType": "string",
          "details": [
            {
              "aspect": {
                "key": "string",
                "value": "string"
              },
              "dimension": {
                "key": "string",
                "value": "string"
              }
            }
          ]
        }
      ],
      "bidPercentage": "string",
      "inventoryReferenceId": "string",
      "inventoryReferenceType": "string",
      "listingId": "string"
    }
  ]
}
```

<h3 id="getadsbyinventoryreference-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Ads](#schemaads)|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not Found|None|
|409|Conflict|Business error|None|
|500|Internal Server Error|Internal Server error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope/sell.marketing.readonly https://api.ebay.com/oauth/api_scope/sell.marketing )
</aside>

<h1 id="marketing-api-adgroup">ad_group</h1>

## getAdGroups

<a id="opIdgetAdGroups"></a>

> Code samples

```bash
curl https://api.ebay.com/ad_campaign/string/ad_group \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /ad_campaign/{campaign_id}/ad_group`

<span class="tablenote"><b>Note:</b> This method is only available for select partners who have been approved for the eBay Promoted Listings Advanced (PLA) program. For information about how to request access to this program, refer to <a href="/api-docs/sell/static/marketing/pl-verify-eligibility.html#access-requests " target="_blank "> Promoted Listings Advanced Access Requests</a> in the Promoted Listings Playbook. To determine if a seller qualifies for PLA, use the <a href="/api-docs/sell/account/resources/advertising_eligibility/methods/getAdvertisingEligibility " target="_blank ">getAdvertisingEligibility</a> method in Account API.</span><br />This method retrieves ad groups for the specified campaigns.<br /><br />Each campaign can only have <b>one</b> ad group.<br /><br />In the request, supply the <b>campaign_ids</b> as path parameters.<br /><br />Call <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> to retrieve a list of the current campaign IDs for a seller.

<h3 id="getadgroups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ad_group_status|query|string|false|A comma-separated list of ad group statuses. The results will be filtered to only include the given statuses of the ad group.<br /><br />The results might not include these ad groups if other search conditions exclude them.|
|campaign_id|path|string|true|A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created.<br /><br /><span class="tablenote"><b>Note:</b> You can retrieve the campaign IDs for a specified seller using the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method.</span>|
|limit|query|string|false|The number of results, from the current result set, to be returned in a single page.|
|offset|query|string|false|The number of results that will be skipped in the result set. This is used with the <b>limit</b> field to control the pagination of the output.<br /><br />For example, if the <b>offset</b> is set to <code>0</code> and the <b>limit</b> is set to <code>10</code>, the method will retrieve items 1 through 10 from the list of items returned. If the <b>offset</b> is set to <code>10</code> and the <b>limit</b> is set to <code>10</code>, the method will retrieve items 11 through 20 from the list of items returned.<br><br><b>Default</b>: <code>0</code>|

> Example responses

> 200 Response

```json
{
  "adGroups": [
    {
      "adGroupId": "string",
      "adGroupStatus": "string",
      "defaultBid": {
        "currency": "string",
        "value": "string"
      },
      "name": "string"
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

<h3 id="getadgroups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AdGroupPagedCollectionResponse](#schemaadgrouppagedcollectionresponse)|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not Found|None|
|409|Conflict|Business error|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope/sell.marketing.readonly https://api.ebay.com/oauth/api_scope/sell.marketing )
</aside>

## createAdGroup

<a id="opIdcreateAdGroup"></a>

> Code samples

```bash
curl https://api.ebay.com/ad_campaign/string/ad_group \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "defaultBid": {
      "currency": "string",
      "value": "string"
    },
    "name": "string"
  }'
```

`POST /ad_campaign/{campaign_id}/ad_group`

<span class="tablenote"><b>Note:</b> This method is only available for select partners who have been approved for the eBay Promoted Listings Advanced (PLA) program. For information about how to request access to this program, refer to <a href="/api-docs/sell/static/marketing/pl-verify-eligibility.html#access-requests " target="_blank "> Promoted Listings Advanced Access Requests</a> in the Promoted Listings Playbook. To determine if a seller qualifies for PLA, use the <a href="/api-docs/sell/account/resources/advertising_eligibility/methods/getAdvertisingEligibility " target="_blank ">getAdvertisingEligibility</a> method in Account API.</span><br />This method adds an ad group to an existing PLA campaign that uses the Cost Per Click (CPC) funding model.<br /><br />To create an ad group for a campaign, specify the <b>defaultBid</b> for the ad group in the payload of the request. Then specify the campaign to which the ad group should be associated using the <b>campaign_id</b> path parameter.<br /><br />Each campaign can have one or more associated ad groups.

> Body parameter

```json
{
  "defaultBid": {
    "currency": "string",
    "value": "string"
  },
  "name": "string"
}
```

<h3 id="createadgroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|campaign_id|path|string|true|A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created.<br /><br /><span class="tablenote"><b>Note:</b> You can retrieve the campaign IDs for a specified seller using the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method.</span>|
|body|body|[CreateAdGroupRequest](#schemacreateadgrouprequest)|true|This type defines the fields for the <b>createAdGroup</b> request.|
|» defaultBid|body|[Amount](#schemaamount)|false|A bid amount that applies to all of the keywords in an ad group that do not have individual bids.|
|» name|body|string|false|The seller-defined name of the ad group.|

> Example responses

> 201 Response

```json
{}
```

<h3 id="createadgroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|Inline|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not Found|None|
|409|Conflict|Business error|None|
|500|Internal Server Error|Internal Server error|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope/sell.marketing )
</aside>

## getAdGroup

<a id="opIdgetAdGroup"></a>

> Code samples

```bash
curl https://api.ebay.com/ad_campaign/string/ad_group/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /ad_campaign/{campaign_id}/ad_group/{ad_group_id}`

<span class="tablenote"><b>Note:</b> This method is only available for select partners who have been approved for the eBay Promoted Listings Advanced (PLA) program. For information about how to request access to this program, refer to <a href="/api-docs/sell/static/marketing/pl-verify-eligibility.html#access-requests " target="_blank "> Promoted Listings Advanced Access Requests</a> in the Promoted Listings Playbook. To determine if a seller qualifies for PLA, use the <a href="/api-docs/sell/account/resources/advertising_eligibility/methods/getAdvertisingEligibility " target="_blank ">getAdvertisingEligibility</a> method in Account API.</span><br />This method retrieves the details of a specified ad group, such as the ad group’s default bid and status.<br /><br />In the request, specify the <b>campaign_id</b> and <b>ad_group_id</b> as path parameters.<br /><br />Call <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> to retrieve a list of the current campaign IDs for a seller and call <a href="/api-docs/sell/marketing/resources/adgroup/methods/getAdGroups">getAdGroups</a> for the ad group ID of the ad group you wish to retrieve.

<h3 id="getadgroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ad_group_id|path|string|true|The ID of the ad group that shall be retrieved.|
|campaign_id|path|string|true|A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created.<br /><br /><span class="tablenote"><b>Note:</b> You can retrieve the campaign IDs for a specified seller using the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method.</span>|

> Example responses

> 200 Response

```json
{
  "adGroupId": "string",
  "adGroupStatus": "string",
  "defaultBid": {
    "currency": "string",
    "value": "string"
  },
  "name": "string"
}
```

<h3 id="getadgroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AdGroup](#schemaadgroup)|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not Found|None|
|409|Conflict|Business error|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope/sell.marketing.readonly https://api.ebay.com/oauth/api_scope/sell.marketing )
</aside>

## updateAdGroup

<a id="opIdupdateAdGroup"></a>

> Code samples

```bash
curl https://api.ebay.com/ad_campaign/string/ad_group/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "adGroupStatus": "string",
    "defaultBid": {
      "currency": "string",
      "value": "string"
    },
    "name": "string"
  }'
```

`PUT /ad_campaign/{campaign_id}/ad_group/{ad_group_id}`

<span class="tablenote"><b>Note:</b> This method is only available for select partners who have been approved for the eBay Promoted Listings Advanced (PLA) program. For information about how to request access to this program, refer to <a href="/api-docs/sell/static/marketing/pl-verify-eligibility.html#access-requests " target="_blank "> Promoted Listings Advanced Access Requests</a> in the Promoted Listings Playbook. To determine if a seller qualifies for PLA, use the <a href="/api-docs/sell/account/resources/advertising_eligibility/methods/getAdvertisingEligibility " target="_blank ">getAdvertisingEligibility</a> method in Account API.</span><br />This method updates the ad group associated with a campaign.<br /><br />With this method, you can modify the <b>default bid</b> for the ad group, change the state of the ad group, or change the name of the ad group. Pass the <b>ad_group_id</b> you want to update as a URI parameter, and configure the <b>adGroupStatus</b> and <b>defaultBid</b> in the request payload.<br /><br />Call <a href="/api-docs/sell/marketing/resources/adgroup/methods/getAdGroup">getAdGroup</a> to retrieve the current default bid and status of the ad group that you would like to update.

> Body parameter

```json
{
  "adGroupStatus": "string",
  "defaultBid": {
    "currency": "string",
    "value": "string"
  },
  "name": "string"
}
```

<h3 id="updateadgroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ad_group_id|path|string|true|The ID of the ad group that shall be updated.|
|campaign_id|path|string|true|A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created.<br /><br /><span class="tablenote"><b>Note:</b> You can retrieve the campaign IDs for a specified seller using the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method.</span>|
|body|body|[UpdateAdGroupRequest](#schemaupdateadgrouprequest)|true|This type defines the fields for the <b>UpdateAdGroup</b> request.|
|» adGroupStatus|body|string|false|An enumeration value representing the current status of the ad group.<p>If the status of the ad is currently <code>ACTIVE</code>, you can change status to <code>PAUSED</code> or <code>ARCHIVED</code>. If ad group is currently in <code>PAUSED</code> status, you can change the status back to <code>ACTIVE</code>. Ads that are currently in <code>ARCHIVED</code> status cannot be made <code>ACTIVE</code> again.<br /><br /><b>Valid Values:</b><ul><li><code>ACTIVE</code></li><li><code>PAUSED</code></li><li><code>ARCHIVED</code></li></ul> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:AdGroupStatusEnum'>eBay API documentation</a>|
|» defaultBid|body|[Amount](#schemaamount)|false|A bid amount that applies to all of the keywords in an ad group that do not have individual bids.|
|» name|body|string|false|The updated name for the specified ad group.|

<h3 id="updateadgroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not Found|None|
|409|Conflict|Business error|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope/sell.marketing )
</aside>

## suggestBids

<a id="opIdsuggestBids"></a>

> Code samples

```bash
curl https://api.ebay.com/ad_campaign/string/ad_group/string/suggest_bids \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "keywords": [
      {
        "keywordText": "string",
        "matchType": "string"
      }
    ]
  }'
```

`POST /ad_campaign/{campaign_id}/ad_group/{ad_group_id}/suggest_bids`

<span class="tablenote"><b>Note:</b> This method is only available for select partners who have been approved for the eBay Promoted Listings Advanced (PLA) program. For information about how to request access to this program, refer to <a href="/api-docs/sell/static/marketing/pl-verify-eligibility.html#access-requests " target="_blank "> Promoted Listings Advanced Access Requests</a> in the Promoted Listings Playbook. To determine if a seller qualifies for PLA, use the <a href="/api-docs/sell/account/resources/advertising_eligibility/methods/getAdvertisingEligibility " target="_blank ">getAdvertisingEligibility</a> method in Account API.</span><br />This method allows sellers to retrieve the suggested bids for input keywords and match type.

> Body parameter

```json
{
  "keywords": [
    {
      "keywordText": "string",
      "matchType": "string"
    }
  ]
}
```

<h3 id="suggestbids-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ad_group_id|path|string|true|The ID of the ad group containing the keywords for which the bid suggestions will be provided.|
|campaign_id|path|string|true|A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created.<br /><br /><span class="tablenote"><b>Note:</b> You can retrieve the campaign IDs for a specified seller using the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method.</span>|
|body|body|[TargetedBidRequest](#schematargetedbidrequest)|true|The data requested to retrieve the suggested bids.|
|» keywords|body|[[KeywordRequest](#schemakeywordrequest)]|false|A list of keywords in the paginated collection. <br /><br /><b>Maximum number of keywords: </b>500|

> Example responses

> 200 Response

```json
{
  "suggestedBids": [
    {
      "keywordText": "string",
      "matchType": "string",
      "proposedBid": {
        "currency": "string",
        "rangeEnd": "string",
        "rangeStart": "string",
        "value": "string"
      }
    }
  ]
}
```

<h3 id="suggestbids-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TargetedBidsPagedCollection](#schematargetedbidspagedcollection)|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not Found|None|
|409|Conflict|Conflict|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope/sell.marketing )
</aside>

## suggestKeywords

<a id="opIdsuggestKeywords"></a>

> Code samples

```bash
curl https://api.ebay.com/ad_campaign/string/ad_group/string/suggest_keywords \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "additionalInfo": [
      "string"
    ],
    "exclusions": [
      "string"
    ],
    "listingIds": [
      "string"
    ],
    "matchType": "string"
  }'
```

`POST /ad_campaign/{campaign_id}/ad_group/{ad_group_id}/suggest_keywords`

<span class="tablenote"><b>Note:</b> This method is only available for select partners who have been approved for the eBay Promoted Listings Advanced (PLA) program. For information about how to request access to this program, refer to <a href="/api-docs/sell/static/marketing/pl-verify-eligibility.html#access-requests " target="_blank "> Promoted Listings Advanced Access Requests</a> in the Promoted Listings Playbook. To determine if a seller qualifies for PLA, use the <a href="/api-docs/sell/account/resources/advertising_eligibility/methods/getAdvertisingEligibility " target="_blank ">getAdvertisingEligibility</a> method in Account API.</span><br />This method allows sellers to retrieve a list of keyword ideas to be targeted for Promoted Listings campaigns.

> Body parameter

```json
{
  "additionalInfo": [
    "string"
  ],
  "exclusions": [
    "string"
  ],
  "listingIds": [
    "string"
  ],
  "matchType": "string"
}
```

<h3 id="suggestkeywords-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ad_group_id|path|string|true|The ID of the ad group for which the keyword suggestions will be provided.|
|campaign_id|path|string|true|A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created.<br /><br /><span class="tablenote"><b>Note:</b> You can retrieve the campaign IDs for a specified seller using the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method.</span>|
|body|body|[TargetedKeywordRequest](#schematargetedkeywordrequest)|false|The required data to retrieve suggested keywords.|
|» additionalInfo|body|[string]|false|A field used to indicate whether additional information and insight data shall be provided for suggested keywords.<br /><br /><strong>Valid Value:</strong> <code>KEYWORD_INSIGHTS</code>|
|» exclusions|body|[string]|false|A field used to indicate that the keywords already selected by sellers for the specified listing IDs should be filtered out of the response, and only new and unique keyword recommendations shall be returned.<br /><br /><strong>Valid Value:</strong> <code>ADOPTED_KEYWORDS</code>|
|» listingIds|body|[string]|false|A set of comma-separated listing IDs in the paginated collection. <br /><br /><b>Maximum number of listings requested: </b>300|
|» matchType|body|string|false|A field that defines the match type for the keyword.<br /><br /><b>Valid Values:</b><ul><li><code>BROAD</code></li><li><code>EXACT</code></li><li><code>PHRASE</code></li></ul> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:MatchTypeEnum'>eBay API documentation</a>|

> Example responses

> 200 Response

```json
{
  "suggestedKeywords": [
    {
      "additionalInfo": [
        {
          "infoType": "string",
          "metrics": [
            {
              "metricKey": "string",
              "value": "string"
            }
          ]
        }
      ],
      "keywordText": "string",
      "matchType": "string"
    }
  ]
}
```

<h3 id="suggestkeywords-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TargetedKeywordsPagedCollection](#schematargetedkeywordspagedcollection)|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not Found|None|
|409|Conflict|Business error|None|
|500|Internal Server Error|Internal Server error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope/sell.marketing )
</aside>

<h1 id="marketing-api-keyword">keyword</h1>

## bulkCreateKeyword

<a id="opIdbulkCreateKeyword"></a>

> Code samples

```bash
curl https://api.ebay.com/ad_campaign/string/bulk_create_keyword \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "requests": [
      {
        "adGroupId": "string",
        "bid": {
          "currency": "string",
          "value": "string"
        },
        "keywordText": "string",
        "matchType": "string"
      }
    ]
  }'
```

`POST /ad_campaign/{campaign_id}/bulk_create_keyword`

<span class="tablenote"><b>Note:</b> This method is only available for select partners who have been approved for the eBay Promoted Listings Advanced (PLA) program. For information about how to request access to this program, refer to <a href="/api-docs/sell/static/marketing/pl-verify-eligibility.html#access-requests " target="_blank "> Promoted Listings Advanced Access Requests</a> in the Promoted Listings Playbook. To determine if a seller qualifies for PLA, use the <a href="/api-docs/sell/account/resources/advertising_eligibility/methods/getAdvertisingEligibility " target="_blank ">getAdvertisingEligibility</a> method in Account API.</span><br />This method adds keywords, in bulk, to an existing PLA ad group in a campaign that uses the Cost Per Click (CPC) funding model.<br /><br />This method also sets the CPC rate for each keyword.<br /><br />In the request, supply the <b>campaign_id</b> as a path parameter.<br /><br />Call the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method to retrieve a list of current campaign IDs for a specified seller.

> Body parameter

```json
{
  "requests": [
    {
      "adGroupId": "string",
      "bid": {
        "currency": "string",
        "value": "string"
      },
      "keywordText": "string",
      "matchType": "string"
    }
  ]
}
```

<h3 id="bulkcreatekeyword-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|campaign_id|path|string|true|A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created.<br /><br /><span class="tablenote"><b>Note:</b> You can retrieve the campaign IDs for a specified seller using the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method.</span>|
|body|body|[BulkCreateKeywordRequest](#schemabulkcreatekeywordrequest)|true|A type that defines the fields for the bulk request to create keywords.|
|» requests|body|[[CreateKeywordRequest](#schemacreatekeywordrequest)]|false|This array is used to pass in multiple keywords for one or more ad groups that belong to a campaign that uses the Cost Per Click (CPC) funding model. Up to {max value} keywords can be created with one call.|

> Example responses

> 200 Response

```json
{
  "responses": [
    {
      "adGroupId": "string",
      "errors": [
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
      ],
      "href": "string",
      "keywordId": "string",
      "keywordText": "string",
      "matchType": "string",
      "statusCode": 0
    }
  ]
}
```

<h3 id="bulkcreatekeyword-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BulkCreateKeywordResponse](#schemabulkcreatekeywordresponse)|
|207|Multi-Status|Multi Status|None|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not Found|None|
|409|Conflict|Business error|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope/sell.marketing )
</aside>

## bulkUpdateKeyword

<a id="opIdbulkUpdateKeyword"></a>

> Code samples

```bash
curl https://api.ebay.com/ad_campaign/string/bulk_update_keyword \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "requests": [
      {
        "bid": {
          "currency": "string",
          "value": "string"
        },
        "keywordId": "string",
        "keywordStatus": "string"
      }
    ]
  }'
```

`POST /ad_campaign/{campaign_id}/bulk_update_keyword`

<span class="tablenote"><b>Note:</b> This method is only available for select partners who have been approved for the eBay Promoted Listings Advanced (PLA) program. For information about how to request access to this program, refer to <a href="/api-docs/sell/static/marketing/pl-verify-eligibility.html#access-requests " target="_blank "> Promoted Listings Advanced Access Requests</a> in the Promoted Listings Playbook. To determine if a seller qualifies for PLA, use the <a href="/api-docs/sell/account/resources/advertising_eligibility/methods/getAdvertisingEligibility " target="_blank ">getAdvertisingEligibility</a> method in Account API.</span><br />This method updates the bids and statuses of keywords, in bulk, for an existing PLA campaign.<br /><br />In the request, supply the <b>campaign_id</b> as a path parameter.<br /><br />Call the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method to retrieve a list of current campaign IDs for a specified seller.

> Body parameter

```json
{
  "requests": [
    {
      "bid": {
        "currency": "string",
        "value": "string"
      },
      "keywordId": "string",
      "keywordStatus": "string"
    }
  ]
}
```

<h3 id="bulkupdatekeyword-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|campaign_id|path|string|true|A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created.<br /><br /><span class="tablenote"><b>Note:</b> You can retrieve the campaign IDs for a specified seller using the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method.</span>|
|body|body|[BulkUpdateKeywordRequest](#schemabulkupdatekeywordrequest)|true|A type that defines the fields for the bulk request to update keywords.|
|» requests|body|[[UpdateKeywordByKeywordIdRequest](#schemaupdatekeywordbykeywordidrequest)]|false|Use this array to update the bid values and/or statuses of one or more existing keywords.|

> Example responses

> 200 Response

```json
{
  "responses": [
    {
      "errors": [
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
      ],
      "keywordId": "string",
      "statusCode": 0
    }
  ]
}
```

<h3 id="bulkupdatekeyword-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BulkUpdateKeywordResponse](#schemabulkupdatekeywordresponse)|
|207|Multi-Status|Multi Status|None|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not Found|None|
|409|Conflict|Conflict|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope/sell.marketing )
</aside>

## getKeywords

<a id="opIdgetKeywords"></a>

> Code samples

```bash
curl https://api.ebay.com/ad_campaign/string/keyword \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /ad_campaign/{campaign_id}/keyword`

<span class="tablenote"><b>Note:</b> This method is only available for select partners who have been approved for the eBay Promoted Listings Advanced (PLA) program. For information about how to request access to this program, refer to <a href="/api-docs/sell/static/marketing/pl-verify-eligibility.html#access-requests " target="_blank "> Promoted Listings Advanced Access Requests</a> in the Promoted Listings Playbook. To determine if a seller qualifies for PLA, use the <a href="/api-docs/sell/account/resources/advertising_eligibility/methods/getAdvertisingEligibility " target="_blank ">getAdvertisingEligibility</a> method in Account API.</span><br />This method can be used to retrieve all of the keywords for ad groups in PLA campaigns that use the Cost Per Click (CPC) funding model.<br /><br />In the request, specify the <b>campaign_id</b> as a path parameter. If one or more <b>ad_group_ids</b> are passed in the request body, the keywords for those ad groups will be returned. If <b>ad_group_ids</b> are not passed in the response body, the call will return all the keywords in the campaign.<br /><br />Call the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method to retrieve a list of current campaign IDs for a seller.

<h3 id="getkeywords-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ad_group_ids|query|string|false|A comma-separated list of ad group IDs. This query parameter is used if the seller wants to retrieve keywords from one or more specific ad groups. If this query parameter is not used, all keywords that are part of the CPC campaign are returned.<span class="tablenote"><b>Note:</b>You can call the <a href="/api-docs/sell/marketing/resources/adgroup/methods/getAdGroups">getAdGroups</a>  method to retrieve the ad group IDs for a seller.</span>|
|campaign_id|path|string|true|A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created.<br /><br /><span class="tablenote"><b>Note:</b> You can retrieve the campaign IDs for a specified seller using the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method.</span>|
|keyword_status|query|string|false|A comma-separated list of keyword statuses. The results will be filtered to only include the given statuses of the keyword. If none are provided, all keywords are returned.|
|limit|query|string|false|<p>Specifies the maximum number of results to return on a page in the paginated response.</p>  <b>Default: </b>10 <br><b>Maximum: </b> 500|
|offset|query|string|false|Specifies the number of results to skip in the result set before returning the first report in the paginated response.  <p>Combine <b>offset</b> with the <b>limit</b> query parameter to control the items returned in the response. For example, if you supply an <b>offset</b> of <code>0</code> and a <b>limit</b> of <code>10</code>, the first page of the response contains the first 10 items from the complete list of items retrieved by the call. If <b>offset</b> is <code>10</code> and <b>limit</b> is <code>20</code>, the first page of the response contains items 11-30 from the complete result set.</p> <p><b>Default:</b> 0</p>|

> Example responses

> 200 Response

```json
{
  "href": "string",
  "keywords": [
    {
      "adGroupId": "string",
      "bid": {
        "currency": "string",
        "value": "string"
      },
      "keywordId": "string",
      "keywordStatus": "string",
      "keywordText": "string",
      "matchType": "string"
    }
  ],
  "limit": 0,
  "next": "string",
  "offset": 0,
  "prev": "string",
  "total": 0
}
```

<h3 id="getkeywords-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[KeywordPagedCollectionResponse](#schemakeywordpagedcollectionresponse)|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not Found|None|
|409|Conflict|Business error|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope/sell.marketing.readonly https://api.ebay.com/oauth/api_scope/sell.marketing )
</aside>

## createKeyword

<a id="opIdcreateKeyword"></a>

> Code samples

```bash
curl https://api.ebay.com/ad_campaign/string/keyword \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "adGroupId": "string",
    "bid": {
      "currency": "string",
      "value": "string"
    },
    "keywordText": "string",
    "matchType": "string"
  }'
```

`POST /ad_campaign/{campaign_id}/keyword`

<span class="tablenote"><b>Note:</b> This method is only available for select partners who have been approved for the eBay Promoted Listings Advanced (PLA) program. For information about how to request access to this program, refer to <a href="/api-docs/sell/static/marketing/pl-verify-eligibility.html#access-requests " target="_blank "> Promoted Listings Advanced Access Requests</a> in the Promoted Listings Playbook. To determine if a seller qualifies for PLA, use the <a href="/api-docs/sell/account/resources/advertising_eligibility/methods/getAdvertisingEligibility " target="_blank ">getAdvertisingEligibility</a> method in Account API.</span><br />This method creates keywords using a specified campaign ID for an existing PLA campaign.<br /><br />In the request, supply the <b>campaign_id</b> as a path parameter.<br /><br />Call the <a href="/api-docs/sell/marketing/resources/campaign/methods/suggestKeywords">suggestKeywords</a> method to retrieve a list of keyword ideas to be targeted for PLA campaigns, and call the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method to retrieve a list of current campaign IDs for a seller.

> Body parameter

```json
{
  "adGroupId": "string",
  "bid": {
    "currency": "string",
    "value": "string"
  },
  "keywordText": "string",
  "matchType": "string"
}
```

<h3 id="createkeyword-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|campaign_id|path|string|true|A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created.<br /><br /><span class="tablenote"><b>Note:</b> You can retrieve the campaign IDs for a specified seller using the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method.</span>|
|body|body|[CreateKeywordRequest](#schemacreatekeywordrequest)|true|A type that defines the fields for the request to create a keyword.|
|» adGroupId|body|string|false|This adGroupId is created when an ad group is first created and associated with a campaign. This is the ad group that the corresponding keyword will be added to. This ad group must be a part of the campaign that is specified in the call URI.<br /><br /><span class="tablenote"><b>Note:</b> You can call the  <a href="/api-docs/sell/marketing/resources/adgroup/methods/getAdGroups">getAdGroups</a> method to retrieve the ad group IDs for a seller, and <a href="/api-docs/sell/marketing/resources/keywords/methods/getKeywords">getKeywords</a> to retrieve the keyword IDs for a seller's keywords.</span>|
|» bid|body|[Amount](#schemaamount)|false|This container is used to set the bid for the keyword. Each time a listing is retrieved in search results using this keyword and clicked on, the seller will be charged this amount. Each click goes toward the daily budget set up for the CPC campaign. If the bid is not provided, then the default bid associated with the ad group is used.<br /><br /><span class="tablenote"><b>Note:</b> You can call the  <a href="/api-docs/sell/marketing/resources/adgroup/methods/suggestBids">suggestBids</a> method to retrieve the suggested bids for keywords.</span>|
|» keywordText|body|string|false|Input the keyword into this field.|
|» matchType|body|string|false|A field that defines the match type for the keyword.<br /><br /><b>Valid Values:</b><ul><li><code>BROAD</code></li><li><code>EXACT</code></li><li><code>PHRASE</code></li></ul> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:MatchTypeEnum'>eBay API documentation</a>|

> Example responses

> 201 Response

```json
{}
```

<h3 id="createkeyword-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|Inline|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not Found|None|
|409|Conflict|Business error|None|
|500|Internal Server Error|Internal Server Error|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope/sell.marketing )
</aside>

## getKeyword

<a id="opIdgetKeyword"></a>

> Code samples

```bash
curl https://api.ebay.com/ad_campaign/string/keyword/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /ad_campaign/{campaign_id}/keyword/{keyword_id}`

<span class="tablenote"><b>Note:</b> This method is only available for select partners who have been approved for the eBay Promoted Listings Advanced (PLA) program. For information about how to request access to this program, refer to <a href="/api-docs/sell/static/marketing/pl-verify-eligibility.html#access-requests " target="_blank "> Promoted Listings Advanced Access Requests</a> in the Promoted Listings Playbook. To determine if a seller qualifies for PLA, use the <a href="/api-docs/sell/account/resources/advertising_eligibility/methods/getAdvertisingEligibility " target="_blank ">getAdvertisingEligibility</a> method in Account API.</span><br />This method retrieves details on a specific keyword from an ad group within a PLA campaign that uses the Cost Per Click (CPC) funding model.<br /><br />In the request, specify the <b>campaign_id</b> and <b>keyword_id</b> as path parameters.<br /><br />Call the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method to retrieve a list of current campaign IDs for a seller and call the <a href="/api-docs/sell/marketing/resources/keyword/methods/getKeywords">getKeywords</a> method to retrieve their keyword IDs.

<h3 id="getkeyword-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|campaign_id|path|string|true|A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created.<br /><br /><span class="tablenote"><b>Note:</b> You can retrieve the campaign IDs for a specified seller using the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method.</span>|
|keyword_id|path|string|true|This path parameter is used to identify the keyword to retrieve.|

> Example responses

> 200 Response

```json
{
  "adGroupId": "string",
  "bid": {
    "currency": "string",
    "value": "string"
  },
  "keywordId": "string",
  "keywordStatus": "string",
  "keywordText": "string",
  "matchType": "string"
}
```

<h3 id="getkeyword-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Keyword](#schemakeyword)|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not Found|None|
|409|Conflict|Business error|None|
|500|Internal Server Error|Internal Server error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope/sell.marketing.readonly https://api.ebay.com/oauth/api_scope/sell.marketing )
</aside>

## updateKeyword

<a id="opIdupdateKeyword"></a>

> Code samples

```bash
curl https://api.ebay.com/ad_campaign/string/keyword/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "bid": {
      "currency": "string",
      "value": "string"
    },
    "keywordStatus": "string"
  }'
```

`PUT /ad_campaign/{campaign_id}/keyword/{keyword_id}`

<span class="tablenote"><b>Note:</b> This method is only available for select partners who have been approved for the eBay Promoted Listings Advanced (PLA) program. For information about how to request access to this program, refer to <a href="/api-docs/sell/static/marketing/pl-verify-eligibility.html#access-requests " target="_blank "> Promoted Listings Advanced Access Requests</a> in the Promoted Listings Playbook. To determine if a seller qualifies for PLA, use the <a href="/api-docs/sell/account/resources/advertising_eligibility/methods/getAdvertisingEligibility " target="_blank ">getAdvertisingEligibility</a> method in Account API.</span><br />This method updates keywords using a campaign ID and keyword ID for an existing PLA campaign.<br /><br />In the request, specify the <b>campaign_id</b> and <b>keyword_id</b> as path parameters.<br /><br />Call the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method to retrieve a list of current campaign IDs for a seller and call the <a href="/api-docs/sell/marketing/resources/keyword/methods/getKeywords">getKeywords</a> method to retrieve their keyword IDs.

> Body parameter

```json
{
  "bid": {
    "currency": "string",
    "value": "string"
  },
  "keywordStatus": "string"
}
```

<h3 id="updatekeyword-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|campaign_id|path|string|true|A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created.<br /><br /><span class="tablenote"><b>Note:</b> You can retrieve the campaign IDs for a specified seller using the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method.</span>|
|keyword_id|path|string|true|A unique eBay-assigned ID that is generated when a keyword is created.|
|body|body|[UpdateKeywordRequest](#schemaupdatekeywordrequest)|true|A type that defines the fields for the request to update a keyword.|
|» bid|body|[Amount](#schemaamount)|false|This container is used to set or change the bid for the keyword. Each time a listing is retrieved in search results using this keyword and clicked on, the seller will be charged this amount. Each click goes toward the daily budget set up for the CPC campaign. If the bid is not provided, then the default bid associated with the ad group is used.|
|» keywordStatus|body|string|false|Include this field if you wish to change the status of the keyword. The status value specified here must be different than the keyword's current status. To confirm the current status of a keyword, you can use the <a href="/api-docs/sell/marketing/resources/keyword/methods/getKeyword">getKeyword</a> method.</p><p>If the status of the ad is currently <code>ACTIVE</code>, you can change status to <code>PAUSED</code> or <code>ARCHIVED</code>. If ad group is currently in <code>PAUSED</code> status, you can change the status back to <code>ACTIVE</code>. Ads that are currently in <code>ARCHIVED</code> status cannot be made <code>ACTIVE</code> again. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:KeywordStatusEnum'>eBay API documentation</a>|

<h3 id="updatekeyword-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not Found|None|
|409|Conflict|Conflict|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope/sell.marketing )
</aside>

<h1 id="marketing-api-adreport">ad_report</h1>

## getReport

<a id="opIdgetReport"></a>

> Code samples

```bash
curl https://api.ebay.com/ad_report/string \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /ad_report/{report_id}`

This call downloads the report as specified by the <b>report_id</b> path parameter.  <br><br>Call <a href="/api-docs/sell/marketing/resources/ad_report_task/methods/createReportTask" title="createReportTask API docs">createReportTask</a> to schedule and generate a Promoted Listings report. All date values are returned in UTC format (<code>yyyy-MM-ddThh:mm:ss.sssZ</code>).<br/><br/><span class="tablenote"><b>Note:</b> The reporting of some data related to sales and ad-fees may require a 72-hour (<b>maximum</b>) adjustment period which is often referred to as the <i>Reconciliation Period</i>. Such adjustment periods should, on average, be minimal. However, at any given time, the <b>payments</b> tab may be used to view those amounts that have actually been charged.</span><br/><div class="msgbox_important"><p class="msgbox_importantInDiv" data-mc-autonum="&lt;b&gt;&lt;span style=&quot;color: #dd1e31;&quot; class=&quot;mcFormatColor&quot;&gt;Important! &lt;/span&gt;&lt;/b&gt;"><span class="autonumber"><span><b><span style="color: #dd1e31;" class="mcFormatColor">Important!</span></b></span></span>For <b>ad_report</b> and <b>ad_report_task</b> methods, the API call limit is subject to a per user quota. These API calls can <b>only</b> be executed a maximum of 200 times per hour for each seller/user. If the number of calls per hour exceeds this limit, any new calls will be blocked for the next hour.</p></div>

<h3 id="getreport-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|report_id|path|string|true|The unique ID of the Promoted Listings report you want to get. <p>This ID is generated by eBay when you run a report task with a call to <a href="/api-docs/sell/marketing/resources/ad_report_task/methods/createReportTask">createReportTask</a>. Get all the seller's report IDs by calling <a href="/api-docs/sell/marketing/resources/ad_report_task/methods/getReportTasks">getReportTasks</a>.</p>|

<h3 id="getreport-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope/sell.marketing )
</aside>

<h1 id="marketing-api-adreportmetadata">ad_report_metadata</h1>

## getReportMetadata

<a id="opIdgetReportMetadata"></a>

> Code samples

```bash
curl https://api.ebay.com/ad_report_metadata \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /ad_report_metadata`

This call retrieves information that details the fields used in each of the Promoted Listings reports. Use the returned information to configure the different types of Promoted Listings reports.</br></br>The request for this method does not use a payload or any URI parameters.<br/><br/><span class="tablenote"><b>Note:</b> The reporting of some data related to sales and ad-fees may require a 72-hour (<b>maximum</b>) adjustment period which is often referred to as the <i>Reconciliation Period</i>. Such adjustment periods should, on average, be minimal. However, at any given time, the <b>payments</b> tab may be used to view those amounts that have actually been charged.</span>

> Example responses

> 200 Response

```json
{
  "reportMetadata": [
    {
      "dimensionMetadata": [
        {
          "dataType": "string",
          "dimensionKey": "string",
          "dimensionKeyAnnotations": [
            {
              "annotationKey": "string",
              "dataType": "string"
            }
          ]
        }
      ],
      "maxNumberOfDimensionsToRequest": 0,
      "maxNumberOfMetricsToRequest": 0,
      "metricMetadata": [
        {
          "dataType": "string",
          "metricKey": "string"
        }
      ],
      "reportType": "string"
    }
  ]
}
```

<h3 id="getreportmetadata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ReportMetadatas](#schemareportmetadatas)|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope )
</aside>

## getReportMetadataForReportType

<a id="opIdgetReportMetadataForReportType"></a>

> Code samples

```bash
curl https://api.ebay.com/ad_report_metadata/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /ad_report_metadata/{report_type}`

This call retrieves metadata that details the fields used by a specific Promoted Listings report type. Use the <b>report_type</b> path parameter to indicate metadata to retrieve.<br/><br/>This method does not use a request payload.<br/><br/><span class="tablenote"><b>Note:</b> The reporting of some data related to sales and ad-fees may require a 72-hour (<b>maximum</b>) adjustment period which is often referred to as the <i>Reconciliation Period</i>. Such adjustment periods should, on average, be minimal. However, at any given time, the <b>payments</b> tab may be used to view those amounts that have actually been charged.</span>

<h3 id="getreportmetadataforreporttype-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|report_type|path|string|true|The name of the report type whose metadata you want to retrieve.<br /><br /><span class="tablenote"><b>Tip:</b> For details about available report types and their descriptions, refer to the <a href="/api-docs/sell/marketing/types/plr:ReportTypeEnum">ReportTypeEnum</a>.</span>|

> Example responses

> 200 Response

```json
{
  "dimensionMetadata": [
    {
      "dataType": "string",
      "dimensionKey": "string",
      "dimensionKeyAnnotations": [
        {
          "annotationKey": "string",
          "dataType": "string"
        }
      ]
    }
  ],
  "maxNumberOfDimensionsToRequest": 0,
  "maxNumberOfMetricsToRequest": 0,
  "metricMetadata": [
    {
      "dataType": "string",
      "metricKey": "string"
    }
  ],
  "reportType": "string"
}
```

<h3 id="getreportmetadataforreporttype-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ReportMetadata](#schemareportmetadata)|
|400|Bad Request|Bad Request|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope )
</aside>

<h1 id="marketing-api-adreporttask">ad_report_task</h1>

## getReportTasks

<a id="opIdgetReportTasks"></a>

> Code samples

```bash
curl https://api.ebay.com/ad_report_task \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /ad_report_task`

This method returns information on all the existing report tasks related to a seller. <p>Use the <b>report_task_statuses</b> query parameter to control which reports to return. You can paginate the result set by specifying a <b>limit</b>, which dictates how many report tasks to return on each page of the response. Use the <b>offset</b> parameter to specify how many reports to skip in the result set before returning the first result.</p><br/><div class="msgbox_important"><p class="msgbox_importantInDiv" data-mc-autonum="&lt;b&gt;&lt;span style=&quot;color: #dd1e31;&quot; class=&quot;mcFormatColor&quot;&gt;Important! &lt;/span&gt;&lt;/b&gt;"><span class="autonumber"><span><b><span style="color: #dd1e31;" class="mcFormatColor">Important!</span></b></span></span>For <b>ad_report</b> and <b>ad_report_task</b> methods, the API call limit is subject to a per user quota. These API calls can <b>only</b> be executed a maximum of 200 times per hour for each seller/user. If the number of calls per hour exceeds this limit, any new calls will be blocked for the next hour.</p></div>

<h3 id="getreporttasks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|string|false|Specifies the maximum number of report tasks to return on a page in the paginated response.  <p><b>Default:</b> 10<br><b>Maximum:</b> 500</p>|
|offset|query|string|false|Specifies the number of report tasks to skip in the result set before returning the first report in the paginated response.  <p>Combine <b>offset</b> with the <b>limit</b> query parameter to control the reports returned in the response. For example, if you supply an <b>offset</b> of <code>0</code> and a <b>limit</b> of <code>10</code>, the response contains the first 10 reports from the complete list of report tasks retrieved by the call. If <b>offset</b> is <code>10</code> and <b>limit</b> is <code>10</code>, the first page of the response contains reports 11-20 from the complete result set.</p> <b>Default:</b> 0|
|report_task_statuses|query|string|false|This parameter filters the returned report tasks by their status. Supply a comma-separated list of the report statuses you want returned. The results are filtered to include only the report statuses you specify.<br /><br /><span class="tablenote"><span style="color:#004680"><strong>Note:</strong></span> The results might not include some report tasks if other search conditions exclude them.</span><br /><br /><b>Valid values: </b> <br>&nbsp;&nbsp;&nbsp;<code>PENDING</code> <br>&nbsp;&nbsp;&nbsp;<code>SUCCESS</code> <br>&nbsp;&nbsp;&nbsp;<code>FAILED</code>|

> Example responses

> 200 Response

```json
{
  "href": "string",
  "limit": 0,
  "next": "string",
  "offset": 0,
  "prev": "string",
  "reportTasks": [
    {
      "campaignIds": [
        "string"
      ],
      "dateFrom": "string",
      "dateTo": "string",
      "dimensions": [
        {
          "annotationKeys": [
            "string"
          ],
          "dimensionKey": "string"
        }
      ],
      "fundingModels": [
        "string"
      ],
      "inventoryReferences": [
        {
          "inventoryReferenceId": "string",
          "inventoryReferenceType": "string"
        }
      ],
      "listingIds": [
        "string"
      ],
      "marketplaceId": "string",
      "metricKeys": [
        "string"
      ],
      "reportExpirationDate": "string",
      "reportFormat": "string",
      "reportHref": "string",
      "reportId": "string",
      "reportName": "string",
      "reportTaskCompletionDate": "string",
      "reportTaskCreationDate": "string",
      "reportTaskExpectedCompletionDate": "string",
      "reportTaskId": "string",
      "reportTaskStatus": "string",
      "reportTaskStatusMessage": "string",
      "reportType": "string"
    }
  ],
  "total": 0
}
```

<h3 id="getreporttasks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ReportTaskPagedCollection](#schemareporttaskpagedcollection)|
|400|Bad Request|Bad Request|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope/sell.marketing )
</aside>

## createReportTask

<a id="opIdcreateReportTask"></a>

> Code samples

```bash
curl https://api.ebay.com/ad_report_task \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "additionalRecords": [
      "string"
    ],
    "campaignIds": [
      "string"
    ],
    "dateFrom": "string",
    "dateTo": "string",
    "dimensions": [
      {
        "annotationKeys": [
          "string"
        ],
        "dimensionKey": "string"
      }
    ],
    "fundingModels": [
      "string"
    ],
    "inventoryReferences": [
      {
        "inventoryReferenceId": "string",
        "inventoryReferenceType": "string"
      }
    ],
    "listingIds": [
      "string"
    ],
    "marketplaceId": "string",
    "metricKeys": [
      "string"
    ],
    "reportFormat": "string",
    "reportType": "string"
  }'
```

`POST /ad_report_task`

<span class="tablenote"><b>Note:</b> Using multiple funding models in one report is deprecated. If multiple funding models are used, a Warning will be returned in a header. This functionality will be decommissioned on April 3, 2023. See <a href="/develop/apis/api-deprecation-status">API Deprecation Status</a> for details.</span><br /><br />This method creates a <i>report task</i>, which generates a Promoted Listings report based on the values specified in the call.<br /><br />The report is generated based on the criteria you specify, including the report type, the report's dimensions and metrics, the report's start and end dates, the listings to include in the report, and more. <i>Metrics </i>are the quantitative measurements in the report while <i>dimensions</i> specify the attributes of the data included in the reports.<br /><br />When creating a report task, you can specify the items you want included in the report. The items you specify, using either <b>listingId</b> or <b>inventoryReference</b> values, must be in a Promoted Listings campaign for them to be included in the report.<br /><br />For details on the required and optional fields for each report type, see <a href="/api-docs/sell/static/marketing/pl-reports.html">Promoted Listings reporting</a>.<br /><br />This call returns the URL to the report task in the <b>Location</b> response header, and the URL includes the report-task ID.<br /><br />Reports often take time to generate and it's common for this call to return an HTTP status of <code>202</code>, which indicates the report is being generated. Call <a href="/api-docs/sell/marketing/resources/ad_report_task/methods/getReportTasks">getReportTasks</a> (or <a href="/api-docs/sell/marketing/resources/ad_report_task/methods/getReportTask">getReportTask</a> with the report-task ID) to determine the status of a Promoted Listings report. When a report is complete, eBay sets its status to <b>SUCCESS</b> and you can download it using the URL returned in the <b>reportHref</b> field of the <b>getReportTask</b> call. Report files are tab-separated value gzip files with a file extension of <code>.tsv.gz</code>.<br/><br/><span class="tablenote"><b>Note:</b> The reporting of some data related to sales and ad-fees may require a 72-hour (<b>maximum</b>) adjustment period which is often referred to as the <i>Reconciliation Period</i>. Such adjustment periods should, on average, be minimal. However, at any given time, the <b>payments</b> tab may be used to view those amounts that have actually been charged.</span><br /><span class="tablenote"><span style="color:#004680"><strong>Note:</strong></span> This call fails if you don't submit all the required fields for the specified report type. Fields not supported by the specified report type are ignored. Call <a href="/api-docs/sell/marketing/resources/ad_report_metadata/methods/getReportMetadata">getReportMetadata</a> to retrieve a list of the fields you need to configure for each Promoted Listings report type.</span><br/><div class="msgbox_important"><p class="msgbox_importantInDiv" data-mc-autonum="&lt;b&gt;&lt;span style=&quot;color: #dd1e31;&quot; class=&quot;mcFormatColor&quot;&gt;Important! &lt;/span&gt;&lt;/b&gt;"><span class="autonumber"><span><b><span style="color: #dd1e31;" class="mcFormatColor">Important!</span></b></span></span>For <b>ad_report</b> and <b>ad_report_task</b> methods, the API call limit is subject to a per user quota. These API calls can <b>only</b> be executed a maximum of 200 times per hour for each seller/user. If the number of calls per hour exceeds this limit, any new calls will be blocked for the next hour.</p></div>

> Body parameter

```json
{
  "additionalRecords": [
    "string"
  ],
  "campaignIds": [
    "string"
  ],
  "dateFrom": "string",
  "dateTo": "string",
  "dimensions": [
    {
      "annotationKeys": [
        "string"
      ],
      "dimensionKey": "string"
    }
  ],
  "fundingModels": [
    "string"
  ],
  "inventoryReferences": [
    {
      "inventoryReferenceId": "string",
      "inventoryReferenceType": "string"
    }
  ],
  "listingIds": [
    "string"
  ],
  "marketplaceId": "string",
  "metricKeys": [
    "string"
  ],
  "reportFormat": "string",
  "reportType": "string"
}
```

<h3 id="createreporttask-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateReportTask](#schemacreatereporttask)|true|The container for the fields that define the report task.|
|» additionalRecords|body|[string]|false|A list of additional records that shall be included in the report, such as non-performing data.<br /><br /><span class="tablenote"><span style="color:#004680"><strong>Note:</strong></span> Additional records are only applicable to Promoted Listings Advanced (PLA) campaigns that use the Cost Per Click (CPC) funding model.</span><br /><b>Valid Value:</b> <code>NON_PERFORMING_DATA</code>|
|» campaignIds|body|[string]|false|A list of campaign IDs to be included in the report task. Call <b>getCampaigns</b> to get a list of the current campaign IDs for a seller.<br /><br />For Promoted Listings Standard (PLS) sellers, this field is required if the <b>reportType</b> is set to <code>CAMPAIGN_PERFORMANCE_REPORT</code> or <code>CAMPAIGN_PERFORMANCE_SUMMARY_REPORT</code>.<br /><br />For Promoted Listings Advanced (PLA) sellers, leave this request field blank to retrieve the details for all campaigns associated with your account, or specify the campaign IDs for which you would like to retrieve the campaign-specific details.<br /><br /><span class="tablenote"><span style="color:#004680"><strong>Note:</strong></span> There is a maximum data limit that cannot be exceeded when generating reports. If this threshold is exceeded, the report will fail. Refer to <a href="/api-docs/sell/static/marketing/pl-reports.html#creation">Promoted Listings reporting</a> in the Selling Integration Guide for details.</span><br /><br /><b>Maximum:</b><ul><li>25 IDs for PLS</li><li>1,000 IDs for PLA</li></ul>|
|» dateFrom|body|string|false|The date defining the start of the timespan covered by the report.<br /><br />Format the timestamp as an <a href="https://www.iso.org/iso-8601-date-and-time-format.html" title="https://www.iso.org" target="_blank">ISO 8601</a> string, which is based on the 24-hour Coordinated Universal Time (UTC) clock with local offset.<br /><br /><span class="tablenote"><span style="color:#004680"><strong>Note:</strong></span> The date specified cannot be a future date.</span><br /><br /><b>Format:</b> <code>[YYYY]-[MM]-[DD]T[hh]:[mm]:[ss].[sss]Z</code><br /><br /><b>Example:</b> <code>2021-03-15T13:00:00-07:00</code>|
|» dateTo|body|string|false|The date defining the end of the timespan covered by the report.<br /><br />As with the <b>dateFrom</b> field, format the timestamp as an <a href="https://www.iso.org/iso-8601-date-and-time-format.html" title="https://www.iso.org" target="_blank">ISO 8601</a> string.<br /><br /><span class="tablenote"><span style="color:#004680"><strong>Note:</strong></span> The date specified cannot be a future date. Additionally, the time specified must be a later time than that specified in the <b>dateFrom</b> field.</span><br /><br /><b>Format:</b> <code>[YYYY]-[MM]-[DD]T[hh]:[mm]:[ss].[sss]Z</code><br /><br /><b>Example:</b> <code>2021-03-17T13:00:00-07:00</code>|
|» dimensions|body|[[Dimension](#schemadimension)]|false|The list of the dimensions applied to the report.  <p>A dimension is an attribute to which the report data applies. For example, if you set <b>dimensionKey</b> to <code>campaign_id</code> in a Campaign Performance Report, the data will apply to the entire ad campaign. For information on the dimensions and how to specify them, see <a href="/api-docs/sell/static/marketing/pl-reports.html">Promoted Listings reporting</a>.</p>|
|» fundingModels|body|[string]|false|The funding model for the campaign that shall be included in the report.<br /><br /><span class="tablenote"><span style="color:#004680"><strong>Note:</strong></span> The default funding model for Promoted Listings reports is <code>COST_PER_SALE</code>.</span><br /><br /><span class="tablenote"><span style="color:#004680"><strong>Note:</strong></span> Multiple value support for the <b>fundingModels</b> array has been deprecated. See <a href ="/develop/apis/api-deprecation-status ">API&nbsp;Deprecation&nbsp;Status</a> for information.</span><br /><br /><b>Valid Values:</b><ul><li><code>COST_PER_SALE</code></li><li><code>COST_PER_CLICK</code></li></ul><i>Required if</i> the campaign funding model is Cost Per Click (CPC).|
|» inventoryReferences|body|[[InventoryReference](#schemainventoryreference)]|false|You can use this field to supply an array of items to include in the report if you manage your inventory with the <a href="/api-docs/sell/inventory/resources/methods">Inventory API</a>.  <br><br>This field is mutually exclusive with the <b>listingIds</b> field; if you populate this field, <i>do not</i> populate the <b>listingIds</b> field.  <br><br>An inventory reference identifies an item in your inventory using a pair of values, where the <b>inventoryReferenceId</b> can be either a seller-defined <b>SKU</b> value or an <b>inventoryItemGroupKey</b>, where an <b>inventoryItemGroupKey</b> is seller-defined ID for an inventory item group (a multiple-variation listing). <br><br>Couple the <b>inventoryReferenceId</b> with an <b>inventoryReferenceType</b> identifier to fully identify an item in your inventory.  <br><br><b>Maximum: </b> 500 items <br><br><i>Required if </i> you do not supply an array of <b>listingId</b> values or if you set <b>reportType</b> to <code>INVENTORY_PERFORMANCE_REPORT</code>.|
|» listingIds|body|[string]|false|Use this field to supply an array of listing IDs you want to include in the report.<br><br>A listing ID is the eBay listing identifier that is generated when the listing is created. This field accepts listing ID values generated with both the Inventory API and the eBay Traditional APIs, such as the Trading and Finding APIs.<br><br><span class="tablenote"><span style="color:#FF0000"><strong>Important:</strong></span> This field is mutually exclusive with the <b>inventoryReferences</b> field; if you populate this field, <i>do not</i> populate the <b>inventoryReferences</b> field.</span><br /><br />For Promoted Listings Standard (PLS) sellers, this field is required if you do not supply an array of <b>inventoryReferences</b> values or if you set the <b>reportType</b> to <code>LISTING_PERFORMANCE_REPORT</code>.<br /><br />For Promoted Listings Advanced (PLA) sellers, leave this field blank to retrieve the details for all listings associated with the specified campaign IDs (or all campaigns associated with your account, if no campaign IDs are specified), or specify the listing IDs for which you would like to retrieve the listing-specific details.<br /><br /><span class="tablenote"><span style="color:#004680"><strong>Note:</strong></span> There is a maximum data limit that cannot be exceeded when generating reports. If this threshold is exceeded, the report will fail. Refer to <a href="/api-docs/sell/static/marketing/pl-reports.html#creation">Promoted Listings reporting</a> in the Selling Integration Guide for details.</span><br /><br /><b>Maximum:</b> 500 listings|
|» marketplaceId|body|string|false|The ID for the eBay marketplace on which the report is based.<br /><br /><b>Maximum: </b> 1 For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/ba:MarketplaceIdEnum'>eBay API documentation</a>|
|» metricKeys|body|[string]|false|The list of metrics to be included in the report.  <p>Metrics are the quantitative measurements compiled into the report and the data returned is based on the specified dimension of the report. For example, if the dimension is <code>campaign</code>, the metrics for <b>number of sales</b> would be the number of sales in the campaign. However, if the dimension is <code>listing</code>, the <b>number of sales</b> represents the number of items sold in that listing.</p>  <p>For information on metric keys and how to set them, see <a href="/api-docs/sell/static/marketing/pl-reports.html">Promoted Listings reporting</a>.</p><b>Minimum: </b> 1|
|» reportFormat|body|string|false|The file format of the report. Currently, the only supported format is <code>TSV_GZIP</code>, which is a gzip file with tab separated values. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/plr:ReportFormatEnum'>eBay API documentation</a>|
|» reportType|body|string|false|The type of report to be generated, such as <code>ACCOUNT_PERFORMANCE_REPORT</code> or <code>CAMPAIGN_PERFORMANCE_REPORT</code>.<br/><br/><span class="tablenote"><b>Note:</b> INVENTORY_PERFORMANCE_REPORT is not currently available; availability date is pending.</span><br /><br /><b>Maximum:</b> 1 For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/plr:ReportTypeEnum'>eBay API documentation</a>|

<h3 id="createreporttask-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Accepted|None|
|400|Bad Request|Bad Request|None|
|403|Forbidden|Forbidden|None|
|409|Conflict|Conflict|None|
|500|Internal Server Error|Internal Server error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope/sell.marketing )
</aside>

## getReportTask

<a id="opIdgetReportTask"></a>

> Code samples

```bash
curl https://api.ebay.com/ad_report_task/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /ad_report_task/{report_task_id}`

This call returns the details of a specific Promoted Listings report task, as specified by the <b>report_task_id</b> path parameter. <p>The report task includes the report criteria (such as the report dimensions, metrics, and included listing) and the report-generation rules (such as starting and ending dates for the specified report task).</p>  <p>Report-task IDs are generated by eBay when you call <a href="/api-docs/sell/marketing/resources/ad_report_task/methods/createReportTask">createReportTask</a>. Get a complete list of a seller's report-task IDs by calling <a href="/api-docs/sell/marketing/resources/ad_report_task/methods/getReportTasks">getReportTasks</a>.</p><br/><div class="msgbox_important"><p class="msgbox_importantInDiv" data-mc-autonum="&lt;b&gt;&lt;span style=&quot;color: #dd1e31;&quot; class=&quot;mcFormatColor&quot;&gt;Important! &lt;/span&gt;&lt;/b&gt;"><span class="autonumber"><span><b><span style="color: #dd1e31;" class="mcFormatColor">Important!</span></b></span></span>For <b>ad_report</b> and <b>ad_report_task</b> methods, the API call limit is subject to a per user quota. These API calls can <b>only</b> be executed a maximum of 200 times per hour for each seller/user. If the number of calls per hour exceeds this limit, any new calls will be blocked for the next hour.</p></div>

<h3 id="getreporttask-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|report_task_id|path|string|true|A unique eBay-assigned ID for the report task that's generated when the report task is created by a call to <a href="/api-docs/sell/marketing/resources/ad_report_task/methods/createReportTask">createReportTask</a>.|

> Example responses

> 200 Response

```json
{
  "campaignIds": [
    "string"
  ],
  "dateFrom": "string",
  "dateTo": "string",
  "dimensions": [
    {
      "annotationKeys": [
        "string"
      ],
      "dimensionKey": "string"
    }
  ],
  "fundingModels": [
    "string"
  ],
  "inventoryReferences": [
    {
      "inventoryReferenceId": "string",
      "inventoryReferenceType": "string"
    }
  ],
  "listingIds": [
    "string"
  ],
  "marketplaceId": "string",
  "metricKeys": [
    "string"
  ],
  "reportExpirationDate": "string",
  "reportFormat": "string",
  "reportHref": "string",
  "reportId": "string",
  "reportName": "string",
  "reportTaskCompletionDate": "string",
  "reportTaskCreationDate": "string",
  "reportTaskExpectedCompletionDate": "string",
  "reportTaskId": "string",
  "reportTaskStatus": "string",
  "reportTaskStatusMessage": "string",
  "reportType": "string"
}
```

<h3 id="getreporttask-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ReportTask](#schemareporttask)|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not found|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope/sell.marketing )
</aside>

## deleteReportTask

<a id="opIddeleteReportTask"></a>

> Code samples

```bash
curl https://api.ebay.com/ad_report_task/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /ad_report_task/{report_task_id}`

This call deletes the report task specified by the <b>report_task_id</b> path parameter. This method also deletes any reports generated by the report task.  <p>Report task IDs are generated by eBay when you call <a href="/api-docs/sell/marketing/resources/ad_report_task/methods/createReportTask">createReportTask</a>. Get a complete list of a seller's report-task IDs by calling <a href="/api-docs/sell/marketing/resources/ad_report_task/methods/getReportTasks">getReportTasks</a>.</p><br/><div class="msgbox_important"><p class="msgbox_importantInDiv" data-mc-autonum="&lt;b&gt;&lt;span style=&quot;color: #dd1e31;&quot; class=&quot;mcFormatColor&quot;&gt;Important! &lt;/span&gt;&lt;/b&gt;"><span class="autonumber"><span><b><span style="color: #dd1e31;" class="mcFormatColor">Important!</span></b></span></span>For <b>ad_report</b> and <b>ad_report_task</b> methods, the API call limit is subject to a per user quota. These API calls can <b>only</b> be executed a maximum of 200 times per hour for each seller/user. If the number of calls per hour exceeds this limit, any new calls will be blocked for the next hour.</p></div>

<h3 id="deletereporttask-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|report_task_id|path|string|true|A unique eBay-assigned ID for the report task that's generated when the report task is created by a call to <a href="/api-docs/sell/marketing/resources/ad_report_task/methods/createReportTask">createReportTask</a>.|

<h3 id="deletereporttask-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not found|None|
|409|Conflict|Conflict|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope/sell.marketing )
</aside>

<h1 id="marketing-api-negativekeyword">negative_keyword</h1>

## bulkCreateNegativeKeyword

<a id="opIdbulkCreateNegativeKeyword"></a>

> Code samples

```bash
curl https://api.ebay.com/bulk_create_negative_keyword \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "requests": [
      {
        "adGroupId": "string",
        "campaignId": "string",
        "negativeKeywordMatchType": "string",
        "negativeKeywordText": "string"
      }
    ]
  }'
```

`POST /bulk_create_negative_keyword`

<span class="tablenote"><b>Note:</b> This method is only available for select partners who have been approved for the eBay Promoted Listings Advanced (PLA) program. For information about how to request access to this program, refer to <a href="/api-docs/sell/static/marketing/pl-verify-eligibility.html#access-requests " target="_blank "> Promoted Listings Advanced Access Requests</a> in the Promoted Listings Playbook. To determine if a seller qualifies for PLA, use the <a href="/api-docs/sell/account/resources/advertising_eligibility/methods/getAdvertisingEligibility " target="_blank ">getAdvertisingEligibility</a> method in Account API.</span><br />This method adds negative keywords, in bulk, to an existing ad group in a PLA campaign that uses the Cost Per Click (CPC) funding model.<br /><br />Specify the <b>campaignId</b> and <b>adGroupId</b> in the request body, along with the <b>negativeKeywordText</b> and <b>negativeKeywordMatchType</b>.<br /><br />Call the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method to retrieve a list of current campaign IDs for a specified seller.

> Body parameter

```json
{
  "requests": [
    {
      "adGroupId": "string",
      "campaignId": "string",
      "negativeKeywordMatchType": "string",
      "negativeKeywordText": "string"
    }
  ]
}
```

<h3 id="bulkcreatenegativekeyword-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[BulkCreateNegativeKeywordRequest](#schemabulkcreatenegativekeywordrequest)|true|A type that defines the fields for the bulk request to create negative keywords.|
|» requests|body|[[CreateNegativeKeywordRequest](#schemacreatenegativekeywordrequest)]|false|This array is used to pass in multiple negative keywords for one or more ad groups that belong to a campaign that uses the Cost Per Click (CPC) funding model.|

> Example responses

> 200 Response

```json
{
  "responses": [
    {
      "adGroupId": "string",
      "campaignId": "string",
      "errors": [
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
      ],
      "href": "string",
      "negativeKeywordId": "string",
      "negativeKeywordMatchType": "string",
      "negativeKeywordText": "string",
      "statusCode": 0
    }
  ]
}
```

<h3 id="bulkcreatenegativekeyword-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BulkCreateNegativeKeywordResponse](#schemabulkcreatenegativekeywordresponse)|
|207|Multi-Status|Multi Status|None|
|400|Bad Request|Bad Request|None|
|403|Forbidden|Forbidden|None|
|409|Conflict|Conflict|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope/sell.marketing )
</aside>

## bulkUpdateNegativeKeyword

<a id="opIdbulkUpdateNegativeKeyword"></a>

> Code samples

```bash
curl https://api.ebay.com/bulk_update_negative_keyword \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "requests": [
      {
        "negativeKeywordId": "string",
        "negativeKeywordStatus": "string"
      }
    ]
  }'
```

`POST /bulk_update_negative_keyword`

<span class="tablenote"><b>Note:</b> This method is only available for select partners who have been approved for the eBay Promoted Listings Advanced (PLA) program. For information about how to request access to this program, refer to <a href="/api-docs/sell/static/marketing/pl-verify-eligibility.html#access-requests " target="_blank "> Promoted Listings Advanced Access Requests</a> in the Promoted Listings Playbook. To determine if a seller qualifies for PLA, use the <a href="/api-docs/sell/account/resources/advertising_eligibility/methods/getAdvertisingEligibility " target="_blank ">getAdvertisingEligibility</a> method in Account API.</span><br />This method updates the statuses of existing negative keywords, in bulk.<br /><br />Specify the <b>negativeKeywordId</b> and <b>negativeKeywordStatus</b> in the request body.

> Body parameter

```json
{
  "requests": [
    {
      "negativeKeywordId": "string",
      "negativeKeywordStatus": "string"
    }
  ]
}
```

<h3 id="bulkupdatenegativekeyword-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[BulkUpdateNegativeKeywordRequest](#schemabulkupdatenegativekeywordrequest)|true|A type that defines the fields for the bulk request to update negative keyword statuses.|
|» requests|body|[[UpdateNegativeKeywordIdRequest](#schemaupdatenegativekeywordidrequest)]|false|An array to update the statuses of one or more existing negative keywords.|

> Example responses

> 200 Response

```json
{
  "responses": [
    {
      "errors": [
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
      ],
      "negativeKeywordId": "string",
      "statusCode": 0
    }
  ]
}
```

<h3 id="bulkupdatenegativekeyword-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BulkUpdateNegativeKeywordResponse](#schemabulkupdatenegativekeywordresponse)|
|207|Multi-Status|Multi Status|None|
|400|Bad Request|Bad Request|None|
|403|Forbidden|Forbidden|None|
|409|Conflict|Conflict|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope/sell.marketing )
</aside>

## getNegativeKeywords

<a id="opIdgetNegativeKeywords"></a>

> Code samples

```bash
curl https://api.ebay.com/negative_keyword \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /negative_keyword`

<span class="tablenote"><b>Note:</b> This method is only available for select partners who have been approved for the eBay Promoted Listings Advanced (PLA) program. For information about how to request access to this program, refer to <a href="/api-docs/sell/static/marketing/pl-verify-eligibility.html#access-requests " target="_blank "> Promoted Listings Advanced Access Requests</a> in the Promoted Listings Playbook. To determine if a seller qualifies for PLA, use the <a href="/api-docs/sell/account/resources/advertising_eligibility/methods/getAdvertisingEligibility " target="_blank ">getAdvertisingEligibility</a> method in Account API.</span><br />This method can be used to retrieve all of the negative keywords for ad groups in PLA campaigns that use the Cost Per Click (CPC) funding model.<br /><br />The results can be filtered using the <b>campaign_ids</b>, <b>ad_group_ids</b>, and <b>negative_keyword_status</b> query parameters.<br /><br />Call the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method to retrieve a list of current campaign IDs for a seller.

<h3 id="getnegativekeywords-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ad_group_ids|query|string|false|A comma-separated list of ad group IDs.<br /><br />This query parameter is used if the seller wants to retrieve the negative keywords from one or more specific ad groups. The results might not include these ad group IDs if other search conditions exclude them.<br /><br /><span class="tablenote"><b>Note:</b>You can call the <a href="/api-docs/sell/marketing/resources/adgroup/methods/getAdGroups">getAdGroups</a> method to retrieve the ad group IDs for a seller.</span><br /><br /><i>Required if</i> the search results must be filtered to include negative keywords created at the ad group level.|
|campaign_ids|query|string|false|A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created.<br /><br />This query parameter is used if the seller wants to retrieve the negative keywords from a specific campaign. The results might not include these campaign IDs if other search conditions exclude them.<br /><br /><span class="tablenote"><b>Note:</b> Currently, only one campaign ID value is supported for each request.</span>|
|limit|query|string|false|The number of results, from the current result set, to be returned in a single page.|
|negative_keyword_status|query|string|false|A comma-separated list of negative keyword statuses.<br /><br />This query parameter is used if the seller wants to filter the search results based on one or more negative keyword statuses.|
|offset|query|string|false|The number of results that will be skipped in the result set. This is used with the <b>limit</b> field to control the pagination of the output.<br /><br />For example, if the <b>offset</b> is set to <code>0</code> and the <b>limit</b> is set to <code>10</code>, the method will retrieve items 1 through 10 from the list of items returned. If the <b>offset</b> is set to <code>10</code> and the <b>limit</b> is set to <code>10</code>, the method will retrieve items 11 through 20 from the list of items returned.|

> Example responses

> 200 Response

```json
{
  "href": "string",
  "limit": 0,
  "negativeKeywords": [
    {
      "adGroupId": "string",
      "campaignId": "string",
      "negativeKeywordId": "string",
      "negativeKeywordMatchType": "string",
      "negativeKeywordStatus": "string",
      "negativeKeywordText": "string"
    }
  ],
  "next": "string",
  "offset": 0,
  "prev": "string",
  "total": 0
}
```

<h3 id="getnegativekeywords-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[NegativeKeywordPagedCollectionResponse](#schemanegativekeywordpagedcollectionresponse)|
|400|Bad Request|Bad Request|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|409|Conflict|Conflict|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope/sell.marketing.readonly https://api.ebay.com/oauth/api_scope/sell.marketing )
</aside>

## createNegativeKeyword

<a id="opIdcreateNegativeKeyword"></a>

> Code samples

```bash
curl https://api.ebay.com/negative_keyword \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "adGroupId": "string",
    "campaignId": "string",
    "negativeKeywordMatchType": "string",
    "negativeKeywordText": "string"
  }'
```

`POST /negative_keyword`

<span class="tablenote"><b>Note:</b> This method is only available for select partners who have been approved for the eBay Promoted Listings Advanced (PLA) program. For information about how to request access to this program, refer to <a href="/api-docs/sell/static/marketing/pl-verify-eligibility.html#access-requests " target="_blank "> Promoted Listings Advanced Access Requests</a> in the Promoted Listings Playbook. To determine if a seller qualifies for PLA, use the <a href="/api-docs/sell/account/resources/advertising_eligibility/methods/getAdvertisingEligibility " target="_blank ">getAdvertisingEligibility</a> method in Account API.</span><br />This method adds a negative keyword to an existing ad group in a PLA campaign that uses the Cost Per Click (CPC) funding model.<br /><br />Specify the <b>campaignId</b> and <b>adGroupId</b> in the request body, along with the <b>negativeKeywordText</b> and <b>negativeKeywordMatchType</b>.<br /><br />Call the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method to retrieve a list of current campaign IDs for a specified seller.

> Body parameter

```json
{
  "adGroupId": "string",
  "campaignId": "string",
  "negativeKeywordMatchType": "string",
  "negativeKeywordText": "string"
}
```

<h3 id="createnegativekeyword-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateNegativeKeywordRequest](#schemacreatenegativekeywordrequest)|true|A type that defines the fields for the request to create a negative keyword.|
|» adGroupId|body|string|false|This adGroupId is created when an ad group is first created and associated with a campaign. This is the ad group to which the corresponding negative keyword will be added.<br /><br /><span class="tablenote"><b>Note:</b> You can call the  <a href="/api-docs/sell/marketing/resources/adgroup/methods/getAdGroups">getAdGroups</a> method to retrieve the ad group IDs for a seller.</span><br /><br /><i>Required if</i> the negative keyword is being created at the ad group level.|
|» campaignId|body|string|false|A unique eBay-assigned ID for a campaign. This ID is generated when a campaign is created.<br /><br /><i>Required if</i> the negative keyword is being created at the ad group level.|
|» negativeKeywordMatchType|body|string|false|A field that defines the match type for the negative keyword.<br /><br /><span class="tablenote"><span style="color:#004680"><strong>Note:</strong></span> Broad matching of negative keywords is not currently supported.</span><br /><b>Valid Values:</b><ul><li><code>EXACT</code></li><li><code>PHRASE</code></li></ul> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:NegativeKeywordMatchTypeEnum'>eBay API documentation</a>|
|» negativeKeywordText|body|string|false|The negative keyword text.|

> Example responses

> 201 Response

```json
{}
```

<h3 id="createnegativekeyword-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|Inline|
|400|Bad Request|Bad Request|None|
|403|Forbidden|Forbidden|None|
|409|Conflict|Conflict|None|
|500|Internal Server Error|Internal Server Error|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope/sell.marketing )
</aside>

## getNegativeKeyword

<a id="opIdgetNegativeKeyword"></a>

> Code samples

```bash
curl https://api.ebay.com/negative_keyword/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /negative_keyword/{negative_keyword_id}`

<span class="tablenote"><b>Note:</b> This method is only available for select partners who have been approved for the eBay Promoted Listings Advanced (PLA) program. For information about how to request access to this program, refer to <a href="/api-docs/sell/static/marketing/pl-verify-eligibility.html#access-requests " target="_blank "> Promoted Listings Advanced Access Requests</a> in the Promoted Listings Playbook. To determine if a seller qualifies for PLA, use the <a href="/api-docs/sell/account/resources/advertising_eligibility/methods/getAdvertisingEligibility " target="_blank ">getAdvertisingEligibility</a> method in Account API.</span><br />This method retrieves details on a specific negative keyword.<br /><br />In the request, specify the <b>negative_keyword_id</b> as a path parameter.

<h3 id="getnegativekeyword-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|negative_keyword_id|path|string|true|The unique identifier for the negative keyword.<br /><br />This value is returned in the <b>Location</b> response header from the <a href="/api-docs/sell/marketing/resources/negative_keyword/methods/createNegativeKeyword">createNegativeKeyword</a> method.|

> Example responses

> 200 Response

```json
{
  "adGroupId": "string",
  "campaignId": "string",
  "negativeKeywordId": "string",
  "negativeKeywordMatchType": "string",
  "negativeKeywordStatus": "string",
  "negativeKeywordText": "string"
}
```

<h3 id="getnegativekeyword-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[NegativeKeyword](#schemanegativekeyword)|
|400|Bad Request|Bad Request|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|409|Conflict|Conflict|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope/sell.marketing.readonly https://api.ebay.com/oauth/api_scope/sell.marketing )
</aside>

## updateNegativeKeyword

<a id="opIdupdateNegativeKeyword"></a>

> Code samples

```bash
curl https://api.ebay.com/negative_keyword/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "negativeKeywordStatus": "string"
  }'
```

`PUT /negative_keyword/{negative_keyword_id}`

<span class="tablenote"><b>Note:</b> This method is only available for select partners who have been approved for the eBay Promoted Listings Advanced (PLA) program. For information about how to request access to this program, refer to <a href="/api-docs/sell/static/marketing/pl-verify-eligibility.html#access-requests " target="_blank "> Promoted Listings Advanced Access Requests</a> in the Promoted Listings Playbook. To determine if a seller qualifies for PLA, use the <a href="/api-docs/sell/account/resources/advertising_eligibility/methods/getAdvertisingEligibility " target="_blank ">getAdvertisingEligibility</a> method in Account API.</span><br />This method updates the status of an existing negative keyword.<br /><br />Specify the <b>negative_keyword_id</b> as a path parameter, and specify the <b>negativeKeywordStatus</b> in the request body.

> Body parameter

```json
{
  "negativeKeywordStatus": "string"
}
```

<h3 id="updatenegativekeyword-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|negative_keyword_id|path|string|true|The unique identifier for the negative keyword.<br /><br />This value is returned in the <b>Location</b> response header from the <a href="/api-docs/sell/marketing/resources/negative_keyword/methods/createNegativeKeyword">createNegativeKeyword</a> method.|
|body|body|[UpdateNegativeKeywordRequest](#schemaupdatenegativekeywordrequest)|true|A type that defines the fields for the request to update a negative keyword.|
|» negativeKeywordStatus|body|string|false|A field that defines the status of the negative keyword. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:NegativeKeywordStatusEnum'>eBay API documentation</a>|

<h3 id="updatenegativekeyword-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|400|Bad Request|Bad Request|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|409|Conflict|Business error|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope/sell.marketing )
</aside>

<h1 id="marketing-api-itempricemarkdown">item_price_markdown</h1>

## createItemPriceMarkdownPromotion

<a id="opIdcreateItemPriceMarkdownPromotion"></a>

> Code samples

```bash
curl https://api.ebay.com/item_price_markdown \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "applyFreeShipping": true,
    "autoSelectFutureInventory": true,
    "blockPriceIncreaseInItemRevision": true,
    "description": "string",
    "endDate": "string",
    "marketplaceId": "string",
    "name": "string",
    "priority": "string",
    "promotionImageUrl": "string",
    "promotionStatus": "string",
    "selectedInventoryDiscounts": [
      {
        "discountBenefit": {
          "amountOffItem": {
            "currency": "string",
            "value": "string"
          },
          "amountOffOrder": {
            "currency": "string",
            "value": "string"
          },
          "percentageOffItem": "string",
          "percentageOffOrder": "string"
        },
        "discountId": "string",
        "inventoryCriterion": {
          "inventoryCriterionType": "string",
          "inventoryItems": [
            {
              "inventoryReferenceId": "string"
            }
          ],
          "listingIds": [
            "string"
          ],
          "ruleCriteria": {
            "excludeInventoryItems": [
              {
                "inventoryReferenceId": "string"
              }
            ],
            "excludeListingIds": [
              "string"
            ],
            "markupInventoryItems": [
              {
                "inventoryReferenceId": "string"
              }
            ],
            "markupListingIds": [
              "string"
            ],
            "selectionRules": [
              {
                "brands": [
                  "string"
                ],
                "categoryIds": [
                  "string"
                ],
                "categoryScope": "string",
                "listingConditionIds": [
                  "string"
                ],
                "maxPrice": {
                  "currency": "string",
                  "value": "string"
                },
                "minPrice": {
                  "currency": "string",
                  "value": "string"
                }
              }
            ]
          }
        },
        "ruleOrder": 0
      }
    ],
    "startDate": "string"
  }'
```

`POST /item_price_markdown`

This method creates an <b>item price markdown promotion</b> (know simply as a "markdown promotion") where a discount amount is applied directly to the items included the promotion. Discounts can be specified as either a monetary amount or a percentage off the standard sales price. eBay highlights promoted items by placing teasers for the items throughout the online sales flows.  <p>Unlike an <a href="/api-docs/sell/marketing/resources/item_promotion/methods/createItemPromotion">item promotion</a>, a markdown promotion does not require the buyer meet a "threshold" before the offer takes effect. With markdown promotions, all the buyer needs to do is purchase the item to receive the promotion benefit.</p>  <p class="tablenote"><b>Important:</b> There are some restrictions for which listings are available for price markdown promotions. For details, see <a href="/api-docs/sell/marketing/static/overview.html#PM-requirements">Promotions Manager requirements and restrictions</a>. <br><br>In addition, we recommend you list items at competitive prices before including them in your markdown promotions. For an extensive list of pricing recommendations, see the <b>Growth</b> tab in Seller Hub.</p> <p>There are two ways to add items to markdown promotions:</p> <ul><li><b>Key-based promotions</b> select items using either the listing IDs or inventory reference IDs of the items you want to promote. Note that if you use inventory reference IDs, you must specify both the <b>inventoryReferenceId</b> and the associated <b>inventoryReferenceType</b> of the item(s) you want to include the promotion.</li>  <li><b>Rule-based promotions</b> select items using a list of eBay category IDs or seller Store category IDs. Rules can further constrain items in a promotion by minimum and maximum prices, brands, and item conditions.</li></ul>  <p>New promotions must be created in either a <code>DRAFT</code> or a <code>SCHEDULED</code> state. Use the DRAFT state when you are initially creating a promotion and you want to be sure it's correctly configured before scheduling it to run. When you create a promotion, the promotion ID is returned in the <b>Location</b> response header. Use this ID to reference the promotion in subsequent requests (such as to schedule a promotion that's in a DRAFT state).</p>  <p class="tablenote"><b>Tip:</b> Refer to <a href="/api-docs/sell/static/marketing/promotions-manager.html">Promotions Manager</a> in the <i>Selling Integration Guide</i> for details and examples showing how to create and manage seller promotions.</p>  <p>Markdown promotions are available on all eBay marketplaces. For more information, see <a href="/api-docs/sell/marketing/static/overview.html#PM-requirements">Promotions Manager requirements and restrictions</a>.</p>

> Body parameter

```json
{
  "applyFreeShipping": true,
  "autoSelectFutureInventory": true,
  "blockPriceIncreaseInItemRevision": true,
  "description": "string",
  "endDate": "string",
  "marketplaceId": "string",
  "name": "string",
  "priority": "string",
  "promotionImageUrl": "string",
  "promotionStatus": "string",
  "selectedInventoryDiscounts": [
    {
      "discountBenefit": {
        "amountOffItem": {
          "currency": "string",
          "value": "string"
        },
        "amountOffOrder": {
          "currency": "string",
          "value": "string"
        },
        "percentageOffItem": "string",
        "percentageOffOrder": "string"
      },
      "discountId": "string",
      "inventoryCriterion": {
        "inventoryCriterionType": "string",
        "inventoryItems": [
          {
            "inventoryReferenceId": "string"
          }
        ],
        "listingIds": [
          "string"
        ],
        "ruleCriteria": {
          "excludeInventoryItems": [
            {
              "inventoryReferenceId": "string"
            }
          ],
          "excludeListingIds": [
            "string"
          ],
          "markupInventoryItems": [
            {
              "inventoryReferenceId": "string"
            }
          ],
          "markupListingIds": [
            "string"
          ],
          "selectionRules": [
            {
              "brands": [
                "string"
              ],
              "categoryIds": [
                "string"
              ],
              "categoryScope": "string",
              "listingConditionIds": [
                "string"
              ],
              "maxPrice": {
                "currency": "string",
                "value": "string"
              },
              "minPrice": {
                "currency": "string",
                "value": "string"
              }
            }
          ]
        }
      },
      "ruleOrder": 0
    }
  ],
  "startDate": "string"
}
```

<h3 id="createitempricemarkdownpromotion-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ItemPriceMarkdown](#schemaitempricemarkdown)|false|This type defines the fields that describe an item price markdown promotion.|
|» applyFreeShipping|body|boolean|false|If set to <code>true</code>, free shipping is applied to the first shipping service specified for the item. The first domestic shipping option is set to "free shipping," regardless if the shipping <b>optionType</b> for that service is set to <code>FLAT_RATE</code>, <code>CALCULATED</code>, or <code>NOT_SPECIFIED</code> (freight). This flag essentially adds free shipping as a promotional bonus. <br><br><b>Default:</b> <code>false</code>|
|» autoSelectFutureInventory|body|boolean|false|If set to <code>true</code>, eBay will automatically add inventory items to the markdown promotion if they meet the <b>selectedInventoryDiscounts</b> criteria specified for the markdown promotion.  <br><br><b>Default:</b> <code>false</code>|
|» blockPriceIncreaseInItemRevision|body|boolean|false|If set to <code>true</code>, price increases (including removing the free shipping flag) are blocked and an error message is returned if a seller attempts to adjust the price of an item that's partaking in this markdown promotion. If set to <code>false</code>, an item is dropped from the markdown promotion if the seller adjusts the price.  <br><br><b>Default:</b> <code>false</code>|
|» description|body|string|false|This field is required if you are configuring an MARKDOWN_SALE promotion. <br><br>This is the seller-defined "tag line" for the offer, such as "Save on designer shoes." A tag line appears under the "offer-type text" that is generated for the promotion. The text is displayed on the offer tile that is shown on the seller's <b>All Offers</b> page and on the event page for the promotion.  <p class="tablenote"><b>Note:</b> Offer-type text is a teaser that's presented throughout the buyer's journey through the sales flow and is generated by eBay. This text is not editable by the seller&mdash;it's derived from the settings in the <b>discountRules</b> and <b>discountSpecification</b> fields&mdash;and can be, for example, "20% off".</p>  <br><b>Maximum length:</b> 50|
|» endDate|body|string|false|The date and time the promotion ends, in UTC format (<code>yyyy-MM-ddThh:mm:ssZ</code>). The value supplied for <b>endDate</b> must be at least 24 hours after the value supplied for the <b>startDate</b> of the markdown promotion.<br><br>For display purposes, convert this time into the local time of the seller.  <br><br><b>Max value:</b><ul><li><code>14</code> days for the AT, CH, DE, ES, FR, IE, IT, and UK, marketplaces.</li>  <li><code>45</code> days for all other marketplaces.</li></ul>|
|» marketplaceId|body|string|false|The eBay marketplace ID of the site where the markdown promotion is hosted. Markdown promotions are supported on all eBay marketplaces. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/ba:MarketplaceIdEnum'>eBay API documentation</a>|
|» name|body|string|false|The seller-defined name or 'title' of the promotion that the seller can use to identify a promotion. This label is not displayed in end-user flows.  <br><br><b>Maximum length:</b> 90|
|» priority|body|string|false|This field is ignored in markdown promotions. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/sme:PromotionPriorityEnum'>eBay API documentation</a>|
|» promotionImageUrl|body|string|false|Required for CODED_COUPON, MARKDOWN_SALE, and ORDER_DISCOUNT promotions, populate this field with a URL that points to an image to be used with the promotion. This image is displayed on the seller's <b>All Offers</b> page. The URL must point to either JPEG or PNG image and it must be a minimum of 500x500 pixels in dimension and cannot exceed 12Mb in size.|
|» promotionStatus|body|string|false|The current status of the promotion. When creating a new promotion, you must set this value to either <code>DRAFT</code> or <code>SCHEDULED</code>.  <br><br>Note that you must set this value to <code>SCHEDULED</code> when you update a <b>RUNNING</b> promotion. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/sme:PromotionStatusEnum'>eBay API documentation</a>|
|» selectedInventoryDiscounts|body|[[SelectedInventoryDiscount](#schemaselectedinventorydiscount)]|false|A list that defines the sets of selected items for the markdown promotion and the discount specified for promotion.|
|» startDate|body|string|false|The date and time the promotion starts in UTC format (<code>yyyy-MM-ddThh:mm:ssZ</code>). For display purposes, convert this time into the local time of the seller.|

> Example responses

> 201 Response

```json
{}
```

<h3 id="createitempricemarkdownpromotion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|Inline|
|400|Bad Request|Bad Request|None|
|409|Conflict|Conflict|None|
|500|Internal Server Error|Internal Server Error|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope/sell.marketing )
</aside>

## getItemPriceMarkdownPromotion

<a id="opIdgetItemPriceMarkdownPromotion"></a>

> Code samples

```bash
curl https://api.ebay.com/item_price_markdown/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /item_price_markdown/{promotion_id}`

This method returns the complete details of the item price markdown promotion that's indicated by the <b>promotion_id</b> path parameter. <br><br>Call <a href="/api-docs/sell/marketing/resources/promotion/methods/getPromotions">getPromotions</a> to retrieve the IDs of a seller's promotions.

<h3 id="getitempricemarkdownpromotion-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|promotion_id|path|string|true|This path parameter takes a concatenation of the ID of the promotion you want to get plus the marketplace ID on which the promotion is hosted. Concatenate the two values by separating them with an "at sign" (<b>@</b>).  <br><br>The ID of the promotion (<b>promotionId</b>) is a unique eBay-assigned value that's generated when the promotion is created. The Marketplace ID is the ENUM value of eBay marketplace where the promotion is hosted. <br><br><b>Example:</b> <code>1********5@EBAY_US</code>|

> Example responses

> 200 Response

```json
{
  "applyFreeShipping": true,
  "autoSelectFutureInventory": true,
  "blockPriceIncreaseInItemRevision": true,
  "description": "string",
  "endDate": "string",
  "marketplaceId": "string",
  "name": "string",
  "priority": "string",
  "promotionImageUrl": "string",
  "promotionStatus": "string",
  "selectedInventoryDiscounts": [
    {
      "discountBenefit": {
        "amountOffItem": {
          "currency": "string",
          "value": "string"
        },
        "amountOffOrder": {
          "currency": "string",
          "value": "string"
        },
        "percentageOffItem": "string",
        "percentageOffOrder": "string"
      },
      "discountId": "string",
      "inventoryCriterion": {
        "inventoryCriterionType": "string",
        "inventoryItems": [
          {
            "inventoryReferenceId": "string"
          }
        ],
        "listingIds": [
          "string"
        ],
        "ruleCriteria": {
          "excludeInventoryItems": [
            {
              "inventoryReferenceId": "string"
            }
          ],
          "excludeListingIds": [
            "string"
          ],
          "markupInventoryItems": [
            {
              "inventoryReferenceId": "string"
            }
          ],
          "markupListingIds": [
            "string"
          ],
          "selectionRules": [
            {
              "brands": [
                "string"
              ],
              "categoryIds": [
                "string"
              ],
              "categoryScope": "string",
              "listingConditionIds": [
                "string"
              ],
              "maxPrice": {
                "currency": "string",
                "value": "string"
              },
              "minPrice": {
                "currency": "string",
                "value": "string"
              }
            }
          ]
        }
      },
      "ruleOrder": 0
    }
  ],
  "startDate": "string"
}
```

<h3 id="getitempricemarkdownpromotion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ItemPriceMarkdown](#schemaitempricemarkdown)|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope/sell.marketing )
</aside>

## updateItemPriceMarkdownPromotion

<a id="opIdupdateItemPriceMarkdownPromotion"></a>

> Code samples

```bash
curl https://api.ebay.com/item_price_markdown/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "applyFreeShipping": true,
    "autoSelectFutureInventory": true,
    "blockPriceIncreaseInItemRevision": true,
    "description": "string",
    "endDate": "string",
    "marketplaceId": "string",
    "name": "string",
    "priority": "string",
    "promotionImageUrl": "string",
    "promotionStatus": "string",
    "selectedInventoryDiscounts": [
      {
        "discountBenefit": {
          "amountOffItem": {
            "currency": "string",
            "value": "string"
          },
          "amountOffOrder": {
            "currency": "string",
            "value": "string"
          },
          "percentageOffItem": "string",
          "percentageOffOrder": "string"
        },
        "discountId": "string",
        "inventoryCriterion": {
          "inventoryCriterionType": "string",
          "inventoryItems": [
            {
              "inventoryReferenceId": "string"
            }
          ],
          "listingIds": [
            "string"
          ],
          "ruleCriteria": {
            "excludeInventoryItems": [
              {
                "inventoryReferenceId": "string"
              }
            ],
            "excludeListingIds": [
              "string"
            ],
            "markupInventoryItems": [
              {
                "inventoryReferenceId": "string"
              }
            ],
            "markupListingIds": [
              "string"
            ],
            "selectionRules": [
              {
                "brands": [
                  "string"
                ],
                "categoryIds": [
                  "string"
                ],
                "categoryScope": "string",
                "listingConditionIds": [
                  "string"
                ],
                "maxPrice": {
                  "currency": "string",
                  "value": "string"
                },
                "minPrice": {
                  "currency": "string",
                  "value": "string"
                }
              }
            ]
          }
        },
        "ruleOrder": 0
      }
    ],
    "startDate": "string"
  }'
```

`PUT /item_price_markdown/{promotion_id}`

This method updates the specified item price markdown promotion with the new configuration that you supply in the payload of the request. Specify the promotion you want to update using the <b>promotion_id</b> path parameter. Call <a href="/api-docs/sell/marketing/resources/promotion/methods/getPromotions">getPromotions</a> to retrieve the IDs of a seller's promotions.  <br><br>When updating a promotion, supply all the fields that you used to configure the original promotion (and not just the fields you are updating). eBay replaces the specified promotion with the values you supply in the update request and if you don't pass a field that currently has a value, the update request fails.  <br><br>The parameters you are allowed to update with this request depend on the status of the promotion you're updating:  <ul><li>DRAFT or SCHEDULED promotions: You can update any of the parameters in these promotions that have not yet started to run, including the <b>discountRules</b>.</li> <li>RUNNING promotions: You can change the <b>endDate</b> and the item's inventory but you cannot change the promotional discount or the promotion's start date.</li> <li>ENDED promotions: Nothing can be changed.</li></ul>

> Body parameter

```json
{
  "applyFreeShipping": true,
  "autoSelectFutureInventory": true,
  "blockPriceIncreaseInItemRevision": true,
  "description": "string",
  "endDate": "string",
  "marketplaceId": "string",
  "name": "string",
  "priority": "string",
  "promotionImageUrl": "string",
  "promotionStatus": "string",
  "selectedInventoryDiscounts": [
    {
      "discountBenefit": {
        "amountOffItem": {
          "currency": "string",
          "value": "string"
        },
        "amountOffOrder": {
          "currency": "string",
          "value": "string"
        },
        "percentageOffItem": "string",
        "percentageOffOrder": "string"
      },
      "discountId": "string",
      "inventoryCriterion": {
        "inventoryCriterionType": "string",
        "inventoryItems": [
          {
            "inventoryReferenceId": "string"
          }
        ],
        "listingIds": [
          "string"
        ],
        "ruleCriteria": {
          "excludeInventoryItems": [
            {
              "inventoryReferenceId": "string"
            }
          ],
          "excludeListingIds": [
            "string"
          ],
          "markupInventoryItems": [
            {
              "inventoryReferenceId": "string"
            }
          ],
          "markupListingIds": [
            "string"
          ],
          "selectionRules": [
            {
              "brands": [
                "string"
              ],
              "categoryIds": [
                "string"
              ],
              "categoryScope": "string",
              "listingConditionIds": [
                "string"
              ],
              "maxPrice": {
                "currency": "string",
                "value": "string"
              },
              "minPrice": {
                "currency": "string",
                "value": "string"
              }
            }
          ]
        }
      },
      "ruleOrder": 0
    }
  ],
  "startDate": "string"
}
```

<h3 id="updateitempricemarkdownpromotion-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|promotion_id|path|string|true|This path parameter takes a concatenation of the ID of the promotion you want to update plus the marketplace ID on which the promotion is hosted. Concatenate the two values by separating them with an "at sign" (<b>@</b>).  <br><br>The ID of the promotion (<b>promotionId</b>) is a unique eBay-assigned value that's generated when the promotion is created. The Marketplace ID is the ENUM value of eBay marketplace where the promotion is hosted. <br><br><b>Example:</b> <code>1********5@EBAY_US</code>|
|body|body|[ItemPriceMarkdown](#schemaitempricemarkdown)|false|This type defines the fields that describe an item price markdown promotion.|
|» applyFreeShipping|body|boolean|false|If set to <code>true</code>, free shipping is applied to the first shipping service specified for the item. The first domestic shipping option is set to "free shipping," regardless if the shipping <b>optionType</b> for that service is set to <code>FLAT_RATE</code>, <code>CALCULATED</code>, or <code>NOT_SPECIFIED</code> (freight). This flag essentially adds free shipping as a promotional bonus. <br><br><b>Default:</b> <code>false</code>|
|» autoSelectFutureInventory|body|boolean|false|If set to <code>true</code>, eBay will automatically add inventory items to the markdown promotion if they meet the <b>selectedInventoryDiscounts</b> criteria specified for the markdown promotion.  <br><br><b>Default:</b> <code>false</code>|
|» blockPriceIncreaseInItemRevision|body|boolean|false|If set to <code>true</code>, price increases (including removing the free shipping flag) are blocked and an error message is returned if a seller attempts to adjust the price of an item that's partaking in this markdown promotion. If set to <code>false</code>, an item is dropped from the markdown promotion if the seller adjusts the price.  <br><br><b>Default:</b> <code>false</code>|
|» description|body|string|false|This field is required if you are configuring an MARKDOWN_SALE promotion. <br><br>This is the seller-defined "tag line" for the offer, such as "Save on designer shoes." A tag line appears under the "offer-type text" that is generated for the promotion. The text is displayed on the offer tile that is shown on the seller's <b>All Offers</b> page and on the event page for the promotion.  <p class="tablenote"><b>Note:</b> Offer-type text is a teaser that's presented throughout the buyer's journey through the sales flow and is generated by eBay. This text is not editable by the seller&mdash;it's derived from the settings in the <b>discountRules</b> and <b>discountSpecification</b> fields&mdash;and can be, for example, "20% off".</p>  <br><b>Maximum length:</b> 50|
|» endDate|body|string|false|The date and time the promotion ends, in UTC format (<code>yyyy-MM-ddThh:mm:ssZ</code>). The value supplied for <b>endDate</b> must be at least 24 hours after the value supplied for the <b>startDate</b> of the markdown promotion.<br><br>For display purposes, convert this time into the local time of the seller.  <br><br><b>Max value:</b><ul><li><code>14</code> days for the AT, CH, DE, ES, FR, IE, IT, and UK, marketplaces.</li>  <li><code>45</code> days for all other marketplaces.</li></ul>|
|» marketplaceId|body|string|false|The eBay marketplace ID of the site where the markdown promotion is hosted. Markdown promotions are supported on all eBay marketplaces. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/ba:MarketplaceIdEnum'>eBay API documentation</a>|
|» name|body|string|false|The seller-defined name or 'title' of the promotion that the seller can use to identify a promotion. This label is not displayed in end-user flows.  <br><br><b>Maximum length:</b> 90|
|» priority|body|string|false|This field is ignored in markdown promotions. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/sme:PromotionPriorityEnum'>eBay API documentation</a>|
|» promotionImageUrl|body|string|false|Required for CODED_COUPON, MARKDOWN_SALE, and ORDER_DISCOUNT promotions, populate this field with a URL that points to an image to be used with the promotion. This image is displayed on the seller's <b>All Offers</b> page. The URL must point to either JPEG or PNG image and it must be a minimum of 500x500 pixels in dimension and cannot exceed 12Mb in size.|
|» promotionStatus|body|string|false|The current status of the promotion. When creating a new promotion, you must set this value to either <code>DRAFT</code> or <code>SCHEDULED</code>.  <br><br>Note that you must set this value to <code>SCHEDULED</code> when you update a <b>RUNNING</b> promotion. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/sme:PromotionStatusEnum'>eBay API documentation</a>|
|» selectedInventoryDiscounts|body|[[SelectedInventoryDiscount](#schemaselectedinventorydiscount)]|false|A list that defines the sets of selected items for the markdown promotion and the discount specified for promotion.|
|» startDate|body|string|false|The date and time the promotion starts in UTC format (<code>yyyy-MM-ddThh:mm:ssZ</code>). For display purposes, convert this time into the local time of the seller.|

> Example responses

> 200 Response

```json
{}
```

<h3 id="updateitempricemarkdownpromotion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|204|No Content|Success|None|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not Found|None|
|409|Conflict|Conflict|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope/sell.marketing )
</aside>

## deleteItemPriceMarkdownPromotion

<a id="opIddeleteItemPriceMarkdownPromotion"></a>

> Code samples

```bash
curl https://api.ebay.com/item_price_markdown/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /item_price_markdown/{promotion_id}`

This method deletes the item price markdown promotion specified by the <b>promotion_id</b> path parameter. Call <a href="/api-docs/sell/marketing/resources/promotion/methods/getPromotions">getPromotions</a> to retrieve the IDs of a seller's promotions.  <br><br>You can delete any promotion with the exception of those that are currently active (RUNNING). To end a running promotion, call <a href="/api-docs/sell/marketing/resources/item_price_markdown/methods/updateItemPriceMarkdownPromotion">updateItemPriceMarkdownPromotion</a> and adjust the <b>endDate</b> field as appropriate.

<h3 id="deleteitempricemarkdownpromotion-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|promotion_id|path|string|true|This path parameter takes a concatenation of the ID of the promotion you want to delete plus the marketplace ID on which the promotion is hosted. Concatenate the two values by separating them with an "at sign" (<b>@</b>).  <br><br>The ID of the promotion (<b>promotionId</b>) is a unique eBay-assigned value that's generated when the promotion is created. The Marketplace ID is the ENUM value of eBay marketplace where the promotion is hosted. <br><br><b>Example:</b> <code>1********5@EBAY_US</code>|

<h3 id="deleteitempricemarkdownpromotion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope/sell.marketing )
</aside>

<h1 id="marketing-api-itempromotion">item_promotion</h1>

## createItemPromotion

<a id="opIdcreateItemPromotion"></a>

> Code samples

```bash
curl https://api.ebay.com/item_promotion \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "applyDiscountToSingleItemOnly": true,
    "budget": {
      "currency": "string",
      "value": "string"
    },
    "couponConfiguration": {
      "couponCode": "string",
      "couponType": "string",
      "maxCouponRedemptionPerUser": 0
    },
    "description": "string",
    "discountRules": [
      {
        "discountBenefit": {
          "amountOffItem": {
            "currency": "string",
            "value": "string"
          },
          "amountOffOrder": {
            "currency": "string",
            "value": "string"
          },
          "percentageOffItem": "string",
          "percentageOffOrder": "string"
        },
        "discountSpecification": {
          "forEachAmount": {
            "currency": "string",
            "value": "string"
          },
          "forEachQuantity": 0,
          "minAmount": {
            "currency": "string",
            "value": "string"
          },
          "minQuantity": 0,
          "numberOfDiscountedItems": 0
        },
        "maxDiscountAmount": {
          "currency": "string",
          "value": "string"
        },
        "ruleOrder": 0
      }
    ],
    "endDate": "string",
    "inventoryCriterion": {
      "inventoryCriterionType": "string",
      "inventoryItems": [
        {
          "inventoryReferenceId": "string"
        }
      ],
      "listingIds": [
        "string"
      ],
      "ruleCriteria": {
        "excludeInventoryItems": [
          {
            "inventoryReferenceId": "string"
          }
        ],
        "excludeListingIds": [
          "string"
        ],
        "markupInventoryItems": [
          {
            "inventoryReferenceId": "string"
          }
        ],
        "markupListingIds": [
          "string"
        ],
        "selectionRules": [
          {
            "brands": [
              "string"
            ],
            "categoryIds": [
              "string"
            ],
            "categoryScope": "string",
            "listingConditionIds": [
              "string"
            ],
            "maxPrice": {
              "currency": "string",
              "value": "string"
            },
            "minPrice": {
              "currency": "string",
              "value": "string"
            }
          }
        ]
      }
    },
    "marketplaceId": "string",
    "name": "string",
    "priority": "string",
    "promotionImageUrl": "string",
    "promotionStatus": "string",
    "promotionType": "string",
    "startDate": "string"
  }'
```

`POST /item_promotion`

This method creates an <b>item promotion</b>, where the buyer receives a discount when they meet the buying criteria that's set for the promotion. Known here as "threshold promotions", these promotions trigger when a threshold is met.  <p>eBay highlights promoted items by placing teasers for the promoted items throughout the online buyer flows.</p>  <p><i>Discounts</i> are specified as either a monetary amount or a percentage off the standard sales price of a listing, letting you offer deals such as "Buy 1 Get 1" and "Buy $50, get 20% off".</p> <p><i>Volume pricing</i> promotions increase the value of the discount as the buyer increases the quantity they purchase.</p> <p><i>Coded Coupons</i> provide unique codes that a buyer can use during checkout to receive a discount. The seller can specify the number of times a buyer can use the coupon and the maximum amount across all purchases that can be discounted using the coupon. The coupon code can also be made public (appearing on the seller's Offer page, search pages, the item listing, and the checkout page) or private (only on the seller's Offer page, but the seller can include the code in email and social media).</p> <p class="tablenote"><b>Note</b>: Coded Coupons are currently available in the US, UK, DE, FR, IT, ES, and AU marketplaces.</p><p>There are two ways to add items to a threshold promotion:</p>  <ul><li><b>Key-based promotions</b> select items using either the listing IDs or inventory reference IDs of the items you want to promote. Note that if you use inventory reference IDs, you must specify both the <b>inventoryReferenceId</b> and the associated <b>inventoryReferenceType</b> of the item(s) you want to include the promotion.</li> <li><b>Rule-based promotions</b> select items using a list of eBay category IDs or seller Store category IDs. Rules can further constrain items in a promotion by minimum and maximum prices, brands, and item conditions.</li></ul>  <p>You must create a new promotion in either a <code>DRAFT</code> or <code>SCHEDULED</code> state. Use the DRAFT state when you are initially creating a promotion and you want to be sure it's correctly configured before scheduling it to run. When you create a promotion, the promotion ID is returned in the <b>Location</b> response header. Use this ID to reference the promotion in subsequent requests.</p>  <p class="tablenote"><b>Tip:</b> Refer to the <a href="/api-docs/sell/static/marketing/promotions-manager.html">Selling Integration Guide</a> for details and examples showing how to create and manage threshold promotions using the Promotions Manager.</p>  <p>For information on the eBay marketplaces that support item promotions, see <a href="/api-docs/sell/marketing/static/overview.html#PM-requirements">Promotions Manager requirements and restrictions</a>.</p>

> Body parameter

```json
{
  "applyDiscountToSingleItemOnly": true,
  "budget": {
    "currency": "string",
    "value": "string"
  },
  "couponConfiguration": {
    "couponCode": "string",
    "couponType": "string",
    "maxCouponRedemptionPerUser": 0
  },
  "description": "string",
  "discountRules": [
    {
      "discountBenefit": {
        "amountOffItem": {
          "currency": "string",
          "value": "string"
        },
        "amountOffOrder": {
          "currency": "string",
          "value": "string"
        },
        "percentageOffItem": "string",
        "percentageOffOrder": "string"
      },
      "discountSpecification": {
        "forEachAmount": {
          "currency": "string",
          "value": "string"
        },
        "forEachQuantity": 0,
        "minAmount": {
          "currency": "string",
          "value": "string"
        },
        "minQuantity": 0,
        "numberOfDiscountedItems": 0
      },
      "maxDiscountAmount": {
        "currency": "string",
        "value": "string"
      },
      "ruleOrder": 0
    }
  ],
  "endDate": "string",
  "inventoryCriterion": {
    "inventoryCriterionType": "string",
    "inventoryItems": [
      {
        "inventoryReferenceId": "string"
      }
    ],
    "listingIds": [
      "string"
    ],
    "ruleCriteria": {
      "excludeInventoryItems": [
        {
          "inventoryReferenceId": "string"
        }
      ],
      "excludeListingIds": [
        "string"
      ],
      "markupInventoryItems": [
        {
          "inventoryReferenceId": "string"
        }
      ],
      "markupListingIds": [
        "string"
      ],
      "selectionRules": [
        {
          "brands": [
            "string"
          ],
          "categoryIds": [
            "string"
          ],
          "categoryScope": "string",
          "listingConditionIds": [
            "string"
          ],
          "maxPrice": {
            "currency": "string",
            "value": "string"
          },
          "minPrice": {
            "currency": "string",
            "value": "string"
          }
        }
      ]
    }
  },
  "marketplaceId": "string",
  "name": "string",
  "priority": "string",
  "promotionImageUrl": "string",
  "promotionStatus": "string",
  "promotionType": "string",
  "startDate": "string"
}
```

<h3 id="createitempromotion-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ItemPromotion](#schemaitempromotion)|false|This type defines the fields that describe an item promotion.|
|» applyDiscountToSingleItemOnly|body|boolean|false|This flag is relevant in only when <b>promotionType</b> is set to <code>VOLUME_DISCOUNT</code>. For details on volume pricing promotions, see <a href="/api-docs/sell/static/marketing/pm-volume-discounts.html">Configuring volume pricing discounts</a>.  <br><br>If set to <code>true</code>, the discount is applied only when the buyer purchases multiple quantities of a single item in the promotion. Otherwise, the promotional discount applies to multiple quantities of any items in the promotion. Different variations of a multi-variation item are considered to be the same item. Note that this flag is not relevant if the <b>inventoryCriterion</b> container identifies a single listing ID for the promotion.|
|» budget|body|[Amount](#schemaamount)|false|This sets the budget for the <code>CODED_COUPON</code> promotion type. Supported values range from 100-1000000. Supported currency codes include USD, GBP, EUR, and AUD. <p class="tablenote"><b>Note:</b> The budget value for an active or paused promotion can not be decreased.</p> <p class="tablenote"><b>Note:</b> The Currency Code for 'budget' must be the same as the Currency Code for 'maxDiscountAmount'.</p>|
|» couponConfiguration|body|[CouponConfiguration](#schemacouponconfiguration)|false|The configuration of a coded coupon promotion.|
|» description|body|string|false|This is the seller-defined "tag line" for the offer, such as "Save on designer shoes."  <br><br>The tag line appears under the "offer-type text" that is generated for the promotion and is displayed on the offer tile that's shown on the seller's <b>All Offers</b> page, and on the event page for the promotion.  <p class="tablenote"><b>Note:</b> Offer-type text is a teaser that's presented throughout the buyer's journey through the sales flow and is generated by eBay. The offer-type text is not editable by the seller&mdash;it's derived from the settings in the <b>discountRules</b> and <b>discountSpecification</b> fields&mdash;and can be, for example, "Extra 20% off when you buy 3+".</p>  <br><b>Maximum length:</b> 50 <br><br><i>Required if</i> you are configuring CODED_COUPON, ORDER_DISCOUNT, or MARKDOWN_SALE promotions (and not valid for VOLUME_DISCOUNT promotions).|
|» discountRules|body|[[DiscountRule](#schemadiscountrule)]|false|This container defines a promotion using the following two required fields: <ul><li><b>discountBenefit</b> &ndash; Defines a discount as either a monetary amount or a percentage that is subtracted from the sales price of an item, a set of items, or an order.</li>  <li><b>discountSpecification</b> &ndash; Defines a set of rules that determine when the promotion is applied.</li></ul> <p class="tablenote"><b>Note:</b> For volume pricing, you must specify at least two and not more than four <b>discountBenefit</b>/<b>discountSpecification</b> pairs. In addition, you must define each set of rules with a <b>ruleOrder</b> value that corresponds with the order of volume discounts you present.</p>  <p><b>Tip:</b> Refer to <a href="/api-docs/sell/static/marketing/pm-specifying-discounts.html">Specifying item promotion discounts</a> for information and examples on how to combine <b>discountBenefit</b> and <b>discountSpecification</b> to create different types of promotions.</p>|
|» endDate|body|string|false|The date and time the promotion ends in UTC format (<code>yyyy-MM-ddThh:mm:ssZ</code>). For display purposes, convert this time into the local time of the seller.|
|» inventoryCriterion|body|[InventoryCriterion](#schemainventorycriterion)|false|A container that defines either the listing IDs or the selection rules that specify the items to include in the promotion. Listing IDs can be either eBay listing IDs or a list of the seller's inventory reference IDs (know as SKUs or custom labels). See the <b>selectionRules</b> container for the rule criteria you can use to select inventory.  <p class="tablenote"><b>Note:</b> All listings in Promotions Manager promotions must support an electronic payment method.</p>|
|» marketplaceId|body|string|false|The eBay marketplace ID of the site where the threshold promotion is hosted. Threshold promotions are currently supported on a limited number of eBay marketplaces.  <p><b>Valid values:</b></p>  <ul><li><code>EBAY_AU</code> = Australia</li> <li><code>EBAY_DE</code> = Germany</li> <li><code>EBAY_ES</code> = Spain</li> <li><code>EBAY_FR</code> = France</li> <li><code>EBAY_GB</code> = Great Britain</li> <li><code>EBAY_IT</code> = Italy</li> <li><code>EBAY_US</code> = United States</li></ul> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/ba:MarketplaceIdEnum'>eBay API documentation</a>|
|» name|body|string|false|The seller-defined name or "title" of the promotion that the seller can use to identify a promotion. This label is not displayed in end-user flows.  <br><br><b>Maximum length:</b> 90|
|» priority|body|string|false|Applicable for only <b>ORDER_DISCOUNT</b> promotions, this field indicates the precedence of the promotion, which is used to determine the position of a promotion on the seller's <b>All Offers</b> page. If an item is associated with multiple promotions, the promotion with the higher priority takes precedence. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/sme:PromotionPriorityEnum'>eBay API documentation</a>|
|» promotionImageUrl|body|string|false|Required for CODED_COUPON, MARKDOWN_SALE, and ORDER_DISCOUNT promotions, and not valid for VOLUME_DISCOUNT promotions.  <br><br>Populate this field with a URL that points to an image to be used with the promotion. This image is displayed on the seller's <b>All Offers</b> page. The URL must point to either JPEG or PNG image and it must be a minimum of 500x500 pixels in dimension and cannot exceed 12Mb in size.|
|» promotionStatus|body|string|false|The current status of the promotion. When creating a new promotion, this value must be set to either <code>DRAFT</code> or <code>SCHEDULED</code>.  <br><br>Note that you must set this value to <code>SCHEDULED</code> when you update a <b>RUNNING</b> promotion. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/sme:PromotionStatusEnum'>eBay API documentation</a>|
|» promotionType|body|string|false|Use this field to specify the type of the promotion you are creating. <p>The supported types are:</p> <ul><li><code>CODED_COUPON</code> &ndash; A coupon code promotion set with <b>createItemPromotion</b>.</li> <li><code>MARKDOWN_SALE</code> &ndash; A markdown promotion set with <b>createItemPriceMarkdownPromotion</b>.</li> <li><code>ORDER_DISCOUNT</code> &ndash; A threshold promotion set with <b>createItemPromotion</b>.</li> <li><code>VOLUME_DISCOUNT</code> &ndash; A volume pricing promotion set with <b>createItemPromotion</b>.</li></ul> <p>See the <a href="/api-docs/sell/static/marketing/promotions-manager.html" target="_blank">Promotions Manager</a> documentation for details.</p> <p><i>Required if </i> you are creating a volume pricing promotion (<code>VOLUME_DISCOUNT</code>).</p> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/sme:PromotionTypeEnum'>eBay API documentation</a>|
|» startDate|body|string|false|The date and time the promotion starts in UTC format (<code>yyyy-MM-ddThh:mm:ssZ</code>). For display purposes, convert this time into the local time of the seller.|

> Example responses

> 201 Response

```json
{
  "warnings": [
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
  ]
}
```

<h3 id="createitempromotion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|[BaseResponse](#schemabaseresponse)|
|400|Bad Request|Bad Request|None|
|409|Conflict|Business Error|None|
|500|Internal Server Error|Internal Server Error|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope/sell.marketing )
</aside>

## getItemPromotion

<a id="opIdgetItemPromotion"></a>

> Code samples

```bash
curl https://api.ebay.com/item_promotion/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /item_promotion/{promotion_id}`

This method returns the complete details of the threshold promotion specified by the <b>promotion_id</b> path parameter. Call <a href="/api-docs/sell/marketing/resources/promotion/methods/getPromotions">getPromotions</a> to retrieve the IDs of a seller's promotions.

<h3 id="getitempromotion-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|promotion_id|path|string|true|This path parameter takes a concatenation of the ID of the promotion you want to retrieve plus the marketplace ID on which the promotion is hosted. Concatenate the two values by separating them with an "at sign" (<b>@</b>).  <br><br>The ID of the promotion (<b>promotionId</b>) is a unique eBay-assigned value that's generated when the promotion is created. The Marketplace ID is the ENUM value of eBay marketplace where the promotion is hosted. <br><br><b>Example:</b> <code>1********5@EBAY_US</code>|

> Example responses

> 200 Response

```json
{
  "applyDiscountToSingleItemOnly": true,
  "budget": {
    "currency": "string",
    "value": "string"
  },
  "couponConfiguration": {
    "couponCode": "string",
    "couponType": "string",
    "maxCouponRedemptionPerUser": 0
  },
  "description": "string",
  "discountRules": [
    {
      "discountBenefit": {
        "amountOffItem": {
          "currency": "string",
          "value": "string"
        },
        "amountOffOrder": {
          "currency": "string",
          "value": "string"
        },
        "percentageOffItem": "string",
        "percentageOffOrder": "string"
      },
      "discountSpecification": {
        "forEachAmount": {
          "currency": "string",
          "value": "string"
        },
        "forEachQuantity": 0,
        "minAmount": {
          "currency": "string",
          "value": "string"
        },
        "minQuantity": 0,
        "numberOfDiscountedItems": 0
      },
      "maxDiscountAmount": {
        "currency": "string",
        "value": "string"
      },
      "ruleOrder": 0
    }
  ],
  "endDate": "string",
  "inventoryCriterion": {
    "inventoryCriterionType": "string",
    "inventoryItems": [
      {
        "inventoryReferenceId": "string"
      }
    ],
    "listingIds": [
      "string"
    ],
    "ruleCriteria": {
      "excludeInventoryItems": [
        {
          "inventoryReferenceId": "string"
        }
      ],
      "excludeListingIds": [
        "string"
      ],
      "markupInventoryItems": [
        {
          "inventoryReferenceId": "string"
        }
      ],
      "markupListingIds": [
        "string"
      ],
      "selectionRules": [
        {
          "brands": [
            "string"
          ],
          "categoryIds": [
            "string"
          ],
          "categoryScope": "string",
          "listingConditionIds": [
            "string"
          ],
          "maxPrice": {
            "currency": "string",
            "value": "string"
          },
          "minPrice": {
            "currency": "string",
            "value": "string"
          }
        }
      ]
    }
  },
  "marketplaceId": "string",
  "name": "string",
  "priority": "string",
  "promotionId": "string",
  "promotionImageUrl": "string",
  "promotionStatus": "string",
  "promotionType": "string",
  "startDate": "string"
}
```

<h3 id="getitempromotion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ItemPromotionResponse](#schemaitempromotionresponse)|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope/sell.marketing.readonly https://api.ebay.com/oauth/api_scope/sell.marketing )
</aside>

## updateItemPromotion

<a id="opIdupdateItemPromotion"></a>

> Code samples

```bash
curl https://api.ebay.com/item_promotion/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "applyDiscountToSingleItemOnly": true,
    "budget": {
      "currency": "string",
      "value": "string"
    },
    "couponConfiguration": {
      "couponCode": "string",
      "couponType": "string",
      "maxCouponRedemptionPerUser": 0
    },
    "description": "string",
    "discountRules": [
      {
        "discountBenefit": {
          "amountOffItem": {
            "currency": "string",
            "value": "string"
          },
          "amountOffOrder": {
            "currency": "string",
            "value": "string"
          },
          "percentageOffItem": "string",
          "percentageOffOrder": "string"
        },
        "discountSpecification": {
          "forEachAmount": {
            "currency": "string",
            "value": "string"
          },
          "forEachQuantity": 0,
          "minAmount": {
            "currency": "string",
            "value": "string"
          },
          "minQuantity": 0,
          "numberOfDiscountedItems": 0
        },
        "maxDiscountAmount": {
          "currency": "string",
          "value": "string"
        },
        "ruleOrder": 0
      }
    ],
    "endDate": "string",
    "inventoryCriterion": {
      "inventoryCriterionType": "string",
      "inventoryItems": [
        {
          "inventoryReferenceId": "string"
        }
      ],
      "listingIds": [
        "string"
      ],
      "ruleCriteria": {
        "excludeInventoryItems": [
          {
            "inventoryReferenceId": "string"
          }
        ],
        "excludeListingIds": [
          "string"
        ],
        "markupInventoryItems": [
          {
            "inventoryReferenceId": "string"
          }
        ],
        "markupListingIds": [
          "string"
        ],
        "selectionRules": [
          {
            "brands": [
              "string"
            ],
            "categoryIds": [
              "string"
            ],
            "categoryScope": "string",
            "listingConditionIds": [
              "string"
            ],
            "maxPrice": {
              "currency": "string",
              "value": "string"
            },
            "minPrice": {
              "currency": "string",
              "value": "string"
            }
          }
        ]
      }
    },
    "marketplaceId": "string",
    "name": "string",
    "priority": "string",
    "promotionImageUrl": "string",
    "promotionStatus": "string",
    "promotionType": "string",
    "startDate": "string"
  }'
```

`PUT /item_promotion/{promotion_id}`

This method updates the specified threshold promotion with the new configuration that you supply in the request. Indicate the promotion you want to update using the <b>promotion_id</b> path parameter.  <p>Call <a href="/api-docs/sell/marketing/resources/promotion/methods/getPromotions">getPromotions</a> to retrieve the IDs of a seller's promotions.</p>  <p>When updating a promotion, supply all the fields that you used to configure the original promotion (and not just the fields you are updating). eBay replaces the specified promotion with the values you supply in the update request and if you don't pass a field that currently has a value, the update request will fail.</p>  <p>The parameters you are allowed to update with this request depend on the status of the promotion you're updating:  <ul><li>DRAFT or SCHEDULED promotions: You can update any of the parameters in these promotions that have not yet started to run, including the <b>discountRules</b>.</li> <li>RUNNING or PAUSED promotions: You can change the <b>endDate</b> and the item's inventory but you cannot change the promotional discount or the promotion's start date.</li> <li>ENDED promotions: Nothing can be changed.</li></ul> <p class="tablenote"><b>Tip:</b> When updating a <code>RUNNING</code> or <code>PAUSED</code> promotion, set the <b>status</b> field to <code>SCHEDULED</code> for the update request. When the promotion is updated, the previous status (either <code>RUNNING</code> or <code>PAUSED</code>) is retained.</p>

> Body parameter

```json
{
  "applyDiscountToSingleItemOnly": true,
  "budget": {
    "currency": "string",
    "value": "string"
  },
  "couponConfiguration": {
    "couponCode": "string",
    "couponType": "string",
    "maxCouponRedemptionPerUser": 0
  },
  "description": "string",
  "discountRules": [
    {
      "discountBenefit": {
        "amountOffItem": {
          "currency": "string",
          "value": "string"
        },
        "amountOffOrder": {
          "currency": "string",
          "value": "string"
        },
        "percentageOffItem": "string",
        "percentageOffOrder": "string"
      },
      "discountSpecification": {
        "forEachAmount": {
          "currency": "string",
          "value": "string"
        },
        "forEachQuantity": 0,
        "minAmount": {
          "currency": "string",
          "value": "string"
        },
        "minQuantity": 0,
        "numberOfDiscountedItems": 0
      },
      "maxDiscountAmount": {
        "currency": "string",
        "value": "string"
      },
      "ruleOrder": 0
    }
  ],
  "endDate": "string",
  "inventoryCriterion": {
    "inventoryCriterionType": "string",
    "inventoryItems": [
      {
        "inventoryReferenceId": "string"
      }
    ],
    "listingIds": [
      "string"
    ],
    "ruleCriteria": {
      "excludeInventoryItems": [
        {
          "inventoryReferenceId": "string"
        }
      ],
      "excludeListingIds": [
        "string"
      ],
      "markupInventoryItems": [
        {
          "inventoryReferenceId": "string"
        }
      ],
      "markupListingIds": [
        "string"
      ],
      "selectionRules": [
        {
          "brands": [
            "string"
          ],
          "categoryIds": [
            "string"
          ],
          "categoryScope": "string",
          "listingConditionIds": [
            "string"
          ],
          "maxPrice": {
            "currency": "string",
            "value": "string"
          },
          "minPrice": {
            "currency": "string",
            "value": "string"
          }
        }
      ]
    }
  },
  "marketplaceId": "string",
  "name": "string",
  "priority": "string",
  "promotionImageUrl": "string",
  "promotionStatus": "string",
  "promotionType": "string",
  "startDate": "string"
}
```

<h3 id="updateitempromotion-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|promotion_id|path|string|true|This path parameter takes a concatenation of the ID of the promotion you want to update plus the marketplace ID on which the promotion is hosted. Concatenate the two values by separating them with an "at sign" (<b>@</b>).  <br><br>The ID of the promotion (<b>promotionId</b>) is a unique eBay-assigned value that's generated when the promotion is created. The Marketplace ID is the ENUM value of eBay marketplace where the promotion is hosted. <br><br><b>Example:</b> <code>1********5@EBAY_US</code>|
|body|body|[ItemPromotion](#schemaitempromotion)|false|This type defines the fields that describe an item promotion.|
|» applyDiscountToSingleItemOnly|body|boolean|false|This flag is relevant in only when <b>promotionType</b> is set to <code>VOLUME_DISCOUNT</code>. For details on volume pricing promotions, see <a href="/api-docs/sell/static/marketing/pm-volume-discounts.html">Configuring volume pricing discounts</a>.  <br><br>If set to <code>true</code>, the discount is applied only when the buyer purchases multiple quantities of a single item in the promotion. Otherwise, the promotional discount applies to multiple quantities of any items in the promotion. Different variations of a multi-variation item are considered to be the same item. Note that this flag is not relevant if the <b>inventoryCriterion</b> container identifies a single listing ID for the promotion.|
|» budget|body|[Amount](#schemaamount)|false|This sets the budget for the <code>CODED_COUPON</code> promotion type. Supported values range from 100-1000000. Supported currency codes include USD, GBP, EUR, and AUD. <p class="tablenote"><b>Note:</b> The budget value for an active or paused promotion can not be decreased.</p> <p class="tablenote"><b>Note:</b> The Currency Code for 'budget' must be the same as the Currency Code for 'maxDiscountAmount'.</p>|
|» couponConfiguration|body|[CouponConfiguration](#schemacouponconfiguration)|false|The configuration of a coded coupon promotion.|
|» description|body|string|false|This is the seller-defined "tag line" for the offer, such as "Save on designer shoes."  <br><br>The tag line appears under the "offer-type text" that is generated for the promotion and is displayed on the offer tile that's shown on the seller's <b>All Offers</b> page, and on the event page for the promotion.  <p class="tablenote"><b>Note:</b> Offer-type text is a teaser that's presented throughout the buyer's journey through the sales flow and is generated by eBay. The offer-type text is not editable by the seller&mdash;it's derived from the settings in the <b>discountRules</b> and <b>discountSpecification</b> fields&mdash;and can be, for example, "Extra 20% off when you buy 3+".</p>  <br><b>Maximum length:</b> 50 <br><br><i>Required if</i> you are configuring CODED_COUPON, ORDER_DISCOUNT, or MARKDOWN_SALE promotions (and not valid for VOLUME_DISCOUNT promotions).|
|» discountRules|body|[[DiscountRule](#schemadiscountrule)]|false|This container defines a promotion using the following two required fields: <ul><li><b>discountBenefit</b> &ndash; Defines a discount as either a monetary amount or a percentage that is subtracted from the sales price of an item, a set of items, or an order.</li>  <li><b>discountSpecification</b> &ndash; Defines a set of rules that determine when the promotion is applied.</li></ul> <p class="tablenote"><b>Note:</b> For volume pricing, you must specify at least two and not more than four <b>discountBenefit</b>/<b>discountSpecification</b> pairs. In addition, you must define each set of rules with a <b>ruleOrder</b> value that corresponds with the order of volume discounts you present.</p>  <p><b>Tip:</b> Refer to <a href="/api-docs/sell/static/marketing/pm-specifying-discounts.html">Specifying item promotion discounts</a> for information and examples on how to combine <b>discountBenefit</b> and <b>discountSpecification</b> to create different types of promotions.</p>|
|» endDate|body|string|false|The date and time the promotion ends in UTC format (<code>yyyy-MM-ddThh:mm:ssZ</code>). For display purposes, convert this time into the local time of the seller.|
|» inventoryCriterion|body|[InventoryCriterion](#schemainventorycriterion)|false|A container that defines either the listing IDs or the selection rules that specify the items to include in the promotion. Listing IDs can be either eBay listing IDs or a list of the seller's inventory reference IDs (know as SKUs or custom labels). See the <b>selectionRules</b> container for the rule criteria you can use to select inventory.  <p class="tablenote"><b>Note:</b> All listings in Promotions Manager promotions must support an electronic payment method.</p>|
|» marketplaceId|body|string|false|The eBay marketplace ID of the site where the threshold promotion is hosted. Threshold promotions are currently supported on a limited number of eBay marketplaces.  <p><b>Valid values:</b></p>  <ul><li><code>EBAY_AU</code> = Australia</li> <li><code>EBAY_DE</code> = Germany</li> <li><code>EBAY_ES</code> = Spain</li> <li><code>EBAY_FR</code> = France</li> <li><code>EBAY_GB</code> = Great Britain</li> <li><code>EBAY_IT</code> = Italy</li> <li><code>EBAY_US</code> = United States</li></ul> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/ba:MarketplaceIdEnum'>eBay API documentation</a>|
|» name|body|string|false|The seller-defined name or "title" of the promotion that the seller can use to identify a promotion. This label is not displayed in end-user flows.  <br><br><b>Maximum length:</b> 90|
|» priority|body|string|false|Applicable for only <b>ORDER_DISCOUNT</b> promotions, this field indicates the precedence of the promotion, which is used to determine the position of a promotion on the seller's <b>All Offers</b> page. If an item is associated with multiple promotions, the promotion with the higher priority takes precedence. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/sme:PromotionPriorityEnum'>eBay API documentation</a>|
|» promotionImageUrl|body|string|false|Required for CODED_COUPON, MARKDOWN_SALE, and ORDER_DISCOUNT promotions, and not valid for VOLUME_DISCOUNT promotions.  <br><br>Populate this field with a URL that points to an image to be used with the promotion. This image is displayed on the seller's <b>All Offers</b> page. The URL must point to either JPEG or PNG image and it must be a minimum of 500x500 pixels in dimension and cannot exceed 12Mb in size.|
|» promotionStatus|body|string|false|The current status of the promotion. When creating a new promotion, this value must be set to either <code>DRAFT</code> or <code>SCHEDULED</code>.  <br><br>Note that you must set this value to <code>SCHEDULED</code> when you update a <b>RUNNING</b> promotion. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/sme:PromotionStatusEnum'>eBay API documentation</a>|
|» promotionType|body|string|false|Use this field to specify the type of the promotion you are creating. <p>The supported types are:</p> <ul><li><code>CODED_COUPON</code> &ndash; A coupon code promotion set with <b>createItemPromotion</b>.</li> <li><code>MARKDOWN_SALE</code> &ndash; A markdown promotion set with <b>createItemPriceMarkdownPromotion</b>.</li> <li><code>ORDER_DISCOUNT</code> &ndash; A threshold promotion set with <b>createItemPromotion</b>.</li> <li><code>VOLUME_DISCOUNT</code> &ndash; A volume pricing promotion set with <b>createItemPromotion</b>.</li></ul> <p>See the <a href="/api-docs/sell/static/marketing/promotions-manager.html" target="_blank">Promotions Manager</a> documentation for details.</p> <p><i>Required if </i> you are creating a volume pricing promotion (<code>VOLUME_DISCOUNT</code>).</p> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/sme:PromotionTypeEnum'>eBay API documentation</a>|
|» startDate|body|string|false|The date and time the promotion starts in UTC format (<code>yyyy-MM-ddThh:mm:ssZ</code>). For display purposes, convert this time into the local time of the seller.|

> Example responses

> 200 Response

```json
{
  "warnings": [
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
  ]
}
```

<h3 id="updateitempromotion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BaseResponse](#schemabaseresponse)|
|204|No Content|Success|None|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not Found|None|
|409|Conflict|Conflict|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope/sell.marketing )
</aside>

## deleteItemPromotion

<a id="opIddeleteItemPromotion"></a>

> Code samples

```bash
curl https://api.ebay.com/item_promotion/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /item_promotion/{promotion_id}`

This method deletes the threshold promotion specified by the <b>promotion_id</b> path parameter. Call <a href="/api-docs/sell/marketing/resources/promotion/methods/getPromotions">getPromotions</a> to retrieve the IDs of a seller's promotions.  <br><br>You can delete any promotion with the exception of those that are currently active (RUNNING). To end a running threshold promotion, call <a href="/api-docs/sell/marketing/resources/item_promotion/methods/updateItemPromotion">updateItemPromotion</a> and adjust the <b>endDate</b> field as appropriate.

<h3 id="deleteitempromotion-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|promotion_id|path|string|true|This path parameter takes a concatenation of the ID of the promotion you want to delete plus the marketplace ID on which the promotion is hosted. Concatenate the two values by separating them with an "at sign" (<b>@</b>).  <br><br>The ID of the promotion (<b>promotionId</b>) is a unique eBay-assigned value that's generated when the promotion is created. The Marketplace ID is the ENUM value of eBay marketplace where the promotion is hosted. <br><br><b>Example:</b> <code>1********5@EBAY_US</code>|

<h3 id="deleteitempromotion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope/sell.marketing )
</aside>

<h1 id="marketing-api-promotion">promotion</h1>

## getPromotions

<a id="opIdgetPromotions"></a>

> Code samples

```bash
curl 'https://api.ebay.com/promotion?marketplace_id=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /promotion`

This method returns a list of a seller's undeleted promotions. <p>The call returns up to 200 currently-available promotions on the specified marketplace. While the response body does not include the promotion's <b>discountRules</b> or <b>inventoryCriterion</b> containers, it does include the <b>promotionHref</b> (which you can use to retrieve the complete details of the promotion).</p>  <p>Use query parameters to sort and filter the results by the number of promotions to return, the promotion state or type, and the eBay marketplace. You can also supply keywords to limit the response to the promotions that contain that keywords in the title of the promotion.</p> <p><b>Maximum returned:</b> 200</p>

<h3 id="getpromotions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|string|false|Specifies the maximum number of promotions returned on a page from the result set.  <br><br><b>Default:</b> 200 <br><b>Maximum:</b> 200|
|marketplace_id|query|string|true|The eBay marketplace ID of the site where the promotion is hosted.  <p><b>Valid values:</b></p>  <ul><li><code>EBAY_AU</code> = Australia</li> <li><code>EBAY_DE</code> = Germany</li> <li><code>EBAY_ES</code> = Spain</li> <li><code>EBAY_FR</code> = France</li> <li><code>EBAY_GB</code> = Great Britain</li> <li><code>EBAY_IT</code> = Italy</li> <li><code>EBAY_US</code> = United States</li></ul>|
|offset|query|string|false|Specifies the number of promotions to skip in the result set before returning the first promotion in the paginated response.  <p>Combine <b>offset</b> with the <b>limit</b> query parameter to control the items returned in the response. For example, if you supply an <b>offset</b> of <code>0</code> and a <b>limit</b> of <code>10</code>, the first page of the response contains the first 10 items from the complete list of items retrieved by the call. If <b>offset</b> is <code>10</code> and <b>limit</b> is <code>20</code>, the first page of the response contains items 11-30 from the complete result set.</p> <p><b>Default:</b> 0</p>|
|promotion_status|query|string|false|Specifies the promotion state by which you want to filter the results. The response contains only those promotions that match the state you specify.  <br><br><b>Valid values:</b> <ul><li><code>DRAFT</code></li> <li><code>SCHEDULED</code></li> <li><code>RUNNING</code></li> <li><code>PAUSED</code></li> <li><code>ENDED</code></li></ul><b>Maximum number of input values:</b> 1|
|promotion_type|query|string|false|Filters the returned promotions based on their campaign promotion type. Specify one of the following values to indicate the promotion type you want returned: <ul><li><code>CODED_COUPON</code> &ndash; A coupon code promotion set with <b>createItemPromotion</b>.</li> <li><code>MARKDOWN_SALE</code> &ndash; A markdown promotion set with <b>createItemPriceMarkdownPromotion</b>.</li> <li><code>ORDER_DISCOUNT</code> &ndash; A threshold promotion set with <b>createItemPromotion</b>.</li> <li><code>VOLUME_DISCOUNT</code> &ndash; A volume pricing promotion set with <b>createItemPromotion</b>.</li></ul>|
|q|query|string|false|A string consisting of one or more <i>keywords</i>. eBay filters the response by returning only the promotions that contain the supplied keywords in the promotion title.  <br><br><b>Example:</b> "iPhone" or "Harry Potter."  <br><br>Commas that separate keywords are ignored. For example, a keyword string of "iPhone, iPad" equals "iPhone iPad", and each results in a response that contains promotions with both "iPhone" and "iPad" in the title.|
|sort|query|string|false|Specifies the order for how to sort the response. If you precede the supplied value with a dash, the response is sorted in reverse order.  <br><br><b>Example:</b> <br>&nbsp;&nbsp;&nbsp;<code>sort=END_DATE</code> &nbsp; Sorts the promotions in the response by their end dates in ascending order <br>&nbsp;&nbsp;&nbsp;<code>sort=-PROMOTION_NAME</code> &nbsp; Sorts the promotions by their promotion name in descending alphabetical order (Z-Az-a)  <br><br><b>Valid values</b>:<ul><li><code>START_DATE</code></li> <li><code>END_DATE</code></li> <li><code>PROMOTION_NAME</code></li></ul> For implementation help, refer to eBay API documentation at https://developer.ebay.com/api-docs/sell/marketing/types/csb:SortField|

> Example responses

> 200 Response

```json
{
  "href": "string",
  "limit": 0,
  "next": "string",
  "offset": 0,
  "prev": "string",
  "promotions": [
    {
      "couponCode": "string",
      "description": "string",
      "endDate": "string",
      "marketplaceId": "string",
      "name": "string",
      "priority": "string",
      "promotionHref": "string",
      "promotionId": "string",
      "promotionImageUrl": "string",
      "promotionStatus": "string",
      "promotionType": "string",
      "startDate": "string"
    }
  ],
  "total": 0
}
```

<h3 id="getpromotions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PromotionsPagedCollection](#schemapromotionspagedcollection)|
|400|Bad Request|Bad Request|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope/sell.marketing.readonly https://api.ebay.com/oauth/api_scope/sell.marketing )
</aside>

## getListingSet

<a id="opIdgetListingSet"></a>

> Code samples

```bash
curl https://api.ebay.com/promotion/string/get_listing_set \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /promotion/{promotion_id}/get_listing_set`

This method returns the set of listings associated with the <b>promotion_id</b> specified in the path parameter. Call <a href="/api-docs/sell/marketing/resources/promotion/methods/getPromotions">getPromotions</a> to retrieve the IDs of a seller's promotions.  <p>The listing details are returned in a paginated set and you can control and results returned using the following query parameters: <b>limit</b>, <b>offset</b>, <b>q</b>, <b>sort</b>, and <b>status</b>.</p>  <ul><li><b>Maximum associated listings returned:</b> 200</li>  <li><b>Default number of listings returned:</b> 200</li></ul>

<h3 id="getlistingset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|string|false|Specifies the maximum number of promotions returned on a page from the result set. <br><br><b>Default:</b> 200<br><b>Maximum:</b> 200|
|offset|query|string|false|Specifies the number of promotions to skip in the result set before returning the first promotion in the paginated response.  <p>Combine <b>offset</b> with the <b>limit</b> query parameter to control the items returned in the response. For example, if you supply an <b>offset</b> of <code>0</code> and a <b>limit</b> of <code>10</code>, the first page of the response contains the first 10 items from the complete list of items retrieved by the call. If <b>offset</b> is <code>10</code> and <b>limit</b> is <code>20</code>, the first page of the response contains items 11-30 from the complete result set.</p> <p><b>Default:</b> 0</p>|
|promotion_id|path|string|true|This path parameter takes a concatenation of the ID of the promotion you want to get plus the marketplace ID on which the promotion is hosted. Concatenate the two values by separating them with an "at sign" (<b>@</b>).  <br><br>The ID of the promotion (<b>promotionId</b>) is a unique eBay-assigned value that's generated when the promotion is created. The Marketplace ID is the ENUM value of eBay marketplace where the promotion is hosted. <br><br><b>Example:</b> <code>1********5@EBAY_US</code>|
|q|query|string|false|Reserved for future use.|
|sort|query|string|false|Specifies the order in which to sort the associated listings in the response. If you precede the supplied value with a dash, the response is sorted in reverse order.  <br><br><b>Example:</b> <br>&nbsp;&nbsp;&nbsp;<code>sort=PRICE</code> - Sorts the associated listings by their current price in ascending order <br>&nbsp;&nbsp;&nbsp;<code>sort=-TITLE</code> - Sorts the associated listings by their title in descending alphabetical order (Z-Az-a)  <br><br><b>Valid values</b>:<ul class="compact"><li>AVAILABLE</li> <li>PRICE</li> <li>TITLE</li></ul> For implementation help, refer to eBay API documentation at https://developer.ebay.com/api-docs/sell/marketing/types/csb:SortField|
|status|query|string|false|This query parameter applies only to markdown promotions. It filters the response based on the indicated status of the promotion. Currently, the only supported value for this parameter is <code>MARKED_DOWN</code>, which indicates active markdown promotions. For implementation help, refer to eBay API documentation at https://developer.ebay.com/api-docs/sell/marketing/types/sme:ItemMarkdownStatusEnum|

> Example responses

> 200 Response

```json
{
  "href": "string",
  "limit": 0,
  "listings": [
    {
      "currentPrice": {
        "currency": "string",
        "value": "string"
      },
      "freeShipping": true,
      "inventoryReferenceId": "string",
      "inventoryReferenceType": "string",
      "listingCategoryId": "string",
      "listingCondition": "string",
      "listingConditionId": "string",
      "listingId": "string",
      "listingPromotionStatuses": [
        {
          "listingMarkdownStatus": "string",
          "statusChangedDate": "string",
          "statusMessage": "string"
        }
      ],
      "quantity": 0,
      "storeCategoryId": "string",
      "title": "string"
    }
  ],
  "next": "string",
  "offset": 0,
  "prev": "string",
  "total": 0,
  "warnings": [
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
  ]
}
```

<h3 id="getlistingset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ItemsPagedCollection](#schemaitemspagedcollection)|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope/sell.marketing )
</aside>

## pausePromotion

<a id="opIdpausePromotion"></a>

> Code samples

```bash
curl https://api.ebay.com/promotion/string/pause \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /promotion/{promotion_id}/pause`

This method pauses a currently-active (RUNNING) threshold promotion and changes the state of the promotion from <code>RUNNING</code> to <code>PAUSED</code>. Pausing a promotion makes the promotion temporarily unavailable to buyers and any currently-incomplete transactions will not receive the promotional offer until the promotion is resumed. Also, promotion teasers are not displayed when a promotion is paused.  <br><br>Pass the ID of the promotion you want to pause using the <b>promotion_id</b> path parameter. Call <a href="/api-docs/sell/marketing/resources/promotion/methods/getPromotions">getPromotions</a> to retrieve the IDs of the seller's promotions. <br><br><b>Note:</b> You can only pause threshold promotions (you cannot pause markdown promotions).

<h3 id="pausepromotion-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|promotion_id|path|string|true|This path parameter takes a concatenation of the ID of the promotion you want to pause plus the marketplace ID on which the promotion is hosted. Concatenate the two values by separating them with an "at sign" (<b>@</b>).  <br><br>The ID of the promotion (<b>promotionId</b>) is a unique eBay-assigned value that's generated when the promotion is created. The Marketplace ID is the ENUM value of eBay marketplace where the promotion is hosted. <br><br><b>Example:</b> <code>1********5@EBAY_US</code>|

<h3 id="pausepromotion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope/sell.marketing )
</aside>

## resumePromotion

<a id="opIdresumePromotion"></a>

> Code samples

```bash
curl https://api.ebay.com/promotion/string/resume \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /promotion/{promotion_id}/resume`

This method restarts a threshold promotion that was previously paused and changes the state of the promotion from <code>PAUSED</code> to <code>RUNNING</code>. Only promotions that have been previously paused can be resumed. Resuming a promotion reinstates the promotional teasers and any transactions that were in motion before the promotion was paused will again be eligible for the promotion.  <br><br>Pass the ID of the promotion you want to resume using the <b>promotion_id</b> path parameter. Call <a href="/api-docs/sell/marketing/resources/promotion/methods/getPromotions">getPromotions</a> to retrieve the IDs of the seller's promotions.

<h3 id="resumepromotion-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|promotion_id|path|string|true|This path parameter takes a concatenation of the ID of the promotion you want to resume plus the marketplace ID on which the promotion is hosted. Concatenate the two values by separating them with an "at sign" (<b>@</b>).  <br><br>The ID of the promotion (<b>promotionId</b>) is a unique eBay-assigned value that's generated when the promotion is created. The Marketplace ID is the ENUM value of eBay marketplace where the promotion is hosted. <br><br><b>Example:</b> <code>1********5@EBAY_US</code>|

<h3 id="resumepromotion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope/sell.marketing )
</aside>

<h1 id="marketing-api-promotionreport">promotion_report</h1>

## getPromotionReports

<a id="opIdgetPromotionReports"></a>

> Code samples

```bash
curl 'https://api.ebay.com/promotion_report?marketplace_id=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /promotion_report`

This method generates a report that lists the seller's running, paused, and ended promotions for the specified eBay marketplace. The result set can be filtered by the promotion status and the number of results to return. You can also supply <i>keywords</i> to limit the report to promotions that contain the specified keywords. <br><br>Specify the eBay marketplace for which you want the report run using the <b>marketplace_id</b> query parameter. Supply additional query parameters to control the report as needed.

<h3 id="getpromotionreports-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|string|false|Specifies the maximum number of promotions returned on a page from the result set.  <br><br><b>Default:</b> 200 <br><b>Maximum:</b> 200|
|marketplace_id|query|string|true|The eBay marketplace ID of the site for which you want the promotions report.  <p><b>Valid values:</b>  </p><ul><li><code>EBAY_AU</code> = Australia</li> <li><code>EBAY_DE</code> = Germany</li> <li><code>EBAY_ES</code> = Spain</li> <li><code>EBAY_FR</code> = France</li> <li><code>EBAY_GB</code> = Great Britain</li> <li><code>EBAY_IT</code> = Italy</li> <li><code>EBAY_US</code> = United States</li></ul>|
|offset|query|string|false|Specifies the number of promotions to skip in the result set before returning the first promotion in the paginated response.  <p>Combine <b>offset</b> with the <b>limit</b> query parameter to control the items returned in the response. For example, if you supply an <b>offset</b> of <code>0</code> and a <b>limit</b> of <code>10</code>, the first page of the response contains the first 10 items from the complete list of items retrieved by the call. If <b>offset</b> is <code>10</code> and <b>limit</b> is <code>20</code>, the first page of the response contains items 11-30 from the complete result set.</p> <p><b>Default:</b> 0</p>|
|promotion_status|query|string|false|Limits the results to the promotions that are in the state specified by this query parameter.  <br><br><b>Valid values:</b> <ul><li><code>DRAFT</code></li> <li><code>SCHEDULED</code></li> <li><code>RUNNING</code></li> <li><code>PAUSED</code></li> <li><code>ENDED</code></li></ul><b>Maximum number of values supported:</b> 1|
|promotion_type|query|string|false|Filters the returned promotions in the report based on their campaign promotion type. Specify one of the following values to indicate the promotion type you want returned in the report: <ul><li><code>CODED_COUPON</code> &ndash; A coupon code promotion set with <b>createItemPromotion</b>.</li> <li><code>MARKDOWN_SALE</code> &ndash; A markdown promotion set with <b>createItemPriceMarkdownPromotion</b>.</li> <li><code>ORDER_DISCOUNT</code> &ndash; A threshold promotion set with <b>createItemPromotion</b>.</li> <li><code>VOLUME_DISCOUNT</code> &ndash; A volume pricing promotion set with <b>createItemPromotion</b>.</li></ul>|
|q|query|string|false|A string consisting of one or more <i>keywords</i>. eBay filters the response by returning only the promotions that contain the supplied keywords in the promotion title.  <br><br><b>Example:</b> "iPhone" or "Harry Potter."  <br><br>Commas that separate keywords are ignored. For example, a keyword string of "iPhone, iPad" equals "iPhone iPad", and each results in a response that contains promotions with both "iPhone" and "iPad" in the title.|

> Example responses

> 200 Response

```json
{
  "href": "string",
  "limit": 0,
  "next": "string",
  "offset": 0,
  "prev": "string",
  "promotionReports": [
    {
      "averageItemDiscount": {
        "currency": "string",
        "value": "string"
      },
      "averageItemRevenue": {
        "currency": "string",
        "value": "string"
      },
      "averageOrderDiscount": {
        "currency": "string",
        "value": "string"
      },
      "averageOrderRevenue": {
        "currency": "string",
        "value": "string"
      },
      "averageOrderSize": "string",
      "baseSale": {
        "currency": "string",
        "value": "string"
      },
      "itemsSoldQuantity": 0,
      "numberOfOrdersSold": 0,
      "percentageSalesLift": "string",
      "promotionHref": "string",
      "promotionId": "string",
      "promotionReportId": "string",
      "promotionSale": {
        "currency": "string",
        "value": "string"
      },
      "promotionType": "string",
      "totalDiscount": {
        "currency": "string",
        "value": "string"
      },
      "totalSale": {
        "currency": "string",
        "value": "string"
      }
    }
  ],
  "total": 0
}
```

<h3 id="getpromotionreports-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PromotionsReportPagedCollection](#schemapromotionsreportpagedcollection)|
|400|Bad Request|Bad Request|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope/sell.marketing.readonly https://api.ebay.com/oauth/api_scope/sell.marketing )
</aside>

<h1 id="marketing-api-promotionsummaryreport">promotion_summary_report</h1>

## getPromotionSummaryReport

<a id="opIdgetPromotionSummaryReport"></a>

> Code samples

```bash
curl 'https://api.ebay.com/promotion_summary_report?marketplace_id=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /promotion_summary_report`

This method generates a report that summarizes the seller's promotions for the specified eBay marketplace. The report returns information on <code>RUNNING</code>, <code>PAUSED</code>, and <code>ENDED</code> promotions (deleted reports are not returned) and summarizes the seller's campaign performance for all promotions on a given site.  <br><br>For information about summary reports, see <a href="/api-docs/sell/static/marketing/pm-summary-report.html">Reading the item promotion Summary report</a>.

<h3 id="getpromotionsummaryreport-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|marketplace_id|query|string|true|The eBay marketplace ID of the site you for which you want a promotion summary report.  <p><b>Valid values:</b></p>  <ul><li><code>EBAY_AU</code> = Australia</li> <li><code>EBAY_DE</code> = Germany</li> <li><code>EBAY_ES</code> = Spain</li> <li><code>EBAY_FR</code> = France</li> <li><code>EBAY_GB</code> = Great Britain</li> <li><code>EBAY_IT</code> = Italy</li> <li><code>EBAY_US</code> = United States</li></ul>|

> Example responses

> 200 Response

```json
{
  "baseSale": {
    "currency": "string",
    "value": "string"
  },
  "lastUpdated": "string",
  "percentageSalesLift": "string",
  "promotionSale": {
    "currency": "string",
    "value": "string"
  },
  "totalSale": {
    "currency": "string",
    "value": "string"
  }
}
```

<h3 id="getpromotionsummaryreport-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SummaryReportResponse](#schemasummaryreportresponse)|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope/sell.marketing.readonly https://api.ebay.com/oauth/api_scope/sell.marketing )
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
  "adGroupId": "string",
  "adId": "string",
  "adStatus": "string",
  "alerts": [
    {
      "alertType": "string",
      "details": [
        {
          "aspect": {
            "key": "string",
            "value": "string"
          },
          "dimension": {
            "key": "string",
            "value": "string"
          }
        }
      ]
    }
  ],
  "bidPercentage": "string",
  "inventoryReferenceId": "string",
  "inventoryReferenceType": "string",
  "listingId": "string"
}
```

A type that defines the fields for an ad.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adGroupId|string|false|none|A unique eBay-assigned ID for an ad group in a campaign that uses the Cost Per Click (CPC) funding model. This ID is created after a successful <a href="/api-docs/sell/marketing/resources/adgroup/methods/createAdGroup">createAdGroup</a> call, and all ad groups must be associated with a CPC campaign.|
|adId|string|false|none|A unique eBay-assigned ID that is generated when the ad is created.|
|adStatus|string|false|none|The current status of the CPC ad.<br /><br /><b>Valid Values:</b><ul><li><code>ACTIVE</code></li><li><code>PAUSED</code></li><li><code>ARCHIVED</code></li></ul><span class="tablenote"><b>Note:</b> This type only applies to the Cost Per Click (CPC) funding model; it does not apply to the Cost Per Sale (CPS) funding model.</span> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:AdStatusEnum'>eBay API documentation</a>|
|alerts|[[Alert](#schemaalert)]|false|none|An array containing alert messages for the ad.|
|bidPercentage|string|false|none|The user-defined <b>bid percentage</b> (also known as the <i>ad rate</i>) sets the level that eBay increases the visibility in search results for the associated listing. The higher the <b>bidPercentage</b> value, the more eBay promotes the listing.  <br><br>The value specified here is also used to calculate the Promoted Listings fee. This percentage value is multiplied by the final sales price to determine the fee. <br><br>The Promoted Listings fee is determined at the time the transaction completes and the seller is assessed the fee only when an item sells through a Promoted Listings ad campaign. <br><br>The <b>bidPercentage</b> is a single precision value that is guided by the following rules: <ul><li>These values are <b>valid</b>:<br>&nbsp;&nbsp;&nbsp;<code>4.1</code>, &nbsp;&nbsp;&nbsp;<code>5.0</code>, &nbsp;&nbsp;&nbsp;<code>5.5</code>, ...</li>  <li>These values are <b>not valid</b>:<br /> &nbsp;&nbsp;&nbsp;<code>0.01</code>, &nbsp;&nbsp;&nbsp;<code>10.75</code>, &nbsp;&nbsp;&nbsp;<code>99.99</code>,<br /> &nbsp;&nbsp;&nbsp;and so on.</li></ul>This is default bid percentage for the campaigns using the Cost Per Sale (CPS) funding model, and this value will be overridden by any ads in the campaign that have their own set bid percentages.<br /><br />If a bid percentage is not provided for an ad, eBay uses the default bid percentage of the associated campaign.<br /><br /><span class="tablenote"><b>Note:</b>This field will always be returned for campaigns that use the Cost Per Sale (CPS) funding model. It will not be returned for campaigns that use the Cost Per Click (CPC) funding model.</span><br /><b>Minimum value:</b> 2.0 <br><b>Maximum value:</b> 100.0|
|inventoryReferenceId|string|false|none|An ID that identifies a single-item listing or multiple-variation listing that is managed with the <a href="/api-docs/sell/inventory/resources/methods" title="Inventory API Reference">Inventory API</a>. <p>The <i>inventory reference ID</i> is a seller-defined value that can be either an <b>SKU</b> for a single-item listing or an <b>inventoryItemGroupKey</b> for a multiple-value listing.</p>  <p>An <i>inventoryItemGroupKey</i> is a value that the seller defines to indicate a listing that's the parent of an inventory item group (a multiple-variation listing, such as a listing for a shirt that's available in multiple sizes and colors).</p><p>This field is only returned if the ad is associated with a SKU or an inventory item group value.</p>|
|inventoryReferenceType|string|false|none|The enumeration value returned here indicates the type of listing the inventoryReferenceId references. The value returned here will be <code>INVENTORY_ITEM</code> for a single-variation listing, or <code>INVENTORY_ITEM_GROUP</code> for a multiple-variation listing. <p>This field is only returned if the ad is associated with a SKU or an inventory item group value.</p> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:InventoryReferenceTypeEnum'>eBay API documentation</a>|
|listingId|string|false|none|A unique eBay-assigned ID that is generated when a listing is created.|

<h2 id="tocS_AdGroup">AdGroup</h2>
<!-- backwards compatibility -->
<a id="schemaadgroup"></a>
<a id="schema_AdGroup"></a>
<a id="tocSadgroup"></a>
<a id="tocsadgroup"></a>

```json
{
  "adGroupId": "string",
  "adGroupStatus": "string",
  "defaultBid": {
    "currency": "string",
    "value": "string"
  },
  "name": "string"
}
```

A container for the details of an existing ad group.<br /><br />An ad group can be added to a campaign that uses the Cost Per Click (CPC) funding model. A campaign may have multiple ad groups. All listings that are promoted in the campaign are included in the ad group.<br /><br /><span class="tablenote"><b>Note:</b> This type only applies to the CPC funding model; it does not apply to the Cost Per Sale (CPS) funding model.</span>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adGroupId|string|false|none|A unique eBay-assigned ID for an ad group in a campaign that uses the Cost Per Click (CPC) funding model.|
|adGroupStatus|string|false|none|An enumeration value representing the current status of the ad group.<br /><br /><b>Valid Values:</b><ul><li><code>ACTIVE</code></li><li><code>PAUSED</code></li><li><code>ARCHIVED</code></li></ul> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:AdGroupStatusEnum'>eBay API documentation</a>|
|defaultBid|[Amount](#schemaamount)|false|none|A bid amount that applies to all of the keywords in an ad group that do not have individual bids. For all keywords without individual bids, the default bid is the amount that the seller will pay per click for the listings in the ad group in the promoted listings campaign.<br><br><b>Valid Values</b>: 0.5, 0.75|
|name|string|false|none|The seller-defined name of the ad group.|

<h2 id="tocS_AdGroupPagedCollectionResponse">AdGroupPagedCollectionResponse</h2>
<!-- backwards compatibility -->
<a id="schemaadgrouppagedcollectionresponse"></a>
<a id="schema_AdGroupPagedCollectionResponse"></a>
<a id="tocSadgrouppagedcollectionresponse"></a>
<a id="tocsadgrouppagedcollectionresponse"></a>

```json
{
  "adGroups": [
    {
      "adGroupId": "string",
      "adGroupStatus": "string",
      "defaultBid": {
        "currency": "string",
        "value": "string"
      },
      "name": "string"
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

A container for the details of a paged collection of ad groups.<br /><br /><span class="tablenote"><b>Note:</b> This type only applies to the Cost Per Click (CPC) funding model; it does not apply to the Cost Per Sale (CPS) funding model.</span>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adGroups|[[AdGroup](#schemaadgroup)]|false|none|The details of existing ad groups, such as the name, ID, and status of the ad groups.|
|href|string|false|none|The URI of the current page of results from the result set.|
|limit|integer(int32)|false|none|The number of items returned on a single page from the result set. This value can be set in the request with the <b>limit</b> query parameter.|
|next|string|false|none|The call URI that can be used to retrieve the next page in the result set. This value is returned only if there is an additional page of results to display from the result set.|
|offset|integer(int32)|false|none|The number of results skipped in the result set before listing the first returned result. This value can be set in the request with the <b>offset</b> query parameter. <p><b>Default:</b> 0</p><br><span class="tablenote"><b>Note: </b>The items in a paginated result set use a zero-based list, where the first item in the list has an offset of <code>0</code>.</span>|
|prev|string|false|none|The call URI that can be used to retrieve the previous page in the result set. Basically, all of the request parameters will remain the same except the offset value, which will be decreased to retrieve the previous page of results.|
|total|integer(int32)|false|none|The total number of items retrieved in the result set.<br /><br /><span class="tablenote"><b>Note: </b>If no items are found, this field is returned with a value of <code>0</code>.</span>|

<h2 id="tocS_AdIds">AdIds</h2>
<!-- backwards compatibility -->
<a id="schemaadids"></a>
<a id="schema_AdIds"></a>
<a id="tocSadids"></a>
<a id="tocsadids"></a>

```json
{
  "adIds": [
    "string"
  ]
}
```

This type is a container for a list of ad IDs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adIds|[string]|false|none|A list of ad IDs. Only one ad can be deleted per operation and only one adId value will be returned.|

<h2 id="tocS_AdPagedCollectionResponse">AdPagedCollectionResponse</h2>
<!-- backwards compatibility -->
<a id="schemaadpagedcollectionresponse"></a>
<a id="schema_AdPagedCollectionResponse"></a>
<a id="tocSadpagedcollectionresponse"></a>
<a id="tocsadpagedcollectionresponse"></a>

```json
{
  "ads": [
    {
      "adGroupId": "string",
      "adId": "string",
      "adStatus": "string",
      "alerts": [
        {
          "alertType": "string",
          "details": [
            {
              "aspect": {
                "key": "string",
                "value": "string"
              },
              "dimension": {
                "key": "string",
                "value": "string"
              }
            }
          ]
        }
      ],
      "bidPercentage": "string",
      "inventoryReferenceId": "string",
      "inventoryReferenceType": "string",
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

This type defines the fields that paginate the ads returned by the request. The entire <i>result set</i> consists of 0 or more sequenced <i>response pages</i>, where each page consists of 0 or more items from the complete result set.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ads|[[Ad](#schemaad)]|false|none|The list of ads that matched the request criteria.|
|href|string|false|none|The URI of the current page of results from the result set.|
|limit|integer(int32)|false|none|The number of items returned on a single page from the result set. This value can be set in the request with the <b>limit</b> query parameter.<p><b>Default</b>: <code>10</code>|
|next|string|false|none|The call URI that can be used to retrieve the next page in the result set. Basically, all of the request parameters will remain the same except the offset value, which will be increased to retrieve the next page of results. <br><br><b>Max length</b>: 2048|
|offset|integer(int32)|false|none|The number of results skipped in the result set before listing the first result on the current page. This value can be set in the request with the <b>offset</b> query parameter. If the <b>offset</b> value is not set, it defaults to zero.<p><b>Default</b>: <code>0</code></p><p class="tablenote"><strong>Note: </strong>The items in a paginated result set use a zero-based list where the first item in the list has an offset of <code>0</code>.</p>|
|prev|string|false|none|The call URI that can be used to retrieve the previous page in the result set. Basically, all of the request parameters will remain the same except the offset value, which will be decreased to retrieve the previous page of results. <br><br><b>Max length</b>: 2048|
|total|integer(int32)|false|none|The total number of items retrieved in the result set.  <br><br>If no items are found, this field is returned with a value of <code>0</code>.|

<h2 id="tocS_AdReference">AdReference</h2>
<!-- backwards compatibility -->
<a id="schemaadreference"></a>
<a id="schema_AdReference"></a>
<a id="tocSadreference"></a>
<a id="tocsadreference"></a>

```json
{
  "adId": "string",
  "href": "string"
}
```

This type defines the fields for an ad ID and its associated URL.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adId|string|false|none|A unique eBay-assigned ID for an ad. This ID is generated when an ad is created.|
|href|string|false|none|The getAd URI of an ad. You can use this URI to retrieve the ad.|

<h2 id="tocS_AdReferences">AdReferences</h2>
<!-- backwards compatibility -->
<a id="schemaadreferences"></a>
<a id="schema_AdReferences"></a>
<a id="tocSadreferences"></a>
<a id="tocsadreferences"></a>

```json
{
  "ads": [
    {
      "adId": "string",
      "href": "string"
    }
  ]
}
```

This type is a container for a list of ad IDs and their associated URIs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ads|[[AdReference](#schemaadreference)]|false|none|A list of ad IDs. An ad ID is generated for each successfully created ad. Only one ad can be created per operation.|

<h2 id="tocS_AdResponse">AdResponse</h2>
<!-- backwards compatibility -->
<a id="schemaadresponse"></a>
<a id="schema_AdResponse"></a>
<a id="tocSadresponse"></a>
<a id="tocsadresponse"></a>

```json
{
  "adGroupId": "string",
  "adId": "string",
  "errors": [
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
  ],
  "href": "string",
  "listingId": "string",
  "statusCode": 0
}
```

This type defines the fields returned in an ad response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adGroupId|string|false|none|A unique eBay-assigned ID for an ad group in a Promoted Listings Advanced (PLA) campaign that uses the Cost Per Click (CPC) funding model.<span class="tablenote"><b>Note:</b> This field will always be returned for  campaigns that use the CPC funding model. It will not be returned for campaigns that use the Cost Per Sale (CPS) funding model.</span>|
|adId|string|false|none|A unique eBay-assigned ID for an ad. This ID is generated when an ad is created.<span class="tablenote"><b>Note:</b>This field is only returned when an ad is successfully created for the corresponding listing.</span>|
|errors|[[Error](#schemaerror)]|false|none|An array of errors associated with the request.|
|href|string|false|none|The getAd URI that points to the ad.<span class="tablenote"><b>Note:</b>This field is only returned when an ad is successfully created for the corresponding listing.</span>|
|listingId|string|false|none|A unique eBay-assigned ID for a listing that is generated when the listing is created.|
|statusCode|integer(int32)|false|none|An HTTP status code indicating if the corresponding ad was successfully created or not. <code>200 Successful</code> should be returned for successfully created ads.<span class="tablenote"><b>Note:</b>A status code is returned for each ad that the seller creates, or attempts to create.</span>|

<h2 id="tocS_AdUpdateResponse">AdUpdateResponse</h2>
<!-- backwards compatibility -->
<a id="schemaadupdateresponse"></a>
<a id="schema_AdUpdateResponse"></a>
<a id="tocSadupdateresponse"></a>
<a id="tocsadupdateresponse"></a>

```json
{
  "adId": "string",
  "errors": [
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
  ],
  "href": "string",
  "listingId": "string",
  "statusCode": 0
}
```

A type that contains the fields for the ad update response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adId|string|false|none|A unique eBay-assigned ID that is generated when the ad is created.|
|errors|[[Error](#schemaerror)]|false|none|A list of errors associated with the specified listing ID.|
|href|string|false|none|The URI for the ad, which can be used to retrieve the ad.|
|listingId|string|false|none|A unique eBay-assigned ID that is generated when the listing is created.|
|statusCode|integer(int32)|false|none|An HTTP status code that indicates the response-status of the request.|

<h2 id="tocS_AdUpdateStatusByListingIdResponse">AdUpdateStatusByListingIdResponse</h2>
<!-- backwards compatibility -->
<a id="schemaadupdatestatusbylistingidresponse"></a>
<a id="schema_AdUpdateStatusByListingIdResponse"></a>
<a id="tocSadupdatestatusbylistingidresponse"></a>
<a id="tocsadupdatestatusbylistingidresponse"></a>

```json
{
  "adGroupId": "string",
  "errors": [
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
  ],
  "href": "string",
  "listingId": "string",
  "statusCode": 0
}
```

A type that contains the fields for the ad update status by listing ID response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adGroupId|string|false|none|A unique eBay-assigned ID for an ad group in a campaign that uses the Cost Per Click (CPC) funding model.|
|errors|[[Error](#schemaerror)]|false|none|A list of errors associated with the specified listing ID.|
|href|string|false|none|The URI for the ad, which can be used to retrieve the ad.|
|listingId|string|false|none|A unique eBay-assigned ID that is generated when the listing is created.|
|statusCode|integer(int32)|false|none|An HTTP status code that indicates the response-status of the request.|

<h2 id="tocS_AdUpdateStatusResponse">AdUpdateStatusResponse</h2>
<!-- backwards compatibility -->
<a id="schemaadupdatestatusresponse"></a>
<a id="schema_AdUpdateStatusResponse"></a>
<a id="tocSadupdatestatusresponse"></a>
<a id="tocsadupdatestatusresponse"></a>

```json
{
  "adId": "string",
  "errors": [
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
  ],
  "href": "string",
  "statusCode": 0
}
```

A type that contains the fields for the ad update status response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adId|string|false|none|A unique eBay-assigned ID that is generated when the ad is created.|
|errors|[[Error](#schemaerror)]|false|none|A list of errors associated with the specified listing ID.|
|href|string|false|none|The URI for the ad, which can be used to retrieve the ad.|
|statusCode|integer(int32)|false|none|An HTTP status code that indicates the response-status of the request.|

<h2 id="tocS_AdditionalInfo">AdditionalInfo</h2>
<!-- backwards compatibility -->
<a id="schemaadditionalinfo"></a>
<a id="schema_AdditionalInfo"></a>
<a id="tocSadditionalinfo"></a>
<a id="tocsadditionalinfo"></a>

```json
{
  "infoType": "string",
  "metrics": [
    {
      "metricKey": "string",
      "value": "string"
    }
  ]
}
```

A type that provides additional information for suggested keywords.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|infoType|string|false|none|The type of additional information provided for the suggested keyword.<br /><br /><strong>Valid Value:</strong> <code>KEYWORD_INSIGHTS</code> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:AdditionalInfoEnum'>eBay API documentation</a>|
|metrics|[[AdditionalInfoData](#schemaadditionalinfodata)]|false|none|A list of additional data provided for the suggested keyword.|

<h2 id="tocS_AdditionalInfoData">AdditionalInfoData</h2>
<!-- backwards compatibility -->
<a id="schemaadditionalinfodata"></a>
<a id="schema_AdditionalInfoData"></a>
<a id="tocSadditionalinfodata"></a>
<a id="tocsadditionalinfodata"></a>

```json
{
  "metricKey": "string",
  "value": "string"
}
```

A type that defines the data produced for additional information about suggested keywords.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|metricKey|string|false|none|The metric used to provide additional information for the suggested keyword.<br /><br /><strong>Valid Values:</strong> <ul><li><code>ACTIVE_SELLER_COUNT</code></li><li><code>SEARCH_VOLUME</code></li></ul> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:MetricEnum'>eBay API documentation</a>|
|value|string|false|none|The data provided for the specified metric.<br /><br /><span class="tablenote"><span style="color:#004680"><strong>Note:</strong></span> All metric data is compiled for the marketplace associated with the specified campaign ID.</span>|

<h2 id="tocS_Ads">Ads</h2>
<!-- backwards compatibility -->
<a id="schemaads"></a>
<a id="schema_Ads"></a>
<a id="tocSads"></a>
<a id="tocsads"></a>

```json
{
  "ads": [
    {
      "adGroupId": "string",
      "adId": "string",
      "adStatus": "string",
      "alerts": [
        {
          "alertType": "string",
          "details": [
            {
              "aspect": {
                "key": "string",
                "value": "string"
              },
              "dimension": {
                "key": "string",
                "value": "string"
              }
            }
          ]
        }
      ],
      "bidPercentage": "string",
      "inventoryReferenceId": "string",
      "inventoryReferenceType": "string",
      "listingId": "string"
    }
  ]
}
```

This type defines the container for an array of ads.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ads|[[Ad](#schemaad)]|false|none|A list of ad IDs. An ad ID is generated for each successfully created ad.|

<h2 id="tocS_Alert">Alert</h2>
<!-- backwards compatibility -->
<a id="schemaalert"></a>
<a id="schema_Alert"></a>
<a id="tocSalert"></a>
<a id="tocsalert"></a>

```json
{
  "alertType": "string",
  "details": [
    {
      "aspect": {
        "key": "string",
        "value": "string"
      },
      "dimension": {
        "key": "string",
        "value": "string"
      }
    }
  ]
}
```

A type that contains the alert message fields for the ad.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alertType|string|false|none|The type of alert message. For example, an invalid bid percentage. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:AlertTypeEnum'>eBay API documentation</a>|
|details|[[AlertDetails](#schemaalertdetails)]|false|none|A description of the alert including dimensions and aspects.|

<h2 id="tocS_AlertDetails">AlertDetails</h2>
<!-- backwards compatibility -->
<a id="schemaalertdetails"></a>
<a id="schema_AlertDetails"></a>
<a id="tocSalertdetails"></a>
<a id="tocsalertdetails"></a>

```json
{
  "aspect": {
    "key": "string",
    "value": "string"
  },
  "dimension": {
    "key": "string",
    "value": "string"
  }
}
```

A type that contains the alert detail fields.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|aspect|[Aspect](#schemaaspect)|false|none|The aspect information of the alert including keys and values.|
|dimension|[AlertDimension](#schemaalertdimension)|false|none|The dimension information of the alert including keys and values.|

<h2 id="tocS_AlertDimension">AlertDimension</h2>
<!-- backwards compatibility -->
<a id="schemaalertdimension"></a>
<a id="schema_AlertDimension"></a>
<a id="tocSalertdimension"></a>
<a id="tocsalertdimension"></a>

```json
{
  "key": "string",
  "value": "string"
}
```

A type that contains the dimension fields.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|false|none|The key field of the applied dimension. For example, the marketplace Id. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:DimensionKeyEnum'>eBay API documentation</a>|
|value|string|false|none|The value field of the applied dimension. For example, if the key is a <code>MARKETPLACE_ID</code>, the value would be from <a href='/api-docs/sell/marketing/types/ba:MarketplaceIdEnum'>MarketplaceIdEnum</a>.|

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
|currency|string|false|none|The base currency applied to the <b>value</b> field to establish a monetary amount.  <br><br>The currency is represented as a 3-letter <a href="https://www.iso.org/iso-4217-currency-codes.html " title="https://www.iso.org " target="_blank">ISO 4217</a> currency code. For example, the code for the Canadian Dollar is <code>CAD</code>.  <br><br><b>Default:</b> The default currency of the eBay marketplace that hosts the listing. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/ba:CurrencyCodeEnum'>eBay API documentation</a>|
|value|string|false|none|The monetary amount in the specified <b>currency</b>.  <br><br><i>Required in</i> the <b>amount</b> type.|

<h2 id="tocS_Aspect">Aspect</h2>
<!-- backwards compatibility -->
<a id="schemaaspect"></a>
<a id="schema_Aspect"></a>
<a id="tocSaspect"></a>
<a id="tocsaspect"></a>

```json
{
  "key": "string",
  "value": "string"
}
```

A type that contains the aspect fields.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|false|none|The type of the aspect. For example, <code>MINIMUM_REQUIRED</code>. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:AspectKeyEnum'>eBay API documentation</a>|
|value|string|false|none|The value of the aspect. For example, if the aspect is a percentage, a value of '2.0' would equal 2%.|

<h2 id="tocS_BaseResponse">BaseResponse</h2>
<!-- backwards compatibility -->
<a id="schemabaseresponse"></a>
<a id="schema_BaseResponse"></a>
<a id="tocSbaseresponse"></a>
<a id="tocsbaseresponse"></a>

```json
{
  "warnings": [
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
  ]
}
```

This type defines the fields for any warning error messages.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|warnings|[[Error](#schemaerror)]|false|none|The container for any warning error messages generated by the request. Warnings are not fatal in that they do not prevent the call from running and returning a response, but they should be reviewed to ensure your requests are returning the responses you expect.|

<h2 id="tocS_Budget">Budget</h2>
<!-- backwards compatibility -->
<a id="schemabudget"></a>
<a id="schema_Budget"></a>
<a id="tocSbudget"></a>
<a id="tocsbudget"></a>

```json
{
  "amount": {
    "currency": "string",
    "value": "string"
  },
  "budgetStatus": "string"
}
```

A container for the budget details of a Promoted Listings campaign that uses the Cost Per Click (CPC) funding model.<br /><br /><span class="tablenote"><b>Note:</b> This container will only be returned for campaigns using the CPC funding model; it does not apply to the Cost Per Sale (CPS) funding model.</span>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|[Amount](#schemaamount)|false|none|The allocated budget amount for a CPC Promoted Listings campaign.|
|budgetStatus|string|false|none|The budget status for a CPC Promoted Listings campaign. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:BudgetStatusEnum'>eBay API documentation</a>|

<h2 id="tocS_BudgetRequest">BudgetRequest</h2>
<!-- backwards compatibility -->
<a id="schemabudgetrequest"></a>
<a id="schema_BudgetRequest"></a>
<a id="tocSbudgetrequest"></a>
<a id="tocsbudgetrequest"></a>

```json
{
  "amount": {
    "currency": "string",
    "value": "string"
  }
}
```

A container for the budget details of a Promoted Listings campaign that uses the Cost Per Click (CPC) funding model.<br /><br /><span class="tablenote"><b>Note:</b> This container will only be returned for campaigns using the CPC funding model; it does not apply to the Cost Per Sale (CPS) funding model.</span>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|[Amount](#schemaamount)|false|none|The allocated budget amount for a CPC Promoted Listings campaign.|

<h2 id="tocS_BulkAdResponse">BulkAdResponse</h2>
<!-- backwards compatibility -->
<a id="schemabulkadresponse"></a>
<a id="schema_BulkAdResponse"></a>
<a id="tocSbulkadresponse"></a>
<a id="tocsbulkadresponse"></a>

```json
{
  "responses": [
    {
      "adGroupId": "string",
      "adId": "string",
      "errors": [
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
      ],
      "href": "string",
      "listingId": "string",
      "statusCode": 0
    }
  ]
}
```

This type defines the fields for the create ads in bulk response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|responses|[[AdResponse](#schemaadresponse)]|false|none|This array displays the list of ads that were successfully created. For any ads that were not created successfully, the errors array may provide more detail about why creation of one or more ads failed.|

<h2 id="tocS_BulkAdUpdateResponse">BulkAdUpdateResponse</h2>
<!-- backwards compatibility -->
<a id="schemabulkadupdateresponse"></a>
<a id="schema_BulkAdUpdateResponse"></a>
<a id="tocSbulkadupdateresponse"></a>
<a id="tocsbulkadupdateresponse"></a>

```json
{
  "responses": [
    {
      "adId": "string",
      "errors": [
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
      ],
      "href": "string",
      "listingId": "string",
      "statusCode": 0
    }
  ]
}
```

A type that defines the fields for updated ads in the bulk response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|responses|[[AdUpdateResponse](#schemaadupdateresponse)]|false|none|A set of ad listings processed by the call.|

<h2 id="tocS_BulkAdUpdateStatusByListingIdResponse">BulkAdUpdateStatusByListingIdResponse</h2>
<!-- backwards compatibility -->
<a id="schemabulkadupdatestatusbylistingidresponse"></a>
<a id="schema_BulkAdUpdateStatusByListingIdResponse"></a>
<a id="tocSbulkadupdatestatusbylistingidresponse"></a>
<a id="tocsbulkadupdatestatusbylistingidresponse"></a>

```json
{
  "responses": [
    {
      "adGroupId": "string",
      "errors": [
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
      ],
      "href": "string",
      "listingId": "string",
      "statusCode": 0
    }
  ]
}
```

A type that defines the fields for the updated ad status in the bulk response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|responses|[[AdUpdateStatusByListingIdResponse](#schemaadupdatestatusbylistingidresponse)]|false|none|An array of processed ad listings in bulk.|

<h2 id="tocS_BulkAdUpdateStatusResponse">BulkAdUpdateStatusResponse</h2>
<!-- backwards compatibility -->
<a id="schemabulkadupdatestatusresponse"></a>
<a id="schema_BulkAdUpdateStatusResponse"></a>
<a id="tocSbulkadupdatestatusresponse"></a>
<a id="tocsbulkadupdatestatusresponse"></a>

```json
{
  "responses": [
    {
      "adId": "string",
      "errors": [
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
      ],
      "href": "string",
      "statusCode": 0
    }
  ]
}
```

A type that defines the fields for the updated ad status in the bulk response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|responses|[[AdUpdateStatusResponse](#schemaadupdatestatusresponse)]|false|none|An array of processed ad listings in bulk.|

<h2 id="tocS_BulkCreateAdRequest">BulkCreateAdRequest</h2>
<!-- backwards compatibility -->
<a id="schemabulkcreateadrequest"></a>
<a id="schema_BulkCreateAdRequest"></a>
<a id="tocSbulkcreateadrequest"></a>
<a id="tocsbulkcreateadrequest"></a>

```json
{
  "requests": [
    {
      "adGroupId": "string",
      "bidPercentage": "string",
      "listingId": "string"
    }
  ]
}
```

This type defines the fields for the create ads in bulk by listing IDs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requests|[[CreateAdRequest](#schemacreateadrequest)]|false|none|An array of listing IDs and their associated bid percentages, which the request uses to create ads in bulk. This request accepts both listing IDs, as generated by the Inventory API, and an item IDs, as used in the eBay Traditional API set (e.g., the Trading and Finding APIs).  <br><br><b>Maximum: </b> 500 IDs per call|

<h2 id="tocS_BulkCreateAdsByInventoryReferenceRequest">BulkCreateAdsByInventoryReferenceRequest</h2>
<!-- backwards compatibility -->
<a id="schemabulkcreateadsbyinventoryreferencerequest"></a>
<a id="schema_BulkCreateAdsByInventoryReferenceRequest"></a>
<a id="tocSbulkcreateadsbyinventoryreferencerequest"></a>
<a id="tocsbulkcreateadsbyinventoryreferencerequest"></a>

```json
{
  "requests": [
    {
      "adGroupId": "string",
      "bidPercentage": "string",
      "inventoryReferenceId": "string",
      "inventoryReferenceType": "string"
    }
  ]
}
```

This type defines the fields used to create ads in bulk by inventory reference IDs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requests|[[CreateAdsByInventoryReferenceRequest](#schemacreateadsbyinventoryreferencerequest)]|false|none|A list of inventory reference ID and inventory reference type pairs, and the bid percentage, which the call uses to create ads in bulk.|

<h2 id="tocS_BulkCreateAdsByInventoryReferenceResponse">BulkCreateAdsByInventoryReferenceResponse</h2>
<!-- backwards compatibility -->
<a id="schemabulkcreateadsbyinventoryreferenceresponse"></a>
<a id="schema_BulkCreateAdsByInventoryReferenceResponse"></a>
<a id="tocSbulkcreateadsbyinventoryreferenceresponse"></a>
<a id="tocsbulkcreateadsbyinventoryreferenceresponse"></a>

```json
{
  "responses": [
    {
      "adGroupId": "string",
      "ads": [
        {
          "adId": "string",
          "href": "string"
        }
      ],
      "errors": [
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
      ],
      "inventoryReferenceId": "string",
      "inventoryReferenceType": "string",
      "statusCode": 0
    }
  ]
}
```

This type defines the response fields used by the <b>bulkCreateAdsByInventoryReference</b> method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|responses|[[CreateAdsByInventoryReferenceResponse](#schemacreateadsbyinventoryreferenceresponse)]|false|none|This array displays the list of ads that were successfully created. For any ads that were not created successfully, the errors array may provide more detail about why creation of one or more ads failed.|

<h2 id="tocS_BulkCreateKeywordRequest">BulkCreateKeywordRequest</h2>
<!-- backwards compatibility -->
<a id="schemabulkcreatekeywordrequest"></a>
<a id="schema_BulkCreateKeywordRequest"></a>
<a id="tocSbulkcreatekeywordrequest"></a>
<a id="tocsbulkcreatekeywordrequest"></a>

```json
{
  "requests": [
    {
      "adGroupId": "string",
      "bid": {
        "currency": "string",
        "value": "string"
      },
      "keywordText": "string",
      "matchType": "string"
    }
  ]
}
```

A type that contains the fields for the bulk request to create keywords.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requests|[[CreateKeywordRequest](#schemacreatekeywordrequest)]|false|none|This array is used to pass in multiple keywords for one or more ad groups that belong to a campaign that uses the Cost Per Click (CPC) funding model. Up to {max value} keywords can be created with one call.|

<h2 id="tocS_BulkCreateKeywordResponse">BulkCreateKeywordResponse</h2>
<!-- backwards compatibility -->
<a id="schemabulkcreatekeywordresponse"></a>
<a id="schema_BulkCreateKeywordResponse"></a>
<a id="tocSbulkcreatekeywordresponse"></a>
<a id="tocsbulkcreatekeywordresponse"></a>

```json
{
  "responses": [
    {
      "adGroupId": "string",
      "errors": [
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
      ],
      "href": "string",
      "keywordId": "string",
      "keywordText": "string",
      "matchType": "string",
      "statusCode": 0
    }
  ]
}
```

A type that contains the response fields for the bulk request to create keywords.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|responses|[[KeywordResponse](#schemakeywordresponse)]|false|none|A list of keywords that have been processed by the request.|

<h2 id="tocS_BulkCreateNegativeKeywordRequest">BulkCreateNegativeKeywordRequest</h2>
<!-- backwards compatibility -->
<a id="schemabulkcreatenegativekeywordrequest"></a>
<a id="schema_BulkCreateNegativeKeywordRequest"></a>
<a id="tocSbulkcreatenegativekeywordrequest"></a>
<a id="tocsbulkcreatenegativekeywordrequest"></a>

```json
{
  "requests": [
    {
      "adGroupId": "string",
      "campaignId": "string",
      "negativeKeywordMatchType": "string",
      "negativeKeywordText": "string"
    }
  ]
}
```

A type that contains the fields for the bulk request to create negative keywords.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requests|[[CreateNegativeKeywordRequest](#schemacreatenegativekeywordrequest)]|false|none|This array is used to pass in multiple negative keywords for one or more ad groups that belong to a campaign that uses the Cost Per Click (CPC) funding model.|

<h2 id="tocS_BulkCreateNegativeKeywordResponse">BulkCreateNegativeKeywordResponse</h2>
<!-- backwards compatibility -->
<a id="schemabulkcreatenegativekeywordresponse"></a>
<a id="schema_BulkCreateNegativeKeywordResponse"></a>
<a id="tocSbulkcreatenegativekeywordresponse"></a>
<a id="tocsbulkcreatenegativekeywordresponse"></a>

```json
{
  "responses": [
    {
      "adGroupId": "string",
      "campaignId": "string",
      "errors": [
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
      ],
      "href": "string",
      "negativeKeywordId": "string",
      "negativeKeywordMatchType": "string",
      "negativeKeywordText": "string",
      "statusCode": 0
    }
  ]
}
```

A type that contains the response fields for the bulk request to create negative keywords.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|responses|[[NegativeKeywordResponse](#schemanegativekeywordresponse)]|false|none|A list of negative keywords that have been processed by the request.|

<h2 id="tocS_BulkDeleteAdRequest">BulkDeleteAdRequest</h2>
<!-- backwards compatibility -->
<a id="schemabulkdeleteadrequest"></a>
<a id="schema_BulkDeleteAdRequest"></a>
<a id="tocSbulkdeleteadrequest"></a>
<a id="tocsbulkdeleteadrequest"></a>

```json
{
  "requests": [
    {
      "listingId": "string"
    }
  ]
}
```

This type defines the fields that the call uses to remove ads in bulk.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requests|[[DeleteAdRequest](#schemadeleteadrequest)]|false|none|An array of the listing IDs that identify the ads to remove.|

<h2 id="tocS_BulkDeleteAdResponse">BulkDeleteAdResponse</h2>
<!-- backwards compatibility -->
<a id="schemabulkdeleteadresponse"></a>
<a id="schema_BulkDeleteAdResponse"></a>
<a id="tocSbulkdeleteadresponse"></a>
<a id="tocsbulkdeleteadresponse"></a>

```json
{
  "responses": [
    {
      "adId": "string",
      "errors": [
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
      ],
      "listingId": "string",
      "statusCode": 0
    }
  ]
}
```

This type defines a container that lists the ads that <b>bulkDeleteAdsByListingId</b> deleted.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|responses|[[DeleteAdResponse](#schemadeleteadresponse)]|false|none|An array of the ads that were deleted by the <b>bulkDeleteAdsByListingId</b> request, including information associated with each individual delete request.|

<h2 id="tocS_BulkDeleteAdsByInventoryReferenceRequest">BulkDeleteAdsByInventoryReferenceRequest</h2>
<!-- backwards compatibility -->
<a id="schemabulkdeleteadsbyinventoryreferencerequest"></a>
<a id="schema_BulkDeleteAdsByInventoryReferenceRequest"></a>
<a id="tocSbulkdeleteadsbyinventoryreferencerequest"></a>
<a id="tocsbulkdeleteadsbyinventoryreferencerequest"></a>

```json
{
  "requests": [
    {
      "inventoryReferenceId": "string",
      "inventoryReferenceType": "string"
    }
  ]
}
```

This type defines the request fields that <b>bulkDeleteAdsByInventoryReference</b> uses to delete ads in bulk.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requests|[[DeleteAdsByInventoryReferenceRequest](#schemadeleteadsbyinventoryreferencerequest)]|false|none|A list of inventory referenceID and inventory reference type pairs that specify the set of ads to remove in bulk.|

<h2 id="tocS_BulkDeleteAdsByInventoryReferenceResponse">BulkDeleteAdsByInventoryReferenceResponse</h2>
<!-- backwards compatibility -->
<a id="schemabulkdeleteadsbyinventoryreferenceresponse"></a>
<a id="schema_BulkDeleteAdsByInventoryReferenceResponse"></a>
<a id="tocSbulkdeleteadsbyinventoryreferenceresponse"></a>
<a id="tocsbulkdeleteadsbyinventoryreferenceresponse"></a>

```json
{
  "responses": [
    {
      "adIds": [
        "string"
      ],
      "errors": [
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
      ],
      "inventoryReferenceId": "string",
      "inventoryReferenceType": "string",
      "statusCode": 0
    }
  ]
}
```

This type defines a container that lists the ads that <b>bulkDeleteAdsByInventoryReference</b> deleted.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|responses|[[DeleteAdsByInventoryReferenceResponse](#schemadeleteadsbyinventoryreferenceresponse)]|false|none|An array of the ads that were deleted by the <b>bulkDeleteAdsByInventoryReference</b> request, including information associated with each individual delete request.|

<h2 id="tocS_BulkUpdateAdStatusByListingIdRequest">BulkUpdateAdStatusByListingIdRequest</h2>
<!-- backwards compatibility -->
<a id="schemabulkupdateadstatusbylistingidrequest"></a>
<a id="schema_BulkUpdateAdStatusByListingIdRequest"></a>
<a id="tocSbulkupdateadstatusbylistingidrequest"></a>
<a id="tocsbulkupdateadstatusbylistingidrequest"></a>

```json
{
  "requests": [
    {
      "adGroupId": "string",
      "adStatus": "string",
      "listingId": "string"
    }
  ]
}
```

A type that defines the fields for the <b>BulkUpdateAdStatusByListingId</b> request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requests|[[UpdateAdStatusByListingIdRequest](#schemaupdateadstatusbylistingidrequest)]|false|none|An array of listing IDs and bid percentages.|

<h2 id="tocS_BulkUpdateAdStatusRequest">BulkUpdateAdStatusRequest</h2>
<!-- backwards compatibility -->
<a id="schemabulkupdateadstatusrequest"></a>
<a id="schema_BulkUpdateAdStatusRequest"></a>
<a id="tocSbulkupdateadstatusrequest"></a>
<a id="tocsbulkupdateadstatusrequest"></a>

```json
{
  "requests": [
    {
      "adId": "string",
      "adStatus": "string"
    }
  ]
}
```

A type that defines the fields for the <b>BulkUpdateAdStatus</b> request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requests|[[UpdateAdStatusRequest](#schemaupdateadstatusrequest)]|false|none|An array of listing IDs and bid percentages.|

<h2 id="tocS_BulkUpdateAdsByInventoryReferenceResponse">BulkUpdateAdsByInventoryReferenceResponse</h2>
<!-- backwards compatibility -->
<a id="schemabulkupdateadsbyinventoryreferenceresponse"></a>
<a id="schema_BulkUpdateAdsByInventoryReferenceResponse"></a>
<a id="tocSbulkupdateadsbyinventoryreferenceresponse"></a>
<a id="tocsbulkupdateadsbyinventoryreferenceresponse"></a>

```json
{
  "responses": [
    {
      "ads": [
        {
          "adId": "string",
          "href": "string"
        }
      ],
      "errors": [
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
      ],
      "inventoryReferenceId": "string",
      "inventoryReferenceType": "string",
      "statusCode": 0
    }
  ]
}
```

A type that defines the fields for the <b>BulkUpdateAdStatusByInventoryReference</b> response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|responses|[[UpdateAdsByInventoryReferenceResponse](#schemaupdateadsbyinventoryreferenceresponse)]|false|none|A list of inventory references that were processed from the request.|

<h2 id="tocS_BulkUpdateKeywordRequest">BulkUpdateKeywordRequest</h2>
<!-- backwards compatibility -->
<a id="schemabulkupdatekeywordrequest"></a>
<a id="schema_BulkUpdateKeywordRequest"></a>
<a id="tocSbulkupdatekeywordrequest"></a>
<a id="tocsbulkupdatekeywordrequest"></a>

```json
{
  "requests": [
    {
      "bid": {
        "currency": "string",
        "value": "string"
      },
      "keywordId": "string",
      "keywordStatus": "string"
    }
  ]
}
```

A type that defines the fields for the <b>BulkUpdateKeyword</b> request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requests|[[UpdateKeywordByKeywordIdRequest](#schemaupdatekeywordbykeywordidrequest)]|false|none|Use this array to update the bid values and/or statuses of one or more existing keywords.|

<h2 id="tocS_BulkUpdateKeywordResponse">BulkUpdateKeywordResponse</h2>
<!-- backwards compatibility -->
<a id="schemabulkupdatekeywordresponse"></a>
<a id="schema_BulkUpdateKeywordResponse"></a>
<a id="tocSbulkupdatekeywordresponse"></a>
<a id="tocsbulkupdatekeywordresponse"></a>

```json
{
  "responses": [
    {
      "errors": [
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
      ],
      "keywordId": "string",
      "statusCode": 0
    }
  ]
}
```

A type that defines the fields for the <b>BulkUpdateKeyword</b> response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|responses|[[UpdateKeywordResponse](#schemaupdatekeywordresponse)]|false|none|A list of keywords that have been processed from the bulk request.|

<h2 id="tocS_BulkUpdateNegativeKeywordRequest">BulkUpdateNegativeKeywordRequest</h2>
<!-- backwards compatibility -->
<a id="schemabulkupdatenegativekeywordrequest"></a>
<a id="schema_BulkUpdateNegativeKeywordRequest"></a>
<a id="tocSbulkupdatenegativekeywordrequest"></a>
<a id="tocsbulkupdatenegativekeywordrequest"></a>

```json
{
  "requests": [
    {
      "negativeKeywordId": "string",
      "negativeKeywordStatus": "string"
    }
  ]
}
```

A type that defines the fields for the <b>BulkUpdateNegativeKeyword</b> request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requests|[[UpdateNegativeKeywordIdRequest](#schemaupdatenegativekeywordidrequest)]|false|none|An array to update the statuses of one or more existing negative keywords.|

<h2 id="tocS_BulkUpdateNegativeKeywordResponse">BulkUpdateNegativeKeywordResponse</h2>
<!-- backwards compatibility -->
<a id="schemabulkupdatenegativekeywordresponse"></a>
<a id="schema_BulkUpdateNegativeKeywordResponse"></a>
<a id="tocSbulkupdatenegativekeywordresponse"></a>
<a id="tocsbulkupdatenegativekeywordresponse"></a>

```json
{
  "responses": [
    {
      "errors": [
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
      ],
      "negativeKeywordId": "string",
      "statusCode": 0
    }
  ]
}
```

A type that defines the fields for the <b>BulkUpdateNegativeKeyword</b> response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|responses|[[UpdateNegativeKeywordResponse](#schemaupdatenegativekeywordresponse)]|false|none|A list of negative keywords that have been processed from the bulk request.|

<h2 id="tocS_Campaign">Campaign</h2>
<!-- backwards compatibility -->
<a id="schemacampaign"></a>
<a id="schema_Campaign"></a>
<a id="tocScampaign"></a>
<a id="tocscampaign"></a>

```json
{
  "alerts": [
    {
      "alertType": "string",
      "details": [
        {
          "aspect": {
            "key": "string",
            "value": "string"
          },
          "dimension": {
            "key": "string",
            "value": "string"
          }
        }
      ]
    }
  ],
  "budget": {
    "daily": {
      "amount": {
        "currency": "string",
        "value": "string"
      },
      "budgetStatus": "string"
    }
  },
  "campaignCriterion": {
    "autoSelectFutureInventory": true,
    "criterionType": "string",
    "selectionRules": [
      {
        "brands": [
          "string"
        ],
        "categoryIds": [
          "string"
        ],
        "categoryScope": "string",
        "listingConditionIds": [
          "string"
        ],
        "maxPrice": {
          "currency": "string",
          "value": "string"
        },
        "minPrice": {
          "currency": "string",
          "value": "string"
        }
      }
    ]
  },
  "campaignId": "string",
  "campaignName": "string",
  "campaignStatus": "string",
  "endDate": "string",
  "fundingStrategy": {
    "adRateStrategy": "string",
    "bidPercentage": "string",
    "dynamicAdRatePreferences": [
      {
        "adRateAdjustmentPercent": "string",
        "adRateCapPercent": "string"
      }
    ],
    "fundingModel": "string"
  },
  "marketplaceId": "string",
  "startDate": "string"
}
```

This type defines the fields that describe an ad campaign.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alerts|[[Alert](#schemaalert)]|false|none|This array contains alert messages for the campaign.|
|budget|[CampaignBudget](#schemacampaignbudget)|false|none|The allocated budget for the Cost Per Click (CPC) Promoted Listings campaign.<span class="tablenote"><b>Note:</b> This field will only be returned for campaigns using the CPC funding model; it does not apply to the Cost Per Sale (CPS) funding model.</span>|
|campaignCriterion|[CampaignCriterion](#schemacampaigncriterion)|false|none|The selection rules (criterion) used to select the listings for a campaign. If you populate the <b>campaignCriterion</b> object in your <b>createCampaign</b> request, ads for the campaign are created by rule for the listings that meet the criteria you specify, and these ads are associated with the campaign.<span class="tablenote"><b>Note:</b> This container is only returned for rules-based campaigns using the Cost Per Sale (CPS) funding model.</span>|
|campaignId|string|false|none|A unique eBay-assigned ID for a campaign. This ID is generated when a campaign is created.|
|campaignName|string|false|none|A seller-defined name for the campaign. This value must be unique for the seller. <p>You can use any alphanumeric characters in the name, except the less than (&lt;) or greater than (&gt;) characters.</p><b>Max length: </b>80 characters|
|campaignStatus|string|false|none|Indicates the status of the campaign, such as <code>RUNNING</code>, <code>PAUSED</code>, and <code>ENDED</code>. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:CampaignStatusEnum'>eBay API documentation</a>|
|endDate|string|false|none|The date and time the campaign ends, in UTC format (<code>yyyy-MM-ddThh:mm:ssZ</code>). If this field is omitted, the campaign will have no defined end date, and will not end until the seller makes a decision to end the campaign with an <a href="/api-docs/sell/marketing/resources/campaign/methods/endCampaign">endCampaign</a> call, or if they update the campaign at a later time with an end date.|
|fundingStrategy|[FundingStrategy](#schemafundingstrategy)|false|none|This container shows the funding model used for the campaign, and the default bid percentage for a campaign that uses the Cost Per Sale (CPS) funding model. <p>Currently, the supported funding models are <code>COST_PER_SALE</code> and <code>COST_PER_CLICK</code>.|
|marketplaceId|string|false|none|The ID of the eBay marketplace where the campaign is hosted. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/ba:MarketplaceIdEnum'>eBay API documentation</a>|
|startDate|string|false|none|The date and time the campaign starts, in UTC format (<code>yyyy-MM-ddThh:mm:ssZ</code>). For display purposes, convert this time into the local time of the seller.  <p>On the date specified, the service derives the keywords for each listing in the campaign, creates an ad for each listing, and associates each new ad with the campaign. The campaign starts after this process is completed. The amount of time it takes the service to start the campaign depends on the number of listings in the campaign. Call <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaign">getCampaign</a> to check the status of the campaign.</p>|

<h2 id="tocS_CampaignBudget">CampaignBudget</h2>
<!-- backwards compatibility -->
<a id="schemacampaignbudget"></a>
<a id="schema_CampaignBudget"></a>
<a id="tocScampaignbudget"></a>
<a id="tocscampaignbudget"></a>

```json
{
  "daily": {
    "amount": {
      "currency": "string",
      "value": "string"
    },
    "budgetStatus": "string"
  }
}
```

A type that defines the budget details for a Cost Per Click (CPC) Promoted Listings campaign.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|daily|[Budget](#schemabudget)|false|none|The daily budget limit for the Cost Per Click (CPC) Promoted Listings campaign.<br /><br /><i>Required if</i> the campaign's funding model is CPC.<br /><br />This will be a dollar value. All clicks using the keywords defined for the campaign will go towards expending the daily budget. Once the daily budget is exceeded for the campaign, all Promoted Listings under the campaign will be turned off until the next day.<br /><br /><b>Valid Values</b>:<ul><li><code>50.00</code></li><li><code>100.00</code></li></ul>|

<h2 id="tocS_CampaignBudgetRequest">CampaignBudgetRequest</h2>
<!-- backwards compatibility -->
<a id="schemacampaignbudgetrequest"></a>
<a id="schema_CampaignBudgetRequest"></a>
<a id="tocScampaignbudgetrequest"></a>
<a id="tocscampaignbudgetrequest"></a>

```json
{
  "daily": {
    "amount": {
      "currency": "string",
      "value": "string"
    }
  }
}
```

A container for the details of a Promoted Listings campaign that uses the Cost Per Click (CPC) funding model.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|daily|[BudgetRequest](#schemabudgetrequest)|false|none|The daily budget limit for a CPC Promoted Listings campaign.|

<h2 id="tocS_CampaignCriterion">CampaignCriterion</h2>
<!-- backwards compatibility -->
<a id="schemacampaigncriterion"></a>
<a id="schema_CampaignCriterion"></a>
<a id="tocScampaigncriterion"></a>
<a id="tocscampaigncriterion"></a>

```json
{
  "autoSelectFutureInventory": true,
  "criterionType": "string",
  "selectionRules": [
    {
      "brands": [
        "string"
      ],
      "categoryIds": [
        "string"
      ],
      "categoryScope": "string",
      "listingConditionIds": [
        "string"
      ],
      "maxPrice": {
        "currency": "string",
        "value": "string"
      },
      "minPrice": {
        "currency": "string",
        "value": "string"
      }
    }
  ]
}
```

This type defines the fields for specifying the criterion (selection rule) settings of an ad campaign. If you populate the campaignCriterion object in your <b>createCampaign</b> request, ads for the campaign are created by rule for the listings that meet the criteria you specify, and these ads are associated with the newly created campaign.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|autoSelectFutureInventory|boolean|false|none|A field used to indicate whether listings shall be automatically added to, or removed from, a Promoted Listings campaign based on the rules that have been configured for the campaign.<br /><br />If set to <code>true</code>, eBay adds all listings matching the campaign criterion to the campaign, including any new listings created from the items in a seller's inventory.<br /><br /><b>Default:</b> <code>false</code>|
|criterionType|string|false|none|This enum defines the criterion (selection rule) types. Currently, the only criterion type supported is <code>INVENTORY_PARTITION</code>, and you must specify this value if you manage your items with the Inventory API and you want to include items based on their inventory reference IDs.  <br><br>Do not include this field if you manage your listings with Trading API/legacy model. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:CriterionTypeEnum'>eBay API documentation</a>|
|selectionRules|[[SelectionRule](#schemaselectionrule)]|false|none|This container shows all of the rules/inclusion filters used to add listings to the campaign. For information on using the contained fields, see <a href= "/api-docs/sell/static/marketing/using-the-selectionrules-container.html#Campaign ">Promoted Listing campaigns</a>.|

<h2 id="tocS_CampaignPagedCollectionResponse">CampaignPagedCollectionResponse</h2>
<!-- backwards compatibility -->
<a id="schemacampaignpagedcollectionresponse"></a>
<a id="schema_CampaignPagedCollectionResponse"></a>
<a id="tocScampaignpagedcollectionresponse"></a>
<a id="tocscampaignpagedcollectionresponse"></a>

```json
{
  "campaigns": [
    {
      "alerts": [
        {
          "alertType": "string",
          "details": [
            {
              "aspect": {
                "key": "string",
                "value": "string"
              },
              "dimension": {
                "key": "string",
                "value": "string"
              }
            }
          ]
        }
      ],
      "budget": {
        "daily": {
          "amount": {
            "currency": "string",
            "value": "string"
          },
          "budgetStatus": "string"
        }
      },
      "campaignCriterion": {
        "autoSelectFutureInventory": true,
        "criterionType": "string",
        "selectionRules": [
          {
            "brands": [
              "string"
            ],
            "categoryIds": [
              "string"
            ],
            "categoryScope": "string",
            "listingConditionIds": [
              "string"
            ],
            "maxPrice": {
              "currency": "string",
              "value": "string"
            },
            "minPrice": {
              "currency": "string",
              "value": "string"
            }
          }
        ]
      },
      "campaignId": "string",
      "campaignName": "string",
      "campaignStatus": "string",
      "endDate": "string",
      "fundingStrategy": {
        "adRateStrategy": "string",
        "bidPercentage": "string",
        "dynamicAdRatePreferences": [
          {
            "adRateAdjustmentPercent": "string",
            "adRateCapPercent": "string"
          }
        ],
        "fundingModel": "string"
      },
      "marketplaceId": "string",
      "startDate": "string"
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

This type defines the fields that paginate the campaigns returned by the request. The entire <i>result set</i> consists of 0 or more sequenced <i>response pages</i>, where each page consists of 0 or more items from the complete result set.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|campaigns|[[Campaign](#schemacampaign)]|false|none|This array contains all of the seller's campaign that match the request criteria.|
|href|string|false|none|The URI of the current page of results from the result set.|
|limit|integer(int32)|false|none|The number of items returned on a single page from the result set. This value can be set in the request with the <b>limit</b> query parameter.|
|next|string|false|none|The call URI that can be used to retrieve the next page in the result set. This value is returned only if there is an additional page of results to display from the result set. <br><br><b>Max length</b>: 2048|
|offset|integer(int32)|false|none|The number of results skipped in the result set before listing the first returned result. This value can be set in the request with the <b>offset</b> query parameter. <p class="tablenote"><strong>Note: </strong>The items in a paginated result set use a zero-based list where the first item in the list has an offset of <code>0</code>.</p>|
|prev|string|false|none|The call URI that can be used to retrieve the previous page in the result set. Basically, all of the request parameters will remain the same except the offset value, which will be decreased to retrieve the previous page of results. <br><br><b>Max length</b>: 2048|
|total|integer(int32)|false|none|The total number of campaigns retrieved in the result set.  <br><br>If no campaigns are found, this field is returned with a value of <code>0</code>.|

<h2 id="tocS_Campaigns">Campaigns</h2>
<!-- backwards compatibility -->
<a id="schemacampaigns"></a>
<a id="schema_Campaigns"></a>
<a id="tocScampaigns"></a>
<a id="tocscampaigns"></a>

```json
{
  "campaigns": [
    {
      "alerts": [
        {
          "alertType": "string",
          "details": [
            {
              "aspect": {
                "key": "string",
                "value": "string"
              },
              "dimension": {
                "key": "string",
                "value": "string"
              }
            }
          ]
        }
      ],
      "budget": {
        "daily": {
          "amount": {
            "currency": "string",
            "value": "string"
          },
          "budgetStatus": "string"
        }
      },
      "campaignCriterion": {
        "autoSelectFutureInventory": true,
        "criterionType": "string",
        "selectionRules": [
          {
            "brands": [
              "string"
            ],
            "categoryIds": [
              "string"
            ],
            "categoryScope": "string",
            "listingConditionIds": [
              "string"
            ],
            "maxPrice": {
              "currency": "string",
              "value": "string"
            },
            "minPrice": {
              "currency": "string",
              "value": "string"
            }
          }
        ]
      },
      "campaignId": "string",
      "campaignName": "string",
      "campaignStatus": "string",
      "endDate": "string",
      "fundingStrategy": {
        "adRateStrategy": "string",
        "bidPercentage": "string",
        "dynamicAdRatePreferences": [
          {
            "adRateAdjustmentPercent": "string",
            "adRateCapPercent": "string"
          }
        ],
        "fundingModel": "string"
      },
      "marketplaceId": "string",
      "startDate": "string"
    }
  ]
}
```

This type contains a list of campaigns.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|campaigns|[[Campaign](#schemacampaign)]|false|none|This is an array of one or campaigns that match the listing or inventory item group specified in the request.|

<h2 id="tocS_CloneCampaignRequest">CloneCampaignRequest</h2>
<!-- backwards compatibility -->
<a id="schemaclonecampaignrequest"></a>
<a id="schema_CloneCampaignRequest"></a>
<a id="tocSclonecampaignrequest"></a>
<a id="tocsclonecampaignrequest"></a>

```json
{
  "campaignName": "string",
  "endDate": "string",
  "fundingStrategy": {
    "adRateStrategy": "string",
    "bidPercentage": "string",
    "dynamicAdRatePreferences": [
      {
        "adRateAdjustmentPercent": "string",
        "adRateCapPercent": "string"
      }
    ],
    "fundingModel": "string"
  },
  "startDate": "string"
}
```

This type defines the fields needed for a clone-campaign request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|campaignName|string|false|none|A seller-defined name for the newly-cloned campaign. This value must be unique for the seller. <p>You can use any alphanumeric characters in the name, except the less than (&lt;) or greater than (&gt;) characters.</p><b>Max length: </b>80 characters|
|endDate|string|false|none|The date and time the campaign ends, in UTC format (<code>yyyy-MM-ddThh:mm:ssZ</code>). If this field is omitted, the campaign will have no defined end date, and will not end until the seller makes a decision to end the campaign with an <a href="/api-docs/sell/marketing/resources/campaign/methods/endCampaign">endCampaign</a> call, or if they update the campaign at a later time with an end date.|
|fundingStrategy|[FundingStrategy](#schemafundingstrategy)|false|none|This container is used to set the funding model and default bid percentage for the campaign to be cloned.|
|startDate|string|false|none|The date and time the cloned campaign starts, in UTC format (<code>yyyy-MM-ddThh:mm:ssZ</code>). For display purposes, convert this time into the local time of the seller.  <p>On the date specified, the service derives the keywords for each listing in the campaign, creates an ad for each listing, and associates each new ad with the campaign. The campaign starts after this process is completed. The amount of time it takes the service to start the campaign depends on the number of listings in the campaign. Call <b>getCampaign</b> to check the status of the campaign.</p>|

<h2 id="tocS_CouponConfiguration">CouponConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemacouponconfiguration"></a>
<a id="schema_CouponConfiguration"></a>
<a id="tocScouponconfiguration"></a>
<a id="tocscouponconfiguration"></a>

```json
{
  "couponCode": "string",
  "couponType": "string",
  "maxCouponRedemptionPerUser": 0
}
```

This container defines a coded coupon promotion. It is required if the promotion type is CODED_COUPON.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|couponCode|string|false|none|A unique code that buyers can use during checkout to receive a discount. The code must be unique across eBay. <br><br>The code must be from 8-15 alphanumeric characters and can contain no more than two dashes ( - ).<br><br>This is required when the promotion type is CODED_COUPON.|
|couponType|string|false|none|This indicates the type of Coded Coupon promotion, and is required when the promotion type is <b>CODED_COUPON</b>.<br><br>Supported types:<ul><li><b>PRIVATE_SINGLE_SELLER_COUPON:</b> Anyone can use and share the coupon code, but it isn't posted on eBay.</li><li><b>PUBLIC_SINGLE_SELLER_COUPON:</b> Anyone can find the coupon code on eBay and use it.</li></ul> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/sme:CouponTypeEnum'>eBay API documentation</a>|
|maxCouponRedemptionPerUser|integer(int32)|false|none|This sets the limit on the number of times a buyer can use this coupon. The range of values is 1-10. If no value is provided, a buyer can use the coupon an unlimited number of times.|

<h2 id="tocS_CreateAdGroupRequest">CreateAdGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateadgrouprequest"></a>
<a id="schema_CreateAdGroupRequest"></a>
<a id="tocScreateadgrouprequest"></a>
<a id="tocscreateadgrouprequest"></a>

```json
{
  "defaultBid": {
    "currency": "string",
    "value": "string"
  },
  "name": "string"
}
```

A type that defines the fields for the <b>CreateAdGroup</b> request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|defaultBid|[Amount](#schemaamount)|false|none|A bid amount that applies to all of the keywords in an ad group that do not have individual bids.|
|name|string|false|none|The seller-defined name of the ad group.|

<h2 id="tocS_CreateAdRequest">CreateAdRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateadrequest"></a>
<a id="schema_CreateAdRequest"></a>
<a id="tocScreateadrequest"></a>
<a id="tocscreateadrequest"></a>

```json
{
  "adGroupId": "string",
  "bidPercentage": "string",
  "listingId": "string"
}
```

This type defines the fields for the create ad request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adGroupId|string|false|none|A unique eBay-assigned ID for an ad group in a campaign that uses the Cost Per Click (CPC) funding model. <p><i>Required if</i> the campaign's funding model is Cost Per Click (CPC).</p><p>Create an ad group using the <a href="/api-docs/sell/marketing/resources/adgroup/methods/createAdGroup">createAdGroup</a> method.</p><p>Specify the campaign to associate the ad group with using the <b>campaign_id</b> path parameter. </p><span class="tablenote"><b>Note:</b> You can call the  <a href="/api-docs/sell/marketing/resources/adgroup/methods/getAdGroups">getAdGroups</a> method to retrieve the ad group IDs for a seller.</span>|
|bidPercentage|string|false|none|The user-defined <b>bid percentage</b> (also known as the <i>ad rate</i>) sets the level that eBay increases the visibility in search results for the associated listing. The higher the <b>bidPercentage</b> value, the more eBay promotes the listing.<br><br><i>Required if</i> the campaign's funding model is Cost Per Sale (CPS).  <br><br>The value specified here is also used to calculate the Promoted Listings fee. This percentage value is multiplied by the final sales price to determine the fee. <br><br>The Promoted Listings fee is determined at the time the transaction completes and the seller is assessed the fee only when an item sells through a Promoted Listings ad campaign. <br><br>The <b>bidPercentage</b> is a single precision value that is guided by the following rules: <ul><li>These values are <b>valid</b>:<br>&nbsp;&nbsp;&nbsp;<code>4.1</code>,&nbsp;&nbsp;&nbsp;<code>5.0</code>, &nbsp;&nbsp;&nbsp;<code>5.5</code>, ...</li>  <li>These values are <b>not valid</b>:<br /> &nbsp;&nbsp;&nbsp;<code>0.01</code>, &nbsp;&nbsp;&nbsp;<code>10.75</code>, &nbsp;&nbsp;&nbsp;<code>99.99</code>,<br /> &nbsp;&nbsp;&nbsp;and so on.</li></ul>This is default bid percentage for the campaigns using the Cost Per Sale (CPS) funding model, and this value will be overridden by any ads in the campaign that have their own set bid percentages.<br /><br />If a bid percentage is not provided for an ad, eBay uses the default bid percentage of the associated campaign.<br /><br /><b>Minimum value:</b> 2.0 <br><b>Maximum value:</b> 100.0|
|listingId|string|false|none|A unique eBay-assigned ID for a listing that is generated when the listing is created.  <p class="tablenote"><b>Note:</b> This field accepts listing IDs, as generated by the Inventory API, and item IDs, as used in the eBay Traditional API set (e.g., the Trading and Finding APIs).</p>|

<h2 id="tocS_CreateAdsByInventoryReferenceRequest">CreateAdsByInventoryReferenceRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateadsbyinventoryreferencerequest"></a>
<a id="schema_CreateAdsByInventoryReferenceRequest"></a>
<a id="tocScreateadsbyinventoryreferencerequest"></a>
<a id="tocscreateadsbyinventoryreferencerequest"></a>

```json
{
  "adGroupId": "string",
  "bidPercentage": "string",
  "inventoryReferenceId": "string",
  "inventoryReferenceType": "string"
}
```

This type defines the fields needed to create ads by inventory reference ID request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adGroupId|string|false|none|<span class="tablenote"><b>Note:</b> This field is not currently in use. Ad groups are only applicable to Promoted Listings Advanced (PLA) ad campaigns that use the Cost Per Click (CPC) funding model. See <a href="/api-docs/sell/static/marketing/pl-overview.html#funding-model">Funding Models</a> in the <i>Promoted Listings Playbook</i> for more information.</span>|
|bidPercentage|string|false|none|The user-defined <b>bid percentage</b> (also known as the <i>ad rate</i>) sets the level that eBay increases the visibility in search results for the associated listing. The higher the <b>bidPercentage</b> value, the more eBay promotes the listing.<br /><br /><i>Required if</i> the campaign's funding model is Cost Per Sale (CPS).<br /><br />The value specified here is also used to calculate the Promoted Listings fee. This percentage value is multiplied by the final sales price to determine the fee.<br /><br />The Promoted Listings fee is determined at the time the transaction completes and the seller is assessed the fee only when an item sells through a Promoted Listings ad campaign.<br /><br />The <b>bidPercentage</b> is a single precision value that is guided by the following rules: <ul><li>These values are <b>valid</b>:<br>&nbsp;&nbsp;&nbsp;<code>4.1</code>, &nbsp;&nbsp;&nbsp;<code>5.0</code>,&nbsp;&nbsp;&nbsp;<code>5.5</code>, ...</li>  <li>These values are <b>not valid</b>:<br /> &nbsp;&nbsp;&nbsp;<code>0.01</code>, &nbsp;&nbsp;&nbsp;<code>10.75</code>, &nbsp;&nbsp;&nbsp;<code>99.99</code>,<br /> &nbsp;&nbsp;&nbsp;and so on.</li></ul>This is default bid percentage for the campaigns using the Cost Per Sale (CPS) funding model, and this value will be overridden by any ads in the campaign that have their own set bid percentages.<br /><br />If a bid percentage is not provided for an ad, eBay uses the default bid percentage of the associated campaign.<br /><br /><b>Minimum value:</b> 2.0 <br><b>Maximum value:</b> 100.0|
|inventoryReferenceId|string|false|none|An ID that identifies a single-item listing or multiple-variation listing that is managed with the <a href="/api-docs/sell/inventory/resources/methods" title="Inventory API Reference">Inventory API</a>. <p>The <i>inventory reference ID</i> is a seller-defined value that can be either an <b>SKU</b> for a single-item listing or an <b>inventoryItemGroupKey</b> for a multiple-value listing.</p>  <p>An <i>inventoryItemGroupKey</i> is a value that the seller defines to indicate a listing that's the parent of an inventory item group (a multiple-variation listing, such as a listing for a shirt that's available in multiple sizes and colors).</p>  <p>You must always specify both an <b>inventoryReferenceId</b> and an <b>inventoryReferenceType</b> to indicate an item that's managed with the Inventory API.</p>|
|inventoryReferenceType|string|false|none|Indicates the type of item the <b>inventoryReferenceId</b> references. The item can be either an <code>INVENTORY_ITEM</code> or <code>INVENTORY_ITEM_GROUP</code>. <p>You must always pair an <b>inventoryReferenceId</b> with and <b>inventoryReferenceType</b>.</p> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:InventoryReferenceTypeEnum'>eBay API documentation</a>|

<h2 id="tocS_CreateAdsByInventoryReferenceResponse">CreateAdsByInventoryReferenceResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateadsbyinventoryreferenceresponse"></a>
<a id="schema_CreateAdsByInventoryReferenceResponse"></a>
<a id="tocScreateadsbyinventoryreferenceresponse"></a>
<a id="tocscreateadsbyinventoryreferenceresponse"></a>

```json
{
  "adGroupId": "string",
  "ads": [
    {
      "adId": "string",
      "href": "string"
    }
  ],
  "errors": [
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
  ],
  "inventoryReferenceId": "string",
  "inventoryReferenceType": "string",
  "statusCode": 0
}
```

This type defines the fields returned when you create an ad by inventory reference ID.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adGroupId|string|false|none|A unique eBay-assigned ID for an ad group in a Promoted Listings Advanced (PLA) campaign that uses the Cost Per Click (CPC) funding model.<span class="tablenote"><b>Note:</b> This field will always be returned for campaigns that use the CPC funding model. It will not be returned for campaigns that use the Cost Per Sale (CPS) funding model.</span>|
|ads|[[AdReference](#schemaadreference)]|false|none|A list of ad IDs. An ad ID is generated for each successfully created ad.|
|errors|[[Error](#schemaerror)]|false|none|An array of errors or warnings associated with the create-ads request.|
|inventoryReferenceId|string|false|none|An ID that identifies a single-item listing or multiple-variation listing that is managed with the <a href="/api-docs/sell/inventory/resources/methods" title="Inventory API Reference">Inventory API</a>. <p>The <i>inventory reference ID</i> is a seller-defined value that can be either an <b>SKU</b> for a single-item listing or an <b>inventoryItemGroupKey</b> for a multiple-value listing.</p>|
|inventoryReferenceType|string|false|none|Indicates the type of item the <b>inventoryReferenceId</b> references. The item can be either an <code>INVENTORY_ITEM</code> or <code>INVENTORY_ITEM_GROUP</code>. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:InventoryReferenceTypeEnum'>eBay API documentation</a>|
|statusCode|integer(int32)|false|none|An HTTP status code that indicates the response-status of the request. Check this code to see if the ads were successfuly created.|

<h2 id="tocS_CreateCampaignRequest">CreateCampaignRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatecampaignrequest"></a>
<a id="schema_CreateCampaignRequest"></a>
<a id="tocScreatecampaignrequest"></a>
<a id="tocscreatecampaignrequest"></a>

```json
{
  "budget": {
    "daily": {
      "amount": {
        "currency": "string",
        "value": "string"
      }
    }
  },
  "campaignCriterion": {
    "autoSelectFutureInventory": true,
    "criterionType": "string",
    "selectionRules": [
      {
        "brands": [
          "string"
        ],
        "categoryIds": [
          "string"
        ],
        "categoryScope": "string",
        "listingConditionIds": [
          "string"
        ],
        "maxPrice": {
          "currency": "string",
          "value": "string"
        },
        "minPrice": {
          "currency": "string",
          "value": "string"
        }
      }
    ]
  },
  "campaignName": "string",
  "endDate": "string",
  "fundingStrategy": {
    "adRateStrategy": "string",
    "bidPercentage": "string",
    "dynamicAdRatePreferences": [
      {
        "adRateAdjustmentPercent": "string",
        "adRateCapPercent": "string"
      }
    ],
    "fundingModel": "string"
  },
  "marketplaceId": "string",
  "startDate": "string"
}
```

This type defines the fields needed to create a campaign. To create a campaign, you need to specify a name, start and end dates, funding, marketplace, and optionally the criterion (selection rules).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|budget|[CampaignBudgetRequest](#schemacampaignbudgetrequest)|false|none|The allocated daily budget for the Cost Per Click (CPC) Promoted Listings campaign.<br /><br /><i>Required if</i> the campaign funding model is CPC.|
|campaignCriterion|[CampaignCriterion](#schemacampaigncriterion)|false|none|This container is used if the seller wishes to create one or more rules for a rules-based campaign. If you populate the <b>campaignCriterion</b> object in your <b>createCampaign</b> request, ads for the campaign are created by rule for the listings that meet the criteria you specify, and these ads are associated with the campaign to be created.|
|campaignName|string|false|none|A seller-defined name for the campaign. This value must be unique for the seller. <p>You can use any alphanumeric characters in the name, except the less than (&lt;) or greater than (&gt;) characters.</p><b>Max length: </b>80 characters|
|endDate|string|false|none|The date and time the campaign ends, in UTC format (<code>yyyy-MM-ddThh:mm:ssZ</code>). If this field is omitted, the campaign will have no defined end date, and will not end until the seller makes a decision to end the campaign with an <a href="/api-docs/sell/marketing/resources/campaign/methods/endCampaign">endCampaign</a> call, or if they update the campaign at a later time with an end date.|
|fundingStrategy|[FundingStrategy](#schemafundingstrategy)|false|none|This container is used to set the funding model and default bid percentage for a Cost Per Sale (CPS) campaign.|
|marketplaceId|string|false|none|The ID of the eBay marketplace where the campaign is hosted. See the <b>MarketplaceIdEnum</b> type to get the appropriate enumeration value for the listing marketplace. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/ba:MarketplaceIdEnum'>eBay API documentation</a>|
|startDate|string|false|none|The date and time the campaign starts, in UTC format (<code>yyyy-MM-ddThh:mm:ssZ</code>). For display purposes, convert this time into the local time of the seller.  <p>On the date specified, the service derives the keywords for each listing in the campaign, creates an ad for each listing, and associates each new ad with the campaign. The campaign starts after this process is completed. The amount of time it takes the service to start the campaign depends on the number of listings in the campaign. Call <b>getCampaign</b> to check the status of the campaign.</p>|

<h2 id="tocS_CreateKeywordRequest">CreateKeywordRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatekeywordrequest"></a>
<a id="schema_CreateKeywordRequest"></a>
<a id="tocScreatekeywordrequest"></a>
<a id="tocscreatekeywordrequest"></a>

```json
{
  "adGroupId": "string",
  "bid": {
    "currency": "string",
    "value": "string"
  },
  "keywordText": "string",
  "matchType": "string"
}
```

A type that defines the fields for the <b>CreateKeyword</b> request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adGroupId|string|false|none|This adGroupId is created when an ad group is first created and associated with a campaign. This is the ad group that the corresponding keyword will be added to. This ad group must be a part of the campaign that is specified in the call URI.<br /><br /><span class="tablenote"><b>Note:</b> You can call the  <a href="/api-docs/sell/marketing/resources/adgroup/methods/getAdGroups">getAdGroups</a> method to retrieve the ad group IDs for a seller, and <a href="/api-docs/sell/marketing/resources/keywords/methods/getKeywords">getKeywords</a> to retrieve the keyword IDs for a seller's keywords.</span>|
|bid|[Amount](#schemaamount)|false|none|This container is used to set the bid for the keyword. Each time a listing is retrieved in search results using this keyword and clicked on, the seller will be charged this amount. Each click goes toward the daily budget set up for the CPC campaign. If the bid is not provided, then the default bid associated with the ad group is used.<br /><br /><span class="tablenote"><b>Note:</b> You can call the  <a href="/api-docs/sell/marketing/resources/adgroup/methods/suggestBids">suggestBids</a> method to retrieve the suggested bids for keywords.</span>|
|keywordText|string|false|none|Input the keyword into this field.|
|matchType|string|false|none|A field that defines the match type for the keyword.<br /><br /><b>Valid Values:</b><ul><li><code>BROAD</code></li><li><code>EXACT</code></li><li><code>PHRASE</code></li></ul> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:MatchTypeEnum'>eBay API documentation</a>|

<h2 id="tocS_CreateNegativeKeywordRequest">CreateNegativeKeywordRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatenegativekeywordrequest"></a>
<a id="schema_CreateNegativeKeywordRequest"></a>
<a id="tocScreatenegativekeywordrequest"></a>
<a id="tocscreatenegativekeywordrequest"></a>

```json
{
  "adGroupId": "string",
  "campaignId": "string",
  "negativeKeywordMatchType": "string",
  "negativeKeywordText": "string"
}
```

A type that defines the fields for the <b>CreateNegativeKeyword</b> request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adGroupId|string|false|none|This adGroupId is created when an ad group is first created and associated with a campaign. This is the ad group to which the corresponding negative keyword will be added.<br /><br /><span class="tablenote"><b>Note:</b> You can call the  <a href="/api-docs/sell/marketing/resources/adgroup/methods/getAdGroups">getAdGroups</a> method to retrieve the ad group IDs for a seller.</span><br /><br /><i>Required if</i> the negative keyword is being created at the ad group level.|
|campaignId|string|false|none|A unique eBay-assigned ID for a campaign. This ID is generated when a campaign is created.<br /><br /><i>Required if</i> the negative keyword is being created at the ad group level.|
|negativeKeywordMatchType|string|false|none|A field that defines the match type for the negative keyword.<br /><br /><span class="tablenote"><span style="color:#004680"><strong>Note:</strong></span> Broad matching of negative keywords is not currently supported.</span><br /><b>Valid Values:</b><ul><li><code>EXACT</code></li><li><code>PHRASE</code></li></ul> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:NegativeKeywordMatchTypeEnum'>eBay API documentation</a>|
|negativeKeywordText|string|false|none|The negative keyword text.|

<h2 id="tocS_CreateReportTask">CreateReportTask</h2>
<!-- backwards compatibility -->
<a id="schemacreatereporttask"></a>
<a id="schema_CreateReportTask"></a>
<a id="tocScreatereporttask"></a>
<a id="tocscreatereporttask"></a>

```json
{
  "additionalRecords": [
    "string"
  ],
  "campaignIds": [
    "string"
  ],
  "dateFrom": "string",
  "dateTo": "string",
  "dimensions": [
    {
      "annotationKeys": [
        "string"
      ],
      "dimensionKey": "string"
    }
  ],
  "fundingModels": [
    "string"
  ],
  "inventoryReferences": [
    {
      "inventoryReferenceId": "string",
      "inventoryReferenceType": "string"
    }
  ],
  "listingIds": [
    "string"
  ],
  "marketplaceId": "string",
  "metricKeys": [
    "string"
  ],
  "reportFormat": "string",
  "reportType": "string"
}
```

This type defines the rules that govern the generation of a report task and the criteria that's used to create the report. The report-generation rules include the starting and ending dates for the report. Report-task criteria includes the report dimensions, metrics, listings covered in the report, and so on. For information on the required and optional fields for each report type, see <a href="/api-docs/sell/static/marketing/pl-reports.html">Promoted Listings reporting</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalRecords|[string]|false|none|A list of additional records that shall be included in the report, such as non-performing data.<br /><br /><span class="tablenote"><span style="color:#004680"><strong>Note:</strong></span> Additional records are only applicable to Promoted Listings Advanced (PLA) campaigns that use the Cost Per Click (CPC) funding model.</span><br /><b>Valid Value:</b> <code>NON_PERFORMING_DATA</code>|
|campaignIds|[string]|false|none|A list of campaign IDs to be included in the report task. Call <b>getCampaigns</b> to get a list of the current campaign IDs for a seller.<br /><br />For Promoted Listings Standard (PLS) sellers, this field is required if the <b>reportType</b> is set to <code>CAMPAIGN_PERFORMANCE_REPORT</code> or <code>CAMPAIGN_PERFORMANCE_SUMMARY_REPORT</code>.<br /><br />For Promoted Listings Advanced (PLA) sellers, leave this request field blank to retrieve the details for all campaigns associated with your account, or specify the campaign IDs for which you would like to retrieve the campaign-specific details.<br /><br /><span class="tablenote"><span style="color:#004680"><strong>Note:</strong></span> There is a maximum data limit that cannot be exceeded when generating reports. If this threshold is exceeded, the report will fail. Refer to <a href="/api-docs/sell/static/marketing/pl-reports.html#creation">Promoted Listings reporting</a> in the Selling Integration Guide for details.</span><br /><br /><b>Maximum:</b><ul><li>25 IDs for PLS</li><li>1,000 IDs for PLA</li></ul>|
|dateFrom|string|false|none|The date defining the start of the timespan covered by the report.<br /><br />Format the timestamp as an <a href="https://www.iso.org/iso-8601-date-and-time-format.html" title="https://www.iso.org" target="_blank">ISO 8601</a> string, which is based on the 24-hour Coordinated Universal Time (UTC) clock with local offset.<br /><br /><span class="tablenote"><span style="color:#004680"><strong>Note:</strong></span> The date specified cannot be a future date.</span><br /><br /><b>Format:</b> <code>[YYYY]-[MM]-[DD]T[hh]:[mm]:[ss].[sss]Z</code><br /><br /><b>Example:</b> <code>2021-03-15T13:00:00-07:00</code>|
|dateTo|string|false|none|The date defining the end of the timespan covered by the report.<br /><br />As with the <b>dateFrom</b> field, format the timestamp as an <a href="https://www.iso.org/iso-8601-date-and-time-format.html" title="https://www.iso.org" target="_blank">ISO 8601</a> string.<br /><br /><span class="tablenote"><span style="color:#004680"><strong>Note:</strong></span> The date specified cannot be a future date. Additionally, the time specified must be a later time than that specified in the <b>dateFrom</b> field.</span><br /><br /><b>Format:</b> <code>[YYYY]-[MM]-[DD]T[hh]:[mm]:[ss].[sss]Z</code><br /><br /><b>Example:</b> <code>2021-03-17T13:00:00-07:00</code>|
|dimensions|[[Dimension](#schemadimension)]|false|none|The list of the dimensions applied to the report.  <p>A dimension is an attribute to which the report data applies. For example, if you set <b>dimensionKey</b> to <code>campaign_id</code> in a Campaign Performance Report, the data will apply to the entire ad campaign. For information on the dimensions and how to specify them, see <a href="/api-docs/sell/static/marketing/pl-reports.html">Promoted Listings reporting</a>.</p>|
|fundingModels|[string]|false|none|The funding model for the campaign that shall be included in the report.<br /><br /><span class="tablenote"><span style="color:#004680"><strong>Note:</strong></span> The default funding model for Promoted Listings reports is <code>COST_PER_SALE</code>.</span><br /><br /><span class="tablenote"><span style="color:#004680"><strong>Note:</strong></span> Multiple value support for the <b>fundingModels</b> array has been deprecated. See <a href ="/develop/apis/api-deprecation-status ">API&nbsp;Deprecation&nbsp;Status</a> for information.</span><br /><br /><b>Valid Values:</b><ul><li><code>COST_PER_SALE</code></li><li><code>COST_PER_CLICK</code></li></ul><i>Required if</i> the campaign funding model is Cost Per Click (CPC).|
|inventoryReferences|[[InventoryReference](#schemainventoryreference)]|false|none|You can use this field to supply an array of items to include in the report if you manage your inventory with the <a href="/api-docs/sell/inventory/resources/methods">Inventory API</a>.  <br><br>This field is mutually exclusive with the <b>listingIds</b> field; if you populate this field, <i>do not</i> populate the <b>listingIds</b> field.  <br><br>An inventory reference identifies an item in your inventory using a pair of values, where the <b>inventoryReferenceId</b> can be either a seller-defined <b>SKU</b> value or an <b>inventoryItemGroupKey</b>, where an <b>inventoryItemGroupKey</b> is seller-defined ID for an inventory item group (a multiple-variation listing). <br><br>Couple the <b>inventoryReferenceId</b> with an <b>inventoryReferenceType</b> identifier to fully identify an item in your inventory.  <br><br><b>Maximum: </b> 500 items <br><br><i>Required if </i> you do not supply an array of <b>listingId</b> values or if you set <b>reportType</b> to <code>INVENTORY_PERFORMANCE_REPORT</code>.|
|listingIds|[string]|false|none|Use this field to supply an array of listing IDs you want to include in the report.<br><br>A listing ID is the eBay listing identifier that is generated when the listing is created. This field accepts listing ID values generated with both the Inventory API and the eBay Traditional APIs, such as the Trading and Finding APIs.<br><br><span class="tablenote"><span style="color:#FF0000"><strong>Important:</strong></span> This field is mutually exclusive with the <b>inventoryReferences</b> field; if you populate this field, <i>do not</i> populate the <b>inventoryReferences</b> field.</span><br /><br />For Promoted Listings Standard (PLS) sellers, this field is required if you do not supply an array of <b>inventoryReferences</b> values or if you set the <b>reportType</b> to <code>LISTING_PERFORMANCE_REPORT</code>.<br /><br />For Promoted Listings Advanced (PLA) sellers, leave this field blank to retrieve the details for all listings associated with the specified campaign IDs (or all campaigns associated with your account, if no campaign IDs are specified), or specify the listing IDs for which you would like to retrieve the listing-specific details.<br /><br /><span class="tablenote"><span style="color:#004680"><strong>Note:</strong></span> There is a maximum data limit that cannot be exceeded when generating reports. If this threshold is exceeded, the report will fail. Refer to <a href="/api-docs/sell/static/marketing/pl-reports.html#creation">Promoted Listings reporting</a> in the Selling Integration Guide for details.</span><br /><br /><b>Maximum:</b> 500 listings|
|marketplaceId|string|false|none|The ID for the eBay marketplace on which the report is based.<br /><br /><b>Maximum: </b> 1 For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/ba:MarketplaceIdEnum'>eBay API documentation</a>|
|metricKeys|[string]|false|none|The list of metrics to be included in the report.  <p>Metrics are the quantitative measurements compiled into the report and the data returned is based on the specified dimension of the report. For example, if the dimension is <code>campaign</code>, the metrics for <b>number of sales</b> would be the number of sales in the campaign. However, if the dimension is <code>listing</code>, the <b>number of sales</b> represents the number of items sold in that listing.</p>  <p>For information on metric keys and how to set them, see <a href="/api-docs/sell/static/marketing/pl-reports.html">Promoted Listings reporting</a>.</p><b>Minimum: </b> 1|
|reportFormat|string|false|none|The file format of the report. Currently, the only supported format is <code>TSV_GZIP</code>, which is a gzip file with tab separated values. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/plr:ReportFormatEnum'>eBay API documentation</a>|
|reportType|string|false|none|The type of report to be generated, such as <code>ACCOUNT_PERFORMANCE_REPORT</code> or <code>CAMPAIGN_PERFORMANCE_REPORT</code>.<br/><br/><span class="tablenote"><b>Note:</b> INVENTORY_PERFORMANCE_REPORT is not currently available; availability date is pending.</span><br /><br /><b>Maximum:</b> 1 For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/plr:ReportTypeEnum'>eBay API documentation</a>|

<h2 id="tocS_DeleteAdRequest">DeleteAdRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteadrequest"></a>
<a id="schema_DeleteAdRequest"></a>
<a id="tocSdeleteadrequest"></a>
<a id="tocsdeleteadrequest"></a>

```json
{
  "listingId": "string"
}
```

This type defines the fields used in a delete-ad request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|listingId|string|false|none|A unique eBay-assigned ID for a listing that is generated when the listing is created.  <p class="tablenote"><b>Note:</b> This request accepts both listing IDs, as generated by the Inventory API, and an item IDs, as used in the eBay Traditional API set (e.g., the Trading and Finding APIs).</p>|

<h2 id="tocS_DeleteAdResponse">DeleteAdResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteadresponse"></a>
<a id="schema_DeleteAdResponse"></a>
<a id="tocSdeleteadresponse"></a>
<a id="tocsdeleteadresponse"></a>

```json
{
  "adId": "string",
  "errors": [
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
  ],
  "listingId": "string",
  "statusCode": 0
}
```

This type defines the fields returned in a delete-ad response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adId|string|false|none|The unique identifier of the ad that was deleted, or the ad that the seller attempted to delete.|
|errors|[[Error](#schemaerror)]|false|none|An array of the errors or warnings associated with the request.|
|listingId|string|false|none|A unique eBay-assigned ID for a listing that is generated when the listing is created.|
|statusCode|integer(int32)|false|none|An HTTP status code that indicates the response-status of the request. Check this code to see if the ad was successfully deleted.<span class="tablenote"><b>Note:</b>A status code is returned for each ad that the seller deletes, or attempts to delete.</span>|

<h2 id="tocS_DeleteAdsByInventoryReferenceRequest">DeleteAdsByInventoryReferenceRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteadsbyinventoryreferencerequest"></a>
<a id="schema_DeleteAdsByInventoryReferenceRequest"></a>
<a id="tocSdeleteadsbyinventoryreferencerequest"></a>
<a id="tocsdeleteadsbyinventoryreferencerequest"></a>

```json
{
  "inventoryReferenceId": "string",
  "inventoryReferenceType": "string"
}
```

This type defines the fields needed to delete an ad by its inventory reference ID.  You must always supply both <b>inventory_reference_id</b> and <b>inventory_reference_type</b>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inventoryReferenceId|string|false|none|The inventory reference ID is a seller-defined SKU value for a single-item listing, or a seller-defined identifier for an inventory item group. Both of these values are defined when using the Inventory API, and an inventory item group is used to create a multiple-variation listing.|
|inventoryReferenceType|string|false|none|The enumeration value passed into this field indicates the type of value used for the corresponding <b>inventoryReferenceId</b> value. The enumeration value used here will either be <code>INVENTORY_ITEM</code> (to delete the ad for a single SKU listing) or <code>INVENTORY_ITEM_GROUP</code> (to delete the ad for a multiple-variation listing). For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:InventoryReferenceTypeEnum'>eBay API documentation</a>|

<h2 id="tocS_DeleteAdsByInventoryReferenceResponse">DeleteAdsByInventoryReferenceResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteadsbyinventoryreferenceresponse"></a>
<a id="schema_DeleteAdsByInventoryReferenceResponse"></a>
<a id="tocSdeleteadsbyinventoryreferenceresponse"></a>
<a id="tocsdeleteadsbyinventoryreferenceresponse"></a>

```json
{
  "adIds": [
    "string"
  ],
  "errors": [
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
  ],
  "inventoryReferenceId": "string",
  "inventoryReferenceType": "string",
  "statusCode": 0
}
```

This type defines the fields returned by request to delete a set of ads by inventory reference ID.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adIds|[string]|false|none|The unique identifier of the ad that was deleted, or the ad that the seller attempted to delete.<span class="tablenote"><b>Note:</b>Although the field name is plural and it is an array, only one ad ID will be returned here since there can be only one ad per listing.</span>|
|errors|[[Error](#schemaerror)]|false|none|The container for the errors associated with the request.|
|inventoryReferenceId|string|false|none|The inventory reference ID is a seller-defined SKU value for a single-item listing, or a seller-defined identifier for an inventory item group. Both of these values are defined when using the Inventory API, and an inventory item group is used to create a multiple-variation listing.|
|inventoryReferenceType|string|false|none|The enumeration value returned here indicates if the ad was for a single-variation listing or a multiple-variation listing. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:InventoryReferenceTypeEnum'>eBay API documentation</a>|
|statusCode|integer(int32)|false|none|An HTTP status code indicating if the corresponding ad was successfully deleted or not. <code>200 Successful</code> should be returned for successfully deleted ads. <span class="tablenote"><b>Note:</b>A status code is returned for each ad that the seller deletes, or attempts to delete.</span>|

<h2 id="tocS_Dimension">Dimension</h2>
<!-- backwards compatibility -->
<a id="schemadimension"></a>
<a id="schema_Dimension"></a>
<a id="tocSdimension"></a>
<a id="tocsdimension"></a>

```json
{
  "annotationKeys": [
    "string"
  ],
  "dimensionKey": "string"
}
```

This type defines the annotation and dimension key used by the report. For information on how to set these values, see <a href="/api-docs/sell/static/marketing/pl-reports.html">Promoted Listings reporting</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|annotationKeys|[string]|false|none|A list of annotations associated with the dimension of the report.|
|dimensionKey|string|false|none|The name of the dimension on which the report is based. <p>A dimension is an attribute to which the report data applies.</p>|

<h2 id="tocS_DimensionKeyAnnotation">DimensionKeyAnnotation</h2>
<!-- backwards compatibility -->
<a id="schemadimensionkeyannotation"></a>
<a id="schema_DimensionKeyAnnotation"></a>
<a id="tocSdimensionkeyannotation"></a>
<a id="tocsdimensionkeyannotation"></a>

```json
{
  "annotationKey": "string",
  "dataType": "string"
}
```

This type defines the annotation values associated with a dimension. Annotations are metadata of the dimension. For example, annotations for a listing ID could be <code>listing_title</code> or <code>listing_quantity_sold</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|annotationKey|string|false|none|An annotation key associated with the dimension.|
|dataType|string|false|none|The data type of the annotation key value. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/plr:DataTypeEnum'>eBay API documentation</a>|

<h2 id="tocS_DimensionMetadata">DimensionMetadata</h2>
<!-- backwards compatibility -->
<a id="schemadimensionmetadata"></a>
<a id="schema_DimensionMetadata"></a>
<a id="tocSdimensionmetadata"></a>
<a id="tocsdimensionmetadata"></a>

```json
{
  "dataType": "string",
  "dimensionKey": "string",
  "dimensionKeyAnnotations": [
    {
      "annotationKey": "string",
      "dataType": "string"
    }
  ]
}
```

This type defines the dimension used to create the report and the annotation keys associated with that dimension.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataType|string|false|none|The data type of the dimension value used to create the report. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/plr:DataTypeEnum'>eBay API documentation</a>|
|dimensionKey|string|false|none|The name of the dimension used to create the report.|
|dimensionKeyAnnotations|[[DimensionKeyAnnotation](#schemadimensionkeyannotation)]|false|none|An list of annotation keys associated with the specified dimension of the report.|

<h2 id="tocS_DiscountBenefit">DiscountBenefit</h2>
<!-- backwards compatibility -->
<a id="schemadiscountbenefit"></a>
<a id="schema_DiscountBenefit"></a>
<a id="tocSdiscountbenefit"></a>
<a id="tocsdiscountbenefit"></a>

```json
{
  "amountOffItem": {
    "currency": "string",
    "value": "string"
  },
  "amountOffOrder": {
    "currency": "string",
    "value": "string"
  },
  "percentageOffItem": "string",
  "percentageOffOrder": "string"
}
```

This container defines the promotional discount as either a monetary amount or a percentage of the sales price.  <p class="tablenote"><b>Important!:</b> You must populate one and only one of the fields in this container: <ul><li><b>amountOffItem</b></li> <li><b>amountOffOrder</b></li> <li><b>percentageOffItem</b></li> <li><b>percentageOffOrder</b></li></ul></p>  <p class="tablenote"><b>Tip:</b> Refer to <a href="/api-docs/sell/static/marketing/pm-specifying-discounts.html">Configuring discounts for threshold promotions</a> for information and examples on how to combine <b>discountBenefit</b> and <b>discountSpecification</b> values to create different types of promotions.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amountOffItem|[Amount](#schemaamount)|false|none|The monetary amount that is discounted off an item (or items) when the promotion criteria is met.  <br><br>For <b>threshold promotions</b>, where the buyer triggers the discount, the valid values for this field are:  <br><code> &nbsp; 5, 6, 7, 8, 9, 10, 15, 20, 25, <br> &nbsp; 30, 35, 40, 45, 50, 55, 60, 65, <br> &nbsp; 70, 75, 80, 85, 90, 95, 100, 110, <br> &nbsp; 120, 125, 150, 200, 250</code>  <br><br>For <b>markdown</b> promotions, the range is greater, as outlined below and detailed more precisely <a href="/api-docs/sell/static/marketing/pm-amountoffitems-values.html" target="_blank">here</a>: <ul><li>$1 increments from $5 to $100</li><li>$5 increments from $105 to $1,000</li><li>$100 increments from $1,100 to $15,000</li></ul>|
|amountOffOrder|[Amount](#schemaamount)|false|none|Used for threshold promotions, this is the monetary amount that is discounted off an order when the promotion criteria is met. Because this field is valid only for orders, it's not a valid combination to use with markdown promotions.  <br><br><b>Valid values</b> for the associated <code>amountOffOrder.</code><b>value</b> field:  <br><code> &nbsp; 5, 6, 7, 8, 9, 10, 15, 20, 25, <br> &nbsp; 30, 35, 40, 45, 50, 55, 60, 65, <br> &nbsp; 70, 75, 80, 85, 90, 95, 100, 110, <br> &nbsp; 120, 125, 150, 200, 250</code>|
|percentageOffItem|string|false|none|The percentage applied to the sales price that is discounted off the promoted item (or items) when the promotion criteria is met.  <br><br>Valid integer values for percentage off: &nbsp;&nbsp;<b>Min:</b> <code>5</code> &nbsp;&nbsp;<b>Max:</b> <code>80</code>|
|percentageOffOrder|string|false|none|Used for threshold promotions, this is the percentage of the order price that is discounted off the order when the promotion criteria is met. This field is not value for markdown promotions.  <br><br>Valid integer values for ORDER_DISCOUNT promotions: &nbsp;&nbsp;<b>Min:</b> <code>5</code> &nbsp;&nbsp;<b>Max:</b> <code>80</code>  <br><br>For VOLUME_DISCOUNT promotions: Must be set to <code>0</code> for the first discount rule.|

<h2 id="tocS_DiscountRule">DiscountRule</h2>
<!-- backwards compatibility -->
<a id="schemadiscountrule"></a>
<a id="schema_DiscountRule"></a>
<a id="tocSdiscountrule"></a>
<a id="tocsdiscountrule"></a>

```json
{
  "discountBenefit": {
    "amountOffItem": {
      "currency": "string",
      "value": "string"
    },
    "amountOffOrder": {
      "currency": "string",
      "value": "string"
    },
    "percentageOffItem": "string",
    "percentageOffOrder": "string"
  },
  "discountSpecification": {
    "forEachAmount": {
      "currency": "string",
      "value": "string"
    },
    "forEachQuantity": 0,
    "minAmount": {
      "currency": "string",
      "value": "string"
    },
    "minQuantity": 0,
    "numberOfDiscountedItems": 0
  },
  "maxDiscountAmount": {
    "currency": "string",
    "value": "string"
  },
  "ruleOrder": 0
}
```

This complex type defines a promotion as being either a monetary amount or a percentage of a sales price that's subtracted from the price of an item or order. <p>Set the amount of the discount and the rules that govern when the discount triggers using the <b>discountBenefit</b> and <b>discountSpecification</b> fields.</p>  <p class="tablenote"><b>Note:</b> In <b>volume pricing promotions</b>, you must configure at least two <b>discountRule</b> containers and at most four.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|discountBenefit|[DiscountBenefit](#schemadiscountbenefit)|false|none|This container defines the promotional discount as either a monetary amount or a percentage of the sales price.  <p><b>Note:</b> When configuring promotion benefits, populate just one of the following fields in the <b>discountBenefit</b> container:</p> <ul><li><b>amountOffItem</b></li> <li><b>amountOffOrder</b></li> <li><b>percentageOffItem</b></li> <li><b>percentageOffOrder</b></li></ul>  <p>For volume pricing, only <b>percentageOffOrder</b> is applicable as a <b>discountBenefit</b>. Also, the first <b>discountBenefit</b> container in a volume pricing configuration must set <b>percentageOffOrder</b> to <code>0</code>.</p>  <p class="tablenote"><b>Tip:</b> Refer to <a href="/api-docs/sell/static/marketing/pm-specifying-discounts.html">Configuring discounts for threshold promotions</a> for information and examples on how to combine <b>discountBenefit</b> and <b>discountSpecification</b> to create different types of promotions.</p>|
|discountSpecification|[DiscountSpecification](#schemadiscountspecification)|false|none|This container defines the criteria for when the discounts of a promotion trigger, such as the minimum quantity that the buyer must purchase before the promotion kicks in. The promotional discount is applied each time the criteria defined by this container is met.  <p>When configuring the rules that govern when the discounts are applied, populate just one of the following fields in the <b>discountSpecification</b> container:</p>  <ul><li><b>minAmount</b></li> <li><b>minQuantity</b></li> <li><b>forEachQuantity</b></li> <li><b>forEachAmount</b></li></ul>  <p class="tablenote"><b>Important:</b> When configuring <i>volume pricing promotions</i>, only <b>minQuantity</b> is applicable as a <b>discountSpecification</b>. Also, the configuration for <b>minQuantity</b> in a volume pricing configuration is specific. In the first <b>discountSpecification</b> container, set <b>minQuantity</b> to <code>1</code>, and in the second, set <b>minQuantity</b> to <code>2</code>. If you include a third <b>discountRules</b> pair, <b>minQuantity</b> must be set to <code>3</code>, and in a fourth, it must be set to <code>4</code>. Also, you must set a <b>ruleOrder</b> value in each <b>discountRules</b> container. In the first container, <b>discountRules</b> must be set to <code>1</code>, and in each subsequent container, the value be be incremented by 1. For more, see <a href="/api-docs/sell/static/marketing/pm-volume-discounts.html" target="_blank">Configuring volume pricing discounts</a>.</p> <p class="tablenote"><b>Tip:</b> see <a href="/api-docs/sell/static/marketing/pm-specifying-discounts.html" target="_blank">Configuring discounts for threshold promotions</a> for information and examples on how to combine <b>discountBenefit</b> and <b>discountSpecification</b> to create different types of promotions.</p>|
|maxDiscountAmount|[Amount](#schemaamount)|false|none|The limit on how much a buyer can save using a <code>CODED_COUPON</code> promotion type. Permitted values are 1-1000. Supported currency codes include USD, GBP, EUR, and AUD. <p class="tablenote"><b>Note:</b> The Currency Code for 'maxDiscountAmount' must be the same as the Currency Code for 'budget'.</p>|
|ruleOrder|integer(int32)|false|none|This field indicates the order in which the <b>discountRules</b> are presented. The value specified for this field must equal the associated <b>minQuantity</b> value. <br><br><i>Required if </i> you are creating a volume pricing promotion.|

<h2 id="tocS_DiscountSpecification">DiscountSpecification</h2>
<!-- backwards compatibility -->
<a id="schemadiscountspecification"></a>
<a id="schema_DiscountSpecification"></a>
<a id="tocSdiscountspecification"></a>
<a id="tocsdiscountspecification"></a>

```json
{
  "forEachAmount": {
    "currency": "string",
    "value": "string"
  },
  "forEachQuantity": 0,
  "minAmount": {
    "currency": "string",
    "value": "string"
  },
  "minQuantity": 0,
  "numberOfDiscountedItems": 0
}
```

This container defines the criteria for when the discounts of a promotion trigger, such as the minimum quantity the buyer must purchase before the promotion kicks in. The promotional discount is applied each time the criteria defined by this container is met.  <p><b>Note:</b> When configuring the rules that govern when the discounts are applied, populate just one of the following fields in the <b>discountSpecification</b> container:</p>  <ul><li><b>minAmount</b></li> <li><b>minQuantity</b></li> <li><b>forEachQuantity</b></li> <li><b>forEachAmount</b></li></ul> <p class="tablenote"><b>Tip:</b> Refer to <a href="/api-docs/sell/static/marketing/pm-specifying-discounts.html">Configuring discounts for threshold promotions</a> for information and examples on how to combine <b>discountBenefit</b> and <b>discountSpecification</b> to create different types of promotions.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|forEachAmount|[Amount](#schemaamount)|false|none|The monetary amount that must be spent on promoted items before the promotional discount is applied.  <br><br><b>Valid values</b> for the associated <code>forEachAmount.</code><b>value</b> field: <br><code> &nbsp; 5, 10, 15, 20, 25, 30, 35, 40, 45, 49, <br> &nbsp; 50, 55, 59, 60, 65, 69, 70, 75, 79, 80, <br> &nbsp; 85, 89, 90, 95, 99, 100, 110, 120, 125, <br> &nbsp; 149, 150, 175, 199, 200, 249, 250, 299, <br> &nbsp; 300, 350, 399, 400, 450, 499, 500</code>|
|forEachQuantity|integer(int32)|false|none|The number of items that must be purchased in order to qualify for the discount.  <br><br><b>Valid values:</b> <br><code> &nbsp; 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, <br> &nbsp; 12, 13, 14, 15, 16, 17, 18, 19 <br> &nbsp; 20, 25, 50, 75, 100</code>|
|minAmount|[Amount](#schemaamount)|false|none|Known as the "threshold amount", the minimum dollar amount that needs to be spent on promoted items in order to qualify for the promotion's discount.  <br><br><b>Valid values</b> for the associated <code>minAmount.</code><b>value</b> field: <br><code> &nbsp; 5, 10, 15, 20, 25, 30, 35, 40, 45, 49, <br> &nbsp; 50, 55, 59, 60, 65, 69, 70, 75, 79, 80, <br> &nbsp; 85, 89, 90, 95, 99, 100, 110, 120, <br> &nbsp; 125, 149, 150, 175, 199, 200, 249, 250, 299, <br> &nbsp; 300, 350, 399, 400, 450, 499, 500</code>|
|minQuantity|integer(int32)|false|none|The minimum quantity of promoted items that needs to be bought in order to qualify for the promotion's discount.  <br><br><b>Valid values:</b> <br><code> &nbsp; 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, <br> &nbsp; 12, 13, 14, 15, 16, 17, 18, 19 <br> &nbsp; 20, 25, 50, 75, 100</code>|
|numberOfDiscountedItems|integer(int32)|false|none|Use this field to configure "Buy One Get One" (or <b>BOGO</b>) promotions.  <br><br>You must couple this field with <b>forEachQuantity</b> and an <b>amountOffItem</b> or <b>percentOffItem</b> field to configure your BOGO promotion. This field is not valid with order-based promotions. <br><br>The value of this field represents the number of items to be discounted when other promotion criteria is met. For example, when the buyer adds the number of items identified by the <b>forEachQuantity</b> value to their cart, they are then eligible to receive the stated discount from an additional number of like items (the number of which is identified by this field) when they add those items to their cart. To receive the discount, the buyer must purchase the number of items indicated by  <b>forEachQuantity</b> <i>plus</i> the number indicated by this field.  <br><br><b>Valid values:</b> <br><code> &nbsp; 1, 2, 3, 4, 5, 6, 7, 8, 9, 10</code>|

<h2 id="tocS_DynamicAdRatePreference">DynamicAdRatePreference</h2>
<!-- backwards compatibility -->
<a id="schemadynamicadratepreference"></a>
<a id="schema_DynamicAdRatePreference"></a>
<a id="tocSdynamicadratepreference"></a>
<a id="tocsdynamicadratepreference"></a>

```json
{
  "adRateAdjustmentPercent": "string",
  "adRateCapPercent": "string"
}
```

A type that defines the ad rate details for a Promoted Listings Standard (PLS) ad campaign.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adRateAdjustmentPercent|string|false|none|The percentage above or below (-) the eBay suggested ad rate that a seller is willing to pay.<br /><br />This specifies the maximum and minimum values to which an ad rate can be dynamically adjusted.|
|adRateCapPercent|string|false|none|The maximum value (specified as a percentage) to which the eBay suggested ad rate can be adjusted. The adjusted ad rate will never exceed this percentage.|

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

A container that defines the elements of error and warning messages.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category|string|false|none|The category type for this error or warning. It takes an ErrorCategory object which can have one of three values:<ul><li><code>Application</code>: Indicates an exception or error occurred in the application code or at runtime. Examples include catching an exception in a service's business logic, system failures, or request errors from a dependency.</li><li><code>Business</code>: Used when your service or a dependent service refused to continue processing on the resource because of a business rule violation such as "Seller does not ship item to Antarctica" or "Buyer ineligible to purchase an alcoholic item". Business errors are not syntactical input errors.</li><li><code>Request</code>: Used when there is anything wrong with the request, such as authentication, syntactical errors, rate limiting or missing headers, bad HTTP header values, and so on.</li></ul>|
|domain|string|false|none|Name of the domain containing the service or application.|
|errorId|integer(int32)|false|none|A positive integer that uniquely identifies the specific error condition that occurred. Your application can use error codes as identifiers in your customized error-handling algorithms.|
|inputRefIds|[string]|false|none|Identifies specific request elements associated with the error, if any. inputRefId's response is format specific. For JSON, use <i>JSONPath</i> notation.|
|longMessage|string|false|none|An expanded version of message that should be around 100-200 characters long, but is not required to be such.|
|message|string|false|none|An end user and app developer friendly device agnostic message. It explains what the error or warning is, and how to fix it (in a general sense). Its value is at most 50 characters long. If applicable, the value is localized in the end user's requested locale.|
|outputRefIds|[string]|false|none|Identifies specific response elements associated with the error, if any. Path format is the same as <code>inputRefId</code>.|
|parameters|[[ErrorParameter](#schemaerrorparameter)]|false|none|This optional complex field type contains a list of one or more context-specific <code>ErrorParameter</code> objects, with each item in the list entry being a parameter (or input field name) that caused an error condition. Each <code>ErrorParameter</code> object consists of two fields, a <code>name</code> and a <code>value</code>.|
|subdomain|string|false|none|Name of the domain's subsystem or subdivision. For example, checkout is a subdomain in the buying domain.|

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

Container for a error parameter.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Name of the entity that threw the error.|
|value|string|false|none|A description of the error.|

<h2 id="tocS_FundingStrategy">FundingStrategy</h2>
<!-- backwards compatibility -->
<a id="schemafundingstrategy"></a>
<a id="schema_FundingStrategy"></a>
<a id="tocSfundingstrategy"></a>
<a id="tocsfundingstrategy"></a>

```json
{
  "adRateStrategy": "string",
  "bidPercentage": "string",
  "dynamicAdRatePreferences": [
    {
      "adRateAdjustmentPercent": "string",
      "adRateCapPercent": "string"
    }
  ],
  "fundingModel": "string"
}
```

This type defines how the Promoted Listings fee is calculated for a Promoted Listings ad campaign.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adRateStrategy|string|false|none|The ad rate strategy that shall be applied to the campaign. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:AdRateStrategyEnum'>eBay API documentation</a>|
|bidPercentage|string|false|none|The user-defined <b>bid percentage</b> (also known as the <i>ad rate</i>) sets the level that eBay increases the visibility in search results for the associated listing. The higher the <b>bidPercentage</b> value, the more eBay promotes the listing.  <br><br>The value specified here is also used to calculate the Promoted Listings fee. This percentage value is multiplied by the final sales price to determine the fee. <br><br>The Promoted Listings fee is determined at the time the transaction completes and the seller is assessed the fee only when an item sells through a Promoted Listings ad campaign. <br><br>The <b>bidPercentage</b> is a single precision value that is guided by the following rules: <ul><li>These values are <b>valid</b>:<br>&nbsp;&nbsp;&nbsp;<code>4.1</code>, &nbsp;&nbsp;&nbsp;<code>5.0</code>, &nbsp;&nbsp;&nbsp;<code>5.5</code>, ...</li>  <li>These values are <b>not valid</b>:<br /> &nbsp;&nbsp;&nbsp;<code>0.01</code>, &nbsp;&nbsp;&nbsp;<code>10.75</code>, &nbsp;&nbsp;&nbsp;<code>99.99</code>,<br /> &nbsp;&nbsp;&nbsp;and so on.</li></ul>This is the default bid percentage for the campaigns using the Cost Per Sale (CPS) funding model, and this value will be overridden by any ads in the campaign that have their own set bid percentages.<br /><br />If a bid percentage is not provided for an ad, eBay uses the default bid percentage of the associated campaign.<br /><br /><span class="tablenote"><b>Note:</b>This field is only relevant for campaigns that use the CPS funding model and a fixed ad rate. It is not used for campaigns that use the Cost Per Click (CPC) funding model and should not be provided when the selected adRateStrategy for the campaign is dynamic.</span><br /><b>Minimum value:</b> 2.0 <br><b>Maximum value:</b> 100.0|
|dynamicAdRatePreferences|[[DynamicAdRatePreference](#schemadynamicadratepreference)]|false|none|A field that indicates whether a single, user-defined bid percentage (also known as the <i>ad rate</i>) should be used, or whether eBay should automatically adjust listings to maintain the daily suggested bid percentage.<br /><br /><span class="tablenote"><span style="color:#004680"><strong>Note:</strong></span> Dynamic adjustment is only applicable when the <b>adRateStrategy</b> is set to <code>DYNAMIC</code>.</span><br /><b>Default:</b> <code>FIXED</code>|
|fundingModel|string|false|none|Indicates the model that eBay uses to calculate the Promoted Listings fee. <p>For a description of the funding model types, refer to <b>FundingModelTypeEnum</b>. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:FundingModelEnum'>eBay API documentation</a>|

<h2 id="tocS_InventoryCriterion">InventoryCriterion</h2>
<!-- backwards compatibility -->
<a id="schemainventorycriterion"></a>
<a id="schema_InventoryCriterion"></a>
<a id="tocSinventorycriterion"></a>
<a id="tocsinventorycriterion"></a>

```json
{
  "inventoryCriterionType": "string",
  "inventoryItems": [
    {
      "inventoryReferenceId": "string"
    }
  ],
  "listingIds": [
    "string"
  ],
  "ruleCriteria": {
    "excludeInventoryItems": [
      {
        "inventoryReferenceId": "string"
      }
    ],
    "excludeListingIds": [
      "string"
    ],
    "markupInventoryItems": [
      {
        "inventoryReferenceId": "string"
      }
    ],
    "markupListingIds": [
      "string"
    ],
    "selectionRules": [
      {
        "brands": [
          "string"
        ],
        "categoryIds": [
          "string"
        ],
        "categoryScope": "string",
        "listingConditionIds": [
          "string"
        ],
        "maxPrice": {
          "currency": "string",
          "value": "string"
        },
        "minPrice": {
          "currency": "string",
          "value": "string"
        }
      }
    ]
  }
}
```

This type defines either the selections rules or the list of listing IDs for the promotion. The "listing IDs" are are either the seller's item IDs or the eBay listing IDs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inventoryCriterionType|string|false|none|Indicates how the items to include in the promotion are selected. You can include inventory by ID, using rules, or globally include all your inventory.  For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/sme:InventoryCriterionEnum'>eBay API documentation</a>|
|inventoryItems|[[InventoryItem](#schemainventoryitem)]|false|none|An array of containers for the seller's inventory reference IDs (also known as an "SKU" or "custom label") to be added to the promotion.  <p class="tablenote"><b>Note:</b> The request can have either <b>inventoryItems</b> or <b>listingIds</b>, but not both.</p>  <br><br><b>Required:</b> All listings in a promotion must offer an electronic payment method.  <br><b>Maximum:</b> 500 parent items  <br><b>Maximum SKU or custom label length:</b> 50 characters <br><br><i>Required if </i> <b>InventoryCriterionType</b> is set to <code>INVENTORY_BY_VALUE</code>, you must specify either <b>inventoryItems</b> or <b>listingIds</b>.|
|listingIds|[string]|false|none|An array of eBay listing IDs to be added to the promotion.  <p class="tablenote"><b>Note:</b> The request can have either <b>inventoryItems</b> or <b>listingIds</b>, but not both.</p>  <br><br><b>Required:</b> All listings in a promotion must offer an electronic payment method.  <br><b>Maximum:</b> 500 parent items  <br><b>Maximum SKU or custom label length:</b> 50 characters <br><br><i>Required if </i> <b>InventoryCriterionType</b> is set to <code>INVENTORY_BY_VALUE</code>, you must specify either <b>inventoryItems</b> or <b>listingIds</b>.|
|ruleCriteria|[RuleCriteria](#schemarulecriteria)|false|none|This container defines a set of inventory selection rules for a promotion.  <br><br>When defining rule criteria, you must limit item exclusions to 100 IDs when you choose from live inventory.  <br><br>Required if  <b>InventoryCriterionEnum</b> is set to <code>INVENTORY_BY_RULE</code> or <code>INVENTORY_ANY</code>.|

<h2 id="tocS_InventoryItem">InventoryItem</h2>
<!-- backwards compatibility -->
<a id="schemainventoryitem"></a>
<a id="schema_InventoryItem"></a>
<a id="tocSinventoryitem"></a>
<a id="tocsinventoryitem"></a>

```json
{
  "inventoryReferenceId": "string"
}
```

This type defines the fields for the seller inventory reference IDs (also known as an "SKU" or "custom label").

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inventoryReferenceId|string|false|none|The seller's inventory reference ID for a listing. Also known as the "SKU" or "custom label," an inventory reference ID is either the ID of the listing or, if the listing has variations (such as a shirt that's available in multiple sizes and colors), the ID of the parent listing.|

<h2 id="tocS_InventoryReference">InventoryReference</h2>
<!-- backwards compatibility -->
<a id="schemainventoryreference"></a>
<a id="schema_InventoryReference"></a>
<a id="tocSinventoryreference"></a>
<a id="tocsinventoryreference"></a>

```json
{
  "inventoryReferenceId": "string",
  "inventoryReferenceType": "string"
}
```

This complex type is used to identify an item that is managed by the Inventory API. The type defines the fields contained in an inventory reference ID.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inventoryReferenceId|string|false|none|The seller's inventory reference ID for an item that is managed with the Inventory API.  <br><br>An inventory reference is either the ID of a single listing or the ID of the parent of an item group listing (a multi-variation listing, such as a shirt that is available in multiple sizes and colors).  <br><br><i>Required if </i> if you supply an <b>inventoryReferenceType</b>.|
|inventoryReferenceType|string|false|none|Indicates the type of item indicated by the <b>inventoryReferenceId</b>.  <br><br>This value can be set to either <code>INVENTORY_ITEM</code> or <code>INVENTORY_ITEM_GROUP</code> (if the ID points to a multi-variation listing). <br><br><i>Required if </i> if you supply an <b>inventoryReferenceId</b>. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:InventoryReferenceTypeEnum'>eBay API documentation</a>|

<h2 id="tocS_ItemBasis">ItemBasis</h2>
<!-- backwards compatibility -->
<a id="schemaitembasis"></a>
<a id="schema_ItemBasis"></a>
<a id="tocSitembasis"></a>
<a id="tocsitembasis"></a>

```json
{
  "estimatedValue": 0,
  "metric": "string"
}
```

A container for details regarding the basis for an item.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|estimatedValue|integer(int32)|false|none|The estimated value of the search impressions for items based on the provided dimensions. <br /><br /><b>Duration:</b> 17 days<br /><br /><b>Total slots:</b> 200 <br /><br /><b>Channel:</b> Dweb, Mweb, Native|
|metric|string|false|none|The basis of the statistics. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:TargetingMetricsEnum'>eBay API documentation</a>|

<h2 id="tocS_ItemMarkdownStatus">ItemMarkdownStatus</h2>
<!-- backwards compatibility -->
<a id="schemaitemmarkdownstatus"></a>
<a id="schema_ItemMarkdownStatus"></a>
<a id="tocSitemmarkdownstatus"></a>
<a id="tocsitemmarkdownstatus"></a>

```json
{
  "listingMarkdownStatus": "string",
  "statusChangedDate": "string",
  "statusMessage": "string"
}
```

This type defines the status of a markdown promotion.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|listingMarkdownStatus|string|false|none|Indicates the state assigned to the markdown promotion using one of the <b>status</b> values. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/sme:ItemMarkdownStatusEnum'>eBay API documentation</a>|
|statusChangedDate|string|false|none|Identifies the date the last time the state of the promotion changed. Both both markdown and markup events can trigger a status change.|
|statusMessage|string|false|none|An eBay-assigned text string that describes the status of the promotion.|

<h2 id="tocS_ItemPriceMarkdown">ItemPriceMarkdown</h2>
<!-- backwards compatibility -->
<a id="schemaitempricemarkdown"></a>
<a id="schema_ItemPriceMarkdown"></a>
<a id="tocSitempricemarkdown"></a>
<a id="tocsitempricemarkdown"></a>

```json
{
  "applyFreeShipping": true,
  "autoSelectFutureInventory": true,
  "blockPriceIncreaseInItemRevision": true,
  "description": "string",
  "endDate": "string",
  "marketplaceId": "string",
  "name": "string",
  "priority": "string",
  "promotionImageUrl": "string",
  "promotionStatus": "string",
  "selectedInventoryDiscounts": [
    {
      "discountBenefit": {
        "amountOffItem": {
          "currency": "string",
          "value": "string"
        },
        "amountOffOrder": {
          "currency": "string",
          "value": "string"
        },
        "percentageOffItem": "string",
        "percentageOffOrder": "string"
      },
      "discountId": "string",
      "inventoryCriterion": {
        "inventoryCriterionType": "string",
        "inventoryItems": [
          {
            "inventoryReferenceId": "string"
          }
        ],
        "listingIds": [
          "string"
        ],
        "ruleCriteria": {
          "excludeInventoryItems": [
            {
              "inventoryReferenceId": "string"
            }
          ],
          "excludeListingIds": [
            "string"
          ],
          "markupInventoryItems": [
            {
              "inventoryReferenceId": "string"
            }
          ],
          "markupListingIds": [
            "string"
          ],
          "selectionRules": [
            {
              "brands": [
                "string"
              ],
              "categoryIds": [
                "string"
              ],
              "categoryScope": "string",
              "listingConditionIds": [
                "string"
              ],
              "maxPrice": {
                "currency": "string",
                "value": "string"
              },
              "minPrice": {
                "currency": "string",
                "value": "string"
              }
            }
          ]
        }
      },
      "ruleOrder": 0
    }
  ],
  "startDate": "string"
}
```

This type defines the fields used to describe an item price markdown promotion.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|applyFreeShipping|boolean|false|none|If set to <code>true</code>, free shipping is applied to the first shipping service specified for the item. The first domestic shipping option is set to "free shipping," regardless if the shipping <b>optionType</b> for that service is set to <code>FLAT_RATE</code>, <code>CALCULATED</code>, or <code>NOT_SPECIFIED</code> (freight). This flag essentially adds free shipping as a promotional bonus. <br><br><b>Default:</b> <code>false</code>|
|autoSelectFutureInventory|boolean|false|none|If set to <code>true</code>, eBay will automatically add inventory items to the markdown promotion if they meet the <b>selectedInventoryDiscounts</b> criteria specified for the markdown promotion.  <br><br><b>Default:</b> <code>false</code>|
|blockPriceIncreaseInItemRevision|boolean|false|none|If set to <code>true</code>, price increases (including removing the free shipping flag) are blocked and an error message is returned if a seller attempts to adjust the price of an item that's partaking in this markdown promotion. If set to <code>false</code>, an item is dropped from the markdown promotion if the seller adjusts the price.  <br><br><b>Default:</b> <code>false</code>|
|description|string|false|none|This field is required if you are configuring an MARKDOWN_SALE promotion. <br><br>This is the seller-defined "tag line" for the offer, such as "Save on designer shoes." A tag line appears under the "offer-type text" that is generated for the promotion. The text is displayed on the offer tile that is shown on the seller's <b>All Offers</b> page and on the event page for the promotion.  <p class="tablenote"><b>Note:</b> Offer-type text is a teaser that's presented throughout the buyer's journey through the sales flow and is generated by eBay. This text is not editable by the seller&mdash;it's derived from the settings in the <b>discountRules</b> and <b>discountSpecification</b> fields&mdash;and can be, for example, "20% off".</p>  <br><b>Maximum length:</b> 50|
|endDate|string|false|none|The date and time the promotion ends, in UTC format (<code>yyyy-MM-ddThh:mm:ssZ</code>). The value supplied for <b>endDate</b> must be at least 24 hours after the value supplied for the <b>startDate</b> of the markdown promotion.<br><br>For display purposes, convert this time into the local time of the seller.  <br><br><b>Max value:</b><ul><li><code>14</code> days for the AT, CH, DE, ES, FR, IE, IT, and UK, marketplaces.</li>  <li><code>45</code> days for all other marketplaces.</li></ul>|
|marketplaceId|string|false|none|The eBay marketplace ID of the site where the markdown promotion is hosted. Markdown promotions are supported on all eBay marketplaces. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/ba:MarketplaceIdEnum'>eBay API documentation</a>|
|name|string|false|none|The seller-defined name or 'title' of the promotion that the seller can use to identify a promotion. This label is not displayed in end-user flows.  <br><br><b>Maximum length:</b> 90|
|priority|string|false|none|This field is ignored in markdown promotions. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/sme:PromotionPriorityEnum'>eBay API documentation</a>|
|promotionImageUrl|string|false|none|Required for CODED_COUPON, MARKDOWN_SALE, and ORDER_DISCOUNT promotions, populate this field with a URL that points to an image to be used with the promotion. This image is displayed on the seller's <b>All Offers</b> page. The URL must point to either JPEG or PNG image and it must be a minimum of 500x500 pixels in dimension and cannot exceed 12Mb in size.|
|promotionStatus|string|false|none|The current status of the promotion. When creating a new promotion, you must set this value to either <code>DRAFT</code> or <code>SCHEDULED</code>.  <br><br>Note that you must set this value to <code>SCHEDULED</code> when you update a <b>RUNNING</b> promotion. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/sme:PromotionStatusEnum'>eBay API documentation</a>|
|selectedInventoryDiscounts|[[SelectedInventoryDiscount](#schemaselectedinventorydiscount)]|false|none|A list that defines the sets of selected items for the markdown promotion and the discount specified for promotion.|
|startDate|string|false|none|The date and time the promotion starts in UTC format (<code>yyyy-MM-ddThh:mm:ssZ</code>). For display purposes, convert this time into the local time of the seller.|

<h2 id="tocS_ItemPromotion">ItemPromotion</h2>
<!-- backwards compatibility -->
<a id="schemaitempromotion"></a>
<a id="schema_ItemPromotion"></a>
<a id="tocSitempromotion"></a>
<a id="tocsitempromotion"></a>

```json
{
  "applyDiscountToSingleItemOnly": true,
  "budget": {
    "currency": "string",
    "value": "string"
  },
  "couponConfiguration": {
    "couponCode": "string",
    "couponType": "string",
    "maxCouponRedemptionPerUser": 0
  },
  "description": "string",
  "discountRules": [
    {
      "discountBenefit": {
        "amountOffItem": {
          "currency": "string",
          "value": "string"
        },
        "amountOffOrder": {
          "currency": "string",
          "value": "string"
        },
        "percentageOffItem": "string",
        "percentageOffOrder": "string"
      },
      "discountSpecification": {
        "forEachAmount": {
          "currency": "string",
          "value": "string"
        },
        "forEachQuantity": 0,
        "minAmount": {
          "currency": "string",
          "value": "string"
        },
        "minQuantity": 0,
        "numberOfDiscountedItems": 0
      },
      "maxDiscountAmount": {
        "currency": "string",
        "value": "string"
      },
      "ruleOrder": 0
    }
  ],
  "endDate": "string",
  "inventoryCriterion": {
    "inventoryCriterionType": "string",
    "inventoryItems": [
      {
        "inventoryReferenceId": "string"
      }
    ],
    "listingIds": [
      "string"
    ],
    "ruleCriteria": {
      "excludeInventoryItems": [
        {
          "inventoryReferenceId": "string"
        }
      ],
      "excludeListingIds": [
        "string"
      ],
      "markupInventoryItems": [
        {
          "inventoryReferenceId": "string"
        }
      ],
      "markupListingIds": [
        "string"
      ],
      "selectionRules": [
        {
          "brands": [
            "string"
          ],
          "categoryIds": [
            "string"
          ],
          "categoryScope": "string",
          "listingConditionIds": [
            "string"
          ],
          "maxPrice": {
            "currency": "string",
            "value": "string"
          },
          "minPrice": {
            "currency": "string",
            "value": "string"
          }
        }
      ]
    }
  },
  "marketplaceId": "string",
  "name": "string",
  "priority": "string",
  "promotionImageUrl": "string",
  "promotionStatus": "string",
  "promotionType": "string",
  "startDate": "string"
}
```

This type defines the fields that describe a threshold promotion and includes the promotional discount, the items included in the promotion, and the rules that specify when the promotion is applied.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|applyDiscountToSingleItemOnly|boolean|false|none|This flag is relevant in only when <b>promotionType</b> is set to <code>VOLUME_DISCOUNT</code>. For details on volume pricing promotions, see <a href="/api-docs/sell/static/marketing/pm-volume-discounts.html">Configuring volume pricing discounts</a>.  <br><br>If set to <code>true</code>, the discount is applied only when the buyer purchases multiple quantities of a single item in the promotion. Otherwise, the promotional discount applies to multiple quantities of any items in the promotion. Different variations of a multi-variation item are considered to be the same item. Note that this flag is not relevant if the <b>inventoryCriterion</b> container identifies a single listing ID for the promotion.|
|budget|[Amount](#schemaamount)|false|none|This sets the budget for the <code>CODED_COUPON</code> promotion type. Supported values range from 100-1000000. Supported currency codes include USD, GBP, EUR, and AUD. <p class="tablenote"><b>Note:</b> The budget value for an active or paused promotion can not be decreased.</p> <p class="tablenote"><b>Note:</b> The Currency Code for 'budget' must be the same as the Currency Code for 'maxDiscountAmount'.</p>|
|couponConfiguration|[CouponConfiguration](#schemacouponconfiguration)|false|none|The configuration of a coded coupon promotion.|
|description|string|false|none|This is the seller-defined "tag line" for the offer, such as "Save on designer shoes."  <br><br>The tag line appears under the "offer-type text" that is generated for the promotion and is displayed on the offer tile that's shown on the seller's <b>All Offers</b> page, and on the event page for the promotion.  <p class="tablenote"><b>Note:</b> Offer-type text is a teaser that's presented throughout the buyer's journey through the sales flow and is generated by eBay. The offer-type text is not editable by the seller&mdash;it's derived from the settings in the <b>discountRules</b> and <b>discountSpecification</b> fields&mdash;and can be, for example, "Extra 20% off when you buy 3+".</p>  <br><b>Maximum length:</b> 50 <br><br><i>Required if</i> you are configuring CODED_COUPON, ORDER_DISCOUNT, or MARKDOWN_SALE promotions (and not valid for VOLUME_DISCOUNT promotions).|
|discountRules|[[DiscountRule](#schemadiscountrule)]|false|none|This container defines a promotion using the following two required fields: <ul><li><b>discountBenefit</b> &ndash; Defines a discount as either a monetary amount or a percentage that is subtracted from the sales price of an item, a set of items, or an order.</li>  <li><b>discountSpecification</b> &ndash; Defines a set of rules that determine when the promotion is applied.</li></ul> <p class="tablenote"><b>Note:</b> For volume pricing, you must specify at least two and not more than four <b>discountBenefit</b>/<b>discountSpecification</b> pairs. In addition, you must define each set of rules with a <b>ruleOrder</b> value that corresponds with the order of volume discounts you present.</p>  <p><b>Tip:</b> Refer to <a href="/api-docs/sell/static/marketing/pm-specifying-discounts.html">Specifying item promotion discounts</a> for information and examples on how to combine <b>discountBenefit</b> and <b>discountSpecification</b> to create different types of promotions.</p>|
|endDate|string|false|none|The date and time the promotion ends in UTC format (<code>yyyy-MM-ddThh:mm:ssZ</code>). For display purposes, convert this time into the local time of the seller.|
|inventoryCriterion|[InventoryCriterion](#schemainventorycriterion)|false|none|A container that defines either the listing IDs or the selection rules that specify the items to include in the promotion. Listing IDs can be either eBay listing IDs or a list of the seller's inventory reference IDs (know as SKUs or custom labels). See the <b>selectionRules</b> container for the rule criteria you can use to select inventory.  <p class="tablenote"><b>Note:</b> All listings in Promotions Manager promotions must support an electronic payment method.</p>|
|marketplaceId|string|false|none|The eBay marketplace ID of the site where the threshold promotion is hosted. Threshold promotions are currently supported on a limited number of eBay marketplaces.  <p><b>Valid values:</b></p>  <ul><li><code>EBAY_AU</code> = Australia</li> <li><code>EBAY_DE</code> = Germany</li> <li><code>EBAY_ES</code> = Spain</li> <li><code>EBAY_FR</code> = France</li> <li><code>EBAY_GB</code> = Great Britain</li> <li><code>EBAY_IT</code> = Italy</li> <li><code>EBAY_US</code> = United States</li></ul> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/ba:MarketplaceIdEnum'>eBay API documentation</a>|
|name|string|false|none|The seller-defined name or "title" of the promotion that the seller can use to identify a promotion. This label is not displayed in end-user flows.  <br><br><b>Maximum length:</b> 90|
|priority|string|false|none|Applicable for only <b>ORDER_DISCOUNT</b> promotions, this field indicates the precedence of the promotion, which is used to determine the position of a promotion on the seller's <b>All Offers</b> page. If an item is associated with multiple promotions, the promotion with the higher priority takes precedence. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/sme:PromotionPriorityEnum'>eBay API documentation</a>|
|promotionImageUrl|string|false|none|Required for CODED_COUPON, MARKDOWN_SALE, and ORDER_DISCOUNT promotions, and not valid for VOLUME_DISCOUNT promotions.  <br><br>Populate this field with a URL that points to an image to be used with the promotion. This image is displayed on the seller's <b>All Offers</b> page. The URL must point to either JPEG or PNG image and it must be a minimum of 500x500 pixels in dimension and cannot exceed 12Mb in size.|
|promotionStatus|string|false|none|The current status of the promotion. When creating a new promotion, this value must be set to either <code>DRAFT</code> or <code>SCHEDULED</code>.  <br><br>Note that you must set this value to <code>SCHEDULED</code> when you update a <b>RUNNING</b> promotion. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/sme:PromotionStatusEnum'>eBay API documentation</a>|
|promotionType|string|false|none|Use this field to specify the type of the promotion you are creating. <p>The supported types are:</p> <ul><li><code>CODED_COUPON</code> &ndash; A coupon code promotion set with <b>createItemPromotion</b>.</li> <li><code>MARKDOWN_SALE</code> &ndash; A markdown promotion set with <b>createItemPriceMarkdownPromotion</b>.</li> <li><code>ORDER_DISCOUNT</code> &ndash; A threshold promotion set with <b>createItemPromotion</b>.</li> <li><code>VOLUME_DISCOUNT</code> &ndash; A volume pricing promotion set with <b>createItemPromotion</b>.</li></ul> <p>See the <a href="/api-docs/sell/static/marketing/promotions-manager.html" target="_blank">Promotions Manager</a> documentation for details.</p> <p><i>Required if </i> you are creating a volume pricing promotion (<code>VOLUME_DISCOUNT</code>).</p> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/sme:PromotionTypeEnum'>eBay API documentation</a>|
|startDate|string|false|none|The date and time the promotion starts in UTC format (<code>yyyy-MM-ddThh:mm:ssZ</code>). For display purposes, convert this time into the local time of the seller.|

<h2 id="tocS_ItemPromotionResponse">ItemPromotionResponse</h2>
<!-- backwards compatibility -->
<a id="schemaitempromotionresponse"></a>
<a id="schema_ItemPromotionResponse"></a>
<a id="tocSitempromotionresponse"></a>
<a id="tocsitempromotionresponse"></a>

```json
{
  "applyDiscountToSingleItemOnly": true,
  "budget": {
    "currency": "string",
    "value": "string"
  },
  "couponConfiguration": {
    "couponCode": "string",
    "couponType": "string",
    "maxCouponRedemptionPerUser": 0
  },
  "description": "string",
  "discountRules": [
    {
      "discountBenefit": {
        "amountOffItem": {
          "currency": "string",
          "value": "string"
        },
        "amountOffOrder": {
          "currency": "string",
          "value": "string"
        },
        "percentageOffItem": "string",
        "percentageOffOrder": "string"
      },
      "discountSpecification": {
        "forEachAmount": {
          "currency": "string",
          "value": "string"
        },
        "forEachQuantity": 0,
        "minAmount": {
          "currency": "string",
          "value": "string"
        },
        "minQuantity": 0,
        "numberOfDiscountedItems": 0
      },
      "maxDiscountAmount": {
        "currency": "string",
        "value": "string"
      },
      "ruleOrder": 0
    }
  ],
  "endDate": "string",
  "inventoryCriterion": {
    "inventoryCriterionType": "string",
    "inventoryItems": [
      {
        "inventoryReferenceId": "string"
      }
    ],
    "listingIds": [
      "string"
    ],
    "ruleCriteria": {
      "excludeInventoryItems": [
        {
          "inventoryReferenceId": "string"
        }
      ],
      "excludeListingIds": [
        "string"
      ],
      "markupInventoryItems": [
        {
          "inventoryReferenceId": "string"
        }
      ],
      "markupListingIds": [
        "string"
      ],
      "selectionRules": [
        {
          "brands": [
            "string"
          ],
          "categoryIds": [
            "string"
          ],
          "categoryScope": "string",
          "listingConditionIds": [
            "string"
          ],
          "maxPrice": {
            "currency": "string",
            "value": "string"
          },
          "minPrice": {
            "currency": "string",
            "value": "string"
          }
        }
      ]
    }
  },
  "marketplaceId": "string",
  "name": "string",
  "priority": "string",
  "promotionId": "string",
  "promotionImageUrl": "string",
  "promotionStatus": "string",
  "promotionType": "string",
  "startDate": "string"
}
```

This complex type defines the fields returned for an item (threshold) promotion.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|applyDiscountToSingleItemOnly|boolean|false|none|If set to <code>true</code>, the discount is applied only when the buyer purchases multiple quantities of a single item in the promotion. Otherwise, the promotional discount applies to multiple quantities of any items in the promotion. Different variations of a multi-variation item are considered to be the same item. Note that this flag is not relevant if the <b>inventoryCriterion</b> container identifies a single listing ID for the promotion.|
|budget|[Amount](#schemaamount)|false|none|This sets the budget for the <code>CODED_COUPON</code> promotion type. Supported values range from 100-1000000. Supported currency codes include USD, GBP, EUR, and AUD. <p class="tablenote"><b>Note:</b> The budget value for an active or paused promotion can not be decreased.</p> <p class="tablenote"><b>Note:</b> The Currency Code for 'budget' must be the same as the Currency Code for 'maxDiscountAmount'.</p>|
|couponConfiguration|[CouponConfiguration](#schemacouponconfiguration)|false|none|The configuration of a coded coupon promotion.|
|description|string|false|none|Required for CODED_COUPON promotions, this is the seller-defined "tag line" for the offer, such as "Save on designer shoes." The tag line appears under the "offer-type text" that is generated for the promotion and is displayed under the offer tile that is shown on the seller's <b>All Offers</b> page and on the event page for the promotion.  This tag line is not used with volume pricing promotions. <p class="tablenote"><b>Note:</b> Offer-type text is a teaser that's presented throughout the buyer's journey through the sales flow and is generated by eBay. This text is not editable by the seller&mdash;it's derived from the settings in the <b>discountRules</b> and <b>discountSpecification</b> fields&mdash;and can be, for example, "Extra 20% off when you buy 3+".</p>  <br><b>Maximum length:</b> 50|
|discountRules|[[DiscountRule](#schemadiscountrule)]|false|none|A list containing the promotion benefits (<b>discountRule</b>) and the rules that define when the benefit is applied (<b>discountSpecification</b>).|
|endDate|string|false|none|The date and time the promotion ends in UTC format (<code>yyyy-MM-ddThh:mm:ssZ</code>). For display purposes, convert this time into the local time of the seller.|
|inventoryCriterion|[InventoryCriterion](#schemainventorycriterion)|false|none|Returns either an array of listing IDs or the selection rules used to specify the items included in the promotion. Listing IDs can be either eBay listing IDs or an array of seller's inventory reference IDs (know as SKUs or custom labels). See the <b>selectionRules</b> container for the rule criteria you can use to select inventory.|
|marketplaceId|string|false|none|The eBay marketplace ID of the site where the threshold promotion is hosted. Threshold promotions are currently supported on a limited number of eBay marketplaces.  <p><b>Valid values:</b></p>  <ul class="compact"><li><code>EBAY_AU</code> = Australia</li> <li><code>EBAY_DE</code> = Germany</li> <li><code>EBAY_ES</code> = Spain</li> <li><code>EBAY_FR</code> = France</li> <li><code>EBAY_GB</code> = Great Britain</li> <li><code>EBAY_IT</code> = Italy</li> <li><code>EBAY_US</code> = United States</li></ul> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/ba:MarketplaceIdEnum'>eBay API documentation</a>|
|name|string|false|none|The seller-defined name or "title" of the promotion that the seller can use to identify a promotion. This label is not displayed in end-user flows.  <br><br><b>Maximum length:</b> 90|
|priority|string|false|none|Applicable for only <b>ORDER_DISCOUNT</b> promotions, this field indicates the precedence of the promotion, which eBay uses to determine the position of a promotion on the seller's <b>All Offers</b> page. If an item is associated with multiple promotions, the promotion with the higher priority takes precedence. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/sme:PromotionPriorityEnum'>eBay API documentation</a>|
|promotionId|string|false|none|A unique eBay-assigned ID for the promotion that's generated when the promotion is created.|
|promotionImageUrl|string|false|none|Required for CODED_COUPON, MARKDOWN_SALE, and ORDER_DISCOUNT promotions, and not applicable for <b>VOLUME_DISCOUNT</b> promotions, this field is a URL that points to an image for the promotion. This image is displayed on the seller's <b>All Offers</b> page. The URL must point to either JPEG or PNG image and it must be a minimum of 500x500 pixels in dimension and cannot exceed 12Mb in size.|
|promotionStatus|string|false|none|The current status of the promotion. When creating a new promotion, this value must be set to either <code>DRAFT</code> or <code>SCHEDULED</code>. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/sme:PromotionStatusEnum'>eBay API documentation</a>|
|promotionType|string|false|none|Indicates the type of the promotion, either <code>CODED_COUPON</code>, <code>MARKDOWN_SALE</code>, <code>ORDER_DISCOUNT</code>, or <code>VOLUME_DISCOUNT</code>. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/sme:PromotionTypeEnum'>eBay API documentation</a>|
|startDate|string|false|none|The date and time the promotion starts in UTC format (<code>yyyy-MM-ddThh:mm:ssZ</code>). For display purposes, convert this time into the local time of the seller.|

<h2 id="tocS_ItemsPagedCollection">ItemsPagedCollection</h2>
<!-- backwards compatibility -->
<a id="schemaitemspagedcollection"></a>
<a id="schema_ItemsPagedCollection"></a>
<a id="tocSitemspagedcollection"></a>
<a id="tocsitemspagedcollection"></a>

```json
{
  "href": "string",
  "limit": 0,
  "listings": [
    {
      "currentPrice": {
        "currency": "string",
        "value": "string"
      },
      "freeShipping": true,
      "inventoryReferenceId": "string",
      "inventoryReferenceType": "string",
      "listingCategoryId": "string",
      "listingCondition": "string",
      "listingConditionId": "string",
      "listingId": "string",
      "listingPromotionStatuses": [
        {
          "listingMarkdownStatus": "string",
          "statusChangedDate": "string",
          "statusMessage": "string"
        }
      ],
      "quantity": 0,
      "storeCategoryId": "string",
      "title": "string"
    }
  ],
  "next": "string",
  "offset": 0,
  "prev": "string",
  "total": 0,
  "warnings": [
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
  ]
}
```

This type defines the fields for a paginated result set of promotions. The response consists of 0 or more sequenced pages that are returned from the complete <i>result set</i>, where each page consists of 0 or more items.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|href|string|false|none|The URI of the current page of results from the result set.|
|limit|integer(int32)|false|none|The number of items returned on a single page from the result set. This value can be set in the request with the <b>limit</b> query parameter.|
|listings|[[ListingDetail](#schemalistingdetail)]|false|none|An array of the listings associated with a promotion.|
|next|string|false|none|The URI for the following page of results. This value is returned only if there is an additional page of results to display from the result set. <br><br><b>Max length</b>: 2048|
|offset|integer(int32)|false|none|The number of results skipped in the result set before listing the first returned result. This value can be set in the request with the <b>offset</b> query parameter. <p class="tablenote"><strong>Note: </strong>The items in a paginated result set use a zero-based list where the first item in the list has an offset of <code>0</code>.</p>|
|prev|string|false|none|The URI for the preceding page of results. This value is returned only if there is a previous page of results to display from the result set. <br><br><b>Max length</b>: 2048|
|total|integer(int32)|false|none|The total number of items retrieved in the result set.  <br><br>If no items are found, this field is returned with a value of <code>0</code>.|
|warnings|[[Error](#schemaerror)]|false|none|A list of warnings that were generated by the request. Warning do not stop processing, but should be checked to ensure that the response contains the correct information.|

<h2 id="tocS_Keyword">Keyword</h2>
<!-- backwards compatibility -->
<a id="schemakeyword"></a>
<a id="schema_Keyword"></a>
<a id="tocSkeyword"></a>
<a id="tocskeyword"></a>

```json
{
  "adGroupId": "string",
  "bid": {
    "currency": "string",
    "value": "string"
  },
  "keywordId": "string",
  "keywordStatus": "string",
  "keywordText": "string",
  "matchType": "string"
}
```

A type that contains the details for keywords that are associated with an ad group.<br /><br /><span class="tablenote"><b>Note:</b> This type only applies to the Cost Per Click (CPC) funding model; it does not apply to the Cost Per Sale (CPS) funding model.</span>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adGroupId|string|false|none|This field identifies the ad group that the keyword is associated with.|
|bid|[Amount](#schemaamount)|false|none|The bid associated with the keyword. This container will not be returned if the keyword does not have a defined bid value.|
|keywordId|string|false|none|The unique identifier of a keyword.|
|keywordStatus|string|false|none|The status of the keyword.<br /><br /><b>Valid Values:</b><ul><li><code>ACTIVE</code></li><li><code>PAUSED</code></li><li><code>ARCHIVED</code></li></ul> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:KeywordStatusEnum'>eBay API documentation</a>|
|keywordText|string|false|none|The text of the keyword.|
|matchType|string|false|none|A field that defines the match type for the keyword.<br /><br /><b>Valid Values:</b><ul><li><code>BROAD</code></li><li><code>EXACT</code></li><li><code>PHRASE</code></li></ul> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:MatchTypeEnum'>eBay API documentation</a>|

<h2 id="tocS_KeywordPagedCollectionResponse">KeywordPagedCollectionResponse</h2>
<!-- backwards compatibility -->
<a id="schemakeywordpagedcollectionresponse"></a>
<a id="schema_KeywordPagedCollectionResponse"></a>
<a id="tocSkeywordpagedcollectionresponse"></a>
<a id="tocskeywordpagedcollectionresponse"></a>

```json
{
  "href": "string",
  "keywords": [
    {
      "adGroupId": "string",
      "bid": {
        "currency": "string",
        "value": "string"
      },
      "keywordId": "string",
      "keywordStatus": "string",
      "keywordText": "string",
      "matchType": "string"
    }
  ],
  "limit": 0,
  "next": "string",
  "offset": 0,
  "prev": "string",
  "total": 0
}
```

A type that defines the keywords of the paged collection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|href|string|false|none|The URI of the current page of results from the result set.|
|keywords|[[Keyword](#schemakeyword)]|false|none|This array contains all of the keywords that match the request criteria. Keywords will be sorted by adGroupId, regardless of whether you searched for keywords across the entire campaign, or if you searched for keywords within one or specific ad groups.|
|limit|integer(int32)|false|none|The number of keywords returned on a single page from the result set. This value can be set in the request with the <b>limit</b> query parameter.|
|next|string|false|none|The call URI that can be used to retrieve the next page in the result set. This value is returned only if there is an additional page of results to display from the result set. <br><br><b>Max length</b>: 2048|
|offset|integer(int32)|false|none|The number of results skipped in the result set before listing the first returned result. This value can be set in the request with the <b>offset</b> query parameter. <p class="tablenote"><strong>Note: </strong>The items in a paginated result set use a zero-based list where the first item in the list has an offset of <code>0</code>.</p>|
|prev|string|false|none|The call URI that can be used to retrieve the previous page in the result set. Basically, all of the request parameters will remain the same except the offset value, which will be decreased to retrieve the previous page of results. <br><br><b>Max length</b>: 2048|
|total|integer(int32)|false|none|The total number of keywords retrieved in the result set.  <br><br>If no keywords are found, this field is returned with a value of <code>0</code>.|

<h2 id="tocS_KeywordRequest">KeywordRequest</h2>
<!-- backwards compatibility -->
<a id="schemakeywordrequest"></a>
<a id="schema_KeywordRequest"></a>
<a id="tocSkeywordrequest"></a>
<a id="tocskeywordrequest"></a>

```json
{
  "keywordText": "string",
  "matchType": "string"
}
```

A type that defines the fields used by the <b>Keyword</b> method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|keywordText|string|false|none|The text of the keyword. Keywords are not case sensitive and compound words can be used without additional encoding (for example, tennis ball).<br /><br /><b>Maximum number of characters: </b>100 <br /><br /><b>Maximum number of words: </b>10 |
|matchType|string|false|none|A field that defines the match type for the keyword.<br /><br /><b>Valid Values:</b><ul><li><code>BROAD</code></li><li><code>EXACT</code></li><li><code>PHRASE</code></li></ul> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:MatchTypeEnum'>eBay API documentation</a>|

<h2 id="tocS_KeywordResponse">KeywordResponse</h2>
<!-- backwards compatibility -->
<a id="schemakeywordresponse"></a>
<a id="schema_KeywordResponse"></a>
<a id="tocSkeywordresponse"></a>
<a id="tocskeywordresponse"></a>

```json
{
  "adGroupId": "string",
  "errors": [
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
  ],
  "href": "string",
  "keywordId": "string",
  "keywordText": "string",
  "matchType": "string",
  "statusCode": 0
}
```

A type that defines the response fields used by the <b>Keyword</b> method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adGroupId|string|false|none|The identifier of the ad group that the keyword was added to.|
|errors|[[Error](#schemaerror)]|false|none|This container will be returned if there is an issue creating the corresponding keyword and/or adding that keyword to the corresponding ad group.|
|href|string|false|none|The getKeyword URI for the keyword, which is used to retrieve the keyword. This URI will be returned for each successfully created keyword.|
|keywordId|string|false|none|A unique eBay-assigned ID for a keyword that is generated for an ad group. This keyword ID will be generated for each successfully created keyword.|
|keywordText|string|false|none|The text of the keyword.|
|matchType|string|false|none|A field that defines the match type for the keyword.<br /><br /><b>Valid Values:</b><ul><li><code>BROAD</code></li><li><code>EXACT</code></li><li><code>PHRASE</code></li></ul> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:MatchTypeEnum'>eBay API documentation</a>|
|statusCode|integer(int32)|false|none|An HTTP status code is returned for each keyword to indicate the success or failure of adding that keyword to the ad group.|

<h2 id="tocS_ListingDetail">ListingDetail</h2>
<!-- backwards compatibility -->
<a id="schemalistingdetail"></a>
<a id="schema_ListingDetail"></a>
<a id="tocSlistingdetail"></a>
<a id="tocslistingdetail"></a>

```json
{
  "currentPrice": {
    "currency": "string",
    "value": "string"
  },
  "freeShipping": true,
  "inventoryReferenceId": "string",
  "inventoryReferenceType": "string",
  "listingCategoryId": "string",
  "listingCondition": "string",
  "listingConditionId": "string",
  "listingId": "string",
  "listingPromotionStatuses": [
    {
      "listingMarkdownStatus": "string",
      "statusChangedDate": "string",
      "statusMessage": "string"
    }
  ],
  "quantity": 0,
  "storeCategoryId": "string",
  "title": "string"
}
```

This type defines the fields that describe a listing that is in a promotion.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currentPrice|[Amount](#schemaamount)|false|none|The container that returns the current price of the listing.|
|freeShipping|boolean|false|none|If set to <code>true</code>, the seller pays for the shipping (or that the item is marked for local pickup only) In this case, the listing does not have an associated shipping cost for the first listed domestic-shipping option (even if the first domestic-shipping option specifies a flat-rate or calculated shipping option). If <code>false</code>, the buyer is required to pay for a flat-rate or calculated cost shipping service.|
|inventoryReferenceId|string|false|none|The seller's inventory reference ID for a listing. Also known as the "SKU" or "custom label," an inventory reference ID is either the ID of the listing or, if the listing has variations (such as a shirt that's available in multiple sizes and colors), the ID of the parent listing.|
|inventoryReferenceType|string|false|none|Indicates the type of the <b>inventoryReferenceId</b>, which can be either a single-SKU or a multi-SKU listing (<code>INVENTORY_ITEM</code> and <code>INVENTORY_ITEM_GROUP</code>, respectively).  <br><br><b>Note:</b> This value is not currently returned in the response.|
|listingCategoryId|string|false|none|The ID of the category that listing belongs to. The ID is a numeric and unique identifier for the category that is assigned by eBay.|
|listingCondition|string|false|none|An eBay-assigned value that indicates condition of the associated item. For more information, see <a href="/api-docs/sell/static/metadata/condition-id-values.html">Item condition ID and name values</a>.|
|listingConditionId|string|false|none|The ID of the condition associated with the item. For more information, see <a href="/api-docs/sell/static/metadata/condition-id-values.html">Item condition ID and name values</a>.<br /><br /><span class="tablenote"><b>Note: </b> This value is not currently returned in the response.</span>|
|listingId|string|false|none|A unique eBay-assigned ID that is generated when the item is listed.|
|listingPromotionStatuses|[[ItemMarkdownStatus](#schemaitemmarkdownstatus)]|false|none|A list of the status values assigned to the item and the date that each new status was assigned.|
|quantity|integer(int32)|false|none|The number of items being sold in the listing.|
|storeCategoryId|string|false|none|Store CategoryId (if any) that to which the listing belongs. This field is blank if there is no seller Store category ID.|
|title|string|false|none|The seller-defined title of the listing that a seller can use to identify the item.  This label is not displayed in end-user flows.|

<h2 id="tocS_MetricMetadata">MetricMetadata</h2>
<!-- backwards compatibility -->
<a id="schemametricmetadata"></a>
<a id="schema_MetricMetadata"></a>
<a id="tocSmetricmetadata"></a>
<a id="tocsmetricmetadata"></a>

```json
{
  "dataType": "string",
  "metricKey": "string"
}
```

This type defines the name and data type of a metric.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataType|string|false|none|The data type of the returned metric value. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/plr:DataTypeEnum'>eBay API documentation</a>|
|metricKey|string|false|none|The name of the metric.|

<h2 id="tocS_NegativeKeyword">NegativeKeyword</h2>
<!-- backwards compatibility -->
<a id="schemanegativekeyword"></a>
<a id="schema_NegativeKeyword"></a>
<a id="tocSnegativekeyword"></a>
<a id="tocsnegativekeyword"></a>

```json
{
  "adGroupId": "string",
  "campaignId": "string",
  "negativeKeywordId": "string",
  "negativeKeywordMatchType": "string",
  "negativeKeywordStatus": "string",
  "negativeKeywordText": "string"
}
```

A type that defines the fields for a negative keyword.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adGroupId|string|false|none|An ad group ID that is generated when an ad group is first created and associated with a campaign.<br /><br /><span class="tablenote"><b>Note:</b> You can call the  <a href="/api-docs/sell/marketing/resources/adgroup/methods/getAdGroups">getAdGroups</a> method to retrieve the ad group IDs for a seller.</span>|
|campaignId|string|false|none|A unique eBay-assigned ID for a campaign. This ID is generated when a campaign is created.|
|negativeKeywordId|string|false|none|A unique eBay-assigned ID for a negative keyword. This keyword ID will be generated for each successfully created negative keyword.|
|negativeKeywordMatchType|string|false|none|A field that defines the match type for the negative keyword.<br /><br /><span class="tablenote"><span style="color:#004680"><strong>Note:</strong></span> Broad matching of negative keywords is not currently supported.</span><br /><b>Valid Values:</b><ul><li><code>EXACT</code></li><li><code>PHRASE</code></li></ul> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:NegativeKeywordMatchTypeEnum'>eBay API documentation</a>|
|negativeKeywordStatus|string|false|none|A field that defines the status of the negative keyword. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:NegativeKeywordStatusEnum'>eBay API documentation</a>|
|negativeKeywordText|string|false|none|The text for the negative keyword.|

<h2 id="tocS_NegativeKeywordPagedCollectionResponse">NegativeKeywordPagedCollectionResponse</h2>
<!-- backwards compatibility -->
<a id="schemanegativekeywordpagedcollectionresponse"></a>
<a id="schema_NegativeKeywordPagedCollectionResponse"></a>
<a id="tocSnegativekeywordpagedcollectionresponse"></a>
<a id="tocsnegativekeywordpagedcollectionresponse"></a>

```json
{
  "href": "string",
  "limit": 0,
  "negativeKeywords": [
    {
      "adGroupId": "string",
      "campaignId": "string",
      "negativeKeywordId": "string",
      "negativeKeywordMatchType": "string",
      "negativeKeywordStatus": "string",
      "negativeKeywordText": "string"
    }
  ],
  "next": "string",
  "offset": 0,
  "prev": "string",
  "total": 0
}
```

A type that defines the negative keywords, returned in a paged collection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|href|string|false|none|The URI of the current page of results from the result set.|
|limit|integer(int32)|false|none|The number of items returned on a single page from the result set. This value can be set in the request with the <b>limit</b> query parameter.|
|negativeKeywords|[[NegativeKeyword](#schemanegativekeyword)]|false|none|A list of negative keywords returned in the paginated collection.|
|next|string|false|none|The call URI that can be used to retrieve the next page in the result set. This value is returned only if there is an additional page of results to display from the result set.|
|offset|integer(int32)|false|none|The number of results skipped in the result set before listing the first returned result. This value can be set in the request with the <b>offset</b> query parameter.<br /><br /><b>Default:</b> <code>0</code><br /><br /><span class="tablenote"><b>Note: </b>The items in a paginated result set use a zero-based list, where the first item in the list has an offset of <code>0</code>.</span>|
|prev|string|false|none|The call URI that can be used to retrieve the previous page in the result set. Basically, all of the request parameters will remain the same except the offset value, which will be decreased to retrieve the previous page of results.|
|total|integer(int32)|false|none|The total number of result sets in the paginated collection.|

<h2 id="tocS_NegativeKeywordResponse">NegativeKeywordResponse</h2>
<!-- backwards compatibility -->
<a id="schemanegativekeywordresponse"></a>
<a id="schema_NegativeKeywordResponse"></a>
<a id="tocSnegativekeywordresponse"></a>
<a id="tocsnegativekeywordresponse"></a>

```json
{
  "adGroupId": "string",
  "campaignId": "string",
  "errors": [
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
  ],
  "href": "string",
  "negativeKeywordId": "string",
  "negativeKeywordMatchType": "string",
  "negativeKeywordText": "string",
  "statusCode": 0
}
```

A type that defines the negative keyword response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adGroupId|string|false|none|A unique identifier for an ad group that is generated when an ad group is first created and associated with a campaign.|
|campaignId|string|false|none|A unique eBay-assigned ID for a campaign. This ID is generated when a campaign is created.|
|errors|[[Error](#schemaerror)]|false|none|This container will be returned if there is an issue creating the corresponding negative keyword.|
|href|string|false|none|The URI for the negative keyword, which is used to retrieve the negative keyword. This URI will be returned for each successfully created negative keyword.|
|negativeKeywordId|string|false|none|A unique eBay-assigned ID for a negative keyword. This negative keyword ID will be generated for each successfully created negative keyword.|
|negativeKeywordMatchType|string|false|none|The match type for the negative keyword.<br /><br /><span class="tablenote"><span style="color:#004680"><strong>Note:</strong></span> Broad matching of negative keywords is not currently supported.</span><br /><b>Valid Values:</b><ul><li><code>EXACT</code></li><li><code>PHRASE</code></li></ul> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:NegativeKeywordMatchTypeEnum'>eBay API documentation</a>|
|negativeKeywordText|string|false|none|The text for the negative keyword.|
|statusCode|integer(int32)|false|none|The status of the request to create a negative keyword. This field indicates whether the process was successful or not.|

<h2 id="tocS_PromotionDetail">PromotionDetail</h2>
<!-- backwards compatibility -->
<a id="schemapromotiondetail"></a>
<a id="schema_PromotionDetail"></a>
<a id="tocSpromotiondetail"></a>
<a id="tocspromotiondetail"></a>

```json
{
  "couponCode": "string",
  "description": "string",
  "endDate": "string",
  "marketplaceId": "string",
  "name": "string",
  "priority": "string",
  "promotionHref": "string",
  "promotionId": "string",
  "promotionImageUrl": "string",
  "promotionStatus": "string",
  "promotionType": "string",
  "startDate": "string"
}
```

This type defines the fields that describe a promotion. This includes all the information about a promotion except for the listings that are a part of the promotion.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|couponCode|string|false|none|A unique code that buyers can use during checkout to receive a discount. The code must be unique across eBay.|
|description|string|false|none|This is the seller-defined "tag line" for the offer, such as "Save on designer shoes." Tag lines appear under the "offer-type text" that is generated for a promotion and displayed under the offer tile that is shown on the seller's <b>All Offers</b> page and on the promotion's event page.  <p class="tablenote"><b>Note:</b> Offer-type text is a teaser that's presented throughout the buyer's journey through the sales flow and is generated by eBay. This text is not editable by the seller&mdash;it's derived from the settings in the <b>discountRules</b> and <b>discountSpecification</b> fields&mdash;and can be, for example, "Extra 20% off when you buy 3+".</p>  <br><b>Maximum length:</b> 50 <br><br><i>Required if</i> you are configuring ORDER_DISCOUNT or MARKDOWN_SALE promotions (and not valid for VOLUME_DISCOUNT promotions).|
|endDate|string|false|none|The date and time the promotion ends in UTC format (<code>yyyy-MM-ddThh:mm:ssZ</code>). For display purposes, convert this time into the local time of the seller.|
|marketplaceId|string|false|none|The eBay marketplace ID of the site where the promotion is hosted. Threshold promotions are supported on a select set of marketplaces while markdown promotions are supported on all eBay marketplaces. <p><b>Valid values for threshold promotions are as follows:</b></p>  <ul class="compact"><li><code>EBAY_AU</code> = Australia</li> <li><code>EBAY_DE</code> = Germany</li> <li><code>EBAY_ES</code> = Spain</li> <li><code>EBAY_FR</code> = France</li> <li><code>EBAY_GB</code> = Great Britain</li> <li><code>EBAY_IT</code> = Italy</li> <li><code>EBAY_US</code> = United States</li></ul> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/ba:MarketplaceIdEnum'>eBay API documentation</a>|
|name|string|false|none|The seller-defined name or "title" of the promotion, such as "Buy 1 Get 1", that the seller can use to identify a promotion. This label is not displayed in end-user flows.  <br><br><b>Maximum length:</b> 90|
|priority|string|false|none|Applicable for only <b>ORDER_DISCOUNT</b> promotions, this field indicates the precedence of the promotion, which is used to determine the position of a promotion on the seller's <b>All Offers</b> page. If an item is associated with multiple promotions, the promotion with the higher priority takes precedence. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/sme:PromotionPriorityEnum'>eBay API documentation</a>|
|promotionHref|string|false|none|The URI of the promotion details.|
|promotionId|string|false|none|A unique eBay-assigned ID for the promotion that's generated when the promotion is created.|
|promotionImageUrl|string|false|none|Required for CODED_COUPON, MARKDOWN_SALE, and ORDER_DISCOUNT promotions, and not applicable for <b>VOLUME_DISCOUNT</b> promotions, this field is a URL that points to an image for the promotion. This image is displayed on the seller's <b>All Offers</b> page. The URL must point to either JPEG or PNG image and it must be a minimum of 500x500 pixels in dimension and cannot exceed 12Mb in size.|
|promotionStatus|string|false|none|The current status of the promotion. When creating a new promotion, you must set this value to either <code>DRAFT</code> or <code>SCHEDULED</code>. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/sme:PromotionStatusEnum'>eBay API documentation</a>|
|promotionType|string|false|none|Indicates type of the promotion, either <code>CODED_COUPON</code>, <code>MARKDOWN_SALE</code>, <code>ORDER_DISCOUNT</code>, or <code>VOLUME_DISCOUNT</code>. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/sme:PromotionTypeEnum'>eBay API documentation</a>|
|startDate|string|false|none|The date and time the promotion starts in UTC format (<code>yyyy-MM-ddThh:mm:ssZ</code>). For display purposes, convert this time into the local time of the seller.|

<h2 id="tocS_PromotionReportDetail">PromotionReportDetail</h2>
<!-- backwards compatibility -->
<a id="schemapromotionreportdetail"></a>
<a id="schema_PromotionReportDetail"></a>
<a id="tocSpromotionreportdetail"></a>
<a id="tocspromotionreportdetail"></a>

```json
{
  "averageItemDiscount": {
    "currency": "string",
    "value": "string"
  },
  "averageItemRevenue": {
    "currency": "string",
    "value": "string"
  },
  "averageOrderDiscount": {
    "currency": "string",
    "value": "string"
  },
  "averageOrderRevenue": {
    "currency": "string",
    "value": "string"
  },
  "averageOrderSize": "string",
  "baseSale": {
    "currency": "string",
    "value": "string"
  },
  "itemsSoldQuantity": 0,
  "numberOfOrdersSold": 0,
  "percentageSalesLift": "string",
  "promotionHref": "string",
  "promotionId": "string",
  "promotionReportId": "string",
  "promotionSale": {
    "currency": "string",
    "value": "string"
  },
  "promotionType": "string",
  "totalDiscount": {
    "currency": "string",
    "value": "string"
  },
  "totalSale": {
    "currency": "string",
    "value": "string"
  }
}
```

This type defines the fields in a promotion-level report.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|averageItemDiscount|[Amount](#schemaamount)|false|none|The <i>average item discount</i> is the average discount that has been applied to each item in a promotion. This value is calculated as follows:  <br><br><b>totalDiscount</b> / <b>itemsSoldQuantity</b> = <b>averageItemDiscount</b>|
|averageItemRevenue|[Amount](#schemaamount)|false|none|The <i>average item revenue</i> is the average revenue that has been received for each item in a promotion. This value is calculated as follows:  <br><br><b>totalSales</b> / <b>itemsSoldQuantity</b> = <b>averageItemRevenue</b>|
|averageOrderDiscount|[Amount](#schemaamount)|false|none|The <i>average order discount</i> is the average discount that has been applied to each order in a promotion. This value is calculated as follows:  <br><br><b>totalDiscount</b> / <b>numberOfOrdersSold</b> = <b>averageOrderDiscount</b>|
|averageOrderRevenue|[Amount](#schemaamount)|false|none|The <i>average order revenue</i> is the average revenue that has been received for each order in a promotion. This value is calculated as follows:  <br><br><b>totalSales</b> / <b>numberOfOrdersSold</b> = <b>averageOrderRevenue</b>|
|averageOrderSize|string|false|none|The <i>average order size</i> is the average number of items that each order contained in a promotion. This value is calculated as follows:  <br><br><b>itemsSoldQuantity</b> / <b>numberOfOrdersSold</b> = <b>averageOrderSize</b> |
|baseSale|[Amount](#schemaamount)|false|none|This is the monetary amount of items purchased in a promotion where the threshold <i>wasn't met</i>, so the discount was not applied.  <br><br>For example, suppose you're running a "Buy 1, get 1 at 50%" promotion on $5 socks. One buyer purchased only one pair of socks, so they pay the full price of $5. Here, your <b>baseSale</b> amount would be $5.|
|itemsSoldQuantity|integer(int32)|false|none|This is the quantity of items purchased in a threshold promotion where the threshold <i>has been met</i> and the discount was applied. <br><br>For example, suppose you're running a "Buy 1, get 1 at 50%" promotion on $5 socks. One buyer purchases two pairs of socks, so they pay $7.50 for both pairs (rather than the full price of $10). Your number of items sold (<b>itemsSoldQuantity</b>) would be 2 and you number of orders sold (<b>numberOfOrdersSold</b>) would be 1.|
|numberOfOrdersSold|integer(int32)|false|none|This is the number of orders sold in a threshold promotion where the threshold <i>has been met</i> and the discount was applied. <br><br>For example, suppose you're running a "Buy 1, get 1 at 50%" promotion on $5 socks. One buyer purchases two pairs of socks, so they pay $7.50 for both pairs (rather than the full price of $10). Your <b>numberOfOrdersSold</b> would be 1 and your <b>itemsSoldQuantity</b> would be 2.|
|percentageSalesLift|string|false|none|The <i>percentage sales lift</i> is the total dollar amount gained due to promotions. This value is calculated as follows:  <br><br> <b>promotionSale</b> / <b>totalSale</b> =  <b>percentageSalesLift</b> |
|promotionHref|string|false|none|The URI of the promotion report.|
|promotionId|string|false|none|A unique eBay-assigned ID for the promotion that's generated when the promotion is created.|
|promotionReportId|string|false|none|The unique eBay-assigned ID of the promotion report that is generated when the report is created.|
|promotionSale|[Amount](#schemaamount)|false|none|This is the monetary amount of the items sold in a threshold promotion where the threshold <i>has been met</i> and the discount was applied.  <br><br>For example, suppose you're running a "Buy 1, get 1 at 50%" promotion on $5 socks. One buyer purchases two pairs of socks, so they pay $7.50 for both pairs (rather than the full price of $10). Your <b>promotionSale</b> amount would be $7.50.|
|promotionType|string|false|none|Indicates the type of the promotion, either <code>CODED_COUPON</code>, <code>MARKDOWN_SALE</code>, <code>ORDER_DISCOUNT</code>, or <code>VOLUME_DISCOUNT</code>. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/sme:PromotionTypeEnum'>eBay API documentation</a>|
|totalDiscount|[Amount](#schemaamount)|false|none|This is the monetary discount amount applied to the sale of items in a threshold promotion where the threshold <i>has been met</i> and the discount was applied.  <br><br>For example, suppose you're running a "Buy 1, get 1 at 50%" promotion on $5 socks. One buyer purchases two pairs of socks, so they pay $7.50 for both pairs (rather than the full price of $10). Your <b>totalDiscount</b> amount would be $2.50.|
|totalSale|[Amount](#schemaamount)|false|none|This is the total monetary sales amount of all items sold in a promotion. <br><br>For example, suppose you're running a "Buy 1, get 1 at 50%" promotion on $5 socks. You make one sale where the buyer purchases only one pair of socks and they pay the full price of $5 (<b>baseSale</b>). You make a second sale where the buyer purchases two pairs of socks and they pay $7.50, for both pairs (<b>promotionSale</b>). Your <b>totalSale</b> would be $12.50. This value is calculated as follows:  <br><br><b>baseSale</b> + <b>promotionSale</b> = <b>totalSale</b>|

<h2 id="tocS_PromotionsPagedCollection">PromotionsPagedCollection</h2>
<!-- backwards compatibility -->
<a id="schemapromotionspagedcollection"></a>
<a id="schema_PromotionsPagedCollection"></a>
<a id="tocSpromotionspagedcollection"></a>
<a id="tocspromotionspagedcollection"></a>

```json
{
  "href": "string",
  "limit": 0,
  "next": "string",
  "offset": 0,
  "prev": "string",
  "promotions": [
    {
      "couponCode": "string",
      "description": "string",
      "endDate": "string",
      "marketplaceId": "string",
      "name": "string",
      "priority": "string",
      "promotionHref": "string",
      "promotionId": "string",
      "promotionImageUrl": "string",
      "promotionStatus": "string",
      "promotionType": "string",
      "startDate": "string"
    }
  ],
  "total": 0
}
```

This type defines the fields in a paginated result set of seller promotions. The response consists of 0 or more sequenced pages that are returned from the complete <i>result set</i>, where each page consists of 0 or more items.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|href|string|false|none|The URI of the current page of results from the result set.|
|limit|integer(int32)|false|none|The number of items returned on a single page from the result set. This value can be set in the request with the <b>limit</b> query parameter.|
|next|string|false|none|The URI for the following page of results. This value is returned only if there is an additional page of results to display from the result set. <br><br><b>Max length</b>: 2048|
|offset|integer(int32)|false|none|The number of results skipped in the result set before listing the first returned result. This value can be set in the request with the <b>offset</b> query parameter. <p class="tablenote"><strong>Note: </strong>The items in a paginated result set use a zero-based list where the first item in the list has an offset of <code>0</code>.</p>|
|prev|string|false|none|The URI for the preceding page of results. This value is returned only if there is a previous page of results to display from the result set. <br><br><b>Max length</b>: 2048|
|promotions|[[PromotionDetail](#schemapromotiondetail)]|false|none|A list containing the details of each returned promotion. This includes all the information about the promotions except for the listings that are part of the promotions.|
|total|integer(int32)|false|none|The total number of items retrieved in the result set.  <br><br>If no items are found, this field is returned with a value of <code>0</code>.|

<h2 id="tocS_PromotionsReportPagedCollection">PromotionsReportPagedCollection</h2>
<!-- backwards compatibility -->
<a id="schemapromotionsreportpagedcollection"></a>
<a id="schema_PromotionsReportPagedCollection"></a>
<a id="tocSpromotionsreportpagedcollection"></a>
<a id="tocspromotionsreportpagedcollection"></a>

```json
{
  "href": "string",
  "limit": 0,
  "next": "string",
  "offset": 0,
  "prev": "string",
  "promotionReports": [
    {
      "averageItemDiscount": {
        "currency": "string",
        "value": "string"
      },
      "averageItemRevenue": {
        "currency": "string",
        "value": "string"
      },
      "averageOrderDiscount": {
        "currency": "string",
        "value": "string"
      },
      "averageOrderRevenue": {
        "currency": "string",
        "value": "string"
      },
      "averageOrderSize": "string",
      "baseSale": {
        "currency": "string",
        "value": "string"
      },
      "itemsSoldQuantity": 0,
      "numberOfOrdersSold": 0,
      "percentageSalesLift": "string",
      "promotionHref": "string",
      "promotionId": "string",
      "promotionReportId": "string",
      "promotionSale": {
        "currency": "string",
        "value": "string"
      },
      "promotionType": "string",
      "totalDiscount": {
        "currency": "string",
        "value": "string"
      },
      "totalSale": {
        "currency": "string",
        "value": "string"
      }
    }
  ],
  "total": 0
}
```

This type defines the fields in a paginated result set of promotion-level reports. The response consists of 0 or more sequenced pages that are returned from the complete <i>result set</i>, where each page consists of 0 or more items.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|href|string|false|none|The URI of the current page of results from the result set.|
|limit|integer(int32)|false|none|The number of items returned on a single page from the result set. This value can be set in the request with the <b>limit</b> query parameter.|
|next|string|false|none|The URI for the following page of results. This value is returned only if there is an additional page of results to display from the result set. <br><br><b>Max length</b>: 2048|
|offset|integer(int32)|false|none|The number of results skipped in the result set before listing the first returned result. This value can be set in the request with the <b>offset</b> query parameter. <p class="tablenote"><strong>Note: </strong>The items in a paginated result set use a zero-based list where the first item in the list has an offset of <code>0</code>.</p>|
|prev|string|false|none|The URI for the preceding page of results. This value is returned only if there is a previous page of results to display from the result set. <br><br><b>Max length</b>: 2048|
|promotionReports|[[PromotionReportDetail](#schemapromotionreportdetail)]|false|none|A list of <b>promotionReports</b> contained in the paginated result set.|
|total|integer(int32)|false|none|The total number of items retrieved in the result set.  <br><br>If no items are found, this field is returned with a value of <code>0</code>.|

<h2 id="tocS_ProposedBid">ProposedBid</h2>
<!-- backwards compatibility -->
<a id="schemaproposedbid"></a>
<a id="schema_ProposedBid"></a>
<a id="tocSproposedbid"></a>
<a id="tocsproposedbid"></a>

```json
{
  "currency": "string",
  "rangeEnd": "string",
  "rangeStart": "string",
  "value": "string"
}
```

A type that defines the data for a payment amount, such as the sale price.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currency|string|false|none|The base currency applied to the <b>value</b> field to establish a monetary amount.  <br><br>The currency is represented as a 3-letter <a href="https://www.iso.org/iso-4217-currency-codes.html " title="https://www.iso.org " target="_blank">ISO 4217</a> currency code. For example, the code for the Canadian Dollar is <code>CAD</code>.  <br><br><b>Default:</b> The default currency of the eBay marketplace that hosts the listing. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/ba:CurrencyCodeEnum'>eBay API documentation</a>|
|rangeEnd|string|false|none|The end of the range specified for the bid.|
|rangeStart|string|false|none|The start of the range specified for the bid.|
|value|string|false|none|The value of the proposed bid.|

<h2 id="tocS_ReportMetadata">ReportMetadata</h2>
<!-- backwards compatibility -->
<a id="schemareportmetadata"></a>
<a id="schema_ReportMetadata"></a>
<a id="tocSreportmetadata"></a>
<a id="tocsreportmetadata"></a>

```json
{
  "dimensionMetadata": [
    {
      "dataType": "string",
      "dimensionKey": "string",
      "dimensionKeyAnnotations": [
        {
          "annotationKey": "string",
          "dataType": "string"
        }
      ]
    }
  ],
  "maxNumberOfDimensionsToRequest": 0,
  "maxNumberOfMetricsToRequest": 0,
  "metricMetadata": [
    {
      "dataType": "string",
      "metricKey": "string"
    }
  ],
  "reportType": "string"
}
```

This type defines the fields included in the report.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dimensionMetadata|[[DimensionMetadata](#schemadimensionmetadata)]|false|none|A list containing the metadata for the dimension used in the report.|
|maxNumberOfDimensionsToRequest|integer(int32)|false|none|The maximum number of dimensions that can be requested for the specified report type.|
|maxNumberOfMetricsToRequest|integer(int32)|false|none|The maximum number of metrics that can be requested for the specified report type.|
|metricMetadata|[[MetricMetadata](#schemametricmetadata)]|false|none|A list containing the metadata for the metrics in the report.|
|reportType|string|false|none|The <b>report_type</b>, as specified in the request to create the report task.<br/><br/><span class="tablenote"><b>Note:</b> INVENTORY_PERFORMANCE_REPORT is not currently available; availability date is pending.</span> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/plr:ReportTypeEnum'>eBay API documentation</a>|

<h2 id="tocS_ReportMetadatas">ReportMetadatas</h2>
<!-- backwards compatibility -->
<a id="schemareportmetadatas"></a>
<a id="schema_ReportMetadatas"></a>
<a id="tocSreportmetadatas"></a>
<a id="tocsreportmetadatas"></a>

```json
{
  "reportMetadata": [
    {
      "dimensionMetadata": [
        {
          "dataType": "string",
          "dimensionKey": "string",
          "dimensionKeyAnnotations": [
            {
              "annotationKey": "string",
              "dataType": "string"
            }
          ]
        }
      ],
      "maxNumberOfDimensionsToRequest": 0,
      "maxNumberOfMetricsToRequest": 0,
      "metricMetadata": [
        {
          "dataType": "string",
          "metricKey": "string"
        }
      ],
      "reportType": "string"
    }
  ]
}
```

This type defines the metadata used by the all report types.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reportMetadata|[[ReportMetadata](#schemareportmetadata)]|false|none|A list of the metadata for the associated report type.|

<h2 id="tocS_ReportTask">ReportTask</h2>
<!-- backwards compatibility -->
<a id="schemareporttask"></a>
<a id="schema_ReportTask"></a>
<a id="tocSreporttask"></a>
<a id="tocsreporttask"></a>

```json
{
  "campaignIds": [
    "string"
  ],
  "dateFrom": "string",
  "dateTo": "string",
  "dimensions": [
    {
      "annotationKeys": [
        "string"
      ],
      "dimensionKey": "string"
    }
  ],
  "fundingModels": [
    "string"
  ],
  "inventoryReferences": [
    {
      "inventoryReferenceId": "string",
      "inventoryReferenceType": "string"
    }
  ],
  "listingIds": [
    "string"
  ],
  "marketplaceId": "string",
  "metricKeys": [
    "string"
  ],
  "reportExpirationDate": "string",
  "reportFormat": "string",
  "reportHref": "string",
  "reportId": "string",
  "reportName": "string",
  "reportTaskCompletionDate": "string",
  "reportTaskCreationDate": "string",
  "reportTaskExpectedCompletionDate": "string",
  "reportTaskId": "string",
  "reportTaskStatus": "string",
  "reportTaskStatusMessage": "string",
  "reportType": "string"
}
```

This type defines the fields in a report task.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|campaignIds|[string]|false|none|A list of IDs for the campaigns that are included in the report. A campaign ID is a unique eBay-assigned identifier of the campaign that's generated when the campaign is created.<br /><br />Call <b>getCampaigns</b> to return the current campaign IDs for a seller.|
|dateFrom|string|false|none|The date defining the start of the timespan covered by the report, formatted as an <a href="https://www.iso.org/iso-8601-date-and-time-format.html " title="https://www.iso.org " target="_blank">ISO 8601</a> timestamp.|
|dateTo|string|false|none|The date defining the end of the timespan covered by the report, formatted as an <a href="https://www.iso.org/iso-8601-date-and-time-format.html " title="https://www.iso.org " target="_blank">ISO 8601</a> timestamp.|
|dimensions|[[Dimension](#schemadimension)]|false|none|A list containing the dimension in the report.|
|fundingModels|[string]|false|none|The funding model for the campaign that shall be included in the report.<br /><br /><span class="tablenote"><span style="color:#004680"><strong>Note:</strong></span> The default funding model for Promoted Listings reports is <code>COST_PER_SALE</code>.</span><br /><br /><b>Valid Values:</b><ul><li><code>COST_PER_SALE</code></li><li><code>COST_PER_CLICK</code></li></ul>|
|inventoryReferences|[[InventoryReference](#schemainventoryreference)]|false|none|If supplied in the request, this field returns a list of the seller's inventory reference IDs included in the report.  <p>Each item is referenced by a pair of <b>inventoryRefernceID</b> and <b>inventoryReferenceType</b> values, where an inventory reference ID can be either a seller-defined <b>SKU</b> value or an <b>inventoryItemGroupKey</b>. An <b>inventoryItemGroupKey</b> is seller-defined ID for an inventory item group (a multiple-variation listing), and is created and used by the <a href="/api-docs/sell/inventory/resources/methods">Inventory API</a>.</p>|
|listingIds|[string]|false|none|If supplied in the request, this field returns a list of the listing IDs included in the report. A listing ID is an eBay-assigned ID that's generated when a listing is created.|
|marketplaceId|string|false|none|The ID of the eBay marketplace used by the report task. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/ba:MarketplaceIdEnum'>eBay API documentation</a>|
|metricKeys|[string]|false|none|A list of metrics for the report task.|
|reportExpirationDate|string|false|none|The date after which the report is no longer be available. Reports are available for 30 days and you cannot download a report after it has expired.  <br><br><b>Format (UTC): </b> yyyy-MM-ddThh:mm:ss.sssZ|
|reportFormat|string|false|none|Indicates the format of the report. Currently, only <code>TSV_GZIP</code> is supported. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/plr:ReportFormatEnum'>eBay API documentation</a>|
|reportHref|string|false|none|The URL of the generated report, which can be used to download the report once it has been generated.|
|reportId|string|false|none|A unique eBay-assigned ID for the report.|
|reportName|string|false|none|An eBay-assigned name for the report that's created by the <b>createReportTask</b> call. This name is unique for the seller.|
|reportTaskCompletionDate|string|false|none|The date the report task completed the report generation.  <br><br><b>Format (UTC): </b> yyyy-MM-ddThh:mm:ss.sssZ|
|reportTaskCreationDate|string|false|none|The date the report task was created.  <br><br><b>Format (UTC): </b> yyyy-MM-ddThh:mm:ss.sssZ|
|reportTaskExpectedCompletionDate|string|false|none|The date the report task is expected to complete the report generation.  <br><br><b>Format (UTC): </b> yyyy-MM-ddThh:mm:ss.sssZ|
|reportTaskId|string|false|none|The unique eBay-assigned ID of the report task. This value is generated when the report task is created with a call to <b>createReportTask</b>.|
|reportTaskStatus|string|false|none|Indicates the current state of the report task. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/plr:TaskStatusEnum'>eBay API documentation</a>|
|reportTaskStatusMessage|string|false|none|A status message with additional information about the report task.|
|reportType|string|false|none|Indicates type of report associated with the report task.<br/><br/><span class="tablenote"><b>Note:</b> INVENTORY_PERFORMANCE_REPORT is not currently available; availability date is pending.</span> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/plr:ReportTypeEnum'>eBay API documentation</a>|

<h2 id="tocS_ReportTaskPagedCollection">ReportTaskPagedCollection</h2>
<!-- backwards compatibility -->
<a id="schemareporttaskpagedcollection"></a>
<a id="schema_ReportTaskPagedCollection"></a>
<a id="tocSreporttaskpagedcollection"></a>
<a id="tocsreporttaskpagedcollection"></a>

```json
{
  "href": "string",
  "limit": 0,
  "next": "string",
  "offset": 0,
  "prev": "string",
  "reportTasks": [
    {
      "campaignIds": [
        "string"
      ],
      "dateFrom": "string",
      "dateTo": "string",
      "dimensions": [
        {
          "annotationKeys": [
            "string"
          ],
          "dimensionKey": "string"
        }
      ],
      "fundingModels": [
        "string"
      ],
      "inventoryReferences": [
        {
          "inventoryReferenceId": "string",
          "inventoryReferenceType": "string"
        }
      ],
      "listingIds": [
        "string"
      ],
      "marketplaceId": "string",
      "metricKeys": [
        "string"
      ],
      "reportExpirationDate": "string",
      "reportFormat": "string",
      "reportHref": "string",
      "reportId": "string",
      "reportName": "string",
      "reportTaskCompletionDate": "string",
      "reportTaskCreationDate": "string",
      "reportTaskExpectedCompletionDate": "string",
      "reportTaskId": "string",
      "reportTaskStatus": "string",
      "reportTaskStatusMessage": "string",
      "reportType": "string"
    }
  ],
  "total": 0
}
```

This type defines the fields that paginate the reports tasks returned by the request. The entire <i>result set</i> consists of 0 or more sequenced <i>response pages</i>, where each page consists of 0 or more items from the complete result set.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|href|string|false|none|The URI of the current page of results from the result set.|
|limit|integer(int32)|false|none|The number of items returned on a single page from the result set. This value can be set in the request with the <b>limit</b> query parameter.|
|next|string|false|none|The URI for the following page of results. This value is returned only if there is an additional page of results to display from the result set. <br><br><b>Max length</b>: 2048|
|offset|integer(int32)|false|none|The number of results skipped in the result set before listing the first returned result. This value can be set in the request with the <b>offset</b> query parameter.<br /><br /><span class="tablenote"><span style="color:#004680"><strong>Note:</strong></span> The items in a paginated result set use a zero-based list where the first item in the list has an offset of <code>0</code>.</span>|
|prev|string|false|none|The URI for the preceding page of results. This value is returned only if there is a previous page of results to display from the result set. <br><br><b>Max length</b>: 2048|
|reportTasks|[[ReportTask](#schemareporttask)]|false|none|A list of report tasks contained on this page from the paginated response.|
|total|integer(int32)|false|none|The total number of items retrieved in the result set.  <br><br>If no items are found, this field is returned with a value of <code>0</code>.|

<h2 id="tocS_RuleCriteria">RuleCriteria</h2>
<!-- backwards compatibility -->
<a id="schemarulecriteria"></a>
<a id="schema_RuleCriteria"></a>
<a id="tocSrulecriteria"></a>
<a id="tocsrulecriteria"></a>

```json
{
  "excludeInventoryItems": [
    {
      "inventoryReferenceId": "string"
    }
  ],
  "excludeListingIds": [
    "string"
  ],
  "markupInventoryItems": [
    {
      "inventoryReferenceId": "string"
    }
  ],
  "markupListingIds": [
    "string"
  ],
  "selectionRules": [
    {
      "brands": [
        "string"
      ],
      "categoryIds": [
        "string"
      ],
      "categoryScope": "string",
      "listingConditionIds": [
        "string"
      ],
      "maxPrice": {
        "currency": "string",
        "value": "string"
      },
      "minPrice": {
        "currency": "string",
        "value": "string"
      }
    }
  ]
}
```

This type defines the fields for a set of inventory selection rules.  <br><br><b>Required:</b> When <b>inventoryCriterionType</b> is set to <code>INVENTORY_BY_RULE</code> or <code>INVENTORY_ANY</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|excludeInventoryItems|[[InventoryItem](#schemainventoryitem)]|false|none|A list of seller inventory reference IDs to exclude from the promotion.  <br><br><p class="tablenote"><b>Note:</b> The request can have either <b>excludeInventoryItems</b> or <b>excludeListingIds</b> but not both.</p> <b>Maximum:</b> 100 parent items <br><b>Maximum SKU or custom label length:</b> 50 characters|
|excludeListingIds|[string]|false|none|A list of eBay listing IDs to exclude from the promotion.  <br><br><p class="tablenote"><b>Note:</b> The request can have either <b>excludeInventoryItems</b> or <b>excludeListingIds</b> but not both.</p> <b>Maximum:</b> 100 parent items <br><b>Maximum SKU or custom label length:</b> 50 characters|
|markupInventoryItems|[[InventoryItem](#schemainventoryitem)]|false|none|A list of SKUs to remove from a markdown promotion. The listed SKUs are 'marked up' to their standard price after being part of the markdown promotion.|
|markupListingIds|[string]|false|none|A list of listing IDs to remove from a markdown promotion. The listed items are 'marked up' to their standard price after being part of the markdown promotion.|
|selectionRules|[[SelectionRule](#schemaselectionrule)]|false|none|The container for the rules that select the items to include in a promotion.  <br><br><i>Required if </i> <b>inventoryCriterionType</b> is set to <code>INVENTORY_BY_RULE</code>. <br><br>For information on using the contained fields, see <a href= "/api-docs/sell/static/marketing/using-the-selectionrules-container.html#Promotio ">Item promotions</a>.|

<h2 id="tocS_SelectedInventoryDiscount">SelectedInventoryDiscount</h2>
<!-- backwards compatibility -->
<a id="schemaselectedinventorydiscount"></a>
<a id="schema_SelectedInventoryDiscount"></a>
<a id="tocSselectedinventorydiscount"></a>
<a id="tocsselectedinventorydiscount"></a>

```json
{
  "discountBenefit": {
    "amountOffItem": {
      "currency": "string",
      "value": "string"
    },
    "amountOffOrder": {
      "currency": "string",
      "value": "string"
    },
    "percentageOffItem": "string",
    "percentageOffOrder": "string"
  },
  "discountId": "string",
  "inventoryCriterion": {
    "inventoryCriterionType": "string",
    "inventoryItems": [
      {
        "inventoryReferenceId": "string"
      }
    ],
    "listingIds": [
      "string"
    ],
    "ruleCriteria": {
      "excludeInventoryItems": [
        {
          "inventoryReferenceId": "string"
        }
      ],
      "excludeListingIds": [
        "string"
      ],
      "markupInventoryItems": [
        {
          "inventoryReferenceId": "string"
        }
      ],
      "markupListingIds": [
        "string"
      ],
      "selectionRules": [
        {
          "brands": [
            "string"
          ],
          "categoryIds": [
            "string"
          ],
          "categoryScope": "string",
          "listingConditionIds": [
            "string"
          ],
          "maxPrice": {
            "currency": "string",
            "value": "string"
          },
          "minPrice": {
            "currency": "string",
            "value": "string"
          }
        }
      ]
    }
  },
  "ruleOrder": 0
}
```

This type defines the fields that describe the discounts applied to a set of inventory items and the order in which the selection rules are applied.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|discountBenefit|[DiscountBenefit](#schemadiscountbenefit)|false|none|This container defines the promotional discount as either a monetary amount or a percentage applied to the sales price.|
|discountId|string|false|none|A unique, eBay-generated ID that you can use to identify the discount. This field is ignored in POST and PUT operations.|
|inventoryCriterion|[InventoryCriterion](#schemainventorycriterion)|false|none|A container that defines either the listing IDs or the selection rules that specify the items to include in the promotion. Listing IDs can be either eBay listing IDs or a list of the seller's inventory reference IDs (know as SKUs or custom labels). See the <b>selectionRules</b> container for the rule criteria you can use to select inventory.  <p class="tablenote"><b>Note:</b> All listings in Promotions Manager promotions must support an electronic payment method.</p>|
|ruleOrder|integer(int32)|false|none|For markdown promotions, this field is reserved for future use. <!--This field specifies the precedence of this set of inventory criteria, which is taken into account if an item is selected for multiple discounts by different sets of criteria. The criteria with the highest priority (lowest ruleOrder value) takes precedence over criteria with a lower precedence.-->|

<h2 id="tocS_SelectionRule">SelectionRule</h2>
<!-- backwards compatibility -->
<a id="schemaselectionrule"></a>
<a id="schema_SelectionRule"></a>
<a id="tocSselectionrule"></a>
<a id="tocsselectionrule"></a>

```json
{
  "brands": [
    "string"
  ],
  "categoryIds": [
    "string"
  ],
  "categoryScope": "string",
  "listingConditionIds": [
    "string"
  ],
  "maxPrice": {
    "currency": "string",
    "value": "string"
  },
  "minPrice": {
    "currency": "string",
    "value": "string"
  }
}
```

This type defines all rules/inclusion filters used to add listings to campaigns or promotions. Use of the specific fields is different for campaigns or promotions. See <a href= "/api-docs/sell/static/marketing/using-the-selectionrules-container.html ">Using the selectionRules container</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|brands|[string]|false|none|An array of product brands. For more details, see <a href="/api-docs/sell/static/marketing/using-the-selectionrules-container.html ">Using the selectionRules container</a>.|
|categoryIds|[string]|false|none|This field contains an array of the associated category ID(s).<br><br>For <a href= "/api-docs/sell/static/marketing/using-the-selectionrules-container.html#Promotio ">Item promotions</a>, a single-item array containing the category ID associated with the promotion. Required when used in an Item promotion and either specifying a <b>selectionRules</b> container or when <b>inventoryCriterionType</b> is set to <code>INVENTORY_BY_RULE</code>.<br><br>For <a href= "/api-docs/sell/static/marketing/using-the-selectionrules-container.html#Campaign ">Promoted Listing campaigns</a>, an array of category ID(s) associated with the campaign. <br><br>For information on how to get category IDs, see <a href= "/api-docs/sell/static/marketing/using-the-selectionrules-container.html#eBay ">eBay Marketplace category IDs</a> and <a href= "/api-docs/sell/static/marketing/using-the-selectionrules-container.html#Seller ">Seller store category IDs</a>|
|categoryScope|string|false|none|This enumerated value indicates if the category ID for the item is an identifier for eBay categories or for a seller's eBay store categories. <br><br>For <a href= "/api-docs/sell/static/marketing/using-the-selectionrules-container.html#Campaign ">Promoted Listing campaigns</a>, this field includes the type of the category ID for the item(s) to be included in the campaign.<br><br>For <a href= "/api-docs/sell/static/marketing/using-the-selectionrules-container.html#Promotio ">Item promotions</a>, this field identifies the scope for the corresponding array as eBay categories or for a seller's eBay store categories. Required when used in an Item promotion and <b>inventoryCriterionType</b> is set to <code>INVENTORY_BY_RULE</code>.  For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:CategoryScopeEnum'>eBay API documentation</a>|
|listingConditionIds|[string]|false|none|A comma-separated list of unique identifiers for the conditions of listings to be included<br><br>For <a href= "/api-docs/sell/static/marketing/using-the-selectionrules-container.html#Campaign ">Promoted Listing campaigns</a>, refer to <a href= "/api-docs/sell/static/marketing/pl-campaign-flow-pls.html#add-by-rule ">Add items to the PLS campaign</a>. Up to four IDs can be specified.<br><br>For <a href= "/api-docs/sell/static/marketing/using-the-selectionrules-container.html#Promotio ">Item promotions</a>, refer to <a href= "/api-docs/sell/static/metadata/condition-id-values.html ">Item condition ID and name values</a>.|
|maxPrice|[Amount](#schemaamount)|false|none|This container sets the maximum price threshold. For more details, see <a href= "/api-docs/sell/marketing/resources/using-the-selectionrules-container.html ">Using the selectionRules container</a>.|
|minPrice|[Amount](#schemaamount)|false|none|This container sets the minimum price threshold. For more details, see <a href= "/api-docs/sell/marketing/resources/using-the-selectionrules-container.html ">Using the selectionRules container</a>.|

<h2 id="tocS_SuggestedBids">SuggestedBids</h2>
<!-- backwards compatibility -->
<a id="schemasuggestedbids"></a>
<a id="schema_SuggestedBids"></a>
<a id="tocSsuggestedbids"></a>
<a id="tocssuggestedbids"></a>

```json
{
  "keywordText": "string",
  "matchType": "string",
  "proposedBid": {
    "currency": "string",
    "rangeEnd": "string",
    "rangeStart": "string",
    "value": "string"
  }
}
```

The suggested bid rate for the item.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|keywordText|string|false|none|The text for the keyword.|
|matchType|string|false|none|A field that defines the match type for the keyword.<br /><br /><b>Valid Values:</b><ul><li><code>BROAD</code></li><li><code>EXACT</code></li><li><code>PHRASE</code></li></ul> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:MatchTypeEnum'>eBay API documentation</a>|
|proposedBid|[ProposedBid](#schemaproposedbid)|false|none|The suggested bid associated with the keyword. |

<h2 id="tocS_SuggestedKeywords">SuggestedKeywords</h2>
<!-- backwards compatibility -->
<a id="schemasuggestedkeywords"></a>
<a id="schema_SuggestedKeywords"></a>
<a id="tocSsuggestedkeywords"></a>
<a id="tocssuggestedkeywords"></a>

```json
{
  "additionalInfo": [
    {
      "infoType": "string",
      "metrics": [
        {
          "metricKey": "string",
          "value": "string"
        }
      ]
    }
  ],
  "keywordText": "string",
  "matchType": "string"
}
```

The suggested keywords for the item.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalInfo|[[AdditionalInfo](#schemaadditionalinfo)]|false|none|A container for the additional information and compiled insight data for suggested keywords. |
|keywordText|string|false|none|The text for the keyword.|
|matchType|string|false|none|A field that defines the match type for the keyword.<br /><br /><b>Valid Values:</b><ul><li><code>BROAD</code></li><li><code>EXACT</code></li><li><code>PHRASE</code></li></ul> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:MatchTypeEnum'>eBay API documentation</a>|

<h2 id="tocS_SummaryReportResponse">SummaryReportResponse</h2>
<!-- backwards compatibility -->
<a id="schemasummaryreportresponse"></a>
<a id="schema_SummaryReportResponse"></a>
<a id="tocSsummaryreportresponse"></a>
<a id="tocssummaryreportresponse"></a>

```json
{
  "baseSale": {
    "currency": "string",
    "value": "string"
  },
  "lastUpdated": "string",
  "percentageSalesLift": "string",
  "promotionSale": {
    "currency": "string",
    "value": "string"
  },
  "totalSale": {
    "currency": "string",
    "value": "string"
  }
}
```

This type defines the fields in an Promotions Manager Summary report. Reports are formatted in JSON. For more details, see <a href="/api-docs/sell/static/marketing/pm-summary-reports.html">Reading item promotion Summary reports</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|baseSale|[Amount](#schemaamount)|false|none|The total revenue from all the purchased items that were part of a promotion but <i>did not trigger</i> a discount during the promotion period.|
|lastUpdated|string|false|none|The date the report was generated.|
|percentageSalesLift|string|false|none|The percentage of the total dollar amount gained due to promotions. This value is calculated as follows:  <br><br><b>precentageSalesLift</b> = <b>promotionSale</b> / (<b>baseSale</b> + <b>promotionSale</b>)|
|promotionSale|[Amount](#schemaamount)|false|none|The total revenue from all the purchased items that were part of a promotion and their purchase <i>did trigger</i> a discount during the promotion period.|
|totalSale|[Amount](#schemaamount)|false|none|Total dollar sales amount of all the seller's listings, current to the date the report was generated.|

<h2 id="tocS_TargetedAdsPagedCollection">TargetedAdsPagedCollection</h2>
<!-- backwards compatibility -->
<a id="schematargetedadspagedcollection"></a>
<a id="schema_TargetedAdsPagedCollection"></a>
<a id="tocStargetedadspagedcollection"></a>
<a id="tocstargetedadspagedcollection"></a>

```json
{
  "href": "string",
  "limit": 0,
  "next": "string",
  "offset": 0,
  "prev": "string",
  "suggestedItems": [
    {
      "bases": [
        {
          "estimatedValue": 0,
          "metric": "string"
        }
      ],
      "listingId": "string"
    }
  ],
  "total": 0
}
```

A type that defines the keywords of the paged collection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|href|string|false|none|The URI of the current page of results from the result set.|
|limit|integer(int32)|false|none|The number of items returned on a single page from the result set. This value can be set in the request with the <b>limit</b> query parameter.|
|next|string|false|none|The call URI that can be used to retrieve the next page in the result set. This value is returned only if there is an additional page of results to display from the result set.|
|offset|integer(int32)|false|none|The number of results skipped in the result set before listing the first returned result. This value can be set in the request with the <b>offset</b> query parameter. <p><b>Default:</b> 0</p><br><span class="tablenote"><b>Note: </b>The items in a paginated result set use a zero-based list, where the first item in the list has an offset of <code>0</code>.</span>|
|prev|string|false|none|The call URI that can be used to retrieve the previous page in the result set. Basically, all of the request parameters will remain the same except the offset value, which will be decreased to retrieve the previous page of results.|
|suggestedItems|[[TargetingItems](#schematargetingitems)]|false|none|A list of suggested items in the paginated collection.|
|total|integer(int32)|false|none|The total number of items retrieved in the result set.<br /><br /><span class="tablenote"><b>Note: </b>If no items are found, this field is returned with a value of <code>0</code>.</span>|

<h2 id="tocS_TargetedBidRequest">TargetedBidRequest</h2>
<!-- backwards compatibility -->
<a id="schematargetedbidrequest"></a>
<a id="schema_TargetedBidRequest"></a>
<a id="tocStargetedbidrequest"></a>
<a id="tocstargetedbidrequest"></a>

```json
{
  "keywords": [
    {
      "keywordText": "string",
      "matchType": "string"
    }
  ]
}
```

A type that defines the targeted bid.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|keywords|[[KeywordRequest](#schemakeywordrequest)]|false|none|A list of keywords in the paginated collection. <br /><br /><b>Maximum number of keywords: </b>500|

<h2 id="tocS_TargetedBidsPagedCollection">TargetedBidsPagedCollection</h2>
<!-- backwards compatibility -->
<a id="schematargetedbidspagedcollection"></a>
<a id="schema_TargetedBidsPagedCollection"></a>
<a id="tocStargetedbidspagedcollection"></a>
<a id="tocstargetedbidspagedcollection"></a>

```json
{
  "suggestedBids": [
    {
      "keywordText": "string",
      "matchType": "string",
      "proposedBid": {
        "currency": "string",
        "rangeEnd": "string",
        "rangeStart": "string",
        "value": "string"
      }
    }
  ]
}
```

A type that defines the keywords of the paged collection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|suggestedBids|[[SuggestedBids](#schemasuggestedbids)]|false|none|A list of bids in the paginated collection.|

<h2 id="tocS_TargetedKeywordRequest">TargetedKeywordRequest</h2>
<!-- backwards compatibility -->
<a id="schematargetedkeywordrequest"></a>
<a id="schema_TargetedKeywordRequest"></a>
<a id="tocStargetedkeywordrequest"></a>
<a id="tocstargetedkeywordrequest"></a>

```json
{
  "additionalInfo": [
    "string"
  ],
  "exclusions": [
    "string"
  ],
  "listingIds": [
    "string"
  ],
  "matchType": "string"
}
```

A type that provides details for the targeted keywords.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalInfo|[string]|false|none|A field used to indicate whether additional information and insight data shall be provided for suggested keywords.<br /><br /><strong>Valid Value:</strong> <code>KEYWORD_INSIGHTS</code>|
|exclusions|[string]|false|none|A field used to indicate that the keywords already selected by sellers for the specified listing IDs should be filtered out of the response, and only new and unique keyword recommendations shall be returned.<br /><br /><strong>Valid Value:</strong> <code>ADOPTED_KEYWORDS</code>|
|listingIds|[string]|false|none|A set of comma-separated listing IDs in the paginated collection. <br /><br /><b>Maximum number of listings requested: </b>300|
|matchType|string|false|none|A field that defines the match type for the keyword.<br /><br /><b>Valid Values:</b><ul><li><code>BROAD</code></li><li><code>EXACT</code></li><li><code>PHRASE</code></li></ul> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:MatchTypeEnum'>eBay API documentation</a>|

<h2 id="tocS_TargetedKeywordsPagedCollection">TargetedKeywordsPagedCollection</h2>
<!-- backwards compatibility -->
<a id="schematargetedkeywordspagedcollection"></a>
<a id="schema_TargetedKeywordsPagedCollection"></a>
<a id="tocStargetedkeywordspagedcollection"></a>
<a id="tocstargetedkeywordspagedcollection"></a>

```json
{
  "suggestedKeywords": [
    {
      "additionalInfo": [
        {
          "infoType": "string",
          "metrics": [
            {
              "metricKey": "string",
              "value": "string"
            }
          ]
        }
      ],
      "keywordText": "string",
      "matchType": "string"
    }
  ]
}
```

A type that defines the keywords of the paged collection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|suggestedKeywords|[[SuggestedKeywords](#schemasuggestedkeywords)]|false|none|A list of suggested keywords in the paged collection. <p> <span class="tablenote"><strong>Note:</strong> A relevancy check with items already present in the ad-group is performed even if item IDs associated with the ad-group are not explicitly passed in the request.</span></p> |

<h2 id="tocS_TargetingItems">TargetingItems</h2>
<!-- backwards compatibility -->
<a id="schematargetingitems"></a>
<a id="schema_TargetingItems"></a>
<a id="tocStargetingitems"></a>
<a id="tocstargetingitems"></a>

```json
{
  "bases": [
    {
      "estimatedValue": 0,
      "metric": "string"
    }
  ],
  "listingId": "string"
}
```

A type that defines the targeted items.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bases|[[ItemBasis](#schemaitembasis)]|false|none|The metrics and additional information for the items.|
|listingId|string|false|none|The listing ID of the targeted item.|

<h2 id="tocS_UpdateAdGroupRequest">UpdateAdGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateadgrouprequest"></a>
<a id="schema_UpdateAdGroupRequest"></a>
<a id="tocSupdateadgrouprequest"></a>
<a id="tocsupdateadgrouprequest"></a>

```json
{
  "adGroupStatus": "string",
  "defaultBid": {
    "currency": "string",
    "value": "string"
  },
  "name": "string"
}
```

A type that contains the fields used by the <b>UpdateAdGroup</b> request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adGroupStatus|string|false|none|An enumeration value representing the current status of the ad group.<p>If the status of the ad is currently <code>ACTIVE</code>, you can change status to <code>PAUSED</code> or <code>ARCHIVED</code>. If ad group is currently in <code>PAUSED</code> status, you can change the status back to <code>ACTIVE</code>. Ads that are currently in <code>ARCHIVED</code> status cannot be made <code>ACTIVE</code> again.<br /><br /><b>Valid Values:</b><ul><li><code>ACTIVE</code></li><li><code>PAUSED</code></li><li><code>ARCHIVED</code></li></ul> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:AdGroupStatusEnum'>eBay API documentation</a>|
|defaultBid|[Amount](#schemaamount)|false|none|A bid amount that applies to all of the keywords in an ad group that do not have individual bids.|
|name|string|false|none|The updated name for the specified ad group.|

<h2 id="tocS_UpdateAdStatusByListingIdRequest">UpdateAdStatusByListingIdRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateadstatusbylistingidrequest"></a>
<a id="schema_UpdateAdStatusByListingIdRequest"></a>
<a id="tocSupdateadstatusbylistingidrequest"></a>
<a id="tocsupdateadstatusbylistingidrequest"></a>

```json
{
  "adGroupId": "string",
  "adStatus": "string",
  "listingId": "string"
}
```

A type that contains the fields for the <b>UpdateAdStatusByListingId</b> request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adGroupId|string|false|none|A unique eBay-assigned ID for an ad group in a campaign that uses the Cost Per Click (CPC) funding model.<br /><br /><span class="tablenote"><b>Note:</b> You can call the  <a href="/api-docs/sell/marketing/resources/adgroup/methods/getAdGroups">getAdGroups</a> method to retrieve the ad group IDs for a seller.</span>|
|adStatus|string|false|none|An enumeration value representing the current status of the ad.<br /><br /><b>Valid Values:</b><ul><li><code>ACTIVE</code></li><li><code>PAUSED</code></li><li><code>ARCHIVED</code></li></ul> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:AdStatusEnum'>eBay API documentation</a>|
|listingId|string|false|none|A unique eBay-assigned ID for a listing that is generated when the listing is created.<br /><br /><span class="tablenote"><b>Note:</b> This field accepts both listing IDs (as generated by the Inventory API), and item IDs (as used in the eBay Traditional API set, such as the Trading and Finding APIs).</span>|

<h2 id="tocS_UpdateAdStatusRequest">UpdateAdStatusRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateadstatusrequest"></a>
<a id="schema_UpdateAdStatusRequest"></a>
<a id="tocSupdateadstatusrequest"></a>
<a id="tocsupdateadstatusrequest"></a>

```json
{
  "adId": "string",
  "adStatus": "string"
}
```

A type that contains the fields for the <b>UpdateAdStatus</b> request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adId|string|false|none|A unique eBay-assigned ID that is generated when the ad is created.|
|adStatus|string|false|none|An enumeration value representing the current status of the ad.<br /><br /><b>Valid Values:</b><ul><li><code>ACTIVE</code></li><li><code>PAUSED</code></li><li><code>ARCHIVED</code></li></ul> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:AdStatusEnum'>eBay API documentation</a>|

<h2 id="tocS_UpdateAdrateStrategyRequest">UpdateAdrateStrategyRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateadratestrategyrequest"></a>
<a id="schema_UpdateAdrateStrategyRequest"></a>
<a id="tocSupdateadratestrategyrequest"></a>
<a id="tocsupdateadratestrategyrequest"></a>

```json
{
  "adRateStrategy": "string",
  "bidPercentage": "string",
  "dynamicAdRatePreferences": [
    {
      "adRateAdjustmentPercent": "string",
      "adRateCapPercent": "string"
    }
  ]
}
```

A type that defines the request fields used to update the ad rate strategy for a Promoted Listings ad campaign.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adRateStrategy|string|false|none|The ad rate strategy that shall be applied to the campaign. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:AdRateStrategyEnum'>eBay API documentation</a>|
|bidPercentage|string|false|none|The user-defined <b>bid percentage</b> (also known as the <i>ad rate</i>) sets the level that eBay increases the visibility in search results for the associated listing. The higher the <b>bidPercentage</b> value, the more eBay promotes the listing.  <br><br>The value specified here is also used to calculate the Promoted Listings fee. This percentage value is multiplied by the final sales price to determine the fee. <br><br>The Promoted Listings fee is determined at the time the transaction completes and the seller is assessed the fee only when an item sells through a Promoted Listings ad campaign. <br><br>The <b>bidPercentage</b> is a single precision value that is guided by the following rules: <ul><li>These values are <b>valid</b>:<br>&nbsp;&nbsp;&nbsp;<code>4.1</code>, &nbsp;&nbsp;&nbsp;<code>5.0</code>, &nbsp;&nbsp;&nbsp;<code>5.5</code>, ...</li>  <li>These values are <b>not valid</b>:<br /> &nbsp;&nbsp;&nbsp;<code>0.01</code>, &nbsp;&nbsp;&nbsp;<code>10.75</code>, &nbsp;&nbsp;&nbsp;<code>99.99</code>,<br /> &nbsp;&nbsp;&nbsp;and so on.</li></ul>This is the default bid percentage for the campaigns using the Cost Per Sale (CPS) funding model, and this value will be overridden by any ads in the campaign that have their own set bid percentages.<br /><br />If a bid percentage is not provided for an ad, eBay uses the default bid percentage of the associated campaign.<br /><br /><b>Minimum value:</b> 2.0 <br><b>Maximum value:</b> 100.0|
|dynamicAdRatePreferences|[[DynamicAdRatePreference](#schemadynamicadratepreference)]|false|none|A field that indicates whether a single, user-defined bid percentage (also known as the <i>ad rate</i>) should be used, or whether eBay should automatically adjust listings to maintain the daily suggested bid percentage.<br /><br /><span class="tablenote"><span style="color:#004680"><strong>Note:</strong></span> Dynamic adjustment is only applicable when the <b>adRateStrategy</b> is set to <code>DYNAMIC</code>.</span><br /><b>Default:</b> <code>FIXED</code>|

<h2 id="tocS_UpdateAdsByInventoryReferenceResponse">UpdateAdsByInventoryReferenceResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateadsbyinventoryreferenceresponse"></a>
<a id="schema_UpdateAdsByInventoryReferenceResponse"></a>
<a id="tocSupdateadsbyinventoryreferenceresponse"></a>
<a id="tocsupdateadsbyinventoryreferenceresponse"></a>

```json
{
  "ads": [
    {
      "adId": "string",
      "href": "string"
    }
  ],
  "errors": [
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
  ],
  "inventoryReferenceId": "string",
  "inventoryReferenceType": "string",
  "statusCode": 0
}
```

A type that contains the response fields used by the <b>UpdateAdsByInventoryReference</b> method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ads|[[AdReference](#schemaadreference)]|false|none|A list of ad IDs and links to retrieve them.|
|errors|[[Error](#schemaerror)]|false|none|A container for all of the errors associated with the specified inventory reference ID.|
|inventoryReferenceId|string|false|none|The reference ID associated with the ad. The reference ID could be a SKU number or Inventory Item Group, depending on value of <code>inventoryReferenceType</code>.|
|inventoryReferenceType|string|false|none|The inventory reference type associated with the ad. The inventory reference type could be a SKU number or Inventory Item Group. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:InventoryReferenceTypeEnum'>eBay API documentation</a>|
|statusCode|integer(int32)|false|none|An HTTP status code that indicates whether or not the CPS ad was successfully updated.|

<h2 id="tocS_UpdateBidPercentageRequest">UpdateBidPercentageRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatebidpercentagerequest"></a>
<a id="schema_UpdateBidPercentageRequest"></a>
<a id="tocSupdatebidpercentagerequest"></a>
<a id="tocsupdatebidpercentagerequest"></a>

```json
{
  "bidPercentage": "string"
}
```

This type specifies the bid percentage for an ad campaign.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bidPercentage|string|false|none|The user-defined <b>bid percentage</b> (also known as the <i>ad rate</i>) sets the level that eBay increases the visibility in search results for the associated listing. The higher the <b>bidPercentage</b> value, the more eBay promotes the listing.  <br><br>The value specified here is also used to calculate the Promoted Listings fee. This percentage value is multiplied by the final sales price to determine the fee. <br><br>The Promoted Listings fee is determined at the time the transaction completes and the seller is assessed the fee only when an item sells through a Promoted Listings ad campaign. <br><br>The <b>bidPercentage</b> is a single precision value that is guided by the following rules: <ul><li>These values are <b>valid</b>:<br>&nbsp;&nbsp;&nbsp;<code>4.1</code>, &nbsp;&nbsp;&nbsp;<code>5.0</code>, &nbsp;&nbsp;&nbsp;<code>5.5</code>, ...</li>  <li>These values are <b>not valid</b>:<br /> &nbsp;&nbsp;&nbsp;<code>0.01</code>, &nbsp;&nbsp;&nbsp;<code>10.75</code>, &nbsp;&nbsp;&nbsp;<code>99.99</code>,<br /> &nbsp;&nbsp;&nbsp;and so on.</li></ul>This is default bid percentage for the campaigns using the Cost Per Sale (CPS) funding model, and this value will be overridden by any ads in the campaign that have their own set bid percentages.<br /><br />If a bid percentage is not provided for an ad, eBay uses the default bid percentage of the associated campaign.<br /><br /><b>Minimum value:</b> 2.0 <br><b>Maximum value:</b> 100.0|

<h2 id="tocS_UpdateCampaignBudgetRequest">UpdateCampaignBudgetRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatecampaignbudgetrequest"></a>
<a id="schema_UpdateCampaignBudgetRequest"></a>
<a id="tocSupdatecampaignbudgetrequest"></a>
<a id="tocsupdatecampaignbudgetrequest"></a>

```json
{
  "daily": {
    "amount": {
      "currency": "string",
      "value": "string"
    }
  }
}
```

A type that contains the fields for the <b>UpdateCampaignBudget</b> request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|daily|[BudgetRequest](#schemabudgetrequest)|false|none|The daily budget limit for the Cost Per Click (CPC) Promoted Listings campaign. This will be a dollar value. All clicks using the keywords defined for the campaign will go towards expending the daily budget. Once the daily budget is exceeded for the campaign, all Promoted Listings under the campaign will be turned off until the next day.<br /><br /><b>Valid Values</b>:<ul><li><code>50.00</code></li><li><code>100.00</code></li></ul>|

<h2 id="tocS_UpdateCampaignIdentificationRequest">UpdateCampaignIdentificationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatecampaignidentificationrequest"></a>
<a id="schema_UpdateCampaignIdentificationRequest"></a>
<a id="tocSupdatecampaignidentificationrequest"></a>
<a id="tocsupdatecampaignidentificationrequest"></a>

```json
{
  "campaignName": "string",
  "endDate": "string",
  "startDate": "string"
}
```

This type specifies the updated name, and start and end dates for an update-campaign request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|campaignName|string|false|none|The new seller-defined name for the campaign. This value must be unique for the seller. <p>If you don't want to change the name of the campaign, specify the current campaign name in this field.<p>You can use any alphanumeric characters in the name, except the less than (&lt;) or greater than (&gt;) characters.</p><b>Max length: </b>80 characters.|
|endDate|string|false|none|The date and time the campaign ends, in UTC format (<code>yyyy-MM-ddThh:mm:ssZ</code>). If this field is omitted, the campaign will have no defined end date, and will not end until the seller makes a decision to end the campaign with an <a href="/api-docs/sell/marketing/resources/campaign/methods/endCampaign">endCampaign</a> call, or if they update the campaign at a later time with an end date.<p>If you want to change only the end date of the campaign, you must specify the current campaign name, set the <b>endDate</b> as desired, and set the <b>startDate</b> to the actual start date of the campaign. This applies if the campaign status is <code>RUNNING</code> or <code>PAUSED</code>. You can retrieve the <b>startDate</b> using the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaign#response.startDate">getCampaign</a> method.</p> <p>Note that if you do not set a new end date in this call, any current endDate value will be set to null. To preserve the currently-set end date, you must specify the value again in your request.</p>|
|startDate|string|false|none|The new start date for the campaign, in UTC format (<code>yyyy-MM-ddThh:mm:ssZ</code>).<p>If the campaign status is <code>RUNNING</code> or <code>PAUSED</code>, the <b>startDate</b> must be specified and must be the actual start date of the campaign, even if you are only changing the <b>endDate</b>. You can retrieve the campaign's <b>startDate</b> using the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaign#response.startDate">getCampaign</a> method.</p><p>On the date specified, the service derives the keywords for each listing in the campaign, creates an ad for each listing, and associates each new ad with the campaign. The campaign starts after this process is completed. The amount of time it takes the service to start the campaign depends on the number of listings in the campaign.</p>  <p>Call <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> to retrieve the <b>campaign_id</b> and the campaign status (<code>RUNNING</code>, <code>PAUSED</code>, <code>ENDED</code>, and so on) for all the seller's campaigns.</p>|

<h2 id="tocS_UpdateKeywordByKeywordIdRequest">UpdateKeywordByKeywordIdRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatekeywordbykeywordidrequest"></a>
<a id="schema_UpdateKeywordByKeywordIdRequest"></a>
<a id="tocSupdatekeywordbykeywordidrequest"></a>
<a id="tocsupdatekeywordbykeywordidrequest"></a>

```json
{
  "bid": {
    "currency": "string",
    "value": "string"
  },
  "keywordId": "string",
  "keywordStatus": "string"
}
```

A type that contains the fields for the <b>UpdateKeywordByKeywordId</b> request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bid|[Amount](#schemaamount)|false|none|This container is used to set or change the bid percentage for the keyword. Each time a listing is retrieved in search results using this keyword and clicked on, the seller will be charged this amount. Each click goes toward the daily budget set up for the Cost Per Click (CPC) campaign.|
|keywordId|string|false|none|This field is used to identify the keyword to be updated. The <a href="/api-docs/sell/marketing/resources/keyword/methods/getKeyword">getKeyword</a> method can be used to retrieve keywordId values.|
|keywordStatus|string|false|none|Include this field if you wish to change the status of the keyword. The status value specified here must be different than the keyword's current status. To confirm the current status of a keyword, you can use the <a href="/api-docs/sell/marketing/resources/keyword/methods/getKeyword">getKeyword</a> method.</p><p>If the status of the ad is currently <code>ACTIVE</code>, you can change status to <code>PAUSED</code> or <code>ARCHIVED</code>. If ad group is currently in <code>PAUSED</code> status, you can change the status back to <code>ACTIVE</code>. Ads that are currently in <code>ARCHIVED</code> status cannot be made <code>ACTIVE</code> again. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:KeywordStatusEnum'>eBay API documentation</a>|

<h2 id="tocS_UpdateKeywordRequest">UpdateKeywordRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatekeywordrequest"></a>
<a id="schema_UpdateKeywordRequest"></a>
<a id="tocSupdatekeywordrequest"></a>
<a id="tocsupdatekeywordrequest"></a>

```json
{
  "bid": {
    "currency": "string",
    "value": "string"
  },
  "keywordStatus": "string"
}
```

A type that contains the fields for the <b>UpdateKeyword</b> request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bid|[Amount](#schemaamount)|false|none|This container is used to set or change the bid for the keyword. Each time a listing is retrieved in search results using this keyword and clicked on, the seller will be charged this amount. Each click goes toward the daily budget set up for the CPC campaign. If the bid is not provided, then the default bid associated with the ad group is used.|
|keywordStatus|string|false|none|Include this field if you wish to change the status of the keyword. The status value specified here must be different than the keyword's current status. To confirm the current status of a keyword, you can use the <a href="/api-docs/sell/marketing/resources/keyword/methods/getKeyword">getKeyword</a> method.</p><p>If the status of the ad is currently <code>ACTIVE</code>, you can change status to <code>PAUSED</code> or <code>ARCHIVED</code>. If ad group is currently in <code>PAUSED</code> status, you can change the status back to <code>ACTIVE</code>. Ads that are currently in <code>ARCHIVED</code> status cannot be made <code>ACTIVE</code> again. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:KeywordStatusEnum'>eBay API documentation</a>|

<h2 id="tocS_UpdateKeywordResponse">UpdateKeywordResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatekeywordresponse"></a>
<a id="schema_UpdateKeywordResponse"></a>
<a id="tocSupdatekeywordresponse"></a>
<a id="tocsupdatekeywordresponse"></a>

```json
{
  "errors": [
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
  ],
  "keywordId": "string",
  "statusCode": 0
}
```

A type that contains the fields for the <b>UpdateKeyword</b> response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|This container will be returned if there are one or more issues associated with modifying the corresponding keyword.|
|keywordId|string|false|none|This field identifies the keyword that the seller updated, or attempted to update.|
|statusCode|integer(int32)|false|none|An HTTP status code is returned for each keyword to indicate the success or failure of updating that keyword.|

<h2 id="tocS_UpdateNegativeKeywordIdRequest">UpdateNegativeKeywordIdRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatenegativekeywordidrequest"></a>
<a id="schema_UpdateNegativeKeywordIdRequest"></a>
<a id="tocSupdatenegativekeywordidrequest"></a>
<a id="tocsupdatenegativekeywordidrequest"></a>

```json
{
  "negativeKeywordId": "string",
  "negativeKeywordStatus": "string"
}
```

A type that defines the fields used to update a negative keyword.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|negativeKeywordId|string|false|none|A unique eBay-assigned ID for a negative keyword. This keyword ID will be generated for each successfully created negative keyword.|
|negativeKeywordStatus|string|false|none|A field that defines the status of the negative keyword. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:NegativeKeywordStatusEnum'>eBay API documentation</a>|

<h2 id="tocS_UpdateNegativeKeywordRequest">UpdateNegativeKeywordRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatenegativekeywordrequest"></a>
<a id="schema_UpdateNegativeKeywordRequest"></a>
<a id="tocSupdatenegativekeywordrequest"></a>
<a id="tocsupdatenegativekeywordrequest"></a>

```json
{
  "negativeKeywordStatus": "string"
}
```

A type that contains the fields for the <b>UpdateNegativeKeyword</b> request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|negativeKeywordStatus|string|false|none|A field that defines the status of the negative keyword. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:NegativeKeywordStatusEnum'>eBay API documentation</a>|

<h2 id="tocS_UpdateNegativeKeywordResponse">UpdateNegativeKeywordResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatenegativekeywordresponse"></a>
<a id="schema_UpdateNegativeKeywordResponse"></a>
<a id="tocSupdatenegativekeywordresponse"></a>
<a id="tocsupdatenegativekeywordresponse"></a>

```json
{
  "errors": [
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
  ],
  "negativeKeywordId": "string",
  "statusCode": 0
}
```

A type that contains the fields for the <b>UpdateNegativeKeyword</b> response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|A container that will be returned if there are one or more issues associated with modifying the corresponding negative keyword.|
|negativeKeywordId|string|false|none|A unique eBay-assigned ID for a negative keyword. This keyword ID will be generated for each successfully created negative keyword.|
|statusCode|integer(int32)|false|none|An HTTP status code that indicates the success or failure of updating that negative keyword.|
