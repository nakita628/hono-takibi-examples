<h1 id="authorized-buyers-marketplace-api">Authorized Buyers Marketplace API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The Authorized Buyers Marketplace API lets buyers programmatically discover inventory; propose, retrieve and negotiate deals with publishers.

Base URLs:

* <a href="https://authorizedbuyersmarketplace.googleapis.com/">https://authorizedbuyersmarketplace.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://developers.google.com/authorized-buyers/apis/marketplace/reference/rest/">External documentation</a>

# Authentication

- oAuth2 authentication. Oauth 2.0 implicit authentication

    - Flow: implicit
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/authorized-buyers-marketplace|See, create, edit, and delete your Authorized Buyers Marketplace entities.|

- oAuth2 authentication. Oauth 2.0 authorizationCode authentication

    - Flow: authorizationCode
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)
    - Token URL = [https://accounts.google.com/o/oauth2/token](https://accounts.google.com/o/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/authorized-buyers-marketplace|See, create, edit, and delete your Authorized Buyers Marketplace entities.|

<h1 id="authorized-buyers-marketplace-api-buyers">buyers</h1>

## authorizedbuyersmarketplace.buyers.auctionPackages.subscribeClients

<a id="opIdauthorizedbuyersmarketplace.buyers.auctionPackages.subscribeClients"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:subscribeClients \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "clients": [
      "string"
    ]
  }'
```

`POST /v1/{auctionPackage}:subscribeClients`

Subscribe the specified clients of the buyer to the auction package. If a client in the list does not belong to the buyer, an error response will be returned, and all of the following clients in the list will not be subscribed. Subscribing an already subscribed client will have no effect.

> Body parameter

```json
{
  "clients": [
    "string"
  ]
}
```

<h3 id="authorizedbuyersmarketplacebuyersauctionpackagessubscribeclients-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|auctionPackage|path|string|true|Required. Name of the auction package. Format: `buyers/{accountId}/auctionPackages/{auctionPackageId}`|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[SubscribeClientsRequest](#schemasubscribeclientsrequest)|false|none|
|» clients|body|[string]|false|Optional. A list of client buyers to subscribe to the auction package, with client buyer in the format `buyers/{accountId}/clients/{clientAccountId}`. The current buyer will be subscribed to the auction package regardless of the list contents if not already.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "createTime": "string",
  "creator": "string",
  "description": "string",
  "displayName": "string",
  "name": "string",
  "subscribedClients": [
    "string"
  ],
  "updateTime": "string"
}
```

<h3 id="authorizedbuyersmarketplacebuyersauctionpackagessubscribeclients-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[AuctionPackage](#schemaauctionpackage)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/authorized-buyers-marketplace ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/authorized-buyers-marketplace )
</aside>

## authorizedbuyersmarketplace.buyers.auctionPackages.unsubscribeClients

<a id="opIdauthorizedbuyersmarketplace.buyers.auctionPackages.unsubscribeClients"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:unsubscribeClients \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "clients": [
      "string"
    ]
  }'
```

`POST /v1/{auctionPackage}:unsubscribeClients`

Unsubscribe from the auction package for the specified clients of the buyer. Unsubscribing a client that is not subscribed will have no effect.

> Body parameter

```json
{
  "clients": [
    "string"
  ]
}
```

<h3 id="authorizedbuyersmarketplacebuyersauctionpackagesunsubscribeclients-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|auctionPackage|path|string|true|Required. Name of the auction package. Format: `buyers/{accountId}/auctionPackages/{auctionPackageId}`|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[UnsubscribeClientsRequest](#schemaunsubscribeclientsrequest)|false|none|
|» clients|body|[string]|false|Optional. A list of client buyers to unsubscribe from the auction package, with client buyer in the format `buyers/{accountId}/clients/{clientAccountId}`.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "createTime": "string",
  "creator": "string",
  "description": "string",
  "displayName": "string",
  "name": "string",
  "subscribedClients": [
    "string"
  ],
  "updateTime": "string"
}
```

<h3 id="authorizedbuyersmarketplacebuyersauctionpackagesunsubscribeclients-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[AuctionPackage](#schemaauctionpackage)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/authorized-buyers-marketplace ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/authorized-buyers-marketplace )
</aside>

## authorizedbuyersmarketplace.buyers.proposals.sendRfp

<a id="opIdauthorizedbuyersmarketplace.buyers.proposals.sendRfp"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/proposals:sendRfp \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "buyerContacts": [
      {
        "displayName": "string",
        "email": "string"
      }
    ],
    "client": "string",
    "displayName": "string",
    "estimatedGrossSpend": {
      "currencyCode": "string",
      "nanos": 0,
      "units": "string"
    },
    "flightEndTime": "string",
    "flightStartTime": "string",
    "geoTargeting": {
      "excludedCriteriaIds": [
        "string"
      ],
      "targetedCriteriaIds": [
        "string"
      ]
    },
    "inventorySizeTargeting": {
      "excludedInventorySizes": [
        {
          "height": "string",
          "type": "TYPE_UNSPECIFIED",
          "width": "string"
        }
      ],
      "targetedInventorySizes": [
        {
          "height": "string",
          "type": "TYPE_UNSPECIFIED",
          "width": "string"
        }
      ]
    },
    "note": "string",
    "preferredDealTerms": {
      "fixedPrice": {
        "amount": {
          "currencyCode": "string",
          "nanos": 0,
          "units": "string"
        },
        "type": "TYPE_UNSPECIFIED"
      }
    },
    "programmaticGuaranteedTerms": {
      "fixedPrice": {
        "amount": {
          "currencyCode": "string",
          "nanos": 0,
          "units": "string"
        },
        "type": "TYPE_UNSPECIFIED"
      },
      "guaranteedLooks": "string",
      "impressionCap": "string",
      "minimumDailyLooks": "string",
      "percentShareOfVoice": "string",
      "reservationType": "RESERVATION_TYPE_UNSPECIFIED"
    },
    "publisherProfile": "string"
  }'
```

`POST /v1/{buyer}/proposals:sendRfp`

Sends a request for proposal (RFP) to a publisher to initiate the negotiation regarding certain inventory. In the RFP, buyers can specify the deal type, deal terms, start and end dates, targeting, and a message to the publisher. Once the RFP is sent, a proposal in `SELLER_REVIEW_REQUESTED` state will be created and returned in the response. The publisher may review your request and respond with detailed deals in the proposal.

> Body parameter

```json
{
  "buyerContacts": [
    {
      "displayName": "string",
      "email": "string"
    }
  ],
  "client": "string",
  "displayName": "string",
  "estimatedGrossSpend": {
    "currencyCode": "string",
    "nanos": 0,
    "units": "string"
  },
  "flightEndTime": "string",
  "flightStartTime": "string",
  "geoTargeting": {
    "excludedCriteriaIds": [
      "string"
    ],
    "targetedCriteriaIds": [
      "string"
    ]
  },
  "inventorySizeTargeting": {
    "excludedInventorySizes": [
      {
        "height": "string",
        "type": "TYPE_UNSPECIFIED",
        "width": "string"
      }
    ],
    "targetedInventorySizes": [
      {
        "height": "string",
        "type": "TYPE_UNSPECIFIED",
        "width": "string"
      }
    ]
  },
  "note": "string",
  "preferredDealTerms": {
    "fixedPrice": {
      "amount": {
        "currencyCode": "string",
        "nanos": 0,
        "units": "string"
      },
      "type": "TYPE_UNSPECIFIED"
    }
  },
  "programmaticGuaranteedTerms": {
    "fixedPrice": {
      "amount": {
        "currencyCode": "string",
        "nanos": 0,
        "units": "string"
      },
      "type": "TYPE_UNSPECIFIED"
    },
    "guaranteedLooks": "string",
    "impressionCap": "string",
    "minimumDailyLooks": "string",
    "percentShareOfVoice": "string",
    "reservationType": "RESERVATION_TYPE_UNSPECIFIED"
  },
  "publisherProfile": "string"
}
```

<h3 id="authorizedbuyersmarketplacebuyersproposalssendrfp-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|buyer|path|string|true|Required. The current buyer who is sending the RFP in the format: `buyers/{accountId}`.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[SendRfpRequest](#schemasendrfprequest)|false|none|
|» buyerContacts|body|[[Contact](#schemacontact)]|false|Contact information for the buyer.|
|» client|body|string|false|If the current buyer is sending the RFP on behalf of its client, use this field to specify the name of the client in the format: `buyers/{accountId}/clients/{clientAccountid}`.|
|» displayName|body|string|false|Required. The display name of the proposal being created by this RFP.|
|» estimatedGrossSpend|body|[Money](#schemamoney)|false|Specified by buyers in request for proposal (RFP) to notify publisher the total estimated spend for the proposal. Publishers will receive this information and send back proposed deals accordingly.|
|» flightEndTime|body|string(google-datetime)|false|Required. Proposed flight end time of the RFP. A timestamp in RFC3339 UTC "Zulu" format. Note that the specified value will be truncated to a granularity of one second.|
|» flightStartTime|body|string(google-datetime)|false|Required. Proposed flight start time of the RFP. A timestamp in RFC3339 UTC "Zulu" format. Note that the specified value will be truncated to a granularity of one second.|
|» geoTargeting|body|[CriteriaTargeting](#schemacriteriatargeting)|false|Geo criteria IDs to be targeted. Refer to Geo tables.|
|» inventorySizeTargeting|body|[InventorySizeTargeting](#schemainventorysizetargeting)|false|Inventory sizes to be targeted.|
|» note|body|string|false|A message that is sent to the publisher. Maximum length is 1024 characters.|
|» preferredDealTerms|body|[PreferredDealTerms](#schemapreferreddealterms)|false|The terms for preferred deals.|
|» programmaticGuaranteedTerms|body|[ProgrammaticGuaranteedTerms](#schemaprogrammaticguaranteedterms)|false|The terms for programmatic guaranteed deals.|
|» publisherProfile|body|string|false|Required. The profile of the publisher who will receive this RFP in the format: `buyers/{accountId}/publisherProfiles/{publisherProfileId}`.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "billedBuyer": "string",
  "buyer": "string",
  "buyerContacts": [
    {
      "displayName": "string",
      "email": "string"
    }
  ],
  "buyerPrivateData": {
    "referenceId": "string"
  },
  "client": "string",
  "dealType": "DEAL_TYPE_UNSPECIFIED",
  "displayName": "string",
  "isRenegotiating": true,
  "lastUpdaterOrCommentorRole": "BUYER_SELLER_ROLE_UNSPECIFIED",
  "name": "string",
  "notes": [
    {
      "createTime": "string",
      "creatorRole": "BUYER_SELLER_ROLE_UNSPECIFIED",
      "note": "string"
    }
  ],
  "originatorRole": "BUYER_SELLER_ROLE_UNSPECIFIED",
  "pausingConsented": true,
  "proposalRevision": "string",
  "publisherProfile": "string",
  "sellerContacts": [
    {
      "displayName": "string",
      "email": "string"
    }
  ],
  "state": "STATE_UNSPECIFIED",
  "termsAndConditions": "string",
  "updateTime": "string"
}
```

<h3 id="authorizedbuyersmarketplacebuyersproposalssendrfp-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Proposal](#schemaproposal)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/authorized-buyers-marketplace ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/authorized-buyers-marketplace )
</aside>

## authorizedbuyersmarketplace.buyers.finalizedDeals.addCreative

<a id="opIdauthorizedbuyersmarketplace.buyers.finalizedDeals.addCreative"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:addCreative \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "creative": "string"
  }'
```

`POST /v1/{deal}:addCreative`

Add creative to be used in the bidding process for a finalized deal. For programmatic guaranteed deals, it's recommended that you associate at least one approved creative with the deal before calling SetReadyToServe, to help reduce the number of bid responses filtered because they don't contain approved creatives. Creatives successfully added to a deal can be found in the Realtime-bidding Creatives API creative.deal_ids. This method only applies to programmatic guaranteed deals. Maximum number of 1000 creatives can be added to a finalized deal.

> Body parameter

```json
{
  "creative": "string"
}
```

<h3 id="authorizedbuyersmarketplacebuyersfinalizeddealsaddcreative-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|deal|path|string|true|Required. Name of the finalized deal in the format of: `buyers/{accountId}/finalizedDeals/{dealId}`|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[AddCreativeRequest](#schemaaddcreativerequest)|false|none|
|» creative|body|string|false|Name of the creative to add to the finalized deal, in the format `buyers/{buyerAccountId}/creatives/{creativeId}`. See creative.name.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "deal": {
    "billedBuyer": "string",
    "buyer": "string",
    "client": "string",
    "createTime": "string",
    "creativeRequirements": {
      "creativeFormat": "CREATIVE_FORMAT_UNSPECIFIED",
      "creativePreApprovalPolicy": "CREATIVE_PRE_APPROVAL_POLICY_UNSPECIFIED",
      "creativeSafeFrameCompatibility": "CREATIVE_SAFE_FRAME_COMPATIBILITY_UNSPECIFIED",
      "maxAdDurationMs": "string",
      "programmaticCreativeSource": "PROGRAMMATIC_CREATIVE_SOURCE_UNSPECIFIED",
      "skippableAdType": "SKIPPABLE_AD_TYPE_UNSPECIFIED"
    },
    "dealType": "DEAL_TYPE_UNSPECIFIED",
    "deliveryControl": {
      "companionDeliveryType": "COMPANION_DELIVERY_TYPE_UNSPECIFIED",
      "creativeRotationType": "CREATIVE_ROTATION_TYPE_UNSPECIFIED",
      "deliveryRateType": "DELIVERY_RATE_TYPE_UNSPECIFIED",
      "frequencyCap": [
        {
          "maxImpressions": 0,
          "timeUnitType": "TIME_UNIT_TYPE_UNSPECIFIED",
          "timeUnitsCount": 0
        }
      ],
      "roadblockingType": "ROADBLOCKING_TYPE_UNSPECIFIED"
    },
    "description": "string",
    "displayName": "string",
    "estimatedGrossSpend": {
      "currencyCode": "string",
      "nanos": 0,
      "units": "string"
    },
    "flightEndTime": "string",
    "flightStartTime": "string",
    "name": "string",
    "preferredDealTerms": {
      "fixedPrice": {
        "amount": {
          "currencyCode": "string",
          "nanos": 0,
          "units": "string"
        },
        "type": "TYPE_UNSPECIFIED"
      }
    },
    "privateAuctionTerms": {
      "floorPrice": {
        "amount": {
          "currencyCode": "string",
          "nanos": 0,
          "units": "string"
        },
        "type": "TYPE_UNSPECIFIED"
      },
      "openAuctionAllowed": true
    },
    "programmaticGuaranteedTerms": {
      "fixedPrice": {
        "amount": {
          "currencyCode": "string",
          "nanos": 0,
          "units": "string"
        },
        "type": "TYPE_UNSPECIFIED"
      },
      "guaranteedLooks": "string",
      "impressionCap": "string",
      "minimumDailyLooks": "string",
      "percentShareOfVoice": "string",
      "reservationType": "RESERVATION_TYPE_UNSPECIFIED"
    },
    "proposalRevision": "string",
    "publisherProfile": "string",
    "sellerTimeZone": {
      "id": "string",
      "version": "string"
    },
    "targeting": {
      "daypartTargeting": {
        "dayParts": [
          {
            "dayOfWeek": "DAY_OF_WEEK_UNSPECIFIED",
            "endTime": {
              "hours": 0,
              "minutes": 0,
              "nanos": 0,
              "seconds": 0
            },
            "startTime": {
              "hours": 0,
              "minutes": 0,
              "nanos": 0,
              "seconds": 0
            }
          }
        ],
        "timeZoneType": "TIME_ZONE_TYPE_UNSPECIFIED"
      },
      "geoTargeting": {
        "excludedCriteriaIds": [
          "string"
        ],
        "targetedCriteriaIds": [
          "string"
        ]
      },
      "inventorySizeTargeting": {
        "excludedInventorySizes": [
          {
            "height": "string",
            "type": "TYPE_UNSPECIFIED",
            "width": "string"
          }
        ],
        "targetedInventorySizes": [
          {
            "height": "string",
            "type": "TYPE_UNSPECIFIED",
            "width": "string"
          }
        ]
      },
      "inventoryTypeTargeting": {
        "inventoryTypes": [
          "INVENTORY_TYPE_UNSPECIFIED"
        ]
      },
      "placementTargeting": {
        "mobileApplicationTargeting": {
          "firstPartyTargeting": {
            "excludedAppIds": [
              "string"
            ],
            "targetedAppIds": [
              "string"
            ]
          }
        },
        "uriTargeting": {
          "excludedUris": [
            "string"
          ],
          "targetedUris": [
            "string"
          ]
        }
      },
      "technologyTargeting": {
        "deviceCapabilityTargeting": {
          "excludedCriteriaIds": [
            "string"
          ],
          "targetedCriteriaIds": [
            "string"
          ]
        },
        "deviceCategoryTargeting": {
          "excludedCriteriaIds": [
            "string"
          ],
          "targetedCriteriaIds": [
            "string"
          ]
        },
        "operatingSystemTargeting": {
          "operatingSystemCriteria": {
            "excludedCriteriaIds": [
              "string"
            ],
            "targetedCriteriaIds": [
              "string"
            ]
          },
          "operatingSystemVersionCriteria": {
            "excludedCriteriaIds": [
              "string"
            ],
            "targetedCriteriaIds": [
              "string"
            ]
          }
        }
      },
      "userListTargeting": {
        "excludedCriteriaIds": [
          "string"
        ],
        "targetedCriteriaIds": [
          "string"
        ]
      },
      "videoTargeting": {
        "excludedPositionTypes": [
          "POSITION_TYPE_UNSPECIFIED"
        ],
        "targetedPositionTypes": [
          "POSITION_TYPE_UNSPECIFIED"
        ]
      }
    },
    "updateTime": "string"
  },
  "dealPausingInfo": {
    "pauseReason": "string",
    "pauseRole": "BUYER_SELLER_ROLE_UNSPECIFIED",
    "pausingConsented": true
  },
  "dealServingStatus": "DEAL_SERVING_STATUS_UNSPECIFIED",
  "name": "string",
  "readyToServe": true,
  "rtbMetrics": {
    "adImpressions7Days": "string",
    "bidRate7Days": 0,
    "bidRequests7Days": "string",
    "bids7Days": "string",
    "filteredBidRate7Days": 0,
    "mustBidRateCurrentMonth": 0
  }
}
```

<h3 id="authorizedbuyersmarketplacebuyersfinalizeddealsaddcreative-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[FinalizedDeal](#schemafinalizeddeal)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/authorized-buyers-marketplace ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/authorized-buyers-marketplace )
</aside>

## authorizedbuyersmarketplace.buyers.finalizedDeals.setReadyToServe

<a id="opIdauthorizedbuyersmarketplace.buyers.finalizedDeals.setReadyToServe"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:setReadyToServe \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v1/{deal}:setReadyToServe`

Sets the given finalized deal as ready to serve. By default, deals are set as ready to serve as soon as they're finalized. If you want to opt out of the default behavior, and manually indicate that deals are ready to serve, ask your Technical Account Manager to add you to the allowlist. If you choose to use this method, finalized deals belonging to the bidder and its child seats don't start serving until after you call `setReadyToServe`, and after the deals become active. For example, you can use this method to delay receiving bid requests until your creative is ready. This method only applies to programmatic guaranteed deals.

> Body parameter

```json
{}
```

<h3 id="authorizedbuyersmarketplacebuyersfinalizeddealssetreadytoserve-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|deal|path|string|true|Required. Format: `buyers/{accountId}/finalizedDeals/{dealId}`|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[SetReadyToServeRequest](#schemasetreadytoserverequest)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "deal": {
    "billedBuyer": "string",
    "buyer": "string",
    "client": "string",
    "createTime": "string",
    "creativeRequirements": {
      "creativeFormat": "CREATIVE_FORMAT_UNSPECIFIED",
      "creativePreApprovalPolicy": "CREATIVE_PRE_APPROVAL_POLICY_UNSPECIFIED",
      "creativeSafeFrameCompatibility": "CREATIVE_SAFE_FRAME_COMPATIBILITY_UNSPECIFIED",
      "maxAdDurationMs": "string",
      "programmaticCreativeSource": "PROGRAMMATIC_CREATIVE_SOURCE_UNSPECIFIED",
      "skippableAdType": "SKIPPABLE_AD_TYPE_UNSPECIFIED"
    },
    "dealType": "DEAL_TYPE_UNSPECIFIED",
    "deliveryControl": {
      "companionDeliveryType": "COMPANION_DELIVERY_TYPE_UNSPECIFIED",
      "creativeRotationType": "CREATIVE_ROTATION_TYPE_UNSPECIFIED",
      "deliveryRateType": "DELIVERY_RATE_TYPE_UNSPECIFIED",
      "frequencyCap": [
        {
          "maxImpressions": 0,
          "timeUnitType": "TIME_UNIT_TYPE_UNSPECIFIED",
          "timeUnitsCount": 0
        }
      ],
      "roadblockingType": "ROADBLOCKING_TYPE_UNSPECIFIED"
    },
    "description": "string",
    "displayName": "string",
    "estimatedGrossSpend": {
      "currencyCode": "string",
      "nanos": 0,
      "units": "string"
    },
    "flightEndTime": "string",
    "flightStartTime": "string",
    "name": "string",
    "preferredDealTerms": {
      "fixedPrice": {
        "amount": {
          "currencyCode": "string",
          "nanos": 0,
          "units": "string"
        },
        "type": "TYPE_UNSPECIFIED"
      }
    },
    "privateAuctionTerms": {
      "floorPrice": {
        "amount": {
          "currencyCode": "string",
          "nanos": 0,
          "units": "string"
        },
        "type": "TYPE_UNSPECIFIED"
      },
      "openAuctionAllowed": true
    },
    "programmaticGuaranteedTerms": {
      "fixedPrice": {
        "amount": {
          "currencyCode": "string",
          "nanos": 0,
          "units": "string"
        },
        "type": "TYPE_UNSPECIFIED"
      },
      "guaranteedLooks": "string",
      "impressionCap": "string",
      "minimumDailyLooks": "string",
      "percentShareOfVoice": "string",
      "reservationType": "RESERVATION_TYPE_UNSPECIFIED"
    },
    "proposalRevision": "string",
    "publisherProfile": "string",
    "sellerTimeZone": {
      "id": "string",
      "version": "string"
    },
    "targeting": {
      "daypartTargeting": {
        "dayParts": [
          {
            "dayOfWeek": "DAY_OF_WEEK_UNSPECIFIED",
            "endTime": {
              "hours": 0,
              "minutes": 0,
              "nanos": 0,
              "seconds": 0
            },
            "startTime": {
              "hours": 0,
              "minutes": 0,
              "nanos": 0,
              "seconds": 0
            }
          }
        ],
        "timeZoneType": "TIME_ZONE_TYPE_UNSPECIFIED"
      },
      "geoTargeting": {
        "excludedCriteriaIds": [
          "string"
        ],
        "targetedCriteriaIds": [
          "string"
        ]
      },
      "inventorySizeTargeting": {
        "excludedInventorySizes": [
          {
            "height": "string",
            "type": "TYPE_UNSPECIFIED",
            "width": "string"
          }
        ],
        "targetedInventorySizes": [
          {
            "height": "string",
            "type": "TYPE_UNSPECIFIED",
            "width": "string"
          }
        ]
      },
      "inventoryTypeTargeting": {
        "inventoryTypes": [
          "INVENTORY_TYPE_UNSPECIFIED"
        ]
      },
      "placementTargeting": {
        "mobileApplicationTargeting": {
          "firstPartyTargeting": {
            "excludedAppIds": [
              "string"
            ],
            "targetedAppIds": [
              "string"
            ]
          }
        },
        "uriTargeting": {
          "excludedUris": [
            "string"
          ],
          "targetedUris": [
            "string"
          ]
        }
      },
      "technologyTargeting": {
        "deviceCapabilityTargeting": {
          "excludedCriteriaIds": [
            "string"
          ],
          "targetedCriteriaIds": [
            "string"
          ]
        },
        "deviceCategoryTargeting": {
          "excludedCriteriaIds": [
            "string"
          ],
          "targetedCriteriaIds": [
            "string"
          ]
        },
        "operatingSystemTargeting": {
          "operatingSystemCriteria": {
            "excludedCriteriaIds": [
              "string"
            ],
            "targetedCriteriaIds": [
              "string"
            ]
          },
          "operatingSystemVersionCriteria": {
            "excludedCriteriaIds": [
              "string"
            ],
            "targetedCriteriaIds": [
              "string"
            ]
          }
        }
      },
      "userListTargeting": {
        "excludedCriteriaIds": [
          "string"
        ],
        "targetedCriteriaIds": [
          "string"
        ]
      },
      "videoTargeting": {
        "excludedPositionTypes": [
          "POSITION_TYPE_UNSPECIFIED"
        ],
        "targetedPositionTypes": [
          "POSITION_TYPE_UNSPECIFIED"
        ]
      }
    },
    "updateTime": "string"
  },
  "dealPausingInfo": {
    "pauseReason": "string",
    "pauseRole": "BUYER_SELLER_ROLE_UNSPECIFIED",
    "pausingConsented": true
  },
  "dealServingStatus": "DEAL_SERVING_STATUS_UNSPECIFIED",
  "name": "string",
  "readyToServe": true,
  "rtbMetrics": {
    "adImpressions7Days": "string",
    "bidRate7Days": 0,
    "bidRequests7Days": "string",
    "bids7Days": "string",
    "filteredBidRate7Days": 0,
    "mustBidRateCurrentMonth": 0
  }
}
```

<h3 id="authorizedbuyersmarketplacebuyersfinalizeddealssetreadytoserve-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[FinalizedDeal](#schemafinalizeddeal)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/authorized-buyers-marketplace ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/authorized-buyers-marketplace )
</aside>

## authorizedbuyersmarketplace.buyers.publisherProfiles.get

<a id="opIdauthorizedbuyersmarketplace.buyers.publisherProfiles.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{name}`

Gets the requested publisher profile by name.

<h3 id="authorizedbuyersmarketplacebuyerspublisherprofilesget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. Name of the publisher profile. Format: `buyers/{buyerId}/publisherProfiles/{publisherProfileId}`|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "audienceDescription": "string",
  "directDealsContact": "string",
  "displayName": "string",
  "domains": [
    "string"
  ],
  "isParent": true,
  "logoUrl": "string",
  "mediaKitUrl": "string",
  "mobileApps": [
    {
      "appStore": "APP_STORE_TYPE_UNSPECIFIED",
      "externalAppId": "string",
      "name": "string"
    }
  ],
  "name": "string",
  "overview": "string",
  "pitchStatement": "string",
  "programmaticDealsContact": "string",
  "publisherCode": "string",
  "samplePageUrl": "string",
  "topHeadlines": [
    "string"
  ]
}
```

<h3 id="authorizedbuyersmarketplacebuyerspublisherprofilesget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[PublisherProfile](#schemapublisherprofile)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/authorized-buyers-marketplace ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/authorized-buyers-marketplace )
</aside>

## authorizedbuyersmarketplace.buyers.clients.users.delete

<a id="opIdauthorizedbuyersmarketplace.buyers.clients.users.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/{name}`

Deletes an existing client user. The client user will lose access to the Authorized Buyers UI. Note that if a client user is deleted, the user's access to the UI can't be restored unless a new client user is created and activated.

<h3 id="authorizedbuyersmarketplacebuyersclientsusersdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. Format: `buyers/{buyerAccountId}/clients/{clientAccountId}/clientUsers/{userId}`|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{}
```

<h3 id="authorizedbuyersmarketplacebuyersclientsusersdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/authorized-buyers-marketplace ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/authorized-buyers-marketplace )
</aside>

## authorizedbuyersmarketplace.buyers.proposals.deals.patch

<a id="opIdauthorizedbuyersmarketplace.buyers.proposals.deals.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "estimatedGrossSpend": {
      "currencyCode": "string",
      "nanos": 0,
      "units": "string"
    },
    "flightEndTime": "string",
    "flightStartTime": "string",
    "name": "string",
    "preferredDealTerms": {
      "fixedPrice": {
        "amount": {
          "currencyCode": "string",
          "nanos": 0,
          "units": "string"
        },
        "type": "TYPE_UNSPECIFIED"
      }
    },
    "privateAuctionTerms": {
      "floorPrice": {
        "amount": {
          "currencyCode": "string",
          "nanos": 0,
          "units": "string"
        },
        "type": "TYPE_UNSPECIFIED"
      }
    },
    "programmaticGuaranteedTerms": {
      "fixedPrice": {
        "amount": {
          "currencyCode": "string",
          "nanos": 0,
          "units": "string"
        },
        "type": "TYPE_UNSPECIFIED"
      },
      "guaranteedLooks": "string",
      "impressionCap": "string",
      "minimumDailyLooks": "string",
      "percentShareOfVoice": "string",
      "reservationType": "RESERVATION_TYPE_UNSPECIFIED"
    },
    "publisherProfile": "string",
    "targeting": {
      "daypartTargeting": {
        "dayParts": [
          {
            "dayOfWeek": "DAY_OF_WEEK_UNSPECIFIED",
            "endTime": {
              "hours": 0,
              "minutes": 0,
              "nanos": 0,
              "seconds": 0
            },
            "startTime": {
              "hours": 0,
              "minutes": 0,
              "nanos": 0,
              "seconds": 0
            }
          }
        ],
        "timeZoneType": "TIME_ZONE_TYPE_UNSPECIFIED"
      },
      "userListTargeting": {
        "excludedCriteriaIds": [
          "string"
        ],
        "targetedCriteriaIds": [
          "string"
        ]
      }
    }
  }'
```

`PATCH /v1/{name}`

Updates the given deal at the buyer known revision number. If the server revision has advanced since the passed-in proposal.proposal_revision an ABORTED error message will be returned. The revision number is incremented by the server whenever the proposal or its constituent deals are updated. Note: The revision number is kept at a proposal level. The buyer of the API is expected to keep track of the revision number after the last update operation and send it in as part of the next update request. This way, if there are further changes on the server (for example, seller making new updates), then the server can detect conflicts and reject the proposed changes.

> Body parameter

```json
{
  "estimatedGrossSpend": {
    "currencyCode": "string",
    "nanos": 0,
    "units": "string"
  },
  "flightEndTime": "string",
  "flightStartTime": "string",
  "name": "string",
  "preferredDealTerms": {
    "fixedPrice": {
      "amount": {
        "currencyCode": "string",
        "nanos": 0,
        "units": "string"
      },
      "type": "TYPE_UNSPECIFIED"
    }
  },
  "privateAuctionTerms": {
    "floorPrice": {
      "amount": {
        "currencyCode": "string",
        "nanos": 0,
        "units": "string"
      },
      "type": "TYPE_UNSPECIFIED"
    }
  },
  "programmaticGuaranteedTerms": {
    "fixedPrice": {
      "amount": {
        "currencyCode": "string",
        "nanos": 0,
        "units": "string"
      },
      "type": "TYPE_UNSPECIFIED"
    },
    "guaranteedLooks": "string",
    "impressionCap": "string",
    "minimumDailyLooks": "string",
    "percentShareOfVoice": "string",
    "reservationType": "RESERVATION_TYPE_UNSPECIFIED"
  },
  "publisherProfile": "string",
  "targeting": {
    "daypartTargeting": {
      "dayParts": [
        {
          "dayOfWeek": "DAY_OF_WEEK_UNSPECIFIED",
          "endTime": {
            "hours": 0,
            "minutes": 0,
            "nanos": 0,
            "seconds": 0
          },
          "startTime": {
            "hours": 0,
            "minutes": 0,
            "nanos": 0,
            "seconds": 0
          }
        }
      ],
      "timeZoneType": "TIME_ZONE_TYPE_UNSPECIFIED"
    },
    "userListTargeting": {
      "excludedCriteriaIds": [
        "string"
      ],
      "targetedCriteriaIds": [
        "string"
      ]
    }
  }
}
```

<h3 id="authorizedbuyersmarketplacebuyersproposalsdealspatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Immutable. The unique identifier of the deal. Auto-generated by the server when a deal is created. Format: buyers/{accountId}/proposals/{proposalId}/deals/{dealId}|
|updateMask|query|string|false|List of fields to be updated. If empty or unspecified, the service will update all fields populated in the update request excluding the output only fields and primitive fields with default value. Note that explicit field mask is required in order to reset a primitive field back to its default value, for example, false for boolean fields, 0 for integer fields. A special field mask consisting of a single path "*" can be used to indicate full replacement(the equivalent of PUT method), updatable fields unset or unspecified in the input will be cleared or set to default value. Output only fields will be ignored regardless of the value of updateMask.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[Deal](#schemadeal)|false|none|
|» estimatedGrossSpend|body|[Money](#schemamoney)|false|Specified by buyers in request for proposal (RFP) to notify publisher the total estimated spend for the proposal. Publishers will receive this information and send back proposed deals accordingly.|
|» flightEndTime|body|string(google-datetime)|false|Proposed flight end time of the deal. This will generally be stored in a granularity of a second. A value is not necessary for Private Auction deals.|
|» flightStartTime|body|string(google-datetime)|false|Proposed flight start time of the deal. This will generally be stored in the granularity of one second since deal serving starts at seconds boundary. Any time specified with more granularity (for example, in milliseconds) will be truncated towards the start of time in seconds.|
|» name|body|string|false|Immutable. The unique identifier of the deal. Auto-generated by the server when a deal is created. Format: buyers/{accountId}/proposals/{proposalId}/deals/{dealId}|
|» preferredDealTerms|body|[PreferredDealTerms](#schemapreferreddealterms)|false|The terms for preferred deals.|
|» privateAuctionTerms|body|[PrivateAuctionTerms](#schemaprivateauctionterms)|false|The terms for private auction deals.|
|» programmaticGuaranteedTerms|body|[ProgrammaticGuaranteedTerms](#schemaprogrammaticguaranteedterms)|false|The terms for programmatic guaranteed deals.|
|» publisherProfile|body|string|false|Immutable. Reference to the seller on the deal. Format: `buyers/{buyerAccountId}/publisherProfiles/{publisherProfileId}`|
|» targeting|body|[MarketplaceTargeting](#schemamarketplacetargeting)|false|Specifies the subset of inventory targeted by the deal. Can be updated by the buyer before the deal is finalized.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "billedBuyer": "string",
  "buyer": "string",
  "client": "string",
  "createTime": "string",
  "creativeRequirements": {
    "creativeFormat": "CREATIVE_FORMAT_UNSPECIFIED",
    "creativePreApprovalPolicy": "CREATIVE_PRE_APPROVAL_POLICY_UNSPECIFIED",
    "creativeSafeFrameCompatibility": "CREATIVE_SAFE_FRAME_COMPATIBILITY_UNSPECIFIED",
    "maxAdDurationMs": "string",
    "programmaticCreativeSource": "PROGRAMMATIC_CREATIVE_SOURCE_UNSPECIFIED",
    "skippableAdType": "SKIPPABLE_AD_TYPE_UNSPECIFIED"
  },
  "dealType": "DEAL_TYPE_UNSPECIFIED",
  "deliveryControl": {
    "companionDeliveryType": "COMPANION_DELIVERY_TYPE_UNSPECIFIED",
    "creativeRotationType": "CREATIVE_ROTATION_TYPE_UNSPECIFIED",
    "deliveryRateType": "DELIVERY_RATE_TYPE_UNSPECIFIED",
    "frequencyCap": [
      {
        "maxImpressions": 0,
        "timeUnitType": "TIME_UNIT_TYPE_UNSPECIFIED",
        "timeUnitsCount": 0
      }
    ],
    "roadblockingType": "ROADBLOCKING_TYPE_UNSPECIFIED"
  },
  "description": "string",
  "displayName": "string",
  "estimatedGrossSpend": {
    "currencyCode": "string",
    "nanos": 0,
    "units": "string"
  },
  "flightEndTime": "string",
  "flightStartTime": "string",
  "name": "string",
  "preferredDealTerms": {
    "fixedPrice": {
      "amount": {
        "currencyCode": "string",
        "nanos": 0,
        "units": "string"
      },
      "type": "TYPE_UNSPECIFIED"
    }
  },
  "privateAuctionTerms": {
    "floorPrice": {
      "amount": {
        "currencyCode": "string",
        "nanos": 0,
        "units": "string"
      },
      "type": "TYPE_UNSPECIFIED"
    },
    "openAuctionAllowed": true
  },
  "programmaticGuaranteedTerms": {
    "fixedPrice": {
      "amount": {
        "currencyCode": "string",
        "nanos": 0,
        "units": "string"
      },
      "type": "TYPE_UNSPECIFIED"
    },
    "guaranteedLooks": "string",
    "impressionCap": "string",
    "minimumDailyLooks": "string",
    "percentShareOfVoice": "string",
    "reservationType": "RESERVATION_TYPE_UNSPECIFIED"
  },
  "proposalRevision": "string",
  "publisherProfile": "string",
  "sellerTimeZone": {
    "id": "string",
    "version": "string"
  },
  "targeting": {
    "daypartTargeting": {
      "dayParts": [
        {
          "dayOfWeek": "DAY_OF_WEEK_UNSPECIFIED",
          "endTime": {
            "hours": 0,
            "minutes": 0,
            "nanos": 0,
            "seconds": 0
          },
          "startTime": {
            "hours": 0,
            "minutes": 0,
            "nanos": 0,
            "seconds": 0
          }
        }
      ],
      "timeZoneType": "TIME_ZONE_TYPE_UNSPECIFIED"
    },
    "geoTargeting": {
      "excludedCriteriaIds": [
        "string"
      ],
      "targetedCriteriaIds": [
        "string"
      ]
    },
    "inventorySizeTargeting": {
      "excludedInventorySizes": [
        {
          "height": "string",
          "type": "TYPE_UNSPECIFIED",
          "width": "string"
        }
      ],
      "targetedInventorySizes": [
        {
          "height": "string",
          "type": "TYPE_UNSPECIFIED",
          "width": "string"
        }
      ]
    },
    "inventoryTypeTargeting": {
      "inventoryTypes": [
        "INVENTORY_TYPE_UNSPECIFIED"
      ]
    },
    "placementTargeting": {
      "mobileApplicationTargeting": {
        "firstPartyTargeting": {
          "excludedAppIds": [
            "string"
          ],
          "targetedAppIds": [
            "string"
          ]
        }
      },
      "uriTargeting": {
        "excludedUris": [
          "string"
        ],
        "targetedUris": [
          "string"
        ]
      }
    },
    "technologyTargeting": {
      "deviceCapabilityTargeting": {
        "excludedCriteriaIds": [
          "string"
        ],
        "targetedCriteriaIds": [
          "string"
        ]
      },
      "deviceCategoryTargeting": {
        "excludedCriteriaIds": [
          "string"
        ],
        "targetedCriteriaIds": [
          "string"
        ]
      },
      "operatingSystemTargeting": {
        "operatingSystemCriteria": {
          "excludedCriteriaIds": [
            "string"
          ],
          "targetedCriteriaIds": [
            "string"
          ]
        },
        "operatingSystemVersionCriteria": {
          "excludedCriteriaIds": [
            "string"
          ],
          "targetedCriteriaIds": [
            "string"
          ]
        }
      }
    },
    "userListTargeting": {
      "excludedCriteriaIds": [
        "string"
      ],
      "targetedCriteriaIds": [
        "string"
      ]
    },
    "videoTargeting": {
      "excludedPositionTypes": [
        "POSITION_TYPE_UNSPECIFIED"
      ],
      "targetedPositionTypes": [
        "POSITION_TYPE_UNSPECIFIED"
      ]
    }
  },
  "updateTime": "string"
}
```

<h3 id="authorizedbuyersmarketplacebuyersproposalsdealspatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Deal](#schemadeal)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/authorized-buyers-marketplace ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/authorized-buyers-marketplace )
</aside>

## authorizedbuyersmarketplace.buyers.proposals.accept

<a id="opIdauthorizedbuyersmarketplace.buyers.proposals.accept"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:accept \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "proposalRevision": "string"
  }'
```

`POST /v1/{name}:accept`

Accepts the proposal at the given revision number. If the revision number in the request is behind the latest from the server, an error message will be returned. This call updates the Proposal.state from `BUYER_ACCEPTANCE_REQUESTED` to `FINALIZED`; it has no side effect if the Proposal.state is already `FINALIZED` and throws exception if the Proposal.state is not either `BUYER_ACCEPTANCE_REQUESTED` or `FINALIZED`. Accepting a proposal means the buyer understands and accepts the Proposal.terms_and_conditions proposed by the seller.

> Body parameter

```json
{
  "proposalRevision": "string"
}
```

<h3 id="authorizedbuyersmarketplacebuyersproposalsaccept-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Name of the proposal. Format: `buyers/{accountId}/proposals/{proposalId}`|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[AcceptProposalRequest](#schemaacceptproposalrequest)|false|none|
|» proposalRevision|body|string(int64)|false|The last known client revision number of the proposal.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "billedBuyer": "string",
  "buyer": "string",
  "buyerContacts": [
    {
      "displayName": "string",
      "email": "string"
    }
  ],
  "buyerPrivateData": {
    "referenceId": "string"
  },
  "client": "string",
  "dealType": "DEAL_TYPE_UNSPECIFIED",
  "displayName": "string",
  "isRenegotiating": true,
  "lastUpdaterOrCommentorRole": "BUYER_SELLER_ROLE_UNSPECIFIED",
  "name": "string",
  "notes": [
    {
      "createTime": "string",
      "creatorRole": "BUYER_SELLER_ROLE_UNSPECIFIED",
      "note": "string"
    }
  ],
  "originatorRole": "BUYER_SELLER_ROLE_UNSPECIFIED",
  "pausingConsented": true,
  "proposalRevision": "string",
  "publisherProfile": "string",
  "sellerContacts": [
    {
      "displayName": "string",
      "email": "string"
    }
  ],
  "state": "STATE_UNSPECIFIED",
  "termsAndConditions": "string",
  "updateTime": "string"
}
```

<h3 id="authorizedbuyersmarketplacebuyersproposalsaccept-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Proposal](#schemaproposal)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/authorized-buyers-marketplace ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/authorized-buyers-marketplace )
</aside>

## authorizedbuyersmarketplace.buyers.clients.users.activate

<a id="opIdauthorizedbuyersmarketplace.buyers.clients.users.activate"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:activate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v1/{name}:activate`

Activates an existing client user. The state of the client user will be updated from "INACTIVE" to "ACTIVE". This method has no effect if the client user is already in "ACTIVE" state. An error will be returned if the client user to activate is still in "INVITED" state.

> Body parameter

```json
{}
```

<h3 id="authorizedbuyersmarketplacebuyersclientsusersactivate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. Format: `buyers/{buyerAccountId}/clients/{clientAccountId}/clientUsers/{userId}`|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[ActivateClientUserRequest](#schemaactivateclientuserrequest)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "email": "string",
  "name": "string",
  "state": "STATE_UNSPECIFIED"
}
```

<h3 id="authorizedbuyersmarketplacebuyersclientsusersactivate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ClientUser](#schemaclientuser)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/authorized-buyers-marketplace ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/authorized-buyers-marketplace )
</aside>

## authorizedbuyersmarketplace.buyers.clients.users.deactivate

<a id="opIdauthorizedbuyersmarketplace.buyers.clients.users.deactivate"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:deactivate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v1/{name}:deactivate`

Deactivates an existing client user. The state of the client user will be updated from "ACTIVE" to "INACTIVE". This method has no effect if the client user is already in "INACTIVE" state. An error will be returned if the client user to deactivate is still in "INVITED" state.

> Body parameter

```json
{}
```

<h3 id="authorizedbuyersmarketplacebuyersclientsusersdeactivate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. Format: `buyers/{buyerAccountId}/clients/{clientAccountId}/clientUsers/{userId}`|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[DeactivateClientUserRequest](#schemadeactivateclientuserrequest)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "email": "string",
  "name": "string",
  "state": "STATE_UNSPECIFIED"
}
```

<h3 id="authorizedbuyersmarketplacebuyersclientsusersdeactivate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ClientUser](#schemaclientuser)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/authorized-buyers-marketplace ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/authorized-buyers-marketplace )
</aside>

## authorizedbuyersmarketplace.buyers.finalizedDeals.pause

<a id="opIdauthorizedbuyersmarketplace.buyers.finalizedDeals.pause"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:pause \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "reason": "string"
  }'
```

`POST /v1/{name}:pause`

Pauses serving of the given finalized deal. This call only pauses the serving status, and does not affect other fields of the finalized deal. Calling this method for an already paused deal has no effect. This method only applies to programmatic guaranteed deals.

> Body parameter

```json
{
  "reason": "string"
}
```

<h3 id="authorizedbuyersmarketplacebuyersfinalizeddealspause-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. Format: `buyers/{accountId}/finalizedDeals/{dealId}`|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[PauseFinalizedDealRequest](#schemapausefinalizeddealrequest)|false|none|
|» reason|body|string|false|The reason to pause the finalized deal, will be displayed to the seller. Maximum length is 1000 characters.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "deal": {
    "billedBuyer": "string",
    "buyer": "string",
    "client": "string",
    "createTime": "string",
    "creativeRequirements": {
      "creativeFormat": "CREATIVE_FORMAT_UNSPECIFIED",
      "creativePreApprovalPolicy": "CREATIVE_PRE_APPROVAL_POLICY_UNSPECIFIED",
      "creativeSafeFrameCompatibility": "CREATIVE_SAFE_FRAME_COMPATIBILITY_UNSPECIFIED",
      "maxAdDurationMs": "string",
      "programmaticCreativeSource": "PROGRAMMATIC_CREATIVE_SOURCE_UNSPECIFIED",
      "skippableAdType": "SKIPPABLE_AD_TYPE_UNSPECIFIED"
    },
    "dealType": "DEAL_TYPE_UNSPECIFIED",
    "deliveryControl": {
      "companionDeliveryType": "COMPANION_DELIVERY_TYPE_UNSPECIFIED",
      "creativeRotationType": "CREATIVE_ROTATION_TYPE_UNSPECIFIED",
      "deliveryRateType": "DELIVERY_RATE_TYPE_UNSPECIFIED",
      "frequencyCap": [
        {
          "maxImpressions": 0,
          "timeUnitType": "TIME_UNIT_TYPE_UNSPECIFIED",
          "timeUnitsCount": 0
        }
      ],
      "roadblockingType": "ROADBLOCKING_TYPE_UNSPECIFIED"
    },
    "description": "string",
    "displayName": "string",
    "estimatedGrossSpend": {
      "currencyCode": "string",
      "nanos": 0,
      "units": "string"
    },
    "flightEndTime": "string",
    "flightStartTime": "string",
    "name": "string",
    "preferredDealTerms": {
      "fixedPrice": {
        "amount": {
          "currencyCode": "string",
          "nanos": 0,
          "units": "string"
        },
        "type": "TYPE_UNSPECIFIED"
      }
    },
    "privateAuctionTerms": {
      "floorPrice": {
        "amount": {
          "currencyCode": "string",
          "nanos": 0,
          "units": "string"
        },
        "type": "TYPE_UNSPECIFIED"
      },
      "openAuctionAllowed": true
    },
    "programmaticGuaranteedTerms": {
      "fixedPrice": {
        "amount": {
          "currencyCode": "string",
          "nanos": 0,
          "units": "string"
        },
        "type": "TYPE_UNSPECIFIED"
      },
      "guaranteedLooks": "string",
      "impressionCap": "string",
      "minimumDailyLooks": "string",
      "percentShareOfVoice": "string",
      "reservationType": "RESERVATION_TYPE_UNSPECIFIED"
    },
    "proposalRevision": "string",
    "publisherProfile": "string",
    "sellerTimeZone": {
      "id": "string",
      "version": "string"
    },
    "targeting": {
      "daypartTargeting": {
        "dayParts": [
          {
            "dayOfWeek": "DAY_OF_WEEK_UNSPECIFIED",
            "endTime": {
              "hours": 0,
              "minutes": 0,
              "nanos": 0,
              "seconds": 0
            },
            "startTime": {
              "hours": 0,
              "minutes": 0,
              "nanos": 0,
              "seconds": 0
            }
          }
        ],
        "timeZoneType": "TIME_ZONE_TYPE_UNSPECIFIED"
      },
      "geoTargeting": {
        "excludedCriteriaIds": [
          "string"
        ],
        "targetedCriteriaIds": [
          "string"
        ]
      },
      "inventorySizeTargeting": {
        "excludedInventorySizes": [
          {
            "height": "string",
            "type": "TYPE_UNSPECIFIED",
            "width": "string"
          }
        ],
        "targetedInventorySizes": [
          {
            "height": "string",
            "type": "TYPE_UNSPECIFIED",
            "width": "string"
          }
        ]
      },
      "inventoryTypeTargeting": {
        "inventoryTypes": [
          "INVENTORY_TYPE_UNSPECIFIED"
        ]
      },
      "placementTargeting": {
        "mobileApplicationTargeting": {
          "firstPartyTargeting": {
            "excludedAppIds": [
              "string"
            ],
            "targetedAppIds": [
              "string"
            ]
          }
        },
        "uriTargeting": {
          "excludedUris": [
            "string"
          ],
          "targetedUris": [
            "string"
          ]
        }
      },
      "technologyTargeting": {
        "deviceCapabilityTargeting": {
          "excludedCriteriaIds": [
            "string"
          ],
          "targetedCriteriaIds": [
            "string"
          ]
        },
        "deviceCategoryTargeting": {
          "excludedCriteriaIds": [
            "string"
          ],
          "targetedCriteriaIds": [
            "string"
          ]
        },
        "operatingSystemTargeting": {
          "operatingSystemCriteria": {
            "excludedCriteriaIds": [
              "string"
            ],
            "targetedCriteriaIds": [
              "string"
            ]
          },
          "operatingSystemVersionCriteria": {
            "excludedCriteriaIds": [
              "string"
            ],
            "targetedCriteriaIds": [
              "string"
            ]
          }
        }
      },
      "userListTargeting": {
        "excludedCriteriaIds": [
          "string"
        ],
        "targetedCriteriaIds": [
          "string"
        ]
      },
      "videoTargeting": {
        "excludedPositionTypes": [
          "POSITION_TYPE_UNSPECIFIED"
        ],
        "targetedPositionTypes": [
          "POSITION_TYPE_UNSPECIFIED"
        ]
      }
    },
    "updateTime": "string"
  },
  "dealPausingInfo": {
    "pauseReason": "string",
    "pauseRole": "BUYER_SELLER_ROLE_UNSPECIFIED",
    "pausingConsented": true
  },
  "dealServingStatus": "DEAL_SERVING_STATUS_UNSPECIFIED",
  "name": "string",
  "readyToServe": true,
  "rtbMetrics": {
    "adImpressions7Days": "string",
    "bidRate7Days": 0,
    "bidRequests7Days": "string",
    "bids7Days": "string",
    "filteredBidRate7Days": 0,
    "mustBidRateCurrentMonth": 0
  }
}
```

<h3 id="authorizedbuyersmarketplacebuyersfinalizeddealspause-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[FinalizedDeal](#schemafinalizeddeal)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/authorized-buyers-marketplace ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/authorized-buyers-marketplace )
</aside>

## authorizedbuyersmarketplace.buyers.finalizedDeals.resume

<a id="opIdauthorizedbuyersmarketplace.buyers.finalizedDeals.resume"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:resume \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v1/{name}:resume`

Resumes serving of the given finalized deal. Calling this method for an running deal has no effect. If a deal is initially paused by the seller, calling this method will not resume serving of the deal until the seller also resumes the deal. This method only applies to programmatic guaranteed deals.

> Body parameter

```json
{}
```

<h3 id="authorizedbuyersmarketplacebuyersfinalizeddealsresume-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. Format: `buyers/{accountId}/finalizedDeals/{dealId}`|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[ResumeFinalizedDealRequest](#schemaresumefinalizeddealrequest)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "deal": {
    "billedBuyer": "string",
    "buyer": "string",
    "client": "string",
    "createTime": "string",
    "creativeRequirements": {
      "creativeFormat": "CREATIVE_FORMAT_UNSPECIFIED",
      "creativePreApprovalPolicy": "CREATIVE_PRE_APPROVAL_POLICY_UNSPECIFIED",
      "creativeSafeFrameCompatibility": "CREATIVE_SAFE_FRAME_COMPATIBILITY_UNSPECIFIED",
      "maxAdDurationMs": "string",
      "programmaticCreativeSource": "PROGRAMMATIC_CREATIVE_SOURCE_UNSPECIFIED",
      "skippableAdType": "SKIPPABLE_AD_TYPE_UNSPECIFIED"
    },
    "dealType": "DEAL_TYPE_UNSPECIFIED",
    "deliveryControl": {
      "companionDeliveryType": "COMPANION_DELIVERY_TYPE_UNSPECIFIED",
      "creativeRotationType": "CREATIVE_ROTATION_TYPE_UNSPECIFIED",
      "deliveryRateType": "DELIVERY_RATE_TYPE_UNSPECIFIED",
      "frequencyCap": [
        {
          "maxImpressions": 0,
          "timeUnitType": "TIME_UNIT_TYPE_UNSPECIFIED",
          "timeUnitsCount": 0
        }
      ],
      "roadblockingType": "ROADBLOCKING_TYPE_UNSPECIFIED"
    },
    "description": "string",
    "displayName": "string",
    "estimatedGrossSpend": {
      "currencyCode": "string",
      "nanos": 0,
      "units": "string"
    },
    "flightEndTime": "string",
    "flightStartTime": "string",
    "name": "string",
    "preferredDealTerms": {
      "fixedPrice": {
        "amount": {
          "currencyCode": "string",
          "nanos": 0,
          "units": "string"
        },
        "type": "TYPE_UNSPECIFIED"
      }
    },
    "privateAuctionTerms": {
      "floorPrice": {
        "amount": {
          "currencyCode": "string",
          "nanos": 0,
          "units": "string"
        },
        "type": "TYPE_UNSPECIFIED"
      },
      "openAuctionAllowed": true
    },
    "programmaticGuaranteedTerms": {
      "fixedPrice": {
        "amount": {
          "currencyCode": "string",
          "nanos": 0,
          "units": "string"
        },
        "type": "TYPE_UNSPECIFIED"
      },
      "guaranteedLooks": "string",
      "impressionCap": "string",
      "minimumDailyLooks": "string",
      "percentShareOfVoice": "string",
      "reservationType": "RESERVATION_TYPE_UNSPECIFIED"
    },
    "proposalRevision": "string",
    "publisherProfile": "string",
    "sellerTimeZone": {
      "id": "string",
      "version": "string"
    },
    "targeting": {
      "daypartTargeting": {
        "dayParts": [
          {
            "dayOfWeek": "DAY_OF_WEEK_UNSPECIFIED",
            "endTime": {
              "hours": 0,
              "minutes": 0,
              "nanos": 0,
              "seconds": 0
            },
            "startTime": {
              "hours": 0,
              "minutes": 0,
              "nanos": 0,
              "seconds": 0
            }
          }
        ],
        "timeZoneType": "TIME_ZONE_TYPE_UNSPECIFIED"
      },
      "geoTargeting": {
        "excludedCriteriaIds": [
          "string"
        ],
        "targetedCriteriaIds": [
          "string"
        ]
      },
      "inventorySizeTargeting": {
        "excludedInventorySizes": [
          {
            "height": "string",
            "type": "TYPE_UNSPECIFIED",
            "width": "string"
          }
        ],
        "targetedInventorySizes": [
          {
            "height": "string",
            "type": "TYPE_UNSPECIFIED",
            "width": "string"
          }
        ]
      },
      "inventoryTypeTargeting": {
        "inventoryTypes": [
          "INVENTORY_TYPE_UNSPECIFIED"
        ]
      },
      "placementTargeting": {
        "mobileApplicationTargeting": {
          "firstPartyTargeting": {
            "excludedAppIds": [
              "string"
            ],
            "targetedAppIds": [
              "string"
            ]
          }
        },
        "uriTargeting": {
          "excludedUris": [
            "string"
          ],
          "targetedUris": [
            "string"
          ]
        }
      },
      "technologyTargeting": {
        "deviceCapabilityTargeting": {
          "excludedCriteriaIds": [
            "string"
          ],
          "targetedCriteriaIds": [
            "string"
          ]
        },
        "deviceCategoryTargeting": {
          "excludedCriteriaIds": [
            "string"
          ],
          "targetedCriteriaIds": [
            "string"
          ]
        },
        "operatingSystemTargeting": {
          "operatingSystemCriteria": {
            "excludedCriteriaIds": [
              "string"
            ],
            "targetedCriteriaIds": [
              "string"
            ]
          },
          "operatingSystemVersionCriteria": {
            "excludedCriteriaIds": [
              "string"
            ],
            "targetedCriteriaIds": [
              "string"
            ]
          }
        }
      },
      "userListTargeting": {
        "excludedCriteriaIds": [
          "string"
        ],
        "targetedCriteriaIds": [
          "string"
        ]
      },
      "videoTargeting": {
        "excludedPositionTypes": [
          "POSITION_TYPE_UNSPECIFIED"
        ],
        "targetedPositionTypes": [
          "POSITION_TYPE_UNSPECIFIED"
        ]
      }
    },
    "updateTime": "string"
  },
  "dealPausingInfo": {
    "pauseReason": "string",
    "pauseRole": "BUYER_SELLER_ROLE_UNSPECIFIED",
    "pausingConsented": true
  },
  "dealServingStatus": "DEAL_SERVING_STATUS_UNSPECIFIED",
  "name": "string",
  "readyToServe": true,
  "rtbMetrics": {
    "adImpressions7Days": "string",
    "bidRate7Days": 0,
    "bidRequests7Days": "string",
    "bids7Days": "string",
    "filteredBidRate7Days": 0,
    "mustBidRateCurrentMonth": 0
  }
}
```

<h3 id="authorizedbuyersmarketplacebuyersfinalizeddealsresume-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[FinalizedDeal](#schemafinalizeddeal)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/authorized-buyers-marketplace ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/authorized-buyers-marketplace )
</aside>

## authorizedbuyersmarketplace.buyers.auctionPackages.subscribe

<a id="opIdauthorizedbuyersmarketplace.buyers.auctionPackages.subscribe"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:subscribe \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v1/{name}:subscribe`

Subscribe to the auction package for the specified buyer. Once subscribed, the bidder will receive a call out for inventory matching the auction package targeting criteria with the auction package deal ID and the specified buyer.

> Body parameter

```json
{}
```

<h3 id="authorizedbuyersmarketplacebuyersauctionpackagessubscribe-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. Name of the auction package. Format: `buyers/{accountId}/auctionPackages/{auctionPackageId}`|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[SubscribeAuctionPackageRequest](#schemasubscribeauctionpackagerequest)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "createTime": "string",
  "creator": "string",
  "description": "string",
  "displayName": "string",
  "name": "string",
  "subscribedClients": [
    "string"
  ],
  "updateTime": "string"
}
```

<h3 id="authorizedbuyersmarketplacebuyersauctionpackagessubscribe-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[AuctionPackage](#schemaauctionpackage)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/authorized-buyers-marketplace ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/authorized-buyers-marketplace )
</aside>

## authorizedbuyersmarketplace.buyers.auctionPackages.unsubscribe

<a id="opIdauthorizedbuyersmarketplace.buyers.auctionPackages.unsubscribe"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:unsubscribe \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v1/{name}:unsubscribe`

Unsubscribe from the auction package for the specified buyer. Once unsubscribed, the bidder will no longer receive a call out for the auction package deal ID and the specified buyer.

> Body parameter

```json
{}
```

<h3 id="authorizedbuyersmarketplacebuyersauctionpackagesunsubscribe-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. Name of the auction package. Format: `buyers/{accountId}/auctionPackages/{auctionPackageId}`|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[UnsubscribeAuctionPackageRequest](#schemaunsubscribeauctionpackagerequest)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "createTime": "string",
  "creator": "string",
  "description": "string",
  "displayName": "string",
  "name": "string",
  "subscribedClients": [
    "string"
  ],
  "updateTime": "string"
}
```

<h3 id="authorizedbuyersmarketplacebuyersauctionpackagesunsubscribe-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[AuctionPackage](#schemaauctionpackage)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/authorized-buyers-marketplace ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/authorized-buyers-marketplace )
</aside>

## authorizedbuyersmarketplace.buyers.auctionPackages.list

<a id="opIdauthorizedbuyersmarketplace.buyers.auctionPackages.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/auctionPackages \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/auctionPackages`

List the auction packages subscribed by a buyer and its clients.

<h3 id="authorizedbuyersmarketplacebuyersauctionpackageslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Name of the parent buyer that can access the auction package. Format: `buyers/{accountId}`|
|pageSize|query|integer|false|Requested page size. The server may return fewer results than requested. Max allowed page size is 500.|
|pageToken|query|string|false|The page token as returned. ListAuctionPackagesResponse.nextPageToken|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "auctionPackages": [
    {
      "createTime": "string",
      "creator": "string",
      "description": "string",
      "displayName": "string",
      "name": "string",
      "subscribedClients": [
        "string"
      ],
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="authorizedbuyersmarketplacebuyersauctionpackageslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListAuctionPackagesResponse](#schemalistauctionpackagesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/authorized-buyers-marketplace ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/authorized-buyers-marketplace )
</aside>

## authorizedbuyersmarketplace.buyers.clients.list

<a id="opIdauthorizedbuyersmarketplace.buyers.clients.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/clients \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/clients`

Lists all the clients for the current buyer.

<h3 id="authorizedbuyersmarketplacebuyersclientslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The name of the buyer. Format: `buyers/{accountId}`|
|filter|query|string|false|Query string using the [Filtering Syntax](https://developers.google.com/authorized-buyers/apis/guides/v2/list-filters) Supported fields for filtering are: * partnerClientId Use this field to filter the clients by the partnerClientId. For example, if the partnerClientId of the client is "1234", the value of this field should be `partnerClientId = "1234"`, in order to get only the client whose partnerClientId is "1234" in the response.|
|pageSize|query|integer|false|Requested page size. If left blank, a default page size of 500 will be applied.|
|pageToken|query|string|false|A token identifying a page of results the server should return. Typically, this is the value of ListClientsResponse.nextPageToken returned from the previous call to the list method.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "clients": [
    {
      "displayName": "string",
      "name": "string",
      "partnerClientId": "string",
      "role": "CLIENT_ROLE_UNSPECIFIED",
      "sellerVisible": true,
      "state": "STATE_UNSPECIFIED"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="authorizedbuyersmarketplacebuyersclientslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListClientsResponse](#schemalistclientsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/authorized-buyers-marketplace ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/authorized-buyers-marketplace )
</aside>

## authorizedbuyersmarketplace.buyers.clients.create

<a id="opIdauthorizedbuyersmarketplace.buyers.clients.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/clients \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "displayName": "string",
    "partnerClientId": "string",
    "role": "CLIENT_ROLE_UNSPECIFIED",
    "sellerVisible": true
  }'
```

`POST /v1/{parent}/clients`

Creates a new client.

> Body parameter

```json
{
  "displayName": "string",
  "partnerClientId": "string",
  "role": "CLIENT_ROLE_UNSPECIFIED",
  "sellerVisible": true
}
```

<h3 id="authorizedbuyersmarketplacebuyersclientscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The name of the buyer. Format: `buyers/{accountId}`|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[Client](#schemaclient)|false|none|
|» displayName|body|string|false|Required. Display name shown to publishers. Must be unique for clients without partnerClientId specified. Maximum length of 255 characters is allowed.|
|» partnerClientId|body|string|false|Arbitrary unique identifier provided by the buyer. This field can be used to associate a client with an identifier in the namespace of the buyer, lookup clients by that identifier and verify whether an Authorized Buyers account of the client already exists. If present, must be unique across all the clients.|
|» role|body|string|false|Required. The role assigned to the client. Each role implies a set of permissions granted to the client.|
|» sellerVisible|body|boolean|false|Whether the client will be visible to sellers.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» role|CLIENT_ROLE_UNSPECIFIED|
|» role|CLIENT_DEAL_VIEWER|
|» role|CLIENT_DEAL_NEGOTIATOR|
|» role|CLIENT_DEAL_APPROVER|

> Example responses

> 200 Response

```json
{
  "displayName": "string",
  "name": "string",
  "partnerClientId": "string",
  "role": "CLIENT_ROLE_UNSPECIFIED",
  "sellerVisible": true,
  "state": "STATE_UNSPECIFIED"
}
```

<h3 id="authorizedbuyersmarketplacebuyersclientscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Client](#schemaclient)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/authorized-buyers-marketplace ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/authorized-buyers-marketplace )
</aside>

## authorizedbuyersmarketplace.buyers.proposals.deals.list

<a id="opIdauthorizedbuyersmarketplace.buyers.proposals.deals.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/deals \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/deals`

Lists all deals in a proposal. To retrieve only the finalized revision deals regardless if a deal is being renegotiated, see the FinalizedDeals resource.

<h3 id="authorizedbuyersmarketplacebuyersproposalsdealslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The name of the proposal containing the deals to retrieve. Format: buyers/{accountId}/proposals/{proposalId}|
|pageSize|query|integer|false|Requested page size. The server may return fewer results than requested. If requested more than 500, the server will return 500 results per page. If unspecified, the server will pick a default page size of 100.|
|pageToken|query|string|false|The page token as returned from ListDealsResponse.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "deals": [
    {
      "billedBuyer": "string",
      "buyer": "string",
      "client": "string",
      "createTime": "string",
      "creativeRequirements": {
        "creativeFormat": "CREATIVE_FORMAT_UNSPECIFIED",
        "creativePreApprovalPolicy": "CREATIVE_PRE_APPROVAL_POLICY_UNSPECIFIED",
        "creativeSafeFrameCompatibility": "CREATIVE_SAFE_FRAME_COMPATIBILITY_UNSPECIFIED",
        "maxAdDurationMs": "string",
        "programmaticCreativeSource": "PROGRAMMATIC_CREATIVE_SOURCE_UNSPECIFIED",
        "skippableAdType": "SKIPPABLE_AD_TYPE_UNSPECIFIED"
      },
      "dealType": "DEAL_TYPE_UNSPECIFIED",
      "deliveryControl": {
        "companionDeliveryType": "COMPANION_DELIVERY_TYPE_UNSPECIFIED",
        "creativeRotationType": "CREATIVE_ROTATION_TYPE_UNSPECIFIED",
        "deliveryRateType": "DELIVERY_RATE_TYPE_UNSPECIFIED",
        "frequencyCap": [
          {
            "maxImpressions": 0,
            "timeUnitType": "TIME_UNIT_TYPE_UNSPECIFIED",
            "timeUnitsCount": 0
          }
        ],
        "roadblockingType": "ROADBLOCKING_TYPE_UNSPECIFIED"
      },
      "description": "string",
      "displayName": "string",
      "estimatedGrossSpend": {
        "currencyCode": "string",
        "nanos": 0,
        "units": "string"
      },
      "flightEndTime": "string",
      "flightStartTime": "string",
      "name": "string",
      "preferredDealTerms": {
        "fixedPrice": {
          "amount": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          },
          "type": "TYPE_UNSPECIFIED"
        }
      },
      "privateAuctionTerms": {
        "floorPrice": {
          "amount": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          },
          "type": "TYPE_UNSPECIFIED"
        },
        "openAuctionAllowed": true
      },
      "programmaticGuaranteedTerms": {
        "fixedPrice": {
          "amount": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          },
          "type": "TYPE_UNSPECIFIED"
        },
        "guaranteedLooks": "string",
        "impressionCap": "string",
        "minimumDailyLooks": "string",
        "percentShareOfVoice": "string",
        "reservationType": "RESERVATION_TYPE_UNSPECIFIED"
      },
      "proposalRevision": "string",
      "publisherProfile": "string",
      "sellerTimeZone": {
        "id": "string",
        "version": "string"
      },
      "targeting": {
        "daypartTargeting": {
          "dayParts": [
            {
              "dayOfWeek": "DAY_OF_WEEK_UNSPECIFIED",
              "endTime": {
                "hours": 0,
                "minutes": 0,
                "nanos": 0,
                "seconds": 0
              },
              "startTime": {
                "hours": 0,
                "minutes": 0,
                "nanos": 0,
                "seconds": 0
              }
            }
          ],
          "timeZoneType": "TIME_ZONE_TYPE_UNSPECIFIED"
        },
        "geoTargeting": {
          "excludedCriteriaIds": [
            "string"
          ],
          "targetedCriteriaIds": [
            "string"
          ]
        },
        "inventorySizeTargeting": {
          "excludedInventorySizes": [
            {
              "height": "string",
              "type": "TYPE_UNSPECIFIED",
              "width": "string"
            }
          ],
          "targetedInventorySizes": [
            {
              "height": "string",
              "type": "TYPE_UNSPECIFIED",
              "width": "string"
            }
          ]
        },
        "inventoryTypeTargeting": {
          "inventoryTypes": [
            "INVENTORY_TYPE_UNSPECIFIED"
          ]
        },
        "placementTargeting": {
          "mobileApplicationTargeting": {
            "firstPartyTargeting": {
              "excludedAppIds": [
                "string"
              ],
              "targetedAppIds": [
                "string"
              ]
            }
          },
          "uriTargeting": {
            "excludedUris": [
              "string"
            ],
            "targetedUris": [
              "string"
            ]
          }
        },
        "technologyTargeting": {
          "deviceCapabilityTargeting": {
            "excludedCriteriaIds": [
              "string"
            ],
            "targetedCriteriaIds": [
              "string"
            ]
          },
          "deviceCategoryTargeting": {
            "excludedCriteriaIds": [
              "string"
            ],
            "targetedCriteriaIds": [
              "string"
            ]
          },
          "operatingSystemTargeting": {
            "operatingSystemCriteria": {
              "excludedCriteriaIds": [
                "string"
              ],
              "targetedCriteriaIds": [
                "string"
              ]
            },
            "operatingSystemVersionCriteria": {
              "excludedCriteriaIds": [
                "string"
              ],
              "targetedCriteriaIds": [
                "string"
              ]
            }
          }
        },
        "userListTargeting": {
          "excludedCriteriaIds": [
            "string"
          ],
          "targetedCriteriaIds": [
            "string"
          ]
        },
        "videoTargeting": {
          "excludedPositionTypes": [
            "POSITION_TYPE_UNSPECIFIED"
          ],
          "targetedPositionTypes": [
            "POSITION_TYPE_UNSPECIFIED"
          ]
        }
      },
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="authorizedbuyersmarketplacebuyersproposalsdealslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListDealsResponse](#schemalistdealsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/authorized-buyers-marketplace ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/authorized-buyers-marketplace )
</aside>

## authorizedbuyersmarketplace.buyers.proposals.deals.batchUpdate

<a id="opIdauthorizedbuyersmarketplace.buyers.proposals.deals.batchUpdate"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/deals:batchUpdate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "requests": [
      {
        "deal": {
          "estimatedGrossSpend": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          },
          "flightEndTime": "string",
          "flightStartTime": "string",
          "name": "string",
          "preferredDealTerms": {
            "fixedPrice": {
              "amount": {
                "currencyCode": "string",
                "nanos": 0,
                "units": "string"
              },
              "type": "TYPE_UNSPECIFIED"
            }
          },
          "privateAuctionTerms": {
            "floorPrice": {
              "amount": {
                "currencyCode": "string",
                "nanos": 0,
                "units": "string"
              },
              "type": "TYPE_UNSPECIFIED"
            }
          },
          "programmaticGuaranteedTerms": {
            "fixedPrice": {
              "amount": {
                "currencyCode": "string",
                "nanos": 0,
                "units": "string"
              },
              "type": "TYPE_UNSPECIFIED"
            },
            "guaranteedLooks": "string",
            "impressionCap": "string",
            "minimumDailyLooks": "string",
            "percentShareOfVoice": "string",
            "reservationType": "RESERVATION_TYPE_UNSPECIFIED"
          },
          "publisherProfile": "string",
          "targeting": {
            "daypartTargeting": {
              "dayParts": [
                {
                  "dayOfWeek": "DAY_OF_WEEK_UNSPECIFIED",
                  "endTime": {
                    "hours": 0,
                    "minutes": 0,
                    "nanos": 0,
                    "seconds": 0
                  },
                  "startTime": {
                    "hours": 0,
                    "minutes": 0,
                    "nanos": 0,
                    "seconds": 0
                  }
                }
              ],
              "timeZoneType": "TIME_ZONE_TYPE_UNSPECIFIED"
            },
            "userListTargeting": {
              "excludedCriteriaIds": [
                "string"
              ],
              "targetedCriteriaIds": [
                "string"
              ]
            }
          }
        },
        "updateMask": "string"
      }
    ]
  }'
```

`POST /v1/{parent}/deals:batchUpdate`

Batch updates multiple deals in the same proposal.

> Body parameter

```json
{
  "requests": [
    {
      "deal": {
        "estimatedGrossSpend": {
          "currencyCode": "string",
          "nanos": 0,
          "units": "string"
        },
        "flightEndTime": "string",
        "flightStartTime": "string",
        "name": "string",
        "preferredDealTerms": {
          "fixedPrice": {
            "amount": {
              "currencyCode": "string",
              "nanos": 0,
              "units": "string"
            },
            "type": "TYPE_UNSPECIFIED"
          }
        },
        "privateAuctionTerms": {
          "floorPrice": {
            "amount": {
              "currencyCode": "string",
              "nanos": 0,
              "units": "string"
            },
            "type": "TYPE_UNSPECIFIED"
          }
        },
        "programmaticGuaranteedTerms": {
          "fixedPrice": {
            "amount": {
              "currencyCode": "string",
              "nanos": 0,
              "units": "string"
            },
            "type": "TYPE_UNSPECIFIED"
          },
          "guaranteedLooks": "string",
          "impressionCap": "string",
          "minimumDailyLooks": "string",
          "percentShareOfVoice": "string",
          "reservationType": "RESERVATION_TYPE_UNSPECIFIED"
        },
        "publisherProfile": "string",
        "targeting": {
          "daypartTargeting": {
            "dayParts": [
              {
                "dayOfWeek": "DAY_OF_WEEK_UNSPECIFIED",
                "endTime": {
                  "hours": 0,
                  "minutes": 0,
                  "nanos": 0,
                  "seconds": 0
                },
                "startTime": {
                  "hours": 0,
                  "minutes": 0,
                  "nanos": 0,
                  "seconds": 0
                }
              }
            ],
            "timeZoneType": "TIME_ZONE_TYPE_UNSPECIFIED"
          },
          "userListTargeting": {
            "excludedCriteriaIds": [
              "string"
            ],
            "targetedCriteriaIds": [
              "string"
            ]
          }
        }
      },
      "updateMask": "string"
    }
  ]
}
```

<h3 id="authorizedbuyersmarketplacebuyersproposalsdealsbatchupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The name of the proposal containing the deals to batch update. Format: buyers/{accountId}/proposals/{proposalId}|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[BatchUpdateDealsRequest](#schemabatchupdatedealsrequest)|false|none|
|» requests|body|[[UpdateDealRequest](#schemaupdatedealrequest)]|false|Required. List of request messages to update deals.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "deals": [
    {
      "billedBuyer": "string",
      "buyer": "string",
      "client": "string",
      "createTime": "string",
      "creativeRequirements": {
        "creativeFormat": "CREATIVE_FORMAT_UNSPECIFIED",
        "creativePreApprovalPolicy": "CREATIVE_PRE_APPROVAL_POLICY_UNSPECIFIED",
        "creativeSafeFrameCompatibility": "CREATIVE_SAFE_FRAME_COMPATIBILITY_UNSPECIFIED",
        "maxAdDurationMs": "string",
        "programmaticCreativeSource": "PROGRAMMATIC_CREATIVE_SOURCE_UNSPECIFIED",
        "skippableAdType": "SKIPPABLE_AD_TYPE_UNSPECIFIED"
      },
      "dealType": "DEAL_TYPE_UNSPECIFIED",
      "deliveryControl": {
        "companionDeliveryType": "COMPANION_DELIVERY_TYPE_UNSPECIFIED",
        "creativeRotationType": "CREATIVE_ROTATION_TYPE_UNSPECIFIED",
        "deliveryRateType": "DELIVERY_RATE_TYPE_UNSPECIFIED",
        "frequencyCap": [
          {
            "maxImpressions": 0,
            "timeUnitType": "TIME_UNIT_TYPE_UNSPECIFIED",
            "timeUnitsCount": 0
          }
        ],
        "roadblockingType": "ROADBLOCKING_TYPE_UNSPECIFIED"
      },
      "description": "string",
      "displayName": "string",
      "estimatedGrossSpend": {
        "currencyCode": "string",
        "nanos": 0,
        "units": "string"
      },
      "flightEndTime": "string",
      "flightStartTime": "string",
      "name": "string",
      "preferredDealTerms": {
        "fixedPrice": {
          "amount": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          },
          "type": "TYPE_UNSPECIFIED"
        }
      },
      "privateAuctionTerms": {
        "floorPrice": {
          "amount": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          },
          "type": "TYPE_UNSPECIFIED"
        },
        "openAuctionAllowed": true
      },
      "programmaticGuaranteedTerms": {
        "fixedPrice": {
          "amount": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          },
          "type": "TYPE_UNSPECIFIED"
        },
        "guaranteedLooks": "string",
        "impressionCap": "string",
        "minimumDailyLooks": "string",
        "percentShareOfVoice": "string",
        "reservationType": "RESERVATION_TYPE_UNSPECIFIED"
      },
      "proposalRevision": "string",
      "publisherProfile": "string",
      "sellerTimeZone": {
        "id": "string",
        "version": "string"
      },
      "targeting": {
        "daypartTargeting": {
          "dayParts": [
            {
              "dayOfWeek": "DAY_OF_WEEK_UNSPECIFIED",
              "endTime": {
                "hours": 0,
                "minutes": 0,
                "nanos": 0,
                "seconds": 0
              },
              "startTime": {
                "hours": 0,
                "minutes": 0,
                "nanos": 0,
                "seconds": 0
              }
            }
          ],
          "timeZoneType": "TIME_ZONE_TYPE_UNSPECIFIED"
        },
        "geoTargeting": {
          "excludedCriteriaIds": [
            "string"
          ],
          "targetedCriteriaIds": [
            "string"
          ]
        },
        "inventorySizeTargeting": {
          "excludedInventorySizes": [
            {
              "height": "string",
              "type": "TYPE_UNSPECIFIED",
              "width": "string"
            }
          ],
          "targetedInventorySizes": [
            {
              "height": "string",
              "type": "TYPE_UNSPECIFIED",
              "width": "string"
            }
          ]
        },
        "inventoryTypeTargeting": {
          "inventoryTypes": [
            "INVENTORY_TYPE_UNSPECIFIED"
          ]
        },
        "placementTargeting": {
          "mobileApplicationTargeting": {
            "firstPartyTargeting": {
              "excludedAppIds": [
                "string"
              ],
              "targetedAppIds": [
                "string"
              ]
            }
          },
          "uriTargeting": {
            "excludedUris": [
              "string"
            ],
            "targetedUris": [
              "string"
            ]
          }
        },
        "technologyTargeting": {
          "deviceCapabilityTargeting": {
            "excludedCriteriaIds": [
              "string"
            ],
            "targetedCriteriaIds": [
              "string"
            ]
          },
          "deviceCategoryTargeting": {
            "excludedCriteriaIds": [
              "string"
            ],
            "targetedCriteriaIds": [
              "string"
            ]
          },
          "operatingSystemTargeting": {
            "operatingSystemCriteria": {
              "excludedCriteriaIds": [
                "string"
              ],
              "targetedCriteriaIds": [
                "string"
              ]
            },
            "operatingSystemVersionCriteria": {
              "excludedCriteriaIds": [
                "string"
              ],
              "targetedCriteriaIds": [
                "string"
              ]
            }
          }
        },
        "userListTargeting": {
          "excludedCriteriaIds": [
            "string"
          ],
          "targetedCriteriaIds": [
            "string"
          ]
        },
        "videoTargeting": {
          "excludedPositionTypes": [
            "POSITION_TYPE_UNSPECIFIED"
          ],
          "targetedPositionTypes": [
            "POSITION_TYPE_UNSPECIFIED"
          ]
        }
      },
      "updateTime": "string"
    }
  ]
}
```

<h3 id="authorizedbuyersmarketplacebuyersproposalsdealsbatchupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[BatchUpdateDealsResponse](#schemabatchupdatedealsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/authorized-buyers-marketplace ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/authorized-buyers-marketplace )
</aside>

## authorizedbuyersmarketplace.buyers.finalizedDeals.list

<a id="opIdauthorizedbuyersmarketplace.buyers.finalizedDeals.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/finalizedDeals \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/finalizedDeals`

Lists finalized deals. Use the URL path "/v1/buyers/{accountId}/finalizedDeals" to list finalized deals for the current buyer and its clients. Bidders can use the URL path "/v1/bidders/{accountId}/finalizedDeals" to list finalized deals for the bidder, its buyers and all their clients.

<h3 id="authorizedbuyersmarketplacebuyersfinalizeddealslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The buyer to list the finalized deals for, in the format: `buyers/{accountId}`. When used to list finalized deals for a bidder, its buyers and clients, in the format `bidders/{accountId}`.|
|filter|query|string|false|Optional query string using the [Cloud API list filtering syntax](https://developers.google.com/authorized-buyers/apis/guides/v2/list-filters) Supported columns for filtering are: * deal.displayName * deal.dealType * deal.createTime * deal.updateTime * deal.flightStartTime * deal.flightEndTime * dealServingStatus|
|orderBy|query|string|false|An optional query string to sort finalized deals using the [Cloud API sorting syntax](https://cloud.google.com/apis/design/design_patterns#sorting_order). If no sort order is specified, results will be returned in an arbitrary order. Supported columns for sorting are: * deal.displayName * deal.createTime * deal.updateTime * deal.flightStartTime * deal.flightEndTime * rtbMetrics.bidRequests7Days * rtbMetrics.bids7Days * rtbMetrics.adImpressions7Days * rtbMetrics.bidRate7Days * rtbMetrics.filteredBidRate7Days * rtbMetrics.mustBidRateCurrentMonth Example: 'deal.displayName, deal.updateTime desc'|
|pageSize|query|integer|false|Requested page size. The server may return fewer results than requested. If requested more than 500, the server will return 500 results per page. If unspecified, the server will pick a default page size of 100.|
|pageToken|query|string|false|The page token as returned from ListFinalizedDealsResponse.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "finalizedDeals": [
    {
      "deal": {
        "billedBuyer": "string",
        "buyer": "string",
        "client": "string",
        "createTime": "string",
        "creativeRequirements": {
          "creativeFormat": "CREATIVE_FORMAT_UNSPECIFIED",
          "creativePreApprovalPolicy": "CREATIVE_PRE_APPROVAL_POLICY_UNSPECIFIED",
          "creativeSafeFrameCompatibility": "CREATIVE_SAFE_FRAME_COMPATIBILITY_UNSPECIFIED",
          "maxAdDurationMs": "string",
          "programmaticCreativeSource": "PROGRAMMATIC_CREATIVE_SOURCE_UNSPECIFIED",
          "skippableAdType": "SKIPPABLE_AD_TYPE_UNSPECIFIED"
        },
        "dealType": "DEAL_TYPE_UNSPECIFIED",
        "deliveryControl": {
          "companionDeliveryType": "COMPANION_DELIVERY_TYPE_UNSPECIFIED",
          "creativeRotationType": "CREATIVE_ROTATION_TYPE_UNSPECIFIED",
          "deliveryRateType": "DELIVERY_RATE_TYPE_UNSPECIFIED",
          "frequencyCap": [
            {
              "maxImpressions": 0,
              "timeUnitType": "TIME_UNIT_TYPE_UNSPECIFIED",
              "timeUnitsCount": 0
            }
          ],
          "roadblockingType": "ROADBLOCKING_TYPE_UNSPECIFIED"
        },
        "description": "string",
        "displayName": "string",
        "estimatedGrossSpend": {
          "currencyCode": "string",
          "nanos": 0,
          "units": "string"
        },
        "flightEndTime": "string",
        "flightStartTime": "string",
        "name": "string",
        "preferredDealTerms": {
          "fixedPrice": {
            "amount": {
              "currencyCode": "string",
              "nanos": 0,
              "units": "string"
            },
            "type": "TYPE_UNSPECIFIED"
          }
        },
        "privateAuctionTerms": {
          "floorPrice": {
            "amount": {
              "currencyCode": "string",
              "nanos": 0,
              "units": "string"
            },
            "type": "TYPE_UNSPECIFIED"
          },
          "openAuctionAllowed": true
        },
        "programmaticGuaranteedTerms": {
          "fixedPrice": {
            "amount": {
              "currencyCode": "string",
              "nanos": 0,
              "units": "string"
            },
            "type": "TYPE_UNSPECIFIED"
          },
          "guaranteedLooks": "string",
          "impressionCap": "string",
          "minimumDailyLooks": "string",
          "percentShareOfVoice": "string",
          "reservationType": "RESERVATION_TYPE_UNSPECIFIED"
        },
        "proposalRevision": "string",
        "publisherProfile": "string",
        "sellerTimeZone": {
          "id": "string",
          "version": "string"
        },
        "targeting": {
          "daypartTargeting": {
            "dayParts": [
              {
                "dayOfWeek": "DAY_OF_WEEK_UNSPECIFIED",
                "endTime": {
                  "hours": 0,
                  "minutes": 0,
                  "nanos": 0,
                  "seconds": 0
                },
                "startTime": {
                  "hours": 0,
                  "minutes": 0,
                  "nanos": 0,
                  "seconds": 0
                }
              }
            ],
            "timeZoneType": "TIME_ZONE_TYPE_UNSPECIFIED"
          },
          "geoTargeting": {
            "excludedCriteriaIds": [
              "string"
            ],
            "targetedCriteriaIds": [
              "string"
            ]
          },
          "inventorySizeTargeting": {
            "excludedInventorySizes": [
              {
                "height": "string",
                "type": "TYPE_UNSPECIFIED",
                "width": "string"
              }
            ],
            "targetedInventorySizes": [
              {
                "height": "string",
                "type": "TYPE_UNSPECIFIED",
                "width": "string"
              }
            ]
          },
          "inventoryTypeTargeting": {
            "inventoryTypes": [
              "INVENTORY_TYPE_UNSPECIFIED"
            ]
          },
          "placementTargeting": {
            "mobileApplicationTargeting": {
              "firstPartyTargeting": {
                "excludedAppIds": [
                  "string"
                ],
                "targetedAppIds": [
                  "string"
                ]
              }
            },
            "uriTargeting": {
              "excludedUris": [
                "string"
              ],
              "targetedUris": [
                "string"
              ]
            }
          },
          "technologyTargeting": {
            "deviceCapabilityTargeting": {
              "excludedCriteriaIds": [
                "string"
              ],
              "targetedCriteriaIds": [
                "string"
              ]
            },
            "deviceCategoryTargeting": {
              "excludedCriteriaIds": [
                "string"
              ],
              "targetedCriteriaIds": [
                "string"
              ]
            },
            "operatingSystemTargeting": {
              "operatingSystemCriteria": {
                "excludedCriteriaIds": [
                  "string"
                ],
                "targetedCriteriaIds": [
                  "string"
                ]
              },
              "operatingSystemVersionCriteria": {
                "excludedCriteriaIds": [
                  "string"
                ],
                "targetedCriteriaIds": [
                  "string"
                ]
              }
            }
          },
          "userListTargeting": {
            "excludedCriteriaIds": [
              "string"
            ],
            "targetedCriteriaIds": [
              "string"
            ]
          },
          "videoTargeting": {
            "excludedPositionTypes": [
              "POSITION_TYPE_UNSPECIFIED"
            ],
            "targetedPositionTypes": [
              "POSITION_TYPE_UNSPECIFIED"
            ]
          }
        },
        "updateTime": "string"
      },
      "dealPausingInfo": {
        "pauseReason": "string",
        "pauseRole": "BUYER_SELLER_ROLE_UNSPECIFIED",
        "pausingConsented": true
      },
      "dealServingStatus": "DEAL_SERVING_STATUS_UNSPECIFIED",
      "name": "string",
      "readyToServe": true,
      "rtbMetrics": {
        "adImpressions7Days": "string",
        "bidRate7Days": 0,
        "bidRequests7Days": "string",
        "bids7Days": "string",
        "filteredBidRate7Days": 0,
        "mustBidRateCurrentMonth": 0
      }
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="authorizedbuyersmarketplacebuyersfinalizeddealslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListFinalizedDealsResponse](#schemalistfinalizeddealsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/authorized-buyers-marketplace ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/authorized-buyers-marketplace )
</aside>

## authorizedbuyersmarketplace.buyers.proposals.list

<a id="opIdauthorizedbuyersmarketplace.buyers.proposals.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/proposals \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/proposals`

Lists proposals. A filter expression (list filter syntax) may be specified to filter the results. This will not list finalized versions of proposals that are being renegotiated; to retrieve these use the finalizedProposals resource.

<h3 id="authorizedbuyersmarketplacebuyersproposalslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Parent that owns the collection of proposals Format: `buyers/{accountId}`|
|filter|query|string|false|Optional query string using the [Cloud API list filtering syntax](https://developers.google.com/authorized-buyers/apis/guides/v2/list-filters) Supported columns for filtering are: * displayName * dealType * updateTime * state|
|pageSize|query|integer|false|Requested page size. The server may return fewer results than requested. If unspecified, the server will put a size of 500.|
|pageToken|query|string|false|The page token as returned from ListProposalsResponse.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "nextPageToken": "string",
  "proposals": [
    {
      "billedBuyer": "string",
      "buyer": "string",
      "buyerContacts": [
        {
          "displayName": "string",
          "email": "string"
        }
      ],
      "buyerPrivateData": {
        "referenceId": "string"
      },
      "client": "string",
      "dealType": "DEAL_TYPE_UNSPECIFIED",
      "displayName": "string",
      "isRenegotiating": true,
      "lastUpdaterOrCommentorRole": "BUYER_SELLER_ROLE_UNSPECIFIED",
      "name": "string",
      "notes": [
        {
          "createTime": "string",
          "creatorRole": "BUYER_SELLER_ROLE_UNSPECIFIED",
          "note": "string"
        }
      ],
      "originatorRole": "BUYER_SELLER_ROLE_UNSPECIFIED",
      "pausingConsented": true,
      "proposalRevision": "string",
      "publisherProfile": "string",
      "sellerContacts": [
        {
          "displayName": "string",
          "email": "string"
        }
      ],
      "state": "STATE_UNSPECIFIED",
      "termsAndConditions": "string",
      "updateTime": "string"
    }
  ]
}
```

<h3 id="authorizedbuyersmarketplacebuyersproposalslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListProposalsResponse](#schemalistproposalsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/authorized-buyers-marketplace ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/authorized-buyers-marketplace )
</aside>

## authorizedbuyersmarketplace.buyers.publisherProfiles.list

<a id="opIdauthorizedbuyersmarketplace.buyers.publisherProfiles.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/publisherProfiles \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/publisherProfiles`

Lists publisher profiles. The returned publisher profiles aren't in any defined order. The order of the results might change. A new publisher profile can appear in any place in the list of returned results.

<h3 id="authorizedbuyersmarketplacebuyerspublisherprofileslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Parent that owns the collection of publisher profiles Format: `buyers/{buyerId}`|
|filter|query|string|false|Optional query string using the [Cloud API list filtering] (https://developers.google.com/authorized-buyers/apis/guides/v2/list-filters) syntax.|
|pageSize|query|integer|false|Requested page size. The server may return fewer results than requested. If requested more than 500, the server will return 500 results per page. If unspecified, the server will pick a default page size of 100.|
|pageToken|query|string|false|The page token as returned from a previous ListPublisherProfilesResponse.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "nextPageToken": "string",
  "publisherProfiles": [
    {
      "audienceDescription": "string",
      "directDealsContact": "string",
      "displayName": "string",
      "domains": [
        "string"
      ],
      "isParent": true,
      "logoUrl": "string",
      "mediaKitUrl": "string",
      "mobileApps": [
        {
          "appStore": "APP_STORE_TYPE_UNSPECIFIED",
          "externalAppId": "string",
          "name": "string"
        }
      ],
      "name": "string",
      "overview": "string",
      "pitchStatement": "string",
      "programmaticDealsContact": "string",
      "publisherCode": "string",
      "samplePageUrl": "string",
      "topHeadlines": [
        "string"
      ]
    }
  ]
}
```

<h3 id="authorizedbuyersmarketplacebuyerspublisherprofileslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListPublisherProfilesResponse](#schemalistpublisherprofilesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/authorized-buyers-marketplace ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/authorized-buyers-marketplace )
</aside>

## authorizedbuyersmarketplace.buyers.clients.users.list

<a id="opIdauthorizedbuyersmarketplace.buyers.clients.users.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/users \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/users`

Lists all client users for a specified client.

<h3 id="authorizedbuyersmarketplacebuyersclientsuserslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The name of the client. Format: `buyers/{buyerAccountId}/clients/{clientAccountId}`|
|pageSize|query|integer|false|Requested page size. If left blank, a default page size of 500 will be applied.|
|pageToken|query|string|false|A token identifying a page of results the server should return. Typically, this is the value of ListClientUsersResponse.nextPageToken returned from the previous call to the list method.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "clientUsers": [
    {
      "email": "string",
      "name": "string",
      "state": "STATE_UNSPECIFIED"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="authorizedbuyersmarketplacebuyersclientsuserslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListClientUsersResponse](#schemalistclientusersresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/authorized-buyers-marketplace ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/authorized-buyers-marketplace )
</aside>

## authorizedbuyersmarketplace.buyers.clients.users.create

<a id="opIdauthorizedbuyersmarketplace.buyers.clients.users.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/users \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "email": "string"
  }'
```

`POST /v1/{parent}/users`

Creates a new client user in "INVITED" state. An email invitation will be sent to the new user, once accepted the user will become active.

> Body parameter

```json
{
  "email": "string"
}
```

<h3 id="authorizedbuyersmarketplacebuyersclientsuserscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The name of the client. Format: `buyers/{accountId}/clients/{clientAccountId}`|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[ClientUser](#schemaclientuser)|false|none|
|» email|body|string|false|Required. The client user's email address that has to be unique across all users for the same client.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "email": "string",
  "name": "string",
  "state": "STATE_UNSPECIFIED"
}
```

<h3 id="authorizedbuyersmarketplacebuyersclientsuserscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ClientUser](#schemaclientuser)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/authorized-buyers-marketplace ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/authorized-buyers-marketplace )
</aside>

## authorizedbuyersmarketplace.buyers.proposals.addNote

<a id="opIdauthorizedbuyersmarketplace.buyers.proposals.addNote"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:addNote \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "note": {
      "note": "string"
    }
  }'
```

`POST /v1/{proposal}:addNote`

Creates a note for this proposal and sends to the seller.

> Body parameter

```json
{
  "note": {
    "note": "string"
  }
}
```

<h3 id="authorizedbuyersmarketplacebuyersproposalsaddnote-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|proposal|path|string|true|Name of the proposal. Format: `buyers/{accountId}/proposals/{proposalId}`|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[AddNoteRequest](#schemaaddnoterequest)|false|none|
|» note|body|[Note](#schemanote)|false|The note to add.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "billedBuyer": "string",
  "buyer": "string",
  "buyerContacts": [
    {
      "displayName": "string",
      "email": "string"
    }
  ],
  "buyerPrivateData": {
    "referenceId": "string"
  },
  "client": "string",
  "dealType": "DEAL_TYPE_UNSPECIFIED",
  "displayName": "string",
  "isRenegotiating": true,
  "lastUpdaterOrCommentorRole": "BUYER_SELLER_ROLE_UNSPECIFIED",
  "name": "string",
  "notes": [
    {
      "createTime": "string",
      "creatorRole": "BUYER_SELLER_ROLE_UNSPECIFIED",
      "note": "string"
    }
  ],
  "originatorRole": "BUYER_SELLER_ROLE_UNSPECIFIED",
  "pausingConsented": true,
  "proposalRevision": "string",
  "publisherProfile": "string",
  "sellerContacts": [
    {
      "displayName": "string",
      "email": "string"
    }
  ],
  "state": "STATE_UNSPECIFIED",
  "termsAndConditions": "string",
  "updateTime": "string"
}
```

<h3 id="authorizedbuyersmarketplacebuyersproposalsaddnote-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Proposal](#schemaproposal)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/authorized-buyers-marketplace ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/authorized-buyers-marketplace )
</aside>

## authorizedbuyersmarketplace.buyers.proposals.cancelNegotiation

<a id="opIdauthorizedbuyersmarketplace.buyers.proposals.cancelNegotiation"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:cancelNegotiation \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v1/{proposal}:cancelNegotiation`

Cancels an ongoing negotiation on a proposal. This does not cancel or end serving for the deals if the proposal has been finalized. If the proposal has not been finalized before, calling this method will set the Proposal.state to `TERMINATED` and increment the Proposal.proposal_revision. If the proposal has been finalized before and is under renegotiation now, calling this method will reset the Proposal.state to `FINALIZED` and increment the Proposal.proposal_revision. This method does not support private auction proposals whose Proposal.deal_type is 'PRIVATE_AUCTION'.

> Body parameter

```json
{}
```

<h3 id="authorizedbuyersmarketplacebuyersproposalscancelnegotiation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|proposal|path|string|true|Name of the proposal. Format: `buyers/{accountId}/proposals/{proposalId}`|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[CancelNegotiationRequest](#schemacancelnegotiationrequest)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "billedBuyer": "string",
  "buyer": "string",
  "buyerContacts": [
    {
      "displayName": "string",
      "email": "string"
    }
  ],
  "buyerPrivateData": {
    "referenceId": "string"
  },
  "client": "string",
  "dealType": "DEAL_TYPE_UNSPECIFIED",
  "displayName": "string",
  "isRenegotiating": true,
  "lastUpdaterOrCommentorRole": "BUYER_SELLER_ROLE_UNSPECIFIED",
  "name": "string",
  "notes": [
    {
      "createTime": "string",
      "creatorRole": "BUYER_SELLER_ROLE_UNSPECIFIED",
      "note": "string"
    }
  ],
  "originatorRole": "BUYER_SELLER_ROLE_UNSPECIFIED",
  "pausingConsented": true,
  "proposalRevision": "string",
  "publisherProfile": "string",
  "sellerContacts": [
    {
      "displayName": "string",
      "email": "string"
    }
  ],
  "state": "STATE_UNSPECIFIED",
  "termsAndConditions": "string",
  "updateTime": "string"
}
```

<h3 id="authorizedbuyersmarketplacebuyersproposalscancelnegotiation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Proposal](#schemaproposal)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/authorized-buyers-marketplace ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/authorized-buyers-marketplace )
</aside>

# Schemas

<h2 id="tocS_AcceptProposalRequest">AcceptProposalRequest</h2>
<!-- backwards compatibility -->
<a id="schemaacceptproposalrequest"></a>
<a id="schema_AcceptProposalRequest"></a>
<a id="tocSacceptproposalrequest"></a>
<a id="tocsacceptproposalrequest"></a>

```json
{
  "proposalRevision": "string"
}
```

Request to accept a proposal. Accepting a proposal implies acceptance of the publisher terms_and_conditions, if any.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|proposalRevision|string(int64)|false|none|The last known client revision number of the proposal.|

<h2 id="tocS_ActivateClientRequest">ActivateClientRequest</h2>
<!-- backwards compatibility -->
<a id="schemaactivateclientrequest"></a>
<a id="schema_ActivateClientRequest"></a>
<a id="tocSactivateclientrequest"></a>
<a id="tocsactivateclientrequest"></a>

```json
{}
```

Request message for activating a client.

<h2 id="tocS_ActivateClientUserRequest">ActivateClientUserRequest</h2>
<!-- backwards compatibility -->
<a id="schemaactivateclientuserrequest"></a>
<a id="schema_ActivateClientUserRequest"></a>
<a id="tocSactivateclientuserrequest"></a>
<a id="tocsactivateclientuserrequest"></a>

```json
{}
```

Request message for activating a client user.

<h2 id="tocS_AdSize">AdSize</h2>
<!-- backwards compatibility -->
<a id="schemaadsize"></a>
<a id="schema_AdSize"></a>
<a id="tocSadsize"></a>
<a id="tocsadsize"></a>

```json
{
  "height": "string",
  "type": "TYPE_UNSPECIFIED",
  "width": "string"
}
```

Represents size of a single ad slot, or a creative.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|height|string(int64)|false|none|The height of the ad slot in pixels. This field will be present only when size type is `PIXEL`.|
|type|string|false|none|The type of the ad slot size.|
|width|string(int64)|false|none|The width of the ad slot in pixels. This field will be present only when size type is `PIXEL`.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|TYPE_UNSPECIFIED|
|type|PIXEL|
|type|INTERSTITIAL|
|type|NATIVE|
|type|FLUID|

<h2 id="tocS_AddCreativeRequest">AddCreativeRequest</h2>
<!-- backwards compatibility -->
<a id="schemaaddcreativerequest"></a>
<a id="schema_AddCreativeRequest"></a>
<a id="tocSaddcreativerequest"></a>
<a id="tocsaddcreativerequest"></a>

```json
{
  "creative": "string"
}
```

Request message for adding creative to be used in the bidding process for the finalized deal.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|creative|string|false|none|Name of the creative to add to the finalized deal, in the format `buyers/{buyerAccountId}/creatives/{creativeId}`. See creative.name.|

<h2 id="tocS_AddNoteRequest">AddNoteRequest</h2>
<!-- backwards compatibility -->
<a id="schemaaddnoterequest"></a>
<a id="schema_AddNoteRequest"></a>
<a id="tocSaddnoterequest"></a>
<a id="tocsaddnoterequest"></a>

```json
{
  "note": {
    "createTime": "string",
    "creatorRole": "BUYER_SELLER_ROLE_UNSPECIFIED",
    "note": "string"
  }
}
```

Request to add a note.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|note|[Note](#schemanote)|false|none|The note to add.|

<h2 id="tocS_AuctionPackage">AuctionPackage</h2>
<!-- backwards compatibility -->
<a id="schemaauctionpackage"></a>
<a id="schema_AuctionPackage"></a>
<a id="tocSauctionpackage"></a>
<a id="tocsauctionpackage"></a>

```json
{
  "createTime": "string",
  "creator": "string",
  "description": "string",
  "displayName": "string",
  "name": "string",
  "subscribedClients": [
    "string"
  ],
  "updateTime": "string"
}
```

Defines a segment of inventory that buyer wants to buy. It's created by buyer and could be shared with multiple buyers.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|read-only|Output only. Time the auction package was created.|
|creator|string|false|read-only|Output only. The buyer that created this auction package. Format: `buyers/{buyerAccountId}`|
|description|string|false|read-only|Output only. A description of the auction package.|
|displayName|string|false|none|The display_name assigned to the auction package.|
|name|string|false|none|Immutable. The unique identifier for the auction package. Format: `buyers/{accountId}/auctionPackages/{auctionPackageId}` The auction_package_id part of name is sent in the BidRequest to all RTB bidders and is returned as deal_id by the bidder in the BidResponse.|
|subscribedClients|[string]|false|read-only|Output only. The list of clients of the current buyer that are subscribed to the AuctionPackage. Format: `buyers/{buyerAccountId}/clients/{clientAccountId}`|
|updateTime|string(google-datetime)|false|read-only|Output only. Time the auction package was last updated. This value is only increased when this auction package is updated but never when a buyer subscribed.|

<h2 id="tocS_BatchUpdateDealsRequest">BatchUpdateDealsRequest</h2>
<!-- backwards compatibility -->
<a id="schemabatchupdatedealsrequest"></a>
<a id="schema_BatchUpdateDealsRequest"></a>
<a id="tocSbatchupdatedealsrequest"></a>
<a id="tocsbatchupdatedealsrequest"></a>

```json
{
  "requests": [
    {
      "deal": {
        "billedBuyer": "string",
        "buyer": "string",
        "client": "string",
        "createTime": "string",
        "creativeRequirements": {
          "creativeFormat": "CREATIVE_FORMAT_UNSPECIFIED",
          "creativePreApprovalPolicy": "CREATIVE_PRE_APPROVAL_POLICY_UNSPECIFIED",
          "creativeSafeFrameCompatibility": "CREATIVE_SAFE_FRAME_COMPATIBILITY_UNSPECIFIED",
          "maxAdDurationMs": "string",
          "programmaticCreativeSource": "PROGRAMMATIC_CREATIVE_SOURCE_UNSPECIFIED",
          "skippableAdType": "SKIPPABLE_AD_TYPE_UNSPECIFIED"
        },
        "dealType": "DEAL_TYPE_UNSPECIFIED",
        "deliveryControl": {
          "companionDeliveryType": "COMPANION_DELIVERY_TYPE_UNSPECIFIED",
          "creativeRotationType": "CREATIVE_ROTATION_TYPE_UNSPECIFIED",
          "deliveryRateType": "DELIVERY_RATE_TYPE_UNSPECIFIED",
          "frequencyCap": [
            {
              "maxImpressions": 0,
              "timeUnitType": "TIME_UNIT_TYPE_UNSPECIFIED",
              "timeUnitsCount": 0
            }
          ],
          "roadblockingType": "ROADBLOCKING_TYPE_UNSPECIFIED"
        },
        "description": "string",
        "displayName": "string",
        "estimatedGrossSpend": {
          "currencyCode": "string",
          "nanos": 0,
          "units": "string"
        },
        "flightEndTime": "string",
        "flightStartTime": "string",
        "name": "string",
        "preferredDealTerms": {
          "fixedPrice": {
            "amount": {
              "currencyCode": "string",
              "nanos": 0,
              "units": "string"
            },
            "type": "TYPE_UNSPECIFIED"
          }
        },
        "privateAuctionTerms": {
          "floorPrice": {
            "amount": {
              "currencyCode": "string",
              "nanos": 0,
              "units": "string"
            },
            "type": "TYPE_UNSPECIFIED"
          },
          "openAuctionAllowed": true
        },
        "programmaticGuaranteedTerms": {
          "fixedPrice": {
            "amount": {
              "currencyCode": "string",
              "nanos": 0,
              "units": "string"
            },
            "type": "TYPE_UNSPECIFIED"
          },
          "guaranteedLooks": "string",
          "impressionCap": "string",
          "minimumDailyLooks": "string",
          "percentShareOfVoice": "string",
          "reservationType": "RESERVATION_TYPE_UNSPECIFIED"
        },
        "proposalRevision": "string",
        "publisherProfile": "string",
        "sellerTimeZone": {
          "id": "string",
          "version": "string"
        },
        "targeting": {
          "daypartTargeting": {
            "dayParts": [
              {
                "dayOfWeek": "DAY_OF_WEEK_UNSPECIFIED",
                "endTime": {
                  "hours": 0,
                  "minutes": 0,
                  "nanos": 0,
                  "seconds": 0
                },
                "startTime": {
                  "hours": 0,
                  "minutes": 0,
                  "nanos": 0,
                  "seconds": 0
                }
              }
            ],
            "timeZoneType": "TIME_ZONE_TYPE_UNSPECIFIED"
          },
          "geoTargeting": {
            "excludedCriteriaIds": [
              "string"
            ],
            "targetedCriteriaIds": [
              "string"
            ]
          },
          "inventorySizeTargeting": {
            "excludedInventorySizes": [
              {
                "height": "string",
                "type": "TYPE_UNSPECIFIED",
                "width": "string"
              }
            ],
            "targetedInventorySizes": [
              {
                "height": "string",
                "type": "TYPE_UNSPECIFIED",
                "width": "string"
              }
            ]
          },
          "inventoryTypeTargeting": {
            "inventoryTypes": [
              "INVENTORY_TYPE_UNSPECIFIED"
            ]
          },
          "placementTargeting": {
            "mobileApplicationTargeting": {
              "firstPartyTargeting": {
                "excludedAppIds": [
                  "string"
                ],
                "targetedAppIds": [
                  "string"
                ]
              }
            },
            "uriTargeting": {
              "excludedUris": [
                "string"
              ],
              "targetedUris": [
                "string"
              ]
            }
          },
          "technologyTargeting": {
            "deviceCapabilityTargeting": {
              "excludedCriteriaIds": [
                "string"
              ],
              "targetedCriteriaIds": [
                "string"
              ]
            },
            "deviceCategoryTargeting": {
              "excludedCriteriaIds": [
                "string"
              ],
              "targetedCriteriaIds": [
                "string"
              ]
            },
            "operatingSystemTargeting": {
              "operatingSystemCriteria": {
                "excludedCriteriaIds": [
                  "string"
                ],
                "targetedCriteriaIds": [
                  "string"
                ]
              },
              "operatingSystemVersionCriteria": {
                "excludedCriteriaIds": [
                  "string"
                ],
                "targetedCriteriaIds": [
                  "string"
                ]
              }
            }
          },
          "userListTargeting": {
            "excludedCriteriaIds": [
              "string"
            ],
            "targetedCriteriaIds": [
              "string"
            ]
          },
          "videoTargeting": {
            "excludedPositionTypes": [
              "POSITION_TYPE_UNSPECIFIED"
            ],
            "targetedPositionTypes": [
              "POSITION_TYPE_UNSPECIFIED"
            ]
          }
        },
        "updateTime": "string"
      },
      "updateMask": "string"
    }
  ]
}
```

Request message for batch updating deals.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requests|[[UpdateDealRequest](#schemaupdatedealrequest)]|false|none|Required. List of request messages to update deals.|

<h2 id="tocS_BatchUpdateDealsResponse">BatchUpdateDealsResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchupdatedealsresponse"></a>
<a id="schema_BatchUpdateDealsResponse"></a>
<a id="tocSbatchupdatedealsresponse"></a>
<a id="tocsbatchupdatedealsresponse"></a>

```json
{
  "deals": [
    {
      "billedBuyer": "string",
      "buyer": "string",
      "client": "string",
      "createTime": "string",
      "creativeRequirements": {
        "creativeFormat": "CREATIVE_FORMAT_UNSPECIFIED",
        "creativePreApprovalPolicy": "CREATIVE_PRE_APPROVAL_POLICY_UNSPECIFIED",
        "creativeSafeFrameCompatibility": "CREATIVE_SAFE_FRAME_COMPATIBILITY_UNSPECIFIED",
        "maxAdDurationMs": "string",
        "programmaticCreativeSource": "PROGRAMMATIC_CREATIVE_SOURCE_UNSPECIFIED",
        "skippableAdType": "SKIPPABLE_AD_TYPE_UNSPECIFIED"
      },
      "dealType": "DEAL_TYPE_UNSPECIFIED",
      "deliveryControl": {
        "companionDeliveryType": "COMPANION_DELIVERY_TYPE_UNSPECIFIED",
        "creativeRotationType": "CREATIVE_ROTATION_TYPE_UNSPECIFIED",
        "deliveryRateType": "DELIVERY_RATE_TYPE_UNSPECIFIED",
        "frequencyCap": [
          {
            "maxImpressions": 0,
            "timeUnitType": "TIME_UNIT_TYPE_UNSPECIFIED",
            "timeUnitsCount": 0
          }
        ],
        "roadblockingType": "ROADBLOCKING_TYPE_UNSPECIFIED"
      },
      "description": "string",
      "displayName": "string",
      "estimatedGrossSpend": {
        "currencyCode": "string",
        "nanos": 0,
        "units": "string"
      },
      "flightEndTime": "string",
      "flightStartTime": "string",
      "name": "string",
      "preferredDealTerms": {
        "fixedPrice": {
          "amount": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          },
          "type": "TYPE_UNSPECIFIED"
        }
      },
      "privateAuctionTerms": {
        "floorPrice": {
          "amount": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          },
          "type": "TYPE_UNSPECIFIED"
        },
        "openAuctionAllowed": true
      },
      "programmaticGuaranteedTerms": {
        "fixedPrice": {
          "amount": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          },
          "type": "TYPE_UNSPECIFIED"
        },
        "guaranteedLooks": "string",
        "impressionCap": "string",
        "minimumDailyLooks": "string",
        "percentShareOfVoice": "string",
        "reservationType": "RESERVATION_TYPE_UNSPECIFIED"
      },
      "proposalRevision": "string",
      "publisherProfile": "string",
      "sellerTimeZone": {
        "id": "string",
        "version": "string"
      },
      "targeting": {
        "daypartTargeting": {
          "dayParts": [
            {
              "dayOfWeek": "DAY_OF_WEEK_UNSPECIFIED",
              "endTime": {
                "hours": 0,
                "minutes": 0,
                "nanos": 0,
                "seconds": 0
              },
              "startTime": {
                "hours": 0,
                "minutes": 0,
                "nanos": 0,
                "seconds": 0
              }
            }
          ],
          "timeZoneType": "TIME_ZONE_TYPE_UNSPECIFIED"
        },
        "geoTargeting": {
          "excludedCriteriaIds": [
            "string"
          ],
          "targetedCriteriaIds": [
            "string"
          ]
        },
        "inventorySizeTargeting": {
          "excludedInventorySizes": [
            {
              "height": "string",
              "type": "TYPE_UNSPECIFIED",
              "width": "string"
            }
          ],
          "targetedInventorySizes": [
            {
              "height": "string",
              "type": "TYPE_UNSPECIFIED",
              "width": "string"
            }
          ]
        },
        "inventoryTypeTargeting": {
          "inventoryTypes": [
            "INVENTORY_TYPE_UNSPECIFIED"
          ]
        },
        "placementTargeting": {
          "mobileApplicationTargeting": {
            "firstPartyTargeting": {
              "excludedAppIds": [
                "string"
              ],
              "targetedAppIds": [
                "string"
              ]
            }
          },
          "uriTargeting": {
            "excludedUris": [
              "string"
            ],
            "targetedUris": [
              "string"
            ]
          }
        },
        "technologyTargeting": {
          "deviceCapabilityTargeting": {
            "excludedCriteriaIds": [
              "string"
            ],
            "targetedCriteriaIds": [
              "string"
            ]
          },
          "deviceCategoryTargeting": {
            "excludedCriteriaIds": [
              "string"
            ],
            "targetedCriteriaIds": [
              "string"
            ]
          },
          "operatingSystemTargeting": {
            "operatingSystemCriteria": {
              "excludedCriteriaIds": [
                "string"
              ],
              "targetedCriteriaIds": [
                "string"
              ]
            },
            "operatingSystemVersionCriteria": {
              "excludedCriteriaIds": [
                "string"
              ],
              "targetedCriteriaIds": [
                "string"
              ]
            }
          }
        },
        "userListTargeting": {
          "excludedCriteriaIds": [
            "string"
          ],
          "targetedCriteriaIds": [
            "string"
          ]
        },
        "videoTargeting": {
          "excludedPositionTypes": [
            "POSITION_TYPE_UNSPECIFIED"
          ],
          "targetedPositionTypes": [
            "POSITION_TYPE_UNSPECIFIED"
          ]
        }
      },
      "updateTime": "string"
    }
  ]
}
```

Response message for batch updating deals.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deals|[[Deal](#schemadeal)]|false|none|Deals updated.|

<h2 id="tocS_CancelNegotiationRequest">CancelNegotiationRequest</h2>
<!-- backwards compatibility -->
<a id="schemacancelnegotiationrequest"></a>
<a id="schema_CancelNegotiationRequest"></a>
<a id="tocScancelnegotiationrequest"></a>
<a id="tocscancelnegotiationrequest"></a>

```json
{}
```

Request to cancel an ongoing negotiation.

<h2 id="tocS_Client">Client</h2>
<!-- backwards compatibility -->
<a id="schemaclient"></a>
<a id="schema_Client"></a>
<a id="tocSclient"></a>
<a id="tocsclient"></a>

```json
{
  "displayName": "string",
  "name": "string",
  "partnerClientId": "string",
  "role": "CLIENT_ROLE_UNSPECIFIED",
  "sellerVisible": true,
  "state": "STATE_UNSPECIFIED"
}
```

A client represents an agency, a brand, or an advertiser customer of the buyer. Based on the client's role, its client users will have varying levels of restricted access to the Marketplace and certain other sections of the Authorized Buyers UI.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayName|string|false|none|Required. Display name shown to publishers. Must be unique for clients without partnerClientId specified. Maximum length of 255 characters is allowed.|
|name|string|false|read-only|Output only. The resource name of the client. Format: `buyers/{accountId}/clients/{clientAccountId}`|
|partnerClientId|string|false|none|Arbitrary unique identifier provided by the buyer. This field can be used to associate a client with an identifier in the namespace of the buyer, lookup clients by that identifier and verify whether an Authorized Buyers account of the client already exists. If present, must be unique across all the clients.|
|role|string|false|none|Required. The role assigned to the client. Each role implies a set of permissions granted to the client.|
|sellerVisible|boolean|false|none|Whether the client will be visible to sellers.|
|state|string|false|read-only|Output only. The state of the client.|

#### Enumerated Values

|Property|Value|
|---|---|
|role|CLIENT_ROLE_UNSPECIFIED|
|role|CLIENT_DEAL_VIEWER|
|role|CLIENT_DEAL_NEGOTIATOR|
|role|CLIENT_DEAL_APPROVER|
|state|STATE_UNSPECIFIED|
|state|ACTIVE|
|state|INACTIVE|

<h2 id="tocS_ClientUser">ClientUser</h2>
<!-- backwards compatibility -->
<a id="schemaclientuser"></a>
<a id="schema_ClientUser"></a>
<a id="tocSclientuser"></a>
<a id="tocsclientuser"></a>

```json
{
  "email": "string",
  "name": "string",
  "state": "STATE_UNSPECIFIED"
}
```

A user of a client who has restricted access to the Marketplace and certain other sections of the Authorized Buyers UI based on the role granted to the associated client.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|false|none|Required. The client user's email address that has to be unique across all users for the same client.|
|name|string|false|read-only|Output only. The resource name of the client user. Format: `buyers/{accountId}/clients/{clientAccountId}/users/{userId}`|
|state|string|false|read-only|Output only. The state of the client user.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|INVITED|
|state|ACTIVE|
|state|INACTIVE|

<h2 id="tocS_Contact">Contact</h2>
<!-- backwards compatibility -->
<a id="schemacontact"></a>
<a id="schema_Contact"></a>
<a id="tocScontact"></a>
<a id="tocscontact"></a>

```json
{
  "displayName": "string",
  "email": "string"
}
```

Contains information on how a buyer or seller can be reached.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayName|string|false|none|The display_name of the contact.|
|email|string|false|none|Email address for the contact.|

<h2 id="tocS_CreativeRequirements">CreativeRequirements</h2>
<!-- backwards compatibility -->
<a id="schemacreativerequirements"></a>
<a id="schema_CreativeRequirements"></a>
<a id="tocScreativerequirements"></a>
<a id="tocscreativerequirements"></a>

```json
{
  "creativeFormat": "CREATIVE_FORMAT_UNSPECIFIED",
  "creativePreApprovalPolicy": "CREATIVE_PRE_APPROVAL_POLICY_UNSPECIFIED",
  "creativeSafeFrameCompatibility": "CREATIVE_SAFE_FRAME_COMPATIBILITY_UNSPECIFIED",
  "maxAdDurationMs": "string",
  "programmaticCreativeSource": "PROGRAMMATIC_CREATIVE_SOURCE_UNSPECIFIED",
  "skippableAdType": "SKIPPABLE_AD_TYPE_UNSPECIFIED"
}
```

Message captures data about the creatives in the deal.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|creativeFormat|string|false|read-only|Output only. The format of the creative, only applicable for programmatic guaranteed and preferred deals.|
|creativePreApprovalPolicy|string|false|read-only|Output only. Specifies the creative pre-approval policy.|
|creativeSafeFrameCompatibility|string|false|read-only|Output only. Specifies whether the creative is safeFrame compatible.|
|maxAdDurationMs|string(int64)|false|read-only|Output only. The max duration of the video creative in milliseconds. only applicable for deals with video creatives.|
|programmaticCreativeSource|string|false|read-only|Output only. Specifies the creative source for programmatic deals. PUBLISHER means creative is provided by seller and ADVERTISER means creative is provided by the buyer.|
|skippableAdType|string|false|read-only|Output only. Skippable video ads allow viewers to skip ads after 5 seconds. Only applicable for deals with video creatives.|

#### Enumerated Values

|Property|Value|
|---|---|
|creativeFormat|CREATIVE_FORMAT_UNSPECIFIED|
|creativeFormat|DISPLAY|
|creativeFormat|VIDEO|
|creativePreApprovalPolicy|CREATIVE_PRE_APPROVAL_POLICY_UNSPECIFIED|
|creativePreApprovalPolicy|SELLER_PRE_APPROVAL_REQUIRED|
|creativePreApprovalPolicy|SELLER_PRE_APPROVAL_NOT_REQUIRED|
|creativeSafeFrameCompatibility|CREATIVE_SAFE_FRAME_COMPATIBILITY_UNSPECIFIED|
|creativeSafeFrameCompatibility|COMPATIBLE|
|creativeSafeFrameCompatibility|INCOMPATIBLE|
|programmaticCreativeSource|PROGRAMMATIC_CREATIVE_SOURCE_UNSPECIFIED|
|programmaticCreativeSource|ADVERTISER|
|programmaticCreativeSource|PUBLISHER|
|skippableAdType|SKIPPABLE_AD_TYPE_UNSPECIFIED|
|skippableAdType|SKIPPABLE|
|skippableAdType|INSTREAM_SELECT|
|skippableAdType|NOT_SKIPPABLE|
|skippableAdType|ANY|

<h2 id="tocS_CriteriaTargeting">CriteriaTargeting</h2>
<!-- backwards compatibility -->
<a id="schemacriteriatargeting"></a>
<a id="schema_CriteriaTargeting"></a>
<a id="tocScriteriatargeting"></a>
<a id="tocscriteriatargeting"></a>

```json
{
  "excludedCriteriaIds": [
    "string"
  ],
  "targetedCriteriaIds": [
    "string"
  ]
}
```

Generic targeting used for targeting dimensions that contains a list of included and excluded numeric IDs. This cannot be filtered using list filter syntax.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|excludedCriteriaIds|[string(int64)]|false|none|A list of numeric IDs to be excluded.|
|targetedCriteriaIds|[string(int64)]|false|none|A list of numeric IDs to be included.|

<h2 id="tocS_DayPart">DayPart</h2>
<!-- backwards compatibility -->
<a id="schemadaypart"></a>
<a id="schema_DayPart"></a>
<a id="tocSdaypart"></a>
<a id="tocsdaypart"></a>

```json
{
  "dayOfWeek": "DAY_OF_WEEK_UNSPECIFIED",
  "endTime": {
    "hours": 0,
    "minutes": 0,
    "nanos": 0,
    "seconds": 0
  },
  "startTime": {
    "hours": 0,
    "minutes": 0,
    "nanos": 0,
    "seconds": 0
  }
}
```

Defines targeting for a period of time on a specific week day.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dayOfWeek|string|false|none|Day of week for the period.|
|endTime|[TimeOfDay](#schematimeofday)|false|none|Hours in 24 hour time between 0 and 24, inclusive. Note: 24 is logically equivalent to 0, but is supported since in some cases there may need to be differentiation made between midnight on one day and midnight on the next day. Accepted values for minutes are [0, 15, 30, 45]. 0 is the only acceptable minute value for hour 24. Seconds and nanos are ignored.|
|startTime|[TimeOfDay](#schematimeofday)|false|none|Hours in 24 hour time between 0 and 24, inclusive. Note: 24 is logically equivalent to 0, but is supported since in some cases there may need to be differentiation made between midnight on one day and midnight on the next day. Accepted values for minutes are [0, 15, 30, 45]. 0 is the only acceptable minute value for hour 24. Seconds and nanos are ignored.|

#### Enumerated Values

|Property|Value|
|---|---|
|dayOfWeek|DAY_OF_WEEK_UNSPECIFIED|
|dayOfWeek|MONDAY|
|dayOfWeek|TUESDAY|
|dayOfWeek|WEDNESDAY|
|dayOfWeek|THURSDAY|
|dayOfWeek|FRIDAY|
|dayOfWeek|SATURDAY|
|dayOfWeek|SUNDAY|

<h2 id="tocS_DayPartTargeting">DayPartTargeting</h2>
<!-- backwards compatibility -->
<a id="schemadayparttargeting"></a>
<a id="schema_DayPartTargeting"></a>
<a id="tocSdayparttargeting"></a>
<a id="tocsdayparttargeting"></a>

```json
{
  "dayParts": [
    {
      "dayOfWeek": "DAY_OF_WEEK_UNSPECIFIED",
      "endTime": {
        "hours": 0,
        "minutes": 0,
        "nanos": 0,
        "seconds": 0
      },
      "startTime": {
        "hours": 0,
        "minutes": 0,
        "nanos": 0,
        "seconds": 0
      }
    }
  ],
  "timeZoneType": "TIME_ZONE_TYPE_UNSPECIFIED"
}
```

Represents Daypart targeting.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dayParts|[[DayPart](#schemadaypart)]|false|none|The targeted weekdays and times|
|timeZoneType|string|false|none|The time zone type of the day parts|

#### Enumerated Values

|Property|Value|
|---|---|
|timeZoneType|TIME_ZONE_TYPE_UNSPECIFIED|
|timeZoneType|SELLER|
|timeZoneType|USER|

<h2 id="tocS_DeactivateClientRequest">DeactivateClientRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeactivateclientrequest"></a>
<a id="schema_DeactivateClientRequest"></a>
<a id="tocSdeactivateclientrequest"></a>
<a id="tocsdeactivateclientrequest"></a>

```json
{}
```

Request message for disabling a client.

<h2 id="tocS_DeactivateClientUserRequest">DeactivateClientUserRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeactivateclientuserrequest"></a>
<a id="schema_DeactivateClientUserRequest"></a>
<a id="tocSdeactivateclientuserrequest"></a>
<a id="tocsdeactivateclientuserrequest"></a>

```json
{}
```

Request message for deactivating a client user.

<h2 id="tocS_Deal">Deal</h2>
<!-- backwards compatibility -->
<a id="schemadeal"></a>
<a id="schema_Deal"></a>
<a id="tocSdeal"></a>
<a id="tocsdeal"></a>

```json
{
  "billedBuyer": "string",
  "buyer": "string",
  "client": "string",
  "createTime": "string",
  "creativeRequirements": {
    "creativeFormat": "CREATIVE_FORMAT_UNSPECIFIED",
    "creativePreApprovalPolicy": "CREATIVE_PRE_APPROVAL_POLICY_UNSPECIFIED",
    "creativeSafeFrameCompatibility": "CREATIVE_SAFE_FRAME_COMPATIBILITY_UNSPECIFIED",
    "maxAdDurationMs": "string",
    "programmaticCreativeSource": "PROGRAMMATIC_CREATIVE_SOURCE_UNSPECIFIED",
    "skippableAdType": "SKIPPABLE_AD_TYPE_UNSPECIFIED"
  },
  "dealType": "DEAL_TYPE_UNSPECIFIED",
  "deliveryControl": {
    "companionDeliveryType": "COMPANION_DELIVERY_TYPE_UNSPECIFIED",
    "creativeRotationType": "CREATIVE_ROTATION_TYPE_UNSPECIFIED",
    "deliveryRateType": "DELIVERY_RATE_TYPE_UNSPECIFIED",
    "frequencyCap": [
      {
        "maxImpressions": 0,
        "timeUnitType": "TIME_UNIT_TYPE_UNSPECIFIED",
        "timeUnitsCount": 0
      }
    ],
    "roadblockingType": "ROADBLOCKING_TYPE_UNSPECIFIED"
  },
  "description": "string",
  "displayName": "string",
  "estimatedGrossSpend": {
    "currencyCode": "string",
    "nanos": 0,
    "units": "string"
  },
  "flightEndTime": "string",
  "flightStartTime": "string",
  "name": "string",
  "preferredDealTerms": {
    "fixedPrice": {
      "amount": {
        "currencyCode": "string",
        "nanos": 0,
        "units": "string"
      },
      "type": "TYPE_UNSPECIFIED"
    }
  },
  "privateAuctionTerms": {
    "floorPrice": {
      "amount": {
        "currencyCode": "string",
        "nanos": 0,
        "units": "string"
      },
      "type": "TYPE_UNSPECIFIED"
    },
    "openAuctionAllowed": true
  },
  "programmaticGuaranteedTerms": {
    "fixedPrice": {
      "amount": {
        "currencyCode": "string",
        "nanos": 0,
        "units": "string"
      },
      "type": "TYPE_UNSPECIFIED"
    },
    "guaranteedLooks": "string",
    "impressionCap": "string",
    "minimumDailyLooks": "string",
    "percentShareOfVoice": "string",
    "reservationType": "RESERVATION_TYPE_UNSPECIFIED"
  },
  "proposalRevision": "string",
  "publisherProfile": "string",
  "sellerTimeZone": {
    "id": "string",
    "version": "string"
  },
  "targeting": {
    "daypartTargeting": {
      "dayParts": [
        {
          "dayOfWeek": "DAY_OF_WEEK_UNSPECIFIED",
          "endTime": {
            "hours": 0,
            "minutes": 0,
            "nanos": 0,
            "seconds": 0
          },
          "startTime": {
            "hours": 0,
            "minutes": 0,
            "nanos": 0,
            "seconds": 0
          }
        }
      ],
      "timeZoneType": "TIME_ZONE_TYPE_UNSPECIFIED"
    },
    "geoTargeting": {
      "excludedCriteriaIds": [
        "string"
      ],
      "targetedCriteriaIds": [
        "string"
      ]
    },
    "inventorySizeTargeting": {
      "excludedInventorySizes": [
        {
          "height": "string",
          "type": "TYPE_UNSPECIFIED",
          "width": "string"
        }
      ],
      "targetedInventorySizes": [
        {
          "height": "string",
          "type": "TYPE_UNSPECIFIED",
          "width": "string"
        }
      ]
    },
    "inventoryTypeTargeting": {
      "inventoryTypes": [
        "INVENTORY_TYPE_UNSPECIFIED"
      ]
    },
    "placementTargeting": {
      "mobileApplicationTargeting": {
        "firstPartyTargeting": {
          "excludedAppIds": [
            "string"
          ],
          "targetedAppIds": [
            "string"
          ]
        }
      },
      "uriTargeting": {
        "excludedUris": [
          "string"
        ],
        "targetedUris": [
          "string"
        ]
      }
    },
    "technologyTargeting": {
      "deviceCapabilityTargeting": {
        "excludedCriteriaIds": [
          "string"
        ],
        "targetedCriteriaIds": [
          "string"
        ]
      },
      "deviceCategoryTargeting": {
        "excludedCriteriaIds": [
          "string"
        ],
        "targetedCriteriaIds": [
          "string"
        ]
      },
      "operatingSystemTargeting": {
        "operatingSystemCriteria": {
          "excludedCriteriaIds": [
            "string"
          ],
          "targetedCriteriaIds": [
            "string"
          ]
        },
        "operatingSystemVersionCriteria": {
          "excludedCriteriaIds": [
            "string"
          ],
          "targetedCriteriaIds": [
            "string"
          ]
        }
      }
    },
    "userListTargeting": {
      "excludedCriteriaIds": [
        "string"
      ],
      "targetedCriteriaIds": [
        "string"
      ]
    },
    "videoTargeting": {
      "excludedPositionTypes": [
        "POSITION_TYPE_UNSPECIFIED"
      ],
      "targetedPositionTypes": [
        "POSITION_TYPE_UNSPECIFIED"
      ]
    }
  },
  "updateTime": "string"
}
```

A deal represents a segment of inventory for displaying ads that contains the terms and targeting information that is used for serving as well as the deal stats and status. Note: A proposal may contain multiple deals.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|billedBuyer|string|false|read-only|Output only. When the client field is populated, this field refers to the buyer who creates and manages the client buyer and gets billed on behalf of the client buyer; when the buyer field is populated, this field is the same value as buyer. Format : `buyers/{buyerAccountId}`|
|buyer|string|false|read-only|Output only. Refers to a buyer in The Realtime-bidding API. Format: `buyers/{buyerAccountId}`|
|client|string|false|read-only|Output only. Refers to a Client. Format: `buyers/{buyerAccountId}/clients/{clientAccountid}`|
|createTime|string(google-datetime)|false|read-only|Output only. The time of the deal creation.|
|creativeRequirements|[CreativeRequirements](#schemacreativerequirements)|false|none|Output only. Metadata about the creatives of this deal.|
|dealType|string|false|read-only|Output only. Type of deal.|
|deliveryControl|[DeliveryControl](#schemadeliverycontrol)|false|none|Output only. Specifies the pacing set by the publisher.|
|description|string|false|read-only|Output only. Free text description for the deal terms.|
|displayName|string|false|read-only|Output only. The name of the deal. Maximum length of 255 unicode characters is allowed. Control characters are not allowed. Buyers cannot update this field. Note: Not to be confused with name, which is a unique identifier of the deal.|
|estimatedGrossSpend|[Money](#schemamoney)|false|none|Specified by buyers in request for proposal (RFP) to notify publisher the total estimated spend for the proposal. Publishers will receive this information and send back proposed deals accordingly.|
|flightEndTime|string(google-datetime)|false|none|Proposed flight end time of the deal. This will generally be stored in a granularity of a second. A value is not necessary for Private Auction deals.|
|flightStartTime|string(google-datetime)|false|none|Proposed flight start time of the deal. This will generally be stored in the granularity of one second since deal serving starts at seconds boundary. Any time specified with more granularity (for example, in milliseconds) will be truncated towards the start of time in seconds.|
|name|string|false|none|Immutable. The unique identifier of the deal. Auto-generated by the server when a deal is created. Format: buyers/{accountId}/proposals/{proposalId}/deals/{dealId}|
|preferredDealTerms|[PreferredDealTerms](#schemapreferreddealterms)|false|none|The terms for preferred deals.|
|privateAuctionTerms|[PrivateAuctionTerms](#schemaprivateauctionterms)|false|none|The terms for private auction deals.|
|programmaticGuaranteedTerms|[ProgrammaticGuaranteedTerms](#schemaprogrammaticguaranteedterms)|false|none|The terms for programmatic guaranteed deals.|
|proposalRevision|string(int64)|false|read-only|Output only. The revision number for the proposal and is the same value as proposal.proposal_revision. Each update to deal causes the proposal revision number to auto-increment. The buyer keeps track of the last revision number they know of and pass it in when making an update. If the head revision number on the server has since incremented, then an ABORTED error is returned during the update operation to let the buyer know that a subsequent update was made.|
|publisherProfile|string|false|none|Immutable. Reference to the seller on the deal. Format: `buyers/{buyerAccountId}/publisherProfiles/{publisherProfileId}`|
|sellerTimeZone|[TimeZone](#schematimezone)|false|none|Output only. Time zone of the seller used to mark the boundaries of a day for daypart targeting and CPD billing.|
|targeting|[MarketplaceTargeting](#schemamarketplacetargeting)|false|none|Specifies the subset of inventory targeted by the deal. Can be updated by the buyer before the deal is finalized.|
|updateTime|string(google-datetime)|false|read-only|Output only. The time when the deal was last updated.|

#### Enumerated Values

|Property|Value|
|---|---|
|dealType|DEAL_TYPE_UNSPECIFIED|
|dealType|PREFERRED_DEAL|
|dealType|PRIVATE_AUCTION|
|dealType|PROGRAMMATIC_GUARANTEED|

<h2 id="tocS_DealPausingInfo">DealPausingInfo</h2>
<!-- backwards compatibility -->
<a id="schemadealpausinginfo"></a>
<a id="schema_DealPausingInfo"></a>
<a id="tocSdealpausinginfo"></a>
<a id="tocsdealpausinginfo"></a>

```json
{
  "pauseReason": "string",
  "pauseRole": "BUYER_SELLER_ROLE_UNSPECIFIED",
  "pausingConsented": true
}
```

Information related to deal pausing.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pauseReason|string|false|none|The reason for the pausing of the deal; empty for active deals.|
|pauseRole|string|false|none|The party that first paused the deal; unspecified for active deals.|
|pausingConsented|boolean|false|none|Whether pausing is consented between buyer and seller for the deal.|

#### Enumerated Values

|Property|Value|
|---|---|
|pauseRole|BUYER_SELLER_ROLE_UNSPECIFIED|
|pauseRole|BUYER|
|pauseRole|SELLER|

<h2 id="tocS_DeliveryControl">DeliveryControl</h2>
<!-- backwards compatibility -->
<a id="schemadeliverycontrol"></a>
<a id="schema_DeliveryControl"></a>
<a id="tocSdeliverycontrol"></a>
<a id="tocsdeliverycontrol"></a>

```json
{
  "companionDeliveryType": "COMPANION_DELIVERY_TYPE_UNSPECIFIED",
  "creativeRotationType": "CREATIVE_ROTATION_TYPE_UNSPECIFIED",
  "deliveryRateType": "DELIVERY_RATE_TYPE_UNSPECIFIED",
  "frequencyCap": [
    {
      "maxImpressions": 0,
      "timeUnitType": "TIME_UNIT_TYPE_UNSPECIFIED",
      "timeUnitsCount": 0
    }
  ],
  "roadblockingType": "ROADBLOCKING_TYPE_UNSPECIFIED"
}
```

Message contains details about how the deal will be paced.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|companionDeliveryType|string|false|read-only|Output only. Specifies roadblocking in a main companion lineitem.|
|creativeRotationType|string|false|read-only|Output only. Specifies strategy to use for selecting a creative when multiple creatives of the same size are available.|
|deliveryRateType|string|false|read-only|Output only. Specifies how the impression delivery will be paced.|
|frequencyCap|[[FrequencyCap](#schemafrequencycap)]|false|read-only|Output only. Specifies any frequency caps. Cannot be filtered within ListDealsRequest.|
|roadblockingType|string|false|read-only|Output only. Specifies the roadblocking type in display creatives.|

#### Enumerated Values

|Property|Value|
|---|---|
|companionDeliveryType|COMPANION_DELIVERY_TYPE_UNSPECIFIED|
|companionDeliveryType|DELIVERY_OPTIONAL|
|companionDeliveryType|DELIVERY_AT_LEAST_ONE|
|companionDeliveryType|DELIVERY_ALL|
|creativeRotationType|CREATIVE_ROTATION_TYPE_UNSPECIFIED|
|creativeRotationType|ROTATION_EVEN|
|creativeRotationType|ROTATION_OPTIMIZED|
|creativeRotationType|ROTATION_MANUAL|
|creativeRotationType|ROTATION_SEQUENTIAL|
|deliveryRateType|DELIVERY_RATE_TYPE_UNSPECIFIED|
|deliveryRateType|EVENLY|
|deliveryRateType|FRONT_LOADED|
|deliveryRateType|AS_FAST_AS_POSSIBLE|
|roadblockingType|ROADBLOCKING_TYPE_UNSPECIFIED|
|roadblockingType|ONLY_ONE|
|roadblockingType|ONE_OR_MORE|
|roadblockingType|AS_MANY_AS_POSSIBLE|
|roadblockingType|ALL_ROADBLOCK|
|roadblockingType|CREATIVE_SET|

<h2 id="tocS_Empty">Empty</h2>
<!-- backwards compatibility -->
<a id="schemaempty"></a>
<a id="schema_Empty"></a>
<a id="tocSempty"></a>
<a id="tocsempty"></a>

```json
{}
```

A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }

<h2 id="tocS_FinalizedDeal">FinalizedDeal</h2>
<!-- backwards compatibility -->
<a id="schemafinalizeddeal"></a>
<a id="schema_FinalizedDeal"></a>
<a id="tocSfinalizeddeal"></a>
<a id="tocsfinalizeddeal"></a>

```json
{
  "deal": {
    "billedBuyer": "string",
    "buyer": "string",
    "client": "string",
    "createTime": "string",
    "creativeRequirements": {
      "creativeFormat": "CREATIVE_FORMAT_UNSPECIFIED",
      "creativePreApprovalPolicy": "CREATIVE_PRE_APPROVAL_POLICY_UNSPECIFIED",
      "creativeSafeFrameCompatibility": "CREATIVE_SAFE_FRAME_COMPATIBILITY_UNSPECIFIED",
      "maxAdDurationMs": "string",
      "programmaticCreativeSource": "PROGRAMMATIC_CREATIVE_SOURCE_UNSPECIFIED",
      "skippableAdType": "SKIPPABLE_AD_TYPE_UNSPECIFIED"
    },
    "dealType": "DEAL_TYPE_UNSPECIFIED",
    "deliveryControl": {
      "companionDeliveryType": "COMPANION_DELIVERY_TYPE_UNSPECIFIED",
      "creativeRotationType": "CREATIVE_ROTATION_TYPE_UNSPECIFIED",
      "deliveryRateType": "DELIVERY_RATE_TYPE_UNSPECIFIED",
      "frequencyCap": [
        {
          "maxImpressions": 0,
          "timeUnitType": "TIME_UNIT_TYPE_UNSPECIFIED",
          "timeUnitsCount": 0
        }
      ],
      "roadblockingType": "ROADBLOCKING_TYPE_UNSPECIFIED"
    },
    "description": "string",
    "displayName": "string",
    "estimatedGrossSpend": {
      "currencyCode": "string",
      "nanos": 0,
      "units": "string"
    },
    "flightEndTime": "string",
    "flightStartTime": "string",
    "name": "string",
    "preferredDealTerms": {
      "fixedPrice": {
        "amount": {
          "currencyCode": "string",
          "nanos": 0,
          "units": "string"
        },
        "type": "TYPE_UNSPECIFIED"
      }
    },
    "privateAuctionTerms": {
      "floorPrice": {
        "amount": {
          "currencyCode": "string",
          "nanos": 0,
          "units": "string"
        },
        "type": "TYPE_UNSPECIFIED"
      },
      "openAuctionAllowed": true
    },
    "programmaticGuaranteedTerms": {
      "fixedPrice": {
        "amount": {
          "currencyCode": "string",
          "nanos": 0,
          "units": "string"
        },
        "type": "TYPE_UNSPECIFIED"
      },
      "guaranteedLooks": "string",
      "impressionCap": "string",
      "minimumDailyLooks": "string",
      "percentShareOfVoice": "string",
      "reservationType": "RESERVATION_TYPE_UNSPECIFIED"
    },
    "proposalRevision": "string",
    "publisherProfile": "string",
    "sellerTimeZone": {
      "id": "string",
      "version": "string"
    },
    "targeting": {
      "daypartTargeting": {
        "dayParts": [
          {
            "dayOfWeek": "DAY_OF_WEEK_UNSPECIFIED",
            "endTime": {
              "hours": 0,
              "minutes": 0,
              "nanos": 0,
              "seconds": 0
            },
            "startTime": {
              "hours": 0,
              "minutes": 0,
              "nanos": 0,
              "seconds": 0
            }
          }
        ],
        "timeZoneType": "TIME_ZONE_TYPE_UNSPECIFIED"
      },
      "geoTargeting": {
        "excludedCriteriaIds": [
          "string"
        ],
        "targetedCriteriaIds": [
          "string"
        ]
      },
      "inventorySizeTargeting": {
        "excludedInventorySizes": [
          {
            "height": "string",
            "type": "TYPE_UNSPECIFIED",
            "width": "string"
          }
        ],
        "targetedInventorySizes": [
          {
            "height": "string",
            "type": "TYPE_UNSPECIFIED",
            "width": "string"
          }
        ]
      },
      "inventoryTypeTargeting": {
        "inventoryTypes": [
          "INVENTORY_TYPE_UNSPECIFIED"
        ]
      },
      "placementTargeting": {
        "mobileApplicationTargeting": {
          "firstPartyTargeting": {
            "excludedAppIds": [
              "string"
            ],
            "targetedAppIds": [
              "string"
            ]
          }
        },
        "uriTargeting": {
          "excludedUris": [
            "string"
          ],
          "targetedUris": [
            "string"
          ]
        }
      },
      "technologyTargeting": {
        "deviceCapabilityTargeting": {
          "excludedCriteriaIds": [
            "string"
          ],
          "targetedCriteriaIds": [
            "string"
          ]
        },
        "deviceCategoryTargeting": {
          "excludedCriteriaIds": [
            "string"
          ],
          "targetedCriteriaIds": [
            "string"
          ]
        },
        "operatingSystemTargeting": {
          "operatingSystemCriteria": {
            "excludedCriteriaIds": [
              "string"
            ],
            "targetedCriteriaIds": [
              "string"
            ]
          },
          "operatingSystemVersionCriteria": {
            "excludedCriteriaIds": [
              "string"
            ],
            "targetedCriteriaIds": [
              "string"
            ]
          }
        }
      },
      "userListTargeting": {
        "excludedCriteriaIds": [
          "string"
        ],
        "targetedCriteriaIds": [
          "string"
        ]
      },
      "videoTargeting": {
        "excludedPositionTypes": [
          "POSITION_TYPE_UNSPECIFIED"
        ],
        "targetedPositionTypes": [
          "POSITION_TYPE_UNSPECIFIED"
        ]
      }
    },
    "updateTime": "string"
  },
  "dealPausingInfo": {
    "pauseReason": "string",
    "pauseRole": "BUYER_SELLER_ROLE_UNSPECIFIED",
    "pausingConsented": true
  },
  "dealServingStatus": "DEAL_SERVING_STATUS_UNSPECIFIED",
  "name": "string",
  "readyToServe": true,
  "rtbMetrics": {
    "adImpressions7Days": "string",
    "bidRate7Days": 0,
    "bidRequests7Days": "string",
    "bids7Days": "string",
    "filteredBidRate7Days": 0,
    "mustBidRateCurrentMonth": 0
  }
}
```

A finalized deal is a snapshot of the deal when both buyer and seller accept the deal. The buyer or seller can update the deal after it's been finalized and renegotiate on the deal targeting, terms and other fields, while at the same time the finalized snapshot of the deal can still be retrieved using this API. The finalized deal contains a copy of the deal as it existed when most recently finalized, as well as fields related to deal serving such as pause/resume status, RTB metrics, and more.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deal|[Deal](#schemadeal)|false|none|A copy of the Deal made upon finalization. During renegotiation, this will reflect the last finalized deal before renegotiation was initiated.|
|dealPausingInfo|[DealPausingInfo](#schemadealpausinginfo)|false|none|Information related to deal pausing for the deal.|
|dealServingStatus|string|false|none|Serving status of the deal.|
|name|string|false|none|The resource name of the finalized deal. Format: `buyers/{accountId}/finalizeddeals/{finalizedDealId}`|
|readyToServe|boolean|false|none|Whether the Programmatic Guaranteed deal is ready for serving.|
|rtbMetrics|[RtbMetrics](#schemartbmetrics)|false|none|Real-time bidding metrics for this deal.|

#### Enumerated Values

|Property|Value|
|---|---|
|dealServingStatus|DEAL_SERVING_STATUS_UNSPECIFIED|
|dealServingStatus|ACTIVE|
|dealServingStatus|ENDED|
|dealServingStatus|PAUSED_BY_BUYER|
|dealServingStatus|PAUSED_BY_SELLER|

<h2 id="tocS_FirstPartyMobileApplicationTargeting">FirstPartyMobileApplicationTargeting</h2>
<!-- backwards compatibility -->
<a id="schemafirstpartymobileapplicationtargeting"></a>
<a id="schema_FirstPartyMobileApplicationTargeting"></a>
<a id="tocSfirstpartymobileapplicationtargeting"></a>
<a id="tocsfirstpartymobileapplicationtargeting"></a>

```json
{
  "excludedAppIds": [
    "string"
  ],
  "targetedAppIds": [
    "string"
  ]
}
```

Represents a list of targeted and excluded mobile application IDs that publishers own. Android App ID, for example, com.google.android.apps.maps, can be found in Google Play Store URL. iOS App ID (which is a number) can be found at the end of iTunes store URL. First party mobile applications is either included or excluded.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|excludedAppIds|[string]|false|none|A list of application IDs to be excluded.|
|targetedAppIds|[string]|false|none|A list of application IDs to be included.|

<h2 id="tocS_FrequencyCap">FrequencyCap</h2>
<!-- backwards compatibility -->
<a id="schemafrequencycap"></a>
<a id="schema_FrequencyCap"></a>
<a id="tocSfrequencycap"></a>
<a id="tocsfrequencycap"></a>

```json
{
  "maxImpressions": 0,
  "timeUnitType": "TIME_UNIT_TYPE_UNSPECIFIED",
  "timeUnitsCount": 0
}
```

Message contains details about publisher-set frequency caps of the delivery.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|maxImpressions|integer(int32)|false|none|The maximum number of impressions that can be served to a user within the specified time period.|
|timeUnitType|string|false|none|The time unit. Along with num_time_units defines the amount of time over which impressions per user are counted and capped.|
|timeUnitsCount|integer(int32)|false|none|The amount of time, in the units specified by time_unit_type. Defines the amount of time over which impressions per user are counted and capped.|

#### Enumerated Values

|Property|Value|
|---|---|
|timeUnitType|TIME_UNIT_TYPE_UNSPECIFIED|
|timeUnitType|MINUTE|
|timeUnitType|HOUR|
|timeUnitType|DAY|
|timeUnitType|WEEK|
|timeUnitType|MONTH|
|timeUnitType|LIFETIME|
|timeUnitType|POD|
|timeUnitType|STREAM|

<h2 id="tocS_InventorySizeTargeting">InventorySizeTargeting</h2>
<!-- backwards compatibility -->
<a id="schemainventorysizetargeting"></a>
<a id="schema_InventorySizeTargeting"></a>
<a id="tocSinventorysizetargeting"></a>
<a id="tocsinventorysizetargeting"></a>

```json
{
  "excludedInventorySizes": [
    {
      "height": "string",
      "type": "TYPE_UNSPECIFIED",
      "width": "string"
    }
  ],
  "targetedInventorySizes": [
    {
      "height": "string",
      "type": "TYPE_UNSPECIFIED",
      "width": "string"
    }
  ]
}
```

Represents the size of an ad unit that can be targeted on a bid request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|excludedInventorySizes|[[AdSize](#schemaadsize)]|false|none|A list of inventory sizes to be excluded.|
|targetedInventorySizes|[[AdSize](#schemaadsize)]|false|none|A list of inventory sizes to be included.|

<h2 id="tocS_InventoryTypeTargeting">InventoryTypeTargeting</h2>
<!-- backwards compatibility -->
<a id="schemainventorytypetargeting"></a>
<a id="schema_InventoryTypeTargeting"></a>
<a id="tocSinventorytypetargeting"></a>
<a id="tocsinventorytypetargeting"></a>

```json
{
  "inventoryTypes": [
    "INVENTORY_TYPE_UNSPECIFIED"
  ]
}
```

Targeting of the inventory types a bid request can originate from.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inventoryTypes|[string]|false|none|The list of targeted inventory types for the bid request.|

#### Enumerated Values

|Property|Value|
|---|---|
|inventoryTypes|INVENTORY_TYPE_UNSPECIFIED|
|inventoryTypes|BROWSER|
|inventoryTypes|MOBILE_APP|
|inventoryTypes|VIDEO_PLAYER|

<h2 id="tocS_ListAuctionPackagesResponse">ListAuctionPackagesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistauctionpackagesresponse"></a>
<a id="schema_ListAuctionPackagesResponse"></a>
<a id="tocSlistauctionpackagesresponse"></a>
<a id="tocslistauctionpackagesresponse"></a>

```json
{
  "auctionPackages": [
    {
      "createTime": "string",
      "creator": "string",
      "description": "string",
      "displayName": "string",
      "name": "string",
      "subscribedClients": [
        "string"
      ],
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string"
}
```

Response message for listing auction packages.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|auctionPackages|[[AuctionPackage](#schemaauctionpackage)]|false|none|The list of auction packages.|
|nextPageToken|string|false|none|Continuation token for fetching the next page of results. Pass this value in the ListAuctionPackagesRequest.pageToken field in the subsequent call to the `ListAuctionPackages` method to retrieve the next page of results.|

<h2 id="tocS_ListClientUsersResponse">ListClientUsersResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistclientusersresponse"></a>
<a id="schema_ListClientUsersResponse"></a>
<a id="tocSlistclientusersresponse"></a>
<a id="tocslistclientusersresponse"></a>

```json
{
  "clientUsers": [
    {
      "email": "string",
      "name": "string",
      "state": "STATE_UNSPECIFIED"
    }
  ],
  "nextPageToken": "string"
}
```

Response message for the list method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientUsers|[[ClientUser](#schemaclientuser)]|false|none|The returned list of client users.|
|nextPageToken|string|false|none|A token to retrieve the next page of results. Pass this value in the ListClientUsersRequest.pageToken field in the subsequent call to the list method to retrieve the next page of results.|

<h2 id="tocS_ListClientsResponse">ListClientsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistclientsresponse"></a>
<a id="schema_ListClientsResponse"></a>
<a id="tocSlistclientsresponse"></a>
<a id="tocslistclientsresponse"></a>

```json
{
  "clients": [
    {
      "displayName": "string",
      "name": "string",
      "partnerClientId": "string",
      "role": "CLIENT_ROLE_UNSPECIFIED",
      "sellerVisible": true,
      "state": "STATE_UNSPECIFIED"
    }
  ],
  "nextPageToken": "string"
}
```

Response message for the list method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clients|[[Client](#schemaclient)]|false|none|The returned list of clients.|
|nextPageToken|string|false|none|A token to retrieve the next page of results. Pass this value in the ListClientsRequest.pageToken field in the subsequent call to the list method to retrieve the next page of results.|

<h2 id="tocS_ListDealsResponse">ListDealsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistdealsresponse"></a>
<a id="schema_ListDealsResponse"></a>
<a id="tocSlistdealsresponse"></a>
<a id="tocslistdealsresponse"></a>

```json
{
  "deals": [
    {
      "billedBuyer": "string",
      "buyer": "string",
      "client": "string",
      "createTime": "string",
      "creativeRequirements": {
        "creativeFormat": "CREATIVE_FORMAT_UNSPECIFIED",
        "creativePreApprovalPolicy": "CREATIVE_PRE_APPROVAL_POLICY_UNSPECIFIED",
        "creativeSafeFrameCompatibility": "CREATIVE_SAFE_FRAME_COMPATIBILITY_UNSPECIFIED",
        "maxAdDurationMs": "string",
        "programmaticCreativeSource": "PROGRAMMATIC_CREATIVE_SOURCE_UNSPECIFIED",
        "skippableAdType": "SKIPPABLE_AD_TYPE_UNSPECIFIED"
      },
      "dealType": "DEAL_TYPE_UNSPECIFIED",
      "deliveryControl": {
        "companionDeliveryType": "COMPANION_DELIVERY_TYPE_UNSPECIFIED",
        "creativeRotationType": "CREATIVE_ROTATION_TYPE_UNSPECIFIED",
        "deliveryRateType": "DELIVERY_RATE_TYPE_UNSPECIFIED",
        "frequencyCap": [
          {
            "maxImpressions": 0,
            "timeUnitType": "TIME_UNIT_TYPE_UNSPECIFIED",
            "timeUnitsCount": 0
          }
        ],
        "roadblockingType": "ROADBLOCKING_TYPE_UNSPECIFIED"
      },
      "description": "string",
      "displayName": "string",
      "estimatedGrossSpend": {
        "currencyCode": "string",
        "nanos": 0,
        "units": "string"
      },
      "flightEndTime": "string",
      "flightStartTime": "string",
      "name": "string",
      "preferredDealTerms": {
        "fixedPrice": {
          "amount": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          },
          "type": "TYPE_UNSPECIFIED"
        }
      },
      "privateAuctionTerms": {
        "floorPrice": {
          "amount": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          },
          "type": "TYPE_UNSPECIFIED"
        },
        "openAuctionAllowed": true
      },
      "programmaticGuaranteedTerms": {
        "fixedPrice": {
          "amount": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          },
          "type": "TYPE_UNSPECIFIED"
        },
        "guaranteedLooks": "string",
        "impressionCap": "string",
        "minimumDailyLooks": "string",
        "percentShareOfVoice": "string",
        "reservationType": "RESERVATION_TYPE_UNSPECIFIED"
      },
      "proposalRevision": "string",
      "publisherProfile": "string",
      "sellerTimeZone": {
        "id": "string",
        "version": "string"
      },
      "targeting": {
        "daypartTargeting": {
          "dayParts": [
            {
              "dayOfWeek": "DAY_OF_WEEK_UNSPECIFIED",
              "endTime": {
                "hours": 0,
                "minutes": 0,
                "nanos": 0,
                "seconds": 0
              },
              "startTime": {
                "hours": 0,
                "minutes": 0,
                "nanos": 0,
                "seconds": 0
              }
            }
          ],
          "timeZoneType": "TIME_ZONE_TYPE_UNSPECIFIED"
        },
        "geoTargeting": {
          "excludedCriteriaIds": [
            "string"
          ],
          "targetedCriteriaIds": [
            "string"
          ]
        },
        "inventorySizeTargeting": {
          "excludedInventorySizes": [
            {
              "height": "string",
              "type": "TYPE_UNSPECIFIED",
              "width": "string"
            }
          ],
          "targetedInventorySizes": [
            {
              "height": "string",
              "type": "TYPE_UNSPECIFIED",
              "width": "string"
            }
          ]
        },
        "inventoryTypeTargeting": {
          "inventoryTypes": [
            "INVENTORY_TYPE_UNSPECIFIED"
          ]
        },
        "placementTargeting": {
          "mobileApplicationTargeting": {
            "firstPartyTargeting": {
              "excludedAppIds": [
                "string"
              ],
              "targetedAppIds": [
                "string"
              ]
            }
          },
          "uriTargeting": {
            "excludedUris": [
              "string"
            ],
            "targetedUris": [
              "string"
            ]
          }
        },
        "technologyTargeting": {
          "deviceCapabilityTargeting": {
            "excludedCriteriaIds": [
              "string"
            ],
            "targetedCriteriaIds": [
              "string"
            ]
          },
          "deviceCategoryTargeting": {
            "excludedCriteriaIds": [
              "string"
            ],
            "targetedCriteriaIds": [
              "string"
            ]
          },
          "operatingSystemTargeting": {
            "operatingSystemCriteria": {
              "excludedCriteriaIds": [
                "string"
              ],
              "targetedCriteriaIds": [
                "string"
              ]
            },
            "operatingSystemVersionCriteria": {
              "excludedCriteriaIds": [
                "string"
              ],
              "targetedCriteriaIds": [
                "string"
              ]
            }
          }
        },
        "userListTargeting": {
          "excludedCriteriaIds": [
            "string"
          ],
          "targetedCriteriaIds": [
            "string"
          ]
        },
        "videoTargeting": {
          "excludedPositionTypes": [
            "POSITION_TYPE_UNSPECIFIED"
          ],
          "targetedPositionTypes": [
            "POSITION_TYPE_UNSPECIFIED"
          ]
        }
      },
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string"
}
```

Response message for listing deals in a proposal.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deals|[[Deal](#schemadeal)]|false|none|The list of deals.|
|nextPageToken|string|false|none|Token to fetch the next page of results.|

<h2 id="tocS_ListFinalizedDealsResponse">ListFinalizedDealsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistfinalizeddealsresponse"></a>
<a id="schema_ListFinalizedDealsResponse"></a>
<a id="tocSlistfinalizeddealsresponse"></a>
<a id="tocslistfinalizeddealsresponse"></a>

```json
{
  "finalizedDeals": [
    {
      "deal": {
        "billedBuyer": "string",
        "buyer": "string",
        "client": "string",
        "createTime": "string",
        "creativeRequirements": {
          "creativeFormat": "CREATIVE_FORMAT_UNSPECIFIED",
          "creativePreApprovalPolicy": "CREATIVE_PRE_APPROVAL_POLICY_UNSPECIFIED",
          "creativeSafeFrameCompatibility": "CREATIVE_SAFE_FRAME_COMPATIBILITY_UNSPECIFIED",
          "maxAdDurationMs": "string",
          "programmaticCreativeSource": "PROGRAMMATIC_CREATIVE_SOURCE_UNSPECIFIED",
          "skippableAdType": "SKIPPABLE_AD_TYPE_UNSPECIFIED"
        },
        "dealType": "DEAL_TYPE_UNSPECIFIED",
        "deliveryControl": {
          "companionDeliveryType": "COMPANION_DELIVERY_TYPE_UNSPECIFIED",
          "creativeRotationType": "CREATIVE_ROTATION_TYPE_UNSPECIFIED",
          "deliveryRateType": "DELIVERY_RATE_TYPE_UNSPECIFIED",
          "frequencyCap": [
            {
              "maxImpressions": 0,
              "timeUnitType": "TIME_UNIT_TYPE_UNSPECIFIED",
              "timeUnitsCount": 0
            }
          ],
          "roadblockingType": "ROADBLOCKING_TYPE_UNSPECIFIED"
        },
        "description": "string",
        "displayName": "string",
        "estimatedGrossSpend": {
          "currencyCode": "string",
          "nanos": 0,
          "units": "string"
        },
        "flightEndTime": "string",
        "flightStartTime": "string",
        "name": "string",
        "preferredDealTerms": {
          "fixedPrice": {
            "amount": {
              "currencyCode": "string",
              "nanos": 0,
              "units": "string"
            },
            "type": "TYPE_UNSPECIFIED"
          }
        },
        "privateAuctionTerms": {
          "floorPrice": {
            "amount": {
              "currencyCode": "string",
              "nanos": 0,
              "units": "string"
            },
            "type": "TYPE_UNSPECIFIED"
          },
          "openAuctionAllowed": true
        },
        "programmaticGuaranteedTerms": {
          "fixedPrice": {
            "amount": {
              "currencyCode": "string",
              "nanos": 0,
              "units": "string"
            },
            "type": "TYPE_UNSPECIFIED"
          },
          "guaranteedLooks": "string",
          "impressionCap": "string",
          "minimumDailyLooks": "string",
          "percentShareOfVoice": "string",
          "reservationType": "RESERVATION_TYPE_UNSPECIFIED"
        },
        "proposalRevision": "string",
        "publisherProfile": "string",
        "sellerTimeZone": {
          "id": "string",
          "version": "string"
        },
        "targeting": {
          "daypartTargeting": {
            "dayParts": [
              {
                "dayOfWeek": "DAY_OF_WEEK_UNSPECIFIED",
                "endTime": {
                  "hours": 0,
                  "minutes": 0,
                  "nanos": 0,
                  "seconds": 0
                },
                "startTime": {
                  "hours": 0,
                  "minutes": 0,
                  "nanos": 0,
                  "seconds": 0
                }
              }
            ],
            "timeZoneType": "TIME_ZONE_TYPE_UNSPECIFIED"
          },
          "geoTargeting": {
            "excludedCriteriaIds": [
              "string"
            ],
            "targetedCriteriaIds": [
              "string"
            ]
          },
          "inventorySizeTargeting": {
            "excludedInventorySizes": [
              {
                "height": "string",
                "type": "TYPE_UNSPECIFIED",
                "width": "string"
              }
            ],
            "targetedInventorySizes": [
              {
                "height": "string",
                "type": "TYPE_UNSPECIFIED",
                "width": "string"
              }
            ]
          },
          "inventoryTypeTargeting": {
            "inventoryTypes": [
              "INVENTORY_TYPE_UNSPECIFIED"
            ]
          },
          "placementTargeting": {
            "mobileApplicationTargeting": {
              "firstPartyTargeting": {
                "excludedAppIds": [
                  "string"
                ],
                "targetedAppIds": [
                  "string"
                ]
              }
            },
            "uriTargeting": {
              "excludedUris": [
                "string"
              ],
              "targetedUris": [
                "string"
              ]
            }
          },
          "technologyTargeting": {
            "deviceCapabilityTargeting": {
              "excludedCriteriaIds": [
                "string"
              ],
              "targetedCriteriaIds": [
                "string"
              ]
            },
            "deviceCategoryTargeting": {
              "excludedCriteriaIds": [
                "string"
              ],
              "targetedCriteriaIds": [
                "string"
              ]
            },
            "operatingSystemTargeting": {
              "operatingSystemCriteria": {
                "excludedCriteriaIds": [
                  "string"
                ],
                "targetedCriteriaIds": [
                  "string"
                ]
              },
              "operatingSystemVersionCriteria": {
                "excludedCriteriaIds": [
                  "string"
                ],
                "targetedCriteriaIds": [
                  "string"
                ]
              }
            }
          },
          "userListTargeting": {
            "excludedCriteriaIds": [
              "string"
            ],
            "targetedCriteriaIds": [
              "string"
            ]
          },
          "videoTargeting": {
            "excludedPositionTypes": [
              "POSITION_TYPE_UNSPECIFIED"
            ],
            "targetedPositionTypes": [
              "POSITION_TYPE_UNSPECIFIED"
            ]
          }
        },
        "updateTime": "string"
      },
      "dealPausingInfo": {
        "pauseReason": "string",
        "pauseRole": "BUYER_SELLER_ROLE_UNSPECIFIED",
        "pausingConsented": true
      },
      "dealServingStatus": "DEAL_SERVING_STATUS_UNSPECIFIED",
      "name": "string",
      "readyToServe": true,
      "rtbMetrics": {
        "adImpressions7Days": "string",
        "bidRate7Days": 0,
        "bidRequests7Days": "string",
        "bids7Days": "string",
        "filteredBidRate7Days": 0,
        "mustBidRateCurrentMonth": 0
      }
    }
  ],
  "nextPageToken": "string"
}
```

Response message for listing finalized deals.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|finalizedDeals|[[FinalizedDeal](#schemafinalizeddeal)]|false|none|The list of finalized deals.|
|nextPageToken|string|false|none|Token to fetch the next page of results.|

<h2 id="tocS_ListProposalsResponse">ListProposalsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistproposalsresponse"></a>
<a id="schema_ListProposalsResponse"></a>
<a id="tocSlistproposalsresponse"></a>
<a id="tocslistproposalsresponse"></a>

```json
{
  "nextPageToken": "string",
  "proposals": [
    {
      "billedBuyer": "string",
      "buyer": "string",
      "buyerContacts": [
        {
          "displayName": "string",
          "email": "string"
        }
      ],
      "buyerPrivateData": {
        "referenceId": "string"
      },
      "client": "string",
      "dealType": "DEAL_TYPE_UNSPECIFIED",
      "displayName": "string",
      "isRenegotiating": true,
      "lastUpdaterOrCommentorRole": "BUYER_SELLER_ROLE_UNSPECIFIED",
      "name": "string",
      "notes": [
        {
          "createTime": "string",
          "creatorRole": "BUYER_SELLER_ROLE_UNSPECIFIED",
          "note": "string"
        }
      ],
      "originatorRole": "BUYER_SELLER_ROLE_UNSPECIFIED",
      "pausingConsented": true,
      "proposalRevision": "string",
      "publisherProfile": "string",
      "sellerContacts": [
        {
          "displayName": "string",
          "email": "string"
        }
      ],
      "state": "STATE_UNSPECIFIED",
      "termsAndConditions": "string",
      "updateTime": "string"
    }
  ]
}
```

Response message for listing proposals.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|Continuation token for fetching the next page of results.|
|proposals|[[Proposal](#schemaproposal)]|false|none|The list of proposals.|

<h2 id="tocS_ListPublisherProfilesResponse">ListPublisherProfilesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistpublisherprofilesresponse"></a>
<a id="schema_ListPublisherProfilesResponse"></a>
<a id="tocSlistpublisherprofilesresponse"></a>
<a id="tocslistpublisherprofilesresponse"></a>

```json
{
  "nextPageToken": "string",
  "publisherProfiles": [
    {
      "audienceDescription": "string",
      "directDealsContact": "string",
      "displayName": "string",
      "domains": [
        "string"
      ],
      "isParent": true,
      "logoUrl": "string",
      "mediaKitUrl": "string",
      "mobileApps": [
        {
          "appStore": "APP_STORE_TYPE_UNSPECIFIED",
          "externalAppId": "string",
          "name": "string"
        }
      ],
      "name": "string",
      "overview": "string",
      "pitchStatement": "string",
      "programmaticDealsContact": "string",
      "publisherCode": "string",
      "samplePageUrl": "string",
      "topHeadlines": [
        "string"
      ]
    }
  ]
}
```

Response message for profiles visible to the buyer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|Token to fetch the next page of results.|
|publisherProfiles|[[PublisherProfile](#schemapublisherprofile)]|false|none|The list of matching publisher profiles.|

<h2 id="tocS_MarketplaceTargeting">MarketplaceTargeting</h2>
<!-- backwards compatibility -->
<a id="schemamarketplacetargeting"></a>
<a id="schema_MarketplaceTargeting"></a>
<a id="tocSmarketplacetargeting"></a>
<a id="tocsmarketplacetargeting"></a>

```json
{
  "daypartTargeting": {
    "dayParts": [
      {
        "dayOfWeek": "DAY_OF_WEEK_UNSPECIFIED",
        "endTime": {
          "hours": 0,
          "minutes": 0,
          "nanos": 0,
          "seconds": 0
        },
        "startTime": {
          "hours": 0,
          "minutes": 0,
          "nanos": 0,
          "seconds": 0
        }
      }
    ],
    "timeZoneType": "TIME_ZONE_TYPE_UNSPECIFIED"
  },
  "geoTargeting": {
    "excludedCriteriaIds": [
      "string"
    ],
    "targetedCriteriaIds": [
      "string"
    ]
  },
  "inventorySizeTargeting": {
    "excludedInventorySizes": [
      {
        "height": "string",
        "type": "TYPE_UNSPECIFIED",
        "width": "string"
      }
    ],
    "targetedInventorySizes": [
      {
        "height": "string",
        "type": "TYPE_UNSPECIFIED",
        "width": "string"
      }
    ]
  },
  "inventoryTypeTargeting": {
    "inventoryTypes": [
      "INVENTORY_TYPE_UNSPECIFIED"
    ]
  },
  "placementTargeting": {
    "mobileApplicationTargeting": {
      "firstPartyTargeting": {
        "excludedAppIds": [
          "string"
        ],
        "targetedAppIds": [
          "string"
        ]
      }
    },
    "uriTargeting": {
      "excludedUris": [
        "string"
      ],
      "targetedUris": [
        "string"
      ]
    }
  },
  "technologyTargeting": {
    "deviceCapabilityTargeting": {
      "excludedCriteriaIds": [
        "string"
      ],
      "targetedCriteriaIds": [
        "string"
      ]
    },
    "deviceCategoryTargeting": {
      "excludedCriteriaIds": [
        "string"
      ],
      "targetedCriteriaIds": [
        "string"
      ]
    },
    "operatingSystemTargeting": {
      "operatingSystemCriteria": {
        "excludedCriteriaIds": [
          "string"
        ],
        "targetedCriteriaIds": [
          "string"
        ]
      },
      "operatingSystemVersionCriteria": {
        "excludedCriteriaIds": [
          "string"
        ],
        "targetedCriteriaIds": [
          "string"
        ]
      }
    }
  },
  "userListTargeting": {
    "excludedCriteriaIds": [
      "string"
    ],
    "targetedCriteriaIds": [
      "string"
    ]
  },
  "videoTargeting": {
    "excludedPositionTypes": [
      "POSITION_TYPE_UNSPECIFIED"
    ],
    "targetedPositionTypes": [
      "POSITION_TYPE_UNSPECIFIED"
    ]
  }
}
```

Targeting represents different criteria that can be used to target inventory. For example, they can choose to target inventory only if the user is in the US. Multiple types of targeting are always applied as a logical AND, unless noted otherwise.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|daypartTargeting|[DayPartTargeting](#schemadayparttargeting)|false|none|Daypart targeting information.|
|geoTargeting|[CriteriaTargeting](#schemacriteriatargeting)|false|none|Output only. Geo criteria IDs to be included/excluded.|
|inventorySizeTargeting|[InventorySizeTargeting](#schemainventorysizetargeting)|false|none|Output only. Inventory sizes to be included/excluded.|
|inventoryTypeTargeting|[InventoryTypeTargeting](#schemainventorytypetargeting)|false|none|Output only. Inventory type targeting information.|
|placementTargeting|[PlacementTargeting](#schemaplacementtargeting)|false|none|Output only. Placement targeting information, for example, URL, mobile applications.|
|technologyTargeting|[TechnologyTargeting](#schematechnologytargeting)|false|none|Output only. Technology targeting information, for example, operating system, device category.|
|userListTargeting|[CriteriaTargeting](#schemacriteriatargeting)|false|none|Buyer user list targeting information. User lists can be uploaded using https://developers.google.com/authorized-buyers/rtb/bulk-uploader.|
|videoTargeting|[VideoTargeting](#schemavideotargeting)|false|none|Output only. Video targeting information.|

<h2 id="tocS_MobileApplicationTargeting">MobileApplicationTargeting</h2>
<!-- backwards compatibility -->
<a id="schemamobileapplicationtargeting"></a>
<a id="schema_MobileApplicationTargeting"></a>
<a id="tocSmobileapplicationtargeting"></a>
<a id="tocsmobileapplicationtargeting"></a>

```json
{
  "firstPartyTargeting": {
    "excludedAppIds": [
      "string"
    ],
    "targetedAppIds": [
      "string"
    ]
  }
}
```

Mobile application targeting settings.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|firstPartyTargeting|[FirstPartyMobileApplicationTargeting](#schemafirstpartymobileapplicationtargeting)|false|none|Publisher owned apps to be targeted or excluded by the publisher to display the ads in.|

<h2 id="tocS_Money">Money</h2>
<!-- backwards compatibility -->
<a id="schemamoney"></a>
<a id="schema_Money"></a>
<a id="tocSmoney"></a>
<a id="tocsmoney"></a>

```json
{
  "currencyCode": "string",
  "nanos": 0,
  "units": "string"
}
```

Represents an amount of money with its currency type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currencyCode|string|false|none|The three-letter currency code defined in ISO 4217.|
|nanos|integer(int32)|false|none|Number of nano (10^-9) units of the amount. The value must be between -999,999,999 and +999,999,999 inclusive. If `units` is positive, `nanos` must be positive or zero. If `units` is zero, `nanos` can be positive, zero, or negative. If `units` is negative, `nanos` must be negative or zero. For example $-1.75 is represented as `units`=-1 and `nanos`=-750,000,000.|
|units|string(int64)|false|none|The whole units of the amount. For example if `currencyCode` is `"USD"`, then 1 unit is one US dollar.|

<h2 id="tocS_Note">Note</h2>
<!-- backwards compatibility -->
<a id="schemanote"></a>
<a id="schema_Note"></a>
<a id="tocSnote"></a>
<a id="tocsnote"></a>

```json
{
  "createTime": "string",
  "creatorRole": "BUYER_SELLER_ROLE_UNSPECIFIED",
  "note": "string"
}
```

A text note attached to the proposal to facilitate the communication between buyers and sellers.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|read-only|Output only. When this note was created.|
|creatorRole|string|false|read-only|Output only. The role who created the note.|
|note|string|false|none|The text of the note. Maximum length is 1024 characters.|

#### Enumerated Values

|Property|Value|
|---|---|
|creatorRole|BUYER_SELLER_ROLE_UNSPECIFIED|
|creatorRole|BUYER|
|creatorRole|SELLER|

<h2 id="tocS_OperatingSystemTargeting">OperatingSystemTargeting</h2>
<!-- backwards compatibility -->
<a id="schemaoperatingsystemtargeting"></a>
<a id="schema_OperatingSystemTargeting"></a>
<a id="tocSoperatingsystemtargeting"></a>
<a id="tocsoperatingsystemtargeting"></a>

```json
{
  "operatingSystemCriteria": {
    "excludedCriteriaIds": [
      "string"
    ],
    "targetedCriteriaIds": [
      "string"
    ]
  },
  "operatingSystemVersionCriteria": {
    "excludedCriteriaIds": [
      "string"
    ],
    "targetedCriteriaIds": [
      "string"
    ]
  }
}
```

Represents targeting information for operating systems.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operatingSystemCriteria|[CriteriaTargeting](#schemacriteriatargeting)|false|none|IDs of operating systems to be included/excluded.|
|operatingSystemVersionCriteria|[CriteriaTargeting](#schemacriteriatargeting)|false|none|IDs of operating system versions to be included/excluded.|

<h2 id="tocS_PauseFinalizedDealRequest">PauseFinalizedDealRequest</h2>
<!-- backwards compatibility -->
<a id="schemapausefinalizeddealrequest"></a>
<a id="schema_PauseFinalizedDealRequest"></a>
<a id="tocSpausefinalizeddealrequest"></a>
<a id="tocspausefinalizeddealrequest"></a>

```json
{
  "reason": "string"
}
```

Request message for pausing a finalized deal.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reason|string|false|none|The reason to pause the finalized deal, will be displayed to the seller. Maximum length is 1000 characters.|

<h2 id="tocS_PlacementTargeting">PlacementTargeting</h2>
<!-- backwards compatibility -->
<a id="schemaplacementtargeting"></a>
<a id="schema_PlacementTargeting"></a>
<a id="tocSplacementtargeting"></a>
<a id="tocsplacementtargeting"></a>

```json
{
  "mobileApplicationTargeting": {
    "firstPartyTargeting": {
      "excludedAppIds": [
        "string"
      ],
      "targetedAppIds": [
        "string"
      ]
    }
  },
  "uriTargeting": {
    "excludedUris": [
      "string"
    ],
    "targetedUris": [
      "string"
    ]
  }
}
```

Represents targeting about where the ads can appear, for example, certain sites or mobile applications. Different placement targeting types will be logically OR'ed.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mobileApplicationTargeting|[MobileApplicationTargeting](#schemamobileapplicationtargeting)|false|none|Mobile application targeting information in a deal. This doesn't apply to Auction Packages.|
|uriTargeting|[UriTargeting](#schemauritargeting)|false|none|URLs to be included/excluded.|

<h2 id="tocS_PreferredDealTerms">PreferredDealTerms</h2>
<!-- backwards compatibility -->
<a id="schemapreferreddealterms"></a>
<a id="schema_PreferredDealTerms"></a>
<a id="tocSpreferreddealterms"></a>
<a id="tocspreferreddealterms"></a>

```json
{
  "fixedPrice": {
    "amount": {
      "currencyCode": "string",
      "nanos": 0,
      "units": "string"
    },
    "type": "TYPE_UNSPECIFIED"
  }
}
```

Pricing terms for Preferred Deals.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fixedPrice|[Price](#schemaprice)|false|none|Fixed price for the deal.|

<h2 id="tocS_Price">Price</h2>
<!-- backwards compatibility -->
<a id="schemaprice"></a>
<a id="schema_Price"></a>
<a id="tocSprice"></a>
<a id="tocsprice"></a>

```json
{
  "amount": {
    "currencyCode": "string",
    "nanos": 0,
    "units": "string"
  },
  "type": "TYPE_UNSPECIFIED"
}
```

Represents a price and a pricing type for a deal.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|[Money](#schemamoney)|false|none|The actual price with currency specified.|
|type|string|false|none|The pricing type for the deal.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|TYPE_UNSPECIFIED|
|type|CPM|
|type|CPD|

<h2 id="tocS_PrivateAuctionTerms">PrivateAuctionTerms</h2>
<!-- backwards compatibility -->
<a id="schemaprivateauctionterms"></a>
<a id="schema_PrivateAuctionTerms"></a>
<a id="tocSprivateauctionterms"></a>
<a id="tocsprivateauctionterms"></a>

```json
{
  "floorPrice": {
    "amount": {
      "currencyCode": "string",
      "nanos": 0,
      "units": "string"
    },
    "type": "TYPE_UNSPECIFIED"
  },
  "openAuctionAllowed": true
}
```

Pricing terms for Private Auctions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|floorPrice|[Price](#schemaprice)|false|none|The minimum price buyer has to bid to compete in the private auction.|
|openAuctionAllowed|boolean|false|read-only|Output only. True if open auction buyers are allowed to compete with invited buyers in this private auction.|

<h2 id="tocS_PrivateData">PrivateData</h2>
<!-- backwards compatibility -->
<a id="schemaprivatedata"></a>
<a id="schema_PrivateData"></a>
<a id="tocSprivatedata"></a>
<a id="tocsprivatedata"></a>

```json
{
  "referenceId": "string"
}
```

Buyers are allowed to store certain types of private data in a proposal or deal.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|referenceId|string|false|none|A buyer specified reference ID. This can be queried in the list operations (max-length: 1024 unicode code units).|

<h2 id="tocS_ProgrammaticGuaranteedTerms">ProgrammaticGuaranteedTerms</h2>
<!-- backwards compatibility -->
<a id="schemaprogrammaticguaranteedterms"></a>
<a id="schema_ProgrammaticGuaranteedTerms"></a>
<a id="tocSprogrammaticguaranteedterms"></a>
<a id="tocsprogrammaticguaranteedterms"></a>

```json
{
  "fixedPrice": {
    "amount": {
      "currencyCode": "string",
      "nanos": 0,
      "units": "string"
    },
    "type": "TYPE_UNSPECIFIED"
  },
  "guaranteedLooks": "string",
  "impressionCap": "string",
  "minimumDailyLooks": "string",
  "percentShareOfVoice": "string",
  "reservationType": "RESERVATION_TYPE_UNSPECIFIED"
}
```

Pricing terms for Programmatic Guaranteed Deals.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fixedPrice|[Price](#schemaprice)|false|none|Fixed price for the deal.|
|guaranteedLooks|string(int64)|false|none|Count of guaranteed looks.|
|impressionCap|string(int64)|false|none|The lifetime impression cap for CPM Sponsorship deals. Deal will stop serving when cap is reached.|
|minimumDailyLooks|string(int64)|false|none|Daily minimum looks for CPD deal types.|
|percentShareOfVoice|string(int64)|false|none|For sponsorship deals, this is the percentage of the seller's eligible impressions that the deal will serve until the cap is reached. Valid value is within range 0~100.|
|reservationType|string|false|none|The reservation type for a Programmatic Guaranteed deal. This indicates whether the number of impressions is fixed, or a percent of available impressions. If not specified, the default reservation type is STANDARD.|

#### Enumerated Values

|Property|Value|
|---|---|
|reservationType|RESERVATION_TYPE_UNSPECIFIED|
|reservationType|STANDARD|
|reservationType|SPONSORSHIP|

<h2 id="tocS_Proposal">Proposal</h2>
<!-- backwards compatibility -->
<a id="schemaproposal"></a>
<a id="schema_Proposal"></a>
<a id="tocSproposal"></a>
<a id="tocsproposal"></a>

```json
{
  "billedBuyer": "string",
  "buyer": "string",
  "buyerContacts": [
    {
      "displayName": "string",
      "email": "string"
    }
  ],
  "buyerPrivateData": {
    "referenceId": "string"
  },
  "client": "string",
  "dealType": "DEAL_TYPE_UNSPECIFIED",
  "displayName": "string",
  "isRenegotiating": true,
  "lastUpdaterOrCommentorRole": "BUYER_SELLER_ROLE_UNSPECIFIED",
  "name": "string",
  "notes": [
    {
      "createTime": "string",
      "creatorRole": "BUYER_SELLER_ROLE_UNSPECIFIED",
      "note": "string"
    }
  ],
  "originatorRole": "BUYER_SELLER_ROLE_UNSPECIFIED",
  "pausingConsented": true,
  "proposalRevision": "string",
  "publisherProfile": "string",
  "sellerContacts": [
    {
      "displayName": "string",
      "email": "string"
    }
  ],
  "state": "STATE_UNSPECIFIED",
  "termsAndConditions": "string",
  "updateTime": "string"
}
```

Represents a proposal in the Marketplace. A proposal is the unit of negotiation between a seller and a buyer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|billedBuyer|string|false|read-only|Output only. When the client field is populated, this field refers to the buyer who creates and manages the client buyer and gets billed on behalf of the client buyer; when the buyer field is populated, this field is the same value as buyer. Format : `buyers/{buyerAccountId}`|
|buyer|string|false|read-only|Output only. Refers to a buyer in The Realtime-bidding API. Format: `buyers/{buyerAccountId}`|
|buyerContacts|[[Contact](#schemacontact)]|false|none|Contact information for the buyer.|
|buyerPrivateData|[PrivateData](#schemaprivatedata)|false|none|Buyer private data (hidden from seller).|
|client|string|false|read-only|Output only. Refers to a Client. Format: `buyers/{buyerAccountId}/clients/{clientAccountid}`|
|dealType|string|false|read-only|Output only. Type of deal the proposal contains.|
|displayName|string|false|read-only|Output only. The descriptive name for the proposal. Maximum length of 255 unicode characters is allowed. Control characters are not allowed. Buyers cannot update this field. Note: Not to be confused with name, which is a unique identifier of the proposal.|
|isRenegotiating|boolean|false|read-only|Output only. True if the proposal was previously finalized and is now being renegotiated.|
|lastUpdaterOrCommentorRole|string|false|read-only|Output only. The role of the last user that either updated the proposal or left a comment.|
|name|string|false|none|Immutable. The name of the proposal serving as a unique identifier. Format: buyers/{accountId}/proposals/{proposalId}|
|notes|[[Note](#schemanote)]|false|none|A list of notes from the buyer and the seller attached to this proposal.|
|originatorRole|string|false|read-only|Output only. Indicates whether the buyer/seller created the proposal.|
|pausingConsented|boolean|false|none|Whether pausing is allowed for the proposal. This is a negotiable term between buyers and publishers.|
|proposalRevision|string(int64)|false|read-only|Output only. The revision number for the proposal. Each update to the proposal or deal causes the proposal revision number to auto-increment. The buyer keeps track of the last revision number they know of and pass it in when making an update. If the head revision number on the server has since incremented, then an ABORTED error is returned during the update operation to let the buyer know that a subsequent update was made.|
|publisherProfile|string|false|none|Immutable. Reference to the seller on the proposal. Format: `buyers/{buyerAccountId}/publisherProfiles/{publisherProfileId}` Note: This field may be set only when creating the resource. Modifying this field while updating the resource will result in an error.|
|sellerContacts|[[Contact](#schemacontact)]|false|read-only|Output only. Contact information for the seller.|
|state|string|false|read-only|Output only. Indicates the state of the proposal.|
|termsAndConditions|string|false|read-only|Output only. The terms and conditions associated with this proposal. Accepting a proposal implies acceptance of this field. This is created by the seller, the buyer can only view it.|
|updateTime|string(google-datetime)|false|read-only|Output only. The time when the proposal was last revised.|

#### Enumerated Values

|Property|Value|
|---|---|
|dealType|DEAL_TYPE_UNSPECIFIED|
|dealType|PREFERRED_DEAL|
|dealType|PRIVATE_AUCTION|
|dealType|PROGRAMMATIC_GUARANTEED|
|lastUpdaterOrCommentorRole|BUYER_SELLER_ROLE_UNSPECIFIED|
|lastUpdaterOrCommentorRole|BUYER|
|lastUpdaterOrCommentorRole|SELLER|
|originatorRole|BUYER_SELLER_ROLE_UNSPECIFIED|
|originatorRole|BUYER|
|originatorRole|SELLER|
|state|STATE_UNSPECIFIED|
|state|BUYER_REVIEW_REQUESTED|
|state|SELLER_REVIEW_REQUESTED|
|state|BUYER_ACCEPTANCE_REQUESTED|
|state|FINALIZED|
|state|TERMINATED|

<h2 id="tocS_PublisherProfile">PublisherProfile</h2>
<!-- backwards compatibility -->
<a id="schemapublisherprofile"></a>
<a id="schema_PublisherProfile"></a>
<a id="tocSpublisherprofile"></a>
<a id="tocspublisherprofile"></a>

```json
{
  "audienceDescription": "string",
  "directDealsContact": "string",
  "displayName": "string",
  "domains": [
    "string"
  ],
  "isParent": true,
  "logoUrl": "string",
  "mediaKitUrl": "string",
  "mobileApps": [
    {
      "appStore": "APP_STORE_TYPE_UNSPECIFIED",
      "externalAppId": "string",
      "name": "string"
    }
  ],
  "name": "string",
  "overview": "string",
  "pitchStatement": "string",
  "programmaticDealsContact": "string",
  "publisherCode": "string",
  "samplePageUrl": "string",
  "topHeadlines": [
    "string"
  ]
}
```

The values in the publisher profile are supplied by the publisher. All fields are not filterable unless stated otherwise.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|audienceDescription|string|false|none|Description on the publisher's audience.|
|directDealsContact|string|false|none|Contact information for direct reservation deals. This is free text entered by the publisher and may include information like names, phone numbers and email addresses.|
|displayName|string|false|none|Display name of the publisher profile. Can be used to filter the response of the publisherProfiles.list method.|
|domains|[string]|false|none|The list of domains represented in this publisher profile. Empty if this is a parent profile. These are top private domains, meaning that these will not contain a string like "photos.google.co.uk/123", but will instead contain "google.co.uk". Can be used to filter the response of the publisherProfiles.list method.|
|isParent|boolean|false|none|Indicates if this profile is the parent profile of the seller. A parent profile represents all the inventory from the seller, as opposed to child profile that is created to brand a portion of inventory. One seller has only one parent publisher profile, and can have multiple child profiles. See https://support.google.com/admanager/answer/6035806 for details. Can be used to filter the response of the publisherProfiles.list method by setting the filter to "is_parent: true".|
|logoUrl|string|false|none|A Google public URL to the logo for this publisher profile. The logo is stored as a PNG, JPG, or GIF image.|
|mediaKitUrl|string|false|none|URL to additional marketing and sales materials.|
|mobileApps|[[PublisherProfileMobileApplication](#schemapublisherprofilemobileapplication)]|false|none|The list of apps represented in this publisher profile. Empty if this is a parent profile.|
|name|string|false|none|Name of the publisher profile. Format: `buyers/{buyer}/publisherProfiles/{publisher_profile}`|
|overview|string|false|none|Overview of the publisher.|
|pitchStatement|string|false|none|Statement explaining what's unique about publisher's business, and why buyers should partner with the publisher.|
|programmaticDealsContact|string|false|none|Contact information for programmatic deals. This is free text entered by the publisher and may include information like names, phone numbers and email addresses.|
|publisherCode|string|false|none|A unique identifying code for the seller. This value is the same for all of the seller's parent and child publisher profiles. Can be used to filter the response of the publisherProfiles.list method.|
|samplePageUrl|string|false|none|URL to a sample content page.|
|topHeadlines|[string]|false|none|Up to three key metrics and rankings. For example, "#1 Mobile News Site for 20 Straight Months".|

<h2 id="tocS_PublisherProfileMobileApplication">PublisherProfileMobileApplication</h2>
<!-- backwards compatibility -->
<a id="schemapublisherprofilemobileapplication"></a>
<a id="schema_PublisherProfileMobileApplication"></a>
<a id="tocSpublisherprofilemobileapplication"></a>
<a id="tocspublisherprofilemobileapplication"></a>

```json
{
  "appStore": "APP_STORE_TYPE_UNSPECIFIED",
  "externalAppId": "string",
  "name": "string"
}
```

A mobile application that contains a external app ID, name, and app store.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appStore|string|false|none|The app store the app belongs to. Can be used to filter the response of the publisherProfiles.list method.|
|externalAppId|string|false|none|The external ID for the app from its app store. Can be used to filter the response of the publisherProfiles.list method.|
|name|string|false|none|The name of the app.|

#### Enumerated Values

|Property|Value|
|---|---|
|appStore|APP_STORE_TYPE_UNSPECIFIED|
|appStore|APPLE_ITUNES|
|appStore|GOOGLE_PLAY|
|appStore|ROKU|
|appStore|AMAZON_FIRE_TV|
|appStore|PLAYSTATION|
|appStore|XBOX|
|appStore|SAMSUNG_TV|
|appStore|AMAZON|
|appStore|OPPO|
|appStore|SAMSUNG|
|appStore|VIVO|
|appStore|XIAOMI|

<h2 id="tocS_ResumeFinalizedDealRequest">ResumeFinalizedDealRequest</h2>
<!-- backwards compatibility -->
<a id="schemaresumefinalizeddealrequest"></a>
<a id="schema_ResumeFinalizedDealRequest"></a>
<a id="tocSresumefinalizeddealrequest"></a>
<a id="tocsresumefinalizeddealrequest"></a>

```json
{}
```

Request message for resuming a finalized deal.

<h2 id="tocS_RtbMetrics">RtbMetrics</h2>
<!-- backwards compatibility -->
<a id="schemartbmetrics"></a>
<a id="schema_RtbMetrics"></a>
<a id="tocSrtbmetrics"></a>
<a id="tocsrtbmetrics"></a>

```json
{
  "adImpressions7Days": "string",
  "bidRate7Days": 0,
  "bidRequests7Days": "string",
  "bids7Days": "string",
  "filteredBidRate7Days": 0,
  "mustBidRateCurrentMonth": 0
}
```

Real-time bidding metrics. For what each metric means refer to [Report metrics](https://support.google.com/adxbuyer/answer/6115195#report-metrics)

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adImpressions7Days|string(int64)|false|none|Ad impressions in last 7 days.|
|bidRate7Days|number(double)|false|none|Bid rate in last 7 days, calculated by (bids / bid requests).|
|bidRequests7Days|string(int64)|false|none|Bid requests in last 7 days.|
|bids7Days|string(int64)|false|none|Bids in last 7 days.|
|filteredBidRate7Days|number(double)|false|none|Filtered bid rate in last 7 days, calculated by (filtered bids / bids).|
|mustBidRateCurrentMonth|number(double)|false|none|Must bid rate for current month.|

<h2 id="tocS_SendRfpRequest">SendRfpRequest</h2>
<!-- backwards compatibility -->
<a id="schemasendrfprequest"></a>
<a id="schema_SendRfpRequest"></a>
<a id="tocSsendrfprequest"></a>
<a id="tocssendrfprequest"></a>

```json
{
  "buyerContacts": [
    {
      "displayName": "string",
      "email": "string"
    }
  ],
  "client": "string",
  "displayName": "string",
  "estimatedGrossSpend": {
    "currencyCode": "string",
    "nanos": 0,
    "units": "string"
  },
  "flightEndTime": "string",
  "flightStartTime": "string",
  "geoTargeting": {
    "excludedCriteriaIds": [
      "string"
    ],
    "targetedCriteriaIds": [
      "string"
    ]
  },
  "inventorySizeTargeting": {
    "excludedInventorySizes": [
      {
        "height": "string",
        "type": "TYPE_UNSPECIFIED",
        "width": "string"
      }
    ],
    "targetedInventorySizes": [
      {
        "height": "string",
        "type": "TYPE_UNSPECIFIED",
        "width": "string"
      }
    ]
  },
  "note": "string",
  "preferredDealTerms": {
    "fixedPrice": {
      "amount": {
        "currencyCode": "string",
        "nanos": 0,
        "units": "string"
      },
      "type": "TYPE_UNSPECIFIED"
    }
  },
  "programmaticGuaranteedTerms": {
    "fixedPrice": {
      "amount": {
        "currencyCode": "string",
        "nanos": 0,
        "units": "string"
      },
      "type": "TYPE_UNSPECIFIED"
    },
    "guaranteedLooks": "string",
    "impressionCap": "string",
    "minimumDailyLooks": "string",
    "percentShareOfVoice": "string",
    "reservationType": "RESERVATION_TYPE_UNSPECIFIED"
  },
  "publisherProfile": "string"
}
```

Request to send an RFP. All fields in this request are proposed to publisher and subject to changes by publisher during later negotiation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|buyerContacts|[[Contact](#schemacontact)]|false|none|Contact information for the buyer.|
|client|string|false|none|If the current buyer is sending the RFP on behalf of its client, use this field to specify the name of the client in the format: `buyers/{accountId}/clients/{clientAccountid}`.|
|displayName|string|false|none|Required. The display name of the proposal being created by this RFP.|
|estimatedGrossSpend|[Money](#schemamoney)|false|none|Specified by buyers in request for proposal (RFP) to notify publisher the total estimated spend for the proposal. Publishers will receive this information and send back proposed deals accordingly.|
|flightEndTime|string(google-datetime)|false|none|Required. Proposed flight end time of the RFP. A timestamp in RFC3339 UTC "Zulu" format. Note that the specified value will be truncated to a granularity of one second.|
|flightStartTime|string(google-datetime)|false|none|Required. Proposed flight start time of the RFP. A timestamp in RFC3339 UTC "Zulu" format. Note that the specified value will be truncated to a granularity of one second.|
|geoTargeting|[CriteriaTargeting](#schemacriteriatargeting)|false|none|Geo criteria IDs to be targeted. Refer to Geo tables.|
|inventorySizeTargeting|[InventorySizeTargeting](#schemainventorysizetargeting)|false|none|Inventory sizes to be targeted.|
|note|string|false|none|A message that is sent to the publisher. Maximum length is 1024 characters.|
|preferredDealTerms|[PreferredDealTerms](#schemapreferreddealterms)|false|none|The terms for preferred deals.|
|programmaticGuaranteedTerms|[ProgrammaticGuaranteedTerms](#schemaprogrammaticguaranteedterms)|false|none|The terms for programmatic guaranteed deals.|
|publisherProfile|string|false|none|Required. The profile of the publisher who will receive this RFP in the format: `buyers/{accountId}/publisherProfiles/{publisherProfileId}`.|

<h2 id="tocS_SetReadyToServeRequest">SetReadyToServeRequest</h2>
<!-- backwards compatibility -->
<a id="schemasetreadytoserverequest"></a>
<a id="schema_SetReadyToServeRequest"></a>
<a id="tocSsetreadytoserverequest"></a>
<a id="tocssetreadytoserverequest"></a>

```json
{}
```

Request message for setting ready to serve for a finalized deal.

<h2 id="tocS_SubscribeAuctionPackageRequest">SubscribeAuctionPackageRequest</h2>
<!-- backwards compatibility -->
<a id="schemasubscribeauctionpackagerequest"></a>
<a id="schema_SubscribeAuctionPackageRequest"></a>
<a id="tocSsubscribeauctionpackagerequest"></a>
<a id="tocssubscribeauctionpackagerequest"></a>

```json
{}
```

Request message for SubscribeAuctionPackage.

<h2 id="tocS_SubscribeClientsRequest">SubscribeClientsRequest</h2>
<!-- backwards compatibility -->
<a id="schemasubscribeclientsrequest"></a>
<a id="schema_SubscribeClientsRequest"></a>
<a id="tocSsubscribeclientsrequest"></a>
<a id="tocssubscribeclientsrequest"></a>

```json
{
  "clients": [
    "string"
  ]
}
```

Request message for SubscribeAuctionPackageClients.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clients|[string]|false|none|Optional. A list of client buyers to subscribe to the auction package, with client buyer in the format `buyers/{accountId}/clients/{clientAccountId}`. The current buyer will be subscribed to the auction package regardless of the list contents if not already.|

<h2 id="tocS_TechnologyTargeting">TechnologyTargeting</h2>
<!-- backwards compatibility -->
<a id="schematechnologytargeting"></a>
<a id="schema_TechnologyTargeting"></a>
<a id="tocStechnologytargeting"></a>
<a id="tocstechnologytargeting"></a>

```json
{
  "deviceCapabilityTargeting": {
    "excludedCriteriaIds": [
      "string"
    ],
    "targetedCriteriaIds": [
      "string"
    ]
  },
  "deviceCategoryTargeting": {
    "excludedCriteriaIds": [
      "string"
    ],
    "targetedCriteriaIds": [
      "string"
    ]
  },
  "operatingSystemTargeting": {
    "operatingSystemCriteria": {
      "excludedCriteriaIds": [
        "string"
      ],
      "targetedCriteriaIds": [
        "string"
      ]
    },
    "operatingSystemVersionCriteria": {
      "excludedCriteriaIds": [
        "string"
      ],
      "targetedCriteriaIds": [
        "string"
      ]
    }
  }
}
```

Represents targeting about various types of technology.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deviceCapabilityTargeting|[CriteriaTargeting](#schemacriteriatargeting)|false|none|IDs of device capabilities to be included/excluded.|
|deviceCategoryTargeting|[CriteriaTargeting](#schemacriteriatargeting)|false|none|IDs of device categories to be included/excluded.|
|operatingSystemTargeting|[OperatingSystemTargeting](#schemaoperatingsystemtargeting)|false|none|Operating system related targeting information.|

<h2 id="tocS_TimeOfDay">TimeOfDay</h2>
<!-- backwards compatibility -->
<a id="schematimeofday"></a>
<a id="schema_TimeOfDay"></a>
<a id="tocStimeofday"></a>
<a id="tocstimeofday"></a>

```json
{
  "hours": 0,
  "minutes": 0,
  "nanos": 0,
  "seconds": 0
}
```

Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hours|integer(int32)|false|none|Hours of day in 24 hour format. Should be from 0 to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time.|
|minutes|integer(int32)|false|none|Minutes of hour of day. Must be from 0 to 59.|
|nanos|integer(int32)|false|none|Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.|
|seconds|integer(int32)|false|none|Seconds of minutes of the time. Must normally be from 0 to 59. An API may allow the value 60 if it allows leap-seconds.|

<h2 id="tocS_TimeZone">TimeZone</h2>
<!-- backwards compatibility -->
<a id="schematimezone"></a>
<a id="schema_TimeZone"></a>
<a id="tocStimezone"></a>
<a id="tocstimezone"></a>

```json
{
  "id": "string",
  "version": "string"
}
```

Represents a time zone from the [IANA Time Zone Database](https://www.iana.org/time-zones).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|IANA Time Zone Database time zone, e.g. "America/New_York".|
|version|string|false|none|Optional. IANA Time Zone Database version number, e.g. "2019a".|

<h2 id="tocS_UnsubscribeAuctionPackageRequest">UnsubscribeAuctionPackageRequest</h2>
<!-- backwards compatibility -->
<a id="schemaunsubscribeauctionpackagerequest"></a>
<a id="schema_UnsubscribeAuctionPackageRequest"></a>
<a id="tocSunsubscribeauctionpackagerequest"></a>
<a id="tocsunsubscribeauctionpackagerequest"></a>

```json
{}
```

Request message for UnsubscribeAuctionPackage.

<h2 id="tocS_UnsubscribeClientsRequest">UnsubscribeClientsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaunsubscribeclientsrequest"></a>
<a id="schema_UnsubscribeClientsRequest"></a>
<a id="tocSunsubscribeclientsrequest"></a>
<a id="tocsunsubscribeclientsrequest"></a>

```json
{
  "clients": [
    "string"
  ]
}
```

Request message for UnsubscribeAuctionPackage.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clients|[string]|false|none|Optional. A list of client buyers to unsubscribe from the auction package, with client buyer in the format `buyers/{accountId}/clients/{clientAccountId}`.|

<h2 id="tocS_UpdateDealRequest">UpdateDealRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedealrequest"></a>
<a id="schema_UpdateDealRequest"></a>
<a id="tocSupdatedealrequest"></a>
<a id="tocsupdatedealrequest"></a>

```json
{
  "deal": {
    "billedBuyer": "string",
    "buyer": "string",
    "client": "string",
    "createTime": "string",
    "creativeRequirements": {
      "creativeFormat": "CREATIVE_FORMAT_UNSPECIFIED",
      "creativePreApprovalPolicy": "CREATIVE_PRE_APPROVAL_POLICY_UNSPECIFIED",
      "creativeSafeFrameCompatibility": "CREATIVE_SAFE_FRAME_COMPATIBILITY_UNSPECIFIED",
      "maxAdDurationMs": "string",
      "programmaticCreativeSource": "PROGRAMMATIC_CREATIVE_SOURCE_UNSPECIFIED",
      "skippableAdType": "SKIPPABLE_AD_TYPE_UNSPECIFIED"
    },
    "dealType": "DEAL_TYPE_UNSPECIFIED",
    "deliveryControl": {
      "companionDeliveryType": "COMPANION_DELIVERY_TYPE_UNSPECIFIED",
      "creativeRotationType": "CREATIVE_ROTATION_TYPE_UNSPECIFIED",
      "deliveryRateType": "DELIVERY_RATE_TYPE_UNSPECIFIED",
      "frequencyCap": [
        {
          "maxImpressions": 0,
          "timeUnitType": "TIME_UNIT_TYPE_UNSPECIFIED",
          "timeUnitsCount": 0
        }
      ],
      "roadblockingType": "ROADBLOCKING_TYPE_UNSPECIFIED"
    },
    "description": "string",
    "displayName": "string",
    "estimatedGrossSpend": {
      "currencyCode": "string",
      "nanos": 0,
      "units": "string"
    },
    "flightEndTime": "string",
    "flightStartTime": "string",
    "name": "string",
    "preferredDealTerms": {
      "fixedPrice": {
        "amount": {
          "currencyCode": "string",
          "nanos": 0,
          "units": "string"
        },
        "type": "TYPE_UNSPECIFIED"
      }
    },
    "privateAuctionTerms": {
      "floorPrice": {
        "amount": {
          "currencyCode": "string",
          "nanos": 0,
          "units": "string"
        },
        "type": "TYPE_UNSPECIFIED"
      },
      "openAuctionAllowed": true
    },
    "programmaticGuaranteedTerms": {
      "fixedPrice": {
        "amount": {
          "currencyCode": "string",
          "nanos": 0,
          "units": "string"
        },
        "type": "TYPE_UNSPECIFIED"
      },
      "guaranteedLooks": "string",
      "impressionCap": "string",
      "minimumDailyLooks": "string",
      "percentShareOfVoice": "string",
      "reservationType": "RESERVATION_TYPE_UNSPECIFIED"
    },
    "proposalRevision": "string",
    "publisherProfile": "string",
    "sellerTimeZone": {
      "id": "string",
      "version": "string"
    },
    "targeting": {
      "daypartTargeting": {
        "dayParts": [
          {
            "dayOfWeek": "DAY_OF_WEEK_UNSPECIFIED",
            "endTime": {
              "hours": 0,
              "minutes": 0,
              "nanos": 0,
              "seconds": 0
            },
            "startTime": {
              "hours": 0,
              "minutes": 0,
              "nanos": 0,
              "seconds": 0
            }
          }
        ],
        "timeZoneType": "TIME_ZONE_TYPE_UNSPECIFIED"
      },
      "geoTargeting": {
        "excludedCriteriaIds": [
          "string"
        ],
        "targetedCriteriaIds": [
          "string"
        ]
      },
      "inventorySizeTargeting": {
        "excludedInventorySizes": [
          {
            "height": "string",
            "type": "TYPE_UNSPECIFIED",
            "width": "string"
          }
        ],
        "targetedInventorySizes": [
          {
            "height": "string",
            "type": "TYPE_UNSPECIFIED",
            "width": "string"
          }
        ]
      },
      "inventoryTypeTargeting": {
        "inventoryTypes": [
          "INVENTORY_TYPE_UNSPECIFIED"
        ]
      },
      "placementTargeting": {
        "mobileApplicationTargeting": {
          "firstPartyTargeting": {
            "excludedAppIds": [
              "string"
            ],
            "targetedAppIds": [
              "string"
            ]
          }
        },
        "uriTargeting": {
          "excludedUris": [
            "string"
          ],
          "targetedUris": [
            "string"
          ]
        }
      },
      "technologyTargeting": {
        "deviceCapabilityTargeting": {
          "excludedCriteriaIds": [
            "string"
          ],
          "targetedCriteriaIds": [
            "string"
          ]
        },
        "deviceCategoryTargeting": {
          "excludedCriteriaIds": [
            "string"
          ],
          "targetedCriteriaIds": [
            "string"
          ]
        },
        "operatingSystemTargeting": {
          "operatingSystemCriteria": {
            "excludedCriteriaIds": [
              "string"
            ],
            "targetedCriteriaIds": [
              "string"
            ]
          },
          "operatingSystemVersionCriteria": {
            "excludedCriteriaIds": [
              "string"
            ],
            "targetedCriteriaIds": [
              "string"
            ]
          }
        }
      },
      "userListTargeting": {
        "excludedCriteriaIds": [
          "string"
        ],
        "targetedCriteriaIds": [
          "string"
        ]
      },
      "videoTargeting": {
        "excludedPositionTypes": [
          "POSITION_TYPE_UNSPECIFIED"
        ],
        "targetedPositionTypes": [
          "POSITION_TYPE_UNSPECIFIED"
        ]
      }
    },
    "updateTime": "string"
  },
  "updateMask": "string"
}
```

Request message for updating the deal at the given revision number.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deal|[Deal](#schemadeal)|false|none|Required. The deal to update. The deal's `name` field is used to identify the deal to be updated. Note: proposal_revision will have to be provided within the resource or else an error will be thrown. Format: buyers/{accountId}/proposals/{proposalId}/deals/{dealId}|
|updateMask|string(google-fieldmask)|false|none|List of fields to be updated. If empty or unspecified, the service will update all fields populated in the update request excluding the output only fields and primitive fields with default value. Note that explicit field mask is required in order to reset a primitive field back to its default value, for example, false for boolean fields, 0 for integer fields. A special field mask consisting of a single path "*" can be used to indicate full replacement(the equivalent of PUT method), updatable fields unset or unspecified in the input will be cleared or set to default value. Output only fields will be ignored regardless of the value of updateMask.|

<h2 id="tocS_UriTargeting">UriTargeting</h2>
<!-- backwards compatibility -->
<a id="schemauritargeting"></a>
<a id="schema_UriTargeting"></a>
<a id="tocSuritargeting"></a>
<a id="tocsuritargeting"></a>

```json
{
  "excludedUris": [
    "string"
  ],
  "targetedUris": [
    "string"
  ]
}
```

Represents a list of targeted and excluded URLs (for example, google.com). For Private Auction Deals, URLs are either included or excluded. For Programmatic Guaranteed and Preferred Deals, this doesn't apply.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|excludedUris|[string]|false|none|A list of URLs to be excluded.|
|targetedUris|[string]|false|none|A list of URLs to be included.|

<h2 id="tocS_VideoTargeting">VideoTargeting</h2>
<!-- backwards compatibility -->
<a id="schemavideotargeting"></a>
<a id="schema_VideoTargeting"></a>
<a id="tocSvideotargeting"></a>
<a id="tocsvideotargeting"></a>

```json
{
  "excludedPositionTypes": [
    "POSITION_TYPE_UNSPECIFIED"
  ],
  "targetedPositionTypes": [
    "POSITION_TYPE_UNSPECIFIED"
  ]
}
```

Represents targeting information about video.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|excludedPositionTypes|[string]|false|none|A list of video positions to be excluded. When this field is populated, the targeted_position_types field must be empty.|
|targetedPositionTypes|[string]|false|none|A list of video positions to be included. When this field is populated, the excluded_position_types field must be empty.|

#### Enumerated Values

|Property|Value|
|---|---|
|excludedPositionTypes|POSITION_TYPE_UNSPECIFIED|
|excludedPositionTypes|PREROLL|
|excludedPositionTypes|MIDROLL|
|excludedPositionTypes|POSTROLL|
|targetedPositionTypes|POSITION_TYPE_UNSPECIFIED|
|targetedPositionTypes|PREROLL|
|targetedPositionTypes|MIDROLL|
|targetedPositionTypes|POSTROLL|
